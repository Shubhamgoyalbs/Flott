import {
  PublicKey,
  Connection, sendAndConfirmRawTransaction, Transaction,
} from '@solana/web3.js';
import { SOLANA_CONFIG } from '@flott/shared';
import * as nacl from "tweetnacl";
import * as anchor from "@anchor-lang/core";
import {Program, AnchorError} from "@anchor-lang/core";
import { Flott } from "@flott/idl/flott";
import {TurnkeySigner} from "@turnkey/solana";
import {Turnkey} from "@turnkey/sdk-server";

const connection = new Connection(SOLANA_CONFIG.DEVNET_URL);

/**
 * Validate if a string is a valid Solana public key
 */
export function isValidPublicKey(pubkey: string): boolean {
  try {
    new PublicKey(pubkey);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Check if a public key exists on-chain (has been activated)
 */
export async function isPubkeyOnChain(pubkey: string): Promise<boolean> {
  try {
    const publicKey = new PublicKey(pubkey);
    const balance = await connection.getBalance(publicKey);
    return balance >= 0; // If we can query it, it exists on-chain
  } catch (error) {
    return false;
  }
}

/**
 * Verify a message signature
 */
export function verifySignature(
  message: string,
  signature: string,
  pubkey: string
): boolean {
  try {
    const publicKey = new PublicKey(pubkey);
    const messageBytes = new TextEncoder().encode(message);
    const signatureBytes = Buffer.from(signature, 'base64');

    // ed25519 signatures are always 64 bytes — reject anything malformed early
    if (signatureBytes.length !== 64) {
      return false;
    }

    return nacl.sign.detached.verify(
      messageBytes,
      signatureBytes,
      publicKey.toBytes()
    );
  } catch (error) {
    console.error('Signature verification error:', error);
    return false;
  }
}

/**
 * Validate pubkey and check if it's on-chain
 */
export async function validatePubkey(pubkey: string): Promise<{ valid: boolean; onChain: boolean }> {
  const valid = isValidPublicKey(pubkey);
  if (!valid) {
    return { valid: false, onChain: false };
  }

  const onChain = await isPubkeyOnChain(pubkey);
  return { valid: true, onChain };
}

/**
 * Create server-side Turnkey signer using environment credentials
 */
// export const getServerSigner = () => {
//   if (!process.env.API_PUBLIC_KEY || !process.env.API_PRIVATE_KEY || !process.env.ORGANIZATION_ID || !process.env.SERVER_PRIVATE_KEY_ID || !process.env.SERVER_PUBLIC_KEY_ID) {
//     throw new Error('Missing required Turnkey environment variables');
//   }
//
//   return  createTurnkeySigner({
//     apiPublicKey: process.env.API_PUBLIC_KEY,
//     apiPrivateKey: process.env.API_PRIVATE_KEY,
//     organizationId: process.env.ORGANIZATION_ID,
//     privateKeyId: process.env.SERVER_PRIVATE_KEY_ID,
//     publicKey: process.env.SERVER_PUBLIC_KEY_ID,
//   });
// }
export const getMpcSigner = () => {
  if (
    !process.env.API_PUBLIC_KEY ||
    !process.env.API_PRIVATE_KEY ||
    !process.env.ORGANIZATION_ID ||
    !process.env.SERVER_PRIVATE_KEY_ID
  ) {
    throw new Error('Missing required Turnkey environment variables');
  }

  const turnkeyClient = new Turnkey({
    apiBaseUrl: "https://api.turnkey.com",
    apiPrivateKey: process.env.API_PRIVATE_KEY!,
    apiPublicKey: process.env.API_PUBLIC_KEY!,
    defaultOrganizationId: process.env.ORGANIZATION_ID!,
  });

  return new TurnkeySigner({
    organizationId: process.env.ORGANIZATION_ID!,
    client: turnkeyClient.apiClient(),
  });
};

/**
 * returns the program object generated from the program's generated idl
 * */
export const getProgram = (): Program<Flott> => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  return  anchor.workspace.Flott as Program<Flott>;
}

export const getEventAuthority = () => {
  const program = getProgram();
  const [eventAuthority] = anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from("__event_authority")],
    program.programId
  );
  return eventAuthority;
}

export const completeTransaction = async (tx: Transaction, signer: string) => {
  const mpc = getMpcSigner();

  await mpc.addSignature(tx, signer);

  return sendAndConfirmRawTransaction(connection, tx.serialize(), {
    commitment: 'confirmed',
    maxRetries: 3,
  });
};

/**
 * Extracts a structured Anchor program error from a failed transaction, if present.
 * Returns null for non-program errors (network, signing, RPC failures).
 */
export const parseProgramError = (error: any): { message: string } | null => {
  const logs: string[] | undefined = error?.logs ?? error?.transactionLogs;
  if (!logs) return null;

  const anchorError = AnchorError.parse(logs);
  if (!anchorError) return null;

  return {
    message: anchorError.error.errorMessage,
  };
};
