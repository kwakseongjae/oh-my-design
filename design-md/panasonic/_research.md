# Panasonic (パナソニック) — CREATE research ledger

Date: 2026-07-13
Mode: CREATE
Raw visual evidence boundary: `artifacts/reference-evidence/panasonic.json` only. No browser recapture and no MCP source was used.

## Evidence inventory

| Tier / domain | Source | Confidence | Used for | Boundary |
|---|---|---|---|---|
| Tier 1 / product surface | https://holdings.panasonic/global/ | High | Home canvas, foreground, link color, Noto Sans computed use, body, header navigation, and search-toggle geometry | Public Holdings home only; no native-product inference. |
| Tier 1 / product surface | https://holdings.panasonic/global/corporate/about.html | High | Cross-surface font/color occurrence and corporate context | Corporate presentation is not product UI evidence. |
| Tier 1 / product surface | https://holdings.panasonic/global/corporate/technology.html | High | Cross-surface font/color occurrence and technology context | Corporate presentation is not product UI evidence. |
| License | https://github.com/googlefonts/noto-cjk/blob/main/Sans/LICENSE | High | Noto Sans SIL Open Font License boundary | Does not make Noto a proprietary Panasonic font or a universal Panasonic product family. |
| First-party narrative | https://holdings.panasonic/global/corporate/about/history.html | High | 1918 origin, founder, long-term social and quality-of-life purpose | Narrative only; no UI tokens. |
| First-party narrative | https://holdings.panasonic/global/corporate/brand.html | High | Brand history, 1955 first Panasonic use, personality, and customer-connection framing | Narrative only; no computed UI claim. |
| First-party narrative | https://holdings.panasonic/global/corporate/design.html | High | Future Craft design philosophy and design scope | Narrative only; no public component specification. |
| First-party narrative | https://holdings.panasonic/global/corporate/design/philosophy.html | High | Anticipatory, care-oriented design framing | Supports prose-only principles, not visual token values. |
| First-party narrative | https://holdings.panasonic/global/corporate/about/philosophy.html | High | Basic Management Objective, Seven Principles, collective wisdom, customer-first framing | Supports narrative and illustrative voice framing, not literal product microcopy. |
| First-party narrative | https://holdings.panasonic/global/corporate/panasonic-green-impact/mission.html | High | Panasonic GREEN IMPACT formulated in 2022 and environmental direction | Do not map the statement to a color or component semantic. |

## Tier 2 cross-check attempts

| Service | Attempt | Result | Promotion decision |
|---|---|---|---|
| getdesign | https://getdesign.md/panasonic | Direct built-in web retrieval attempt on 2026-07-14 returned an internal retrieval error. | No value imported. |
| refero | https://styles.refero.design/?q=Panasonic | Direct built-in web retrieval attempt on 2026-07-14 returned an internal retrieval error. | No value imported. |

## Reconciliation decisions

- Retain the supplied capture’s distinct Holdings home, about, and technology surfaces instead of treating them as one undocumented product system.
- Promote only selector-backed static components: the `.holdings-header__nav__list__item.l2` navigation row and `.holdings-header__search__tglbtn` button.
- Retain the navigation as `listItem`, not `button`: the evidence establishes an `li` navigation row, while the captured search control itself establishes actual button semantics.
- The packet records `interactionCount: 0`; the search-toggle `states` field therefore says only that the default static baseline was observed. No hover, focus, pressed, disabled, checked, error, or transition value is supplied.
- Treat `Noto Sans` as live public-web use because the packet shows loaded FontFace-backed visible use. Keep `swiper-icons` declared-only and `Noto Sands` unresolved; neither is a text typography token.
- The supplied capture reports no unresolved conflict. Structured `conflicts: []`, the conflict matrix, and the DESIGN.md footer use the repository no-conflict form: `none`.

## Omitted as unknown

- Native Panasonic product UI, authenticated account, purchase, checkout, support, and device-control patterns.
- An official public Panasonic component specification or interaction-state contract.
- A proprietary Panasonic text font, universal primary-action semantics, semantic success/error palette, general radius scale, shadow scale, motion duration, easing, and state values.
- Any Tier 2 token or component claim.
