// API Constants
export const API_PREFIX = '/api/v1';
export const API_VERSION = 'v1';

// Queue Name
export const QUEUE_NAMES = {
	INDEXER: 'indexer'
}

// Account Status
export const ACCOUNT_STATUS = {
	PENDING: 'PENDING',
	INITIALIZED: 'INITIALIZED',
	AUTHORIZED: 'AUTHORIZED',
} as const;

// Error Codes
export const ERROR_CODES = {
	VALIDATION_ERROR: 'VALIDATION_ERROR',
	UNAUTHORIZED: 'UNAUTHORIZED',
	FORBIDDEN: 'FORBIDDEN',
	NOT_FOUND: 'NOT_FOUND',
	INTERNAL_ERROR: 'INTERNAL_ERROR',
	SOLANA_ERROR: 'SOLANA_ERROR',
	INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
	EMAIL_EXISTS: 'EMAIL_EXISTS',
	USERNAME_EXISTS: 'USERNAME_EXISTS',
	PUBKEY_EXISTS: 'PUBKEY_EXISTS',
	INVALID_PUBKEY: 'INVALID_PUBKEY',
	PUBKEY_NOT_ON_CHAIN: 'PUBKEY_NOT_ON_CHAIN',
	INVALID_SIGNATURE: 'INVALID_SIGNATURE',
	PROGRAM_ERROR: 'PROGRAM_ERROR',
} as const;

// HTTP Status Codes
export const HTTP_STATUS = {
	OK: 200,
	CREATED: 201,
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	FORBIDDEN: 403,
	NOT_FOUND: 404,
	INTERNAL_SERVER_ERROR: 500,
} as const;

// Solana Constants
export const SOLANA_CONFIG = {
	DEVNET_URL: 'https://api.devnet.solana.com',
	MAINNET_URL: 'https://api.mainnet-beta.solana.com',
} as const;

// Messages for signing
export const SIGNING_MESSAGES = {
	SIGNUP: `Welcome to Flott! Please sign this message to verify your wallet ownership and create your account.`,
	VERIFY_ACTION: (action: string) => `Please sign this message to verify you want to perform: ${action}`,
} as const;

// JWT Constants
export const JWT_CONFIG = {
	DEFAULT_EXPIRY: '7d',
	REFRESH_EXPIRY: '30d',
} as const;
