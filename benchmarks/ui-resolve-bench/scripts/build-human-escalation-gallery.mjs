#!/usr/bin/env node
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { basename, dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { benchRoot, parseArgs, readJson, sha256, writeJson } from "./_lib.mjs";

const AXES = [
  ["functionality", "Functionality", "Which result fulfills the task and exposes the necessary states?"],
  ["usability", "Usability", "Which result makes hierarchy, scanning, and the next action clearer?"],
  ["fidelity", "Fidelity", "Which result is more coherent with the supplied product context?"],
  ["ship_preference", "Ship preference", "Which result would you ship?"],
];

function fail(message) {
  throw new Error(`human escalation gallery rejected: ${message}`);
}

function inside(parent, child) {
  const rel = relative(resolve(parent), resolve(child));
  return rel === "" || (!rel.startsWith(`..${sep}`) && rel !== "..");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function familyId(taskId) {
  return taskId.replace(/-trial-\d+$/, "");
}

function trialNumber(taskId) {
  const match = taskId.match(/-trial-(\d+)$/);
  if (!match) fail(`selected task must end in -trial-N: ${taskId}`);
  return Number(match[1]);
}

export function buildHumanEscalationGallery({
  selectionPath,
  runsRoot,
  out,
  revealOut,
  saltFile,
  reviewer,
}) {
  if ([out, revealOut].some(existsSync)) fail("output and reveal paths must be new");
  if (inside(out, revealOut) || inside(revealOut, out)) fail("public gallery and private reveal must be separate");
  const salt = readFileSync(saltFile, "utf8").trim();
  if (salt.length < 16) fail("salt file must contain at least 16 non-whitespace characters");
  const selection = readJson(selectionPath);
  if (selection.schema_version !== "0.1" || !Array.isArray(selection.selected)) {
    fail("selection must use schema 0.1 with selected[]");
  }
  const reviewerHash = sha256(`${salt}:${selection.methodology_epoch}:human:${reviewer}`).slice(0, 16);
  const families = new Map();
  const reveals = {};

  for (const selected of selection.selected) {
    const family = familyId(selected.task.id);
    const canonicalTask = readJson(join(benchRoot, "tasks", family, "task.json"));
    const candidates = selected.candidates;
    if (!Array.isArray(candidates) || candidates.length !== 2) fail(`${selected.task.id} must have exactly two candidates`);
    const opaque = candidates.map((candidate) => ({
      ...candidate,
      opaque: `candidate-${sha256(`${salt}:${reviewerHash}:${selected.pair_key}:${candidate.variant_id}`).slice(0, 10)}`,
    }));
    const ordered = Number.parseInt(sha256(`${salt}:${reviewerHash}:${selected.pair_key}:side`)[0], 16) % 2
      ? opaque
      : [...opaque].reverse();
    const comparisonId = `comparison-${sha256(`${salt}:${reviewerHash}:${selected.pair_key}`).slice(0, 12)}`;
    const assets = [];
    for (const candidate of ordered) {
      const directory = candidate.directories?.[0];
      if (!directory) fail(`candidate directory missing for ${selected.pair_key}`);
      for (const viewport of ["desktop", "mobile"]) {
        const source = join(runsRoot, directory, ".benchmark", "screenshots", `${viewport}.png`);
        if (!existsSync(source)) fail(`screenshot missing: ${source}`);
        const name = `${comparisonId}-${candidate.opaque}-${viewport}.png`;
        assets.push({ source, name });
      }
    }
    const comparison = {
      comparison_id: comparisonId,
      trial: trialNumber(selected.task.id),
      selection: selected.selection,
      a: ordered[0].opaque,
      b: ordered[1].opaque,
      assets,
    };
    if (!families.has(family)) families.set(family, { task: canonicalTask, comparisons: [] });
    families.get(family).comparisons.push(comparison);
    reveals[comparisonId] = {
      pair_key: selected.pair_key,
      task: selected.task,
      selection: selected.selection,
      candidates: Object.fromEntries(opaque.map((candidate) => [candidate.opaque, {
        variant_id: candidate.variant_id,
        label: candidate.label,
        directories: candidate.directories,
      }])),
      sides: { a: comparison.a, b: comparison.b },
      reasons: selected.reasons,
    };
  }

  mkdirSync(out, { recursive: true });
  const familyLinks = [];
  for (const [family, data] of [...families.entries()].sort()) {
    data.comparisons.sort((left, right) => left.trial - right.trial);
    const pageRoot = join(out, family);
    mkdirSync(join(pageRoot, "assets"), { recursive: true });
    for (const comparison of data.comparisons) {
      for (const asset of comparison.assets) copyFileSync(asset.source, join(pageRoot, "assets", asset.name));
    }
    const cards = data.comparisons.map((comparison, index) => {
      const image = (side, viewport) => {
        const opaque = side === "A" ? comparison.a : comparison.b;
        const asset = comparison.assets.find((item) => item.name.includes(opaque) && item.name.endsWith(`${viewport}.png`));
        return `<figure><figcaption>${side} · ${viewport}</figcaption><div class="canvas ${viewport}"><img src="assets/${asset.name}" alt="Anonymous option ${side}, ${viewport}" /></div></figure>`;
      };
      const axes = AXES.map(([id, label, prompt]) => `<fieldset class="axis"><legend><strong>${label}</strong><span>${prompt}</span></legend><div>${[["a", "A"], ["b", "B"], ["tie", "Tie"], ["both_fail", "Both fail"]].map(([value, text]) => `<label><input type="radio" name="${comparison.comparison_id}-${id}" value="${value}" />${text}</label>`).join("")}</div></fieldset>`).join("");
      return `<section class="comparison" data-comparison="${comparison.comparison_id}"><div class="kicker">${String(index + 1).padStart(2, "0")} / ${String(data.comparisons.length).padStart(2, "0")} · TRIAL ${comparison.trial}</div><h2>Compare the same task, not the styling trick.</h2><div class="options"><div>${image("A", "desktop")}${image("A", "mobile")}</div><div>${image("B", "desktop")}${image("B", "mobile")}</div></div><div class="axes">${axes}</div></section>`;
    }).join("");
    const publicData = {
      schema_version: "0.1",
      methodology_epoch: selection.methodology_epoch,
      reviewer_hash: reviewerHash,
      family,
      comparisons: data.comparisons.map(({ comparison_id, trial }) => ({ comparison_id, trial })),
      axes: AXES.map(([id]) => id),
    };
    const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>UI-Resolve · ${escapeHtml(family)}</title><style>
*{box-sizing:border-box}body{margin:0;background:#f6f6f4;color:#111;font:15px/1.5 Arial,sans-serif}header,main,footer{width:min(1480px,calc(100% - 40px));margin:auto}header{padding:58px 0 36px;border-bottom:1px solid #ccc}header p{max-width:800px;color:#62626c}h1{font:400 clamp(42px,6vw,78px)/1 Georgia,serif;margin:8px 0 20px}.comparison{padding:48px 0;border-bottom:1px solid #ccc}.kicker{font:12px monospace;letter-spacing:.12em;color:#5546ff}.comparison h2{font-size:22px}.options{display:grid;grid-template-columns:1fr 1fr;gap:20px}.options>div{display:grid;grid-template-columns:minmax(0,1fr) minmax(130px,.3fr);gap:10px}figure{min-width:0;margin:0}figcaption{font:12px monospace;color:#666;margin:0 0 6px}.canvas{height:min(62vh,700px);overflow:auto;background:#fff;border:1px solid #cfcfd4}.canvas img{display:block;width:100%;height:auto}.axes{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:18px}.axis{background:#fff;border:1px solid #cfcfd4;padding:14px}.axis legend{padding:0 6px}.axis legend strong,.axis legend span{display:block}.axis legend span{font-size:12px;color:#666}.axis div{display:flex;gap:7px;flex-wrap:wrap}.axis label{border:1px solid #ccc;padding:7px 10px;cursor:pointer}.axis label:has(input:checked){border-color:#5546ff;background:#eeecff}footer{padding:32px 0 70px;position:sticky;bottom:0;background:linear-gradient(transparent,#f6f6f4 28%)}button{background:#5546ff;color:white;border:0;padding:13px 18px;font-weight:700;cursor:pointer}#status{margin-left:12px;color:#666}@media(max-width:900px){header,main,footer{width:calc(100% - 24px)}.options,.axes{grid-template-columns:1fr}.options>div{grid-template-columns:minmax(0,1fr) 120px}.canvas{height:50vh}}
</style></head><body><header><div class="kicker">UI-RESOLVE · REDUCED HUMAN CALIBRATION</div><h1>${escapeHtml(family.replaceAll("-", " "))}</h1><p>${escapeHtml(data.task.review_brief)}</p><p>${data.comparisons.length} selected comparison${data.comparisons.length === 1 ? "" : "s"}. Automatic scores, tool names, and selection reasons remain hidden until export.</p></header><main>${cards}</main><footer><button id="export">Export this page</button><span id="status"></span></footer><script>
const data=${JSON.stringify(publicData)};document.getElementById("export").onclick=()=>{const judgments=[];for(const comparison of data.comparisons){const axes={};for(const axis of data.axes){const name=comparison.comparison_id+"-"+axis;const input=document.querySelector('input[name="'+name+'"]:checked');if(!input){const section=document.querySelector('[data-comparison="'+comparison.comparison_id+'"]');section.scrollIntoView({behavior:"smooth",block:"start"});section.querySelector('input[name="'+name+'"]')?.focus({preventScroll:true});document.getElementById("status").textContent="Complete every axis first.";return}axes[axis]=input.value}judgments.push({comparison_id:comparison.comparison_id,trial:comparison.trial,axes})}const payload={...data,exported_at:new Date().toISOString(),judgments};const blob=new Blob([JSON.stringify(payload,null,2)+"\\n"],{type:"application/json"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="ui-resolve-human-"+data.family+".json";a.click();URL.revokeObjectURL(url);document.getElementById("status").textContent="Exported locally."};
</script></body></html>`;
    writeFileSync(join(pageRoot, "index.html"), html, "utf8");
    familyLinks.push(`<a href="${family}/"><strong>${escapeHtml(family.replaceAll("-", " "))}</strong><span>${data.comparisons.length} comparisons</span></a>`);
  }
  writeFileSync(join(out, "index.html"), `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>UI-Resolve calibration</title><style>body{margin:0;background:#f6f6f4;color:#111;font:16px Arial}main{width:min(920px,calc(100% - 32px));margin:80px auto}h1{font:400 clamp(44px,8vw,82px)/1 Georgia}p{color:#666;max-width:650px}nav{display:grid;gap:10px;margin-top:40px}a{display:flex;justify-content:space-between;padding:22px;border:1px solid #ccc;background:#fff;color:#111;text-decoration:none}a:hover{border-color:#5546ff}span{color:#666}</style></head><body><main><p>UI-RESOLVE · REDUCED HUMAN CALIBRATION</p><h1>Three tasks need your judgment.</h1><p>Each page contains only unresolved comparisons and the fixed audit sample. Export one JSON per page.</p><nav>${familyLinks.join("")}</nav></main></body></html>`, "utf8");
  mkdirSync(dirname(revealOut), { recursive: true });
  writeJson(revealOut, {
    schema_version: "0.1",
    methodology_epoch: selection.methodology_epoch,
    reviewer_hash: reviewerHash,
    source_selection_sha256: sha256(readFileSync(selectionPath)),
    comparisons: reveals,
  });
  return {
    gallery: join(out, "index.html"),
    reveal: revealOut,
    reviewer_hash: reviewerHash,
    families: families.size,
    comparisons: Object.keys(reveals).length,
  };
}

const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const args = parseArgs();
  const required = ["selection", "runs", "out", "reveal-out", "blind-salt-file", "reviewer"];
  if (required.some((key) => !args.get(key))) {
    console.error("usage: build-human-escalation-gallery.mjs --selection <private.json> --runs <root> --out <new-public-dir> --reveal-out <private.json> --blind-salt-file <secret> --reviewer <id>");
    process.exit(2);
  }
  const result = buildHumanEscalationGallery({
    selectionPath: resolve(String(args.get("selection"))),
    runsRoot: resolve(String(args.get("runs"))),
    out: resolve(String(args.get("out"))),
    revealOut: resolve(String(args.get("reveal-out"))),
    saltFile: resolve(String(args.get("blind-salt-file"))),
    reviewer: String(args.get("reviewer")),
  });
  console.log(JSON.stringify(result, null, 2));
}
