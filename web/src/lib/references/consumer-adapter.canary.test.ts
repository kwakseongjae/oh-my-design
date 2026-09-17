import { createRequire } from "node:module";
import { createHash } from "node:crypto";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { projectBuilderDesignMdCore } from "@/lib/builder/design-md-core-export";
import { projectActiveReference } from "./consumer-adapter";
import { extractCoreV2ReferenceDetail } from "./detail-projection";
import { loadReference } from "./repository.server";
import { referenceResponseBody } from "@/app/api/references/[id]/response";
import { applyOverrides, extractTokens } from "@/lib/extract-tokens";
import { createCoreReferenceFormatArtifacts } from "./export-formats";

const require = createRequire(import.meta.url);
const coreEngine = require("../../../../scripts/design-md-core.cjs") as {
  inspectDesignMd(markdown: string): { format: string; conformance: { structurally_valid: boolean } };
  migrateDesignMd(markdown: string, options: { requireSourceValid: boolean }): {
    designMd: string;
    report: { status: string; projection_roundtrip_equal: boolean };
  };
};
const compiler = require("../../../../scripts/compile-design-md-core.cjs") as {
  compileAdoptedCore(graph: Record<string, any>, options: Record<string, any>): {
    designMd: string;
    graphBytes: string;
    provenanceBytes: string;
    coverageBytes: string;
    manifestBytes: string;
    adoptionReceiptBytes: string;
  };
  normalizeDraftGraph(graph: Record<string, any>): Record<string, any>;
};

const originalFlag = process.env.OMD_REFS_SOURCE;
const temporaryRoots: string[] = [];
const legacyPath = resolve(process.cwd(), "references/baemin/DESIGN.md");
const stagedPath = resolve(process.cwd(), "../docs/design-md-weight/migrated/baemin/DESIGN.md");
const parityFixture = JSON.parse(readFileSync(resolve(process.cwd(), "src/lib/references/fixtures/baemin-core-parity-v0.1.json"), "utf8")) as {
  original: { sha256: string };
  staged: { sha256: string };
  active_detail: Record<string, string>;
  narrative_sentinels: string[];
};
const sha256 = (value: string) => createHash("sha256").update(value).digest("hex");

afterEach(() => {
  if (originalFlag === undefined) delete process.env.OMD_REFS_SOURCE;
  else process.env.OMD_REFS_SOURCE = originalFlag;
  while (temporaryRoots.length) rmSync(temporaryRoots.pop()!, { recursive: true, force: true });
});

function projectRootWithBaemin(markdown: string): string {
  const root = mkdtempSync(join(tmpdir(), "omd-baemin-active-core-"));
  temporaryRoots.push(root);
  mkdirSync(join(root, "references", "baemin"), { recursive: true });
  writeFileSync(join(root, "references", "baemin", "DESIGN.md"), markdown);
  return root;
}

function projectRootWithAdoptedPackage(options: {
  sourceOnly?: boolean;
  explicitPrimaryAbsence?: boolean;
  explicitFontAbsence?: boolean;
  unrelatedDisplayFamilyAbsence?: boolean;
  mixedOrderedRoles?: boolean;
  structuredPrimary?: boolean;
} = {}): string {
  const root = mkdtempSync(join(tmpdir(), "omd-baemin-adopted-package-"));
  temporaryRoots.push(root);
  const target = join(root, "references", "baemin");
  mkdirSync(target, { recursive: true });
  const draftGraph = JSON.parse(readFileSync(resolve(process.cwd(), "../spec/fixtures/design-md-core-v2/.omd/system/graph.json"), "utf8"));
  draftGraph.projection.sha256 = "0".repeat(64);
  const graph = compiler.normalizeDraftGraph(draftGraph);
  if (options.sourceOnly) {
    graph.foundations.tokens = {};
    graph.foundations.rules = [
      "- **Primary** (`#0cefd3`): exact source-bound public-web primary.\n- **Canvas** (`#ffffff`): exact source-bound canvas.\n- **Foreground** (`#222222`): exact source-bound foreground.\n- **Canonical radius:** `12px` — catalog-wide default.",
    ];
    graph.typography_assets.roles = options.mixedOrderedRoles
      ? [
          { id: "body", family: "Body Sans", usage: "Body copy", weight: 400 },
          { id: "heading", family: "Heading Sans", usage: "Headings", weight: 700 },
        ]
      : options.unrelatedDisplayFamilyAbsence
        ? [{ id: "display", usage: "Display headings", weight: 700 }]
        : [];
    graph.typography_assets.rules = [
      "- **Current official app family:** `BAEMINWORK`.",
      "### Type roles\n\n| Role | Weight |\n|---|---:|\n| Heading | 720 |",
    ];
  } else {
    graph.foundations.tokens["color.primary"] = {
      $type: "color",
      $value: options.structuredPrimary
        ? { colorSpace: "srgb", components: [18 / 255, 52 / 255, 86 / 255], hex: "#123456" }
        : "#123456",
      $description: "Fictional test-only primary",
    };
    graph.foundations.tokens["radius.default"] = {
      $type: "dimension",
      $value: "8px",
      $description: "Fictional test-only default radius",
    };
    graph.typography_assets.roles[0].id = "ui-sans";
    graph.typography_assets.roles[0].family = "Fixture Sans";
  }
  const decisions = options.sourceOnly
    ? [
        {
          path: "experience.summary",
          source_class: "repository-fact",
          value: graph.experience.summary,
          evidence: ["fixture://source-bound-summary"],
        },
        ...(options.explicitPrimaryAbsence ? [{
          path: "foundations.tokens.color.primary",
          source_class: "unresolved",
          evidence: [],
        }] : []),
        ...(options.explicitFontAbsence ? [{
          path: "/typography_assets/roles/0/family",
          source_class: "unresolved",
          evidence: [],
        }] : []),
        ...(options.unrelatedDisplayFamilyAbsence ? [{
          path: "typography_assets.roles",
          source_class: "repository-fact",
          value: graph.typography_assets.roles,
          evidence: ["fixture://display-role"],
        }, {
          path: "/typography_assets/roles/0/family",
          source_class: "unresolved",
          evidence: [],
        }] : []),
        ...(options.mixedOrderedRoles ? [{
          path: "typography_assets.roles",
          source_class: "repository-fact",
          value: graph.typography_assets.roles,
          evidence: ["fixture://mixed-ordered-roles"],
        }, {
          path: "typography_assets.roles.display.weight",
          source_class: "unresolved",
          evidence: [],
        }] : []),
      ]
    : [
        ...Object.entries(graph.foundations.tokens as Record<string, unknown>).map(([id, value]) => ({
          path: `foundations.tokens.${id}`,
          source_class: "repository-fact",
          value,
          evidence: [`fixture://token/${id}`],
        })),
        {
          path: "typography_assets.roles",
          source_class: "repository-fact",
          value: graph.typography_assets.roles,
          evidence: ["fixture://font-metadata"],
        },
        {
          path: "components_states.components",
          source_class: "repository-fact",
          value: graph.components_states.components,
          evidence: ["fixture://components"],
        },
      ];
  const provenance = {
    schema_version: "2.0.0",
    decisions,
  };
  graph.governance.decisions = decisions;
  const groups = ["experience", "foundations", "typography-assets", "components-states", "layout-platforms", "content-locales", "governance"];
  const checks = ["portable_core_structure", "bound_system_authority", "token_reference_closure", "contrast", "component_state_coverage", "responsive_320_200", "reduced_motion", "assets_fonts_licenses", "implementation_contract_complete", "unknown_absence", "opaque_extension_preservation"];
  const coverage = {
    schema_version: "2.0.0",
    groups: Object.fromEntries(groups.map((group) => [group, { status: "covered", evidence: [`fixture://${group}`] }])),
    checks: Object.fromEntries(checks.map((check) => [check, { pass: true, method: "controller-computed-system-graph-v2" }])),
  };
  const pkg = compiler.compileAdoptedCore(graph, {
    provenance,
    coverage,
    context: {
      graph: { sha256: "b".repeat(64) },
      provenance: { sha256: "c".repeat(64) },
      coverage: { sha256: "d".repeat(64) },
      review: {
        sha256: "a".repeat(64),
        value: { reviewer: { identifier: "builder-transport-fixture-owner", role: "project-owner" } },
      },
      migrationReview: null,
    },
  });
  mkdirSync(join(target, ".omd/system"), { recursive: true });
  writeFileSync(join(target, "DESIGN.md"), pkg.designMd);
  writeFileSync(join(target, ".omd/system/graph.json"), pkg.graphBytes);
  writeFileSync(join(target, ".omd/system/provenance.json"), pkg.provenanceBytes);
  writeFileSync(join(target, ".omd/system/coverage.json"), pkg.coverageBytes);
  writeFileSync(join(target, ".omd/system/manifest.json"), pkg.manifestBytes);
  writeFileSync(join(target, ".omd/system/adoption-receipt.json"), pkg.adoptionReceiptBytes);
  return root;
}

describe.sequential("Baemin active Core consumer parity", () => {
  it("serves the active staged bytes without pairing them to the legacy AST", () => {
    process.env.OMD_REFS_SOURCE = "v2";
    const staged = readFileSync(stagedPath, "utf8");
    expect(sha256(staged)).toBe(parityFixture.staged.sha256);
    const loaded = loadReference("baemin");
    expect(loaded).not.toBeNull();
    expect(loaded?.source).toBe("migrated-preview");
    expect(loaded?.format).toBe("core-v2");
    expect(loaded?.markdown).toBe(staged);

    const projection = projectActiveReference(loaded!);
    expect(projection.model).toBe("core-v2");
    expect(projection.referenceAst).toBeNull();
    expect(projection.detail.designMd).toBe(staged);
    expect(projection.detail).toMatchObject(parityFixture.active_detail);
    const apiBody = referenceResponseBody(projection);
    expect(apiBody).toMatchObject({ referenceFormat: "core-v2", coreStatus: "unavailable" });
    const builderTokens = extractTokens(apiBody);
    expect(builderTokens.identity.background).toBe("#ffffff");
    expect(builderTokens.typography.family).toBe("BAEMINWORK");
    expect(builderTokens.spacing).toEqual([]);
    expect(builderTokens.shadows).toEqual([]);
    expect(builderTokens.components).toEqual([]);
    for (const sentinel of parityFixture.narrative_sentinels) expect(projection.detail.designMd).toContain(sentinel);
  });

  it("loads an adopted Core canonical without a frontmatter parser crash", () => {
    delete process.env.OMD_REFS_SOURCE;
    const staged = readFileSync(stagedPath, "utf8");
    const loaded = loadReference("baemin", projectRootWithBaemin(staged));
    expect(loaded).not.toBeNull();
    expect(loaded?.source).toBe("canonical");
    expect(loaded?.format).toBe("core-v2");
    expect(loaded?.ast).toBeNull();
    expect(projectActiveReference(loaded!).detail.designMd).toBe(staged);
  });

  it("loads a colocated adopted transaction through the web verifier and adapter", () => {
    delete process.env.OMD_REFS_SOURCE;
    const loaded = loadReference("baemin", projectRootWithAdoptedPackage());
    expect(loaded?.format).toBe("core-v2");
    expect(loaded?.coreTransport?.status).toBe("verified");
    const projection = projectActiveReference(loaded!);
    expect(projection.coreContract?.authority.status).toBe("adopted");
    expect(projection.coreContract?.fontRoles[0]?.runtimeAvailability.status).toBe("unverified");
    expect(projection.coreContract?.components.harvestStatus).toBe("unreported");
    expect(projection.detail.primary).toBe("#123456");
    expect(projection.detail.radius).toBe("8px");
    const apiBody = referenceResponseBody(projection);
    expect(apiBody.coreContract).toBe(projection.coreContract);
    expect(apiBody).toMatchObject({ referenceFormat: "core-v2", coreStatus: "verified" });

    // This is the same serialized shape consumed by /builder. Exact Core token
    // values survive while an absent sibling semantic field remains absent.
    const tokens = extractTokens(apiBody);
    expect(tokens.identity.primary).toBe("#123456");
    expect(tokens.identity.border).toBeUndefined();
    expect(tokens.radiusScale).toEqual([
      { element: "default", value: "8px", label: "Core token" },
    ]);
    expect(tokens.palette).toContain("#2457e6");
    expect(tokens.typography).toMatchObject({
      family: "Fixture Sans",
      runtimeStatus: "unverified",
    });
    expect(tokens.typography.fonts).toContainEqual({
      raw: "Fixture Sans",
      role: "ui-sans",
      runtimeStatus: "unverified",
    });
    expect(tokens.components).toEqual([]);
    const wrongTypedContract = {
      ...structuredClone(apiBody.coreContract!),
      tokens: [{
        id: "color.primary",
        claimPath: "foundations.tokens.color.primary",
        type: "string",
        value: "#badbad",
        sourceClass: "repository-fact",
        evidence: ["fixture://wrong-type"],
      }, ...apiBody.coreContract!.tokens],
    };
    expect(extractTokens({ ...apiBody, coreContract: wrongTypedContract }).identity.primary).toBe("#123456");
    const absentPrimaryContract = {
      ...apiBody.coreContract!,
      tokens: apiBody.coreContract!.tokens.filter((token) => (
        token.id !== "color.primary" && token.id !== "radius.default"
      )),
    };
    const customizedAbsent = applyOverrides(
      extractTokens({ ...apiBody, primary: "", radius: "", coreContract: absentPrimaryContract }),
      { primaryColor: "#654321", fontFamily: "Inter", borderRadius: "12px" },
    );
    expect(customizedAbsent.identity.primary).toBe("#654321");
    expect(customizedAbsent.paletteRoles).toContainEqual(expect.objectContaining({
      hex: "#654321",
      name: "builder override",
      category: "brand",
    }));
    expect(customizedAbsent.typography).toMatchObject({ family: "Inter" });
    expect(customizedAbsent.typography.runtimeStatus).toBeUndefined();
    expect(customizedAbsent.typography.fonts).toEqual([{ raw: "Inter", role: "builder override" }]);
    expect(customizedAbsent.radiusScale).toEqual([
      { element: "default", value: "12px", label: "Builder override" },
    ]);

    const artifacts = createCoreReferenceFormatArtifacts({
      referenceId: "baemin",
      designMd: apiBody.designMd,
      contract: apiBody.coreContract!,
      overrides: {
        primaryColor: "#654321",
        fontFamily: "User Chosen Sans",
        headingWeight: "650",
        borderRadius: "12px",
      },
    });
    expect(artifacts.css.content).toContain("--color-primary: #654321;");
    expect(artifacts.css.content).toContain("--radius-default: 12px;");
    expect(artifacts.css.content).toContain("--font-ui-sans: User Chosen Sans;");
    expect(artifacts.css.content).toContain("--font-weight-ui-sans: 650;");
    expect(artifacts.tailwind.content).toContain("--color-primary: #654321;");
    expect(artifacts.tailwind.content).not.toContain("--theme-color-primary");
    expect(JSON.parse(artifacts.dtcg.content)).toMatchObject({
      color: {
        primary: { $type: "color", $value: { colorSpace: "srgb", hex: "#654321" } },
        action: { primary: { $type: "color", $value: { colorSpace: "srgb", hex: "#2457e6" } } },
      },
      radius: { default: { $type: "dimension", $value: { value: 12, unit: "px" } } },
      font: { "ui-sans": { $type: "fontFamily", $value: "User Chosen Sans" } },
      "font-weight": { "ui-sans": { $type: "fontWeight", $value: 650 } },
    });
    const compositeContract = {
      ...apiBody.coreContract!,
      tokens: [...apiBody.coreContract!.tokens, {
        id: "motion.spring",
        claimPath: "foundations.tokens.motion.spring",
        type: "transition",
        value: { duration: "180ms", easing: [0.2, 0, 0, 1] },
        sourceClass: "repository-fact",
        evidence: ["fixture://composite-token"],
      }],
    };
    const compositeDtcg = JSON.parse(createCoreReferenceFormatArtifacts({
      referenceId: "baemin",
      designMd: apiBody.designMd,
      contract: compositeContract,
      overrides: { primaryColor: "", fontFamily: "", headingWeight: "", borderRadius: "" },
    }).dtcg.content);
    expect(compositeDtcg.motion).toBeUndefined();
    expect(compositeDtcg.$extensions["oh-my-design"].sourceTokens["motion.spring"].$value).toEqual({ duration: "180ms", easing: [0.2, 0, 0, 1] });
    expect(compositeDtcg.$extensions["oh-my-design"].conversion.unsupported).toContainEqual({
      sourceId: "motion.spring",
      reason: "transition-value-invalid",
    });
  });

  it("preserves exact source-backed Core detail when a verified graph has no typed presentation token", () => {
    delete process.env.OMD_REFS_SOURCE;
    const loaded = loadReference("baemin", projectRootWithAdoptedPackage({ sourceOnly: true }));
    expect(loaded?.coreTransport?.status).toBe("verified");
    const projection = projectActiveReference(loaded!);
    expect(projection.detail).toMatchObject({
      primary: "#0cefd3",
      background: "#ffffff",
      foreground: "#222222",
      fontFamily: "BAEMINWORK",
      headingWeight: "720",
      radius: "12px",
    });
    expect(projection.coreContract?.tokens).toEqual([]);
    expect(createCoreReferenceFormatArtifacts({
      referenceId: "baemin",
      designMd: projection.detail.designMd,
      contract: projection.coreContract!,
      overrides: { primaryColor: "", fontFamily: "", headingWeight: "", borderRadius: "" },
    }).css.content).toBe(":root {\n\n}");
  });

  it("keeps an explicit unresolved Core token absent instead of restoring its Markdown compatibility value", () => {
    delete process.env.OMD_REFS_SOURCE;
    const loaded = loadReference("baemin", projectRootWithAdoptedPackage({
      sourceOnly: true,
      explicitPrimaryAbsence: true,
    }));
    expect(loaded?.coreTransport?.status).toBe("verified");
    const projection = projectActiveReference(loaded!);
    expect(projection.detail.primary).toBe("");
    expect(projection.detail.background).toBe("#ffffff");
    expect(projection.coreContract?.explicitAbsences).toContainEqual(expect.objectContaining({
      claimPath: "foundations.tokens.color.primary",
      sourceClass: "unresolved",
    }));
  });

  it("keeps an explicitly unresolved font family absent at its exact nested path", () => {
    delete process.env.OMD_REFS_SOURCE;
    const loaded = loadReference("baemin", projectRootWithAdoptedPackage({
      sourceOnly: true,
      explicitFontAbsence: true,
    }));
    const projection = projectActiveReference(loaded!);
    expect(projection.detail.fontFamily).toBe("");
    expect(projection.detail.primary).toBe("#0cefd3");
    expect(projection.coreContract?.explicitAbsences).toContainEqual(expect.objectContaining({
      claimPath: "/typography_assets/roles/0/family",
      sourceClass: "unresolved",
    }));
  });

  it("does not let an unrelated display-family absence erase the verified portable UI family", () => {
    delete process.env.OMD_REFS_SOURCE;
    const loaded = loadReference("baemin", projectRootWithAdoptedPackage({
      sourceOnly: true,
      unrelatedDisplayFamilyAbsence: true,
    }));
    const projection = projectActiveReference(loaded!);
    expect(projection.detail.fontFamily).toBe("BAEMINWORK");
    expect(projection.detail.headingWeight).toBe("700");
  });

  it("selects font roles by explicit priority and scopes sibling absences to that selected role", () => {
    delete process.env.OMD_REFS_SOURCE;
    const loaded = loadReference("baemin", projectRootWithAdoptedPackage({
      sourceOnly: true,
      mixedOrderedRoles: true,
    }));
    const projection = projectActiveReference(loaded!);
    expect(projection.coreContract?.fontRoles.map((role) => role.metadata.id)).toEqual(["body", "heading"]);
    expect(projection.detail.fontFamily).toBe("Body Sans");
    expect(projection.detail.headingWeight).toBe("700");
    expect(projection.coreContract?.explicitAbsences).toContainEqual(expect.objectContaining({
      claimPath: "typography_assets.roles.display.weight",
      sourceClass: "unresolved",
    }));
  });

  it("uses the authoritative structured sRGB color instead of a stale Markdown compatibility value", () => {
    delete process.env.OMD_REFS_SOURCE;
    const loaded = loadReference("baemin", projectRootWithAdoptedPackage({ structuredPrimary: true }));
    const projection = projectActiveReference(loaded!);
    expect(projection.coreContract?.tokens.find((token) => token.id === "color.primary")?.value).toEqual({
      colorSpace: "srgb",
      components: [18 / 255, 52 / 255, 86 / 255],
      hex: "#123456",
    });
    expect(projection.detail.primary).toBe("#123456");
  });

  it("fails closed when a rejected transaction contains parseable prose tokens", () => {
    const root = projectRootWithAdoptedPackage();
    const designPath = join(root, "references", "baemin", "DESIGN.md");
    const rejectedBytes = `${readFileSync(designPath, "utf8")}\n- **Primary** (\`#abcdef\`): must not escape a rejected transaction.\n`;
    writeFileSync(designPath, rejectedBytes);

    const loaded = loadReference("baemin", root);
    expect(loaded?.coreTransport?.status).toBe("rejected");
    const projection = projectActiveReference(loaded!);
    expect(projection.detail.designMd).toBe(rejectedBytes);
    expect(projection.detail).toMatchObject({
      primary: "",
      background: "",
      foreground: "",
      fontFamily: "",
      headingWeight: "",
      radius: "",
    });
    const body = referenceResponseBody(projection);
    expect(body.coreContract).toBeUndefined();
    expect(body).toMatchObject({ referenceFormat: "core-v2", coreStatus: "rejected" });
    const builderTokens = extractTokens(body);
    expect(builderTokens.identity.primary).toBe("");
    expect(builderTokens.palette).toEqual([]);
    expect(builderTokens.spacing).toEqual([]);
    expect(builderTokens.shadows).toEqual([]);
  });

  it("does not fill an absent Core primary from the registry", () => {
    const withoutPrimary = `<!-- design-md:section experience -->
<!-- design-md:claim scope kind=scope count=1 lang=en -->
### Scope

Test-only Core consumer fixture.

<!-- design-md:section foundations -->
<!-- design-md:claim colors kind=tokens count=2 lang=en -->
- **Canvas** (\`#ffffff\`): page surface.
- **Foreground** (\`#222222\`): text.
`;
    const active = projectActiveReference(loadReference("baemin", projectRootWithBaemin(withoutPrimary))!).detail;
    expect(active.primary).toBe("");
    expect(active.background).toBe("#ffffff");
    expect(active.foreground).toBe("#222222");
  });

  it("does not promote prose or qualified surface color roles", () => {
    const qualified = `<!-- design-md:section experience -->
<!-- design-md:claim scope kind=scope count=1 lang=en -->
### Scope

Test-only Core consumer fixture.

<!-- design-md:section foundations -->
<!-- design-md:claim colors kind=tokens count=3 lang=en -->
- **Corporate Primary** (\`#111111\`): primary action on the corporate site.
- **Card Background** (\`#222222\`): default canvas for a local card.
- **Marketing Foreground** (\`#333333\`): foreground on campaign pages.
`;
    const detail = extractCoreV2ReferenceDetail("test", qualified);
    expect(detail.primary).toBe("");
    expect(detail.background).toBe("");
    expect(detail.foreground).toBe("");
  });

  it("admits only an affirmative structured catalog-wide radius declaration", () => {
    const core = (shape: string) => `<!-- design-md:section experience -->
<!-- design-md:claim scope kind=scope count=1 lang=en -->
### Scope

Test-only Core consumer fixture.

<!-- design-md:section foundations -->
<!-- design-md:claim shape kind=tokens count=1 lang=en -->
${shape}
`;

    expect(extractCoreV2ReferenceDetail("test", core("The canonical radius is 12px on a local card.")).radius).toBe("");
    expect(extractCoreV2ReferenceDetail("test", core("- **Default radius:** `12px` — not canonical across product surfaces.")).radius).toBe("");
    expect(extractCoreV2ReferenceDetail("test", core("- **Surface-local corner:** `12px` — default for download cards.")).radius).toBe("");
    expect(extractCoreV2ReferenceDetail("test", core("- **Canonical radius:** `8px` — catalog-wide default.")).radius).toBe("8px");
  });

  it("keeps Baemin narrative and unknown-radius semantics through Builder and CLI projection", () => {
    const staged = readFileSync(stagedPath, "utf8");
    const active = projectActiveReference(loadReference("baemin", projectRootWithBaemin(staged))!).detail;
    const builder = projectBuilderDesignMdCore({
      source: active.designMd,
      referenceName: "Baemin",
      original: {
        primaryColor: active.primary,
        fontFamily: active.fontFamily,
        headingWeight: active.headingWeight,
        borderRadius: active.radius,
      },
      overrides: { primaryColor: "", fontFamily: "", headingWeight: "", borderRadius: "", darkMode: false },
    });
    expect(builder.decisions).toEqual([]);
    expect(builder.markdown).toContain("official current Baemin app typeface");
    expect(builder.markdown).toContain("Corporate Foreground");
    expect(builder.markdown).toContain("No canonical shadow token is promoted");
    expect(builder.markdown).not.toContain("**Border radius:**");
    expect(coreEngine.inspectDesignMd(builder.markdown)).toMatchObject({
      format: "core-v2",
      conformance: { structurally_valid: true },
    });
    const cli = coreEngine.migrateDesignMd(builder.markdown, { requireSourceValid: true });
    expect(cli.report).toMatchObject({ status: "pass", projection_roundtrip_equal: true });
    expect(cli.designMd).toBe(builder.markdown);
  });

  it("restores the exact legacy bytes and legacy AST path for rollback", () => {
    delete process.env.OMD_REFS_SOURCE;
    const legacy = readFileSync(legacyPath, "utf8");
    expect(sha256(legacy)).toBe(parityFixture.original.sha256);
    const root = projectRootWithBaemin(readFileSync(stagedPath, "utf8"));
    writeFileSync(join(root, "references", "baemin", "DESIGN.md"), legacy);
    const loaded = loadReference("baemin", root);
    expect(loaded?.format).toBe("legacy");
    expect(loaded?.ast).not.toBeNull();
    expect(loaded?.markdown).toBe(legacy);
    const projection = projectActiveReference(loaded!);
    expect(projection.referenceAst).not.toBeNull();
    expect(projection.detail.fontFamily).toBe("BAEMINWORK");
  });
});
