# Autopilot Luna/high smoke 1.9.854 — findings

Status: **complete diagnostic block; not a 2.0 promotion result**.

The frozen plan ran three fresh, oracle-free greenfield cells exactly once with `gpt-5.6-luna` at `high`. All three provider processes and controller evaluators completed. No retry, replacement, Cursor call, or cross-root result reuse occurred.

## Exact outcomes

| task | DESIGN.md proof | score | UI-Resolved | wall | input | cached input | output |
|---|---:|---:|---:|---:|---:|---:|---:|
| neighborhood-library-landing | PASS | 10/100 | false | 543.428s | 1,697,747 | 1,611,008 | 26,288 |
| cold-chain-operations | PASS | 20/100 | false | 497.649s | 1,329,982 | 1,235,456 | 25,043 |
| clinic-visit-prep-locales | PASS | 40/100 | false | 553.249s | 2,527,795 | 2,410,496 | 25,681 |

Total wall time is 1,594.326s (26m 34.326s). Observed input plus output is 5,632,536 tokens; cached input is reported separately and is already included in input. Mean score is 23.33 and median score is 20. These descriptive values come from one trial per task and do not support reliability, superiority, or public one-shot quality claims.

## What worked

- All three cells established a project-owned `DESIGN.md` whose controller-side provenance and coverage proof passed.
- All three runtime groups passed; no external requests, console errors, provider timeout, or evaluator crash occurred.
- Evidence honesty passed on cold-chain and locale. Locale switching, selected native label, `html[lang]`, and script agreement passed for all five locales.
- The repaired polymorphic evaluators converted arbitrary model output into terminal pass/failure records instead of timing out on a preferred DOM shape.

## What blocks 2.0

- UI-Resolved is 0/3. Journey is 0/3 and responsive is 0/3. Accessibility passes only the locale task.
- Landing lacks a reliable reservation-start state and focus transfer, has contrast failures, and presents unavailable information too confidently.
- Cold-chain misses the task contract across queue/filter/detail/owner validation and persistence; responsive and accessibility also fail.
- Locale loses textual progress across switching, lacks an honest unavailable-translation state, and has sub-44px controls at mobile/reflow sizes.
- Zero interactive user intervention did **not** mean zero question machinery: the final run directories contain 7 generated council questions (2 landing, 2 cold-chain, 3 locale). Landing and cold-chain also contain model-authored answer files; cold-chain has an abandoned first run plus a second run. A portable one-shot claim must forbid fabricated user-authority answers and require exactly one mission lineage.

## Next acceptance target

Before another provider smoke, Autopilot must turn evaluator feedback into a bounded self-repair loop: controller-verifiable task contract checklist before implementation, deterministic route/state preflight, same-output repair up to two rounds, zero self-authored user answers, exactly one mission lineage, and final browser/a11y/responsive gates. The next provider block must be fresh and must retain every first-trial failure.
