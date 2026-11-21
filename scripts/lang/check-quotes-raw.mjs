#!/usr/bin/env node
/**
 * Check the quoted source text in a language-skill research file against the bytes each source serves.
 *
 *   node scripts/lang/check-quotes-raw.mjs <rules.md> <sources.json> --cache <dir>
 *        [--local KEY=path ...] [--superseded KEY,KEY] [--out report.md] [--refetch]
 *
 * The researcher and the rule checker read web pages through a fetch tool that hands the page to an extraction
 * model, so a quote can come back with a full-width mark turned half-width, a space added or dropped, or a
 * character missing. A deterministic checker tests exactly those things. This fetches every http(s) URL in
 * sources.json once (plain GET, no cookies; a 4xx/5xx is recorded and never worked around), reduces HTML to text,
 * and looks up every 「…」 quote of the rules file in every source text. Each quote gets the best tier it reaches:
 *   web          a substring of the bytes a current web source served: characters and spaces confirmed
 *                (also when the only difference is a line break inside the quote, e.g. a <br> the quote joined)
 *   superseded   the same, but only in a source named by --superseded (an old draft): confirmed there, not current
 *   extract      a substring of a --local text extract (pdftotext): characters confirmed; spaces are the
 *                extractor's layout and prove nothing
 *   stripped     matches only after all whitespace is removed from both sides: marks confirmed, spaces not
 *   cells        the quote is a table row written with | between cells, and every cell of 4+ characters is in
 *                one source: the cells are confirmed, the row as a whole is the researcher's assembly
 *   pieces       matches only when cut at … or ... (the middle was elided); every piece is in one source
 *   none         in no source text: a wrapped PDF table cell, a client-rendered page, a refused fetch, or a
 *                quote that differs from the page
 * Limits. It reads only 「…」 quotes of four or more characters, so single marks and English-language quotes
 * (a source that is quoted only in English shows 0) are not tested. It does not attribute: a quote counts as
 * found if any listed source holds it, and the report names which. A tier says where the characters are. It
 * never says the candidate reads the passage correctly.
 * Fetched bytes go to --cache; keep that outside the repository.
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const argv = process.argv.slice(2);
const pos = []; const local = {}; const superseded = new Set(); let cache = null, out = null, refetch = false;
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === '--cache') cache = argv[++i];
  else if (a === '--out') out = argv[++i];
  else if (a === '--refetch') refetch = true;
  else if (a === '--superseded') argv[++i].split(',').forEach((k) => superseded.add(k.trim()));
  else if (a === '--local') { const [k, ...p] = argv[++i].split('='); local[k] = p.join('='); }
  else pos.push(a);
}
if (pos.length < 2 || !cache) { console.error('usage: check-quotes-raw.mjs <rules.md> <sources.json> --cache <dir> [--local KEY=path] [--superseded KEY,KEY] [--out report.md] [--refetch]'); process.exit(2); }
const [rulesPath, sourcesPath] = pos;
fs.mkdirSync(cache, { recursive: true });

const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', hellip: '…', mdash: '—', ndash: '–', ldquo: '“', rdquo: '”', lsquo: '‘', rsquo: '’', middot: '·', times: '×', yen: '¥' };
const decodeEntities = (s) => s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
  if (e[0] === '#') { const n = e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10); return Number.isFinite(n) && n > 0 && n <= 0x10ffff ? String.fromCodePoint(n) : m; }
  return ENT[e.toLowerCase()] ?? m;
});
const BLOCK = 'address|article|aside|blockquote|br|dd|details|div|dl|dt|figcaption|figure|footer|h[1-6]|header|hr|li|main|nav|ol|p|pre|section|summary|table|tbody|td|tfoot|th|thead|tr|ul';
function htmlToText(html) {
  let s = html.replace(/<!--[\s\S]*?-->/g, '').replace(/<(script|style|noscript|template)\b[\s\S]*?<\/\1>/gi, '\n');
  s = s.replace(new RegExp('</?(?:' + BLOCK + ')\\b[^>]*>', 'gi'), '\n').replace(/<[^>]+>/g, '');
  return decodeEntities(s);
}
function decode(buf, contentType) {
  let cs = (/charset=([\w-]+)/i.exec(contentType || '') || [])[1];
  if (!cs) cs = (/<meta[^>]+charset=["']?([\w-]+)/i.exec(buf.subarray(0, 4096).toString('latin1')) || [])[1];
  try { return new TextDecoder((cs || 'utf-8').toLowerCase()).decode(buf); } catch { return buf.toString('utf8'); }
}
async function load(src) {
  if (local[src.key]) return { kind: 'extract', how: 'local extract', text: fs.readFileSync(local[src.key], 'utf8') };
  if (!/^https?:\/\//.test(src.url || '')) return { kind: 'web', how: 'no http url', text: '' };
  const id = crypto.createHash('sha1').update(src.url).digest('hex').slice(0, 12);
  const bin = path.join(cache, src.key.replace(/[^\w.-]/g, '_') + '-' + id + '.bin'), meta = bin.replace(/\.bin$/, '.json');
  if (refetch || !fs.existsSync(meta)) {
    let m;
    try {
      const res = await fetch(src.url, { redirect: 'follow', signal: AbortSignal.timeout(45000), headers: { 'user-agent': 'Mozilla/5.0 (compatible; quote-check)', accept: 'text/html,application/json,text/plain,*/*' } });
      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(bin, buf);
      m = { url: src.url, status: res.status, type: res.headers.get('content-type') || '', bytes: buf.length, at: new Date().toISOString() };
    } catch (e) { m = { url: src.url, status: 0, error: String(e.cause?.code || e.message || e).slice(0, 120), bytes: 0, at: new Date().toISOString() }; }
    fs.writeFileSync(meta, JSON.stringify(m));
  }
  const m = JSON.parse(fs.readFileSync(meta, 'utf8'));
  if (m.status !== 200) return { kind: 'web', how: m.status ? 'HTTP ' + m.status : 'fetch failed: ' + m.error, text: '' };
  const buf = fs.readFileSync(bin);
  if (/pdf/i.test(m.type) || buf.subarray(0, 5).toString('latin1') === '%PDF-') return { kind: 'web', how: 'PDF (' + m.bytes + ' bytes; pass an extract with --local)', text: '' };
  const raw = decode(buf, m.type);
  const text = /html/i.test(m.type) || /^\s*<(!doctype|html)/i.test(raw) ? htmlToText(raw) : raw;
  // A JSON body keeps its strings escaped; add the unescaped form so a quote can match either.
  return { kind: 'web', how: 'web, ' + m.bytes + ' bytes', text: /json/i.test(m.type) ? text + '\n' + text.replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\u([0-9a-f]{4})/gi, (_, h) => String.fromCharCode(parseInt(h, 16))) : text };
}

// Quotes: every balanced 「…」 on a line, outermost only, at least 4 characters long.
function quotesOf(line) {
  const res = []; let depth = 0, start = -1;
  for (let i = 0; i < line.length; i++) {
    if (line[i] === '「') { if (depth === 0) start = i + 1; depth++; }
    else if (line[i] === '」' && depth > 0) { depth--; if (depth === 0) res.push(line.slice(start, i)); }
  }
  return res.filter((q) => [...q].length >= 4);
}
const strip = (s) => s.replace(/\s+/g, '');
const long = (p) => [...p].length >= 4;

const sources = JSON.parse(fs.readFileSync(sourcesPath, 'utf8')).sources;
const loaded = [];
for (let i = 0; i < sources.length; i += 4) loaded.push(...await Promise.all(sources.slice(i, i + 4).map(async (s) => ({ key: s.key, url: s.url, ...(await load(s)) }))));
for (const s of loaded) {
  s.cls = s.kind === 'extract' ? 'extract' : superseded.has(s.key) ? 'superseded' : 'web';
  // A line break inside a quote (a <br>, a wrapped paragraph) is not a difference: also try with breaks removed, and as one space.
  s.joined = [s.text.replace(/[ \t]*\n+[ \t]*/g, ''), s.text.replace(/[ \t]*\n+[ \t]*/g, ' ')];
  s.stripped = strip(s.text);
}
const readable = loaded.filter((s) => s.text.length > 0);
const keysOf = (pred) => readable.filter(pred).map((s) => s.key);

function tierOf(q) {
  const literal = readable.filter((s) => s.text.includes(q) || s.joined.some((t) => t.includes(q)));
  for (const cls of ['web', 'superseded', 'extract']) { const hit = literal.filter((s) => s.cls === cls); if (hit.length) return { tier: cls, where: literal.map((s) => s.key) }; }
  const sq = strip(q);
  let where = keysOf((s) => s.stripped.includes(sq)); if (where.length) return { tier: 'stripped', where };
  const cells = q.split('|').map(strip).filter(long);
  if (q.includes('|') && cells.length) { where = keysOf((s) => cells.every((c) => s.stripped.includes(c))); if (where.length) return { tier: 'cells', where }; }
  const parts = q.split(/…+|\.{3,}/).map(strip).filter(long);
  if (parts.length > 1) { where = keysOf((s) => parts.every((p) => s.stripped.includes(p))); if (where.length) return { tier: 'pieces', where }; }
  return { tier: 'none', where: [] };
}

const rows = []; const seen = new Set(); let rule = '(before the first candidate)';
for (const line of fs.readFileSync(rulesPath, 'utf8').split('\n')) {
  const h = /^#{2,5}\s+(?:Adds to\s+)?([A-Z]{2,3}-\d+)/.exec(line); if (h) rule = h[1];
  for (const q of quotesOf(line)) { const k = rule + '\u0000' + q; if (seen.has(k)) continue; seen.add(k); rows.push({ rule, quote: q, ...tierOf(q) }); }
}
const TIERS = ['web', 'superseded', 'extract', 'stripped', 'cells', 'pieces', 'none'];
const LABEL = { web: 'web: in the bytes of a current web source', superseded: 'superseded: only in an old draft', extract: 'extract: only in a local PDF extract (spaces not confirmed)', stripped: 'stripped: spaces not confirmed', cells: 'cells: table cells found, row assembled', pieces: 'pieces: cut at an ellipsis', none: 'none' };
const count = (t) => rows.filter((r) => r.tier === t).length;
const cell = (s) => s.replace(/\|/g, '\\|');
const BT = String.fromCharCode(96);
const L = [];
L.push('# Quotes checked against the served bytes', '', 'Made by ' + BT + 'scripts/lang/check-quotes-raw.mjs' + BT + ' on ' + new Date().toISOString().slice(0, 10) + ' from ' + BT + path.basename(path.dirname(rulesPath)) + '/' + path.basename(rulesPath) + BT + '.', '');
L.push('- A tier says where the characters of a quote are. It never says the candidate reads the passage correctly; that is ' + BT + 'verdicts.md' + BT + '.', '- Only "web" confirms both the characters and the spaces of a quote in a source that is current. A width or spacing rule may rest on a "web" quote and on no other tier.', '- Only 「…」 quotes of four or more characters are read. Single marks and English-language quotes are not tested, so a source quoted only in English shows 0.', '- A quote counts as found if any listed source holds it; the tables name which.', '- Nobody who reads the language natively has seen this.', '');
L.push('| Tier | Quotes |', '|---|---:|', ...TIERS.map((t) => '| ' + LABEL[t] + ' | ' + count(t) + ' |'), '| total | ' + rows.length + ' |', '');
L.push('## Sources', '', '| Key | Class | Read as | Quotes found in it |', '|---|---|---|---:|');
for (const s of loaded) L.push('| ' + s.key + ' | ' + (s.text ? s.cls : '') + ' | ' + s.how + (s.text ? ', ' + s.text.length + ' chars of text' : '') + ' | ' + rows.filter((r) => r.where.includes(s.key)).length + ' |');
L.push('', '## Quotes that are not "web"', '', '| Candidate | Tier | Found in | Quote |', '|---|---|---|---|');
for (const r of rows.filter((x) => x.tier !== 'web')) L.push('| ' + r.rule + ' | ' + r.tier + ' | ' + r.where.join(', ') + ' | 「' + cell(r.quote) + '」 |');
L.push('', '## By candidate', '', '| Candidate | ' + TIERS.join(' | ') + ' |', '|---|' + TIERS.map(() => '---:').join('|') + '|');
const byRule = new Map(); for (const r of rows) { const b = byRule.get(r.rule) ?? Object.fromEntries(TIERS.map((t) => [t, 0])); b[r.tier]++; byRule.set(r.rule, b); }
for (const [k, b] of byRule) L.push('| ' + k + ' | ' + TIERS.map((t) => b[t] || '').join(' | ') + ' |');
if (out) fs.writeFileSync(out, L.join('\n') + '\n');
console.log('quotes ' + rows.length + ' · ' + TIERS.map((t) => t + ' ' + count(t)).join(' · ') + ' · sources read ' + readable.length + ' of ' + loaded.length + (out ? ' · wrote ' + out : ''));
