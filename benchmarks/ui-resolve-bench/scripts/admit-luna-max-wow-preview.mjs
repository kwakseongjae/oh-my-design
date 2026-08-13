#!/usr/bin/env node
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import {
  existsSync, lstatSync, mkdirSync, readFileSync, readdirSync, realpathSync, writeFileSync,
} from "node:fs";
import { dirname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
export const defaultRepoRoot = resolve(here, "../../..");
export const SCRIPT_PATH = "benchmarks/ui-resolve-bench/scripts/admit-luna-max-wow-preview.mjs";
export const CONTROLLER_PATH = "benchmarks/ui-resolve-bench/scripts/prepare-luna-max-wow-preview.mjs";
export const MATERIALIZER_PATH = "benchmarks/ui-resolve-bench/scripts/materialize-luna-max-wow-preview.mjs";
export const EVALUATOR_PATH = "benchmarks/ui-resolve-bench/scripts/evaluate-autopilot-greenfield-task.mjs";
export const REQUIRED_MATRIX_SOURCE_PATHS = Object.freeze([
  CONTROLLER_PATH,
  MATERIALIZER_PATH,
  "benchmarks/ui-resolve-bench/scripts/run-luna-max-wow-preview-cell.mjs",
  SCRIPT_PATH,
  "benchmarks/ui-resolve-bench/scripts/prepare-luna-max-admission-receipts.mjs",
  "benchmarks/ui-resolve-bench/scripts/prepare-luna-max-evaluation-runtime-receipt.mjs",
  "benchmarks/ui-resolve-bench/scripts/audit-luna-max-wow-preview.mjs",
  "benchmarks/ui-resolve-bench/config/omd-luna-max-wow-preview-score-gate-v0.1.json",
  "benchmarks/ui-resolve-bench/scripts/run-codex.mjs",
  "benchmarks/ui-resolve-bench/scripts/_lib.mjs",
  "benchmarks/ui-resolve-bench/scripts/codex-browser-sandbox-contract.mjs",
  "benchmarks/ui-resolve-bench/scripts/codex-tool-mode-contract.mjs",
  "benchmarks/ui-resolve-bench/scripts/prepare-run-matrix.mjs",
  "benchmarks/ui-resolve-bench/scripts/audit-omd-2.0-competitor-source-lock.mjs",
]);
export const MATRIX_NAME = "RUN-MATRIX.locked.json";
export const PREREGISTRATION_NAME = "PREREGISTRATION.receipt.json";
export const MATERIALIZATION_NAME = "MATERIALIZATION.json";

const COMMIT = /^[a-f0-9]{40}$/;
const SHA = /^[a-f0-9]{64}$/;
const MODEL = "gpt-5.6-luna";
const EFFORT = "max";
const ARMS = Object.freeze([
  "model-only", "anthropic-frontend-design", "impeccable-prompt-only", "ui-ux-pro-max",
  "taste-eligible-scope-only", "omd-autopilot-v2",
]);
const TASKS = Object.freeze([
  "neighborhood-library-landing", "cold-chain-operations", "clinic-visit-prep-locales",
]);
const SCHEMAS = Object.freeze([
  "design-md-core-manifest-v2.schema.json", "design-system-graph-v2.schema.json",
  "design-system-provenance-v2.schema.json", "design-system-coverage-v2.schema.json",
  "design-md-core-adoption-review-v2.schema.json", "design-md-core-adoption-receipt-v2.schema.json",
  "design-md-core-project-checkpoint-v2.schema.json",
]);
export const ADMISSION_KEYS = Object.freeze([
  "schema_version", "kind", "decision", "reviewer_role", "attestation", "source_commit",
  "generator_authority", "controller_authority", "bindings", "provider_calls", "model_calls",
  "browser_calls", "network_calls",
]);
export const BINDING_KEYS = Object.freeze([
  "matrix", "preregistration", "materialization", "schema", "static_runtime",
  "runtime_attribution", "browser_identity", "evaluation_runtime",
]);

function invariant(value, message) { if (!value) throw new Error(message); }
export function sha256(bytes) { return createHash("sha256").update(bytes).digest("hex"); }
export function canonicalJson(value) {
  if (Array.isArray(value)) return `[${value.map(canonicalJson).join(",")}]`;
  if (value && typeof value === "object") {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonicalJson(value[key])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}
function exactKeys(value, keys, label) {
  invariant(value && typeof value === "object" && !Array.isArray(value), `${label} must be an object`);
  invariant(canonicalJson(Object.keys(value).sort()) === canonicalJson([...keys].sort()), `${label} exact key schema drift`);
}
function git(root, ...args) {
  return execFileSync("git", ["-C", root, ...args], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}
function committedBytes(root, commit, path) {
  return execFileSync("git", ["-C", root, "show", `${commit}:${path}`], { encoding: "buffer", stdio: ["ignore", "pipe", "pipe"] });
}
function canonicalAbsolute(path, label) {
  invariant(typeof path === "string" && isAbsolute(path) && resolve(path) === path && !path.split(sep).includes(".."), `${label} must be a canonical absolute path`);
}
function regular(path, label) {
  canonicalAbsolute(path, label);
  invariant(existsSync(path), `${label} missing: ${path}`);
  const info = lstatSync(path);
  invariant(info.isFile() && !info.isSymbolicLink(), `${label} must be a regular non-symlink file: ${path}`);
  invariant(realpathSync(path) === path, `${label} path aliases are forbidden: ${path}`);
}
function directory(path, label) {
  canonicalAbsolute(path, label);
  invariant(existsSync(path), `${label} missing: ${path}`);
  const info = lstatSync(path);
  invariant(info.isDirectory() && !info.isSymbolicLink(), `${label} must be a non-symlink directory: ${path}`);
  invariant(realpathSync(path) === path, `${label} path aliases are forbidden: ${path}`);
}
function repoAuthority(root, sourceCommit, path, label = path) {
  const absolute = resolve(root, path);
  invariant(absolute.startsWith(`${root}${sep}`), `${label} escapes repository`);
  regular(absolute, label);
  const bytes = readFileSync(absolute);
  invariant(bytes.equals(committedBytes(root, sourceCommit, path)), `${label} differs from source commit`);
  return { path, sha256: sha256(bytes) };
}
function evidence(path, label) {
  const absolute = resolve(String(path ?? ""));
  regular(absolute, label);
  const bytes = readFileSync(absolute);
  let value;
  try { value = JSON.parse(bytes); } catch { throw new Error(`${label} must contain JSON`); }
  return { path: absolute, sha256: sha256(bytes), bytes, value };
}
function binding(item) { return { path: item.path, sha256: item.sha256 }; }
function calls(receipt, expected, label) {
  for (const [key, count] of Object.entries(expected)) invariant(receipt?.[key] === count, `${label} ${key} must equal ${count}`);
}
function sourceCommit(receipt, commit, label) {
  invariant(receipt?.source_commit === commit, `${label} source_commit drift`);
}
function authorityEntry(receipt, root, commit, expectedPath, label) {
  exactKeys(receipt?.source_authority, ["path", "bytes", "sha256"], `${label} source_authority`);
  const actual = repoAuthority(root, commit, expectedPath, `${label} generator authority`);
  const bytes = readFileSync(resolve(root, expectedPath));
  invariant(receipt.source_authority.path === expectedPath && receipt.source_authority.bytes === bytes.length
    && receipt.source_authority.sha256 === actual.sha256, `${label} generator authority drift`);
}

export function assertCleanExactHead({ root, sourceCommit: commit }) {
  root = realpathSync(resolve(root));
  invariant(COMMIT.test(commit ?? ""), "source commit must be an exact lowercase 40-character SHA");
  invariant(git(root, "rev-parse", "HEAD") === commit, "source commit drift");
  invariant(git(root, "status", "--porcelain=v1", "--untracked-files=all") === "", "source worktree must be exact clean HEAD");
  return {
    root,
    generator: repoAuthority(root, commit, SCRIPT_PATH, "admission generator"),
    controller: repoAuthority(root, commit, CONTROLLER_PATH, "preregistration controller"),
    materializer: repoAuthority(root, commit, MATERIALIZER_PATH, "execution materializer"),
  };
}

function treeFiles(root, current = root) {
  const result = [];
  for (const name of readdirSync(current).sort((a, b) => Buffer.from(a).compare(Buffer.from(b)))) {
    const path = join(current, name);
    const info = lstatSync(path);
    invariant(!info.isSymbolicLink(), `materialized authority symlink is forbidden: ${path}`);
    if (info.isDirectory()) result.push(...treeFiles(root, path));
    else {
      invariant(info.isFile(), `materialized authority must contain only regular files: ${path}`);
      result.push({
        path: relative(root, path).split(sep).join("/"), mode: info.mode & 0o777,
        bytes: info.size, sha256: sha256(readFileSync(path)),
      });
    }
  }
  return result;
}
function treeSummary(root) {
  const files = treeFiles(root);
  return {
    files: files.length,
    bytes: files.reduce((sum, item) => sum + item.bytes, 0),
    sha256: sha256(files.map((item) => `${item.path}\0${item.mode}\0${item.sha256}`).join("\n")),
  };
}

export function validateMatrix(matrix, root, commit) {
  invariant(matrix?.schema_version === "0.1" && matrix.kind === "omd-luna-max-wow-preview"
    && matrix.experiment_id === "omd-luna-max-wow-preview-2.0.0-v0.1"
    && matrix.status === "locked-provider-zero-execution-materializer-ready-admission-required"
    && matrix.provider_execution_allowed === false, "matrix identity drift");
  sourceCommit(matrix, commit, "matrix");
  invariant(Array.isArray(matrix.source_authority?.files) && matrix.source_authority.files.length > 0, "matrix source authority missing");
  for (const entry of matrix.source_authority.files) {
    exactKeys(entry, ["path", "bytes", "sha256"], `matrix source authority ${entry?.path ?? "unknown"}`);
    const actual = repoAuthority(root, commit, entry.path, `matrix source authority ${entry.path}`);
    invariant(entry.sha256 === actual.sha256 && entry.bytes === readFileSync(resolve(root, entry.path)).length, `matrix source authority drift: ${entry.path}`);
  }
  invariant(matrix.source_authority.sha256 === sha256(canonicalJson(matrix.source_authority.files)), "matrix source authority closure drift");
  for (const path of REQUIRED_MATRIX_SOURCE_PATHS) invariant(matrix.source_authority.files.some((entry) => entry.path === path), `matrix source authority missing: ${path}`);
  invariant(matrix.task_count === 3 && matrix.arm_count === 6 && matrix.maximum_cell_slots === 54
    && matrix.scheduled_provider_cells === 48 && matrix.ineligible_unexecuted_slots === 6, "matrix 54/48/6 contract drift");
  invariant(matrix.runtime?.provider === "codex" && matrix.runtime.model === MODEL && matrix.runtime.effort === EFFORT
    && matrix.runtime.trials_per_task_arm === 3 && matrix.runtime.maximum_cells === 54
    && matrix.runtime.scheduled_provider_cells === 48, "matrix Luna/max runtime drift");
  const zeroRuntime = ["retry_budget_per_cell", "replacement_budget_per_cell", "fallback_budget_per_cell", "model_substitution_budget", "effort_substitution_budget"];
  for (const key of zeroRuntime) invariant(matrix.runtime[key] === 0, `matrix ${key} must be zero`);
  invariant(matrix.execution_control?.serial === true && matrix.execution_control.retries === 0
    && matrix.execution_control.replacements === 0 && matrix.execution_control.fallback === 0
    && matrix.execution_control.model_substitutions === 0 && matrix.execution_control.effort_substitutions === 0,
  "matrix execution control drift");
  calls(matrix.preparation_calls, { provider_calls: 0, model_calls: 0, browser_calls: 0 }, "matrix preparation");
  invariant(Array.isArray(matrix.cells) && matrix.cells.length === 54 && new Set(matrix.cells.map((cell) => cell.id)).size === 54, "matrix must contain 54 unique slots");
  const keys = matrix.cells.map((cell) => `${cell.task_id}\0${cell.variant_id}\0${cell.trial_index}`);
  invariant(new Set(keys).size === 54, "matrix task/arm/trial slots must be unique");
  for (const task of TASKS) for (const arm of ARMS) for (const trial of [1, 2, 3]) {
    invariant(keys.includes(`${task}\0${arm}\0${trial}`), `matrix slot missing: ${task}/${arm}/${trial}`);
  }
  for (const cell of matrix.cells) {
    invariant(cell.runtime === "codex" && cell.model_id === MODEL && cell.effort === EFFORT
      && cell.retry_budget === 0 && cell.replacement_budget === 0 && cell.fallback_budget === 0, `matrix cell policy drift: ${cell.id}`);
  }
  const eligible = matrix.cells.filter((cell) => cell.eligible_for_execution_and_scoring === true);
  const ineligible = matrix.cells.filter((cell) => cell.eligible_for_execution_and_scoring === false);
  invariant(eligible.length === 48 && ineligible.length === 6
    && ineligible.every((cell) => cell.variant_id === "taste-eligible-scope-only" && cell.task_id !== TASKS[0]), "matrix eligibility drift");
  const unlocked = { ...matrix }; delete unlocked.lock_sha256;
  invariant(matrix.lock_sha256 === sha256(canonicalJson(unlocked)), "matrix lock_sha256 drift");
  return true;
}

export function validatePreregistration(preregistration, matrixEvidence, commit) {
  invariant(preregistration?.schema_version === "0.1" && preregistration.kind === "omd-luna-max-wow-preview-preregistration-receipt"
    && preregistration.experiment_id === "omd-luna-max-wow-preview-2.0.0-v0.1"
    && preregistration.provider_execution_allowed === false, "preregistration identity drift");
  sourceCommit(preregistration, commit, "preregistration");
  invariant(preregistration.matrix_sha256 === matrixEvidence.sha256, "preregistration matrix binding drift");
  const required = ["neutral-same-facts-task-packets", "official-competitor-freshness", "seven-public-core-schemas", "static-luna-max-capability", "one-call-luna-max-attribution", "existing-browser-harness-cdp", "evaluation-runtime-and-fonts"];
  invariant(canonicalJson(preregistration.admitted_prerequisites) === canonicalJson(required), "preregistration prerequisite contract drift");
  calls(preregistration, { provider_calls: 0, model_calls: 0, browser_calls: 0 }, "preregistration");
  return true;
}

export function validateMaterialization(manifest, materializedRoot, lockedRoot, matrix, root, commit) {
  invariant(manifest?.schema_version === "0.1" && manifest.kind === "omd-luna-max-provider-zero-materialization", "materialization identity drift");
  sourceCommit(manifest, commit, "materialization");
  invariant(manifest.prepared_cells === 48 && manifest.ineligible_unexecuted_slots === 6
    && Array.isArray(manifest.cells) && manifest.cells.length === 48, "materialization 48/6 contract drift");
  invariant(manifest.execution?.runtime === "codex" && manifest.execution.model === MODEL && manifest.execution.effort === EFFORT
    && manifest.execution.retry_budget === 0 && manifest.execution.replacement_budget === 0 && manifest.execution.fallback_budget === 0,
  "materialization Luna/max execution drift");
  calls(manifest, { provider_calls: 0, model_calls: 0, browser_calls: 0 }, "materialization");
  invariant(manifest.locked_root_sha256 === treeSummary(lockedRoot).sha256, "materialization locked-root readback identity drift");
  const unlocked = { ...manifest }; delete unlocked.manifest_sha256;
  invariant(manifest.manifest_sha256 === sha256(canonicalJson(unlocked)), "materialization manifest_sha256 drift");
  invariant(manifest.evaluator_authority?.source_only_not_copied_to_execution_root === true
    && manifest.evaluator_authority.evaluator?.path === EVALUATOR_PATH
    && manifest.evaluator_authority.evaluation_runtime_receipt?.status === "unresolved-required-before-scoring",
  "materialization evaluator authority drift");
  const evaluator = repoAuthority(root, commit, EVALUATOR_PATH, "materialization evaluator authority");
  invariant(manifest.evaluator_authority.evaluator.sha256 === evaluator.sha256, "materialization evaluator authority hash drift");
  const eligible = matrix.cells.filter((cell) => cell.eligible_for_execution_and_scoring);
  invariant(canonicalJson(manifest.cells.map((cell) => cell.id)) === canonicalJson(eligible.map((cell) => cell.id)), "materialization cell order/identity drift");
  const cellsRoot = resolve(materializedRoot, "prepared-cells"); directory(cellsRoot, "prepared cells");
  invariant(canonicalJson(treeSummary(cellsRoot)) === canonicalJson(manifest.prepared_cells_tree), "materialized prepared-cells readback identity drift");
  for (const cell of manifest.cells) {
    const root = resolve(cellsRoot, cell.id); directory(root, `materialized cell ${cell.id}`);
    invariant(canonicalJson(treeSummary(root)) === canonicalJson(cell.workspace_tree), `materialized cell readback identity drift: ${cell.id}`);
  }
  const ineligible = evidence(resolve(materializedRoot, "INELIGIBLE-SLOTS.json"), "ineligible slots").value;
  invariant(ineligible.count === 6 && Array.isArray(ineligible.slots) && ineligible.slots.length === 6
    && ineligible.slots.every((slot) => slot.workspace_created === false), "materialized ineligible slots drift");
  return true;
}

export function validateSchemaReceipt(receipt, root, commit) {
  invariant(receipt?.schema_version === "0.1" && receipt.kind === "public-core-schema-liveness-receipt"
    && receipt.pass === true && receipt.base_url === "https://oh-my-design.kr", "public schema receipt identity drift");
  sourceCommit(receipt, commit, "public schema receipt");
  authorityEntry(receipt, root, commit, "benchmarks/ui-resolve-bench/scripts/prepare-luna-max-admission-receipts.mjs", "public schema receipt");
  calls(receipt, { provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 7 }, "public schema receipt");
  invariant(Array.isArray(receipt.schemas) && receipt.schemas.length === 7 && new Set(receipt.schemas.map((item) => item.name)).size === 7, "public schema receipt inventory drift");
  for (const name of SCHEMAS) {
    const item = receipt.schemas.find((entry) => entry.name === name);
    const schemaPath = resolve(root, `web/public/schema/${name}`); regular(schemaPath, `public schema ${name}`);
    const bytes = readFileSync(schemaPath); invariant(bytes.equals(committedBytes(root, commit, `web/public/schema/${name}`)), `public schema differs from source commit: ${name}`);
    const digest = sha256(bytes);
    invariant(item?.url === `https://oh-my-design.kr/schema/${name}` && item.http_status === 200
      && /^application\/(?:schema\+)?json(?:\s*;|$)/i.test(item.content_type ?? "") && item.bytes === bytes.length
      && item.local_sha256 === digest && item.remote_sha256 === digest, `public schema receipt parity drift: ${name}`);
  }
}

export function validateStaticReceipt(receipt, root, commit) {
  invariant(receipt?.schema_version === "0.1" && receipt.kind === "codex-luna-max-static-runtime-capability" && receipt.pass === true, "static capability receipt identity drift");
  sourceCommit(receipt, commit, "static capability receipt"); authorityEntry(receipt, root, commit, "benchmarks/ui-resolve-bench/scripts/prepare-luna-max-admission-receipts.mjs", "static capability receipt");
  calls(receipt, { provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 }, "static capability receipt");
  invariant(receipt.runtime?.provider === "codex" && receipt.runtime.model === MODEL && receipt.runtime.effort === EFFORT
    && receipt.runtime.catalog_supports_model === true && receipt.runtime.catalog_supports_effort === true
    && Number.isInteger(receipt.runtime.catalog_bytes) && receipt.runtime.catalog_bytes > 0
    && SHA.test(receipt.runtime.catalog_sha256 ?? "") && SHA.test(receipt.runtime.model_profile_sha256 ?? ""), "static Luna/max capability drift");
}

export function validateRuntimeReceipt(receipt, root, commit) {
  invariant(receipt?.schema_version === "0.1" && receipt.kind === "codex-luna-max-runtime-attribution-preflight"
    && receipt.pass === true && receipt.excluded_from_benchmark_denominator === true, "raw runtime attribution receipt identity drift");
  sourceCommit(receipt, commit, "raw runtime attribution receipt"); authorityEntry(receipt, root, commit, "benchmarks/ui-resolve-bench/scripts/prepare-luna-max-admission-receipts.mjs", "raw runtime attribution receipt");
  calls(receipt, { provider_calls: 1, model_calls: 1, browser_calls: 0 }, "raw runtime attribution receipt");
  invariant(receipt.runtime?.provider === "codex" && receipt.runtime.model === MODEL && receipt.runtime.effort === EFFORT
    && receipt.runtime.model_selector_observed === true && receipt.runtime.effort_selector_observed === true
    && Number.isInteger(receipt.runtime.telemetry_bytes) && receipt.runtime.telemetry_bytes > 0
    && SHA.test(receipt.runtime.telemetry_sha256 ?? "") && SHA.test(receipt.runtime.turn_id_sha256 ?? "")
    && receipt.runtime.retry_calls === 0 && receipt.runtime.replacement_calls === 0 && receipt.runtime.fallback_calls === 0,
  "raw Luna/max runtime attribution drift");
}

export function validateBrowserReceipt(receipt, root, commit) {
  invariant(receipt?.schema_version === "0.1" && receipt.kind === "existing-browser-harness-cdp-preflight"
    && receipt.pass === true && receipt.excluded_from_benchmark_denominator === true, "raw browser-harness receipt identity drift");
  sourceCommit(receipt, commit, "raw browser-harness receipt"); authorityEntry(receipt, root, commit, "benchmarks/ui-resolve-bench/scripts/prepare-luna-max-admission-receipts.mjs", "raw browser-harness receipt");
  calls(receipt, { provider_calls: 0, model_calls: 0, browser_calls: 1 }, "raw browser-harness receipt");
  const browser = receipt.browser;
  const tabCreationCalls = browser?.tab_creation_calls ?? 0;
  const tabCreatedByController = browser?.tab_created_by_controller ?? false;
  invariant(browser?.name === "default-local-cdp" && browser.transport === "local-existing-chrome-cdp"
    && browser.named_existing === true && browser.available === true && browser.launched_by_controller === false
    && browser.navigation_calls === 0 && /^(?:about:blank|chrome-error:\/\/chromewebdata\/?|http:\/\/(?:127\.0\.0\.1|localhost)(?::\d+)?(?:\/|$))/.test(browser.url ?? "")
    && [0, 1].includes(tabCreationCalls)
    && (tabCreationCalls === 0 ? tabCreatedByController === false : tabCreatedByController === true && browser.url === "about:blank")
    && Number.isInteger(browser.telemetry_bytes) && browser.telemetry_bytes > 0 && SHA.test(browser.telemetry_sha256 ?? "")
    && SHA.test(browser.raw_stdout_sha256 ?? "") && SHA.test(browser.raw_stderr_sha256 ?? "")
    && SHA.test(browser.executable_sha256 ?? "") && SHA.test(browser.identity_sha256 ?? ""),
  "raw browser-harness identity drift");
}

export function validateEvaluationRuntimeReceipt(receipt, root, commit) {
  invariant(receipt?.schema_version === "0.1" && receipt.kind === "omd-luna-max-evaluation-runtime-receipt" && receipt.pass === true, "evaluation runtime receipt identity drift");
  sourceCommit(receipt, commit, "evaluation runtime receipt");
  authorityEntry(receipt, root, commit, "benchmarks/ui-resolve-bench/scripts/prepare-luna-max-evaluation-runtime-receipt.mjs", "evaluation runtime receipt");
  calls(receipt, { provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 }, "evaluation runtime receipt");
  invariant(receipt.evaluation_authorities && typeof receipt.evaluation_authorities === "object", "evaluation authorities missing");
  for (const [name, entry] of Object.entries(receipt.evaluation_authorities)) {
    exactKeys(entry, ["path", "bytes", "sha256"], `evaluation authority ${name}`);
    const actual = repoAuthority(root, commit, entry.path, `evaluation authority ${name}`);
    invariant(entry.sha256 === actual.sha256 && entry.bytes === readFileSync(resolve(root, entry.path)).length, `evaluation authority drift: ${name}`);
  }
  invariant(receipt.evaluation_authorities.evaluator?.path === EVALUATOR_PATH, "evaluation runtime evaluator authority drift");
  regular(resolve(receipt.browser?.executable_path ?? ""), "evaluation browser executable");
  const browserBytes = readFileSync(receipt.browser.executable_path);
  invariant(typeof receipt.browser?.executable_path === "string" && isAbsolute(receipt.browser.executable_path)
    && receipt.browser.executable_bytes === browserBytes.length && receipt.browser.executable_sha256 === sha256(browserBytes)
    && typeof receipt.browser.version === "string" && receipt.browser.version,
  "evaluation runtime browser identity drift");
  invariant(Array.isArray(receipt.fonts?.files) && receipt.fonts.files.length === receipt.fonts.file_count && receipt.fonts.file_count > 0, "evaluation font authority inventory drift");
  for (const item of receipt.fonts.files) {
    exactKeys(item, ["path", "bytes", "sha256"], "evaluation font authority"); regular(resolve(item.path), "evaluation font authority");
    const bytes = readFileSync(item.path); invariant(item.bytes === bytes.length && item.sha256 === sha256(bytes), "evaluation font authority drift");
  }
  invariant(receipt.fonts.sha256 === sha256(canonicalJson(receipt.fonts.files))
    && receipt.evaluator_runtime?.engine === "chromium" && receipt.evaluator_runtime.headless === true
    && receipt.evaluator_runtime.network_policy?.local_origin_only === true, "evaluation runtime environment drift");
  if (receipt.dependencies) {
    const lock = receipt.dependencies.package_lock;
    exactKeys(lock, ["path", "bytes", "sha256"], "evaluation dependency lock");
    const lockActual = repoAuthority(root, commit, lock.path, "evaluation dependency lock");
    invariant(lock.sha256 === lockActual.sha256 && lock.bytes === readFileSync(resolve(root, lock.path)).length, "evaluation dependency lock drift");
    for (const dependency of receipt.dependencies.resolved ?? []) for (const field of ["package_json", "runtime"]) {
      const item = dependency[field]; exactKeys(item, ["path", "bytes", "sha256"], `evaluation dependency ${dependency.name} ${field}`);
      regular(resolve(item.path), `evaluation dependency ${dependency.name} ${field}`);
      const bytes = readFileSync(item.path); invariant(item.bytes === bytes.length && item.sha256 === sha256(bytes), `evaluation dependency drift: ${dependency.name} ${field}`);
    }
  }
}

function freshOutput(path, root, inputs) {
  canonicalAbsolute(path, "output");
  invariant(path !== root && !path.startsWith(`${root}${sep}`), "output must be outside the source repository");
  invariant(!existsSync(path), `ADMISSION.json must be fresh: ${path}`);
  invariant(path.endsWith(`${sep}ADMISSION.json`), "output filename must be ADMISSION.json");
  invariant(!inputs.includes(path), "output must not alias an input");
  mkdirSync(dirname(path), { recursive: true });
  invariant(realpathSync(dirname(path)) === dirname(path), "output parent path aliases are forbidden");
}

export function admitCommand(args, { repoRoot = process.env.OMD_ADMISSION_REPO_ROOT ?? defaultRepoRoot } = {}) {
  const root = realpathSync(resolve(repoRoot));
  const commit = String(args.get("source-commit") ?? "");
  const source = assertCleanExactHead({ root, sourceCommit: commit });
  const lockedRoot = resolve(String(args.get("locked-root") ?? "")); directory(lockedRoot, "locked root");
  const materializedRoot = resolve(String(args.get("materialized-root") ?? "")); directory(materializedRoot, "materialized root");
  const inputs = {
    matrix: evidence(resolve(lockedRoot, MATRIX_NAME), "matrix"),
    preregistration: evidence(resolve(lockedRoot, PREREGISTRATION_NAME), "preregistration"),
    materialization: evidence(resolve(materializedRoot, MATERIALIZATION_NAME), "materialization"),
    schema: evidence(args.get("schema-receipt"), "public schema receipt"),
    static_runtime: evidence(args.get("static-runtime-receipt"), "static capability receipt"),
    runtime_attribution: evidence(args.get("runtime-attribution-receipt"), "raw runtime attribution receipt"),
    browser_identity: evidence(args.get("browser-identity-receipt"), "raw browser-harness receipt"),
    evaluation_runtime: evidence(args.get("evaluation-runtime-receipt"), "evaluation runtime receipt"),
  };
  validateMatrix(inputs.matrix.value, root, commit);
  validatePreregistration(inputs.preregistration.value, inputs.matrix, commit);
  validateMaterialization(inputs.materialization.value, materializedRoot, lockedRoot, inputs.matrix.value, root, commit);
  validateSchemaReceipt(inputs.schema.value, root, commit);
  validateStaticReceipt(inputs.static_runtime.value, root, commit);
  validateRuntimeReceipt(inputs.runtime_attribution.value, root, commit);
  validateBrowserReceipt(inputs.browser_identity.value, root, commit);
  validateEvaluationRuntimeReceipt(inputs.evaluation_runtime.value, root, commit);
  const receipt = {
    schema_version: "0.1",
    kind: "omd-luna-max-sol-xhigh-admission",
    decision: "admitted",
    reviewer_role: "sol-xhigh-planning-review",
    attestation: {
      type: "role-attestation",
      cryptographic_identity_verified: false,
      statement: "This admission records a Sol/xhigh planning-review attestation; it is not cryptographic identity verification.",
    },
    source_commit: commit,
    generator_authority: source.generator,
    controller_authority: source.controller,
    bindings: Object.fromEntries(BINDING_KEYS.map((key) => [key, binding(inputs[key])])),
    provider_calls: 0,
    model_calls: 0,
    browser_calls: 0,
    network_calls: 0,
  };
  exactKeys(receipt, ADMISSION_KEYS, "admission");
  exactKeys(receipt.attestation, ["type", "cryptographic_identity_verified", "statement"], "admission attestation");
  exactKeys(receipt.bindings, BINDING_KEYS, "admission bindings");
  for (const [key, value] of Object.entries(receipt.bindings)) exactKeys(value, ["path", "sha256"], `${key} binding`);
  const output = resolve(String(args.get("out") ?? ""));
  freshOutput(output, root, Object.values(inputs).map((item) => item.path));
  writeFileSync(output, `${canonicalJson(receipt)}\n`, { encoding: "utf8", flag: "wx", mode: 0o600 });
  return { output, receipt };
}

function parseArgs(argv) {
  const values = new Map();
  for (let index = 0; index < argv.length; index += 1) {
    const item = argv[index];
    invariant(item.startsWith("--"), `unexpected argument: ${item}`);
    const key = item.slice(2); const value = argv[index + 1];
    invariant(value && !value.startsWith("--"), `missing value for ${item}`);
    invariant(!values.has(key), `duplicate argument: ${item}`);
    values.set(key, value); index += 1;
  }
  return values;
}

export function main(argv = process.argv.slice(2)) {
  const [command, ...rest] = argv;
  invariant(command === "admit", "usage: admit-luna-max-wow-preview.mjs admit --locked-root <absolute-dir> --materialized-root <absolute-dir> --schema-receipt <absolute-file> --static-runtime-receipt <absolute-file> --runtime-attribution-receipt <absolute-file> --browser-identity-receipt <absolute-file> --evaluation-runtime-receipt <absolute-file> --source-commit <exact-HEAD> --out <fresh-absolute-path/ADMISSION.json>");
  const result = admitCommand(parseArgs(rest));
  process.stdout.write(`${canonicalJson({ status: "admitted", output: result.output, admission_sha256: sha256(readFileSync(result.output)), provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 })}\n`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try { main(); } catch (error) { process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`); process.exitCode = 1; }
}
