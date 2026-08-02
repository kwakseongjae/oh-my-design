# Host enforcement boundary

## Decision

OmD must describe execution assurance using four distinct terms. A skill contract is advisory. Host feedback can add context before a response or diagnose an edit afterward. Host-policy enforcement must deny a prohibited tool call before it executes. Benchmark observation classifies a completed event stream and may fail promotion, but it does not control the model's run.

OmD now offers an explicit, project-scoped proof-policy adapter for Claude Code
and Codex. It is still off by default. Its assurance is tool-boundary specific:
the adapter can deny matched local edit and shell calls before execution, while
Codex native MCP browser calls require a separate observation boundary described
below.

## Current channel capability

| Surface | Skill contract | Native policy surface | OmD policy adapter | OmD proof trace | Effective claim |
| --- | --- | --- | --- | --- | --- |
| Claude Code project install | Advisory + OmD feedback hooks | Dynamic `PreToolUse` deny | Explicit `--proof-policy`; default off | Not captured | Host feedback by default; pre-tool deny when installed and trusted |
| Codex install | Advisory | Dynamic `PreToolUse` deny or command-prefix rules | Explicit `--proof-policy`; default off, Git root required | Runner JSONL at `Stop` for native browser calls | Skill contract by default; pre-tool deny for matched local tools, final-boundary accounting for native browser calls when the runner supplies a trace |
| OpenCode install | Advisory | Project permissions or plugin before-hook | Not installed | Not captured | Skill contract |
| Cursor install | Advisory | Project CLI permissions | Not installed | Benchmark controller only | Skill contract |
| OmD harness checkpoints | Orchestrator must halt for the user | Host-dependent | Not installed | Run artifacts | Orchestrator contract |
| UI-Resolve benchmark | N/A | Event-stream diagnostics | Promotion-report only | Cursor and Codex | Promotion-report gate |

Claude's installed `PostToolUse` hook is not enforcement: it runs after an edit.
`UserPromptSubmit` injects DESIGN.md guidance but does not deny a tool. Codex and
Cursor event streams are visible only when the UI-Resolve controller owns the
benchmark invocation. A normal installed Codex skill does not receive the
runner-owned JSONL trace, so native MCP browser accounting must not be claimed
outside that boundary.

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

## Real-host result

The 1.9.204 smoke confirmed deny-before-execution on fresh Git fixtures for
Claude Code 2.1.219 with Sonnet 5/high and Codex CLI 0.144.1 with
`gpt-5.6-luna`/high. In both hosts the first static closure executed and the
second identical command was denied with one persisted
`duplicate_static_closure` violation. The initial non-Git Codex fixture did not
load project hooks and is explicitly excluded as execution-invalid. See
`reports/proof-policy-host-smoke-1.9.204/FINDINGS.md`.

This result validates the shared adapter at those two host boundaries. OmD
still installs no proof policy adapter by default. The project-scoped opt-in is:

```bash
npx oh-my-design-cli@latest install-skills --agent claude-code codex --all --proof-policy
npx oh-my-design-cli@latest doctor
```

Restart the selected host and complete its native project-hook review/trust
flow. To remove only this guard while preserving unrelated hooks:

```bash
npx oh-my-design-cli@latest install-skills --agent claude-code codex --all --remove-proof-policy
```

### Codex native browser boundary

The 1.9.227 wildcard-matcher and 1.9.228 exact-matcher smokes both showed the
same limitation on Codex CLI 0.144.1: native `agent-browser` MCP calls appeared
in the `codex exec --json` stream but did not invoke the project `PreToolUse` or
`PostToolUse` adapter. OmD therefore does not claim deny-before-execution for
that path.

The 1.9.229 runner smoke adds an honest final-boundary reconciliation. The
benchmark runner streams its JSONL to a per-run file and passes that path only
to the project `Stop` hook. One observed native browser call consumes the
single browser-proof attempt and is recorded as `unresolved`; additional calls
are recorded as `native_browser_unintercepted` and fail installed-policy
acceptance. This detects and scores the violation after execution. It does not
turn the native MCP path into live interception, and it is not available in a
normal interactive install without a runner-provided trace.

## Policy contract

The provider-free policy state machine is implemented in
`scripts/proof-policy-state.mjs`. It accepts semantic product-edit,
static-proof, browser-proof, browser-recovery, and delivery events. It denies a
duplicate static closure, browser recovery or second mechanism, proof before a
product edit, browser proof before static closure, and any proof after delivery
becomes ready. A corrective product edit reopens one static closure but never
reopens the consumed browser attempt.

Run a fixture without a provider call:

```bash
npm run bench:ui:proof-policy -- /path/to/events.json
```

`scripts/proof-policy-hook-mapper.mjs` now maps the shared Claude/Codex
`PreToolUse` and `PostToolUse` payloads into those semantic events. It extracts
Claude Edit/Write paths and Codex `apply_patch` markers, treats unknown tool
responses as unsuccessful, emits the common `permissionDecision: deny` shape,
and has attempted-command violation parity with the post-run classifier.

`scripts/proof-policy-hook.mjs` is now an executable adapter with atomic
session/turn-scoped state, a bounded cross-process lock, a six-hour default
expiry, and fail-closed handling for corrupt, stale, or busy state. A new
product edit can recover stale state; a proof command cannot silently bypass
it. The CLI installs this adapter only through the explicit `--proof-policy`
flag, preserves unrelated hook configuration, supports doctor attestation and
targeted removal, and leaves the default install unchanged.

Proof-execution compliance remains a benchmark promotion criterion. For matched
local tools it may additionally be an execution guarantee after the host trusts
the installed project hook. For native Codex browser calls it remains
post-execution observation until Codex exposes a project-hook path that passes a
real-host interception smoke.
