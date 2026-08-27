# Dabang provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, selectors, and proof for the T2-1 Wave 18 migration candidate. Canonical source remains `web/references/dabang/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | dabang |
| name | 다방 |
| display_name_kr | Dabang (다방) |
| country | KR |
| category | consumer-tech |
| homepage | https://www.dabangapp.com |
| primary_color | `#ff3478` (catalog identity metadata; not a promoted product-control token) |
| logo | favicon `https://www.dabangapp.com/static/favicon.ico` |
| verified | 2026-07-13 |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

Token note: values are limited to selector-backed home and map observations. FAQ values remain support-documentation chrome.

## Freshness and surfaces

| id | kind | url | inspected |
|---|---|---|---|
| product-home | product-surface | https://www.dabangapp.com/ | 2026-07-13 |
| product-map | product-surface | https://www.dabangapp.com/map/onetwo?m_lat=37.494367328004216&m_lng=127.01446798508894&m_zoom=11 | 2026-07-13 |
| support-faq | support-documentation | https://www.dabangapp.com/service/faq | 2026-07-13 |

verification_v2 schema: 2; checked: 2026-07-13; conflicts: `[]`. Artifact captured `2026-07-13T11:23:45.806Z`; three routes, three component types, 36 variants, three static state labels, zero interaction expansions, coverage 78.

## Sources

| id | kind | url | captured / boundary |
|---|---|---|---|
| home-capture | product-surface | https://www.dabangapp.com/ | 2026-07-13; public home tokens/components |
| map-capture | product-surface | map URL above | 2026-07-13; map-local tokens/components |
| faq-capture | product-surface in YAML; support-documentation boundary | https://www.dabangapp.com/service/faq | 2026-07-13; support chrome only |
| service-context | official-doc | https://www.station3.co.kr/service/ | 2026-07-13; narrative only |
| terms-context | official-doc | https://static.dabangapp.com/html/useragreement.html | 2026-07-13; legal/role context only |
| font-design | brand-asset in YAML; upstream font project | https://github.com/orioncactus/pretendard | 2026-07-13; asset context |
| font-license | license | https://github.com/orioncactus/pretendard/blob/main/LICENSE | 2026-07-13; SIL OFL 1.1 |

Tier 2 attempts: `https://getdesign.md/dabang` and `https://styles.refero.design/?q=dabang`; safe-open failures and name searches returned no usable record.

## Claim ledger

`home` anchor = product-home / home-capture / computed-style / 2026-07-13. `map` anchor = product-map / map-capture / computed-style / 2026-07-13.

| Claim group | Anchor |
|---|---|
| colors canvas, foreground, border, surface-muted | home |
| colors action, map-field-border | map |
| typography family.ui, body.*, section-title.* | home |
| typography map-control.* | map |
| spacing xs/sm/md; rounded compact/standard/search-entry | home |
| rounded map-tool/map-search | map |
| header-account-control.*, header-outline-action.* | home |
| map-location-search.*, map-dock-control.* | map |

## Exact token record

| Group | Values |
|---|---|
| colors | canvas `#ffffff`; foreground `#222222`; border `#dfdfdf`; surface-muted `#f5f5f5`; action `#326cf9`; map-field-border `#ededed` |
| typography | family `Pretendard Variable`; body `14 / 400 / 24px`; section-title `20 / 700 / 32px`; map-control `14 / 400 / 24px` |
| spacing | xs `4`; sm `8`; md `16` |
| rounded | compact `2`; standard `8`; map-tool `6`; search-entry `32`; map-search `42` |

## Component token record and selectors

| Component / primitive | Exact source record |
|---|---|
| header-account-control / button | bg `#ffffff`; fg `#222222`; radius `8px`; padding `8px 16px`; font `16px / 400 Pretendard Variable`; states “default only; no interaction expansion captured”; `home::[data-omd-capture=4]` |
| header-outline-action / button | fg `#222222`; border `1px solid #dfdfdf`; radius `2px`; padding `0px 16px`; font `14px / 700 Pretendard Variable`; default only; `home::[data-omd-capture=5]` |
| map-location-search / input | bg `#ffffff`; fg `#222222`; border `1px solid #ededed`; radius `42px`; padding `7px 37px 7px 15px`; font `14px / 400 Pretendard Variable`; default only; `surface-2::[data-omd-capture=1]` |
| map-dock-control / button | bg `#ffffff`; fg `#000000`; border `1px solid #dfdfdf`; radius `2px`; padding `0px 7px 0px 11px`; font `14px / 400 Pretendard Variable`; default only; `surface-2::[data-omd-capture=14]` |

## Sibling-proof raw samples

Values below are preserved as proof. A sibling-only value absent from the legacy `DESIGN.md` does not become a portable token solely by appearing here.

| Pointer | Raw tuple / boundary |
|---|---|
| `home::[data-omd-capture="4"]` | header account: white / `#222222`; 8px; `8px 16px`; 16px/400/26px |
| `home::[data-omd-capture="5"]` | header outline: transparent / `#222222`; `#dfdfdf`; 2px; `0px 16px`; 14px/700/24px |
| `home::[data-omd-capture="18"]` | home pill: white / `#222222`; `#dfdfdf`; 32px; `0px 11px`; 14px/700/24px |
| `surface-2::[data-omd-capture="1"]` | map search: white / `#222222`; `#ededed`; 42px; `7px 37px 7px 15px`; 14px/400/24px |
| `surface-2::[data-omd-capture="14"]` | dock: white / `#000000`; `#dfdfdf`; 2px; `0px 7px 0px 11px`; 14px/400/24px |
| `surface-2::[data-omd-capture="22"]` | map tool: white / `#326cf9`; 6px 6px 0px 0px; 6px; 12px/700/20px; static pseudo-state copy includes `#eef8ff` but no interaction record |
| `surface-3::[data-omd-capture="10"]` | FAQ row: transparent / `#000000`; block-end `#f5f5f5`; `16px 20px`; 13.3333px/400 |
| `surface-3::h1` | support heading: `#222222`; 46px/700/70px |

## Font proof

- `Pretendard Variable`: 376 visible first-family uses; loaded/high; 92 Dabang-hosted WOFF2 URLs under `static.dabangapp.com/web/fonts/pretendard-variable/v1.3.9/`.
- Upstream Pretendard licence: SIL Open Font License 1.1. The Dabang use claim requires the separate computed-use and hosted-source proof.
- Fallback families are system fallbacks only. No other family has loaded visible first-family use in the bundle.

## State and conflict proof

- `interactionCount: 0`; `interactions: []`.
- Static `::state-hover`, `::state-focus`, and `::state-pressed` selector copies are not interaction provenance. `#eef8ff` remains a static pseudo-state proof tuple only.
- Product family, canvas/foreground, and map action blue have no Tier 2 conflict.
- Catalog pink `#ff3478` remains identity metadata. Full status ramps, marker semantics, a universal 8px layout system, card/shadow system, and interaction/motion matrices from an earlier reference were rolled back by the canonical source.

## Proof notes

- Canonical sibling proof used: `web/references/dabang/.verification.md`.
- No browser capture was rerun and no MCP was used in that verification pass.
- Station3 service and Dabang terms support narrative and stakeholder roles only, never visual tokens.
- The official home context describes one/two-room housing, houses/villas, officetels, and apartments; this is category context, not a visual token.
- The Station3 service page describes a direction beyond residential space toward better ways of living; that phrase remains corporate narrative context only.
- Derived editorial scope in the portable document comprises the source-domain/no-cross-domain rule; primary-task and audience framing; distinctive-trait selection; semantic-role, spacing-attachment, elevation, motion-promotion, font-resolution, asset-authority, component-role/state-applicability, layout/reuse, content-direction, and governance judgments; and the derived principles and avoidances. These are reconstruction-level implementation inferences, not Dabang-authored doctrine or a separately published UI specification, and each scope is paired in the portable body with an adjacent complete authority limitation.
