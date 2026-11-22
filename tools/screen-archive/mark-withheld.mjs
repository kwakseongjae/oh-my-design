#!/usr/bin/env node
/**
 * Write tools/screen-archive/withheld.json into the sheets: every record of a listed screen gets
 * \`withheld: "<reason>"\`, every other record loses the field. The sheets are local (never committed); the list is
 * committed, so the decision about what may be shown is reviewable and survives a rebuilt sheet.
 *
 *   node tools/screen-archive/mark-withheld.mjs [--sheets DIR]      (default ~/Downloads/kr-screens/web)
 *
 * A key in the list that the sheet does not have is an error: the list and the walk have drifted. A service named
 * under `excluded` is withheld whole.
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const args = process.argv.slice(2);
const SHEETS = path.resolve(args.includes('--sheets') ? args[args.indexOf('--sheets') + 1] : path.join(os.homedir(), 'Downloads/kr-screens/web'));
const file0 = JSON.parse(fs.readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), 'withheld.json'), 'utf8'));
const list = file0.services;
const excluded = file0.excluded ?? {};   // whole services taken out of the publication set: every record is withheld
let bad = 0; const out = [];
for (const d of fs.readdirSync(SHEETS, { withFileTypes: true })) {
  const file = path.join(SHEETS, d.name, 'screens.json');
  if (!d.isDirectory() || !fs.existsSync(file)) continue;
  const sheet = JSON.parse(fs.readFileSync(file, 'utf8'));
  const want = list[sheet.slug] ?? {};
  const keys = new Set(sheet.records.map((r) => r.key));
  for (const k of Object.keys(want)) if (!keys.has(k)) { console.error(sheet.slug + ': withheld.json names "' + k + '", which the sheet does not have'); bad++; }
  let shown = 0, held = 0;
  const all = excluded[sheet.slug];
  for (const r of sheet.records) { if (all) r.withheld = all; else if (want[r.key]) r.withheld = want[r.key]; else delete r.withheld; }
  for (const k of keys) { if (all || want[k]) held++; else if (!sheet.records.filter((r) => r.key === k).every((r) => r.blocked)) shown++; }
  fs.writeFileSync(file, JSON.stringify(sheet, null, 1));
  out.push(sheet.slug + ' shown ' + shown + ' withheld ' + held);
}
for (const slug of Object.keys(list)) if (!out.some((l) => l.startsWith(slug + ' '))) { console.error('withheld.json names service "' + slug + '", which has no sheet'); bad++; }
console.log(out.join('\n'));
process.exit(bad ? 1 : 0);
