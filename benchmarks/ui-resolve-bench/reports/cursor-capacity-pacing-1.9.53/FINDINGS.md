# Cursor sustained-capacity pacing calibration — 1.9.53 findings

Status: **accepted; fresh paced Composer replacement unlocked**.

## Outcome

The controller now accepts an optional schema `0.3` pacing contract with two
policies: `none` and `fixed-inter-cell`. A fixed delay is applied only between
adjacent cells, never before the first cell or after the last. Each wait records
its policy, duration, adjacent cell IDs, timestamps, and completion status in
`matrix-execution.json`.

The wait function and clock are injectable. The two-cell fake acceptance
therefore proved one exact 120,000 ms wait without consuming wall time. The
historical no-pacing path used the same injected wait spy and recorded zero
waits.

Pacing remains outside provider cell wall time. It changes no task, condition,
prompt, evaluator, score, timeout, retry, fallback, model, or historical
artifact.

## Acceptance evidence

- focused prepare/runtime/aggregate acceptance: 21/21 passed;
- Node syntax and diff checks: passed;
- TypeScript lint and CLI build: passed;
- full benchmark unit slice: 93 passed, 1 skipped;
- two unrelated preparation tests remain red because their pre-existing
  `/tmp/omd-ui-skills-bench/vendors/*` fixtures lack Git metadata.

The two environment-only failures predate this patch and do not execute the
pacing controller.

## Decision boundary

The bounded calibration passed. A fresh Composer matrix may now be
preregistered with a fixed cooldown while retaining the same nine cells,
ordering, task, evaluator, model, conditions, and acceptance criteria.

This result is controller evidence only. It does not prove that a particular
delay prevents provider exhaustion and does not establish a capacity, quality,
efficiency, model, skill, or frontier claim.
