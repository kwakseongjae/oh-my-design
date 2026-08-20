#!/usr/bin/env node
/**
 * admit-grok46-wow-preview.mjs — Provider-zero admission script for the
 * grok-4.6 wow-preview benchmark lane (WP2 of omd-grok46-restart-v0.1).
 *
 * Structural equivalent of admit-luna-max-wow-preview.mjs, adapted for:
 *   Model:    grok-4.6
 *   Provider: grok-build-cli
 *   Effort:   high
 *   Experiment: omd-grok46-wow-preview-2.0.0-v0.2
 *
 * Provider-zero: zero provider_calls, zero model_calls, zero network_calls
 * from this script. The runtime attribution receipt carries exactly 1
 * provider call / 1 model call (the isolated smoke call), but that call is
 * excluded from the benchmark denominator and logged separately.
 *
 * Produces ADMISSION.json with the same receipt structure as the Luna lane,
 * rebinding matrix/preregistration/materialization/score-gate/runtime
 * receipts to the grok-4.6 lane equivalents.
 *
 * Usage:
 *   admit-grok46-wow-preview.mjs admit \
 *     --locked-root <absolute-dir> \
 *     --materialized-root <absolute-dir> \
 *     --score-gate-receipt <absolute-file> \
 *     --static-runtime-receipt <absolute-file> \
 *     --runtime-attribution-receipt <absolute-file> \
 *     --grok-cli-identity-receipt <absolute-file> \
 *     --evaluation-runtime-receipt <absolute-file> \
 *     --source-commit <exact-HEAD> \
 *     --out <fresh-absolute-path/ADMISSION.json>
 */

import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import {
  existsSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  realpathSync,
  writeFileSync,
} from "node:fs";
import { dirname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
export const defaultRepoRoot = resolve(here, "../../..");

// ─────────────────────────────────────────────────────────────────────────────
// Seed-locked source authority paths
// ─────────────────────────────────────────────────────────────────────────────
export const SCRIPT_PATH = "benchmarks/ui-resolve-bench/scripts/admit-grok46-wow-preview.mjs";
export const MATERIALIZER_PATH = "benchmarks/ui-resolve-bench/scripts/materialize-grok46-wow-preview.mjs";
export const RUNNER_PATH = "benchmarks/ui-resolve-bench/scripts/run-grok.mjs";
export const EVALUATOR_PATH = "benchmarks/ui-resolve-bench/scripts/evaluate-autopilot-greenfield-task.mjs";
export const SCORE_GATE_CONFIG_PATH = "benchmarks/ui-resolve-bench/config/omd-grok46-wow-preview-score-gate-v0.2.json";
export const MATRIX_CONFIG_PATH = "benchmarks/ui-resolve-bench/config/omd-grok46-wow-preview-v0.2.json";

export const REQUIRED_SOURCE_PATHS = Object.freeze([
  SCRIPT_PATH,
  MATERIALIZER_PATH,
  RUNNER_PATH,
  "benchmarks/ui-resolve-bench/scripts/_lib.mjs",
  SCORE_GATE_CONFIG_PATH,
  MATRIX_CONFIG_PATH,
]);

export const MATRIX_NAME = "RUN-MATRIX.locked.json";
export const PREREGISTRATION_NAME = "PREREGISTRATION.receipt.json";
export const MATERIALIZATION_NAME = "MATERIALIZATION.json";

// ─────────────────────────────────────────────────────────────────────────────
// Seed-locked identity constants
// ─────────────────────────────────────────────────────────────────────────────
const COMMIT = /^[a-f0-9]{40}$/;
const SHA = /^[a-f0-9]{64}$/;
const MODEL = "grok-4.6";
const EFFORT = "high";
const PROVIDER = "grok-build-cli";
const RUNTIME_TARGET = "grok";
const EXPERIMENT_ID = "omd-grok46-wow-preview-2.0.0-v0.2";
const MATRIX_KIND = "omd-grok46-wow-preview";
const MATERIALIZATION_KIND = "omd-grok46-provider-zero-materialization";
const MATRIX_STATUS = "locked-provider-zero-execution-materializer-ready-admission-required";
const CELLS_SCHEDULED = 48;
const CELLS_INELIGIBLE = 6;
const TOTAL_SLOTS = 54;

const ARMS = Object.freeze([
  "model-only",
  "anthropic-frontend-design",
  "impeccable-prompt-only",
  "ui-ux-pro-max",
  "taste-eligible-scope-only",
  "omd-autopilot-v2",
]);
const TASKS = Object.freeze([
  "neighborhood-library-landing",
  "cold-chain-operations",
  "clinic-visit-prep-locales",
]);

/**
 * Exact keys of the ADMISSION.json receipt (same structure as Luna admission).
 */
export const ADMISSION_KEYS = Object.freeze([
  "schema_version",
  "kind",
  "decision",
  "reviewer_role",
  "attestation",
  "source_commit",
  "generator_authority",
  "materializer_authority",
  "bindings",
  "provider_calls",
  "model_calls",
  "network_calls",
]);

/**
 * Binding keys (grok-specific: grok_build_cli_identity instead of browser_identity).
 */
export const BINDING_KEYS = Object.freeze([
  "matrix",
  "preregistration",
  "materialization",
  "score_gate",
  "static_runtime",
  "runtime_attribution",
  "grok_build_cli_identity",
  "evaluation_runtime",
]);

// ─────────────────────────────────────────────────────────────────────────────
// Utility functions
// ─────────────────────────────────────────────────────────────────────────────

function invariant(value, message) {
  if (!value) throw new Error(message);
}

export function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

export function canonicalJson(value) {
  if (Array.isArray(value)) return `[${value.map(canonicalJson).join(",")}]`;
  if (value && typeof value === "object") {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonicalJson(value[key])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}

function git(root, ...args) {
  return execFileSync("git", ["-C", root, ...args], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
}

function committedBytes(root, commit, path) {
  return execFileSync(
    "git",
    ["-C", root, "show", `${commit}:${path}`],
    { encoding: "buffer", stdio: ["ignore", "pipe", "pipe"] },
  );
}

function canonicalAbsolute(path, label) {
  invariant(
    typeof path === "string" &&
    isAbsolute(path) &&
    resolve(path) === path &&
    !path.split(sep).includes(".."),
    `${label} must be a canonical absolute path`,
  );
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
  invariant(
    bytes.equals(committedBytes(root, sourceCommit, path)),
    `${label} differs from source commit`,
  );
  return { path, sha256: sha256(bytes) };
}

function evidence(pathOrArg, label) {
  const absolute = resolve(String(pathOrArg ?? ""));
  regular(absolute, label);
  const bytes = readFileSync(absolute);
  let value;
  try {
    value = JSON.parse(bytes);
  } catch {
    throw new Error(`${label} must contain valid JSON`);
  }
  return { path: absolute, sha256: sha256(bytes), bytes, value };
}

function binding(item) {
  return { path: item.path, sha256: item.sha256 };
}

function assertSourceCommit(receipt, commit, label) {
  invariant(receipt?.source_commit === commit, `${label} source_commit drift`);
}

function treeFiles(root, current = root) {
  const result = [];
  for (const name of readdirSync(current).sort((a, b) => Buffer.from(a).compare(Buffer.from(b)))) {
    const path = join(current, name);
    const info = lstatSync(path);
    invariant(!info.isSymbolicLink(), `materialized authority symlink is forbidden: ${path}`);
    if (info.isDirectory()) {
      result.push(...treeFiles(root, path));
    } else {
      invariant(info.isFile(), `materialized authority must contain only regular files: ${path}`);
      result.push({
        path: relative(root, path).split(sep).join("/"),
        mode: info.mode & 0o777,
        bytes: info.size,
        sha256: sha256(readFileSync(path)),
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

// ─────────────────────────────────────────────────────────────────────────────
// assertCleanExactHead — ensures we are at the exact committed HEAD
// ─────────────────────────────────────────────────────────────────────────────

export function assertCleanExactHead({ root, sourceCommit: commit }) {
  root = realpathSync(resolve(root));
  invariant(COMMIT.test(commit ?? ""), "source commit must be an exact lowercase 40-character SHA");
  invariant(git(root, "rev-parse", "HEAD") === commit, "source commit drift");
  invariant(
    git(root, "status", "--porcelain=v1", "--untracked-files=all") === "",
    "source worktree must be exact clean HEAD",
  );
  return {
    root,
    generator: repoAuthority(root, commit, SCRIPT_PATH, "admission generator"),
    materializer: repoAuthority(root, commit, MATERIALIZER_PATH, "execution materializer"),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Validators — one per required input evidence file
// ─────────────────────────────────────────────────────────────────────────────

export function validateMatrix(matrix, root, commit) {
  invariant(
    matrix?.schema_version === "0.1" &&
    matrix.kind === MATRIX_KIND &&
    matrix.experiment_id === EXPERIMENT_ID &&
    matrix.status === MATRIX_STATUS &&
    matrix.provider_execution_allowed === false,
    "matrix identity drift",
  );
  assertSourceCommit(matrix, commit, "matrix");
  // Validate source authority if present
  if (Array.isArray(matrix.source_authority?.files)) {
    for (const entry of matrix.source_authority.files) {
      const actual = repoAuthority(root, commit, entry.path, `matrix source authority ${entry.path}`);
      invariant(entry.sha256 === actual.sha256, `matrix source authority drift: ${entry.path}`);
    }
    if (matrix.source_authority.sha256) {
      invariant(
        matrix.source_authority.sha256 === sha256(canonicalJson(matrix.source_authority.files)),
        "matrix source authority closure drift",
      );
    }
  }
  invariant(
    matrix.task_count === 3 &&
    matrix.arm_count === 6 &&
    matrix.maximum_cell_slots === TOTAL_SLOTS &&
    matrix.scheduled_provider_cells === CELLS_SCHEDULED &&
    matrix.ineligible_unexecuted_slots === CELLS_INELIGIBLE,
    "matrix 54/48/6 contract drift",
  );
  invariant(
    matrix.runtime?.provider === PROVIDER &&
    matrix.runtime.model === MODEL &&
    matrix.runtime.effort === EFFORT &&
    matrix.runtime.trials_per_task_arm === 3 &&
    matrix.runtime.maximum_cells === TOTAL_SLOTS &&
    matrix.runtime.scheduled_provider_cells === CELLS_SCHEDULED,
    "matrix grok/high runtime drift",
  );
  const zeroRuntime = [
    "retry_budget_per_cell",
    "replacement_budget_per_cell",
    "fallback_budget_per_cell",
    "model_substitution_budget",
    "effort_substitution_budget",
  ];
  for (const key of zeroRuntime) {
    invariant(matrix.runtime[key] === 0, `matrix ${key} must be zero`);
  }
  invariant(
    matrix.execution_control?.serial === true &&
    matrix.execution_control.retries === 0 &&
    matrix.execution_control.replacements === 0 &&
    matrix.execution_control.fallback === 0 &&
    matrix.execution_control.model_substitutions === 0 &&
    matrix.execution_control.effort_substitutions === 0,
    "matrix execution control drift",
  );
  invariant(
    matrix.preparation_calls?.provider_calls === 0 &&
    matrix.preparation_calls?.model_calls === 0,
    "matrix preparation must be provider-zero",
  );
  // Validate cells
  invariant(
    Array.isArray(matrix.cells) &&
    matrix.cells.length === TOTAL_SLOTS &&
    new Set(matrix.cells.map((cell) => cell.id)).size === TOTAL_SLOTS,
    `matrix must contain ${TOTAL_SLOTS} unique slots`,
  );
  const keys = matrix.cells.map((cell) => `${cell.task_id}\0${cell.variant_id}\0${cell.trial_index}`);
  invariant(new Set(keys).size === TOTAL_SLOTS, "matrix task/arm/trial slots must be unique");
  for (const task of TASKS) {
    for (const arm of ARMS) {
      for (const trial of [1, 2, 3]) {
        invariant(
          keys.includes(`${task}\0${arm}\0${trial}`),
          `matrix slot missing: ${task}/${arm}/${trial}`,
        );
      }
    }
  }
  for (const cell of matrix.cells) {
    invariant(
      cell.runtime === RUNTIME_TARGET &&
      cell.model_id === MODEL &&
      cell.effort === EFFORT &&
      cell.retry_budget === 0 &&
      cell.replacement_budget === 0 &&
      cell.fallback_budget === 0,
      `matrix cell policy drift: ${cell.id}`,
    );
  }
  const eligible = matrix.cells.filter((cell) => cell.eligible_for_execution_and_scoring === true);
  const ineligible = matrix.cells.filter((cell) => cell.eligible_for_execution_and_scoring === false);
  invariant(
    eligible.length === CELLS_SCHEDULED &&
    ineligible.length === CELLS_INELIGIBLE &&
    ineligible.every((cell) => cell.variant_id === "taste-eligible-scope-only"),
    "matrix eligibility drift",
  );
  if (matrix.lock_sha256) {
    const unlocked = { ...matrix };
    delete unlocked.lock_sha256;
    invariant(matrix.lock_sha256 === sha256(canonicalJson(unlocked)), "matrix lock_sha256 drift");
  }
  return true;
}

export function validatePreregistration(preregistration, matrixEvidence, commit) {
  invariant(
    preregistration?.schema_version === "0.1" &&
    preregistration.kind === "omd-grok46-wow-preview-preregistration-receipt" &&
    preregistration.experiment_id === EXPERIMENT_ID &&
    preregistration.provider_execution_allowed === false,
    "preregistration identity drift",
  );
  assertSourceCommit(preregistration, commit, "preregistration");
  invariant(
    preregistration.matrix_sha256 === matrixEvidence.sha256,
    "preregistration matrix binding drift",
  );
  invariant(
    preregistration.provider_calls === 0 && preregistration.model_calls === 0,
    "preregistration must be provider-zero",
  );
  return true;
}

export function validateMaterialization(manifest, materializedRoot, lockedRoot, matrix, root, commit) {
  invariant(
    manifest?.schema_version === "0.1" && manifest.kind === MATERIALIZATION_KIND,
    "materialization identity drift",
  );
  assertSourceCommit(manifest, commit, "materialization");
  invariant(
    manifest.prepared_cells === CELLS_SCHEDULED &&
    manifest.ineligible_unexecuted_slots === CELLS_INELIGIBLE &&
    Array.isArray(manifest.cells) &&
    manifest.cells.length === CELLS_SCHEDULED,
    "materialization 48/6 contract drift",
  );
  invariant(
    manifest.execution?.model === MODEL &&
    manifest.execution.effort === EFFORT &&
    manifest.execution.retry_budget === 0 &&
    manifest.execution.replacement_budget === 0 &&
    manifest.execution.fallback_budget === 0 &&
    manifest.execution.provider_execution_allowed === false,
    "materialization grok/high execution drift",
  );
  invariant(
    manifest.provider_calls === 0 && manifest.model_calls === 0,
    "materialization must be provider-zero",
  );
  const unlocked = { ...manifest };
  delete unlocked.manifest_sha256;
  invariant(
    manifest.manifest_sha256 === sha256(canonicalJson(unlocked)),
    "materialization manifest_sha256 drift",
  );
  invariant(
    manifest.locked_root_sha256 === treeSummary(lockedRoot).sha256,
    "materialization locked-root readback identity drift",
  );
  const cellsRoot = resolve(materializedRoot, "prepared-cells");
  directory(cellsRoot, "prepared cells");
  // Validate prepared cell identity
  const eligible = matrix.cells.filter((cell) => cell.eligible_for_execution_and_scoring);
  invariant(
    canonicalJson(manifest.cells.map((cell) => cell.id)) === canonicalJson(eligible.map((cell) => cell.id)),
    "materialization cell order/identity drift",
  );
  return true;
}

export function validateScoreGate(scoreGate, root, commit) {
  invariant(
    scoreGate?.schema_version === "0.2" &&
    scoreGate.experiment_id === EXPERIMENT_ID &&
    scoreGate.runtime_contract?.model === MODEL &&
    scoreGate.runtime_contract?.provider === PROVIDER,
    "score gate identity drift",
  );
  // Missing-data rules (locked before any cell runs — WP3)
  invariant(
    scoreGate.missing_data_rules?.capacity_exclusion?.reporting === "separate" &&
    Array.isArray(scoreGate.missing_data_rules.capacity_exclusion.status_values) &&
    scoreGate.missing_data_rules.capacity_exclusion.status_values.includes("capacity-exhausted") &&
    scoreGate.missing_data_rules.capacity_exclusion.status_values.includes("usage-limit"),
    "score gate capacity exclusion missing-data rule drift",
  );
  invariant(
    typeof scoreGate.missing_data_rules?.epoch_inconclusive?.threshold === "number" &&
    scoreGate.missing_data_rules.epoch_inconclusive.threshold >= 2 &&
    scoreGate.missing_data_rules.epoch_inconclusive.consequence === "epoch_inconclusive_no_release",
    "score gate epoch inconclusive missing-data rule drift",
  );
  invariant(
    typeof scoreGate.missing_data_rules?.minimum_n_per_axis?.minimum_valid_trials === "number" &&
    scoreGate.missing_data_rules.minimum_n_per_axis.minimum_valid_trials >= 2 &&
    scoreGate.missing_data_rules.minimum_n_per_axis.axis === "arm_x_task",
    "score gate minimum n per axis missing-data rule drift",
  );
  // Wave rules
  invariant(
    Array.isArray(scoreGate.wave_execution_rules?.wave_order) &&
    scoreGate.wave_execution_rules.wave_order.length === 3 &&
    scoreGate.wave_execution_rules.wave_order[0] === "r1" &&
    scoreGate.wave_execution_rules.wave_order[1] === "r2" &&
    scoreGate.wave_execution_rules.wave_order[2] === "r3",
    "score gate wave order drift",
  );
  // Retry/substitution locked at zero
  invariant(
    scoreGate.runtime_contract?.retry_count === 0 &&
    scoreGate.runtime_contract?.replacement_count === 0 &&
    scoreGate.runtime_contract?.fallback_count === 0,
    "score gate runtime contract retry/replacement/fallback must be zero",
  );
  // Release gates
  invariant(
    scoreGate.release_gates?.capacity_events_excluded_from_quality_comparison === true &&
    scoreGate.release_gates?.epoch_inconclusive_if_second_capacity_event === true &&
    scoreGate.release_gates?.undecidable_arms_excluded_from_release_decision === true,
    "score gate release gate missing-data flags drift",
  );
  // Cross-model comparison forbidden
  invariant(
    scoreGate.claim_policy?.luna_caf0_comparison_forbidden === true &&
    scoreGate.claim_policy?.cross_model_score_comparison_allowed === false,
    "score gate claim policy drift",
  );
  return true;
}

export function validateStaticRuntimeReceipt(receipt, root, commit) {
  invariant(
    receipt?.schema_version === "0.1" &&
    receipt.kind === "grok46-static-runtime-capability" &&
    receipt.pass === true,
    "static runtime receipt identity drift",
  );
  assertSourceCommit(receipt, commit, "static runtime receipt");
  invariant(
    receipt.runtime?.provider === PROVIDER && receipt.runtime.model === MODEL,
    "static runtime grok/high capability drift",
  );
  invariant(
    receipt.provider_calls === 0 && receipt.model_calls === 0,
    "static runtime receipt must be provider-zero",
  );
}

export function validateRuntimeAttributionReceipt(receipt, root, commit) {
  invariant(
    receipt?.schema_version === "0.1" &&
    receipt.kind === "grok46-runtime-attribution-preflight" &&
    receipt.pass === true &&
    receipt.excluded_from_benchmark_denominator === true,
    "runtime attribution receipt identity drift",
  );
  assertSourceCommit(receipt, commit, "runtime attribution receipt");
  invariant(
    receipt.runtime?.provider === PROVIDER && receipt.runtime.model === MODEL,
    "runtime attribution grok/high drift",
  );
  // Exactly 1 provider call (the isolated smoke call), excluded from denominator
  invariant(receipt.provider_calls === 1 && receipt.model_calls === 1, "runtime attribution must have exactly 1 call");
  invariant(
    receipt.runtime?.retry_calls === 0 &&
    receipt.runtime?.replacement_calls === 0 &&
    receipt.runtime?.fallback_calls === 0,
    "runtime attribution must have zero retry/replacement/fallback calls",
  );
}

export function validateGrokBuildCliIdentityReceipt(receipt, root, commit) {
  invariant(
    receipt?.schema_version === "0.1" &&
    receipt.kind === "grok-build-cli-identity-preflight" &&
    receipt.pass === true &&
    receipt.excluded_from_benchmark_denominator === true,
    "grok build CLI identity receipt identity drift",
  );
  assertSourceCommit(receipt, commit, "grok build CLI identity receipt");
  // Provider-zero (no model calls needed for identity check)
  invariant(
    receipt.provider_calls === 0 && receipt.model_calls === 0,
    "grok CLI identity receipt must be provider-zero",
  );
  // Isolation proof
  invariant(
    receipt.isolation?.proven === true &&
    receipt.isolation?.method === "HOME redirect with frozen auth.json and byte-gated models_cache.json",
    "grok CLI isolation proof drift",
  );
  // Cache byte gate configuration
  invariant(
    Array.isArray(receipt.isolation?.models_cache_volatile_fields) &&
    receipt.isolation.models_cache_volatile_fields.includes("fetched_at") &&
    receipt.isolation.models_cache_volatile_fields.includes("etag"),
    "grok CLI isolation models_cache byte-gate volatile fields drift",
  );
}

export function validateEvaluationRuntimeReceipt(receipt, root, commit) {
  invariant(
    receipt?.schema_version === "0.1" &&
    receipt.kind === "omd-grok46-evaluation-runtime-receipt" &&
    receipt.pass === true,
    "evaluation runtime receipt identity drift",
  );
  assertSourceCommit(receipt, commit, "evaluation runtime receipt");
  invariant(
    receipt.provider_calls === 0 && receipt.model_calls === 0,
    "evaluation runtime receipt must be provider-zero",
  );
  // Evaluator authority must be present
  invariant(
    receipt.evaluation_authorities?.evaluator?.path === EVALUATOR_PATH,
    "evaluation runtime evaluator authority drift",
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// freshOutput — validates the output path before writing
// ─────────────────────────────────────────────────────────────────────────────

function freshOutput(path, root) {
  canonicalAbsolute(path, "output");
  invariant(
    path !== root && !path.startsWith(`${root}${sep}`),
    "output must be outside the source repository",
  );
  invariant(!existsSync(path), `ADMISSION.json must be fresh: ${path}`);
  invariant(path.endsWith(`${sep}ADMISSION.json`), "output filename must be ADMISSION.json");
  mkdirSync(dirname(path), { recursive: true });
  invariant(realpathSync(dirname(path)) === dirname(path), "output parent path aliases are forbidden");
}

// ─────────────────────────────────────────────────────────────────────────────
// admitCommand — main entry point
// ─────────────────────────────────────────────────────────────────────────────

export function admitCommand(args, { repoRoot = process.env.OMD_ADMISSION_REPO_ROOT ?? defaultRepoRoot } = {}) {
  const root = realpathSync(resolve(repoRoot));
  const commit = String(args.get("source-commit") ?? "");
  const source = assertCleanExactHead({ root, sourceCommit: commit });

  const lockedRoot = resolve(String(args.get("locked-root") ?? ""));
  directory(lockedRoot, "locked root");
  const materializedRoot = resolve(String(args.get("materialized-root") ?? ""));
  directory(materializedRoot, "materialized root");

  // Load all required evidence files
  const scoreGatePath = args.get("score-gate-receipt") ?? resolve(root, SCORE_GATE_CONFIG_PATH);
  const inputs = {
    matrix: evidence(resolve(lockedRoot, MATRIX_NAME), "matrix"),
    preregistration: evidence(resolve(lockedRoot, PREREGISTRATION_NAME), "preregistration"),
    materialization: evidence(resolve(materializedRoot, MATERIALIZATION_NAME), "materialization"),
    score_gate: evidence(scoreGatePath, "score gate"),
    static_runtime: evidence(args.get("static-runtime-receipt"), "static runtime receipt"),
    runtime_attribution: evidence(args.get("runtime-attribution-receipt"), "runtime attribution receipt"),
    grok_build_cli_identity: evidence(args.get("grok-cli-identity-receipt"), "grok build CLI identity receipt"),
    evaluation_runtime: evidence(args.get("evaluation-runtime-receipt"), "evaluation runtime receipt"),
  };

  // Validate all inputs
  validateMatrix(inputs.matrix.value, root, commit);
  validatePreregistration(inputs.preregistration.value, inputs.matrix, commit);
  validateMaterialization(
    inputs.materialization.value,
    materializedRoot,
    lockedRoot,
    inputs.matrix.value,
    root,
    commit,
  );
  validateScoreGate(inputs.score_gate.value, root, commit);
  validateStaticRuntimeReceipt(inputs.static_runtime.value, root, commit);
  validateRuntimeAttributionReceipt(inputs.runtime_attribution.value, root, commit);
  validateGrokBuildCliIdentityReceipt(inputs.grok_build_cli_identity.value, root, commit);
  validateEvaluationRuntimeReceipt(inputs.evaluation_runtime.value, root, commit);

  // Build admission receipt
  const receipt = {
    schema_version: "0.1",
    kind: "omd-grok46-wow-preview-admission",
    decision: "admitted",
    reviewer_role: "grok46-provider-zero-planning-review",
    attestation: {
      type: "provider-zero-attestation",
      cryptographic_identity_verified: false,
      statement:
        "This admission records a provider-zero grok-4.6 wow-preview attestation; " +
        "it is not cryptographic identity verification. The runtime attribution receipt " +
        "carries exactly one isolated smoke call excluded from the benchmark denominator.",
    },
    source_commit: commit,
    generator_authority: source.generator,
    materializer_authority: source.materializer,
    bindings: Object.fromEntries(BINDING_KEYS.map((key) => [key, binding(inputs[key])])),
    provider_calls: 0,
    model_calls: 0,
    network_calls: 0,
  };

  const output = resolve(String(args.get("out") ?? ""));
  freshOutput(output, root);
  writeFileSync(output, `${canonicalJson(receipt)}\n`, { encoding: "utf8", flag: "wx", mode: 0o600 });
  return { output, receipt };
}

// ─────────────────────────────────────────────────────────────────────────────
// parseArgs — minimal argument parser
// ─────────────────────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const values = new Map();
  for (let index = 0; index < argv.length; index += 1) {
    const item = argv[index];
    invariant(item.startsWith("--"), `unexpected argument: ${item}`);
    const key = item.slice(2);
    const value = argv[index + 1];
    invariant(value && !value.startsWith("--"), `missing value for ${item}`);
    invariant(!values.has(key), `duplicate argument: ${item}`);
    values.set(key, value);
    index += 1;
  }
  return values;
}

// ─────────────────────────────────────────────────────────────────────────────
// main
// ─────────────────────────────────────────────────────────────────────────────

export function main(argv = process.argv.slice(2)) {
  const [command, ...rest] = argv;
  invariant(
    command === "admit",
    "usage: admit-grok46-wow-preview.mjs admit " +
    "--locked-root <absolute-dir> " +
    "--materialized-root <absolute-dir> " +
    "--static-runtime-receipt <absolute-file> " +
    "--runtime-attribution-receipt <absolute-file> " +
    "--grok-cli-identity-receipt <absolute-file> " +
    "--evaluation-runtime-receipt <absolute-file> " +
    "--source-commit <exact-HEAD> " +
    "--out <fresh-absolute-path/ADMISSION.json>",
  );
  const result = admitCommand(parseArgs(rest));
  process.stdout.write(
    `${canonicalJson({
      status: "admitted",
      output: result.output,
      admission_sha256: sha256(readFileSync(result.output)),
      provider_calls: 0,
      model_calls: 0,
      network_calls: 0,
    })}\n`,
  );
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    main();
  } catch (error) {
    process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
    process.exitCode = 1;
  }
}
