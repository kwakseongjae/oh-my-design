# Cursor/Grok multi-task Skill Lift Preview — 1.9.57

Status: **EXECUTION STOPPED; Grok provider capacity after four completed cells**.

## Frontier gate and bounded hypothesis

Cursor/Grok 4.5 High passed the pricing-only OmD Skill Lift slice in 1.9.47,
but one task cannot establish task diversity. Composer is separately deferred
on provider capacity and is not part of this denominator.

With Cursor Agent and `cursor-grok-4.5-high` fixed, the reviewed OmD apply
skill should match or improve Raw DESIGN.md on three additional frozen tasks:
onboarding setup, incident operations dashboard, and five-locale CLI handoff.
The candidate must preserve every task contract, accessibility, and Evidence &
Unknown.

This is a one-trial-per-task Preview slice, not a reliability or public
leaderboard run.

## Frozen denominator

- runtime: Cursor Agent `2026.07.23-e383d2b`;
- selector: `cursor-grok-4.5-high`;
- expected display name: `Cursor Grok 4.5 High`;
- attribution: display-name only, Internal;
- tasks: `onboarding-setup-v0.1`, `incident-operations-v0.1`,
  `locale-cli-handoff-v0.1`;
- conditions: Raw DESIGN.md and OmD apply;
- trials: 1 per task/condition, 6 cells total;
- timeout: 900 seconds per provider cell, concurrency 1;
- pacing: fixed 120 seconds between adjacent cells only;
- dependency preflight: `playwright-core` and `axe-core` before cell 1;
- retry/fallback/manual product edits: none;
- balanced condition order across tasks;
- root: `/tmp/u1957`.

Task files, starter surfaces, prompts, DESIGN.md inputs, evaluator schema `0.5`,
suite `ui-resolve-v0.2`, model, timeout, and acceptance are frozen before
provider execution.

## Transmission boundary

Standing benchmark authorization applies to each locked task workspace:
task-owned `index.html`; `DESIGN.md`; `.benchmark/PROMPT.md`, `manifest.json`,
and `matrix-cell.json`; local `AGENTS.md`; and the OmD arm's
`.cursor/skills/omd-apply/SKILL.md` plus `agents/openai.yaml`.

Credentials, secrets, repository history, unrelated source, the reference
catalog, user documents, `web/public/llms-full.txt`, every other skill, and
historical provider outputs are excluded.

## Acceptance and stop

Pass only when:

1. evaluator dependency preflight passes before cell 1;
2. all 6 cells and all 5 pacing waits complete;
3. OmD passes the automated and accessibility gates on all 3 tasks;
4. paired OmD score is never below Raw and median paired delta is non-negative;
5. task-specific protected behavior and Evidence & Unknown pass 6/6;
6. product diff remains task-owned product files only.

Stop and freeze at the first preflight, auth, quota, selector, display-name,
runtime, hash, process, timeout, pacing-state, product-diff, evaluator, or
exporter failure. No retry, resume, score change, or failed-cell replacement is
allowed.

Passing establishes only bounded Internal multi-task Preview evidence and
unlocks a separately preregistered repeated-trial task slice. It does not
establish Reliability@3, confidence intervals, efficiency, cross-model
superiority, a public winner, or frontier status.

## Frozen decision

Four cells and four 120-second waits completed. The fifth cell,
`incident-t1-raw`, returned Cursor Provider `resource_exhausted` after 24,563
ms, three provider-managed reconnection attempts, no usage event, no final
response, and no product change. The final locale OmD cell was retained as
`not-started`.

Completed diagnostics were onboarding Raw 81/85, incident OmD 85/85, locale
Raw 85/85, and onboarding OmD 85/85. The only complete pair is onboarding
Raw→OmD +4. The matrix is incomplete, so no multi-task Preview acceptance,
paired median, reliability, efficiency, or superiority decision is allowed.
No immediate Grok replacement is permitted.
