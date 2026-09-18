#!/usr/bin/env node

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { validateAssetGenerationContract } from "./validate-asset-generation-contract.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const configPath = join(here, "..", "config", "asset-generation-four-arm-v0.1.json");
const baseline = JSON.parse(readFileSync(configPath, "utf8"));

function clone() {
  return structuredClone(baseline);
}

function readyCandidate(phase = "main") {
  const candidate = clone();
  candidate.status = `${phase}_ready`;
  candidate.readiness.phase = phase;
  candidate.readiness.live_execution_blocked = false;
  candidate.readiness.unresolved = phase === "calibration" ? ["matrix.followup_task_id"] : [];
  candidate.runtime.host_model_reported = "grok-4.6";
  candidate.runtime.provider_version_exact = "1.0.13";
  candidate.runtime.context_isolation_verified = true;
  candidate.runtime.context_isolation_receipt_sha256 = "e".repeat(64);
  candidate.tool_parity.inventory_status = "verified-and-frozen";
  candidate.tool_parity.inventory_sha256 = "a".repeat(64);
  candidate.execution_control.browser_broker.implementation_status = "verified";
  candidate.execution_control.browser_broker.verification_receipt_sha256 = "b".repeat(64);
  candidate.budgets.status = phase === "calibration" ? "provisional" : "frozen-after-calibration";
  candidate.budgets.broker_queue_wait_limit_minutes = 5;
  candidate.budgets.hard_total_elapsed_limit_minutes = 30;
  if (phase === "main") {
    candidate.matrix.followup_task_id = "functional-task-1";
    candidate.matrix.followup_task_selection_status = "preregistered";
  }
  for (const arm of candidate.arms) {
    arm.source_sha256 = "c".repeat(64);
    arm.prompt_template_sha256 = "d".repeat(64);
  }
  for (const capability of candidate.tool_parity.capabilities) {
    capability.availability_status = "verified-available";
    capability.provider_and_version_exact = "verified-tool@1";
    if (["image-generation", "video-generation"].includes(capability.id)) capability.media_model_ids = ["verified-media-model"];
  }
  return candidate;
}

function reject(label, mutate, pattern) {
  const candidate = clone();
  mutate(candidate);
  assert.throws(() => validateAssetGenerationContract(candidate), pattern, label);
}

let passed = 0;
function test(label, fn) {
  try {
    fn();
    passed += 1;
    console.log(`PASS ${label}`);
  } catch (error) {
    console.error(`FAIL ${label}: ${error.message}`);
    process.exitCode = 1;
  }
}

test("canonical explicit unresolved draft validates without providers", () => {
  assert.equal(validateAssetGenerationContract(clone()).status, "draft/preflight_pending");
});

test("unequal tool rights are rejected", () => {
  reject("unequal tool rights", (c) => {
    c.tool_parity.capabilities[1].arm_rights["no-skill"] = "denied";
  }, /identical invoke rights/);
});

test("a missing common tool capability is rejected", () => {
  reject("missing tool", (c) => {
    c.tool_parity.capabilities.pop();
  }, /complete tool capability inventory/);
});

test("a fixed shared creative pack is rejected", () => {
  reject("fixed pack", (c) => {
    c.common_input.ready_made_creative_asset_pack = true;
  }, /creative asset pack is forbidden/);
});

test("cross-arm asset reuse is rejected", () => {
  reject("cross-arm reuse", (c) => {
    c.artifact_contract.cross_arm_asset_reuse = true;
  }, /cross-arm asset reuse is forbidden/);
});

test("unsafe prompt-only shared browser control is rejected", () => {
  reject("prompt-only browser", (c) => {
    c.execution_control.browser_broker.enforced_outside_model_instructions = false;
    c.execution_control.browser_broker.capacity = 4;
  }, /outside model instructions/);
});

test("concurrency four with latency eligibility is rejected", () => {
  reject("latency eligible", (c) => {
    c.execution_control.latency_comparison = "eligible";
  }, /descriptive-only/);
});

test("queue overlap cannot receive double active-budget credit", () => {
  reject("queue overlap", (c) => {
    c.budgets.overlapping_work_while_browser_queued_counts_active = false;
  }, /must remain active time/);
});

test("falsely ready contract with unresolved preflight is rejected", () => {
  const candidate = clone();
  candidate.status = "main_ready";
  candidate.readiness.phase = "main";
  candidate.readiness.live_execution_blocked = false;
  candidate.readiness.unresolved = [];
  assert.throws(
    () => validateAssetGenerationContract(candidate, { readiness: true }),
    /reported host model must be verified/,
  );
});

test("an unsupported tool cannot be admitted as ready", () => {
  const candidate = readyCandidate();
  candidate.tool_parity.capabilities.find((capability) => capability.id === "video-generation").availability_status = "unsupported";
  assert.throws(
    () => validateAssetGenerationContract(candidate, { readiness: true }),
    /video-generation must be verified available/,
  );
});

test("wrong reported host model without an exact mapping receipt is rejected", () => {
  const candidate = readyCandidate();
  candidate.runtime.host_model_reported = "some-other-model";
  assert.throws(
    () => validateAssetGenerationContract(candidate, { phase: "main" }),
    /host model exact-mapping receipt/,
  );
});

test("unverified runtime context isolation blocks calibration readiness", () => {
  const candidate = readyCandidate("calibration");
  candidate.runtime.context_isolation_verified = false;
  candidate.runtime.context_isolation_receipt_sha256 = null;
  assert.throws(
    () => validateAssetGenerationContract(candidate, { phase: "calibration" }),
    /runtime context isolation must be verified/,
  );
});

test("calibration-ready permits the main followup task to remain unresolved", () => {
  const candidate = readyCandidate("calibration");
  assert.equal(validateAssetGenerationContract(candidate, { phase: "calibration" }).status, "calibration_ready");
});

test("main-ready accepts positive budgets adjusted and frozen after calibration", () => {
  const candidate = readyCandidate();
  candidate.budgets.active_minutes = { calibration: 18, first_submission: 17, followup: 9 };
  candidate.budgets.host_turn_limit = 24;
  candidate.budgets.hard_total_elapsed_limit_minutes = 27;
  assert.equal(validateAssetGenerationContract(candidate, { phase: "main" }).status, "main_ready");
});

test("followup contract is one functional task x three repetitions x four arms with preserved lineage", () => {
  const candidate = clone();
  assert.equal(candidate.matrix.followup_tasks, 1);
  assert.equal(candidate.matrix.followup_trials_per_task, 3);
  assert.equal(candidate.matrix.followup_tasks * candidate.matrix.followup_trials_per_task * candidate.matrix.arm_count, 12);
  assert.match(candidate.matrix.followup_lineage, /task-arm-trial-session-and-workspace/);
  validateAssetGenerationContract(candidate);
});

test("timeout cannot auto-reassign a live browser owner", () => {
  reject("unsafe timeout", (c) => {
    c.execution_control.browser_broker.lease_timeout.auto_reassign_live_owner = true;
  }, /must not be auto-reassigned/);
});

test("matrix remains calibration 4 + first 36 + followup 12 = 52", () => {
  const c = clone();
  assert.deepEqual(
    [c.matrix.calibration_cells, c.matrix.first_submission_cells, c.matrix.followup_cells, c.matrix.total_cells],
    [4, 36, 12, 52],
  );
  validateAssetGenerationContract(c);
});

if (!process.exitCode) console.log(`\n${passed} provider-zero contract tests passed`);
