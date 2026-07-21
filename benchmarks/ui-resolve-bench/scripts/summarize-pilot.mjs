#!/usr/bin/env node
import { existsSync, readdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { benchRoot, parseArgs, readJson, writeJson } from "./_lib.mjs";

const args = parseArgs();
const runsRoot = args.get("runs") ? resolve(String(args.get("runs"))) : null;
const out = args.get("out") ? resolve(String(args.get("out"))) : null;
const attributionPath = args.get("attribution") ? resolve(String(args.get("attribution"))) : null;
if (!runsRoot || !out) {
  console.error("usage: summarize-pilot.mjs --runs <parent-dir> --out <summary.json> [--attribution <file.json>]");
  process.exit(2);
}

const competitors = readJson(join(benchRoot, "competitors.json"));
const preregisteredOrder = new Map(
  competitors.preregistered_variant_order.map((variantId, index) => [variantId, index]),
);
const attribution = attributionPath ? readJson(attributionPath) : { artifacts: {} };
const rows = [];
for (const name of readdirSync(runsRoot).sort()) {
  const benchmarkDir = join(runsRoot, name, ".benchmark");
  const manifestPath = join(benchmarkDir, "manifest.json");
  if (!existsSync(manifestPath)) continue;
  const manifest = readJson(manifestPath);
  const run = existsSync(join(benchmarkDir, "run-result.json")) ? readJson(join(benchmarkDir, "run-result.json")) : null;
  const score = existsSync(join(benchmarkDir, "score.json")) ? readJson(join(benchmarkDir, "score.json")) : null;
  let runStatus = "complete";
  if (!run) runStatus = "incomplete";
  else if (run.process?.timed_out) runStatus = "timed_out";
  else if (run.process?.exit_code !== 0) runStatus = "failed";
  else if (!score) runStatus = "incomplete";
  const automatedGatePass = runStatus === "complete"
    ? score?.status?.automated_gate_pass ?? (score?.critical_gates
      ? Object.values(score.critical_gates).every((gate) => gate === true)
      : null)
    : null;
  rows.push({
    directory: name,
    variant_id: manifest.variant.id,
    label: manifest.variant.label,
    preregistered_order: preregisteredOrder.get(manifest.variant.id) ?? null,
    run_status: runStatus,
    skill_sha256: manifest.skill?.sha256 ?? null,
    runtime: run?.runtime ?? null,
    changed: run?.workspace?.changed ?? null,
    automated_gate_pass: automatedGatePass,
    deterministic_score: runStatus === "complete" ? score?.points?.deterministic_total ?? null : null,
    deterministic_max: runStatus === "complete" ? score?.points?.deterministic_max ?? 85 : 85,
    gates: runStatus === "complete" ? score?.critical_gates ?? null : null,
    screenshots: {
      desktop: existsSync(join(benchmarkDir, "screenshots", "desktop.png")),
      mobile: existsSync(join(benchmarkDir, "screenshots", "mobile.png")),
    },
    attribution: attribution.artifacts?.[name] ?? {
      status: "unreviewed",
      reason: "No explicit activation/install attribution review was supplied.",
    },
  });
}

rows.sort((left, right) => {
  const leftOrder = left.preregistered_order ?? Number.MAX_SAFE_INTEGER;
  const rightOrder = right.preregistered_order ?? Number.MAX_SAFE_INTEGER;
  return leftOrder - rightOrder || left.directory.localeCompare(right.directory);
});
const hasInvalidAttribution = rows.some((row) => row.attribution.status === "invalid-attribution");
const result = {
  schema_version: "0.1",
  generated_at: new Date().toISOString(),
  status: "internal-pilot",
  disclaimer: "One public fixture with nonuniform exploratory trials cannot support a best-skill or public leaderboard claim. Ship Preference and efficiency remain unscored." +
    (hasInvalidAttribution ? " Invalid-attribution artifacts are retained but excluded from comparisons." : ""),
  rows,
};
writeJson(out, result);

const markdown = [
  "# UI-Resolve Bench internal pilot",
  "",
  "> One public fixture with exploratory trials. Diagnostic only; not a public leaderboard.",
  "",
  "| Variant | Trial artifact | Run | Attribution | Deterministic | Automated gates | Changed |",
  "|---|---|---|---|---:|---:|---:|",
  ...rows.map((row) => `| ${row.label} | \`${row.directory}\` | ${row.run_status} | ${row.attribution.status} | ${row.deterministic_score == null ? "—" : `${row.deterministic_score}/${row.deterministic_max}`} | ${row.automated_gate_pass == null ? "—" : row.automated_gate_pass ? "pass" : "fail"} | ${row.changed == null ? "—" : row.changed ? "yes" : "no"} |`),
  "",
  "Ship Preference must be added through blinded pairwise review. Efficiency is absent for in-app fallback runs and is not normalized here." +
    (hasInvalidAttribution ? " Invalid-attribution artifacts are diagnostic traces only and must not be credited to the named skill." : ""),
  "",
].join("\n");
writeFileSync(out.replace(/\.json$/i, ".md"), markdown, "utf8");
console.log(markdown);
