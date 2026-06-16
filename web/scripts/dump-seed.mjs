/**
 * omd:absorb deterministic §1-9 token SEED generator (issue #31 backbone).
 *
 * Chains the codebase scan (ctx-prime.cjs: framework / surfaces / fonts / dominant colors)
 * with the live declared-token resolver (the canvas :root probe from verify-drift, which
 * resolves oklch/lab/hsl to rgb). Emits a machine-readable seed the omd:absorb skill turns
 * into DESIGN.md §1-9 (data-bound zones). §10-15 are NOT seeded — those are judgment-bound
 * (chat/ruleset evidence or [FILL IN]), authored by the skill, never fabricated from code.
 *
 *   node dump-seed.mjs [--url http://localhost:3335] [--cwd <repo>] [--out <dir>]
 *
 * Does NOT assume playwright is installed (preflight). Falls back to ctx-prime-only when no
 * dev server URL is given (source-derived, marked unverified).
 */
import { readFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const HERE = dirname(fileURLToPath(import.meta.url));
const arg = (f, d) => { const i = process.argv.indexOf(f); return i >= 0 ? process.argv[i + 1] : d; };
const URL = arg("--url", process.env.OMD_TARGET || null);
const CWD = resolve(arg("--cwd", process.cwd()));
const OUT = resolve(arg("--out", join(CWD, ".omd", "absorb-demo")));
mkdirSync(OUT, { recursive: true });

// ── 1. codebase scan via ctx-prime (deterministic, no browser) ──
let ctx = {};
try {
  const ctxScript = existsSync(join(HERE, "..", "..", "scripts", "ctx-prime.cjs"))
    ? join(HERE, "..", "..", "scripts", "ctx-prime.cjs") : join(HERE, "ctx-prime.cjs");
  execSync(`node "${ctxScript}" "${CWD}" "${OUT}"`, { stdio: "ignore" });
  ctx = JSON.parse(readFileSync(join(OUT, "ctx-prime.json"), "utf8"));
} catch (e) { console.error("⚠ ctx-prime unavailable:", e.message); }

// ── 2. live declared tokens (browser resolves oklch/lab → rgb) ──
let declared = { colors: [], radii: [], source: "none" };
if (URL) {
  let chromium;
  try { ({ chromium } = await import("playwright")); }
  catch { console.error("✗ playwright not installed — run: npm i -D playwright && npx playwright install chromium\n  (continuing source-only)"); }
  if (chromium) {
    let browser;
    try { browser = await chromium.launch(); }
    catch (e) { if (/Executable doesn't exist|download new browsers/i.test(String(e))) console.error("✗ chromium missing — npx playwright install chromium"); else throw e; }
    if (browser) {
      const page = await browser.newPage();
      const r = await page.goto(URL, { waitUntil: "networkidle" }).catch(() => null);
      if (r && r.ok()) {
        declared = await page.evaluate(() => {
          const SHADCN = ["primary", "primary-foreground", "background", "foreground", "card", "card-foreground",
            "secondary", "secondary-foreground", "muted", "muted-foreground", "accent", "accent-foreground",
            "destructive", "border", "input", "ring", "chart-1", "chart-2", "chart-3", "chart-4", "chart-5"];
          const RADII = ["radius", "radius-sm", "radius-md", "radius-lg", "radius-xl", "radius-2xl"];
          const probe = document.createElement("div"); document.body.appendChild(probe);
          const cv = document.createElement("canvas"); cv.width = cv.height = 1; const c2 = cv.getContext("2d");
          const toRgb = (v) => { probe.style.color = ""; probe.style.color = v; const s = getComputedStyle(probe).color; if (!s || s === "transparent") return null; c2.clearRect(0, 0, 1, 1); c2.fillStyle = "rgba(0,0,0,0)"; c2.fillStyle = s; c2.fillRect(0, 0, 1, 1); const d = c2.getImageData(0, 0, 1, 1).data; return d[3] < 8 ? null : "#" + [d[0], d[1], d[2]].map((n) => n.toString(16).padStart(2, "0")).join(""); };
          const toPx = (v) => { probe.style.borderTopLeftRadius = ""; probe.style.borderTopLeftRadius = v; const p = parseFloat(getComputedStyle(probe).borderTopLeftRadius); return Number.isFinite(p) ? p : null; };
          const colors = []; for (const n of SHADCN) { const hex = toRgb(`var(--${n})`); if (hex) colors.push({ role: n, hex }); }
          const radii = []; for (const n of RADII) { const px = toPx(`var(--${n})`); if (px != null) radii.push({ name: n, px }); }
          probe.remove();
          return { colors, radii, source: "live :root (browser-resolved)" };
        });
        // observed primary candidate: most-saturated frequent button bg
        declared.observedPrimary = await page.evaluate(() => {
          const cv = document.createElement("canvas"); cv.width = cv.height = 1; const c2 = cv.getContext("2d");
          const toRgb = (s) => { if (!s || s === "transparent") return null; c2.clearRect(0, 0, 1, 1); c2.fillStyle = "rgba(0,0,0,0)"; c2.fillStyle = s; c2.fillRect(0, 0, 1, 1); const d = c2.getImageData(0, 0, 1, 1).data; return d[3] < 128 ? null : [d[0], d[1], d[2]]; };
          const sat = ([r, g, b]) => { const mx = Math.max(r, g, b), mn = Math.min(r, g, b); return mx === 0 ? 0 : (mx - mn) / mx; };
          let best = null, bestScore = 0;
          for (const el of document.querySelectorAll("button, a[class*='rounded'], [class*='btn']")) {
            const rgb = toRgb(getComputedStyle(el).backgroundColor); if (!rgb) continue;
            const s = sat(rgb); if (s > 0.25 && s > bestScore) { bestScore = s; best = rgb; }
          }
          return best ? "#" + best.map((n) => Math.round(n).toString(16).padStart(2, "0")).join("") : null;
        });
      }
      await browser.close();
    }
  }
}

// ── 3. assemble seed ──
const role = (r) => declared.colors.find((c) => c.role === r)?.hex;
const seed = {
  generated_for: CWD,
  target_url: URL || null,
  framework: ctx.inferred_stack?.framework || ctx.framework || ctx.stack || "unknown",
  language: ctx.language || ctx.audience_language || "unknown",
  surfaces: ctx.surface_inventory || ctx.surfaces || [],
  fonts: ctx.fonts || ctx.font_families || [],
  declared_source: declared.source,
  colors: {
    primary: role("primary") || declared.observedPrimary || ctx.dominant_color_hex || null,
    primary_foreground: role("primary-foreground"),
    background: role("background"),
    foreground: role("foreground"),
    card: role("card"),
    secondary: role("secondary"),
    muted: role("muted"),
    accent: role("accent"),
    destructive: role("destructive"),
    border: role("border"),
    ring: role("ring"),
    charts: ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"].map(role).filter(Boolean),
    observed_primary_candidate: declared.observedPrimary || null,
    dominant_from_source: ctx.dominant_color_hex || null,
  },
  radius_scale: declared.radii,
  radius_base_px: declared.radii.find((r) => r.name === "radius")?.px ?? null,
  components_note: "shadcn/Tailwind primitives detected; §4 starts sparse — enrich via omd-component-harvest if a design-system repo.",
  confidence: { tokens: URL && declared.colors.length ? "high (live-resolved)" : "low (source-only, unverified)" },
};

writeFileSync(join(OUT, "seed.json"), JSON.stringify(seed, null, 2));
console.log(`\n✓ seed → ${join(OUT, "seed.json")}`);
console.log(`  framework: ${typeof seed.framework === "object" ? seed.framework.framework : seed.framework} · fonts: ${(seed.fonts || []).slice(0, 3).join(", ") || "—"} · surfaces: ${(seed.surfaces || []).length}`);
console.log(`  declared colors: ${declared.colors.length} (${declared.source}) · radius scale: ${declared.radii.length}`);
console.log(`  primary: ${seed.colors.primary}  bg: ${seed.colors.background}  fg: ${seed.colors.foreground}  base radius: ${seed.radius_base_px}px`);
console.log(`  confidence: ${seed.confidence.tokens}`);
