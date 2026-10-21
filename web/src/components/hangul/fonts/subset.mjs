#!/usr/bin/env node
/**
 * Builds the /hangul launch pages' display face, SongMyung-display.woff2, next to this file.
 *
 * Source: Song Myung Regular (송명, designer JIKJI), google/fonts `ofl/songmyung/SongMyung-Regular.ttf`,
 * "Version 1.00", "Copyright 2018 The Song Myung Project Authors", SIL Open Font License 1.1 (OFL.txt
 * here, copied from the same folder). The full file is 2.0 MB for the 2,350 syllables of KS X 1001.
 *
 * The pages set only a few strings in it (the h1, the h2s, the eval figures and the 판심제 in the hero
 * demo; every such element carries the class `hg-d`), so the subset holds exactly the Hangul syllables
 * of those strings in both locales, plus Basic Latin and the punctuation the font ships (‘ ’ “ ” … – —).
 * Song Myung has no − (U+2212) or →, so neither may be set in this face. display-glyphs.json records
 * the characters that went in and the woff2's sha256; __tests__/hangul-display-face.test.ts renders
 * both pages and checks every `hg-d` character against it, so a copy change that needs a new syllable
 * fails the test until this script is run again.
 *
 * usage:
 *   node web/src/components/hangul/fonts/subset.mjs <SongMyung-Regular.ttf> <python>
 * where <python> has fonttools and brotli, e.g. `uv venv v && uv pip install --python v/bin/python fonttools brotli`.
 * Needs Node 22.18+ (it imports ../copy.ts with type stripping).
 */
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { EVAL_FIGURES, HANGUL_COPY, PANSIM_TITLE, fill } from "../copy.ts";
import assets from "../../../data/hangul-assets.json" with { type: "json" };

const HERE = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(HERE, "SongMyung-display.woff2");
const MANIFEST = path.join(HERE, "display-glyphs.json");
const [src, python] = process.argv.slice(2);
if (!src || !python) {
  console.error("usage: node subset.mjs <SongMyung-Regular.ttf> <python with fonttools+brotli>");
  process.exit(2);
}

/** The strings the pages set in the display face (keep in step with the `hg-d` elements). */
const strings = [PANSIM_TITLE, `${EVAL_FIGURES.before}/${EVAL_FIGURES.runs}`, `${EVAL_FIGURES.after}/${EVAL_FIGURES.runs}`];
for (const t of Object.values(HANGUL_COPY)) {
  strings.push(t.hero.h1, t.why.h2, t.evals.h2, t.assets.shotsH2, t.assets.videoH2, t.rules.h2, t.install.h2);
  strings.push(fill(t.assets.measuredH2, { services: assets.measured?.services ?? 0 }));
}
const ascii = Array.from({ length: 0x7e - 0x20 + 1 }, (_, i) => String.fromCharCode(0x20 + i)).filter((c) => c !== "`");
const wanted = new Set([...ascii, ..."‘’“”…–—", ...strings.join("")]);

const run = (code, ...args) => execFileSync(python, ["-c", code, ...args], { encoding: "utf8" });
// characters the source font actually maps; anything else would fall back to another face mid-string
const cmap = new Set(JSON.parse(run("import sys,json;from fontTools.ttLib import TTFont;print(json.dumps([chr(c) for c in TTFont(sys.argv[1]).getBestCmap()]))", src)));
const missing = [...wanted].filter((c) => !cmap.has(c));
if (missing.length) {
  console.error(`Song Myung has no glyph for: ${missing.map((c) => `${c} U+${c.codePointAt(0).toString(16).toUpperCase().padStart(4, "0")}`).join(", ")}`);
  process.exit(1);
}

const text = [...wanted].sort().join("");
const textFile = path.join(HERE, ".subset-text.tmp");
fs.writeFileSync(textFile, text);
try {
  execFileSync(python, ["-m", "fontTools.subset", src, `--text-file=${textFile}`, "--flavor=woff2", `--output-file=${OUT}`, "--no-hinting", "--layout-features=*", "--name-IDs=*", "--notdef-outline"], { stdio: "inherit" });
} finally {
  fs.rmSync(textFile, { force: true });
}

const outCmap = JSON.parse(run("import sys,json;from fontTools.ttLib import TTFont;print(json.dumps(sorted(chr(c) for c in TTFont(sys.argv[1]).getBestCmap())))", OUT)).join("");
const sha = (p) => createHash("sha256").update(fs.readFileSync(p)).digest("hex");
const manifest = {
  font: "Song Myung Regular, Version 1.00 (google/fonts ofl/songmyung)",
  licence: "OFL-1.1 (OFL.txt)",
  source: { file: path.basename(src), sha256: sha(src) },
  woff2: { file: path.basename(OUT), bytes: fs.statSync(OUT).size, sha256: sha(OUT) },
  hangulSyllables: [...outCmap].filter((c) => /[가-힣]/.test(c)).length,
  text: outCmap,
};
fs.writeFileSync(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`${path.relative(process.cwd(), OUT)} ${manifest.woff2.bytes} bytes, ${manifest.hangulSyllables} syllables, ${outCmap.length} characters`);
