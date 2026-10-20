"use client";

/**
 * The item page's visual read of a reference (round 11, #27): big swatches,
 * type specimens and a few core components — nothing the reference does not
 * record. The canonical DESIGN.md beside it on the page keeps every value; this
 * is the part you recognise at a glance (the styles.refero.design idea), not a
 * second copy of the document.
 *
 * What is deliberately not here any more: the hero card (the page h1 names the
 * brand), the spacing / radius / border / elevation tables and the Do/Don't list
 * (all of them in the DESIGN.md body, and the tables fell back to defaults when a
 * document was silent), section numbering and provenance chips.
 *
 * Evidence rules:
 *   - A swatch is a hex the reference records; its name is shown only when the
 *     server found that name in the reference (page.tsx `evidencedPreviewTokens`).
 *   - A live specimen is drawn only in a face the browser can actually load. A
 *     brand face that cannot load keeps its name, role and licence as metadata
 *     and has no specimen (AGENTS.md: it loses only the live specimen).
 *   - A component sample is drawn only for a button, input or card variant whose
 *     own fill/outline and radius are recorded. No default radius, no fallback
 *     fill, no "spec only" tile.
 *
 * One consumer: the item page (/design-systems/[id], /ko/design-systems/[id]).
 * It does not render the brand name as a heading; the page has one <h1>.
 */

import { useCallback, useState } from "react";
import {
  applyOverrides,
  type ComponentType,
  type ComponentVariant,
  type FontMention,
  type ParsedTokens,
  type PreviewOverrides,
  type TypographyTier,
} from "@/lib/extract-tokens";
import { lookupFont } from "@/lib/font-registry";
import { ITEM_EN, type PreviewLabels } from "@/components/brand-a/copy/item";
import { resolveRuntimeFont } from "@/lib/fonts/runtime-family";
import { RuntimeFontLoader } from "./runtime-font-loader";

/* ─────────── helpers ─────────── */

function useCopy() {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = useCallback((text: string) => {
    void navigator.clipboard?.writeText(text).then(() => {
      setCopied(text);
      window.setTimeout(() => setCopied((k) => (k === text ? null : k)), 1400);
    });
  }, []);
  return { copied, copy };
}

/** A recorded CSS value with markdown ticks and trailing annotations removed; undefined when absent. */
function cssValue(raw?: string): string | undefined {
  if (!raw) return undefined;
  let v = raw.replace(/`/g, "").trim();
  v = v.split(/\s+(?:or|\/)\s+/i)[0].trim();
  v = v.replace(/\s*\([^)]*\)\s*$/, "").trim();
  if (!v || /^(none|n\/a|—|-)$/i.test(v)) return undefined;
  return v;
}

/** The first colour literal in a recorded value. */
function firstColor(raw?: string): string | undefined {
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
function recordedRadius(raw?: string): string | undefined {
  const v = cssValue(raw);
  if (!v) return undefined;
  if (/^(full\s+pill|pill)$/i.test(v)) return "9999px";
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

function recordedLength(raw?: string): string | undefined {
  const v = cssValue(raw);
  if (!v) return undefined;
  if (/^\d+(?:\.\d+)?$/.test(v)) return `${v}px`;
  return /^\d+(?:\.\d+)?(px|rem|em)$/.test(v) ? v : undefined;
}

function luminance(c?: string): number | null {
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
  return m ? (0.299 * +m[1] + 0.587 * +m[2] + 0.114 * +m[3]) / 255 : null;
}

/** The control's label: the first quoted example in the variant name ("송금하기"), else the name itself. */
function sampleLabel(name: string): string {
  const quoted = name.match(/["'“”‘’「」]([^"'“”‘’「」]{1,18})["'“”‘’「」]/);
  if (quoted) return quoted[1];
  const head = name.split(/\s[(—–-]\s?|\s\(/)[0].trim();
  return head.length <= 22 ? head : head.slice(0, 20) + "…";
}

/** The face a sample is set in: the brand UI face when the browser can load it, else the page font. */
function liveFamily(family?: string): string | undefined {
  if (!family) return undefined;
  const r = resolveRuntimeFont(family);
  return r.mode === "unavailable" ? undefined : r.cssFamily;
}

/* ─────────── Colors ─────────── */

function Colors({ tokens, labels }: { tokens: ParsedTokens; labels: PreviewLabels }) {
  const { copied, copy } = useCopy();
  const seen = new Set<string>();
  const swatches = tokens.paletteRoles.filter((r) => {
    const hex = r.hex.toLowerCase();
    if (seen.has(hex) || !/^#[0-9a-f]{3,8}$/i.test(hex)) return false;
    seen.add(hex);
    return true;
  });
  if (swatches.length === 0) return null;
  return (
    <section className="sq-pv-sec" aria-labelledby="pv-colors">
      <h2 id="pv-colors">{labels.colors}</h2>
      <ul className="sq-pv-sw">
        {swatches.map((role) => (
          <li key={role.hex}>
            <button type="button" onClick={() => copy(role.hex)} aria-label={labels.copyHex(role.hex)}>
              <span className="sq-pv-chip" style={{ background: role.hex }} data-content-object="" aria-hidden="true" />
              {role.name ? <span className="sq-pv-sw-n">{role.name}</span> : null}
              <span className="sq-pv-sw-v">{copied === role.hex ? labels.copied : role.hex}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ─────────── Typography ─────────── */

function familyKey(f: string): string {
  return f.split(",")[0].replace(/['"]/g, "").trim().toLowerCase();
}

function Typography({ tokens, labels }: { tokens: ParsedTokens; labels: PreviewLabels }) {
  const { typography } = tokens;
  const verified = typography.runtimeStatus !== "unverified";
  const seen = new Set<string>();
  const fonts: FontMention[] = typography.fonts.filter((f) => {
    const k = familyKey(f.raw);
    if (!k || seen.has(k)) return false;
    seen.add(k);
    return true;
  });
  const tiers: TypographyTier[] = typography.hierarchy;
  if (fonts.length === 0 && tiers.length === 0) return null;
  const loadable = (family?: string) => verified && !!family && resolveRuntimeFont(family).mode !== "unavailable";

  return (
    <section className="sq-pv-sec" aria-labelledby="pv-type">
      <h2 id="pv-type">{labels.type}</h2>
      <RuntimeFontLoader families={verified ? [typography.family, ...fonts.map((f) => f.raw), ...tiers.map((t) => t.fontFamily)] : []} />
      {fonts.length > 0 ? (
        <ul className="sq-pv-fonts">
          {fonts.map((f) => {
            const info = lookupFont(f.raw);
            // lookupFont() guesses "Brand-proprietary" for a face it has no record of; that guess is not shown.
            const known = !info.notes?.startsWith("Not in the OMD font registry");
            const live = loadable(f.raw) && f.runtimeStatus !== "unverified";
            const role = labels.roles[f.role] ?? f.role;
            return (
              <li key={f.raw} className={live ? "sq-pv-font sq-pv-font-live" : "sq-pv-font"}>
                {live ? (
                  <span className="sq-pv-aa" style={{ fontFamily: resolveRuntimeFont(f.raw).cssFamily }} aria-hidden="true">
                    Aa
                  </span>
                ) : null}
                <span className="sq-pv-font-t">
                  <b lang="en">{info.name || f.raw}</b>
                  <span>
                    {role ? <>{role} · </> : null}
                    {known ? (labels.license[info.license] ?? info.license) : labels.noRecord}
                  </span>
                  {info.source ? (
                    <a href={info.source.url} target="_blank" rel="noopener noreferrer">
                      {info.installable ? labels.install(info.source.name) : labels.source(info.source.name)}
                      <span aria-hidden="true"> ↗</span>
                    </a>
                  ) : null}
                </span>
              </li>
            );
          })}
        </ul>
      ) : null}
      {tiers.length > 0 ? (
        <div className="sq-pv-scale">
          <h3>{labels.scale}</h3>
          <ul>
            {tiers.map((tier) => {
              const family = tier.fontFamily ?? typography.family;
              const live = loadable(family);
              return (
                <li key={`${tier.role}-${tier.fontSize}-${tier.fontWeight}`}>
                  <span className="sq-pv-scale-m">
                    <b>{tier.label}</b>
                    <span>
                      {tier.fontSize}px · {tier.fontWeight}
                    </span>
                  </span>
                  {live ? (
                    <span
                      className="sq-pv-scale-s"
                      style={{
                        fontFamily: resolveRuntimeFont(family!).cssFamily,
                        fontSize: tier.fontSize,
                        fontWeight: tier.fontWeight,
                        lineHeight: tier.lineHeight,
                        letterSpacing: tier.letterSpacing,
                      }}
                    >
                      {tier.sampleText}
                    </span>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </section>
  );
}

/* ─────────── Components ─────────── */

const CORE: readonly ComponentType[] = ["button", "input", "card"];
const PER_TYPE: Record<string, number> = { button: 3, input: 2, card: 2 };

interface Sample {
  type: ComponentType;
  variant: ComponentVariant;
  fill?: string;
  text?: string;
  /** The outline as the reference writes it (shown in the caption). */
  border?: string;
  /** The same outline as CSS: "1px #eee" needs a style keyword to draw at all. */
  borderCss?: string;
  radius: string;
  height?: string;
  padding?: string;
  shadow?: string;
}

function withStyle(border: string): string {
  return /\b(solid|dashed|dotted|double)\b/i.test(border) ? border : border.replace(/^(\S+)/, "$1 solid");
}

/** A variant is drawn only from its own recorded values. */
function sampleOf(type: ComponentType, v: ComponentVariant): Sample | null {
  const radius = recordedRadius(v.radius);
  if (!radius) return null;
  const fill = firstColor(v.bg) ?? recordedGradient(v);
  const text = firstColor(v.fg);
  // An outline counts only when it has a width ("0px #d4dee9" draws nothing) and is plain CSS.
  const rawBorder = cssValue(v.border);
  const border =
    rawBorder && /^(?:\d*\.?\d+px|thin|medium|thick)(?:\s+(?:solid|dashed|dotted|double))?(?:\s+\S+)?$/i.test(rawBorder) && !/^0*\.?0+px/.test(rawBorder)
      ? rawBorder
      : undefined;
  const shadow = cssValue(v.shadow);
  const height = recordedLength(v.height);
  const padding = cssValue(v.padding);
  // A clear fill draws nothing: such a control is shown only when its outline is recorded.
  const solid = fill && fill !== "transparent" ? fill : undefined;
  if (type === "button" && !(solid ? text : border && text)) return null;
  if (type === "input" && !solid && !border) return null;
  if (type === "card" && !solid && !border && !shadow) return null;
  return { type, variant: v, fill, text, border, borderCss: border ? withStyle(border) : undefined, radius, height, padding, shadow };
}

function Components({ tokens, labels }: { tokens: ParsedTokens; labels: PreviewLabels }) {
  const family = tokens.typography.runtimeStatus === "unverified" ? undefined : liveFamily(tokens.typography.family);
  const samples: Sample[] = [];
  for (const type of CORE) {
    let n = 0;
    for (const block of tokens.components) {
      if (block.type !== type) continue;
      for (const v of block.variants) {
        if (n >= PER_TYPE[type]) break;
        const s = sampleOf(type, v);
        if (s) {
          samples.push(s);
          n++;
        }
      }
    }
  }
  if (samples.length === 0) return null;
  return (
    <section className="sq-pv-sec" aria-labelledby="pv-comp">
      <h2 id="pv-comp">{labels.components}</h2>
      <ul className="sq-pv-comp">
        {samples.map((s, i) => (
          <li key={`${s.type}-${i}`}>
            <div className={`sq-pv-stage${needsDarkStage(s) ? " sq-pv-stage-dark" : ""}`}>
              <Instance s={s} family={family} />
            </div>
            <div className="sq-pv-cap">
              <b>{s.variant.name}</b>
              <span>
                {[
                  s.fill && !s.fill.includes("gradient") ? `${labels.spec.fill} ${s.fill}` : null,
                  s.text ? `${labels.spec.text} ${s.text}` : null,
                  s.border ? `${labels.spec.border} ${s.border}` : null,
                  `${labels.spec.radius} ${s.radius}`,
                  s.height ? `${labels.spec.height} ${s.height}` : null,
                ]
                  .filter(Boolean)
                  .join(" · ")}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** White text on a clear or pale control would vanish on the light stage: give that one a dark stage. */
function needsDarkStage(s: Sample): boolean {
  const fg = luminance(s.text);
  if (fg === null || fg <= 0.6) return false;
  if (!s.fill || s.fill === "transparent") return true;
  const alpha = s.fill.match(/rgba?\([^)]*,\s*([0-9.]+)\s*\)/i);
  if (alpha && parseFloat(alpha[1]) < 0.6) return true;
  const bg = luminance(s.fill);
  return bg !== null && bg > 0.6;
}

function Instance({ s, family }: { s: Sample; family?: string }) {
  const label = sampleLabel(s.variant.name);
  const base: React.CSSProperties = {
    background: s.fill ?? "transparent",
    color: s.text,
    border: s.borderCss,
    borderRadius: s.radius,
    boxShadow: s.shadow,
    fontFamily: family,
  };
  if (s.type === "button") {
    return (
      <span
        className="sq-pv-btn"
        style={{ ...base, ...(s.height ? { height: s.height } : {}), ...(s.padding ? { padding: s.padding } : {}) }}
      >
        {label}
      </span>
    );
  }
  if (s.type === "input") {
    return (
      <span className="sq-pv-input" style={{ ...base, ...(s.height ? { height: s.height } : {}), ...(s.padding ? { padding: s.padding } : {}) }}>
        <span>{/["'“”‘’「」]/.test(s.variant.name) ? label : ""}</span>
      </span>
    );
  }
  return <span className="sq-pv-card" style={{ ...base, ...(s.padding ? { padding: s.padding } : {}) }} />;
}

/* ─────────── Main ─────────── */

export function ReferencePreview({
  tokens: rawTokens,
  overrides,
  labels = ITEM_EN.pv,
}: {
  tokens: ParsedTokens;
  overrides?: PreviewOverrides;
  /** Section names in the page's language; values stay as the reference writes them. */
  labels?: PreviewLabels;
}) {
  const tokens = applyOverrides(rawTokens, overrides);
  return (
    <div className="sq-pv">
      <Colors tokens={tokens} labels={labels} />
      <Typography tokens={tokens} labels={labels} />
      <Components tokens={tokens} labels={labels} />
    </div>
  );
}
