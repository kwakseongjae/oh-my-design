#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { validateRunnerAdapter } from "../src/lib/reverify/runner.ts";

const WEB_ROOT = resolve(fileURLToPath(new URL("..", import.meta.url)));
const ROOT = resolve(WEB_ROOT, "..");
const configPath = resolve(ROOT, "config/reverify-runner.codex-terra.example.json");
const skillPath = resolve(ROOT, ".agents/skills/omd-add-reference/SKILL.md");
const evalPath = resolve(ROOT, ".agents/skills/omd-add-reference/evals/evals.json");
const wrapperPath = resolve(WEB_ROOT, "scripts/adapters/run-codex-reverify.mjs");

for (const path of [configPath, skillPath, evalPath, wrapperPath]) {
  if (!existsSync(path)) throw new Error(`missing Codex reverify asset: ${path}`);
}

const adapter = validateRunnerAdapter(JSON.parse(readFileSync(configPath, "utf8")));
if (adapter.billingMode !== "subscription") throw new Error("Codex Terra adapter must use subscription billing");
if (adapter.limits.maxBudgetUsd !== 0) throw new Error("subscription adapter must not declare a USD spend cap");
const joinedArgs = adapter.command.args.join(" ");
for (const placeholder of ["{packet}", "{referenceId}", "{evidenceArtifact}", "{workspace}", "{modelProfile}", "{reasoningEffort}"]) {
  if (!joinedArgs.includes(placeholder)) throw new Error(`adapter missing ${placeholder}`);
}

const skill = readFileSync(skillPath, "utf8");
for (const required of [
  "--runner codex-terra",
  "--model-profile gpt-5.6-terra",
  "--reasoning-effort high",
  "config/reverify-runner.codex-terra.example.json",
  "--capture-only",
]) {
  if (!skill.includes(required)) throw new Error(`skill missing required subscription instruction: ${required}`);
}

const evalDocument = JSON.parse(readFileSync(evalPath, "utf8"));
if (!Array.isArray(evalDocument.evals) || evalDocument.evals.length < 3) {
  throw new Error("skill eval set must cover execute, capture-only, and opt-in boundaries");
}

const wrapper = readFileSync(wrapperPath, "utf8");
for (const required of ["models_cache.json", '"login", "status"', "Logged in using ChatGPT", "delete env.OPENAI_API_KEY", '"--disable", "apps"', '"--ignore-user-config"']) {
  if (!wrapper.includes(required)) throw new Error(`Codex wrapper missing guard: ${required}`);
}

console.log("[codex-reverify] subscription adapter, skill contract, eval cases, and MCP/model guards are valid");
