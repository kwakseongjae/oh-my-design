import { REGISTRY } from "@/data/registry.generated";

/**
 * Single source of truth for the public reference count.
 *
 * This number was previously hardcoded as a literal ("221") across ~11 surfaces
 * and only a subset was kept in sync by scripts/sync-catalog.mjs (an incremental
 * old→new string replace over a fixed file list). Files outside that list froze
 * at whatever count they were last written with, so the UI drifted behind the
 * real catalog. Deriving from the generated REGISTRY means every surface always
 * shows the true server value — no sync step, no drift.
 */
export const REFERENCE_COUNT = REGISTRY.length;
