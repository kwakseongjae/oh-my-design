# Caption cue host-policy comparison — 1.9.216

This is the first scored comparison after the recovery and outcome-attribution fixes in 1.9.211–1.9.214. The unseen `caption-cue-timing-review-v0.1` task was locked before provider generation in 1.9.215. No earlier result from this task exists.

## Frozen comparison

The two arms use the same task, prompt, untouched starter, DESIGN.md, detached `omd-portable-proof-close-latch-candidate` skill, Codex runtime, `gpt-5.6-luna`, high effort, 900-second timeout, user configuration, and balanced 2×3 order. Both are fresh Git roots. The sole paired arm delta is the explicit project proof-policy installation; only that arm receives Codex's automation-only hook-trust bypass.

Execution is sequential with at most one new cell per invocation, fixed 120-second inter-cell pacing, no retry, no same-root repair, no fallback model, and no result substitution. Input, cached-input, output, reasoning-output, step, and wall-time usage are observed rather than capped.

## Frozen interpretation

The installed policy is a sequence and attempt-budget controller, not a test-result oracle. A string PostToolUse response may close an observed attempt while leaving its result unresolved. `browser-proof-passed` is neither required nor credited unless the host supplies structured success evidence.

The matrix is execution-valid only when all six cells complete from the locked preparation, all three installed cells contain valid policy state, and every installed cell has zero unblocked browser recovery, duplicate static closure, and verification-after-ready violations. Any infrastructure, timeout-attribution, policy-state, preparation, or identity drift freezes the entire root.

Quality is scored independently by the existing deterministic UI contract. We report UI-Resolved rate, objective points, paired win/tie/loss, wall time, tokens, proof trace, and installed policy state. The opt-in policy may remain available when its execution gate passes, but broader/default promotion requires all three installed trials to be UI-Resolved and zero paired objective-point loss. Results cannot be reinterpreted by changing these gates after execution.
