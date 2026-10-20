"use client";

import { formatStars, useGithubStars } from "@/lib/use-github-stars";
import { GITHUB_MARK, STAR_MARK } from "./copy/r11-chrome";

const REPO_URL = "https://github.com/kwakseongjae/oh-my-design";

/**
 * Header GitHub star pill. Round 11 (#4/#15, after Taste Skill's nav pill): one ink pill with
 * the white Invertocat (GitHub's brand kit, copy/r11-chrome.ts), a small grey star and the count
 * in the regular weight, tightly spaced. No yellow.
 *
 * The count is real or absent. The landing passes the count fetched on the server
 * (lib/github-stars.server.ts, ISR hourly), so it is in the first HTML with no shift; other
 * pages pass nothing and the pill reads the same count from /api/github-stars (cached 1 h),
 * keeping room for it while it loads. No count (fetch failed, rate limit) → mark and star
 * only. A number is never made up.
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
      <svg className="sq-star-gh" width="17" height="17" viewBox={GITHUB_MARK.viewBox} fill="currentColor" aria-hidden="true" focusable="false">
        <path d={GITHUB_MARK.d} />
      </svg>
      <span className="sq-star-n" aria-hidden="true" data-wait={stars === undefined && n == null ? "" : undefined}>
        <svg className="sq-star-g" width="12" height="12" viewBox={STAR_MARK.viewBox} fill="currentColor" aria-hidden="true" focusable="false">
          <path d={STAR_MARK.d} />
        </svg>
        {n != null ? formatStars(n) : null}
      </span>
    </a>
  );
}
