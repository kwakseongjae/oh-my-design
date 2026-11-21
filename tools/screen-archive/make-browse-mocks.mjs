/**
 * Stills for the second round of the screens gallery and the landing section (owner 2026-11-22: the shelves page and
 * the landing strip were rejected after a preview; "누르면 들어가서 상세로 보는 형태", country as a filter, a real
 * landing section). Each still is drawn inside the running site, so the header, fonts and tokens are the site's own:
 * the script replaces <main> of /ko/screens, or inserts a section into /ko, and takes the picture. Nothing here is
 * site code, and the stills hold other companies' screens: keep the output out of the repository.
 *
 *   cd web && OMD_SCREENS_MANIFEST=<manifest-local.json> OMD_SCREENS_DIR=~/Downloads/kr-screens/web npx next dev -p 3369
 *   node tools/screen-archive/make-browse-mocks.mjs <manifest-local.json> <out dir> [a1,a2,b1,la,lb]
 *
 * manifest-local.json: web/scripts/publish-screens.mjs --dry-run --base /screens-local --out <file>.
 * a1 the screen grid, a2 the screen page, b1 the service grid, la the landing wall, lb the landing split.
 */
import { createRequire } from 'node:module';
import fs from 'node:fs';
const { chromium } = createRequire(new URL('../../web/package.json', import.meta.url))('playwright-core');
const [,, manifestPath, out, only] = process.argv;
const man = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const NAME = { '29cm': '29CM', class101: 'CLASS101', inflearn: '인프런', jobplanet: '잡플래닛', karrot: '당근', kurly: '컬리', musinsa: '무신사', ohouse: '오늘의집', oliveyoung: '올리브영', wanted: '원티드', yanolja: 'NOL' };
const DOM = { '29cm': '29cm.co.kr', class101: 'class101.net', inflearn: 'inflearn.com', jobplanet: 'jobplanet.co.kr', karrot: 'daangn.com', kurly: 'kurly.com', musinsa: 'musinsa.com', ohouse: 'ohou.se', oliveyoung: 'oliveyoung.co.kr', wanted: 'wanted.co.kr', yanolja: 'yanolja.com' };
const CAT = { '29cm': '쇼핑', class101: '교육', inflearn: '교육', jobplanet: '채용', karrot: '중고거래', kurly: '쇼핑', musinsa: '쇼핑', ohouse: '쇼핑', oliveyoung: '쇼핑', wanted: '채용', yanolja: '여행' };
const logo = (s) => 'https://www.google.com/s2/favicons?domain=' + DOM[s] + '&sz=64';
const img = (s, w, k) => '/screens-local/' + s + '/' + w + '-' + k + '.jpg';
const recs = man.services.flatMap((sv) => sv.records.map((r) => ({ ...r, slug: sv.slug })));
const TYPES = ['홈', '검색 결과', '목록', '상세', '로그인', '장바구니', '고객센터', '오류'];
const phone = recs.filter((r) => r.width === 390);
const byType = (t) => phone.filter((r) => r.type === t);
const ordered = [...TYPES.flatMap((t) => byType(t)), ...phone.filter((r) => !TYPES.includes(r.type))];
const count = (t) => byType(t).length;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const tile = (r, w = 390) => '<li class="m-tile' + (w > 600 ? ' m-wide' : '') + '"><a class="m-shot" href="#"><img src="' + img(r.slug, w, r.key) + '" alt=""></a><div class="m-cap"><img class="m-logo" src="' + logo(r.slug) + '" alt=""><b>' + esc(NAME[r.slug]) + '</b><span>' + esc(r.title === r.type ? r.type : r.type) + '</span></div></li>';
const CSS = String.raw`
.m-top{padding:56px 0 0}
.m-desc{margin:14px 0 0;max-width:640px;font-size:18px;line-height:1.6;color:var(--sq-ink-2)}
.m-bar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px 24px;margin:36px 0 0}
.m-filters{display:flex;flex-wrap:wrap;gap:8px}
.m-f{display:inline-flex;align-items:center;gap:8px;height:44px;padding:0 14px 0 16px;border-radius:var(--sq-r-ctl);background:var(--sq-paper);box-shadow:inset 0 0 0 1px var(--sq-guide);font:inherit;font-size:15px;color:var(--sq-ink-2)}
.m-f b{font-weight:650;color:var(--sq-ink)}
.m-f svg{width:16px;height:16px;color:var(--sq-icon)}
.m-count{font-size:15px;color:var(--sq-ink-2);font-variant-numeric:tabular-nums}
.m-types{display:flex;gap:28px;margin:28px 0 0;border-bottom:1px solid var(--sq-guide-2);overflow:hidden;white-space:nowrap}
.m-types a{padding:0 0 14px;font-size:16px;font-weight:600;color:var(--sq-ink-2);text-decoration:none;border-bottom:2px solid transparent;margin-bottom:-1px}
.m-types a small{margin-left:6px;font-size:14px;font-weight:500;color:var(--sq-n400);font-variant-numeric:tabular-nums}
.m-types a[aria-current]{color:var(--sq-ink);border-color:var(--sq-ink)}
.m-grid{list-style:none;margin:32px 0 0;padding:0;display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:36px 20px}
.m-grid.m-web{grid-template-columns:repeat(3,minmax(0,1fr));gap:40px 24px}
.m-shot{display:block;border-radius:var(--sq-r-card);overflow:hidden;background:var(--sq-cell);box-shadow:inset 0 0 0 1px var(--sq-guide-2);aspect-ratio:390/844}
.m-wide .m-shot{aspect-ratio:1440/900}
.m-shot img{display:block;width:100%;height:100%;object-fit:cover;object-position:top}
.m-cap{display:flex;align-items:center;gap:8px;margin-top:12px;min-width:0}
.m-logo{width:20px;height:20px;border-radius:5px;flex:none}
.m-cap b{font-size:15px;font-weight:650;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.m-cap span{margin-left:auto;font-size:14px;color:var(--sq-ink-2);white-space:nowrap}
.m-more{margin:48px 0 96px;text-align:center;font-size:15px;color:var(--sq-ink-2)}
.m-crumb{padding:32px 0 0;font-size:15px;color:var(--sq-ink-2)}
.m-crumb b{color:var(--sq-ink);font-weight:600}
.m-detail{display:grid;grid-template-columns:minmax(0,1fr) 360px;gap:48px;align-items:start;margin:24px 0 0}
.m-stage{display:flex;justify-content:center;padding:40px;border-radius:var(--sq-r-panel);background:var(--sq-band);box-shadow:inset 0 0 0 1px var(--sq-guide-2)}
.m-stage img{display:block;width:390px;max-width:100%;border-radius:var(--sq-r-card);box-shadow:var(--sq-shadow-panel)}
.m-stage.m-wide img{width:100%}
.m-side{position:sticky;top:100px}
.m-who{display:flex;align-items:center;gap:10px;font-size:16px;font-weight:650}
.m-who img{width:28px;height:28px;border-radius:7px}
.m-side h1{margin:14px 0 0;font-family:var(--sq-f-ko);font-size:34px;font-weight:760;line-height:1.25;letter-spacing:-.02em}
.m-meta{margin:24px 0 0;padding:0;display:grid;gap:0;font-size:15px}
.m-meta div{display:flex;justify-content:space-between;gap:16px;padding:12px 0;border-top:1px solid var(--sq-guide-2)}
.m-meta dt{color:var(--sq-ink-2)} .m-meta dd{margin:0;font-weight:600;text-align:right}
.m-note{margin:16px 0 0;font-size:14px;line-height:1.5;color:var(--sq-ink-2)}
.m-acts{display:grid;gap:10px;margin:28px 0 0}
.m-btn{display:flex;align-items:center;justify-content:center;gap:8px;height:48px;border-radius:var(--sq-r-pill);font-size:16px;font-weight:650;text-decoration:none}
.m-btn.p{background:var(--sq-primary);color:var(--sq-on-primary)} .m-btn.s{background:var(--sq-paper);color:var(--sq-ink);box-shadow:inset 0 0 0 1px var(--sq-guide)}
.m-seg{display:inline-flex;gap:4px;padding:4px;border-radius:var(--sq-r-pill);background:var(--sq-cell);margin:0 0 20px}
.m-seg span{padding:8px 16px;border-radius:var(--sq-r-pill);font-size:14px;font-weight:600;color:var(--sq-ink-2)} .m-seg span.on{background:var(--sq-paper);color:var(--sq-ink);box-shadow:0 1px 2px #14143c14}
.m-pn{display:flex;justify-content:space-between;margin:20px 0 0;font-size:15px;font-weight:600;color:var(--sq-ink-2)}
.m-row{margin:88px 0 0} .m-row h2{font-family:var(--sq-f-ko);font-size:24px;font-weight:740;letter-spacing:-.01em} .m-row .m-grid{margin-top:20px}
.m-rights{margin:88px 0 64px;padding:24px 0 0;border-top:1px solid var(--sq-guide-2);font-size:14px;line-height:1.7;color:var(--sq-ink-2)}
.m-svc{list-style:none;margin:32px 0 0;padding:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:40px 24px}
.m-svc-shot{display:flex;justify-content:center;gap:14px;padding:28px 28px 0;height:300px;overflow:hidden;border-radius:var(--sq-r-card);background:var(--sq-band);box-shadow:inset 0 0 0 1px var(--sq-guide-2)}
.m-svc-shot img{width:31%;align-self:flex-start;border-radius:12px 12px 0 0;box-shadow:var(--sq-shadow-panel)}
.m-svc-cap{display:flex;align-items:center;gap:10px;margin-top:14px} .m-svc-cap img{width:28px;height:28px;border-radius:7px} .m-svc-cap b{font-size:17px;font-weight:650} .m-svc-cap span{margin-left:auto;font-size:14px;color:var(--sq-ink-2)}
/* landing */
.m-land{padding:120px 0;overflow:hidden}
.m-land h2{font-family:var(--sq-f-ko);font-size:40px;font-weight:740;line-height:1.2;letter-spacing:-.02em}
.m-land .sq-intro{margin-top:14px;max-width:620px}
.m-wall{margin:56px 0 0;display:grid;gap:20px;-webkit-mask-image:linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent);mask-image:linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent)}
.m-wall-row{display:flex;gap:20px;justify-content:center} .m-wall-row:nth-child(2){transform:translateX(-118px)}
.m-wall-row a{flex:none;width:216px;height:300px;border-radius:var(--sq-r-card);overflow:hidden;background:var(--sq-cell);box-shadow:inset 0 0 0 1px var(--sq-guide-2)}
.m-wall-row a.w{width:452px} .m-wall-row img{display:block;width:100%;height:100%;object-fit:cover;object-position:top}
.m-land-foot{display:flex;flex-wrap:wrap;align-items:center;gap:16px 28px;margin:48px 0 0}
.m-land-foot .sq-sc-cta{margin:0}
.m-links{display:flex;flex-wrap:wrap;gap:8px 22px;font-size:16px;font-weight:600;color:var(--sq-ink-2)} .m-links small{margin-left:5px;font-weight:500;color:var(--sq-n400)}
.m-split{display:grid;grid-template-columns:400px minmax(0,1fr);gap:72px;align-items:center}
.m-kinds{margin:36px 0 0;padding:0;list-style:none;border-top:1px solid var(--sq-guide-2)} .m-kinds li{display:flex;justify-content:space-between;padding:15px 2px;border-bottom:1px solid var(--sq-guide-2);font-size:17px;font-weight:600} .m-kinds span{color:var(--sq-ink-2);font-weight:500;font-variant-numeric:tabular-nums}
.m-bento{position:relative;padding:0 0 56px 0}
.m-bento .big{display:block;width:100%;aspect-ratio:1440/900;border-radius:var(--sq-r-card);overflow:hidden;box-shadow:inset 0 0 0 1px var(--sq-guide-2),var(--sq-shadow-panel);background:var(--sq-cell)} .m-bento .big img{width:100%;height:100%;object-fit:cover;object-position:top}
.m-bento .ph{position:absolute;bottom:0;width:188px;aspect-ratio:390/760;border-radius:22px;overflow:hidden;background:var(--sq-paper);box-shadow:0 0 0 1px var(--sq-guide-2),0 24px 48px -20px #281e7852} .m-bento .ph img{width:100%;height:100%;object-fit:cover;object-position:top}
.m-bento .ph.a{right:36px} .m-bento .ph.b{right:248px;bottom:-24px}
.m-names{margin:28px 0 0;font-size:15px;color:var(--sq-ink-2)}
@media (max-width:900px){.m-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:28px 12px}.m-detail{grid-template-columns:minmax(0,1fr);gap:28px}.m-stage{padding:16px}.m-side{position:static}.m-top{padding-top:32px}.m-desc{font-size:16px}.m-types{gap:20px}.m-bar{margin-top:24px}.m-f{height:44px;padding:0 12px}.m-cap span{display:none}.m-land{padding:72px 0}.m-land h2{font-size:30px}.m-wall-row a{width:150px;height:210px}.m-wall-row a.w{display:none}.m-wall-row:nth-child(2){transform:translateX(-80px)}.m-split{grid-template-columns:minmax(0,1fr);gap:40px}.m-bento .ph{width:120px}.m-bento .ph.b{right:150px}.m-row{margin-top:56px}}
`;
const chev = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 6l4 4 4-4"/></svg>';
const filters = (device) => '<div class="m-bar"><div class="m-filters"><span class="m-f">나라 <b>한국</b>' + chev + '</span><span class="m-f">기기 <b>' + device + '</b>' + chev + '</span><span class="m-f">분야 <b>전체</b>' + chev + '</span></div><span class="m-count">화면 ' + new Set(recs.map((r) => r.slug + '/' + r.key)).size + '개 · 서비스 ' + man.services.length + '곳</span></div>';
const typeTabs = (cur) => '<nav class="m-types"><a href="#"' + (cur ? '' : ' aria-current="page"') + '>전체</a>' + TYPES.filter((t) => count(t)).map((t) => '<a href="#"' + (cur === t ? ' aria-current="page"' : '') + '>' + t + '<small>' + count(t) + '</small></a>').join('') + '</nav>';
const head = '<div class="m-top"><h1 class="sq-page-title">화면</h1><p class="m-desc">실제 서비스의 화면을 종류별로 모았습니다. 화면을 누르면 크게 볼 수 있고, 그 서비스의 DESIGN.md로 이어집니다.</p></div>';
const rights = '<div class="m-rights">화면의 권리는 각 회사에 있습니다. 모두 로그아웃 상태로 2026년 11월 21일~22일에 찍었습니다.<br>화면을 내려 달라는 요청은 <u>GitHub 요청 양식</u>으로 받습니다.</div>';
const A1 = head + filters('폰') + typeTabs(null) + '<ul class="m-grid">' + ordered.slice(0, 18).map((r) => tile(r)).join('') + '</ul><p class="m-more">아래로 계속 이어집니다</p>';
const A1web = head + filters('웹') + typeTabs('홈') + '<ul class="m-grid m-web">' + recs.filter((r) => r.width === 1440 && r.type === '홈').slice(0, 6).map((r) => tile(r, 1440)).join('') + '</ul>';
const k = recs.find((r) => r.slug === 'karrot' && r.key === 'home' && r.width === 390);
const sameSvc = phone.filter((r) => r.slug === 'karrot' && r.key !== 'home').slice(0, 6);
const sameType = byType('홈').filter((r) => r.slug !== 'karrot').slice(0, 6);
const A2 = '<p class="m-crumb">화면 &nbsp;/&nbsp; 당근 &nbsp;/&nbsp; <b>홈</b></p><div class="m-detail"><div><div class="m-seg"><span class="on">폰 390</span><span>웹 1440</span></div><div class="m-stage"><img src="' + img('karrot', 390, 'home') + '" alt=""></div></div><aside class="m-side"><div class="m-who"><img src="' + logo('karrot') + '" alt="">당근</div><h1>홈</h1><dl class="m-meta"><div><dt>종류</dt><dd>홈</dd></div><div><dt>나라</dt><dd>한국</dd></div><div><dt>찍은 날</dt><dd>2026년 11월 22일</dd></div><div><dt>상태</dt><dd>로그아웃</dd></div></dl><p class="m-note">닉네임과 올린 사진을 가렸습니다</p><div class="m-acts"><a class="m-btn p" href="#">당근 DESIGN.md 보기</a><a class="m-btn s" href="#">당근 화면 모두 보기</a></div><div class="m-pn"><span>← 이전 화면</span><span>다음 화면 →</span></div></aside></div><section class="m-row"><h2>당근의 다른 화면</h2><ul class="m-grid">' + sameSvc.map((r) => tile(r)).join('') + '</ul></section><section class="m-row"><h2>다른 서비스의 홈 화면</h2><ul class="m-grid">' + sameType.map((r) => tile(r)).join('') + '</ul></section>' + rights;
const pick3 = (s) => { const mine = phone.filter((r) => r.slug === s); const want = ['홈', '목록', '상세', '검색 결과', '로그인']; const outp = []; for (const t of want) { const r = mine.find((x) => x.type === t && !outp.includes(x)); if (r) outp.push(r); if (outp.length === 3) break; } return outp; };
const B1 = head.replace('종류별로 모았습니다. 화면을 누르면 크게 볼 수 있고, 그 서비스의 DESIGN.md로 이어집니다.', '서비스별로 모았습니다. 서비스를 누르면 그 서비스의 화면과 DESIGN.md를 함께 봅니다.') + filters('폰') + '<ul class="m-svc">' + man.services.slice(0, 9).map((sv) => '<li><a class="m-svc-shot" href="#">' + pick3(sv.slug).map((r) => '<img src="' + img(r.slug, 390, r.key) + '" alt="">').join('') + '</a><div class="m-svc-cap"><img src="' + logo(sv.slug) + '" alt=""><b>' + NAME[sv.slug] + '</b><span>' + CAT[sv.slug] + ' · 화면 ' + new Set(sv.records.map((r) => r.key)).size + '개</span></div></li>').join('') + '</ul>';
const wallA = [['29cm', 390, 'home'], ['karrot', 390, 'buy-sell'], ['kurly', 1440, 'home', 'w'], ['oliveyoung', 390, 'home'], ['wanted', 390, 'home'], ['yanolja', 390, 'home'], ['musinsa', 390, 'home']];
const wallB = [['ohouse', 390, 'store'], ['inflearn', 390, 'home'], ['class101', 390, 'home'], ['29cm', 1440, 'home', 'w'], ['kurly', 390, 'home'], ['jobplanet', 390, 'home'], ['oliveyoung', 390, 'search-results'], ['wanted', 390, 'login']];
const has = (a) => recs.some((r) => r.slug === a[0] && r.width === a[1] && r.key === a[2]);
const wallRow = (arr) => '<div class="m-wall-row">' + arr.filter(has).map((a) => '<a href="#" class="' + (a[3] || '') + '"><img src="' + img(a[0], a[1], a[2]) + '" alt=""></a>').join('') + '</div>';
const total = new Set(recs.map((r) => r.slug + '/' + r.key)).size;
const links = '<div class="m-links">' + TYPES.filter((t) => count(t)).slice(0, 6).map((t) => '<span>' + t + '<small>' + count(t) + '</small></span>').join('') + '</div>';
const LA = '<section class="m-land"><div class="sq-wrap"><h2>실제 화면도 함께 봅니다</h2><p class="sq-intro">서비스 ' + man.services.length + '곳의 화면 ' + total + '개를 종류별로 모았습니다. 화면에서 그 회사의 DESIGN.md로 바로 이어집니다.</p></div><div class="m-wall">' + wallRow(wallA) + wallRow(wallB) + '</div><div class="sq-wrap"><div class="m-land-foot"><a class="sq-sc-cta" href="#">화면 보기</a>' + links + '</div></div></section>';
const LB = '<section class="m-land"><div class="sq-wrap"><div class="m-split"><div><h2>실제 화면도<br>함께 봅니다</h2><p class="sq-intro">서비스 ' + man.services.length + '곳의 화면 ' + total + '개를 종류별로 모았습니다. 화면에서 그 회사의 DESIGN.md로 바로 이어집니다.</p><ul class="m-kinds">' + TYPES.filter((t) => count(t)).slice(0, 5).map((t) => '<li>' + t + '<span>' + count(t) + '</span></li>').join('') + '</ul><div class="m-land-foot"><a class="sq-sc-cta" href="#">화면 보기</a></div></div><div><div class="m-bento"><a class="big" href="#"><img src="' + img('29cm', 1440, 'home') + '" alt=""></a><a class="ph b" href="#"><img src="' + img('karrot', 390, 'buy-sell') + '" alt=""></a><a class="ph a" href="#"><img src="' + img('oliveyoung', 390, 'home') + '" alt=""></a></div><p class="m-names">' + man.services.map((s) => NAME[s.slug]).join(' · ') + '</p></div></div></div></section>';
const b = await chromium.launch({ headless: true });
const shoot = async (name, w, h, mob, base, apply, clipH) => {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, isMobile: mob, hasTouch: mob, deviceScaleFactor: mob ? 2 : 1, locale: 'ko-KR' });
  const p = await ctx.newPage();
  await p.goto('http://localhost:3369' + base, { waitUntil: 'load', timeout: 120000 }); await p.waitForTimeout(1800);
  await p.evaluate(() => { for (const e of document.querySelectorAll('button')) if (/^(Decline|거절|거부)$/i.test(e.innerText.trim())) e.click(); });
  await p.addStyleTag({ content: CSS });
  await p.evaluate(apply.fn, apply.arg);
  await p.evaluate(async () => { for (const i of document.querySelectorAll('img')) i.loading = 'eager'; await Promise.all([...document.images].filter((i) => !i.complete).map((i) => new Promise((r) => { i.onload = i.onerror = r; setTimeout(r, 5000); }))); });
  await p.waitForTimeout(700);
  const full = await p.evaluate(() => document.documentElement.scrollHeight);
  const rect = apply.focus ? await p.evaluate((sel) => { const e = document.querySelector(sel); const r = e.getBoundingClientRect(); return { y: Math.max(0, r.top + scrollY - 40), h: r.height + 80 }; }, apply.focus) : null;
  await p.screenshot({ path: out + '/' + name + '.png', fullPage: true, clip: rect ? { x: 0, y: rect.y, width: w, height: Math.min(rect.h, 2400) } : { x: 0, y: 0, width: w, height: Math.min(full, clipH || 1700) } });
  if (apply.whole) await p.screenshot({ path: out + '/' + name + '-page.png', fullPage: true });
  const ox = await p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  console.log(name, 'overflow', ox, 'height', full);
  await ctx.close();
};
const setMain = { fn: (html) => { document.querySelector('main').innerHTML = html; scrollTo(0, 0); } };
const land = (html, whole) => ({ fn: (h) => { document.querySelector('.sq-gal-strip')?.remove(); const secs = [...document.querySelectorAll('main > section')]; secs[1].insertAdjacentHTML('afterend', h); }, arg: html, focus: '.m-land', whole });
const jobs = [
  ['a1-list-1440', 1440, 900, false, '/ko/screens', { ...setMain, arg: A1 }, 1500],
  ['a1-web-1440', 1440, 900, false, '/ko/screens', { ...setMain, arg: A1web }, 1300],
  ['a2-detail-1440', 1440, 900, false, '/ko/screens', { ...setMain, arg: A2 }, 2300],
  ['b1-services-1440', 1440, 900, false, '/ko/screens', { ...setMain, arg: B1 }, 1500],
  ['a1-list-390', 390, 844, true, '/ko/screens', { ...setMain, arg: A1 }, 1500],
  ['a2-detail-390', 390, 844, true, '/ko/screens', { ...setMain, arg: A2 }, 2000],
  ['la-wall-1440', 1440, 900, false, '/ko', land(LA, true)],
  ['lb-split-1440', 1440, 900, false, '/ko', land(LB, true)],
  ['la-wall-390', 390, 844, true, '/ko', land(LA)],
  ['lb-split-390', 390, 844, true, '/ko', land(LB)],
];
for (const j of jobs) if (!only || only.split(',').some((o) => j[0].startsWith(o))) await shoot(...j);
await b.close(); process.exit(0);