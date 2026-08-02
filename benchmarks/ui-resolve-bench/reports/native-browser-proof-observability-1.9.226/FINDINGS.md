# Native browser proof observability — 1.9.226

## Outcome

Codex native MCP browser calls are now first-class proof events. The installed Codex matcher observes `mcp__agent-browser__browser_*`; session-management calls remain neutral; navigation and inspection calls consume the single browser-proof budget. The offline trace classifier applies the same distinction.

`omd doctor` now rejects a stale Codex proof-policy matcher even when the hook command and managed files still exist. Re-running the opt-in installer repairs that configuration without removing user hooks.

## Frozen-log audit

The immutable events from `luna-assay-r2-policy` were reclassified without changing its original score or gate result. The old trace saw two static closures and no browser mechanism, then reported compliance. The native-tool-aware trace sees two `browser_navigate` attempts: the first is the proof attempt, the second is both a recovery and an after-ready violation. Its corrected classification is noncompliant.

This confirms two separate facts:

1. The model did attempt browser verification; the installed matcher failed to observe it.
2. The model then retried the same native mechanism; the repaired policy must block that second call.

The original 1.9.225 comparison remains immutable. This audit changes the diagnosis, not the historical score.

## Acceptance evidence

- Hook mapper fixtures cover neutral native session setup, failed native navigation, delivery readiness, and second-attempt denial.
- Offline trace fixtures cover native browser normalization and retry classification.
- Installer and doctor fixtures cover exact native matcher installation, drift detection, repair, and user-hook preservation.
- Focused proof-policy, installer, and doctor suite: 112/112 green.
- Full benchmark-focused suite: 96/98 green; the two red cases are the unchanged external Taste/UI UX Pro vendor Git precondition.

Next: verify the repaired matcher on a fresh real Codex host run before another scored matrix.
