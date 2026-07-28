# Cursor/Kimi K3 multi-task Skill Lift Preview — 1.9.60

Status: **LOCKED; fresh preparation pending**.

## Frontier gate and bounded hypothesis

Kimi K3 High passed the repository-free attribution canary in 1.9.58 and the
provider-free controller adaptation in 1.9.59. This is its first scored
Internal benchmark slice.

With Cursor Agent and `kimi-k3-high` fixed, the reviewed OmD apply skill should
match or improve Raw DESIGN.md on onboarding setup, incident operations, and
five-locale CLI handoff while preserving every task contract, accessibility,
and Evidence & Unknown.

The incomplete Grok 1.9.57 matrix is frozen and outside this denominator. This
is a one-trial-per-task Preview, not a reliability or public leaderboard run.

## Frozen denominator

- runtime: Cursor Agent `2026.07.23-e383d2b`;
- selector: `kimi-k3-high`;
- expected display name: `Kimi K3 High`;
- attribution: display-name only, Internal;
- tasks: onboarding, incident operations, five-locale CLI handoff;
- conditions: Raw DESIGN.md and OmD apply;
- trials: 1 per task/condition, 6 total;
- timeout: 900 seconds per cell, concurrency 1;
- pacing: fixed 120 seconds between adjacent cells;
- evaluator preflight: Playwright and axe before cell 1;
- retry/fallback/manual product edits: none;
- order: identical to Grok 1.9.57 for descriptive model×runtime comparison;
- root: `/tmp/u1960`.

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
6/6; and product diff remains task-owned product files only.

Stop and freeze at the first preflight, auth, quota, selector, display-name,
runtime, hash, process, timeout, pacing, product-diff, evaluator, or exporter
failure. No retry, resume, score change, or failed-cell replacement is allowed.

Passing establishes bounded Internal Kimi multi-task Preview evidence and
unlocks GLM 5.2 Preview. It does not establish Reliability@3, confidence
intervals, efficiency, public model ranking, or frontier status.
