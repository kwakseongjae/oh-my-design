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

// CIEDE2000 + helpers — single source (issue #37)
import { hexToRgb, rgbHex, rgbToLab, deltaE2000, dE, philosophyMaturity } from "./lib/omd-core.mjs";
const MATCH = 8, CLUSTER = 6;

// ── parse DESIGN.md: declared tokens + §10-15 provenance ──
const raw = readFileSync(DESIGN, "utf8");
const fm = matter(raw);
const declColors = Object.entries(fm.data?.tokens?.colors || {}).filter(([, v]) => /^#[0-9a-f]{6}$/i.test(String(v))).map(([role, hex]) => ({ role, hex: String(hex).toLowerCase() }));
const declRadii = Object.entries(fm.data?.tokens?.rounded || {}).map(([k, v]) => ({ k, px: parseFloat(String(v)) })).filter((r) => Number.isFinite(r.px));
// §10-15 provenance + maturity (cited-only) via omd-core — counts ONLY grounded+cited,
// so an uncited fill is visible but does not inflate the meter (#38 anti-fabrication).
const pm = philosophyMaturity(raw);
const provenance = pm.sections.map((s) => ({ n: String(s.n), title: s.title, status: s.status === "fill-in" ? "FILL IN" : s.status === "grounded+cited" ? "grounded+cited" : "grounded (no citation)" }));
const grounded = pm.citedFilled;
const maturity = pm.maturity;
// monotonic high-water from the Hermes ratchet (.omd/maturity.json), if the loop has run
let maturityHigh = maturity;
try { const mj = JSON.parse(readFileSync(resolve(OUT, "maturity.json"), "utf8")); if (Number.isFinite(mj.maturity_high)) maturityHigh = Math.max(maturity, mj.maturity_high); } catch { /* no ratchet yet */ }

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
md += `\n---\n\n## ✍ Provenance ledger (§10-15) — maturity ${maturity}% (high-water ${maturityHigh}%)  ${bar(maturity)}\n\n`;
md += `Every brand-philosophy section must be grounded (cited) or honestly marked \`[FILL IN]\` — never fabricated.\n\n`;
md += `| § | Section | Status |\n|---|---|---|\n`;
for (const p of provenance) md += `| ${p.n} | ${p.title} | ${p.status === "FILL IN" ? "🔲 [FILL IN] — enrichment target" : p.status === "grounded+cited" ? "✅ grounded + cited" : "⚠️ grounded, **needs citation**"} |\n`;
md += `\n_${grounded}/6 grounded. The \`[FILL IN]\` slots are what omd:taste / omd:learn fill over time — the maturity meter climbs as you use omd._\n`;

writeFileSync(join(OUT, "fidelity-receipt.md"), md);
console.log(`\n✓ receipt → ${join(OUT, "fidelity-receipt.md")}`);
console.log(`  TOKEN proof: ${tokenScore}% (${used.length}/${declColors.length} declared rendered) · ${drift.length} drift · ${unverified.length} unverified`);
console.log(`  PROVENANCE: ${maturity}% mature (${grounded}/6 §10-15 grounded, ${6 - grounded} [FILL IN])`);
console.log(`  top used: ${used[0] ? used.sort((a, b) => b.pct - a.pct)[0].role + " " + used.sort((a, b) => b.pct - a.pct)[0].hex : "—"} · top drift: ${drift[0] ? drift.sort((a, b) => b.pct - a.pct)[0].hex : "none"}`);
