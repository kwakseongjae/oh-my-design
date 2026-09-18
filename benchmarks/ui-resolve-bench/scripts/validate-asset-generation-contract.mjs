#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ARM_IDS = ["no-skill", "uiux-pro-max", "hallmark", "omd"];
const CAPABILITY_IDS = ["shared-browser", "image-generation", "video-generation", "local-asset-production"];
const SHA256 = /^[a-f0-9]{64}$/;
const REQUIRED_LEDGER_FIELDS = [
  "asset_id",
  "status_attempted_selected_used_or_rejected",
  "tool_provider_version",
  "media_model_id",
  "generation_prompt_sha256",
  "reference_input_sha256",
  "original_file_sha256",
  "selection_reason",
  "use_location_or_rejection_reason",
];

function invariant(condition, message) {
  if (!condition) throw new Error(message);
}

function unique(values, label) {
  invariant(new Set(values).size === values.length, `${label} must be unique`);
}

function assertSha(value, label) {
  invariant(SHA256.test(value), `${label} must be an exact sha256`);
}

export function validateAssetGenerationContract(contract, { readiness = false, phase = null } = {}) {
  invariant(contract?.schema_version === "0.1", "schema_version must be 0.1");
  invariant(["draft/preflight_pending", "calibration_ready", "main_ready"].includes(contract?.status), "status must be draft/preflight_pending, calibration_ready, or main_ready");
  invariant(contract?.live_output_count === 0, "draft contract must have zero live output");

  const runtime = contract.runtime ?? {};
  invariant(runtime.provider === "grok-build-cli", "runtime.provider must be grok-build-cli");
  invariant(runtime.host_model_requested === "grok-4.6", "runtime host model must be grok-4.6");
  invariant(runtime.reasoning_effort === "high", "runtime reasoning effort must be high");
  invariant(runtime.no_subagents === true, "host runtime must disable subagents");
  invariant(runtime.host_fallback_allowed === false, "host fallback must be forbidden");
  invariant(runtime.media_models_recorded_separately_from_host === true, "media model IDs must be recorded separately from the host model");

  const arms = contract.arms;
  invariant(Array.isArray(arms) && arms.length === 4, "exactly four arms are required");
  invariant(JSON.stringify(arms.map((arm) => arm.id)) === JSON.stringify(ARM_IDS), `arms must be ${ARM_IDS.join(", ")}`);
  for (const field of ["workspace_namespace", "session_namespace", "prompt_namespace", "asset_namespace"]) {
    unique(arms.map((arm) => arm[field]), `arm ${field}`);
  }
  invariant(arms[0].activation === "none", "no-skill activation must be none");
  invariant(arms[0].source_role === "neutral-baseline-input-and-activation-snapshot", "no-skill source hash must describe the neutral baseline input and activation snapshot");
  invariant(arms.slice(1).every((arm) => arm.activation === "portable-skill"), "skill arms must use portable-skill activation");
  invariant(arms.slice(1).every((arm) => arm.source_role === "skill-bundle-snapshot"), "skill-arm source hashes must describe skill bundle snapshots");

  const input = contract.common_input ?? {};
  invariant(Array.isArray(input.allowed), "common_input.allowed must be an array");
  const allowed = new Set(input.allowed);
  invariant(allowed.size === 3 && ["task-brief", "task-facts", "mandatory-official-logo"].every((x) => allowed.has(x)), "common input may contain only brief, facts, and mandatory official logos");
  invariant(input.ready_made_creative_asset_pack === false, "a shared ready-made creative asset pack is forbidden");
  invariant(input.cross_arm_outputs_allowed === false, "cross-arm outputs are forbidden");
  invariant(input.manual_arm_specific_prompt_or_asset_boost === false, "manual arm-specific boosts are forbidden");

  const parity = contract.tool_parity ?? {};
  invariant(Array.isArray(parity.capabilities) && parity.capabilities.length === CAPABILITY_IDS.length, "complete tool capability inventory is required");
  unique(parity.capabilities.map((capability) => capability.id), "tool capability IDs");
  invariant(CAPABILITY_IDS.every((id) => parity.capabilities.some((capability) => capability.id === id)), `tool inventory must include ${CAPABILITY_IDS.join(", ")}`);
  for (const capability of parity.capabilities) {
    const rights = capability.arm_rights ?? {};
    invariant(Object.keys(rights).length === 4, `${capability.id} must declare rights for all four arms`);
    invariant(ARM_IDS.every((id) => rights[id] === "invoke"), `${capability.id} must grant identical invoke rights to every arm`);
  }
  invariant(parity.equal_selected_tool_use_required === false, "parity must not force equal selected tool use");
  invariant(parity.equal_asset_count_required === false, "parity must not force equal asset counts");
  invariant(parity.media_backend_selection === "free-from-frozen-common-verified-inventory", "media backends must be freely selected from one frozen verified inventory");

  const execution = contract.execution_control ?? {};
  invariant(execution.parallel_grouping === "task_x_trial", "parallel groups must be task x trial");
  invariant(execution.max_concurrency === 4, "four arms must run concurrently");
  invariant(execution.all_four_arms_start_as_one_parallel_group === true, "all four arms must form one parallel group");
  invariant(execution.latency_comparison === "descriptive-only", "parallel execution permits descriptive-only latency reporting");
  const broker = execution.browser_broker ?? {};
  invariant(broker.required_before_live === true, "browser broker must be required before live execution");
  invariant(broker.enforced_outside_model_instructions === true, "browser isolation must be enforced outside model instructions");
  invariant(broker.capacity === 1, "shared browser capacity must be one");
  invariant(broker.fairness === "fifo-by-monotonic-request-time", "browser fairness must be FIFO by monotonic request time");
  invariant(broker.transactions_per_lease === 1, "one browser transaction per lease is required");
  invariant(JSON.stringify(broker.events) === JSON.stringify(["request", "acquire", "release", "cancel"]), "browser event ledger must contain request/acquire/release/cancel in order");
  invariant(["cell_id", "transaction_id", "owner_id", "event", "at_monotonic_ms"].every((field) => broker.event_record_fields?.includes(field)), "browser events must record cell, transaction, owner, event, and monotonic timing");
  invariant(broker.event_clock === "monotonic", "browser event timings must use a monotonic clock");
  invariant(broker.cell_scoped_request_routing === true && broker.cell_scoped_download_routing === true, "browser requests and downloads must be cell-scoped");
  invariant(broker.waiting_cell_browser_visibility === "none", "waiting cells must have no browser visibility");
  invariant(broker.transactions_per_turn === 1, "one browser transaction per turn is required");
  invariant(broker.async_render_release?.requires_verified_tool_support === true, "async release requires verified tool support");
  invariant(broker.async_render_release?.allowed_only_with_stable_job_id === true, "async render release requires a stable job ID");
  invariant(broker.async_render_release?.requires_verified_later_cell_scoped_capture === true, "async render release requires verified later cell-scoped capture");
  invariant(broker.async_render_release?.otherwise_hold_lease === true, "browser lease must be held when async ownership cannot be proven");
  invariant(broker.lease_timeout?.auto_reassign_live_owner === false, "a timed-out live browser owner must not be auto-reassigned");
  invariant(broker.lease_timeout?.quarantine_until_browser_task_terminated_or_reconciled === true, "timed-out browser work must be quarantined until terminated or reconciled");
  invariant(broker.lease_timeout?.stale_lock_time_expiry_is_sufficient === false, "time expiry alone must not clear a browser lease");

  const matrix = contract.matrix ?? {};
  invariant(matrix.arm_count === 4, "matrix.arm_count must be four");
  invariant(matrix.calibration_cells === 4, "matrix must include four calibration cells");
  invariant(matrix.first_submission_cells === 36, "matrix must include 36 first-submission cells");
  invariant(matrix.followup_cells === 12, "matrix must include 12 followup cells");
  invariant(matrix.total_cells === 52, "matrix must include 52 total cells");
  invariant(matrix.calibration_cells + matrix.first_submission_cells + matrix.followup_cells === matrix.total_cells, "matrix cell counts must sum to total_cells");
  invariant(matrix.main_tasks * matrix.main_trials_per_task * matrix.arm_count === matrix.first_submission_cells, "first-submission matrix dimensions are inconsistent");
  invariant(matrix.followup_tasks === 1, "followup must use one functional task");
  invariant(matrix.followup_trials_per_task === 3, "followup must preserve all three first-submission repetitions");
  invariant(matrix.followup_tasks * matrix.followup_trials_per_task * matrix.arm_count === matrix.followup_cells, "followup matrix dimensions are inconsistent");
  invariant(matrix.followup_lineage === "same-functional-task-arm-trial-session-and-workspace-as-first-submission", "followup must preserve first-submission task, arm, trial, session, and workspace lineage");
  invariant(matrix.first_submission_terminal_failure_policy === "retain-lineage-and-record-followup-unavailable", "terminal first-submission failures must remain in followup lineage");
  invariant(matrix.calibration_in_score_denominator === false, "calibration cells must be excluded from the score denominator");

  const budgets = contract.budgets ?? {};
  invariant(budgets.freeze_policy === "freeze-common-values-after-four-arm-calibration", "budgets may freeze only after four-arm calibration");
  for (const key of ["calibration", "first_submission", "followup"]) {
    invariant(Number.isFinite(budgets.active_minutes?.[key]) && budgets.active_minutes[key] > 0, `${key} active-minute budget must be finite and positive`);
  }
  invariant(Number.isInteger(budgets.host_turn_limit) && budgets.host_turn_limit > 0, "host turn limit must be a positive integer");
  invariant(budgets.active_deadline_enforcement === "broker-measured-and-enforced", "active deadlines must be enforced by the broker");
  invariant(budgets.browser_queue_wait_exclusion === "exclude-only-intervals-actually-blocked-or-suspended-by-broker", "only broker-confirmed blocked queue intervals may be excluded");
  invariant(budgets.overlapping_work_while_browser_queued_counts_active === true, "work performed while queued must remain active time");
  invariant(budgets.media_service_wait_accounting === "overlapping-detail-not-additive-total", "media service wait must be overlapping detail, not additive elapsed time");
  invariant(budgets.self_reported_wait_credit_allowed === false, "self-reported wait must not grant budget credit");
  invariant(budgets.total_deadline_includes_all_wait === true, "hard total deadline must include all waits");

  const artifact = contract.artifact_contract ?? {};
  invariant(artifact.per_arm_isolated_workspace_session_prompt_and_assets === true, "workspace, session, prompt, and assets must be isolated per arm");
  invariant(artifact.cross_arm_asset_reuse === false, "cross-arm asset reuse is forbidden");
  invariant(artifact.retain_all_original_variants === true, "all original asset variants must be retained");
  invariant(REQUIRED_LEDGER_FIELDS.every((field) => artifact.asset_ledger_fields?.includes(field)), "asset ledger is missing required provenance or disposition fields");

  const evaluation = contract.evaluation ?? {};
  invariant(evaluation.blind_asset_packet_separate_from_page_packet === true, "asset and page evaluation packets must be separate and blind");
  invariant(evaluation.asset_packet_fixed_before_page_evaluation === true, "asset packet must be fixed before page evaluation");
  invariant(["brief-fit", "set-coherence", "visible-defects", "meaningful-distinctiveness"].every((axis) => evaluation.asset_axes?.includes(axis)), "asset-only evaluation axes are incomplete");
  invariant(evaluation.video_axis_when_applicable === "scene-and-temporal-continuity", "video continuity must be evaluated when applicable");
  invariant(evaluation.page_axes?.includes("asset-page-fit") && evaluation.page_axes?.includes("function"), "page evaluation must cover asset fit and function");
  invariant(evaluation.asset_quantity_bonus === false && evaluation.video_presence_bonus === false, "asset count or video presence must not receive an automatic bonus");
  invariant(evaluation.justified_no_asset_ui_penalty === false, "a justified no-asset UI must not be penalized");
  invariant(evaluation.missing_task_required_asset === "failure", "a missing requested asset must remain a failure");

  const requestedPhase = phase ?? (readiness ? "main" : contract.status === "calibration_ready" ? "calibration" : contract.status === "main_ready" ? "main" : "draft");
  invariant(["draft", "calibration", "main"].includes(requestedPhase), "validation phase must be draft, calibration, or main");
  const ready = requestedPhase !== "draft";
  if (ready) {
    invariant(contract.status === `${requestedPhase}_ready`, `${requestedPhase} readiness validation requires status=${requestedPhase}_ready`);
    invariant(contract.readiness?.live_execution_blocked === false, "ready contract must unblock live execution");
    invariant(Array.isArray(contract.readiness?.unresolved), "ready contract must declare unresolved fields");
    if (requestedPhase === "main") {
      invariant(contract.readiness.unresolved.length === 0, "main-ready contract must have no unresolved fields");
    } else {
      invariant(contract.readiness.unresolved.every((path) => path === "matrix.followup_task_id"), "calibration-ready may leave only the main-run followup task unresolved");
    }
    invariant(contract.readiness?.phase === requestedPhase, `readiness.phase must be ${requestedPhase}`);
    invariant(typeof runtime.host_model_reported === "string" && runtime.host_model_reported.length > 0, "reported host model must be verified before live execution");
    if (runtime.host_model_reported !== runtime.host_model_requested) {
      assertSha(runtime.host_model_mapping_receipt_sha256, "host model exact-mapping receipt");
    }
    invariant(typeof runtime.provider_version_exact === "string" && runtime.provider_version_exact.length > 0, "exact provider version must be verified before live execution");
    invariant(runtime.context_isolation_verified === true, "runtime context isolation must be verified before live execution");
    assertSha(runtime.context_isolation_receipt_sha256, "runtime context isolation receipt");
    for (const arm of arms) {
      assertSha(arm.source_sha256, `${arm.id}.source_sha256`);
      assertSha(arm.prompt_template_sha256, `${arm.id}.prompt_template_sha256`);
    }
    assertSha(parity.inventory_sha256, "tool_parity.inventory_sha256");
    invariant(parity.inventory_status === "verified-and-frozen", "tool inventory must be verified and frozen before live execution");
    for (const capability of parity.capabilities) {
      invariant(capability.availability_status === "verified-available", `${capability.id} must be verified available before live execution`);
      invariant(typeof capability.provider_and_version_exact === "string" && capability.provider_and_version_exact.length > 0, `${capability.id} exact provider/tool version must be verified before live execution`);
      if (["image-generation", "video-generation"].includes(capability.id)) {
        invariant(Array.isArray(capability.media_model_ids) && capability.media_model_ids.length > 0, `${capability.id} media model IDs must be verified before live execution`);
      }
    }
    invariant(broker.implementation_status === "verified", "browser broker must be implemented and verified before live execution");
    assertSha(broker.verification_receipt_sha256, "browser broker verification receipt");
    invariant(Number.isFinite(budgets.broker_queue_wait_limit_minutes) && budgets.broker_queue_wait_limit_minutes > 0, "browser queue wait limit must be fixed before live execution");
    invariant(Number.isFinite(budgets.hard_total_elapsed_limit_minutes) && budgets.hard_total_elapsed_limit_minutes > 0, "hard total elapsed limit must be fixed before live execution");
    invariant(budgets.hard_total_elapsed_limit_minutes >= Math.max(...Object.values(budgets.active_minutes)), "hard total elapsed limit must be at least the largest active-minute budget");
    if (requestedPhase === "calibration") {
      invariant(budgets.status === "provisional", "calibration must run with explicit provisional caps");
    } else {
      invariant(budgets.status === "frozen-after-calibration", "main-run budgets must be frozen after calibration");
      invariant(typeof matrix.followup_task_id === "string" && matrix.followup_task_id.length > 0, "main run must preregister the functional followup task");
      invariant(matrix.followup_task_selection_status === "preregistered", "main run followup task selection must be preregistered");
    }
  } else {
    invariant(contract.status === "draft/preflight_pending", "non-ready validation is reserved for draft/preflight_pending");
    invariant(contract.readiness?.live_execution_blocked === true, "draft must explicitly block live execution");
    invariant(Array.isArray(contract.readiness?.unresolved) && contract.readiness.unresolved.length > 0, "draft must explicitly list unresolved readiness fields");
    invariant(contract.readiness?.phase === "draft", "draft readiness.phase must be draft");
    invariant(contract.readiness.unresolved.every((path) => contract.readiness.required_resolved_paths?.includes(path)), "draft unresolved entries must be declared readiness requirements");
  }

  return contract;
}

function main(argv) {
  const args = [...argv];
  const phase = args.includes("--calibration-ready") ? "calibration" : args.includes("--main-ready") || args.includes("--ready") ? "main" : "draft";
  const path = args.find((arg) => !arg.startsWith("--"));
  invariant(path, "usage: validate-asset-generation-contract.mjs [--ready] <config.json>");
  const contract = JSON.parse(readFileSync(resolve(path), "utf8"));
  validateAssetGenerationContract(contract, { phase });
  console.log(`PASS asset-generation contract (${phase} validation): ${resolve(path)}`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  try {
    main(process.argv.slice(2));
  } catch (error) {
    console.error(`FAIL asset-generation contract: ${error.message}`);
    process.exitCode = 1;
  }
}
