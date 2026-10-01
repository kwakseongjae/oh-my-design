/**
 * Single import hub for catalog counts. Import all three from here so no surface
 * hardcodes a number again.
 *
 * These were previously hand-maintained literals ("221" references, "17 skills",
 * "16 sub-agents") scattered across dozens of surfaces; only the reference count
 * was partially synced by scripts/sync-catalog.mjs, so the rest drifted. Now all
 * three are emitted by scripts/build-registry.mjs into catalog-meta.generated.ts:
 *   - REFERENCE_COUNT is REGISTRY.length written as a literal. It used to be
 *     derived here from REGISTRY, which made every client component that printed
 *     the count (builder selector, install CTA, catalog) bundle the whole 2 MB
 *     registry. catalog-count.test.ts asserts the literal still equals
 *     REGISTRY.length.
 *   - SKILL_COUNT / SUBAGENT_COUNT mirror what npm actually ships.
 * Static files that can't import TS (README, llms.txt) are kept honest by
 * scripts/sync-catalog.mjs + the scripts/check-counts.mjs drift guard.
 */
export { REFERENCE_COUNT, SKILL_COUNT, SUBAGENT_COUNT } from "@/data/catalog-meta.generated";
