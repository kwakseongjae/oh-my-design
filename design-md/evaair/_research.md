# EVA Air (`evaair`) — CREATE research ledger

Research date: 2026-07-14. UI evidence is deliberately limited to the supplied `artifacts/reference-evidence/evaair.json` capture dated 2026-07-13. No browser recapture or MCP was used.

## Confidence summary

| Area | Confidence | Basis | Boundary |
|---|---|---|---|
| Public-web colors, geometry, components | High | Three official supplied surfaces, score 87, selector-backed raw samples | Desktop public pages only |
| Selected booking-tab state | High | Two supplied `tab` interaction records, both selected/tab-selected | Does not imply any other state transition |
| Computed Dotum-first stack | High as computed observation; low as family identity | 1,363 observed uses but no matching loaded FontFace or known-system mapping | Not a typography-family token |
| Roboto system classification | High | Raw source URLs plus collector system classification | Not an EVA-owned face |
| Roboto Mono declaration | Medium | `@font-face` source URLs, zero observed use | Not a usable UI family |
| Company history / service principles | High | Official EVA company chronicle, values, and marketing policy | Narrative context, not UI-token evidence |
| Current operational evolution | High | Official 2025–2026 chronicle and news/values material | Does not infer a redesign or app-system change |
| Tier 2 | Low / unavailable | Both requested directory URLs attempted, both opener errors | No substituted catalog facts |

## Source ledger

| Tier | URL | Kind | Confidence | Used for |
|---|---|---|---|---|
| Tier 1 | https://www.evaair.com/ko-kr/index.html | product-surface | High | Canvas, forms, booking-tab geometry/state, navigation/footer, travel-card shadow |
| Tier 1 | https://www.evaair.com/ko-kr/about-eva-air/about-us/ | product-surface | High | Green card panel, media/card geometry |
| Tier 1 | https://www.evaair.com/ko-kr/about-eva-air/about-us/awards-and-honors/ | product-surface | High | Accordion default geometry and orange label |
| First party | https://www.evaair.com/en-global/about-eva-air/about-us/eva-values/ | official-doc | High | Service, safety, comfort, global-network, sustainability, and accessibility narrative |
| First party | https://www.evaair.com/en-au/about-eva-air/about-us/company-chronicle/ | official-doc | High | Founding, first flight, current service and digital evolution |
| First party | https://www.evaair.com/en-global/about-eva-air/marketing-and-advertising-policy/ | official-doc | High | Accurate, transparent, responsible, inclusive, accessible communication principles |
| First party | https://www.evaair.com/en-sg/website-disclaimer/intellectual-property-rights/ | brand-asset | High | EVA material ownership boundary |
| License | https://github.com/googlefonts/roboto-2/blob/main/LICENSE | license | High | Roboto license boundary only |
| Tier 2 attempt | https://getdesign.md/evaair | catalog attempt | Low | Built-in opener returned an internal error; no record used |
| Tier 2 attempt | https://styles.refero.design/?q=EVA%20Air | catalog attempt | Low | Built-in opener returned an internal error; no record used |

## Reconciliation decisions

- Retain `#4b7d6b` only as the captured green information-panel and selected booking-tab treatment; do not label it an unqualified product success or primary action semantic.
- Retain `#cc4b00` only as the awards accordion label color; do not turn it into a generic CTA fill.
- Preserve form/card geometry from supplied components even without a complete interaction matrix.
- Record only selected/tab-selected interaction states. Omit hover, focus, pressed, disabled, error, expanded accordion, dialog, toast, loading, and responsive claims.
- Keep Dotum unresolved, Roboto system-classified, and Roboto Mono declared-only. Do not choose a fallback family as EVA typography.
- Keep corporate policy, history, IP, and Roboto license material out of `tokens`; their value is narrative and evidence-boundary context.
- Tier 2 yielded no conflict. The repository-standard no-conflict form is used: `conflicts: []`, a `none` conflict section, and `**Conflicts unresolved:** none`.
