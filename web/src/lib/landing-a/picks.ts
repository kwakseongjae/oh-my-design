/**
 * Editorial selections for the landing. Only the choice of companies is
 * curated here; every value shown for them (colour, radius, weight, dates,
 * counts, tokens) is resolved from the generated registry + verification
 * graph at build time (lib/landing-a/data.server.ts). An id that stops
 * qualifying (no longer verified, no claimed colour) is dropped and the
 * slot is refilled from the same region, never shown with a guessed value.
 */

/**
 * Hero keyboard (round 4): artisan caps engraved with each company's genuine logo
 * from web/src/data/brand-svg.json (subset of feat/brand-svg-gallery). Only verified
 * references with a claimed colour AND a stored logo qualify; that intersection is
 * Korean-only today (every TW logo is a legacy reference, no JP logo is stored).
 *
 * `cap`: "brand" = the cap is the claimed primary colour; "pale" = a pale tint of it,
 * used where the genuine logo would not read on the full colour. The logo is never
 * recoloured: __tests__/hero-logos.test.ts holds every solid fill at ≥ 3:1 against
 * the cap it sits on. Rows are keyboard rows; a wordmark takes a wide (2u) cap.
 *
 * Skipped (genuine colours < 3:1 on both the full and the pale cap, no official
 * reversed variant): karrot, banksalad, naver, nexon, wanted; kakaopay (only a
 * white-on-dark variant, illegible on its yellow); kakao (white counters on yellow).
 */
export const HERO_LOGOS = [
  { id: "kakaobank", v: "symbol", cap: "brand" },
  { id: "toss", v: "wordmark", cap: "brand" },
  { id: "class101", v: "symbol", cap: "brand" },
  { id: "kurly", v: "wordmark", cap: "pale" },
  { id: "kream", v: "wordmark", cap: "pale" },
  { id: "channeltalk", v: "symbol", cap: "pale" },
  { id: "upbit", v: "wordmark", cap: "pale" },
  { id: "socar", v: "combined", cap: "pale" },
  { id: "yanolja", v: "combined", cap: "brand" },
] as const;

/** Keyboard rows by id: desktop 9 caps, phone 6. */
export const HERO_ROWS = {
  wide: [["kakaobank", "toss", "class101"], ["kurly", "kream", "channeltalk"], ["upbit", "socar"], ["yanolja"]],
  narrow: [["kakaobank", "class101", "channeltalk"], ["toss", "kurly"], ["kream"]],
} as const;

/** Gen-UI picker: one row of six verified companies (round 4 cut from 11; chosen by measured token coverage, NOTES round 5). */
export const GEN_UI_IDS = ["toss", "karrot", "line", "freee", "104", "apple"] as const;

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

