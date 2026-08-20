# Codex browser sandbox and artifact finalization — 1.9.359

The museum candidate exposed two controller defects rather than a model-only failure. Matrix preflight inspected browser-harness from the host, while the scored Codex process ran in `workspace-write` without access to the harness Unix socket. The preflight could therefore pass even though the browser attempt was guaranteed to fail before navigation. After that failure, the exact `reflow-artifact.mjs finalize-unresolved` command prescribed by the installed skill was misclassified as a second static verification and denied.

Browser-required Codex cells now use an outer Codex `:workspace` sandbox that admits exactly the browser-harness runtime socket. The inner Codex process does not install a second conflicting sandbox. Its bypass is contained by the outer workspace boundary, and browser debug output is redirected into the cell's ignored `.benchmark/browser-harness` directory. The matrix preflight uses the identical permission path. Non-browser Codex cells retain the previous `workspace-write` path.

An executable provider-free fixture used that exact outer profile and socket allowance to read `page_info()` from the active real tab. Separately, the executable proof-policy regression completed edit → one static closure → one browser attempt → `finalize-unresolved` with zero duplicate-static violations and a valid unresolved closure. A compound helper command and an arbitrary second verification remain denied.

Focused tests are 82/82. The wider benchmark suite is 325 passing with one skipped test and only the two pre-existing external vendor Git-root fixtures unavailable. Type-check, build, and diff checks pass. No model provider was called and no quality result is promoted by this repair.
