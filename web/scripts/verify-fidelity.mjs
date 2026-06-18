/**
 * Spike for issue #33 — validate the per-token-family pixel-fidelity MEASUREMENT MATH.
 *
 * Chain under test:  DESIGN.md token → rendered preview → screenshot → measured value → Δ → fidelity.
 * Families: COLOR (CIEDE2000 on pixel swatches), RADIUS (corner-curvature by area method),
 *           TYPE (computed-style fontSize/weight/lineHeight vs the declared metadata label).
 *
 * De-risk goal (NOT the product yet): prove the measurement (a) recovers the declared token
 * faithfully and (b) DISCRIMINATES (drops for a wrong token). Real external-UI crops + brand
 * webfont loading + threshold tuning are #34.
 *
 * Canonical references: web/references/<id>/DESIGN.md (rendered live by /reference/<id>).
 * Run: `node scripts/verify-fidelity.mjs [ref...]`  (defaults: toss apple)
 *
 * NOTE: do NOT assume the caller has playwright/chromium installed — see preflight below.
 */

// ── preflight: optional heavy runtime (omd convention: detect → offer install → no auto-install) ──
let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch {
  console.error(
    "✗ Fidelity gate needs a headless browser, but `playwright` is not installed.\n" +
    "  One-time setup (from web/):\n" +
    "    npm i -D playwright        # the package\n" +
    "    npx playwright install chromium   # the browser binary\n"
  );
  process.exit(2);
}
let sharp;
try {
  sharp = (await import("sharp")).default;
} catch {
  console.error("✗ `sharp` is not installed. From web/:  npm i -D sharp");
  process.exit(2);
}

const BASE = process.env.OMD_BASE || "http://localhost:3335";
const DSF = 2; // device scale factor — 2× pixels for sub-pixel radius/type precision
const refs = process.argv.slice(2);
if (!refs.length) refs.push("toss", "apple");

// color math (CIEDE2000) — single source (issue #37)
import { hexToRgb, rgbHex as rgbToHex, rgbToLab, deltaE2000 } from "./lib/omd-core.mjs";
const clampPct = (n) => Math.max(0, Math.min(100, n));
const colorFidelity = (dE, t = 15) => clampPct(100 * (1 - dE / t));   // JND≈2.3; ΔE≥15 → 0%
const pxFidelity = (delta, t = 4) => clampPct(100 * (1 - Math.abs(delta) / t)); // radius/lineHeight px tolerance
const bar = (pct) => "█".repeat(Math.round(pct / 10)).padEnd(10, "·") + ` ${pct.toFixed(1)}%`;

// ── raw-pixel helpers (element-handle screenshots — auto-scroll, capture just the element,
//    so below-the-fold boxes work; page.screenshot clip only sees the viewport) ──────────
async function avgFillEl(handle) {
  const buf = await handle.screenshot();
  const { width, height } = await sharp(buf).metadata();
  const cw = Math.max(2, Math.floor(width * 0.44)), chh = Math.max(2, Math.floor(height * 0.44));
  const left = Math.floor((width - cw) / 2), top = Math.floor((height - chh) / 2);
  const { data } = await sharp(buf).extract({ left, top, width: cw, height: chh }).resize(1, 1, { fit: "fill" }).raw().toBuffer({ resolveWithObject: true });
  return [data[0], data[1], data[2]];
}

// ── COLOR: ColorSwatch <button> > div[style=background:#hex] + .font-mono label ──
async function collectSwatches(page) {
  const handles = await page.$$('div[style*="background"]');
  const seen = new Set(), out = [];
  for (const h of handles) {
    const meta = await h.evaluate((el) => {
      if (!el.closest("button")) return null; // swatches are buttons; skips header logo bg
      const m = /#([0-9a-fA-F]{6})/.exec(el.getAttribute("style") || "");
      if (!m) return null;
      const r = el.getBoundingClientRect();
      if (r.width < 24 || r.height < 24) return null;
      const declared = ("#" + m[1]).toLowerCase();
      return { declared, label: el.closest("button")?.querySelector(".font-mono")?.textContent?.trim() || "", key: declared + "@" + Math.round(r.x) + "," + Math.round(r.y) };
    });
    if (!meta || seen.has(meta.key)) continue;
    seen.add(meta.key);
    out.push({ handle: h, ...meta });
    if (out.length >= 16) break;
  }
  return out;
}

// ── RADIUS: Border-Radius-Scale boxes (h-12 w-12, inline border-radius) ──
function declRadiusPx(decl, box) {
  const half = Math.min(box.w, box.h) / 2;
  decl = (decl || "").trim();
  if (/^\d+(\.\d+)?px$/.test(decl)) return Math.min(parseFloat(decl), half);
  if (/^9999px$/.test(decl) || /pill/i.test(decl)) return half;
  if (/%$/.test(decl)) return Math.min((parseFloat(decl) / 100) * Math.min(box.w, box.h), half);
  return 0;
}
async function collectRadiusBoxes(page) {
  const handles = await page.$$('[style*="border-radius"]');
  const out = [];
  for (const h of handles) {
    const meta = await h.evaluate((el) => {
      if (!(el.getAttribute("class") || "").includes("h-12")) return null; // dedicated radius-scale boxes only
      const decl = el.style.borderRadius; if (!decl) return null;
      const r = el.getBoundingClientRect();
      if (r.width < 16 || r.height < 16) return null;
      return { declared: decl, label: el.closest("tr")?.querySelector("td")?.textContent?.trim() || "", w: r.width, h: r.height };
    });
    if (!meta) continue;
    out.push({ handle: h, ...meta });
    if (out.length >= 8) break;
  }
  return out;
}
// Corner-DIAGONAL sub-pixel method. Scanning the 45° diagonal out of the corner stays
// INSIDE the rounded cutout and never touches the box's straight edges (whose own AA
// wrecked an edge-scan). The diagonal crosses the corner arc at distance t=(1−1/√2)·R
// from the corner ⟹ R = t / (1 − 1/√2). Find the bg→fill coverage crossing (0.5) with
// linear sub-pixel interpolation. Returns CSS px.
const DIAG_K = 1 - 1 / Math.SQRT2; // ≈ 0.29289
async function measureRadius(handle, declPx, box) {
  void declPx;
  const buf = await handle.screenshot();
  const meta = await sharp(buf).metadata();
  const scale = meta.width / box.w; // ≈ DSF
  const Sdev = Math.max(6, Math.round((Math.min(box.w, box.h) / 2) * scale)); // cover up to half (pill)
  const { data, info } = await sharp(buf).extract({ left: 0, top: 0, width: Sdev, height: Sdev }).raw().toBuffer({ resolveWithObject: true });
  const ch = info.channels, W = info.width, H = info.height, n = Math.min(W, H);
  const px = (x, y) => { const i = (y * W + x) * ch; return [data[i], data[i + 1], data[i + 2]]; };
  const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
  const bgRef = px(0, 0), fillRef = px(W - 1, H - 1); // extreme corner = bg, deep inside = fill
  if (dist(bgRef, fillRef) < 24) return 0; // no contrast (radius 0 / fill≈bg) → sharp
  const cov = (p) => { const db = dist(p, bgRef), df = dist(p, fillRef); return db / (db + df); }; // 0=bg, 1=fill
  let t = 0; // sub-pixel diagonal index of the bg→fill crossing
  for (let k = 0; k < n - 1; k++) {
    const a = cov(px(k, k)), b = cov(px(k + 1, k + 1));
    if (a < 0.5 && b >= 0.5) { t = k + (0.5 - a) / (b - a); break; }
  }
  return (t / DIAG_K) / scale; // device px → CSS px
}

// ── TYPE: specimen div (inline font-size) vs the declared "Npx · W · lh" metadata label ──
async function collectType(page) {
  return page.evaluate(() => {
    const out = [];
    for (const el of document.querySelectorAll('div.truncate[style*="font-size"]')) {
      const meta = el.previousElementSibling?.lastElementChild?.textContent?.trim() || "";
      const m = /(\d+(?:\.\d+)?)px\s*·\s*(\d+)\s*·\s*([\d.]+)/.exec(meta);
      if (!m) continue;
      const cs = getComputedStyle(el);
      const renderedSize = parseFloat(cs.fontSize);
      const lhPx = parseFloat(cs.lineHeight);
      out.push({
        declaredSize: parseFloat(m[1]), declaredWeight: parseInt(m[2], 10), declaredLh: parseFloat(m[3]),
        renderedSize, renderedWeight: parseInt(cs.fontWeight, 10),
        renderedLh: Number.isFinite(lhPx) && renderedSize ? lhPx / renderedSize : NaN,
        sample: (el.textContent || "").slice(0, 18),
      });
    }
    return out.slice(0, 8);
  });
}

async function run() {
  let browser;
  try {
    browser = await chromium.launch();
  } catch (e) {
    if (/Executable doesn't exist|download new browsers|install/i.test(String(e))) {
      console.error("✗ Chromium binary missing. One-time:  npx playwright install chromium");
      process.exit(2);
    }
    throw e;
  }
  const page = await browser.newPage({ viewport: { width: 1280, height: 2600 }, deviceScaleFactor: DSF });
  const perRef = [];

  for (const id of refs) {
    const resp = await page.goto(`${BASE}/reference/${id}`, { waitUntil: "networkidle" });
    if (!resp || !resp.ok()) { console.log(`\n✗ ${id}: HTTP ${resp?.status()}`); continue; }

    // COLOR
    const swatches = await collectSwatches(page);
    const colorRows = [];
    for (const sw of swatches) {
      const measured = await avgFillEl(sw.handle);
      const dE = deltaE2000(rgbToLab(hexToRgb(sw.declared)), rgbToLab(measured));
      colorRows.push({ declared: sw.declared, label: sw.label, measuredHex: rgbToHex(measured), dE, fid: colorFidelity(dE) });
    }
    const colorFid = colorRows.length ? colorRows.reduce((s, r) => s + r.fid, 0) / colorRows.length : null;

    // RADIUS
    const boxes = await collectRadiusBoxes(page);
    const radRows = [];
    for (const b of boxes) {
      const declPx = declRadiusPx(b.declared, b);
      const measPx = await measureRadius(b.handle, declPx, b);
      radRows.push({ declared: b.declared, label: b.label, declPx, measPx, fid: pxFidelity(measPx - declPx) });
    }
    const radFid = radRows.length ? radRows.reduce((s, r) => s + r.fid, 0) / radRows.length : null;

    // TYPE
    const typeRows = await collectType(page);
    for (const t of typeRows) {
      t.sizeFid = pxFidelity(t.renderedSize - t.declaredSize, 1.5);
      t.weightFid = clampPct(100 * (1 - Math.abs(t.renderedWeight - t.declaredWeight) / 200));
      t.lhFid = Number.isFinite(t.renderedLh) ? pxFidelity((t.renderedLh - t.declaredLh) * 16, 2) : 0;
      t.fid = (t.sizeFid + t.weightFid + t.lhFid) / 3;
    }
    const typeFid = typeRows.length ? typeRows.reduce((s, r) => s + r.fid, 0) / typeRows.length : null;

    perRef.push({ id, colorRows, colorFid, radRows, radFid, typeRows, typeFid });

    console.log(`\n═══════ ${id} ═══════`);
    if (colorFid != null) {
      console.log(`\n  COLOR  (${colorRows.length} swatches)`);
      for (const r of colorRows) console.log(`    ${r.declared} → ${r.measuredHex}  ΔE ${r.dE.toFixed(2).padStart(5)}  ${bar(r.fid)}`);
      console.log(`    └─ COLOR fidelity: ${colorFid.toFixed(1)}%`);
    }
    if (radFid != null) {
      console.log(`\n  RADIUS  (${radRows.length} scale boxes, corner-diagonal sub-pixel)`);
      for (const r of radRows) console.log(`    ${r.declared.padEnd(8)} decl ${r.declPx.toFixed(1).padStart(5)}px → meas ${r.measPx.toFixed(1).padStart(5)}px  Δ${(r.measPx - r.declPx).toFixed(1).padStart(5)}  ${bar(r.fid)}`);
      console.log(`    └─ RADIUS fidelity: ${radFid.toFixed(1)}%`);
    }
    if (typeFid != null) {
      console.log(`\n  TYPE  (${typeRows.length} tiers — size/weight/lineHeight; family is #34)`);
      for (const t of typeRows) console.log(`    "${t.sample.padEnd(18)}" ${t.declaredSize}px/${t.declaredWeight}/${t.declaredLh} → ${t.renderedSize}px/${t.renderedWeight}/${t.renderedLh.toFixed(2)}  ${bar(t.fid)}`);
      console.log(`    └─ TYPE fidelity: ${typeFid.toFixed(1)}%  (size ${avg(typeRows, "sizeFid")}% · weight ${avg(typeRows, "weightFid")}% · lh ${avg(typeRows, "lhFid")}%)`);
    }
    const fams = [colorFid, radFid, typeFid].filter((x) => x != null);
    console.log(`\n  ▓▓ ${id} OVERALL fidelity: ${(fams.reduce((a, b) => a + b, 0) / fams.length).toFixed(1)}%  (mean of ${fams.length} families)`);
  }

  // ── discrimination: metric must DROP for a wrong token (else it's meaningless) ──
  if (perRef.length >= 2) {
    const [A, B] = perRef;
    console.log(`\n═══════ discrimination ═══════`);
    if (A.colorRows[0] && B.colorRows[0]) {
      const a = A.colorRows[0], wrong = B.colorRows[0].declared;
      const dW = deltaE2000(rgbToLab(hexToRgb(a.measuredHex)), rgbToLab(hexToRgb(wrong)));
      console.log(`  COLOR   ${A.id} ${a.measuredHex}  vs correct ${a.declared} → ${a.fid.toFixed(0)}%   vs wrong ${wrong} (${B.id}) → ${colorFidelity(dW).toFixed(0)}%`);
    }
    if (A.radRows.length) {
      const r = A.radRows.find((x) => x.declPx >= 12) || A.radRows[0];
      const wrongDecl = 0; // pretend the spec said "sharp"
      console.log(`  RADIUS  ${A.id} ${r.label}: meas ${r.measPx.toFixed(1)}px  vs correct ${r.declPx.toFixed(0)}px → ${r.fid.toFixed(0)}%   vs wrong ${wrongDecl}px → ${pxFidelity(r.measPx - wrongDecl).toFixed(0)}%`);
    }
  }

  await browser.close();
}
function avg(rows, key) { return (rows.reduce((s, r) => s + (r[key] || 0), 0) / rows.length).toFixed(0); }

run().catch((e) => { console.error(e); process.exit(1); });
