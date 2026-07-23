import { z } from 'zod';

// Auth Schemas
export const signupSchema = z.object({
  email: z.string().email('Invalid email format'),
  username: z.string().min(3, 'Username must be at least 3 characters').max(50, 'Username must be less than 50 characters'),
  pubkey: z.string().min(32, 'Invalid public key').max(44, 'Invalid public key'),
  signature: z.string().min(1, 'Signature is required'),
  message: z.string().min(1, 'Message is required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const signinSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(1, 'Password is required'),
});

export const verifySignatureSchema = z.object({
  pubkey: z.string().min(32, 'Invalid public key').max(44, 'Invalid public key'),
  signature: z.string().min(1, 'Signature is required'),
  message: z.string().min(1, 'Message is required'),
});

export const apiResponseSchema = z.object({
  success: z.boolean(),
  data: z.any().optional(),
  error: z.string().optional(),
  message: z.string().optional(),
});

// JWT Payload Schema
export const jwtPayloadSchema = z.object({
  userId: z.string(),
  email: z.string().email(),
  pubkey: z.string(),
  iat: z.number().optional(),
  exp: z.number().optional(),
});

// Account Status Enum
export const accountStatusEnum = z.enum(['PENDING', 'INITIALIZED', 'AUTHORIZED']);

// Type inference from schemas
export type SignupRequest = z.infer<typeof signupSchema>;
export type SigninRequest = z.infer<typeof signinSchema>;
export type VerifySignatureRequest = z.infer<typeof verifySignatureSchema>;
export type ApiResponse<T = any> = z.infer<typeof apiResponseSchema> & { data?: T };
export type JWTPayload = z.infer<typeof jwtPayloadSchema>;
export type AccountStatus = z.infer<typeof accountStatusEnum>;
