#!/usr/bin/env node
import { existsSync, readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs, readJson, writeJson } from "./_lib.mjs";

export function findRunRecordPaths(root) {
  if (!existsSync(root) || !statSync(root).isDirectory()) {
    throw new Error(`run root not found: ${root}`);
  }
  const paths = [];
  const visit = (directory) => {
    for (const name of readdirSync(directory).sort()) {
      const absolute = join(directory, name);
      const info = statSync(absolute);
      if (info.isDirectory()) visit(absolute);
      else if (name === "run-record.json" && directory.endsWith("/.benchmark")) paths.push(absolute);
    }
  };
  visit(root);
  return paths.sort();
}

export function collectRunRecords(root) {
  const records = findRunRecordPaths(root).map((path) => readJson(path));
  const ids = records.map((record) => record.run_id);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicates.length) throw new Error(`duplicate run ids: ${[...new Set(duplicates)].join(", ")}`);
  return records.sort((left, right) => left.run_id.localeCompare(right.run_id));
}

async function main() {
  const args = parseArgs();
  const root = args.get("root") ? resolve(String(args.get("root"))) : null;
  const out = args.get("out") ? resolve(String(args.get("out"))) : null;
  const expected = args.get("expected") == null ? null : Number(args.get("expected"));
  if (!root || !out) {
    console.error("usage: collect-run-records.mjs --root <run-root> --out <records.json> [--expected <n>]");
    process.exitCode = 2;
    return;
  }
  const records = collectRunRecords(root);
  if (expected != null && records.length !== expected) {
    throw new Error(`expected ${expected} run records, found ${records.length}`);
  }
  writeJson(out, records);
  console.log(JSON.stringify({ root, out, count: records.length }, null, 2));
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) {
  await main();
}
