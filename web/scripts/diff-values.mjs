#!/usr/bin/env node
/**
 * Compare two values.json files written by compile-evidence.mjs: an earlier measurement and a later one of the
 * same pinned controls (docs/ROADMAP.md T1). A reference changes only where this reports a difference.
 *
 *   node scripts/diff-values.mjs <before/values.json> <after/values.json> [--json]
 *
 * Per control it compares identity (size, radius, padding, font, transition), rest colours, and each state.
 * A state that one side could not measure is reported as "unmeasured on one side", never as a change:
 * a missing measurement is not a different value. Exit code 0 when every compared field agrees, 1 otherwise.
 */
import { readFileSync } from "node:fs";

const FIELDS = { identity: ["tag", "text", "href", "w", "h", "radius", "padding", "font", "family", "letterSpacing", "transition"],
  rest: ["bg", "fg", "border", "shadow", "opacity"] };
const STATES = ["hover", "pressed", "focus"];
const canon = (changes) => JSON.stringify([...changes].map((c) => `${c.set}|${c.prop}|${c.from}|${c.to}`).sort());

export function diffValues(before, after) {
  const out = { controls: 0, compared: 0, same: 0, changed: [], unmeasured: [], missing: [] };
  for (const key of new Set([...Object.keys(before), ...Object.keys(after)])) {
    const a = before[key], b = after[key];
    if (!a || !b) { out.missing.push({ key, side: a ? "after" : "before" }); continue; }
    out.controls += 1;
    for (const [group, names] of Object.entries(FIELDS)) {
      for (const f of names) {
        out.compared += 1;
        if (JSON.stringify(a[group]?.[f]) === JSON.stringify(b[group]?.[f])) out.same += 1;
        else out.changed.push({ key, field: `${group}.${f}`, before: a[group]?.[f], after: b[group]?.[f] });
      }
    }
    for (const s of STATES) {
      const x = a.states?.[s], y = b.states?.[s];
      if (x === "unmeasured" || y === "unmeasured") {
        if (x !== y) out.unmeasured.push({ key, state: s, side: x === "unmeasured" ? "before" : "after" });
        continue;
      }
      out.compared += 1;
      if (canon(x ?? []) === canon(y ?? [])) out.same += 1;
      else out.changed.push({ key, field: `states.${s}`, before: x, after: y });
    }
  }
  return out;
}

function main() {
  const args = process.argv.slice(2).filter((a) => a !== "--json");
  if (args.length !== 2) { console.error("usage: diff-values.mjs <before/values.json> <after/values.json> [--json]"); process.exit(2); }
  const d = diffValues(JSON.parse(readFileSync(args[0], "utf8")), JSON.parse(readFileSync(args[1], "utf8")));
  if (process.argv.includes("--json")) console.log(JSON.stringify(d, null, 1));
  else {
    console.log(`${d.same} of ${d.compared} compared fields agree across ${d.controls} control(s)`);
    for (const c of d.changed) console.log(`  CHANGED ${c.key} ${c.field}: ${JSON.stringify(c.before)} -> ${JSON.stringify(c.after)}`);
    for (const u of d.unmeasured) console.log(`  unmeasured on one side: ${u.key} ${u.state} (${u.side})`);
    for (const m of d.missing) console.log(`  control missing ${m.side}: ${m.key}`);
  }
  process.exit(d.changed.length ? 1 : 0);
}

if (import.meta.url === `file://${process.argv[1]}`) main();
