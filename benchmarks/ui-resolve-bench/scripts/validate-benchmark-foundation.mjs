#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { benchRoot, readJson, sha256, treeManifest } from "./_lib.mjs";

const configPath = join(benchRoot, "config", "grok46-four-arm-epoch-2026-09-07-v0.2.json");

function invariant(condition, message) {
  if (!condition) throw new Error(message);
}

function verifyFileLock(path, expected, label) {
  const actual = sha256(readFileSync(path));
  invariant(actual === expected, `${label} SHA-256 drift: expected ${expected}, got ${actual}`);
}

export function validateBenchmarkFoundation() {
  const config = readJson(configPath);
  invariant(config.schema_version === "0.2", "current epoch must use the relocation contract");
  invariant(config.epoch_id === "grok46-four-arm-2026-09-07-v0.2", "current epoch identity mismatch");
  invariant(config.status === "b0-b1-provider-zero-preflight-not-live-ready", "epoch must remain preflight-only");
  invariant(config.runtime.reported_model === null && config.runtime.activation_verified === false, "unverified runtime must not be promoted");
  verifyFileLock(join(benchRoot, config.supersedes_epoch.path), config.supersedes_epoch.sha256, "historical v0.1 epoch");
  invariant(config.task_relocation.from === "tasks/four-arm-2026-09-07", "historical task location mismatch");
  invariant(config.task_relocation.to === "epoch-tasks/four-arm-2026-09-07", "current task location mismatch");
  invariant(config.task_relocation.task_bytes_changed === false, "relocation must not claim changed task bytes");
  verifyFileLock(join(benchRoot, config.predecessor_contract.path), config.predecessor_contract.sha256, "predecessor contract");
  verifyFileLock(join(benchRoot, config.source_lock.path), config.source_lock.sha256, "source lock");

  invariant(config.tasks.calibration.length === 1, "exactly one calibration task is required");
  invariant(config.tasks.main.length === 3, "exactly three main tasks are required");
  invariant(new Set(config.tasks.main.map((task) => task.category)).size === 3, "main task categories must be distinct");
  invariant(config.tasks.main.some((task) => task.category === "fictional-creative-product-landing"), "main creative landing is missing");
  invariant(config.tasks.main.some((task) => task.category === "korean-brand-factual-product-surface"), "main Korean factual surface is missing");
  invariant(config.tasks.main.some((task) => task.category === "fictional-functional-booking"), "main functional booking is missing");

  const allTasks = [...config.tasks.calibration, ...config.tasks.main];
  for (const entry of allTasks) {
    const path = join(benchRoot, entry.path);
    verifyFileLock(path, entry.sha256, entry.task_id);
    const task = readJson(path);
    invariant(task.task_id === entry.task_id, `${entry.task_id} task identity mismatch`);
    invariant(task.shared_creative_pack === null, `${entry.task_id} must not receive a shared creative pack`);
    invariant(Array.isArray(task.source_provenance) && task.source_provenance.length > 0, `${entry.task_id} source provenance is missing`);
    invariant(Array.isArray(task.deterministic_acceptance) && task.deterministic_acceptance.length >= 5, `${entry.task_id} deterministic acceptance is incomplete`);
  }

  const booking = config.tasks.main.find((task) => task.task_id === "main-stillwater-booking");
  invariant(booking?.followup_path && booking?.followup_sha256, "booking follow-up lock is missing");
  verifyFileLock(join(benchRoot, booking.followup_path), booking.followup_sha256, "booking follow-up");
  const bookingTask = readJson(join(benchRoot, booking.path));
  invariant(bookingTask.followup.same_session_required && bookingTask.followup.same_workspace_required && bookingTask.followup.same_arm_trial_required, "follow-up continuity is not fully locked");

  const karrot = readJson(join(benchRoot, config.tasks.main.find((task) => task.task_id === "main-karrot-neighborhood").path));
  const karrotSource = karrot.source_provenance[0];
  const repositoryRoot = resolve(benchRoot, "../..");
  verifyFileLock(join(repositoryRoot, karrotSource.path), karrotSource.sha256, "Karrot canonical reference");

  const sourceLock = readJson(join(benchRoot, config.source_lock.path));
  invariant(sourceLock.status === "provider-zero-inventory-only", "source inventory must not claim runtime activation");
  invariant(sourceLock.tool_rights.inventory_state === "proposed-not-capability-verified", "tool inventory must remain proposed");
  invariant(sourceLock.isolation_admission.live_admission === "blocked", "unproven isolation must block live admission");
  invariant(sourceLock.arms.length === 4, "source inventory must contain four arms");
  for (const arm of sourceLock.arms) {
    if (arm.arm_id === "no-skill") {
      invariant(arm.bundle_path === null && arm.activation_state === "not-applicable", "no-skill control must be empty");
      continue;
    }
    const manifest = treeManifest(join(benchRoot, arm.bundle_path));
    invariant(manifest.sha256 === arm.bundle_tree_sha256, `${arm.arm_id} copied bundle tree drift`);
    invariant(arm.bundle_state === "copied-frozen-fixture-present", `${arm.arm_id} bundle state is ambiguous`);
    invariant(arm.activation_state === "not-verified-in-current-grok-4.6-runtime", `${arm.arm_id} activation was promoted without proof`);
  }

  const expectedCells = config.matrix.arms.length * config.matrix.calibration_trials_per_arm
    + config.matrix.arms.length * config.tasks.main.length * config.matrix.main_trials_per_task_arm
    + config.matrix.arms.length * config.matrix.followup_trials_per_arm;
  invariant(expectedCells === config.matrix.planned_cells && expectedCells === 52, "matrix cell count must be 52");
  const bridgeSchema = readJson(join(benchRoot, config.shared_browser.bridge_schema));
  invariant(bridgeSchema.$defs?.request && bridgeSchema.$defs?.completion, "browser bridge request/completion schema is incomplete");
  invariant(config.matrix.launch_status === "blocked" && config.shared_browser.live_service_verified === false, "provider-zero foundation cannot open launch admission");
  return {
    schema_version: "0.1",
    verdict: "PASS_PROVIDER_ZERO_PREFLIGHT_ONLY",
    task_count: allTasks.length,
    source_arm_count: sourceLock.arms.length,
    planned_cells: expectedCells,
    live_admission: "BLOCKED",
  };
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) {
  try {
    process.stdout.write(`${JSON.stringify(validateBenchmarkFoundation(), null, 2)}\n`);
  } catch (error) {
    process.stderr.write(`${error.message}\n`);
    process.exitCode = 1;
  }
}
