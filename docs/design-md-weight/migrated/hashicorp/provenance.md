# HashiCorp provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the HashiCorp migration. Canonical source remains `web/references/hashicorp/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | hashicorp |
| name | Hashicorp |
| country | US |
| category | backend-devops |
| homepage | https://www.hashicorp.com |
| primary_color | `#1060ff` |
| logo | `type: simpleicons`, `slug: hashicorp` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |
| ds.name | Helios |
| ds.url | https://helios.hashicorp.design |
| ds.type | system |
| ds.description | HashiCorp's public design system for product foundations, content, components, and patterns. |

Token note from the source, quoted in full:

> Only values observed in the supplied three-route capture are machine tokens; HashiCorp Sans is a loaded display family, while controls and body text use system stacks.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

Conflicts unresolved: none.

## Sibling verification file (E2)

`web/references/hashicorp/.verification.md` exists and was read in full (`find` + read). It is adopted as **evidence grade only**: no value in it was promoted into the portable body that the legacy `DESIGN.md` did not already establish.

- **Pipeline:** `spec/verification-pipeline.md` · Skill: `omd:add-reference` UPDATE · Packet: `artifacts/reverify/runs/2026-07-13-hashicorp/packet.md`
- **Inspected:** 2026-07-13
- **Method (verbatim):** The supplied raw collector artifact is `artifacts/reference-evidence/hashicorp.json`, captured at `2026-07-13T11:18:27.319Z`. It reports three surfaces, 99 coverage, 55 component variants, two observed visual states, and zero interaction events. This UPDATE did not rerun browser capture or use MCP.

Sibling-only observations kept here and **not** written into the portable body:

- Helios row treatment: “Official design-system context only; no values promoted from it without raw capture evidence”
- collector timestamp `2026-07-13T11:18:27.319Z`
- coverage 99; 55 component variants; two observed visual states
- getdesign directory gloss “Infrastructure automation”, “Enterprise-clean, black and white”
- Refero style id `834ce97f-61f2-4b12-bf5c-e9fad2544456` and its 4px-control / 8px-card / active-blue account (the portable body keeps the source footer’s conflict resolution, not Refero’s numbers as tokens)
- raw RGB samples `rgb(16, 96, 255)`, `rgb(250, 250, 250)`, `rgb(59, 61, 69)`, `rgb(13, 14, 18)`, `rgb(239, 239, 241)`, `rgb(97, 104, 117)`, `rgb(123, 66, 188)`, `rgb(242, 76, 83)`, `rgb(12, 12, 14)`, `rgb(43, 137, 255)`
- capture pointers `home::[data-omd-capture="10"]`, `home::[data-omd-capture="9"]`, `home::[data-omd-capture="49"]`, `surface-2::[data-omd-capture="21"]`, `surface-3::[data-omd-capture="18"]`, `surface-2::[data-omd-capture="15"]`
- pricing-tab sibling line-height `24px` (the portable body keeps the source §3 control range 26–27px and the token-set `1.69`)

These sibling-only strings are named as sibling-only. This file does not assert that they are absent from itself.

## Evidence class

| Domain | Surface | What it establishes | What it does not establish |
|---|---|---|---|
| Corporate marketing | `https://www.hashicorp.com/ko` | Shared marketing chrome, CTAs, cards, form, heading typography | Developer-docs chrome; authenticated product UI |
| Commercial marketing | `https://www.hashicorp.com/ko/pricing` | Shared controls, Terraform-labelled CTA, pricing-tab selected/unselected | Other product-color variants |
| Product marketing | `https://www.hashicorp.com/ko/products/boundary` | Boundary-labelled CTA; loaded heading/eyebrow font use | Other product-route colors |
| Official narrative | About, origin story, IBM-family announcement, HashiCorp Sans announcement | 2008 UW meeting, November 2012 start, 2013 co-founder, April 2024 brand chapter, February 2025 IBM close | Current CSS values |
| Published design system (context) | Helios | Official system named in YAML `ds` | Three-route machine tokens |
| Brand-material type | HCP product typography page | HashiCorp Sans headline/title direction; Metro Sans Book for brand-material body | Metro Sans as a loaded family on the captured Korean routes |
| License | Terms of Service; Brand Studio access path | No implied license to proprietary interests | Redistribution or substitution rights |

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing | https://www.hashicorp.com/ko | 2026-07-13 |
| pricing | pricing | https://www.hashicorp.com/ko/pricing | 2026-07-13 |
| boundary | product-marketing | https://www.hashicorp.com/ko/products/boundary | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.hashicorp.com/ko | 2026-07-13 |
| pricing-live | product-surface | https://www.hashicorp.com/ko/pricing | 2026-07-13 |
| boundary-live | product-surface | https://www.hashicorp.com/ko/products/boundary | 2026-07-13 |
| helios | official-doc | https://helios.hashicorp.design/ | 2026-07-13 |
| font-announcement | official-doc | https://www.hashicorp.com/en/blog/introducing-hashicorp-sans | 2026-07-13 |
| typography-guideline | brand-asset | https://www.hashicorp.com/en/brand/hcp-product-typography | 2026-07-13 |
| terms | license | https://www.hashicorp.com/terms-of-service | 2026-07-13 |
| about | official-doc | https://www.hashicorp.com/en/about | 2026-07-13 |

### Tier 1

- https://www.hashicorp.com/ko
- https://www.hashicorp.com/ko/pricing
- https://www.hashicorp.com/ko/products/boundary
- https://helios.hashicorp.design/
- https://www.hashicorp.com/en/blog/introducing-hashicorp-sans
- https://www.hashicorp.com/en/brand/hcp-product-typography
- https://www.hashicorp.com/terms-of-service
- https://www.hashicorp.com/en/about
- https://www.hashicorp.com/en/about/origin-story
- https://www.hashicorp.com/en/blog/hashicorp-officially-joins-the-ibm-family

### Tier 2

- https://getdesign.md/hashicorp — directory metadata only; no token or component rows
- https://styles.refero.design/style/834ce97f-61f2-4b12-bf5c-e9fad2544456 — cross-check; 4px-control and 8px-card claims conflict with the supplied raw capture; Tier 1 values remain canonical

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-live / live-inspect / 2026-07-13; `pricing` = pricing / pricing-live / live-inspect / 2026-07-13; `boundary` = boundary / boundary-live / live-inspect / 2026-07-13.

| claim | surface | portable destination |
|---|---|---|
| tokens.colors.boundary | boundary | DESIGN.md Foundations Semantic color |
| tokens.colors.canvas | home | DESIGN.md Foundations Semantic color |
| tokens.colors.foreground | home | DESIGN.md Foundations Semantic color |
| tokens.colors.foreground-dark | home | DESIGN.md Foundations Semantic color |
| tokens.colors.hairline | home | DESIGN.md Foundations Semantic color |
| tokens.colors.muted | home | DESIGN.md Foundations Semantic color |
| tokens.colors.on-dark | home | DESIGN.md Foundations Semantic color |
| tokens.colors.on-primary | home | DESIGN.md Foundations Semantic color |
| tokens.colors.primary | home | DESIGN.md Foundations Semantic color |
| tokens.colors.primary-border | home | DESIGN.md Foundations Semantic color |
| tokens.colors.primary-bright | pricing | DESIGN.md Foundations Semantic color |
| tokens.colors.surface | home | DESIGN.md Foundations Semantic color |
| tokens.colors.surface-dark | home | DESIGN.md Foundations Semantic color |
| tokens.colors.surface-deep | home | DESIGN.md Foundations Semantic color |
| tokens.colors.surface-muted | home | DESIGN.md Foundations Semantic color |
| tokens.colors.terraform | pricing | DESIGN.md Foundations Semantic color |
| tokens.components.card.bg / fg / radius / type / use | home | DESIGN.md Components Light content card |
| tokens.rounded.card / control / nav / sm / square | home | DESIGN.md Foundations Shape |
| tokens.shadow.control | home | DESIGN.md Foundations Elevation |
| tokens.spacing.base / lg / md / sm / xl / xs / xxl | home | DESIGN.md Foundations Spacing |
| tokens.typography.body.* | home | DESIGN.md Typography Type roles |
| tokens.typography.button.* | home | DESIGN.md Typography Type roles |
| tokens.typography.display-hero.* | home | DESIGN.md Typography Type roles |
| tokens.typography.family.display / ui | home | DESIGN.md Typography Family |
| tokens.typography.heading.* | home | DESIGN.md Typography Type roles |
| tokens.typography.label.* | boundary | DESIGN.md Typography Type roles |

## Capture selectors

| Component | Pointer |
|---|---|
| Shared Primary CTA | `.button__gOWvd.color-primary__rWbwp` on home, pricing, Boundary; sibling `home::[data-omd-capture="10"]` |
| Shared Secondary CTA — medium | `.button__gOWvd.size-medium__HxMcm.color-secondary-white__AseI0`; sibling `home::[data-omd-capture="9"]` |
| Shared Secondary CTA — large | `.button__gOWvd.size-large__MEpK3.color-secondary-high-contrast__3bxg3` |
| Terraform-labelled CTA | `.button__gOWvd.color-terraform__DQMD5` on pricing; sibling `surface-2::[data-omd-capture="21"]` |
| Boundary-labelled CTA | `.button__gOWvd.color-boundary__xJtzy`; sibling `surface-3::[data-omd-capture="18"]` |
| Top navigation trigger | `.style_navItemTrigger__65Jsv` |
| Pricing tabs | `.tab-button__qI9wt` with `aria-selected` true/false; sibling `surface-2::[data-omd-capture="15"]` |
| Dark email field | `.mktoField.mktoEmailField.mktoRequired`; sibling `home::[data-omd-capture="49"]` |
| Light content card | `.card__HomZw` on home |
| Neutral filled badge | `.badge__zns82.type-filled__ZaWsu.color-neutral__6Csf4` on home |

## Conflict matrix

| Field | Tier 1 live | getdesign | refero | Resolution |
|---|---|---|---|---|
| Shared primary CTA | `#1060ff`, 5px, `9px 15px` on 3 routes | No extractable spec | Reports a different blue/4px-control account | Tier 1 retained |
| Secondary CTA | `#fafafa` / `#3b3d45`, 5px, medium and large padding | No extractable spec | Reports 4px controls | Tier 1 retained; raw control radius is 5px |
| Terraform-labelled CTA | `#7b42bc` on pricing only | No extractable spec | Unavailable | Tier 1 retained with route boundary |
| Boundary-labelled CTA | `#f24c53` on Boundary route only | No extractable spec | Unavailable | Tier 1 retained with route boundary |
| Light content card | `#ffffff`, 6px, 1px outline shadow on home | No extractable spec | Reports 8px cards | Tier 1 retained; captured selector `.card__HomZw` at 6px |
| UI font | system-ui computed on 713 visible nodes | No extractable spec | Same broad body/system split | System family retained |
| Display font | loaded HashiCorp Sans alias on 21 heading/eyebrow nodes | No extractable spec | Same broad display role | Display-only family retained |

## Narrative (not interface tokens)

- About: https://www.hashicorp.com/en/about
- Origin story: https://www.hashicorp.com/en/about/origin-story
- HashiCorp Sans announcement: https://www.hashicorp.com/en/blog/introducing-hashicorp-sans
- Brand typography guidance: https://www.hashicorp.com/en/brand/hcp-product-typography
- Terms of Service: https://www.hashicorp.com/terms-of-service
- IBM-family announcement: https://www.hashicorp.com/en/blog/hashicorp-officially-joins-the-ibm-family
- Helios: https://helios.hashicorp.design/

## Omission ledger

Disposition mentions, not re-use. This file names what was omitted; it does not claim those strings are absent from this file.

| Item | Disposition |
|---|---|
| §13 stakeholder groups | Kept at group level in portable Audience. The source invents no named or demographic personas; none are re-hosted here (D2, D2a). |
| §9 Agent Prompt Guide | Deleted as tool-facing restatement. Every value it names (`#1060ff`, `#fafafa`, 5px, 16px/500 system-ui, control shadow, Terraform `#7b42bc`, Boundary `#f24c53`) already has a Foundations or Components slot. |
| Unobserved prior product-color claims | Source footer omits Vault, Waypoint, and Vagrant. Named here as omitted prior claims; not listed as portable Named-gap domains. |
| Sibling Helios treatment sentence | Kept in this sidecar only. |
| Sibling collector timestamp, coverage 99, 55 variants | Kept in this sidecar only. |
| `spec/omd-v0.1.md` example curves | Not present in the source. Nothing to delete. |

## Derived-editorial inventory (B2a, 1:1)

Complete-form close: “derived editorial implementation inference from the verified surfaces; … not HashiCorp-authored or taken from a separately published UI specification, including the published Helios documentation.” HashiCorp publishes Helios, so the toss-form close is not used (rulebook v12 B2a 전제 주석).

| # | DESIGN.md line | Reading |
|---|---:|---|
| 1 | 9 | Treating the three captured routes as this contract's domain, not promoting uncaptured developer-docs or authenticated-product chrome, and treating the separate Helios record as not a substitute for the three-route tokens |
| 2 | 11 | Calling the expression sober and operational, and the type split a division of labor |
| 3 | 19 | Reading the three captured routes as the three primary tasks |
| 4 | 32 | Grouping the Key Characteristics as the distinctive layer |
| 5 | 41 | Treating the four headlines as this contract's principles, and the *UI implication* sentences |
| 6 | 70 | Treating color role names as three-route observation labels rather than Helios baseline roles |
| 7 | 105 | Reading the spacing rhythm as not a universal HashiCorp grid declaration |
| 8 | 117 | Not promoting the captured 8px radius as the card standard |
| 9 | 146 | Treating official type guidance as not establishing Metro Sans on the captured routes, the loaded family as display-not-UI, declared-only DejaVu as not a token, and Brand Studio/terms as withholding redistribution |
| 10 | 151 | Calling the display/UI family split canonical for these three routes |
| 11 | 170 | Keeping the separate Helios record from standing in for the three-route machine tokens |
| 12 | 181 | Closing each state map by control role, and omitting kind+map without interactive-kind evidence |
| 13 | 376 | Omitting kind and a map on the light content card |
| 14 | 388 | Omitting kind and a map on the neutral filled badge |
| 15 | 393 | Reading the restated Layout rhythm and the 8px-not-card-standard decision as capture observations, not a published layout specification |
| 16 | 400 | Reading the captured labels as a short-imperative marketing register |

## Proof notes

- verification_v2 schema 2; conflicts: []
- `tokens.source: live-extract`
- `components_harvested: true`
- `ds.type: system`
- Interaction expansions: 0; one disabled icon-only primary and selected/unselected pricing tabs recorded
- Uncaptured hover/focus/pressed/loading/error/success treatments are omitted. They are not `not-applicable` by absence; applicability follows control meaning. State coverage is not claimed complete.
- Official history, April 2024 brand chapter, February 2025 IBM close, and the HashiCorp Sans announcement are narrative context, not token sources
