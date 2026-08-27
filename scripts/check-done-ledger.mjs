/**
 * Every migrated brand must be recorded in migrated/DONE.txt.
 *
 * DONE.txt is what the wave runner reads to refuse ids that already passed
 * both lanes. Its header says to append only when a wave closes — which left
 * the append to a person, and for six waves nobody did it: 31 ids were missing
 * when this check was written, waves 23 through 29. A runner reading that file
 * would have re-migrated finished work.
 *
 * The check is one-directional on purpose. A directory under migrated/ without
 * a DONE.txt line is a wave that closed without recording itself. A DONE.txt
 * line without a directory is not an error — golden samples (29cm, karrot,
 * musinsa) are recorded there and live elsewhere.
 *
 *   node scripts/check-done-ledger.mjs           # exit 1 when ids are missing
 *   node scripts/check-done-ledger.mjs --fix     # append them, then report
 */

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const MIGRATED = join(ROOT, "docs", "design-md-weight", "migrated");
const LEDGER = join(MIGRATED, "DONE.txt");

const migrated = readdirSync(MIGRATED, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name)
  .sort();

const body = readFileSync(LEDGER, "utf8");
const recorded = new Set(
  body.split("\n").map((l) => l.trim()).filter((l) => l && !l.startsWith("#")),
);

const missing = migrated.filter((id) => !recorded.has(id));

if (missing.length && process.argv.includes("--fix")) {
  writeFileSync(LEDGER, `${body.replace(/\n+$/, "")}\n${missing.join("\n")}\n`, "utf8");
}

const fixed = missing.length && process.argv.includes("--fix");
console.log(JSON.stringify({
  migrated: migrated.length,
  recorded: recorded.size,
  missing: fixed ? [] : missing,
  ...(fixed ? { appended: missing } : {}),
}, null, 1));

process.exit(missing.length && !fixed ? 1 : 0);
