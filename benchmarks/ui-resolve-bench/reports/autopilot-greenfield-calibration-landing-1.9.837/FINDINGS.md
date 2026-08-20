# Autopilot greenfield calibration — neighborhood library landing

Status: **provider-zero calibration PASS for 1 of 12 task families**
Promotion status: **BLOCKED** — this is evaluator calibration, not OmD or model performance evidence.

## Frozen authority

| Artifact | SHA-256 |
| --- | --- |
| hidden task set v0.1 | `f733682d6461c5911ea5c68ec1c483d2fd03c19e299e44a95c72ae2750480389` |
| observable adapter set v0.1 | `485ce95796f74b2cd08b88f4d0d4bab16dfc2001a22f346577485f561baf756f` |
| calibrated evaluator | `d6dc37b5d59e9b7ae7a5386553fd0150562499fbc57d6c1fe7188d4e9e79b593` |
| editorial inline-form oracle | `4cbf5a28ab582b8e39c955beed24792a9173697c7c89bf2afce7b84d0091c762` |
| split-hero dialog oracle | `1547fb992e331ebc0e7e8bb874041eb1da66bfb84d2b6d71edc5935ef9f543c1` |

The two oracle HTML files are byte-distinct and structurally distinct. Oracle A uses progressive disclosure into an inline request form. Oracle B uses a named native dialog. Neither oracle was generated or repaired by a provider during calibration.

## Observable outcome result

Both valid structures scored `100/100` and `ui_resolved=true` across four independent clean journeys:

- 1440 × 900 desktop
- 390 × 844 mobile
- 320 × 720 narrow mobile
- 720 × 450 CSS viewport as the 1440 × 900 at 200% reflow equivalent

Each journey checks a unique role/name-located “Reserve a tool” action, keyboard reachability and visible focus, semantic borrowing stages, the revealed reservation state and focus transfer, initial and post-activation Axe serious/critical results, horizontal clipping, mobile critical-control target size, runtime errors, external requests, and protected unknown claims. No ID, class, exact DOM hierarchy, exact visual token, or pixel-match oracle is required.

## Mutation calibration

The browser E2E applies all three mutants to both valid structures, producing six negative cells:

| Mutant | Expected atomic failure | Oracle A | Oracle B |
| --- | --- | --- | --- |
| primary action removed | journey | killed | killed |
| minimum-width overflow at 390/320 | responsive | killed | killed |
| invented “Trusted by 500 neighbors” testimonial | evidence honesty | killed | killed |

The intact oracles also act as positive controls for numbered stages and honest inventory/price absence language. These remain accepted rather than being misclassified as availability counts, price claims, or social proof.

## Honest boundary

This report proves only that the first task adapter accepts two valid UI structures and rejects its six injected defects. It does not prove that OmD can author either result, that another skill cannot, or that the 2.0 one-shot promise is ready. The remaining 11 task families still require two valid oracles and all target mutants before any provider smoke or cross-skill comparison is admitted.

## Reproduction

```bash
npm test -- --run test/unit/bench/ui-resolve-autopilot-greenfield-task-evaluator.test.mjs
RUN_UI_RESOLVE_BROWSER_E2E=1 npm test -- --run test/unit/bench/ui-resolve-autopilot-greenfield-task-evaluator-e2e.test.mjs
```
