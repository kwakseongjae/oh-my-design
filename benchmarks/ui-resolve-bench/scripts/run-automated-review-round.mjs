#!/usr/bin/env node
import { spawn, spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  realpathSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { homedir } from "node:os";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs, readJson, sha256, writeJson } from "./_lib.mjs";
import {
  assertProviderRoute,
  CURSOR_INCLUDED_USAGE_CONFIRMATION,
  CURSOR_RUNTIME_DISPLAY_LABELS,
  isCursorLiveModelAllowed,
} from "./runtime-contract.mjs";

const AXES = Object.freeze(["functionality", "usability", "fidelity", "ship_preference"]);
const CHOICES = new Set(["a", "b", "tie", "both_fail"]);

function fail(message) {
  throw new Error(`automated review runner rejected: ${message}`);
}

function cacheSlug(path) {
  return realpathSync(path).replaceAll(/[^a-zA-Z0-9_-]+/g, "-").replaceAll(/^-+|-+$/g, "");
}

function cursorCachePreflight(packetRoot) {
  const projectsRoot = join(homedir(), ".cursor", "projects");
  const projectRoot = join(projectsRoot, cacheSlug(packetRoot));
  const probeRoot = join(projectRoot, `.omd-auto-judge-preflight-${process.pid}-${Date.now()}`);
  const probePath = join(probeRoot, "probe");
  try {
    mkdirSync(probeRoot, { recursive: true });
    writeFileSync(probePath, "ok", "utf8");
    if (readFileSync(probePath, "utf8") !== "ok") fail("Cursor project-cache readback mismatch");
    rmSync(probeRoot, { recursive: true, force: true });
    return { pass: true, projects_root: projectsRoot, project_root: projectRoot };
  } catch (error) {
    try { rmSync(probeRoot, { recursive: true, force: true }); } catch {}
    return {
      pass: false,
      projects_root: projectsRoot,
      project_root: projectRoot,
      error_code: error?.code ?? null,
      error_message: error?.message ?? String(error),
    };
  }
}

function strictJudgment(text, packet) {
  if (typeof text !== "string" || !text.trim()) fail("provider returned no final message");
  let document;
  try {
    document = JSON.parse(text.trim());
  } catch {
    fail("final message is not one strict JSON object");
  }
  const keys = Object.keys(document).sort();
  if (JSON.stringify(keys) !== JSON.stringify(["assignment_id", "axes", "reason"])) {
    fail(`response keys must be exactly assignment_id, axes, reason; received ${keys.join(", ")}`);
  }
  if (document.assignment_id !== packet.assignment_id) fail("assignment_id mismatch");
  if (!document.axes || typeof document.axes !== "object" || Array.isArray(document.axes)) {
    fail("axes must be an object");
  }
  if (JSON.stringify(Object.keys(document.axes).sort()) !== JSON.stringify([...AXES].sort())) {
    fail("axes must contain exactly the four registered axes");
  }
  for (const axis of AXES) {
    if (!CHOICES.has(document.axes[axis])) fail(`invalid choice for ${axis}: ${document.axes[axis]}`);
  }
  if (typeof document.reason !== "string" || !document.reason.trim() || document.reason.length > 800) {
    fail("reason must be 1–800 characters");
  }
  return document;
}

function finalMessageFromEvents(stdout) {
  const events = stdout.split("\n").filter(Boolean).flatMap((line) => {
    try { return [JSON.parse(line)]; } catch { return []; }
  });
  const resultEvent = [...events].reverse().find((event) => (
    event?.type === "result"
    || event?.type === "agent.result"
    || event?.subtype === "result"
  )) ?? null;
  const assistantEvent = [...events].reverse().find((event) => (
    event?.type === "assistant"
    && Array.isArray(event?.message?.content)
    && event.message.content.some((item) => item?.type === "text" && typeof item.text === "string")
  )) ?? null;
  const assistantMessage = assistantEvent?.message?.content
    ?.filter((item) => item?.type === "text" && typeof item.text === "string")
    .map((item) => item.text)
    .join("") ?? "";
  const resultMessage = [
    resultEvent?.result,
    resultEvent?.text,
    resultEvent?.message?.text,
    typeof resultEvent?.message === "string" ? resultEvent.message : null,
  ].find((value) => typeof value === "string" && value.trim()) ?? "";
  const finalMessage = assistantMessage.trim() ? assistantMessage : resultMessage;
  const finalMessageSource = assistantMessage.trim() ? "assistant-content" : "result-event";
  const modelReported = events
    .map((event) => event?.model ?? event?.model_id ?? event?.data?.model ?? event?.session?.model ?? null)
    .find((value) => typeof value === "string" && value.length > 0) ?? null;
  const usage = events.flatMap((event) => {
    const value = event?.usage ?? event?.token_usage;
    if (!value) return [];
    return [{
      input_tokens: Number(value.input_tokens ?? value.inputTokens ?? 0),
      cached_input_tokens: Number(value.cached_input_tokens ?? value.cachedInputTokens ?? value.cacheReadTokens ?? 0),
      output_tokens: Number(value.output_tokens ?? value.outputTokens ?? 0),
    }];
  });
  return { events, finalMessage, finalMessageSource, modelReported, usage };
}

async function liveCursorInvocation({ packetRoot, model, timeoutMs }) {
  const routeDecision = assertProviderRoute({
    runtime: "cursor",
    model,
    billingType: process.env.OMD_CURSOR_BILLING_TYPE ?? null,
    confirmation: process.env.OMD_CURSOR_INCLUDED_USAGE_CONFIRMED ?? null,
  });
  const cursorBinary = process.env.OMD_CURSOR_AGENT_BIN ?? join(homedir(), ".local", "bin", "cursor-agent");
  const versionProbe = spawnSync(cursorBinary, ["--version"], { encoding: "utf8" });
  if (versionProbe.status !== 0) fail("cursor-agent version probe failed");
  const prompt = readFileSync(join(packetRoot, "PROMPT.md"), "utf8");
  const command = [
    "-p",
    "--output-format", "stream-json",
    "--mode", "ask",
    "--model", model,
    "--sandbox", "enabled",
    "--trust",
    "--workspace", packetRoot,
    prompt,
  ];
  const env = {};
  for (const key of ["HOME", "PATH", "TMPDIR", "LANG", "LC_ALL", "TERM", "USER", "SHELL"]) {
    if (process.env[key]) env[key] = process.env[key];
  }
  Object.assign(env, {
    DISABLE_TELEMETRY: "1",
    DO_NOT_TRACK: "1",
    CI: "1",
    OMD_CURSOR_BILLING_TYPE: routeDecision.billing_type,
    OMD_CURSOR_INCLUDED_USAGE_CONFIRMED: CURSOR_INCLUDED_USAGE_CONFIRMATION,
  });
  const startedNs = process.hrtime.bigint();
  let stdout = "";
  let stderr = "";
  let timedOut = false;
  let spawnError = null;
  const exit = await new Promise((done) => {
    const child = spawn(cursorBinary, command, {
      cwd: packetRoot,
      env,
      detached: true,
      stdio: ["ignore", "pipe", "pipe"],
    });
    const timer = setTimeout(() => {
      timedOut = true;
      try { process.kill(-child.pid, "SIGTERM"); } catch { child.kill("SIGTERM"); }
    }, timeoutMs);
    child.stdout.on("data", (chunk) => { stdout += chunk.toString(); });
    child.stderr.on("data", (chunk) => { stderr += chunk.toString(); });
    child.on("error", (error) => {
      clearTimeout(timer);
      spawnError = error.message;
      done({ code: null, signal: null });
    });
    child.on("close", (code, signal) => {
      clearTimeout(timer);
      done({ code, signal });
    });
  });
  return {
    stdout,
    stderr,
    exit_code: exit.code,
    signal: exit.signal,
    timed_out: timedOut,
    spawn_error: spawnError,
    wall_ms: Math.round(Number(process.hrtime.bigint() - startedNs) / 1_000_000),
    cursor_version: versionProbe.stdout.trim(),
    cursor_binary_sha256: existsSync(cursorBinary)
      ? createHash("sha256").update(readFileSync(cursorBinary)).digest("hex")
      : null,
  };
}

function liveCursorRegistryProbe(model) {
  const cursorBinary = process.env.OMD_CURSOR_AGENT_BIN ?? join(homedir(), ".local", "bin", "cursor-agent");
  const probe = spawnSync(cursorBinary, ["models"], { encoding: "utf8" });
  if (probe.status !== 0) fail("cursor-agent model registry probe failed");
  const entries = probe.stdout.split("\n").flatMap((line) => {
    const match = /^(\S+)\s+-\s+(.+?)(?:\s+\(current\))?\s*$/.exec(line.trim());
    return match ? [{ selector: match[1], label: match[2] }] : [];
  });
  const exact = entries.filter((entry) => entry.selector === model);
  if (exact.length !== 1) fail(`Cursor registry must contain exact selector once: ${model}`);
  return exact[0];
}

function scheduledInvocations(manifest) {
  return manifest.units.flatMap((unit) => unit.invocations.map((invocation) => ({
    id: `${unit.review_unit_id}:${invocation.assignment_id}`,
    review_unit_id: unit.review_unit_id,
    reviewer_hash: unit.reviewer_hash,
    task: unit.task,
    relative_packet: invocation.relative_packet,
    assignment_id: invocation.assignment_id,
    reversed_duplicate: invocation.reversed_duplicate,
    reversal_of: invocation.reversal_of,
  })));
}

function initialState(manifest, model, registeredDisplayLabel, registeredDisplayAliases, timeoutMs, pacingMs) {
  return {
    schema_version: "0.1",
    round_id: manifest.round_id,
    methodology_epoch: manifest.methodology_epoch,
    status: "prepared",
    model,
    registered_display_label: registeredDisplayLabel,
    registered_display_aliases: registeredDisplayAliases,
    attribution_scope: "internal-selector-plus-registered-alias",
    public_model_attribution_eligible: false,
    timeout_ms: timeoutMs,
    pacing_ms: pacingMs,
    manifest_sha256: null,
    scheduled_invocations: manifest.expected.invocations,
    completed_invocations: 0,
    current_invocation: null,
    last_started_at: null,
    stop: null,
    invocations: scheduledInvocations(manifest).map((invocation, index) => ({
      order: index + 1,
      ...invocation,
      status: "pending",
    })),
  };
}

function writeCompletedJudgment({ manifest, state, reviewUnitId, resultsRoot }) {
  const unit = manifest.units.find((item) => item.review_unit_id === reviewUnitId);
  const completed = state.invocations.filter((item) => (
    item.review_unit_id === reviewUnitId && item.status === "complete"
  ));
  if (completed.length !== 2) return;
  const judgmentsRoot = join(resultsRoot, "judgments");
  mkdirSync(judgmentsRoot, { recursive: true });
  writeJson(join(judgmentsRoot, `${reviewUnitId}.json`), {
    schema_version: "0.3",
    methodology_epoch: manifest.methodology_epoch,
    reviewer_hash: unit.reviewer_hash,
    review_unit_id: reviewUnitId,
    task: unit.task,
    judgments: completed
      .sort((a, b) => a.order - b.order)
      .map((item) => ({
        assignment_id: item.assignment_id,
        axes: item.judgment.axes,
      })),
  });
}

export async function runAutomatedReviewRound({
  manifestPath,
  packetsRoot,
  resultsRoot,
  statePath,
  model,
  timeoutMs = 300_000,
  pacingMs = 30_000,
  maxNewInvocations = 1,
  invoke = liveCursorInvocation,
  preflight = cursorCachePreflight,
  registryProbe = liveCursorRegistryProbe,
  now = () => Date.now(),
  wait = (ms) => new Promise((done) => setTimeout(done, ms)),
}) {
  if (!isCursorLiveModelAllowed(model)) fail(`model is outside Cursor allowlist: ${model}`);
  let routeDecision = { mode: "test-injected", billing_type: null };
  if (invoke === liveCursorInvocation) {
    try {
      routeDecision = assertProviderRoute({
        runtime: "cursor",
        model,
        billingType: process.env.OMD_CURSOR_BILLING_TYPE ?? null,
        confirmation: process.env.OMD_CURSOR_INCLUDED_USAGE_CONFIRMED ?? null,
      });
    } catch (error) {
      fail(error.message);
    }
  }
  const manifest = readJson(manifestPath);
  if (
    manifest.schema_version !== "0.1"
    || manifest.review_mode !== "anonymous-automated-multi-judge-separate-reversal"
  ) fail("unsupported automated review manifest");
  if (manifest.expected.invocations !== manifest.expected.review_units * 2) {
    fail("manifest invocation count mismatch");
  }
  mkdirSync(resultsRoot, { recursive: true });
  let state;
  if (existsSync(statePath)) {
    state = readJson(statePath);
    if (state.manifest_sha256 !== sha256(readFileSync(manifestPath))) fail("state manifest hash mismatch");
    if (state.model !== model || state.timeout_ms !== timeoutMs || state.pacing_ms !== pacingMs) {
      fail("state execution contract mismatch");
    }
    if (state.status === "frozen") fail(`root is frozen: ${state.stop?.reason ?? "unknown"}`);
    if (state.status === "complete") return state;
  } else {
    const registry = registryProbe(model);
    if (registry.selector !== model || !registry.label?.trim()) fail("invalid Cursor model registry evidence");
    const aliases = [...new Set([
      registry.label,
      CURSOR_RUNTIME_DISPLAY_LABELS[model],
    ].filter((value) => typeof value === "string" && value.trim()))].sort();
    state = initialState(manifest, model, registry.label, aliases, timeoutMs, pacingMs);
    state.manifest_sha256 = sha256(readFileSync(manifestPath));
    writeJson(statePath, state);
  }

  for (let index = 0; index < maxNewInvocations; index += 1) {
    const invocation = state.invocations.find((item) => item.status === "pending");
    if (!invocation) break;
    const packetRoot = resolve(packetsRoot, invocation.relative_packet);
    const packet = readJson(join(packetRoot, "packet.json"));
    if (packet.assignment_id !== invocation.assignment_id) fail("packet assignment mismatch");
    const registry = registryProbe(model);
    if (registry.selector !== model || registry.label !== state.registered_display_label) {
      state.status = "frozen";
      state.stop = {
        reason: "registered-display-label-drift",
        invocation_id: invocation.id,
        expected: state.registered_display_label,
        observed: registry.label ?? null,
      };
      writeJson(statePath, state);
      return state;
    }
    if (state.last_started_at !== null) {
      const elapsed = now() - state.last_started_at;
      if (elapsed < pacingMs) await wait(pacingMs - elapsed);
    }
    const cache = preflight(packetRoot);
    if (!cache.pass) {
      state.status = "frozen";
      state.stop = { reason: "cursor-project-cache-preflight-failed", invocation_id: invocation.id, cache };
      writeJson(statePath, state);
      return state;
    }
    state.status = "running";
    state.current_invocation = invocation.id;
    state.last_started_at = now();
    invocation.status = "running";
    invocation.started_at = new Date(state.last_started_at).toISOString();
    invocation.cache_preflight = cache;
    writeJson(statePath, state);

    const resultDir = join(resultsRoot, `invocation-${String(invocation.order).padStart(3, "0")}`);
    mkdirSync(resultDir, { recursive: true });
    const raw = await invoke({ packetRoot, model, timeoutMs });
    writeFileSync(join(resultDir, "events.jsonl"), raw.stdout ?? "", "utf8");
    writeFileSync(join(resultDir, "stderr.log"), raw.stderr ?? "", "utf8");
    const parsed = finalMessageFromEvents(raw.stdout ?? "");
    const acceptedLabels = new Set([model, ...state.registered_display_aliases]);
    let stopReason = null;
    if (raw.timed_out) stopReason = "provider-timeout";
    else if (raw.spawn_error) stopReason = "provider-spawn-failure";
    else if (raw.exit_code !== 0) stopReason = "provider-process-failure";
    else if (!acceptedLabels.has(parsed.modelReported)) {
      stopReason = "runtime-display-label-mismatch";
    }
    let judgment = null;
    if (!stopReason) {
      try {
        judgment = strictJudgment(parsed.finalMessage, packet);
      } catch (error) {
        stopReason = "strict-response-invalid";
        invocation.validation_error = error.message;
      }
    }
    writeJson(join(resultDir, "run-record.json"), {
      schema_version: "0.1",
      invocation_id: invocation.id,
      assignment_id: invocation.assignment_id,
      model_requested: model,
      model_reported: parsed.modelReported,
      accepted_internal_display_aliases: state.registered_display_aliases,
      public_model_attribution_eligible: false,
      process: {
        exit_code: raw.exit_code,
        signal: raw.signal ?? null,
        timed_out: Boolean(raw.timed_out),
        spawn_error: raw.spawn_error ?? null,
        wall_ms: raw.wall_ms,
      },
      usage: parsed.usage,
      billing_type: routeDecision.billing_type,
      billing_guard: {
        policy: "included-only-cursor-grok",
        decision: routeDecision.mode,
      },
      final_message_source: parsed.finalMessageSource,
      judgment,
      stop_reason: stopReason,
    });
    if (stopReason) {
      invocation.status = "failed";
      invocation.stop_reason = stopReason;
      state.status = "frozen";
      state.current_invocation = null;
      state.stop = { reason: stopReason, invocation_id: invocation.id };
      writeJson(statePath, state);
      return state;
    }
    invocation.status = "complete";
    invocation.judgment = judgment;
    invocation.model_reported = parsed.modelReported;
    invocation.wall_ms = raw.wall_ms;
    invocation.result_record = relativePath(resultsRoot, join(resultDir, "run-record.json"));
    state.completed_invocations += 1;
    state.current_invocation = null;
    writeCompletedJudgment({ manifest, state, reviewUnitId: invocation.review_unit_id, resultsRoot });
    state.status = state.completed_invocations === state.scheduled_invocations ? "complete" : "prepared";
    writeJson(statePath, state);
  }
  return state;
}

function relativePath(root, path) {
  return path.slice(resolve(root).length + 1);
}

const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const args = parseArgs();
  const required = ["manifest", "packets", "results", "state", "model"];
  if (required.some((key) => !args.get(key))) {
    console.error(
      "usage: run-automated-review-round.mjs --manifest <private-manifest.json> " +
      "--packets <public-packets> --results <private-results> --state <state.json> " +
      "--model <cursor-model-id> [--timeout-ms 300000] [--pacing-ms 30000] [--max-new-invocations 1]",
    );
    process.exit(2);
  }
  const state = await runAutomatedReviewRound({
    manifestPath: resolve(String(args.get("manifest"))),
    packetsRoot: resolve(String(args.get("packets"))),
    resultsRoot: resolve(String(args.get("results"))),
    statePath: resolve(String(args.get("state"))),
    model: String(args.get("model")),
    timeoutMs: Number(args.get("timeout-ms") ?? 300_000),
    pacingMs: Number(args.get("pacing-ms") ?? 30_000),
    maxNewInvocations: Number(args.get("max-new-invocations") ?? 1),
  });
  console.log(JSON.stringify({
    status: state.status,
    completed_invocations: state.completed_invocations,
    scheduled_invocations: state.scheduled_invocations,
    stop: state.stop,
  }, null, 2));
}
