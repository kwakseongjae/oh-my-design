import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { afterEach, describe, expect, test } from "vitest";
import {
  AUTOPILOT_EVALUATOR_TIMEOUT_MS,
  buildControllerRepairPrompt,
  controllerAutopilotProof,
  freezeRunningRootAfterControllerFailure,
  missionProductTreeManifest,
  objectiveFailureIds,
  objectiveFailureObservations,
  objectivePassingIds,
  repairContinuationDecision,
} from "../../../benchmarks/ui-resolve-bench/scripts/autopilot-smoke-controller.mjs";

const repo = resolve(import.meta.dirname, "../../..");
const script = join(repo, "benchmarks/ui-resolve-bench/scripts/autopilot-smoke-controller.mjs");
const roots = [];
const temp = () => { const value = mkdtempSync(join(tmpdir(), "omd-autopilot-smoke-test-")); roots.push(value); return value; };
afterEach(() => { while (roots.length) rmSync(roots.pop(), { recursive: true, force: true }); });

describe("autopilot Luna/high smoke controller", () => {
  test("allows the four-viewport evaluator to finish before controller timeout", () => {
    expect(AUTOPILOT_EVALUATOR_TIMEOUT_MS).toBe(360_000);
  });
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
      schema_version: "0.2",
      failed_assertions: {
        accessibility: { assertion_pass: false, observed: false },
        queue_preconditions: { assertion_pass: false, observed: { shipment_count: 1, urgent_count: 1, non_urgent_count: 0 } },
      },
      failed_groups: { journey: { points: 20, pass: false } },
      supporting_evidence: {
        shipment_count: 1, urgent_count: 1, routine_count: 0,
        viewports: [{ id: "mobile-320", document_overflow_px: 0, axe_serious_critical: 3 }],
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
  test("preserves accessibility-state diagnostics while keeping repair evidence bounded", () => {
    const observations = objectiveFailureObservations({
      assertions: { accessibility: false },
      groups: { accessibility: { points: 20, pass: false } },
      evidence: {
        viewports: [{
          id: "mobile-320",
          accessibility_inventory: Array.from({ length: 20 }, (_, index) => ({
            role: "button", snapshot: `${index}-${"x".repeat(800)}`, focused: index === 0,
          })),
          locale_switch_diagnostics: Array.from({ length: 20 }, (_, index) => ({ requested: `locale-${index}`, selected: false })),
        }],
      },
    });
    const viewport = observations.supporting_evidence.viewports[0];
    expect(viewport.accessibility_inventory).toHaveLength(12);
    expect(viewport.accessibility_inventory[0].snapshot.length).toBe(500);
    expect(viewport.locale_switch_diagnostics).toHaveLength(12);
  });
  test("turns cold-chain composite failures into bounded repair measurements", () => {
    const observations = objectiveFailureObservations({
      assertions: {
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
          critical_fields_reachable: false,
          controls_horizontally_unclipped: true,
          control_min_dimension_px: 38,
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
      filtered_contents_exact: { observed: { pass: false, viewports: [{ id: "mobile-320", urgent_ids: ["CC-101"], filtered_record_ids: [] }] } },
      assigned_owner_confirmed_and_persistent: { observed: { pass: false, viewports: [{ id: "mobile-320", assigned_status_persistent: false, selected_owner: "Mina Park", assignment_status_text: "Assigned Mina Park", assigned_source_record_text: "CC-101 Mina Park", detail_after: "CC-101 Sample owner Mina Park" }] } },
      responsive: { observed: [{ id: "mobile-320", mobile: true, critical_fields_reachable: false, control_min_dimension_px: 38 }] },
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

  test("independently audits a terminal clean-dir mission and rejects fabricated answer artifacts", () => {
    const base = temp(); const output = join(base, "canary");
    const canary = join(repo, "benchmarks/ui-resolve-bench/scripts/run-autopilot-clean-dir-canary.mjs");
    execFileSync(process.execPath, [canary, output], { cwd: repo });
    const workspace = join(output, "workspace");
    const summary = JSON.parse(readFileSync(join(output, "SUMMARY.json"), "utf8"));
    mkdirSync(join(workspace, ".benchmark"), { recursive: true });
    writeFileSync(join(workspace, ".benchmark/PROMPT.md"), summary.prompt);
    const plan = { smoke_contract: { authorities: { portable_bundle_files: [] } } };
    expect(controllerAutopilotProof(plan, {}, workspace)).toMatchObject({
      pass: true, mission_lineages: 1, question_batches: 0, answer_artifacts: 0,
    });
    const checkpointDir = join(workspace, ".omd/runs/run-greenfield-family-planner/checkpoints");
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
    const answers = join(workspace, ".omd/runs/run-greenfield-family-planner/checkpoints/council-intake.answers.json");
    writeFileSync(answers, JSON.stringify({ answers: [{ value: "model-authored" }] }));
    expect(controllerAutopilotProof(plan, {}, workspace)).toMatchObject({ pass: false, mission_lineages: null });
  });
});
