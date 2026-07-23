# Locale and evidence expansion smoke — 1.9.23

Locked before workspace preparation or provider generation on 2026-07-23.

## Question

With exact model/runtime/task/evaluator parity, can the reviewed
`omd:locale-adapter` → `omd:humanize` skill stack complete the new five-locale
handoff task without changing protected facts, importing terminology across
locales, fabricating evidence, or regressing responsive and accessibility
behavior?

This is a two-cell execution-path calibration, not a repeated Skill Lift
experiment. It may unlock a fresh multi-task locale matrix. It cannot support a
public best-skill, frontier, model, global-rank, or statistically significant
lift claim.

## Frozen task and evaluator

- Task: `locale-cli-handoff-v0.1`
- Track: Repair
- Locales and order: KO, EN, JA, ZH-CN, ZH-TW
- Initial locale: KO
- Protected command: `npx northstar-ui@1.4 setup --agent claude-code`
- Protected facts: 12 checked reference packs, 3 local workflows, `DESIGN.md`
- Required journeys: five tabs, one visible associated panel, locale-specific
  content, command copy, changed status, restored KO state
- Viewports: 1440×1000, 390×844, 320×720, and 640×900 at 200% CSS-zoom surrogate
- Critical gates: task contract, state journey, responsive, accessibility,
  design grounding, Evidence & Unknown
- Accessibility: axe serious/critical zero and complete keyboard traversal
- Unknown claims: zero protected unsupported claims or proof structures
- Evaluator adapter: `locale-switch-v1`
- Source/evaluator/skill-stack basis: `07ac960`

The calibrated known-good implementation scores 85/85 with all six critical
gates. The seeded starter scores 63/85 and specifically fails locale content,
responsive geometry, accessibility, and evidence honesty. Those calibration
artifacts are not run cells and do not enter the denominator.

## Frozen matrix

- Systems: `raw-design-md` and `omd-locale-handoff`
- Runtime: Claude Code 2.1.217 or newer, recorded per run
- Parent model/effort: exact `claude-opus-4-8` / `xhigh`
- Task: one
- Trials: one per system; two fresh cells
- Timeout: 900 seconds per cell
- Network: disabled by task and sandbox contract
- Hooks: disabled
- Agent tool: disabled
- Third-party installer: not executed
- Output root: `/tmp/u1923`
- Schedule: `RUN-MATRIX.json`

The candidate receives the same starter, prompt, DESIGN.md, model, effort,
timeout, browser evaluator, and no-network sandbox as the control. Its only
delta is the reviewed local installation and explicit sequential activation of
`$omd:locale-adapter` followed by `$omd:humanize` in VERIFY mode.

## Validity and stop policy

A cell is valid only when provider and child exit zero, no timeout occurs, a
final response and product diff exist, exact model attribution holds, the
frozen evaluator completes, and infrastructure/sandbox/cwd errors are zero.
Any auth, quota, model, process, timeout, final, evaluator, or export failure
stops immediately. There are no retries, resumes, workspace reuse, or manual
edits after generation. Product-quality failures are retained and do not stop
the second cell.

## Calibration decision

`calibration_complete` requires both cells valid and the candidate to pass all
six critical gates, preserve all four protected literals in all five locales,
pass every required and forbidden locale pattern, leave unsupported claims at
zero, and produce no serious/critical axe finding. Candidate objective score
must be no lower than the control.

Any failure is retained as `calibration_failed` or `inconclusive` under the
frozen stop policy. Even a full pass only unlocks a fresh repeated locale
matrix; it does not establish general locale lift.
