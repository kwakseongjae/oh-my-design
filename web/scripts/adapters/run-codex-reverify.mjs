#!/usr/bin/env node
import { spawn, spawnSync } from "node:child_process";
import { existsSync, readFileSync, statSync } from "node:fs";
import { homedir } from "node:os";
import { resolve } from "node:path";

function option(name, fallback) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : fallback;
}

const packet = resolve(option("--packet", ""));
const referenceId = option("--reference", "");
const evidence = resolve(option("--evidence", ""));
const workspace = resolve(option("--workspace", process.cwd()));
const model = option("--model", "gpt-5.6-terra");
const reasoning = option("--reasoning", "high");

if (!packet || !existsSync(packet) || !statSync(packet).isFile()) throw new Error(`packet missing: ${packet}`);
if (!evidence || !existsSync(evidence) || !statSync(evidence).isFile()) throw new Error(`evidence missing: ${evidence}`);
if (!referenceId) throw new Error("--reference is required");

const versionResult = spawnSync("codex", ["--version"], { encoding: "utf8" });
if (versionResult.status !== 0) throw new Error("Codex CLI is unavailable");
const version = versionResult.stdout.match(/codex-cli\s+(\d+)\.(\d+)\.(\d+)/)?.slice(1).map(Number);
const supportedVersion = version && (version[0] > 0 || version[1] > 144 || (version[1] === 144 && version[2] >= 1));
if (!supportedVersion) {
  throw new Error(`Codex CLI 0.144.1+ is required for gpt-5.6-terra; found ${versionResult.stdout.trim()}`);
}
const authResult = spawnSync("codex", ["login", "status"], { encoding: "utf8" });
const authOutput = `${authResult.stdout ?? ""}\n${authResult.stderr ?? ""}`;
if (authResult.status !== 0 || !/Logged in using ChatGPT/i.test(authOutput)) {
  throw new Error("Codex must be logged in using ChatGPT for the subscription adapter");
}

const modelCachePath = resolve(homedir(), ".codex", "models_cache.json");
if (!existsSync(modelCachePath)) throw new Error(`Codex model cache missing: ${modelCachePath}; run codex once while signed in`);
const cache = JSON.parse(readFileSync(modelCachePath, "utf8"));
const models = Array.isArray(cache) ? cache : cache.models;
const selected = Array.isArray(models) ? models.find((candidate) => candidate.slug === model) : undefined;
if (!selected) throw new Error(`Codex model ${model} is not available to this signed-in account`);
const levels = selected.supported_reasoning_levels ?? [];
if (!levels.some((level) => level.effort === reasoning)) {
  throw new Error(`Codex model ${model} does not advertise reasoning effort ${reasoning}`);
}

const prompt = [
  `Execute the OmD reverify packet at ${packet} for reference ${referenceId}.`,
  `Read ${workspace}/.agents/skills/omd-add-reference/SKILL.md completely before acting and follow its UPDATE workflow.`,
  `Use ${evidence} as raw collector evidence. Do not rerun browser capture and do not use MCP.`,
  "Use built-in web search to collect first-party official context, font, design, and license sources plus the required Tier 2 cross-checks.",
  "Separate live product surfaces, marketing pages, documentation chrome, and declared-only font assets.",
  "For fonts, require computed usage plus FontFaceSet/source corroboration, or leave the family declared/system/unresolved.",
  "For components, preserve selector/surface/state provenance and do not invent unobserved variants.",
  `Only edit ${workspace}/web/references/${referenceId}/DESIGN.md, its .verification.md, and the mechanically derived design-md/${referenceId} mirror when the packet requires changes.`,
  "Do not commit, push, deploy, open a PR, install dependencies, or change any other reference.",
  "Do not run repository acceptance commands inside this worker; the outer deterministic runner owns acceptance after your edits.",
].join("\n");

const args = [
  "exec",
  "--skip-git-repo-check",
  "--ignore-user-config",
  "--ephemeral",
  "--model", model,
  "--config", `model_reasoning_effort=${JSON.stringify(reasoning)}`,
  "--config", 'web_search="live"',
  "--disable", "apps",
  "--sandbox", "workspace-write",
  "--cd", workspace,
  "--json",
  prompt,
];

const result = await new Promise((resolveChild, reject) => {
  const env = { ...process.env };
  delete env.OPENAI_API_KEY;
  delete env.CODEX_API_KEY;
  const child = spawn("codex", args, { cwd: workspace, env, shell: false, stdio: ["ignore", "pipe", "pipe"] });
  let stdout = "";
  let stderr = "";
  child.stdout.on("data", (chunk) => { stdout += chunk; });
  child.stderr.on("data", (chunk) => { stderr += chunk; });
  child.once("error", reject);
  child.once("exit", (code, signal) => resolveChild({ code, signal, stdout, stderr }));
});

const events = result.stdout.split(/\r?\n/).filter(Boolean).flatMap((line) => {
  try { return [JSON.parse(line)]; } catch { return []; }
});
const failure = events.find((event) => event.type === "turn.failed" || event.type === "error");
const finalMessage = events
  .filter((event) => event.type === "item.completed" && event.item?.type === "agent_message")
  .map((event) => event.item.text)
  .at(-1);

if (result.code !== 0 || failure) {
  const detail = failure?.error?.message ?? failure?.message ?? result.stderr.trim() ?? `signal ${result.signal}`;
  throw new Error(`Codex reverify failed (${result.code}): ${detail}`);
}
if (!events.some((event) => event.type === "turn.completed")) throw new Error("Codex reverify ended without turn.completed");
if (result.stderr.trim()) process.stderr.write(result.stderr);
if (finalMessage) process.stdout.write(`${finalMessage}\n`);
