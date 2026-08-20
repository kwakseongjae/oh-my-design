#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import {
  existsSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  realpathSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { dirname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import {
  benchRoot,
  parseArgs,
  repoRoot,
  sha256,
  treeManifest,
  writeJson,
} from "./_lib.mjs";
import {
  assertObjectiveMethodologyPin,
  currentObjectiveMethodology,
} from "./objective-methodology-contract.mjs";
import { validateRunMatrixPlan } from "./prepare-run-matrix.mjs";
import {
  validateOmdReflowBaselineEvidence,
  validateTaskContract,
} from "./task-contract.mjs";
import { inspectImmutableModelCatalogSource } from "./codex-browser-sandbox-contract.mjs";

const SHA256_PATTERN = /^[a-f0-9]{64}$/;
const COMMIT_PATTERN = /^[a-f0-9]{40,64}$/;
export const CODEX_EFFORT_SWEEP_PREREGISTRATION_RECEIPT_REF =
  "PREREGISTRATION.receipt.json";

export const CODEX_EFFORT_SWEEP_TASKS = Object.freeze([
  Object.freeze({ label: "A", task_id: "pollen-slide-accession-v0.1", cell_slug: "pollen" }),
  Object.freeze({ label: "B", task_id: "seismic-core-dispatch-v0.1", cell_slug: "seismic" }),
  Object.freeze({ label: "C", task_id: "oral-history-reel-return-v0.1", cell_slug: "oral-history" }),
]);

const EXPECTED_CATALOG_PROFILES = Object.freeze([
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

export const CODEX_EFFORT_SWEEP_BASE_PAIR_ORDER = Object.freeze([
  "gpt-5.6-luna/medium",
  "gpt-5.6-terra/high",
  "gpt-5.6-sol/max",
  "gpt-5.6-luna/max",
  "gpt-5.6-terra/low",
  "gpt-5.6-sol/medium",
  "gpt-5.6-luna/low",
  "gpt-5.6-terra/max",
  "gpt-5.6-sol/ultra",
  "gpt-5.6-luna/xhigh",
  "gpt-5.6-terra/medium",
  "gpt-5.6-sol/low",
  "gpt-5.6-luna/high",
  "gpt-5.6-terra/ultra",
  "gpt-5.6-sol/xhigh",
  "gpt-5.6-terra/xhigh",
  "gpt-5.6-sol/high",
]);

export const CODEX_EFFORT_SWEEP_WAVES = Object.freeze([
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

function requireNonEmptyString(value, label) {
  if (typeof value !== "string" || !value.trim()) throw new Error(`${label} is required`);
  return value;
}

function requireSha256(value, label) {
  if (typeof value !== "string" || !SHA256_PATTERN.test(value)) {
    throw new Error(`${label} must be a lowercase SHA-256`);
  }
  return value;
}

function requireCommit(value, label) {
  if (typeof value !== "string" || !COMMIT_PATTERN.test(value)) {
    throw new Error(`${label} must be a 40-64 character lowercase commit hash`);
  }
  return value;
}

function requireAbsolutePath(value, label) {
  requireNonEmptyString(value, label);
  if (!isAbsolute(value)) throw new Error(`${label} must be an absolute path`);
  return resolve(value);
}

function immutableRegularFileSnapshot(path, label) {
  const absolute = requireAbsolutePath(path, label);
  if (!existsSync(absolute)) throw new Error(`${label} not found: ${absolute}`);
  const info = lstatSync(absolute);
  if (info.isSymbolicLink() || !info.isFile()) {
    throw new Error(`${label} must be an immutable regular-file snapshot`);
  }
  const bytes = readFileSync(absolute);
  return { path: absolute, sha256: sha256(bytes), bytes: bytes.length };
}

function canonicalSha256(value) {
  return sha256(JSON.stringify(value));
}

function pairKey(pair) {
  return `${pair.model_id}/${pair.effort}`;
}

function orderedCatalogPairs(contract) {
  return contract.models.flatMap((profile) => profile.supported_efforts.map((effort) => ({
    model_id: profile.model_id,
    effort,
  })));
}

function rotateLeft(values, offset) {
  return [...values.slice(offset), ...values.slice(0, offset)];
}

function sourceRef(path, root = repoRoot) {
  const absolute = resolve(path);
  const rel = relative(root, absolute).split(sep).join("/");
  return rel && !rel.startsWith("../") ? rel : absolute;
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

function repositoryBaselineProjection({ receipt, baseline, inputs, expected }) {
  return {
    schema_version: "0.2",
    task_id: receipt.task_id,
    variant_id: receipt.variant_id,
    source_score_sha256: baseline.source_score_sha256,
    baseline_evidence: baseline,
    inputs,
    source_methodology: receipt.raw_score.source_methodology,
    source_evaluator_repository: receipt.raw_score.source_evaluator_repository,
    source_contract_repository: receipt.raw_score.source_contract_repository,
    reproduction_methodology: receipt.methodology,
    expected,
  };
}

function validateRepositorySourceReceipt(source, label) {
  if (typeof source?.path !== "string" || !source.path
    || !COMMIT_PATTERN.test(source.commit ?? "")
    || !SHA256_PATTERN.test(source.sha256 ?? "")) {
    throw new Error(`${label} repository source receipt is invalid`);
  }
  let bytes;
  try {
    bytes = execFileSync("git", ["-C", repoRoot, "show", `${source.commit}:${source.path}`], {
      encoding: "buffer",
      stdio: ["ignore", "pipe", "pipe"],
    });
  } catch {
    throw new Error(`${label} repository source receipt is not reproducible`);
  }
  if (sha256(bytes) !== source.sha256) {
    throw new Error(`${label} repository source receipt hash drift`);
  }
}

function validateBaselineProvenance({ taskRoot, task, taskBytes, promptBytes, baselineBytes, baseline }) {
  const path = join(taskRoot, "baseline-provenance.json");
  if (!existsSync(path) || !statSync(path).isFile()) {
    throw new Error(`${task.id} baseline provenance receipt is missing`);
  }
  const bytes = readFileSync(path);
  let receipt;
  try {
    receipt = JSON.parse(bytes.toString("utf8"));
  } catch {
    throw new Error(`${task.id} baseline provenance receipt must be valid JSON`);
  }
  const failed = Object.entries(baseline.critical_gates ?? {})
    .filter(([, passed]) => passed === false)
    .map(([gate]) => gate)
    .sort();
  const starterFiles = ["DESIGN.md", "index.html"].map((name) => ({
    path: name,
    sha256: sha256(readFileSync(join(taskRoot, "starter", name))),
  }));
  const methodology = currentObjectiveMethodology();
  const inputs = {
    prompt_sha256: sha256(promptBytes),
    starter_tree_files: starterFiles,
    baseline_evidence_sha256: sha256(baselineBytes),
    task_contract_sha256: sha256(taskBytes),
  };
  const expected = {
    deterministic_total: 75,
    deterministic_max: 85,
    failed_critical_gates: failed,
  };
  validateRepositorySourceReceipt(
    receipt.raw_score?.source_evaluator_repository,
    `${task.id} baseline evaluator`,
  );
  validateRepositorySourceReceipt(
    receipt.raw_score?.source_contract_repository,
    `${task.id} baseline methodology contract`,
  );
  const reproductionProjection = repositoryBaselineProjection({
    receipt,
    baseline,
    inputs,
    expected,
  });
  if (receipt?.schema_version !== "0.1"
    || receipt.kind !== "provider-free-objective-score-deterministic-equivalent"
    || receipt.task_id !== task.id || receipt.variant_id !== "raw-design-md"
    || receipt.raw_score?.schema_version !== receipt.raw_score?.source_methodology?.score_schema_version
    || receipt.raw_score?.source_methodology?.epoch !== baseline.methodology_epoch
    || receipt.raw_score?.source_evaluator_repository?.sha256
      !== receipt.raw_score?.source_methodology?.evaluator_source_sha256
    || receipt.raw_score?.source_contract_repository?.sha256
      !== receipt.raw_score?.source_methodology?.contract_source_sha256
    || receipt.methodology?.epoch !== baseline.methodology_epoch
    || receipt.raw_score?.source_score_sha256 !== baseline.source_score_sha256
    || !requireSha256(receipt.raw_score?.checks_sha256, `${task.id} baseline checks SHA`)
    || !requireSha256(receipt.raw_score?.observations_sha256, `${task.id} baseline observations SHA`)
    || JSON.stringify(receipt.methodology) !== JSON.stringify(methodology)
    || receipt.baseline_manifest_sha256 === undefined
    || !SHA256_PATTERN.test(receipt.baseline_manifest_sha256)
    || JSON.stringify(receipt.inputs) !== JSON.stringify(inputs)
    || receipt.expected?.deterministic_total !== 75
    || receipt.expected?.deterministic_max !== 85
    || JSON.stringify(receipt.expected?.failed_critical_gates) !== JSON.stringify(failed)
    || receipt.repository_reproduction?.schema_version !== "0.1"
    || receipt.repository_reproduction?.canonicalization
      !== "sha256-json-stringify-repository-baseline-projection-v1"
    || receipt.repository_reproduction?.projection_sha256
      !== canonicalSha256(reproductionProjection)
    || JSON.stringify(receipt.repository_reproduction?.projection_fields)
      !== JSON.stringify(Object.keys(reproductionProjection))
    || receipt.repository_reproduction?.provider_calls !== 0
    || receipt.repository_reproduction?.model_calls !== 0
    || receipt.reproduction_contract?.provider_calls !== 0
    || receipt.reproduction_contract?.model_calls !== 0
    || receipt.reproduction_contract?.historical_source_evaluator !== "git-object-pinned"
    || receipt.reproduction_contract?.current_reproduction_evaluator
      !== "working-tree-byte-pinned"
    || receipt.reproduction_contract?.evaluator_sha_delta_disposition
      !== (receipt.raw_score.source_methodology.evaluator_source_sha256
        === methodology.evaluator_source_sha256 ? "none" : "recorded-not-overwritten")) {
    throw new Error(`${task.id} baseline provenance receipt methodology/input/hash drift`);
  }
  return { bytes, receipt };
}

export function codexEffortSweepTaskSetSha256(tasks) {
  if (!Array.isArray(tasks) || tasks.length !== CODEX_EFFORT_SWEEP_TASKS.length) {
    throw new Error("Codex effort sweep task set must contain exactly three ordered task locks");
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

export function codexEffortSweepScheduleSha256(cells) {
  if (!Array.isArray(cells) || cells.length !== 51) {
    throw new Error("Codex effort sweep schedule must contain exactly 51 cells");
  }
  return canonicalSha256(scheduleProjection(cells));
}

function assertExactCatalogContract(lock) {
  if (!lock || typeof lock !== "object" || Array.isArray(lock)) {
    throw new Error("catalog lock must be an object");
  }
  if (lock.status !== "provider-zero-runtime-contract-ready") {
    throw new Error("catalog lock must be provider-zero-runtime-contract-ready");
  }
  if (lock.matrix_size !== 17 || lock.aliases_allowed !== false
    || lock.model_substitution_allowed !== false || lock.cursor_allowed !== false) {
    throw new Error("catalog lock must forbid aliases, substitutions, and Cursor for exactly 17 pairs");
  }
  for (const field of ["provider_calls", "model_calls", "cursor_calls"]) {
    if (lock[field] !== 0) throw new Error(`catalog lock ${field} must be zero`);
  }

  const contract = lock.codex_model_effort_contract;
  if (!contract || typeof contract !== "object" || Array.isArray(contract)) {
    throw new Error("catalog lock codex_model_effort_contract is required");
  }
  requireSha256(contract.cache_sha256, "catalog cache_sha256");
  requireNonEmptyString(contract.cache_fetched_at, "catalog cache_fetched_at");
  requireNonEmptyString(contract.cache_client_version, "catalog cache_client_version");
  if (!Array.isArray(contract.models) || contract.models.length !== EXPECTED_CATALOG_PROFILES.length) {
    throw new Error("catalog lock must contain exact ordered Luna, Terra, and Sol profiles");
  }
  for (const [index, expected] of EXPECTED_CATALOG_PROFILES.entries()) {
    const observed = contract.models[index];
    if (observed?.model_id !== expected.model_id
      || observed.default_effort !== expected.default_effort
      || JSON.stringify(observed.supported_efforts) !== JSON.stringify(expected.supported_efforts)) {
      throw new Error(`catalog lock profile ${index + 1} does not match the exact current model-effort shape`);
    }
    requireSha256(observed.model_profile_sha256, `catalog profile ${expected.model_id} SHA-256`);
  }
  const pairs = orderedCatalogPairs(contract);
  if (pairs.length !== 17 || new Set(pairs.map(pairKey)).size !== 17) {
    throw new Error("catalog lock must expand to exactly 17 distinct model-effort pairs");
  }
  return contract;
}

function assertExactModelCatalogAuthorityContract(lock, effortContract) {
  const authority = lock.codex_model_catalog_authority_contract;
  if (!authority || typeof authority !== "object" || Array.isArray(authority)) {
    throw new Error("catalog lock codex_model_catalog_authority_contract is required");
  }
  const sourcePath = requireAbsolutePath(
    authority.source?.path,
    "catalog model catalog source path",
  );
  const sourceSha256 = requireSha256(
    authority.source?.sha256,
    "catalog model catalog source SHA-256",
  );
  if (!Number.isSafeInteger(authority.source?.bytes) || authority.source.bytes < 1) {
    throw new Error("catalog model catalog source bytes must be positive");
  }
  if (authority.schema_version !== "0.1"
    || authority.config_key !== "model_catalog_json"
    || authority.source.source_mode !== "immutable-snapshot-only"
    || authority.mode !== "isolated-copy-before-provider-execution"
    || authority.role !== "execution-model-authority"
    || authority.models_cache_role !== "provenance-only-not-execution-authority"
    || authority.mutable_fallback_allowed !== false
    || authority.derived_from_cache_sha256 !== effortContract.cache_sha256
    || JSON.stringify(authority.models) !== JSON.stringify(effortContract.models)) {
    throw new Error("catalog lock immutable model catalog authority contract drift");
  }
  return {
    ...structuredClone(authority),
    source: {
      ...structuredClone(authority.source),
      path: sourcePath,
      sha256: sourceSha256,
    },
  };
}

function readCatalogLock(path) {
  const absolute = resolve(path);
  if (!existsSync(absolute) || !statSync(absolute).isFile()) {
    throw new Error(`catalog lock not found: ${absolute}`);
  }
  const bytes = readFileSync(absolute);
  let lock;
  try {
    lock = JSON.parse(bytes.toString("utf8"));
  } catch {
    throw new Error(`catalog lock must be valid JSON: ${absolute}`);
  }
  const contract = assertExactCatalogContract(lock);
  const modelCatalogAuthority = assertExactModelCatalogAuthorityContract(lock, contract);
  return {
    absolute,
    ref: sourceRef(absolute),
    file_sha256: sha256(bytes),
    contract: structuredClone(contract),
    model_catalog_authority: modelCatalogAuthority,
    lock,
  };
}

function readVariantLock({ competitorsPath, variantId, installedSkillSha256, vendorsRoot }) {
  const absolute = resolve(competitorsPath);
  if (!existsSync(absolute) || !statSync(absolute).isFile()) {
    throw new Error(`competitor catalog not found: ${absolute}`);
  }
  const bytes = readFileSync(absolute);
  let competitors;
  try {
    competitors = JSON.parse(bytes.toString("utf8"));
  } catch {
    throw new Error(`competitor catalog must be valid JSON: ${absolute}`);
  }
  const variant = competitors?.variants?.[variantId];
  if (!variant) throw new Error(`unknown exact OmD portable variant: ${variantId}`);
  if (variant.kind !== "local-skill" || variant.declared_name !== "omd:apply"
    || variant.source_path !== "skills/omd-apply" || variant.install_platform !== "agents"
    || variant.install_root !== ".agents/skills" || variant.install_dir !== "omd-apply"
    || !variant.eligible_tracks?.includes("repair")) {
    throw new Error(`${variantId} is not an exact repair-eligible OmD portable apply variant`);
  }
  requireCommit(variant.commit, `${variantId}.commit`);
  requireSha256(variant.source_tree_sha256, `${variantId}.source_tree_sha256`);
  requireSha256(installedSkillSha256, "installedSkillSha256");
  if (variant.vendor_dir && !vendorsRoot) {
    throw new Error(`${variantId} requires an exact vendorsRoot`);
  }
  const payload = {
    skill_id: variantId,
    variant_id: variantId,
    declared_name: variant.declared_name,
    vendor_dir: variant.vendor_dir ?? null,
    competitor_catalog_ref: sourceRef(absolute),
    competitor_catalog_sha256: sha256(bytes),
    variant_contract_sha256: canonicalSha256(variant),
    source_commit: variant.commit,
    source_tree_sha256: variant.source_tree_sha256,
    skill_tree_sha256: installedSkillSha256,
    publishable: true,
  };
  return payload;
}

function assertFreshTaskBaseline(task, baseline, expectedId) {
  if (task.id !== expectedId || task.track !== "repair" || task.locale !== "en"
    || task.network !== "disabled" || task.omd_reflow_source_contract?.schema_version !== "0.2") {
    throw new Error(`${expectedId} is not the exact fresh v18 repair task contract`);
  }
  const failed = Object.entries(baseline?.critical_gates ?? {})
    .filter(([, passed]) => passed === false)
    .map(([gate]) => gate)
    .sort();
  if (baseline?.task_id !== expectedId || baseline?.variant_id !== "raw-design-md"
    || baseline?.points?.deterministic_total !== 75 || baseline?.points?.deterministic_max !== 85
    || JSON.stringify(failed) !== JSON.stringify(["accessibility", "responsive"])) {
    throw new Error(`${expectedId} must retain the provider-zero 75/85 accessibility+responsive baseline`);
  }
}

function gitCommand(repo, args, counter, options = {}) {
  counter.count += 1;
  return execFileSync("git", ["-C", repo, ...args], {
    encoding: options.encoding ?? "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    maxBuffer: 16 * 1024 * 1024,
  });
}

function committedTaskTree({ repositoryRoot, sourceCommit, taskRoot, counter }) {
  const relativeTaskRoot = sourceRef(realpathSync(taskRoot), realpathSync(repositoryRoot));
  if (isAbsolute(relativeTaskRoot)) {
    throw new Error(`task root is outside the source repository: ${taskRoot}`);
  }
  let gitTreeOid;
  let entries;
  try {
    gitTreeOid = gitCommand(
      repositoryRoot,
      ["rev-parse", `${sourceCommit}:${relativeTaskRoot}`],
      counter,
    ).trim();
    entries = gitCommand(
      repositoryRoot,
      ["ls-tree", "-r", "-z", "--full-tree", sourceCommit, "--", relativeTaskRoot],
      counter,
      { encoding: "buffer" },
    );
  } catch {
    throw new Error(`task source commit does not contain ${relativeTaskRoot}`);
  }
  requireCommit(gitTreeOid, `${relativeTaskRoot} git tree OID`);
  const prefix = `${relativeTaskRoot}/`;
  const files = entries.toString("utf8").split("\0").filter(Boolean).map((entry) => {
    const match = /^(\d+) (\w+) ([a-f0-9]{40,64})\t(.+)$/.exec(entry);
    if (!match || match[2] !== "blob" || !match[4].startsWith(prefix)) {
      throw new Error(`unsupported committed task entry: ${entry}`);
    }
    const gitMode = match[1];
    if (!new Set(["100644", "100755"]).has(gitMode)) {
      throw new Error(`committed task entry must be a regular file: ${match[4]}`);
    }
    const bytes = gitCommand(
      repositoryRoot,
      ["cat-file", "blob", match[3]],
      counter,
      { encoding: "buffer" },
    );
    return {
      path: match[4].slice(prefix.length),
      mode: gitMode === "100755" ? 0o755 : 0o644,
      bytes: bytes.length,
      sha256: sha256(bytes),
    };
  }).sort((left, right) => (left.path < right.path ? -1 : left.path > right.path ? 1 : 0));
  if (!files.length) throw new Error(`source commit task tree is empty: ${relativeTaskRoot}`);
  return {
    git_tree_oid: gitTreeOid,
    files,
    sha256: sha256(files.map((file) => `${file.path}\0${file.mode}\0${file.sha256}`).join("\n")),
  };
}

function lockTaskSet(tasksRoot, taskSourceCommit) {
  const root = resolve(tasksRoot);
  const gitCalls = { count: 0 };
  let repositoryRoot;
  try {
    repositoryRoot = realpathSync(gitCommand(root, ["rev-parse", "--show-toplevel"], gitCalls).trim());
    gitCommand(repositoryRoot, ["cat-file", "-e", `${taskSourceCommit}^{commit}`], gitCalls);
    gitCommand(repositoryRoot, ["merge-base", "--is-ancestor", taskSourceCommit, "HEAD"], gitCalls);
  } catch {
    throw new Error("task source commit must be an ancestor commit in the tasks repository");
  }
  const tasks = CODEX_EFFORT_SWEEP_TASKS.map(({ task_id }) => {
    const taskRoot = resolve(root, task_id);
    if (taskRoot !== root && !taskRoot.startsWith(`${root}${sep}`)) {
      throw new Error(`task path escapes task root: ${task_id}`);
    }
    if (!existsSync(taskRoot) || !statSync(taskRoot).isDirectory()) {
      throw new Error(`fresh v18 task not found: ${task_id}`);
    }
    const taskBytes = readFileSync(join(taskRoot, "task.json"));
    const promptBytes = readFileSync(join(taskRoot, "PROMPT.md"));
    let task;
    try {
      task = JSON.parse(taskBytes.toString("utf8"));
    } catch {
      throw new Error(`${task_id}/task.json must be valid JSON`);
    }
    validateTaskContract(task, { expectedId: task_id });
    const baselinePath = resolve(taskRoot, task.omd_reflow_source_contract.baseline_evidence.path);
    if (baselinePath !== taskRoot && !baselinePath.startsWith(`${taskRoot}${sep}`)) {
      throw new Error(`${task_id} baseline evidence escapes the task root`);
    }
    const baselineBytes = readFileSync(baselinePath);
    validateOmdReflowBaselineEvidence(task, baselineBytes);
    const baseline = JSON.parse(baselineBytes.toString("utf8"));
    assertFreshTaskBaseline(task, baseline, task_id);
    const baselineProvenance = validateBaselineProvenance({
      taskRoot,
      task,
      taskBytes,
      promptBytes,
      baselineBytes,
      baseline,
    });
    const observed = treeManifest(taskRoot);
    const committed = committedTaskTree({
      repositoryRoot,
      sourceCommit: taskSourceCommit,
      taskRoot,
      counter: gitCalls,
    });
    if (observed.sha256 !== committed.sha256
      || JSON.stringify(observed.files) !== JSON.stringify(committed.files)) {
      throw new Error(`${task_id} working task tree does not exactly match source commit ${taskSourceCommit}`);
    }
    return {
      task_id,
      source_commit: taskSourceCommit,
      git_tree_oid: committed.git_tree_oid,
      observed_task_tree_sha256: observed.sha256,
      task_tree_sha256: observed.sha256,
      task_tree_files: observed.files,
      prompt_sha256: sha256(promptBytes),
      starter_sha256: treeManifest(join(taskRoot, "starter")).sha256,
      baseline_evidence_sha256: sha256(baselineBytes),
      baseline_provenance_sha256: sha256(baselineProvenance.bytes),
      baseline_methodology: baselineProvenance.receipt.methodology,
      source_contract_sha256: canonicalSha256(task.omd_reflow_source_contract),
    };
  });
  return {
    repository_root: repositoryRoot,
    source_commit_membership: "ancestor-of-generation-head",
    exact_working_tree_match: true,
    git_source_validation_calls: gitCalls.count,
    tasks,
  };
}

export function buildCodexEffortSweepSchedule({
  orderedModelEffortPairs,
  variantId,
  systemId,
  timeoutSeconds = 720,
} = {}) {
  if (!Array.isArray(orderedModelEffortPairs) || orderedModelEffortPairs.length !== 17) {
    throw new Error("orderedModelEffortPairs must contain the 17 catalog-derived pairs");
  }
  requireNonEmptyString(variantId, "variantId");
  requireNonEmptyString(systemId, "systemId");
  if (!Number.isInteger(timeoutSeconds) || timeoutSeconds !== 720) {
    throw new Error("Codex all-effort sweep timeoutSeconds must be exactly 720");
  }
  const pairByKey = new Map(orderedModelEffortPairs.map((pair) => [pairKey(pair), pair]));
  if (pairByKey.size !== 17
    || CODEX_EFFORT_SWEEP_BASE_PAIR_ORDER.some((key) => !pairByKey.has(key))) {
    throw new Error("catalog-derived pairs do not match the preregistered base pair order");
  }
  const taskByLabel = new Map(CODEX_EFFORT_SWEEP_TASKS.map((task) => [task.label, task]));
  const cells = CODEX_EFFORT_SWEEP_WAVES.flatMap((wave, waveIndex) => {
    const rotated = rotateLeft(CODEX_EFFORT_SWEEP_BASE_PAIR_ORDER, wave.rotation);
    return rotated.map((key, position) => {
      const pair = pairByKey.get(key);
      const task = taskByLabel.get(wave.task_assignments[position]);
      const modelSlug = pair.model_id.replace(/^gpt-5\.6-/, "");
      return {
        id: `${task.cell_slug}-${modelSlug}-${pair.effort}-r1-omd`,
        task_id: task.task_id,
        variant_id: variantId,
        system_id: systemId,
        runtime: "codex",
        model_id: pair.model_id,
        effort: pair.effort,
        timeout_seconds: timeoutSeconds,
        trial_index: 1,
        schedule_wave: waveIndex + 1,
        schedule_position: position + 1,
        schedule_task_label: task.label,
      };
    });
  });
  const taskCounts = Object.fromEntries(CODEX_EFFORT_SWEEP_TASKS.map((task) => [
    task.task_id,
    cells.filter((cell) => cell.task_id === task.task_id).length,
  ]));
  if (Object.values(taskCounts).some((count) => count !== 17)) {
    throw new Error("balanced effort sweep schedule must assign exactly 17 cells to each task");
  }
  for (const pair of orderedModelEffortPairs) {
    const labels = cells
      .filter((cell) => cell.model_id === pair.model_id && cell.effort === pair.effort)
      .map((cell) => cell.schedule_task_label)
      .sort();
    if (JSON.stringify(labels) !== JSON.stringify(["A", "B", "C"])) {
      throw new Error(`${pairKey(pair)} must receive tasks A, B, and C exactly once`);
    }
  }
  return cells;
}

function buildScheduleContract(cells) {
  return {
    schema_version: "0.1",
    policy: "balanced-three-wave-interleaved",
    canonicalization: "sha256-json-stringify-ordered-cell-schedule-v1",
    task_labels: Object.fromEntries(CODEX_EFFORT_SWEEP_TASKS.map((task) => [task.label, task.task_id])),
    base_model_effort_pair_order: [...CODEX_EFFORT_SWEEP_BASE_PAIR_ORDER],
    wave_rotations: CODEX_EFFORT_SWEEP_WAVES.map((wave) => wave.rotation),
    wave_task_assignments: CODEX_EFFORT_SWEEP_WAVES.map((wave) => [...wave.task_assignments]),
    schedule_sha256: codexEffortSweepScheduleSha256(cells),
  };
}

function controllerPreEditPlanContract() {
  return {
    mode: "provider-zero-shipped-runner",
    required: true,
    artifact_path: ".omd/reflow-closure.json",
    runner_path: ".agents/skills/omd-apply/scripts/reflow-browser-runner.sh",
    reflow_mode: "plan",
    measured_attempts: 1,
    provider_calls: 0,
    cursor_calls: 0,
    timeout_seconds: 120,
  };
}

function browserExecutionContract({ connectionName, cdpPort }) {
  requireNonEmptyString(connectionName, "browserConnectionName");
  if (!Number.isInteger(cdpPort) || cdpPort < 1 || cdpPort > 65535) {
    throw new Error("browserCdpPort must be an integer from 1 through 65535");
  }
  return {
    require_browser_proof: true,
    runtime_dir_shared: true,
    exact_named_socket: true,
    allow_browser_launch: false,
    mechanism: "browser-harness attachment to controller-started isolated local CDP Chrome",
    connection_name: connectionName,
    cdp_port: cdpPort,
    user_profile: "none",
    cloud_browser: "not-used",
  };
}

function proofExecutionGates(systemId) {
  return {
    system_ids: [systemId],
    enforcement: "promotion-report",
    require_analyzable: true,
    require_closed_reflow_artifact: true,
    require_measured_browser_attempt: true,
    require_character_range_line_oracle: true,
    require_actual_zoom_observation: true,
    require_exact_named_consumer_attachment: true,
    forbid_launched_browser: true,
    require_locked_typography: true,
    minimum_inline_fit_reserve_css_px: 8,
    max_document_overflow_px: 0,
    max_browser_recovery_count: 0,
    max_duplicate_static_closure_count: 0,
    max_verification_after_ready_count: 0,
    max_passive_protected_text_scroll_containers: 0,
    shipped_runner_system_ids: [systemId],
    shipped_runner_command_suffix: "scripts/reflow-browser-runner.sh",
  };
}

function lockManifest({
  taskSetSha256,
  scheduleSha256,
  skillLock,
  objectiveEvaluator,
  browserContract,
  catalog,
  modelCatalog,
  controllerContract,
}) {
  return {
    canonicalization: "sha256-json-stringify-v1",
    task_set_sha256: taskSetSha256,
    schedule_sha256: scheduleSha256,
    skill_source_contract_sha256: canonicalSha256(skillLock),
    objective_evaluator_contract_sha256: canonicalSha256(objectiveEvaluator),
    browser_execution_contract_sha256: canonicalSha256(browserContract),
    catalog_lock_file_sha256: catalog.file_sha256,
    model_catalog_file_sha256: modelCatalog.sha256,
    codex_model_effort_contract_sha256: canonicalSha256(catalog.contract),
    controller_pre_edit_plan_contract_sha256: canonicalSha256(controllerContract),
  };
}

export function createCodexEffortSweepPlan({
  productVersion,
  experimentId,
  outputRoot,
  vendorsRoot,
  variantId,
  installedSkillSha256,
  taskSourceCommit,
  catalogLockPath = join(
    benchRoot,
    "reports/codex-model-effort-contract-1.9.815/CATALOG-LOCK.json",
  ),
  competitorsPath = join(benchRoot, "competitors.json"),
  tasksRoot = join(benchRoot, "tasks"),
  catalogAuthSourceHome,
  catalogAuthJsonSourcePath,
  modelsCacheSourcePath,
  modelCatalogSourcePath,
  codexCliExecutablePath,
  codexCliNativeExecutablePath,
  codexCliVersion,
  codexCliBinarySha256,
  codexCliNativeBinarySha256,
  cliCacheClientVersionPolicy,
  cliCacheClientVersionMismatchJustification = null,
  browserConnectionName,
  browserCdpPort,
  systemId = "codex-all-effort-omd-current",
} = {}) {
  requireNonEmptyString(productVersion, "productVersion");
  requireNonEmptyString(experimentId, "experimentId");
  const exactOutputRoot = requireAbsolutePath(outputRoot, "outputRoot");
  const exactVendorsRoot = requireAbsolutePath(vendorsRoot, "vendorsRoot");
  const authSourceHome = requireAbsolutePath(catalogAuthSourceHome, "catalogAuthSourceHome");
  const authSnapshot = immutableRegularFileSnapshot(
    catalogAuthJsonSourcePath,
    "catalogAuthJsonSourcePath",
  );
  const authJsonSourcePath = authSnapshot.path;
  if (authJsonSourcePath !== join(authSourceHome, "auth.json")) {
    throw new Error("catalogAuthJsonSourcePath must be catalogAuthSourceHome/auth.json");
  }
  const exactModelsCacheSourcePath = requireAbsolutePath(
    modelsCacheSourcePath,
    "modelsCacheSourcePath",
  );
  if (exactModelsCacheSourcePath !== join(authSourceHome, "models_cache.json")) {
    throw new Error("modelsCacheSourcePath must be catalogAuthSourceHome/models_cache.json");
  }
  const modelsCacheSnapshot = immutableRegularFileSnapshot(
    exactModelsCacheSourcePath,
    "modelsCacheSourcePath",
  );
  const exactModelCatalogSourcePath = requireAbsolutePath(
    modelCatalogSourcePath,
    "modelCatalogSourcePath",
  );
  const modelCatalogRelativePath = relative(authSourceHome, exactModelCatalogSourcePath);
  if (!modelCatalogRelativePath || modelCatalogRelativePath === ".."
    || modelCatalogRelativePath.startsWith(`..${sep}`)
    || isAbsolute(modelCatalogRelativePath)) {
    throw new Error("modelCatalogSourcePath must be inside catalogAuthSourceHome");
  }
  const exactCodexCliExecutablePath = requireAbsolutePath(
    codexCliExecutablePath,
    "codexCliExecutablePath",
  );
  const exactCodexCliNativeExecutablePath = requireAbsolutePath(
    codexCliNativeExecutablePath,
    "codexCliNativeExecutablePath",
  );
  requireNonEmptyString(codexCliVersion, "codexCliVersion");
  requireSha256(codexCliBinarySha256, "codexCliBinarySha256");
  requireSha256(codexCliNativeBinarySha256, "codexCliNativeBinarySha256");
  if (cliCacheClientVersionPolicy !== "require-exact-match") {
    throw new Error(
      "complete-block effort scaling requires cliCacheClientVersionPolicy=require-exact-match",
    );
  }
  if (cliCacheClientVersionMismatchJustification !== null) {
    throw new Error("complete-block effort scaling forbids a CLI/cache mismatch justification");
  }
  requireNonEmptyString(variantId, "variantId");
  requireCommit(taskSourceCommit, "taskSourceCommit");
  requireNonEmptyString(systemId, "systemId");
  if (!/^[a-z0-9][a-z0-9-]*$/.test(systemId)) throw new Error("systemId must be kebab-case");

  const catalog = readCatalogLock(catalogLockPath);
  if (modelsCacheSnapshot.sha256 !== catalog.contract.cache_sha256) {
    throw new Error("complete-block effort scaling models cache source SHA drift");
  }
  if (codexCliVersion !== catalog.contract.cache_client_version) {
    throw new Error("complete-block effort scaling requires exact CLI/cache client version match");
  }
  const modelCatalog = inspectImmutableModelCatalogSource(
    exactModelCatalogSourcePath,
    catalog.contract,
  );
  if (catalog.model_catalog_authority.source.path !== exactModelCatalogSourcePath
    || catalog.model_catalog_authority.source.sha256 !== modelCatalog.sha256
    || catalog.model_catalog_authority.source.bytes !== modelCatalog.bytes) {
    throw new Error("complete-block effort scaling model catalog source authority drift");
  }
  const orderedPairs = orderedCatalogPairs(catalog.contract);
  const taskSource = lockTaskSet(tasksRoot, taskSourceCommit);
  const taskLocks = taskSource.tasks;
  const taskSetSha = codexEffortSweepTaskSetSha256(taskLocks);
  const skillLock = readVariantLock({
    competitorsPath,
    variantId,
    installedSkillSha256,
    vendorsRoot: exactVendorsRoot,
  });
  const cells = buildCodexEffortSweepSchedule({
    orderedModelEffortPairs: orderedPairs,
    variantId,
    systemId,
    timeoutSeconds: 720,
  });
  const scheduleContract = buildScheduleContract(cells);
  const objectiveEvaluator = currentObjectiveMethodology();
  const browserContract = browserExecutionContract({
    connectionName: browserConnectionName,
    cdpPort: browserCdpPort,
  });
  const controllerContract = controllerPreEditPlanContract();
  const locks = lockManifest({
    taskSetSha256: taskSetSha,
    scheduleSha256: scheduleContract.schedule_sha256,
    skillLock,
    objectiveEvaluator,
    browserContract,
    catalog,
    modelCatalog,
    controllerContract,
  });
  const catalogSnapshotContract = {
    enforcement_mode: "exact-runtime-per-invocation",
    catalog_lock_ref: catalog.ref,
    catalog_lock_sha256: catalog.file_sha256,
    auth_source_home: authSourceHome,
    auth_json_source_path: authJsonSourcePath,
    auth_json_source_mode: "immutable-snapshot-only",
    auth_json_sha256: authSnapshot.sha256,
    auth_json_bytes: authSnapshot.bytes,
    auth_json_mode: "isolated-copy-before-provider-execution",
    mutable_auth_fallback_allowed: false,
    models_cache_source_path: exactModelsCacheSourcePath,
    models_cache_sha256: catalog.contract.cache_sha256,
    models_cache_bytes: modelsCacheSnapshot.bytes,
    models_cache_source_mode: "immutable-snapshot-only",
    models_cache_mode: "immutable-copy-before-provider-execution",
    mutable_models_cache_fallback_allowed: false,
    models_cache_role: "provenance-only-not-execution-authority",
    model_catalog_source_path: exactModelCatalogSourcePath,
    model_catalog_sha256: modelCatalog.sha256,
    model_catalog_bytes: modelCatalog.bytes,
    model_catalog_source_mode: "immutable-snapshot-only",
    model_catalog_mode: "isolated-copy-before-provider-execution",
    mutable_model_catalog_fallback_allowed: false,
    model_catalog_role: "execution-model-authority",
    codex_cli: {
      executable_path: exactCodexCliExecutablePath,
      native_executable_path: exactCodexCliNativeExecutablePath,
      version: codexCliVersion,
      binary_sha256: codexCliBinarySha256,
      native_binary_sha256: codexCliNativeBinarySha256,
    },
    cli_cache_client_version_policy: cliCacheClientVersionPolicy,
    cli_cache_client_version_mismatch_justification:
      cliCacheClientVersionMismatchJustification,
    cursor_credentials_present: false,
    claude_credentials_present: false,
  };
  locks.codex_catalog_snapshot_contract_sha256 = canonicalSha256(catalogSnapshotContract);

  const plan = {
    schema_version: "0.3",
    suite_version: "ui-resolve-v0.2",
    product_version: productVersion,
    execution_purpose: "complete-block-effort-scaling",
    experiment_id: experimentId,
    output_root: exactOutputRoot,
    vendors_root: exactVendorsRoot,
    attribution_scope: "provider-observed-only",
    family: "model",
    status: "locked-provider-zero-awaiting-preparation",
    preregistration_authority_contract: {
      schema_version: "0.1",
      receipt_ref: CODEX_EFFORT_SWEEP_PREREGISTRATION_RECEIPT_REF,
      binding: "exact-plan-file-bytes-sha256",
      receipt_required_before_preparation: true,
      plan_mutation_allowed_after_receipt: false,
    },
    control_contract: {
      comparison_mode: "effort-scaling",
      effort_semantics: "runtime-native-ordinal-not-cross-provider-equivalent",
      temperature_policy: "runtime-default-frozen",
      timeout_seconds: 720,
      max_concurrency: 1,
      latency_comparison: "descriptive-only",
      retry_policy: "none-primary",
      replacement_policy: "none",
      fallback_policy: "none",
      model_substitution_policy: "none",
      effort_substitution_policy: "none",
      task_substitution_policy: "none",
      timeout_policy: "count-as-valid-failure",
      infrastructure_policy: "retain-freeze-and-repreregister",
      task_order_policy: "fixed-preregistered",
      admission_normalization_policy: "complete-block-effort-scaling",
      pacing: {
        policy: "fixed-inter-cell",
        inter_cell_delay_seconds: 30,
        applies_between_cells_only: true,
        counts_toward_cell_wall_time: false,
      },
      token_budget: {
        mode: "observed-only",
        limit_tokens: null,
        usage_required: true,
        account_components: ["input", "cached_input", "output", "reasoning_output"],
        cached_input_separate: true,
        cost_policy: "provider-reported-or-pinned-price-equivalent",
      },
      step_budget: { mode: "observed-only", limit_steps: null },
    },
    codex_model_effort_contract: structuredClone(catalog.contract),
    codex_catalog_snapshot_contract: catalogSnapshotContract,
    provider_routing_contract: {
      cursor_allowed: false,
      claude_code_allowed: false,
      allowed_runtime: "codex",
      allowed_model_ids: catalog.contract.models.map((profile) => profile.model_id),
      allowed_model_effort_pairs: structuredClone(orderedPairs),
      aliases_allowed: false,
      retry_allowed: false,
      replacement_allowed: false,
      fallback_allowed: false,
      model_substitution_allowed: false,
      effort_substitution_allowed: false,
      task_substitution_allowed: false,
      fail_closed: true,
    },
    effort_sweep_contract: {
      required_cells: 51,
      tasks: 3,
      trials_per_task_pair: 1,
      complete_block_required: true,
      reliability_metric: null,
      ordered_model_effort_pairs: structuredClone(orderedPairs),
      task_set_sha256: taskSetSha,
      schedule_sha256: scheduleContract.schedule_sha256,
    },
    interpretation_contract: {
      mode: "complete-block-only",
      interpretation_allowed_before_all_51_terminal: false,
      incomplete_block_disposition: "freeze-without-comparative-claim",
      unit_of_analysis: "task-specific-model-effort-cell",
      cross_model_pooling_allowed: false,
      reliability_interpretation_allowed: false,
    },
    schedule_contract: scheduleContract,
    browser_execution_contract: browserContract,
    checkpoint_continuation_contract: {
      max_new_cells_per_invocation: 1,
      preserve_completed_cells: true,
      completed_root_not_resumable: true,
    },
    controller_pre_edit_plan_contract: controllerContract,
    proof_execution_gates: proofExecutionGates(systemId),
    task_lock_contract: {
      source_commit: taskSourceCommit,
      source_repository_root: taskSource.repository_root,
      source_commit_membership: taskSource.source_commit_membership,
      exact_working_tree_match: taskSource.exact_working_tree_match,
      provenance: "source-commit-locked-v18",
      task_set_sha256: taskSetSha,
      tasks: taskLocks,
    },
    exposure_evidence_contract: {
      scope: "generator-invocation-only",
      evidence: "generation_attestation",
      historical_task_exposure: "unknown-not-asserted",
      prior_task_exposure_claim_made: false,
    },
    skill_lock_contract: skillLock,
    source_contract: {
      schema_version: "0.2",
      failed_critical_gates: ["accessibility", "responsive"],
      covered_critical_gates: ["accessibility", "responsive"],
      provider_mutable: false,
    },
    candidate_preflight_contract: {
      required: true,
      complete_candidate_bytes: true,
      same_static_evaluator: true,
      passed_receipt_required_before_product_edit: true,
      promotion_command: "static-promote",
      model_retyping_after_preview_forbidden: true,
      candidate_sha256_must_equal_final_product_sha256: true,
      source_contract_sha256_must_match: true,
      sealed_inventory_sha256_must_match: true,
    },
    cell_success_contract: {
      objective_score: 85,
      objective_max: 85,
      ui_resolved: true,
      product_revision_count: 1,
      successful_static_closure_count: 1,
      failed_static_closure_count: 0,
      user_handoff_count: 0,
      proof_compliance: true,
      browser_runner_recovery_count: 0,
      sealed_inventory_unchanged: true,
      candidate_preview_receipt_passed: true,
      candidate_promoted_without_retyping: true,
      candidate_sha256_equals_final_product_sha256: true,
    },
    comparison_claim_contract: {
      claim: "internal-effort-scaling-compatibility",
      publication_tier: "internal-effort-scaling-compatibility",
      descriptive_only: true,
      requires_complete_51_cell_block: true,
      cross_model_pooling_allowed: false,
      forbid_claims: [
        "model-superiority",
        "model-ranking",
        "cross-model-effort-equivalence",
        "statistical-superiority",
        "industry-leader",
        "2.0-release-gate-from-this-test-alone",
      ],
    },
    generation_attestation: {
      provider_calls: 0,
      model_calls: 0,
      browser_calls: 0,
      network_calls: 0,
      cursor_calls: 0,
      claude_calls: 0,
      git_source_validation_calls: taskSource.git_source_validation_calls,
    },
    objective_evaluator: objectiveEvaluator,
    lock_manifest: locks,
    cells,
  };
  return validateGeneratedCodexEffortSweepPlan(plan);
}

export function validateGeneratedCodexEffortSweepPlan(plan) {
  validateRunMatrixPlan(plan);
  assertObjectiveMethodologyPin(plan.objective_evaluator, "generated-effort-sweep-plan");
  if (plan.execution_purpose !== "complete-block-effort-scaling"
    || plan.family !== "model" || plan.control_contract?.comparison_mode !== "effort-scaling") {
    throw new Error("generated effort sweep must be the model-family complete effort block");
  }
  const preregistrationAuthority = plan.preregistration_authority_contract;
  if (preregistrationAuthority?.schema_version !== "0.1"
    || preregistrationAuthority.receipt_ref !== CODEX_EFFORT_SWEEP_PREREGISTRATION_RECEIPT_REF
    || preregistrationAuthority.binding !== "exact-plan-file-bytes-sha256"
    || preregistrationAuthority.receipt_required_before_preparation !== true
    || preregistrationAuthority.plan_mutation_allowed_after_receipt !== false) {
    throw new Error("generated effort sweep preregistration plan-byte authority drift");
  }
  if (plan.reliability_contract !== undefined || plan.effort_sweep_contract.reliability_metric !== null) {
    throw new Error("generated effort sweep must not claim Reliability semantics");
  }
  const expectedTasks = CODEX_EFFORT_SWEEP_TASKS.map((task) => task.task_id);
  if (JSON.stringify(plan.task_lock_contract?.tasks?.map((task) => task.task_id))
    !== JSON.stringify(expectedTasks)) {
    throw new Error("generated effort sweep must lock the exact ordered fresh v18 task set");
  }
  if (!COMMIT_PATTERN.test(plan.task_lock_contract.source_commit ?? "")
    || plan.task_lock_contract.source_commit_membership !== "ancestor-of-generation-head"
    || plan.task_lock_contract.exact_working_tree_match !== true
    || plan.task_lock_contract.tasks.some((task) => (
      task.source_commit !== plan.task_lock_contract.source_commit
      || !COMMIT_PATTERN.test(task.git_tree_oid ?? "")
      || task.observed_task_tree_sha256 !== task.task_tree_sha256
    ))) {
    throw new Error("generated effort sweep task source commit/tree authority drift");
  }
  const taskSetSha = codexEffortSweepTaskSetSha256(plan.task_lock_contract.tasks);
  if (plan.effort_sweep_contract.task_set_sha256 !== taskSetSha
    || plan.task_lock_contract.task_set_sha256 !== taskSetSha
    || plan.lock_manifest.task_set_sha256 !== taskSetSha) {
    throw new Error("generated effort sweep task_set_sha256 drift");
  }
  const expectedCells = buildCodexEffortSweepSchedule({
    orderedModelEffortPairs: plan.effort_sweep_contract.ordered_model_effort_pairs,
    variantId: plan.cells[0].variant_id,
    systemId: plan.cells[0].system_id,
    timeoutSeconds: 720,
  });
  if (JSON.stringify(plan.cells) !== JSON.stringify(expectedCells)) {
    throw new Error("generated effort sweep cells do not match the exact balanced three-wave schedule");
  }
  const scheduleSha = codexEffortSweepScheduleSha256(plan.cells);
  if (plan.schedule_contract?.schedule_sha256 !== scheduleSha
    || plan.effort_sweep_contract.schedule_sha256 !== scheduleSha
    || plan.lock_manifest.schedule_sha256 !== scheduleSha) {
    throw new Error("generated effort sweep schedule_sha256 drift");
  }
  if (JSON.stringify(plan.schedule_contract.base_model_effort_pair_order)
    !== JSON.stringify(CODEX_EFFORT_SWEEP_BASE_PAIR_ORDER)
    || JSON.stringify(plan.schedule_contract.wave_rotations) !== JSON.stringify([0, 6, 12])
    || JSON.stringify(plan.schedule_contract.wave_task_assignments)
      !== JSON.stringify(CODEX_EFFORT_SWEEP_WAVES.map((wave) => [...wave.task_assignments]))) {
    throw new Error("generated effort sweep schedule blueprint drift");
  }
  const provider = plan.provider_routing_contract;
  const attestation = plan.generation_attestation;
  if (provider.allowed_runtime !== "codex" || provider.cursor_allowed !== false
    || provider.claude_code_allowed !== false || provider.aliases_allowed !== false
    || provider.retry_allowed !== false || provider.replacement_allowed !== false
    || provider.fallback_allowed !== false || provider.model_substitution_allowed !== false
    || provider.effort_substitution_allowed !== false || provider.task_substitution_allowed !== false
    || provider.fail_closed !== true
    || ["provider_calls", "model_calls", "browser_calls", "network_calls", "cursor_calls", "claude_calls"]
      .some((field) => attestation?.[field] !== 0)
    || !Number.isInteger(attestation?.git_source_validation_calls)
    || attestation.git_source_validation_calls < 1) {
    throw new Error("generated effort sweep must remain fail-closed and provider-zero");
  }
  const exposure = plan.exposure_evidence_contract;
  if (exposure?.scope !== "generator-invocation-only"
    || exposure.evidence !== "generation_attestation"
    || exposure.historical_task_exposure !== "unknown-not-asserted"
    || exposure.prior_task_exposure_claim_made !== false) {
    throw new Error("generated effort sweep exposure evidence boundary drift");
  }
  const snapshot = plan.codex_catalog_snapshot_contract;
  let observedAuthSnapshot = null;
  let observedCacheSnapshot = null;
  let observedModelCatalog = null;
  try {
    observedAuthSnapshot = immutableRegularFileSnapshot(
      snapshot?.auth_json_source_path,
      "codex catalog auth_json_source_path",
    );
  } catch {
    throw new Error("generated effort sweep exact Codex catalog/auth/CLI runtime binding drift");
  }
  try {
    observedCacheSnapshot = immutableRegularFileSnapshot(
      snapshot?.models_cache_source_path,
      "codex catalog models_cache_source_path",
    );
  } catch {
    throw new Error("generated effort sweep exact Codex catalog/auth/CLI runtime binding drift");
  }
  try {
    observedModelCatalog = inspectImmutableModelCatalogSource(
      snapshot?.model_catalog_source_path,
      plan.codex_model_effort_contract,
    );
  } catch {
    throw new Error("generated effort sweep exact Codex catalog/auth/CLI runtime binding drift");
  }
  const cliCacheVersionsMatch = snapshot?.codex_cli?.version
    === plan.codex_model_effort_contract.cache_client_version;
  const cacheClientPolicyValid = snapshot?.cli_cache_client_version_policy === "require-exact-match"
    && cliCacheVersionsMatch
    && snapshot.cli_cache_client_version_mismatch_justification === null;
  const snapshotSourceHome = isAbsolute(snapshot?.auth_source_home ?? "")
    ? resolve(snapshot.auth_source_home)
    : null;
  const snapshotCatalogRelative = snapshotSourceHome
    && isAbsolute(snapshot?.model_catalog_source_path ?? "")
    ? relative(snapshotSourceHome, resolve(snapshot.model_catalog_source_path))
    : null;
  if (snapshot?.enforcement_mode !== "exact-runtime-per-invocation"
    || !snapshotSourceHome
    || resolve(snapshot.auth_json_source_path) !== join(snapshotSourceHome, "auth.json")
    || !isAbsolute(snapshot.auth_json_source_path ?? "")
    || snapshot.auth_json_source_mode !== "immutable-snapshot-only"
    || !SHA256_PATTERN.test(snapshot.auth_json_sha256 ?? "")
    || !Number.isInteger(snapshot.auth_json_bytes) || snapshot.auth_json_bytes < 1
    || snapshot.auth_json_mode !== "isolated-copy-before-provider-execution"
    || snapshot.mutable_auth_fallback_allowed !== false
    || observedAuthSnapshot.sha256 !== snapshot.auth_json_sha256
    || observedAuthSnapshot.bytes !== snapshot.auth_json_bytes
    || !isAbsolute(snapshot.models_cache_source_path ?? "")
    || resolve(snapshot.models_cache_source_path) !== join(snapshotSourceHome, "models_cache.json")
    || snapshot.models_cache_sha256 !== plan.codex_model_effort_contract.cache_sha256
    || !Number.isInteger(snapshot.models_cache_bytes) || snapshot.models_cache_bytes < 1
    || observedCacheSnapshot.sha256 !== snapshot.models_cache_sha256
    || observedCacheSnapshot.bytes !== snapshot.models_cache_bytes
    || snapshot.models_cache_source_mode !== "immutable-snapshot-only"
    || snapshot.models_cache_mode !== "immutable-copy-before-provider-execution"
    || snapshot.mutable_models_cache_fallback_allowed !== false
    || snapshot.models_cache_role !== "provenance-only-not-execution-authority"
    || !isAbsolute(snapshot.model_catalog_source_path ?? "")
    || !snapshotCatalogRelative || snapshotCatalogRelative === ".."
    || snapshotCatalogRelative.startsWith(`..${sep}`)
    || isAbsolute(snapshotCatalogRelative)
    || snapshot.model_catalog_source_mode !== "immutable-snapshot-only"
    || snapshot.model_catalog_mode !== "isolated-copy-before-provider-execution"
    || snapshot.mutable_model_catalog_fallback_allowed !== false
    || snapshot.model_catalog_role !== "execution-model-authority"
    || observedModelCatalog.sha256 !== snapshot.model_catalog_sha256
    || observedModelCatalog.bytes !== snapshot.model_catalog_bytes
    || !isAbsolute(snapshot.codex_cli?.executable_path ?? "")
    || !isAbsolute(snapshot.codex_cli?.native_executable_path ?? "")
    || typeof snapshot.codex_cli?.version !== "string" || !snapshot.codex_cli.version
    || !SHA256_PATTERN.test(snapshot.codex_cli?.binary_sha256 ?? "")
    || !SHA256_PATTERN.test(snapshot.codex_cli?.native_binary_sha256 ?? "")
    || !cacheClientPolicyValid) {
    throw new Error("generated effort sweep exact Codex catalog/auth/CLI runtime binding drift");
  }
  if (plan.checkpoint_continuation_contract?.max_new_cells_per_invocation !== 1
    || plan.control_contract.timeout_seconds !== 720
    || plan.control_contract.max_concurrency !== 1
    || plan.control_contract.pacing?.inter_cell_delay_seconds !== 30
    || plan.controller_pre_edit_plan_contract?.provider_calls !== 0
    || plan.controller_pre_edit_plan_contract?.cursor_calls !== 0) {
    throw new Error("generated effort sweep execution or controller pre-edit contract drift");
  }
  if (plan.comparison_claim_contract?.claim !== "internal-effort-scaling-compatibility"
    || plan.comparison_claim_contract.descriptive_only !== true
    || plan.interpretation_contract?.mode !== "complete-block-only") {
    throw new Error("generated effort sweep claim boundary drift");
  }
  const expectedLocks = {
    skill_source_contract_sha256: canonicalSha256(plan.skill_lock_contract),
    objective_evaluator_contract_sha256: canonicalSha256(plan.objective_evaluator),
    browser_execution_contract_sha256: canonicalSha256(plan.browser_execution_contract),
    codex_model_effort_contract_sha256: canonicalSha256(plan.codex_model_effort_contract),
    controller_pre_edit_plan_contract_sha256: canonicalSha256(plan.controller_pre_edit_plan_contract),
    codex_catalog_snapshot_contract_sha256:
      canonicalSha256(plan.codex_catalog_snapshot_contract),
  };
  for (const [field, expected] of Object.entries(expectedLocks)) {
    if (plan.lock_manifest[field] !== expected) throw new Error(`generated effort sweep ${field} drift`);
  }
  if (plan.codex_catalog_snapshot_contract.catalog_lock_sha256
    !== plan.lock_manifest.catalog_lock_file_sha256) {
    throw new Error("generated effort sweep catalog lock SHA drift");
  }
  if (plan.codex_catalog_snapshot_contract.model_catalog_sha256
    !== plan.lock_manifest.model_catalog_file_sha256) {
    throw new Error("generated effort sweep model catalog lock SHA drift");
  }
  return plan;
}

export function renderCodexEffortSweepPreregistration(plan) {
  validateGeneratedCodexEffortSweepPlan(plan);
  const pairCount = plan.effort_sweep_contract.ordered_model_effort_pairs.length;
  const taskLines = plan.task_lock_contract.tasks
    .map((task, index) => `  ${CODEX_EFFORT_SWEEP_TASKS[index].label}. \`${task.task_id}\` — \`${task.task_tree_sha256}\``)
    .join("\n");
  return `# Codex all-effort sweep — provider-zero preregistration

This is a complete-block, descriptive effort-scaling run for the exact OmD portable variant \`${plan.cells[0].variant_id}\`. Its only admissible claim is \`internal-effort-scaling-compatibility\`; it is not a model ranking, a Reliability estimate, or a cross-model equivalence claim.

- Denominator: 3 source-commit-locked v18 tasks × ${pairCount} exact catalog-derived model/effort pairs × one trial = 51 cells.
- Runtime: Codex only. Cursor and Claude Code are forbidden.
- Execution: serial, 720 seconds per cell, fixed 30-second pacing, one new cell per invocation.
- Failure semantics: no retry, replacement, fallback, task swap, model substitution, effort substitution, or alias.
- Schedule: exact interleaved three-wave rotation \`0,+6,+12\`; every pair receives tasks A, B, and C exactly once.
- Browser: attach only to \`${plan.browser_execution_contract.connection_name}\` on the controller-started exact local CDP socket; browser launch is forbidden.
- Auth: copy only the immutable regular-file snapshot \`${plan.codex_catalog_snapshot_contract.auth_json_sha256}\` into each cell's isolated \`CODEX_HOME\`; mutable auth and symlink fallback are forbidden.
- Model authority: pass only the byte-locked local \`model_catalog_json\` snapshot \`${plan.codex_catalog_snapshot_contract.model_catalog_sha256}\`; the cache remains provenance only and TTL refresh cannot select a model profile.
- Controller plan: one provider-zero shipped-runner measured plan must exist before product editing.
- Provider/model/browser/network/Cursor/Claude calls made by this generator: 0/0/0/0/0/0.
- Exposure boundary: only this generator invocation is evidenced provider-zero; historical task exposure is unknown and is not asserted.

Tasks:
${taskLines}

Locks:

- task set: \`${plan.effort_sweep_contract.task_set_sha256}\`
- schedule: \`${plan.effort_sweep_contract.schedule_sha256}\`
- catalog file: \`${plan.lock_manifest.catalog_lock_file_sha256}\`
- local model catalog: \`${plan.lock_manifest.model_catalog_file_sha256}\`
- skill/source: \`${plan.lock_manifest.skill_source_contract_sha256}\`
- evaluator: \`${plan.lock_manifest.objective_evaluator_contract_sha256}\`
- browser: \`${plan.lock_manifest.browser_execution_contract_sha256}\`
- controller pre-edit plan: \`${plan.lock_manifest.controller_pre_edit_plan_contract_sha256}\`

Execution remains forbidden until the generated matrix is committed, materialized into a fresh root, provider-zero admission passes all 51 cells, the immutable catalog snapshot is installed, and the exact named browser preflight is green.
`;
}

export function writeCodexEffortSweepPreregistration({ plan, planPath, preregistrationPath }) {
  validateGeneratedCodexEffortSweepPlan(plan);
  const exactPlanPath = resolve(planPath);
  const exactPreregistrationPath = resolve(preregistrationPath);
  const exactReceiptPath = resolve(
    dirname(exactPlanPath),
    plan.preregistration_authority_contract.receipt_ref,
  );
  for (const path of [exactPlanPath, exactPreregistrationPath, exactReceiptPath]) {
    if (existsSync(path)) throw new Error(`refusing to overwrite an existing preregistration artifact: ${path}`);
  }
  writeJson(exactPlanPath, plan);
  const planBytes = readFileSync(exactPlanPath);
  const receipt = {
    schema_version: "0.2",
    status: "PREREGISTERED_PROVIDER_ZERO",
    binding: "exact-plan-file-bytes-sha256",
    plan_sha256: sha256(planBytes),
    plan_bytes: planBytes.length,
    receipt_ref: plan.preregistration_authority_contract.receipt_ref,
    experiment_id: plan.experiment_id,
    scheduled_cells: 51,
    task_set_sha256: plan.effort_sweep_contract.task_set_sha256,
    schedule_sha256: plan.effort_sweep_contract.schedule_sha256,
    provider_calls: 0,
    model_calls: 0,
    browser_calls: 0,
    network_calls: 0,
    cursor_calls: 0,
    claude_calls: 0,
  };
  writeJson(exactReceiptPath, receipt);
  mkdirSync(dirname(exactPreregistrationPath), { recursive: true });
  writeFileSync(
    exactPreregistrationPath,
    renderCodexEffortSweepPreregistration(plan),
    "utf8",
  );
  return {
    ...receipt,
    plan_path: exactPlanPath,
    preregistration_path: exactPreregistrationPath,
    preregistration_receipt_path: exactReceiptPath,
  };
}

function requiredArg(args, name) {
  const value = args.get(name);
  if (typeof value !== "string" || !value) throw new Error(`--${name} is required`);
  return value;
}

function main(argv = process.argv.slice(2)) {
  const args = parseArgs(argv);
  const planPath = resolve(requiredArg(args, "out"));
  const preregistrationPath = args.get("preregistration-out")
    ? resolve(String(args.get("preregistration-out")))
    : join(dirname(planPath), "PREREGISTRATION.md");
  const plan = createCodexEffortSweepPlan({
    productVersion: requiredArg(args, "product-version"),
    experimentId: requiredArg(args, "experiment-id"),
    outputRoot: requiredArg(args, "output-root"),
    vendorsRoot: requiredArg(args, "vendors-root"),
    variantId: requiredArg(args, "variant"),
    installedSkillSha256: requiredArg(args, "installed-skill-sha256"),
    taskSourceCommit: requiredArg(args, "task-source-commit"),
    catalogLockPath: requiredArg(args, "catalog-lock"),
    competitorsPath: args.get("competitors")
      ? resolve(String(args.get("competitors")))
      : join(benchRoot, "competitors.json"),
    tasksRoot: args.get("tasks-root")
      ? resolve(String(args.get("tasks-root")))
      : join(benchRoot, "tasks"),
    catalogAuthSourceHome: requiredArg(args, "catalog-auth-home"),
    catalogAuthJsonSourcePath: requiredArg(args, "catalog-auth-json-source"),
    modelsCacheSourcePath: requiredArg(args, "models-cache-source"),
    modelCatalogSourcePath: requiredArg(args, "model-catalog-source"),
    codexCliExecutablePath: requiredArg(args, "codex-cli-executable"),
    codexCliNativeExecutablePath: requiredArg(args, "codex-cli-native-executable"),
    codexCliVersion: requiredArg(args, "codex-cli-version"),
    codexCliBinarySha256: requiredArg(args, "codex-cli-binary-sha256"),
    codexCliNativeBinarySha256: requiredArg(args, "codex-cli-native-binary-sha256"),
    cliCacheClientVersionPolicy: requiredArg(args, "cli-cache-client-version-policy"),
    cliCacheClientVersionMismatchJustification: args.get("cli-cache-client-version-mismatch-justification")
      ? String(args.get("cli-cache-client-version-mismatch-justification"))
      : null,
    browserConnectionName: requiredArg(args, "browser-connection"),
    browserCdpPort: Number(requiredArg(args, "browser-cdp-port")),
    systemId: args.get("system-id")
      ? String(args.get("system-id"))
      : "codex-all-effort-omd-current",
  });
  const receipt = writeCodexEffortSweepPreregistration({
    plan,
    planPath,
    preregistrationPath,
  });
  console.log(JSON.stringify(receipt, null, 2));
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) {
  main();
}
