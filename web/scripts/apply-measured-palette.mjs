#!/usr/bin/env node
/**
 * apply-measured-palette.mjs — 어긋난 선언 색을 **라이브 실측값으로 교체**한다.
 *
 * 왜 (2026-09-17). `prose-derived` 111개의 선언 색 중 43%만 표면에 존재한다. 하위 28개를
 * 색거리로 진단하니 19개가 "역할이 같은 근사색이 라이브에 있는" 모양이다 —
 * `meituan` brand `#ffc300` ↔ 실제 `#ffd100`, `ridi` ink `#222222` ↔ 실제 `#141414`.
 * 지어낸 값이 아니라 **부정확하게 옮긴 값**이다. 그래서 지우지 않고 교체한다.
 * 7월 배치가 못 재는 값을 지워서 컴포넌트를 잃은 것과 반대 방향이다.
 *
 * **교체 조건 — 넷을 모두 만족할 때만.** 하나라도 어긋나면 남기고 보고한다.
 *   1. 색거리 ≤ MAX_DISTANCE — 같은 색의 다른 명도지 다른 색이 아니다
 *   2. 라이브 출현 ≥ MIN_OCCURRENCES — 한 번 스친 색을 브랜드 토큰으로 승격하지 않는다
 *   3. 그 라이브 색이 이미 다른 역할에 선언돼 있지 않다 — 두 역할이 한 값으로 붕괴하면
 *      팔레트가 정보를 잃는다
 *   4. 정확히 일치하는 선언이 이미 없다 — 맞는 값을 건드리지 않는다
 *
 * 규칙 3이 중요하다. `#222222`와 `#333333`이 둘 다 라이브의 `#141414`에 가깝다고 둘 다
 * 바꾸면 `ink`와 `charcoal`이 같은 값이 된다. 문서가 구분한 역할을 도구가 뭉개면 안 된다.
 *
 * ⚠ **`--write`를 쓰지 말 것 — 팔레트만 바꾸면 문서가 자기모순이 된다.**
 *
 * 2026-09-17에 `ridi`에 한 번 적용해 보고 되돌렸다. `tokens.colors`의 5개 색을 실측값으로
 * 바꿨더니 옛 값이 문서에 27·12·9·7·15회 남았다 — `tokens.components.button-outline.fg`,
 * `chip.bg`, `nav-top.fg`, 그리고 본문 산문까지. 결과는 `colors.ink = #141414`인데
 * `button-outline.fg = #222222`인 문서다.
 *
 * 19개 전수 확인: **선언된 색의 100%가 컴포넌트나 본문에서 재사용된다.** 예외가 없다.
 * 색 하나를 고치려면 그 색을 쓰는 컴포넌트와 문장을 함께 다시 써야 하고, 그건 도구가
 * 아니라 저술이다.
 *
 * 그래서 이 스크립트는 **진단기로 쓴다** — 사람이 팔레트를 다시 유도할 때 "라이브의
 * 실측값이 무엇이고 몇 번 나오는가"를 알려주는 용도다. `--write`는 남겨 두지만, 쓰려면
 * 같은 커밋에서 컴포넌트와 본문까지 함께 고쳐야 한다.
 *
 * 가드 셋은 전부 실제 오제안에서 나왔다 — 채도 층(베이지를 회색으로), 미측정 모드
 * (야간 독서모드 색을 주간 홈에서), 역할 충돌(두 역할이 한 값으로 붕괴).
 *
 * usage:
 *   node scripts/apply-measured-palette.mjs <id> [<id> ...]           # dry-run (권장)
 *   node scripts/apply-measured-palette.mjs <id> --write              # 본문까지 함께 고칠 때만
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";
import { chromium } from "playwright-core";

const WEB = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const REFS = join(WEB, "references");
const CHROME = process.env.OMD_CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const REAL_UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36";
const MAX_DISTANCE = 60;
const MIN_OCCURRENCES = 5;

const rgb = (h) => { const s = h.replace("#", ""); return [0, 2, 4].map((i) => parseInt(s.slice(i, i + 2), 16)); };
const dist = (a, b) => { const [r1,g1,b1] = rgb(a), [r2,g2,b2] = rgb(b);
  return Math.sqrt(2*(r1-r2)**2 + 4*(g1-g2)**2 + 3*(b1-b2)**2); };

/** 채도. 최대-최소 채널. 0이면 무채색. */
const chroma = (h) => { const [r, g, b] = rgb(h); return Math.max(r, g, b) - Math.min(r, g, b); };

/**
 * 가중 RGB 거리는 **밝은 색의 채도 차이에 눈이 먼다.** 첫 dry-run에서 `ridi`의
 * `sepia: #f4ecd8`(독서모드 베이지, 채도 28)을 `#e6e6e6`(순회색, 채도 0)로 바꾸자고
 * 했다 — 세 채널이 모두 높아 거리가 34로 작게 나오지만 브랜드 의도가 사라진다.
 *
 * 그래서 채도 층을 넘는 교체를 막는다. 유채색을 무채색으로, 혹은 그 반대로 바꾸지 않는다.
 */
/**
 * 측정한 표면에 존재하지 않는 **모드**의 역할은 건드리지 않는다.
 *
 * 두 번째 dry-run에서 `ridi`의 `reader-night-fg: #d8d8d8`(야간 독서모드 전경)을 밝은
 * 홈페이지의 `#e6e6e6`로 바꾸자고 했다. 야간 모드 색이 주간 홈에 나올 리가 없고, 거기
 * 없다는 것이 값이 틀렸다는 뜻도 아니다. 팔레트는 여러 모드를 담는데 우리는 한 모드만
 * 쟀다 — 재지 않은 모드에 대해 발언하지 않는다.
 */
const OTHER_MODE = /night|dark|inverse|inverted|on-dark|sepia|reader|print|high-contrast/i;

const ACHROMATIC = 12;
function chromaCompatible(a, b) {
  const ca = chroma(a), cb = chroma(b);
  if ((ca <= ACHROMATIC) !== (cb <= ACHROMATIC)) return false;   // 유채/무채 층이 다르다
  return Math.abs(ca - cb) <= 40;                                 // 같은 층 안에서도 급격한 변화는 막는다
}

const write = process.argv.includes("--write");
const ids = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const browser = await chromium.launch({ executablePath: CHROME, headless: true,
  args: ["--disable-http2", "--disable-blink-features=AutomationControlled"] });

for (const id of ids) {
  const file = join(REFS, id, "DESIGN.md");
  if (!existsSync(file)) { console.log(`\n### ${id} — 없음`); continue; }
  const raw = readFileSync(file, "utf8");
  const front = yaml.load(raw.match(/^---\n([\s\S]*?)\n---/)[1], { schema: yaml.JSON_SCHEMA });
  const declared = Object.entries(front.tokens?.colors ?? {})
    .filter(([, v]) => typeof v === "string" && /^#[0-9a-f]{6}$/i.test(v))
    .map(([k, v]) => [k, v.toLowerCase()]);
  if (!declared.length || !front.homepage) { console.log(`\n### ${id} — 대상 아님`); continue; }

  const ctx = await browser.newContext({ userAgent: REAL_UA, viewport: { width: 1440, height: 1000 },
    locale: "ko-KR", extraHTTPHeaders: { "Accept-Language": "ko-KR,ko;q=0.9,en;q=0.8" } });
  const page = await ctx.newPage();
  let live;
  try {
    await page.goto(front.homepage, { waitUntil: "domcontentloaded", timeout: 25000 });
    await page.waitForTimeout(2500);
    live = await page.evaluate(() => {
      const m = new Map();
      const toHex = (v) => { const x = String(v).match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/);
        if (!x) return null; if (x[4] !== undefined && Number(x[4]) < 1) return null;
        return "#" + [x[1], x[2], x[3]].map((n) => Number(n).toString(16).padStart(2, "0")).join(""); };
      for (const el of document.querySelectorAll("*")) {
        const s = getComputedStyle(el);
        for (const k of ["color", "backgroundColor", "borderTopColor", "fill"]) {
          const h = toHex(s[k]); if (h) m.set(h, (m.get(h) ?? 0) + 1);
        }
      }
      return [...m];
    });
  } catch (e) { console.log(`\n### ${id} — 접근 실패 ${String(e.message).slice(0, 40)}`); await ctx.close(); continue; }
  await ctx.close();

  const liveMap = new Map(live);
  const declaredValues = new Set(declared.map(([, v]) => v));
  const claimedLive = new Set();
  const swaps = [], kept = [];
  for (const [role, value] of declared) {
    if (liveMap.has(value)) { kept.push({ role, value, why: "이미 일치" }); continue; }
    let best = null;
    for (const [lc, n] of live) {
      if (n < MIN_OCCURRENCES) continue;
      const d = dist(value, lc);
      if (!best || d < best.d) best = { c: lc, d, n };
    }
    if (!best || best.d > MAX_DISTANCE) { kept.push({ role, value, why: best ? `최근접 거리 ${Math.round(best.d)}` : "후보 없음" }); continue; }
    if (OTHER_MODE.test(role)) { kept.push({ role, value, why: "측정하지 않은 모드의 역할" }); continue; }
    if (!chromaCompatible(value, best.c)) { kept.push({ role, value, why: `${best.c}는 채도 층이 다르다 (${chroma(value)} vs ${chroma(best.c)})` }); continue; }
    if (declaredValues.has(best.c)) { kept.push({ role, value, why: `${best.c}는 이미 다른 역할이 선언` }); continue; }
    if (claimedLive.has(best.c)) { kept.push({ role, value, why: `${best.c}를 다른 역할이 먼저 가져감` }); continue; }
    claimedLive.add(best.c);
    swaps.push({ role, from: value, to: best.c, d: Math.round(best.d), n: best.n });
  }

  console.log(`\n### ${id}  선언 ${declared.length}  교체 ${swaps.length}  유지 ${kept.length}`);
  for (const s of swaps) console.log(`    교체  ${s.role.padEnd(18)} ${s.from} → ${s.to}  (거리 ${s.d}, 라이브 ${s.n}회)`);
  for (const k of kept.slice(0, 6)) console.log(`    유지  ${k.role.padEnd(18)} ${k.value}  — ${k.why}`);
  if (kept.length > 6) console.log(`    … 유지 ${kept.length - 6}건 더`);

  if (write && swaps.length) {
    let next = raw;
    for (const s of swaps) {
      // colors 블록 안의 해당 역할만 바꾼다
      const role = s.role.replace(/[.*+?^${}()|[\]\\-]/g, "\\$&");
      const re = new RegExp(`(^\\s*"?${role}"?:\\s*["']?)${s.from}(["']?)`, "mi");
      if (re.test(next)) next = next.replace(re, `$1${s.to}$2`);
      else console.log(`    ⚠ ${s.role} 치환 실패 — 형식 불일치`);
    }
    writeFileSync(file, next);
    console.log(`    → 적용됨`);
  }
}
await browser.close();
if (!write) console.log("\n(dry-run — 적용하려면 --write)");
