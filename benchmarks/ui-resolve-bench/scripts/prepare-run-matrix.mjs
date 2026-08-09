#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { existsSync, lstatSync, mkdirSync, readFileSync, realpathSync, writeFileSync } from "node:fs";
import { dirname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs, readJson, sha256, treeManifest, writeJson } from "./_lib.mjs";
import {
  HOST_POLICY_MODES,
  prepareHostPolicyCell,
} from "./host-policy-contract.mjs";
import {
  assertObjectiveMethodologyPin,
  currentObjectiveMethodology,
} from "./objective-methodology-contract.mjs";
import { CODEX_REASONING_EFFORTS } from "./codex-tool-mode-contract.mjs";
import { assertProviderRoute } from "./runtime-contract.mjs";

const VALID_RUNTIMES = new Set(["codex", "claude-code", "cursor"]);
const VALID_EFFORTS = new Set(CODEX_REASONING_EFFORTS);
const VALID_BENCHMARK_FAMILIES = new Set(["model", "skill", "harness", "prompt-arena", "factorial"]);
const VALID_COMPARISON_MODES = new Set(["native-capability", "iso-external-budget", "effort-scaling"]);
const VALID_BUDGET_MODES = new Set(["hard-cap", "observed-only"]);
const VALID_PACING_POLICIES = new Set(["none", "fixed-inter-cell"]);
const VALID_ADMISSION_NORMALIZATION_POLICIES = new Set([
  "exact-task-cross-arm",
  "cross-task-reliability",
  "multi-task-repeated-reliability",
  "paired-cross-task-comparison",
  "complete-block-effort-scaling",
]);
const VALID_ATTRIBUTION_SCOPES = new Set([
  "provider-observed-only",
  "internal-registered-display-name",
]);
const SHA256_PATTERN = /^[a-f0-9]{64}$/;
const COMMIT_PATTERN = /^[a-f0-9]{40,64}$/;
const COMPLETE_BLOCK_PREREGISTRATION_RECEIPT_REF = "PREREGISTRATION.receipt.json";
export const COMPLETE_BLOCK_CODEX_PROFILES = Object.freeze([
  Object.freeze({
    model_id: "gpt-5.6-luna",
    default_effort: "medium",
    supported_efforts: Object.freeze(["low", "medium", "high", "xhigh", "max"]),
  }),
  Object.freeze({
    model_id: "gpt-5.6-terra",
    default_effort: "medium",
    supported_efforts: Object.freeze(["low", "medium", "high", "xhigh", "max", "ultra"]),
  }),
  Object.freeze({
    model_id: "gpt-5.6-sol",
    default_effort: "low",
    supported_efforts: Object.freeze(["low", "medium", "high", "xhigh", "max", "ultra"]),
  }),
]);
const COMPLETE_BLOCK_CODEX_MODELS = Object.freeze(
  COMPLETE_BLOCK_CODEX_PROFILES.map((profile) => profile.model_id),
);
export const COMPLETE_BLOCK_BASE_PAIR_ORDER = Object.freeze([
  "gpt-5.6-luna/medium", "gpt-5.6-terra/high", "gpt-5.6-sol/max",
  "gpt-5.6-luna/max", "gpt-5.6-terra/low", "gpt-5.6-sol/medium",
  "gpt-5.6-luna/low", "gpt-5.6-terra/max", "gpt-5.6-sol/ultra",
  "gpt-5.6-luna/xhigh", "gpt-5.6-terra/medium", "gpt-5.6-sol/low",
  "gpt-5.6-luna/high", "gpt-5.6-terra/ultra", "gpt-5.6-sol/xhigh",
  "gpt-5.6-terra/xhigh", "gpt-5.6-sol/high",
]);
export const COMPLETE_BLOCK_SCHEDULE_WAVES = Object.freeze([
  Object.freeze({
    rotation: 0,
    task_assignments: Object.freeze([
      "A", "B", "C", "A", "B", "C", "A", "B", "C",
      "A", "B", "C", "A", "B", "C", "A", "B",
    ]),
  }),
  Object.freeze({
    rotation: 6,
    task_assignments: Object.freeze([
      "B", "C", "A", "B", "C", "A", "B", "C", "A",
      "B", "C", "B", "C", "A", "B", "C", "A",
    ]),
  }),
  Object.freeze({
    rotation: 12,
    task_assignments: Object.freeze([
      "C", "A", "B", "C", "A", "C", "A", "B", "C",
      "A", "B", "C", "A", "B", "C", "A", "B",
    ]),
  }),
]);
const COMPLETE_BLOCK_FORBIDDEN_CLAIMS = Object.freeze([
  "model-superiority",
  "model-ranking",
  "cross-model-effort-equivalence",
  "statistical-superiority",
  "industry-leader",
  "2.0-release-gate-from-this-test-alone",
]);

function canonicalSha256(value) {
  return sha256(JSON.stringify(value));
}

function gitObservation(repo, args, options = {}) {
  return execFileSync("git", ["-C", repo, ...args], {
    encoding: options.encoding ?? "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    maxBuffer: 16 * 1024 * 1024,
  });
}

export function observeTaskSourceAuthority(taskRoot, sourceCommit) {
  const exactTaskRoot = realpathSync(resolve(taskRoot));
  if (!COMMIT_PATTERN.test(sourceCommit ?? "")) {
    throw new Error("task source observation requires an exact source commit");
  }
  const repositoryRoot = realpathSync(
    gitObservation(exactTaskRoot, ["rev-parse", "--show-toplevel"]).trim(),
  );
  const relativeTaskRoot = relative(repositoryRoot, exactTaskRoot).split(sep).join("/");
  if (!relativeTaskRoot || relativeTaskRoot.startsWith("../") || isAbsolute(relativeTaskRoot)) {
    throw new Error(`task source observation escapes repository: ${exactTaskRoot}`);
  }
  try {
    gitObservation(repositoryRoot, ["cat-file", "-e", `${sourceCommit}^{commit}`]);
    gitObservation(repositoryRoot, ["merge-base", "--is-ancestor", sourceCommit, "HEAD"]);
  } catch {
    throw new Error(`task source commit is not an ancestor of current HEAD: ${sourceCommit}`);
  }
  let gitTreeOid;
  let entries;
  try {
    gitTreeOid = gitObservation(
      repositoryRoot,
      ["rev-parse", `${sourceCommit}:${relativeTaskRoot}`],
    ).trim();
    entries = gitObservation(
      repositoryRoot,
      ["ls-tree", "-r", "-z", "--full-tree", sourceCommit, "--", relativeTaskRoot],
      { encoding: "buffer" },
    );
  } catch {
    throw new Error(`task source commit does not contain ${relativeTaskRoot}`);
  }
  if (!COMMIT_PATTERN.test(gitTreeOid)) {
    throw new Error(`task source tree OID is invalid: ${relativeTaskRoot}`);
  }
  const prefix = `${relativeTaskRoot}/`;
  const committedFiles = entries.toString("utf8").split("\0").filter(Boolean).map((entry) => {
    const match = /^(\d+) (\w+) ([a-f0-9]{40,64})\t(.+)$/.exec(entry);
    if (!match || match[2] !== "blob" || !match[4].startsWith(prefix)) {
      throw new Error(`unsupported committed task entry: ${entry}`);
    }
    if (!new Set(["100644", "100755"]).has(match[1])) {
      throw new Error(`committed task entry must be a regular file: ${match[4]}`);
    }
    const bytes = gitObservation(
      repositoryRoot,
      ["cat-file", "blob", match[3]],
      { encoding: "buffer" },
    );
    return {
      path: match[4].slice(prefix.length),
      mode: match[1] === "100755" ? 0o755 : 0o644,
      bytes: bytes.length,
      sha256: sha256(bytes),
    };
  }).sort((left, right) => (left.path < right.path ? -1 : left.path > right.path ? 1 : 0));
  if (!committedFiles.length) throw new Error(`source commit task tree is empty: ${relativeTaskRoot}`);
  const committed = {
    files: committedFiles,
    sha256: sha256(committedFiles
      .map((file) => `${file.path}\0${file.mode}\0${file.sha256}`)
      .join("\n")),
  };
  const working = treeManifest(exactTaskRoot);
  return {
    schema_version: "0.1",
    repository_root: repositoryRoot,
    task_root: exactTaskRoot,
    repository_relative_task_root: relativeTaskRoot,
    source_commit: sourceCommit,
    current_head_commit: gitObservation(repositoryRoot, ["rev-parse", "HEAD"]).trim(),
    source_commit_ancestor_of_current_head: true,
    git_tree_oid: gitTreeOid,
    working_tree: working,
    committed_tree: committed,
    exact_working_tree_match: working.sha256 === committed.sha256
      && JSON.stringify(working.files) === JSON.stringify(committed.files),
  };
}

export function validatePreregisteredPlanReceipt(plan, planBytes, receiptBytes) {
  const authority = plan?.preregistration_authority_contract;
  if (authority?.schema_version !== "0.1"
    || authority.receipt_ref !== COMPLETE_BLOCK_PREREGISTRATION_RECEIPT_REF
    || authority.binding !== "exact-plan-file-bytes-sha256"
    || authority.receipt_required_before_preparation !== true
    || authority.plan_mutation_allowed_after_receipt !== false) {
    throw new Error("matrix complete-block preregistration authority contract drift");
  }
  let receipt;
  try {
    receipt = JSON.parse(receiptBytes.toString("utf8"));
  } catch {
    throw new Error("matrix complete-block preregistration receipt must be valid JSON");
  }
  const planSha256 = sha256(planBytes);
  if (receipt?.schema_version !== "0.2"
    || receipt.status !== "PREREGISTERED_PROVIDER_ZERO"
    || receipt.binding !== authority.binding
    || receipt.receipt_ref !== authority.receipt_ref
    || receipt.plan_sha256 !== planSha256
    || receipt.plan_bytes !== planBytes.length
    || receipt.experiment_id !== plan.experiment_id
    || receipt.scheduled_cells !== 51
    || receipt.task_set_sha256 !== plan.effort_sweep_contract?.task_set_sha256
    || receipt.schedule_sha256 !== plan.effort_sweep_contract?.schedule_sha256
    || ["provider_calls", "model_calls", "browser_calls", "network_calls", "cursor_calls", "claude_calls"]
      .some((field) => receipt[field] !== 0)) {
    throw new Error("matrix complete-block preregistration receipt does not bind exact plan bytes");
  }
  return { receipt, plan_sha256: planSha256, receipt_sha256: sha256(receiptBytes) };
}

export function readPreregisteredPlanAuthority(plan, {
  planPath,
  expectedReceiptPath,
} = {}) {
  if (!planPath || !expectedReceiptPath) {
    throw new Error("matrix complete-block preparation requires planPath and expectedReceiptPath");
  }
  const exactPlanPath = resolve(planPath);
  const exactExpectedReceiptPath = resolve(expectedReceiptPath);
  const expectedFromPlan = resolve(
    dirname(exactPlanPath),
    plan.preregistration_authority_contract?.receipt_ref ?? "",
  );
  if (exactExpectedReceiptPath !== expectedFromPlan) {
    throw new Error("matrix complete-block expected preregistration receipt path drift");
  }
  for (const [path, label] of [
    [exactPlanPath, "plan"],
    [exactExpectedReceiptPath, "preregistration receipt"],
  ]) {
    if (!existsSync(path)) throw new Error(`matrix complete-block ${label} is missing`);
    const info = lstatSync(path);
    if (info.isSymbolicLink() || !info.isFile()) {
      throw new Error(`matrix complete-block ${label} must be an exact regular-file artifact`);
    }
  }
  const planBytes = readFileSync(exactPlanPath);
  const parsed = JSON.parse(planBytes.toString("utf8"));
  if (JSON.stringify(parsed) !== JSON.stringify(plan)) {
    throw new Error("matrix complete-block plan object differs from exact preregistered plan bytes");
  }
  const receiptBytes = readFileSync(exactExpectedReceiptPath);
  return {
    ...validatePreregisteredPlanReceipt(plan, planBytes, receiptBytes),
    plan_bytes: planBytes,
    receipt_bytes: receiptBytes,
    plan_path: exactPlanPath,
    receipt_path: exactExpectedReceiptPath,
  };
}

function taskLockProjection(task) {
  return {
    task_id: task.task_id,
    task_tree_sha256: task.task_tree_sha256,
    task_tree_files: task.task_tree_files,
    prompt_sha256: task.prompt_sha256,
    starter_sha256: task.starter_sha256,
    baseline_evidence_sha256: task.baseline_evidence_sha256,
    baseline_provenance_sha256: task.baseline_provenance_sha256,
    baseline_methodology: task.baseline_methodology,
    source_contract_sha256: task.source_contract_sha256,
  };
}

function taskTreeSha256FromFiles(files) {
  return sha256(files
    .map((file) => `${file.path}\0${file.mode}\0${file.sha256}`)
    .join("\n"));
}

export function completeBlockTaskSetSha256(tasks) {
  if (!Array.isArray(tasks) || tasks.length !== 3) {
    throw new Error("matrix complete-block task set must contain exactly three ordered task locks");
  }
  return canonicalSha256(tasks.map(taskLockProjection));
}

function scheduleProjection(cells) {
  return cells.map((cell) => ({
    id: cell.id,
    wave: cell.schedule_wave,
    position: cell.schedule_position,
    task_label: cell.schedule_task_label,
    task_id: cell.task_id,
    model_id: cell.model_id,
    effort: cell.effort,
    trial_index: cell.trial_index,
  }));
}

export function completeBlockScheduleSha256(cells) {
  if (!Array.isArray(cells) || cells.length !== 51) {
    throw new Error("matrix complete-block schedule must contain exactly 51 cells");
  }
  return canonicalSha256(scheduleProjection(cells));
}

function modelEffortPairKey(pair) {
  return `${pair.model_id}\0${pair.effort}`;
}

function orderedModelEffortPairs(contract) {
  return (contract?.models ?? []).flatMap((profile) => (
    profile.supported_efforts.map((effort) => ({ model_id: profile.model_id, effort }))
  ));
}

function assertExactOrderedPairs(actual, expected, label) {
  if (!Array.isArray(actual)
    || JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(`${label} must exactly match the ordered Codex model-effort expansion`);
  }
}

function hasExactPairSet(actual, expected) {
  if (actual.length !== expected.length) return false;
  const actualKeys = actual.map(modelEffortPairKey).sort();
  const expectedKeys = expected.map(modelEffortPairKey).sort();
  return JSON.stringify(actualKeys) === JSON.stringify(expectedKeys)
    && new Set(actualKeys).size === actualKeys.length;
}

function validateTaskLocks(plan, taskOrder, policyLabel) {
  const lockedTasks = plan.task_lock_contract?.tasks;
  if (!Array.isArray(lockedTasks) || lockedTasks.length !== taskOrder.length) {
    throw new Error(`matrix ${policyLabel} requires one task lock per unique task`);
  }
  if (JSON.stringify(lockedTasks.map((task) => task?.task_id)) !== JSON.stringify(taskOrder)) {
    throw new Error(`matrix ${policyLabel} task locks must match first task occurrence order`);
  }
  for (const [index, task] of lockedTasks.entries()) {
    for (const field of [
      "task_tree_sha256",
      "prompt_sha256",
      "starter_sha256",
      "baseline_evidence_sha256",
      "baseline_provenance_sha256",
      "source_contract_sha256",
    ]) {
      if (typeof task?.[field] !== "string" || !SHA256_PATTERN.test(task[field])) {
        throw new Error(`matrix ${policyLabel} task lock ${index + 1}.${field} is invalid`);
      }
    }
    if (!Array.isArray(task.task_tree_files) || task.task_tree_files.length < 1
      || task.task_tree_files.some((file) => (
        typeof file?.path !== "string" || !file.path
        || !Number.isInteger(file.mode) || !Number.isInteger(file.bytes)
        || !SHA256_PATTERN.test(file.sha256 ?? "")
      ))) {
      throw new Error(`matrix ${policyLabel} task lock ${index + 1}.task_tree_files is invalid`);
    }
    if (taskTreeSha256FromFiles(task.task_tree_files) !== task.task_tree_sha256) {
      throw new Error(`matrix ${policyLabel} task lock ${index + 1}.task_tree_files hash drift`);
    }
    assertObjectiveMethodologyPin(
      task.baseline_methodology,
      `${policyLabel}:task-lock-${index + 1}:baseline-methodology`,
    );
  }
}

function assertExactCompleteBlockSchedule(plan, taskOrder) {
  const schedule = plan.schedule_contract;
  const expectedLabels = Object.fromEntries(["A", "B", "C"].map((label, index) => [
    label,
    taskOrder[index],
  ]));
  if (!schedule || schedule.schema_version !== "0.1"
    || schedule.policy !== "balanced-three-wave-interleaved"
    || schedule.canonicalization !== "sha256-json-stringify-ordered-cell-schedule-v1"
    || JSON.stringify(schedule.task_labels) !== JSON.stringify(expectedLabels)
    || JSON.stringify(schedule.base_model_effort_pair_order) !== JSON.stringify(COMPLETE_BLOCK_BASE_PAIR_ORDER)
    || JSON.stringify(schedule.wave_rotations)
      !== JSON.stringify(COMPLETE_BLOCK_SCHEDULE_WAVES.map((wave) => wave.rotation))
    || JSON.stringify(schedule.wave_task_assignments)
      !== JSON.stringify(COMPLETE_BLOCK_SCHEDULE_WAVES.map((wave) => [...wave.task_assignments]))) {
    throw new Error("matrix complete-block effort scaling schedule blueprint drift");
  }
  const taskByLabel = new Map(Object.entries(expectedLabels));
  const expectedCells = COMPLETE_BLOCK_SCHEDULE_WAVES.flatMap((wave, waveIndex) => {
    const pairs = [
      ...COMPLETE_BLOCK_BASE_PAIR_ORDER.slice(wave.rotation),
      ...COMPLETE_BLOCK_BASE_PAIR_ORDER.slice(0, wave.rotation),
    ];
    return pairs.map((pair, position) => {
      const [modelId, effort] = pair.split("/");
      const taskLabel = wave.task_assignments[position];
      return {
        wave: waveIndex + 1,
        position: position + 1,
        task_label: taskLabel,
        task_id: taskByLabel.get(taskLabel),
        model_id: modelId,
        effort,
        trial_index: 1,
      };
    });
  });
  const observedCells = plan.cells.map((cell) => ({
    wave: cell.schedule_wave,
    position: cell.schedule_position,
    task_label: cell.schedule_task_label,
    task_id: cell.task_id,
    model_id: cell.model_id,
    effort: cell.effort,
    trial_index: cell.trial_index,
  }));
  if (JSON.stringify(observedCells) !== JSON.stringify(expectedCells)) {
    throw new Error("matrix complete-block effort scaling cells must follow the exact ordered schedule blueprint");
  }
  const taskSetSha = completeBlockTaskSetSha256(plan.task_lock_contract.tasks);
  if (plan.task_lock_contract.task_set_sha256 !== taskSetSha
    || plan.effort_sweep_contract.task_set_sha256 !== taskSetSha
    || plan.lock_manifest?.task_set_sha256 !== taskSetSha) {
    throw new Error("matrix complete-block effort scaling task-set hash drift");
  }
  const scheduleSha = completeBlockScheduleSha256(plan.cells);
  if (schedule.schedule_sha256 !== scheduleSha
    || plan.effort_sweep_contract.schedule_sha256 !== scheduleSha
    || plan.lock_manifest?.schedule_sha256 !== scheduleSha) {
    throw new Error("matrix complete-block effort scaling schedule hash drift");
  }
  return { taskSetSha, scheduleSha };
}

export function validateCompleteBlockEffortScalingPlan(plan) {
  const policy = plan?.control_contract?.admission_normalization_policy;
  if (policy !== "complete-block-effort-scaling") return null;
  if (plan.schema_version !== "0.3") {
    throw new Error("matrix complete-block effort scaling requires schema 0.3");
  }
  if (plan.family !== "model" || plan.control_contract.comparison_mode !== "effort-scaling") {
    throw new Error("matrix complete-block effort scaling requires model family and effort-scaling comparison mode");
  }
  if (plan.reliability_contract !== undefined) {
    throw new Error("matrix complete-block effort scaling forbids a Reliability contract");
  }
  const preregistrationAuthority = plan.preregistration_authority_contract;
  if (preregistrationAuthority?.schema_version !== "0.1"
    || preregistrationAuthority.receipt_ref !== COMPLETE_BLOCK_PREREGISTRATION_RECEIPT_REF
    || preregistrationAuthority.binding !== "exact-plan-file-bytes-sha256"
    || preregistrationAuthority.receipt_required_before_preparation !== true
    || preregistrationAuthority.plan_mutation_allowed_after_receipt !== false) {
    throw new Error("matrix complete-block preregistration authority contract drift");
  }

  const sweep = plan.effort_sweep_contract;
  if (!sweep || typeof sweep !== "object" || Array.isArray(sweep)) {
    throw new Error("matrix effort_sweep_contract is required for complete-block effort scaling");
  }
  if (sweep.required_cells !== 51 || sweep.tasks !== 3
    || sweep.trials_per_task_pair !== 1 || sweep.complete_block_required !== true
    || sweep.reliability_metric !== null) {
    throw new Error("matrix effort_sweep_contract must lock 51 cells, 3 tasks, one trial per task-pair, a complete block, and null reliability_metric");
  }

  const effortContract = plan.codex_model_effort_contract;
  const profileProjection = effortContract?.models?.map((profile) => ({
    model_id: profile.model_id,
    default_effort: profile.default_effort,
    supported_efforts: profile.supported_efforts,
  }));
  if (!effortContract || JSON.stringify(profileProjection)
    !== JSON.stringify(COMPLETE_BLOCK_CODEX_PROFILES)) {
    throw new Error("matrix complete-block effort scaling requires exact ordered Luna5, Terra6, and Sol6 profiles and defaults");
  }
  const expectedPairs = orderedModelEffortPairs(effortContract);
  if (expectedPairs.length !== 17 || new Set(expectedPairs.map(modelEffortPairKey)).size !== 17) {
    throw new Error("matrix complete-block effort scaling requires exactly 17 distinct model-effort pairs");
  }
  assertExactOrderedPairs(
    sweep.ordered_model_effort_pairs,
    expectedPairs,
    "matrix effort_sweep_contract.ordered_model_effort_pairs",
  );

  const routing = plan.provider_routing_contract;
  if (!routing || routing.cursor_allowed !== false || routing.allowed_runtime !== "codex"
    || routing.claude_code_allowed !== false || routing.aliases_allowed !== false
    || routing.retry_allowed !== false || routing.replacement_allowed !== false
    || routing.fallback_allowed !== false || routing.model_substitution_allowed !== false
    || routing.effort_substitution_allowed !== false || routing.task_substitution_allowed !== false
    || routing.fail_closed !== true
    || JSON.stringify(routing.allowed_model_ids) !== JSON.stringify(COMPLETE_BLOCK_CODEX_MODELS)) {
    throw new Error("matrix complete-block effort scaling provider routing must exactly forbid aliases, fallback, model/effort/task substitution, Cursor, and Claude Code");
  }
  assertExactOrderedPairs(
    routing.allowed_model_effort_pairs,
    expectedPairs,
    "matrix provider_routing_contract.allowed_model_effort_pairs",
  );

  const taskOrder = [...new Set(plan.cells.map((cell) => cell.task_id))];
  if (taskOrder.length !== 3 || plan.cells.length !== 51) {
    throw new Error("matrix complete-block effort scaling requires exactly 3 tasks × 17 pairs = 51 cells");
  }
  validateTaskLocks(plan, taskOrder, "complete-block effort scaling");
  for (const [index, task] of plan.task_lock_contract.tasks.entries()) {
    if (task.source_commit !== plan.task_lock_contract.source_commit
      || !COMMIT_PATTERN.test(task.source_commit ?? "")
      || !COMMIT_PATTERN.test(task.git_tree_oid ?? "")
      || task.observed_task_tree_sha256 !== task.task_tree_sha256) {
      throw new Error(`matrix complete-block effort scaling task lock ${index + 1} lacks exact source-commit/tree observation`);
    }
  }

  const control = plan.control_contract;
  if (control.timeout_seconds !== 720 || control.max_concurrency !== 1
    || control.latency_comparison !== "descriptive-only"
    || control.retry_policy !== "none-primary" || control.replacement_policy !== "none"
    || control.fallback_policy !== "none" || control.model_substitution_policy !== "none"
    || control.effort_substitution_policy !== "none" || control.task_substitution_policy !== "none"
    || control.task_order_policy !== "fixed-preregistered"
    || control.pacing?.policy !== "fixed-inter-cell"
    || control.pacing.inter_cell_delay_seconds !== 30
    || control.pacing.applies_between_cells_only !== true
    || control.pacing.counts_toward_cell_wall_time !== false) {
    throw new Error("matrix complete-block effort scaling execution contract drift");
  }
  const checkpoint = plan.checkpoint_continuation_contract;
  if (checkpoint?.max_new_cells_per_invocation !== 1
    || checkpoint.preserve_completed_cells !== true
    || checkpoint.completed_root_not_resumable !== true) {
    throw new Error("matrix complete-block effort scaling checkpoint contract must allow exactly one new cell");
  }
  const claim = plan.comparison_claim_contract;
  if (claim?.claim !== "internal-effort-scaling-compatibility"
    || claim.publication_tier !== "internal-effort-scaling-compatibility"
    || claim.descriptive_only !== true || claim.requires_complete_51_cell_block !== true
    || claim.cross_model_pooling_allowed !== false
    || JSON.stringify(claim.forbid_claims) !== JSON.stringify(COMPLETE_BLOCK_FORBIDDEN_CLAIMS)) {
    throw new Error("matrix complete-block effort scaling descriptive-only claim boundary drift");
  }
  const interpretation = plan.interpretation_contract;
  if (!interpretation || interpretation.mode !== "complete-block-only"
    || interpretation.interpretation_allowed_before_all_51_terminal !== false
    || interpretation.incomplete_block_disposition !== "freeze-without-comparative-claim"
    || interpretation.unit_of_analysis !== "task-specific-model-effort-cell"
    || interpretation.cross_model_pooling_allowed !== false
    || interpretation.reliability_interpretation_allowed !== false) {
    throw new Error("matrix complete-block effort scaling interpretation block drift");
  }
  const exposure = plan.exposure_evidence_contract;
  if (!exposure || exposure.scope !== "generator-invocation-only"
    || exposure.evidence !== "generation_attestation"
    || exposure.historical_task_exposure !== "unknown-not-asserted"
    || exposure.prior_task_exposure_claim_made !== false) {
    throw new Error("matrix complete-block effort scaling exposure evidence boundary drift");
  }
  const snapshot = plan.codex_catalog_snapshot_contract;
  let authSnapshotValid = false;
  if (isAbsolute(snapshot?.auth_json_source_path ?? "")
    && existsSync(snapshot.auth_json_source_path)) {
    const authInfo = lstatSync(snapshot.auth_json_source_path);
    authSnapshotValid = authInfo.isFile()
      && !authInfo.isSymbolicLink()
      && authInfo.size === snapshot.auth_json_bytes
      && sha256(readFileSync(snapshot.auth_json_source_path)) === snapshot.auth_json_sha256;
  }
  const cliCacheVersionsMatch = snapshot?.codex_cli?.version === effortContract.cache_client_version;
  const cacheClientPolicyValid = snapshot?.cli_cache_client_version_policy === "require-exact-match"
    && cliCacheVersionsMatch
    && snapshot.cli_cache_client_version_mismatch_justification === null;
  if (!snapshot || snapshot.enforcement_mode !== "exact-runtime-per-invocation"
    || !isAbsolute(snapshot.auth_json_source_path ?? "")
    || snapshot.auth_json_source_mode !== "immutable-snapshot-only"
    || !SHA256_PATTERN.test(snapshot.auth_json_sha256 ?? "")
    || !Number.isInteger(snapshot.auth_json_bytes) || snapshot.auth_json_bytes < 1
    || snapshot.auth_json_mode !== "isolated-copy-before-provider-execution"
    || snapshot.mutable_auth_fallback_allowed !== false
    || !authSnapshotValid
    || !isAbsolute(snapshot.models_cache_source_path ?? "")
    || snapshot.models_cache_sha256 !== effortContract.cache_sha256
    || snapshot.models_cache_source_mode !== "immutable-snapshot-only"
    || snapshot.mutable_models_cache_fallback_allowed !== false
    || !isAbsolute(snapshot.codex_cli?.executable_path ?? "")
    || !isAbsolute(snapshot.codex_cli?.native_executable_path ?? "")
    || !SHA256_PATTERN.test(snapshot.codex_cli?.binary_sha256 ?? "")
    || !SHA256_PATTERN.test(snapshot.codex_cli?.native_binary_sha256 ?? "")
    || !cacheClientPolicyValid
    || plan.lock_manifest?.codex_catalog_snapshot_contract_sha256
      !== canonicalSha256(snapshot)) {
    throw new Error("matrix complete-block effort scaling exact catalog/auth/cache/CLI binding drift");
  }

  const semanticFields = ["variant_id", "system_id", "runtime", "timeout_seconds", "allow_dirty_source"];
  for (const field of semanticFields) {
    if (new Set(plan.cells.map((cell) => JSON.stringify(cell[field] ?? null))).size !== 1) {
      throw new Error(`matrix complete-block effort scaling allows only model_id and effort to vary across semantic arm field ${field}`);
    }
  }
  if (plan.cells[0].runtime !== "codex") {
    throw new Error("matrix complete-block effort scaling requires the Codex runtime");
  }
  if (new Set(plan.cells.map((cell) => cell.trial_index)).size !== 1) {
    throw new Error("matrix complete-block effort scaling requires one shared trial index");
  }

  const skillLock = plan.skill_lock_contract;
  if (!skillLock || !COMMIT_PATTERN.test(skillLock.source_commit ?? "")
    || !SHA256_PATTERN.test(skillLock.source_tree_sha256 ?? "")
    || !SHA256_PATTERN.test(skillLock.skill_tree_sha256 ?? "")) {
    throw new Error("matrix complete-block effort scaling requires one exact skill/source lock");
  }

  for (const taskId of taskOrder) {
    const group = plan.cells.filter((cell) => cell.task_id === taskId);
    if (!hasExactPairSet(group, expectedPairs)) {
      throw new Error(`matrix complete-block effort scaling task ${taskId} must contain the exact model-effort pair set`);
    }
  }
  for (const cell of plan.cells) {
    assertProviderRoute({ runtime: cell.runtime, model: cell.model_id });
  }
  const hashes = assertExactCompleteBlockSchedule(plan, taskOrder);
  return {
    task_order: taskOrder,
    ordered_model_effort_pairs: expectedPairs,
    task_set_sha256: hashes.taskSetSha,
    schedule_sha256: hashes.scheduleSha,
  };
}

export function validateCodexModelEffortContract(plan) {
  const contract = plan?.codex_model_effort_contract;
  if (contract === undefined) return null;
  if (plan?.schema_version !== "0.3") {
    throw new Error("matrix codex_model_effort_contract requires schema 0.3");
  }
  if (!contract || typeof contract !== "object" || Array.isArray(contract)) {
    throw new Error("matrix codex_model_effort_contract must be an object");
  }
  if (!SHA256_PATTERN.test(contract.cache_sha256 ?? "")) {
    throw new Error("matrix codex_model_effort_contract.cache_sha256 is invalid");
  }
  for (const field of ["cache_fetched_at", "cache_client_version"]) {
    if (typeof contract[field] !== "string" || !contract[field]) {
      throw new Error(`matrix codex_model_effort_contract.${field} is required`);
    }
  }
  if (!Array.isArray(contract.models) || !contract.models.length) {
    throw new Error("matrix codex_model_effort_contract.models must be a non-empty array");
  }
  const profiles = new Map();
  for (const [index, profile] of contract.models.entries()) {
    const label = `matrix codex_model_effort_contract.models[${index}]`;
    if (!profile || typeof profile !== "object" || Array.isArray(profile)) {
      throw new Error(`${label} must be an object`);
    }
    if (typeof profile.model_id !== "string" || !profile.model_id) {
      throw new Error(`${label}.model_id is required`);
    }
    if (profiles.has(profile.model_id)) {
      throw new Error(`duplicate Codex model effort profile: ${profile.model_id}`);
    }
    if (!SHA256_PATTERN.test(profile.model_profile_sha256 ?? "")) {
      throw new Error(`${label}.model_profile_sha256 is invalid`);
    }
    if (!VALID_EFFORTS.has(profile.default_effort)) {
      throw new Error(`${label}.default_effort is invalid`);
    }
    if (
      !Array.isArray(profile.supported_efforts)
      || !profile.supported_efforts.length
      || profile.supported_efforts.some((effort) => !VALID_EFFORTS.has(effort))
      || new Set(profile.supported_efforts).size !== profile.supported_efforts.length
    ) {
      throw new Error(`${label}.supported_efforts is invalid`);
    }
    if (!profile.supported_efforts.includes(profile.default_effort)) {
      throw new Error(`${label}.default_effort must be supported`);
    }
    profiles.set(profile.model_id, profile);
  }
  for (const cell of plan.cells ?? []) {
    if (cell.runtime !== "codex") continue;
    const profile = profiles.get(cell.model_id);
    if (!profile) {
      throw new Error(`cell ${cell.id ?? "<unknown>"} Codex model is absent from codex_model_effort_contract`);
    }
    if (!profile.supported_efforts.includes(cell.effort)) {
      throw new Error(`cell ${cell.id ?? "<unknown>"} Codex effort is unsupported by pinned model profile`);
    }
  }
  return contract;
}

function validateBudgetControl(value, label, limitField) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`matrix control_contract.${label} must be an object`);
  }
  if (!VALID_BUDGET_MODES.has(value.mode)) {
    throw new Error(`matrix control_contract.${label}.mode is invalid`);
  }
  if (value.mode === "hard-cap") {
    if (!Number.isInteger(value[limitField]) || value[limitField] < 1) {
      throw new Error(`matrix control_contract.${label}.${limitField} must be a positive integer for hard-cap`);
    }
  } else if (value[limitField] !== null) {
    throw new Error(`matrix control_contract.${label}.${limitField} must be null for observed-only`);
  }
}

export function validateControlContract(plan) {
  const control = plan?.control_contract;
  if (!control || typeof control !== "object" || Array.isArray(control)) {
    throw new Error("matrix control_contract is required for schema 0.3");
  }
  if (!VALID_COMPARISON_MODES.has(control.comparison_mode)) {
    throw new Error("matrix control_contract.comparison_mode is invalid");
  }
  if (control.effort_semantics !== "runtime-native-ordinal-not-cross-provider-equivalent") {
    throw new Error("matrix control_contract.effort_semantics must reject cross-provider effort equivalence");
  }
  if (!["explicit-fixed", "runtime-default-frozen"].includes(control.temperature_policy)) {
    throw new Error("matrix control_contract.temperature_policy is invalid");
  }
  if (!Number.isInteger(control.timeout_seconds) || control.timeout_seconds < 1) {
    throw new Error("matrix control_contract.timeout_seconds must be a positive integer");
  }
  if (!Number.isInteger(control.max_concurrency) || control.max_concurrency < 1) {
    throw new Error("matrix control_contract.max_concurrency must be a positive integer");
  }
  if (!["eligible", "descriptive-only"].includes(control.latency_comparison)) {
    throw new Error("matrix control_contract.latency_comparison is invalid");
  }
  if (control.latency_comparison === "eligible" && control.max_concurrency !== 1) {
    throw new Error("matrix latency comparison is eligible only with max_concurrency 1");
  }
  if (control.retry_policy !== "none-primary") {
    throw new Error("matrix control_contract.retry_policy must be none-primary");
  }
  if (control.timeout_policy !== "count-as-valid-failure") {
    throw new Error("matrix control_contract.timeout_policy must count timeouts as valid failures");
  }
  if (control.infrastructure_policy !== "retain-freeze-and-repreregister") {
    throw new Error("matrix control_contract.infrastructure_policy must retain, freeze, and repreregister");
  }
  if (!["balanced-rotation", "fixed-preregistered"].includes(control.task_order_policy)) {
    throw new Error("matrix control_contract.task_order_policy is invalid");
  }
  const admissionNormalizationPolicy = control.admission_normalization_policy
    ?? "exact-task-cross-arm";
  if (!VALID_ADMISSION_NORMALIZATION_POLICIES.has(admissionNormalizationPolicy)) {
    throw new Error("matrix control_contract.admission_normalization_policy is invalid");
  }
  if (
    [
      "cross-task-reliability",
      "multi-task-repeated-reliability",
      "paired-cross-task-comparison",
      "complete-block-effort-scaling",
    ].includes(admissionNormalizationPolicy)
    && control.task_order_policy !== "fixed-preregistered"
  ) {
    throw new Error("matrix cross-task normalization requires fixed-preregistered task order");
  }
  if (control.pacing !== undefined) {
    const pacing = control.pacing;
    if (!pacing || typeof pacing !== "object" || Array.isArray(pacing)) {
      throw new Error("matrix control_contract.pacing must be an object");
    }
    if (!VALID_PACING_POLICIES.has(pacing.policy)) {
      throw new Error("matrix control_contract.pacing.policy is invalid");
    }
    if (!Number.isInteger(pacing.inter_cell_delay_seconds) || pacing.inter_cell_delay_seconds < 0) {
      throw new Error("matrix control_contract.pacing.inter_cell_delay_seconds must be a non-negative integer");
    }
    if (pacing.policy === "none" && pacing.inter_cell_delay_seconds !== 0) {
      throw new Error("matrix control_contract.pacing none policy requires zero delay");
    }
    if (pacing.policy === "fixed-inter-cell" && pacing.inter_cell_delay_seconds < 1) {
      throw new Error("matrix control_contract.pacing fixed-inter-cell policy requires a positive delay");
    }
    if (pacing.inter_cell_delay_seconds > 3600) {
      throw new Error("matrix control_contract.pacing delay must not exceed 3600 seconds");
    }
    if (pacing.applies_between_cells_only !== true) {
      throw new Error("matrix control_contract.pacing must apply between cells only");
    }
    if (pacing.counts_toward_cell_wall_time !== false) {
      throw new Error("matrix control_contract.pacing must stay outside per-cell wall time");
    }
  }

  validateBudgetControl(control.token_budget, "token_budget", "limit_tokens");
  if (control.token_budget.usage_required !== true) {
    throw new Error("matrix control_contract.token_budget.usage_required must be true");
  }
  const requiredComponents = ["input", "cached_input", "output", "reasoning_output"];
  if (
    !Array.isArray(control.token_budget.account_components)
    || requiredComponents.some((component) => !control.token_budget.account_components.includes(component))
  ) {
    throw new Error("matrix control_contract.token_budget.account_components is incomplete");
  }
  if (control.token_budget.cached_input_separate !== true) {
    throw new Error("matrix control_contract.token_budget.cached_input_separate must be true");
  }
  if (control.token_budget.cost_policy !== "provider-reported-or-pinned-price-equivalent") {
    throw new Error("matrix control_contract.token_budget.cost_policy is invalid");
  }
  validateBudgetControl(control.step_budget, "step_budget", "limit_steps");

  for (const cell of plan.cells ?? []) {
    if (cell.timeout_seconds !== control.timeout_seconds) {
      throw new Error(`cell ${cell.id ?? "<unknown>"}.timeout_seconds must match control_contract`);
    }
  }
  return control;
}

export function validateRunMatrixPlan(plan) {
  if (!["0.1", "0.2", "0.3"].includes(plan?.schema_version)) {
    throw new Error("matrix schema_version must be 0.1, 0.2, or 0.3");
  }
  if (["0.2", "0.3"].includes(plan.schema_version)) {
    for (const field of ["suite_version", "product_version", "execution_purpose"]) {
      if (typeof plan[field] !== "string" || !plan[field]) {
        throw new Error(`matrix ${field} is required for schema ${plan.schema_version}`);
      }
    }
  }
  if (plan.schema_version === "0.3") {
    if (!VALID_BENCHMARK_FAMILIES.has(plan.family)) {
      throw new Error("matrix family is required for schema 0.3");
    }
    validateControlContract(plan);
  }
  validateCodexModelEffortContract(plan);
  if (typeof plan.experiment_id !== "string" || !plan.experiment_id) {
    throw new Error("matrix experiment_id is required");
  }
  if (typeof plan.output_root !== "string" || !isAbsolute(plan.output_root)) {
    throw new Error("matrix output_root must be an absolute path");
  }
  if (
    plan.vendors_root !== undefined
    && (typeof plan.vendors_root !== "string" || !plan.vendors_root || !isAbsolute(plan.vendors_root))
  ) {
    throw new Error("matrix vendors_root must be an absolute path");
  }
  if (
    plan.attribution_scope !== undefined
    && !VALID_ATTRIBUTION_SCOPES.has(plan.attribution_scope)
  ) {
    throw new Error("matrix attribution_scope is invalid");
  }
  if (!Array.isArray(plan.cells) || !plan.cells.length) throw new Error("matrix cells are required");

  if (plan.candidate_preflight_contract !== undefined) {
    const contract = plan.candidate_preflight_contract;
    if (!contract || typeof contract !== "object" || Array.isArray(contract)) {
      throw new Error("matrix candidate_preflight_contract must be an object");
    }
    for (const field of [
      "required",
      "complete_candidate_bytes",
      "same_static_evaluator",
      "passed_receipt_required_before_product_edit",
      "candidate_sha256_must_equal_final_product_sha256",
      "source_contract_sha256_must_match",
      "sealed_inventory_sha256_must_match",
    ]) {
      if (contract[field] !== true) {
        throw new Error(`matrix candidate_preflight_contract.${field} must be true`);
      }
    }
  }

  if (plan.harness_delivery_gates !== undefined) {
    const gates = plan.harness_delivery_gates;
    if (!gates || typeof gates !== "object" || Array.isArray(gates)) {
      throw new Error("matrix harness_delivery_gates must be an object");
    }
    if (!Number.isInteger(gates.first_product_write_ms_max) || gates.first_product_write_ms_max < 1) {
      throw new Error("matrix harness_delivery_gates.first_product_write_ms_max must be a positive integer");
    }
    if (
      gates.variant_kinds !== undefined
      && (
        !Array.isArray(gates.variant_kinds)
        || !gates.variant_kinds.length
        || gates.variant_kinds.some((kind) => typeof kind !== "string" || !kind)
      )
    ) {
      throw new Error("matrix harness_delivery_gates.variant_kinds must be a non-empty string array");
    }
    if (
      gates.last_advisory_to_first_product_write_ms_max !== undefined
      && (
        !Number.isInteger(gates.last_advisory_to_first_product_write_ms_max)
        || gates.last_advisory_to_first_product_write_ms_max < 1
      )
    ) {
      throw new Error("matrix harness_delivery_gates.last_advisory_to_first_product_write_ms_max must be a positive integer");
    }
    if (
      gates.require_targeted_first_product_edit !== undefined
      && typeof gates.require_targeted_first_product_edit !== "boolean"
    ) {
      throw new Error("matrix harness_delivery_gates.require_targeted_first_product_edit must be boolean");
    }
    if (typeof gates.forbid_replacement_verifier !== "boolean") {
      throw new Error("matrix harness_delivery_gates.forbid_replacement_verifier must be boolean");
    }
  }

  if (plan.proof_execution_gates !== undefined) {
    const gates = plan.proof_execution_gates;
    if (!gates || typeof gates !== "object" || Array.isArray(gates)) {
      throw new Error("matrix proof_execution_gates must be an object");
    }
    if (
      !Array.isArray(gates.system_ids)
      || !gates.system_ids.length
      || gates.system_ids.some((id) => typeof id !== "string" || !id)
    ) {
      throw new Error("matrix proof_execution_gates.system_ids must be a non-empty string array");
    }
    if (gates.enforcement !== "promotion-report") {
      throw new Error("matrix proof_execution_gates.enforcement must be promotion-report");
    }
    if (gates.require_analyzable !== true) {
      throw new Error("matrix proof_execution_gates.require_analyzable must be true");
    }
    for (const field of [
      "max_browser_recovery_count",
      "max_duplicate_static_closure_count",
      "max_verification_after_ready_count",
      "max_document_overflow_px",
      "max_passive_protected_text_scroll_containers",
    ]) {
      if (gates[field] !== undefined && (!Number.isInteger(gates[field]) || gates[field] < 0)) {
        throw new Error(`matrix proof_execution_gates.${field} must be a non-negative integer`);
      }
    }
    for (const field of [
      "require_closed_reflow_artifact",
      "require_measured_browser_attempt",
      "require_character_range_line_oracle",
      "require_actual_zoom_observation",
      "require_exact_named_consumer_attachment",
      "forbid_launched_browser",
      "require_locked_typography",
    ]) {
      if (gates[field] !== undefined && typeof gates[field] !== "boolean") {
        throw new Error(`matrix proof_execution_gates.${field} must be boolean`);
      }
    }
    if (
      gates.minimum_inline_fit_reserve_css_px !== undefined
      && (!Number.isFinite(gates.minimum_inline_fit_reserve_css_px) || gates.minimum_inline_fit_reserve_css_px < 0)
    ) throw new Error("matrix proof_execution_gates.minimum_inline_fit_reserve_css_px must be non-negative");
    if (
      gates.shipped_runner_system_ids !== undefined
      && (
        !Array.isArray(gates.shipped_runner_system_ids)
        || !gates.shipped_runner_system_ids.length
        || gates.shipped_runner_system_ids.some((id) => typeof id !== "string" || !id)
      )
    ) throw new Error("matrix proof_execution_gates.shipped_runner_system_ids must be a non-empty string array");
    if (
      gates.shipped_runner_command_suffix !== undefined
      && (typeof gates.shipped_runner_command_suffix !== "string" || !gates.shipped_runner_command_suffix)
    ) throw new Error("matrix proof_execution_gates.shipped_runner_command_suffix must be a non-empty string");
  }

  if (plan.host_policy_comparison !== undefined && plan.shared_host_policy !== undefined) {
    throw new Error("matrix cannot combine host_policy_comparison and shared_host_policy");
  }

  if (plan.browser_execution_contract !== undefined) {
    const browser = plan.browser_execution_contract;
    if (!browser || typeof browser !== "object" || Array.isArray(browser)) {
      throw new Error("matrix browser_execution_contract must be an object");
    }
    if (browser.require_browser_proof !== true) {
      throw new Error("matrix browser_execution_contract.require_browser_proof must be true");
    }
    if (browser.runtime_dir_shared !== true || browser.exact_named_socket !== true) {
      throw new Error("matrix browser_execution_contract must require shared runtime and exact named socket");
    }
  }

  if (plan.host_policy_comparison !== undefined) {
    const comparison = plan.host_policy_comparison;
    if (!comparison || typeof comparison !== "object" || Array.isArray(comparison)) {
      throw new Error("matrix host_policy_comparison must be an object");
    }
    if (comparison.target_runtime !== "codex") {
      throw new Error("matrix host_policy_comparison.target_runtime must be codex");
    }
    if (comparison.sole_arm_delta !== "project-proof-policy-installation") {
      throw new Error("matrix host_policy_comparison.sole_arm_delta is invalid");
    }
    if (comparison.require_installed_state !== true) {
      throw new Error("matrix host_policy_comparison.require_installed_state must be true");
    }
    for (const field of ["require_delivery_ready", "require_browser_attempt"]) {
      if (comparison[field] !== undefined && typeof comparison[field] !== "boolean") {
        throw new Error(`matrix host_policy_comparison.${field} must be boolean`);
      }
    }
    for (const field of [
      "max_unblocked_browser_recovery_count",
      "max_unblocked_duplicate_static_closure_count",
      "max_unblocked_verification_after_ready_count",
    ]) {
      if (!Number.isInteger(comparison[field]) || comparison[field] < 0) {
        throw new Error(`matrix host_policy_comparison.${field} must be a non-negative integer`);
      }
    }
  }

  if (plan.shared_host_policy !== undefined) {
    const shared = plan.shared_host_policy;
    if (!shared || typeof shared !== "object" || Array.isArray(shared)) {
      throw new Error("matrix shared_host_policy must be an object");
    }
    if (shared.target_runtime !== "codex") {
      throw new Error("matrix shared_host_policy.target_runtime must be codex");
    }
    if (shared.mode !== "installed-opt-in") {
      throw new Error("matrix shared_host_policy.mode must be installed-opt-in");
    }
    if (shared.require_installed_state !== true) {
      throw new Error("matrix shared_host_policy.require_installed_state must be true");
    }
    for (const field of ["require_delivery_ready", "require_browser_attempt"]) {
      if (shared[field] !== undefined && typeof shared[field] !== "boolean") {
        throw new Error(`matrix shared_host_policy.${field} must be boolean`);
      }
    }
    for (const field of [
      "max_unblocked_browser_recovery_count",
      "max_unblocked_duplicate_static_closure_count",
      "max_unblocked_verification_after_ready_count",
    ]) {
      if (!Number.isInteger(shared[field]) || shared[field] < 0) {
        throw new Error(`matrix shared_host_policy.${field} must be a non-negative integer`);
      }
    }
  }

  const ids = new Set();
  const pairKeys = new Set();
  for (const [index, cell] of plan.cells.entries()) {
    const label = `cell ${index + 1}`;
    for (const field of ["id", "task_id", "variant_id", "system_id", "runtime", "model_id", "effort"]) {
      if (typeof cell?.[field] !== "string" || !cell[field]) throw new Error(`${label}.${field} is required`);
    }
    if (!/^[a-z0-9][a-z0-9-]*$/.test(cell.id)) throw new Error(`${label}.id is invalid`);
    if (ids.has(cell.id)) throw new Error(`duplicate matrix cell id: ${cell.id}`);
    ids.add(cell.id);
    if (!VALID_RUNTIMES.has(cell.runtime)) throw new Error(`${label}.runtime is invalid`);
    if (!VALID_EFFORTS.has(cell.effort)) throw new Error(`${label}.effort is invalid`);
    if (!Number.isInteger(cell.trial_index) || cell.trial_index < 1) {
      throw new Error(`${label}.trial_index must be a positive integer`);
    }
    if (!Number.isInteger(cell.timeout_seconds) || cell.timeout_seconds < 1) {
      throw new Error(`${label}.timeout_seconds must be a positive integer`);
    }
    if (cell.allow_dirty_source !== undefined && typeof cell.allow_dirty_source !== "boolean") {
      throw new Error(`${label}.allow_dirty_source must be boolean`);
    }
    if (plan.host_policy_comparison) {
      if (!HOST_POLICY_MODES.includes(cell.host_policy_mode)) {
        throw new Error(`${label}.host_policy_mode is invalid`);
      }
      if (cell.runtime !== plan.host_policy_comparison.target_runtime) {
        throw new Error(`${label}.runtime must match host_policy_comparison.target_runtime`);
      }
    } else if (plan.shared_host_policy) {
      if (cell.host_policy_mode !== plan.shared_host_policy.mode) {
        throw new Error(`${label}.host_policy_mode must match shared_host_policy.mode`);
      }
      if (cell.runtime !== plan.shared_host_policy.target_runtime) {
        throw new Error(`${label}.runtime must match shared_host_policy.target_runtime`);
      }
    } else if (cell.host_policy_mode !== undefined) {
      throw new Error(`${label}.host_policy_mode requires matrix host policy configuration`);
    }
    const completeBlockEffortScaling = plan.control_contract?.admission_normalization_policy
      === "complete-block-effort-scaling";
    const pairKey = completeBlockEffortScaling
      ? `${cell.task_id}\0${cell.trial_index}\0${cell.system_id}\0${cell.model_id}\0${cell.effort}`
      : `${cell.task_id}\0${cell.trial_index}\0${cell.system_id}`;
    if (pairKeys.has(pairKey)) {
      const tuple = completeBlockEffortScaling
        ? "task/trial/system/model/effort"
        : "task/trial/system";
      throw new Error(`duplicate ${tuple} cell: ${pairKey.replaceAll("\0", "/")}`);
    }
    pairKeys.add(pairKey);
  }
  validateCompleteBlockEffortScalingPlan(plan);
  if (plan.control_contract?.admission_normalization_policy === "cross-task-reliability") {
    const taskIds = plan.cells.map((cell) => cell.task_id);
    if (taskIds.length < 2 || new Set(taskIds).size !== taskIds.length) {
      throw new Error("matrix cross-task reliability requires at least two unique tasks");
    }
    const lockedTasks = plan.task_lock_contract?.tasks;
    if (!Array.isArray(lockedTasks) || lockedTasks.length !== taskIds.length) {
      throw new Error("matrix cross-task reliability requires one task lock per cell");
    }
    const lockedIds = lockedTasks.map((task) => task?.task_id);
    if (JSON.stringify(lockedIds) !== JSON.stringify(taskIds)) {
      throw new Error("matrix cross-task reliability task locks must match fixed cell order");
    }
    for (const [index, task] of lockedTasks.entries()) {
      for (const field of [
        "task_tree_sha256",
        "prompt_sha256",
        "starter_sha256",
        "baseline_evidence_sha256",
        "source_contract_sha256",
      ]) {
        if (typeof task?.[field] !== "string" || !/^[a-f0-9]{64}$/.test(task[field])) {
          throw new Error(`matrix cross-task reliability task lock ${index + 1}.${field} is invalid`);
        }
      }
    }
  }
  if (plan.control_contract?.admission_normalization_policy === "multi-task-repeated-reliability") {
    const taskOrder = [...new Set(plan.cells.map((cell) => cell.task_id))];
    if (taskOrder.length < 2) {
      throw new Error("matrix multi-task repeated reliability requires at least two unique tasks");
    }
    const armSignatures = new Set(plan.cells.map((cell) => JSON.stringify({
      variant_id: cell.variant_id,
      system_id: cell.system_id,
      runtime: cell.runtime,
      model_id: cell.model_id,
      effort: cell.effort,
    })));
    if (armSignatures.size !== 1) {
      throw new Error("matrix multi-task repeated reliability requires one shared arm");
    }
    const trialSets = taskOrder.map((taskId) => plan.cells
      .filter((cell) => cell.task_id === taskId)
      .map((cell) => cell.trial_index)
      .sort((left, right) => left - right));
    if (
      trialSets.some((trials) => !trials.length || new Set(trials).size !== trials.length)
      || new Set(trialSets.map((trials) => JSON.stringify(trials))).size !== 1
    ) {
      throw new Error("matrix multi-task repeated reliability requires identical positive trial sets per task");
    }
    const lockedTasks = plan.task_lock_contract?.tasks;
    if (!Array.isArray(lockedTasks) || lockedTasks.length !== taskOrder.length) {
      throw new Error("matrix multi-task repeated reliability requires one task lock per unique task");
    }
    if (JSON.stringify(lockedTasks.map((task) => task?.task_id)) !== JSON.stringify(taskOrder)) {
      throw new Error("matrix multi-task repeated reliability task locks must match first task occurrence order");
    }
    for (const [index, task] of lockedTasks.entries()) {
      for (const field of [
        "task_tree_sha256",
        "prompt_sha256",
        "starter_sha256",
        "baseline_evidence_sha256",
        "source_contract_sha256",
      ]) {
        if (typeof task?.[field] !== "string" || !SHA256_PATTERN.test(task[field])) {
          throw new Error(`matrix multi-task repeated reliability task lock ${index + 1}.${field} is invalid`);
        }
      }
    }
  }
  if (plan.control_contract?.admission_normalization_policy === "paired-cross-task-comparison") {
    const taskOrder = [...new Set(plan.cells.map((cell) => cell.task_id))];
    if (taskOrder.length < 2) {
      throw new Error("matrix paired cross-task comparison requires at least two unique tasks");
    }
    const groups = new Map();
    for (const cell of plan.cells) {
      const key = `${cell.task_id}\0${cell.trial_index}`;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(cell);
    }
    const armSignatures = [...groups.values()].map((group) => group
      .map((cell) => `${cell.variant_id}\0${cell.system_id}`)
      .sort());
    if (armSignatures.some((arms) => arms.length < 2 || new Set(arms).size !== arms.length)) {
      throw new Error("matrix paired cross-task comparison requires at least two distinct arms per task/trial");
    }
    if (new Set(armSignatures.map((arms) => JSON.stringify(arms))).size !== 1) {
      throw new Error("matrix paired cross-task comparison requires the same arms for every task/trial");
    }
    const lockedTasks = plan.task_lock_contract?.tasks;
    if (!Array.isArray(lockedTasks) || lockedTasks.length !== taskOrder.length) {
      throw new Error("matrix paired cross-task comparison requires one task lock per unique task");
    }
    if (JSON.stringify(lockedTasks.map((task) => task?.task_id)) !== JSON.stringify(taskOrder)) {
      throw new Error("matrix paired cross-task comparison task locks must match first task occurrence order");
    }
    for (const [index, task] of lockedTasks.entries()) {
      for (const field of [
        "task_tree_sha256",
        "prompt_sha256",
        "starter_sha256",
        "baseline_evidence_sha256",
        "source_contract_sha256",
      ]) {
        if (typeof task?.[field] !== "string" || !/^[a-f0-9]{64}$/.test(task[field])) {
          throw new Error(`matrix paired cross-task comparison task lock ${index + 1}.${field} is invalid`);
        }
      }
    }
  }
  if (plan.proof_execution_gates) {
    const targeted = plan.cells.filter((cell) => plan.proof_execution_gates.system_ids.includes(cell.system_id));
    if (!targeted.length) {
      throw new Error("matrix proof_execution_gates must target at least one cell");
    }
    const knownSystems = new Set(plan.cells.map((cell) => cell.system_id));
    if (plan.proof_execution_gates.system_ids.some((id) => !knownSystems.has(id))) {
      throw new Error("matrix proof_execution_gates.system_ids contains an unknown system");
    }
    if (plan.proof_execution_gates.shipped_runner_system_ids?.some((id) => (
      !knownSystems.has(id) || !plan.proof_execution_gates.system_ids.includes(id)
    ))) {
      throw new Error("matrix proof_execution_gates.shipped_runner_system_ids must target known gated systems");
    }
    if (targeted.some((cell) => !["codex", "cursor"].includes(cell.runtime))) {
      throw new Error("matrix proof_execution_gates supports only codex or cursor cells");
    }
  }
  if (plan.host_policy_comparison) {
    const modes = Object.fromEntries(HOST_POLICY_MODES.map((mode) => [
      mode,
      plan.cells.filter((cell) => cell.host_policy_mode === mode),
    ]));
    if (HOST_POLICY_MODES.some((mode) => modes[mode].length === 0)) {
      throw new Error("matrix host_policy_comparison must include both policy modes");
    }
    const pairing = (cell) => JSON.stringify({
      task_id: cell.task_id,
      variant_id: cell.variant_id,
      model_id: cell.model_id,
      effort: cell.effort,
      trial_index: cell.trial_index,
      timeout_seconds: cell.timeout_seconds,
    });
    const observed = modes["controller-observation"].map(pairing).sort();
    const installed = modes["installed-opt-in"].map(pairing).sort();
    if (JSON.stringify(observed) !== JSON.stringify(installed)) {
      throw new Error("matrix host_policy_comparison arms must be exactly paired");
    }
  }
  return plan;
}

export function prepareArgsForCell(cell, workspace, {
  vendorsRoot = null,
  taskSourceCommit = null,
  authSnapshot = null,
} = {}) {
  return [
    "--task", cell.task_id,
    "--variant", cell.variant_id,
    "--runtime", cell.runtime,
    ...(vendorsRoot ? ["--vendors", vendorsRoot] : []),
    ...(taskSourceCommit ? ["--task-source-commit", taskSourceCommit] : []),
    ...(authSnapshot ? [
      "--auth-json-source", authSnapshot.auth_json_source_path,
      "--auth-json-sha256", authSnapshot.auth_json_sha256,
      "--auth-json-bytes", String(authSnapshot.auth_json_bytes),
    ] : []),
    "--out", workspace,
    ...(cell.allow_dirty_source === true ? ["--allow-dirty-source"] : []),
  ];
}

export function sealPreparedGitBaseline(workspace) {
  const root = resolve(workspace);
  const gitRoot = join(root, ".git");
  if (!existsSync(gitRoot)) throw new Error(`prepared workspace is not a Git root: ${root}`);
  writeFileSync(
    join(gitRoot, "info", "exclude"),
    "\n# OmD benchmark runtime artifacts\n.benchmark/\n.omd/\n.t/\n",
    { encoding: "utf8", flag: "a" },
  );
  execFileSync("git", ["-C", root, "add", "--all"], { stdio: "pipe" });
  execFileSync("git", [
    "-C", root,
    "-c", "user.name=OmD Benchmark",
    "-c", "user.email=benchmark@local.invalid",
    "commit", "--quiet", "--message", "prepared benchmark baseline",
  ], { stdio: "pipe" });
  execFileSync("git", ["-C", root, "checkout", "--quiet", "--detach"], { stdio: "pipe" });
  const status = execFileSync(
    "git",
    ["-C", root, "status", "--porcelain=v1", "--untracked-files=all"],
    { encoding: "utf8" },
  );
  if (status.trim()) throw new Error(`prepared Git baseline is dirty at ${root}`);
  return {
    commit: execFileSync("git", ["-C", root, "rev-parse", "HEAD"], { encoding: "utf8" }).trim(),
    detached: true,
    clean: true,
  };
}

export function prepareRunMatrix(plan, {
  outputRoot = plan.output_root,
  planPath = null,
  expectedReceiptPath = null,
} = {}) {
  validateRunMatrixPlan(plan);
  const completeBlock = validateCompleteBlockEffortScalingPlan(plan);
  const root = resolve(outputRoot);
  if (completeBlock && root !== resolve(plan.output_root)) {
    throw new Error("complete-block preparation output root must match the preregistered plan");
  }
  const preregistrationAuthority = completeBlock
    ? readPreregisteredPlanAuthority(plan, { planPath, expectedReceiptPath })
    : null;
  if (existsSync(root)) throw new Error(`refusing to overwrite an existing matrix root: ${root}`);
  mkdirSync(root, { recursive: true });

  const objectiveEvaluator = currentObjectiveMethodology();
  const lockedPlan = completeBlock
    ? plan
    : { ...plan, output_root: root, objective_evaluator: objectiveEvaluator };
  const lockedPlanPath = join(root, "RUN-MATRIX.locked.json");
  if (completeBlock) {
    writeFileSync(lockedPlanPath, preregistrationAuthority.plan_bytes);
    writeFileSync(
      join(root, plan.preregistration_authority_contract.receipt_ref),
      preregistrationAuthority.receipt_bytes,
    );
  } else {
    writeJson(lockedPlanPath, lockedPlan);
  }
  const lockedPlanSha256 = sha256(readFileSync(lockedPlanPath));
  if (completeBlock && lockedPlanSha256 !== preregistrationAuthority.plan_sha256) {
    throw new Error("complete-block locked plan no longer matches preregistration receipt");
  }
  const state = {
    schema_version: plan.schema_version,
    experiment_id: plan.experiment_id,
    suite_version: plan.suite_version ?? null,
    product_version: plan.product_version ?? null,
    execution_purpose: plan.execution_purpose ?? null,
    status: "preparing",
    output_root: root,
    scheduled_cells: plan.cells.length,
    prepared_cells: 0,
    locked_plan_sha256: lockedPlanSha256,
    preregistration_receipt_sha256: preregistrationAuthority?.receipt_sha256 ?? null,
    preregistration_plan_sha256: preregistrationAuthority?.plan_sha256 ?? null,
    task_set_sha256: completeBlock?.task_set_sha256 ?? null,
    schedule_sha256: completeBlock?.schedule_sha256 ?? null,
    objective_evaluator: objectiveEvaluator,
    cells: [],
  };
  writeJson(join(root, "matrix-state.json"), state);

  const prepareScript = resolve(fileURLToPath(new URL("./prepare-sandbox.mjs", import.meta.url)));
  for (const cell of plan.cells) {
    const workspace = join(root, cell.id);
    try {
      execFileSync(process.execPath, [
        prepareScript,
        ...prepareArgsForCell(cell, workspace, {
          vendorsRoot: plan.vendors_root ?? null,
          taskSourceCommit: completeBlock ? plan.task_lock_contract.source_commit : null,
          authSnapshot: completeBlock ? plan.codex_catalog_snapshot_contract : null,
        }),
      ], {
        cwd: resolve(fileURLToPath(new URL("../../..", import.meta.url))),
        stdio: "pipe",
      });
      const manifest = readJson(join(workspace, ".benchmark", "manifest.json"));
      assertObjectiveMethodologyPin(manifest.objective_evaluator, `${cell.id}:manifest`);
      const taskLock = plan.task_lock_contract?.tasks?.find((task) => task.task_id === cell.task_id)
        ?? null;
      const sourceObservation = manifest.task.source_observation ?? null;
      const observedTaskTreeSha256 = sourceObservation?.working_tree?.sha256 ?? null;
      const preparedAuthPath = join(workspace, ".codex", "auth.json");
      const preparedAuthInfo = completeBlock && existsSync(preparedAuthPath)
        ? lstatSync(preparedAuthPath)
        : null;
      if (completeBlock && (
        !taskLock
        || sourceObservation?.observer !== "prepare-sandbox-independent-task-root-byte-mode-v1"
        || sourceObservation?.source_commit !== taskLock.source_commit
        || sourceObservation?.git_tree_oid !== taskLock.git_tree_oid
        || sourceObservation?.exact_working_tree_match !== true
        || sourceObservation?.committed_tree?.sha256 !== taskLock.task_tree_sha256
        || observedTaskTreeSha256 !== taskLock.task_tree_sha256
        || JSON.stringify(sourceObservation?.working_tree?.files)
          !== JSON.stringify(taskLock.task_tree_files)
        || JSON.stringify(sourceObservation?.committed_tree?.files)
          !== JSON.stringify(taskLock.task_tree_files)
        || preparedAuthInfo?.isSymbolicLink() === true
        || preparedAuthInfo?.isFile() !== true
        || preparedAuthInfo.size !== plan.codex_catalog_snapshot_contract.auth_json_bytes
        || sha256(readFileSync(preparedAuthPath))
          !== plan.codex_catalog_snapshot_contract.auth_json_sha256
        || manifest.runtime_auth_snapshot?.source_mode !== "immutable-snapshot-only"
        || manifest.runtime_auth_snapshot?.copy_mode !== "isolated-regular-file"
        || manifest.runtime_auth_snapshot?.sha256
          !== plan.codex_catalog_snapshot_contract.auth_json_sha256
        || manifest.runtime_auth_snapshot?.bytes
          !== plan.codex_catalog_snapshot_contract.auth_json_bytes
        || manifest.runtime_auth_snapshot?.mutable_fallback_allowed !== false
        || manifest.runtime_auth_snapshot?.verified_before_provider_execution !== true
        || manifest.task.baseline_provenance?.sha256 !== taskLock.baseline_provenance_sha256
        || JSON.stringify(manifest.task.baseline_provenance?.methodology)
          !== JSON.stringify(taskLock.baseline_methodology)
      )) {
        throw new Error(`${cell.id}:prepared task tree authority is missing or inconsistent`);
      }
      manifest.task.observed_task_tree_sha256 = observedTaskTreeSha256;
      manifest.task.source_commit = sourceObservation?.source_commit ?? null;
      manifest.task.git_tree_oid = sourceObservation?.git_tree_oid ?? null;
      writeJson(join(workspace, ".benchmark", "manifest.json"), manifest);
      const hostPolicyConfig = plan.host_policy_comparison ?? plan.shared_host_policy ?? null;
      const hostPolicy = hostPolicyConfig
        ? prepareHostPolicyCell(
            resolve(fileURLToPath(new URL("../../..", import.meta.url))),
            workspace,
            cell.host_policy_mode,
          )
        : null;
      if (hostPolicy) {
        manifest.safety.hooks_enabled = hostPolicy.hooks_enabled;
        manifest.host_policy = hostPolicy;
        manifest.workspace.product_ignore = [
          ...new Set([...(manifest.workspace.product_ignore ?? []), ".git"]),
        ];
        writeJson(join(workspace, ".benchmark", "manifest.json"), manifest);
      }
      const matrixCell = {
        ...cell,
        execution_control: plan.control_contract ?? null,
        proof_execution_gate: plan.proof_execution_gates?.system_ids.includes(cell.system_id)
          ? plan.proof_execution_gates
          : null,
        attribution_scope: plan.attribution_scope ?? "provider-observed-only",
        host_policy: hostPolicy,
        host_policy_gate: hostPolicy ? hostPolicyConfig : null,
        browser_execution: plan.browser_execution_contract ?? null,
        workspace,
        task_version: manifest.task.version,
        task_prompt_sha256: manifest.task.core_prompt_sha256,
        starter_sha256: manifest.task.starter_sha256,
        observed_task_tree_sha256: manifest.task.observed_task_tree_sha256,
        task_source_commit: manifest.task.source_commit,
        task_git_tree_oid: manifest.task.git_tree_oid,
        baseline_provenance_sha256: manifest.task.baseline_provenance?.sha256 ?? null,
        baseline_methodology: manifest.task.baseline_provenance?.methodology ?? null,
        skill_sha256: manifest.skill?.sha256 ?? null,
        agent_bundle_sha256: manifest.agents?.sha256 ?? null,
        source_commit: manifest.skill?.source_commit ?? null,
        source_publishable: manifest.skill?.source_attestation?.publishable ?? true,
        objective_evaluator: objectiveEvaluator,
      };
      writeJson(join(workspace, ".benchmark", "matrix-cell.json"), matrixCell);
      if (hostPolicy) {
        manifest.workspace.git_baseline = sealPreparedGitBaseline(workspace);
        const preparedTree = treeManifest(workspace, { ignore: [".benchmark"] });
        const preparedProductTree = treeManifest(workspace, {
          ignore: manifest.workspace.product_ignore,
        });
        manifest.workspace.initial_sha256 = preparedTree.sha256;
        manifest.workspace.initial_files = preparedTree.files.length;
        manifest.workspace.product_initial_sha256 = preparedProductTree.sha256;
        manifest.workspace.product_initial_files = preparedProductTree.files;
        writeJson(join(workspace, ".benchmark", "manifest.json"), manifest);
      }
      state.cells.push({ id: cell.id, status: "prepared", workspace });
      state.prepared_cells += 1;
      writeJson(join(root, "matrix-state.json"), state);
    } catch (error) {
      state.status = "failed-preparation";
      state.cells.push({
        id: cell.id,
        status: "failed-preparation",
        workspace,
        error: error instanceof Error ? error.message : String(error),
      });
      writeJson(join(root, "matrix-state.json"), state);
      throw error;
    }
  }

  state.status = "prepared";
  writeJson(join(root, "matrix-state.json"), state);
  return state;
}

async function main() {
  const args = parseArgs();
  const planPath = args.get("plan") ? resolve(String(args.get("plan"))) : null;
  const outputRoot = args.get("out") ? resolve(String(args.get("out"))) : null;
  if (!planPath) {
    console.error("usage: prepare-run-matrix.mjs --plan <matrix.json> [--preregistration-receipt <receipt.json>] [--out <new-root>]");
    process.exitCode = 2;
    return;
  }
  const plan = readJson(planPath);
  const expectedReceiptPath = args.get("preregistration-receipt")
    ? resolve(String(args.get("preregistration-receipt")))
    : null;
  const state = prepareRunMatrix(plan, {
    ...(outputRoot ? { outputRoot } : {}),
    planPath,
    expectedReceiptPath,
  });
  console.log(JSON.stringify(state, null, 2));
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) {
  await main();
}
