#!/usr/bin/env node
/**
 * prepare-multipage-cells.mjs — bookshop-multipage measured run (provider-zero).
 *
 * 4 arms x 1 multi-page task: model-only baseline, ui-ux-pro-max, hallmark,
 * omd-autopilot-v2 (patch 7, controller lane). Same starter + shared assets
 * for every arm. Budget disclosed uniformly by the runner invocation.
 *
 * Usage: prepare-multipage-cells.mjs --out <fresh-root>
 */

import { createHash } from "node:crypto";
import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";

function parseArgs(argv) {
  const map = new Map();
  for (let i = 0; i < argv.length; i += 1) if (argv[i].startsWith("--")) { map.set(argv[i].slice(2), argv[i + 1]); i += 1; }
  return map;
}
const args = parseArgs(process.argv.slice(2));
if (!args.has("out")) { console.error("usage: prepare-multipage-cells.mjs --out <fresh-root> [--task bookshop-multipage] [--pages a.html,b.html,...] [--budget-ms 1500000]"); process.exit(1); }
const outRoot = resolve(args.get("out"));
if (existsSync(outRoot)) { console.error(`refusing to reuse existing root: ${outRoot}`); process.exit(1); }

const FIXTURES = resolve("benchmarks/ui-resolve-bench/fixtures");
const PACKS = join(FIXTURES, "competitor-skills-2.0");
const TASK = args.get("task") ?? "bookshop-multipage";
const PAGES = (args.get("pages") ?? "index.html,events.html,event-detail.html,visit.html").split(",");
const BUDGET = Number(args.get("budget-ms") ?? 1500000);
const PREFIX_CONFIG = JSON.parse(readFileSync(resolve("benchmarks/ui-resolve-bench/config/omd-grok46-activation-prefixes-v0.1.json"), "utf8"));
const BOUNDARY = "Benchmark runtime boundary: keep every generated file and temporary validation artifact inside the current workspace (use .benchmark/tmp when needed), except an exact cell-local staging path explicitly disclosed by the controller for an arm whose native package adopter requires source/destination separation. Do not read or write any other external path, including /tmp, and do not launch or control browsers or use network access; the external evaluator owns browser checks.";
const ARMS = [
  { id: "model-only", pack: null, prefixKey: null },
  { id: "ui-ux-pro-max", pack: "ui-ux-pro-max", prefixKey: "ui-ux-pro-max" },
  { id: "hallmark", pack: "hallmark", prefixKey: "hallmark" },
  { id: "omd-autopilot-v2", pack: "omd-autopilot-v2", prefixKey: "omd-autopilot-v2" },
];
function prefixFor(key) {
  if (!key) return null;
  const entry = PREFIX_CONFIG.prefixes?.[key] ?? PREFIX_CONFIG[key];
  if (!entry) throw new Error(`no activation prefix for ${key}`);
  return typeof entry === "string" ? entry : entry.prefix;
}
const sha256 = (value) => createHash("sha256").update(value).digest("hex");

const starter = join(FIXTURES, "showcase-2.0", TASK, "starter");
const brief = readFileSync(join(FIXTURES, "showcase-2.0", TASK, "BRIEF.md"), "utf8").trim();
const assets = readdirSync(join(starter, "assets")).filter((name) => /\.(png|jpe?g|webp)$/.test(name));
if (assets.length === 0) throw new Error("no generated assets — run generate-task-assets first");

let order = 0;
const manifest = [];
for (const arm of ARMS) {
  order += 1;
  const cellId = `${TASK}-grok46-mp1-${arm.id}`;
  const cellDir = join(outRoot, "prepared-cells", cellId);
  mkdirSync(join(cellDir, ".benchmark"), { recursive: true });
  cpSync(starter, cellDir, { recursive: true });
  if (arm.pack) cpSync(join(PACKS, arm.pack, ".agents"), join(cellDir, ".agents"), { recursive: true });
  const prefix = prefixFor(arm.prefixKey);
  const invocation = `${prefix ? `${prefix}\n\n` : ""}${brief}\n\n${BOUNDARY}`;
  writeFileSync(join(cellDir, ".benchmark", "PROMPT.md"), brief);
  writeFileSync(join(cellDir, ".benchmark", "invocation-prompt.txt"), invocation);
  const cell = {
    schema_version: "0.1", kind: "multipage-measured-cell",
    experiment_id: "omd-grok46-multipage-consistency-v0.1", cell_id: cellId, order,
    task: { id: TASK, pages: PAGES, prompt_bytes: Buffer.byteLength(brief), prompt_sha256: sha256(brief) },
    arm: { kind: arm.id, variant_id: arm.id, activation_prefix: prefix, skill_pack: arm.pack },
    variant_id: arm.id, activation_prefix: prefix,
    activation_prefix_sha256: prefix ? sha256(prefix) : null,
    invocation_prompt_sha256: sha256(invocation),
    shared_assets: assets.map((name) => ({ file: name, sha256: sha256(readFileSync(join(starter, "assets", name))) })),
    runtime: { provider: "grok-build-cli", runtime_target: "grok", model_id: "grok-4.6", effort: "high" },
    execution_control: { serial: true, retries: 0, budget_ms: BUDGET, budget_note: "uniform for every arm" },
  };
  writeFileSync(join(cellDir, ".benchmark", "cell.json"), `${JSON.stringify(cell, null, 1)}\n`);
  writeFileSync(join(cellDir, ".benchmark", "manifest.json"), `${JSON.stringify({ schema_version: "0.1", cell_id: cellId, runtime_target: "grok", model_id: "grok-4.6", effort: "high" }, null, 1)}\n`);
  manifest.push({ order, cell_id: cellId, arm: arm.id });
}
writeFileSync(join(outRoot, "MULTIPAGE-MATRIX.json"), `${JSON.stringify({ schema_version: "0.1", experiment_id: "omd-grok46-multipage-consistency-v0.1", cells: manifest }, null, 1)}\n`);
console.log(JSON.stringify({ out: outRoot, cells: manifest.length }));
