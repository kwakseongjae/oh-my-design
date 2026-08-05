# Objective-epoch normalized canary — 1.9.678

## Result

A six-cell Raw DESIGN.md versus current `omd:apply` matrix was freshly
prepared under score schema 0.6 and methodology epoch
`ui-resolve-objective-2026q3-passive-scroll-v1`. It is a preparation canary,
not a benchmark result.

- 6/6 cells prepared and remained untouched.
- Core prompt, starter tree, initial product tree, runtime, model, effort,
  timeout, and objective evaluator pins are equal across both arms.
- Trial order is balanced `control/OmD`, `OmD/control`, `control/OmD`.
- The OmD arm is pinned to publishable commit `c73950c0…` and skill tree
  `cd1e35c1…`.
- Provider calls: 0. Model exposures: 0. Execution artifacts: 0.

The locked plan intentionally carries `remote-execution-deferred`, so the
runner cannot execute it. This root proves only that the new epoch can prepare
a normalized comparison without silently inheriting historical evaluator
state. A future scored comparison must use a genuinely claim-eligible task and
an explicitly unlocked fresh root; it must not repurpose this canary.

## New reusable gate

`audit-prepared-matrix-admission.mjs` validates the four evaluator pins,
plan/cell/manifest agreement, untouched product trees, cross-arm normalization,
publishable skill sources, and absence of provider execution artifacts. Any
mismatch fails closed.
