# Isolated home bootstrap order — 1.9.376

Codex sandbox startup requires `CODEX_HOME` to exist, but credentials must not be linked until the named browser gate passes. The controller now creates an empty cell-local home first, proves the isolated browser, links only `auth.json`, proves login, and only then permits provider execution.

The u19374 attempt stopped before provider events and is frozen. Focused tests are 72/72; type-check and diff checks pass. Provider calls: 0.
