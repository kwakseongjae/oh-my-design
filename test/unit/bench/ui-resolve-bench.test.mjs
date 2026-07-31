import { execFileSync, spawnSync } from "node:child_process";
import { existsSync, mkdtempSync, mkdirSync, readFileSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { prepareRunMatrix } from "../../../benchmarks/ui-resolve-bench/scripts/prepare-run-matrix.mjs";
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
