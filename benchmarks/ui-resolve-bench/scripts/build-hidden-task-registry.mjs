#!/usr/bin/env node
import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { dimensionFlags } from "./audit-hidden-task-coverage.mjs";

const REQUIRED_FILES = ["task.json", "PROMPT.md", "starter/DESIGN.md", "starter/index.html"];

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

function filesUnder(root, current = root) {
  return readdirSync(current, { withFileTypes: true }).flatMap((entry) => {
    const path = join(current, entry.name);
    if (entry.isDirectory()) return filesUnder(root, path);
    if (!entry.isFile()) return [];
    return [relative(root, path).split(sep).join("/")];
  }).sort();
}

function bundleCommitment(taskRoot) {
  const files = filesUnder(taskRoot);
  const manifest = files.map((path) => `${path}\0${sha256(readFileSync(join(taskRoot, path)))}\n`).join("");
  return { files, sha256: sha256(manifest) };
}

export function buildHiddenTaskRegistry({ sourceRoot, repoRoot, contract }) {
  const source = resolve(sourceRoot);
  const repository = resolve(repoRoot);
  if (source === repository || source.startsWith(`${repository}${sep}`)) {
    throw new Error("hidden task source must remain outside the public repository");
  }
  if (!existsSync(source) || !statSync(source).isDirectory()) throw new Error("hidden task source root is unavailable");

  const committed = readdirSync(source, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const taskRoot = join(source, entry.name);
      for (const required of REQUIRED_FILES) {
        if (!existsSync(join(taskRoot, required))) throw new Error(`hidden task bundle is incomplete: ${entry.name}/${required}`);
      }
      const rawContract = readFileSync(join(taskRoot, "task.json"));
      const task = JSON.parse(rawContract.toString("utf8"));
      if (task[contract.eligibility.visibility_field] !== contract.eligibility.visibility_value ||
        task[contract.eligibility.independent_audit_field] !== contract.eligibility.independent_audit_value) {
        throw new Error(`hidden task is not audit-eligible: ${entry.name}`);
      }
      if (!contract.required_locales.includes(task.locale)) throw new Error(`hidden task locale is outside the contract: ${entry.name}`);
      const commitment = bundleCommitment(taskRoot);
      return {
        bundle_sha256: commitment.sha256,
        contract_sha256: sha256(rawContract),
        file_count: commitment.files.length,
        locale: task.locale,
        dimensions: Object.entries(dimensionFlags(task)).filter(([, present]) => present).map(([dimension]) => dimension).sort(),
      };
    })
    .sort((a, b) => a.bundle_sha256.localeCompare(b.bundle_sha256));

  if (new Set(committed.map((task) => task.bundle_sha256)).size !== committed.length) {
    throw new Error("hidden task registry contains duplicate bundles");
  }
  const tasks = committed.map((task, index) => ({ task_alias: `hidden-${String(index + 1).padStart(3, "0")}`, ...task }));
  const locales = Object.fromEntries(contract.required_locales.map((locale) => [locale, tasks.filter((task) => task.locale === locale).length]));
  const dimensions = Object.fromEntries(contract.required_dimensions.map((dimension) => [dimension, tasks.filter((task) => task.dimensions.includes(dimension)).length]));
  const registryCore = {
    schema_version: "0.1",
    target_version: contract.target_version,
    disclosure: "commitments-only",
    source_location: "outside-public-repository",
    task_count: tasks.length,
    locales,
    dimensions,
    tasks,
  };
  return {
    ...registryCore,
    registry_sha256: sha256(JSON.stringify(registryCore)),
    claim_boundary: "Commitments prove denominator immutability, not task validity, model execution, score eligibility, or independent audit completion.",
  };
}

function parseArgs(argv) {
  const args = new Map();
  for (let index = 0; index < argv.length; index += 2) {
    if (!argv[index]?.startsWith("--") || argv[index + 1] === undefined) throw new Error("arguments must be --key value pairs");
    args.set(argv[index].slice(2), argv[index + 1]);
  }
  return args;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const scriptDir = dirname(fileURLToPath(import.meta.url));
  const repoRoot = resolve(args.get("repo-root") ?? resolve(scriptDir, "../../.."));
  const sourceRoot = args.get("source");
  if (!sourceRoot) throw new Error("usage: build-hidden-task-registry.mjs --source <private-root> [--out <registry.json>]");
  const contractPath = resolve(args.get("contract") ?? join(repoRoot, "benchmarks/ui-resolve-bench/hidden-task-coverage-contract.json"));
  const registry = buildHiddenTaskRegistry({
    sourceRoot,
    repoRoot,
    contract: JSON.parse(readFileSync(contractPath, "utf8")),
  });
  const rendered = `${JSON.stringify(registry, null, 2)}\n`;
  if (args.get("out")) writeFileSync(resolve(args.get("out")), rendered);
  process.stdout.write(rendered);
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) await main();
