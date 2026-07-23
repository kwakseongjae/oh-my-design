# Locale browser-authority recovery — 1.9.28

Locked before workspace preparation or provider generation on 2026-07-23.

## Question

Can the same OmD locale stack reproduce its 85/85 five-locale result in a fresh
workspace while respecting the full delivery authority: no replacement
verifier and at most one direct headless-browser command?

This is a candidate-only process recovery for failed 1.9.26. It does not reuse,
resume, retry, edit, or reevaluate `/tmp/u1926`, and it does not retroactively
change that experiment.

## Frozen task, runtime, and evaluator

- Task: `locale-cli-handoff-v0.1` version `0.2.0`
- Task/evaluator source basis: `b128aef`
- Delivery runner source basis: `9df4eca`
- Evaluator score schema: `0.3`
- Variant: `omd-locale-handoff`
- Runtime: Claude Code 2.1.217 or newer, recorded in the run
- Parent model/effort: exact `claude-opus-4-8` / `xhigh`
- Trial: one fresh candidate cell
- Timeout: 900 seconds
- Output root: `/tmp/u1928`
- Network, hooks, Agent tool, MCP, and third-party installers: disabled

The five locale oracles, protected command and facts, prompt, starter,
DESIGN.md, viewports, and external evaluator are unchanged from 1.9.26.

## Frozen process authority

- first product write: no later than 450,000ms;
- optional verification stops by 720,000ms;
- final response begins before 810,000ms;
- repository-existing checks or at most one direct headless-browser command;
- direct headless-browser command count: 0 or 1;
- blocked browser proof becomes unresolved and delivery continues;
- replacement verifier, verify/check/probe program, temporary shell program,
  CDP/browser automation, DOM shim, mock browser, or new test runner: zero.

The runner applies the first-write, replacement-verifier, and
`max_direct_browser_commands: 1` gates to `locale-skill-stack`.

## Validity and stop policy

The cell is valid only when provider and child exit zero, no timeout occurs, a
final response and product diff exist, exact parent model attribution holds,
the delivery gates pass, the external evaluator and export complete, and
infrastructure/sandbox/cwd errors are zero.

Any auth, quota, model, process, timeout, final, delivery, browser budget,
replacement-verifier, evaluator, or export failure stops immediately. There
are no retries, resumes, workspace reuse, or manual product edits.

## Recovery decision

`calibration_complete` requires:

- valid process and exact parent model;
- first product write no later than 450,000ms;
- direct headless-browser command count at most 1;
- replacement verifier authored: false;
- objective score 85/85;
- all six critical gates pass;
- all five click and roving-keyboard locale states exact;
- every required and forbidden locale terminology pattern passes;
- command, 12, 3, and `DESIGN.md` preserved in all five locales;
- all four responsive geometry profiles pass;
- unsupported claims and proof structures: zero;
- axe serious/critical: zero at all four viewports;
- no unplanned intervention.

Anything else is retained as `calibration_failed` or `inconclusive`. A pass
validates this one process path and may unlock a repeated locale matrix. It
does not establish general locale lift, efficiency, or public frontier status.

