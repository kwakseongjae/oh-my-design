import { execFileSync } from "node:child_process";
import { lstatSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, realpathSync, symlinkSync, unlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, relative, resolve, sep } from "node:path";
import { describe, expect, it } from "vitest";
import {
  ADMISSION_KEYS, BINDING_KEYS, CONTROLLER_PATH, EVALUATOR_PATH, MATERIALIZER_PATH, REQUIRED_MATRIX_SOURCE_PATHS, SCRIPT_PATH,
  admitCommand, canonicalJson, sha256,
} from "../../../benchmarks/ui-resolve-bench/scripts/admit-luna-max-wow-preview.mjs";

const RECEIPT_GENERATOR = "benchmarks/ui-resolve-bench/scripts/prepare-luna-max-admission-receipts.mjs";
const EVALUATION_GENERATOR = "benchmarks/ui-resolve-bench/scripts/prepare-luna-max-evaluation-runtime-receipt.mjs";
const SCHEMAS = [
  "design-md-core-manifest-v2.schema.json", "design-system-graph-v2.schema.json",
  "design-system-provenance-v2.schema.json", "design-system-coverage-v2.schema.json",
  "design-md-core-adoption-review-v2.schema.json", "design-md-core-adoption-receipt-v2.schema.json",
  "design-md-core-project-checkpoint-v2.schema.json",
];
const TASKS = ["neighborhood-library-landing", "cold-chain-operations", "clinic-visit-prep-locales"];
const ARMS = ["model-only", "anthropic-frontend-design", "impeccable-prompt-only", "ui-ux-pro-max", "taste-eligible-scope-only", "omd-autopilot-v2"];

function git(root, ...args) { return execFileSync("git", ["-C", root, ...args], { encoding: "utf8" }).trim(); }
function put(root, path, value) { const target = join(root, path); mkdirSync(dirname(target), { recursive: true }); writeFileSync(target, value); return target; }
function json(path, value) { writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`); return path; }
function tree(root, current = root) {
  const files = [];
  for (const name of readdirSync(current).sort((a, b) => Buffer.from(a).compare(Buffer.from(b)))) {
    const path = join(current, name); const entry = lstatSync(path);
    if (entry.isDirectory()) files.push(...tree(root, path));
    else files.push({ path: relative(root, path).split(sep).join("/"), mode: entry.mode & 0o777, bytes: entry.size, sha256: sha256(readFileSync(path)) });
  }
  return files;
}
function summary(root) { const files = tree(root); return { files: files.length, bytes: files.reduce((n, f) => n + f.bytes, 0), sha256: sha256(files.map((f) => `${f.path}\0${f.mode}\0${f.sha256}`).join("\n")) }; }
function authority(root, path) { const bytes = readFileSync(join(root, path)); return { path, bytes: bytes.length, sha256: sha256(bytes) }; }
function mapArgs(values) { return new Map(Object.entries(values)); }

function fixture() {
  const base = realpathSync(mkdtempSync(join(tmpdir(), "omd-luna-admission-")));
  const repo = join(base, "repo"); mkdirSync(repo);
  git(repo, "init", "-q"); git(repo, "config", "user.email", "bench@example.invalid"); git(repo, "config", "user.name", "Bench");
  for (const path of new Set([SCRIPT_PATH, CONTROLLER_PATH, MATERIALIZER_PATH, RECEIPT_GENERATOR, EVALUATION_GENERATOR, EVALUATOR_PATH, ...REQUIRED_MATRIX_SOURCE_PATHS])) {
    put(repo, path, readFileSync(resolve(path)));
  }
  for (const name of SCHEMAS) put(repo, `web/public/schema/${name}`, `${JSON.stringify({ $id: `https://oh-my-design.kr/schema/${name}` })}\n`);
  git(repo, "add", "."); git(repo, "commit", "-qm", "fixture"); const commit = git(repo, "rev-parse", "HEAD");

  const locked = join(base, "locked"); const materialized = join(base, "materialized"); mkdirSync(locked); mkdirSync(join(materialized, "prepared-cells"), { recursive: true });
  const cells = []; let order = 0;
  for (let trial = 1; trial <= 3; trial += 1) for (const task of TASKS) for (const arm of ARMS) {
    order += 1; const eligible = !(arm === "taste-eligible-scope-only" && task !== TASKS[0]);
    cells.push({ id: `${task}-luna-max-r${trial}-${arm}`, order, task_id: task, variant_id: arm, trial_index: trial,
      runtime: "codex", model_id: "gpt-5.6-luna", effort: "max", eligible_for_execution_and_scoring: eligible,
      retry_budget: 0, replacement_budget: 0, fallback_budget: 0 });
  }
  const matrix = {
    schema_version: "0.1", kind: "omd-luna-max-wow-preview", experiment_id: "omd-luna-max-wow-preview-2.0.0-v0.1",
    status: "locked-provider-zero-execution-materializer-ready-admission-required", provider_execution_allowed: false, source_commit: commit,
    task_count: 3, arm_count: 6, maximum_cell_slots: 54, scheduled_provider_cells: 48, ineligible_unexecuted_slots: 6,
    runtime: { provider: "codex", model: "gpt-5.6-luna", effort: "max", trials_per_task_arm: 3, maximum_cells: 54, scheduled_provider_cells: 48,
      retry_budget_per_cell: 0, replacement_budget_per_cell: 0, fallback_budget_per_cell: 0, model_substitution_budget: 0, effort_substitution_budget: 0 },
    execution_control: { serial: true, retries: 0, replacements: 0, fallback: 0, model_substitutions: 0, effort_substitutions: 0 },
    preparation_calls: { provider_calls: 0, model_calls: 0, browser_calls: 0 }, cells,
  };
  matrix.source_authority = { files: REQUIRED_MATRIX_SOURCE_PATHS.map((path) => authority(repo, path)).sort((a, b) => Buffer.from(a.path).compare(Buffer.from(b.path))) };
  matrix.source_authority.sha256 = sha256(canonicalJson(matrix.source_authority.files));
  matrix.lock_sha256 = sha256(canonicalJson(matrix));
  const matrixPath = json(join(locked, "RUN-MATRIX.locked.json"), matrix);
  const preregistrationPath = json(join(locked, "PREREGISTRATION.receipt.json"), {
    schema_version: "0.1", kind: "omd-luna-max-wow-preview-preregistration-receipt", experiment_id: matrix.experiment_id,
    source_commit: commit, matrix_sha256: sha256(readFileSync(matrixPath)), admitted_prerequisites: ["neutral-same-facts-task-packets", "official-competitor-freshness", "seven-public-core-schemas", "static-luna-max-capability", "one-call-luna-max-attribution", "existing-browser-harness-cdp", "evaluation-runtime-and-fonts"],
    provider_execution_allowed: false, provider_calls: 0, model_calls: 0, browser_calls: 0,
  });
  const prepared = [];
  for (const cell of cells.filter((item) => item.eligible_for_execution_and_scoring)) {
    const workspace = join(materialized, "prepared-cells", cell.id); mkdirSync(workspace); writeFileSync(join(workspace, "index.html"), `${cell.id}\n`);
    prepared.push({ id: cell.id, workspace_tree: summary(workspace) });
  }
  json(join(materialized, "INELIGIBLE-SLOTS.json"), { count: 6, slots: cells.filter((item) => !item.eligible_for_execution_and_scoring).map((item) => ({ id: item.id, workspace_created: false })) });
  const manifest = {
    schema_version: "0.1", kind: "omd-luna-max-provider-zero-materialization", source_commit: commit,
    locked_root_sha256: summary(locked).sha256,
    prepared_cells: 48, ineligible_unexecuted_slots: 6, prepared_cells_tree: summary(join(materialized, "prepared-cells")), cells: prepared,
    evaluator_authority: { source_only_not_copied_to_execution_root: true, evaluator: authority(repo, EVALUATOR_PATH), evaluation_runtime_receipt: { status: "unresolved-required-before-scoring" } },
    execution: { runtime: "codex", model: "gpt-5.6-luna", effort: "max", retry_budget: 0, replacement_budget: 0, fallback_budget: 0 },
    provider_calls: 0, model_calls: 0, browser_calls: 0,
  };
  manifest.manifest_sha256 = sha256(canonicalJson(manifest));
  const materializationPath = json(join(materialized, "MATERIALIZATION.json"), manifest);
  const receiptAuthority = authority(repo, RECEIPT_GENERATOR);
  const schemaPath = json(join(base, "schema.json"), { schema_version: "0.1", kind: "public-core-schema-liveness-receipt", pass: true, source_commit: commit, source_authority: receiptAuthority, base_url: "https://oh-my-design.kr",
    schemas: SCHEMAS.map((name) => { const bytes = readFileSync(join(repo, `web/public/schema/${name}`)); const hash = sha256(bytes); return { name, url: `https://oh-my-design.kr/schema/${name}`, http_status: 200, content_type: "application/json", bytes: bytes.length, local_sha256: hash, remote_sha256: hash }; }),
    provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 7 });
  const staticPath = json(join(base, "static.json"), { schema_version: "0.1", kind: "codex-luna-max-static-runtime-capability", pass: true, source_commit: commit, source_authority: receiptAuthority,
    runtime: { provider: "codex", model: "gpt-5.6-luna", effort: "max", catalog_supports_model: true, catalog_supports_effort: true, catalog_bytes: 10, catalog_sha256: "a".repeat(64), model_profile_sha256: "b".repeat(64) },
    provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 });
  const runtimePath = json(join(base, "runtime.json"), { schema_version: "0.1", kind: "codex-luna-max-runtime-attribution-preflight", pass: true, source_commit: commit, source_authority: receiptAuthority, excluded_from_benchmark_denominator: true,
    runtime: { provider: "codex", model: "gpt-5.6-luna", effort: "max", model_selector_observed: true, effort_selector_observed: true, telemetry_bytes: 10, telemetry_sha256: "b".repeat(64), turn_id_sha256: "c".repeat(64), retry_calls: 0, replacement_calls: 0, fallback_calls: 0 },
    provider_calls: 1, model_calls: 1, browser_calls: 0 });
  const browserPath = json(join(base, "browser.json"), { schema_version: "0.1", kind: "existing-browser-harness-cdp-preflight", pass: true, source_commit: commit, source_authority: receiptAuthority, excluded_from_benchmark_denominator: true,
    browser: { name: "default-local-cdp", transport: "local-existing-chrome-cdp", named_existing: true, available: true, launched_by_controller: false, navigation_calls: 0, url: "http://127.0.0.1:3100/fixture", telemetry_bytes: 10, telemetry_sha256: "d".repeat(64), raw_stdout_sha256: "e".repeat(64), raw_stderr_sha256: "f".repeat(64), executable_sha256: "2".repeat(64), identity_sha256: "1".repeat(64) },
    provider_calls: 0, model_calls: 0, browser_calls: 1 });
  const browserExecutable = put(base, "runtime/chrome", "fixture chrome\n");
  const fontPath = put(base, "runtime/fixture.ttf", "fixture font\n"); const font = { path: fontPath, bytes: readFileSync(fontPath).length, sha256: sha256(readFileSync(fontPath)) };
  const evaluationPath = json(join(base, "evaluation.json"), { schema_version: "0.1", kind: "omd-luna-max-evaluation-runtime-receipt", pass: true, source_commit: commit, source_authority: authority(repo, EVALUATION_GENERATOR),
    evaluation_authorities: { evaluator: authority(repo, EVALUATOR_PATH) }, browser: { executable_path: browserExecutable, executable_bytes: readFileSync(browserExecutable).length, executable_sha256: sha256(readFileSync(browserExecutable)), version: "Fixture Chrome 1" },
    fonts: { files: [font], file_count: 1, sha256: sha256(canonicalJson([font])) }, evaluator_runtime: { engine: "chromium", headless: true, network_policy: { local_origin_only: true } },
    provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 });
  const out = join(base, "review", "ADMISSION.json");
  const args = mapArgs({ "locked-root": locked, "materialized-root": materialized, "schema-receipt": schemaPath,
    "static-runtime-receipt": staticPath, "runtime-attribution-receipt": runtimePath, "browser-identity-receipt": browserPath,
    "evaluation-runtime-receipt": evaluationPath, "source-commit": commit, out });
  return { base, repo, commit, locked, materialized, matrixPath, preregistrationPath, materializationPath, schemaPath, staticPath, runtimePath, browserPath, evaluationPath, out, args };
}

describe("Luna Max Wow Preview admission generator", () => {
  it("writes one fresh strict provider-zero admission with all exact bindings and non-cryptographic attestation", () => {
    const f = fixture(); const result = admitCommand(f.args, { repoRoot: f.repo }); const bytes = readFileSync(f.out, "utf8");
    expect(REQUIRED_MATRIX_SOURCE_PATHS).toContain("benchmarks/ui-resolve-bench/scripts/prepare-luna-max-blind-review.mjs");
    expect(bytes).toBe(`${canonicalJson(result.receipt)}\n`);
    expect(Object.keys(result.receipt).sort()).toEqual([...ADMISSION_KEYS].sort());
    expect(Object.keys(result.receipt.bindings).sort()).toEqual([...BINDING_KEYS].sort());
    expect(result.receipt).toMatchObject({ decision: "admitted", reviewer_role: "sol-xhigh-planning-review", source_commit: f.commit,
      attestation: { type: "role-attestation", cryptographic_identity_verified: false },
      generator_authority: { path: SCRIPT_PATH }, controller_authority: { path: CONTROLLER_PATH },
      provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 });
    expect(Object.values(result.receipt.bindings).every((item) => Object.keys(item).sort().join(",") === "path,sha256")).toBe(true);
    expect(() => admitCommand(f.args, { repoRoot: f.repo })).toThrow(/fresh/);
  });

  it("fails closed for tamper, missing input, symlink substitution, dirty source, source drift, and incorrect calls", () => {
    const cases = [
      (f) => writeFileSync(f.matrixPath, "{}\n"),
      (f) => unlinkSync(f.schemaPath),
      (f) => { const target = join(f.base, "browser-target.json"); writeFileSync(target, readFileSync(f.browserPath)); unlinkSync(f.browserPath); symlinkSync(target, f.browserPath); },
      (f) => put(f.repo, "dirty.txt", "dirty\n"),
      (f) => writeFileSync(join(f.repo, "benchmarks/ui-resolve-bench/scripts/prepare-luna-max-blind-review.mjs"), "tampered blind review\n"),
      (f) => f.args.set("source-commit", "f".repeat(40)),
      (f) => { const value = JSON.parse(readFileSync(f.runtimePath)); value.model_calls = 2; json(f.runtimePath, value); },
    ];
    for (const mutate of cases) { const f = fixture(); mutate(f); expect(() => admitCommand(f.args, { repoRoot: f.repo })).toThrow(); }
  });

  it("fails materialized readback identity, policy, and evaluator authority drift", () => {
    for (const mutate of [
      (f) => writeFileSync(join(f.materialized, "prepared-cells", readdirSync(join(f.materialized, "prepared-cells"))[0], "index.html"), "tampered\n"),
      (f) => { const value = JSON.parse(readFileSync(f.materializationPath)); value.execution.fallback_budget = 1; value.manifest_sha256 = sha256(canonicalJson({ ...value, manifest_sha256: undefined })); json(f.materializationPath, value); },
      (f) => { const value = JSON.parse(readFileSync(f.materializationPath)); value.evaluator_authority.evaluator.path = "wrong.mjs"; json(f.materializationPath, value); },
    ]) { const f = fixture(); mutate(f); expect(() => admitCommand(f.args, { repoRoot: f.repo })).toThrow(); }
  });
});
