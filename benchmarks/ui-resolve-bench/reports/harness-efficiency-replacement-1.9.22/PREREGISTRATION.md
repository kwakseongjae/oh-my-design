# Harness efficiency replacement — 1.9.22

Locked before workspace preparation or provider generation on 2026-07-23.

## Question

With exact model/runtime/task/evaluator parity, does the repair harness with
bounded first-safe-edit scheduling, verification authority, and semantic-color
safety produce a non-dominated quality, reliability, time, and token tradeoff
relative to portable OmD across three UI task families and three fresh trials?

This fresh matrix follows failed 1.9.20 and completed 1.9.21 classifier
calibration. No 1.9.19 or 1.9.20 cell enters its denominator. It remains an
Internal Harness Track calibration and cannot support a public best-skill,
model, frontier, or global-rank claim.

## Frozen matrix

- Systems: `omd-portable` and `omd-repair-harness-first-safe-edit`
- Runtime: Claude Code 2.1.217 or newer, recorded per run
- Parent model/effort: exact `claude-opus-4-8` / `xhigh`
- Candidate specialists: `omd-ux-writer` and `omd-ux-engineer`, exactly once
  each with requested model `opus`
- Tasks: Pricing, Onboarding, and Incident Operations v0.1
- Task contract: `0.3.0`
- Trials: three per task and system; 18 fresh cells
- Timeout: 900 seconds per cell
- Candidate first product write: ≤450,000ms
- Candidate last advisory to first product write: 0–90,000ms
- Candidate first transaction: targeted non-no-op `Edit`
- Candidate authored verifier/verification program: zero
- Candidate serious/critical axe violations: zero
- Reliability: `Reliability@3`
- Bootstrap: 2,000 task→run hierarchical samples, seed `20260802`
- Product/activation basis: `a71a122`
- Advisory timing executor basis: `a861e2d`
- Targeted transaction executor basis: `d3bf7a4`
- Scratch-path classifier basis: `d422186`
- Output root: `/tmp/u1922`
- Schedule: `RUN-MATRIX.json`

Pairs remain adjacent and task families are interleaved. Pair order contains
five portable-first and four harness-first pairs. Every workspace is prepared
from the canonical starter; no prior workspace or result is copied.

## Frozen delta

The two systems receive identical starter, prompt, DESIGN.md, canonical
`omd:apply`, model, effort, timeout, no-network sandbox, and frozen evaluator.
Only the candidate receives the two read-only Opus specialists, immutable
protected and semantic-color ledgers, bounded first-safe-edit response,
50/80/90% clock, advisory-to-edit gate, and verification-authority activation.

The runner keeps every explicit tool error. A literal direct-child `/tmp` Bash
permission denial is recoverable only if a later successful Bash call uses the
same basename with `TMPDIR` and the provider finishes successfully. Built-in
permission denial, cwd failure, nested/arbitrary path, missing recovery, or
failed provider result remains infrastructure fail-closed.

## Validity and stop policy

A cell is valid only when provider and child exit zero, no timeout occurs, a
final response and product diff exist, exact model attribution holds, the
frozen evaluator completes, and infrastructure/sandbox/cwd errors are zero.

Each candidate additionally requires specialists 2/2 with zero Agent errors,
both timing gates, a targeted non-no-op first Edit, zero serious/critical axe
findings, and zero authored verification programs/replacement verifiers.
Any auth, quota, model, process, timeout, final, Agent, delivery, transaction,
authority, evaluator, or export failure stops immediately. There are no
retries. Product-quality failures are counted and do not stop later cells.

## Promotion

Promotion requires all nine candidate cells valid; quality not lower; paired
wins greater than losses with at least one win; no Reliability@3 task loss;
Evidence & Unknown 9/9; axe serious/critical 0; timing/transaction compliance
9/9; median wall ≤1.50x; median tokens ≤1.75x; and zero intervention. If quality
ties while both median time and tokens are higher, portable strictly dominates.

Do not merge this result with Skill Lift or Model Track, publish a frontier
leaderboard, resume a stopped root, or use a post-stop artifact.
