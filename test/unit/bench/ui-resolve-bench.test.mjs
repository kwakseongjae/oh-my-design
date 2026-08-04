import { execFileSync, spawnSync } from "node:child_process";
import { existsSync, mkdtempSync, mkdirSync, readFileSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import {
  prepareRunMatrix,
  validateRunMatrixPlan,
} from "../../../benchmarks/ui-resolve-bench/scripts/prepare-run-matrix.mjs";
import {
  PROOF_POLICY_FILES,
  evaluateHostPolicyGate,
  renderManagedProofPolicyFile,
  summarizeHostPolicyStates,
} from "../../../benchmarks/ui-resolve-bench/scripts/host-policy-contract.mjs";
import { renderManagedHook } from "../../../src/cli/hook-contract.ts";
import { treeManifest } from "../../../benchmarks/ui-resolve-bench/scripts/_lib.mjs";
import { evaluateApprovalDecisionObservation } from "../../../benchmarks/ui-resolve-bench/scripts/evaluate-run.mjs";
import { validateTaskContract } from "../../../benchmarks/ui-resolve-bench/scripts/task-contract.mjs";

const repoRoot = resolve(import.meta.dirname, "../../..");
const prepare = join(repoRoot, "benchmarks/ui-resolve-bench/scripts/prepare-sandbox.mjs");
const competitors = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/competitors.json"), "utf8"));
const families = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/benchmark-families.json"), "utf8"));
const releaseTrain = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/release-train.json"), "utf8"));
const pinnedVendors = "/tmp/omd-ui-skills-bench/vendors";
const taskIds = ["pricing-conversion-v0.1", "onboarding-setup-v0.1", "incident-operations-v0.1"];
const localeTaskId = "locale-cli-handoff-v0.1";
const accessReviewTaskId = "access-review-v0.1";
const payoutApprovalTaskId = "payout-approval-v0.1";
const deletionApprovalTaskId = "deletion-approval-v0.1";
const rollbackAuthorizationTaskId = "rollback-authorization-v0.1";
const shipmentExceptionTaskId = "shipment-exception-triage-v0.1";
const dataImportMappingTaskId = "data-import-mapping-v0.1";
const localizationBundleTaskId = "localization-bundle-handoff-v0.1";
const releaseArtifactTaskId = "release-artifact-promotion-v0.1";
const featureFlagTaskId = "feature-flag-rollout-review-v0.1";
const environmentSecretTaskId = "environment-secret-mapping-v0.1";
const webhookDestinationTaskId = "webhook-destination-routing-v0.1";
const auditExportTaskId = "audit-export-delivery-v0.1";
const editorialBriefTaskId = "editorial-brief-routing-v0.1";
const printProofTaskId = "print-proof-routing-v0.1";
const mediaClearanceTaskId = "media-clearance-routing-v0.1";
const studioSlotTaskId = "studio-slot-routing-v0.1";
const stagePowerPatchTaskId = "stage-power-patch-routing-v0.1";
const bookSignatureTaskId = "book-signature-imposition-v0.1";
const captionCueTaskId = "caption-cue-timing-review-v0.1";
const assayPlateTaskId = "assay-plate-layout-review-v0.1";
const spectrumAllocationTaskId = "spectrum-allocation-review-v0.1";
const sensorChannelMatrixTaskId = "sensor-channel-matrix-review-v0.1";
const transitStopTimetableTaskId = "transit-stop-timetable-review-v0.1";
const equipmentRackElevationTaskId = "equipment-rack-elevation-review-v0.1";
const productionCueDependencyTaskId = "production-cue-dependency-review-v0.1";
const digitalMasterLineageTaskId = "digital-master-lineage-review-v0.1";
const aircraftLoadPlanTaskId = "aircraft-load-plan-review-v0.1";
const orbitalContactPlanTaskId = "orbital-contact-plan-review-v0.1";
const gridBatteryDispatchTaskId = "grid-battery-dispatch-release-v0.1";
const radiotherapyPlanExportTaskId = "radiotherapy-plan-export-review-v0.1";
const satelliteTelemetryReleaseTaskId = "satellite-telemetry-release-review-v0.1";
const genomicSequencingReleaseTaskId = "genomic-sequencing-run-release-v0.1";
const semiconductorWaferDispositionTaskId = "semiconductor-wafer-disposition-v0.1";
const waterTreatmentBatchReleaseTaskId = "water-treatment-batch-release-v0.1";
const flightRecorderDownloadTaskId = "flight-recorder-download-review-v0.1";
const gridDisturbanceWaveformTaskId = "grid-disturbance-waveform-review-v0.1";
const railInterlockingEventLogTaskId = "rail-interlocking-event-log-review-v0.1";
const versionedOmdVariants = ["omd-portable-slate", "omd-portable-ember"];

function prepareVariant(variant, {
  vendors = null,
  offLabel = false,
  task = "pricing-conversion-v0.1",
  runtime = "codex",
  outputName = variant,
} = {}) {
  const parent = mkdtempSync(join(tmpdir(), "ui-resolve-test-"));
  const out = join(parent, outputName);
  const command = [
    prepare,
    "--task",
    task,
    "--variant",
    variant,
    "--out",
    out,
    "--runtime",
    runtime,
  ];
  if (vendors) command.push("--vendors", vendors);
  if (offLabel) command.push("--allow-off-label");
  if (competitors.variants[variant]?.declared_name && !competitors.variants[variant]?.vendor_dir) {
    command.push("--allow-dirty-source");
  }
  execFileSync(
    process.execPath,
    command,
    { cwd: repoRoot, encoding: "utf8" },
  );
  return out;
}

function installedSkillName(path) {
  const content = readFileSync(path, "utf8");
  const frontmatter = content.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  expect(frontmatter, `${path} must contain frontmatter`).not.toBeNull();
  const value = frontmatter[1].match(/^name:\s*(.+?)\s*$/m)?.[1];
  expect(value, `${path} must declare a name`).toBeTruthy();
  return value.replace(/^(?:"([\s\S]*)"|'([\s\S]*)')$/, (_, doubleQuoted, singleQuoted) => (
    doubleQuoted ?? singleQuoted
  ));
}

function cloneVersionedOmdVendor(vendors, variantId, { detached = true } = {}) {
  const variant = competitors.variants[variantId];
  const vendor = join(vendors, variant.vendor_dir);
  execFileSync("git", [
    "clone",
    "--quiet",
    "--no-checkout",
    "--local",
    "--no-hardlinks",
    repoRoot,
    vendor,
  ], {
    cwd: repoRoot,
    encoding: "utf8",
  });
  execFileSync(
    "git",
    detached
      ? ["-C", vendor, "checkout", "--quiet", "--detach", variant.commit]
      : ["-C", vendor, "checkout", "--quiet", "-B", "fixture-branch", variant.commit],
    { cwd: repoRoot, encoding: "utf8" },
  );
}

function withVersionedOmdVendors(callback) {
  const providedVendors = process.env.OMD_UI_RESOLVE_VERSIONED_VENDORS;
  if (providedVendors) return callback(resolve(providedVendors));

  const vendors = mkdtempSync(join(tmpdir(), "omd-versioned-skill-vendors-"));
  try {
    for (const variantId of versionedOmdVariants) {
      cloneVersionedOmdVendor(vendors, variantId);
    }
    return callback(vendors);
  } finally {
    rmSync(vendors, { recursive: true, force: true });
  }
}

function withAttachedOmdVendor(variantId, callback) {
  const vendors = mkdtempSync(join(tmpdir(), "omd-attached-skill-vendor-"));
  try {
    cloneVersionedOmdVendor(vendors, variantId, { detached: false });
    return callback(vendors);
  } finally {
    rmSync(vendors, { recursive: true, force: true });
  }
}

describe("UI-Resolve Bench sandbox preparation", () => {
  it("locks a three-task smoke slice with distinct state adapters and task-owned design oracles", () => {
    const tasks = taskIds.map((taskId) => JSON.parse(readFileSync(
      join(repoRoot, "benchmarks/ui-resolve-bench/tasks", taskId, "task.json"),
      "utf8",
    )));
    expect(tasks.map((task) => task.behavior_adapter)).toEqual([
      "pricing-v1",
      "onboarding-v1",
      "dashboard-v1",
    ]);
    expect(tasks.every((task) => task.design_oracle?.selectors && task.design_oracle?.font_family)).toBe(true);
    expect(tasks.every((task) => task.viewports.some((viewport) => viewport.name === "css-zoom-surrogate-200"))).toBe(true);
  });

  it("adds a five-locale evidence task without treating locale copy as English fallback", () => {
    const task = JSON.parse(readFileSync(
      join(repoRoot, "benchmarks/ui-resolve-bench/tasks", localeTaskId, "task.json"),
      "utf8",
    ));
    expect(task).toMatchObject({
      behavior_adapter: "locale-switch-v1",
      version: "0.5.0",
      locale: "ko",
      browser_locale: "ko-KR",
      journey_oracle: {
        locale_switch: {
          locales: ["ko", "en", "ja", "zh-CN", "zh-TW"],
          initial: "ko",
          clipboard_literal: "npx northstar-ui@1.4 setup --agent claude-code",
        },
      },
    });
    expect(Object.keys(task.locale_oracle.locales)).toEqual(["ko", "en", "ja", "zh-CN", "zh-TW"]);
    expect(task.locale_oracle.protected_literals).toEqual(expect.arrayContaining([
      "npx northstar-ui@1.4 setup --agent claude-code",
      "12",
      "3",
      "DESIGN.md",
    ]));
    expect(task.locale_oracle.locales["zh-CN"].required_patterns).toContain("AI 编程助手");
    expect(task.locale_oracle.locales["zh-TW"].required_patterns).toContain("AI 程式助理");
    expect(task.locale_oracle.locales.en.required_patterns).toContain(
      "(?:repository|project folder|codebase)",
    );
    expect(task.locale_oracle.locales.ja.required_patterns).toContain(
      "(?:コーディングエージェント|コーディングアシスタント)",
    );
    expect(readFileSync(
      join(repoRoot, "benchmarks/ui-resolve-bench/tasks", localeTaskId, "PROMPT.md"),
      "utf8",
    )).toContain("ZH-TW must not inherit ZH-CN copy");
    expect(readFileSync(
      join(repoRoot, "benchmarks/ui-resolve-bench/tasks", localeTaskId, "PROMPT.md"),
      "utf8",
    )).toContain("standard roving-tabindex tabs pattern");
    expect(readFileSync(
      join(repoRoot, "benchmarks/ui-resolve-bench/tasks", localeTaskId, "PROMPT.md"),
      "utf8",
    )).toContain("keep that content keyboard reachable");
    expect(readFileSync(
      join(repoRoot, "benchmarks/ui-resolve-bench/tasks", localeTaskId, "PROMPT.md"),
      "utf8",
    )).toContain("visible `:focus-visible` treatment");
    expect(readFileSync(
      join(repoRoot, "benchmarks/ui-resolve-bench/tasks", localeTaskId, "PROMPT.md"),
      "utf8",
    )).toContain("unnecessary Tab stops to decorative or non-scrollable containers");
    expect(readFileSync(
      join(repoRoot, "benchmarks/ui-resolve-bench/tasks", localeTaskId, "PROMPT.md"),
      "utf8",
    )).toContain("non-overlapping hit");
    expect(task.semantic_oracle.landmarks.nav_count).toBeUndefined();
    const starter = readFileSync(
      join(repoRoot, "benchmarks/ui-resolve-bench/tasks", localeTaskId, "starter/index.html"),
      "utf8",
    );
    expect(starter).toContain("10x faster");
    expect(starter).toContain("data-locale-panel=\"zh-CN\"");
    expect(starter).toContain("把專案設計依據交給 AI 程式助理");
    expect(starter).toContain("data-locale-panel=\"zh-TW\"");
    expect(starter).toContain("为 AI 编程助手添加项目设计依据");
  });

  it("adds an unseen access-review family through the existing dashboard evaluator contract", () => {
    const task = JSON.parse(readFileSync(
      join(repoRoot, "benchmarks/ui-resolve-bench/tasks", accessReviewTaskId, "task.json"),
      "utf8",
    ));
    expect(task).toMatchObject({
      version: "0.1.0",
      track: "repair",
      behavior_adapter: "dashboard-v1",
      journey_oracle: {
        filter: {
          count: 3,
          initial: "all",
          selected: "urgent",
          initial_visible_rows: 4,
          selected_visible_rows: 2,
        },
        disclosure: { count: 2 },
      },
      protected_hook_counts: {
        "[data-bench='filter-button']": 3,
        "[data-bench='review-row']": 4,
        "[data-bench='details-button']": 2,
        "[data-bench='acknowledge']": 1,
        "[data-bench='operation-status']": 1,
        "[data-bench-design-role='main-console']": 1,
      },
    });
    expect(task.viewports.map((viewport) => viewport.name)).toEqual([
      "desktop",
      "mobile",
      "narrow-320",
      "css-zoom-surrogate-200",
    ]);
    expect(task.design_oracle.selectors).toMatchObject({
      primary_action: "[data-bench='acknowledge']",
      card: "[data-bench-design-role='main-console']",
      display: "h1",
    });

    const out = prepareVariant("raw-design-md", {
      task: accessReviewTaskId,
      outputName: "access-review",
    });
    const manifest = JSON.parse(readFileSync(join(out, ".benchmark/manifest.json"), "utf8"));
    expect(manifest.task).toMatchObject({
      id: accessReviewTaskId,
      version: "0.1.0",
      track: "repair",
    });
    expect(readFileSync(join(out, "index.html"), "utf8")).toContain(
      "data-bench-design-role=\"main-console\"",
    );
  });

  it("pins the restored current OmD skill as an exact detached access-review arm", () => {
    const variantId = "omd-portable-jade";
    const expectedCommit = "f013dbd9f94a1e018f7cf8a4e500207fe982b00a";
    expect(competitors.variants[variantId]).toMatchObject({
      commit: expectedCommit,
      eligible_tracks: expect.arrayContaining(["repair"]),
      activation: "Use the installed $omd:apply skill for this task.",
    });

    const vendors = mkdtempSync(join(tmpdir(), "omd-current-skill-vendor-"));
    try {
      cloneVersionedOmdVendor(vendors, variantId);
      const out = prepareVariant(variantId, {
        vendors,
        runtime: "cursor",
        task: accessReviewTaskId,
        outputName: "access-review-current",
      });
      const manifest = JSON.parse(readFileSync(join(out, ".benchmark/manifest.json"), "utf8"));
      expect(manifest).toMatchObject({
        task: {
          id: accessReviewTaskId,
          version: "0.1.0",
        },
        skill: {
          source_commit: expectedCommit,
          source_attestation: {
            detached: true,
            dirty: false,
            publishable: true,
          },
        },
      });
      expect(manifest.skill.sha256).toBe(
        "d7a890ac08f8a4cce8c541b186039c9fcd4245a363f7f97132a2bbf8f46f52d5",
      );
    } finally {
      rmSync(vendors, { recursive: true, force: true });
    }
  });

  it("fails closed unless an approval dialog opens, traps intent, and restores focus", () => {
    const passing = {
      presence: {
        open_button: true,
        dialog: true,
        cancel_button: true,
        confirm_button: true,
        status: true,
      },
      initial: { open: false, visible: false, status: "Decision pending." },
      opened: { open: true, visible: true, focus_inside: true },
      cancelled: { open: false, visible: false, focus_restored: true },
      confirmed: {
        open: false,
        visible: false,
        status: "Batch approved.",
        focus_restored: true,
      },
    };
    expect(Object.values(evaluateApprovalDecisionObservation(passing)).every(Boolean)).toBe(true);
    expect(evaluateApprovalDecisionObservation({
      ...passing,
      opened: { ...passing.opened, focus_inside: false },
    }).opens_and_moves_focus).toBe(false);
    expect(evaluateApprovalDecisionObservation({
      ...passing,
      confirmed: { ...passing.confirmed, status: passing.initial.status },
    }).confirm_changes_status_and_closes).toBe(false);
  });

  it("adds a payout approval family with a modal decision boundary", () => {
    const task = JSON.parse(readFileSync(
      join(repoRoot, "benchmarks/ui-resolve-bench/tasks", payoutApprovalTaskId, "task.json"),
      "utf8",
    ));
    expect(task).toMatchObject({
      version: "0.2.0",
      track: "repair",
      behavior_adapter: "approval-v1",
      journey_oracle: {
        filter: {
          count: 3,
          initial: "all",
          selected: "review",
          initial_visible_rows: 4,
          selected_visible_rows: 2,
        },
        disclosure: { count: 2 },
        decision: {
          open_button_selector: "[data-bench='open-approval']",
          dialog_selector: "[data-bench='approval-dialog']",
          cancel_button_selector: "[data-bench='cancel-approval']",
          confirm_button_selector: "[data-bench='confirm-approval']",
        },
      },
      protected_hook_counts: {
        "[data-bench='approval-row']": 4,
        "[data-bench='approval-dialog']": { total: 1, visible: 0 },
        "[data-bench='confirm-approval']": { total: 1, visible: 0 },
        "[data-bench-design-role='main-console']": 1,
        "[data-bench-decision-role='context']": 1,
        "[data-bench-decision-role='target']": 1,
        "[data-bench-decision-role='evidence']": 1,
        "[data-bench-decision-role='state']": 1,
        "[data-bench-decision-role='action']": 1,
      },
    });
    expect(task.viewports.map((viewport) => viewport.name)).toEqual([
      "desktop",
      "mobile",
      "narrow-320",
      "css-zoom-surrogate-200",
    ]);

    const out = prepareVariant("raw-design-md", {
      task: payoutApprovalTaskId,
      outputName: "payout-approval",
    });
    const manifest = JSON.parse(readFileSync(join(out, ".benchmark/manifest.json"), "utf8"));
    expect(manifest.task).toMatchObject({
      id: payoutApprovalTaskId,
      version: "0.2.0",
      track: "repair",
    });
    expect(readFileSync(join(out, "index.html"), "utf8")).toContain(
      "data-bench=\"approval-dialog\"",
    );
  });

  it("adds an unseen deletion approval holdout without changing the approval evaluator", () => {
    const task = JSON.parse(readFileSync(
      join(repoRoot, "benchmarks/ui-resolve-bench/tasks", deletionApprovalTaskId, "task.json"),
      "utf8",
    ));
    expect(task).toMatchObject({
      version: "0.2.0",
      track: "repair",
      behavior_adapter: "approval-v1",
      journey_oracle: {
        filter: {
          count: 3,
          initial: "all",
          selected: "blocked",
          initial_visible_rows: 4,
          selected_visible_rows: 2,
        },
        disclosure: { count: 2 },
        decision: {
          open_button_selector: "[data-bench='open-approval']",
          dialog_selector: "[data-bench='approval-dialog']",
          cancel_button_selector: "[data-bench='cancel-approval']",
          confirm_button_selector: "[data-bench='confirm-approval']",
        },
      },
      protected_hook_counts: {
        "[data-bench='approval-row']": 4,
        "[data-bench='approval-dialog']": { total: 1, visible: 0 },
        "[data-bench='confirm-approval']": { total: 1, visible: 0 },
        "[data-bench-design-role='main-console']": 1,
        "[data-bench-decision-role='context']": 1,
        "[data-bench-decision-role='target']": 1,
        "[data-bench-decision-role='evidence']": 1,
        "[data-bench-decision-role='state']": 1,
        "[data-bench-decision-role='action']": 1,
      },
    });
    expect(task.viewports.map((viewport) => viewport.name)).toEqual([
      "desktop",
      "mobile",
      "narrow-320",
      "css-zoom-surrogate-200",
    ]);

    const out = prepareVariant("raw-design-md", {
      task: deletionApprovalTaskId,
      outputName: "deletion-approval",
    });
    const manifest = JSON.parse(readFileSync(join(out, ".benchmark/manifest.json"), "utf8"));
    expect(manifest.task).toMatchObject({
      id: deletionApprovalTaskId,
      version: "0.2.0",
      track: "repair",
    });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter).toContain("data-bench=\"approval-dialog\"");
    expect(starter).toContain("Export EX-204 records 18 project files and 3 shared folders");
    expect(starter).not.toContain("North Market");
  });

  it("fails closed when an approval task omits structural oracles", () => {
    const task = JSON.parse(readFileSync(
      join(repoRoot, "benchmarks/ui-resolve-bench/tasks", payoutApprovalTaskId, "task.json"),
      "utf8",
    ));
    expect(() => validateTaskContract({
      ...task,
      text_geometry_oracle: undefined,
    })).toThrow(/text_geometry_oracle/);
    expect(() => validateTaskContract({
      ...task,
      decision_hierarchy_oracle: {
        ...task.decision_hierarchy_oracle,
        roles: {
          ...task.decision_hierarchy_oracle.roles,
          action: "[data-bench-decision-role='missing-action']",
        },
      },
    })).toThrow(/protected exactly once/);
    expect(validateTaskContract(task)).toBe(task);
  });

  it("preregisters text geometry and decision hierarchy on a new rollback holdout", () => {
    const task = JSON.parse(readFileSync(
      join(repoRoot, "benchmarks/ui-resolve-bench/tasks", rollbackAuthorizationTaskId, "task.json"),
      "utf8",
    ));
    expect(task).toMatchObject({
      version: "0.1.0",
      behavior_adapter: "approval-v1",
      text_geometry_oracle: {
        viewports: ["mobile", "narrow-320", "css-zoom-surrogate-200"],
        max_short_text_chars: 24,
        max_short_text_lines: 1,
      },
      decision_hierarchy_oracle: {
        viewports: ["desktop", "mobile", "narrow-320", "css-zoom-surrogate-200"],
        minimum_action_gap_px: 8,
        roles: {
          container: "[data-bench-decision-role='context']",
          target: "[data-bench-decision-role='target']",
          evidence: "[data-bench-decision-role='evidence']",
          state: "[data-bench-decision-role='state']",
          action: "[data-bench-decision-role='action']",
        },
      },
    });
    expect(task.protected_hook_counts).toMatchObject({
      "[data-bench='approval-row']": 4,
      "[data-bench-decision-role='context']": 1,
      "[data-bench-decision-role='target']": 1,
      "[data-bench-decision-role='evidence']": 1,
      "[data-bench-decision-role='state']": 1,
      "[data-bench-decision-role='action']": 1,
    });

    const out = prepareVariant("raw-design-md", {
      task: rollbackAuthorizationTaskId,
      outputName: "rollback-authorization",
    });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter).toContain("Change set CH-412 covers 6 services");
    expect(starter).not.toContain("Export EX-204");
  });

  it("adds an unseen non-approval shipment triage family with structural oracles", () => {
    const task = JSON.parse(readFileSync(
      join(repoRoot, "benchmarks/ui-resolve-bench/tasks", shipmentExceptionTaskId, "task.json"),
      "utf8",
    ));
    expect(task).toMatchObject({
      version: "0.1.0",
      behavior_adapter: "dashboard-v1",
      journey_oracle: {
        filter: {
          count: 3,
          initial: "all",
          selected: "actionable",
          initial_visible_rows: 4,
          selected_visible_rows: 2,
        },
        disclosure: { count: 2 },
        acknowledgement: {
          button_selector: "[data-bench='acknowledge']",
          status_selector: "[data-bench='operation-status']",
        },
      },
      text_geometry_oracle: {
        viewports: ["mobile", "narrow-320", "css-zoom-surrogate-200"],
        max_short_text_lines: 1,
      },
      decision_hierarchy_oracle: {
        viewports: ["desktop", "mobile", "narrow-320", "css-zoom-surrogate-200"],
        minimum_action_gap_px: 8,
      },
    });
    expect(task.protected_hook_counts).toMatchObject({
      "[data-bench='review-row']": 4,
      "[data-bench-decision-role='context']": 1,
      "[data-bench-decision-role='target']": 1,
      "[data-bench-decision-role='evidence']": 1,
      "[data-bench-decision-role='state']": 1,
      "[data-bench-decision-role='action']": 1,
    });

    const out = prepareVariant("raw-design-md", {
      task: shipmentExceptionTaskId,
      outputName: "shipment-exception",
    });
    const manifest = JSON.parse(readFileSync(join(out, ".benchmark/manifest.json"), "utf8"));
    expect(manifest.task).toMatchObject({
      id: shipmentExceptionTaskId,
      version: "0.1.0",
      track: "repair",
    });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter).toContain("Scan EVT-204 records dock arrival at 09:42 UTC");
    expect(starter).not.toContain("Field Notes");
  });

  it("adds an unseen data-import configuration family with interaction and hierarchy oracles", () => {
    const task = JSON.parse(readFileSync(
      join(repoRoot, "benchmarks/ui-resolve-bench/tasks", dataImportMappingTaskId, "task.json"),
      "utf8",
    ));
    expect(task).toMatchObject({
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      journey_oracle: {
        choice: {
          count: 3,
          initial: "email",
          selected: "account-id",
          values: ["email", "account-id", "customer-id"],
        },
        toggle: { selector: "[data-bench='digest-toggle']" },
        form: { valid_value: "July customer update" },
      },
      text_geometry_oracle: {
        viewports: ["mobile", "narrow-320", "css-zoom-surrogate-200"],
        max_short_text_lines: 1,
      },
      decision_hierarchy_oracle: {
        viewports: ["desktop", "mobile", "narrow-320", "css-zoom-surrogate-200"],
        minimum_action_gap_px: 8,
      },
    });
    expect(task.protected_hook_counts).toMatchObject({
      "[data-bench='mapping-row']": 3,
      "[data-bench-decision-role='context']": 1,
      "[data-bench-decision-role='target']": 1,
      "[data-bench-decision-role='evidence']": 1,
      "[data-bench-decision-role='state']": 1,
      "[data-bench-decision-role='action']": 1,
    });

    const out = prepareVariant("raw-design-md", {
      task: dataImportMappingTaskId,
      outputName: "data-import-mapping",
    });
    const manifest = JSON.parse(readFileSync(join(out, ".benchmark/manifest.json"), "utf8"));
    expect(manifest.task).toMatchObject({
      id: dataImportMappingTaskId,
      version: "0.1.0",
      track: "repair",
    });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter).toContain("customer-update-july.csv");
    expect(starter).not.toContain("Scan EVT-204");
  });

  it("adds an unseen localization handoff family before testing the reflow hypothesis", () => {
    const task = JSON.parse(readFileSync(
      join(repoRoot, "benchmarks/ui-resolve-bench/tasks", localizationBundleTaskId, "task.json"),
      "utf8",
    ));
    expect(task).toMatchObject({
      version: "0.1.0",
      behavior_adapter: "dashboard-v1",
      journey_oracle: {
        filter: {
          count: 3,
          initial: "all",
          selected: "review",
          initial_visible_rows: 4,
          selected_visible_rows: 2,
        },
        disclosure: { count: 2 },
        acknowledgement: {
          button_selector: "[data-bench='acknowledge']",
          status_selector: "[data-bench='operation-status']",
        },
      },
      text_geometry_oracle: {
        viewports: ["mobile", "narrow-320", "css-zoom-surrogate-200"],
        max_short_text_lines: 1,
      },
      decision_hierarchy_oracle: {
        viewports: ["desktop", "mobile", "narrow-320", "css-zoom-surrogate-200"],
        minimum_action_gap_px: 8,
      },
    });
    expect(task.protected_hook_counts).toMatchObject({
      "[data-bench='review-row']": 4,
      "[data-bench-decision-role='context']": 1,
      "[data-bench-decision-role='target']": 1,
      "[data-bench-decision-role='evidence']": 1,
      "[data-bench-decision-role='state']": 1,
      "[data-bench-decision-role='action']": 1,
    });
    const out = prepareVariant("raw-design-md", {
      task: localizationBundleTaskId,
      outputName: "localization-bundle-handoff",
    });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter).toContain("ja-JP-checkout-v12.json");
    expect(starter).not.toContain("customer-update-july.csv");
  });

  it("locks an unseen release-artifact promotion holdout before reflow v2 generation", () => {
    const task = JSON.parse(readFileSync(
      join(repoRoot, "benchmarks/ui-resolve-bench/tasks", releaseArtifactTaskId, "task.json"),
      "utf8",
    ));
    expect(task).toMatchObject({
      version: "0.1.0",
      behavior_adapter: "approval-v1",
      journey_oracle: {
        filter: { count: 3, initial: "all", selected: "blocked", initial_visible_rows: 4, selected_visible_rows: 2 },
        disclosure: { count: 2 },
      },
      text_geometry_oracle: {
        viewports: ["mobile", "narrow-320", "css-zoom-surrogate-200"],
        max_short_text_lines: 1,
      },
      decision_hierarchy_oracle: {
        viewports: ["desktop", "mobile", "narrow-320", "css-zoom-surrogate-200"],
        minimum_action_gap_px: 8,
      },
    });
    const out = prepareVariant("raw-design-md", { task: releaseArtifactTaskId, outputName: "release-artifact-promotion" });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter).toContain("checkout-web-2.7.14.tgz");
    expect(starter).not.toContain("ja-JP-checkout-v12.json");
  });

  it("keeps the decision-context experiment bounded to one non-canonical rule", () => {
    const canonical = readFileSync(join(repoRoot, "skills/omd-apply/SKILL.md"), "utf8");
    const experimentPath = join(
      repoRoot,
      "benchmarks/ui-resolve-bench/experimental-skills/omd-decision-context-closure/SKILL.md",
    );
    const experimental = readFileSync(experimentPath, "utf8");
    const boundedRulePrefix = "2e. **고위험 결정 화면에서 `decision-context hierarchy closure`를 수행한다.**";
    const ruleLines = experimental.split("\n").filter((line) => line.startsWith(boundedRulePrefix));
    expect(ruleLines).toHaveLength(1);
    expect(ruleLines[0]).toContain("새 warning banner, risk score, 법적 판단");
    expect(ruleLines[0]).toContain("기존 화면이 이미 네 역할을 명확히 구분하면");
    expect(experimental.split("\n").filter((line) => !line.startsWith(boundedRulePrefix)).join("\n"))
      .toBe(canonical);
    expect(canonical).not.toContain("decision-context hierarchy closure");

    const out = prepareVariant("omd-decision-context-experimental", {
      task: deletionApprovalTaskId,
      runtime: "cursor",
      outputName: "decision-context-experimental",
    });
    const manifest = JSON.parse(readFileSync(join(out, ".benchmark/manifest.json"), "utf8"));
    expect(manifest).toMatchObject({
      task: { id: deletionApprovalTaskId, version: "0.2.0" },
      variant: {
        id: "omd-decision-context-experimental",
        kind: "local-skill-experimental",
      },
      skill: {
        declared_name: "omd-apply",
        source_path: "benchmarks/ui-resolve-bench/experimental-skills/omd-decision-context-closure",
      },
    });
    expect(readFileSync(join(out, ".cursor/skills/omd-apply/SKILL.md"), "utf8"))
      .toContain("decision-context hierarchy closure");
  });

  it("keeps the reflow-integrity experiment to one activation delta on the exact current skill", () => {
    const control = competitors.variants["omd-portable-jade"];
    const experimental = competitors.variants["omd-reflow-integrity-experimental"];
    expect(experimental).toMatchObject({
      kind: "local-skill-experimental",
      vendor_dir: control.vendor_dir,
      source_path: control.source_path,
      install_adapter: control.install_adapter,
      install_root: control.install_root,
      install_dir: control.install_dir,
      declared_name: control.declared_name,
      commit: control.commit,
      eligible_tracks: ["repair", "evidence-unknown"],
    });
    expect(experimental.activation).toContain("one reflow-integrity closure");
    expect(experimental.activation).toContain("320px and 200% reflow");
    expect(experimental.activation).toContain("never word-break, hidden duplication, invented abbreviation, or overflow");
    expect(experimental.activation).toContain("keep target, evidence, state, and action inside it");
    expect(control.activation).not.toContain("reflow-integrity closure");
  });

  it("keeps reflow-integrity v2 activation-only and guards against nowrap regressions", () => {
    const control = competitors.variants["omd-portable-jade"];
    const experimental = competitors.variants["omd-reflow-integrity-v2-experimental"];
    expect(experimental).toMatchObject({
      kind: "local-skill-experimental",
      vendor_dir: control.vendor_dir,
      source_path: control.source_path,
      install_adapter: control.install_adapter,
      install_root: control.install_root,
      install_dir: control.install_dir,
      declared_name: control.declared_name,
      commit: control.commit,
      eligible_tracks: ["repair", "evidence-unknown"],
    });
    expect(experimental.activation).toContain("one bounded reflow-integrity closure");
    expect(experimental.activation).toContain("allocate a full-width reading row or sufficient minmax space");
    expect(experimental.activation).toContain("keeping it on one line is the acceptance result, not the first CSS tactic");
    expect(experimental.activation).toContain("Never use white-space: nowrap when it causes horizontal overflow, clipping, or a box-width collision");
    expect(experimental.activation).toContain("CSS-generated mobile label must fit its declared box without overlap");
    expect(experimental.activation).toContain("selected-target emphasis");
    expect(control.activation).not.toContain("bounded reflow-integrity closure");
  });

  it("pins the exact canonical reflow candidate separately from the previous source", () => {
    const previous = competitors.variants["omd-portable-jade"];
    const candidate = competitors.variants["omd-portable-reflow-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.126",
      source_path: previous.source_path,
      install_adapter: previous.install_adapter,
      install_root: previous.install_root,
      install_dir: previous.install_dir,
      declared_name: previous.declared_name,
      commit: "fb44964c5e177fc6fd55f1dd8bb0c29375132ff9",
      activation: previous.activation,
    });
    expect(candidate.commit).not.toBe(previous.commit);
  });

  it("pins the hardened v3 candidate separately from both prior sources", () => {
    const previous = competitors.variants["omd-portable-jade"];
    const rejected = competitors.variants["omd-portable-reflow-candidate"];
    const candidate = competitors.variants["omd-portable-reflow-v3-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.129",
      source_path: previous.source_path,
      install_adapter: previous.install_adapter,
      install_root: previous.install_root,
      install_dir: previous.install_dir,
      declared_name: previous.declared_name,
      commit: "b85ad330b63d502ecabc6741c0a7c599da6d2f58",
      activation: previous.activation,
    });
    expect(candidate.commit).not.toBe(previous.commit);
    expect(candidate.commit).not.toBe(rejected.commit);
  });

  it("pins the decision-context v4 candidate separately from every prior source", () => {
    const previous = competitors.variants["omd-portable-jade"];
    const v2 = competitors.variants["omd-portable-reflow-candidate"];
    const v3 = competitors.variants["omd-portable-reflow-v3-candidate"];
    const candidate = competitors.variants["omd-portable-reflow-v4-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.134",
      source_path: previous.source_path,
      install_adapter: previous.install_adapter,
      install_root: previous.install_root,
      install_dir: previous.install_dir,
      declared_name: previous.declared_name,
      commit: "c8416c435d6cfd17868731eab580decc865d66c8",
      activation: previous.activation,
    });
    expect(new Set([previous.commit, v2.commit, v3.commit, candidate.commit]).size).toBe(4);
  });

  it("pins the compact-label v5 candidate separately from every prior source", () => {
    const previous = competitors.variants["omd-portable-jade"];
    const v2 = competitors.variants["omd-portable-reflow-candidate"];
    const v3 = competitors.variants["omd-portable-reflow-v3-candidate"];
    const v4 = competitors.variants["omd-portable-reflow-v4-candidate"];
    const candidate = competitors.variants["omd-portable-reflow-v5-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.138",
      source_path: previous.source_path,
      install_adapter: previous.install_adapter,
      install_root: previous.install_root,
      install_dir: previous.install_dir,
      declared_name: previous.declared_name,
      commit: "c61506779faa672b754ccd7acc2bb66b34a9a01c",
      activation: previous.activation,
    });
    expect(new Set([previous.commit, v2.commit, v3.commit, v4.commit, candidate.commit]).size).toBe(5);
  });

  it("pins the ordered reflow v6 candidate separately from prior sources", () => {
    const previous = competitors.variants["omd-portable-jade"];
    const v4 = competitors.variants["omd-portable-reflow-v4-candidate"];
    const v5 = competitors.variants["omd-portable-reflow-v5-candidate"];
    const candidate = competitors.variants["omd-portable-reflow-v6-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.142",
      source_path: previous.source_path,
      install_adapter: previous.install_adapter,
      install_root: previous.install_root,
      install_dir: previous.install_dir,
      declared_name: previous.declared_name,
      commit: "d971174a857827d58f11dac58ebb5fb6370d9c35",
      activation: previous.activation,
    });
    expect(new Set([previous.commit, v4.commit, v5.commit, candidate.commit]).size).toBe(4);
  });

  it("pins the full-row width recovery v7 candidate separately from prior sources", () => {
    const previous = competitors.variants["omd-portable-jade"];
    const v5 = competitors.variants["omd-portable-reflow-v5-candidate"];
    const v6 = competitors.variants["omd-portable-reflow-v6-candidate"];
    const candidate = competitors.variants["omd-portable-reflow-v7-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.147",
      source_path: previous.source_path,
      install_adapter: previous.install_adapter,
      install_root: previous.install_root,
      install_dir: previous.install_dir,
      declared_name: previous.declared_name,
      commit: "0b81b5264cf7bf955629d0dd2a98d1aaff56f0a3",
      activation: previous.activation,
    });
    expect(new Set([previous.commit, v5.commit, v6.commit, candidate.commit]).size).toBe(4);
  });

  it("pins the auditable width and protected visibility v8 candidate separately", () => {
    const previous = competitors.variants["omd-portable-jade"];
    const v6 = competitors.variants["omd-portable-reflow-v6-candidate"];
    const v7 = competitors.variants["omd-portable-reflow-v7-candidate"];
    const candidate = competitors.variants["omd-portable-reflow-v8-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.151",
      source_path: previous.source_path,
      install_adapter: previous.install_adapter,
      install_root: previous.install_root,
      install_dir: previous.install_dir,
      declared_name: previous.declared_name,
      commit: "e33fd2198bee50938ed3da51989dc9f9d13256a2",
      activation: previous.activation,
    });
    expect(new Set([previous.commit, v6.commit, v7.commit, candidate.commit]).size).toBe(4);
  });

  it("pins the declared evidence type-role v9 candidate separately", () => {
    const previous = competitors.variants["omd-portable-jade"];
    const v7 = competitors.variants["omd-portable-reflow-v7-candidate"];
    const v8 = competitors.variants["omd-portable-reflow-v8-candidate"];
    const candidate = competitors.variants["omd-portable-reflow-v9-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.155",
      source_path: previous.source_path,
      install_adapter: previous.install_adapter,
      install_root: previous.install_root,
      install_dir: previous.install_dir,
      declared_name: previous.declared_name,
      commit: "b6fa87d1d274b5b74283ccdc9d7717aa765ea6fc",
      activation: previous.activation,
    });
    expect(new Set([previous.commit, v7.commit, v8.commit, candidate.commit]).size).toBe(4);
  });

  it("pins the relational control-copy v10 candidate separately", () => {
    const previous = competitors.variants["omd-portable-jade"];
    const v8 = competitors.variants["omd-portable-reflow-v8-candidate"];
    const v9 = competitors.variants["omd-portable-reflow-v9-candidate"];
    const candidate = competitors.variants["omd-portable-reflow-v10-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.159",
      source_path: previous.source_path,
      install_adapter: previous.install_adapter,
      install_root: previous.install_root,
      install_dir: previous.install_dir,
      declared_name: previous.declared_name,
      commit: "e3e5c6e4edb968a76ded79d6a9f5f6fe4c453a33",
      activation: previous.activation,
    });
    expect(new Set([previous.commit, v8.commit, v9.commit, candidate.commit]).size).toBe(4);
  });

  it("pins the measured reflow outcome v11 candidate separately", () => {
    const previous = competitors.variants["omd-portable-jade"];
    const v9 = competitors.variants["omd-portable-reflow-v9-candidate"];
    const v10 = competitors.variants["omd-portable-reflow-v10-candidate"];
    const candidate = competitors.variants["omd-portable-reflow-v11-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.164",
      source_path: previous.source_path,
      install_adapter: previous.install_adapter,
      install_root: previous.install_root,
      install_dir: previous.install_dir,
      declared_name: previous.declared_name,
      commit: "4c27cb484ae19ceac3f72dedf4324592f2c60946",
      activation: previous.activation,
    });
    expect(new Set([previous.commit, v9.commit, v10.commit, candidate.commit]).size).toBe(4);
  });

  it("pins the final-selector one-line v13 candidate separately", () => {
    const previous = competitors.variants["omd-portable-jade"];
    const v11 = competitors.variants["omd-portable-reflow-v11-candidate"];
    const v12 = competitors.variants["omd-portable-reflow-v12-candidate"];
    const candidate = competitors.variants["omd-portable-reflow-v13-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.174",
      source_path: previous.source_path,
      install_adapter: previous.install_adapter,
      install_root: previous.install_root,
      install_dir: previous.install_dir,
      declared_name: previous.declared_name,
      commit: "6baa55365fe11b8b9eb77f49ffb8b1d44bf8e75d",
      activation: previous.activation,
    });
    expect(new Set([previous.commit, v11.commit, v12.commit, candidate.commit]).size).toBe(4);
  });

  it("pins the compact reflow work-packet candidate separately", () => {
    const previous = competitors.variants["omd-portable-jade"];
    const v12 = competitors.variants["omd-portable-reflow-v12-candidate"];
    const v13 = competitors.variants["omd-portable-reflow-v13-candidate"];
    const candidate = competitors.variants["omd-portable-reflow-packet-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.178",
      source_path: previous.source_path,
      install_adapter: previous.install_adapter,
      install_root: previous.install_root,
      install_dir: previous.install_dir,
      declared_name: previous.declared_name,
      commit: "65f068cc081ebf7be1bfc2ea4811ef285919b1a1",
      activation: previous.activation,
    });
    expect(new Set([previous.commit, v12.commit, v13.commit, candidate.commit]).size).toBe(4);
  });

  it("pins the single-pass proof-budget candidate separately", () => {
    const previous = competitors.variants["omd-portable-jade"];
    const packet = competitors.variants["omd-portable-reflow-packet-candidate"];
    const candidate = competitors.variants["omd-portable-proof-budget-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.185",
      source_path: previous.source_path,
      install_adapter: previous.install_adapter,
      install_root: previous.install_root,
      install_dir: previous.install_dir,
      declared_name: previous.declared_name,
      commit: "a7d4c03df6f4bbe5691dec4874fc5ca961e0c118",
      activation: previous.activation,
    });
    expect(new Set([previous.commit, packet.commit, candidate.commit]).size).toBe(3);
  });

  it("pins the revision-bound proof close-latch candidate separately", () => {
    const previous = competitors.variants["omd-portable-jade"];
    const packet = competitors.variants["omd-portable-reflow-packet-candidate"];
    const budget = competitors.variants["omd-portable-proof-budget-candidate"];
    const candidate = competitors.variants["omd-portable-proof-close-latch-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.191",
      source_path: previous.source_path,
      install_adapter: previous.install_adapter,
      install_root: previous.install_root,
      install_dir: previous.install_dir,
      declared_name: previous.declared_name,
      commit: "1d204afea6c3ab106752613b7f341ed2f76fd843",
      activation: previous.activation,
    });
    expect(new Set([previous.commit, packet.commit, budget.commit, candidate.commit]).size).toBe(4);
  });

  it("pins the readable reflow candidate separately from the close latch", () => {
    const previous = competitors.variants["omd-portable-proof-close-latch-candidate"];
    const candidate = competitors.variants["omd-portable-readable-reflow-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.230",
      source_path: previous.source_path,
      install_adapter: previous.install_adapter,
      install_root: previous.install_root,
      install_dir: previous.install_dir,
      declared_name: previous.declared_name,
      commit: "7915723887a47a538c91f1aa51bd7b2972757091",
      activation: previous.activation,
    });
    expect(candidate.commit).not.toBe(previous.commit);
  });

  it("pins the compact release-blocker candidate separately from rejected readable reflow", () => {
    const baseline = competitors.variants["omd-portable-proof-close-latch-candidate"];
    const rejected = competitors.variants["omd-portable-readable-reflow-candidate"];
    const candidate = competitors.variants["omd-portable-release-blocker-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.241",
      source_path: baseline.source_path,
      install_adapter: baseline.install_adapter,
      install_root: baseline.install_root,
      install_dir: baseline.install_dir,
      declared_name: baseline.declared_name,
      commit: "aa074ab40a0db98fedb8d7233f8ff9871e8c15f9",
      activation: baseline.activation,
    });
    expect(new Set([baseline.commit, rejected.commit, candidate.commit]).size).toBe(3);
  });

  it("pins the semantic-carrier candidate separately from rejected release blocker", () => {
    const baseline = competitors.variants["omd-portable-proof-close-latch-candidate"];
    const rejected = competitors.variants["omd-portable-release-blocker-candidate"];
    const candidate = competitors.variants["omd-portable-semantic-carrier-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.252",
      source_path: baseline.source_path,
      install_adapter: baseline.install_adapter,
      install_root: baseline.install_root,
      install_dir: baseline.install_dir,
      declared_name: baseline.declared_name,
      commit: "ba8fb546b48c1a49e9e8b31227aab438c8a0ce2f",
      activation: baseline.activation,
    });
    expect(new Set([baseline.commit, rejected.commit, candidate.commit]).size).toBe(3);
  });

  it("pins the pre-edit invariant candidate separately from rejected semantic carrier", () => {
    const competitors = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/competitors.json"), "utf8"));
    const previous = competitors.variants["omd-portable-semantic-carrier-candidate"];
    const candidate = competitors.variants["omd-portable-pre-edit-invariant-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.263",
      source_path: "skills/omd-apply",
      declared_name: "omd:apply",
      commit: "c67c9c1b43f3e7263f7fd0ccf23ff5690ec191b0",
    });
    expect(candidate.commit).not.toBe(previous.commit);
  });

  it("pins the conjunctive release candidate separately from rejected pre-edit invariant", () => {
    const previous = competitors.variants["omd-portable-pre-edit-invariant-candidate"];
    const candidate = competitors.variants["omd-portable-conjunctive-release-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.274",
      source_path: "skills/omd-apply",
      declared_name: "omd:apply",
      commit: "3a414a0a70dcc7fc70fb166e923ff318d3c53c66",
    });
    expect(candidate.commit).not.toBe(previous.commit);
  });

  it("pins the all-carrier-set candidate separately from rejected conjunctive release", () => {
    const competitors = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/competitors.json"), "utf8"));
    const previous = competitors.variants["omd-portable-conjunctive-release-candidate"];
    const candidate = competitors.variants["omd-portable-all-carrier-set-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.286",
      source_path: "skills/omd-apply",
      declared_name: "omd:apply",
      commit: "64565bc69c6411491c8d9615d86ffa889f05a59c",
    });
    expect(candidate.commit).not.toBe(previous.commit);
  });

  it("pins the carrier-inventory closure candidate separately from both earlier carrier contracts", () => {
    const conjunctive = competitors.variants["omd-portable-conjunctive-release-candidate"];
    const allCarrier = competitors.variants["omd-portable-all-carrier-set-candidate"];
    const candidate = competitors.variants["omd-portable-carrier-inventory-closure-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.298",
      source_path: "skills/omd-apply",
      declared_name: "omd:apply",
      commit: "a57c374152dede7d3e17e856eda5f806d6c7c375",
    });
    expect(candidate.commit).not.toBe(conjunctive.commit);
    expect(candidate.commit).not.toBe(allCarrier.commit);
  });

  it("pins the runtime reflow artifact gate separately from the prose-only inventory candidate", () => {
    const previous = competitors.variants["omd-portable-carrier-inventory-closure-candidate"];
    const candidate = competitors.variants["omd-runtime-reflow-artifact-gate-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.309",
      source_path: "skills/omd-apply",
      declared_name: "omd:apply",
      commit: "8f8cec6e1e4ac482b9c4afae603d31413521c767",
    });
    expect(candidate.commit).not.toBe(previous.commit);
  });

  it("pins the compact reflow artifact candidate separately from the timed-out runtime candidate", () => {
    const previous = competitors.variants["omd-runtime-reflow-artifact-gate-candidate"];
    const candidate = competitors.variants["omd-compact-reflow-artifact-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.334",
      source_path: "skills/omd-apply",
      declared_name: "omd:apply",
      commit: "c1de0e4e9520c8ca333b59557217dd40219ae195",
    });
    expect(candidate.commit).not.toBe(previous.commit);
  });

  it("pins the known-failure closure candidate separately from the compact artifact candidate", () => {
    const previous = competitors.variants["omd-compact-reflow-artifact-candidate"];
    const candidate = competitors.variants["omd-known-failure-closure-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.389",
      source_path: "skills/omd-apply",
      declared_name: "omd:apply",
      commit: "e6513930bb29905190d193dfd7ee111aaf91c917",
    });
    expect(candidate.commit).not.toBe(previous.commit);
  });

  it("pins the runtime conjunctive closure candidate separately from the known-failure candidate", () => {
    const previous = competitors.variants["omd-known-failure-closure-candidate"];
    const candidate = competitors.variants["omd-runtime-conjunctive-closure-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.395",
      source_path: "skills/omd-apply",
      declared_name: "omd:apply",
      commit: "effd1d93d415f625cc9fb6222b9a2e89aca6f110",
    });
    expect(candidate.commit).not.toBe(previous.commit);
  });

  it("pins the parent-atomic browser-proof candidate separately from the range-oracle control", () => {
    const previous = competitors.variants["omd-compound-atomic-range-oracle-candidate"];
    const candidate = competitors.variants["omd-atomic-browser-proof-budget-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.432",
      source_path: "skills/omd-apply",
      install_adapter: previous.install_adapter,
      install_root: previous.install_root,
      install_dir: previous.install_dir,
      declared_name: "omd:apply",
      commit: "f346610a0d75d2f68417572d08456b82e74187ed",
      activation: previous.activation,
    });
    expect(candidate.commit).not.toBe(previous.commit);
  });

  it("pins the parent-line terminal-browser candidate separately from the proof-budget candidate", () => {
    const previous = competitors.variants["omd-atomic-browser-proof-budget-candidate"];
    const candidate = competitors.variants["omd-parent-one-line-terminal-browser-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.439",
      source_path: "skills/omd-apply",
      install_adapter: previous.install_adapter,
      install_root: previous.install_root,
      install_dir: previous.install_dir,
      declared_name: "omd:apply",
      commit: "3c00a4c1519ec681c1f088e8daf6a7daba39be12",
      activation: previous.activation,
    });
    expect(candidate.commit).not.toBe(previous.commit);
  });

  it("pins the actual-zoom single-static candidate separately from the parent-line candidate", () => {
    const previous = competitors.variants["omd-parent-one-line-terminal-browser-candidate"];
    const candidate = competitors.variants["omd-actual-zoom-single-static-terminal-candidate"];
    expect(candidate.vendor_dir).toBe("omd-1.9.446");
    expect(candidate.commit).toBe("5d5ee0410a5b066f65f279b97287ff9f13826d95");
    expect(candidate.commit).not.toBe(previous.commit);
    expect(candidate.declared_name).toBe("omd:apply");
  });

  it("pins the accessible atomic-fit static-latch candidate separately from actual-zoom", () => {
    const previous = competitors.variants["omd-actual-zoom-single-static-terminal-candidate"];
    const candidate = competitors.variants["omd-accessible-atomic-fit-static-latch-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.453",
      source_path: "skills/omd-apply",
      install_adapter: previous.install_adapter,
      install_root: previous.install_root,
      install_dir: previous.install_dir,
      declared_name: "omd:apply",
      commit: "f578e8a63dbff7dd9f9de6da8f4e201b7e35c8ee",
      activation: previous.activation,
    });
    expect(candidate.commit).not.toBe(previous.commit);
  });

  it("pins the consumer-browser fit candidate separately from deterministic static closure", () => {
    const previous = competitors.variants["omd-deterministic-static-closure-candidate"];
    const candidate = competitors.variants["omd-consumer-browser-fit-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.467",
      source_path: "skills/omd-apply",
      install_adapter: previous.install_adapter,
      install_root: previous.install_root,
      install_dir: previous.install_dir,
      declared_name: "omd:apply",
      commit: "757bb270bad8cef70342f416053d3941d259429e",
      activation: previous.activation,
    });
    expect(candidate.commit).not.toBe(previous.commit);
  });

  it("pins the attribute-aware consumer-fit candidate separately from consumer-browser fit", () => {
    const previous = competitors.variants["omd-consumer-browser-fit-candidate"];
    const candidate = competitors.variants["omd-attribute-aware-consumer-fit-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.474",
      source_path: "skills/omd-apply",
      install_adapter: previous.install_adapter,
      install_root: previous.install_root,
      install_dir: previous.install_dir,
      declared_name: "omd:apply",
      commit: "e848d129667d661a240546762a25691e732de5d5",
      activation: previous.activation,
    });
    expect(candidate.commit).not.toBe(previous.commit);
  });

  it("pins the shipped consumer-browser candidate separately from attribute-aware fit", () => {
    const previous = competitors.variants["omd-attribute-aware-consumer-fit-candidate"];
    const candidate = competitors.variants["omd-shipped-consumer-browser-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.476",
      source_path: "skills/omd-apply",
      install_adapter: previous.install_adapter,
      install_root: previous.install_root,
      install_dir: previous.install_dir,
      declared_name: "omd:apply",
      commit: "6bfdc7bc9f3bcb7d5089b5acb79b9e26b9372673",
      activation: previous.activation,
    });
    expect(candidate.commit).not.toBe(previous.commit);
  });

  it("pins the socket-native consumer-browser candidate separately from the endpoint-bound runner", () => {
    const previous = competitors.variants["omd-shipped-consumer-browser-candidate"];
    const candidate = competitors.variants["omd-socket-native-consumer-browser-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.483",
      source_path: "skills/omd-apply",
      install_adapter: previous.install_adapter,
      install_root: previous.install_root,
      install_dir: previous.install_dir,
      declared_name: "omd:apply",
      commit: "aa0d680d7f87a22406bc29fb408f36fa88384eba",
      activation: previous.activation,
    });
    expect(candidate.commit).not.toBe(previous.commit);
  });

  it("pins the visible atomic-fit candidate separately from socket-native proof", () => {
    const previous = competitors.variants["omd-socket-native-consumer-browser-candidate"];
    const candidate = competitors.variants["omd-visible-atomic-fit-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.490",
      source_path: "skills/omd-apply",
      install_adapter: previous.install_adapter,
      install_root: previous.install_root,
      install_dir: previous.install_dir,
      declared_name: "omd:apply",
      commit: "931e124c9d15c5e2c4e561db5a880775acf8031c",
      activation: previous.activation,
    });
    expect(candidate.commit).not.toBe(previous.commit);
  });

  it("pins computed type and target-only carriers separately from visible atomic fit", () => {
    const previous = competitors.variants["omd-visible-atomic-fit-candidate"];
    const candidate = competitors.variants["omd-computed-type-target-carrier-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.497",
      source_path: "skills/omd-apply",
      install_adapter: previous.install_adapter,
      install_root: previous.install_root,
      install_dir: previous.install_dir,
      declared_name: "omd:apply",
      commit: "14ed77650e7353e4f98dcb105660266102c01abc",
      activation: previous.activation,
    });
    expect(candidate.commit).not.toBe(previous.commit);
  });

  it("pins static absence guardrails separately from computed type carriers", () => {
    const previous = competitors.variants["omd-computed-type-target-carrier-candidate"];
    const candidate = competitors.variants["omd-static-absence-guardrail-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.504",
      source_path: "skills/omd-apply",
      install_adapter: previous.install_adapter,
      install_root: previous.install_root,
      install_dir: previous.install_dir,
      declared_name: "omd:apply",
      commit: "86546d5af67d4a71f0b6a867ec3869ec299f3159",
      activation: previous.activation,
    });
    expect(candidate.commit).not.toBe(previous.commit);
  });

  it("pins measured pre-edit fit planning separately from declarative fit margin", () => {
    const previous = competitors.variants["omd-acceptance-debt-fit-margin-candidate"];
    const candidate = competitors.variants["omd-measured-pre-edit-fit-plan-candidate"];
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.525",
      source_path: "skills/omd-apply",
      install_adapter: previous.install_adapter,
      install_root: previous.install_root,
      install_dir: previous.install_dir,
      declared_name: "omd:apply",
      commit: "b3b83bf7cc3808c643beb34934ad1096ee334270",
      activation: previous.activation,
    });
    expect(candidate.commit).not.toBe(previous.commit);
  });

  it("pins aggregate carrier planning separately from row-only measured planning", () => {
    const previous = competitors.variants["omd-measured-pre-edit-fit-plan-candidate"];
    const candidate = competitors.variants["omd-aggregate-carrier-fit-plan-candidate"];
    const pin = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/aggregate-carrier-fit-plan-pin-1.9.534/PIN.json",
    ), "utf8"));
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.533",
      source_path: "skills/omd-apply",
      install_adapter: previous.install_adapter,
      install_root: previous.install_root,
      install_dir: previous.install_dir,
      declared_name: "omd:apply",
      commit: "0b93fa971c5d4e086b2645f2de9dd09fe1b365fe",
      activation: previous.activation,
    });
    expect(candidate.commit).not.toBe(previous.commit);
    expect(pin).toMatchObject({
      product_version: "1.9.534",
      source_commit: candidate.commit,
      skill_tree: "50037b947ba4f704ef45395aa948777f9d7e7992",
      status: "PINNED",
      provider_calls: 0,
      quality_promotion: false,
      competitor: {
        id: "omd-aggregate-carrier-fit-plan-candidate",
        vendor_directory: "omd-1.9.533",
        exact_source_required: true,
      },
    });
  });

  it("locks an unseen spatial aircraft load-plan family before runtime artifact validation", () => {
    const task = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/tasks",
      aircraftLoadPlanTaskId,
      "task.json",
    ), "utf8"));
    expect(validateTaskContract(task)).toMatchObject({
      id: aircraftLoadPlanTaskId,
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      protected_hook_counts: {
        "[data-bench='hold-bay']": 6,
        "[data-bench='container-id']": 8,
        "[data-bench='station-id']": 4,
        "[data-bench='station-weight']": 4,
      },
      text_geometry_oracle: {
        scope_selectors: [
          "[data-bench-design-role='load-plan']",
          "[data-bench='balance-carrier']",
          "[data-bench-decision-role='context']",
        ],
      },
    });
    const out = prepareVariant("raw-design-md", {
      task: aircraftLoadPlanTaskId,
      outputName: "aircraft-load-plan-lock",
    });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/data-bench="hold-bay"/g)).toHaveLength(6);
    expect(starter.match(/data-bench="container-id"/g)).toHaveLength(8);
    expect(starter).toContain("HOLD-AFT-21 + ULD-AKE-73018");
    expect(starter).toContain("6 bays · 8 containers · 4 station readings");
  });

  it("locks an unseen orbital contact-plan family before compact artifact validation", () => {
    const task = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/tasks",
      orbitalContactPlanTaskId,
      "task.json",
    ), "utf8"));
    expect(validateTaskContract(task)).toMatchObject({
      id: orbitalContactPlanTaskId,
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      protected_hook_counts: {
        "[data-bench='contact-window']": 6,
        "[data-bench='command-bundle-id']": 8,
        "[data-bench='antenna-id']": 4,
        "[data-bench='link-window']": 4,
      },
      text_geometry_oracle: {
        scope_selectors: [
          "[data-bench-design-role='contact-plan']",
          "[data-bench='antenna-strip']",
          "[data-bench-decision-role='context']",
        ],
      },
    });
    const out = prepareVariant("raw-design-md", {
      task: orbitalContactPlanTaskId,
      outputName: "orbital-contact-plan-lock",
    });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/data-bench="contact-window"/g)).toHaveLength(6);
    expect(starter.match(/data-bench="command-bundle-id"/g)).toHaveLength(8);
    expect(starter).toContain("PASS-GEO-204 + CMD-PKG-73018");
    expect(starter).toContain("6 passes · 8 command bundles · 4 antenna windows");
    expect(starter).not.toContain("HOLD-AFT-21");
  });

  it("locks an unseen grid battery dispatch family before actual-zoom validation", () => {
    const task = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/tasks",
      gridBatteryDispatchTaskId,
      "task.json",
    ), "utf8"));
    expect(validateTaskContract(task)).toMatchObject({
      id: gridBatteryDispatchTaskId,
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      journey_oracle: {
        choice: {
          values: ["battery-register", "dispatch-windows", "energization-decision"],
          initial: "battery-register",
          selected: "dispatch-windows",
        },
        form: { valid_value: "Block C energization review" },
      },
      protected_hook_counts: {
        "[data-bench='container-case']": 6,
        "[data-bench='container-id']": 6,
        "[data-bench='certificate-id']": 8,
        "[data-bench='unit-id']": 4,
        "[data-bench='dispatch-window']": 4,
      },
    });
    const out = prepareVariant("raw-design-md", {
      task: gridBatteryDispatchTaskId,
      outputName: "grid-battery-dispatch-lock",
    });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/data-bench="container-case"/g)).toHaveLength(6);
    expect(starter.match(/data-bench="certificate-id"/g)).toHaveLength(8);
    expect(starter.match(/data-bench="dispatch-window"/g)).toHaveLength(4);
    expect(starter).toContain("BESS-RACK-308114 + CERT-INVR-77421");
    expect(starter).toContain("6 battery racks · 8 inverter certificates · 4 dispatch windows");
    expect(starter).not.toContain("RX-CONTROL-308114");
  });

  it("locks an unseen radiotherapy export family before accessible atomic-fit validation", () => {
    const task = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/tasks",
      radiotherapyPlanExportTaskId,
      "task.json",
    ), "utf8"));
    expect(validateTaskContract(task)).toMatchObject({
      id: radiotherapyPlanExportTaskId,
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      journey_oracle: {
        choice: {
          values: ["plan-manifest", "qa-windows", "export-decision"],
          initial: "plan-manifest",
          selected: "qa-windows",
        },
        form: { valid_value: "Vault R7 export review" },
      },
      protected_hook_counts: {
        "[data-bench='plan-case']": 5,
        "[data-bench='plan-id']": 5,
        "[data-bench='dicom-id']": 7,
        "[data-bench='qa-room-id']": 3,
        "[data-bench='qa-window']": 3,
      },
    });
    const out = prepareVariant("raw-design-md", {
      task: radiotherapyPlanExportTaskId,
      outputName: "radiotherapy-plan-export-lock",
    });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/data-bench="plan-case"/g)).toHaveLength(5);
    expect(starter.match(/data-bench="dicom-id"/g)).toHaveLength(7);
    expect(starter.match(/data-bench="qa-window"/g)).toHaveLength(3);
    expect(starter).toContain("PLAN-HN-042731 + DICOM-RS-849103");
    expect(starter).toContain("5 treatment plans · 7 DICOM bundles · 3 QA windows");
    expect(starter).not.toContain("BESS-RACK-308114");
  });

  it("locks an unseen satellite telemetry family before deterministic static-closure validation", () => {
    const task = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/tasks",
      satelliteTelemetryReleaseTaskId,
      "task.json",
    ), "utf8"));
    expect(validateTaskContract(task)).toMatchObject({
      id: satelliteTelemetryReleaseTaskId,
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      journey_oracle: {
        choice: {
          values: ["payload-manifest", "ground-passes", "release-decision"],
          initial: "payload-manifest",
          selected: "ground-passes",
        },
        form: { valid_value: "Asteria relay release" },
      },
      protected_hook_counts: {
        "[data-bench='payload-case']": 4,
        "[data-bench='payload-id']": 4,
        "[data-bench='archive-id']": 6,
        "[data-bench='station-id']": 3,
        "[data-bench='pass-window']": 3,
      },
    });
    const out = prepareVariant("raw-design-md", {
      task: satelliteTelemetryReleaseTaskId,
      outputName: "satellite-telemetry-release-lock",
    });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/data-bench="payload-case"/g)).toHaveLength(4);
    expect(starter.match(/data-bench="archive-id"/g)).toHaveLength(6);
    expect(starter.match(/data-bench="pass-window"/g)).toHaveLength(3);
    expect(starter).toContain("PAYLOAD-SR-057432 + TLM-ARC-920176");
    expect(starter).toContain("4 payloads · 6 telemetry archives · 3 ground passes");
    expect(starter).not.toContain("PLAN-HN-042731");
  });

  it("locks an unseen genomic sequencing family before consumer-browser fit validation", () => {
    const task = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/tasks",
      genomicSequencingReleaseTaskId,
      "task.json",
    ), "utf8"));
    expect(validateTaskContract(task)).toMatchObject({
      id: genomicSequencingReleaseTaskId,
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      journey_oracle: {
        choice: {
          values: ["library-manifest", "instrument-lanes", "release-decision"],
          initial: "library-manifest",
          selected: "instrument-lanes",
        },
        form: { valid_value: "NovaSeq batch release" },
      },
      protected_hook_counts: {
        "[data-bench='library-case']": 5,
        "[data-bench='library-id']": 5,
        "[data-bench='readset-id']": 7,
        "[data-bench='lane-id']": 3,
        "[data-bench='qc-window']": 3,
      },
    });
    const out = prepareVariant("raw-design-md", {
      task: genomicSequencingReleaseTaskId,
      outputName: "genomic-sequencing-release-lock",
    });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/data-bench="library-case"/g)).toHaveLength(5);
    expect(starter.match(/data-bench="readset-id"/g)).toHaveLength(7);
    expect(starter.match(/data-bench="qc-window"/g)).toHaveLength(3);
    expect(starter).toContain("LIBRARY-ONC-048271 + READSET-R2-905184");
    expect(starter).toContain("5 libraries · 7 read sets · 3 instrument lanes");
    expect(starter).not.toContain("PAYLOAD-SR-057432");
  });

  it("locks an unseen semiconductor disposition family before shipped consumer-browser validation", () => {
    const task = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/tasks",
      semiconductorWaferDispositionTaskId,
      "task.json",
    ), "utf8"));
    expect(validateTaskContract(task)).toMatchObject({
      id: semiconductorWaferDispositionTaskId,
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      journey_oracle: {
        choice: {
          values: ["lot-register", "process-chambers", "disposition-decision"],
          initial: "lot-register",
          selected: "process-chambers",
        },
        form: { valid_value: "Etch batch disposition" },
      },
      protected_hook_counts: {
        "[data-bench='wafer-lot']": 5,
        "[data-bench='lot-id']": 5,
        "[data-bench='metrology-id']": 7,
        "[data-bench='chamber-id']": 3,
        "[data-bench='process-window']": 3,
      },
    });
    const out = prepareVariant("raw-design-md", {
      task: semiconductorWaferDispositionTaskId,
      outputName: "semiconductor-wafer-disposition-lock",
    });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/data-bench="wafer-lot"/g)).toHaveLength(5);
    expect(starter.match(/data-bench="metrology-id"/g)).toHaveLength(7);
    expect(starter.match(/data-bench="process-window"/g)).toHaveLength(3);
    expect(starter).toContain("LOT-ETCH-048271 + METROLOGY-CD-905184");
    expect(starter).toContain("5 wafer lots · 7 metrology scans · 3 process chambers");
    expect(starter).not.toContain("LIBRARY-ONC-048271");
  });

  it("locks an unseen water-treatment release family before socket-native transfer", () => {
    const task = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/tasks",
      waterTreatmentBatchReleaseTaskId,
      "task.json",
    ), "utf8"));
    expect(validateTaskContract(task)).toMatchObject({
      id: waterTreatmentBatchReleaseTaskId,
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      journey_oracle: {
        choice: {
          values: ["batch-register", "treatment-trains", "release-decision"],
          initial: "batch-register",
          selected: "treatment-trains",
        },
        form: { valid_value: "North basin batch release" },
      },
      protected_hook_counts: {
        "[data-bench='treatment-batch']": 5,
        "[data-bench='batch-id']": 5,
        "[data-bench='sample-id']": 7,
        "[data-bench='train-id']": 3,
        "[data-bench='run-window']": 3,
      },
    });
    const out = prepareVariant("raw-design-md", {
      task: waterTreatmentBatchReleaseTaskId,
      outputName: "water-treatment-batch-release-lock",
    });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/data-bench="treatment-batch"/g)).toHaveLength(5);
    expect(starter.match(/data-bench="sample-id"/g)).toHaveLength(7);
    expect(starter.match(/data-bench="run-window"/g)).toHaveLength(3);
    expect(starter).toContain("BATCH-NORTH-048271 + SAMPLE-MICRO-905184");
    expect(starter).toContain("5 treatment batches · 7 laboratory samples · 3 treatment trains");
    expect(starter).not.toContain("LOT-ETCH-048271");
  });

  it("locks an unseen flight-recorder download family before visible atomic-fit transfer", () => {
    const task = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/tasks", flightRecorderDownloadTaskId, "task.json"), "utf8"));
    expect(validateTaskContract(task)).toMatchObject({
      id: flightRecorderDownloadTaskId,
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      journey_oracle: {
        choice: { values: ["airframe-manifest", "acquisition-stations", "download-decision"], initial: "airframe-manifest", selected: "acquisition-stations" },
        form: { valid_value: "Flight 782 recorder download" },
      },
      protected_hook_counts: {
        "[data-bench='airframe-case']": 4,
        "[data-bench='airframe-id']": 4,
        "[data-bench='recorder-segment-id']": 6,
        "[data-bench='station-id']": 2,
        "[data-bench='acquisition-window']": 2,
      },
    });
    const out = prepareVariant("raw-design-md", { task: flightRecorderDownloadTaskId, outputName: "flight-recorder-download-lock" });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/data-bench="airframe-case"/g)).toHaveLength(4);
    expect(starter.match(/data-bench="recorder-segment-id"/g)).toHaveLength(6);
    expect(starter.match(/data-bench="acquisition-window"/g)).toHaveLength(2);
    expect(starter).toContain("AIRFRAME-N782KL + RECORDER-CVR-905184");
    expect(starter).toContain("4 airframes · 6 recorder segments · 2 acquisition stations");
    expect(starter).not.toContain("BATCH-NORTH-048271");
  });

  it("locks an unseen grid-disturbance waveform family before computed-type transfer", () => {
    const task = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/tasks",
      gridDisturbanceWaveformTaskId,
      "task.json",
    ), "utf8"));
    expect(validateTaskContract(task)).toMatchObject({
      id: gridDisturbanceWaveformTaskId,
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      protected_hook_counts: {
        "[data-bench='substation-case']": 4,
        "[data-bench='substation-id']": 4,
        "[data-bench='waveform-file-id']": 6,
        "[data-bench='station-id']": 2,
        "[data-bench='capture-window']": 2,
      },
      text_geometry_oracle: {
        scope_selectors: [
          "[data-bench-design-role='substation-manifest']",
          "[data-bench='relay-terminal-strip']",
          "[data-bench-decision-role='context']",
        ],
      },
    });
    const out = prepareVariant("raw-design-md", {
      task: gridDisturbanceWaveformTaskId,
      outputName: "grid-disturbance-waveform-lock",
    });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/data-bench="substation-case"/g)).toHaveLength(4);
    expect(starter.match(/data-bench="waveform-file-id"/g)).toHaveLength(6);
    expect(starter).toContain("SUBSTATION-DELTA-782 + WAVEFORM-C37-905184");
    expect(starter).toContain("4 substations · 6 waveform files · 2 relay terminals");
  });

  it("locks an unseen rail-interlocking event-log family before static-absence transfer", () => {
    const task = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/tasks",
      railInterlockingEventLogTaskId,
      "task.json",
    ), "utf8"));
    expect(validateTaskContract(task)).toMatchObject({
      id: railInterlockingEventLogTaskId,
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      protected_hook_counts: {
        "[data-bench='signal-zone-case']": 4,
        "[data-bench='signal-zone-id']": 4,
        "[data-bench='event-log-id']": 6,
        "[data-bench='station-id']": 2,
        "[data-bench='review-window']": 2,
      },
      text_geometry_oracle: {
        scope_selectors: [
          "[data-bench-design-role='signal-zone-manifest']",
          "[data-bench='interlocking-desk-strip']",
          "[data-bench-decision-role='context']",
        ],
      },
    });
    const out = prepareVariant("raw-design-md", {
      task: railInterlockingEventLogTaskId,
      outputName: "rail-interlocking-event-log-lock",
    });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/data-bench="signal-zone-case"/g)).toHaveLength(4);
    expect(starter.match(/data-bench="event-log-id"/g)).toHaveLength(6);
    expect(starter).toContain("SIGNAL-ZONE-DELTA-782 + EVENT-LOG-C37-905184");
    expect(starter).toContain("4 signal zones · 6 event logs · 2 interlocking desks");
  });

  it("preregisters exact visible-atomic control versus computed-type target carrier", () => {
    const matrix = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/grid-waveform-computed-type-luna-1.9.500/RUN-MATRIX.json",
    ), "utf8"));
    expect(matrix).toMatchObject({
      product_version: "1.9.500",
      status: "locked-awaiting-fresh-preparation",
      task_lock_contract: {
        task_id: gridDisturbanceWaveformTaskId,
        source_commit: "24c7fcb6488e06810277c9d55f6e5f478b2d376a",
        acceptance_sha256: "3408b9456fbeb08a74d7ab98a6f417fb0b77e12b8d8ce432c593480b6d4e46c1",
        prior_control_exposures: 0,
        prior_candidate_exposures: 0,
      },
      control_source_contract: {
        source_commit: "931e124c9d15c5e2c4e561db5a880775acf8031c",
      },
      candidate_source_contract: {
        source_commit: "14ed77650e7353e4f98dcb105660266102c01abc",
      },
      promotion_gates: {
        candidate_system_id: "luna-computed-type-target-carrier-candidate",
        ui_resolved_trials_required: 3,
        proof_compliant_trials_required: 3,
      },
    });
    expect(matrix.cells).toHaveLength(6);
    expect(matrix.cells.map((cell) => cell.system_id)).toEqual([
      "luna-visible-atomic-fit-control",
      "luna-computed-type-target-carrier-candidate",
      "luna-computed-type-target-carrier-candidate",
      "luna-visible-atomic-fit-control",
      "luna-visible-atomic-fit-control",
      "luna-computed-type-target-carrier-candidate",
    ]);
    expect(matrix.reflow_oracle_contract).toMatchObject({
      pre_edit_product_snapshot_required: true,
      typography_comparison: "same-consumer-computed-pre-edit-versus-edited",
      comparison_scroll_carrier_boundary: "registered-target-only",
      comparison_scroll_focusable_descendants_allowed: false,
    });
  });

  it("preregisters exact computed-type control versus static-absence guardrails", () => {
    const matrix = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/rail-static-absence-luna-1.9.507/RUN-MATRIX.json",
    ), "utf8"));
    expect(matrix).toMatchObject({
      product_version: "1.9.507",
      status: "locked-awaiting-fresh-preparation",
      task_lock_contract: {
        task_id: railInterlockingEventLogTaskId,
        source_commit: "d1994c7182e9eb38baff35ead229e9c4ea5640d4",
        acceptance_sha256: "0cf61fbf3c6fe29b01eb4575490590d5f643d5edeb720f2697ea809d0f2ecf04",
        prior_control_exposures: 0,
        prior_candidate_exposures: 0,
      },
      control_source_contract: {
        source_commit: "14ed77650e7353e4f98dcb105660266102c01abc",
        source_pin_sha256: "8c82458713c10b859a579fbe5f4dd605847613340ba95072820e1fe6c089d4f9",
      },
      candidate_source_contract: {
        source_commit: "86546d5af67d4a71f0b6a867ec3869ec299f3159",
        source_pin_sha256: "096139b058e71abe0e9cdac7aed2e9b7962f933ced289620bafeff21ccb46e66",
      },
      static_closure_contract: {
        lock_stdout_static_edit_guardrails_required: true,
        forbidden_pattern_semantics: "absence-required-delete-matching-declaration",
      },
      promotion_gates: {
        candidate_system_id: "luna-static-absence-guardrail-candidate",
        ui_resolved_trials_required: 3,
        proof_compliant_trials_required: 3,
      },
    });
    expect(matrix.cells).toHaveLength(6);
    expect(matrix.cells.map((cell) => cell.variant_id)).toEqual([
      "omd-computed-type-target-carrier-candidate",
      "omd-static-absence-guardrail-candidate",
      "omd-static-absence-guardrail-candidate",
      "omd-computed-type-target-carrier-candidate",
      "omd-computed-type-target-carrier-candidate",
      "omd-static-absence-guardrail-candidate",
    ]);
  });

  it("locks an unseen editorial routing family with explicit atomic and compact-copy scopes", () => {
    const task = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/tasks", editorialBriefTaskId, "task.json"), "utf8"));
    expect(task).toMatchObject({
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      journey_oracle: {
        choice: { count: 3, initial: "chronology", selected: "desk" },
        toggle: { selector: "[data-bench='digest-toggle']" },
        form: { valid_value: "Morning brief handoff" },
      },
      text_geometry_oracle: {
        atomic_scope_selectors: [
          "[data-bench='mapping-row']",
          "[data-bench-decision-role='target']",
          "[data-bench-decision-role='evidence']",
          "[data-bench-decision-role='state']",
        ],
        compact_copy_selectors: ["[data-bench='compact-control-copy']"],
        max_short_text_lines: 1,
      },
    });
    validateTaskContract(task);
    const out = prepareVariant("raw-design-md", { task: editorialBriefTaskId, outputName: "editorial-brief-routing" });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter).toContain("source.citydesk.2026-081");
    expect(starter).toContain('data-bench="compact-control-copy"');
    expect(starter).not.toMatch(/<wbr\b[^>]*>/i);
  });

  it("locks an unseen numbered print-proof family for v13 transfer", () => {
    const task = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/tasks", printProofTaskId, "task.json"), "utf8"));
    expect(task).toMatchObject({
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      journey_oracle: {
        choice: { count: 3, initial: "imposition", selected: "color" },
        toggle: { selector: "[data-bench='source-note-toggle']" },
        form: { valid_value: "August proof handoff" },
      },
      text_geometry_oracle: {
        atomic_scope_selectors: [
          "[data-bench='proof-item']",
          "[data-bench-decision-role='target']",
          "[data-bench-decision-role='evidence']",
          "[data-bench-decision-role='state']",
        ],
        compact_copy_selectors: ["[data-bench='compact-control-copy']"],
        max_short_text_lines: 1,
      },
    });
    validateTaskContract(task);
    const out = prepareVariant("raw-design-md", { task: printProofTaskId, outputName: "print-proof-routing" });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter.match(/data-bench="proof-item"/g)).toHaveLength(4);
    expect(starter).toContain("proof-cover-wrap-0817");
    expect(starter).toContain("Route: Imposition order · notes off");
    expect(starter).not.toMatch(/<wbr\b[^>]*>/i);
  });

  it("locks an unseen master-detail media-clearance family for packet transfer", () => {
    const task = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/tasks", mediaClearanceTaskId, "task.json"), "utf8"));
    expect(task).toMatchObject({
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      journey_oracle: {
        choice: { count: 3, initial: "rights", selected: "territory" },
        toggle: { selector: "[data-bench='caption-toggle']" },
        form: { valid_value: "Autumn campaign clearance" },
      },
      text_geometry_oracle: {
        atomic_scope_selectors: [
          "[data-bench='asset-row']",
          "[data-bench-decision-role='target']",
          "[data-bench-decision-role='evidence']",
          "[data-bench-decision-role='state']",
        ],
        compact_copy_selectors: ["[data-bench='compact-control-copy']"],
        max_short_text_lines: 1,
      },
    });
    validateTaskContract(task);
    const out = prepareVariant("raw-design-md", { task: mediaClearanceTaskId, outputName: "media-clearance-routing" });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter.match(/data-bench="asset-row"/g)).toHaveLength(4);
    expect(starter).toContain("asset-campaign-hero-2409.tif");
    expect(starter).toContain("Lane: Rights record · captions off");
    expect(starter).not.toMatch(/<wbr\b[^>]*>/i);
  });

  it("locks an unseen resource-time studio routing family before proof-budget generation", () => {
    const task = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/tasks", studioSlotTaskId, "task.json"), "utf8"));
    expect(task).toMatchObject({
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      journey_oracle: {
        choice: { count: 3, initial: "stage-a", selected: "stage-b" },
        toggle: { selector: "[data-bench='buffer-toggle']" },
        form: { valid_value: "Night session routing" },
      },
      text_geometry_oracle: {
        atomic_scope_selectors: [
          "[data-bench='slot-row']",
          "[data-bench-decision-role='target']",
          "[data-bench-decision-role='evidence']",
          "[data-bench-decision-role='state']",
        ],
        compact_copy_selectors: ["[data-bench='compact-control-copy']"],
        max_short_text_lines: 1,
      },
    });
    validateTaskContract(task);
    const out = prepareVariant("raw-design-md", { task: studioSlotTaskId, outputName: "studio-slot-routing" });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter.match(/data-bench="slot-row"/g)).toHaveLength(4);
    expect(starter).toContain("hold-stage-b-1430-1515");
    expect(starter).toContain("Room: Stage A · buffer off");
    expect(starter).not.toMatch(/<wbr\b[^>]*>/i);
  });

  it("locks an unseen node-link stage power patch family before close-latch generation", () => {
    const task = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/tasks", stagePowerPatchTaskId, "task.json"), "utf8"));
    expect(task).toMatchObject({
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      journey_oracle: {
        choice: { count: 3, initial: "bank-east", selected: "bank-west" },
        toggle: { selector: "[data-bench='isolation-toggle']" },
        form: { valid_value: "Matinee power handoff" },
      },
      text_geometry_oracle: {
        atomic_scope_selectors: [
          "[data-bench='patch-path']",
          "[data-bench-decision-role='target']",
          "[data-bench-decision-role='evidence']",
          "[data-bench-decision-role='state']",
        ],
        compact_copy_selectors: ["[data-bench='compact-control-copy']"],
        max_short_text_lines: 1,
      },
    });
    validateTaskContract(task);
    const out = prepareVariant("raw-design-md", { task: stagePowerPatchTaskId, outputName: "stage-power-patch-routing" });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter.match(/data-bench="patch-path"/g)).toHaveLength(4);
    expect(starter).toContain("circuit-west-07");
    expect(starter).toContain("Bank: Bank East · isolation off");
    expect(starter).not.toMatch(/<wbr\b[^>]*>/i);
  });

  it("locks an unseen book-signature imposition family before host-policy generation", () => {
    const task = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/tasks", bookSignatureTaskId, "task.json"), "utf8"));
    expect(task).toMatchObject({
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      journey_oracle: {
        choice: { count: 3, initial: "sewn", selected: "perfect" },
        toggle: { selector: "[data-bench='creep-toggle']" },
        form: { valid_value: "Atlas field guide signature" },
      },
      text_geometry_oracle: {
        atomic_scope_selectors: [
          "[data-bench='folio-pair']",
          "[data-bench-decision-role='target']",
          "[data-bench-decision-role='evidence']",
          "[data-bench-decision-role='state']",
        ],
        compact_copy_selectors: ["[data-bench='compact-control-copy']"],
        max_short_text_lines: 1,
      },
    });
    validateTaskContract(task);
    const out = prepareVariant("raw-design-md", { task: bookSignatureTaskId, outputName: "book-signature-imposition" });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter.match(/data-bench="folio-pair"/g)).toHaveLength(4);
    expect(starter).toContain("signature-s04-front");
    expect(starter).toContain("Binding: Section sewn · creep compensation off");
    expect(starter).not.toMatch(/<wbr\b|<br\b|&shy;|\u200b/i);
  });

  it("locks an unseen multi-carrier production cue dependency family before generation", () => {
    const task = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/tasks", productionCueDependencyTaskId, "task.json"), "utf8"));
    expect(task).toMatchObject({
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      journey_oracle: {
        choice: { count: 3, initial: "all", selected: "dependencies" },
        toggle: { selector: "[data-bench='source-note-toggle']" },
        form: { valid_value: "Act two cue review" },
      },
      text_geometry_oracle: {
        scope_selectors: ["[data-bench='cue-lane']", "[data-bench-decision-role='context']"],
        atomic_scope_selectors: [
          "[data-bench='lane-name']",
          "[data-bench='cue-id']",
          "[data-bench='predecessor-id']",
          "[data-bench-decision-role='target']",
          "[data-bench-decision-role='evidence']",
          "[data-bench-decision-role='state']",
        ],
        max_short_text_lines: 1,
      },
    });
    validateTaskContract(task);
    const out = prepareVariant("raw-design-md", { task: productionCueDependencyTaskId, outputName: "production-cue-dependency" });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter.match(/data-bench="cue-lane"/g)).toHaveLength(3);
    expect(starter.match(/data-bench="cue-card"/g)).toHaveLength(8);
    expect(starter.match(/data-bench="dependency-link"/g)).toHaveLength(7);
    expect(starter).toContain("ACT-02 · AUDIO-C17 to STAGE-CUE-42");
    expect(starter).not.toMatch(/<wbr\b|<br\b|&shy;|\u200b/i);
  });

  it("locks an unseen graph, manifest, and handoff carrier family before generation", () => {
    const task = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/tasks", digitalMasterLineageTaskId, "task.json"), "utf8"));
    expect(task).toMatchObject({
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      journey_oracle: {
        choice: { values: ["lineage", "manifest", "handoff"], count: 3, initial: "lineage", selected: "manifest" },
        toggle: { selector: "[data-bench='source-note-toggle']" },
        form: { valid_value: "OTT lineage review" },
      },
      text_geometry_oracle: {
        scope_selectors: [
          "[data-bench-design-role='lineage-map']",
          "[data-bench='checksum-carrier']",
          "[data-bench-decision-role='context']",
        ],
        atomic_scope_selectors: expect.arrayContaining([
          "[data-bench='asset-id']",
          "[data-bench='parent-id']",
          "[data-bench='checksum-value']",
          "[data-bench-decision-role='target']",
        ]),
        max_short_text_lines: 1,
      },
    });
    validateTaskContract(task);
    const out = prepareVariant("raw-design-md", { task: digitalMasterLineageTaskId, outputName: "digital-master-lineage" });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter.match(/data-bench="asset-node"/g)).toHaveLength(7);
    expect(starter.match(/data-bench="dependency-link"/g)).toHaveLength(7);
    expect(starter.match(/data-bench="checksum-value"/g)).toHaveLength(2);
    expect(starter).toContain("PACKAGE-OTT-502 + QC-MANIFEST-610");
    expect(starter).not.toMatch(/<wbr\b|<br\b|&shy;|\u200b/i);
  });

  it("locks an unseen caption-cue timing family before host-policy recovery validation", () => {
    const task = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/tasks", captionCueTaskId, "task.json"), "utf8"));
    expect(task).toMatchObject({
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      journey_oracle: {
        choice: { values: ["frames", "milliseconds", "source"], count: 3 },
        toggle: { selector: "[data-bench='boundary-toggle']" },
      },
      text_geometry_oracle: {
        atomic_scope_selectors: expect.arrayContaining([
          "[data-bench='cue-identity']",
          "[data-bench='timecode-pair']",
        ]),
        compact_copy_selectors: ["[data-bench='compact-control-copy']"],
        max_short_text_lines: 1,
      },
    });
    validateTaskContract(task);
    const out = prepareVariant("raw-design-md", { task: captionCueTaskId, outputName: "caption-cue-timing" });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter.match(/data-bench="cue-item"/g)).toHaveLength(5);
    expect(starter.match(/data-bench="timecode-pair"/g)).toHaveLength(5);
    expect(starter).toContain("cue-dialogue-014");
    expect(starter).toContain("Timebase: Source frames · boundary snap off");
    expect(starter).not.toMatch(/<wbr\b[^>]*>/i);
  });

  it("locks an unseen assay-plate spatial family before scored host-policy validation", () => {
    const task = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/tasks", assayPlateTaskId, "task.json"), "utf8"));
    expect(task).toMatchObject({
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      journey_oracle: {
        choice: { values: ["96-well", "384-well", "custom"], count: 3 },
        toggle: { selector: "[data-bench='edge-toggle']" },
      },
      text_geometry_oracle: {
        atomic_scope_selectors: expect.arrayContaining([
          "[data-bench='well-coordinate']",
          "[data-bench='sample-identity']",
        ]),
        max_short_text_lines: 1,
      },
    });
    validateTaskContract(task);
    const out = prepareVariant("raw-design-md", { task: assayPlateTaskId, outputName: "assay-plate-layout" });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter.match(/data-bench="well-item"/g)).toHaveLength(12);
    expect(starter.match(/data-bench="well-coordinate"/g)).toHaveLength(12);
    expect(starter.match(/data-bench="sample-identity"/g)).toHaveLength(12);
    expect(starter).toContain("PLT-07 · Batch BX-2408");
    expect(starter).toContain("CTRL-REF-1");
    expect(starter).not.toMatch(/<wbr\b|<br\b|&shy;|\u200b/i);
  });

  it("locks an unseen continuous-spectrum family before readable-reflow validation", () => {
    const task = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/tasks", spectrumAllocationTaskId, "task.json"), "utf8"));
    expect(task).toMatchObject({
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      journey_oracle: {
        choice: { values: ["l-band", "s-band", "wideband"], count: 3 },
        toggle: { selector: "[data-bench='guard-toggle']" },
      },
      text_geometry_oracle: {
        atomic_scope_selectors: expect.arrayContaining([
          "[data-bench='band-range']",
          "[data-bench='allocation-id']",
        ]),
        max_short_text_lines: 1,
      },
      design_oracle: {
        muted_text: "#696D6B",
        ink: "#1B2524",
      },
    });
    validateTaskContract(task);
    const out = prepareVariant("raw-design-md", { task: spectrumAllocationTaskId, outputName: "spectrum-allocation" });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter.match(/data-bench="band-item"/g)).toHaveLength(7);
    expect(starter.match(/data-bench="band-range"/g)).toHaveLength(7);
    expect(starter.match(/data-bench="allocation-id"/g)).toHaveLength(7);
    expect(starter).toContain("OBS-N14 · Receiver RX-03");
    expect(starter).toContain("ALLOC-REF-F3");
    expect(starter).not.toMatch(/<wbr\b|<br\b|&shy;|\u200b/i);
  });

  it("locks an unseen channel-by-gateway matrix before release-blocker validation", () => {
    const task = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/tasks", sensorChannelMatrixTaskId, "task.json"), "utf8"));
    expect(task).toMatchObject({
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      journey_oracle: {
        choice: { values: ["coverage", "protocol", "power"], count: 3 },
        toggle: { selector: "[data-bench='reserved-toggle']" },
        form: { valid_value: "North array matrix review" },
      },
      text_geometry_oracle: {
        atomic_scope_selectors: expect.arrayContaining([
          "[data-bench='channel-id']",
          "[data-bench='gateway-id']",
        ]),
        max_short_text_lines: 1,
      },
      design_oracle: {
        muted_text: "#66716C",
        ink: "#17211F",
      },
    });
    validateTaskContract(task);
    const out = prepareVariant("raw-design-md", { task: sensorChannelMatrixTaskId, outputName: "sensor-channel-matrix" });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter.match(/data-bench="matrix-row"/g)).toHaveLength(5);
    expect(starter.match(/data-bench="matrix-cell"/g)).toHaveLength(20);
    expect(starter.match(/data-bench="channel-id"/g)).toHaveLength(5);
    expect(starter.match(/data-bench="gateway-id"/g)).toHaveLength(4);
    expect(starter).toContain("MX-NORTH-14 · ARRAY-03");
    expect(starter).toContain("CHAN-SOLAR-E9");
    expect(starter).toContain("GATE-WEST-21");
    expect(starter).not.toMatch(/<wbr\b|<br\b|&shy;|\u200b/i);
  });

  it("locks an unseen service-by-stop timetable before semantic-carrier validation", () => {
    const task = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/tasks", transitStopTimetableTaskId, "task.json"), "utf8"));
    expect(task).toMatchObject({
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      journey_oracle: {
        choice: { values: ["arrival", "dwell", "platform"], count: 3 },
        toggle: { selector: "[data-bench='express-toggle']" },
        form: { valid_value: "North loop timetable review" },
      },
      text_geometry_oracle: {
        atomic_scope_selectors: expect.arrayContaining([
          "[data-bench='service-id']",
          "[data-bench='stop-id']",
        ]),
        max_short_text_lines: 1,
      },
      design_oracle: { muted_text: "#66716C", ink: "#17211F" },
    });
    validateTaskContract(task);
    const out = prepareVariant("raw-design-md", { task: transitStopTimetableTaskId, outputName: "transit-stop-timetable" });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter.match(/data-bench="service-row"/g)).toHaveLength(4);
    expect(starter.match(/data-bench="time-cell"/g)).toHaveLength(20);
    expect(starter.match(/<[^>]+data-bench="service-id"/g)).toHaveLength(4);
    expect(starter.match(/<[^>]+data-bench="stop-id"/g)).toHaveLength(5);
    expect(starter).toContain("TT-NORTH-22 · LOOP-05");
    expect(starter).toContain("SVC-DEPOT-31");
    expect(starter).toContain("STOP-GARDEN-14");
    expect(starter).not.toMatch(/<wbr\b|<br\b|&shy;|\u200b/i);
  });

  it("locks an unseen equipment rack elevation before pre-edit invariant validation", () => {
    const task = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/tasks", equipmentRackElevationTaskId, "task.json"), "utf8"));
    expect(task).toMatchObject({
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      journey_oracle: {
        choice: { values: ["front", "power", "network"], count: 3 },
        toggle: { selector: "[data-bench='thermal-toggle']" },
        form: { valid_value: "East rack elevation review" },
      },
      text_geometry_oracle: {
        atomic_scope_selectors: expect.arrayContaining([
          "[data-bench='unit-id']",
          "[data-bench='device-id']",
        ]),
        max_short_text_lines: 1,
      },
      design_oracle: { muted_text: "#68716D", ink: "#1C2422" },
    });
    validateTaskContract(task);
    const out = prepareVariant("raw-design-md", { task: equipmentRackElevationTaskId, outputName: "equipment-rack-elevation" });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter.match(/data-bench="rack-unit"/g)).toHaveLength(12);
    expect(starter.match(/data-bench="unit-id"/g)).toHaveLength(12);
    expect(starter.match(/data-bench="device-block"/g)).toHaveLength(6);
    expect(starter.match(/data-bench="device-id"/g)).toHaveLength(6);
    expect(starter.match(/data-bench="reserved-gap"/g)).toHaveLength(3);
    expect(starter).toContain("RACK-EAST-04 · U01–U12");
    expect(starter).toContain("DEV-EDGE-A17");
    expect(starter).not.toMatch(/<wbr\b|<br\b|&shy;|\u200b/i);
  });

  it("preregisters the exact close-latch versus readable-reflow spectrum comparison", () => {
    const plan = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/spectrum-readable-reflow-luna-1.9.233/RUN-MATRIX.json",
    ), "utf8"));
    validateRunMatrixPlan(plan);
    expect(plan.cells).toHaveLength(6);
    expect(new Set(plan.cells.map((cell) => cell.task_id))).toEqual(new Set([spectrumAllocationTaskId]));
    expect(new Set(plan.cells.map((cell) => cell.model_id))).toEqual(new Set(["gpt-5.6-luna"]));
    expect(new Set(plan.cells.map((cell) => cell.effort))).toEqual(new Set(["high"]));
    expect(new Set(plan.cells.map((cell) => cell.host_policy_mode))).toEqual(new Set(["installed-opt-in"]));
    expect(plan.cells.map((cell) => cell.variant_id)).toEqual([
      "omd-portable-proof-close-latch-candidate",
      "omd-portable-readable-reflow-candidate",
      "omd-portable-readable-reflow-candidate",
      "omd-portable-proof-close-latch-candidate",
      "omd-portable-proof-close-latch-candidate",
      "omd-portable-readable-reflow-candidate",
    ]);
    expect(plan.shared_host_policy).toMatchObject({
      mode: "installed-opt-in",
      require_delivery_ready: true,
      require_browser_attempt: true,
    });
    expect(plan.promotion_gates).toMatchObject({
      ui_resolved_trials_required: 3,
      serious_or_critical_contrast_trials_allowed: 0,
      paired_objective_losses_allowed: 0,
    });
  });

  it("preregisters the exact close-latch versus compact release-blocker sensor comparison", () => {
    const plan = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/sensor-release-blocker-luna-1.9.244/RUN-MATRIX.json",
    ), "utf8"));
    validateRunMatrixPlan(plan);
    expect(plan.cells).toHaveLength(6);
    expect(new Set(plan.cells.map((cell) => cell.task_id))).toEqual(new Set([sensorChannelMatrixTaskId]));
    expect(new Set(plan.cells.map((cell) => cell.model_id))).toEqual(new Set(["gpt-5.6-luna"]));
    expect(new Set(plan.cells.map((cell) => cell.effort))).toEqual(new Set(["high"]));
    expect(new Set(plan.cells.map((cell) => cell.host_policy_mode))).toEqual(new Set(["installed-opt-in"]));
    expect(plan.cells.map((cell) => cell.variant_id)).toEqual([
      "omd-portable-proof-close-latch-candidate",
      "omd-portable-release-blocker-candidate",
      "omd-portable-release-blocker-candidate",
      "omd-portable-proof-close-latch-candidate",
      "omd-portable-proof-close-latch-candidate",
      "omd-portable-release-blocker-candidate",
    ]);
    expect(plan.promotion_gates).toMatchObject({
      ui_resolved_trials_required: 3,
      serious_or_critical_contrast_trials_allowed: 0,
      paired_objective_losses_allowed: 0,
      candidate_mean_wall_time_ratio_max: 1.1,
      candidate_mean_provider_tokens_ratio_max: 1.1,
    });
  });

  it("preregisters the exact close-latch versus semantic-carrier transit comparison", () => {
    const plan = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/transit-semantic-carrier-luna-1.9.255/RUN-MATRIX.json",
    ), "utf8"));
    validateRunMatrixPlan(plan);
    expect(plan.cells).toHaveLength(6);
    expect(new Set(plan.cells.map((cell) => cell.task_id))).toEqual(new Set([transitStopTimetableTaskId]));
    expect(new Set(plan.cells.map((cell) => cell.model_id))).toEqual(new Set(["gpt-5.6-luna"]));
    expect(new Set(plan.cells.map((cell) => cell.effort))).toEqual(new Set(["high"]));
    expect(new Set(plan.cells.map((cell) => cell.host_policy_mode))).toEqual(new Set(["installed-opt-in"]));
    expect(plan.cells.map((cell) => cell.variant_id)).toEqual([
      "omd-portable-proof-close-latch-candidate",
      "omd-portable-semantic-carrier-candidate",
      "omd-portable-semantic-carrier-candidate",
      "omd-portable-proof-close-latch-candidate",
      "omd-portable-proof-close-latch-candidate",
      "omd-portable-semantic-carrier-candidate",
    ]);
    expect(plan.shared_host_policy).toMatchObject({
      mode: "installed-opt-in",
      require_delivery_ready: true,
      require_browser_attempt: true,
    });
    expect(plan.promotion_gates).toMatchObject({
      ui_resolved_trials_required: 3,
      serious_or_critical_contrast_trials_allowed: 0,
      paired_objective_losses_allowed: 0,
      proof_and_host_policy_trials_required: 3,
      candidate_mean_wall_time_ratio_max: 1.1,
      candidate_mean_provider_tokens_ratio_max: 1.1,
    });
  });

  it("preregisters the exact close-latch versus pre-edit-invariant equipment rack comparison", () => {
    const plan = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/equipment-rack-pre-edit-invariant-luna-1.9.266/RUN-MATRIX.json",
    ), "utf8"));
    validateRunMatrixPlan(plan);
    expect(plan.cells).toHaveLength(6);
    expect(new Set(plan.cells.map((cell) => cell.task_id))).toEqual(new Set([equipmentRackElevationTaskId]));
    expect(new Set(plan.cells.map((cell) => cell.model_id))).toEqual(new Set(["gpt-5.6-luna"]));
    expect(new Set(plan.cells.map((cell) => cell.effort))).toEqual(new Set(["high"]));
    expect(new Set(plan.cells.map((cell) => cell.host_policy_mode))).toEqual(new Set(["installed-opt-in"]));
    expect(plan.cells.map((cell) => cell.variant_id)).toEqual([
      "omd-portable-proof-close-latch-candidate",
      "omd-portable-pre-edit-invariant-candidate",
      "omd-portable-pre-edit-invariant-candidate",
      "omd-portable-proof-close-latch-candidate",
      "omd-portable-proof-close-latch-candidate",
      "omd-portable-pre-edit-invariant-candidate",
    ]);
    expect(plan.shared_host_policy).toMatchObject({
      mode: "installed-opt-in",
      require_delivery_ready: true,
      require_browser_attempt: true,
    });
    expect(plan.promotion_gates).toMatchObject({
      ui_resolved_trials_required: 3,
      serious_or_critical_contrast_trials_allowed: 0,
      paired_objective_losses_allowed: 0,
      proof_and_host_policy_trials_required: 3,
      candidate_mean_wall_time_ratio_max: 1.1,
      candidate_mean_provider_tokens_ratio_max: 1.1,
    });
  });

  it("preregisters the exact conjunctive-release versus carrier-inventory digital-master comparison", () => {
    const plan = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/digital-master-carrier-inventory-luna-1.9.300/RUN-MATRIX.json",
    ), "utf8"));
    validateRunMatrixPlan(plan);
    expect(plan.cells).toHaveLength(6);
    expect(new Set(plan.cells.map((cell) => cell.task_id))).toEqual(new Set([digitalMasterLineageTaskId]));
    expect(new Set(plan.cells.map((cell) => cell.model_id))).toEqual(new Set(["gpt-5.6-luna"]));
    expect(new Set(plan.cells.map((cell) => cell.effort))).toEqual(new Set(["high"]));
    expect(new Set(plan.cells.map((cell) => cell.host_policy_mode))).toEqual(new Set(["installed-opt-in"]));
    expect(plan.cells.map((cell) => cell.variant_id)).toEqual([
      "omd-portable-conjunctive-release-candidate",
      "omd-portable-carrier-inventory-closure-candidate",
      "omd-portable-carrier-inventory-closure-candidate",
      "omd-portable-conjunctive-release-candidate",
      "omd-portable-conjunctive-release-candidate",
      "omd-portable-carrier-inventory-closure-candidate",
    ]);
    expect(plan.shared_host_policy).toMatchObject({
      mode: "installed-opt-in",
      require_delivery_ready: true,
      require_browser_attempt: true,
    });
    expect(plan.promotion_gates).toMatchObject({
      candidate_system_id: "luna-carrier-inventory",
      ui_resolved_trials_required: 3,
      serious_or_critical_contrast_trials_allowed: 0,
      paired_objective_losses_allowed: 0,
      proof_and_host_policy_trials_required: 3,
      candidate_mean_wall_time_ratio_max: 1.1,
      candidate_mean_provider_tokens_ratio_max: 1.1,
    });
  });

  it("preregisters the exact control versus runtime-artifact aircraft load-plan comparison", () => {
    const plan = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/aircraft-load-plan-runtime-artifact-luna-1.9.311/RUN-MATRIX.json",
    ), "utf8"));
    validateRunMatrixPlan(plan);
    expect(plan.cells).toHaveLength(6);
    expect(new Set(plan.cells.map((cell) => cell.task_id))).toEqual(new Set([aircraftLoadPlanTaskId]));
    expect(new Set(plan.cells.map((cell) => cell.model_id))).toEqual(new Set(["gpt-5.6-luna"]));
    expect(new Set(plan.cells.map((cell) => cell.effort))).toEqual(new Set(["high"]));
    expect(new Set(plan.cells.map((cell) => cell.host_policy_mode))).toEqual(new Set(["installed-opt-in"]));
    expect(plan.cells.map((cell) => cell.variant_id)).toEqual([
      "omd-portable-conjunctive-release-candidate",
      "omd-runtime-reflow-artifact-gate-candidate",
      "omd-runtime-reflow-artifact-gate-candidate",
      "omd-portable-conjunctive-release-candidate",
      "omd-portable-conjunctive-release-candidate",
      "omd-runtime-reflow-artifact-gate-candidate",
    ]);
    expect(plan.shared_host_policy).toMatchObject({
      mode: "installed-opt-in",
      require_delivery_ready: true,
      require_browser_attempt: true,
    });
    expect(plan.promotion_gates).toMatchObject({
      candidate_system_id: "luna-runtime-artifact",
      ui_resolved_trials_required: 3,
      serious_or_critical_contrast_trials_allowed: 0,
      paired_objective_losses_allowed: 0,
      proof_and_host_policy_trials_required: 3,
      candidate_mean_wall_time_ratio_max: 1.1,
      candidate_mean_provider_tokens_ratio_max: 1.1,
    });
    expect(plan.tokens_to_target_contract).toMatchObject({
      attempt_order: 4,
      count_all_scheduled_spend: true,
      unmet_goal_disposition: "right-censored",
    });
    const preparation = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/aircraft-load-plan-runtime-artifact-luna-1.9.311/PREPARATION.json",
    ), "utf8"));
    expect(preparation).toMatchObject({
      status: "PREPARED",
      provider_calls: 0,
      scheduled_cells: 6,
      prepared_cells: 6,
      sole_arm_delta: "exact-installed-skill-source",
      next_cell: "luna-load-r1-control",
      equality: {
        task: true,
        prompt: true,
        product: true,
        activation: true,
        installed_proof_policy: true,
        clean_baseline_all_cells: true,
        source_detached_all_cells: true,
        source_publishable_all_cells: true,
      },
    });
  });

  it("preregisters the exact control versus compact-artifact orbital contact comparison", () => {
    const plan = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/orbital-contact-plan-compact-artifact-luna-1.9.337/RUN-MATRIX.json",
    ), "utf8"));
    validateRunMatrixPlan(plan);
    expect(plan.cells).toHaveLength(6);
    expect(new Set(plan.cells.map((cell) => cell.task_id))).toEqual(new Set([orbitalContactPlanTaskId]));
    expect(new Set(plan.cells.map((cell) => cell.model_id))).toEqual(new Set(["gpt-5.6-luna"]));
    expect(new Set(plan.cells.map((cell) => cell.effort))).toEqual(new Set(["high"]));
    expect(plan.cells.map((cell) => cell.variant_id)).toEqual([
      "omd-portable-conjunctive-release-candidate",
      "omd-compact-reflow-artifact-candidate",
      "omd-compact-reflow-artifact-candidate",
      "omd-portable-conjunctive-release-candidate",
      "omd-portable-conjunctive-release-candidate",
      "omd-compact-reflow-artifact-candidate",
    ]);
    expect(plan.shared_host_policy).toMatchObject({
      source_commit: "c1de0e4e9520c8ca333b59557217dd40219ae195",
      pin_id: "compact-reflow-artifact-transactional-proof-host-policy-1.9.335",
      require_delivery_ready: true,
      require_browser_attempt: true,
    });
    expect(plan.promotion_gates).toMatchObject({
      candidate_system_id: "luna-compact-artifact",
      ui_resolved_trials_required: 3,
      paired_objective_losses_allowed: 0,
      proof_and_host_policy_trials_required: 3,
      candidate_mean_wall_time_ratio_max: 1.1,
      candidate_mean_provider_tokens_ratio_max: 1.1,
    });
    expect(plan.tokens_to_target_contract).toMatchObject({
      attempt_order: 5,
      prior_observed_provider_tokens_minimum: 12935549,
      prior_usage_unavailable_cells: 2,
    });
    const preparation = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/orbital-contact-plan-compact-artifact-luna-1.9.337/PREPARATION.json",
    ), "utf8"));
    expect(preparation).toMatchObject({
      product_version: "1.9.338",
      status: "PREPARED",
      provider_calls: 0,
      scheduled_cells: 6,
      prepared_cells: 6,
      sole_arm_delta: "exact-installed-skill-source",
      next_cell: "luna-orbit-r1-control",
      equality: {
        task: true,
        prompt: true,
        product: true,
        design_md: true,
        activation: true,
        installed_proof_policy: true,
        clean_baseline_all_cells: true,
        workspace_detached_all_cells: true,
        source_detached_all_cells: true,
        source_publishable_all_cells: true,
      },
    });
  });

  it("locks an unseen feature-flag rollout family for final candidate validation", () => {
    const task = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/tasks", featureFlagTaskId, "task.json"), "utf8"));
    expect(task).toMatchObject({
      version: "0.1.0",
      behavior_adapter: "dashboard-v1",
      journey_oracle: {
        filter: { count: 3, initial: "all", selected: "review", initial_visible_rows: 4, selected_visible_rows: 2 },
        disclosure: { count: 2 },
        acknowledgement: { button_selector: "[data-bench='acknowledge']" },
      },
      text_geometry_oracle: { viewports: ["mobile", "narrow-320", "css-zoom-surrogate-200"], max_short_text_lines: 1 },
      decision_hierarchy_oracle: { viewports: ["desktop", "mobile", "narrow-320", "css-zoom-surrogate-200"], minimum_action_gap_px: 8 },
    });
    const out = prepareVariant("raw-design-md", { task: featureFlagTaskId, outputName: "feature-flag-rollout-review" });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter).toContain("checkout.express.v2");
    expect(starter).not.toContain("checkout-web-2.7.14.tgz");
  });

  it("locks an unseen environment-secret mapping family for reflow v3 validation", () => {
    const task = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/tasks", environmentSecretTaskId, "task.json"), "utf8"));
    expect(task).toMatchObject({
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      journey_oracle: {
        choice: { count: 3, initial: "preview", selected: "staging" },
        toggle: { selector: "[data-bench='digest-toggle']" },
        form: { valid_value: "August release mapping" },
      },
      text_geometry_oracle: { viewports: ["mobile", "narrow-320", "css-zoom-surrogate-200"], max_short_text_lines: 1 },
      decision_hierarchy_oracle: { viewports: ["desktop", "mobile", "narrow-320", "css-zoom-surrogate-200"], minimum_action_gap_px: 8 },
    });
    const out = prepareVariant("raw-design-md", { task: environmentSecretTaskId, outputName: "environment-secret-mapping" });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter).toContain("PAYMENTS_API_KEY_V4");
    expect(starter).not.toContain("checkout.express.v2");
    expect(starter).not.toMatch(/<wbr\b[^>]*>/i);
    expect(starter).toContain('<span class="key">PAYMENTS_API_KEY_V4</span>');
  });

  it("locks an unseen webhook destination family for reflow v4 validation", () => {
    const task = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/tasks", webhookDestinationTaskId, "task.json"), "utf8"));
    expect(task).toMatchObject({
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      journey_oracle: {
        choice: { count: 3, initial: "primary", selected: "backup" },
        toggle: { selector: "[data-bench='digest-toggle']" },
        form: { valid_value: "Checkout authorization route" },
      },
      text_geometry_oracle: { viewports: ["mobile", "narrow-320", "css-zoom-surrogate-200"], max_short_text_lines: 1 },
      decision_hierarchy_oracle: { viewports: ["desktop", "mobile", "narrow-320", "css-zoom-surrogate-200"], minimum_action_gap_px: 8 },
    });
    const out = prepareVariant("raw-design-md", { task: webhookDestinationTaskId, outputName: "webhook-destination-routing" });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter).toContain("evt.checkout.authorization.v2");
    expect(starter).toContain("checkout-events-production.json");
    expect(starter).not.toContain("PAYMENTS_API_KEY_V4");
    expect(starter).not.toMatch(/<wbr\b[^>]*>/i);
  });

  it("locks an unseen audit-export delivery family for reflow v5 validation", () => {
    const task = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/tasks", auditExportTaskId, "task.json"), "utf8"));
    expect(task).toMatchObject({
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      journey_oracle: {
        choice: { count: 3, initial: "secure-link", selected: "archive" },
        toggle: { selector: "[data-bench='digest-toggle']" },
        form: { valid_value: "August audit delivery" },
      },
      text_geometry_oracle: { viewports: ["mobile", "narrow-320", "css-zoom-surrogate-200"], max_short_text_lines: 1 },
      decision_hierarchy_oracle: { viewports: ["desktop", "mobile", "narrow-320", "css-zoom-surrogate-200"], minimum_action_gap_px: 8 },
    });
    const out = prepareVariant("raw-design-md", { task: auditExportTaskId, outputName: "audit-export-delivery" });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter).toContain("audit.events.production.2026-08");
    expect(starter).toContain("Require recipient identity verification");
    expect(starter).not.toContain("evt.checkout.authorization.v2");
    expect(starter).not.toMatch(/<wbr\b[^>]*>/i);
  });

  it("locks an unseen certificate-rotation family after ordered reflow v6", () => {
    const taskId = "certificate-rotation-plan-v0.1";
    const task = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/tasks", taskId, "task.json"), "utf8"));
    expect(task).toMatchObject({
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      journey_oracle: {
        choice: { count: 3, initial: "staged", selected: "maintenance" },
        form: { valid_value: "Q3 certificate rotation" },
      },
      text_geometry_oracle: { viewports: ["mobile", "narrow-320", "css-zoom-surrogate-200"], max_short_text_lines: 1 },
      decision_hierarchy_oracle: { viewports: ["desktop", "mobile", "narrow-320", "css-zoom-surrogate-200"], minimum_action_gap_px: 8 },
    });
    const out = prepareVariant("raw-design-md", { task: taskId, outputName: "certificate-rotation-plan" });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter.match(/data-bench="mapping-row"/g)).toHaveLength(3);
    expect(starter).toContain("edge-api.production");
    expect(starter).toContain("Require dual-operator confirmation");
    expect(starter).not.toMatch(/<wbr\b|<br\b|&shy;|\u200b/i);
  });

  it("locks an unseen support-routing family after bounded width recovery v7", () => {
    const taskId = "support-routing-handoff-v0.1";
    const task = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/tasks", taskId, "task.json"), "utf8"));
    expect(task).toMatchObject({
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      journey_oracle: {
        choice: { count: 3, initial: "follow-sun", selected: "regional" },
        form: { valid_value: "Weekend support handoff" },
      },
      text_geometry_oracle: { viewports: ["mobile", "narrow-320", "css-zoom-surrogate-200"], max_short_text_lines: 1 },
      decision_hierarchy_oracle: { viewports: ["desktop", "mobile", "narrow-320", "css-zoom-surrogate-200"], minimum_action_gap_px: 8 },
    });
    const out = prepareVariant("raw-design-md", { task: taskId, outputName: "support-routing-handoff" });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter.match(/data-bench="mapping-row"/g)).toHaveLength(3);
    expect(starter).toContain("billing.refund.pending");
    expect(starter).toContain("Preserve original-assignee context");
    expect(starter).not.toMatch(/<wbr\b|<br\b|&shy;|\u200b/i);
  });

  it("locks an unseen warehouse-transfer family after auditable width recovery v8", () => {
    const taskId = "warehouse-transfer-routing-v0.1";
    const task = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/tasks", taskId, "task.json"), "utf8"));
    expect(task).toMatchObject({
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      journey_oracle: {
        choice: { count: 3, initial: "balanced", selected: "urgent-first" },
        form: { valid_value: "Weekend warehouse transfer" },
      },
      text_geometry_oracle: { viewports: ["mobile", "narrow-320", "css-zoom-surrogate-200"], max_short_text_lines: 1 },
      decision_hierarchy_oracle: { viewports: ["desktop", "mobile", "narrow-320", "css-zoom-surrogate-200"], minimum_action_gap_px: 8 },
    });
    const out = prepareVariant("raw-design-md", { task: taskId, outputName: "warehouse-transfer-routing" });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter.match(/data-bench="mapping-row"/g)).toHaveLength(3);
    expect(starter).toContain("inventory.low-stock.backorder");
    expect(starter).toContain("Preserve original-bin context");
    expect(starter).toContain('class="status" data-bench="form-status"');
    expect(starter).not.toMatch(/<wbr\b|<br\b|&shy;|\u200b/i);
  });

  it("locks an unseen observatory frame-calibration family before measured-fit-plan exposure", () => {
    const taskId = "observatory-frame-calibration-review-v0.1";
    const task = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/tasks", taskId, "task.json"), "utf8"));
    expect(validateTaskContract(task)).toMatchObject({
      id: taskId,
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      protected_hook_counts: {
        "[data-bench='observation-frame-case']": 4,
        "[data-bench='calibration-packet-id']": 6,
        "[data-bench='station-id']": 2,
      },
      journey_oracle: {
        choice: { count: 3, initial: "observation-frame-manifest", selected: "telescope-stations" },
        toggle: { selector: "[data-bench='observer-note-toggle']" },
        form: { valid_value: "Aperture 42 frame archive review" },
      },
      text_geometry_oracle: {
        viewports: ["mobile", "narrow-320", "css-zoom-surrogate-200"],
        max_short_text_lines: 1,
      },
      decision_hierarchy_oracle: {
        viewports: ["desktop", "mobile", "narrow-320", "css-zoom-surrogate-200"],
        minimum_action_gap_px: 8,
      },
    });
    const out = prepareVariant("raw-design-md", { task: taskId, outputName: "observatory-frame-calibration" });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter.match(/data-bench="observation-frame-case"/g)).toHaveLength(4);
    expect(starter.match(/data-bench="calibration-packet-id"/g)).toHaveLength(6);
    expect(starter.match(/data-bench="station-id"/g)).toHaveLength(2);
    expect(starter).toContain("OBSERVATION-FRAME-APERTURE-042 + CALIBRATION-PACKET-FLAT-903175");
    expect(starter).toContain("4 observation frames · 6 calibration packets · 2 telescope stations");
    expect(starter).not.toMatch(/calibration validated|artifact cause confirmed|packets complete|pointing approved|science released|reprocessing authorized|archive ready/i);
    expect(starter).not.toMatch(/<wbr\b|<br\b|&shy;|\u200b/i);
  });

  it("locks an unseen pharmaceutical batch-deviation family before aggregate-carrier exposure", () => {
    const taskId = "pharmaceutical-batch-deviation-review-v0.1";
    const task = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/tasks", taskId, "task.json"), "utf8"));
    expect(validateTaskContract(task)).toMatchObject({
      id: taskId,
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      protected_hook_counts: {
        "[data-bench='manufacturing-batch-case']": 4,
        "[data-bench='deviation-record-id']": 6,
        "[data-bench='quality-desk-id']": 2,
      },
      journey_oracle: {
        choice: { count: 3, initial: "manufacturing-batch-ledger", selected: "quality-desks" },
        toggle: { selector: "[data-bench='reviewer-note-toggle']" },
        form: { valid_value: "Line 4 disposition review" },
      },
      text_geometry_oracle: {
        viewports: ["mobile", "narrow-320", "css-zoom-surrogate-200"],
        max_short_text_lines: 1,
      },
      decision_hierarchy_oracle: {
        viewports: ["desktop", "mobile", "narrow-320", "css-zoom-surrogate-200"],
        minimum_action_gap_px: 8,
      },
    });
    const out = prepareVariant("raw-design-md", { task: taskId, outputName: "pharmaceutical-batch-deviation" });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter.match(/data-bench="manufacturing-batch-case"/g)).toHaveLength(4);
    expect(starter.match(/data-bench="deviation-record-id"/g)).toHaveLength(6);
    expect(starter.match(/data-bench="quality-desk-id"/g)).toHaveLength(2);
    expect(starter).toContain("MANUFACTURING-BATCH-STERILE-LINE-04-2026-118 + DEVIATION-RECORD-ENV-MONITOR-903175");
    expect(starter).toContain("4 manufacturing batches · 6 deviation records · 2 quality desks");
    expect(starter).not.toMatch(/deviation closed|root cause confirmed|samples complete|sterility approved|batch released|rework authorized|disposition ready/i);
    expect(starter).not.toMatch(/<wbr\b|<br\b|&shy;|\u200b/i);
    const lock = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/pharmaceutical-batch-deviation-task-lock-1.9.535/SUMMARY.final.json",
    ), "utf8"));
    expect(lock).toMatchObject({
      product_version: "1.9.535",
      status: "TASK_LOCKED_BEFORE_PROVIDER",
      provider_calls: 0,
      candidate_task_exposure: 0,
      promotion: false,
      task: {
        id: taskId,
        registered_manufacturing_batches: 4,
        registered_deviation_records: 6,
        registered_quality_desks: 2,
      },
      untouched_baseline: {
        objective_score: 75,
        objective_max: 85,
        desktop_overflow_px: 0,
        mobile_overflow_px: 665,
        narrow_320_overflow_px: 735,
        actual_200pct_overflow_px: 1470,
        muted_contrast_ratio: 3.88,
      },
      contract_validation: {
        task_contract: true,
        state_journey: true,
        design_grounding: true,
        evidence_honesty: true,
        responsive_intentionally_red: true,
        accessibility_intentionally_red: true,
      },
    });
  });

  it("locks an unseen offshore turbine inspection family before structured-checklist exposure", () => {
    const taskId = "offshore-turbine-inspection-review-v0.1";
    const task = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/tasks", taskId, "task.json"), "utf8"));
    expect(validateTaskContract(task)).toMatchObject({
      id: taskId,
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      protected_hook_counts: {
        "[data-bench='turbine-case']": 4,
        "[data-bench='finding-id']": 6,
        "[data-bench='engineering-desk-id']": 2,
      },
      journey_oracle: {
        choice: { count: 3, initial: "turbine-register", selected: "engineering-desks" },
        toggle: { selector: "[data-bench='reviewer-note-toggle']" },
        form: { valid_value: "North array maintenance review" },
      },
      text_geometry_oracle: {
        viewports: ["mobile", "narrow-320", "css-zoom-surrogate-200"],
        max_short_text_lines: 1,
      },
      decision_hierarchy_oracle: {
        viewports: ["desktop", "mobile", "narrow-320", "css-zoom-surrogate-200"],
        minimum_action_gap_px: 8,
      },
    });
    const out = prepareVariant("raw-design-md", { task: taskId, outputName: "offshore-turbine-inspection" });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter.match(/data-bench="turbine-case"/g)).toHaveLength(4);
    expect(starter.match(/data-bench="finding-id"/g)).toHaveLength(6);
    expect(starter.match(/data-bench="engineering-desk-id"/g)).toHaveLength(2);
    expect(starter).toContain("OFFSHORE-TURBINE-NORTH-ARRAY-B12-2026 + INSPECTION-FINDING-BLADE-LEADING-EDGE-739204");
    expect(starter).toContain("4 turbines · 6 inspection findings · 2 engineering desks");
    expect(starter).not.toMatch(/defect closed|root cause confirmed|blade repair complete|foundation cleared|return to service approved|work order authorized|maintenance ready/i);
    expect(starter).not.toMatch(/<wbr\b|<br\b|&shy;|\u200b/i);
    const lock = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/offshore-turbine-inspection-task-lock-1.9.543/SUMMARY.final.json",
    ), "utf8"));
    expect(lock).toMatchObject({
      product_version: "1.9.543",
      status: "TASK_LOCKED_BEFORE_PROVIDER",
      provider_calls: 0,
      candidate_task_exposure: 0,
      promotion: false,
      task: {
        id: taskId,
        registered_turbines: 4,
        registered_inspection_findings: 6,
        registered_engineering_desks: 2,
      },
      untouched_baseline: {
        objective_score: 75,
        objective_max: 85,
        desktop_overflow_px: 0,
        mobile_overflow_px: 685,
        narrow_320_overflow_px: 755,
        actual_200pct_overflow_px: 1510,
        muted_contrast_ratio: 3.88,
      },
      contract_validation: {
        task_contract: true,
        state_journey: true,
        design_grounding: true,
        evidence_honesty: true,
        responsive_intentionally_red: true,
        accessibility_intentionally_red: true,
      },
    });
  });

  it("locks an unseen subsea valve intervention family before fit-strategy exposure", () => {
    const taskId = "subsea-valve-intervention-review-v0.1";
    const task = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/tasks", taskId, "task.json"), "utf8"));
    expect(validateTaskContract(task)).toMatchObject({
      id: taskId,
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      protected_hook_counts: {
        "[data-bench='valve-case']": 4,
        "[data-bench='anomaly-id']": 6,
        "[data-bench='intervention-console-id']": 2,
      },
      journey_oracle: {
        choice: { count: 3, initial: "valve-register", selected: "intervention-consoles" },
        toggle: { selector: "[data-bench='reviewer-note-toggle']" },
        form: { valid_value: "East manifold intervention review" },
      },
      text_geometry_oracle: {
        viewports: ["mobile", "narrow-320", "css-zoom-surrogate-200"],
        max_short_text_lines: 1,
      },
      decision_hierarchy_oracle: {
        viewports: ["desktop", "mobile", "narrow-320", "css-zoom-surrogate-200"],
        minimum_action_gap_px: 8,
      },
    });
    const out = prepareVariant("raw-design-md", { task: taskId, outputName: "subsea-valve-intervention" });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter.match(/data-bench="valve-case"/g)).toHaveLength(4);
    expect(starter.match(/data-bench="anomaly-id"/g)).toHaveLength(6);
    expect(starter.match(/data-bench="intervention-console-id"/g)).toHaveLength(2);
    expect(starter).toContain("SUBSEA-VALVE-EAST-MANIFOLD-XV-2047-2026 + ANOMALY-RETURN-LINE-PRESSURE-739204");
    expect(starter).toContain("4 valve assemblies · 6 anomaly records · 2 intervention consoles");
    expect(starter).not.toMatch(/leak isolated|pressure test passed|valve operable|hydraulic cleared|dive authorized|work pack approved|intervention ready/i);
    expect(starter).not.toMatch(/<wbr\b|<br\b|&shy;|\u200b/i);
    const lock = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/subsea-valve-intervention-task-lock-1.9.550/SUMMARY.final.json",
    ), "utf8"));
    expect(lock).toMatchObject({
      product_version: "1.9.550",
      status: "TASK_LOCKED_BEFORE_PROVIDER",
      provider_calls: 0,
      candidate_task_exposure: 0,
      promotion: false,
      task: {
        id: taskId,
        registered_valve_assemblies: 4,
        registered_anomaly_records: 6,
        registered_intervention_consoles: 2,
      },
      untouched_baseline: {
        objective_score: 75,
        objective_max: 85,
        desktop_overflow_px: 0,
        mobile_overflow_px: 685,
        narrow_320_overflow_px: 755,
        actual_200pct_overflow_px: 1510,
        muted_contrast_ratio: 3.88,
      },
      contract_validation: {
        task_contract: true,
        state_journey: true,
        design_grounding: true,
        evidence_honesty: true,
        responsive_intentionally_red: true,
        accessibility_intentionally_red: true,
      },
    });
  });

  it("locks an unseen spent-fuel cask transfer family before decision-target inventory exposure", () => {
    const taskId = "spent-fuel-cask-transfer-review-v0.1";
    const task = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/tasks", taskId, "task.json"), "utf8"));
    expect(validateTaskContract(task)).toMatchObject({
      id: taskId,
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      protected_hook_counts: {
        "[data-bench='cask-case']": 4,
        "[data-bench='surveillance-id']": 6,
        "[data-bench='handling-station-id']": 2,
        "[data-bench-decision-role='target']": 1,
      },
      journey_oracle: {
        choice: { count: 3, initial: "cask-register", selected: "handling-stations" },
        toggle: { selector: "[data-bench='inspector-note-toggle']" },
        form: { valid_value: "North bay cask transfer review" },
      },
      text_geometry_oracle: {
        viewports: ["mobile", "narrow-320", "css-zoom-surrogate-200"],
        max_short_text_lines: 1,
      },
      decision_hierarchy_oracle: {
        viewports: ["desktop", "mobile", "narrow-320", "css-zoom-surrogate-200"],
        minimum_action_gap_px: 8,
      },
    });
    const out = prepareVariant("raw-design-md", { task: taskId, outputName: "spent-fuel-cask-transfer" });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter.match(/data-bench="cask-case"/g)).toHaveLength(4);
    expect(starter.match(/data-bench="surveillance-id"/g)).toHaveLength(6);
    expect(starter.match(/data-bench="handling-station-id"/g)).toHaveLength(2);
    expect(starter).toContain("SPENT-FUEL-CASK-NORTH-BAY-MPC-2047-2026 + SURVEILLANCE-NEUTRON-DOSE-RATE-739204");
    expect(starter).toContain("4 casks · 6 surveillance packets · 2 handling stations");
    expect(starter).not.toMatch(/seal intact|radiation cleared|crane available|route cleared|regulator authorized|transfer approved|movement ready/i);
    expect(starter).not.toMatch(/<wbr\b|<br\b|&shy;|\u200b/i);
    const lock = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/spent-fuel-cask-transfer-task-lock-1.9.557/SUMMARY.final.json",
    ), "utf8"));
    expect(lock).toMatchObject({
      product_version: "1.9.557",
      status: "TASK_LOCKED_BEFORE_PROVIDER",
      provider_calls: 0,
      candidate_task_exposure: 0,
      promotion: false,
      task: {
        id: taskId,
        registered_casks: 4,
        registered_surveillance_packets: 6,
        registered_handling_stations: 2,
      },
      untouched_baseline: {
        objective_score: 75,
        objective_max: 85,
        desktop_overflow_px: 0,
        mobile_overflow_px: 685,
        narrow_320_overflow_px: 755,
        actual_200pct_overflow_px: 1510,
        muted_contrast_ratio: 3.81,
      },
      contract_validation: {
        task_contract: true,
        state_journey: true,
        design_grounding: true,
        evidence_honesty: true,
        responsive_intentionally_red: true,
        accessibility_intentionally_red: true,
      },
    });
  });

  it("locks an unseen organ transport custody family before runner self-dispatch exposure", () => {
    const taskId = "organ-transport-custody-review-v0.1";
    const task = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/tasks", taskId, "task.json"), "utf8"));
    expect(validateTaskContract(task)).toMatchObject({
      id: taskId,
      version: "0.1.0",
      behavior_adapter: "onboarding-v1",
      protected_hook_counts: {
        "[data-bench='container-case']": 4,
        "[data-bench='custody-scan-id']": 6,
        "[data-bench='receiving-bay-id']": 2,
        "[data-bench-decision-role='target']": 1,
      },
      journey_oracle: {
        choice: { count: 3, initial: "container-register", selected: "receiving-bays" },
        toggle: { selector: "[data-bench='custody-note-toggle']" },
        form: { valid_value: "North bay container handoff review" },
      },
      text_geometry_oracle: {
        viewports: ["mobile", "narrow-320", "css-zoom-surrogate-200"],
        max_short_text_lines: 1,
      },
      decision_hierarchy_oracle: {
        viewports: ["desktop", "mobile", "narrow-320", "css-zoom-surrogate-200"],
        minimum_action_gap_px: 8,
      },
    });
    const out = prepareVariant("raw-design-md", { task: taskId, outputName: "organ-transport-custody" });
    const starter = readFileSync(join(out, "index.html"), "utf8");
    expect(starter.match(/<[^>]+data-bench-decision-role="[^"]+"/g)).toHaveLength(5);
    expect(starter.match(/data-bench="container-case"/g)).toHaveLength(4);
    expect(starter.match(/data-bench="custody-scan-id"/g)).toHaveLength(6);
    expect(starter.match(/data-bench="receiving-bay-id"/g)).toHaveLength(2);
    expect(starter).toContain("ORGAN-TRANSPORT-CONTAINER-NORTH-CAMPUS-OTC-2047-2026 + CUSTODY-SCAN-TEMPERATURE-LOGGER-739204");
    expect(starter).toContain("4 containers · 6 custody scans · 2 receiving bays");
    expect(starter).not.toMatch(/seal continuous|temperature stable|courier available|route confirmed|coordinator authorized|handoff approved|recipient ready/i);
    expect(starter).not.toMatch(/<wbr\b|<br\b|&shy;|\u200b/i);
    const lock = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/organ-transport-custody-task-lock-1.9.564/SUMMARY.final.json",
    ), "utf8"));
    expect(lock).toMatchObject({
      product_version: "1.9.564",
      status: "TASK_LOCKED_BEFORE_PROVIDER",
      provider_calls: 0,
      candidate_task_exposure: 0,
      promotion: false,
      task: {
        id: taskId,
        registered_containers: 4,
        registered_custody_scans: 6,
        registered_receiving_bays: 2,
      },
      untouched_baseline: {
        objective_score: 75,
        objective_max: 85,
        desktop_overflow_px: 0,
        mobile_overflow_px: 685,
        narrow_320_overflow_px: 755,
        actual_200pct_overflow_px: 1510,
        muted_contrast_ratio: 3.81,
      },
      contract_validation: {
        task_contract: true,
        state_journey: true,
        design_grounding: true,
        evidence_honesty: true,
        responsive_intentionally_red: true,
        accessibility_intentionally_red: true,
      },
    });
  });

  it("preregisters exact fit-strategy feasibility on the unseen subsea task", () => {
    const matrix = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/subsea-fit-strategy-luna-1.9.551/RUN-MATRIX.json",
    ), "utf8"));
    expect(matrix).toMatchObject({
      product_version: "1.9.551",
      status: "locked-awaiting-fresh-preparation",
      tokens_to_target_contract: {
        attempt_order: 39,
        prior_observed_provider_tokens_minimum: 70055778,
        prior_usage_unavailable_cells: 6,
      },
      control_contract: {
        timeout_seconds: 900,
        max_concurrency: 1,
        retry_policy: "none-primary",
        pacing: { inter_cell_delay_seconds: 120 },
      },
      task_lock_contract: {
        task_id: "subsea-valve-intervention-review-v0.1",
        source_commit: "ed7433c979e2f29a9b8bb8ec297e865cacc48586",
        prior_control_exposures: 0,
        prior_candidate_exposures: 0,
      },
      control_source_contract: {
        pin_id: "first-edit-static-checklist-1.9.542",
        source_commit: "28f9620035fc1adae32b17965a7f51312c3ca2f5",
      },
      candidate_source_contract: {
        pin_id: "fit-strategy-feasibility-1.9.549",
        source_commit: "84329948762fc75b33de39e13e68535d89fd3447",
      },
      fit_strategy_feasibility_contract: {
        candidate_required: true,
        control_required: false,
        derived_at_plan_close: true,
        intrinsically_document_unfit_requires: "comparison-scroll",
        shared_comparison_carrier_allowed_roles: ["identifier"],
        focusable_actions_in_shared_carrier_allowed: false,
      },
      promotion_gates: {
        candidate_system_id: "luna-fit-strategy-feasibility-candidate",
        ui_resolved_trials_required: 3,
        proof_compliant_trials_required: 3,
        fit_strategy_feasibility_trials_required: 3,
      },
    });
    expect(matrix.cells).toHaveLength(6);
    expect(matrix.cells.map((cell) => cell.id)).toEqual([
      "luna-subsea-r1-control",
      "luna-subsea-r1-candidate",
      "luna-subsea-r2-candidate",
      "luna-subsea-r2-control",
      "luna-subsea-r3-control",
      "luna-subsea-r3-candidate",
    ]);
    expect(matrix.cells.every((cell) => cell.model_id === "gpt-5.6-luna" && cell.effort === "high")).toBe(true);
  });

  it("preregisters exact decision-target inventory closure on the unseen spent-fuel task", () => {
    const matrix = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/spent-fuel-decision-target-luna-1.9.558/RUN-MATRIX.json",
    ), "utf8"));
    expect(matrix).toMatchObject({
      product_version: "1.9.558",
      status: "locked-awaiting-fresh-preparation",
      tokens_to_target_contract: {
        attempt_order: 40,
        prior_observed_provider_tokens_minimum: 73512685,
        prior_usage_unavailable_cells: 6,
      },
      task_lock_contract: {
        task_id: "spent-fuel-cask-transfer-review-v0.1",
        scored_model_exposure_before_replacement: false,
        prior_control_exposures: 0,
        prior_candidate_exposures: 0,
      },
      control_source_contract: {
        source_commit: "84329948762fc75b33de39e13e68535d89fd3447",
      },
      candidate_source_contract: {
        source_commit: "6142925c153dbf9e8c17f7f456279c86c539c8e8",
      },
      protected_decision_target_inventory_contract: {
        candidate_required: true,
        control_required: false,
        exact_target_row_groups: 1,
        distinct_target_only_carrier_required: true,
        failure_boundary: "before-plan-close",
      },
      promotion_gates: {
        ui_resolved_trials_required: 3,
        proof_compliant_trials_required: 3,
        protected_decision_target_inventory_trials_required: 3,
      },
    });
    expect(matrix.cells).toHaveLength(6);
    expect(matrix.cells.map((cell) => cell.variant_id)).toEqual([
      "omd-fit-strategy-feasibility-candidate",
      "omd-decision-target-inventory-candidate",
      "omd-decision-target-inventory-candidate",
      "omd-fit-strategy-feasibility-candidate",
      "omd-fit-strategy-feasibility-candidate",
      "omd-decision-target-inventory-candidate",
    ]);
    expect(new Set(matrix.cells.map((cell) => cell.task_id))).toEqual(new Set(["spent-fuel-cask-transfer-review-v0.1"]));
    expect(new Set(matrix.cells.map((cell) => `${cell.model_id}/${cell.effort}`))).toEqual(new Set(["gpt-5.6-luna/high"]));
  });

  it("preregisters exact runner self-dispatch on the unseen organ custody task", () => {
    const matrix = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/organ-custody-runner-self-dispatch-luna-1.9.565/RUN-MATRIX.json",
    ), "utf8"));
    expect(matrix).toMatchObject({
      product_version: "1.9.565",
      status: "locked-awaiting-fresh-preparation",
      tokens_to_target_contract: {
        attempt_order: 41,
        prior_observed_provider_tokens_minimum: 78112464,
        prior_usage_unavailable_cells: 6,
      },
      task_lock_contract: {
        task_id: "organ-transport-custody-review-v0.1",
        source_commit: "faf3e4a8270b023d1a317d362d428bb3de802344",
        scored_model_exposure_before_replacement: false,
        prior_control_exposures: 0,
        prior_candidate_exposures: 0,
      },
      control_source_contract: {
        pin_id: "decision-target-inventory-1.9.556",
        source_commit: "6142925c153dbf9e8c17f7f456279c86c539c8e8",
      },
      candidate_source_contract: {
        pin_id: "runner-self-dispatch-1.9.563",
        source_commit: "bec454d5a452bdc3bc772173d754dec30d548564",
      },
      shipped_runner_contract: {
        control_script_sha256: "4649a04a84f616a7943a31e9d7d14117b534c60a1810d950987f6632d676ce94",
        candidate_script_sha256: "b57a2a405fcbac8493d69df7e17f5d4d45685467df98bb3c1cdc14517d219927",
      },
      runner_self_dispatch_contract: {
        candidate_required: true,
        control_required: false,
        plain_python_invocation_routes_before_artifact_access: true,
        dispatch_target: "browser-harness stdin",
        browser_launch_fallback_allowed: false,
      },
      promotion_gates: {
        candidate_system_id: "luna-runner-self-dispatch-candidate",
        ui_resolved_trials_required: 3,
        proof_compliant_trials_required: 3,
        runner_self_dispatch_trials_required: 3,
      },
    });
    expect(matrix.cells).toHaveLength(6);
    expect(matrix.cells.map((cell) => cell.variant_id)).toEqual([
      "omd-decision-target-inventory-candidate",
      "omd-runner-self-dispatch-candidate",
      "omd-runner-self-dispatch-candidate",
      "omd-decision-target-inventory-candidate",
      "omd-decision-target-inventory-candidate",
      "omd-runner-self-dispatch-candidate",
    ]);
    expect(new Set(matrix.cells.map((cell) => cell.task_id))).toEqual(new Set(["organ-transport-custody-review-v0.1"]));
    expect(new Set(matrix.cells.map((cell) => `${cell.model_id}/${cell.effort}`))).toEqual(new Set(["gpt-5.6-luna/high"]));
  });

  it("prepares six untouched spent-fuel decision-target cells from exact detached sources", () => {
    const preparation = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/spent-fuel-decision-target-luna-1.9.558/PREPARATION.json",
    ), "utf8"));
    expect(preparation).toMatchObject({
      product_version: "1.9.559",
      status: "SIX_CELLS_PREPARED",
      provider_calls: 0,
      equality: {
        scheduled_cells: 6,
        prepared_cells: 6,
        core_prompt_equal: 6,
        prompt_equal: 6,
        starter_equal: 6,
        product_tree_equal: 6,
        runtime_equal: 6,
        model_equal: 6,
        effort_equal: 6,
        timeout_equal: 6,
      },
      source_attestation: {
        control: { commit: "84329948762fc75b33de39e13e68535d89fd3447", detached: true, clean: true },
        candidate: { commit: "6142925c153dbf9e8c17f7f456279c86c539c8e8", detached: true, clean: true },
      },
      candidate_guardrail_presence: {
        snapshot_target_presence_witness: true,
        exact_one_target_row: true,
        target_hook_cardinality_match: true,
        stable_target_selector_anchor: true,
        distinct_target_carrier: true,
        target_only_binding: true,
        fit_strategy_feasibility_retained: true,
        structured_first_edit_checklist_retained: true,
        browser_runner_identical: true,
      },
    });
  });

  it("prepares six untouched organ custody self-dispatch cells from exact detached sources", () => {
    const preparation = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/organ-custody-runner-self-dispatch-luna-1.9.565/PREPARATION.json",
    ), "utf8"));
    expect(preparation).toMatchObject({
      product_version: "1.9.566",
      status: "SIX_CELLS_PREPARED",
      provider_calls: 0,
      equality: {
        scheduled_cells: 6,
        prepared_cells: 6,
        core_prompt_equal: 6,
        prompt_equal: 6,
        starter_equal: 6,
        product_tree_equal: 6,
        runtime_equal: 6,
        model_equal: 6,
        effort_equal: 6,
        timeout_equal: 6,
      },
      source_attestation: {
        control: { commit: "6142925c153dbf9e8c17f7f456279c86c539c8e8", detached: true, clean: true },
        candidate: { commit: "bec454d5a452bdc3bc772173d754dec30d548564", detached: true, clean: true },
      },
      shared_guardrail_presence: {
        snapshot_target_presence_witness: true,
        exact_one_target_row: true,
        distinct_target_only_carrier: true,
        fit_strategy_feasibility_retained: true,
        structured_first_edit_checklist_retained: true,
        artifact_helper_identical: true,
      },
      candidate_self_dispatch_guardrail: {
        dispatch_function_present: true,
        plain_python_detection_before_artifact_access: true,
        exact_browser_harness_stdin_target: true,
        unchanged_runner_source_forwarded: true,
        recursion_latch_present: true,
        browser_launch_fallback_absent: true,
      },
    });
  });

  it("freezes the organ custody r1 control as a valid no-retry system failure", () => {
    const result = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/organ-custody-runner-self-dispatch-luna-1.9.565/R1-CONTROL.json",
    ), "utf8"));
    expect(result).toMatchObject({
      product_version: "1.9.567",
      cell_id: "luna-organ-r1-control",
      validity: "valid",
      run_status: "complete",
      ui_resolved: false,
      objective_score: 79,
      objective_max: 85,
      wall_time_ms: 523045,
      provider_tokens: 1900170,
      proof_trace: {
        analyzable: true,
        compliance_pass: true,
        product_edit_count: 1,
        product_revision_count: 1,
        static_closure_count: 1,
        browser_mechanism_count: 1,
        browser_recovery_count: 0,
      },
      proof_execution_gate: {
        pass: false,
        artifact_present: true,
        static_closure_state: "open",
        browser_attempts: 0,
        closure_state: "open",
        shipped_runner_invoked: true,
      },
      failure_boundary: {
        class: "control-runner-missing-plain-python-self-dispatch",
        expected_by_preregistration: true,
        retry: false,
      },
      tokens_to_target: {
        attempt_order: 41,
        cumulative_observed_provider_tokens_minimum: 80012634,
        goal_status: "right-censored-open",
      },
    });
  });

  it("freezes the organ custody matrix when 3-of-3 promotion becomes unreachable", () => {
    const summary = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/organ-custody-runner-self-dispatch-luna-1.9.565/SUMMARY.final.json",
    ), "utf8"));
    expect(summary).toMatchObject({
      product_version: "1.9.568",
      status: "FROZEN_PROMOTION_UNREACHABLE",
      provider_calls: 2,
      completed_cells: 2,
      frozen_unstarted_cells: [
        "luna-organ-r2-candidate",
        "luna-organ-r2-control",
        "luna-organ-r3-control",
        "luna-organ-r3-candidate",
      ],
      promotion_reachability: {
        required_candidate_ui_resolved_trials: 3,
        observed_candidate_ui_resolved_trials: 0,
        remaining_candidate_trials: 2,
        maximum_reachable_per_gate: 2,
        promotion_reachable: false,
      },
      causal_conclusion: {
        runner_self_dispatch_transfer_proven: false,
        paired_efficiency_eligible: false,
      },
      root_cause: {
        class: "pre-edit-carrier-registration-not-statically-resolved",
      },
      tokens_to_target: {
        cumulative_observed_provider_tokens_minimum: 80707017,
        goal_status: "right-censored-open",
      },
    });
  });

  it("records the provider-free pre-edit carrier anchor repair", () => {
    const summary = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/pre-edit-carrier-anchor-gate-1.9.569/SUMMARY.final.json",
    ), "utf8"));
    expect(summary).toMatchObject({
      product_version: "1.9.569",
      status: "PROVIDER_FREE_REPAIR_COMPLETE",
      provider_calls: 0,
      repair: {
        snapshot_time_carrier_anchor_gate: true,
        all_carriers_checked_when_pre_edit_snapshot_present: true,
        missing_class_id_or_attribute_anchor_rejected: true,
        browser_plan_consumed_before_rejection: false,
      },
      frozen_candidate_replay: {
        status: "rejected-before-browser",
        provider_calls: 0,
      },
      verification: {
        focused_tests_passed: 40,
        focused_tests_failed: 0,
        lint: "passed",
        diff_check: "passed",
      },
    });
  });

  it("pins the exact pre-edit carrier anchor repair source", () => {
    const pin = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/pre-edit-carrier-anchor-pin-1.9.570/SOURCE-PIN.json",
    ), "utf8"));
    expect(pin).toMatchObject({
      product_version: "1.9.570",
      pin_id: "pre-edit-carrier-anchor-1.9.570",
      status: "PINNED",
      source_commit: "a6ebdc8a923538a997d2724f90a09e1eb63f46f2",
      source_tree: "6546fa5d7ddb35e7647020dd2967bd7b185f8fd5",
      skill_tree: "5f6b8ea8df9a5646166a33d36d3fa497f0f156d7",
      files: {
        artifact_helper: { sha256: "276020bdd2e699df0ee4af1fd34d83723edb045e92ee37c7a5de5e0781c95ac1" },
        browser_runner: { sha256: "b57a2a405fcbac8493d69df7e17f5d4d45685467df98bb3c1cdc14517d219927" },
      },
      claims: {
        plain_python_runner_self_dispatch: true,
        snapshot_time_carrier_anchor_gate: true,
        post_edit_only_carrier_anchor_rejected_before_browser: true,
        quality_promotion: false,
      },
    });
  });

  it("locks a fresh unseen subsea cable task with a failing deterministic baseline", () => {
    const summary = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/subsea-cable-task-baseline-1.9.571/SUMMARY.final.json",
    ), "utf8"));
    expect(summary).toMatchObject({
      product_version: "1.9.571",
      task_id: "subsea-cable-splice-clearance-v0.1",
      status: "FRESH_UNSEEN_TASK_BASELINED",
      provider_calls: 0,
      baseline: {
        objective_score: 75,
        objective_max: 85,
        automated_gate_pass: false,
        critical_gates: {
          task_contract: true,
          state_journey: true,
          responsive: false,
          accessibility: false,
          design_grounding: true,
          evidence_honesty: true,
        },
        document_widths: {
          mobile: { scroll: 1075, client: 390 },
          narrow_320: { scroll: 1075, client: 320 },
          actual_200pct: { scroll: 2150, client: 640 },
        },
      },
      locked_facts: {
        cable_sections: 4,
        optical_traces: 6,
        splice_bays: 2,
        target_only_pre_edit_carrier: "[data-bench-decision-carrier='target']",
        protected_hook_mismatches: 0,
      },
    });
  });

  it("pins the fresh subsea cable task before model exposure", () => {
    const pin = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/subsea-cable-task-pin-1.9.572/TASK-PIN.json",
    ), "utf8"));
    expect(pin).toMatchObject({
      product_version: "1.9.572",
      pin_id: "subsea-cable-splice-clearance-1.9.572",
      status: "PINNED_MODEL_UNSEEN",
      task_id: "subsea-cable-splice-clearance-v0.1",
      source_commit: "2e5134e43214b27dd90afbc94d9449dc906211dc",
      task_tree: "fa7572bb015297ad2afce89eb6f43535987c0634",
      baseline_summary_sha256: "8da54b0dd9aeb6f31f83e72774e6b5940e97d547c541415cb85a770c31b1ecc7",
      baseline_score_sha256: "934a92340f02b482bbc5d702758798701460627d7296c0a9c563e24d91b45795",
      prior_model_exposures: 0,
      prior_control_exposures: 0,
      prior_candidate_exposures: 0,
    });
  });

  it("preregisters the provider-zero subsea self-dispatch replacement", () => {
    const plan = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/subsea-runner-self-dispatch-replacement-luna-1.9.573/PREREGISTRATION.json",
    ), "utf8"));
    expect(plan).toMatchObject({
      product_version: "1.9.573",
      status: "PREREGISTERED_PROVIDER_ZERO",
      provider_calls: 0,
      tokens_to_target: { attempt_order: 42, prior_observed_provider_tokens_minimum: 80707017 },
      task: { id: "subsea-cable-splice-clearance-v0.1", model_exposures: 0 },
      sources: {
        control: { source_commit: "6142925c153dbf9e8c17f7f456279c86c539c8e8", plain_python_self_dispatch: false },
        candidate: { source_commit: "a6ebdc8a923538a997d2724f90a09e1eb63f46f2", plain_python_self_dispatch: true, snapshot_carrier_anchor_gate: true },
      },
      inertness_contract: {
        candidate_anchor_gate_expected_to_activate: false,
        causal_transfer_claim_requires_plain_python_self_dispatch_observed: true,
      },
      matrix: { model_id: "gpt-5.6-luna", effort: "high", scheduled_cells: 6, timeout_seconds: 900, inter_cell_delay_seconds: 120, retry_policy: "none-primary" },
      promotion_gates: { candidate_ui_resolved_trials_required: 3, candidate_runner_self_dispatch_trials_required: 3, freeze_when_three_of_three_unreachable: true },
    });
  });

  it("prepares six untouched subsea self-dispatch replacement cells", () => {
    const preparation = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/subsea-runner-self-dispatch-replacement-luna-1.9.573/PREPARATION.json",
    ), "utf8"));
    expect(preparation).toMatchObject({
      product_version: "1.9.574",
      status: "SIX_CELLS_PREPARED",
      provider_calls: 0,
      equality: {
        scheduled_cells: 6,
        prepared_cells: 6,
        core_prompt_equal: 6,
        starter_equal: 6,
        product_tree_equal: 6,
        runtime_equal: 6,
        model_equal: 6,
        effort_equal: 6,
        timeout_equal: 6,
      },
      source_attestation: {
        control: { commit: "6142925c153dbf9e8c17f7f456279c86c539c8e8", detached: true, clean: true },
        candidate: { commit: "a6ebdc8a923538a997d2724f90a09e1eb63f46f2", detached: true, clean: true },
      },
      candidate_self_dispatch_guardrail: {
        dispatch_function_present: true,
        plain_python_detection_before_artifact_access: true,
        exact_browser_harness_stdin_target: true,
        recursion_latch_present: true,
      },
      candidate_anchor_guardrail: {
        snapshot_time_validation_present: true,
        class_id_attribute_anchors_checked: true,
        post_edit_only_anchor_rejected_before_browser: true,
        expected_inert_on_supplied_task: true,
      },
    });
  });

  it("keeps the Luna Max one-prompt preview honest and separate from Verified claims", () => {
    const plan = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/plans/luna-max-one-prompt-v0.1.json",
    ), "utf8"));
    expect(plan).toMatchObject({
      status: "DRAFT_PROVIDER_ZERO",
      provider_calls: 0,
      model_contract: {
        marketing_label: "Luna Max",
        exact_model_selector: null,
        attribution_required_for_publication: true,
      },
      portable_skill_track: {
        trials_per_arm_preview: 3,
        trials_per_task_verified: 10,
        max_concurrency: 1,
        retry_policy: "none-primary",
        manual_product_edits_allowed: false,
        hooks_allowed: false,
      },
      harness_track: { separate_from_portable_ranking: true },
      publication: {
        publish_all_runs: true,
        publish_failures_and_timeouts: true,
        headline_statistic: "median with min/max and success denominator",
        best_of_cherry_pick_forbidden: true,
        global_best_claim_allowed: false,
      },
    });
    expect(plan.portable_skill_track.arms).toEqual([
      "baseline",
      "raw-design-md",
      "anthropic-frontend-design",
      "taste-skill",
      "impeccable-prompt-only",
      "ui-ux-pro-max",
      "omd-portable",
    ]);
    expect(plan.execution_forbidden_until).toContain("exact_model_selector_pinned");
    expect(plan.execution_forbidden_until).toContain("competitor_sources_refreshed_and_frozen");
  });

  it("records the subsea r1 control as a valid responsive and proof failure", () => {
    const result = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/subsea-runner-self-dispatch-replacement-luna-1.9.573/R1-CONTROL.json",
    ), "utf8"));
    expect(result).toMatchObject({
      product_version: "1.9.577",
      cell_id: "luna-subsea-cable-r1-control",
      status: "CHECKPOINTED_VALID_CONTROL_FAILURE",
      validity: "valid",
      wall_time_ms: 485680,
      provider_tokens: { comparison_total: 2403089 },
      objective: {
        score: 81,
        max: 85,
        ui_resolved: false,
        responsive: false,
        evidence_honesty: true,
      },
      proof: {
        analyzable: true,
        static_closure_count: 2,
        duplicate_static_closure_count: 1,
        browser_mechanism_count: 0,
        shipped_runner_invoked: false,
        compliance_pass: false,
      },
      tokens_to_target: {
        observed_provider_tokens_minimum_after_cell: 83110106,
        goal_status: "right-censored",
      },
    });
  });

  it("freezes the subsea replacement after the r1 candidate makes three-of-three unreachable", () => {
    const reportDir = join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/subsea-runner-self-dispatch-replacement-luna-1.9.573",
    );
    const candidate = JSON.parse(readFileSync(join(reportDir, "R1-CANDIDATE.json"), "utf8"));
    const summary = JSON.parse(readFileSync(join(reportDir, "SUMMARY.final.json"), "utf8"));
    expect(candidate).toMatchObject({
      product_version: "1.9.578",
      validity: "valid",
      wall_time_ms: 444242,
      provider_tokens: { comparison_total: 1615647 },
      objective: { score: 81, max: 85, ui_resolved: false, responsive: false },
      proof: {
        static_closure_count: 1,
        browser_mechanism_count: 1,
        shipped_runner_invoked: true,
        plain_python_self_dispatch_observed: false,
        execution_gate_pass: false,
      },
      root_cause: { class: "row-fit-compared-to-document-instead-of-carrier-inner-width" },
    });
    expect(summary).toMatchObject({
      product_version: "1.9.578",
      status: "FROZEN_PROMOTION_UNREACHABLE",
      provider_calls: 2,
      completed_cells: 2,
      promotion_reachability: {
        observed_candidate_ui_resolved_trials: 0,
        observed_candidate_proof_compliant_trials: 0,
        observed_candidate_runner_self_dispatch_trials: 0,
        maximum_reachable_per_gate: 2,
        promotion_reachable: false,
      },
      tokens_to_target: { cumulative_observed_provider_tokens_minimum: 84725753 },
    });
    expect(summary.frozen_unstarted_cells).toHaveLength(4);
  });

  it("records the provider-free carrier-inner fit feasibility repair", () => {
    const repair = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/carrier-inner-fit-feasibility-repair-1.9.579/REPAIR.json",
    ), "utf8"));
    expect(repair).toMatchObject({
      product_version: "1.9.579",
      status: "PROVIDER_FREE_REPAIR_VALIDATED",
      provider_calls: 0,
      source_failure: {
        cell_id: "luna-subsea-cable-r1-candidate",
        row_group: "decision-evidence",
        required_carrier_inner_width_css_px: 316.3672,
        old_comparison_budget: "available_document_width_css_px",
      },
      deterministic_regression: {
        document_width_css_px: 320,
        carrier_inner_width_css_px: 260,
        row_required_inner_width_css_px: 316,
        new_result: "rejected-before-product-edit-requires-comparison-scroll",
      },
      validation: { focused_tests: { passed: 50, failed: 0 }, typescript: "passed", provider_runs: 0 },
      promotion: false,
    });
  });

  it("pins carrier-inner fit feasibility separately from pre-edit carrier anchors", () => {
    const previous = competitors.variants["omd-pre-edit-carrier-anchor-candidate"];
    const candidate = competitors.variants["omd-carrier-inner-fit-candidate"];
    const pin = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/carrier-inner-fit-feasibility-pin-1.9.580/PIN.json",
    ), "utf8"));
    expect(candidate).toMatchObject({
      kind: "local-skill",
      vendor_dir: "omd-1.9.579",
      source_path: "skills/omd-apply",
      install_adapter: previous.install_adapter,
      install_root: previous.install_root,
      install_dir: previous.install_dir,
      declared_name: "omd:apply",
      commit: "853db7bfe0939e0c58b1c8d01e7d2348100a14c8",
    });
    expect(candidate.commit).not.toBe(previous.commit);
    expect(pin).toMatchObject({
      product_version: "1.9.580",
      source_commit: candidate.commit,
      source_tree: "18b80a41e0ddca61a82e4d059d33bf41cd6f80c4",
      skill_tree: "8657f27858b85de9af0f31f943628e110d38d31d",
      status: "PINNED",
      provider_calls: 0,
      quality_promotion: false,
      competitor: { id: "omd-carrier-inner-fit-candidate", vendor_directory: "omd-1.9.579", exact_source_required: true },
      acceptance: { carrier_content_box_measured_before_product_edit: true, row_feasibility_bound_to_carrier_inner_width: true },
    });
  });

  it("locks a fresh orbital sample-return task before model exposure", () => {
    const task = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/tasks/orbital-sample-return-custody-v0.1/task.json",
    ), "utf8"));
    const baseline = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/orbital-sample-task-baseline-1.9.581/SUMMARY.final.json",
    ), "utf8"));
    expect(validateTaskContract(task)).toMatchObject({
      id: "orbital-sample-return-custody-v0.1",
      protected_hook_counts: {
        "[data-bench='return-canister-case']": 4,
        "[data-bench='custody-seal-id']": 6,
        "[data-bench='quarantine-bay-id']": 2,
        "[data-bench-decision-carrier='target']": 1,
      },
      text_geometry_oracle: {
        scope_selectors: [
          "[data-bench-design-role='canister-register']",
          "[data-bench='quarantine-bay-strip']",
          "[data-bench-decision-role='context']",
        ],
      },
    });
    expect(baseline).toMatchObject({
      product_version: "1.9.581",
      status: "FRESH_UNSEEN_TASK_BASELINED",
      provider_calls: 0,
      task_tree_sha256: "ae226298de7d182066e61dc9eef3a247ee66534fa6f1b25ba265a20305ebc975",
      baseline: {
        score_sha256: "bb82f178c52703b693ed4975c4c28509c9fe071f28dc672df0ef98c7f4530a44",
        objective_score: 75,
        objective_max: 85,
        critical_gates: { task_contract: true, state_journey: true, responsive: false, accessibility: false, design_grounding: true, evidence_honesty: true },
        document_widths: { mobile: { scroll: 1075, client: 390 }, narrow_320: { scroll: 1075, client: 320 }, actual_200pct: { scroll: 2150, client: 640 } },
      },
      locked_facts: { return_canisters: 4, custody_seals: 6, quarantine_bays: 2, protected_hook_mismatches: 0 },
    });
  });

  it("pins the orbital sample-return task before model exposure", () => {
    const pin = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/orbital-sample-task-pin-1.9.582/TASK-PIN.json",
    ), "utf8"));
    expect(pin).toMatchObject({
      product_version: "1.9.582",
      pin_id: "orbital-sample-return-custody-1.9.582",
      status: "PINNED_MODEL_UNSEEN",
      provider_calls: 0,
      task_id: "orbital-sample-return-custody-v0.1",
      source_commit: "536aa793d851d178827c4780bb8adccd98c1da65",
      task_tree: "32800908687f398cf4a00ed3bbb6520034905426",
      baseline_summary_sha256: "2e3354401d5cb441c00a54729141bafa25aea0be6611d6c4b9864bde12e56b06",
      baseline_score_sha256: "bb82f178c52703b693ed4975c4c28509c9fe071f28dc672df0ef98c7f4530a44",
      prior_model_exposures: 0,
      prior_control_exposures: 0,
      prior_candidate_exposures: 0,
      locked_contract: { return_canisters: 4, custody_seals: 6, quarantine_bays: 2, raw_objective_score: 75 },
    });
  });

  it("preregisters carrier-inner fit on the unseen orbital sample task", () => {
    const reportDir = join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/orbital-carrier-inner-fit-replacement-luna-1.9.583",
    );
    const prereg = JSON.parse(readFileSync(join(reportDir, "PREREGISTRATION.json"), "utf8"));
    const matrix = JSON.parse(readFileSync(join(reportDir, "RUN-MATRIX.json"), "utf8"));
    expect(prereg).toMatchObject({
      product_version: "1.9.583",
      status: "PREREGISTERED_PROVIDER_ZERO",
      provider_calls: 0,
      tokens_to_target: { attempt_order: 43, prior_observed_provider_tokens_minimum: 84725753 },
      task: { id: "orbital-sample-return-custody-v0.1", source_commit: "536aa793d851d178827c4780bb8adccd98c1da65", model_exposures: 0 },
      sources: {
        control: { source_commit: "a6ebdc8a923538a997d2724f90a09e1eb63f46f2", row_fit_budget: "available_document_width_css_px" },
        candidate: { source_commit: "853db7bfe0939e0c58b1c8d01e7d2348100a14c8", row_fit_budget: "available_carrier_inner_width_css_px" },
      },
      isolated_delta_contract: { shared_runner_self_dispatch: true, shared_snapshot_carrier_anchor_gate: true, causal_transfer_claim_requires_candidate_carrier_inner_plan_observed: true },
      matrix: { model_id: "gpt-5.6-luna", effort: "high", scheduled_cells: 6, timeout_seconds: 900, inter_cell_delay_seconds: 120, retry_policy: "none-primary" },
      promotion_gates: { candidate_ui_resolved_trials_required: 3, candidate_proof_compliant_trials_required: 3, candidate_carrier_inner_plan_trials_required: 3 },
    });
    expect(matrix).toMatchObject({
      product_version: "1.9.583",
      status: "locked-awaiting-fresh-preparation",
      task_lock_contract: { task_id: "orbital-sample-return-custody-v0.1", prior_control_exposures: 0, prior_candidate_exposures: 0 },
      control_source_contract: { source_commit: "a6ebdc8a923538a997d2724f90a09e1eb63f46f2" },
      candidate_source_contract: { source_commit: "853db7bfe0939e0c58b1c8d01e7d2348100a14c8" },
      carrier_inner_fit_contract: { candidate_required: true, control_required: false, multiple_instance_aggregation: "minimum" },
    });
    expect(matrix.cells).toHaveLength(6);
    expect(matrix.cells.map((cell) => cell.variant_id)).toEqual([
      "omd-pre-edit-carrier-anchor-candidate",
      "omd-carrier-inner-fit-candidate",
      "omd-carrier-inner-fit-candidate",
      "omd-pre-edit-carrier-anchor-candidate",
      "omd-pre-edit-carrier-anchor-candidate",
      "omd-carrier-inner-fit-candidate",
    ]);
  });

  it("prepares six untouched orbital carrier-inner cells from exact sources", () => {
    const preparation = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/orbital-carrier-inner-fit-replacement-luna-1.9.583/PREPARATION.json",
    ), "utf8"));
    expect(preparation).toMatchObject({
      product_version: "1.9.584",
      status: "SIX_CELLS_PREPARED",
      provider_calls: 0,
      locked_plan_sha256: "4b4027e7eb28a77279601faaadcb7091ea6fe0dd3136406559b352cd2cf14cc5",
      equality: { scheduled_cells: 6, prepared_cells: 6, core_prompt_equal: 6, prompt_equal: 6, starter_equal: 6, product_tree_equal: 6, runtime_equal: 6, model_equal: 6, effort_equal: 6, timeout_equal: 6 },
      source_attestation: {
        control: { commit: "a6ebdc8a923538a997d2724f90a09e1eb63f46f2", detached: true, clean: true },
        candidate: { commit: "853db7bfe0939e0c58b1c8d01e7d2348100a14c8", detached: true, clean: true },
      },
      shared_guardrail_presence: { runner_self_dispatch: true, snapshot_carrier_anchor_validation: true, aggregate_outer_width_gate: true },
      isolated_delta_guardrail: { control_carrier_inner_width_field_absent: true, candidate_carrier_inner_width_field_present: true, candidate_feasibility_uses_bound_carrier_inner_width: true },
    });
  });

  it("records the orbital carrier-inner r1 control as proof-green and UI-partial", () => {
    const result = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/orbital-carrier-inner-fit-replacement-luna-1.9.583/R1-CONTROL.json",
    ), "utf8"));
    expect(result).toMatchObject({
      product_version: "1.9.585",
      cell_id: "luna-orbital-sample-r1-control",
      status: "CHECKPOINTED_VALID_CONTROL_PARTIAL",
      validity: "valid",
      wall_time_ms: 408701,
      provider_tokens: { comparison_total: 1594744 },
      objective: { score: 83, max: 85, ui_resolved: false, responsive: false, narrow_conditions_pass: true, accessibility: true, serious_or_critical_axe_nodes: 0 },
      proof: { analyzable: true, static_closure_count: 1, browser_mechanism_count: 1, browser_recovery_count: 0, duplicate_static_closure_count: 0, shipped_runner_invoked: true, artifact_closed: true, execution_gate_pass: true },
      tokens_to_target: { observed_provider_tokens_minimum_after_cell: 86320497, goal_status: "right-censored" },
    });
  });

  it("freezes the orbital carrier-inner matrix after a UI-green but proof-red candidate", () => {
    const result = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/orbital-carrier-inner-fit-replacement-luna-1.9.583/SUMMARY.final.json",
    ), "utf8"));
    expect(result).toMatchObject({
      product_version: "1.9.586",
      status: "FROZEN_PROMOTION_UNREACHABLE",
      provider_calls: 2,
      completed_cells: 2,
      r1: {
        control: { ui_resolved: false, proof_pass: true, score: 83, tokens: 1594744 },
        candidate: { ui_resolved: true, proof_pass: false, score: 85, tokens: 3392946, carrier_inner_plan_observed: true },
      },
      promotion_reachability: { promotion_reachable: false, maximum_reachable_proof_compliant_trials: 2 },
      root_cause: { class: "overflowing-pre-edit-carrier-width-not-clamped-to-contained-budget" },
      tokens_to_target: { cumulative_observed_provider_tokens_minimum: 89713443, goal_status: "right-censored-open" },
    });
    expect(result.frozen_unstarted_cells).toHaveLength(4);
  });

  it("records the provider-free contained carrier budget repair", () => {
    const result = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/carrier-contained-budget-repair-1.9.587/REPAIR.json",
    ), "utf8"));
    expect(result).toMatchObject({
      product_version: "1.9.587",
      status: "PROVIDER_FREE_REPAIR_GREEN",
      provider_calls: 0,
      actual_failure_artifact_replay: {
        result: "pass",
        before: { "canister-register": [1038, 1038, 1038] },
        after: { "canister-register": [368, 298, 298], "custody-decision-target": [151.5, 116.5, 116.5] },
      },
      verification: { focused_skill_tests: "50/50 pass", actual_artifact_replay: "pass", provider_tokens: 0 },
    });
  });

  it("pins the exact contained carrier budget candidate", () => {
    const result = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/carrier-contained-budget-pin-1.9.588/PIN.json",
    ), "utf8"));
    expect(result).toMatchObject({
      product_version: "1.9.588",
      status: "PINNED_PROVIDER_ZERO",
      provider_calls: 0,
      candidate: {
        system_id: "omd-contained-carrier-budget-candidate",
        source_commit: "5f78f1c5a23148778a49bdc54f6f6026a7b8c1d2",
        source_tree: "83823662df28f80480a3a2d1f2d512ed7ead9e92",
        skill_tree: "0370e28452f51f957a05624eee3d4f6e82d88e9d",
      },
      repair_contract: { nested_live_width_preserved_when_smaller: true, overflowing_live_width_never_promoted_as_available: true },
    });
  });

  it("records the fresh archive film task before model exposure", () => {
    const result = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/archive-film-task-baseline-1.9.589/SUMMARY.final.json",
    ), "utf8"));
    expect(result).toMatchObject({
      product_version: "1.9.589",
      task_id: "archive-film-element-custody-v0.1",
      status: "FRESH_UNSEEN_TASK_BASELINED",
      provider_calls: 0,
      model_exposures: 0,
      task_tree_sha256: "54f5c61c23c6aa76080fa3b8d13c30252120925d2f625beb4d50d6eaceb18b8e",
      baseline: {
        objective_score: 75,
        objective_max: 85,
        critical_gates: { task_contract: true, state_journey: true, responsive: false, accessibility: false, design_grounding: true, evidence_honesty: true },
        document_widths: { mobile: { scroll: 1115, client: 390 }, actual_200pct: { scroll: 2230, client: 640 } },
        contrast_ratio_observed: 3.71,
      },
      locked_facts: { source_reels: 4, chain_labels: 6, vault_bays: 2, view_controls: 3, protected_hook_mismatches: 0 },
    });
  });

  it("pins the archive film task before model exposure", () => {
    const result = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/archive-film-task-pin-1.9.590/TASK-PIN.json",
    ), "utf8"));
    expect(result).toMatchObject({
      product_version: "1.9.590",
      status: "TASK_PINNED_PROVIDER_ZERO",
      provider_calls: 0,
      model_exposures: 0,
      task_id: "archive-film-element-custody-v0.1",
      source_commit: "6bdcd79d552c36d61238880044a41c1252e97a0f",
      task_git_tree: "5cfeab67793c3ad0f9f5b2b4266dc5fa79f8a97b",
      portable_task_tree_sha256: "54f5c61c23c6aa76080fa3b8d13c30252120925d2f625beb4d50d6eaceb18b8e",
      baseline_score_sha256: "0fa0e770e57b4af387b7190123458f2ff3608448808527cd82e3146a6330bb40",
      freshness_contract: { model_seen: false, control_seen: false, candidate_seen: false, task_mutation_after_pin_allowed: false },
    });
  });

  it("records the fresh backup restore task before model exposure", () => {
    const result = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/backup-restore-task-baseline-1.9.598/SUMMARY.final.json",
    ), "utf8"));
    expect(result).toMatchObject({
      product_version: "1.9.598",
      task_id: "backup-restore-point-handoff-v0.1",
      status: "FRESH_UNSEEN_TASK_BASELINED",
      provider_calls: 0,
      model_exposures: 0,
      task_tree_sha256: "b49d193cf699de2be1cb1e615223f5c5c360653ad1ccfac6e30e81d3bfbe6d96",
      baseline: {
        objective_score: 75,
        objective_max: 85,
        critical_gates: { task_contract: true, state_journey: true, responsive: false, accessibility: false, design_grounding: true, evidence_honesty: true },
        document_widths: { mobile: { scroll: 1115, client: 390 }, actual_200pct: { scroll: 2230, client: 640 } },
        contrast_ratio_observed: 2.73,
      },
      locked_facts: { restore_points: 4, manifests: 6, recovery_regions: 2, view_controls: 3, protected_hook_mismatches: 0 },
    });
  });

  it("pins the backup restore task before model exposure", () => {
    const result = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/backup-restore-task-pin-1.9.599/TASK-PIN.json",
    ), "utf8"));
    expect(result).toMatchObject({
      product_version: "1.9.599",
      status: "TASK_PINNED_PROVIDER_ZERO",
      provider_calls: 0,
      model_exposures: 0,
      task_id: "backup-restore-point-handoff-v0.1",
      source_commit: "84b54559fbbde15f5cf78004139113fcd292046c",
      task_git_tree: "759253016aabbdc1f0996fcc668325d358a59539",
      portable_task_tree_sha256: "b49d193cf699de2be1cb1e615223f5c5c360653ad1ccfac6e30e81d3bfbe6d96",
      baseline_score_sha256: "2e5e0451f5a4f48e5e14e99b2f2813808b691b89324fc0d0e09b718898a94838",
      freshness_contract: { model_seen: false, control_seen: false, candidate_seen: false, task_mutation_after_pin_allowed: false },
    });
  });

  it("preregisters the backup decision-context replacement without provider exposure", () => {
    const result = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/backup-decision-context-replacement-luna-1.9.600/PREREGISTRATION.json",
    ), "utf8"));
    expect(result).toMatchObject({
      product_version: "1.9.600",
      status: "PREREGISTERED_PROVIDER_ZERO",
      provider_calls: 0,
      tokens_to_target: { attempt_order: 45, prior_observed_provider_tokens_minimum: 96173681, prior_usage_unavailable_cells: 6 },
      task: { id: "backup-restore-point-handoff-v0.1", source_commit: "84b54559fbbde15f5cf78004139113fcd292046c", model_exposures: 0 },
      sources: {
        control: { source_commit: "5f78f1c5a23148778a49bdc54f6f6026a7b8c1d2", variant_id: "omd-contained-carrier-budget-candidate" },
        candidate: { source_commit: "5eaa26c9739a9e697f4707b06c31a32773706c16", variant_id: "omd-decision-context-closure-candidate" },
      },
      isolated_delta_contract: { shared_contained_carrier_budget: true, candidate_adds_concise_evidence_inventory: true, candidate_adds_target_full_row_order_and_spatial_gate: true },
      matrix: { model_id: "gpt-5.6-luna", effort: "high", trials_per_arm: 3, scheduled_cells: 6, timeout_seconds: 900, max_concurrency: 1, inter_cell_delay_seconds: 120, retry_policy: "none-primary" },
      promotion_gates: { candidate_ui_resolved_trials_required: 3, candidate_proof_compliant_trials_required: 3, candidate_concise_evidence_row_observed_trials_required: 3, candidate_target_full_row_order_spatial_trials_required: 3 },
    });
  });

  it("locks a valid executable backup decision-context matrix", () => {
    const matrix = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/backup-decision-context-replacement-luna-1.9.600/RUN-MATRIX.json",
    ), "utf8"));
    expect(() => validateRunMatrixPlan(matrix)).not.toThrow();
    expect(matrix).toMatchObject({
      schema_version: "0.3",
      product_version: "1.9.601",
      status: "locked-awaiting-fresh-preparation",
      task_lock_contract: { task_id: "backup-restore-point-handoff-v0.1", prior_control_exposures: 0, prior_candidate_exposures: 0 },
      control_source_contract: { source_commit: "5f78f1c5a23148778a49bdc54f6f6026a7b8c1d2" },
      candidate_source_contract: { source_commit: "5eaa26c9739a9e697f4707b06c31a32773706c16" },
      decision_context_closure_contract: { shared_contained_carrier_budget: true, candidate_concise_evidence_inventory_required: true, candidate_target_dedicated_full_row_required: true },
    });
    expect(matrix.cells).toHaveLength(6);
    expect(matrix.cells.map((cell) => cell.variant_id)).toEqual([
      "omd-contained-carrier-budget-candidate",
      "omd-decision-context-closure-candidate",
      "omd-decision-context-closure-candidate",
      "omd-contained-carrier-budget-candidate",
      "omd-contained-carrier-budget-candidate",
      "omd-decision-context-closure-candidate",
    ]);
  });

  it("prepares six untouched backup decision-context cells from exact detached sources", () => {
    const preparation = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/backup-decision-context-replacement-luna-1.9.600/PREPARATION.json",
    ), "utf8"));
    expect(preparation).toMatchObject({
      product_version: "1.9.602",
      status: "SIX_CELLS_PREPARED",
      provider_calls: 0,
      locked_plan_sha256: "f5630841fd1f414ff63ed1345442c9378451fdcbac20932665356fdb76e983d1",
      equality: {
        scheduled_cells: 6,
        prepared_cells: 6,
        core_prompt_equal: 6,
        prompt_equal: 6,
        starter_equal: 6,
        product_tree_equal: 6,
        runtime_equal: 6,
        model_equal: 6,
        effort_equal: 6,
        timeout_equal: 6,
      },
      source_attestation: {
        control: { commit: "5f78f1c5a23148778a49bdc54f6f6026a7b8c1d2", detached: true, clean: true },
        candidate: { commit: "5eaa26c9739a9e697f4707b06c31a32773706c16", detached: true, clean: true },
      },
      isolated_delta_guardrail: {
        shared_contained_budget_formula_present: true,
        control_decision_evidence_inventory_absent: true,
        candidate_decision_evidence_inventory_present: true,
        control_final_decision_context_gate_absent: true,
        candidate_final_decision_context_gate_present: true,
        all_three_control_cells_match: true,
        all_three_candidate_cells_match: true,
      },
      execution_contract: { next_cell: "luna-backup-r1-control", max_new_cells: 1, retry: false, inter_cell_delay_seconds: 120 },
    });
  });

  it("checkpoints the valid failed backup r1 control without retry", () => {
    const result = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/backup-decision-context-replacement-luna-1.9.600/R1-CONTROL.json",
    ), "utf8"));
    expect(result).toMatchObject({
      product_version: "1.9.603",
      cell_id: "luna-backup-r1-control",
      status: "CHECKPOINTED_VALID_CONTROL_FAILED",
      validity: "valid",
      retry_count: 0,
      wall_time_ms: 526814,
      provider_tokens: { comparison_total: 2683104 },
      objective: { score: 79, max: 85, ui_resolved: false, responsive: false, accessibility: true, narrow_atomic_wraps: 1, actual_200pct_atomic_wraps: 1, desktop_target_action_spatially_separated: false },
      proof: { analyzable: true, static_closure_count: 1, browser_mechanism_count: 1, browser_recovery_count: 0, shipped_runner_invoked: true, artifact_closed: false, execution_gate_pass: false, unresolved_carrier_id: "review-controls" },
      tokens_to_target: { observed_provider_tokens_minimum_after_cell: 98856785, usage_unavailable_cells: 6, goal_status: "right-censored" },
    });
  });

  it("freezes backup replacement after partial evidence transfer without UI or proof reliability", () => {
    const result = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/backup-decision-context-replacement-luna-1.9.600/SUMMARY.final.json",
    ), "utf8"));
    expect(result).toMatchObject({
      product_version: "1.9.604",
      status: "FROZEN_PROMOTION_UNREACHABLE",
      promotion: false,
      provider_calls: 2,
      completed_cells: 2,
      r1: {
        control: { score: 79, ui_resolved: false, proof_pass: false, tokens: 2683104 },
        candidate: { score: 83, ui_resolved: false, proof_pass: false, tokens: 2987373 },
      },
      candidate_transfer_evidence: { concise_evidence_inventory_observed: true, concise_evidence_one_line_320: true, decision_context_required_flags: [false, false, false], artifact_closed: false },
      candidate_failures: { desktop_target_action_spatial_separation: false, target_full_row_gate_was_required: false, target_full_row_gate_fail_closed: false, unresolved_carrier_id: "recovery-region-strip" },
      promotion_reachability: { candidate_ui_resolved_observed: 0, maximum_reachable_ui_resolved_trials: 2, candidate_proof_compliant_observed: 0, maximum_reachable_proof_compliant_trials: 2, promotion_reachable: false },
      paired_efficiency: { wall_time_gate: true, token_gate: false, causal_efficiency_claim_allowed: false },
      tokens_to_target: { cumulative_observed_provider_tokens_minimum: 101844158, usage_unavailable_cells: 6, goal_status: "right-censored-open" },
    });
    expect(result.frozen_unstarted_cells).toHaveLength(4);
  });

  it("repairs desktop decision-context and nested comparison-carrier proof provider-free", () => {
    const result = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/decision-context-desktop-nesting-repair-1.9.605/REPAIR.json",
    ), "utf8"));
    expect(result).toMatchObject({
      product_version: "1.9.605",
      status: "PROVIDER_FREE_REPAIR_GREEN",
      promotion: false,
      provider_calls: 0,
      source_failure: {
        desktop_target_action_spatially_separated: false,
        decision_context_required_flags: [false, false, false],
        unresolved_carrier_id: "recovery-region-strip",
      },
      repair_contract: {
        desktop_decision_context_condition: { viewport_width: 1440, zoom: 1 },
        desktop_and_narrow_decision_context_measured_from_final_product: true,
        missing_final_decision_context_fails_closed: true,
        comparison_scroll_rejects_nested_registered_carriers_before_edit: true,
      },
      actual_failed_artifact_replay: { result: "rejected-before-edit", original_artifact_mutated: false },
      verification: { python_compile: "pass", focused_tests_passed: 52, typescript_lint: "pass", skill_quick_validate: "pass", diff_check: "pass" },
      tokens_to_target: { cumulative_observed_provider_tokens_minimum: 101844158, usage_unavailable_cells: 6, goal_status: "right-censored-open" },
    });
  });

  it("preregisters the archive contained-budget replacement without provider exposure", () => {
    const result = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/archive-contained-budget-replacement-luna-1.9.591/PREREGISTRATION.json",
    ), "utf8"));
    expect(result).toMatchObject({
      product_version: "1.9.591",
      status: "PREREGISTERED_PROVIDER_ZERO",
      provider_calls: 0,
      tokens_to_target: { attempt_order: 44, prior_observed_provider_tokens_minimum: 89713443, prior_usage_unavailable_cells: 6 },
      task: { id: "archive-film-element-custody-v0.1", source_commit: "6bdcd79d552c36d61238880044a41c1252e97a0f", model_exposures: 0 },
      sources: {
        control: { source_commit: "853db7bfe0939e0c58b1c8d01e7d2348100a14c8", carrier_budget: "raw live content-box width" },
        candidate: { source_commit: "5f78f1c5a23148778a49bdc54f6f6026a7b8c1d2", carrier_budget: "min(raw live content-box width, contained document budget)" },
      },
      matrix: { model_id: "gpt-5.6-luna", effort: "high", scheduled_cells: 6, timeout_seconds: 900, inter_cell_delay_seconds: 120, retry_policy: "none-primary" },
      promotion_gates: { candidate_ui_resolved_trials_required: 3, candidate_proof_compliant_trials_required: 3, candidate_contained_budget_plan_trials_required: 3, candidate_invalid_raw_overflow_budget_trials_allowed: 0 },
    });
  });

  it("locks a valid executable archive contained-budget matrix", () => {
    const matrix = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/archive-contained-budget-replacement-luna-1.9.591/RUN-MATRIX.json",
    ), "utf8"));
    expect(() => validateRunMatrixPlan(matrix)).not.toThrow();
    expect(matrix).toMatchObject({
      schema_version: "0.3",
      product_version: "1.9.591",
      status: "locked-awaiting-fresh-preparation",
      task_lock_contract: { task_id: "archive-film-element-custody-v0.1", prior_control_exposures: 0, prior_candidate_exposures: 0 },
      control_source_contract: { source_commit: "853db7bfe0939e0c58b1c8d01e7d2348100a14c8" },
      candidate_source_contract: { source_commit: "5f78f1c5a23148778a49bdc54f6f6026a7b8c1d2" },
      contained_carrier_budget_contract: { candidate_required: true, control_required: false, raw_overflow_budget_allowed: false },
    });
    expect(matrix.cells).toHaveLength(6);
    expect(matrix.cells.map((cell) => cell.variant_id)).toEqual([
      "omd-carrier-inner-fit-candidate",
      "omd-contained-carrier-budget-candidate",
      "omd-contained-carrier-budget-candidate",
      "omd-carrier-inner-fit-candidate",
      "omd-carrier-inner-fit-candidate",
      "omd-contained-carrier-budget-candidate",
    ]);
  });

  it("prepares six untouched archive contained-budget cells from exact detached sources", () => {
    const preparation = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/archive-contained-budget-replacement-luna-1.9.591/PREPARATION.json",
    ), "utf8"));
    expect(preparation).toMatchObject({
      product_version: "1.9.593",
      status: "SIX_CELLS_PREPARED",
      provider_calls: 0,
      locked_plan_sha256: "678cd22681f068497bca810dfabedd7e50fcb7f7dbb6d0149fbbd5e245a3d418",
      equality: {
        scheduled_cells: 6,
        prepared_cells: 6,
        core_prompt_equal: 6,
        prompt_equal: 6,
        starter_equal: 6,
        product_tree_equal: 6,
        runtime_equal: 6,
        model_equal: 6,
        effort_equal: 6,
        timeout_equal: 6,
      },
      source_attestation: {
        control: { commit: "853db7bfe0939e0c58b1c8d01e7d2348100a14c8", detached: true, clean: true },
        candidate: { commit: "5f78f1c5a23148778a49bdc54f6f6026a7b8c1d2", detached: true, clean: true },
      },
      isolated_delta_guardrail: {
        control_contained_budget_formula_absent: true,
        control_contained_budget_field_absent: true,
        candidate_contained_budget_formula_present: true,
        candidate_contained_budget_field_present: true,
        all_three_control_cells_match: true,
        all_three_candidate_cells_match: true,
      },
      execution_contract: { next_cell: "luna-archive-r1-control", max_new_cells: 1, retry: false, inter_cell_delay_seconds: 120 },
    });
  });

  it("records the archive r1 control as valid but UI and proof unresolved", () => {
    const result = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/archive-contained-budget-replacement-luna-1.9.591/R1-CONTROL.json",
    ), "utf8"));
    expect(result).toMatchObject({
      product_version: "1.9.594",
      cell_id: "luna-archive-r1-control",
      status: "CHECKPOINTED_VALID_CONTROL_FAILED",
      validity: "valid",
      retry_count: 0,
      wall_time_ms: 575655,
      provider_tokens: { comparison_total: 2908997 },
      objective: { score: 81, max: 85, ui_resolved: false, responsive: false, accessibility: true, document_overflow_px: 0, narrow_atomic_wraps: 1, actual_200pct_atomic_wraps: 1 },
      proof: { analyzable: true, product_edit_count: 1, static_closure_count: 2, browser_mechanism_count: 0, duplicate_static_closure_count: 1, shipped_runner_invoked: false, artifact_closed: false, execution_gate_pass: false },
      tokens_to_target: { observed_provider_tokens_minimum_after_cell: 92622440, usage_unavailable_cells: 6, goal_status: "right-censored" },
    });
  });

  it("freezes archive replacement after proof transfer without UI reliability", () => {
    const result = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/archive-contained-budget-replacement-luna-1.9.591/SUMMARY.final.json",
    ), "utf8"));
    expect(result).toMatchObject({
      product_version: "1.9.595",
      status: "FROZEN_PROMOTION_UNREACHABLE",
      promotion: false,
      provider_calls: 2,
      completed_cells: 2,
      r1: {
        control: { score: 81, ui_resolved: false, proof_pass: false, tokens: 2908997 },
        candidate: { score: 79, ui_resolved: false, proof_pass: true, contained_budget_plan_observed: true, tokens: 3551241 },
      },
      candidate_contained_budget_evidence: { artifact_closed: true, static_closure_count: 1, browser_mechanism_count: 1, shipped_runner_invoked: true, source_reel_register_budgets: [368, 298, 298], invalid_raw_overflow_budget_count: 0 },
      candidate_ui_failure: { narrow_320_lines: 2, actual_200pct_lines: 2, desktop_target_action_spatial_separation: false },
      promotion_reachability: { candidate_ui_resolved_observed: 0, maximum_reachable_ui_resolved_trials: 2, promotion_reachable: false },
      paired_efficiency: { wall_time_gate: false, token_gate: false, causal_efficiency_claim_allowed: false },
      tokens_to_target: { cumulative_observed_provider_tokens_minimum: 96173681, usage_unavailable_cells: 6, goal_status: "right-censored-open" },
    });
    expect(result.frozen_unstarted_cells).toHaveLength(4);
  });

  it("records the provider-free decision-context closure repair", () => {
    const result = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/decision-context-closure-repair-1.9.596/REPAIR.json",
    ), "utf8"));
    expect(result).toMatchObject({
      product_version: "1.9.596",
      status: "PROVIDER_FREE_REPAIR_GREEN",
      provider_calls: 0,
      source_failure: { cell_id: "luna-archive-r1-candidate", objective_score: 79, proof_pass: true, concise_evidence_lines: { "320": 2, "200pct": 2 }, desktop_target_action_spatial_separation: false },
      repair_contract: { long_form_evidence_can_wrap: true, unknown_fact_fallback_allowed: false },
      deterministic_enforcement: { snapshot_rejects_missing_protected_evidence_row: true, final_runner_checks_target_full_row: true, final_runner_checks_target_precedes_supporting: true, final_runner_checks_target_supporting_spatial_separation: true, actual_failed_artifact_replay: { result: "rejected-before-plan-close" } },
      verification: { focused_tests: "51/51 pass", python_compile: "pass", typescript_lint: "pass", skill_validation: "pass", diff_check: "pass", provider_tokens: 0 },
      quality_promotion: false,
    });
  });

  it("pins the exact decision-context closure candidate before fresh model exposure", () => {
    const result = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/decision-context-closure-pin-1.9.597/PIN.json",
    ), "utf8"));
    expect(result).toMatchObject({
      product_version: "1.9.597",
      status: "PINNED_PROVIDER_ZERO",
      provider_calls: 0,
      candidate: {
        system_id: "omd-decision-context-closure-candidate",
        vendor_version: "omd-1.9.596",
        source_commit: "5eaa26c9739a9e697f4707b06c31a32773706c16",
        source_tree: "0a5b004b3406695ad870ed484cef73def77ac188",
        skill_tree: "ae1306fe525395086836f2b95a1312152fb0eb28",
      },
      repair_contract: { concise_decision_evidence_inventory: true, decision_target_dedicated_full_row: true, decision_target_precedes_supporting_roles: true, decision_target_supporting_spatial_separation: true, contained_carrier_budget_retained: true },
    });
  });

  it("records the spent-fuel r1 control as UI-resolved but proof-unresolved", () => {
    const result = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/spent-fuel-decision-target-luna-1.9.558/R1-CONTROL.json",
    ), "utf8"));
    expect(result).toMatchObject({
      product_version: "1.9.560",
      cell_id: "luna-spent-fuel-r1-control",
      validity: "valid",
      retry_count: 0,
      objective: { score: 85, max: 85, ui_resolved: true },
      efficiency: { wall_time_ms: 543074, provider_tokens: 2987256 },
      proof: {
        pass: false,
        reason: "reflow-artifact-not-closed",
        product_edit_count: 1,
        static_closure_count: 1,
        browser_mechanism_count: 1,
        closure_state: "unresolved",
        unresolved_carrier_instances: 2,
        unresolved_rows: 0,
      },
      failure: {
        class: "comparison-carrier-contains-separately-registered-evidence-row",
        carrier_selector: ".stations .carrier",
        unbound_contained_row: "transfer-windows",
      },
      tokens_to_target: { cumulative_observed_provider_tokens_minimum: 76499941, usage_unavailable_cells: 6 },
    });
  });

  it("preregisters exact measured pre-edit fit planning on the unseen observatory task", () => {
    const matrix = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/observatory-measured-fit-plan-luna-1.9.528/RUN-MATRIX.json",
    ), "utf8"));
    expect(matrix).toMatchObject({
      product_version: "1.9.528",
      status: "locked-awaiting-fresh-preparation",
      task_lock_contract: {
        task_id: "observatory-frame-calibration-review-v0.1",
        source_commit: "ff00df37143e615b1e50e6540b11929cf913793a",
        prior_control_exposures: 0,
        prior_candidate_exposures: 0,
      },
      control_source_contract: { source_commit: "8d647987fbcacabcf406c6eb393d8d40330ced05" },
      candidate_source_contract: { source_commit: "b3b83bf7cc3808c643beb34934ad1096ee334270" },
      pre_edit_fit_plan_contract: {
        candidate_required: true,
        control_required: false,
        browser_snapshot_before_product_edit: true,
        named_plan_mode_required: true,
        oracle: "intrinsic-nowrap-text-width",
        planning_reserve_css_px: 16,
        plan_close_before_product_edit: true,
      },
      promotion_gates: {
        candidate_system_id: "luna-measured-pre-edit-fit-plan-candidate",
        ui_resolved_trials_required: 3,
        proof_compliant_trials_required: 3,
        measured_fit_plan_trials_required: 3,
      },
    });
    expect(matrix.cells).toHaveLength(6);
    expect(matrix.cells.map((cell) => cell.system_id)).toEqual([
      "luna-acceptance-debt-control",
      "luna-measured-pre-edit-fit-plan-candidate",
      "luna-measured-pre-edit-fit-plan-candidate",
      "luna-acceptance-debt-control",
      "luna-acceptance-debt-control",
      "luna-measured-pre-edit-fit-plan-candidate",
    ]);
  });

  it("preregisters exact structured first-edit closure on the unseen offshore task", () => {
    const matrix = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/offshore-first-edit-checklist-luna-1.9.544/RUN-MATRIX.json",
    ), "utf8"));
    expect(matrix).toMatchObject({
      product_version: "1.9.544",
      status: "locked-awaiting-fresh-preparation",
      task_lock_contract: {
        task_id: "offshore-turbine-inspection-review-v0.1",
        source_commit: "7dffde417a5abe54ca9c605925097bddd8b21d6d",
        prior_control_exposures: 0,
        prior_candidate_exposures: 0,
      },
      control_source_contract: { source_commit: "0b93fa971c5d4e086b2645f2de9dd09fe1b365fe" },
      candidate_source_contract: { source_commit: "28f9620035fc1adae32b17965a7f51312c3ca2f5" },
      aggregate_carrier_fit_plan_contract: { both_arms_required: true },
      first_edit_static_checklist_contract: {
        candidate_required: true,
        control_required: false,
        structured_css_declarations_required: true,
        safe_zero_containment_reset_allowed: true,
        ordered_checklist_required: true,
        red_static_close_terminal: true,
      },
      promotion_gates: {
        candidate_system_id: "luna-first-edit-static-checklist-candidate",
        ui_resolved_trials_required: 3,
        proof_compliant_trials_required: 3,
        aggregate_carrier_fit_plan_trials_required: 3,
        first_edit_static_checklist_trials_required: 3,
      },
    });
    expect(matrix.cells).toHaveLength(6);
    expect(matrix.cells.map((cell) => cell.system_id)).toEqual([
      "luna-aggregate-carrier-fit-plan-control",
      "luna-first-edit-static-checklist-candidate",
      "luna-first-edit-static-checklist-candidate",
      "luna-aggregate-carrier-fit-plan-control",
      "luna-aggregate-carrier-fit-plan-control",
      "luna-first-edit-static-checklist-candidate",
    ]);
  });

  it("attests six equal observatory cells and two exact detached skill sources", () => {
    const preparation = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/observatory-measured-fit-plan-luna-1.9.528/PREPARATION.json",
    ), "utf8"));
    expect(preparation).toMatchObject({
      product_version: "1.9.529",
      status: "SIX_CELLS_PREPARED",
      provider_calls: 0,
      equality: {
        scheduled_cells: 6,
        prepared_cells: 6,
        core_prompt_equal: 6,
        prompt_equal: 6,
        starter_equal: 6,
        product_tree_equal: 6,
        runtime_equal: 6,
        model_equal: 6,
        effort_equal: 6,
        timeout_equal: 6,
      },
      source_attestation: {
        control: { commit: "8d647987fbcacabcf406c6eb393d8d40330ced05", detached: true, clean: true },
        candidate: { commit: "b3b83bf7cc3808c643beb34934ad1096ee334270", detached: true, clean: true },
      },
      candidate_guardrail_presence: {
        skill_measured_fit_plan_rule: true,
        helper_plan_close_command: true,
        browser_named_plan_mode: true,
        intrinsic_nowrap_width_oracle: true,
        planned_fit_reserve_16: true,
        measured_fit_reserve_8: true,
      },
    });
  });

  it("freezes observatory transfer when row plans miss aggregate carrier width", () => {
    const summary = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/observatory-measured-fit-plan-luna-1.9.528/SUMMARY.final.json",
    ), "utf8"));
    expect(summary).toMatchObject({
      product_version: "1.9.532",
      status: "FROZEN_NO_PROMOTION",
      provider_calls: 3,
      scheduled_cells: 6,
      completed_cells: 3,
      frozen_cells: 3,
      arms: {
        control: { completed: 1, ui_resolved: 1, proof_compliant: 1 },
        candidate: {
          completed: 2,
          ui_resolved: 1,
          proof_compliant: 1,
          measured_fit_plan_complete: 2,
          proof_reliability_at_3_max: "2/3",
        },
      },
      measured_fit_plan_transfer: {
        pre_edit_measurement_executed_trials: 2,
        aggregate_carrier_plan_complete_trials: 1,
      },
      promotion: false,
    });
  });

  it("repairs pre-edit planning with exactly-one aggregate carrier coverage", () => {
    const acceptance = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/aggregate-carrier-fit-plan-repair-1.9.533/ACCEPTANCE.json",
    ), "utf8"));
    expect(acceptance).toMatchObject({
      product_version: "1.9.533",
      status: "provider-free-candidate-repair-accepted",
      contract: {
        planning_margin_css_px: 16,
        fail_closed: "A green row text budget cannot close planning when its aggregate carrier requires reflow.",
      },
      provider_free_browser_smoke: {
        attached_existing: true,
        launched_browser: false,
        row_intrinsic_text_width_css_px: 36.5547,
        carrier_intrinsic_outer_width_css_px: {
          "390": 462.9297,
          "320": 462.9297,
          "200pct": 462.9375,
        },
        requires_reflow: { "390": true, "320": true, "200pct": true },
      },
      provider_calls: 0,
      quality_promotion: false,
      same_task_retry_allowed: false,
    });
    expect(acceptance.contract.carrier_fields).toEqual([
      "intrinsic_outer_width_css_px",
      "horizontal_chrome_css_px",
      "inter_item_gap_css_px",
      "required_outer_width_css_px",
      "available_document_width_css_px",
      "requires_reflow",
    ]);
  });

  it("preregisters exact aggregate-carrier planning on the unseen pharmaceutical task", () => {
    const matrix = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/pharmaceutical-aggregate-carrier-luna-1.9.536/RUN-MATRIX.json",
    ), "utf8"));
    expect(validateRunMatrixPlan(matrix, { competitors })).toMatchObject({
      product_version: "1.9.536",
      execution_purpose: "internal-aggregate-carrier-fit-plan-transfer-reliability",
      output_root: "/private/tmp/u19536",
      vendors_root: "/private/tmp/u19536-vendors",
      control_contract: {
        timeout_seconds: 900,
        max_concurrency: 1,
        retry_policy: "none-primary",
        task_order_policy: "balanced-rotation",
        pacing: { inter_cell_delay_seconds: 120 },
      },
      task_lock_contract: {
        task_id: "pharmaceutical-batch-deviation-review-v0.1",
        source_commit: "85a309d91ae99de33014437ed704d313a37c74f7",
        scored_model_exposure_before_replacement: false,
      },
      control_source_contract: { source_commit: "b3b83bf7cc3808c643beb34934ad1096ee334270" },
      candidate_source_contract: { source_commit: "0b93fa971c5d4e086b2645f2de9dd09fe1b365fe" },
      aggregate_carrier_fit_plan_contract: {
        candidate_required: true,
        control_required: false,
        every_row_exactly_one_aggregate_carrier: true,
        max_content_clone_measurement: true,
        row_green_carrier_red_must_reflow: true,
      },
      promotion_gates: {
        candidate_system_id: "luna-aggregate-carrier-fit-plan-candidate",
        ui_resolved_trials_required: 3,
        proof_compliant_trials_required: 3,
        aggregate_carrier_fit_plan_trials_required: 3,
      },
    });
    expect(matrix.cells).toHaveLength(6);
    expect(matrix.cells.map((cell) => cell.system_id)).toEqual([
      "luna-row-only-fit-plan-control",
      "luna-aggregate-carrier-fit-plan-candidate",
      "luna-aggregate-carrier-fit-plan-candidate",
      "luna-row-only-fit-plan-control",
      "luna-row-only-fit-plan-control",
      "luna-aggregate-carrier-fit-plan-candidate",
    ]);
    expect(new Set(matrix.cells.map((cell) => `${cell.model_id}/${cell.effort}`)))
      .toEqual(new Set(["gpt-5.6-luna/high"]));
  });

  it("prepares six untouched pharmaceutical aggregate-carrier cells from exact detached sources", () => {
    const preparation = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/pharmaceutical-aggregate-carrier-luna-1.9.536/PREPARATION.json",
    ), "utf8"));
    expect(preparation).toMatchObject({
      product_version: "1.9.537",
      status: "SIX_CELLS_PREPARED",
      provider_calls: 0,
      output_root: "/private/tmp/u19536",
      vendors_root: "/private/tmp/u19536-vendors",
      equality: {
        scheduled_cells: 6,
        prepared_cells: 6,
        core_prompt_equal: 6,
        prompt_equal: 6,
        starter_equal: 6,
        product_tree_equal: 6,
        runtime_equal: 6,
        model_equal: 6,
        effort_equal: 6,
        timeout_equal: 6,
      },
      source_attestation: {
        control: { commit: "b3b83bf7cc3808c643beb34934ad1096ee334270", detached: true, clean: true },
        candidate: { commit: "0b93fa971c5d4e086b2645f2de9dd09fe1b365fe", detached: true, clean: true },
      },
      candidate_guardrail_presence: {
        skill_exact_one_aggregate_carrier_rule: true,
        helper_exact_one_binding_gate: true,
        browser_max_content_clone: true,
        browser_aggregate_outer_width_fields: true,
        requires_reflow_gate: true,
      },
    });
  });

  it("prepares six untouched offshore checklist cells from exact detached sources", () => {
    const preparation = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/offshore-first-edit-checklist-luna-1.9.544/PREPARATION.json",
    ), "utf8"));
    expect(preparation).toMatchObject({
      product_version: "1.9.545",
      status: "SIX_CELLS_PREPARED",
      provider_calls: 0,
      output_root: "/private/tmp/u19544",
      vendors_root: "/private/tmp/u19544-vendors",
      equality: {
        scheduled_cells: 6,
        prepared_cells: 6,
        core_prompt_equal: 6,
        prompt_equal_within_arm: 6,
        starter_equal: 6,
        product_tree_equal: 6,
        runtime_equal: 6,
        model_equal: 6,
        effort_equal: 6,
        timeout_equal: 6,
      },
      source_attestation: {
        control: { commit: "0b93fa971c5d4e086b2645f2de9dd09fe1b365fe", detached: true, clean: true },
        candidate: { commit: "28f9620035fc1adae32b17965a7f51312c3ca2f5", detached: true, clean: true },
      },
      candidate_guardrail_presence: {
        structured_css_declaration_schema: true,
        positive_length_contract: true,
        any_declaration_contract: true,
        safe_zero_reset_semantics: true,
        acceptance_debt_manifest_binding: true,
        ordered_first_edit_checklist: true,
        checklist_contract_terminal_red: true,
        aggregate_carrier_plan_retained: true,
        browser_runner_identical: true,
      },
    });
  });

  it("prepares six untouched subsea fit-strategy cells from exact detached sources", () => {
    const preparation = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/subsea-fit-strategy-luna-1.9.551/PREPARATION.json",
    ), "utf8"));
    expect(preparation).toMatchObject({
      product_version: "1.9.552",
      status: "SIX_CELLS_PREPARED",
      provider_calls: 0,
      output_root: "/private/tmp/u19551",
      vendors_root: "/private/tmp/u19551-vendors",
      equality: {
        scheduled_cells: 6,
        prepared_cells: 6,
        core_prompt_equal: 6,
        prompt_equal: 6,
        starter_equal: 6,
        product_tree_equal: 6,
        runtime_equal: 6,
        model_equal: 6,
        effort_equal: 6,
        timeout_equal: 6,
      },
      source_attestation: {
        control: { commit: "28f9620035fc1adae32b17965a7f51312c3ca2f5", detached: true, clean: true },
        candidate: { commit: "84329948762fc75b33de39e13e68535d89fd3447", detached: true, clean: true },
      },
      candidate_guardrail_presence: {
        fit_strategy_feasibility_derived: true,
        intrinsic_document_unfit_gate: true,
        comparison_scroll_before_edit: true,
        shared_passive_identifier_only: true,
        decision_target_only_retained: true,
        focusable_action_excluded: true,
        structured_first_edit_checklist_retained: true,
        aggregate_carrier_plan_retained: true,
        browser_runner_identical: true,
      },
    });
  });

  it("freezes subsea transfer when the decision target is omitted from the fit inventory", () => {
    const summary = JSON.parse(readFileSync(join(
      repoRoot,
      "benchmarks/ui-resolve-bench/reports/subsea-fit-strategy-luna-1.9.551/SUMMARY.final.json",
    ), "utf8"));
    expect(summary).toMatchObject({
      product_version: "1.9.554",
      status: "FROZEN_PROMOTION_IMPOSSIBLE",
      promotion: false,
      provider_calls: 2,
      completed_cells: 2,
      frozen_cells: 4,
      candidate_reliability_at_3: {
        observed_trials: 1,
        proof_compliant_trials: 0,
        maximum_possible_proof_compliant_trials: 2,
        required: 3,
        gate: "failed",
      },
      paired_r1: {
        control: { objective: 77, ui_resolved: false, proof: false },
        candidate: { objective: 85, ui_resolved: true, proof: false },
        candidate_wall_time_ratio: 0.77,
        candidate_token_ratio: 1.1984,
      },
      unresolved_failure: {
        class: "decision-target-inventory-omission",
        first_terminal_overflow_px: { "390": 69, "320": 139, actual_200pct_document: 264 },
      },
      tokens_to_target: { minimum: 73512685, usage_unavailable_cells: 6 },
    });
  });

  it("keeps model, skill, harness, prompt arena, and transfer results in separate families", () => {
    expect(Object.keys(families.families)).toEqual(["model", "skill", "harness", "prompt-arena", "factorial"]);
    expect(families.families.model.skills_allowed).toBe(false);
    expect(families.families.skill.paired_baseline).toBe("no-skill");
    expect(families.families.harness.rank_mode).toBe("pareto");
    expect(families.families["prompt-arena"].public_rank).toBe(false);
    expect(families.sample_policy).toMatchObject({
      patch_smoke: { tasks: 3, runs_per_task: 3 },
      internal_candidate: { tasks: 12, runs_per_task: 5 },
      verified_public: { minimum_tasks: 24, runs_per_task: 10 },
    });
  });

  it("defines every 0.0.1 patch experiment without allowing the calendar to force 2.0.0", () => {
    const patchVersions = releaseTrain.releases
      .map((release) => release.version)
      .filter((version) => version.startsWith('1.9.'));
    expect(patchVersions.length).toBeGreaterThanOrEqual(14);
    expect(patchVersions).toEqual(
      Array.from({ length: patchVersions.length }, (_, index) => `1.9.${index + 1}`),
    );
    expect(releaseTrain.releases.at(-1)).toMatchObject({ status: "gated", experiment: "frontier-release" });
    expect(releaseTrain.rules).toMatchObject({
      benchmark_and_product_versions_are_separate: true,
      failed_experiments_remain_visible: true,
      score_rule_change_requires_suite_version: true,
      calendar_can_force_2_0_0: false,
      number_9_can_force_2_0_0: false,
      continue_patch_train_until_frontier_gates: true,
    });
  });

  it("separates no-context and raw DESIGN.md controls", () => {
    const baseline = prepareVariant("baseline");
    const raw = prepareVariant("raw-design-md");

    expect(existsSync(join(baseline, "DESIGN.md"))).toBe(false);
    expect(existsSync(join(raw, "DESIGN.md"))).toBe(true);
    expect(readFileSync(join(raw, ".benchmark/PROMPT.md"), "utf8")).toContain("If this repository contains `DESIGN.md`");
  });

  it("copies the canonical OmD skill without executing installers or hooks", () => {
    const out = prepareVariant("omd-portable");
    const manifest = JSON.parse(readFileSync(join(out, ".benchmark/manifest.json"), "utf8"));
    const prompt = readFileSync(join(out, ".benchmark/PROMPT.md"), "utf8");

    expect(existsSync(join(out, ".agents/skills/omd-apply/SKILL.md"))).toBe(true);
    expect(installedSkillName(join(out, ".agents/skills/omd-apply/SKILL.md"))).toBe("omd:apply");
    expect(prompt).toContain("$omd:apply");
    expect(prompt).not.toContain("$omd-apply");
    expect(existsSync(join(out, ".codex/agents"))).toBe(false);
    expect(existsSync(join(out, ".claude/agents"))).toBe(false);
    expect(existsSync(join(out, ".opencode/agents"))).toBe(false);
    expect(manifest.skill.files).toBeGreaterThan(0);
    expect(manifest.skill).toMatchObject({
      declared_name: "omd:apply",
      install_platform: "agents",
      install_root: ".agents/skills",
      install_dir: "omd-apply",
      install_adapter: "omd-channel-name-v1",
      source_attestation: expect.objectContaining({
        vcs: "git",
        dirty: expect.any(Boolean),
        explicit_dirty_opt_in: expect.any(Boolean),
        publishable: expect.any(Boolean),
      }),
    });
    expect(manifest.skill.source_attestation.explicit_dirty_opt_in)
      .toBe(manifest.skill.source_attestation.dirty);
    expect(manifest.skill.source_attestation.publishable)
      .toBe(!manifest.skill.source_attestation.dirty);
    expect(manifest.task.core_prompt_sha256).toMatch(/^[a-f0-9]{64}$/);
    expect(manifest.task.prompt_sha256).toMatch(/^[a-f0-9]{64}$/);
    expect(manifest.task.prompt_sha256).not.toBe(manifest.task.core_prompt_sha256);
    expect(manifest.variant.activation_delta).toContain("$omd:apply");
    expect(manifest.variant.activation_delta_sha256).toMatch(/^[a-f0-9]{64}$/);
    expect(manifest.safety).toEqual({
      third_party_installer_executed: false,
      hooks_enabled: false,
      agent_tool_enabled: false,
      source_symlinks_allowed: false,
    });
  });

  it("prepares clean pinned OmD skill versions without prompt identity leakage", () => {
    const expectedCommits = {
      "omd-portable-slate": "c285d25515ec8959e66ceeb7703417aad531cd95",
      "omd-portable-ember": "7364cbde3b58733c9e732fb75c179d6f37cd4c5b",
    };
    const identityLeak = /\b(?:old|new|control|candidate)\b|1\.9\.(?:78|95)/i;

    withVersionedOmdVendors((vendors) => {
      for (const runtime of ["codex", "cursor"]) {
        const prepared = Object.fromEntries(
          Object.entries(expectedCommits).map(([variantId, expectedCommit], index) => {
            expect(competitors.variants[variantId].commit).toBe(expectedCommit);
            const out = prepareVariant(variantId, {
              vendors,
              runtime,
              outputName: index === 0 ? "cell-a" : "cell-b",
            });
            const skillRoot = runtime === "cursor" ? ".cursor" : ".agents";
            return [variantId, {
              manifest: JSON.parse(readFileSync(join(out, ".benchmark/manifest.json"), "utf8")),
              prompt: readFileSync(join(out, ".benchmark/PROMPT.md"), "utf8"),
              instructions: readFileSync(join(out, "AGENTS.md"), "utf8"),
              relativePaths: treeManifest(out).files.map((file) => file.path),
              installedName: installedSkillName(
                join(out, skillRoot, "skills/omd-apply/SKILL.md"),
              ),
            }];
          }),
        );
        const slate = prepared["omd-portable-slate"];
        const ember = prepared["omd-portable-ember"];

        for (const [index, [variantId, expectedCommit]] of Object.entries(expectedCommits).entries()) {
          const result = prepared[variantId];
          expect(result.installedName).toBe(runtime === "cursor" ? "omd-apply" : "omd:apply");
          expect(result.manifest).toMatchObject({
            runtime_target: runtime,
            skill: {
              declared_name: runtime === "cursor" ? "omd-apply" : "omd:apply",
              source_commit: expectedCommit,
              source_attestation: {
                vcs: "git",
                detached: true,
                dirty: false,
                explicit_dirty_opt_in: false,
                status_entries: 0,
                publishable: true,
              },
            },
            workspace: {
              name: index === 0 ? "cell-a" : "cell-b",
            },
          });
          for (const path of result.relativePaths) {
            expect(path).not.toMatch(identityLeak);
          }
          expect(result.prompt).not.toMatch(identityLeak);
          expect(result.instructions).not.toMatch(identityLeak);
          expect(JSON.stringify(result.manifest)).not.toMatch(identityLeak);
        }

        expect(slate.manifest.variant.label).toBe(ember.manifest.variant.label);
        expect(slate.manifest.variant.activation_delta)
          .toBe(ember.manifest.variant.activation_delta);
        expect(slate.manifest.variant.activation_delta_sha256)
          .toBe(ember.manifest.variant.activation_delta_sha256);
        expect(slate.prompt).toBe(ember.prompt);
        expect(slate.instructions).toBe(ember.instructions);
        expect(slate.manifest.skill.sha256).not.toBe(ember.manifest.skill.sha256);
      }
    });
  });

  it("rejects a clean attached branch at an exact pinned OmD commit", () => {
    const variantId = "omd-portable-slate";
    const variant = competitors.variants[variantId];
    withAttachedOmdVendor(variantId, (vendors) => {
      const vendor = join(vendors, variant.vendor_dir);
      expect(execFileSync("git", ["-C", vendor, "rev-parse", "HEAD"], {
        encoding: "utf8",
      }).trim()).toBe(variant.commit);
      expect(execFileSync("git", ["-C", vendor, "symbolic-ref", "--short", "HEAD"], {
        encoding: "utf8",
      }).trim()).toBe("fixture-branch");
      expect(execFileSync("git", [
        "-C",
        vendor,
        "status",
        "--porcelain=v1",
        "--untracked-files=all",
      ], { encoding: "utf8" })).toBe("");
      const out = join(mkdtempSync(join(tmpdir(), "ui-resolve-test-")), "cell-a");
      const attempted = spawnSync(process.execPath, [
        prepare,
        "--task", "pricing-conversion-v0.1",
        "--variant", variantId,
        "--out", out,
        "--runtime", "codex",
        "--vendors", vendors,
      ], { cwd: repoRoot, encoding: "utf8" });
      expect(attempted.status).not.toBe(0);
      expect(attempted.stderr).toMatch(/detached HEAD/i);
    });
  });

  it("prepares a versioned two-arm matrix through the reviewed vendors root", () => {
    withVersionedOmdVendors((vendors) => {
      const parent = mkdtempSync(join(tmpdir(), "omd-versioned-matrix-"));
      const root = join(parent, "matrix");
      try {
        const state = prepareRunMatrix({
          schema_version: "0.1",
          experiment_id: "versioned-matrix-fixture",
          output_root: root,
          vendors_root: vendors,
          cells: versionedOmdVariants.map((variantId, index) => ({
            id: index === 0 ? "cell-a" : "cell-b",
            task_id: "onboarding-setup-v0.1",
            variant_id: variantId,
            system_id: variantId,
            runtime: "cursor",
            model_id: "fixture-model",
            effort: "high",
            timeout_seconds: 900,
            trial_index: 1,
          })),
        });
        expect(state.status).toBe("prepared");
        expect(state.prepared_cells).toBe(2);
        const manifests = ["cell-a", "cell-b"].map((cell) => JSON.parse(readFileSync(
          join(root, cell, ".benchmark/manifest.json"),
          "utf8",
        )));
        expect(manifests.map((manifest) => manifest.skill.source_commit)).toEqual([
          competitors.variants["omd-portable-slate"].commit,
          competitors.variants["omd-portable-ember"].commit,
        ]);
        expect(manifests.every((manifest) => (
          manifest.skill.source_attestation.detached === true
          && manifest.skill.source_attestation.publishable === true
        ))).toBe(true);
        expect(manifests[0].task.core_prompt_sha256).toBe(manifests[1].task.core_prompt_sha256);
        expect(manifests[0].variant.activation_delta).toBe(manifests[1].variant.activation_delta);
        expect(manifests[0].skill.sha256).not.toBe(manifests[1].skill.sha256);
      } finally {
        rmSync(parent, { recursive: true, force: true });
      }
    });
  });

  it("prepares exactly paired controller and installed Codex host-policy arms", () => {
    const parent = mkdtempSync(join(tmpdir(), "omd-host-policy-matrix-"));
    const root = join(parent, "matrix");
    const common = {
      task_id: bookSignatureTaskId,
      variant_id: "raw-design-md",
      runtime: "codex",
      model_id: "gpt-5.6-luna",
      effort: "high",
      timeout_seconds: 900,
      trial_index: 1,
    };
    try {
      const plan = {
        schema_version: "0.1",
        experiment_id: "host-policy-fixture",
        output_root: root,
        host_policy_comparison: {
          target_runtime: "codex",
          sole_arm_delta: "project-proof-policy-installation",
          require_installed_state: true,
          max_unblocked_browser_recovery_count: 0,
          max_unblocked_duplicate_static_closure_count: 0,
          max_unblocked_verification_after_ready_count: 0,
        },
        cells: [
          {
            ...common,
            id: "controller-cell",
            system_id: "controller-observation",
            host_policy_mode: "controller-observation",
          },
          {
            ...common,
            id: "policy-cell",
            system_id: "installed-policy",
            host_policy_mode: "installed-opt-in",
          },
        ],
      };
      expect(prepareRunMatrix(plan).status).toBe("prepared");
      const control = JSON.parse(readFileSync(
        join(root, "controller-cell/.benchmark/manifest.json"),
        "utf8",
      ));
      const policy = JSON.parse(readFileSync(
        join(root, "policy-cell/.benchmark/manifest.json"),
        "utf8",
      ));
      expect(existsSync(join(root, "controller-cell/.git"))).toBe(true);
      expect(existsSync(join(root, "policy-cell/.git"))).toBe(true);
      for (const cell of ["controller-cell", "policy-cell"]) {
        expect(execFileSync(
          "git",
          ["-C", join(root, cell), "status", "--porcelain=v1", "--untracked-files=all"],
          { encoding: "utf8" },
        )).toBe("");
        expect(spawnSync(
          "git",
          ["-C", join(root, cell), "symbolic-ref", "-q", "HEAD"],
          { encoding: "utf8" },
        ).status).toBe(1);
      }
      expect(control.workspace.git_baseline).toMatchObject({ clean: true, detached: true });
      expect(policy.workspace.git_baseline).toMatchObject({ clean: true, detached: true });
      expect(control.host_policy).toMatchObject({
        mode: "controller-observation",
        hooks_enabled: false,
        ready: true,
      });
      expect(policy.host_policy).toMatchObject({
        mode: "installed-opt-in",
        hooks_enabled: true,
        ready: true,
      });
      expect(policy.safety.hooks_enabled).toBe(true);
      const policyConfig = JSON.parse(readFileSync(
        join(root, "policy-cell/.codex/hooks.json"),
        "utf8",
      ));
      expect(policyConfig.hooks.PreToolUse[0].matcher).toContain("exec_command");
      expect(policyConfig.hooks.PostToolUse[0].matcher).toContain("functions\\.exec");
      expect(control.task).toEqual(policy.task);
      expect(control.variant).toEqual(policy.variant);
      expect(PROOF_POLICY_FILES.every((filename) => existsSync(join(
        root,
        "policy-cell/.codex/hooks/omd-proof-policy",
        filename,
      )))).toBe(true);
      expect(summarizeHostPolicyStates(join(root, "policy-cell"))).toMatchObject({
        available: false,
        state_files: 0,
      });
    } finally {
      rmSync(parent, { recursive: true, force: true });
    }
  });

  it("keeps benchmark host-policy payloads byte-identical to the production managed renderer", () => {
    for (const filename of PROOF_POLICY_FILES) {
      const source = readFileSync(join(
        repoRoot,
        "benchmarks/ui-resolve-bench/scripts",
        filename,
      ), "utf8");
      expect(renderManagedProofPolicyFile(source)).toBe(renderManagedHook(source));
    }
  });

  it("counts denied policy attempts separately from unblocked proof executions", () => {
    const installation = { mode: "installed-opt-in", ready: true, hooks_enabled: true };
    const observed = {
      available: true,
      state_files: 1,
      valid_state_files: 1,
      denied_decisions: 2,
      denied_reasons: { "duplicate-static-closure": 2 },
      delivery_ready_state_files: 1,
      delivery_blocked_state_files: 0,
      browser_attempts_total: 1,
      min_browser_attempts_per_state: 1,
      violations: {
        browser_recovery: 0,
        duplicate_static_closure: 2,
        verification_after_ready: 0,
      },
    };
    const trace = {
      analyzable: true,
      browser_recovery_count: 0,
      duplicate_static_closure_count: 2,
      verification_after_ready_count: 0,
    };
    const gate = {
      require_installed_state: true,
      require_delivery_ready: true,
      require_browser_attempt: true,
      max_unblocked_browser_recovery_count: 0,
      max_unblocked_duplicate_static_closure_count: 0,
      max_unblocked_verification_after_ready_count: 0,
    };
    expect(evaluateHostPolicyGate(installation, observed, trace, gate)).toMatchObject({
      pass: true,
      observed: {
        denied_decisions: 2,
        unblocked: { duplicate_static_closure: 0 },
      },
    });
    expect(evaluateHostPolicyGate(installation, observed, {
      ...trace,
      duplicate_static_closure_count: 3,
    }, gate)).toMatchObject({
      pass: false,
      reasons: ["duplicate_static_closure-unblocked-limit"],
      observed: { unblocked: { duplicate_static_closure: 1 } },
    });

    expect(evaluateHostPolicyGate(installation, {
      ...observed,
      delivery_ready_state_files: 0,
      delivery_blocked_state_files: 1,
      browser_attempts_total: 0,
      min_browser_attempts_per_state: 0,
    }, {
      ...trace,
      browser_mechanism_count: 0,
    }, gate)).toMatchObject({
      pass: false,
      reasons: [
        "installed-policy-delivery-incomplete",
        "installed-policy-browser-attempt-missing",
      ],
      observed: {
        delivery_ready_state_files: 0,
        delivery_blocked_state_files: 1,
        browser_attempts_total: 0,
        min_browser_attempts_per_state: 0,
      },
    });
  });

  it("rejects an unpaired host-policy comparison before workspace preparation", () => {
    expect(() => validateRunMatrixPlan({
      schema_version: "0.1",
      experiment_id: "unpaired-host-policy",
      output_root: "/tmp/unpaired-host-policy",
      host_policy_comparison: {
        target_runtime: "codex",
        sole_arm_delta: "project-proof-policy-installation",
        require_installed_state: true,
        max_unblocked_browser_recovery_count: 0,
        max_unblocked_duplicate_static_closure_count: 0,
        max_unblocked_verification_after_ready_count: 0,
      },
      cells: [{
        id: "controller-only",
        task_id: bookSignatureTaskId,
        variant_id: "raw-design-md",
        system_id: "controller",
        runtime: "codex",
        model_id: "gpt-5.6-luna",
        effort: "high",
        timeout_seconds: 900,
        trial_index: 1,
        host_policy_mode: "controller-observation",
      }],
    })).toThrow(/both policy modes/);
  });

  it("adapts the canonical OmD skill to Cursor's native project skill contract", () => {
    const out = prepareVariant("omd-portable", { runtime: "cursor" });
    const manifest = JSON.parse(readFileSync(join(out, ".benchmark/manifest.json"), "utf8"));
    const prompt = readFileSync(join(out, ".benchmark/PROMPT.md"), "utf8");

    expect(existsSync(join(out, ".cursor/skills/omd-apply/SKILL.md"))).toBe(true);
    expect(installedSkillName(join(out, ".cursor/skills/omd-apply/SKILL.md"))).toBe("omd-apply");
    expect(readFileSync(join(out, ".cursor/skills/omd-apply/SKILL.md"), "utf8")).toContain("foreground closure");
    expect(readFileSync(join(out, ".cursor/skills/omd-apply/SKILL.md"), "utf8")).toContain("geometry-token closure");
    expect(readFileSync(join(out, ".cursor/skills/omd-apply/SKILL.md"), "utf8")).toContain(
      "mismatched_declared_radius: 0",
    );
    expect(readFileSync(join(out, ".cursor/skills/omd-apply/SKILL.md"), "utf8")).toContain("interactive closure");
    expect(readFileSync(join(out, ".cursor/skills/omd-apply/SKILL.md"), "utf8")).toContain(
      "unauthorized_focusable_delta: 0",
    );
    expect(readFileSync(join(out, ".cursor/skills/omd-apply/SKILL.md"), "utf8")).toContain(
      "visual equity ledger",
    );
    expect(readFileSync(join(out, ".cursor/skills/omd-apply/SKILL.md"), "utf8")).toContain(
      "`identity`, `user_value`, `before_evidence`, `decision(preserve|reinforce|replace)`, `change_authority`",
    );
    expect(readFileSync(join(out, ".cursor/skills/omd-apply/SKILL.md"), "utf8")).toContain(
      "`original user task`, `explicit DESIGN.md rule`, `same consumer route measured defect`",
    );
    expect(readFileSync(join(out, ".cursor/skills/omd-apply/SKILL.md"), "utf8")).toContain(
      "visual-equity closure",
    );
    for (const zeroRegression of [
      "unsupported_hierarchy_loss: 0",
      "unsupported_state_signal_weakening: 0",
      "unsupported_reassurance_removal: 0",
      "unsupported_decision_boundary_collapse: 0",
    ]) {
      expect(readFileSync(join(out, ".cursor/skills/omd-apply/SKILL.md"), "utf8")).toContain(
        zeroRegression,
      );
    }
    for (const preservedContract of [
      "foreground closure",
      "geometry-token closure",
      "interactive closure",
      "protected ledger",
      "확인되지 않은 정보 — fallback으로 채우지 않음",
      "replacement verifier",
      "delivery_reserve: true",
    ]) {
      expect(readFileSync(join(out, ".cursor/skills/omd-apply/SKILL.md"), "utf8")).toContain(
        preservedContract,
      );
    }
    expect(existsSync(join(out, ".agents/skills"))).toBe(false);
    expect(prompt).toContain("Use the installed /omd-apply skill");
    expect(prompt).not.toContain("$omd:apply");
    expect(manifest).toMatchObject({
      runtime_target: "cursor",
      skill: {
        declared_name: "omd-apply",
        install_platform: "cursor",
        install_root: ".cursor/skills",
      },
      variant: {
        activation_delta: expect.stringContaining("/omd-apply"),
      },
      workspace: {
        product_ignore: expect.arrayContaining([".cursor"]),
      },
    });
    expect(manifest.workspace.product_initial_files).not.toEqual(
      expect.arrayContaining([
        expect.objectContaining({ path: expect.stringContaining(".cursor/skills") }),
      ]),
    );
  });

  it("installs the locale adapter and humanizer as one reviewed skill stack", () => {
    const out = prepareVariant("omd-locale-handoff", { task: localeTaskId });
    const manifest = JSON.parse(readFileSync(join(out, ".benchmark/manifest.json"), "utf8"));
    const prompt = readFileSync(join(out, ".benchmark/PROMPT.md"), "utf8");

    expect(installedSkillName(
      join(out, ".agents/skills/omd-locale-adapter/SKILL.md"),
    )).toBe("omd:locale-adapter");
    expect(installedSkillName(
      join(out, ".agents/skills/omd-humanize/SKILL.md"),
    )).toBe("omd:humanize");
    expect(prompt).toContain("$omd:locale-adapter");
    expect(prompt).toContain("$omd:humanize");
    expect(manifest.skill).toMatchObject({
      declared_name: "omd:locale-adapter",
      bundled_skills: ["omd:humanize"],
    });
    expect(manifest.safety.agent_tool_enabled).toBe(false);
  });

  it("adapts the same OmD source contract to Claude Code without loading Codex shims", () => {
    const parent = mkdtempSync(join(tmpdir(), "ui-resolve-claude-"));
    const out = join(parent, "omd-portable");
    execFileSync(process.execPath, [
      prepare,
      "--task", "pricing-conversion-v0.1",
      "--variant", "omd-portable",
      "--out", out,
      "--runtime", "claude-code",
      "--allow-dirty-source",
    ], { cwd: repoRoot, encoding: "utf8" });
    const manifest = JSON.parse(readFileSync(join(out, ".benchmark/manifest.json"), "utf8"));

    expect(existsSync(join(out, ".claude/skills/omd-apply/SKILL.md"))).toBe(true);
    expect(existsSync(join(out, ".agents/skills/omd-apply/SKILL.md"))).toBe(false);
    expect(existsSync(join(out, "CLAUDE.md"))).toBe(true);
    expect(existsSync(join(out, "AGENTS.md"))).toBe(false);
    expect(manifest).toMatchObject({
      runtime_target: "claude-code",
      skill: {
        declared_name: "omd:apply",
        install_platform: "claude-code",
        install_root: ".claude/skills",
      },
    });
  });

  it("preregisters declared names separately from install directories", () => {
    expect(competitors.variants["taste-skill"]).toMatchObject({
      install_root: ".agents/skills",
      install_dir: "design-taste-frontend",
      declared_name: "design-taste-frontend",
      activation: expect.stringContaining("$design-taste-frontend"),
    });
    expect(competitors.variants["omd-portable"]).toMatchObject({
      install_dir: "omd-apply",
      declared_name: "omd:apply",
      activation: expect.stringContaining("$omd:apply"),
    });
    expect(competitors.variants["omd-locale-handoff"]).toMatchObject({
      kind: "locale-skill-stack",
      declared_name: "omd:locale-adapter",
      skill_bundle: [
        {
          install_dir: "omd-humanize",
          declared_name: "omd:humanize",
        },
      ],
      activation: expect.stringContaining("$omd:humanize"),
    });
    expect(competitors.variants["omd-locale-handoff"].activation).toContain(
      "VERIFY means comparing protected facts",
    );
    expect(competitors.variants["omd-locale-handoff"].activation).toContain(
      "does not authorize writing verification software",
    );
    expect(competitors.variants["omd-locale-handoff"].activation).toContain(
      "before 450 seconds",
    );
    expect(competitors.variants["omd-locale-handoff"].activation).toContain(
      "by 720 seconds",
    );
    expect(competitors.variants["omd-locale-handoff"].activation).toContain(
      "before 810 seconds",
    );
    expect(competitors.variants["omd-locale-handoff"].activation).toContain(
      "Never author verify.*",
    );
    expect(competitors.variants["omd-locale-handoff"].activation).toContain(
      "CDP/browser automation",
    );
    expect(competitors.variants["omd-locale-handoff"].activation).toContain(
      "Do not run Chrome, Chromium, Playwright, browser-harness",
    );
    expect(competitors.variants["omd-locale-handoff"].activation).toContain(
      "external evaluator is the only browser acceptance authority",
    );
    expect(competitors.variants["omd-locale-handoff"].activation).toContain(
      "vertical row gap must be at least as large",
    );
    expect(competitors.variants["omd-locale-handoff"].activation).toContain(
      "overflow auto or scroll region",
    );
    expect(competitors.variants["omd-locale-handoff"].activation).toContain(
      "explicit keyboard focus target with visible focus-visible treatment",
    );
    expect(competitors.variants["omd-locale-handoff"].activation).toContain(
      "Do not add unnecessary Tab stops",
    );
    expect(competitors.variants["omd-locale-handoff"].activation).not.toContain(
      "one direct browser command",
    );
    expect(competitors.variants["omd-repair-harness"]).toMatchObject({
      kind: "agent-harness",
      declared_name: "omd:apply",
      agent_bundle: [
        { id: "omd-ux-writer" },
        { id: "omd-ux-engineer" },
      ],
      required_agent_model: "opus",
      activation: expect.stringContaining("Agent tool"),
    });
    expect(competitors.variants["omd-repair-harness"].activation).toContain("allowed_delta 0");
    expect(competitors.variants["omd-repair-harness"].activation).toContain("bounded-repair-advisory");
    expect(competitors.variants["omd-repair-harness"].activation).toContain("about 300 words");
    expect(competitors.variants["omd-repair-harness"].activation).toContain("first_safe_edit");
    expect(competitors.variants["omd-repair-harness"].activation).toContain("targeted Edit within 90 seconds");
    expect(competitors.variants["omd-repair-harness"].activation).toContain("do not make a whole-file Write the first transaction");
    expect(competitors.variants["omd-repair-harness"].activation).toContain("never use whitespace, comments, timestamps, or same-value replacement");
    expect(competitors.variants["omd-repair-harness"].activation).toContain("before 450 seconds");
    expect(competitors.variants["omd-repair-harness"].activation).toContain("before 810 seconds");
    expect(competitors.variants["omd-repair-harness"].activation).toContain("do not write a DOM shim");
    expect(competitors.variants["omd-repair-harness"].activation).toContain("checklist and observed result, not an executable artifact");
    expect(competitors.variants["omd-repair-harness"].activation).toContain("CDP/browser automation");
    expect(competitors.variants["omd-repair-harness"].activation).toContain("direct browser command that writes no verification program");
    expect(competitors.variants["omd-repair-harness"].activation).toContain("semantic_color_ledger");
    expect(competitors.variants["omd-repair-harness"].activation).toContain("never ship it as meaningful normal text");
    expect(competitors.variants["omd-repair-harness"].activation).toContain("ink-label plus non-text-accent default");
    expect(competitors.variants["omd-full-harness"]).toMatchObject({
      install_dir: "omd-harness",
      install_adapter: "omd-channel-name-v1",
      declared_name: "omd:harness",
      activation: expect.stringContaining("$omd:harness"),
    });
    for (const variant of Object.values(competitors.variants).filter((item) => item.declared_name)) {
      expect(variant.activation).toContain(`$${variant.declared_name}`);
      expect(variant.install_dir).not.toContain("/");
      for (const bundled of variant.skill_bundle ?? []) {
        expect(variant.activation).toContain(`$${bundled.declared_name}`);
        expect(bundled.install_dir).not.toContain("/");
      }
    }
  });

  it("installs the repair harness as a separate Claude agent-enabled arm", () => {
    const parent = mkdtempSync(join(tmpdir(), "ui-resolve-harness-"));
    const out = join(parent, "omd-repair-harness");
    execFileSync(process.execPath, [
      prepare,
      "--task", "pricing-conversion-v0.1",
      "--variant", "omd-repair-harness",
      "--out", out,
      "--runtime", "claude-code",
      "--allow-dirty-source",
    ], { cwd: repoRoot, encoding: "utf8" });
    const manifest = JSON.parse(readFileSync(join(out, ".benchmark/manifest.json"), "utf8"));
    const writer = readFileSync(join(out, ".claude/agents/omd-ux-writer.md"), "utf8");
    const engineer = readFileSync(join(out, ".claude/agents/omd-ux-engineer.md"), "utf8");

    expect(existsSync(join(out, ".claude/skills/omd-apply/SKILL.md"))).toBe(true);
    expect(writer).toContain("model: opus");
    expect(engineer).toContain("model: opus");
    expect(writer).toContain("advisory-only Harness Track run");
    expect(manifest.variant.kind).toBe("agent-harness");
    expect(manifest.agents.required_model).toBe("opus");
    expect(manifest.agents.installed.map((agent) => agent.id)).toEqual([
      "omd-ux-writer",
      "omd-ux-engineer",
    ]);
    expect(manifest.safety).toMatchObject({
      hooks_enabled: false,
      agent_tool_enabled: true,
    });
  });

  it("keeps the OmD harness folder shim separate from its declared activation name", () => {
    const out = prepareVariant("omd-full-harness", { offLabel: true });
    const skillFile = join(out, ".agents/skills/omd-harness/SKILL.md");
    const manifest = JSON.parse(readFileSync(join(out, ".benchmark/manifest.json"), "utf8"));
    expect(installedSkillName(skillFile)).toBe("omd:harness");
    expect(readFileSync(join(out, ".benchmark/PROMPT.md"), "utf8")).toContain("$omd:harness");
    expect(manifest.skill).toMatchObject({
      declared_name: "omd:harness",
      install_root: ".agents/skills",
      install_dir: "omd-harness",
    });
    expect(manifest.variant.track_eligibility).toMatchObject({
      eligible: false,
      off_label: true,
      explicit_opt_in: true,
    });
  });

  it.runIf(existsSync(join(pinnedVendors, "taste-skill/.git")))(
    "installs Taste under its declared activation name instead of the repository folder name",
    () => {
      const out = prepareVariant("taste-skill", { vendors: pinnedVendors });
      const skillFile = join(out, ".agents/skills/design-taste-frontend/SKILL.md");
      const manifest = JSON.parse(readFileSync(join(out, ".benchmark/manifest.json"), "utf8"));
      expect(installedSkillName(skillFile)).toBe("design-taste-frontend");
      expect(existsSync(join(out, ".agents/skills/taste-skill"))).toBe(false);
      expect(readFileSync(join(out, ".benchmark/PROMPT.md"), "utf8")).toContain("$design-taste-frontend");
      expect(manifest.skill).toMatchObject({
        declared_name: "design-taste-frontend",
        install_root: ".agents/skills",
        install_dir: "design-taste-frontend",
      });
    },
  );

  it.runIf(existsSync(join(pinnedVendors, "ui-ux-pro-max/.git")))(
    "renders the reviewed official UI UX Pro Max Codex bundle without using its Claude template",
    () => {
      const out = prepareVariant("ui-ux-pro-max", { vendors: pinnedVendors });
      const skillFile = join(out, ".codex/skills/ui-ux-pro-max/SKILL.md");
      const manifest = JSON.parse(readFileSync(join(out, ".benchmark/manifest.json"), "utf8"));
      expect(installedSkillName(skillFile)).toBe("ui-ux-pro-max");
      expect(existsSync(join(out, ".agents/skills/ui-ux-pro-max"))).toBe(false);
      expect(existsSync(join(out, ".codex/skills/ui-ux-pro-max/data/styles.csv"))).toBe(true);
      expect(existsSync(join(out, ".codex/skills/ui-ux-pro-max/scripts/search.py"))).toBe(true);
      for (const bundled of ["banner-design", "brand", "design", "design-system", "slides", "ui-styling"]) {
        expect(installedSkillName(join(out, ".codex/skills", bundled, "SKILL.md"))).toBe(bundled);
      }
      expect(manifest.skill).toMatchObject({
        declared_name: "ui-ux-pro-max",
        install_platform: "codex",
        install_root: ".codex/skills",
        install_dir: "ui-ux-pro-max",
        install_adapter: "official-codex-template-v2.5.0",
        bundled_skills: ["banner-design", "brand", "design", "design-system", "slides", "ui-styling"],
      });
      expect(readFileSync(join(out, ".benchmark/PROMPT.md"), "utf8")).toContain("$ui-ux-pro-max");
    },
  );

  it("hashes file trees deterministically and rejects escaping symlinks", () => {
    const root = mkdtempSync(join(tmpdir(), "ui-resolve-tree-"));
    mkdirSync(join(root, "nested"));
    writeFileSync(join(root, "nested", "a.txt"), "same", "utf8");
    const first = treeManifest(root).sha256;
    const second = treeManifest(root).sha256;
    expect(second).toBe(first);

    symlinkSync("/tmp", join(root, "escape"));
    expect(() => treeManifest(root)).toThrow(/symlink is not allowed/);
  });
});
