# Host enforcement boundary

## Decision

OmD must describe execution assurance using four distinct terms. A skill contract is advisory. Host feedback can add context before a response or diagnose an edit afterward. Host-policy enforcement must deny a prohibited tool call before it executes. Benchmark observation classifies a completed event stream and may fail promotion, but it does not control the model's run.

No currently installed OmD channel has an OmD-owned pre-tool blocker. The package therefore makes no host-policy-enforced claim.

## Current channel capability

| Surface | Skill contract | Native policy surface | OmD policy adapter | OmD proof trace | Effective claim |
| --- | --- | --- | --- | --- | --- |
| Claude Code project install | Advisory + OmD feedback hooks | Dynamic `PreToolUse` deny | Not installed | Not captured | Host feedback |
| Codex install | Advisory | Dynamic `PreToolUse` deny or command-prefix rules | Not installed | Benchmark controller only | Skill contract |
| OpenCode install | Advisory | Project permissions or plugin before-hook | Not installed | Not captured | Skill contract |
| Cursor install | Advisory | Project CLI permissions | Not installed | Benchmark controller only | Skill contract |
| OmD harness checkpoints | Orchestrator must halt for the user | Host-dependent | Not installed | Run artifacts | Orchestrator contract |
| UI-Resolve benchmark | N/A | Event-stream diagnostics | Promotion-report only | Cursor and Codex | Promotion-report gate |

Claude's installed `PostToolUse` hook is not enforcement: it runs after an edit. `UserPromptSubmit` injects DESIGN.md guidance but does not deny a tool. Codex and Cursor event streams are visible only when the UI-Resolve controller owns the benchmark invocation. A normal installed skill has no equivalent trace or blocker.

The host feasibility result is narrower than “hooks exist.” Claude Code and
Codex both document a dynamic `PreToolUse` decision that can deny a supported
local tool before execution. Cursor documents project CLI command permissions,
and OpenCode documents project permissions plus a plugin before-hook. None of
those host facilities becomes an OmD guarantee until the installer writes an
OmD-owned adapter and the user enables or trusts it.

Primary host references:

- [Claude Code hooks reference](https://code.claude.com/docs/en/hooks)
- [Codex hooks manual](https://learn.chatgpt.com/docs/hooks.md)
- [Codex command rules](https://learn.chatgpt.com/docs/agent-configuration/rules.md)
- [Cursor CLI permissions](https://docs.cursor.com/cli/reference/permissions)
- [OpenCode permissions](https://opencode.ai/docs/permissions/)
- [OpenCode plugin hooks](https://opencode.ai/v2/docs/build/plugins)

## Product rules

1. UI copy, README claims, and benchmark reports may say **required by the skill**, **reported by the host hook**, or **failed by the benchmark gate**.
2. They may say **blocked** or **enforced before execution** only when `host_native_pretool_blocking` is true for that installed channel.
3. Harness checkpoints remain mandatory behavioral contracts, but are not relabeled as host-native blocking.
4. A future blocking adapter must be opt-in, channel-specific, fail closed only for a narrowly declared command class, and ship with an escape hatch. Adding prose to a skill cannot upgrade its assurance level.
5. `data/workflow-capabilities.json` is the machine-readable source used by installed channels and `omd workflows --json`; `omd doctor` rejects an incomplete assurance contract.

## Next experiment boundary

The next provider experiment should compare the same close-latch skill under two environments: controller observation only, and a real host pre-tool policy if a supported host adapter is implemented. Until that adapter exists, proof-execution compliance is a benchmark promotion criterion, not an execution guarantee.
