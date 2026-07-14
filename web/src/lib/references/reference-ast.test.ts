import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { REGISTRY, type RefEntry } from "@/data/registry.generated";
import {
  REFERENCE_QUALITY_BY_ID,
  type ReferenceQualityEntry,
  type ReferenceQualityStatus,
} from "@/data/reference-quality.generated";
import {
  normalizeReference,
  ReferenceAstError,
  selectCanvas,
  selectDefaultRadius,
  selectForeground,
  selectPrimaryColor,
  selectUiFont,
} from "./normalize";

const REFS_DIR = join(process.cwd(), "references");

function loadReference(id: string) {
  const entry = REGISTRY.find((candidate) => candidate.id === id);
  const quality = REFERENCE_QUALITY_BY_ID[id];
  if (!entry || !quality) throw new Error(`fixture ${id} is not registered`);
  const markdown = readFileSync(join(REFS_DIR, id, "DESIGN.md"), "utf8");
  return normalizeReference({ entry, quality, markdown });
}

function syntheticEntry(overrides: Partial<RefEntry> = {}): RefEntry {
  return {
    id: "synthetic",
    name: "Synthetic",
    displayName: "Synthetic",
    country: "US",
    category: "test",
    homepage: "https://example.com",
    primaryColor: "#112233",
    logo: { type: "favicon", slug: "https://example.com/favicon.ico" },
    verified: "2026-07-11",
    ...overrides,
  };
}

function syntheticQuality(
  status: ReferenceQualityStatus = "legacy_snapshot",
  overrides: Partial<ReferenceQualityEntry> = {},
): ReferenceQualityEntry {
  return {
    id: "synthetic",
    status,
    verifiedAt: "2026-07-11",
    tokensExtractedAt: null,
    nextReverifyAt: null,
    tokenSource: null,
    claimCount: 0,
    evidenceClaimCount: 0,
    evidenceCoverage: 0,
    surfaceCount: 0,
    sourceCount: 0,
    conflictCount: 0,
    tier1SourceCount: 0,
    reasonCodes: ["tokens_missing"],
    ...overrides,
  };
}

const SYNTHETIC_MARKDOWN = `---
id: synthetic
---
## 1. Visual Theme & Atmosphere

Synthetic reference body.
`;

describe("Reference AST normalization", () => {
  it("keeps Toss brand color separate from its canonical UI primary", () => {
    const ast = loadReference("toss");

    expect(ast.identity.brandColor).toMatchObject({
      value: "#0064ff",
      claimPath: "primary_color",
      origin: "frontmatter",
    });
    expect(selectPrimaryColor(ast)).toMatchObject({
      value: "#3182f6",
      claimPath: "tokens.colors.primary",
      confidence: "high",
    });
    expect(selectCanvas(ast)?.value).toBe("#ffffff");
    expect(selectForeground(ast)?.value).toBe("#191f28");
    expect(ast.document.sections.some((section) => section.number === "1")).toBe(true);
  });

  it("keeps Baemin's verified metrics and components with official WORK family", () => {
    const ast = loadReference("baemin");

    expect(ast.tokens.colors.primary?.value).toBe("#0cefd3");
    expect(ast.tokens.colors["corporate-foreground"]?.value).toBe("#232324");
    expect(selectUiFont(ast)?.value).toBe("BAEMINWORK");
    expect(ast.tokens.typography.families.ui?.value).toBe("BAEMINWORK");
    expect(ast.tokens.typography.families.mono).toBeUndefined();
    expect(ast.tokens.typography.families["corporate-web"]).toBeUndefined();
    expect(ast.tokens.typography.families.brand).toBeUndefined();
    expect(Object.keys(ast.tokens.typography.tiers)).toHaveLength(8);
    expect(Object.keys(ast.tokens.components)).toHaveLength(7);
  });

  it("selects Dcard's 8px token radius without scraping unrelated prose numbers", () => {
    const ast = loadReference("dcard");

    expect(selectDefaultRadius(ast)).toMatchObject({
      value: "8px",
      claimPath: "tokens.rounded.md",
    });
    expect(JSON.stringify(ast.tokens.rounded)).not.toContain("1280px");
  });

  it("marks an explicit prose fallback low-confidence and keeps it out of Verified v2", () => {
    const input = {
      entry: syntheticEntry(),
      quality: syntheticQuality(),
      markdown: SYNTHETIC_MARKDOWN,
      proseFallback: {
        colors: { primary: "#445566" },
        fontFamilies: { ui: "Example Sans" },
        rounded: { md: 8 },
      },
    } as const;
    const ast = normalizeReference(input);

    expect(ast.tokens.hasStructuredTokens).toBe(false);
    expect(selectPrimaryColor(ast)).toMatchObject({
      value: "#445566",
      origin: "prose_fallback",
      confidence: "low",
    });
    expect(selectUiFont(ast)?.origin).toBe("prose_fallback");
    expect(selectDefaultRadius(ast)?.value).toBe("8px");
    expect(ast.quality.status).toBe("legacy_snapshot");

    expect(() =>
      normalizeReference({
        ...input,
        quality: syntheticQuality("verified_v2", { reasonCodes: [] }),
      }),
    ).toThrow("Verified v2 references must have structured tokens");
  });

  it("returns null for absent canvas/font/radius instead of inventing display defaults", () => {
    const ast = normalizeReference({
      entry: syntheticEntry(),
      quality: syntheticQuality(),
      markdown: SYNTHETIC_MARKDOWN,
    });

    expect(selectPrimaryColor(ast)).toEqual(ast.identity.brandColor);
    expect(selectCanvas(ast)).toBeNull();
    expect(selectForeground(ast)).toBeNull();
    expect(selectUiFont(ast)).toBeNull();
    expect(selectDefaultRadius(ast)).toBeNull();
    expect(JSON.stringify(ast)).not.toContain("#6366f1");
    expect(JSON.stringify(ast)).not.toContain("Inter");
  });

  it("fails closed on malformed boundaries and invalid structured values", () => {
    expect(() =>
      normalizeReference({
        entry: syntheticEntry(),
        quality: syntheticQuality(),
        markdown: "id: synthetic\n## 1. Missing fences",
      }),
    ).toThrow(ReferenceAstError);

    expect(() =>
      normalizeReference({
        entry: syntheticEntry(),
        quality: syntheticQuality(),
        markdown: SYNTHETIC_MARKDOWN.replace("id: synthetic", "id: another"),
      }),
    ).toThrow("does not match registry id");

    const invalidEntry = syntheticEntry({
      tokens: {
        source: "manual",
        colors: { primary: "blue" },
      } as RefEntry["tokens"],
    });
    expect(() =>
      normalizeReference({
        entry: invalidEntry,
        quality: syntheticQuality("partial", { tokenSource: "manual" }),
        markdown: SYNTHETIC_MARKDOWN,
      }),
    ).toThrow("tokens.colors.primary must be a six-digit hex color");
  });
});
