# Cursor fixed-model Skill Lift — 1.9.45

Status: **EXECUTED; nine cells complete; bounded candidate rejected under the
frozen schema `0.4` evaluator**.

This is the operational replacement for 1.9.44. The prior root is outside this
denominator: it stopped before evaluation because schema `0.3` was routed
through the schema `0.1` model attribution check.

The only controller delta is commit
`c726741`: schema `0.2` and `0.3` now share
`runtimeAttributionStopReason`. A fixture proves the exact
`cursor-grok-4.5-high` → `Cursor Grok 4.5 High` display-label and camelCase
usage path. The product task, starter, Raw DESIGN.md, OmD skill, evaluator,
model selector, order, timeout, and acceptance gates are unchanged.

## Question

With Cursor Agent and Grok 4.5 High fixed, does the reviewed OmD apply skill
improve UI resolution over the same frozen Raw DESIGN.md without weakening
task behavior, evidence honesty, responsive behavior, or accessibility?

The no-skill arm is a context floor. The primary Skill Lift comparison is Raw
DESIGN.md versus OmD; no blended model/runtime/skill score is allowed.

## Locked matrix

- Runtime: Cursor Agent `2026.07.23-e383d2b`
- Model selector: `cursor-grok-4.5-high`
- Runtime-reported label: `Cursor Grok 4.5 High`
- Attribution: display-name only; every result remains Internal
- Task: `pricing-conversion-v0.1`
- Conditions: `baseline`, `raw-design-md`, `omd-portable`
- Trials: 3 per condition
- Total: 9 fresh cells in a balanced three-order rotation
- Timeout: 900 seconds per cell
- Controller effort metadata: `high`
- Provider effort argument: none
- Root: `/tmp/u1945`
- Auto/Router: forbidden

No 1.9.42 or 1.9.44 artifact enters this denominator.

## Cursor-native candidate contract

The candidate workspace must:

- install only the reviewed OmD apply tree under
  `.cursor/skills/omd-apply/`;
- render frontmatter `name: omd-apply`;
- render activation as `/omd-apply`;
- exclude `.cursor/` from the product diff;
- execute no installer, hooks, MCP, remote assets, package installation, or
  separately generated sub-agent definitions;
- preserve exact source commit, scoped-clean source attestation, skill-tree
  hash, prepared workspace hash, and Cursor runtime provenance.

## External transmission boundary

Provider execution may transmit only each fresh prepared workspace:

- task-owned `index.html`;
- task-owned `DESIGN.md` in Raw and OmD arms only;
- `.benchmark/PROMPT.md`, `manifest.json`, and `matrix-cell.json`;
- local `AGENTS.md`;
- OmD arm only: `.cursor/skills/omd-apply/SKILL.md` and
  `agents/openai.yaml`.

It excludes repository history, unrelated source, the reference catalog, user
documents, credentials, `web/public/llms-full.txt`, and every other OmD skill.

## Fail-closed execution

Stop at the first auth, quota, selector, display-name, runtime, workspace hash,
process, timeout, product-diff, evaluator, or exporter failure. Preserve the
failed cell and mark later cells `not-started`. No retry, resume, fallback,
manual product edit, or failed-cell replacement is allowed.

## Acceptance

Execution is complete only when all nine cells are valid and preserve:

1. task, state, responsive, design-grounding, Evidence & Unknown, and
   accessibility gates;
2. exact requested selector, expected display name, binary version/hash,
   usage, raw stream, stderr, and product-only diff;
3. zero unsupported claims, replacement verifiers, MCP, Auto/Router, and
   provider effort flags.

The candidate passes the bounded hypothesis only when:

- OmD is UI-Resolved in 3/3 trials;
- OmD has zero paired objective losses versus Raw DESIGN.md;
- OmD passes the accessibility critical gate in 3/3 trials;
- the `signal-orange` small-text contrast failure is 0/3;
- invalid ARIA table parentage and keyboard-unreachable horizontal comparison
  failures are 0/3;
- OmD's median objective score is at least Raw's median.

No public winner, model claim, general skill superiority, confidence interval,
or frontier claim follows from one task × three trials.

## Frozen decision

All nine provider runs and frozen evaluations completed without retry. OmD
passed the automated gate in 2/3 trials and recorded paired objective deltas of
`+4`, `+6`, and `-2` versus Raw. The candidate therefore failed the locked
3/3, zero-loss, and accessibility 3/3 gates. The denominator stays closed.

Post-run diagnosis found that the sole OmD loss was caused by a schema `0.4`
keyboard oracle requiring the complete bounding box of a tall focusable scroll
region to fit inside the viewport. That is stricter than WCAG 2.4.11. The
standards correction is calibrated separately in 1.9.46 and does not
retroactively promote this result.
