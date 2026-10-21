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
  /** the same generated page before and after /hangul APPLY */
  beforeAfter: {
    desktop: ShotPair;
    phone: ShotPair;
    /** which eval run the page came from, e.g. "Codex p1-A-r3" */
    source: string;
  } | null;
  /** the before/after scroll comparison */
  video: { mp4: string; poster: string; gif?: string; width: number; height: number; seconds: number } | null;
  /** the measured-67 data card */
  measured: {
    services: number;
    /** when it was measured, e.g. "2026-07" */
    date: string;
    bodyLineHeight: { min: number; median: number; max: number };
    bodyLetterSpacingEm: { min: number; median: number; max: number };
    headingLetterSpacingEm: { min: number; median: number; max: number };
    topFonts: { family: string; count: number }[];
  } | null;
}

export function getHangulAssets(): HangulAssets {
  return data as HangulAssets;
}
