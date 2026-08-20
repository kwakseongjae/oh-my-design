#!/usr/bin/env node
/**
 * generate-task-dataset.mjs — grok-authored, schema-validated dataset fixture.
 *
 * Part of bench-fixture-gen (benchmark-internal). grok-4.6 writes realistic
 * records for a declared entity spec; this script validates hard (counts,
 * fields, enums, relations), retries once, then emits data.json + data.js
 * and prints the seed aggregates.
 *
 * Usage: generate-task-dataset.mjs --spec <fixture-spec.json> --out <dir>
 */

import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { homedir, tmpdir } from "node:os";
import { join, resolve } from "node:path";

function parseArgs(argv) {
  const map = new Map();
  for (let i = 0; i < argv.length; i += 1) if (argv[i].startsWith("--")) { map.set(argv[i].slice(2), argv[i + 1]); i += 1; }
  return map;
}
const args = parseArgs(process.argv.slice(2));
if (!args.has("spec") || !args.has("out")) { console.error("usage: generate-task-dataset.mjs --spec <fixture-spec.json> --out <dir>"); process.exit(1); }
const spec = JSON.parse(readFileSync(resolve(args.get("spec")), "utf8"));
const ds = spec.dataset;
const outDir = resolve(args.get("out"));
mkdirSync(outDir, { recursive: true });
const grokBin = resolve(join(homedir(), ".grok/bin/grok"));

function validate(data) {
  const problems = [];
  if (data.disclosure !== ds.disclosure) problems.push("disclosure string mismatch");
  for (const entity of ds.entities) {
    const rows = data[entity.name];
    if (!Array.isArray(rows)) { problems.push(`${entity.name}: missing array`); continue; }
    if (rows.length !== entity.count) problems.push(`${entity.name}: ${rows.length} rows, expected ${entity.count}`);
    const ids = new Set();
    for (const [index, row] of rows.entries()) {
      for (const field of entity.fields) {
        if (!(field.name in row)) { problems.push(`${entity.name}[${index}].${field.name}: missing`); continue; }
        const value = row[field.name];
        if (field.kind === "enum" && !field.enum.includes(value)) problems.push(`${entity.name}[${index}].${field.name}: '${value}' not in enum`);
        if (field.kind === "int" && (!Number.isInteger(value) || (field.range && (value < field.range[0] || value > field.range[1])))) problems.push(`${entity.name}[${index}].${field.name}: bad int ${value}`);
        if (field.kind === "string" && (typeof value !== "string" || !value.trim())) problems.push(`${entity.name}[${index}].${field.name}: blank`);
        if (field.kind === "id") { if (ids.has(value)) problems.push(`${entity.name}[${index}].${field.name}: duplicate id ${value}`); ids.add(value); }
        if (field.kind === "array" && !Array.isArray(value)) problems.push(`${entity.name}[${index}].${field.name}: not an array`);
      }
    }
  }
  for (const relation of ds.relations ?? []) {
    const [fromEntity, fromField] = relation.from.split(".");
    const [toEntity, toField] = relation.to.split(".");
    const targets = new Set((data[toEntity] ?? []).map((row) => row[toField]));
    for (const [index, row] of (data[fromEntity] ?? []).entries()) {
      const raw = row[fromField];
      const values = Array.isArray(raw) ? raw.map((item) => (typeof item === "object" ? item[relation.item_key] : item)) : [raw];
      for (const value of values) if (!targets.has(value)) problems.push(`${fromEntity}[${index}].${fromField}: dangling ref ${value}`);
    }
  }
  return problems;
}

function askGrok(extra) {
  const iso = mkdtempSync(join(tmpdir(), "grok-dataset-"));
  mkdirSync(join(iso, ".grok"), { recursive: true });
  cpSync(join(homedir(), ".grok/auth.json"), join(iso, ".grok/auth.json"));
  const target = join(outDir, "data.raw.json");
  const prompt = [
    "You are generating a FICTIONAL sample dataset fixture for a UI benchmark. Write realistic, coherent records.",
    `Write a single JSON object to this exact absolute path: ${target}`,
    "The object must contain:",
    `- "dataset": ${JSON.stringify(ds.id ?? spec.task_id)}`,
    `- "disclosure": exactly this string: ${JSON.stringify(ds.disclosure)}`,
    ...ds.entities.map((entity) => `- "${entity.name}": array of EXACTLY ${entity.count} objects with fields ${JSON.stringify(entity.fields)}${entity.note ? ` — ${entity.note}` : ""}`),
    (ds.relations ?? []).length ? `Referential integrity: ${JSON.stringify(ds.relations)} — every reference must resolve.` : "",
    ds.locale_note ?? "",
    extra ?? "",
    "No markdown, no commentary in the file — pure JSON. After writing, reply with exactly: saved",
  ].filter(Boolean).join("\n");
  try {
    execFileSync(grokBin, ["-p", prompt, "-m", "grok-4.6", "--output-format", "plain",
      "--no-auto-update", "--no-subagents", "--no-memory", "--disable-web-search", "--always-approve", "--reasoning-effort", "high",
    ], { env: { ...process.env, HOME: iso }, timeout: 600000, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
  } finally {
    try {
      const isoAuth = readFileSync(join(iso, ".grok/auth.json"));
      const realAuthPath = join(homedir(), ".grok/auth.json");
      if (!readFileSync(realAuthPath).equals(isoAuth)) writeFileSync(realAuthPath, isoAuth);
    } catch { /* best-effort */ }
  }
  return JSON.parse(readFileSync(target, "utf8"));
}

let data = askGrok();
let problems = validate(data);
if (problems.length) {
  console.error(`[dataset] first attempt failed ${problems.length} checks; retrying with the violation list`);
  data = askGrok(`Your previous attempt failed validation. Fix EXACTLY these problems and regenerate the full file:\n${problems.slice(0, 40).join("\n")}`);
  problems = validate(data);
}
if (problems.length) { console.error(JSON.stringify({ ok: false, problems: problems.slice(0, 40) }, null, 1)); process.exit(1); }

const json = `${JSON.stringify(data, null, 1)}\n`;
writeFileSync(join(outDir, "data.json"), json);
writeFileSync(join(outDir, "data.js"), `// ${spec.task_id} sample dataset — single source of truth (mirrors data.json)\nwindow.${ds.global_key} = ${JSON.stringify(data, null, 1)};\n`);
console.log(JSON.stringify({ ok: true, sha256: createHash("sha256").update(json).digest("hex").slice(0, 16), entities: Object.fromEntries(ds.entities.map((entity) => [entity.name, data[entity.name].length])) }));
