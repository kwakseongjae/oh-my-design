# Locale zero-browser recovery — 1.9.30

Locked before workspace preparation or provider generation on 2026-07-23.

## Question

Can the OmD locale stack reproduce a fully resolved five-locale handoff when
the provider performs content verification only and the external evaluator
exclusively owns all browser acceptance?

This is a fresh candidate-only recovery for failed 1.9.28. It does not reuse,
resume, retry, score, or edit `/tmp/u1928`, and it does not change the frozen
1.9.26 or 1.9.28 decisions.

## Frozen basis

- Task: `locale-cli-handoff-v0.1` version `0.2.0`
- Task/evaluator basis: `b128aef`
- Direct-browser counter/gate basis: `9df4eca`
- Zero-browser activation basis: `2249736`
- Evaluator score schema: `0.3`
- Variant: `omd-locale-handoff`
- Runtime: Claude Code 2.1.217 or newer, recorded in the run
- Parent model/effort: exact `claude-opus-4-8` / `xhigh`
- Trial: one fresh candidate cell
- Timeout: 900 seconds
- Output root: `/tmp/u1930`
- Network, hooks, Agent tool, MCP, and third-party installers: disabled

## Frozen process authority

- first product write: no later than 450,000ms;
- optional content verification stops by 720,000ms;
- final response begins before 810,000ms;
- direct Chrome, Chromium, Playwright, browser-harness, screenshot, qlmanage,
  or renderer commands: zero;
- external evaluator is the only browser acceptance authority;
- provider verification is static source plus protected fact, terminology,
  register, and repetition comparison;
- replacement verifier, verify/check/probe program, temporary shell program,
  CDP/browser automation, DOM shim, mock browser, or new test runner: zero.

The runner freezes `max_direct_browser_commands: 0`,
`first_product_write_ms_max: 450000`, and
`forbid_replacement_verifier: true` for `locale-skill-stack`.

## Validity and stop policy

The cell is valid only when provider and child exit zero, no timeout occurs, a
final response and product diff exist, exact parent model attribution holds,
all delivery gates pass, the external evaluator and export complete, and
infrastructure/sandbox/cwd errors are zero.

Any auth, quota, model, process, timeout, final, delivery, browser, verifier,
evaluator, or export failure stops immediately. There are no retries, resumes,
workspace reuse, or manual product edits.

## Recovery decision

`calibration_complete` requires:

- valid process and exact parent model;
- first product write no later than 450,000ms;
- direct browser command count exactly 0;
- replacement verifier authored: false;
- objective score 85/85 and all six critical gates;
- all five click and roving-keyboard locale states exact;
- active panel, body locale, and root language exact and restored to KO;
- every required and forbidden locale terminology pattern passes;
- command, 12, 3, and `DESIGN.md` preserved in all five locales;
- all four responsive geometry profiles pass;
- unsupported claims and proof structures: zero;
- axe serious/critical: zero at all four viewports;
- no unplanned intervention.

Anything else is retained as `calibration_failed` or `inconclusive`. A pass
validates this one execution path and may unlock a repeated locale matrix; it
does not establish general locale lift, efficiency, or public frontier status.

