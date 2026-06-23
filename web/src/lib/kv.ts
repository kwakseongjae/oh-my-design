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
