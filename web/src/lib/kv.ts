import { Redis } from "@upstash/redis";

// `install` (2026-06-23) tracks per-reference CLI-install intent — the npx
// command copy. Kept OUT of `copy` so content-copy popularity isn't polluted
// by install-command copies (install-cta previously fired `copy`).
export type TrackEvent = "select" | "generate" | "download" | "copy" | "install";

export const TRACK_EVENTS: readonly TrackEvent[] = ["select", "generate", "download", "copy", "install"] as const;

export const REFERENCE_ID_RE = /^[a-z0-9.-]{1,40}$/;

let _redis: Redis | null | undefined;

export function getRedis(): Redis | null {
  if (_redis !== undefined) return _redis;
  // Vercel's Upstash Marketplace integration prefixes env vars with the project
  // label (OMD_*) to keep a shared DB namespaced. Fall back to the canonical
  // UPSTASH_REDIS_REST_* names so a direct upstash.com hookup still works.
  const url = process.env.OMD_KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.OMD_KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    _redis = null;
    return null;
  }
  _redis = new Redis({ url, token });
  return _redis;
}

/**
 * Keys are prefixed with `omd:` so OMD can safely share an Upstash database
 * with other projects (e.g., mochabun) without key-space collisions.
 */
export const counterKey = (event: TrackEvent) => `omd:counter:${event}`;

// ── Active users (DAU / WAU / MAU) ──────────────────────────────────────────
// The consent-independent, ad-blocker-proof active-user truth. We store ONE
// HyperLogLog per UTC day (`omd:active:YYYYMMDD`) — a ~12KB probabilistic
// cardinality sketch that retains NO individual visitor ids. Rolling WAU/MAU are
// derived as the PFCOUNT *union* of the trailing 7 / 30 day keys, so we never
// write per-window keys. Keys auto-expire after 35 days.
//
// Why server-side: GA4/Mixpanel DAU is consent-gated (EU fail-closed) and
// ad-blocker-lossy, so it under-counts and swings when dashboards/config change.
// This HLL is a stable floor for the DAU=1000 north-star, decoupled from GA4.
export const ACTIVE_TTL_SECONDS = 60 * 60 * 24 * 35; // 35 days
export const activeDayKey = (yyyymmdd: string) => `omd:active:${yyyymmdd}`;
/** Per-device daily sketch — answers "is mobile a meaningful share of active
 *  users?" independent of GA4 (W-3 builder-mobile decision). */
export const activeDeviceDayKey = (yyyymmdd: string, device: ActiveDevice) =>
  `omd:active:${yyyymmdd}:${device}`;

export type ActiveDevice = "mobile" | "tablet" | "desktop";
export const ACTIVE_DEVICES: readonly ActiveDevice[] = ["mobile", "tablet", "desktop"] as const;
export const isActiveDevice = (v: unknown): v is ActiveDevice =>
  typeof v === "string" && (ACTIVE_DEVICES as readonly string[]).includes(v);

/** A random, non-PII visitor id (uuid-ish). Bounded to keep the route strict. */
export const VISITOR_ID_RE = /^[A-Za-z0-9_-]{8,64}$/;

/** UTC YYYYMMDD bucket for a date (default now). */
export function dayBucket(d = new Date()): string {
  return d.toISOString().slice(0, 10).replace(/-/g, "");
}

/** Trailing-N UTC day buckets ending at `end` (most recent first). */
export function trailingDayBuckets(n: number, end = new Date()): string[] {
  const out: string[] = [];
  for (let i = 0; i < n; i++) {
    const d = new Date(end);
    d.setUTCDate(d.getUTCDate() - i);
    out.push(dayBucket(d));
  }
  return out;
}
