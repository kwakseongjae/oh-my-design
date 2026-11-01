/**
 * Per-reference page views for the archive's recommended order (owner request,
 * 2026-11-01: "추천순 = 조회수순, 기본값"). The numbers are GA4 `screenPageViews`
 * of the item pages over the last 30 complete days, copied into KV by
 * `scripts/analytics/sync-views.mjs` (sorted set `omd:views:30d`, member =
 * reference id, score = views). The site itself never calls GA4.
 *
 * Read only, server only, cached for an hour like the install counts
 * (install-counts.server.ts explains why the read sits inside `unstable_cache`).
 *
 * Unknown means absent: no KV credentials (local and CI builds), a timeout, a
 * missing key or any error gives an empty map, and the archive keeps its
 * previous order. A view count is never estimated.
 */

import { unstable_cache } from "next/cache";
import { getRedis } from "@/lib/kv";
import type { CounterReader } from "@/lib/install-counts.server";

export const VIEWS_KEY = "omd:views:30d";

const TIMEOUT_MS = 4000;

/** Views by reference id. Ids whose score is not a positive number are left out. */
export async function readViewCounts(redis: CounterReader | null): Promise<Record<string, number>> {
  if (!redis) return {};
  const flat = await redis.zrange<(string | number)[]>(VIEWS_KEY, 0, -1, { withScores: true });
  const out: Record<string, number> = {};
  if (!Array.isArray(flat)) return out;
  for (let i = 0; i + 1 < flat.length; i += 2) {
    const n = Number(flat[i + 1]);
    if (Number.isFinite(n) && n > 0) out[String(flat[i])] = Math.round(n);
  }
  return out;
}

async function readOrEmpty(): Promise<Record<string, number>> {
  try {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const timeout = new Promise<Record<string, number>>((resolve) => {
      timer = setTimeout(() => resolve({}), TIMEOUT_MS);
    });
    const counts = await Promise.race([readViewCounts(getRedis()), timeout]);
    if (timer) clearTimeout(timer);
    return counts;
  } catch {
    return {};
  }
}

/** 30-day page views by reference id, cached for an hour. Empty when KV is not configured. */
export const getViewCounts = unstable_cache(readOrEmpty, ["omd-view-counts-v1"], { revalidate: 3600 });
