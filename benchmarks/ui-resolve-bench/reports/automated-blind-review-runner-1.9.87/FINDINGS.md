# Automated blind review runner — 1.9.87 findings

Status: **accepted, provider-free**.

## What closed

The 1.9.86 packet set now has a checkpointed single-invocation controller.
Every call selects at most one pending packet, verifies the Cursor project
cache, enforces retained start pacing, opens a fresh read-only Ask context, and
records raw events, stderr, usage, runtime display label, exact judgment, and a
private state checkpoint.

Responses are not repaired. The final message must be one JSON object with
exactly assignment_id, axes, and reason. The assignment must match the packet;
the four registered axes must each use A, B, tie, or both_fail. Markdown,
additional keys, missing axes, wrong assignments, invalid choices, process
failure, timeout, and model-label drift freeze the root.

A review-unit judgment compatible with the accepted preference aggregator is
written only after its primary and separately invoked reversed order both
complete.

## Validation

- automated review + existing reviewer operations focused tests: 9/9;
- one-invocation checkpoint and two-invocation assembly: pass;
- strict invalid response freezes and frozen-root resume rejection: pass;
- model display drift and provider process failure: pass;
- Node syntax, TypeScript, and production build: pass;
- provider generation: zero.

## Claim boundary

The runner is accepted; live preference evidence has not started. Cursor's
registered display name remains Internal execution evidence only. Automated
judges remain calibration evidence and never count toward the practitioner
minimum.
