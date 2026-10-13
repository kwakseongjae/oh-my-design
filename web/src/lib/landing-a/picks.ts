/**
 * Editorial selections for the landing. Only the choice of companies is
 * curated here; every value shown for them (colour, radius, weight, dates,
 * counts, tokens) is resolved from the generated registry + verification
 * graph at build time (lib/landing-a/data.server.ts). An id that stops
 * qualifying (no longer verified, no claimed colour) is dropped and the
 * slot is refilled from the same region, never shown with a guessed value.
 */

/** Hero keyboard, in rough region order; re-interleaved per locale. Each has a claimed colour role. */
export const HERO_IDS = [
  "tossbank", "yeogiotte", "kakaopage", "kyobobook", "ohouse", "sandoll", "weverse",
  "toyota", "sakura-internet", "line", "pixiv",
  "eslite", "evaair", "familymart-tw", "poya",
  "taobao",
] as const;

/** Region keys: four verified examples each. */
export const REGION_IDS = {
  KR: ["yeogiotte", "kyobobook", "tossbank", "sandoll"],
  JP: ["toyota", "sakura-internet", "line", "sony"],
  TW: ["104", "eslite", "evaair", "thsr"],
} as const;

/** Gen-UI picker: 11 verified companies chosen by measured token coverage (NOTES round 5). */
export const GEN_UI_IDS = ["toss", "karrot", "krds", "soomgo", "line", "pixiv", "freee", "104", "thsr", "apple", "linear.app"] as const;

/** Where a company's primary button is ambiguous, the component the reference names as its product button. */
export const GEN_UI_PREFERRED_BUTTON: Readonly<Record<string, string>> = {
  toss: "tds-button",
  line: "box-button-primary",
};

/** Opening company of the gen-UI section per locale region. */
export const GEN_UI_FIRST = { KR: "toss", JP: "line", TW: "104" } as const;

/** Region order follows each locale's own heading. */
export const REGION_ORDER = {
  en: ["KR", "TW", "JP", "CN"],
  ko: ["KR", "TW", "JP", "CN"],
  ja: ["JP", "KR", "TW", "CN"],
  "zh-tw": ["TW", "KR", "JP", "CN"],
} as const;

/** Published skills shown on the landing (folder, legend glyph). */
export const PUBLISHED_SKILLS = [
  ["init", "omd-init", "始"],
  ["apply", "omd-apply", "用"],
  ["feel", "omd-feel", "感"],
  ["slop", "omd-slop-audit", "檢"],
  ["locale", "omd-locale-adapter", "語"],
  ["humanize", "omd-humanize", "文"],
] as const;
