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
const nth = Number(opt("nth", "0"));
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

/** 한 번의 방문에서 한 상태만 읽는다. 상태 오염을 막으려면 새로 여는 편이 확실하다. */
async function visit(act) {
  const context = await browser.newContext(CONTEXT);
  const page = await context.newPage();
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
  await page.waitForTimeout(waitMs);

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
    const found = await frame.evaluate(({ match, selector, minHeight, nth, wantHeight, rgbSrc, textNeedle }) => {
      const visible = (el) => { const r = el.getBoundingClientRect(); return r.height >= minHeight && r.width >= 8; };
      let pool = selector ? [...document.querySelectorAll(selector)]
        : [...document.querySelectorAll("*")].filter((el) => new RegExp(rgbSrc).test(getComputedStyle(el).backgroundColor));
      pool = pool.filter(visible);
      if (textNeedle) {
        const needle = textNeedle.trim().toLowerCase();
        pool = pool.filter((el) => (el.textContent || "").trim().toLowerCase().includes(needle));
      }
      if (wantHeight != null) pool = pool.filter((el) => Math.abs(el.getBoundingClientRect().height - wantHeight) <= 2);
      if (!pool[nth]) return false;
      pool[nth].setAttribute("data-omd-probe", "1");
      return true;
    }, { match, selector, minHeight, nth, wantHeight, textNeedle, rgbSrc: match ? rgbPattern(match) : "(?!)" }).catch(() => false);
    if (found) return { page, frame };
  }
  await page.close();
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
  const ms = await frame.evaluate(() => {
    const el = document.querySelector('[data-omd-probe="1"]');
    const durations = [getComputedStyle(el).transitionDuration, getComputedStyle(el).animationDuration]
      .join(",").split(",")
      .map((v) => (v.trim().endsWith("ms") ? parseFloat(v) : parseFloat(v) * 1000))
      .filter((n) => Number.isFinite(n));
    return Math.max(0, ...durations);
  }).catch(() => 0);
  await page.waitForTimeout(Math.min(2500, Math.max(450, ms + 250)));
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
    const target = document.querySelector('[data-omd-probe="1"]');
    const ancestors = new Set();
    for (let n = target; n; n = n.parentElement) ancestors.add(n);
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

const read = (frame) => frame.evaluate((prefix) => {
  const el = document.querySelector('[data-omd-probe="1"]');
  const s = getComputedStyle(el);
  const rect = el.getBoundingClientRect();
  const out = {
    bg: s.backgroundColor, fg: s.color, border: s.borderColor, radius: s.borderRadius,
    height: Math.round(rect.height), padding: s.padding, font: `${s.fontSize} / ${s.fontWeight}`,
    shadow: s.boxShadow, outline: `${s.outlineColor} ${s.outlineStyle} ${s.outlineWidth}`,
    transform: s.transform, opacity: s.opacity,
    is: { hover: el.matches(":hover"), active: el.matches(":active"), focusVisible: el.matches(":focus-visible") },
  };
  if (prefix) {
    out.vars = {};
    for (const sheet of document.styleSheets) {
      let rules; try { rules = sheet.cssRules; } catch { continue; }
      for (const rule of rules ?? []) {
        for (const m of (rule.style?.cssText ?? "").matchAll(new RegExp(`(--${prefix}[a-z0-9-]*)`, "gi"))) {
          const v = s.getPropertyValue(m[1]).trim();
          if (v && /^#|^rgb/.test(v)) out.vars[m[1]] = v;
        }
      }
    }
  }
  return out;
}, varPrefix);

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
  } finally { await v?.page.close().catch(() => {}); }
}

if ((await capture("rest", async () => {})) === null || !states.rest) {
  console.error(states.rest ? "rest를 읽지 못했다" : "대상 요소를 찾지 못했다");
  await browser.close(); process.exit(1);
}
await capture("hover", async (v) => { await clearOverlays(v.frame);
  const loc = v.frame.locator('[data-omd-probe="1"]');
  await loc.scrollIntoViewIfNeeded(); await loc.hover({ timeout: 8000 }); await settle(v.frame, v.page); });
await capture("pressed", async (v) => { await clearOverlays(v.frame);
  const loc = v.frame.locator('[data-omd-probe="1"]');
  await loc.scrollIntoViewIfNeeded(); await loc.hover({ timeout: 8000 }); await settle(v.frame, v.page);
  await v.page.mouse.down(); await settle(v.frame, v.page); });
await capture("focus", async (v) => { await clearOverlays(v.frame);
  await v.page.keyboard.press("Tab");                       // 키보드 모달리티 — toss에서 이게 없으면 focus가 안 뜬다
  await v.frame.evaluate(() => document.querySelector('[data-omd-probe="1"]').focus());
  await settle(v.frame, v.page); });

await browser.close();

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
  // border와 같은 이유로 rest에서도 항상 찍는다. 포커스 판정은 색이 아니라
  // **스타일**로 갈린다(`auto` = 브라우저, `solid`/`none` = 작성자) — 그 비교를
  // 하려면 rest 값이 출력에 있어야 한다. 측정법 문서 §2.5.
  if (s.outline !== states.rest.outline || name === "rest") extras.push(`outline=${s.outline}`);
  // rest는 항상 테두리를 찍는다. 변화만 찍으면 rest 값이 출력에 아예 없어서,
  // "hover에서 #c6c6c6으로 바뀐다"를 읽고도 무엇에서 바뀌는지 알 수 없다 (2026-09-22).
  if (s.border !== states.rest.border || name === "rest") extras.push(`border=${hex(s.border)}`);
  if (extras.length) console.log(`           ${extras.join("  ")}`);
}
for (const [name, why] of Object.entries(unmeasured)) {
  console.log(`  ${name.padEnd(8)} ${"못 쟀음".padEnd(20)} ${why}`);
}
// 배경만 보던 판정은 fg·테두리·그림자·opacity만 바뀌는 상태를 "변화 없음"으로 불렀다.
const VISUAL = (s) => [hex(s.bg), hex(s.fg), hex(s.border), s.shadow, s.outline, s.transform, s.opacity].join("|");
const changed = Object.entries(states).filter(([k, s]) => k !== "rest" && VISUAL(s) !== VISUAL(states.rest));
console.log(`\n눈에 보이는 값이 바뀌는 상태: ${changed.length ? changed.map(([k]) => k).join(", ") : "없음 (bg·fg·border·shadow·outline·transform·opacity 전부 동일)"}`);
if (Object.keys(unmeasured).length) {
  console.log(`못 잰 상태: ${Object.keys(unmeasured).join(", ")} — **부재가 아니다.** 레퍼런스에 "없음"으로 적지 말 것.`);
}
if (varPrefix && Object.keys(states.rest.vars ?? {}).length) {
  console.log(`\nauthored --${varPrefix}* (칠해진 값보다 이쪽을 쓴다):`);
  for (const [k, v] of Object.entries(states.rest.vars)) console.log(`  ${k.padEnd(52)} ${v}`);
}
