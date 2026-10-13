import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { REGISTRY, type RefEntry } from "@/data/registry.generated";
import {
  REFERENCE_QUALITY_BY_ID,
  type ReferenceQualityEntry,
} from "@/data/reference-quality.generated";
import { normalizeReference } from "./normalize";
import type { ReferenceAst } from "./schema";
import { REFERENCE_VERIFICATION_BY_ID } from "@/data/reference-verification.generated";
import { isCoreV2Document } from "./detail-projection";
import {
  loadCoreConsumerContract,
  type CoreConsumerContractAdmission,
} from "./core-consumer-contract";
import { verifyCanonicalCorePackage } from "./core-canonical-verifier.server";
// DESIGN.md v3 (spec/design-md-v3.md §12.2): the runtime twin of web/scripts/lib/reference-source.mjs.
import { parseV3, projectLegacyMarkdown } from "../../../scripts/lib/design-md-v3.mjs";

const REGISTRY_BY_ID: ReadonlyMap<string, RefEntry> = new Map(
  REGISTRY.map((entry) => [entry.id, entry]),
);

export interface LoadedReference {
  readonly entry: RefEntry;
  readonly quality: ReferenceQualityEntry;
  readonly markdown: string;
  /**
   * The legacy-shaped source the AST and the legacy detail adapter read. For a DESIGN.md v3 file it
   * is the frontmatter projected from the v3 tokens and reference.json, in front of the v3 body;
   * `markdown` stays the portable file users copy. Otherwise identical to `markdown`.
   */
  readonly legacyMarkdown: string;
  /** On-disk dialect of the canonical file. */
  readonly sourceFormat: "legacy" | "core-v2" | "v3";
  /** Legacy/frontmatter AST. Null once the active canonical bytes are Core v2. */
  readonly ast: ReferenceAst | null;
  readonly format: "legacy" | "core-v2";
  readonly coreTransport: CoreConsumerContractAdmission | null;
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
  const canonicalIsCore = isCoreV2Document(canonicalMarkdown);
  const canonicalIsV3 = !canonicalIsCore && parseV3(canonicalMarkdown) !== null;
  let canonicalLegacy = canonicalMarkdown;
  if (canonicalIsV3) {
    const sidecarPath = join(projectRoot, "references", entry.id, "reference.json");
    if (!existsSync(sidecarPath)) throw new Error(`DESIGN.md v3 for ${id} has no reference.json`);
    canonicalLegacy = projectLegacyMarkdown(canonicalMarkdown, JSON.parse(readFileSync(sidecarPath, "utf8")));
  }

  // The preview swaps only the served body. A legacy canonical is normalised
  // for legacy consumers, but the active-document adapter never attaches that
  // AST to a served Core body. A Core canonical has no legacy AST at all.
  const migratedPath = migratedMarkdownPath(entry.id, projectRoot);
  const markdown = migratedPath ? readFileSync(migratedPath, "utf8") : canonicalMarkdown;
  const format = isCoreV2Document(markdown) ? "core-v2" : "legacy";
  const activePath = migratedPath ?? canonicalPath;

  return {
    entry,
    quality,
    markdown,
    legacyMarkdown: migratedPath ? markdown : canonicalLegacy,
    sourceFormat: canonicalIsCore ? "core-v2" : canonicalIsV3 ? "v3" : "legacy",
    format,
    coreTransport: format === "core-v2"
      ? loadCoreConsumerContract(dirname(activePath), markdown, verifyCanonicalCorePackage)
      : null,
    source: migratedPath ? "migrated-preview" : "canonical",
    ast: canonicalIsCore
      ? null
      : normalizeReference({
          entry,
          quality,
          markdown: canonicalLegacy,
          verificationV2: REFERENCE_VERIFICATION_BY_ID[id],
        }),
  };
}
