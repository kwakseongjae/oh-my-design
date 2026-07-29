#!/usr/bin/env node
import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, relative, resolve, sep } from "node:path";
import { benchRoot, parseArgs, readJson, sha256, writeJson } from "./_lib.mjs";

const args = parseArgs();
const runsRoot = args.get("runs") ? resolve(String(args.get("runs"))) : null;
const out = args.get("out") ? resolve(String(args.get("out"))) : null;
const revealOut = args.get("reveal-out") ? resolve(String(args.get("reveal-out"))) : null;
const reviewer = args.get("reviewer") ? String(args.get("reviewer")).trim() : null;
const saltArgument = args.get("blind-salt") ? String(args.get("blind-salt")) : null;
const saltFile = args.get("blind-salt-file") ? resolve(String(args.get("blind-salt-file"))) : null;
if (saltArgument && saltFile) throw new Error("use only one of --blind-salt or --blind-salt-file");
const salt = saltFile ? readFileSync(saltFile, "utf8").trim() : saltArgument;
const epoch = args.get("epoch") ? String(args.get("epoch")).trim() : null;
if (!runsRoot || !out || !revealOut || !reviewer || !salt || !epoch) {
  console.error(
    "usage: build-gallery.mjs --runs <parent-dir> --out <new-dir> --reveal-out <outside-file.json> " +
    "--reviewer <opaque-reviewer-id> (--blind-salt <secret> | --blind-salt-file <secret-file>) " +
    "--epoch <methodology-epoch>",
  );
  process.exit(2);
}
if (salt.length < 16) {
  throw new Error("--blind-salt must be a non-public secret with at least 16 characters");
}
if (!/^[a-z0-9][a-z0-9._-]{2,63}$/i.test(epoch)) {
  throw new Error("--epoch must be an opaque 3–64 character identifier using letters, numbers, dot, underscore, or hyphen");
}

const relativeReveal = relative(out, revealOut);
if (relativeReveal === "" || (!relativeReveal.startsWith(`..${sep}`) && relativeReveal !== "..")) {
  throw new Error("--reveal-out must be outside the gallery directory");
}
if (existsSync(out)) throw new Error(`refusing to overwrite gallery: ${out}`);
if (existsSync(revealOut)) throw new Error(`refusing to overwrite reveal map: ${revealOut}`);

const reviewerHash = sha256(`${salt}:${epoch}:reviewer:${reviewer}`).slice(0, 16);
const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#39;");
const candidates = [];
const usedOpaqueIds = new Set();
let excludedIneligible = 0;
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
  const score = readJson(scorePath);
  if (run.process?.timed_out || run.process?.exit_code !== 0) continue;
  if (score.status?.automated_gate_pass !== true) {
    excludedIneligible += 1;
    continue;
  }

  const opaque = `candidate-${sha256(`${salt}:${epoch}:${manifest.task.id}:${manifest.task.version}:${directory}:${manifest.variant.id}`).slice(0, 10)}`;
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
const reviewUnitId = `review-unit-${sha256(
  `${salt}:${epoch}:${reviewerHash}:${task.id}:${task.version}:${corePromptHashes[0]}`,
).slice(0, 16)}`;

mkdirSync(join(out, "assets"), { recursive: true });
for (const candidate of candidates) {
  copyFileSync(candidate.desktopPath, join(out, "assets", `${candidate.opaque}-desktop.png`));
  copyFileSync(candidate.mobilePath, join(out, "assets", `${candidate.opaque}-mobile.png`));
}

const basePairs = [];
for (let left = 0; left < candidates.length; left += 1) {
  for (let right = left + 1; right < candidates.length; right += 1) {
    const pair = [candidates[left].opaque, candidates[right].opaque];
    const sideHash = sha256(`${salt}:${epoch}:${reviewer}:sides:${pair.join(":")}`);
    const [a, b] = Number.parseInt(sideHash[0], 16) % 2 === 0 ? pair : pair.reverse();
    basePairs.push({
      assignment_id: `assignment-${sha256(`${salt}:${epoch}:${reviewUnitId}:pair:${pair.slice().sort().join(":")}`).slice(0, 12)}`,
      a,
      b,
      reversed_duplicate: false,
      reversal_of: null,
    });
  }
}
basePairs.sort((left, right) => (
  sha256(`${salt}:${epoch}:${reviewer}:order:${left.assignment_id}`)
    .localeCompare(sha256(`${salt}:${epoch}:${reviewer}:order:${right.assignment_id}`))
));

const repeatedSource = basePairs[0];
const reversedDuplicate = {
  assignment_id: `assignment-${sha256(`${salt}:${epoch}:${reviewUnitId}:reversed:${repeatedSource.assignment_id}`).slice(0, 12)}`,
  a: repeatedSource.b,
  b: repeatedSource.a,
  reversed_duplicate: true,
  reversal_of: repeatedSource.assignment_id,
};
const assignments = [...basePairs, reversedDuplicate].sort((left, right) => (
  sha256(`${salt}:${epoch}:${reviewer}:final-order:${left.assignment_id}`)
    .localeCompare(sha256(`${salt}:${epoch}:${reviewer}:final-order:${right.assignment_id}`))
));

const rubric = [
  {
    id: "functionality",
    label: "Functionality",
    prompt: "Which option more clearly fulfills the stated task and exposes the necessary product states?",
  },
  {
    id: "usability",
    label: "Usability",
    prompt: "Which option makes hierarchy, next action, and scanning easier for the intended user?",
  },
  {
    id: "fidelity",
    label: "Fidelity",
    prompt: "Which option is more coherent and faithful to the supplied product and design context?",
  },
  {
    id: "ship_preference",
    label: "Ship Preference",
    prompt: "Considering the task as a whole, which result would you ship?",
  },
];
const blindAssignment = {
  schema_version: "0.3",
  methodology_epoch: epoch,
  reviewer_hash: reviewerHash,
  review_unit_id: reviewUnitId,
  task: {
    id: task.id,
    version: task.version,
    core_prompt_sha256: corePromptHashes[0],
    review_brief: task.review_brief,
  },
  rubric,
  assignment_count: assignments.length,
  assignments: assignments.map(({ assignment_id, a, b }) => ({ assignment_id, a, b })),
};
writeJson(join(out, "assignment.json"), blindAssignment);
writeJson(revealOut, {
  schema_version: "0.3",
  methodology_epoch: epoch,
  warning: "Keep this file separate from blind reviewers until their verdicts are locked.",
  salt_sha256: sha256(salt),
  reviewer_hash: reviewerHash,
  review_unit_id: reviewUnitId,
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
const choiceLabels = [
  ["a", "A"],
  ["b", "B"],
  ["tie", "Tie"],
  ["both_fail", "Both fail"],
];
const axisChoices = (assignment, axis) => `
      <fieldset class="axis" data-axis="${axis.id}">
        <legend><strong>${axis.label}</strong><span>${axis.prompt}</span></legend>
        <div class="axis-options">
          ${choiceLabels.map(([value, label]) => `<label><input type="radio" name="judgment-${assignment.assignment_id}-${axis.id}" value="${value}" /> ${label}</label>`).join("")}
        </div>
      </fieldset>`;
const cards = assignments.map((assignment, index) => `
  <fieldset class="comparison" data-assignment="${assignment.assignment_id}">
    <legend><span>${String(index + 1).padStart(2, "0")}</span> Compare the same task, axis by axis.</legend>
    <div class="options">
      <section aria-label="Option A">${viewport(assignment.a, "A", "desktop")}${viewport(assignment.a, "A", "mobile")}</section>
      <section aria-label="Option B">${viewport(assignment.b, "B", "desktop")}${viewport(assignment.b, "B", "mobile")}</section>
    </div>
    <div class="judgments" aria-label="Judgments for comparison ${index + 1}">
      ${rubric.map((axis) => axisChoices(assignment, axis)).join("")}
    </div>
  </fieldset>`).join("\n");

const publicAssignments = assignments.map(({ assignment_id }) => ({ assignment_id }));
const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" />
<title>UI-Resolve Bench · pairwise blind review</title>
<style>
*{box-sizing:border-box}body{margin:0;background:#fafafa;color:#111;font:15px/1.55 Arial,sans-serif}header,main,footer{width:min(1440px,calc(100% - 40px));margin:auto}header{padding:64px 0 28px;border-bottom:1px solid #ddd}h1{font:400 clamp(38px,6vw,72px)/.98 Georgia,serif;max-width:1000px;margin:0 0 18px}header p{max-width:760px;color:#5e5e68}.comparison{min-width:0;margin:0;padding:52px 0;border:0;border-bottom:1px solid #ddd}.comparison>legend{width:100%;font:600 22px/1.3 Arial,sans-serif;margin-bottom:20px}.comparison>legend span{font:12px monospace;color:#5546ff;margin-right:12px}.options{display:grid;grid-template-columns:1fr 1fr;gap:24px}.options section{min-width:0;display:grid;grid-template-columns:minmax(0,1fr) minmax(150px,.32fr);gap:12px}figure{min-width:0;margin:0}figcaption{font:12px monospace;color:#5e5e68;margin-bottom:7px}.canvas{height:min(68vh,760px);overflow:auto;background:#fff;border:1px solid #d5d5db;border-radius:12px}.canvas-mobile{height:min(68vh,760px)}.canvas img{display:block;width:100%;height:auto}.judgments{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:20px}.axis{min-width:0;margin:0;padding:16px;border:1px solid #d5d5db;background:#fff}.axis legend{padding:0 6px;font:14px/1.4 Arial,sans-serif}.axis legend strong,.axis legend span{display:block}.axis legend span{margin-top:3px;color:#5e5e68;font-size:13px}.axis-options{display:flex;flex-wrap:wrap;gap:8px}.axis-options label{display:flex;align-items:center;gap:6px;border:1px solid #d5d5db;padding:8px 11px;cursor:pointer}footer{padding:32px 0 72px}button{border:0;background:#5546ff;color:#fff;font:600 15px Arial,sans-serif;padding:12px 18px;cursor:pointer}#export-status{margin-left:12px;color:#5e5e68}@media(max-width:900px){header,main,footer{width:min(100% - 24px,1440px)}.options,.judgments{grid-template-columns:1fr}.options section{grid-template-columns:minmax(0,1fr) minmax(110px,.3fr)}.canvas{height:54vh}}
</style></head><body><header><p>UI-RESOLVE BENCH · PAIRWISE BLIND REVIEW</p><h1>Judge the task, not the tool name.</h1><p><strong>Task:</strong> ${escapeHtml(task.review_brief)}</p><p>Choose the result you would ship for this task. Tool identities, automatic scores, and repeat-pair markers stay hidden until all judgments are exported and locked. Ties and “both fail” are valid outcomes.</p></header><main>${cards}</main>
<footer><button type="button" id="export">Export judgments</button><span id="export-status" role="status" aria-live="polite"></span></footer>
<script>
const assignment = ${JSON.stringify({
  schema_version: "0.3",
  methodology_epoch: epoch,
  reviewer_hash: reviewerHash,
  review_unit_id: reviewUnitId,
  task: { id: task.id, version: task.version, core_prompt_sha256: corePromptHashes[0] },
  rubric: rubric.map(({ id }) => ({ id })),
  assignments: publicAssignments,
})};
document.getElementById('export').addEventListener('click',()=>{
  const judgments=[];
  for(const item of assignment.assignments){
    const fieldset=document.querySelector('[data-assignment="'+item.assignment_id+'"]');
    const axes={};
    for(const axis of assignment.rubric){
      const selected=fieldset.querySelector('input[name="judgment-'+item.assignment_id+'-'+axis.id+'"]:checked');
      if(!selected){fieldset.scrollIntoView({behavior:'smooth',block:'center'});fieldset.querySelector('input[name="judgment-'+item.assignment_id+'-'+axis.id+'"]').focus();document.getElementById('export-status').textContent='Complete every axis before exporting.';return;}
      axes[axis.id]=selected.value;
    }
    judgments.push({assignment_id:item.assignment_id,axes});
  }
  const payload={schema_version:'0.3',methodology_epoch:assignment.methodology_epoch,exported_at:new Date().toISOString(),reviewer_hash:assignment.reviewer_hash,review_unit_id:assignment.review_unit_id,task:assignment.task,judgments};
  const blob=new Blob([JSON.stringify(payload,null,2)+'\\n'],{type:'application/json'});
  const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download='ui-resolve-judgments-'+assignment.review_unit_id+'.json';link.click();URL.revokeObjectURL(url);document.getElementById('export-status').textContent='Judgments exported locally.';
});
</script></body></html>`;
writeFileSync(join(out, "index.html"), html, "utf8");
console.log(JSON.stringify({
  gallery: join(out, "index.html"),
  reveal: revealOut,
  reviewer_hash: reviewerHash,
  review_unit_id: reviewUnitId,
  methodology_epoch: epoch,
  candidates: candidates.length,
  excluded_ineligible: excludedIneligible,
  assignments: assignments.length,
  reversed_duplicates: 1,
}, null, 2));
