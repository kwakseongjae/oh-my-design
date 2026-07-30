# 1.9.108 findings — deletion decision-context comparison

## Outcome

COMPLETE; deterministic ceiling tie.

All six preregistered Cursor/Grok 4.5 High cells completed without timeout,
retry, fallback, repair, replacement, or model substitution. Both arms reached
3/3 valid, UI-Resolved, 85/85 outcomes and Reliability@3 of 100%.

Paired deterministic W/T/L for experimental versus control is 0/3/0. The
bounded rule did not break the objective contract, but the objective evaluator
cannot establish whether it improves the decision hierarchy.

## Compute telemetry

| Arm | Wall time mean / median | Tokens mean / median |
|---|---:|---:|
| Exact current control | 271,476 / 275,831 ms | 135,446 / 112,950 |
| Decision-context experimental | 375,391 / 395,240 ms | 167,700 / 104,733 |

Latency remains descriptive-only because the locked execution contract marks
it non-comparable and this is one task family with three trials. The
experimental arm has higher mean wall time and token usage, but the trial-level
compute signal is highly variable and cannot support a promotion or rejection
alone.

## Decision

Do not modify the canonical skill yet. Both arms are objectively eligible for
same-trial anonymous owner review. The owner must judge Functionality,
Usability, Fidelity, and Ship Preference without seeing arm identity, automatic
score, time, or token use.

