#!/usr/bin/env node
/**
 * One page for the owner: what the site is drawn with today (from controls.mjs' inventory.json) beside the proposed
 * scale, and links to the stills. Numbers in the "now" column are computed here from the inventory, never typed.
 *
 *   node scripts/site-audit/report.mjs [--inventory FILE] [--out DIR]
 * Default inventory: the newest ~/.omd-workers/site-audit/<day>/inventory.json; out: ~/Downloads/omd-design-system/.
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const args = process.argv.slice(2);
const flag = (n) => (args.includes(n) ? args[args.indexOf(n) + 1] : null);
const root = path.join(os.homedir(), '.omd-workers/site-audit');
const invFile = flag('--inventory') ?? path.join(root, fs.readdirSync(root).filter((d) => /^\d{8}$/.test(d)).sort().pop(), 'inventory.json');
const OUT = path.resolve(flag('--out') ?? path.join(os.homedir(), 'Downloads/omd-design-system'));
const inv = JSON.parse(fs.readFileSync(invFile, 'utf8'));
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const wide = Object.entries(inv.pages).filter(([k, p]) => k.endsWith('@1440') && p.controls);
const narrow = Object.entries(inv.pages).filter(([k, p]) => k.endsWith('@390') && p.controls);
const pageOf = (k) => k.split('@')[0];

// Buttons: filled or outlined controls with a label, 28 to 64 px tall (rows, cards and swatches are not buttons).
const buttons = wide.flatMap(([k, p]) => p.controls.filter((c) => (c.filled || c.border) && c.text && c.h >= 28 && c.h <= 64 && c.w < 420 && (c.tag === 'button' || c.tag === 'a') && !/^Copy (grey|blue|red|green|[a-z]+\d)/i.test(c.text) && c.radius !== '0px').map((c) => ({ ...c, page: pageOf(k) })));
const tally = (rows, key) => { const m = new Map(); for (const r of rows) { const v = key(r); if (!m.has(v)) m.set(v, new Set()); m.get(v).add(r.page); } return [...m.entries()].sort((a, b) => parseFloat(a[0]) - parseFloat(b[0])); };
const heights = tally(buttons, (c) => c.h + 'px');
const radii = tally(buttons, (c) => (parseFloat(c.radius) > 900 ? '둥근 끝(999)' : c.radius));
const btnType = tally(buttons, (c) => c.fontSize + ' / ' + c.fontWeight);
const h1 = tally(wide.flatMap(([k, p]) => p.headings.filter((h) => h.tag === 'h1').map((h) => ({ ...h, page: pageOf(k) }))), (h) => h.fontSize + ' / ' + h.fontWeight);
const h2 = tally(wide.flatMap(([k, p]) => p.headings.filter((h) => h.tag === 'h2' && parseFloat(h.fontSize) >= 18).map((h) => ({ ...h, page: pageOf(k) }))), (h) => h.fontSize + ' / ' + h.fontWeight);
const textSizes = new Map(); for (const [k, p] of wide) for (const [sig, n] of Object.entries(p.texts)) { const s = sig.split(' / ')[0]; if (!textSizes.has(s)) textSizes.set(s, { n: 0, pages: new Set() }); textSizes.get(s).n += n; textSizes.get(s).pages.add(pageOf(k)); }
const odd = [...textSizes.entries()].filter(([s]) => !Number.isInteger(parseFloat(s))).sort((a, b) => b[1].n - a[1].n);
const overflow = [...wide, ...narrow].filter(([, p]) => p.overflowX > 0).map(([k, p]) => k + ' (' + p.overflowX + 'px)');
const list = (rows) => rows.map(([v, pages]) => '<b>' + esc(v) + '</b> <span>' + esc([...pages].join(', ')) + '</span>').join('<br>');

const rows = [
  ['버튼 높이', heights.length + '가지', list(heights), '<b>32 · 40 · 48</b><br><span>40이 기본. 32는 표·칩 안, 48은 랜딩 첫 화면의 주 버튼 하나에만. 폰에서는 기본이 44.</span>'],
  ['버튼 글자', btnType.length + '가지', list(btnType), '<b>14 / 600 · 15 / 650 · 16 / 650</b><br><span>높이 32 · 40 · 48에 하나씩.</span>'],
  ['버튼 모서리', radii.length + '가지', list(radii), '<b>둥근 끝(999)</b> <span>누르면 일이 일어나는 버튼</span><br><b>14px</b> <span>입력창, 탭 묶음, 복사 칸</span>'],
  ['페이지 제목(h1)', h1.length + '가지', list(h1), '<b>40 / 760</b> <span>모든 페이지(폰 28)</span><br><b>60 / 760</b> <span>홈과 스킬 랜딩의 첫 화면만</span>'],
  ['절 제목(h2)', h2.length + '가지', list(h2), '<b>26 / 760</b> <span>(폰 22)</span>, 랜딩의 큰 절은 <b>40 / 740</b>'],
  ['소수점 글자 크기', odd.length + '가지', odd.map(([s, e]) => '<b>' + esc(s) + '</b> <span>' + e.n + '곳 · ' + esc([...e.pages].join(', ')) + '</span>').join('<br>'), '<b>12 · 14 · 15 · 16 · 17 · 19</b><br><span>em 곱으로 생긴 14.45 · 12.75 같은 값을 정수 단계로.</span>'],
];
const html = '<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>우리 사이트 디자인 시스템 — 실측과 제안</title><style>body{margin:0;font:15px/1.65 -apple-system,"Apple SD Gothic Neo",sans-serif;color:#13131a;word-break:keep-all}main{max-width:1180px;margin:0 auto;padding:44px 24px 90px}h1{font-size:28px;line-height:1.3;margin:0 0 10px}h2{font-size:20px;margin:44px 0 8px}p{margin:0 0 10px;max-width:78ch}table{border-collapse:collapse;width:100%;margin-top:14px}th,td{text-align:left;vertical-align:top;padding:12px 16px 12px 0;border-top:1px solid #e5e6eb}th{font-size:13px;color:#5a5a63;font-weight:600}td span{color:#5a5a63;font-size:13px}td:nth-child(2){white-space:nowrap;font-weight:700}a{color:#6749e2;font-weight:650}li{margin:6px 0}.go{display:inline-block;margin-top:8px;padding:10px 18px;border-radius:999px;background:#6749e2;color:#fff;text-decoration:none}</style></head><body><main>'
  + '<h1>우리 사이트 디자인 시스템 — 실측과 제안</h1><p>' + esc(inv.base) + ' 의 화면 ' + wide.length + '종을 1440과 390 폭에서 잰 것입니다(' + esc(inv.day.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')) + '). 왼쪽 「지금」은 전부 측정값이고, 오른쪽은 제안입니다. 코드는 아직 바꾸지 않았습니다.</p>'
  + '<table><thead><tr><th>무엇</th><th>지금</th><th>어디에 무엇이</th><th>제안</th></tr></thead><tbody>' + rows.map((r) => '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td><td>' + r[2] + '</td><td>' + r[3] + '</td></tr>').join('') + '</tbody></table>'
  + '<h2>재다가 찾은 결함</h2><ul>' + (overflow.length ? '<li>가로로 넘치는 화면: ' + esc(overflow.join(', ')) + '</li>' : '') + '<li>블로그 목록, FAQ, 변경 기록, 「DESIGN.md란」, 대안 비교 페이지는 리브랜드 전의 글자 규격(48 / 700)을 그대로 씁니다.</li></ul>'
  + '<h2>적용 순서(제안)</h2><ol><li>상세 페이지 머리 — 아래 시안에서 방향을 고르시면 그것부터.</li><li>상세 페이지 본문과 아카이브 목록.</li><li>문서(docs)와 옛 규격의 다섯 페이지.</li><li>블로그, 스킬 랜딩(/hangul, 새 /kana).</li><li>공개된 우리 DESIGN.md(/design.md)를 이 규격으로 다시 씁니다.</li></ol>'
  + '<h2>시안</h2><p><a class="go" href="item-hero/index.html">상세 페이지 머리 시안 3안 보기</a></p></main></body></html>\n';
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'index.html'), html);
console.log('buttons ' + buttons.length + ': heights ' + heights.map((h) => h[0]).join(' ') + ' | radii ' + radii.map((h) => h[0]).join(' ') + ' | h1 ' + h1.map((h) => h[0]).join(' ; ') + ' | odd sizes ' + odd.map((o) => o[0]).join(' ') + ' | overflow ' + overflow.join(', '));
console.log('→ ' + path.join(OUT, 'index.html'));
