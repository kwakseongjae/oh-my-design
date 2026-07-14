# Taiwan High Speed Rail (`thsr`) — Research Ledger

Date: 2026-07-13
Mode: CREATE
Raw visual evidence: `artifacts/reference-evidence/thsr.json` only

## Confidence summary

| Area | Confidence | Basis | Boundary |
|---|---|---|---|
| Public-web colors, type, spacing, radii, shadow | High where promoted | Supplied deterministic computed-style packet across three official public URLs | Route-local public web only |
| Noto Sans TC public UI family | High | Computed visible family + `loaded` FontFace status + 308 uses + WOFF2 source records in packet | No THSR ownership, app coverage, or rehosting-right claim |
| Public booking-action token | Medium | Selector-backed static button on home, 2 occurrences, no interaction capture | Default geometry only; no state or transaction-flow generalization |
| Brand identity and color meaning | High | First-party corporate-identity page | Brand/asset context, not product CSS tokens |
| History, values, 4T, Go Extra Mile, current framing | High | First-party annual report and sustainability-mission material | Narrative and principles only |
| Official THSR font asset / license | Absent | No first-party THSR font or license source located in reviewed material | Omit rather than infer from runtime fonts |
| Tier 2 corroboration | Absent | Both required services returned internal errors on direct built-in-web attempts | No values used |

## Source ledger

| Tier | Evidence class / domain | URL | Outcome and permitted use |
|---|---|---|---|
| Tier 1 | Product surface, supplied packet | `https://www.thsrc.com.tw/` | Home computed-style, FontFace, component, and selected-element evidence. |
| Tier 1 | Product surface, supplied packet | `https://www.thsrc.com.tw/ArticleContent/46de4c5f-7c2e-4583-bd4c-0f5d67fbb9b8` | Article public-web computed-style and back-to-top action evidence. |
| Tier 1 | Product surface, supplied packet | `https://www.thsrc.com.tw/ArticleContent/743c51ac-124d-4b1a-a57b-1fd820848032` | Article public-web body/list computed-style evidence. |
| Tier 1 | Brand asset | `https://www.thsrc.com.tw/ArticleContent/605d1cb2-2d98-4d73-9586-7e8363ee44e3` | Corporate mark, flying-flag/T explanation, orange-and-gray meaning, and 4T identity framing. No computed-product token extraction. |
| Tier 1 | Official document | `https://www.thsrc.com.tw/corp/9012aea2-04b9-45f4-b3a4-8bcb6782f735` | Current sustainability mission, five values, Go Extra Mile, service/safety narrative. No UI tokens. |
| Tier 1 | Official document | `https://www.thsrc.com.tw/Corp/e5d9a893-ea05-4ff7-80e6-cc71c46d2fb4/assets/d3d47001-95a2-457e-aeef-22b2e1cb45cd.pdf` | History, 2006 identity update, 2007 operation, service-platform framing, values, attributes, and 4T. No UI tokens. |
| External font context | Official font catalog attempt | `https://fonts.google.com/noto/specimen/Noto+Sans+TC` | Opened through built-in web but returned no parsed lines. Kept only as an attempted external font context; no license claim promoted. |
| Tier 2 | getdesign | `https://getdesign.md/thsr` | Direct built-in-web open returned internal error; no record/value used. |
| Tier 2 | Refero | `https://styles.refero.design/?q=Taiwan%20High%20Speed%20Rail` | Direct built-in-web open returned internal error; no record/value used. |

## Evidence decisions

- **Product / marketing / corporate separation:** supplied product-surface values alone back `tokens`; corporate identity and annual-report facts are prose context, not component or color substitutions.
- **Font separation:** Noto Sans TC is loaded public-web evidence. Arial and Helvetica are system evidence. FontAwesome, kyicon, Open Sans, slick, and weathericons are declared-only. None is silently substituted for another family.
- **Component selection:** the home booking action has selector, surface, and static geometry; it is the sole machine component token. The selected tab and date field remain §4 measurements with their own boundaries.
- **Interaction boundary:** zero interaction records removes unobserved state claims only. It does not remove measured default component dimensions, colors, radius, padding, or font values.
- **Conflict resolution:** the evidence packet reports no unresolved conflict. Tier 2 was unavailable rather than contradictory, so no conflict prose or claim is invented; `verification_v2.conflicts` is an empty list and the footer’s exact resolution is `none`.
