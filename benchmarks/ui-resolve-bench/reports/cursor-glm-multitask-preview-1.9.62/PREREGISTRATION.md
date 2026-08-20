# Cursor/GLM 5.2 multi-task Skill Lift Preview — 1.9.62

Status: **EXECUTED; complete matrix, bounded hypothesis rejected**.

## Frontier gate and bounded hypothesis

GLM 5.2 High passed the repository-free attribution canary in 1.9.58 and the
provider-free controller adaptation in 1.9.59. The 1.9.61 durable checkpoint
controller now permits a fresh matrix to execute one fully evaluated cell per
invocation without replaying a completed cell or cooldown.

With Cursor Agent and `glm-5.2-high` fixed, the reviewed OmD apply skill should
match or improve Raw DESIGN.md on onboarding setup, incident operations, and
five-locale CLI handoff while preserving every task contract, accessibility,
and Evidence & Unknown.

Kimi 1.9.60 remains frozen and outside this denominator. This GLM matrix is an
independent one-trial-per-task Preview, not a replacement cell, reliability
run, cross-model winner test, or public leaderboard run.

## Frozen denominator

- runtime: Cursor Agent `2026.07.23-e383d2b`;
- selector: `glm-5.2-high`;
- expected display name: `GLM 5.2 High`;
- attribution: display-name only, Internal;
- tasks: onboarding, incident operations, five-locale CLI handoff;
- conditions: Raw DESIGN.md and OmD apply;
- trials: 1 per task/condition, 6 total;
- timeout: 900 seconds per cell, global live-provider concurrency 1;
- execution bound: immutable `max_new_cells=1` on every invocation;
- pacing: fixed 120 seconds between adjacent cells, accepted only in the
  120,000–125,000 ms wall/monotonic window with at most 5,000 ms disagreement;
- evaluator preflight: Playwright and axe on every invocation;
- retry/fallback/manual product edits: none;
- order: identical to Grok 1.9.57 and Kimi 1.9.60 for descriptive
  model×runtime comparison;
- root: `/tmp/u1962`.

## Frozen input equality

The task starters and DESIGN.md inputs must retain the hashes frozen in
1.9.60:

- onboarding: starter `ac9e78666ee78bf270e62e0aff79b8510081bf50e05312d557979ca00aabe652`,
  DESIGN.md `f4f241e042004655c960df1edbc28b92ddb287d39af9edfcc65f2ceb7d471e3e`;
- incident: starter `0ea045c3b297e86dbee9a094da113e2b85f2d109daaf2c25631c2432d545217b`,
  DESIGN.md `bbeab902a6a23d0de5ce8c7d804923844f1e87f96a960d32f04f8e52de041b3a`;
- locale: starter `a4c2916ecd58ff750a8948e687bc3da2a489c8848cb394568118131ed31a6586`,
  DESIGN.md `4c1228e1a6a237e6a4b73017ff7b4ad41e48aefec5e5c5553cb94f1721c4050f`;
- OmD skill `938c6f0a7bb2ce172786274599b56591f01a82ee8e6bd1bf3d54bef03c74e4c7`,
  sidecar `f0ad5294de3f599bbed124708c61988be9098e20d4723ce3574023144751253e`.

Any mismatch stops before provider execution.

## Transmission boundary

Standing benchmark authorization applies to each locked task workspace:
task-owned `index.html`; `DESIGN.md`; `.benchmark/PROMPT.md`, `manifest.json`,
and `matrix-cell.json`; local `AGENTS.md`; and the OmD arm's
`.cursor/skills/omd-apply/SKILL.md` plus `agents/openai.yaml`.

Credentials, secrets, repository history, unrelated source, catalog data,
user documents, `web/public/llms-full.txt`, other skills, and historical
provider outputs are excluded.

## Acceptance and stop

Pass only when all 6 cells and 5 waits complete; OmD passes automated and
accessibility gates on 3/3 tasks; every paired OmD score is at least Raw;
median paired delta is non-negative; task behavior and Evidence & Unknown pass
6/6; product diff remains task-owned product files only; and all five
checkpoint continuations validate the retained prefix and untouched suffix.

Stop and freeze at the first preflight, lease, auth, quota, selector,
display-name, runtime, hash, process, timeout, pacing, product-diff, evaluator,
or exporter failure. No retry, same-root resume after a stop, score change,
failed-cell replacement, model substitution, or invisible loop is allowed.

Passing establishes bounded Internal GLM multi-task Preview evidence only. It
does not establish Reliability@3, confidence intervals, efficiency, public
model ranking, cross-model superiority, or frontier status.
