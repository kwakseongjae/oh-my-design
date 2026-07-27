# Cursor/Composer fixed-model Skill Lift — 1.9.48

Status: **LOCKED; fresh preparation pending**.

## Frontier gate and bounded hypothesis

This experiment replicates the 1.9.47 bounded Skill Lift on the second allowed
Cursor selector. With Cursor Agent and Composer 2.5 fixed, the reviewed OmD
apply skill should resolve the pricing task in 3/3 trials, avoid every paired
objective loss versus Raw DESIGN.md, and preserve accessibility and Evidence &
Unknown.

The only candidate delta from 1.9.47 is:

- requested selector: `composer-2.5`;
- expected runtime display name: `Composer 2.5`;
- system IDs and fresh root identify Composer.

Evaluator schema `0.5`, suite `ui-resolve-v0.2`, task, starter, Raw DESIGN.md,
OmD skill, order, timeout, concurrency, and acceptance are unchanged. Grok
artifacts are outside this denominator.

## Frozen denominator

- runtime: Cursor Agent `2026.07.23-e383d2b`;
- selector: `composer-2.5`;
- expected display name: `Composer 2.5`;
- attribution: display-name only, Internal;
- task: `pricing-conversion-v0.1`;
- conditions: baseline, Raw DESIGN.md, OmD apply;
- trials: 3 per condition, 9 total;
- timeout: 900 seconds per cell, concurrency 1;
- retry/fallback/manual product edits: none;
- root: `/tmp/u1948`.

## Transmission boundary

Standing benchmark authorization applies to the same exact per-cell boundary
as 1.9.47: task-owned `index.html`; Raw/OmD `DESIGN.md`;
`.benchmark/PROMPT.md`, `manifest.json`, and `matrix-cell.json`; local
`AGENTS.md`; and the OmD arm's `.cursor/skills/omd-apply/SKILL.md` plus
`agents/openai.yaml`.

Credentials, secrets, repository history, unrelated source, the reference
catalog, user documents, `web/public/llms-full.txt`, and every other skill are
excluded.

## Acceptance and stop

Pass only when all 9 cells complete; OmD is UI-Resolved and
accessibility-pass in 3/3; OmD has zero paired objective losses; OmD median is
at least Raw; the three named accessibility regression clusters are 0/3 in
OmD; product diff remains `index.html` only; and Evidence & Unknown passes
9/9.

Stop and freeze at the first auth, quota, selector, display-name, runtime,
hash, process, timeout, product-diff, evaluator, or exporter failure. No retry,
resume, score-rule change, or failed-cell replacement is allowed.

Passing unlocks a multi-task Cursor Preview slice. It does not establish a
public model winner, confidence interval, three-family generality, efficiency,
or frontier status.
