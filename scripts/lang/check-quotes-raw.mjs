#!/usr/bin/env node
/**
 * Check the quoted source text in a language-skill research file against the bytes each source serves.
 *
 *   node scripts/lang/check-quotes-raw.mjs <rules.md> <sources.json> --cache <dir> [--local KEY=path ...] [--out report.md] [--refetch]
 *
 * The researcher and the rule checker read web pages through a fetch tool that hands the page to an extraction
 * model, so a quote can come back with a full-width mark turned half-width, a space added or dropped, or a variant
 * character swapped. A deterministic checker tests exactly those things. This fetches every http(s) URL in
 * sources.json once (plain GET, no cookies, a 4xx/5xx is recorded and never worked around), reduces HTML to text,
 * and looks up every 「…」 quote in the rules file in every source text:
 *   exact      the quote is a substring as written: its code points and its spaces are in the served bytes
 *   stripped   it matches only after all whitespace is removed from both sides: marks confirmed, spaces not
 *   pieces     it matches only when cut at … or ... (the researcher elided the middle); every piece is in one source
 *   none       it is in no source text fetched: a client-rendered page, a refused fetch, or a changed quote
 * It attributes nothing: a quote counts as found if any listed source holds it, and the report names which.
 * "exact" says the characters are on the page. It does not say the candidate reads the passage correctly.
 * Fetched bytes go to --cache (keep it outside the repository). --local maps a source key to a text file already
 * on disk (a pdftotext extract), which is read in place of the URL.
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const argv = process.argv.slice(2);
const pos = []; const local = {}; let cache = null, out = null, refetch = false;
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === '--cache') cache = argv[++i];
  else if (a === '--out') out = argv[++i];
  else if (a === '--refetch') refetch = true;
  else if (a === '--local') { const [k, ...p] = argv[++i].split('='); local[k] = p.join('='); }
  else pos.push(a);
}
if (pos.length < 2 || !cache) { console.error('usage: check-quotes-raw.mjs <rules.md> <sources.json> --cache <dir> [--local KEY=path] [--out report.md] [--refetch]'); process.exit(2); }
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
  if (local[src.key]) return { how: 'local file', text: fs.readFileSync(local[src.key], 'utf8') };
  if (!/^https?:\/\//.test(src.url || '')) return { how: 'no http url', text: '' };
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
  if (m.status !== 200) return { how: m.status ? 'HTTP ' + m.status : 'fetch failed: ' + m.error, text: '' };
  const buf = fs.readFileSync(bin);
  if (/pdf/i.test(m.type) || buf.subarray(0, 5).toString('latin1') === '%PDF-') return { how: 'PDF (' + m.bytes + ' bytes; pass an extract with --local)', text: '' };
  const raw = decode(buf, m.type);
  const text = /html/i.test(m.type) || /^\s*<(!doctype|html)/i.test(raw) ? htmlToText(raw) : raw;
  // A JSON body keeps its strings escaped; add the unescaped form so a quote can match either.
  return { how: m.bytes + ' bytes', text: /json/i.test(m.type) ? text + '\n' + text.replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\u([0-9a-f]{4})/gi, (_, h) => String.fromCharCode(parseInt(h, 16))) : text };
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

const sources = JSON.parse(fs.readFileSync(sourcesPath, 'utf8')).sources;
const loaded = [];
for (let i = 0; i < sources.length; i += 4) loaded.push(...await Promise.all(sources.slice(i, i + 4).map(async (s) => ({ key: s.key, url: s.url, ...(await load(s)) }))));
for (const s of loaded) s.stripped = strip(s.text);
const readable = loaded.filter((s) => s.text.length > 0);

const rows = []; let rule = '(before the first candidate)';
for (const line of fs.readFileSync(rulesPath, 'utf8').split('\n')) {
  const h = /^#{2,5}\s+(?:Adds to\s+)?([A-Z]{2,3}-\d+)/.exec(line); if (h) rule = h[1];
  for (const q of quotesOf(line)) {
    const exact = readable.filter((s) => s.text.includes(q)).map((s) => s.key);
    let tier = 'none', where = [];
    if (exact.length) { tier = 'exact'; where = exact; }
    else {
      const sq = strip(q), st = readable.filter((s) => s.stripped.includes(sq)).map((s) => s.key);
      if (st.length) { tier = 'stripped'; where = st; }
      else {
        const parts = q.split(/…+|\.{3,}/).map(strip).filter((p) => [...p].length >= 4);
        const pc = parts.length > 1 ? readable.filter((s) => parts.every((p) => s.stripped.includes(p))).map((s) => s.key) : [];
        if (pc.length) { tier = 'pieces'; where = pc; }
      }
    }
    rows.push({ rule, quote: q, tier, where });
  }
}
// The same quote under the same candidate is reported once.
const seen = new Set(); const uniq = rows.filter((r) => { const k = r.rule + '\u0000' + r.quote; if (seen.has(k)) return false; seen.add(k); return true; });
const count = (t) => uniq.filter((r) => r.tier === t).length;
const cell = (s) => s.replace(/\|/g, '\\|');
const BT = String.fromCharCode(96);
const lines = [];
lines.push('# Quotes checked against the served bytes', '', 'Made by ' + BT + 'scripts/lang/check-quotes-raw.mjs' + BT + ' on ' + new Date().toISOString().slice(0, 10) + ' from ' + BT + path.basename(path.dirname(rulesPath)) + '/' + path.basename(rulesPath) + BT + '. "exact" means the characters and spaces of the quote are in the bytes a source served. It does not mean the candidate reads the passage correctly, and nobody who reads the language natively has seen this.', '');
lines.push('| Tier | Quotes |', '|---|---:|', '| exact | ' + count('exact') + ' |', '| stripped (spaces not confirmed) | ' + count('stripped') + ' |', '| pieces (cut at an ellipsis) | ' + count('pieces') + ' |', '| none | ' + count('none') + ' |', '| total | ' + uniq.length + ' |', '');
lines.push('## Sources', '', '| Key | Read as | Quotes found in it |', '|---|---|---:|');
for (const s of loaded) lines.push('| ' + s.key + ' | ' + s.how + (s.text ? ', ' + s.text.length + ' chars of text' : '') + ' | ' + uniq.filter((r) => r.where.includes(s.key)).length + ' |');
lines.push('', '## Quotes not found exactly', '', '| Candidate | Tier | Found in | Quote |', '|---|---|---|---|');
for (const r of uniq.filter((x) => x.tier !== 'exact')) lines.push('| ' + r.rule + ' | ' + r.tier + ' | ' + (r.where.join(', ') || '') + ' | 「' + cell(r.quote) + '」 |');
lines.push('', '## Exact, by candidate', '', '| Candidate | Exact | Other |', '|---|---:|---:|');
const byRule = new Map(); for (const r of uniq) { const b = byRule.get(r.rule) ?? [0, 0]; b[r.tier === 'exact' ? 0 : 1]++; byRule.set(r.rule, b); }
for (const [k, [a, b]] of byRule) lines.push('| ' + k + ' | ' + a + ' | ' + b + ' |');
const report = lines.join('\n') + '\n';
if (out) fs.writeFileSync(out, report);
console.log('quotes ' + uniq.length + ' · exact ' + count('exact') + ' · stripped ' + count('stripped') + ' · pieces ' + count('pieces') + ' · none ' + count('none') + ' · sources read ' + readable.length + ' of ' + loaded.length + (out ? ' · wrote ' + out : ''));
