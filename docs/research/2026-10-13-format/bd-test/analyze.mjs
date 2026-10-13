import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
const here = new URL('.', import.meta.url).pathname;
// Every verified value in the toss sample (same set in B and D).
const VALUES = {
  colors: ['#3182f6', '#2272eb', '#ffffff', '#191f28', '#4e5968', '#8b95a1', '#f2f4f6', '#e5e8eb', '#e42939', '#e8f3ff', '#1b64da'],
  radii: ['4px', '6px', '8px', '10px', '14px', '16px', '7px'],
  typeSizes: ['36px', '30px', '24px', '22px', '16px', '14px', '17px', '15px'],
  lineHeights: ['54px', '45px', '36px', '33px', '24px', '21px'],
  heights: ['56px', '48px', '38px', '32px', '40px', '46px'],
};
const arms = process.argv.slice(2);
const rows = [];
for (const arm of arms) {
  const dir = `${here}app-${arm}`;
  const run = JSON.parse(fs.readFileSync(`${here}run-${arm}.json`, 'utf8'));
  const css = fs.readFileSync(`${dir}/app/globals.css`, 'utf8').toLowerCase();
  const ex = fs.existsSync(`${dir}/EXTRACTION.md`) ? fs.readFileSync(`${dir}/EXTRACTION.md`, 'utf8') : '';
  const rep = fs.existsSync(`${dir}/REPORT.md`) ? fs.readFileSync(`${dir}/REPORT.md`, 'utf8') : '';
  const both = (ex + '\n' + rep).toLowerCase();
  const r = { arm, turns: run.num_turns, min: Math.round(run.duration_ms / 60000), usd: (run.total_cost_usd ?? 0).toFixed(2), err: run.is_error };
  for (const [k, vals] of Object.entries(VALUES)) {
    r[`css_${k}`] = `${vals.filter((v) => css.includes(v)).length}/${vals.length}`;
    r[`ext_${k}`] = `${vals.filter((v) => ex.toLowerCase().includes(v)).length}/${vals.length}`;
  }
  r.contrast371 = both.includes('3.71');
  r.knownGapsNamed = /known gaps/.test(both);
  r.spacingOmitted = /spacing/.test(both) && /(omit|not verified|no verified|unverified)/.test(both);
  r.noSubstitute = /(no substitute|substitute: none|none chosen|no .*substitute)/.test(both);
  r.notoSansKR = both.includes('noto sans kr');
  r.tossProductSansInCss = css.includes('toss product sans');
  r.notoInCss = css.includes('noto sans');
  r.interInCss = css.includes('inter');
  r.dontCount = (ex.match(/don'?t|never/gi) || []).length;
  r.tossface = /tossface/.test(both);
  r.marketing7px = /7px/.test(css);
  rows.push(r);
}
console.log(JSON.stringify(rows, null, 1));
