import { createHash } from "node:crypto";
import { createRequire } from "node:module";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  admitCoreConsumerContract,
  loadCoreConsumerContract,
  type CoreCanonicalPackage,
  type CoreConsumerPackageBytes,
} from "./core-consumer-contract";
import { verifyCanonicalCorePackage } from "./core-canonical-verifier.server";

const require = createRequire(import.meta.url);
const compiler = require("../../../../scripts/compile-design-md-core.cjs") as {
  compileAdoptedCore(graph: Record<string, any>, options: Record<string, any>): CoreCanonicalPackage;
  normalizeDraftGraph(graph: Record<string, any>): Record<string, any>;
};
const verifyCanonicalPackage = verifyCanonicalCorePackage;
const tempRoots: string[] = [];
const hash = (value: string) => createHash("sha256").update(value).digest("hex");
const json = (value: unknown) => `${JSON.stringify(value, null, 2)}\n`;
const fixtureGraph = JSON.parse(readFileSync(resolve(process.cwd(), "../spec/fixtures/design-md-core-v2/.omd/system/graph.json"), "utf8")) as Record<string, any>;
const groups = ["experience", "foundations", "typography-assets", "components-states", "layout-platforms", "content-locales", "governance"];
const checks = ["portable_core_structure", "bound_system_authority", "token_reference_closure", "contrast", "component_state_coverage", "responsive_320_200", "reduced_motion", "assets_fonts_licenses", "implementation_contract_complete", "unknown_absence", "opaque_extension_preservation"];

function transaction(): CoreConsumerPackageBytes {
  const draftGraph = structuredClone(fixtureGraph);
  draftGraph.projection.sha256 = "0".repeat(64);
  const graph = compiler.normalizeDraftGraph(draftGraph);
  const tokenDecisions = Object.entries(graph.foundations.tokens as Record<string, unknown>).map(([id, value]) => ({
    path: `foundations.tokens.${id}`,
    source_class: "repository-fact",
    value,
    evidence: [`fixture://token/${id}`],
  }));
  const provenance = {
    schema_version: "2.0.0",
    decisions: [
      ...tokenDecisions,
      { path: "foundations.tokens.radius.default", source_class: "unresolved", evidence: [] },
      { path: "typography_assets.roles", source_class: "repository-fact", value: graph.typography_assets.roles, evidence: ["fixture://font-metadata"] },
      { path: "components_states.components", source_class: "repository-fact", value: graph.components_states.components, evidence: ["fixture://components"] },
    ],
  };
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
        value: { reviewer: { identifier: "fixture-owner", role: "project-owner" } },
      },
      migrationReview: null,
    },
  });
  return {
    activeDesignMd: pkg.designMd,
    graphBytes: pkg.graphBytes,
    provenanceBytes: pkg.provenanceBytes,
    coverageBytes: pkg.coverageBytes,
    manifestBytes: pkg.manifestBytes,
    adoptionReceiptBytes: pkg.adoptionReceiptBytes,
  };
}

function rebind(
  input: CoreConsumerPackageBytes,
  changes: { activeDesignMd?: string; graph?: Record<string, any>; provenance?: Record<string, any> },
): CoreConsumerPackageBytes {
  const activeDesignMd = changes.activeDesignMd ?? input.activeDesignMd;
  const graph = changes.graph ?? JSON.parse(input.graphBytes);
  graph.projection.sha256 = hash(activeDesignMd);
  const graphBytes = json(graph);
  const provenance = changes.provenance ?? JSON.parse(input.provenanceBytes);
  provenance.design_md_sha256 = hash(activeDesignMd);
  provenance.graph_sha256 = hash(graphBytes);
  const provenanceBytes = json(provenance);
  const coverage = JSON.parse(input.coverageBytes);
  coverage.design_md_sha256 = hash(activeDesignMd);
  coverage.graph_sha256 = hash(graphBytes);
  const coverageBytes = json(coverage);
  const manifest = JSON.parse(input.manifestBytes);
  manifest.artifacts.design_md.sha256 = hash(activeDesignMd);
  manifest.artifacts.graph.sha256 = hash(graphBytes);
  manifest.artifacts.provenance.sha256 = hash(provenanceBytes);
  manifest.artifacts.coverage.sha256 = hash(coverageBytes);
  const manifestBytes = json(manifest);
  const receipt = JSON.parse(input.adoptionReceiptBytes);
  receipt.outputs.design_md.sha256 = hash(activeDesignMd);
  receipt.outputs.graph.sha256 = hash(graphBytes);
  receipt.outputs.provenance.sha256 = hash(provenanceBytes);
  receipt.outputs.coverage.sha256 = hash(coverageBytes);
  receipt.outputs.manifest.sha256 = hash(manifestBytes);
  return { activeDesignMd, graphBytes, provenanceBytes, coverageBytes, manifestBytes, adoptionReceiptBytes: json(receipt) };
}

afterEach(() => {
  while (tempRoots.length) rmSync(tempRoots.pop()!, { recursive: true, force: true });
});

describe("Core consumer contract admission", () => {
  it("derives typed claims only from a canonically rendered adopted transaction", () => {
    const admission = admitCoreConsumerContract(transaction(), verifyCanonicalPackage);
    expect(admission.status).toBe("verified");
    if (admission.status !== "verified") return;
    expect(admission.contract.tokens).toHaveLength(5);
    expect(admission.contract.tokens[0]).toEqual(expect.objectContaining({ evidence: [expect.stringMatching(/^fixture:\/\/token\//)] }));
    expect(admission.contract.tokenAbsences).toEqual([expect.objectContaining({ claimPath: "foundations.tokens.radius.default", sourceClass: "unresolved" })]);
    expect(admission.contract.tokens.some((token) => token.id === "radius.default")).toBe(false);
    expect(admission.contract.fontRoles[0]).toMatchObject({ runtimeAvailability: { status: "unverified", source: null } });
    expect(admission.contract.components).toMatchObject({ coverage: { status: "covered" }, checkPass: true, harvestStatus: "unreported" });
    expect(admission.contract.quality.status).toBe("covered");
  });

  it("rejects active DESIGN.md content mutation independent of mtime", () => {
    const input = transaction();
    expect(admitCoreConsumerContract({ ...input, activeDesignMd: `${input.activeDesignMd}\nmutation` }, verifyCanonicalPackage)).toMatchObject({ status: "rejected" });
  });

  it("rejects stale graph bytes bound to a different graph hash", () => {
    const input = transaction();
    expect(admitCoreConsumerContract({ ...input, graphBytes: `${input.graphBytes} ` }, verifyCanonicalPackage)).toMatchObject({ status: "rejected" });
  });

  it("rejects hash-consistent bytes that are not the canonical graph projection", () => {
    const input = transaction();
    const forged = rebind(input, { activeDesignMd: input.activeDesignMd.replace("Atlas", "Forged Atlas") });
    const admission = admitCoreConsumerContract(forged, verifyCanonicalPackage);
    expect(admission).toMatchObject({ status: "rejected" });
    if (admission.status === "rejected") expect(admission.reasons.join(" ")).toContain("canonical rendering");
  });

  it("rejects hash-consistent provenance whose token claim path points elsewhere", () => {
    const input = transaction();
    const provenance = JSON.parse(input.provenanceBytes);
    provenance.decisions[0].path = "foundations.tokens.color.different";
    const admission = admitCoreConsumerContract(rebind(input, { provenance }), verifyCanonicalPackage);
    expect(admission).toMatchObject({ status: "rejected" });
    if (admission.status === "rejected") expect(admission.reasons).toEqual(expect.arrayContaining([
      expect.stringContaining("resolved claim path is absent"),
    ]));
  });

  it("rejects unknown source classes and missing resolved evidence", () => {
    for (const mutate of [
      (provenance: Record<string, any>) => { provenance.decisions[0].source_class = "ambient-registry"; },
      (provenance: Record<string, any>) => { provenance.decisions[0].evidence = []; },
    ]) {
      const input = transaction();
      const provenance = JSON.parse(input.provenanceBytes);
      mutate(provenance);
      expect(admitCoreConsumerContract(rebind(input, { provenance }), verifyCanonicalPackage)).toMatchObject({ status: "rejected" });
    }
  });

  it("distinguishes no transaction from a partial transaction", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-core-consumer-"));
    tempRoots.push(root);
    expect(loadCoreConsumerContract(root, "core", verifyCanonicalPackage)).toMatchObject({ status: "unavailable" });
    mkdirSync(join(root, ".omd/system"), { recursive: true });
    writeFileSync(join(root, ".omd/system/graph.json"), "{}\n");
    expect(loadCoreConsumerContract(root, "core", verifyCanonicalPackage)).toMatchObject({ status: "rejected" });
  });

  it("keeps the reviewed Baemin staged document unadopted without a transaction", () => {
    const stagedRoot = resolve(process.cwd(), "../docs/design-md-weight/migrated/baemin");
    const markdown = readFileSync(join(stagedRoot, "DESIGN.md"), "utf8");
    expect(loadCoreConsumerContract(stagedRoot, markdown, verifyCanonicalPackage)).toMatchObject({
      status: "unavailable",
    });
  });
});
