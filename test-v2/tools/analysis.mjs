/**
 * Shared pixel analysis for the media-evidence capture tools.
 *
 * Two capture channels feed these: Playwright for ordinary sites, and Aside for
 * ones that refuse automated browsers (Coupang answers Playwright with a 403
 * "Access Denied" and answers Aside with its actual homepage). The channel
 * differs; the measurements must not, or evidence from the two is not
 * comparable.
 */

import { execFile } from "node:child_process";
import { readFileSync, rmSync } from "node:fs";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export const median = (xs) => {
  if (!xs.length) return null;
  const s = [...xs].sort((a, b) => a - b);
  return +s[Math.floor(s.length / 2)].toFixed(3);
};


/**
 * Decodes a PNG file to raw RGB at a small width.
 *
 * Files rather than pipes on both ends, deliberately: handing ffmpeg a ~1MB PNG
 * on stdin through child_process deadlocks — the parent is still writing stdin
 * while ffmpeg is already blocked writing stdout, and neither side drains.
 */
export async function toRgb(pngPath, width = 160) {
  const rawPath = `${pngPath}.rgb`;
  await execFileAsync("ffmpeg", [
    "-loglevel", "error", "-y", "-i", pngPath,
    "-vf", `scale=${width}:-1`, "-f", "rawvideo", "-pix_fmt", "rgb24", rawPath,
  ]);
  const data = readFileSync(rawPath);
  rmSync(rawPath, { force: true });
  const height = Math.round(data.length / (width * 3));
  return { data, width, height };
}

const hex = (r, g, b) => `#${[r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")}`;
const luma = (r, g, b) => (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

/**
 * Dominant colours by 5-bit quantisation, reported with the share of the frame
 * they cover. Coverage is the part that matters for a prompt: "black at 42%" is
 * an instruction, "black is in the palette" is not.
 */
export function palette({ data, width, height }) {
  const bins = new Map();
  for (let i = 0; i < width * height; i++) {
    const r = data[i * 3], g = data[i * 3 + 1], b = data[i * 3 + 2];
    const key = ((r >> 3) << 10) | ((g >> 3) << 5) | (b >> 3);
    const bin = bins.get(key) ?? { r: 0, g: 0, b: 0, n: 0 };
    bin.r += r; bin.g += g; bin.b += b; bin.n++;
    bins.set(key, bin);
  }
  const total = width * height;
  return [...bins.values()].sort((a, b) => b.n - a.n).slice(0, 6).map((bin) => {
    const r = Math.round(bin.r / bin.n), g = Math.round(bin.g / bin.n), b = Math.round(bin.b / bin.n);
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    return {
      hex: hex(r, g, b),
      coverage: +(bin.n / total).toFixed(4),
      saturation: +(max === 0 ? 0 : (max - min) / max).toFixed(3),
      luma: +luma(r, g, b).toFixed(3),
    };
  });
}

/**
 * Brightness description: how bright, how contrasty, and which way brightness
 * falls off across the frame.
 *
 * `luminanceGradient` is NOT a light direction. It is the difference between
 * half-frame averages, so a bright garment on one side, a white background, or
 * the subject sitting off-centre all read as "brighter left". It must not be
 * promoted into a key-light instruction in a prompt — that is a different
 * physical quantity than the one measured here.
 */
export function light({ data, width, height }) {
  const lumas = new Float64Array(width * height);
  let sum = 0;
  for (let i = 0; i < width * height; i++) {
    const v = luma(data[i * 3], data[i * 3 + 1], data[i * 3 + 2]);
    lumas[i] = v; sum += v;
  }
  const sortedL = Float64Array.from(lumas).sort();
  const at = (q) => +sortedL[Math.floor(q * (sortedL.length - 1))].toFixed(3);

  const meanOf = (fromX, toX, fromY, toY) => {
    let s = 0, n = 0;
    for (let y = fromY; y < toY; y++) for (let x = fromX; x < toX; x++) { s += lumas[y * width + x]; n++; }
    return n ? s / n : 0;
  };
  const dx = +(meanOf(Math.floor(width / 2), width, 0, height) - meanOf(0, Math.floor(width / 2), 0, height)).toFixed(3);
  const dy = +(meanOf(0, width, Math.floor(height / 2), height) - meanOf(0, width, 0, Math.floor(height / 2))).toFixed(3);
  const strongest = Math.abs(dx) >= Math.abs(dy)
    ? (dx > 0 ? "brighter right" : "brighter left")
    : (dy > 0 ? "brighter bottom" : "brighter top");
  // Named for what it is, not for what one might wish it were.

  return {
    meanLuma: +(sum / (width * height)).toFixed(3),
    p05: at(0.05), p50: at(0.5), p95: at(0.95),
    dynamicRange: +(at(0.95) - at(0.05)).toFixed(3),
    gradient: { dx, dy },
    luminanceGradient: Math.max(Math.abs(dx), Math.abs(dy)) >= 0.04 ? strongest : "even",
  };
}

/**
 * Where the subject sits, without a saliency model: take the frame border as the
 * background reference, then find the centre of mass of everything that departs
 * from it.
 *
 * Returns null when the result is not trustworthy — if the deviating region
 * covers almost the whole frame there was no figure-ground to find, and a
 * centre-of-frame number would be an artefact. A prompt would cite it anyway,
 * so it must not exist.
 */
export function subject({ data, width, height }) {
  const border = [];
  for (let x = 0; x < width; x++) border.push(x, (height - 1) * width + x);
  for (let y = 0; y < height; y++) border.push(y * width, y * width + width - 1);
  let br = 0, bg = 0, bb = 0;
  for (const i of border) { br += data[i * 3]; bg += data[i * 3 + 1]; bb += data[i * 3 + 2]; }
  const n = border.length;
  const bgColor = { r: br / n, g: bg / n, b: bb / n };

  // Spread of the border itself: a busy border means the image is edge-to-edge
  // content and there is no background to subtract.
  let borderVar = 0;
  for (const i of border) {
    borderVar += Math.hypot(data[i * 3] - bgColor.r, data[i * 3 + 1] - bgColor.g, data[i * 3 + 2] - bgColor.b);
  }
  borderVar /= n;

  const dev = new Float64Array(width * height);
  for (let i = 0; i < width * height; i++) {
    dev[i] = Math.hypot(data[i * 3] - bgColor.r, data[i * 3 + 1] - bgColor.g, data[i * 3 + 2] - bgColor.b);
  }
  const threshold = Float64Array.from(dev).sort()[Math.floor(0.75 * (dev.length - 1))];

  let sx = 0, sy = 0, count = 0, minX = width, maxX = 0, minY = height, maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (dev[y * width + x] < threshold) continue;
      sx += x; sy += y; count++;
      if (x < minX) minX = x; if (x > maxX) maxX = x;
      if (y < minY) minY = y; if (y > maxY) maxY = y;
    }
  }
  if (!count) return null;

  const boxW = (maxX - minX) / width;
  const boxH = (maxY - minY) / height;
  const separated = borderVar < 40 && boxW < 0.92 && boxH < 0.92;
  if (!separated) {
    // Says what the algorithm did, not what the picture is. A busy border, a
    // multi-subject frame and a textured background all fail the same way, so
    // "edge-to-edge crop" is a claim this measurement cannot make.
    return { resolved: false, reason: "algorithm could not separate figure from ground", borderVariance: +borderVar.toFixed(1) };
  }

  return {
    resolved: true,
    backgroundHex: hex(Math.round(bgColor.r), Math.round(bgColor.g), Math.round(bgColor.b)),
    center: { x: +(sx / count / width).toFixed(4), y: +(sy / count / height).toFixed(4) },
    box: { x: +(minX / width).toFixed(4), y: +(minY / height).toFixed(4), w: +boxW.toFixed(4), h: +boxH.toFixed(4) },
    coverage: +(count / (width * height)).toFixed(4),
  };
}


/**
 * Minimum resolved samples before a subject-placement median means anything.
 * Two out of twelve produced a median that sat at the centre of the frame —
 * a number the plan forbids citing, supplied by the plan's own tool.
 */
export const MIN_RESOLVED_SUBJECTS = 4;

/**
 * Subject aggregate, or nothing. Callers spread the result, so an omitted field
 * simply does not appear in evidence.json — which is the point: a prompt cannot
 * cite a key that is absent.
 */
export function aggregateSubject(resolved, sampled) {
  const base = { figureGroundResolved: `${resolved.length}/${sampled}` };
  if (resolved.length < MIN_RESOLVED_SUBJECTS) {
    return { ...base, subjectNote: `fewer than ${MIN_RESOLVED_SUBJECTS} resolved samples — placement omitted` };
  }
  return {
    ...base,
    subjectCenterX: median(resolved.map((s) => s.center.x)),
    subjectCenterY: median(resolved.map((s) => s.center.y)),
    subjectCoverage: median(resolved.map((s) => s.coverage)),
  };
}

/**
 * Crops a region out of a screenshot. The Aside channel returns one viewport
 * PNG rather than per-element shots, and cropping from it is steadier anyway —
 * element screenshots failed on transformed and carousel-parked nodes.
 */
export async function cropTo(srcPath, outPath, { x, y, w, h }) {
  await execFileAsync("ffmpeg", [
    "-loglevel", "error", "-y", "-i", srcPath,
    "-vf", `crop=${Math.round(w)}:${Math.round(h)}:${Math.round(x)}:${Math.round(y)}`,
    outPath,
  ]);
  return outPath;
}
