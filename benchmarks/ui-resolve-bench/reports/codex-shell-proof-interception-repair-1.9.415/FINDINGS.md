# Codex shell proof interception repair — 1.9.415

The 1.9.414 infrastructure stop exposed a channel-parity gap. Post-run trace normalization sees Codex `command_execution` events, but the live installed hook accepted only Claude-style `Bash` tool names and `command` fields. Codex `exec_command` calls with a `cmd` field therefore bypassed the live static/browser budget.

The installed matcher and live mapper now accept `Bash`, `exec_command`, `functions.exec`, and `functions.exec_command`, and normalize both `command` and `cmd`. A second Codex static closure in one product revision is denied before execution, so the host state and post-run trace cannot disagree in the observed failure mode.

Focused policy tests pass 71/71, the rendered installed-config fixture passes, lint and diff checks pass. The broader benchmark set passes 185 tests; its only two failures are the pre-existing external Taste/UI UX Pro Max fixture directories that are not Git roots. No provider was called and no quality promotion is claimed.
