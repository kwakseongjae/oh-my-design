# Codex selected-model semantic pin — 1.9.423

The 1.9.422 controller matrix pinned the SHA-256 of the complete Codex model cache. The cache refreshes `fetched_at` and may rewrite client metadata without changing the selected model. That made a prepared, otherwise equal six-cell matrix stale before its first provider call.

This patch adds a canonical SHA-256 of the exact selected model profile. Whole-cache SHA, fetch time, and client version remain recorded as provenance, but runtime identity can now be preregistered against the selected profile rather than volatile cache-container metadata. Missing or invalid profiles still fail closed, and installed host enforcement remains eligible only for direct `function` tool mode.

Acceptance requires a stable selected-profile hash across fetch-time-only cache rewrites, a changed whole-cache hash for the same fixture, exact runtime evidence propagation, focused tests, lint, and diff checks. Provider calls are forbidden.
