# 1.9.735 findings — bounded council dispatch

## Outcome

The harness now turns non-automatic intake decisions into a deterministic
dispatch plan. It selects only relevant lanes, caps the pre-intake council at
four read-only calls, permits no retries, and retains `omd-master` as the sole
implementation owner. An all-automatic brief dispatches no agents.

Each lane must write structured claims with existing repository or run-relative
evidence. The reconciler rejects missing citations, claims outside the lane's
assigned decisions, and every promotion toward `auto`. The automatic snapshot
is SHA-256 bound before dispatch and reconciliation fails closed if it changes.
Accepted advice may only keep or narrow non-automatic dispositions; the
original and effective dispositions both remain reconstructable.

The same contract is distributed to Claude Code, Codex, and OpenCode. The
master prefers the reconciled ledger, never claims a council ran without a
debate receipt, and permits at most one non-retried read-only contrarian check
before the ship gate.

## Verification

- focused council, calibration, and installer suite: 49 passed;
- full repository suite: 788 passed, 3 skipped;
- TypeScript lint, production build, and cross-surface counts: passed;
- unknown values remain absent and mandatory user checkpoints remain intact.

## Honest boundary

This patch proves the local execution contract, installer parity, citation
filter, transition bounds, and automatic-value freeze. It does not prove that a
live multi-agent council improves a design or reduces user intervention. The
next eligible experiment is a fresh repeated harness comparison with the same
model and task denominator: council off versus bounded council on, measuring
unplanned questions, decision reversals, resolved outcome, elapsed time, and
reported tokens.
