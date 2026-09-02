#!/usr/bin/env node
/**
 * showcase.mjs — 렌더 파일 하나(또는 여러 개 나란히)를 스크롤 시연 영상으로 만든다. F2 omd:showcase 의 엔진.
 *
 * 왜 프레임 캡처인가: 실시간 recordVideo/스크린캐스트는 프레임이 튄다. 스크롤 위치를 프레임마다 결정론적으로
 * 놓고(`scrollTop = ease(t)`) 스크린샷을 찍으면 같은 입력에 같은 영상이 나오고, 60fps H.264 인코딩도 ffmpeg 한
 * 줄이다(리서치 §C 권고). 페이지 애니메이션은 캡처 전에 스크롤 여정을 한 번 돌려 리빌을 끝낸 뒤 "정지 상태"를
 * 찍는다 — 시연은 페이지의 구도·에셋·리듬을 보여 주는 것이지 리빌 타이밍을 재는 것이 아니다.
 *
 * usage:
 *   node showcase.mjs <render.html> [--out demo.mp4] [--seconds 12] [--fps 30] [--width 1440] [--height 900]
 *                     [--dpr 2] [--hold 1.2] [--gif] [--label "text"]
 *   node showcase.mjs --compare a/render.html b/render.html c/render.html [--out compare.mp4] [--labels "A|B|C"]
 *
 * 산출: mp4 (H.264, yuv420p, faststart). --gif 면 palette 기반 gif도 낸다. 하단 고지가 페이지에 있어야 한다
 * (콘텐츠 룰) — 이 도구는 고지를 만들지 않는다.
 */
import { createRequire } from "node:module";
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";
import { tmpdir } from "node:os";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright-core");

const argv = process.argv.slice(2);
const opt = (n, d) => { const i = argv.indexOf("--" + n); return i >= 0 ? argv[i + 1] : d; };
const flag = (n) => argv.includes("--" + n);
const compare = flag("compare");
const inputs = argv.filter((a, i) => !a.startsWith("--") && !(i > 0 && /^--(out|seconds|fps|width|height|dpr|hold|label|labels)$/.test(argv[i - 1])));
if (!inputs.length) { console.error("usage: showcase.mjs <render.html> [--out x.mp4] | --compare a b c"); process.exit(2); }
const W = Number(opt("width", 1440)), H = Number(opt("height", 900)), DPR = Number(opt("dpr", 2));
const SECONDS = Number(opt("seconds", 12)), FPS = Number(opt("fps", 30)), HOLD = Number(opt("hold", 1.2));
const OUT = resolve(opt("out", compare ? "compare.mp4" : join(dirname(resolve(inputs[0])), "showcase.mp4")));
const LABELS = (opt("labels", "") || "").split("|").filter(Boolean);
const LABEL = opt("label", "");
const ff = spawnSync("ffmpeg", ["-version"], { encoding: "utf8" });
if (ff.status !== 0) { console.error("ffmpeg가 없다 — brew install ffmpeg"); process.exit(3); }

const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

async function captureFrames(file, dir, label) {
  mkdirSync(dir, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: DPR, colorScheme: "light" });
  const page = await context.newPage();
  await page.goto("file://" + resolve(file), { waitUntil: "load", timeout: 30000 });
  await page.waitForTimeout(800);
  // 리빌을 끝내는 사전 여정
  const docH = await page.evaluate(async () => { const h = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight); for (let y = 0; y <= h; y += Math.round(innerHeight * 0.8)) { window.scrollTo({ top: y, behavior: "instant" }); await new Promise((r) => setTimeout(r, 120)); } window.scrollTo({ top: 0, behavior: "instant" }); return h; });
  await page.waitForTimeout(600);
  if (label) await page.evaluate((t) => { const d = document.createElement("div"); d.textContent = t; d.style.cssText = "position:fixed;left:16px;top:16px;z-index:2147483647;font:600 14px/1 -apple-system,Inter,system-ui,sans-serif;color:#fff;background:rgba(0,0,0,.72);padding:8px 12px;border-radius:6px;letter-spacing:.02em;pointer-events:none"; document.body.appendChild(d); }, label);
  const maxScroll = Math.max(0, docH - H);
  const total = Math.round(SECONDS * FPS), holdF = Math.round(HOLD * FPS);
  const moveF = Math.max(1, total - 2 * holdF);
  let n = 0;
  const shot = async (y) => { await page.evaluate((yy) => window.scrollTo({ top: yy, behavior: "instant" }), y); await page.screenshot({ path: join(dir, `f${String(n++).padStart(5, "0")}.png`), type: "png" }); };
  for (let i = 0; i < holdF; i++) await shot(0);
  for (let i = 0; i < moveF; i++) await shot(Math.round(easeInOut(i / (moveF - 1 || 1)) * maxScroll));
  for (let i = 0; i < holdF; i++) await shot(maxScroll);
  await browser.close();
  return { frames: n, docH, maxScroll };
}

function encode(frameDir, out, extraFilter) {
  const args = ["-y", "-framerate", String(FPS), "-i", join(frameDir, "f%05d.png"), "-vf", `${extraFilter ? extraFilter + "," : ""}scale=trunc(iw/2)*2:trunc(ih/2)*2,format=yuv420p`, "-c:v", "libx264", "-preset", "medium", "-crf", "20", "-movflags", "+faststart", out];
  const r = spawnSync("ffmpeg", args, { encoding: "utf8" });
  if (r.status !== 0) { console.error(r.stderr.slice(-800)); process.exit(4); }
}
function encodeGif(mp4, gif) {
  const pal = mp4 + ".palette.png";
  spawnSync("ffmpeg", ["-y", "-i", mp4, "-vf", "fps=15,scale=960:-1:flags=lanczos,palettegen", pal], { encoding: "utf8" });
  const r = spawnSync("ffmpeg", ["-y", "-i", mp4, "-i", pal, "-filter_complex", "fps=15,scale=960:-1:flags=lanczos[x];[x][1:v]paletteuse", gif], { encoding: "utf8" });
  rmSync(pal, { force: true });
  return r.status === 0;
}

const work = join(tmpdir(), `omd-showcase-${Date.now()}`);
mkdirSync(work, { recursive: true });
const t0 = Date.now();
if (!compare) {
  const info = await captureFrames(inputs[0], join(work, "a"), LABEL);
  encode(join(work, "a"), OUT);
  if (flag("gif")) encodeGif(OUT, OUT.replace(/\.mp4$/, ".gif"));
  console.log(`SHOWCASE_DONE ${OUT} frames=${info.frames} doc=${info.docH}px ${Math.round((Date.now() - t0) / 1000)}s`);
} else {
  const dirs = [];
  for (let i = 0; i < inputs.length; i++) { const d = join(work, `in${i}`); const info = await captureFrames(inputs[i], d, LABELS[i] || basename(dirname(resolve(inputs[i])))); dirs.push({ d, info }); }
  // 각 arm을 개별 mp4로 만든 뒤 hstack — 페이지 높이가 달라도 스크롤은 각자 0→끝으로 정규화된다
  const parts = dirs.map(({ d }, i) => { const p = join(work, `part${i}.mp4`); encode(d, p); return p; });
  const args = ["-y", ...parts.flatMap((p) => ["-i", p]), "-filter_complex", `${parts.map((_, i) => `[${i}:v]scale=${Math.floor(W * DPR / parts.length / 2) * 2}:-2[v${i}]`).join(";")};${parts.map((_, i) => `[v${i}]`).join("")}hstack=inputs=${parts.length},format=yuv420p`, "-c:v", "libx264", "-preset", "medium", "-crf", "20", "-movflags", "+faststart", OUT];
  const r = spawnSync("ffmpeg", args, { encoding: "utf8" });
  if (r.status !== 0) { console.error(r.stderr.slice(-800)); process.exit(4); }
  if (flag("gif")) encodeGif(OUT, OUT.replace(/\.mp4$/, ".gif"));
  console.log(`SHOWCASE_DONE ${OUT} arms=${parts.length} ${Math.round((Date.now() - t0) / 1000)}s`);
}
rmSync(work, { recursive: true, force: true });
