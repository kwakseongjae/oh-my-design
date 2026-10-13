// DESIGN.md v3 ↔ legacy OmD 0.1 mapping (spec/design-md-v3.md §8, §11, §12).
//
// One module, both directions, so the converter and every reader agree by construction:
//   - forward:  legacy frontmatter + body  → v3 frontmatter, v3 body, reference.json sidecar
//   - inverse:  v3 frontmatter + sidecar   → the legacy-shaped frontmatter the catalog pipeline reads
//
// The inverse is exact for a converted file: `migration` in the sidecar records the few facts the
// v3 grammar cannot carry (which `<n>px` values were bare numbers, a non-default legacy field name,
// key order, values kept in prose). For a natively written v3 file there is no record and the
// inverse uses the default rules. Nothing here infers a value.
//
// Lives under web/ because the Vercel project root is web/; root scripts re-export it.
import yaml from "js-yaml";

export const FORMAT_VERSION = "3.0.0";
export const CLAIM_GRAMMAR = "design-md-v3";

const TYPO_FORWARD = { size: "fontSize", weight: "fontWeight", lineHeight: "lineHeight", tracking: "letterSpacing", letterSpacing: "letterSpacing", family: "fontFamily", use: "use" };
const TYPO_INVERSE = { fontSize: "size", fontWeight: "weight", lineHeight: "lineHeight", letterSpacing: "tracking", fontFamily: "family", use: "use" };
const COMPONENT_FORWARD = { bg: "backgroundColor", fg: "textColor", radius: "rounded", font: "typography" };
const COMPONENT_INVERSE = Object.fromEntries(Object.entries(COMPONENT_FORWARD).map(([a, b]) => [b, a]));
/** Google component properties (spec §3.3). Any other component key is an OmD extension property. */
export const GOOGLE_COMPONENT_PROPS = new Set(["backgroundColor", "textColor", "typography", "rounded", "padding", "size", "height", "width"]);
export const TOKEN_META_KEYS = new Set(["source", "extracted", "note", "components_harvested"]);
/** Legacy token groups with a Google frontmatter group. */
const GOOGLE_GROUPS = ["colors", "typography", "rounded", "spacing", "components"];
/** Legacy token groups with no Google group: kept in section prose (spec §5) with `prose:` claims. */
export const PROSE_GROUPS = { shadow: "Elevation & Depth", motion: "Motion & Easing" };

const DIMENSION_RE = /^-?\d*\.?\d+(px|em|rem)$/;
const NUMBER_RE = /^-?\d*\.?\d+$/;
const PX_RE = /^-?\d*\.?\d+px$/;

/** Google accepts a Dimension for these; a keyword (`normal`) is a lint error and goes to prose. */
function dimensionTokenable(v) {
  return typeof v === "number" || (typeof v === "string" && DIMENSION_RE.test(v));
}
function lineHeightTokenable(v) {
  return typeof v === "number" || (typeof v === "string" && (DIMENSION_RE.test(v) || NUMBER_RE.test(v)));
}

function isMap(v) {
  return v !== null && typeof v === "object" && !Array.isArray(v);
}

/** Walk a nested object and yield [pathParts, leafValue]. Arrays and empty maps are leaves. */
export function* leaves(obj, prefix = []) {
  for (const [k, v] of Object.entries(obj ?? {})) {
    if (isMap(v) && Object.keys(v).length > 0) yield* leaves(v, [...prefix, k]);
    else yield [[...prefix, k], v];
  }
}

export function getPath(obj, dotted) {
  return splitPath(dotted).reduce((o, k) => (o == null ? undefined : o[k]), obj);
}

/** Dotted path → parts. Keys never contain dots in this catalog (checked by the converter). */
function splitPath(dotted) {
  return dotted.split(".");
}

function setPath(obj, parts, value) {
  let o = obj;
  for (const k of parts.slice(0, -1)) {
    if (!isMap(o[k])) o[k] = {};
    o = o[k];
  }
  o[parts.at(-1)] = value;
}

/** A typography entry is a role when it carries at least one known role field. */
function isTypographyRole(entry) {
  return isMap(entry) && Object.keys(entry).some((k) => k in TYPO_FORWARD);
}

/**
 * Map one legacy token path (without `tokens.`) to its v3 location.
 * `typography` is the legacy typography group, used to tell roles from scale maps.
 * Returns { path, kind, numeric } — kind: token | fonts | prose | meta.
 * Partial paths (a whole component, a whole role) map too, so claims on them re-key.
 */
export function mapLegacyPath(parts, value, typography) {
  const [group, a, b, ...rest] = parts;
  if (TOKEN_META_KEYS.has(group) && parts.length === 1) return { path: `tokens.${group}`, kind: "meta" };
  if (group in PROSE_GROUPS) return { path: parts.join("."), kind: "prose" };
  if (group === "colors" || group === "rounded") {
    if (parts.length !== 2) throw new Error(`unsupported ${group} shape at ${parts.join(".")}`);
    const numeric = group === "rounded" && typeof value === "number";
    return { path: parts.join("."), kind: "token", numeric };
  }
  if (group === "spacing") {
    if (parts.length === 1) return { path: "spacing", kind: "prose" }; // a bare list: names would be invented
    if (parts.length !== 2) throw new Error(`unsupported spacing shape at ${parts.join(".")}`);
    return { path: parts.join("."), kind: "token" };
  }
  if (group === "typography") {
    if (a === undefined) return { path: "typography", kind: "token" };
    if (a === "family") return { path: b === undefined ? "fonts.roles" : `fonts.roles.${b}`, kind: "fonts" };
    const entry = typography?.[a];
    if (entry !== undefined && !isTypographyRole(entry)) return { path: parts.join("."), kind: "prose" }; // a scale map, not a role
    if (b === undefined) return { path: `typography.${a}`, kind: "token" };
    if (rest.length) throw new Error(`unsupported typography depth at ${parts.join(".")}`);
    const renamed = TYPO_FORWARD[b];
    if (!renamed) throw new Error(`unsupported typography field: ${b} (typography.${a})`);
    const path = `typography.${a}.${renamed}`;
    if (value === undefined) return { path, kind: "token", alias: renamed === "letterSpacing" && b !== "tracking" ? b : null };
    if (renamed === "lineHeight" && !lineHeightTokenable(value)) return { path, kind: "prose" };
    if ((renamed === "fontSize" || renamed === "letterSpacing") && !dimensionTokenable(value)) return { path, kind: "prose" };
    return { path, kind: "token", numeric: (renamed === "fontSize" || renamed === "letterSpacing") && typeof value === "number", alias: renamed === "letterSpacing" && b !== "tracking" ? b : null };
  }
  if (group === "components") {
    if (a === undefined) return { path: "components", kind: "token" };
    if (b === undefined) return { path: `components.${a}`, kind: "token" };
    const renamed = COMPONENT_FORWARD[b] ?? b;
    if (renamed !== b && b in COMPONENT_INVERSE) throw new Error(`component field name collision: ${b}`);
    const path = [`components.${a}.${renamed}`, ...rest].join(".");
    return { path, kind: "token", numeric: b === "radius" && rest.length === 0 && typeof value === "number" };
  }
  throw new Error(`unsupported legacy token group: ${group}`);
}

/** Value as written in v3: bare numbers become `<n>px` where Google requires a Dimension. */
function forwardValue(mapped, value) {
  return mapped.numeric ? `${value}px` : value;
}

/** v3 path (no `prose:` prefix) → legacy path parts under `tokens`, honouring recorded aliases. */
export function legacyPathOf(v3Path, aliases = {}) {
  if (aliases[v3Path]) return splitPath(aliases[v3Path]);
  const parts = splitPath(v3Path);
  const [group, a, b, ...rest] = parts;
  if (group === "fonts" && a === "roles") return b === undefined ? ["typography", "family"] : ["typography", "family", b];
  if (group === "typography" && b !== undefined) return ["typography", a, TYPO_INVERSE[b] ?? b, ...rest];
  if (group === "components" && b !== undefined) return ["components", a, COMPONENT_INVERSE[b] ?? b, ...rest];
  return parts;
}

// ---------------------------------------------------------------------------------------------
// Sections (spec §4.2, §11.2)

/** Legacy H2 title (number stripped) → [v3 H2, mode]. 'merge' keeps inner headings; 'sub' nests under an H3. */
export const SECTION_MAP = {
  "Visual Theme & Atmosphere": ["Overview", "sub"],
  "Primary tasks": ["Overview", "sub"],
  "Brand Narrative": ["Overview", "sub"],
  Principles: ["Overview", "sub"],
  Personas: ["Overview", "sub"],
  "Color Palette & Roles": ["Colors", "merge"],
  "Typography Rules": ["Typography", "merge"],
  "Layout Principles": ["Layout", "merge"],
  "Responsive Behavior": ["Layout", "sub"],
  "Depth & Elevation": ["Elevation & Depth", "merge"],
  "Motion & Easing": ["Motion & Easing", "merge"],
  "Component Stylings": ["Components", "merge"],
  "Component Patterns": ["Components", "merge"],
  States: ["Components", "sub"],
  "Do's and Don'ts": ["Do's and Don'ts", "merge"],
  "Voice & Tone": ["Voice & Tone", "merge"],
  "Agent Prompt Guide": ["Agent Prompt Guide", "merge"],
  // Phase 2 additions from the catalog survey (2026-10-13). Same-named H2s merge; every other
  // heading keeps its exact title as an H3 under the closest v3 section, prose unchanged.
  Typography: ["Typography", "merge"],
  Layout: ["Layout", "merge"],
  "Elevation & Depth": ["Elevation & Depth", "merge"],
  Components: ["Components", "merge"],
  // v3 names map to themselves, so a v3-shaped body re-converts unchanged (the v3 writer path).
  Overview: ["Overview", "merge"],
  Colors: ["Colors", "merge"],
  Shapes: ["Shapes", "merge"],
  "CJK Typesetting": ["CJK Typesetting", "merge"],
  Governance: ["Governance", "merge"],
};

/** Remove generated "Values kept in prose" blocks so a re-conversion regenerates them once. */
export function stripGeneratedProse(body) {
  return body.replace(/\n### Values kept in prose\n[\s\S]*?(?=\n#{2,3} |$(?![\s\S]))/g, "");
}

/** Keyword placement for the long tail of hand-written H2s; first match wins. Order matters. */
const SECTION_RULES = [
  // Core v2 governance and experience H3s (natively authored references, e.g. serendie).
  [/^(Authority|Application priority|Unknowns|Changes)$/, "Governance"],
  [/^Scope$/, "Overview"],
  [/^(Do's and Don'ts|Patterns & Anti-Patterns|Anti-Patterns|What This System Refuses)/i, "Do's and Don'ts"],
  [/(Agent Prompt|AI Design Prompts|Reference Examples)/i, "Agent Prompt Guide"],
  [/(Verification|Source|Reference Scope|Reference Assets|Reference URLs|References & Boundaries|Evidence Limits|Implementation|Usage Guidelines|UI Guidelines|Token Reference|Notes on Adaptation)/i, "Governance"],
  [/^(Accessibility)/i, "Governance"],
  [/(Voice|Microcopy|Content)/i, "Voice & Tone"],
  [/^(Motion)/i, "Motion & Easing"],
  // Interaction notes sit with component states, not in the motion section: the motion-provenance
  // advisory reads that whole section, and legacy files kept these apart from it.
  [/^(Interaction & Motion|States & Motion|States|Observed Interaction States|Components|Component Inventory|Patterns$|Layout Patterns)/i, "Components"],
  [/^(Color)/i, "Colors"],
  [/^(Typography)/i, "Typography"],
  [/^(Spacing & Shape|Radius|Elevation & Shape|Shape)/i, "Shapes"],
  [/^(Elevation|Depth|Visual Effects)/i, "Elevation & Depth"],
  [/^(Layout|Spacing|Responsive|z-index)/i, "Layout"],
  [/^(Iconography|Imagery|Dark Mode|Design Principles|Philosophy|Overall Personality|Personas|Stakeholder|When to)/i, "Overview"],
];

export function sectionTarget(title) {
  if (SECTION_MAP[title]) return SECTION_MAP[title];
  for (const [re, target] of SECTION_RULES) if (re.test(title)) return [target, "sub"];
  return null;
}

export const V3_ORDER = [
  "Overview", "Colors", "Typography", "Layout", "Elevation & Depth", "Shapes", "Motion & Easing",
  "Components", "Do's and Don'ts", "Voice & Tone", "CJK Typesetting", "Agent Prompt Guide", "Governance",
];

/** Legacy section number (spec/omd-v0.1.md) ↔ v3 H2, for readers that used to key on `## N.`. */
export const LEGACY_SECTION_TO_V3 = {
  1: "Overview", 2: "Colors", 3: "Typography", 4: "Components", 5: "Layout", 6: "Elevation & Depth",
  7: "Do's and Don'ts", 8: "Layout", 9: "Agent Prompt Guide",
};

// ---------------------------------------------------------------------------------------------
// Detection and splitting (spec §12.2)

export function splitFrontmatter(text) {
  const src = text.replace(/^﻿/, "");
  if (!src.startsWith("---\n")) return null;
  const end = src.indexOf("\n---\n", 4);
  if (end < 0) return null;
  return { fmText: src.slice(4, end + 1), body: src.slice(end + 5) };
}

const V3_GROUP_KEYS = ["colors", "typography", "rounded", "spacing", "components", "omitted"];
const LEGACY_KEYS = ["tokens", "id", "verification_v2", "omd"];

/** v3: frontmatter with `name`, a Google token group (or `omitted`), and no legacy key. */
export function isV3Frontmatter(fm) {
  return isMap(fm) && typeof fm.name === "string" && V3_GROUP_KEYS.some((k) => k in fm) && !LEGACY_KEYS.some((k) => k in fm);
}

export function parseV3(text) {
  const split = splitFrontmatter(text);
  if (!split) return null;
  let fm;
  try {
    fm = yaml.load(split.fmText, { schema: yaml.JSON_SCHEMA });
  } catch {
    return null;
  }
  if (!isV3Frontmatter(fm)) return null;
  return { frontmatter: fm, body: split.body };
}

export function isV3Markdown(text) {
  return parseV3(text) !== null;
}

// ---------------------------------------------------------------------------------------------
// Forward: legacy → v3

function keyOrders(obj, prefix = [], out = {}) {
  if (!isMap(obj)) return out;
  out[prefix.join(".")] = Object.keys(obj);
  for (const [k, v] of Object.entries(obj)) if (isMap(v)) keyOrders(v, [...prefix, k], out);
  return out;
}

function proseLiteral(value) {
  return typeof value === "string" ? value : JSON.stringify(value);
}

/**
 * Legacy parsed frontmatter → { frontmatter, sidecar } (sidecar has no `lint`; the converter adds it).
 * `overlay` (reviewed, hand-authored) may add: description, per-role typography props, new typography
 * roles / colours (`add`), fonts, typesetting, claims/sources/surfaces for the additions, prose.
 */
export function convertFrontmatter(fm, overlay = {}, sourceText = "") {
  const tokens = fm.tokens ?? {};
  const typographyGroup = tokens.typography;
  const out = { name: fm.name };
  const fonts = {};
  const prose = [];
  const tokenMeta = {};
  const numeric = [];
  const aliases = {};
  const emptyMaps = []; // `components: {}` and the like have no leaves; the inverse restores them
  for (const [parts, value] of leaves(tokens)) {
    for (const p of parts) if (p.includes(".")) throw new Error(`token key contains a dot: ${parts.join("/")}`);
    if (isMap(value) && Object.keys(value).length === 0) { emptyMaps.push(parts.join(".")); continue; }
    const m = mapLegacyPath(parts, value, typographyGroup);
    if (m.kind === "meta") { tokenMeta[parts[0]] = value; continue; }
    if (m.kind === "fonts") { setPath(fonts, splitPath(m.path).slice(1), value); continue; }
    if (m.kind === "prose") { prose.push({ path: m.path, value }); continue; }
    setPath(out, splitPath(m.path), forwardValue(m, value));
    if (m.numeric) numeric.push(m.path);
    if (m.alias) aliases[m.path] = parts.join(".");
  }

  for (const [role, props] of Object.entries(overlay.typography ?? {})) {
    if (!out.typography?.[role]) throw new Error(`overlay typography role not in source: ${role}`);
    Object.assign(out.typography[role], props);
  }
  for (const [group, entries] of Object.entries(overlay.add ?? {})) {
    if (!["colors", "typography"].includes(group)) throw new Error(`overlay.add.${group} not supported`);
    out[group] ??= {};
    for (const [k, v] of Object.entries(entries)) {
      if (k in out[group]) throw new Error(`overlay.add.${group}.${k} already in source`);
      out[group][k] = v;
    }
  }

  const ordered = { name: out.name };
  if (overlay.description) ordered.description = overlay.description;
  for (const g of GOOGLE_GROUPS) if (out[g]) ordered[g] = out[g];
  const missing = GOOGLE_GROUPS.filter((g) => !out[g]);
  if (missing.length) ordered.omitted = missing.map((section) => ({ section, reason: "No verified values in current evidence." }));
  const roles = { ...(fonts.roles ?? {}), ...(overlay.fonts?.roles ?? {}) };
  const mergedFonts = { ...(Object.keys(roles).length ? { roles } : {}), ...(overlay.fonts ?? {}) };
  if (Object.keys(roles).length) mergedFonts.roles = roles;
  if (Object.keys(mergedFonts).length) ordered.fonts = mergedFonts;
  if (overlay.typesetting) ordered.typesetting = overlay.typesetting;

  const { tokens: _t, verification_v2: v2, omd, ...catalog } = fm;
  let verification;
  if (v2 !== undefined) {
    verification = { ...v2 };
    if (v2.claims !== undefined) verification.claims = rekeyClaims(v2.claims, tokens);
    if (overlay.verification) {
      // A reviewed overlay that adds observations also moves `checked` to the review that accepted
      // them: an observation may not postdate its check (evidence-integrity).
      if (overlay.verification.checked) verification.checked = overlay.verification.checked;
      verification.surfaces = [...(verification.surfaces ?? []), ...(overlay.verification.surfaces ?? [])];
      verification.sources = [...(verification.sources ?? []), ...(overlay.verification.sources ?? [])];
      for (const [k, ev] of Object.entries(overlay.verification.claims ?? {})) {
        if (verification.claims[k]) throw new Error(`overlay claim ${k} collides`);
        verification.claims[k] = ev;
      }
    }
  }

  const sidecar = {
    format: FORMAT_VERSION,
    catalog,
    tokens: tokenMeta,
    claimPaths: CLAIM_GRAMMAR,
    ...(verification !== undefined ? { verification_v2: verification } : {}),
    migration: {
      from: omd === undefined ? "omd-unknown" : typeof omd === "string" ? `omd-${omd}` : "omd-nonstring",
      // A non-string `omd` (serendie's catalog frontmatter declares `omd: { schema: 1 }`) is kept as is.
      ...(omd !== undefined && typeof omd !== "string" ? { omd } : {}),
      sourceSha256: null,
      overlay: null,
      prose,
      ...(numeric.length ? { numeric } : {}),
      ...(Object.keys(aliases).length ? { aliases } : {}),
      ...(emptyMaps.length ? { emptyMaps } : {}),
    },
  };
  // Claims the legacy file made about a token it never carried (or an empty map) resolve to nothing in
  // either format. They are kept, re-keyed, and listed so a conformance check can tell them apart.
  const proseSet = new Set(prose.map((p) => p.path));
  const dangling = Object.keys(verification?.claims ?? {}).filter((k) => (k.startsWith("prose:") ? !proseSet.has(k.slice(6)) : getPath(ordered, k) === undefined) && !(overlay.verification?.claims ?? {})[k]);
  if (dangling.length) sidecar.migration.danglingClaims = dangling;
  // Key order: recorded only where the default inverse would not reproduce it.
  const order = orderRecord(fm, ordered, sidecar);
  if (Object.keys(order).length) sidecar.migration.order = order;
  void sourceText;
  return { frontmatter: ordered, sidecar };
}

function orderRecord(fm, frontmatter, sidecar) {
  const projected = projectLegacyFrontmatter(frontmatter, { ...sidecar, migration: { ...sidecar.migration, order: undefined } });
  const want = keyOrders(fm);
  const got = keyOrders(projected);
  const out = {};
  for (const [p, keys] of Object.entries(want)) if (JSON.stringify(got[p]) !== JSON.stringify(keys)) out[p] = keys;
  return out;
}

export function rekeyClaims(claims, tokens) {
  const out = {};
  for (const [key, ev] of Object.entries(claims ?? {})) {
    if (!key.startsWith("tokens.")) throw new Error(`claim outside tokens: ${key}`);
    const parts = key.slice(7).split(".");
    const m = mapLegacyPath(parts, getPath(tokens, parts.join(".")), tokens?.typography);
    const newKey = m.kind === "prose" ? `prose:${m.path}` : m.path;
    if (newKey in out) throw new Error(`claim collision on ${newKey}`);
    out[newKey] = ev;
  }
  return out;
}

/** Restructure a legacy body into v3 section order. `extra` appends prose per v3 section. */
export function restructureBody(body, extra = {}) {
  const lines = body.split("\n");
  // A legacy file without an H1 (elastic) stays without one: a title would be invented text.
  const h1Index = lines.findIndex((l) => /^# /.test(l));
  const title = h1Index >= 0 ? lines[h1Index] : null;
  const firstH2 = lines.findIndex((l, i) => i > h1Index && /^## /.test(l));
  const preamble = lines.slice(h1Index + 1, firstH2 < 0 ? lines.length : firstH2).join("\n").trim();
  if (h1Index > 0 && lines.slice(0, h1Index).join("\n").trim()) throw new Error("legacy body has content before the H1");
  const buckets = Object.fromEntries(V3_ORDER.map((h) => [h, []]));
  let cur = null;
  let fence = false;
  for (const line of lines.slice(firstH2 < 0 ? lines.length : firstH2)) {
    if (/^\s*(```|~~~)/.test(line)) fence = !fence;
    const m = !fence && /^## (?:\d+\.\s*)?(.+?)\s*$/.exec(line);
    if (m) {
      const target = sectionTarget(m[1]);
      if (!target) throw new Error(`unmapped legacy section: ${m[1]}`);
      cur = { target: target[0], mode: target[1] };
      if (cur.mode === "sub") buckets[cur.target].push("", `### ${m[1]}`);
      continue;
    }
    if (!cur) continue;
    const demoted = !fence && cur.mode === "sub" && /^#{3,5} /.test(line) ? `#${line}` : line;
    buckets[cur.target].push(demoted);
  }
  for (const [section, md] of Object.entries(extra)) if (md) buckets[section].push("", md.trim());
  const out = title ? [title, ""] : [];
  if (preamble) out.push(preamble, "");
  for (const h of V3_ORDER) {
    const text = buckets[h].join("\n").trim();
    if (text) out.push(`## ${h}`, "", text, "");
  }
  return out.join("\n").replace(/\n{3,}/g, "\n\n");
}

/** Bullet lines for values the token grammar cannot carry, grouped by the v3 section they explain. */
export function proseExtras(prose) {
  const by = {};
  for (const p of prose) {
    const group = splitPath(p.path)[0];
    const section = PROSE_GROUPS[group] ?? (group === "spacing" ? "Layout" : "Typography");
    (by[section] ??= []).push(`- \`${p.path}\`: \`${proseLiteral(p.value)}\``);
  }
  return Object.fromEntries(Object.entries(by).map(([s, items]) => [s, `### Values kept in prose\n\nMeasured values the DESIGN.md token grammar cannot carry, kept verbatim:\n\n${items.join("\n")}`]));
}

export function renderV3(frontmatter, body) {
  return `---\n${yaml.dump(frontmatter, { lineWidth: -1, noRefs: true })}---\n\n${body.trim()}\n`;
}

// ---------------------------------------------------------------------------------------------
// Inverse: v3 + sidecar → legacy-shaped frontmatter

function applyOrder(obj, order, prefix = []) {
  if (!isMap(obj)) return obj;
  const keys = order[prefix.join(".")];
  const result = {};
  const names = keys ? [...keys, ...Object.keys(obj).filter((k) => !keys.includes(k))] : Object.keys(obj);
  for (const k of names) if (k in obj) result[k] = applyOrder(obj[k], order, [...prefix, k]);
  return result;
}

function inverseValue(v3Path, value, numeric) {
  if (numeric.has(v3Path) && typeof value === "string" && PX_RE.test(value)) return Number(value.slice(0, -2));
  return value;
}

/**
 * Rebuild the legacy frontmatter object (id, name, …, omd, verification_v2, tokens) from a v3
 * frontmatter and its sidecar. Exact for converted files; default rules for native v3 files.
 */
export function projectLegacyFrontmatter(v3, sidecar = {}) {
  const mig = sidecar.migration ?? {};
  const numeric = new Set(mig.numeric ?? []);
  const aliases = mig.aliases ?? {};
  const tokens = {};
  for (const [k, v] of Object.entries(sidecar.tokens ?? {})) tokens[k] = v;
  for (const g of GOOGLE_GROUPS) {
    if (!isMap(v3[g])) continue;
    for (const [parts, value] of leaves(v3[g], [g])) {
      const p = parts.join(".");
      setPath(tokens, legacyPathOf(p, aliases), inverseValue(p, value, numeric));
    }
  }
  if (isMap(v3.fonts?.roles)) setPath(tokens, ["typography", "family"], { ...v3.fonts.roles });
  for (const { path, value } of mig.prose ?? []) setPath(tokens, legacyPathOf(path, aliases), value);
  for (const p of mig.emptyMaps ?? []) setPath(tokens, splitPath(p), {});

  const catalog = sidecar.catalog ?? { name: v3.name };
  const fm = { ...catalog };
  if (!("name" in fm)) fm.name = v3.name;
  const from = typeof mig.from === "string" && mig.from.startsWith("omd-") ? mig.from.slice(4) : undefined;
  if (mig.omd !== undefined) fm.omd = mig.omd;
  else if (from !== undefined && from !== "unknown") fm.omd = from;
  if (sidecar.verification_v2 !== undefined) {
    const v2 = { ...sidecar.verification_v2 };
    if (isMap(v2.claims)) {
      const claims = {};
      for (const [k, ev] of Object.entries(v2.claims)) {
        const bare = k.startsWith("prose:") ? k.slice(6) : k;
        claims[`tokens.${legacyPathOf(bare, aliases).join(".")}`] = ev;
      }
      v2.claims = claims;
    }
    fm.verification_v2 = v2;
  }
  fm.tokens = tokens;
  return applyOrder(fm, mig.order ?? {});
}

/** Legacy-shaped markdown (frontmatter the pipeline parses + the v3 body) for a v3 file. */
export function projectLegacyMarkdown(v3Text, sidecar) {
  const parsed = parseV3(v3Text);
  if (!parsed) throw new Error("not a DESIGN.md v3 file");
  const fm = projectLegacyFrontmatter(parsed.frontmatter, sidecar);
  return `---\n${yaml.dump(fm, { lineWidth: -1, noRefs: true })}---\n\n${parsed.body.replace(/^\n+/, "")}`;
}
