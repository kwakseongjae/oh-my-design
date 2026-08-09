# OmD current Reliability@3 — Luna/high

This run is the protocol-defined reliability expansion for the only arm that qualified in Stage A. It is not a rerun of Stage A and is not a public ranking.

- Denominator: three fresh locked tasks × three independent trials = nine cells.
- Arm: exact `omd-portable-1.9.799-current` from commit `c7031e2c`.
- Runtime: Codex-native `gpt-5.6-luna` / `high`; Cursor is forbidden.
- Execution: serial, 720 seconds per cell, fixed 30-second pacing, one new cell per invocation.
- Failure semantics: no retry, replacement, fallback, task swap, model swap, or effort substitution.
- Pass: all nine cells must reach 85/85, UI-Resolved, revision one, closed proof, exact named browser attachment, and candidate/final byte identity.

The exact task, prompt, starter, baseline, source-contract, skill, Codex cache/profile, browser connection, and execution order are locked in `RUN-MATRIX.json` before provider execution.

Because the desktop app refreshes the live cache timestamp independently, the run reads an immutable pre-provider copy of `models_cache.json`; authentication remains a symlink to the current Codex auth file. This prevents timestamp-only drift without weakening the exact model/profile/effort gate.
