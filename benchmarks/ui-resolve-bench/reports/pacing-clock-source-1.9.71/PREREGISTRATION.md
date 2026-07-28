# Pacing clock-source repair — 1.9.71

Status: **LOCKED before implementation; provider-free**.

## Observed defect

The 1.9.70 eighth invocation waited 120,002.078 ms on the monotonic clock while
the retained wall timestamps advanced 119,998 ms. Clock disagreement was only
4.078 ms, but the controller rejected the wall value for being 2 ms below the
120,000 ms duration floor.

Wall time is adjustable and is retained for chronology. Monotonic time is the
duration source. Requiring both clocks to independently satisfy the exact
duration window creates a false-negative even when the duration source is
valid and the clocks agree well inside the existing 5,000 ms bound.

## Bounded change

Change only `pacingStopReason` and its focused tests:

1. monotonic elapsed remains required inside `[delay, delay + 5,000]`;
2. wall elapsed remains finite and non-negative;
3. absolute monotonic/wall disagreement remains at most 5,000 ms;
4. retained timestamp chronology and checkpoint validation remain unchanged;
5. accept the exact observed shape: monotonic 120,002 ms, wall 119,998 ms;
6. continue rejecting monotonic early return, overshoot, greater-than-5s clock
   disagreement, cancellation, state drift, and execution-history corruption.

No task, prompt, condition, model, skill, evaluator, objective score, timeout,
provider pacing request, retry, fallback, or historical artifact changes.

## Acceptance

Pass only when the new boundary regression and all focused provider-neutral
controller tests pass, plus Node syntax, TypeScript lint, build, and diff
checks. Provider generation is zero.

Passing does not revive `/tmp/u1970`. It only unlocks a separately preregistered
fresh replacement root with the same 18-cell denominator.
