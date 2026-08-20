# 1.9.576 — Browser-harness active-line compatibility

The prepared subsea matrix stopped before provider execution because browser-harness `0.1.5` reported one live exact named connection as `bench19366 — active`, while the controller accepted only the older `bench19366 — active page: <url>` line. Daemon status and active connection count were already green.

The controller now accepts both exact full-line representations. It still requires the preregistered isolated name, a pinned CDP endpoint, a live daemon, and at least one active browser connection. Concise output for another name remains rejected. No provider cell was started and the six workspaces remain untouched.
