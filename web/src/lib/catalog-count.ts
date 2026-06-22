import { REGISTRY } from "@/data/registry.generated";

/**
 * Single import hub for catalog counts. Import all three from here so no surface
 * hardcodes a number again.
 *
 * These were previously hand-maintained literals ("221" references, "17 skills",
 * "16 sub-agents") scattered across dozens of surfaces; only the reference count
 * was partially synced by scripts/sync-catalog.mjs, so the rest drifted. Now:
 *   - REFERENCE_COUNT derives from the generated REGISTRY (no step needed).
 *   - SKILL_COUNT / SUBAGENT_COUNT are emitted by scripts/build-registry.mjs into
 *     catalog-meta.generated.ts (sources mirror what npm actually ships).
 * Static files that can't import TS (README, llms.txt) are kept honest by
 * scripts/sync-catalog.mjs + the scripts/check-counts.mjs drift guard.
 */
export const REFERENCE_COUNT = REGISTRY.length;
export { SKILL_COUNT, SUBAGENT_COUNT } from "@/data/catalog-meta.generated";
