# Harness efficiency replacement — 1.9.13 findings

Executed on 2026-07-23 under the frozen preregistration. The matrix stopped at
cell 11 and was not resumed or retried.

## Disposition

Mark 1.9.13 calibration failed.

- 18 scheduled
- 11 attempted
- 10 valid completed cells
- 1 preregistered stop: `operations-t2-harness`
- 7 not started
- stop reason: `replacement-verifier-authored`

The stopped harness provider itself exited zero with a final response, exact
Opus attribution, two required specialist calls, first product write at
242,904ms, and only `index.html` changed as a product file. However, after a
headless Chrome environment block it authored `$TMPDIR/verify.mjs`, a new CDP
automation program covering filters, disclosures, acknowledgement, target
sizes, and geometry. A real Chrome child process does not make a newly authored
verification runtime an existing project check. This violates the explicit
no-replacement-verifier delivery contract, so the executor correctly stopped
before evaluation.

## Completed cells before the stop

Five complete task/trial pairs are available only as incomplete-matrix
diagnostics.

| valid-only metric | portable | harness |
|---|---:|---:|
| valid cells | 5 | 5 |
| UI-Resolved | 5/5 | 5/5 |
| Evidence & Unknown | 5/5 | 5/5 |
| mean objective score | 84.2 | 84.2 |
| median wall time | 535,415ms | 478,509ms |
| median uncached tokens | 107,777 | 133,443 |
| maximum first product write | 408,299ms | 341,614ms |
| replacement verifiers | 0 | 0 |

Paired objective outcomes are 0 harness wins / 5 ties / 0 losses. Both systems
scored 81/85 on Operations trial 1 because `primary_action` design grounding
missed; every other completed cell scored 85/85. Valid-only harness medians are
0.894× wall time and 1.238× tokens relative to portable. These values cannot
support Pareto, reliability, promotion, or frontier claims because the matrix
is incomplete.

All five completed candidate cells made exactly one Opus-requested call to
each required specialist, had zero Agent errors, passed first-write delivery,
and authored no replacement verifier. The violation occurred in attempted
candidate cell six.

## Forensic artifact only

After the stop, the frozen evaluator was run once against the retained product
artifact. It returned 85/85 with all interactions, viewports, accessibility,
design grounding, and Evidence & Unknown passing. This separates product
quality from process-contract failure. The score is post-stop forensic evidence
only and does not make the cell valid or enter any aggregate.

## Root cause and next bounded patch

The canonical skill and benchmark activation already say not to author a DOM
shim, mock browser, or replacement verifier. They also call the final checklist
an “acceptance packet.” The provider treated that phrase as authority to write
one CDP packet after direct browser execution was blocked.

The next bounded patch must define the packet as a checklist/result, not an
executable artifact, and explicitly forbid authoring `verify.*`, `check.*`,
`probe.*`, inline shell files, or CDP/browser automation. Only repository-
existing tests/evaluators or direct commands that do not write a verification
program are allowed. When they fail once, browser proof stays unresolved and
delivery begins. A fresh single-cell recovery is required before another full
matrix.

