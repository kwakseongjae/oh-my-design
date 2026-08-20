# Opus 4.8 paired task matrix — 1.9.3 replacement findings

Run on 2026-07-22 against the preregistration in this directory.

## Disposition

The replacement stopped after its first scheduled cell. Pricing Raw completed
with a final response and changed only `index.html`, but a late built-in Edit of
that absolute path was denied under `dontAsk`. The same run had already
successfully used built-in Write on `index.html` and built-in Write/Edit under
`.t`, so the earlier single-edit probe did not reproduce the long-session
permission behavior.

The cell is `invalid-infrastructure`; the remaining five cells were not run per
the frozen stop rule. This report contains no pair and allows no comparison.

## Diagnostic artifact

- validity: `invalid-infrastructure`
- frozen evaluator: 59/85, diagnostic only
- UI-Resolved: false
- recoverable / infrastructure tool errors: 1 / 1
- first / last product write: 298,655 / 602,976ms
- final result: 648,369ms
- uncached tokens: 127,884
- provider price equivalent: $2.6092445
- failed gates: task contract, state journey, accessibility

The artifact again duplicated protected price and FAQ hooks and introduced an
accent-text contrast failure. Those output findings are not attributable to a
condition because the runner was permission-degraded.

## Next correction

The native filesystem sandbox already limits reads and writes to the prepared
workspace and its local temp root. The next runner uses Claude Code
`acceptEdits` rather than `dontAsk`, retaining the strict sandbox, web/MCP
denials, no unsandboxed fallback, and project-only settings. This is the mode
intended to approve normal built-in file edits without interactive prompts.

A new exact Opus probe must perform built-in Write → Edit → Edit → Read on the
same absolute path with no Bash fallback and zero tool/sandbox/cwd errors. Only
then may another replacement matrix be preregistered.

