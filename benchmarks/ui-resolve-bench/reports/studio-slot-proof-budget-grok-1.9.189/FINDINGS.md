# Studio-slot proof-budget Grok transfer — 1.9.189

## Outcome

The matrix completed 6/6 valid cells. Both arms scored 85/85 in all three trials and reached UI-Resolved 3/3. The proof-budget arm therefore has W/T/L `0/3/0`, Reliability@3 `100%`, and zero paired quality loss.

The numeric efficiency hypothesis passed strongly, including the candidate's +5.2% installed skill context. Promotion remains **HOLD** because the preregistered command-trace gate failed.

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
| Mean wall time | 513,198 ms | 324,012 ms | -36.9% |
| Median wall time | 515,193 ms | 346,179 ms | -32.8% |
| Mean tokens | 217,770 | 136,335 | -37.4% |
| Median tokens | 223,657 | 86,562 | -61.3% |
| Mean tool calls | 38.7 | 20.7 | -46.6% |
| Median tool calls | 40 | 21 | -47.5% |

Paired proof-budget wall-time deltas were `-49.3%`, `-30.7%`, and `-30.5%`. Paired token deltas were `-75.8%`, `-61.3%`, and `+68.4%`; the third-trial outlier did not reverse the preregistered mean-token gate.

## Command trace gate

The candidate was required to produce browser recovery commands `0` and duplicate static-closure clusters `0`. Reviewed traces instead showed:

| Trial | Browser recovery-like calls | Duplicate static-closure clusters |
|---|---:|---:|
| 1 | 2 | 1 |
| 2 | 3 | 4 |
| 3 | 2 | 1 |

The traces include executable discovery, direct Chrome launches or alternate WebKit/Chrome mechanisms, and repeated static contract passes. This is materially less work than the packet arm, but it does not satisfy the exact execution-budget contract. No replacement verifier was retained in product artifacts and the benchmark evaluator still passed every product-quality gate.

## Decision

- quality gate: `pass`
- numeric efficiency gate: `pass`
- command-trace gate: `fail`
- promotion: `HOLD`

Trigger a separate Luna xhigh matrix with the exact task, arms, order, timeout, and pacing. Keep the Grok and Luna denominators separate. Luna is testing whether command-budget compliance is model-sensitive; it does not replace or repair a Grok cell.
