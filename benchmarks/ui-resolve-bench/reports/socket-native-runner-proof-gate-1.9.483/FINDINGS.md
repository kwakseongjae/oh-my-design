# Socket-native runner and artifact-aware proof gate — 1.9.483

The failed semiconductor transfer exposed a controller boundary, not a reason
to weaken proof. Codex deliberately withheld raw `BU_CDP_URL` while retaining
the exact named browser-harness socket. The shipped runner now treats
`BU_NAME` as the attachment authority and records a raw endpoint only when the
controller discloses one.

A real replay used `bench19366` with both raw endpoint variables absent. The
runner attached to the existing consumer browser, launched no browser, and
measured 390px, 320px, and actual 200% (`640px + zoom 2`) in one attempt. The
static closure stayed passed. Two rows still lacked the required 8 CSS px fit
reserve, so the helper preserved every measurement and terminated as
`OMD_DELIVERY_UNRESOLVED`. This is the desired fail-closed outcome: browser
infrastructure is proven while product quality remains red.

The automatic proof gate now consumes the reflow artifact as well as command
events. The frozen candidate's runner-shaped command fails with seven concrete
artifact reasons because it never measured a browser and left closure open.
The socket-native replay removes all infrastructure reasons and fails only on
the two real quality conditions: insufficient fit reserve and non-closed
quality closure. Command shape alone can no longer satisfy browser proof.

TypeScript and 63 focused helper, gate, matrix, and export tests pass. The
bounded experimental mirror contract also passes after receiving the same
socket semantics. A wider benchmark run retained unrelated local vendor
fixture and timeout-attribution failures; none was promoted or hidden. No
provider was called, and this repair is not itself a benchmark winner.
