# リクルート — research ledger

**Date:** 2026-07-13
**Mode:** OmD CREATE packet
**Canonical id:** `recruit`
**Raw UI evidence:** `artifacts/reference-evidence/recruit.json` only

## Evidence policy

No browser capture was rerun and no MCP tool was used. Computed-style, FontFace, component, and interaction facts in the canonical reference come only from the supplied packet. Built-in web search was used solely for first-party company/product history, current mission/evolution, official font/license context, and the two required Tier 2 attempts.

## Tier 1 — supplied public-surface evidence

| Surface | URL | Evidence use | Confidence |
|---|---|---|---|
| Corporate home | https://www.recruit.co.jp/ | repeated foreground/hairline, public typography, disabled carousel control, footer control | high for computed values; medium for disabled-carousel variant |
| Productivity | https://www.recruit.co.jp/sustainability/improve-productivity/ | navigation item, side-menu switch, muted/accent colors, typography | high for selector-backed values |
| About-RSS surface | https://www.recruit.co.jp/about_rss/ | cross-surface repetition for navigation/list typography and colors | high for computed values |

Packet preflight: 3 surfaces, coverage 70, 40 component variants, 3 detected component types, 1 observed static state, and 0 interactions. This clears the supplied CREATE preflight, but limits canonical components to a static list item.

## Font ledger

| Family | Packet classification | Visible use | Token decision | Boundary |
|---|---|---:|---|---|
| Tazugane Gothic | loaded / high | 353 | `typography.family.ui` | computed use + loaded FontFace + Recruit Fontplus source chain; licensing is separate |
| YakuHanJP | loaded / high | 132 | `typography.family.spacing` | computed use + loaded FontFace + CDN source chain; not presented as a Recruit-owned family |
| Graphik Web | loaded / high | 6 | `typography.family.latin-heading` | six observed h2 uses only; no broader display-scale inference |
| Branding-Bold / Medium / Semibold | declared / medium | 0 | omitted | declaration without visible use |
| swiper-icons | declared / medium | 0 | omitted | declaration without visible use |

Monotype’s official Tazugane page describes the family and its licensing choices. This is license/foundry context; it neither changes the computed-use basis nor grants redistribution rights for Recruit-hosted files.

## First-party context ledger

| Source | Evidence class | Facts used | Explicit boundary |
|---|---|---|---|
| https://recruit-holdings.com/en/about/ | official corporate source | 1960 origin, original university job-hunting magazine, “Opportunities for Life” framing | narrative only; not CSS or product-UI evidence |
| https://recruit-holdings.com/en/about/history/ | official corporate source | evolution from advertising media to technology-driven matching platforms | narrative/principles only |
| https://recruit-holdings.com/en/about/business/ | official corporate source | individual users/business clients, matching platforms, business SaaS, productivity support | audience/business context only |
| https://recruit-holdings.com/ja/about/vision-mission-values/ | official corporate source | values: new value, individual passion, social value | voice/principles/stakeholder context only |
| https://www.monotype.com/fonts/tazugane | official foundry source | Tazugane family character, ten weights, licensing choices | license context only; not a Recruit brand-asset claim |

## Tier 2 attempts

| Source | Attempt | Result | Token consequence |
|---|---|---|---|
| https://getdesign.md/recruit | Built-in web open and domain-search attempt | Direct URL was rejected by the search environment’s safe-URL policy; subsequent domain search returned no Recruit-specific record | none promoted |
| https://styles.refero.design/?q=recruit | Built-in web open and domain-search attempt | Direct query was rejected by the search environment’s safe-URL policy; subsequent domain search returned no Recruit-specific record | none promoted |

The attempts are recorded as unavailable, not as evidence that either catalogue has no Recruit entry. They do not create a source conflict because no Tier 2 value was returned.

## Reconciliation decisions

| Field group | Decision | Basis |
|---|---|---|
| Color tokens | Preserve only repeated observed corporate colors and the route-local blue accent | supplied color clusters + raw selector samples |
| Typography families | Preserve three loaded families with use boundaries; omit declared-only faces | supplied FontFace/use/source chain |
| Spacing and radii | Keep measured clusters only; label them as local observed values rather than a universal scale | supplied cluster list + raw navigation samples |
| Components | Promote one high-confidence, semantic, static `listItem` only | selector `surface-2::li`, class `i-nav-lvl1-item`, 16 occurrences, two surfaces |
| States | Retain raw disabled-carousel sample; publish no interactive component state | aggregate interaction count is 0 |
| Narrative | Use Recruit Holdings first-party history, business model, and values separately from corporate visual tokens | source-domain separation |

## Confidence by section

| Section | Confidence | Basis |
|---|---|---|
| §1 Visual theme | high | three captured corporate surfaces + first-party business/history context |
| §2 Color roles | high | repeated computed clusters and raw selector samples |
| §3 Typography | high for live families; medium for licence context | FontFace/source chain; Monotype licensing context |
| §4 Components | high for the single static list item; medium for raw disabled control | semantic selector and cross-surface occurrence; packet state coverage |
| §§5–9 Layout/application | medium to high within desktop corporate scope | spacing/radius clusters; explicit scope limits |
| §§10–13 Philosophy | medium-high | first-party values, history, and business-model sources; no invented user research |
| §§14–15 States/motion | high for absence boundary | zero interactions and no timing/easing evidence |

**Conflict status:** none. Tier 2 supplied no competing Recruit-specific value, and the evidence packet reports no unresolved conflict.
