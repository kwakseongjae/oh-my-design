# Opus 4.8 paired task matrix — 1.9.3 replacement

Locked before generation on 2026-07-22.

## Replacement scope

This replaces the stopped `opus-paired-matrix-1.9.3` calibration after the
Claude built-in file-tool absolute-path permission defect was fixed. The old
two artifacts remain invalid/non-comparable and are not reused.

Before this preregistration, an exact `claude-opus-4-8` low-effort probe used
built-in Read → Edit → Read on `/private/tmp/u15-probe/probe.txt`, changed
`ALPHA` to `BETA`, returned `OMD_ABSOLUTE_EDIT_PROBE_OK`, and recorded process
zero plus zero tool, infrastructure, sandbox, and cwd errors in 8,250ms.

## Frozen matrix

- Benchmark family: `factorial`
- Suite/task contract: `0.3.0`
- Tasks, in execution order:
  1. `pricing-conversion-v0.1`
  2. `onboarding-setup-v0.1`
  3. `incident-operations-v0.1`
- Conditions within each task: `raw-design-md`, then `omd-portable`
- Trials per task×condition: 1
- Scheduled runs: 6
- Fresh output root: `/tmp/u15`
- Runtime: Claude Code `2.1.217`
- Model: exact `claude-opus-4-8`
- Effort: `xhigh`
- Timeout: 900 seconds per cell
- Authentication: unshadowed first-party Claude subscription OAuth
- Runner/skill implementation commit: `f6dd200`

## Isolation and acceptance

Every workspace is freshly prepared from one clean source commit with project
settings only. Raw and OmD receive the same task, starter, DESIGN.md, model,
effort, tools, sandbox, timeout, and evaluator. Only OmD receives the portable
`omd:apply` skill and explicit activation. Auto-memory, background tasks, IDE
auto-connect, MCP, Chrome, network, session persistence, hooks, and package
installation are off.

Every scheduled cell remains in the denominator. Validity requires exact-model
and auth preflight, child/process zero, no timeout, zero infrastructure/sandbox/
cwd errors, final delivery, product-only diff, frozen evaluator output, and a
lossless normalized record. Repaired local verifier failures remain visible as
`recoverable_tool_error_count` but do not invalidate the cell.

If auth, quota, timeout, sandbox, or built-in permission infrastructure blocks
a cell, record it invalid and stop. Do not resume or replace a cell inside this
preregistration.

## Reporting limits

Report six individual cells, matched-pair descriptive win/tie/loss, objective
scores and gates, validity, tokens, provider price equivalent, wall time,
first/last product writes, and final-result time. One trial across three public
development tasks is patch-selection evidence only. No confidence interval,
ranking, generality, model superiority, or public Skill Lift claim is allowed.
