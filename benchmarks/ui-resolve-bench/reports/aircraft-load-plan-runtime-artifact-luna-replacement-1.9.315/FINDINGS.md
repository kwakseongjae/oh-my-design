# Aircraft load-plan runtime-artifact transfer replacement — findings

Status: **preregistered; first preparation rejected before provider execution**

The frozen 1.9.311 matrix is excluded from quality comparison. This replacement preserves its skill treatment, task, model, effort, order, and gates while pinning repaired host infrastructure equally across both arms. Provider calls: **0**.

The first preparation under `/private/tmp/u19315` proved task, host policy, and skill equality, but its generated Git roots left all starting files untracked. That makes agent-visible `git diff` an unreliable before/after boundary. Provider calls remained 0, the root is rejected, and no cell may run from it.

The only allowed next step is to commit the 1.9.316 baseline-seal repair, preregister a new output root, and prepare all six cells again. No provider cell may run before exact equality plus detached-clean baseline attestation is green.
