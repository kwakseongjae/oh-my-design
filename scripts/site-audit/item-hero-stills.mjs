#!/usr/bin/env node
/**
 * Stills of the item page's first screen in several sizes, for the owner to choose a direction before any code
 * changes (CLAUDE.md: stills first). Each variant is the live page with a stylesheet laid over it, so everything
 * below the first screen is the real page.
 *
 *   node scripts/site-audit/item-hero-stills.mjs [--id toss] [--base https://oh-my-design.kr] [--out DIR]
 *
 * Writes <out>/<variant>-<en|ko>-<1440|390>.png, <out>/measures.json (h1 size, action height, where the DESIGN.md
 * body starts) and <out>/index.html. Default out: ~/Downloads/omd-design-system/item-hero/.
 * Invariants kept in every variant (AGENTS.md): one h1 "{Name} DESIGN.md", the #use group with Copy and Download.
 */
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const args = process.argv.slice(2);
const flag = (n) => (args.includes(n) ? args[args.indexOf(n) + 1] : null);
const ID = flag('--id') ?? 'toss';
// --check a,b,c [--widths 900,1024,...]: no stills page, only numbers for other references and widths (does a long
// name collide with the actions? does anything overflow?), with a still of each case kept under <out>/check/.
const CHECK = flag('--check')?.split(',');
const WIDTHS = (flag('--widths') ?? '1440,390').split(',').map(Number);
const BASE = (flag('--base') ?? 'https://oh-my-design.kr').replace(/\/$/, '');
const OUT = path.resolve(flag('--out') ?? path.join(os.homedir(), 'Downloads/omd-design-system/item-hero'));
fs.mkdirSync(OUT, { recursive: true });
function loadPlaywright() {
  const roots = [REPO];
  try { roots.push(path.resolve(execFileSync('git', ['-C', REPO, 'rev-parse', '--git-common-dir'], { encoding: 'utf8' }).trim(), '..')); } catch { /* no git */ }
  for (const r of roots) { try { return createRequire(path.join(r, 'web/package.json'))('playwright-core'); } catch { /* next */ } }
  console.error('playwright-core not found'); process.exit(2);
}
const { chromium } = loadPlaywright();

// Sizes come from one proposed control scale: 32 small, 40 default, 48 large. Type: 40 page title, 26 section.
const SMALL = String.raw`
.sq-ih-in{padding-top:16px;padding-bottom:36px}
.sq-ih-head{margin-top:20px;gap:14px}
.sq-ih-logo{height:48px;padding:8px 10px;border-radius:12px}
.sq-ih-logo img{height:30px;max-width:150px}
.sq-ih-logo.sq-logo-fav{padding:8px}.sq-ih-logo.sq-logo-fav img{width:30px}
.sq-ih h1{font-size:clamp(28px,2.8vw,40px);line-height:1.15;letter-spacing:-0.02em;font-weight:760}
.sq-ih-acts{margin-top:20px;gap:8px}
.sq-act{min-height:40px;padding:0 18px;font-size:15px;font-weight:650;gap:8px}
.sq-act svg{width:18px;height:18px}
.sq-share{height:40px;padding:0 14px}
.sq-crumb,.sq-ih-ext{min-height:40px}
.sq-ih-bar{min-height:40px}
@media(max-width:640px){.sq-act{min-height:44px;flex:1 1 0}.sq-ih-acts{margin-top:16px}.sq-ih-head{flex-direction:row;align-items:center;gap:10px;margin-top:12px}.sq-ih-logo{height:40px;padding:6px 8px;border-radius:10px}.sq-ih-logo img{height:26px;max-width:96px}.sq-ih-logo.sq-logo-fav{padding:6px}.sq-ih-logo.sq-logo-fav img{width:26px}}
`;
const ONE_ROW = SMALL + String.raw`
@media(min-width:900px){
  .sq-ih-in{display:grid;grid-template-columns:minmax(0,1fr) auto;column-gap:24px;align-items:center}
  .sq-ih-bar{grid-column:1 / -1}
  .sq-ih-head{grid-column:1}
  .sq-ih-acts{grid-column:2;margin-top:20px}
}
.sq-act-ink{background:var(--sq-paper);color:var(--sq-ink);box-shadow:inset 0 0 0 1px var(--sq-guide)}
.sq-act-ink:hover{background:var(--sq-cell)}
`;
const TABS = ONE_ROW + String.raw`
.sq-ih-in{padding-bottom:0}
.omd-mock-tabs{display:flex;gap:24px;margin-top:24px;border-bottom:1px solid var(--sq-guide-2);grid-column:1 / -1}
.omd-mock-tabs span{display:inline-flex;align-items:center;gap:6px;height:44px;font-size:15px;font-weight:650;color:var(--sq-ink-2);border-bottom:2px solid transparent;margin-bottom:-1px}
.omd-mock-tabs span[data-on]{color:var(--sq-ink);border-bottom-color:var(--sq-ink)}
.omd-mock-tabs i{font-style:normal;font-size:12px;font-weight:600;color:var(--sq-ink-2);background:var(--sq-cell);border-radius:999px;padding:1px 7px}
@media(max-width:1023px){.sq-panes-m{display:none!important}}
`;

const VARIANTS = [
  { key: 'now', name: { ko: '지금 (운영)', en: 'Now' }, css: '', note: '제목 66px, 버튼 높이 56px, 제목 아래 여백이 넓습니다.' },
  { key: 'a', name: { ko: 'A · 구조는 그대로, 크기만 줄임', en: 'A' }, css: SMALL, note: '제목 40px, 버튼 40px(폰 44px), 로고 48px. 배치는 지금과 같습니다. 바뀌는 것이 가장 적습니다.' },
  { key: 'b', name: { ko: 'B · 제목과 버튼을 한 줄에', en: 'B' }, css: ONE_ROW, note: 'A의 크기에, 데스크톱에서 버튼을 제목 오른쪽으로 올립니다. 둘째 버튼은 검은 채움 대신 테두리입니다. 본문이 가장 빨리 시작합니다.' },
  { key: 'c', name: { ko: 'C · 한 줄 + 탭(DESIGN.md / 화면)', en: 'C' }, css: TABS, tabs: true, note: 'B에 탭을 더합니다. 화면 아카이브가 들어올 자리입니다(탭의 「화면」은 그려 넣은 것이고 아직 없는 기능입니다).' },
];

const browser = await chromium.launch({ headless: true });
if (CHECK) {
  fs.mkdirSync(path.join(OUT, 'check'), { recursive: true });
  for (const id of CHECK) for (const [lang, p] of [['en', '/design-systems/' + id], ['ko', '/ko/design-systems/' + id]]) for (const width of WIDTHS) {
    const ctx = await browser.newContext({ viewport: { width, height: 900 }, isMobile: width < 600, hasTouch: width < 600 });
    for (const v of VARIANTS.filter((x) => x.css)) {
      const page = await ctx.newPage();
      const resp = await page.goto(BASE + p, { waitUntil: 'load', timeout: 45000 });
      if (resp?.status() !== 200) { await page.close(); continue; }   // no Korean page for this reference
      await page.waitForTimeout(700);
      await page.addStyleTag({ content: v.css });
      await page.waitForTimeout(250);
      const m = await page.evaluate(() => {
        const h1 = document.querySelector('.sq-ih h1'), acts = document.querySelector('.sq-ih-acts');
        const a = h1.getBoundingClientRect(), b = acts.getBoundingClientRect(), cs = getComputedStyle(h1);
        const hit = !(a.right <= b.left || b.right <= a.left || a.bottom <= b.top || b.bottom <= a.top);
        const btn = acts.querySelector('.sq-act').getBoundingClientRect();
        return { h1: h1.innerText, lines: Math.round(a.height / parseFloat(cs.lineHeight)), collide: hit, actionsWrap: b.height > btn.height + 6, heroBottom: Math.round(document.querySelector('.sq-ih').getBoundingClientRect().bottom), overflowX: document.documentElement.scrollWidth - document.documentElement.clientWidth };
      });
      const flagged = m.collide || m.actionsWrap || m.overflowX > 0 || m.lines > 2;
      console.log([v.key, id.padEnd(18), lang, String(width).padStart(4), 'lines ' + m.lines, m.collide ? 'COLLIDE' : '', m.actionsWrap ? 'ACTIONS-WRAP' : '', m.overflowX ? 'OVERFLOW ' + m.overflowX : '', 'hero ' + m.heroBottom, JSON.stringify(m.h1)].join('  '));
      if (flagged || (v.key === 'b' && (width === 1024 || width === 900))) await page.screenshot({ path: path.join(OUT, 'check', [v.key, id, lang, width].join('-') + '.png') });
      await page.close();
    }
    await ctx.close();
  }
  await browser.close();
  process.exit(0);
}
const measures = {};
for (const [lang, p] of [['en', '/design-systems/' + ID], ['ko', '/ko/design-systems/' + ID]]) {
  for (const width of [1440, 390]) {
    const ctx = await browser.newContext({ viewport: { width, height: width === 1440 ? 900 : 844 }, isMobile: width === 390, hasTouch: width === 390, deviceScaleFactor: width === 390 ? 2 : 1 });
    for (const v of VARIANTS) {
      const page = await ctx.newPage();
      await page.goto(BASE + p, { waitUntil: 'load', timeout: 45000 });
      await page.waitForTimeout(900);
      if (v.css) await page.addStyleTag({ content: v.css });
      if (v.tabs) await page.evaluate((ko) => {
        const t = document.createElement('div'); t.className = 'omd-mock-tabs';
        const narrow = innerWidth < 1024;   // phones already have Preview / DESIGN.md tabs: Screens joins them
        t.innerHTML = (narrow ? '<span data-on>' + (ko ? '미리보기' : 'Preview') + '</span><span>DESIGN.md</span>' : '<span data-on>DESIGN.md</span>') + '<span>' + (ko ? '화면' : 'Screens') + ' <i>12</i></span>';
        document.querySelector('.sq-ih-in').appendChild(t);
      }, lang === 'ko');
      await page.waitForTimeout(300);
      const m = await page.evaluate(() => {
        const r = (s) => { const e = document.querySelector(s); return e ? e.getBoundingClientRect() : null; };
        const h1 = document.querySelector('.sq-ih h1'); const act = r('.sq-act'); const body = r('.sq-item-body') ?? r('.sq-panes-m');
        return { h1: getComputedStyle(h1).fontSize, action: act ? Math.round(act.height) : null, heroBottom: Math.round(r('.sq-ih').bottom), bodyTop: body ? Math.round(body.top) : null, overflowX: document.documentElement.scrollWidth - document.documentElement.clientWidth };
      });
      const name = v.key + '-' + lang + '-' + width;
      measures[name] = m;
      await page.screenshot({ path: path.join(OUT, name + '.png') });
      console.log(name.padEnd(16), JSON.stringify(m));
      await page.close();
    }
    await ctx.close();
  }
}
await browser.close();
fs.writeFileSync(path.join(OUT, 'measures.json'), JSON.stringify({ id: ID, base: BASE, measures }, null, 1));

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const row = (v) => '<section><h2>' + esc(v.name.ko) + '</h2><p>' + esc(v.note) + '</p><p class="m">제목 ' + measures[v.key + '-ko-1440'].h1 + ' · 버튼 높이 ' + measures[v.key + '-ko-1440'].action + 'px(폰 ' + measures[v.key + '-ko-390'].action + 'px) · 첫 화면에서 머리가 끝나는 곳 ' + measures[v.key + '-ko-1440'].heroBottom + 'px(폰 ' + measures[v.key + '-ko-390'].heroBottom + 'px)</p>'
  + '<div class="g"><figure class="d"><img src="' + v.key + '-ko-1440.png" alt=""><figcaption>한국어 · 1440</figcaption></figure><figure class="m2"><img src="' + v.key + '-ko-390.png" alt=""><figcaption>한국어 · 390</figcaption></figure><figure class="m2"><img src="' + v.key + '-en-390.png" alt=""><figcaption>영어 · 390</figcaption></figure></div></section>';
fs.writeFileSync(path.join(OUT, 'index.html'), '<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>상세 페이지 머리 시안</title><style>body{margin:0;font:15px/1.6 -apple-system,"Apple SD Gothic Neo",sans-serif;color:#13131a;word-break:keep-all}main{max-width:1320px;margin:0 auto;padding:40px 24px 80px}h1{font-size:28px;line-height:1.3;margin:0 0 8px}h2{font-size:20px;margin:0 0 4px}p{margin:0;max-width:76ch}.m{color:#5a5a63;font-size:14px;margin-top:4px}section{padding:36px 0;border-top:1px solid #e5e6eb}.g{display:flex;gap:20px;align-items:flex-start;margin-top:16px}figure{margin:0}.d{flex:1 1 0;min-width:0}.m2{flex:0 0 230px}img{display:block;width:100%;border:1px solid #e5e6eb;border-radius:8px}figcaption{font-size:13px;color:#5a5a63;margin-top:6px}@media(max-width:800px){.g{flex-direction:column}.m2{flex-basis:auto;width:230px}}</style></head><body><main><h1>상세 페이지 머리 시안 — ' + esc(ID) + '</h1><p>운영 페이지에 스타일만 덧씌워 찍은 정지 시안입니다. 코드는 아직 바꾸지 않았습니다. 세 안 모두 h1 「{이름} DESIGN.md」와 복사·내려받기 두 버튼은 그대로 둡니다.</p>' + VARIANTS.map(row).join('') + '</main></body></html>\n');
console.log('→ ' + path.join(OUT, 'index.html'));
