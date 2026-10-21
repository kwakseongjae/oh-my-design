/**
 * What the item page's preview may show, built on the server from the reference's own tokens.
 *
 * Source of every value: the canonical Reference AST (`detail.referenceAst.tokens`), read behind the
 * same gate `extractTokens()` uses — a value counts only when it comes from the frontmatter with
 * high confidence. A legacy snapshot whose frontmatter was written from prose fails that gate, so it
 * shows no preview at all rather than prose-derived numbers (round 11, #27: "nothing unevidenced").
 *
 * The AST stores each token map with its keys sorted; the registry keeps the author's order
 * (`primary` before `primary-hover` before `canvas`), so the registry supplies the order and the AST
 * the values. Component variants still come through `extractTokens()`, which maps the recorded
 * component fields.
 *
 * Round 13: this replaces `evidencedPreviewTokens()`. The type scale is read from the tiers directly
 * because `extractTokens()` keeps only tiers with a numeric weight and at most ten of them (Toss kept
 * 6 of 30 roles, pixiv lost `caption-s`); its synthesized fallbacks never reach this page.
 */

import { REGISTRY_BY_ID } from "@/data/registry.generated";
import { extractTokens } from "@/lib/extract-tokens";
import { lookupFont } from "@/lib/font-registry";
import { resolveRuntimeFont } from "@/lib/fonts/runtime-family";
import type { LoadedDetail } from "@/lib/references/detail-loader.server";
import type { ReferenceAstNode } from "@/lib/references/schema";
import {
  EMPTY_PREVIEW,
  buildColorModel,
  buildComponents,
  buildRadii,
  buildShadows,
  buildSpacing,
  buildTypeScale,
  inAuthorOrder,
  sampleFor,
  type FontFace,
  type PreviewModel,
  type RecordedTier,
  type Specimen,
} from "@/components/item/preview-model";

type Scalar = string | number | boolean | null;

/** A frontmatter value with high confidence, unwrapped; anything else is absent. */
function canonical(node: ReferenceAstNode | undefined): Scalar | undefined {
  if (!node || Array.isArray(node) || typeof node !== "object" || !("value" in node)) return undefined;
  const v = node as { value: Scalar; origin: string; confidence: string };
  return v.origin === "frontmatter" && v.confidence === "high" ? v.value : undefined;
}

function firstFamily(stack: string): string {
  return stack.split(",")[0]?.replace(/['"]/g, "").trim() ?? "";
}

type Detail = Pick<LoadedDetail, "id" | "referenceAst"> & Parameters<typeof extractTokens>[0];

export function buildPreviewModel(detail: Detail): PreviewModel {
  const ast = detail.referenceAst?.tokens;
  if (!ast) return EMPTY_PREVIEW;
  const authored = (REGISTRY_BY_ID[detail.id]?.tokens ?? {}) as Readonly<Record<string, unknown>>;
  const keysOf = (group: string) => {
    const g = authored[group];
    return g && typeof g === "object" && !Array.isArray(g) ? Object.keys(g) : [];
  };
  const values = <T extends ReferenceAstNode>(record: Readonly<Record<string, T>>, group: string) =>
    inAuthorOrder(Object.entries(record), keysOf(group)).flatMap(([name, node]) => {
      const value = canonical(node);
      return value === undefined || value === null ? [] : [{ name, value }];
    });

  const stylesheets = new Set<string>();
  const loads = (family: string) => {
    const r = resolveRuntimeFont(family);
    if (r.mode === "unavailable") return undefined;
    if (r.stylesheetHref) stylesheets.add(r.stylesheetHref);
    return r.cssFamily;
  };

  /* colours */
  const colors = buildColorModel(
    values(ast.colors, "colors").flatMap(({ name, value }) => (typeof value === "string" ? [{ name, hex: value }] : [])),
  );

  /* faces: the recorded family roles, in the author's order (registry `typography.family`) */
  const familyOrder = (() => {
    const fam = (authored.typography as Record<string, unknown> | undefined)?.family;
    return fam && typeof fam === "object" ? Object.keys(fam) : [];
  })();
  const fonts: FontFace[] = inAuthorOrder(Object.entries(ast.typography.families), familyOrder).flatMap(([role, node]) => {
    const family = canonical(node);
    if (typeof family !== "string" || !family.trim()) return [];
    const info = lookupFont(family);
    // lookupFont() guesses "Brand-proprietary" for a face it has no record of; that guess is not shown.
    const known = !info.notes?.startsWith("Not in the OMD font registry");
    const live = loads(family);
    return [{
      role,
      family,
      name: known ? info.name || family : family,
      ...(known ? { license: info.license } : {}),
      ...(known && info.source ? { source: { ...info.source, installable: info.installable } } : {}),
      ...(live ? { live } : {}),
    } satisfies FontFace];
  });

  /*
   * A role is drawn in its own recorded face. A role that names no face takes the reference's face
   * only when the reference records exactly one; with several, which one it uses is unknown.
   */
  const only = fonts.length === 1 ? fonts[0].family : undefined;
  const specimenFor = (stack: string | undefined): Specimen | undefined => {
    const family = stack ? firstFamily(stack) : only;
    if (!family) return undefined;
    const css = loads(family);
    return css ? { css, ...sampleFor(family) } : undefined;
  };

  /* type scale */
  const tierOrder = keysOf("typography").filter((k) => k !== "family");
  const tiers: RecordedTier[] = inAuthorOrder(Object.entries(ast.typography.tiers), tierOrder).flatMap(([key, node]) => {
    if (!node || Array.isArray(node) || typeof node !== "object" || "value" in node) return [];
    const t = node as Readonly<Record<string, ReferenceAstNode>>;
    return [{
      key,
      size: canonical(t.size),
      weight: canonical(t.weight),
      lineHeight: canonical(t.lineHeight),
      tracking: canonical(t.tracking),
      use: canonical(t.use),
      family: canonical(t.family),
    }];
  });
  const scale = buildTypeScale(tiers, specimenFor);

  /* spacing, radius, elevation. A scale written as a list ("[0, 4, 8, …]") has positions, not names. */
  const spacingValues = values(ast.spacing, "spacing");
  const positional = spacingValues.length > 0 && Object.keys(ast.spacing).every((k, i, all) => all.includes(String(i)) && /^\d+$/.test(k));
  const spacing = buildSpacing(positional ? spacingValues.map(({ value }) => ({ name: "", value })) : spacingValues);
  const radii = buildRadii(values(ast.rounded, "rounded"));
  const shadows = buildShadows(values(ast.shadows, "shadow"));

  /* components: variants as extractTokens() maps them, in the author's order */
  const componentOrder = keysOf("components");
  const variants = extractTokens(detail).components.flatMap((block) =>
    block.variants.map((variant) => ({ type: block.type, variant })),
  );
  const rank = new Map(componentOrder.map((k, i) => [k, i]));
  variants.sort((a, b) => (rank.get(a.variant.name) ?? 1e6) - (rank.get(b.variant.name) ?? 1e6));
  const components = buildComponents(variants, (family) => {
    const face = family ? firstFamily(family) : only;
    return face ? loads(face) : undefined;
  });

  return {
    colors,
    fonts,
    scale,
    spacing,
    radii,
    shadows,
    components,
    stylesheets: [...stylesheets].sort(),
  };
}
