# 1.9.555 — Protected decision-target inventory completeness

The subsea transfer did not fail because the fit planner measured a registered target incorrectly. It failed because the candidate never registered the protected compound decision target. The helper was strict over the submitted inventory but had no independent completeness witness, so eight valid rows could conceal one missing decision-critical row.

The pre-edit product snapshot is now that witness. When it contains a `data-bench-decision-role="target"` hook, artifact lock requires exactly one `role: target` row anchored to that hook, with the same cardinality, and exactly one distinct carrier bound only to that target. Omission, selector drift, count drift, reuse of the target text node as its own carrier, or sharing the carrier with evidence, state, or actions fails before `plan-close`.

The rule is intentionally narrow. Products without a protected decision-target hook retain the existing generic inventory contract. This repairs the observed omission without guessing which arbitrary prose should become a benchmark row.

This was a provider-free repair and the four frozen subsea cells remain unopened. Focused contract tests pass 47/47, TypeScript lint and diff checks pass, and the full suite passes 578 tests with the same three unrelated environment/legacy failures recorded before this change.
