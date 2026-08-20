# Harness efficiency patch smoke — 1.9.7

Locked before workspace preparation or generation on 2026-07-22.

## Question

Does the opt-in OmD repair harness produce a non-dominated quality/time/token
tradeoff relative to the portable OmD apply skill when model, runtime, task,
trial, evaluator, timeout, and source contract are fixed?

This is the first repeated Harness Track patch smoke. It is not a comparison
with another product's harness and cannot support a public “best UI skill” or
frontier claim.

## Frozen matrix

- Benchmark family/status: `harness` / `Internal`
- Systems: `omd-portable` baseline and `omd-repair-harness` candidate
- Runtime: Claude Code `2.1.217` or newer, recorded per run
- Parent model/effort: exact `claude-opus-4-8` / `xhigh`
- Harness specialist selector: `opus`
- Tasks: `pricing-conversion-v0.1`, `onboarding-setup-v0.1`,
  `incident-operations-v0.1`
- Task contract: `0.3.0`
- Trials: three per task and system; 18 scheduled cells
- Timeout: 900 seconds per cell
- Reliability: `Reliability@3`
- Bootstrap: 2,000 task→run hierarchical samples, seed `20260723`
- Candidate implementation basis: `2f7b581`
- Output root: `/tmp/u197`
- Machine schedule: `RUN-MATRIX.json`

Every task/trial pair is adjacent in the schedule. Trial 2 reverses the
portable/harness order; trials 1 and 3 use portable/harness. This reduces but
does not eliminate time-of-day and quota-order confounding.

## Frozen system delta

Both systems receive the same starter, task prompt, DESIGN.md, exact parent
model, effort, timeout, local files, no-network sandbox, and deterministic
evaluator. Both receive the same canonical `omd:apply` skill.

Only `omd-repair-harness` receives:

1. the reviewed read-only `omd-ux-writer` and `omd-ux-engineer` envelopes;
2. the native Claude Agent tool;
3. one model-pinned advisory call to each specialist; and
4. the immutable protected-contract ledger and bounded-advisory activation.

The main parent is the only implementation owner. Specialists may return at
most five ranked findings and roughly 600 words each; they may not edit product
files, expand protected controls, or relax the user-owned task contract.

## Validity and attribution

Every scheduled cell stays in the denominator. A run is valid only when process
and child exit zero, no timeout occurs, a final response and product-only diff
exist, the frozen evaluator completes, and infrastructure/sandbox/cwd errors are
zero.

Each harness cell additionally requires exactly one observed call to each
specialist, both calls explicitly requesting `model: opus`, zero Agent errors,
and the complete reviewed agent-bundle hash. Claude Code's internal Haiku helper
allocation is recorded separately and is not a product specialist.

Recoverable verification failures remain counted and reported but do not make
a completed run invalid. An auth, quota, immutable-model, sandbox, cwd, Agent
discovery/permission, or attribution failure stops new generation; the failed
cell remains preserved and there are no silent retries or replacement outputs
inside this preregistration. A product-quality failure does not stop later
scheduled cells.

## Metrics

Primary quality metrics:

- scheduled/valid/completed/timeout counts;
- `UI-Resolved@1`, paired resolved lift, win/tie/loss;
- `Reliability@3` by task;
- critical-gate and objective-score distribution; and
- Evidence & Unknown diagnostics.

Efficiency and orchestration metrics:

- median/P90 wall time and uncached tokens;
- first product write, last product write, and final delivery time;
- provider price-equivalent telemetry, labelled as non-billing data;
- specialist duration, finding/word bounds, model attribution, and errors; and
- planned checkpoints, unplanned human interventions, abandonment, and timeout.

## Patch decision and Pareto rule

The repair harness remains opt-in unless all of the following hold:

1. all nine harness cells are valid and attributable;
2. its aggregate UI-Resolved rate is not lower than portable OmD;
3. paired wins exceed paired losses and at least one pair is a harness win;
4. no task loses `Reliability@3`;
5. Evidence & Unknown passes in every harness cell;
6. median wall time is no more than 1.50× portable and median uncached tokens
   are no more than 1.75× portable; and
7. unplanned human interventions remain zero.

If quality ties while both median wall time and tokens are higher, portable OmD
strictly dominates and the harness is not promoted. If quality improves within
the two budget ratios, both systems are non-dominated and the harness may
advance as an opt-in candidate; it still does not become the default path.

## Reporting limits

The three tasks are public development fixtures and only three trials are run.
Report actual distributions and the internal bootstrap, but do not call its
interval a verified public estimate. Do not compare model capability, merge
this table with Skill Lift, publish a frontier rank, or cherry-pick a best
artifact. A failing patch remains visible and informs the next `1.9.x` change.

