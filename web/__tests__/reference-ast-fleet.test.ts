import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { REGISTRY } from "@/data/registry.generated";
import {
  REFERENCE_QUALITY,
  REFERENCE_QUALITY_BY_ID,
  REFERENCE_QUALITY_COUNTS,
} from "@/data/reference-quality.generated";
import { normalizeReference } from "@/lib/references";

const REFS_DIR = join(process.cwd(), "references");

function canonicalIds(): string[] {
  return readdirSync(REFS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && existsSync(join(REFS_DIR, entry.name, "DESIGN.md")))
    .map((entry) => entry.name)
    .sort();
}

describe("Reference AST fleet contract", () => {
  it("normalizes the full canonical fleet with no ID, claim, or component loss", () => {
    const fileIds = canonicalIds();
    const registryIds = REGISTRY.map((entry) => entry.id).sort();
    const qualityIds = REFERENCE_QUALITY.map((entry) => entry.id).sort();

    expect(fileIds.length).toBeGreaterThanOrEqual(400);
    expect(registryIds).toEqual(fileIds);
    expect(qualityIds).toEqual(fileIds);
    expect(REFERENCE_QUALITY_COUNTS.total).toBe(fileIds.length);

    for (const entry of REGISTRY) {
      const quality = REFERENCE_QUALITY_BY_ID[entry.id];
      const markdown = readFileSync(join(REFS_DIR, entry.id, "DESIGN.md"), "utf8");
      const ast = normalizeReference({ entry, quality, markdown });

      expect(ast.identity.id, `${entry.id}: identity mismatch`).toBe(entry.id);
      expect(ast.tokens.claimPaths.length, `${entry.id}: canonical claim loss`).toBe(quality.claimCount);
      expect(
        Object.keys(ast.tokens.components).sort(),
        `${entry.id}: component names changed during normalization`,
      ).toEqual(Object.keys(entry.tokens?.components ?? {}).sort());
      expect(ast.document.sections.length, `${entry.id}: no document sections parsed`).toBeGreaterThan(0);

      const second = normalizeReference({ entry, quality, markdown });
      expect(JSON.stringify(second), `${entry.id}: AST serialization is not deterministic`).toBe(JSON.stringify(ast));
    }
  });
});
