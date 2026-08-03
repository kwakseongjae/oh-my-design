# Codex execution-home runtime identity — 1.9.426

The shared auth home is written by both Codex app 0.146 and benchmark CLI 0.144.1. Even a canonical selected-model profile hash can therefore alternate before a provider call. A preregistered shared-cache profile is not a valid execution identity.

This provider-free patch moves the control boundary to the executable and the actual execution home. Controller matrices must preregister the exact Codex CLI version and declare `post-run-execution-home-observed`. Preflight rejects a CLI version mismatch. After execution, run attribution reads the model cache produced inside the isolated cell Codex home and records its selected profile; the shared auth-source cache is retained only as before-run provenance. If an execution-home cache is unavailable, attribution labels the source fallback explicitly.

Acceptance requires exact version acceptance/rejection tests, post-run evidence fields, focused tests, TypeScript, and diff checks. No model may be called.
