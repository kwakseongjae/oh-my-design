import data from "@/data/hangul-assets.json";

/**
 * /hangul launch assets (docs/HANGUL_LAUNCH_PLAN_2026-10-21.md). The content stream fills
 * web/src/data/hangul-assets.json; the page reads it here and renders a section only when its
 * entry is present. Every number in `measured` comes from OmD's measurement of Korean services
 * (skills/hangul/references/measured-67.md), never estimated.
 */
export interface ShotPair {
  /** public paths, e.g. /hangul/before-desktop.webp */
  before: string;
  after: string;
  width: number;
  height: number;
}

export interface HangulAssets {
  /**
   * The same generated page before and after /hangul's rules are applied to its code, typography
   * only. The After is a hand APPLY of the skill's rules, not the eval's with-skill run, so a caption
   * must say "the same page, /hangul applied" and never present it as an agent's output.
   */
  beforeAfter: {
    desktop: ShotPair;
    phone: ShotPair;
    /** which eval run the page came from, e.g. "Codex p1-A-r3" */
    source: string;
  } | null;
  /** the before/after scroll comparison */
  video: { mp4: string; poster: string; gif?: string; width: number; height: number; seconds: number } | null;
  /**
   * The measured-67 data card. Each spread carries the services it was computed over (`n`, the
   * numeric rows) and, where measured-67.md reports one, the interquartile range. Body line-height's
   * min and max include single-line UI text sized by height and fixed-pixel values (the file says so),
   * so a card headlines its median and IQR, never its min/max.
   */
  measured: {
    services: number;
    /** when it was measured, e.g. "2026-07" */
    date: string;
    bodyLineHeight: Spread;
    bodyLetterSpacingEm: Spread;
    headingLetterSpacingEm: Spread;
    /** real families only; "others" is services minus their sum */
    topFonts: { family: string; count: number }[];
  } | null;
}

export interface Spread {
  min: number;
  median: number;
  max: number;
  /** services with a numeric value for this field */
  n?: number;
  /**
   * The interquartile range [q1, q3], when measured-67.md reports both quartiles. Typed as an array,
   * not a tuple: a JSON import infers number[] and a tuple would fail the cast below. The assets
   * test pins it to exactly two values with min ≤ q1 ≤ median ≤ q3 ≤ max.
   */
  iqr?: readonly number[];
}

export function getHangulAssets(): HangulAssets {
  return data as HangulAssets;
}
