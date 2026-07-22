# Opus 4.8 paired task matrix — 1.9.3 replacement 2

Locked before generation on 2026-07-22.

## Replacement scope

This replaces two stopped permission-infrastructure calibrations. No product
output from `/tmp/u14` or `/tmp/u15` is reused. The current runner uses Claude
Code `acceptEdits` inside the same fail-closed native filesystem sandbox.

Before locking this matrix, exact `claude-opus-4-8` low-effort used built-in
Write → Edit → Edit → Read on one absolute file path. It produced exactly
`GAMMA`, returned `OMD_ACCEPT_EDITS_PROBE_OK`, and recorded child/process zero,
zero tool/infrastructure/sandbox/cwd errors, three built-in product writes, and
a final result in 17,643ms. Bash was forbidden by the probe prompt and unused.

## Frozen matrix

- Family: `factorial`
- Task contract: `0.3.0`
- Tasks: `pricing-conversion-v0.1`, `onboarding-setup-v0.1`,
  `incident-operations-v0.1`
- Per-task order: `raw-design-md`, then `omd-portable`
- Trials: one per task×condition; six scheduled cells
- Fresh output root: `/tmp/u16`
- Claude Code: `2.1.217`
- Model/effort: exact `claude-opus-4-8` / `xhigh`
- Permission mode: `acceptEdits` inside native strict sandbox
- Timeout: 900 seconds per cell
- Auth: unshadowed first-party subscription OAuth
- Runner/skill implementation commit: `007bc6f`

## Isolation, validity, stop rule

All six workspaces come from one clean source commit. Raw and OmD receive the
same task, starter, DESIGN.md, model, effort, tools, timeout, project settings,
and frozen evaluator. Only OmD receives the portable `omd:apply` skill and
activation. Auto-memory, background tasks, IDE auto-connect, MCP, Chrome,
network, hooks, package installation, session persistence, and unsandboxed
fallback are off.

Every scheduled cell remains in the denominator. Validity requires successful
model/auth preflight, child/process zero, no timeout, zero infrastructure,
sandbox, and cwd errors, a final response, product-only diff, evaluator output,
and normalized record. Repaired local verifier failures are reported separately
and do not invalidate a completed cell.

Any auth, quota, timeout, sandbox, cwd, or built-in permission infrastructure
failure stops generation and leaves remaining cells not run. There are no
in-preregistration retries or resumed sessions.

## Reporting limits

Report per-cell validity, UI-Resolved, objective gates, product diff, tool-error
taxonomy, uncached/cached tokens, provider price equivalent, wall time, and
write/final milestones. Descriptive matched-pair win/tie/loss is allowed.
One trial on three public development tasks is patch-selection evidence only;
no confidence interval, ranking, generality, frontier, or superiority claim is
permitted.
