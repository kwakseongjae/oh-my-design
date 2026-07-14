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
const repair = process.argv.includes("--repair");
if (!packet || !existsSync(packet) || !statSync(packet).isFile()) throw new Error(`packet missing: ${packet}`);
if (!evidence || !existsSync(evidence) || !statSync(evidence).isFile()) throw new Error(`evidence missing: ${evidence}`);
if (!referenceId) throw new Error("--reference is required");
if (!repair && existsSync(resolve(workspace, "web/references", referenceId, "DESIGN.md"))) throw new Error(`${referenceId} already exists; CREATE refuses overwrite`);

const versionResult = spawnSync("codex", ["--version"], { encoding: "utf8" });
if (versionResult.status !== 0) throw new Error("Codex CLI is unavailable");
const version = versionResult.stdout.match(/codex-cli\s+(\d+)\.(\d+)\.(\d+)/)?.slice(1).map(Number);
const supported = version && (version[0] > 0 || version[1] > 144 || (version[1] === 144 && version[2] >= 1));
if (!supported) throw new Error(`Codex CLI 0.144.1+ required; found ${versionResult.stdout.trim()}`);
const authResult = spawnSync("codex", ["login", "status"], { encoding: "utf8" });
if (authResult.status !== 0 || !/Logged in using ChatGPT/i.test(`${authResult.stdout}\n${authResult.stderr}`)) {
  throw new Error("Codex must be logged in using ChatGPT");
}
const cachePath = resolve(homedir(), ".codex", "models_cache.json");
const cache = JSON.parse(readFileSync(cachePath, "utf8"));
const models = Array.isArray(cache) ? cache : cache.models;
const selected = Array.isArray(models) ? models.find((candidate) => candidate.slug === model) : undefined;
if (!selected) throw new Error(`Codex model ${model} is unavailable`);
if (!(selected.supported_reasoning_levels ?? []).some((level) => level.effort === reasoning)) {
  throw new Error(`Codex model ${model} does not advertise ${reasoning}`);
}

const prompt = [
  `Execute the OmD ${repair ? "CREATE repair" : "CREATE"} packet at ${packet} for new reference ${referenceId}.`,
  `Read ${workspace}/.agents/skills/omd-add-reference/SKILL.md completely and follow CREATE mode, including context-depth and unknown-means-absent rules.`,
  `Use ${evidence} as the only raw computed-style, font, component, and interaction evidence. Do not rerun browser capture and do not use MCP.`,
  "Use built-in web search for first-party company/product history, current brand evolution, official design/font/license sources, and both Tier 2 attempts.",
  "Keep product, marketing, corporate, docs, and declared-only font evidence in separate domains. Never use a fallback font or inferred component as a brand fact.",
  "Create a full canonical DESIGN.md with frontmatter tokens and verification_v2 claim graph, .verification.md with raw proof and conflict matrix, and _research.md with confidence and source ledger.",
  "Preflight guarantees at least one observed component variant. Promote at least one selector/surface-backed static component into tokens.components, set tokens.components_harvested: true, and link every component field to verification_v2 claims. Interaction count 0 removes only unobserved interactive states; it does not erase measured default component geometry.",
  "Component type must be exactly one of button, input, card, badge, tab, toggle, toast, dialog, listItem, avatar. Map an observed link/row to listItem unless button semantics are actually evidenced. For button/input/tab/toggle include a truthful observed-state summary; never invent hover, focus, pressed, disabled, or error values.",
  "verification_v2 source.kind must be exactly product-surface, official-doc, brand-asset, or license. Tier 2 and narrative links may stay in prose/_research unless they fit one of those evidence classes. Every scalar token leaf must have a claim path and there must be no extra claim paths.",
  "Frontmatter logo must be a structured logo object accepted by the repository schema. For favicon logos, use type: favicon and a full https image URL such as https://www.google.com/s2/favicons?domain=<domain>&sz=128; never emit a bare domain and never omit logo.type.",
  "If the evidence packet reports no unresolved conflict, encode the exact repository-standard no-conflict form used by an existing Verified v2 reference: conflict summary must resolve to exact none. Do not invent unresolved conflict prose.",
  "Use the exact id/country/category/homepage/name supplied by the packet. Omit only unresolved fields or empty groups; preserve useful verified narrative and measured siblings.",
  `Only ${repair ? "repair or create" : "create"} files inside ${workspace}/web/references/${referenceId}/. Do not edit registry, mirrors, counts, other references, configuration, or source code.`,
  "Do not commit, push, deploy, open a PR, install dependencies, or run repository acceptance commands. The outer runner owns acceptance and sync.",
].join("\n");
const args = [
  "exec", "--skip-git-repo-check", "--ignore-user-config", "--ephemeral",
  "--model", model,
  "--config", `model_reasoning_effort=${JSON.stringify(reasoning)}`,
  "--config", 'web_search="live"',
  "--disable", "apps",
  "--sandbox", "workspace-write",
  "--cd", workspace,
  "--json", prompt,
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
if (result.code !== 0 || failure) {
  const detail = failure?.error?.message ?? failure?.message ?? result.stderr.trim() ?? `signal ${result.signal}`;
  throw new Error(`Codex CREATE failed (${result.code}): ${detail}`);
}
if (!events.some((event) => event.type === "turn.completed")) throw new Error("Codex CREATE ended without turn.completed");
const finalMessage = events.filter((event) => event.type === "item.completed" && event.item?.type === "agent_message").map((event) => event.item.text).at(-1);
if (result.stderr.trim()) process.stderr.write(result.stderr);
if (finalMessage) process.stdout.write(`${finalMessage}\n`);
