#!/usr/bin/env node
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

type Market = "KR" | "TW" | "JP" | "US";
interface Candidate { id: string; name: string; displayName: string; category: string; homepage: string }
interface Manifest { schemaVersion: 1; asOf: string; modelPolicy: { profile: string; reasoningEffort: string }; markets: Record<Market, Candidate[]> }
interface CaptureResult { candidate: Candidate & { country?: Market }; status: string; evidence?: { path: string; surfaces: number; components: number; coverage: number } }

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "../..");
const option = (name: string, fallback?: string) => { const i = process.argv.indexOf(name); return i >= 0 ? process.argv[i + 1] : fallback; };
const manifestPath = resolve(ROOT, option("--manifest", "config/reference-create-global40.json")!);
const statePath = resolve(ROOT, option("--state", "artifacts/reference-create/2026-07-13-global40.json")!);
const manifest = JSON.parse(readFileSync(manifestPath, "utf8")) as Manifest;
const state = JSON.parse(readFileSync(statePath, "utf8")) as { results: Record<string, CaptureResult>; create?: Record<string, unknown> };
const market = option("--market") as Market | undefined;
const concurrency = Number(option("--concurrency", "3"));
if (!Number.isInteger(concurrency) || concurrency < 1 || concurrency > 4) throw new Error("concurrency must be 1..4");
const candidateMarket = new Map<string, Market>();
for (const [country, candidates] of Object.entries(manifest.markets) as [Market, Candidate[]][]) for (const candidate of candidates) candidateMarket.set(candidate.id, country);
const tasks = Object.values(state.results).filter((result) => result.status === "ready" && (!market || candidateMarket.get(result.candidate.id) === market));
const create = { ...(state.create ?? {}) } as Record<string, unknown>;

async function run(command: string, args: string[], timeoutMs = 60 * 60_000): Promise<void> {
  await new Promise<void>((resolveChild, reject) => {
    const child = spawn(command, args, { cwd: ROOT, stdio: "inherit", shell: false });
    const timer = setTimeout(() => child.kill("SIGTERM"), timeoutMs);
    child.once("error", (error) => { clearTimeout(timer); reject(error); });
    child.once("exit", (code) => {
      clearTimeout(timer);
      if (code === 0) resolveChild();
      else reject(new Error(`${command} exited ${code}`));
    });
  });
}
function persist() {
  writeFileSync(statePath, `${JSON.stringify({ ...state, create }, null, 2)}\n`);
}
async function execute(result: CaptureResult) {
  const candidate = result.candidate;
  const country = candidateMarket.get(candidate.id)!;
  const runDir = resolve(ROOT, "artifacts/reference-create/runs", `${manifest.asOf}-${candidate.id}`);
  const packet = resolve(runDir, "packet.md");
  const log = resolve(runDir, "run.json");
  mkdirSync(runDir, { recursive: true });
  writeFileSync(packet, [
    `# Create reference — ${candidate.name} (${candidate.id})`, "",
    `- Date: ${manifest.asOf}`,
    `- Country: ${country}`,
    `- Category: ${candidate.category}`,
    `- Homepage: ${candidate.homepage}`,
    `- Display name: ${candidate.displayName}`,
    `- Evidence: artifacts/reference-evidence/${candidate.id}.json`,
    `- Evidence preflight: ${result.evidence?.surfaces} surfaces / coverage ${result.evidence?.coverage} / ${result.evidence?.components} component variants`, "",
    "## Required result", "",
    "Create a complete OmD v0.1 reference using CREATE mode. Unknown values must be absent at the smallest boundary. The deterministic evaluator, not the worker, decides publication trust.", "",
  ].join("\n"));
  const startedAt = new Date().toISOString();
  try {
    const adapterArgs = ["web/scripts/adapters/run-codex-create.mjs", "--packet", packet, "--reference", candidate.id, "--evidence", resolve(ROOT, `artifacts/reference-evidence/${candidate.id}.json`), "--workspace", ROOT, "--model", manifest.modelPolicy.profile, "--reasoning", manifest.modelPolicy.reasoningEffort];
    if (existsSync(resolve(ROOT, "web/references", candidate.id, "DESIGN.md"))) adapterArgs.push("--repair");
    await run("node", adapterArgs);
    await run("node", ["web/scripts/verify-reference.mjs", candidate.id, "--no-net"], 10 * 60_000);
    create[candidate.id] = { status: "complete", country, packet, startedAt, finishedAt: new Date().toISOString() };
  } catch (error) {
    create[candidate.id] = { status: "failed", country, packet, startedAt, finishedAt: new Date().toISOString(), error: error instanceof Error ? error.message : String(error) };
  }
  writeFileSync(log, `${JSON.stringify(create[candidate.id], null, 2)}\n`);
  persist();
}

let cursor = 0;
await Promise.all(Array.from({ length: Math.min(concurrency, tasks.length) }, async () => {
  while (cursor < tasks.length) {
    const task = tasks[cursor++];
    const prior = create[task.candidate.id] as { status?: string } | undefined;
    if (prior?.status === "complete") continue;
    await execute(task);
  }
}));
const counts = Object.values(create).reduce<Record<string, number>>((acc, row) => { const status = (row as { status?: string }).status ?? "unknown"; acc[status] = (acc[status] ?? 0) + 1; return acc; }, {});
console.log(`[create-run] ${JSON.stringify(counts)} (${tasks.length} ready)`);
