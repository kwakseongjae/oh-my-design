# Preregistered proof-execution gate — findings

Status: **provider-free gate schema complete**.

A matrix may now target exact `system_ids` with a `proof_execution_gates` contract. The contract requires analyzable Cursor/Codex evidence and explicit non-negative maxima for browser recovery, duplicate static closure, and verification after ready. Its only supported enforcement is `promotion-report`: every scheduled cell still completes, preserving the denominator, while release promotion receives a deterministic pass/fail verdict.

The gate is copied into each applicable matrix cell before execution. Exported run records retain observed values, limits, and failure reasons. At matrix completion the controller records applicable/passed cells, failed cell IDs, and the overall verdict. Unsupported Claude Code targets, unknown systems, and malformed limits fail before workspace preparation or provider use.

Focused schema, classifier, exporter, and controller coverage is 67/67 and TypeScript lint is green. No provider call was made.

