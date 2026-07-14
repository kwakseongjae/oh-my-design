#!/usr/bin/env node
import { spawn } from "node:child_process";

function option(name) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

const packet = option("--packet");
const referenceId = option("--reference");
const evidenceArtifact = option("--evidence");
const budgetUsd = option("--budget");
if (!packet || !referenceId || !evidenceArtifact || !budgetUsd) {
  throw new Error("--packet, --reference, --evidence, and --budget are required");
}

const prompt = [
  `Read and execute the reverify packet at ${packet}.`,
  `Work only on reference ${referenceId} and its derived mirror.`,
  `Use ${evidenceArtifact} as raw evidence.`,
  "Do not use MCP. Do not commit, push, deploy, or open a pull request.",
].join(" ");

const args = [
  "--print",
  "--model", "opus",
  "--max-budget-usd", budgetUsd,
  "--permission-mode", "acceptEdits",
  "--tools", "Read,Edit,Write,Bash,WebFetch,WebSearch",
  "--strict-mcp-config",
  "--mcp-config", '{"mcpServers":{}}',
  "--no-chrome",
  "--no-session-persistence",
  "--output-format", "json",
  prompt,
];

const child = spawn("claude", args, { cwd: process.cwd(), env: process.env, shell: false });
let stdout = "";
let stderr = "";
child.stdout.on("data", (chunk) => { stdout += chunk; });
child.stderr.on("data", (chunk) => {
  stderr += chunk;
  process.stderr.write(chunk);
});

const exitCode = await new Promise((resolve, reject) => {
  child.once("error", reject);
  child.once("exit", (code) => resolve(code ?? 1));
});
if (exitCode !== 0) throw new Error(`claude exited ${exitCode}: ${stderr.trim()}`);

let result;
try {
  result = JSON.parse(stdout);
} catch {
  throw new Error(`claude returned non-JSON output: ${stdout.slice(0, 500)}`);
}
if (result.is_error || String(result.subtype ?? "").startsWith("error") || /exceeded usd budget/i.test(String(result.result ?? ""))) {
  throw new Error(`claude worker failed: ${result.result ?? result.subtype ?? "unknown error"}`);
}
process.stdout.write(`${result.result ?? "Claude worker completed."}\n`);
