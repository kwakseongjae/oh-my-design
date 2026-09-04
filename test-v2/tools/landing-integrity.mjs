#!/usr/bin/env node
/**
 * landing-integrity.mjs — 코덱스 §5의 기계 규칙 LI-1…LI-33을 렌더 파일에 적용한다.
 *
 * 근거: docs/design-excellence/landing-craft-codex.md (5사이트 실측, 2026-09-02). 임계값은 그 문서
 * §5 표를 그대로 옮겼고, 측정 코드는 리서치 리그(test-v2/tools/landing-probes/measure-landing.mjs ·
 * probe-reflexes.mjs · probe-easing.mjs)의 수집기를 로컬 파일용으로 접은 것이다. 이 파일이 코덱스와
 * 다르면 코덱스가 정본이고 이 파일이 버그다.
 *
 * 결정론: 1440×900, dpr 1, 로드 후 800ms, 뷰포트 단위 스크롤 여정(최대 30단계, 단계당 450ms)으로
 * 리빌을 관측한 뒤 scrollY=0에서 구조를 잰다. 톤 순서는 CSS 유효 배경색 기준(리서치는 픽셀 기준 —
 * 그라디언트·이미지 배경은 여기서 과소 판정될 수 있다; `toneSource: css`로 표시).
 *
 * usage: node landing-integrity.mjs <render.html...> [--json] [--out <dir>]
 *   exit 0 = 전부 PASS, 1 = FAIL 있음. WARN은 exit에 영향 없음(코덱스가 범위만 준 항목).
 */
import { chromiumRuntime } from "./lib/browser.mjs";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";

const VIEWPORT = { width: 1440, height: 900 };
/* LI-34~40 임계값 — docs/design-excellence/scale-and-simplicity.md §4 의 "잠정" 값이다.
   레퍼런스 실측 프로브(레인 A, §5)가 도착하면 **이 객체만** 고친다. 판정 코드에 숫자를 박지 않는다. */
const THRESHOLDS = {
  li34: { medianMediaShare: 0.35, pageMaxShare: 0.90, foldCoverageMin: 0.25, foldGrid: [48, 30], svgMinPx: 200 }, // 폴드는 박스가 아니라 히트테스트 커버리지(레인 A: 레퍼런스 중앙 33.6% · q1 20.6 · r3 6.9)
  li7: { displayMinPx: 72 }, // 레퍼런스 q3 72 — wow 군(affinity 112·cosmos 74·tasteskill 72)
  /* li35: 콘텐츠 관문(감춰졌다 호버로 열림)은 0. 그 위에 LC-49 의 "호버 상한 = 리프트·밝기 2%" 를 수치로 —
     리프트(≤12px)와 밝기는 허용하고, 그보다 큰 이동·확대·회전·투명도 변화는 호버가 스펙터클을 인질로 잡은 것이다. */
  li35: { maxGates: 0, maxProbes: 10, probesPerSection: 2, hoverTranslatePx: 12, hoverScaleDelta: 0.04, hoverRotateDeg: 2, hoverOpacityDelta: 0.25 },
  li36: { minFocusRatio: 2.0, maxViolatingSections: 1, largeTextMultiple: 2 },
  li37: { maxFoldUnits: 5, minTextChars: 8, mediaMinPx: 64 },
  li38: { maxChannelsPerSection: 2, idleSampleMs: 1200 },
  li39: { minTextPx: 14, minWords: 3, minHoldPx: 40 },
  li40: { minMaxEmptyRunVh: 0.25, maxDistinctGaps: 3, bandPx: 50, emptyBandInk: 0.005, gapRoundPx: 8 },
};
const argv = process.argv.slice(2);
const asJson = argv.includes("--json");
const outIdx = argv.indexOf("--out");
const OUT = outIdx >= 0 ? resolve(argv[outIdx + 1]) : null;
const files = argv.filter((a, i) => !a.startsWith("--") && !(i > 0 && argv[i - 1] === "--out"));
if (!files.length) { console.error("usage: landing-integrity.mjs <render.html...> [--json] [--out <dir>]"); process.exit(2); }

const STOCK_HOSTS = /unsplash|pexels|pixabay|shutterstock|istockphoto|gettyimages|freepik|stock\.adobe|picsum\.photos|placeholder\.com|placehold|loremflickr|dummyimage/i;

// ---------------------------------------------------------------- in-page collectors (리그에서 접음)
const TAG = () => { let i = 0; for (const el of document.querySelectorAll("body *")) { if (i > 6000) break; el.setAttribute("data-omdid", String(i++)); } return i; };
const SNAP = () => {
  const out = {};
  for (const el of document.querySelectorAll("[data-omdid]")) {
    const r = el.getBoundingClientRect();
    if (r.width < 8 || r.height < 8) continue;
    if (r.bottom < -1200 || r.top > window.innerHeight + 1200) continue;
    const cs = getComputedStyle(el);
    out[el.getAttribute("data-omdid")] = [+(+cs.opacity).toFixed(2), cs.transform === "none" ? "none" : cs.transform, cs.clipPath === "none" ? 0 : 1, cs.filter === "none" ? 0 : 1];
  }
  return out;
};
const STRUCT = () => {
  const vw = innerWidth, vh = innerHeight;
  const docH = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  const abs = (el) => { const r = el.getBoundingClientRect(); return { top: r.top + scrollY, left: r.left + scrollX, w: r.width, h: r.height }; };
  const vis = (el) => { const cs = getComputedStyle(el); return cs.display !== "none" && cs.visibility !== "hidden" && +cs.opacity > 0.02; };
  const qualifies = (k) => { if (!vis(k)) return false; const cs = getComputedStyle(k); if (cs.position === "fixed") return false; const a = abs(k); return a.h >= 120 && a.w >= vw * 0.4; };
  let container = document.body, kidsBest = null;
  { let best = null; for (const el of [document.body, ...document.querySelectorAll("body *")]) { const a = abs(el); if (el !== document.body && a.h < docH * 0.8) continue; const kids = [...el.children].filter(qualifies); if (kids.length < 2) continue; const sum = kids.reduce((acc, k) => acc + abs(k).h, 0); if (sum < docH * 0.55) continue; if (!best || kids.length > best.kids.length) best = { el, kids }; } if (best) { container = best.el; kidsBest = best.kids; } }
  const rawKids = kidsBest || [...container.children].filter(qualifies);
  const luminance = (rgb) => { const m = rgb.match(/\d+(\.\d+)?/g); if (!m) return null; const [r, g, b] = m.slice(0, 3).map(Number).map((v) => { const c = v / 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); }); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
  const effBg = (start) => { let cur = start; while (cur) { const c = getComputedStyle(cur).backgroundColor; if (c && !/rgba\(0, 0, 0, 0\)|transparent/.test(c)) return c; cur = cur.parentElement; } return getComputedStyle(document.body).backgroundColor; };
  const COUNTED = new WeakSet();
  const sections = rawKids.map((el, idx) => {
    const a = abs(el); const area = a.w * a.h;
    let textArea = 0, assetArea = 0, bgImgArea = 0, maxFont = 0; const fontSizes = [], leftEdges = [];
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT); let n;
    while ((n = walker.nextNode())) { const t = n.nodeValue && n.nodeValue.trim(); if (!t) continue; const p = n.parentElement; if (!p || !vis(p) || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(p.tagName)) continue; const fs = parseFloat(getComputedStyle(p).fontSize) || 0; const range = document.createRange(); range.selectNodeContents(n); let la = 0; for (const r of range.getClientRects()) la += r.width * r.height; if (la <= 0) continue; textArea += la; fontSizes.push(fs); if (fs > maxFont) maxFont = fs; }
    let imgCount = 0, videoCount = 0;
    for (const m of el.querySelectorAll("img,video,canvas,svg,picture")) { if (!vis(m)) continue; let anc = m.parentElement, nested = false; while (anc && anc !== el) { if (COUNTED.has(anc)) { nested = true; break; } anc = anc.parentElement; } const r = m.getBoundingClientRect(); if (r.width < 4 || r.height < 4) continue; COUNTED.add(m); const st = a.top - scrollY, sl = a.left - scrollX; const ix = Math.max(0, Math.min(r.right, sl + a.w) - Math.max(r.left, sl)); const iy = Math.max(0, Math.min(r.bottom, st + a.h) - Math.max(r.top, st)); if (!nested) assetArea += ix * iy; if (m.tagName === "IMG") imgCount++; if (m.tagName === "VIDEO") videoCount++; }
    for (const b of el.querySelectorAll("*")) { const cs = getComputedStyle(b); if (cs.backgroundImage && cs.backgroundImage !== "none" && !/^(linear|radial|conic)-gradient/.test(cs.backgroundImage)) { const r = b.getBoundingClientRect(); if (r.width * r.height <= 20000) continue; const st = a.top - scrollY, sl = a.left - scrollX; const ix = Math.max(0, Math.min(r.right, sl + a.w) - Math.max(r.left, sl)); const iy = Math.max(0, Math.min(r.bottom, st + a.h) - Math.max(r.top, st)); bgImgArea += ix * iy; } }
    for (const c of el.querySelectorAll(":scope > *, :scope > * > *")) { const r = c.getBoundingClientRect(); if (r.width < 100 || r.height < 40) continue; leftEdges.push(Math.round(r.left / 8) * 8); }
    let pinned = null; for (const d of [el, ...el.querySelectorAll("*")]) { const dcs = getComputedStyle(d); const dr = d.getBoundingClientRect(); if ((dcs.position === "sticky" || dcs.position === "fixed") && dr.height > 200 && dr.width > vw * 0.3) { pinned = { pos: dcs.position, h: Math.round(dr.height) }; break; } }
    const bg = effBg(el); const L = luminance(bg);
    return { index: idx, tag: el.tagName.toLowerCase(), heightPx: Math.round(a.h), vh: +(a.h / vh).toFixed(2), textRatio: +(textArea / area).toFixed(4), assetRatio: +((assetArea + bgImgArea) / area).toFixed(4), imgCount, videoCount, maxFontPx: +maxFont.toFixed(1), leftEdges: [...new Set(leftEdges)], pinned, bg, tone: L === null ? "unknown" : L < 0.18 ? "dark" : L > 0.65 ? "light" : "mid", fontSizes: fontSizes.map((f) => Math.round(f)) };
  });
  // fold
  let biggestText = null, biggestMedia = null;
  for (const el of document.querySelectorAll("body *")) { const r = el.getBoundingClientRect(); if (r.top + scrollY > vh || r.bottom + scrollY < 0 || r.width < 20 || r.height < 20 || !vis(el)) continue; const cs = getComputedStyle(el); const direct = [...el.childNodes].some((c) => c.nodeType === 3 && c.nodeValue.trim().length > 2); const fs = parseFloat(cs.fontSize) || 0; if (direct && (!biggestText || fs > biggestText.fontPx)) biggestText = { fontPx: +fs.toFixed(1), weight: cs.fontWeight, topPctVh: +((r.top / vh) * 100).toFixed(1), leftPctVw: +((r.left / vw) * 100).toFixed(1), align: cs.textAlign, text: el.textContent.trim().slice(0, 60) }; if (["IMG", "VIDEO", "CANVAS"].includes(el.tagName)) { const a2 = r.width * r.height; if (!biggestMedia || a2 > biggestMedia.areaPx) biggestMedia = { tag: el.tagName.toLowerCase(), areaPx: Math.round(a2), coveragePct: +((a2 / (vw * vh)) * 100).toFixed(1), aspect: +(r.width / r.height).toFixed(2), bleeds: [r.left <= 1 ? "L" : null, r.right >= vw - 1 ? "R" : null, r.top <= 1 ? "T" : null, r.bottom >= vh - 1 ? "B" : null].filter(Boolean) }; } }
  // motion (paren-aware)
  const split = (s) => { const out = []; let d = 0, cur = ""; for (const ch of s) { if (ch === "(") d++; if (ch === ")") d--; if (ch === "," && d === 0) { out.push(cur.trim()); cur = ""; } else cur += ch; } if (cur.trim()) out.push(cur.trim()); return out; };
  const ms = (d) => (d.endsWith("ms") ? parseFloat(d) : parseFloat(d) * 1000);
  const durations = {}, easings = {}, propMax = {}; let decl = 0;
  for (const el of document.querySelectorAll("body *")) { const cs = getComputedStyle(el); const ds = split(cs.transitionDuration), es = split(cs.transitionTimingFunction), ps = split(cs.transitionProperty); ds.forEach((d, i) => { const v = ms(d); if (!v || v <= 0) return; decl++; const k = Math.round(v); durations[k] = (durations[k] || 0) + 1; const e = es[i] || es[0] || ""; easings[e] = (easings[e] || 0) + 1; const p = ps[i] || ps[0] || "all"; propMax[p] = Math.max(propMax[p] || 0, v); }); const ad = split(cs.animationDuration); ad.forEach((d) => { const v = ms(d); if (v > 0) { decl++; const k = Math.round(v); durations[k] = (durations[k] || 0) + 1; } }); }
  const top = (o, n = 10) => Object.entries(o).sort((a, b) => b[1] - a[1]).slice(0, n);
  const videos = [...document.querySelectorAll("video")].map((v) => { const r = v.getBoundingClientRect(); return { autoplay: v.autoplay, muted: v.muted, loop: v.loop, paused: v.paused, playsInline: v.playsInline, duration: isFinite(v.duration) ? +v.duration.toFixed(2) : null, absTop: Math.round(r.top + scrollY), h: Math.round(r.height) }; });
  const prefersReduced = [...document.styleSheets].some((s) => { try { return [...s.cssRules].some((r) => (r.conditionText || (r.media && r.media.mediaText) || "").includes("prefers-reduced-motion")); } catch { return false; } });
  const allFonts = {}; for (const el of document.querySelectorAll("body *")) { const direct = [...el.childNodes].some((c) => c.nodeType === 3 && c.nodeValue.trim().length > 1); if (!direct || !vis(el)) continue; const fs = Math.round(parseFloat(getComputedStyle(el).fontSize)); allFonts[fs] = (allFonts[fs] || 0) + 1; }
  // reflexes
  const box = (el) => el.getBoundingClientRect();
  const isSurface = (cs) => parseFloat(cs.borderRadius) > 3 && (!/rgba\(0, 0, 0, 0\)|transparent/.test(cs.backgroundColor) || parseFloat(cs.borderTopWidth) > 0);
  let cardGridGroups4 = 0; for (const par of document.querySelectorAll("body *")) { const kids = [...par.children].filter((k) => vis(k) && box(k).width > 120 && box(k).height > 80); if (kids.length < 4) continue; const sig = {}; for (const k of kids) { const r = box(k); const cs = getComputedStyle(k); if (!isSurface(cs)) continue; const key = `${Math.round(r.width / 8)}x${Math.round(r.height / 8)}`; sig[key] = (sig[key] || 0) + 1; } for (const c of Object.values(sig)) if (c >= 4) cardGridGroups4++; }
  let nestedCards = 0; for (const el of document.querySelectorAll("body *")) { const cs = getComputedStyle(el); const r = box(el); if (!vis(el) || r.width < 120 || r.height < 80 || !isSurface(cs)) continue; let a = el.parentElement, depth = 0; while (a && depth < 2) { const acs = getComputedStyle(a); const ar = box(a); if (isSurface(acs) && ar.width > 160 && ar.height > 100) { nestedCards++; break; } a = a.parentElement; depth++; } }
  const hosts = {}; for (const img of document.querySelectorAll("img")) { const s = img.currentSrc || img.src || ""; if (!s || s.startsWith("data:")) continue; try { const u = new URL(s, location.href); hosts[u.protocol === "file:" ? "(local)" : u.hostname] = (hosts[u.hostname] || 0) + 1; } catch { /* 무시 */ } }
  let lineWidths = []; { const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); let n2; while ((n2 = w.nextNode())) { const t = n2.nodeValue && n2.nodeValue.trim(); if (!t || t.length < 60) continue; const p = n2.parentElement; if (!p || !vis(p)) continue; const fs = parseFloat(getComputedStyle(p).fontSize) || 0; if (fs > 26) continue; const rg = document.createRange(); rg.selectNodeContents(n2); for (const r of rg.getClientRects()) if (r.width > 40) lineWidths.push(Math.round(r.width)); } lineWidths.sort((a, b) => a - b); }
  const rootSnap = getComputedStyle(document.documentElement).scrollSnapType, bodySnap = getComputedStyle(document.body).scrollSnapType;
  // 밀도 계측(2026-09-03): 비율 규칙(asset:text, empty ratio)은 **적게 담아도 만족된다** — 절대 바닥이 필요하다.
  const mediaEls = [...document.querySelectorAll("img, video, svg, canvas, picture")].filter((e) => {
    const r = e.getBoundingClientRect(); return vis(e) && r.width >= 24 && r.height >= 24;
  });
  const foldMedia = mediaEls.filter((e) => { const r = e.getBoundingClientRect(); return r.top + scrollY < vh && r.bottom + scrollY > 0; }).length;
  // 화면(뷰포트 높이) 단위 잉크 비율 — 섹션 평균은 빈 화면을 감춘다. 스크롤하는 사람은 화면 단위로 겪는다.
  const slices = Math.max(1, Math.ceil(docH / vh));
  const ink = new Array(slices).fill(0);
  const paint = (top, bottom, a) => { if (!(bottom > top) || !(a > 0)) return; for (let i = 0; i < slices; i++) { const s0 = i * vh, ov = Math.max(0, Math.min(bottom, s0 + vh) - Math.max(top, s0)); if (ov > 0) ink[i] += a * (ov / (bottom - top)); } };
  for (const el of document.querySelectorAll("body *")) {
    if (!vis(el)) continue;
    const r = el.getBoundingClientRect(); if (r.width < 8 || r.height < 8) continue;
    const isMedia = /^(IMG|VIDEO|SVG|CANVAS|PICTURE)$/.test(el.tagName);
    const leafText = !el.children.length && el.textContent.trim().length > 0;
    const cs = getComputedStyle(el);
    const ownBg = cs.backgroundImage !== "none";
    if (isMedia || ownBg || leafText) paint(r.top + scrollY, r.bottom + scrollY, r.width * r.height);
  }
  // sticky 트랙 보정: 핀 고정 스테이지는 스크롤 동안 트랙 전 구간에 보이므로, 스테이지 안 미디어·텍스트 면적을 트랙 높이에 걸쳐 칠한다.
  for (const st of document.querySelectorAll("body *")) {
    if (getComputedStyle(st).position !== "sticky") continue;
    const track = st.parentElement; if (!track) continue;
    const tr = track.getBoundingClientRect(); if (tr.height <= st.getBoundingClientRect().height + 8) continue;
    let a = 0; for (const el of st.querySelectorAll("img, video, svg, canvas, h1, h2, h3, p, span")) { if (!vis(el)) continue; const r = el.getBoundingClientRect(); if (r.width >= 8 && r.height >= 8) a += r.width * r.height; }
    paint(tr.top + scrollY, tr.bottom + scrollY, a * (tr.height / vh)); // 화면당 a 만큼
  }
  const sliceInk = ink.map((a) => +Math.min(1, a / (vw * vh)).toFixed(3));
  // 마감(craft) 계측 — LC-37~47. 밀도를 채워도 낱개의 질이 그대로면 와우가 없다(2026-09-03 계측).
  const craft = { shadows: 0, backdrop: 0, filters: 0, masks: 0, blend: 0, threeD: 0, clip: 0, radialBg: 0, mediaFilters: 0, mediaTotal: 0, balance: 0, pretty: 0 };
  let displayFont = null, displayPx = 0;
  for (const el of document.querySelectorAll("body *")) {
    const cs = getComputedStyle(el); if (cs.display === "none") continue;
    if (cs.boxShadow !== "none") craft.shadows++;
    if (cs.backdropFilter && cs.backdropFilter !== "none") craft.backdrop++;
    if (cs.filter && cs.filter !== "none") craft.filters++;
    if (cs.maskImage && cs.maskImage !== "none") craft.masks++;
    if (cs.mixBlendMode && cs.mixBlendMode !== "normal") craft.blend++;
    if (/matrix3d|rotate3d|translateZ|perspective\(/.test(cs.transform)) craft.threeD++;
    if (cs.clipPath && cs.clipPath !== "none") craft.clip++;
    if (/radial-gradient/.test(cs.backgroundImage)) craft.radialBg += (cs.backgroundImage.match(/radial-gradient/g) || []).length;
    if (cs.textWrap === "balance" || cs.textWrapStyle === "balance") craft.balance++;
    if (cs.textWrap === "pretty" || cs.textWrapStyle === "pretty") craft.pretty++;
    if (/^(IMG|VIDEO)$/.test(el.tagName)) { craft.mediaTotal++; if (cs.filter && cs.filter !== "none") craft.mediaFilters++; }
    const fsz = parseFloat(cs.fontSize);
    if (el.textContent.trim() && !el.children.length && fsz > displayPx) { displayPx = fsz; displayFont = cs.fontFamily.split(",")[0].replace(/["']/g, "").trim(); }
  }
  craft.displayFont = displayFont; craft.displayPx = Math.round(displayPx);
  craft.embeddedFonts = [...document.fonts].length;
  // IL-5: 내용 이미지의 alt 구체성 — 빈 alt / 한 단어 / 'image' 류는 generic 으로 센다(장식 레이어는 role=presentation 으로 제외)
  const contentImgs = [...document.images].filter((i) => i.getAttribute("role") !== "presentation" && i.getBoundingClientRect().width >= 80);
  craft.imgTotal = contentImgs.length;
  craft.imgGenericAlt = contentImgs.filter((i) => { const a = (i.getAttribute("alt") || "").trim(); return !a || a.split(/\s+/).length < 3 || /^(image|photo|picture|img|hero|banner)\b/i.test(a); }).length;
  // ::selection / :focus-visible / 그레인 필터는 계산된 스타일에 안 나온다 — 스타일시트 규칙 텍스트를 훑는다.
  let cssText = "";
  for (const sh of document.styleSheets) { try { for (const r of sh.cssRules) cssText += r.cssText + "\n"; } catch { /* cross-origin */ } }
  craft.hasSelection = /::selection/.test(cssText);
  craft.hasFocusVisible = /:focus-visible/.test(cssText);
  craft.hasGrain = /feTurbulence|fractalNoise/.test(document.documentElement.innerHTML) || /feTurbulence|fractalNoise/.test(cssText);
  const dialMeta = document.querySelector('meta[name="omd-density"]');
  const dial = dialMeta && /^\d+$/.test(dialMeta.content.trim()) ? +dialMeta.content.trim() : null;
  const density = { mediaCount: mediaEls.length, foldMedia, craft, perVh: +(mediaEls.length / Math.max(docH / vh, 1)).toFixed(2), videos: document.querySelectorAll("video").length, sliceInk, dial };
  return { docHeightPx: docH, pageVh: +(docH / vh).toFixed(2), sections, density, fold: { biggestText, biggestMedia }, motion: { declarations: decl, topDurationsMs: top(durations), topEasings: top(easings, 8), propMax }, videos, prefersReducedMotionRule: prefersReduced, fontHistogram: top(allFonts, 12), reflexes: { cardGridGroups4, nestedCards, imageHosts: Object.entries(hosts), bodyLineP50: lineWidths[Math.floor(lineWidths.length / 2)] ?? null, h1Count: document.querySelectorAll("h1").length }, scrollSnap: { root: rootSnap, body: bodySnap } };
};

// ---------------------------------------------------------------- 판정
const isEaseIn = (e) => { if (!e) return false; if (/^ease-in$/.test(e.trim())) return true; const m = e.match(/cubic-bezier\(\s*([\d.]+)\s*,\s*(-?[\d.]+)\s*,\s*([\d.]+)\s*,\s*(-?[\d.]+)/); if (!m) return false; const [x1, y1, x2, y2] = m.slice(1).map(Number); return y1 < x1 - 0.15 && y2 <= x2 + 0.05; };
function judge(m, reveals, scrub) {
  const R = [];
  const push = (id, status, detail) => R.push({ id, status, detail });
  const secs = m.sections; const nonHero = secs.slice(1);
  const pinnedFull = secs.some((s) => s.pinned && s.pinned.h >= VIEWPORT.height * 0.9) || (m.fold.biggestMedia && m.fold.biggestMedia.tag === "canvas");
  const median = (xs) => { const a = [...xs].sort((x, y) => x - y); return a.length ? a[Math.floor(a.length / 2)] : null; };
  push("LI-1", (m.pageVh < 8 || m.pageVh > 18) && !pinnedFull ? "FAIL" : "PASS", `page ${m.pageVh} vh${pinnedFull ? " (pinned stage)" : ""}`);
  const medNH = median(nonHero.map((s) => s.vh));
  push("LI-2", nonHero.length >= 3 && (medNH < 0.8 || medNH > 2.0) ? "FAIL" : nonHero.length < 3 ? "WARN" : "PASS", `median non-hero ${medNH} vh (n=${nonHero.length})`);
  const cov = m.fold.biggestMedia?.coveragePct ?? 0;
  push("LI-3", cov < 60 && !pinnedFull ? "FAIL" : "PASS", `fold media coverage ${cov}% ${m.fold.biggestMedia ? `<${m.fold.biggestMedia.tag}> aspect ${m.fold.biggestMedia.aspect} bleeds ${m.fold.biggestMedia.bleeds.join("") || "-"}` : "(no media)"}`);
  const topPct = m.fold.biggestText?.topPctVh ?? null;
  push("LI-4", topPct !== null && topPct > 45 ? "FAIL" : topPct === null ? "WARN" : "PASS", `display top ${topPct} %vh · ${m.fold.biggestText?.fontPx}px/${m.fold.biggestText?.weight} · left ${m.fold.biggestText?.leftPctVw} %vw · ${m.fold.biggestText?.align}`);
  const tr = secs.map((s) => s.textRatio); const maxTr = Math.max(...tr, 0);
  push("LI-5", maxTr > 0.45 ? "FAIL" : "PASS", `max section text ratio ${maxTr.toFixed(3)}`);
  // LI-6은 코덱스 §5대로 **중앙값**이다 — 풀블리드 히어로(LC-1: 커버리지 ≥89%)는 빈 면이 0에 가까운 것이 정상이라
  // 섹션별 최소값으로 재면 LC-1과 모순된다(첫 실행에서 stripe/autopilot 히어로가 그렇게 잡혔다).
  const empties = secs.map((s) => Math.max(0, 1 - s.textRatio - Math.min(1, s.assetRatio))); const medEmpty = median(empties) ?? 1;
  push("LI-6", medEmpty < 0.30 ? "FAIL" : "PASS", `median section empty ratio ${medEmpty.toFixed(2)} (min ${Math.min(...empties, 1).toFixed(2)})`);
  const bodyPx = (() => { const cand = m.fontHistogram.filter(([px]) => +px >= 12 && +px <= 19); return cand.length ? +cand[0][0] : null; })();
  const display = m.fold.biggestText?.fontPx ?? null;
  const ratio = display && bodyPx ? display / bodyPx : null;
  push("LI-7", ratio !== null && (ratio < 2.5 || ratio > 7.5 || display < THRESHOLDS.li7.displayMinPx) ? "FAIL" : ratio === null ? "WARN" : "PASS", `display:body ${display}/${bodyPx} = ${ratio ? ratio.toFixed(2) : "?"} (대역 2.5–7.5× · 폴드 h1 ≥${THRESHOLDS.li7.displayMinPx}px, 레퍼런스 q3)`);
  push("LI-8", bodyPx !== null && (bodyPx < 13 || bodyPx > 17) ? "FAIL" : bodyPx === null ? "WARN" : "PASS", `body ${bodyPx}px`);
  const edgeCount = {}; for (const s of secs) for (const e of s.leftEdges) edgeCount[e] = (edgeCount[e] || 0) + 1;
  const dominantEdges = Object.entries(edgeCount).filter(([, c]) => c >= Math.max(2, Math.floor(secs.length / 3))).map(([e]) => +e).sort((a, b) => a - b);
  push("LI-9", dominantEdges.length > 3 ? "FAIL" : "PASS", `dominant left edges ${dominantEdges.join("/") || "-"}`);
  const p50 = m.reflexes.bodyLineP50;
  push("LI-10", p50 !== null && p50 > 700 ? "FAIL" : p50 === null ? "WARN" : "PASS", `body measure p50 ${p50}px`);
  const tones = secs.map((s) => s.tone); let changes = 0; for (let i = 1; i < tones.length; i++) if (tones[i] !== tones[i - 1] && tones[i] !== "unknown" && tones[i - 1] !== "unknown") changes++;
  const strictAlt = changes === tones.length - 1 && tones.length >= 4;
  push("LI-11", secs.length <= 9 && changes > 1 && !strictAlt ? "FAIL" : "PASS", `tone sequence ${tones.map((t) => t[0].toUpperCase()).join(" ")} (${changes} changes, css-based)`);
  const decl = m.motion.declarations || 0; const big = m.motion.topDurationsMs.filter(([, c]) => decl && c / decl > 0.05);
  push("LI-12", big.length > 4 ? "FAIL" : "PASS", `durations >5%: ${big.map(([d, c]) => `${d}ms×${c}`).join(", ") || "-"} (decl ${decl})`);
  const primaryEase = m.motion.topEasings[0]?.[0] ?? null;
  push("LI-13", primaryEase && isEaseIn(primaryEase) ? "FAIL" : "PASS", `primary easing ${primaryEase || "-"}`);
  const badProps = Object.entries(m.motion.propMax).filter(([p, v]) => !["opacity", "transform", "color", "background-color", "border-color", "fill", "stroke", "all", "none", "box-shadow"].includes(p) && v > 200);
  push("LI-14", badProps.length ? "FAIL" : "PASS", badProps.length ? badProps.map(([p, v]) => `${p} ${v}ms`).join(", ") : "only opacity/transform/colour >200ms");
  push("LI-15", m.prefersReducedMotionRule ? "PASS" : "FAIL", m.prefersReducedMotionRule ? "prefers-reduced-motion present" : "no prefers-reduced-motion rule");
  const snapY = [m.scrollSnap.root, m.scrollSnap.body].some((v) => v && v !== "none" && /y|block|both/.test(v));
  push("LI-16", snapY ? "FAIL" : "PASS", `snap root=${m.scrollSnap.root} body=${m.scrollSnap.body}`);
  push("LI-17", reveals.clip + reveals.filter > 0 ? "FAIL" : "PASS", `reveals opacity ${reveals.opacity} · transform ${reveals.transform} · clip ${reveals.clip} · filter ${reveals.filter} (${reveals.tracked} tracked, ${reveals.steps} steps)`);
  const heroVids = m.videos.filter((v) => v.absTop < VIEWPORT.height);
  const badHero = heroVids.filter((v) => !v.muted || !v.playsInline || !v.loop || (v.duration && v.duration > 12));
  push("LI-18", badHero.length ? "FAIL" : "PASS", heroVids.length ? `hero video ${heroVids.length} (${badHero.length} bad)` : "no hero video (optional)");
  const belowPlaying = m.videos.filter((v) => v.absTop >= VIEWPORT.height && !v.paused);
  push("LI-19", belowPlaying.length ? "FAIL" : "PASS", `${belowPlaying.length} below-fold video(s) playing at load`);
  const stock = m.reflexes.imageHosts.filter(([h]) => STOCK_HOSTS.test(h));
  push("LI-20", stock.length ? "FAIL" : "PASS", stock.length ? `stock hosts: ${stock.map(([h]) => h).join(", ")}` : `image hosts: ${m.reflexes.imageHosts.map(([h, c]) => `${h}×${c}`).join(", ") || "(none/data-uri)"}`);
  push("LI-21", m.reflexes.cardGridGroups4 >= 2 ? "FAIL" : "PASS", `uniform card groups(≥4) ${m.reflexes.cardGridGroups4}`);
  push("LI-22", m.reflexes.nestedCards > 9 ? "FAIL" : "PASS", `nested cards ${m.reflexes.nestedCards}`);
  push("LI-23", m.reflexes.h1Count !== 1 ? "FAIL" : "PASS", `h1 count ${m.reflexes.h1Count}`);

  // ── 밀도 절대 바닥 (2026-09-03). 코덱스의 LC-4/LC-15/LC-33 은 비율·범위로 쓰여 있어 **비어 있어도 통과한다** —
  // 실측: landing/stripe 가 LC-8(12.05vh)·LC-9(1.55vh)를 다 지키면서 13화면 중 6화면이 잉크 10% 미만이었다.
  // 기준선은 코덱스 실측 사이트에서 가져온다: affinity 폴드 미디어 8개(LC-33), 스크롤러 하나에 에셋 14개(LC-15),
  // 본문 섹션 공백 비율 중앙 0.46–0.74(LC-4) = 잉크 26–54%.
  /* 밀도 다이얼(LC-59): 페이지가 <meta name="omd-density" content="n"> 으로 밀도 ≤5 를 선언하면
     개수 바닥(LI-24~26)은 FAIL 이 아니라 WARN — 상한(LI-36~38)이 우선한다. 선언이 없으면 종전대로. */
  const dial = m.density?.dial ?? null;
  const floorFail = dial !== null && dial <= 5 ? "WARN" : "FAIL";
  const si = m.density?.sliceInk ?? [];
  const body = si.slice(1); // 폴드는 LI-3 가 따로 본다
  const thin = body.map((v, i) => [i + 1, v]).filter(([, v]) => v < 0.12);
  push("LI-24", thin.length ? floorFail : "PASS",
    `잉크 12% 미만 화면 ${thin.length}/${body.length}${thin.length ? " — " + thin.slice(0, 5).map(([i, v]) => `#${i} ${(100 * v).toFixed(0)}%`).join(", ") : ""} (LC-4 실측대역 26–54%)`);
  push("LI-25", (m.density?.foldMedia ?? 0) < 3 ? floorFail : "PASS",
    `폴드 미디어 ${m.density?.foldMedia ?? 0}개 (LC-33 affinity 8개, 최소 3)`);
  // ── 마감 바닥 (LC-37~47). 근거: docs/research/wow-visual-craft-2026-09-03.md
  const c = m.density?.craft ?? {};
  const SYSTEM_FONTS = /^(-apple-system|BlinkMacSystemFont|system-ui|ui-sans-serif|ui-serif|ui-monospace|Segoe UI|Roboto|Helvetica|Arial|sans-serif|serif|monospace)$/i;
  const sysDisplay = !c.displayFont || SYSTEM_FONTS.test(c.displayFont);
  push("LI-27", sysDisplay ? "FAIL" : "PASS",
    `디스플레이 서체 ${c.displayFont || "없음"} @${c.displayPx || 0}px${sysDisplay ? " — OS 기본 폰트다(LC-47: 가변 woff2 를 base64 인라인하면 외부 요청 0건)" : ` · @font-face ${c.embeddedFonts}`}`);
  const depth = (c.shadows || 0) + (c.backdrop || 0) + (c.masks || 0) + (c.blend || 0) + (c.threeD || 0) + (c.clip || 0);
  push("LI-28", depth < 3 ? "FAIL" : "PASS",
    `깊이 신호 ${depth} (그림자 ${c.shadows || 0}·글래스 ${c.backdrop || 0}·마스크 ${c.masks || 0}·블렌드 ${c.blend || 0}·3D ${c.threeD || 0}·clip ${c.clip || 0}, 최소 3) — LC-39/45`);
  push("LI-29", (c.radialBg || 0) < 3 && !c.hasGrain ? "FAIL" : "PASS",
    `메시·그레인: radial-gradient ${c.radialBg || 0}겹(최소 3) · 그레인 ${c.hasGrain ? "있음" : "없음"} — LC-38/46`);
  push("LI-30", !(c.hasSelection && c.hasFocusVisible) ? "FAIL" : "PASS",
    `브라우저 기본값: ::selection ${c.hasSelection ? "지정" : "미지정"} · :focus-visible ${c.hasFocusVisible ? "지정" : "미지정"} — LC-42`);
  push("LI-31", (c.mediaTotal || 0) >= 2 && (c.mediaFilters || 0) === 0 ? "FAIL" : "PASS",
    `미디어 색보정: ${c.mediaFilters || 0}/${c.mediaTotal || 0} 에 filter 적용 — LC-43`);

  push("LI-32", (c.imgTotal || 0) && (c.imgGenericAlt || 0) > 0 ? "FAIL" : "PASS",
    `alt 구체성: generic/빈 alt ${c.imgGenericAlt || 0}/${c.imgTotal || 0} — IL-5`);
  push("LI-26", (m.density?.perVh ?? 0) < 1 ? floorFail : "PASS",
    `미디어 ${m.density?.mediaCount ?? 0}개 / ${m.pageVh} vh = ${m.density?.perVh ?? 0}개/vh (최소 1.0), video ${m.density?.videos ?? 0}`);

  // LI-33 정착 타이밍 — LC-48. JS 트리거는 FAIL 로, CSS view() 는 WARN 으로 판정한다:
  // view() 의 range 는 각 subject 기준이라 "감상 구간"을 섹션 좌표로 환산할 수 없고,
  // 종점이 cover/exit 100% 인 것이 시차(parallax)처럼 정착점이 **없는** 연출일 수도 있기 때문이다.
  const sc = scrub || { entries: [], cssRanges: [], hasST: false };
  if (sc.entries.length) {
    // 창이 같은 트리거(같은 섹션에 붙은 여러 트윈)는 하나로 센다 — 갤러리 카드 12개가 12개 결함이 아니다.
    const wins = new Map();
    for (const e of sc.entries) { const k = `${e.trigger}|${e.start}|${e.end}`; if (!wins.has(k) || e.pinLeadVh < wins.get(k).pinLeadVh) wins.set(k, e); }
    const W = [...wins.values()];
    const bad = W.filter((e) => e.pinLeadVh < 0.6 || e.leadVh < 0.5);
    const worst = W.reduce((a, b) => (a === null || b.pinLeadVh < a.pinLeadVh ? b : a), null);
    // 퇴장(exit)·시차(parallax) 트윈은 정착점이 **없는** 것이 정상이므로 한둘은 결함이 아니다(측정:
    // dennissnellenberg 4개 창 중 2개가 히어로 퇴장). 과반이 결함이면 페이지의 문법 자체가 틀린 것이다.
    const ratio = W.length ? bad.length / W.length : 0;
    push("LI-33", ratio > 0.5 ? "FAIL" : bad.length ? "WARN" : "PASS",
      `스크럽/핀 창 ${W.length}개 중 정착 결함 ${bad.length}개(${Math.round(ratio * 100)}%, 과반이면 FAIL) · 최악 ${worst.trigger} settle ${worst.settlePct}% · 정착 후 홀드 ${worst.pinLeadVh}vh(최소 0.6) — LC-48`);
  } else if (sc.cssRanges.length) {
    const late = sc.cssRanges.filter((r) => /(cover|exit)\s+(1\d\d|100)%\s*$/.test(r.range) || /default/.test(r.range));
    push("LI-33", late.length ? "WARN" : "PASS",
      `CSS view() ${sc.cssRanges.length}개 · 종점이 cover/exit 100% 인 것 ${late.length}개 (시차면 정상, 조립/리빌이면 LC-48 위반) — LC-48`);
  } else {
    push("LI-33", "PASS", "스크럽/핀 타임라인 없음 — 해당 없음");
  }
  return R;
}

// ---------------------------------------------------------------- LI-33 정착 타이밍 (LC-48)
/* 스크럽/핀 애니메이션이 "결과 상태"에 도달하는 스크롤 위치와 그 무대가 화면을 떠나는 위치의 간격을 잰다.
   근거·정의는 docs/research/scrub-timing-2026-09-04.md, 범용 계측기는 docs/research/scrub-timing-probe.mjs.
   GSAP ScrollTrigger 가 있으면 정확히, 없으면 CSS animation-range 로 근사, 둘 다 없으면 해당 없음. */
const SCRUB = () => {
  const vh = innerHeight;
  const nameOf = (el) => { if (!el || !el.tagName) return "(none)"; if (el.id) return "#" + el.id;
    const c = (el.className && String(el.className).trim().split(/\s+/)[0]) || ""; return el.tagName.toLowerCase() + (c ? "." + c : ""); };
  const cssRanges = [];
  for (const sheet of document.styleSheets) {
    let rules; try { rules = sheet.cssRules; } catch { continue; }
    if (!rules) continue;
    const walk = (list) => { for (const r of list) { if (r.cssRules) { walk(r.cssRules); continue; }
      const tl = r.style && (r.style.getPropertyValue("animation-timeline") || r.style.getPropertyValue("view-timeline"));
      if (!tl) continue;
      cssRanges.push({ selector: (r.selectorText || "?").slice(0, 48), range: (r.style.getPropertyValue("animation-range") || "").trim() || "(default cover 0% cover 100%)" }); } };
    walk(rules);
  }
  for (const el of document.querySelectorAll("[style*='animation-timeline']"))
    cssRanges.push({ selector: nameOf(el) + "[inline]", range: (el.style.animationRange || "").trim() || "(default cover 0% cover 100%)" });
  /* 폴백: 엔진이 animation-timeline 을 모르면 CSSOM 에서 선언이 사라진다 — <style> 원문을 읽는다. */
  if (!cssRanges.length) {
    let raw = ""; for (const st of document.querySelectorAll("style")) raw += st.textContent || "";
    for (const el of document.querySelectorAll("[style]")) raw += ";" + el.getAttribute("style");
    if (/animation-timeline\s*:/.test(raw)) {
      const found = [...raw.matchAll(/animation-range\s*:\s*([^;}"']+)/g)].map((m) => ({ selector: "(raw css text)", range: m[1].trim() }));
      cssRanges.push(...(found.length ? found : [{ selector: "(raw css text)", range: "(default cover 0% cover 100%)" }]));
    }
  }

  const ST = window.ScrollTrigger;
  const entries = [];
  if (ST && typeof ST.getAll === "function") {
    for (const t of ST.getAll()) {
      const scrubbed = t.vars && t.vars.scrub !== undefined && t.vars.scrub !== false;
      if (!scrubbed && !t.pin) continue;
      const el = t.trigger || t.pinnedContainer;
      let secTop = null, secH = null;
      if (el && el.getBoundingClientRect) { const r = el.getBoundingClientRect(); secTop = Math.round(r.top + scrollY); secH = Math.round(r.height); }
      const start = Math.round(t.start), end = Math.round(t.end);
      let ratio = 1;                    /* 타임라인의 마지막 트윈이 끝나는 시각 / 전체 길이 */
      try { const a = t.animation;
        if (a && typeof a.duration === "function" && a.duration() > 0 && typeof a.getChildren === "function") {
          let mx = 0; for (const k of a.getChildren(true, true, true)) {
            const e = (typeof k.startTime === "function" ? k.startTime() : 0) + (typeof k.duration === "function" ? k.duration() : 0);
            if (e > mx) mx = e; }
          if (mx > 0) ratio = Math.min(1, mx / a.duration()); } } catch { /* 보수적으로 1 */ }
      const settle = start + (end - start) * ratio;
      let enter, exit, pinExit;
      if (t.pin) { enter = Math.max(0, start - vh); exit = end + vh; pinExit = end; }
      else { if (secTop === null || !secH) continue; enter = Math.max(0, secTop - vh); exit = secTop + secH; pinExit = secTop + secH - vh; }
      const span = exit - enter;
      entries.push({ trigger: nameOf(el), start, end, pin: !!t.pin, scrub: t.vars.scrub, ratio: +ratio.toFixed(2),
        settlePct: span > 0 ? +(((settle - enter) / span) * 100).toFixed(1) : null,
        leadVh: +((exit - settle) / vh).toFixed(2), pinLeadVh: +((pinExit - settle) / vh).toFixed(2),
        settleY: Math.max(0, Math.round(settle)), holdEndY: Math.round(pinExit) });
    }
  }
  return { vh, hasST: !!(ST && typeof ST.getAll === "function"), entries, cssRanges };
};

// ---------------------------------------------------------------- LI-34~40 스케일·간결 계측 (scale-and-simplicity §4)
/* 근거: docs/design-excellence/scale-and-simplicity.md §3(LC-49~59)·§4. 개수만 재던 LI-24~33 이
   "작은 이미지 22장"을 통과시켰기 때문에 여기서는 **크기·초점·노동**을 잰다. */

/** 섹션을 식별하고 data-omdsec 로 태깅한다. 최상위 <section>·[data-section] → main > * → body 큰 자식. */
const SECTION_GEO = () => {
  const vis = (el) => { const cs = getComputedStyle(el); return cs.display !== "none" && cs.visibility !== "hidden" && +cs.opacity > 0.02; };
  const box = (el) => el.getBoundingClientRect();
  let els = [...document.querySelectorAll("section, [data-section]")].filter(vis);
  els = els.filter((el) => !els.some((o) => o !== el && o.contains(el)));
  let source = "section";
  if (els.length < 2) { const main = document.querySelector("main"); if (main) { els = [...main.children].filter(vis); source = "main>*"; } }
  if (els.length < 2) { const vw = innerWidth; els = [...document.body.children].filter((el) => vis(el) && box(el).height >= 120 && box(el).width >= vw * 0.4); source = "body>*"; }
  els.sort((a, b) => box(a).top - box(b).top);
  return { source, list: els.map((el, i) => { el.setAttribute("data-omdsec", String(i)); const r = box(el);
    const cn = typeof el.className === "string" && el.className.trim() ? "." + el.className.trim().split(/\s+/)[0] : "";
    return { i, name: el.id ? "#" + el.id : el.tagName.toLowerCase() + cn, top: Math.round(r.top + scrollY), h: Math.round(r.height) }; }) };
};

/** 한 섹션을 "가장 잘 보이는" 스크롤 위치에서 잰다: 주 미디어 점유율(LI-34) · 초점비(LI-36) · 모션 채널(LI-38). */
const SECTION_MEASURE = async (arg) => {
  const sec = document.querySelector('[data-omdsec="' + arg.i + '"]');
  if (!sec) return { i: arg.i, name: arg.name, unmeasured: "섹션 노드 소실" };
  const vw = innerWidth, vh = innerHeight, vArea = vw * vh;
  const vis = (el) => { const cs = getComputedStyle(el); return cs.display !== "none" && cs.visibility !== "hidden" && +cs.opacity > 0.02; };
  const clipArea = (r) => Math.max(0, Math.min(r.right, vw) - Math.max(r.left, 0)) * Math.max(0, Math.min(r.bottom, vh) - Math.max(r.top, 0));
  const nameOf = (el) => { if (el.id) return "#" + el.id; const c = typeof el.className === "string" && el.className.trim() ? "." + el.className.trim().split(/\s+/)[0] : ""; return el.tagName.toLowerCase() + c; };
  const all = [sec, ...sec.querySelectorAll("*")];
  const media = [], bigText = [];
  const bodyPx = arg.bodyPx || 16;
  for (const el of all) {
    if (!vis(el)) continue;
    const r = el.getBoundingClientRect();
    if (r.width < 4 || r.height < 4) continue;
    const a = clipArea(r); if (a <= 0) continue;
    const tag = el.tagName.toUpperCase(), cs = getComputedStyle(el);
    let kind = null;
    if (/^(IMG|VIDEO|CANVAS|PICTURE)$/.test(tag)) kind = tag.toLowerCase();
    else if (tag === "SVG" && Math.max(r.width, r.height) >= arg.svgMinPx) kind = "svg";
    else if (cs.backgroundImage && cs.backgroundImage !== "none" && /url\(/.test(cs.backgroundImage)) kind = "bg";
    if (kind) media.push({ n: nameOf(el), kind, area: a, share: +(a / vArea).toFixed(3), wVw: +(r.width / vw).toFixed(2), hVh: +(r.height / vh).toFixed(2), bb: [Math.max(r.left, 0), Math.max(r.top, 0), Math.min(r.right, vw), Math.min(r.bottom, vh)], par: el.parentElement });
    const direct = [...el.childNodes].filter((c) => c.nodeType === 3).map((c) => c.nodeValue.trim()).join(" ").trim();
    if (direct.length >= 4 && (parseFloat(cs.fontSize) || 0) >= bodyPx * arg.largeTextMultiple) bigText.push({ n: nameOf(el) + "@" + Math.round(parseFloat(cs.fontSize)) + "px", kind: "text", area: a, bb: [Math.max(r.left, 0), Math.max(r.top, 0), Math.min(r.right, vw), Math.min(r.bottom, vh)], par: el.parentElement });
  }
  media.sort((x, y) => y.area - x.area);
  const visualsRaw = [...media, ...bigText].sort((x, y) => y.area - x.area);
  /* 초점비(LI-36)는 "경쟁하는" 요소를 묻는다. 같은 박스에 겹쳐 쌓인 층(크로스페이드 프레임·전후 비교·이미지 위 비네트)과
     같은 부모 안의 등크기 타일 띠(드럼·마키)는 경쟁이 아니라 하나의 초점이다 — 병합해서 센다(2026-09-04, r4 오판 수정). */
  const inter = (A, B) => Math.max(0, Math.min(A[2], B[2]) - Math.max(A[0], B[0])) * Math.max(0, Math.min(A[3], B[3]) - Math.max(A[1], B[1]));
  const bbArea = (A) => Math.max(0, A[2] - A[0]) * Math.max(0, A[3] - A[1]);
  const clusters = [];
  for (const v of visualsRaw) {
    if (!v.bb) { clusters.push({ ...v, members: 1 }); continue; }
    let hit = null;
    for (const c of clusters) {
      if (!c.bb) continue;
      const ov = inter(c.bb, v.bb), small = Math.min(bbArea(c.bb), bbArea(v.bb));
      const sameFamily = (c.kind === "text") === (v.kind === "text");      // 이미지 위 텍스트는 경쟁이다 — 미디어끼리·텍스트끼리만 병합
      if (sameFamily && small > 0 && ov / small >= 0.8) { hit = c; break; }  // 겹침: 작은 쪽의 80% 이상이 큰 쪽 안
    }
    if (hit) { hit.members++; continue; }
    // 등크기 형제 타일 띠: 같은 부모 안에 면적 비 ≤1.35 인 항목이 이미 2개 이상이면 부모 박스로 합친다
    const sib = clusters.find((c) => c.par && c.par === v.par && c.kind === v.kind && c.tileArea && Math.max(c.tileArea, v.area) / Math.max(1, Math.min(c.tileArea, v.area)) <= 1.35);
    if (sib) {
      sib.members++;
      if (sib.members >= 3 && v.par) { const pr = v.par.getBoundingClientRect(); const pb = [Math.max(pr.left, 0), Math.max(pr.top, 0), Math.min(pr.right, vw), Math.min(pr.bottom, vh)]; sib.bb = pb; sib.area = Math.max(sib.area, bbArea(pb)); sib.n = nameOf(v.par) + "(band×" + sib.members + ")"; }
      continue;
    }
    clusters.push({ ...v, members: 1, tileArea: v.area });
  }
  const visuals = clusters.map(({ par, tileArea, ...rest }) => rest).sort((x, y) => y.area - x.area);
  // 모션 채널 4종
  let scrubCh = 0, idleCh = 0, hoverCh = 0, entCh = 0;
  const ST = window.ScrollTrigger;
  if (ST && typeof ST.getAll === "function") {
    for (const t of ST.getAll()) { const sc = t.vars && t.vars.scrub !== undefined && t.vars.scrub !== false; if (!sc && !t.pin) continue;
      const el = t.trigger || t.pinnedContainer; if (el && (el === sec || sec.contains(el) || el.contains(sec))) { scrubCh = 1; break; } }
  }
  if (!scrubCh) for (const el of all) { const at = (getComputedStyle(el).getPropertyValue("animation-timeline") || "").trim(); if (at && at !== "none" && at !== "auto") { scrubCh = 1; break; } }
  const rev = new Set(arg.revealIds || []);
  for (const el of sec.querySelectorAll("[data-omdid]")) if (rev.has(el.getAttribute("data-omdid"))) { entCh = 1; break; }
  for (const sel of arg.hoverSel || []) { try { if (sec.matches(sel) || sec.querySelector(sel)) { hoverCh = 1; break; } } catch { /* 잘못된 셀렉터 */ } }
  let infinite = 0;
  try { for (const an of sec.getAnimations({ subtree: true })) { const tm = an.effect && an.effect.getTiming ? an.effect.getTiming() : null; if (tm && (tm.iterations === Infinity || tm.iterations > 100)) infinite++; } } catch { /* 미지원 */ }
  const sig = () => { const o = []; for (const el of all) { const cs = getComputedStyle(el); o.push(cs.transform + "|" + cs.opacity + "|" + cs.backgroundPosition + "|" + cs.objectPosition); } return o; };
  /* 유휴 루프 판정은 창 두 개를 연속으로 본다 — 스크럽 스무딩이나 일회성 트윈의 꼬리는 한 창에서만
     움직이고 멎지만, 유휴 루프는 두 창에서 모두 움직인다(한 창만 보면 판정이 실행마다 흔들렸다). */
  const half = Math.max(200, Math.round(arg.idleSampleMs / 2));
  const s0 = sig();
  await new Promise((r) => setTimeout(r, half));
  const s1 = sig();
  await new Promise((r) => setTimeout(r, half));
  const s2 = sig();
  const diff = (X, Y) => { let n = 0; for (let k = 0; k < Math.min(X.length, Y.length); k++) if (X[k] !== Y[k]) n++; return n; };
  const d01 = diff(s0, s1), d12 = diff(s1, s2);
  const drift = Math.min(d01, d12);
  if (infinite > 0 || drift > 0) idleCh = 1;
  const top2 = visuals.slice(0, 2);
  return { i: arg.i, name: arg.name, mediaCount: media.length,
    maxMediaShare: media.length ? +(media[0].area / vArea).toFixed(3) : 0,
    topMedia: media.slice(0, 2).map((x) => x.n + " " + Math.round(100 * x.area / vArea) + "%"),
    focusMembers: visuals.slice(0, 2).map((x) => x.members || 1),
    visualCount: visuals.length,
    focusRatio: top2.length >= 2 ? +(top2[0].area / Math.max(1, top2[1].area)).toFixed(2) : (visuals.length === 1 ? 99 : null), // 단일 초점 = 경쟁 없음
    focusTop: top2.map((x) => x.n),
    channels: scrubCh + idleCh + hoverCh + entCh,
    channelDetail: { scrub: scrubCh, idle: idleCh, hover: hoverCh, entrance: entCh, infiniteAnims: infinite, driftEls: drift, driftWindows: [d01, d12] } };
};

/** 폴드(scrollY=0) 의미 단위와 폴드 주 미디어 — LI-37 / LI-34 의 폴드 항. */
/** 폴드 히트테스트 커버리지(LI-34) — 격자 각 점에서 실제로 먼저 칠해지는 요소가 미디어인 비율. 박스는 오버레이·clip·z-order 를 못 본다(scale-probe.mjs 1b 이식). */
const FOLD_COVERAGE = (arg) => {
  const vw = innerWidth, vh = innerHeight;
  const isMediaEl = (el) => ["IMG", "VIDEO", "CANVAS"].includes(el.tagName) || el.tagName.toLowerCase() === "svg";
  const paintsAs = (el) => {
    const cs = getComputedStyle(el);
    if (+cs.opacity < 0.1) return false;
    if (isMediaEl(el)) return "media";
    const bi = cs.backgroundImage;
    if (bi && bi !== "none" && !/^(linear|radial|conic|repeating)-gradient/.test(bi.trim())) return "media";
    const m = cs.backgroundColor.match(/rgba?\(([^)]+)\)/);
    if (m) { const q = m[1].split(",").map(Number); const al = q.length > 3 ? q[3] : 1; if (al >= 0.85) return "solid"; }
    return false;
  };
  let hits = 0, samples = 0;
  const [COLS, ROWS] = arg.grid;
  for (let i = 0; i < COLS; i++) for (let j = 0; j < ROWS; j++) {
    const x = Math.round((i + 0.5) * vw / COLS), y = Math.round((j + 0.5) * vh / ROWS);
    samples++;
    for (const el of document.elementsFromPoint(x, y)) { const p = paintsAs(el); if (!p) continue; if (p === "media") hits++; break; }
  }
  return { coverage: +(hits / samples).toFixed(3), samples };
};

const FOLD_UNITS = (arg) => {
  const vw = innerWidth, vh = innerHeight;
  const vis = (el) => { const cs = getComputedStyle(el); return cs.display !== "none" && cs.visibility !== "hidden" && +cs.opacity > 0.02; };
  const inFold = (el) => { const r = el.getBoundingClientRect(); return r.top < vh && r.bottom > 0 && r.width >= 8 && r.height >= 8; };
  const nameOf = (el) => { if (el.id) return "#" + el.id; const c = typeof el.className === "string" && el.className.trim() ? "." + el.className.trim().split(/\s+/)[0] : ""; return el.tagName.toLowerCase() + c; };
  const counted = new Set(); const units = [];
  const add = (el, kind, label) => { if (counted.has(el)) return; units.push({ kind, n: nameOf(el), label: (label || "").replace(/\s+/g, " ").slice(0, 32) });
    counted.add(el); for (const d of el.querySelectorAll("*")) counted.add(d); };
  for (const el of document.querySelectorAll("nav, header, [role='navigation']")) { if (vis(el) && inFold(el)) add(el, "nav", el.textContent.trim()); }
  for (const el of document.querySelectorAll("a, button, [role='button']")) { if (!vis(el) || !inFold(el)) continue; const t = el.textContent.trim(); if (t.length < 2) continue; add(el, "cta", t); }
  for (const el of document.querySelectorAll("body *")) {
    if (counted.has(el) || !vis(el) || !inFold(el)) continue;
    const cs = getComputedStyle(el); if (/^(inline|contents|none)$/.test(cs.display)) continue;
    const direct = [...el.childNodes].filter((c) => c.nodeType === 3).map((c) => c.nodeValue.trim()).join(" ").trim();
    if (direct.length < arg.minTextChars) continue;
    add(el, "text", direct);
  }
  for (const el of document.querySelectorAll("img, video, canvas, svg, picture")) {
    if (counted.has(el) || !vis(el) || !inFold(el)) continue; const r = el.getBoundingClientRect();
    if (r.width < arg.mediaMinPx || r.height < arg.mediaMinPx) continue; add(el, "media", el.tagName.toLowerCase());
  }
  const bgAdded = [];
  for (const el of document.querySelectorAll("body *")) {
    if (counted.has(el) || !vis(el) || !inFold(el)) continue;
    const cs = getComputedStyle(el); if (!cs.backgroundImage || cs.backgroundImage === "none" || !/url\(/.test(cs.backgroundImage)) continue;
    const r = el.getBoundingClientRect(); if (r.width < arg.mediaMinPx || r.height < arg.mediaMinPx) continue;
    if (bgAdded.some((a) => a.contains(el))) continue; bgAdded.push(el);
    units.push({ kind: "media-bg", n: nameOf(el), label: "" });
  }
  // 액센트 개체 — DESIGN 토큰이 없으면 세지 않는다(추측 금지)
  let accent = null;
  { const rc = getComputedStyle(document.documentElement);
    const raw = (rc.getPropertyValue("--accent") || rc.getPropertyValue("--brand") || rc.getPropertyValue("--color-accent") || "").trim();
    if (raw) { const p = document.createElement("span"); p.style.cssText = "position:absolute;opacity:0;pointer-events:none"; p.style.color = raw; document.body.appendChild(p);
      const c = getComputedStyle(p).color; p.remove(); if (c && c !== "rgba(0, 0, 0, 0)") accent = c; } }
  if (accent) { const seen = [];
    for (const el of document.querySelectorAll("body *")) {
      if (counted.has(el) || !vis(el) || !inFold(el)) continue; const cs = getComputedStyle(el);
      const hit = cs.backgroundColor === accent || (parseFloat(cs.borderTopWidth) > 0 && cs.borderTopColor === accent);
      if (!hit || seen.some((a) => a.contains(el))) continue; seen.push(el); units.push({ kind: "accent", n: nameOf(el), label: "" }); } }
  let foldMedia = null;
  for (const el of document.querySelectorAll("body *")) {
    if (!vis(el) || !inFold(el)) continue;
    const r = el.getBoundingClientRect(), cs = getComputedStyle(el), tag = el.tagName.toUpperCase();
    let kind = null;
    if (/^(IMG|VIDEO|CANVAS|PICTURE)$/.test(tag)) kind = tag.toLowerCase();
    else if (tag === "SVG" && Math.max(r.width, r.height) >= arg.svgMinPx) kind = "svg";
    else if (cs.backgroundImage && cs.backgroundImage !== "none" && /url\(/.test(cs.backgroundImage)) kind = "bg";
    if (!kind) continue;
    const a = Math.max(0, Math.min(r.right, vw) - Math.max(r.left, 0)) * Math.max(0, Math.min(r.bottom, vh) - Math.max(r.top, 0));
    if (!foldMedia || a > foldMedia.area) foldMedia = { n: nameOf(el), kind, area: a, wVw: +(r.width / vw).toFixed(2), hVh: +(r.height / vh).toFixed(2), share: +(a / (vw * vh)).toFixed(3) };
  }
  return { units, count: units.length, accentToken: accent, foldMedia };
};

/** 호버 관문(LI-35) + 호버 모션 셀렉터(LI-38 채널 3). CSSOM 을 규칙 단위로 훑는다. */
const HOVER_GATES = () => {
  const PROPS = ["opacity", "visibility", "clip-path", "max-height", "display", "transform"];
  const hoverRules = [], noneRules = [];
  let sheets = 0, blocked = 0;
  const collect = (list, cond) => {
    for (const r of list) {
      const c = r.conditionText || (r.media && r.media.mediaText) || "";
      if (r.cssRules) { collect(r.cssRules, cond + " " + c); continue; }
      if (!r.selectorText || !r.style || !/:hover/.test(r.selectorText)) continue;
      const set = {}; let any = false;
      for (const p of PROPS) { const v = r.style.getPropertyValue(p); if (v) { set[p] = v.trim(); any = true; } }
      if (!any) continue;
      const bases = r.selectorText.split(",").map((x) => x.trim()).filter((x) => /:hover/.test(x))
        .map((x) => x.replace(/:hover/g, "").trim()).filter((x) => x && !/[>+~]$/.test(x));
      if (!bases.length) continue;
      const rec = { sel: r.selectorText.slice(0, 80), bases, set, cond: cond.trim() };
      if (/hover\s*:\s*none/.test(cond) || /pointer\s*:\s*coarse/.test(cond)) noneRules.push(rec); else hoverRules.push(rec);
    }
  };
  for (const sh of document.styleSheets) { sheets++; try { collect(sh.cssRules, ""); } catch { blocked++; } }
  const revealing = (s) => {
    if (s.opacity !== undefined && parseFloat(s.opacity) > 0.05) return true;
    if (s.visibility === "visible") return true;
    if (s.display !== undefined && s.display !== "none") return true;
    if (s["max-height"] !== undefined && parseFloat(s["max-height"]) !== 0) return true;
    const cp = s["clip-path"];
    if (cp !== undefined && (cp === "none" || /inset\(\s*0/.test(cp) || /circle\(\s*(100%|[5-9]\d%)/.test(cp))) return true;
    return false;
  };
  const baseHidden = (el) => { const cs = getComputedStyle(el);
    if (cs.display === "none") return "display:none";
    if (cs.visibility === "hidden") return "visibility:hidden";
    if (+cs.opacity < 0.05) return "opacity:" + cs.opacity;
    if (cs.maxHeight !== "none" && parseFloat(cs.maxHeight) === 0) return "max-height:0";
    const cp = cs.clipPath;
    if (cp && cp !== "none" && (/(inset|polygon|rect)\([^)]*100%/.test(cp) || /circle\(\s*0/.test(cp))) return "clip-path:" + cp.slice(0, 20);
    return null; };
  const hasContent = (el) => el.textContent.trim().length > 0 || !!el.querySelector("img,video,canvas,svg,picture");
  const noneSel = [...new Set(noneRules.flatMap((r) => r.bases))];
  const gates = [], motionSel = [], seenEl = new Set();
  for (const r of hoverRules) {
    if (r.set.transform !== undefined || r.set.opacity !== undefined) motionSel.push(...r.bases);
    if (!revealing(r.set)) continue;
    for (const b of r.bases) {
      let els = []; try { els = [...document.querySelectorAll(b)]; } catch { continue; }
      for (const el of els) {
        if (seenEl.has(el)) continue;
        const why = baseHidden(el); if (!why || !hasContent(el)) continue;
        seenEl.add(el);
        const fb = noneSel.some((s) => { try { return el.matches(s); } catch { return false; } });
        gates.push({ sel: b.slice(0, 48), hoverSel: r.sel.slice(0, 48), base: why, text: el.textContent.trim().replace(/\s+/g, " ").slice(0, 28), fallback: fb });
      }
    }
  }
  return { gates, gated: gates.length, noFallback: gates.filter((g) => !g.fallback).length,
    hoverMotionSelectors: [...new Set(motionSel)].slice(0, 150), hoverRules: hoverRules.length, hoverNoneRules: noneRules.length, sheets, blocked };
};

/** 여백 덩어리(LI-40) — LI-24 의 잉크 기계를 50px 밴드로 잘게 돌린다. scrollY=0 에서 절대 좌표로 잰다. */
const INK_BANDS = (arg) => {
  const vw = innerWidth, vh = innerHeight;
  const docH = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  const B = arg.bandPx, n = Math.max(1, Math.ceil(docH / B));
  const ink = new Array(n).fill(0);
  const vis = (el) => { const cs = getComputedStyle(el); return cs.display !== "none" && cs.visibility !== "hidden" && +cs.opacity > 0.02; };
  const paint = (top, bottom, a) => { if (!(bottom > top) || !(a > 0)) return;
    for (let i = 0; i < n; i++) { const s0 = i * B, ov = Math.max(0, Math.min(bottom, s0 + B) - Math.max(top, s0)); if (ov > 0) ink[i] += a * (ov / (bottom - top)); } };
  for (const el of document.querySelectorAll("body *")) {
    if (!vis(el)) continue;
    const r = el.getBoundingClientRect(); if (r.width < 8 || r.height < 8) continue;
    const isMedia = /^(IMG|VIDEO|SVG|CANVAS|PICTURE)$/.test(el.tagName.toUpperCase());
    const leafText = !el.children.length && el.textContent.trim().length > 0;
    const cs = getComputedStyle(el);
    /* LI-24 는 그라디언트 배경도 잉크로 세지만 LC-55 는 "텍스트·미디어가 없는 구간"을 묻는다 —
       페이지 전체를 덮는 메시 그라디언트가 여백을 0 으로 만들면 안 되므로 url() 배경만 잉크로 친다. */
    const bgInk = cs.backgroundImage !== "none" && /url\(/.test(cs.backgroundImage);
    if (isMedia || bgInk || leafText) paint(r.top + scrollY, r.bottom + scrollY, r.width * r.height);
  }
  for (const st of document.querySelectorAll("body *")) {
    if (getComputedStyle(st).position !== "sticky") continue;
    const track = st.parentElement; if (!track) continue;
    const tr = track.getBoundingClientRect(); if (tr.height <= st.getBoundingClientRect().height + 8) continue;
    let a = 0; for (const el of st.querySelectorAll("img, video, svg, canvas, h1, h2, h3, p, span")) { if (!vis(el)) continue; const r = el.getBoundingClientRect(); if (r.width >= 8 && r.height >= 8) a += r.width * r.height; }
    paint(tr.top + scrollY, tr.bottom + scrollY, a * (tr.height / vh));
  }
  const cov = ink.map((a) => Math.min(1, a / (vw * B)));
  const runs = []; let cur = 0, at = 0;
  for (let i = 0; i < n; i++) { if (cov[i] < arg.emptyBandInk) { if (cur === 0) at = i; cur++; } else { if (cur) runs.push([at, cur]); cur = 0; } }
  if (cur) runs.push([at, cur]);
  const best = runs.reduce((a, b) => (a && a[1] >= b[1] ? a : b), null);
  const secs = [...document.querySelectorAll("[data-omdsec]")].map((el) => { const r = el.getBoundingClientRect(); return { top: r.top + scrollY, bottom: r.bottom + scrollY }; }).sort((a, b) => a.top - b.top);
  const gaps = []; let structural = 0;
  for (let i = 1; i < secs.length; i++) {
    const g = secs[i].top - secs[i - 1].bottom; if (g < -8) continue;
    /* 두 섹션 사이에 섹션이 아닌 콘텐츠(밴드·푸터 등)가 있으면 그건 간격 토큰이 아니라 구조다.
       밴드 하나가 통째로 들어가는 구간에서만 잉크를 확인할 수 있으므로 그 경우에만 배제한다. */
    let occupied = false;
    for (let k = Math.ceil(secs[i - 1].bottom / B); k < Math.floor(secs[i].top / B); k++) if (cov[k] >= arg.emptyBandInk) { occupied = true; break; }
    if (occupied) { structural++; continue; }
    gaps.push(Math.max(0, Math.round(g / arg.gapRoundPx) * arg.gapRoundPx));
  }
  return { bands: n, bandPx: B, emptyBands: cov.filter((c) => c < arg.emptyBandInk).length,
    maxRunVh: best ? +((best[1] * B) / vh).toFixed(2) : 0, maxRunAtVh: best ? +((best[0] * B) / vh).toFixed(2) : null,
    topRunsVh: runs.map((r) => +((r[1] * B) / vh).toFixed(2)).sort((a, b) => b - a).slice(0, 5),
    gaps, structuralGaps: structural, distinctGaps: [...new Set(gaps)].sort((a, b) => a - b) };
};

/** 홀드 구간 한가운데에서 읽을 것이 있는지(LI-39). */
const HOLD_CONTENT = (arg) => {
  const vh = innerHeight;
  const vis = (el) => { const cs = getComputedStyle(el); return cs.display !== "none" && cs.visibility !== "hidden" && +cs.opacity > 0.05; };
  let texts = 0; const samples = [];
  for (const el of document.querySelectorAll("body *")) {
    if (!vis(el)) continue;
    const r = el.getBoundingClientRect();
    if (r.bottom <= 0 || r.top >= vh || r.width < 8 || r.height < 8) continue;
    const direct = [...el.childNodes].filter((c) => c.nodeType === 3).map((c) => c.nodeValue.trim()).join(" ").trim();
    if (!direct) continue;
    if ((parseFloat(getComputedStyle(el).fontSize) || 0) < arg.minTextPx) continue;
    if (direct.split(/\s+/).filter(Boolean).length < arg.minWords) continue;
    texts++; if (samples.length < 2) samples.push(direct.slice(0, 32));
  }
  let result = 0;
  for (const el of document.querySelectorAll("[data-result], .is-settled")) {
    if (!vis(el)) continue; const r = el.getBoundingClientRect();
    if (r.bottom > 0 && r.top < vh && r.width > 8 && r.height > 8) result++;
  }
  return { texts, result, samples };
};

/** JS 호버 관문 후보(LI-35 보완). CSS :hover 로만 재면 pointerenter 로 여닫는 층을 통째로 놓친다.
    addEventListener 후킹(addInitScript)이 붙여 둔 data-omdhover 를 근거로, 그 안의 "기본 상태에서 감춰진
    콘텐츠"를 표시해 두고 Node 쪽에서 실제로 마우스를 올려 열리는지 확인한다. */
const HOVER_CANDIDATES = (arg) => {
  const vw = innerWidth, vh = innerHeight;
  const nameOf = (el) => { if (el.id) return "#" + el.id; const c = typeof el.className === "string" && el.className.trim() ? "." + el.className.trim().split(/\s+/)[0] : ""; return el.tagName.toLowerCase() + c; };
  const hiddenState = (el) => { const cs = getComputedStyle(el);
    if (cs.display === "none") return "display:none";
    if (cs.visibility === "hidden") return "visibility:hidden";
    if (+cs.opacity < 0.05) return "opacity:" + cs.opacity;
    if (cs.maxHeight !== "none" && parseFloat(cs.maxHeight) === 0) return "max-height:0";
    const cp = cs.clipPath; if (cp && cp !== "none" && (/(inset|polygon|rect)\([^)]*100%/.test(cp) || /circle\(\s*0/.test(cp))) return "clip-path";
    return null; };
  const hasContent = (el) => el.textContent.trim().length > 3 || !!el.querySelector("img,video,canvas,svg,picture");
  const out = [];
  let n = arg.seq || 0;
  for (const host of document.querySelectorAll("[data-omdhover]")) {
    const r = host.getBoundingClientRect();
    if (r.width < 24 || r.height < 24) continue;
    if (r.bottom <= 8 || r.top >= vh - 8 || r.right <= 8 || r.left >= vw - 8) continue;
    const hidden = [];
    for (const d of host.querySelectorAll("*")) {
      if (hidden.length >= 6) break;
      const w = hiddenState(d); if (!w || !hasContent(d)) continue;
      const dr = d.getBoundingClientRect();
      if (w !== "display:none" && (dr.width < 24 || dr.height < 16)) continue;
      d.setAttribute("data-omdhid", String(n));
      hidden.push({ hid: n++, n: nameOf(d), state: w });
    }
    host.setAttribute("data-omdhhost", String(arg.hostSeq + out.length));
    out.push({ host: nameOf(host), types: host.getAttribute("data-omdhover"), hostId: arg.hostSeq + out.length,
      cx: Math.round(Math.max(4, Math.min(vw - 4, r.left + r.width * 0.2))),
      cy: Math.round(Math.max(4, Math.min(vh - 4, r.top + r.height * 0.25))),
      cx2: Math.round(Math.max(4, Math.min(vw - 4, r.left + r.width * 0.8))),
      cy2: Math.round(Math.max(4, Math.min(vh - 4, r.top + r.height * 0.75))),
      hids: hidden.map((h) => h.hid), hidden });
  }
  return { seq: n, hosts: out };
};
/** 숙주 서브트리의 변형·투명도 지문 — 호버 전후를 비교해 LC-49 "리프트·밝기" 상한을 넘는지 본다. */
const HOVER_SIG = (arg) => {
  const host = document.querySelector('[data-omdhhost="' + arg.hostId + '"]'); if (!host) return [];
  const dec = (t) => { if (!t || t === "none") return [0, 0, 1, 0];
    const v = (t.match(/-?[\d.e+]+/g) || []).map(Number);
    if (t.startsWith("matrix3d") && v.length >= 16) return [v[12], v[13], Math.hypot(v[0], v[1], v[2]), Math.atan2(v[1], v[0]) * 180 / Math.PI];
    if (v.length >= 6) return [v[4], v[5], Math.hypot(v[0], v[1]), Math.atan2(v[1], v[0]) * 180 / Math.PI];
    return [0, 0, 1, 0]; };
  const out = [];
  for (const el of [host, ...host.querySelectorAll("*")]) { if (out.length >= 60) break;
    const cs = getComputedStyle(el); const d = dec(cs.transform); out.push([d[0], d[1], d[2], d[3], +cs.opacity]); }
  return out;
};
const HOVER_PROBE = (arg) => {
  let revealed = 0; const samples = [];
  for (const h of arg.hids) {
    const el = document.querySelector('[data-omdhid="' + h + '"]'); if (!el) continue;
    const cs = getComputedStyle(el);
    const open = cs.display !== "none" && cs.visibility !== "hidden" && +cs.opacity > 0.5 &&
      !(cs.maxHeight !== "none" && parseFloat(cs.maxHeight) === 0);
    if (open) { revealed++; if (samples.length < 2) samples.push((el.textContent.trim().slice(0, 24) || el.tagName.toLowerCase())); }
  }
  return { revealed, samples };
};

// ---------------------------------------------------------------- 판정 (LI-34~40)
function judgeExtra(ext) {
  const R = []; const T = THRESHOLDS;
  const push = (id, status, detail) => R.push({ id, status, detail });
  const median = (xs) => { const a = [...xs].sort((x, y) => x - y); return a.length ? a[Math.floor(a.length / 2)] : null; };
  const S = (ext.sections || []).filter((s) => !s.unmeasured);
  const fm = ext.fold && ext.fold.foldMedia;

  // LI-34 주 미디어 점유율 — LC-51
  if (!S.length) push("LI-34", "WARN", "섹션을 식별하지 못했다 — 주 미디어 점유율 측정 불가");
  else {
    const shares = S.map((s) => s.maxMediaShare);
    const med = median(shares) ?? 0, mx = Math.max(...shares);
    const cov = ext.foldCoverage?.coverage ?? null;
    const foldOk = cov !== null && cov >= T.li34.foldCoverageMin;
    const ok = med >= T.li34.medianMediaShare && mx >= T.li34.pageMaxShare && foldOk;
    const worst = [...S].sort((a, b) => a.maxMediaShare - b.maxMediaShare).slice(0, 4);
    push("LI-34", ok ? "PASS" : "FAIL",
      `주 미디어/뷰포트 중앙 ${med.toFixed(2)}(≥${T.li34.medianMediaShare}) · 페이지 최대 ${mx.toFixed(2)}(≥${T.li34.pageMaxShare}) · 폴드 커버리지 ${cov === null ? "?" : (100 * cov).toFixed(1) + "%"}(≥${100 * T.li34.foldCoverageMin}%, 히트테스트${fm ? `; 박스 ${fm.n} ${fm.wVw}vw×${fm.hVh}vh` : ""}) · 최소 섹션 ${worst.map((s) => `${s.i}${s.name}:${s.maxMediaShare.toFixed(2)}`).join(", ")} — LC-51`);
  }

  // LI-35 호버 관문 — LC-49/58
  const hv = ext.hover;
  const js = ext.jsHover || { probed: 0, candidates: 0, gates: [] };
  const total = (hv ? hv.gated : 0) + js.gates.length;
  const jsMoved = js.gates.filter((g) => (g.movedEls || 0) > 0);
  const jsTxt = `JS 포인터 층 후보 ${js.candidates}개 중 ${js.probed}개 프로브 → 호버로 열린 노드 ${js.gates.reduce((a, g) => a + (g.revealed || 0), 0)}개 · LC-49 상한(리프트 ${T.li35.hoverTranslatePx}px·확대 ${T.li35.hoverScaleDelta}·회전 ${T.li35.hoverRotateDeg}°) 초과 층 ${jsMoved.length}개${jsMoved.length ? "(" + jsMoved.slice(0, 3).map((g) => `${g.host} ${g.worst}`).join(", ") + ")" : ""}`;
  if (!hv || (hv.sheets && hv.blocked === hv.sheets)) push("LI-35", "WARN", `스타일시트를 읽지 못했다(cross-origin) — CSS 호버 관문 측정 불가 · ${jsTxt}`);
  else if (total > T.li35.maxGates) push("LI-35", "FAIL",
    `호버로만 열리는 콘텐츠 노드 ${total}개(허용 ${T.li35.maxGates}) = CSS ${hv.gated} + JS ${js.gates.length} · CSS 관문 중 hover:none/pointer:coarse 대체 없음 ${hv.noFallback}개 · 호버 규칙 ${hv.hoverRules}개/터치 대체 규칙 ${hv.hoverNoneRules}개 · ${jsTxt}${hv.gated ? " — " + hv.gates.slice(0, 3).map((g) => `${g.sel}(${g.base}${g.fallback ? ", 대체 있음" : ""})`).join(", ") : ""} — LC-49/58`);
  else if (js.candidates > js.probed) push("LI-35", "WARN",
    `CSS 관문 0개이고 프로브한 ${js.probed}개는 열리지 않았지만 포인터 리스너를 단 층 ${js.candidates}개 중 ${js.candidates - js.probed}개는 예산(섹션당 2·최대 ${T.li35.maxProbes}) 밖이라 확인하지 못했다 — 측정 불완전`);
  else push("LI-35", "PASS", `호버로만 열리는 콘텐츠 노드 0개 · CSS 호버 규칙 ${hv.hoverRules}개/터치 대체 ${hv.hoverNoneRules}개 · ${jsTxt} — LC-49/58`);

  // LI-36 초점비 — LC-52
  if (!S.length) push("LI-36", "WARN", "섹션 미식별 — 초점비 측정 불가");
  else {
    const measured = S.filter((s) => s.focusRatio !== null);
    const bad = measured.filter((s) => s.focusRatio < T.li36.minFocusRatio);
    push("LI-36", bad.length > T.li36.maxViolatingSections ? "FAIL" : "PASS",
      `1등:2등 면적비 <${T.li36.minFocusRatio} 인 섹션 ${bad.length}개(허용 ${T.li36.maxViolatingSections}, 측정 ${measured.length}/${S.length})${bad.length ? " — " + bad.slice(0, 5).map((s) => `${s.i}${s.name}:${s.focusRatio}`).join(", ") : ""} — LC-52`);
  }

  // LI-37 폴드 의미 단위 — LC-54
  if (!ext.fold) push("LI-37", "WARN", "폴드 계측 실패");
  else {
    const u = ext.fold.units, n = u.length;
    const kinds = u.reduce((a, x) => { a[x.kind] = (a[x.kind] || 0) + 1; return a; }, {});
    push("LI-37", n <= T.li37.maxFoldUnits ? "PASS" : "FAIL",
      `폴드 의미 단위 ${n}개(≤${T.li37.maxFoldUnits}) [${Object.entries(kinds).map(([k, c]) => `${k}×${c}`).join(" ")}]${ext.fold.accentToken ? "" : " · --accent/--brand 토큰 없음(액센트 개체 미집계)"} — ${u.slice(0, 8).map((x) => x.kind + ":" + x.n).join(", ")} — LC-54`);
  }

  // LI-38 동시 모션 채널 — LC-52
  if (!S.length) push("LI-38", "WARN", "섹션 미식별 — 모션 채널 측정 불가");
  else {
    const over = S.filter((s) => s.channels > T.li38.maxChannelsPerSection);
    push("LI-38", over.length ? "FAIL" : "PASS",
      `섹션당 동시 모션 채널 최대 ${Math.max(...S.map((s) => s.channels))}(≤${T.li38.maxChannelsPerSection}) · 초과 ${over.length}개 — ${S.map((s) => `${s.i}:${s.channels}${s.channels ? "(" + Object.entries(s.channelDetail).filter(([k, v]) => v && ["scrub", "idle", "hover", "entrance"].includes(k)).map(([k]) => k[0]).join("") + ")" : ""}`).join(" ")} — LC-52`);
  }

  // LI-39 홀드 콘텐츠 — LC-56
  const H = ext.holds;
  if (!H) push("LI-39", "PASS", "스크럽/핀 타임라인 없음 — 해당 없음");
  else if (!H.measured.length) push("LI-39", H.note && /환산/.test(H.note) ? "WARN" : "PASS", H.note || "측정 대상 홀드 없음");
  else {
    const empty = H.measured.filter((h) => h.texts === 0 && h.result === 0);
    push("LI-39", empty.length ? "FAIL" : "PASS",
      `홀드 ${H.measured.length}개 중 읽을 것 없는 구간 ${empty.length}개(허용 0) — ${H.measured.map((h) => `${h.trigger}@${h.midY}px 텍스트 ${h.texts}·결과 ${h.result}`).join(" · ")} — LC-56`);
  }

  // LI-40 여백 덩어리 — LC-55
  const ib = ext.ink;
  if (!ib) push("LI-40", "WARN", "잉크 밴드 계측 실패");
  else {
    const ok = ib.maxRunVh >= T.li40.minMaxEmptyRunVh && ib.distinctGaps.length <= T.li40.maxDistinctGaps;
    push("LI-40", ok ? "PASS" : "FAIL",
      `최장 빈 세로 구간 ${ib.maxRunVh}vh(≥${T.li40.minMaxEmptyRunVh}, @${ib.maxRunAtVh}vh) · 섹션 간격 ${ib.distinctGaps.length}종(≤${T.li40.maxDistinctGaps}) [${ib.distinctGaps.join("/") || "-"}] · 빈 밴드 ${ib.emptyBands}/${ib.bands}(${ib.bandPx}px) · 섹션 사이 콘텐츠 낀 구간 ${ib.structuralGaps}개(간격 값에서 제외) — LC-55`);
  }
  return R;
}

// ---------------------------------------------------------------- 실행
const { chromium, launchOptions } = chromiumRuntime();
const browser = await chromium.launch({ headless: true, ...launchOptions });
const results = [];
let anyFail = false;
for (const f of files) {
  const abs = resolve(f);
  if (!existsSync(abs)) { results.push({ file: f, fatal: "missing" }); anyFail = true; continue; }
  const context = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 1, colorScheme: "light" });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e).slice(0, 120)));
  try {
    /* LI-35: JS 로 여닫는 호버 층은 CSSOM 에 안 나온다 — 리스너 등록을 후킹해 숙주를 표시해 둔다. */
    await page.addInitScript(() => {
      const HOVER = /^(pointerenter|pointerover|pointermove|mouseenter|mouseover|mousemove)$/;
      const orig = EventTarget.prototype.addEventListener;
      EventTarget.prototype.addEventListener = function (type, ...rest) {
        try {
          if (HOVER.test(String(type)) && this instanceof Element) {
            const prev = this.getAttribute("data-omdhover") || "";
            if (!prev.split(",").includes(String(type))) this.setAttribute("data-omdhover", (prev ? prev + "," : "") + type);
          }
        } catch { /* 무시 */ }
        return orig.call(this, type, ...rest);
      };
    });
    await page.goto("file://" + abs, { waitUntil: "load", timeout: 20000 });
    await page.waitForTimeout(800);
    await page.evaluate(TAG);
    const states = []; let steps = 0;
    for (let step = 0; step < 30; step++) {
      await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), step * VIEWPORT.height);
      await page.waitForTimeout(450);
      states.push(await page.evaluate(SNAP)); steps++;
      const done = await page.evaluate(() => Math.round(window.scrollY) + innerHeight >= Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - 4);
      if (done) break;
    }
    const ids = new Set(); states.forEach((s) => Object.keys(s).forEach((k) => ids.add(k)));
    const reveals = { tracked: ids.size, steps, opacity: 0, transform: 0, clip: 0, filter: 0 };
    const revealIds = [];
    for (const id of ids) { const seq = states.map((s) => s[id]).filter(Boolean); if (seq.length < 2) continue; const ops = seq.map((s) => s[0]); let revealed = false; if (Math.min(...ops) < 0.6 && Math.max(...ops) > 0.9) { reveals.opacity++; revealed = true; } const tfs = new Set(seq.map((s) => s[1])); if (tfs.size > 1 && tfs.has("none")) { reveals.transform++; revealed = true; } if (revealed) revealIds.push(id); if (new Set(seq.map((s) => s[2])).size > 1) reveals.clip++; if (new Set(seq.map((s) => s[3])).size > 1) reveals.filter++; }
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.waitForTimeout(600);
    const m = await page.evaluate(STRUCT);
    const scrub = await page.evaluate(SCRUB);
    // ── LI-34~40 (scale-and-simplicity §4): 섹션별로 "가장 잘 보이는" 위치까지 스크롤해 크기·초점·모션을 잰다.
    const bodyPx = (() => { const cand = m.fontHistogram.filter(([px]) => +px >= 12 && +px <= 19); return cand.length ? +cand[0][0] : 16; })();
    const geo = await page.evaluate(SECTION_GEO);
    const fold = await page.evaluate(FOLD_UNITS, { minTextChars: THRESHOLDS.li37.minTextChars, mediaMinPx: THRESHOLDS.li37.mediaMinPx, svgMinPx: THRESHOLDS.li34.svgMinPx });
    const foldCov = await page.evaluate(FOLD_COVERAGE, { grid: THRESHOLDS.li34.foldGrid });
    const hover = await page.evaluate(HOVER_GATES);
    const ink = await page.evaluate(INK_BANDS, THRESHOLDS.li40);
    const maxY = Math.max(0, m.docHeightPx - VIEWPORT.height);
    const sectionsExt = [];
    const hoverHosts = []; let hoverSeq = 0, hoverSeqHost = 0;
    for (const g of geo.list) {
      const target = Math.max(0, Math.min(Math.round(g.top + g.h / 2 - VIEWPORT.height / 2), maxY));
      await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), target);
      await page.waitForTimeout(900); // 스크럽 스무딩이 멎은 뒤에 유휴 드리프트를 재야 한다
      sectionsExt.push(await page.evaluate(SECTION_MEASURE, { i: g.i, name: g.name, bodyPx,
        svgMinPx: THRESHOLDS.li34.svgMinPx, largeTextMultiple: THRESHOLDS.li36.largeTextMultiple,
        idleSampleMs: THRESHOLDS.li38.idleSampleMs, hoverSel: hover.hoverMotionSelectors, revealIds }));
      const cand = await page.evaluate(HOVER_CANDIDATES, { seq: hoverSeq, hostSeq: hoverSeqHost });
      hoverSeq = cand.seq;
      hoverSeqHost += cand.hosts.length;
      for (const h of cand.hosts.slice(0, THRESHOLDS.li35.probesPerSection)) hoverHosts.push({ section: g.i, y: target, ...h });
    }
    let holds = null;
    if (scrub.entries && scrub.entries.length) {
      const wins = new Map();
      for (const e of scrub.entries) { const k = `${e.trigger}|${e.start}|${e.end}`; if (!wins.has(k)) wins.set(k, e); }
      const measured = [];
      for (const e of wins.values()) {
        if (e.settleY == null || e.holdEndY == null || e.holdEndY - e.settleY < THRESHOLDS.li39.minHoldPx) continue;
        const mid = Math.max(0, Math.min(Math.round((e.settleY + e.holdEndY) / 2), maxY));
        await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), mid);
        await page.waitForTimeout(700);
        const hc = await page.evaluate(HOLD_CONTENT, THRESHOLDS.li39);
        measured.push({ trigger: e.trigger, settleY: e.settleY, holdEndY: e.holdEndY, midY: mid, ...hc });
      }
      holds = { measured, note: measured.length ? null : `정착 후 홀드가 ${THRESHOLDS.li39.minHoldPx}px 미만 — 측정 대상 없음` };
    } else if (scrub.cssRanges && scrub.cssRanges.length) {
      holds = { measured: [], note: "CSS view() 타임라인만 있어 홀드 구간을 스크롤 좌표로 환산할 수 없다 — 측정 불가" };
    }
    /* JS 호버 프로브: 섹션 계측이 끝난 뒤에 돈다 — 마우스를 올린 채로 다음 섹션을 재면 유휴 드리프트가 오염된다. */
    const jsGates = []; let probed = 0;
    for (const h of hoverHosts) {
      if (probed >= THRESHOLDS.li35.maxProbes) break;
      await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), h.y);
      await page.waitForTimeout(400);
      const sigA = await page.evaluate(HOVER_SIG, { hostId: h.hostId });
      await page.mouse.move(h.cx, h.cy, { steps: 4 });
      await page.waitForTimeout(450);
      const pr = await page.evaluate(HOVER_PROBE, { hids: h.hids });
      const sigB = await page.evaluate(HOVER_SIG, { hostId: h.hostId });
      await page.mouse.move(h.cx2, h.cy2, { steps: 4 });
      await page.waitForTimeout(450);
      const pr2 = await page.evaluate(HOVER_PROBE, { hids: h.hids });
      const sigC = await page.evaluate(HOVER_SIG, { hostId: h.hostId });
      await page.mouse.move(1, 1); await page.waitForTimeout(200);
      probed++;
      const L = THRESHOLDS.li35;
      const delta = (X, Y) => { let n = 0, w = null;
        for (let k = 0; k < Math.min(X.length, Y.length); k++) {
          const a0 = X[k], b0 = Y[k];
          const dxy = Math.max(Math.abs(b0[0] - a0[0]), Math.abs(b0[1] - a0[1]));
          const ds = Math.abs(b0[2] - a0[2]), dr = Math.abs(b0[3] - a0[3]), dop = Math.abs(b0[4] - a0[4]);
          if (dxy > L.hoverTranslatePx || ds > L.hoverScaleDelta || dr > L.hoverRotateDeg || dop > L.hoverOpacityDelta) {
            n++; if (!w) w = `이동 ${dxy.toFixed(0)}px·확대 ${ds.toFixed(2)}·회전 ${dr.toFixed(1)}°·투명도 ${dop.toFixed(2)}`; }
        }
        return { n, w }; };
      const d1 = delta(sigA, sigB), d2 = delta(sigB, sigC), d3 = delta(sigA, sigC);
      const best = [d1, d2, d3].reduce((x, y) => (x.n >= y.n ? x : y));
      const moved = best.n, worst = best.w;
      if (pr2.revealed > pr.revealed) { pr.revealed = pr2.revealed; pr.samples = pr2.samples; }
      if (pr.revealed > 0 || moved > 0) jsGates.push({ section: h.section, host: h.host, types: h.types, revealed: pr.revealed, movedEls: moved, worst, states: h.hidden.map((x) => x.state), samples: pr.samples });
    }
    const ext = { foldCoverage: foldCov, jsHover: { candidates: hoverHosts.length, probed, gates: jsGates },
      sectionSource: geo.source, sectionGeo: geo.list, sections: sectionsExt, fold, hover, ink, holds, bodyPx };
    const checks = judge(m, reveals, scrub).concat(judgeExtra(ext));
    const fails = checks.filter((c) => c.status === "FAIL").length;
    if (fails) anyFail = true;
    results.push({ file: f, fails, warns: checks.filter((c) => c.status === "WARN").length, checks, measurements: m, reveals, scrub, scale: ext, errors: errors.slice(0, 3) });
    if (OUT) { mkdirSync(OUT, { recursive: true }); writeFileSync(join(OUT, basename(dirname(abs)) + "-" + basename(abs, ".html") + ".landing.json"), JSON.stringify({ file: f, checks, measurements: m, reveals, scrub, scale: ext }, null, 1)); }
  } catch (e) {
    results.push({ file: f, fatal: String(e).split("\n")[0] }); anyFail = true;
  } finally { await context.close(); }
}
await browser.close();

if (asJson) console.log(JSON.stringify(results, null, 1));
else for (const r of results) {
  console.log(`\n${r.file}${r.fatal ? `  FATAL ${r.fatal}` : `  FAIL ${r.fails} · WARN ${r.warns} · page ${r.measurements.pageVh} vh · sections ${r.measurements.sections.length}`}`);
  for (const c of r.checks || []) console.log(`  ${c.status === "PASS" ? "ok  " : c.status === "WARN" ? "warn" : "FAIL"} ${c.id.padEnd(6)} ${c.detail}`);
}
console.log(`\nLANDING_INTEGRITY_DONE files=${results.length} fail=${results.filter((r) => r.fatal || r.fails).length}`);
process.exit(anyFail ? 1 : 0);
