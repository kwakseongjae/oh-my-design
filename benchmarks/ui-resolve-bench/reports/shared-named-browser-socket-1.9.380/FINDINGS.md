# Shared named browser socket — 1.9.380

The runtime directory contains multiple named daemons. browser-harness therefore requires `BH_RUNTIME_DIR_SHARED=1`; without it, a client searches for bare `bu.sock` instead of `bu-$BU_NAME.sock`. The runner now sets the shared flag and admits only the exact named socket.

A provider-free outer Codex sandbox fixture reached the daemon and the `bench19366` connection at `https://example.com/` while keeping the personal default connection unselected. Focused tests are 73/73 and type-check/diff checks pass. u19378 stopped before provider events and is frozen. Provider calls: 0.
