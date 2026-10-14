/**
 * Server side of the Korean item pages: the id set and the Korean display name.
 * Reads the generated registry and quality table, so it stays out of client
 * bundles (lib/client-registry-boundary.test.ts).
 */

import { REGISTRY, REGISTRY_BY_ID } from "@/data/registry.generated";
import { REFERENCE_QUALITY_BY_ID } from "@/data/reference-quality.generated";
import { hasKoDetail } from "./ko-detail";

const HANGUL = /[가-힣]/;

/** Ids with a Korean page, in registry order. */
export const KO_DETAIL_IDS: readonly string[] = REGISTRY
  .filter((r) => hasKoDetail(r.country, REFERENCE_QUALITY_BY_ID[r.id]?.status))
  .map((r) => r.id);

const KO_SET = new Set(KO_DETAIL_IDS);

export function hasKoDetailId(id: string): boolean {
  return KO_SET.has(id);
}

/**
 * The name a Korean page calls the brand: the registry `displayName` when it is
 * written in Hangul, otherwise the registry `name`. Never a transliteration or a
 * search alias — a Korean name appears only where the reference itself records
 * one. (`nativeName()` in landing-a/resolve.ts prefers any CJK script, which
 * would put katakana on a Korean page, so it is not used here.)
 */
export function koName(id: string): string {
  const r = REGISTRY_BY_ID[id];
  if (!r) return id;
  if (r.displayName && HANGUL.test(r.displayName)) return r.displayName;
  return r.name || r.displayName || id;
}
