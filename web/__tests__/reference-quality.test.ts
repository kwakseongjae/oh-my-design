import { describe, expect, it } from "vitest";
import {
  collectCanonicalClaimPaths,
  evaluateReferenceQuality,
} from "../scripts/lib/reference-quality.mjs";
import { REGISTRY } from "../src/data/registry.generated";
import {
  REFERENCE_QUALITY,
  REFERENCE_QUALITY_BY_ID,
  REFERENCE_QUALITY_COUNTS,
  type ReferenceQualityEntry,
} from "../src/data/reference-quality.generated";

const proof = `
## Proof — Tier 1 live inspect

Source: https://brand.example/app
- primary #112233
- hover #223344
- radius 8px
- height 40px
- text 16px
`;

const markdown = `
## 4. Component Patterns

---
**Tier 1 sources:** https://brand.example/app, https://brand.example/design
**Conflicts unresolved:** none
`;

function tokens() {
  return {
    source: "live-extract",
    extracted: "2026-07-01",
    colors: { primary: "#112233" },
    typography: { family: { sans: "Inter" } },
    rounded: { md: 8 },
    components: {
      primary: {
        type: "button",
        bg: "#112233",
        states: { hover: { bg: "#223344" } },
      },
    },
  };
}

function verification(referenceTokens: ReturnType<typeof tokens>) {
  const claims = Object.fromEntries(
    collectCanonicalClaimPaths(referenceTokens).map((path) => [
      path,
      {
        surface_id: "product-web",
        source_id: "product-live",
        method: "computed-style",
        captured: "2026-07-01",
      },
    ]),
  );
  return {
    schema: 2,
    checked: "2026-07-01",
    surfaces: [
      { id: "product-web", kind: "product", url: "https://brand.example/app", inspected: "2026-07-01" },
    ],
    sources: [
      { id: "product-live", kind: "product-surface", url: "https://brand.example/app", captured: "2026-07-01" },
    ],
    claims,
    conflicts: [],
  };
}

function evaluate(overrides: Record<string, unknown> = {}) {
  const referenceTokens = tokens();
  const frontmatter = {
    id: "fixture",
    verified: "2026-07-01",
    tokens: referenceTokens,
    verification_v2: verification(referenceTokens),
    ...overrides,
  };
  return evaluateReferenceQuality({
    id: "fixture",
    markdown,
    frontmatter,
    verificationMarkdown: proof,
    asOf: "2026-07-10",
  });
}

describe("reference quality v2", () => {
  it("requires a complete claim-to-surface evidence graph for Verified v2", () => {
    const result = evaluate();
    expect(result.status).toBe("verified_v2");
    expect(result.reasonCodes).toEqual([]);
    expect(result.evidenceCoverage).toBe(1);
  });

  it("demotes an otherwise useful reference to Partial when one claim lacks evidence", () => {
    const referenceTokens = tokens();
    const v2 = verification(referenceTokens);
    delete v2.claims[Object.keys(v2.claims)[0]];
    const result = evaluate({ verification_v2: v2 });
    expect(result.status).toBe("partial");
    expect(result.reasonCodes).toContain("claim_evidence_missing");
  });

  it("rejects fields misplaced at the verification_v2 root", () => {
    const referenceTokens = tokens();
    const v2 = { ...verification(referenceTokens), components_harvested: true };
    const result = evaluate({ verification_v2: v2 });
    expect(result.status).toBe("partial");
    expect(result.reasonCodes).toContain("verification_schema_invalid");
  });

  it("keeps prose-derived and freshness-conflicted references in Legacy", () => {
    const proseTokens = { ...tokens(), source: "prose-derived" };
    expect(evaluate({ tokens: proseTokens }).status).toBe("legacy_snapshot");

    const staleTokens = { ...tokens(), extracted: "2026-07-02" };
    const stale = evaluate({ verified: "2026-07-01", tokens: staleTokens });
    expect(stale.status).toBe("legacy_snapshot");
    expect(stale.reasonCodes).toContain("freshness_conflict");
  });

  it("demotes expired live evidence without deleting the reference", () => {
    const referenceTokens = tokens();
    const v2 = verification(referenceTokens);
    v2.checked = "2026-01-01";
    v2.sources[0].captured = "2026-01-01";
    const result = evaluateReferenceQuality({
      id: "fixture",
      markdown,
      frontmatter: { verified: "2026-01-01", tokens: { ...referenceTokens, extracted: "2026-01-01" }, verification_v2: v2 },
      verificationMarkdown: proof,
      asOf: "2026-07-10",
    });
    expect(result.status).toBe("partial");
    expect(result.reasonCodes).toContain("source_expired");
  });
});

describe("generated reference quality manifest", () => {
  it("contains every registry id exactly once and stays sorted", () => {
    const registryIds = REGISTRY.map((entry) => entry.id);
    const qualityIds = REFERENCE_QUALITY.map((entry) => entry.id);
    expect(qualityIds).toEqual(registryIds);
    expect(new Set(qualityIds).size).toBe(qualityIds.length);
    expect(REFERENCE_QUALITY_COUNTS.total).toBe(registryIds.length);
  });

  it("promotes Baemin only after a complete verification v2 graph", () => {
    expect(REFERENCE_QUALITY_BY_ID.baemin).toMatchObject({
      status: "verified_v2",
      evidenceCoverage: 1,
      surfaceCount: 5,
      sourceCount: 5,
      conflictCount: 0,
      reasonCodes: [],
    });
  });

  it("has no blocker on any computed Verified v2 entry", () => {
    const entries: readonly ReferenceQualityEntry[] = REFERENCE_QUALITY;
    for (const entry of entries.filter((item) => item.status === "verified_v2")) {
      expect(entry.reasonCodes).toEqual([]);
    }
  });
});
