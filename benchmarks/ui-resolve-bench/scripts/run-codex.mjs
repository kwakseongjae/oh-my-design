#!/usr/bin/env node
import { spawn } from "node:child_process";
import { appendFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { diffTreeManifests, parseArgs, readJson, treeManifest, writeJson } from "./_lib.mjs";
import {
  codexBrowserSandboxSpec,
  prepareIsolatedCodexHome,
  preparedWorkspaceRequiresBrowserProof,
} from "./codex-browser-sandbox-contract.mjs";
import { inspectCodexModelToolMode } from "./codex-tool-mode-contract.mjs";

const args = parseArgs();
const workspace = args.get("workspace") ? resolve(String(args.get("workspace"))) : null;
const model = String(args.get("model") ?? "gpt-5.6-terra");
const reasoning = String(args.get("reasoning") ?? "xhigh");
const timeoutMs = Number(args.get("timeout-ms") ?? 900_000);
const bypassHookTrust = args.get("bypass-hook-trust") === true;
const loadUserConfig = args.get("load-user-config") === true;

if (!workspace) {
  console.error("usage: run-codex.mjs --workspace <prepared-dir> [--model gpt-5.6-terra] [--reasoning xhigh]");
  process.exit(2);
}
const benchmarkDir = join(workspace, ".benchmark");
const manifestPath = join(benchmarkDir, "manifest.json");
const resultPath = join(benchmarkDir, "run-result.json");
if (!existsSync(manifestPath)) throw new Error(`not a prepared benchmark workspace: ${workspace}`);
if (existsSync(resultPath)) throw new Error(`refusing to overwrite completed run: ${resultPath}`);

const manifest = readJson(manifestPath);
if (manifest.runtime_target !== "codex") {
  throw new Error("workspace was not prepared with --runtime codex");
}
const prompt = readFileSync(join(benchmarkDir, "PROMPT.md"), "utf8");
const finalMessagePath = join(benchmarkDir, "final-message.txt");
const eventsPath = join(benchmarkDir, "events.jsonl");
writeFileSync(eventsPath, "", "utf8");
const maxLogBytes = 50 * 1024 * 1024;
const browserProofRequired = preparedWorkspaceRequiresBrowserProof(workspace, { readJson });
const sourceModelToolMode = inspectCodexModelToolMode(model);
const innerCommand = [
  "exec",
  "--ephemeral",
  ...(!loadUserConfig ? ["--ignore-user-config"] : []),
  "--skip-git-repo-check",
  ...(bypassHookTrust ? ["--dangerously-bypass-hook-trust"] : []),
  ...(browserProofRequired ? ["--dangerously-bypass-approvals-and-sandbox"] : ["--sandbox", "workspace-write"]),
  "--cd",
  workspace,
  "--model",
  model,
  "--config",
  `model_reasoning_effort=\"${reasoning}\"`,
  "--json",
  "--output-last-message",
  finalMessagePath,
  "-",
];
const execution = browserProofRequired
  ? codexBrowserSandboxSpec({ workspace, innerArgs: innerCommand })
  : {
      executable: process.env.OMD_BENCH_CODEX_BIN ?? "codex",
      args: innerCommand,
      env: {},
      sandbox: "workspace-write",
    };
if (browserProofRequired) {
  mkdirSync(execution.temp_dir, { recursive: true });
  prepareIsolatedCodexHome(workspace);
}

const startedAt = new Date();
const startedNs = process.hrtime.bigint();
let stdout = "";
let stderr = "";
let timedOut = false;
let logsTruncated = false;
let spawnError = null;

const childEnv = {};
for (const key of ["HOME", "PATH", "CODEX_HOME", "TMPDIR", "LANG", "LC_ALL", "TERM", "USER", "SHELL"]) {
  if (process.env[key]) childEnv[key] = process.env[key];
}
Object.assign(childEnv, {
  DISABLE_TELEMETRY: "1",
  DO_NOT_TRACK: "1",
  CI: "1",
  OMD_PROOF_POLICY_EVENTS_PATH: eventsPath,
  ...execution.env,
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
  const child = spawn(execution.executable, execution.args, {
    cwd: workspace,
    env: childEnv,
    detached: true,
    stdio: ["pipe", "pipe", "pipe"],
  });
  const timer = setTimeout(() => {
    timedOut = true;
    try { process.kill(-child.pid, "SIGTERM"); } catch { child.kill("SIGTERM"); }
  }, timeoutMs);
  child.stdout.on("data", (chunk) => {
    appendFileSync(eventsPath, chunk);
    stdout = appendCapped(stdout, chunk);
  });
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
  child.stdin.end(prompt);
});

const wallMs = Number(process.hrtime.bigint() - startedNs) / 1_000_000;
const executionModelToolMode = browserProofRequired
  ? inspectCodexModelToolMode(model, { OMD_BENCH_AUTH_CODEX_HOME: execution.codex_home })
  : sourceModelToolMode;
const modelToolMode = executionModelToolMode.reason === "model-cache-missing"
  ? sourceModelToolMode
  : executionModelToolMode;
writeFileSync(eventsPath, stdout, "utf8");
writeFileSync(join(benchmarkDir, "stderr.log"), stderr, "utf8");

const events = stdout.split("\n").filter(Boolean).flatMap((line) => {
  try { return [JSON.parse(line)]; } catch { return []; }
});
const usageEvents = events.filter((event) => event.type?.includes("usage") || event.usage || event.token_usage);
const modelReported = events
  .map((event) => event?.model ?? event?.model_id ?? event?.session?.model ?? null)
  .find((value) => typeof value === "string" && value.length > 0) ?? null;
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
    runtime_target: "codex",
    agent: "codex-cli",
    agent_version: process.env.CODEX_VERSION ?? null,
    model_requested: model,
    model_reported: modelReported,
    model_evidence_mode: modelReported ? "provider-observed" : "cli-argument",
    effort_requested: reasoning,
    model_tool_mode: modelToolMode.tool_mode,
    model_tool_mode_evidence: {
      scope: modelToolMode === executionModelToolMode ? "execution-home-post-run" : "auth-source-fallback",
      cache_sha256: modelToolMode.cache_sha256,
      model_profile_sha256: modelToolMode.model_profile_sha256,
      cache_fetched_at: modelToolMode.cache_fetched_at,
      cache_client_version: modelToolMode.cache_client_version,
      auth_source_before_run: {
        cache_sha256: sourceModelToolMode.cache_sha256,
        model_profile_sha256: sourceModelToolMode.model_profile_sha256,
        cache_fetched_at: sourceModelToolMode.cache_fetched_at,
        cache_client_version: sourceModelToolMode.cache_client_version,
      },
    },
    auth_mode: null,
    provider_route: null,
    model,
    reasoning,
    sandbox: execution.sandbox,
    browser_socket_scope: browserProofRequired ? execution.runtime_dir : null,
    codex_home: browserProofRequired ? execution.codex_home : null,
    browser_temp_dir: browserProofRequired ? execution.temp_dir : null,
    ephemeral: true,
    ignored_user_config: !loadUserConfig,
    hook_trust_bypassed: bypassHookTrust,
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
      reason: modelUsage.length > 0 ? null : "provider-stream-contained-no-usage",
    },
    diagnostic_availability: {
      available: false,
      fields: [],
      reason: "codex-stream-diagnostic-normalization-not-supported",
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
    final_message_present: existsSync(finalMessagePath),
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
if (exit.code !== 0 || timedOut || spawnError) process.exitCode = 1;
