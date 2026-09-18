import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * The legacy source for a reference, wherever it currently lives.
 *
 * The catalog data plane is built from YAML frontmatter: country, category,
 * homepage, logo, verified date, token maps. Core v2 does not model any of
 * that — it describes a design system, not a catalog entry — so an adopted
 * canonical has no frontmatter and every builder that reads one died on it
 * (`build-registry.mjs`, `build-reference-ast.ts`).
 *
 * None of it was lost. The migration preserves every original segment in
 * `extensions["dev.oh-my-design.migration"].original_segments`, and their
 * concatenation reproduces the pre-adoption file byte for byte — that is what
 * `source_reconstruction_equal` has been asserting all along. The readers were
 * not missing data; they were looking in the only place it is no longer kept.
 *
 * So this returns the legacy bytes either way: straight from disk for a
 * reference that has not been adopted, rebuilt from its package for one that
 * has. The rebuild is checked against the hash the migration recorded, so a
 * caller gets the original or an error — never a plausible reconstruction.
 *
 * This is deliberately *not* how the site renders an adopted reference. The web
 * readers consume the Core package through `repository.server.ts`, which is the
 * point of adopting. This is for the build pipeline, whose job is catalog
 * metadata the Core format does not carry.
 */

const MIGRATION_EXTENSION = "dev.oh-my-design.migration";
const CORE_MARKER = "<!-- design-md:section ";

/** True when a DESIGN.md is an adopted Core v2 canonical rather than legacy. */
export function isCoreV2Markdown(markdown) {
  return markdown.includes(CORE_MARKER);
}

/**
 * @param {string} referenceDir directory holding DESIGN.md (and `.omd/system/` once adopted)
 * @returns {{ markdown: string, format: "legacy" | "core-v2", reconstructed: boolean }}
 */
export function readReferenceSource(referenceDir) {
  const designPath = join(referenceDir, "DESIGN.md");
  const onDisk = readFileSync(designPath, "utf8");
  if (!isCoreV2Markdown(onDisk)) {
    return { markdown: onDisk, format: "legacy", reconstructed: false };
  }

  const graphPath = join(referenceDir, ".omd", "system", "graph.json");
  if (!existsSync(graphPath)) {
    throw new Error(
      `${designPath}: adopted Core v2 canonical without ${graphPath}. `
      + "The legacy source lives in the package's migration extension, so without the package "
      + "there is nothing to rebuild the catalog entry from.",
    );
  }

  const graph = JSON.parse(readFileSync(graphPath, "utf8"));
  const migration = graph?.extensions?.[MIGRATION_EXTENSION];
  const segments = migration?.original_segments;
  if (!Array.isArray(segments) || segments.length === 0) {
    throw new Error(
      `${graphPath}: no preserved original segments. This package cannot reproduce the legacy `
      + "source, so the reference's catalog metadata is unrecoverable from it.",
    );
  }

  const markdown = segments.map((segment) => String(segment.content ?? "")).join("");
  const actual = createHash("sha256").update(markdown).digest("hex");
  if (actual !== migration.source_sha256) {
    throw new Error(
      `${graphPath}: rebuilt legacy source does not match the recorded hash `
      + `(expected ${migration.source_sha256}, got ${actual}). Refusing to build catalog data from it.`,
    );
  }

  return { markdown, format: "core-v2", reconstructed: true };
}
