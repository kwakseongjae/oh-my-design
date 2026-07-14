# 全家便利商店 — CREATE research ledger

Date: 2026-07-14
Packet: `artifacts/reference-create/runs/2026-07-13-familymart-tw/packet.md`
Raw UI evidence used: `artifacts/reference-evidence/familymart-tw.json` only. No browser capture was rerun and no MCP was used.

## Confidence summary

| Area | Confidence | Basis | Boundary |
|---|---|---|---|
| Public-route colors, metrics, spacing, radii, and flat depth | High | Supplied 2026-07-13 computed-style bundle; three distinct routes, score 80 | 1440×900 capture only; no mobile or authenticated-flow claim. |
| Current-section navigation row | High | High-confidence `listItem`, named class, surface, selector, and raw dimensions | Static route context only, not an interaction result. |
| Utility button/input default geometry | High | Repeated raw samples on three routes | No dynamic state claim because `interactionCount: 0`. |
| Computed Microsoft JhengHei stack | Low | 652 visible computed uses but bundle marks the family unresolved | No FamilyMart UI-family token and no fallback substitution. |
| Loaded/declared icon fonts | High | Supplied FontFace classification and URLs | Icon-delivery evidence only, not brand typography. |
| History, OMO direction, stakeholder framing | High | FamilyMart Taiwan first-party corporate/franchise pages | Narrative/context only; never token evidence. |
| Tier 2 corroboration | Unavailable | Both mandatory endpoints attempted | No Tier 2 value or broad absence conclusion. |
| Interactions, motion, states, responsive behavior, accessibility audit | Unresolved | Empty interactions array and one desktop viewport | Omitted at the smallest field/group boundary. |

## Source ledger

### Tier 1 — supplied public product-surface evidence

| URL | Domain | Permitted use | Confidence |
|---|---|---|---:|
| `https://www.family.com.tw/Marketing/ko` | Public marketing/information surface | Raw computed values, static component/default geometry, computed-font classification | High |
| `https://www.family.com.tw/Marketing/zh/Convenience` | Public convenience-information surface | Raw computed values and repeated public-shell corroboration | High |
| `https://www.family.com.tw/Marketing/zh/Map` | Public store-service surface | Raw computed values and repeated public-shell corroboration | High |

### First-party narrative and current-evolution sources

| URL | Supported fact | Kept out of tokens because |
|---|---|---|
| `https://www.family.com.tw/web_enterprise/page/information.aspx` | 1988 origin, history periods, 2021–2026 digital transformation, supply-chain/service development | Corporate historical facts are not raw UI measurements. |
| `https://www.family.com.tw/web_enterprise/page/business.aspx` | Customer-needs, OMO, data-driven, convenience-life-platform, and sustainability framing | Corporate positioning does not specify a visual token or component. |
| `https://www.family.com.tw/Web_Franchise/page/advantage.aspx` | “全家就是你家” franchise framing, store/community/service evolution | Franchise narrative does not establish public-route UI behavior. |
| `https://www.family.com.tw/web_enterprise/page/NewsContent_en.aspx?ID=2939` | 2025 fresh-food, beverage, online/offline, and store-network context | News is current business context, not a design-system specification. |

### Font and license boundary

| Evidence | Result | Boundary |
|---|---|---|
| Bundle computed-family/FontFace records | `Microsoft JhengHei` stack is unresolved; Font Awesome Free is loaded; several icon families are declared-only | Neither unresolved system-like use nor icon delivery is promoted as a FamilyMart UI typeface. |
| First-party font/design/license search | No applicable first-party FamilyMart font announcement, distributed type asset, or font-license document reached | This reference omits family and license claims rather than filling them with an external fallback. |

### Tier 2 attempts

| Service | Attempt | Result | Resolution |
|---|---|---|---|
| getdesign | `https://getdesign.md/familymart-tw` | Direct permitted web open returned an internal error | No Tier 2 token/component value used. |
| Refero | `https://styles.refero.design/?q=FamilyMart%20Taiwan` | Direct permitted web open returned an internal error | No Tier 2 token/component value used. |

## Reconciliation decisions

- `#00b347` is the primary color because it is a high-confidence repeated product-surface value and the measured fill of the canonical static navigation-row variant; it is not presented as an unmeasured universal CTA.
- White, ink, navigation gray, utility gray, and card-title teal are each preserved only in their observed public-route roles. Other measured colors remain raw siblings rather than speculative semantic tokens.
- The one promoted component is `current-section-nav-row`: collector type `listItem`, `home` surface, named `main-menu__menu--active` class, 51px height, 0px radius, and explicit computed colors. Its type is within the allowed component set and each scalar field has a `verification_v2` claim.
- Buttons, inputs, links, card text, and static selected-looking classes remain useful documented evidence but are not converted into invented interactive states. The artifact reports zero interactions.
- `verification_v2.conflicts` is the exact standard no-conflict array `[]`; both documentation footers use the exact resolution `none`.
