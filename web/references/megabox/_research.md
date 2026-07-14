# 메가박스 — Research Ledger

**Reference:** `megabox`
**Date:** 2026-07-13
**Scope:** CREATE packet `artifacts/reference-create/runs/2026-07-13-megabox/packet.md`; supplied evidence only for computed styles, fonts, components, and interactions. Built-in web search/open supplied narrative and official font-distribution context only.

## Confidence summary

| Area | Confidence | Basis | Boundary |
|---|---|---|---|
| Public-web colors, type, spacing, radii, shadow | High where claim-linked | Three supplied product-surface records with selector/style provenance | No mobile, authenticated, seat-selection, payment, or responsive extrapolation |
| NanumBarunGothic public UI family | High | 439 computed uses, loaded FontFaceSet status, eight Megabox-hosted source URLs | Public-web scope only |
| Movie list action component | Medium | Actual HTML `button`, selector-backed default geometry on `/movie` | Default only; no interaction-expanded state |
| Corporate history, mission, BI, values | High | Official Megabox company introduction | Narrative context, not UI CSS evidence |
| NanumBarunGothic distribution identity | High | Official Naver font catalogue | Family and listed-weight context, not evidence of Megabox UI use or an asserted licence term |
| Tier 2 catalog corroboration | None usable | Both required direct opens returned Internal Error; domain searches returned no record | No Tier 2 values promoted |

## Source ledger

| Tier | URL | Evidence class / domain | Result and permitted use |
|---|---|---|---|
| Tier 1 | `https://www.megabox.co.kr/` | product-surface | Supplied capture source (`home`); public-home computed values, font loading, static controls only. |
| Tier 1 | `https://www.megabox.co.kr/movie` | product-surface | Supplied capture source (`surface-2`); movie-list button default, purple link, search field, title metrics. |
| Tier 1 | `https://www.megabox.co.kr/booking` | product-surface | Supplied capture source (`surface-3`); public booking-entry typography and shared public-web scope only. |
| Tier 1 | `https://www.megabox.co.kr/megaboxinfo/` | official-doc / corporate-brand | First-party history, 2017 BI, mission, values, Life Theater context. Not a component/token source. |
| Tier 1 | `https://img.megabox.co.kr/static/pc/font/nanum/NanumBarunGothicSubset.woff` | brand-asset | First-party-hosted font file URL from the supplied capture. Asset corroboration only. |
| Tier 1 | `https://www.megabox.co.kr/recruit` | official-doc / culture | Official hiring and stakeholder context: core values, customer orientation, challenge, and communication. Not a CSS or component source. |
| Tier 1 | `https://hangeul.naver.com/fonts/search?f=nanum` | brand-asset / official font catalogue | Lists NanumBarunGothic and its weights. It corroborates family identity only; no specific licence term was promoted. |
| Tier 2 | `https://getdesign.md/megabox` | attempted catalog cross-check | Built-in web open: Internal Error. Built-in domain search: no Megabox-specific record. No values used. |
| Tier 2 | `https://styles.refero.design/?q=megabox` | attempted catalog cross-check | Built-in web open: Internal Error. Built-in domain search: no Megabox-specific record. No values used. |

## Raw evidence boundary

- The only raw computed-style, font, component, and interaction input is `artifacts/reference-evidence/megabox.json` captured `2026-07-13T15:02:11.071Z`.
- It reports 3 surfaces, score 80, 26 component variants, 1 static observed state, `interactionCount: 0`, and `interactions: []`.
- No browser capture, local browser automation, MCP, or replacement evidence source was used.
- Known absent boundaries: hover, focus, pressed, error, dialog, toast, loading, success, skeleton, responsive, authenticated, seat-selection, and completed-payment evidence.
