#!/usr/bin/env node
import { spawn } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { diffTreeManifests, parseArgs, readJson, treeManifest, writeJson } from "./_lib.mjs";

const args = parseArgs();
const workspace = args.get("workspace") ? resolve(String(args.get("workspace"))) : null;
const model = String(args.get("model") ?? "gpt-5.6-terra");
const reasoning = String(args.get("reasoning") ?? "xhigh");
const timeoutMs = Number(args.get("timeout-ms") ?? 900_000);

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
const prompt = readFileSync(join(benchmarkDir, "PROMPT.md"), "utf8");
const finalMessagePath = join(benchmarkDir, "final-message.txt");
const maxLogBytes = 50 * 1024 * 1024;
const command = [
  "exec",
  "--ephemeral",
  "--ignore-user-config",
  "--skip-git-repo-check",
  "--sandbox",
  "workspace-write",
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

const startedAt = new Date();
const startedNs = process.hrtime.bigint();
let stdout = "";
let stderr = "";
let timedOut = false;
let logsTruncated = false;

const childEnv = {};
for (const key of ["HOME", "PATH", "CODEX_HOME", "TMPDIR", "LANG", "LC_ALL", "TERM", "USER", "SHELL"]) {
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

const exit = await new Promise((resolveExit, reject) => {
  const child = spawn("codex", command, {
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
const usageEvents = events.filter((event) => event.type?.includes("usage") || event.usage || event.token_usage);
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
    agent: "codex-cli",
    agent_version: process.env.CODEX_VERSION ?? null,
    model,
    reasoning,
    sandbox: "workspace-write",
    ephemeral: true,
    ignored_user_config: true,
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
if (exit.code !== 0 || timedOut) process.exitCode = 1;
