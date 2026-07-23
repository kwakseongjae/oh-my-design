# 1.9.27 classifier calibration — direct browser authority

## Hypothesis

The matrix runner can enforce a preregistered direct-browser command budget by
counting actual headless browser invocations in Bash tool uses, independently
of shell exit status, without mistaking browser discovery for execution.

This is a classifier calibration. It generated no new model output and does not
change the retained 1.9.26 result.

## Bounded counter and gate

`directBrowserCommandCount` now:

1. reads assistant Bash tool uses only;
2. counts quoted Google Chrome or Chromium executables and command tokens such
   as `chromium` or `google-chrome-stable` only when they are followed by an
   actual `--headless` invocation;
3. counts multiple invocations inside one shell tool call separately;
4. ignores discovery such as `ls` or `which` that merely mentions a browser;
5. does not depend on a linked tool result being marked `is_error:true`.

`harnessDeliveryStopReason` applies
`max_direct_browser_commands` only to the preregistered `variant_kinds`. A
count above the maximum returns
`direct-browser-command-budget-exceeded`. Existing first-write,
advisory-to-edit, targeted-edit, replacement-verifier, infrastructure,
sandbox, and cwd rules are unchanged.

Completed matrix summaries now retain `direct_browser_command_count` for
inspection.

## Mutation calibration

The focused tests prove:

- browser installation discovery: count 0;
- one quoted headless Chrome invocation: count 1 and pass at max 1;
- two invocations in one Bash call: count 2;
- two invocations across calls: count 2 and fail at max 1;
- zero invocations: pass at max 1.

## Retained 1.9.26 replay

The immutable candidate trace at
`/tmp/u1926/locale-standards-t1-omd/.benchmark/events.jsonl` replays as:

- actual direct headless browser commands: 2;
- preregistered maximum: 1;
- new stop reason: `direct-browser-command-budget-exceeded`;
- replacement verifier: still false;
- explicit tool errors: still 0;
- infrastructure/sandbox/cwd errors: still 0/0/0.

This confirms the manual 1.9.26 decision with an executable runner gate. The
stored execution state, run result, score, and export remain untouched.

## Verification

- focused runner tests: 13/13
- full root tests: 217 passed / 1 conditional skip
- TypeScript: pass
- CLI build: pass
- Node syntax: pass
- diff check: pass
- retained trace replay: count 2, fail closed at max 1

## Decision

Mark 1.9.27 `calibration_complete`. A fresh candidate-only locale recovery may
run as 1.9.28 under a new root with
`max_direct_browser_commands: 1` frozen into its matrix plan.

This calibration does not make 1.9.26 valid, does not permit a resume or retry
of `/tmp/u1926`, and provides no model, skill, quality-lift, efficiency, or
frontier claim.

