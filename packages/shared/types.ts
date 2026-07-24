// Legacy types file - now using Zod schemas
// Please import from schemas.ts for new code
// This file is kept for backward compatibility

export * from './schemas';

export type AuthVariables = {
	userId: string;
	email: string;
	pubkey: string;
};

export type RedisConfig = {
	host: string;
	port: number;
	password?: string;
	tls?: boolean;
}
