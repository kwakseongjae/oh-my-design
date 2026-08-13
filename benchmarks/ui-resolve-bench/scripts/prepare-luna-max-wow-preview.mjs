#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import {
  existsSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { dirname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs, sha256 } from "./_lib.mjs";

const here = dirname(fileURLToPath(import.meta.url));
export const repoRoot = resolve(here, "../../..");
export const defaultConfigPath = "benchmarks/ui-resolve-bench/config/omd-luna-max-wow-preview-v0.1.json";
export const defaultNeutralInputLockPath = "benchmarks/ui-resolve-bench/config/omd-luna-max-neutral-input-lock-v0.1.json";
export const controllerPath = relative(repoRoot, fileURLToPath(import.meta.url)).split(sep).join("/");
export const executionMaterializerPath = "benchmarks/ui-resolve-bench/scripts/materialize-luna-max-wow-preview.mjs";
export const executionRunnerPath = "benchmarks/ui-resolve-bench/scripts/run-luna-max-wow-preview-cell.mjs";
export const admissionGeneratorPath = "benchmarks/ui-resolve-bench/scripts/admit-luna-max-wow-preview.mjs";
export const admissionReceiptGeneratorPath = "benchmarks/ui-resolve-bench/scripts/prepare-luna-max-admission-receipts.mjs";
export const evaluationRuntimeReceiptGeneratorPath = "benchmarks/ui-resolve-bench/scripts/prepare-luna-max-evaluation-runtime-receipt.mjs";
export const resultAuditorPath = "benchmarks/ui-resolve-bench/scripts/audit-luna-max-wow-preview.mjs";
export const scoreGatePath = "benchmarks/ui-resolve-bench/config/omd-luna-max-wow-preview-score-gate-v0.1.json";
export const WORKSPACE_RUNTIME_BOUNDARY = "Benchmark runtime boundary: keep every generated file and temporary validation artifact inside the current workspace (use .benchmark/tmp when needed). Do not read or write external paths, including /tmp, and do not launch or control browsers or use network access; the external evaluator owns browser checks.";
export const EXECUTION_CLOSURE_PATHS = Object.freeze([
  executionMaterializerPath,
  executionRunnerPath,
  admissionGeneratorPath,
  admissionReceiptGeneratorPath,
  evaluationRuntimeReceiptGeneratorPath,
  resultAuditorPath,
  scoreGatePath,
  "benchmarks/ui-resolve-bench/scripts/run-codex.mjs",
  "benchmarks/ui-resolve-bench/scripts/_lib.mjs",
  "benchmarks/ui-resolve-bench/scripts/codex-browser-sandbox-contract.mjs",
  "benchmarks/ui-resolve-bench/scripts/codex-tool-mode-contract.mjs",
  "benchmarks/ui-resolve-bench/scripts/prepare-run-matrix.mjs",
  "benchmarks/ui-resolve-bench/scripts/audit-omd-2.0-competitor-source-lock.mjs",
]);
const SHA = /^[a-f0-9]{64}$/;
const COMMIT = /^[a-f0-9]{40}$/;
export const CORE_SCHEMA_FILES = Object.freeze([
  "design-md-core-manifest-v2.schema.json",
  "design-system-graph-v2.schema.json",
  "design-system-provenance-v2.schema.json",
  "design-system-coverage-v2.schema.json",
  "design-md-core-adoption-review-v2.schema.json",
  "design-md-core-adoption-receipt-v2.schema.json",
  "design-md-core-project-checkpoint-v2.schema.json",
]);

function canonical(value) {
  if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
  if (value && typeof value === "object") {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonical(value[key])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}
function readJson(path) { return JSON.parse(readFileSync(path, "utf8")); }
function git(...args) {
  return execFileSync("git", ["-C", repoRoot, ...args], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
}
function gitBytes(commit, path) {
  return execFileSync("git", ["-C", repoRoot, "show", `${commit}:${path}`], {
    encoding: "buffer",
    stdio: ["ignore", "pipe", "pipe"],
  });
}
function assertRegular(path, label) {
  if (!existsSync(path)) throw new Error(`${label} missing: ${path}`);
  const info = lstatSync(path);
  if (!info.isFile() || info.isSymbolicLink()) throw new Error(`${label} must be a regular non-symlink file: ${path}`);
}
function resolveRepoRelative(path, label) {
  if (!path || isAbsolute(path) || String(path).split(/[\\/]/).includes("..")) {
    throw new Error(`${label} must be a repository-relative path`);
  }
  const absolute = resolve(repoRoot, path);
  if (absolute !== repoRoot && !absolute.startsWith(`${repoRoot}${sep}`)) throw new Error(`${label} escapes repository`);
  return absolute;
}
export function sourceAuthorityEntry(path, current, committed) {
  if (!Buffer.from(current).equals(Buffer.from(committed))) throw new Error(`source authority differs from commit: ${path}`);
  return { path, bytes: current.length, sha256: sha256(current) };
}
function sourceEntry(path, commit) {
  const absolute = resolveRepoRelative(path, "source authority");
  assertRegular(absolute, "source authority");
  const current = readFileSync(absolute);
  const committed = gitBytes(commit, path);
  return sourceAuthorityEntry(path, current, committed);
}
function assertZeroCalls(value, label) {
  for (const field of ["provider_calls", "model_calls", "browser_calls"]) {
    if (value?.[field] !== 0) throw new Error(`${label} ${field} must be zero`);
  }
}

export function validateConfig(config, { readAuthority = (path) => readFileSync(resolveRepoRelative(path, "authority")) } = {}) {
  if (config?.schema_version !== "0.1"
    || config.contract_id !== "omd-luna-max-wow-preview-v0.1"
    || config.experiment_id !== "omd-luna-max-wow-preview-2.0.0-v0.1"
    || config.provider_execution_allowed !== false
    || config.activation_phrase !== "ㄱㄱ") throw new Error("Luna Max config identity drift");
  if (config.runtime?.provider !== "codex" || config.runtime?.model !== "gpt-5.6-luna" || config.runtime?.effort !== "max") {
    throw new Error("Luna Max exact runtime drift");
  }
  if (config.runtime?.trials_per_task_arm !== 3 || config.runtime?.maximum_cells !== 54
    || config.runtime?.scheduled_provider_cells !== 48 || config.runtime?.serial !== true) {
    throw new Error("Luna Max matrix budget drift");
  }
  for (const field of ["retry_budget_per_cell", "replacement_budget_per_cell", "fallback_budget_per_cell", "model_substitution_budget", "effort_substitution_budget"]) {
    if (config.runtime?.[field] !== 0) throw new Error(`Luna Max ${field} must be zero`);
  }
  if (!Array.isArray(config.tasks) || config.tasks.length !== 3 || !Array.isArray(config.arms) || config.arms.length !== 6) {
    throw new Error("Luna Max requires exactly 3 tasks and 6 arms");
  }
  if (new Set(config.tasks.map((item) => item.task_id)).size !== 3 || new Set(config.arms).size !== 6) {
    throw new Error("Luna Max task and arm identifiers must be unique");
  }
  for (const authority of Object.values(config.authorities ?? {})) {
    if (!authority?.path || !SHA.test(authority.sha256 ?? "")) throw new Error("invalid config authority");
    if (sha256(readAuthority(authority.path)) !== authority.sha256) throw new Error(`config authority drift: ${authority.path}`);
  }
  if (config.task_selection_status !== "selected-neutral-input-awaiting-packet-receipt") {
    throw new Error("neutral task selection status drift");
  }
  for (const gate of ["neutral_task_packet_lock", "official_competitor_freshness_lock", "public_core_schema_liveness_receipt", "static_runtime_capability_receipt", "runtime_attribution_telemetry_receipt", "existing_browser_harness_identity_receipt", "evaluation_runtime_receipt"]) {
    const value = config.admission?.[gate];
    if (value?.required !== true || value.status !== "unresolved" || value.path !== null || value.sha256 !== null) {
      throw new Error(`${gate} must remain an unresolved required input in the template`);
    }
  }
  assertZeroCalls(config.preparation_calls, "config preparation");
  if (config.runtime?.workspace_boundary_applies_to_every_arm !== true
    || config.runtime?.workspace_boundary_prompt_suffix !== WORKSPACE_RUNTIME_BOUNDARY) {
    throw new Error("Luna Max workspace runtime boundary drift");
  }
  for (const field of ["same_user_task_packet_bytes", "native_activation_prefix_is_only_arm_specific_prompt_delta", "activation_prefix_and_invocation_hash_public", "arm_specific_design_or_task_facts_forbidden"]) {
    if (config.fairness_contract?.[field] !== true) throw new Error(`Luna Max fairness contract drift: ${field}`);
  }
  return true;
}

export function validateNeutralTaskPacketLock(lock, config) {
  if (lock?.schema_version !== "0.1" || lock.kind !== "neutral-wow-preview-task-packet-lock" || lock.status !== "frozen") {
    throw new Error("neutral task packet lock identity drift");
  }
  assertZeroCalls(lock, "neutral task packet lock");
  if (lock.same_source_facts_for_every_arm !== true || lock.task_specific_design_md_allowed !== false
    || lock.oracle_or_mutant_allowed !== false) throw new Error("neutral task packet fairness drift");
  for (const [field, authorityName] of [["task_set", "task_set"], ["blank_starter", "blank_starter"]]) {
    const pinned = lock[field];
    const authority = config.authorities[authorityName];
    if (pinned?.path !== authority.path || pinned.sha256 !== authority.sha256) {
      throw new Error(`neutral task packet ${field} authority drift`);
    }
  }
  const forbidden = lock.forbidden_prepared_root_entries;
  if (!Array.isArray(forbidden) || !["DESIGN.md", ".omd/", "oracle", "mutant", "hidden-examples"].every((item) => forbidden.includes(item))) {
    throw new Error("neutral task packet prepared-root exclusions drift");
  }
  if (!Array.isArray(lock.tasks) || lock.tasks.length !== config.tasks.length) throw new Error("neutral task packet count drift");
  const expected = new Map(config.tasks.map((item) => [item.task_id, item]));
  for (const task of lock.tasks) {
    const locked = expected.get(task.task_id);
    if (!locked || task.prompt_sha256 !== locked.prompt_sha256 || task.prompt_bytes !== locked.prompt_bytes
      || !SHA.test(task.source_facts_sha256 ?? "")) {
      throw new Error(`neutral task packet evidence incomplete: ${task.task_id}`);
    }
    const expectedFacts = sha256(JSON.stringify({
      blank_starter_sha256: lock.blank_starter.sha256,
      prompt_sha256: task.prompt_sha256,
    }));
    if (task.source_facts_sha256 !== expectedFacts) throw new Error(`neutral task packet source facts drift: ${task.task_id}`);
  }
  return true;
}

export function validateTaskPrompts(config, taskSet) {
  for (const lock of config.tasks) {
    const task = taskSet?.tasks?.find((item) => item.id === lock.task_id);
    if (!task || typeof task.prompt !== "string") throw new Error(`task missing: ${lock.task_id}`);
    if (Buffer.byteLength(task.prompt) !== lock.prompt_bytes || sha256(task.prompt) !== lock.prompt_sha256) {
      throw new Error(`task prompt drift: ${lock.task_id}`);
    }
  }
  return true;
}

export function validateCompetitorLock(lock, config) {
  if (lock?.schema_version !== "0.1" || lock.lock_id !== "omd-2.0-competitor-source-lock-v0.1" || lock.status !== "locked-provider-zero") {
    throw new Error("official competitor freshness lock identity drift");
  }
  assertZeroCalls(lock.execution_boundary, "competitor lock");
  const required = config.admission.official_competitor_freshness_lock.required_source_ids;
  if (!Array.isArray(lock.sources) || lock.sources.length !== required.length) throw new Error("competitor lock source count drift");
  if (canonical(lock.sources.map((item) => item.id).sort()) !== canonical([...required].sort())) {
    throw new Error("competitor lock sources drift");
  }
  for (const source of lock.sources) {
    if (!/^https:\/\/github\.com\//.test(source.repository ?? "")
      || !COMMIT.test(source.source_ref?.resolved_commit ?? "")
      || !SHA.test(source.source_tree?.sha256 ?? "")
      || !source.official_source
      || !source.activation?.exact_prefix
      || !source.license?.spdx) throw new Error(`competitor lock evidence incomplete: ${source.id}`);
  }
  const sourceMap = config.admission.official_competitor_freshness_lock.arm_source_map;
  for (const [variant, sourceId] of Object.entries(sourceMap)) {
    const source = lock.sources.find((item) => item.id === sourceId);
    if (source?.benchmark_variant_id !== variant) throw new Error(`competitor arm/source mapping drift: ${variant}`);
  }
  return true;
}

export function validateSchemaLivenessReceipt(receipt, sourceCommit, expectedSchemaBytes) {
  if (receipt?.schema_version !== "0.1"
    || receipt.kind !== "public-core-schema-liveness-receipt"
    || receipt.pass !== true
    || receipt.source_commit !== sourceCommit
    || receipt.base_url !== "https://oh-my-design.kr") throw new Error("public schema liveness receipt identity drift");
  assertZeroCalls(receipt, "schema liveness receipt");
  if (!Array.isArray(receipt.schemas) || receipt.schemas.length !== CORE_SCHEMA_FILES.length) {
    throw new Error("public schema liveness receipt must contain exactly seven schemas");
  }
  const byName = new Map(receipt.schemas.map((item) => [item.name, item]));
  for (const name of CORE_SCHEMA_FILES) {
    const item = byName.get(name);
    const expected = expectedSchemaBytes(name);
    const digest = sha256(expected);
    if (!item || item.http_status !== 200 || !/^application\/(?:schema\+)?json(?:\s*;|$)/i.test(item.content_type ?? "")
      || item.bytes !== expected.length || item.local_sha256 !== digest || item.remote_sha256 !== digest) {
      throw new Error(`public schema liveness mismatch: ${name}`);
    }
  }
  return true;
}

export function validateStaticRuntimeCapabilityReceipt(receipt, sourceCommit) {
  if (receipt?.schema_version !== "0.1" || receipt.kind !== "codex-luna-max-static-runtime-capability"
    || receipt.pass !== true || receipt.source_commit !== sourceCommit) throw new Error("static runtime capability receipt identity drift");
  assertZeroCalls(receipt, "static runtime capability receipt");
  if (receipt.runtime?.provider !== "codex" || receipt.runtime.model !== "gpt-5.6-luna"
    || receipt.runtime.effort !== "max" || receipt.runtime.catalog_supports_model !== true
    || receipt.runtime.catalog_supports_effort !== true || !SHA.test(receipt.runtime.catalog_sha256 ?? "")) {
    throw new Error("static Luna Max capability drift");
  }
  if (!SHA.test(receipt.runtime.model_profile_sha256 ?? "")) throw new Error("static Luna Max model profile binding drift");
  return true;
}

export function validateRuntimeAttributionReceipt(receipt, sourceCommit) {
  if (receipt?.schema_version !== "0.1"
    || receipt.kind !== "codex-luna-max-runtime-attribution-preflight"
    || receipt.pass !== true || receipt.source_commit !== sourceCommit
    || receipt.excluded_from_benchmark_denominator !== true) throw new Error("runtime/browser telemetry receipt identity drift");
  if (receipt.provider_calls !== 1 || receipt.model_calls !== 1) throw new Error("runtime attribution preflight must record exactly one provider and model call");
  const runtime = receipt.runtime;
  if (runtime?.provider !== "codex" || runtime.model !== "gpt-5.6-luna" || runtime.effort !== "max"
    || runtime.model_selector_observed !== true || runtime.effort_selector_observed !== true
    || !SHA.test(runtime.telemetry_sha256 ?? "")) throw new Error("exact Luna Max runtime telemetry drift");
  if (receipt.browser_calls !== 0) throw new Error("runtime attribution preflight must not claim browser work");
  return true;
}

export function validateNamedBrowserReceipt(receipt, sourceCommit) {
  if (receipt?.schema_version !== "0.1" || receipt.kind !== "existing-browser-harness-cdp-preflight"
    || receipt.pass !== true || receipt.source_commit !== sourceCommit
    || receipt.excluded_from_benchmark_denominator !== true) throw new Error("existing browser-harness receipt identity drift");
  if (receipt.provider_calls !== 0 || receipt.model_calls !== 0 || receipt.browser_calls !== 1) {
    throw new Error("existing browser-harness preflight call accounting drift");
  }
  const browser = receipt.browser;
  const tabCreationCalls = browser?.tab_creation_calls ?? 0;
  const tabCreatedByController = browser?.tab_created_by_controller ?? false;
  if (browser?.name !== "default-local-cdp" || browser.transport !== "local-existing-chrome-cdp"
    || browser.named_existing !== true || browser.available !== true || browser.launched_by_controller !== false
    || browser.navigation_calls !== 0 || !/^(?:about:blank|chrome-error:\/\/chromewebdata\/?|http:\/\/(?:127\.0\.0\.1|localhost)(?::\d+)?(?:\/|$))/.test(browser.url ?? "")
    || ![0, 1].includes(tabCreationCalls)
    || (tabCreationCalls === 0 ? tabCreatedByController !== false : tabCreatedByController !== true || browser.url !== "about:blank")
    || !SHA.test(browser.identity_sha256 ?? "") || !SHA.test(browser.executable_sha256 ?? "")) throw new Error("existing browser-harness telemetry drift");
  return true;
}

export function validateEvaluationRuntimeReceipt(receipt, sourceCommit, config) {
  if (receipt?.schema_version !== "0.1" || receipt.kind !== "omd-luna-max-evaluation-runtime-receipt"
    || receipt.pass !== true || receipt.source_commit !== sourceCommit) throw new Error("evaluation runtime receipt identity drift");
  for (const field of ["provider_calls", "model_calls", "browser_calls", "network_calls"]) {
    if (receipt[field] !== 0) throw new Error(`evaluation runtime receipt ${field} must be zero`);
  }
  const expectedAuthorities = ["evaluator", "evaluator_adapters", "task_set", "task_set_validator", "adapter_validator"];
  if (canonical(Object.keys(receipt.evaluation_authorities ?? {}).sort()) !== canonical([...expectedAuthorities].sort())) {
    throw new Error("evaluation runtime authority inventory drift");
  }
  for (const name of expectedAuthorities) {
    const actual = receipt.evaluation_authorities[name];
    const expected = config.authorities[name];
    if (actual?.path !== expected?.path || actual.sha256 !== expected.sha256 || !Number.isSafeInteger(actual.bytes) || actual.bytes <= 0) {
      throw new Error(`evaluation runtime authority drift: ${name}`);
    }
  }
  if (!receipt.browser?.executable_path || !Number.isSafeInteger(receipt.browser.executable_bytes)
    || receipt.browser.executable_bytes <= 0 || !SHA.test(receipt.browser.executable_sha256 ?? "")
    || typeof receipt.browser.version !== "string" || receipt.browser.version.length === 0) {
    throw new Error("evaluation runtime browser identity drift");
  }
  if (!Array.isArray(receipt.fonts?.files) || receipt.fonts.files.length === 0
    || receipt.fonts.file_count !== receipt.fonts.files.length || !SHA.test(receipt.fonts.sha256 ?? "")) {
    throw new Error("evaluation runtime font inventory drift");
  }
  if (receipt.evaluator_runtime?.engine !== "chromium" || receipt.evaluator_runtime.headless !== true
    || receipt.evaluator_runtime.network_policy?.local_origin_only !== true
    || !Array.isArray(receipt.evaluator_runtime.contexts?.viewports)
    || receipt.evaluator_runtime.contexts.viewports.length !== 4) {
    throw new Error("evaluation runtime environment drift");
  }
  if (receipt.dependencies?.package_lock?.path !== "package-lock.json"
    || !SHA.test(receipt.dependencies.package_lock.sha256 ?? "")
    || !Array.isArray(receipt.dependencies.resolved) || receipt.dependencies.resolved.length !== 2) {
    throw new Error("evaluation runtime dependency closure drift");
  }
  return true;
}

export function buildCells(config) {
  const cells = [];
  let order = 0;
  for (let trial = 1; trial <= config.runtime.trials_per_task_arm; trial += 1) {
    for (let taskIndex = 0; taskIndex < config.tasks.length; taskIndex += 1) {
      const task = config.tasks[taskIndex];
      const rotation = (taskIndex + trial - 1) % config.arms.length;
      for (let armIndex = 0; armIndex < config.arms.length; armIndex += 1) {
        const arm = config.arms[(armIndex + rotation) % config.arms.length];
        order += 1;
        cells.push({
          id: `${task.task_id}-luna-max-r${trial}-${arm}`,
          order,
          task_id: task.task_id,
          prompt_bytes: task.prompt_bytes,
          prompt_sha256: task.prompt_sha256,
          variant_id: arm,
          runtime: "codex",
          model_id: "gpt-5.6-luna",
          effort: "max",
          trial_index: trial,
          eligible_for_execution_and_scoring: !(arm === "taste-eligible-scope-only" && task.family !== "landing"),
          eligibility_reason: arm === "taste-eligible-scope-only" && task.family !== "landing"
            ? "taste-declared-scope-excludes-this-product-ui-family"
            : null,
          retry_budget: 0,
          replacement_budget: 0,
          fallback_budget: 0,
        });
      }
    }
  }
  if (cells.length !== 54 || new Set(cells.map((cell) => cell.id)).size !== 54) throw new Error("Luna Max matrix generation drift");
  if (cells.filter((cell) => cell.eligible_for_execution_and_scoring).length !== 48) throw new Error("Luna Max scheduled provider denominator drift");
  return cells;
}

export function buildExecutionAdapterPlan(config, cells, outputRoot) {
  const scheduled = cells.filter((cell) => cell.eligible_for_execution_and_scoring).map((cell) => ({
    id: cell.id,
    task_id: cell.task_id,
    variant_id: cell.variant_id,
    system_id: `luna-max-${cell.variant_id}`,
    runtime: cell.runtime,
    model_id: cell.model_id,
    effort: cell.effort,
    timeout_seconds: 900,
    trial_index: cell.trial_index,
  }));
  return {
    schema_version: "0.1",
    experiment_id: config.experiment_id,
    output_root: resolve(outputRoot, "prepared-cells"),
    attribution_scope: "provider-observed-only",
    provider_routing_contract: {
      cursor_allowed: false,
      allowed_runtime: "codex",
      allowed_model_id: "gpt-5.6-luna",
      allowed_effort: "max",
      fail_closed: true,
    },
    checkpoint_continuation_contract: {
      max_new_cells_per_invocation: 1,
      preserve_completed_cells: true,
      failed_cells_retained_in_denominator: true,
      completed_root_not_resumable: true,
    },
    cells: scheduled,
  };
}

function assertCleanExactHead(sourceCommit) {
  if (!COMMIT.test(sourceCommit) || sourceCommit !== git("rev-parse", "HEAD")) throw new Error("source commit must equal current HEAD");
  if (git("status", "--porcelain=v1", "--untracked-files=all") !== "") throw new Error("source worktree must be clean");
}
function readExternalReceipt(path, label) {
  const absolute = resolve(String(path ?? ""));
  assertRegular(absolute, label);
  return { absolute, bytes: readFileSync(absolute), value: readJson(absolute) };
}
function writeJsonExclusive(path, value) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, { encoding: "utf8", flag: "wx" });
}

export function prepareCommand(args) {
  const sourceCommit = String(args.get("source-commit") ?? git("rev-parse", "HEAD"));
  assertCleanExactHead(sourceCommit);
  const out = resolve(String(args.get("out") ?? ""));
  if (!out || out === repoRoot || out.startsWith(`${repoRoot}${sep}`) || existsSync(out)) {
    throw new Error("output root must be fresh and outside the repository");
  }
  if (String(args.get("activation-phrase") ?? "") !== "ㄱㄱ") throw new Error("exact activation phrase is required");
  const configRelative = String(args.get("config") ?? defaultConfigPath);
  const configAbsolute = resolveRepoRelative(configRelative, "Luna Max config");
  const config = readJson(configAbsolute);
  validateConfig(config);
  const taskSet = readJson(resolveRepoRelative(config.authorities.task_set.path, "task set"));
  validateTaskPrompts(config, taskSet);

  const taskPacketRelative = String(args.get("task-packet-lock") ?? defaultNeutralInputLockPath);
  const taskPacketAbsolute = resolveRepoRelative(taskPacketRelative, "neutral task packet lock");
  assertRegular(taskPacketAbsolute, "neutral task packet lock");
  const taskPacketLock = readJson(taskPacketAbsolute);
  validateNeutralTaskPacketLock(taskPacketLock, config);

  const competitorRelative = String(args.get("competitor-lock") ?? "");
  const competitorAbsolute = resolveRepoRelative(competitorRelative, "competitor lock");
  assertRegular(competitorAbsolute, "competitor lock");
  const competitorLock = readJson(competitorAbsolute);
  validateCompetitorLock(competitorLock, config);

  const schemaReceipt = readExternalReceipt(args.get("schema-receipt"), "schema liveness receipt");
  validateSchemaLivenessReceipt(schemaReceipt.value, sourceCommit, (name) => gitBytes(sourceCommit, `web/public/schema/${name}`));
  const staticRuntimeReceipt = readExternalReceipt(args.get("static-runtime-receipt"), "static runtime capability receipt");
  validateStaticRuntimeCapabilityReceipt(staticRuntimeReceipt.value, sourceCommit);
  const runtimeReceipt = readExternalReceipt(args.get("runtime-receipt"), "runtime attribution telemetry receipt");
  validateRuntimeAttributionReceipt(runtimeReceipt.value, sourceCommit);
  const browserReceipt = readExternalReceipt(args.get("browser-receipt"), "existing browser-harness identity receipt");
  validateNamedBrowserReceipt(browserReceipt.value, sourceCommit);
  const evaluationRuntimeReceipt = readExternalReceipt(args.get("evaluation-runtime-receipt"), "evaluation runtime receipt");
  validateEvaluationRuntimeReceipt(evaluationRuntimeReceipt.value, sourceCommit, config);

  const sourcePaths = [
    configRelative,
    controllerPath,
    ...EXECUTION_CLOSURE_PATHS,
    taskPacketRelative,
    competitorRelative,
    ...Object.values(config.authorities).map((item) => item.path),
    ...CORE_SCHEMA_FILES.map((name) => `web/public/schema/${name}`),
  ];
  const sourceAuthority = [...new Set(sourcePaths)].sort().map((path) => sourceEntry(path, sourceCommit));
  const cells = buildCells(config);
  const executionPlan = buildExecutionAdapterPlan(config, cells, out);
  const matrix = {
    schema_version: "0.1",
    kind: "omd-luna-max-wow-preview",
    experiment_id: config.experiment_id,
    status: "locked-provider-zero-execution-materializer-ready-admission-required",
    provider_execution_allowed: false,
    source_commit: sourceCommit,
    source_authority: { files: sourceAuthority, sha256: sha256(canonical(sourceAuthority)) },
    runtime: config.runtime,
    fairness_contract: config.fairness_contract,
    task_count: 3,
    arm_count: 6,
    maximum_cell_slots: 54,
    scheduled_provider_cells: 48,
    ineligible_unexecuted_slots: 6,
    cells,
    prepared_root_policy: {
      same_blank_starter_for_every_arm: true,
      task_specific_design_md_allowed: false,
      forbidden_entries_before_execution: taskPacketLock.forbidden_prepared_root_entries,
      execution_controller_must_fail_closed_on_forbidden_entry: true,
    },
    prerequisite_receipts: {
      neutral_task_packet_lock: { path: taskPacketRelative, sha256: sha256(readFileSync(taskPacketAbsolute)) },
      competitor_lock: { path: competitorRelative, sha256: sha256(readFileSync(competitorAbsolute)) },
      schema_liveness: { sha256: sha256(schemaReceipt.bytes) },
      static_runtime_capability: { sha256: sha256(staticRuntimeReceipt.bytes) },
      runtime_attribution_telemetry: { sha256: sha256(runtimeReceipt.bytes) },
      existing_browser_harness_identity: { sha256: sha256(browserReceipt.bytes) },
      evaluation_runtime: { sha256: sha256(evaluationRuntimeReceipt.bytes) },
    },
    execution_adapter: {
      path: "RUN-MATRIX.execution.json",
      sha256: sha256(`${JSON.stringify(executionPlan, null, 2)}\n`),
      schema_compatible_validator: "benchmarks/ui-resolve-bench/scripts/prepare-run-matrix.mjs#validateRunMatrixPlan",
      implementation_status: "provider-zero-cell-runner-ready-admission-required",
      prepare_command: `node ${executionMaterializerPath} materialize --locked-root <LOCKED_ROOT> --checkout-root <EXACT_OFFICIAL_CHECKOUT_ROOT> --out <FRESH_EXTERNAL_OUTPUT_ROOT> --source-commit ${sourceCommit}`,
      execute_command: `node ${executionRunnerPath} run --materialized-root <MATERIALIZED_ROOT> --admission <ADMISSION_JSON> --runtime-attribution-receipt <RUNTIME_RECEIPT> --browser-receipt <BROWSER_RECEIPT> --runtime-home <IMMUTABLE_AUTH_AND_CATALOG_SNAPSHOT> --source-commit ${sourceCommit} --cell-id <NEXT_LOCKED_CELL_ID>`,
      max_new_cells_per_invocation: 1,
      order_prompt_model_effort_mutation_allowed: false,
      retain_failures_in_denominator: true,
    },
    execution_control: { serial: true, retries: 0, replacements: 0, fallback: 0, model_substitutions: 0, effort_substitutions: 0 },
    preparation_calls: { provider_calls: 0, model_calls: 0, browser_calls: 0 },
  };
  matrix.lock_sha256 = sha256(canonical(matrix));
  const receipt = {
    schema_version: "0.1",
    kind: "omd-luna-max-wow-preview-preregistration-receipt",
    experiment_id: config.experiment_id,
    source_commit: sourceCommit,
    matrix_sha256: sha256(`${JSON.stringify(matrix, null, 2)}\n`),
    admitted_prerequisites: ["neutral-same-facts-task-packets", "official-competitor-freshness", "seven-public-core-schemas", "static-luna-max-capability", "one-call-luna-max-attribution", "existing-browser-harness-cdp", "evaluation-runtime-and-fonts"],
    provider_execution_allowed: false,
    provider_calls: 0,
    model_calls: 0,
    browser_calls: 0,
  };
  mkdirSync(out, { recursive: false });
  writeJsonExclusive(join(out, "RUN-MATRIX.locked.json"), matrix);
  writeJsonExclusive(join(out, "RUN-MATRIX.execution.json"), executionPlan);
  writeJsonExclusive(join(out, "PREREGISTRATION.receipt.json"), receipt);
  writeJsonExclusive(join(out, "STATUS.json"), {
    schema_version: "0.1",
    experiment_id: config.experiment_id,
    status: matrix.status,
    next: "Sol/xhigh must independently audit this root before any Luna/provider/browser execution.",
    provider_calls: 0,
    model_calls: 0,
    browser_calls: 0,
  });
  return { out, matrix, receipt };
}

function main(argv = process.argv.slice(2)) {
  const [command, ...rest] = argv;
  if (command === "validate-inputs") {
    const args = parseArgs(rest);
    const config = readJson(resolveRepoRelative(String(args.get("config") ?? defaultConfigPath), "Luna Max config"));
    validateConfig(config);
    const lockPath = resolveRepoRelative(String(args.get("task-packet-lock") ?? defaultNeutralInputLockPath), "neutral task packet lock");
    const lock = readJson(lockPath);
    validateNeutralTaskPacketLock(lock, config);
    validateTaskPrompts(config, readJson(resolveRepoRelative(config.authorities.task_set.path, "task set")));
    process.stdout.write(`${JSON.stringify({ status: "pass", lock_id: lock.lock_id, tasks: lock.tasks.length, provider_calls: 0, model_calls: 0, browser_calls: 0 })}\n`);
    return;
  }
  if (command !== "prepare") throw new Error("usage: prepare-luna-max-wow-preview.mjs prepare --out <fresh-external-dir> --source-commit <HEAD> --activation-phrase ㄱㄱ --task-packet-lock <repo-relative-lock> --competitor-lock <repo-relative-lock> --schema-receipt <path> --static-runtime-receipt <path> --runtime-receipt <path> --browser-receipt <path> --evaluation-runtime-receipt <path>");
  const result = prepareCommand(parseArgs(rest));
  process.stdout.write(`${result.out}\n`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try { main(); } catch (error) {
    process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
    process.exitCode = 1;
  }
}
