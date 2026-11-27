/**
 * Which references have an item page in a language besides English
 * (/<locale>/design-systems/<id>), and how a page in one locale links to an item.
 * Client-safe: no generated data is imported here, so the landing's search box and
 * keyboard can use it with the slice they already carry (country + tier).
 *
 * Every reference has its English page (/design-systems/<id>). The other editions
 * show the same canonical English DESIGN.md under that language's chrome, and each
 * covers a set chosen for the searches that language makes:
 *
 * - ko (growth plan P2, 2026-10-14): every Korean reference plus every verified one.
 *   Korean references are what "<브랜드> 디자인 시스템" searches ask for; a verified
 *   foreign reference has evidence-backed values to show under Korean chrome. A
 *   foreign partial or legacy snapshot has neither, and would be the thin
 *   near-duplicate page IA-PLAN Phase 3 warns about.
 * - ja (2026-11-27): the verified Japanese references, for 「<社名> デザインシステム」.
 *
 * `hasDetail` is the single source for each edition's static params, the hreflang
 * set on every edition, the sitemap and every link into a non-English page. If two
 * of those disagreed, a page would claim a twin that 404s. A new edition is one
 * entry in DETAIL_SCOPE (plus its chrome and page).
 */

export type QualityStatus = "verified_v2" | "partial" | "legacy_snapshot";

/** Languages with item pages of their own beside English. */
export type DetailLocale = "ko" | "ja";
export const DETAIL_LOCALES: readonly DetailLocale[] = ["ko", "ja"];

const DETAIL_SCOPE: Readonly<Record<DetailLocale, (country: string, verified: boolean) => boolean>> = {
  ko: (country, verified) => country === "KR" || verified,
  ja: (country, verified) => country === "JP" && verified,
};

export function isDetailLocale(locale: string): locale is DetailLocale {
  return (DETAIL_LOCALES as readonly string[]).includes(locale);
}

/** Whether the reference has an item page in `locale`. English and locales without editions: false. */
export function hasDetail(locale: string, country: string, status: QualityStatus | undefined): boolean {
  return isDetailLocale(locale) && DETAIL_SCOPE[locale](country, status === "verified_v2");
}

/** Same predicate over the search index's short tier code (v / p / l). */
export function hasDetailShort(locale: string, country: string, tier: "v" | "p" | "l"): boolean {
  return isDetailLocale(locale) && DETAIL_SCOPE[locale](country, tier === "v");
}

/** Item path in a locale (not URL-encoded; ids are slugs). */
export function detailPath(locale: "en" | DetailLocale, id: string): string {
  return locale === "en" ? `/design-systems/${id}` : `/${locale}/design-systems/${id}`;
}

/** Archive path for a landing locale. Only Korean has its own archive so far. */
export function catalogPathFor(locale: string): string {
  return locale === "ko" ? "/ko/design-systems" : "/design-systems";
}

/**
 * Item link from a page in `locale`: that locale's page when one exists
 * (`hasPage`, from hasDetail for the same locale), else the English page (which is
 * where every reference lives). URL-encoded for hrefs.
 */
export function detailHrefFor(locale: string, id: string, hasPage: boolean): string {
  const enc = encodeURIComponent(id);
  return isDetailLocale(locale) && hasPage ? `/${locale}/design-systems/${enc}` : `/design-systems/${enc}`;
}
