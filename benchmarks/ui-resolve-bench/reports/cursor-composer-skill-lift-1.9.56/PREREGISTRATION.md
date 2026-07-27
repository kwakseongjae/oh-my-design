# Cursor/Composer dependency-safe paced Skill Lift replacement — 1.9.56

Status: **EXECUTION STOPPED; Composer provider capacity deferred**.

## Frontier gate and bounded hypothesis

Composer matrices 1.9.51 and 1.9.52 stopped on sustained provider capacity.
Pacing calibration 1.9.53 accepted explicit inter-cell cooldowns. Matrix
1.9.54 then stopped after one successful provider generation because its
detached controller worktree lacked evaluator dependencies. Preflight
calibration 1.9.55 now fails that condition before any provider call.

This fresh replacement tests the already accepted 1.9.49 foreground closure
with Composer 2.5 across the same pricing task and nine-cell denominator.
Workspace preparation must use a clean committed source; controller and
evaluator execution must use the dependency-complete primary workspace.

No stopped output is resumed, rescored, or reused. Every 1.9.48 and
1.9.50–1.9.55 artifact is outside this denominator.

## Frozen denominator

- runtime: Cursor Agent `2026.07.23-e383d2b`;
- selector: `composer-2.5`;
- expected display name: `Composer 2.5`;
- attribution: display-name only, Internal;
- task: `pricing-conversion-v0.1`;
- conditions: baseline, Raw DESIGN.md, OmD apply;
- trials: 3 per condition, 9 total;
- timeout: 900 seconds per provider cell, concurrency 1;
- pacing: fixed 120 seconds between adjacent cells only;
- dependency preflight: `playwright-core` and `axe-core` before cell 1;
- retry/fallback/manual product edits: none;
- balanced order: unchanged;
- root: `/tmp/u1956`.

Task, starter, prompt, skill, Raw DESIGN.md, evaluator schema `0.5`, suite
`ui-resolve-v0.2`, model, conditions, order, timeout, concurrency, and
acceptance remain frozen. The only orchestration correction from 1.9.54 is
running the accepted preflight/controller from the dependency-complete primary
workspace.

## Transmission boundary

Standing benchmark authorization applies to the exact locked per-cell
boundary: task-owned `index.html`; Raw/OmD `DESIGN.md`;
`.benchmark/PROMPT.md`, `manifest.json`, and `matrix-cell.json`; local
`AGENTS.md`; and the OmD arm's `.cursor/skills/omd-apply/SKILL.md` plus
`agents/openai.yaml`.

Credentials, secrets, repository history, unrelated source, the reference
catalog, user documents, `web/public/llms-full.txt`, every other skill, and all
historical provider outputs are excluded.

## Acceptance and stop

Pass only when dependency preflight passes before cell 1; all 9 cells complete;
all 8 pacing waits complete and are retained; OmD is automated-gate and
accessibility-pass in 3/3; OmD has zero paired objective losses; OmD median is
at least Raw; the semantic-orange normal-text, invalid ARIA parentage, and
keyboard-unreachable comparison clusters are 0/3 in OmD; product diff remains
`index.html` only; and Evidence & Unknown passes 9/9.

Stop and freeze at the first preflight, auth, quota, selector, display-name,
runtime, hash, process, timeout, pacing-state, product-diff, evaluator, or
exporter failure. No retry, resume, score-rule change, or failed-cell
replacement is allowed.

Passing closes the bounded Composer replication and unlocks a fresh multi-task
Cursor Preview slice. A provider-capacity stop despite pacing defers Composer
instead of creating another immediate replacement. Neither outcome establishes
a public model winner, confidence interval, three-family generality,
efficiency, or frontier status.

## Frozen decision

Dependency preflight passed. The first baseline provider cell then returned
Cursor Provider `resource_exhausted` after 26,563 ms, three provider-managed
reconnection attempts, no usage event, no final response, and no product
change. The remaining eight cells were retained as `not-started`.

This is the same provider-capacity condition as 1.9.51 and 1.9.52, now occurring
before the first inter-cell wait can apply. The matrix is frozen and outside
every denominator. Composer is deferred; no immediate replacement, model
substitution, or output reuse is allowed.
