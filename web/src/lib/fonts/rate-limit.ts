/**
 * In-memory sliding-window rate limiter for the Haiku match route.
 *
 * Keyed by client IP. Dev-gated route so a process-local Map is fine —
 * no Redis needed. Production exposure would need an external store to
 * survive serverless cold starts, but this route is dev-only.
 */

interface Bucket {
  hits: number[];
}

const WINDOW_MS = 60_000;
const MAX_HITS_PER_WINDOW = 10;

const buckets = new Map<string, Bucket>();

export interface RateLimitResult {
  ok: boolean;
  remaining: number;
  retryAfterSec: number;
}

export function checkRateLimit(key: string): RateLimitResult {
  const now = Date.now();
  const bucket = buckets.get(key) ?? { hits: [] };
  bucket.hits = bucket.hits.filter((t) => now - t < WINDOW_MS);

  if (bucket.hits.length >= MAX_HITS_PER_WINDOW) {
    const oldest = bucket.hits[0];
    const retryAfterSec = Math.ceil((WINDOW_MS - (now - oldest)) / 1000);
    buckets.set(key, bucket);
    return { ok: false, remaining: 0, retryAfterSec };
  }

  bucket.hits.push(now);
  buckets.set(key, bucket);
  return {
    ok: true,
    remaining: MAX_HITS_PER_WINDOW - bucket.hits.length,
    retryAfterSec: 0,
  };
}
