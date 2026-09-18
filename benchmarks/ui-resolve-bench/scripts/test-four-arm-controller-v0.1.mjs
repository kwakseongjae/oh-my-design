#!/usr/bin/env node
import test from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { spawn } from "node:child_process";
import {
  chmodSync,
  existsSync,
  mkdtempSync,
  mkdirSync,
  readFileSync,
  realpathSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  ARM_IDS,
  CONTROLLER_SCHEMA,
  FourArmController,
  computeArmSha256,
  recoverControllerRoot,
  sha256File,
} from "./four-arm-controller-v0.1.mjs";

const controllerCli = fileURLToPath(new URL("./four-arm-controller-v0.1.mjs", import.meta.url));

const fixtureSource = `#!/usr/bin/env node
const fs = require("node:fs");
const crypto = require("node:crypto");
const path = require("node:path");
const { spawn } = require("node:child_process");
const args = new Map();
for (let i = 2; i < process.argv.length; i += 2) args.set(process.argv[i].slice(2), process.argv[i + 1]);
const inputPath = args.get("input");
const config = JSON.parse(fs.readFileSync(inputPath, "utf8"));
const expected = JSON.parse(process.env.OMD_EXPECTED_INIT);
const init = { ...expected, ...(config.initOverrides || {}) };
const emit = (value) => process.stdout.write(JSON.stringify(value) + "\\n");
process.on("SIGTERM", () => { if (!config.ignoreSigterm) process.exit(0); });
if (config.descendantPidPath) {
  const descendant = spawn(process.execPath, ["-e", "process.on('SIGTERM',()=>{});setInterval(()=>{},1000)"], { stdio: "ignore" });
  fs.writeFileSync(config.descendantPidPath, String(descendant.pid));
  descendant.unref();
}
if (config.stderr) process.stderr.write(config.stderr + "\\n");
if (config.emitNull) process.stdout.write("null\\n");
if (!config.omitInit) emit(init);
if (config.duplicateInit) emit(init);
if (config.mutateInput) fs.appendFileSync(inputPath, "\\n");
if (config.exitBeforeResult) process.exit(config.exitCode || 3);
if (config.hang) setInterval(() => {}, 1000);
else setTimeout(() => {
  const body = String(config.outputBody || (expected.armId + "-owned-output"));
  const outputPath = path.join(process.cwd(), "output.json");
  fs.writeFileSync(outputPath, body);
  emit({ type: "result", status: "completed", sessionId: expected.sessionId, output: { relativePath: "output.json", sha256: crypto.createHash("sha256").update(body).digest("hex") }, queueBlockedMs: config.queueBlockedMs ?? null });
  if (config.mutateOutputAfterResult) {
    setTimeout(() => fs.writeFileSync(outputPath, body + "-changed-after-result"), 25);
    setTimeout(() => process.exit(0), 60);
  }
}, config.delayMs || 5);
`;

function sha(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

function write(path, value) {
  writeFileSync(path, typeof value === "string" ? value : `${JSON.stringify(value, null, 2)}\n`);
}

function fixtureWorld(behaviors = {}, options = {}) {
  const root = realpathSync(mkdtempSync(join(tmpdir(), "omd-four-arm-controller-fixture-")));
  const fixture = join(root, "fake-runtime.cjs");
  write(fixture, fixtureSource);
  chmodSync(fixture, 0o755);
  const epochPath = join(root, "epoch.json");
  const taskPath = join(root, "task.json");
  write(epochPath, { epoch: "fixture-epoch" });
  write(taskPath, { task: options.taskId ?? "fixture-task" });
  const epoch = { id: "fixture-epoch", path: epochPath, sha256: sha256File(epochPath) };
  const task = { id: options.taskId ?? "fixture-task", path: taskPath, sha256: sha256File(taskPath) };
  const arms = ARM_IDS.map((armId, index) => {
    const workspace = join(root, `workspace-${armId}`);
    mkdirSync(workspace);
    const profilePath = join(root, `profile-${armId}.json`);
    const inputPath = join(root, `input-${armId}.json`);
    write(profilePath, { armId, isolated: true });
    write(inputPath, behaviors[armId] ?? {});
    const arm = {
      armId,
      runtimeKind: "local-fake",
      workspace,
      sessionId: `session-${options.groupId ?? "g1"}-${index + 1}`,
      profile: { path: profilePath, sha256: sha256File(profilePath) },
      executable: { path: fixture, sha256: sha256File(fixture) },
      input: { path: inputPath, sha256: sha256File(inputPath) },
      args: ["--input", inputPath],
      expectedSkills: armId === "no-skill" ? ["benchmark-media-tools"] : ["benchmark-media-tools", armId === "omd" ? "omd-autopilot" : armId],
    };
    arm.armSha256 = computeArmSha256(arm);
    return arm;
  });
  return {
    root,
    manifest: {
      schemaVersion: CONTROLLER_SCHEMA,
      mode: "provider-zero-fixture",
      groupId: options.groupId ?? "group-one",
      epoch,
      task,
      expectedRuntime: {
        model: "fake-model-v1",
        tools: ["read_file", "write"],
        mcpServers: [],
        subagents: false,
        ambientFallback: false,
      },
      arms,
    },
  };
}

function controllerFor(world, suffix = "controller") {
  return new FourArmController(join(world.root, suffix), { terminateGraceMs: 80, clockDomainId: `clock-${suffix}` });
}

async function waitForPath(path, timeoutMs = 1000) {
  const started = Date.now();
  while (!existsSync(path)) {
    if (Date.now() - started > timeoutMs) throw new Error(`timed out waiting for ${path}`);
    await new Promise((done) => setTimeout(done, 5));
  }
}

async function replaceControllerWithDeadPid(active) {
  const child = spawn(process.execPath, ["-e", ""], { stdio: "ignore" });
  const deadPid = child.pid;
  await new Promise((done) => child.once("close", done));
  active.controllerPid = deadPid;
  active.controllerProbe.pid = deadPid;
  return active;
}

function processExists(pid) {
  try { process.kill(pid, 0); return true; }
  catch (error) { if (error.code === "ESRCH") return false; throw error; }
}

function processGroupExists(pgid) {
  try { process.kill(-pgid, 0); return true; }
  catch (error) { if (error.code === "ESRCH") return false; throw error; }
}

test("four real local children run concurrently, preserve launch order, and close the barrier", async () => {
  const world = fixtureWorld({
    "no-skill": { delayMs: 80, queueBlockedMs: 123 },
    "uiux-pro-max": { delayMs: 25 },
    hallmark: { delayMs: 40 },
    omd: { delayMs: 10 },
  });
  const controller = controllerFor(world);
  const running = controller.runGroup(world.manifest);
  const other = fixtureWorld({}, { groupId: "group-two", taskId: "task-two" });
  await assert.rejects(() => controller.runGroup(other.manifest), /all-child terminal barrier/);
  const report = await running;
  assert.equal(report.status, "completed");
  assert.equal(report.allChildrenProcessTerminal, true);
  assert.deepEqual(report.launchOrder.map((item) => item.armId), ARM_IDS);
  assert.equal(new Set(report.launchOrder.map((item) => item.sessionId)).size, 4);
  assert.equal(report.attempts.length, 4);
  assert.ok(report.attempts.every((attempt) => attempt.status === "completed" && attempt.output.bytes > 0));
  assert.equal(report.timing.rawBrokerQueueResidenceMs["no-skill"], 123);
  assert.equal(report.timing.verifiedBlockedQueueUnionMs, 0);
  assert.equal(report.timing.queueExclusionAdmitted, false);
  assert.equal(report.timing.activeBudgetCreditMs, 0);
});

const initFaults = [
  ["wrong model", { initOverrides: { model: "wrong-model" } }, /init model mismatch/],
  ["wrong tool surface", { initOverrides: { tools: ["read_file", "network"] } }, /init tools mismatch/],
  ["wrong skill surface", { initOverrides: { skills: ["ambient-skill"] } }, /init skills mismatch/],
  ["wrong MCP surface", { initOverrides: { mcpServers: ["ambient-mcp"] } }, /init MCP surface mismatch/],
  ["wrong session", { initOverrides: { sessionId: "foreign-session" } }, /init sessionId mismatch/],
  ["ambient fallback flag", { initOverrides: { ambientFallback: true } }, /init ambientFallback mismatch/],
  ["ambient fallback warning", { stderr: "keeping full grok toolset after unmappable entries", delayMs: 50 }, /ambient tool fallback/],
  ["missing init", { omitInit: true }, /result arrived before accepted init|missing accepted init/],
  ["duplicate init", { duplicateInit: true }, /duplicate init event/],
  ["null stdout event", { emitNull: true, delayMs: 50 }, /stdout event must be an object/],
];

for (const [name, behavior, expected] of initFaults) {
  test(`rejects ${name}, terminates siblings, and preserves every attempt`, async () => {
    const world = fixtureWorld({
      "no-skill": behavior,
      "uiux-pro-max": { hang: true },
      hallmark: { hang: true },
      omd: { hang: true },
    });
    const controller = controllerFor(world);
    let error;
    try { await controller.runGroup(world.manifest); } catch (caught) { error = caught; }
    assert.ok(error);
    assert.match(error.message, expected);
    assert.equal(error.report.status, "failed");
    assert.equal(error.report.allChildrenProcessTerminal, true);
    assert.equal(error.report.attempts.length, 4);
    assert.ok(error.report.attempts.every((attempt) => attempt.exit && typeof attempt.stdoutSha256 === "string" && typeof attempt.stderrSha256 === "string"));
    const groupDir = join(controller.root, "groups", "0001-group-one");
    assert.ok(existsSync(join(groupDir, "GROUP.json")));
    assert.equal(readFileSync(join(groupDir, "attempts", "0001-no-skill", "stdout.log"), "utf8").length >= 0, true);
  });
}

test("preflight rejects duplicate sessions, duplicate workspaces, wrong hashes, and live mode", async (t) => {
  const cases = [
    ["duplicate session", (manifest) => { manifest.arms[1].sessionId = manifest.arms[0].sessionId; manifest.arms[1].armSha256 = computeArmSha256(manifest.arms[1]); }, /duplicate sessionId/],
    ["duplicate workspace", (manifest) => { manifest.arms[1].workspace = manifest.arms[0].workspace; manifest.arms[1].armSha256 = computeArmSha256(manifest.arms[1]); }, /workspace containment overlap/],
    ["nested workspace", (manifest) => { const nested = join(manifest.arms[0].workspace, "nested-arm"); mkdirSync(nested); manifest.arms[1].workspace = nested; manifest.arms[1].armSha256 = computeArmSha256(manifest.arms[1]); }, /workspace containment overlap/],
    ["wrong profile hash", (manifest) => { manifest.arms[0].profile.sha256 = "0".repeat(64); manifest.arms[0].armSha256 = computeArmSha256(manifest.arms[0]); }, /profile hash drift/],
    ["live mode", (manifest) => { manifest.mode = "live"; }, /live mode is blocked/],
  ];
  for (const [name, mutate, expected] of cases) {
    await t.test(name, async () => {
      const world = fixtureWorld();
      mutate(world.manifest);
      const controller = controllerFor(world);
      await assert.rejects(() => controller.runGroup(world.manifest), expected);
      const report = JSON.parse(readFileSync(join(controller.root, "groups", "0001-group-one", "GROUP.json"), "utf8"));
      assert.equal(report.status, "rejected-preflight");
      assert.deepEqual(report.attempts, []);
    });
  }
});

test("revalidates an accepted output after process close", async () => {
  const world = fixtureWorld({ "no-skill": { mutateOutputAfterResult: true } });
  const controller = controllerFor(world);
  let error;
  try { await controller.runGroup(world.manifest); } catch (caught) { error = caught; }
  assert.ok(error);
  assert.match(error.message, /post-close output: output hash mismatch|accepted output changed/);
  assert.equal(error.report.allChildrenProcessTerminal, true);
  const events = readFileSync(join(controller.root, "events.jsonl"), "utf8").trim().split("\n").map(JSON.parse);
  assert.ok(events.some((event) => event.type === "child-result-accepted" && event.armId === "no-skill"));
});

test("synchronous launch failure reaps started children before releasing the barrier", async () => {
  const world = fixtureWorld({ "no-skill": { hang: true } });
  world.manifest.arms[1].args.push("\0");
  world.manifest.arms[1].armSha256 = computeArmSha256(world.manifest.arms[1]);
  const controller = controllerFor(world);
  let error;
  try { await controller.runGroup(world.manifest); } catch (caught) { error = caught; }
  assert.ok(error);
  assert.match(error.message, /synchronous launch failure/);
  assert.equal(error.report.allStartedChildrenProcessTerminal, true);
  assert.equal(controller.processes.size, 0);
  assert.ok(error.report.attempts.some((attempt) => attempt.status === "launch-rejected"));
  const next = fixtureWorld({}, { groupId: "group-after-launch-failure", taskId: "task-after-launch-failure" });
  assert.equal((await controller.runGroup(next.manifest)).status, "completed");
});

test("post-run hash drift and abnormal exits fail after all four processes are terminal", async (t) => {
  for (const [name, behavior, expected] of [
    ["input hash drift", { mutateInput: true }, /post-run input hash drift/],
    ["abnormal exit", { exitBeforeResult: true, exitCode: 7 }, /abnormal exit|missing accepted terminal result/],
  ]) {
    await t.test(name, async () => {
      const world = fixtureWorld({ "no-skill": behavior, "uiux-pro-max": { delayMs: 30 }, hallmark: { delayMs: 30 }, omd: { delayMs: 30 } });
      const controller = controllerFor(world);
      let error;
      try { await controller.runGroup(world.manifest); } catch (caught) { error = caught; }
      assert.ok(error);
      assert.match(error.message, expected);
      assert.equal(error.report.allChildrenProcessTerminal, true);
      assert.equal(error.report.attempts.length, 4);
    });
  }
});

test("caller cancellation terminates and reaps all children with preserved logs", async () => {
  const world = fixtureWorld(Object.fromEntries(ARM_IDS.map((armId) => [armId, { hang: true }])));
  const controller = controllerFor(world);
  const abort = new AbortController();
  const running = controller.runGroup(world.manifest, { signal: abort.signal });
  setTimeout(() => abort.abort(), 30);
  let error;
  try { await running; } catch (caught) { error = caught; }
  assert.ok(error);
  assert.match(error.message, /cancelled by caller/);
  assert.equal(error.report.allChildrenProcessTerminal, true);
  assert.equal(error.report.attempts.length, 4);
  assert.ok(error.report.attempts.every((attempt) => attempt.status === "cancelled-by-controller" || attempt.status === "rejected"));
  assert.equal(controller.processes.size, 0);
  const next = fixtureWorld({}, { groupId: "group-after-cancel", taskId: "task-after-cancel" });
  const nextReport = await controller.runGroup(next.manifest);
  assert.equal(nextReport.status, "completed");
  assert.equal(nextReport.allChildrenProcessTerminal, true);
});

test("cancellation escalates against each process group so SIGTERM-ignoring descendants do not survive", { skip: process.platform === "win32" }, async () => {
  const world = fixtureWorld();
  const descendantPidPath = join(world.root, "descendant.pid");
  for (const arm of world.manifest.arms) {
    write(arm.input.path, { hang: true, descendantPidPath: arm.armId === "no-skill" ? descendantPidPath : undefined });
    arm.input.sha256 = sha256File(arm.input.path);
    arm.armSha256 = computeArmSha256(arm);
  }
  const controller = controllerFor(world, "controller-descendant");
  const abort = new AbortController();
  const running = controller.runGroup(world.manifest, { signal: abort.signal });
  await waitForPath(descendantPidPath);
  const descendantPid = Number(readFileSync(descendantPidPath, "utf8"));
  assert.equal(processExists(descendantPid), true);
  abort.abort();
  await assert.rejects(() => running, /cancelled by caller/);
  await new Promise((done) => setTimeout(done, 20));
  assert.equal(processExists(descendantPid), false);
});

test("event journal write failure fails closed inside stdout callbacks and still reaps all children", async () => {
  const world = fixtureWorld(Object.fromEntries(ARM_IDS.map((armId) => [armId, { delayMs: 60 }])));
  let injected = false;
  const controller = new FourArmController(join(world.root, "controller-journal-failure"), {
    terminateGraceMs: 40,
    clockDomainId: "clock-journal-failure",
    appendEvent(path, line, event) {
      if (!injected && event.type === "child-init-accepted") {
        injected = true;
        throw new Error("injected append failure");
      }
      writeFileSync(path, line, { flag: "a" });
    },
  });
  let error;
  try { await controller.runGroup(world.manifest); } catch (caught) { error = caught; }
  assert.ok(error);
  assert.equal(error.report.status, "failed");
  assert.equal(error.report.allChildrenProcessTerminal, true);
  assert.equal(controller.processes.size, 0);
  assert.match(error.report.journalFailures.join("\n"), /event journal failure.*injected append failure/);
  assert.ok(error.report.attempts.every((attempt) => attempt.exit));
});

test("stdout log write failure is contained in the callback and reaps every wrapper", async () => {
  const world = fixtureWorld(Object.fromEntries(ARM_IDS.map((armId) => [armId, { delayMs: 80 }])));
  let injected = false;
  const controller = new FourArmController(join(world.root, "controller-log-failure"), {
    terminateGraceMs: 40,
    appendLog(path, chunk, context) {
      if (!injected && context.stream === "stdout") {
        injected = true;
        throw new Error("injected stdout disk failure");
      }
      writeFileSync(path, chunk, { flag: "a" });
    },
  });
  let error;
  try { await controller.runGroup(world.manifest); } catch (caught) { error = caught; }
  assert.ok(error);
  assert.match(error.message, /stdout log write failure: injected stdout disk failure/);
  assert.equal(error.report.allChildrenProcessTerminal, true);
  assert.equal(controller.processes.size, 0);
});

test("group-terminal journal failure is persisted as failure before the authoritative report", async () => {
  const world = fixtureWorld();
  const controller = new FourArmController(join(world.root, "controller-terminal-journal-failure"), {
    terminateGraceMs: 40,
    appendEvent(path, line, event) {
      if (event.type === "group-terminal") throw new Error("injected terminal journal failure");
      writeFileSync(path, line, { flag: "a" });
    },
  });
  let error;
  try { await controller.runGroup(world.manifest); } catch (caught) { error = caught; }
  assert.ok(error);
  assert.equal(error.report.status, "failed");
  assert.match(error.report.journalFailures.join("\n"), /group-terminal.*injected terminal journal failure/);
  const groupRoot = join(controller.root, "groups", "0001-group-one");
  const diskReport = JSON.parse(readFileSync(join(groupRoot, "GROUP.json"), "utf8"));
  const active = JSON.parse(readFileSync(join(controller.root, "ACTIVE-GROUP.json"), "utf8"));
  assert.equal(diskReport.status, "failed");
  assert.equal(active.status, "failed");
  assert.equal(controller.processes.size, 0);
});

test("recovery refuses an advancing controller heartbeat, then caller cancellation remains clean", async () => {
  const world = fixtureWorld(Object.fromEntries(ARM_IDS.map((armId) => [armId, { hang: true }])));
  const controller = controllerFor(world, "controller-live-recovery");
  const abort = new AbortController();
  const running = controller.runGroup(world.manifest, { signal: abort.signal });
  await waitForPath(join(controller.root, "ACTIVE-GROUP.json"));
  await assert.rejects(() => recoverControllerRoot(controller.root), /refusing recovery of a live job/);
  abort.abort();
  await assert.rejects(() => running, /cancelled by caller/);
  assert.equal(controller.processes.size, 0);
});

test("recovery refuses a stale heartbeat when the live controller identity matches or is unavailable", async () => {
  const world = fixtureWorld();
  const controller = controllerFor(world, "controller-stale-live-recovery");
  await controller.runGroup(world.manifest);
  await new Promise((done) => setTimeout(done, 80));
  const activePath = join(controller.root, "ACTIVE-GROUP.json");
  const active = JSON.parse(readFileSync(activePath, "utf8"));
  active.status = "running";
  assert.equal(Object.hasOwn(active, "controllerIdentity"), true);
  const recordedIdentity = {
    pid: process.pid,
    pgid: 424242,
    startedAt: "fixture-controller-start",
    command: "fixture-controller",
  };
  active.controllerPid = process.pid;
  active.controllerProbe.pid = process.pid;
  active.controllerIdentity = recordedIdentity;
  write(activePath, active);
  let signaled = false;
  await assert.rejects(
    () => recoverControllerRoot(controller.root, {
      processInspector: () => ({ ...recordedIdentity }),
      processGroupSignaler: () => { signaled = true; },
    }),
    /recorded controller process is still alive/,
  );
  assert.equal(signaled, false);
  active.controllerIdentity = null;
  write(activePath, active);
  await assert.rejects(
    () => recoverControllerRoot(controller.root, {
      processInspector: () => null,
      processGroupSignaler: () => { signaled = true; },
    }),
    /current identity is unavailable/,
  );
  assert.equal(signaled, false);
});

test("an absent leader with a surviving unverified process group is quarantined", async () => {
  const world = fixtureWorld();
  const controller = controllerFor(world, "controller-orphan-group");
  await controller.runGroup(world.manifest);
  await new Promise((done) => setTimeout(done, 80));
  const activePath = join(controller.root, "ACTIVE-GROUP.json");
  const active = JSON.parse(readFileSync(activePath, "utf8"));
  active.status = "running";
  await replaceControllerWithDeadPid(active);
  write(activePath, active);
  const orphanPgid = active.attempts[0].processGroupId;
  const report = await recoverControllerRoot(controller.root, {
    processInspector: () => null,
    processGroupInspector: (pgid) => pgid === orphanPgid,
  });
  assert.equal(report.status, "quarantined");
  assert.match(report.ambiguous[0].disposition, /leader-absent-process-group-survives/);
  assert.deepEqual(report.terminatedProcessGroups, []);
});

test("recovery rejects corrupted process-group and heartbeat ownership before signaling", async (t) => {
  for (const [name, mutate, expected] of [
    ["process group mismatch", (active) => { active.attempts[0].processGroupId = active.attempts[0].pid + 1; }, /process group must equal/],
    ["heartbeat escape", (active) => { active.attempts[0].recoveryProbe.heartbeatPath = join(active.groupRoot, "foreign-heartbeat.json"); }, /heartbeat path is outside/],
  ]) {
    await t.test(name, async () => {
      const world = fixtureWorld();
      const controller = controllerFor(world, `controller-corrupt-${name.replaceAll(" ", "-")}`);
      await controller.runGroup(world.manifest);
      await new Promise((done) => setTimeout(done, 80));
      const activePath = join(controller.root, "ACTIVE-GROUP.json");
      const active = JSON.parse(readFileSync(activePath, "utf8"));
      active.status = "running";
      await replaceControllerWithDeadPid(active);
      mutate(active);
      write(activePath, active);
      let signaled = false;
      await assert.rejects(() => recoverControllerRoot(controller.root, { processGroupSignaler: () => { signaled = true; } }), expected);
      assert.equal(signaled, false);
    });
  }
});

test("a quarantined prior group blocks a new group in the same controller root", async () => {
  const world = fixtureWorld();
  const controller = controllerFor(world, "controller-prior-quarantine");
  await controller.runGroup(world.manifest);
  const activePath = join(controller.root, "ACTIVE-GROUP.json");
  const active = JSON.parse(readFileSync(activePath, "utf8"));
  active.status = "quarantined";
  write(activePath, active);
  const next = fixtureWorld({}, { groupId: "blocked-next", taskId: "blocked-next" });
  await assert.rejects(() => controller.runGroup(next.manifest), /requires recovery before another run/);
});

test("a replacement controller kills verified groups and quarantines any leaderless surviving group after controller SIGKILL", { skip: process.platform === "win32" }, async () => {
  const world = fixtureWorld(Object.fromEntries(ARM_IDS.map((armId) => [armId, { hang: true }])));
  const manifestPath = join(world.root, "manifest.json");
  const controllerRoot = join(world.root, "crash-controller");
  write(manifestPath, world.manifest);
  const runner = spawn(process.execPath, [controllerCli, "run", "--root", controllerRoot, "--manifest", manifestPath], { stdio: "ignore" });
  const activePath = join(controllerRoot, "ACTIVE-GROUP.json");
  const started = Date.now();
  let active;
  while (Date.now() - started < 3000) {
    if (existsSync(activePath)) {
      try {
        active = JSON.parse(readFileSync(activePath, "utf8"));
        if (active.attempts?.length === 4 && active.attempts.every((attempt) => {
          try {
            return JSON.parse(readFileSync(attempt.recoveryProbe.heartbeatPath, "utf8")).sequence >= 2;
          } catch { return false; }
        })) break;
      } catch {}
    }
    await new Promise((done) => setTimeout(done, 10));
  }
  assert.equal(active?.attempts?.length, 4);
  assert.ok(active.attempts.every((attempt) => processExists(attempt.pid)));
  runner.kill("SIGKILL");
  await new Promise((done) => runner.once("close", done));
  const report = await recoverControllerRoot(controllerRoot, {
    processInspector(pid) {
      return processExists(pid) ? { pid, pgid: pid, startedAt: "fixture", command: "fixture-wrapper" } : null;
    },
  });
  assert.equal(report.inspected.length, 4);
  assert.ok(new Set(["recovered", "quarantined"]).has(report.status));
  if (report.status === "quarantined") {
    assert.ok(report.ambiguous.length + report.unresolved.length > 0);
  }
  for (const attempt of active.attempts) {
    if (processGroupExists(attempt.processGroupId)) {
      try { process.kill(-attempt.processGroupId, "SIGKILL"); } catch (error) { if (error.code !== "ESRCH") throw error; }
    }
  }
  await new Promise((done) => setTimeout(done, 20));
  assert.ok(active.attempts.every((attempt) => !processGroupExists(attempt.processGroupId)));
  assert.ok(existsSync(join(controllerRoot, "recoveries", "0001-group-one.json")));
});

test("hash helper binds exact bytes", () => {
  assert.equal(sha("fixture"), createHash("sha256").update("fixture").digest("hex"));
});
