#!/usr/bin/env node
/**
 * Stills of where the screen archive could live on the site and how a visitor moves between a service's screens and
 * its DESIGN.md. They are drawn from the sheets make-web-sheet.mjs wrote (real frames, real token matches), so the
 * owner chooses a direction looking at actual content. Nothing here is site code.
 *
 *   node tools/screen-archive/make-ia-mocks.mjs [--sheets DIR] [--out DIR] [--focus slug] [--screen key]
 *
 * Default sheets: ~/Downloads/kr-screens/web, out: ~/Downloads/kr-screens/mock. Writes
 *   a-matrix.html        every service × the same core screens, one glance (the index)
 *   b-item-screens.html  the item page with a Screens tab beside DESIGN.md (the service)
 *   c-screen.html        one screen with the DESIGN.md values drawn on it, and the same screen at other services
 *   index.html           the three with a line each
 * The frames are other companies' screens: the mocks stay on this machine like the sheets (output inside a git work
 * tree is refused).
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
  const byKey = new Map(); for (const r of w.records) if (!byKey.has(r.key)) byKey.set(r.key, r);
  return { slug: w.slug, name: w.name, platform: w.platform, reference: w.reference, shot: w.shot, screens: [...byKey.values()], tokens: fs.existsSync(tf) ? JSON.parse(fs.readFileSync(tf, 'utf8')) : null, rel: path.relative(OUT, path.join(SHEETS, d.name)) };
}).sort((a, b) => (a.platform === b.platform ? a.name.localeCompare(b.name, 'ko') : a.platform === 'both' ? -1 : 1));
if (!services.length) { console.error('no sheets under ' + SHEETS); process.exit(1); }
const img = (s, key, w, full) => s.rel + '/img/' + w + '-' + key + (full ? '.full' : '') + '.jpg';
const has = (s, key, w) => fs.existsSync(path.join(SHEETS, s.slug, 'img', w + '-' + key + '.jpg'));
const PLATFORM = { both: '웹 · 앱', web: '웹', mobile: '앱' };

// The columns of the matrix: one screen per service for each, picked by type and state from the walk itself.
const COLUMNS = [
  { title: '홈', pick: (r) => r.type === '홈' },
  { title: '검색 결과', pick: (r) => r.type === '검색 결과' && !r.state },
  { title: '목록', pick: (r) => r.type === '목록' },
  { title: '상세', pick: (r) => r.type === '상세' },
  { title: '로그인', pick: (r) => r.type === '로그인' },
  { title: '빈 상태', pick: (r) => r.state === '빈 상태' },
  { title: '없는 주소', pick: (r) => r.type === '오류' },
];
const cell = (s, col) => s.screens.find((r) => col.pick(r) && has(s, r.key, 390) && !r.blocked);

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
.sub{color:var(--ink2);font-size:15px}
.btn{display:inline-flex;align-items:center;gap:8px;height:var(--h-md);padding:0 18px;border-radius:999px;font-size:15px;font-weight:650;white-space:nowrap}
.btn.p{background:var(--p);color:#fff}.btn.o{box-shadow:inset 0 0 0 1px var(--n300)}
.seg{display:inline-flex;background:var(--n100);border-radius:var(--r-ctl);padding:3px;gap:2px}
.seg span{height:var(--h-sm);padding:0 14px;display:inline-flex;align-items:center;border-radius:8px;font-size:14px;font-weight:600;color:var(--ink2)}
.seg span[data-on]{background:#fff;color:var(--ink);box-shadow:0 1px 2px rgba(20,20,60,.08)}
.seg span[data-off]{opacity:.5}
.chip{display:inline-flex;align-items:center;gap:6px;height:24px;padding:0 9px;border-radius:6px;background:var(--n100);font-size:12.5px;font-weight:550;color:var(--ink2)}
.tok{display:inline-flex;align-items:center;gap:6px;height:26px;padding:0 9px 0 5px;border-radius:7px;border:1px solid var(--n200);font-size:12.5px;background:#fff}
.tok i{width:16px;height:16px;border-radius:5px;border:1px solid rgba(0,0,0,.12)}
.tok em{font-style:normal;color:var(--ink2)}
.shot{display:block;width:100%;border:1px solid var(--n200);border-radius:10px;background:var(--n50)}
.tabs{display:flex;gap:24px;border-bottom:1px solid var(--n200);margin-top:20px}
.tabs span{height:44px;display:inline-flex;align-items:center;gap:6px;font-size:15px;font-weight:650;color:var(--ink2);border-bottom:2px solid transparent;margin-bottom:-1px}
.tabs span[data-on]{color:var(--ink);border-bottom-color:var(--ink)}
.tabs small{font-size:12px;font-weight:600;background:var(--n100);border-radius:999px;padding:1px 7px}
.note{margin:28px auto 60px;max-width:1360px;padding:14px 40px;color:var(--ink2);font-size:13px;border-top:1px solid var(--n200)}
.mock{position:fixed;right:16px;bottom:16px;background:var(--ink);color:#fff;font-size:12px;padding:6px 10px;border-radius:8px;opacity:.85}
`;
const page = (title, css, body, foot) => '<!doctype html>\n<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=1440"><meta name="robots" content="noindex"><title>' + esc(title) + '</title><style>' + BASE + css + '</style></head><body>' + body + '<p class="note">' + esc(foot) + ' 정지 시안입니다. 화면은 각 회사의 것이고 이 파일은 이 Mac에만 있습니다(공개 보류).</p><div class="mock">시안 · 사이트 코드 아님</div></body></html>\n';
const header = (on) => '<div class="wrap hdr"><b>oh-my-design</b><span' + (on === 'archive' ? ' class="on"' : '') + '>아카이브</span><span' + (on === 'screens' ? ' class="on"' : '') + '>화면</span><span>스킬</span><span>문서</span></div>';

// ---- A: the matrix ----
const total = services.reduce((n, s) => n + s.screens.length, 0);
const A = page('시안 A — 화면 한눈에', String.raw`
.top{display:flex;align-items:flex-end;gap:24px;padding:28px 0 20px}
.grid{display:grid;grid-template-columns:168px repeat(` + COLUMNS.length + `,minmax(0,1fr));gap:10px 12px;align-items:start;padding-bottom:20px}
.grid .h{position:sticky;top:0;background:#fff;font-size:13px;font-weight:650;color:var(--ink2);padding:10px 0 8px;border-bottom:1px solid var(--n200);z-index:1}
.svc{padding-top:6px}.svc b{display:block;font-size:17px;font-weight:720;line-height:1.3}
.svc a{display:inline-flex;align-items:center;gap:4px;font-size:13px;font-weight:600;color:var(--p);margin-top:6px}
.svc .chip{margin-top:6px}
.c{aspect-ratio:390/700;overflow:hidden;border-radius:10px;border:1px solid var(--n200);background:var(--n50)}
.c img{display:block;width:100%}
.c.none{display:flex;align-items:center;justify-content:center;font-size:12px;color:var(--ink2);border-style:dashed;background:#fff}
`,
  header('screens') + '<div class="wrap"><div class="top"><div style="margin-right:auto"><h1>한국 서비스 화면</h1><p class="sub" style="margin-top:8px">' + services.length + '곳 · 화면 ' + total + '개 · 같은 화면을 나란히 봅니다. 서비스 이름 아래에서 그 회사의 DESIGN.md로 갑니다.</p></div><div class="seg"><span>웹 1440</span><span data-on>웹 390</span><span data-off>앱</span></div></div>'
  + '<div class="grid"><div class="h">서비스</div>' + COLUMNS.map((c) => '<div class="h">' + esc(c.title) + '</div>').join('')
  + services.map((s) => '<div class="svc"><b>' + esc(s.name) + '</b><span class="chip">' + esc(PLATFORM[s.platform] ?? s.platform) + ' · ' + s.screens.length + '화면</span><br><a>DESIGN.md →</a></div>' + COLUMNS.map((c) => { const r = cell(s, c); return r ? '<a class="c" title="' + esc(s.name + ' ' + r.title) + '"><img loading="lazy" src="' + esc(img(s, r.key, 390)) + '" alt=""></a>' : '<div class="c none">없음</div>'; }).join('')).join('')
  + '</div></div>', 'A: /screens 의 첫 화면. 열은 화면 유형, 행은 서비스입니다. 칸을 누르면 시안 C(화면 한 장)로, 「DESIGN.md →」는 그 회사의 상세 페이지로 갑니다.');
fs.writeFileSync(path.join(OUT, 'a-matrix.html'), A);

// ---- B and C use one service ----
const focus = services.find((s) => s.slug === (flag('--focus') ?? '29cm')) ?? services[0];
const t = focus.tokens;
const sw = (v) => (/^#[0-9a-f]{3,8}$/i.test(String(v)) ? '<i style="background:' + esc(v) + '"></i>' : '');
const tokOn = (key, max = 4) => (t ? t.colors.filter((c) => c.screens.includes(key) && !['#000000', '#ffffff'].includes(String(c.value).toLowerCase())).slice(0, max) : []);
const hero = (tab) => '<div class="wrap"><div style="display:flex;align-items:center;gap:8px;height:40px;font-size:15px;font-weight:600;color:var(--ink2)">← 아카이브</div>'
  + '<div style="display:flex;align-items:center;gap:14px;margin-top:16px"><div style="width:48px;height:48px;border-radius:12px;background:var(--n100);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px">' + esc(focus.name.slice(0, 4)) + '</div><h1 style="margin-right:auto">' + esc(focus.name) + ' DESIGN.md</h1><span class="btn p">DESIGN.md 복사</span><span class="btn o">내려받기</span></div>'
  + '<div class="tabs"><span' + (tab === 'md' ? ' data-on' : '') + '>DESIGN.md</span><span' + (tab === 'screens' ? ' data-on' : '') + '>화면 <small>' + focus.screens.length + '</small></span></div></div>';
const groups = [
  ['핵심 화면', (r) => ['홈', '검색', '검색 결과', '목록', '상세', '로그인'].includes(r.type) && !r.state],
  ['상태', (r) => r.state || r.type === '오류' || r.type === '팝업'],
  ['이 서비스의 화면', (r) => !['홈', '검색', '검색 결과', '목록', '상세', '로그인', '오류', '팝업'].includes(r.type) && !r.state],
];
const card = (r) => '<a class="card"><div class="pair"><img class="shot d" loading="lazy" src="' + esc(img(focus, r.key, 1440)) + '" alt="">' + (has(focus, r.key, 390) ? '<img class="shot m" loading="lazy" src="' + esc(img(focus, r.key, 390)) + '" alt="">' : '') + '</div><div class="cap"><b>' + esc(r.title) + '</b><span class="chip">' + esc(r.state ?? r.type) + '</span></div><div class="tk">' + tokOn(r.key).map((c) => '<span class="tok">' + sw(c.value) + esc(c.token) + '</span>').join('') + '</div></a>';
const B = page('시안 B — 상세 페이지의 화면 탭', String.raw`
.body{display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:40px;padding-top:28px}
.bar{display:flex;align-items:center;gap:12px;margin-bottom:8px}
.g{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px 20px;margin:14px 0 36px}
.card .pair{position:relative;aspect-ratio:1440/900;overflow:hidden;border-radius:12px;border:1px solid var(--n200);background:var(--n50)}
.card .d{border:0;border-radius:0}
.card .m{position:absolute;right:10px;bottom:-1px;width:24%;border-radius:8px 8px 0 0;box-shadow:0 4px 16px rgba(20,20,60,.18);max-height:86%;object-fit:cover;object-position:top}
.cap{display:flex;align-items:center;gap:8px;margin-top:10px}.cap b{font-size:15px;font-weight:650;margin-right:auto}
.tk{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;min-height:26px}
aside{position:sticky;top:20px;align-self:start;border:1px solid var(--n200);border-radius:var(--r-card);padding:20px}
aside h2{font-size:16px}aside table{width:100%;border-collapse:collapse;margin-top:10px;font-size:13.5px}aside td{padding:7px 0;border-top:1px solid var(--n200)}aside td:last-child{text-align:right;color:var(--ink2);white-space:nowrap}
aside td i{display:inline-block;width:14px;height:14px;border-radius:4px;border:1px solid rgba(0,0,0,.12);vertical-align:-2px;margin-right:6px}
`,
  header('archive') + hero('screens') + '<div class="wrap body"><div><div class="bar"><div class="seg"><span data-on>웹</span><span data-off>앱</span></div><span class="sub">' + esc(focus.shot.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')) + '에 찍음 · 로그아웃 상태</span></div>'
  + groups.map(([title, f]) => { const rs = focus.screens.filter((r) => f(r) && has(focus, r.key, 1440) && !r.blocked); return rs.length ? '<h2>' + esc(title) + ' <span class="sub" style="font-weight:500">' + rs.length + '</span></h2><div class="g">' + rs.map(card).join('') + '</div>' : ''; }).join('') + '</div>'
  + '<aside><h2>DESIGN.md와 대조</h2><p class="sub" style="font-size:13px;margin:6px 0 0">이 회사 DESIGN.md의 값이 화면에 같은 값으로 그려진 곳입니다. 값을 누르면 그 값이 보이는 화면만 남습니다.</p>' + (t ? '<table>' + t.colors.filter((c) => c.comparable).map((c) => '<tr><td>' + sw(c.value) + esc(c.token) + '</td><td>' + (c.hits ? c.screens.length + '개 화면' : '보이지 않음') + '</td></tr>').join('') + '</table><p class="sub" style="font-size:13px;margin:12px 0 0">색 ' + (t.summary.colors.matchedBeyondBlackWhite ?? t.summary.colors.matched) + '/' + (t.summary.colors.comparableBeyondBlackWhite ?? t.summary.colors.comparable) + '(검정·흰색 제외) · 모서리 ' + t.summary.rounded.matched + '/' + t.summary.rounded.comparable + ' · 글자 크기 ' + t.summary.fontSizes.matched + '/' + t.summary.fontSizes.comparable + '</p>' : '<p class="sub">대조 없음</p>') + '</aside></div>',
  'B: /design-systems/' + focus.reference + ' 의 「화면」 탭. DESIGN.md 탭과 같은 페이지 안에서 오갑니다. 카드의 토큰 칩은 실제 대조 결과입니다.');
fs.writeFileSync(path.join(OUT, 'b-item-screens.html'), B);

const key = flag('--screen') ?? (focus.screens.find((r) => r.type === '상세' && has(focus, r.key, 1440)) ?? focus.screens[0]).key;
const scr = focus.screens.find((r) => r.key === key);
const idx = focus.screens.indexOf(scr);
const same = services.filter((s) => s.slug !== focus.slug).map((s) => ({ s, r: s.screens.find((r) => r.type === scr.type && !r.state && has(s, r.key, 390) && !r.blocked) })).filter((x) => x.r);
const onScreen = t ? { colors: t.colors.filter((c) => c.screens.includes(key)), comps: t.components.filter((c) => c.screens.includes(key)), sizes: t.fontSizes.filter((c) => c.screens.includes(key)), radii: t.rounded.filter((c) => c.screens.includes(key)) } : { colors: [], comps: [], sizes: [], radii: [] };
const C = page('시안 C — 화면 한 장', String.raw`
.crumb{display:flex;align-items:center;gap:8px;height:48px;font-size:15px;font-weight:600;color:var(--ink2)}
.crumb b{color:var(--ink)}
.lay{display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:32px;align-items:start}
.stage{display:grid;grid-template-columns:minmax(0,1fr) 220px;gap:16px;align-items:start}
.stage .f{max-height:760px;overflow:hidden;border-radius:12px;border:1px solid var(--n200)}
.stage img{display:block;width:100%}
.rail h2{font-size:16px;margin-top:22px}.rail h2:first-child{margin-top:0}
.row{display:flex;align-items:center;gap:10px;padding:9px 0;border-top:1px solid var(--n200);font-size:14px}
.row i{width:22px;height:22px;border-radius:6px;border:1px solid rgba(0,0,0,.12);flex:none}
.row b{font-weight:650;overflow-wrap:normal;word-break:normal}.row em{font-style:normal;color:var(--ink2);font-size:13px;margin-left:auto;white-space:nowrap}
.row a{color:var(--p);font-weight:600;font-size:13px;white-space:nowrap}
.nav{display:flex;gap:8px;margin-left:auto}
.strip{display:grid;grid-template-columns:repeat(` + Math.max(same.length, 1) + `,minmax(0,1fr));gap:12px;margin-top:14px}
.strip .c{aspect-ratio:390/560;overflow:hidden;border-radius:10px;border:1px solid var(--n200)}.strip img{display:block;width:100%}.strip b{display:block;font-size:13px;font-weight:650;margin-top:6px}
`,
  header('archive') + '<div class="wrap"><div class="crumb"><span>아카이브</span>›<span>' + esc(focus.name) + ' DESIGN.md</span>›<span>화면</span>›<b>' + esc(scr.title) + '</b><div class="nav"><span class="btn o" style="height:32px;padding:0 12px;font-size:14px">← ' + esc(focus.screens[idx - 1]?.title ?? '') + '</span><span class="btn o" style="height:32px;padding:0 12px;font-size:14px">' + esc(focus.screens[idx + 1]?.title ?? '') + ' →</span></div></div>'
  + '<div class="lay"><div><div class="stage"><div class="f"><img src="' + esc(img(focus, key, 1440, true)) + '" alt=""></div><div class="f"><img src="' + esc(img(focus, key, 390, true)) + '" alt=""></div></div>'
  + '<h2 style="margin-top:36px">다른 서비스의 같은 화면 <span class="sub" style="font-weight:500">' + esc(scr.type) + ' · ' + same.length + '곳</span></h2><div class="strip">' + same.map(({ s, r }) => '<a><div class="c"><img loading="lazy" src="' + esc(img(s, r.key, 390)) + '" alt=""></div><b>' + esc(s.name) + '</b></a>').join('') + '</div></div>'
  + '<div class="rail"><div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px"><span class="chip">' + esc(scr.type) + '</span><span class="chip">웹 1440 · 390</span><span class="chip">' + esc(focus.shot.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')) + '</span></div>'
  + '<h2>이 화면에 그려진 DESIGN.md 값</h2><p class="sub" style="font-size:13px;margin:4px 0 8px">정확히 같은 값만 셉니다. 값을 누르면 DESIGN.md의 그 줄로 갑니다.</p>'
  + onScreen.colors.map((c) => '<div class="row"><i style="background:' + esc(c.value) + '"></i><b>' + esc(c.token) + '</b><em>' + esc(c.value) + '</em><a>DESIGN.md →</a></div>').join('')
  + (onScreen.comps.length ? '<h2>종류와 값이 모두 같은 컴포넌트</h2>' + onScreen.comps.map((c) => '<div class="row"><b>' + esc(c.component) + '</b><em>' + esc((c.compared ?? []).join(' · ')) + '</em><a>DESIGN.md →</a></div>').join('') : '')
  + (onScreen.sizes.length ? '<h2>글자 크기</h2>' + onScreen.sizes.map((c) => '<div class="row"><b>' + esc(c.token) + '</b><em>' + esc(c.value) + '</em></div>').join('') : '')
  + (onScreen.radii.length ? '<h2>모서리</h2>' + onScreen.radii.map((c) => '<div class="row"><b>' + esc(c.token) + '</b><em>' + esc(c.value) + '</em></div>').join('') : '')
  + '<div style="margin-top:24px;display:flex;gap:8px"><span class="btn p">DESIGN.md 열기</span><span class="btn o">전체 화면 ' + focus.screens.length + '</span></div></div></div></div>',
  'C: /design-systems/' + focus.reference + '/screens/' + key + ' . 오른쪽이 화면에서 DESIGN.md로 가는 길이고, DESIGN.md 탭에서는 같은 값 옆에 「화면 N곳」이 붙어 이쪽으로 옵니다. 아래 줄은 다른 회사의 같은 화면으로 옆걸음하는 길입니다.');
fs.writeFileSync(path.join(OUT, 'c-screen.html'), C);

fs.writeFileSync(path.join(OUT, 'index.html'), page('화면 아카이브 자리 시안', 'main{max-width:900px;margin:0 auto;padding:48px 24px}li{margin:14px 0}li a{color:var(--p);font-weight:650}', '<main><h1>화면과 DESIGN.md를 오가는 구조 — 시안 3장</h1><p class="sub" style="margin-top:10px">세 장은 서로 다른 안이 아니라 한 구조의 세 층입니다: 한눈에(A) → 한 회사(B) → 한 화면(C). 어디부터 만들지가 정할 일입니다.</p><ol><li><a href="a-matrix.html">A · 한눈에</a> — ' + services.length + '곳 × 같은 화면 ' + COLUMNS.length + '종. 10곳을 가장 빨리 훑는 화면입니다.</li><li><a href="b-item-screens.html">B · 한 회사</a> — 상세 페이지에 「화면」 탭. DESIGN.md와 같은 페이지에서 오갑니다.</li><li><a href="c-screen.html">C · 한 화면</a> — 화면에 그려진 DESIGN.md 값, 다른 회사의 같은 화면.</li></ol></main>', ''));
console.log('mocks → ' + path.join(OUT, 'index.html') + ' (' + services.length + ' services, focus ' + focus.slug + ', screen ' + key + ')');
