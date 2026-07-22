#!/usr/bin/env node
import { spawn } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { diffTreeManifests, parseArgs, readJson, treeManifest, writeJson } from "./_lib.mjs";
import { inspectClaudeRunner, summarizeClaudeUsage } from "./check-claude-runner.mjs";

const args = parseArgs();
const workspace = args.get("workspace") ? resolve(String(args.get("workspace"))) : null;
const model = String(args.get("model") ?? "claude-opus-4-8");
const effort = String(args.get("effort") ?? "xhigh");
const timeoutMs = Number(args.get("timeout-ms") ?? 900_000);

if (!workspace) {
  console.error("usage: run-claude.mjs --workspace <prepared-dir> [--model claude-opus-4-8] [--effort xhigh]");
  process.exit(2);
}
const benchmarkDir = join(workspace, ".benchmark");
const manifestPath = join(benchmarkDir, "manifest.json");
const resultPath = join(benchmarkDir, "run-result.json");
if (!existsSync(manifestPath)) throw new Error(`not a prepared benchmark workspace: ${workspace}`);
if (existsSync(resultPath)) throw new Error(`refusing to overwrite completed run: ${resultPath}`);

const manifest = readJson(manifestPath);
if (manifest.runtime_target !== "claude-code") {
  throw new Error("workspace was not prepared with --runtime claude-code");
}
const readiness = inspectClaudeRunner({ model });
if (!readiness.ready) throw new Error(readiness.next_action ?? "Claude runner preflight failed");

const prompt = readFileSync(join(benchmarkDir, "PROMPT.md"), "utf8");
const finalMessagePath = join(benchmarkDir, "final-message.txt");
const maxLogBytes = 50 * 1024 * 1024;
const runnerSettings = JSON.stringify({
  sandbox: {
    enabled: true,
    failIfUnavailable: true,
    autoAllowBashIfSandboxed: true,
    allowUnsandboxedCommands: false,
  },
  permissions: {
    allow: [
      "Read(./**)",
      "Edit(./**)",
      "Write(./**)",
      "Glob(./**)",
      "Grep(./**)",
      "Bash",
    ],
    deny: [
      "Read(../**)",
      "Edit(../**)",
      "Write(../**)",
      "Glob(../**)",
      "Grep(../**)",
      "WebFetch",
      "WebSearch",
    ],
  },
  includeCoAuthoredBy: false,
  includeGitInstructions: false,
});
const command = [
  "-p",
  "--model", model,
  "--effort", effort,
  "--output-format", "stream-json",
  "--verbose",
  "--no-session-persistence",
  "--no-chrome",
  "--setting-sources", "project",
  "--strict-mcp-config",
  "--mcp-config", '{"mcpServers":{}}',
  "--settings", runnerSettings,
  "--permission-mode", "dontAsk",
  "--tools", "Read,Edit,Write,Glob,Grep,Bash",
];

const startedAt = new Date();
const startedNs = process.hrtime.bigint();
let stdout = "";
let stderr = "";
let timedOut = false;
let logsTruncated = false;

const childEnv = {};
for (const key of ["HOME", "PATH", "TMPDIR", "LANG", "LC_ALL", "TERM", "USER", "SHELL"]) {
  if (process.env[key]) childEnv[key] = process.env[key];
}
Object.assign(childEnv, {
  CLAUDE_CODE_SUBPROCESS_ENV_SCRUB: "1",
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

const exit = await new Promise((resolveExit, reject) => {
  const child = spawn("claude", command, {
    cwd: workspace,
    env: childEnv,
    detached: true,
    stdio: ["pipe", "pipe", "pipe"],
  });
  const timer = setTimeout(() => {
    timedOut = true;
    try { process.kill(-child.pid, "SIGTERM"); } catch { child.kill("SIGTERM"); }
  }, timeoutMs);
  child.stdout.on("data", (chunk) => { stdout = appendCapped(stdout, chunk); });
  child.stderr.on("data", (chunk) => { stderr = appendCapped(stderr, chunk); });
  child.on("error", (error) => {
    clearTimeout(timer);
    reject(error);
  });
  child.on("close", (code, signal) => {
    clearTimeout(timer);
    resolveExit({ code, signal });
  });
  child.stdin.end(prompt);
});

const wallMs = Number(process.hrtime.bigint() - startedNs) / 1_000_000;
writeFileSync(join(benchmarkDir, "events.jsonl"), stdout, "utf8");
writeFileSync(join(benchmarkDir, "stderr.log"), stderr, "utf8");
const events = stdout.split("\n").filter(Boolean).flatMap((line) => {
  try { return [JSON.parse(line)]; } catch { return []; }
});
const resultEvent = [...events].reverse().find((event) => event.type === "result") ?? null;
const initEvent = events.find((event) => event.type === "system" && event.subtype === "init") ?? null;
const normalizedUsage = summarizeClaudeUsage(resultEvent);
const usageEvents = normalizedUsage.totals ? [{
  type: "claude_result_usage",
  usage: normalizedUsage.totals,
}] : [];
const finalMessage = typeof resultEvent?.result === "string" ? resultEvent.result : "";
if (finalMessage) writeFileSync(finalMessagePath, finalMessage, "utf8");

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
  schema_version: "0.1",
  task_id: manifest.task.id,
  variant_id: manifest.variant.id,
  started_at: startedAt.toISOString(),
  finished_at: new Date().toISOString(),
  runtime: {
    agent: "claude-code",
    agent_version: readiness.version,
    model,
    model_reported: initEvent?.model ?? resultEvent?.model ?? null,
    effort,
    sandbox: "claude-native-strict",
    ephemeral: true,
    setting_sources: ["project"],
    mcp_disabled: true,
  },
  process: {
    exit_code: exit.code,
    signal: exit.signal,
    timed_out: timedOut,
    wall_ms: Math.round(wallMs),
  },
  output: {
    event_count: events.length,
    usage_events: usageEvents,
    total_cost_usd: Number.isFinite(Number(resultEvent?.total_cost_usd))
      ? Number(resultEvent.total_cost_usd)
      : null,
    model_usage: normalizedUsage.models,
    final_message_present: Boolean(finalMessage),
    stderr_bytes: Buffer.byteLength(stderr),
    logs_truncated: logsTruncated,
    result_subtype: resultEvent?.subtype ?? null,
    result_is_error: resultEvent?.is_error ?? null,
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
if (exit.code !== 0 || timedOut || resultEvent?.is_error === true) process.exitCode = 1;
