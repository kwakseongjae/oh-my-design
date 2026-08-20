# Autopilot greenfield calibration — incident response dashboard

Status: **provider-zero calibration PASS for 2 of 12 task families**
Promotion status: **BLOCKED** — evaluator calibration is not skill or model performance evidence.

## Frozen authority

| Artifact | SHA-256 |
| --- | --- |
| hidden task set v0.1 | `f733682d6461c5911ea5c68ec1c483d2fd03c19e299e44a95c72ae2750480389` |
| observable adapter set v0.1 | `485ce95796f74b2cd08b88f4d0d4bab16dfc2001a22f346577485f561baf756f` |
| calibrated evaluator | `d6dc37b5d59e9b7ae7a5386553fd0150562499fbc57d6c1fe7188d4e9e79b593` |
| dense table + detail drawer oracle | `281cca115e6cb98c394103580fd0c3bb1c05c72ab95c68382b4b207d73019e22` |
| severity cards + native dialog oracle | `ee0d5c3b8e3cee9467649f5cfa92d49e47531b9d42ebf8850322865a4c66c2e5` |

## Observable outcome result

Both byte- and structure-distinct implementations scored `100/100` and `ui_resolved=true` at 1440 × 900, 390 × 844, 320 × 720, and 720 × 450 reflow-equivalent viewports.

The evaluator discovers visible incident actions by role and accessible name, derives incident identity and semantic severity from the containing row/article, and requires at least two open sample incidents with two severity levels and one unique highest rank. It compares relative marker/container presentation rather than requiring a color or layout. The highest incident must open by Tab + Enter, the detail must name the same incident, and acknowledgement must remain visible in that detail with a durable control state after a second observation. An ephemeral toast alone does not pass.

The same task-neutral `?omd-scenario=loading|empty|error` query is used for both structures. Every state is checked for its semantic status/alert contract, absent active incident actions, Axe serious/critical zero, and horizontal reflow. No implementation-specific state API or network interception is used.

## Mutation calibration

Each mutant was applied independently to both valid structures:

| Mutant | Required failure | Oracle A | Oracle B |
| --- | --- | --- | --- |
| severity hierarchy flattened while labels remain | relative severity hierarchy | killed | killed |
| durable acknowledgement state removed while action remains | acknowledged-state persistence | killed | killed |
| incident open control removed from keyboard order while pointer handler remains | keyboard-only detail journey | killed | killed |

Thus the six negative cells cannot pass through a specific table/card selector, visual token, or click fallback. The two positive controls prove that the same assertions accept both a table/drawer and a cards/dialog implementation.

## Honest boundary

This is task-adapter calibration only. No model authored either oracle during this run, and no provider/Cursor/network call contributed to the result. Ten task families remain uncalibrated. Luna/high smoke, same-prompt skill arms, public one-shot copy, and 2.0 promotion remain prohibited until all frozen calibration and later promotion predicates pass.

## Reproduction

```bash
npm test -- --run test/unit/bench/ui-resolve-autopilot-greenfield-task-evaluator.test.mjs
RUN_UI_RESOLVE_BROWSER_E2E=1 npm test -- --run test/unit/bench/ui-resolve-autopilot-greenfield-task-evaluator-e2e.test.mjs
RUN_UI_RESOLVE_BROWSER_E2E=1 npm test -- --run test/unit/bench/ui-resolve-autopilot-greenfield-incident-oracles-e2e.test.mjs test/unit/bench/ui-resolve-autopilot-greenfield-incident-interaction-mutants-e2e.test.mjs
```
