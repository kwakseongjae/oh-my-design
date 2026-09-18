#!/usr/bin/env node

import { createHash, randomUUID } from 'node:crypto';
import {
  closeSync,
  existsSync,
  lstatSync,
  mkdirSync,
  openSync,
  readFileSync,
  readdirSync,
  renameSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { spawn, spawnSync } from 'node:child_process';
import { dirname, isAbsolute, join, relative, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const TERMINAL_STATES = new Set(['succeeded', 'failed', 'cancelled', 'timed-out', 'abandoned']);

function now() {
  return new Date().toISOString();
}

function atomicJson(path, value) {
  mkdirSync(dirname(path), { recursive: true });
  const temp = `${path}.${process.pid}.${randomUUID()}.tmp`;
  writeFileSync(temp, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
  renameSync(temp, path);
}

function sha256File(path) {
  return createHash('sha256').update(readFileSync(path)).digest('hex');
}

function collectReportedModels(value, found = new Set()) {
  if (!value || typeof value !== 'object') return found;
  if (Array.isArray(value)) {
    for (const item of value) collectReportedModels(item, found);
    return found;
  }
  for (const [key, child] of Object.entries(value)) {
    if (['model', 'model_id', 'modelId', 'model_reported'].includes(key) && typeof child === 'string' && child.trim()) {
      found.add(child.trim());
    }
    if (key === 'modelUsage' && child && typeof child === 'object' && !Array.isArray(child)) {
      for (const modelId of Object.keys(child)) if (modelId.trim()) found.add(modelId.trim());
    }
    collectReportedModels(child, found);
  }
  return found;
}

function reportedModelsFromLog(path) {
  const content = readFileSync(path, 'utf8').trim();
  if (!content) return [];
  const found = new Set();
  const candidates = [content, ...content.split(/\r?\n/)].filter(Boolean);
  for (const candidate of candidates) {
    try {
      collectReportedModels(JSON.parse(candidate), found);
    } catch {
      // Provider plain-text output is preserved and hash-bound, but is not model attribution.
    }
  }
  return [...found].sort();
}

function assertInside(root, path, label) {
  const rel = relative(root, path);
  if (rel === '' || (!rel.startsWith('..') && !isAbsolute(rel))) return;
  throw new Error(`${label} must stay inside ${root}: ${path}`);
}

function normalizeSpec(raw) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) throw new Error('worker spec must be an object');
  for (const field of ['cwd', 'attemptsDir']) {
    if (typeof raw[field] !== 'string' || !raw[field].trim()) throw new Error(`${field} is required`);
  }
  const spec = {
    taskId: String(raw.taskId || '').trim(),
    provider: String(raw.provider || '').trim(),
    model: String(raw.model || '').trim(),
    command: String(raw.command || '').trim(),
    argv: raw.argv,
    cwd: resolve(String(raw.cwd || '')),
    attemptsDir: resolve(String(raw.attemptsDir || '')),
    timeoutMs: Number(raw.timeoutMs),
    ownedOutputs: raw.ownedOutputs,
  };
  if (!spec.taskId) throw new Error('taskId is required');
  if (!['claude-code', 'grok-build'].includes(spec.provider)) throw new Error('provider must be claude-code or grok-build');
  if (!spec.model) throw new Error('model is required');
  if (!spec.command || !isAbsolute(spec.command)) throw new Error('command must be an absolute executable path');
  if (!Array.isArray(spec.argv) || spec.argv.some((arg) => typeof arg !== 'string')) throw new Error('argv must be a string array');
  if (!existsSync(spec.cwd) || !statSync(spec.cwd).isDirectory()) throw new Error(`cwd is not a directory: ${spec.cwd}`);
  if (!spec.attemptsDir) throw new Error('attemptsDir is required');
  if (!Number.isSafeInteger(spec.timeoutMs) || spec.timeoutMs < 1) throw new Error('timeoutMs must be a positive integer');
  if (!Array.isArray(spec.ownedOutputs) || spec.ownedOutputs.length === 0) throw new Error('ownedOutputs must contain at least one output');
  spec.ownedOutputs = spec.ownedOutputs.map((entry, index) => {
    if (!entry || typeof entry !== 'object') throw new Error(`ownedOutputs[${index}] must be an object`);
    if (typeof entry.path !== 'string' || !entry.path.trim()) throw new Error(`ownedOutputs[${index}].path is required`);
    const path = resolve(spec.cwd, String(entry.path || ''));
    assertInside(spec.cwd, path, `ownedOutputs[${index}].path`);
    const format = entry.format || 'file';
    if (!['file', 'json'].includes(format)) throw new Error(`ownedOutputs[${index}].format must be file or json`);
    return { path, format, required: entry.required !== false };
  });
  return spec;
}

function processIdentity(pid) {
  if (!Number.isSafeInteger(pid) || pid <= 0) return null;
  const result = spawnSync('/bin/ps', ['-p', String(pid), '-o', 'lstart='], { encoding: 'utf8' });
  if (result.status !== 0) return null;
  const started = result.stdout.trim();
  return started || null;
}

function processGroupState(pgid) {
  if (!Number.isSafeInteger(pgid) || pgid <= 0 || process.platform === 'win32') return 'unknown';
  try {
    process.kill(-pgid, 0);
    return 'alive';
  } catch (error) {
    if (error?.code === 'ESRCH') return 'dead';
    return 'unknown';
  }
}

function delay(ms) {
  return new Promise((resolveDelay) => setTimeout(resolveDelay, ms));
}

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'));
}

function attemptDirs(attemptsDir) {
  if (!existsSync(attemptsDir)) return [];
  return readdirSync(attemptsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^attempt-\d{4}$/.test(entry.name))
    .map((entry) => join(attemptsDir, entry.name))
    .sort();
}

function recoverPriorAttempt(attemptsDir) {
  const dirs = attemptDirs(attemptsDir);
  if (dirs.length === 0) return null;
  const priorDir = dirs.at(-1);
  const statusPath = join(priorDir, 'status.json');
  if (!existsSync(statusPath)) throw new Error(`prior attempt has no durable status: ${priorDir}`);
  const prior = readJson(statusPath);
  const expectedTask = arguments[1];
  if (expectedTask && prior.taskId !== expectedTask) {
    throw new Error(`prior attempt belongs to task ${prior.taskId || '<unknown>'}, not ${expectedTask}`);
  }
  if (TERMINAL_STATES.has(prior.state)) {
    const groupState = processGroupState(prior.pgid);
    if (groupState !== 'dead') {
      throw new Error(`prior terminal attempt has process group ${groupState}; refusing duplicate start`);
    }
    return prior;
  }
  if (prior.state !== 'running') throw new Error(`prior attempt has unknown state: ${prior.state}`);
  const liveIdentity = processIdentity(prior.pid);
  if (liveIdentity && liveIdentity === prior.processStartIdentity) {
    throw new Error(`prior attempt is still running (pid ${prior.pid}); refusing duplicate start`);
  }
  const groupState = processGroupState(prior.pgid);
  if (groupState !== 'dead') {
    throw new Error(`prior attempt process identity is unresolved and process group is ${groupState}; refusing duplicate start`);
  }
  const recovered = {
    ...prior,
    state: 'abandoned',
    terminalReason: liveIdentity ? 'pid-reused-or-process-identity-mismatch' : 'runner-or-worker-crash',
    recoveredAt: now(),
  };
  atomicJson(statusPath, recovered);
  return recovered;
}

function inspectOutputs(outputs, before) {
  const observed = [];
  const errors = [];
  for (const output of outputs) {
    const old = before.get(output.path);
    if (!existsSync(output.path)) {
      if (output.required) errors.push(`missing output: ${output.path}`);
      observed.push({ ...output, exists: false, sha256: null, bytes: null, changedSinceStart: false });
      continue;
    }
    const linkStat = lstatSync(output.path);
    if (linkStat.isSymbolicLink()) {
      errors.push(`output must not be a symbolic link: ${output.path}`);
      observed.push({ ...output, exists: true, sha256: null, bytes: null, changedSinceStart: false });
      continue;
    }
    const stat = statSync(output.path);
    if (!stat.isFile()) {
      errors.push(`output is not a regular file: ${output.path}`);
      observed.push({ ...output, exists: true, sha256: null, bytes: null, changedSinceStart: false });
      continue;
    }
    const hash = sha256File(output.path);
    const changedSinceStart = !old || old.sha256 !== hash;
    if (!changedSinceStart) errors.push(`output was not produced or changed by this attempt: ${output.path}`);
    if (output.format === 'json') {
      try {
        JSON.parse(readFileSync(output.path, 'utf8'));
      } catch {
        errors.push(`invalid JSON output: ${output.path}`);
      }
    }
    observed.push({ ...output, exists: true, sha256: hash, bytes: stat.size, changedSinceStart });
  }
  return { observed, errors };
}

function signalProcessGroup(pid, signal) {
  if (!pid) return;
  try {
    process.kill(-pid, signal);
  } catch (error) {
    if (error?.code !== 'ESRCH') throw error;
  }
}

async function stopProcessGroup(pgid, graceMs) {
  let state = processGroupState(pgid);
  if (state === 'dead') return 'dead';
  if (state === 'unknown') return 'unknown';
  signalProcessGroup(pgid, 'SIGTERM');
  const deadline = Date.now() + graceMs;
  while (Date.now() < deadline) {
    await delay(20);
    state = processGroupState(pgid);
    if (state !== 'alive') return state;
  }
  signalProcessGroup(pgid, 'SIGKILL');
  const killDeadline = Date.now() + Math.max(200, graceMs);
  while (Date.now() < killDeadline) {
    await delay(20);
    state = processGroupState(pgid);
    if (state !== 'alive') return state;
  }
  return state;
}

export async function runWorker(rawSpec, options = {}) {
  const spec = normalizeSpec(rawSpec);
  if (options.signal?.aborted) throw new Error('worker start cancelled before launch');
  mkdirSync(spec.attemptsDir, { recursive: true });
  const prior = recoverPriorAttempt(spec.attemptsDir, spec.taskId);
  const number = attemptDirs(spec.attemptsDir).length + 1;
  const attemptId = `attempt-${String(number).padStart(4, '0')}`;
  const attemptDir = join(spec.attemptsDir, attemptId);
  mkdirSync(attemptDir, { recursive: false });
  const statusPath = join(attemptDir, 'status.json');
  const stdoutPath = join(attemptDir, 'stdout.log');
  const stderrPath = join(attemptDir, 'stderr.log');
  const manifestPath = join(attemptDir, 'manifest.json');
  const before = new Map(spec.ownedOutputs.map((output) => {
    if (existsSync(output.path) && lstatSync(output.path).isSymbolicLink()) {
      throw new Error(`owned output must not be a symbolic link: ${output.path}`);
    }
    return [output.path, existsSync(output.path) && statSync(output.path).isFile()
      ? { sha256: sha256File(output.path), bytes: statSync(output.path).size }
      : null];
  }));
  atomicJson(manifestPath, {
    schemaVersion: 1,
    attemptId,
    previousAttemptId: prior?.attemptId || null,
    taskId: spec.taskId,
    provider: spec.provider,
    model: spec.model,
    command: spec.command,
    argv: spec.argv,
    cwd: spec.cwd,
    timeoutMs: spec.timeoutMs,
    ownedOutputs: spec.ownedOutputs,
    outputSnapshotBefore: Object.fromEntries(before),
    createdAt: now(),
  });
  const stdoutFd = openSync(stdoutPath, 'a');
  const stderrFd = openSync(stderrPath, 'a');
  const child = spawn(spec.command, spec.argv, {
    cwd: spec.cwd,
    detached: process.platform !== 'win32',
    stdio: ['ignore', stdoutFd, stderrFd],
    env: options.env || process.env,
  });
  closeSync(stdoutFd);
  closeSync(stderrFd);
  const startedAt = now();
  const identity = processIdentity(child.pid);
  let terminalReason = null;
  let cleanupPromise = null;
  const terminate = (reason) => {
    if (terminalReason) return;
    terminalReason = reason;
    cleanupPromise = stopProcessGroup(child.pid, options.killGraceMs ?? 500);
  };
  const timeout = setTimeout(() => terminate('timeout'), spec.timeoutMs);
  timeout.unref();
  const abort = () => terminate('cancelled');
  options.signal?.addEventListener('abort', abort, { once: true });
  atomicJson(statusPath, {
    schemaVersion: 1,
    attemptId,
    previousAttemptId: prior?.attemptId || null,
    taskId: spec.taskId,
    state: 'running',
    pid: child.pid,
    pgid: process.platform === 'win32' ? null : child.pid,
    processStartIdentity: identity,
    startedAt,
  });
  const result = await new Promise((resolveResult) => {
    child.once('error', (error) => resolveResult({ exitCode: null, signal: null, spawnError: error.message }));
    child.once('exit', (exitCode, signal) => resolveResult({ exitCode, signal, spawnError: null }));
  });
  clearTimeout(timeout);
  options.signal?.removeEventListener('abort', abort);
  if (existsSync(statusPath)) {
    const latest = readJson(statusPath);
    if (latest.cancelRequestedAt) terminalReason = 'cancelled';
  }
  const groupCleanupState = await (cleanupPromise || stopProcessGroup(child.pid, options.killGraceMs ?? 500));
  const outputInspection = inspectOutputs(spec.ownedOutputs, before);
  const reportedModelIds = reportedModelsFromLog(stdoutPath);
  const logEvidence = {
    stdout: { path: stdoutPath, sha256: sha256File(stdoutPath), bytes: statSync(stdoutPath).size },
    stderr: { path: stderrPath, sha256: sha256File(stderrPath), bytes: statSync(stderrPath).size },
  };
  let state = 'failed';
  if (terminalReason === 'cancelled') state = 'cancelled';
  else if (terminalReason === 'timeout') state = 'timed-out';
  else if (result.exitCode === 0 && outputInspection.errors.length === 0 && groupCleanupState === 'dead') state = 'succeeded';
  const status = {
    schemaVersion: 1,
    attemptId,
    previousAttemptId: prior?.attemptId || null,
    taskId: spec.taskId,
    state,
    terminalReason: terminalReason || result.spawnError || (result.exitCode === 0
      ? (outputInspection.errors.length === 0 ? 'completed' : 'output-admission-failed')
      : 'nonzero-exit'),
    pid: child.pid,
    pgid: process.platform === 'win32' ? null : child.pid,
    processStartIdentity: identity,
    startedAt,
    finishedAt: now(),
    exitCode: result.exitCode,
    signal: result.signal,
    spawnError: result.spawnError,
    processGroupCleanup: groupCleanupState,
    outputErrors: outputInspection.errors,
    outputs: outputInspection.observed,
    modelAttribution: {
      requested: spec.model,
      reported: reportedModelIds.length > 0 ? reportedModelIds : null,
      evidence: logEvidence.stdout,
    },
    logs: logEvidence,
  };
  atomicJson(statusPath, status);
  return { attemptDir, manifestPath, statusPath, status };
}

export async function cancelAttempt(statusPath, options = {}) {
  const absolute = resolve(statusPath);
  const status = readJson(absolute);
  if (status.state !== 'running') return { cancelled: false, reason: `already-${status.state}` };
  const identity = processIdentity(status.pid);
  const groupState = processGroupState(status.pgid);
  if (!identity || identity !== status.processStartIdentity) {
    if (groupState !== 'dead') return { cancelled: false, reason: 'process-identity-and-group-unresolved' };
    const recovered = { ...status, state: 'abandoned', terminalReason: identity ? 'pid-reused-or-process-identity-mismatch' : 'process-not-running', recoveredAt: now() };
    atomicJson(absolute, recovered);
    return { cancelled: false, reason: recovered.terminalReason };
  }
  atomicJson(absolute, { ...status, cancelRequestedAt: now() });
  const stopped = await stopProcessGroup(status.pgid, options.killGraceMs ?? 500);
  if (stopped !== 'dead') return { cancelled: false, reason: `process-group-${stopped}`, pid: status.pid, pgid: status.pgid };
  const latest = readJson(absolute);
  if (latest.state === 'running') {
    atomicJson(absolute, { ...latest, state: 'cancelled', terminalReason: 'external-cancel', finishedAt: now(), processGroupCleanup: stopped });
  }
  return { cancelled: true, pid: status.pid, pgid: status.pgid };
}

async function main(argv) {
  const [command, flag, value] = argv;
  if (command === 'run' && flag === '--spec' && value) {
    const controller = new AbortController();
    const stop = () => controller.abort();
    process.once('SIGINT', stop);
    process.once('SIGTERM', stop);
    const result = await runWorker(readJson(resolve(value)), { signal: controller.signal });
    process.removeListener('SIGINT', stop);
    process.removeListener('SIGTERM', stop);
    process.stdout.write(`${JSON.stringify(result.status)}\n`);
    process.exitCode = result.status.state === 'succeeded' ? 0 : 1;
    return;
  }
  if (command === 'cancel' && flag === '--status' && value) {
    process.stdout.write(`${JSON.stringify(await cancelAttempt(value))}\n`);
    return;
  }
  throw new Error('usage: worker-lifecycle.mjs run --spec <json> | cancel --status <json>');
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main(process.argv.slice(2)).catch((error) => {
    process.stderr.write(`${error.stack || error.message}\n`);
    process.exitCode = 1;
  });
}
