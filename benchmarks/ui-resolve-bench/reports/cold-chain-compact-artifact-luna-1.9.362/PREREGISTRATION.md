# Cold-chain compact-artifact transfer — 1.9.362

This experiment compares exact historical control `3a414a0a…` with exact compact-artifact candidate `c1de0e4e…` on the fresh `cold-chain-release-routing-review-v0.1` task locked at 1.9.361.

Luna/high, a 900-second per-cell timeout, fixed 120-second inter-cell pacing, concurrency one, no retry, and C/N–N/C–C/N balanced order are frozen. Both arms receive the same committed Codex host policy. Every cell must begin from a committed, detached, clean workspace.

Host-policy admission uses exact pin 1.9.341, checkpoint reconstruction uses exact pin 1.9.347, preregistered timeout accounting uses exact pin 1.9.353, and browser execution plus artifact lifecycle use exact pin 1.9.360. Browser preflight must pass through the same `:workspace` profile and exact browser-harness socket as the scored cell. A missing or inconsistent install, state, trace, permission path, interception, or enforcement freezes the matrix as infrastructure invalid. A ready, analyzable host that rejects a system-authored invalid artifact records a valid unresolved system failure. A declared timeout is evaluated, exported, recorded as valid unresolved, and checkpointed exactly once; resume must not replay its provider invocation.

Promotion requires candidate resolution 3/3, no serious or critical contrast result, no paired objective loss, proof and host-policy passage 3/3, and candidate mean wall time and provider tokens no more than 1.10× control. Infrastructure invalidity, checkpoint drift, or browser permission mismatch freezes the matrix and requires fresh preregistration.

This is Tokens-to-Target attempt 9. Prior observed spend is at least 18,188,850 provider-reported tokens plus four usage-unavailable cells. No prior score is pooled into this task. Provider calls at preregistration: 0.

## Preparation — 1.9.363

Fresh detached vendor worktrees and six committed, detached, clean cells were prepared under the preregistered roots. Equality is 6/6 for task, prompt, starter product, DESIGN.md, activation, runtime, model, effort, timeout, host config, proof policy, admission, resume, timeout-accounting, and browser-execution pins. The sole arm delta is the exact installed skill tree (`2d577464…` control vs `36a44a1…` compact). Provider calls at preparation: 0. The only permitted next cell is `luna-coldchain-r1-control`, after a permission-parity browser preflight, with `--max-new-cells 1` and no retry.
