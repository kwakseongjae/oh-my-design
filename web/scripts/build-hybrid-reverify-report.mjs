#!/usr/bin/env node

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const manifestPath = resolve(ROOT, "config/hybrid-reverify-v2.json");
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
if (manifest.schemaVersion !== 1) throw new Error(`unsupported manifest schema: ${manifest.schemaVersion}`);

const qaPath = resolve(ROOT, `artifacts/reverify/inapp-qa-verified-v2-${manifest.asOf}.json`);
if (!existsSync(qaPath)) throw new Error(`in-app QA result missing: ${qaPath}`);
const qa = JSON.parse(readFileSync(qaPath, "utf8"));
if (qa.schemaVersion !== 1) throw new Error(`unsupported QA schema: ${qa.schemaVersion}`);

const rows = [];
const results = [];
for (const entry of manifest.references) {
  const evidencePath = resolve(ROOT, `artifacts/reference-evidence/${entry.id}.json`);
  if (!existsSync(evidencePath)) throw new Error(`evidence missing: ${entry.id}`);
  const evidence = JSON.parse(readFileSync(evidencePath, "utf8"));
  if (evidence.referenceId !== entry.id || evidence.schemaVersion !== 1) {
    throw new Error(`invalid evidence: ${entry.id}`);
  }
  const visual = qa.references?.[entry.id];
  if (!visual) throw new Error(`in-app QA missing: ${entry.id}`);
  const qaPass = [visual.official, visual.desktop, visual.mobile375, visual.fontBoundary].every((value) => value === "pass")
    && visual.overflow === false;
  const capturePass = evidence.surfaces.length >= 2 && typeof evidence.coverage?.score === "number";
  const status = capturePass && qaPass ? "pass" : "hold";
  const result = {
    id: entry.id,
    status,
    officialUrl: entry.officialUrl,
    captureBudget: entry.captureBudget,
    capturedAt: evidence.capturedAt,
    surfaces: evidence.surfaces.length,
    colors: evidence.colors.length,
    fonts: evidence.fonts.length,
    components: evidence.components.length,
    interactions: evidence.interactions.length,
    coverage: evidence.coverage.score,
    qa: visual,
  };
  results.push(result);
  rows.push(`| ${entry.id} | ${status} | ${result.surfaces}/${entry.captureBudget} | ${result.coverage} | ${result.components} | ${result.interactions} | ${visual.fontBoundary} |`);
}

const report = {
  schemaVersion: 1,
  asOf: manifest.asOf,
  policy: manifest.policy,
  summary: {
    total: results.length,
    pass: results.filter((result) => result.status === "pass").length,
    hold: results.filter((result) => result.status === "hold").length,
  },
  results,
};
const outputJson = resolve(ROOT, `artifacts/reverify/hybrid-audit-verified-v2-${manifest.asOf}.json`);
const outputMd = outputJson.replace(/\.json$/, ".md");
mkdirSync(dirname(outputJson), { recursive: true });
writeFileSync(outputJson, `${JSON.stringify(report, null, 2)}\n`, "utf8");
writeFileSync(outputMd, `# Verified v2 hybrid audit — ${manifest.asOf}\n\n` +
  `- Result: ${report.summary.pass} pass / ${report.summary.hold} hold / ${report.summary.total} total\n` +
  `- Pipeline: fresh deterministic capture → official in-app QA → desktop + 375px local QA → deterministic acceptance\n\n` +
  `| Reference | Status | Surfaces/Budget | Coverage | Components | Interactions | Font boundary |\n` +
  `|---|---|---:|---:|---:|---:|---|\n${rows.join("\n")}\n`, "utf8");
console.log(`[hybrid-reverify] ${report.summary.pass} pass / ${report.summary.hold} hold → ${outputJson}`);
if (report.summary.hold > 0) process.exitCode = 1;
