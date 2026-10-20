/**
 * Per-reference install count for the archive cards (round 11, #17): the sum
 * of the `copy`, `download` and `install` counters that /api/track keeps in KV
 * (one sorted set per event, member = reference id, score = count — the same
 * keys /api/leaderboard reads). `select` and `generate` are not takes, so they
 * are left out.
 *
 * Read only, server only. The archive pages are static with ISR
 * (`revalidate = 3600`): the read sits inside `unstable_cache` because the
 * Upstash client fetches with `cache: "no-store"`, which would otherwise turn
 * the 521-card page into a per-request render. Inside a cache scope that
 * no-store fetch does not mark the route dynamic (Next 16,
 * server/app-render/dynamic-rendering.js).
 *
 * Unknown means absent: no KV credentials (local and CI builds), a timeout or
 * any error gives an empty map, and a card then shows no count. A count is
 * never estimated or carried over from elsewhere.
 */

import { unstable_cache } from "next/cache";
import { counterKey, getRedis, type TrackEvent } from "@/lib/kv";

/** The counters that mean someone took the file. */
export const INSTALL_EVENTS: readonly TrackEvent[] = ["copy", "download", "install"] as const;

/** The slice of the Upstash client this module uses (a fake in tests). */
export interface CounterReader {
  zrange<T extends unknown[]>(key: string, start: number, stop: number, opts: { withScores: true }): Promise<T>;
}

const TIMEOUT_MS = 4000;

/** Sum the install counters per reference id. Ids whose sum is 0 are left out. */
export async function readInstallCounts(redis: CounterReader | null): Promise<Record<string, number>> {
  if (!redis) return {};
  const sets = await Promise.all(
    INSTALL_EVENTS.map((event) => redis.zrange<(string | number)[]>(counterKey(event), 0, -1, { withScores: true })),
  );
  const out: Record<string, number> = {};
  for (const flat of sets) {
    if (!Array.isArray(flat)) continue;
    for (let i = 0; i + 1 < flat.length; i += 2) {
      const id = String(flat[i]);
      const n = Number(flat[i + 1]);
      if (!Number.isFinite(n) || n <= 0) continue;
      out[id] = (out[id] ?? 0) + Math.round(n);
    }
  }
  return out;
}

async function readOrEmpty(): Promise<Record<string, number>> {
  try {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const timeout = new Promise<Record<string, number>>((resolve) => {
      timer = setTimeout(() => resolve({}), TIMEOUT_MS);
    });
    const counts = await Promise.race([readInstallCounts(getRedis()), timeout]);
    if (timer) clearTimeout(timer);
    return counts;
  } catch {
    return {};
  }
}

/** Install counts by reference id, cached for an hour. Empty when KV is not configured. */
export const getInstallCounts = unstable_cache(readOrEmpty, ["omd-install-counts-v1"], { revalidate: 3600 });
