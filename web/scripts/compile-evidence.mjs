#!/usr/bin/env node
/**
 * Compile a reference's capture evidence into the parts of a DESIGN.md that are measurements, with no model in
 * the loop (docs/ROADMAP.md T1). The probe (probe-keyboard-states.mjs) already records every state change as
 * data; until now a writer re-read it and decided what to carry over, so two writers produced two documents from
 * one capture. This script makes that step a function of the evidence.
 *
 *   node scripts/compile-evidence.mjs <capture-folder>... [--out <dir>] [--id <id>]
 *
 * <capture-folder> holds survey.json and/or states.json (with its cfg.json), as written by the capture service
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
 * A control becomes a component when hover, pressed or focus was measured and changed something the brand
 * painted. Not counted: a change in descendant count, a change that persists after blur, and the browser's
 * `auto` focus ring. An unmeasured state is reported as unmeasured, never as "no change".
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
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
    // under pressed as well) and the default link colours, blue at rest and red while active.
    if (/outline/.test(c.prop ?? "") && / auto( |$)/.test(` ${c.to ?? ""}`)) return false;
    if (/fg$/.test(c.prop ?? "") && c.from === UA_LINK && c.to === UA_LINK_ACTIVE) return false;
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
  return changes.map((c) => `${c.set} ${c.prop}: ${c.from} -> ${c.to}`).join("; ");
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

export function compileControl(c) {
  const per = Object.fromEntries(STATES.map((s) => [s, brandChanges(c.states[s], s)]));
  const emitted = STATES.some((s) => per[s]?.length);
  const reason = emitted ? null
    : STATES.every((s) => per[s] === null) ? "every state unmeasured"
    : "no brand change in a measured state";
  const { identity: idn, rest } = c;
  /** @type {Record<string, string | number>} */
  const fields = { type: componentType(c.key, idn) };
  // The text a person reads is the label element, which can differ from the control that wraps it (a link whose
  // own colour is the browser default while its span carries the brand ink). Report the label's ink and font.
  const ink = rest?.label?.fg ?? rest?.fg, font = rest?.label?.font ?? idn.font;
  // Token fields take opaque colours only (the catalog gate reads them as 6-digit hex); a translucent rest
  // colour goes to `notes` for the writer to state in `use`.
  const notes = [];
  for (const [k, v] of [["bg", rest?.bg], ["fg", ink]]) {
    const c = parseColor(v);
    if (c?.alpha === 1) fields[k] = c.hex; else if (c && c.alpha > 0) notes.push(`${k} at rest is ${v}`);
  }
  const border = parseColor(/rgba?\([^)]*\)/.exec(rest?.border ?? "")?.[0]);
  if (border?.alpha === 1) fields.border = border.hex;
  const radius = /^(\d+(?:\.\d+)?)px$/.exec(idn.radius ?? "");
  if (radius) fields.radius = Number(radius[1]);
  if (fields.type === "card") fields.width = `${idn.rect.w}px`;
  fields.height = `${idn.rect.h}px`;
  if (idn.padding) fields.padding = idn.padding;
  if (font && !/^0px/.test(font)) fields.font = font.replace("/", " / "); // 0px: an image link with hidden text
  for (const s of STATES) if (per[s]?.length) fields[s] = describe(per[s]);
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
export function tokenCandidates(survey, controls = [], compiled = []) {
  const cz = survey?.census ?? {}, cc = cz.census ?? {};
  const colours = new Map(), sizes = new Map(), radii = new Map();
  const colour = (hex) => colours.get(hex) ?? colours.set(hex, { value: hex, painted: {}, interactive: 0, controls: [], declared: [] }).get(hex);
  const size = (font) => {
    const m = /^(\d+(?:\.\d+)?)px ?\/ ?(\d+)$/.exec(font ?? "");
    if (!m || Number(m[1]) === 0) return null; // 0px: an image link with hidden text
    const key = `${m[1]}/${m[2]}`;
    return sizes.get(key) ?? sizes.set(key, { size: Number(m[1]), weight: Number(m[2]), interactive: 0, lineHeights: new Map(), families: new Map(), controls: [] }).get(key);
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
  for (const [name, v] of Object.entries(cz.computedVars ?? {})) {
    const hex = declaredColor(v);
    if (hex) colour(hex).declared.push(name);
  }

  const weight = (c) => Object.values(c.painted).reduce((a, n) => a + n, 0) + c.interactive;
  const all = [...colours.values()].map((c) => ({ ...c, declared: c.declared.sort() }));
  const seen = all.filter((c) => weight(c) || c.controls.length)
    .sort((a, z) => weight(z) - weight(a) || z.controls.length - a.controls.length || a.value.localeCompare(z.value));
  const declaredOnly = all.filter((c) => !weight(c) && !c.controls.length).sort((a, z) => a.declared[0].localeCompare(z.declared[0]))
    .map((c) => ({ value: c.value, declared: c.declared }));
  const type = [...sizes.values()].sort((a, z) => z.interactive - a.interactive || z.controls.length - a.controls.length || z.size - a.size || z.weight - a.weight)
    .map(({ lineHeights, families, ...t }) => ({ ...t, lineHeight: mode(lineHeights), family: mode(families) }));
  const rad = [...radii.values()].sort((a, z) => z.interactive - a.interactive || z.controls.length - a.controls.length || a.value.localeCompare(z.value));
  return {
    colours: seen.slice(0, COLOUR_CAP), declaredOnly: declaredOnly.slice(0, DECLARED_CAP),
    type: type.slice(0, TYPE_CAP), radii: rad.slice(0, RADIUS_CAP),
    families: Object.fromEntries(["body", "h1", "button"].map((r) => [r, cz.fonts?.[r] ?? null])),
    notListed: { colours: Math.max(0, seen.length - COLOUR_CAP), declaredOnly: Math.max(0, declaredOnly.length - DECLARED_CAP),
      type: Math.max(0, type.length - TYPE_CAP), radii: Math.max(0, rad.length - RADIUS_CAP) },
  };
}

export function candidatesMarkdown(cand) {
  const few = (list, n = 4) => (list.length > n ? `${list.slice(0, n).join("; ")}; +${list.length - n}` : list.join("; ")) || "—";
  const more = (n, where) => (n ? [`${n} more not listed here; see ${where}.`] : []);
  const painted = (c) => [...Object.entries(c.painted).map(([k, n]) => `${k} ×${n}`), ...(c.interactive ? [`interactive ×${c.interactive}`] : [])].join(" · ") || "—";
  return [
    "# Token candidates", "",
    "Every colour, type size and corner radius this capture measured, and where it was seen. The order and the",
    "cut-offs are fixed by the script. Naming a token and saying what it is for is the writer's part.", "",
    `## Colours seen on the page (${cand.colours.length})`, "",
    "Element counts are from the survey's colour census; `interactive` counts the survey's rows (links, buttons,",
    "fields) that carry the colour; the controls column names the measured control and the state or rest field.", "",
    "| value | elements painted | measured controls | custom property |", "|---|---|---|---|",
    ...cand.colours.map((c) => `| \`${c.value}\` | ${painted(c)} | ${few(c.controls)} | ${few(c.declared.map((n) => `\`${n}\``), 3)} |`),
    ...more(cand.notListed.colours, "`survey.json`"), "",
    `## Colours declared only (${cand.declaredOnly.length})`, "",
    "A custom property computed on `:root` holds the value, and no surveyed element or measured control was painted",
    "with it. A declared colour is not evidence that the page uses it.", "",
    ...(cand.declaredOnly.length ? ["| value | custom property |", "|---|---|",
      ...cand.declaredOnly.map((c) => `| \`${c.value}\` | ${few(c.declared.map((n) => `\`${n}\``), 3)} |`)] : ["- none"]),
    ...more(cand.notListed.declaredOnly, "`census.computedVars` in `survey.json`"), "",
    `## Type sizes (${cand.type.length})`, "",
    "From the survey's rows and the measured controls. Not captured: the size of headings and running text that",
    "are not links or controls.", "",
    ...["body", "h1", "button"].map((r) => `- ${r} family: ${cand.families[r] ?? "not read"}`), "",
    "| size / weight | interactive elements | line height (most common) | family (most common) | measured controls |", "|---|---|---|---|---|",
    ...cand.type.map((t) => `| ${t.size}px / ${t.weight} | ${t.interactive} | ${t.lineHeight ?? "—"} | ${t.family ?? "—"} | ${few(t.controls)} |`),
    ...more(cand.notListed.type, "`rows` in `survey.json`"), "",
    `## Corner radii (${cand.radii.length})`, "",
    "| radius | interactive elements | measured controls |", "|---|---|---|",
    ...cand.radii.map((r) => `| ${r.value} | ${r.interactive} | ${few(r.controls)} |`),
    ...more(cand.notListed.radii, "`rows` in `survey.json`"), "",
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
  if (!args.length) { console.error("usage: compile-evidence.mjs <capture-folder>... [--out <dir>] [--id <id>]"); process.exit(2); }
  const read = (f) => JSON.parse(readFileSync(f, "utf8"));
  const folders = [...args].sort();
  let survey = null; const statesFiles = [], cfgs = [];
  for (const f of folders) {
    if (existsSync(path.join(f, "survey.json"))) survey = read(path.join(f, "survey.json"));
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
  const candidates = tokenCandidates(survey, controls, compiled);
  writeFileSync(path.join(out, "candidates.md"), candidatesMarkdown(candidates));
  writeFileSync(path.join(out, "candidates.json"), JSON.stringify(candidates, null, 1) + "\n");
  const n = compiled.filter((c) => c.emitted).length;
  console.log(`compiled ${n} component(s) of ${controls.length} measured control(s), ${candidates.colours.length} + ${candidates.declaredOnly.length} colour, ${candidates.type.length} type and ${candidates.radii.length} radius candidate(s) → ${out}`);
  for (const c of compiled) if (!c.emitted) console.log(`  prose only: ${c.key} (${c.reason})`);
}

if (import.meta.url === `file://${process.argv[1]}`) main();
