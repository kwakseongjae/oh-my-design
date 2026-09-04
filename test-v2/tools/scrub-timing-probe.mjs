#!/usr/bin/env node
/**
 * scrub-timing-probe.mjs — "스크럽/핀 애니메이션이 **섹션 진행의 몇 %에서 정착**하는가"를 잰다.
 *
 * 왜: 힉스젠 r2(70점) 피드백 — "다 펼쳐지는 시점이 스크롤이 해당 섹션을 아예 지나가는 시점이라
 * 아쉽다". 즉 스크럽 종점(progress=1)이 섹션 퇴장과 겹쳐 결과 상태를 감상할 구간이 0이다.
 * 이 도구는 그 간극을 vh 로 수치화하고, 좋은 레퍼런스에서 그 값이 얼마인지 재는 데도 쓴다.
 *
 * 두 가지 모드 (자동 선택)
 *   A. gsap — `ScrollTrigger.getAll()` 이 있으면 각 트리거의 start/end(px 스크롤), pin/scrub,
 *      trigger 엘리먼트의 문서상 top/bottom 을 직접 읽는다. 정확하다.
 *   B. sampled — GSAP 이 없으면 STEP(기본 300px) 간격으로 스크롤하며 각 후보 섹션 안 엘리먼트의
 *      transform/opacity/clip-path/background-position 을 스냅샷 한다. 섹션 창(window) 안에서
 *      **마지막으로 변화가 관측된 스크롤 위치**를 정착점으로 본다. 근사값이다.
 *   (+) CSS scroll-driven animation(`animation-timeline`)이 있으면 `animation-range` 종점을
 *      함께 보고한다 — 가능한 범위에서만(view() 기준의 %/vh 만 해석).
 *
 * 공통 좌표계 — 어떤 사이트에서든 같은 수를 내려고 섹션 창을 이렇게 정의한다:
 *   enter = max(0, secTop - vh)   // 섹션 상단이 뷰포트 하단에 닿는 스크롤
 *   exit  = secBottom             // 섹션 하단이 뷰포트 상단을 지나는 스크롤
 *   settlePct = (settle - enter) / (exit - enter) × 100
 *   leadVh    = (exit - settle) / vh          // 정착 후 남은 감상 구간. 0 이하 = 결함
 *   pinLeadVh = (secBottom - vh - settle) / vh // 스티키/핀이 풀리기 전 남은 구간
 *
 * usage:
 *   node docs/research/scrub-timing-probe.mjs <file-or-url ...> [--json] [--step 300]
 *        [--label <name>] [--wait 1200] [--out <file.json>] [--viewport 1440x900]
 *
 * 출력: 트리거(또는 섹션)별 표 + `SCRUB_PROBE_DONE targets=<n> defects=<n> settle_median=<%>`
 */
import { chromiumRuntime } from "../../test-v2/tools/lib/browser.mjs";
import { existsSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const argv = process.argv.slice(2);
const flag = (name, dflt) => { const i = argv.indexOf("--" + name); return i >= 0 ? argv[i + 1] : dflt; };
const asJson = argv.includes("--json");
const STEP = Number(flag("step", 300));
const WAIT = Number(flag("wait", 1200));
const OUT = flag("out", null);
const GSAP_ONLY = argv.includes("--gsap-only");   /* 샘플 모드(근사값)를 건너뛰고 GSAP 사이트만 잰다 */
const [VW, VH] = String(flag("viewport", "1440x900")).split("x").map(Number);
const VIEWPORT = { width: VW || 1440, height: VH || 900 };
const targets = argv.filter((a, i) => !a.startsWith("--") && !(i > 0 && argv[i - 1] && argv[i - 1].startsWith("--") && !["--json"].includes(argv[i - 1])));
if (!targets.length) { console.error("usage: scrub-timing-probe.mjs <file-or-url ...> [--json] [--step 300] [--out f.json]"); process.exit(2); }

/* ---------------------------------------------------------------- in-page: GSAP 모드 */
const READ_GSAP = () => {
  const ST = window.ScrollTrigger || (window.gsap && window.gsap.core && window.ScrollTrigger);
  if (!ST || typeof ST.getAll !== "function") return null;
  const vh = innerHeight;
  const docH = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  const name = (el) => {
    if (!el || !el.tagName) return "(none)";
    if (el.id) return "#" + el.id;
    const cls = (el.className && String(el.className).trim().split(/\s+/)[0]) || "";
    return el.tagName.toLowerCase() + (cls ? "." + cls : "");
  };
  return {
    vh, docH,
    triggers: ST.getAll().map((t, i) => {
      const el = t.trigger || t.pinnedContainer;
      let secTop = null, secH = null;
      if (el && el.getBoundingClientRect) { const r = el.getBoundingClientRect(); secTop = Math.round(r.top + scrollY); secH = Math.round(r.height); }
      /* 정착점은 트리거의 end 가 아니라 **타임라인의 마지막 트윈이 끝나는 시각**이다.
         핀을 길게 잡고 트윈을 일찍 끝내는 것이 바로 우리가 권하는 수정이므로, 그 형태를
         PASS 로 읽으려면 애니메이션 내부를 봐야 한다. 자식이 없는 단일 트윈은 비율 1. */
      const anim = t.animation;
      let settleRatio = 1, animDur = null;
      try {
        if (anim && typeof anim.duration === "function" && anim.duration() > 0) {
          animDur = +anim.duration().toFixed(3);
          if (typeof anim.getChildren === "function") {
            let maxEnd = 0;
            for (const k of anim.getChildren(true, true, true)) {
              const e = (typeof k.startTime === "function" ? k.startTime() : 0) + (typeof k.duration === "function" ? k.duration() : 0);
              if (e > maxEnd) maxEnd = e;
            }
            if (maxEnd > 0) settleRatio = Math.min(1, maxEnd / anim.duration());
          }
        }
      } catch { /* 비율을 못 읽으면 보수적으로 1 */ }
      return {
        i, kind: "gsap",
        trigger: name(el),
        start: Math.round(t.start), end: Math.round(t.end),
        pin: !!t.pin, pinType: t.pin ? name(t.pin) : null,
        scrub: t.vars && t.vars.scrub !== undefined ? t.vars.scrub : null,
        once: !!(t.vars && t.vars.once),
        toggleActions: (t.vars && t.vars.toggleActions) || null,
        rawStart: (t.vars && String(t.vars.start)) || null,
        rawEnd: (t.vars && String(t.vars.end)) || null,
        secTop, secH,
        animDur, settleRatio: +settleRatio.toFixed(3),
      };
    }),
  };
};

/* ---------------------------------------------------------------- in-page: CSS scroll-driven */
const READ_CSS_TIMELINE = () => {
  const out = [];
  for (const sheet of document.styleSheets) {
    let rules; try { rules = sheet.cssRules; } catch { continue; }
    if (!rules) continue;
    const walk = (list) => { for (const r of list) {
      if (r.cssRules) { walk(r.cssRules); continue; }
      const t = r.style && (r.style.getPropertyValue("animation-timeline") || r.style.getPropertyValue("view-timeline"));
      if (!t) continue;
      out.push({ selector: r.selectorText || "(unknown)", timeline: t.trim(),
        range: (r.style.getPropertyValue("animation-range") || "").trim() || null });
    } };
    walk(rules);
  }
  // 인라인 스타일
  for (const el of document.querySelectorAll("[style*='animation-timeline']")) {
    out.push({ selector: (el.id ? "#" + el.id : el.tagName.toLowerCase()) + "[inline]",
      timeline: el.style.animationTimeline || "", range: el.style.animationRange || null });
  }
  /* CSSOM 폴백 — 엔진이 animation-timeline 을 모르면 선언 자체가 CSSOM 에서 사라진다.
     그때도 규칙은 파일 안에 있으므로 <style> 원문을 읽는다(구조 없이 range 만). */
  if (!out.length) {
    let raw = "";
    for (const st of document.querySelectorAll("style")) raw += st.textContent || "";
    for (const el of document.querySelectorAll("[style]")) raw += ";" + el.getAttribute("style");
    const tl = raw.match(/animation-timeline\s*:/g) || [];
    for (const m of raw.matchAll(/animation-range\s*:\s*([^;}"']+)/g))
      out.push({ selector: "(raw css text)", timeline: "view()", range: m[1].trim(), source: "text" });
    if (tl.length && !out.length) out.push({ selector: "(raw css text)", timeline: "view()", range: "(default cover 0% cover 100%)", source: "text" });
  }
  return out;
};

/* ---------------------------------------------------------------- in-page: 샘플 모드 */
const TAG_SECTIONS = () => {
  const vw = innerWidth;
  const docH = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  const abs = (el) => { const r = el.getBoundingClientRect(); return { top: r.top + scrollY, h: r.height, w: r.width }; };
  const vis = (el) => { const cs = getComputedStyle(el); return cs.display !== "none" && cs.visibility !== "hidden"; };
  const qualifies = (k) => { if (!vis(k)) return false; if (getComputedStyle(k).position === "fixed") return false; const a = abs(k); return a.h >= 150 && a.w >= vw * 0.3; };
  let container = document.body, best = null;
  for (const el of [document.body, ...document.querySelectorAll("body *")]) {
    const a = abs(el); if (el !== document.body && a.h < docH * 0.5) continue;
    const kids = [...el.children].filter(qualifies); if (kids.length < 2) continue;
    if (!best || kids.length > best.kids.length) best = { el, kids };
  }
  const kids = best ? best.kids : [...container.children].filter(qualifies);
  const secs = [];
  kids.forEach((el, i) => {
    el.setAttribute("data-omdsec", String(i));
    const a = abs(el);
    secs.push({ i, tag: el.id ? "#" + el.id : el.tagName.toLowerCase() + (el.className ? "." + String(el.className).trim().split(/\s+/)[0] : ""), secTop: Math.round(a.top), secH: Math.round(a.h) });
    let n = 0;
    for (const d of el.querySelectorAll("*")) { if (n > 260) break; const r = d.getBoundingClientRect(); if (r.width < 24 || r.height < 24) continue; d.setAttribute("data-omdw", i + ":" + n); n++; }
  });
  return { secs, vh: innerHeight, docH };
};
const SAMPLE = () => {
  const out = {};
  for (const el of document.querySelectorAll("[data-omdw]")) {
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    out[el.getAttribute("data-omdw")] = [
      cs.transform === "none" ? "n" : cs.transform,
      (+cs.opacity).toFixed(2),
      cs.clipPath === "none" ? "n" : cs.clipPath,
      cs.backgroundPosition || "",
      Math.round(r.width) + "x" + Math.round(r.height),
    ].join("|");
  }
  return out;
};

/* ---------------------------------------------------------------- 판정 */
const pct = (v) => (v === null || !isFinite(v) ? null : +v.toFixed(1));
function shape(entry, vh) {
  const { secTop, secH, settle, pin } = entry;
  if (settle === null) return { ...entry, enter: null, exit: null, settlePct: null, leadVh: null, pinLeadVh: null, verdict: "unmeasured" };
  /* 핀(GSAP pin) 구간은 스페이서가 붙어 rect 로는 잴 수 없다 — start/end 가 곧 무대의 체류 구간이다. */
  let enter, exit, pinExit;
  if (pin && entry.start !== null && entry.end !== null) {
    enter = Math.max(0, entry.start - vh); exit = entry.end + vh; pinExit = entry.end;
  } else {
    if (secTop === null || !secH) return { ...entry, enter: null, exit: null, settlePct: null, leadVh: null, pinLeadVh: null, verdict: "unmeasured" };
    enter = Math.max(0, secTop - vh); exit = secTop + secH; pinExit = secTop + secH - vh;
  }
  const span = exit - enter;
  const settlePct = span > 0 ? ((settle - enter) / span) * 100 : null;
  const leadVh = (exit - settle) / vh;
  const pinLeadVh = (pinExit - settle) / vh;
  // 결함: 정착 후 감상 구간이 0.5vh 미만이거나(=섹션이 이미 나가고 있다), 핀이 풀리는 순간과 겹친다
  const verdict = leadVh < 0.5 || pinLeadVh < 0.15 ? "DEFECT" : leadVh < 1.0 ? "TIGHT" : "OK";
  return { ...entry, enter: Math.round(enter), exit: Math.round(exit), settlePct: pct(settlePct), leadVh: pct(leadVh), pinLeadVh: pct(pinLeadVh), verdict };
}

/* ---------------------------------------------------------------- 실행 */
const { chromium, launchOptions } = chromiumRuntime();
const browser = await chromium.launch({ headless: true, ...launchOptions });
const report = [];
for (const t of targets) {
  const isUrl = /^https?:\/\//i.test(t);
  const abs = isUrl ? t : resolve(t);
  if (!isUrl && !existsSync(abs)) { report.push({ target: t, fatal: "missing" }); continue; }
  const context = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 1 });
  const page = await context.newPage();
  page.on("pageerror", () => {});
  try {
    await page.goto(isUrl ? abs : "file://" + abs, { waitUntil: isUrl ? "domcontentloaded" : "load", timeout: 45000 });
    await page.waitForTimeout(WAIT);
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.waitForTimeout(400);

    const cssTl = await page.evaluate(READ_CSS_TIMELINE);
    /* Lenis/Locomotive 류 가상 스크롤: 문서가 1뷰포트인데 내부 트랙이 변환으로 움직인다.
       window.scrollTo 가 먹지 않으므로 샘플 모드로는 "확인 못 함"으로 남긴다. */
    const virt = await page.evaluate(() => {
      const docH = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      const libs = ["lenis", "Lenis", "locomotive", "LocomotiveScroll", "__NEXT_DATA__scroll"].filter((k) => k in window);
      const cls = document.documentElement.className + " " + document.body.className;
      return { docH, vh: innerHeight, libs, smoothCls: /lenis|has-scroll-smooth|locomotive/.test(cls) };
    });
    const virtual = virt.docH <= virt.vh * 1.6 && (virt.libs.length || virt.smoothCls || virt.docH <= virt.vh * 1.05);
    const g = await page.evaluate(READ_GSAP);
    let mode, entries, vh, docH;

    if (g && g.triggers.length) {
      mode = "gsap"; vh = g.vh; docH = g.docH;
      entries = g.triggers
        .filter((x) => x.scrub !== null && x.scrub !== false || x.pin)   // 스크럽/핀만 — 원샷 리빌은 대상 아님
        .map((x) => shape({ ...x, settle: Math.round(x.start + (x.end - x.start) * (x.settleRatio ?? 1)) }, vh));
    } else if (GSAP_ONLY) {
      mode = g ? "gsap-empty" : "no-gsap"; vh = virt.vh; docH = virt.docH; entries = [];
    } else if (virtual) {
      mode = "virtual-scroll";                 /* 확인 못 함 — 가상 스크롤은 이 도구의 사거리 밖 */
      vh = virt.vh; docH = virt.docH; entries = [];
    } else {
      mode = "sampled";
      const tagged = await page.evaluate(TAG_SECTIONS);
      vh = tagged.vh; docH = tagged.docH;
      const frames = [];
      for (let y = 0; y <= docH; y += STEP) {
        await page.evaluate((yy) => window.scrollTo({ top: yy, behavior: "instant" }), y);
        await page.waitForTimeout(260);
        frames.push({ y, snap: await page.evaluate(SAMPLE) });
        if (y + VIEWPORT.height >= docH) break;
        if (frames.length > 220) break;
      }
      entries = tagged.secs.map((s) => {
        const enter = Math.max(0, s.secTop - vh), exit = s.secTop + s.secH;
        let lastChange = null, changed = 0;
        const inWin = frames.filter((f) => f.y >= enter && f.y <= exit);   /* 창 밖의 변화(지연 로드 등)는 세지 않는다 */
        for (let k = 1; k < inWin.length; k++) {
          let diff = 0;
          for (const key of Object.keys(inWin[k].snap)) {
            if (!key.startsWith(s.i + ":")) continue;
            if (inWin[k - 1].snap[key] !== undefined && inWin[k].snap[key] !== inWin[k - 1].snap[key]) diff++;
          }
          if (diff >= 1) { lastChange = inWin[k].y; changed++; }
        }
        return shape({ i: s.i, kind: "sampled", trigger: s.tag, secTop: s.secTop, secH: s.secH,
          pin: null, scrub: null, start: null, end: null, changedFrames: changed, settle: lastChange }, vh);
      }).filter((e) => e.changedFrames > 0);
    }

    const measured = entries.filter((e) => e.settlePct !== null);
    const meds = measured.map((e) => e.settlePct).sort((a, b) => a - b);
    const median = meds.length ? (meds.length % 2 ? meds[(meds.length - 1) / 2] : +(((meds[meds.length / 2 - 1] + meds[meds.length / 2]) / 2)).toFixed(1)) : null;
    report.push({ target: t, mode, vh, docH, pageVh: +(docH / vh).toFixed(2), cssTimelines: cssTl,
      count: entries.length, defects: entries.filter((e) => e.verdict === "DEFECT").length,
      settleMedian: median, entries });
  } catch (e) {
    report.push({ target: t, fatal: String(e).split("\n")[0] });
  } finally { await context.close(); }
}
await browser.close();

if (OUT) writeFileSync(resolve(OUT), JSON.stringify(report, null, 1));
if (asJson) console.log(JSON.stringify(report, null, 1));
else for (const r of report) {
  if (r.fatal) { console.log(`\n${r.target}  FATAL ${r.fatal}`); continue; }
  console.log(`\n${r.target}\n  mode=${r.mode} vh=${r.vh} page=${r.pageVh}vh cssTimelines=${r.cssTimelines.length} settleMedian=${r.settleMedian}%`);
  const W = [4, 16, 8, 8, 6, 8, 8, 8, 10, 9, 8];
  console.log("  " + ["n\u00d7", "trigger", "start", "end", "scrub", "settle%", "leadVh", "pinLead", "secTop", "secH", "verdict"].map((h, i) => h.padEnd(W[i])).join(""));
  const groups = new Map();          /* 같은 창(trigger+start+end)의 트리거는 한 줄로 접는다 */
  for (const e of r.entries) { const k = `${e.trigger}|${e.start}|${e.end}|${e.kind === "sampled" ? e.secTop : ""}`; if (!groups.has(k)) groups.set(k, { ...e, n: 0 }); groups.get(k).n++; }
  for (const e of groups.values()) {
    const cols = [String(e.n), String(e.trigger).slice(0, 15), String(e.start ?? "-"), String(e.end ?? "-"), String(e.scrub ?? "-"), String(e.settlePct ?? "-"), String(e.leadVh ?? "-"), String(e.pinLeadVh ?? "-"), String(e.secTop ?? "-"), String(e.secH ?? "-"), e.verdict];
    console.log("  " + cols.map((c, i) => c.padEnd(W[i])).join(""));
  }
}
const all = report.filter((r) => !r.fatal);
const allMeds = all.flatMap((r) => r.entries.map((e) => e.settlePct)).filter((v) => v !== null).sort((a, b) => a - b);
const gMed = allMeds.length ? (allMeds.length % 2 ? allMeds[(allMeds.length - 1) / 2] : +(((allMeds[allMeds.length / 2 - 1] + allMeds[allMeds.length / 2]) / 2)).toFixed(1)) : null;
console.log(`\nSCRUB_PROBE_DONE targets=${report.length} entries=${all.reduce((a, r) => a + r.count, 0)} defects=${all.reduce((a, r) => a + r.defects, 0)} settle_median=${gMed}`);
