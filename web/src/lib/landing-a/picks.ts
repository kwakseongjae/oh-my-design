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
 * "From DESIGN.md to screen" picker (round 5): six verified companies. Chips show the
 * genuine logo from brand-svg.json where one is stored (toss, karrot, kakaobank,
 * banksalad, all with every sample-screen token resolved: 16/16, 17/17, 17/17, 18/18);
 * line (JP, round 7: its official brand icon, flat on a plain tile — risk_tier high, chip only)
 * and 104 (TW, glyph chip until a verified logo is stored) open their locales. freee and apple were swapped out.
 */
export const GEN_UI_IDS = ["toss", "karrot", "kakaobank", "banksalad", "line", "104"] as const;

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

