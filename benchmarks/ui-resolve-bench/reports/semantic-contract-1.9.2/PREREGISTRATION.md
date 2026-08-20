# 1.9.2 semantic-contract calibration preregistration

Locked after diagnosing 1.9.1 and before re-evaluating any saved output under
the new contract.

Benchmark task contract: UI-Resolve `0.3.0-dev`. Product experiment version and
benchmark contract version remain separate.

## Bounded hypothesis

Moving landmark and known task-fact requirements into each task manifest will
remove two false failures without weakening the unrelated negative controls.

This patch changes evaluator semantics only. It does not change OmD skill
content, prompts, starters, model settings, design tokens, journey oracles,
point weights, or the 1.9.1 records.

## Expected calibration

- An onboarding output with one h1, one main, one footer, and no nav passes the
  landmark contract because the first-run flow does not require navigation.
- Pricing and operations still require at least one nav landmark.
- “Showing all 4 incidents.” is allowed as a task-owned live count.
- “Showing all 400 incidents.” and “Trusted by 400 teams” still fail evidence
  honesty.
- Existing annual-price, preference-toggle, and severity-filter mutants keep
  failing their original state gate.

Saved 1.9.1 outputs may be copied and re-evaluated only as calibration
fixtures. Their canonical scores and run records must not be overwritten or
retroactively published under 1.9.2.
