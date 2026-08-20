# Autopilot greenfield calibration — cold-chain operations

Date: 2026-08-10

Promotion status: **BLOCKED** — evaluator calibration is not skill or model performance evidence.

## Frozen authority

| Artifact | SHA-256 |
| --- | --- |
| hidden task set | `f733682d6461c5911ea5c68ec1c483d2fd03c19e299e44a95c72ae2750480389` |
| observable adapter set | `485ce95796f74b2cd08b88f4d0d4bab16dfc2001a22f346577485f561baf756f` |
| calibrated evaluator | `d6dc37b5d59e9b7ae7a5386553fd0150562499fbc57d6c1fe7188d4e9e79b593` |
| responsive table + drawer oracle | `74d7e86d43095db04b5a5933143057d040fe3e24efa3a0f3b39b22b09ac5d453` |
| exception cards + detail view oracle | `b24dd4c0f9e954a86483c8af59253933cb5fc7713141874a7d2afc896df1c36b` |

## Positive controls

Both structurally distinct implementations score 100/100 at 1440×900, 390×844, 320×720, and the 720×450 200%-reflow equivalent. The evaluator discovers controls by role and accessible name, proves at least two urgent and one routine sample record, activates an explicit persistent urgent filter, opens a matching evidence detail by keyboard, rejects an empty owner, and requires the chosen sample owner in both an announced confirmation and the source queue record.

The evaluator also runs Axe in initial, filtered, detail, validation-error, and assigned states. It requires no document overflow, reachable critical record fields, unclipped controls, mobile targets, sample-data scope, and no affirmative real-shipment, real-staff, or regulatory-compliance claims.

## Negative controls

Each mutant is applied to both oracle shapes:

| Mutant | Expected atomic failure |
| --- | --- |
| 720px minimum document width | `responsive` / critical record reachability |
| Active filter summary forced to “All priorities” | `filter_selected_and_persistently_visible` |
| Queue-record owner update removed | `assigned_owner_confirmed_and_persistent` |

All six mutant cells are rejected. A toast or detail-only owner label does not count as persistent queue state.

## Honest boundary

This is provider-zero task-adapter calibration. No model authored either oracle and no provider, Cursor, or network call contributed to the result. Nine task families remain uncalibrated. Luna/high smoke, same-prompt skill comparison, public one-shot copy, and 2.0 promotion remain blocked.

## Reproduction

```bash
npm test -- --run test/unit/bench/ui-resolve-autopilot-greenfield-task-evaluator.test.mjs
RUN_UI_RESOLVE_BROWSER_E2E=1 npm test -- --run test/unit/bench/ui-resolve-autopilot-greenfield-cold-chain-e2e.test.mjs
```
