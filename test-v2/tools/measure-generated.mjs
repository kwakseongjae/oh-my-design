/**
 * Measures generated assets against the brand's captured evidence.
 *
 * Generation without measurement is how the sage-green Musinsa happened — an
 * output that looks plausible and cites nothing. Every generated image goes
 * through the same instruments as the captures (palette, light, subject) and
 * through verify.mjs §4.2 scoring against the brand's aggregate, so "this
 * looks like the brand" becomes a number with a baseline instead of a feeling.
 *
 * Videos are sampled at their first frame for the same measurements, plus
 * duration; motion grammar scoring is out of scope here (the capture side's
 * cut detection needs multiple frames — kept for a later pass).
 *
 *   node measure-generated.mjs --brand musinsa
 *   node measure-generated.mjs --all
 */

import { execFile } from "node:child_process";
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import { light, palette, subject, toRgb } from "./analysis.mjs";

const execFileAsync = promisify(execFile);
const HERE = dirname(fileURLToPath(import.meta.url));
const OUT_ROOT = resolve(HERE, "..", "02-generated");
const EVIDENCE_ROOT = resolve(HERE, "..", "00-evidence");

function arg(name) {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
}

async function verifyScore(brand, imagePath, surface) {
  try {
    const { stdout } = await execFileAsync(process.execPath,
      [join(HERE, "verify.mjs"), "--brand", brand, "--surface", surface, "--generated", imagePath],
      { cwd: HERE, maxBuffer: 32 * 1024 * 1024, timeout: 120000 });
    const start = stdout.lastIndexOf("\n{");
    return JSON.parse(start === -1 ? stdout : stdout.slice(start));
  } catch (e) {
    if (e.stdout) { try { const s = e.stdout.lastIndexOf("\n{"); return JSON.parse(s === -1 ? e.stdout : e.stdout.slice(s)); } catch { /* fall through */ } }
    return { error: String(e).split("\n")[0] };
  }
}

async function firstFrame(videoPath, outPng) {
  await execFileAsync("ffmpeg", ["-loglevel", "error", "-y", "-i", videoPath, "-frames:v", "1", outPng]);
  return outPng;
}

async function videoDuration(videoPath) {
  try {
    const { stdout } = await execFileAsync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", videoPath]);
    return +Number(stdout.trim()).toFixed(2);
  } catch { return null; }
}

async function measureBrand(brand) {
  const dir = join(OUT_ROOT, brand);
  if (!existsSync(dir)) return { brand, skipped: "nothing generated" };
  const evidence = existsSync(join(EVIDENCE_ROOT, brand, "evidence.json"))
    ? JSON.parse(readFileSync(join(EVIDENCE_ROOT, brand, "evidence.json"), "utf8"))
    : null;
  // The verify basis follows where the brand's imagery actually is — Naver
  // has no desktop basis at all.
  const surface = evidence?.surfaces?.["desktop-1440"]?.imagery?.sampled >= 4 ? "desktop-1440" : "mobile-390";

  const shots = existsSync(join(dir, "shots.json")) ? JSON.parse(readFileSync(join(dir, "shots.json"), "utf8")) : null;
  const roleOf = (file) => shots?.shots?.find((s) => s.file.endsWith(file))?.role ?? null;

  // The comparison basis follows the shot's role. A 9:16 mobile cut scored
  // against the desktop aggregate loses the whole aspect field to a design
  // decision, not a generation error — Musinsa's pilot mobile shot came back
  // 24 for exactly that reason. And a texture close-up is outside what the
  // imagery aggregate describes at all (model shots), so its score is reported
  // but marked incomparable rather than engineered to look better.
  const hasMobile = (evidence?.surfaces?.["mobile-390"]?.imagery?.sampled ?? 0) >= 4;
  const surfaceForRole = (role) => (role === "mobile" && hasMobile ? "mobile-390" : surface);

  const images = [];
  const imagesDir = join(dir, "images");
  for (const f of (existsSync(imagesDir) ? readdirSync(imagesDir) : []).filter((f) => /\.(jpg|png)$/.test(f)).sort()) {
    const p = join(imagesDir, f);
    const rgb = await toRgb(p, 160);
    const role = roleOf(f);
    const verify = evidence ? await verifyScore(brand, p, surfaceForRole(role)) : { skipped: "no evidence to score against" };
    if (role === "texture" && verify?.numericScore != null) {
      verify.comparable = false;
      verify.why = "texture shot — the imagery aggregate describes the brand's photographic subjects, not its material close-ups";
    }
    images.push({
      file: `images/${f}`,
      role,
      scoredAgainst: surfaceForRole(role),
      palette: palette(rgb).slice(0, 4),
      light: light(rgb),
      subject: subject(rgb),
      aspect: +(rgb.width / rgb.height).toFixed(3),
      verify,
    });
  }

  const videos = [];
  const videosDir = join(dir, "videos");
  for (const f of (existsSync(videosDir) ? readdirSync(videosDir) : []).filter((f) => /\.mp4$/.test(f)).sort()) {
    const p = join(videosDir, f);
    const frame = join(videosDir, `${f}.frame.png`);
    let frameMeasure = null;
    try {
      await firstFrame(p, frame);
      const rgb = await toRgb(frame, 160);
      frameMeasure = { palette: palette(rgb).slice(0, 3), light: light(rgb) };
    } catch { /* an unreadable video is reported below by its null measure */ }
    videos.push({
      file: `videos/${f}`,
      durationSec: await videoDuration(p),
      firstFrame: frameMeasure,
      fromImage: shots?.videos?.find((v) => v.file.endsWith(f))?.fromImage ?? null,
    });
  }

  const scores = images.filter((i) => i.verify?.comparable !== false).map((i) => i.verify?.numericScore).filter((n) => n != null);
  const summary = {
    brand,
    surface,
    images: images.length,
    videos: videos.length,
    manifestPresent: !!shots,
    verifyScores: scores,
    medianVerify: scores.length ? scores.sort((a, b) => a - b)[Math.floor(scores.length / 2)] : null,
    // Read against the brand's own baseline (verify.mjs --baseline): the
    // brand's real images score ~50-70 against their own aggregate, so a
    // generated 60 is at-distribution, not "60% correct".
    note: "verify는 그날 스냅샷 추종이지 브랜드 정체성 점수가 아니다. --baseline 분포와 비교해 읽는다.",
  };

  const report = { ...summary, measuredAt: new Date().toISOString(), detail: { images, videos } };
  writeFileSync(join(dir, "measure.json"), `${JSON.stringify(report, null, 2)}\n`, "utf8");
  return summary;
}

const brands = process.argv.includes("--all")
  ? readdirSync(OUT_ROOT).filter((b) => !b.startsWith(".") && existsSync(join(OUT_ROOT, b)))
  : [arg("brand")].filter(Boolean);

if (!brands.length) {
  console.error("usage: measure-generated.mjs --brand <id> | --all");
  process.exit(1);
}

const results = [];
for (const b of brands) results.push(await measureBrand(b));
console.log(JSON.stringify(results, null, 1));
