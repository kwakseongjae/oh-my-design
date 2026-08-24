import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { REGISTRY, type RefEntry } from "@/data/registry.generated";
import {
  REFERENCE_QUALITY_BY_ID,
  type ReferenceQualityEntry,
} from "@/data/reference-quality.generated";
import { normalizeReference } from "./normalize";
import type { ReferenceAst } from "./schema";
import { REFERENCE_VERIFICATION_BY_ID } from "@/data/reference-verification.generated";

const REGISTRY_BY_ID: ReadonlyMap<string, RefEntry> = new Map(
  REGISTRY.map((entry) => [entry.id, entry]),
);

export interface LoadedReference {
  readonly entry: RefEntry;
  readonly quality: ReferenceQualityEntry;
  readonly markdown: string;
  readonly ast: ReferenceAst;
  /** Which tree served the markdown — "canonical" unless the v2 preview flag found a migrated copy. */
  readonly source: "canonical" | "migrated-preview";
}

/**
 * Core v2 preview switch. `OMD_REFS_SOURCE=v2` serves the migrated Core v2
 * document when one exists, falling back to canonical per id — so a
 * half-migrated catalog previews as exactly that, not as an error. Identity
 * metadata (registry entry, quality) always comes from canonical: the
 * migration moved identity into provenance sidecars, and the registry remains
 * its single reader until adoption.
 *
 * Search order: `references-next/` under the web root (production preview,
 * committed) first, then the migration working trees outside the web root
 * (local dev only — those paths do not exist in a deployed bundle).
 */
function migratedMarkdownPath(id: string, projectRoot: string): string | null {
  if (process.env.OMD_REFS_SOURCE !== "v2") return null;
  const candidates = [
    join(projectRoot, "references-next", id, "DESIGN.md"),
    join(projectRoot, "..", "docs", "design-md-weight", "migrated", id, "DESIGN.md"),
    join(projectRoot, "..", "docs", "design-md-weight", "golden-samples", id, "DESIGN.md"),
  ];
  for (const candidate of candidates) {
    if (existsSync(candidate)) return candidate;
  }
  return null;
}

/**
 * Server-only canonical read boundary. Looking up the registry before joining
 * the path prevents arbitrary path traversal and guarantees that raw markdown,
 * registry metadata, and generated quality are normalized as one unit.
 */
export function loadReference(id: string, projectRoot = process.cwd()): LoadedReference | null {
  const entry = REGISTRY_BY_ID.get(id);
  if (!entry) return null;

  const quality = REFERENCE_QUALITY_BY_ID[id];
  if (!quality) throw new Error(`Reference quality entry is missing for ${id}`);

  const canonicalPath = join(projectRoot, "references", entry.id, "DESIGN.md");
  if (!existsSync(canonicalPath)) return null;
  const canonicalMarkdown = readFileSync(canonicalPath, "utf8");

  // The preview swaps only the served body. The AST keeps normalising the
  // canonical document: a Core v2 body has no frontmatter, the normaliser
  // rightly refuses documents without one, and every AST consumer is reading
  // identity that still lives on the canonical side until adoption.
  const migratedPath = migratedMarkdownPath(entry.id, projectRoot);
  const markdown = migratedPath ? readFileSync(migratedPath, "utf8") : canonicalMarkdown;

  return {
    entry,
    quality,
    markdown,
    source: migratedPath ? "migrated-preview" : "canonical",
    ast: normalizeReference({
      entry,
      quality,
      markdown: canonicalMarkdown,
      verificationV2: REFERENCE_VERIFICATION_BY_ID[id],
    }),
  };
}
