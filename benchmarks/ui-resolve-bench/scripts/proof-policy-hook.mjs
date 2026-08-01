#!/usr/bin/env node
import {
  closeSync,
  existsSync,
  mkdirSync,
  openSync,
  readFileSync,
  renameSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join, resolve } from "node:path";
import { initialProofPolicyState } from "./proof-policy-state.mjs";
import {
  applyHookPayload,
  hookCommand,
  proofPolicyDenyReason,
  proofPolicyHookDecision,
  proofPolicyStopDecision,
} from "./proof-policy-hook-mapper.mjs";

const STATE_SCHEMA = "0.1";
const DEFAULT_TTL_MS = 6 * 60 * 60 * 1000;
const DEFAULT_LOCK_TIMEOUT_MS = 500;

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function keyFor(payload) {
  const session = String(payload?.session_id ?? "unknown-session");
  const turn = String(payload?.turn_id ?? "shared-turn");
  return createHash("sha256").update(`${session}\0${turn}`).digest("hex").slice(0, 32);
}

export function statePathFor(payload, root) {
  return join(resolve(root), `${keyFor(payload)}.json`);
}

function envelope(payload, state, now) {
  return {
    schema_version: STATE_SCHEMA,
    session_id: String(payload?.session_id ?? "unknown-session"),
    turn_id: String(payload?.turn_id ?? "shared-turn"),
    updated_at_ms: now,
    state,
  };
}

export function readProofPolicyState(path, payload, options = {}) {
  const now = options.now ?? Date.now();
  const ttlMs = options.ttl_ms ?? DEFAULT_TTL_MS;
  if (!existsSync(path)) return { status: "missing", state: initialProofPolicyState() };
  try {
    const parsed = JSON.parse(readFileSync(path, "utf8"));
    if (
      parsed?.schema_version !== STATE_SCHEMA ||
      parsed?.session_id !== String(payload?.session_id ?? "unknown-session") ||
      parsed?.turn_id !== String(payload?.turn_id ?? "shared-turn") ||
      typeof parsed?.updated_at_ms !== "number" ||
      now - parsed.updated_at_ms > ttlMs ||
      parsed?.state?.schema_version !== "0.1" ||
      !Array.isArray(parsed?.state?.decisions)
    ) {
      return { status: "stale-or-invalid", state: initialProofPolicyState() };
    }
    return { status: "ready", state: parsed.state };
  } catch {
    return { status: "corrupt", state: initialProofPolicyState() };
  }
}

export function writeProofPolicyState(path, payload, state, now = Date.now()) {
  mkdirSync(dirname(path), { recursive: true });
  const temp = `${path}.${process.pid}.${now}.tmp`;
  writeFileSync(temp, `${JSON.stringify(envelope(payload, state, now), null, 2)}\n`, {
    encoding: "utf8",
    flag: "wx",
  });
  renameSync(temp, path);
}

function acquireLock(path, timeoutMs) {
  const started = Date.now();
  while (Date.now() - started <= timeoutMs) {
    try {
      return openSync(path, "wx");
    } catch (error) {
      if (error?.code !== "EEXIST") throw error;
      sleep(10);
    }
  }
  return null;
}

function deny(reason) {
  return {
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "deny",
      permissionDecisionReason: proofPolicyDenyReason(reason),
    },
  };
}

function isPreToolCommand(payload) {
  return payload?.hook_event_name === "PreToolUse" && hookCommand(payload).length > 0;
}

function isStop(payload) {
  return payload?.hook_event_name === "Stop" || payload?.hookEventName === "Stop";
}

function stopDeny(reason, payload) {
  if (payload?.stop_hook_active === true || payload?.stopHookActive === true) return null;
  return { decision: "block", reason: proofPolicyDenyReason(reason) };
}

export function handleProofPolicyHook(payload, options = {}) {
  const root = options.root ?? process.env.OMD_PROOF_POLICY_STATE_DIR ?? ".omd/proof-policy";
  const path = statePathFor(payload, root);
  mkdirSync(dirname(path), { recursive: true });
  const lockPath = `${path}.lock`;
  const configuredLockTimeout = Number(process.env.OMD_PROOF_POLICY_LOCK_TIMEOUT_MS);
  const lock = acquireLock(
    lockPath,
    options.lock_timeout_ms ?? (
      Number.isFinite(configuredLockTimeout) && configuredLockTimeout >= 0
        ? configuredLockTimeout
        : DEFAULT_LOCK_TIMEOUT_MS
    ),
  );
  if (lock == null) {
    return {
      output: isPreToolCommand(payload)
        ? deny("policy-state-busy")
        : isStop(payload)
          ? stopDeny("policy-state-busy", payload)
          : null,
      status: "busy",
    };
  }

  try {
    const loaded = readProofPolicyState(path, payload, options);
    if (
      (loaded.status === "corrupt" || loaded.status === "stale-or-invalid") &&
      (isPreToolCommand(payload) || isStop(payload))
    ) {
      return {
        output: isPreToolCommand(payload)
          ? deny("policy-state-unavailable")
          : stopDeny("policy-state-unavailable", payload),
        status: loaded.status,
      };
    }
    const next = applyHookPayload(loaded.state, payload);
    if (next !== loaded.state) writeProofPolicyState(path, payload, next, options.now ?? Date.now());
    const output = payload?.hook_event_name === "PreToolUse"
      ? proofPolicyHookDecision(next)
      : isStop(payload)
        ? proofPolicyStopDecision(next, payload)
      : null;
    return { output, status: loaded.status, state: next };
  } finally {
    closeSync(lock);
    rmSync(lockPath, { force: true });
  }
}

function main() {
  let payload;
  try {
    payload = JSON.parse(readFileSync(0, "utf8") || "{}");
  } catch {
    process.stdout.write(`${JSON.stringify(deny("invalid-hook-payload"))}\n`);
    return;
  }
  const result = handleProofPolicyHook(payload);
  if (result.output) process.stdout.write(`${JSON.stringify(result.output)}\n`);
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(new URL(import.meta.url).pathname)) {
  main();
}
