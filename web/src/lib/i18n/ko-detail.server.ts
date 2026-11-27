/**
 * The Korean edition's names for the shared server-side item-page rules
 * (detail-locales.server.ts). Server-only: reads the generated registry.
 */

import { DETAIL_IDS, detailName, hasDetailId } from "./detail-locales.server";

/** Ids with a Korean page, in registry order. */
export const KO_DETAIL_IDS: readonly string[] = DETAIL_IDS.ko;

export function hasKoDetailId(id: string): boolean {
  return hasDetailId("ko", id);
}

/** The registry `displayName` when it is written in Hangul, otherwise the registry `name`. */
export function koName(id: string): string {
  return detailName("ko", id);
}
