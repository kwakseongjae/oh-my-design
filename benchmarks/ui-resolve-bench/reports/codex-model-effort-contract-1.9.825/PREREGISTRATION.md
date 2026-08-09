# Codex immutable local model catalog — 1.9.825

The 1.9.824 first cell proved that a byte-pinned `models_cache.json` is not, by itself, a stable execution authority. Codex CLI 0.146.1 rejected a 0.147.0 cache schema, refreshed the isolated cache, changed the selected Luna profile, and correctly failed routing attribution after one provider turn.

Local binary inspection adds a second constraint: Codex CLI 0.146.1 gives the model cache a 300-second TTL. A 51-cell serial sweep necessarily crosses that boundary. Whole-cache bytes can therefore change because `fetched_at` or ETag metadata is renewed even when the model entries do not change.

The 1.9.825 contract keeps the immutable 0.146.1 cache as preregistration provenance and adds an immutable local `model_catalog_json` as the catalog actually consumed by every Codex invocation. The local catalog is derived from the exact cache `models` array, stored outside mutable `~/.codex`, copied into each isolated Codex home, and passed through an explicit CLI config argument. Its source and isolated-copy bytes, SHA-256, selected model profile, default effort, and ordered effort list must all match the lock before provider execution.

Provider-zero validation loaded the local catalog twice with Codex 0.146.1 under an OS sandbox that denied all network access. Both outputs had SHA-256 `8a5caeb5112002f835992220e90d2479d08df37fd3791b68d7f2024ed8d4c5c8`; the source catalog remained `77df912746eb14867897f3100a02ec5182537d2edbe9c69c4d76f46c03ad6f5f`, and the source cache remained `8c449a6bb9971a4a03d277d41b6c3445eb13545da5b740237b9451c7c8b97b83`. Provider, model, browser, Cursor, and Claude calls were all zero for this canary.

Execution remains forbidden until generator, preparation, runtime, run-record, and aggregate validation all bind the same immutable catalog authority and the complete regression suite passes. The frozen 1.9.824 root remains invalid and is never resumed or counted.
