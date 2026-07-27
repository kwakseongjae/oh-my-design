# Cursor fixed-model Skill Lift — 1.9.47

Status: **EXECUTED; bounded one-task Skill Lift hypothesis passed**.

## Frontier gate and bounded hypothesis

This experiment addresses frontier gate 1, Verified Skill Lift. With Cursor
Agent and Grok 4.5 High fixed, the reviewed OmD apply skill should resolve the
pricing task in 3/3 trials, avoid every paired objective loss versus Raw
DESIGN.md, and preserve accessibility and Evidence & Unknown.

1.9.45 remains frozen and outside this denominator. The only semantic
experiment delta is evaluator schema `0.5`: focus visibility follows WCAG
2.4.11 minimum while complete visibility is retained as an advisory. The suite
version is therefore `ui-resolve-v0.2`. Product task, starter, Raw DESIGN.md,
OmD skill, model, runtime, order, timeout, and gates are unchanged.

## Frozen denominator

- runtime: Cursor Agent `2026.07.23-e383d2b`;
- selector: `cursor-grok-4.5-high`;
- expected display name: `Cursor Grok 4.5 High`;
- attribution: display-name only, Internal;
- task: `pricing-conversion-v0.1`;
- conditions: baseline, Raw DESIGN.md, OmD apply;
- trials: 3 per condition, 9 total;
- order: same balanced rotation as 1.9.45;
- timeout: 900 seconds per cell;
- concurrency: 1;
- retries/fallback/manual product edits: none;
- root: `/tmp/u1947`.

## Transmission boundary

Standing benchmark authorization applies only to each prepared cell's
task-owned `index.html`; Raw/OmD `DESIGN.md`; `.benchmark/PROMPT.md`,
`manifest.json`, and `matrix-cell.json`; local `AGENTS.md`; and the OmD arm's
`.cursor/skills/omd-apply/SKILL.md` plus `agents/openai.yaml`.

Credentials, secrets, repository history, unrelated source, the reference
catalog, user documents, `web/public/llms-full.txt`, and every other skill are
excluded.

## Acceptance and rollback

Pass only when:

1. all 9 cells complete the frozen provider/evaluator/export path;
2. OmD is UI-Resolved and accessibility-pass in 3/3;
3. OmD has zero paired objective losses versus Raw;
4. OmD median objective score is at least Raw;
5. signal-orange small-text contrast, invalid ARIA table parentage, and
   keyboard-unreachable horizontal comparison failures are each 0/3 in OmD;
6. product diff remains `index.html` only and Evidence & Unknown passes 9/9.

Stop at the first auth, quota, selector, runtime, hash, process, timeout,
product-diff, evaluator, or exporter failure. Freeze the root and preregister a
new replacement after diagnosis. No score-rule adjustment or failed-cell
replacement is allowed.

Passing one task × three trials unlocks Composer calibration and broader task
expansion. It does not establish a public winner, confidence interval,
cross-model generality, efficiency, or frontier status.

## Frozen decision

All nine cells completed without retry. Raw scored 79/85, 85/85, and 79/85;
OmD scored 85/85 in all three trials. Raw→OmD paired deltas were `+6`, `0`,
and `+6`. OmD therefore passed the 3/3, zero-loss, accessibility, median, and
named-regression gates. The bounded hypothesis passes and unlocks a
Composer 2.5 replication under a new root.
