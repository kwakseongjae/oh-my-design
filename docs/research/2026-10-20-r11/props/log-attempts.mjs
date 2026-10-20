// Parse codex-queue.log into one row per Codex call, for PROVENANCE.md.
//
//   node docs/research/2026-10-20-r11/props/log-attempts.mjs [--md]
//
// Row: time, file, agent model, Codex session id, generated image (file name inside
// ~/.codex/generated_images/<session>/), result (OK / FAIL / MODERATION / STOP).
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const lines = readFileSync(join(HERE, "codex-queue.log"), "utf8").split("\n");
const rows = [];
let cur = null;
for (const line of lines) {
  let m;
  if ((m = line.match(/^=== (\d\d:\d\d:\d\d) (\S+\.png)$/))) {
    cur = { time: m[1], file: m[2], model: "", session: "", generated: "", result: "" };
    rows.push(cur);
  } else if (!cur) continue;
  else if ((m = line.match(/^model: (\S+)/))) cur.model = m[1];
  else if ((m = line.match(/^session id: (\S+)/))) cur.session = m[1];
  else if ((m = line.match(/generated_images\/[^/\s]+\/([^\s'"]+\.png)/)) && !cur.generated) cur.generated = m[1];
  else if ((m = line.match(/^(OK|FAIL|MODERATION|STOP)\b/))) cur.result = cur.result ? `${cur.result}+${m[1]}` : m[1];
}
if (process.argv.includes("--md")) {
  console.log("| time | file | model | Codex session | generated image | result |");
  console.log("|---|---|---|---|---|---|");
  for (const r of rows)
    console.log(`| ${r.time} | ${r.file} | ${r.model} | \`${r.session}\` | ${r.generated ? `\`${r.generated}\`` : "–"} | ${r.result} |`);
} else console.log(JSON.stringify(rows, null, 2));
