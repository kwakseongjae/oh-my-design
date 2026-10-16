#!/usr/bin/env node
/**
 * probe-component-states.mjs — 살아 있는 표면에서 **한 컴포넌트의 상태값**을 읽는다.
 *
 * 왜 도구인가 (2026-09-17). `krds` `toss` `karrot` `line` 네 건을 손으로 한 뒤에 만들었다.
 * 먼저 만들었으면 틀린 것을 자동화했을 것이다 — 네 건이 전부 다른 함정이었다:
 *
 *   krds   문서화된 버튼이 `display: none` 탭 패널 안에 있어 0x0으로 측정된다.
 *          → 닫힌 패널을 열지 않으면 후보조차 되지 않는다.
 *   toss   프로그래밍 `.focus()`로는 `:focus-visible`이 false라 포커스 링이 안 뜬다.
 *          → 실제 Tab 입력으로 키보드 모달리티를 만든 뒤에야 관측된다.
 *   karrot 예제가 Storybook iframe 안에 있고, 거기 뜨는 파란 outline은 브랜드가 아니라
 *          Storybook 크롬이다. → 프레임을 따라가되 팔레트에 없는 값은 의심한다.
 *   line   예제가 전부 PNG다. → 측정할 DOM이 없다는 것도 결과다.
 *
 * **칠해진 색을 그대로 쓰지 않는다.** `krds`에서 authored `--krds-button--color-primary-fill-hover`는
 * `#0b50d0`인데 `getComputedStyle`은 `#0c51d1`을 돌려줬다(채널마다 1 차이). 레퍼런스는 이미
 * authored 값을 갖고 있었고 그게 맞았다. 칠해진 값을 썼다면 **맞는 토큰을 틀리게** 만들었다.
 * 그래서 커스텀 프로퍼티를 함께 덤프해 사람이 대조하게 한다.
 *
 * 이 스크립트는 **읽기만 한다.** 파일을 쓰지 않는다.
 *
 * usage:
 *   node scripts/probe-component-states.mjs <url> --match "#3182f6"        # 배경색으로 찾기
 *   node scripts/probe-component-states.mjs <url> --selector ".krds-btn.primary"
 *   node scripts/probe-component-states.mjs <url> --match "#ff6f0f" --vars seed
 *   옵션: --open-tabs (숨은 탭 패널을 모두 연다) · --min-height 20 · --nth 0
 *
 * 종료 규율(2026-09-29): 결과를 먼저 출력·flush한 뒤에 브라우저를 닫고, 모든 close()는 시간 제한과 경주시키며,
 * 끝은 항상 process.exit다. 멈추면 --budget 뒤에 읽은 것만 출력한다.
 *   --budget 420000 (전체 예산 ms, 소진 시 exit 3) · --close-timeout 5000 (close() 시간 제한 ms)
 *   멈춘 호출을 보려면: DEBUG=pw:api node scripts/probe-component-states.mjs <url> …
 *
 * 비교 범위 (2026-09-30, docs/research/2026-09-29-growth/probe-tool-fix.md). 예전에는 요소 자신과 그 ::before/::after만 봤다.
 * Wanted는 hover·press를 **빈 자식 div**의 opacity로 칠하고 포커스 링을 라벨 span에 그리며, hyundaicard는 hover에 부모 li를
 * 들어 올린다 — 셋 다 "변화 없음"으로 읽혔다. 이제 매 읽기마다 다음을 rest와 비교해 상태마다 따로 찍는다:
 *   - 모든 후손(빈 요소 포함, 열린 shadow root 포함, 너비 우선 --max-kids개까지, 자식 인덱스 경로로 짝지음): 색·배경·opacity·
 *     transform·filter·밑줄·box-shadow·그려지는 outline·border·background-image(전체 값)·background-position/size/repeat·
 *     display/visibility·svg fill/stroke·레이아웃 크기·backdrop-filter/clip-path/mask(이미지·위치·크기)·그 후손의 ::before/::after
 *     (background-position 포함), <img>/<source>의 currentSrc/src/srcset, SVG 요소의 fill/stroke **속성**·fill/stroke opacity·
 *     stroke 너비/대시·<path> d(속성과 계산값)·polygon points·bbox·<use>/<image> href(+가리키는 노드의 해시)·<stop> 색·
 *     url(#id) fill/stroke/filter가 가리키는 gradient의 stop(컨트롤 밖에 정의돼 있어도)
 *   - 조상 --up 단계: 배경·border·box-shadow·outline·transform·opacity·filter·background-image+position/size/repeat·backdrop/clip/mask·
 *     ::before/::after
 *   - 요소 자신: 위 목록의 자기 값 + background-position/size/repeat + (img일 때) src. 긴 값은 앞부분 + 전체 문자열의 FNV-1a 해시.
 *   "없음" 줄은 무엇을 비교했는지(후손 몇 개, 빈 요소 몇 개, SVG·img 몇 개, 조상 몇 단계, 비교한 속성)를 함께 적는다.
 *   (2026-09-30 (2), probe-tool-fix-2.md: naver 뉴스 바로가기의 hover는 스프라이트 background-position만 움직인다.)
 * 비활성 컨트롤: 네이티브 disabled(disabled/:disabled)이면 hover·pressed·focus를 "disabled — not measured"로 적고 그 세 번의
 *   로드를 하지 않는다 (Socar '검색', 2026-09-29). aria-disabled="true"·pointer-events:none·inert는 rest(페이지 맨 위) 한 번으로
 *   정하지 않는다 — socar '맨 위로'는 스크롤 전까지 inert지만 Tab이 닿는다. 상태마다 그 로드 안에서, 그 상태의 순간에 다시 읽어
 *   여전히 비활성이면 그 상태만 "disabled — not measured (… live …)"로 적는다(focus는 disabled·inert일 때만).
 * 전이 대기: 요소·후손·가상 요소·조상의 transition-duration + transition-delay 중 가장 긴 값 + 250ms (최소 450, 최대 6000).
 * 남은 사각지대: canvas/WebGL/video 픽셀, SMIL, 외부 스프라이트 파일 안(`icons.svg#id`는 문자열로만 비교), 교차 출처 iframe,
 *   닫힌 shadow root, 형제·사촌 레이어. fixed 컨트롤은 scrollIntoView로 페이지가 스크롤되지 않으므로, 스크롤해야 살아나는 컨트롤은
 *   이 스크립트에서 여전히 disabled로 읽힐 수 있다(그때는 probe-keyboard-states.mjs의 Tab 순회를 쓴다). 이 스크립트는 상태마다 새로 로드하고 focus를 `.focus()`로 준다 — Tab 순회와 한 번의
 *   로드로 여러 컨트롤을 재려면 probe-keyboard-states.mjs를 쓴다.
 *   --max-kids 150 (비교할 후손 수) · --up 3 (비교할 조상 단계)
 */
import { chromium } from "playwright-core";

const argv = process.argv.slice(2);
const url = argv.find((a) => /^https?:\/\//.test(a));
const opt = (name, fallback) => { const i = argv.indexOf(`--${name}`); return i >= 0 ? argv[i + 1] : fallback; };
const flag = (name) => argv.includes(`--${name}`);
if (!url) { console.error("usage: probe-component-states.mjs <url> [--match <hex>|--selector <css>] [--text <label>] [--text <label>] [--open-tabs] [--vars <prefix>] [--locale ja-JP] [--wait 8000]"); process.exit(2); }

const match = opt("match");
const selector = opt("selector");
/**
 * `--text`. The selector runs as plain `querySelectorAll` inside the page, so
 * Playwright's `:has-text()` does not apply there — it silently matches nothing.
 * A control is most naturally named by its label ("ニュース 一覧"), and on sites
 * that hash their class names that is the only stable handle. Substring match,
 * trimmed, case-insensitive.
 */
const textNeedle = opt("text");
/**
 * `--wait`. 2.5s is enough for a server-rendered page and not for a marketing
 * page that hydrates and animates in: sendbird.com reports 117 anchors with 664
 * characters of text at 2.5s, which is a half-built page, not a thin one.
 */
const waitMs = Number(opt("wait", "2500"));
const varPrefix = opt("vars");
const minHeight = Number(opt("min-height", "20"));
/** 문서화된 높이로 후보를 좁힌다. 흰 배경처럼 흔한 색은 색만으로는 못 고른다. */
const wantHeight = opt("height") ? Number(opt("height")) : null;
/**
 * `--radius` / `--font-size` / `--padding` (2026-10-16). `--match` takes the first element with
 * that fill, which on a page with a same-coloured banner is not the documented button. These narrow
 * the pool to elements whose computed border-radius / font-size / padding equal the value the
 * reference already claims (px, ±1), so a reading can be tied to that component. `--json` adds one
 * `OMD_JSON {...}` line with the target's identity, every measured state and the unmeasured ones.
 */
const wantRadius = opt("radius") != null ? Number(opt("radius")) : null;
const wantFontSize = opt("font-size") != null ? Number(opt("font-size")) : null;
const wantPadding = opt("padding") ?? null;
const nth = Number(opt("nth", "0"));
/** 비교할 후손 수와 조상 단계 (2026-09-30, 머리말 "비교 범위"). */
const maxKids = Number(opt("max-kids", "150"));
const upLevels = Number(opt("up", "3"));
const CHROME = process.env.OMD_CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

/**
 * 실제 브라우저처럼 보이게 한다.
 *
 * 2026-09-17 측정: 60개 표본에서 10개가 HTTP 403으로 막혔고(coupang, yanolja, woowahan,
 * wanted, tesla, sony, panasonic, china-airlines, inflearn, cgv) **전부 헤드리스 탐지였다.**
 * user-agent와 언어 헤더를 붙이고 자동화 플래그를 끄자 넷을 다시 시도했을 때 넷 다 200으로
 * 돌아왔다. 차단을 "발행 방식 때문에 불가능"으로 분류하면 천장을 실제보다 낮게 잡는다.
 *
 * 이건 우회가 아니라 **공개 페이지를 사람이 보는 것과 같은 조건으로 받는 것**이다. 로그인,
 * 유료 장벽, 접근 제어를 넘지 않는다 — 그런 표면은 애초에 이 카탈로그의 증거가 아니다.
 */
const REAL_UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36";
const LAUNCH = { headless: true, args: ["--disable-http2", "--disable-blink-features=AutomationControlled"] };
/**
 * `--locale`. Hardcoded ko-KR until 2026-09-22, which is wrong for every non-KR
 * surface and actively dangerous on the ones that redirect by language: mi.com,
 * popmart.com/cn and insta360.com all served Korean sites in that day's CN sweep,
 * and a token read from the wrong market is not a measurement of the brand.
 */
const LOCALE = opt("locale", "ko-KR");
const LANG_BASE = LOCALE.split("-")[0];
const CONTEXT = { viewport: { width: 1440, height: 1000 }, userAgent: REAL_UA,
  locale: LOCALE,
  extraHTTPHeaders: { "Accept-Language": `${LOCALE},${LANG_BASE};q=0.9,en;q=0.8` } };


/** hex → "r,\\s*g,\\s*b" 정규식 소스. 계산된 값은 rgb()로 돌아온다. */
function rgbPattern(hex) {
  const h = hex.replace("#", "");
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  return `${r},\\s*${g},\\s*${b}`;
}

const browser = await chromium.launch({ executablePath: CHROME, ...LAUNCH });

/**
 * 종료 규율 (2026-09-29). 이 스크립트는 모든 상태를 읽은 **뒤에** `await browser.close()`가 끝나야 결과를
 * 출력했다. close()가 매달리면 측정은 다 끝났는데도 출력이 비었다 — 2026-09-29에 4번 중 4번이 그랬고,
 * close를 시간 제한과 경주시키고 process.exit를 부른 사본은 15초에 끝났다. 그래서:
 *   1) 결과를 먼저 출력하고 stdout/stderr를 비운 **다음에** 브라우저를 닫는다 (finish).
 *   2) 모든 close()는 `--close-timeout`(기본 5000ms)과 경주시킨다 — 페이지 close도 포함.
 *   3) 끝은 항상 process.exit — 매달린 브라우저가 이벤트 루프를 붙잡지 못하게 한다.
 *   4) 어디선가 멈추면 `--budget`(기본 420000ms) 뒤에 그때까지 읽은 것만 출력하고 exit 3.
 */
const CLOSE_TIMEOUT_MS = Number(opt("close-timeout", "5000"));
const BUDGET_MS = Number(opt("budget", "420000"));
const sleepMs = (ms) => new Promise((r) => setTimeout(r, ms));
const raceClose = (p) => Promise.race([Promise.resolve(p).catch(() => {}), sleepMs(CLOSE_TIMEOUT_MS)]);
const flushStd = () => Promise.race([Promise.all([process.stdout, process.stderr].map((st) => new Promise((r) => st.write("", r)))), sleepMs(3000)]);
let reported = false;
async function finish(code = 0) {
  clearTimeout(watchdog);
  await flushStd();
  await raceClose(browser.close());
  process.exit(code);
}
const watchdog = setTimeout(() => {
  console.error(`--budget ${BUDGET_MS}ms 소진: 지금까지 읽은 것만 출력한다`);
  report();
  finish(3);
}, BUDGET_MS);

/** 한 번의 방문에서 한 상태만 읽는다. 상태 오염을 막으려면 새로 여는 편이 확실하다. */
async function visit(act) {
  const context = await browser.newContext(CONTEXT);
  // 열린 shadow root 안까지 찾는다. ing.nl(2026-09-26)은 버튼·링크가 전부 웹 컴포넌트 안에 있어
  // document.querySelectorAll이 아무것도 못 찾았다. 페이지마다 __omdAll/__omdOne을 심어 두고
  // 이 스크립트의 모든 DOM 조회가 그것을 쓴다(없으면 document로 떨어진다).
  await context.addInitScript(() => {
    const roots = () => { const out = [document]; const walk = (r) => { for (const el of r.querySelectorAll("*")) if (el.shadowRoot) { out.push(el.shadowRoot); walk(el.shadowRoot); } }; walk(document); return out; };
    window.__omdAll = (sel) => roots().flatMap((r) => [...r.querySelectorAll(sel)]);
    window.__omdOne = (sel) => { for (const r of roots()) { const e = r.querySelector(sel); if (e) return e; } return null; };
  });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
  await page.waitForTimeout(waitMs);

  // 동의 배너는 숨기기만 하면 포커스 트랩이 남는다 — 대상을 찾기 전에 거부 버튼을 누른다.
  // Sainsbury's(2026-09-26)는 배너를 닫기 전까지 hover·focus가 전부 "변화 없음"으로 읽혔다.
  // 대상 표시(data-omd-probe) 뒤에 누르면 안 된다: gousto의 cookieconsent는 거부 시 DOM을
  // 다시 그려 표시가 사라졌다.
  const rejected = await page.evaluate(() => {
    const REJECT = ["#onetrust-reject-all-handler", "#reject-all", "#CybotCookiebotDialogBodyButtonDecline",
      "button[data-testid='uc-deny-all-button']", ".didomi-continue-without-agreeing", "#didomi-notice-disagree-button",
      "#cm [data-role=\"necessary\"]", "#c-s-bn", "button.cc-btn[data-role=necessary]"];
    // Usercentrics v3 등은 배너를 열린 shadow root 안에 그린다 — document.querySelector로는 안 보인다.
    // flixbus.de(2026-09-26)는 그 배너가 hover를 가로채는데 도구가 거부를 못 눌렀다.
    const roots = [document];
    // 중첩된 shadow root까지 (ing.nl 동의 배너는 웹 컴포넌트 두 겹 안에 있다, 2026-09-26)
    const walk = (r) => { for (const h of r.querySelectorAll("*")) if (h.shadowRoot) { roots.push(h.shadowRoot); walk(h.shadowRoot); } };
    walk(document);
    for (const root of roots) for (const sel of REJECT) { const b = root.querySelector(sel); if (b && b.getClientRects().length) { b.click(); return sel; } }
    // 자체 제작 배너는 선택자가 없다 — 거부 문구로 찾는다 (wolt "Nur erforderliche verwenden", 2026-09-26).
    const WORDS = /^(reject all|reject|decline all|decline|only necessary|necessary only|use necessary only|alle ablehnen|ablehnen|nur erforderliche( verwenden)?|nur notwendige|tout refuser|refuser|continuer sans accepter|rechazar todo|rifiuta tutto|avvisa alla|neka alla|endast nödvändiga cookies|endast nödvändiga|reject non-essential|refuse|deny all|deny|alles weigeren|weigeren|weiger|alleen noodzakelijke cookies|alleen noodzakelijk|weiger alle|拒否する|すべて拒否|모두 거부|거부)$/i;
    // 거부 링크가 <a>인 배너도 있다 — alan.com "Continuer sans accepter"(2026-09-26). 문구가 거부일 때만 누른다.
    for (const root of roots) for (const b of root.querySelectorAll("button, [role=button], a")) {
      if (b.getClientRects().length && WORDS.test((b.textContent || "").trim())) { b.click(); return "text:" + b.textContent.trim(); }
    }
    return null;
  }).catch(() => null);
  // 거부가 페이지를 새로 불러오는 사이트가 있다(gousto) — 다시 안착할 때까지 기다린다.
  if (rejected) {
    await page.waitForTimeout(1500);
    await page.waitForLoadState("load").catch(() => {});
    // flixbus.de는 거부 뒤 다시 그리는 데 4초로 모자랐다 — --wait 값을 그대로 쓴다 (2026-09-26).
    await page.waitForTimeout(waitMs);
  }

  if (flag("open-tabs")) {
    await page.evaluate(() => {
      // 닫힌 탭 패널을 여는 컨트롤을 누른다 (krds의 "코드" 탭 같은 것)
      const hidden = [...document.querySelectorAll('[role="tabpanel"], .tab-conts, [id*="tabpanel" i]')]
        .filter((p) => getComputedStyle(p).display === "none");
      // 트리거가 늘 <a>/<button>인 것은 아니다. krds는 `[role="tab"]`을 쓰고, 그것만
      // 뒤졌을 때 0개를 눌러 대상이 0x0인 채로 남았다. 역할·링크·라벨을 모두 본다.
      const candidates = [...document.querySelectorAll('[role="tab"], a, button, li, [aria-controls], [data-target]')];
      for (const panel of hidden) {
        const id = panel.id;
        const trigger = candidates.find((e) =>
          e.getAttribute("href") === `#${id}`
          || e.getAttribute("aria-controls") === id
          || e.getAttribute("data-target") === `#${id}`
          || e.getAttribute("data-target") === id);
        if (trigger) { trigger.click(); continue; }
        // 연결 속성이 없으면 패널 안의 제목을 라벨로 삼아 같은 글자의 탭을 누른다
        const label = panel.getAttribute("aria-label") || panel.querySelector("h2,h3,h4")?.textContent?.trim();
        if (!label) continue;
        const byText = candidates.find((e) => (e.textContent || "").trim() === label && e !== panel);
        if (byText) byText.click();
      }
    });
    await page.waitForTimeout(1500);
  }

  // 메인 프레임과 하위 프레임(Storybook 등) 모두에서 찾는다
  for (const frame of page.frames()) {
    const found = await frame.evaluate(({ match, selector, minHeight, nth, wantHeight, rgbSrc, textNeedle, wantRadius, wantFontSize, wantPadding }) => {
      const visible = (el) => { const r = el.getBoundingClientRect(); return r.height >= minHeight && r.width >= 8; };
      // `--text`만 주면 색 조건이 "(?!)"라서 후보가 0이었다 — 라벨로 찾으려던 호출이 전부
      // "찾지 못했다"로 끝났다 (2026-09-23 studysapuri). 라벨만 있으면 조작 가능한 요소에서 찾는다.
      const INTERACTIVE = "a,button,[role=button],input,select,textarea,summary,label";
      const all = (sel) => (window.__omdAll ? window.__omdAll(sel) : [...document.querySelectorAll(sel)]);
      let pool = selector ? all(selector)
        : (textNeedle && !match) ? all(INTERACTIVE)
        : all("*").filter((el) => new RegExp(rgbSrc).test(getComputedStyle(el).backgroundColor));
      pool = pool.filter(visible);
      if (textNeedle) {
        const needle = textNeedle.trim().toLowerCase();
        // 입력칸은 textContent가 비어 있다 — 라벨은 aria-label·placeholder·value에 있다
        // (2026-09-23 citymapper 검색칸, aria-label만 있음).
        const label = (el) => [el.textContent, el.getAttribute("aria-label"), el.getAttribute("placeholder"), el.value]
          .filter(Boolean).join(" ").trim().toLowerCase();
        pool = pool.filter((el) => label(el).includes(needle));
      }
      if (wantHeight != null) pool = pool.filter((el) => Math.abs(el.getBoundingClientRect().height - wantHeight) <= 2);
      const near = (a, b) => Math.abs(a - b) <= 1;
      // A pill radius (9999px) computes as-written; any value >= half the height draws the same pill.
      if (wantRadius != null) pool = pool.filter((el) => { const r = parseFloat(getComputedStyle(el).borderTopLeftRadius) || 0; return wantRadius >= 999 ? r >= el.getBoundingClientRect().height / 2 - 1 : near(r, wantRadius); });
      if (wantFontSize != null) pool = pool.filter((el) => near(parseFloat(getComputedStyle(el).fontSize), wantFontSize));
      if (wantPadding != null) {
        const px = String(wantPadding).trim().split(/\s+/).map((x) => parseFloat(x) || 0);
        const want = [px[0], px[1] ?? px[0], px[2] ?? px[0], px[3] ?? px[1] ?? px[0]];
        pool = pool.filter((el) => { const c = getComputedStyle(el); return [c.paddingTop, c.paddingRight, c.paddingBottom, c.paddingLeft].map(parseFloat).every((g, i) => near(g, want[i])); });
      }
      if (!pool[nth]) return false;
      pool[nth].setAttribute("data-omd-probe", "1");
      return true;
    }, { match, selector, minHeight, nth, wantHeight, textNeedle, rgbSrc: match ? rgbPattern(match) : "(?!)", wantRadius, wantFontSize, wantPadding }).catch(() => false);
    if (found) return { page, frame };
  }
  await raceClose(page.close());
  return null;
}

/**
 * 전이가 끝난 뒤에 읽는다.
 *
 * 2026-09-17에 이것 때문에 틀린 결론을 커밋했다. `krds` 버튼은 `transition: 0.4s ease-in-out`인데
 * 350ms에 샘플링해 `#0c51d1`을 얻고는 "칠해진 값이 authored `#0b50d0`과 채널마다 1씩 다르다"고
 * 적었다. 실제로는 차이가 없다 — 400ms 뒤면 정확히 `rgb(11, 80, 208)`로 안착한다. 중간값을
 * 사실로 기록할 뻔했다.
 */
async function settle(frame, page) {
  // 요소 자신의 duration만 보면 후손·가상 요소·조상의 전이(그리고 delay)를 중간에 읽는다 (2026-09-30).
  const ms = await frame.evaluate(([maxKids, upLevels]) => {
    const el = (window.__omdOne ? window.__omdOne('[data-omd-probe="1"]') : document.querySelector('[data-omd-probe="1"]'));
    const parentOf = (n) => n.parentElement || (n.getRootNode && n.getRootNode().host) || null;
    const msList = (v) => String(v).split(",").map((x) => { x = x.trim(); const n = x.endsWith("ms") ? parseFloat(x) : parseFloat(x) * 1000; return Number.isFinite(n) ? n : 0; });
    const nodes = [el, ...[...el.querySelectorAll("*")].slice(0, maxKids)];
    for (let l = 1, p = parentOf(el); l <= upLevels && p && p !== document.body; l++, p = parentOf(p)) nodes.push(p);
    let max = Math.max(0, ...msList(getComputedStyle(el).animationDuration));
    for (const n of nodes) for (const which of [null, "::before", "::after"]) {
      const c = getComputedStyle(n, which);
      const d = msList(c.transitionDuration), dl = msList(c.transitionDelay);
      d.forEach((x, j) => { if (x > 0) max = Math.max(max, x + (dl[j % dl.length] || 0)); });
    }
    return max;
  }, [maxKids, upLevels]).catch(() => 0);
  await page.waitForTimeout(Math.min(6000, Math.max(450, ms + 250)));
}

/**
 * 대상 위에 떠서 포인터를 가로채는 오버레이를 치운다.
 *
 * 29cm는 개인정보 안내 모달 iframe이 전면에 떠 있어 `hover()`가 타임아웃한다. 쿠키 배너,
 * 채팅 위젯, 앱 설치 유도도 같은 문제를 낸다. 전부 사이트 크롬이지 측정 대상이 아니다.
 * 대상의 조상은 절대 건드리지 않는다 — 그러면 컴포넌트 자신을 숨기게 된다.
 */
async function clearOverlays(frame) {
  await frame.evaluate(() => {
    const target = (window.__omdOne ? window.__omdOne('[data-omd-probe="1"]') : document.querySelector('[data-omd-probe="1"]'));
    const ancestors = new Set();
    // shadow root 경계에서 parentElement는 null이다 — host로 건너가야 한다. coconala(2026-09-26)는
    // 헤더가 fixed인 웹 컴포넌트 안이라, 경계에서 멈춘 조상 집합이 헤더 host를 숨겨 버렸다.
    for (let n = target; n; n = n.parentElement || n.getRootNode?.().host) ancestors.add(n);
    for (const el of document.querySelectorAll("body *")) {
      if (ancestors.has(el) || el.contains(target)) continue;
      const s = getComputedStyle(el);
      if (s.position !== "fixed" && s.position !== "sticky") continue;
      const r = el.getBoundingClientRect();
      if (r.width < 40 || r.height < 40) continue;
      el.style.setProperty("display", "none", "important");
    }
  }).catch(() => {});
}

const read = (frame) => frame.evaluate(([prefix, maxKids, upLevels]) => {
  const el = (window.__omdOne ? window.__omdOne('[data-omd-probe="1"]') : document.querySelector('[data-omd-probe="1"]'));
  const s = getComputedStyle(el);
  const rect = el.getBoundingClientRect();
  // 2026-09-30 (2): 긴 값은 앞부분 + 전체 문자열의 FNV-1a 해시(잘린 뒤에서 달라지는 URL·data: URI도 달라진다). background-position/
  // -size/-repeat(이미지가 있을 때만)과 <img>/<source>의 currentSrc/src/srcset도 읽는다 — probe-tool-fix-2.md.
  const hash = (str) => { let h = 0x811c9dc5; for (let n = 0; n < str.length; n++) { h ^= str.charCodeAt(n); h = Math.imul(h, 0x01000193); } return (h >>> 0).toString(16).padStart(8, "0"); };
  const full = (v, n) => { v = String(v ?? ""); return v.length <= n ? v : `${v.slice(0, n)}…#${hash(v)}/${v.length}`; };
  const bgLayout = (x) => (x.backgroundImage && x.backgroundImage !== "none" ? `${x.backgroundPosition} / ${x.backgroundSize} / ${x.backgroundRepeat}` : "");
  const srcOf = (n, tag) => {
    if (tag === "img" || (tag === "input" && n.type === "image")) { const a = n.getAttribute("src") || "", cur = n.currentSrc || n.src || "", set = n.getAttribute("srcset"); return `cur=${full(cur, 80)}${a && a !== cur ? ` src=${full(a, 80)}` : ""}${set ? ` set=#${hash(set)}` : ""}`; }
    if (tag === "source") return `set=#${hash(n.getAttribute("srcset") || n.getAttribute("src") || "")}${n.getAttribute("media") ? ` media=${n.getAttribute("media")}` : ""}`;
    return "";
  };
  const out = {
    bg: s.backgroundColor, fg: s.color, border: s.borderColor, radius: s.borderRadius,
    height: Math.round(rect.height), padding: s.padding, font: `${s.fontSize} / ${s.fontWeight}`,
    shadow: s.boxShadow, outline: `${s.outlineColor} ${s.outlineStyle} ${s.outlineWidth}`,
    transform: s.transform, opacity: s.opacity,
    // FlixBus Honeycomb은 hover·press를 배경색이 아니라 background-image의 반투명 그라디언트
    // 레이어로 그린다(`--flix-hover-layer-color`). 배경색만 보던 판정은 이를 "변화 없음"으로
    // 읽었다. 밑줄 hover도 같은 사각지대였다 (2026-09-26).
    bgImage: s.backgroundImage, decoration: `${s.textDecorationLine} ${s.textDecorationColor}`,
    bgPos: bgLayout(s), src: srcOf(el, el.tagName.toLowerCase()),
    // adyen.com은 hover를 ::before 오버레이(잉크 7.4%)의 opacity 0→1로 그린다. 요소 자신의 값은
    // 하나도 안 바뀐다 — 가상 요소를 안 보면 "변화 없음"이다 (2026-09-26). content가 있는 것만 센다.
    pseudo: ["::before", "::after"].map((ps) => { const c = getComputedStyle(el, ps);
      if (c.content === "none" || c.content === "normal") return "";
      // 칠해지는 것이 없는 가상 요소(투명 배경·이미지 없음·그림자 없음·테두리 없음)는 보이지 않는다 —
      // booth 캐러셀 화살표의 투명 ::before가 hover에 생기는 것을 "변화"로 셌다 (2026-09-26).
      const paints = !/rgba\([^)]*,\s*0\)|transparent/.test(c.backgroundColor) || c.backgroundImage !== "none" || c.boxShadow !== "none" || parseFloat(c.borderTopWidth) > 0;
      return paints ? `${ps}{bg:${c.backgroundColor};img:${full(c.backgroundImage, 60)}${bgLayout(c) ? ";pos:" + bgLayout(c) : ""};op:${c.opacity};tf:${c.transform};bs:${c.boxShadow}}` : ""; }).join(""),
    is: { hover: el.matches(":hover"), active: el.matches(":active"), focusVisible: el.matches(":focus-visible") },
    ident: { tag: el.tagName.toLowerCase(), cls: typeof el.className === "string" ? el.className.trim().split(/\s+/).slice(0, 3).join(".") : "",
      text: (el.getAttribute("aria-label") || el.textContent || el.value || "").replace(/\s+/g, " ").trim().slice(0, 40),
      width: Math.round(rect.width), lineHeight: s.lineHeight, fontFamily: s.fontFamily.slice(0, 80) },
  };
  // 2026-09-30: 후손(빈 요소 포함)·그 ::before/::after·조상까지 읽는다 — 머리말 "비교 범위".
  const alpha = (c) => { c = String(c); if (c === "transparent") return 0; const m = c.match(/^rgba?\(([^)]*)\)$/); if (m) { const p = m[1].split(/[\s,\/]+/).filter(Boolean); return p.length > 3 ? parseFloat(p[3]) * (p[3].endsWith("%") ? 0.01 : 1) : 1; } const m2 = c.match(/\/\s*([\d.]+%?)\s*\)$/); if (m2) return m2[1].endsWith("%") ? parseFloat(m2[1]) / 100 : parseFloat(m2[1]); return 1; };
  const bd = (x) => { const sides = ["Top", "Right", "Bottom", "Left"].map((d) => { const w = x["border" + d + "Width"], st = x["border" + d + "Style"], c = x["border" + d + "Color"]; return st === "none" || st === "hidden" || parseFloat(w) === 0 ? "none" : `${w} ${st} ${c}`; }); return sides.every((v) => v === sides[0]) ? sides[0] : sides.join(" | "); };
  const ol = (x) => (x.outlineStyle !== "none" && parseFloat(x.outlineWidth) > 0 && alpha(x.outlineColor) > 0 ? `${x.outlineColor} ${x.outlineStyle} ${x.outlineWidth} off ${x.outlineOffset}` : "none");
  const ex = (x) => { const std = !!(x.maskImage && x.maskImage !== "none"); const m = std ? x.maskImage : x.webkitMaskImage && x.webkitMaskImage !== "none" ? x.webkitMaskImage : ""; return [x.backdropFilter && x.backdropFilter !== "none" ? `backdrop:${x.backdropFilter}` : "", x.clipPath && x.clipPath !== "none" ? `clip:${full(x.clipPath, 60)}` : "", m ? `mask:${full(m, 60)} @ ${std ? x.maskPosition : x.webkitMaskPosition} / ${std ? x.maskSize : x.webkitMaskSize}` : ""].filter(Boolean).join(";"); };
  const ps = (n, which) => {
    const c = getComputedStyle(n, which);
    if (c.content === "none" || c.content === "normal" || c.display === "none") return "";
    const glyph = c.content !== '""' && c.content !== "''";
    const sideBorder = ["Top", "Right", "Bottom", "Left"].some((d) => c["border" + d + "Style"] !== "none" && parseFloat(c["border" + d + "Width"]) > 0 && alpha(c["border" + d + "Color"]) > 0);
    const paints = alpha(c.backgroundColor) > 0 || c.backgroundImage !== "none" || c.boxShadow !== "none" || sideBorder || ol(c) !== "none" || glyph || ex(c) !== "";
    return paints ? `${which}{content:${full(c.content, 40)};bg:${c.backgroundColor};img:${full(c.backgroundImage, 60)}${bgLayout(c) ? ";pos:" + bgLayout(c) : ""};op:${c.opacity};tf:${c.transform};bs:${c.boxShadow};bd:${bd(c)};ol:${ol(c)};size:${c.width}x${c.height}${ex(c) ? ";" + ex(c) : ""}}` : "";
  };
  const parentOf = (n) => n.parentElement || (n.getRootNode && n.getRootNode().host) || null;
  const clsOf = (n) => (typeof n.className === "string" && n.className.trim() ? "." + n.className.trim().split(/\s+/).slice(0, 2).join(".") : "");
  const SKIP = /^(script|style|template|noscript|link|meta|slot)$/i;
  const queue = [];
  const push = (p0, path) => {
    [...(p0.children || [])].forEach((k, n) => { if (!SKIP.test(k.tagName)) queue.push([k, path ? `${path}.${n}` : `${n}`]); });
    if (p0.shadowRoot) [...p0.shadowRoot.children].forEach((k, n) => { if (!SKIP.test(k.tagName)) queue.push([k, path ? `${path}.s${n}` : `s${n}`]); });
  };
  push(el, "");
  const list = [];
  for (let h = 0; h < queue.length && h < 5000; h++) { const [k, p] = queue[h]; if (list.length < maxKids) list.push([k, p]); push(k, p); }
  // 2026-09-30 (2) SVG 내부: <use>/<image> href(+이 문서 안에서 풀리면 가리키는 노드의 해시), <path> d, points, bbox, fill/stroke
  // 속성, <stop> 색, url(#id) fill/stroke/filter가 가리키는 gradient의 stop(컨트롤 밖 <defs>여도; gradient href 한 단계 따라감).
  const XL = "http://www.w3.org/1999/xlink";
  const hrefOf = (n) => n.getAttribute("href") ?? n.getAttributeNS(XL, "href") ?? n.getAttribute("xlink:href");
  const localId = (ref) => { const t = String(ref || ""), i = t.indexOf("#"); if (i < 0) return null; const pre = t.slice(0, i); if (pre && pre !== location.href.split("#")[0]) return null; try { return decodeURIComponent(t.slice(i + 1)); } catch { return t.slice(i + 1); } };
  const byId = (n, id) => { const r = n.getRootNode && n.getRootNode(); return (r && r !== document && r.getElementById ? r.getElementById(id) : null) || document.getElementById(id); };
  const stopsOf = (g) => { for (let hop = 0, x = g; x && hop < 3; hop++) { const st = [...x.children].filter((y) => y.tagName.toLowerCase() === "stop"); if (st.length) return st.map((y) => { const cs = getComputedStyle(y); return `${y.getAttribute("offset") ?? "0"}:${cs.stopColor}@${cs.stopOpacity}`; }).join(","); const id = localId(hrefOf(x)); x = id ? byId(x, id) : null; } return ""; };
  const paintRef = (n, v, which) => { const m = String(v || "").match(/url\(\s*["']?([^"')]*)["']?\s*\)/); if (!m) return ""; const id = localId(m[1]), t = id ? byId(n, id) : null; if (!t) return `${which}→${full(m[1], 40)} (unresolved)`; const tg = t.tagName.toLowerCase(); return `${which}→#${id} ${tg}[${/gradient$/.test(tg) ? stopsOf(t) : "#" + hash(t.outerHTML.slice(0, 4000))}]`; };
  const r1 = (x) => Math.round(x * 10) / 10;
  const svgFields = (n, tag, c) => {
    const f = n.getAttribute("fill"), st = n.getAttribute("stroke"), geo = [];
    if (tag === "path") { geo.push(`d=${full(n.getAttribute("d") || "", 48)}`); if (c.d && c.d !== "none") geo.push(`css=#${hash(c.d)}`); }
    if (tag === "polygon" || tag === "polyline") geo.push(`pts=${full(n.getAttribute("points") || "", 48)}`);
    if (tag !== "svg" && typeof SVGGraphicsElement !== "undefined" && n instanceof SVGGraphicsElement) { try { const b = n.getBBox(); geo.push(`box=${r1(b.x)},${r1(b.y)} ${r1(b.width)}x${r1(b.height)}`); } catch {} }
    let href = "";
    if (/^(use|image|feimage|textpath|mpath)$/.test(tag)) { const h = hrefOf(n); if (h != null) { const id = localId(h), t = id ? byId(n, id) : null; href = `${full(h, 80)}${t ? ` →${t.tagName.toLowerCase()}#${hash(t.outerHTML.slice(0, 4000))}` : id ? " →(unresolved)" : ""}`; } }
    return { fa: f == null && st == null ? "" : `fill=${f ?? "-"} stroke=${st ?? "-"}`, paint: `fo=${c.fillOpacity} so=${c.strokeOpacity} sw=${c.strokeWidth} dash=${c.strokeDasharray} off=${c.strokeDashoffset}`, geo: geo.join(" "), href,
      grad: [paintRef(n, c.fill, "fill"), paintRef(n, c.stroke, "stroke"), paintRef(n, c.filter, "filter")].filter(Boolean).join("; "), stop: tag === "stop" ? `${c.stopColor}@${c.stopOpacity} off=${n.getAttribute("offset") ?? ""}` : "" };
  };
  out.kids = list.map(([k, p]) => {
    const c = getComputedStyle(k), tag = k.tagName.toLowerCase(), svg = k instanceof SVGElement;
    const lab = (k.getAttribute("aria-label") || k.textContent || "").replace(/\s+/g, " ").trim().slice(0, 20);
    return { k: `${tag}@${p}`, d: `${tag}${clsOf(k)}[${lab}]`, ...(svg ? { svg: 1 } : {}),
      empty: !k.children.length && ![...k.childNodes].some((x) => x.nodeType === 3 && x.textContent.trim()) && !svg && !/^(img|picture|video|canvas|input|textarea|select|iframe|object|embed)$/.test(tag),
      v: { fg: c.color, bg: c.backgroundColor, op: c.opacity, tf: c.transform, filter: c.filter, deco: c.textDecorationLine === "none" ? "none" : `${c.textDecorationLine} ${c.textDecorationColor}`,
        shadow: c.boxShadow, outline: ol(c), border: bd(c), img: c.backgroundImage === "none" ? "none" : full(c.backgroundImage, 80), bgpos: bgLayout(c), vis: c.display === "none" ? "display:none" : c.visibility,
        fill: svg ? `${c.fill}|${c.stroke}` : "", size: k.offsetWidth !== undefined ? `${k.offsetWidth}x${k.offsetHeight}` : `${c.width}x${c.height}`, ex: ex(c), pseudo: ps(k, "::before") + ps(k, "::after"),
        src: srcOf(k, tag), ...(svg ? svgFields(k, tag, c) : {}) } };
  });
  out.kidsTotal = queue.length;
  out.ups = [];
  for (let l = 1, p = parentOf(el); l <= upLevels && p && p !== document.body && p !== document.documentElement; l++, p = parentOf(p)) {
    const c = getComputedStyle(p);
    out.ups.push({ k: `up${l}:${p.tagName.toLowerCase()}${clsOf(p)}`, v: { bg: c.backgroundColor, border: bd(c), shadow: c.boxShadow, outline: ol(c), tf: c.transform, op: c.opacity, filter: c.filter, img: full(c.backgroundImage, 80), bgpos: bgLayout(c), ex: ex(c), pseudo: ps(p, "::before") + ps(p, "::after") } });
  }
  out.disabled = [];
  try { if (el.disabled === true || el.matches(":disabled")) out.disabled.push("disabled"); } catch {}
  if (el.closest('[aria-disabled="true"]')) out.disabled.push("aria-disabled");
  if (s.pointerEvents === "none") out.disabled.push("pointer-events:none");
  if (el.closest("[inert]")) out.disabled.push("inert");
  if (prefix) {
    out.vars = {};
    // `@layer`·`@media` 안까지 내려간다 — Tailwind v4는 테마 변수를 `@layer theme`에 둔다.
    // 자식 판정은 `.length`로 한다: CSS Nesting을 지원하는 Chrome은 평범한 스타일 규칙에도
    // 빈 `cssRules`를 붙여서, 참/거짓으로 판정하면 규칙 자신의 선언을 건너뛴다
    // (2026-09-23 loglass 프로브가 발견).
    const walk = (rules) => {
      for (const rule of rules ?? []) {
        for (const m of (rule.style?.cssText ?? "").matchAll(new RegExp(`(--${prefix}[a-z0-9-]*)`, "gi"))) {
          const v = s.getPropertyValue(m[1]).trim();
          if (v && /^#|^rgb/.test(v)) out.vars[m[1]] = v;
        }
        if (rule.cssRules?.length) walk(rule.cssRules);
      }
    };
    for (const sheet of document.styleSheets) {
      let rules; try { rules = sheet.cssRules; } catch { continue; }
      walk(rules);
    }
  }
  return out;
}, [varPrefix, maxKids, upLevels]);

/** 후손·조상 비교 (2026-09-30). 자식 인덱스 경로로 짝짓고, 경로의 태그가 바뀌면 속성 변화가 아니라 DOM 변화 한 건으로 센다. */
function deepDiff(a, b) {
  const out = [];
  const key = (k) => k.k.slice(k.k.indexOf("@") + 1);
  const am = new Map((a.kids ?? []).map((k) => [key(k), k])), bm = new Map((b.kids ?? []).map((k) => [key(k), k]));
  let added = 0, removed = 0, retagged = 0;
  for (const [p, y] of bm) {
    const x = am.get(p);
    if (!x) { added++; continue; }
    if (x.k !== y.k) { retagged++; continue; }
    for (const q of Object.keys(y.v)) if (x.v[q] !== y.v[q]) out.push(`후손 ${y.k} <${y.d}>${y.empty ? " (빈 요소)" : ""} ${q}: ${x.v[q]} -> ${y.v[q]}`);
  }
  for (const p of am.keys()) if (!bm.has(p)) removed++;
  const capped = (a.kidsTotal ?? 0) > (a.kids?.length ?? 0) || (b.kidsTotal ?? 0) > (b.kids?.length ?? 0);
  if (retagged || a.kidsTotal !== b.kidsTotal || (!capped && (added || removed))) out.push(`후손 DOM 변화: ${a.kidsTotal} -> ${b.kidsTotal}개 (+${added} -${removed}${retagged ? `, 태그 바뀜 ${retagged}` : ""})`);
  for (let j = 0; j < Math.min(a.ups?.length ?? 0, b.ups?.length ?? 0); j++) {
    for (const q of Object.keys(b.ups[j].v)) if (a.ups[j].v[q] !== b.ups[j].v[q]) out.push(`조상 ${a.ups[j].k} ${q}: ${a.ups[j].v[q]} -> ${b.ups[j].v[q]}`);
  }
  return out;
}

const states = {};
const unmeasured = {};

/**
 * 상태 하나를 못 재는 것과 **전부** 못 재는 것은 다르다 (2026-09-22).
 *
 * zhihu의 `.CornerButton`은 떠 있는 위젯이라 그 위를 다른 레이어가 덮고 있고,
 * Playwright `hover()`의 actionability 검사가 30초 뒤 throw한다. 예전 구조에서는 그
 * throw가 프로세스를 죽여서 **focus까지 같이 잃었다** — 그런데 focus는 마우스가 필요
 * 없고, 정확히 그것을 확인하러 온 실행이었다.
 *
 * 그래서 상태마다 격리한다. 못 잰 상태는 "없음"이 아니라 **"못 쟀음"**으로 출력에 남는다.
 * 부재 주장과 측정 실패를 같은 칸에 적지 않는 것이 이 카탈로그의 규칙이다.
 */
async function capture(name, fn) {
  let v = null;
  try { v = await visit();
    if (!v) {
      // 조용히 건너뛰면 "안 나온 상태"와 "변화 없는 상태"가 출력에서 구별되지 않는다.
      if (name === "rest") return null;
      unmeasured[name] = "이 로드에서 대상 요소를 찾지 못했다";
      return;
    }
    // **자동 포커스된 컨트롤에는 rest가 없다** (2026-09-22).
    // `app.asana.com/-/login`의 이메일 입력은 로드되자마자 포커스를 받아서,
    // rest·hover·pressed가 전부 `:focus-visible`이고 `#4075cf` 링을 단 채로 읽혔다.
    // 네 상태가 똑같이 나오니 "상태 없음"처럼 보이는데, 실제로는 **전부 focus**였다.
    // focus를 재는 판독만 빼고, 읽기 전에 활성 요소를 풀어준다.
    if (name !== "focus") await v.frame.evaluate(() => document.activeElement?.blur?.()).catch(() => {});
    await fn(v);
    states[name] = await read(v.frame);
  } catch (err) {
    unmeasured[name] = String(err?.message ?? err).split("\n")[0].slice(0, 96);
  } finally { if (v) await raceClose(v.page.close()); }
}

if ((await capture("rest", async () => {})) === null || !states.rest) {
  console.error(states.rest ? "rest를 읽지 못했다" : "대상 요소를 찾지 못했다");
  await finish(1);
}
// Playwright hover()의 actionability 검사가 flixbus.de에서 매번 8초 타임아웃했다 — 요소 위에
// 아무것도 없는데도(elementFromPoint = 대상). 실패하면 중심 좌표로 포인터만 옮긴다. 판정은
// 어차피 `:hover` 매칭으로 거르므로 가려진 경우는 여전히 못 쟀음으로 남는다 (2026-09-26).
async function hoverOrMove(loc, v) {
  try { await loc.hover({ timeout: 8000 }); }
  catch {
    const box = await loc.boundingBox();
    if (!box) throw new Error("hover: 요소 좌표 없음");
    await v.page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  }
}
// 비활성 컨트롤에는 hover·pressed·focus 상태가 없다. Socar '검색'(2026-09-29)은 disabled인데 hover가 매칭돼 "변화 없음"으로
// 측정된 것처럼 읽혔다. 못 쟀음으로 적고, 상태마다 새로 여는 세 번의 로드도 하지 않는다.
// 2026-09-30 (2): 로드를 건너뛰는 것은 네이티브 disabled일 때뿐이다. inert·pointer-events:none·aria-disabled는 rest(페이지 맨 위) 한 번으로
// 정하지 않는다 — socar '맨 위로'는 스크롤 전까지 inert다. 상태마다 그 로드에서 다시 본다(아래 captures 뒤).
if (states.rest.disabled?.includes("disabled")) {
  for (const k of ["hover", "pressed", "focus"]) unmeasured[k] = `disabled — not measured (${states.rest.disabled.join(", ")}; native disabled at rest, so the state loads were skipped)`;
} else {
await capture("hover", async (v) => { await clearOverlays(v.frame);
  const loc = v.frame.locator('[data-omd-probe="1"]');
  await loc.scrollIntoViewIfNeeded(); await hoverOrMove(loc, v); await settle(v.frame, v.page); });
await capture("pressed", async (v) => { await clearOverlays(v.frame);
  const loc = v.frame.locator('[data-omd-probe="1"]');
  await loc.scrollIntoViewIfNeeded(); await hoverOrMove(loc, v); await settle(v.frame, v.page);
  await v.page.mouse.down(); await settle(v.frame, v.page); });
await capture("focus", async (v) => { await clearOverlays(v.frame);
  await v.page.keyboard.press("Tab");                       // 키보드 모달리티 — toss에서 이게 없으면 focus가 안 뜬다
  await v.frame.evaluate(() => (window.__omdOne ? window.__omdOne('[data-omd-probe="1"]') : document.querySelector('[data-omd-probe="1"]')).focus());
  await settle(v.frame, v.page); });
// 각 상태의 read()가 그 순간(scrollIntoView·hover/focus 뒤)의 비활성 여부를 담아 온다. hover·pressed는 어떤 종류든, focus는 disabled·inert면 못 쟀음.
for (const k of ["hover", "pressed", "focus"]) {
  const live = states[k]?.disabled ?? [];
  const block = k === "focus" ? live.filter((x) => x === "disabled" || x === "inert") : live;
  if (states[k] && block.length) { unmeasured[k] = `disabled — not measured (${live.join(", ")}; live re-check in this state's own load${states.rest.disabled?.length ? `; rest: ${states.rest.disabled.join(", ")}` : ""})`; delete states[k]; }
}
}

function report() {
  if (reported) return;
  reported = true;
  // 끝나지 못한 상태는 "변화 없음"이 아니라 못 쟀음이다 (--budget으로 잘린 실행에서만 해당).
  for (const k of ["hover", "pressed", "focus"]) if (!states[k] && !unmeasured[k]) unmeasured[k] = "예산(--budget) 소진 전에 끝나지 못했다";
  if (!states.rest) { console.error("rest를 읽지 못했다(예산 소진)"); return; }

/**
 * 계산된 색을 hex로. 두 형태를 받는다.
 *
 * `color(srgb 0.0094 0.2604 0.5333)` — 최신 CSS 색 문법. Mitsubishi의 serendie.design이
 * hover/pressed를 이 형태로 돌려줬고, rgb()만 처리하던 때는 원문이 그대로 출력돼 읽을 수
 * 없었다. srgb는 0~1 비율이라 255를 곱하면 된다. 다른 색공간(display-p3 등)은 변환이
 * 손실이라 원문을 남긴다 — 틀린 hex보다 읽기 어려운 원문이 낫다.
 */
const hex = (v) => {
  const s = String(v);
  const rgb = s.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/);
  if (rgb) {
    if (rgb[4] !== undefined && Number(rgb[4]) < 1) return s;
    return "#" + [rgb[1], rgb[2], rgb[3]].map((n) => Number(n).toString(16).padStart(2, "0")).join("");
  }
  const srgb = s.match(/^color\(srgb\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+))?\s*\)$/);
  if (srgb) {
    if (srgb[4] !== undefined && Number(srgb[4]) < 1) return s;
    return "#" + [srgb[1], srgb[2], srgb[3]]
      .map((n) => Math.round(Number(n) * 255).toString(16).padStart(2, "0")).join("");
  }
  return s;
};

// :hover가 실제로 매칭되지 않았으면 그 hover/pressed 값은 측정이 아니다 — 덮개가 포인터를 가로챘다.
for (const k of ["hover", "pressed"]) {
  if (states[k] && !states[k].is.hover) {
    unmeasured[k] = ":hover가 매칭되지 않음(오버레이가 포인터를 가로챔)";
    delete states[k];
  }
}
// focus도 같다. `:focus-visible`이 매칭되지 않은 읽기는 포커스 상태가 아니다 — 포커스가 대상에
// 가지 않았다(덮개·포커스 트랩). klarna "Visa fler"(2026-09-26)가 이 경우를 "변화 없음"으로 찍었다.
if (states.focus && !states.focus.is.focusVisible) {
  unmeasured.focus = ":focus-visible이 매칭되지 않음(포커스가 대상에 가지 않음)";
  delete states.focus;
}
console.log(`\n${url}`);
console.log(`geometry: h=${states.rest.height} radius=${states.rest.radius} padding=${states.rest.padding} font=${states.rest.font}\n`);
for (const [name, s] of Object.entries(states)) {
  const marks = [s.is.hover && "hover", s.is.active && "active", s.is.focusVisible && "focus-visible"].filter(Boolean).join("+") || "-";
  console.log(`  ${name.padEnd(8)} bg=${hex(s.bg).padEnd(24)} fg=${hex(s.fg).padEnd(20)} [${marks}]`);
  const extras = [];
  // 54자는 포커스 링을 자른다. zhihu의 focus shadow는 흰 안쪽 링과 색 있는 바깥 링을
  // 겹친 두 겹짜리라 앞부분만 보면 "흰 테두리"로 잘못 읽힌다. 그리고 포커스 링은
  // 정확히 이 스크립트로 확인하러 오는 값이다 (2026-09-22).
  if (s.shadow !== states.rest.shadow || name === "rest") extras.push(`shadow=${s.shadow}`);
  if (s.transform !== "none") extras.push(`transform=${s.transform}`);
  // 색만 비교하면 opacity 페이드가 "변화 없음"으로 읽힌다. studysapuri CTA는
  // `transition: opacity 0.3s`로 hover에 0.9가 되는데, 위임 프로브는 색 여섯 개가
  // 그대로라서 "hover·pressed 변화 없음"으로 보고했다 (2026-09-23).
  if (s.opacity !== states.rest.opacity || name === "rest") extras.push(`opacity=${s.opacity}`);
  if (s.bgImage !== states.rest.bgImage) extras.push(`background-image=${s.bgImage.slice(0, 90)}`);
  if ((s.bgPos ?? "") !== (states.rest.bgPos ?? "")) extras.push(`background-position/size/repeat=${s.bgPos}`);
  if ((s.src ?? "") !== (states.rest.src ?? "")) extras.push(`src=${s.src}`);
  if (s.decoration !== states.rest.decoration) extras.push(`text-decoration=${s.decoration}`);
  if (s.pseudo !== states.rest.pseudo) extras.push(`pseudo=${s.pseudo.slice(0, 160)}`);
  // border와 같은 이유로 rest에서도 항상 찍는다. 포커스 판정은 색이 아니라
  // **스타일**로 갈린다(`auto` = 브라우저, `solid`/`none` = 작성자) — 그 비교를
  // 하려면 rest 값이 출력에 있어야 한다. 측정법 문서 §2.5.
  if (s.outline !== states.rest.outline || name === "rest") extras.push(`outline=${s.outline}`);
  // rest는 항상 테두리를 찍는다. 변화만 찍으면 rest 값이 출력에 아예 없어서,
  // "hover에서 #c6c6c6으로 바뀐다"를 읽고도 무엇에서 바뀌는지 알 수 없다 (2026-09-22).
  if (s.border !== states.rest.border || name === "rest") extras.push(`border=${hex(s.border)}`);
  if (extras.length) console.log(`           ${extras.join("  ")}`);
  if (name !== "rest") { const dd = deepDiff(states.rest, s); for (const x of dd.slice(0, 14)) console.log(`           ${x}`); if (dd.length > 14) console.log(`           … 외 ${dd.length - 14}건`); }
}
for (const [name, why] of Object.entries(unmeasured)) {
  console.log(`  ${name.padEnd(8)} ${"못 쟀음".padEnd(20)} ${why}`);
}
// 배경만 보던 판정은 fg·테두리·그림자·opacity만 바뀌는 상태를 "변화 없음"으로 불렀다.
// outline-style이 none이면 색·너비가 바뀌어도 아무것도 그려지지 않는다 — 그 변화를 "바뀜"으로
// 세면 포커스 표시가 없는 입력칸이 있는 것처럼 보인다 (2026-09-23 citymapper·guardian 검색칸).
const drawnOutline = (o) => (/\bnone\b/.test(o) || /rgba\([^)]*,\s*0\)/.test(o) || /\b0px\b/.test(o) ? "none" : o);
const VISUAL = (s) => [hex(s.bg), hex(s.fg), hex(s.border), s.shadow, drawnOutline(s.outline), s.transform, s.opacity, s.bgImage, s.bgPos ?? "", s.src ?? "", s.decoration, s.pseudo].join("|");
// 2026-09-30: 후손·조상의 변화도 "바뀜"이다. "없음"은 무엇을 비교했는지와 함께만 적고, 잰 상태가 하나도 없으면 "없음"이라 하지 않는다.
const changed = Object.entries(states).filter(([k, s]) => k !== "rest" && (VISUAL(s) !== VISUAL(states.rest) || deepDiff(states.rest, s).length > 0));
const measuredStates = Object.keys(states).filter((k) => k !== "rest");
const r0 = states.rest;
const svgKids = (r0.kids ?? []).filter((k) => k.svg).length, imgKids = (r0.kids ?? []).filter((k) => /^(img|source)@/.test(k.k)).length;
const scope = `요소 자신(bg·fg·border·shadow·outline·transform·opacity·background-image 전체 값·background-position/size/repeat·src·text-decoration)과 그 ::before/::after · 후손 ${r0.kids?.length ?? 0}개${(r0.kidsTotal ?? 0) > (r0.kids?.length ?? 0) ? `(전체 ${r0.kidsTotal}개 중 너비 우선 앞쪽; --max-kids로 늘림)` : ""}, 그중 빈 요소 ${(r0.kids ?? []).filter((k) => k.empty).length}개, SVG 요소 ${svgKids}개, img/source ${imgKids}개, 각 후손의 ::before/::after · 조상 ${r0.ups?.length ?? 0}단계와 그 ::before/::after · 후손 속성: 색·배경·border·outline·shadow·opacity·transform·filter·visibility·크기·background-image(전체)+position/size/repeat·mask 위치·<img>/<source> currentSrc/src/srcset·SVG fill/stroke(계산값과 속성)·<path> d·points·bbox·<use>/<image> href(+대상 해시)·<stop> 색과 url(#id) gradient stop`;
if (!measuredStates.length) console.log(`\n눈에 보이는 값이 바뀌는 상태: 판정 없음 — 잰 상태가 하나도 없다 (아래 못 잰 상태)`);
else if (changed.length) console.log(`\n눈에 보이는 값이 바뀌는 상태: ${changed.map(([k]) => k).join(", ")}\n비교 범위: ${scope}`);
else console.log(`\n눈에 보이는 값이 바뀌는 상태: 없음 (잰 상태 ${measuredStates.join("·")}) — 비교 범위: ${scope}`);
if (Object.keys(unmeasured).length) {
  console.log(`못 잰 상태: ${Object.keys(unmeasured).join(", ")} — **부재가 아니다.** 레퍼런스에 "없음"으로 적지 말 것.`);
}
if (varPrefix && Object.keys(states.rest.vars ?? {}).length) {
  console.log(`\nauthored --${varPrefix}* (칠해진 값보다 이쪽을 쓴다):`);
  for (const [k, v] of Object.entries(states.rest.vars)) console.log(`  ${k.padEnd(52)} ${v}`);
}
}

report();
if (flag("json") && states.rest) {
  const pick = (x) => ({ bg: x.bg, fg: x.fg, border: x.border, radius: x.radius, height: x.height, padding: x.padding, font: x.font, shadow: x.shadow,
    outline: x.outline, transform: x.transform, opacity: x.opacity, bgImage: x.bgImage, decoration: x.decoration, pseudo: x.pseudo, is: x.is });
  const measured = Object.fromEntries(Object.entries(states).filter(([k]) => k !== "rest").map(([k, x]) => [k, { ...pick(x), deep: deepDiff(states.rest, x) }]));
  console.log(`OMD_JSON ${JSON.stringify({ url, ident: states.rest.ident, rest: pick(states.rest), states: measured, unmeasured })}`);
}
await finish(0);
