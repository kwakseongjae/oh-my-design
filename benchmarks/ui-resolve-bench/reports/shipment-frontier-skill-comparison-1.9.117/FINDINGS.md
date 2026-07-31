# Shipment frontier skill comparison — 1.9.117 findings

Status: **deterministic comparison complete; blind preference pending**.

The fresh `/tmp/u19117` denominator completed all six preregistered cells.
Every cell was valid, UI-Resolved, evidence-honest, and passed functionality,
responsive structure, accessibility, text geometry, and decision hierarchy.
There were no provider, timeout, pacing, evaluator, attribution, retry,
fallback, repair, replacement, or model-substitution events.

## Deterministic result

| Arm | Valid / scheduled | UI-Resolved | Reliability@3 | Objective scores |
|---|---:|---:|---:|---:|
| Exact OmD `omd-apply` | 3 / 3 | 100% | 100% | 85, 85, 81 |
| Exact Impeccable prompt-only | 3 / 3 | 100% | 100% | 81, 81, 81 |

The same-trial objective result for OmD relative to Impeccable is `2 wins / 1
tie / 0 losses`. OmD's median objective score is 85/85; Impeccable's is 81/85.
The four-point difference is the DESIGN-grounding `primary_action` color check.
It repeated in both Impeccable-leading-order trials and once in OmD trial 3.

This is a bounded objective advantage, not a public frontier claim. Both skills
remain UI-Resolved@1 and Reliability@3 100% on one fictional task family.

## Descriptive efficiency

| Arm | Wall time mean | Wall time median | Token mean | Token median |
|---|---:|---:|---:|---:|
| OmD | 267,113 ms | 271,469 ms | 161,568 | 94,688 |
| Impeccable | 408,556 ms | 388,858 ms | 300,776 | 357,236 |

OmD used less observed time and fewer reported tokens. The registered execution
contract marks latency as non-comparable; one task and three trials are too
small for an efficiency claim.

## Decision

Do not change the canonical OmD skill from this result. The next valid step is
same-trial anonymous owner review on Functionality, Usability, Fidelity, and
Ship Preference. A repeated visual loss may propose a bounded future rule, but
that rule must be validated on another unseen holdout before promotion.
