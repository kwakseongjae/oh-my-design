# 長榮航空 (EVA Air) provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the evaair migration. Canonical source remains `web/references/evaair/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | evaair |
| name | 長榮航空 |
| country | TW |
| category | consumer-tech |
| homepage | https://www.evaair.com/ |
| primary_color | `#4b7d6b` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=evaair.com&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

The favicon slug is a third-party favicon-service URL, not an EVA-published brand asset file. It is kept here only and is not carried into the portable body as a first-party asset.

Token note from source: "Tokens are only selector-backed values from three supplied public EVA Air surfaces. Corporate policy, history, font declarations, and external font licensing remain separate evidence domains."

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.schema | 2 |
| verification_v2.checked | 2026-07-14 |
| surfaces inspected | 2026-07-13 |
| product-surface sources captured | 2026-07-13 |
| official-doc / brand-asset / license sources captured | 2026-07-14 |
| tokens.extracted | 2026-07-13 |

Conflicts unresolved: none (source `conflicts: []`).

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | public-airline-home | https://www.evaair.com/ko-kr/index.html | 2026-07-13 |
| about | public-corporate-about | https://www.evaair.com/ko-kr/about-eva-air/about-us/ | 2026-07-13 |
| awards | public-corporate-awards | https://www.evaair.com/ko-kr/about-eva-air/about-us/awards-and-honors/ | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.evaair.com/ko-kr/index.html | 2026-07-13 |
| about-live | product-surface | https://www.evaair.com/ko-kr/about-eva-air/about-us/ | 2026-07-13 |
| awards-live | product-surface | https://www.evaair.com/ko-kr/about-eva-air/about-us/awards-and-honors/ | 2026-07-13 |
| eva-values | official-doc | https://www.evaair.com/en-global/about-eva-air/about-us/eva-values/ | 2026-07-14 |
| eva-chronicle | official-doc | https://www.evaair.com/en-au/about-eva-air/about-us/company-chronicle/ | 2026-07-14 |
| eva-marketing-policy | official-doc | https://www.evaair.com/en-global/about-eva-air/marketing-and-advertising-policy/ | 2026-07-14 |
| eva-ip | brand-asset | https://www.evaair.com/en-sg/website-disclaimer/intellectual-property-rights/ | 2026-07-14 |
| roboto-license | license | https://github.com/googlefonts/roboto-2/blob/main/LICENSE | 2026-07-14 |

### Tier 1

- https://www.evaair.com/ko-kr/index.html (public airline home)
- https://www.evaair.com/ko-kr/about-eva-air/about-us/ (corporate about-us)
- https://www.evaair.com/ko-kr/about-eva-air/about-us/awards-and-honors/ (awards and honors)

### Tier 2 (no usable record)

- https://getdesign.md/evaair (attempted; no EVA Air record returned in the built-in web opener)
- https://styles.refero.design/?q=EVA%20Air (attempted; no EVA Air record returned in the built-in web opener)

### Narrative and license context (not interface tokens)

- Official values: https://www.evaair.com/en-global/about-eva-air/about-us/eva-values/
- Official company chronicle: https://www.evaair.com/en-au/about-eva-air/about-us/company-chronicle/
- Official marketing and advertising policy: https://www.evaair.com/en-global/about-eva-air/marketing-and-advertising-policy/
- Intellectual-property rights: https://www.evaair.com/en-sg/website-disclaimer/intellectual-property-rights/
- Roboto (Apache-2.0) license: https://github.com/googlefonts/roboto-2/blob/main/LICENSE

The three measured surfaces are Korean-locale (`ko-kr`) pages; the four official documents were captured from `en-global`, `en-au`, and `en-sg` editions. That locale split is the reason the portable body bounds its locale statement rather than claiming a cross-locale copy contract.

## Claim ledger

Claims use the YAML anchors from the source: `home` = home / home-live / supplied-selector-backed-computed-style / 2026-07-13; `about` = about / about-live / same method / 2026-07-13; `awards` = awards / awards-live / same method / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.canvas | home |
| tokens.colors.foreground | home |
| tokens.colors.on-green | about |
| tokens.colors.green-panel | about |
| tokens.colors.accent | awards |
| tokens.colors.hairline | home |
| tokens.typography.body.size / weight / lineHeight / use | home |
| tokens.typography.nav-label.size / weight / lineHeight / use | home |
| tokens.typography.accordion-label.size / weight / lineHeight / use | awards |
| tokens.spacing.xs / sm | home |
| tokens.spacing.md | about |
| tokens.spacing.lg | awards |
| tokens.rounded.square / input | home |
| tokens.rounded.media | about |
| tokens.shadow.travel-card | home |
| tokens.components.booking-field.* | home |
| tokens.components.booking-widget-tab.* | home |
| tokens.components.award-accordion.* | awards |
| tokens.components.green-information-card.* | about |
| tokens.components.footer-list-item.* | home |

## Capture selectors

| Component | Pointer |
|---|---|
| Booking Field | `home::[data-omd-capture="151"]` |
| Booking Widget Tab | `home::[data-omd-capture="145"]` |
| Awards Accordion | `awards::[data-omd-capture="144"]` |
| Green Information Card | `about::div.card-info.card-info--green` |
| Footer List Item | `home::li.footer-listItem` |

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- The only captured interaction records are the booking widget's `selected` and `tab-selected` states. Every other interaction state is unresolved as a visual treatment; that absence is not a `not-applicable` reason, and state coverage is not claimed complete.
- `Dotum` is classified as unresolved (no matching loaded FontFace, no known-system mapping). EVA-hosted `Roboto Mono` is declared-only with zero visible uses; EVA-hosted Roboto is classified as system, and its Apache-2.0 license does not make it an EVA typography token.
- Corporate values, chronicle, marketing policy, and IP terms are narrative and legal context, not token sources.
- Derived range in the portable body (B2/B2a). Five sites carry an adjacent derived qualification and they are the whole derived set: Experience §Scope narrative-synthesis reading (“a brand evolving through operational and service infrastructure as well as passenger-facing hospitality”); Experience §Scope visual-impression reading (“orderly and operational rather than built from broad, saturated marketing fills”); Experience §Audience four stakeholder archetypes; Experience §Principles — the four numbered principles, their UI implications, and the Applied-rules list, which the same qualifier names; and Content & Locales — the service-register reading together with the Do / Don’t pairs that apply it. The `not-applicable` reasons on the Booking Widget Tab and Awards Accordion applicability tables are control-role judgments stated in those rows (C2), not EVA-published statements. Everywhere else the portable body states brand-published facts with their EVA source named, measured values, or boundary rules; no further sentence is offered as EVA doctrine.
- The frontmatter `primary_color` `#4b7d6b` matches the measured green-panel value; it is recorded here as catalog identity metadata and appears in the portable body only as the measured information-panel and selected-tab colour.
