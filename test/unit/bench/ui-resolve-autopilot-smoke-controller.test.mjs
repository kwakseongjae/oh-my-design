import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { afterEach, describe, expect, test } from "vitest";
import {
  AUTOPILOT_EVALUATOR_TIMEOUT_MS,
  CORE_V2_PORTABLE_RUNTIME_PATHS,
  assertInstalledPortableRuntimeBundle,
  buildControllerRepairPrompt,
  classifyProviderStreamFailure,
  controllerAutopilotProof,
  controllerDesignSystemProof,
  effectivePortableBundlePaths,
  freezeRunningRootAfterControllerFailure,
  installedPortablePath,
  missionProductTreeManifest,
  objectiveFailureIds,
  objectiveFailureObservations,
  objectivePassingIds,
  repairContinuationDecision,
  shouldEvaluateProviderAttempt,
  smokeExperimentId,
  smokeConfigRelativePath,
  portableRuntimeBundleDigest,
} from "../../../benchmarks/ui-resolve-bench/scripts/autopilot-smoke-controller.mjs";

const repo = resolve(import.meta.dirname, "../../..");
const script = join(repo, "benchmarks/ui-resolve-bench/scripts/autopilot-smoke-controller.mjs");
const canary = join(repo, "benchmarks/ui-resolve-bench/scripts/run-autopilot-clean-dir-canary.mjs");
const smokeConfig = JSON.parse(readFileSync(join(repo, "benchmarks/ui-resolve-bench/config/autopilot-luna-high-smoke-v0.1.json"), "utf8"));
const coreV2SmokeConfig = JSON.parse(readFileSync(join(repo, "benchmarks/ui-resolve-bench/config/autopilot-luna-high-smoke-v0.2.json"), "utf8"));
const roots = [];
const temp = () => { const value = mkdtempSync(join(tmpdir(), "omd-autopilot-smoke-test-")); roots.push(value); return value; };
const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");
function coreCanary() {
  const root = temp();
  const output = join(root, "canary");
  execFileSync(process.execPath, [canary, output], { cwd: repo });
  return { root, output, workspace: join(output, "workspace") };
}
afterEach(() => { while (roots.length) rmSync(roots.pop(), { recursive: true, force: true }); });

describe("autopilot Luna/high smoke controller", () => {
  test("selects only repository-relative versioned smoke contracts without rewriting history", () => {
    expect(smokeConfigRelativePath()).toBe(
      "benchmarks/ui-resolve-bench/config/autopilot-luna-high-smoke-v0.2.json",
    );
    expect(smokeConfigRelativePath(
      "benchmarks/ui-resolve-bench/config/autopilot-luna-high-smoke-v0.1.json",
    )).toBe("benchmarks/ui-resolve-bench/config/autopilot-luna-high-smoke-v0.1.json");
    for (const unsafe of [
      "/tmp/autopilot-luna-high-smoke-v0.2.json",
      "../config/autopilot-luna-high-smoke-v0.2.json",
      "benchmarks/ui-resolve-bench/config/custom.json",
      "benchmarks/ui-resolve-bench/config/autopilot-luna-high-smoke.json",
    ]) {
      expect(() => smokeConfigRelativePath(unsafe)).toThrow(/repository-relative versioned/);
    }
  });

  test("keeps the historical v0.1 smoke contract byte-immutable", () => {
    const bytes = readFileSync(join(
      repo,
      "benchmarks/ui-resolve-bench/config/autopilot-luna-high-smoke-v0.1.json",
    ));
    expect(bytes).toHaveLength(6780);
    expect(sha256(bytes)).toBe("faa4ec2844da2e4f283747b0cccdb603a6421b973a9479a855fc5add9a58857d");
  });

  test("binds the plan experiment id to the selected smoke contract", () => {
    expect(smokeExperimentId(coreV2SmokeConfig)).toBe("autopilot-luna-high-smoke-1.9.883");
    expect(smokeExperimentId(coreV2SmokeConfig, "autopilot-luna-high-smoke-1.9.883"))
      .toBe("autopilot-luna-high-smoke-1.9.883");
    expect(() => smokeExperimentId(coreV2SmokeConfig, "autopilot-luna-high-smoke-1.9.850"))
      .toThrow(/must match the selected smoke contract/);
    expect(() => smokeExperimentId({ experiment_id: "custom" })).toThrow(/valid experiment id/);
  });

  test("binds the fresh v0.2 smoke contract to the complete current Core runtime", () => {
    expect(coreV2SmokeConfig).toMatchObject({
      schema_version: "0.2",
      experiment_id: "autopilot-luna-high-smoke-1.9.883",
      provider_execution_allowed: false,
      authorities: {
        evaluator_path: "benchmarks/ui-resolve-bench/scripts/evaluate-autopilot-greenfield-task.mjs",
      },
    });
    const files = coreV2SmokeConfig.authorities.portable_bundle_files;
    expect(files.map((item) => item.path)).toEqual(expect.arrayContaining([
      ...CORE_V2_PORTABLE_RUNTIME_PATHS,
    ]));
    expect(new Set(files.map((item) => item.path)).size).toBe(files.length);
    for (const item of files) {
      const bytes = readFileSync(join(repo, item.path));
      expect({ path: item.path, bytes: bytes.length, sha256: sha256(bytes) }).toEqual(item);
    }
    expect(sha256(JSON.stringify(files))).toBe(coreV2SmokeConfig.authorities.portable_bundle_sha256);
    const evaluator = readFileSync(join(repo, coreV2SmokeConfig.authorities.evaluator_path));
    expect(sha256(evaluator)).toBe(coreV2SmokeConfig.authorities.evaluator_sha256);
  });

  test("classifies account usage exhaustion as infrastructure instead of a product result", () => {
    const message = "You've hit your usage limit. Visit settings to purchase more credits or try again later.";
    expect(classifyProviderStreamFailure([
      JSON.stringify({ type: "thread.started", thread_id: "t" }),
      JSON.stringify({ type: "error", message }),
      JSON.stringify({ type: "turn.failed", error: { message } }),
    ].join("\n"))).toEqual({ kind: "provider-capacity-exhausted", message });
    expect(classifyProviderStreamFailure(JSON.stringify({ type: "turn.failed", error: { message: "Task failed." } }))).toBeNull();
  });
  test("does not run a journey evaluator against an unchanged starter after provider failure", () => {
    expect(shouldEvaluateProviderAttempt({ workspace: { product_changed: false } }, true)).toBe(false);
    expect(shouldEvaluateProviderAttempt({ workspace: { product_changed: true } }, false)).toBe(false);
    expect(shouldEvaluateProviderAttempt({ workspace: { product_changed: true } }, true)).toBe(true);
  });
  test("allows the four-viewport evaluator to finish before controller timeout", () => {
    expect(AUTOPILOT_EVALUATOR_TIMEOUT_MS).toBe(360_000);
  });
  test("installs the complete Core v2 transitive runtime bundle and fails closed on drift", () => {
    const paths = effectivePortableBundlePaths(smokeConfig);
    expect(paths).toEqual(expect.arrayContaining([...CORE_V2_PORTABLE_RUNTIME_PATHS]));
    expect(new Set(paths).size).toBe(paths.length);
    const files = paths.map((path) => {
      const bytes = readFileSync(join(repo, path));
      return { path, bytes: bytes.length, sha256: sha256(bytes) };
    });
    const plan = {
      smoke_contract: smokeConfig,
      portable_runtime_bundle: {
        schema_version: "0.1",
        files,
        sha256: portableRuntimeBundleDigest(files),
      },
    };
    const workspace = temp();
    for (const item of files) {
      const target = join(workspace, installedPortablePath(item.path));
      mkdirSync(dirname(target), { recursive: true });
      copyFileSync(join(repo, item.path), target);
    }
    expect(() => assertInstalledPortableRuntimeBundle(plan, workspace)).not.toThrow();

    const graph = JSON.parse(readFileSync(
      join(repo, "spec/fixtures/design-md-core-v2/.omd/system/graph.json"),
      "utf8",
    ));
    delete graph.projection;
    delete graph.extensions;
    graph.governance.decisions[0].path = "typography_assets.roles.0.family";
    const decisionPath = graph.governance.decisions[0].path;
    const graphPath = join(workspace, "fresh-graph.json");
    const provenancePath = join(workspace, "fresh-provenance.json");
    const coveragePath = join(workspace, "fresh-coverage.json");
    const reviewDir = join(workspace, "fresh-review");
    const reviewReceiptPath = join(workspace, "fresh-review-receipt.json");
    const compiledPath = join(workspace, "fresh-compiled-package");
    const checkpointPath = join(workspace, "fresh-project-checkpoint.json");
    const projectRoot = join(temp(), "fresh-adopted-project");
    writeFileSync(graphPath, `${JSON.stringify(graph, null, 2)}\n`);
    writeFileSync(provenancePath, `${JSON.stringify({
      schema_version: "2.0.0",
      decisions: [{ path: decisionPath, source_class: "unresolved", evidence: [] }],
    }, null, 2)}\n`);
    const sections = {
      experience: "1-experience",
      foundations: "2-foundations",
      "typography-assets": "3-typography-assets",
      "components-states": "4-components-states",
      "layout-platforms": "5-layout-platforms",
      "content-locales": "6-content-locales",
      governance: "7-governance",
    };
    const checks = [
      "portable_core_structure",
      "bound_system_authority",
      "token_reference_closure",
      "contrast",
      "component_state_coverage",
      "responsive_320_200",
      "reduced_motion",
      "assets_fonts_licenses",
      "implementation_contract_complete",
      "unknown_absence",
      "opaque_extension_preservation",
    ];
    writeFileSync(coveragePath, `${JSON.stringify({
      schema_version: "2.0.0",
      groups: Object.fromEntries(Object.entries(sections).map(([id, fragment]) => [id, {
        status: "covered",
        evidence: [`DESIGN.md#${fragment}`],
      }])),
      checks: Object.fromEntries(checks.map((id) => [id, {
        pass: true,
        method: "controller-computed-system-graph-v2",
      }])),
    }, null, 2)}\n`);
    const reviewHelper = join(
      workspace,
      installedPortablePath("scripts/prepare-design-md-core-review.cjs"),
    );
    execFileSync(process.execPath, [
      reviewHelper,
      graphPath,
      "--provenance", provenancePath,
      "--coverage", coveragePath,
      "--out-dir", reviewDir,
    ], { cwd: workspace });
    execFileSync(process.execPath, [
      reviewHelper,
      "--approve", join(reviewDir, "review-request.json"),
      "--reviewer", "portable-runtime-canary",
      "--out", reviewReceiptPath,
      "--authority-transition-approved",
    ], { cwd: workspace });
    execFileSync(process.execPath, [
      join(workspace, installedPortablePath("scripts/compile-design-md-core.cjs")),
      join(reviewDir, "input-graph.json"),
      "--provenance", join(reviewDir, "provenance.json"),
      "--coverage", join(reviewDir, "coverage.json"),
      "--review-receipt", reviewReceiptPath,
      "--out-dir", compiledPath,
      "--adopt",
    ], { cwd: workspace });
    expect(JSON.parse(readFileSync(
      join(compiledPath, ".omd/system/manifest.json"),
      "utf8",
    ))).toMatchObject({ profile: "portable-core", authority: { canonical: "system-graph" } });
    const adopterHelper = join(
      workspace,
      installedPortablePath("scripts/adopt-design-md-core.cjs"),
    );
    execFileSync(process.execPath, [
      adopterHelper,
      compiledPath,
      "--prepare-checkpoint", checkpointPath,
      "--reviewer", "portable-runtime-canary",
      "--authority-transition-approved",
    ], { cwd: workspace });
    mkdirSync(projectRoot, { recursive: true });
    execFileSync(process.execPath, [
      adopterHelper,
      compiledPath,
      "--project-root", projectRoot,
      "--checkpoint-receipt", checkpointPath,
    ], { cwd: workspace });
    expect(JSON.parse(readFileSync(
      join(projectRoot, ".omd/system/adoption-receipt.json"),
      "utf8",
    ))).toMatchObject({
      status: "adopted",
      review: { reviewer: { role: "project-owner", identifier: "portable-runtime-canary" } },
    });

    const coreHelper = CORE_V2_PORTABLE_RUNTIME_PATHS[0];
    const installedHelper = join(workspace, installedPortablePath(coreHelper));
    rmSync(installedHelper);
    expect(() => assertInstalledPortableRuntimeBundle(plan, workspace)).toThrow(/missing/);

    copyFileSync(join(repo, coreHelper), installedHelper);
    writeFileSync(installedHelper, "stale portable helper\n");
    expect(() => assertInstalledPortableRuntimeBundle(plan, workspace)).toThrow(/drift/);

    const symlinkTarget = join(workspace, "portable-helper-copy.cjs");
    copyFileSync(join(repo, coreHelper), symlinkTarget);
    rmSync(installedHelper);
    symlinkSync(symlinkTarget, installedHelper);
    expect(() => assertInstalledPortableRuntimeBundle(plan, workspace)).toThrow(/regular non-symlink/);
  });
  test("recomputes fresh Core v2 project authority in an isolated controller workspace", () => {
    const { root, workspace } = coreCanary();
    const canaryRun = join(workspace, ".omd/runs/run-greenfield-family-planner");
    expect(JSON.parse(readFileSync(join(canaryRun, "core-v2-review/review-request.json"), "utf8"))).toMatchObject({
      status: "review-required",
      authority: { state: "non-authoritative-candidate", canonical: false },
    });
    expect(JSON.parse(readFileSync(join(canaryRun, "core-v2-owner-review.json"), "utf8"))).toMatchObject({
      kind: "design-md-core-adoption-review",
      decision: "approved",
      authority_transition_approved: true,
      reviewer: { role: "project-owner", identifier: "autopilot-clean-dir-project-owner" },
      candidate: { exact_preview_reviewed: true },
    });
    expect(JSON.parse(readFileSync(join(canaryRun, "checkpoints/core-v2-project-adoption.json"), "utf8"))).toMatchObject({
      kind: "design-md-core-project-adoption-checkpoint",
      request: {
        kind: "design-md-core-project-adoption-checkpoint-request",
        status: "approval-required",
      },
      attestation: {
        decision: "approved",
        authority_transition_approved: true,
        authority: { role: "project-owner", identifier: "autopilot-clean-dir-project-owner" },
      },
    });
    expect(JSON.parse(readFileSync(join(workspace, ".omd/system/adoption-receipt.json"), "utf8"))).toMatchObject({
      kind: "design-md-core-adoption-receipt",
      status: "adopted",
      authority: "system-graph",
      review: {
        authority_transition_approved: true,
        reviewer: { role: "project-owner", identifier: "autopilot-clean-dir-project-owner" },
      },
    });
    expect(existsSync(join(workspace, ".omd/adoptions"))).toBe(true);
    const result = controllerDesignSystemProof(root, { id: "core-valid" }, workspace, 0);
    expect(result).toMatchObject({
      pass: true,
      reason: null,
      proof: {
        pass: true,
        authority_mode: "core-v2-project-system",
        format: "design-md-core",
        format_version: "2.0.0",
      },
    });
    for (const name of ["manifest.json", "graph.json", "provenance.json", "coverage.json", "adoption-receipt.json"]) {
      expect(existsSync(join(root, ".controller-artifacts/core-valid/design-system-audit-round-0/workspace/.omd/system", name))).toBe(true);
    }
    expect(existsSync(join(
      root,
      ".controller-artifacts/core-valid/design-system-audit-round-0/workspace/.omd-run/design-system-decision.json",
    ))).toBe(true);
  });
  test("rejects a fresh legacy-only system even when it has a design-system decision", () => {
    const root = temp();
    const workspace = join(root, "workspace");
    const runDir = join(workspace, ".omd/runs/run-legacy");
    mkdirSync(join(runDir, "system"), { recursive: true });
    writeFileSync(join(workspace, "DESIGN.md"), "# Legacy projection\n");
    writeFileSync(join(runDir, "design-system-decision.json"), JSON.stringify({
      strategy: "establish",
      required_system_authority: "core-v2-project-system",
      implementation_owner: "main-agent",
    }));
    for (const name of ["spec.json", "provenance.json", "coverage.json"]) {
      writeFileSync(join(runDir, "system", name), "{}\n");
    }
    expect(controllerDesignSystemProof(root, { id: "legacy-only" }, workspace)).toMatchObject({
      pass: false,
      reason: "legacy-system-spec-forbidden-in-fresh-smoke",
    });
  });
  test("fails closed for missing, stale, and symlinked Core v2 project authority", () => {
    const missing = coreCanary();
    rmSync(join(missing.workspace, ".omd/system/manifest.json"));
    expect(controllerDesignSystemProof(missing.root, { id: "missing-core" }, missing.workspace)).toMatchObject({
      pass: false,
      reason: "core-v2-project-system-required",
      missing_artifacts: ["manifest.json"],
    });

    const missingReceipt = coreCanary();
    rmSync(join(missingReceipt.workspace, ".omd/system/adoption-receipt.json"));
    expect(controllerDesignSystemProof(
      missingReceipt.root,
      { id: "missing-core-receipt" },
      missingReceipt.workspace,
    )).toMatchObject({
      pass: false,
      reason: "core-v2-project-system-required",
      missing_artifacts: ["adoption-receipt.json"],
    });

    const stale = coreCanary();
    const staleGraph = join(stale.workspace, ".omd/system/graph.json");
    writeFileSync(staleGraph, `${readFileSync(staleGraph, "utf8")}\n`);
    expect(controllerDesignSystemProof(stale.root, { id: "stale-core" }, stale.workspace)).toMatchObject({
      pass: false,
      reason: "controller-core-v2-design-system-proof-failed",
    });

    const linked = coreCanary();
    const manifest = join(linked.workspace, ".omd/system/manifest.json");
    const manifestCopy = join(linked.root, "manifest-copy.json");
    copyFileSync(manifest, manifestCopy);
    rmSync(manifest);
    symlinkSync(manifestCopy, manifest);
    expect(controllerDesignSystemProof(linked.root, { id: "linked-core" }, linked.workspace)).toMatchObject({
      pass: false,
      reason: expect.stringMatching(/symlink|regular non-symlink/),
    });
  }, 15_000);
  test("recomputes the exact mission product-tree authority with installed runtime assets", () => {
    const workspace = temp();
    const runDir = join(workspace, ".omd/runs/tree-authority");
    mkdirSync(runDir, { recursive: true });
    mkdirSync(join(workspace, ".agents/skills/omd-autopilot"), { recursive: true });
    mkdirSync(join(workspace, "scripts"), { recursive: true });
    writeFileSync(join(runDir, "task.md"), "Build the product.\n");
    writeFileSync(join(workspace, "index.html"), "<!doctype html><title>Product</title>\n");
    writeFileSync(join(workspace, "DESIGN.md"), "# Project system\n");
    writeFileSync(join(workspace, ".agents/skills/omd-autopilot/SKILL.md"), "runtime asset\n");
    writeFileSync(join(workspace, "scripts/autopilot-mission.cjs"), "runtime helper\n");
    execFileSync(process.execPath, [join(repo, "scripts/autopilot-mission.cjs"), workspace, runDir, "bootstrap"], { cwd: repo });
    const mission = JSON.parse(readFileSync(join(runDir, "mission.json"), "utf8"));
    expect(missionProductTreeManifest(workspace)).toEqual({
      files: mission.initial_product_tree,
      sha256: mission.initial_product_tree_sha256,
    });
  });

  test("builds a bounded same-mission repair prompt from objective failures", () => {
    const failed = objectiveFailureIds({ assertions: { accessibility: false, runtime_clean: true, responsive: false } });
    expect(failed).toEqual(["accessibility", "responsive"]);
    expect(objectivePassingIds({ assertions: { accessibility: false, runtime_clean: true, responsive: false } })).toEqual(["runtime_clean"]);
    const prompt = buildControllerRepairPrompt({
      originalPrompt: "Build the surface.", feedbackPath: ".benchmark/controller-feedback/round-1.json",
      feedbackSha256: "a".repeat(64), repairRound: 1, failedIds: failed,
      protectedIds: ["runtime_clean", "reservation_state"], regressedIds: ["reservation_state"],
    });
    expect(prompt).toContain("Continue the existing OmD Autopilot mission");
    expect(prompt).toContain("accessibility, responsive");
    expect(prompt).toContain("do not ask the user");
    expect(prompt).toContain("Do not bootstrap a new mission");
    expect(prompt).toContain("objective_observations and protected_assertions as controller measurements");
    expect(prompt).toContain("cumulative non-regression invariants");
    expect(prompt).toContain("runtime_clean, reservation_state");
    expect(prompt).toContain("Restore these previously passing assertions before any other refinement: reservation_state");
  });
  test("embeds bounded objective observations instead of assertion names alone", () => {
    const observations = objectiveFailureObservations({
      assertions: { queue_preconditions: false, responsive: true, accessibility: false },
      groups: { journey: { points: 20, pass: false }, responsive: { points: 20, pass: true } },
      evidence: {
        task_id: "cold-chain-operations",
        shipment_count: 1,
        urgent_count: 1,
        routine_count: 0,
        protected_unknown_claims: [],
        viewports: [{ id: "mobile-320", document_overflow_px: 0, axe_serious_critical: 3 }],
        accessibility: false,
      },
    });
    expect(observations).toMatchObject({
      schema_version: "0.3",
      failed_assertions: {
        accessibility: { assertion_pass: false, observed: {
          expected: "Zero serious or critical Axe violations in every measured state and viewport.",
          viewport_counts: [{ id: "mobile-320", initial: 3 }],
        } },
        queue_preconditions: { assertion_pass: false, observed: {
          expected: { initial_unfiltered_queue: true, shipment_count_min: 3, urgent_count_min: 2, non_urgent_count_min: 1 },
          shipment_count: 1, urgent_count: 1, non_urgent_count: 0,
        } },
      },
      failed_groups: { journey: { points: 20, pass: false } },
      supporting_evidence: {
        shipment_count: 1, urgent_count: 1, routine_count: 0,
      },
    });
  });
  test("continues bounded repair only after strict score lift with zero protected regression", () => {
    expect(repairContinuationDecision({ attempt: 0, currentScore: 10 })).toEqual({
      allowed: true, reason: "initial-attempt-may-enter-bounded-repair",
    });
    expect(repairContinuationDecision({ attempt: 1, previousScore: 40, currentScore: 40 })).toEqual({
      allowed: false, reason: "objective-score-did-not-improve", current_score: 40, previous_score: 40,
    });
    expect(repairContinuationDecision({ attempt: 1, previousScore: 40, currentScore: 60 })).toEqual({
      allowed: true, reason: "strict-objective-improvement", current_score: 60, previous_score: 40,
    });
    expect(repairContinuationDecision({
      attempt: 2, previousScore: 60, currentScore: 70, regressedAssertionIds: ["accessibility"],
    })).toEqual({
      allowed: false, reason: "protected-assertion-regressed", regressed_assertion_ids: ["accessibility"],
    });
  });
  test("deduplicates accessibility diagnostics and keeps repair evidence bounded", () => {
    const repeatedViolation = {
      id: "color-contrast", impact: "serious", nodes: [{
        target: [".muted"], failure_summary: `Fix contrast ${"x".repeat(800)}`,
        computed_style: { color: "rgb(120,120,120)", background_color: "rgb(255,255,255)" },
      }],
    };
    const observations = objectiveFailureObservations({
      assertions: { accessibility: false },
      groups: { accessibility: { points: 20, pass: false } },
      evidence: {
        viewports: ["desktop-1440", "mobile-390", "mobile-320", "zoom-200"].map((id) => ({
          id,
          initial_axe_violations: Array(20).fill(repeatedViolation),
          error_axe_violations: Array(20).fill(repeatedViolation),
          initial_axe_serious_critical: 20,
        })),
      },
    });
    const accessibility = observations.failed_assertions.accessibility.observed;
    expect(accessibility.findings).toHaveLength(1);
    expect(accessibility.findings[0]).toMatchObject({
      id: "color-contrast",
      target: [".muted"],
      viewport_ids: ["desktop-1440", "mobile-390", "mobile-320", "zoom-200"],
      states: ["initial", "error"],
    });
    expect(accessibility.findings[0].failure_summary.length).toBeLessThanOrEqual(300);
    expect(JSON.stringify(observations).length).toBeLessThan(16_000);
    expect(observations.supporting_evidence).not.toHaveProperty("viewports");
  });
  test("turns cold-chain composite failures into bounded repair measurements", () => {
    const observations = objectiveFailureObservations({
      assertions: {
        accessibility: false,
        filtered_contents_exact: false,
        assigned_owner_confirmed_and_persistent: false,
        responsive: false,
      },
      evidence: {
        filtered_contents_exact: false,
        assigned_owner_confirmed_and_persistent: false,
        viewports: [{
          id: "mobile-320",
          mobile: true,
          document_overflow_px: 0,
          document_overflow_offenders: [{ selector: '.queue', right_overflow_px: 78 }],
          critical_fields_reachable: false,
          controls_horizontally_unclipped: true,
          control_min_dimension_px: 38,
          initial_axe_violations: [{ id: "color-contrast", impact: "serious", targets: [["#assign"]] }],
          interaction_diagnostics: {
            record_classification: [{ identity: "CC-101", urgent: true, non_urgent: false }],
            urgent_ids: ["CC-101"],
            filtered_record_ids: [],
            assigned_status_persistent: false,
            selected_owner: "Mina Park",
            assignment_status_text: "Assigned Mina Park",
            assigned_source_record_text: "CC-101 Mina Park",
            detail_after: "CC-101 Sample owner Mina Park",
          },
        }],
      },
    });
    expect(observations.failed_assertions).toMatchObject({
      accessibility: { observed: { findings: [{ id: "color-contrast", target: ["#assign"], viewport_ids: ["mobile-320"], states: ["initial"] }] } },
      filtered_contents_exact: { observed: { pass: false, viewports: [{ id: "mobile-320", urgent_ids: ["CC-101"], filtered_record_ids: [] }] } },
      assigned_owner_confirmed_and_persistent: { observed: { pass: false, viewports: [{ id: "mobile-320", assigned_status_persistent: false, selected_owner: "Mina Park", assignment_status_text: "Assigned Mina Park", assigned_source_record_text: "CC-101 Mina Park", detail_after: "CC-101 Sample owner Mina Park" }] } },
      responsive: { observed: [{ id: "mobile-320", mobile: true, document_overflow_offenders: [{ selector: '.queue', right_overflow_px: 78 }], critical_fields_reachable: false, control_min_dimension_px: 38 }] },
    });
  });
  test("preserves computed contrast evidence from axe for bounded repair", () => {
    const violation = {
      id: "color-contrast", impact: "serious", description: "Ensure foreground and background colors meet contrast",
      targets: [[".header-cta"]], nodes: [{
        target: [".header-cta"], failure_summary: "Fix the foreground color",
        checks: [{ id: "color-contrast", message: "Element has insufficient color contrast", data: '{"fgColor":"#526568","bgColor":"#0a4f4a","contrastRatio":1.2}' }],
        computed_style: { color: "rgb(82, 101, 104)", background_color: "rgb(10, 79, 74)", font_size: "14px", font_weight: "600", opacity: "1" },
      }],
    };
    const observations = objectiveFailureObservations({
      assertions: { accessibility: false }, groups: { accessibility: { points: 20, pass: false } },
      evidence: { viewports: [{ id: "desktop-1440", initial_axe_violations: [violation] }] },
    });
    expect(observations.failed_assertions.accessibility.observed.findings[0]).toMatchObject({
      id: "color-contrast",
      computed_style: { color: "rgb(82, 101, 104)", background_color: "rgb(10, 79, 74)" },
    });
  });
  test("exposes actionable landing and locale repair diagnostics instead of bare booleans", () => {
    const observations = objectiveFailureObservations({
      assertions: {
        unique_primary_action: false,
        focus_transfer: false,
        unavailable_information_honest: false,
        translation_unavailable_honest: false,
      },
      evidence: {
        unique_primary_action: false,
        focus_transfer: false,
        unavailable_information_honest: false,
        translation_unavailable_honest: false,
        viewports: [{
          id: "desktop-1440",
          primary_action_diagnostics: {
            visible_count: 2,
            candidates: [{ tag: "a", href: "#reserve", name: "Reserve a tool" }],
            focused_after_activation: { tag: "a", name: "Reserve a tool" },
          },
          unavailable_information_excerpts: ["The catalog comes next."],
          unavailable_translation_diagnostics: {
            control_count: 0,
            alert_count: 0,
            lang_before: "en",
            lang_after: "en",
          },
        }],
      },
    });
    expect(observations.failed_assertions).toMatchObject({
      unique_primary_action: { observed: { viewports: [{ diagnostics: { visible_count: 2 } }] } },
      focus_transfer: { observed: { viewports: [{ focused_after_activation: { tag: "a" } }] } },
      unavailable_information_honest: { observed: { viewports: [{ excerpts: ["The catalog comes next."] }] } },
      translation_unavailable_honest: { observed: { viewports: [{ diagnostics: { control_count: 0, alert_count: 0 } }] } },
    });
  });
  test("exposes actionable filter, owner-error, locale-honesty, and progress diagnostics", () => {
    const observations = objectiveFailureObservations({
      assertions: {
        filter_selected_and_visible: false,
        owner_error_associated: false,
        sample_owner_options: false,
        keyboard_open_sample: false,
        all_five_locales_exact: false,
        selected_label_lang_script_agree: false,
        fictional_not_medical_advice: false,
        progress_textual_and_persistent: false,
      },
      evidence: {
        viewports: [{
          id: "mobile-320",
          interaction_diagnostics: {
            filter_kind: "combobox",
            filter_keyboard: true,
            filter_programmatic: true,
            filter_selected_option: "Urgent only",
            baseline_selected_option: "Urgent only",
            baseline_filter_reset: true,
            action_reached: true,
            detail_role: "dialog",
            detail_after: "SHP-1 Sample record Assign owner",
            owner_error: { focused: true, aria_describedby: "", alert_text: "Choose a sample owner" },
            sample_owner_option_count: 0,
            owner_scope_text: "Assign owner",
          },
          locale_switch_diagnostics: [{ requested: "zh-TW", actual_lang: "zh-Hans", selected: false }],
          honesty_diagnostics: {
            fictional_or_sample_visible: false,
            non_medical_advice_visible: false,
            initial_text_excerpt: "Prepare for your clinic visit.",
          },
          progress_diagnostics: {
            first: { checked: 1, total: 4, bar_now: 0, bar_max: 0, status_texts: ["1 of 4"] },
          },
        }],
      },
    });
    expect(observations.failed_assertions).toMatchObject({
      filter_selected_and_visible: { observed: { viewports: [{ filter_kind: "combobox", filter_selected_option: "Urgent only", baseline_filter_reset: true }] } },
      owner_error_associated: { observed: { viewports: [{ owner_error: { focused: true, aria_describedby: "", alert_text: "Choose a sample owner" } }] } },
      sample_owner_options: { observed: { viewports: [{ sample_owner_option_count: 0, owner_scope_text: "Assign owner" }] } },
      keyboard_open_sample: { observed: { accepted_detail_roles: ["dialog", "complementary", "region"], viewports: [{ action_reached: true, detail_role: "dialog" }] } },
      all_five_locales_exact: { observed: { locale_equivalence_policy: expect.stringContaining("zh-CN is equivalent to zh-Hans"), viewports: [{ diagnostics: [{ requested: "zh-TW", actual_lang: "zh-Hans" }] }] } },
      selected_label_lang_script_agree: { observed: { viewports: [{ diagnostics: [{ selected: false }] }] } },
      fictional_not_medical_advice: { observed: { viewports: [{ diagnostics: { fictional_or_sample_visible: false, non_medical_advice_visible: false } }] } },
      progress_textual_and_persistent: { observed: { viewports: [{ diagnostics: { first: { checked: 1, total: 4, bar_now: 0, bar_max: 0 } } }] } },
    });
  });
  test("permanently freezes an exposed running root after a controller failure", () => {
    const root = temp();
    writeFileSync(join(root, "execution-state.json"), `${JSON.stringify({
      status: "running", current_cell: "cell-1", completed_cells: 0,
      cells: [{ id: "cell-1", status: "running" }, { id: "cell-2", status: "prepared" }],
    }, null, 2)}\n`);
    freezeRunningRootAfterControllerFailure(root, new Error("controller authority drift"));
    const state = JSON.parse(readFileSync(join(root, "execution-state.json"), "utf8"));
    expect(state).toMatchObject({
      status: "stopped-preregistered", current_cell: "cell-1",
      stop_reason: "controller-failure-after-cell-start",
      controller_error: "controller authority drift",
    });
    expect(state.cells).toEqual([
      expect.objectContaining({ id: "cell-1", status: "stopped", stop_reason: "controller-failure-after-cell-start" }),
      { id: "cell-2", status: "prepared" },
    ]);
  });
  test("creates a hash-bound provider-zero plan and three oracle-free workspaces", () => {
    const base = temp(); const report = join(base, "report"); const root = join(base, "root");
    execFileSync(process.execPath, [script, "plan", "--out", report], { cwd: repo });
    execFileSync(process.execPath, [script, "prepare", "--plan", join(report, "RUN-MATRIX.json"), "--receipt", join(report, "PREREGISTRATION.receipt.json"), "--root", root], { cwd: repo });
    const audit = JSON.parse(execFileSync(process.execPath, [script, "audit", "--root", root], { cwd: repo, encoding: "utf8" }));
    expect(audit).toMatchObject({ pass: true, cells: 3, status: "prepared" });
    const plan = JSON.parse(readFileSync(join(root, "RUN-MATRIX.locked.json"), "utf8"));
    expect(plan.cells.map((cell) => `${cell.model_id}/${cell.effort}`)).toEqual(Array(3).fill("gpt-5.6-luna/high"));
    expect(plan.execution_control).toMatchObject({
      max_new_cells_per_invocation: 1, retries: 0, replacements: 0, fallback: 0,
      bounded_repair_model_calls_max: 2,
    });
    for (const cell of plan.cells) {
      const workspace = join(root, cell.id);
      expect(existsSync(join(workspace, ".agents/skills/omd-autopilot/SKILL.md"))).toBe(true);
      expect(existsSync(join(workspace, ".benchmark/codex-home/auth.json"))).toBe(true);
      expect(existsSync(join(workspace, ".benchmark/codex-home/model_catalog.json"))).toBe(true);
      expect(JSON.parse(readFileSync(join(workspace, ".benchmark/controller-verification-policy.json"), "utf8")))
        .toMatchObject({
          schema_version: "0.2", controller: "autopilot-smoke-controller-v0.3", mode: "controller-owned-objective",
          repair_rounds_max: 2, task_id: cell.task_id, initial_turn_soft_budget_ms: 720000,
          minimum_controller_handoff_reserve_ms: 180000, advisory_lane_attempts_per_lane_max: 1,
          advisory_result_repair_calls_max: 0, advisory_coordination_calls_max: 6,
        });
      expect(readFileSync(join(workspace, ".benchmark/PROMPT.md"), "utf8")).not.toMatch(/oracle|mutant/i);
    }
  });

  test("rejects post-plan prompt authority drift before preparation", () => {
    const base = temp(); const report = join(base, "report"); const root = join(base, "root");
    execFileSync(process.execPath, [script, "plan", "--out", report], { cwd: repo });
    const planPath = join(report, "RUN-MATRIX.json");
    const plan = JSON.parse(readFileSync(planPath, "utf8"));
    plan.cells[0].task_id = "incident-response-dashboard";
    writeFileSync(planPath, `${JSON.stringify(plan, null, 2)}\n`);
    expect(() => execFileSync(process.execPath, [script, "prepare", "--plan", planPath, "--receipt", join(report, "PREREGISTRATION.receipt.json"), "--root", root], { cwd: repo })).toThrow();
  });

  test("refuses provider execution without a plan-bound named in-app browser receipt", () => {
    const base = temp(); const report = join(base, "report"); const root = join(base, "root");
    execFileSync(process.execPath, [script, "plan", "--out", report], { cwd: repo });
    execFileSync(process.execPath, [script, "prepare", "--plan", join(report, "RUN-MATRIX.json"), "--receipt", join(report, "PREREGISTRATION.receipt.json"), "--root", root], { cwd: repo });
    expect(() => execFileSync(process.execPath, [script, "run", "--root", root, "--max-new-cells", "1"], { cwd: repo })).toThrow(/named in-app browser admission receipt is required/);
    const state = JSON.parse(readFileSync(join(root, "execution-state.json"), "utf8"));
    expect(state.status).toBe("prepared");
    expect(state.completed_cells).toBe(0);
  });

  test("admits an in-app browser id that begins with a dash via equals syntax", () => {
    const base = temp(); const report = join(base, "report"); const root = join(base, "root");
    execFileSync(process.execPath, [script, "plan", "--out", report], { cwd: repo });
    execFileSync(process.execPath, [script, "prepare", "--plan", join(report, "RUN-MATRIX.json"), "--receipt", join(report, "PREREGISTRATION.receipt.json"), "--root", root], { cwd: repo });
    const browserId = "-iab-leading-dash";
    execFileSync(process.execPath, [script, "admit-browser", "--root", root,
      `--browser-id=${browserId}`, "--session", "autopilot-luna-high-smoke-1.9.883",
      "--tab-id", "tab-10", "--url", "about:blank"], { cwd: repo });
    expect(JSON.parse(readFileSync(join(root, "BROWSER-ADMISSION.receipt.json"), "utf8"))).toMatchObject({
      browser: { browser_id: browserId, tab_id: "tab-10", url: "about:blank" },
    });
  });

  test("independently audits a terminal clean-dir mission and rejects fabricated answer artifacts", () => {
    const base = temp(); const output = join(base, "canary");
    const canary = join(repo, "benchmarks/ui-resolve-bench/scripts/run-autopilot-clean-dir-canary.mjs");
    execFileSync(process.execPath, [canary, output], { cwd: repo });
    const workspace = join(output, "workspace");
    const summary = JSON.parse(readFileSync(join(output, "SUMMARY.json"), "utf8"));
    mkdirSync(join(workspace, ".benchmark"), { recursive: true });
    writeFileSync(join(workspace, ".benchmark/PROMPT.md"), summary.prompt);
    const files = effectivePortableBundlePaths(smokeConfig).map((path) => {
      const bytes = readFileSync(join(repo, path));
      const target = join(workspace, installedPortablePath(path));
      mkdirSync(dirname(target), { recursive: true });
      copyFileSync(join(repo, path), target);
      return { path, bytes: bytes.length, sha256: sha256(bytes) };
    });
    const plan = {
      smoke_contract: smokeConfig,
      portable_runtime_bundle: {
        schema_version: "0.1",
        files,
        sha256: portableRuntimeBundleDigest(files),
      },
    };
    // The source-tree canary completes before this controller fixture installs
    // the same bundle that a real smoke workspace receives during prepare.
    // Rebind only its local terminal product-tree receipt to model that
    // preinstalled starting state; provider smoke runs never need this shim.
    const runDir = join(workspace, ".omd/runs/run-greenfield-family-planner");
    const finalProofPath = join(runDir, "proof.json");
    const finalProof = JSON.parse(readFileSync(finalProofPath, "utf8"));
    finalProof.product_tree_sha256 = missionProductTreeManifest(workspace).sha256;
    writeFileSync(finalProofPath, `${JSON.stringify(finalProof, null, 2)}\n`);
    const missionStatePath = join(runDir, "mission-state.json");
    const missionState = JSON.parse(readFileSync(missionStatePath, "utf8"));
    missionState.evidence.proof_sha256 = sha256(readFileSync(finalProofPath));
    writeFileSync(missionStatePath, `${JSON.stringify(missionState, null, 2)}\n`);
    const initialProof = controllerAutopilotProof(plan, {}, workspace);
    expect(initialProof, initialProof.reason).toMatchObject({
      pass: true, mission_lineages: 1, question_batches: 0, answer_artifacts: 0,
    });
    const checkpointDir = join(runDir, "checkpoints");
    const questions = join(checkpointDir, "council-intake.questions.json");
    mkdirSync(checkpointDir, { recursive: true });
    writeFileSync(questions, JSON.stringify({
      questions: [{ id: "candidate-only", question: "An internally considered question" }],
      pending_interview_ids: [],
    }));
    expect(controllerAutopilotProof(plan, {}, workspace)).toMatchObject({
      pass: true, mission_lineages: 1, question_batches: 0, question_artifacts: 1,
    });
    writeFileSync(questions, JSON.stringify({
      questions: [{ id: "candidate-only", question: "An actually pending question" }],
      pending_interview_ids: ["candidate-only"],
    }));
    expect(controllerAutopilotProof(plan, {}, workspace)).toMatchObject({ pass: false, mission_lineages: null });
    writeFileSync(questions, JSON.stringify({ questions: [], pending_interview_ids: [] }));
    const answers = join(checkpointDir, "council-intake.answers.json");
    writeFileSync(answers, JSON.stringify({ answers: [{ value: "model-authored" }] }));
    expect(controllerAutopilotProof(plan, {}, workspace)).toMatchObject({ pass: false, mission_lineages: null });
  });
});
