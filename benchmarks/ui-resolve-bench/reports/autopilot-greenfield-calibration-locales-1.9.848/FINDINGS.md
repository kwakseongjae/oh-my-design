# Autopilot greenfield calibration — five-locale visit preparation

Date: 2026-08-10

Promotion status: **BLOCKED** — evaluator calibration is not skill or model performance evidence.

## Frozen authority

| Artifact | SHA-256 |
| --- | --- |
| hidden task set | `f733682d6461c5911ea5c68ec1c483d2fd03c19e299e44a95c72ae2750480389` |
| observable adapter set | `485ce95796f74b2cd08b88f4d0d4bab16dfc2001a22f346577485f561baf756f` |
| calibrated evaluator | `d6dc37b5d59e9b7ae7a5386553fd0150562499fbc57d6c1fe7188d4e9e79b593` |
| native locale-select oracle | `9e57cf67971dcec21722f54e8c5c7ae3ff4ccb4155892cf74e582d4000907131` |
| language-button oracle | `2c526631330a3111af7ef92277c1e90c7b2d3d918217189725fcd4646b90818e` |

## Result

Both distinct structures score 100/100 at 1440, 390, 320 and the 200%-reflow equivalent. The evaluator switches Korean, English, Japanese, Simplified Chinese, and Traditional Chinese through either a native select or language buttons. For each locale it binds the visible selection, exact `html lang`, and expected writing system without requiring one DOM or exact sentence.

A checked item and textual 1-of-2 progress survive locale changes; completion at 2-of-2 survives a Korean round trip. CJK headings and controls remain unclipped. An unavailable-translation action announces the limitation without changing the current locale or progress. Medical advice, diagnosis, and real-clinic-policy claims remain absent.

## Mutants

Each mutation is applied to both structures: locale label/`html lang` mismatch, CJK overflow, and progress reset on locale switch. All six cells fail the intended atomic assertion without crashing or repairing the candidate.

## Boundary

This completes provider-zero calibration for all 12 hidden task families. It still does not measure autonomous model or skill performance. Luna/high smoke, same-prompt competitor qualification, transfer, and blind review remain required before any public one-shot or best-skill claim.

## Reproduction

```bash
npm test -- --run test/unit/bench/ui-resolve-autopilot-greenfield-task-evaluator.test.mjs
RUN_UI_RESOLVE_BROWSER_E2E=1 npm test -- --run test/unit/bench/ui-resolve-autopilot-greenfield-locale-e2e.test.mjs
```
