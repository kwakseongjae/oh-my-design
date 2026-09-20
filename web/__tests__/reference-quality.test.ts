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

  // Owner decision 2026-09-20: expiry counts from the last day a source's own URL
  // was confirmed to be serving what it served when captured, not from the
  // capture alone. The measurement behind it is in
  // `data/surface-drift-2026-09-20.json` — 359 of 384 re-probed sources
  // identical after 69 days — and `docs/DRIFT_MEASUREMENT_2026-09-20.md`.
  //
  // The three cases that keep this from becoming a way to wave evidence through.
  it("counts expiry from a confirmed-unchanged date, and only with evidence for that source", () => {
    const build = (driftConfirmations: Record<string, string>) => {
      const referenceTokens = tokens();
      const v2 = verification(referenceTokens);
      v2.checked = "2026-01-01";
      v2.sources[0].captured = "2026-01-01";
      return evaluateReferenceQuality({
        id: "fixture",
        markdown,
        frontmatter: { verified: "2026-01-01", tokens: { ...referenceTokens, extracted: "2026-01-01" }, verification_v2: v2 },
        verificationMarkdown: proof,
        asOf: "2026-07-10",
        driftConfirmations,
      });
    };
    const sourceId = verification(tokens()).sources[0].id;

    // 1. A confirmation for this source restarts its clock.
    expect(build({ [`fixture/${sourceId}`]: "2026-06-01" }).reasonCodes).not.toContain("source_expired");

    // 2. A confirmation for a *different* source renews nothing. A probe of one
    //    page is not evidence about another.
    expect(build({ "fixture/some-other-source": "2026-06-01" }).reasonCodes).toContain("source_expired");

    // 3. The confirmation ages exactly like a capture — it buys a new TTL, not
    //    permanence. Confirmed on the same day it was captured, still expired.
    expect(build({ [`fixture/${sourceId}`]: "2026-01-01" }).reasonCodes).toContain("source_expired");
  });

  it("reports the due date from the same day the gate counts from", () => {
    const referenceTokens = tokens();
    const v2 = verification(referenceTokens);
    v2.checked = "2026-01-01";
    v2.sources[0].captured = "2026-01-01";
    const frontmatter = { verified: "2026-01-01", tokens: { ...referenceTokens, extracted: "2026-01-01" }, verification_v2: v2 };
    const base = { id: "fixture", markdown, frontmatter, verificationMarkdown: proof, asOf: "2026-07-10" };
    const before = evaluateReferenceQuality(base);
    const after = evaluateReferenceQuality({ ...base, driftConfirmations: { [`fixture/${v2.sources[0].id}`]: "2026-06-01" } });
    // A published due date that contradicted the gate would be worse than none.
    expect(after.nextReverifyAt! > before.nextReverifyAt!).toBe(true);
    expect(after.renewedSourceCount).toBe(1);
    expect(before.renewedSourceCount).toBe(0);
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

describe("freshness distinguishes transcription from observation", () => {
  const evaluate = (source: string, extracted: string, verified: string) =>
    evaluateReferenceQuality({
      id: "fixture",
      markdown: `---\nid: fixture\nverified: "${verified}"\n---\n\nbody`,
      frontmatter: { verified, tokens: { source, extracted, colors: { primary: "#000000" } } } as never,
      verificationMarkdown: "",
      asOf: "2026-09-16",
    });
  const flagged = (source: string, extracted: string, verified: string) =>
    evaluate(source, extracted, verified).reasonCodes.includes("freshness_conflict");

  it("accepts prose-derived tokens transcribed after the verification stamp", () => {
    // Transcription reads the already-verified prose, so it always comes after.
    expect(flagged("prose-derived", "2026-06-08", "2026-05-15")).toBe(false);
  });

  it("still flags a live reading taken after the verification stamp", () => {
    expect(flagged("live-extract", "2026-06-08", "2026-05-15")).toBe(true);
  });

  it("accepts a live reading taken before the stamp", () => {
    expect(flagged("live-extract", "2026-05-01", "2026-05-15")).toBe(false);
  });

  it("flags an unparseable extraction date regardless of source", () => {
    expect(flagged("prose-derived", "not-a-date", "2026-05-15")).toBe(true);
  });
});

describe("derived-value advisories", () => {
  const evaluate = (prose: string, tokens: unknown) =>
    evaluateReferenceQuality({
      id: "fixture",
      markdown: `---\nid: fixture\n---\n\n${prose}`,
      frontmatter: { tokens } as never,
      verificationMarkdown: "",
      asOf: "2026-09-16",
    });
  const tokenCodes = (prose: string, tokens: unknown) =>
    evaluate(prose, tokens).advisoryCodes.filter((code) => code.startsWith("token_value"));

  // The case this check was built for: the prose is honest about the value being
  // an estimate, but the token block carried it with no such qualifier.
  const bunjangProse =
    "- **Bunjang Red** (`#d80c18`) — the single brand accent. Pressed-state would darken toward `#c00b15` (interpolated; not directly observed in computed styles).";

  it("flags a self-declared estimate that reached the token block", () => {
    expect(tokenCodes(bunjangProse, { colors: { primary: "#d80c18", "primary-hover": "#c00b15" } }))
      .toEqual(["token_value_self_declared_derived"]);
  });

  it("clears once the estimate is removed from the token block", () => {
    expect(tokenCodes(bunjangProse, { colors: { primary: "#d80c18" } })).toEqual([]);
  });

  it("does not flag the observed base colour named in the same sentence", () => {
    const codes = evaluate(bunjangProse, { colors: { primary: "#d80c18" } }).advisoryCodes;
    expect(codes).not.toContain("token_value_self_declared_derived");
  });

  it("flags a palette-step derivation that reached a component token", () => {
    expect(tokenCodes("- Hover: darken to `#304cad` (blue700)", {
      components: { btn: { type: "button", hover: "#304cad" } },
    })).toEqual(["token_value_possibly_derived"]);
  });

  it("does not let a qualifier reach an observed value in the next sentence", () => {
    // `hana`: shadows were unobserved; the teal border was measured.
    expect(tokenCodes(
      "Shadows were not observed in the computed-style scan. Depth comes from the `2px solid #2dc396` teal border accent.",
      { colors: { accent: "#2dc396" } },
    )).toEqual([]);
  });

  it("does not flag a palette step that prose merely describes as darker", () => {
    // `openai`'s `#b4b4b4` is `gray-400`, a rung on the scale — not a state claim.
    expect(tokenCodes("- Focus: subtle border darken to `#b4b4b4`", {
      colors: { "gray-400": "#b4b4b4", primary: "#000000" },
    })).toEqual([]);
  });

  it("still flags a state-scoped palette name with no measurement behind it", () => {
    expect(tokenCodes("- Hover: darken to `#2668a0`", { colors: { "primary-hover": "#2668a0" } }))
      .toEqual(["token_value_possibly_derived"]);
  });

  it("clears once the value is recorded as measured in the proof block", () => {
    // `spoqa` records `#008c5e` in its Tier-1 sources; "darkens to" then describes
    // an observation rather than asserting a derivation.
    const prose = "- Active/hover green darkens to `#008c5e` for nav emphasis";
    const tokens = { colors: { "primary-active": "#008c5e" } };
    expect(tokenCodes(prose, tokens)).toEqual(["token_value_possibly_derived"]);
    const withProof = evaluateReferenceQuality({
      id: "fixture",
      markdown: `---\nid: fixture\n---\n\n${prose}`,
      frontmatter: { tokens } as never,
      verificationMarkdown: "## Proof\n\nactive green #008c5e sampled on the homepage",
      asOf: "2026-09-16",
    });
    expect(withProof.advisoryCodes.filter((c) => c.startsWith("token_value"))).toEqual([]);
  });

  it("ignores a derivation described in prose that never entered the tokens", () => {
    expect(tokenCodes("- Hover: darken to `#304cad` (blue700)", { colors: { primary: "#3959cc" } })).toEqual([]);
  });
});
