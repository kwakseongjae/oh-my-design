#!/usr/bin/env node
/**
 * generate-task-assets.mjs — benchmark-internal preprocessing (NOT a user skill).
 *
 * Generates a per-task shared image asset base via the grok CLI's native
 * image_gen tool, so every competing arm starts from an IDENTICAL assets/
 * directory. Fairness contract: assets are generated once per task by this
 * preprocessor, never per-arm; the task brief then references the provided
 * assets.
 *
 * User decision (2026-08-17): grok-imagine only — no OpenAI/Gemini fallback.
 *
 * Rate-limit handling: grok-imagine enforces a requests-per-second tier
 * (observed in e8/e9 cells); we pace generations with --pace-ms (default 8s)
 * and retry a failed item once after a longer cooldown.
 *
 * Usage:
 *   node generate-task-assets.mjs --spec <spec.json> --out <assets-dir>
 *     [--grok-bin ~/.grok/bin/grok] [--pace-ms 8000] [--timeout-ms 180000]
 *
 * spec.json: { "task_id": "...", "items": [ { "file": "hero.png",
 *   "prompt": "...", "style": "optional style suffix" } ] }
 *
 * Output: images written into <assets-dir> + assets-manifest.json receipt
 * (sha256/bytes/prompt per item, generation order, pacing, tool identity).
 */

import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, statSync, writeFileSync, cpSync } from "node:fs";
import { homedir, tmpdir } from "node:os";
import { join, resolve } from "node:path";

function parseArgs(argv) {
  const map = new Map();
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i].startsWith("--")) { map.set(argv[i].slice(2), argv[i + 1]); i += 1; }
  }
  return map;
}
const args = parseArgs(process.argv.slice(2));
if (!args.has("spec") || !args.has("out")) {
  console.error("usage: generate-task-assets.mjs --spec <spec.json> --out <assets-dir> [--pace-ms 8000]");
  process.exit(1);
}
const spec = JSON.parse(readFileSync(resolve(args.get("spec")), "utf8"));
const outDir = resolve(args.get("out"));
const grokBin = resolve(args.get("grok-bin") ?? join(homedir(), ".grok/bin/grok"));
const paceMs = Number(args.get("pace-ms") ?? 8000);
const timeoutMs = Number(args.get("timeout-ms") ?? 180000);
mkdirSync(outDir, { recursive: true });

const MAGIC = [
  { ext: "png", bytes: [0x89, 0x50, 0x4e, 0x47] },
  { ext: "jpg", bytes: [0xff, 0xd8, 0xff] },
  { ext: "webp", bytes: [0x52, 0x49, 0x46, 0x46] },
];
function looksLikeImage(path) {
  const head = readFileSync(path).subarray(0, 4);
  return MAGIC.some((m) => m.bytes.every((b, i) => head[i] === b));
}
const sleep = (ms) => execFileSync(process.execPath, ["-e", `setTimeout(()=>{}, ${ms})`]);

function generateOne(item, attempt) {
  const target = join(outDir, item.file);
  const iso = mkdtempSync(join(tmpdir(), "grok-imgprep-"));
  mkdirSync(join(iso, ".grok"), { recursive: true });
  cpSync(join(homedir(), ".grok/auth.json"), join(iso, ".grok/auth.json"));
  const fullPrompt = [
    `Use the image_gen tool to generate exactly one image and save it to this exact absolute path: ${target}`,
    `Image content: ${item.prompt}${item.style ? ` Style: ${item.style}` : ""}`,
    "Do not create any other files. After the image is saved, reply with exactly: saved",
  ].join("\n");
  try {
    execFileSync(grokBin, [
      "-p", fullPrompt, "-m", "grok-4.6", "--output-format", "plain",
      "--no-auto-update", "--no-subagents", "--no-memory", "--disable-web-search", "--always-approve",
    ], { env: { ...process.env, HOME: iso }, timeout: timeoutMs, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
  } catch (error) {
    if (attempt === 0) { sleep(30000); return generateOne(item, 1); }
    return { file: item.file, ok: false, error: String(error?.message ?? error).slice(0, 300), attempts: attempt + 1 };
  }
  // Each generation is a fresh grok session; the provider rotates the
  // refresh token server-side per session. Sync the rotated token back so
  // the NEXT item starts from a live credential instead of a dead one.
  try {
    const isoAuth = readFileSync(join(iso, ".grok/auth.json"));
    const realAuthPath = join(homedir(), ".grok/auth.json");
    if (!readFileSync(realAuthPath).equals(isoAuth)) writeFileSync(realAuthPath, isoAuth);
  } catch { /* auth sync is best-effort */ }
  if (!existsSync(target) || !looksLikeImage(target)) {
    if (attempt === 0) { sleep(30000); return generateOne(item, 1); }
    return { file: item.file, ok: false, error: "target missing or not a valid image after generation", attempts: attempt + 1 };
  }
  const bytes = readFileSync(target);
  return {
    file: item.file, ok: true, attempts: attempt + 1,
    bytes: bytes.length, sha256: createHash("sha256").update(bytes).digest("hex"),
    prompt: item.prompt, style: item.style ?? null,
  };
}

const results = [];
for (const [index, item] of spec.items.entries()) {
  if (index > 0) sleep(paceMs);
  console.error(`[assets] generating ${item.file} (${index + 1}/${spec.items.length})`);
  results.push(generateOne(item, 0));
}
const manifest = {
  schema_version: "0.1", kind: "bench-image-preprocess-manifest",
  task_id: spec.task_id, generator: "grok-build-cli image_gen (grok-imagine)",
  fairness: "single shared asset base generated once per task; all arms start from identical assets",
  pace_ms: paceMs, generated_at: new Date().toISOString(), items: results,
};
writeFileSync(join(outDir, "assets-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
const failed = results.filter((item) => !item.ok);
console.log(JSON.stringify({ out: outDir, total: results.length, failed: failed.length }));
if (failed.length) process.exit(1);
