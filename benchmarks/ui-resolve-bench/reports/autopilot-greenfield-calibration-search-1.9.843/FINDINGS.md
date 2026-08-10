# Autopilot greenfield calibration — fictional public record search

Date: 2026-08-10

Promotion status: **BLOCKED** — evaluator calibration is not skill or model performance evidence.

## Frozen authority

| Artifact | SHA-256 |
| --- | --- |
| hidden task set | `f733682d6461c5911ea5c68ec1c483d2fd03c19e299e44a95c72ae2750480389` |
| observable adapter set | `485ce95796f74b2cd08b88f4d0d4bab16dfc2001a22f346577485f561baf756f` |
| calibrated evaluator | `d6dc37b5d59e9b7ae7a5386553fd0150562499fbc57d6c1fe7188d4e9e79b593` |
| sidebar-filter plus detail-route oracle | `5d3e23908bd99a9bfce20ad6975546308a602a2c89a0c985727e5f4b4c038ce7` |
| toolbar-filter plus detail-dialog oracle | `71c194e065095eeea1355e3c6bb2205f13d64faa47d34dd8d49e10aebe7b31f4` |

## Result

Both distinct structures score 100/100 at 1440, 390, 320 and the 200%-reflow equivalent. The evaluator discovers a visible fictional record, searches by its rendered identity, applies two implementation-discovered filters, requires both active values to remain visible, checks the contextual result count, and verifies that Clear filters resets only the filters while preserving the query. It then distinguishes a recoverable zero-result state from an error, opens a matching record by keyboard, and exercises an arm-neutral error/retry state.

The contextual honesty scan rejects government affiliation, real-person, official completeness, current/live data and authoritative archive claims while permitting explicit fictional and non-affiliation language.

## Mutants

Each mutation is applied to both structures: hidden active-filter summary, broken Clear filters behavior, and hidden zero-results recovery. All six cells fail the intended atomic assertion without crashing or repairing the candidate.

## Boundary

This is provider-zero calibration only. No model/provider/Cursor/network call contributed. Five task families remain uncalibrated; one-shot and comparative claims stay blocked.

## Reproduction

```bash
npm test -- --run test/unit/bench/ui-resolve-autopilot-greenfield-task-evaluator.test.mjs
RUN_UI_RESOLVE_BROWSER_E2E=1 npm test -- --run test/unit/bench/ui-resolve-autopilot-greenfield-search-e2e.test.mjs
```
