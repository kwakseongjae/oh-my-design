# Findings — Codex selected-model semantic pin 1.9.423

Accepted provider-free.

- `inspectCodexModelToolMode` now returns `model_profile_sha256`, computed from canonical recursively key-sorted JSON for the selected model entry.
- The full cache SHA remains evidence, but is no longer the only available runtime identity pin.
- Run attribution and installed-policy preflight records both hashes.
- A refresh-metadata regression test proves that `cache_sha256` changes while `model_profile_sha256` remains stable.
- Focused tests: 27/27. TypeScript and diff checks: green. Provider calls: 0.

The prepared 1.9.422 root remains frozen with zero executed cells. Its task, product, runtime, browser contract, and both exact skill arms were equal; only the volatile whole-cache preregistration changed before execution.
