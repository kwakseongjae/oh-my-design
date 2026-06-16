/**
 * omd-core — shared deterministic core for the absorb/verify/receipt scripts (issue #37).
 *
 * Single source for: color math (CIEDE2000), the canonical DESIGN.md section list, the
 * component-type enum, a DESIGN.md parser, and `validateDesignMd` (the engine behind
 * `omd validate`). The verify-fidelity / verify-drift / dump-seed / fidelity-receipt
 * scripts import the color math from here instead of each re-declaring it.
 *
 * No new runtime — plain ESM, gray-matter is already a web dependency.
 */
import matter from "gray-matter";

// ── color math ──────────────────────────────────────────────────────────
export const hexToRgb = (h) => { h = h.replace("#", ""); return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)); };
export const rgbHex = ([r, g, b]) => "#" + [r, g, b].map((n) => Math.round(n).toString(16).padStart(2, "0")).join("");
const srgbToLin = (c) => { c /= 255; return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
const rgbToXyz = ([r, g, b]) => { r = srgbToLin(r); g = srgbToLin(g); b = srgbToLin(b); return [r * 0.4124 + g * 0.3576 + b * 0.1805, r * 0.2126 + g * 0.7152 + b * 0.0722, r * 0.0193 + g * 0.1192 + b * 0.9505]; };
const xyzToLab = ([x, y, z]) => { const xn = 0.95047, yn = 1, zn = 1.08883; const f = (t) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116); const fx = f(x / xn), fy = f(y / yn), fz = f(z / zn); return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)]; };
export const rgbToLab = (rgb) => xyzToLab(rgbToXyz(rgb));
const d2r = (d) => (d * Math.PI) / 180, r2d = (r) => (r * 180) / Math.PI;
export function deltaE2000(l1, l2) {
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
export const dE = (a, b) => deltaE2000(rgbToLab(a), rgbToLab(b));

// ── canonical DESIGN.md shape (single source) ──────────────────────────
// §1-9 Google Stitch base + §10-15 OmD brand-philosophy layer.
export const SECTIONS = [
  { n: 1, title: "Visual Theme & Atmosphere", req: "required", zone: "data" },
  { n: 2, title: "Color Palette & Roles", req: "required", zone: "data" },
  { n: 3, title: "Typography Rules", req: "required", zone: "data" },
  { n: 4, title: "Component Stylings", req: "required", zone: "data" },
  { n: 5, title: "Layout Principles", req: "required", zone: "data" },
  { n: 6, title: "Depth & Elevation", req: "recommended", zone: "data" },
  { n: 7, title: "Do's and Don'ts", req: "recommended", zone: "data" },
  { n: 8, title: "Responsive Behavior", req: "recommended", zone: "data" },
  { n: 9, title: "Agent Prompt Guide", req: "recommended", zone: "data" },
  { n: 10, title: "Voice & Tone", req: "recommended", zone: "philosophy" },
  { n: 11, title: "Brand Narrative", req: "recommended", zone: "philosophy" },
  { n: 12, title: "Principles", req: "recommended", zone: "philosophy" },
  { n: 13, title: "Personas", req: "recommended", zone: "philosophy" },
  { n: 14, title: "States", req: "recommended", zone: "philosophy" },
  { n: 15, title: "Motion & Easing", req: "recommended", zone: "philosophy" },
];
// the ONLY valid render types (was duplicated across extract-tokens.ts + catalog-integrity)
export const COMPONENT_TYPES = ["button", "input", "card", "badge", "tab", "toggle", "toast", "dialog", "listItem", "avatar"];
const PLACEHOLDER_VALUES = /^(not measured|n\/?a|tbd|todo|xxx|\?\?\?)$/i;

// ── DESIGN.md parser ────────────────────────────────────────────────────
export function parseDesignMd(raw) {
  const fm = matter(raw);
  const body = fm.content;
  const sections = {};
  for (const s of SECTIONS) {
    const m = new RegExp(`(?:^|\\n)##\\s+${s.n}\\.[^\\n]*\\n([\\s\\S]*?)(?=\\n##\\s+\\d+\\.|$)`).exec(body);
    sections[s.n] = m ? m[1].trim() : null;
  }
  return { data: fm.data || {}, content: body, sections, tokens: fm.data?.tokens || null };
}

// ── validator (engine behind `omd validate`) ────────────────────────────
// returns { findings: [{level:'error'|'warn'|'info', rule, msg}], errors, ok }
export function validateDesignMd(raw) {
  const f = [];
  const add = (level, rule, msg) => f.push({ level, rule, msg });
  const { data, sections, content } = parseDesignMd(raw);

  // frontmatter
  if (data.omd == null) add("info", "frontmatter.omd", "no `omd:` version — treated as plain Google-Stitch DESIGN.md (valid but not OmD-annotated)");

  // section presence
  for (const s of SECTIONS) {
    if (sections[s.n] == null) {
      if (s.req === "required") add("error", "section.missing", `§${s.n} ${s.title} is REQUIRED but missing`);
      else add("info", "section.missing", `§${s.n} ${s.title} (${s.req}) missing`);
    }
  }

  // §2 descriptive-name + hex convention (at least one "Name (`#hex`)" pairing)
  if (sections[2]) {
    const hasNamedHex = /[A-Za-z][\w &/-]*\(?\s*`?#[0-9a-fA-F]{6}`?\s*\)?/.test(sections[2]);
    if (!hasNamedHex) add("warn", "color.named-hex", "§2 should pair descriptive names with hex values (e.g. `Indigo Primary (#5358ee)`)");
  }

  // §4 grammar: slash-multi-field anti-pattern (KRDS regression) — the high-value gate
  if (sections[4]) {
    const lines = sections[4].split("\n");
    for (const line of lines) {
      const m = /^\s*[-*]\s*([A-Za-z][\w -]*?):\s*(.+)$/.exec(line);
      if (!m) continue;
      const field = m[1].toLowerCase().trim(), val = m[2];
      // `font` legitimately uses "size / weight / family"; everything else must not join fields with " / Other:"
      if (field !== "font" && /\s\/\s+[A-Za-z][\w -]*:/.test(val))
        add("error", "section4.slash-multifield", `§4 bullet joins multiple fields on one line (silently drops all but one — KRDS regression): "${line.trim()}"`);
      if (PLACEHOLDER_VALUES.test(val.replace(/`/g, "").trim()))
        add("warn", "field.placeholder", `§4 placeholder value "${val.trim()}" — fill or omit (renders as prose, not spec)`);
    }
  }

  // frontmatter tokens.components — type enum + hex format (single-source enum)
  const comps = data?.tokens?.components;
  if (comps && typeof comps === "object" && !Array.isArray(comps)) {
    for (const [name, spec] of Object.entries(comps)) {
      if (!spec || typeof spec !== "object") continue;
      if (!spec.type) add("error", "component.type-missing", `tokens.components.${name}: missing required \`type\``);
      else if (!COMPONENT_TYPES.includes(spec.type)) add("error", "component.type-enum", `tokens.components.${name}: type "${spec.type}" not in [${COMPONENT_TYPES.join(" ")}]`);
      for (const k of ["bg", "fg", "border"]) {
        const v = spec[k]; if (typeof v === "string") { const hx = v.match(/#([0-9a-fA-F]{3,8})/); if (hx && hx[1].length !== 6) add("warn", "component.hex6", `tokens.components.${name}.${k}: use 6-digit #rrggbb (got ${hx[0]})`); }
      }
    }
  }

  // OmD honesty: count §10-15 [FILL IN] (info — maturity, not a failure)
  const fillCount = (content.match(/\[FILL IN/gi) || []).length;
  if (fillCount) add("info", "philosophy.fill-in", `${fillCount} [FILL IN] placeholder(s) — enrichment targets for the feedback loop (honest, not an error)`);

  const errors = f.filter((x) => x.level === "error").length;
  return { findings: f, errors, ok: errors === 0 };
}
