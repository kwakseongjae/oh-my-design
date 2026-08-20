#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, lstatSync, mkdirSync, readFileSync, readdirSync, readlinkSync, writeFileSync } from 'node:fs';
import { basename, dirname, isAbsolute, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, '../../..');
const argv = process.argv.slice(2);
const outputArg = argv[0] && !argv[0].startsWith('--')
  ? argv.shift()
  : '/private/tmp/omd-autopilot-clean-dir-canary-1.9.833';
const packageRootFlag = argv.indexOf('--package-root');
const packageRoot = packageRootFlag === -1 ? null : resolve(argv[packageRootFlag + 1] || '');
if (packageRootFlag !== -1 && (!argv[packageRootFlag + 1] || !isAbsolute(argv[packageRootFlag + 1]))) {
  throw new Error('--package-root requires an absolute extracted npm package root');
}
const outputRoot = resolve(outputArg);
const experimentId = basename(outputRoot);
if (existsSync(outputRoot)) throw new Error(`fresh output root required: ${outputRoot}`);
const workspace = join(outputRoot, 'workspace');
const runDir = join(workspace, '.omd/runs/run-greenfield-family-planner');
mkdirSync(join(runDir, 'system'), { recursive: true });

let runtimeScriptsRoot = join(repoRoot, 'scripts');
let packagedCli = null;
if (packageRoot) {
  packagedCli = join(packageRoot, 'dist/bin/oh-my-design.js');
  if (!existsSync(packagedCli) || !existsSync(join(packageRoot, 'skills/omd-autopilot/SKILL.md'))) {
    throw new Error(`extracted npm package is missing Autopilot runtime assets: ${packageRoot}`);
  }
  const install = spawnSync(process.execPath, [
    packagedCli,
    'install-skills',
    '--dir', workspace,
    '--agent', 'codex',
    '--all',
  ], { cwd: workspace, encoding: 'utf8' });
  if (install.status !== 0) {
    throw new Error(`packaged Codex install failed\n${install.stderr || install.stdout}`);
  }
  runtimeScriptsRoot = join(workspace, '.codex/data/scripts');
}

const prompt = 'From scratch, create a single screen family meal planner for parents. Establish a project-owned DESIGN.md. Primary CTA: Get started. Use a calm, warm editorial style. Do not invent prices, testimonials, or user facts.';
writeFileSync(join(runDir, 'task.md'), `# Autopilot Task\n\n${prompt}\n`);
writeFileSync(join(runDir, 'ctx-prime.json'), `${JSON.stringify({
  surface_inventory: [], audience_hypothesis: [], wow_moment_candidates: [],
}, null, 2)}\n`);

function run(script, args = []) {
  const executable = packageRoot
    ? join(runtimeScriptsRoot, basename(script))
    : join(repoRoot, script);
  const result = spawnSync(process.execPath, [executable, ...args], { cwd: workspace, encoding: 'utf8' });
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

const graph = {
  $schema: 'https://oh-my-design.kr/schema/design-system-graph-v2.schema.json',
  schema_version: '2.0.0',
  identity: { name: 'Hearth', kind: 'project-system', scope: 'Single-screen family meal planning surface for parents.' },
  experience: {
    summary: 'A calm weekly meal-planning surface that helps parents prepare and review a household plan.',
    primary_tasks: ['Start a weekly meal plan', 'Add a named meal', 'Review planning feedback'],
    design_direction: ['Calm', 'Warm', 'Editorial', 'Evidence-led'],
    principles: ['Keep unknown days visibly open', 'Show state and consequence before commitment'],
    avoid: ['Fabricated household details', 'Decorative urgency', 'Unsupported business claims'],
  },
  foundations: {
    tokens: {
      'color.canvas': { $type: 'color', $value: '#F4F0E7', $description: 'Warm page canvas' },
      'color.surface': { $type: 'color', $value: '#FFFDF8', $description: 'Primary content surface' },
      'color.text.strong': { $type: 'color', $value: '#17352B', $description: 'Primary reading text' },
      'color.text.muted': { $type: 'color', $value: '#5D6D65', $description: 'Secondary reading text' },
      'color.action.primary': { $type: 'color', $value: '#2F684F', $description: 'Primary action emphasis' },
      'color.action.text': { $type: 'color', $value: '#FFFFFF', $description: 'Text on primary action' },
      'color.focus': { $type: 'color', $value: '#E7A95A', $description: 'Focus indicator accent' },
      'space.control': { $type: 'dimension', $value: '8px' },
      'space.group': { $type: 'dimension', $value: '16px' },
      'space.section': { $type: 'dimension', $value: '32px' },
      'motion.feedback': { $type: 'duration', $value: '160ms' },
    },
    rules: ['Use action color only for actionable emphasis.', 'Never communicate status with color alone.'],
    contrast_pairs: [
      { foreground: 'color.text.strong', background: 'color.surface', minimum_ratio: 4.5 },
      { foreground: 'color.action.text', background: 'color.action.primary', minimum_ratio: 4.5 },
    ],
    reduced_motion: true,
  },
  typography_assets: {
    roles: [
      { id: 'display', usage: 'Primary page thesis', family: 'ui-sans-serif, system-ui, sans-serif', size: '48px', weight: 700, line_height: '52px' },
      { id: 'heading', usage: 'Section hierarchy', family: 'ui-sans-serif, system-ui, sans-serif', size: '28px', weight: 700, line_height: '34px' },
      { id: 'body', usage: 'Product reading text', family: 'ui-sans-serif, system-ui, sans-serif', size: '16px', weight: 400, line_height: '24px' },
    ],
    assets: [],
    rules: ['Do not render an unverified substitute as a project font or asset.'],
  },
  components_states: {
    components: [{
      id: 'primary-action', anatomy: ['label', 'focus indicator', 'progress state'], variants: ['filled'],
      states: ['default', 'hover', 'focus-visible', 'disabled', 'loading', 'error', 'success'],
      token_refs: ['color.action.primary', 'color.action.text', 'color.focus', 'space.control'],
      semantics: 'Starts or commits the current explicit task with visible feedback.',
      interaction: {
        kind: 'interactive',
        state_applicability: Object.fromEntries(
          ['default', 'hover', 'focus-visible', 'disabled', 'loading', 'error', 'success']
            .map((state) => [state, { applicability: 'applicable' }]),
        ),
      },
    }, {
      id: 'meal-entry-dialog', anatomy: ['heading', 'labelled field', 'error', 'cancel action', 'save action'], variants: ['modal'],
      states: ['default', 'focus-visible', 'error', 'success'],
      token_refs: ['color.surface', 'color.text.strong', 'color.action.primary', 'space.group'],
      semantics: 'Collects one user-provided meal name without inferring household facts.',
      interaction: {
        kind: 'interactive',
        state_applicability: {
          default: { applicability: 'applicable' },
          hover: { applicability: 'not-applicable', reason: 'Pointer hover belongs to the dialog controls, not the dialog container.' },
          'focus-visible': { applicability: 'applicable' },
          disabled: { applicability: 'not-applicable', reason: 'The dialog itself is not a disableable control.' },
          loading: { applicability: 'not-applicable', reason: 'Submission feedback is owned by the save action.' },
          error: { applicability: 'applicable' },
          success: { applicability: 'applicable' },
        },
      },
    }],
    rules: ['Loading prevents duplicate submission.', 'Errors identify the affected control and preserve recovery.'],
  },
  layout_platforms: {
    minimum_width_px: 320, reflow_zoom_percent: 200,
    rules: ['Preserve reading and task order.', 'Keep primary touch targets at least 44px tall.'],
    platforms: [{ id: 'web', rules: ['Stack the rail and planning grid when columns no longer fit.'] }],
  },
  content_locales: {
    voice: ['Calm', 'Direct', 'Specific', 'Non-assumptive'],
    terminology: { primary_action: 'Get started', meal_action: 'Add meal' },
    locales: [
      { locale: 'en', status: 'supported', rules: ['Use concise verb-first actions.'] },
      { locale: 'ko', status: 'planned', rules: ['Review spacing and natural product register before promotion.'] },
      { locale: 'ja', status: 'planned', rules: ['Review line breaks and natural product register before promotion.'] },
      { locale: 'zh-CN', status: 'planned', rules: ['Review terminology and expansion before promotion.'] },
      { locale: 'zh-TW', status: 'planned', rules: ['Review Taiwan product terminology before promotion.'] },
    ],
  },
  governance: {
    priority: ['Direct scoped user instruction', 'Repository facts', 'This project system', 'Verified inspiration'],
    unknown_policy: 'absent-at-smallest-unresolved-boundary',
    change_policy: ['Update graph before projection.', 'Regenerate and validate the Core bundle atomically.'],
    decisions: [
      { path: 'identity.name', source_class: 'agent-proposed-greenfield-decision', value: 'Hearth', evidence: ['DESIGN.md#1-experience'] },
      { path: 'identity.scope', source_class: 'prompt-fact', value: 'Single-screen family meal planning surface for parents.', evidence: ['.omd/runs/run-greenfield-family-planner/task.md'] },
      { path: 'foundations.tokens.color.action.primary.$value', source_class: 'agent-proposed-greenfield-decision', value: '#2F684F', evidence: ['DESIGN.md#2-foundations'] },
      { path: '/content_locales/terminology/household-name', source_class: 'unresolved', evidence: [] },
    ],
  },
};
const provenance = {
  schema_version: '2.0.0',
  decisions: graph.governance.decisions,
};
const coreSections = {
  experience: '1-experience',
  foundations: '2-foundations',
  'typography-assets': '3-typography-assets',
  'components-states': '4-components-states',
  'layout-platforms': '5-layout-platforms',
  'content-locales': '6-content-locales',
  governance: '7-governance',
};
const coreChecks = [
  'portable_core_structure', 'bound_system_authority', 'token_reference_closure', 'contrast',
  'component_state_coverage', 'responsive_320_200', 'reduced_motion', 'assets_fonts_licenses',
  'implementation_contract_complete', 'unknown_absence', 'opaque_extension_preservation',
];
const coverage = {
  schema_version: '2.0.0',
  groups: Object.fromEntries(Object.entries(coreSections).map(([id, anchor]) => [id, {
    status: 'covered', evidence: [`DESIGN.md#${anchor}`],
  }])),
  checks: Object.fromEntries(coreChecks.map((id) => [id, { pass: true, method: 'controller-computed-system-graph-v2' }])),
};
const draftRoot = join(runDir, 'core-v2-draft');
const reviewRoot = join(runDir, 'core-v2-review');
const ownerReviewReceipt = join(runDir, 'core-v2-owner-review.json');
const compiledRoot = join(outputRoot, 'core-v2-compiled-package');
const checkpointReceipt = join(runDir, 'checkpoints/core-v2-project-adoption.json');
const projectOwnerIdentity = 'autopilot-clean-dir-project-owner';
mkdirSync(draftRoot, { recursive: true });
mkdirSync(dirname(checkpointReceipt), { recursive: true });
writeFileSync(join(draftRoot, 'graph.json'), `${JSON.stringify(graph, null, 2)}\n`);
writeFileSync(join(draftRoot, 'provenance.json'), `${JSON.stringify(provenance, null, 2)}\n`);
writeFileSync(join(draftRoot, 'coverage.json'), `${JSON.stringify(coverage, null, 2)}\n`);

run('scripts/prepare-design-md-core-review.cjs', [
  join(draftRoot, 'graph.json'),
  '--provenance', join(draftRoot, 'provenance.json'),
  '--coverage', join(draftRoot, 'coverage.json'),
  '--out-dir', reviewRoot,
]);
run('scripts/prepare-design-md-core-review.cjs', [
  '--approve', join(reviewRoot, 'review-request.json'),
  '--reviewer', projectOwnerIdentity,
  '--out', ownerReviewReceipt,
  '--authority-transition-approved',
]);
run('scripts/compile-design-md-core.cjs', [
  join(reviewRoot, 'input-graph.json'),
  '--provenance', join(reviewRoot, 'provenance.json'),
  '--coverage', join(reviewRoot, 'coverage.json'),
  '--review-receipt', ownerReviewReceipt,
  '--out-dir', compiledRoot,
  '--adopt',
]);
run('scripts/adopt-design-md-core.cjs', [
  compiledRoot,
  '--prepare-checkpoint', checkpointReceipt,
  '--reviewer', projectOwnerIdentity,
  '--authority-transition-approved',
]);
run('scripts/adopt-design-md-core.cjs', [
  compiledRoot,
  '--project-root', workspace,
  '--checkpoint-receipt', checkpointReceipt,
]);
const designSha = shaFile(join(workspace, 'DESIGN.md'));
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
let doctorState = null;
if (packagedCli) {
  const doctor = spawnSync(process.execPath, [
    packagedCli,
    'doctor',
    '--dir', workspace,
    '--json',
    '--self-test',
  ], { cwd: workspace, encoding: 'utf8' });
  if (doctor.status !== 0) throw new Error(`packaged doctor failed\n${doctor.stderr || doctor.stdout}`);
  const report = JSON.parse(doctor.stdout);
  const codex = report.channels.find((channel) => channel.id === 'codex');
  if (report.state !== 'ready' || !codex?.ready) {
    throw new Error(`packaged Codex install is not ready: ${doctor.stdout}`);
  }
  doctorState = report.state;
}
const summary = {
  schema_version: '0.1', experiment_id: experimentId,
  execution_mode: 'provider-zero-valid-oracle', provider_calls: 0, model_calls: 0, cursor_calls: 0,
  distribution_source: packageRoot ? 'extracted-npm-package' : 'source-tree',
  doctor_state: doctorState,
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
