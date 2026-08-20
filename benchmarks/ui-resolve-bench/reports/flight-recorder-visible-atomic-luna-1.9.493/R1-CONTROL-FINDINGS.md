# Flight-recorder r1 socket-native control — 1.9.495

The exact 1.9.483 control produced a valid but unresolved 79/85 UI in 294.458
seconds using 562,494 provider tokens. It fixed contrast and every protected
atomic wrap, but left 33px overflow at 390px, 103px at 320px, and 206px under
actual 200% reflow.

The proof path failed before browser measurement. The model registered the
bare boolean attribute `data-primary-action` as a cardinality assertion, while
the deterministic helper requires an exact HTML attribute assertion. Static
closure therefore failed on its only attempt, the shipped runner was not
invoked, and the artifact remained open with zero browser attempts. This is a
valid system failure and is not retried.

Tokens-to-Target is now at least 50,999,080 plus six usage-unavailable cells.
The next scheduled cell is the exact visible atomic-fit candidate after the
frozen 120-second inter-cell pacing boundary.
