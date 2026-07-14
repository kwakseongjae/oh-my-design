# LG유플러스 — research ledger

**Reference:** `lguplus`
**Created:** 2026-07-14
**Raw UI evidence cutoff:** 2026-07-13 supplied bundle only

## Confidence and boundaries

| Area | Confidence | Basis | Boundary |
|---|---|---|---|
| Home primary CTA default geometry | High | Selector-backed computed style and rectangle | No interaction-state value. |
| Subscription information row default geometry | High | Selector-backed `a.list-item_before` computed style and rectangle | Correctly mapped to `listItem`; no interactive state. |
| Public-surface colors | High for named selectors; medium for local supporting roles | Supplied computed styles across Home and subscription detail | No universal semantic palette inferred. |
| Loaded font families | High per observed surface | Computed family, FontFaceSet status, and recorded source URLs agree | Not a single cross-product LG U+ type system. |
| Corporate/service narrative | High | Official About page | Corporate context, not UI-token evidence. |
| Current brand evolution | High | Official Simply. U+ newsroom material | Narrative/voice context, not UI-token evidence. |
| Pretendard license | High | Upstream project license | License boundary only. |
| Tier 2 corroboration | Absent | Both prescribed attempts made | No Tier 2 value imported. |
| Interactive states and motion | Absent | `interactions: []`, `interactionCount: 0` | Default component geometry remains valid. |

## Source ledger

| Domain / tier | URL | Access or capture date | Supports | Confidence |
|---|---|---:|---|---|
| Tier 1 supplied product capture | https://www.lguplus.com/ | 2026-07-13 | Home canvas/ink, Pretendard, primary CTA selector and geometry | High |
| Tier 1 supplied product capture | https://www.lguplus.com/pogg/product/%EC%9C%A0%ED%8A%9C%EB%B8%8C-%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84-%EC%9C%A0%EB%8F%85pick-2?utm_campaign=o25o25udok04pfm&utm_source=uplusapp&utm_medium=main_eventbanner_empty_empty&utm_content=notsetpick2_6&utm_term=notsetnone | 2026-07-13 | Subscription action and information-row geometry; loaded `nskr` | High |
| Tier 1 supplied corporate capture | https://www.lguplus.com/about/ko | 2026-07-13 | Corporate surface font/color evidence only | Medium |
| First-party company context | https://www.lguplus.com/about/ko | 2026-07-14 | 1996 establishment statement; personal, AI, and enterprise service landscape | High |
| First-party brand evolution | https://news.lguplus.com/?p=19596 | 2026-07-14 | Simply. U+ direction: reduce complexity and retain essentials | High |
| First-party brand evolution | https://news.lguplus.com/?p=20541 | 2026-07-14 | Customer-participation context, Simple Lab, simplicity/matching/connection framing | High |
| Font license | https://github.com/orioncactus/pretendard/blob/main/LICENSE | 2026-07-14 | Pretendard SIL Open Font License 1.1 | High |
| Tier 2 attempt | https://getdesign.md/lguplus | 2026-07-14 | Required cross-check attempted; no analysable record reached | No importable result |
| Tier 2 attempt | https://styles.refero.design/?q=lguplus | 2026-07-14 | Required cross-check attempted; no LG U+ style detail reached | No importable result |

## Reconciliation decisions

1. **Promote only selector-backed defaults.** `home-primary-cta` and `subscription-information-row` each retain measured default geometry and each scalar field has exactly one `verification_v2` claim path.
2. **Map the product detail link correctly.** `a.list-item_before` is an observed link/row, so its token type is `listItem`; it is not presented as a button.
3. **Do not erase defaults because interactions are absent.** `interactionCount: 0` removes hover, focus, pressed, disabled, error, and other changed-state claims only.
4. **Keep typography by surface.** Pretendard is loaded on Home, while computed `nskr` is loaded on the subscription detail. Font filenames and the external license clarify those facts but do not create a global LG U+ family.
5. **Keep non-product sources separate.** Corporate About and Simply. U+ pages supply useful company/current-evolution context; they do not populate product UI tokens. Tier 2 supplied no value and no generic substitute was used.
6. **No unresolved conflict was reported by the evidence packet.** The graph uses `conflicts: []` and the canonical conflict summary is exactly `none`.
