/**
 * Which references have a Korean item page (/ko/design-systems/<id>), and how
 * a locale links to an item. Client-safe: no generated data is imported here,
 * so the landing's search box and keyboard can use it with the slice they
 * already carry (country + tier).
 *
 * Scope (growth plan P2, 2026-10-14): every Korean reference plus every
 * verified one. Korean references are what "<브랜드> 디자인 시스템" searches ask
 * for; a verified foreign reference has evidence-backed values to show under
 * Korean chrome. A foreign partial or legacy snapshot has neither, and would
 * be the thin near-duplicate page IA-PLAN Phase 3 warns about, so it keeps
 * only its English page and declares no Korean pair.
 *
 * This predicate is the single source for the Korean route's static params,
 * the hreflang pair on both pages, the sitemap and every link into a Korean
 * page. If two of those disagreed, a page would claim a twin that 404s.
 */

export type QualityStatus = "verified_v2" | "partial" | "legacy_snapshot";

export function hasKoDetail(country: string, status: QualityStatus | undefined): boolean {
  return country === "KR" || status === "verified_v2";
}

/** Same predicate over the search index's short tier code (v / p / l). */
export function hasKoDetailShort(country: string, tier: "v" | "p" | "l"): boolean {
  return country === "KR" || tier === "v";
}

export const KO_CATALOG_PATH = "/ko/design-systems";

export function enDetailPath(id: string): string {
  return `/design-systems/${id}`;
}

export function koDetailPath(id: string): string {
  return `${KO_CATALOG_PATH}/${id}`;
}

/** Archive path for a landing locale. Only Korean has its own archive so far. */
export function catalogPathFor(locale: string): string {
  return locale === "ko" ? KO_CATALOG_PATH : "/design-systems";
}

/**
 * Item link from a page in `locale`: the Korean page when one exists, else the
 * English page (which is where every reference lives). URL-encoded for hrefs.
 */
export function detailHrefFor(locale: string, id: string, koPage: boolean): string {
  const enc = encodeURIComponent(id);
  return locale === "ko" && koPage ? `${KO_CATALOG_PATH}/${enc}` : `/design-systems/${enc}`;
}
