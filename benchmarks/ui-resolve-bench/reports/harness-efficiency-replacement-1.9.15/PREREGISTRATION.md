# Harness efficiency replacement — 1.9.15

Locked before workspace preparation or generation on 2026-07-23.

## Question

With exact model/runtime/task/evaluator parity, does the delivery-budget and
verification-authority repair harness produce a non-dominated quality, time,
and token tradeoff relative to portable OmD across three UI task families and
three fresh trials?

This matrix follows the stopped 1.9.13 experiment and passing 1.9.14 authority
recovery. No earlier run enters its denominator. It remains an Internal Harness
Track calibration and cannot support a public best-skill, model, frontier, or
global-rank claim.

## Frozen matrix

- Systems: `omd-portable` baseline and
  `omd-repair-harness-verification-authority` candidate
- Runtime: Claude Code 2.1.217 or newer, recorded per run
- Parent model/effort: exact `claude-opus-4-8` / `xhigh`
- Candidate specialists: `omd-ux-writer` and `omd-ux-engineer`, exactly once
  each with requested model `opus`
- Tasks: Pricing, Onboarding, and Incident Operations v0.1
- Task contract: `0.3.0`
- Trials: three per task and system; 18 fresh scheduled cells
- Timeout: 900 seconds per cell
- Candidate first product write: at or before 450,000ms
- Candidate authored verification program/replacement verifier: zero
- Reliability: `Reliability@3`
- Bootstrap: 2,000 task→run hierarchical samples, seed `20260727`
- Product and authority basis: `dc27f8f`
- Delivery executor basis: `eb3a300`
- Renderer observability basis: `ad3c3b6`
- Output root: `/tmp/u1915`
- Schedule: `RUN-MATRIX.json`

Pairs remain adjacent, task families are interleaved by trial, and pair order
is balanced portable-first five versus harness-first four.

## Frozen candidate delta

Both systems receive the same starter, prompt, DESIGN.md, canonical
`omd:apply`, model, effort, timeout, no-network sandbox, and frozen evaluator.
Only the candidate receives the two read-only Opus specialist calls, immutable
protected ledger, 50/80/90% delivery clock, and verification-authority layer.

The acceptance packet is a checklist/result, not an executable. Candidate may
run repository-existing checks or one direct browser command that writes no
verification program. It may not author `verify.*`, `verifier.*`, `check.*`,
`probe.*`, a temporary shell file, CDP/browser automation, DOM shim, mock
browser, or new test runner. A blocked attempt becomes unresolved and delivery
begins.

## Validity and stop policy

Every scheduled cell remains in the denominator. A cell is valid only when the
provider and child exit zero, no timeout occurs, a final response and product
diff exist, exact model attribution holds, the frozen evaluator completes, and
infrastructure/sandbox/cwd errors are zero.

Each candidate additionally requires specialist calls 2/2 with zero Agent
errors, first product write by 450,000ms, and zero authored verification
programs or replacement verifiers. Any auth/quota/model/process/timeout/final/
Agent/delivery/authority/evaluator/export failure stops generation immediately.
There are no retries. Completed product-quality failures are counted and do not
stop later cells.

## Metrics and promotion

Report scheduled/attempted/valid/completed/timeout/not-started; UI-Resolved,
objective score, paired win/tie/loss, Reliability@3, critical and Evidence &
Unknown rates; median/P90 wall, uncached tokens, first/last write, provider
telemetry, Agent attribution, authority violations, and intervention count.

Candidate promotion requires all nine candidate cells valid; quality not lower;
paired wins greater than losses with at least one win; no Reliability@3 task
loss; Evidence & Unknown 9/9; median wall ≤1.50×; median tokens ≤1.75×; and zero
unplanned intervention. If quality ties while both median time and tokens are
higher, portable strictly dominates. Otherwise report non-dominance only when
the frozen rules support it.

Do not merge this result with Skill Lift or Model Track, publish a frontier
leaderboard, or use a failed/post-stop artifact. A new failure stays visible
and determines the next bounded 1.9.x patch.

