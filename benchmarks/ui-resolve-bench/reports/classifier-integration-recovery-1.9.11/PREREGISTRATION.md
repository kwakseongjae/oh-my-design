# Classifier integration recovery — 1.9.11

Locked before workspace preparation or generation on 2026-07-23.

## Question

Can a fresh exact-Opus Pricing portable run encounter the same optional
renderer environment block that stopped 1.9.9, classify it as recoverable, and
still complete as a valid 85/85 cell without authoring a substitute verifier?

This is a one-cell runner integration recovery. It does not retry or replace
the 1.9.9 cell and cannot support quality, efficiency, harness, model, or
frontier claims.

## Frozen cell

- Family/status: Harness Track infrastructure / Internal
- Task/contract: `pricing-conversion-v0.1` / `0.3.0`
- Variant/system: `omd-portable` / `omd-portable-classifier-recovery`
- Runtime: Claude Code `2.1.217` or newer, recorded
- Model/effort: exact `claude-opus-4-8` / `xhigh`
- Timeout: 900 seconds
- Product skill basis: `e348c81`
- Context-aware classifier basis: `67df331`
- Output root: `/tmp/u1911`
- Schedule: `RUN-MATRIX.json`

## Acceptance

The recovery passes only if all conditions hold:

1. provider and child exit zero, no timeout, exact model observed, and final
   response present;
2. frozen evaluator returns 85/85, UI-Resolved, all critical gates, and Evidence
   & Unknown pass;
3. at least one optional renderer environment error is observed;
4. every such renderer error is recoverable and infrastructure/sandbox/cwd
   counts remain zero;
5. no replacement verifier, DOM shim, or mock browser is authored; and
6. only allowed product files change.

If the provider completes but no optional renderer block occurs, record the run
as valid product evidence but classify this recovery `inconclusive-path-not-
observed`; do not unlock the full matrix. Any process/auth/quota/model/sandbox/
cwd/evaluator failure stops and fails the experiment. There is one cell and no
retry.

Only a full pass may unlock a new 1.9.12 repeated matrix in fresh workspaces.
The retained 1.9.9 result remains invalid regardless of this outcome.

