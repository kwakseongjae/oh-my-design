#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, dirname, join, relative, resolve, sep } from "node:path";
import { isDeepStrictEqual } from "node:util";
import { fileURLToPath } from "node:url";
import { parseArgs, readJson, sha256, writeJson } from "./_lib.mjs";
import { summarizeClaudeToolErrors } from "./check-claude-runner.mjs";
import { classifyProofTrace, evaluateProofExecutionGate } from "./proof-trace-contract.mjs";
import {
  assertProviderRoute,
  CURSOR_RUNTIME_DISPLAY_LABELS,
} from "./runtime-contract.mjs";
import {
  evaluateHostPolicyGate,
  summarizeHostPolicyStates,
} from "./host-policy-contract.mjs";

const FAMILIES = new Set(["model", "skill", "harness", "prompt-arena", "factorial"]);
const SHA256_PATTERN = /^[a-f0-9]{64}$/;
const STATIC_PREVIEW_RECEIPT_SCHEMA_VERSION = "0.3";
const STATIC_PREVIEW_GUARD_VERSION = "locked-typography-inline-script-syntax-v2";
const STATIC_PREVIEW_GUARD_SCOPE = "locked-typography-direct-declarations+classic-inline-script-syntax";
const INLINE_SCRIPT_SYNTAX_CONTRACT = Object.freeze({
  version: "classic-inline-node-vm-v1",
  compiler: "node:vm.Script",
  execution: "compile-only-never-run",
  compiled: "inline scripts without src whose type is absent, empty, or a JavaScript MIME essence",
  skipped: "scripts with src, type=module, or a non-JavaScript data-block type",
  malformed_markup: "fail-closed",
});
const STATIC_PREVIEW_RECEIPT_KEYS = Object.freeze([
  "candidate_path",
  "candidate_sha256",
  "failures",
  "guard_scope",
  "guard_version",
  "inline_script_syntax",
  "inventory_sha256",
  "kind",
  "schema_version",
  "source_contract_sha256",
  "state",
]);
const INLINE_SCRIPT_SYNTAX_KEYS = Object.freeze([
  "compiled_classic_inline_count",
  "contract",
  "discovered_script_count",
  "failures",
  "skipped_external_count",
  "skipped_module_count",
  "skipped_non_javascript_count",
]);
const INLINE_SCRIPT_SYNTAX_COUNT_KEYS = Object.freeze([
  "compiled_classic_inline_count",
  "skipped_external_count",
  "skipped_module_count",
  "skipped_non_javascript_count",
]);
const COMPLETE_BLOCK_RECORD_KIND = "codex-complete-block-effort-scaling-v2";
const ROUTING_ATTESTATION_SCHEMA_VERSION = "0.2";
const HOST_POLICY_INFRASTRUCTURE_REASONS = new Set([
  "installed-policy-not-ready",
  "installed-policy-state-missing",
  "installed-policy-state-invalid",
  "native-browser-unintercepted",
  "proof-trace-not-analyzable",
]);

function exactObjectKeys(value, expectedKeys) {
  return Boolean(
    value
    && typeof value === "object"
    && !Array.isArray(value)
    && isDeepStrictEqual(Object.keys(value).sort(), [...expectedKeys].sort()),
  );
}

function inspectInlineScriptSyntaxContract(value) {
  const shapeValid = exactObjectKeys(value, INLINE_SCRIPT_SYNTAX_KEYS);
  const contractValid = shapeValid
    && exactObjectKeys(value.contract, Object.keys(INLINE_SCRIPT_SYNTAX_CONTRACT))
    && isDeepStrictEqual(value.contract, INLINE_SCRIPT_SYNTAX_CONTRACT);
  const countsValid = shapeValid
    && Number.isSafeInteger(value.discovered_script_count)
    && value.discovered_script_count >= 0
    && INLINE_SCRIPT_SYNTAX_COUNT_KEYS.every((key) => (
      Number.isSafeInteger(value[key]) && value[key] >= 0
    ))
    && INLINE_SCRIPT_SYNTAX_COUNT_KEYS.reduce((total, key) => total + value[key], 0)
      === value.discovered_script_count;
  const failuresEmpty = shapeValid
    && Array.isArray(value.failures)
    && value.failures.length === 0;
  return {
    shape_valid: shapeValid,
    contract_valid: contractValid,
    counts_valid: countsValid,
    failures_empty: failuresEmpty,
    valid: shapeValid && contractValid && countsValid && failuresEmpty,
  };
}

function inspectStaticPreviewReceiptContract(receipt) {
  const shapeValid = exactObjectKeys(receipt, STATIC_PREVIEW_RECEIPT_KEYS);
  const inlineScriptSyntax = inspectInlineScriptSyntaxContract(
    shapeValid ? receipt.inline_script_syntax : null,
  );
  const failuresEmpty = shapeValid
    && Array.isArray(receipt.failures)
    && receipt.failures.length === 0;
  const exactAuthority = Boolean(
    shapeValid
    && receipt.schema_version === STATIC_PREVIEW_RECEIPT_SCHEMA_VERSION
    && receipt.kind === "omd-static-preview-receipt"
    && receipt.guard_version === STATIC_PREVIEW_GUARD_VERSION
    && receipt.guard_scope === STATIC_PREVIEW_GUARD_SCOPE
    && receipt.state === "passed"
    && typeof receipt.candidate_path === "string"
    && receipt.candidate_path.length > 0
    && typeof receipt.candidate_sha256 === "string"
    && typeof receipt.source_contract_sha256 === "string"
    && typeof receipt.inventory_sha256 === "string"
    && inlineScriptSyntax.valid
    && failuresEmpty
  );
  return {
    shape_valid: shapeValid,
    inline_script_syntax: inlineScriptSyntax,
    failures_empty: failuresEmpty,
    exact_authority: exactAuthority,
  };
}

export function isCurrentStaticPreviewPreflight(preflight) {
  return Boolean(
    preflight
    && preflight.receipt_present === true
    && preflight.receipt_trust === "current"
    && preflight.receipt_schema_version === STATIC_PREVIEW_RECEIPT_SCHEMA_VERSION
    && preflight.receipt_guard_version === STATIC_PREVIEW_GUARD_VERSION
    && preflight.receipt_guard_scope === STATIC_PREVIEW_GUARD_SCOPE
    && preflight.receipt_shape_valid === true
    && preflight.inline_script_syntax_shape_valid === true
    && preflight.inline_script_syntax_contract_valid === true
    && preflight.inline_script_syntax_counts_valid === true
    && preflight.inline_script_syntax_failures_empty === true
    && preflight.receipt_failures_empty === true
    && preflight.receipt_valid === true
    && preflight.receipt_state === "passed"
  );
}

export function hostPolicyAdmissionDisposition(plan, summary) {
  if (!plan?.shared_host_policy) return { disposition: "admit", reason: null };
  if (summary?.run_status === "timed_out" && summary?.validity === "valid") {
    return {
      disposition: "valid-system-failure",
      reason: "preregistered-valid-timeout",
    };
  }
  const hostPolicy = summary?.host_policy;
  const gate = summary?.host_policy_gate;
  if (gate?.pass === true) return { disposition: "admit", reason: null };
  if (!hostPolicy || !gate) {
    return { disposition: "invalid-infrastructure", reason: "installed-host-policy-gate-missing" };
  }
  const installation = hostPolicy.installation;
  const observed = hostPolicy.observed;
  const proofTrace = summary?.proof_trace;
  const reasons = Array.isArray(gate.reasons) ? gate.reasons : [];
  const completeBlock = plan?.control_contract?.admission_normalization_policy
    === "complete-block-effort-scaling";
  const inconsistentInstallation = installation?.ready !== true
    || observed?.available !== true
    || Number(observed?.state_files ?? 0) < 1
    || Number(observed?.valid_state_files ?? 0) !== Number(observed?.state_files ?? 0)
    || (!completeBlock && proofTrace?.analyzable !== true)
    || reasons.some((reason) => (
      (HOST_POLICY_INFRASTRUCTURE_REASONS.has(reason)
        && !(completeBlock && reason === "proof-trace-not-analyzable"))
      || String(reason).endsWith("-unblocked-limit")
    ));
  if (inconsistentInstallation) {
    return { disposition: "invalid-infrastructure", reason: "installed-host-policy-gate-failed" };
  }
  return {
    disposition: "valid-system-failure",
    reason: completeBlock
      ? "complete-block-provider-proof-noncompliance"
      : "installed-host-policy-rejected-system-output",
  };
}

function completeBlockOutcome({
  sweepIdentity,
  runStatus,
  validity,
  routingAttestation,
  candidatePreflight,
  hostPolicyAdmission,
  automatedPass,
  productChanged,
  run,
}) {
  if (!sweepIdentity) return null;
  let disposition = "success";
  let reason = null;
  const candidateAuthorityClaim = candidatePreflight?.required === true
    && isCurrentStaticPreviewPreflight(candidatePreflight);
  if (routingAttestation?.pass !== true || validity === "invalid-attribution") {
    disposition = "freeze-authority";
    reason = "codex-effort-routing-attestation-failed";
  } else if (
    candidateAuthorityClaim
    && candidatePreflight?.source_contract_sha256_match !== true
  ) {
    disposition = "freeze-authority";
    reason = "candidate-preview-source-contract-mismatch";
  } else if (
    candidateAuthorityClaim
    && candidatePreflight?.sealed_inventory_sha256_match !== true
  ) {
    disposition = "freeze-authority";
    reason = "candidate-preview-inventory-mismatch";
  } else if (hostPolicyAdmission.disposition === "invalid-infrastructure") {
    disposition = "freeze-infrastructure";
    reason = hostPolicyAdmission.reason;
  } else if (runStatus === "timed_out") {
    disposition = "terminal-provider-failure";
    reason = "preregistered-valid-timeout";
  } else if (
    candidatePreflight?.required === true
    && (!isCurrentStaticPreviewPreflight(candidatePreflight) || candidatePreflight?.pass !== true)
  ) {
    disposition = "terminal-provider-failure";
    reason = candidatePreflight?.receipt_present !== true
      ? "candidate-preview-receipt-missing"
      : !isCurrentStaticPreviewPreflight(candidatePreflight)
        ? "candidate-preview-receipt-failed"
        : candidatePreflight?.product_present !== true
          ? "candidate-product-missing"
          : "candidate-final-byte-mismatch";
  } else if (hostPolicyAdmission.disposition === "valid-system-failure") {
    disposition = "terminal-provider-failure";
    reason = hostPolicyAdmission.reason;
  } else if (!automatedPass || !productChanged) {
    disposition = "terminal-provider-failure";
    reason = !productChanged ? "provider-made-no-product-edit" : "objective-gate-failed";
  }
  return {
    schema_version: "0.1",
    disposition,
    reason,
    tool_diagnostics: {
      availability: run?.output?.diagnostic_availability ?? null,
      tool_error_count: run?.output?.tool_error_count ?? null,
      recoverable_tool_error_count: run?.output?.recoverable_tool_error_count ?? null,
      agent_tool_call_count: run?.output?.agent_tool_call_count ?? null,
      agent_tool_error_count: run?.output?.agent_tool_error_count ?? null,
    },
  };
}

function optionalNonEmptyString(value, label) {
  if (value === undefined || value === null) return null;
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`${label} must be a non-empty string when provided`);
  }
  return value;
}

function optionalSha256(value, label) {
  const normalized = optionalNonEmptyString(value, label);
  if (normalized !== null && !SHA256_PATTERN.test(normalized)) {
    throw new Error(`${label} must be a lowercase SHA-256 when provided`);
  }
  return normalized;
}

function exactLockedCell(lockedPlan, matrixCell) {
  if (!lockedPlan || !matrixCell?.id) return null;
  return (lockedPlan.cells ?? []).find((cell) => cell.id === matrixCell.id) ?? null;
}

function requireSweepValue(value, label) {
  if (value === undefined || value === null || value === "") {
    throw new Error(`complete-block sweep identity missing ${label}`);
  }
  return value;
}

export function buildCompleteBlockSweepIdentity({
  manifest,
  score,
  systemId,
  trialIndex,
  suiteVersion,
  executionControl,
  matrixCell,
  lockedPlan,
  executionState,
}) {
  if (
    executionControl?.comparison_mode !== "effort-scaling"
    || executionControl?.admission_normalization_policy !== "complete-block-effort-scaling"
  ) return null;
  const lockedCell = exactLockedCell(lockedPlan, matrixCell);
  const taskLock = (lockedPlan?.task_lock_contract?.tasks ?? []).find(
    (task) => task.task_id === matrixCell?.task_id,
  ) ?? null;
  const skillLock = lockedPlan?.skill_lock_contract ?? null;
  const objectiveEpoch = score?.methodology_epoch
    ?? `legacy-score-schema-${score?.schema_version ?? "unknown"}`;
  const taskTreeSha256 = taskLock?.task_tree_sha256 ?? taskLock?.observed_task_tree_sha256;
  const matrixSha256 = optionalSha256(
    executionState?.locked_plan_sha256,
    "sweep_identity.locks.locked_plan_sha256",
  );
  const scheduleSha256 = optionalSha256(
    lockedPlan?.effort_sweep_contract?.schedule_sha256,
    "sweep_identity.locks.schedule_sha256",
  );
  const skillSourceTreeSha256 = optionalSha256(
    skillLock?.source_tree_sha256,
    "sweep_identity.locks.skill.source_tree_sha256",
  );
  const skillTreeSha256 = optionalSha256(
    skillLock?.skill_tree_sha256,
    "sweep_identity.locks.skill.installed_tree_sha256",
  );
  const lockedTaskTreeSha256 = optionalSha256(
    taskTreeSha256,
    "sweep_identity.locks.task.task_tree_sha256",
  );
  if (!lockedCell) {
    throw new Error("complete-block sweep identity missing exact locked cell");
  }
  for (const [label, left, right] of [
    ["task_id", matrixCell?.task_id, lockedCell.task_id],
    ["variant_id", manifest?.variant?.id, lockedCell.variant_id],
    ["system_id", systemId, lockedCell.system_id],
    ["trial_index", trialIndex, lockedCell.trial_index],
    ["runtime", matrixCell?.runtime, lockedCell.runtime],
    ["model_id", matrixCell?.model_id, lockedCell.model_id],
    ["effort", matrixCell?.effort, lockedCell.effort],
  ]) {
    if (left !== right) throw new Error(`complete-block sweep identity drift: ${label}`);
  }
  return {
    schema_version: "0.1",
    experiment_id: requireSweepValue(lockedPlan?.experiment_id, "experiment_id"),
    locked_plan_sha256: requireSweepValue(matrixSha256, "locked_plan_sha256"),
    schedule_sha256: requireSweepValue(scheduleSha256, "schedule_sha256"),
    suite_version: requireSweepValue(suiteVersion, "suite_version"),
    objective_methodology_epoch: requireSweepValue(objectiveEpoch, "objective_methodology_epoch"),
    objective_evaluator_contract_sha256: requireSweepValue(
      optionalSha256(
        lockedPlan?.lock_manifest?.objective_evaluator_contract_sha256,
        "sweep_identity.objective_evaluator_contract_sha256",
      ),
      "objective_evaluator_contract_sha256",
    ),
    system_id: requireSweepValue(systemId, "system_id"),
    variant_id: requireSweepValue(manifest?.variant?.id, "variant_id"),
    skill_id: requireSweepValue(manifest?.skill?.declared_name, "skill_id"),
    skill_source_commit: requireSweepValue(skillLock?.source_commit, "skill_source_commit"),
    skill_source_tree_sha256: requireSweepValue(skillSourceTreeSha256, "skill_source_tree_sha256"),
    skill_tree_sha256: requireSweepValue(skillTreeSha256, "skill_tree_sha256"),
    task_source_commit: requireSweepValue(taskLock?.source_commit, "task_source_commit"),
    task_git_tree_oid: requireSweepValue(taskLock?.git_tree_oid, "task_git_tree_oid"),
    task_tree_sha256: requireSweepValue(lockedTaskTreeSha256, "task_tree_sha256"),
    task_source_contract_sha256: requireSweepValue(
      optionalSha256(
        taskLock?.source_contract_sha256,
        "sweep_identity.task_source_contract_sha256",
      ),
      "task_source_contract_sha256",
    ),
  };
}

function orderedStringArrayEqual(left, right) {
  return Array.isArray(left)
    && Array.isArray(right)
    && left.length === right.length
    && left.every((value, index) => value === right[index]);
}

function modelCatalogAuthorityChecks({ workspace, matrixCell, run, lockedPlan, profile }) {
  const authority = run?.runtime?.model_catalog_authority ?? null;
  const snapshot = lockedPlan?.codex_catalog_snapshot_contract ?? null;
  const expectedIsolatedPath = workspace
    ? join(resolve(workspace), ".benchmark", "codex-home", "model_catalog.json")
    : null;
  return {
    model_catalog_authority_present: Boolean(authority),
    model_catalog_schema_version_exact: authority?.schema_version === "0.1",
    model_catalog_mode_exact:
      authority?.mode === "immutable-local-model-catalog-json"
      && snapshot?.model_catalog_mode === "isolated-copy-before-provider-execution"
      && snapshot?.model_catalog_role === "execution-model-authority",
    model_catalog_config_key_exact: authority?.config_key === "model_catalog_json",
    model_catalog_source_path_exact:
      authority?.source?.path === snapshot?.model_catalog_source_path,
    model_catalog_source_sha256_exact:
      authority?.source?.sha256 === snapshot?.model_catalog_sha256,
    model_catalog_source_bytes_exact:
      authority?.source?.bytes === snapshot?.model_catalog_bytes,
    model_catalog_source_mode_exact:
      authority?.source?.source_mode === "immutable-snapshot-only"
      && snapshot?.model_catalog_source_mode === "immutable-snapshot-only",
    model_catalog_isolated_path_exact:
      expectedIsolatedPath !== null && authority?.isolated_copy?.path === expectedIsolatedPath,
    model_catalog_isolated_sha256_exact:
      authority?.isolated_copy?.sha256 === snapshot?.model_catalog_sha256,
    model_catalog_isolated_bytes_exact:
      authority?.isolated_copy?.bytes === snapshot?.model_catalog_bytes,
    model_catalog_copy_mode_exact:
      authority?.isolated_copy?.copy_mode === "isolated-regular-file",
    model_catalog_selected_model_exact:
      authority?.selected_profile?.model_id === matrixCell?.model_id,
    model_catalog_selected_profile_sha256_exact:
      authority?.selected_profile?.model_profile_sha256 === profile?.model_profile_sha256,
    model_catalog_selected_default_effort_exact:
      authority?.selected_profile?.default_effort === profile?.default_effort,
    model_catalog_selected_effort_order_exact: orderedStringArrayEqual(
      authority?.selected_profile?.supported_efforts,
      profile?.supported_efforts,
    ),
    model_catalog_selected_effort_supported:
      authority?.selected_profile?.supported_efforts?.includes(matrixCell?.effort) === true,
    model_catalog_verified_before_provider_execution:
      authority?.verified_before_provider_execution === true,
    model_catalog_mutable_fallback_forbidden:
      authority?.mutable_fallback_allowed === false
      && snapshot?.mutable_model_catalog_fallback_allowed === false,
  };
}

export function buildCodexRoutingAttestation({ workspace = null, matrixCell, run, lockedPlan }) {
  if (matrixCell?.runtime !== "codex") return null;

  const lockedCell = exactLockedCell(lockedPlan, matrixCell);
  const effortContract = lockedPlan?.codex_model_effort_contract ?? null;
  const profile = (effortContract?.models ?? []).find(
    (candidate) => candidate.model_id === matrixCell.model_id,
  ) ?? null;
  const routingContract = lockedPlan?.provider_routing_contract ?? null;
  const toolModeEvidence = run?.runtime?.model_tool_mode_evidence ?? null;
  const providerEffortArgument = run?.runtime?.provider_effort_argument
    ?? run?.runtime?.reasoning
    ?? null;

  let providerPolicy = null;
  let providerRouteAcceptedByRuntimePolicy = false;
  try {
    providerPolicy = assertProviderRoute({
      runtime: matrixCell.runtime,
      model: matrixCell.model_id,
      fakeRuntime: false,
    });
    providerRouteAcceptedByRuntimePolicy = providerPolicy.allowed === true;
  } catch {
    providerRouteAcceptedByRuntimePolicy = false;
  }

  const lockedPairAllowed = (routingContract?.allowed_model_effort_pairs ?? []).some((pair) => (
    pair?.model_id === matrixCell.model_id && pair?.effort === matrixCell.effort
  ));
  const providerRouteAccepted = Boolean(
    providerRouteAcceptedByRuntimePolicy
    && routingContract?.fail_closed === true
    && routingContract?.allowed_runtime === "codex"
    && routingContract?.cursor_allowed === false
    && routingContract?.allowed_model_ids?.includes(matrixCell.model_id)
    && lockedPairAllowed
  );
  const lockedCellExact = Boolean(
    lockedCell
    && lockedCell.runtime === matrixCell.runtime
    && lockedCell.model_id === matrixCell.model_id
    && lockedCell.effort === matrixCell.effort
  );
  const pinnedProfileSupportsEffort = Boolean(
    profile && profile.supported_efforts?.includes(matrixCell.effort)
  );
  const catalogChecks = modelCatalogAuthorityChecks({
    workspace,
    matrixCell,
    run,
    lockedPlan,
    profile,
  });
  const checks = {
    locked_cell_exact: lockedCellExact,
    runtime_codex: run?.runtime?.runtime_target === "codex",
    model_requested_exact: run?.runtime?.model_requested === matrixCell.model_id,
    effort_requested_exact: run?.runtime?.effort_requested === matrixCell.effort,
    provider_effort_argument_exact: providerEffortArgument === matrixCell.effort,
    provider_route_accepted: providerRouteAccepted,
    pinned_profile_supports_effort: pinnedProfileSupportsEffort,
    ...catalogChecks,
  };
  return {
    schema_version: ROUTING_ATTESTATION_SCHEMA_VERSION,
    runtime: "codex",
    model_id: matrixCell.model_id,
    effort: matrixCell.effort,
    provider_route: "codex",
    provider_route_mode: providerPolicy?.mode ?? null,
    provider_route_reported: run?.runtime?.provider_route ?? null,
    provider_effort_argument: providerEffortArgument,
    model_reported: run?.runtime?.model_reported ?? null,
    model_evidence_mode: run?.runtime?.model_evidence_mode ?? null,
    pinned_profile: profile ? {
      model_profile_sha256: profile.model_profile_sha256,
      cache_sha256: effortContract.cache_sha256,
      default_effort: profile.default_effort,
      supported_efforts: profile.supported_efforts,
    } : null,
    model_tool_mode_evidence: toolModeEvidence,
    evidence_source: {
      matrix_cell: ".benchmark/matrix-cell.json",
      run_result: ".benchmark/run-result.json",
      locked_plan: "../RUN-MATRIX.locked.json",
      execution_state: "../execution-state.json",
      route_policy: "config/provider-routing-policy.json",
    },
    checks,
    pass: Object.values(checks).every(Boolean),
  };
}

export function classifyRunStatus(run, score) {
  if (run?.process?.timed_out === true) return "timed_out";
  if (
    run?.process?.exit_code !== 0
    || Number(run?.output?.infrastructure_tool_error_count ?? 0) > 0
    || Number(run?.output?.sandbox_error_count ?? 0) > 0
  ) return "failed";
  if (!score) return "incomplete";
  return "complete";
}

export function classifyValidity(
  manifest,
  runStatus,
  score,
  run = null,
  {
    attributionScope = "provider-observed-only",
    executionControl = null,
    routingAttestation = null,
  } = {},
) {
  if (manifest?.variant?.track_eligibility?.off_label === true) return "invalid-task";
  if (manifest?.skill?.source_attestation?.publishable === false) return "invalid-attribution";
  if (run?.runtime?.model_evidence_mode === "runtime-reported-display-name") {
    const internalRegisteredDisplayName = (
      attributionScope === "internal-registered-display-name"
      && run.runtime.runtime_target === "cursor"
      && CURSOR_RUNTIME_DISPLAY_LABELS[run.runtime.model_requested] === run.runtime.model_reported
    );
    if (!internalRegisteredDisplayName) return "invalid-attribution";
  }
  if (
    executionControl?.comparison_mode === "effort-scaling"
    && executionControl?.admission_normalization_policy === "complete-block-effort-scaling"
    && routingAttestation?.pass !== true
  ) return "invalid-attribution";
  if (manifest?.variant?.kind === "agent-harness" && run) {
    const required = (manifest?.agents?.installed ?? []).map((agent) => agent.id);
    const requested = new Set(run?.output?.requested_agent_ids ?? []);
    if (!required.length || required.some((agentId) => !requested.has(agentId))) return "invalid-attribution";
    if (Number(run?.output?.agent_tool_error_count ?? 0) > 0) return "invalid-attribution";
    const requiredModel = manifest?.agents?.required_model;
    const agentCalls = run?.output?.agent_calls ?? [];
    if (requiredModel && required.some((agentId) => !agentCalls.some((call) => (
      call.agent_id === agentId && call.requested_model === requiredModel
    )))) return "invalid-attribution";
  }
  const preregisteredValidTimeout = (
    runStatus === "timed_out"
    && executionControl?.timeout_policy === "count-as-valid-failure"
  );
  if ((runStatus !== "complete" && !preregisteredValidTimeout) || !score) {
    return "invalid-infrastructure";
  }
  return "valid";
}

export function summarizeTokenUsage(run) {
  const totals = { input_tokens: 0, cached_input_tokens: 0, output_tokens: 0, reasoning_output_tokens: 0 };
  let observed = false;
  const observedComponents = new Set();
  const aliases = {
    input_tokens: ["input_tokens", "inputTokens"],
    cached_input_tokens: [
      "cached_input_tokens",
      "cachedInputTokens",
      "cacheReadTokens",
      "cache_read_input_tokens",
      "cacheReadInputTokens",
    ],
    output_tokens: ["output_tokens", "outputTokens"],
    reasoning_output_tokens: ["reasoning_output_tokens", "reasoningOutputTokens"],
  };
  for (const event of run?.output?.usage_events ?? []) {
    const usage = event?.usage ?? event?.token_usage;
    if (!usage) continue;
    observed = true;
    for (const field of Object.keys(totals)) {
      const sourceField = aliases[field].find((alias) => usage[alias] !== undefined);
      if (sourceField) observedComponents.add(field);
      const value = Number(sourceField ? usage[sourceField] : 0);
      if (Number.isFinite(value) && value >= 0) totals[field] += value;
    }
  }
  if (!observed) return null;
  return {
    ...totals,
    total_tokens: totals.input_tokens + totals.output_tokens,
    observed_components: [...observedComponents].sort(),
    input_output_complete:
      observedComponents.has("input_tokens") && observedComponents.has("output_tokens"),
  };
}

export function inspectCandidatePreflight(workspace, reflowArtifact) {
  const workspaceRoot = resolve(workspace);
  const required = reflowArtifact?.source_contract?.state === "provider-sealed";
  const receiptPath = join(workspaceRoot, ".omd", "static-preview-receipt.json");
  const productCandidate = reflowArtifact?.static_closure_manifest?.product_path
    ? resolve(workspaceRoot, reflowArtifact.static_closure_manifest.product_path)
    : null;
  const productRelative = productCandidate ? relative(workspaceRoot, productCandidate) : null;
  const productPath = productRelative
    && productRelative !== ".."
    && !productRelative.startsWith(`..${sep}`)
      ? productCandidate
      : null;
  const receipt = existsSync(receiptPath) ? readJson(receiptPath) : null;
  const receiptTrust = ["0.1", "0.2"].includes(receipt?.schema_version)
    ? "legacy-unverifiable"
    : receipt?.schema_version === STATIC_PREVIEW_RECEIPT_SCHEMA_VERSION
      ? "current"
      : receipt
        ? "unsupported"
        : "absent";
  const productPresent = Boolean(productPath && existsSync(productPath));
  const finalProductSha256 = productPresent ? sha256(readFileSync(productPath)) : null;
  const receiptContract = inspectStaticPreviewReceiptContract(receipt);
  const receiptValid = receiptContract.exact_authority;
  const sourceContractMatch = Boolean(
    receiptValid
    && receipt.source_contract_sha256 === reflowArtifact?.source_contract?.sha256
  );
  const inventoryMatch = Boolean(
    receiptValid
    && receipt.inventory_sha256 === reflowArtifact?.inventory?.sha256
  );
  const candidateFinalBytesMatch = Boolean(
    receiptValid
    && finalProductSha256
    && receipt.candidate_sha256 === finalProductSha256
  );
  return {
    required,
    receipt_present: receipt !== null,
    receipt_trust: receiptTrust,
    receipt_schema_version: receipt?.schema_version ?? null,
    receipt_guard_version: receipt?.guard_version ?? null,
    receipt_guard_scope: receipt?.guard_scope ?? null,
    receipt_state: receipt?.state ?? null,
    receipt_shape_valid: receiptContract.shape_valid,
    inline_script_syntax_shape_valid:
      receiptContract.inline_script_syntax.shape_valid,
    inline_script_syntax_contract_valid:
      receiptContract.inline_script_syntax.contract_valid,
    inline_script_syntax_counts_valid:
      receiptContract.inline_script_syntax.counts_valid,
    inline_script_syntax_failures_empty:
      receiptContract.inline_script_syntax.failures_empty,
    receipt_failures_empty: receiptContract.failures_empty,
    receipt_valid: receiptValid,
    product_present: productPresent,
    candidate_sha256: receipt?.candidate_sha256 ?? null,
    final_product_sha256: finalProductSha256,
    source_contract_sha256_match: sourceContractMatch,
    sealed_inventory_sha256_match: inventoryMatch,
    candidate_final_bytes_match: candidateFinalBytesMatch,
    pass: !required || (
      receiptValid
      && productPresent
      && sourceContractMatch
      && inventoryMatch
      && candidateFinalBytesMatch
    ),
  };
}

function writeJsonExclusive(path, value) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, {
    encoding: "utf8",
    flag: "wx",
  });
}

export function buildRunRecord({
  workspace,
  manifest,
  run,
  score,
  family,
  systemId,
  trialIndex,
  suiteVersion,
  budgetTier,
  executionControl = null,
  attributionScope = "provider-observed-only",
  proofTrace = null,
  proofExecutionGate = null,
  hostPolicy = null,
  candidatePreflight = null,
  matrixCell = null,
  lockedPlan = null,
  executionState = null,
  scoreEvidence = null,
}) {
  if (!FAMILIES.has(family)) throw new Error(`unsupported benchmark family: ${family}`);
  if (!Number.isInteger(trialIndex) || trialIndex < 1) throw new Error("trial index must be a positive integer");
  const runStatus = classifyRunStatus(run, score);
  const routingAttestation = buildCodexRoutingAttestation({ workspace, matrixCell, run, lockedPlan });
  const validity = classifyValidity(manifest, runStatus, score, run, {
    attributionScope,
    executionControl,
    routingAttestation,
  });
  const automatedPass = score?.status?.automated_gate_pass === true;
  const productChanged = run?.workspace?.product_changed ?? run?.workspace?.changed ?? false;
  const tokenUsage = summarizeTokenUsage(run);
  const diagnosticsDeclared = run?.output?.diagnostic_availability !== undefined;
  const diagnosticAvailable = run?.output?.diagnostic_availability?.available === true;
  const diagnosticNumber = (field) => {
    if (run?.output?.[field] !== undefined && run?.output?.[field] !== null) {
      return Number(run.output[field]);
    }
    return diagnosticsDeclared && !diagnosticAvailable ? null : 0;
  };
  const effort = optionalNonEmptyString(
    matrixCell?.effort
      ?? run?.runtime?.effort_requested
      ?? run?.runtime?.effort
      ?? run?.runtime?.reasoning,
    "effort",
  );
  const experimentId = optionalNonEmptyString(lockedPlan?.experiment_id, "experiment_id");
  const taskSetSha256 = optionalSha256(
    lockedPlan?.effort_sweep_contract?.task_set_sha256 ?? lockedPlan?.task_set_sha256,
    "task_set_sha256",
  );
  const matrixSha256 = optionalSha256(
    executionState?.locked_plan_sha256 ?? lockedPlan?.matrix_sha256,
    "matrix_sha256",
  );
  const sweepIdentity = buildCompleteBlockSweepIdentity({
    manifest,
    score,
    systemId,
    trialIndex,
    suiteVersion,
    executionControl,
    matrixCell,
    lockedPlan,
    executionState,
  });
  const hostPolicyAdmission = hostPolicyAdmissionDisposition(lockedPlan, {
    run_status: runStatus,
    validity,
    proof_trace: proofTrace,
    host_policy: hostPolicy,
    host_policy_gate: hostPolicy?.gate ?? null,
  });
  const admittedValidity = hostPolicyAdmission.disposition === "invalid-infrastructure"
    ? "invalid-infrastructure"
    : validity;
  const admittedUiResolved = hostPolicyAdmission.disposition === "admit"
    && admittedValidity === "valid"
    && runStatus === "complete"
    && (
      candidatePreflight?.required !== true
      || (
        isCurrentStaticPreviewPreflight(candidatePreflight)
        && candidatePreflight?.pass === true
      )
    )
    ? automatedPass && productChanged
    : false;
  const normalizedCompleteBlockOutcome = completeBlockOutcome({
    sweepIdentity,
    runStatus,
    validity: admittedValidity,
    routingAttestation,
    candidatePreflight,
    hostPolicyAdmission,
    automatedPass,
    productChanged,
    run,
  });
  return {
    run_id: basename(workspace),
    ...(sweepIdentity ? { record_kind: COMPLETE_BLOCK_RECORD_KIND } : {}),
    benchmark_family: family,
    suite_version: suiteVersion,
    ...(experimentId ? { experiment_id: experimentId } : {}),
    ...(taskSetSha256 ? { task_set_sha256: taskSetSha256 } : {}),
    ...(matrixSha256 ? { matrix_sha256: matrixSha256 } : {}),
    ...(matrixCell?.id ? { cell_id: matrixCell.id } : {}),
    ...(sweepIdentity ? { variant_id: manifest?.variant?.id } : {}),
    ...(sweepIdentity ? { sweep_identity: sweepIdentity } : {}),
    objective_methodology_epoch:
      score?.methodology_epoch ?? `legacy-score-schema-${score?.schema_version ?? "unknown"}`,
    system_id: systemId,
    model_id: run?.runtime?.model_requested ?? run?.runtime?.model ?? null,
    skill_id: family === "skill" || family === "factorial"
      ? manifest?.skill?.declared_name ?? null
      : null,
    harness_id: family === "harness" || family === "factorial"
      ? manifest?.variant?.id ?? null
      : null,
    budget_tier: budgetTier,
    ...(effort ? { effort } : {}),
    task_id: manifest.task.id,
    trial_index: trialIndex,
    run_status: runStatus,
    validity: admittedValidity,
    attribution_scope: attributionScope,
    public_model_attribution_eligible:
      attributionScope === "provider-observed-only"
      && run?.runtime?.model_evidence_mode === "provider-observed",
    ui_resolved: admittedUiResolved,
    ...(normalizedCompleteBlockOutcome
      ? { complete_block_outcome: normalizedCompleteBlockOutcome }
      : {}),
    objective_score: score?.points?.deterministic_total ?? 0,
    objective_max: score?.points?.deterministic_max ?? 85,
    wall_time_ms: run?.process?.wall_ms ?? 0,
    tokens: tokenUsage?.total_tokens ?? null,
    token_usage: tokenUsage,
    provider_cost_equivalent_usd: Number.isFinite(Number(run?.output?.total_cost_usd))
      ? Number(run.output.total_cost_usd)
      : null,
    execution_control: executionControl,
    usage_completeness: {
      evidence_mode: run?.output?.usage_attribution?.evidence_mode ?? null,
      available: tokenUsage !== null,
      input_output_complete: tokenUsage?.input_output_complete ?? false,
      observed_components: tokenUsage?.observed_components ?? [],
      reasoning_visibility: tokenUsage?.observed_components?.includes("reasoning_output_tokens")
        ? "reported"
        : "not-reported",
      cached_input_visibility: tokenUsage?.observed_components?.includes("cached_input_tokens")
        ? "reported"
        : "not-reported",
    },
    runtime_model_usage: Array.isArray(run?.output?.model_usage)
      ? run.output.model_usage
      : null,
    runtime_diagnostics: {
      child_exit_code: run?.process?.child_exit_code ?? run?.process?.exit_code ?? null,
      diagnostic_availability: run?.output?.diagnostic_availability ?? {
        available: true,
        fields: "legacy-assumed",
        reason: null,
      },
      tool_error_count: diagnosticNumber("tool_error_count"),
      recoverable_tool_error_count: diagnosticNumber("recoverable_tool_error_count"),
      infrastructure_tool_error_count: diagnosticNumber("infrastructure_tool_error_count"),
      optional_verifier_environment_error_count: diagnosticNumber("optional_verifier_environment_error_count"),
      recovered_temp_path_error_count: diagnosticNumber("recovered_temp_path_error_count"),
      sandbox_error_count: diagnosticNumber("sandbox_error_count"),
      sandbox_cwd_error_count: diagnosticNumber("sandbox_cwd_error_count"),
      agent_tool_call_count: diagnosticNumber("agent_tool_call_count"),
      agent_tool_error_count: diagnosticNumber("agent_tool_error_count"),
      requested_agent_ids: run?.output?.requested_agent_ids ?? [],
      agent_calls: run?.output?.agent_calls ?? [],
      milestones: run?.output?.milestones ?? null,
      proof_trace: proofTrace,
      proof_execution_gate: proofExecutionGate,
      host_policy: hostPolicy,
      ...(hostPolicyAdmission.disposition === "invalid-infrastructure"
        ? { infrastructure_invalid_reason: hostPolicyAdmission.reason }
        : {}),
      ...(hostPolicyAdmission.disposition === "valid-system-failure"
        ? { host_policy_admission: hostPolicyAdmission }
        : {}),
      candidate_preflight: candidatePreflight,
    },
    attribution: {
      runtime: {
        runtime_target: run?.runtime?.runtime_target ?? null,
        agent: run?.runtime?.agent ?? null,
        agent_version: run?.runtime?.agent_version ?? null,
        binary_sha256: run?.runtime?.binary_sha256 ?? null,
        model_requested: run?.runtime?.model_requested ?? run?.runtime?.model ?? null,
        model_reported: run?.runtime?.model_reported ?? null,
        model_evidence_mode: run?.runtime?.model_evidence_mode ?? null,
        effort_requested: run?.runtime?.effort_requested
          ?? run?.runtime?.effort
          ?? run?.runtime?.reasoning
          ?? null,
        auth_mode: run?.runtime?.auth_mode ?? null,
        provider_route: run?.runtime?.provider_route ?? null,
        provider_effort_argument: run?.runtime?.provider_effort_argument
          ?? run?.runtime?.reasoning
          ?? null,
        ...(routingAttestation ? { routing_attestation: routingAttestation } : {}),
        ...(sweepIdentity
          ? { model_catalog_authority: run?.runtime?.model_catalog_authority ?? null }
          : {}),
        hook_trust_bypassed: run?.runtime?.hook_trust_bypassed ?? false,
        usage_attribution: run?.output?.usage_attribution ?? null,
      },
      source_commit: manifest?.skill?.source_commit ?? null,
      source_attestation: manifest?.skill?.source_attestation ?? null,
      agent_bundle_sha256: manifest?.agents?.sha256 ?? null,
      activation_delta_sha256: manifest?.variant?.activation_delta_sha256 ?? null,
      track_eligibility: manifest?.variant?.track_eligibility ?? null,
    },
    delivery: {
      product_changed: productChanged,
      changed_product_files: run?.workspace?.changed_product_files ?? [],
    },
    evidence: {
      manifest: ".benchmark/manifest.json",
      run_result: ".benchmark/run-result.json",
      score: score ? scoreEvidence?.authority_path ?? ".benchmark/score.json" : null,
      ...(score && scoreEvidence?.authority_role
        ? { score_authority_role: scoreEvidence.authority_role }
        : {}),
      ...(score && scoreEvidence?.compatibility_path
        ? { score_compatibility: scoreEvidence.compatibility_path }
        : {}),
      screenshots: score ? ".benchmark/screenshots" : null,
      proof_trace: proofTrace ? ".benchmark/proof-trace.json" : null,
      host_policy_state: hostPolicy ? ".benchmark/host-policy-state.json" : null,
      candidate_preflight_receipt: candidatePreflight?.receipt_present
        ? ".omd/static-preview-receipt.json"
        : null,
    },
  };
}

async function main() {
  const args = parseArgs();
  const workspace = args.get("workspace") ? resolve(String(args.get("workspace"))) : null;
  const family = String(args.get("family") ?? "");
  const systemId = String(args.get("system") ?? "");
  const trialIndex = Number(args.get("trial") ?? 0);
  if (!workspace || !family || !systemId || !trialIndex) {
    console.error("usage: export-run-record.mjs --workspace <dir> --family <family> --system <id> --trial <n> [--score <controller-score.json>] [--out <controller-record.json>] [--suite-version <v>] [--budget-tier <tier>]");
    process.exitCode = 2;
    return;
  }
  const benchmarkDir = join(workspace, ".benchmark");
  const manifestPath = join(benchmarkDir, "manifest.json");
  const runPath = join(benchmarkDir, "run-result.json");
  const scorePath = args.get("score")
    ? resolve(String(args.get("score")))
    : join(benchmarkDir, "score.json");
  if (!existsSync(manifestPath) || !existsSync(runPath)) {
    throw new Error("workspace must contain .benchmark/manifest.json and run-result.json");
  }
  if (args.get("score") && !existsSync(scorePath)) {
    throw new Error(`controller score not found: ${scorePath}`);
  }
  const manifest = readJson(manifestPath);
  const run = readJson(runPath);
  const eventsPath = join(benchmarkDir, "events.jsonl");
  let events = null;
  if (existsSync(eventsPath)) {
    events = readFileSync(eventsPath, "utf8").split("\n").filter(Boolean).flatMap((line) => {
      try { return [JSON.parse(line)]; } catch { return []; }
    });
  }
  if (
    events
    && (
      run?.runtime?.runtime_target === "claude-code"
      || run?.output?.diagnostic_availability === undefined
    )
  ) {
    run.output = { ...run.output, ...summarizeClaudeToolErrors(events) };
  }
  const proofTrace = events && ["codex", "cursor"].includes(run?.runtime?.runtime_target)
    ? classifyProofTrace(events)
    : null;
  if (proofTrace) writeJson(join(benchmarkDir, "proof-trace.json"), proofTrace);
  const score = existsSync(scorePath) ? readJson(scorePath) : null;
  const matrixCellPath = join(benchmarkDir, "matrix-cell.json");
  const matrixCell = existsSync(matrixCellPath) ? readJson(matrixCellPath) : null;
  const lockedPlanPath = join(dirname(workspace), "RUN-MATRIX.locked.json");
  const lockedPlan = matrixCell && existsSync(lockedPlanPath) ? readJson(lockedPlanPath) : null;
  const executionStatePath = join(dirname(workspace), "execution-state.json");
  const executionState = matrixCell && existsSync(executionStatePath)
    ? readJson(executionStatePath)
    : null;
  const expectedControllerScorePath = resolve(
    dirname(workspace),
    ".controller-artifacts",
    basename(workspace),
    "score.json",
  );
  const scoreEvidence = args.get("score")
    ? {
        authority_path: relative(workspace, scorePath),
        authority_role: scorePath === expectedControllerScorePath
          ? "controller-authority"
          : "explicit-external-authority",
        ...(scorePath === expectedControllerScorePath
          ? { compatibility_path: ".benchmark/score.json" }
          : {}),
      }
    : null;
  const reflowArtifactPath = join(workspace, ".omd", "reflow-closure.json");
  const reflowArtifact = existsSync(reflowArtifactPath) ? readJson(reflowArtifactPath) : null;
  const candidatePreflight = inspectCandidatePreflight(workspace, reflowArtifact);
  const proofExecutionGate = evaluateProofExecutionGate(
    proofTrace,
    matrixCell?.proof_execution_gate ?? null,
    {
      reflowArtifact,
      systemId: matrixCell?.system_id ?? systemId,
      expectedConnectionName: process.env.BU_NAME ?? null,
    },
  );
  const hostPolicy = matrixCell?.host_policy
    ? {
        mode: matrixCell.host_policy.mode,
        installation: matrixCell.host_policy,
        observed: summarizeHostPolicyStates(workspace),
      }
    : null;
  if (hostPolicy) {
    hostPolicy.gate = evaluateHostPolicyGate(
      hostPolicy.installation,
      hostPolicy.observed,
      proofTrace,
      matrixCell?.host_policy_gate ?? null,
    );
  }
  if (hostPolicy) writeJson(join(benchmarkDir, "host-policy-state.json"), hostPolicy);
  const record = buildRunRecord({
    workspace,
    manifest,
    run,
    score,
    family,
    systemId,
    trialIndex,
    suiteVersion: String(args.get("suite-version") ?? manifest.task.version),
    budgetTier: String(args.get("budget-tier") ?? "standard"),
    executionControl: matrixCell?.execution_control ?? null,
    attributionScope: matrixCell?.attribution_scope ?? "provider-observed-only",
    proofTrace,
    proofExecutionGate,
    hostPolicy,
    candidatePreflight,
    matrixCell,
    lockedPlan,
    executionState,
    scoreEvidence,
  });
  const out = args.get("out")
    ? resolve(String(args.get("out")))
    : join(benchmarkDir, "run-record.json");
  writeJsonExclusive(out, record);
  console.log(JSON.stringify(record, null, 2));
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) {
  await main();
}
