/**
 * The catalog's category enum.
 *
 * It existed before this file, in `web/scripts/verify-reference.mjs` — a tool
 * someone runs by hand — and nothing in CI enforced it. By 2026-09-21 thirteen
 * references across nine values had drifted outside it: `entertainment`,
 * `audio-social`, `social-commerce`, `local-services`, `consumer-hardware`,
 * `content`, `travel`, plus `e-commerce` and `finance`, which are just
 * misspellings of two values already here.
 *
 * They were folded in by precedent rather than taste. The catalog already files
 * every comparable company under `consumer-tech`: spotify, netflix, abema, wavve,
 * tving, bilibili and soop for streaming; nintendo, krafton, nexon, ncsoft and
 * devsisters for games; myrealtrip, airbnb and yanolja for travel; baemin,
 * yogiyo, doordash and uber for delivery; apple, sony and samsung for hardware.
 * The nine values were strays beside those, not a vertical the catalog uses.
 *
 * That leaves `consumer-tech` at 135 of 440. It is a coarse bucket and arguably
 * the taxonomy's real problem — but splitting it is a product decision about how
 * the catalog is browsed, not something to smuggle in as cleanup.
 */
export const REFERENCE_CATEGORIES = [
  "ecommerce", "fintech", "saas", "ai", "consumer-tech", "education", "productivity",
  "developer-tools", "design-tools", "backend-devops", "automotive", "marketing",
  "government", "healthcare",
] as const;

export type ReferenceCategory = (typeof REFERENCE_CATEGORIES)[number];

export function isReferenceCategory(value: unknown): value is ReferenceCategory {
  return typeof value === "string" && (REFERENCE_CATEGORIES as readonly string[]).includes(value);
}
