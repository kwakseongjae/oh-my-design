# Product release train: 1.9.1 → 1.9.n → 2.0.0

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
| 1.9.7 | harness efficiency | Harness Track Pareto run | checkpoint completion/abandonment | **failed calibration:** preregistered timeout at 12/18; retained and not promoted |
| 1.9.8 | harness delivery-budget recovery | same stopped-task fresh cell | first edit/final delivery milestones | valid 85/85 cell, first edit by 50% budget, exact attribution, no replacement browser harness |
| 1.9.9 | harness efficiency replacement | fresh repeated Harness Track matrix | checkpoint completion/abandonment | complete non-dominated quality/time/intervention result |
| 1.9.10 | benchmark robustness | evaluator mutation and contamination suite | reproducible local run package | every known false-green/false-red mutant has a named disposition |
| 1.9.11 | failure recovery | timeout, tool, browser, install, and attribution failure cells | actionable doctor/recovery path | recovery improves valid completion without weakening fail-closed gates |
| 1.9.12 | locale and evidence expansion | five-locale evidence/unknown and open-brief slices | locale-correct query→build handoff | no material negative locale slice; unsupported facts remain zero |
| 1.9.13 | public benchmark UX | downloadable run packages and blind comparison gallery | benchmark page → qualified install | methods, failures, examples, and uncertainty are legible without a global rank |
| 1.9.14 | activation and reuse | install→first-resolved and seven-day reuse cohort | CLI/docs/builder connected funnel | activation and reuse improve with no accessibility or evidence regression |
| 1.9.15 | independent challenge | 24 hidden tasks, blind review, external audit | seven-day activation guardrails | no unresolved benchmark blocker; losses published |
| 1.9.n | additional bounded patch experiments | whichever frontier gate remains unresolved | corresponding product contract | preregister, test, retain failure evidence, repeat |
| 2.0.0 | frontier release | Verified Model/Skill/Harness evidence | durable activation and retention | all frontier gates below pass |

The hypothesis may change after each patch, but the version is not skipped just
to hide a failed experiment. A failed patch remains documented and its product
change is reverted or redesigned before the next candidate.

## Current 1.9.4 calibration

The portable repair skill now locks an immutable protected-contract ledger and
requires contrast, 320px, 200% zoom, and focused-control geometry checks. A
separate opt-in Harness Track adapter adds two bounded, read-only repair
specialists while keeping one implementation owner.

The first unbounded all-Opus smoke timed out and expanded a two-item FAQ to six.
The bounded replacement reached 85/85 but was invalid for its all-Opus claim
because the parent requested Sonnet specialists. The fresh model-pinned
replacement completed in 550,644ms at 85/85 with both specialist calls requesting
Opus, no Agent/infrastructure/sandbox/cwd error, and no Sonnet usage. This closes
the execution and attribution path only. One task × one trial remains Internal;
Harness efficiency and Pareto claims wait for the 1.9.7 repeated matrix.

## Current 1.9.22 harness checkpoint

The seventh fresh Harness Track replacement completed 18/18 valid exact
Opus/xhigh cells without retry or intervention. The bounded repair harness
reached UI-Resolved 8/9 versus portable 5/9, paired 4 wins / 4 ties / 1 loss,
and task Reliability@3 2/3 versus 1/3. It was about 15% faster at the median
while using about 14% more uncached tokens, so the quality/time/token result is
non-dominated.

All nine candidate cells used both read-only specialists, made a targeted
non-no-op first Edit within both delivery clocks, preserved Evidence & Unknown,
and authored no replacement verifier. The internal harness process contract is
promoted. The confidence interval still includes zero and the slice remains
three tasks × three trials, so this is not a public frontier or best-skill
claim. The next bounded lane is 1.9.23 locale and evidence expansion.

## Current 1.9.23 locale checkpoint

The first five-locale task and evaluator are calibrated. A known-good
implementation passes 85/85 with all six critical gates; the seeded starter
scores 63/85 and fails the intended locale-content, responsive, accessibility,
and unsupported-claim checks.

A two-cell exact Opus/xhigh smoke is preregistered: Raw DESIGN.md versus the
reviewed `omd:locale-adapter` → `omd:humanize` stack. The only candidate delta
is those two locally installed skills and their sequential activation. A full
pass only validates the execution path and unlocks a repeated locale matrix;
it cannot support a public best-skill or general locale-lift claim.

The smoke stopped on the candidate's 900-second timeout. The valid Raw control
scored 70/85; the candidate wrote the product by 340 seconds but then authored
six replacement verification programs, made repeated Chrome/CDP attempts, and
had no final response at 900 seconds. No stopped-candidate evaluator was run.
The binding issue is verification authority and delivery scheduling, not skill
loading: both installed skills were read by 18 seconds.

1.9.24 is therefore a candidate-only fresh recovery. It defines locale VERIFY
as protected-fact and terminology comparison, forbids replacement verification
software, stops optional checking by 720 seconds, and reserves final delivery
by 810 seconds. Public benchmark UX moves to 1.9.25.

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

`1.9.9` is a checkpoint, not a deadline. If any gate remains unresolved, continue
with `1.9.10`, `1.9.11`, and as many bounded `1.9.x` experiments as required.
The calendar and the number 9 do not force `2.0.0`.
