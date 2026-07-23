import { Hono } from 'hono';
import { prisma } from '@flott/db';
import {
  signinSchema,
  ERROR_CODES
} from '@flott/shared';
import { generateToken } from '../../utils/auth';
import { verifyPassword } from '../../utils/password';

const signin = new Hono();

signin.post('/', async (c) => {
  try {
    const body = await c.req.json();

    // Validate request body using Zod schema
    const validationResult = signinSchema.safeParse(body);
    if (!validationResult.success) {
      return c.json({
        success: false,
        error: ERROR_CODES.VALIDATION_ERROR,
        message: validationResult.error.issues[0]?.message || 'Validation failed',
      }, 400);
    }

    const { email, password } = validationResult.data;

    // Find user by email
    const user = await prisma.account.findUnique({
      where: {
       email
      }
    })

    if (!user) {
      return c.json({
        success: false,
        error: ERROR_CODES.INVALID_CREDENTIALS,
        message: 'Invalid email or password',
      }, 401);
    }

    // Verify password
    const isValidPassword = await verifyPassword(password, user.password);
    if (!isValidPassword) {
      return c.json({
        success: false,
        error: ERROR_CODES.INVALID_CREDENTIALS,
        message: 'Invalid email or password',
      }, 401);
    }

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
    }, 200);

  } catch (error) {
    console.error('Signin error:', error);
    return c.json({
      success: false,
      error: ERROR_CODES.INTERNAL_ERROR,
      message: 'An error occurred during signin',
    }, 500);
  }
});

export default signin;
