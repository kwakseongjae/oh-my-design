import { REGISTRY, REGISTRY_BY_ID, type RefEntry } from "@/data/registry.generated";
import { REFERENCE_QUALITY_BY_ID, REFERENCE_QUALITY_COUNTS } from "@/data/reference-quality.generated";
import { REFERENCE_VERIFICATION_BY_ID } from "@/data/reference-verification.generated";
import { SKILL_COUNT } from "@/data/catalog-meta.generated";
import type { SiteLocale } from "@/lib/i18n/site-locales";
import { chipLogo, heroCapsFor } from "./caps";
import { GEN_UI_IDS, GEN_UI_PREFERRED_BUTTON, GEN_UI_PREFERRED_CARD } from "./picks";
import { CJK_RE, glyphOf, keycapTraits, resolveSlots, type TokensLike } from "./resolve";
import { siteName } from "@/lib/i18n/display-name";
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

/** `locale` picks the brand name (lib/i18n/display-name.ts): Hangul display names on Korean pages only. */
export function capData(id: string, locale: SiteLocale | "en" = "en"): CapData | null {
  const r = REGISTRY_BY_ID[id];
  if (!r) return null;
  const ver = REFERENCE_VERIFICATION_BY_ID[id];
  const verified = isVerified(id);
  const k = verified ? keycapTraits(r.tokens as TokensLike, ver) : { role: null, hex: null, rk: null, rv: null, w: null, wk: null };
  const n = siteName(r, locale);
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


/**
 * Hero caps (round 5): the per-locale cap set in data/hero-caps.json, resolved by caps.ts
 * (logo cap when brand-svg.json holds a legible genuine logo, else glyph cap). Only
 * verified references with a claimed colour qualify; one that fails is dropped, never
 * refilled with a guessed colour.
 */
export function getHeroCaps(locale?: SiteLocale): LogoCap[] {
  return heroCapsFor(locale, (id) => (isVerified(id) ? capData(id, locale ?? "en") : null));
}

export function genSpec(id: string, locale: SiteLocale | "en" = "en"): GenSpec | null {
  const r = REGISTRY_BY_ID[id];
  const q = REFERENCE_QUALITY_BY_ID[id];
  const ver = REFERENCE_VERIFICATION_BY_ID[id];
  if (!r || !q || q.status !== "verified_v2" || !ver) return null;
  const slots = resolveSlots(r.tokens as TokensLike, ver, { preferButton: GEN_UI_PREFERRED_BUTTON[id], preferCard: GEN_UI_PREFERRED_CARD[id] });
  const name = siteName(r, locale);
  return {
    id,
    cc: r.country,
    name,
    nLang: CJK_RE.test(name) ? (CC_LANG[r.country] ?? "en") : "en",
    alt: r.name,
    logo: chipLogo(id),
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

export function getLandingData(locale?: SiteLocale): LandingData {
  return {
    facts: getFacts(),
    hero: getHeroCaps(locale),
    gen: GEN_UI_IDS.map((id) => genSpec(id, locale ?? "en")).filter((s): s is GenSpec => !!s),
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
