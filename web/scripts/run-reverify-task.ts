#!/usr/bin/env node
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { ReferenceEvidenceBundle } from "../src/lib/references/evidence.ts";
import type { ReverifyCommand, ReverifyQueue } from "../src/lib/reverify/queue.ts";
import {
  buildReverifyPacket,
  renderAdapterCommand,
  selectReverifyTask,
  validateRunnerAdapter,
} from "../src/lib/reverify/runner.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const WEB_ROOT = resolve(__dirname, "..");
const ROOT = resolve(WEB_ROOT, "..");

function option(name: string): string | undefined {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

function loadJson(path: string): unknown {
  return JSON.parse(readFileSync(path, "utf8"));
}

async function runCommand(
  command: ReverifyCommand,
  options: { cwd: string; timeoutMs: number; env?: NodeJS.ProcessEnv },
): Promise<void> {
  await new Promise<void>((resolveChild, reject) => {
    const child = spawn(command.executable, [...command.args], {
      cwd: options.cwd,
      env: options.env ?? process.env,
      stdio: "inherit",
      shell: false,
    });
    let timedOut = false;
    const timer = setTimeout(() => {
      timedOut = true;
      child.kill("SIGTERM");
      setTimeout(() => child.kill("SIGKILL"), 5_000).unref();
    }, options.timeoutMs);
    child.once("error", (error) => {
      clearTimeout(timer);
      reject(error);
    });
    child.once("exit", (code, signal) => {
      clearTimeout(timer);
      if (code === 0) resolveChild();
      else reject(new Error(timedOut
        ? `${command.executable} timed out`
        : `${command.executable} exited ${code ?? signal}`));
    });
  });
}

function validateEvidence(path: string, referenceId: string, minimumSurfaces: number): ReferenceEvidenceBundle {
  if (!existsSync(path)) throw new Error(`evidence artifact missing: ${path}`);
  const bundle = loadJson(path) as Partial<ReferenceEvidenceBundle>;
  if (bundle.schemaVersion !== 1) throw new Error(`unsupported evidence schema: ${bundle.schemaVersion}`);
  if (bundle.referenceId !== referenceId) throw new Error(`evidence referenceId ${bundle.referenceId} != ${referenceId}`);
  if (!Array.isArray(bundle.surfaces) || bundle.surfaces.length < minimumSurfaces) {
    throw new Error(`evidence has ${bundle.surfaces?.length ?? 0} captured surfaces; ${minimumSurfaces} required`);
  }
  if (!bundle.coverage || typeof bundle.coverage.score !== "number") throw new Error("evidence coverage is missing");
  return bundle as ReferenceEvidenceBundle;
}

const queuePath = resolve(ROOT, option("--queue") ?? "artifacts/reverify/queue.json");
const adapterPath = option("--adapter") ? resolve(ROOT, option("--adapter")!) : undefined;
const id = option("--id");
const execute = process.argv.includes("--execute");
const captureOnly = process.argv.includes("--capture-only");
const acceptanceOnly = process.argv.includes("--acceptance-only");
const skipCapture = process.argv.includes("--skip-capture");
const skipAcceptance = process.argv.includes("--skip-acceptance");
const acceptanceScope = option("--acceptance-scope") ?? "full";
if (acceptanceScope !== "full" && acceptanceScope !== "reference") {
  throw new Error(`invalid --acceptance-scope: ${acceptanceScope}`);
}
if ([execute, captureOnly, acceptanceOnly].filter(Boolean).length > 1) {
  throw new Error("--execute, --capture-only, and --acceptance-only are mutually exclusive");
}
if (!id) throw new Error("--id is required; the runner intentionally processes one reference per invocation");
if (!existsSync(queuePath)) throw new Error(`queue missing: ${queuePath}`);

const queue = loadJson(queuePath) as ReverifyQueue;
if (queue.schemaVersion !== 1) throw new Error(`unsupported queue schema: ${queue.schemaVersion}`);
const task = selectReverifyTask(queue, id);
const adapterDocument = adapterPath
  ? loadJson(adapterPath)
  : process.env.OMD_REVERIFY_ADAPTER_JSON
    ? JSON.parse(process.env.OMD_REVERIFY_ADAPTER_JSON)
    : loadJson(resolve(ROOT, "config", "reverify-runner.example.json"));
const adapter = validateRunnerAdapter(adapterDocument);
if (adapter.limits.maxTasksPerRun !== 1 || adapter.limits.maxPullRequestsPerRun !== 1) {
  throw new Error("v1 runner requires maxTasksPerRun=1 and maxPullRequestsPerRun=1");
}
const billingMode = adapter.billingMode ?? "usage";
const requestedBudget = option("--budget-usd");
if (billingMode === "subscription" && requestedBudget !== undefined) {
  throw new Error("--budget-usd is not valid for a subscription adapter");
}
const budgetUsd = billingMode === "usage"
  ? Number(requestedBudget ?? Math.min(1, adapter.limits.maxBudgetUsd))
  : null;
if (billingMode === "usage" && (
  !Number.isFinite(budgetUsd)
  || (budgetUsd ?? 0) <= 0
  || (budgetUsd ?? 0) > adapter.limits.maxBudgetUsd
)) {
  throw new Error(`budget ${budgetUsd} exceeds adapter maximum ${adapter.limits.maxBudgetUsd}`);
}

const runDir = resolve(ROOT, "artifacts", "reverify", "runs", `${queue.asOf}-${task.id}`);
const packetPath = resolve(runDir, "packet.md");
const logPath = resolve(runDir, "run.json");
mkdirSync(runDir, { recursive: true });
writeFileSync(packetPath, buildReverifyPacket(queue, task), "utf8");

const evidencePath = resolve(ROOT, task.worker.evidenceArtifact);
const timeoutMs = adapter.limits.timeoutMinutes * 60_000;
const log: Record<string, unknown> = {
  schemaVersion: 1,
  referenceId: task.id,
  queueDate: queue.asOf,
  adapter: adapter.name,
  billingMode,
  modelProfile: queue.modelPolicy.profile,
  reasoningEffort: queue.modelPolicy.reasoningEffort,
  budgetUsd,
  mode: execute ? "execute" : captureOnly ? "capture-only" : acceptanceOnly ? "acceptance-only" : "dry-run",
  acceptanceScope,
  packet: packetPath,
  evidenceArtifact: evidencePath,
  startedAt: new Date().toISOString(),
};

try {
  if (!execute && !captureOnly && !acceptanceOnly) {
    const preview = renderAdapterCommand(adapter, {
      packet: packetPath,
      referenceId: task.id,
      modelProfile: queue.modelPolicy.profile,
      reasoningEffort: queue.modelPolicy.reasoningEffort,
      budgetUsd: budgetUsd === null ? "" : String(budgetUsd),
      workspace: ROOT,
      evidenceArtifact: evidencePath,
    });
    log.status = "dry-run-ready";
    log.commandPreview = { executable: preview.executable, args: preview.args };
    console.log(`[reverify-runner] dry run ready for ${task.id}: ${packetPath}`);
  } else {
    if (!skipCapture && !acceptanceOnly) {
      console.log(`[reverify-runner] capture ${task.id}`);
      await runCommand(task.worker.captureCommand, { cwd: ROOT, timeoutMs });
    }
    const evidence = validateEvidence(evidencePath, task.id, execute || acceptanceOnly ? 2 : 1);
    log.capture = {
      surfaces: evidence.surfaces.length,
      components: evidence.components.length,
      interactions: evidence.coverage.interactionCount ?? 0,
      score: evidence.coverage.score,
    };
    if (execute) {
      const rendered = renderAdapterCommand(adapter, {
        packet: packetPath,
        referenceId: task.id,
        modelProfile: queue.modelPolicy.profile,
        reasoningEffort: queue.modelPolicy.reasoningEffort,
        budgetUsd: budgetUsd === null ? "" : String(budgetUsd),
        workspace: ROOT,
        evidenceArtifact: evidencePath,
      });
      const env = { ...process.env };
      env.OMD_REVERIFY_REFERENCE_ID = task.id;
      env.OMD_REVERIFY_MODEL_PROFILE = queue.modelPolicy.profile;
      env.OMD_REVERIFY_REASONING_EFFORT = queue.modelPolicy.reasoningEffort;
      env.OMD_REVERIFY_BILLING_MODE = billingMode;
      if (budgetUsd !== null) env.OMD_REVERIFY_BUDGET_USD = String(budgetUsd);
      for (const key of adapter.passEnvironment ?? []) {
        if (!process.env[key]) throw new Error(`required adapter environment variable is missing: ${key}`);
      }
      let attempts = 0;
      let lastError: unknown;
      while (attempts <= adapter.limits.maxRetries) {
        attempts += 1;
        try {
          console.log(`[reverify-runner] worker ${task.id} attempt ${attempts}`);
          await runCommand(rendered, { cwd: ROOT, timeoutMs, env });
          lastError = undefined;
          break;
        } catch (error) {
          lastError = error;
        }
      }
      if (lastError) throw lastError;
      log.workerAttempts = attempts;
      if (!skipAcceptance) {
        const acceptanceCommands = acceptanceScope === "reference"
          ? task.acceptanceCommands.slice(0, 1)
          : task.acceptanceCommands;
        for (const command of acceptanceCommands) {
          console.log(`[reverify-runner] acceptance ${command.executable} ${command.args.join(" ")}`);
          await runCommand(command, { cwd: ROOT, timeoutMs });
        }
      }
      log.status = "complete";
    } else if (acceptanceOnly) {
      const acceptanceCommands = acceptanceScope === "reference"
        ? task.acceptanceCommands.slice(0, 1)
        : task.acceptanceCommands;
      for (const command of acceptanceCommands) {
        console.log(`[reverify-runner] acceptance ${command.executable} ${command.args.join(" ")}`);
        await runCommand(command, { cwd: ROOT, timeoutMs });
      }
      log.status = "complete";
    } else {
      log.status = "capture-complete";
    }
  }
} catch (error) {
  log.status = "failed";
  log.error = error instanceof Error ? error.message : String(error);
  throw error;
} finally {
  log.finishedAt = new Date().toISOString();
  writeFileSync(logPath, `${JSON.stringify(log, null, 2)}\n`, "utf8");
  console.log(`[reverify-runner] log ${logPath}`);
}
