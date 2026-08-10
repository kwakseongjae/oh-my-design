# Autopilot greenfield calibration — research data deletion

Date: 2026-08-10

Promotion status: **BLOCKED** — evaluator calibration is not skill or model performance evidence.

## Frozen authority

| Artifact | SHA-256 |
| --- | --- |
| hidden task set | `f733682d6461c5911ea5c68ec1c483d2fd03c19e299e44a95c72ae2750480389` |
| observable adapter set | `485ce95796f74b2cd08b88f4d0d4bab16dfc2001a22f346577485f561baf756f` |
| calibrated evaluator | `d6dc37b5d59e9b7ae7a5386553fd0150562499fbc57d6c1fe7188d4e9e79b593` |
| progressive danger-panel oracle | `c9b1b58b07b6e05b722e19733f7713daa348b7dc2ec3ac0e8cbe4c980928d68a` |
| review-plus-confirmation oracle | `503fc34715499d2bd3195ae48feaec94c6e3016ef3fae1cc7d605ea21fcb103f` |

## Result

Both distinct structures score 100/100 at 1440, 390, 320 and the 200%-reflow equivalent. The evaluator requires a visible parent/child deletion scope, discovers the displayed confirmation phrase, proves that the exact phrase alone and acknowledgement plus a wrong phrase both remain blocked, then permits approval only when both gates are satisfied. It also reaches Cancel by keyboard from a fresh flow and requires an announced cancelled state.

The contextual honesty scan rejects affirmative retention, legal, audit, certification and compliance claims while allowing explicit not-provided and not-verified language.

## Mutants

Each mutation is applied to both structures: acknowledgement bypass, scope hierarchy flattened to prose, and hidden cancel action. All six cells fail the intended atomic assertion without crashing or repairing the candidate.

## Boundary

This is provider-zero calibration only. No model/provider/Cursor/network call contributed. Six task families remain uncalibrated; one-shot and comparative claims stay blocked.

## Reproduction

```bash
npm test -- --run test/unit/bench/ui-resolve-autopilot-greenfield-task-evaluator.test.mjs
RUN_UI_RESOLVE_BROWSER_E2E=1 npm test -- --run test/unit/bench/ui-resolve-autopilot-greenfield-deletion-e2e.test.mjs
```
