# Proof-policy outcome attribution — 1.9.213

Status: **provider-free bounded delta complete; real-host replacement next**  
Provider calls: **0**

## Root cause

The 1.9.212 Codex smoke exposed a browser command that exited 1 but was recorded as `browser-proof-passed`. This was not a regex omission. Codex's current shell hook adapter sends PostToolUse a formatted stdout/stderr string and intentionally omits the shell exit code from that hook payload. A non-empty string therefore cannot establish whether the command passed.

Relevant upstream implementation:

- [`shell.rs`](https://github.com/openai/codex/blob/main/codex-rs/core/src/tools/handlers/shell.rs) builds `post_tool_use_response` from formatted command output.
- [`tools/mod.rs`](https://github.com/openai/codex/blob/main/codex-rs/core/src/tools/mod.rs) shows that `format_exec_output_str` returns only aggregated output, while the separate model-facing formatter includes exit metadata.

## Contract correction

The proof policy is an execution-order and attempt-budget controller, not a test-result oracle.

- Structured host responses with explicit exit/status evidence retain `passed` or `failed` attribution.
- Output-only string responses are now `unresolved`; their content is never promoted to success.
- A static attempt with unresolved host outcome closes the one-attempt budget as `static-closure-observed`, allowing the single browser attempt without claiming that tests passed.
- A browser attempt with unresolved host outcome becomes `browser-proof-unresolved`, after which delivery is ready and later verification remains blocked.
- Explicit structured static failure still reopens static closure. Enforcement counts and fail-closed missing/corrupt-state behavior are unchanged.

## Verification

- Focused state/hook/runtime suite: **25/25 green**.
- Full UI Resolve bench suite: **61/63 green**. The same two known failures are external vendor directories (`taste-skill`, `ui-ux-pro-max`) that are not Git repositories; production managed-renderer parity passed.
- Type-check: **green**.
- Build: **green**.
- Provider calls: **0**.

## Decision

Do not run the scored matrix yet. Install the corrected production bundle into a fresh Git root and repeat the negative browser-outcome recovery smoke. Acceptance requires the same one-denial → one-static → one-browser → stop sequence, zero unblocked violations, `static-closure-observed`, and `browser-proof-unresolved`. Only after that may a new unseen task be preregistered for scored comparison.
