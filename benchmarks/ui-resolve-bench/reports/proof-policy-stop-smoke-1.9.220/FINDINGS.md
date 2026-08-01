# Proof-policy real-host Stop smoke — 1.9.220

Status: **Stop boundary PASS; recovery attribution FAIL; promotion HOLD**  
Host: Codex CLI 0.144.1  
Model: `gpt-5.6-luna`, high effort  
Fixture: frozen fresh Git root `/private/tmp/omd-proof-policy-stop-smoke-1.9.220`

## Observed sequence

1. Luna changed only `index.html` from `before` to `after`.
2. One static `rg` verification completed.
3. Luna attempted to deliver; the new Stop hook blocked that delivery with `proof-incomplete`.
4. During the forced continuation Luna read the required browser-harness `SKILL.md` before invoking the tool.
5. The command classifier treated the instruction-file read as browser proof because the path contained `browser-harness`.
6. State moved to `delivery: ready`; the real `browser-harness` invocation was then denied as `verification-after-ready`.

The final state records one false browser attempt, `browser_recovery: 1`, and `verification_after_ready: 1`. The Stop boundary itself worked and did not loop, but the run is not a valid recovery pass.

## Root cause and bounded correction

`BROWSER_MECHANISM` matched any occurrence of the executable name, including a documentation path. The classifier now requires a shell invocation boundary for browser-harness. A narrowly defined read of its `SKILL.md` is neutral: it neither consumes static closure nor browser proof, and it is excluded from post-ready verification counts. Actual direct, wrapped-shell, environment-prefixed, and heredoc invocations remain browser proof.

## Verification

- Frozen host run: failed recovery attribution; no retry in the same root.
- Focused classifier, state, runtime, installer, and doctor tests: 100/100 passed.
- TypeScript and production build: passed.
- Provider calls after the failure: 0.

## Decision

Keep the policy opt-in and broader/default promotion on `HOLD`. Run one fresh-root 1.9.221 replacement with the corrected installed artifact. Acceptance requires one blocked Stop, a neutral instruction read if emitted, one actual browser attempt, ready delivery, and zero unblocked policy violations.
