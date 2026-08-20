# 1.9.28 findings — repeated browser retry stopped automatically

## Outcome

The fresh candidate completed provider execution but was stopped by the new
preregistered runner gate before evaluation or export.

- Scheduled/attempted/completed denominator: 1/1/0
- Matrix status: `stopped-preregistered`
- Stop reason: `direct-browser-command-budget-exceeded`
- Direct headless-browser commands: 2
- Preregistered maximum: 1
- External evaluator: not run
- Retry/resume/manual edit: none

`/tmp/u1928` is frozen and must not be resumed, retried, or scored.

## Valid provider facts before the stop

- Claude Code: 2.1.217
- exact parent model/effort: `claude-opus-4-8` / `xhigh`
- provider and child exit: 0 / 0
- timeout: false
- wall time: 418,339ms
- uncached input + output tokens: 95,444
- first and last product write: 338,863ms
- final response: present
- product diff: `index.html`
- replacement verifier authored: false
- explicit/recoverable/infrastructure/sandbox/cwd errors: 0/0/0/0/0

These facts establish that the stop is the browser-authority gate, not auth,
model, timeout, delivery, verifier, or infrastructure failure. They do not
authorize a product-quality score after the stop.

## Repeated violation

The candidate made:

1. a headless Chrome `--dump-dom` call with `--no-sandbox`, suppressed stderr,
   and no useful output;
2. 5.7 seconds later, a second headless Chrome `--dump-dom` call with changed
   options to expose environment output.

This repeats the 1.9.26 pattern: the first optional browser attempt is blocked
or silent, and the model treats a diagnostic retry as distinct from the
one-mechanism budget. The 1.9.27 counter correctly treats both as actual direct
browser invocations and stopped the matrix before the external evaluator.

## Diagnosis

The locale activation still grants one optional direct browser command while
also asking the agent to verify a UI route. In this environment, a silent first
Chrome attempt creates a strong retry incentive. Repeating “attempt once” has
not been a stable binding:

- 1.9.26: two Chrome calls, discovered after automatic completion;
- 1.9.28: two Chrome calls, stopped automatically.

The independent benchmark evaluator already owns browser geometry, keyboard,
axe, language, and journey proof. The provider does not need direct browser
authority for this track.

## Decision

1.9.28 is `calibration_failed`. The next bounded change removes provider
browser authority from the locale benchmark activation:

- direct Chrome, Chromium, Playwright, browser-harness, screenshot, or renderer
  command: forbidden;
- external evaluator is the only browser acceptance authority;
- provider uses static source inspection and protected fact/terminology
  comparison only;
- blocked or absent runtime proof is reported unresolved without an attempt;
- matrix freezes `max_direct_browser_commands: 0`.

This is a benchmark execution binding, not a change to the general product
skill's ability to inspect a real route when the owning workflow authorizes it.
A fresh recovery must use a new source commit, version, and root.

