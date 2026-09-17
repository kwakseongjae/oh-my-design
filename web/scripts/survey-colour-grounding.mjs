#!/usr/bin/env node
/**
 * survey-colour-grounding.mjs — 선언된 색이 **브랜드 표면에 실제로 존재하는지** 잰다.
 *
 * 왜 (2026-09-17). `verification_v2` 없는 299건 중 번들을 가진 21개를 "가장 싼 묶음"으로
 * 보고 착수했다가, 그 21개가 선언한 색 296개 중 **118개(40%)만 자기 캡쳐에 있다**는 걸
 * 발견했다. `note`를 끝까지 따라가니 문서의 다섯 색이 7월 캡쳐에도, 오늘 라이브에도 없다 —
 * 두 달 간격 독립 관측 둘이 일치한다. 값이 틀린 것이다.
 *
 * 그렇다면 `prose-derived` 111개를 승격시키는 작업은 **틀린 값을 검증된 것으로 만드는
 * 일**이 될 수 있다. 그 규모를 모르는 채로 진행하면 안 된다.
 *
 * 두 곳에 대조한다:
 *   bundle  7월 캡쳐 (있는 경우)
 *   live    오늘의 브랜드 표면
 *
 * 한쪽에만 없으면 드리프트일 수 있다. **양쪽 다 없으면 관측된 적 없는 값이다.**
 *
 * 색만 본다 — 치수·폰트보다 명확하고, 팔레트가 레퍼런스의 뼈대다.
 * **쓰지 않는다. 분류만 한다.**
 *
 * usage: node scripts/survey-colour-grounding.mjs [--limit N] [--json]
 */
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";
import { chromium } from "playwright-core";

const WEB = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const ROOT = resolve(WEB, "..");
const REFS = join(WEB, "references");
const CHROME = process.env.OMD_CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const REAL_UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36";

const argv = process.argv.slice(2);
const opt = (n, d) => { const i = argv.indexOf(`--${n}`); return i >= 0 ? argv[i + 1] : d; };

const hex = (v) => { const s = String(v).trim().toLowerCase();
  const m = s.match(/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)\s*(?:[,/]\s*([\d.]+)\s*)?\)$/);
  if (m && (m[4] === undefined || Number(m[4]) === 1))
    return "#" + [m[1], m[2], m[3]].map((n) => Math.round(Number(n)).toString(16).padStart(2, "0")).join("");
  return s; };

const targets = [];
for (const id of readdirSync(REFS).sort()) {
  const d = join(REFS, id, "DESIGN.md");
  if (!existsSync(d)) continue;
  let front; try { front = yaml.load(readFileSync(d, "utf8").match(/^---\n([\s\S]*?)\n---/)[1], { schema: yaml.JSON_SCHEMA }); } catch { continue; }
  if (front?.verification_v2) continue;
  if (String(front?.tokens?.source) !== "prose-derived") continue;
  const colours = Object.values(front.tokens?.colors ?? {})
    .filter((v) => typeof v === "string" && /^#[0-9a-f]{3,8}$/i.test(v)).map((v) => v.toLowerCase());
  if (!colours.length) continue;
  targets.push({ id, country: front.country ?? "?", homepage: front.homepage, colours });
}
const limit = Number(opt("limit", "0"));
const list = limit > 0 ? targets.slice(0, limit) : targets;

const browser = await chromium.launch({ executablePath: CHROME, headless: true,
  args: ["--disable-http2", "--disable-blink-features=AutomationControlled"] });
const rows = [];
for (const t of list) {
  // 1) 번들
  let inBundle = null;
  const bp = join(ROOT, "artifacts", "reference-evidence", `${t.id}.json`);
  if (existsSync(bp)) {
    try {
      const b = JSON.parse(readFileSync(bp, "utf8"));
      const seen = new Set();
      for (const s of b.surfaces ?? []) for (const e of s.elements ?? []) for (const v of Object.values(e.style ?? {})) seen.add(hex(v));
      inBundle = t.colours.filter((c) => seen.has(c)).length;
    } catch { /* ignore */ }
  }
  // 2) 라이브
  let live = null, note = "";
  if (t.homepage) {
    const ctx = await browser.newContext({ userAgent: REAL_UA, viewport: { width: 1440, height: 1000 },
      locale: "ko-KR", extraHTTPHeaders: { "Accept-Language": "ko-KR,ko;q=0.9,en;q=0.8" } });
    const page = await ctx.newPage();
    try {
      const resp = await page.goto(t.homepage, { waitUntil: "domcontentloaded", timeout: 22000 });
      if ((resp?.status() ?? 0) >= 400) note = `HTTP ${resp.status()}`;
      else {
        await page.waitForTimeout(2200);
        const seen = await page.evaluate(() => {
          const out = new Set();
          const toHex = (v) => { const m = String(v).match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/);
            if (!m) return null; if (m[4] !== undefined && Number(m[4]) < 1) return null;
            return "#" + [m[1], m[2], m[3]].map((n) => Number(n).toString(16).padStart(2, "0")).join(""); };
          for (const el of document.querySelectorAll("*")) {
            const s = getComputedStyle(el);
            for (const k of ["color", "backgroundColor", "borderTopColor", "borderBottomColor", "fill"]) {
              const h = toHex(s[k]); if (h) out.add(h);
            }
          }
          return [...out];
        });
        const set = new Set(seen);
        live = t.colours.filter((c) => set.has(c)).length;
      }
    } catch (e) { note = String(e.message).slice(0, 26); }
    await page.close().catch(() => {}); await ctx.close().catch(() => {});
  }
  const row = { ...t, declared: t.colours.length, inBundle, live, note };
  rows.push(row);
  if (!argv.includes("--json")) {
    const pb = inBundle === null ? "  -" : `${String(Math.round(100 * inBundle / row.declared)).padStart(3)}%`;
    const pl = live === null ? "  -" : `${String(Math.round(100 * live / row.declared)).padStart(3)}%`;
    console.log(`  ${t.id.padEnd(18)} ${String(t.country).padEnd(3)} 선언 ${String(row.declared).padStart(2)}  번들 ${pb}  라이브 ${pl}  ${note}`);
  }
}
await browser.close();

if (argv.includes("--json")) { console.log(JSON.stringify(rows, null, 2)); process.exit(0); }
const withLive = rows.filter((r) => r.live !== null);
const sum = (f) => withLive.reduce((a, r) => a + f(r), 0);
console.log(`\n라이브 확인된 ${withLive.length}/${rows.length}개`);
console.log(`  선언된 색 합계 ${sum((r) => r.declared)}  ·  라이브에 존재 ${sum((r) => r.live)}  (${Math.round(100 * sum((r) => r.live) / sum((r) => r.declared))}%)`);
const bad = withLive.filter((r) => r.live / r.declared < 0.25).length;
console.log(`  라이브 근거율 25% 미만인 레퍼런스: ${bad}/${withLive.length}`);
