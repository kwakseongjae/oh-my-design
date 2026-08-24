/**
 * Publishes a manifested store set to Cloudflare R2, then stamps the public
 * base URL back into the manifest — turning a local custody record into a
 * fetchable one without changing a single SHA.
 *
 * Works over any manifest this repo produces (bench sets, generated assets,
 * capture evidence): the manifest is the contract, the store is the bytes,
 * R2 is just a second shelf for the same bytes. Verification stays local:
 * download + `--verify` against the committed manifest.
 *
 * Auth is wrangler's: `CLOUDFLARE_API_TOKEN` env (or `npx wrangler login`
 * once). Absent auth fails close with instructions — publishing is an
 * outward-facing act and never worth guessing credentials for.
 *
 *   node scripts/publish-r2.mjs --manifest benchmarks/ui-resolve-bench/manifests/reports.json \
 *                               --store ~/.omd/bench-store/reports --bucket omd-bench
 *   node scripts/publish-r2.mjs ... --dry-run
 */

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join, resolve } from "node:path";

const arg = (n) => { const i = process.argv.indexOf(`--${n}`); return i === -1 ? undefined : process.argv[i + 1]; };
const flag = (n) => process.argv.includes(`--${n}`);

const manifestPath = arg("manifest");
const storeRoot = (arg("store") ?? "").replace(/^~/, homedir());
const bucket = arg("bucket");
if (!manifestPath || !storeRoot || !bucket) {
  console.error("usage: publish-r2.mjs --manifest <file> --store <dir> --bucket <name> [--prefix p] [--dry-run]");
  process.exit(1);
}

const manifest = JSON.parse(readFileSync(resolve(manifestPath), "utf8"));
const prefix = arg("prefix") ?? manifest.set ?? "artifacts";

if (!flag("dry-run")) {
  try {
    execFileSync("npx", ["wrangler", "whoami"], { stdio: "pipe", timeout: 60000 });
  } catch {
    console.error([
      "R2 인증이 없다 — 업로드는 시작하지 않았다.",
      "  1) Cloudflare 대시보드에서 R2 버킷 생성 (예: omd-bench)",
      "  2) R2 권한 API 토큰 발급 → export CLOUDFLARE_API_TOKEN=...",
      "     (또는 1회성 `npx wrangler login`)",
      "  3) 이 명령을 다시 실행",
    ].join("\n"));
    process.exit(2);
  }
}

let uploaded = 0, skipped = 0;
const failures = [];
for (const entry of manifest.entries) {
  const local = join(storeRoot, entry.path);
  if (!existsSync(local)) { failures.push(`${entry.path}: store에 없음`); continue; }
  const key = `${prefix}/${entry.path}`;
  if (flag("dry-run")) { uploaded++; continue; }
  try {
    execFileSync("npx", ["wrangler", "r2", "object", "put", `${bucket}/${key}`, "--file", local, "--remote"], {
      stdio: "pipe", timeout: 300000,
    });
    uploaded++;
  } catch (e) {
    failures.push(`${entry.path}: ${String(e).split("\n")[0].slice(0, 80)}`);
    if (failures.length >= 5) break; // 연쇄 실패는 자격/네트워크 문제 — 빨리 멈추는 쪽이 낫다
  }
}

if (!flag("dry-run") && failures.length === 0) {
  manifest.store = { ...manifest.store, remote: { provider: "r2", bucket, prefix, publishedAt: new Date().toISOString() } };
  writeFileSync(resolve(manifestPath), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
}

console.log(JSON.stringify({
  set: manifest.set, bucket, prefix,
  planned: manifest.entries.length, uploaded, skipped,
  failures: failures.slice(0, 5),
  dryRun: flag("dry-run") || undefined,
}, null, 1));
process.exit(failures.length ? 1 : 0);
