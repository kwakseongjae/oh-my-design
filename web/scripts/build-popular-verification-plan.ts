#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { REFERENCE_QUALITY } from "../src/data/reference-quality.generated.ts";

const WEB_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const ROOT = resolve(WEB_ROOT, "..");

function option(name: string, fallback: string): string {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : fallback;
}

const sourcePath = resolve(ROOT, option("--source", "data/analytics/raw/upstash.json"));
const outputPath = resolve(ROOT, option("--out", "artifacts/reverify/popular-top100-plan.json"));
const limit = Number(option("--limit", "100"));
const minSurfaces = Number(option("--min-surfaces", "2"));
const minCoverage = Number(option("--min-coverage", "60"));
const batchSize = Number(option("--batch-size", "10"));

interface PopularityRow {
  readonly reference: string;
  readonly select?: number;
  readonly generate?: number;
  readonly download?: number;
  readonly copy?: number;
  readonly install?: number;
}

if (!existsSync(sourcePath)) throw new Error(`popularity source missing: ${sourcePath}`);
if (!Number.isInteger(limit) || limit < 1) throw new Error(`invalid --limit: ${limit}`);
if (!Number.isInteger(batchSize) || batchSize < 1) throw new Error(`invalid --batch-size: ${batchSize}`);

const source = JSON.parse(readFileSync(sourcePath, "utf8"));
const funnel = (Array.isArray(source.funnel) ? source.funnel : []) as PopularityRow[];
if (funnel.length < limit) throw new Error(`popularity source has ${funnel.length} references; ${limit} required`);
const qualityById = new Map<string, (typeof REFERENCE_QUALITY)[number]>(
  REFERENCE_QUALITY.map((entry) => [entry.id, entry]),
);

let sequence = 0;
const cohort = funnel.slice(0, limit).map((row, index) => {
  const id = String(row.reference);
  const quality = qualityById.get(id);
  if (!quality) throw new Error(`quality entry missing for popular reference: ${id}`);
  const evidencePath = resolve(ROOT, "artifacts", "reference-evidence", `${id}.json`);
  const evidence = existsSync(evidencePath) ? JSON.parse(readFileSync(evidencePath, "utf8")) : null;
  const evidenceSummary = evidence ? {
    capturedAt: evidence.capturedAt ?? null,
    surfaces: Array.isArray(evidence.surfaces) ? evidence.surfaces.length : 0,
    coverage: typeof evidence.coverage?.score === "number" ? evidence.coverage.score : 0,
    components: Array.isArray(evidence.components) ? evidence.components.length : 0,
  } : null;
  const evidenceReady = Boolean(
    evidenceSummary
    && evidenceSummary.surfaces >= minSurfaces
    && evidenceSummary.coverage >= minCoverage
    && evidenceSummary.components >= 1,
  );
  const verified = quality.status === "verified_v2";
  if (!verified) sequence += 1;
  return {
    popularityRank: index + 1,
    sequence: verified ? null : sequence,
    executionBatch: verified ? null : Math.ceil(sequence / batchSize),
    id,
    popularity: {
      select: Number(row.select ?? 0),
      generate: Number(row.generate ?? 0),
      download: Number(row.download ?? 0),
      copy: Number(row.copy ?? 0),
      install: Number(row.install ?? 0),
      qualified: Number(row.download ?? 0) + Number(row.copy ?? 0) + Number(row.install ?? 0),
    },
    currentStatus: quality.status,
    reasonCodes: quality.reasonCodes,
    evidence: evidenceSummary,
    disposition: verified ? "verified" : evidenceReady ? "ready_for_terra_high" : "recapture_required",
  };
});

const counts = cohort.reduce<Record<string, number>>((result, item) => {
  result[item.disposition] = (result[item.disposition] ?? 0) + 1;
  return result;
}, {});
const invalidVerified = REFERENCE_QUALITY.filter((quality) => quality.status === "verified_v2").flatMap((quality) => {
  const evidencePath = resolve(ROOT, "artifacts", "reference-evidence", `${quality.id}.json`);
  if (!existsSync(evidencePath)) return [{ id: quality.id, reason: "evidence_missing" }];
  const evidence = JSON.parse(readFileSync(evidencePath, "utf8"));
  const surfaces = Array.isArray(evidence.surfaces) ? evidence.surfaces.length : 0;
  const coverage = typeof evidence.coverage?.score === "number" ? evidence.coverage.score : 0;
  const components = Array.isArray(evidence.components) ? evidence.components.length : 0;
  const reasons = [
    ...(surfaces < minSurfaces ? [`surfaces_${surfaces}_below_${minSurfaces}`] : []),
    ...(coverage < minCoverage ? [`coverage_${coverage}_below_${minCoverage}`] : []),
    ...(components < 1 ? ["components_missing"] : []),
  ];
  return reasons.length ? [{ id: quality.id, reason: reasons.join(",") }] : [];
});
const document = {
  schemaVersion: 1,
  generatedAt: new Date().toISOString(),
  popularitySource: sourcePath,
  popularityCapturedAt: source._meta?.pulledAt ?? null,
  popularityMetric: "Upstash cumulative reference select; qualified actions are tie/context evidence",
  modelPolicy: { profile: "gpt-5.6-terra", reasoningEffort: "high", authority: "evidence_worker_only" },
  releaseGate: {
    cohortSize: limit,
    requiredVerified: limit,
    currentVerified: counts.verified ?? 0,
    remaining: limit - (counts.verified ?? 0),
    unresolvedInvalidVerified: invalidVerified.length,
    invalidVerified,
  },
  execution: {
    mode: "sequential_one_reference",
    batchSize,
    batchCount: Math.ceil(sequence / batchSize),
    preflight: { minSurfaces, minCoverage, minComponents: 1 },
  },
  counts,
  cohort,
};

const markdownPath = outputPath.replace(/\.json$/i, ".md");
const rows = cohort.map((item) =>
  `| ${item.popularityRank} | ${item.sequence ?? "—"} | ${item.id} | ${item.popularity.select} | ${item.popularity.qualified} | ${item.currentStatus} | ${item.disposition} |`,
);
const markdown = `# Popular Top 100 verification plan\n\n`
  + `- Popularity snapshot: ${document.popularityCapturedAt ?? "unknown"}\n`
  + `- Current gate: ${document.releaseGate.currentVerified}/${limit} Verified v2\n`
  + `- Remaining sequential work: ${document.releaseGate.remaining}\n`
  + `- Terra policy: gpt-5.6-terra / high\n`
  + `- Batches: ${document.execution.batchCount} × up to ${batchSize}; references still execute one at a time\n\n`
  + `| Popular rank | Sequence | Reference | Select | Qualified | Current | Next |\n`
  + `|---:|---:|---|---:|---:|---|---|\n${rows.join("\n")}\n`;

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, `${JSON.stringify(document, null, 2)}\n`, "utf8");
writeFileSync(markdownPath, markdown, "utf8");
console.log(`[popular-plan] ${counts.verified ?? 0}/${limit} verified, ${sequence} remaining → ${outputPath}`);
