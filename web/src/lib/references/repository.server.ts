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

  const markdownPath = join(projectRoot, "references", entry.id, "DESIGN.md");
  if (!existsSync(markdownPath)) return null;

  const markdown = readFileSync(markdownPath, "utf8");
  return {
    entry,
    quality,
    markdown,
    ast: normalizeReference({
      entry,
      quality,
      markdown,
      verificationV2: REFERENCE_VERIFICATION_BY_ID[id],
    }),
  };
}
