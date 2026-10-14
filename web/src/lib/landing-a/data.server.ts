import { REGISTRY, REGISTRY_BY_ID, type RefEntry } from "@/data/registry.generated";
import { REFERENCE_QUALITY_BY_ID, REFERENCE_QUALITY_COUNTS } from "@/data/reference-quality.generated";
import { REFERENCE_VERIFICATION_BY_ID } from "@/data/reference-verification.generated";
import { SKILL_COUNT } from "@/data/catalog-meta.generated";
import type { SiteLocale } from "@/lib/i18n/site-locales";
import fs from "node:fs";
import path from "node:path";
import { GEN_UI_IDS, GEN_UI_PREFERRED_BUTTON, HERO_LOGOS, HERO_ROWS } from "./picks";
import { CJK_RE, glyphOf, keycapTraits, nativeName, resolveSlots, type TokensLike } from "./resolve";
import type { CapData, GenSpec, LandingData, LandingFacts, LogoCap } from "./types";

/**
 * Build-time loader for the landing. Reads the generated registry, quality
 * manifest and verification graph (server only — see
 * lib/client-registry-boundary.test.ts) and hands the client components only
 * the slice they render.
 */

const STATUS = { verified_v2: "v", partial: "p", legacy_snapshot: "l" } as const;
const CC_LANG: Record<string, string> = { KR: "ko", JP: "ja", TW: "zh-Hant", CN: "zh-Hans" };

const statusOf = (id: string) => STATUS[REFERENCE_QUALITY_BY_ID[id]?.status ?? "legacy_snapshot"];
const isVerified = (id: string) => REFERENCE_QUALITY_BY_ID[id]?.status === "verified_v2";

export function getFacts(): LandingFacts {
  const cnt: Record<string, number> = {};
  const ver: Record<string, number> = {};
  for (const r of REGISTRY) {
    cnt[r.country] = (cnt[r.country] ?? 0) + 1;
    if (isVerified(r.id)) ver[r.country] = (ver[r.country] ?? 0) + 1;
  }
  const cjk = (cnt.KR ?? 0) + (cnt.TW ?? 0) + (cnt.JP ?? 0) + (cnt.CN ?? 0);
  const total = REGISTRY.length;
  const legacyProse = REGISTRY.filter((r) => {
    const q = REFERENCE_QUALITY_BY_ID[r.id];
    return q?.status === "legacy_snapshot" && q.reasonCodes.includes("token_source_unverified");
  }).length;
  return {
    total,
    countries: Object.keys(cnt).length,
    cnt,
    ver,
    tiers: { v: REFERENCE_QUALITY_COUNTS.verified_v2, p: REFERENCE_QUALITY_COUNTS.partial, l: REFERENCE_QUALITY_COUNTS.legacy_snapshot },
    cjk,
    cjkPct: Math.round((cjk / total) * 100),
    skills: SKILL_COUNT,
    legacyProse,
    tossChk: (REFERENCE_VERIFICATION_BY_ID.toss?.checked ?? "").slice(0, 10),
    tossNext: REFERENCE_QUALITY_BY_ID.toss?.nextReverifyAt ?? "",
  };
}

function latinAlt(r: RefEntry, shown: string): string | null {
  return [r.name, r.displayName].find((s) => s && !CJK_RE.test(s) && s !== shown) ?? null;
}

function glyphLang(g: string, cc: string): string {
  if (/^\d/.test(g) || !CJK_RE.test(g)) return "en";
  return CC_LANG[cc] ?? "en";
}

export function capData(id: string): CapData | null {
  const r = REGISTRY_BY_ID[id];
  if (!r) return null;
  const ver = REFERENCE_VERIFICATION_BY_ID[id];
  const verified = isVerified(id);
  const k = verified ? keycapTraits(r.tokens as TokensLike, ver) : { role: null, hex: null, rk: null, rv: null, w: null, wk: null };
  const n = nativeName(r.name, r.displayName);
  const g = glyphOf(n);
  return {
    id,
    n,
    nLang: CJK_RE.test(n) ? (CC_LANG[r.country] ?? "en") : "en",
    alt: latinAlt(r, n),
    g,
    gLang: glyphLang(g, r.country),
    c: r.country,
    s: statusOf(id),
    role: k.role,
    hex: k.hex,
    chk: ver?.checked?.slice(0, 10) ?? null,
    sf: ver?.surfaces?.length ?? 0,
    rk: k.rk,
    rv: k.rv,
    w: k.w,
    wk: k.wk,
  };
}


/** A pale tint of a claimed colour (`k` of it over white). Decoration for the cap body only; never shown as a token. */
export function paleOf(hex: string, k = 0.16): string {
  const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return "#" + c.map((v) => Math.round(255 - (255 - v) * k).toString(16).padStart(2, "0")).join("");
}

function viewBoxRatio(src: string): number {
  const svg = fs.readFileSync(path.join(process.cwd(), "public", src), "utf8");
  const vb = svg.match(/viewBox="([^"]+)"/)?.[1].trim().split(/[\s,]+/).map(Number);
  return vb && vb[3] > 0 ? vb[2] / vb[3] : 1;
}

/**
 * Hero caps (round 4): verified references engraved with their genuine logo (picks.ts
 * HERO_LOGOS). A pick that stops being verified or loses its claimed colour is dropped,
 * never refilled with a glyph cap or a guessed colour.
 */
export function getHeroLogos(): LogoCap[] {
  const rowOf = (rows: readonly (readonly string[])[], id: string) => rows.findIndex((r) => r.includes(id));
  const out: LogoCap[] = [];
  for (const p of HERO_LOGOS) {
    if (!isVerified(p.id)) continue;
    const d = capData(p.id);
    if (!d?.hex) continue;
    const src = `/brand-svg/${p.id}/${p.v}.svg`;
    const ratio = viewBoxRatio(src);
    out.push({
      id: p.id,
      n: d.n,
      nLang: d.nLang,
      src,
      ratio,
      wide: p.v !== "symbol" && ratio > 1.6,
      hex: p.cap === "pale" ? paleOf(d.hex) : d.hex,
      rv: d.rv,
      row: rowOf(HERO_ROWS.wide, p.id),
      mrow: rowOf(HERO_ROWS.narrow, p.id),
    });
  }
  return out;
}

export function genSpec(id: string): GenSpec | null {
  const r = REGISTRY_BY_ID[id];
  const q = REFERENCE_QUALITY_BY_ID[id];
  const ver = REFERENCE_VERIFICATION_BY_ID[id];
  if (!r || !q || q.status !== "verified_v2" || !ver) return null;
  const slots = resolveSlots(r.tokens as TokensLike, ver, { preferButton: GEN_UI_PREFERRED_BUTTON[id] });
  const name = nativeName(r.name, r.displayName);
  return {
    id,
    cc: r.country,
    name,
    nLang: CJK_RE.test(name) ? (CC_LANG[r.country] ?? "en") : "en",
    alt: r.name,
    ...slots,
    stats: {
      claims: `${q.evidenceClaimCount}/${q.claimCount}`,
      sf: q.surfaceCount,
      src: q.sourceCount,
      t1: q.tier1SourceCount,
      chk: (ver.checked ?? "").slice(0, 10),
      next: q.nextReverifyAt ?? "",
    },
  };
}

export function getLandingData(_locale?: SiteLocale): LandingData {
  return {
    facts: getFacts(),
    hero: getHeroLogos(),
    gen: GEN_UI_IDS.map(genSpec).filter((s): s is GenSpec => !!s),
  };
}

/** Typeahead index over every reference — served as a static JSON file, fetched on first focus. */
export function getSearchIndex() {
  return REGISTRY.map((r) => {
    const o: { i: string; n: string; c: string; s: string; d?: string } = { i: r.id, n: r.name, c: r.country, s: statusOf(r.id) };
    if (r.displayName && r.displayName !== r.name) o.d = r.displayName;
    return o;
  });
}
