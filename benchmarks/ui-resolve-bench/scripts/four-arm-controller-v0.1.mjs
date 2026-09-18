#!/usr/bin/env node
import { createHash, randomUUID } from "node:crypto";
import { spawn, spawnSync } from "node:child_process";
import {
  appendFileSync,
  existsSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  realpathSync,
  renameSync,
  writeFileSync,
} from "node:fs";
import { dirname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

export const CONTROLLER_SCHEMA = "four-arm-controller-v0.1";
export const ARM_IDS = Object.freeze(["no-skill", "uiux-pro-max", "hallmark", "omd"]);
const SHA256 = /^[a-f0-9]{64}$/;
const TOKEN = /^[a-zA-Z0-9][a-zA-Z0-9._-]{0,127}$/;
const WORKER_WRAPPER = fileURLToPath(new URL("./controller-worker-wrapper.mjs", import.meta.url));

export function sha256Bytes(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

export function sha256File(path) {
  return sha256Bytes(readFileSync(path));
}

function canonicalObject(value) {
  if (Array.isArray(value)) return value.map(canonicalObject);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, canonicalObject(value[key])]));
  }
  return value;
}

export function computeArmSha256(arm) {
  const { armSha256: _ignored, ...material } = arm;
  return sha256Bytes(Buffer.from(JSON.stringify(canonicalObject(material))));
}

function invariant(condition, message) {
  if (!condition) throw new Error(message);
}

function token(value, label) {
  invariant(typeof value === "string" && TOKEN.test(value), `${label} must be a portable token`);
  return value;
}

function plainObject(value, label) {
  invariant(value && typeof value === "object" && !Array.isArray(value), `${label} must be an object`);
  return value;
}

function stringSet(value, label) {
  invariant(Array.isArray(value) && value.every((item) => typeof item === "string" && item), `${label} must be a string array`);
  invariant(new Set(value).size === value.length, `${label} contains duplicates`);
  return [...value].sort();
}

function sameSet(actual, expected, label) {
  invariant(JSON.stringify(stringSet(actual, label)) === JSON.stringify(stringSet(expected, `expected ${label}`)), `${label} mismatch`);
}

function explicitFile(binding, label) {
  plainObject(binding, label);
  invariant(typeof binding.path === "string" && isAbsolute(binding.path), `${label}.path must be absolute`);
  invariant(typeof binding.sha256 === "string" && SHA256.test(binding.sha256), `${label}.sha256 must be lowercase SHA-256`);
  const info = lstatSync(binding.path);
  invariant(info.isFile() && !info.isSymbolicLink(), `${label} must be a regular non-symlink file`);
  invariant(realpathSync(binding.path) === resolve(binding.path), `${label} path must be canonical`);
  invariant(sha256File(binding.path) === binding.sha256, `${label} hash drift`);
  return { path: binding.path, sha256: binding.sha256 };
}

function explicitWorkspace(path, label) {
  invariant(typeof path === "string" && isAbsolute(path), `${label} must be absolute`);
  const info = lstatSync(path);
  invariant(info.isDirectory() && !info.isSymbolicLink(), `${label} must be a regular directory`);
  invariant(realpathSync(path) === resolve(path), `${label} must be canonical`);
  return path;
}

function isInside(root, candidate) {
  const rel = relative(root, candidate);
  return rel === "" || (rel !== ".." && !rel.startsWith(`..${sep}`) && !isAbsolute(rel));
}

function writeExclusive(path, value) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, typeof value === "string" || Buffer.isBuffer(value) ? value : `${JSON.stringify(value, null, 2)}\n`, { flag: "wx" });
}

function writeAtomic(path, value) {
  mkdirSync(dirname(path), { recursive: true });
  const temporary = `${path}.${process.pid}.${randomUUID()}.tmp`;
  writeFileSync(temporary, `${JSON.stringify(value, null, 2)}\n`, { flag: "wx" });
  renameSync(temporary, path);
}

function processIdentity(pid) {
  if (!Number.isSafeInteger(pid) || pid <= 0 || process.platform === "win32") return null;
  const ps = existsSync("/bin/ps") ? "/bin/ps" : "ps";
  const read = (field) => {
    const result = spawnSync(ps, ["-p", String(pid), "-o", `${field}=`], { encoding: "utf8" });
    return result.status === 0 ? result.stdout.trim() : "";
  };
  const pgid = Number(read("pgid"));
  const startedAt = read("lstart");
  const command = read("command");
  if (!Number.isSafeInteger(pgid) || pgid <= 0 || !startedAt || !command) return null;
  return { pid, pgid, startedAt, command };
}

function sameProcessIdentity(expected, current) {
  return Boolean(
    expected
    && current
    && current.pid === expected.pid
    && current.pgid === expected.pgid
    && current.startedAt === expected.startedAt
    && current.command === expected.command
  );
}

function validProcessIdentity(identity, pid) {
  return Boolean(
    identity
    && identity.pid === pid
    && Number.isSafeInteger(identity.pgid)
    && identity.pgid > 0
    && typeof identity.startedAt === "string"
    && identity.startedAt
    && typeof identity.command === "string"
    && identity.command
  );
}

function processGroupExists(pgid) {
  if (!Number.isSafeInteger(pgid) || pgid <= 0 || process.platform === "win32") return false;
  try { process.kill(-pgid, 0); return true; }
  catch (error) { if (error.code === "ESRCH") return false; throw error; }
}

function processExists(pid) {
  try { process.kill(pid, 0); return true; }
  catch (error) { if (error.code === "ESRCH") return false; throw error; }
}

function signalProcessGroup(pgid, signal) {
  try { process.kill(-pgid, signal); return true; }
  catch (error) { if (error.code === "ESRCH") return false; throw error; }
}

async function probeRecoveryHeartbeat(probe, intervalMs = 60) {
  if (!probe || typeof probe.heartbeatPath !== "string" || typeof probe.nonce !== "string") return null;
  const read = () => {
    try {
      const value = JSON.parse(readFileSync(probe.heartbeatPath, "utf8"));
      if (value?.nonce !== probe.nonce || value?.pid !== probe.pid || !Number.isSafeInteger(value.sequence)) return null;
      return value;
    } catch { return null; }
  };
  const first = read();
  if (!first) return null;
  await new Promise((done) => setTimeout(done, intervalMs));
  const second = read();
  return second && second.sequence > first.sequence ? second : null;
}

async function waitUntil(predicate, timeoutMs, pollMs = 10) {
  const started = Date.now();
  while (predicate()) {
    if (Date.now() - started >= timeoutMs) return false;
    await new Promise((done) => setTimeout(done, pollMs));
  }
  return true;
}

export async function recoverControllerRoot(root, options = {}) {
  invariant(typeof root === "string" && isAbsolute(root), "controller root must be an absolute path");
  const canonicalRoot = realpathSync(root);
  invariant(canonicalRoot === resolve(root), "controller root must be canonical");
  const activePath = join(canonicalRoot, "ACTIVE-GROUP.json");
  const active = JSON.parse(readFileSync(activePath, "utf8"));
  invariant(active?.schemaVersion === CONTROLLER_SCHEMA, "active group schema mismatch");
  invariant(active.mode === "provider-zero-fixture", "recovery is limited to provider-zero fixtures");
  invariant(new Set(["running", "recovery-required", "quarantined"]).has(active.status), `active group is not recoverable from status ${active.status ?? "missing"}`);
  token(active.groupId, "active groupId");
  invariant(Array.isArray(active.attempts), "active attempts must be an array");
  const groupRoot = explicitWorkspace(active.groupRoot, "active groupRoot");
  invariant(isInside(canonicalRoot, groupRoot) && groupRoot !== canonicalRoot, "active groupRoot escapes controller root");
  const controllerProbe = active.controllerProbe;
  invariant(controllerProbe?.heartbeatPath === join(canonicalRoot, "controller-heartbeat.json"), "controller heartbeat path mismatch");
  invariant(controllerProbe?.pid === active.controllerPid, "controller heartbeat PID mismatch");
  invariant(typeof controllerProbe?.nonce === "string" && controllerProbe.nonce.length >= 16, "controller heartbeat nonce is invalid");
  const liveController = await probeRecoveryHeartbeat(controllerProbe, options.probeIntervalMs ?? 60);
  invariant(!liveController, "controller heartbeat is still advancing; refusing recovery of a live job");
  const inspectProcess = options.processInspector ?? processIdentity;
  const currentController = inspectProcess(active.controllerPid);
  if (currentController) {
    invariant(validProcessIdentity(active.controllerIdentity, active.controllerPid), "controller PID is still alive but its recorded identity is unavailable; refusing recovery");
    invariant(validProcessIdentity(currentController, active.controllerPid), "controller PID is still alive but its current identity is unavailable; refusing recovery");
    invariant(!sameProcessIdentity(active.controllerIdentity, currentController), "recorded controller process is still alive; refusing recovery");
  } else {
    invariant(!processExists(active.controllerPid), "controller PID is still alive but its current identity is unavailable; refusing recovery");
  }
  const graceMs = options.terminateGraceMs ?? 250;
  const groupIsAlive = options.processGroupInspector ?? processGroupExists;
  const signalGroup = options.processGroupSignaler ?? signalProcessGroup;
  const inspected = [];
  const verified = [];
  const ambiguous = [];
  const seenArms = new Set();
  for (const attempt of active.attempts) {
    const armId = token(attempt.armId, "recovery armId");
    invariant(ARM_IDS.includes(armId) && !seenArms.has(armId), "recovery arm set contains an unexpected or duplicate arm");
    seenArms.add(armId);
    invariant(Number.isSafeInteger(attempt.order) && attempt.order >= 1 && attempt.order <= 4, "recovery order must be between 1 and 4");
    invariant(Number.isSafeInteger(attempt.pid) && attempt.pid > 0, "recovery pid must be a positive integer");
    invariant(attempt.processGroupId === attempt.pid, "recovery process group must equal its wrapper leader PID");
    const expectedAttemptRoot = join(groupRoot, "attempts", `${String(attempt.order).padStart(4, "0")}-${armId}`);
    invariant(attempt.recoveryProbe?.heartbeatPath === join(expectedAttemptRoot, "recovery-heartbeat.json"), "recovery heartbeat path is outside its owned attempt");
    invariant(attempt.recoveryProbe?.pid === attempt.pid, "recovery heartbeat PID mismatch");
    invariant(typeof attempt.recoveryProbe?.nonce === "string" && attempt.recoveryProbe.nonce.length >= 16, "recovery heartbeat nonce is invalid");
    if (existsSync(attempt.recoveryProbe.heartbeatPath)) {
      const heartbeatInfo = lstatSync(attempt.recoveryProbe.heartbeatPath);
      invariant(heartbeatInfo.isFile() && !heartbeatInfo.isSymbolicLink(), "recovery heartbeat must be a regular non-symlink file");
      invariant(realpathSync(attempt.recoveryProbe.heartbeatPath) === resolve(attempt.recoveryProbe.heartbeatPath), "recovery heartbeat path must be canonical");
    }
    const probe = await probeRecoveryHeartbeat(attempt.recoveryProbe, options.probeIntervalMs ?? 60);
    if (probe) {
      const current = inspectProcess(attempt.pid);
      if (current && current.pid === attempt.pid && current.pgid === attempt.processGroupId && current.pgid === current.pid) {
        const item = { armId: attempt.armId, pid: attempt.pid, pgid: current.pgid, disposition: "verified-by-heartbeat-and-process-identity" };
        inspected.push(item);
        verified.push(item);
        continue;
      }
      const item = { armId: attempt.armId, pid: attempt.pid, disposition: "heartbeat-live-process-identity-unavailable", current };
      inspected.push(item);
      ambiguous.push(item);
      continue;
    }
    const current = inspectProcess(attempt.pid);
    if (!current) {
      if (!processExists(attempt.pid)) {
        if (groupIsAlive(attempt.processGroupId)) {
          const item = { armId: attempt.armId, pid: attempt.pid, pgid: attempt.processGroupId, disposition: "leader-absent-process-group-survives" };
          inspected.push(item);
          ambiguous.push(item);
        } else {
          inspected.push({ armId: attempt.armId, pid: attempt.pid, disposition: "leader-and-process-group-not-running" });
        }
      } else {
        const item = { armId: attempt.armId, pid: attempt.pid, disposition: "identity-unavailable", expected: attempt.processIdentity };
        inspected.push(item);
        ambiguous.push(item);
      }
      continue;
    }
    const expected = attempt.processIdentity;
    const matches = expected && current.pid === expected.pid && current.pgid === expected.pgid && current.startedAt === expected.startedAt && current.command === expected.command && current.pgid === current.pid;
    if (!matches) {
      const item = { armId: attempt.armId, pid: attempt.pid, disposition: "identity-mismatch", expected, current };
      inspected.push(item);
      ambiguous.push(item);
      continue;
    }
    const item = { armId: attempt.armId, pid: attempt.pid, pgid: current.pgid, disposition: "verified-active" };
    inspected.push(item);
    verified.push(item);
  }

  for (const item of verified) signalGroup(item.pgid, "SIGTERM");
  if (verified.length) await new Promise((done) => setTimeout(done, graceMs));
  for (const item of verified) if (groupIsAlive(item.pgid)) signalGroup(item.pgid, "SIGKILL");
  const unresolved = [];
  for (const item of verified) {
    const gone = await waitUntil(() => groupIsAlive(item.pgid), options.killWaitMs ?? 1000);
    if (!gone) unresolved.push(item);
  }
  const status = ambiguous.length || unresolved.length ? "quarantined" : "recovered";
  const report = {
    schemaVersion: CONTROLLER_SCHEMA,
    mode: "provider-zero-fixture",
    groupId: active.groupId,
    status,
    providerCalls: 0,
    inspected,
    terminatedProcessGroups: verified.filter((item) => !unresolved.includes(item)).map((item) => item.pgid),
    ambiguous,
    unresolved,
    recoveredAt: new Date().toISOString(),
  };
  const recoveriesRoot = join(canonicalRoot, "recoveries");
  mkdirSync(recoveriesRoot, { recursive: true });
  const recoveryIndex = String(Object.keys(active.recoveries ?? {}).length + 1).padStart(4, "0");
  const recoveryPath = join(recoveriesRoot, `${recoveryIndex}-${active.groupId}.json`);
  writeExclusive(recoveryPath, report);
  active.status = status;
  active.recoveries = { ...(active.recoveries ?? {}), [recoveryIndex]: recoveryPath };
  active.lastRecovery = report;
  writeAtomic(activePath, active);
  return report;
}

function parseArgs(argv) {
  const result = new Map();
  for (let index = 0; index < argv.length; index += 2) {
    invariant(argv[index]?.startsWith("--") && argv[index + 1] != null, `invalid argument: ${argv[index] ?? "<missing>"}`);
    result.set(argv[index].slice(2), argv[index + 1]);
  }
  return result;
}

function childEnv(expectedInit, extra = {}) {
  const env = {};
  for (const name of ["PATH", "TMPDIR", "LANG", "LC_ALL"]) if (process.env[name]) env[name] = process.env[name];
  return {
    ...env,
    CI: "1",
    OMD_CONTROLLER_MODE: "provider-zero-fixture",
    OMD_EXPECTED_INIT: JSON.stringify(expectedInit),
    ...extra,
  };
}

function validateManifest(raw) {
  const manifest = structuredClone(plainObject(raw, "manifest"));
  invariant(manifest.schemaVersion === CONTROLLER_SCHEMA, "controller manifest schema mismatch");
  invariant(manifest.mode === "provider-zero-fixture", "live mode is blocked until separate runtime admission passes");
  token(manifest.groupId, "groupId");
  token(manifest.epoch?.id, "epoch.id");
  token(manifest.task?.id, "task.id");
  explicitFile(manifest.epoch, "epoch");
  explicitFile(manifest.task, "task");
  const expected = plainObject(manifest.expectedRuntime, "expectedRuntime");
  invariant(typeof expected.model === "string" && expected.model, "expectedRuntime.model is required");
  stringSet(expected.tools, "expectedRuntime.tools");
  stringSet(expected.mcpServers, "expectedRuntime.mcpServers");
  invariant(expected.subagents === false, "subagents must be disabled");
  invariant(expected.ambientFallback === false, "ambient fallback must be disabled");
  invariant(Array.isArray(manifest.arms) && manifest.arms.length === 4, "exactly four arms are required");
  const byId = new Map();
  const workspaces = new Set();
  const sessions = new Set();
  for (const arm of manifest.arms) {
    plainObject(arm, "arm");
    const armId = token(arm.armId, "arm.armId");
    invariant(ARM_IDS.includes(armId) && !byId.has(armId), `unexpected or duplicate arm: ${armId}`);
    invariant(arm.runtimeKind === "local-fake", `${armId} runtimeKind must be local-fake in provider-zero mode`);
    token(arm.sessionId, `${armId}.sessionId`);
    invariant(!sessions.has(arm.sessionId), `duplicate sessionId: ${arm.sessionId}`);
    sessions.add(arm.sessionId);
    const workspace = explicitWorkspace(arm.workspace, `${armId}.workspace`);
    for (const prior of workspaces) {
      invariant(!isInside(prior, workspace) && !isInside(workspace, prior), `workspace containment overlap: ${prior} and ${workspace}`);
    }
    workspaces.add(workspace);
    explicitFile(arm.profile, `${armId}.profile`);
    explicitFile(arm.executable, `${armId}.executable`);
    explicitFile(arm.input, `${armId}.input`);
    invariant(Array.isArray(arm.args) && arm.args.every((item) => typeof item === "string"), `${armId}.args must be a string array`);
    const skills = stringSet(arm.expectedSkills, `${armId}.expectedSkills`);
    if (armId !== "omd") invariant(!skills.some((name) => /^omd(?:-|$)/i.test(name)), `OMD skill leaked into ${armId}`);
    invariant(typeof arm.armSha256 === "string" && SHA256.test(arm.armSha256), `${armId}.armSha256 is invalid`);
    invariant(computeArmSha256(arm) === arm.armSha256, `${armId} arm hash drift`);
    byId.set(armId, arm);
  }
  invariant(ARM_IDS.every((armId) => byId.has(armId)), "canonical four-arm set is incomplete");
  manifest.arms = ARM_IDS.map((armId) => byId.get(armId));
  return manifest;
}

function expectedInit(manifest, arm) {
  return {
    type: "system",
    subtype: "init",
    epochId: manifest.epoch.id,
    epochSha256: manifest.epoch.sha256,
    taskId: manifest.task.id,
    taskSha256: manifest.task.sha256,
    armId: arm.armId,
    armSha256: arm.armSha256,
    sessionId: arm.sessionId,
    profileSha256: arm.profile.sha256,
    executableSha256: arm.executable.sha256,
    inputSha256: arm.input.sha256,
    model: manifest.expectedRuntime.model,
    tools: [...manifest.expectedRuntime.tools],
    skills: [...arm.expectedSkills],
    mcpServers: [...manifest.expectedRuntime.mcpServers],
    subagents: false,
    ambientFallback: false,
  };
}

function validateInit(event, expected) {
  plainObject(event, "init event");
  for (const field of ["type", "subtype", "epochId", "epochSha256", "taskId", "taskSha256", "armId", "armSha256", "sessionId", "profileSha256", "executableSha256", "inputSha256", "model", "subagents", "ambientFallback"]) {
    invariant(event[field] === expected[field], `init ${field} mismatch`);
  }
  sameSet(event.tools, expected.tools, "init tools");
  sameSet(event.skills, expected.skills, "init skills");
  sameSet(event.mcpServers, expected.mcpServers, "init MCP surface");
}

function validateOwnedOutput(event, arm) {
  invariant(event.status === "completed", `child terminal status is ${event.status ?? "missing"}`);
  invariant(event.sessionId === arm.sessionId, "result sessionId mismatch");
  const output = plainObject(event.output, "result output");
  invariant(typeof output.relativePath === "string" && output.relativePath && !isAbsolute(output.relativePath), "output.relativePath must be relative");
  invariant(typeof output.sha256 === "string" && SHA256.test(output.sha256), "output.sha256 is invalid");
  const path = resolve(arm.workspace, output.relativePath);
  invariant(isInside(arm.workspace, path) && path !== arm.workspace, "output escapes the owned workspace");
  const info = lstatSync(path);
  invariant(info.isFile() && !info.isSymbolicLink(), "output must be an owned regular file");
  invariant(isInside(realpathSync(arm.workspace), realpathSync(path)), "output realpath escapes the owned workspace");
  invariant(sha256File(path) === output.sha256, "output hash mismatch");
  const rawQueueResidenceMs = event.queueBlockedMs == null ? null : Number(event.queueBlockedMs);
  invariant(rawQueueResidenceMs == null || (Number.isFinite(rawQueueResidenceMs) && rawQueueResidenceMs >= 0), "queueBlockedMs must be non-negative when supplied");
  return { path, relativePath: output.relativePath, sha256: output.sha256, bytes: info.size, rawQueueResidenceMs };
}

export class FourArmController {
  constructor(root, options = {}) {
    invariant(typeof root === "string" && isAbsolute(root), "controller root must be an absolute path");
    invariant(!existsSync(root), `refusing to overwrite controller root: ${root}`);
    mkdirSync(root, { recursive: false });
    this.root = realpathSync(root);
    this.clockDomainId = options.clockDomainId ?? randomUUID();
    this.terminateGraceMs = options.terminateGraceMs ?? 250;
    this.appendEvent = options.appendEvent ?? ((path, line) => appendFileSync(path, line));
    this.appendLog = options.appendLog ?? ((path, chunk) => appendFileSync(path, chunk));
    this.groupSequence = 0;
    this.eventSequence = 1;
    this.active = false;
    this.processes = new Set();
    this.controllerNonce = randomUUID();
    this.controllerIdentity = processIdentity(process.pid);
    this.controllerHeartbeatPath = join(this.root, "controller-heartbeat.json");
    this.controllerHeartbeatSequence = 0;
    mkdirSync(join(this.root, "groups"));
    writeExclusive(join(this.root, "CONTROLLER.json"), {
      schemaVersion: CONTROLLER_SCHEMA,
      mode: "provider-zero-fixture",
      liveRuntimeAdmission: "blocked",
      clockDomainId: this.clockDomainId,
      createdAt: new Date().toISOString(),
      providerCalls: 0,
    });
    writeExclusive(join(this.root, "events.jsonl"), "");
    const writeControllerHeartbeat = () => {
      try {
        writeAtomic(this.controllerHeartbeatPath, {
          nonce: this.controllerNonce,
          pid: process.pid,
          sequence: ++this.controllerHeartbeatSequence,
          atWallMs: Date.now(),
        });
      } catch (error) {
        this.controllerHeartbeatError = error.message;
      }
    };
    writeControllerHeartbeat();
    this.controllerHeartbeatTimer = setInterval(() => { if (this.active) writeControllerHeartbeat(); }, 25);
    this.controllerHeartbeatTimer.unref();
  }

  #event(type, details = {}) {
    const event = {
      schemaVersion: CONTROLLER_SCHEMA,
      sequence: this.eventSequence++,
      clockDomainId: this.clockDomainId,
      atMonotonicMs: Number(process.hrtime.bigint()) / 1e6,
      atWall: new Date().toISOString(),
      type,
      ...details,
    };
    this.appendEvent(join(this.root, "events.jsonl"), `${JSON.stringify(event)}\n`, event);
    return event;
  }

  async runGroup(rawManifest, options = {}) {
    invariant(!this.active, "a group is active; the all-child terminal barrier has not closed");
    const priorActivePath = join(this.root, "ACTIVE-GROUP.json");
    if (existsSync(priorActivePath)) {
      const prior = JSON.parse(readFileSync(priorActivePath, "utf8"));
      invariant(new Set(["completed", "failed", "failed-controller-exception", "recovered"]).has(prior.status), `prior group status ${prior.status ?? "missing"} requires recovery before another run`);
    }
    this.active = true;
    const sequence = ++this.groupSequence;
    const rawGroupId = typeof rawManifest?.groupId === "string" && TOKEN.test(rawManifest.groupId) ? rawManifest.groupId : "invalid-group";
    const groupRoot = join(this.root, "groups", `${String(sequence).padStart(4, "0")}-${rawGroupId}`);
    mkdirSync(groupRoot, { recursive: false });
    writeExclusive(join(groupRoot, "MANIFEST.received.json"), rawManifest);
    let manifest;
    try {
      manifest = validateManifest(rawManifest);
      writeExclusive(join(groupRoot, "MANIFEST.validated.json"), manifest);
    } catch (error) {
      const report = { schemaVersion: CONTROLLER_SCHEMA, groupId: rawGroupId, status: "rejected-preflight", reason: error.message, providerCalls: 0, attempts: [], journalFailures: [] };
      try { this.#event("group-rejected-preflight", { groupId: rawGroupId, reason: error.message }); }
      catch (journalError) { report.journalFailures.push(`event journal failure while writing group-rejected-preflight: ${journalError.message}`); }
      writeExclusive(join(groupRoot, "GROUP.json"), report);
      this.active = false;
      const rejection = new Error(error.message);
      rejection.report = report;
      throw rejection;
    }

    const groupFailures = [];
    const journalFailures = [];
    const attempts = [];
    const launchFailures = [];
    const activePath = join(this.root, "ACTIVE-GROUP.json");
    const activeState = {
      schemaVersion: CONTROLLER_SCHEMA,
      mode: "provider-zero-fixture",
      status: "running",
      groupId: manifest.groupId,
      groupRoot,
      controllerPid: process.pid,
      controllerIdentity: this.controllerIdentity,
      controllerProbe: { heartbeatPath: this.controllerHeartbeatPath, nonce: this.controllerNonce, pid: process.pid },
      clockDomainId: this.clockDomainId,
      attempts: [],
      startedAt: new Date().toISOString(),
    };
    writeAtomic(activePath, activeState);
    let terminationStarted = false;
    const emitEvent = (type, details = {}) => {
      if (journalFailures.length) return null;
      try {
        return this.#event(type, details);
      } catch (error) {
        const reason = `event journal failure while writing ${type}: ${error.message}`;
        journalFailures.push(reason);
        if (!groupFailures.includes(reason)) groupFailures.push(reason);
        terminateAll(reason);
        return null;
      }
    };
    const failGroup = (reason) => {
      if (!groupFailures.includes(reason)) groupFailures.push(reason);
      emitEvent("group-failure-observed", { groupId: manifest.groupId, reason });
      terminateAll(reason);
    };
    const terminateAll = (reason) => {
      if (terminationStarted) return;
      terminationStarted = true;
      for (const attempt of attempts) {
        if (attempt.closed) continue;
        attempt.terminationRequested = reason;
        emitEvent("child-termination-requested", { groupId: manifest.groupId, armId: attempt.arm.armId, reason });
        signalAttempt(attempt, "SIGTERM");
        attempt.killPromise = new Promise((done) => {
          attempt.killTimer = setTimeout(() => {
            // The direct child may exit on SIGTERM while a descendant ignores it.
            // Keep the process-group escalation independent of the direct close event.
            signalAttempt(attempt, "SIGKILL");
            done();
          }, this.terminateGraceMs);
        });
      }
    };

    const signalAttempt = (attempt, signal) => {
      if (process.platform !== "win32" && Number.isInteger(attempt.child.pid)) {
        try {
          process.kill(-attempt.child.pid, signal);
          return;
        } catch (error) {
          if (error.code !== "ESRCH") {
            try { attempt.child.kill(signal); } catch {}
            return;
          }
        }
      }
      try { attempt.child.kill(signal); } catch {}
    };

    try {
      emitEvent("group-started", { groupId: manifest.groupId, epochId: manifest.epoch.id, taskId: manifest.task.id });
      invariant(!journalFailures.length, journalFailures[0]);
      for (const [index, arm] of manifest.arms.entries()) {
        const attemptRoot = join(groupRoot, "attempts", `${String(index + 1).padStart(4, "0")}-${arm.armId}`);
        mkdirSync(attemptRoot, { recursive: true });
        const stdoutPath = join(attemptRoot, "stdout.log");
        const stderrPath = join(attemptRoot, "stderr.log");
        writeExclusive(stdoutPath, "");
        writeExclusive(stderrPath, "");
        const initExpected = expectedInit(manifest, arm);
        const recoveryNonce = randomUUID();
        const recoveryHeartbeat = join(attemptRoot, "recovery-heartbeat.json");
        let child;
        try {
          if (arm.args.some((item) => item.includes("\0"))) throw new Error("argument contains a null byte");
          child = spawn(process.execPath, [WORKER_WRAPPER], {
            cwd: arm.workspace,
            env: childEnv(initExpected, {
              OMD_CONTROLLER_WRAPPER: JSON.stringify({
                executable: arm.executable.path,
                args: arm.args,
                recoveryNonce,
                recoveryHeartbeat,
              }),
            }),
            stdio: ["ignore", "pipe", "pipe"],
            detached: process.platform !== "win32",
          });
        } catch (error) {
          const receipt = {
            schemaVersion: CONTROLLER_SCHEMA,
            groupId: manifest.groupId,
            armId: arm.armId,
            sessionId: arm.sessionId,
            order: index + 1,
            status: "launch-rejected",
            errors: [`synchronous launch failure: ${error.message}`],
            exit: null,
            stdoutSha256: sha256File(stdoutPath),
            stderrSha256: sha256File(stderrPath),
          };
          writeExclusive(join(attemptRoot, "ATTEMPT.json"), receipt);
          launchFailures.push(receipt);
          throw new Error(`${arm.armId} synchronous launch failure: ${error.message}`);
        }
        const attempt = {
          order: index + 1,
          arm,
          child,
          attemptRoot,
          stdoutPath,
          stderrPath,
          initExpected,
          initCount: 0,
          resultCount: 0,
          initAccepted: false,
          result: null,
          output: null,
          errors: [],
          stdoutPending: "",
          closed: false,
          terminationRequested: null,
          killTimer: null,
          killPromise: null,
          exit: null,
        };
        attempts.push(attempt);
        this.processes.add(child);
        const identity = processIdentity(child.pid);
        activeState.attempts.push({
          order: index + 1,
          armId: arm.armId,
          sessionId: arm.sessionId,
          pid: child.pid,
          processGroupId: process.platform === "win32" ? null : child.pid,
          processIdentity: identity,
          recoveryProbe: { heartbeatPath: recoveryHeartbeat, nonce: recoveryNonce, pid: child.pid },
        });
        writeAtomic(activePath, activeState);
        emitEvent("child-launched", { groupId: manifest.groupId, armId: arm.armId, sessionId: arm.sessionId, order: index + 1, pid: child.pid ?? null, processGroupId: process.platform === "win32" ? null : child.pid ?? null });
        invariant(!journalFailures.length, journalFailures[0]);

        const rejectAttempt = (reason) => {
          attempt.errors.push(reason);
          failGroup(`${arm.armId}: ${reason}`);
        };
        const consumeLine = (line) => {
          if (!line.trim()) return;
          let event;
          try { event = JSON.parse(line); } catch { rejectAttempt("non-JSON stdout event"); return; }
          try { plainObject(event, "stdout event"); } catch (error) { rejectAttempt(error.message); return; }
          if (event.type === "system" && event.subtype === "init") {
            attempt.initCount += 1;
            if (attempt.initCount !== 1) { rejectAttempt("duplicate init event"); return; }
            try {
              validateInit(event, initExpected);
              attempt.initAccepted = true;
              emitEvent("child-init-accepted", { groupId: manifest.groupId, armId: arm.armId, sessionId: arm.sessionId });
            } catch (error) { rejectAttempt(error.message); }
            return;
          }
          if (event.type === "result") {
            attempt.resultCount += 1;
            if (!attempt.initAccepted) { rejectAttempt("result arrived before accepted init"); return; }
            if (attempt.resultCount !== 1) { rejectAttempt("duplicate result event"); return; }
            attempt.result = event;
            try {
              attempt.output = validateOwnedOutput(event, arm);
              emitEvent("child-result-accepted", { groupId: manifest.groupId, armId: arm.armId, sessionId: arm.sessionId, outputSha256: attempt.output.sha256 });
            } catch (error) { rejectAttempt(error.message); }
            return;
          }
          rejectAttempt(`unexpected stdout event: ${event.type ?? "missing"}`);
        };
        child.stdout.on("data", (chunk) => {
          try { this.appendLog(stdoutPath, chunk, { stream: "stdout", armId: arm.armId }); }
          catch (error) { rejectAttempt(`stdout log write failure: ${error.message}`); return; }
          attempt.stdoutPending += chunk.toString();
          while (attempt.stdoutPending.includes("\n")) {
            const boundary = attempt.stdoutPending.indexOf("\n");
            const line = attempt.stdoutPending.slice(0, boundary);
            attempt.stdoutPending = attempt.stdoutPending.slice(boundary + 1);
            consumeLine(line);
          }
        });
        child.stderr.on("data", (chunk) => {
          try { this.appendLog(stderrPath, chunk, { stream: "stderr", armId: arm.armId }); }
          catch (error) { rejectAttempt(`stderr log write failure: ${error.message}`); return; }
          const text = chunk.toString();
          if (/ambient fallback|keeping full .*toolset|unmappable entries/i.test(text)) rejectAttempt("ambient tool fallback detected on stderr");
        });
        attempt.closedPromise = new Promise((done) => {
          child.on("error", (error) => rejectAttempt(`spawn error: ${error.message}`));
          child.on("close", (code, signal) => {
            attempt.closed = true;
            this.processes.delete(child);
            if (attempt.stdoutPending.trim()) consumeLine(attempt.stdoutPending);
            attempt.exit = { code, signal };
            if (!attempt.terminationRequested) {
              if (!attempt.initAccepted) attempt.errors.push("missing accepted init");
              if (!attempt.output) attempt.errors.push("missing accepted terminal result");
              if (code !== 0 || signal) attempt.errors.push(`abnormal exit: ${code ?? signal}`);
              if (attempt.errors.length) failGroup(`${arm.armId}: ${attempt.errors.join("; ")}`);
            }
            emitEvent("child-process-terminal", { groupId: manifest.groupId, armId: arm.armId, code, signal, terminationRequested: attempt.terminationRequested });
            done();
          });
        });
      }

      const onAbort = () => failGroup("group cancelled by caller");
      if (options.signal) {
        if (options.signal.aborted) onAbort();
        else options.signal.addEventListener("abort", onAbort, { once: true });
      }
      await Promise.all(attempts.map((attempt) => attempt.closedPromise));
      await Promise.all(attempts.map((attempt) => attempt.killPromise).filter(Boolean));
      if (options.signal) options.signal.removeEventListener("abort", onAbort);

      for (const attempt of attempts) {
        for (const [label, binding] of [["epoch", manifest.epoch], ["task", manifest.task], ["profile", attempt.arm.profile], ["executable", attempt.arm.executable], ["input", attempt.arm.input]]) {
          try { explicitFile(binding, `${attempt.arm.armId} post-run ${label}`); }
          catch (error) { attempt.errors.push(error.message); if (!groupFailures.includes(error.message)) groupFailures.push(error.message); }
        }
        if (attempt.output) {
          try {
            const finalOutput = validateOwnedOutput(attempt.result, attempt.arm);
            invariant(finalOutput.sha256 === attempt.output.sha256 && finalOutput.bytes === attempt.output.bytes, "accepted output changed before process close");
            attempt.output = finalOutput;
          } catch (error) {
            const reason = `${attempt.arm.armId} post-close output: ${error.message}`;
            attempt.errors.push(reason);
            if (!groupFailures.includes(reason)) groupFailures.push(reason);
          }
        }
        const status = attempt.errors.length ? "rejected" : attempt.terminationRequested ? "cancelled-by-controller" : "completed";
        const attemptReceipt = {
          schemaVersion: CONTROLLER_SCHEMA,
          groupId: manifest.groupId,
          armId: attempt.arm.armId,
          sessionId: attempt.arm.sessionId,
          order: attempt.order,
          status,
          initCount: attempt.initCount,
          resultCount: attempt.resultCount,
          output: attempt.output,
          errors: attempt.errors,
          terminationRequested: attempt.terminationRequested,
          exit: attempt.exit,
          stdoutSha256: sha256File(attempt.stdoutPath),
          stderrSha256: sha256File(attempt.stderrPath),
        };
        writeExclusive(join(attempt.attemptRoot, "ATTEMPT.json"), attemptReceipt);
        attempt.receipt = attemptReceipt;
      }

      const intendedStatus = groupFailures.length ? "failed" : "completed";
      emitEvent("group-terminal", {
        groupId: manifest.groupId,
        status: intendedStatus,
        allChildrenProcessTerminal: attempts.every((attempt) => attempt.closed),
      });
      const report = {
        schemaVersion: CONTROLLER_SCHEMA,
        groupId: manifest.groupId,
        status: groupFailures.length ? "failed" : "completed",
        providerCalls: 0,
        launchOrder: attempts.map((attempt) => ({ order: attempt.order, armId: attempt.arm.armId, sessionId: attempt.arm.sessionId })),
        allChildrenProcessTerminal: attempts.every((attempt) => attempt.closed),
        attempts: attempts.map((attempt) => attempt.receipt),
        failures: groupFailures,
        journalFailures,
        timing: {
          clockDomainId: this.clockDomainId,
          rawBrokerQueueResidenceMs: Object.fromEntries(attempts.map((attempt) => [attempt.arm.armId, attempt.output?.rawQueueResidenceMs ?? null])),
          verifiedBlockedQueueUnionMs: 0,
          queueExclusionAdmitted: false,
          activeBudgetCreditMs: 0,
        },
        liveRuntimeAdmission: "blocked",
      };
      writeExclusive(join(groupRoot, "GROUP.json"), report);
      activeState.status = report.status;
      activeState.terminalAt = new Date().toISOString();
      activeState.groupReport = join(groupRoot, "GROUP.json");
      writeAtomic(activePath, activeState);
      if (groupFailures.length) {
        const error = new Error(`group failed: ${groupFailures.join(" | ")}`);
        error.report = report;
        throw error;
      }
      return report;
    } catch (error) {
      if (error.report) throw error;
      const reason = `controller exception: ${error.message}`;
      if (!groupFailures.includes(reason)) groupFailures.push(reason);
      terminateAll(reason);
      await Promise.all(attempts.map((attempt) => attempt.closedPromise).filter(Boolean));
      await Promise.all(attempts.map((attempt) => attempt.killPromise).filter(Boolean));
      for (const attempt of attempts) {
        if (attempt.receipt) continue;
        const attemptPath = join(attempt.attemptRoot, "ATTEMPT.json");
        const receipt = {
          schemaVersion: CONTROLLER_SCHEMA,
          groupId: manifest.groupId,
          armId: attempt.arm.armId,
          sessionId: attempt.arm.sessionId,
          order: attempt.order,
          status: "cancelled-by-controller-exception",
          errors: attempt.errors,
          terminationRequested: attempt.terminationRequested,
          exit: attempt.exit,
          stdoutSha256: sha256File(attempt.stdoutPath),
          stderrSha256: sha256File(attempt.stderrPath),
        };
        if (!existsSync(attemptPath)) writeExclusive(attemptPath, receipt);
        attempt.receipt = receipt;
      }
      const report = {
        schemaVersion: CONTROLLER_SCHEMA,
        groupId: manifest.groupId,
        status: "failed-controller-exception",
        providerCalls: 0,
        allStartedChildrenProcessTerminal: attempts.every((attempt) => attempt.closed),
        attempts: [...attempts.map((attempt) => attempt.receipt), ...launchFailures].sort((a, b) => a.order - b.order),
        failures: groupFailures,
        journalFailures,
        liveRuntimeAdmission: "blocked",
      };
      const reportPath = join(groupRoot, "GROUP.json");
      if (!existsSync(reportPath)) writeExclusive(reportPath, report);
      activeState.status = "failed-controller-exception";
      activeState.terminalAt = new Date().toISOString();
      activeState.groupReport = reportPath;
      try { writeAtomic(activePath, activeState); } catch {}
      emitEvent("group-controller-exception-terminal", { groupId: manifest.groupId, allStartedChildrenProcessTerminal: report.allStartedChildrenProcessTerminal, reason });
      error.report = report;
      throw error;
    } finally {
      this.active = false;
    }
  }
}

async function cli() {
  const [command, ...tail] = process.argv.slice(2);
  invariant(new Set(["run", "recover"]).has(command), "usage: four-arm-controller-v0.1.mjs <run|recover> --root <absolute-root> [--manifest <json>]");
  const args = parseArgs(tail);
  if (command === "recover") {
    const report = await recoverControllerRoot(args.get("root"));
    process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
    return;
  }
  const controller = new FourArmController(args.get("root"));
  const report = await controller.runGroup(JSON.parse(readFileSync(args.get("manifest"), "utf8")));
  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  cli().catch((error) => {
    process.stderr.write(`${error.message}\n`);
    process.exitCode = 1;
  });
}
