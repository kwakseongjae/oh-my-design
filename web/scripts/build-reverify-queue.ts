#!/usr/bin/env node
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { REGISTRY_BY_ID } from "../src/data/registry.generated.ts";
import { REFERENCE_QUALITY } from "../src/data/reference-quality.generated.ts";
import {
  buildReverifyQueue,
  type ReverifyCandidate,
} from "../src/lib/reverify/queue.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const WEB_ROOT = resolve(__dirname, "..");
const ROOT = resolve(WEB_ROOT, "..");

function option(name: string, fallback?: string): string | undefined {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : fallback;
}

const asOf = option("--as-of", new Date().toISOString().slice(0, 10))!;
const limit = Number(option("--limit", "20"));
const horizonDays = Number(option("--horizon-days", "30"));
const output = resolve(option("--out", "../artifacts/reverify/queue.json")!);
const summaryOutput = output.replace(/\.json$/i, ".md");
const idsValue = option("--ids")?.trim();
const ids = idsValue ? new Set(idsValue.split(",").map((id) => id.trim()).filter(Boolean)) : undefined;
const demandPath = option("--demand");
const demandDocument = demandPath
  ? JSON.parse(readFileSync(resolve(demandPath), "utf8")) as Record<string, unknown>
  : {};
const demand = (
  demandDocument.scores && typeof demandDocument.scores === "object"
    ? demandDocument.scores
    : demandDocument
) as Record<string, number>;
const captureConfigPath = join(ROOT, "config", "reference-capture-routes.json");
const captureConfig = JSON.parse(readFileSync(captureConfigPath, "utf8")) as {
  schemaVersion?: number;
  references?: Record<string, string[] | { routes: string[]; maxRoutes?: number }>;
};
if (captureConfig.schemaVersion !== 1) throw new Error(`unsupported capture route config: ${captureConfig.schemaVersion}`);
const captureMaxRoutesById = Object.fromEntries(Object.entries(captureConfig.references ?? {}).flatMap(([id, entry]) =>
  !Array.isArray(entry) && entry.maxRoutes !== undefined ? [[id, entry.maxRoutes]] : [],
));

if (!/^\d{4}-\d{2}-\d{2}$/.test(asOf)) throw new Error(`invalid --as-of: ${asOf}`);
if (!Number.isInteger(limit) || limit < 1) throw new Error(`invalid --limit: ${limit}`);
if (!Number.isInteger(horizonDays) || horizonDays < 0) throw new Error(`invalid --horizon-days: ${horizonDays}`);

const candidates: ReverifyCandidate[] = REFERENCE_QUALITY.map((quality) => {
  const entry = REGISTRY_BY_ID[quality.id];
  if (!entry) throw new Error(`registry entry missing for ${quality.id}`);
  return {
    ...quality,
    name: entry.displayName || entry.name,
    category: entry.category,
    demandScore: demand[quality.id] ?? 0,
  };
});
const queue = buildReverifyQueue(candidates, {
  asOf,
  limit,
  horizonDays,
  ids,
  modelProfile: option("--model-profile"),
  reasoningEffort: option("--reasoning-effort"),
  captureMaxRoutesById,
});

mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, `${JSON.stringify(queue, null, 2)}\n`, "utf8");
const rows = queue.tasks.map((task, index) =>
  `| ${index + 1} | ${task.id} | ${task.currentStatus} | ${task.priority} | ${task.reasonCodes.join(", ") || "scheduled"} |`,
);
const summary = `# Reverify queue\n\n` +
  `- As of: ${queue.asOf}\n` +
  `- Selected: ${queue.tasks.length} / ${queue.totalCandidates}\n` +
  `- Model policy: ${queue.modelPolicy.profile} · ${queue.modelPolicy.reasoningEffort}\n\n` +
  `| # | Reference | Status | Priority | Reasons |\n|---:|---|---|---:|---|\n${rows.join("\n")}\n`;
writeFileSync(summaryOutput, summary, "utf8");
console.log(`[reverify] wrote ${queue.tasks.length}/${queue.totalCandidates} tasks to ${output}`);
