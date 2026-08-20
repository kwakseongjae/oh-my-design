# Autopilot greenfield calibration — volunteer import recovery

Date: 2026-08-10

Promotion status: **BLOCKED** — evaluator calibration is not skill or model performance evidence.

## Frozen authority

| Artifact | SHA-256 |
| --- | --- |
| hidden task set | `f733682d6461c5911ea5c68ec1c483d2fd03c19e299e44a95c72ae2750480389` |
| observable adapter set | `485ce95796f74b2cd08b88f4d0d4bab16dfc2001a22f346577485f561baf756f` |
| calibrated evaluator | `d6dc37b5d59e9b7ae7a5386553fd0150562499fbc57d6c1fe7188d4e9e79b593` |
| file-upload table oracle | `f41383c7d813866f69733057a32729cdc2a5a3dbf2c2c906fd0ad8240b465257` |
| local-sample card oracle | `d6c2acda263f0d030cb4ccdf5f9d9f485f29747331a62dea14cbca784f81603d` |

## Result

Both distinct structures score 100/100 at 1440, 390, 320 and the 200%-reflow equivalent. The evaluator loads either a native local CSV or a bundled sample action, discovers two valid and one invalid fictional row, requires an associated row-level alert and keyboard-reachable recovery, and verifies that both valid identities survive exclusion and retry.

Completion must be announced with an unambiguous imported and error count, retain both valid names, and reiterate sample/local-only handling. No real-person, real-upload, or production-persistence claim is accepted.

## Mutants

Each mutation is applied to both structures: unrecoverable row error, retry that loses valid rows, and ambiguous completion count. All six cells fail the intended atomic assertion without crashing or repairing the candidate.

## Boundary

This is provider-zero calibration only. No model/provider/Cursor/network call contributed. The five-locale task remains uncalibrated; one-shot and comparative claims stay blocked.

## Reproduction

```bash
npm test -- --run test/unit/bench/ui-resolve-autopilot-greenfield-task-evaluator.test.mjs
RUN_UI_RESOLVE_BROWSER_E2E=1 npm test -- --run test/unit/bench/ui-resolve-autopilot-greenfield-recovery-e2e.test.mjs
```
