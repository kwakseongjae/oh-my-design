#!/usr/bin/env node
/**
 * diagnose-palette.mjs — 선언된 색이 표면에 **없을 때 무엇이 대신 있는지** 본다.
 *
 * 왜 (2026-09-17). `prose-derived` 111개의 색 근거율이 43%고, 28개는 25% 미만이다.
 * 그런데 "없다"에는 두 가지가 섞여 있다:
 *
 *   틀림     선언 `#41c9b4`인데 표면의 청록은 `#1e7b65` — 같은 역할, 다른 값
 *   홈에 없음 선언값이 내부 페이지·다크모드·오류 상태에만 쓰인다
 *
 * 둘은 처방이 반대다. 앞은 실측값으로 **교체**, 뒤는 올바른 표면을 찾아 **클레임**.
 * 근사색이 있는지로 가른다 — 역할이 같은 색이 근처에 있으면 값이 틀린 쪽이다.
 *
 * 거리는 가중 RGB(빨강 2 / 초록 4 / 파랑 3)로 잰다. 정확하진 않지만 "같은 색인데 조금
 * 다름"과 "완전히 다른 색"을 가르기엔 충분하고, 설명 가능하다.
 *
 * **쓰지 않는다.**
 *
 * usage: node scripts/diagnose-palette.mjs <id> [<id> ...]
 */
import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";
import { chromium } from "playwright-core";

const WEB = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const REFS = join(WEB, "references");
const CHROME = process.env.OMD_CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const REAL_UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36";

const rgb = (h) => { const s = h.replace("#", ""); return [0, 2, 4].map((i) => parseInt(s.slice(i, i + 2), 16)); };
/** 가중 RGB 거리. 0이면 동일, ~40 이하면 육안으로 거의 같은 색. */
const dist = (a, b) => { const [r1,g1,b1] = rgb(a), [r2,g2,b2] = rgb(b);
  return Math.sqrt(2*(r1-r2)**2 + 4*(g1-g2)**2 + 3*(b1-b2)**2); };

const browser = await chromium.launch({ executablePath: CHROME, headless: true,
  args: ["--disable-http2", "--disable-blink-features=AutomationControlled"] });

for (const id of process.argv.slice(2).filter((a) => !a.startsWith("--"))) {
  const d = join(REFS, id, "DESIGN.md");
  if (!existsSync(d)) { console.log(`\n### ${id} — 없음`); continue; }
  const front = yaml.load(readFileSync(d, "utf8").match(/^---\n([\s\S]*?)\n---/)[1], { schema: yaml.JSON_SCHEMA });
  const declared = Object.entries(front.tokens?.colors ?? {})
    .filter(([, v]) => typeof v === "string" && /^#[0-9a-f]{6}$/i.test(v))
    .map(([k, v]) => [k, v.toLowerCase()]);
  if (!declared.length || !front.homepage) { console.log(`\n### ${id} — 색 또는 homepage 없음`); continue; }

  const ctx = await browser.newContext({ userAgent: REAL_UA, viewport: { width: 1440, height: 1000 },
    locale: "ko-KR", extraHTTPHeaders: { "Accept-Language": "ko-KR,ko;q=0.9,en;q=0.8" } });
  const page = await ctx.newPage();
  let live = [];
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
      return [...m].sort((a, b) => b[1] - a[1]);
    });
  } catch (e) { console.log(`\n### ${id} — 접근 실패: ${String(e.message).slice(0, 40)}`); await ctx.close(); continue; }
  await ctx.close();

  const liveSet = new Set(live.map(([c]) => c));
  const exact = [], near = [], gone = [];
  for (const [role, c] of declared) {
    if (liveSet.has(c)) { exact.push(role); continue; }
    let best = null;
    for (const [lc, n] of live) { const dd = dist(c, lc); if (!best || dd < best.d) best = { c: lc, d: dd, n }; }
    if (best && best.d <= 60) near.push({ role, declared: c, live: best.c, d: Math.round(best.d), n: best.n });
    else gone.push({ role, declared: c, nearest: best ? `${best.c} (거리 ${Math.round(best.d)})` : "-" });
  }
  const verdict = gone.length > declared.length * 0.5 ? "⚠ 대부분 표면에 없음"
    : near.length >= gone.length ? "값이 어긋남 (근사색 있음)" : "혼재";
  console.log(`\n### ${id}  선언 ${declared.length}  일치 ${exact.length}  근사 ${near.length}  없음 ${gone.length}   → ${verdict}`);
  console.log(`    라이브 상위: ${live.slice(0, 5).map(([c, n]) => `${c}(${n})`).join(" ")}`);
  for (const x of near.slice(0, 5)) console.log(`    근사  ${x.role.padEnd(16)} 선언 ${x.declared} ↔ 라이브 ${x.live} (거리 ${x.d}, ${x.n}회)`);
  for (const x of gone.slice(0, 5)) console.log(`    없음  ${x.role.padEnd(16)} 선언 ${x.declared}  최근접 ${x.nearest}`);
}
await browser.close();
