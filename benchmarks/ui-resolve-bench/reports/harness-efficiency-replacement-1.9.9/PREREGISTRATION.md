# Harness efficiency replacement — 1.9.9

Locked before workspace preparation or generation on 2026-07-23.

## Question

When the exact parent model, effort, runtime, task, trial, evaluator, timeout,
and canonical skill are fixed, does the delivery-budget repair harness produce
a non-dominated quality/time/token tradeoff relative to portable OmD across
three UI task families and three fresh trials?

This is a new replacement experiment after the stopped 1.9.7 matrix and the
passing 1.9.8 recovery. No 1.9.7 or 1.9.8 run enters its denominator. It remains
an Internal Harness Track calibration and cannot support a public “best UI
skill,” model, frontier, or global-rank claim.

## Frozen matrix

- Benchmark family/status: `harness` / `Internal`
- Systems: `omd-portable` baseline and
  `omd-repair-harness-delivery-budget` candidate
- Runtime: Claude Code `2.1.217` or newer, recorded per run
- Parent model/effort: exact `claude-opus-4-8` / `xhigh`
- Harness specialist selector: `opus`
- Tasks: `pricing-conversion-v0.1`, `onboarding-setup-v0.1`,
  `incident-operations-v0.1`
- Task contract: `0.3.0`
- Trials: three per task and system; 18 fresh scheduled cells
- Timeout: 900 seconds per cell
- Harness first-product-write gate: at or before 450,000ms
- Harness replacement-verifier gate: authored verifier, DOM shim, or mock
  browser forbidden
- Reliability: `Reliability@3`
- Bootstrap: 2,000 task→run hierarchical samples, seed `20260724`
- Product implementation basis: `e348c81`
- Fail-closed executor basis: `eb3a300`
- Output root: `/tmp/u199`
- Machine schedule: `RUN-MATRIX.json`

Every task/trial pair is adjacent. Trial rounds interleave Pricing, Onboarding,
and Operations so a preregistered early stop does not systematically erase the
last task family. Pair order alternates by task and trial; portable runs first
in five pairs and harness runs first in four.

## Frozen system delta

Both systems receive the same starter, prompt, DESIGN.md, canonical
`omd:apply` skill, exact parent model, effort, timeout, no-network sandbox, and
frozen evaluator.

Only the candidate receives:

1. the native Agent tool and the reviewed read-only `omd-ux-writer` and
   `omd-ux-engineer` definitions;
2. exactly one Opus-pinned bounded advisory call to each specialist;
3. the immutable protected-contract ledger;
4. first edit before 50%, optional verification stopped by 80%, and the final
   10% reserved for delivery;
5. one attempt per verification mechanism; and
6. an explicit ban on authoring a DOM shim, mock browser, or replacement
   verifier after sandbox-blocked browser execution.

The parent is the sole implementation owner. Specialists cannot edit files,
expand protected controls, invent facts, relax the ledger, or convert an
unresolved verification step into a passing claim.

## Validity, delivery, and stop policy

Every scheduled cell remains in the denominator. A run is valid only when the
provider and child exit zero, no timeout occurs, a final response and
product-only diff exist, the frozen evaluator completes, and
infrastructure/sandbox/cwd errors are zero.

Every candidate cell additionally requires:

- exactly one observed call to each required specialist, both requesting
  `model: opus`, with zero Agent errors;
- first built-in product write at or before 450,000ms; and
- zero authored replacement verifiers, DOM shims, or mock browsers in the
  retained event trace.

The executor enforces these candidate delivery gates before evaluation and
stops the matrix fail-closed on missing/late first-write telemetry or detected
replacement-verifier authorship. Auth, quota, immutable-model, process,
timeout, missing-final, sandbox, cwd, Agent discovery/permission/attribution,
or evaluator/export failure also stops new generation. The failed cell and all
unstarted cells remain preserved. There are no retries or replacement outputs.

A completed product-quality failure is counted and does not stop later cells.
Recoverable verification failure is counted and reported but is not itself an
infrastructure stop when the parent follows the no-substitute delivery rule.

## Metrics

Primary quality metrics:

- scheduled, attempted, valid, completed, timeout, and not-started counts;
- `UI-Resolved@1`, paired resolved lift, objective score, and win/tie/loss;
- `Reliability@3` by task;
- critical-gate and Evidence & Unknown pass rates; and
- task-level and aggregate distributions without best-run cherry-picking.

Efficiency and delivery metrics:

- median/P90 wall time and uncached tokens;
- first/last product write and final delivery time;
- first-write delivery-gate pass rate and replacement-verifier count;
- provider price-equivalent telemetry, labelled non-billing;
- specialist calls, requested models, duration, bounds, and errors; and
- planned checkpoints, unplanned human interventions, timeout, and abandonment.

## Promotion and Pareto rule

The repair harness remains opt-in unless all conditions hold:

1. all nine candidate cells are valid, attributable, and pass both delivery
   gates;
2. aggregate candidate `UI-Resolved` is not lower than portable OmD;
3. paired wins exceed losses and at least one pair is a candidate win;
4. no task loses `Reliability@3`;
5. Evidence & Unknown passes in every candidate cell;
6. candidate median wall time is no more than 1.50× portable and median
   uncached tokens no more than 1.75× portable; and
7. unplanned human interventions are zero.

If quality ties while both median wall time and tokens are higher, portable OmD
strictly dominates and the harness is not promoted. If quality improves within
the two budget ratios, both systems are non-dominated and the harness may
advance as an opt-in candidate. Neither result makes two specialists the
default path for small edits.

## Reporting limits

These are public development fixtures with three trials per task. Report the
actual distributions and the internal bootstrap, but not a verified public
population estimate. Do not merge this table with Skill Lift or Model Track,
rank model capability, publish a frontier leaderboard, or carry forward a
failed or post-stop artifact. A failure stays visible and determines the next
bounded `1.9.x` patch.

