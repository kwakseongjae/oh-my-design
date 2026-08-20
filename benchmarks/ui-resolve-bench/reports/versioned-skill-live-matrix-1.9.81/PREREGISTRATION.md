# Versioned Skill Live Matrix — 1.9.81

Status: **LOCKED; awaiting fresh preparation and runtime preflight**.

## Question

Does the 1.9.78 visual-equity contract improve or preserve UI outcomes
relative to the immediately preceding OmD apply skill when every other
controllable input is held fixed?

This is an Internal patch-isolation experiment. It is not a public leaderboard,
a cross-model comparison, or a 24-task Verified claim.

## Frozen denominator

- schema `0.3`; suite `ui-resolve-v0.2`; evaluator `0.5`;
- product version `1.9.81`;
- fresh root `/tmp/u1980`;
- tasks: onboarding `0.3.0`, incident `0.4.0`, locale `0.5.0`;
- opaque arms: `omd-portable-slate` and `omd-portable-ember`;
- exact source commits and detached attestations from 1.9.79;
- three trials per task and arm, 18 cells total;
- Cursor Agent selector `cursor-grok-4.5-high`;
- expected runtime display name `Cursor Grok 4.5 High`;
- Internal display-name attribution only;
- provider effort argument none; controller effort metadata `high`;
- runtime-default temperature;
- 900-second per-cell timeout;
- global provider concurrency 1;
- fixed 120-second inter-cell pacing, accepted at 120–125 seconds by monotonic
  elapsed with at most 5 seconds wall-clock disagreement;
- one durable cell per controller invocation (`max_new_cells=1`);
- retry, fallback, substitution, failed-cell replacement, and manual product
  edit none.

The exact globally serial order is frozen in `RUN-MATRIX.json`. Arm-first order
is balanced 5/4 overall and alternates 2/1 or 1/2 within every task, avoiding
the earlier task-level arm/order confound.

## Equality and transmission

Within each task, both arms must have the same starter, DESIGN.md, core task
prompt, runtime-native declared skill name, user-visible label, and activation.
Only the exact source commit and installed skill hash may differ.

Each provider cell may receive only its task-owned `index.html`, `DESIGN.md`,
`.benchmark/PROMPT.md`, `manifest.json`, `matrix-cell.json`, local `AGENTS.md`,
and `.cursor/skills/omd-apply/SKILL.md` plus its sidecar. Credentials,
repository history, controller-private arm mapping, unrelated source, catalog
data, user documents, `web/public/llms-full.txt`, and historical provider
artifacts are excluded.

## Decisions

Report separately:

1. deterministic eligibility and UI-Resolved/score change;
2. task/trial pair outcomes and Reliability@3;
3. fresh blind practitioner preference, including reversal consistency.

A deterministic ceiling tie is not a preference win. No preference claim is
allowed until fresh blind judgments are complete.

## Acceptance and stop

Before cell 1, require clean preparation, all 18 exact attestations, untouched
workspaces, dependency/evaluator preflight, root-exclusive lease, exact
selector/display-name capacity probe, and a committed preparation record.

If Grok fails capacity before cell 1, freeze the unstarted root and
preregister Luna High separately. After cell 1 starts, freeze at the first
source, preparation, lease, auth, quota, selector, display-name, runtime, hash,
timeout, pacing, product-diff, evaluator, exporter, or attestation failure.
Never resume a failed root or complete it with another model.
