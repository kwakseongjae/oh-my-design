/**
 * Server side of the non-English item pages: each edition's id set, the name it
 * calls a brand by, and the hreflang set every edition of a reference declares.
 * Reads the generated registry and quality table, so it stays out of client
 * bundles (lib/client-registry-boundary.test.ts).
 */

import { REGISTRY, REGISTRY_BY_ID } from "@/data/registry.generated";
import { REFERENCE_QUALITY_BY_ID } from "@/data/reference-quality.generated";
import type { SiteLocale } from "./site-locales";
import { DETAIL_LOCALES, detailPath, hasDetail, isDetailLocale, type DetailLocale } from "./detail-locales";

function byLocale<T>(f: (locale: DetailLocale) => T): Record<DetailLocale, T> {
  const out = {} as Record<DetailLocale, T>;
  for (const l of DETAIL_LOCALES) out[l] = f(l);
  return out;
}

/** Ids with a page in each locale, in registry order. */
export const DETAIL_IDS: Readonly<Record<DetailLocale, readonly string[]>> = byLocale((l) =>
  REGISTRY.filter((r) => hasDetail(l, r.country, REFERENCE_QUALITY_BY_ID[r.id]?.status)).map((r) => r.id),
);

const DETAIL_SETS: Readonly<Record<DetailLocale, ReadonlySet<string>>> = byLocale((l) => new Set(DETAIL_IDS[l]));

export function hasDetailId(locale: string, id: string): boolean {
  return isDetailLocale(locale) && DETAIL_SETS[locale].has(id);
}

/** The editions a reference has besides English, in DETAIL_LOCALES order. */
export function detailLocalesOf(id: string): DetailLocale[] {
  return DETAIL_LOCALES.filter((l) => DETAIL_SETS[l].has(id));
}

/**
 * The script a page's own brand name must be written in. A registry `displayName`
 * in that script is the brand's own name for those readers; anything else falls
 * back to the registry `name`. Hangul only for ko; kana or kanji (and no Hangul)
 * for ja.
 */
const NATIVE_SCRIPT: Readonly<Record<DetailLocale, (s: string) => boolean>> = {
  ko: (s) => /[가-힣]/.test(s),
  ja: (s) => /[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}]/u.test(s) && !/[가-힣]/.test(s),
};

/**
 * The name a page in `locale` calls the brand: the registry `displayName` when it is
 * written in that locale's script, otherwise the registry `name`. Never a
 * transliteration or a search alias: a native name appears only where the reference
 * itself records one. (`nativeName()` in landing-a/resolve.ts prefers any CJK
 * script, which would put katakana on a Korean page, so it is not used here.)
 */
export function detailName(locale: DetailLocale, id: string): string {
  const r = REGISTRY_BY_ID[id];
  if (!r) return id;
  if (r.displayName && NATIVE_SCRIPT[locale](r.displayName)) return r.displayName;
  return r.name || r.displayName || id;
}

/**
 * The hreflang set every edition of `id` declares, in head metadata and the sitemap:
 * the English page, each edition that exists, and x-default → English. `base` is
 * prepended for absolute URLs (sitemap).
 */
export function detailAlternates(id: string, base = ""): Record<string, string> {
  const en = `${base}${detailPath("en", id)}`;
  const out: Record<string, string> = { en };
  for (const l of detailLocalesOf(id)) out[l] = `${base}${detailPath(l, id)}`;
  out["x-default"] = en;
  return out;
}

/** The header language switch's targets on an item page: every edition the reference has. */
export function detailLocaleHrefs(id: string): Partial<Record<SiteLocale, string>> {
  const out: Partial<Record<SiteLocale, string>> = { en: detailPath("en", id) };
  for (const l of detailLocalesOf(id)) out[l] = detailPath(l, id);
  return out;
}
