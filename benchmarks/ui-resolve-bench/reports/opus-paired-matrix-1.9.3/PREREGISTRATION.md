# Opus 4.8 paired task matrix — 1.9.3

Locked before generation on 2026-07-22.

## Question

With task contract `0.3.0`, Claude auto-memory/background/IDE state disabled,
and recoverable work failures separated from infrastructure failures, can both
Raw DESIGN.md and the portable `omd:apply` skill complete all three development
tasks? What product-quality, delivery-time, and first-edit signals should select
the next single-variable patch?

This is an internal calibration matrix. One trial per task×condition is not
enough for a reliability, superiority, or frontier claim.

## Frozen matrix

- Benchmark family: `factorial` (model × Claude Code runtime × skill condition)
- Suite/task contract: `0.3.0`
- Tasks, in execution order:
  1. `pricing-conversion-v0.1`
  2. `onboarding-setup-v0.1`
  3. `incident-operations-v0.1`
- Conditions within each task, in order:
  1. `raw-design-md`
  2. `omd-portable`
- Trials per task×condition: 1
- Scheduled runs: 6
- Output root: `/tmp/u14`
- Runtime: Claude Code `2.1.217` or newer
- Model: exact `claude-opus-4-8`; moving aliases forbidden
- Effort: `xhigh`
- Timeout: 900 seconds per cell
- Authentication: first-party Claude subscription OAuth with API/provider
  credential shadowing forbidden
- Candidate implementation commit: `61b3714`

## Isolation

- Every workspace is prepared from the same clean candidate commit with
  `--runtime claude-code`.
- Raw and OmD receive the same task prompt, starter, DESIGN.md, model, effort,
  tools, timeout, native sandbox, project-only setting source, and evaluator.
- Only OmD receives `.claude/skills/omd-apply` and its explicit activation.
- `CLAUDE_CODE_DISABLE_AUTO_MEMORY=1`, background tasks off, IDE auto-connect
  off, MCP/Chrome/network off, no session persistence, and project-local temp
  state apply to all six cells.
- Generation is sequential. The frozen evaluator runs only after a cell has
  delivered and cannot affect later model prompts.

## Acceptance taxonomy

Every scheduled cell remains in the denominator. A cell is valid only when:

1. exact-model, version, auth, and credential-shadow preflight pass;
2. child/process exit zero without timeout;
3. `infrastructure_tool_error_count`, `sandbox_error_count`, and
   `sandbox_cwd_error_count` are all zero;
4. a final delivery message is present;
5. the product-only diff is recorded;
6. the unchanged task evaluator emits an objective score; and
7. the normalized record exports without schema loss.

`recoverable_tool_error_count` does not by itself invalidate a cell. It covers
a red local verifier or audit that is followed by repair, normal final delivery,
and frozen evaluator completion. It must still be reported. Sandbox/cwd denial,
auth/model failure, timeout, missing final delivery, evaluator absence, or
terminal unresolved execution remains infrastructure-invalid.

If subscription quota or auth blocks a scheduled run, record the cell as
invalid-infrastructure and stop generation. Do not silently replace or resume
it under this preregistration.

## Reporting limits

Report each cell's validity, UI-Resolved, objective score, failed gates,
product diff, recoverable/infrastructure errors, uncached and cached tokens,
provider price equivalent, wall time, and first/last product-write/final-result
milestones. Aggregate only descriptive matched-pair win/tie/loss and deltas.
Do not publish a lift, confidence interval, ranking, or model/skill superiority
claim from this six-run calibration.
