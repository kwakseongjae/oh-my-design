#!/usr/bin/env node
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const repoRoot = resolve(import.meta.dirname, "../../..");
const tasksRoot = join(repoRoot, "benchmarks/ui-resolve-bench/tasks");
const baselineRoot = "/private/tmp/omd-source-contract-reliability-baselines-1.9.720";
const phase = process.argv.includes("--finalize") ? "finalize" : "draft";
const sha256 = (value) => createHash("sha256").update(value).digest("hex");
const json = (value) => `${JSON.stringify(value, null, 2)}\n`;

const cases = [
  {
    id: "orbital-optics-transfer-v0.1",
    title: "Orbital optics transfer review",
    eyebrow: "Orbital observatory · optics transfer",
    heading: "Flight-optics transfer review",
    recordHeading: "Optics register",
    recordSummary: "Five supplied optics assemblies mapped to seven transport cradles.",
    records: [
      ["OPT-NAC-0174", ["CRADLE-88031", "CRADLE-88032"]],
      ["OPT-COR-0218", ["CRADLE-88033"]],
      ["OPT-HEL-0341", ["CRADLE-88034", "CRADLE-88035"]],
      ["OPT-UMB-0457", ["CRADLE-88036"]],
      ["OPT-PEN-0522", ["CRADLE-88037"]],
    ],
    windows: [["BAY-A3", "07:30–07:50"], ["BAY-C1", "09:10–09:30"], ["BAY-D4", "12:40–13:00"], ["BAY-F2", "15:20–15:40"]],
    views: [["optics", "Optics register"], ["windows", "Transfer windows"], ["decision", "Transfer decision"]],
    toggle: "Include shock-log note",
    fieldLabel: "Transfer reviewer",
    validValue: "OPT-NAC-0174 transfer review",
    target: "OPT-NAC-0174 + CRADLE-88031",
    evidence: "5 optics · 7 transport cradles · 4 transfer windows",
    state: "Review open",
    action: "Open transfer record",
    footer: "Orbital observatory · supplied transfer evidence only",
    unknowns: ["alignment verified", "coating intact", "optic calibrated", "flight certified", "cradle seal verified", "bay accepted", "manifest published", "transfer approved"],
    palette: { canvas:"#EDF2F3", surface:"#FCFEFF", ink:"#172A31", muted:"#61717A", border:"#98A9B0", primary:"#185A6B", accent:"#7A5367" },
    columns: "repeat(3,280px)", windowColumns: "repeat(4,220px)", decisionMin: "560px",
    cardRadius: 3,
    domain: "observatory transfer ledger",
  },
  {
    id: "seed-vault-accession-v0.1",
    title: "Seed vault accession review",
    eyebrow: "Regional seed vault · accession intake",
    heading: "Accession envelope review",
    recordHeading: "Accession register",
    recordSummary: "Four supplied seed lots mapped to six sealed envelopes.",
    records: [
      ["LOT-ORY-2047", ["ENV-731042", "ENV-731043"]],
      ["LOT-PIS-2184", ["ENV-731044"]],
      ["LOT-MIL-2306", ["ENV-731045", "ENV-731046"]],
      ["LOT-SOR-2491", ["ENV-731047"]],
    ],
    windows: [["CHAMBER-N2", "08:15–08:35"], ["CHAMBER-E5", "11:25–11:45"], ["CHAMBER-S1", "14:50–15:10"]],
    views: [["lots", "Seed lots"], ["windows", "Chamber windows"], ["decision", "Accession decision"]],
    toggle: "Include courier pouch note",
    fieldLabel: "Accession reviewer",
    validValue: "LOT-ORY-2047 accession review",
    target: "LOT-ORY-2047 + ENV-731042",
    evidence: "4 seed lots · 6 envelopes · 3 chamber windows",
    state: "Review open",
    action: "Open accession record",
    footer: "Regional seed vault · supplied accession evidence only",
    unknowns: ["germination verified", "sample viable", "moisture calibrated", "origin validated", "envelope integrity verified", "chamber accepted", "catalog published", "accession approved"],
    palette: { canvas:"#F0F2ED", surface:"#FEFFFC", ink:"#243027", muted:"#69716A", border:"#9AA69C", primary:"#426044", accent:"#7A5C43" },
    columns: "repeat(2,380px)", windowColumns: "repeat(3,270px)", decisionMin: "548px",
    cardRadius: 6,
    domain: "seed-vault accession ledger",
  },
  {
    id: "audio-archive-ingest-v0.1",
    title: "Audio archive ingest review",
    eyebrow: "Broadcast archive · preservation ingest",
    heading: "Reel ingest review",
    recordHeading: "Carrier register",
    recordSummary: "Six supplied tape reels mapped to eight preservation canisters.",
    records: [
      ["REEL-NIGHT-061", ["CAN-92410", "CAN-92411"]],
      ["REEL-CITY-074", ["CAN-92412"]],
      ["REEL-HARBOR-083", ["CAN-92413", "CAN-92414"]],
      ["REEL-ORCH-095", ["CAN-92415"]],
      ["REEL-NEWS-108", ["CAN-92416"]],
      ["REEL-STAGE-117", ["CAN-92417"]],
    ],
    windows: [["SUITE-R1", "06:50–07:10"], ["SUITE-R4", "09:40–10:00"], ["SUITE-R6", "13:15–13:35"], ["SUITE-R8", "16:05–16:25"]],
    views: [["reels", "Carrier register"], ["windows", "Ingest windows"], ["decision", "Ingest decision"]],
    toggle: "Include leader-tape note",
    fieldLabel: "Ingest reviewer",
    validValue: "REEL-NIGHT-061 ingest review",
    target: "REEL-NIGHT-061 + CAN-92410",
    evidence: "6 tape reels · 8 canisters · 4 ingest windows",
    state: "Review open",
    action: "Open ingest record",
    footer: "Broadcast archive · supplied ingest evidence only",
    unknowns: ["audio verified", "reel complete", "azimuth calibrated", "rights validated", "canister integrity verified", "suite accepted", "catalog published", "ingest approved"],
    palette: { canvas:"#F1F0F3", surface:"#FFFEFF", ink:"#2B2830", muted:"#77727B", border:"#A39DA8", primary:"#514760", accent:"#855A58" },
    columns: "repeat(3,286px)", windowColumns: "repeat(4,218px)", decisionMin: "570px",
    cardRadius: 2,
    domain: "broadcast preservation ledger",
  },
];

function sourceContract(c, schema = "0.1", baselineSha = null) {
  const contract = {
    schema_version: schema,
    structured_css_only: true,
    product_path: "index.html",
    required_literals: [c.target, c.evidence],
    forbidden_literals: c.unknowns,
    forbidden_patterns: ["word-break\\s*:", "overflow-wrap\\s*:\\s*(?:anywhere|break-word)"],
    forbidden_css_declarations: [
      { selector: ".decision-target", property: "min-width", value_contract: "positive-length" },
      { selector: ".decision-evidence", property: "min-width", value_contract: "positive-length" },
    ],
    count_literals: [
      { literal: "data-bench-decision-role=\"target\"", expected_count: 1 },
      { literal: "data-bench-decision-role=\"evidence\"", expected_count: 1 },
    ],
    acceptance_debt_ledger: [
      { id:"record-register-reflow", gate:"responsive", selector:".record-grid", baseline_evidence:`fixed ${c.columns} register escapes narrow carriers`, required_correction:"reflow the supplied register without changing assignments", required_outcome:"the complete register remains contained", proof_mode:"browser-row", bound_row_group_ids:["target"], status:"must-fix-before-static-close", static_guardrail:{required_literals:[c.target],forbidden_literals:[],forbidden_patterns:[],required_css_declarations:[{selector:".record-grid",property:"grid-template-columns",value:"1fr",value_contract:"any-value"}],forbidden_css_declarations:[]} },
      { id:"window-strip-reflow", gate:"responsive", selector:".window-strip", baseline_evidence:`fixed ${c.windowColumns} window strip escapes narrow pages`, required_correction:"reflow the separate operational window strip", required_outcome:"every supplied window remains visible", proof_mode:"browser-row", bound_row_group_ids:["evidence"], status:"must-fix-before-static-close", static_guardrail:{required_literals:[c.evidence],forbidden_literals:[],forbidden_patterns:[],required_css_declarations:[{selector:".window-strip",property:"grid-template-columns",value:"1fr",value_contract:"any-value"}],forbidden_css_declarations:[]} },
      { id:"decision-reflow", gate:"responsive", selector:".decision", baseline_evidence:"fixed relationship widths collide with the action and escape the page", required_correction:"preserve separate target, evidence, state, and action hierarchy in a contained column", required_outcome:"the decision remains readable without page overflow or action wrapping", proof_mode:"browser-row", bound_row_group_ids:["target","evidence"], status:"must-fix-before-static-close", static_guardrail:{required_literals:[],forbidden_literals:[],forbidden_patterns:[],required_css_declarations:[{selector:".decision",property:"grid-template-columns",value:"1fr",value_contract:"any-value"},{selector:".decision > div",property:"min-width",value:"0",value_contract:"exact-value"}],forbidden_css_declarations:[{selector:".decision-target",property:"min-width",value_contract:"positive-length"},{selector:".decision-evidence",property:"min-width",value_contract:"positive-length"}]} },
      { id:"canvas-text-contrast", gate:"accessibility", selector:"header > p, footer", baseline_evidence:"muted normal-size guidance does not reach 4.5:1 on the canvas", required_correction:"use the verified ink role for canvas guidance", required_outcome:"header guidance and footer reach at least 4.5:1", proof_mode:"static-fail-close", bound_row_group_ids:[], status:"must-fix-before-static-close", static_guardrail:{required_literals:[],forbidden_literals:[],forbidden_patterns:[],required_css_declarations:[{selector:"header > p",property:"color",value:"var(--ink)",value_contract:"exact-value"},{selector:"footer",property:"color",value:"var(--ink)",value_contract:"exact-value"}],forbidden_css_declarations:[]} },
    ],
    carriers: [
      { id:"target-carrier", selector:"[data-bench-decision-role='context'] > div > .decision-target", expected_count:1, binds_row_groups:["target"], containment_guardrail:{selector:".decision > div",property:"min-width",value:"0",value_contract:"exact-value"} },
      { id:"evidence-carrier", selector:"[data-bench-decision-role='context'] > div > .decision-evidence", expected_count:1, binds_row_groups:["evidence"], containment_guardrail:{selector:".decision > div",property:"min-width",value:"0",value_contract:"exact-value"} },
    ],
    row_groups: [
      { id:"target", selector:"[data-bench-decision-role='target']", role:"target", expected_count:1, longest_value:c.target, atomic_parts:c.target.split(" + "), line_contract:"parent-one-line", typography_contract:{source:"deterministic-pre-edit-snapshot"}, required_fit_reserve_css_px:8, planned_fit_reserve_css_px:16, decision:"comparison-scroll", scroll_contract:{container_selector:"[data-bench-decision-role='context'] > div > .decision-target",accessible_name:"Record and container relationship",keyboard_reachable:true,focus_visible:true,passive_text_scroll_container:false} },
      { id:"evidence", selector:"[data-bench-decision-role='evidence']", role:"evidence", expected_count:1, longest_value:c.evidence, line_contract:"single-token", typography_contract:{source:"deterministic-pre-edit-snapshot"}, required_fit_reserve_css_px:8, planned_fit_reserve_css_px:16, decision:"comparison-scroll", scroll_contract:{container_selector:"[data-bench-decision-role='context'] > div > .decision-evidence",accessible_name:"Supplied operational evidence",keyboard_reachable:true,focus_visible:true,passive_text_scroll_container:false} },
    ],
    invariants: { same_row_count:true, same_decision_boundary:true, all_registered_carriers_closed:true, no_text_hack:true },
  };
  if (schema === "0.2") {
    contract.baseline_evidence = { path:"baseline-critical-gates.json", sha256:baselineSha };
    contract.critical_gate_debt_coverage = [
      { gate:"responsive", debt_ids:["record-register-reflow","window-strip-reflow","decision-reflow"] },
      { gate:"accessibility", debt_ids:["canvas-text-contrast"] },
    ];
  }
  return contract;
}

function task(c, contract) {
  const unitCount = c.records.reduce((sum, [, units]) => sum + units.length, 0);
  const protectedSelectors = ["[data-bench='routing-view-option']","[data-bench='note-toggle']","[data-bench='review-form']","[data-bench='reviewer-name']","[data-bench='form-status']","[data-bench='record-case']","[data-bench='record-id']","[data-bench='unit-id']","[data-bench='window-strip']","[data-bench='window-owner']","[data-bench='window-id']","[data-bench='compact-control-copy']","[data-bench-design-role='record-register']","[data-bench-decision-role='context']","[data-bench-decision-role='target']","[data-bench-decision-role='evidence']","[data-bench-decision-role='state']","[data-bench-decision-role='action']"];
  const counts = [3,1,1,1,1,c.records.length,c.records.length,unitCount,1,c.windows.length,c.windows.length,1,1,1,1,1,1,1];
  return {
    id:c.id, version:"0.1.0", track:"repair", grounding:"design-md", locale:"en", behavior_adapter:"onboarding-v1",
    review_brief:`A ${c.domain}. Preserve ${c.records.length} record identifiers, ${unitCount} assigned container identifiers and exact assignments, the separate ${c.windows.length}-window operational strip, three review views, note setting, reviewer name, and supplied summary facts without inventing ${c.unknowns.join(", ")}.`,
    network:"disabled", entry:"index.html",
    semantic_oracle:{landmarks:{h1_count:{exact:1},main_count:{exact:1},nav_count:{min:1},footer_count:{min:1}}},
    viewports:[{name:"desktop",width:1440,height:1000},{name:"mobile",width:390,height:844},{name:"narrow-320",width:320,height:720},{name:"css-zoom-surrogate-200",width:640,height:900,zoom:2}],
    protected_selectors:protectedSelectors,
    protected_hook_counts:Object.fromEntries(protectedSelectors.map((selector,index)=>[selector,counts[index]])),
    journey_oracle:{choice:{selector:"[data-bench='routing-view-option']",value_attribute:"data-view",body_dataset:"view",values:c.views.map(([value])=>value),count:3,initial:c.views[0][0],selected:c.views[1][0]},toggle:{selector:"[data-bench='note-toggle']"},form:{form_selector:"[data-bench='review-form']",field_selector:"[data-bench='reviewer-name']",status_selector:"[data-bench='form-status']",invalid_value:"",valid_value:c.validValue}},
    text_geometry_oracle:{viewports:["mobile","narrow-320","css-zoom-surrogate-200"],scope_selectors:["[data-bench-design-role='record-register']","[data-bench='window-strip']","[data-bench-decision-role='context']"],atomic_scope_selectors:["[data-bench='record-id']","[data-bench='unit-id']","[data-bench='window-owner']","[data-bench='window-id']","[data-bench-decision-role='target']","[data-bench-decision-role='evidence']","[data-bench-decision-role='state']"],compact_copy_selectors:["[data-bench='compact-control-copy']"],max_short_text_chars:56,max_short_text_lines:1},
    decision_hierarchy_oracle:{viewports:["desktop","mobile","narrow-320","css-zoom-surrogate-200"],minimum_action_gap_px:8,roles:{container:"[data-bench-decision-role='context']",target:"[data-bench-decision-role='target']",evidence:"[data-bench-decision-role='evidence']",state:"[data-bench-decision-role='state']",action:"[data-bench-decision-role='action']"}},
    protected_unknown_patterns:["\\b(?:10x|99(?:\\.9)?%|guaranteed|revolutionary|supercharge|magical|seamless)\\b",`\\b(?:${c.unknowns.join("|")})\\b`,"\\btrusted by\\b","[★☆]{3,}"],
    protected_known_patterns:[c.target,c.evidence], protected_unknown_selectors:["blockquote","[class*='testimonial' i]","[class*='logo-wall' i]","[class*='social-proof' i]"],
    design_oracle:{page_background:c.palette.canvas,primary_action:c.palette.primary,accent:c.palette.accent,ink:c.palette.ink,surface:c.palette.surface,border:c.palette.border,muted_text:c.palette.muted,card_radius_px:c.cardRadius,control_radius_px:c.cardRadius,font_family:{body_any:["Arial"],display_any:["Georgia"]},selectors:{primary_action:"[data-primary-action]",card:"[data-bench-design-role='record-register']",display:"h1"}},
    omd_reflow_source_contract:contract,
  };
}

function html(c) {
  const records = c.records.map(([record, units])=>`<article class="record" data-bench="record-case"><span class="record-id" data-bench="record-id">${record}</span><div class="units">${units.map(unit=>`<span class="unit-id" data-bench="unit-id">${unit}</span>`).join("")}</div></article>`).join("");
  const windows = c.windows.map(([owner,window])=>`<article class="window"><strong class="window-owner" data-bench="window-owner">${owner}</strong><span class="window-id" data-bench="window-id">${window}</span></article>`).join("");
  const p=c.palette;
  return `<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${c.title}</title><style>
:root{--canvas:${p.canvas};--surface:${p.surface};--ink:${p.ink};--muted:${p.muted};--border:${p.border};--primary:${p.primary};--accent:${p.accent}}*{box-sizing:border-box}body{margin:0;background:var(--canvas);color:var(--ink);font:15px/1.5 Arial,sans-serif}button,input{font:inherit}button{cursor:pointer}header,main,footer{width:min(1120px,calc(100% - 40px));margin:auto}header{padding:34px 0 24px}h1{font:700 43px/1.06 Georgia,serif;margin:0 0 10px}.eyebrow{font-size:12px;letter-spacing:.15em;text-transform:uppercase;color:var(--accent)}nav{display:flex;gap:8px;margin:22px 0}.view{border:1px solid var(--border);border-radius:${c.cardRadius}px;background:var(--surface);padding:9px 13px}.view[aria-pressed=true]{background:var(--primary);color:white}.layout{display:grid;grid-template-columns:minmax(0,1fr) 304px;gap:18px}.panel{background:var(--surface);border:1px solid var(--border);border-radius:${c.cardRadius}px;padding:18px}.panel h2{font:700 23px/1.2 Georgia,serif;margin:0 0 8px}.muted{color:var(--muted)}.record-grid{display:grid;grid-template-columns:${c.columns};gap:12px;margin-top:16px}.record{border-top:3px solid var(--primary);padding:14px;background:color-mix(in srgb,var(--surface) 76%,var(--canvas))}.record-id,.unit-id,.window-owner,.window-id{white-space:normal}.record-id{display:block;font-weight:700;margin-bottom:8px}.units{display:flex;gap:8px;flex-wrap:wrap}.unit-id{border:1px solid var(--border);padding:5px 7px;background:var(--surface)}.window-strip{display:grid;grid-template-columns:${c.windowColumns};gap:10px;margin-top:18px}.window{border:1px solid var(--border);padding:12px;background:var(--surface)}.window-owner,.window-id{display:block}.decision{margin-top:18px;display:grid;grid-template-columns:1fr auto;gap:18px;align-items:start}.decision-target,.decision-evidence{min-width:${c.decisionMin}}.decision-evidence{margin-top:8px;color:var(--muted)}.state{display:block;margin-top:12px;font-weight:700}.primary{border:0;border-radius:${c.cardRadius}px;background:var(--primary);color:white;padding:11px 16px}.controls{display:grid;gap:12px}.toggle{display:flex;gap:8px;align-items:center}.review-form{display:grid;gap:8px}.review-form input{min-width:0;border:1px solid var(--border);border-radius:${c.cardRadius}px;padding:9px}.status{min-height:1.5em;color:var(--accent)}footer{padding:24px 0 36px;color:var(--muted)}@media(max-width:760px){header,main,footer{width:calc(100% - 24px)}h1{font-size:35px}.layout{grid-template-columns:1fr}.decision{grid-template-columns:1fr auto}}
</style></head><body data-view="${c.views[0][0]}"><header><div class="eyebrow">${c.eyebrow}</div><h1>${c.heading}</h1><p class="muted">Inspect supplied assignments and operational windows before recording a reviewer.</p><nav aria-label="Review views">${c.views.map(([value,label],index)=>`<button class="view" data-bench="routing-view-option" data-view="${value}" aria-pressed="${index===0}">${label}</button>`).join("")}</nav></header><main><div class="layout"><section class="panel" data-bench-design-role="record-register"><h2>${c.recordHeading}</h2><p class="muted">${c.recordSummary}</p><div class="record-grid">${records}</div></section><aside class="panel controls"><h2>Review controls</h2><button type="button" class="view toggle" data-bench="note-toggle" aria-pressed="false"><span data-bench="compact-control-copy">${c.toggle}</span></button><form class="review-form" data-bench="review-form"><label for="reviewer">${c.fieldLabel}</label><input id="reviewer" data-bench="reviewer-name" autocomplete="off"><button class="primary" type="submit">Record reviewer</button><div class="status" role="status" data-bench="form-status"></div></form></aside></div><section class="window-strip" data-bench="window-strip" aria-label="Operational windows">${windows}</section><section class="panel decision" data-bench-decision-role="context"><div><div class="decision-target"><strong data-bench-decision-role="target">${c.target}</strong></div><div class="decision-evidence"><span data-bench-decision-role="evidence">${c.evidence}</span></div><span class="state" data-bench-decision-role="state">${c.state}</span></div><button class="primary" data-primary-action data-bench-decision-role="action">${c.action}</button></section></main><footer>${c.footer}</footer><script>const views=[...document.querySelectorAll('[data-bench="routing-view-option"]')];views.forEach(button=>button.addEventListener('click',()=>{document.body.dataset.view=button.dataset.view;views.forEach(item=>item.setAttribute('aria-pressed',String(item===button)))}));const note=document.querySelector('[data-bench="note-toggle"]');note.addEventListener('click',()=>note.setAttribute('aria-pressed',String(note.getAttribute('aria-pressed')!=='true')));document.querySelector('[data-bench="review-form"]').addEventListener('submit',event=>{event.preventDefault();const field=document.querySelector('[data-bench="reviewer-name"]');const value=field.value.trim();const valid=Boolean(value);field.setAttribute('aria-invalid',String(!valid));document.querySelector('[data-bench="form-status"]').textContent=valid?\`Reviewer recorded: \${value}\`:'Enter a reviewer name.';if(!valid)field.focus()});</script></body></html>\n`;
}

function design(c) {
  const p=c.palette;
  return `# ${c.title} — DESIGN.md\n\n## Visual direction\n\nQuiet ${c.domain}. Dense evidence stays legible through explicit grouping, restrained contrast, and compact geometry. This is an operational record, not a promotional dashboard.\n\n## Tokens\n\n- Canvas: \`${p.canvas}\`\n- Surface: \`${p.surface}\`\n- Ink: \`${p.ink}\`\n- Muted text: \`${p.muted}\`\n- Border: \`${p.border}\`\n- Primary action: \`${p.primary}\`\n- Accent: \`${p.accent}\`\n- Card radius: \`${c.cardRadius}px\`\n- Control radius: \`${c.cardRadius}px\`\n- Body: Arial\n- Display: Georgia\n\n## Layout\n\n- Preserve the visible relationship between every supplied record and assigned container.\n- Keep operational windows separate from the main register.\n- Keep evidence, state, and the action distinct in the decision area.\n- Narrow layouts may reflow containers, but identifiers and concise relationship evidence remain atomic.\n\n## Content\n\n- State only supplied operational facts.\n- Unknown validation and institutional acceptance remain absent.\n- Use direct labels and concise status copy.\n`;
}

function prompt(c) {
  const unitCount=c.records.reduce((sum,[,units])=>sum+units.length,0);
  return `Improve the supplied ${c.domain} so operators can inspect assignments, operational windows, and the decision confidently on desktop and narrow screens.\n\nPreserve all ${c.records.length} record identifiers, all ${unitCount} assigned container identifiers and their exact assignments, all ${c.windows.length} supplied windows, the three review views, the note toggle, the reviewer form, and all stated summary evidence. Do not invent ${c.unknowns.join(", ")}. Use the existing DESIGN.md as ground truth.\n\nFinish the implementation in \`index.html\`, exercise the supplied controls and form, and verify the same route at desktop, 390px, 320px, and 200% zoom-equivalent conditions. The record register, separate window strip, and separate decision are independent relationship carriers; all must remain visible and understandable without page-level horizontal overflow or broken atomic identifiers.\n`;
}

function baselineScorePath(c) {
  const root = c.id === "audio-archive-ingest-v0.1" ? `${baselineRoot}-audio-v2` : baselineRoot;
  return join(root,c.id,".benchmark/score.json");
}

function normalizeBaseline(c, score) {
  const failed = Object.entries(score.critical_gates).filter(([,pass])=>pass===false).map(([gate])=>gate).sort();
  if (JSON.stringify(failed) !== JSON.stringify(["accessibility","responsive"])) {
    throw new Error(`${c.id} baseline gates are not accessibility+responsive: ${failed.join(",")}`);
  }
  return {
    schema_version:"0.1",
    source:"provider-free raw-design-md objective evaluation",
    source_score_sha256:sha256(readFileSync(baselineScorePath(c))),
    methodology_epoch:score.methodology_epoch,
    task_id:c.id,
    variant_id:"raw-design-md",
    points:{...score.points,efficiency:undefined,ship_preference:undefined,final_total:undefined},
    critical_gates:score.critical_gates,
    failed_evidence:{
      responsive:["narrow viewport page-level overflow or protected text geometry failure","320px page-level overflow or protected text geometry failure","200% surrogate page-level overflow or protected text geometry failure"],
      accessibility:["serious color contrast on normal-size canvas guidance"],
    },
  };
}

for (const c of cases) {
  const root=join(tasksRoot,c.id);
  if (phase === "draft") {
    if (existsSync(root)) throw new Error(`refusing to overwrite existing task: ${c.id}`);
    mkdirSync(join(root,"starter"),{recursive:true});
    writeFileSync(join(root,"PROMPT.md"),prompt(c));
    writeFileSync(join(root,"starter","DESIGN.md"),design(c));
    writeFileSync(join(root,"starter","index.html"),html(c));
    writeFileSync(join(root,"task.json"),json(task(c,sourceContract(c))));
    console.log(`drafted ${c.id}`);
    continue;
  }
  const scorePath=baselineScorePath(c);
  if (!existsSync(scorePath)) throw new Error(`missing provider-free baseline: ${scorePath}`);
  const score=JSON.parse(readFileSync(scorePath,"utf8"));
  const evidenceBytes=json(normalizeBaseline(c,score));
  writeFileSync(join(root,"baseline-critical-gates.json"),evidenceBytes);
  writeFileSync(join(root,"task.json"),json(task(c,sourceContract(c,"0.2",sha256(evidenceBytes)))));
  console.log(`finalized ${c.id} baseline=${score.points.deterministic_total}/${score.points.deterministic_max}`);
}
