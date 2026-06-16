"use client";

import { useEffect, useState } from "react";

// Module-level cache so every consumer (nav, hero, …) shares a single fetch of
// /api/github-stars rather than each firing its own request on mount.
//   undefined = not fetched yet · null = fetched but unavailable · number = stars
let cache: number | null | undefined;
let inflight: Promise<number | null> | null = null;

async function load(): Promise<number | null> {
  if (cache !== undefined) return cache;
  if (!inflight) {
    inflight = fetch("/api/github-stars")
      .then((r) => (r.ok ? r.json() : null))
      .then((d: { stars?: unknown } | null) => {
        cache = d && typeof d.stars === "number" ? d.stars : null;
        return cache;
      })
      .catch(() => {
        cache = null;
        return null;
      })
      .finally(() => {
        inflight = null;
      });
  }
  return inflight;
}

/** Live GitHub star count, or null while loading / when unavailable. */
export function useGithubStars(): number | null {
  const [stars, setStars] = useState<number | null>(cache ?? null);

  useEffect(() => {
    let alive = true;
    load().then((s) => {
      if (alive) setStars(s);
    });
    return () => {
      alive = false;
    };
  }, []);

  return stars;
}

/** 247 → "247", 1234 → "1.2k", 12345 → "12k". */
export function formatStars(n: number): string {
  if (n < 1000) return String(n);
  const k = n / 1000;
  return `${k >= 10 ? Math.round(k) : Math.round(k * 10) / 10}k`;
}
