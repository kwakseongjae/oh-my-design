# Aircraft native-browser-enforced replacement — findings

Status: **frozen after paired candidate timeout; candidate promotion failed**

The scientific treatment, task, runtime, effort, pacing, retry, ordering, and promotion contract are unchanged. Only the equally shared committed host-policy infrastructure advances to `682c094d…`.

The fresh roots are `/private/tmp/u19330-vendors` and `/private/tmp/u19330`. No provider cell may start until both exact vendors and all six cells are committed, detached, clean, equality-attested, and browser-preflight ready. Execution remains one cell per checkpoint with no retry or substitution.

At preregistration, provider calls remain 0. Known infrastructure-invalid spend is 8,453,412 tokens plus one usage-unavailable cell; total observed attempt spend including the valid prior control is 10,415,571 tokens plus one usage-unavailable cell.

## Preparation — 1.9.331

All six cells share one task, core/runtime prompt, starter, product, DESIGN.md, activation, runtime, model, effort, timeout, and exact installed host-policy contract. Each workspace begins from a local committed baseline in detached HEAD with a clean status. Both vendor sources are exact, detached, clean, and publishable. The installed skill tree `2d577464…` versus `bb3ac833…` is the sole arm delta.

Provider calls remain 0. The next and only allowed cell is `luna-load-r1-control-native-enforced` through canonical `--max-new-cells 1`; no retry, substitution, or same-root repair is allowed.

## Checkpoint 1 — 1.9.332

The first control is valid and checkpointed: 79/85, `ui_resolved=false`, 726,928ms, and 2,519,978 provider-reported tokens. Browser readiness passed before provider execution. The run changed `index.html`, used exactly one static and one browser proof, made no browser recovery attempt, reached delivery ready, and passed both proof-execution and installed host-policy gates.

The single browser-harness proof failed before measurement and was honestly closed as unresolved. Quality remains unresolved because mobile, 320px, and 200%-equivalent layouts exceed the short atomic-text line budget, with mid-token fragmentation at 320px and 200%. Accessibility passed in this cell.

Known infrastructure-invalid spend remains 8,453,412 tokens plus one usage-unavailable cell. Total observed attempt spend is now 12,935,549 provider tokens plus one usage-unavailable cell. The next allowed cell is paired R1 candidate `luna-load-r1-artifact-native-enforced`, under the fixed pacing boundary; the control is never retried.

## Checkpoint 2 — 1.9.333

The paired candidate changed `index.html` but reached the fixed 900-second timeout at 900,022ms. It emitted no final response, score, proof trace, host-policy summary, or provider usage event. Per the locked timeout contract this is a valid candidate failure, not a retryable infrastructure exception. The matrix is `stopped-preregistered`, `/private/tmp/u19330` has a STOP marker, and the remaining four cells are not started.

The runtime evidence explains the failure boundary. The candidate spent most of its budget authoring and repairing a six-carrier, 41-row reflow artifact. After the product edit it opened static proof but never completed the PostToolUse transition, leaving `static_closure: running`, `browser_attempts: 0`, and `delivery: blocked`. Subsequent static and browser commands were denied before execution. Native browser enforcement itself did not leak an unblocked call.

The candidate therefore cannot satisfy the preregistered three-resolved-trials, paired-loss, proof/host 3/3, or mean time/token gates. The exact 1.9.309 runtime-artifact candidate is rejected for broader promotion. Its score is absent rather than inferred, its token usage is unavailable, and the observed attempt minimum remains 12,935,549 tokens with two usage-unavailable cells.

The next iteration must change the candidate rather than rerun the matrix: reduce model-authored artifact bookkeeping, make the static-proof lifecycle transactional, and give the model a deterministic bootstrap/closure path that cannot strand `static_closure` in flight. A fresh candidate commit, task, preregistration, and root are required.
