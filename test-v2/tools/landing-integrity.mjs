#!/usr/bin/env node
/**
 * landing-integrity.mjs — 코덱스 §5의 기계 규칙 LI-1…LI-23을 렌더 파일에 적용한다.
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
  const density = { mediaCount: mediaEls.length, foldMedia, craft, perVh: +(mediaEls.length / Math.max(docH / vh, 1)).toFixed(2), videos: document.querySelectorAll("video").length, sliceInk };
  return { docHeightPx: docH, pageVh: +(docH / vh).toFixed(2), sections, density, fold: { biggestText, biggestMedia }, motion: { declarations: decl, topDurationsMs: top(durations), topEasings: top(easings, 8), propMax }, videos, prefersReducedMotionRule: prefersReduced, fontHistogram: top(allFonts, 12), reflexes: { cardGridGroups4, nestedCards, imageHosts: Object.entries(hosts), bodyLineP50: lineWidths[Math.floor(lineWidths.length / 2)] ?? null, h1Count: document.querySelectorAll("h1").length }, scrollSnap: { root: rootSnap, body: bodySnap } };
};

// ---------------------------------------------------------------- 판정
const isEaseIn = (e) => { if (!e) return false; if (/^ease-in$/.test(e.trim())) return true; const m = e.match(/cubic-bezier\(\s*([\d.]+)\s*,\s*(-?[\d.]+)\s*,\s*([\d.]+)\s*,\s*(-?[\d.]+)/); if (!m) return false; const [x1, y1, x2, y2] = m.slice(1).map(Number); return y1 < x1 - 0.15 && y2 <= x2 + 0.05; };
function judge(m, reveals) {
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
  push("LI-7", ratio !== null && (ratio < 2.5 || ratio > 7.5) ? "FAIL" : ratio === null ? "WARN" : "PASS", `display:body ${display}/${bodyPx} = ${ratio ? ratio.toFixed(2) : "?"}`);
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
  const si = m.density?.sliceInk ?? [];
  const body = si.slice(1); // 폴드는 LI-3 가 따로 본다
  const thin = body.map((v, i) => [i + 1, v]).filter(([, v]) => v < 0.12);
  push("LI-24", thin.length ? "FAIL" : "PASS",
    `잉크 12% 미만 화면 ${thin.length}/${body.length}${thin.length ? " — " + thin.slice(0, 5).map(([i, v]) => `#${i} ${(100 * v).toFixed(0)}%`).join(", ") : ""} (LC-4 실측대역 26–54%)`);
  push("LI-25", (m.density?.foldMedia ?? 0) < 3 ? "FAIL" : "PASS",
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
  push("LI-26", (m.density?.perVh ?? 0) < 1 ? "FAIL" : "PASS",
    `미디어 ${m.density?.mediaCount ?? 0}개 / ${m.pageVh} vh = ${m.density?.perVh ?? 0}개/vh (최소 1.0), video ${m.density?.videos ?? 0}`);
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
    for (const id of ids) { const seq = states.map((s) => s[id]).filter(Boolean); if (seq.length < 2) continue; const ops = seq.map((s) => s[0]); if (Math.min(...ops) < 0.6 && Math.max(...ops) > 0.9) reveals.opacity++; const tfs = new Set(seq.map((s) => s[1])); if (tfs.size > 1 && tfs.has("none")) reveals.transform++; if (new Set(seq.map((s) => s[2])).size > 1) reveals.clip++; if (new Set(seq.map((s) => s[3])).size > 1) reveals.filter++; }
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.waitForTimeout(600);
    const m = await page.evaluate(STRUCT);
    const checks = judge(m, reveals);
    const fails = checks.filter((c) => c.status === "FAIL").length;
    if (fails) anyFail = true;
    results.push({ file: f, fails, warns: checks.filter((c) => c.status === "WARN").length, checks, measurements: m, reveals, errors: errors.slice(0, 3) });
    if (OUT) { mkdirSync(OUT, { recursive: true }); writeFileSync(join(OUT, basename(dirname(abs)) + "-" + basename(abs, ".html") + ".landing.json"), JSON.stringify({ file: f, checks, measurements: m, reveals }, null, 1)); }
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
