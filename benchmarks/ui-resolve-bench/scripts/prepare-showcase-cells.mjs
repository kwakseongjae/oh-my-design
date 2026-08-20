#!/usr/bin/env node
/**
 * prepare-showcase-cells.mjs — Showcase 2.0 cell preparation (provider-zero).
 *
 * 7 arms x 3 image-centric tasks = 21 cells. Every arm starts from the SAME
 * starter tree (blank shell + shared generated assets); skill arms get their
 * frozen pack installed at .agents/skills/. The OmD arm keeps its authority-
 * controller lane (run-grok46-omd-cell.mjs); all other arms run plain
 * run-grok.mjs. This is a showcase (human final judgment + uniform audit),
 * not the preregistered gate.
 *
 * Usage: prepare-showcase-cells.mjs --out <fresh-root>
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
if (!args.has("out")) { console.error("usage: prepare-showcase-cells.mjs --out <fresh-root>"); process.exit(1); }
const outRoot = resolve(args.get("out"));
if (existsSync(outRoot)) { console.error(`refusing to reuse existing root: ${outRoot}`); process.exit(1); }

const FIXTURES = resolve("benchmarks/ui-resolve-bench/fixtures");
const PACKS = join(FIXTURES, "competitor-skills-2.0");
const TASKS = ["roastery-landing", "trail-gear-gallery", "plan-picker-react"];
const PREFIX_CONFIG = JSON.parse(readFileSync(resolve("benchmarks/ui-resolve-bench/config/omd-grok46-activation-prefixes-v0.1.json"), "utf8"));
const BOUNDARY = "Benchmark runtime boundary: keep every generated file and temporary validation artifact inside the current workspace (use .benchmark/tmp when needed), except an exact cell-local staging path explicitly disclosed by the controller for an arm whose native package adopter requires source/destination separation. Do not read or write any other external path, including /tmp, and do not launch or control browsers or use network access; the external evaluator owns browser checks.";

const ARMS = [
  { id: "model-only", pack: null, prefixKey: null },
  { id: "anthropic-frontend-design", pack: "anthropic-frontend-design", prefixKey: "anthropic-frontend-design" },
  { id: "impeccable-prompt-only", pack: "impeccable-prompt-only", prefixKey: "impeccable-prompt-only" },
  { id: "ui-ux-pro-max", pack: "ui-ux-pro-max", prefixKey: "ui-ux-pro-max" },
  { id: "taste-eligible-scope-only", pack: "taste-eligible-scope-only", prefixKey: "taste-eligible-scope-only" },
  { id: "omd-autopilot-v2", pack: "omd-autopilot-v2", prefixKey: "omd-autopilot-v2" },
  { id: "hallmark", pack: "hallmark", prefixKey: "hallmark" },
];
function prefixFor(key) {
  if (!key) return null;
  const entry = PREFIX_CONFIG.prefixes?.[key] ?? PREFIX_CONFIG[key];
  if (!entry) throw new Error(`no activation prefix for ${key}`);
  return typeof entry === "string" ? entry : entry.prefix;
}
const sha256 = (value) => createHash("sha256").update(value).digest("hex");

let order = 0;
const manifest = [];
for (const task of TASKS) {
  const starter = join(FIXTURES, "showcase-2.0", task, "starter");
  const brief = readFileSync(join(FIXTURES, "showcase-2.0", task, "BRIEF.md"), "utf8").trim();
  const assets = readdirSync(join(starter, "assets")).filter((name) => /\.(png|jpe?g|webp)$/.test(name));
  if (assets.length === 0) throw new Error(`no generated assets for ${task} — run generate-task-assets first`);
  for (const arm of ARMS) {
    order += 1;
    const cellId = `${task}-grok46-sc1-${arm.id}`;
    const cellDir = join(outRoot, "prepared-cells", cellId);
    mkdirSync(join(cellDir, ".benchmark"), { recursive: true });
    cpSync(starter, cellDir, { recursive: true });
    if (arm.pack) cpSync(join(PACKS, arm.pack, ".agents"), join(cellDir, ".agents"), { recursive: true });
    const prefix = prefixFor(arm.prefixKey);
    const invocation = `${prefix ? `${prefix}\n\n` : ""}${brief}\n\n${BOUNDARY}`;
    writeFileSync(join(cellDir, ".benchmark", "PROMPT.md"), brief);
    writeFileSync(join(cellDir, ".benchmark", "invocation-prompt.txt"), invocation);
    const cell = {
      schema_version: "0.1", kind: "showcase-2.0-prepared-cell",
      experiment_id: "omd-grok46-showcase-2.0-v0.1", cell_id: cellId, order,
      task: { id: task, prompt_bytes: Buffer.byteLength(brief), prompt_sha256: sha256(brief) },
      arm: { kind: arm.id, variant_id: arm.id, activation_prefix: prefix, skill_pack: arm.pack },
      variant_id: arm.id,
      activation_prefix: prefix, activation_prefix_sha256: prefix ? sha256(prefix) : null,
      invocation_prompt_sha256: sha256(invocation),
      shared_assets: assets.map((name) => ({ file: name, sha256: sha256(readFileSync(join(starter, "assets", name))) })),
      runtime: { provider: "grok-build-cli", runtime_target: "grok", model_id: "grok-4.6", effort: "high" },
      execution_control: { serial: true, retries: 0, replacement_budget: 0 },
      note: "showcase run: human final judgment + uniform audit; not the preregistered gate",
    };
    writeFileSync(join(cellDir, ".benchmark", "cell.json"), `${JSON.stringify(cell, null, 1)}\n`);
    writeFileSync(join(cellDir, ".benchmark", "manifest.json"), `${JSON.stringify({ schema_version: "0.1", cell_id: cellId, runtime_target: "grok", model_id: "grok-4.6", effort: "high" }, null, 1)}\n`);
    manifest.push({ order, cell_id: cellId, task, arm: arm.id, assets: assets.length });
  }
}
writeFileSync(join(outRoot, "SHOWCASE-MATRIX.json"), `${JSON.stringify({ schema_version: "0.1", experiment_id: "omd-grok46-showcase-2.0-v0.1", cells: manifest }, null, 1)}\n`);
console.log(JSON.stringify({ out: outRoot, cells: manifest.length }));
