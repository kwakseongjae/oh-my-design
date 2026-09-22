#!/usr/bin/env node
/**
 * scout-candidates.mjs — 후보 한 묶음을 재고 **판정은 하지 않는다**.
 *
 * 스카우팅은 카탈로그에서 유일하게 위임할 만한 측정 단계다. 오판의 대가가
 * "후보 하나 놓침"이지 "틀린 레퍼런스"가 아니기 때문이다(2026-09-22).
 * 그래서 이 스크립트는 **숫자만 내고 결론을 내지 않는다** — 판정은 읽는 쪽이 한다.
 *
 * 내는 신호와, 각각이 어떤 함정에서 나왔는지:
 *   own / fw       네임스페이스별 개수. `--tw-`·`--wp-`·`--mantine-`이 우세하면
 *                  브랜드가 아니라 프레임워크다 (bizreach 349, hennge·atamaplus).
 *   lang / finalUrl 로케일 리다이렉트. mi.com·popmart·insta360이 한국 사이트를,
 *                  feishu.cn이 larksuite.com을 줬다.
 *   catchAll       넌센스 경로가 홈과 같은 길이를 주면 캐치올이다 (hisense).
 *                  **대조군 없이 200을 신뢰하지 않는다.**
 *   ctrl           측정 가능한 컨트롤 수. 0이면 토큰만 있는 레퍼런스가 된다.
 *   webfonts       자체 서체는 강한 신호다 (chatwork·base·caddi).
 *
 * usage: node scripts/scout-candidates.mjs <json-file> [--locale ja-JP]
 *        json-file: [{"id":"x","url":"https://…"}, …]
 */
import { chromium } from "playwright-core";
import { readFileSync } from "node:fs";

const file = process.argv[2];
if (!file) { console.error("usage: scout-candidates.mjs <json-file> [--locale ja-JP]"); process.exit(2); }
const li = process.argv.indexOf("--locale");
const LOCALE = li > 0 ? process.argv[li + 1] : "ja-JP";
const LANG = LOCALE.split("-")[0];
const CANDIDATES = JSON.parse(readFileSync(file, "utf-8"));

const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36";
/** 프레임워크 접두사 — 이 아래의 변수는 브랜드 것이 아니다.
 *  `fa`(Font Awesome)는 2026-09-22 회차 1에서 빠져 있었다. crowdworks의 `own=196` 중
 *  17개가 아이콘 폰트였고, **도구가 아니라 읽는 쪽이 잡았다.** 목록은 고치지만,
 *  위임 판정의 기준은 여전히 "숫자를 읽었나"가 아니라 "이름을 봤나"다. */
const FW = /^(tw|tailwind|bs|mui|mat|chakra|el|ion|ant|next|nuxt|vp|vt|docusaurus|md|ifm|ring|sl|shiki|astro|radix|ck|van|arco|semi|swiper|atcb|wp|fx|page|mantine|swal|vc|fa|q|n|t|v|g|s)$/;

const browser = await chromium.launch({ headless: true, channel: "chrome",
  args: ["--disable-blink-features=AutomationControlled"] }).catch(() => chromium.launch({ headless: true }));

const READ = () => {
  const cs = getComputedStyle(document.documentElement);
  const v = {};
  for (const n of Array.from(cs)) if (n.startsWith("--")) { const x = cs.getPropertyValue(n).trim(); if (x) v[n] = x; }
  const ns = {};
  for (const n of Object.keys(v)) { const m = n.match(/^--([a-zA-Z0-9]+)[-_]/); const k = m ? m[1].toLowerCase() : "(bare)"; ns[k] = (ns[k] || 0) + 1; }
  const ctrl = [...document.querySelectorAll("a,button,input,[role=button]")].filter((e) => {
    const r = e.getBoundingClientRect(), c = getComputedStyle(e);
    return r.width > 40 && r.width < 520 && r.height > 24 && r.height < 90 && r.top >= 0 && r.top < 1500
      && (c.backgroundColor !== "rgba(0, 0, 0, 0)" || c.borderWidth !== "0px");
  }).length;
  return {
    n: Object.keys(v).length,
    ns: Object.entries(ns).sort((a, b) => b[1] - a[1]).slice(0, 5),
    title: document.title.slice(0, 32), lang: document.documentElement.lang || "",
    len: (document.body.innerText || "").length, ctrl,
    font: getComputedStyle(document.body).fontFamily.split(",")[0].replace(/["']/g, ""),
    webfonts: [...document.fonts].filter((f) => f.status === "loaded").map((f) => f.family)
      .filter((x, i, a) => a.indexOf(x) === i).slice(0, 4),
  };
};

async function visit(url, wait) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 1000 }, userAgent: UA,
    locale: LOCALE, extraHTTPHeaders: { "accept-language": `${LOCALE},${LANG};q=0.9` }, colorScheme: "light" });
  const page = await ctx.newPage();
  try {
    const r = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 40000 });
    await page.waitForTimeout(wait);
    const d = await page.evaluate(READ);
    return { status: r?.status(), final: page.url(), ...d };
  } finally { await ctx.close(); }
}

const rows = [];
for (const { id, url } of CANDIDATES) {
  try {
    const home = await visit(url, 5000);
    // 넌센스 경로 대조군 — 길이가 같으면 캐치올이다
    let catchAll = "?";
    try {
      const base = url.endsWith("/") ? url : url + "/";
      const nx = await visit(base + "zz-this-does-not-exist", 3000);
      catchAll = (nx.len === home.len && nx.status === 200) ? "CATCH-ALL" : "ok";
    } catch { catchAll = "err"; }
    const own = home.ns.filter(([k]) => !FW.test(k)).reduce((a, [, v]) => a + v, 0);
    const fw = home.n - own;
    const redirected = new URL(home.final).host !== new URL(url).host;
    rows.push({ id, ...home, own, fw, catchAll, redirected });
    console.log(`${id.padEnd(12)} ${home.status} vars=${String(home.n).padStart(4)} own=${String(own).padStart(4)} fw=${String(fw).padStart(3)} ctrl=${String(home.ctrl).padStart(3)} lang=${(home.lang || "-").padEnd(6)} ${catchAll.padEnd(9)} ${home.font.slice(0, 14).padEnd(15)} ns=${home.ns.map(([k, v]) => `--${k}*${v}`).join(" ").padEnd(34)} wf=${home.webfonts.join(",").slice(0, 34)}${redirected ? "  ⟶ " + new URL(home.final).host : ""}`);
  } catch (e) {
    rows.push({ id, error: String(e.message).split("\n")[0].slice(0, 50) });
    console.log(`${id.padEnd(12)} ERR ${String(e.message).split("\n")[0].slice(0, 56)}`);
  }
}
console.log("\n" + JSON.stringify(rows.map(r => r.error ? { id: r.id, error: r.error }
  : { id: r.id, own: r.own, fw: r.fw, ctrl: r.ctrl, lang: r.lang, catchAll: r.catchAll, redirected: r.redirected, host: new URL(r.final).host })));
await browser.close();
