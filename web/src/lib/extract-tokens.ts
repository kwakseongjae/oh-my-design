/**
 * Extract structured design tokens from a parsed RefDetail + raw DESIGN.md.
 *
 * Returns a normalized ParsedTokens object that the showcase ReferencePreview
 * component renders. Falls back to sensible defaults when DESIGN.md prose
 * doesn't expose explicit values.
 */

export interface FontMention {
  /** Raw name as it appeared in DESIGN.md (e.g., "Helvetica Neue"). */
  raw: string;
  /** Inferred role: "primary" | "mono" | "display" | "serif" | "fallback" | "icon" */
  role: string;
}

export interface TypographyTier {
  label: string;        // "Display XXL", "Heading XL", etc.
  role: string;         // "Display", "Heading 1", "Heading 2", "Body", "Small", "Caption", "Smallest"
  sampleText: string;   // copy shown at this tier
  fontSize: number;     // px
  fontWeight: number;
  lineHeight: number;
  letterSpacing: string;
  muted?: boolean;      // render in muted color (Small/Caption/Smallest)
}

export type ColorCategory = "brand" | "accent" | "neutral" | "semantic";

export interface ColorRole {
  hex: string;
  name: string;            // human-friendly auto-derived name (e.g., "Slate", "Crimson")
  category: ColorCategory;
  description?: string;    // 1-line role/usage if extractable, else heuristic
}

export interface RadiusScaleItem {
  element: string;         // "buttons", "cards", "badges", "inputs", "dialogs", "default", "pill"
  value: string;           // "8px", "9999px"
  label?: string;          // "Standard", "Comfortable" — tier label from prose
}

export interface SpacingItem {
  value: number;           // px
  purpose?: string;        // "Base unit", "Section gap" — when extractable
}

/** Functional spacing roles (refero-style): a small fixed lexicon that maps to
 *  the values most readers care about — denser than the raw scale, more honest
 *  than "Step 1, Step 2, Step 3". Filled by `deriveFunctionalSpacing()`. */
export interface FunctionalSpacing {
  density: "compact" | "comfortable" | "spacious";
  baseUnit: number;        // px — typically 4 or 8
  sectionGap: number;      // px — large vertical separator
  cardPadding: number;     // px — inside-card padding
  elementGap: number;      // px — gap between sibling elements
}

/** Parsed component spec from §4 Component Stylings. Each variant is a flat
 *  field bag; the renderer decides how to map fields to a live instance.
 *  Spec is the source of truth — extracted as-written, not normalized into
 *  a hex/px enforcement layer (so prose like "transparent", "pill", "1px
 *  solid #..." round-trip cleanly into the live instance via raw CSS). */
export type ComponentType =
  | "button"
  | "input"
  | "card"
  | "badge"
  | "tab"
  | "toggle"
  | "toast"
  | "dialog"
  | "listItem"
  | "avatar";

export interface ComponentVariant {
  name: string;            // exact `**Variant Name**` from §4
  bg?: string;
  fg?: string;
  border?: string;
  radius?: string;
  padding?: string;
  height?: string;         // structured-token field; not all variants specify it
  font?: string;           // free-form, e.g. "16px / 600 / Toss Product Sans"
  hover?: string;
  focus?: string;
  active?: string;
  disabled?: string;
  shadow?: string;
  use?: string;
  extras: Record<string, string>; // unknown `- Foo: bar` lines preserved
}

export interface ComponentBlock {
  type: ComponentType;
  heading: string;         // exact `### ...` heading from §4 (e.g., "Cards & Containers")
  variants: ComponentVariant[];
  notes?: string;          // trailing prose paragraph (after the variants)
}

export interface BorderToken {
  element: string;         // "Card", "Input default", "Focus ring", …
  width: string;           // "1px", "2px", "1.5px"
  color?: string;          // "#e0e0e0" — when extractable
  style?: string;          // "solid" / "dashed" — when extractable
  raw?: string;            // original prose snippet for fallback display
}

export interface Guideline {
  type: "do" | "dont";
  text: string;
}

export interface ParsedTokens {
  identity: {
    id?: string;
    name: string;
    primary: string;
    background: string;
    foreground: string;
    accent?: string;
    border?: string;
    mood: string;
  };
  typography: {
    family: string;
    mono?: string;
    headingWeight: string;
    weights: number[];           // sorted unique font-weights observed in DESIGN.md
    sizes: number[];             // sorted unique font-sizes (px) observed
    hierarchy: TypographyTier[]; // canonical 7-tier hierarchy derived from extracted sizes/weights
    fonts: FontMention[];        // ALL fonts mentioned in §3 with role inference
  };
  /** Per-component-type radius derived from the brand's full radius value.
   *  Buttons/inputs keep full radius (pill OK). Cards/dialogs cap at 16px.
   *  Badges cap at 8px. Kept for backward compat with legacy preview.tsx. */
  radii: {
    button: string;
    input: string;
    card: string;
    dialog: string;
    badge: string;
  };
  /** Per-element radius scale parsed from §5 `### Border Radius Scale`. Falls
   *  back to the 5-element shape derived from `radii` when prose is missing. */
  radiusScale: RadiusScaleItem[];
  /** Hex colors discovered in §2 of DESIGN.md, deduped and sorted by usage frequency. */
  palette: string[];
  /** Heuristic-categorized colors with auto-derived names — drives the refero-style
   *  Color Palette section in ReferencePreview. */
  paletteRoles: ColorRole[];
  /** Spacing scale values found in DESIGN.md (px or rem). Falls back to 4dp scale. */
  spacing: number[];
  /** Spacing scale paired with role/purpose labels when extractable. */
  spacingScale: SpacingItem[];
  /** Refero-style 5-row functional spacing summary (Density / Base unit /
   *  Section gap / Card padding / Element gap). Always populated — derived
   *  heuristically when DESIGN.md prose doesn't supply explicit labels. */
  functionalSpacing: FunctionalSpacing;
  /** Border tokens — line widths/colors/styles applied to surfaces, inputs,
   *  focus rings. Empty when DESIGN.md doesn't expose explicit border prose. */
  borders: BorderToken[];
  /** Per-component variant specs parsed from §4 Component Stylings.
   *  Empty when DESIGN.md hasn't been migrated yet — UI falls back to a
   *  "no spec" state instead of fabricating dashboard mock content. */
  components: ComponentBlock[];
  /** Shadow recipes found in §6. Falls back to 3-tier defaults. */
  shadows: { name: string; value: string }[];
  /** Do / Don't guidelines parsed from `### Do` / `### Don't` headers. */
  guidelines: Guideline[];
}

const DEFAULT_SPACING = [4, 8, 12, 16, 24, 32, 48, 64];
const DEFAULT_SHADOWS = [
  { name: "Subtle", value: "0 1px 2px 0 rgba(0,0,0,0.05)" },
  { name: "Default", value: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)" },
  { name: "Elevated", value: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)" },
  { name: "Floating", value: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)" },
  { name: "Modal", value: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)" },
];

/** Extract every font name mentioned in §3 with role inference.
 *  Looks at: **Primary**: `...`, **Monospace**: `...`, **Display**: `...`,
 *  font-family declarations, and capitalized backticked tokens.
 *  Filters hex colors, CSS keywords, and weight-like strings. */
function extractFontMentions(md: string): FontMention[] {
  const sec3m = md.match(/## 3\. Typography[\s\S]*?(?=## 4\.)/i);
  if (!sec3m) return [];
  const sec3 = sec3m[0];
  const seen = new Set<string>();
  const out: FontMention[] = [];
  const push = (raw: string, role: string) => {
    const cleaned = raw.replace(/['"]/g, "").replace(/[;].*/, "").trim();
    if (!cleaned || cleaned.length > 50) return;
    if (/^#[0-9a-f]{3,8}$/i.test(cleaned)) return;
    if (/^(serif|sans-serif|monospace|var|inherit|var\(|none)$/i.test(cleaned)) return;
    const key = cleaned.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    out.push({ raw: cleaned, role });
  };

  // 1. **Primary** / **Monospace** / **Display** / **Serif** etc.
  for (const m of sec3.matchAll(/\*\*(Primary|Monospace|Display|Mono|Serif|Sans|Heading|Body)[^*]*\*\*:?\s*`([^`]+)`/gi)) {
    const role = m[1].toLowerCase().includes("mono") ? "mono"
      : m[1].toLowerCase().includes("display") ? "display"
      : m[1].toLowerCase().includes("serif") ? "serif"
      : "primary";
    m[2].split(",").forEach((f) => push(f.trim(), role));
  }

  // 2. font-family declarations
  for (const m of sec3.matchAll(/font-family:\s*([^;\n]+)/gi)) {
    m[1].split(",").forEach((f) => push(f.trim(), "fallback"));
  }

  // 3. Backticked capitalized font names (heuristic)
  for (const m of sec3.matchAll(/`([A-Z][A-Za-z][\w\s\-]{2,40})`/g)) {
    const name = m[1].trim();
    if (name.length > 35) continue;
    if (/^(?:Display|Heading|Body|Caption|Small|Large|Medium|Regular|Bold|Light|Italic|Mono|Sans|Serif|Variable|Variable Font|Variable Light|Variable Medium|Variable Bold|Pro|Pro Medium|Pro SemiBold|Pro Italic|Bold Italic|Italic|XS|S|M|L|XL|XXL|UI|UI Variable|Inter Placeholder|Inter Fallback|Fallback|Subhead|Hero|Mobile|Roman|Light Italic|Medium Italic|SemiBold|ExtraBold|Black|Thin|Header|NORMAL|0|RegularXXS|XXS|Open Source|Open|Source)$/i.test(name)) continue;
    if (/^[0-9]/.test(name)) continue;
    push(name, "primary");
  }

  return out.slice(0, 12); // cap to keep card grids reasonable
}

function capRadius(radius: string, maxPx: number): string {
  const m = radius.match(/^(\d+)/);
  if (!m) return radius;
  return parseInt(m[1], 10) > maxPx ? `${maxPx}px` : radius;
}

/** Apply user overrides (from builder customizer) on top of the parsed tokens. */
export interface PreviewOverrides {
  primaryColor?: string;
  fontFamily?: string;
  headingWeight?: string;
  borderRadius?: string;
  /** Wizard style preferences — optional, surface-level hints that the
   *  preview applies on top of the parsed token set so builder step 3 reflects
   *  the user's A/B choices (button pill vs. sharp, elevated vs. bordered
   *  card, compact vs. spacious density, underline vs. bordered input). */
  stylePreferences?: {
    buttonStyle?: string;
    inputStyle?: string;
    cardStyle?: string;
    density?: string;
    [key: string]: string | undefined;
  };
}

export function applyOverrides(tokens: ParsedTokens, overrides?: PreviewOverrides): ParsedTokens {
  if (!overrides) return tokens;
  const o = overrides;
  // Treat empty string the same as undefined — an empty override means "keep
  // the reference default", not "apply the empty value". Required because
  // BuilderPage holds Overrides as `{primaryColor: string, ...}` with `''` as
  // the sentinel for "unset" (see use-as-is path), and `??` would leak that.
  const pick = <T extends string | undefined>(v: T, fallback: string) => (v ? v : fallback);
  const baseRadius = pick(o.borderRadius, tokens.radii.button);
  const headingWeight = pick(o.headingWeight, tokens.typography.headingWeight);
  const family = pick(o.fontFamily, tokens.typography.family);
  const prefs = o.stylePreferences ?? {};

  const sortedSizes = [...tokens.typography.sizes].sort((a, b) => b - a);
  const hWeight = parseInt(headingWeight, 10) || 700;
  const hierarchy = tokens.typography.hierarchy.map((tier) => {
    const isHeading = tier.role === "Display" || tier.role === "Heading 1" || tier.role === "Heading 2";
    return {
      ...tier,
      fontWeight: isHeading ? hWeight : tier.fontWeight,
    };
  });
  void sortedSizes; // keep variable for future size override

  // buttonStyle:rounded forces pills; buttonStyle:sharp clamps to <=4px even if
  // the user's borderRadius is larger. Input radius follows button when the
  // input style is bordered; underline decouples input from the radius system.
  const buttonRadius = prefs.buttonStyle === 'rounded'
    ? '9999px'
    : prefs.buttonStyle === 'sharp'
      ? capRadius(baseRadius, 4)
      : baseRadius;
  const inputRadius = prefs.inputStyle === 'underline' ? '0px' : buttonRadius;

  // cardStyle:elevated keeps the ref's shadow; cardStyle:bordered strips it to
  // a flat "none" recipe so the preview visually demonstrates the user's pick.
  const shadows = prefs.cardStyle === 'bordered'
    ? [{ name: 'Flat', value: 'none' }, ...tokens.shadows.slice(1)]
    : tokens.shadows;

  const newPrimary = pick(o.primaryColor, tokens.identity.primary);
  // If the user changed the primary color in the customizer, update the brand
  // entry of paletteRoles so the swatch reflects their pick. Re-categorize the
  // old primary (it might shift from "brand" → "accent"). Other categories are
  // left untouched — heuristic re-rolling on every keystroke would be jarring.
  const paletteRoles: ColorRole[] = (() => {
    if (!tokens.paletteRoles?.length) return tokens.paletteRoles;
    if (newPrimary.toLowerCase() === tokens.identity.primary.toLowerCase()) return tokens.paletteRoles;
    return tokens.paletteRoles.map((r) => {
      if (r.category === "brand") {
        const cat = categorizeColor(r.hex, false);
        return { ...r, category: cat };
      }
      if (r.hex.toLowerCase() === newPrimary.toLowerCase()) {
        return { ...r, category: "brand", description: heuristicColorDescription("brand", true) };
      }
      return r;
    });
  })();

  return {
    ...tokens,
    identity: {
      ...tokens.identity,
      primary: newPrimary,
    },
    typography: {
      ...tokens.typography,
      family,
      headingWeight,
      hierarchy,
    },
    radii: {
      button: buttonRadius,
      input: inputRadius,
      card: capRadius(buttonRadius, 16),
      dialog: capRadius(buttonRadius, 16),
      badge: capRadius(buttonRadius, 8),
    },
    radiusScale: tokens.radiusScale.map((r) => {
      // Customizer override takes precedence ONLY when the user actively
      // dialled borderRadius. Otherwise we keep the per-element scale parsed
      // from DESIGN.md so e.g. "Buttons: 8px / Cards: 20px / Pill: 9999px"
      // renders truthfully instead of stamping a single value across all rows.
      if (!o.borderRadius) return r;
      const isPill = r.element === "pill" || r.value === "9999px";
      if (isPill) return r;
      if (r.element === "cards" || r.element === "dialogs") return { ...r, value: capRadius(buttonRadius, 16) };
      if (r.element === "badges") return { ...r, value: capRadius(buttonRadius, 8) };
      if (r.element === "inputs") return { ...r, value: inputRadius };
      if (r.element === "buttons") return { ...r, value: buttonRadius };
      return r;
    }),
    functionalSpacing: (() => {
      // density preference (compact/comfortable/spacious) wins over the
      // heuristic bucket so the user's customizer choice is reflected in the
      // refero-style summary the same way it's already reflected in cardPad.
      const userDensity = (prefs.density as FunctionalSpacing["density"] | undefined);
      if (!userDensity) return tokens.functionalSpacing;
      const fs = tokens.functionalSpacing;
      const adjusted: FunctionalSpacing = (() => {
        if (userDensity === "compact")  return { ...fs, cardPadding: Math.min(fs.cardPadding, 12), elementGap: Math.min(fs.elementGap, 8) };
        if (userDensity === "spacious") return { ...fs, cardPadding: Math.max(fs.cardPadding, 24), elementGap: Math.max(fs.elementGap, 16) };
        return fs;
      })();
      return { ...adjusted, density: userDensity };
    })(),
    paletteRoles,
    shadows,
  };
}

function extractWeights(md: string): number[] {
  const matches = [...md.matchAll(/font-weight:?\s*(\d{3})/gi)];
  const weights = new Set<number>();
  for (const m of matches) {
    const w = parseInt(m[1], 10);
    if (w >= 100 && w <= 900) weights.add(w);
  }
  // Also pick up bare weight references like "weight 700"
  const bareMatches = [...md.matchAll(/\bweight\s+(\d{3})\b/gi)];
  for (const m of bareMatches) {
    const w = parseInt(m[1], 10);
    if (w >= 100 && w <= 900) weights.add(w);
  }
  if (weights.size === 0) return [400, 500, 700];
  return [...weights].sort((a, b) => a - b);
}

function extractFontSizes(md: string): number[] {
  const matches = [...md.matchAll(/(\d{2})px/g)];
  const sizes = new Set<number>();
  for (const m of matches) {
    const n = parseInt(m[1], 10);
    // Plausible body/heading sizes
    if (n >= 10 && n <= 72) sizes.add(n);
  }
  // Pick a sensible scale: capture small/body/large/display
  const sorted = [...sizes].sort((a, b) => a - b);
  if (sorted.length < 4) return [12, 14, 16, 20, 24, 32];
  // Reduce to ~6 representative sizes
  const picks: number[] = [];
  const targets = [10, 12, 14, 16, 20, 24, 32, 48];
  for (const t of targets) {
    const closest = sorted.reduce((a, b) => (Math.abs(b - t) < Math.abs(a - t) ? b : a));
    if (!picks.includes(closest) && Math.abs(closest - t) <= 6) picks.push(closest);
  }
  return picks.length >= 4 ? picks : [12, 14, 16, 20, 24, 32];
}

function extractPalette(md: string): string[] {
  // Section 2 (Color Palette) extraction; fall back to whole doc if §2 not found
  const sec2 = md.match(/## 2\. Color[\s\S]*?(?=## 3\.)/i)?.[0] ?? md;
  const matches = [...sec2.matchAll(/#([0-9a-fA-F]{6})\b/g)];
  const counts = new Map<string, number>();
  for (const m of matches) {
    const hex = `#${m[1].toLowerCase()}`;
    counts.set(hex, (counts.get(hex) ?? 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([hex]) => hex)
    .slice(0, 24);
}

/** Narrow spacing extraction to the `### Spacing System` subsection so we do
 *  NOT pick up max-width (980/1080/1200), section-padding (80–120), card-padding
 *  ranges, or letter-spacing values that also live in §5. Prefer the explicit
 *  "Scale: ..." line; fall back to base unit + 4-power scale. */
function extractSpacing(md: string): number[] {
  const sec5 = md.match(/## 5\. Layout[\s\S]*?(?=## 6\.)/i)?.[0] ?? "";
  // Subsection: `### Spacing System` block until next ###/##
  const spacingBlock = sec5.match(/###\s*Spacing[\s\S]*?(?=\n###|\n##|$)/i)?.[0] ?? "";
  const values = new Set<number>();

  // 1. Direct "Scale: 2px, 4px, 8px..." line
  const scaleLine = spacingBlock.match(/Scale:?\s*([^\n]+)/i)?.[1] ?? "";
  for (const m of scaleLine.matchAll(/\b(\d{1,3})(?:px|dp)\b/g)) {
    const n = parseInt(m[1], 10);
    if (n >= 2 && n <= 96) values.add(n);
  }

  // 2. If still sparse, harvest small-range bullets inside the spacing block
  if (values.size < 4) {
    for (const m of spacingBlock.matchAll(/\b(\d{1,3})(?:px|dp)\b/g)) {
      const n = parseInt(m[1], 10);
      // Cap at 64 here — anything bigger inside Spacing System tends to be a
      // section-padding outlier (80, 96, 120) we don't want in the swatch list.
      if (n >= 2 && n <= 64) values.add(n);
    }
  }

  if (values.size < 3) return DEFAULT_SPACING;
  return [...values].sort((a, b) => a - b).slice(0, 10);
}

/** Pair spacing px values with purpose labels by grepping the spacing block for
 *  "<purpose>: Xpx" or "Base unit: 8px". Best-effort; missing labels just
 *  surface as bare values in the preview. */
function extractSpacingScale(md: string, values: number[]): SpacingItem[] {
  const sec5 = md.match(/## 5\. Layout[\s\S]*?(?=## 6\.)/i)?.[0] ?? "";
  const block = sec5.match(/###\s*Spacing[\s\S]*?(?=\n###|\n##|$)/i)?.[0] ?? "";
  const purposes = new Map<number, string>();
  // "- Base unit: 8px" or "- Section gap: 80px" or "**Base unit**: 8px"
  for (const m of block.matchAll(/^[-*]?\s*\*{0,2}([A-Za-z][\w\s/-]{2,30}?)\*{0,2}\s*[:：]\s*(?:approximately\s+)?(\d{1,3})\s*(?:px|dp)/gim)) {
    const purpose = m[1].trim().replace(/\s+/g, " ");
    const n = parseInt(m[2], 10);
    if (purpose.toLowerCase() === "scale") continue;
    if (!purposes.has(n)) purposes.set(n, purpose);
  }
  return values.map((v) => ({ value: v, purpose: purposes.get(v) }));
}

/** Conservative radius scale derivation when there's no `### Border Radius`
 *  block. We trust ONLY two signals: (a) `Default radius: `Npx`` as the
 *  canonical universal value, applied to common elements with the standard
 *  caps; (b) explicit pill/circle prose. We deliberately do NOT scan
 *  per-element forward/reverse regex — multi-value border-radius prose like
 *  "border-radius: 0px 4px 4px 0px" or "Counter (...): 8px radius, 14px weight"
 *  generates noise (0px assigned to cards, 14px assigned to buttons).
 *  The structured `### Border Radius Scale` block is the place for per-element
 *  diversity; absence of that block means "default everywhere" is the truth. */
function extractRadiusFromProse(md: string): RadiusScaleItem[] {
  const out: RadiusScaleItem[] = [];
  const defaultM = md.match(/\*{0,2}Default radius\*{0,2}\s*[:：]\s*`?(\d+px)`?/i);
  if (defaultM) {
    const v = normalizeRadiusValue(defaultM[1]) ?? defaultM[1];
    const cardCap   = capRadius(v, 16);
    const dialogCap = capRadius(v, 16);
    const badgeCap  = capRadius(v, 8);
    out.push(
      { element: "buttons", value: v,         label: "Default" },
      { element: "inputs",  value: v,         label: "Default" },
      { element: "cards",   value: cardCap,   label: "Default" },
      { element: "dialogs", value: dialogCap, label: "Default" },
      { element: "badges",  value: badgeCap,  label: "Default" },
    );
  }
  if (/\b(?:full[- ]pill|pill[- ]shaped|pill\s+button)\b/i.test(md) && !out.some((r) => r.value === "9999px")) {
    out.push({ element: "pill", value: "9999px", label: "Pill" });
  }
  if (/\bcircle\b|50%\s*radius/i.test(md) && !out.some((r) => r.value === "50%")) {
    out.push({ element: "circle", value: "50%", label: "Circle" });
  }
  return out;
}

/** Parse `### Border Radius Scale` block in §5 into per-element entries.
 *  Recognised patterns:
 *    - "Standard (8px): Buttons, cards, badges"
 *    - "**Standard**: 8px — buttons, cards"
 *    - "Card (20px): Feature cards, large buttons"
 *  Returns one item per (label/element) pair. */
function extractRadiusScale(md: string): RadiusScaleItem[] {
  const sec5 = md.match(/## 5\. Layout[\s\S]*?(?=## 6\.)/i)?.[0] ?? "";
  const block = sec5.match(/###\s*Border\s*Radius[\s\S]*?(?=\n###|\n##|$)/i)?.[0] ?? "";
  const out: RadiusScaleItem[] = [];
  // Pattern 1: "- Standard (8px): Buttons, inputs"
  for (const m of block.matchAll(/^[-*]\s*\*{0,2}([A-Za-z][\w\s-]{0,24}?)\*{0,2}\s*\(\s*([^)]+?)\s*\)\s*[:：]\s*([^\n]+)/gm)) {
    const label = m[1].trim();
    const value = normalizeRadiusValue(m[2]);
    const elementsRaw = m[3].trim();
    if (!value) continue;
    const elements = elementsRaw
      .split(/[,，·]/)
      .map((s) => s.replace(/[—–-].*/, "").replace(/\(.*?\)/g, "").trim().toLowerCase())
      .filter((s) => s && s.length < 32);
    if (elements.length === 0) {
      out.push({ element: label.toLowerCase(), value, label });
    } else {
      for (const el of elements) out.push({ element: simplifyElementWord(el), value, label });
    }
  }
  // De-dup by element keeping the first occurrence (which tends to be the
  // canonical / smaller-tier mention in DESIGN.md prose).
  const seen = new Set<string>();
  return out.filter((r) => {
    const k = `${r.element}|${r.value}`;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  }).slice(0, 12);
}

function normalizeRadiusValue(raw: string): string | null {
  const s = raw.trim();
  if (/^(full\s+pill|pill|circle)$/i.test(s)) return "9999px";
  if (/^50%$/i.test(s)) return "50%";
  // Multi-digit huge values ("33.5M px", "9999px", "1280px") → pill.
  // Anything ≥ 64 is effectively a pill for a 32–48px button anyway, so
  // collapse it to the canonical 9999 instead of confusing readers with
  // "1280px" or "980px" — those values are accurate prose but useless tokens.
  const numMatch = s.match(/(\d+(?:\.\d+)?)/);
  if (!numMatch) return null;
  const n = parseFloat(numMatch[1]);
  if (n >= 64) return "9999px";
  return `${Math.round(n)}px`;
}

/** Same threshold as normalizeRadiusValue — anything ≥64px collapses to pill.
 *  Used in fallback paths where we receive a single string value (detail.radius)
 *  that the source pipeline didn't sanitize. Keeps the preview honest: a
 *  literal "1280px" radius doesn't mean "1280px corner" — it means pill. */
function sanitizeRadiusString(value: string): string {
  const m = value.match(/(\d+(?:\.\d+)?)/);
  if (!m) return value;
  const n = parseFloat(m[1]);
  if (n >= 64) return "9999px";
  return value;
}

const RADIUS_ELEMENT_CANON: Record<string, string> = {
  cta: "buttons", "ctas": "buttons", button: "buttons", buttons: "buttons",
  input: "inputs", inputs: "inputs", field: "inputs", fields: "inputs",
  card: "cards", cards: "cards",
  badge: "badges", badges: "badges", tag: "badges", tags: "badges", chip: "badges", chips: "badges",
  dialog: "dialogs", dialogs: "dialogs", modal: "dialogs", modals: "dialogs",
  pill: "pill", "full pill": "pill",
};
function simplifyElementWord(s: string): string {
  const head = s.split(/\s+/)[0].replace(/[^a-z]/g, "");
  return RADIUS_ELEMENT_CANON[head] ?? RADIUS_ELEMENT_CANON[s.trim()] ?? head ?? "default";
}

/** Map a list of spacing px values to refero's 5-row functional summary.
 *  Strategy:
 *   1. Honour explicit purpose labels from spacingScale when present (DCard
 *      writes "- Header padding: 20px"; we still don't equate that with
 *      "Card padding" — only the canonical purpose names match).
 *   2. Fill remaining slots heuristically: smallest non-trivial value → base,
 *      largest reasonable value → section gap, mid-low → card padding,
 *      mid-low → element gap.
 *   3. Density bucket follows base unit (4 → compact, 8 → comfortable, ≥10 →
 *      spacious). User's `density` preference (if any) wins via overrides. */
function deriveFunctionalSpacing(
  md: string,
  values: number[],
  scale: SpacingItem[],
): FunctionalSpacing {
  const sorted = [...values].sort((a, b) => a - b);
  const findPurpose = (substr: RegExp): number | undefined =>
    scale.find((s) => s.purpose && substr.test(s.purpose))?.value;

  // Explicit-label hits
  const baseLabel    = findPurpose(/^base unit$|^step$|baseline/i);
  const sectionLabel = findPurpose(/section\s*gap|section\s*padding|gutter/i);
  const cardLabel    = findPurpose(/card\s*padding|post\s*entry|content\s*padding|panel\s*padding/i);
  const elementLabel = findPurpose(/element\s*gap|item\s*gap|component\s*gap|inline\s*gap|forum.*sections.*gap/i);

  // Pull "Base unit: 8px" if §5 spacing prose mentions it directly. The
  // existing extractSpacingScale() already captures it as a labelled value;
  // we just give "Base unit" tighter precedence here than the heuristic min.
  const baseProse = md.match(/\*{0,2}Base unit\*{0,2}\s*[:：]\s*`?(\d+)\s*(?:px|dp)/i);
  const baseFromProse = baseProse ? parseInt(baseProse[1], 10) : undefined;

  const minPos = sorted.find((v) => v >= 4) ?? sorted[0] ?? 8;
  const baseUnit = baseLabel ?? baseFromProse ?? minPos;
  const big      = sortedAtPercentile(sorted, 0.85);
  const sectionGap   = sectionLabel ?? Math.max(big, 16);
  const midLow       = sortedAtPercentile(sorted, 0.45);
  const cardPadding  = cardLabel ?? clampClosest(midLow, [12, 16, 20, 24]);
  const elementGap   = elementLabel ?? Math.max(baseUnit, clampClosest(sortedAtPercentile(sorted, 0.30), [8, 12]));

  // Density: prose-stated label wins over heuristic. DCard says
  // "**medium-density**" explicitly; we'd rather repeat that verbatim than
  // bucket it from baseUnit alone (DCard uses 20px CSS-var spacing without
  // exposing a smaller "base unit", which would otherwise read "spacious").
  const proseDensity = (() => {
    const m = md.match(/\b(low|medium|high|compact|comfortable|spacious|dense)[- ]?density\b/i);
    if (!m) return null;
    const word = m[1].toLowerCase();
    if (word === "low" || word === "spacious") return "spacious";
    if (word === "high" || word === "dense" || word === "compact") return "compact";
    return "comfortable";
  })();
  const density: FunctionalSpacing["density"] = proseDensity ??
    (baseUnit <= 4 ? "compact" : baseUnit >= 16 ? "spacious" : "comfortable");

  return { density, baseUnit, sectionGap, cardPadding, elementGap };
}

function sortedAtPercentile(sorted: number[], p: number): number {
  if (sorted.length === 0) return 0;
  const idx = Math.min(sorted.length - 1, Math.max(0, Math.floor(p * (sorted.length - 1))));
  return sorted[idx];
}

function clampClosest(n: number, candidates: number[]): number {
  if (n === 0) return candidates[0];
  return candidates.reduce((a, b) => (Math.abs(b - n) < Math.abs(a - n) ? b : a));
}

/** Extract border tokens — width × color × style — from DESIGN.md.
 *  Recognised patterns:
 *    - "Border default (1px solid #e0e0e0): cards, dividers"
 *    - "Card border: `1px solid #e0e0e0`"
 *    - "Focus ring: `2px solid #428bff`"
 *  Falls back empty when prose lacks explicit border statements. */
function extractBorders(md: string): BorderToken[] {
  const out: BorderToken[] = [];
  const seen = new Set<string>();
  const push = (tok: BorderToken) => {
    const k = `${tok.element}|${tok.width}|${tok.color ?? ""}`;
    if (seen.has(k)) return;
    seen.add(k);
    out.push(tok);
  };

  // Pattern 1: "**Card border**: `1px solid #e0e0e0` — used on…"
  for (const m of md.matchAll(/\*{0,2}([A-Za-z][A-Za-z0-9 \/\-]{2,30}?)\s*border\*{0,2}\s*[:：]\s*`?(\d+(?:\.\d+)?px)\s+(solid|dashed|dotted|double)\s+(#[0-9a-fA-F]{3,8})/gi)) {
    push({
      element: titleCase(m[1].trim()),
      width: m[2],
      style: m[3].toLowerCase(),
      color: m[4].toLowerCase(),
    });
  }

  // Pattern 2: "Border <variant>: `1px solid #...`" / "Outline: `2px solid …`"
  for (const m of md.matchAll(/\*{0,2}(Border|Outline|Stroke|Divider|Focus(?:\s+ring)?)\s+([A-Za-z][\w\s/-]{0,24}?)\*{0,2}\s*[:：]\s*`?(\d+(?:\.\d+)?px)\s+(solid|dashed|dotted|double)\s+(#[0-9a-fA-F]{3,8})/gi)) {
    push({
      element: `${titleCase(m[1])} ${titleCase(m[2].trim())}`.trim(),
      width: m[3],
      style: m[4].toLowerCase(),
      color: m[5].toLowerCase(),
    });
  }

  // Pattern 3: Compact form "1px solid #color" preceded by element name in
  // a bulleted line, e.g. "- Card: `1px solid #e0e0e0`"
  for (const m of md.matchAll(/^[-*]\s+\*{0,2}([A-Za-z][\w\s/-]{1,28}?)\*{0,2}\s*[:：]\s*`(\d+(?:\.\d+)?px)\s+(solid|dashed|dotted|double)\s+(#[0-9a-fA-F]{3,8})`/gim)) {
    const el = m[1].trim();
    if (!/border|outline|stroke|divider|focus|ring/i.test(el)) continue;
    push({
      element: titleCase(el),
      width: m[2],
      style: m[3].toLowerCase(),
      color: m[4].toLowerCase(),
    });
  }

  return out.slice(0, 8);
}

function titleCase(s: string): string {
  return s.replace(/\b([a-z])/g, (m) => m.toUpperCase()).replace(/\s+/g, " ");
}

/* ─────────── §4 Component Stylings parser ─────────── */

/** Map a `### {heading}` to one of our canonical ComponentType buckets, or
 *  `null` if the heading is descriptive prose (Navigation, Image Treatment,
 *  Animation, etc.) we don't extract. See spec/components-schema.md for the
 *  full vocabulary. */
function classifyComponentHeading(heading: string): ComponentType | null {
  const h = heading.toLowerCase().trim();
  // Order matters: more-specific synonyms first. All single-word alternatives
  // get a `s?` so `Input` and `Inputs` both match — `\bword\b` won't match a
  // plural otherwise (the `s` blocks the trailing word boundary).
  if (/\b(buttons?|ctas?)\b/.test(h)) return "button";
  if (/\b(inputs?|forms?|fields?|textfields?|inputs? & forms?|forms? & inputs?)\b/.test(h)) return "input";
  if (/\b(cards?|containers?|surfaces?|panels?)\b/.test(h)) return "card";
  if (/\b(badges?|tags?|chips?|pills?)\b/.test(h)) return "badge";
  if (/\btabs?\b/.test(h)) return "tab";
  if (/\b(toggles?|switches?)\b/.test(h)) return "toggle";
  if (/\b(toasts?|snackbars?)\b/.test(h)) return "toast";
  if (/\b(dialogs?|modals?|bottom sheets?|sheets?)\b/.test(h)) return "dialog";
  if (/\b(list items?|list-items?|row items?|friend lists?)\b/.test(h)) return "listItem";
  if (/\bavatars?\b/.test(h)) return "avatar";
  return null;
}

const FIELD_ALIASES: Record<string, keyof ComponentVariant | "_extras"> = {
  // bg
  background: "bg", bg: "bg", fill: "bg",
  // fg
  text: "fg", color: "fg", foreground: "fg",
  // border
  border: "border", outline: "border", stroke: "border",
  // radius
  radius: "radius", "border-radius": "radius", "border radius": "radius",
  // padding
  padding: "padding",
  // font
  font: "font", typography: "font", type: "font",
  // states
  hover: "hover",
  focus: "focus",
  active: "active", pressed: "active",
  disabled: "disabled",
  shadow: "shadow",
  // use
  use: "use", usage: "use", when: "use",
};

function parseVariantField(line: string): { key: keyof ComponentVariant | null; rawKey: string; value: string } | null {
  const m = line.match(/^[-*]\s+\*{0,2}([A-Za-z][\w\s/-]{0,28}?)\*{0,2}\s*[:：]\s*(.+?)\s*$/);
  if (!m) return null;
  const rawKey = m[1].trim();
  const value = m[2].trim();
  const lookup = FIELD_ALIASES[rawKey.toLowerCase()];
  if (!lookup || lookup === "_extras") return { key: null, rawKey, value };
  return { key: lookup, rawKey, value };
}

/** The set of §4 field keys the parser recognizes (e.g. "background", "text",
 *  "border"). Exposed so the catalog-integrity lint can detect the
 *  slash-multi-field anti-pattern (`- Background: #x / Text: #y`) — where a
 *  second known field hides inside the first field's value and is silently
 *  swallowed (the KRDS 35/36-variants-lost bug). The lint flags any field
 *  bullet whose value contains ` / <knownField>:`. */
export const KNOWN_FIELD_KEYS: readonly string[] = Object.keys(FIELD_ALIASES);

/** The 10 component types the preview can render. Structured `tokens.components`
 *  entries whose `type` falls outside this set are rendered as a generic card. */
const RENDER_TYPES: readonly ComponentType[] = [
  "button", "input", "card", "badge", "tab", "toggle", "toast", "dialog", "listItem", "avatar",
];
/** Structured-component field → ComponentVariant key. Unmapped keys go to extras. */
const TOKEN_FIELD_MAP: Record<string, keyof ComponentVariant> = {
  bg: "bg", background: "bg", fg: "fg", text: "fg", color: "fg",
  border: "border", radius: "radius", padding: "padding", height: "height",
  font: "font", shadow: "shadow", hover: "hover", focus: "focus",
  active: "active", disabled: "disabled", use: "use",
};

/** Split a flow-mapping body on top-level commas (ignoring commas inside quotes
 *  or nested brackets). `a: 1, b: "x, y", c: [1,2]` → ["a: 1", ' b: "x, y"', " c: [1,2]"]. */
function splitTopLevel(s: string): string[] {
  const out: string[] = [];
  let depth = 0, quote = "", cur = "";
  for (const ch of s) {
    if (quote) { cur += ch; if (ch === quote) quote = ""; continue; }
    if (ch === '"' || ch === "'") { quote = ch; cur += ch; continue; }
    if (ch === "{" || ch === "[") depth++;
    else if (ch === "}" || ch === "]") depth--;
    else if (ch === "," && depth === 0) { out.push(cur); cur = ""; continue; }
    cur += ch;
  }
  if (cur.trim()) out.push(cur);
  return out;
}

function parseFlowObject(body: string): Record<string, string> {
  const obj: Record<string, string> = {};
  for (const pair of splitTopLevel(body)) {
    const i = pair.indexOf(":");
    if (i === -1) continue;
    const k = pair.slice(0, i).trim();
    const v = pair.slice(i + 1).trim().replace(/^["']|["']$/g, "");
    if (k) obj[k] = v;
  }
  return obj;
}

/** Build ComponentBlocks from a STRUCTURED `tokens.components` frontmatter block
 *  (getdesign-aligned: components as first-class structured tokens). Preferred
 *  over prose §4 parsing because (a) it carries an explicit render `type` per
 *  component, so group headings like "Actions"/"Overlays" — which don't classify
 *  to a render type — no longer drop components, and (b) it's immune to whether
 *  the prose section lives in §4 or §8. Hand-parses the flow-style block (one
 *  `name: { ... }` per line) to avoid bundling a YAML parser into the client.
 *  Returns null when the ref has no structured component tokens → callers fall
 *  back to extractComponentSpecs(md). */
export function componentsFromTokens(md: string): ComponentBlock[] | null {
  if (!md.startsWith("---")) return null;
  const fmEnd = md.indexOf("\n---", 4);
  if (fmEnd === -1) return null;
  const lines = md.slice(4, fmEnd).split("\n");
  // Locate `components:` inside the tokens block + capture its indent.
  let ci = -1, cIndent = 0;
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^(\s*)components:\s*$/);
    if (m) { ci = i; cIndent = m[1].length; break; }
  }
  if (ci === -1) return null;
  const entries: { name: string; obj: Record<string, string> }[] = [];
  let sawObject = false;
  for (let i = ci + 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;
    const indent = (line.match(/^(\s*)/)?.[1] ?? "").length;
    if (indent <= cIndent) break; // dedent → end of the components block
    const m = line.match(/^\s*([\w.-]+):\s*(.*)$/);
    if (!m) continue;
    const name = m[1].trim();
    const val = m[2].trim();
    const om = val.match(/^\{(.*)\}$/);
    if (om) { sawObject = true; entries.push({ name, obj: parseFlowObject(om[1]) }); }
    else entries.push({ name, obj: { use: val.replace(/^["']|["']$/g, "") } });
  }
  if (!sawObject || entries.length === 0) return null; // flat-string block → use prose

  const byType = new Map<ComponentType, ComponentVariant[]>();
  for (const { name, obj } of entries) {
    let type = (obj.type as ComponentType) || classifyComponentHeading(name) || "card";
    if (!RENDER_TYPES.includes(type)) type = "card";
    const variant: ComponentVariant = { name, extras: {} };
    for (const [k, v] of Object.entries(obj)) {
      if (k === "type" || k === "group" || !v) continue;
      const key = TOKEN_FIELD_MAP[k.toLowerCase()];
      if (key) (variant as unknown as Record<string, string>)[key] = v;
      else variant.extras[k] = v;
    }
    if (!byType.has(type)) byType.set(type, []);
    byType.get(type)!.push(variant);
  }
  return [...byType.entries()].map(([type, variants]) => ({ type, heading: "", variants }));
}

/** Parse §4 into a list of ComponentBlock. Rules (see spec/components-schema.md):
 *  - `## 4. Component Stylings` opens the section.
 *  - Each `### Heading` starts a subsection. We map heading → ComponentType.
 *  - Inside each subsection, `**Variant Name**` lines start a variant block.
 *  - Subsequent `- Field: value` lines populate that variant.
 *  - Trailing prose paragraph (no `**` or `-` prefix) is captured as `notes`. */
export function extractComponentSpecs(md: string): ComponentBlock[] {
  const sec4 = md.match(/## 4\. Component[\s\S]*?(?=## 5\.)/i)?.[0] ?? "";
  if (!sec4) return [];
  const blocks: ComponentBlock[] = [];

  // Split into ### subsections (excluding the leading h2 itself).
  const subsections = [...sec4.matchAll(/###\s+([^\n]+)\n([\s\S]*?)(?=\n###|\n##|$)/g)];
  for (const sub of subsections) {
    const heading = sub[1].trim();
    const body = sub[2];
    const type = classifyComponentHeading(heading);
    if (!type) continue;

    const variants: ComponentVariant[] = [];
    let current: ComponentVariant | null = null;
    let trailingNotes = "";

    for (const line of body.split("\n")) {
      // Variant header: a standalone bolded line `**Name**` (optionally with
      // bracketed qualifier "**Primary (Fill)**"). Tolerates leading whitespace.
      const variantMatch = line.match(/^\s*\*\*([^*][^*]*?)\*\*\s*$/);
      if (variantMatch) {
        if (current) variants.push(current);
        current = { name: variantMatch[1].trim(), extras: {} };
        continue;
      }
      // Field bullet under the current variant
      if (current) {
        const field = parseVariantField(line);
        if (field) {
          if (field.key === null) {
            current.extras[field.rawKey] = field.value;
          } else {
            (current as unknown as Record<string, string>)[field.key] = field.value;
          }
          continue;
        }
      }
      // Otherwise: trailing prose / note. Accumulate (skipping blank/heading
      // lines and bullets that didn't match a variant or field — those are
      // legacy free-list bullets we tolerate but don't parse).
      const trimmed = line.trim();
      if (!trimmed) continue;
      if (trimmed.startsWith("**") || trimmed.startsWith("-") || trimmed.startsWith("*")) continue;
      if (current) continue; // mid-variant prose ignored — keep it focused
      trailingNotes += (trailingNotes ? "\n" : "") + trimmed;
    }
    if (current) variants.push(current);

    if (variants.length === 0) continue;
    blocks.push({ type, heading, variants, notes: trailingNotes || undefined });
  }

  return blocks;
}

/** Parse Do/Don't guidelines from DESIGN.md. Recognises THREE shapes:
 *    A. `### Do` / `### Don't` headers with bulleted bodies (apple, airbnb).
 *    B. `### Do's and Don'ts` combined block split on inline DO / DONT markers.
 *    C. Inline `- DO ...` / `- DON'T ...` bullets without a separate header.
 *       (DCard, Cursor, and a long tail of refs use this — we scan anywhere
 *       in the doc since they sometimes live under §10 Voice.) */
function extractGuidelines(md: string): Guideline[] {
  const out: Guideline[] = [];
  const blocks: { type: "do" | "dont"; body: string }[] = [];

  // Shape A & B
  for (const m of md.matchAll(/###\s+(Do(?:'s)?|Don['']?t(?:'s)?|Do['']?s and Don['']?ts)\s*\n([\s\S]*?)(?=\n###|\n##|$)/gi)) {
    const head = m[1].toLowerCase();
    const body = m[2];
    if (head.startsWith("do") && !head.includes("don")) blocks.push({ type: "do", body });
    else if (head.startsWith("don")) blocks.push({ type: "dont", body });
    else {
      let cur: "do" | "dont" = "do";
      for (const line of body.split("\n")) {
        if (/\*\*DO\*\*|\bDO\b\s/i.test(line) && !/\*\*DON.?T\*\*/i.test(line)) cur = "do";
        if (/\*\*DON.?T\*\*|\bDON.?T\b\s|\bAvoid\b/i.test(line)) cur = "dont";
        const text = parseGuidelineLine(line);
        if (text) out.push({ type: cur, text });
      }
    }
  }
  for (const b of blocks) {
    for (const line of b.body.split("\n")) {
      const text = parseGuidelineLine(line);
      if (text) out.push({ type: b.type, text });
    }
  }

  // Shape C: standalone `- **DO** ...` / `- **DON'T** ...` bullets anywhere
  for (const m of md.matchAll(/^[-*]\s+\*\*(DO|DON['']?T)\*\*\s*[:：]?\s*([^\n]+)/gim)) {
    const type = /^DO$/i.test(m[1]) ? "do" : "dont";
    let text = m[2].replace(/\*\*/g, "").trim();
    if (text.length < 8 || text.length > 240) continue;
    text = text.replace(/^use\s+/i, "Use ").replace(/^avoid\s+/i, "Avoid ");
    out.push({ type, text });
  }

  // De-dup by lowercased text
  const seen = new Set<string>();
  return out.filter((g) => {
    const k = `${g.type}|${g.text.toLowerCase()}`;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  }).slice(0, 16);
}

function parseGuidelineLine(line: string): string | null {
  const m = line.match(/^\s*[-*]\s+(.+)$/);
  if (!m) return null;
  let text = m[1]
    .replace(/^\*{0,2}(?:DO|DON.?T)\*{0,2}\s*[:：—-]?\s*/i, "")
    .replace(/\*\*/g, "")
    .trim();
  // Strip leading "Don't" — we already group by type
  text = text.replace(/^Don['']?t\s+/i, "").replace(/^Avoid\s+/i, "Avoid ").trim();
  if (text.length < 8 || text.length > 240) return null;
  return text;
}

/* ─────────── Color heuristics ─────────── */

function hexToRgb(hex: string): [number, number, number] | null {
  const m = hex.replace("#", "").match(/^([0-9a-f]{6})$/i);
  if (!m) return null;
  const v = parseInt(m[1], 16);
  return [(v >> 16) & 0xff, (v >> 8) & 0xff, v & 0xff];
}

/** Convert hex → HSL, h in [0, 360), s/l in [0, 1]. */
function hexToHsl(hex: string): { h: number; s: number; l: number } | null {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  const [r, g, b] = rgb.map((c) => c / 255) as [number, number, number];
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)); break;
      case g: h = ((b - r) / d + 2); break;
      case b: h = ((r - g) / d + 4); break;
    }
    h *= 60;
  }
  return { h, s, l };
}

const HUE_NAMES: { range: [number, number]; name: string }[] = [
  { range: [0, 12], name: "Red" },
  { range: [12, 32], name: "Orange" },
  { range: [32, 52], name: "Amber" },
  { range: [52, 70], name: "Yellow" },
  { range: [70, 95], name: "Lime" },
  { range: [95, 145], name: "Green" },
  { range: [145, 170], name: "Mint" },
  { range: [170, 195], name: "Teal" },
  { range: [195, 215], name: "Cyan" },
  { range: [215, 245], name: "Blue" },
  { range: [245, 270], name: "Indigo" },
  { range: [270, 290], name: "Violet" },
  { range: [290, 320], name: "Purple" },
  { range: [320, 345], name: "Magenta" },
  { range: [345, 360], name: "Rose" },
];

function nameColor(hex: string): string {
  const hsl = hexToHsl(hex);
  if (!hsl) return hex.toUpperCase();
  const { h, s, l } = hsl;
  // Achromatic — name purely from lightness
  if (s < 0.08) {
    if (l < 0.06) return "Pitch Black";
    if (l < 0.18) return "Charcoal";
    if (l < 0.32) return "Graphite";
    if (l < 0.5)  return "Slate";
    if (l < 0.68) return "Ash";
    if (l < 0.84) return "Silver";
    if (l < 0.96) return "Mist";
    return "Porcelain";
  }
  const hue = HUE_NAMES.find((b) => h >= b.range[0] && h < b.range[1])?.name ?? "Hue";
  const tint =
    l < 0.18 ? "Deep" :
    l < 0.34 ? "Dark" :
    l < 0.48 ? "" :
    l < 0.62 ? "" :
    l < 0.76 ? "Light" :
    l < 0.88 ? "Pale" : "Mist";
  const sat = s < 0.30 ? "Muted" : s > 0.75 ? "Vivid" : "";
  return [tint, sat, hue].filter(Boolean).join(" ");
}

function categorizeColor(hex: string, isPrimary: boolean): ColorCategory {
  if (isPrimary) return "brand";
  const hsl = hexToHsl(hex);
  if (!hsl) return "accent";
  const { h, s, l } = hsl;
  // Pure neutral — low saturation OR extreme lightness
  if (s < 0.10) return "neutral";
  if (l < 0.05 || l > 0.97) return "neutral";
  // Saturated red/orange (warning/danger) or saturated green (success)
  const isRed = (h <= 18 || h >= 345) && s > 0.45;
  const isGreen = h >= 95 && h <= 155 && s > 0.40;
  if (isRed || isGreen) return "semantic";
  return "accent";
}

/** Parse §2 prose for `- **Name** (`#hex`): description` patterns. Returns a
 *  hex→{name, description} lookup table used to enrich heuristic naming. */
function extractColorMeta(md: string): Map<string, { name: string; description: string }> {
  const sec2 = md.match(/## 2\. Color[\s\S]*?(?=## 3\.)/i)?.[0] ?? "";
  const map = new Map<string, { name: string; description: string }>();
  // - **Name** (`#hex`): description...   OR   - **Name** (#hex): ...
  for (const m of sec2.matchAll(/^[-*]\s+\*\*([^*]+?)\*\*\s*\(\s*`?(#[0-9a-fA-F]{6})`?\s*\)\s*[:：]\s*([^\n]+)/gm)) {
    const name = m[1].trim();
    const hex = m[2].toLowerCase();
    let description = m[3].trim();
    // Trim leading css-token noise. The token can be followed by ANY of
    // `,` `.` `:` `;` ` --` ` —` before the human description starts —
    // DCard/Toss write "`blue500`. Primary interactive color", airbnb writes
    // "`--palette-bg-primary-core`, primary CTA". Both should drop the token.
    description = description
      .replace(/^`[^`]+`\s*[.,:;]\s*/, "")
      .replace(/^`[^`]+`\s*[—–-]+\s*/, "")
      .replace(/\.$/, "");
    if (description.length > 180) description = description.slice(0, 177) + "…";
    if (!map.has(hex)) map.set(hex, { name, description });
  }
  return map;
}

function extractColorRoles(palette: string[], primary: string, md: string): ColorRole[] {
  // No-fallback policy: only render swatches for hex values that actually appear
  // in §2 of DESIGN.md. Don't force-inject the API's fallback primary (#6366f1)
  // or any value not present in source. Empty Brand category → hidden by renderer.
  // (primary param still used to mark the brand swatch when it IS in palette.)
  const all = palette;
  const meta = extractColorMeta(md);
  const seen = new Set<string>();
  const roles: ColorRole[] = [];
  for (const raw of all) {
    const hex = raw.toLowerCase();
    if (seen.has(hex)) continue;
    seen.add(hex);
    if (!/^#[0-9a-f]{6}$/.test(hex)) continue;
    const isPrimary = hex === primary.toLowerCase();
    const category = categorizeColor(hex, isPrimary);
    const m = meta.get(hex);
    roles.push({
      hex,
      name: m?.name ?? nameColor(hex),
      category,
      description: m?.description ?? heuristicColorDescription(category, isPrimary),
    });
  }
  // Sort: brand → accent → semantic → neutral; within each, by lightness desc for accents/semantic,
  // by lightness asc for neutrals (dark → light), brand stays single.
  const order: Record<ColorCategory, number> = { brand: 0, accent: 1, semantic: 2, neutral: 3 };
  return roles.sort((a, b) => {
    if (order[a.category] !== order[b.category]) return order[a.category] - order[b.category];
    const la = hexToHsl(a.hex)?.l ?? 0;
    const lb = hexToHsl(b.hex)?.l ?? 0;
    return a.category === "neutral" ? la - lb : lb - la;
  });
}

function heuristicColorDescription(cat: ColorCategory, isPrimary: boolean): string {
  if (isPrimary) return "Primary brand color — used for emphasis, calls to action, and focal moments.";
  if (cat === "accent") return "Accent for highlights, secondary surfaces, and decorative emphasis.";
  if (cat === "semantic") return "Semantic indicator — status, success, warning, or alert states.";
  return "Neutral surface — backgrounds, borders, dividers, or text tiers.";
}

function extractShadows(md: string): { name: string; value: string }[] {
  const sec6 = md.match(/## 6\. Depth[\s\S]*?(?=## 7\.)/i)?.[0] ?? "";
  // Try to find shadow recipes — look for "0 Xpx Ypx ..." patterns
  const lines = sec6.split("\n");
  const shadows: { name: string; value: string }[] = [];
  for (const line of lines) {
    const m = line.match(/`?(0(?:px|\s)\s*[\w(),. \-/]+rgba?\([^)]+\)[^`\n]*)/i);
    if (m && shadows.length < 5) {
      // Try to extract a name from the line (e.g., "Card lift —" or "Modal:")
      const nameMatch = line.match(/^\s*[-•*]?\s*\*?\*?([A-Z][\w\s/-]+?)\*?\*?\s*[—:–]/);
      const name = nameMatch ? nameMatch[1].trim() : `Shadow ${shadows.length + 1}`;
      shadows.push({ name, value: m[1].trim() });
    }
  }
  return shadows.length > 0 ? shadows : DEFAULT_SHADOWS;
}

/**
 * Build the canonical 7-tier typography hierarchy.
 * Maps the brand's actual extracted sizes onto a normalized scale:
 *   Display XXL · Heading XL · Heading L · Body M · Small S · Caption XS · Smallest XXS
 * Heading tiers use the brand's headingWeight; body and below use 400 unless detected.
 * Line-height defaults to 1.25 for headlines, 1.5 for body+ (CJK-friendly).
 */
function buildHierarchy(sizes: number[], headingWeight: string, hasCJK: boolean): TypographyTier[] {
  const sorted = [...sizes].sort((a, b) => b - a);
  const hWeight = parseInt(headingWeight, 10) || 700;
  const bodyWeight = 400;

  // Pick concrete sizes per tier — fall back to web-typography defaults when extracted scale is sparse.
  const pick = (idx: number, fallback: number) => sorted[idx] ?? fallback;
  const display = Math.max(pick(0, 32), 28);
  const headingXL = Math.max(pick(1, 24), 20);
  const headingL = Math.max(pick(2, 19), 16);
  const body = sorted.find((s) => s >= 14 && s <= 18) ?? 16;
  const small = sorted.find((s) => s >= 12 && s <= 13) ?? 14;
  const caption = sorted.find((s) => s >= 10 && s <= 12) ?? 12;
  const smallest = sorted.find((s) => s >= 9 && s <= 10) ?? 10;

  // English-only samples — the hierarchy is rendered in system-ui purely to show
  // scale & weight ratios. The brand's own fonts get full treatment in the
  // cards below; mixing CJK in a system-ui preview just muddles the ratio comparison.
  void hasCJK;
  const sample = {
    display: "Design at scale",
    headingXL: "Section heading",
    headingL: "Subheading",
    body: "Body text. The quick brown fox jumps over the lazy dog. Designed for readable line-height in long-form content.",
    small: "Supporting text",
    caption: "Caption · timestamp · 2026",
    smallest: "BADGE / LABEL",
  };

  return [
    { role: "Display",   label: `Display XXL`,    sampleText: sample.display,   fontSize: display,   fontWeight: hWeight,    lineHeight: 1.25, letterSpacing: "-0.01em" },
    { role: "Heading 1", label: `Heading XL`,     sampleText: sample.headingXL, fontSize: headingXL, fontWeight: hWeight,    lineHeight: 1.25, letterSpacing: "0" },
    { role: "Heading 2", label: `Heading L`,      sampleText: sample.headingL,  fontSize: headingL,  fontWeight: hWeight,    lineHeight: 1.4,  letterSpacing: "0" },
    { role: "Body",      label: `Body M`,         sampleText: sample.body,      fontSize: body,      fontWeight: bodyWeight, lineHeight: 1.5,  letterSpacing: "0" },
    { role: "Small",     label: `Small S`,        sampleText: sample.small,     fontSize: small,     fontWeight: bodyWeight, lineHeight: 1.5,  letterSpacing: "0", muted: true },
    { role: "Caption",   label: `Caption XS`,     sampleText: sample.caption,   fontSize: caption,   fontWeight: bodyWeight, lineHeight: 1.5,  letterSpacing: "0", muted: true },
    { role: "Smallest",  label: `Smallest XXS`,   sampleText: sample.smallest,  fontSize: smallest,  fontWeight: 500,        lineHeight: 1.5,  letterSpacing: "0.06em", muted: true },
  ];
}

export function extractTokens(detail: {
  id: string;
  designMd: string;
  primary: string;
  background: string;
  foreground: string;
  fontFamily: string;
  mono?: string;
  headingWeight: string;
  radius: string;
  mood: string;
  accent?: string;
  border?: string;
}): ParsedTokens {
  const md = detail.designMd;
  const SPECIAL_NAMES: Record<string, string> = {
    krds: "KRDS", ibm: "IBM", bmw: "BMW", nvidia: "NVIDIA", ridi: "RIDI",
    qanda: "QANDA", kakaobank: "KakaoBank", spacex: "SpaceX", "x.ai": "xAI",
    "linear.app": "Linear", cal: "Cal.com", "mistral.ai": "Mistral AI",
    "opencode.ai": "OpenCode AI", "together.ai": "Together AI",
    posthog: "PostHog", supabase: "Supabase", voltagent: "VoltAgent",
    elevenlabs: "ElevenLabs", runwayml: "RunwayML", coinbase: "Coinbase",
    airbnb: "Airbnb", clickhouse: "ClickHouse", karrot: "Karrot",
    toss: "Toss", baemin: "Baemin", kakao: "Kakao", pinkoi: "Pinkoi",
    dcard: "Dcard", line: "LINE", mercari: "Mercari", freee: "freee",
    yeogiotte: "여기어때", musinsa: "Musinsa", kurly: "Kurly", ohouse: "Ohouse",
    naver: "Naver", yanolja: "Yanolja", coupang: "Coupang",
  };
  return {
    identity: {
      id: detail.id,
      name: SPECIAL_NAMES[detail.id] ?? detail.id.replace(".app", "").replace(/^./, (c) => c.toUpperCase()),
      primary: detail.primary,
      background: detail.background,
      foreground: detail.foreground,
      accent: detail.accent,
      border: detail.border,
      mood: detail.mood,
    } as ParsedTokens["identity"],
    typography: (() => {
      const sizes = extractFontSizes(md);
      const hasCJK = /Hiragino|Meiryo|PingFang|Noto Sans (?:JP|KR|TC|SC)|MS Gothic|Heiti|微軟|黑體|ヒラギノ/i.test(detail.fontFamily) || /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/.test(md);
      const fonts = extractFontMentions(md);
      // If parser missed the API-provided primary font, prepend it
      if (detail.fontFamily) {
        const apiPrimary = detail.fontFamily.split(",")[0].replace(/['"]/g, "").trim();
        if (apiPrimary && !fonts.some((f) => f.raw.toLowerCase() === apiPrimary.toLowerCase())) {
          fonts.unshift({ raw: apiPrimary, role: "primary" });
        }
      }
      if (detail.mono && !fonts.some((f) => f.raw.toLowerCase() === detail.mono!.toLowerCase())) {
        fonts.push({ raw: detail.mono, role: "mono" });
      }
      return {
        family: detail.fontFamily,
        mono: detail.mono,
        headingWeight: detail.headingWeight,
        weights: extractWeights(md),
        sizes,
        hierarchy: buildHierarchy(sizes, detail.headingWeight, hasCJK),
        fonts,
      };
    })(),
    radii: (() => {
      // Normalize: some refs express radius as a range ("4px-8px") rather
      // than a single CSS value. Strip anything after the first "-"/"–" so
      // the radii tokens always produce valid CSS. Sanitize huge values
      // (≥64px) to canonical pill so a stray "1280px" from upstream doesn't
      // leak into the preview as a giant button radius.
      const normalized = sanitizeRadiusString(detail.radius.replace(/[-–].*/, "").trim());
      return {
        button: normalized,                       // full — pill OK
        input: normalized,                        // matches button
        card: capRadius(normalized, 16),          // cap large surfaces
        dialog: capRadius(normalized, 16),
        badge: capRadius(normalized, 8),          // tighter for inline pills
      };
    })(),
    radiusScale: (() => {
      const parsed = extractRadiusScale(md);
      if (parsed.length >= 3) return parsed;
      // Mid-fallback: scan the whole DESIGN.md for "Default radius" and
      // per-element prose ("buttons … 8px") before falling back to the
      // single-value detail.radius synthesis. Often recovers ≥3 useful rows.
      const prose = extractRadiusFromProse(md);
      if (prose.length >= 3) return prose;
      // Last-ditch: synthesize 5 entries from the legacy single radius value.
      const normalized = sanitizeRadiusString(detail.radius.replace(/[-–].*/, "").trim());
      const seeded = [
        { element: "buttons", value: normalized },
        { element: "inputs",  value: normalized },
        { element: "cards",   value: capRadius(normalized, 16) },
        { element: "dialogs", value: capRadius(normalized, 16) },
        { element: "badges",  value: capRadius(normalized, 8) },
      ];
      // Merge any prose hits we found (e.g., a single "Default radius" line)
      // on top of the seed so the canonical value wins for duplicated keys.
      const map = new Map(seeded.map((r) => [r.element, r]));
      for (const r of prose) map.set(r.element, r);
      return [...map.values()];
    })(),
    palette: extractPalette(md),
    paletteRoles: (() => {
      const palette = extractPalette(md);
      return extractColorRoles(palette, detail.primary, md);
    })(),
    spacing: extractSpacing(md),
    spacingScale: (() => {
      const values = extractSpacing(md);
      return extractSpacingScale(md, values);
    })(),
    functionalSpacing: (() => {
      const values = extractSpacing(md);
      const scale = extractSpacingScale(md, values);
      return deriveFunctionalSpacing(md, values, scale);
    })(),
    borders: extractBorders(md),
    // Prefer structured `tokens.components` (getdesign-aligned, explicit per-
    // component type). Falls back to prose §4 parsing for un-migrated refs.
    components: componentsFromTokens(md) ?? extractComponentSpecs(md),
    shadows: extractShadows(md),
    guidelines: extractGuidelines(md),
  };
}
