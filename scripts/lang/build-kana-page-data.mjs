#!/usr/bin/env node
/**
 * Builds the data behind /ko/kana from the kana skill's writing rules. Nothing in the output is typed here: every
 * rule, quote and example string is cut out of writing-rules.md, the URLs come from its own source table and are
 * checked against sources.json, and the font counts are read from measured-jp.md.
 *
 *   node scripts/lang/build-kana-page-data.mjs <writing-rules.md> <sources.json> [--fonts <measured-jp.md>] [--out <file>]
 *
 * The /ko/kana page reads the font counts, so build it with --fonts. From the kana skill's draft:
 *   node scripts/lang/build-kana-page-data.mjs docs/drafts/kana/references/writing-rules.md \
 *     docs/drafts/kana/writing/sources.json --fonts docs/drafts/kana/references/measured-jp.md
 *
 * Default out: web/src/data/kana-rules.generated.json. The script fails, and writes nothing, when a quoted string
 * cannot be given a source key, when a key in the rules has no URL in both files, or when any Japanese string it is
 * about to write is not a character-for-character substring of writing-rules.md.
 */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const argv = process.argv.slice(2);
const flag = (name) => (argv.includes(name) ? argv[argv.indexOf(name) + 1] : null);
const positional = argv.filter((a, i) => !a.startsWith("--") && !argv[i - 1]?.startsWith("--"));
const [rulesPath, sourcesPath] = positional;
if (!rulesPath || !sourcesPath) {
  console.error("usage: build-kana-page-data.mjs <writing-rules.md> <sources.json> [--fonts <measured-jp.md>] [--out <file>]");
  process.exit(2);
}
const fontsPath = flag("--fonts");
const outPath = path.resolve(flag("--out") ?? path.join(REPO, "web/src/data/kana-rules.generated.json"));

const read = (p) => fs.readFileSync(p, "utf8");
const md = read(rulesPath);
const sourcesJson = JSON.parse(read(sourcesPath));
const sha256 = (s) => crypto.createHash("sha256").update(s).digest("hex");
/** where the file lives in the repository once the kana branch is in (docs/drafts/kana/...), else its base name */
const repoPath = (p) => {
  const abs = path.resolve(p).split(path.sep).join("/");
  const at = abs.indexOf("/docs/drafts/kana/");
  return at >= 0 ? abs.slice(at + 1) : path.basename(abs);
};
const fail = (msg) => {
  console.error("build-kana-page-data: " + msg);
  process.exit(1);
};

/** kana, CJK ideographs, CJK punctuation and full-width forms: what counts as Japanese text here */
export const JA = /[　-〿぀-ヿㇰ-ㇿ㐀-䶿一-鿿豈-﫿＀-￯]/;

const lines = md.split("\n");
const sectionLines = (heading) => {
  const start = lines.findIndex((l) => l === heading);
  if (start < 0) fail("no section " + JSON.stringify(heading));
  const end = lines.findIndex((l, i) => i > start && /^## /.test(l));
  return lines.slice(start + 1, end < 0 ? undefined : end);
};
const tableRows = (block) =>
  block.filter((l) => /^\|/.test(l) && !/^\|\s*-/.test(l)).slice(1).map((l) => l.split("|").slice(1, -1).map((c) => c.trim()));

// ---- sources: the md's own table (English names), each URL checked against sources.json ----
const fromJson = new Map(sourcesJson.sources.map((s) => [s.key, s]));
const sources = tableRows(sectionLines("## Source keys")).map(([key, name, url]) => {
  const j = fromJson.get(key);
  if (j?.url !== url) fail(key + ": the URL in writing-rules.md (" + url + ") is not the one in sources.json (" + j?.url + ")");
  return { key, name, url, opened: j.opened ?? null };
});
const sourceByKey = new Map(sources.map((s) => [s.key, s]));
// Keys the md cites outside its table (JW rules' own sources, quoted through references/rules.md). They are kept as
// keys with no name or URL: neither input gives one.
const OUTSIDE_TABLE = ["JTF", "KB"];
const KEYS = [...sources.map((s) => s.key), ...OUTSIDE_TABLE].sort((a, b) => b.length - a.length);
// Names the md writes where it gives no key, each standing for one key only.
const ALIASES = { WordPress: "WP", OPTiM: "OPT" };

// ---- the scanner: balanced 「…」, source keys, OK/NG-style labels, arrows and separators ----
const LABELS = ["Don't", "Do", "NG", "OK", "Bad", "Good", "誤", "正", "例"];
const WRONG = new Set(["Don't", "NG", "Bad", "誤"]);
const RIGHT = new Set(["Do", "OK", "Good", "正"]);
const isWordChar = (c) => !!c && /[A-Za-z0-9'-]/.test(c);

function scan(text) {
  const out = [];
  for (let i = 0; i < text.length; ) {
    const c = text[i];
    if (c === "「") {
      let depth = 0;
      let end = -1;
      for (let j = i; j < text.length; j++) {
        if (text[j] === "「") depth++;
        else if (text[j] === "」" && --depth === 0) {
          end = j;
          break;
        }
      }
      if (end < 0) fail("unbalanced 「 in: " + text);
      // an empty pair names the brackets themselves (UW-44's 「」 side), it quotes nothing
      if (end > i + 1) out.push({ t: "q", text: text.slice(i + 1, end) });
      i = end + 1;
      continue;
    }
    if (c === "→") {
      out.push({ t: "arrow" });
      i++;
      continue;
    }
    if (c === ";") {
      out.push({ t: "sep" });
      i++;
      continue;
    }
    if (c === "." && /\s/.test(text[i + 1] ?? " ")) {
      out.push({ t: "stop" });
      i++;
      continue;
    }
    if (!isWordChar(text[i - 1])) {
      const rest = text.slice(i);
      const key = KEYS.find((k) => rest.startsWith(k) && !isWordChar(rest[k.length]));
      if (key) {
        out.push({ t: "key", key, alone: text[i - 1] === "(" && text[i + key.length] === ")" });
        i += key.length;
        continue;
      }
      const jw = rest.match(/^JW-\d+/);
      if (jw) {
        out.push({ t: "via", via: jw[0] });
        i += jw[0].length;
        continue;
      }
      const alias = Object.keys(ALIASES).find((a) => rest.startsWith(a));
      if (alias) {
        out.push({ t: "key", key: ALIASES[alias] });
        i += alias.length;
        continue;
      }
      const label = LABELS.find((l) => rest.startsWith(l) && /^:?\s*「/.test(rest.slice(l.length)));
      if (label) {
        out.push({ t: "label", label });
        i += label.length;
        continue;
      }
    }
    i++;
  }
  return out;
}

/**
 * every 「…」 on a line, with the key last named before it (carried in from an earlier line when given) and the label
 * right before it (a label holds for the quotes after it up to the next label, key, ";" or full stop). A quote with
 * no key before it takes a key named alone in parentheses after it on the same line, as in "…: 「…」, 「…」 (MZ).";
 * a key inside a list "(KB, JTF)" is not taken, and the line then needs an override.
 */
function quotesOf(text, where, carried = null, overrides = {}) {
  let key = carried;
  let via = null;
  let label = null;
  const quotes = [];
  const waiting = [];
  for (const tok of scan(text)) {
    if (tok.t === "key") {
      key = tok.key;
      via = null;
      label = null;
      if (tok.alone) for (const q of waiting.splice(0)) q.key = key;
    } else if (tok.t === "via") via = tok.via;
    else if (tok.t === "label") label = tok.label;
    else if (tok.t === "q") {
      const q = { key: overrides[tok.text] ?? key, ...(via ? { via } : {}), ...(label ? { label } : {}), text: tok.text };
      if (!q.key) waiting.push(q);
      quotes.push(q);
    } else if (tok.t === "sep" || tok.t === "stop") label = null;
  }
  if (waiting.length) fail(where + ": no source key on the line of 「" + waiting[0].text + "」");
  return { quotes: quotes.map(({ key: k, ...rest }) => ({ key: k, ...rest })), key };
}

/** an Example line, in the shape the source gives: sides marked wrong/right by their label or by an arrow, or a given list */
function examplesOf(text, where) {
  const examples = [];
  let key = null;
  let via = null;
  let cur = null; // { key, via, sides: [] }
  let side = null;
  let arrow = false;
  const flush = () => {
    if (cur && cur.sides.some((s) => s.texts.length)) examples.push(cur);
    cur = null;
    side = null;
    arrow = false;
  };
  const open = (role, label) => {
    if (!cur) cur = { key, ...(via ? { via } : {}), sides: [] };
    side = { role, label, texts: [] };
    cur.sides.push(side);
  };
  for (const tok of scan(text)) {
    if (tok.t === "key") flush(), (key = tok.key), (via = null);
    else if (tok.t === "via") flush(), (via = tok.via);
    else if (tok.t === "sep") flush();
    else if (tok.t === "stop") {
      if (cur?.sides.some((s) => s.role === "right")) flush();
    } else if (tok.t === "label") {
      arrow = false; // "→ Do 「…」": the label opens the right side the arrow announced
      if (WRONG.has(tok.label)) flush(), open("wrong", tok.label);
      else if (RIGHT.has(tok.label)) {
        if (!(cur && !cur.sides.some((s) => s.role === "right"))) flush();
        open("right", tok.label);
      } else flush(), open("given", tok.label);
    } else if (tok.t === "arrow") {
      if (side && side.role === "given") side.role = "wrong";
      arrow = true;
    } else if (tok.t === "q") {
      if (!key) fail(where + ": no source key before 「" + tok.text + "」");
      if (arrow) open("right", null), (arrow = false);
      else if (!side) open("given", null);
      side.texts.push(tok.text);
    }
  }
  flush();
  return examples;
}

// ---- strength: the phrases of the md's "Strength, in words" table, every one a line names ----
const STRENGTH_TABLE = tableRows(sectionLines("## Strength, in words")).map(([w]) => w);
function tiersOf(line, where) {
  const tiers = [];
  if (/government design system/.test(line)) tiers.push({ tier: "government" });
  const n = [...line.matchAll(/(\d) of 4 company guides/g)].map((m) => Number(m[1]));
  if (n.length) tiers.push({ tier: "company", of4: Math.max(...n) });
  if (/one company's guide/.test(line)) tiers.push({ tier: "company", of4: 1 });
  if (/translation guide/.test(line)) tiers.push({ tier: "translation" });
  if (/OPTiM heading only/.test(line)) tiers.push({ tier: "optim-not-counted" });
  if (!tiers.length) fail(where + ": strength names none of " + STRENGTH_TABLE.join(" / "));
  return tiers;
}

// ---- rules ----
const rules = [];
const areas = [];
{
  const block = sectionLines("## Rules");
  let area = null;
  let rule = null;
  let carried = null;
  for (const l of block) {
    const a = l.match(/^### (.+)$/);
    if (a) {
      area = { name: a[1], rules: [] };
      areas.push(area);
      continue;
    }
    const h = l.match(/^#### (KW-\d+) \((UW-\d+)(, rewritten to the verdict)?\) · (.+)$/);
    if (h) {
      rule = { id: h[1], candidate: h[2], rewrittenToVerdict: !!h[3], area: area.name, rule: h[4], kind: "", strength: "", tiers: [], quotes: [], examples: [], exampleNote: null, checker: "" };
      rules.push(rule);
      area.rules.push(rule.id);
      carried = null;
      continue;
    }
    if (!rule || !l.startsWith("- ")) continue;
    const field = l.match(/^- (Kind|Strength|Quote|Example[^:]*|Checker): (.*)$/);
    const where = rule.id;
    if (field?.[1] === "Kind") rule.kind = field[2].replace(/\.$/, "");
    else if (field?.[1] === "Strength") (rule.strength = field[2]), (rule.tiers = tiersOf(field[2], where));
    else if (field?.[1] === "Checker") rule.checker = field[2];
    else if (field?.[1] === "Quote") ({ quotes: rule.quotes, key: carried } = quotesOf(field[2], where));
    else if (field && field[1].startsWith("Example")) {
      const head = field[1].slice("Example".length).trim(); // "(from [rules.md](./rules.md), JTF)"
      rule.examples = examplesOf(head + " " + field[2], where);
      // "no sourced example/pair": strings on such a line are words the source names, not an example pair
      if (!rule.examples.length || /^no sourced/.test(field[2])) rule.exampleNote = field[2];
    } else if (l.includes("「")) {
      // a further line of the source's own words (KW-19's mobile order): quotes, key carried from the Quote line
      const more = quotesOf(l.slice(2), where, carried);
      rule.quotes.push(...more.quotes);
      carried = more.key;
    }
  }
}

// ---- house choices: "The project's DESIGN.md decides" ----
// One string the md quotes under a bare "DADS" (UW-43): KW-26 quotes the same sentence under DADS-in.
// One under a bare "Spindle" (UW-41): writing/rules.md:376 gives the same sentence as "SP-lab 見出し".
const HOUSE_OVERRIDES = {
  "UW-43": { "＊氏（カタカナ）と名（カタカナ）を空白で区切ってください。": "DADS-in" },
  "UW-41": { "読点、句点は必要ありません。": "SP-lab" },
};
const houseChoices = [];
{
  const block = sectionLines("## The project's DESIGN.md decides");
  let cur = null;
  for (const l of block) {
    const h = l.match(/^#### (UW-\d+) (.+)$/);
    if (h) {
      cur = { id: h[1], title: h[2], notADisagreement: /not a real disagreement/.test(h[2]), sides: [] };
      houseChoices.push(cur);
      continue;
    }
    if (cur && l.startsWith("- ")) {
      const text = l.slice(2);
      cur.sides.push({ text, quotes: quotesOf(text, cur.id, null, HOUSE_OVERRIDES[cur.id]).quotes });
    }
  }
}

// ---- fonts (optional): the first Japanese face in each measured service's stack ----
let fonts = null;
if (fontsPath) {
  const m = read(fontsPath);
  const services = Number((m.match(/typography of (\d+) Japanese sites/) ?? [])[1]);
  const measuredOn = (m.match(/measured on (\d{4}-\d{2}-\d{2})/) ?? [])[1];
  const line = (m.match(/^- first face of the script in the stack: (.+)$/m) ?? [])[1];
  if (!services || !measuredOn || !line) fail("measured-jp.md: no service count, date or first-face line");
  const firstFace = line.split(" · ").map((s) => {
    const f = s.match(/^(.+) (\d+)$/);
    if (!f) fail("measured-jp.md: cannot read " + JSON.stringify(s));
    return { face: f[1] === "(none)" ? null : f[1], services: Number(f[2]) };
  });
  const sum = firstFace.reduce((a, f) => a + f.services, 0);
  if (sum !== services) fail("measured-jp.md: the first faces add up to " + sum + ", not " + services);
  fonts = { input: { path: repoPath(fontsPath), sha256: sha256(m) }, measuredOn, services, firstFace };
}

const usedKeys = new Set([
  ...rules.flatMap((r) => [...r.quotes.map((q) => q.key), ...r.examples.map((e) => e.key)]),
  ...houseChoices.flatMap((c) => c.sides.flatMap((s) => s.quotes.map((q) => q.key))),
]);
for (const k of usedKeys) if (!sourceByKey.has(k) && !OUTSIDE_TABLE.includes(k)) fail("key " + k + " is in no source table");

const data = {
  generatedBy: "scripts/lang/build-kana-page-data.mjs",
  input: {
    rules: { path: repoPath(rulesPath), sha256: sha256(md) },
    sources: { path: repoPath(sourcesPath), sha256: sha256(read(sourcesPath)) },
  },
  draft: (md.match(/\*\*Development draft, (\d{4}-\d{2}-\d{2})\./) ?? [])[1] ?? null,
  sources: sources.filter((s) => usedKeys.has(s.key)),
  keysWithoutUrl: OUTSIDE_TABLE.filter((k) => usedKeys.has(k)),
  areas,
  rules,
  houseChoices,
  fonts,
};

// ---- provenance: every Japanese string about to be written is a substring of writing-rules.md ----
const strings = [];
(function walk(v) {
  if (typeof v === "string") strings.push(v);
  else if (Array.isArray(v)) v.forEach(walk);
  else if (v && typeof v === "object") Object.values(v).forEach(walk);
})({ ...data, input: null, fonts: null });
const stray = strings.filter((s) => JA.test(s) && !md.includes(s));
if (stray.length) fail("Japanese not found in writing-rules.md: " + stray.map((s) => JSON.stringify(s)).join(", "));

fs.writeFileSync(outPath, JSON.stringify(data, null, 2) + "\n");
console.log(
  "kana-rules: " + rules.length + " rules in " + areas.length + " areas, " + houseChoices.length + " house choices, " +
    data.sources.length + " sources" + (data.keysWithoutUrl.length ? " (no URL: " + data.keysWithoutUrl.join(", ") + ")" : "") +
    (fonts ? ", fonts of " + fonts.services + " services" : "") + " -> " + path.relative(REPO, outPath),
);
