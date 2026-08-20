# Cursor/Grok three-task Reliability@3 Preview — 1.9.66

Status: **EXECUTION COMPLETE; bounded hypothesis rejected**.

## Frontier gate and bounded hypothesis

Frontier gates 1 and 2 still lack repeated multi-task evidence. The complete
1.9.65 one-trial Preview passed, but its cells are frozen diagnostics and are
not part of this denominator.

With Cursor Agent, `cursor-grok-4.5-high`, the schema 0.5 evaluator, and the
1.9.64-reviewed OmD skill fixed, OmD should:

1. match or exceed Raw DESIGN.md in every one of nine paired trials;
2. have a positive overall paired median;
3. reach `UI-Resolved@1` and task `Reliability@3` at least as often as Raw;
4. pass automated, accessibility, all-critical, task behavior, and Evidence &
   Unknown gates in all nine OmD cells.

This is a bounded Internal repeated Preview. Three tasks × three trials are
not enough for a 95% lower-bound, public leaderboard, or frontier claim.

## Frozen denominator

- schema `0.3`; suite `ui-resolve-v0.2`; evaluator `0.5`;
- product version `1.9.66`;
- matrix SHA-256
  `f25a9838ab62c57edc09295cd3b0ae5eaa576ec93e5bbe52edac0e00891619a8`;
- control-contract SHA-256
  `9418f3ccc30d0508f8313afddca2076b92fac07b9e1b9d49ee06c347812d9ddb`;
- fresh root `/tmp/u1966`;
- 18 cells: onboarding, incident operations, and five-locale CLI handoff;
- Raw DESIGN.md and OmD portable, each at trial indices 1–3;
- runtime Cursor Agent `2026.07.23-e383d2b`;
- selector `cursor-grok-4.5-high`;
- expected display name `Cursor Grok 4.5 High`;
- display-name-only attribution, Internal;
- provider effort argument none; controller effort metadata `high`;
- timeout 900 seconds per cell;
- provider concurrency 1 and cross-root global serial lock;
- fixed 120-second inter-cell pacing, accepted only at 120,000–125,000 ms
  with wall/monotonic disagreement no greater than 5,000 ms;
- immutable `max_new_cells=1` per invocation;
- evaluator dependency preflight per invocation;
- retry, fallback, model substitution, failed-cell replacement, and manual
  product edit none.

The order in `RUN-MATRIX.json` is a frozen balanced rotation. A trial is paired
by exact `task_id` and `trial_index`, not by adjacency.

## Candidate and source equality

There is no new product or evaluator delta after 1.9.65. The only candidate
difference against Raw is the already-reviewed OmD skill:

- canonical OmD SKILL.md
  `c63ba1e47fe1466c03299c475d8e51f0d6ce376b6631893d703bb110296a3e03`;
- OmD sidecar
  `f0ad5294de3f599bbed124708c61988be9098e20d4723ce3574023144751253e`.

Fresh preparation must reproduce the 1.9.65 canonical starter, DESIGN.md, and
Raw/OmD prompt hashes. No 1.9.65 workspace, output, score, or execution state
may be copied into `/tmp/u1966`.

## Transmission boundary

Standing authorization covers only each locked workspace's task-owned
`index.html`; `DESIGN.md`; `.benchmark/PROMPT.md`, `manifest.json`, and
`matrix-cell.json`; local `AGENTS.md`; and, for OmD,
`.cursor/skills/omd-apply/SKILL.md` plus `agents/openai.yaml`.

Credentials, secrets, repository history, unrelated source, catalog data,
user documents, `web/public/llms-full.txt`, other skills, and historical
provider artifacts remain excluded.

## Acceptance and stop

Pass only when all 18 cells and 17 cooldowns complete; every pair has OmD
score at least Raw; overall paired median is positive; OmD automated,
accessibility, and all-critical gates pass 9/9; task behavior and Evidence &
Unknown pass 18/18; product diffs remain task-owned; and every checkpoint
revalidates completed prefix plus untouched suffix without replay.

Freeze at the first source, preparation, preflight, lease, auth, quota,
selector, display-name, runtime, hash, process, timeout, pacing, product-diff,
evaluator, exporter, history, or attestation failure. Do not retry or resume a
failed root.

If Grok stops for actual quota or capacity, this denominator remains
incomplete. Terra High and Luna High may open only as separately preregistered
model lanes; neither may replace or complete `/tmp/u1966`.

Passing establishes Reliability@3 only for these three Internal tasks and this
display-name-attributed runtime. It does not establish the 24-task × 10-run
Verified gate, confidence intervals, cross-model superiority, public rank, or
frontier status.
