#!/usr/bin/env node
import { spawn, spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import {
  existsSync,
  readFileSync,
  realpathSync,
  writeFileSync,
} from "node:fs";
import { homedir } from "node:os";
import { join, resolve } from "node:path";
import { diffTreeManifests, parseArgs, readJson, treeManifest, writeJson } from "./_lib.mjs";
import { isCursorLiveModelAllowed } from "./runtime-contract.mjs";

const args = parseArgs();
const workspaceInput = args.get("workspace") ? resolve(String(args.get("workspace"))) : null;
const workspace = workspaceInput && existsSync(workspaceInput) ? realpathSync(workspaceInput) : workspaceInput;
const model = String(args.get("model") ?? "");
const effort = String(args.get("effort") ?? "high");
const timeoutMs = Number(args.get("timeout-ms") ?? 900_000);
const fakeRuntime = process.env.OMD_BENCH_FAKE_RUNTIME === "1";

if (!workspace || !model) {
  console.error("usage: run-cursor.mjs --workspace <prepared-dir> --model <exact-id> [--effort high]");
  process.exit(2);
}
if (!fakeRuntime && !isCursorLiveModelAllowed(model)) {
  throw new Error(`Cursor live model is outside the fixed pilot allowlist: ${model}`);
}

const benchmarkDir = join(workspace, ".benchmark");
const manifestPath = join(benchmarkDir, "manifest.json");
const resultPath = join(benchmarkDir, "run-result.json");
if (!existsSync(manifestPath)) throw new Error(`not a prepared benchmark workspace: ${workspace}`);
if (existsSync(resultPath)) throw new Error(`refusing to overwrite completed run: ${resultPath}`);
const manifest = readJson(manifestPath);
if (manifest.runtime_target !== "cursor") {
  throw new Error("workspace was not prepared with --runtime cursor");
}

const cursorBinary = process.env.OMD_CURSOR_AGENT_BIN
  ?? join(homedir(), ".local", "bin", "cursor-agent");
const versionProbe = spawnSync(cursorBinary, ["--version"], { encoding: "utf8" });
const agentVersion = versionProbe.status === 0 ? versionProbe.stdout.trim() : null;
const binarySha256 = existsSync(cursorBinary)
  ? createHash("sha256").update(readFileSync(cursorBinary)).digest("hex")
  : null;
const prompt = readFileSync(join(benchmarkDir, "PROMPT.md"), "utf8");
const finalMessagePath = join(benchmarkDir, "final-message.txt");
const command = [
  "-p",
  "--output-format", "stream-json",
  "--model", model,
  "--sandbox", "enabled",
  "--trust",
  "--workspace", workspace,
  prompt,
];
const maxLogBytes = 50 * 1024 * 1024;
const startedAt = new Date();
const startedNs = process.hrtime.bigint();
let stdout = "";
let stderr = "";
let timedOut = false;
let logsTruncated = false;
let spawnError = null;

const childEnv = {};
for (const key of ["HOME", "PATH", "TMPDIR", "LANG", "LC_ALL", "TERM", "USER", "SHELL"]) {
  if (process.env[key]) childEnv[key] = process.env[key];
}
Object.assign(childEnv, {
  DISABLE_TELEMETRY: "1",
  DO_NOT_TRACK: "1",
  CI: "1",
});

const appendCapped = (current, chunk) => {
  if (Buffer.byteLength(current) >= maxLogBytes) {
    logsTruncated = true;
    return current;
  }
  const next = `${current}${chunk.toString()}`;
  if (Buffer.byteLength(next) <= maxLogBytes) return next;
  logsTruncated = true;
  return Buffer.from(next).subarray(0, maxLogBytes).toString("utf8");
};

const exit = await new Promise((resolveExit) => {
  const child = spawn(cursorBinary, command, {
    cwd: workspace,
    env: childEnv,
    detached: true,
    stdio: ["ignore", "pipe", "pipe"],
  });
  const timer = setTimeout(() => {
    timedOut = true;
    try { process.kill(-child.pid, "SIGTERM"); } catch { child.kill("SIGTERM"); }
  }, timeoutMs);
  child.stdout.on("data", (chunk) => { stdout = appendCapped(stdout, chunk); });
  child.stderr.on("data", (chunk) => { stderr = appendCapped(stderr, chunk); });
  child.on("error", (error) => {
    clearTimeout(timer);
    spawnError = error.message;
    resolveExit({ code: null, signal: null });
  });
  child.on("close", (code, signal) => {
    clearTimeout(timer);
    resolveExit({ code, signal });
  });
});

const wallMs = Number(process.hrtime.bigint() - startedNs) / 1_000_000;
writeFileSync(join(benchmarkDir, "events.jsonl"), stdout, "utf8");
writeFileSync(join(benchmarkDir, "stderr.log"), stderr, "utf8");
const events = stdout.split("\n").filter(Boolean).flatMap((line) => {
  try { return [JSON.parse(line)]; } catch { return []; }
});
const modelReported = events
  .map((event) => (
    event?.model
    ?? event?.model_id
    ?? event?.data?.model
    ?? event?.session?.model
    ?? null
  ))
  .find((value) => typeof value === "string" && value.length > 0) ?? null;
const resultEvent = [...events].reverse().find((event) => (
  event?.type === "result"
  || event?.type === "agent.result"
  || event?.subtype === "result"
)) ?? null;
const finalMessage = [
  resultEvent?.result,
  resultEvent?.text,
  resultEvent?.message?.text,
  typeof resultEvent?.message === "string" ? resultEvent.message : null,
].find((value) => typeof value === "string" && value.trim().length > 0) ?? "";
if (finalMessage) writeFileSync(finalMessagePath, finalMessage, "utf8");

const usageEvents = events.filter((event) => event.type?.includes("usage") || event.usage || event.token_usage);
const modelUsage = usageEvents.flatMap((event) => {
  const usage = event?.usage ?? event?.token_usage;
  if (!usage) return [];
  return [{
    model: event?.model ?? event?.model_id ?? modelReported ?? model,
    input_tokens: Number(usage.input_tokens ?? usage.inputTokens ?? 0),
    cached_input_tokens: Number(usage.cached_input_tokens ?? usage.cachedInputTokens ?? 0),
    output_tokens: Number(usage.output_tokens ?? usage.outputTokens ?? 0),
    cost_usd: Number.isFinite(Number(usage.cost_usd ?? usage.costUSD))
      ? Number(usage.cost_usd ?? usage.costUSD)
      : null,
    context_window: null,
    max_output_tokens: null,
  }];
});

const finalTree = treeManifest(workspace, { ignore: [".benchmark"] });
const initialProductTree = {
  sha256: manifest.workspace.product_initial_sha256,
  files: manifest.workspace.product_initial_files ?? [],
};
const finalProductTree = treeManifest(workspace, {
  ignore: manifest.workspace.product_ignore ?? [".benchmark"],
});
const changedProductFiles = diffTreeManifests(initialProductTree, finalProductTree);
const productChanged = initialProductTree.sha256 !== finalProductTree.sha256;
const result = {
  schema_version: "0.2",
  task_id: manifest.task.id,
  variant_id: manifest.variant.id,
  started_at: startedAt.toISOString(),
  finished_at: new Date().toISOString(),
  runtime: {
    runtime_target: "cursor",
    agent: "cursor-agent",
    agent_version: agentVersion,
    binary_sha256: binarySha256,
    model_requested: model,
    model_reported: modelReported,
    model_evidence_mode: modelReported ? "provider-observed" : "cli-argument",
    effort_requested: effort,
    provider_effort_argument: null,
    auth_mode: fakeRuntime ? "fake-calibration" : "cursor-account",
    provider_route: fakeRuntime ? "fake-calibration" : "cursor",
    model,
    effort,
    sandbox: "cursor-enabled",
    ephemeral: true,
  },
  process: {
    exit_code: exit.code,
    child_exit_code: exit.code,
    signal: exit.signal,
    timed_out: timedOut,
    spawn_error: spawnError,
    wall_ms: Math.round(wallMs),
  },
  output: {
    event_count: events.length,
    usage_events: usageEvents,
    model_usage: modelUsage,
    usage_attribution: {
      available: modelUsage.length > 0,
      evidence_mode: modelUsage.length > 0 ? "provider-event" : "unavailable",
      reason: modelUsage.length > 0 ? null : "cursor-stream-contained-no-usage",
    },
    diagnostic_availability: {
      available: false,
      fields: [],
      reason: "cursor-stream-diagnostic-normalization-not-supported",
    },
    tool_error_count: null,
    recoverable_tool_error_count: null,
    infrastructure_tool_error_count: null,
    optional_verifier_environment_error_count: null,
    recovered_temp_path_error_count: null,
    sandbox_error_count: null,
    sandbox_cwd_error_count: null,
    agent_tool_call_count: null,
    agent_tool_error_count: null,
    requested_agent_ids: [],
    agent_calls: [],
    final_message_present: Boolean(finalMessage),
    stderr_bytes: Buffer.byteLength(stderr),
    logs_truncated: logsTruncated,
  },
  workspace: {
    initial_sha256: manifest.workspace.initial_sha256,
    final_sha256: finalTree.sha256,
    final_files: finalTree.files.length,
    full_tree_changed: manifest.workspace.initial_sha256 !== finalTree.sha256,
    product_initial_sha256: initialProductTree.sha256,
    product_final_sha256: finalProductTree.sha256,
    product_changed: productChanged,
    changed_product_files: changedProductFiles,
    changed: productChanged,
  },
};
writeJson(resultPath, result);
console.log(JSON.stringify(result, null, 2));
if (exit.code !== 0 || timedOut || spawnError || !finalMessage) process.exitCode = 1;
