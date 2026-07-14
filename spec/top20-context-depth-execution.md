# Top 20 Context Depth and Verified v2 Execution

As of 2026-07-12. The demand source is `data/analytics/raw/upstash.json` captured through 2026-07-10 and normalized in `data/reference-demand.json`.

## Product contract

- The user-facing acceptance surface is Home → Start → `/builder?step=preview&ref=<id>`.
- Unknown means omit the smallest unresolved field or item. Preserve every verified sibling value and all useful sourced explanation.
- Never synthesize generic fonts, components, spacing, radius, shadow, motion, or voice rules.
- Reference depth is part of accuracy. Section 1 explains the product/brand, its distinguishing expression, and current evolution before discussing verification limits.
- Typography records five independent evidence classes: official product-use, live surface-use, official distributed asset, declared-only, and unresolved. Specimen availability is a separate decision.
- A context-depth pass does not promote a reference to Verified v2. Promotion still requires multi-surface capture, claim/source reconciliation, zero unresolved promoted conflicts, deterministic acceptance, and builder QA.

## Demand-ranked scope

| Rank | Reference | Context depth | Verified v2 |
|---:|---|---|---|
| 1 | Toss | pass | yes |
| 2 | Apple | pass | yes |
| 3 | Karrot | pass | yes |
| 4 | Baemin | pass | yes |
| 5 | Kakao | pass | yes |
| 6 | KRDS | pass | yes |
| 7 | NAVER | pass | yes |
| 8 | Yeogiotte | pass | yes |
| 9 | 29CM | pass | yes |
| 10 | LINE | pass | yes |
| 11 | Banksalad | pass | yes |
| 12 | SOCAR | pass | yes |
| 13 | Channel Talk | pass | yes |
| 14 | Wanted | pass | yes |
| 15 | Figma | pass | yes |
| 16 | Linear | pass | yes |
| 17 | Airbnb | pass | yes |
| 18 | KakaoBank | pass | yes |
| 19 | Vercel | pass | yes |
| 20 | ABLY | pass | yes |

The deterministic context report is `artifacts/reverify/context-depth-top20.md`. The remaining migration queue is `artifacts/reverify/queue-top20-remaining.json`.

## Execution queue

### F20-V2 — completed 2026-07-12

Run in demand order, not alphabetical queue order:

1. Banksalad
2. SOCAR
3. Channel Talk
4. Wanted
5. Figma
6. Linear
7. Airbnb
8. KakaoBank
9. Vercel
10. ABLY

All ten completed the following contract:

1. Discover at least one official brand/design source and two inspectable product surfaces.
2. Capture multiple routes and interactions with the MCP-free collector.
3. Reconcile every promoted token/component/font claim against evidence.
4. Keep unsupported groups or individual values absent; retain verified siblings.
5. Run reference quality, AST parity, focused tests, and desktop/mobile builder QA.
6. Mark Verified v2 only after all acceptance gates pass.

### PAGE0 — expose proof without clutter

After F20-V2, add a compact evidence drawer to the builder preview: surface, source, checked date, confidence, and unresolved boundary per claim. Keep the rendered reference primary; proof opens on demand.

### I18N0 — global acquisition wedge

Publish English canonical pages for the highest-demand Korean references first: Baemin, Toss, Kakao, NAVER, and Karrot. Add `hreflang`, localized metadata, and English evidence summaries without translating uncertain claims into certainty.

### VIRAL0 — proof-led sharing

Generate shareable reference cards and before/after DESIGN.md examples that include reference status, checked date, and source count. Measure qualified builder handoff, not raw shares.

### Scheduled reverify

Use the same `omd:add-reference` skill contract with the provider-neutral queue. A Codex subscription worker uses `gpt-5.6-terra` with `high`; deterministic acceptance remains local and model-independent. Scheduling never auto-promotes unresolved evidence.

## Acceptance commands

```bash
npm --prefix web run audit:context-depth
npm --prefix web run quality:references
npm --prefix web run build-reference-ast
npm --prefix web run reference-ast:check
npm --prefix web test
```
