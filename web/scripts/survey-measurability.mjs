#!/usr/bin/env node
/**
 * survey-measurability.mjs — 레퍼런스가 **다시 측정될 수 있는 표면을 갖고 있는지** 분류한다.
 *
 * 왜 (2026-09-17). 수요 상위 10개를 손으로 끝까지 해보니 4개만 개선됐고 1개는 확인,
 * **5개는 노력이 아니라 브랜드가 발행하는 방식 때문에 막혔다** — 이미지로만 문서화(line,
 * kakao), 컴포넌트를 렌더하지 않는 색인(yeogiotte), 봇 차단(Cloudflare, HTTP 403).
 * 그게 440 리뉴얼의 실제 천장인데 지금까지 추정이었다. 표본으로 잰다.
 *
 * 판정 (한 페이지당 한 번 방문):
 *   blocked        HTTP 4xx/5xx, 또는 Cloudflare/보안 인터스티셜 제목
 *   renders        브랜드 색(또는 임의의 유채색 배경) 컨트롤이 DOM에 있다 → 상태 측정 가능
 *   images-only    컨트롤은 없고 이미지가 많다 → line/kakao 유형
 *   index-only     본문이 짧고 컨트롤도 이미지도 없다 → yeogiotte 유형
 *
 * **판정은 "측정 가능성"이지 품질이 아니다.** renders라고 해서 좋은 레퍼런스라는 뜻이
 * 아니고, blocked라고 해서 틀렸다는 뜻도 아니다. 어디에 사람 시간을 쓸지만 답한다.
 *
 * usage:
 *   node scripts/survey-measurability.mjs --sample 30 [--seed 7] [--json]
 *   node scripts/survey-measurability.mjs <id> [<id> ...]
 */
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";
import { chromium } from "playwright-core";

const WEB = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const REFS = join(WEB, "references");
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
const CONTEXT = { viewport: { width: 1440, height: 1000 }, userAgent: REAL_UA,
  locale: "ko-KR", extraHTTPHeaders: { "Accept-Language": "ko-KR,ko;q=0.9,en;q=0.8" } };

const argv = process.argv.slice(2);
const opt = (n, d) => { const i = argv.indexOf(`--${n}`); return i >= 0 ? argv[i + 1] : d; };

/**
 * 다시 잴 만한 표면들을 **순서대로** 돌려준다. 하나만 보면 틀린다 — 첫 판에서 `naver`가
 * `images-only`로 나왔는데, 그건 고른 URL이 navercorp 브랜드 페이지였기 때문이고 실제로는
 * 검색결과에서 컨트롤을 측정했다. 하나가 막히면 다음을 본다.
 */
function surfaces(front) {
  const sources = front?.verification_v2?.sources ?? [];
  const url = (s) => s?.url;
  const componenty = sources.filter((s) => /component|button|form|input|design/i.test(String(s?.url))).map(url);
  const docs = sources.filter((s) => s?.kind === "official-doc").map(url);
  const product = sources.filter((s) => s?.kind === "product-surface").map(url);
  return [...new Set([...componenty, ...product, ...docs])].filter(Boolean).slice(0, 3);
}

const ids = argv.filter((a) => !a.startsWith("--") && !/^\d+$/.test(a));
let targets = [];
for (const id of readdirSync(REFS).sort()) {
  const design = join(REFS, id, "DESIGN.md");
  if (!existsSync(design)) continue;
  if (ids.length && !ids.includes(id)) continue;
  let front; try { front = yaml.load(readFileSync(design, "utf8").match(/^---\n([\s\S]*?)\n---/)[1], { schema: yaml.JSON_SCHEMA }); } catch { continue; }
  const urls = surfaces(front);
  if (urls.length) targets.push({ id, urls, country: front.country ?? "?" });
}
const sample = Number(opt("sample", "0"));
if (sample > 0) {
  // 결정적 표본 — 같은 seed면 같은 집합. 재실행이 비교 가능해야 한다.
  const seed = Number(opt("seed", "7"));
  targets = targets
    .map((t, i) => ({ t, k: (Math.imul(i + seed, 2654435761) >>> 0) }))
    .sort((a, b) => a.k - b.k).slice(0, sample).map((x) => x.t);
}

const browser = await chromium.launch({ executablePath: CHROME, ...LAUNCH });
const rows = [];
for (const { id, urls, country } of targets) {
  let verdictFor = null;
  for (const url of urls) {
  const context = await browser.newContext(CONTEXT);
  const page = await context.newPage();
  let verdict = "blocked", detail = "";
  try {
    const resp = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 25000 });
    const status = resp?.status() ?? 0;
    await page.waitForTimeout(2500);
    const probe = await page.evaluate(() => {
      const coloured = [...document.querySelectorAll("button,a,input,[role=button],[role=tab]")].filter((el) => {
        const s = getComputedStyle(el); const r = el.getBoundingClientRect();
        if (r.height < 20 || r.width < 20) return false;
        const bg = s.backgroundColor;
        if (bg === "rgba(0, 0, 0, 0)") return false;
        const m = bg.match(/(\d+),\s*(\d+),\s*(\d+)/);
        if (!m) return false;
        const [r1, g1, b1] = [m[1], m[2], m[3]].map(Number);
        // 유채색이면 컨트롤로 본다. 흰/회색이어도 **테두리가 있으면** 컨트롤이다 —
        // 29cm의 ghost-outline이 정확히 흰 배경에 회색 테두리라, 유채색만 세면 놓친다.
        if (Math.max(r1, g1, b1) - Math.min(r1, g1, b1) > 18) return true;
        return parseFloat(s.borderTopWidth) >= 1 || s.boxShadow !== "none";
      }).length;
      return { coloured, imgs: document.querySelectorAll("img").length,
        text: document.body.innerText.length, title: document.title.slice(0, 40),
        frames: document.querySelectorAll("iframe").length };
    });
    if (status >= 400 || /attention required|보안|access denied|403|blocked/i.test(probe.title)) {
      verdict = "blocked"; detail = `HTTP ${status} ${probe.title}`;
    } else if (probe.coloured >= 1) {
      verdict = "renders"; detail = `유채색 컨트롤 ${probe.coloured}${probe.frames ? ` · iframe ${probe.frames}` : ""}`;
    } else if (probe.imgs >= 5) {
      verdict = "images-only"; detail = `img ${probe.imgs} · 유채색 컨트롤 0`;
    } else {
      verdict = "index-only"; detail = `본문 ${probe.text}자 · img ${probe.imgs}`;
    }
  } catch (e) { detail = String(e.message).slice(0, 44); }
    await page.close().catch(() => {});
    await context.close().catch(() => {});
    verdictFor = { id, country, verdict, detail, url };
    if (verdict === "renders") break;          // 재기 좋은 표면을 찾았으면 멈춘다
  }
  rows.push(verdictFor);
  const r = verdictFor;
  if (!argv.includes("--json")) console.log(`  ${r.verdict.padEnd(12)} ${r.id.padEnd(18)} ${r.country.padEnd(3)} ${r.detail}`);
}
await browser.close();

if (argv.includes("--json")) { console.log(JSON.stringify(rows, null, 2)); process.exit(0); }
const tally = {};
for (const r of rows) tally[r.verdict] = (tally[r.verdict] ?? 0) + 1;
console.log(`\n표본 ${rows.length}개`);
for (const [k, n] of Object.entries(tally).sort((a, b) => b[1] - a[1]))
  console.log(`  ${k.padEnd(12)} ${String(n).padStart(3)}  ${(100 * n / rows.length).toFixed(0)}%`);
