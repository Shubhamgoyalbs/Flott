import { Hono } from 'hono'
import {Program} from "@coral-xyz/anchor";
import * as anchor from "@coral-xyz/anchor";
import bs58 from "bs58";
import {Flott} from "@flott/idl/flott";
import {PublicKey} from "@solana/web3.js";
import {createQueue} from "@flott/shared/queue";
import {QUEUE_NAMES} from "@flott/shared";

const app = new Hono()

const provider = anchor.AnchorProvider.env();
anchor.setProvider(provider);
const program = anchor.workspace.Flott as Program<Flott>;

const queue = createQueue(QUEUE_NAMES.INDEXER, {
  host: "",
  port:5,
  tls: false
});

const [eventAuthorityPda] = anchor.web3.PublicKey.findProgramAddressSync(
  [Buffer.from("__event_authority")],
  program.programId,
);

type HeliusInstruction = {
  accounts: string[];
  data: string;
  programId: string;
  innerInstructions?: HeliusInstruction[];
};

type HeliusTransaction = {
  accountData: {
    account: string;
    nativeBalanceChange: number;
    tokenBalanceChanges: unknown[];
  }[];
  description: string;
  events: Record<string, unknown>;
  fee: number;
  feePayer: string;
  instructions: HeliusInstruction[];
  lighthouseData: null | unknown;
  nativeTransfers: unknown[];
  signature: string;
  slot: number;
  source: string;
  timestamp: number;
  tokenTransfers: unknown[];
  transactionError: null | unknown;
  type: string;
};

type HeliusWebhookBody = HeliusTransaction[];

enum CancellationReason {
  //todo
}

type BaseEventData = { account: string };
type ApiUserAccountGotAuthorized = { account: string; authority: string };
type ApiUserAccountActiveState = { account: string; isActive: boolean };
type SubscriptionCancelled = { account: string; reason: CancellationReason };
type TrialPeriodUsed = { account: string; leftCycles: number };

interface EventDataMap {
  ApiUserAccountGotAuthorized: ApiUserAccountGotAuthorized;
  ApiUserAccountActiveState: ApiUserAccountActiveState;
  SubscriptionPolicyInitialized: BaseEventData;
  VestingPolicyInitialized: BaseEventData;
  VestingPolicyUpdated: BaseEventData;
  VestingPolicyCanceled: BaseEventData;
  EnrolledInVestingPolicy: BaseEventData;
  TransfersFundsToAuthority: BaseEventData;
  SubscriptionPolicyUpdated: BaseEventData;
  ApiAccountClosed: BaseEventData;
  SubscriptionCancelled: SubscriptionCancelled;
  TrialPeriodUsed: TrialPeriodUsed;
  AddRetryScheduler: BaseEventData;
  RemoveSubscriberRetryScheduler: BaseEventData;
  PaymentSuccessfulSubscription: BaseEventData;
  EnrollmentActivated: BaseEventData;
  EnrollmentCancelled: BaseEventData;
  EnrollmentDumped: BaseEventData;
  SubscriberActivated: BaseEventData;
  CompletedVesting: BaseEventData;
  ClaimedVestingTranche: BaseEventData;
  OrderInitialized: BaseEventData;
  OrderExpiryExtended: BaseEventData;
  RefundPaidOut: BaseEventData;
  OrderPaid: BaseEventData;
  OrderCompleted: BaseEventData;
  OrderExpired: BaseEventData;
}

const EventName = {
  ApiUserAccountGotAuthorized: "ApiUserAccountGotAuthorized",
  ApiUserAccountActiveState: "ApiUserAccountActiveState",
  SubscriptionPolicyInitialized: "SubscriptionPolicyInitialized",
  VestingPolicyInitialized: "VestingPolicyInitialized",
  VestingPolicyUpdated: "VestingPolicyUpdated",
  VestingPolicyCanceled: "VestingPolicyCanceled",
  EnrolledInVestingPolicy: "EnrolledInVestingPolicy",
  TransfersFundsToAuthority: "TransfersFundsToAuthority",
  SubscriptionPolicyUpdated: "SubscriptionPolicyUpdated",
  ApiAccountClosed: "ApiAccountClosed",
  SubscriptionCancelled: "SubscriptionCancelled",
  TrialPeriodUsed: "TrialPeriodUsed",
  AddRetryScheduler: "AddRetryScheduler",
  RemoveSubscriberRetryScheduler: "RemoveSubscriberRetryScheduler",
  PaymentSuccessfulSubscription: "PaymentSuccessfulSubscription",
  EnrollmentActivated: "EnrollmentActivated",
  EnrollmentCancelled: "EnrollmentCancelled",
  EnrollmentDumped: "EnrollmentDumped",
  SubscriberActivated: "SubscriberActivated",
  CompletedVesting: "CompletedVesting",
  ClaimedVestingTranche: "ClaimedVestingTranche",
  OrderInitialized: "OrderInitialized",
  OrderExpiryExtended: "OrderExpiryExtended",
  RefundPaidOut: "RefundPaidOut",
  OrderPaid: "OrderPaid",
  OrderCompleted: "OrderCompleted",
  OrderExpired: "OrderExpired",
} as const satisfies Record<keyof EventDataMap, string>;

type EventName = keyof typeof EventName;

export interface AnchorEvent<N extends EventName = EventName> {
  name: N;
  data: EventDataMap[N];
  timestamp: number;
}

const getEnumVariantName = (value: unknown): string | null => {
  if (value === null || value === undefined) return null;
  if (typeof value === "object") {
    const keys = Object.keys(value);
    return keys.length === 1 ? keys[0] : null;
  }
  return String(value);
}

const isKnownEventName = (name: string): name is EventName => {
  return Object.prototype.hasOwnProperty.call(EventName, name);
}

const toPubkeyString = (value: unknown): string | undefined => {
  if (value instanceof PublicKey) return value.toBase58();
  if (typeof value === "string") {
    try {
      new PublicKey(value);
      return value;
    } catch {
      return undefined;
    }
  }
  return undefined;
}

const normalizeAndValidate = <N extends EventName>(name: N, raw: Record<string, unknown>): EventDataMap[N] | null => {
  const account = toPubkeyString(raw.account);
  if (!account) return null;

  switch (name) {
    case "ApiUserAccountGotAuthorized": {
      const authority = toPubkeyString(raw.authority);
      if (!authority) return null;
      return { account, authority } as EventDataMap[N];
    }
    case "ApiUserAccountActiveState": {
      if (typeof raw.isActive !== "boolean") return null;
      return { account, isActive: raw.isActive } as EventDataMap[N];
    }
    case "SubscriptionCancelled": {
      if (getEnumVariantName(raw.reason) === null) return null;
      return { account, reason: raw.reason as CancellationReason } as EventDataMap[N];
    }
    case "TrialPeriodUsed": {
      const leftCycles = raw.leftCycles;
      if (typeof leftCycles !== "number" || leftCycles < 0 || leftCycles > 255) return null;
      return { account, leftCycles } as EventDataMap[N];
    }
    default:
      return { account } as EventDataMap[N];
  }
}

const pushEvent = async (event: AnchorEvent) => {
  await queue.add(event.name, JSON.stringify(event.data))
}

const decodeEmitCpiEvents = (instructions: HeliusInstruction[], timestamp: number): AnchorEvent[] => {
  const results: AnchorEvent[] = [];

  for (const ix of instructions) {
    for (const inner of ix.innerInstructions ?? []) {
      const isSelfCpi = inner.programId === program.programId.toBase58();
      const hasEventAuthority = inner.accounts.includes(
        eventAuthorityPda.toBase58(),
      );

      if (!isSelfCpi || !hasEventAuthority) continue;

      let decoded: { name: string; data: Record<string, unknown> } | null;
      try {
        const buf = Buffer.from(bs58.decode(inner.data));
        decoded = program.coder.events.decode(buf.toString("base64"));
      } catch (err) {
        console.error("   ⚠️ failed to decode event bytes:", err);
        continue;
      }

      if (!decoded) continue;

      if (!isKnownEventName(decoded.name)) {
        console.warn(`   ⚠️ unknown event name skipped: ${decoded.name}`);
        continue;
      }

      const validated = normalizeAndValidate(decoded.name, decoded.data);
      if (!validated) {
        console.warn(`   ⚠️ event "${decoded.name}" failed validation, skipped`, decoded.data);
        continue;
      }

      results.push({
        name: decoded.name,
        data: validated,
        timestamp,
      });
    }
  }

  return results;
}

const processHeliusWebhook = (body: HeliusWebhookBody) => {
  for (const tx of body) {
    const events = decodeEmitCpiEvents(tx.instructions, tx.timestamp);

    if (events.length === 0) {
      console.log("   no emit_cpi events found");
    } else {
      for (const event of events) {
        pushEvent(event)
      }
    }
  }
}

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post("/webhook", async (c) => {
  console.log("=================================");
  console.log("Webhook received");
  console.log("Timestamp:", new Date().toISOString());

  try {
    const body = await c.req.json() as HeliusWebhookBody;

    // Guard: Helius always sends an array
    if (!Array.isArray(body)) {
      console.error("❌ Unexpected body shape:", typeof body);
      return c.json(
        {
          success: false,
          error: "expected array"
        },
        400
      );
    }

    processHeliusWebhook(body);

    return c.json(
      {
        success: true
      },
      200
    );
  } catch (err) {
    console.error("❌ Error processing webhook:", err);
    return c.json(
      {
        success: false,
        error: String(err)
      },
      500
    );
  }
});

export default {
  port: process.env.PORT,
  fetch: app.fetch,
}
