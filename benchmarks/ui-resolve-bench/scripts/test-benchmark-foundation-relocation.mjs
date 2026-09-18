import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { validateBenchmarkFoundation } from "./validate-benchmark-foundation.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const BENCH_ROOT = resolve(HERE, "..");
const REPO_ROOT = resolve(BENCH_ROOT, "../..");
const V1_RELATIVE = "config/grok46-four-arm-epoch-2026-09-07-v0.1.json";
const V2_RELATIVE = "config/grok46-four-arm-epoch-2026-09-07-v0.2.json";
const V1_SHA256 = "cde6c005a2896c8a3be0c5032dbe85f5ab975fda837b09b5aed71a57ff1c7963";
const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");
const readJson = (path) => JSON.parse(readFileSync(path, "utf8"));

test("preserves the historical v0.1 epoch and controller snapshot bindings", () => {
  const v1Path = join(BENCH_ROOT, V1_RELATIVE);
  assert.equal(sha256(readFileSync(v1Path)), V1_SHA256);
  for (const variant of ["controller-v1-original", "controller-v2-accepted"]) {
    const snapshot = readJson(join(REPO_ROOT, `.omd/execution/2026-09-07/benchmark/qa/${variant}/INPUT-SNAPSHOT.json`));
    const epoch = snapshot.inputs.find((entry) => entry.path === "inputs/grok46-four-arm-epoch-2026-09-07-v0.1.json");
    assert.equal(epoch.sha256, V1_SHA256);
  }
});

test("keeps the strict public task inventory flat and complete", () => {
  const tasksRoot = join(BENCH_ROOT, "tasks");
  const ids = readdirSync(tasksRoot).sort();
  assert.equal(ids.length, 123);
  for (const id of ids) assert.equal(existsSync(join(tasksRoot, id, "task.json")), true, `task is missing task.json: ${id}`);
  assert.equal(existsSync(join(tasksRoot, "four-arm-2026-09-07")), false);
});

test("relocates every locked epoch task without changing task or follow-up bytes", () => {
  const v1 = readJson(join(BENCH_ROOT, V1_RELATIVE));
  const v2 = readJson(join(BENCH_ROOT, V2_RELATIVE));
  assert.equal(v2.schema_version, "0.2");
  assert.equal(v2.supersedes_epoch.path, V1_RELATIVE);
  assert.equal(v2.supersedes_epoch.sha256, V1_SHA256);
  assert.deepEqual(v2.task_relocation, {
    from: "tasks/four-arm-2026-09-07",
    to: "epoch-tasks/four-arm-2026-09-07",
    task_bytes_changed: false,
  });

  const oldEntries = [...v1.tasks.calibration, ...v1.tasks.main];
  const newEntries = [...v2.tasks.calibration, ...v2.tasks.main];
  assert.equal(newEntries.length, oldEntries.length);
  for (const oldEntry of oldEntries) {
    const next = newEntries.find((entry) => entry.task_id === oldEntry.task_id);
    assert.ok(next);
    assert.equal(next.sha256, oldEntry.sha256);
    assert.match(next.path, /^epoch-tasks\/four-arm-2026-09-07\//);
    assert.equal(sha256(readFileSync(join(BENCH_ROOT, next.path))), oldEntry.sha256);
    if (oldEntry.followup_path) {
      assert.equal(next.followup_sha256, oldEntry.followup_sha256);
      assert.equal(sha256(readFileSync(join(BENCH_ROOT, next.followup_path))), oldEntry.followup_sha256);
    }
  }
});

test("the superseding epoch remains provider-zero and launch-blocked", () => {
  assert.deepEqual(validateBenchmarkFoundation(), {
    schema_version: "0.1",
    verdict: "PASS_PROVIDER_ZERO_PREFLIGHT_ONLY",
    task_count: 4,
    source_arm_count: 4,
    planned_cells: 52,
    live_admission: "BLOCKED",
  });
});
