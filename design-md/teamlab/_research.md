# チームラボ — CREATE research ledger

Date: 2026-07-13
Mode: CREATE
Raw UI evidence boundary: `artifacts/reference-evidence/teamlab.json` only

## Confidence summary

| Area | Confidence | Decision |
|---|---|---|
| Public ink, canvas, muted text, catalog surface | High for repeated ink/canvas; medium for catalog surface | Tokenize only `#212121`, `#ffffff`, `#999999`, and selector-backed `#f8f9fa`. |
| Geometry and spacing | High for 0px radius cluster; selector-backed for catalog 40px gap and news 30px inset | Tokenize only the directly represented values; retain the 2px footer corner locally. |
| Static catalog component | Medium, 20 observed instances on the public product catalog | Promote one `card` token with exact selector/surface provenance. |
| Interactive components | High that default geometry exists; no state confidence | Preserve default button geometry in prose only. No interactive machine token or state value. |
| Typography metrics | High | Preserve observed metrics only. |
| Typography family | No brand-family confidence | Helvetica is system-resolved; `ff-din-web` is declared-only with zero visible use. Omit both from machine family tokens. |
| Narrative/history | High | Use first-party About, Careers, and Borderless sources for §§1 and 10–13, without converting them into UI tokens. |

## Source ledger

| Tier | URL | Evidence class | What it supports | Boundary |
|---|---|---|---|---|
| 1 | https://www.team-lab.com/ | product-surface | Public home computed colors, header metrics, news-card geometry | Marketing/work surface; not authenticated product UI. |
| 1 | https://www.team-lab.com/product/?category=all | product-surface | Catalog card, category-control, and footer-action default geometry | Public product catalog only; no interaction states. |
| 1 | https://www.team-lab.com/about/ | product-surface | Corporate public visual siblings | Corporate surface; no separate machine token added. |
| 1 | https://www.team-lab.com/en/about/ | official-doc | 2001 origin, interdisciplinary collective, ultratechnology framing | Narrative context only. |
| 1 | https://www.team-lab.com/en/recruit/tsunen/ | official-doc | Collaboration, specializations, project domains, stakeholder groups | Culture/persona context only. |
| 1 | https://architects.team-lab.com/projects/teamLab_borderless/ | brand-asset | 2024 Borderless reopening and continuous-world framing | Current brand/spatial context only; not web UI evidence. |
| 1 | https://helpx.adobe.com/fonts/using/webfont-licensing.html | license | General Adobe webfont licensing boundary | Does not prove teamLab use or authorize reuse of teamLab Typekit assets. |
| 2 | https://getdesign.md/teamlab | third-party attempt | Attempted direct fetch | Internal error; no value used. |
| 2 | https://getdesign.md/design-md/teamlab | third-party attempt | Attempted direct fetch | Internal error; no value used. |
| 2 | https://styles.refero.design/?q=teamLab | third-party attempt | Attempted search | Internal error; no result card or absence conclusion. |

## Raw-packet interpretation

- Capture time: `2026-07-13T14:58:30.717Z`; collector: `playwright_cli`.
- Preflight: 3 surfaces, coverage score 66, 59 component variants, 3 component types.
- Interaction evidence: 0 kinds, 0 interactions, 0 observed states. This rules out state promotion, not default-geometry documentation.
- Font evidence: `Helvetica` system/high, 666 visible uses; `ff-din-web` declared/medium, 0 visible uses and nine Typekit URLs.
- The static `ProductCard_product-card__IuLhO` at `surface-2::[data-omd-capture="20"]` has the strongest useful selector-backed catalog geometry: `#f8f9fa`, `#212121`, 0px radius, 400px height, 13px/400, and 40px bottom margin.

## Reconciliation notes

- Product, marketing, corporate, culture, architectural-brand, and declared-only font evidence are retained as separate domains.
- No fallback font, inferred component, unmeasured state, motion behavior, mobile breakpoint, or semantic color is elevated to a brand fact.
- The conflict record is exact `none`: no conflicting raw value was supplied, and unavailable Tier 2 endpoints are recorded as failed observations rather than a conflict.
