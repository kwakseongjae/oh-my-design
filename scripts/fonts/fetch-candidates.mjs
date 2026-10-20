#!/usr/bin/env node
// Download the open-licence candidate files listed in candidates.mjs into a cache directory outside
// the repository (default: $OMD_FONT_CACHE or <tmp>/omd-font-cache) and print their SHA-256s.
// Candidate files are measured, never redistributed: nothing here is written under the repo.
//
//   node scripts/fonts/fetch-candidates.mjs [--cache <dir>]
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import { CANDIDATES } from "./candidates.mjs";

export function defaultCacheDir() {
  return process.env.OMD_FONT_CACHE || path.join(os.tmpdir(), "omd-font-cache");
}

export function sha256(buf) {
  return crypto.createHash("sha256").update(buf).digest("hex");
}

async function download(url, dest) {
  const res = await fetch(url, { headers: { "user-agent": "Mozilla/5.0 (oh-my-design font measurement)" } });
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
  fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
}

/** Ensure every candidate file is in the cache; returns { file -> { path, sha256, url } }. */
export async function ensureCandidateFiles(cacheDir = defaultCacheDir(), candidates = CANDIDATES) {
  fs.mkdirSync(cacheDir, { recursive: true });
  const out = {};
  for (const c of candidates) {
    for (const f of c.files) {
      const dest = path.join(cacheDir, f.file);
      if (!fs.existsSync(dest) || fs.statSync(dest).size === 0) {
        if (f.zipPath) {
          const zip = path.join(cacheDir, path.basename(new URL(f.url).pathname));
          if (!fs.existsSync(zip)) await download(f.url, zip);
          fs.writeFileSync(dest, execFileSync("unzip", ["-p", zip, f.zipPath], { maxBuffer: 64 * 1024 * 1024 }));
        } else {
          await download(f.url, dest);
        }
      }
      const buf = fs.readFileSync(dest);
      out[f.file] = { path: dest, sha256: sha256(buf), url: f.url, ...(f.zipPath ? { zipPath: f.zipPath } : {}) };
    }
  }
  return out;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const i = process.argv.indexOf("--cache");
  const cache = i > 0 ? process.argv[i + 1] : defaultCacheDir();
  const files = await ensureCandidateFiles(cache);
  for (const [file, info] of Object.entries(files)) console.log(`${info.sha256}  ${file}`);
  console.log(`${Object.keys(files).length} candidate files in ${cache}`);
}
