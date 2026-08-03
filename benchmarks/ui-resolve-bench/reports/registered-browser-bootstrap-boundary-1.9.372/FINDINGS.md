# Registered browser bootstrap boundary — 1.9.372

The named browser was correctly registered, but the controller forwarded its loopback CDP bootstrap URL into the restricted scored sandbox. That sandbox intentionally permits OpenAI inference domains and the browser-harness Unix socket, not arbitrary localhost networking, so doctor failed before provider execution.

The connection contract now separates registration from use. The controller requires and records an explicit CDP endpoint, while the scored process receives only `BU_NAME` and talks to the already registered browser through the admitted Unix socket. Browser readiness is checked before the cell-local auth link is created, preventing a failed browser preflight from materializing runtime state in an untouched cell.

Focused tests are 72/72; type-check, build, and diff checks pass. `/private/tmp/u19370` is frozen because its preregistered execution pin predates this boundary. Provider calls: 0.
