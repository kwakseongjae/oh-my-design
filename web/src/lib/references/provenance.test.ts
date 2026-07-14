import { describe, expect, it } from "vitest";
import { getSectionProvenance } from "./provenance";
import type { ReferenceDetailAstContract } from "./detail-projection";

function contract(): ReferenceDetailAstContract {
  return {
    schemaVersion: 1,
    quality: {
      id: "fixture", status: "verified_v2", verifiedAt: "2026-07-12", tokensExtractedAt: "2026-07-12",
      nextReverifyAt: null, tokenSource: "reconciled", claimCount: 3, evidenceClaimCount: 3,
      evidenceCoverage: 1, surfaceCount: 2, sourceCount: 2, conflictCount: 0, tier1SourceCount: 2, reasonCodes: [],
    },
    foundations: {} as ReferenceDetailAstContract["foundations"],
    tokens: {} as ReferenceDetailAstContract["tokens"],
    evidence: {
      schemaVersion: 2,
      checkedAt: "2026-07-12",
      surfaces: [],
      sources: [],
      claims: [
        { claimPath: "tokens.colors.primary", surfaceId: "home", sourceId: "live", method: "computed-style", capturedAt: "2026-07-12", confidence: "high" },
        { claimPath: "tokens.colors.canvas", surfaceId: "home", sourceId: "live", method: "computed-style", capturedAt: "2026-07-12", confidence: "high" },
        { claimPath: "tokens.typography.family.sans", surfaceId: "docs", sourceId: "official", method: "official-doc", capturedAt: "2026-07-12", confidence: "high" },
      ],
      conflictCount: 0,
    },
    compatibilityFallbacks: [],
    parity: { matches: true, differences: [] },
  };
}

describe("getSectionProvenance", () => {
  it("summarizes only claims in the requested section prefixes", () => {
    expect(getSectionProvenance(contract(), ["tokens.colors."])).toEqual({
      status: "verified_v2", checkedAt: "2026-07-12", claimCount: 2, sourceCount: 1, confidence: "high",
    });
  });

  it("keeps unlinked sections absent", () => {
    expect(getSectionProvenance(contract(), ["tokens.components."])).toBeNull();
    expect(getSectionProvenance(undefined, ["tokens.colors."])).toBeNull();
  });
});
