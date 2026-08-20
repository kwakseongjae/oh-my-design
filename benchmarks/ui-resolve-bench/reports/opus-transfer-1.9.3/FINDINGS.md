# Opus 4.8 Transfer Matrix — 1.9.3 replacement findings

Run on 2026-07-22 against the preregistration in this directory.

## Disposition

The replacement calibration completed cleanly at the process and sandbox
layers, but it is **not publishable as a raw-versus-OmD comparison**. Both cells
returned a final response before the 900-second cap, used the exact
`claude-opus-4-8` model through first-party subscription OAuth, changed only
`index.html`, and recorded zero sandbox/cwd errors. However, each cell produced
two recoverable failed tool results while iterating on its own verification.
The preregistration required every tool-error count to be zero, so both are
strictly invalid under the frozen acceptance rule.

The standard run-record schema classifies both cells as valid because process
exit, sandbox, attribution, and deterministic evaluation all succeeded. That
schema result is preserved in `/tmp/u13/*/.benchmark/run-record.json`; this
report adds the stricter preregistered disposition instead of changing the rule
after seeing the scores.

Do not publish the 10-point difference as skill lift, a win rate, or model
superiority. It is a useful single-task product diagnostic only.

## Artifact observations

| condition | delivery | objective artifact | UI-Resolved | recoverable / sandbox errors | uncached tokens | cached read | wall | provider price equivalent |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Raw DESIGN.md | complete | 75 / 85 | no | 2 / 0 | 106,723 | 1,151,508 | 533,026 ms | $2.2705 |
| OmD portable | complete | 85 / 85 | yes | 2 / 0 | 114,662 | 1,132,384 | 552,355 ms | $2.3717 |

The raw artifact preserved task behavior, accessibility, evidence honesty, and
the DESIGN.md typography/radii, but failed three real narrow-layout geometry
observations: the off-screen skip link overlapped the Beacon link at mobile,
320px, and the 200% zoom surrogate. Its primary action also computed as
transparent at the evaluator's observation point. The OmD artifact passed all
critical gates at desktop, 390px mobile, 320px, and 200% zoom.

As non-causal diagnostics, OmD used 7.44% more uncached tokens, 3.63% more wall
time, and 4.46% more provider price-equivalent work. Cached reads were 1.66%
lower. Provider price equivalent is Claude Code telemetry, not evidence that
the subscription account was billed that amount.

Event timestamps show another useful product signal. Raw made its first built-in
product write at 237,840ms and its last at 491,968ms. OmD made its first write
at 364,767ms and its last at 523,692ms. OmD therefore spent about 6:05 before
the first product edit but still reserved 28.7 seconds after its final edit for
delivery. The new delivery reserve worked; the next bounded hypothesis should
target the earlier analysis phase rather than adding more verification rules.

## What the failed tool results mean

The errors were not sandbox or runtime failures:

- Raw attempted to inspect an empty Claude auto-memory directory, then ran a
  local audit whose first assertions were too broad. It corrected the audit and
  delivered the page.
- OmD ran a local DOM-shim verifier twice while fixing its verifier assertions:
  41/49, then 48/49, then a final 59/59 pass before delivery.

This exposes a benchmark-definition issue. A recoverable red test can be useful
feedback in an implementation loop; it should be recorded but is not the same
failure class as sandbox denial, missing executable, timeout, or a terminal
unresolved error. Future preregistrations must distinguish those categories
instead of requiring a blanket tool-error count of zero.

## Runner findings

The first post-login probe still failed on Claude Code `2.1.217`. The cause was
our runner policy, not the new binary: `Read(../**)` and `Edit(../**)` deny rules
were merged into Claude's native filesystem sandbox, and the parent glob also
covered the current workspace. That blocked Claude's cwd bookkeeping under the
explicitly allowed `.t` directory. Removing the redundant parent-glob denies
made the second exact-model probe pass with process/child exit zero, zero tool
errors, zero sandbox/cwd errors, and no product change.

Claude auto-memory is on by default and remains outside the frozen benchmark
workspace. The raw agent tried to read its empty per-project memory directory;
although no content contaminated this run, future cells should set
`CLAUDE_CODE_DISABLE_AUTO_MEMORY=1`. Anthropic documents that this prevents both
loading and creation of auto-memory files.

## Product implications

The 1.9.3 bounded-verification and delivery-reserve contract fixed the failure
mode that mattered operationally: OmD returned a structured
`implemented / verified / unresolved` delivery in 552 seconds instead of
reaching the cap without a final response. This observation crosses a runtime
and runner update, so it is not a standalone causal estimate of the skill
change.

The isolated `omd:apply` cell did not install specialist agent definitions.
The skill detected that correctly, used its documented recovery path, did not
pretend the roles ran, and still completed the task. That is the right outcome
for the **skill-only** family. A separate Harness Track must install and
attribute `omd-ux-writer` and `omd-ux-engineer` if we want to measure the value
of agent dispatch; silently adding them here would confound the skill cell.

The next experiment should therefore:

1. disable Claude auto-memory and background task state in the print runner;
2. record first product write and final delivery timing;
3. classify recoverable verification failures separately from infrastructure
   failures; and
4. run the fresh task-contract `0.3.0` paired matrix before any public claim.

## Sources

- https://www.anthropic.com/news/claude-opus-4-8
- https://support.claude.com/en/articles/11940350-claude-code-model-configuration
- https://support.claude.com/en/articles/15036540-use-the-claude-agent-sdk-with-your-claude-plan
- https://code.claude.com/docs/en/authentication
- https://code.claude.com/docs/en/sandboxing
- https://code.claude.com/docs/en/memory
- https://code.claude.com/docs/en/env-vars
- https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md
