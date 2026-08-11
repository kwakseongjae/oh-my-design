import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { afterEach, describe, expect, test } from "vitest";
import { controllerAutopilotProof } from "../../../benchmarks/ui-resolve-bench/scripts/autopilot-smoke-controller.mjs";

const repo = resolve(import.meta.dirname, "../../..");
const script = join(repo, "benchmarks/ui-resolve-bench/scripts/autopilot-smoke-controller.mjs");
const roots = [];
const temp = () => { const value = mkdtempSync(join(tmpdir(), "omd-autopilot-smoke-test-")); roots.push(value); return value; };
afterEach(() => { while (roots.length) rmSync(roots.pop(), { recursive: true, force: true }); });

describe("autopilot Luna/high smoke controller", () => {
  test("creates a hash-bound provider-zero plan and three oracle-free workspaces", () => {
    const base = temp(); const report = join(base, "report"); const root = join(base, "root");
    execFileSync(process.execPath, [script, "plan", "--out", report], { cwd: repo });
    execFileSync(process.execPath, [script, "prepare", "--plan", join(report, "RUN-MATRIX.json"), "--receipt", join(report, "PREREGISTRATION.receipt.json"), "--root", root], { cwd: repo });
    const audit = JSON.parse(execFileSync(process.execPath, [script, "audit", "--root", root], { cwd: repo, encoding: "utf8" }));
    expect(audit).toMatchObject({ pass: true, cells: 3, status: "prepared" });
    const plan = JSON.parse(readFileSync(join(root, "RUN-MATRIX.locked.json"), "utf8"));
    expect(plan.cells.map((cell) => `${cell.model_id}/${cell.effort}`)).toEqual(Array(3).fill("gpt-5.6-luna/high"));
    expect(plan.execution_control).toMatchObject({ max_new_cells_per_invocation: 1, retries: 0, replacements: 0, fallback: 0 });
    for (const cell of plan.cells) {
      const workspace = join(root, cell.id);
      expect(existsSync(join(workspace, ".agents/skills/omd-autopilot/SKILL.md"))).toBe(true);
      expect(existsSync(join(workspace, ".benchmark/codex-home/auth.json"))).toBe(true);
      expect(existsSync(join(workspace, ".benchmark/codex-home/model_catalog.json"))).toBe(true);
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
    const answers = join(workspace, ".omd/runs/run-greenfield-family-planner/checkpoints/council-intake.answers.json");
    mkdirSync(join(workspace, ".omd/runs/run-greenfield-family-planner/checkpoints"), { recursive: true });
    writeFileSync(answers, JSON.stringify({ answers: [{ value: "model-authored" }] }));
    expect(controllerAutopilotProof(plan, {}, workspace)).toMatchObject({ pass: false, mission_lineages: null });
  });
});
