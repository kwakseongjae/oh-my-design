#!/usr/bin/env node
// Write the font facts and measured substitutes into the canonical references (spec/design-md-v3.md
// §6.2–6.4, §8.2), then refresh each touched sidecar's lint record, check §10 conformance and copy
// the two files to the design-md/ mirror (the catalog-integrity test requires that mirror to be
// byte-identical for every reference).
//
//   node scripts/fonts/apply.mjs [<reference id> ...]        # default: every id in FACES / MEASURED
//   node scripts/fonts/apply.mjs --check [<reference id> ...] # exit 1 when applying would change a file
//
// Edits are additive and confined to: frontmatter `fonts.faces` (new faces, or `substitutes` on an
// existing face), the §6.4 `fontFamily` stacks listed in STACKS, and sidecar `fonts` + `lint`. Body
// prose (the Typography "Brand face, substitute, safe default" H3) is written by hand and only read
// here. The frontmatter is re-dumped with the writer's own options, so untouched keys stay
// byte-identical; the sidecar `fonts` key sits where the v3 writer puts it (after `lint`).
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { runLint, lintRecord } from "../design-md-v3/convert-legacy.mjs";
import { checkV3 } from "../../web/scripts/lib/design-md-v3-check.mjs";
import { FACES, MEASURED, STACKS } from "./faces.mjs";
import { CANDIDATES } from "./candidates.mjs";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const yaml = createRequire(path.join(ROOT, "web/package.json"))("js-yaml");
const REFS = path.join(ROOT, "web/references");
const MIRROR = path.join(ROOT, "design-md");
const RECORDS = path.join(ROOT, "docs/research/2026-10-20-r11/fonts");
const FACE_ORDER = ["name", "scripts", "evidence", "surface", "source", "licence", "distribution", "note", "substitutes"];

function split(text) {
  if (!text.startsWith("---\n")) throw new Error("no frontmatter at byte 0");
  const end = text.indexOf("\n---\n", 4);
  return { fm: yaml.load(text.slice(4, end + 1), { schema: yaml.JSON_SCHEMA }), body: text.slice(end + 5) };
}

const dump = (fm) => yaml.dump(fm, { lineWidth: -1, noRefs: true });

function orderedFace(face) {
  const out = {};
  for (const k of FACE_ORDER) if (face[k] !== undefined) out[k] = face[k];
  for (const k of Object.keys(face)) if (!(k in out)) out[k] = face[k];
  return out;
}

/** Choice-record sidecar entries for one face: { script -> record }, Latin first. */
function measuredSubstitutes(target) {
  const choice = JSON.parse(fs.readFileSync(path.join(RECORDS, `${target}.choice.json`), "utf8"));
  const entries = Object.entries(choice.sidecar);
  entries.sort(([a], [b]) => (a === "latin" ? -1 : b === "latin" ? 1 : a.localeCompare(b)));
  return Object.fromEntries(entries);
}

function sidecarEntry(rec, cssUrl) {
  return { family: rec.family, provider: rec.provider, label: rec.label, ...(cssUrl ? { cssUrl } : {}), metrics: rec.metrics };
}

export function applyReference(id) {
  const dir = path.join(REFS, id);
  const designPath = path.join(dir, "DESIGN.md");
  const sidecarPath = path.join(dir, "reference.json");
  const before = fs.readFileSync(designPath, "utf8");
  const sidecarBefore = fs.readFileSync(sidecarPath, "utf8");
  const { fm, body } = split(before);
  const sidecar = JSON.parse(sidecarBefore);

  const fonts = fm.fonts ?? {};
  const faces = { ...(fonts.faces ?? {}) };
  for (const [family, face] of Object.entries(FACES[id] ?? {})) faces[family] = orderedFace({ ...face, ...(faces[family] ?? {}) });

  const measured = MEASURED[id] ?? {};
  const sidecarFonts = { ...(sidecar.fonts ?? {}) };
  const substitutes = { ...(sidecarFonts.substitutes ?? {}) };
  for (const [family, target] of Object.entries(measured)) {
    if (!faces[family]) throw new Error(`${id}: measured face ${family} is not in fonts.faces`);
    const recs = measuredSubstitutes(target);
    faces[family] = orderedFace({
      ...faces[family],
      substitutes: Object.fromEntries(Object.entries(recs).map(([s, r]) => [s, { family: r.family, provider: r.provider, label: r.label }])),
    });
    substitutes[family] = Object.fromEntries(Object.entries(recs).map(([s, r]) => [s, sidecarEntry(r, CANDIDATES.find((c) => c.family === r.family)?.cssUrl)]));
  }
  if (Object.keys(faces).length) {
    // `fonts` keeps its key order: roles, faces, safeDefaults (spec §6.2).
    const next = {};
    if (fonts.roles) next.roles = fonts.roles;
    next.faces = faces;
    for (const [k, v] of Object.entries(fonts)) if (!(k in next)) next[k] = v;
    fm.fonts = next;
  }

  const stack = STACKS[id];
  if (stack) {
    const subs = faces[stack.face]?.substitutes ?? {};
    const order = Object.keys(subs).sort((a, b) => (a === "latin" ? -1 : b === "latin" ? 1 : a.localeCompare(b)));
    const families = [...new Set(order.map((s) => subs[s].family))];
    const to = [stack.face, ...families, stack.generic].join(", ");
    for (const role of Object.values(fm.typography ?? {})) if (role?.fontFamily === stack.from || role?.fontFamily === to) role.fontFamily = to;
  }

  const text = `---\n${dump(fm)}---\n${body}`;
  if (Object.keys(substitutes).length) sidecarFonts.substitutes = substitutes;
  const lint = runLint(text);
  // Sidecar key order as the v3 writer produces it: … verification_v2, lint, fonts, migration.
  const { migration, fonts: _f, lint: _l, ...rest } = sidecar;
  const nextSidecar = { ...rest, lint: lintRecord(lint), ...(Object.keys(sidecarFonts).length ? { fonts: sidecarFonts } : {}), ...(migration ? { migration } : {}) };
  const sidecarJson = `${JSON.stringify(nextSidecar, null, 2)}\n`;
  const problems = checkV3({ text, sidecar: nextSidecar, lint });
  return { id, dir, designPath, sidecarPath, text, sidecarJson, changed: text !== before || sidecarJson !== sidecarBefore, problems, lint: lint.summary };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const check = args.includes("--check");
  const ids = args.filter((a) => !a.startsWith("--"));
  const list = ids.length ? ids : [...new Set([...Object.keys(FACES), ...Object.keys(MEASURED)])].sort();
  let failed = 0;
  for (const id of list) {
    const r = applyReference(id);
    if (r.problems.length) {
      failed++;
      console.log(`${id}: NOT WRITTEN — ${r.problems.join("; ")}`);
      continue;
    }
    if (check) {
      const mirrorSame = ["DESIGN.md", "reference.json"].every((f) => fs.existsSync(path.join(MIRROR, id, f)) && fs.readFileSync(path.join(MIRROR, id, f), "utf8") === fs.readFileSync(path.join(r.dir, f), "utf8"));
      if (r.changed || !mirrorSame) failed++;
      console.log(`${id}: ${r.changed ? "would change" : "up to date"}${mirrorSame ? "" : " (design-md mirror differs)"}`);
      continue;
    }
    fs.writeFileSync(r.designPath, r.text);
    fs.writeFileSync(r.sidecarPath, r.sidecarJson);
    fs.mkdirSync(path.join(MIRROR, id), { recursive: true });
    fs.copyFileSync(r.designPath, path.join(MIRROR, id, "DESIGN.md"));
    fs.copyFileSync(r.sidecarPath, path.join(MIRROR, id, "reference.json"));
    console.log(`${id}: ${r.changed ? "written" : "unchanged"} (lint ${r.lint.errors} errors, ${r.lint.warnings} warnings), mirrored`);
  }
  process.exit(failed ? 1 : 0);
}
