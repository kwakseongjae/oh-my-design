# Investigational-product depot comparison plan — 1.9.680

## Prepared result

The frozen 1.9.679 holdout now has a six-cell, balanced Raw DESIGN.md versus exact current `omd:apply` comparison plan.

- Three trials per arm, ordered control/OmD, OmD/control, control/OmD.
- Same task, prompt, starter tree, initial product tree, runtime, Luna model, high effort, 900-second timeout, and objective evaluator in every cell.
- Exact OmD source: publishable commit `f3c90aaf…`, skill hash `cd1e35c1…`.
- Six of six workspaces prepared and untouched.
- Provider calls: **0**. Model exposures: **0**. Execution artifacts: **0**.

The reusable admission auditor returned green for every normalization dimension. A direct runner attempt then failed closed with `matrix-execution-hold:remote-execution-deferred`; a second audit confirmed that this attempt created no provider or execution artifacts.

## What this does and does not prove

This is a preregistered execution package, not a scored comparison. It proves that the new holdout can be handed to both arms under equal, immutable conditions and that the current no-remote rule cannot be bypassed accidentally.

It does not prove OmD improves UI quality, Luna performance, latency, token efficiency, or human preference. Those claims require executing a fresh unlocked copy, completing all six cells without replay, running the frozen evaluator, and separately collecting blinded Ship Preference judgments.

## Next release boundary

Keep the task and this prepared root immutable. If the evaluator epoch or OmD source changes before execution, prepare a new root instead of updating this evidence in place. Under the current local-only constraint, the next useful work is strengthening offline claim-readiness and 2.0 stop-condition reporting rather than fabricating model outcomes.
