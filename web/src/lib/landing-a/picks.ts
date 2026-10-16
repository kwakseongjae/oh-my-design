/**
 * Editorial selections for the landing. Only the choice of companies is
 * curated here; every value shown for them (colour, radius, weight, dates,
 * counts, tokens) is resolved from the generated registry + verification
 * graph at build time (lib/landing-a/data.server.ts). An id that stops
 * qualifying (no longer verified, no claimed colour) is dropped and the
 * slot is refilled from the same region, never shown with a guessed value.
 */

/* Round 5: the cap set moved to data/hero-caps.json (per locale) and brand/pale is now
 * computed from the logo fills (lib/landing-a/caps.ts) — the same nine Korean logo caps,
 * plus three native-glyph caps of verified JP refs on /ja and TW refs on /zh-tw until
 * their genuine logos are stored. */

/**
 * "From DESIGN.md to screen" picker: seven verified companies. Chips show the genuine logo
 * from brand-svg.json where one is stored (toss, karrot, kakaobank, banksalad, freee — every
 * sample-screen slot resolved). Round 8: freee (JP, full coverage after the measured button
 * backfill, official logo) opens /ja; line stays (official icon, flat chip only — risk_tier
 * high; its unresolved slots render as silent defaults); 104 (TW, glyph chip until a verified
 * logo is stored) opens /zh-tw.
 */
export const GEN_UI_IDS = ["toss", "karrot", "kakaobank", "banksalad", "freee", "line", "104"] as const;

/** Where a company's primary button is ambiguous, the component the reference names as its product button. */
export const GEN_UI_PREFERRED_BUTTON: Readonly<Record<string, string>> = {
  toss: "tds-button",
  line: "box-button-primary",
};

/** Opening company of the gen-UI section per locale region. */
export const GEN_UI_FIRST = { KR: "toss", JP: "freee", TW: "104" } as const;

/** Region order follows each locale's own heading. */
export const REGION_ORDER = {
  en: ["KR", "TW", "JP", "CN"],
  ko: ["KR", "TW", "JP", "CN"],
  ja: ["JP", "KR", "TW", "CN"],
  "zh-tw": ["TW", "KR", "JP", "CN"],
} as const;

