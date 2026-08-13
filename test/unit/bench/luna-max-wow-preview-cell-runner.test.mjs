import { execFileSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import {
  ADMISSION_GENERATOR_PATH, DEFAULT_EVALUATOR_PATH, PREREG_CONTROLLER_PATH, RUNNER_PATH, collectRecords, reconcileCrashes, runCell, sha256, tree,
} from "../../../benchmarks/ui-resolve-bench/scripts/run-luna-max-wow-preview-cell.mjs";
import { auditWowPreview, defaultGatePath } from "../../../benchmarks/ui-resolve-bench/scripts/audit-luna-max-wow-preview.mjs";

function git(root, ...args) { return execFileSync("git", ["-C", root, ...args], { encoding: "utf8" }).trim(); }
function json(path, value) { mkdirSync(dirname(path), { recursive: true }); writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`); return path; }
function bind(path) { return { path, sha256: sha256(readFileSync(path)) }; }
function summary(root) { const value = tree(root); return { files: value.files.length, bytes: value.files.reduce((n, f) => n + f.bytes, 0), sha256: value.sha256 }; }

function fixture({ runnerMode = "success", designSystem = true } = {}) {
  const base = mkdtempSync(join(tmpdir(), "omd-luna-cell-runner-")); const repo = join(base, "repo"); const materialized = join(base, "materialized");
  mkdirSync(repo); git(repo, "init", "-q"); git(repo, "config", "user.email", "bench@example.invalid"); git(repo, "config", "user.name", "Bench");
  for (const source of [RUNNER_PATH, ADMISSION_GENERATOR_PATH, PREREG_CONTROLLER_PATH, DEFAULT_EVALUATOR_PATH]) {
    const target = join(repo, source); mkdirSync(dirname(target), { recursive: true }); cpSync(resolve(source), target);
  }
  git(repo, "add", "."); git(repo, "commit", "-qm", "fixture"); const sourceCommit = git(repo, "rev-parse", "HEAD");
  mkdirSync(join(materialized, "prepared-cells"), { recursive: true });
  const cells = [];
  for (let index = 0; index < 48; index += 1) {
    const id = `cell-${String(index + 1).padStart(2, "0")}`; const cell = join(materialized, "prepared-cells", id); mkdirSync(join(cell, ".benchmark"), { recursive: true });
    writeFileSync(join(cell, "index.html"), `<main>${id}</main>\n`); writeFileSync(join(cell, ".benchmark/invocation-prompt.txt"), `Build ${id}`);
    json(join(cell, ".benchmark/cell.json"), { cell_id: id, task: { id: "neighborhood-library-landing" }, arm: { variant_id: index % 6 === 5 ? "omd-autopilot-v2" : "model-only" }, runtime: { model: "gpt-5.6-luna", effort: "max", retry_budget: 0, replacement_budget: 0, fallback_budget: 0 }, evaluation: { eligible_for_execution_and_scoring: true } });
    json(join(cell, ".benchmark/manifest.json"), { source_commit: sourceCommit }); cells.push({ id, trial_index: (index % 3) + 1, workspace_tree: summary(cell) });
  }
  json(join(materialized, "INELIGIBLE-SLOTS.json"), { count: 6, slots: Array.from({ length: 6 }, (_, i) => ({ id: `ineligible-${i}`, task_id: i < 3 ? "cold-chain-operations" : "clinic-visit-prep-locales", variant_id: "taste-eligible-scope-only", trial_index: (i % 3) + 1, workspace_created: false })) });
  const manifest = { kind: "omd-luna-max-provider-zero-materialization", source_commit: sourceCommit, prepared_cells: 48, ineligible_unexecuted_slots: 6, locked_root_sha256: "a".repeat(64), cells, evaluator_authority: { evaluator: { path: DEFAULT_EVALUATOR_PATH, sha256: sha256(readFileSync(join(repo, DEFAULT_EVALUATOR_PATH))) }, selected_task_evaluation_metadata: [{ task_id: "neighborhood-library-landing", required_states: ["default", "focus-visible", "unavailable-information"] }] }, execution: { model: "gpt-5.6-luna", effort: "max", retry_budget: 0, replacement_budget: 0, fallback_budget: 0 } };
  const materializationPath = json(join(materialized, "MATERIALIZATION.json"), manifest);
  const matrixCells = [...cells.map((cell, index) => ({ id: cell.id, task_id: "neighborhood-library-landing", variant_id: index % 6 === 5 ? "omd-autopilot-v2" : "model-only", trial_index: cell.trial_index, eligible_for_execution_and_scoring: true })), ...Array.from({ length: 6 }, (_, i) => ({ id: `ineligible-${i}`, task_id: i < 3 ? "cold-chain-operations" : "clinic-visit-prep-locales", variant_id: "taste-eligible-scope-only", trial_index: (i % 3) + 1, eligible_for_execution_and_scoring: false }))];
  const matrixPath = json(join(base, "RUN-MATRIX.locked.json"), { kind: "omd-luna-max-wow-preview", experiment_id: "omd-luna-test", source_commit: sourceCommit, maximum_cell_slots: 54, scheduled_provider_cells: 48, ineligible_unexecuted_slots: 6, cells: matrixCells });
  const preregPath = json(join(base, "PREREGISTRATION.receipt.json"), { kind: "omd-luna-max-wow-preview-preregistration-receipt", source_commit: sourceCommit, matrix_sha256: sha256(readFileSync(matrixPath)), provider_execution_allowed: false });
  const schemaPath = json(join(base, "schema.json"), { kind: "public-core-schema-liveness-receipt", pass: true, source_commit: sourceCommit });
  const staticPath = json(join(base, "static.json"), { kind: "codex-luna-max-static-runtime-capability", pass: true, source_commit: sourceCommit, runtime: { catalog_sha256: "b".repeat(64), model_profile_sha256: "a".repeat(64) }, provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 });
  const runtimePath = json(join(base, "runtime.json"), { kind: "codex-luna-max-runtime-attribution-preflight", source_commit: sourceCommit, excluded_from_benchmark_denominator: true, runtime: { model: "gpt-5.6-luna", effort: "max", fallback_calls: 0 }, provider_calls: 1, model_calls: 1, browser_calls: 0 });
  const browserPath = json(join(base, "browser.json"), { kind: "named-existing-browser-identity-preflight", source_commit: sourceCommit, browser: { named_existing: true, launched_by_controller: false, url: "about:blank" }, provider_calls: 0, model_calls: 0, browser_calls: 1 });
  const runner = join(base, "fake-runner.mjs");
  writeFileSync(runner, `import{writeFileSync}from'node:fs';import{join}from'node:path';const a=process.argv.slice(2),w=a[a.indexOf('--workspace')+1];writeFileSync(join(w,'.benchmark/argv.json'),JSON.stringify(a));writeFileSync(join(w,'.benchmark/events.jsonl'),JSON.stringify({type:'response.completed',model:'gpt-5.6-luna'})+'\\n');writeFileSync(join(w,'index.html'),${JSON.stringify(designSystem ? "<style>:root{--color:#123;--space:8px;--radius:6px}.card{}.action{}.notice{}</style><main class=card>done</main>" : "<main>done</main>")});writeFileSync(join(w,'.benchmark/run-result.json'),JSON.stringify({runtime:{model_requested:'gpt-5.6-luna',model:'gpt-5.6-luna',reasoning:'max',effort_requested:'max',model_reported:'gpt-5.6-luna',model_tool_mode_evidence:{model_profile_sha256:'a'.repeat(64),cache_sha256:'b'.repeat(64),auth_source_before_run:{model_profile_sha256:'a'.repeat(64),cache_sha256:'b'.repeat(64)}}},output:{model_usage:[{input_tokens:10,output_tokens:20}]},process:{exit_code:${runnerMode === "failed" ? 7 : 0},timed_out:${runnerMode === "timeout"}}}));${runnerMode === "failed" ? "process.exitCode=7" : ""}`);
  const evaluator = join(base, "fake-evaluator.mjs");
  const fakeChrome = join(base, "fake-chrome"); writeFileSync(fakeChrome, "fixture-browser");
  writeFileSync(evaluator, `import{createHash}from'node:crypto';import{mkdirSync,readFileSync,writeFileSync}from'node:fs';import{dirname,join}from'node:path';if(process.env.CHROME_PATH!==${JSON.stringify(fakeChrome)})process.exit(9);const a=process.argv.slice(2),o=a[a.indexOf('--out')+1],s=join(dirname(o),'screenshots');mkdirSync(s,{recursive:true});writeFileSync(join(s,'desktop-1440.png'),'png');writeFileSync(join(s,'mobile-390.png'),'png');const states={};for(const state of ['default','focus-visible','unavailable-information']){const file=state+'--desktop-1440.png';writeFileSync(join(s,file),state);states[state]=[{viewport_id:'desktop-1440',file,sha256:createHash('sha256').update(readFileSync(join(s,file))).digest('hex')}]}writeFileSync(join(s,'STATE-SCREENSHOTS.json'),JSON.stringify({schema_version:'0.1',kind:'omd-luna-max-evaluator-state-screenshots',task_id:'neighborhood-library-landing',states}));writeFileSync(o,JSON.stringify({ui_resolved:true,score:100,evidence:{protected_unknown_claims:[]}}));`);
  const evaluationRuntimePath = json(join(base, "evaluation-runtime.json"), { kind: "omd-luna-max-evaluation-runtime-receipt", pass: true, source_commit: sourceCommit, evaluation_authorities: { evaluator: { path: DEFAULT_EVALUATOR_PATH, sha256: sha256(readFileSync(join(repo, DEFAULT_EVALUATOR_PATH))) } }, browser: { executable_path: fakeChrome, executable_sha256: sha256(readFileSync(fakeChrome)), version: "Fixture 1" }, fonts: { sha256: "c".repeat(64) }, provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 });
  const admission = { schema_version: "0.1", kind: "omd-luna-max-sol-xhigh-admission", decision: "admitted", reviewer_role: "sol-xhigh-planning-review", attestation: { type: "role-attestation", cryptographic_identity_verified: false, statement: "This admission records a Sol/xhigh planning-review attestation; it is not cryptographic identity verification." }, source_commit: sourceCommit, generator_authority: { path: ADMISSION_GENERATOR_PATH, sha256: sha256(readFileSync(join(repo, ADMISSION_GENERATOR_PATH))) }, controller_authority: { path: PREREG_CONTROLLER_PATH, sha256: sha256(readFileSync(join(repo, PREREG_CONTROLLER_PATH))) }, bindings: { matrix: bind(matrixPath), preregistration: bind(preregPath), materialization: bind(materializationPath), schema: bind(schemaPath), static_runtime: bind(staticPath), runtime_attribution: bind(runtimePath), browser_identity: bind(browserPath), evaluation_runtime: bind(evaluationRuntimePath) }, provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 };
  const admissionPath = json(join(base, "ADMISSION.json"), admission);
  return { base, repo, materialized, sourceCommit, runtimePath, browserPath, admissionPath, admission, runner, evaluator, cells, matrixPath, preregPath, materializationPath };
}
function execute(f, overrides = {}) { return runCell({ repoRoot: f.repo, materializedRoot: f.materialized, cellId: "cell-01", admission: f.admissionPath, runtimeAttributionReceipt: f.runtimePath, browserReceipt: f.browserPath, sourceCommit: f.sourceCommit, runnerBin: f.runner, evaluatorBin: f.evaluator, runtimeObservation: { model_id: "gpt-5.6-luna", cache_sha256: "b".repeat(64), model_profile_sha256: "a".repeat(64) }, ...overrides }); }
function collect(f, out = join(f.base, "records.json")) { return collectRecords({ repoRoot: f.repo, materializedRoot: f.materialized, admission: f.admissionPath, runtimeAttributionReceipt: f.runtimePath, browserReceipt: f.browserPath, sourceCommit: f.sourceCommit, out }); }

describe("Luna Max Wow Preview one-cell runner", () => {
  it("runs exactly the next cell once and binds provider, tree, evaluator, and screenshot evidence", () => {
    const f = fixture(); const result = execute(f);
    expect(result).toMatchObject({ status: "completed", cell_id: "cell-01", model: "gpt-5.6-luna", effort: "max", provider_calls: 1, model_calls: 1, browser_calls: 1, retry_calls: 0, replacement_calls: 0, fallback_calls: 0, repair_calls: 0, manual_edits: 0 });
    expect(result.raw.events.sha256).toMatch(/^[a-f0-9]{64}$/); expect(result.workspace_before.sha256).not.toBe(result.workspace_after.sha256);
    expect(result.evaluator.result.sha256).toMatch(/^[a-f0-9]{64}$/); expect(result.proof.screenshots.map((x) => x.kind)).toEqual(expect.arrayContaining(["desktop", "mobile"]));
    expect(new Set(result.proof.screenshots.flatMap((x) => x.required_states))).toEqual(new Set(["default", "focus-visible", "unavailable-information"]));
    expect(result.proof.design_system_package).toMatchObject({ parsed: true, pass: true });
    const argv = JSON.parse(readFileSync(join(f.materialized, "prepared-cells/cell-01/.benchmark/execution/workspace/.benchmark/argv.json")));
    expect(argv).toEqual(["--workspace", expect.any(String), "--model", "gpt-5.6-luna", "--reasoning", "max", "--timeout-ms", "900000"]);
    expect(() => execute(f)).toThrow(/exact next locked cell: cell-02/);
  });

  it("uses a neutral reusable HTML/CSS package gate for every arm and keeps OmD Core proof additive", () => {
    const valid = fixture(); expect(execute(valid).proof.design_system_package).toMatchObject({ parsed: true, pass: true });
    const empty = fixture({ designSystem: false }); expect(execute(empty).proof.design_system_package).toMatchObject({ parsed: false, pass: false });
  });

  it("refuses a skipped, ineligible, dirty, drifted-model, fallback, or arbitrarily admitted run before provider spawn", () => {
    for (const mutate of [
      (f) => ({ cellId: "cell-02" }),
      (f) => ({ cellId: "ineligible-0" }),
      (f) => { writeFileSync(join(f.repo, "dirty"), "x"); return {}; },
      (f) => { const p = join(f.materialized, "prepared-cells/cell-01/.benchmark/cell.json"); const v = JSON.parse(readFileSync(p)); v.runtime.effort = "high"; writeFileSync(p, JSON.stringify(v)); return {}; },
      (f) => { const v = JSON.parse(readFileSync(f.runtimePath)); v.runtime.fallback_calls = 1; writeFileSync(f.runtimePath, JSON.stringify(v)); f.admission.bindings.runtime_attribution = bind(f.runtimePath); json(f.admissionPath, f.admission); return {}; },
      (f) => { const p = f.admission.bindings.static_runtime.path; const v = JSON.parse(readFileSync(p)); v.runtime.model_profile_sha256 = "f".repeat(64); json(p, v); f.admission.bindings.static_runtime = bind(p); json(f.admissionPath, f.admission); return {}; },
      (f) => { const v = JSON.parse(readFileSync(f.admissionPath)); v.source_commit = "f".repeat(40); writeFileSync(f.admissionPath, JSON.stringify(v)); return {}; },
      (f) => { const v = JSON.parse(readFileSync(f.admissionPath)); v.reviewer_role = "self-authored"; writeFileSync(f.admissionPath, JSON.stringify(v)); return {}; },
    ]) {
      const f = fixture(); const overrides = mutate(f); expect(() => execute(f, overrides)).toThrow();
      expect(existsSync(join(f.materialized, "prepared-cells/cell-01/.benchmark/execution"))).toBe(false);
    }
  });

  it("writes failed and timeout attempts as immutable denominator records without evaluation or retry", () => {
    for (const mode of ["failed", "timeout"]) {
      const f = fixture({ runnerMode: mode }); const result = execute(f);
      expect(result.status).toBe(mode === "failed" ? "failed" : "timeout"); expect(result.retry_calls).toBe(0); expect(result.evaluator).toMatchObject({ deterministic: true, ui_resolved: false, objective_score: 0, terminal_failure_projection: true }); expect(result.browser_calls).toBe(0);
      const terminal = mode === "failed" ? "FAILED.json" : "TIMEOUT.json"; expect(existsSync(join(f.materialized, `prepared-cells/cell-01/.benchmark/execution/${terminal}`))).toBe(true);
    }
  }, 20_000);

  it("reconciles a started-without-terminal crash as infrastructure-invalid and never reruns it", () => {
    const f = fixture(); const execution = join(f.materialized, "prepared-cells/cell-01/.benchmark/execution"); mkdirSync(execution); json(join(execution, "STARTED.json"), { cell_id: "cell-01" });
    expect(reconcileCrashes(f.materialized, { cells: f.cells })).toEqual(["cell-01"]);
    expect(readFileSync(join(execution, "INFRASTRUCTURE-INVALID.json"), "utf8")).toContain("rerun_allowed");
    expect(() => execute(f)).toThrow(/exact next locked cell: cell-02/);
  });

  it("collects terminal plus six immutable ineligible slots into the exact auditor bundle and leaves unstarted cells missing", () => {
    const f = fixture(); const result = execute(f); const bundle = collect(f);
    expect(bundle).toMatchObject({ kind: "omd-luna-max-wow-preview-execution-records", experiment_id: "omd-luna-test", source_commit: f.sourceCommit, scheduled_terminal_records: 1, scheduled_missing_records: 47, retained_ineligible_records: 6, collection_calls: { provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 } });
    expect(bundle.slots).toHaveLength(7); expect(bundle.slots[0].record_sha256).toBe(result.record_sha256); expect(bundle.slots.slice(1).every((slot) => slot.status === "retained-preregistered-ineligible-unexecuted" && slot.provider_calls === 0)).toBe(true);
    const inputBindings = { matrix: { ...bind(f.matrixPath), bytes: readFileSync(f.matrixPath).length }, preregistration: { ...bind(f.preregPath), bytes: readFileSync(f.preregPath).length }, materialization: { ...bind(f.materializationPath), bytes: readFileSync(f.materializationPath).length }, records: { path: join(f.base, "records.json"), sha256: sha256(readFileSync(join(f.base, "records.json"))), bytes: readFileSync(join(f.base, "records.json")).length }, human: { path: null, sha256: null, bytes: 0, present: false }, gate: { ...bind(defaultGatePath), bytes: readFileSync(defaultGatePath).length } };
    expect(() => auditWowPreview({ matrix: JSON.parse(readFileSync(f.matrixPath)), preregistration: JSON.parse(readFileSync(f.preregPath)), materialization: JSON.parse(readFileSync(f.materializationPath)), recordsBundle: bundle, humanReceipt: { present: false }, gate: JSON.parse(readFileSync(defaultGatePath)), inputBindings })).not.toThrow();
    expect(() => collect(f)).toThrow(/fresh/);
  });
});
