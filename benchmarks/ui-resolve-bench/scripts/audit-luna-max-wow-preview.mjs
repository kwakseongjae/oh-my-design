#!/usr/bin/env node

import { createHash } from "node:crypto";
import { existsSync, lstatSync, mkdirSync, readFileSync, realpathSync, writeFileSync } from "node:fs";
import { dirname, isAbsolute, join, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
export const repoRoot = resolve(here, "../../..");
export const defaultGatePath = resolve(repoRoot, "benchmarks/ui-resolve-bench/config/omd-luna-max-wow-preview-score-gate-v0.1.json");
const TERMINAL = new Set(["completed", "failed", "timeout", "infrastructure-invalid"]);
const EXACT_GATE_SHA256 = "62e26fc940961ef4a3a10144a3a1201a27aff30d95ae250cf80b557eac2c6674";

export function sha256(bytes) { return createHash("sha256").update(bytes).digest("hex"); }
export function canonical(value) {
  if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
  if (value && typeof value === "object") return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonical(value[key])}`).join(",")}}`;
  return JSON.stringify(value);
}
function invariant(condition, message) { if (!condition) throw new Error(message); }
function validateGate(gate) {
  invariant(gate?.schema_version === "0.1" && gate.gate_id === "omd-luna-max-wow-preview-score-gate-v0.1" && gate.experiment_id === "omd-luna-max-wow-preview-2.0.0-v0.1", "score gate identity drift");
  invariant(gate.slot_contract?.maximum_slots === 54 && gate.slot_contract?.scheduled_cells === 48 && gate.slot_contract?.ineligible_cells === 6 && gate.slot_contract?.omd_scheduled_cells === 9 && gate.slot_contract?.trials_per_task_arm === 3 && gate.slot_contract?.failure_score === 0 && gate.slot_contract?.missing_record_score === 0 && gate.slot_contract?.missing_record_blocks_finalization === true && canonical(gate.slot_contract.allowed_terminal_statuses) === canonical([...TERMINAL]), "score gate slot contract drift");
  invariant(gate.runtime_contract?.provider === "codex" && gate.runtime_contract?.model === "gpt-5.6-luna" && gate.runtime_contract?.effort === "max" && ["retry_count", "replacement_count", "fallback_count", "model_substitution_count", "effort_substitution_count"].every((key) => gate.runtime_contract[key] === 0), "score gate runtime contract drift");
  const release = gate.release_gates;
  invariant(release?.omd_ui_resolved_minimum === 8 && release.omd_ui_resolved_per_task_minimum === 2 && release.zero_unsupported_facts === true && release.zero_manual_product_edits === true && release.zero_follow_up_questions === true && release.zero_unplanned_interventions === true && release.publishable_evidence_every_scheduled_cell === true && release.strongest_competitor_rule?.competitor_omission_score === 0 && release.strongest_competitor_rule?.paired_losses_allowed === 0, "score gate release threshold drift");
  invariant(release.blind_human?.minimum_unique_practitioners === 5 && release.blind_human?.required_task_count === 3 && release.blind_human?.minimum_omd_first_or_tie_tasks === 2 && release.blind_human?.labels_hidden === true && release.blind_human?.order_hidden === true && release.blind_human?.duplicate_or_synthetic_reviewer_blocks === true, "score gate human contract drift");
  invariant(release.pareto?.omd_must_be_non_dominated === true && release.pareto?.functional_failure_cannot_be_offset_by_average === true && gate.claim_policy?.global_best_claim_allowed === false && typeof gate.claim_policy.public_claim_scope === "string", "score gate Pareto/claim drift");
}
function regular(path, label) {
  invariant(typeof path === "string" && isAbsolute(path) && resolve(path) === path && !path.split(sep).includes(".."), `${label} must be a canonical absolute path`);
  invariant(existsSync(path), `${label} missing: ${path}`);
  const stat = lstatSync(path);
  invariant(stat.isFile() && !stat.isSymbolicLink() && realpathSync(path) === path, `${label} must be a regular non-symlink file: ${path}`);
}
function evidence(path, label) {
  regular(path, label);
  const bytes = readFileSync(path);
  let value;
  try { value = JSON.parse(bytes.toString("utf8")); } catch { throw new Error(`${label} is not valid JSON`); }
  return { path, bytes, sha256: sha256(bytes), value };
}
function parseArgs(argv) {
  const out = new Map();
  for (let i = 0; i < argv.length; i += 1) {
    invariant(argv[i].startsWith("--"), `unexpected argument: ${argv[i]}`);
    const key = argv[i].slice(2); const value = argv[i + 1];
    invariant(value && !value.startsWith("--"), `missing value for --${key}`);
    out.set(key, value); i += 1;
  }
  return out;
}
function quantile(sorted, q) {
  if (!sorted.length) return null;
  const index = (sorted.length - 1) * q; const low = Math.floor(index); const high = Math.ceil(index);
  return sorted[low] + (sorted[high] - sorted[low]) * (index - low);
}
export function distribution(values) {
  const raw = values.filter(Number.isFinite).sort((a, b) => a - b);
  if (!raw.length) return { denominator: values.length, observed: 0, count: 0, mean: null, median: null, min: null, max: null, iqr: null, p90: null };
  const q1 = quantile(raw, .25); const q3 = quantile(raw, .75);
  return { denominator: values.length, observed: raw.length, count: raw.length, mean: raw.reduce((a, b) => a + b, 0) / raw.length, median: quantile(raw, .5), min: raw[0], max: raw.at(-1), iqr: q3 - q1, p90: quantile(raw, .9) };
}
function exactBoundFile(binding, label) {
  invariant(binding && typeof binding.path === "string" && /^[a-f0-9]{64}$/.test(binding.sha256 ?? ""), `${label} binding missing`);
  regular(binding.path, label);
  const bytes = readFileSync(binding.path);
  invariant(sha256(bytes) === binding.sha256, `${label} hash mismatch`);
  return { path: binding.path, sha256: binding.sha256, bytes: bytes.length };
}
function assertRecordHash(record) {
  invariant(/^[a-f0-9]{64}$/.test(record.record_sha256 ?? ""), `record hash missing: ${record.cell_id}`);
  const clone = structuredClone(record); delete clone.record_sha256;
  invariant(sha256(canonical(clone)) === record.record_sha256, `record hash mismatch: ${record.cell_id}`);
}
function resolved(record) { return record?.status === "completed" && record.evaluator?.deterministic === true && record.evaluator?.ui_resolved === true; }
function score(record) { return record?.status === "completed" && Number.isFinite(record.evaluator?.objective_score) ? record.evaluator.objective_score : 0; }
function sum(items, select) { return items.reduce((total, item) => total + select(item), 0); }
function providerUsageComplete(record) {
  const usage = record?.telemetry?.provider_usage;
  return Number.isFinite(usage?.input_tokens) && Number.isFinite(usage?.output_tokens)
    && Number.isFinite(usage?.total_tokens) && usage.input_tokens >= 0 && usage.output_tokens >= 0
    && usage.total_tokens === usage.input_tokens + usage.output_tokens;
}
function validateProof(record) {
  const proof = record.proof ?? {};
  const screens = Array.isArray(proof.screenshots) ? proof.screenshots : [];
  const kinds = new Set(screens.filter((item) => item.publishable === true).map((item) => item.kind));
  const requiredStates = new Set(record.required_states ?? []);
  const coveredStates = new Set(screens.flatMap((item) => item.required_states ?? []));
  let bindings = true;
  try {
    exactBoundFile(record.raw_response, `raw response ${record.cell_id}`);
    exactBoundFile(record.evaluator?.result, `evaluator result ${record.cell_id}`);
    if (record.status === "completed") {
      for (const item of screens) exactBoundFile(item, `screenshot ${record.cell_id}`);
      exactBoundFile(proof.design_system_package, `design-system package ${record.cell_id}`);
    } else {
      exactBoundFile(record.failure_artifact, `failure artifact ${record.cell_id}`);
      for (const item of screens) exactBoundFile(item, `retained screenshot ${record.cell_id}`);
    }
  } catch { bindings = false; }
  if (record.status !== "completed") return bindings;
  return bindings && kinds.has("desktop") && kinds.has("mobile") && [...requiredStates].every((state) => coveredStates.has(state))
    && proof.design_system_package?.parsed === true && proof.design_system_package?.pass === true;
}
function validateHuman(human, tasks, omdArm, strongest) {
  const reasons = [];
  if (human?.kind !== "omd-luna-max-blind-human-receipt" || human.labels_hidden !== true || human.order_hidden !== true) reasons.push("blind-human-protocol-invalid");
  if (human?.synthetic_or_model_reviewers === true) reasons.push("synthetic-human-reviewer");
  try {
    const comparisonBinding = exactBoundFile(human.comparison_manifest, "blind comparison manifest");
    const comparison = JSON.parse(readFileSync(comparisonBinding.path, "utf8"));
    const expectedPairs = tasks.map((task_id) => ({ task_id, omd_variant_id: omdArm, competitor_variant_id: strongest[task_id].variant_id }));
    invariant(comparison.kind === "omd-luna-max-blind-comparison-manifest" && comparison.records_sha256 === human.records_sha256 && comparison.labels_hidden === true && comparison.order_hidden === true && canonical(comparison.candidate_pairs) === canonical(expectedPairs), "blind comparison strongest-candidate binding invalid");
  } catch { reasons.push("blind-comparison-manifest-invalid-or-not-strongest"); }
  const reviewers = Array.isArray(human?.reviewers) ? human.reviewers : [];
  const ids = reviewers.map((reviewer) => reviewer.reviewer_id);
  const evidenceHashes = [];
  const attestationIds = [];
  let reviewerEvidenceValid = true;
  for (const reviewer of reviewers) {
    try {
      invariant(reviewer.is_human_practitioner === true && typeof reviewer.practitioner_role === "string" && reviewer.practitioner_role.trim(), "human practitioner attestation missing");
      evidenceHashes.push(exactBoundFile(reviewer.attestation_evidence, `reviewer attestation ${reviewer.reviewer_id}`).sha256);
      const attestation = JSON.parse(readFileSync(reviewer.attestation_evidence.path, "utf8"));
      invariant(attestation.kind === "external-human-practitioner-attestation" && attestation.reviewer_id === reviewer.reviewer_id && attestation.records_sha256 === human.records_sha256 && attestation.practitioner_role === reviewer.practitioner_role && attestation.independently_submitted === true && attestation.synthetic_or_model_generated === false && typeof attestation.attestation_id === "string" && attestation.attestation_id, "external human attestation invalid");
      attestationIds.push(attestation.attestation_id);
    } catch { reviewerEvidenceValid = false; }
  }
  if (reviewers.length < 5 || new Set(ids).size !== reviewers.length || ids.some((id) => typeof id !== "string" || !id.trim()) || !reviewerEvidenceValid || new Set(evidenceHashes).size !== reviewers.length || new Set(attestationIds).size !== reviewers.length) reasons.push("blind-human-reviewers-missing-duplicate-or-unattested");
  const votes = Array.isArray(human?.votes) ? human.votes : [];
  const allowedChoices = new Set(["omd", "competitor", "tie", "both-fail"]);
  const voteKeys = votes.map((vote) => `${vote.reviewer_id}\0${vote.task_id}`);
  if (votes.length !== reviewers.length * tasks.length || new Set(voteKeys).size !== votes.length || votes.some((vote) => !ids.includes(vote.reviewer_id) || !tasks.includes(vote.task_id) || !allowedChoices.has(vote.ship_choice) || vote.labels_hidden !== true || vote.order_hidden !== true)) reasons.push("blind-human-vote-coverage-or-value-invalid");
  const decisions = tasks.map((task_id) => {
    const taskVotes = votes.filter((vote) => vote.task_id === task_id);
    const counts = Object.fromEntries([...allowedChoices].map((choice) => [choice, taskVotes.filter((vote) => vote.ship_choice === choice).length]));
    return { task_id, counts, ship_choice_first_or_tie: counts.omd + counts.tie >= Math.ceil(reviewers.length / 2) ? [omdArm] : ["strongest-competitor"] };
  });
  const firstOrTie = decisions.filter((d) => d.ship_choice_first_or_tie.includes(omdArm)).length;
  if (firstOrTie < 2) reasons.push("blind-human-omd-first-or-tie-below-two-tasks");
  const reversalVotes = votes.filter((vote) => vote.reversal_of_vote_id);
  const voteIds = new Set(votes.map((vote) => vote.vote_id));
  if (votes.some((vote) => typeof vote.vote_id !== "string" || !vote.vote_id.trim()) || voteIds.size !== votes.length || reversalVotes.some((vote) => !voteIds.has(vote.reversal_of_vote_id))) reasons.push("blind-human-reversal-binding-invalid");
  const reversal = votes.filter((vote) => vote.reversal_inconsistent === true).length;
  if (reversal > 0) reasons.push("blind-human-reversal-inconsistency");
  return { pass: reasons.length === 0, reasons, unique_practitioners: new Set(ids).size, task_count: decisions.length, omd_first_or_tie_tasks: firstOrTie, reversal_inconsistency_count: reversal, derived_task_decisions: decisions };
}
function paretoRows(records, arms, fullCoverageArms) {
  return arms.map((arm) => {
    const cells = records.filter((r) => r.variant_id === arm);
    const n = cells.length;
    const providerTokensComplete = cells.every(providerUsageComplete);
    return { variant_id: arm, scheduled_denominator: n, ui_resolved_rate: n ? cells.filter(resolved).length / n : 0, objective_mean: n ? sum(cells, (r) => score(r)) / n : 0, provider_tokens_complete: providerTokensComplete, provider_tokens_mean: n && providerTokensComplete ? sum(cells, (r) => r.telemetry.provider_usage.total_tokens) / n : null, elapsed_ms_mean: n ? sum(cells, (r) => Number(r.telemetry?.elapsed_ms) || 0) / n : 0, human_burden_mean: n ? sum(cells, (r) => (Number(r.manual_product_edits) || 0) + (Number(r.follow_up_questions) || 0) + (Number(r.unplanned_interventions) || 0)) / n : 0 };
  }).map((row, _, rows) => ({ ...row, full_task_coverage: fullCoverageArms.has(row.variant_id), dominated: row.provider_tokens_complete && fullCoverageArms.has(row.variant_id) && rows.some((other) => other.variant_id !== row.variant_id && other.provider_tokens_complete && fullCoverageArms.has(other.variant_id) && other.ui_resolved_rate >= row.ui_resolved_rate && other.objective_mean >= row.objective_mean && other.provider_tokens_mean <= row.provider_tokens_mean && other.elapsed_ms_mean <= row.elapsed_ms_mean && other.human_burden_mean <= row.human_burden_mean && (other.ui_resolved_rate > row.ui_resolved_rate || other.objective_mean > row.objective_mean || other.provider_tokens_mean < row.provider_tokens_mean || other.elapsed_ms_mean < row.elapsed_ms_mean || other.human_burden_mean < row.human_burden_mean)) }));
}

export function auditWowPreview({ matrix, preregistration, materialization, recordsBundle, humanReceipt, gate, inputBindings }) {
  validateGate(gate);
  invariant(matrix.kind === "omd-luna-max-wow-preview" && matrix.maximum_cell_slots === 54 && matrix.scheduled_provider_cells === 48 && matrix.ineligible_unexecuted_slots === 6, "locked matrix 54/48/6 contract drift");
  invariant(preregistration.kind === "omd-luna-max-wow-preview-preregistration-receipt" && preregistration.matrix_sha256 === inputBindings.matrix.sha256, "preregistration matrix binding drift");
  invariant(materialization.kind === "omd-luna-max-provider-zero-materialization" && materialization.prepared_cells === 48 && materialization.ineligible_unexecuted_slots === 6 && materialization.source_commit === matrix.source_commit, "materialization contract drift");
  invariant(recordsBundle.kind === "omd-luna-max-wow-preview-execution-records" && recordsBundle.matrix_sha256 === inputBindings.matrix.sha256 && recordsBundle.preregistration_sha256 === inputBindings.preregistration.sha256 && recordsBundle.materialization_sha256 === inputBindings.materialization.sha256, "execution record input binding drift");
  invariant(recordsBundle.experiment_id === matrix.experiment_id && recordsBundle.source_commit === matrix.source_commit, "execution record authority drift");
  if (humanReceipt?.present !== false) invariant(humanReceipt?.records_sha256 === inputBindings.records.sha256, "blind human receipt record binding drift");
  const expected = matrix.cells; invariant(expected.length === 54 && new Set(expected.map((c) => c.id)).size === 54, "matrix slots must be 54 unique cells");
  const eligible = expected.filter((c) => c.eligible_for_execution_and_scoring); const ineligible = expected.filter((c) => !c.eligible_for_execution_and_scoring);
  invariant(eligible.length === 48 && ineligible.length === 6 && ineligible.every((c) => c.variant_id === "taste-eligible-scope-only"), "Taste ineligible slots drift");
  const supplied = Array.isArray(recordsBundle.slots) ? recordsBundle.slots : [];
  invariant(new Set(supplied.map((r) => r.cell_id)).size === supplied.length && supplied.every((r) => expected.some((c) => c.id === r.cell_id)), "duplicate or foreign execution record");
  const byId = new Map(supplied.map((r) => [r.cell_id, r])); const missing = [];
  const records = eligible.map((cell) => {
    const record = byId.get(cell.id);
    if (!record) { missing.push(cell.id); return { cell_id: cell.id, task_id: cell.task_id, variant_id: cell.variant_id, trial_index: cell.trial_index, status: "missing", evaluator: { objective_score: 0, ui_resolved: false }, synthetic_missing_failure: true }; }
    assertRecordHash(record);
    invariant(record.task_id === cell.task_id && record.variant_id === cell.variant_id && record.trial_index === cell.trial_index && TERMINAL.has(record.status), `execution identity/status drift: ${cell.id}`);
    invariant(record.runtime?.provider === "codex" && record.runtime?.model === "gpt-5.6-luna" && record.runtime?.effort === "max", `runtime selector drift: ${cell.id}`);
    for (const key of ["retry_count", "replacement_count", "fallback_count", "model_substitution_count", "effort_substitution_count"]) invariant(record.controls?.[key] === 0, `${key} must be zero: ${cell.id}`);
    const usage = record.telemetry?.provider_usage;
    invariant(Number.isFinite(record.telemetry?.elapsed_ms) && record.telemetry.elapsed_ms >= 0 && Number.isInteger(record.telemetry?.tool_calls) && record.telemetry.tool_calls >= 0 && Number.isInteger(record.telemetry?.checkpoints) && record.telemetry.checkpoints >= 0, `telemetry missing or inconsistent: ${cell.id}`);
    invariant(providerUsageComplete(record) || (record.status !== "completed" && usage?.available === false && usage.input_tokens === null && usage.output_tokens === null && usage.total_tokens === null && typeof usage.reason === "string" && usage.reason), `provider usage missing or inconsistent: ${cell.id}`);
    invariant(/^[a-f0-9]{64}$/.test(record.workspace_before?.sha256 ?? "") && /^[a-f0-9]{64}$/.test(record.workspace_after?.sha256 ?? ""), `workspace before/after hash missing: ${cell.id}`);
    invariant(record.evaluator?.deterministic === true && typeof record.evaluator.ui_resolved === "boolean" && Number.isFinite(record.evaluator.objective_score) && Number.isInteger(record.evaluator.unsupported_facts) && record.evaluator.unsupported_facts >= 0, `deterministic evaluator result missing: ${cell.id}`);
    for (const key of ["manual_product_edits", "follow_up_questions", "unplanned_interventions"]) invariant(Number.isInteger(record[key]) && record[key] >= 0, `${key} must be a nonnegative integer: ${cell.id}`);
    return { ...record, proof_pass: validateProof(record) };
  });
  const suppliedIneligible = supplied.filter((r) => ineligible.some((c) => c.id === r.cell_id));
  invariant(suppliedIneligible.length === 6 && suppliedIneligible.every((r) => r.status === "retained-preregistered-ineligible-unexecuted" && r.provider_calls === 0), "six Taste ineligible records must be retained and unexecuted");
  const passReasons = []; const holdReasons = [];
  if (missing.length) holdReasons.push("scheduled-execution-records-incomplete");
  const omd = records.filter((r) => r.variant_id === "omd-autopilot-v2"); const tasks = [...new Set(eligible.map((c) => c.task_id))].sort();
  const omdResolved = omd.filter(resolved).length;
  if (omdResolved >= gate.release_gates.omd_ui_resolved_minimum) passReasons.push("omd-ui-resolved-at-least-8-of-9"); else holdReasons.push("omd-ui-resolved-below-8-of-9");
  const perTask = Object.fromEntries(tasks.map((task) => [task, omd.filter((r) => r.task_id === task && resolved(r)).length]));
  if (Object.values(perTask).every((n) => n >= 2)) passReasons.push("omd-each-task-ui-resolved-at-least-2-of-3"); else holdReasons.push("omd-task-reliability-below-2-of-3");
  const zeroFields = [["unsupported_facts", (r) => Number(r.evaluator?.unsupported_facts) || 0], ["manual_product_edits", (r) => Number(r.manual_product_edits) || 0], ["follow_up_questions", (r) => Number(r.follow_up_questions) || 0], ["unplanned_interventions", (r) => Number(r.unplanned_interventions) || 0]];
  const integrityTotals = Object.fromEntries(zeroFields.map(([name, select]) => [name, sum(records, select)]));
  for (const [name] of zeroFields) if (integrityTotals[name] !== 0) holdReasons.push(`nonzero-${name.replaceAll("_", "-")}`); else passReasons.push(`zero-${name.replaceAll("_", "-")}`);
  const proofFailures = records.filter((r) => r.proof_pass !== true).map((r) => r.cell_id); if (proofFailures.length) holdReasons.push("publishable-proof-incomplete"); else passReasons.push("publishable-proof-complete");
  const providerUsageMissing = records.filter((r) => !providerUsageComplete(r)).map((r) => r.cell_id); if (providerUsageMissing.length) holdReasons.push("provider-usage-telemetry-incomplete"); else passReasons.push("provider-usage-telemetry-complete");
  const competitorOmissions = records.filter((r) => r.variant_id !== "omd-autopilot-v2" && r.status === "missing").map((r) => r.cell_id);
  const strongest = {}; let pairedLosses = 0;
  for (const task of tasks) {
    const candidates = [...new Set(records.filter((r) => r.task_id === task && r.variant_id !== "omd-autopilot-v2").map((r) => r.variant_id))].map((arm) => {
      const cells = records.filter((r) => r.task_id === task && r.variant_id === arm); return { arm, resolved: cells.filter(resolved).length, objective: sum(cells, score) };
    }).sort((a, b) => b.resolved - a.resolved || b.objective - a.objective || a.arm.localeCompare(b.arm));
    const winner = candidates[0]; const pairs = [1, 2, 3].map((trial) => { const a = records.find((r) => r.task_id === task && r.variant_id === "omd-autopilot-v2" && r.trial_index === trial); const b = records.find((r) => r.task_id === task && r.variant_id === winner.arm && r.trial_index === trial); const delta = score(a) - score(b); if (delta < 0) pairedLosses += 1; return { trial_index: trial, omd_score: score(a), competitor_score: score(b), result: delta > 0 ? "win" : delta === 0 ? "tie" : "loss" }; });
    strongest[task] = { variant_id: winner.arm, selection_ui_resolved: winner.resolved, selection_objective_sum: winner.objective, pairs };
  }
  if (pairedLosses === 0) passReasons.push("omd-first-or-tie-vs-strongest-eligible-competitor"); else holdReasons.push("omd-paired-objective-loss-vs-strongest-eligible-competitor");
  const human = humanReceipt?.present === false ? { pass: false, reasons: ["blind-human-receipt-missing"], unique_practitioners: 0, task_count: 0, omd_first_or_tie_tasks: 0, reversal_inconsistency_count: 0, derived_task_decisions: [] } : validateHuman(humanReceipt, tasks, "omd-autopilot-v2", strongest); if (human.pass) passReasons.push("blind-human-gate-pass"); else holdReasons.push(...human.reasons);
  const arms = [...new Set(records.map((r) => r.variant_id))].sort(); const fullCoverageArms = new Set(arms.filter((arm) => new Set(records.filter((r) => r.variant_id === arm).map((r) => r.task_id)).size === tasks.length && records.filter((r) => r.variant_id === arm).length === 9)); const pareto = paretoRows(records, arms, fullCoverageArms); const omdPareto = pareto.find((r) => r.variant_id === "omd-autopilot-v2");
  if (omdPareto?.dominated) holdReasons.push("omd-pareto-dominated"); else passReasons.push("omd-pareto-non-dominated");
  const status = holdReasons.length ? (missing.length || humanReceipt?.present === false ? "blocked" : "hold") : "pass";
  const metrics = {
    scheduled_denominator: 48, complete_terminal_records: 48 - missing.length, missing_records: missing.length, omd_ui_resolved: omdResolved, omd_ui_resolved_denominator: 9, omd_ui_resolved_by_task: perTask,
    integrity_totals: integrityTotals, paired_losses: pairedLosses, provider_usage_missing_cells: providerUsageMissing,
    distributions: {
      elapsed_ms: distribution(records.map((r) => r.telemetry?.elapsed_ms)), provider_tokens: distribution(records.map((r) => r.telemetry?.provider_usage?.total_tokens)), tool_calls: distribution(records.map((r) => r.telemetry?.tool_calls)), checkpoints: distribution(records.map((r) => r.telemetry?.checkpoints)), interventions: distribution(records.map((r) => r.unplanned_interventions)),
      provider_input_tokens: distribution(records.map((r) => r.telemetry?.provider_usage?.input_tokens)), provider_output_tokens: distribution(records.map((r) => r.telemetry?.provider_usage?.output_tokens)), manual_product_edits: distribution(records.map((r) => r.manual_product_edits)), follow_up_questions: distribution(records.map((r) => r.follow_up_questions)), unplanned_interventions: distribution(records.map((r) => r.unplanned_interventions)),
    },
  };
  return { schema_version: "0.1", kind: "omd-luna-max-wow-preview-audit", experiment_id: matrix.experiment_id, status, finalized: missing.length === 0, pass_reasons: [...new Set(passReasons)].sort(), hold_reasons: [...new Set(holdReasons)].sort(), input_bindings: inputBindings, denominator: { maximum_slots: 54, scheduled_scored: 48, retained_ineligible_unexecuted: 6, missing_scheduled: missing }, retained_ineligible_slots: ineligible, competitor_omissions: competitorOmissions, failure_and_timeout_artifacts: records.filter((r) => r.status !== "completed" && r.status !== "missing").map((r) => ({ cell_id: r.cell_id, status: r.status, artifact: r.failure_artifact })), proof_failures: proofFailures, strongest_eligible_competitor_by_task: strongest, metrics, blind_human: human, pareto, public_claim_scope: gate.claim_policy.public_claim_scope, global_best_claim_allowed: false, calls: { provider: 0, model: 0, browser: 0, network: 0 } };
}

function statusMarkdown(audit) {
  return `# Luna Max Wow Preview — ${audit.status.toUpperCase()}\n\n- Finalized: ${audit.finalized}\n- Scheduled denominator: ${audit.denominator.scheduled_scored}\n- Missing scheduled records: ${audit.denominator.missing_scheduled.length}\n- OmD UI-Resolved: ${audit.metrics.omd_ui_resolved}/${audit.metrics.omd_ui_resolved_denominator}\n- Global-best claim allowed: false\n\n## Pass reasons\n${audit.pass_reasons.map((r) => `- ${r}`).join("\n") || "- none"}\n\n## Hold reasons\n${audit.hold_reasons.map((r) => `- ${r}`).join("\n") || "- none"}\n\n## Claim boundary\n${audit.public_claim_scope}\n`;
}
export function runAudit(args) {
  const paths = { matrix: resolve(args.get("matrix") ?? ""), preregistration: resolve(args.get("preregistration") ?? ""), materialization: resolve(args.get("materialization") ?? ""), records: resolve(args.get("records") ?? ""), gate: resolve(args.get("gate") ?? defaultGatePath) };
  invariant(paths.gate === defaultGatePath, "score gate must use the exact repository authority path");
  const inputs = Object.fromEntries(Object.entries(paths).map(([key, path]) => [key, evidence(path, key)]));
  invariant(inputs.gate.sha256 === EXACT_GATE_SHA256, "score gate authority hash drift");
  const humanPath = args.get("human-receipt");
  inputs.human = humanPath ? evidence(resolve(humanPath), "human") : { path: null, bytes: Buffer.alloc(0), sha256: null, value: { present: false } };
  const out = resolve(args.get("out") ?? ""); invariant(out && !existsSync(out), "output must be fresh");
  const bindings = Object.fromEntries(Object.entries(inputs).map(([key, item]) => [key, { path: item.path, bytes: item.bytes.length, sha256: item.sha256, present: item.path !== null }]));
  const audit = auditWowPreview({ matrix: inputs.matrix.value, preregistration: inputs.preregistration.value, materialization: inputs.materialization.value, recordsBundle: inputs.records.value, humanReceipt: inputs.human.value, gate: inputs.gate.value, inputBindings: bindings });
  mkdirSync(out, { recursive: false });
  writeFileSync(join(out, "WOW-PREVIEW-AUDIT.json"), `${JSON.stringify(audit, null, 2)}\n`, { flag: "wx" });
  writeFileSync(join(out, "STATUS.md"), statusMarkdown(audit), { flag: "wx" });
  return audit;
}
export function main(argv = process.argv.slice(2)) { const [command, ...rest] = argv; invariant(command === "audit", "usage: audit-luna-max-wow-preview.mjs audit --matrix <file> --preregistration <file> --materialization <file> --records <file> --human-receipt <file> --out <fresh-dir>"); const result = runAudit(parseArgs(rest)); process.stdout.write(`${JSON.stringify({ status: result.status, provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 })}\n`); }
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) { try { main(); } catch (error) { process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`); process.exitCode = 1; } }
