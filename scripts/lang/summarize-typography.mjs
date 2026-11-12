#!/usr/bin/env node
/**
 * Turn the raw records of measure-typography.mjs into the table a language skill quotes.
 *
 *   node scripts/lang/summarize-typography.mjs <dir> [--md <file>] [--json <file>]
 *
 * <dir> is the --out of measure-typography.mjs (reads <dir>/raw/*.json). Prints the distributions; --md writes
 * the per-site table and the distributions as markdown, --json the per-site rows.
 *
 * Roles (weights are characters of the script the element holds):
 *   body      the size / line-height / letter-spacing / stack that holds the most characters among text of
 *             12–20px outside h1–h3. On most home pages this is list and navigation text as much as paragraphs.
 *   paragraph the same, restricted to text inside <p> that wraps to two or more lines (only when the page has
 *             at least 100 such characters). This is the reading for paragraph leading.
 *   heading   the same among h1–h3.
 * A property share is the share of the script's characters whose element computes that value.
 * Every figure is computed from the raw records; nothing is filled in for a page that could not be read.
 */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const opt = (name) => { const i = args.indexOf(name); return i === -1 ? null : args.splice(i, 2)[1]; };
const mdFile = opt("--md"), jsonFile = opt("--json");
const dir = args[0];
if (!dir) { console.error("usage: summarize-typography.mjs <dir> [--md <file>] [--json <file>]"); process.exit(2); }

// Faces that carry the script. A stack entry not on this list is not assumed to cover it.
const SCRIPT_FACES = {
  ja: /Noto (Sans|Serif)( CJK)? ?JP|NotoSans(CJK)?JP|Hiragino|ヒラギノ|Yu ?Gothic|游ゴシック|Yu ?Mincho|游明朝|Meiryo|メイリオ|MS ?P?(Gothic|Mincho)|ＭＳ|BIZ ?UD|M ?PLUS|Zen (Kaku|Maru|Old|Antique)|LINE ?Seed ?JP|Osaka|Kozuka|小塚|源ノ|Source Han|A-OTF|FOT-|Tsuku|筑紫|Tazugane|Shin ?Go|新ゴ|Ryumin|リュウミン|Koburina|こぶりな|AXIS|Kosugi|Sawarabi|Murecho|IBM Plex Sans JP|Mplus|Rodin|ロダン|Seurat|UD ?Kakugo|Midashi|見出|Gen ?Shin|Shippori|Klee|Kiwi Maru|Dela Gothic|Yusei|Stick|Hina Mincho|Kaisei|sans-serif-jp/i,
};
// One name per family: Japanese and Latin spellings, weights and foundry suffixes fold into the family.
const FAMILY = [[/ヒラギノ角ゴ|Hiragino Kaku Gothic/i, "Hiragino Kaku Gothic"], [/Hiragino Sans/i, "Hiragino Sans"], [/游ゴシック|Yu ?Gothic/i, "Yu Gothic"],
  [/メイリオ|Meiryo/i, "Meiryo"], [/Noto Sans( CJK)? ?JP|NotoSans(CJK)?JP/i, "Noto Sans JP"], [/Tazugane/i, "Tazugane Gothic"], [/Shin ?Go|新ゴ/i, "Shin Go"]];
const familyName = (f) => (f ? FAMILY.find(([re]) => re.test(f))?.[1] ?? f : "(none)");
const GENERIC = /^(sans-serif|serif|system-ui|-apple-system|BlinkMacSystemFont|ui-sans-serif|ui-serif|monospace|cursive|fantasy|emoji|math|inherit)$/i;
const stackOf = (family) => family.split(",").map((f) => f.trim().replace(/^["']|["']$/g, "")).filter(Boolean);

function top(rows, key) {
  const m = new Map();
  for (const r of rows) m.set(key(r), (m.get(key(r)) ?? 0) + r.chars);
  const total = rows.reduce((a, r) => a + r.chars, 0);
  return [...m.entries()].sort((a, z) => z[1] - a[1]).map(([k, n]) => ({ k, share: total ? n / total : 0 }));
}
const share = (rows, test) => { const t = rows.reduce((a, r) => a + r.chars, 0); return t ? rows.filter(test).reduce((a, r) => a + r.chars, 0) / t : null; };
function role(rows) {
  if (!rows.length) return null;
  const k = top(rows, (r) => `${r.size}|${r.lineHeight}|${r.letterSpacing}|${r.weight}`)[0].k.split("|");
  return { size: Number(k[0]), lineHeight: k[1] === "normal" ? "normal" : Number(k[1]), letterSpacing: Number(k[2]), weight: Number(k[3]) };
}

const langOf = {};
const sites = readdirSync(path.join(dir, "raw")).filter((f) => f.endsWith(".json")).sort().map((f) => JSON.parse(readFileSync(path.join(dir, "raw", f), "utf8")));
const out = [];
for (const s of sites) {
  langOf[s.lang] = true;
  if (!s.readable) { out.push({ id: s.id, readable: false, why: s.error ?? (s.status >= 400 ? `status ${s.status}` : `${s.chars ?? 0} characters of the script (html lang ${JSON.stringify(s.htmlLang ?? null)})`) }); continue; }
  const rows = s.rows, faces = SCRIPT_FACES[s.lang] ?? SCRIPT_FACES.ja;
  const bodyRows = rows.filter((r) => !r.heading && r.size >= 12 && r.size <= 20);
  const paraRows = bodyRows.filter((r) => r.inP && r.lines >= 2);
  const headRows = rows.filter((r) => r.heading);
  const stack = stackOf(top(bodyRows.length ? bodyRows : rows, (r) => r.family)[0].k);
  const loaded = new Set(s.faces.filter((f) => f.status === "loaded").map((f) => f.family));
  const named = stack.filter((f) => !GENERIC.test(f));
  out.push({
    id: s.id, readable: true, chars: s.chars, htmlLang: s.htmlLang,
    body: role(bodyRows), paragraph: paraRows.reduce((a, r) => a + r.chars, 0) >= 100 ? role(paraRows) : null, heading: role(headRows),
    stack, firstFace: named[0] ?? null, firstScriptFace: named.find((f) => faces.test(f)) ?? null,
    scriptFaceIndex: named.findIndex((f) => faces.test(f)), latinFirst: named.length > 0 && !faces.test(named[0]),
    loadedInStack: named.filter((f) => loaded.has(f)), genericOnly: named.length === 0,
    wordBreak: top(rows, (r) => r.wordBreak), lineBreak: top(rows, (r) => r.lineBreak), overflowWrap: top(rows, (r) => r.overflowWrap),
    textWrap: top(rows, (r) => String(r.textWrap).split(" ")[0]),
    palt: share(rows, (r) => /palt|pkna|pwid/.test(r.features)), paltHeading: share(headRows, (r) => /palt|pkna|pwid/.test(r.features)),
    halt: share(rows, (r) => /halt|chws/.test(r.features)),
    trim: share(rows, (r) => r.spacingTrim && !/^(normal|space-all)$/.test(r.spacingTrim)), trimValue: top(rows, (r) => r.spacingTrim)[0]?.k,
    autospace: top(rows, (r) => r.autospace)[0]?.k,
    italic: share(rows, (r) => r.style !== "normal"), justify: share(rows, (r) => r.align === "justify"),
    negativeTracking: share(rows, (r) => r.letterSpacing < 0), positiveTracking: share(rows, (r) => r.letterSpacing > 0),
  });
}

const ok = out.filter((s) => s.readable);
const q = (xs, p) => { const v = xs.filter((x) => typeof x === "number").sort((a, z) => a - z); if (!v.length) return null; const i = (v.length - 1) * p; const lo = Math.floor(i); return Math.round((v[lo] + (v[Math.ceil(i)] - v[lo]) * (i - lo)) * 1000) / 1000; };
const dist = (label, xs) => { const v = xs.filter((x) => typeof x === "number"); return `- ${label}: n ${v.length}, min ${q(v, 0)}, p25 ${q(v, 0.25)}, median ${q(v, 0.5)}, p75 ${q(v, 0.75)}, max ${q(v, 1)}`; };
const count = (label, test) => `- ${label}: ${ok.filter(test).length} / ${ok.length}`;
const tally = (label, key) => { const m = new Map(); for (const s of ok) m.set(key(s), (m.get(key(s)) ?? 0) + 1); return `- ${label}: ` + [...m.entries()].sort((a, z) => z[1] - a[1]).map(([k, n]) => `${k} ${n}`).join(" · "); };
const pct = (x) => (x === null || x === undefined ? "—" : `${Math.round(x * 100)}%`);
const lines = [
  `Sites: ${out.length} loaded, ${ok.length} readable, ${out.length - ok.length} not readable.`, "",
  "## Size, leading, tracking",
  dist("body font-size (px)", ok.map((s) => s.body?.size)),
  dist("body line-height (ratio; pages whose body computes `normal` are left out)", ok.map((s) => s.body?.lineHeight)),
  count("body line-height computes `normal`", (s) => s.body?.lineHeight === "normal"),
  dist("paragraph line-height (ratio; <p> text wrapping to 2+ lines)", ok.map((s) => s.paragraph?.lineHeight)),
  dist("paragraph font-size (px)", ok.map((s) => s.paragraph?.size)),
  dist("heading line-height (ratio)", ok.map((s) => s.heading?.lineHeight)),
  dist("body letter-spacing (em)", ok.map((s) => s.body?.letterSpacing)),
  count("body letter-spacing is 0", (s) => s.body?.letterSpacing === 0),
  count("body letter-spacing is positive", (s) => s.body?.letterSpacing > 0),
  count("body letter-spacing is negative", (s) => s.body?.letterSpacing < 0),
  dist("heading letter-spacing (em)", ok.map((s) => s.heading?.letterSpacing)),
  count("heading letter-spacing is negative", (s) => s.heading?.letterSpacing < 0), "",
  "## Line breaking",
  tally("word-break on most of the text", (s) => s.wordBreak[0].k),
  count("word-break: break-all on 10% of the text or more", (s) => (s.wordBreak.find((w) => w.k === "break-all")?.share ?? 0) >= 0.1),
  count("word-break: keep-all on 10% of the text or more", (s) => (s.wordBreak.find((w) => w.k === "keep-all")?.share ?? 0) >= 0.1),
  tally("line-break on most of the text", (s) => s.lineBreak[0].k),
  count("line-break: strict on 10% of the text or more", (s) => (s.lineBreak.find((w) => w.k === "strict")?.share ?? 0) >= 0.1),
  count("line-break: anywhere on 10% of the text or more", (s) => (s.lineBreak.find((w) => w.k === "anywhere")?.share ?? 0) >= 0.1),
  tally("overflow-wrap on most of the text", (s) => s.overflowWrap[0].k),
  count("text-wrap other than wrap on 10% of the text or more", (s) => s.textWrap.filter((w) => !/^(wrap|undefined|null)$/.test(w.k)).reduce((a, w) => a + w.share, 0) >= 0.1), "",
  "## Proportional and half-width features, spacing",
  count("`palt` / `pkna` / `pwid` on any text", (s) => s.palt > 0),
  count("`palt` / `pkna` / `pwid` on half of the text or more", (s) => s.palt >= 0.5),
  count("`palt` on headings (half or more of heading text)", (s) => (s.paltHeading ?? 0) >= 0.5),
  count("`halt` / `chws` on any text", (s) => s.halt > 0),
  count("text-spacing-trim set to something other than normal / space-all on any text", (s) => s.trim > 0),
  tally("text-autospace on most of the text (the computed value; `no-autospace` is this browser's own default, so it does not show an author's choice)", (s) => s.autospace),
  count("italic or oblique on any text of the script", (s) => s.italic > 0),
  count("text-align: justify on 10% of the text or more", (s) => s.justify >= 0.1), "",
  "## Font stack (the stack on most body text)",
  count("first named face is a face of the script", (s) => s.scriptFaceIndex === 0),
  count("a Latin face comes first, a face of the script later", (s) => s.latinFirst && s.scriptFaceIndex > 0),
  count("no recognised face of the script in the stack", (s) => s.scriptFaceIndex === -1 && !s.genericOnly),
  count("generic keywords only (no named face)", (s) => s.genericOnly),
  count("a stack face is a loaded web font", (s) => s.loadedInStack.length > 0),
  tally("first face of the script in the stack", (s) => familyName(s.firstScriptFace)),
  tally("html lang", (s) => s.htmlLang ?? "(none)"),
];
console.log(lines.join("\n"));
const bad = out.filter((s) => !s.readable);
if (bad.length) console.log("\nNot readable:\n" + bad.map((s) => `- ${s.id}: ${s.why}`).join("\n"));

if (jsonFile) writeFileSync(jsonFile, JSON.stringify(out, null, 1) + "\n");
if (mdFile) {
  const r = (x) => (x ? `${x.size} / ${x.lineHeight} / ${x.letterSpacing}` : "—");
  const table = ["| site | body px / line-height / tracking em | paragraph | heading | first face | first face of the script | word-break | line-break | palt | lang |", "|---|---|---|---|---|---|---|---|---|---|",
    ...ok.map((s) => `| ${s.id} | ${r(s.body)} | ${r(s.paragraph)} | ${r(s.heading)} | ${s.firstFace ?? "(generic)"} | ${s.firstScriptFace ?? "—"} | ${s.wordBreak.map((w) => `${w.k} ${pct(w.share)}`).slice(0, 2).join(", ")} | ${s.lineBreak.map((w) => `${w.k} ${pct(w.share)}`).slice(0, 2).join(", ")} | ${pct(s.palt)} | ${s.htmlLang ?? "—"} |`)];
  writeFileSync(mdFile, ["## Distribution", "", ...lines, "", "## Per site", "", ...table, "", ...(bad.length ? ["## Not readable", "", ...bad.map((s) => `- ${s.id}: ${s.why}`), ""] : [])].join("\n"));
}
