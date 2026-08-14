#!/usr/bin/env node
/**
 * test-grok46-config-contract.mjs — Contract tests for the grok-4.6 wow-preview
 * matrix and score-gate configs (WP2 + WP3 of omd-grok46-restart-v0.1).
 *
 * Provider-zero: no live grok calls. All tests are parse/structure checks.
 * Exit 0 when all pass; non-zero when any fail.
 *
 * Test cases:
 *   TC-C01  omd-grok46-wow-preview-v0.2.json parses as valid JSON
 *   TC-C02  Matrix config pins model exactly as "grok-4.6"
 *   TC-C03  Matrix is 3 tasks × 6 arms × 3 trials (54 total cells)
 *   TC-C04  6 preregistered-ineligible Taste cells are declared
 *   TC-C05  48 scheduled provider cells (54 total − 6 ineligible)
 *   TC-C06  omd-grok46-wow-preview-score-gate-v0.2.json parses as valid JSON
 *   TC-C07  Score-gate pins model exactly as "grok-4.6"
 *   TC-C08  Score-gate slot_contract matches matrix (54 max, 48 scheduled, 6 ineligible)
 *   TC-C09  missing_data_rules.capacity_exclusion is present and well-formed
 *   TC-C10  missing_data_rules.epoch_inconclusive declares threshold >= 2
 *   TC-C11  missing_data_rules.minimum_n_per_axis requires >= 2 valid trials
 *   TC-C12  missing_data_rules.minimum_n_per_axis consequence marks undecidable, not win/loss
 *   TC-C13  wave_execution_rules.wave_order is exactly ["r1", "r2", "r3"]
 *   TC-C14  Wave r1 comes before r2 and r2 before r3 in waves array
 *   TC-C15  Matrix waves block mirrors score-gate wave order
 *   TC-C16  Matrix runtime.provider is "grok-build-cli"
 *   TC-C17  Score-gate runtime_contract.retry_count, replacement_count, fallback_count are 0
 *   TC-C18  Score-gate includes capacity_events_excluded_from_quality_comparison = true
 *   TC-C19  Score-gate includes epoch_inconclusive_if_second_capacity_event = true
 *   TC-C20  Score-gate includes undecidable_arms_excluded_from_release_decision = true
 *   TC-C21  Matrix arm_eligibility declares Taste arm ineligible for non-landing families
 *   TC-C22  Matrix fairness_contract same_user_task_packet_bytes = true
 *   TC-C23  Score-gate claim_policy luna_caf0_comparison_forbidden = true
 *   TC-C24  Score-gate claim_policy cross_model_score_comparison_allowed = false
 */

import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONFIG_DIR = join(__dirname, "..", "config");

const MATRIX_PATH = join(CONFIG_DIR, "omd-grok46-wow-preview-v0.2.json");
const SCORE_GATE_PATH = join(CONFIG_DIR, "omd-grok46-wow-preview-score-gate-v0.2.json");
const EXPECTED_MODEL = "grok-4.6";

// ─── Test framework ───────────────────────────────────────────────────────────

let passed = 0;
let failed = 0;
const results = [];

function assert(label, fn) {
  try {
    fn();
    passed += 1;
    results.push({ label, pass: true });
    console.log(`  PASS  ${label}`);
  } catch (err) {
    failed += 1;
    results.push({ label, pass: false, error: String(err?.message ?? err) });
    console.error(`  FAIL  ${label}`);
    console.error(`        ${String(err?.message ?? err).split("\n")[0]}`);
  }
}

// ─── Load configs ─────────────────────────────────────────────────────────────

let matrixRaw = null;
let matrix = null;
let scoreGateRaw = null;
let scoreGate = null;

// TC-C01: matrix parses as valid JSON
console.log("\nGroup 1: Matrix config (omd-grok46-wow-preview-v0.2.json)");

assert("TC-C01: matrix config file parses as valid JSON", () => {
  matrixRaw = readFileSync(MATRIX_PATH, "utf8");
  matrix = JSON.parse(matrixRaw);
  if (typeof matrix !== "object" || matrix === null) {
    throw new Error("parsed value is not an object");
  }
});

// TC-C02: model pinned as "grok-4.6"
assert(`TC-C02: matrix runtime.model is exactly "${EXPECTED_MODEL}"`, () => {
  if (!matrix) throw new Error("matrix not loaded (TC-C01 failed)");
  if (matrix.runtime?.model !== EXPECTED_MODEL) {
    throw new Error(
      `expected model="${EXPECTED_MODEL}", got: ${JSON.stringify(matrix.runtime?.model)}`
    );
  }
});

// TC-C03: 3 tasks × 6 arms × 3 trials = 54 total cells
assert("TC-C03: matrix declares 3 tasks × 6 arms × 3 trials (54 total cells)", () => {
  if (!matrix) throw new Error("matrix not loaded");
  const taskCount = matrix.matrix?.task_count;
  const armCount = matrix.matrix?.arm_count;
  const trialsPerTaskArm = matrix.matrix?.trials_per_task_arm;
  const totalCells = matrix.matrix?.total_preregistered_cells;
  if (taskCount !== 3) throw new Error(`expected task_count=3, got: ${taskCount}`);
  if (armCount !== 6) throw new Error(`expected arm_count=6, got: ${armCount}`);
  if (trialsPerTaskArm !== 3) throw new Error(`expected trials_per_task_arm=3, got: ${trialsPerTaskArm}`);
  if (totalCells !== 54) throw new Error(`expected total_preregistered_cells=54, got: ${totalCells}`);
  // Structural consistency check
  if (taskCount * armCount * trialsPerTaskArm !== totalCells) {
    throw new Error(
      `${taskCount} × ${armCount} × ${trialsPerTaskArm} = ${taskCount * armCount * trialsPerTaskArm} ≠ ${totalCells}`
    );
  }
});

// TC-C04: 6 preregistered-ineligible Taste cells
assert("TC-C04: 6 preregistered-ineligible Taste cells are declared", () => {
  if (!matrix) throw new Error("matrix not loaded");
  const ineligibleCount = matrix.matrix?.preregistered_ineligible_cell_count;
  if (ineligibleCount !== 6) {
    throw new Error(`expected preregistered_ineligible_cell_count=6, got: ${ineligibleCount}`);
  }
  const ineligibleCells = matrix.matrix?.preregistered_ineligible_cells;
  if (!Array.isArray(ineligibleCells)) {
    throw new Error("preregistered_ineligible_cells is not an array");
  }
  if (ineligibleCells.length !== 6) {
    throw new Error(`expected 6 ineligible cell entries, got: ${ineligibleCells.length}`);
  }
  // Verify all are for the taste arm
  for (const cell of ineligibleCells) {
    if (cell.arm !== "taste-eligible-scope-only") {
      throw new Error(`unexpected arm "${cell.arm}" in ineligible cells (expected taste-eligible-scope-only)`);
    }
    if (cell.status !== "preregistered-ineligible") {
      throw new Error(`unexpected status "${cell.status}" (expected preregistered-ineligible)`);
    }
  }
});

// TC-C05: 48 scheduled provider cells
assert("TC-C05: 48 scheduled provider cells (54 total − 6 ineligible)", () => {
  if (!matrix) throw new Error("matrix not loaded");
  const scheduled = matrix.matrix?.scheduled_provider_cell_count;
  if (scheduled !== 48) {
    throw new Error(`expected scheduled_provider_cell_count=48, got: ${scheduled}`);
  }
  // Structural check: total − ineligible
  const total = matrix.matrix?.total_preregistered_cells ?? 0;
  const ineligible = matrix.matrix?.preregistered_ineligible_cell_count ?? 0;
  if (total - ineligible !== scheduled) {
    throw new Error(`${total} − ${ineligible} = ${total - ineligible} ≠ ${scheduled}`);
  }
});

// ─── Score-gate config ────────────────────────────────────────────────────────
console.log("\nGroup 2: Score-gate config (omd-grok46-wow-preview-score-gate-v0.2.json)");

// TC-C06: score-gate parses as valid JSON
assert("TC-C06: score-gate config file parses as valid JSON", () => {
  scoreGateRaw = readFileSync(SCORE_GATE_PATH, "utf8");
  scoreGate = JSON.parse(scoreGateRaw);
  if (typeof scoreGate !== "object" || scoreGate === null) {
    throw new Error("parsed value is not an object");
  }
});

// TC-C07: model pinned as "grok-4.6" in runtime_contract
assert(`TC-C07: score-gate runtime_contract.model is exactly "${EXPECTED_MODEL}"`, () => {
  if (!scoreGate) throw new Error("score-gate not loaded (TC-C06 failed)");
  if (scoreGate.runtime_contract?.model !== EXPECTED_MODEL) {
    throw new Error(
      `expected model="${EXPECTED_MODEL}", got: ${JSON.stringify(scoreGate.runtime_contract?.model)}`
    );
  }
});

// TC-C08: slot_contract matches matrix (54 max, 48 scheduled, 6 ineligible)
assert("TC-C08: score-gate slot_contract matches matrix (54/48/6)", () => {
  if (!scoreGate) throw new Error("score-gate not loaded");
  const sc = scoreGate.slot_contract;
  if (!sc) throw new Error("slot_contract missing");
  if (sc.maximum_slots !== 54) throw new Error(`expected maximum_slots=54, got: ${sc.maximum_slots}`);
  if (sc.scheduled_cells !== 48) throw new Error(`expected scheduled_cells=48, got: ${sc.scheduled_cells}`);
  if (sc.ineligible_cells !== 6) throw new Error(`expected ineligible_cells=6, got: ${sc.ineligible_cells}`);
});

// ─── Missing-data rules ───────────────────────────────────────────────────────
console.log("\nGroup 3: Missing-data rules (locked before any cell runs)");

// TC-C09: capacity_exclusion present and well-formed
assert("TC-C09: missing_data_rules.capacity_exclusion is present and well-formed", () => {
  if (!scoreGate) throw new Error("score-gate not loaded");
  const mdr = scoreGate.missing_data_rules;
  if (!mdr) throw new Error("missing_data_rules block is absent");
  const ce = mdr.capacity_exclusion;
  if (!ce) throw new Error("missing_data_rules.capacity_exclusion is absent");
  if (typeof ce.rule !== "string" || ce.rule.length === 0) {
    throw new Error("capacity_exclusion.rule must be a non-empty string");
  }
  if (!Array.isArray(ce.status_values) || ce.status_values.length === 0) {
    throw new Error("capacity_exclusion.status_values must be a non-empty array");
  }
  if (!ce.status_values.includes("capacity-exhausted")) {
    throw new Error('capacity_exclusion.status_values must include "capacity-exhausted"');
  }
  if (!ce.status_values.includes("usage-limit")) {
    throw new Error('capacity_exclusion.status_values must include "usage-limit"');
  }
  if (ce.reporting !== "separate") {
    throw new Error(`capacity_exclusion.reporting must be "separate", got: ${ce.reporting}`);
  }
});

// TC-C10: epoch_inconclusive threshold >= 2
assert("TC-C10: missing_data_rules.epoch_inconclusive threshold >= 2", () => {
  if (!scoreGate) throw new Error("score-gate not loaded");
  const mdr = scoreGate.missing_data_rules;
  if (!mdr) throw new Error("missing_data_rules block is absent");
  const ei = mdr.epoch_inconclusive;
  if (!ei) throw new Error("missing_data_rules.epoch_inconclusive is absent");
  if (typeof ei.threshold !== "number") {
    throw new Error("epoch_inconclusive.threshold must be a number");
  }
  if (ei.threshold < 2) {
    throw new Error(`epoch_inconclusive.threshold must be >= 2, got: ${ei.threshold}`);
  }
  if (ei.consequence !== "epoch_inconclusive_no_release") {
    throw new Error(
      `epoch_inconclusive.consequence must be "epoch_inconclusive_no_release", got: ${ei.consequence}`
    );
  }
});

// TC-C11: minimum_n_per_axis requires >= 2 valid trials
assert("TC-C11: missing_data_rules.minimum_n_per_axis requires >= 2 valid trials", () => {
  if (!scoreGate) throw new Error("score-gate not loaded");
  const mdr = scoreGate.missing_data_rules;
  if (!mdr) throw new Error("missing_data_rules block is absent");
  const mn = mdr.minimum_n_per_axis;
  if (!mn) throw new Error("missing_data_rules.minimum_n_per_axis is absent");
  if (typeof mn.minimum_valid_trials !== "number") {
    throw new Error("minimum_n_per_axis.minimum_valid_trials must be a number");
  }
  if (mn.minimum_valid_trials < 2) {
    throw new Error(`minimum_n_per_axis.minimum_valid_trials must be >= 2, got: ${mn.minimum_valid_trials}`);
  }
  if (mn.axis !== "arm_x_task") {
    throw new Error(`minimum_n_per_axis.axis must be "arm_x_task", got: ${mn.axis}`);
  }
});

// TC-C12: undecidable consequence never counts as win or loss
assert("TC-C12: minimum_n_per_axis consequence marks undecidable (not win, not loss)", () => {
  if (!scoreGate) throw new Error("score-gate not loaded");
  const mdr = scoreGate.missing_data_rules;
  if (!mdr) throw new Error("missing_data_rules block is absent");
  const mn = mdr.minimum_n_per_axis;
  if (!mn) throw new Error("missing_data_rules.minimum_n_per_axis is absent");
  const consequence = String(mn.consequence ?? "");
  if (!consequence.includes("undecidable")) {
    throw new Error(
      `minimum_n_per_axis.consequence must contain "undecidable", got: "${consequence}"`
    );
  }
  // Must NOT contain "win" or "loss" as standalone verdict labels
  if (consequence === "win" || consequence === "loss") {
    throw new Error(
      `undecidable must not resolve to "win" or "loss", got: "${consequence}"`
    );
  }
});

// ─── Wave rules ───────────────────────────────────────────────────────────────
console.log("\nGroup 4: Wave execution rules");

// TC-C13: wave_order is exactly ["r1", "r2", "r3"]
assert('TC-C13: wave_execution_rules.wave_order is exactly ["r1", "r2", "r3"]', () => {
  if (!scoreGate) throw new Error("score-gate not loaded");
  const wer = scoreGate.wave_execution_rules;
  if (!wer) throw new Error("wave_execution_rules block is absent");
  const order = wer.wave_order;
  if (!Array.isArray(order)) throw new Error("wave_order must be an array");
  if (order.length !== 3) throw new Error(`wave_order must have 3 entries, got: ${order.length}`);
  if (order[0] !== "r1") throw new Error(`wave_order[0] must be "r1", got: "${order[0]}"`);
  if (order[1] !== "r2") throw new Error(`wave_order[1] must be "r2", got: "${order[1]}"`);
  if (order[2] !== "r3") throw new Error(`wave_order[2] must be "r3", got: "${order[2]}"`);
});

// TC-C14: wave array order r1 → r2 → r3
assert("TC-C14: waves array is ordered r1 → r2 → r3", () => {
  if (!scoreGate) throw new Error("score-gate not loaded");
  const wer = scoreGate.wave_execution_rules;
  if (!wer) throw new Error("wave_execution_rules block is absent");
  const waves = wer.waves;
  if (!Array.isArray(waves) || waves.length !== 3) {
    throw new Error(`waves must be an array of 3 elements, got length: ${waves?.length}`);
  }
  if (waves[0].wave_id !== "r1") throw new Error(`waves[0].wave_id must be "r1", got: "${waves[0].wave_id}"`);
  if (waves[1].wave_id !== "r2") throw new Error(`waves[1].wave_id must be "r2", got: "${waves[1].wave_id}"`);
  if (waves[2].wave_id !== "r3") throw new Error(`waves[2].wave_id must be "r3", got: "${waves[2].wave_id}"`);
});

// TC-C15: matrix waves.wave_order mirrors score-gate
assert("TC-C15: matrix waves.wave_order mirrors score-gate wave_order", () => {
  if (!matrix) throw new Error("matrix not loaded");
  if (!scoreGate) throw new Error("score-gate not loaded");
  const matrixWaveOrder = matrix.waves?.wave_order;
  const gateWaveOrder = scoreGate.wave_execution_rules?.wave_order;
  if (!Array.isArray(matrixWaveOrder)) throw new Error("matrix waves.wave_order must be an array");
  if (!Array.isArray(gateWaveOrder)) throw new Error("score-gate wave_order must be an array");
  if (JSON.stringify(matrixWaveOrder) !== JSON.stringify(gateWaveOrder)) {
    throw new Error(
      `matrix wave_order ${JSON.stringify(matrixWaveOrder)} ≠ score-gate ${JSON.stringify(gateWaveOrder)}`
    );
  }
});

// ─── Runtime integrity ────────────────────────────────────────────────────────
console.log("\nGroup 5: Runtime integrity contracts");

// TC-C16: matrix runtime.provider is "grok-build-cli"
assert('TC-C16: matrix runtime.provider is "grok-build-cli"', () => {
  if (!matrix) throw new Error("matrix not loaded");
  if (matrix.runtime?.provider !== "grok-build-cli") {
    throw new Error(`expected provider="grok-build-cli", got: ${JSON.stringify(matrix.runtime?.provider)}`);
  }
});

// TC-C17: score-gate locks retry=0, replacement=0, fallback=0
assert("TC-C17: score-gate runtime_contract locks retry=0, replacement=0, fallback=0, substitution=0", () => {
  if (!scoreGate) throw new Error("score-gate not loaded");
  const rc = scoreGate.runtime_contract;
  if (!rc) throw new Error("runtime_contract missing");
  if (rc.retry_count !== 0) throw new Error(`retry_count must be 0, got: ${rc.retry_count}`);
  if (rc.replacement_count !== 0) throw new Error(`replacement_count must be 0, got: ${rc.replacement_count}`);
  if (rc.fallback_count !== 0) throw new Error(`fallback_count must be 0, got: ${rc.fallback_count}`);
  if (rc.model_substitution_count !== 0) throw new Error(`model_substitution_count must be 0, got: ${rc.model_substitution_count}`);
  if (rc.effort_substitution_count !== 0) throw new Error(`effort_substitution_count must be 0, got: ${rc.effort_substitution_count}`);
});

// TC-C18: capacity_events_excluded_from_quality_comparison = true
assert("TC-C18: release_gates.capacity_events_excluded_from_quality_comparison = true", () => {
  if (!scoreGate) throw new Error("score-gate not loaded");
  if (scoreGate.release_gates?.capacity_events_excluded_from_quality_comparison !== true) {
    throw new Error("capacity_events_excluded_from_quality_comparison must be true");
  }
});

// TC-C19: epoch_inconclusive_if_second_capacity_event = true
assert("TC-C19: release_gates.epoch_inconclusive_if_second_capacity_event = true", () => {
  if (!scoreGate) throw new Error("score-gate not loaded");
  if (scoreGate.release_gates?.epoch_inconclusive_if_second_capacity_event !== true) {
    throw new Error("epoch_inconclusive_if_second_capacity_event must be true");
  }
});

// TC-C20: undecidable_arms_excluded_from_release_decision = true
assert("TC-C20: release_gates.undecidable_arms_excluded_from_release_decision = true", () => {
  if (!scoreGate) throw new Error("score-gate not loaded");
  if (scoreGate.release_gates?.undecidable_arms_excluded_from_release_decision !== true) {
    throw new Error("undecidable_arms_excluded_from_release_decision must be true");
  }
});

// ─── Fairness and claim policy ────────────────────────────────────────────────
console.log("\nGroup 6: Fairness and claim policy");

// TC-C21: Taste arm eligibility declared for non-landing families
assert("TC-C21: arm_eligibility declares Taste arm ineligible for non-landing families", () => {
  if (!matrix) throw new Error("matrix not loaded");
  const eligibility = matrix.arm_eligibility?.["taste-eligible-scope-only"];
  if (!eligibility) {
    throw new Error("arm_eligibility.taste-eligible-scope-only is absent");
  }
  if (!Array.isArray(eligibility.eligible_families)) {
    throw new Error("eligible_families must be an array");
  }
  if (!eligibility.eligible_families.includes("landing")) {
    throw new Error('eligible_families must include "landing"');
  }
  if (eligibility.ineligible_policy !== "retain-preregistered-slot-but-do-not-execute-or-score") {
    throw new Error(
      `ineligible_policy must be "retain-preregistered-slot-but-do-not-execute-or-score", got: ${eligibility.ineligible_policy}`
    );
  }
});

// TC-C22: fairness_contract same_user_task_packet_bytes = true
assert("TC-C22: matrix fairness_contract.same_user_task_packet_bytes = true", () => {
  if (!matrix) throw new Error("matrix not loaded");
  if (matrix.fairness_contract?.same_user_task_packet_bytes !== true) {
    throw new Error("fairness_contract.same_user_task_packet_bytes must be true");
  }
});

// TC-C23: luna_caf0_comparison_forbidden = true (epoch immutability)
assert("TC-C23: score-gate claim_policy.luna_caf0_comparison_forbidden = true", () => {
  if (!scoreGate) throw new Error("score-gate not loaded");
  if (scoreGate.claim_policy?.luna_caf0_comparison_forbidden !== true) {
    throw new Error("claim_policy.luna_caf0_comparison_forbidden must be true");
  }
});

// TC-C24: cross_model_score_comparison_allowed = false
assert("TC-C24: score-gate claim_policy.cross_model_score_comparison_allowed = false", () => {
  if (!scoreGate) throw new Error("score-gate not loaded");
  if (scoreGate.claim_policy?.cross_model_score_comparison_allowed !== false) {
    throw new Error("claim_policy.cross_model_score_comparison_allowed must be false");
  }
});

// ─── Summary ─────────────────────────────────────────────────────────────────

console.log("\n" + "═".repeat(64));
console.log(`Results: ${passed} passed, ${failed} failed out of ${passed + failed} tests`);

if (failed > 0) {
  console.error("\nFailed tests:");
  for (const r of results.filter((t) => !t.pass)) {
    console.error(`  ✗ ${r.label}`);
    console.error(`    ${r.error}`);
  }
}

process.exitCode = failed > 0 ? 1 : 0;
