"use client";

/**
 * Refero-style design system showcase — renders 5 sections from a parsed
 * DESIGN.md token set. Same regulation/spec across all references.
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
import Link from "next/link";
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
  type ComponentVariant,
  type ComponentType,
} from "@/lib/extract-tokens";
import { lookupFont } from "@/lib/font-registry";
import { resolveRuntimeFont } from "@/lib/fonts/runtime-family";
import { FontCard } from "./font-card";
import { RuntimeFontLoader } from "./runtime-font-loader";
import type { ReferenceDetailAstContract } from "@/lib/references/detail-projection";
import { getSectionProvenance, type SectionProvenance } from "@/lib/references/provenance";
import { orderSpacingScale } from "@/lib/references/token-order";

/* ─────────── Shared utils ─────────── */

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
function ProvenanceBadge({ provenance }: { provenance: SectionProvenance }) {
  const verified = provenance.status === "verified_v2" && provenance.confidence === "high";
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-4xl px-2 py-1 text-[10px] font-medium ${
        verified ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
      }`}
      title={`${provenance.claimCount} linked claims · ${provenance.sourceCount} sources · checked ${provenance.checkedAt}`}
    >
      {verified ? "Verified" : "Partial"} · {provenance.claimCount} claims · {provenance.checkedAt}
    </span>
  );
}

function Section({ title, kicker, provenance, children }: { title: string; kicker?: string; provenance?: SectionProvenance | null; children: React.ReactNode }) {
  return (
    <section className="border-t border-border/40 py-12">
      <div className="mx-auto max-w-5xl px-6">
        {kicker && (
          <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">
            {kicker}
          </div>
        )}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-heading text-xl font-semibold tracking-tight">{title}</h2>
          {provenance ? <ProvenanceBadge provenance={provenance} /> : null}
        </div>
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
  const previewFamily = typography.family
    ? resolveRuntimeFont(typography.family).cssFamily
    : undefined;

  return (
    <div className="mx-auto max-w-5xl px-6 pt-10 pb-4">
      <header className="rounded-2xl ring-1 ring-border/40 px-6 py-10 sm:px-10 sm:py-14 overflow-hidden bg-transparent">
        <div className="text-[11px] font-semibold uppercase tracking-[0.15em] mb-3 text-muted-foreground">
          Design System
        </div>
        <div className="flex items-center gap-4">
          {logoSrc && (
            // Sit the logo on its brand background so a mono logo stays visible in
            // BOTH page themes (logoColor is picked to contrast identity.background,
            // so the tile colour must match it — e.g. black Stripe mark on white).
            <div
              className="shrink-0 flex items-center justify-center rounded-xl p-2.5 ring-1 ring-border/20"
              style={{ background: identity.background || "#ffffff" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoSrc}
                alt={`${identity.name} logo`}
                className="h-9 w-9 object-contain"
                onError={() => {
                  if (logoSrc !== fallbackLogoUrl && fallbackLogoUrl) setLogoSrc(fallbackLogoUrl);
                  else setLogoSrc(null);
                }}
              />
            </div>
          )}
          <h1
            className="text-5xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: previewFamily }}
          >
            {identity.name}
          </h1>
        </div>
        {mood && (
          <p
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground"
            style={{ fontFamily: previewFamily }}
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

function ColorPaletteSection({ tokens, provenance }: { tokens: ParsedTokens; provenance?: SectionProvenance | null }) {
  const { paletteRoles } = tokens;
  const { copied, copy } = useCopy();
  if (paletteRoles.length === 0) return null;
  const grouped: Record<ColorCategory, ColorRole[]> = {
    brand: [], accent: [], neutral: [], semantic: [],
  };
  for (const r of paletteRoles) grouped[r.category].push(r);

  return (
    <Section title="Color Palette" kicker="01" provenance={provenance}>
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
                    key={`${role.category}:${role.name}:${role.hex}`}
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
function TypographySection({ tokens, provenance }: { tokens: ParsedTokens; provenance?: SectionProvenance | null }) {
  const { typography } = tokens;
  const fonts = typography.fonts;
  const runtimeFamilies = [typography.family, ...fonts.map((font) => font.raw), ...typography.hierarchy.map((tier) => tier.fontFamily)];
  const renderableHierarchy = typography.hierarchy.filter(
    (tier) => {
      const family = tier.fontFamily ?? typography.family;
      return !family || resolveRuntimeFont(family).mode !== "unavailable";
    },
  );
  if (fonts.length === 0 && renderableHierarchy.length === 0) return null;

  return (
    <Section title="Typography" kicker="02" provenance={provenance}>
      <RuntimeFontLoader families={runtimeFamilies} />
      <div className="space-y-6">
        {/* Type Scale */}
        {renderableHierarchy.length > 0 && <div className="space-y-3">
          <div className="flex items-baseline justify-between gap-4 flex-wrap">
            <SubLabel>Type Scale</SubLabel>
            <p className="text-[11px] text-muted-foreground italic">
              Verified size, weight, line-height, and tracking. Family is omitted when unresolved.
            </p>
          </div>
          <div className="rounded-2xl border border-border/50 overflow-hidden divide-y divide-border/40">
            {renderableHierarchy.map((tier) => {
              const tokenLabel = roleToTokenLabel(tier.role, tier.fontSize);
              const lhStr = typeof tier.lineHeight === "string"
                ? tier.lineHeight
                : Number.isInteger(tier.lineHeight)
                  ? `${tier.lineHeight}`
                  : tier.lineHeight.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
              const family = tier.fontFamily ?? typography.family;
              const runtimeFont = family ? resolveRuntimeFont(family) : null;
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
                      fontFamily: runtimeFont?.cssFamily,
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
        </div>}

        {/* Fonts */}
        {fonts.length > 0 && <div className="space-y-3">
          <SubLabel>Fonts</SubLabel>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {fonts.map((mention, i) => (
              <FontCard
                key={`${mention.raw}-${i}`}
                font={lookupFont(mention.raw)}
                role={mention.role}
                fontFamilyForRender={resolveRuntimeFont(mention.raw).cssFamily}
              />
            ))}
          </div>
        </div>}
      </div>
    </Section>
  );
}

/* ─────────── Spacing & Shape ─────────── */
function SpacingShapeSection({ tokens, provenance }: { tokens: ParsedTokens; provenance?: SectionProvenance | null }) {
  const { spacingScale, radiusScale, borders, shadows, identity } = tokens;
  // Refero shows 5 functional roles instead of a raw scale — clearer at a
  // glance, matches how designers actually reason about layout density.
  const spacingRows = orderSpacingScale(spacingScale).map((item, index) => ({
    purpose: item.purpose ?? `token-${index + 1}`,
    value: `${item.value}px`,
    preview: item.value,
  }));
  if (spacingRows.length === 0 && radiusScale.length === 0 && borders.length === 0 && shadows.length === 0) return null;
  return (
    <Section title="Spacing & Shape" kicker="03" provenance={provenance}>
      <div className="space-y-6">
        {/* Spacing */}
        {spacingRows.length > 0 && <div className="space-y-3">
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
                        // Actual pixel width — an 8px token renders an 8px block,
                        // 16px renders 16px (not normalized to the column, which
                        // hid the real scale). Tall + near-square corners + solid
                        // fill (getdesign.md style) so small values read as solid
                        // blocks, not soft dots.
                        <div
                          className="rounded-[2px] bg-foreground/75"
                          style={{
                            width: `${row.preview}px`,
                            height: 26,
                            maxWidth: "100%",
                            minWidth: 2,
                          }}
                        />
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>}

        {/* Border Radius */}
        {radiusScale.length > 0 && <div className="space-y-3">
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
                        className="h-12 w-12 bg-foreground/75"
                        style={{ borderRadius: r.value }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>}

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

/** Relative luminance (0–1) of a hex or rgb/rgba color string, or null. */
function colorLuminance(c?: string): number | null {
  if (!c) return null;
  const hex = c.replace("#", "");
  if (/^[0-9a-f]{6}$/i.test(hex)) {
    const [r, g, b] = hex.match(/.{2}/g)!.map((x) => parseInt(x, 16));
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  }
  if (/^[0-9a-f]{3}$/i.test(hex)) {
    const [r, g, b] = hex.split("").map((x) => parseInt(x + x, 16));
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  }
  const m = c.match(/rgba?\(\s*(\d+)\D+(\d+)\D+(\d+)/i);
  if (m) return (0.299 * +m[1] + 0.587 * +m[2] + 0.114 * +m[3]) / 255;
  return null;
}

/** A demo instance is invisible on the light-gray card when it renders light
 *  (white-ish) content over a transparent / translucent / light surface. Those
 *  variants get a small dark tile behind ONLY the instance, so the card stays
 *  light gray but white-on-dark components (Watcha Secondary/Ghost, dark text
 *  fields, 17LIVE chrome…) read correctly. Components with their own opaque
 *  dark/colored fill (Primary CTA, dark Icon Button) keep the transparent cell. */
/** Gradient stops mentioned in a variant's prose (e.g. richart's hero CTA:
 *  "radial gradient #64cedb to #15a6b7"). Lets us render the real fill instead
 *  of a flat gray. Returns [from, to] hexes, or null. */
function gradientStops(v: ComponentVariant): [string, string] | null {
  const text = [v.use, v.shadow, ...Object.values(v.extras ?? {})].filter(Boolean).join(" ");
  if (!/gradient/i.test(text)) return null;
  const hexes = text.match(/#[0-9a-fA-F]{6}/g);
  return hexes && hexes.length >= 2 ? [hexes[0], hexes[1]] : null;
}
function gradientCss(v: ComponentVariant): string | null {
  const stops = gradientStops(v);
  if (!stops) return null;
  const radial = /radial/i.test(v.use ?? "");
  return radial
    ? `radial-gradient(circle at 30% 30%, ${stops[0]}, ${stops[1]})`
    : `linear-gradient(135deg, ${stops[0]}, ${stops[1]})`;
}

/** The effective background a button/badge will render with, used to decide the
 *  tile. Mirrors VariantInstance's fallback chain: explicit bg → gradient stop →
 *  brand primary (for button/badge) → none. */
function effectiveBgColor(v: ComponentVariant, type: ComponentType, primary?: string): string | null {
  const explicit = firstColor(v.bg);
  if (explicit) return explicit;
  const stops = gradientStops(v);
  if (stops) return stops[1];
  if (type === "button" || type === "badge") return primary ?? "#888";
  return null;
}

function variantNeedsDarkTile(v: ComponentVariant, type: ComponentType, primary?: string): boolean {
  const fgLum = colorLuminance(firstColor(v.fg));
  if (fgLum === null || fgLum <= 0.6) return false; // not light text → fine on gray
  const bg = effectiveBgColor(v, type, primary);
  if (!bg || bg === "transparent") return true;
  const alpha = bg.match(/rgba?\([^)]*,\s*([0-9.]+)\s*\)/i);
  if (alpha && parseFloat(alpha[1]) < 0.6) return true; // translucent fill
  const bgLum = colorLuminance(bg);
  if (bgLum !== null && bgLum > 0.6) return true; // light solid fill
  return false; // opaque dark/colored fill already provides contrast
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
  // Unit-less numerics (structured `tokens.components` frontmatter writes
  // `radius: 12`, which reaches us as the STRING "12") are invalid as a CSS
  // `border-radius` — React only auto-appends px to *numeric* style values,
  // not numeric strings — so they silently read as sharp corners. Append px
  // to each bare number, leaving units/percentages/keywords (`18px`, `50%`)
  // untouched. Covers single (`12`), pill (`9999`), and asymmetric (`18 4 18 18`).
  return v
    .split(/\s+/)
    .map((tok) => (/^\d+(?:\.\d+)?$/.test(tok) ? `${tok}px` : tok))
    .join(" ");
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
function VariantInstance({ type, variant, font, primary }: { type: ComponentType; variant: ComponentVariant; font?: string; primary?: string }) {
  // Sane fallbacks: a missing radius shouldn't hide the whole instance — every
  // variant the brand actually published should render. We only fall through
  // to "spec only" when there's literally nothing renderable (no bg AND no
  // fg AND no border AND no padding) — empty bullet list, mistakenly named
  // variant, etc. Otherwise we use type-appropriate defaults for the
  // properties that weren't specified.
  // bg fallback chain: explicit color → gradient from prose (richart hero CTA)
  // → brand primary for buttons/badges (never a dead gray #888) → transparent.
  const bg =
    firstColor(variant.bg) ??
    gradientCss(variant) ??
    (type === "button" || type === "badge" ? primary ?? "#888" : "transparent");
  const fg = firstColor(variant.fg) ?? "currentColor";
  // Surfaces that are invisible without chrome (input box, toast/dialog/tooltip
  // surface) get a subtle default border when neither a bg nor a border was
  // specified — so a tokens-only `{ type, use }` component still reads as a real
  // control rather than blank space.
  const borderDefaultTypes = type === "input" || type === "toast" || type === "dialog";
  const border =
    cssValue(variant.border) ??
    (borderDefaultTypes && !variant.bg ? "1px solid rgba(128,128,128,0.35)" : undefined);
  const radius = normalizeRadius(variant.radius) ?? defaultRadiusFor(type);
  const padding = cssValue(variant.padding) ?? defaultPaddingFor(type);
  const shadow = cssValue(variant.shadow);

  const hasAnyVisible =
    !!variant.bg || !!variant.fg || !!variant.border || !!variant.padding || !!variant.radius ||
    !!variant.active || !!variant.disabled || !!variant.use;
  // Structured component tokens always carry a `type` (+ usually `use`), so we
  // render a type-default instance (outlined input, filled button, badge, …)
  // instead of "spec only". Tabs always render their dummy-label preview too.
  if (!hasAnyVisible && type !== "tab") {
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
    case "card": {
      // Transparent "image fills" cards (e.g. Watcha Poster Card) have no
      // chrome of their own. On the light-gray preview surface a brand-white
      // label would vanish — use a neutral muted label + dashed outline so the
      // empty-by-design slot reads as intentional, not broken.
      const isTransparentCard = bg === "transparent" || !variant.bg;
      return (
        <div
          style={{
            ...baseStyle,
            padding: padding ?? "20px",
            minHeight: 80,
            minWidth: 200,
            display: "flex",
            alignItems: isTransparentCard ? "center" : "flex-start",
            justifyContent: isTransparentCard ? "center" : "flex-start",
            // Mid-gray dashed frame + label so the empty "image fills" slot reads
            // on either backdrop (light-gray card OR the dark tile a white-fg
            // transparent card gets).
            border: isTransparentCard && !border ? "1px dashed rgba(128,128,128,0.45)" : border,
          }}
        >
          <span
            className="text-xs"
            style={isTransparentCard ? { color: "rgba(128,128,128,0.95)" } : { opacity: 0.6 }}
          >
            {isTransparentCard ? "image fills" : variant.name}
          </span>
        </div>
      );
    }
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

      // Underline indicator: the bottom-border color is usually DISTINCT from the
      // active-text color (e.g. GitHub: text #1f2328 + 2px bottom border #fd8c73).
      // Parse "<N>px bottom border <hex>" from the active/border/name prose.
      const underlineSrc = `${activeStr} ${cssValue(variant.border) ?? ""} ${variant.name}`;
      const underlineColor =
        underlineSrc.match(/(?:bottom border|underline|indicator)[^#]*?(#[0-9a-f]{3,8}|rgba?\([^)]+\))/i)?.[1] ??
        underlineSrc.match(/(#[0-9a-f]{3,8})\s*\([^)]*(?:indicator|underline|tab)/i)?.[1] ??
        activeText;
      const underlineWidth =
        underlineSrc.match(/(\d+)\s*px\s*(?:bottom border|underline|indicator)/i)?.[1] ?? "2";

      const wrapperHasBg = bg !== "transparent" && !!variant.bg;
      const innerRadius =
        radius && /^\d/.test(radius) ? `${Math.max(parseFloat(radius) - 4, 4)}px` : radius;
      // Dummy preview labels — first is the active/selected tab.
      const tabLabels = ["Tab", "Tab", "Tab"];

      // Segmented-control style: the active tab carries its own surface/fill.
      if (activeBg || wrapperHasBg) {
        return (
          <div
            style={{
              display: "inline-flex",
              gap: 4,
              padding: 4,
              background: wrapperHasBg ? bg : "rgba(128,128,128,0.12)",
              border,
              borderRadius: radius || "8px",
              fontFamily: font,
              width: "fit-content",
            }}
          >
            {tabLabels.map((l, i) => (
              <span
                key={i}
                style={{
                  background: i === 0 ? activeBg ?? "#ffffff" : "transparent",
                  color: i === 0 ? activeText : disabledText,
                  padding: "6px 14px",
                  borderRadius: i === 0 ? innerRadius : 0,
                  fontWeight: i === 0 ? 600 : 500,
                  fontSize: 13,
                  whiteSpace: "nowrap",
                }}
              >
                {l}
              </span>
            ))}
          </div>
        );
      }

      // Underline-nav style (default): dummy labels with the active one underlined.
      return (
        <div
          style={{
            display: "inline-flex",
            gap: 24,
            fontFamily: font,
            width: "fit-content",
            borderBottom: "1px solid rgba(128,128,128,0.2)",
          }}
        >
          {tabLabels.map((l, i) => (
            <span
              key={i}
              style={{
                color: i === 0 ? activeText : disabledText,
                padding: "8px 2px",
                marginBottom: -1,
                borderBottom: i === 0 ? `${underlineWidth}px solid ${underlineColor}` : "2px solid transparent",
                fontWeight: i === 0 ? 600 : 500,
                fontSize: 13,
                whiteSpace: "nowrap",
              }}
            >
              {l}
            </span>
          ))}
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
    .map(({ key, label }) => {
      let value = variant[key] as string | undefined;
      // Display radius with units so unit-less frontmatter tokens (`radius: 12`)
      // read consistently with prose refs (`12px`) — mirrors the preview fix.
      if (key === "radius" && value) {
        value = String(value)
          .split(/\s+/)
          .map((tok) => (/^\d+(?:\.\d+)?$/.test(tok) ? `${tok}px` : tok))
          .join(" ");
      }
      const displayLabel =
        key === "font" && value && /^\s*\d+(?:\.\d+)?px\s*\/\s*\d{3}(?:\s*\/.*)?\s*$/.test(value)
          ? "Text style"
          : label;
      return { label: displayLabel, value };
    })
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
function ComponentsSection({ tokens, kicker, provenance }: { tokens: ParsedTokens; kicker: string; provenance?: SectionProvenance | null }) {
  const { components, typography } = tokens;
  const font = typography.family ? resolveRuntimeFont(typography.family).cssFamily : undefined;
  const primary = tokens.identity.primary;

  // Some brand DESIGN.md files describe layout/spacing in §4 instead of
  // components (e.g. dabang's §4 is "Spacing & Layout"). Hide the section
  // entirely rather than expose a "migration pending" placeholder.
  if (components.length === 0) return null;

  return (
    <Section title="Components" kicker={kicker} provenance={provenance}>
      <div className="space-y-8">
        {components.map((block, i) => (
          <div key={i} className="space-y-3">
            <SubLabel>{block.heading || COMPONENT_LABEL[block.type]}</SubLabel>
            <div className="space-y-3">
              {block.variants.map((v, j) => (
                <VariantCard key={`${i}-${j}-${v.name}`} type={block.type} variant={v} font={font} primary={primary} />
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

function VariantCard({ type, variant, font, primary }: { type: ComponentType; variant: ComponentVariant; font?: string; primary?: string }) {
  // Uniform very-light-gray card surface (whole card — demo + spec column).
  // Gives white/transparent brand components (e.g. Watcha's white-on-rgba
  // chips) a non-white backdrop so they don't vanish, without per-brand
  // dark canvases. Theme-aware via the muted token.
  const darkTile = variantNeedsDarkTile(variant, type, primary);
  return (
    <div className="grid gap-4 rounded-2xl border border-border/50 bg-muted/40 p-5 sm:grid-cols-[minmax(0,260px)_1fr] sm:items-start">
      <div
        className="flex min-w-0 items-center justify-center overflow-hidden rounded-xl"
        style={
          darkTile
            ? { background: "#1d1d1f", padding: "20px 16px", minHeight: 72 }
            : // Padding so rounded corners + focus rings (box-shadow extends
              // outside the border) aren't clipped by overflow-hidden when an
              // input/card fills the cell width.
              { padding: "20px 16px", minHeight: 72 }
        }
      >
        <VariantInstance type={type} variant={variant} font={font} primary={primary} />
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
  referenceAst,
}: {
  tokens: ParsedTokens;
  overrides?: PreviewOverrides;
  embedded?: boolean;
  homepageUrl?: string;
  referenceAst?: ReferenceDetailAstContract;
}) {
  const tokens = applyOverrides(rawTokens, overrides);
  const wrapperClass = embedded ? "" : "min-h-screen";

  return (
    <div className={wrapperClass}>
      <HeroSection tokens={tokens} homepageUrl={homepageUrl} />
      <ColorPaletteSection tokens={tokens} provenance={getSectionProvenance(referenceAst, ["tokens.colors.", "tokens.color."])} />
      <TypographySection tokens={tokens} provenance={getSectionProvenance(referenceAst, ["tokens.typography.", "tokens.font.", "tokens.text."])} />
      <SpacingShapeSection tokens={tokens} provenance={getSectionProvenance(referenceAst, ["tokens.spacing.", "tokens.rounded.", "tokens.radius.", "tokens.shadow."])} />
      {tokens.guidelines.length > 0 ? (
        <>
          <GuidelinesSection guidelines={tokens.guidelines} kicker="04" />
          <ComponentsSection tokens={tokens} kicker="05" provenance={getSectionProvenance(referenceAst, ["tokens.components."])} />
        </>
      ) : (
        <ComponentsSection tokens={tokens} kicker="04" provenance={getSectionProvenance(referenceAst, ["tokens.components."])} />
      )}
      {!embedded && (
        <footer className="border-t border-border/40 py-8 mt-8">
          <div className="mx-auto max-w-5xl px-6 text-xs text-muted-foreground text-center">
            Generated by{" "}
            <Link href="/" className="underline hover:text-foreground">oh-my-design</Link>{" "}
            from <code className="font-mono">references/{tokens.identity.name.toLowerCase()}/DESIGN.md</code>
          </div>
        </footer>
      )}
    </div>
  );
}
