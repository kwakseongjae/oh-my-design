# Isolated Codex home and browser sandbox — 1.9.364

The first prepared cold-chain control did not reach Luna. It exited in 130 ms while initializing Codex state, emitted zero provider events, reported no model, and recorded no usage. This is an infrastructure-invalid execution, not a control result. It was not retried and `/private/tmp/u19362` is frozen.

The failure came from combining an outer workspace sandbox with Codex's global state directory. Allowing the entire global Codex directory would have weakened isolation, so the runner now gives each cell a workspace-local `HOME` and `CODEX_HOME`. Only the existing `auth.json` credential is linked into that directory. State databases, logs, memories, configuration, and IPC remain cell-local. Network access is limited to OpenAI/ChatGPT inference domains and browser access is limited to the exact browser-harness Unix socket.

Matrix preflight now proves two things through the same permission profile used by the scored process: an active browser connection and a valid isolated Codex login. A live diagnostic login check passed. Two minimal Luna/high handshakes also passed in a non-scored probe workspace; they consumed 14,485/11,168 input tokens respectively, with 8,960 cached input and 5 output tokens each. These calls validate transport only and do not promote model or skill quality.

Focused tests are 71/71. The wider benchmark suite is 324 passing with one skipped test and only the two pre-existing external vendor Git-root fixtures unavailable. Type-check, build, and diff checks pass. The next benchmark execution must use a fresh exact pin and fresh matrix/vendor roots.
