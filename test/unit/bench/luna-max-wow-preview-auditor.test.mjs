import { mkdtempSync, readFileSync, realpathSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  auditWowPreview,
  canonical,
  defaultGatePath,
  runAudit,
  sha256,
} from "../../../benchmarks/ui-resolve-bench/scripts/audit-luna-max-wow-preview.mjs";

const TASKS = ["landing", "operations", "locales"];
const ARMS = ["model-only", "anthropic-frontend-design", "impeccable-prompt-only", "ui-ux-pro-max", "taste-eligible-scope-only", "omd-autopilot-v2"];

function json(path, value) { writeFileSync(path, `${JSON.stringify(value)}\n`); return { path, bytes: readFileSync(path).length, sha256: sha256(readFileSync(path)) }; }
function file(path, value) { writeFileSync(path, value); return { path, sha256: sha256(readFileSync(path)) }; }
function fixture() {
  const root = realpathSync(mkdtempSync(join(tmpdir(), "omd-wow-audit-")));
  const proof = file(join(root, "proof.png"), "proof");
  const pkg = { ...file(join(root, "design.json"), "{}"), parsed: true, pass: true };
  const raw = file(join(root, "raw.txt"), "raw");
  const evaluator = file(join(root, "eval.json"), "{}");
  const failure = file(join(root, "failure.json"), "{}");
  const cells = [];
  let order = 0;
  for (const task_id of TASKS) for (const variant_id of ARMS) for (let trial_index = 1; trial_index <= 3; trial_index += 1) {
    const eligible_for_execution_and_scoring = variant_id !== "taste-eligible-scope-only" || task_id === "landing";
    cells.push({ id: `c${++order}`, task_id, variant_id, trial_index, eligible_for_execution_and_scoring, order });
  }
  const matrix = { kind: "omd-luna-max-wow-preview", experiment_id: "x", source_commit: "a".repeat(40), maximum_cell_slots: 54, scheduled_provider_cells: 48, ineligible_unexecuted_slots: 6, cells };
  const matrixBinding = json(join(root, "matrix.json"), matrix);
  const preregistration = { kind: "omd-luna-max-wow-preview-preregistration-receipt", matrix_sha256: matrixBinding.sha256 };
  const preregBinding = json(join(root, "prereg.json"), preregistration);
  const materialization = { kind: "omd-luna-max-provider-zero-materialization", source_commit: matrix.source_commit, prepared_cells: 48, ineligible_unexecuted_slots: 6 };
  const materialBinding = json(join(root, "material.json"), materialization);
  const slots = cells.map((cell) => {
    if (!cell.eligible_for_execution_and_scoring) return { cell_id: cell.id, task_id: cell.task_id, variant_id: cell.variant_id, trial_index: cell.trial_index, status: "retained-preregistered-ineligible-unexecuted", provider_calls: 0 };
    const record = {
      cell_id: cell.id, task_id: cell.task_id, variant_id: cell.variant_id, trial_index: cell.trial_index,
      status: "completed", runtime: { provider: "codex", model: "gpt-5.6-luna", effort: "max" },
      controls: { retry_count: 0, replacement_count: 0, fallback_count: 0, model_substitution_count: 0, effort_substitution_count: 0 },
      telemetry: { elapsed_ms: cell.variant_id === "omd-autopilot-v2" ? 100 : 120, provider_usage: { input_tokens: cell.variant_id === "omd-autopilot-v2" ? 40 : 60, output_tokens: 60, total_tokens: cell.variant_id === "omd-autopilot-v2" ? 100 : 120 }, tool_calls: 4, checkpoints: 1 },
      raw_response: raw,
      workspace_before: { sha256: "b".repeat(64) }, workspace_after: { sha256: "c".repeat(64) },
      evaluator: { deterministic: true, ui_resolved: true, objective_score: cell.variant_id === "omd-autopilot-v2" ? 100 : 90, unsupported_facts: 0, result: evaluator },
      manual_product_edits: 0, follow_up_questions: 0, unplanned_interventions: 0,
      required_states: ["default", "error"],
      proof: { screenshots: [{ ...proof, kind: "desktop", publishable: true, required_states: ["default", "error"] }, { ...proof, kind: "mobile", publishable: true, required_states: ["default", "error"] }], design_system_package: pkg },
      failure_artifact: failure,
    };
    record.record_sha256 = sha256(canonical(record));
    return record;
  });
  const recordsBundle = { kind: "omd-luna-max-wow-preview-execution-records", experiment_id: matrix.experiment_id, source_commit: matrix.source_commit, matrix_sha256: matrixBinding.sha256, preregistration_sha256: preregBinding.sha256, materialization_sha256: materialBinding.sha256, slots };
  const recordsBinding = json(join(root, "records.json"), recordsBundle);
  const comparisonManifest = {
    kind: "omd-luna-max-blind-comparison-manifest", records_sha256: recordsBinding.sha256, labels_hidden: true, order_hidden: true,
    candidate_pairs: [...TASKS].sort().map((task_id) => ({ task_id, omd_variant_id: "omd-autopilot-v2", competitor_variant_id: "anthropic-frontend-design" })),
  };
  const comparisonBinding = json(join(root, "comparison.json"), comparisonManifest);
  const reviewers = Array.from({ length: 5 }, (_, i) => {
    const reviewer_id = `human-${i}`; const practitioner_role = "product designer";
    const attestation = { kind: "external-human-practitioner-attestation", attestation_id: `attestation-${i}`, reviewer_id, practitioner_role, records_sha256: recordsBinding.sha256, independently_submitted: true, synthetic_or_model_generated: false };
    return { reviewer_id, is_human_practitioner: true, practitioner_role, attestation_evidence: file(join(root, `attestation-${i}.json`), JSON.stringify(attestation)) };
  });
  const humanReceipt = { kind: "omd-luna-max-blind-human-receipt", records_sha256: recordsBinding.sha256, comparison_manifest: comparisonBinding, labels_hidden: true, order_hidden: true, synthetic_or_model_reviewers: false, reviewers, votes: reviewers.flatMap((reviewer) => TASKS.map((task_id, taskIndex) => ({ vote_id: `${reviewer.reviewer_id}-${task_id}`, reviewer_id: reviewer.reviewer_id, task_id, ship_choice: taskIndex < 2 ? "omd" : "competitor", labels_hidden: true, order_hidden: true, reversal_of_vote_id: null, reversal_inconsistent: false }))) };
  const humanBinding = json(join(root, "human.json"), humanReceipt);
  const gate = JSON.parse(readFileSync(defaultGatePath, "utf8"));
  const gateBinding = { path: defaultGatePath, bytes: readFileSync(defaultGatePath).length, sha256: sha256(readFileSync(defaultGatePath)) };
  const inputBindings = { matrix: matrixBinding, preregistration: preregBinding, materialization: materialBinding, records: recordsBinding, human: humanBinding, gate: gateBinding };
  const args = { matrix, preregistration, materialization, recordsBundle, humanReceipt, gate, inputBindings };
  const rehash = (record) => { delete record.record_sha256; record.record_sha256 = sha256(canonical(record)); };
  const audit = () => auditWowPreview(args);
  return { root, args, audit, rehash };
}

describe("Luna Max Wow Preview result auditor", () => {
  it("passes a complete conservative 54-slot result", () => {
    const f = fixture(); const result = f.audit();
    expect(result.status, JSON.stringify(result.hold_reasons)).toBe("pass"); expect(result.finalized).toBe(true);
    expect(result.metrics.omd_ui_resolved).toBe(9); expect(result.global_best_claim_allowed).toBe(false);
    expect(result.denominator).toMatchObject({ maximum_slots: 54, scheduled_scored: 48, retained_ineligible_unexecuted: 6 });
    expect(result.calls).toEqual({ provider: 0, model: 0, browser: 0, network: 0 });
    expect(result.metrics.distributions.provider_tokens).toMatchObject({ denominator: 48, count: 48, min: 100, max: 120 });
  });

  it("holds at 7/9 UI-Resolved", () => {
    const f = fixture(); const omd = f.args.recordsBundle.slots.filter((r) => r.variant_id === "omd-autopilot-v2");
    for (const record of omd.slice(0, 2)) { record.evaluator.ui_resolved = false; f.rehash(record); }
    expect(f.audit().hold_reasons).toContain("omd-ui-resolved-below-8-of-9");
  });

  it("holds when one task is only 1/3 even if aggregate threshold is met", () => {
    const f = fixture(); const task = f.args.recordsBundle.slots.filter((r) => r.variant_id === "omd-autopilot-v2" && r.task_id === "landing");
    for (const record of task.slice(0, 2)) { record.evaluator.ui_resolved = false; f.rehash(record); }
    expect(f.audit().hold_reasons).toContain("omd-task-reliability-below-2-of-3");
  });

  it("holds on a paired loss to the selected strongest competitor", () => {
    const f = fixture(); const record = f.args.recordsBundle.slots.find((r) => r.task_id === "landing" && r.variant_id === "anthropic-frontend-design" && r.trial_index === 1);
    record.evaluator.objective_score = 101; f.rehash(record);
    expect(f.audit().hold_reasons).toContain("omd-paired-objective-loss-vs-strongest-eligible-competitor");
  });

  it("keeps missing scheduled records as score-zero failures and blocks finalization", () => {
    const f = fixture(); const missing = f.args.recordsBundle.slots.findIndex((r) => r.variant_id === "model-only"); f.args.recordsBundle.slots.splice(missing, 1);
    const result = f.audit(); expect(result.status).toBe("blocked"); expect(result.finalized).toBe(false);
    expect(result.metrics.scheduled_denominator).toBe(48); expect(result.competitor_omissions).toHaveLength(1);
  });

  it("keeps timeout in the denominator at objective score zero and exposes its artifact", () => {
    const f = fixture(); const record = f.args.recordsBundle.slots.find((r) => r.variant_id === "omd-autopilot-v2");
    record.status = "timeout"; f.rehash(record); const result = f.audit();
    expect(result.finalized).toBe(true); expect(result.metrics.omd_ui_resolved).toBe(8);
    expect(result.failure_and_timeout_artifacts).toEqual(expect.arrayContaining([expect.objectContaining({ cell_id: record.cell_id, status: "timeout" })]));
  });

  it("accepts exact failure evidence without requiring competitor success screenshots", () => {
    const f = fixture(); const record = f.args.recordsBundle.slots.find((r) => r.variant_id === "model-only");
    record.status = "failed"; record.proof = {}; f.rehash(record);
    expect(f.audit().hold_reasons).not.toContain("publishable-proof-incomplete");
  });

  it("retains a failed cell with unavailable provider usage without treating it as zero-cost", () => {
    const f = fixture(); const record = f.args.recordsBundle.slots.find((r) => r.variant_id === "model-only");
    record.status = "failed";
    record.telemetry.provider_usage = { available: false, input_tokens: null, output_tokens: null, total_tokens: null, reason: "provider-emitted-usage-unavailable" };
    f.rehash(record);
    const result = f.audit();
    expect(result.finalized).toBe(true);
    expect(result.hold_reasons).toContain("provider-usage-telemetry-incomplete");
    expect(result.metrics.provider_usage_missing_cells).toContain(record.cell_id);
    expect(result.pareto.find((row) => row.variant_id === "model-only")).toMatchObject({ provider_tokens_complete: false, provider_tokens_mean: null, dominated: false });
  });

  it("holds on any unsupported fact", () => {
    const f = fixture(); const record = f.args.recordsBundle.slots.find((r) => r.status === "completed"); record.evaluator.unsupported_facts = 1; f.rehash(record);
    expect(f.audit().hold_reasons).toContain("nonzero-unsupported-facts");
  });

  it("scores competitor omission zero but publicly lists it", () => {
    const f = fixture(); const index = f.args.recordsBundle.slots.findIndex((r) => r.variant_id === "ui-ux-pro-max"); const id = f.args.recordsBundle.slots[index].cell_id; f.args.recordsBundle.slots.splice(index, 1);
    const result = f.audit(); expect(result.competitor_omissions).toContain(id); expect(result.status).toBe("blocked");
  });

  it("blocks duplicate blind-human reviewers", () => {
    const f = fixture(); f.args.humanReceipt.reviewers[4].reviewer_id = "human-0";
    expect(f.audit().hold_reasons).toContain("blind-human-reviewers-missing-duplicate-or-unattested");
  });

  it("holds when blind ship choice favors OmD on fewer than two tasks", () => {
    const f = fixture(); for (const vote of f.args.humanReceipt.votes) vote.ship_choice = "competitor";
    expect(f.audit().hold_reasons).toContain("blind-human-omd-first-or-tie-below-two-tasks");
  });

  it("fails closed when an otherwise passing blind receipt reports one reversal inconsistency", () => {
    const f = fixture();
    const [original, reversal] = f.args.humanReceipt.votes;
    reversal.reversal_of_vote_id = original.vote_id;
    reversal.reversal_inconsistent = true;
    const result = f.audit();
    expect(result.status).toBe("hold");
    expect(result.blind_human.pass).toBe(false);
    expect(result.blind_human.reversal_inconsistency_count).toBe(1);
    expect(result.hold_reasons).toContain("blind-human-reversal-inconsistency");
  });

  it("fails closed on a flag-only reversal inconsistency without a reversal binding", () => {
    const f = fixture();
    f.args.humanReceipt.votes[0].reversal_inconsistent = true;
    const result = f.audit();
    expect(result.status).toBe("hold");
    expect(result.blind_human.pass).toBe(false);
    expect(result.blind_human.reversal_inconsistency_count).toBe(1);
    expect(result.hold_reasons).toContain("blind-human-reversal-inconsistency");
  });

  it("rejects a unique but blank vote id", () => {
    const f = fixture();
    f.args.humanReceipt.votes[0].vote_id = "   ";
    const result = f.audit();
    expect(result.blind_human.pass).toBe(false);
    expect(result.hold_reasons).toContain("blind-human-reversal-binding-invalid");
  });

  it("rejects a blind comparison against a weaker arm than the derived strongest competitor", () => {
    const f = fixture();
    const comparison = JSON.parse(readFileSync(f.args.humanReceipt.comparison_manifest.path, "utf8"));
    comparison.candidate_pairs[0].competitor_variant_id = "model-only";
    writeFileSync(f.args.humanReceipt.comparison_manifest.path, JSON.stringify(comparison));
    f.args.humanReceipt.comparison_manifest.sha256 = sha256(readFileSync(f.args.humanReceipt.comparison_manifest.path));
    expect(f.audit().hold_reasons).toContain("blind-comparison-manifest-invalid-or-not-strongest");
  });

  it("rejects a reviewer missing one task vote and foreign choices", () => {
    const f = fixture(); f.args.humanReceipt.votes.pop(); f.args.humanReceipt.votes[0].ship_choice = "foreign-arm";
    expect(f.audit().hold_reasons).toContain("blind-human-vote-coverage-or-value-invalid");
  });

  it("rejects a threshold-tampered score gate", () => {
    const f = fixture(); f.args.gate.release_gates.omd_ui_resolved_minimum = 0;
    expect(() => f.audit()).toThrow(/score gate release threshold drift/);
  });

  it("does not let three-cell Taste falsely dominate full-coverage OmD", () => {
    const f = fixture(); for (const record of f.args.recordsBundle.slots.filter((r) => r.variant_id === "taste-eligible-scope-only" && r.status === "completed")) { record.evaluator.objective_score = 200; record.telemetry.elapsed_ms = 1; record.telemetry.provider_usage = { input_tokens: 0, output_tokens: 1, total_tokens: 1 }; f.rehash(record); }
    const result = f.audit(); expect(result.pareto.find((row) => row.variant_id === "taste-eligible-scope-only").full_task_coverage).toBe(false); expect(result.hold_reasons).not.toContain("omd-pareto-dominated");
  });

  it("holds when OmD is Pareto dominated and never offsets functional gates with an average", () => {
    const f = fixture();
    for (const record of f.args.recordsBundle.slots.filter((r) => r.variant_id === "model-only")) { record.evaluator.objective_score = 110; record.telemetry.elapsed_ms = 50; record.telemetry.provider_usage = { input_tokens: 20, output_tokens: 30, total_tokens: 50 }; f.rehash(record); }
    expect(f.audit().hold_reasons).toContain("omd-pareto-dominated");
  });

  it("turns tampered proof into a proof failure", () => {
    const f = fixture(); const record = f.args.recordsBundle.slots.find((r) => r.status === "completed"); writeFileSync(record.raw_response.path, "tampered");
    expect(f.audit().hold_reasons).toContain("publishable-proof-incomplete");
  });

  it("rejects symlink audit inputs before reading results", () => {
    const f = fixture(); const target = join(f.root, "actual-matrix.json"); writeFileSync(target, JSON.stringify(f.args.matrix)); const link = join(f.root, "matrix-link.json"); symlinkSync(target, link);
    const args = new Map([["matrix", link], ["preregistration", f.args.inputBindings.preregistration.path], ["materialization", f.args.inputBindings.materialization.path], ["records", f.args.inputBindings.records.path], ["human-receipt", f.args.inputBindings.human.path], ["gate", defaultGatePath], ["out", join(f.root, "out")]]);
    expect(() => runAudit(args)).toThrow(/regular non-symlink/);
  });

  it("returns blocked instead of throwing when the human receipt is absent", () => {
    const f = fixture(); const out = join(f.root, "audit-no-human");
    const args = new Map([["matrix", f.args.inputBindings.matrix.path], ["preregistration", f.args.inputBindings.preregistration.path], ["materialization", f.args.inputBindings.materialization.path], ["records", f.args.inputBindings.records.path], ["gate", defaultGatePath], ["out", out]]);
    const result = runAudit(args); expect(result.status).toBe("blocked"); expect(result.hold_reasons).toContain("blind-human-receipt-missing");
  });
});
