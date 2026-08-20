# Runtime artifact hook-bypass repair — 1.9.313

Status: **repair validated; provider calls during repair 0**

## Why the prepared matrix was stopped

The first `aircraft-load-plan-review-v0.1` control cell completed as a process but is infrastructure-invalid. It spent 640,087 ms and 2,932,219 provider-reported total tokens (`2,899,748` input, `2,774,016` cached input, `32,471` output, `12,726` reasoning output). The spend remains in Tokens-to-Target attempt 4; the reported 77/85 evaluator score does not.

Three runtime defects were observed:

1. Relative `.omd/reflow-closure.json` edits were treated as product edits, although absolute `/.omd/` paths were already excluded.
2. A previous PreToolUse denial remained sticky and was returned for later actions that added no new denial.
3. `mcp__node_repl__js` was outside the managed matcher and wrote both the artifact and `index.html` directly. The final product hash changed while the proof trace reported zero product edits, so the trace is not analyzable.

The cell also attempted `browser_new_session`, which failed with `Unknown command: new_session`. Installed host policy ended with 12 `reflow-inventory-required` denials, delivery blocked, no browser attempt, and a failed host gate. These are infrastructure findings only.

## Repair

- Managed-path detection now compares normalized path segments, so relative and absolute `.omd`, `.codex`, `.agents`, `.cursor`, and `.benchmark` paths are consistently excluded from product edits.
- PreToolUse emits a decision only when the current payload adds that decision. Earlier denials no longer leak into later neutral or managed-artifact actions.
- The production Claude Code/Codex matchers and benchmark host-policy renderer now include `mcp__node_repl__js`/`node_repl`.
- When runtime artifact policy is enabled, the local Node REPL is denied with `untracked-local-executor`; tracked native edit tools remain the required path.

## Acceptance

- proof policy, runtime hook, install, and doctor: 108/108
- installed host-policy parity and exact paired controller: 3/3
- matrix preparation/execution contracts: 30/30
- TypeScript lint: pass
- build: pass
- diff check: pass

The broader sandbox suite was also run: 114/116 passed, with the two existing external Taste/UI UX Pro vendor fixtures failing because `/tmp/omd-ui-skills-bench/vendors/*` are not Git repositories. Those failures are unrelated to this repair and were not weakened or bypassed.

## Decision

Freeze `/private/tmp/u19311`; do not resume or repair a cell in place. Pin this repair from a committed source, then preregister and prepare a fresh six-cell replacement before any further provider call. Provider calls in the frozen attempt: 1. Provider calls in this repair: 0.

## Exact host-policy pin

1.9.314 pins committed source `7d21ea23…` and the exact managed Codex config plus four source/installed hook hashes in `HOST-POLICY-PIN.json`. This is an infrastructure pin, not a new skill treatment and not a quality promotion. The replacement experiment must keep this exact host policy byte-identical across both arms.
