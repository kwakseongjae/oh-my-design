# POYA research ledger — CREATE 2026-07-13

## Confidence summary

| Area | Confidence | Basis | Boundary |
|---|---|---|---|
| Public colors, geometry, and components | High | Supplied 2026-07-13 computed-style packet across three POYA-owned surfaces. | Only the explicit selector-backed values are tokens. |
| Public web font loading | High | Packet matches visible computed families to loaded FontFaces: PT Serif (750 uses) and Noto Sans TC (81 uses). | Not a claim of a POYA-owned typeface or app-wide deployment. |
| Brand history and positioning | High | POYA brand story, corporate timeline, and investor corporate profile. | Narrative facts do not extend UI tokens. |
| Current digital evolution | High | Timeline’s 2023 app integration and 2025 multilingual self-checkout milestones. | These are service-history facts, not app UI evidence. |
| Official POYA design system / brand type asset | Unresolved | No first-party public design-system or font-asset source located in this pass. | Omitted at the smallest field/group boundary. |
| Interactive states | Absent | Packet: `interactionCount: 0`, `observedStates: 0`. | Hover, focus, pressed, disabled, error, menu, dialog, toast, and checkout state values are omitted. |

## First-party source ledger

| Source | Domain | Facts used | Confidence |
|---|---|---|---|
| https://www.poya.com.tw/about/60/ | Product / brand-story | POYA describes itself as a specialty retailer for personal beauty and daily merchandise, says it began in 1985, describes a broad assortment, and frames its experience around convenience, fashion, bright space, and variety. | High |
| https://www.poya.com.tw/about/61/ | Product / company timeline | 1985 first store; 1997 first branch; 1998 adoption of the 寶雅 trademark; 2002 listing; 2021 POYA Pay; 2023 POYA BUY/POYA PAY integration; 2025 multilingual self-checkout and 470 stores. | High |
| https://www.poya.com.tw/en/investor/43/4564523/ | Corporate / official-doc | Corporate profile’s “Beauty, Trendy, and Enrichment” core spirits; store-format optimization, digitalization, loyalty, and customer-preferred positioning. | High |
| https://www.poya.com.tw/ | Product / marketing | Current POYA Original own-brand wording and public site/service navigation context. | Medium for current copy; no computed-style values were added beyond the supplied packet. |

## Font and license ledger

| Source | Evidence class | Finding | Boundary |
|---|---|---|---|
| Supplied evidence packet | live computed / FontFace | PT Serif and Noto Sans TC are loaded with high confidence and visible usage. | Direct public-web use only. |
| https://github.com/googlefonts/noto-cjk/blob/main/Sans/LICENSE | License | Noto CJK Sans is released under SIL Open Font License 1.1. | License is not evidence that POYA distributes the font. |
| https://notofonts.github.io/noto-docs/website/use/ | Font documentation | Noto documentation describes OFL availability and broad multilingual support. | Context only; not added to `verification_v2.sources` because the repository’s license source is the exact license file. |

## Tier 2 attempts

1. **getdesign.md:** `https://getdesign.md/poya` was attempted on 2026-07-14 through built-in web access. It returned no accessible POYA record. No value was imported.
2. **Refero:** `https://styles.refero.design/?q=poya` was attempted on 2026-07-14 through built-in web access. It returned no accessible POYA result. No value was imported.

These are independent directory attempts, not brand-owned evidence and not part of the `verification_v2` source index.

## Evidence decisions

- **Promoted:** pink `.btn` default action and `.searchInput` default geometry, because each is explicit in the packet with a selector, source surface, measured values, and high-confidence component cluster.
- **Retained but not tokenized:** the white circular carousel arrow, because it is a route-local medium-confidence control and does not establish a general component system.
- **Omitted:** declared-only icon fonts, all unobserved interaction state values, unobserved app/checkout components, a global shadow scale, a card system, and a broad mobile/responsive layout rule.
- **Narrative boundary:** company history, store count, digitalization, app integration, and self-checkout are cited as first-party context only. They are never used to fill a color, typography, spacing, or component token.
