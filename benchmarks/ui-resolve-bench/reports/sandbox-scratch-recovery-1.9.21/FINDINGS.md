# 1.9.21 classifier calibration — recovered scratch path

## Hypothesis

A literal `/tmp/<simple-file>` Bash permission denial can be separated from an
infrastructure failure only when the same trace proves an immediate, successful
same-basename fallback through the runner-provided `TMPDIR` and the provider
finishes successfully.

This is a classifier calibration. It generated no new model output and does not
change a retained run result.

## Bounded classifier

`summarizeClaudeToolErrors` now marks a tool error as
`recovered_temp_path_error` only when all conditions hold:

1. the failing tool is Bash, never Read/Edit/Write/Glob/Grep;
2. the denied path is one direct child with a simple basename under `/tmp`;
3. the original command contains that exact literal path;
4. a later successful Bash tool result references the same basename and
   `TMPDIR`;
5. the provider result is `success` with `is_error:false`.

The explicit `tool_error_count` remains unchanged. Only infrastructure and
sandbox classification change for this fully observed recovery.

Built-in file permission denials, arbitrary/nested paths, Claude cwd failures,
unrecovered literal `/tmp` attempts, and unsuccessful provider runs remain
fail-closed. Known optional renderer blocks retain their existing separate
classification.

## Retained 1.9.20 replay

The immutable `/tmp/u1920/pricing-t1-portable/.benchmark/events.jsonl` replay
changes:

| Metric | 1.9.20 runner | 1.9.21 replay |
|---|---:|---:|
| tool errors | 1 | 1 |
| recoverable | 0 | 1 |
| infrastructure | 1 | 0 |
| sandbox | 1 | 0 |
| recovered temp path | n/a | 1 |

The original `run-result.json` stays untouched and 1.9.20 remains failed.

## Verification

- focused runner/matrix/export tests: 33/33
- full root tests: 211 passed / 1 conditional skip
- TypeScript: pass
- CLI build: pass
- Node syntax and diff check: pass
- retained trace replay: expected 1/1/0/0/1 classification
- frozen forensic evaluator: 85/85, all critical/Evidence, axe serious 0

## Decision

Classifier calibration is complete. It permits a new fresh full matrix under a
new version and root; it does not permit resuming `/tmp/u1920` or retroactively
validating 1.9.20.
