#!/usr/bin/env node
/**
 * compare-component-names.mjs — of the components a host publishes, how many
 * does our reference name at all?
 *
 * `probe-design-system-index.mjs` answers "is there an index and how big is it".
 * That is a volume measure, and volume was never the defect. The defect found by
 * hand on toss, pega and krds was name-level: a §4 that names a handful of
 * components while reading as though it covered the system. This closes that
 * gap by comparing the last path segment of every published component URL
 * against the reference's full text.
 *
 * Reads the `--dump-urls` output of the probe. Writes nothing.
 *
 * ## Why the number it prints is an upper bound on coverage
 *
 * Matching is substring-on-normalised-text, so a reference that says "box
 * button" is credited for a published `button`, and one that says "Button" is
 * credited for `button-group`. It over-credits by construction. A reference
 * scoring 30% here names at most 30% of what its host publishes, and probably
 * fewer. That direction is the useful one: it cannot manufacture a gap.
 *
 * Two classes of published path are excluded rather than counted as missing,
 * because calling them gaps would be wrong:
 *
 *  - **Opaque slugs.** Skyscanner publishes `web-sEshz9Z5`, KRDS publishes
 *    `component_04_07`. A reference cannot "name" a CMS id, and counting 307 of
 *    them as undocumented components put skyscanner at 0% in the first run.
 *  - **Documentation pages.** `overview`, `guidelines`, `android`, `ios` are
 *    real pages under a component path that are not components. These are *not*
 *    filtered — there is no reliable way to tell them from components by name —
 *    so a few per host stay in the missing column. pega's three are exactly
 *    this, which is why its 42/45 reads as complete rather than as a gap.
 *
 * The validation that this measures the intended thing: pega, whose 42-name
 * roster was written by hand on 2026-09-18, scores 42 named of 45 usable.
 * yeogiotte, measured complete by hand, scores 4 of 6 with both misses being
 * sub-pages of a component it does name.
 *
 * usage:
 *   node scripts/compare-component-names.mjs --urls <dir> [--host <id>] [--json <out>]
 */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { readReferenceSource } from "./lib/reference-source.mjs";

const WEB = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const REFS = join(WEB, "references");

const argv = process.argv.slice(2);
const urlsDir = argv.indexOf("--urls") >= 0 ? argv[argv.indexOf("--urls") + 1] : null;
const onlyHost = argv.indexOf("--host") >= 0 ? argv[argv.indexOf("--host") + 1] : null;
const jsonAt = argv.indexOf("--json") >= 0 ? argv[argv.indexOf("--json") + 1] : null;
if (!urlsDir) {
  console.error("usage: compare-component-names.mjs --urls <dir> [--host <id>] [--json <out>]");
  process.exit(2);
}

/** Trailing random token (`web-sEshz9Z5`) or a numbered id (`component_04_07`). */
const OPAQUE = /-[A-Za-z0-9]{6,}$|^[a-z_]*\d+_\d+$/;

const normalise = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, "");

/** The component a URL is about, as its author named it in the path. */
function nameOf(url) {
  try {
    return new URL(url).pathname.replace(/\/$/, "").split("/").pop()
      .replace(/\.(html?|md|json)$/i, "");
  } catch {
    return url.split("/").pop();
  }
}

const results = [];
for (const file of readdirSync(urlsDir).sort()) {
  if (!file.endsWith(".txt")) continue;
  const id = file.replace(/\.txt$/, "");
  if (onlyHost && id !== onlyHost) continue;

  const urls = readFileSync(join(urlsDir, file), "utf8").trim().split("\n").filter(Boolean);
  const all = [...new Set(urls.map(nameOf).filter((n) => n && n.length > 1 && !/^\d+$/.test(n)))];
  const opaque = all.filter((n) => OPAQUE.test(n));
  const usable = all.filter((n) => !OPAQUE.test(n));
  if (usable.length === 0) continue;

  const text = normalise(readReferenceSource(join(REFS, id)).markdown);
  const missing = usable.filter((n) => !text.includes(normalise(n)));
  results.push({ id, usable: usable.length, named: usable.length - missing.length, missing, opaque: opaque.length });
}

results.sort((a, b) => a.named / a.usable - b.named / b.usable);
console.log("  id                 usable  named  missing  opaque   coverage  first missing");
for (const r of results) {
  console.log(
    `  ${r.id.padEnd(18)} ${String(r.usable).padStart(6)} ${String(r.named).padStart(6)}`
    + ` ${String(r.missing.length).padStart(8)} ${String(r.opaque).padStart(7)}`
    + ` ${`${(100 * r.named / r.usable).toFixed(0)}%`.padStart(10)}   ${r.missing.slice(0, 4).join(", ").slice(0, 40)}`,
  );
}
const usable = results.reduce((sum, r) => sum + r.usable, 0);
const named = results.reduce((sum, r) => sum + r.named, 0);
console.log(`\n[names] ${results.length} host(s) · ${named}/${usable} published component names appear in their`
  + ` reference (${(100 * named / usable).toFixed(1)}%, an upper bound — matching is substring)`);

if (jsonAt) {
  writeFileSync(jsonAt, `${JSON.stringify(results, null, 2)}\n`);
  console.log(`[names] wrote ${jsonAt}`);
}
