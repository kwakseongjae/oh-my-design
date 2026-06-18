/**
 * Per-IP rate limit for the public, unauthenticated `/api/mcp` connector.
 *
 * Redis-backed (Upstash, shared across serverless instances) because this is a
 * production endpoint whose `search_by_vibe` makes a paid OpenRouter call — the
 * font-playground in-memory limiter is per-instance and too weak here. Falls
 * back to a process-local window when KV is unavailable, and fails OPEN on a KV
 * error so a transient hiccup never takes the connector down (a directory-listed
 * service must stay reachable).
 *
 * Fixed window: MAX_PER_WINDOW requests per WINDOW_SEC per IP, counting every
 * MCP request (initialize / tools.list / tool calls). Generous for a real Claude
 * session or a reviewer; it only bites scripted floods.
 */
import { getRedis } from "@/lib/kv";

const WINDOW_SEC = 60;
const MAX_PER_WINDOW = 60;

export interface RlResult {
  ok: boolean;
  retryAfterSec: number;
}

// Process-local fallback (per-instance, soft) when KV is absent.
const local = new Map<string, number[]>();
function localCheck(ip: string): RlResult {
  const now = Date.now();
  const hits = (local.get(ip) ?? []).filter((t) => now - t < WINDOW_SEC * 1000);
  if (hits.length >= MAX_PER_WINDOW) {
    return { ok: false, retryAfterSec: Math.ceil((WINDOW_SEC * 1000 - (now - hits[0])) / 1000) };
  }
  hits.push(now);
  local.set(ip, hits);
  return { ok: true, retryAfterSec: 0 };
}

export async function mcpRateLimit(ip: string): Promise<RlResult> {
  const redis = getRedis();
  if (!redis) return localCheck(ip);

  const key = `omd:mcp:rl:${ip}`;
  try {
    const n = await redis.incr(key);
    if (n === 1) await redis.expire(key, WINDOW_SEC);
    if (n > MAX_PER_WINDOW) {
      const ttl = await redis.ttl(key);
      return { ok: false, retryAfterSec: ttl > 0 ? ttl : WINDOW_SEC };
    }
    return { ok: true, retryAfterSec: 0 };
  } catch {
    return { ok: true, retryAfterSec: 0 }; // fail-open on KV error
  }
}
