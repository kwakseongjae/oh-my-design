/**
 * The item page's preview as data: what <ReferencePreview> draws beside the canonical DESIGN.md on
 * /design-systems/<id> and /ko/design-systems/<id>.
 *
 * Round 13 (owner, 2026-10-21): the right column read thin next to styles.refero.design although the
 * DESIGN.md on the left is rich. The values were all recorded; the presentation dropped them. Colours
 * arrived alphabetically in one flat grid with the primary mid-way, the type scale lost every role
 * without a numeric weight and everything past ten, and spacing, radius and elevation were not shown
 * at all. Analysis: docs/research/2026-10-21-r13/item/ANALYSIS.md.
 *
 * This module arranges recorded values and never fills a gap:
 *   - a group with no recorded values is absent: no default scale, radius, shadow or face;
 *   - groups are named from the token's own key ("primary-hover" sits with the brand colours);
 *   - a component state is painted only when its whole value is one colour literal; any other value
 *     is shown verbatim (spec/design-md-v3.md §3.3: never parse free-text state descriptions);
 *   - a type specimen is set only in a face the browser can load. The server decides that and hands
 *     over the CSS family; this module never names a fallback face.
 *
 * Pure and serialisable: preview-tokens.server.ts builds the model, the client component draws it.
 */

import type { ComponentType, ComponentVariant } from "@/lib/extract-tokens";
import type { FontLicense } from "@/lib/font-registry";

/* ─────────── model ─────────── */

export interface Swatch {
  readonly name: string;
  readonly hex: string;
}

export interface RampStep {
  readonly step: string;
  readonly name: string;
  readonly hex: string;
}

export interface Ramp {
  readonly hue: string;
  readonly steps: readonly RampStep[];
}

export type ColorGroupKey = "brand" | "surface" | "status" | "other";

export interface ColorGroup {
  readonly key: ColorGroupKey;
  readonly swatches: readonly Swatch[];
}

export interface ColorModel {
  /** The brand colour drawn large: the `primary` / `brand` key, else `accent`. Never chosen by hue. */
  readonly lead: Swatch | null;
  readonly groups: readonly ColorGroup[];
  readonly ramps: readonly Ramp[];
}

export interface FontFace {
  /** The role key as the reference records it ("sans", "ui", "brand"). */
  readonly role: string;
  /** The family as recorded. */
  readonly family: string;
  /** The registry's display name when the registry knows the face, else the family. */
  readonly name: string;
  /** Only when the font registry has a record of the face; an unknown face claims no licence. */
  readonly license?: FontLicense;
  readonly source?: { readonly name: string; readonly url: string; readonly installable: boolean };
  /** CSS font-family when this face loads in the browser (open web font or the OS face it names). */
  readonly live?: string;
}

export interface Specimen {
  /** CSS font-family of a face that loads. */
  readonly css: string;
  readonly text: string;
  readonly lang: string;
}

export interface TypeStep {
  /** The role key as recorded ("heading-xxxl", "h1", "st11"). */
  readonly name: string;
  readonly size: number;
  readonly weight?: number;
  readonly lineHeight?: { readonly css: string; readonly label: string };
  /** Letter-spacing; `css` only when the reference records a unit. */
  readonly tracking?: { readonly css?: string; readonly label: string };
  readonly use?: string;
  /** Present only when the role's own face loads. */
  readonly specimen?: Specimen;
}

export interface SpacingStep {
  /** Empty when the reference writes its scale as a list, which gives positions, not names. */
  readonly name: string;
  readonly px: number;
}

export interface RadiusStep {
  readonly name: string;
  readonly css: string;
  /** As recorded. */
  readonly label: string;
}

export interface ShadowStep {
  readonly name: string;
  /** As recorded. */
  readonly label: string;
  /** The same value as CSS, only when it reads as a plain box-shadow (or `none`). */
  readonly css?: string;
}

export type StateKey = "hover" | "pressed" | "active" | "focus" | "disabled" | "selected" | "checked" | "error";

export interface StateValue {
  readonly key: StateKey;
  /** Verbatim. */
  readonly value: string;
  /** Set only when the whole value is one colour literal. */
  readonly color?: string;
}

export interface ComponentSample {
  readonly type: ComponentType;
  readonly name: string;
  readonly use?: string;
  readonly fill?: string;
  readonly text?: string;
  /** The outline as recorded (shown in the caption). */
  readonly border?: string;
  /** The same outline as CSS: "1px #eee" needs a style keyword to draw. */
  readonly borderCss?: string;
  readonly radius: string;
  readonly height?: string;
  readonly padding?: string;
  readonly shadow?: string;
  /** The recorded type shorthand ("14px / 700"). */
  readonly font?: string;
  readonly fontSize?: number;
  readonly fontWeight?: number;
  /** CSS family for the label, only when the face the component records (or the reference's one face) loads. */
  readonly family?: string;
  readonly states: readonly StateValue[];
  /** The recorded `states` inventory, verbatim. */
  readonly inventory?: string;
}

export interface PreviewModel {
  readonly colors: ColorModel | null;
  readonly fonts: readonly FontFace[];
  readonly scale: readonly TypeStep[];
  readonly spacing: readonly SpacingStep[];
  readonly radii: readonly RadiusStep[];
  readonly shadows: readonly ShadowStep[];
  readonly components: readonly ComponentSample[];
  /** Web-font stylesheets for the faces above that load. */
  readonly stylesheets: readonly string[];
}

export const EMPTY_PREVIEW: PreviewModel = {
  colors: null,
  fonts: [],
  scale: [],
  spacing: [],
  radii: [],
  shadows: [],
  components: [],
  stylesheets: [],
};

/** False when the reference records nothing the preview can draw; the page then shows the DESIGN.md alone. */
export function hasPreviewContent(m: PreviewModel): boolean {
  return Boolean(
    m.colors || m.fonts.length || m.scale.length || m.spacing.length || m.radii.length || m.shadows.length || m.components.length,
  );
}

/* ─────────── recorded values → CSS ─────────── */

/** A recorded CSS value with markdown ticks and trailing annotations removed; undefined when absent. */
export function cssValue(raw?: string): string | undefined {
  if (!raw) return undefined;
  let v = raw.replace(/`/g, "").trim();
  v = v.split(/\s+(?:or|\/)\s+/i)[0].trim();
  v = v.replace(/\s*\([^)]*\)\s*$/, "").trim();
  if (!v || /^(none|n\/a|—|-)$/i.test(v)) return undefined;
  return v;
}

const COLOR_LITERAL =
  /^(?:#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})|rgba?\(\s*[\d.\s,%/]+\)|hsla?\(\s*[\d.\s,%/deg]+\)|transparent)$/i;

/** True only when the whole value is one colour literal ("#0090f0", "rgba(0,0,0,0.08)"). */
export function isColorLiteral(raw?: string): boolean {
  if (!raw) return false;
  return COLOR_LITERAL.test(raw.replace(/[`'"]/g, "").trim());
}

/** The first colour literal in a recorded fill or text value. */
export function firstColor(raw?: string): string | undefined {
  if (!raw) return undefined;
  const m = raw.match(/(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\)|hsla?\([^)]+\)|transparent)/);
  return m ? m[1] : undefined;
}

/** A gradient the variant's own prose records ("radial gradient #64cedb to #15a6b7"). */
function recordedGradient(v: ComponentVariant): string | undefined {
  const text = [v.bg, v.use, ...Object.values(v.extras ?? {})].filter(Boolean).join(" ");
  if (!/gradient/i.test(text)) return undefined;
  const hexes = text.match(/#[0-9a-fA-F]{6}/g);
  if (!hexes || hexes.length < 2) return undefined;
  return /radial/i.test(text)
    ? `radial-gradient(circle at 30% 30%, ${hexes[0]}, ${hexes[1]})`
    : `linear-gradient(135deg, ${hexes[0]}, ${hexes[1]})`;
}

/** A recorded radius as CSS, or undefined. Never a default. */
export function recordedRadius(raw?: string | number): string | undefined {
  if (typeof raw === "number") return Number.isFinite(raw) && raw >= 0 ? `${raw}px` : undefined;
  const v = cssValue(raw);
  if (!v) return undefined;
  if (/^(full\s+pill|pill|full)$/i.test(v)) return "9999px";
  if (/^circle$/i.test(v)) return "50%";
  if (/var\s*\(/i.test(v)) {
    const m = String(raw).match(/(\d+(?:\.\d+)?)\s*(?:px|dp)/i);
    return m ? `${Math.round(parseFloat(m[1]))}px` : undefined;
  }
  const out = v
    .split(/\s+/)
    .map((tok) => (/^\d+(?:\.\d+)?$/.test(tok) ? `${tok}px` : tok))
    .join(" ");
  return /^[\d.]+(px|rem|em|%)?(\s+[\d.]+(px|rem|em|%)?){0,3}$/.test(out) ? out : undefined;
}

export function recordedLength(raw?: string): string | undefined {
  const v = cssValue(raw);
  if (!v) return undefined;
  if (/^\d+(?:\.\d+)?$/.test(v)) return `${v}px`;
  return /^\d+(?:\.\d+)?(px|rem|em)$/.test(v) ? v : undefined;
}

/** A recorded shadow as CSS when it is a plain box-shadow list (or `none`); prose stays text. */
export function cssShadow(raw?: string): string | undefined {
  if (!raw) return undefined;
  const v = raw.replace(/`/g, "").trim();
  if (!v) return undefined;
  if (/^none$/i.test(v)) return "none";
  const rest = v.replace(/#[0-9a-f]{3,8}\b/gi, " ").replace(/(?:rgba?|hsla?)\([^)]*\)/gi, " ");
  if (!/\d/.test(rest) || /[^\s\d.,%a-z-]/i.test(rest)) return undefined;
  const words = rest.match(/[a-z]+/gi) ?? [];
  return words.every((w) => /^(?:px|rem|em|inset|transparent)$/i.test(w)) ? v : undefined;
}

/** A recorded size in px (`14`, `"30px"`); other units are not converted. */
export function parsePx(v: unknown): number | undefined {
  if (typeof v === "number") return Number.isFinite(v) && v > 0 ? v : undefined;
  if (typeof v === "string") {
    const m = v.trim().match(/^(\d+(?:\.\d+)?)(?:px)?$/i);
    if (m) return parseFloat(m[1]) || undefined;
  }
  return undefined;
}

function parseWeight(v: unknown): number | undefined {
  const n = typeof v === "number" ? v : typeof v === "string" && /^\d{3}$/.test(v.trim()) ? Number(v.trim()) : NaN;
  return Number.isFinite(n) && n >= 1 && n <= 1000 ? n : undefined;
}

/**
 * Line height as recorded. A bare number above 4 is a pixel value (pixiv writes `lineHeight: 40`
 * for a 32px role); a number up to 4 is a ratio.
 */
export function lineHeightOf(v: unknown): { css: string; label: string } | undefined {
  const num = (n: number) => (n > 4 ? { css: `${n}px`, label: `${n}px` } : { css: String(n), label: String(n) });
  if (typeof v === "number") return Number.isFinite(v) && v > 0 ? num(v) : undefined;
  if (typeof v !== "string") return undefined;
  const s = v.trim();
  if (/^\d+(?:\.\d+)?px$/i.test(s) || /^\d+(?:\.\d+)?%$/.test(s)) return { css: s, label: s };
  if (/^\d+(?:\.\d+)?$/.test(s)) return parseFloat(s) > 0 ? num(parseFloat(s)) : undefined;
  if (/^normal$/i.test(s)) return { css: "normal", label: "normal" };
  return undefined;
}

/** Letter-spacing as recorded. Applied to a specimen only when the reference gives a unit. */
export function trackingOf(v: unknown): { css?: string; label: string } | undefined {
  if (typeof v === "number") return Number.isFinite(v) && v !== 0 ? { label: String(v) } : undefined;
  if (typeof v !== "string") return undefined;
  const s = v.trim();
  if (!s || /^normal$/i.test(s) || /^[-+]?0*\.?0+(?:px|em|rem)?$/i.test(s)) return undefined;
  return /^[-+]?\d*\.?\d+(?:px|em|rem)$/i.test(s) ? { css: s, label: s } : { label: s };
}

/* ─────────── colours ─────────── */

const STATUS_KEY =
  /(?:^|[-_])(?:success|positive|warning|caution|error|danger|negative|critical|info|informative|notice|alert|attention)(?:[-_]|$)/i;
const ON_KEY = /^on[-_]/i;
const BRAND_KEY = /^(?:primary|brand|accent)(?:[-_]|$)|(?:^|[-_])brand(?:[-_]|$)/i;
const SURFACE_KEY =
  /(?:^|[-_])(?:canvas|background|bg|backdrop|surface|elevated|layer|card|sheet|panel|foreground|fg|text|body|heading|title|label|muted|subtle|disabled|placeholder|border|hairline|divider|outline|stroke|line|separator|ink|paper|white|black|overlay|scrim|neutral|gray|grey)(?:[-_]|$)/i;
const RAMP_KEY = /^([a-z]+(?:[-_][a-z]+)*?)[-_]?(\d{1,4})$/i;
/** Suffixes that mark a variant of the brand colour, not the brand colour itself. */
const VARIANT_SUFFIX =
  /^(?:hover|hovered|press|pressed|active|focus|focused|disabled|faded|light|lighter|lightest|dark|darker|darkest|deep|soft|subtle|weak|strong|ui|tint|shade|muted|bg|background|surface|text|fg|on|container|variant|alt|\d+)$/i;
const HEX = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;

function groupOf(name: string): ColorGroupKey {
  if (STATUS_KEY.test(name)) return "status";
  if (ON_KEY.test(name)) return "surface";
  if (BRAND_KEY.test(name)) return "brand";
  if (SURFACE_KEY.test(name)) return "surface";
  return "other";
}

function pickLead(brand: readonly Swatch[]): Swatch | null {
  const exact = brand.find((s) => /^(?:primary|brand)$/i.test(s.name));
  if (exact) return exact;
  const named = brand.find((s) => {
    const m = s.name.match(/^(?:primary|brand)[-_](.+)$/i);
    return m ? !VARIANT_SUFFIX.test(m[1]) : false;
  });
  return named ?? brand.find((s) => /^accent$/i.test(s.name)) ?? null;
}

const GROUP_ORDER: readonly ColorGroupKey[] = ["brand", "surface", "status", "other"];

/**
 * Colours in the reference's own order, grouped by what their keys say. A hue with three or more
 * numbered steps ("grey50" … "grey900") is drawn as one ramp, its steps in numeric order.
 */
export function buildColorModel(colors: readonly Swatch[]): ColorModel | null {
  const valid = colors.filter((c) => c.name && HEX.test(c.hex));
  if (valid.length === 0) return null;

  const byHue = new Map<string, RampStep[]>();
  const hueOrder: string[] = [];
  for (const c of valid) {
    const m = c.name.match(RAMP_KEY);
    if (!m) continue;
    const hue = m[1].toLowerCase();
    if (!byHue.has(hue)) {
      byHue.set(hue, []);
      hueOrder.push(hue);
    }
    byHue.get(hue)!.push({ step: m[2], name: c.name, hex: c.hex });
  }
  const rampHues = new Set(hueOrder.filter((h) => byHue.get(h)!.length >= 3));
  const ramps: Ramp[] = hueOrder
    .filter((h) => rampHues.has(h))
    .map((hue) => ({ hue, steps: [...byHue.get(hue)!].sort((a, b) => Number(a.step) - Number(b.step)) }));
  const inRamp = new Set(ramps.flatMap((r) => r.steps.map((s) => s.name)));

  const grouped = new Map<ColorGroupKey, Swatch[]>();
  for (const c of valid) {
    if (inRamp.has(c.name)) continue;
    const key = groupOf(c.name);
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key)!.push({ name: c.name, hex: c.hex });
  }
  const lead = pickLead(grouped.get("brand") ?? []);
  const groups = GROUP_ORDER.flatMap((key) => {
    const swatches = (grouped.get(key) ?? []).filter((s) => s !== lead);
    return swatches.length ? [{ key, swatches }] : [];
  });
  return { lead, groups, ramps };
}

/* ─────────── type scale ─────────── */

export interface RecordedTier {
  readonly key: string;
  readonly size?: unknown;
  readonly weight?: unknown;
  readonly lineHeight?: unknown;
  readonly tracking?: unknown;
  readonly use?: unknown;
  readonly family?: unknown;
}

/**
 * Every recorded role with a size, largest first (ties keep the reference's order). Weight, line
 * height and tracking appear only when recorded. `specimenFor` returns a specimen only for a face
 * that loads; a role without one keeps its metrics.
 */
export function buildTypeScale(
  tiers: readonly RecordedTier[],
  specimenFor: (family: string | undefined) => Specimen | undefined,
): TypeStep[] {
  return tiers
    .flatMap((t) => {
      const size = parsePx(t.size);
      if (!size) return [];
      const weight = parseWeight(t.weight);
      const lineHeight = lineHeightOf(t.lineHeight);
      const tracking = trackingOf(t.tracking);
      const use = typeof t.use === "string" && t.use.trim() ? t.use.trim() : undefined;
      const specimen = specimenFor(typeof t.family === "string" && t.family.trim() ? t.family : undefined);
      return [{
        name: t.key,
        size,
        ...(weight ? { weight } : {}),
        ...(lineHeight ? { lineHeight } : {}),
        ...(tracking ? { tracking } : {}),
        ...(use ? { use } : {}),
        // A specimen needs a recorded weight: drawing a role at a weight it does not record would be a guess.
        ...(specimen && weight ? { specimen } : {}),
      } satisfies TypeStep];
    })
    .sort((a, b) => b.size - a.size);
}

/** Sample copy matched to the face's script, so no glyph falls back to another face. */
export function sampleFor(family: string): { text: string; lang: string } {
  if (/\b(?:KR|Korean)\b|Pretendard|Nanum|Spoqa|SUIT|Apple SD Gothic|Malgun|Gothic A1|Wanted Sans/i.test(family)) {
    return { text: "다람쥐 헌 쳇바퀴에 타고파", lang: "ko" };
  }
  if (/\bJP\b|Japanese|Hiragino|Yu Gothic|Meiryo|M PLUS|Kosugi|Sawarabi|Zen Kaku/i.test(family)) {
    return { text: "いろはにほへと ちりぬるを", lang: "ja" };
  }
  if (/\b(?:TC|HK)\b|PingFang TC|JhengHei/i.test(family)) return { text: "永和九年，歲在癸丑", lang: "zh-Hant" };
  if (/\bSC\b|PingFang SC|YaHei/i.test(family)) return { text: "永和九年，岁在癸丑", lang: "zh-Hans" };
  return { text: "The quick brown fox jumps over the lazy dog", lang: "en" };
}

/* ─────────── spacing, radius, elevation ─────────── */

export function buildSpacing(entries: readonly { name: string; value: unknown }[]): SpacingStep[] {
  return entries
    .flatMap(({ name, value }) => (typeof value === "number" && Number.isFinite(value) && value >= 0 ? [{ name, px: value }] : []))
    .sort((a, b) => a.px - b.px);
}

function radiusRank(css: string): number {
  if (/%$/.test(css)) return 1e9;
  const m = css.match(/^(\d+(?:\.\d+)?)px$/);
  return m ? parseFloat(m[1]) : 1e8;
}

export function buildRadii(entries: readonly { name: string; value: unknown }[]): RadiusStep[] {
  return entries
    .flatMap(({ name, value }) => {
      if (typeof value !== "string" && typeof value !== "number") return [];
      const css = recordedRadius(value);
      return css ? [{ name, css, label: String(value) }] : [];
    })
    .sort((a, b) => radiusRank(a.css) - radiusRank(b.css));
}

export function buildShadows(entries: readonly { name: string; value: unknown }[]): ShadowStep[] {
  return entries.flatMap(({ name, value }) => {
    if (typeof value !== "string" || !value.trim()) return [];
    const css = cssShadow(value);
    return [{ name, label: value.trim(), ...(css ? { css } : {}) }];
  });
}

/* ─────────── components ─────────── */

const CORE: readonly ComponentType[] = ["button", "input", "card", "badge", "tab"];
const PER_TYPE: Partial<Record<ComponentType, number>> = { button: 4, input: 2, card: 3, badge: 2, tab: 2 };
const STATE_KEYS: readonly StateKey[] = ["hover", "pressed", "active", "focus", "disabled", "selected", "checked", "error"];

function withStyle(border: string): string {
  return /\b(solid|dashed|dotted|double)\b/i.test(border) ? border : border.replace(/^(\S+)/, "$1 solid");
}

/** "14px / 700", "17px / 400 Noto Sans KR", "14px/400/20px operating-system stack". */
export function parseFontShorthand(raw?: string): { size?: number; weight?: number; family?: string } {
  if (!raw) return {};
  const m = raw.replace(/`/g, "").trim().match(/^(\d+(?:\.\d+)?)px\s*\/\s*(\d{3})(?:\s*\/\s*\d+(?:\.\d+)?(?:px)?)?\s*(.*)$/i);
  if (!m) return {};
  return { size: parseFloat(m[1]), weight: Number(m[2]), ...(m[3].trim() ? { family: m[3].trim() } : {}) };
}

function statesOf(v: ComponentVariant): StateValue[] {
  const bag: Record<string, string | undefined> = {
    ...v.extras,
    hover: v.hover,
    active: v.active,
    focus: v.focus,
    disabled: v.disabled,
  };
  return STATE_KEYS.flatMap((key) => {
    const value = bag[key]?.replace(/`/g, "").trim();
    if (!value) return [];
    const literal = value.replace(/['"]/g, "");
    return [{ key, value, ...(isColorLiteral(literal) ? { color: literal } : {}) }];
  });
}

/** A variant is drawn only from its own recorded values: a radius, plus a fill or an outline to see. */
export function sampleOf(
  type: ComponentType,
  v: ComponentVariant,
  familyFor: (family: string | undefined) => string | undefined,
): ComponentSample | null {
  const radius = recordedRadius(v.radius);
  if (!radius) return null;
  const fill = firstColor(v.bg) ?? recordedGradient(v);
  const text = firstColor(v.fg);
  // An outline counts only when it has a width ("0px #d4dee9" draws nothing) and is plain CSS.
  const rawBorder = cssValue(v.border);
  const border =
    rawBorder &&
    /^(?:\d*\.?\d+px|thin|medium|thick)(?:\s+(?:solid|dashed|dotted|double))?(?:\s+\S+)?$/i.test(rawBorder) &&
    !/^0*\.?0+px/.test(rawBorder)
      ? rawBorder
      : undefined;
  const recordedShadow = cssShadow(v.shadow);
  const shadow = recordedShadow === "none" ? undefined : recordedShadow;
  // A clear fill draws nothing: such a control is shown only when its outline is recorded.
  const solid = fill && fill !== "transparent" ? fill : undefined;
  if ((type === "button" || type === "badge" || type === "tab") && !(solid ? text : border && text)) return null;
  if (type === "input" && !solid && !border) return null;
  if (type === "card" && !solid && !border && !shadow) return null;
  const font = parseFontShorthand(v.font);
  const family = familyFor(font.family);
  const inventory = v.extras?.states?.replace(/`/g, "").trim();
  return {
    type,
    name: v.name,
    ...(v.use?.trim() ? { use: v.use.trim() } : {}),
    ...(fill ? { fill } : {}),
    ...(text ? { text } : {}),
    ...(border ? { border, borderCss: withStyle(border) } : {}),
    radius,
    ...(recordedLength(v.height) ? { height: recordedLength(v.height) } : {}),
    ...(cssValue(v.padding) ? { padding: cssValue(v.padding) } : {}),
    ...(shadow ? { shadow } : {}),
    ...(v.font?.trim() ? { font: v.font.replace(/`/g, "").trim() } : {}),
    ...(font.size ? { fontSize: font.size } : {}),
    ...(font.weight ? { fontWeight: font.weight } : {}),
    ...(family ? { family } : {}),
    states: statesOf(v),
    ...(inventory ? { inventory } : {}),
  };
}

/** Drawable variants, grouped by kind in a fixed order, each kind in the reference's own order. */
export function buildComponents(
  variants: readonly { type: ComponentType; variant: ComponentVariant }[],
  familyFor: (family: string | undefined) => string | undefined,
): ComponentSample[] {
  const out: ComponentSample[] = [];
  for (const type of CORE) {
    let n = 0;
    for (const entry of variants) {
      if (entry.type !== type || n >= (PER_TYPE[type] ?? 0)) continue;
      const s = sampleOf(type, entry.variant, familyFor);
      if (s) {
        out.push(s);
        n++;
      }
    }
  }
  return out;
}

/** Entries in the order of `keys` (the reference's authoring order); unlisted entries keep their place after them. */
export function inAuthorOrder<T>(entries: readonly [string, T][], keys: readonly string[]): [string, T][] {
  const rank = new Map(keys.map((k, i) => [k, i]));
  return entries
    .map((e, i) => ({ e, r: rank.get(e[0]) ?? keys.length + i }))
    .sort((a, b) => a.r - b.r)
    .map(({ e }) => e);
}
