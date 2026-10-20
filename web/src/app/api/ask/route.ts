import { getRedis } from "@/lib/kv";
import { createAskClient } from "@/lib/ask/client";
import { askRetriever } from "@/lib/ask/default-index";
import { handleAsk } from "@/lib/ask/handler";
import { upstashCounter } from "@/lib/ask/limits";

/**
 * The landing's question box (docs/REDESIGN_R11_PLAN_2026-10-20.md W4). POST only: Next
 * answers any other method with 405. Node runtime for node:crypto and the SDK; the answer
 * streams as NDJSON (lib/ask/protocol.ts). Env, set by the owner:
 *   OMD_ASK_ANTHROPIC_API_KEY  required; without it every request is 503 "unavailable"
 *   OMD_ASK_MODEL              default claude-haiku-5-5
 *   OMD_ASK_DAILY_CAP          default 1000 model calls per UTC day
 *   OMD_ASK_HASH_SALT          optional secret for the visitor hash (defaults to the key)
 * Rate limits live in the existing Upstash KV (lib/kv.ts); without it the route fails closed.
 */
export const runtime = "nodejs";
// a cited answer is a few seconds; this caps a stuck upstream (the plan's ceiling applies)
export const maxDuration = 60;

export async function POST(req: Request): Promise<Response> {
  return handleAsk(req, {
    env: {
      apiKey: process.env.OMD_ASK_ANTHROPIC_API_KEY,
      model: process.env.OMD_ASK_MODEL,
      dailyCap: process.env.OMD_ASK_DAILY_CAP,
      hashSalt: process.env.OMD_ASK_HASH_SALT,
    },
    store: upstashCounter(getRedis()),
    retriever: askRetriever,
    createClient: createAskClient,
    log: (fields) => console.info(`[ask] ${JSON.stringify(fields)}`),
  });
}
