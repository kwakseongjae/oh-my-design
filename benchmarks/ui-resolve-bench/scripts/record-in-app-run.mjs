#!/usr/bin/env node
import { existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { parseArgs, readJson, treeManifest, writeJson } from "./_lib.mjs";

const args = parseArgs();
const workspace = args.get("workspace") ? resolve(String(args.get("workspace"))) : null;
if (!workspace) {
  console.error("usage: record-in-app-run.mjs --workspace <prepared-dir> [--model gpt-5.6-terra] [--reasoning xhigh] [--notes <text>]");
  process.exit(2);
}

const benchmarkDir = join(workspace, ".benchmark");
const manifestPath = join(benchmarkDir, "manifest.json");
const resultPath = join(benchmarkDir, "run-result.json");
if (!existsSync(manifestPath)) throw new Error(`not a prepared workspace: ${workspace}`);
if (existsSync(resultPath)) throw new Error(`refusing to overwrite run metadata: ${resultPath}`);

const manifest = readJson(manifestPath);
const finalTree = treeManifest(workspace, { ignore: [".benchmark"] });
const result = {
  schema_version: "0.1",
  task_id: manifest.task.id,
  variant_id: manifest.variant.id,
  recorded_at: new Date().toISOString(),
  runtime: {
    agent: "codex-app-isolated-worker",
    model: String(args.get("model") ?? "gpt-5.6-terra"),
    reasoning: String(args.get("reasoning") ?? "xhigh"),
    sandbox: "workspace-write",
    network_for_task: false,
  },
  process: {
    exit_code: 0,
    timed_out: false,
    wall_ms: null,
    note: String(args.get("notes") ?? "In-app fallback used because direct nested codex exec was blocked by the desktop data-transmission gate."),
  },
  workspace: {
    initial_sha256: manifest.workspace.initial_sha256,
    final_sha256: finalTree.sha256,
    final_files: finalTree.files.length,
    changed: manifest.workspace.initial_sha256 !== finalTree.sha256,
  },
};
writeJson(resultPath, result);
console.log(JSON.stringify(result, null, 2));
