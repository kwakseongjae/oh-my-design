#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, lstatSync, mkdirSync, readFileSync, readdirSync, readlinkSync, writeFileSync } from 'node:fs';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, '../../..');
const outputRoot = resolve(process.argv[2] || '/private/tmp/omd-autopilot-clean-dir-canary-1.9.833');
const experimentId = basename(outputRoot);
if (existsSync(outputRoot)) throw new Error(`fresh output root required: ${outputRoot}`);
const workspace = join(outputRoot, 'workspace');
const runDir = join(workspace, '.omd/runs/run-greenfield-family-planner');
mkdirSync(join(runDir, 'system'), { recursive: true });

const prompt = 'From scratch, create a single screen family meal planner for parents. Establish a project-owned DESIGN.md. Primary CTA: Get started. Use a calm, warm editorial style. Do not invent prices, testimonials, or user facts.';
writeFileSync(join(runDir, 'task.md'), `# Autopilot Task\n\n${prompt}\n`);
writeFileSync(join(runDir, 'ctx-prime.json'), `${JSON.stringify({
  surface_inventory: [], audience_hypothesis: [], wow_moment_candidates: [],
}, null, 2)}\n`);

function run(script, args = []) {
  const result = spawnSync(process.execPath, [join(repoRoot, script), ...args], { cwd: workspace, encoding: 'utf8' });
  if (result.status !== 0) throw new Error(`${script} failed\n${result.stderr || result.stdout}`);
  return result;
}

function shaFile(file) {
  return createHash('sha256').update(readFileSync(file)).digest('hex');
}

function sha(value) {
  return createHash('sha256').update(value).digest('hex');
}

function productTree(root) {
  const files = [];
  function visit(dir) {
    for (const entry of readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      const absolute = join(dir, entry.name);
      const relative = absolute.slice(root.length + 1).split('\\').join('/');
      if (['.git', '.omd', 'node_modules', 'dist', 'coverage'].includes(relative.split('/')[0])) continue;
      const stat = lstatSync(absolute);
      if (stat.isSymbolicLink()) files.push({ path: relative, mode: 'symlink', sha256: sha(readlinkSync(absolute)) });
      else if (entry.isDirectory()) visit(absolute);
      else if (entry.isFile()) files.push({ path: relative, mode: (stat.mode & 0o111) ? '100755' : '100644', sha256: shaFile(absolute) });
    }
  }
  visit(root);
  return { files, sha256: sha(JSON.stringify(files)) };
}

const requiredStates = ['default', 'loading', 'empty', 'error', 'success', 'disabled'];
const requiredViewports = ['1440x900', '390x844', '320x720', '720x450-reflow-200pct'];
const requiredQualityChecks = [
  'functionality', 'task-journey', 'responsive-1440', 'responsive-390', 'responsive-320',
  'reflow-200pct', 'keyboard', 'accessibility', 'evidence-honesty', 'design-conformance',
];

run('scripts/autopilot-mission.cjs', [workspace, runDir, 'bootstrap']);
run('scripts/design-council-prime.cjs', [workspace, runDir]);
run('scripts/design-council-handoff.cjs', [workspace, runDir, 'prepare']);
const handoff = JSON.parse(readFileSync(join(runDir, 'handoff/.handoff.json'), 'utf8'));
if (handoff.state !== 'PROPOSE_PLAN' || handoff.questions_file || handoff.blocking_items?.length) {
  throw new Error(`fully authorized prompt must reach PROPOSE_PLAN without questions: ${JSON.stringify(handoff)}`);
}
run('scripts/autopilot-council-plan.cjs', [workspace, runDir]);
const councilPlan = JSON.parse(readFileSync(join(runDir, 'council/plan.json'), 'utf8'));
for (const lane of councilPlan.lanes) {
  const output = join(runDir, lane.output);
  mkdirSync(dirname(output), { recursive: true });
  writeFileSync(output, `${JSON.stringify({
    schema_version: '0.1', lane_id: lane.lane_id, role: lane.role, status: 'complete',
    findings: [], proposals: [], unresolved: [], product_files_written: 0, design_md_written: false,
  }, null, 2)}\n`);
}
run('scripts/autopilot-council-reconcile.cjs', [workspace, runDir]);
run('scripts/autopilot-mission.cjs', [workspace, runDir, 'advance']);
run('scripts/design-system-plan.cjs', [workspace, runDir]);

const designMd = `# Hearth — Project Design System

## 1. Product scope

Hearth is a proposed single-screen family meal-planning surface for parents. Product-specific family details remain user-owned and are not inferred.

## 2. Color and contrast

- Canvas: \`#F4F0E7\`
- Surface: \`#FFFDF8\`
- Ink: \`#17352B\`
- Muted ink: \`#5D6D65\`
- Action: \`#2F684F\` with white text; maintain WCAG AA contrast.
- Warm accent: \`#E7A95A\`; never use it alone to communicate state.

## 3. Typography

Use the local UI sans-serif stack \`ui-sans-serif, system-ui, sans-serif\`. No external or brand font is claimed. Display 48/52/700, heading 28/34/700, body 16/24/400, label 13/18/650.

## 4. Spacing, density, and layout

Use a 4px base with 8, 12, 16, 24, 32, 48, and 64px steps. Desktop uses a 240px rail and fluid content. Content width is capped at 1280px.

## 5. Responsive behavior

At 760px the rail becomes a top bar and the planning grid becomes one column. At 320px controls remain at least 44px tall. At 200% zoom, content reflows without horizontal document overflow.

## 6. Component states

Buttons, navigation items, meal cards, empty slots, dialog fields, and toast feedback define default, hover, focus-visible, disabled, loading, error, and success behavior. Empty slots remain explicit actions rather than fabricated meals.

## 7. Motion

Use 160ms opacity and transform feedback only. Under \`prefers-reduced-motion: reduce\`, remove nonessential movement.

## 8. Voice and locale

Calm, direct, and domestic without assuming family structure. Keep actions verb-first. Layout must tolerate Korean, English, Japanese, Simplified Chinese, and Traditional Chinese expansion.

## 9. Assets, fonts, and licenses

The calibration surface uses CSS geometry and text only. No external imagery, font download, logo, or third-party asset is claimed.

## 10. Provenance and unresolved

Visual tokens are agent-proposed greenfield decisions authorized by the prompt. Household names, dietary needs, schedules, saved meals, prices, testimonials, and business claims are unresolved and absent.

## 11. Brand narrative

[FILL IN]

## 12. Principles

[FILL IN]

## 13. Personas

[FILL IN]
`;
writeFileSync(join(workspace, 'DESIGN.md'), designMd);
const designSha = shaFile(join(workspace, 'DESIGN.md'));
const provenance = {
  schema_version: '0.1', design_md_sha256: designSha,
  decisions: [
    { path: 'product.scope', source_class: 'prompt-fact', value: 'single-screen family meal planner for parents', evidence: ['task.md'] },
    { path: 'tokens.color.action', source_class: 'agent-proposed-greenfield-decision', value: '#2F684F', evidence: ['DESIGN.md#2-color-and-contrast'] },
    { path: 'tokens.typography.family', source_class: 'agent-proposed-greenfield-decision', value: 'ui-sans-serif, system-ui, sans-serif', evidence: ['DESIGN.md#3-typography'] },
    { path: 'product.household_details', source_class: 'unresolved', value: null, evidence: [] },
  ],
};
const groups = [
  'product-scope', 'color-contrast', 'typography', 'spacing-density-layout', 'responsive',
  'component-states', 'motion-reduced-motion', 'voice-locale', 'assets-fonts-licenses', 'provenance-unresolved',
];
const checks = [
  'token_reference_closure', 'contrast', 'component_state_coverage', 'responsive_320_200',
  'reduced_motion', 'assets_fonts_licenses', 'code_conformance', 'unknown_absence', 'sections_11_13_honesty',
];
writeFileSync(join(runDir, 'system/provenance.json'), `${JSON.stringify(provenance, null, 2)}\n`);
writeFileSync(join(runDir, 'system/coverage.json'), `${JSON.stringify({
  schema_version: '0.1', design_md_sha256: designSha,
  groups: Object.fromEntries(groups.map((id) => [id, { status: 'covered', evidence: [`DESIGN.md#${id}`] }])),
  checks: Object.fromEntries(checks.map((id) => [id, { pass: true, evidence: [`oracle/${id}`] }])),
}, null, 2)}\n`);
run('scripts/validate-project-design-system.cjs', [workspace, runDir]);
run('scripts/autopilot-mission.cjs', [workspace, runDir, 'advance']);
const acceptance = {
  schema_version: '0.1', status: 'locked', implementation_owner: 'main-agent', route: '/',
  mission_sha256: shaFile(join(runDir, 'mission.json')),
  task_sha256: shaFile(join(runDir, 'task.md')),
  design_system_decision_sha256: shaFile(join(runDir, 'design-system-decision.json')),
  task_requirements: [
    {
      id: 'family-planner-journey', kind: 'journey',
      source_quote: 'From scratch, create a single screen family meal planner for parents.',
      acceptance: 'Parents can start and complete the meal-entry journey on the real route.',
    },
    {
      id: 'primary-action', kind: 'constraint', source_quote: 'Primary CTA: Get started.',
      acceptance: 'The initial surface exposes one operable Get started primary action.',
    },
    {
      id: 'protected-unknowns', kind: 'unknown',
      source_quote: 'Do not invent prices, testimonials, or user facts.',
      acceptance: 'Prices, testimonials, and user facts remain absent unless explicitly supplied.',
    },
  ],
  required_states: requiredStates,
  viewports: requiredViewports,
  quality_checks: requiredQualityChecks,
};
writeFileSync(join(runDir, 'acceptance-plan.json'), `${JSON.stringify(acceptance, null, 2)}\n`);
run('scripts/autopilot-mission.cjs', [workspace, runDir, 'advance']);

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Hearth — family meal plan</title><style>
:root{--canvas:#f4f0e7;--surface:#fffdf8;--ink:#17352b;--muted:#5d6d65;--action:#2f684f;--warm:#e7a95a;--line:#d9d3c8;font-family:ui-sans-serif,system-ui,sans-serif;color:var(--ink);background:var(--canvas)}*{box-sizing:border-box}body{margin:0;min-width:0;background:var(--canvas)}button{font:inherit}.shell{min-height:100vh;display:grid;grid-template-columns:240px minmax(0,1fr)}aside{padding:32px 24px;border-right:1px solid var(--line);display:flex;flex-direction:column;gap:40px}.brand{font-weight:800;font-size:22px;letter-spacing:-.03em}.nav{display:grid;gap:8px}.nav a{min-height:44px;display:flex;align-items:center;color:var(--muted);text-decoration:none;padding:12px;border-radius:10px}.nav a[aria-current=page]{color:var(--ink);background:rgba(47,104,79,.1);font-weight:700}main{width:min(100%,1280px);padding:48px clamp(20px,5vw,72px);margin:auto}.eyebrow{font-size:13px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--action)}h1{font-size:clamp(38px,6vw,64px);line-height:1.02;letter-spacing:-.055em;max-width:780px;margin:12px 0 20px}.lead{font-size:18px;line-height:1.6;color:var(--muted);max-width:650px}.top{display:flex;align-items:flex-start;justify-content:space-between;gap:24px}.primary{min-height:48px;border:0;border-radius:12px;padding:0 20px;background:var(--action);color:#fff;font-weight:750;box-shadow:0 8px 20px rgba(23,53,43,.15)}button:focus-visible,a:focus-visible{outline:3px solid var(--warm);outline-offset:3px}.week{margin-top:48px;display:grid;grid-template-columns:repeat(5,minmax(150px,1fr));gap:12px;overflow-x:auto;padding-bottom:8px}.day{min-height:250px;background:var(--surface);border:1px solid var(--line);border-radius:16px;padding:18px;display:flex;flex-direction:column}.day h2{font-size:15px;margin:0 0 16px}.meal{padding:14px;border-radius:12px;background:#edf2ed;margin-bottom:10px}.meal strong{display:block;font-size:15px}.meal span{display:block;color:var(--muted);font-size:13px;margin-top:4px}.empty{margin-top:auto;min-height:64px;border:1px dashed #a9b3ac;background:transparent;border-radius:12px;color:var(--action);font-weight:700}.summary{margin-top:24px;display:grid;grid-template-columns:1.4fr 1fr;gap:16px}.panel{background:var(--surface);border:1px solid var(--line);border-radius:16px;padding:24px}.panel h2{margin:0 0 16px;font-size:20px}.list{display:grid;gap:12px}.row{display:flex;justify-content:space-between;gap:16px;padding-bottom:12px;border-bottom:1px solid var(--line)}.row:last-child{border-bottom:0;padding-bottom:0}.muted{color:var(--muted)}dialog{border:0;border-radius:18px;padding:0;width:min(92vw,480px);background:var(--surface);color:var(--ink);box-shadow:0 28px 80px rgba(23,53,43,.25)}dialog::backdrop{background:rgba(23,53,43,.45)}.dialog-body{padding:28px}.dialog-actions{display:flex;justify-content:flex-end;gap:10px;margin-top:24px}.secondary{min-height:44px;border:1px solid var(--line);border-radius:10px;background:transparent;padding:0 16px;color:var(--ink)}label{display:grid;gap:8px;font-weight:700}input{min-height:46px;border:1px solid #9ea9a2;border-radius:10px;padding:0 12px;font:inherit;background:#fff}.error{min-height:20px;color:#a4262c;font-size:13px}.toast{position:fixed;right:24px;bottom:24px;background:var(--ink);color:#fff;padding:14px 18px;border-radius:10px}.toast[hidden]{display:none}
@media(max-width:760px){.shell{display:block}aside{padding:18px 20px;border-right:0;border-bottom:1px solid var(--line);flex-direction:row;align-items:center;justify-content:space-between}.nav{display:flex}.nav a:not([aria-current=page]){display:none}main{padding:32px 20px}.top{display:block}.top .primary{margin-top:20px;width:100%}.week{grid-template-columns:1fr;overflow:visible}.day{min-height:190px}.summary{grid-template-columns:1fr}}
@media(max-width:340px){main{padding-inline:14px}.day,.panel{border-radius:12px;padding:16px}}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{scroll-behavior:auto!important;transition:none!important;animation:none!important}}
</style></head><body><div class="shell"><aside><div class="brand">Hearth</div><nav class="nav" aria-label="Primary"><a href="#plan" aria-current="page">This week</a><a href="#groceries">Groceries</a></nav></aside><main id="plan"><div class="top"><header><div class="eyebrow">Family meal plan</div><h1>A calmer week starts at the table.</h1><p class="lead">Plan only what you know. Empty days stay open until your household chooses what fits.</p></header><button class="primary" id="start" type="button">Get started</button></div><section class="week" aria-label="Week plan"><article class="day"><h2>Monday</h2><div class="meal"><strong>Garden pasta</strong><span>Dinner · 30 min</span></div><button class="empty" type="button">Add another meal</button></article><article class="day"><h2>Tuesday</h2><button class="empty" type="button">Add meal</button></article><article class="day"><h2>Wednesday</h2><div class="meal"><strong>Soup and toast</strong><span>Dinner · 25 min</span></div><button class="empty" type="button">Add another meal</button></article><article class="day"><h2>Thursday</h2><button class="empty" type="button">Add meal</button></article><article class="day"><h2>Friday</h2><button class="empty" type="button">Add meal</button></article></section><section class="summary"><div class="panel" id="groceries"><h2>Groceries to review</h2><div class="list"><div class="row"><span>Fresh produce</span><strong>4 items</strong></div><div class="row"><span>Pantry</span><strong>3 items</strong></div></div></div><div class="panel"><h2>Planning note</h2><p class="muted">Dietary needs and household schedules stay unset until you add them.</p></div></section></main></div><dialog id="meal-dialog" aria-labelledby="dialog-title"><form class="dialog-body" method="dialog" novalidate><h2 id="dialog-title">Add a meal</h2><label>Meal name<input id="meal-name" autocomplete="off" required aria-describedby="meal-error"></label><div class="error" id="meal-error" aria-live="polite"></div><div class="dialog-actions"><button class="secondary" value="cancel">Cancel</button><button class="primary" id="save" value="default">Save meal</button></div></form></dialog><div class="toast" id="toast" role="status" hidden>Meal added to the plan.</div><script>const dialog=document.querySelector('#meal-dialog');const input=document.querySelector('#meal-name');const error=document.querySelector('#meal-error');const toast=document.querySelector('#toast');document.querySelectorAll('#start,.empty').forEach(button=>button.addEventListener('click',()=>{error.textContent='';dialog.showModal();input.focus()}));document.querySelector('#save').addEventListener('click',event=>{if(!input.value.trim()){event.preventDefault();error.textContent='Enter a meal name.';input.focus();return}toast.hidden=false;setTimeout(()=>toast.hidden=true,2400)});</script></body></html>`;
const initialHtml = html.replace('aria-live="polite"', 'data-repair-target="missing-live-region"');
if (initialHtml === html) throw new Error('repair calibration mutation was not applied');
writeFileSync(join(workspace, 'index.html'), initialHtml);
writeFileSync(join(runDir, 'implementation.json'), `${JSON.stringify({
  schema_version: '0.1', owner: 'main-agent', route: '/', files: ['index.html'], design_md_sha256: designSha,
}, null, 2)}\n`);
const finalChecks = {
  real_route_present: existsSync(join(workspace, 'index.html')),
  design_system_present: existsSync(join(workspace, 'DESIGN.md')),
  semantic_main: html.includes('<main id="plan">'),
  dialog_and_validation: html.includes('<dialog') && html.includes('Enter a meal name.'),
  keyboard_focus: html.includes(':focus-visible'),
  responsive_320: html.includes('@media(max-width:340px)'),
  reduced_motion: html.includes('prefers-reduced-motion:reduce'),
  unknowns_absent: !html.includes('$') && !html.includes('testimonial'),
};
if (!Object.values(finalChecks).every(Boolean)) throw new Error(`oracle final checks failed: ${JSON.stringify(finalChecks)}`);
const requirementResults = acceptance.task_requirements.map((requirement) => ({
  id: requirement.id, pass: true, evidence: [`controller:oracle/${requirement.id}`],
}));
const checkEvidence = {
  functionality: ['controller:oracle/dialog-and-validation'],
  'task-journey': ['controller:oracle/get-started-to-feedback'],
  'responsive-1440': ['controller:oracle/desktop-layout'],
  'responsive-390': ['controller:oracle/mobile-layout'],
  'responsive-320': ['controller:oracle/compact-layout'],
  'reflow-200pct': ['controller:oracle/reflow-contract'],
  keyboard: ['controller:oracle/focus-visible-and-native-controls'],
  accessibility: ['controller:oracle/semantic-main-dialog-live-status'],
  'evidence-honesty': ['controller:oracle/protected-unknown-absence'],
  'design-conformance': ['controller:oracle/design-token-conformance'],
};
function writeAtomicProof(repairRound, pass, failedCheck = null) {
  writeFileSync(join(runDir, 'proof.json'), `${JSON.stringify({
    schema_version: '0.2', implementation_owner: 'main-agent', route: '/', pass, repair_round: repairRound,
    mission_sha256: shaFile(join(runDir, 'mission.json')),
    acceptance_plan_sha256: shaFile(join(runDir, 'acceptance-plan.json')),
    product_build_admission_sha256: shaFile(join(runDir, 'product-build-admission.json')),
    product_tree_sha256: productTree(workspace).sha256,
    requirement_results: requirementResults,
    checks: requiredQualityChecks.map((id) => ({
      id, pass: id !== failedCheck, evidence: id === failedCheck ? ['controller:oracle/missing-live-region'] : checkEvidence[id],
    })),
    design_md_sha256: designSha, product_sha256: shaFile(join(workspace, 'index.html')),
  }, null, 2)}\n`);
}
writeAtomicProof(0, false, 'accessibility');
run('scripts/autopilot-mission.cjs', [workspace, runDir, 'advance']);
const repairState = JSON.parse(readFileSync(join(runDir, 'mission-state.json'), 'utf8'));
if (repairState.state !== 'BOUNDED_REVISION') throw new Error(`expected BOUNDED_REVISION, received ${repairState.state}`);
writeFileSync(join(workspace, 'index.html'), html);
writeAtomicProof(1, true);
run('scripts/autopilot-mission.cjs', [workspace, runDir, 'advance']);
const finalState = JSON.parse(readFileSync(join(runDir, 'mission-state.json'), 'utf8'));
if (finalState.state !== 'HANDOFF') throw new Error(`expected HANDOFF, received ${finalState.state}`);
const summary = {
  schema_version: '0.1', experiment_id: experimentId,
  execution_mode: 'provider-zero-valid-oracle', provider_calls: 0, model_calls: 0, cursor_calls: 0,
  prompt, question_batches: 0, system_strategy: 'establish', final_state: finalState.state,
  design_md_sha256: designSha, product_sha256: shaFile(join(workspace, 'index.html')),
  system_proof_sha256: shaFile(join(runDir, 'system/proof.json')),
  council_plan_sha256: shaFile(join(runDir, 'council/plan.json')),
  council_reconciled_sha256: shaFile(join(runDir, 'council/reconciled.json')),
  acceptance_plan_sha256: shaFile(join(runDir, 'acceptance-plan.json')),
  product_build_admission_sha256: shaFile(join(runDir, 'product-build-admission.json')),
  council_lane_count: councilPlan.lane_count,
  repair_rounds_used: 1,
  repair_receipt_sha256: shaFile(join(runDir, 'repairs/round-0.json')),
  mission_sha256: shaFile(join(runDir, 'mission.json')), checks: finalChecks,
  claim_boundary: 'calibration-oracle-not-model-or-skill-performance-evidence',
};
writeFileSync(join(outputRoot, 'SUMMARY.json'), `${JSON.stringify(summary, null, 2)}\n`);
process.stdout.write(`${JSON.stringify(summary, null, 2)}\n`);
