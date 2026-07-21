# Product release train: 1.9.1 → 2.0.0

Version `2.0.0` means “frontier-grade UI skill and harness backed by reproducible
evidence,” not merely a large feature release. We reach it through one bounded
hypothesis per patch. Benchmark protocol and product package versions remain
separate and are both recorded in every run.

## Patch experiment contract

Every `0.0.1` product release records:

```text
hypothesis
affected benchmark family and task slice
baseline commit and candidate commit
pre-registered success / guardrail / rollback metrics
smoke and candidate run package
product activation metric
observation window and decision
```

Do not modify benchmark thresholds to make a candidate patch pass. A score-rule
change creates a new suite version and re-evaluates every public candidate.

## Planned release ladder

| Product | Experiment | Benchmark evidence | Product evidence | Promotion gate |
|---|---|---|---|---|
| 1.9.1 | measurement + delivery contract kernel | family/run schema, clean-source attestation, product-only diffs, normalized exporter | natural-language route guide, shared work packet, one implementation owner, harness→product delivery bridge | aggregate/export fixtures, skill contracts, and fail-closed tests pass |
| 1.9.2 | task-pack calibration | 12 tasks, 2 valid oracles, mutants | none | valid implementations pass; mutants fail |
| 1.9.3 | fast first result | Prompt Arena + Skill Lift smoke | install → first useful surface | faster first result with no resolved-rate regression |
| 1.9.4 | inspection loop | repair/reverify task slice | inspect → fix → reverify completion | higher repair success; time budget held |
| 1.9.5 | reference query layer | evidence/unknown and open-brief slices | reference search → selection → build | positive paired lift without fabricated claims |
| 1.9.6 | model transfer | 3-model transfer matrix | cross-agent install/doctor | lift generalizes beyond one anchor model |
| 1.9.7 | harness efficiency | Harness Track Pareto run | checkpoint completion/abandonment | non-dominated quality/time/intervention result |
| 1.9.8 | public Preview | 12-task × 5-run packages | benchmark page → qualified install | complete artifacts, failures, and examples public |
| 1.9.9 | independent challenge | 24 hidden tasks, blind review, external audit | seven-day activation guardrails | no unresolved benchmark blocker; losses published |
| 2.0.0 | frontier release | Verified Model/Skill/Harness evidence | durable activation and retention | all frontier gates below pass |

The hypothesis may change after each patch, but the version is not skipped just
to hide a failed experiment. A failed patch remains documented and its product
change is reverted or redesigned before the next candidate.

## 2.0.0 frontier gates

All must pass:

1. OmD portable skill is statistically tied for first or first on the Verified
   Skill Lift Track; no self-authored aesthetic preference is a critical gate.
2. Paired resolved lift has a 95% lower bound above zero overall and no material
   negative slice across at least three model families.
3. OmD full harness is Pareto non-dominated on resolved rate, elapsed time, and
   unplanned human intervention under the standard budget.
4. At least 24 hidden tasks cover creation, repair, stateful flows, responsive,
   accessibility, evidence/unknown, screenshot fidelity, open briefs, and five
   locales.
5. Verified results use ten runs per task; raw successes, failures, timeouts,
   manifests, and representative artifacts are downloadable.
6. Blind visual review includes at least ten practitioners, confidence
   intervals, agreement, reversal, and both-fail rates.
7. Independent task audit estimates fewer than 5% broken or ambiguous tasks;
   flagged tasks are retired before ranking.
8. Install → first resolved surface and seven-day reuse improve against 1.9.0
   without accessibility, evidence-honesty, or builder regressions.
9. Natural-language routing selects the smallest capable workflow; specialists
   return evidence-backed advice, one main agent owns edits, and implementation
   is not complete until the same consumer route is reverified.

If the gates are not met at 1.9.9, continue with a prerelease or another 1.9.x
patch. The calendar does not force `2.0.0`.
