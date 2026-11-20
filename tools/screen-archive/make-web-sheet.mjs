#!/usr/bin/env node
/**
 * Turn web walks (web-shoot.mjs output) into sheets a person can read, one per service, plus an index over them.
 *
 *   node tools/screen-archive/make-web-sheet.mjs <walk dir> [<walk dir> ...] [--out DIR]
 *
 * Default output: ~/Downloads/kr-screens/web/<slug>/index.html and ~/Downloads/kr-screens/web/index.html. Each screen
 * is shown at every width it was shot at, with its type and patterns (the fixed words of
 * tools/phone-recorder/taxonomy.json), its state (empty, error), the address it ended on, what covered the viewport,
 * and a link to the whole page. When link-tokens.mjs has written tokens.json into the walk, the sheet also shows
 * which values of the service's DESIGN.md were drawn on which screens, and links both ways: a screen lists the tokens
 * seen on it, a token lists its screens. Findings come from the route file ("findings": [..]). Images are JPEGs
 * made with ffmpeg.
 * The sheets hold other companies' screens: they stay on this machine (an output folder inside a git work tree is
 * refused) until the owner decides how screens are published.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const args = process.argv.slice(2);
const outFlag = args.indexOf('--out');
const OUT = path.resolve(outFlag >= 0 ? args[outFlag + 1] : path.join(os.homedir(), 'Downloads/kr-screens/web'));
const dirs = args.filter((a, i) => outFlag < 0 || (i !== outFlag && i !== outFlag + 1));
if (!dirs.length) { console.error('usage: make-web-sheet.mjs <walk dir> [<walk dir> ...] [--out DIR]'); process.exit(2); }
fs.mkdirSync(OUT, { recursive: true });
try { execFileSync('git', ['-C', OUT, 'rev-parse', '--is-inside-work-tree'], { stdio: 'pipe' }); console.error('refused: ' + OUT + ' is inside a git work tree'); process.exit(2); } catch { /* fine */ }

const taxonomy = JSON.parse(fs.readFileSync(path.join(REPO, 'tools/phone-recorder/taxonomy.json'), 'utf8'));
const fold = new Map(taxonomy.screens.flatMap((s) => [s.ko, ...(s.also ?? [])].map((w) => [w, s])));
const foldP = new Map(taxonomy.patterns.flatMap((s) => [s.ko, ...(s.also ?? [])].map((w) => [w, s])));
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const jpeg = (src, dst, w) => execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', src, '-vf', 'scale=' + w + ':-2', '-q:v', '4', dst]);
const PLATFORM = { both: '웹과 앱 둘 다', web: '웹 중심', mobile: '모바일 중심' };

const CSS = String.raw`
:root { color-scheme: light; --ink: #16181d; --sub: #5b616e; --line: #e4e6ea; --chip: #f1f2f4; --warn: #9a5b00; --warn-bg: #fff4dc; }
* { box-sizing: border-box; }
body { margin: 0; font: 15px/1.6 -apple-system, "Apple SD Gothic Neo", "Pretendard", sans-serif; color: var(--ink); background: #fff; word-break: keep-all; overflow-wrap: anywhere; }
main { max-width: 1280px; margin: 0 auto; padding: 40px 24px 80px; }
h1 { font-size: 28px; line-height: 1.3; margin: 0 0 8px; }
h2 { font-size: 19px; line-height: 1.4; margin: 0; }
p { margin: 0; }
a { color: inherit; }
.meta { color: var(--sub); font-size: 14px; }
.facts { display: flex; flex-wrap: wrap; gap: 8px; margin: 16px 0 0; padding: 0; list-style: none; }
.facts li, .chip { background: var(--chip); border-radius: 6px; padding: 2px 10px; font-size: 13px; }
.chip.warn { background: var(--warn-bg); color: var(--warn); }
.chip.sug { background: #fff; outline: 1px dashed var(--line); outline-offset: -1px; color: var(--sub); }
.toc { display: flex; flex-wrap: wrap; gap: 6px 14px; margin: 24px 0 0; padding: 16px 0; border-block: 1px solid var(--line); font-size: 14px; }
section { padding: 36px 0; border-bottom: 1px solid var(--line); }
.head { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 10px; }
.url { font: 12px/1.5 ui-monospace, Menlo, monospace; color: var(--sub); margin-top: 4px; }
.note { margin-top: 8px; max-width: 72ch; }
.shots { display: flex; gap: 24px; align-items: flex-start; margin-top: 18px; }
figure { margin: 0; min-width: 0; }
figure.d { flex: 1 1 0; } figure.m { flex: 0 0 260px; }
figure img { display: block; width: 100%; height: auto; border: 1px solid var(--line); border-radius: 8px; }
figcaption { font-size: 13px; color: var(--sub); margin-top: 6px; display: flex; flex-wrap: wrap; gap: 4px 10px; }
.tok { display: inline-flex; align-items: center; gap: 6px; background: #fff; border: 1px solid var(--line); border-radius: 6px; padding: 2px 8px 2px 4px; font-size: 12.5px; text-decoration: none; }
.tok b { width: 14px; height: 14px; border-radius: 4px; border: 1px solid rgba(0,0,0,.12); display: inline-block; }
.toks { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px; align-items: center; }
.toks > span.l { font-size: 12.5px; color: var(--sub); margin-right: 2px; }
table { border-collapse: collapse; width: 100%; margin-top: 12px; font-size: 14px; }
th, td { text-align: left; padding: 8px 12px 8px 0; border-bottom: 1px solid var(--line); vertical-align: top; }
th { font-weight: 600; color: var(--sub); font-size: 13px; }
td.n { font-variant-numeric: tabular-nums; white-space: nowrap; }
.panel { background: #fafafb; border: 1px solid var(--line); border-radius: 10px; padding: 20px 22px; margin-top: 24px; }
.panel h2 { font-size: 17px; }
.panel ul { margin: 10px 0 0; padding-left: 20px; max-width: 80ch; }
.cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-top: 28px; }
.card { border: 1px solid var(--line); border-radius: 10px; overflow: hidden; text-decoration: none; display: block; }
.card img { display: block; width: 100%; aspect-ratio: 16 / 10; object-fit: cover; object-position: top; border-bottom: 1px solid var(--line); }
.card div { padding: 12px 14px 14px; }
footer { margin-top: 32px; color: var(--sub); font-size: 13px; max-width: 80ch; }
@media (max-width: 720px) { main { padding: 24px 16px 56px; } .shots { flex-direction: column; } figure.m { flex-basis: auto; width: min(260px, 100%); } h1 { font-size: 23px; } }
`;

const page = (title, body) => '<!doctype html>\n<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>' + esc(title) + '</title><style>' + CSS + '</style></head><body><main>' + body + '</main></body></html>\n';
const RIGHTS = '화면은 각 회사의 것이고, oh-my-design은 이 회사들과 제휴하지 않았습니다. 이 시트는 이 Mac에만 있습니다(공개 보류). 로그아웃 상태로 누구에게나 같은 화면만 찍었고, 구매·결제·동의·팔로우는 누르지 않았습니다.';

// What the walk's own records say about the service, with no judgement added: where a phone is sent, which screens ask
// for an account, what covers the screen on a first visit, what refused the browser. Hand-written findings come from
// the route file and are shown separately.
function factsPanel(walk, tokens) {
  const host = (u) => { try { return new URL(u).host; } catch { return null; } };
  const recs = walk.records.filter((r) => r.final);
  const wide = recs.filter((r) => r.width >= 600), narrow = recs.filter((r) => r.width < 600);
  const hostsW = new Set(wide.map((r) => host(r.final))), hostsN = [...new Set(narrow.map((r) => host(r.final)))].filter((h) => h && !hostsW.has(h));
  const title = (r) => r.title;
  const uniq = (rows) => [...new Map(rows.map((r) => [r.key, r])).values()];
  const toLogin = uniq(recs.filter((r) => r.redirected && /login|sign.?in|auth|member/i.test(r.final) && r.type !== '로그인'));
  const blocked = uniq(walk.records.filter((r) => r.blocked));
  const popup = uniq(walk.records.filter((r) => r.type === '팝업'));
  const facts = [];
  if (hostsN.length) facts.push('휴대폰으로 들어가면 다른 주소로 보냅니다: ' + hostsN.join(', ') + '.');
  if (popup.length) facts.push('첫 방문에 뜨는 층: ' + popup.map(title).join(', ') + '.');
  if (toLogin.length) facts.push('로그아웃 상태에서 로그인 화면으로 넘어가는 곳: ' + toLogin.map(title).join(', ') + '.');
  if (blocked.length) facts.push('브라우저를 거절한 화면(우회하지 않음): ' + blocked.map((r) => r.title + ' HTTP ' + r.status).join(', ') + '.');
  if (tokens) {
    const top = tokens.unmatched.colors.filter((c) => !['#000000', '#ffffff'].includes(c.value))[0];
    if (top) facts.push('DESIGN.md에 없는 색 가운데 가장 여러 화면에 보인 것: ' + top.value + ' (' + top.screens.length + '개 화면, ' + top.hits + '곳). 다시 잴 때 볼 후보입니다.');
  }
  return facts;
}

// What of the service's DESIGN.md was drawn on these screens. Exact values only; the table goes both ways:
// each token names its screens (anchors on this sheet) and links to the reference's item page.
function tokenPanel(t, itemUrl, walk, keys) {
  const title = new Map(walk.records.map((r) => [r.key, r.title]));
  const scr = (list) => list.filter((k) => keys.includes(k)).slice(0, 6).map((k) => '<a href="#' + esc(k) + '">' + esc(title.get(k) ?? k) + '</a>').join(', ') + (list.length > 6 ? ' 외 ' + (list.length - 6) : '');
  const sw = (v) => (/^#[0-9a-f]{3,8}$/i.test(String(v)) ? '<b style="display:inline-block;width:14px;height:14px;border-radius:4px;border:1px solid rgba(0,0,0,.12);vertical-align:-2px;background:' + esc(v) + '"></b> ' : '');
  const rows = (list, name) => list.filter((x) => x.comparable).map((x) => '<tr><td>' + sw(x.value) + '<a href="' + esc(itemUrl) + '">' + esc(x[name]) + '</a></td><td class="n">' + esc(x.value ?? (x.compared ?? []).join(' + ')) + '</td><td class="n">' + (x.hits ? x.screens.length + '개 화면' : '<span style="color:var(--sub)">보이지 않음</span>') + '</td><td>' + (x.hits ? scr(x.screens) : '') + '</td></tr>').join('');
  const s = t.summary;
  const un = t.unmatched.colors.slice(0, 8).map((u) => '<span class="tok">' + sw(u.value) + esc(u.value) + ' <span style="color:var(--sub)">' + u.screens.length + '개 화면</span></span>').join(' ');
  return '<div class="panel"><h2>DESIGN.md와 대조</h2><p class="meta" style="margin-top:6px">' + esc(walk.name) + ' DESIGN.md의 값이 이 화면들에 같은 값으로 그려졌는지 본 것입니다(정확히 같은 값만). 색 ' + (s.colors.matchedBeyondBlackWhite ?? s.colors.matched) + '/' + (s.colors.comparableBeyondBlackWhite ?? s.colors.comparable) + '(검정·흰색 제외) · 모서리 ' + s.rounded.matched + '/' + s.rounded.comparable + ' · 글자 크기 ' + s.fontSizes.matched + '/' + s.fontSizes.comparable + ' · 컴포넌트 ' + s.components.matched + '/' + s.components.comparable + '. 보이지 않는 값이 틀린 값이라는 뜻은 아닙니다. 로그아웃 상태의 웹 화면만 본 것입니다.</p>'
    + '<table><thead><tr><th>색 토큰</th><th>값</th><th>보인 곳</th><th>화면</th></tr></thead><tbody>' + rows(t.colors, 'token') + '</tbody></table>'
    + (t.components.some((c) => c.comparable) ? '<p class="meta" style="margin-top:14px">컴포넌트는 종류가 같고 DESIGN.md가 적은 값(배경·글자색·모서리·높이·글자 크기)이 모두 같은 요소만 셉니다. 값이 셋 미만이면 비교하지 않습니다.</p><table><thead><tr><th>컴포넌트</th><th>비교한 값</th><th>보인 곳</th><th>화면</th></tr></thead><tbody>' + rows(t.components, 'component') + '</tbody></table>' : '')
    + (un ? '<p class="meta" style="margin-top:14px">DESIGN.md에 없는데 화면에 자주 보인 색(관찰일 뿐, 토큰이 아닙니다)</p><div class="toks">' + un + '</div>' : '') + '</div>';
}

const index = [];
for (const dir of dirs) {
  const walk = JSON.parse(fs.readFileSync(path.join(dir, 'walk.json'), 'utf8'));
  const out = path.join(OUT, walk.slug);
  fs.mkdirSync(path.join(out, 'img'), { recursive: true });
  const widths = [...new Set(walk.records.map((r) => r.width))].sort((a, b) => b - a);
  // The route file holds what a person added after looking: findings for the service, state and patterns per screen.
  let route = {}; try { route = JSON.parse(fs.readFileSync(path.join(REPO, walk.routeFile), 'utf8')); } catch { /* shot from a route outside the repository */ }
  const routeScreen = new Map((route.screens ?? []).map((s) => [s.key, s]));
  const tokens = fs.existsSync(path.join(dir, 'tokens.json')) ? JSON.parse(fs.readFileSync(path.join(dir, 'tokens.json'), 'utf8')) : null;
  const suggested = fs.existsSync(path.join(dir, 'patterns.json')) ? JSON.parse(fs.readFileSync(path.join(dir, 'patterns.json'), 'utf8')) : {};
  const itemUrl = walk.reference ? 'https://oh-my-design.kr/design-systems/' + walk.reference : null;
  const swatch = (v) => (/^#[0-9a-f]{3,8}$/i.test(String(v)) ? '<b style="background:' + esc(v) + '"></b>' : '');
  const tokChip = (t) => '<a class="tok" href="' + esc(itemUrl) + '" title="DESIGN.md의 ' + esc(t.token ?? t.component) + '">' + swatch(t.value) + esc(t.token ?? t.component) + (t.value ? ' <span style="color:var(--sub)">' + esc(t.value) + '</span>' : '') + '</a>';
  const tokensOn = (key) => { if (!tokens) return ''; const cs = tokens.colors.filter((t) => t.screens.includes(key)); const comps = tokens.components.filter((t) => t.screens.includes(key)); if (!cs.length && !comps.length) return ''; return '<div class="toks"><span class="l">DESIGN.md와 같은 값</span>' + cs.map(tokChip).join('') + comps.map((c) => tokChip({ component: c.component })).join('') + '</div>'; };
  const keys = [...new Set(walk.records.map((r) => r.key))];
  const unknown = new Set();
  const sections = [];
  let blocked = 0;
  for (const key of keys) {
    const recs = widths.map((w) => walk.records.find((r) => r.key === key && r.width === w)).filter(Boolean);
    const first = recs[0];
    const rs = routeScreen.get(key) ?? {};
    const state = first.state ?? rs.state ?? null;
    // confirmed patterns come from the route file; the rest are suggestions by rule (suggest-patterns.mjs), drawn dashed
    const confirmed = (first.patterns?.length ? first.patterns : rs.patterns ?? []).map((w) => foldP.get(w)?.ko ?? w);
    const patterns = [...confirmed.map((ko) => ({ ko, sure: true })), ...(suggested[key] ?? []).filter((p) => !confirmed.includes(p)).map((ko) => ({ ko, sure: false }))];
    const type = fold.get(first.type);
    if (!type) unknown.add(first.type);
    const figs = recs.map((r) => {
      const src = path.join(dir, String(r.width), key + '.png');
      if (!fs.existsSync(src)) return '<figure class="' + (r.width < 600 ? 'm' : 'd') + '"><figcaption><span class="chip warn">' + esc((r.errors ?? []).join(' / ') || '찍지 못함') + '</span></figcaption></figure>';
      const mobile = r.width < 600;
      const name = r.width + '-' + key + '.jpg';
      jpeg(src, path.join(out, 'img', name), mobile ? 520 : 1280);
      let full = '';
      const fullSrc = path.join(dir, String(r.width), key + '.full.png');
      if (fs.existsSync(fullSrc)) { const fn = r.width + '-' + key + '.full.jpg'; jpeg(fullSrc, path.join(out, 'img', fn), mobile ? 390 : 960); full = '<a href="img/' + fn + '">전체 페이지 (' + r.height + 'px)</a>'; }
      if (r.blocked) blocked++;
      const flags = [
        r.blocked ? '<span class="chip warn">막힘 · HTTP ' + r.status + '</span>' : '',
        r.missing && first.type !== '오류' ? '<span class="chip warn">주소 없음 · HTTP ' + r.status + '</span>' : '',
        (r.overlays ?? []).some((o) => o.position === 'fixed' && o.share >= 0.25 && o.chars != null && o.chars < 400) ? '<span class="chip warn">화면을 덮는 층 있음</span>' : '',
        (r.errors ?? []).length ? '<span class="chip warn">' + esc(r.errors.join(' / ')) + '</span>' : '',
      ].join('');
      return '<figure class="' + (mobile ? 'm' : 'd') + '"><img loading="lazy" src="img/' + name + '" alt="' + esc(walk.name + ' ' + first.title + ' ' + r.width + 'px') + '"><figcaption><span>' + r.viewport.width + '×' + r.viewport.height + '</span>' + full + flags + '</figcaption></figure>';
    }).join('');
    const final = first.final ?? first.requested ?? '';
    let shown = final; try { shown = decodeURI(final); } catch { /* keep as is */ }
    sections.push('<section id="' + esc(key) + '"><div class="head"><h2>' + esc(first.title) + '</h2><span class="chip">' + esc(type ? type.ko + ' · ' + type.en : first.type) + '</span>' + (state ? '<span class="chip">상태: ' + esc(state) + '</span>' : '') + patterns.map((p) => '<span class="chip' + (p.sure ? '' : ' sug') + '"' + (p.sure ? '' : ' title="규칙으로 찾은 제안"') + '>' + esc(p.ko) + '</span>').join('') + (first.redirected ? '<span class="chip">다른 주소로 넘어감</span>' : '') + '</div><p class="url">' + esc(shown) + '</p>' + (first.note ?? rs.note ? '<p class="note">' + esc(first.note ?? rs.note) + '</p>' : '') + tokensOn(key) + '<div class="shots">' + figs + '</div></section>');
  }
  const types = [...new Set(keys.map((k) => walk.records.find((r) => r.key === k).type))];
  const core = taxonomy.screens.filter((s) => s.core).map((s) => s.ko);
  const reached = core.filter((c) => types.some((t) => fold.get(t)?.ko === c));
  const day = walk.shot.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
  const body = '<p class="meta"><a href="../index.html">웹 화면 묶음</a></p><h1>' + esc(walk.name) + ' 웹 — 화면 ' + keys.length + '개</h1>'
    + '<p class="meta">' + esc(day) + '에 찍음 · ' + esc(walk.origin) + ' · ' + (walk.browser.startsWith('Chrome') ? '창을 연 Chrome' : '창 없는 Chromium') + ', 새 프로필, 로그아웃 상태</p>'
    + '<ul class="facts"><li>분류: ' + esc(PLATFORM[walk.platform] ?? walk.platform) + '</li><li>폭 ' + widths.join(' · ') + '</li><li>' + walk.records.length + '장' + (blocked ? ', 막힘 ' + blocked : '') + '</li><li>핵심 화면 ' + reached.length + '/' + core.length + ' (' + esc(reached.join(', ')) + ')</li>'
    + (walk.reference ? '<li><a href="https://oh-my-design.kr/design-systems/' + esc(walk.reference) + '">' + esc(walk.name) + ' DESIGN.md</a></li>' : '') + '</ul>'
    + (() => { const auto = factsPanel(walk, tokens); const hand = route.findings ?? []; return auto.length || hand.length ? '<div class="panel"><h2>발견</h2><ul>' + hand.map((f) => '<li>' + esc(f) + '</li>').join('') + auto.map((f) => '<li>' + esc(f) + ' <span class="meta">(기록에서 자동)</span></li>').join('') + '</ul></div>' : ''; })()
    + (tokens ? tokenPanel(tokens, itemUrl, walk, keys) : '')
    + '<nav class="toc">' + keys.map((k) => '<a href="#' + esc(k) + '">' + esc(walk.records.find((r) => r.key === k).title) + '</a>').join('') + '</nav>'
    + sections.join('') + '<footer><p>' + RIGHTS + '</p><p>경로 파일: ' + esc(walk.routeFile) + ' · 원본 PNG와 요소 목록: ' + esc(dir.replace(os.homedir(), '~')) + '</p></footer>';
  fs.writeFileSync(path.join(out, 'index.html'), page(walk.name + ' 웹 화면', body));
  if (tokens) fs.writeFileSync(path.join(out, 'tokens.json'), JSON.stringify(tokens, null, 1));
  fs.writeFileSync(path.join(out, 'screens.json'), JSON.stringify({ ...walk, findings: route.findings ?? [], facts: factsPanel(walk, tokens), records: walk.records.map(({ userAgent, ...r }) => ({ ...r, state: r.state ?? routeScreen.get(r.key)?.state ?? null, patterns: r.patterns?.length ? r.patterns : routeScreen.get(r.key)?.patterns ?? [], suggestedPatterns: suggested[r.key] ?? [] })) }, null, 1));
  index.push({ slug: walk.slug, name: walk.name, platform: walk.platform, day, screens: keys.length, shots: walk.records.length, cover: keys.includes('home') ? 'img/' + widths[0] + '-home.jpg' : null });
  for (const u of unknown) console.error('warning: ' + walk.slug + ': type "' + u + '" is not in taxonomy.json');
  console.log(walk.slug + ': ' + keys.length + ' screens, ' + walk.records.length + ' shots → ' + path.join(out, 'index.html'));
}
// The index lists every sheet folder that is there, not only the ones made in this run.
const all = fs.readdirSync(OUT, { withFileTypes: true }).filter((d) => d.isDirectory() && fs.existsSync(path.join(OUT, d.name, 'screens.json'))).map((d) => {
  const made = index.find((i) => i.slug === d.name);
  if (made) return made;
  const w = JSON.parse(fs.readFileSync(path.join(OUT, d.name, 'screens.json'), 'utf8'));
  const keys = [...new Set(w.records.map((r) => r.key))];
  return { slug: w.slug, name: w.name, platform: w.platform, day: w.shot.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3'), screens: keys.length, shots: w.records.length, cover: keys.includes('home') ? 'img/' + Math.max(...w.records.map((r) => r.width)) + '-home.jpg' : null };
});
fs.writeFileSync(path.join(OUT, 'index.html'), page('웹 화면 묶음', '<h1>웹 화면 묶음 — ' + all.length + '곳</h1><p class="meta">서비스마다 같은 화면을 1440과 390 폭으로 찍었습니다.</p><div class="cards">'
  + all.map((s) => '<a class="card" href="' + esc(s.slug) + '/index.html">' + (s.cover ? '<img src="' + esc(s.slug) + '/' + s.cover + '" alt="">' : '') + '<div><h2>' + esc(s.name) + '</h2><p class="meta">' + esc(PLATFORM[s.platform] ?? s.platform) + ' · 화면 ' + s.screens + '개 · ' + s.shots + '장 · ' + esc(s.day) + '</p></div></a>').join('')
  + '</div><footer><p>' + RIGHTS + '</p></footer>'));
console.log('index → ' + path.join(OUT, 'index.html'));
