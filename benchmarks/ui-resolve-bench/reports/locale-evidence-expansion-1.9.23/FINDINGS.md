# 1.9.23 findings — locale stack timed out during replacement verification

## Outcome

The preregistered two-cell smoke stopped at cell 2,
`locale-handoff-t1-omd`, with `timeout`.

- Scheduled: 2
- Attempted: 2
- Valid complete: 1
- Stopped: 1
- Retry/resume: forbidden
- Calibration decision: failed
- Public locale-lift/frontier claim: unavailable

`/tmp/u1923` remains immutable and must not be resumed or retried. The stopped
candidate has no frozen evaluator score.

## Valid control

`locale-handoff-t1-raw` completed with exact parent model
`claude-opus-4-8` / `xhigh`:

- objective score: 70/85; UI-Resolved false
- critical gates: task contract, design grounding, and Evidence & Unknown pass;
  state journey, responsive, and accessibility fail
- locale result: forbidden terminology removed, but at least one required
  locale term remained absent
- responsive result: geometry failed at all four frozen viewports
- accessibility: axe serious/critical zero, but keyboard traversal failed
- wall time: 710,140ms
- uncached input + output tokens: 141,364
- first product write: 338,306ms
- recoverable tool errors: 3; infrastructure/sandbox/cwd errors: 0
- product diff: `index.html`

The control also authored a replacement verification program. It remained a
valid cell because 1.9.23 did not preregister that as a control stop condition,
but the behavior is retained as a process defect.

## Stopped candidate forensics

The candidate process reported exact parent model `claude-opus-4-8`, no Agent
calls, no infrastructure/sandbox/cwd error, and no final response:

- child exit: 143
- timeout: 900,040ms
- final response: absent
- product diff: `index.html`
- first product write: 339,542ms
- last product write: 849,487ms
- uncached input + output tokens: 170,455
- optional renderer environment errors: 2

The two installed skills were read by 18 seconds. Skill loading was not the
delay. The first product write occurred inside the expected half-budget window.

After that write, the process spent most of the remaining budget constructing
and repairing its own verification environment:

- 23 tool calls at or after the first write
- 17 calls involving authored `.t/` verification files
- 6 Chrome/CDP/remote-debugging attempts
- authored `cdp.mjs`, `run.mjs`, `probe.mjs`, `dom.mjs`, `behavior.mjs`, and
  `contract.mjs`
- four final product edits at 834–849 seconds

The process reached the timeout before a final response. Per preregistration,
the stopped artifact was not evaluated and cannot be used as product-quality
evidence.

## Binding failure

The activation asked the humanizer to run in `VERIFY` mode but did not define
verification authority or a delivery clock. Combined with the task's request
to exercise the interaction locally, the parent interpreted VERIFY as
permission to build a replacement browser/DOM test system after Chrome was
blocked.

The next bounded patch is process-only:

1. define locale VERIFY as a protected-fact and terminology comparison, not a
   license to author verification software;
2. allow repository-existing checks or one direct browser attempt only;
3. forbid `verify/check/probe` programs, CDP automation, DOM shims, mock
   browsers, and new test runners;
4. stop optional verification by 720 seconds and begin final delivery by 810;
5. require a fresh candidate recovery cell with first write ≤450 seconds,
   no replacement verifier, final response, and frozen 85/85.

This recovery does not modify the locale skills' linguistic rules, task,
starter, evaluator, model, or timeout.
