#!/usr/bin/env node
/**
 * Post-processes the Codex-generated art for the /hangul launch pages into web/public/hangul/art/
 * (provenance: web/public/hangul/art/PROVENANCE.md).
 *
 *   node docs/research/2026-10-21-hangul/r15/art/process.mjs <dir with the Codex PNGs>
 *
 * - hanji-tile: the paper ground. Texture amplitude halved and re-centred on the page's 한지 tone
 *   (#f6f1e7), so the darkest fibre still leaves 옅은 먹 (#5c564b) text at 4.5:1 or more; 768px,
 *   shown as a 384 CSS px tile (sharp on 2x screens).
 * - seal: the blank 인장 impression. Cropped to the stamp, alpha taken from how red each pixel is (so
 *   the paper, and the specks where the paste didn't take, become transparent), recoloured to the
 *   page's one accent, 주색 #b8391f.
 * - woodblock-ink: printed-ink grain for the dark install field. Range compressed so the pale specks
 *   stay grain (paper-coloured text keeps 4.5:1 against the lightest speck), 512px.
 * Needs sharp (web/node_modules).
 */
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "../../../../..");
const sharp = createRequire(path.join(ROOT, "web/package.json"))("sharp");
const SRC = process.argv[2];
const OUT = path.join(ROOT, "web/public/hangul/art");
if (!SRC) throw new Error("usage: process.mjs <dir with hanji-tile.png, seal-blank.png, woodblock-ink.png>");
fs.mkdirSync(OUT, { recursive: true });

const PAPER = [0xf6, 0xf1, 0xe7];
const JU = [0xb8, 0x39, 0x1f];
const lum = ([r, g, b]) => {
  const c = [r, g, b].map((v) => v / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const ratio = (a, b) => (Math.max(lum(a), lum(b)) + 0.05) / (Math.min(lum(a), lum(b)) + 0.05);

// 1. hanji tile
{
  const src = path.join(SRC, "hanji-tile.png");
  const st = await sharp(src).stats();
  const k = 0.5;
  const mean = st.channels.slice(0, 3).map((c) => c.mean);
  const buf = await sharp(src)
    .removeAlpha()
    .linear([k, k, k], mean.map((m, i) => PAPER[i] - k * m))
    .resize(768, 768, { kernel: "lanczos3" })
    // the texture is faint, so low WebP qualities turn it into visible 16px blocks; 92 keeps the fibres
    .webp({ quality: 92, effort: 6 })
    .toBuffer();
  fs.writeFileSync(path.join(OUT, "hanji-tile.webp"), buf);
  const { data, info } = await sharp(buf).raw().toBuffer({ resolveWithObject: true });
  let dark = [255, 255, 255];
  for (let i = 0; i < data.length; i += info.channels) {
    const px = [data[i], data[i + 1], data[i + 2]];
    if (lum(px) < lum(dark)) dark = px;
  }
  const s = await sharp(buf).stats();
  console.log(`hanji-tile.webp ${buf.length} B, mean ${s.channels.slice(0, 3).map((c) => Math.round(c.mean)).join(",")}, darkest ${dark.join(",")}: ink-2 ${ratio([0x5c, 0x56, 0x4b], dark).toFixed(2)}:1, ju ${ratio(JU, dark).toFixed(2)}:1, ink ${ratio([0x1c, 0x1a, 0x16], dark).toFixed(2)}:1`);
}

// 2. seal: crop, alpha from redness, recolour
{
  const src = path.join(SRC, "seal-blank.png");
  const { data, info } = await sharp(src).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  // the stamp's bounding box: rows/columns where more than a third of the pixels are strongly red
  const red = (i) => data[i] - (data[i + 1] + data[i + 2]) / 2;
  const rows = [];
  const cols = [];
  for (let y = 0; y < info.height; y++) {
    let n = 0;
    for (let x = 0; x < info.width; x++) if (red((y * info.width + x) * 3) > 90) n++;
    rows.push(n);
  }
  for (let x = 0; x < info.width; x++) {
    let n = 0;
    for (let y = 0; y < info.height; y++) if (red((y * info.width + x) * 3) > 90) n++;
    cols.push(n);
  }
  const span = (a) => [a.findIndex((n) => n > info.width / 3), a.length - 1 - [...a].reverse().findIndex((n) => n > info.width / 3)];
  const [y0, y1] = span(rows);
  const [x0, x1] = span(cols);
  const pad = 14;
  const box = { left: x0 - pad, top: y0 - pad, width: x1 - x0 + 1 + 2 * pad, height: y1 - y0 + 1 + 2 * pad };
  const crop = await sharp(src).removeAlpha().extract(box).raw().toBuffer({ resolveWithObject: true });
  const rgba = Buffer.alloc(crop.info.width * crop.info.height * 4);
  for (let p = 0, q = 0; p < crop.data.length; p += 3, q += 4) {
    const r = crop.data[p] - (crop.data[p + 1] + crop.data[p + 2]) / 2;
    const a = Math.max(0, Math.min(1, (r - 30) / 110));
    rgba[q] = JU[0];
    rgba[q + 1] = JU[1];
    rgba[q + 2] = JU[2];
    rgba[q + 3] = Math.round(a * 255);
  }
  const buf = await sharp(rgba, { raw: { width: crop.info.width, height: crop.info.height, channels: 4 } })
    .resize(192, 192, { kernel: "lanczos3" })
    .webp({ quality: 82, alphaQuality: 90, effort: 6 })
    .toBuffer();
  fs.writeFileSync(path.join(OUT, "seal.webp"), buf);
  console.log(`seal.webp ${buf.length} B (stamp box ${JSON.stringify(box)})`);
}

// 3. woodblock ink grain
{
  const src = path.join(SRC, "woodblock-ink.png");
  const buf = await sharp(src).removeAlpha().greyscale().linear(0.34, 16).resize(512, 512, { kernel: "lanczos3" }).webp({ quality: 70, effort: 6 }).toBuffer();
  fs.writeFileSync(path.join(OUT, "woodblock-ink.webp"), buf);
  const s = await sharp(buf).stats();
  const max = s.channels[0].max;
  const mean = Math.round(s.channels[0].mean);
  console.log(`woodblock-ink.webp ${buf.length} B, mean ${mean}, lightest ${max}: paper text ${ratio(PAPER, [max, max, max]).toFixed(2)}:1 on the lightest speck, ${ratio(PAPER, [mean, mean, mean]).toFixed(2)}:1 on the mean`);
}
