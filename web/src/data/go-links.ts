/**
 * Short-link registry for post-level traffic attribution: oh-my-design.kr/go/<code>.
 * One entry per post. See docs/CONTENT_TRACKING.md for the UTM convention.
 * Keep entries as plain object literals — scripts/analytics/pull-posts.mjs reads this file as text.
 */
export type GoLink = {
  /** Same-site target: a relative path ("/design-systems/linear") or an absolute oh-my-design.kr URL. */
  to: string;
  /** Platform: threads | x | zenn | geeknews | ... */
  source: string;
  /** social | community | blog | ... */
  medium: string;
  /** YYYYMMDD-slug */
  campaign: string;
  /** Locale or variant: ko | zh-tw | ja | ... */
  content?: string;
  note?: string;
};

export const GO_LINKS: Record<string, GoLink> = {
  "hangul-threads-ko": {
    to: "/ko/hangul",
    source: "threads",
    medium: "social",
    campaign: "20261105-hangul-video",
    content: "ko",
    note: "/hangul video thread, link in the last reply (docs/HANGUL_VIRAL_2026-11-05.md).",
  },
};
