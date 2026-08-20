# 1.9.29 activation calibration — external evaluator owns browser proof

## Outcome

The locale benchmark activation and delivery gate now assign browser
acceptance exclusively to the independent evaluator.

- Source commit: `2249736`
- Provider direct browser authority: none
- Preregistered direct browser maximum for the next recovery: 0
- Provider generation: none
- General production skill browser capability changed: no

This is a benchmark execution-binding calibration. It does not alter the
canonical `omd:locale-adapter` or `omd:humanize` workflows when another owning
workflow legitimately authorizes real-route inspection.

## Activation contract

The candidate activation now requires:

- no Chrome, Chromium, Playwright, browser-harness, screenshot, qlmanage, or
  other direct browser/renderer command;
- external evaluator as the only browser acceptance authority;
- static source inspection and protected fact, terminology, register, and
  repetition comparison only;
- browser proof reported unresolved without attempting it;
- no verification program, temporary shell program, CDP/browser automation,
  DOM shim, mock browser, or new test runner;
- first product edit before 450 seconds, optional content verification stopped
  by 720 seconds, and final response begun before 810 seconds.

The language skills remain responsible for five-locale adaptation and
humanization. The external evaluator remains responsible for geometry,
keyboard behavior, language state, axe, and the rendered journey.

## Gate calibration

The runner's existing `max_direct_browser_commands` gate now has explicit
zero-budget tests:

- count 0 at maximum 0: pass;
- count 1 at maximum 0: `direct-browser-command-budget-exceeded`;
- count 0/1/2 at maximum 1: pass/pass/fail.

Discovery commands remain count zero. Replacement-verifier and tool-error
classifiers remain independent.

## Prepared activation proof

A clean, provider-free sandbox at `/tmp/u1929-activation-proof` confirms:

- source attestation commit `2249736`;
- clean and publishable source tree;
- exact activation appears in both the manifest and rendered benchmark prompt;
- both language skills install through the reviewed Claude Code adapter;
- hooks, agents, network, and third-party installers remain disabled;
- the removed one-direct-browser allowance is absent.

## Verification

- focused benchmark tests: 27/27
- full root tests: 217 passed / 1 conditional skip
- TypeScript: pass
- CLI build: pass
- JSON and diff checks: pass
- clean prepared activation: pass
- max-zero mutation: pass

## Decision

Mark 1.9.29 `calibration_complete`. A fresh candidate-only locale recovery may
run as 1.9.30 under a new root with
`max_direct_browser_commands: 0`.

This patch does not validate 1.9.28, does not permit resuming `/tmp/u1928`, and
provides no model, skill, quality-lift, efficiency, or frontier claim.

