# Cursor review registry lock — 1.9.89 findings

Status: **accepted, provider-free**.

The automated judge state now records the exact label returned by
`cursor-agent models` for the requested selector at fresh-root creation.
Before every provider invocation it probes the registry again. A changed or
missing selector/label freezes the root before packet transmission.

Provider events may report the exact selector or the root-locked display label.
The source-code display-name map is no longer the execution contract for this
runner.

A focused stateful fixture locks `Cursor Grok 4.5 High`, completes one call,
changes the registry to `Cursor Grok 4.5`, and proves that the next call freezes
before the fake provider invocation count increments.

Validation: focused reviewer tests 11/11, Node syntax, TypeScript, and build
pass. Provider generation for the correction is zero.

The 1.9.88 root remains frozen at 14/54. Its partial votes are diagnostic
incident evidence only and cannot complete or seed the fresh denominator.
