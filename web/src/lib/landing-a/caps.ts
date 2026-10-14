import fs from "node:fs";
import path from "node:path";
import manifest from "@/data/brand-svg.json";
import heroCaps from "@/data/hero-caps.json";
import type { SiteLocale } from "@/lib/i18n/site-locales";
import { contrast, legendOn } from "./contrast";
import type { CapData, LogoCap } from "./types";

/**
 * Build-time cap resolver (round 5). Which companies sit on the hero keyboard is data
 * (data/hero-caps.json); what each cap shows is decided here from the brand-svg manifest:
 *   - a record with a stored logo whose every solid fill reads at 3:1 on the claimed
 *     colour → logo cap on that colour; else on its pale tint if that reads → logo cap
 *     (gradient or raster artwork, which the check cannot read, only ever goes on the pale tint);
 *   - otherwise → glyph cap (native first glyph, claimed colour, claimed weight).
 * So a JP/TW logo added to brand-svg.json replaces a glyph cap with no code change.
 * Server only (reads public/ SVGs).
 */

interface Variant { ref: string; source: string; license: string }
interface Rec { id: string; risk_tier?: string; default_variant?: string; variants: Record<string, Variant> }

const RECS = (manifest as unknown as { records: Rec[] }).records;
const REC_BY_ID = new Map(RECS.map((r) => [r.id, r]));
const PUBLIC = path.join(process.cwd(), "public");

export function svgText(src: string): string | null {
  try {
    return fs.readFileSync(path.join(PUBLIC, src), "utf8");
  } catch {
    return null;
  }
}

/** Solid hex fills in an SVG (gradients and embedded rasters are the brand's own artwork, not checked). */
export function solidFills(svg: string): string[] {
  const out = new Set<string>();
  for (const m of svg.matchAll(/fill(?:="|:)\s*(#[0-9a-f]{3,6})\b/gi)) {
    let h = m[1].toLowerCase();
    if (h.length === 4) h = "#" + [...h.slice(1)].map((c) => c + c).join("");
    out.add(h);
  }
  return [...out];
}

export function viewBoxRatio(svg: string): number {
  const vb = svg.match(/viewBox="([^"]+)"/)?.[1].trim().split(/[\s,]+/).map(Number);
  return vb && vb[3] > 0 ? vb[2] / vb[3] : 1;
}

/** A pale tint of a claimed colour (`k` of it over white). Decoration for the cap body only; never shown as a token. */
export function paleOf(hex: string, k = 0.16): string {
  const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return "#" + c.map((v) => Math.round(255 - (255 - v) * k).toString(16).padStart(2, "0")).join("");
}

/** The stored logo for an id: a named variant, else the manifest default. Only genuine, non-high-risk records with a file on disk. */
export function logoOf(id: string, prefer?: string): { src: string; variant: string; svg: string } | null {
  const rec = REC_BY_ID.get(id);
  if (!rec || rec.risk_tier === "high") return null;
  const names = [prefer, rec.default_variant, ...Object.keys(rec.variants)].filter((v): v is string => !!v && !!rec.variants[v]);
  for (const v of names) {
    const meta = rec.variants[v];
    if (!meta.source || !meta.license) continue;
    const src = "/" + meta.ref;
    const svg = svgText(src);
    if (svg) return { src, variant: v, svg };
  }
  return null;
}

const legible = (svg: string, on: string) => solidFills(svg).every((f) => contrast(f, on) >= 3);

type CapSet = { wide: string[][]; narrow: string[][] };
const SETS = heroCaps.sets as Record<string, CapSet>;
const VARIANTS = heroCaps.variants as Record<string, string>;

export function capSetFor(locale?: SiteLocale): CapSet {
  return (locale && SETS[locale]) || SETS.default;
}

/**
 * Hero caps for a locale. `cap` resolves a verified reference with a claimed colour
 * (data.server capData); an id that fails is dropped, never refilled with a guess.
 */
export function heroCapsFor(locale: SiteLocale | undefined, cap: (id: string) => CapData | null): LogoCap[] {
  const set = capSetFor(locale);
  const rowOf = (rows: string[][], id: string) => rows.findIndex((r) => r.includes(id));
  const ids = [...new Set([...set.wide.flat(), ...set.narrow.flat()])];
  const out: LogoCap[] = [];
  for (const id of ids) {
    const d = cap(id);
    if (!d?.hex) continue;
    const base = { id, n: d.n, nLang: d.nLang, rv: d.rv, row: rowOf(set.wide, id), mrow: rowOf(set.narrow, id), g: d.g, gLang: d.gLang, w: d.w };
    const logo = logoOf(id, VARIANTS[id]);
    // gradient or raster artwork has colours the 3:1 check cannot read: it goes on the pale tint only
    const unchecked = logo ? /url\(#|<image\b/.test(logo.svg) : false;
    const capHex = logo ? (unchecked ? [paleOf(d.hex)] : [d.hex, paleOf(d.hex)]).find((h) => legible(logo.svg, h)) : undefined;
    if (logo && capHex) {
      const ratio = viewBoxRatio(logo.svg);
      out.push({ ...base, kind: "logo", src: logo.src, ratio, wide: logo.variant !== "symbol" && ratio > 1.6, hex: capHex, on: legendOn(capHex) });
    } else {
      out.push({ ...base, kind: "glyph", src: "", ratio: 1, wide: false, hex: d.hex, on: legendOn(d.hex) });
    }
  }
  return out;
}

/** Picker chip logo: the symbol where one is stored, else the default variant; null → glyph chip. */
export function chipLogo(id: string): string | null {
  return logoOf(id, "symbol")?.src ?? null;
}
