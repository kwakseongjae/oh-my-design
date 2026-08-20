# Atomic browser proof budget — 1.9.432

The 1.9.431 candidate failed for two independent reasons: it treated compound parts as permission to wrap at the separator, and it spent proof budget discovering browser-harness syntax after editing. This provider-free patch corrects only those observed causes.

Acceptance requires the canonical and bounded experimental copies to state that a one-line compound wrapper keeps parts plus separator atomic, to name the ready browser-harness stdin mechanism, to forbid help/skill/executable discovery, and to account post-edit `sed`/`rg`/`wc` as static closure. Contract tests, bounded-delta identity, TypeScript, and diff checks must pass. Provider calls are forbidden.
