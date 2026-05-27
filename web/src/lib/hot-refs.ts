"use client";

import { useEffect, useState } from "react";

/**
 * "HOT" badge source — the N most-selected references, read live from the
 * `/api/leaderboard` sorted set (Upstash, populated by `/api/track`).
 *
 * Lightweight: one fetch on mount, no polling. Degrades silently to an empty
 * set when KV is disabled (local dev without Upstash env) or the request
 * fails, so the UI simply shows no HOT pills rather than erroring.
 *
 * `event` defaults to "select" — the click-through signal that best matches a
 * "popularity / views" notion. Swap to "download" if you'd rather rank by
 * DESIGN.md downloads.
 */
export function useHotRefs(limit = 5, event: "select" | "download" | "generate" | "copy" = "select"): Set<string> {
  const [hot, setHot] = useState<Set<string>>(new Set());

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/leaderboard?event=${event}&limit=${limit}`, { cache: "no-store" })
      .then((r) => r.json())
      .then((data: { ok?: boolean; leaderboard?: { reference: string; count: number }[] }) => {
        if (cancelled) return;
        const ids =
          data?.ok && Array.isArray(data.leaderboard)
            ? data.leaderboard.filter((e) => e.count > 0).map((e) => e.reference)
            : [];
        setHot(new Set(ids));
      })
      .catch(() => {
        /* KV unavailable or request failed → no HOT pills. */
      });
    return () => {
      cancelled = true;
    };
  }, [limit, event]);

  return hot;
}
