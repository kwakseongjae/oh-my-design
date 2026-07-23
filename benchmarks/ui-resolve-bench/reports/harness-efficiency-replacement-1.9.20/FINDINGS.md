# 1.9.20 findings — stopped on recovered scratch-path denial

## Outcome

The preregistered 18-cell matrix stopped at cell 1,
`pricing-t1-portable`, with `process-failure`.

- Scheduled: 18
- Attempted: 1
- Valid complete: 0
- Stopped: 1
- Not started: 17
- Retry/resume: forbidden
- Promotion/Reliability/Pareto decision: unavailable

`/tmp/u1920` remains immutable and must not be resumed.

## Provider and product evidence

The Claude provider itself completed successfully:

- exact `claude-opus-4-8` / `xhigh`
- child exit 0, result subtype `success`, final response present
- no timeout, stderr 0
- product diff: `index.html` only
- first product write: 353,011ms
- wall time: 461,139ms
- uncached input + output tokens: 94,296

The frozen evaluator was run after the stop for forensics only. It scored
85/85, passed all six critical gates and Evidence & Unknown, and found zero
serious/critical axe violations across desktop, mobile, 320px, and the 200%
zoom surrogate. This does not retroactively make the matrix cell valid.

## Binding failure

During a static JavaScript syntax check, the model used Bash to write
`/tmp/relay_check.js`. Claude's native strict sandbox rejected that literal
path:

```text
PermissionError: [Errno 1] Operation not permitted: '/tmp/relay_check.js'
```

The model immediately switched to the runner-provided `$TMPDIR`, wrote the same
`relay_check.js` under the workspace `.t` directory, and then completed
`node --check` successfully. The provider finished normally and the product
passed the frozen evaluator.

The 1.9.20 classifier treated every explicit `operation not permitted` tool
result as an infrastructure sandbox error, regardless of a fully observed
same-file `$TMPDIR` recovery. `run-claude.mjs` therefore normalized child exit
0 to benchmark exit 1 and the matrix stopped as preregistered.

## Decision

1.9.20 remains `calibration_failed`; its run result is not rewritten. The next
bounded patch is classifier-only:

- retain the explicit tool error;
- classify it recoverable only for Bash, a direct-child simple `/tmp` file,
  a later successful Bash call referencing the same basename and `TMPDIR`, and
  a successful provider result;
- keep built-in permission denials, cwd bookkeeping errors, arbitrary paths,
  unrecovered attempts, and failed provider results fail-closed.

No product, skill, agent, task, evaluator, or harness activation change follows
from this stop.
