#!/usr/bin/env node
/**
 * Stills of the screens gallery (/screens) and the landing section that leads to it. The owner asked on 2026-11-21 for
 * "a page like Mobbin that gathers these references" and a place on the landing page, and for more thought about the
 * form; these are the forms to choose between, drawn from the sheets make-web-sheet.mjs wrote (real frames, real token
 * matches). Nothing here is site code.
 *
 *   node tools/screen-archive/make-gallery-mocks.mjs [--sheets DIR] [--out DIR]
 *
 * Default sheets: ~/Downloads/kr-screens/web, out: ~/Downloads/kr-screens/mock. Writes
 *   g-shelves.html        by screen type, one shelf per type (the recommended form)
 *   g-shelves-390.html    the same at phone width
 *   g-matrix.html         services × the same core screens (make-ia-mocks' A at the site scale)
 *   g-wall.html           every screen in one filtered wall
 *   g-landing.html        the landing section
 * The frames are other companies' screens: the mocks stay on this machine (output inside a git work tree is refused).
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const args = process.argv.slice(2);
const flag = (n) => (args.includes(n) ? args[args.indexOf(n) + 1] : null);
const SHEETS = path.resolve(flag('--sheets') ?? path.join(os.homedir(), 'Downloads/kr-screens/web'));
const OUT = path.resolve(flag('--out') ?? path.join(os.homedir(), 'Downloads/kr-screens/mock'));
fs.mkdirSync(OUT, { recursive: true });
try { execFileSync('git', ['-C', OUT, 'rev-parse', '--is-inside-work-tree'], { stdio: 'pipe' }); console.error('refused: ' + OUT + ' is inside a git work tree'); process.exit(2); } catch { /* fine */ }

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const services = fs.readdirSync(SHEETS, { withFileTypes: true }).filter((d) => d.isDirectory() && fs.existsSync(path.join(SHEETS, d.name, 'screens.json'))).map((d) => {
  const w = JSON.parse(fs.readFileSync(path.join(SHEETS, d.name, 'screens.json'), 'utf8'));
  const tf = path.join(SHEETS, d.name, 'tokens.json');
  const byKey = new Map();
  for (const r of w.records) { const cur = byKey.get(r.key); if (!cur) byKey.set(r.key, { ...r }); else if (r.state && !cur.state) cur.state = r.state; }
  return { slug: w.slug, name: w.name, platform: w.platform, reference: w.reference, shot: w.shot, screens: [...byKey.values()], tokens: fs.existsSync(tf) ? JSON.parse(fs.readFileSync(tf, 'utf8')) : null, rel: path.relative(OUT, path.join(SHEETS, d.name)) };
}).sort((a, b) => (a.platform === b.platform ? a.name.localeCompare(b.name, 'ko') : a.platform === 'both' ? -1 : 1));
if (!services.length) { console.error('no sheets under ' + SHEETS); process.exit(1); }
const img = (s, key, w) => s.rel + '/img/' + w + '-' + key + '.jpg';
const has = (s, key, w) => fs.existsSync(path.join(SHEETS, s.slug, 'img', w + '-' + key + '.jpg'));
// The dots: DESIGN.md colours drawn on the screen, black and white left out, the ones with a hue first.
const chroma = (v) => { const m = /^#([0-9a-f]{6})/i.exec(String(v)); if (!m) return 0; const [r, g, b] = [0, 2, 4].map((i) => parseInt(m[1].slice(i, i + 2), 16)); return Math.max(r, g, b) - Math.min(r, g, b); };
const dots = (s, key, max = 3) => (s.tokens ? s.tokens.colors.filter((c) => c.comparable && c.screens.includes(key) && !['#000000', '#ffffff', '#000', '#fff'].includes(String(c.value).toLowerCase())).sort((a, b) => chroma(b.value) - chroma(a.value)).slice(0, max) : []);
const shotDay = (services[0].shot ?? '').replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');

// The shelves: one per screen type, picked from the walks themselves. A state shelf comes from the walk's state field.
const SHELVES = [
  { id: 'home', title: '홈', pick: (r) => r.type === '홈' },
  { id: 'results', title: '검색 결과', pick: (r) => r.type === '검색 결과' && !r.state && !/없음/.test(r.title) },
  { id: 'list', title: '목록', pick: (r) => r.type === '목록' },
  { id: 'detail', title: '상세', pick: (r) => r.type === '상세' },
  { id: 'login', title: '로그인', pick: (r) => r.type === '로그인' },
  { id: 'empty', title: '빈 상태', pick: (r) => r.state === '빈 상태' || /없음/.test(r.title) },
  { id: 'notfound', title: '없는 주소', pick: (r) => r.type === '오류' },
];
// Each service's first screen of the type comes first, so a shelf opens on as many services as it has; the rest follow.
const shelf = (sh, w) => { const per = services.map((s) => s.screens.filter((r) => sh.pick(r) && !r.blocked && has(s, r.key, w)).map((r) => ({ s, r }))); return [...per.flatMap((x) => x.slice(0, 1)), ...per.flatMap((x) => x.slice(1))]; };
const used = new Set();
for (const sh of SHELVES) for (const { s, r } of shelf(sh, 390)) used.add(s.slug + '/' + r.key);
const otherTypes = new Map();
for (const s of services) for (const r of s.screens) if (!used.has(s.slug + '/' + r.key) && !r.blocked && has(s, r.key, 390)) otherTypes.set(r.type, (otherTypes.get(r.type) ?? 0) + 1);
const total = services.reduce((n, s) => n + s.screens.filter((r) => !r.blocked).length, 0);

const BASE = String.raw`
@import url("https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.3/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css");
:root{--p:#6749e2;--p50:#f6f6fe;--ink:#13131a;--ink2:#5a5a63;--n50:#f9faff;--n100:#f3f3f8;--n200:#e5e6eb;--n300:#d3d3db;--r-ctl:10px;--r-card:16px;--h-sm:32px;--h-md:40px}
*{box-sizing:border-box}
body{margin:0;font:16px/1.6 "Wanted Sans Variable","Wanted Sans","Apple SD Gothic Neo",sans-serif;color:var(--ink);background:#fff;word-break:keep-all;overflow-wrap:anywhere}
a{color:inherit;text-decoration:none}
.wrap{max-width:1360px;margin:0 auto;padding:0 40px}
.hdr{height:64px;display:flex;align-items:center;gap:28px;font-size:15px;color:var(--ink2)}
.hdr b{color:var(--ink);font-weight:700;font-size:16px;margin-right:auto;display:flex;align-items:center;gap:8px}
.hdr b::before{content:"";width:24px;height:24px;border-radius:7px;background:var(--p)}
.hdr .on{color:var(--ink);font-weight:650}
h1{font-size:40px;line-height:1.15;letter-spacing:-0.02em;font-weight:760;margin:0}
h2{font-size:22px;line-height:1.3;font-weight:740;margin:0}
.sub{color:var(--ink2);font-size:15px;margin:0}
.btn{display:inline-flex;align-items:center;gap:8px;height:var(--h-md);padding:0 18px;border-radius:999px;font-size:15px;font-weight:650;white-space:nowrap}
.btn.p{background:var(--p);color:#fff}.btn.o{box-shadow:inset 0 0 0 1px var(--n300)}
.seg{display:inline-flex;background:var(--n100);border-radius:var(--r-ctl);padding:3px;gap:2px}
.seg span{height:var(--h-sm);padding:0 14px;display:inline-flex;align-items:center;border-radius:8px;font-size:14px;font-weight:600;color:var(--ink2);white-space:nowrap}
.seg span[data-on]{background:#fff;color:var(--ink);box-shadow:0 1px 2px rgba(20,20,60,.08)}
.chip{display:inline-flex;align-items:center;gap:6px;height:var(--h-sm);padding:0 12px;border-radius:999px;box-shadow:inset 0 0 0 1px var(--n200);font-size:14px;font-weight:600;color:var(--ink2);white-space:nowrap}
.chip small{font-size:12px;font-weight:600;color:var(--ink2);opacity:.8}
.chip[data-on]{background:var(--ink);color:#fff;box-shadow:none}.chip[data-on] small{color:#fff}
.top{display:flex;align-items:flex-end;gap:16px;padding:28px 0 20px;flex-wrap:wrap}
.rail{display:flex;gap:8px;flex-wrap:wrap;padding:12px 0;border-top:1px solid var(--n200);border-bottom:1px solid var(--n200)}
.tile{display:block;min-width:0}
.ph{display:block;aspect-ratio:390/720;overflow:hidden;border-radius:14px;border:1px solid var(--n200);background:var(--n50)}
.ph img{display:block;width:100%}
.dk{display:block;aspect-ratio:1440/900;overflow:hidden;border-radius:12px;border:1px solid var(--n200);background:var(--n50)}
.dk img{display:block;width:100%}
.cap{display:flex;align-items:center;gap:6px;margin-top:10px;min-height:22px}
.cap b{font-size:14px;font-weight:650;line-height:1.3;margin-right:auto}
.cap i{width:14px;height:14px;border-radius:50%;border:1px solid rgba(0,0,0,.12);flex:none}
.cap2{font-size:13px;color:var(--ink2);line-height:1.4;margin-top:2px}
.note{margin:28px auto 60px;max-width:1360px;padding:14px 40px;color:var(--ink2);font-size:13px;border-top:1px solid var(--n200)}
.mock{position:fixed;right:16px;bottom:16px;background:var(--ink);color:#fff;font-size:12px;padding:6px 10px;border-radius:8px;opacity:.85}
`;
const page = (title, css, body, foot, width = 1440) => '<!doctype html>\n<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=' + width + '"><meta name="robots" content="noindex"><title>' + esc(title) + '</title><style>' + BASE + css + '</style></head><body>' + body + '<p class="note">' + esc(foot) + ' 정지 시안입니다. 화면은 각 회사의 것이고 이 파일은 이 Mac에만 있습니다(공개 보류).</p><div class="mock">시안 · 사이트 코드 아님</div></body></html>\n';
const header = (narrow) => (narrow ? '<div class="wrap hdr"><b>oh-my-design</b><span>☰</span></div>' : '<div class="wrap hdr"><b>oh-my-design</b><span>아카이브</span><span class="on">화면</span><span>스킬</span><span>문서</span></div>');
const intro = '<div style="margin-right:auto;min-width:0"><h1>한국 서비스 화면</h1><p class="sub" style="margin-top:8px">' + services.length + '곳 · 화면 ' + total + '개 · ' + esc(shotDay) + '에 로그아웃 상태로 찍음. 화면마다 그 회사 DESIGN.md의 색이 그려진 곳이 점으로 붙습니다.</p></div>';
const tile = (s, r, w) => '<a class="tile"><span class="' + (w === 390 ? 'ph' : 'dk') + '"><img loading="lazy" src="' + esc(img(s, r.key, w)) + '" alt=""></span><span class="cap"><b>' + esc(s.name) + '</b>' + dots(s, r.key).map((c) => '<i style="background:' + esc(c.value) + '" title="' + esc(c.token) + '"></i>').join('') + '</span><span class="cap2">' + esc(r.title) + '</span></a>';

// ---- shelves (recommended) ----
const rail = (on) => '<div class="rail">' + SHELVES.map((sh) => '<span class="chip"' + (sh.id === on ? ' data-on' : '') + '>' + esc(sh.title) + ' <small>' + shelf(sh, 390).length + '</small></span>').join('') + [...otherTypes].sort((a, b) => b[1] - a[1]).slice(0, 5).map(([t, n]) => '<span class="chip">' + esc(t) + ' <small>' + n + '</small></span>').join('') + '</div>';
const shelvesBody = (narrow) => header(narrow) + '<div class="wrap"><div class="top">' + intro + '<div class="seg"><span data-on>화면 종류별</span><span>서비스별</span></div><div class="seg"><span data-on>폰 390</span><span>웹 1440</span></div></div>' + rail('home')
  + SHELVES.slice(0, narrow ? 3 : 4).map((sh) => { const xs = shelf(sh, 390); return '<section class="sh"><div class="shh"><h2>' + esc(sh.title) + '</h2><span class="sub">' + xs.length + '개 화면 · ' + new Set(xs.map((x) => x.s.slug)).size + '곳</span><a class="all">모두 보기 →</a></div><div class="row">' + xs.slice(0, 9).map(({ s, r }) => tile(s, r, 390)).join('') + '</div></section>'; }).join('') + '</div>';
const shelvesCss = String.raw`
.sh{padding:32px 0 4px}
.shh{display:flex;align-items:baseline;gap:12px;margin-bottom:16px}.shh .all{margin-left:auto;font-size:14px;font-weight:650;color:var(--p)}
.row{display:grid;grid-auto-flow:column;grid-auto-columns:196px;gap:16px;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,#000 calc(100% - 96px),transparent)}
`;
fs.writeFileSync(path.join(OUT, 'g-shelves.html'), page('화면 모음 시안 1 — 종류별 선반', shelvesCss, shelvesBody(false), '시안 1: /screens. 같은 종류의 화면을 한 줄에 모읍니다. 줄은 옆으로 넘기고, 화면을 누르면 크게 열리며 그 회사의 DESIGN.md로 가는 길이 붙습니다. 「서비스별」로 바꾸면 같은 선반이 회사 단위로 묶입니다.'));
fs.writeFileSync(path.join(OUT, 'g-shelves-390.html'), page('화면 모음 시안 1 — 폰', shelvesCss + String.raw`
.wrap{padding:0 16px}h1{font-size:28px}.top{padding:16px 0 14px;gap:10px}.rail{flex-wrap:nowrap;overflow:hidden}.row{grid-auto-columns:150px;gap:12px;-webkit-mask-image:linear-gradient(90deg,#000 calc(100% - 48px),transparent)}.sh{padding:24px 0 0}h2{font-size:20px}.note{padding:14px 16px}.shh .sub{display:none}
`, shelvesBody(true), '시안 1의 폰 폭.', 390));

// ---- matrix ----
const cell = (s, sh) => s.screens.find((r) => sh.pick(r) && has(s, r.key, 390) && !r.blocked);
fs.writeFileSync(path.join(OUT, 'g-matrix.html'), page('화면 모음 시안 2 — 표', String.raw`
.grid{display:grid;grid-template-columns:150px repeat(` + SHELVES.length + `,minmax(0,1fr));gap:12px 12px;align-items:start;padding-bottom:20px}
.grid .h{position:sticky;top:0;background:#fff;font-size:13px;font-weight:650;color:var(--ink2);padding:10px 0 8px;border-bottom:1px solid var(--n200)}
.svc b{display:block;font-size:17px;font-weight:720;line-height:1.3;padding-top:6px}
.svc a{display:inline-flex;font-size:13px;font-weight:600;color:var(--p);margin-top:6px}
.svc span{display:block;font-size:13px;color:var(--ink2)}
.none{aspect-ratio:390/720;display:flex;align-items:center;justify-content:center;font-size:12px;color:var(--ink2);border:1px dashed var(--n300);border-radius:14px}
`,
  header(false) + '<div class="wrap"><div class="top">' + intro + '<div class="seg"><span data-on>폰 390</span><span>웹 1440</span></div></div><div class="grid"><div class="h">서비스</div>' + SHELVES.map((c) => '<div class="h">' + esc(c.title) + '</div>').join('')
  + services.slice(0, 4).map((s) => '<div class="svc"><b>' + esc(s.name) + '</b><span>' + s.screens.length + '화면</span><a>DESIGN.md →</a></div>' + SHELVES.map((c) => { const r = cell(s, c); return r ? '<a class="ph"><img loading="lazy" src="' + esc(img(s, r.key, 390)) + '" alt=""></a>' : '<div class="none">없음</div>'; }).join('')).join('') + '</div></div>',
  '시안 2: 행은 서비스, 열은 화면 종류. 11곳을 가장 빨리 훑지만 열이 일곱으로 묶이고(장바구니·피드 같은 화면은 들어갈 칸이 없음), 폰에서는 표가 되지 않습니다.'));

// ---- wall ----
const wall = services.flatMap((s) => s.screens.filter((r) => !r.blocked && has(s, r.key, 1440)).map((r) => ({ s, r })));
const mix = []; for (let i = 0; mix.length < 12 && i < 40; i++) for (const s of services) { const x = wall.filter((v) => v.s === s)[i]; if (x && mix.length < 12) mix.push(x); }
fs.writeFileSync(path.join(OUT, 'g-wall.html'), page('화면 모음 시안 3 — 벽', String.raw`
.f{display:flex;gap:8px;flex-wrap:wrap;padding:12px 0;border-top:1px solid var(--n200)}
.f + .f{border-top:0;padding-top:0}
.f em{font-style:normal;font-size:13px;font-weight:650;color:var(--ink2);width:72px;line-height:32px}
.g{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:28px 20px;padding:20px 0}
`,
  header(false) + '<div class="wrap"><div class="top">' + intro + '<div class="seg"><span>폰 390</span><span data-on>웹 1440</span></div></div>'
  + '<div class="f"><em>서비스</em><span class="chip" data-on>전체 <small>' + total + '</small></span>' + services.map((s) => '<span class="chip">' + esc(s.name) + ' <small>' + s.screens.length + '</small></span>').join('') + '</div>'
  + '<div class="f"><em>화면 종류</em>' + SHELVES.map((sh) => '<span class="chip">' + esc(sh.title) + ' <small>' + shelf(sh, 390).length + '</small></span>').join('') + '</div>'
  + '<div class="g">' + mix.map(({ s, r }) => tile(s, r, 1440)).join('') + '</div></div>',
  '시안 3: 모든 화면을 한 벽에 놓고 서비스와 종류로 거릅니다. Mobbin의 탐색 화면에 가장 가깝습니다. 거르기 전에는 같은 종류끼리 나란히 놓이지 않습니다.'));

// ---- landing section ----
const homes = shelf(SHELVES[0], 390); const seen = new Set(); const row = homes.filter((x) => (seen.has(x.s.slug) ? false : seen.add(x.s.slug))).slice(0, 7);
fs.writeFileSync(path.join(OUT, 'g-landing.html'), page('랜딩 구역 시안', String.raw`
.ghost{height:120px;border-bottom:1px solid var(--n200);display:flex;align-items:center;color:var(--ink2);font-size:13px}
.sec{padding:96px 0 88px}
.sec .k{font-size:14px;font-weight:650;color:var(--p)}
.sec h2{font-size:40px;line-height:1.15;letter-spacing:-0.02em;font-weight:760;margin-top:10px}
.sec .lede{font-size:17px;color:var(--ink2);max-width:640px;margin:14px 0 0}
.bar{display:flex;align-items:center;gap:8px;margin:32px 0 20px}.bar .btn{margin-left:auto}
.row{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:16px}
`,
  header(false) + '<div class="wrap"><div class="ghost">… 위는 지금 랜딩의 레퍼런스 구역 …</div><section class="sec"><span class="k">화면</span><h2>같은 화면, ' + services.length + '곳</h2><p class="lede">한국 서비스 ' + services.length + '곳의 홈, 검색 결과, 상세, 로그인 화면을 나란히 놓았습니다. 화면마다 그 회사 DESIGN.md의 색이 그려진 곳이 붙어 있어, 값과 화면을 오가며 볼 수 있습니다.</p>'
  + '<div class="bar">' + SHELVES.slice(0, 5).map((sh, i) => '<span class="chip"' + (i === 0 ? ' data-on' : '') + '>' + esc(sh.title) + '</span>').join('') + '<span class="btn o">화면 ' + total + '개 모두 보기 →</span></div>'
  + '<div class="row">' + row.map(({ s, r }) => tile(s, r, 390)).join('') + '</div></section><div class="ghost" style="border-top:1px solid var(--n200);border-bottom:0">… 아래는 지금 랜딩의 다음 구역 …</div></div>',
  '랜딩 구역: 레퍼런스 구역 다음에 한 줄. 위의 종류 칩을 누르면 같은 줄이 그 종류로 바뀌고, 오른쪽 버튼이 /screens로 갑니다.'));
console.log(JSON.stringify({ out: OUT, services: services.length, total, shelves: SHELVES.map((sh) => [sh.title, shelf(sh, 390).length]), other: [...otherTypes] }));
