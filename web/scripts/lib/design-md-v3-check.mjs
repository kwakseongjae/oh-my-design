// DESIGN.md v3 conformance (spec/design-md-v3.md §10). Pure: the caller passes the file text, the
// parsed sidecar and a Google lint report for exactly that text. Returns a list of problems.
import { getPath, parseV3, V3_ORDER } from "./design-md-v3.mjs";

export const V3_FRONTMATTER_KEYS = ["name", "description", "colors", "typography", "rounded", "spacing", "components", "omitted", "fonts", "typesetting"];
const EVIDENCE_CLASSES = new Set(["official-product-use", "live-surface-use", "official-distributed-asset", "declared-only", "unresolved"]);
export const LINT_TOOL = "@google/design.md@0.4.0";

/** Body H2 titles outside fenced code. */
export function bodyH2s(body) {
  const out = [];
  let fence = false;
  for (const line of body.split("\n")) {
    if (/^\s*(```|~~~)/.test(line)) fence = !fence;
    if (!fence && /^## /.test(line)) out.push(line.slice(3).trim());
  }
  return out;
}

/** The text of one v3 H2 section (without its heading), or "" when absent. */
export function v3Section(body, name) {
  const parts = body.split(/^(## .+)$/m);
  for (let i = 1; i < parts.length; i += 2) if (parts[i].slice(3).trim() === name) return parts[i + 1];
  return "";
}

export function checkV3({ text, sidecar, lint }) {
  const problems = [];
  const parsed = parseV3(text);
  if (!parsed) return ["not a DESIGN.md v3 file (frontmatter at byte 0 with name and a token group, no legacy keys)"];
  const { frontmatter: fm, body } = parsed;

  // 1–2. Frontmatter keys: subset of §3.1, in order; name present; no version/legacy/catalog keys.
  const keys = Object.keys(fm);
  const unknown = keys.filter((k) => !V3_FRONTMATTER_KEYS.includes(k));
  if (unknown.length) problems.push(`frontmatter keys outside spec §3.1: ${unknown.join(", ")}`);
  const order = keys.filter((k) => V3_FRONTMATTER_KEYS.includes(k)).map((k) => V3_FRONTMATTER_KEYS.indexOf(k));
  if (order.some((v, i) => i > 0 && v < order[i - 1])) problems.push(`frontmatter keys out of order: ${keys.join(", ")}`);

  // 3. Google lint: 0 errors.
  if (lint.summary.errors > 0) problems.push(`Google lint: ${lint.summary.errors} error(s): ${lint.findings.filter((f) => f.severity === "error").slice(0, 3).map((f) => `${f.path}: ${f.message}`).join("; ")}`);

  // 4. Body: H2s are §4.2 names, in order, unnumbered, unique; at most one H1.
  const h2s = bodyH2s(body);
  const bad = h2s.filter((h) => !V3_ORDER.includes(h));
  if (bad.length) problems.push(`H2s outside spec §4.2: ${bad.join(" | ")}`);
  const idx = h2s.filter((h) => V3_ORDER.includes(h)).map((h) => V3_ORDER.indexOf(h));
  if (idx.some((v, i) => i > 0 && v <= idx[i - 1])) problems.push(`H2s out of order or duplicated: ${h2s.join(" | ")}`);
  const h1s = body.split("\n").filter((l) => /^# /.test(l));
  if (h1s.length > 1) problems.push(`more than one H1 (${h1s.length})`);

  // 5. Known Gaps states every contrast warning.
  const contrast = lint.findings.filter((f) => f.rule === "contrast-ratio");
  if (contrast.length) {
    const governance = v3Section(body, "Governance");
    if (!/^### Known Gaps$/m.test(governance)) problems.push("contrast warning present but no ### Known Gaps under ## Governance");
    for (const f of contrast) {
      const comp = String(f.path ?? "").replace(/^components\./, "");
      if (!governance.includes(`\`${comp}\``)) problems.push(`Known Gaps does not state the contrast finding on ${comp}`);
    }
  }

  // 6–7. Fonts: evidence classes, substitutes recorded with metrics and label.
  for (const [family, face] of Object.entries(fm.fonts?.faces ?? {})) {
    for (const e of face?.evidence ?? []) if (!EVIDENCE_CLASSES.has(e)) problems.push(`fonts.faces.${family}.evidence: '${e}' is not one of the five classes`);
    for (const [script, sub] of Object.entries(face?.substitutes ?? {})) {
      if (sub?.label !== "substitute — not the brand face") problems.push(`fonts.faces.${family}.substitutes.${script}: missing label`);
      if (!sidecar?.fonts?.substitutes?.[family]?.[script]?.metrics) problems.push(`fonts.faces.${family}.substitutes.${script}: no measurement in reference.json`);
    }
  }

  // 8. Sidecar: claim grammar, every claim resolves, lint summary is fresh.
  if (sidecar) {
    if (sidecar.claimPaths !== "design-md-v3") problems.push("reference.json claimPaths is not design-md-v3");
    const prose = new Set((sidecar.migration?.prose ?? []).map((p) => p.path));
    for (const key of Object.keys(sidecar.verification_v2?.claims ?? {})) {
      if (key.startsWith("prose:")) {
        if (!prose.has(key.slice(6))) problems.push(`claim ${key} has no migration.prose entry`);
      } else if (getPath(fm, key) === undefined && !isClaimOnAbsentLegacyToken(key, sidecar)) {
        problems.push(`claim ${key} does not resolve to a frontmatter value`);
      }
    }
    if (sidecar.lint) {
      if (sidecar.lint.tool !== LINT_TOOL) problems.push(`reference.json lint.tool ${sidecar.lint.tool} != ${LINT_TOOL}`);
      for (const k of ["errors", "warnings", "infos"]) {
        if (sidecar.lint.summary?.[k] !== lint.summary[k]) problems.push(`reference.json lint.summary.${k} ${sidecar.lint.summary?.[k]} != fresh lint ${lint.summary[k]}`);
      }
    }
  }
  return problems;
}

/**
 * A legacy claim may cite a token the legacy file never had (a claim written ahead of its value).
 * The converter re-keys it faithfully; it then resolves to nothing in either format. Recorded in
 * the sidecar as `migration.danglingClaims`, so it is a stated fact, not a silent pass.
 */
function isClaimOnAbsentLegacyToken(key, sidecar) {
  return (sidecar.migration?.danglingClaims ?? []).includes(key);
}
