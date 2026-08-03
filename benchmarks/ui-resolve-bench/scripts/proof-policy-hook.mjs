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
  hookEditPaths,
  proofPolicyDenyReason,
  proofPolicyHookDecision,
  proofPolicyStopDecision,
} from "./proof-policy-hook-mapper.mjs";
import {
  classifyProofCommand,
  countNativeBrowserProofCallsFile,
  isProductEditPath,
} from "./proof-trace-contract.mjs";
import { applyProofPolicyEvent } from "./proof-policy-state.mjs";

const STATE_SCHEMA = "0.1";
const DEFAULT_TTL_MS = 6 * 60 * 60 * 1000;
const DEFAULT_LOCK_TIMEOUT_MS = 500;
const REFLOW_ARTIFACT_PATH = join(".omd", "reflow-closure.json");

function stringArray(value) {
  return Array.isArray(value)
    && value.length > 0
    && value.every((item) => typeof item === "string" && item.length > 0)
    && new Set(value).size === value.length;
}

function outcomeSet(value, expected = "pass") {
  return value?.outcome_390 === expected
    && value?.outcome_320 === expected
    && value?.outcome_200pct === expected;
}

function inventoryDigest(artifact) {
  return createHash("sha256").update(JSON.stringify({
    carrier_ids: artifact.inventory.carrier_ids,
    carrier_bindings: artifact.carriers.map((carrier) => ({
      id: carrier.id,
      binds_rows: carrier.binds_rows,
    })),
    row_ids: artifact.inventory.row_ids,
  })).digest("hex");
}

export function validateReflowClosureArtifact(artifact, mode = "inventory") {
  if (!artifact || typeof artifact !== "object" || Array.isArray(artifact)) {
    return { pass: false, reason: "reflow-inventory-required" };
  }
  if (artifact.schema_version !== "0.1" || artifact.inventory?.state !== "locked") {
    return { pass: false, reason: "reflow-inventory-required" };
  }
  if (!stringArray(artifact.inventory.carrier_ids) || !stringArray(artifact.inventory.row_ids)) {
    return { pass: false, reason: "reflow-inventory-required" };
  }
  if (
    !Array.isArray(artifact.carriers)
    || artifact.carriers.length !== artifact.inventory.carrier_ids.length
    || !Array.isArray(artifact.rows)
    || artifact.rows.length !== artifact.inventory.row_ids.length
  ) {
    return { pass: false, reason: "reflow-inventory-required" };
  }
  const carrierIds = artifact.carriers.map((carrier) => carrier?.id);
  const rowIds = artifact.rows.map((row) => row?.id);
  if (
    JSON.stringify(carrierIds) !== JSON.stringify(artifact.inventory.carrier_ids)
    || JSON.stringify(rowIds) !== JSON.stringify(artifact.inventory.row_ids)
  ) {
    return { pass: false, reason: "reflow-inventory-required" };
  }
  const knownRows = new Set(rowIds);
  if (artifact.carriers.some((carrier) => (
    !stringArray(carrier?.binds_rows)
    || carrier.binds_rows.some((row) => !knownRows.has(row))
  ))) {
    return { pass: false, reason: "reflow-inventory-required" };
  }
  const digest = inventoryDigest(artifact);
  if (artifact.inventory.sha256 !== digest) {
    return { pass: false, reason: "reflow-inventory-hash-invalid" };
  }
  const inventory = {
    inventory_sha256: digest,
    carrier_count: carrierIds.length,
    row_count: rowIds.length,
  };
  if (mode === "inventory") return { pass: true, ...inventory };

  const manifest = artifact.closure_manifest;
  if (
    artifact.closure?.state !== "closed"
    || artifact.carriers.some((carrier) => !outcomeSet(carrier.final))
    || artifact.rows.some((row) => row?.final?.status !== "pass" || !outcomeSet(row.final))
    || manifest?.inventory_sha256 !== digest
    || manifest?.registered_carriers !== carrierIds.length
    || manifest?.registered_rows !== rowIds.length
    || manifest?.measured_390 !== carrierIds.length
    || manifest?.measured_320 !== carrierIds.length
    || manifest?.measured_200pct !== carrierIds.length
    || manifest?.unresolved_carriers !== 0
    || manifest?.unresolved_rows !== 0
  ) {
    return { pass: false, reason: "reflow-closure-required" };
  }
  return { pass: true, ...inventory };
}

function workspaceRootFor(payload, options) {
  return resolve(
    options.workspace_root
      ?? payload?.cwd
      ?? payload?.tool_input?.cwd
      ?? process.env.CLAUDE_PROJECT_DIR
      ?? process.cwd(),
  );
}

function readReflowArtifact(payload, options) {
  const path = join(workspaceRootFor(payload, options), REFLOW_ARTIFACT_PATH);
  if (!existsSync(path)) return null;
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch {
    return null;
  }
}

function isPreProductEdit(payload) {
  const event = String(payload?.hook_event_name ?? payload?.hookEventName ?? "");
  const tool = String(payload?.tool_name ?? payload?.toolName ?? "");
  return event === "PreToolUse"
    && /^(?:Edit|Write|MultiEdit|apply_patch)$/i.test(tool)
    && hookEditPaths(payload).some(isProductEditPath);
}

function isPreStaticProof(payload) {
  return String(payload?.hook_event_name ?? payload?.hookEventName ?? "") === "PreToolUse"
    && classifyProofCommand(hookCommand(payload)).static_verification;
}

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

function reconcileNativeBrowserProof(state, payload, options = {}) {
  if (!isStop(payload) || state.revision === 0) return state;
  const tracePath = options.trace_path ?? process.env.OMD_PROOF_POLICY_EVENTS_PATH;
  if (!tracePath || !existsSync(tracePath)) return state;
  let observed;
  try {
    observed = countNativeBrowserProofCallsFile(tracePath);
  } catch {
    return state;
  }
  const previous = Number(state.native_observation?.observed_calls ?? 0);
  if (!Number.isInteger(observed) || observed <= previous) return state;
  let next = state;
  for (let index = previous; index < observed; index += 1) {
    if (next.browser_attempts === 0) {
      next = applyProofPolicyEvent(next, { type: "browser-proof-start" });
      if (next.decisions.at(-1)?.allow === true) {
        next = applyProofPolicyEvent(next, {
          type: "browser-proof-finish",
          outcome: "unresolved",
        });
      }
    } else {
      next = applyProofPolicyEvent(next, { type: "native-browser-unintercepted" });
    }
  }
  next.native_observation.observed_calls = observed;
  next.native_observation.source = "runner-events";
  return next;
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
    const reconciled = reconcileNativeBrowserProof(loaded.state, payload, options);
    const requireReflowArtifact = options.require_reflow_artifact
      ?? process.env.OMD_PROOF_POLICY_REFLOW_ARTIFACT === "1";
    let gated = reconciled;
    if (requireReflowArtifact && isPreProductEdit(payload)) {
      const validation = validateReflowClosureArtifact(
        readReflowArtifact(payload, options),
        "inventory",
      );
      gated = applyProofPolicyEvent(gated, validation.pass
        ? { type: "reflow-inventory-lock", ...validation }
        : { type: "reflow-inventory-reject", reason: validation.reason });
    } else if (requireReflowArtifact && reconciled.revision > 0 && isPreStaticProof(payload)) {
      const validation = validateReflowClosureArtifact(
        readReflowArtifact(payload, options),
        "closure",
      );
      gated = applyProofPolicyEvent(gated, validation.pass
        ? { type: "reflow-closure-validate", ...validation }
        : { type: "reflow-closure-reject", reason: validation.reason });
    }
    if (gated.decisions.at(-1)?.allow === false && gated !== reconciled) {
      writeProofPolicyState(path, payload, gated, options.now ?? Date.now());
      return {
        output: payload?.hook_event_name === "PreToolUse"
          ? proofPolicyHookDecision(gated)
          : null,
        status: loaded.status,
        state: gated,
      };
    }
    const next = applyHookPayload(gated, payload);
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
