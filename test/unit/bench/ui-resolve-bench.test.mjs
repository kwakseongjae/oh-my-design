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
