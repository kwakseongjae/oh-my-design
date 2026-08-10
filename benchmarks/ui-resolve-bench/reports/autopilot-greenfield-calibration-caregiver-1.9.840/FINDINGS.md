# Autopilot greenfield calibration — caregiver onboarding

Date: 2026-08-10

Promotion status: **BLOCKED** — evaluator calibration is not skill or model performance evidence.

## Frozen authority

| Artifact | SHA-256 |
| --- | --- |
| hidden task set | `f733682d6461c5911ea5c68ec1c483d2fd03c19e299e44a95c72ae2750480389` |
| observable adapter set | `485ce95796f74b2cd08b88f4d0d4bab16dfc2001a22f346577485f561baf756f` |
| calibrated evaluator | `d6dc37b5d59e9b7ae7a5386553fd0150562499fbc57d6c1fe7188d4e9e79b593` |
| single-card wizard oracle | `fe4fe0b9b4530a33be0e63cb7b8142630ecb08b98a0677f0545d1d74fd5129b1` |
| full-page stepper oracle | `3efecb70d5882ec520950bc86a41d712270e0cd4861ee56c1ba9ac035c144e92` |

## Positive controls

Both structurally distinct implementations score 100/100 across desktop, 390px, 320px, and the 200%-reflow equivalent. The evaluator requires visible and programmatic “current of total” context at every step, no silent preference selection, blocked empty submission with an associated alert and focus, a review that echoes the selected value, Back that preserves it, and an announced completed state without stale progress.

Axe runs after purpose, preference, validation-error, review, back, and completion states. Controls remain unclipped and mobile targets remain at least 44px. The initial purpose must explicitly avoid inferring diagnoses, relationships, or consent.

## Negative controls

Each mutant is applied to both oracle structures:

| Mutant | Expected atomic failure |
| --- | --- |
| Dynamic current/total copy removed | `current-and-total-step-visible-and-programmatic` |
| Back clears the selected radio | `review-back-preserves-choice-then-complete` |
| Empty preference silently falls through | `empty-choice-blocked-then-select` |

All six mutant cells are rejected without evaluator crash or recovery edits.

## Honest boundary

This is provider-zero adapter calibration. No model authored either oracle and no provider, Cursor, or network call contributed. Eight task families remain uncalibrated; Luna/high smoke and public one-shot or comparative claims remain blocked.

## Reproduction

```bash
npm test -- --run test/unit/bench/ui-resolve-autopilot-greenfield-task-evaluator.test.mjs
RUN_UI_RESOLVE_BROWSER_E2E=1 npm test -- --run test/unit/bench/ui-resolve-autopilot-greenfield-caregiver-e2e.test.mjs
```
