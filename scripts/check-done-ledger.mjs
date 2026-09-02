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

import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const MIGRATED = join(ROOT, "docs", "design-md-weight", "migrated");
const LEDGER = join(MIGRATED, "DONE.txt");
// 마라톤(무인 웨이브)이 사람 판정으로 넘긴 브랜드는 DEFERRED.txt에 사유와 함께 적힌다.
// 산출물은 있지만 양 레인 통과가 아니므로 DONE이 아니고, "기록 없는 디렉터리"도 아니다.
const DEFERRED = join(MIGRATED, "DEFERRED.txt");
const deferred = new Set(
  (existsSync(DEFERRED) ? readFileSync(DEFERRED, "utf8") : "")
    .split("\n").map((l) => l.trim().split(/\s+/)[0]).filter((l) => l && !l.startsWith("#")),
);

// A directory alone does not mean a migration happened. `migrate-reference.mjs
// --print-prompt` creates the brand directory while only rendering a prompt, so
// preparing the next wave's prompts used to make five unmigrated brands look
// finished — and --fix wrote them into DONE.txt. The artifact is the evidence.
const migrated = readdirSync(MIGRATED, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .filter((e) => existsSync(join(MIGRATED, e.name, "DESIGN.md")))
  .map((e) => e.name)
  .sort();

const body = readFileSync(LEDGER, "utf8");
const recorded = new Set(
  body.split("\n").map((l) => l.trim()).filter((l) => l && !l.startsWith("#")),
);

const missing = migrated.filter((id) => !recorded.has(id) && !deferred.has(id));

if (missing.length && process.argv.includes("--fix")) {
  writeFileSync(LEDGER, `${body.replace(/\n+$/, "")}\n${missing.join("\n")}\n`, "utf8");
}

const fixed = missing.length && process.argv.includes("--fix");
console.log(JSON.stringify({
  migrated: migrated.length,
  recorded: recorded.size,
  deferred: deferred.size,
  missing: fixed ? [] : missing,
  ...(fixed ? { appended: missing } : {}),
}, null, 1));

process.exit(missing.length && !fixed ? 1 : 0);
