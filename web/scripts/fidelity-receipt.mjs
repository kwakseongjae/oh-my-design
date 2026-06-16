/**
 * Issue #35 — the two-sided FIDELITY RECEIPT. Fuses:
 *   TOP  (token proof)  — do the DESIGN.md's declared tokens actually render in the live UI?
 *                          confident(used) / unverified(declared, not seen) / drift(observed,
 *                          undeclared) via CIEDE2000 against the real DOM + radius check.
 *   BOTTOM (provenance) — every §10-15 section: grounded (cited) vs [FILL IN]; a maturity meter
 *                          (% of the philosophy layer that is evidence-backed, not fabricated).
 *
 * Input is omd:absorb's output: a DESIGN.md (frontmatter `tokens:` + §1-15 body) + the live URL.
 *   node fidelity-receipt.mjs --design <DESIGN.md> --url <devserver> [--out <dir>]
 *
 * Does NOT assume playwright is installed (preflight). Writes <out>/fidelity-receipt.md.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import matter from "gray-matter";

const arg = (f, d) => { const i = process.argv.indexOf(f); return i >= 0 ? process.argv[i + 1] : d; };
const DESIGN = resolve(arg("--design", ".omd/absorb-demo/DESIGN.md"));
const URL = arg("--url", process.env.OMD_TARGET || "http://localhost:3335/");
const OUT = resolve(arg("--out", dirname(DESIGN)));
mkdirSync(OUT, { recursive: true });

let chromium;
try { ({ chromium } = await import("playwright")); }
catch { console.error("✗ needs a headless browser: npm i -D playwright && npx playwright install chromium"); process.exit(2); }

// ── CIEDE2000 ──
const hexToRgb = (h) => { h = h.replace("#", ""); return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)); };
const rgbHex = ([r, g, b]) => "#" + [r, g, b].map((n) => Math.round(n).toString(16).padStart(2, "0")).join("");
const srgbToLin = (c) => { c /= 255; return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
const rgbToXyz = ([r, g, b]) => { r = srgbToLin(r); g = srgbToLin(g); b = srgbToLin(b); return [r * 0.4124 + g * 0.3576 + b * 0.1805, r * 0.2126 + g * 0.7152 + b * 0.0722, r * 0.0193 + g * 0.1192 + b * 0.9505]; };
const xyzToLab = ([x, y, z]) => { const xn = 0.95047, yn = 1, zn = 1.08883; const f = (t) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116); const fx = f(x / xn), fy = f(y / yn), fz = f(z / zn); return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)]; };
const rgbToLab = (rgb) => xyzToLab(rgbToXyz(rgb));
const d2r = (d) => (d * Math.PI) / 180, r2d = (r) => (r * 180) / Math.PI;
function deltaE2000(l1, l2) {
  const [L1, a1, b1] = l1, [L2, a2, b2] = l2; const avgLp = (L1 + L2) / 2;
  const C1 = Math.hypot(a1, b1), C2 = Math.hypot(a2, b2), avgC = (C1 + C2) / 2;
  const G = 0.5 * (1 - Math.sqrt(Math.pow(avgC, 7) / (Math.pow(avgC, 7) + Math.pow(25, 7))));
  const a1p = a1 * (1 + G), a2p = a2 * (1 + G), C1p = Math.hypot(a1p, b1), C2p = Math.hypot(a2p, b2), avgCp = (C1p + C2p) / 2;
  let h1p = r2d(Math.atan2(b1, a1p)); if (h1p < 0) h1p += 360; let h2p = r2d(Math.atan2(b2, a2p)); if (h2p < 0) h2p += 360;
  const dLp = L2 - L1, dCp = C2p - C1p; let dhp = 0; if (C1p * C2p !== 0) { dhp = h2p - h1p; if (dhp > 180) dhp -= 360; else if (dhp < -180) dhp += 360; }
  const dHp = 2 * Math.sqrt(C1p * C2p) * Math.sin(d2r(dhp) / 2);
  let avghp; if (C1p * C2p === 0) avghp = h1p + h2p; else if (Math.abs(h1p - h2p) > 180) avghp = (h1p + h2p + 360) / 2; else avghp = (h1p + h2p) / 2;
  const T = 1 - 0.17 * Math.cos(d2r(avghp - 30)) + 0.24 * Math.cos(d2r(2 * avghp)) + 0.32 * Math.cos(d2r(3 * avghp + 6)) - 0.20 * Math.cos(d2r(4 * avghp - 63));
  const dRo = 30 * Math.exp(-Math.pow((avghp - 275) / 25, 2)), Rc = 2 * Math.sqrt(Math.pow(avgCp, 7) / (Math.pow(avgCp, 7) + Math.pow(25, 7)));
  const Sl = 1 + (0.015 * Math.pow(avgLp - 50, 2)) / Math.sqrt(20 + Math.pow(avgLp - 50, 2)), Sc = 1 + 0.045 * avgCp, Sh = 1 + 0.015 * avgCp * T, Rt = -Math.sin(d2r(2 * dRo)) * Rc;
  return Math.sqrt(Math.pow(dLp / Sl, 2) + Math.pow(dCp / Sc, 2) + Math.pow(dHp / Sh, 2) + Rt * (dCp / Sc) * (dHp / Sh));
}
const dE = (a, b) => deltaE2000(rgbToLab(a), rgbToLab(b));
const MATCH = 8, CLUSTER = 6;

// ── parse DESIGN.md: declared tokens + §10-15 provenance ──
const raw = readFileSync(DESIGN, "utf8");
const fm = matter(raw);
const declColors = Object.entries(fm.data?.tokens?.colors || {}).filter(([, v]) => /^#[0-9a-f]{6}$/i.test(String(v))).map(([role, hex]) => ({ role, hex: String(hex).toLowerCase() }));
const declRadii = Object.entries(fm.data?.tokens?.rounded || {}).map(([k, v]) => ({ k, px: parseFloat(String(v)) })).filter((r) => Number.isFinite(r.px));
// §10-15 sections
const PHIL = [["10", "Voice & Tone"], ["11", "Brand Narrative"], ["12", "Principles"], ["13", "Personas"], ["14", "States"], ["15", "Motion & Easing"]];
const body = fm.content;
const sectionBody = (n) => { const m = new RegExp(`(?:^|\\n)##\\s+${n}\\.[^\\n]*\\n([\\s\\S]*?)(?=\\n##\\s+\\d+\\.|$)`).exec(body); return (m ? m[1] : "").trim(); };
const provenance = PHIL.map(([n, title]) => {
  const txt = sectionBody(n);
  const isFill = /\[FILL IN/i.test(txt) || txt.length < 8;
  const cited = /`[^`]+:\d+`|CLAUDE\.md|AGENTS\.md|chat-turn|§\d/i.test(txt.replace(/\[FILL IN[\s\S]*?\]/gi, ""));
  return { n, title, status: isFill ? "FILL IN" : cited ? "grounded+cited" : "grounded (no citation)" };
});
const grounded = provenance.filter((p) => p.status.startsWith("grounded")).length;
const maturity = Math.round((100 * grounded) / PHIL.length);

// ── observe live DOM ──
const browser = await chromium.launch().catch((e) => { if (/Executable doesn't exist|download new browsers/i.test(String(e))) { console.error("✗ chromium missing: npx playwright install chromium"); process.exit(2); } throw e; });
const page = await browser.newPage({ viewport: { width: 1440, height: 1600 } });
const resp = await page.goto(URL, { waitUntil: "networkidle" }).catch(() => null);
if (!resp || !resp.ok()) { console.error(`✗ ${URL} unreachable — start the dev server`); await browser.close(); process.exit(1); }
const observed = await page.evaluate(() => {
  const cv = document.createElement("canvas"); cv.width = cv.height = 1; const ctx = cv.getContext("2d");
  const toRgb = (s) => { if (!s || s === "transparent") return null; ctx.clearRect(0, 0, 1, 1); ctx.fillStyle = "rgba(0,0,0,0)"; ctx.fillStyle = s; ctx.fillRect(0, 0, 1, 1); const d = ctx.getImageData(0, 0, 1, 1).data; return d[3] < 128 ? null : [d[0], d[1], d[2]]; };
  const hits = [], radii = [];
  for (const el of document.querySelectorAll("*")) {
    const r = el.getBoundingClientRect(); if (r.width < 4 || r.height < 4) continue;
    const cs = getComputedStyle(el); if (cs.visibility === "hidden" || cs.display === "none" || parseFloat(cs.opacity) < 0.5) continue;
    if (cs.backgroundImage === "none") { const c = toRgb(cs.backgroundColor); if (c) hits.push({ c, a: r.width * r.height }); }
    if (el.children.length === 0 && (el.textContent || "").trim()) { const c = toRgb(cs.color); if (c) hits.push({ c, a: r.width * 14 }); }
  }
  for (const el of document.querySelectorAll("button, a, input, [class*='card'], [class*='rounded']")) {
    const r = el.getBoundingClientRect(); if (r.width < 12) continue; const px = parseFloat(getComputedStyle(el).borderTopLeftRadius); if (px > 0) radii.push(px);
  }
  return { hits, radii };
});
await browser.close();

// cluster observed colors (area-weighted)
const clusters = [];
for (const h of observed.hits) { let k = clusters.find((c) => dE(c.rgb, h.c) <= CLUSTER); if (k) k.area += h.a; else clusters.push({ rgb: h.c, area: h.a }); }
const totalArea = clusters.reduce((s, c) => s + c.area, 0) || 1;
clusters.sort((a, b) => b.area - a.area);

// ── token proof buckets ──
const used = [], unverified = [];
for (const d of declColors) {
  let best = null, bd = Infinity; for (const c of clusters) { const e = dE(hexToRgb(d.hex), c.rgb); if (e < bd) { bd = e; best = c; } }
  if (bd <= MATCH) used.push({ ...d, dE: bd, pct: (100 * best.area) / totalArea }); else unverified.push({ ...d, dE: bd });
}
const drift = [];
for (const c of clusters) { let bd = Infinity; for (const d of declColors) bd = Math.min(bd, dE(c.rgb, hexToRgb(d.hex))); if (bd > MATCH && c.area / totalArea > 0.0005) drift.push({ hex: rgbHex(c.rgb), pct: (100 * c.area) / totalArea, dE: bd }); }
const obsRad = [...new Set(observed.radii.map((p) => Math.round(p)))].sort((a, b) => a - b);
const tokenScore = declColors.length ? Math.round((100 * used.length) / declColors.length) : 0;

// ── emit receipt ──
const bar = (p) => "█".repeat(Math.round(p / 10)).padEnd(10, "·");
let md = `# Fidelity Receipt — ${fm.data?.brand || "project"}\n\n`;
md += `**Spec:** \`${DESIGN}\` · **Live:** ${URL} · **Generated:** (absorb run)\n\n`;
md += `> A receipt you can hand to a skeptical design lead: it **proves** the DESIGN.md tokens against the\n> real product, and **cites** every philosophy claim (or admits it isn't grounded yet).\n\n`;
md += `---\n\n## ▓ Token proof (§1-9 vs live UI)\n\n`;
md += `DESIGN.md declares **${declColors.length}** color tokens. **${tokenScore}%** verified rendering on the live surface (ΔE≤${MATCH}).\n\n`;
md += `### ● Declared ∩ rendered (token really used) — ${used.length}\n`;
for (const u of used.sort((a, b) => b.pct - a.pct)) md += `- \`${u.hex}\` **${u.role}** — ${u.pct.toFixed(1)}% of UI (ΔE ${u.dE.toFixed(1)})\n`;
md += `\n### ○ Declared, not seen on this surface — ${unverified.length}\n`;
md += unverified.length ? unverified.map((u) => `- \`${u.hex}\` **${u.role}** (nearest observed ΔE ${u.dE.toFixed(1)})`).join("\n") + "\n" : "_none_\n";
md += `\n### ▲ Observed-but-undeclared (drift — shipped, no token) — ${drift.length}\n`;
md += drift.length ? drift.sort((a, b) => b.pct - a.pct).slice(0, 8).map((d) => `- \`${d.hex}\` — ${d.pct.toFixed(1)}% of UI, nearest token ΔE ${d.dE.toFixed(1)}`).join("\n") + "\n" : "_none_\n";
const fmtRad = (arr) => { const out = []; let pill = false; for (const p of arr) { if (p >= 100) pill = true; else out.push(p + "px"); } if (pill) out.push("pill"); return out.join(", "); };
md += `\n### ◆ Radius\n- declared: ${fmtRad(declRadii.map((r) => r.px))} · observed: ${fmtRad(obsRad)}\n`;
md += `\n---\n\n## ✍ Provenance ledger (§10-15) — maturity ${maturity}%  ${bar(maturity)}\n\n`;
md += `Every brand-philosophy section must be grounded (cited) or honestly marked \`[FILL IN]\` — never fabricated.\n\n`;
md += `| § | Section | Status |\n|---|---|---|\n`;
for (const p of provenance) md += `| ${p.n} | ${p.title} | ${p.status === "FILL IN" ? "🔲 [FILL IN] — enrichment target" : p.status === "grounded+cited" ? "✅ grounded + cited" : "⚠️ grounded, **needs citation**"} |\n`;
md += `\n_${grounded}/6 grounded. The \`[FILL IN]\` slots are what omd:taste / omd:learn fill over time — the maturity meter climbs as you use omd._\n`;

writeFileSync(join(OUT, "fidelity-receipt.md"), md);
console.log(`\n✓ receipt → ${join(OUT, "fidelity-receipt.md")}`);
console.log(`  TOKEN proof: ${tokenScore}% (${used.length}/${declColors.length} declared rendered) · ${drift.length} drift · ${unverified.length} unverified`);
console.log(`  PROVENANCE: ${maturity}% mature (${grounded}/6 §10-15 grounded, ${6 - grounded} [FILL IN])`);
console.log(`  top used: ${used[0] ? used.sort((a, b) => b.pct - a.pct)[0].role + " " + used.sort((a, b) => b.pct - a.pct)[0].hex : "—"} · top drift: ${drift[0] ? drift.sort((a, b) => b.pct - a.pct)[0].hex : "none"}`);
