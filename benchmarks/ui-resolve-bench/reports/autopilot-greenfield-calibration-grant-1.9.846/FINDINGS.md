# Autopilot greenfield calibration — grant evidence intake

Date: 2026-08-10

Promotion status: **BLOCKED** — evaluator calibration is not skill or model performance evidence.

## Frozen authority

| Artifact | SHA-256 |
| --- | --- |
| hidden task set | `f733682d6461c5911ea5c68ec1c483d2fd03c19e299e44a95c72ae2750480389` |
| observable adapter set | `485ce95796f74b2cd08b88f4d0d4bab16dfc2001a22f346577485f561baf756f` |
| calibrated evaluator | `d6dc37b5d59e9b7ae7a5386553fd0150562499fbc57d6c1fe7188d4e9e79b593` |
| three-status board oracle | `f63db7a1f27cad7b84e3722978382b94181515e1cac5304991669c9ab44bdf08` |
| evidence register oracle | `45c3adf0a478bd1783a7c1d63803fac56b83d17fbcc3aae8c8a097f062d451bf` |

## Result

Both distinct structures score 100/100 at 1440, 390, 320 and the 200%-reflow equivalent. Every evidence item exposes a textual verified, pending, or unresolved status. A pending item is reclassified through either a button or native select. Outcomes, budget, dates, and funder requirements remain explicitly unresolved and contain no guessed values.

Draft submission must first expose a warning that names the four unresolved fields. Only a separate confirmation creates an announced draft-submitted state, where the unresolved count remains visible.

## Mutants

Each mutation is applied to both structures: auto-filled protected unknowns, color-only evidence status, and removed unresolved warning. All six cells fail the intended atomic assertion without crashing or repairing the candidate.

## Boundary

This is provider-zero calibration only. No model/provider/Cursor/network call contributed. Two task families remain uncalibrated; one-shot and comparative claims stay blocked.

## Reproduction

```bash
npm test -- --run test/unit/bench/ui-resolve-autopilot-greenfield-task-evaluator.test.mjs
RUN_UI_RESOLVE_BROWSER_E2E=1 npm test -- --run test/unit/bench/ui-resolve-autopilot-greenfield-grant-e2e.test.mjs
```
