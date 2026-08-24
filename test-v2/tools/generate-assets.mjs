/**
 * Brand asset generation — the half of the pipeline that was missing.
 *
 * The capture side measures what a brand actually publishes. This side turns
 * those measurements into generated assets: a grok-4.6 worker looks at the
 * brand's real captures, decides a shot list, generates images with its
 * `image_gen` tool, and animates a few of them with `image_to_video`.
 *
 * Two design rules, both learned the hard way this round:
 *
 *   - Prompts cite measured facts only. An earlier attempt invented prompts
 *     from imagination and produced a "Musinsa" that looked like a generator's
 *     idea of fashion. Every visual claim in the worker's brief comes from
 *     evidence.json — palette hexes, luminance, aspect, subject placement —
 *     or from the capture PNGs the worker is shown.
 *   - The worker decides, the brief informs. The user's instruction is to look
 *     at the site first and then choose what to make. So the brief hands over
 *     facts and constraints, not a fixed shot list.
 *
 * The shape is already the future feature: URL → capture (pipeline.mjs) →
 * brief → generate → measure. Only the first stage needs a URL.
 *
 *   node generate-assets.mjs --brand musinsa                  # brief + command
 *   node generate-assets.mjs --brand musinsa --run            # actually generate
 *   node generate-assets.mjs --brand musinsa --run --images 4 --videos 1   # pilot
 */

import { execFile } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const HERE = dirname(fileURLToPath(import.meta.url));
const EVIDENCE_ROOT = resolve(HERE, "..", "00-evidence");
const PROMPTS_ROOT = resolve(HERE, "..", "01-prompts");
const OUT_ROOT = resolve(HERE, "..", "02-generated");
const GROK = join(homedir(), ".grok", "bin", "grok");

const MAX_IMAGES = 20;
const MAX_VIDEOS = 3;

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? fallback : process.argv[i + 1];
}
const flag = (name) => process.argv.includes(`--${name}`);

/* ------------------------------------------------------------- brief ------ */

/**
 * Only resolved measurements make it into the brief. An unresolved subject or
 * an absent canvas is omitted, not padded — the worker inventing a value the
 * capture could not resolve is exactly the failure this pipeline exists to
 * prevent.
 */
function factsOf(evidence) {
  const out = { surfaces: {} };
  for (const [id, s] of Object.entries(evidence.surfaces ?? {})) {
    const agg = s.imagery?.aggregate ?? {};
    const chrome = s.chrome ?? {};
    const samples = s.imagery?.samples ?? [];

    const paletteBins = samples[0]?.palette?.slice(0, 4)?.map((b) => ({ hex: b.hex, coverage: b.coverage })) ?? [];
    const facts = {
      viewport: s.viewport,
      imagerySampled: s.imagery?.sampled ?? 0,
      canvas: chrome.pageBackgroundRendered?.resolved ? chrome.pageBackgroundRendered.hex : chrome.pageBackgroundComputed ?? null,
      primaryButton: chrome.primaryButton ? { background: chrome.primaryButton.background, radiusPx: chrome.primaryButton.radiusPx } : null,
      dominantImageryPalette: paletteBins,
      meanLuma: agg.meanLuma ?? null,
      dynamicRange: agg.dynamicRange ?? null,
      typicalAspect: agg.aspects ?? null,
      subjectCentre: agg.subjectCenterX != null ? { x: agg.subjectCenterX, y: agg.subjectCenterY } : null,
      motion: s.motion?.present ? { duration: s.motion.duration, shotLengthSec: s.motion.shotLengthSec ?? null, cutCount: s.motion.cutCount ?? null } : null,
    };
    // Drop nulls so absence reads as absence.
    out.surfaces[id] = Object.fromEntries(Object.entries(facts).filter(([, v]) => v !== null));
  }
  return out;
}

function referenceImages(brand) {
  const dir = join(EVIDENCE_ROOT, brand, "capture");
  if (!existsSync(dir)) return [];
  const all = readdirSync(dir);
  const pick = [];
  for (const name of ["desktop-1440-viewport.png", "mobile-390-viewport.png"]) {
    if (all.includes(name)) pick.push(join(dir, name));
  }
  // A handful of real imagery crops, largest first, so the worker sees what
  // the brand actually photographs rather than guessing from the viewport.
  const crops = all.filter((f) => /imagery-\d+\.png$/.test(f)).sort().slice(0, 6);
  for (const c of crops) pick.push(join(dir, c));
  return pick;
}

function buildBrief(brand, evidence, imageCount, videoCount) {
  const facts = factsOf(evidence);
  const refs = referenceImages(brand);
  return {
    brand,
    source: { url: evidence.source?.url, finalUrl: evidence.source?.finalUrl, capturedAt: evidence.capturedAt },
    task: [
      `브랜드 ${brand}의 공식 표면 캡처와 실측값을 보고, 이 브랜드 스타일의 생성 에셋 세트를 만든다.`,
      `이미지 최대 ${imageCount}장, 영상 최대 ${videoCount}개. 넉넉하게 만들되 상한을 넘기지 않는다.`,
      "샷 리스트는 네가 정한다 — 히어로 후보, 이 브랜드가 실제로 찍는 종류의 사진, 배경/텍스처, 모바일 세로 컷을 섞어라.",
      "영상은 생성한 이미지 중 가장 브랜드다운 것을 골라 image_to_video로 만든다 (6초, 720p). 텍스트만으로 영상을 만들지 마라.",
    ],
    hardRules: [
      "모든 시각적 결정은 아래 실측값과 참조 이미지에서만 나온다. 실측에 없는 색·구도·분위기를 발명하지 않는다.",
      "이미지 안에 글자·로고·워드마크를 넣지 않는다. 브랜드명을 프롬프트에 쓰지 않는다 — 브랜드는 색·빛·구도·피사체로만 드러나야 한다.",
      "실측에 없는 값이 필요하면 그 샷을 포기한다. 추정으로 채우지 않는다.",
      "각 이미지의 프롬프트에 어떤 실측값을 인용했는지 shots.json에 기록한다.",
    ],
    measuredFacts: facts,
    referenceImages: refs,
    outputContract: {
      imagesDir: "images/",
      videosDir: "videos/",
      manifest: "shots.json",
      manifestShape: {
        brand: "string",
        shots: [{ file: "images/NN.jpg", role: "hero|imagery|texture|mobile", prompt: "실제 사용한 프롬프트", citedFacts: ["measuredFacts에서 인용한 키"], aspect: "16:9|9:16|3:2|1:1" }],
        videos: [{ file: "videos/NN.mp4", fromImage: "images/NN.jpg", motivation: "왜 이 이미지를 움직였나", durationSec: 6 }],
      },
    },
  };
}

/* ------------------------------------------------------------- worker ----- */

function workerPrompt(brief, outDir) {
  return [
    "너는 브랜드 에셋 생성 워커다. 아래 브리프의 hardRules를 절대 어기지 마라.",
    "",
    "절차:",
    "1. referenceImages의 파일들을 열어 브랜드의 실제 시각 언어를 파악한다 (view 도구).",
    "2. measuredFacts와 대조해 샷 리스트를 정한다.",
    `3. image_gen으로 순서대로 생성한다. 각 생성 직후 결과를 ${outDir}/images/NN.jpg (NN=01부터)로 cp한다.`,
    `4. 가장 브랜드다운 이미지 ${brief.task[1].includes("영상 최대") ? "" : ""}몇 장을 골라 image_to_video로 영상을 만들고 ${outDir}/videos/NN.mp4로 cp한다.`,
    `5. ${outDir}/shots.json을 outputContract.manifestShape 형태로 작성한다. 프롬프트는 실제 사용한 문자열 그대로.`,
    "6. 마지막 줄에 'DONE images=<n> videos=<n>'을 출력한다.",
    "",
    "브리프:",
    JSON.stringify(brief, null, 2),
  ].join("\n");
}

/* --------------------------------------------------------------- main ----- */

const brand = arg("brand");
if (!brand) {
  console.error("usage: generate-assets.mjs --brand <id> [--run] [--images N] [--videos N]");
  process.exit(1);
}
const evidencePath = join(EVIDENCE_ROOT, brand, "evidence.json");
if (!existsSync(evidencePath)) {
  console.error(`no evidence for ${brand} — run pipeline.mjs first (capture comes before generation)`);
  process.exit(1);
}

const imageCount = Math.min(MAX_IMAGES, Number(arg("images", MAX_IMAGES)));
const videoCount = Math.min(MAX_VIDEOS, Number(arg("videos", MAX_VIDEOS)));
const evidence = JSON.parse(readFileSync(evidencePath, "utf8"));

const outDir = join(OUT_ROOT, brand);
mkdirSync(join(outDir, "images"), { recursive: true });
mkdirSync(join(outDir, "videos"), { recursive: true });
mkdirSync(join(PROMPTS_ROOT, brand), { recursive: true });

// A brand may already carry assets from an earlier run; the worker continues
// the numbering instead of overwriting 01.
const existingImages = readdirSync(join(outDir, "images")).filter((f) => /\.(jpg|png)$/.test(f)).length;
const existingVideos = readdirSync(join(outDir, "videos")).filter((f) => /\.mp4$/.test(f)).length;

const brief = buildBrief(brand, evidence, imageCount, videoCount);
if (existingImages) {
  brief.existing = {
    images: existingImages,
    videos: existingVideos,
    rule: `images/${String(existingImages + 1).padStart(2, "0")}.jpg부터 이어서 번호를 매기고, 기존 파일을 덮어쓰지 마라. shots.json은 기존 항목을 보존하고 새 항목을 추가한다.`,
  };
}
const briefPath = join(PROMPTS_ROOT, brand, "asset-brief.json");
writeFileSync(briefPath, `${JSON.stringify(brief, null, 2)}\n`, "utf8");

if (!flag("run")) {
  console.log(JSON.stringify({ brief: briefPath, outDir, note: "add --run to generate" }, null, 1));
  process.exit(0);
}

const startedAt = Date.now();
const prompt = workerPrompt(brief, outDir);
writeFileSync(join(PROMPTS_ROOT, brand, "worker-prompt.txt"), prompt, "utf8");

let workerOut = "";
try {
  const { stdout } = await execFileAsync(GROK, ["-p", prompt, "-m", "grok-4.6", "--always-approve", "--cwd", outDir], {
    maxBuffer: 64 * 1024 * 1024,
    timeout: 3600000,
  });
  workerOut = stdout;
} catch (e) {
  workerOut = (e.stdout ?? "") + `\nWORKER_ERROR: ${String(e).split("\n")[0]}`;
}
writeFileSync(join(PROMPTS_ROOT, brand, "worker-log.txt"), workerOut, "utf8");

const images = existsSync(join(outDir, "images")) ? readdirSync(join(outDir, "images")).filter((f) => /\.(jpg|png)$/.test(f)) : [];
const videos = existsSync(join(outDir, "videos")) ? readdirSync(join(outDir, "videos")).filter((f) => /\.mp4$/.test(f)) : [];
const manifest = existsSync(join(outDir, "shots.json"));

console.log(JSON.stringify({
  brand,
  images: images.length,
  videos: videos.length,
  manifest,
  seconds: +((Date.now() - startedAt) / 1000).toFixed(1),
  briefPath,
  outDir,
  workerDone: /DONE images=\d+/.test(workerOut),
}, null, 1));
