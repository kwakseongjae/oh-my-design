#!/usr/bin/env node
/**
 * Checks the typography quotes on the kana pages (web/src/components/kana/type-quotes.ts) against their source pages:
 * fetches each page, takes the markup out, decodes the entities, and looks for the quote character for character.
 * Node >= 18 (global fetch). Exit 1 when a quote is not found or a page does not answer 200; a page that refuses the
 * request is reported, not worked around.
 *
 *   node scripts/lang/check-type-quotes.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const src = fs.readFileSync(path.join(ROOT, 'web/src/components/kana/type-quotes.ts'), 'utf8');
// the file is TypeScript: read the entries' id, text and url with a pattern rather than importing it
const entries = [...src.matchAll(/id: "(JT-\d+)",\s*lang: "(\w+)",\s*text: "((?:[^"\\]|\\.)*)",\s*source: \{ name: "[^"]*", url: "([^"]+)" \}/g)].map((m) => ({
  id: m[1],
  text: JSON.parse(`"${m[3]}"`),
  url: m[4],
}));
if (!entries.length) {
  console.error('no quotes read from type-quotes.ts');
  process.exit(2);
}

const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: '\u00a0' };
const plain = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&(\w+);/g, (m, n) => ENT[n] ?? m)
    .replace(/\s+/g, ' ');

const pages = new Map();
let bad = 0;
for (const e of entries) {
  const url = e.url.replace(/#.*$/, '');
  if (!pages.has(url)) {
    const res = await fetch(url, { headers: { 'user-agent': 'oh-my-design quote check' } });
    pages.set(url, { status: res.status, text: res.ok ? plain(await res.text()) : '' });
  }
  const page = pages.get(url);
  const found = page.status === 200 && page.text.includes(e.text.replace(/\s+/g, ' '));
  if (!found) bad++;
  console.log(`${found ? 'found  ' : 'MISSING'} ${e.id}  ${page.status}  ${url}`);
}
process.exit(bad ? 1 : 0);
