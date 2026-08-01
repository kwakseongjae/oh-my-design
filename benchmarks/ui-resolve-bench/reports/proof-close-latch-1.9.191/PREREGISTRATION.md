# Proof close latch — preregistration

Status: **LOCKED before implementation; provider-free**.

The proof-budget candidate preserved 85/85 quality in all six Grok/Luna trials, reduced Grok numeric cost, and reduced Luna tokens and command executions. It failed command-trace compliance in both model families because advisory counters did not prevent a model from reopening completed proof work. Luna also regressed mean wall time by 1.0%.

## Single delta

- Replace advisory proof counters with a revision-bound close latch.
- A product edit increments the revision and opens static/browser proof for that revision.
- One consolidated static closure records and closes the current revision; any later static verification command at that revision is a violation.
- One browser mechanism records `closed` or `unresolved`; recovery discovery, alternate mechanisms, and a second browser command are violations.
- Only a real product edit may reopen static proof. Browser proof never reopens after its one attempt.
- When static and browser states are closed, delivery becomes ready and later verification commands are violations.
- Keep every product, reflow, accessibility, evidence, token, geometry, and delivery quality gate unchanged.

Acceptance requires focused skill contract, historical experimental parity, TypeScript lint, and diff checks green. Provider calls remain zero. Provider-free acceptance does not promote the candidate; it must be pinned from a clean commit and transferred on a new unseen task.
