/**
 * Cover: the 169 primary colours the post counted, one tile per service, in the post's own figure
 * order (hue families, then hue angle). Read from the post's figure-wall.svg, so the cover cannot
 * drift from the figure. The blue run is the post's finding, visible without a word.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const slug = "korean-brand-colors-measured";
export const titles = {
  ko: "한국 서비스 185곳의 브랜드 컬러",
  en: "Brand colors of 185 Korean services",
};

function swatches(webRoot) {
  const svg = readFileSync(join(webRoot, "public/blog-assets", slug, "figure-wall.svg"), "utf8");
  const fills = [...svg.matchAll(/<rect [^>]*rx="3" fill="(#[0-9a-fA-F]{6})"/g)].map((m) => m[1]);
  if (fills.length !== 169) throw new Error(`${slug}: expected 169 swatches in figure-wall.svg, found ${fills.length}`);
  return fills;
}

export const pictureCss = `
.wall{position:absolute;inset:0;display:grid;place-content:center;grid-template-columns:repeat(13,28px);gap:3px}
.wall i{width:28px;height:28px;border-radius:5px;box-shadow:inset 0 0 0 1px rgba(19,19,26,.06)}
`;

export function picture(_locale, { webRoot }) {
  return '<div class="wall">' + swatches(webRoot).map((c) => '<i style="background:' + c + '"></i>').join("") + "</div>";
}
