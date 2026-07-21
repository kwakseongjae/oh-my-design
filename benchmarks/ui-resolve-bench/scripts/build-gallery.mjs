#!/usr/bin/env node
import { copyFileSync, existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { join, relative, resolve, sep } from "node:path";
import { benchRoot, parseArgs, readJson, sha256, writeJson } from "./_lib.mjs";

const args = parseArgs();
const runsRoot = args.get("runs") ? resolve(String(args.get("runs"))) : null;
const out = args.get("out") ? resolve(String(args.get("out"))) : null;
const revealOut = args.get("reveal-out") ? resolve(String(args.get("reveal-out"))) : null;
const reviewer = args.get("reviewer") ? String(args.get("reviewer")).trim() : null;
const salt = args.get("blind-salt") ? String(args.get("blind-salt")) : null;
if (!runsRoot || !out || !revealOut || !reviewer || !salt) {
  console.error(
    "usage: build-gallery.mjs --runs <parent-dir> --out <new-dir> --reveal-out <outside-file.json> " +
    "--reviewer <opaque-reviewer-id> --blind-salt <secret-at-least-16-characters>",
  );
  process.exit(2);
}
if (salt.length < 16) {
  throw new Error("--blind-salt must be a non-public secret with at least 16 characters");
}

const relativeReveal = relative(out, revealOut);
if (relativeReveal === "" || (!relativeReveal.startsWith(`..${sep}`) && relativeReveal !== "..")) {
  throw new Error("--reveal-out must be outside the gallery directory");
}
if (existsSync(out)) throw new Error(`refusing to overwrite gallery: ${out}`);
if (existsSync(revealOut)) throw new Error(`refusing to overwrite reveal map: ${revealOut}`);

const reviewerHash = sha256(`${salt}:reviewer:${reviewer}`).slice(0, 16);
const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#39;");
const candidates = [];
const usedOpaqueIds = new Set();
for (const directory of readdirSync(runsRoot).sort()) {
  const benchmarkDir = join(runsRoot, directory, ".benchmark");
  const manifestPath = join(benchmarkDir, "manifest.json");
  const runPath = join(benchmarkDir, "run-result.json");
  const scorePath = join(benchmarkDir, "score.json");
  const desktopPath = join(benchmarkDir, "screenshots", "desktop.png");
  const mobilePath = join(benchmarkDir, "screenshots", "mobile.png");
  if (![manifestPath, runPath, scorePath, desktopPath, mobilePath].every(existsSync)) continue;
  const manifest = readJson(manifestPath);
  const run = readJson(runPath);
  if (run.process?.timed_out || run.process?.exit_code !== 0) continue;

  const opaque = `candidate-${sha256(`${salt}:${directory}:${manifest.variant.id}`).slice(0, 10)}`;
  if (usedOpaqueIds.has(opaque)) throw new Error(`opaque candidate collision: ${opaque}`);
  usedOpaqueIds.add(opaque);
  candidates.push({
    opaque,
    directory,
    task_id: manifest.task.id,
    task_version: manifest.task.version,
    core_prompt_sha256: manifest.task.core_prompt_sha256,
    variant_id: manifest.variant.id,
    label: manifest.variant.label,
    desktopPath,
    mobilePath,
  });
}
if (candidates.length < 2) {
  throw new Error(`pairwise review requires at least two completed candidates; found ${candidates.length}`);
}
const taskIds = [...new Set(candidates.map((candidate) => candidate.task_id))];
if (taskIds.length !== 1) {
  throw new Error(`pairwise review requires exactly one shared task; found ${taskIds.join(", ")}`);
}
const taskVersions = [...new Set(candidates.map((candidate) => candidate.task_version))];
if (taskVersions.length !== 1 || !taskVersions[0]) {
  throw new Error(`pairwise review requires exactly one shared task version; found ${taskVersions.join(", ") || "missing"}`);
}
const corePromptHashes = [...new Set(candidates.map((candidate) => candidate.core_prompt_sha256))];
if (corePromptHashes.length !== 1 || !corePromptHashes[0]) {
  throw new Error(`pairwise review requires exactly one shared core prompt hash; found ${corePromptHashes.join(", ") || "missing"}`);
}
const task = readJson(join(benchRoot, "tasks", taskIds[0], "task.json"));
if (task.version !== taskVersions[0]) {
  throw new Error(`task version mismatch with canonical task: ${taskVersions[0]} != ${task.version}`);
}
if (!task.review_brief?.trim()) {
  throw new Error(`task ${task.id} must define a neutral review_brief`);
}

mkdirSync(join(out, "assets"), { recursive: true });
for (const candidate of candidates) {
  copyFileSync(candidate.desktopPath, join(out, "assets", `${candidate.opaque}-desktop.png`));
  copyFileSync(candidate.mobilePath, join(out, "assets", `${candidate.opaque}-mobile.png`));
}

const basePairs = [];
for (let left = 0; left < candidates.length; left += 1) {
  for (let right = left + 1; right < candidates.length; right += 1) {
    const pair = [candidates[left].opaque, candidates[right].opaque];
    const sideHash = sha256(`${salt}:${reviewer}:sides:${pair.join(":")}`);
    const [a, b] = Number.parseInt(sideHash[0], 16) % 2 === 0 ? pair : pair.reverse();
    basePairs.push({
      assignment_id: `assignment-${sha256(`${salt}:${reviewer}:pair:${pair.slice().sort().join(":")}`).slice(0, 12)}`,
      a,
      b,
      reversed_duplicate: false,
      reversal_of: null,
    });
  }
}
basePairs.sort((left, right) => (
  sha256(`${salt}:${reviewer}:order:${left.assignment_id}`)
    .localeCompare(sha256(`${salt}:${reviewer}:order:${right.assignment_id}`))
));

const repeatedSource = basePairs[0];
const reversedDuplicate = {
  assignment_id: `assignment-${sha256(`${salt}:${reviewer}:reversed:${repeatedSource.assignment_id}`).slice(0, 12)}`,
  a: repeatedSource.b,
  b: repeatedSource.a,
  reversed_duplicate: true,
  reversal_of: repeatedSource.assignment_id,
};
const assignments = [...basePairs, reversedDuplicate].sort((left, right) => (
  sha256(`${salt}:${reviewer}:final-order:${left.assignment_id}`)
    .localeCompare(sha256(`${salt}:${reviewer}:final-order:${right.assignment_id}`))
));

const blindAssignment = {
  schema_version: "0.1",
  reviewer_hash: reviewerHash,
  task: {
    id: task.id,
    version: task.version,
    core_prompt_sha256: corePromptHashes[0],
    review_brief: task.review_brief,
  },
  assignment_count: assignments.length,
  assignments: assignments.map(({ assignment_id, a, b }) => ({ assignment_id, a, b })),
};
writeJson(join(out, "assignment.json"), blindAssignment);
writeJson(revealOut, {
  schema_version: "0.1",
  warning: "Keep this file separate from blind reviewers until their verdicts are locked.",
  salt_sha256: sha256(salt),
  reviewer_hash: reviewerHash,
  task: {
    id: task.id,
    version: task.version,
    core_prompt_sha256: corePromptHashes[0],
  },
  candidates: Object.fromEntries(candidates.map((candidate) => [candidate.opaque, {
    directory: candidate.directory,
    variant_id: candidate.variant_id,
    label: candidate.label,
  }])),
  assignments: Object.fromEntries(assignments.map((assignment) => [assignment.assignment_id, {
    a: assignment.a,
    b: assignment.b,
    reversed_duplicate: assignment.reversed_duplicate,
    reversal_of: assignment.reversal_of,
  }])),
});

const viewport = (candidate, side, view) => `
  <figure>
    <figcaption>${side} · ${view[0].toUpperCase()}${view.slice(1)}</figcaption>
    <div class="canvas canvas-${view}"><img src="assets/${candidate}-${view}.png" alt="Anonymous option ${side}, ${view} viewport" loading="lazy" /></div>
  </figure>`;
const cards = assignments.map((assignment, index) => `
  <fieldset class="comparison" data-assignment="${assignment.assignment_id}">
    <legend><span>${String(index + 1).padStart(2, "0")}</span> Which result would you ship?</legend>
    <div class="options">
      <section aria-label="Option A">${viewport(assignment.a, "A", "desktop")}${viewport(assignment.a, "A", "mobile")}</section>
      <section aria-label="Option B">${viewport(assignment.b, "B", "desktop")}${viewport(assignment.b, "B", "mobile")}</section>
    </div>
    <div class="verdicts" role="radiogroup" aria-label="Verdict for comparison ${index + 1}">
      <label><input type="radio" name="verdict-${assignment.assignment_id}" value="a" /> Ship A</label>
      <label><input type="radio" name="verdict-${assignment.assignment_id}" value="b" /> Ship B</label>
      <label><input type="radio" name="verdict-${assignment.assignment_id}" value="tie" /> Tie</label>
      <label><input type="radio" name="verdict-${assignment.assignment_id}" value="both_fail" /> Both fail</label>
    </div>
  </fieldset>`).join("\n");

const publicAssignments = assignments.map(({ assignment_id }) => ({ assignment_id }));
const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" />
<title>UI-Resolve Bench · pairwise blind review</title>
<style>
*{box-sizing:border-box}body{margin:0;background:#fafafa;color:#111;font:15px/1.55 Arial,sans-serif}header,main,footer{width:min(1440px,calc(100% - 40px));margin:auto}header{padding:64px 0 28px;border-bottom:1px solid #ddd}h1{font:400 clamp(38px,6vw,72px)/.98 Georgia,serif;max-width:1000px;margin:0 0 18px}header p{max-width:760px;color:#5e5e68}.comparison{min-width:0;margin:0;padding:52px 0;border:0;border-bottom:1px solid #ddd}.comparison legend{width:100%;font:600 22px/1.3 Arial,sans-serif;margin-bottom:20px}.comparison legend span{font:12px monospace;color:#5546ff;margin-right:12px}.options{display:grid;grid-template-columns:1fr 1fr;gap:24px}.options section{min-width:0;display:grid;grid-template-columns:minmax(0,1fr) minmax(150px,.32fr);gap:12px}figure{min-width:0;margin:0}figcaption{font:12px monospace;color:#5e5e68;margin-bottom:7px}.canvas{height:min(68vh,760px);overflow:auto;background:#fff;border:1px solid #d5d5db;border-radius:12px}.canvas-mobile{height:min(68vh,760px)}.canvas img{display:block;width:100%;height:auto}.verdicts{display:flex;flex-wrap:wrap;gap:10px;margin-top:18px}.verdicts label{display:flex;align-items:center;gap:7px;background:#fff;border:1px solid #d5d5db;border-radius:999px;padding:9px 14px;cursor:pointer}footer{padding:32px 0 72px}button{border:0;border-radius:10px;background:#5546ff;color:#fff;font:600 15px Arial,sans-serif;padding:12px 18px;cursor:pointer}#export-status{margin-left:12px;color:#5e5e68}@media(max-width:900px){header,main,footer{width:min(100% - 24px,1440px)}.options{grid-template-columns:1fr}.options section{grid-template-columns:minmax(0,1fr) minmax(110px,.3fr)}.canvas{height:54vh}}
</style></head><body><header><p>UI-RESOLVE BENCH · PAIRWISE BLIND REVIEW</p><h1>Judge the task, not the tool name.</h1><p><strong>Task:</strong> ${escapeHtml(task.review_brief)}</p><p>Choose the result you would ship for this task. Tool identities, automatic scores, and repeat-pair markers stay hidden until all judgments are exported and locked. Ties and “both fail” are valid outcomes.</p></header><main>${cards}</main>
<footer><button type="button" id="export">Export judgments</button><span id="export-status" role="status" aria-live="polite"></span></footer>
<script>
const assignment = ${JSON.stringify({
  schema_version: "0.1",
  reviewer_hash: reviewerHash,
  task: { id: task.id, version: task.version, core_prompt_sha256: corePromptHashes[0] },
  assignments: publicAssignments,
})};
document.getElementById('export').addEventListener('click',()=>{
  const judgments=[];
  for(const item of assignment.assignments){
    const fieldset=document.querySelector('[data-assignment="'+item.assignment_id+'"]');
    const selected=fieldset.querySelector('input[type="radio"]:checked');
    if(!selected){fieldset.scrollIntoView({behavior:'smooth',block:'center'});fieldset.querySelector('input').focus();document.getElementById('export-status').textContent='Complete every comparison before exporting.';return;}
    judgments.push({assignment_id:item.assignment_id,choice:selected.value});
  }
  const payload={schema_version:'0.1',exported_at:new Date().toISOString(),reviewer_hash:assignment.reviewer_hash,judgments};
  const blob=new Blob([JSON.stringify(payload,null,2)+'\\n'],{type:'application/json'});
  const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download='ui-resolve-judgments-'+assignment.reviewer_hash+'.json';link.click();URL.revokeObjectURL(url);document.getElementById('export-status').textContent='Judgments exported locally.';
});
</script></body></html>`;
writeFileSync(join(out, "index.html"), html, "utf8");
console.log(JSON.stringify({
  gallery: join(out, "index.html"),
  reveal: revealOut,
  reviewer_hash: reviewerHash,
  candidates: candidates.length,
  assignments: assignments.length,
  reversed_duplicates: 1,
}, null, 2));
