# Harness delivery-budget recovery — 1.9.8

Locked before workspace preparation or generation on 2026-07-23.

## Question

Does the bounded OmD repair harness recover from the preserved 1.9.7
onboarding timeout by editing early, stopping optional verification, and
delivering a valid result inside the same 900-second budget?

This is a fresh single-cell recovery experiment. It does not retry, replace,
or change the denominator of the failed 1.9.7 matrix. It cannot support a
quality-lift, efficiency, model, frontier, or public ranking claim.

## Frozen cell

- Benchmark family/status: `harness` / `Internal`
- System: `omd-repair-harness-delivery-budget`
- Historical comparator only: preserved `onboarding-t3-harness` timeout from
  1.9.7; it is not rerun or rescored here
- Runtime: Claude Code `2.1.217` or newer, recorded in the run
- Parent model/effort: exact `claude-opus-4-8` / `xhigh`
- Harness specialist selector: `opus`
- Task: `onboarding-setup-v0.1`
- Task contract: `0.3.0`
- Trial: one fresh cell
- Timeout: 900 seconds
- Candidate implementation basis: `e348c81`
- Output root: `/tmp/u198`
- Machine schedule: `RUN-MATRIX.json`

The task, starter, DESIGN.md, frozen evaluator, specialist bundle, parent
model, effort, timeout, no-network sandbox, and user-owned product contract
remain the same as the 1.9.7 onboarding harness cells.

## Frozen system delta

Relative to the preserved 1.9.7 candidate, the canonical `omd:apply` skill and
harness activation add one delivery envelope:

1. start the delivery clock before analysis;
2. make the first product edit before 50% of the run budget;
3. after both required advisories arrive, edit immediately instead of starting
   a second analysis pass;
4. attempt each verification mechanism at most once;
5. stop optional verification by 80% and reserve the final 10% for delivery;
6. do not author a DOM shim, mock browser, or replacement verifier after a
   sandbox-blocked browser attempt; and
7. report an unresolved check rather than consuming the delivery reserve.

The main parent remains the only implementation owner. The two specialists are
read-only and keep their existing finding and word limits.

## Acceptance gates

The recovery passes only when all gates hold:

1. provider process and child exit zero, no timeout, and a final response is
   present before 900 seconds;
2. the frozen evaluator returns `85/85`, `UI-Resolved`, all critical gates pass,
   and Evidence & Unknown passes;
3. exactly one `omd-ux-writer` and one `omd-ux-engineer` call are observed, both
   explicitly requesting `model: opus`, with zero Agent errors;
4. first built-in product write occurs at or before `450000ms`;
5. the product diff is restricted to allowed product files and preserves the
   protected task contract; and
6. the run authors no DOM shim, mock browser, replacement verifier, or other
   new test-infrastructure workaround.

The 720-second optional-verification stop and 810-second final-response start
are workflow instructions rather than primary automated gates because the
current frozen runner records first/last product write and final result, not a
stable final-response-start event. Their observable event traces are retained
for diagnosis without changing the six acceptance gates.

## Stop and promotion rule

There is one scheduled cell and no retry. Auth, quota, immutable-model,
sandbox, cwd, Agent attribution, timeout, missing final response, late first
write, replacement-verifier authorship, or frozen-evaluator failure preserves
the cell as failed and stops this experiment.

Only a complete pass may unlock preregistration of a fresh 1.9.9 repeated
portable-versus-harness matrix. A pass demonstrates delivery-budget recovery
for this cell only; it does not retroactively validate 1.9.7 or promote the
harness to the default path.

