#!/usr/bin/env node
/**
 * Read one /kana evaluation folder made by run-arm.sh and print the table the plan asks for.
 *
 *   node scripts/lang/kana-eval/report.mjs <out-dir> [--json]
 *
 * Per run: WARN and FYI from kana-check.mjs over the run's workspace, the rules that fired, and three facts read
 * straight from the source (the lang attribute, whether a Japanese face is named, the body line-height) so a clean
 * checker result can be looked at. A run whose log names a skill file outside its workspace is discarded. Medians
 * are over the runs kept, per prompt and arm, with and without JT-22 and JT-25 (the two rules the template makes
 * likely). With three runs a cell the numbers are descriptive.
 */
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const out = process.argv[2], asJson = process.argv.includes("--json");
if (!out) { console.error("usage: report.mjs <out-dir> [--json]"); process.exit(2); }
const checker = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "kana-check.mjs");
const median = (a) => { const s = [...a].sort((x, y) => x - y); return s.length ? (s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2) : null; };
const read = (f) => (existsSync(f) ? readFileSync(f, "utf8") : "");
const TEMPLATE_RULES = new Set(["JT-22", "JT-25"]);

const runs = [];
for (const rid of readdirSync(path.join(out, "runs")).sort()) {
  const [prompt, arm, rep] = rid.split("-"), ws = path.join(out, "runs", rid);
  const log = read(path.join(out, "logs", `${rid}.jsonl`));
  // A skill read from the user's home, not from the workspace, means the run was not isolated.
  const leaked = /\/\.agents\/skills\//.test(log.replaceAll(ws, "")) || /\.claude\/skills\//.test(log.replaceAll(ws, ""));
  const finished = /"type":"turn\.completed"/.test(log);
  const r = JSON.parse(execFileSync("node", [checker, "--json", path.join(ws, "app")], { encoding: "utf8", maxBuffer: 16 << 20 }));
  const rules = {};
  for (const f of r.findings) (rules[f.rule ?? f.id] ??= { level: f.level ?? f.severity, n: 0 }).n += 1;
  const src = ["app/layout.tsx", "app/page.tsx", "app/globals.css"].map((f) => read(path.join(ws, f))).join("\n");
  const facts = {
    lang: /<html[^>]*\blang=["'{]+([\w-]+)/.exec(src)?.[1] ?? null,
    japaneseFace: /Noto[_ ]Sans[_ ]JP|Noto[_ ]Serif[_ ]JP|Hiragino|Yu ?Gothic|Meiryo|BIZ[_ ]UD|M[_ ]PLUS|Zen[_ ]Kaku|LINE[_ ]Seed/i.exec(src)?.[0] ?? null,
    leading: [...new Set([...src.matchAll(/leading-(\[[^\]]+\]|[\w.]+)|line-height:\s*([\d.]+\w*)/g)].map((m) => m[1] ?? m[2]))].slice(0, 8),
  };
  const warn = r.findings.filter((f) => (f.level ?? f.severity) === "WARN"), id = (f) => f.rule ?? f.id;
  runs.push({ rid, prompt, arm, rep, kept: finished && !leaked, finished, leaked, ja: r.ja, WARN: r.summary.WARN, FYI: r.summary.FYI,
    WARN_withoutTemplateRules: warn.filter((f) => !TEMPLATE_RULES.has(id(f))).length, rules, facts });
}
const cells = {};
for (const r of runs.filter((x) => x.kept)) (cells[`${r.prompt}-${r.arm}`] ??= []).push(r);
const table = Object.entries(cells).map(([cell, rs]) => ({ cell, runs: rs.length,
  WARN: { median: median(rs.map((r) => r.WARN)), min: Math.min(...rs.map((r) => r.WARN)), max: Math.max(...rs.map((r) => r.WARN)) },
  WARN_withoutTemplateRules: { median: median(rs.map((r) => r.WARN_withoutTemplateRules)) },
  FYI: { median: median(rs.map((r) => r.FYI)) },
  ruleHits: Object.fromEntries([...new Set(rs.flatMap((r) => Object.keys(r.rules)))].sort().map((k) => [k, `${rs.filter((r) => r.rules[k]).length}/${rs.length}`])) }));
if (asJson) { console.log(JSON.stringify({ runs, table }, null, 1)); process.exit(0); }
for (const r of runs) console.log(`${r.rid}  ${r.kept ? "kept" : r.leaked ? "DISCARDED (a skill from outside the workspace)" : "DISCARDED (did not finish)"}  WARN ${r.WARN} (${r.WARN_withoutTemplateRules} without JT-22/25)  FYI ${r.FYI}  ${Object.entries(r.rules).map(([k, v]) => `${k}×${v.n}`).join(" ") || "—"}  | lang=${r.facts.lang} face=${r.facts.japaneseFace ?? "none named"} leading=${r.facts.leading.join(",") || "—"}`);
console.log("");
for (const t of table) console.log(`${t.cell}: ${t.runs} run(s), WARN median ${t.WARN.median} (${t.WARN.min}–${t.WARN.max}), without JT-22/25 ${t.WARN_withoutTemplateRules.median}, FYI median ${t.FYI.median}; rules ${JSON.stringify(t.ruleHits)}`);
