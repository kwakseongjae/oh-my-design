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
  return (state.changed ?? []).filter((c) => {
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

function stateCell(per) {
  if (per === null) return "UNMEASURED";
  if (!per.length) return "no brand change";
  return per.map((c) => `${c.set} ${c.prop}: \`${c.from}\` → \`${c.to}\``).join("<br>");
}

export function proofMarkdown(controls, compiled) {
  const rows = controls.map((c, i) => {
    const idn = c.identity;
    const id = `\`<${idn.tag}>\` ${JSON.stringify((idn.text ?? "").slice(0, 40))} · ${idn.rect.w}×${idn.rect.h} · radius ${idn.radius} · ${idn.font}`;
    const rest = `bg \`${c.rest?.bg}\` · fg \`${c.rest?.fg}\` · border \`${c.rest?.border}\``;
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
  const n = compiled.filter((c) => c.emitted).length;
  console.log(`compiled ${n} component(s) of ${controls.length} measured control(s) → ${out}`);
  for (const c of compiled) if (!c.emitted) console.log(`  prose only: ${c.key} (${c.reason})`);
}

if (import.meta.url === `file://${process.argv[1]}`) main();
