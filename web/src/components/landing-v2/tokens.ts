// Scoped design tokens for the /v2 landing variant.
// Implemented as plain JS constants + inline styles so the global
// --primary token (used by v1 + builder) is never touched.

import { REGISTRY } from "@/data/registry.generated";

export const V2 = {
  primary: "#5546ff",        // electric indigo — CTAs, links
  primaryDeep: "#3a2dd6",
  primaryGlow: "#8b7dff",    // mid-step for gradients
  accent: "#a89cff",         // light indigo — labels, $ prompts, accents
  bgDark: "#0a0a0f",
  bgLight: "#fafafa",
  textOnDark: "#fafafa",
  textOnLight: "#0a0a0f",
  borderLight: "rgba(0,0,0,0.08)",
  borderDark: "rgba(255,255,255,0.08)",
} as const;

/** Brand color hints for the brand-card wall and the LIVE PROOF strip.
 *  Derived from the registry — every reference contributes its primaryColor. */
export const BRAND_COLORS: Record<string, string> = Object.fromEntries(
  REGISTRY.map(e => [e.id, e.primaryColor])
);

/** Deterministic fallback color from id hash. */
export function colorForId(id: string): string {
  if (BRAND_COLORS[id]) return BRAND_COLORS[id];
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) | 0;
  const hue = Math.abs(h) % 360;
  return `hsl(${hue}, 70%, 55%)`;
}
