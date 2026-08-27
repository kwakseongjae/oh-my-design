# Codex all-effort sweep 1.9.826

## Verdict

The exact 51-cell block completed without an authority or infrastructure freeze. All 51 cells are terminal and valid, all 51 controller-owned run records match their execution-state hashes, and the final aggregate permits interpretation.

- Objective UI resolved: **38 / 51 (74.51%)**
- Objective UI resolved and proof-execution gate passed: **34 / 51 (66.67%)**
- Objective score: **83.51 mean / 85 median / 69 minimum**, out of 85
- Wall time: **12,528.833 seconds (3:28:48.833)**
- Observed total tokens: **36,890,716 across 50 / 51 cells**
- Terminal failures: **12 objective-gate failures + 1 preregistered valid timeout**

`ui_resolved` and the proof-execution promotion report are separate gates. The 38 / 51 objective result must not be described as 38 promotion-ready outputs; both gates passed in 34 / 51 cells.

## Results by configured model

| Configured model | Cells | UI resolved | UI + proof | Score mean / median | Observed tokens | Wall time |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Luna | 15 | 15 / 15 (100%) | 12 / 15 (80%) | 85.00 / 85 | 11,290,911 (15 / 15) | 3,097.043s |
| Terra | 18 | 12 / 18 (66.67%) | 12 / 18 (66.67%) | 82.67 / 85 | 13,613,155 (18 / 18) | 4,112.789s |
| Sol | 18 | 11 / 18 (61.11%) | 10 / 18 (55.56%) | 83.11 / 85 | 11,986,650 (17 / 18) | 5,319.001s |

Luna achieved a perfect objective-gate result on this three-task block, but three Luna cells still failed the separate proof-execution gate. This is a one-trial, configuration-attributed internal result, not a general model ranking.

## Results by effort

| Effort | Cells | UI resolved | UI + proof | Score mean / median | Observed tokens | Mean wall time |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| low | 9 | 7 / 9 (77.78%) | 6 / 9 | 82.78 / 85 | 3,975,829 | 140.642s |
| medium | 9 | 6 / 9 (66.67%) | 6 / 9 | 83.67 / 85 | 4,189,717 | 156.450s |
| high | 9 | 8 / 9 (88.89%) | 8 / 9 | 83.89 / 85 | 5,511,792 | 173.537s |
| xhigh | 9 | 7 / 9 (77.78%) | 6 / 9 | 84.11 / 85 | 6,382,139 | 225.393s |
| max | 9 | 7 / 9 (77.78%) | 5 / 9 | 84.11 / 85 | 9,851,967 | 322.130s |
| ultra | 6 | 3 / 6 (50%) | 3 / 6 | 82.00 / 83 | 6,979,272 (5 / 6) | 560.911s |

Ultra has six cells because the pinned Luna profile supports five efforts and has no ultra tier. High was the most reliable common effort in this block. Max and ultra consumed substantially more time and tokens without improving the success rate. The per-task paths were non-monotonic: a higher effort could pass, tie, or fail relative to a lower effort.

## Task sensitivity

| Task | UI resolved | Score mean | Observed tokens | Mean wall time |
| --- | ---: | ---: | ---: | ---: |
| oral-history-reel-return-v0.1 | 12 / 17 (70.59%) | 83.59 | 11,907,595 (16 / 17) | 265.109s |
| pollen-slide-accession-v0.1 | 11 / 17 (64.71%) | 82.41 | 11,346,453 | 223.195s |
| seismic-core-dispatch-v0.1 | 15 / 17 (88.24%) | 84.53 | 13,636,668 | 248.686s |

The result is strongly task-sensitive. For example, Terra passed Oral History at low through xhigh but failed at max and ultra; on Pollen it failed at low through high and passed at xhigh through ultra.

## Failure anatomy

Thirteen cells were valid terminal failures:

- `objective-gate-failed`: 12
- `preregistered-valid-timeout`: 1 (`oral-history-sol-ultra-r1-omd`; tokens unavailable)

Critical-gate occurrences overlap:

- Accessibility: 9 cells, all caused by Axe color-contrast findings
- Responsive geometry: 6 cells
- Task contract: 1 cell (`protected_hooks_exact`)

Failure combinations were seven accessibility-only, three responsive-only, two responsive plus accessibility, and one task-contract plus responsive. No cell failed the new entry-identity gate, and no evaluator navigation/page-error regression reappeared.

The proof-execution gate passed in 44 / 51 cells. Four objective successes failed proof execution, and three objective failures also failed proof execution. The most common proof findings were an unclosed reflow artifact and document overflow.

## Integrity and attribution

- Experiment: `codex-all-effort-sweep-1.9.826`
- Plan SHA-256: `5fc88664c8e75b930f3bb79efaca15810ef3a32503c02c50daa5e47784f9ab27`
- Task-set SHA-256: `1818b228712490cdd43612dcedbecdfe70a200d8991f227a85682779117e27e0`
- Schedule SHA-256: `c23b0fbf0e165a23722a6ccc9d2123f2f6ca0ed9df4c485d68b6063beca7ae57`
- Immutable local model-catalog SHA-256: `77df912746eb14867897f3100a02ec5182537d2edbe9c69c4d76f46c03ad6f5f`
- Routing attestation: 51 / 51 declared pass and 51 / 51 independently recomputed exact
- Model-catalog authority: 51 / 51 independently recomputed exact
- Controller-owned run-record hashes: 51 / 51 verified
- Final aggregate: `interpretation_allowed: true`, with no gate reasons
- Final aggregate SHA-256: `5124eedf1136258608aff64f4faf37f8cfc28391d809df47241de29103c0bc61`

Model and effort identity are configuration-attributed: every cell used the exact pinned Codex CLI argument and immutable local catalog entry, but the provider stream did not independently report model identity. Public model-attribution eligibility is therefore 0 / 51. Public wording should say “Codex configuration-routed Luna/Terra/Sol” rather than claim provider-attested model identity.

The frozen 1.9.825 experiment is not in this denominator or any result above. A metadata scan and exact experiment/product/variant checks found no 1.9.825 record mixed into the 1.9.826 root.

## Interpretation limits

- Three tasks, one trial per cell, fixed task order, and no retries or substitutions
- Scores are objective-contract results for these tasks, not a universal model leaderboard
- Cross-model pooling is forbidden by the preregistered contract; model rows are descriptive
- Latency and token comparisons are descriptive only
- Observed total tokens are input plus output tokens. Cached input is a subset reported separately; reasoning output is not added again
- The timeout cell has no token observation, so token totals use 50 / 51 cells

Machine-readable evidence is in [`SUMMARY.final.json`](./SUMMARY.final.json). The exact plan and preregistration receipt are beside this report.
