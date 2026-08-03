# Findings — Codex execution-home runtime identity 1.9.426

Accepted provider-free.

- Controller observation now fails before browser/provider work when the actual CLI version differs from the preregistered version.
- The only valid selected-model profile observation is the cache produced in the isolated cell execution home after the run.
- Shared auth-cache hashes and profiles remain provenance and are never promoted as the execution profile.
- Runtime evidence labels `execution-home-post-run` versus `auth-source-fallback` explicitly.
- Focused tests: 29/29. TypeScript and diff checks: green. Provider calls: 0.

The freshly prepared 1.9.425 matrix was equal 6/6 but is frozen with zero executed cells because the shared profile alternated between Codex client versions before execution.
