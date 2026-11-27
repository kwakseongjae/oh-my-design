/**
 * The Korean edition's names for the shared item-page rules (detail-locales.ts):
 * every Korean reference plus every verified one has /ko/design-systems/<id>.
 * Client-safe.
 */

import { catalogPathFor, detailHrefFor, detailPath, hasDetail, hasDetailShort, type QualityStatus } from "./detail-locales";

export type { QualityStatus };
export { catalogPathFor, detailHrefFor };

export function hasKoDetail(country: string, status: QualityStatus | undefined): boolean {
  return hasDetail("ko", country, status);
}

/** Same predicate over the search index's short tier code (v / p / l). */
export function hasKoDetailShort(country: string, tier: "v" | "p" | "l"): boolean {
  return hasDetailShort("ko", country, tier);
}

export const KO_CATALOG_PATH = catalogPathFor("ko");

export function enDetailPath(id: string): string {
  return detailPath("en", id);
}

export function koDetailPath(id: string): string {
  return detailPath("ko", id);
}
