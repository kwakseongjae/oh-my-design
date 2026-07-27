# Cursor sustained-capacity pacing calibration — 1.9.53

Status: **LOCKED; provider-free implementation pending**.

## Problem and bounded hypothesis

Fresh Composer matrices 1.9.51 and 1.9.52 stopped after six and five completed
long-running cells with the same Cursor Provider `resource_exhausted` response.
Subsequent repository-free no-write probes succeeded on both Composer 2.5 and
Grok 4.5 High, ruling out an account-wide authentication, model availability,
or fully exhausted quota condition.

The matrix controller currently launches the next cell immediately after local
evaluation/export. A fixed, preregistered inter-cell delay should make sustained
provider pacing explicit without changing any task, prompt, condition, model,
evaluator, score, per-cell timeout, or within-cell wall measurement.

## Frozen source scope

- add an optional schema `0.3` pacing contract;
- allow only `none` or `fixed-inter-cell`;
- require a positive integer delay for fixed pacing and zero for none;
- wait only between cells, never before the first or after the last;
- emit and persist wait start/end evidence;
- keep the delay outside each provider cell's wall-time record;
- inject the wait function in tests so acceptance is deterministic and fast;
- update compute-control documentation and focused fixtures.

No provider generation, benchmark product edit, task/evaluator change, score
change, retry, fallback, Auto/Router use, or historical result rewrite is
allowed.

## Acceptance

Pass only when:

1. invalid pacing contracts fail before workspace preparation;
2. a two-cell fake matrix performs exactly one frozen delay of the declared
   duration;
3. execution state retains the pacing policy, completed wait, adjacent cell
   IDs, and timestamps;
4. zero/absent pacing preserves historical immediate execution;
5. focused matrix/runtime/aggregate tests, Node syntax, TypeScript, build, and
   diff checks pass.

A pass unlocks a separately preregistered fresh Composer replacement with a
fixed inter-cell delay. It does not resume 1.9.51/1.9.52 or establish a
capacity, quality, efficiency, model, skill, or frontier claim.
