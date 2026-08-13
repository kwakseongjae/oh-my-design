import { chmodSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { auditWowPreview, canonical, defaultGatePath, sha256 } from "../../../benchmarks/ui-resolve-bench/scripts/audit-luna-max-wow-preview.mjs";
import { finalizeReview, prepareReview } from "../../../benchmarks/ui-resolve-bench/scripts/prepare-luna-max-blind-review.mjs";

const TASKS = ["landing", "operations", "locales"];
const ARMS = ["model-only", "anthropic-frontend-design", "impeccable-prompt-only", "ui-ux-pro-max", "taste-eligible-scope-only", "omd-autopilot-v2"];

function json(path, value) { writeFileSync(path, `${JSON.stringify(value)}\n`); return { path, bytes: readFileSync(path).length, sha256: sha256(readFileSync(path)) }; }
function file(path, value) { writeFileSync(path, value); return { path, bytes: Buffer.byteLength(value), sha256: sha256(readFileSync(path)) }; }
const MINIMAL_PNG = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M/wHwAF/gL+X1tKAAAAAElFTkSuQmCC", "base64");

function fixture({ nonPng = false } = {}) {
  const root = realpathSync(mkdtempSync(join(tmpdir(), "omd-luna-blind-")));
  const proof = file(join(root, "proof.png"), nonPng ? Buffer.from("not-a-png") : MINIMAL_PNG);
  const pkg = { ...file(join(root, "design.json"), "{}"), parsed: true, pass: true };
  const raw = file(join(root, "raw.txt"), "raw");
  const evaluator = file(join(root, "eval.json"), "{}");
  const failure = file(join(root, "failure.json"), "{}");
  const cells = [];
  let order = 0;
  for (const task_id of TASKS) for (const variant_id of ARMS) for (let trial_index = 1; trial_index <= 3; trial_index += 1) {
    cells.push({ id: `c${++order}`, task_id, variant_id, trial_index, eligible_for_execution_and_scoring: variant_id !== "taste-eligible-scope-only" || task_id === "landing", order });
  }
  const matrix = { kind: "omd-luna-max-wow-preview", experiment_id: "x", source_commit: "a".repeat(40), maximum_cell_slots: 54, scheduled_provider_cells: 48, ineligible_unexecuted_slots: 6, cells };
  const matrixBinding = json(join(root, "matrix.json"), matrix);
  const preregistration = { kind: "omd-luna-max-wow-preview-preregistration-receipt", matrix_sha256: matrixBinding.sha256 };
  const preregBinding = json(join(root, "preregistration.json"), preregistration);
  const materialization = { kind: "omd-luna-max-provider-zero-materialization", source_commit: matrix.source_commit, prepared_cells: 48, ineligible_unexecuted_slots: 6 };
  const materialBinding = json(join(root, "materialization.json"), materialization);
  const slots = cells.map((cell) => {
    if (!cell.eligible_for_execution_and_scoring) return { cell_id: cell.id, task_id: cell.task_id, variant_id: cell.variant_id, trial_index: cell.trial_index, status: "retained-preregistered-ineligible-unexecuted", provider_calls: 0 };
    const objective = cell.variant_id === "omd-autopilot-v2" ? 100 : cell.variant_id === "anthropic-frontend-design" ? 95 : 90;
    const record = {
      cell_id: cell.id, task_id: cell.task_id, variant_id: cell.variant_id, trial_index: cell.trial_index,
      status: "completed", runtime: { provider: "codex", model: "gpt-5.6-luna", effort: "max" },
      controls: { retry_count: 0, replacement_count: 0, fallback_count: 0, model_substitution_count: 0, effort_substitution_count: 0 },
      telemetry: { elapsed_ms: 100, provider_usage: { input_tokens: 40, output_tokens: 60, total_tokens: 100 }, tool_calls: 4, checkpoints: 1 },
      raw_response: raw, workspace_before: { sha256: "b".repeat(64) }, workspace_after: { sha256: "c".repeat(64) },
      evaluator: { deterministic: true, ui_resolved: true, objective_score: objective, unsupported_facts: 0, result: evaluator },
      manual_product_edits: 0, follow_up_questions: 0, unplanned_interventions: 0, required_states: ["default", "error"],
      proof: { screenshots: [{ ...proof, kind: "desktop", publishable: true, required_states: ["default", "error"] }, { ...proof, kind: "mobile", publishable: true, required_states: ["default", "error"] }], design_system_package: pkg },
      failure_artifact: failure,
    };
    record.record_sha256 = sha256(canonical(record));
    return record;
  });
  const records = { kind: "omd-luna-max-wow-preview-execution-records", experiment_id: matrix.experiment_id, source_commit: matrix.source_commit, matrix_sha256: matrixBinding.sha256, preregistration_sha256: preregBinding.sha256, materialization_sha256: materialBinding.sha256, slots };
  const recordsBinding = json(join(root, "records.json"), records);
  return { root, matrix, preregistration, materialization, records, matrixBinding, preregBinding, materialBinding, recordsBinding };
}

function rewriteRecords(f) {
  writeFileSync(f.recordsBinding.path, `${JSON.stringify(f.records)}\n`);
  f.recordsBinding.bytes = readFileSync(f.recordsBinding.path).length;
  f.recordsBinding.sha256 = sha256(readFileSync(f.recordsBinding.path));
}

function prepared(f) {
  const packetOut = join(f.root, "packet");
  const privateOut = join(f.root, "private");
  const result = prepareReview({ matrixPath: f.matrixBinding.path, preregistrationPath: f.preregBinding.path, materializationPath: f.materialBinding.path, recordsPath: f.recordsBinding.path, packetOut, privateOut });
  return { result, packetOut, privateOut, packet: JSON.parse(readFileSync(result.packet.path)), privateMap: JSON.parse(readFileSync(result.private_map.path)) };
}

function humanInputs(f, p, count = 5) {
  const submissions = join(f.root, "submissions"); const attestations = join(f.root, "attestations");
  mkdirSync(submissions); mkdirSync(attestations);
  for (let i = 0; i < count; i += 1) {
    const reviewer_id = `practitioner-${i}`; const practitioner_role = "product designer";
    json(join(attestations, `${i}.json`), { kind: "external-human-practitioner-attestation", attestation_id: `attestation-${i}`, reviewer_id, practitioner_role, records_sha256: f.recordsBinding.sha256, independently_submitted: true, synthetic_or_model_generated: false });
    json(join(submissions, `${i}.json`), {
      kind: "blind-ui-comparison-submission", packet_sha256: p.result.packet.sha256, reviewer_id, practitioner_role,
      is_human_practitioner: true, synthetic_or_model_generated: false, labels_hidden: true, order_hidden: true,
      votes: p.packet.tasks.map((task, taskIndex) => ({ vote_id: `${reviewer_id}-${taskIndex}`, review_task_id: task.review_task_id, choice: taskIndex < 2 ? p.privateMap.tasks.find((item) => item.review_task_id === task.review_task_id).labels.A === "omd" ? "A" : "B" : "tie", reversal_of_vote_id: null, reversal_inconsistent: false })),
    });
  }
  return { submissions, attestations };
}

describe("Luna Max provider-zero blind-human operations", () => {
  it("prepares a fresh opaque packet from the auditor's strongest competitors", () => {
    const f = fixture(); const p = prepared(f);
    expect(p.result.calls).toEqual({ provider: 0, model: 0, browser: 0, network: 0 });
    expect(p.packet.tasks).toHaveLength(3);
    expect(p.packet.tasks.every((task) => task.options.every((option) => option.trials.length === 3))).toBe(true);
    expect(JSON.parse(readFileSync(p.result.submission_template.path)).votes).toHaveLength(3);
    expect(JSON.parse(readFileSync(p.result.attestation_template.path))).toMatchObject({ independently_submitted: true, synthetic_or_model_generated: false });
    expect(p.privateMap.tasks.every((task) => task.arms.competitor === "anthropic-frontend-design")).toBe(true);
    const reviewerBytes = readFileSync(p.result.packet.path, "utf8");
    for (const forbidden of [...ARMS, "gpt-5.6-luna", "codex", "Luna Max", "oh-my-design", "omd-autopilot"]) expect(reviewerBytes).not.toContain(forbidden);
    expect(() => prepared(f)).toThrow(/already exists/);
  });

  it("refuses to prepare from an incomplete 48-plus-6 execution bundle", () => {
    const f = fixture();
    f.records.slots.splice(f.records.slots.findIndex((record) => record.status === "completed"), 1);
    rewriteRecords(f);
    expect(() => prepared(f)).toThrow(/all 48 scheduled terminal records are required/);
  });

  it("retains a selected competitor failure as a neutral no-render trial without rerun or omission", () => {
    const f = fixture();
    for (const record of f.records.slots.filter((item) => item.status === "completed" && item.variant_id !== "omd-autopilot-v2" && item.trial_index === 1)) {
      record.status = "failed";
      record.evaluator.ui_resolved = false;
      record.proof = {};
      delete record.record_sha256;
      record.record_sha256 = sha256(canonical(record));
    }
    rewriteRecords(f);
    const p = prepared(f);
    expect(p.privateMap.tasks.every((task) => task.arms.competitor === "anthropic-frontend-design")).toBe(true);
    for (const task of p.packet.tasks) {
      const mapping = p.privateMap.tasks.find((item) => item.review_task_id === task.review_task_id);
      const competitorLabel = mapping.labels.A === "competitor" ? "A" : "B";
      const trial = task.options.find((option) => option.label === competitorLabel).trials[0];
      expect(trial).toMatchObject({ trial: 1, outcome: "no_completed_render", terminal_status: "failed", failure_evidence: { sha256: expect.stringMatching(/^[a-f0-9]{64}$/) } });
      expect(trial).not.toHaveProperty("screenshots");
    }
    expect(p.result.calls).toEqual({ provider: 0, model: 0, browser: 0, network: 0 });
  });

  it("rejects a completed screenshot that is not actually PNG", () => {
    const f = fixture({ nonPng: true });
    expect(() => prepared(f)).toThrow(/must be an actual PNG asset/);
  });

  it("finalizes five independent reviews into the exact receipt accepted by the auditor", () => {
    const f = fixture(); const p = prepared(f); const input = humanInputs(f, p);
    const outPath = join(f.root, "human-receipt.json");
    const result = finalizeReview({ packetPath: p.result.packet.path, privateMapPath: p.result.private_map.path, privateMapSha256: p.result.private_map.sha256, submissionsDirectory: input.submissions, attestationsDirectory: input.attestations, outPath });
    expect(result).toMatchObject({ reviewers: 5, votes: 15, calls: { provider: 0, model: 0, browser: 0, network: 0 } });
    const humanReceipt = JSON.parse(readFileSync(outPath));
    const audit = auditWowPreview({ matrix: f.matrix, preregistration: f.preregistration, materialization: f.materialization, recordsBundle: f.records, humanReceipt, gate: JSON.parse(readFileSync(defaultGatePath)), inputBindings: { matrix: f.matrixBinding, preregistration: f.preregBinding, materialization: f.materialBinding, records: f.recordsBinding, human: result.receipt, gate: { path: defaultGatePath, bytes: readFileSync(defaultGatePath).length, sha256: sha256(readFileSync(defaultGatePath)) } } });
    expect(audit.blind_human.pass, audit.blind_human.reasons).toBe(true);
  });

  it("fails finalization if a packet-bound PNG is tampered after preparation", () => {
    const f = fixture(); const p = prepared(f); const input = humanInputs(f, p);
    const asset = p.packet.tasks[0].options[0].trials[0].screenshots.desktop.path;
    const assetPath = join(p.packetOut, asset);
    chmodSync(join(p.packetOut, "assets"), 0o755); chmodSync(assetPath, 0o644);
    writeFileSync(assetPath, Buffer.concat([readFileSync(assetPath), Buffer.from([0])]));
    expect(() => finalizeReview({ packetPath: p.result.packet.path, privateMapPath: p.result.private_map.path, privateMapSha256: p.result.private_map.sha256, submissionsDirectory: input.submissions, attestationsDirectory: input.attestations, outPath: join(f.root, "tampered-receipt.json") })).toThrow(/binding mismatch/);
  });

  it("fails closed on missing humans, foreign votes, and reversal inconsistency", () => {
    const f = fixture(); const p = prepared(f); const input = humanInputs(f, p, 4);
    expect(() => finalizeReview({ packetPath: p.result.packet.path, privateMapPath: p.result.private_map.path, privateMapSha256: p.result.private_map.sha256, submissionsDirectory: input.submissions, attestationsDirectory: input.attestations, outPath: join(f.root, "receipt-4.json") })).toThrow(/at least five/);

    const foreignFixture = fixture(); const foreignPrepared = prepared(foreignFixture); const foreignInput = humanInputs(foreignFixture, foreignPrepared);
    const foreignPath = join(foreignInput.submissions, "0.json"); const foreign = JSON.parse(readFileSync(foreignPath)); foreign.votes[0].choice = "both-fail"; writeFileSync(foreignPath, JSON.stringify(foreign));
    expect(() => finalizeReview({ packetPath: foreignPrepared.result.packet.path, privateMapPath: foreignPrepared.result.private_map.path, privateMapSha256: foreignPrepared.result.private_map.sha256, submissionsDirectory: foreignInput.submissions, attestationsDirectory: foreignInput.attestations, outPath: join(foreignFixture.root, "receipt-foreign.json") })).toThrow(/only A, B, or tie/);

    const reversalFixture = fixture(); const reversalPrepared = prepared(reversalFixture); const reversalInput = humanInputs(reversalFixture, reversalPrepared);
    const reversalPath = join(reversalInput.submissions, "0.json"); const reversal = JSON.parse(readFileSync(reversalPath)); reversal.votes[0].reversal_inconsistent = true; writeFileSync(reversalPath, JSON.stringify(reversal));
    expect(() => finalizeReview({ packetPath: reversalPrepared.result.packet.path, privateMapPath: reversalPrepared.result.private_map.path, privateMapSha256: reversalPrepared.result.private_map.sha256, submissionsDirectory: reversalInput.submissions, attestationsDirectory: reversalInput.attestations, outPath: join(reversalFixture.root, "receipt-reversal.json") })).toThrow(/reversal inconsistency/);
  });
});
