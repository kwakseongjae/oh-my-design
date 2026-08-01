#!/usr/bin/env node
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs, writeJson } from "./_lib.mjs";
import { classifyProofTraceFile } from "./proof-trace-contract.mjs";

export function main(argv = process.argv.slice(2)) {
  const args = parseArgs(argv);
  const events = args.get("events");
  if (!events) throw new Error("--events <events.jsonl> is required");
  const result = classifyProofTraceFile(resolve(String(events)));
  const out = args.get("out");
  if (out) writeJson(resolve(String(out)), result);
  else process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  return result;
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) {
  main();
}

