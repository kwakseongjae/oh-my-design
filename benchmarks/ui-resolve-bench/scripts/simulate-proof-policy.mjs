#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { simulateProofPolicy } from "./proof-policy-state.mjs";

const input = process.argv[2];
if (!input) {
  console.error("Usage: simulate-proof-policy <events.json>");
  process.exit(1);
}

const events = JSON.parse(readFileSync(resolve(input), "utf8"));
if (!Array.isArray(events)) {
  console.error("proof policy input must be a JSON array");
  process.exit(1);
}
process.stdout.write(`${JSON.stringify(simulateProofPolicy(events), null, 2)}\n`);
