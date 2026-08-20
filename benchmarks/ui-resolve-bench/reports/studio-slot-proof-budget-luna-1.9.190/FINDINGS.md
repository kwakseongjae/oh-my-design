# Studio-slot proof-budget Luna transfer — 1.9.190

## Outcome

The matrix completed 6/6 valid cells. Both arms scored 85/85 in all three trials and reached UI-Resolved 3/3. The proof-budget arm therefore has W/T/L `0/3/0`, Reliability@3 `100%`, and zero paired quality loss.

The candidate reduced reported tokens and command executions, but it did not reduce Luna mean wall time and it failed the preregistered command-trace gate. Promotion remains **HOLD**.

## Quality

| Trial | Packet | Proof budget | Paired result |
|---|---:|---:|---|
| 1 | 85 | 85 | tie |
| 2 | 85 | 85 | tie |
| 3 | 85 | 85 | tie |

All six cells preserved function, state journeys, accessibility, DESIGN.md grounding, evidence honesty, hierarchy, protected hooks, atomic values, dynamic state, compact control copy, chronological order, and resource-to-time relationships.

## Efficiency

| Metric | Packet | Proof budget | Delta |
|---|---:|---:|---:|
| Mean wall time | 413,169 ms | 417,319 ms | +1.0% |
| Median wall time | 375,736 ms | 413,766 ms | +10.1% |
| Mean tokens | 878,204 | 727,021 | -17.2% |
| Median tokens | 838,039 | 703,861 | -16.0% |
| Mean command executions | 13.0 | 9.7 | -25.6% |
| Median command executions | 13 | 10 | -23.1% |

Paired proof-budget wall-time deltas were `+12.8%`, `+27.8%`, and `-28.0%`. Paired token deltas were `-35.9%`, `+20.3%`, and `-33.9%`. The third trial reversed the wall-time direction, but the preregistered Luna report remains descriptive and is not pooled with Grok.

## Command trace gate

The candidate was required to produce browser recovery commands `0` and duplicate static-closure clusters `0`.

| Trial | Browser recovery-like calls | Duplicate static-closure clusters |
|---|---:|---:|
| 1 | 0 | 1 |
| 2 | 1 | 1 |
| 3 | 0 | 3 |

Trial 2 performed executable discovery before using the mandated browser harness. Every trial repeated a post-edit static closure: trial 1 repeated marker/script structure checks after browser proof, trial 2 ran overlapping Node contract passes, and trial 3 repeated the same marker/hook/fact closure before adding separate contrast and syntax passes. The candidate reduced total command executions from `13/12/14` to `8/11/10`, but the exact zero-duplicate contract was not satisfied.

## Cross-model decision

- Grok quality gate: `pass`
- Grok numeric efficiency gate: `pass`
- Grok command-trace gate: `fail`
- Luna quality gate: `pass`
- Luna descriptive token/command direction: `improved`
- Luna descriptive wall-time direction: `regressed`
- Luna command-trace gate: `fail`
- promotion: `HOLD`

The same quality result transfers across Grok and Luna, so the proof budget does not damage the product outcome. The execution discipline does not transfer: prose plus counters still lets both model families reopen closed proof work. The next bounded candidate must not add another heuristic. It should replace advisory counters with an explicit close latch that records `static_closure=closed` and `browser_proof=closed|unresolved`; once closed, later shell/browser verification is forbidden unless a product edit reopens the corresponding phase.
