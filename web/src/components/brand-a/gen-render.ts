/**
 * Pure helpers for the gen-UI journey. Round 11: the DESIGN.md excerpt and the provenance tooltips
 * are derived from the screen's plan (journey/model.ts), so they list exactly the tokens the sample
 * screen consumes. The states row and its excerpt lines are gone (owner #11); a token the screen
 * needs but the reference lacks is not shown as a line, it is named in the plan's `omitted`.
 */
import type { Prov } from "@/lib/landing-a/resolve";
import { planTokens, type Plan, type Step } from "./journey/model";

const HEX = /^#[0-9a-f]{6}$/i;

export interface Line {
  readonly t: string;
  /** reveal step that reads it */
  readonly s: Step;
  /** the swatch shown after a colour value */
  readonly hex: string | null;
}

const pad = (k: string) => (k.length >= 25 ? `${k}  ` : k.padEnd(26, " "));

/** Excerpt: one line per consumed token in reveal order; a component's later fields read as `  .field`. */
export function lines(p: Plan): Line[] {
  let prev = "";
  return planTokens(p).map((t) => {
    const m = t.k.match(/^(components\.[^.]+)\.(.+)$/);
    const key = m && m[1] === prev ? `  .${m[2]}` : t.k;
    prev = m ? m[1] : "";
    return { t: pad(key) + t.v, s: t.step, hex: HEX.test(t.v) ? t.v : null };
  });
}

export type MethodKey = "css" | "both" | "doc" | "live";
export function methodKey(m: string): MethodKey {
  return /official/.test(m) ? (/computed/.test(m) ? "both" : "doc") : /computed/.test(m) ? "css" : "live";
}

export interface TipRow {
  readonly k: string;
  readonly v: string;
  readonly p: Prov | null;
  /** Source host differs from the button's. */
  readonly other: boolean;
}

/** Provenance rows per screen element. */
export function tips(p: Plan): Record<string, TipRow[]> {
  const bh = p.els.cta?.toks.find((t) => t.p)?.p?.[0] ?? null;
  const out: Record<string, TipRow[]> = {};
  for (const [id, el] of Object.entries(p.els)) out[id] = el.toks.map((t) => ({ k: t.k, v: t.v, p: t.p, other: !!(t.p && bh && t.p[0] !== bh) }));
  return out;
}

export function glyph(n: string) {
  const d = n.match(/^\d+/);
  if (d) return d[0];
  const m = n.match(/[぀-ヿ㐀-鿿가-힣]/);
  return m ? m[0] : n.trim()[0];
}
