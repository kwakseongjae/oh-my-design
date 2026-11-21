#!/usr/bin/env node
/**
 * Compile a reference's capture evidence into the parts of a DESIGN.md that are measurements, with no model in
 * the loop (docs/ROADMAP.md T1). The probe (probe-keyboard-states.mjs) already records every state change as
 * data; until now a writer re-read it and decided what to carry over, so two writers produced two documents from
 * one capture. This script makes that step a function of the evidence.
 *
 *   node scripts/compile-evidence.mjs <capture-folder>... [--out <dir>] [--id <id>] [--published <DESIGN.md>]
 *
 * --published names the reference as it is published now. Each candidate whose value that file already gives a
 * token carries the published name, so a re-written reference keeps its names where nothing changed (names.json
 * holds the same pins as data). Without it, a paragraph-ink colour is still marked `foreground`.
 *
 * <capture-folder> holds survey.json and/or states.json (with its cfg.json), and text-census.json where the
 * capture ran one (heading and paragraph sizes; text-census.mjs), as written by the capture service
 * under artifacts/reference-evidence/visual/<id>/<timestamp>/. Give every folder of one capture session; later
 * folders win per control, except that a state an earlier run measured is kept when a later run could not.
 *
 * Writes to <dir> (default ./compiled):
 *   components.yaml  the `tokens.components` block, without the prose `use` line
 *   proof.md         the controls table and raw transition strings for .verification.md
 *   census.md        a digest of the survey: page facts, fonts, colours by count, custom properties by prefix
 *   measure.json     the pinned measurement list: url, locale, viewport, controls, close selectors
 *   values.json      the measured values per control and state, normalised, for diffing against a later run
 *   candidates.md    every colour, type size and corner radius the capture measured, with where it was seen;
 *                    the writer names tokens from this list (candidates.json is the same list as data)
 *
 * A control becomes a component when hover, pressed or focus was measured. A measured state that changed
 * nothing the brand painted is written as `no brand change`. Not counted as a change: a change in descendant
 * count, a change that persists after blur, and the browser's `auto` focus ring arriving or leaving. An
 * unmeasured state is reported as unmeasured, never as "no change".
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";

const STATES = ["hover", "pressed", "focus"];
const UA_LINK = "rgb(0, 0, 238)", UA_LINK_ACTIVE = "rgb(255, 0, 0)";

export function parseColor(v) {
  const m = /^rgba?\((\d+), (\d+), (\d+)(?:, ([\d.]+))?\)$/.exec(v ?? "");
  if (!m) return null;
  const alpha = m[4] === undefined ? 1 : Number(m[4]);
  const hex = "#" + [m[1], m[2], m[3]].map((n) => Number(n).toString(16).padStart(2, "0")).join("");
  return { hex, alpha };
}

/** A token value for a colour: 6-digit hex when opaque, the rgba() string when translucent, null when clear. */
export function colorToken(v) {
  const c = parseColor(v);
  if (!c || c.alpha === 0) return null;
  return c.alpha === 1 ? c.hex : v;
}

/** A box-shadow value that draws nothing: `none`, or every layer with no offset, blur or spread. */
export function paintsNoShadow(v) {
  if (!v || v === "none") return true;
  return v.split(/,(?![^(]*\))/).every((layer) => {
    const lengths = layer.replace(/rgba?\([^)]*\)/g, "").match(/-?[\d.]+px/g) ?? [];
    return lengths.length > 0 && lengths.every((n) => parseFloat(n) === 0);
  });
}

/** The changes in one state that the brand painted; null when the state was not measured. */
export function brandChanges(state, name) {
  if (!state?.measured) return null;
  // Focus is measured against the page-top rest, so it also carries whatever changed for another reason and
  // stayed (a scroll-entry animation that had not finished: AEON, 2026-11-12). Where the probe saw something
  // persist after blur, its comparison against the after-blur rest is the focus change. `alsoPersists` alone
  // misses a pseudo-element whose one descriptor string holds both a focus colour and a persisting opacity.
  const list = name === "focus" && state.persistsAfterBlur?.length && Array.isArray(state.changedVsAfterBlur) ? state.changedVsAfterBlur : state.changed ?? [];
  return list.filter((c) => {
    // `alsoPersists` is the probe's per-change mark for a focus change that stays after blur (a search field
    // that stays widened): that is a toggled layout, not a focus style.
    if (c.prop === "dom" || c.alsoPersists) return false;
    // The browser's own styles are not the brand's: the `auto` focus ring (a click focuses too, so it shows up
    // under pressed as well) and the default link colours, blue at rest and red while active. The ring also
    // shows up leaving: a button inside a card kept focus from the step before, and focusing the card took the
    // ring off it (jobplanet's job card, 2026-11-13), which is the browser moving its ring, not a focus style.
    if (/outline/.test(c.prop ?? "") && [c.from, c.to].some((v) => / auto( |$)/.test(` ${v ?? ""}`))) return false;
    if (/fg$/.test(c.prop ?? "") && c.from === UA_LINK && c.to === UA_LINK_ACTIVE) return false;
    // A shadow that goes from nothing to layers of zero size is a change in the computed string and not on the
    // screen: utility CSS sets its ring shadow on focus even when the ring is 0 wide (jobplanet's search field).
    if (/shadow$/.test(c.prop ?? "") && paintsNoShadow(c.from) && paintsNoShadow(c.to)) return false;
    return true;
  });
}

/**
 * One state as a token value. A plain colour change reads as the colour (`#dddddd` for a background, `fg #0033e8`
 * for ink: the control and its label usually report the same ink change, which is one change, not two).
 * Anything else is spelled out, property by property.
 */
function describe(changes) {
  const kinds = new Set(changes.map((c) => /(?:^|\.)(bg|fg)$/.exec(c.prop ?? "")?.[1] ?? c.prop));
  const targets = new Set(changes.map((c) => c.to));
  if (kinds.size === 1 && targets.size === 1 && ["bg", "fg"].includes([...kinds][0]) && colorToken(changes[0].to)) {
    const value = colorToken(changes[0].to);
    return [...kinds][0] === "bg" ? value : `fg ${value}`;
  }
  // The same change read on the control, its label and its descendants is one change: say it once, and where.
  const groups = new Map();
  for (const c of changes) {
    const pseudo = parsePseudo(c.from) || parsePseudo(c.to);
    const key = pseudo ? `pseudo|${c.set}|${c.prop}|${c.from}|${c.to}` : `${/([^.]+)$/.exec(c.prop ?? "")?.[1]}|${c.from}|${c.to}`;
    (groups.get(key) ?? groups.set(key, []).get(key)).push(c);
  }
  return [...groups.values()].map((g) => {
    if (g.length === 1) return describeChange(g[0]);
    const kind = /([^.]+)$/.exec(g[0].prop)[1];
    const sets = g.map((c) => c.set), n = sets.filter((x) => x === "descendant").length;
    const where = [...new Set(sets.filter((x) => x !== "descendant")), ...(n ? [`${n} descendant${n > 1 ? "s" : ""}`] : [])];
    return `${kind}: ${g[0].from} -> ${g[0].to} (${where.join(", ")})`;
  }).join("; ");
}

// The probe records a pseudo-element as one string: `::after{content:"";bg:…;color:…;op:1;tf:none;bs:none;size:WxH;bd:…}`.
const PSEUDO_FIELDS = { content: "content", bg: "bg", img: "image", pos: "image position", color: "color", op: "opacity", tf: "transform", bs: "shadow", size: "size", bd: "border" };
const PSEUDO_IDLE = { content: '""', bg: "rgba(0, 0, 0, 0)", img: "none", color: "-", op: "1", tf: "none", bs: "none" };
export function parsePseudo(text) {
  const m = /^(::[a-z-]+)\{(.*)\}$/s.exec(text ?? "");
  if (!m) return null;
  const fields = new Map();
  // Only `content` is quoted by the probe, and it comes first; a `;` inside it is not a separator. An image URL
  // further on can be cut short with an unbalanced quote, so quotes are not tracked past `content`.
  let rest = m[2];
  const content = /^content:("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|[^;]*)(?:;|$)/.exec(rest);
  if (content) { fields.set("content", content[1]); rest = rest.slice(content[0].length); }
  for (const part of rest.split(";")) { const i = part.indexOf(":"); if (i > 0) fields.set(part.slice(0, i), part.slice(i + 1)); }
  return { name: m[1], fields };
}

/**
 * One change as text. A pseudo-element change says only what differs (`::before color: A -> B`), or, when the
 * pseudo-element appears with the state, what it paints. The raw strings stay in the proof table.
 */
export function describeChange(c) {
  const a = parsePseudo(c.from), b = parsePseudo(c.to);
  if (!a && !b) return `${c.set} ${c.prop}: ${c.from} -> ${c.to}`;
  const where = c.set.replace(/-?pseudo$/, "");
  const who = `${where && where !== "self" ? where + " " : ""}${(b ?? a).name}`;
  const label = (k) => PSEUDO_FIELDS[k] ?? k;
  const size = (v) => v.replace(/pxx/, "px x ");
  const show = (k, v) => (k === "size" ? size(v) : v);
  if (a && b) {
    const keys = [...new Set([...a.fields.keys(), ...b.fields.keys()])].filter((k) => a.fields.get(k) !== b.fields.get(k));
    return keys.map((k) => `${who} ${label(k)}: ${show(k, a.fields.get(k) ?? "none")} -> ${show(k, b.fields.get(k) ?? "none")}`).join("; ") || `${who}: no change in the recorded fields`;
  }
  if (!b) return `${who} removed`;
  const painted = [...b.fields].filter(([k, v]) => k !== "size" && PSEUDO_IDLE[k] !== v).map(([k, v]) => `${label(k)} ${v}`);
  return `${who} appears: ${[...painted, b.fields.has("size") ? size(b.fields.get("size")) : null].filter(Boolean).join(", ")}`;
}

function componentType(key, identity) {
  if (["input", "textarea", "select"].includes(identity.tag)) return "input";
  if (identity.role === "tab") return "tab";
  if (/card|tile/.test(key)) return "card";
  return "button"; // a link styled as an action or a nav link is a button; `use` says it is a link
}

/** Merge the controls of several states.json files into one record per key. */
export function mergeControls(statesFiles) {
  const out = new Map();
  for (const doc of statesFiles) {
    for (const [key, x] of Object.entries(doc.controls ?? {})) {
      if (!x.found) continue;
      const prev = out.get(key);
      const states = Object.fromEntries(STATES.map((s) => [s, x[s] ?? null]));
      if (prev) for (const s of STATES) if (!states[s]?.measured && prev.states[s]?.measured) states[s] = prev.states[s];
      out.set(key, { key, label: x.label, find: x.find, identity: x.identity, rest: x.rest, states });
    }
  }
  return [...out.values()];
}

/**
 * What a component says for a state that was measured and showed nothing the brand painted. A button with no hover
 * style is still a button: until 2026-11-13 such a control was left out of `components` (a component needed a
 * change in some state), and a re-verified reference lost most of its components to prose (jobplanet: 7 to 1).
 * The words are the proof table's own, and the quality gate accepts them only beside that control's proof row.
 */
export const NO_BRAND_CHANGE = "no brand change";

export function compileControl(c) {
  const per = Object.fromEntries(STATES.map((s) => [s, brandChanges(c.states[s], s)]));
  // A control is a component when at least one state was measured, whether or not it changed. With every state
  // unmeasured there is nothing to say about how it behaves, and it stays prose.
  const emitted = STATES.some((s) => per[s] !== null);
  const reason = emitted ? null : "every state unmeasured";
  const { identity: idn, rest } = c;
  /** @type {Record<string, string | number>} */
  const fields = { type: componentType(c.key, idn) };
  // The text a person reads is the label element, which can differ from the control that wraps it (a link whose
  // own colour is the browser default while its span carries the brand ink). Report the label's ink and font.
  const ink = rest?.label?.fg ?? rest?.fg, font = rest?.label?.font ?? idn.font;
  // Token fields take opaque colours only (the catalog gate reads them as 6-digit hex); a translucent rest
  // colour goes to `notes` for the writer to state in `use`.
  const notes = [];
  // A button or link with no text of its own paints nothing in its computed colour: what a person sees is the
  // icon. Reporting that colour as `fg` makes a contrast check compare a colour that is not on the screen
  // (visitkorea's search button: computed #666666, white magnifier). It goes to `notes` instead.
  // (`rest.label` is always there: with no inner label it is the control itself, so it cannot tell the two apart.)
  const iconOnly = ["button", "a"].includes(idn.tag) && !(idn.text ?? "").trim();
  for (const [k, v] of [["bg", rest?.bg], ["fg", ink]]) {
    const c = parseColor(v);
    if (k === "fg" && iconOnly) { if (c) notes.push(`no text: the computed colour ${v} paints nothing here, so no fg is given; state the icon's own colour in \`use\` if it was measured`); continue; }
    if (c?.alpha === 1) fields[k] = c.hex; else if (c && c.alpha > 0) notes.push(`${k} at rest is ${v}`);
  }
  const border = parseColor(/rgba?\([^)]*\)/.exec(rest?.border ?? "")?.[0]);
  if (border?.alpha === 1) fields.border = border.hex;
  const radius = /^(\d+(?:\.\d+)?)px$/.exec(idn.radius ?? "");
  if (radius) fields.radius = Number(radius[1]);
  if (fields.type === "card") fields.width = `${idn.rect.w}px`;
  fields.height = `${idn.rect.h}px`;
  if (idn.padding) fields.padding = idn.padding;
  if (font && !/^0px/.test(font) && !iconOnly) fields.font = font.replace("/", " / "); // 0px: an image link with hidden text
  // Every measured state is stated; an unmeasured one is left out (UNMEASURED is not "no change").
  for (const s of STATES) if (per[s]?.length) fields[s] = describe(per[s]); else if (per[s]) fields[s] = NO_BRAND_CHANGE;
  return { key: c.key, emitted, reason, fields, per, notes };
}

function yamlValue(v) { return typeof v === "number" ? String(v) : JSON.stringify(v); }

export function componentsYaml(compiled) {
  const lines = ["components:"];
  for (const c of compiled) {
    if (!c.emitted) { lines.push(`  # ${c.key}: prose only (${c.reason})`); continue; }
    lines.push(`  ${c.key}:`);
    for (const [k, v] of Object.entries(c.fields)) lines.push(`    ${k}: ${yamlValue(v)}`);
    for (const s of STATES) if (c.per[s] === null) lines.push(`    # ${s}: unmeasured`);
    for (const n of c.notes) lines.push(`    # ${n}`);
    lines.push(`    use: ""  # the writer says what the control is and what it sits on`);
  }
  lines.push("components_harvested: true");
  return lines.join("\n") + "\n";
}

// A computed value can hold pipes (a border written edge by edge: `none | none | 4px solid … | none`); in a
// markdown table they would split the cell.
const cell = (v) => String(v).replaceAll("|", "\\|");
function stateCell(per) {
  if (per === null) return "UNMEASURED";
  if (!per.length) return "no brand change";
  return per.map((c) => `${c.set} ${c.prop}: \`${cell(c.from)}\` → \`${cell(c.to)}\``).join("<br>");
}

export function proofMarkdown(controls, compiled) {
  const rows = controls.map((c, i) => {
    const idn = c.identity;
    const id = `\`<${idn.tag}>\` ${JSON.stringify((idn.text ?? "").slice(0, 40))} · ${idn.rect.w}×${idn.rect.h} · radius ${idn.radius} · ${idn.font}`;
    const rest = `bg \`${c.rest?.bg}\` · fg \`${c.rest?.fg}\` · border \`${cell(c.rest?.border)}\``;
    return `| \`${c.key}\` | ${id} | ${rest} | ${STATES.map((s) => stateCell(compiled[i].per[s])).join(" | ")} |`;
  });
  const transitions = controls.filter((c) => c.identity.transition).map((c) => `- \`${c.key}\`: \`${c.identity.transition}\``);
  return ["| control | identity | rest | hover | pressed | focus |", "|---|---|---|---|---|---|", ...rows, "",
    "Raw computed `transition` strings:", ...transitions, ""].join("\n");
}

function colourRows(list, n = 12) {
  return (list ?? []).slice(0, n).map((e) => `- \`${colorToken(e.color) ?? e.color}\` × ${e.count}`).join("\n") || "- (none recorded)";
}

export function censusMarkdown(survey) {
  if (!survey) return "No survey.json in the given folders.\n";
  const b = survey.boot ?? {}, cz = survey.census ?? {}, cc = cz.census ?? {};
  const prefixes = new Map();
  for (const [name, value] of Object.entries(cz.computedVars ?? {})) {
    const p = /^--([a-zA-Z0-9]+)/.exec(name)?.[1] ?? "(bare)";
    const e = prefixes.get(p) ?? { count: 0, samples: [] };
    e.count += 1; if (e.samples.length < 3) e.samples.push(`${name}: ${String(value).slice(0, 40)}`);
    prefixes.set(p, e);
  }
  const prefixRows = [...prefixes.entries()].sort((a, z) => z[1].count - a[1].count).slice(0, 20)
    .map(([p, e]) => `- \`--${p}*\` × ${e.count} — ${e.samples.map((s) => `\`${s}\``).join(", ")}`);
  const faces = [...new Set((cz.fontFaces ?? []).map((f) => f.family))];
  return [
    `# Survey digest`, "",
    `- url: ${b.url} → ${b.finalUrl} (status ${b.status}), title ${JSON.stringify(b.title)}, html lang ${JSON.stringify(b.htmlLang)}`,
    `- locale ${b.locale}, viewport ${b.viewport}, browser ${b.browser}, started ${b.startedAt}`,
    `- consent rejected via: ${b.consent?.rejectedVia ?? "none recorded"}`,
    `- elements ${cc.elements}, shadow roots ${cc.shadowRoots}, unreadable stylesheets ${(cz.unreadableSheets ?? []).length}`, "",
    `## Fonts`, `- loaded: ${(cz.fonts?.loaded ?? []).join("; ") || "none"}`,
    ...["body", "h1", "button"].map((r) => `- ${r}: ${cz.fonts?.[r] ?? "not read"}`),
    `- @font-face families declared: ${faces.join(", ") || "none"}`, "",
    `## Background colours by element count`, colourRows(cc.bg), "",
    `## Text colours by element count`, colourRows(cc.text), "",
    `## Paragraph ink`, colourRows(cc.paragraphInk, 6), "",
    `## Border colours`, colourRows(cc.border, 8), "",
    `## Custom properties (computed on :root): ${Object.keys(cz.computedVars ?? {}).length}, by prefix`,
    ...(prefixRows.length ? prefixRows : ["- none"]), "",
  ].join("\n");
}

/** Opaque colours in a computed value (`rgb()` / `rgba()` with alpha 1), as 6-digit hex. Computed styles only. */
export function computedColors(v) {
  const out = [];
  for (const m of String(v ?? "").matchAll(/rgba?\((\d+), ?(\d+), ?(\d+)(?:, ?([\d.]+))?\)/g)) {
    if (m[4] !== undefined && Number(m[4]) !== 1) continue;
    out.push("#" + [m[1], m[2], m[3]].map((n) => Number(n).toString(16).padStart(2, "0")).join(""));
  }
  return out;
}

// The 16 basic colour keywords (CSS Color 4 §6.1). Other named colours are left out, not guessed.
const BASIC_COLOURS = { black: "#000000", silver: "#c0c0c0", gray: "#808080", white: "#ffffff", maroon: "#800000", red: "#ff0000",
  purple: "#800080", fuchsia: "#ff00ff", green: "#008000", lime: "#00ff00", olive: "#808000", yellow: "#ffff00", navy: "#000080",
  blue: "#0000ff", teal: "#008080", aqua: "#00ffff" };

/** A custom property's value as 6-digit hex when the whole value is one opaque colour; null for anything else. */
export function declaredColor(v) {
  const s = String(v ?? "").trim().toLowerCase();
  if (Object.hasOwn(BASIC_COLOURS, s)) return BASIC_COLOURS[s];
  const hex = /^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/.exec(s)?.[1];
  if (hex) {
    if (hex.length === 8) return hex.endsWith("ff") ? "#" + hex.slice(0, 6) : null;
    return "#" + (hex.length === 3 ? [...hex].map((c) => c + c).join("") : hex);
  }
  if (/^rgba?\([^)]*\)$/.test(s)) return computedColors(s.replace(/\s*,\s*/g, ", "))[0] ?? null;
  const hsl = /^hsla?\(\s*([\d.]+)(?:deg)?[\s,]+([\d.]+)%[\s,]+([\d.]+)%\s*\)$/.exec(s);
  if (!hsl) return null;
  const [h, sat, l] = [Number(hsl[1]) / 30, Number(hsl[2]) / 100, Number(hsl[3]) / 100];
  const a = sat * Math.min(l, 1 - l);
  const f = (n) => Math.round(255 * (l - a * Math.max(-1, Math.min((n + h) % 12 - 3, 9 - (n + h) % 12, 1))));
  return "#" + [f(0), f(8), f(4)].map((n) => n.toString(16).padStart(2, "0")).join("");
}

const COLOUR_CAP = 60, DECLARED_CAP = 200, TYPE_CAP = 24, RADIUS_CAP = 16;
const mode = (counts) => [...counts.entries()].sort((a, z) => z[1] - a[1] || String(a[0]).localeCompare(String(z[0])))[0]?.[0] ?? null;

/**
 * Every colour, type size and corner radius the capture measured, with where it was seen. The list is a function
 * of the evidence (fixed order, fixed cut-offs); which candidate becomes a token and what it is called stays with
 * the writer. Sizes and radii come from the survey's rows (the interactive elements it listed) and the measured
 * controls: the survey does not record the size of headings or running text.
 */
/**
 * Token names a published DESIGN.md (v3 frontmatter) gives to values: colours by hex, type by size/weight, radii
 * by px. A value two tokens share keeps both names, in file order. `text` is the file's frontmatter as parsed.
 */
export function publishedNames(front) {
  const out = { colours: {}, type: {}, radii: {} };
  const add = (map, key, name) => { if (key !== null) (map[key] ??= []).push(name); };
  for (const [name, v] of Object.entries(front?.colors ?? {})) add(out.colours, /^#[0-9a-fA-F]{6}$/.test(String(v)) ? String(v).toLowerCase() : null, name);
  for (const [name, v] of Object.entries(front?.typography ?? {})) {
    const size = /^(\d+(?:\.\d+)?)px$/.exec(String(v?.fontSize ?? ""))?.[1];
    add(out.type, size && v?.fontWeight ? `${Number(size)}/${Number(v.fontWeight)}` : null, name);
  }
  for (const [name, v] of Object.entries(front?.rounded ?? {})) add(out.radii, /^\d+(?:\.\d+)?px$/.test(String(v)) ? `${parseFloat(v)}px` : null, name);
  return out;
}

/** @param {any} survey @param {any[]} [controls] @param {any[]} [compiled] @param {ReturnType<typeof publishedNames> | null} [published] @param {any} [text] the text census (text-census.mjs), when the capture has one */
export function tokenCandidates(survey, controls = [], compiled = [], published = null, text = null) {
  const cz = survey?.census ?? {}, cc = cz.census ?? {};
  const colours = new Map(), sizes = new Map(), radii = new Map();
  const colour = (hex) => colours.get(hex) ?? colours.set(hex, { value: hex, painted: {}, interactive: 0, controls: [], declared: [] }).get(hex);
  const size = (font) => {
    const m = /^(\d+(?:\.\d+)?)px ?\/ ?(\d+)$/.exec(font ?? "");
    if (!m || Number(m[1]) === 0) return null; // 0px: an image link with hidden text
    const key = `${m[1]}/${m[2]}`;
    return sizes.get(key) ?? sizes.set(key, { size: Number(m[1]), weight: Number(m[2]), interactive: 0, heading: 0, paragraph: 0, lineHeights: new Map(), textLineHeights: new Map(), families: new Map(), controls: [] }).get(key);
  };
  const radius = (v) => (v ? radii.get(v) ?? radii.set(v, { value: v, interactive: 0, controls: [] }).get(v) : null);
  const bump = (map, k) => { if (k) map.set(k, (map.get(k) ?? 0) + 1); };
  const note = (list, text) => { if (!list.includes(text)) list.push(text); };

  for (const [list, label] of [["bg", "background"], ["text", "text"], ["border", "border"], ["paragraphInk", "paragraph"]]) {
    for (const e of cc[list] ?? []) for (const hex of computedColors(e.color)) colour(hex).painted[label] = (colour(hex).painted[label] ?? 0) + e.count;
  }
  for (const r of survey?.rows ?? []) {
    for (const hex of new Set([r.bg, r.fg, r.border].flatMap(computedColors))) colour(hex).interactive += 1;
    const t = size(r.font);
    if (t) { t.interactive += 1; bump(t.lineHeights, r.lineHeight); bump(t.families, r.family); }
    const rad = radius(r.radius);
    if (rad) rad.interactive += 1;
  }
  controls.forEach((c, i) => {
    const rest = c.rest ?? {};
    for (const [field, v] of [...Object.entries(rest), ...Object.entries(rest.label ?? {}).map(([k, v]) => [`label.${k}`, v])]) {
      if (typeof v === "string") for (const hex of computedColors(v)) note(colour(hex).controls, `${c.key} rest.${field}`);
    }
    for (const s of STATES) for (const ch of compiled[i]?.per?.[s] ?? []) for (const hex of computedColors(ch.to)) note(colour(hex).controls, `${c.key} ${s}`);
    for (const font of new Set([c.identity?.font, rest.label?.font])) {
      const t = size(font);
      if (t) { note(t.controls, c.key); bump(t.lineHeights, c.identity?.lineHeight); bump(t.families, c.identity?.family); }
    }
    const rad = radius(c.identity?.radius);
    if (rad) note(rad.controls, c.key);
  });
  // Headings and paragraphs are not interactive, so the survey's rows do not hold their sizes: the text census does.
  for (const role of ["heading", "paragraph"]) {
    for (const e of text?.roles?.[role] ?? []) {
      const t = size(`${e.size}px/${e.weight}`);
      if (!t) continue;
      t[role] += e.chars;
      bump(t.lineHeights, e.lineHeight); bump(t.textLineHeights, e.lineHeight); bump(t.families, e.family);
    }
  }
  for (const [name, v] of Object.entries(cz.computedVars ?? {})) {
    const hex = declaredColor(v);
    if (hex) colour(hex).declared.push(name);
  }

  const weight = (c) => Object.values(c.painted).reduce((a, n) => a + n, 0) + c.interactive;
  // A name the script can give on its own: the published one for an unchanged value, else `foreground` for the
  // colour most paragraphs are set in (the catalog's name for body-text ink; the gate requires it).
  const topInk = [...(cc.paragraphInk ?? [])].sort((a, z) => z.count - a.count).flatMap((e) => computedColors(e.color))[0];
  const named = (kind, key, fallback) => (published?.[kind]?.[key]?.length ? { name: published[kind][key].join(", "), from: "published" } : fallback ? { name: fallback, from: "rule" } : {});
  const all = [...colours.values()].map((c) => ({ ...c, declared: c.declared.sort(), ...named("colours", c.value, c.value === topInk ? "foreground" : null) }));
  const seen = all.filter((c) => weight(c) || c.controls.length)
    .sort((a, z) => weight(z) - weight(a) || z.controls.length - a.controls.length || a.value.localeCompare(z.value));
  const declaredOnly = all.filter((c) => !weight(c) && !c.controls.length).sort((a, z) => a.declared[0].localeCompare(z.declared[0]))
    .map((c) => ({ value: c.value, declared: c.declared }));
  const type = [...sizes.values()].sort((a, z) => z.interactive - a.interactive || z.controls.length - a.controls.length || (z.heading + z.paragraph) - (a.heading + a.paragraph) || z.size - a.size || z.weight - a.weight)
    // One size can sit on two line heights: 13px control text at 19.5px and a 13px paragraph at 20px (jobplanet,
    // 2026-11-14: two reviewers each found a row that gave the controls' line height to the paragraph). The most
    // common one stays the row's line height; the heading and paragraph text's own is given beside it when it differs.
    .map(({ lineHeights, textLineHeights, families, ...t }) => {
      const lineHeight = mode(lineHeights), ofText = mode(textLineHeights);
      return { ...t, lineHeight, ...(ofText && ofText !== lineHeight ? { textLineHeight: ofText } : {}), family: mode(families), ...named("type", `${t.size}/${t.weight}`) };
    });
  const rad = [...radii.values()].sort((a, z) => z.interactive - a.interactive || z.controls.length - a.controls.length || a.value.localeCompare(z.value))
    .map((r) => ({ ...r, ...named("radii", `${parseFloat(r.value)}px`) }));
  // Published tokens whose value this capture no longer holds: the writer says what happened to them.
  const have = { colours: new Set(all.map((c) => c.value)), type: new Set(type.map((t) => `${t.size}/${t.weight}`)), radii: new Set(rad.map((r) => `${parseFloat(r.value)}px`)) };
  const gone = published ? Object.fromEntries(Object.entries(published).map(([kind, map]) => [kind,
    Object.entries(map).filter(([key]) => !have[kind].has(key)).flatMap(([key, names]) => names.map((name) => ({ name, value: key })))])) : null;
  return {
    colours: seen.slice(0, COLOUR_CAP), declaredOnly: declaredOnly.slice(0, DECLARED_CAP),
    type: type.slice(0, TYPE_CAP), radii: rad.slice(0, RADIUS_CAP),
    families: Object.fromEntries(["body", "h1", "button"].map((r) => [r, cz.fonts?.[r] ?? null])),
    textCensus: Boolean(text?.roles),
    ...(gone ? { publishedNotMeasured: gone } : {}),
    notListed: { colours: Math.max(0, seen.length - COLOUR_CAP), declaredOnly: Math.max(0, declaredOnly.length - DECLARED_CAP),
      type: Math.max(0, type.length - TYPE_CAP), radii: Math.max(0, rad.length - RADIUS_CAP) },
  };
}

export function candidatesMarkdown(cand) {
  const nameCell = (c) => (c.name ? `\`${c.name}\`${c.from === "published" ? " (published)" : ""}` : "—");
  const few = (list, n = 4) => (list.length > n ? `${list.slice(0, n).join("; ")}; +${list.length - n}` : list.join("; ")) || "—";
  const more = (n, where) => (n ? [`${n} more not listed here; see ${where}.`] : []);
  const painted = (c) => [...Object.entries(c.painted).map(([k, n]) => `${k} ×${n}`), ...(c.interactive ? [`interactive ×${c.interactive}`] : [])].join(" · ") || "—";
  return [
    "# Token candidates", "",
    "Every colour, type size and corner radius this capture measured, and where it was seen. The order and the",
    "cut-offs are fixed by the script. Saying what a token is for is the writer's part. The `name` column is a",
    "name the script can give: `(published)` is the name the reference already publishes for that value, to be",
    "kept as it is; `foreground` is the colour most paragraphs are set in. `—` is the writer's to name.", "",
    `## Colours seen on the page (${cand.colours.length})`, "",
    "Element counts are from the survey's colour census; `interactive` counts the survey's rows (links, buttons,",
    "fields) that carry the colour; the controls column names the measured control and the state or rest field.", "",
    "| value | name | elements painted | measured controls | custom property |", "|---|---|---|---|---|",
    ...cand.colours.map((c) => `| \`${c.value}\` | ${nameCell(c)} | ${painted(c)} | ${few(c.controls)} | ${few(c.declared.map((n) => `\`${n}\``), 3)} |`),
    ...more(cand.notListed.colours, "`survey.json`"), "",
    `## Colours declared only (${cand.declaredOnly.length})`, "",
    "A custom property computed on `:root` holds the value, and no surveyed element or measured control was painted",
    "with it. A declared colour is not evidence that the page uses it.", "",
    ...(cand.declaredOnly.length ? ["| value | custom property |", "|---|---|",
      ...cand.declaredOnly.map((c) => `| \`${c.value}\` | ${few(c.declared.map((n) => `\`${n}\``), 3)} |`)] : ["- none"]),
    ...more(cand.notListed.declaredOnly, "`census.computedVars` in `survey.json`"), "",
    `## Type sizes (${cand.type.length})`, "",
    ...(cand.textCensus
      ? ["From the survey's rows, the measured controls and the text census. `heading` and `paragraph` count the",
        "characters of text set in that size inside h1–h3 and inside <p>: the larger counts are the page's heading",
        "and body sizes."]
      : ["From the survey's rows and the measured controls. Not captured: the size of headings and running text that",
        "are not links or controls."]), "",
    ...["body", "h1", "button"].map((r) => `- ${r} family: ${cand.families[r] ?? "not read"}`), "",
    "| size / weight | name | interactive elements | heading chars | paragraph chars | line height (most common) | family (most common) | measured controls |", "|---|---|---|---|---|---|---|---|",
    ...cand.type.map((t) => `| ${t.size}px / ${t.weight} | ${nameCell(t)} | ${t.interactive} | ${t.heading || "—"} | ${t.paragraph || "—"} | ${t.lineHeight ?? "—"}${t.textLineHeight ? ` · heading and paragraph text ${t.textLineHeight}` : ""} | ${t.family ?? "—"} | ${few(t.controls)} |`),
    ...more(cand.notListed.type, "`rows` in `survey.json`"), "",
    `## Corner radii (${cand.radii.length})`, "",
    "| radius | name | interactive elements | measured controls |", "|---|---|---|---|",
    ...cand.radii.map((r) => `| ${r.value} | ${nameCell(r)} | ${r.interactive} | ${few(r.controls)} |`),
    ...more(cand.notListed.radii, "`rows` in `survey.json`"), "",
    ...(cand.publishedNotMeasured ? ["## Published tokens this capture did not measure", "",
      "The published reference names these values and this capture does not hold them. Keep one only if another",
      "file in the evidence still shows it; otherwise drop it and say so in report.md.", "",
      ...["colours", "type", "radii"].flatMap((k) => cand.publishedNotMeasured[k].map((g) => `- ${k}: \`${g.name}\` = ${g.value}`)),
      ...(["colours", "type", "radii"].some((k) => cand.publishedNotMeasured[k].length) ? [] : ["- none"]), ""] : []),
  ].join("\n");
}

export function measureSpec(id, survey, statesFiles, cfgs) {
  const boot = survey?.boot ?? statesFiles[0]?.boot ?? {};
  const controls = new Map();
  const close = new Set();
  let hideOverlays = false;
  for (const cfg of cfgs) {
    for (const c of cfg.controls ?? []) controls.set(c.key, { key: c.key, label: c.label, find: c.find });
    for (const s of cfg.close ?? []) close.add(s);
    hideOverlays ||= Boolean(cfg.hideOverlays);
  }
  return { id, url: boot.url, locale: boot.locale, viewport: boot.viewport, controls: [...controls.values()], close: [...close], hideOverlays };
}

export function valuesOf(controls, compiled) {
  return Object.fromEntries(controls.map((c, i) => [c.key, {
    identity: { tag: c.identity.tag, text: c.identity.text, href: c.identity.href, w: c.identity.rect.w, h: c.identity.rect.h,
      radius: c.identity.radius, padding: c.identity.padding, font: c.identity.font, family: c.identity.family,
      letterSpacing: c.identity.letterSpacing, transition: c.identity.transition },
    rest: { bg: c.rest?.bg, fg: c.rest?.fg, border: c.rest?.border, shadow: c.rest?.shadow, opacity: c.rest?.opacity },
    states: Object.fromEntries(STATES.map((s) => [s, compiled[i].per[s] === null ? "unmeasured"
      : compiled[i].per[s].map(({ set, prop, from, to }) => ({ set, prop, from, to }))])),
  }]));
}

function main() {
  const args = process.argv.slice(2);
  const opt = (name) => { const i = args.indexOf(name); return i === -1 ? null : args.splice(i, 2)[1]; };
  const out = opt("--out") ?? "compiled";
  const id = opt("--id");
  const publishedFile = opt("--published");
  if (!args.length) { console.error("usage: compile-evidence.mjs <capture-folder>... [--out <dir>] [--id <id>]"); process.exit(2); }
  const read = (f) => JSON.parse(readFileSync(f, "utf8"));
  const folders = [...args].sort();
  let survey = null, text = null; const statesFiles = [], cfgs = [];
  for (const f of folders) {
    if (existsSync(path.join(f, "survey.json"))) survey = read(path.join(f, "survey.json"));
    if (existsSync(path.join(f, "text-census.json"))) text = read(path.join(f, "text-census.json"));
    if (existsSync(path.join(f, "states.json"))) statesFiles.push(read(path.join(f, "states.json")));
    if (existsSync(path.join(f, "cfg.json"))) cfgs.push(read(path.join(f, "cfg.json")));
  }
  const controls = mergeControls(statesFiles);
  const compiled = controls.map(compileControl);
  mkdirSync(out, { recursive: true });
  writeFileSync(path.join(out, "components.yaml"), componentsYaml(compiled));
  writeFileSync(path.join(out, "proof.md"), proofMarkdown(controls, compiled));
  writeFileSync(path.join(out, "census.md"), censusMarkdown(survey));
  writeFileSync(path.join(out, "measure.json"), JSON.stringify(measureSpec(id, survey, statesFiles, cfgs), null, 1) + "\n");
  writeFileSync(path.join(out, "values.json"), JSON.stringify(valuesOf(controls, compiled), null, 1) + "\n");
  let published = null;
  if (publishedFile) {
    const text = readFileSync(publishedFile, "utf8");
    const close = text.indexOf("\n---\n", 4);
    if (!text.startsWith("---\n") || close < 0) { console.error(`--published ${publishedFile}: no YAML frontmatter`); process.exit(2); }
    const yaml = createRequire(import.meta.url)("js-yaml");
    published = publishedNames(yaml.load(text.slice(4, close), { schema: yaml.JSON_SCHEMA }));
    writeFileSync(path.join(out, "names.json"), JSON.stringify(published, null, 1) + "\n");
  }
  const candidates = tokenCandidates(survey, controls, compiled, published, text);
  writeFileSync(path.join(out, "candidates.md"), candidatesMarkdown(candidates));
  writeFileSync(path.join(out, "candidates.json"), JSON.stringify(candidates, null, 1) + "\n");
  const n = compiled.filter((c) => c.emitted).length;
  console.log(`compiled ${n} component(s) of ${controls.length} measured control(s), ${candidates.colours.length} + ${candidates.declaredOnly.length} colour, ${candidates.type.length} type and ${candidates.radii.length} radius candidate(s) → ${out}`);
  for (const c of compiled) if (!c.emitted) console.log(`  prose only: ${c.key} (${c.reason})`);
}

if (import.meta.url === `file://${process.argv[1]}`) main();
