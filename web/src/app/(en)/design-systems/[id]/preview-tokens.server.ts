/**
 * What the item page's preview may show (round 11, #27: "nothing unevidenced").
 *
 * `extractTokens()` fills gaps for its other readers: a legacy document without
 * structured tiers gets a synthesized 7-step type scale (fallback sizes, weights
 * 400/700, line-heights 1.25–1.5), and a swatch with no recorded name gets one
 * from a colour-name table ("Slate"). Those are fine as parser output and wrong
 * as a picture of a brand, so the preview receives the tokens with them removed:
 *   - the type scale only when it comes from the reference's structured tiers;
 *   - a swatch name only when that name occurs in the reference itself.
 * Hex values, font names and component specs are already the document's own.
 */

import type { ParsedTokens } from "@/lib/extract-tokens";

export function evidencedPreviewTokens(
  detail: { designMd: string; referenceAst?: unknown },
  tokens: ParsedTokens,
): ParsedTokens {
  const text = detail.designMd.toLowerCase();
  const recorded = (name: string) => {
    const n = name.trim().toLowerCase();
    if (!n) return false;
    // Core token ids ("color.primary") are written as nested keys ("primary:").
    const leaf = n.split(".").pop() ?? n;
    return text.includes(n) || (n.includes(".") && text.includes(`${leaf}:`));
  };
  return {
    ...tokens,
    typography: {
      ...tokens.typography,
      hierarchy: detail.referenceAst ? tokens.typography.hierarchy : [],
    },
    paletteRoles: tokens.paletteRoles.map((role) => ({
      hex: role.hex,
      category: role.category,
      name: recorded(role.name) ? role.name : "",
    })),
  };
}
