# Media-clearance packet Luna xhigh replication — findings

Status: **6/6 valid complete; quality direction replicated, strict efficiency gate held**.

## Result

| Arm | Scores | UI-Resolved | Mean wall | Median wall | Mean tokens | Median tokens |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Previous canonical | 83 / 85 / 85 | 2/3 | 466,661 ms | 488,000 ms | 983,091 | 1,041,345 |
| Reflow packet | 85 / 85 / 85 | 3/3 | 514,630 ms | 482,787 ms | 1,137,071 | 1,015,569 |

- Paired score deltas are `+2 / 0 / 0`; packet W/T/L is `1 / 2 / 0`.
- Packet Reliability@3 is 100%; Evidence & Unknown and every critical gate pass 3/3.
- Previous trial 1 leaves page horizontal overflow at the 200% surrogate. Packet has no atomic, dynamic-state, compact-copy, overflow, clipping, overlap, target, evidence, state, hierarchy, accessibility, or protected-hook failure in any trial.
- Packet mean wall time is +10.3%; median wall time is -1.1%. Paired wall deltas are `-44,049 / +105,802 / +82,154 ms`.
- Packet mean reported tokens are +15.7%; median tokens are -2.5%. Paired token deltas are `-25,776 / +254,749 / +232,966`.
- All six cells requested `gpt-5.6-luna` with xhigh effort and are reported separately from Grok.

## Cross-model direction

- Grok: packet 3/3 versus previous 2/3, W/T/L `1/2/0`, mean wall +11.3%, mean tokens -9.2%.
- Luna xhigh: packet 3/3 versus previous 2/3, W/T/L `1/2/0`, mean wall +10.3%, mean tokens +15.7%.
- Quality direction is consistently positive and the packet has zero paired quality loss on both models.
- Mean wall regression reproduces on both models. Token direction is model-sensitive.

## Efficiency failure cluster

The Luna command trace shows repeated proof work rather than a missing quality rule: repeated full/source reads, browser-harness plus doctor and executable discovery, two direct Chrome launch attempts after browser infrastructure was already unavailable, and multiple overlapping static hook/forbidden-pattern/syntax checks. This violates the intended single-mechanism and no-duplicate-verification policy but is not operationally encoded strongly enough.

## Decision

Promotion remains held by the strict efficiency gate. Do not add another reflow heuristic. The next bounded candidate adds a machine-readable proof budget: one consolidated pre-edit inventory, one product edit transaction, one consolidated static closure, and at most one browser mechanism attempt. Infrastructure failure closes browser proof as unresolved and forbids doctor/launch/install/alternative-probe retries. Exact quality contracts remain unchanged.

