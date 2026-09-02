#!/usr/bin/env node
/**
 * verify-cells.mjs — 레인 A 산출 칸마다 `verify.json` (RUBRIC §4.2 수치부)을 만든다.
 *
 * verify.mjs는 한 이미지를 한 스냅샷과 대조한다. 이 스크립트는 그것을 03-runs의 모든 칸에
 * 돌려 결과를 90-comparison/captures/lane-a/<brand>/<arm>/rep-N/verify.json 에 둔다 —
 * 봉인 칸(03-runs)에는 쓰지 않는다. 채점 패킷은 여기서 읽는다.
 *
 * usage: node verify-cells.mjs [--brand b1,b2] [--force]
 */
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, readFileSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, "../..");
const RUNS = join(ROOT, "test-v2/03-runs/lane-a");
const OUT = join(ROOT, "test-v2/90-comparison/captures/lane-a");
const argv = process.argv.slice(2);
const opt = (n) => { const i = argv.indexOf("--" + n); return i >= 0 ? argv[i + 1] : undefined; };
const brandsFilter = opt("brand")?.split(",").map((s) => s.trim()).filter(Boolean);
const force = argv.includes("--force");

let done = 0, kept = 0, failed = 0, unusable = 0;
for (const brand of readdirSync(RUNS).sort()) {
  if (brandsFilter && !brandsFilter.includes(brand)) continue;
  for (const arm of ["omd", "hallmark", "uiuxpromax"]) {
    for (let rep = 1; rep <= 4; rep++) {
      const img = join(RUNS, brand, arm, `rep-${rep}`, "image.jpg");
      if (!existsSync(img)) continue;
      const dir = join(OUT, brand, arm, `rep-${rep}`);
      const out = join(dir, "verify.json");
      if (!force && existsSync(out)) { kept++; continue; }
      mkdirSync(dir, { recursive: true });
      const r = spawnSync("node", [join(HERE, "verify.mjs"), "--brand", brand, "--generated", img, "--out", out], { cwd: HERE, encoding: "utf8" });
      if (r.status !== 0 || !existsSync(out)) { failed++; console.log(`${brand}/${arm}/rep-${rep}: FAIL ${r.stderr.split("\n")[0]}`); continue; }
      const j = JSON.parse(readFileSync(out, "utf8"));
      if (j.usable === false) unusable++;
      done++;
      console.log(`${brand}/${arm}/rep-${rep}`.padEnd(28) + (j.usable === false ? "unusable" : `score ${j.numericScore}`));
    }
  }
}
console.log(`VERIFY_CELLS_DONE done=${done} kept=${kept} failed=${failed} unusable=${unusable}`);
process.exit(failed ? 1 : 0);
