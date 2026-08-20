# Named isolated browser and runtime attestation — 1.9.368

The 1.9.367 matrix never reached Luna. Browser preflight first stopped because no connection was active. Connecting the default local Chrome exposed an unrelated personal Gmail tab, so that path was rejected rather than passed to the model. A fresh temporary Chrome profile was then launched on a dedicated CDP port and successfully registered as the named `bench19366` browser-harness connection with only `about:blank` open.

Before provider execution, the fresh cell's workspace-local `auth.json` link exposed a second controller defect: the integrity check treated the isolated runtime home as benchmark source. Runtime state now has a narrow exclusion. Only `.benchmark/codex-home` and `.benchmark/browser-harness` are omitted from artifact hashing; product, installed skill, host policy, execution evidence, score, run record, proof trace, and state remain covered.

Browser preflight is also stricter. A generic active connection is insufficient. The invocation must provide a named connection and explicit CDP endpoint, and that exact name must appear active in doctor output. This prevents a personal default Chrome session from accidentally satisfying the benchmark gate.

Focused tests are 72/72. The benchmark suite has 325 passing tests, one skipped test, and only the two pre-existing external vendor Git-root fixtures unavailable. Type-check, build, and diff checks pass. `/private/tmp/u19366` is frozen because runtime artifacts were materialized before this contract was pinned. Provider calls: 0.
