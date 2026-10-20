// Post-process the selected raw Codex PNGs into the shipped props.
//
//   node docs/research/2026-10-20-r11/props/postprocess.mjs [id ...]
//
// For each id (default: every id in selection.json):
//   1. Alpha gate. The raw PNG must carry real transparency: an alpha channel, all four corner
//      pixels at alpha 0 and a large fully transparent share. An opaque result is rejected and
//      regenerated; nothing is keyed out here, so there is no keying halo to ship.
//   2. Snap near-opaque alpha (>= ALPHA_SNAP) to 255. The generator leaves object bodies at
//      alpha ~253 (0.8% see-through); edges and the contact shadow (< ALPHA_SNAP) are untouched.
//   3. Trim to the bounding box of pixels with alpha > ALPHA_T (fainter pixels are invisible).
//   4. Pad to a square with a uniform transparent margin (MARGIN of the side), centred, so all
//      13 props have the same footprint.
//   5. Resize to 512x512 (lanczos3) and export WebP with alpha at quality 85, stepping down by 5
//      only if the file is over 60 KB (floor 70).
// Writes web/public/r11-props/<id>.webp and postprocess-report.json next to this script.
import { createRequire } from "node:module";
import { readFileSync, writeFileSync, statSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, "../../../..");
const WEB = join(ROOT, "web");
const sharp = createRequire(join(WEB, "package.json"))("sharp");

const RAW = join(HERE, "raw");
const OUT = join(WEB, "public/r11-props");
const SIZE = 512;
const MAX_BYTES = 60 * 1024;
const ALPHA_T = 8; // trim threshold: alpha <= 8/255 (~3%) counts as empty
const ALPHA_SNAP = 250; // alpha >= 250 becomes 255 (generator bodies sit at ~253)
const MARGIN = 0.08; // transparent margin on each side, as a share of the final side
const QUALITY_START = 85;
const QUALITY_FLOOR = 70;

const selection = JSON.parse(readFileSync(join(HERE, "selection.json"), "utf8"));
const ids = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(selection);
const reportPath = join(HERE, "postprocess-report.json");
let report = {};
try {
  report = JSON.parse(readFileSync(reportPath, "utf8"));
} catch {}

mkdirSync(OUT, { recursive: true });
let failed = 0;

for (const id of ids) {
  const rawName = selection[id];
  if (!rawName) {
    console.error(`FAIL ${id}: not in selection.json`);
    failed++;
    continue;
  }
  const rawPath = join(RAW, rawName);
  const meta = await sharp(rawPath).metadata();
  if (!meta.hasAlpha) {
    console.error(`FAIL ${id}: ${rawName} has no alpha channel (opaque) -> regenerate`);
    failed++;
    continue;
  }
  const { data, info } = await sharp(rawPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h, channels: c } = info;
  const alphaAt = (x, y) => data[(y * w + x) * c + 3];
  const corners = [alphaAt(0, 0), alphaAt(w - 1, 0), alphaAt(0, h - 1), alphaAt(w - 1, h - 1)];
  let transparent = 0;
  let snapped = 0;
  let minX = w, minY = h, maxX = -1, maxY = -1;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * c + 3;
      const a = data[i];
      if (a >= ALPHA_SNAP && a < 255) {
        data[i] = 255;
        snapped++;
      }
      if (a === 0) transparent++;
      if (a > ALPHA_T) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  const transparentShare = transparent / (w * h);
  if (corners.some((a) => a !== 0) || transparentShare < 0.2) {
    console.error(
      `FAIL ${id}: ${rawName} background not transparent (corners ${corners.join(",")}, ` +
        `transparent ${(transparentShare * 100).toFixed(1)}%) -> regenerate`,
    );
    failed++;
    continue;
  }
  const touchesEdge = minX === 0 || minY === 0 || maxX === w - 1 || maxY === h - 1;
  const bw = maxX - minX + 1;
  const bh = maxY - minY + 1;
  const inner = Math.max(bw, bh);
  const side = Math.round(inner / (1 - 2 * MARGIN));
  const left = Math.floor((side - bw) / 2);
  const top = Math.floor((side - bh) / 2);
  const squared = await sharp(data, { raw: { width: w, height: h, channels: c } })
    .extract({ left: minX, top: minY, width: bw, height: bh })
    .extend({
      left,
      right: side - bw - left,
      top,
      bottom: side - bh - top,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  let quality = QUALITY_START;
  let out;
  for (;;) {
    out = await sharp(squared)
      .resize(SIZE, SIZE, { kernel: "lanczos3" })
      .webp({ quality, alphaQuality: 100, effort: 6 })
      .toBuffer();
    if (out.length <= MAX_BYTES || quality - 5 < QUALITY_FLOOR) break;
    quality -= 5;
  }
  if (out.length > MAX_BYTES) {
    console.error(`FAIL ${id}: ${out.length} bytes at quality ${quality} is over 60 KB`);
    failed++;
    continue;
  }
  const dest = join(OUT, `${id}.webp`);
  writeFileSync(dest, out);
  const check = await sharp(dest).metadata();
  const stats = await sharp(dest).stats();
  report[id] = {
    raw: rawName,
    rawSize: [w, h],
    rawCornerAlpha: corners,
    rawTransparentShare: Number(transparentShare.toFixed(3)),
    alphaSnapped: Number((snapped / (w * h)).toFixed(3)),
    bbox: { x: minX, y: minY, width: bw, height: bh },
    bboxTouchesRawEdge: touchesEdge,
    margin: MARGIN,
    output: `web/public/r11-props/${id}.webp`,
    size: [check.width, check.height],
    hasAlpha: check.hasAlpha,
    alphaMin: stats.channels[3]?.min,
    quality,
    bytes: statSync(dest).size,
  };
  console.log(
    `OK ${id}: ${rawName} ${w}x${h} -> bbox ${bw}x${bh}${touchesEdge ? " (touches raw edge!)" : ""}` +
      ` -> ${check.width}x${check.height} q${quality} ${(statSync(dest).size / 1024).toFixed(1)} KB`,
  );
}

writeFileSync(reportPath, JSON.stringify(report, null, 2) + "\n");
if (failed) {
  console.error(`${failed} failed`);
  process.exit(1);
}
