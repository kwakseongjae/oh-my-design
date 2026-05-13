"use client";

/**
 * Refero-style design system showcase — renders 5 sections from a parsed
 * DESIGN.md token set. Same regulation/spec across all 78 references.
 *
 * Sections: Hero, Color Palette (grouped by role), Typography (Type Scale +
 * Fonts), Spacing & Shape (Spacing / Radius / Elevation), Guidelines (Do/Don't).
 *
 * Two modes:
 *   1. Showcase (default) — passed `tokens` directly, used by /reference/[id]
 *   2. Builder mode — passed `tokens` + `overrides`, used by builder step 3.
 *      `overrides` are merged into the tokens before rendering so the live
 *      preview reflects user customization (font, primary color, radius…).
 */

import { useState, useCallback } from "react";
import { Check, Copy, ExternalLink } from "lucide-react";
import { getLogoUrl, getLogoFallbackUrl } from "@/lib/logos";
import { isLight } from "@/lib/core/color";
import {
  applyOverrides,
  type ParsedTokens,
  type PreviewOverrides,
  type ColorRole,
  type ColorCategory,
  type RadiusScaleItem,
  type BorderToken,
  type Guideline,
  type ComponentBlock,
  type ComponentVariant,
  type ComponentType,
} from "@/lib/extract-tokens";
import { lookupFont } from "@/lib/font-registry";
import { FontCard } from "./font-card";

/* ─────────── Shared utils ─────────── */

function contrastFg(hex: string): string {
  const m = hex.replace("#", "").match(/.{2}/g);
  if (!m) return "#ffffff";
  const [r, g, b] = m.map((x) => parseInt(x, 16));
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.6 ? "#0a0a0a" : "#ffffff";
}

function stripMd(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^[-*+]\s+/gm, "")
    .replace(/^>\s*/gm, "")
    .trim();
}

/** Map our 7-tier role to a refero-style token label. Falls back to the
 *  literal `Npx` slug when the size doesn't fit a canonical bucket so the
 *  table reads truthfully ("64px") instead of pretending it's "heading-xl". */
function roleToTokenLabel(role: string, sizePx: number): string {
  switch (role) {
    case "Display":   return "display";
    case "Heading 1": return sizePx >= 36 ? "heading-xl" : `${sizePx}px`;
    case "Heading 2": return sizePx >= 22 ? "heading-lg" : `${sizePx}px`;
    case "Body":      return "body";
    case "Small":     return "small";
    case "Caption":   return "caption";
    case "Smallest":  return "label";
    default:          return `${sizePx}px`;
  }
}

function useCopy() {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = useCallback((text: string, key: string) => {
    void navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      window.setTimeout(() => setCopied((k) => (k === key ? null : k)), 1400);
    });
  }, []);
  return { copied, copy };
}

/* ─────────── Section frame ─────────── */
function Section({ title, kicker, children }: { title: string; kicker?: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border/40 py-12">
      <div className="mx-auto max-w-5xl px-6">
        {kicker && (
          <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">
            {kicker}
          </div>
        )}
        <h2 className="font-heading text-xl font-semibold tracking-tight mb-8">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function SubLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground mb-3">
      {children}
    </p>
  );
}

/* ─────────── Hero ─────────── */
function HeroSection({ tokens, homepageUrl }: { tokens: ParsedTokens; homepageUrl?: string }) {
  const { identity, typography } = tokens;
  const displayUrl = homepageUrl
    ? homepageUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : null;
  const mood = identity.mood ? stripMd(identity.mood) : "";
  const logoColor = identity.background && isLight(identity.background) ? "000000" : "ffffff";
  const logoUrl = identity.id ? getLogoUrl(identity.id, logoColor) : null;
  const fallbackLogoUrl = identity.id ? getLogoFallbackUrl(identity.id) : null;
  const [logoSrc, setLogoSrc] = useState<string | null>(logoUrl ?? fallbackLogoUrl);

  return (
    <div className="mx-auto max-w-5xl px-6 pt-10 pb-4">
      <header className="rounded-2xl ring-1 ring-border/40 px-6 py-10 sm:px-10 sm:py-14 overflow-hidden bg-transparent">
        <div className="text-[11px] font-semibold uppercase tracking-[0.15em] mb-3 text-muted-foreground">
          Design System
        </div>
        <div className="flex items-center gap-4">
          {logoSrc && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={logoSrc}
              alt={`${identity.name} logo`}
              className="h-12 w-12 shrink-0 object-contain"
              onError={() => {
                if (logoSrc !== fallbackLogoUrl && fallbackLogoUrl) setLogoSrc(fallbackLogoUrl);
                else setLogoSrc(null);
              }}
            />
          )}
          <h1
            className="text-5xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: typography.family }}
          >
            {identity.name}
          </h1>
        </div>
        {mood && (
          <p
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground"
            style={{ fontFamily: typography.family }}
          >
            {mood}
          </p>
        )}
        {displayUrl && (
          <a
            href={homepageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink className="h-3 w-3 shrink-0" />
            {displayUrl}
          </a>
        )}
      </header>
    </div>
  );
}

/* ─────────── Color Palette ─────────── */
const CATEGORY_LABEL: Record<ColorCategory, string> = {
  brand: "Brand",
  accent: "Accent",
  neutral: "Neutrals",
  semantic: "Semantic",
};
const CATEGORY_ORDER: ColorCategory[] = ["brand", "accent", "neutral", "semantic"];

function ColorSwatch({ role, copied, onCopy }: { role: ColorRole; copied: boolean; onCopy: () => void }) {
  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={`Copy ${role.hex}`}
      className="group flex flex-col text-left rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
    >
      <div
        className="relative h-16 w-full rounded-2xl ring-1 ring-border/30 overflow-hidden"
        style={{ background: role.hex }}
      >
        <span
          className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-medium opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
          style={{
            background: "rgba(0,0,0,0.45)",
            color: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(4px)",
          }}
        >
          {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
          {copied ? "Copied" : "Copy"}
        </span>
      </div>
      <div className="flex flex-col gap-0.5 pt-2.5 px-0.5">
        <span className="text-sm font-semibold text-foreground truncate">{role.name}</span>
        <span className="font-mono text-xs text-muted-foreground">{role.hex}</span>
        {role.description && (
          <span className="mt-1 text-xs leading-snug text-muted-foreground line-clamp-3">
            {role.description}
          </span>
        )}
      </div>
    </button>
  );
}

function ColorPaletteSection({ tokens }: { tokens: ParsedTokens }) {
  const { paletteRoles } = tokens;
  const { copied, copy } = useCopy();
  const grouped: Record<ColorCategory, ColorRole[]> = {
    brand: [], accent: [], neutral: [], semantic: [],
  };
  for (const r of paletteRoles) grouped[r.category].push(r);

  return (
    <Section title="Color Palette" kicker="01">
      <div className="space-y-8">
        {CATEGORY_ORDER.map((cat) => {
          const items = grouped[cat];
          if (items.length === 0) return null;
          return (
            <div key={cat} className="space-y-3">
              <SubLabel>{CATEGORY_LABEL[cat]}</SubLabel>
              <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4">
                {items.map((role) => (
                  <ColorSwatch
                    key={role.hex}
                    role={role}
                    copied={copied === role.hex}
                    onCopy={() => copy(role.hex, role.hex)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ─────────── Typography ─────────── */
function TypographySection({ tokens }: { tokens: ParsedTokens }) {
  const { typography } = tokens;
  const sysFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  const fonts = typography.fonts;

  return (
    <Section title="Typography" kicker="02">
      <div className="space-y-6">
        {/* Type Scale */}
        <div className="space-y-3">
          <div className="flex items-baseline justify-between gap-4 flex-wrap">
            <SubLabel>Type Scale</SubLabel>
            <p className="text-[11px] text-muted-foreground italic">
              Rendered in system-ui to clearly show scale & weight.
            </p>
          </div>
          <div className="rounded-2xl border border-border/50 overflow-hidden divide-y divide-border/40">
            {typography.hierarchy.map((tier) => {
              const tokenLabel = roleToTokenLabel(tier.role, tier.fontSize);
              const lhStr = Number.isInteger(tier.lineHeight) ? `${tier.lineHeight}` : tier.lineHeight.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
              return (
                <div key={tier.role} className="px-4 py-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {tokenLabel}
                    </span>
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {tier.fontSize}px · {tier.fontWeight} · {lhStr}
                    </span>
                  </div>
                  <div
                    className={`w-full truncate text-left ${tier.muted ? "text-muted-foreground" : "text-foreground"}`}
                    style={{
                      fontFamily: sysFamily,
                      fontSize: tier.fontSize,
                      fontWeight: tier.fontWeight,
                      lineHeight: tier.lineHeight,
                      letterSpacing: tier.letterSpacing,
                    }}
                  >
                    {tier.sampleText}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fonts */}
        <div className="space-y-3">
          <SubLabel>Fonts</SubLabel>
          {fonts.length === 0 ? (
            <div className="rounded-2xl border border-border/50 px-5 py-6 text-sm text-muted-foreground text-center">
              No fonts mentioned in §3 Typography of this DESIGN.md.
            </div>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {fonts.map((mention, i) => (
                <FontCard key={`${mention.raw}-${i}`} font={lookupFont(mention.raw)} role={mention.role} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

/* ─────────── Spacing & Shape ─────────── */
function SpacingShapeSection({ tokens }: { tokens: ParsedTokens }) {
  const { functionalSpacing, radiusScale, borders, shadows, identity } = tokens;
  // Refero shows 5 functional roles instead of a raw scale — clearer at a
  // glance, matches how designers actually reason about layout density.
  const fs = functionalSpacing;
  const spacingRows: { purpose: string; value: string; preview: number | null }[] = [
    { purpose: "Density",      value: fs.density,            preview: null },
    { purpose: "Base unit",    value: `${fs.baseUnit}px`,    preview: fs.baseUnit },
    { purpose: "Section gap",  value: `${fs.sectionGap}px`,  preview: fs.sectionGap },
    { purpose: "Card padding", value: `${fs.cardPadding}px`, preview: fs.cardPadding },
    { purpose: "Element gap",  value: `${fs.elementGap}px`,  preview: fs.elementGap },
  ];
  const maxSpacing = Math.max(fs.sectionGap, fs.cardPadding, 16);

  return (
    <Section title="Spacing & Shape" kicker="03">
      <div className="space-y-6">
        {/* Spacing */}
        <div className="space-y-3">
          <SubLabel>Spacing</SubLabel>
          <div className="overflow-hidden rounded-2xl border border-border/50">
            <table className="w-full table-fixed text-sm">
              <thead>
                <tr className="border-b border-border/50 bg-muted/30">
                  <th className="w-[40%] px-3 py-2 text-left font-medium text-muted-foreground">Purpose</th>
                  <th className="w-[120px] px-3 py-2 text-left font-medium text-muted-foreground">Value</th>
                  <th className="px-3 py-2 text-left font-medium text-muted-foreground">Preview</th>
                </tr>
              </thead>
              <tbody>
                {spacingRows.map((row, i) => (
                  <tr key={i} className="border-b border-border/30 last:border-b-0">
                    <td className="px-3 py-2.5 text-foreground">{row.purpose}</td>
                    <td className="px-3 py-2.5 whitespace-nowrap font-mono text-xs text-muted-foreground">
                      {row.value}
                    </td>
                    <td className="px-3 py-2.5">
                      {row.preview !== null ? (
                        <div
                          className="h-3 rounded-sm"
                          style={{
                            width: `${(row.preview / maxSpacing) * 100}%`,
                            minWidth: 4,
                            background: identity.primary + "55",
                          }}
                        />
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Border Radius */}
        <div className="space-y-3">
          <SubLabel>Border Radius</SubLabel>
          <div className="overflow-hidden rounded-2xl border border-border/50">
            <table className="w-full table-fixed text-sm">
              <thead>
                <tr className="border-b border-border/50 bg-muted/30">
                  <th className="w-[40%] px-3 py-2 text-left font-medium text-muted-foreground">Element</th>
                  <th className="w-[120px] px-3 py-2 text-left font-medium text-muted-foreground">Value</th>
                  <th className="px-3 py-2 text-left font-medium text-muted-foreground">Preview</th>
                </tr>
              </thead>
              <tbody>
                {radiusScale.map((r: RadiusScaleItem, i) => (
                  <tr key={i} className="border-b border-border/30 last:border-b-0">
                    <td className="px-3 py-2.5 text-foreground capitalize">
                      {r.element}
                      {r.label && <span className="ml-2 text-xs text-muted-foreground">{r.label}</span>}
                    </td>
                    <td className="px-3 py-2.5 whitespace-nowrap font-mono text-xs text-muted-foreground">
                      {r.value}
                    </td>
                    <td className="px-3 py-3">
                      <div
                        className="h-12 w-12 ring-1 ring-border/60"
                        style={{
                          background: identity.primary + "15",
                          borderRadius: r.value,
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Borders */}
        {borders.length > 0 && (
          <div className="space-y-3">
            <SubLabel>Borders</SubLabel>
            <div className="overflow-hidden rounded-2xl border border-border/50">
              <table className="w-full table-fixed text-sm">
                <thead>
                  <tr className="border-b border-border/50 bg-muted/30">
                    <th className="w-[40%] px-3 py-2 text-left font-medium text-muted-foreground">Element</th>
                    <th className="w-[180px] px-3 py-2 text-left font-medium text-muted-foreground">Value</th>
                    <th className="px-3 py-2 text-left font-medium text-muted-foreground">Preview</th>
                  </tr>
                </thead>
                <tbody>
                  {borders.map((b: BorderToken, i) => (
                    <tr key={i} className="border-b border-border/30 last:border-b-0">
                      <td className="px-3 py-2.5 text-foreground">{b.element}</td>
                      <td className="px-3 py-2.5 whitespace-nowrap font-mono text-xs text-muted-foreground">
                        {b.width}{b.style ? ` ${b.style}` : ""}{b.color ? ` ${b.color}` : ""}
                      </td>
                      <td className="px-3 py-3">
                        <div
                          className="h-12 w-12 rounded-md"
                          style={{
                            background: "transparent",
                            border: `${b.width} ${b.style ?? "solid"} ${b.color ?? identity.border ?? "#e5e7eb"}`,
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Elevation */}
        {shadows.length > 0 && (
          <div className="space-y-3">
            <SubLabel>Elevation</SubLabel>
            <div className="flex flex-wrap gap-4">
              {shadows.map((s, i) => (
                <div key={i} className="space-y-2">
                  <div
                    className="flex h-20 w-36 items-center justify-center rounded-xl bg-card text-foreground border border-border/40"
                    style={{ boxShadow: s.value }}
                  >
                    <span className="text-[11px] px-2 text-center">{s.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}

/* ─────────── Components (per-brand spec cards) ─────────── */

/** Convert a CSS-fragment string ("1px solid #e5e8eb", "transparent",
 *  "`#3182f6`") into a CSS value. Strips backticks AND any trailing
 *  parenthetical token-name annotation. Splits on " or "/"/" so prose like
 *  "`#e8f3ff` (blue50) or `#f2f4f6` (grey100)" produces the first option
 *  rather than an invalid multi-color string browsers silently ignore. */
function cssValue(raw?: string): string | undefined {
  if (!raw) return undefined;
  let v = raw.replace(/`/g, "").trim();
  v = v.split(/\s+(?:or|\/)\s+/i)[0].trim();
  v = v.replace(/\s*\([^)]*\)\s*$/, "").trim();
  if (!v || /^(none|n\/a|—|-)$/i.test(v)) return undefined;
  return v;
}

/** Pull the first hex/rgb/hsl/transparent token out of a freeform value.
 *  Prefer this over `cssValue` when a property strictly needs a color
 *  (background, color) — guarantees no compound CSS leaks through. */
function firstColor(raw?: string): string | undefined {
  if (!raw) return undefined;
  const m = raw.match(/(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\)|hsla?\([^)]+\)|transparent)/);
  if (m) return m[1];
  return cssValue(raw);
}

/** Normalize a radius value to CSS. Recognised: numeric+px, "pill"/"full pill"
 *  → 9999px, "circle" → 50%. When the prose uses a CSS `var(...)` that won't
 *  resolve in our preview (no design-token CSS layer is set on the page),
 *  we look at the original raw string for a "(typically Xpx)" hint or any
 *  embedded numeric+px and use that. Returns `undefined` only when the input
 *  is empty — never lets a `var()` placeholder through, which would silently
 *  read as 0 and produce sharp corners on a brand whose buttons aren't sharp. */
function normalizeRadius(raw?: string): string | undefined {
  if (!raw) return undefined;
  const v = cssValue(raw);
  if (!v) return undefined;
  if (/^(full\s+pill|pill)$/i.test(v)) return "9999px";
  if (/^circle$/i.test(v)) return "50%";
  // CSS var() that won't resolve standalone — extract a numeric hint from
  // the original raw prose ("var(--button-border-radius) (typically 8px-12px)"
  // → 8px). Prefer the smaller end of any range.
  if (/var\s*\(/i.test(v)) {
    const m = raw.match(/(\d+(?:\.\d+)?)\s*(?:px|dp)/i);
    if (m) return `${Math.round(parseFloat(m[1]))}px`;
    return undefined;
  }
  return v;
}

/** Radius fallback per component type — used when DESIGN.md prose for a
 *  variant doesn't specify Radius. Numbers chosen to read as "neutral and
 *  uncontroversial" rather than to imply a specific brand value. */
function defaultRadiusFor(type: ComponentType): string {
  switch (type) {
    case "badge":   return "9999px";
    case "avatar":  return "50%";
    case "toggle":  return "9999px";
    case "input":   return "8px";
    case "button":  return "8px";
    default:        return "12px";
  }
}

function defaultPaddingFor(type: ComponentType): string | undefined {
  switch (type) {
    case "button":   return "10px 20px";
    case "input":    return "10px 14px";
    case "card":     return "20px";
    case "badge":    return "3px 10px";
    case "toast":    return "10px 14px";
    case "dialog":   return "20px 24px";
    default:         return undefined;
  }
}

const COMPONENT_LABEL: Record<ComponentType, string> = {
  button: "Buttons",
  input: "Inputs",
  card: "Cards",
  badge: "Badges",
  tab: "Tabs",
  toggle: "Toggles",
  toast: "Toasts",
  dialog: "Dialogs",
  listItem: "List items",
  avatar: "Avatars",
};

/** Render a small live preview of a variant. The shape depends on component
 *  type — buttons get a clickable-looking <button>, inputs get an <input>,
 *  cards get an empty surface with a tiny label, etc. We deliberately apply
 *  *only* the spec values (no app-theme leak, no brand-foreground leak) so
 *  the preview is faithful to what the brand actually publishes. */
function VariantInstance({ type, variant, font }: { type: ComponentType; variant: ComponentVariant; font?: string }) {
  // Sane fallbacks: a missing radius shouldn't hide the whole instance — every
  // variant the brand actually published should render. We only fall through
  // to "spec only" when there's literally nothing renderable (no bg AND no
  // fg AND no border AND no padding) — empty bullet list, mistakenly named
  // variant, etc. Otherwise we use type-appropriate defaults for the
  // properties that weren't specified.
  const bg = firstColor(variant.bg) ?? (type === "button" || type === "badge" ? "#888" : "transparent");
  const fg = firstColor(variant.fg) ?? "currentColor";
  const border = cssValue(variant.border);
  const radius = normalizeRadius(variant.radius) ?? defaultRadiusFor(type);
  const padding = cssValue(variant.padding) ?? defaultPaddingFor(type);
  const shadow = cssValue(variant.shadow);

  const hasAnyVisible = !!variant.bg || !!variant.fg || !!variant.border || !!variant.padding || !!variant.radius;
  if (!hasAnyVisible) {
    return (
      <div className="text-[11px] text-muted-foreground italic px-3 py-2 rounded-md border border-dashed border-border/50">
        spec only
      </div>
    );
  }

  const baseStyle: React.CSSProperties = {
    background: bg,
    color: fg,
    border: border,
    borderRadius: radius,
    padding: padding,
    boxShadow: shadow,
    fontFamily: font,
    fontSize: 14,
    fontWeight: 500,
  };

  // Circular variants (radius=50% or "circle") MUST render as a square so
  // the radius reads as a circle rather than an elongated ellipse. The
  // variant name is too long to fit a 48×48 chip — show first letter plus
  // a play-style glyph for media controls. This is the difference between
  // a button shaped like Apple's media control vs a generic stretched pill.
  const isCircular = (() => {
    if (!radius) return false;
    if (radius === "50%") return true;
    if (/^circle$/i.test(radius)) return true;
    return false;
  })();
  if (isCircular && (type === "button" || type === "badge")) {
    const isMediaIsh = /media|play|pause|next|prev|carousel|control|nav/i.test(variant.name);
    return (
      <button
        type="button"
        title={variant.name}
        style={{
          ...baseStyle,
          width: 48,
          height: 48,
          padding: 0,
          borderRadius: "50%",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
          fontWeight: 600,
          whiteSpace: "nowrap",
        }}
      >
        {isMediaIsh ? "▶" : variant.name.replace(/[^A-Za-z가-힣ㄱ-ㅎ]/g, "").charAt(0).toUpperCase()}
      </button>
    );
  }

  // Canonical-schema variant names follow `<descriptor> (<usage notes> — "<example labels>")`.
  // The whole name is a HEADING (already shown in the right spec column); the actual
  // control's label is the first quoted example. Falling back to the whole name overflowed
  // 260px preview cells with long Korean descriptors and visually leaked into the spec col.
  const previewLabel = (() => {
    const quoted = variant.name.match(/["'“”‘’]([^"'“”‘’]{1,16})["'“”‘’]/);
    if (quoted) return quoted[1];
    const firstWord = variant.name.split(/[\s(—–-]/)[0];
    return firstWord && firstWord.length <= 18 ? firstWord : "Sample";
  })();

  switch (type) {
    case "button":
      return (
        <button
          type="button"
          title={variant.name}
          style={{ ...baseStyle, padding: padding ?? "10px 20px", whiteSpace: "nowrap", maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis" }}
        >
          {previewLabel}
        </button>
      );
    case "badge":
      return (
        <span
          title={variant.name}
          style={{
            ...baseStyle,
            display: "inline-block",
            padding: padding ?? "3px 10px",
            fontSize: 12,
            maxWidth: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {previewLabel}
        </span>
      );
    case "input":
      return (
        <input
          type="text"
          placeholder={previewLabel}
          style={{
            ...baseStyle,
            background: bg === "transparent" ? "transparent" : bg,
            padding: padding ?? "10px 14px",
            width: "100%",
            outline: "none",
            color: fg,
          }}
        />
      );
    case "card":
      return (
        <div
          style={{
            ...baseStyle,
            padding: padding ?? "20px",
            minHeight: 80,
            minWidth: 200,
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <span className="text-xs opacity-60">{variant.name}</span>
        </div>
      );
    case "tab": {
      // Parse "active" prose: TDS-style "`#fff` background + `#191f28` text + shadow"
      // OR simpler "`#3182f6` (icon and label)" form. We need to distinguish
      // active background from active text — picking the first color blindly
      // (the prior bug) collapsed Segmented's white surface onto the label.
      const activeStr = variant.active ?? "";
      const disabledStr = variant.disabled ?? "";
      const activeBg = activeStr.match(/(#[0-9a-f]{3,8}|rgba?\([^)]+\)|transparent)\s*(?:background|bg)/i)?.[1];
      const activeText =
        activeStr.match(/(#[0-9a-f]{3,8}|rgba?\([^)]+\))\s*(?:text|label)/i)?.[1] ??
        // No "text" qualifier — treat the whole active value as the label color.
        (activeBg ? undefined : firstColor(activeStr)) ?? fg;
      const disabledText =
        disabledStr.match(/(#[0-9a-f]{3,8}|rgba?\([^)]+\))\s*(?:label|text)/i)?.[1] ??
        firstColor(disabledStr) ??
        "rgba(0,0,0,0.4)";

      const wrapperHasBg = bg !== "transparent";
      const innerRadius =
        radius && /^\d/.test(radius) ? `${Math.max(parseFloat(radius) - 4, 4)}px` : radius;

      return (
        <div
          style={{
            display: "inline-flex",
            gap: wrapperHasBg ? 4 : 16,
            padding: wrapperHasBg ? 4 : 0,
            background: wrapperHasBg ? bg : "transparent",
            border,
            borderRadius: radius,
            fontFamily: font,
            width: "fit-content",
          }}
        >
          <span
            style={{
              background: activeBg ?? "transparent",
              color: activeText,
              padding: wrapperHasBg ? "6px 14px" : "8px 12px",
              borderRadius: activeBg ? innerRadius : 0,
              borderBottom: !activeBg && !wrapperHasBg ? `2px solid ${activeText}` : undefined,
              fontWeight: 600,
              fontSize: 13,
            }}
          >
            {variant.name}
          </span>
          <span
            style={{
              color: disabledText,
              padding: wrapperHasBg ? "6px 14px" : "8px 12px",
              fontSize: 13,
            }}
          >
            Other
          </span>
        </div>
      );
    }
    case "toast":
      return (
        <div
          style={{
            ...baseStyle,
            padding: padding ?? "10px 14px",
            minWidth: 220,
            fontSize: 13,
          }}
        >
          {variant.name}
        </div>
      );
    case "dialog":
      return (
        <div
          style={{
            ...baseStyle,
            padding: padding ?? "20px 24px",
            minWidth: 240,
            minHeight: 100,
          }}
        >
          <div style={{ fontWeight: 600, marginBottom: 6 }}>{variant.name}</div>
          <div style={{ fontSize: 12, opacity: 0.6 }}>Dialog content placeholder</div>
        </div>
      );
    case "toggle":
      return (
        <div
          style={{
            background: bg,
            border,
            borderRadius: radius ?? "9999px",
            width: 44,
            height: 24,
            padding: 2,
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          <span style={{ width: 18, height: 18, borderRadius: "50%", background: variant.extras["thumb"] ?? "#fff" }} />
        </div>
      );
    case "avatar":
      return (
        <div
          style={{
            background: bg,
            border,
            borderRadius: radius,
            width: 48,
            height: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: font,
            color: fg,
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          A
        </div>
      );
    case "listItem":
    default:
      return (
        <div className="text-xs text-muted-foreground">
          {variant.name}
        </div>
      );
  }
}

const SPEC_FIELD_ORDER: { key: keyof ComponentVariant; label: string }[] = [
  { key: "bg",       label: "Background" },
  { key: "fg",       label: "Text"       },
  { key: "border",   label: "Border"     },
  { key: "radius",   label: "Radius"     },
  { key: "padding",  label: "Padding"    },
  { key: "font",     label: "Font"       },
  { key: "shadow",   label: "Shadow"     },
  { key: "hover",    label: "Hover"      },
  { key: "focus",    label: "Focus"      },
  { key: "active",   label: "Active"     },
  { key: "disabled", label: "Disabled"   },
];

function VariantSpec({ variant }: { variant: ComponentVariant }) {
  const rows = SPEC_FIELD_ORDER
    .map(({ key, label }) => ({ label, value: variant[key] as string | undefined }))
    .filter((r) => r.value);
  const extras = Object.entries(variant.extras);
  return (
    <div className="text-[11px] leading-relaxed">
      <div className="grid grid-cols-[88px_1fr] gap-x-3 gap-y-0.5">
        {rows.map((r) => (
          <div key={r.label} className="contents">
            <span className="text-muted-foreground font-mono">{r.label}</span>
            <span className="font-mono text-foreground break-words">{r.value}</span>
          </div>
        ))}
        {extras.map(([k, v]) => (
          <div key={k} className="contents">
            <span className="text-muted-foreground font-mono capitalize">{k}</span>
            <span className="font-mono text-foreground break-words">{v}</span>
          </div>
        ))}
      </div>
      {variant.use && (
        <div className="mt-2 text-muted-foreground italic">Use: {variant.use}</div>
      )}
    </div>
  );
}

/** New per-brand Components section: renders the parsed §4 spec as a stack
 *  of subsections (one per ComponentBlock), each with one VariantCard per
 *  variant. When DESIGN.md hasn't been migrated to the canonical schema, the
 *  block list is empty and we fall back to a small "not yet migrated" notice
 *  so the gap is honest, not hidden behind generic dashboard mock. */
function ComponentsSection({ tokens, kicker }: { tokens: ParsedTokens; kicker: string }) {
  const { components, typography } = tokens;
  const font = typography.family;

  if (components.length === 0) {
    return (
      <Section title="Components" kicker={kicker}>
        <div className="rounded-2xl border border-dashed border-border/60 px-6 py-10 text-center text-sm text-muted-foreground">
          §4 Component Stylings hasn&apos;t been migrated to the canonical schema yet.
          See <code className="font-mono text-xs">spec/components-schema.md</code>.
        </div>
      </Section>
    );
  }

  return (
    <Section title="Components" kicker={kicker}>
      <div className="space-y-8">
        {components.map((block, i) => (
          <div key={i} className="space-y-3">
            <SubLabel>{block.heading || COMPONENT_LABEL[block.type]}</SubLabel>
            <div className="space-y-3">
              {block.variants.map((v, j) => (
                <VariantCard key={`${i}-${j}-${v.name}`} type={block.type} variant={v} font={font} />
              ))}
            </div>
            {block.notes && (
              <p className="text-xs text-muted-foreground italic">{block.notes}</p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

function VariantCard({ type, variant, font }: { type: ComponentType; variant: ComponentVariant; font?: string }) {
  return (
    <div className="grid gap-4 rounded-2xl border border-border/50 p-5 sm:grid-cols-[minmax(0,260px)_1fr] sm:items-start">
      <div className="flex min-w-0 items-start justify-start overflow-hidden">
        <VariantInstance type={type} variant={variant} font={font} />
      </div>
      <div className="min-w-0">
        <div className="mb-2 text-sm font-semibold text-foreground">{variant.name}</div>
        <VariantSpec variant={variant} />
      </div>
    </div>
  );
}


/* ─────────── Guidelines ─────────── */
function GuidelinesSection({ guidelines, kicker }: { guidelines: Guideline[]; kicker: string }) {
  if (guidelines.length === 0) return null;
  const dos = guidelines.filter((g) => g.type === "do");
  const donts = guidelines.filter((g) => g.type === "dont");

  return (
    <Section title="Guidelines" kicker={kicker}>
      <p className="sr-only">Do and Don&apos;t guidelines parsed from DESIGN.md.</p>
      <div className="space-y-6">
        {dos.length > 0 && (
          <div className="space-y-3">
            <SubLabel>Do</SubLabel>
            <ul className="space-y-2">
              {dos.map((g, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{stripMd(g.text)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {donts.length > 0 && (
          <div className="space-y-3">
            <SubLabel>Don&apos;t</SubLabel>
            <ul className="space-y-2">
              {donts.map((g, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>{stripMd(g.text)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  );
}

/* ─────────── Main ─────────── */
export function ReferencePreview({
  tokens: rawTokens,
  overrides,
  embedded = false,
  homepageUrl,
}: {
  tokens: ParsedTokens;
  overrides?: PreviewOverrides;
  embedded?: boolean;
  homepageUrl?: string;
}) {
  const tokens = applyOverrides(rawTokens, overrides);
  const prefs = overrides?.stylePreferences;
  const wrapperClass = embedded ? "" : "min-h-screen";

  return (
    <div className={wrapperClass}>
      <HeroSection tokens={tokens} homepageUrl={homepageUrl} />
      <ColorPaletteSection tokens={tokens} />
      <TypographySection tokens={tokens} />
      <SpacingShapeSection tokens={tokens} />
      {tokens.guidelines.length > 0 ? (
        <>
          <GuidelinesSection guidelines={tokens.guidelines} kicker="04" />
          <ComponentsSection tokens={tokens} kicker="05" />
        </>
      ) : (
        <ComponentsSection tokens={tokens} kicker="04" />
      )}
      {!embedded && (
        <footer className="border-t border-border/40 py-8 mt-8">
          <div className="mx-auto max-w-5xl px-6 text-xs text-muted-foreground text-center">
            Generated by{" "}
            <a href="/" className="underline hover:text-foreground">oh-my-design</a>{" "}
            from <code className="font-mono">references/{tokens.identity.name.toLowerCase()}/DESIGN.md</code>
          </div>
        </footer>
      )}
    </div>
  );
}
