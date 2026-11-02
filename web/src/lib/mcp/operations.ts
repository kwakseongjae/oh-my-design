import { createHmac } from "node:crypto";
import { dayBucket, getRedis } from "@/lib/kv";
import { knownReference } from "./catalog";
import type { ToolName } from "./contracts";

type Redis = NonNullable<ReturnType<typeof getRedis>>;
type Counter = Pick<Redis, "hincrby" | "expire">;
export const COUNTER_TTL_SECONDS = 400 * 24 * 60 * 60;
const WINDOW_SECONDS = 60;
const MAX_REQUESTS = 60;

// INCR and expiry are atomic, so an interrupted request cannot leave a permanent key.
const RATE_SCRIPT = `
local n = redis.call('INCR', KEYS[1])
if n == 1 then redis.call('EXPIRE', KEYS[1], ARGV[1]) end
return { n, redis.call('TTL', KEYS[1]) }
`;

/** Only an expiring keyed digest reaches Redis, never the IP address itself. */
export async function mcpRateLimit(ip: string, redis: Pick<Redis, "eval"> | null = getRedis()): Promise<{ ok: boolean; retryAfterSec: number }> {
  if (!redis) return { ok: true, retryAfterSec: 0 };
  try {
    const secret = process.env.OMD_KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
    if (!secret) return { ok: true, retryAfterSec: 0 };
    const digest = createHmac("sha256", secret).update(`${dayBucket()}:${ip}`).digest("hex");
    const [count, ttl] = await redis.eval(RATE_SCRIPT, [`omd:mcp:v2:rate:${digest}`], [WINDOW_SECONDS]) as [number, number];
    return { ok: count <= MAX_REQUESTS, retryAfterSec: count <= MAX_REQUESTS ? 0 : Math.max(1, ttl) };
  } catch {
    return { ok: true, retryAfterSec: 0 }; // Availability does not depend on Redis.
  }
}

export async function countToolCall(tool: ToolName, references: readonly string[], redis: Counter | null = getRedis()): Promise<void> {
  if (!redis) return;
  const toolsKey = `omd:mcp:v2:tools:${dayBucket()}`;
  const refsKey = `omd:mcp:v2:references:${dayBucket()}`;
  try {
    const calls: Promise<unknown>[] = [redis.hincrby(toolsKey, tool, 1), redis.expire(toolsKey, COUNTER_TTL_SECONDS)];
    // Unknown ids can contain free text. Only public catalog ids are ever counted.
    const ids = [...new Set(references.filter(knownReference))];
    if (ids.length) calls.push(...ids.map((id) => redis.hincrby(refsKey, id, 1)), redis.expire(refsKey, COUNTER_TTL_SECONDS));
    await Promise.all(calls);
  } catch {
    // Aggregate counters are best-effort.
  }
}

/** Preserve Phase 0's demand signal for browser/old-config GETs, without UA data. */
export async function countNonMcpGet(redis: Counter | null = getRedis()): Promise<void> {
  if (!redis) return;
  const key = `omd:mcp:v2:non-mcp-get:${dayBucket()}`;
  try {
    await Promise.all([redis.hincrby(key, "get", 1), redis.expire(key, COUNTER_TTL_SECONDS)]);
  } catch {
    // Counting never changes the HTTP response.
  }
}

const ALLOWED_ORIGINS = new Set(["https://oh-my-design.kr", "https://claude.ai", "https://claude.com"]);
export function originAllowed(request: Request): boolean {
  const origin = request.headers.get("origin");
  return origin === null || ALLOWED_ORIGINS.has(origin);
}

export function clientIp(request: Request): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0].trim() || request.headers.get("x-real-ip") || "anon";
}
