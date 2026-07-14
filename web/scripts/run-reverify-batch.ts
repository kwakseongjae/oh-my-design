#!/usr/bin/env node
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { REFERENCE_QUALITY } from "../src/data/reference-quality.generated.ts";
import type { ReverifyCommand, ReverifyQueue, ReverifyTask } from "../src/lib/reverify/queue.ts";

const WEB_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const ROOT = resolve(WEB_ROOT, "..");

function option(name: string, fallback?: string): string | undefined {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : fallback;
}

function loadJson<T>(path: string): T {
  return JSON.parse(readFileSync(path, "utf8")) as T;
}

interface EvidenceArtifact {
  readonly surfaces?: unknown[];
  readonly components?: unknown[];
  readonly coverage?: { readonly score?: number };
}

interface PreviousRun {
  readonly status?: string;
  readonly modelProfile?: string;
  readonly reasoningEffort?: string;
}

interface BatchTaskState {
  readonly id: string;
  disposition: string;
  readonly reasons: string[];
  readonly evidence?: { surfaces: number; components: number; coverage: number };
  readonly resumedFrom?: string;
  startedAt?: string;
  finishedAt?: string;
  error?: string;
}

interface BatchState {
  readonly schemaVersion: number;
  readonly queue: string;
  readonly modelProfile: string;
  readonly reasoningEffort: string;
  readonly batchSize: number;
  readonly batchNumber: number | "all";
  readonly execute: boolean;
  readonly startedAt: string;
  readonly tasks: BatchTaskState[];
  updatedAt?: string;
  finishedAt?: string;
  status?: "failed" | "complete";
}

async function run(command: ReverifyCommand, timeoutMs: number): Promise<void> {
  await new Promise<void>((resolveChild, reject) => {
    const child = spawn(command.executable, [...command.args], {
      cwd: ROOT,
      env: process.env,
      shell: false,
      stdio: "inherit",
    });
    const timer = setTimeout(() => {
      child.kill("SIGTERM");
      setTimeout(() => child.kill("SIGKILL"), 5_000).unref();
    }, timeoutMs);
    child.once("error", (error) => {
      clearTimeout(timer);
      reject(error);
    });
    child.once("exit", (code, signal) => {
      clearTimeout(timer);
      if (code === 0) resolveChild();
      else reject(new Error(`${command.executable} exited ${code ?? signal}`));
    });
  });
}

const queuePath = resolve(ROOT, option("--queue", "artifacts/reverify/queue-batches-01-04.json")!);
const adapterPath = resolve(ROOT, option("--adapter", "config/reverify-runner.codex-terra.example.json")!);
const batchSize = Number(option("--batch-size", "10"));
const batchNumber = Number(option("--batch", "1"));
const allBatches = process.argv.includes("--all-batches");
const execute = process.argv.includes("--execute");
const minSurfaces = Number(option("--min-surfaces", "2"));
const minCoverage = Number(option("--min-coverage", "60"));
const timeoutMs = Number(option("--timeout-minutes", "75")) * 60_000;

if (!existsSync(queuePath)) throw new Error(`queue missing: ${queuePath}`);
if (!existsSync(adapterPath)) throw new Error(`adapter missing: ${adapterPath}`);
if (!Number.isInteger(batchSize) || batchSize < 1) throw new Error(`invalid --batch-size: ${batchSize}`);
if (!Number.isInteger(batchNumber) || batchNumber < 1) throw new Error(`invalid --batch: ${batchNumber}`);
if (!Number.isFinite(minCoverage) || minCoverage < 0 || minCoverage > 100) throw new Error(`invalid --min-coverage: ${minCoverage}`);

const queue = loadJson<ReverifyQueue>(queuePath);
if (queue.modelPolicy.profile !== "gpt-5.6-terra" || queue.modelPolicy.reasoningEffort !== "high") {
  throw new Error(`batch runner requires gpt-5.6-terra/high; queue has ${queue.modelPolicy.profile}/${queue.modelPolicy.reasoningEffort}`);
}

const batchCount = Math.ceil(queue.tasks.length / batchSize);
if (batchNumber > batchCount) throw new Error(`batch ${batchNumber} exceeds ${batchCount}`);
const tasks = allBatches
  ? [...queue.tasks]
  : queue.tasks.slice((batchNumber - 1) * batchSize, batchNumber * batchSize);
const qualityById = new Map<string, (typeof REFERENCE_QUALITY)[number]>(
  REFERENCE_QUALITY.map((entry) => [entry.id, entry]),
);

function triage(task: ReverifyTask): BatchTaskState {
  const quality = qualityById.get(task.id);
  const evidencePath = resolve(ROOT, task.worker.evidenceArtifact);
  if (!existsSync(evidencePath)) {
    return {
      id: task.id,
      disposition: quality?.status === "verified_v2" ? "audit_required" : "hold",
      reasons: ["evidence_missing"],
    };
  }
  const evidence = loadJson<EvidenceArtifact>(evidencePath);
  const surfaces = Array.isArray(evidence.surfaces) ? evidence.surfaces.length : 0;
  const components = Array.isArray(evidence.components) ? evidence.components.length : 0;
  const coverage = typeof evidence.coverage?.score === "number" ? evidence.coverage.score : 0;
  const reasons: string[] = [];
  if (surfaces < minSurfaces) reasons.push(`surfaces_${surfaces}_below_${minSurfaces}`);
  if (coverage < minCoverage) reasons.push(`coverage_${coverage}_below_${minCoverage}`);
  if (components === 0) reasons.push("components_missing");
  if (quality?.status === "verified_v2") {
    return {
      id: task.id,
      disposition: reasons.length ? "audit_required" : "already_verified",
      reasons,
      evidence: { surfaces, components, coverage },
    };
  }
  const runPath = resolve(ROOT, "artifacts", "reverify", "runs", `${queue.asOf}-${task.id}`, "run.json");
  if (reasons.length === 0 && existsSync(runPath)) {
    const previousRun = loadJson<PreviousRun>(runPath);
    if (
      previousRun.status === "complete"
      && previousRun.modelProfile === "gpt-5.6-terra"
      && previousRun.reasoningEffort === "high"
    ) {
      return {
        id: task.id,
        disposition: "promoted",
        reasons: [] as string[],
        evidence: { surfaces, components, coverage },
        resumedFrom: runPath,
      };
    }
  }
  return {
    id: task.id,
    disposition: reasons.length ? "hold" : "ready",
    reasons,
    evidence: { surfaces, components, coverage },
  };
}

const statePath = resolve(ROOT, "artifacts", "reverify", allBatches
  ? "batch-state-01-04.json"
  : `batch-state-${String(batchNumber).padStart(2, "0")}.json`);
mkdirSync(dirname(statePath), { recursive: true });
const state: BatchState = {
  schemaVersion: 1,
  queue: queuePath,
  modelProfile: queue.modelPolicy.profile,
  reasoningEffort: queue.modelPolicy.reasoningEffort,
  batchSize,
  batchNumber: allBatches ? "all" : batchNumber,
  execute,
  startedAt: new Date().toISOString(),
  tasks: tasks.map(triage),
};

function saveState() {
  state.updatedAt = new Date().toISOString();
  writeFileSync(statePath, `${JSON.stringify(state, null, 2)}\n`, "utf8");
}

saveState();
for (const item of state.tasks) {
  console.log(`[reverify-batch] ${item.id}: ${item.disposition}${item.reasons.length ? ` (${item.reasons.join(", ")})` : ""}`);
}

if (!execute) {
  console.log(`[reverify-batch] plan written to ${statePath}`);
  process.exit(0);
}

for (const item of state.tasks) {
  if (item.disposition !== "ready") continue;
  item.disposition = "running";
  item.startedAt = new Date().toISOString();
  saveState();
  try {
    await run({
      executable: "npm",
      args: [
        "--prefix", "web", "run", "reverify:run", "--",
        "--queue", queuePath,
        "--id", item.id,
        "--execute",
        "--skip-capture",
        "--acceptance-scope", "reference",
        "--adapter", adapterPath,
      ],
    }, timeoutMs);
    item.disposition = "promoted";
    item.finishedAt = new Date().toISOString();
    saveState();
  } catch (error) {
    item.disposition = "failed";
    item.error = error instanceof Error ? error.message : String(error);
    item.finishedAt = new Date().toISOString();
    state.status = "failed";
    saveState();
    throw error;
  }
}

const promoted = state.tasks.filter((item) => item.disposition === "promoted");
if (promoted.length > 0) {
  const batchAcceptance: ReverifyCommand[] = [
    { executable: "npm", args: ["--prefix", "web", "run", "check:reference-pipeline:reverify"] },
    { executable: "npm", args: ["--prefix", "web", "test"] },
    { executable: "npm", args: ["--prefix", "web", "run", "typecheck"] },
  ];
  for (const command of batchAcceptance) await run(command, timeoutMs);
}
state.status = "complete";
state.finishedAt = new Date().toISOString();
saveState();
console.log(`[reverify-batch] complete: ${promoted.length} promoted, ${state.tasks.filter((item) => item.disposition === "hold").length} held`);
