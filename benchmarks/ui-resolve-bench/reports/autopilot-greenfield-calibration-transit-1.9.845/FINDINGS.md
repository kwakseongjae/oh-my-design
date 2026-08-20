# Autopilot greenfield calibration — fictional transit stop report

Date: 2026-08-10

Promotion status: **BLOCKED** — evaluator calibration is not skill or model performance evidence.

## Frozen authority

| Artifact | SHA-256 |
| --- | --- |
| hidden task set | `f733682d6461c5911ea5c68ec1c483d2fd03c19e299e44a95c72ae2750480389` |
| observable adapter set | `485ce95796f74b2cd08b88f4d0d4bab16dfc2001a22f346577485f561baf756f` |
| calibrated evaluator | `d6dc37b5d59e9b7ae7a5386553fd0150562499fbc57d6c1fe7188d4e9e79b593` |
| mobile stepper oracle | `75c0e99ad19c61293f78ab5595407bcdb0e3ed54040283f06d380b555f70e0ef` |
| single-page review oracle | `dfba522a95257726260f5ec66678258188229f2a8d8572d267601215e2e2ab74` |

## Result

Both distinct structures score 100/100 at 1440, 390, 320 and the 200%-reflow equivalent. The evaluator blocks an empty issue selection with associated focus, discovers and selects either radios or a native select, carries optional detail into a separately reached review state, and allows submission only from that state. The final live status must disclose a fictional/local-only outcome rather than a real authority submission.

The mobile contract measures only task controls and their explicit option labels, not native radio glyphs or prose links. Location sharing remains unselected by default, while affirmative precise-location and real-submission claims fail the contextual honesty gate.

## Mutants

Each mutation is applied to both structures: task target below 44 CSS pixels, skipped review state, and an assumed precise location. All six cells fail the intended atomic assertion without crashing or repairing the candidate.

## Boundary

This is provider-zero calibration only. No model/provider/Cursor/network call contributed. Three task families remain uncalibrated; one-shot and comparative claims stay blocked.

## Reproduction

```bash
npm test -- --run test/unit/bench/ui-resolve-autopilot-greenfield-task-evaluator.test.mjs
RUN_UI_RESOLVE_BROWSER_E2E=1 npm test -- --run test/unit/bench/ui-resolve-autopilot-greenfield-transit-e2e.test.mjs
```
