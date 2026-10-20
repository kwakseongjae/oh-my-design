// Contact sheet for the shipped props: all 13 at 1x (512 px, no resampling), once on a white
// band and once on a light grey band, labelled by id.
//
//   node docs/research/2026-10-20-r11/props/contact-sheet.mjs [out.png] [--dark] [--full]
//
// Default output: contact-sheet.png next to this script. --dark adds a third, dark band
// (a local halo check; the landing is light-only, so the committed sheet has white and grey).
// The sheet is saved as a 256-colour dithered PNG, about half the full-colour size; --full keeps
// full colour (use it for edge QA).
import { createRequire } from "node:module";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const WEB = join(HERE, "../../../../web");
const sharp = createRequire(join(WEB, "package.json"))("sharp");

const IDS = [
  "coin", "card", "check-badge", "piggy-bank",
  "parcel-box", "price-tag", "shopping-bag",
  "chart-bars", "receipt", "calculator",
  "briefcase", "chat-bubble", "palette",
];
const args = process.argv.slice(2);
const dark = args.includes("--dark");
const full = args.includes("--full");
const out = args.find((a) => !a.startsWith("--")) ?? join(HERE, "contact-sheet.png");

const CELL = 512;
const COLS = 7;
const ROWS = Math.ceil(IDS.length / COLS);
const LABEL = 40;
const PAD = 32;
const HEADER = 72;
const BANDS = [
  { name: "white #FFFFFF", bg: "#FFFFFF", fg: "#555555" },
  { name: "light grey #EDEDEB", bg: "#EDEDEB", fg: "#555555" },
  ...(dark ? [{ name: "dark #1E1E1E (halo check)", bg: "#1E1E1E", fg: "#BBBBBB" }] : []),
];
const BAND_H = PAD + 28 + ROWS * (CELL + LABEL) + PAD;
const W = PAD * 2 + COLS * CELL;
const H = HEADER + BANDS.length * BAND_H;

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const layers = [];
let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">`;
svg += `<rect width="${W}" height="${HEADER}" fill="#FFFFFF"/>`;
svg += `<text x="${PAD}" y="46" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="#222">` +
  `OmD round-11 props · 13 at 1x (512 px) · OmD-generated generic props, not brand assets</text>`;

BANDS.forEach((band, b) => {
  const y0 = HEADER + b * BAND_H;
  svg += `<rect y="${y0}" width="${W}" height="${BAND_H}" fill="${band.bg}"/>`;
  svg += `<text x="${PAD}" y="${y0 + PAD + 14}" font-family="Helvetica, Arial, sans-serif" font-size="20" fill="${band.fg}">${esc(band.name)}</text>`;
  IDS.forEach((id, i) => {
    const col = i % COLS;
    const row = Math.floor(i / COLS);
    const x = PAD + col * CELL;
    const y = y0 + PAD + 28 + row * (CELL + LABEL);
    const file = join(WEB, "public/r11-props", `${id}.webp`);
    if (existsSync(file)) layers.push({ input: file, left: x, top: y });
    else svg += `<text x="${x + CELL / 2}" y="${y + CELL / 2}" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="24" fill="#C00">missing</text>`;
    svg += `<text x="${x + CELL / 2}" y="${y + CELL + 28}" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="22" fill="${band.fg}">${esc(id)}</text>`;
  });
});
svg += `</svg>`;

await sharp(Buffer.from(svg))
  .composite(layers)
  .flatten({ background: "#FFFFFF" })
  .png(full
    ? { compressionLevel: 9, adaptiveFiltering: true }
    : { palette: true, quality: 100, dither: 1, effort: 10, compressionLevel: 9 })
  .toFile(out);
console.log(`${out} ${W}x${H}`);
