/**
 * Spike for issue #34 (drift half) — point the verifier at a REAL running localhost UI
 * and compute the observed-but-undeclared DRIFT BUCKET, the killer feature.
 *
 *   DECLARED  = design-system tokens the codebase declares (globals.css :root custom props)
 *   OBSERVED  = colors actually rendered in the live DOM (computed styles, area-weighted)
 *   buckets:
 *     • declared ∩ observed   (confident — token is really used)
 *     • observed ∖ declared    (DRIFT — color shipped but never declared as a token)  ← prize
 *     • declared ∖ observed    (dead — declared token nothing renders)
 *
 * Brownfield guinea pig: the omd web app itself (its landing uses an inline #5546ff palette
 * that diverges from the declared OKLch --primary — a real drift case). Run against any
 * localhost dev server: `node scripts/verify-drift.mjs [url]`  (default http://localhost:3335/).
 *
 * The other #34 half — rebuild components from a DESIGN.md and pixel-diff vs real crops —
 * needs a DESIGN.md for the target, which is omd:absorb's (#31) output. Tracked, not built here.
 *
 * NOTE: does NOT assume playwright/chromium is installed — preflight below.
 */
let chromium;
try { ({ chromium } = await import("playwright")); }
catch { console.error("✗ needs a headless browser. One-time (from web/):\n    npm i -D playwright && npx playwright install chromium"); process.exit(2); }

const URL = process.argv[2] || process.env.OMD_TARGET || "http://localhost:3335/";
const MATCH_TOL = 8;    // ΔE ≤ this ⟹ observed color IS a declared token (tolerates light blending)
const CLUSTER_TOL = 6;  // merge observed colors within this ΔE into one
const TOP_DRIFT = 12;   // report this many top undeclared colors

// CIEDE2000 + helpers — single source (issue #37)
import { rgbHex, dE } from "./lib/omd-core.mjs";

async function run() {
  let browser;
  try { browser = await chromium.launch(); }
  catch (e) { if (/Executable doesn't exist|download new browsers/i.test(String(e))) { console.error("✗ Chromium missing:  npx playwright install chromium"); process.exit(2); } throw e; }
  const page = await browser.newPage({ viewport: { width: 1440, height: 1600 } });
  const resp = await page.goto(URL, { waitUntil: "networkidle" }).catch(() => null);
  if (!resp || !resp.ok()) { console.error(`✗ ${URL} → HTTP ${resp?.status() || "unreachable"} (is the dev server running?)`); await browser.close(); process.exit(1); }

  // ── DECLARED: resolve design-system tokens to concrete rgb / px (browser resolves OKLch/hsl/calc).
  //    getComputedStyle enumeration misses Tailwind-v4 :root shadcn vars, so probe a KNOWN token
  //    name list via var() (resolves through the cascade even when enumeration doesn't list it),
  //    unioned with whatever IS enumerable. ──
  const declared = await page.evaluate(() => {
    const SHADCN = ["primary", "primary-foreground", "background", "foreground", "card", "card-foreground",
      "popover", "popover-foreground", "secondary", "secondary-foreground", "muted", "muted-foreground",
      "accent", "accent-foreground", "destructive", "destructive-foreground", "border", "input", "ring",
      "chart-1", "chart-2", "chart-3", "chart-4", "chart-5", "sidebar", "sidebar-foreground",
      "sidebar-primary", "sidebar-accent", "sidebar-border", "sidebar-ring"];
    const RADII = ["radius", "radius-sm", "radius-md", "radius-lg", "radius-xl", "radius-2xl", "radius-3xl", "radius-4xl"];
    const probe = document.createElement("div"); document.body.appendChild(probe);
    const cv = document.createElement("canvas"); cv.width = cv.height = 1; const ctx = cv.getContext("2d");
    const cssToRgb = (str) => { if (!str || str === "transparent") return null; ctx.clearRect(0, 0, 1, 1); ctx.fillStyle = "rgba(0,0,0,0)"; ctx.fillStyle = str; ctx.fillRect(0, 0, 1, 1); const d = ctx.getImageData(0, 0, 1, 1).data; return d[3] < 8 ? null : [d[0], d[1], d[2]]; };
    const colors = [], radii = [], seen = new Set();
    // resolve a css var to a concrete color string via the cascade, then canvas→rgb (handles lab/oklch/hsl)
    const toRgb = (v) => { probe.style.color = ""; probe.style.color = v; return cssToRgb(getComputedStyle(probe).color); };
    const toPx = (v) => { probe.style.borderTopLeftRadius = ""; probe.style.borderTopLeftRadius = v; const r = parseFloat(getComputedStyle(probe).borderTopLeftRadius); return Number.isFinite(r) ? r : null; };
    const addColor = (name) => { if (seen.has(name)) return; const rgb = toRgb(`var(--${name})`); if (rgb) { seen.add(name); colors.push({ name: "--" + name, rgb }); } };
    SHADCN.forEach(addColor);
    for (const name of RADII) { const px = toPx(`var(--${name})`); if (px != null) radii.push({ name: "--" + name, px }); }
    // union with any enumerable color-ish custom props (catches project-specific tokens)
    const cs = getComputedStyle(document.documentElement);
    for (let i = 0; i < cs.length; i++) {
      const n = cs[i]; if (!n.startsWith("--") || n.startsWith("--tw-") || seen.has(n.slice(2))) continue;
      if (!/color|bg|background|foreground|primary|secondary|accent|muted|border|ring|destructive|brand|surface/i.test(n)) continue;
      const rgb = toRgb(`var(${n})`); if (rgb) { seen.add(n.slice(2)); colors.push({ name: n, rgb }); }
    }
    probe.remove();
    return { colors, radii };
  });

  // ── OBSERVED: walk the live DOM; collect computed colors area-weighted; skip gradients/transparent/low-opacity ──
  const observed = await page.evaluate(() => {
    const cv = document.createElement("canvas"); cv.width = cv.height = 1; const ctx = cv.getContext("2d");
    const parseColor = (str) => { if (!str || str === "transparent") return null; ctx.clearRect(0, 0, 1, 1); ctx.fillStyle = "rgba(0,0,0,0)"; ctx.fillStyle = str; ctx.fillRect(0, 0, 1, 1); const d = ctx.getImageData(0, 0, 1, 1).data; return d[3] < 128 ? null : [d[0], d[1], d[2]]; };
    const hits = []; // {rgb, area, role, src}
    const push = (rgb, area, role, src) => { if (rgb) hits.push({ rgb, area, role, src }); };
    for (const el of document.querySelectorAll("*")) {
      const r = el.getBoundingClientRect(); if (r.width < 4 || r.height < 4) continue;
      const cs = getComputedStyle(el);
      if (cs.visibility === "hidden" || cs.display === "none" || parseFloat(cs.opacity) < 0.5) continue;
      const area = r.width * r.height, tag = el.tagName.toLowerCase();
      const cls = (el.getAttribute("class") || "").slice(0, 24);
      const src = tag + (cls ? "." + cls.split(/\s+/)[0] : "");
      if (cs.backgroundImage === "none") push(parseColor(cs.backgroundColor), area, "bg", src); // skip gradients
      const txt = (el.textContent || "").trim();
      if (txt && el.children.length === 0) push(parseColor(cs.color), r.width * parseFloat(cs.fontSize || "14"), "text", src);
      if (parseFloat(cs.borderTopWidth) > 0) push(parseColor(cs.borderTopColor), r.width + r.height, "border", src);
    }
    // observed radii on button/card-like elements
    const radii = [];
    for (const el of document.querySelectorAll("button, a, [class*='card'], [class*='rounded'], input")) {
      const r = el.getBoundingClientRect(); if (r.width < 12 || r.height < 12) continue;
      const br = parseFloat(getComputedStyle(el).borderTopLeftRadius);
      if (Number.isFinite(br) && br > 0) radii.push({ px: br, src: el.tagName.toLowerCase() });
    }
    return { hits, radii };
  });

  // ── cluster observed colors by CIEDE2000, summing area ──
  const clusters = [];
  for (const h of observed.hits) {
    let c = clusters.find((k) => dE(k.rgb, h.rgb) <= CLUSTER_TOL);
    if (c) { c.area += h.area; c.n++; if (h.role === "bg" && h.area > c.topArea) { c.topArea = h.area; c.src = h.src; } }
    else clusters.push({ rgb: h.rgb, area: h.area, n: 1, topArea: h.role === "bg" ? h.area : 0, src: h.src });
  }
  const totalArea = clusters.reduce((s, c) => s + c.area, 0) || 1;
  clusters.sort((a, b) => b.area - a.area);

  // ── bucket. Split declared into project SEMANTIC tokens (--primary/--background/…) vs the
  //    framework PALETTE (Tailwind defaults --color-blue-500/…). An observed color that matches
  //    only a raw palette entry = mild drift (hardcoded a framework color instead of a semantic
  //    token); matching neither = real bespoke drift. Dead = SEMANTIC tokens nothing renders. ──
  const semantic = declared.colors.filter((d) => !d.name.startsWith("--color-"));
  const palette = declared.colors.filter((d) => d.name.startsWith("--color-"));
  const nearestIn = (rgb, set) => { let best = null, bd = Infinity; for (const d of set) { const e = dE(rgb, d.rgb); if (e < bd) { bd = e; best = d; } } return { best, dE: bd }; };
  const confident = [], rawPalette = [], drift = [];
  for (const c of clusters) {
    const pct = (100 * c.area) / totalArea, hex = rgbHex(c.rgb);
    const s = nearestIn(c.rgb, semantic);
    if (s.dE <= MATCH_TOL) { confident.push({ hex, pct, nearest: s.best.name, dE: s.dE, src: c.src }); continue; }
    const p = nearestIn(c.rgb, palette);
    if (p.dE <= MATCH_TOL) rawPalette.push({ hex, pct, nearest: p.best?.name, dE: p.dE, src: c.src });
    else drift.push({ hex, pct, nearest: (s.dE < p.dE ? s.best : p.best)?.name, ndHex: rgbHex((s.dE < p.dE ? s.best : p.best)?.rgb || [0, 0, 0]), dE: Math.min(s.dE, p.dE), src: c.src });
  }
  const matched = new Set(confident.map((c) => c.nearest));
  const dead = semantic.filter((d) => !matched.has(d.name));

  // ── report ──
  console.log(`\n══════ token drift @ ${URL} ══════`);
  console.log(`declared: ${semantic.length} semantic tokens + ${palette.length} framework palette · observed: ${clusters.length} clusters · match ΔE≤${MATCH_TOL}\n`);

  console.log(`● CONFIDENT  (semantic token really used) — ${confident.length}`);
  for (const c of confident.sort((a, b) => b.pct - a.pct).slice(0, 12))
    console.log(`    ${c.hex}  ${c.pct.toFixed(1).padStart(5)}% UI  ≈ ${c.nearest} (ΔE ${c.dE.toFixed(1)})`);

  console.log(`\n◐ RAW-PALETTE  (mild drift — framework color, no semantic token) — ${rawPalette.length}`);
  for (const c of rawPalette.sort((a, b) => b.pct - a.pct).slice(0, 8))
    console.log(`    ${c.hex}  ${c.pct.toFixed(1).padStart(5)}% UI  = ${c.nearest} (raw)  via <${c.src}>`);

  console.log(`\n▲ OBSERVED-BUT-UNDECLARED  (real drift — bespoke, matches no token) — ${drift.length}`);
  for (const c of drift.sort((a, b) => b.pct - a.pct).slice(0, TOP_DRIFT))
    console.log(`    ${c.hex}  ${c.pct.toFixed(1).padStart(5)}% UI  nearest ${c.nearest}=${c.ndHex} ΔE ${c.dE.toFixed(1)}  via <${c.src}>`);

  console.log(`\n○ DECLARED-BUT-UNUSED  (dead semantic token) — ${dead.length}`);
  console.log("    " + (dead.map((d) => d.name).join(", ") || "none"));

  // radii
  const declRadii = [...new Set(declared.radii.map((r) => +r.px.toFixed(1)))].sort((a, b) => a - b);
  const obsRadii = {};
  for (const r of observed.radii) { const k = Math.round(r.px); obsRadii[k] = (obsRadii[k] || 0) + 1; }
  const RAD_TOL = 6; // raised for real UI vs catalog's tighter check
  const obsList = Object.entries(obsRadii).map(([px, n]) => ({ px: +px, n })).sort((a, b) => b.n - a.n);
  console.log(`\n◆ RADIUS  declared scale: [${declRadii.join(", ")}]px  (±${RAD_TOL}px match)`);
  for (const o of obsList.slice(0, 8)) {
    const near = declRadii.reduce((m, d) => Math.abs(d - o.px) < Math.abs(m - o.px) ? d : m, declRadii[0] ?? 0);
    const pill = o.px >= 100;
    const label = String(pill ? "pill" : o.px + "px").padStart(5);
    console.log(`    ${label} ×${String(o.n).padStart(3)}  ${pill ? "PILL (rounded-full)" : Math.abs(near - o.px) <= RAD_TOL ? `≈ declared ${near}px` : `⚠ undeclared (nearest ${near}px)`}`);
  }

  const topDrift = [...drift].sort((a, b) => b.pct - a.pct)[0];
  console.log(`\n   summary: ${confident.length} semantic-used · ${rawPalette.length} raw-palette · ${drift.length} bespoke-drift · ${dead.length} dead — top bespoke ${topDrift ? topDrift.hex + " @ " + topDrift.pct.toFixed(1) + "%" : "none"}`);
  await browser.close();
}
run().catch((e) => { console.error(e); process.exit(1); });
