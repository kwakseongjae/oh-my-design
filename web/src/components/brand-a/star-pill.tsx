"use client";

import { formatStars, useGithubStars } from "@/lib/use-github-stars";

const REPO_URL = "https://github.com/kwakseongjae/oh-my-design";

/**
 * Header GitHub star pill (round 7, after Taste Skill's dark nav pill): GitHub mark, ★ and
 * the live star count, one ink field. The landing passes the count fetched on the server
 * (lib/github-stars.server.ts, ISR hourly), so it is in the first HTML with no shift; other
 * pages pass nothing and the pill reads the same count from /api/github-stars (cached 1 h).
 * No count (fetch failed, rate limit) → mark and ★ only. A number is never made up.
 */
export function StarPill({ stars, label }: { stars?: number | null; label: string }) {
  const live = useGithubStars(stars !== undefined);
  const n = stars !== undefined ? stars : live;
  return (
    <a
      className="sq-star"
      href={REPO_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={n != null ? `${label} — ★ ${n.toLocaleString("en-US")}` : label}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
        <path d="M12 .5C5.73.5.66 5.57.66 11.84c0 5.02 3.25 9.27 7.76 10.77.57.1.78-.25.78-.54 0-.27-.01-1.15-.02-2.09-3.16.69-3.83-1.36-3.83-1.36-.52-1.31-1.26-1.66-1.26-1.66-1.03-.71.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.66 1.24 3.31.94.1-.74.4-1.24.72-1.53-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.5-1.44.1-3 0 0 .95-.3 3.11 1.16.9-.25 1.87-.38 2.83-.38s1.93.13 2.83.38c2.16-1.46 3.11-1.16 3.11-1.16.6 1.56.22 2.71.11 3 .73.79 1.17 1.8 1.17 3.04 0 4.35-2.66 5.3-5.19 5.58.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.21.65.78.54 4.5-1.5 7.75-5.75 7.75-10.77C23.34 5.57 18.27.5 12 .5z" />
      </svg>
      <span className="sq-star-n" aria-hidden="true">
        <span className="sq-star-g">★</span>
        {n != null ? formatStars(n) : null}
      </span>
    </a>
  );
}
