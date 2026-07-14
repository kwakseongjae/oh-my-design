#!/usr/bin/env node
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

type Market = "KR" | "TW" | "JP" | "US";
interface Candidate { id: string; name: string; displayName: string; country?: Market; category: string; homepage: string; routes?: string[]; maxRoutes?: number }
interface Manifest { schemaVersion: 1; asOf: string; markets: Record<Market, Candidate[]> }
interface Evidence { surfaces?: unknown[]; components?: unknown[]; coverage?: { score?: number; interactionCount?: number } }

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "../..");
const option = (name: string, fallback?: string) => {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : fallback;
};
const manifestPath = resolve(ROOT, option("--manifest", "config/reference-create-global40.json")!);
const manifest = JSON.parse(readFileSync(manifestPath, "utf8")) as Manifest;
if (manifest.schemaVersion !== 1) throw new Error("unsupported create manifest");
const market = option("--market") as Market | undefined;
if (market && !manifest.markets[market]) throw new Error(`unknown market ${market}`);
const requestedIds = new Set((option("--ids", "") ?? "").split(",").map((value) => value.trim()).filter(Boolean));
const selected = (market ? manifest.markets[market] : Object.values(manifest.markets).flat())
  .filter((candidate) => requestedIds.size === 0 || requestedIds.has(candidate.id))
  .map((candidate) => ({ ...candidate, country: candidate.country ?? market ?? Object.entries(manifest.markets).find(([, rows]) => rows.some((row) => row.id === candidate.id))?.[0] as Market }));
const statePath = resolve(ROOT, option("--out", `artifacts/reference-create/${manifest.asOf}-global40.json`)!);
const existing = existsSync(statePath) ? JSON.parse(readFileSync(statePath, "utf8")) as { results?: Record<string, unknown> } : {};
const results = { ...(existing.results ?? {}) } as Record<string, unknown>;

async function run(command: string, args: string[], timeoutMs = 150_000): Promise<void> {
  await new Promise<void>((resolveChild, reject) => {
    const child = spawn(command, args, { cwd: ROOT, stdio: "inherit", shell: false });
    let timedOut = false;
    const timer = setTimeout(() => { timedOut = true; child.kill("SIGTERM"); }, timeoutMs);
    child.once("error", (error) => { clearTimeout(timer); reject(error); });
    child.once("exit", (code) => {
      clearTimeout(timer);
      if (code === 0) resolveChild();
      else reject(new Error(timedOut ? `${command} timed out` : `${command} exited ${code}`));
    });
  });
}

mkdirSync(dirname(statePath), { recursive: true });
for (const candidate of selected) {
  const designPath = resolve(ROOT, "web/references", candidate.id, "DESIGN.md");
  if (existsSync(designPath)) {
    results[candidate.id] = { candidate, status: "duplicate" };
    continue;
  }
  const evidencePath = resolve(ROOT, "artifacts/reference-evidence", `${candidate.id}.json`);
  try {
    if (!process.argv.includes("--reuse") || !existsSync(evidencePath)) {
      const args = ["--prefix", "web", "run", "capture:reference", "--", candidate.homepage, "--id", candidate.id, "--max-routes", String(candidate.maxRoutes ?? 3), "--baseline-only", "--no-interactions"];
      if (candidate.routes?.length) args.push("--routes", candidate.routes.join(","));
      await run("npm", args);
    }
    const evidence = JSON.parse(readFileSync(evidencePath, "utf8")) as Evidence;
    const surfaces = evidence.surfaces?.length ?? 0;
    const components = evidence.components?.length ?? 0;
    const coverage = evidence.coverage?.score ?? 0;
    const status = surfaces >= 2 && coverage >= 60 && components >= 1 ? "ready" : "hold";
    results[candidate.id] = { candidate, status, evidence: { path: evidencePath, surfaces, components, coverage, interactions: evidence.coverage?.interactionCount ?? 0 } };
  } catch (error) {
    results[candidate.id] = { candidate, status: "failed", error: error instanceof Error ? error.message : String(error) };
  }
  writeFileSync(statePath, `${JSON.stringify({ schemaVersion: 1, asOf: manifest.asOf, manifest: manifestPath, results }, null, 2)}\n`);
}
const counts = Object.values(results).reduce<Record<string, number>>((acc, value) => {
  const status = (value as { status?: string }).status ?? "unknown";
  acc[status] = (acc[status] ?? 0) + 1;
  return acc;
}, {});
writeFileSync(statePath, `${JSON.stringify({ schemaVersion: 1, asOf: manifest.asOf, manifest: manifestPath, counts, results }, null, 2)}\n`);
console.log(`[create-capture] ${JSON.stringify(counts)} -> ${statePath}`);
