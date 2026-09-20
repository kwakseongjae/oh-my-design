import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import yaml from "js-yaml";

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
/**
 * Catalog metadata for a reference authored as Core v2 from the start.
 *
 * Core v2 describes a design system. It deliberately does not model a catalog
 * entry — country, category, `added`, the logo slug, the `verification_v2`
 * evidence graph are facts about this repository's listing, not about the
 * brand's system. Until now the only Core references were *migrated* ones,
 * where `original_segments` happened to carry all of that as preserved bytes.
 * A reference written natively has no migration and therefore nothing to
 * reconstruct, and every reader in the build pipeline threw on it. That is what
 * blocked spec §10 stage 5, "future references written directly as Core v2".
 *
 * So a native package declares it. The spec makes extensions "the only portable
 * expansion point" (§6) and §11 says a linter should reject new frontmatter, so
 * this is where the data belongs — it is not a Core field and must not become
 * one. `tokens` and `verification_v2` are carried verbatim rather than derived
 * from `foundations`: the graph is not yet authoritative for them, and deriving
 * them is the projection-parity problem, not this one.
 */
const CATALOG_EXTENSION = "dev.oh-my-design.catalog";
const CORE_MARKER = "<!-- design-md:section ";

/** True when a DESIGN.md is an adopted Core v2 canonical rather than legacy. */
export function isCoreV2Markdown(markdown) {
  return markdown.includes(CORE_MARKER);
}

/**
 * @param {string} referenceDir directory holding DESIGN.md (and `.omd/system/` once adopted)
 * @returns {{ markdown: string, format: "legacy" | "core-v2", reconstructed: boolean, projected: boolean }}
 *   `reconstructed` — rebuilt from preserved original bytes and hash-checked.
 *   `projected` — rendered from catalog metadata the package declares. Exactly
 *   one of the two is true for a Core package; both are false for a legacy file.
 */
export function readReferenceSource(referenceDir) {
  const designPath = join(referenceDir, "DESIGN.md");
  const onDisk = readFileSync(designPath, "utf8");
  if (!isCoreV2Markdown(onDisk)) {
    return { markdown: onDisk, format: "legacy", reconstructed: false, projected: false };
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

  // Precedence: a migrated package wins whenever it is present, because
  // rebuilding the original bytes and checking them against a recorded hash is
  // a stronger guarantee than any projection. A package can carry both — an
  // adopted reference gains the catalog extension going forward, and that
  // overlap is the path to eventually dropping `original_segments` altogether.
  // While both exist they must agree, which is asserted in
  // web/__tests__/catalog-integrity.test.ts rather than trusted here.
  if (!Array.isArray(segments) || segments.length === 0) {
    const catalog = graph?.extensions?.[CATALOG_EXTENSION]?.frontmatter;
    if (catalog && typeof catalog === "object" && !Array.isArray(catalog)) {
      return { markdown: projectLegacySource(catalog, onDisk), format: "core-v2", reconstructed: false, projected: true };
    }
    throw new Error(
      `${graphPath}: no preserved original segments and no ${CATALOG_EXTENSION} extension. `
      + "This package cannot produce the reference's catalog metadata — a migrated package "
      + "carries it in original_segments, a native one declares it in the catalog extension.",
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

  return { markdown, format: "core-v2", reconstructed: true, projected: false };
}

/**
 * Serialise declared catalog metadata as the YAML frontmatter every reader
 * already parses, in front of the Core body.
 *
 * This is a projection, not a reconstruction, and the difference is the whole
 * contract above: a migrated package returns the original bytes or an error,
 * while this returns a rendering of data the package states outright. There is
 * no hash to check because there is no earlier version to be faithful to.
 *
 * `JSON_SCHEMA` on the way out matters. The default schema emits a bare
 * `2026-07-11` that the same library reads back as a Date, and every date in
 * this pipeline — `verified`, `added`, `captured` — is compared as a string.
 */
function projectLegacySource(frontmatter, coreBody) {
  const block = yaml.dump(frontmatter, { schema: yaml.JSON_SCHEMA, lineWidth: -1, noRefs: true });
  return `---\n${block}---\n\n${coreBody.replace(/^\uFEFF/, "")}`;
}
