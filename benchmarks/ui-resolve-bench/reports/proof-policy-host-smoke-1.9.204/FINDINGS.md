# Proof policy real-host smoke — 1.9.204

## Objective

Verify that the shared OmD proof-policy adapter can deny a duplicate proof
command **before execution** in the two hosts that document dynamic
`PreToolUse` decisions. This is a host-boundary smoke, not a UI quality
benchmark or a candidate promotion run.

## Locked sequence

Each fresh Git fixture asked the host to:

1. make one product edit;
2. run `true` once as the static closure;
3. run the identical `true` command again.

The required result was first command allowed and completed, second command
denied before execution with `duplicate-static-closure` recorded exactly once.

## Result

| Host | Model / effort | First static command | Second static command | Persisted violation | Verdict |
| --- | --- | --- | --- | --- | --- |
| Codex CLI 0.144.1 | `gpt-5.6-luna` / high | Executed | Denied by `PreToolUse` | `duplicate_static_closure: 1` | Pass |
| Claude Code 2.1.219 | Sonnet 5 / high | Executed | Denied by `PreToolUse` | `duplicate_static_closure: 1` | Pass |

Both hosts persisted the same four semantic decisions: product revision opened,
static proof started, static closure closed, and duplicate static closure
denied. Claude reported the second Bash call as a permission-rule
non-execution; Codex reported it as blocked by the project hook. Opus was not
used.

## Invalid fixture excluded

The first Codex attempt was started outside a Git repository and with user
configuration ignored. The project hook layer did not load and both commands
executed. That fixture is execution-invalid and is excluded rather than
blended into the replacement result. The replacement used a fresh Git root and
the project `.codex/hooks.json` contract.

## Scope and next boundary

- The adapter is still benchmark-owned and is not installed by default.
- The smoke proves one synthetic duplicate-command sequence on two local host
  versions. It does not prove general model quality, browser-proof quality, or
  cross-version compatibility.
- Hook trust was bypassed only inside disposable fixtures. A product installer
  must preserve native trust/review flows and explain restart/review steps.
- The next eligible change is a project-scoped, explicit opt-in installer for
  Claude Code and Codex only. Cursor and OpenCode keep their narrower published
  assurance until equivalent dynamic denial is implemented and tested.
