import { Hono } from 'hono';
import { prisma } from '@flott/db';
import {
  signupSchema,
  accountStatusEnum,
  SIGNING_MESSAGES,
  ERROR_CODES
} from '@flott/shared';
import { generateToken } from '../../utils/auth';
import { validatePubkey, verifySignature } from '../../utils/solana';
import { hashPassword } from '../../utils/password';

const signup = new Hono();

signup.post('/', async (c) => {
  try {
    const body = await c.req.json();

    // Validate request body using Zod schema
    const validationResult = signupSchema.safeParse(body);
    if (!validationResult.success) {
      return c.json({
        success: false,
        error: ERROR_CODES.VALIDATION_ERROR,
        message: validationResult.error.issues[0]?.message || 'Validation failed',
      }, 400);
    }

    const { email, username, pubkey, signature, message, password } = validationResult.data;

    // Validate pubkey format and check if it's on-chain
    const pubkeyValidation = await validatePubkey(pubkey);
    if (!pubkeyValidation.valid) {
      return c.json({
        success: false,
        error: ERROR_CODES.INVALID_PUBKEY,
        message: 'Invalid Solana public key format',
      }, 400);
    }

    if (!pubkeyValidation.onChain) {
      return c.json({
        success: false,
        error: ERROR_CODES.PUBKEY_NOT_ON_CHAIN,
        message: 'Public key does not exist on-chain',
      }, 400);
    }

    // Verify the message signature
    const isValidSignature = verifySignature(message, signature, pubkey);
    if (!isValidSignature) {
      return c.json({
        success: false,
        error: ERROR_CODES.INVALID_SIGNATURE,
        message: 'Invalid signature or message not signed by provided pubkey',
      }, 400);
    }

    // Optional: Verify the message matches expected format
    const expectedMessage = SIGNING_MESSAGES.SIGNUP;
    if (message !== expectedMessage) {
      return c.json({
        success: false,
        error: ERROR_CODES.INVALID_SIGNATURE,
        message: 'Message does not match expected format',
        expectedMessage,
      }, 400);
    }

    // Check if user already exists
    const existingUser = await prisma.account.findFirst({
      where: {
        OR: [
          { email },
          { username },
          { pubkey },
        ],
      },
    });

    if (existingUser) {
      if (existingUser.email === email) {
        return c.json({
          success: false,
          error: ERROR_CODES.EMAIL_EXISTS,
          message: 'Email already registered',
        }, 400);
      }
      if (existingUser.username === username) {
        return c.json({
          success: false,
          error: ERROR_CODES.USERNAME_EXISTS,
          message: 'Username already taken',
        }, 400);
      }
      if (existingUser.pubkey === pubkey) {
        return c.json({
          success: false,
          error: ERROR_CODES.PUBKEY_EXISTS,
          message: 'Public key already registered',
        }, 400);
      }
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Generate secret key for API access
    const secretKey = crypto.randomUUID();

    // Create user
    const user = await prisma.account.create({
      data: {
        email,
        username,
        pubkey,
        password: hashedPassword,
        secretKey,
        status: accountStatusEnum.enum.PENDING,
        createdAt: new Date(),
      },
    });

    // Generate JWT token
    const token = generateToken({
      userId: user.id,
      email: user.email,
      pubkey: user.pubkey,
    });

    return c.json({
      success: true,
      token,
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        pubkey: user.pubkey,
        status: user.status,
        createdAt: user.createdAt.toISOString(),
      },
    }, 201);

  } catch (error) {
    console.error('Signup error:', error);
    return c.json({
      success: false,
      error: ERROR_CODES.INTERNAL_ERROR,
      message: 'An error occurred during signup',
    }, 500);
  }
});

export default signup;
