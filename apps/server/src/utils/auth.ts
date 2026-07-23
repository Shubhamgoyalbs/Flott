import * as jwt from 'jsonwebtoken';
import {JWT_CONFIG, ERROR_CODES, JWTPayload, AccountStatus, ACCOUNT_STATUS} from '@flott/shared';
import {factory} from "../api/factory";
import {prisma} from "@flott/db";

const getJwtSecret = (): string => {
  return process.env.JWT_SECRET || 'your-secret-key-change-in-production';
}

export function generateToken(payload: any): string {
  return jwt.sign(payload, getJwtSecret(), { expiresIn: JWT_CONFIG.DEFAULT_EXPIRY });
}

export function verifyToken(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, getJwtSecret()) as JWTPayload;
  } catch (error) {
    return null;
  }
}

export const authMiddleware = factory.createMiddleware(async (c, next) => {
  const authHeader = c.req.header('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return c.json({
      success: false,
      error: ERROR_CODES.UNAUTHORIZED,
      message: 'Missing or invalid authorization header',
    }, 401);
  }

  const token = authHeader.substring(7);
  const payload = verifyToken(token);

  if (!payload) {
    return c.json(
      {
        success: false,
        error: ERROR_CODES.UNAUTHORIZED,
        message: 'Invalid or expired token',
      },
      401
    );
  }

  const user = await prisma.account.findUnique({
    where: {
      email: payload.email
    }
  })

  if (!user || user.status == ACCOUNT_STATUS.PENDING) {
    return c.json(
      {
        success: false,
        error: ERROR_CODES.UNAUTHORIZED,
        message: 'Not a valid user',
      },
      401
    );
  }

  c.set('userId', payload.userId);
  c.set('email', payload.email);
  c.set('pubkey', payload.pubkey);

  await next();
});

export const authorizeMiddleware = factory.createMiddleware(async (c, next) => {
  let email = c.get('email');

  const user = await prisma.account.findUnique({
    where: {
      email
    }
  })

  if (!user) {
    return c.json(
      {
        success: false,
        error: ERROR_CODES.UNAUTHORIZED,
        message: 'User not found',
      },
      401
    );
  }

  if (user.status !== ACCOUNT_STATUS.AUTHORIZED) {
    return c.json(
      {
        success: false,
        error: ERROR_CODES.FORBIDDEN,
        message: 'User is not authorized. Status must be Authorized.',
      },
      403
    );
  }

  await next();
});
