# Autopilot greenfield calibration — community class checkout

Date: 2026-08-10

Promotion status: **BLOCKED** — evaluator calibration is not skill or model performance evidence.

## Frozen authority

| Artifact | SHA-256 |
| --- | --- |
| hidden task set | `f733682d6461c5911ea5c68ec1c483d2fd03c19e299e44a95c72ae2750480389` |
| observable adapter set | `485ce95796f74b2cd08b88f4d0d4bab16dfc2001a22f346577485f561baf756f` |
| calibrated evaluator | `d6dc37b5d59e9b7ae7a5386553fd0150562499fbc57d6c1fe7188d4e9e79b593` |
| inline summary/form/receipt oracle | `85ddd5c0e4a6e88715defbc09a9a37fd46cbfee6d90ec850e11133ccb4ac438a` |
| review/contact/confirmation oracle | `105473eb093faa66a054e6df2ba0ce4a937409be26c2c0d054387bfd933638ed` |

## Result

Both distinct structures score 100/100 at 1440, 390, 320 and the 200%-reflow equivalent. The evaluator requires a labelled monetary total before confirmation, blocks empty contact and malformed email with associated errors and focus, observes a real busy state, permits success only after the confirm action, and exercises an arm-neutral `?omd-scenario=declined` recovery path. Axe runs after every reached state.

The contextual honesty scan permits the required class price while rejecting discounts, coupons, scarcity, testimonials, ratings, and affirmative payment/booking success before action.

## Mutants

Each mutation is applied to both structures: hidden total, malformed-email acceptance, and visible premature “Payment successful” copy. All six cells fail the intended atomic assertion without crashing or repairing the candidate.

## Boundary

This is provider-zero calibration only. No model/provider/Cursor/network call contributed. Seven task families remain uncalibrated; one-shot and comparative claims stay blocked.

## Reproduction

```bash
npm test -- --run test/unit/bench/ui-resolve-autopilot-greenfield-task-evaluator.test.mjs
RUN_UI_RESOLVE_BROWSER_E2E=1 npm test -- --run test/unit/bench/ui-resolve-autopilot-greenfield-checkout-e2e.test.mjs
```
