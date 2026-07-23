import { factory } from '../../factory';
import { prisma } from '@flott/db';
import { PublicKey, Connection } from '@solana/web3.js';
import { ERROR_CODES, ACCOUNT_STATUS, SOLANA_CONFIG } from '@flott/shared';
import {getEventAuthority, getProgram, completeTransaction, parseProgramError} from '../../../utils/solana';

const authorizeRequest = factory.createApp();

authorizeRequest.post('/', async (c) => {
  try {
    const userId = c.get('userId');
    const email = c.get('email');

    if (!userId || !email) {
      return c.json({
        success: false,
        error: ERROR_CODES.UNAUTHORIZED,
        message: 'Missing authentication context',
      }, 401);
    }

    const user = await prisma.account.findUnique({ where: { id: userId } });

    if (!user) {
      return c.json({
        success: false,
        error: ERROR_CODES.NOT_FOUND,
        message: 'User not found',
      }, 404);
    }

    if (!user.pubkey) {
      return c.json({
        success: false,
        error: ERROR_CODES.FORBIDDEN,
        message: 'User has no on-chain pubkey set',
      }, 400);
    }

    if (user.status != ACCOUNT_STATUS.INITIALIZED) {
      return c.json({
        success: false,
        error: ERROR_CODES.FORBIDDEN,
        message: 'User must be initialized before authorization',
      }, 400);
    }

    const userAuth = await prisma.privateKey.findUnique({
      where: { accountId: user.id },
    });

    if (!userAuth) {
      return c.json({
        success: false,
        error: ERROR_CODES.NOT_FOUND,
        message: 'No signer key found for user',
      }, 404);
    }

    const serverAddress = process.env.SERVER_PUBLIC_KEY!; // single source of truth for the server's Turnkey key
    const serverPubkey = new PublicKey(serverAddress);
    const ownerPubkey = new PublicKey(user.pubkey);
    const connection = new Connection(SOLANA_CONFIG.DEVNET_URL);
    const program = getProgram();

    const tx = await program.methods
      .authorizeApiUser()
      .accountsPartial({
        server: serverPubkey,
        authority: new PublicKey(userAuth.address),
        owner: ownerPubkey,
        eventAuthority: getEventAuthority(),
        program: program.programId,
      })
      .transaction();

    tx.feePayer = serverPubkey;
    tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;

    let signature: string;
    try {
      signature = await completeTransaction(tx, serverAddress);
    } catch (txError) {
      const programError = parseProgramError(txError);
      if (programError) {
        return c.json({
          success: false,
          error: ERROR_CODES.PROGRAM_ERROR,
          message: programError.message,
        }, 400);
      }
      throw txError;
    }

    return c.json({
      success: true,
      message: 'User authorized successfully',
      signature,
    }, 200);

  } catch (error) {
    console.error('Authorize error:', error);
    return c.json({
      success: false,
      error: ERROR_CODES.INTERNAL_ERROR,
      message: 'An error occurred during authorization',
      details: error instanceof Error ? error.message : 'Unknown error',
    }, 500);
  }
});

export default authorizeRequest;
