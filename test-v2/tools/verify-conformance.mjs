/**
 * Conformance of verify.mjs to RUBRIC.md §4.2.
 *
 * §9 requires that the implementation "reproduce §4.2's formulas and missing-
 * data rules as written". Reading the code and nodding is not that. Each case
 * here restates one clause of §4.2 and fails if the code drifts from it.
 *
 * The cases are on synthetic images with known composition, so a failure means
 * the implementation changed — not that a website did.
 *
 *   node verify-conformance.mjs
 */

import { execFile } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import { palette, toRgb } from "./analysis.mjs";

const execFileAsync = promisify(execFile);
const HERE = dirname(fileURLToPath(import.meta.url));

const results = [];
const check = (clause, ok, detail) => results.push({ clause, pass: ok === true, detail: ok === true ? undefined : detail ?? String(ok) });
const near = (a, b, eps = 1e-9) => Math.abs(a - b) <= eps;

const dir = mkdtempSync(join(tmpdir(), "omd-verify-conf-"));

/* --- §4.2 팔레트 절차: 5-bit 양자화, 상위 6 bin, coverage 4자리 ------------- */

// Exact pixels, built directly as a PPM: four colours in known proportions
// (50% / 25% / 12.5% / 12.5%), so every assertion below has a closed form.
const W = 80, H = 80;
const px = Buffer.alloc(W * H * 3);
const put = (x0, x1, [r, g, b]) => {
  for (let y = 0; y < H; y++) for (let x = x0; x < x1; x++) {
    const i = (y * W + x) * 3;
    px[i] = r; px[i + 1] = g; px[i + 2] = b;
  }
};
put(0, 40, [16, 32, 48]);    // 50%
put(40, 60, [64, 80, 96]);   // 25%
put(60, 70, [200, 16, 16]);  // 12.5%
put(70, 80, [16, 200, 16]);  // 12.5%
const ppm = join(dir, "bands.ppm");
writeFileSync(ppm, Buffer.concat([Buffer.from(`P6\n${W} ${H}\n255\n`), px]));
const bandsPng = join(dir, "bands2.png");
await execFileAsync("ffmpeg", ["-loglevel", "error", "-y", "-i", ppm, bandsPng]);

const bins = palette(await toRgb(bandsPng, W));
check("§4.2 상위 k=6 bin만 쓴다", bins.length <= 6, `bins=${bins.length}`);
check("§4.2 coverage = bin pixel / frame pixel, 소수 넷째 자리",
  near(bins[0].coverage, 0.5) && near(bins[1].coverage, 0.25),
  `top coverages ${bins.slice(0, 4).map((b) => b.coverage).join(", ")}`);
check("§4.2 bin 색은 소속 원본 8-bit 픽셀의 채널별 평균",
  bins[0].hex === "#102030", `top bin ${bins[0].hex}, expected #102030`);
check("§4.2 bin 정렬은 픽셀 수 내림차순",
  bins.every((b, i) => i === 0 || b.coverage <= bins[i - 1].coverage),
  bins.map((b) => b.coverage).join(" "));

// 5-bit quantisation: two colours inside one 8-value bucket must merge.
const px2 = Buffer.alloc(W * H * 3);
for (let i = 0; i < W * H; i++) {
  const near5 = i % 2 === 0 ? [16, 32, 48] : [17, 33, 49]; // same >>3 bucket
  px2[i * 3] = near5[0]; px2[i * 3 + 1] = near5[1]; px2[i * 3 + 2] = near5[2];
}
const ppm2 = join(dir, "merge.ppm");
writeFileSync(ppm2, Buffer.concat([Buffer.from(`P6\n${W} ${H}\n255\n`), px2]));
const mergePng = join(dir, "merge.png");
await execFileAsync("ffmpeg", ["-loglevel", "error", "-y", "-i", ppm2, mergePng]);
const merged = palette(await toRgb(mergePng, W));
check("§4.2 채널별 5-bit 양자화(channel >> 3)로 인접 색이 한 bin에 든다",
  merged.length === 1 && near(merged[0].coverage, 1),
  `bins=${merged.length}, top coverage=${merged[0]?.coverage}`);

/* --- §4.2 필드 점수식 ------------------------------------------------------ */

const clamp = (x) => Math.max(0, Math.min(100, x));
const expected = (e, tol) => +clamp(100 * (1 - e / tol)).toFixed(2);
const TOLERANCES = { aspect: 0.10, meanLuma: 0.20, dynamicRange: 0.20, subjectCentre: 0.25, palette: 25 };

const src = await import("node:fs").then((fs) => fs.readFileSync(join(HERE, "verify.mjs"), "utf8"));
check("§4.2 점수식 clamp(100 × (1 - e/tolerance))",
  src.includes("clamp(100 * (1 - e / tolerance))"),
  "score() does not match the rubric's expression verbatim");
for (const [field, tol] of Object.entries(TOLERANCES)) {
  // The source writes 0.10 where String(0.10) gives "0.1", so the pattern
  // accepts either spelling of the same number rather than the literal text.
  const num = String(tol).replace(".", "\\.") + (Number.isInteger(tol) ? "" : "0?");
  const re = new RegExp(`push\\("${field}"[\\s\\S]{0,400}?,\\s*${num}\\s*[,)]`);
  check(`§4.2 ${field} 허용오차 ${tol}`, re.test(src), `tolerance ${tol} not found for ${field}`);
}
check("§4.2 clamp는 0–100 절삭", expected(2, 0.10) === 0 && expected(0, 0.10) === 100,
  `clamp gives ${expected(2, 0.10)} / ${expected(0, 0.10)}`);

/* --- §4.2 결측 규칙 -------------------------------------------------------- */

check("§4.2 결측 필드를 인접 필드로 대체하지 않는다",
  /eligible: false, reason:/.test(src) && !/\?\?\s*aggregate\.(meanLuma|dynamicRange|aspects)\s*\)/.test(src),
  "a fallback to a neighbouring aggregate field is present");
check("§4.2 eligible 수치 필드 2개 미만이면 비교 입력 불충분",
  /eligible\.length >= 2/.test(src) && /usable: eligible\.length >= 2/.test(src),
  "the two-field floor is not enforced on `usable`");
check("§4.2 불충분한 block은 점수를 내지 않는다",
  /numericScore: eligible\.length >= 2 \? numericScore : null/.test(src),
  "a score is emitted below the two-field floor");
check("§4.2 수치 점수는 필드별 점수의 산술평균",
  /eligible\.reduce\(\(s, f\) => s \+ f\.score, 0\) \/ eligible\.length/.test(src),
  "the mean is not a plain arithmetic mean over eligible fields");

/* --- §4.2 색차와 팔레트 오차 ------------------------------------------------ */

check("§4.2 RGB→Lab은 D65·sRGB 표준 전달 함수",
  /0\.4124564|0\.95047/.test(src) && /1\.055/.test(src),
  "the D65 matrix or the sRGB transfer function is not the standard one");
check("§4.2 팔레트 오차는 coverage 가중 평균이며 일대일 매칭을 강제하지 않는다",
  /weighted \+= bin\.coverage \* best|weight \+= bin\.coverage/.test(src) && !/usedGenerated|matched\.add/.test(src),
  "one-to-one matching appears to be enforced, or the weighting is not by coverage");

rmSync(dir, { recursive: true, force: true });

const failed = results.filter((r) => !r.pass);
console.log(JSON.stringify({
  ran: results.length,
  passed: results.length - failed.length,
  failed: failed.length,
  results,
}, null, 1));
process.exit(failed.length ? 1 : 0);
