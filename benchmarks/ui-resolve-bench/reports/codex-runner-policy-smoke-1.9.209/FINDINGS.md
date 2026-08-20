# Codex runner proof-policy smoke — 1.9.209

## Objective

Verify that the production-installed Codex proof policy remains active through
the non-interactive benchmark runner boundary before spending six provider
calls on the replacement host-policy comparison.

## Result

The valid replacement used Codex CLI 0.144.1 with `gpt-5.6-luna` at high
effort in a fresh Git root. The production CLI installed the exact opt-in
policy, project hooks were explicitly trusted for automation, and both
comparison arms used the same user-configuration loading boundary.

| Step | Result |
| --- | --- |
| Product edit | `index.html` changed from `before` to `after` |
| First `true` | Executed, exit 0 |
| Second identical `true` | Denied by `PreToolUse` before execution |
| Persisted state | Valid schema 0.1; four decisions |
| Persisted violation | `duplicate_static_closure: 1` |

The first disposable fixture was excluded because its one-line HTML caused the
model's patch to miss. The second disposable fixture was also excluded because
`--ignore-user-config` suppressed project hook discovery even with native hook
trust bypass enabled. Neither fixture is a quality or policy-effect result.

## Runner correction

Host-policy matrix cells now load the same Codex user configuration in both
arms. Only the installed arm receives `--dangerously-bypass-hook-trust`.
Ordinary Codex benchmark cells continue to use `--ignore-user-config`, so this
change is restricted to the preregistered host-policy comparison.

## Decision

The runner boundary is green. A fresh 2×3 replacement may be prepared; frozen
1.9.207 and 1.9.208 cells remain excluded and must not be resumed.
