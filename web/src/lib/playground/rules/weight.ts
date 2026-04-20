/**
 * Weight scale → font-weight ladder. Keeps the corpus convention of
 * "two weights, never three" — heading and body/CTA, nothing between.
 */

import type { WeightScale } from "../state";

export interface WeightTokens {
  heading: number;
  body: number;
  cta: number;
  /** When the brand uses a serif headline, we still pick body weight
   *  separately; this field flags whether the heading tier is allowed to
   *  use 400-500 (light) without reading anemic. */
  lightHeadingPermitted: boolean;
  tagline: string;
}

export const WEIGHT_RULES: Record<WeightScale, WeightTokens> = {
  light: {
    heading: 400,
    body: 300,
    cta: 500,
    lightHeadingPermitted: true,
    tagline: "Editorial, serif-tolerant, quiet",
  },
  regular: {
    heading: 600,
    body: 400,
    cta: 600,
    lightHeadingPermitted: false,
    tagline: "Default — readable, balanced",
  },
  heavy: {
    heading: 700,
    body: 400,
    cta: 700,
    lightHeadingPermitted: false,
    tagline: "Commerce, scanning, high-signal",
  },
};
