import { REGISTRY, REGISTRY_BY_ID, type RefEntry } from "@/data/registry.generated";
import { REFERENCE_QUALITY_BY_ID, REFERENCE_QUALITY_COUNTS } from "@/data/reference-quality.generated";
import { REFERENCE_VERIFICATION_BY_ID } from "@/data/reference-verification.generated";
import { SKILL_COUNT } from "@/data/catalog-meta.generated";
import type { SiteLocale } from "@/lib/i18n/site-locales";
import { GEN_UI_IDS, GEN_UI_PREFERRED_BUTTON, HERO_IDS, REGION_IDS, REGION_ORDER } from "./picks";
import { CJK_RE, glyphOf, keycapTraits, nativeName, resolveSlots, type TokensLike } from "./resolve";
import type { CapData, GenSpec, LandingData, LandingFacts, RegionCC } from "./types";

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

/** Verified refs with a claimed colour and a native name, by region — the refill pool. */
function pool(cc: string, exclude: Set<string>): string[] {
  return REGISTRY.filter((r) => r.country === cc && !exclude.has(r.id) && isVerified(r.id))
    .map((r) => capData(r.id)!)
    .filter((d) => d.hex && d.n !== REGISTRY_BY_ID[d.id].name)
    .map((d) => d.id);
}

/** Hero caps, interleaved by the locale's region order. A curated id that no longer has a claimed colour is replaced from its region. */
export function getHeroCaps(locale: SiteLocale): CapData[] {
  const picked = new Set<string>();
  const by: Record<string, CapData[]> = {};
  for (const id of HERO_IDS) {
    const r = REGISTRY_BY_ID[id];
    let d = r && isVerified(id) ? capData(id) : null;
    if (!d?.hex) {
      const cc = r?.country ?? "KR";
      const alt = pool(cc, new Set([...picked, ...HERO_IDS]))[0];
      d = alt ? capData(alt) : null;
    }
    if (!d?.hex) continue;
    picked.add(d.id);
    (by[d.c] ??= []).push(d);
  }
  const out: CapData[] = [];
  let more = true;
  while (more) {
    more = false;
    for (const c of REGION_ORDER[locale]) {
      const q = by[c];
      if (q?.length) {
        out.push(q.shift()!);
        more = true;
      }
    }
  }
  return out;
}

export function getRegions(): Record<RegionCC, CapData[]> {
  const out = {} as Record<RegionCC, CapData[]>;
  for (const cc of ["KR", "JP", "TW"] as const) {
    const list = REGION_IDS[cc].map((id) => (isVerified(id) ? capData(id) : null)).filter((d): d is CapData => !!d);
    const used = new Set(list.map((d) => d.id));
    for (const id of pool(cc, used)) {
      if (list.length >= 4) break;
      list.push(capData(id)!);
    }
    out[cc] = list.slice(0, 4);
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

export function getLandingData(locale: SiteLocale): LandingData {
  return {
    facts: getFacts(),
    hero: getHeroCaps(locale),
    regions: getRegions(),
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
