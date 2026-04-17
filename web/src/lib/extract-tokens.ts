/**
 * Extract structured design tokens from a parsed RefDetail + raw DESIGN.md.
 *
 * Returns a normalized ParsedTokens object that the showcase ReferencePreview
 * component renders. Falls back to sensible defaults when DESIGN.md prose
 * doesn't expose explicit values.
 */

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

export interface ParsedTokens {
  identity: {
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
  };
  /** Per-component-type radius derived from the brand's full radius value.
   *  Buttons/inputs keep full radius (pill OK). Cards/dialogs cap at 16px.
   *  Badges cap at 8px. This is principled component-specific design,
   *  not a band-aid — every mature DS uses different radii per component class. */
  radii: {
    button: string;
    input: string;
    card: string;
    dialog: string;
    badge: string;
  };
  /** Hex colors discovered in §2 of DESIGN.md, deduped and sorted by usage frequency. */
  palette: string[];
  /** Spacing scale values found in DESIGN.md (px or rem). Falls back to 4dp scale. */
  spacing: number[];
  /** Shadow recipes found in §6. Falls back to 3-tier defaults. */
  shadows: { name: string; value: string }[];
}

const DEFAULT_SPACING = [4, 8, 12, 16, 24, 32, 48, 64];
const DEFAULT_SHADOWS = [
  { name: "Subtle", value: "0 1px 2px 0 rgba(0,0,0,0.05)" },
  { name: "Default", value: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)" },
  { name: "Elevated", value: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)" },
  { name: "Floating", value: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)" },
  { name: "Modal", value: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)" },
];

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
}

export function applyOverrides(tokens: ParsedTokens, overrides?: PreviewOverrides): ParsedTokens {
  if (!overrides) return tokens;
  const o = overrides;
  const radius = o.borderRadius ?? tokens.radii.button;
  const headingWeight = o.headingWeight ?? tokens.typography.headingWeight;
  const family = o.fontFamily ?? tokens.typography.family;

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

  return {
    ...tokens,
    identity: {
      ...tokens.identity,
      primary: o.primaryColor ?? tokens.identity.primary,
    },
    typography: {
      ...tokens.typography,
      family,
      headingWeight,
      hierarchy,
    },
    radii: {
      button: radius,
      input: radius,
      card: capRadius(radius, 16),
      dialog: capRadius(radius, 16),
      badge: capRadius(radius, 8),
    },
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

function extractSpacing(md: string): number[] {
  // Look for explicit spacing tokens like "4dp", "8px", "16px" in §5
  const sec5 = md.match(/## 5\. Layout[\s\S]*?(?=## 6\.)/i)?.[0] ?? "";
  const matches = [...sec5.matchAll(/\b(\d{1,3})(?:px|dp)\b/g)];
  const values = new Set<number>();
  for (const m of matches) {
    const n = parseInt(m[1], 10);
    if (n >= 2 && n <= 128) values.add(n);
  }
  if (values.size < 3) return DEFAULT_SPACING;
  return [...values].sort((a, b) => a - b).slice(0, 8);
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

  // Mixed CJK/EN samples for Asian brands; English-only otherwise.
  const sample = hasCJK
    ? {
        display: "デザイン — Design at scale",
        headingXL: "セクション見出し — Section",
        headingL: "サブ見出し — Subheading",
        body: "本文テキスト — Body text. Designed for readable line-height across CJK and Latin scripts together.",
        small: "補足テキスト — Supporting text",
        caption: "キャプション — Caption · 2026",
        smallest: "バッジ — BADGE",
      }
    : {
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
  return {
    identity: {
      name: detail.id.replace(".app", "").replace(/^./, (c) => c.toUpperCase()),
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
      return {
        family: detail.fontFamily,
        mono: detail.mono,
        headingWeight: detail.headingWeight,
        weights: extractWeights(md),
        sizes,
        hierarchy: buildHierarchy(sizes, detail.headingWeight, hasCJK),
      };
    })(),
    radii: {
      button: detail.radius,                      // full — pill OK
      input: detail.radius,                       // matches button
      card: capRadius(detail.radius, 16),         // cap large surfaces
      dialog: capRadius(detail.radius, 16),
      badge: capRadius(detail.radius, 8),         // tighter for inline pills
    },
    palette: extractPalette(md),
    spacing: extractSpacing(md),
    shadows: extractShadows(md),
  };
}
