# Proof-policy Stop boundary — 1.9.219

## Outcome

The opt-in proof policy now observes the host's final-response boundary. After a product edit, an incomplete proof sequence blocks the first `Stop` event and returns the remaining legal step. A repeated Stop emitted from that forced continuation is allowed, so a broken or uncooperative run cannot enter an infinite loop; the deterministic completion gate still records the delivery as failed.

This closes the 1.9.216 installed-arm gap where a run could finish with `delivery: blocked` and `browser_attempts: 0` even though no forbidden tool execution escaped the pre-tool policy.

## Contract

- A Stop before any product edit is ignored.
- A Stop after static closure but before browser proof is blocked once with `proof-incomplete` recovery guidance.
- A Stop with `stop_hook_active: true` is not blocked again.
- A Stop after static closure and browser proof is allowed.
- Busy, corrupt, or stale policy state fails closed on the first Stop and fails open on the active re-entry to avoid a loop.
- Installation, removal, and doctor checks now treat `Stop` as a required managed event alongside `PreToolUse` and `PostToolUse`.

## Verification

- Focused proof-policy, installer, doctor, and matrix suite: 109/109 passed.
- TypeScript: passed.
- Production build: passed.
- Diff whitespace check: passed.

No provider call was used for this patch. A fresh Codex/Luna high host smoke is the next acceptance boundary; source-level success alone does not promote the policy.

## Primary host evidence

- OpenAI Codex registers `Stop` as a supported hook event in [`hook_config.rs`](https://github.com/openai/codex/blob/main/codex-rs/config/src/hook_config.rs).
- Codex's hook dispatcher includes a Stop handler in [`hooks/src/lib.rs`](https://github.com/openai/codex/blob/main/codex-rs/hooks/src/lib.rs).
- The Stop handler accepts `{ "decision": "block", "reason": "..." }`, supplies the reason as the continuation prompt, and exposes `stop_hook_active` to prevent recursive blocking in [`events/stop.rs`](https://github.com/openai/codex/blob/main/codex-rs/hooks/src/events/stop.rs).

## Promotion status

`HOLD`. The boundary is implemented and deterministically tested, but broader/default installation remains prohibited until the fresh real-host smoke proves one recovery without a loop or unblocked proof violation.
