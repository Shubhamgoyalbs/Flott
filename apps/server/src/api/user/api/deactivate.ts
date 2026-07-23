import { factory } from '../../factory';
import { prisma } from '@flott/db';
import { PublicKey, Connection } from '@solana/web3.js';
import {ACCOUNT_STATUS, ERROR_CODES, SOLANA_CONFIG} from '@flott/shared';
import {getEventAuthority, getProgram, completeTransaction, parseProgramError} from '../../../utils/solana';
import { getUserDetails } from "../../../utils/helpers";

const deactivateRequest = factory.createApp();

deactivateRequest.post('/', async (c) => {
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

    if (user.status != ACCOUNT_STATUS.AUTHORIZED) {
      return c.json({
        success: false,
        error: ERROR_CODES.FORBIDDEN,
        message: 'User must be authorized',
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

    if (!userAuth.isActive){
      return c.json({
        success: false,
        error: ERROR_CODES.FORBIDDEN,
        message: 'User is already deactivated',
      }, 400);
    }

    const authority = new PublicKey(userAuth.address);
    const ownerPubkey = new PublicKey(user.pubkey);
    const connection = new Connection(SOLANA_CONFIG.DEVNET_URL);
    const program = getProgram();

    const tx = await program.methods
      .deactivateApiUser()
      .accounts({
        authority: authority,
        owner: ownerPubkey,
        eventAuthority: getEventAuthority(),
        program: program.programId,
      })
      .transaction();

    tx.feePayer = authority;
    tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;

    let signature: string;
    try {
      signature = await completeTransaction(tx, authority.toString());
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
      message: 'User deactivated successfully',
      signature,
    }, 200);

  } catch (error) {
    console.error('Deactivate error:', error);
    return c.json({
      success: false,
      error: ERROR_CODES.INTERNAL_ERROR,
      message: 'An error occurred during deactivation',
      details: error instanceof Error ? error.message : 'Unknown error',
    }, 500);
  }
});

export default deactivateRequest;
