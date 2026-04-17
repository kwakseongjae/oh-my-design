"use client";

/**
 * Comprehensive design system showcase — renders 9 sections from a parsed
 * DESIGN.md token set. Same regulation/spec across all 67 references.
 *
 * Sections: Hero, Colors, Typography, Buttons, Cards, Forms, Badges & Tabs,
 * Spacing & Radius, Elevation.
 *
 * Two modes:
 *   1. Showcase (default) — passed `tokens` directly, used by /reference/[id]
 *   2. Builder mode — passed `tokens` + `overrides`, used by builder step 3.
 *      `overrides` (primaryColor, fontFamily, headingWeight, borderRadius)
 *      are merged into the tokens before rendering so the live preview
 *      reflects user customization.
 *
 * Replaces the legacy preview.tsx + per-ref static preview.html files
 * (both now deprecated — kept for backward compat but no longer canonical).
 */

import { applyOverrides, type ParsedTokens, type PreviewOverrides } from "@/lib/extract-tokens";
import { parseFontStack, lookupFont } from "@/lib/font-registry";
import { FontStackGrid, FontCard } from "./font-card";

function contrastFg(hex: string): string {
  const m = hex.replace("#", "").match(/.{2}/g);
  if (!m) return "#ffffff";
  const [r, g, b] = m.map((x) => parseInt(x, 16));
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.6 ? "#0a0a0a" : "#ffffff";
}

function Section({ title, kicker, children }: { title: string; kicker?: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border/40 py-12">
      <div className="mx-auto max-w-5xl px-6">
        {kicker && <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">{kicker}</div>}
        <h2 className="text-2xl font-semibold tracking-tight mb-8">{title}</h2>
        {children}
      </div>
    </section>
  );
}

/* ─────────── Hero ─────────── */
function HeroSection({ tokens }: { tokens: ParsedTokens }) {
  const { identity, typography } = tokens;
  return (
    <header className="mx-auto max-w-5xl px-6 pt-16 pb-12">
      <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">Design System</div>
      <h1 className="text-5xl font-bold tracking-tight" style={{ color: identity.foreground, fontFamily: typography.family }}>
        {identity.name}
      </h1>
      {identity.mood && (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground" style={{ fontFamily: typography.family }}>
          {identity.mood.length > 360 ? identity.mood.slice(0, 360) + "…" : identity.mood}
        </p>
      )}
      <div className="mt-8 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1.5 text-xs ring-1 ring-border/60">
          <span className="h-3 w-3 rounded-full" style={{ background: identity.primary }} />
          <span className="font-mono text-muted-foreground">{identity.primary}</span>
          <span className="text-muted-foreground/60">primary</span>
        </span>
        {identity.accent && (
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1.5 text-xs ring-1 ring-border/60">
            <span className="h-3 w-3 rounded-full" style={{ background: identity.accent }} />
            <span className="font-mono text-muted-foreground">{identity.accent}</span>
            <span className="text-muted-foreground/60">accent</span>
          </span>
        )}
        <span className="inline-flex items-center rounded-full bg-card px-3 py-1.5 text-xs ring-1 ring-border/60 text-muted-foreground">
          {typography.family.split(",")[0].replace(/['"]/g, "")}
        </span>
      </div>
    </header>
  );
}

/* ─────────── Colors ─────────── */
function ColorsSection({ tokens }: { tokens: ParsedTokens }) {
  const { palette, identity } = tokens;
  return (
    <Section title="Color Palette" kicker="01">
      <p className="text-sm text-muted-foreground mb-6">
        Top {palette.length} hex values found in §2 of DESIGN.md, ranked by usage frequency.
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6">
        {palette.map((hex) => {
          const fg = contrastFg(hex);
          return (
            <div key={hex} className="overflow-hidden rounded-xl ring-1 ring-border/40">
              <div className="h-20 flex items-end p-2" style={{ background: hex, color: fg }}>
                <span className="text-[10px] font-mono opacity-80">{hex}</span>
              </div>
              <div className="px-3 py-2 text-[10px] font-mono text-muted-foreground bg-card">{hex}</div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[
          { label: "Primary", value: identity.primary },
          identity.accent ? { label: "Accent", value: identity.accent } : null,
          { label: "Background", value: identity.background },
          { label: "Foreground", value: identity.foreground },
          identity.border ? { label: "Border", value: identity.border } : null,
        ]
          .filter(Boolean)
          .map((c) => {
            const color = c as { label: string; value: string };
            return (
              <div key={color.label} className="flex items-center gap-3 rounded-lg bg-card p-2 ring-1 ring-border/40">
                <span className="h-8 w-8 flex-shrink-0 rounded-md ring-1 ring-border/40" style={{ background: color.value }} />
                <div className="min-w-0">
                  <div className="text-xs font-medium">{color.label}</div>
                  <div className="text-[10px] font-mono text-muted-foreground truncate">{color.value}</div>
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
  const { typography, identity } = tokens;
  const family = typography.family;
  const muted = identity.foreground + "99"; // ~60% opacity for muted tiers

  return (
    <Section title="Typography" kicker="02">
      {/* Font stack — license-tagged cards with install links */}
      <div className="rounded-xl bg-card p-6 ring-1 ring-border/40 mb-6">
        <FontStackGrid stack={family} fonts={parseFontStack(family)} />
        {typography.mono && (
          <div className="mt-6 pt-6 border-t border-border/40">
            <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-3">Monospace</div>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              <FontCard font={lookupFont(typography.mono)} />
            </div>
          </div>
        )}
        <div className="mt-6 pt-6 border-t border-border/40">
          <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-3">Weights</div>
          <div className="flex flex-wrap gap-5">
            {typography.weights.map((w) => (
              <div key={w} className="flex flex-col gap-1">
                <span style={{ fontFamily: family, fontWeight: w, fontSize: 32, color: identity.foreground, lineHeight: 1 }}>Aa</span>
                <span className="text-[10px] font-mono text-muted-foreground text-center">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hierarchy — labeled tiers with spec line under each (awesome-design-md-jp style) */}
      <div className="rounded-xl bg-card p-6 ring-1 ring-border/40">
        <div className="text-[10px] font-mono text-muted-foreground mb-1">02 / TYPOGRAPHY</div>
        <h3 className="text-xl font-bold mb-6" style={{ fontFamily: family, color: identity.foreground }}>
          Typography Hierarchy
        </h3>
        <div className="divide-y divide-border/40">
          {typography.hierarchy.map((tier) => {
            const sizeRem = (tier.fontSize / 16).toFixed(3).replace(/\.?0+$/, "");
            return (
              <div key={tier.role} className="py-5 first:pt-0 last:pb-0">
                <div
                  style={{
                    fontFamily: family,
                    fontSize: tier.fontSize,
                    fontWeight: tier.fontWeight,
                    lineHeight: tier.lineHeight,
                    letterSpacing: tier.letterSpacing,
                    color: tier.muted ? muted : identity.foreground,
                  }}
                >
                  {tier.sampleText}
                  <span className="ml-2 text-[10px] font-medium text-muted-foreground" style={{ fontFamily: family, letterSpacing: "0" }}>
                    — {tier.label}
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-muted-foreground">
                  <span>{sizeRem}rem ({tier.fontSize}px)</span>
                  <span>·</span>
                  <span>{tier.fontWeight}</span>
                  <span>·</span>
                  <span>line-height: {tier.lineHeight}</span>
                  {tier.letterSpacing !== "0" && (
                    <>
                      <span>·</span>
                      <span>letter-spacing: {tier.letterSpacing}</span>
                    </>
                  )}
                  <span className="ml-1 inline-flex items-center rounded bg-foreground/5 px-1.5 py-0.5 text-[10px] uppercase tracking-wider ring-1 ring-border/40">
                    {tier.role}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* ─────────── Buttons ─────────── */
function ButtonsSection({ tokens }: { tokens: ParsedTokens }) {
  const { identity, radii, typography } = tokens;
  const fg = contrastFg(identity.primary);
  const buttons = [
    { label: "Primary", style: { background: identity.primary, color: fg, border: `1px solid ${identity.primary}` } },
    { label: "Secondary", style: { background: identity.background, color: identity.foreground, border: `1px solid ${identity.border ?? "#e5e7eb"}` } },
    { label: "Outline", style: { background: "transparent", color: identity.primary, border: `1px solid ${identity.primary}` } },
    { label: "Ghost", style: { background: "transparent", color: identity.foreground, border: "1px solid transparent" } },
    { label: "Destructive", style: { background: "#ef4444", color: "#ffffff", border: "1px solid #ef4444" } },
  ];
  return (
    <Section title="Buttons" kicker="03">
      <div className="rounded-xl bg-card p-6 ring-1 ring-border/40">
        <div className="flex flex-wrap items-center gap-3">
          {buttons.map((b) => (
            <button
              key={b.label}
              style={{
                ...b.style,
                borderRadius: radii.button,
                fontFamily: typography.family,
                fontWeight: 500,
                padding: "10px 20px",
                fontSize: 14,
              }}
            >
              {b.label}
            </button>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {[
            { label: "Small", padding: "6px 12px", fontSize: 13 },
            { label: "Default", padding: "10px 20px", fontSize: 14 },
            { label: "Large", padding: "14px 28px", fontSize: 16 },
          ].map((b) => (
            <button
              key={b.label}
              style={{
                background: identity.primary,
                color: fg,
                border: `1px solid ${identity.primary}`,
                borderRadius: radii.button,
                fontFamily: typography.family,
                fontWeight: 500,
                padding: b.padding,
                fontSize: b.fontSize,
              }}
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─────────── Cards ─────────── */
function CardsSection({ tokens }: { tokens: ParsedTokens }) {
  const { identity, radii, typography, shadows } = tokens;
  const cardShadow = shadows[1]?.value ?? "0 1px 3px 0 rgba(0,0,0,0.1)";
  return (
    <Section title="Cards" kicker="04">
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Total Revenue", value: "$45,231", delta: "+20.1%", positive: true },
          { label: "Subscriptions", value: "2,350", delta: "+18.2%", positive: true },
          { label: "Active Now", value: "573", delta: "-2.4%", positive: false },
        ].map((c) => (
          <div
            key={c.label}
            style={{
              background: identity.background,
              color: identity.foreground,
              border: `1px solid ${identity.border ?? "#e5e7eb"}`,
              borderRadius: radii.card,
              boxShadow: cardShadow,
              padding: 20,
              fontFamily: typography.family,
            }}
          >
            <div className="text-sm opacity-70">{c.label}</div>
            <div className="mt-2 text-3xl font-bold">{c.value}</div>
            <div className={`mt-1 text-xs ${c.positive ? "text-emerald-600" : "text-red-600"}`}>{c.delta} from last month</div>
          </div>
        ))}
      </div>
      <div
        className="mt-4 p-6"
        style={{
          background: identity.background,
          color: identity.foreground,
          border: `1px solid ${identity.border ?? "#e5e7eb"}`,
          borderRadius: radii.card,
          boxShadow: cardShadow,
          fontFamily: typography.family,
        }}
      >
        <h3 className="text-lg font-semibold">Featured product</h3>
        <p className="mt-2 text-sm opacity-70">
          A wider example card showing how content sits inside the radius and shadow combination
          defined by this brand. Card radius is capped at 16px even on pill systems (LINE/Wise/Spotify)
          so large surfaces stay readable.
        </p>
        <button
          className="mt-4"
          style={{
            background: identity.primary,
            color: contrastFg(identity.primary),
            border: `1px solid ${identity.primary}`,
            borderRadius: radii.button,
            padding: "8px 16px",
            fontSize: 13,
            fontWeight: 500,
            fontFamily: typography.family,
          }}
        >
          Action
        </button>
      </div>
    </Section>
  );
}

/* ─────────── Forms ─────────── */
function FormsSection({ tokens }: { tokens: ParsedTokens }) {
  const { identity, radii, typography } = tokens;
  return (
    <Section title="Form Elements" kicker="05">
      <div className="rounded-xl bg-card p-6 ring-1 ring-border/40 space-y-5 max-w-md">
        <div>
          <label className="block text-xs font-medium mb-1.5" style={{ color: identity.foreground }}>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            style={{
              background: identity.background,
              color: identity.foreground,
              border: `1px solid ${identity.border ?? "#d1d5db"}`,
              borderRadius: radii.input,
              padding: "10px 14px",
              fontSize: 14,
              fontFamily: typography.family,
              width: "100%",
            }}
          />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1.5" style={{ color: identity.foreground }}>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            style={{
              background: identity.background,
              color: identity.foreground,
              border: `1px solid ${identity.border ?? "#d1d5db"}`,
              borderRadius: radii.input,
              padding: "10px 14px",
              fontSize: 14,
              fontFamily: typography.family,
              width: "100%",
            }}
          />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1.5" style={{ color: identity.foreground }}>Country</label>
          <select
            style={{
              background: identity.background,
              color: identity.foreground,
              border: `1px solid ${identity.border ?? "#d1d5db"}`,
              borderRadius: radii.input,
              padding: "10px 14px",
              fontSize: 14,
              fontFamily: typography.family,
              width: "100%",
            }}
          >
            <option>South Korea</option>
            <option>Taiwan</option>
            <option>Japan</option>
          </select>
        </div>
      </div>
    </Section>
  );
}

/* ─────────── Badges + Tabs ─────────── */
function BadgesAndTabsSection({ tokens }: { tokens: ParsedTokens }) {
  const { identity, radii, typography } = tokens;
  const fg = contrastFg(identity.primary);
  const badges = [
    { label: "Default", bg: identity.primary, color: fg },
    { label: "Secondary", bg: identity.background, color: identity.foreground, border: identity.border ?? "#d1d5db" },
    { label: "Outline", bg: "transparent", color: identity.foreground, border: identity.border ?? "#d1d5db" },
    { label: "Destructive", bg: "#ef4444", color: "#ffffff" },
    { label: "Success", bg: "rgba(16, 185, 129, 0.15)", color: "#047857" },
  ];
  const tabs = ["Overview", "Analytics", "Settings"];
  const activeTab = 0;
  return (
    <Section title="Badges & Tabs" kicker="06">
      <div className="rounded-xl bg-card p-6 ring-1 ring-border/40 space-y-6">
        <div>
          <div className="text-[10px] font-mono text-muted-foreground mb-3">Badges (radius capped to 8px)</div>
          <div className="flex flex-wrap items-center gap-2">
            {badges.map((b) => (
              <span
                key={b.label}
                style={{
                  background: b.bg,
                  color: b.color,
                  border: b.border ? `1px solid ${b.border}` : undefined,
                  borderRadius: radii.badge,
                  padding: "3px 10px",
                  fontSize: 12,
                  fontWeight: 500,
                  fontFamily: typography.family,
                }}
              >
                {b.label}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="text-[10px] font-mono text-muted-foreground mb-3">Tabs (pill / underline)</div>
          <div className="flex gap-1 p-1 rounded-lg" style={{ background: identity.border ? `${identity.border}20` : "#f3f4f6", borderRadius: radii.button }}>
            {tabs.map((t, i) => (
              <button
                key={t}
                style={{
                  background: i === activeTab ? identity.background : "transparent",
                  color: i === activeTab ? identity.foreground : identity.foreground + "99",
                  borderRadius: radii.button,
                  padding: "6px 14px",
                  fontSize: 13,
                  fontWeight: 500,
                  fontFamily: typography.family,
                  boxShadow: i === activeTab ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─────────── Spacing & Radius ─────────── */
function SpacingRadiusSection({ tokens }: { tokens: ParsedTokens }) {
  const { spacing, radii, identity } = tokens;
  return (
    <Section title="Spacing & Radius" kicker="07">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-card p-6 ring-1 ring-border/40">
          <div className="text-xs font-semibold mb-4">Spacing Scale</div>
          <div className="space-y-2">
            {spacing.map((px) => (
              <div key={px} className="flex items-center gap-3">
                <span className="text-[10px] font-mono text-muted-foreground w-12">{px}px</span>
                <div className="h-2 rounded-sm" style={{ width: px, background: identity.primary }} />
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl bg-card p-6 ring-1 ring-border/40">
          <div className="text-xs font-semibold mb-4">Component Radius (per-type)</div>
          <div className="space-y-3">
            {[
              { label: "Button", value: radii.button },
              { label: "Input", value: radii.input },
              { label: "Card", value: radii.card },
              { label: "Dialog", value: radii.dialog },
              { label: "Badge", value: radii.badge },
            ].map((r) => (
              <div key={r.label} className="flex items-center gap-3">
                <div
                  className="h-12 w-20 ring-1 ring-border/60"
                  style={{ background: identity.primary + "15", borderRadius: r.value }}
                />
                <div>
                  <div className="text-xs font-medium">{r.label}</div>
                  <div className="text-[10px] font-mono text-muted-foreground">{r.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─────────── Elevation ─────────── */
function ElevationSection({ tokens }: { tokens: ParsedTokens }) {
  const { shadows, identity } = tokens;
  return (
    <Section title="Elevation" kicker="08">
      <p className="text-sm text-muted-foreground mb-6">
        Shadow recipes parsed from §6 of DESIGN.md, or default 5-tier scale if none found.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {shadows.map((s, i) => (
          <div key={i} className="text-center">
            <div
              className="mx-auto mb-3 h-24 w-full"
              style={{
                background: identity.background,
                border: `1px solid ${identity.border ?? "#e5e7eb"}`,
                borderRadius: 12,
                boxShadow: s.value,
              }}
            />
            <div className="text-xs font-medium">{s.name}</div>
            <div className="text-[9px] font-mono text-muted-foreground mt-1 break-all px-2">{s.value}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─────────── Main ─────────── */
export function ReferencePreview({
  tokens: rawTokens,
  overrides,
  embedded = false,
}: {
  tokens: ParsedTokens;
  overrides?: PreviewOverrides;
  /** When true, hides the global wrapper styling (used inside the builder which provides its own chrome). */
  embedded?: boolean;
}) {
  const tokens = applyOverrides(rawTokens, overrides);
  const wrapperClass = embedded ? "" : "min-h-screen";
  return (
    <div className={wrapperClass} style={{ background: tokens.identity.background, color: tokens.identity.foreground }}>
      <HeroSection tokens={tokens} />
      <ColorsSection tokens={tokens} />
      <TypographySection tokens={tokens} />
      <ButtonsSection tokens={tokens} />
      <CardsSection tokens={tokens} />
      <FormsSection tokens={tokens} />
      <BadgesAndTabsSection tokens={tokens} />
      <SpacingRadiusSection tokens={tokens} />
      <ElevationSection tokens={tokens} />
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
