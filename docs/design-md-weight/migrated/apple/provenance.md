# Apple provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/apple/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | apple |
| name | Apple |
| country | US |
| category | consumer-tech |
| homepage | https://www.apple.com |
| primary_color | `#000000` |
| logo | simpleicons slug `apple` |
| omd format (source) | 0.1 |
| ds.name | Human Interface Guidelines |
| ds.url | https://developer.apple.com/design/human-interface-guidelines |
| ds.type | system |
| ds.og_image | https://docs.developer.apple.com/tutorials/developer-og.jpg |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-11 |

Catalog logo metadata is Simple Icons identity, not a captured first-party mark. It was not promoted into Typography & Assets.

YAML `ds.name` is Human Interface Guidelines (`https://developer.apple.com/design/human-interface-guidelines`). YAML `ds.type` is `system`. The source separately labels apple.com and HIG documentation-site UI. Catalog `og_image` `https://docs.developer.apple.com/tutorials/developer-og.jpg` is identity metadata, not an interface token. YAML `ds.description`: Apple's official platform design guidance; this reference separately labels apple.com and HIG documentation-site UI.

Token note from source: apple.com marketing/commerce values are distinct from HIG guidance and the HIG documentation site's own chrome.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-11 |
| verification_v2.checked | 2026-07-11 |
| surfaces inspected | 2026-07-11 |
| sources captured | 2026-07-11 |
| tokens.extracted | 2026-07-11 |

Conflicts unresolved: none.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| apple-home | marketing | https://www.apple.com/ | 2026-07-11 |
| apple-store-product | commerce | https://www.apple.com/shop/product/mw5g3am/a/siri-remote | 2026-07-11 |
| hig-buttons | design-system | https://developer.apple.com/design/human-interface-guidelines/buttons | 2026-07-11 |
| hig-components | design-system | https://developer.apple.com/design/human-interface-guidelines/components | 2026-07-11 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| apple-live | product-surface | https://www.apple.com/ | 2026-07-11 |
| apple-store-live | product-surface | https://www.apple.com/shop/product/mw5g3am/a/siri-remote | 2026-07-11 |
| hig-buttons-live | official-doc | https://developer.apple.com/design/human-interface-guidelines/buttons | 2026-07-11 |
| hig-components-live | official-doc | https://developer.apple.com/design/human-interface-guidelines/components | 2026-07-11 |

### Tier 1

- https://www.apple.com/
- https://www.apple.com/shop/product/mw5g3am/a/siri-remote
- https://developer.apple.com/design/human-interface-guidelines/buttons
- https://developer.apple.com/design/human-interface-guidelines/components

### Tier 2 (historical cross-checks only)

- https://styles.refero.design/style/a4f123f2
- https://styles.refero.design/style/c9cabb96
- https://getdesign.md/apple did not provide an importable current record in this run

### Narrative (not interface tokens)

- Human Interface Guidelines: https://developer.apple.com/design/human-interface-guidelines
- Liquid Glass and current HIG principles are first-party platform narrative in the source body. They explain native-platform material language. They do not by themselves supply apple.com computed tokens.

## Claim ledger

Claims use YAML anchors from the source: `apple_live` = apple-home / apple-live / computed-style / 2026-07-11; `store_live` = apple-store-product / apple-store-live / computed-style / 2026-07-11; `hig_live` = hig-components / hig-components-live / computed-style / 2026-07-11.

| claim | surface |
|---|---|
| tokens.colors.primary | apple-home |
| tokens.colors.brand | apple-home |
| tokens.colors.canvas | apple-home |
| tokens.colors.canvas-dark | apple-home |
| tokens.colors.surface | apple-home |
| tokens.colors.foreground | apple-home |
| tokens.colors.on-primary | apple-home |
| tokens.colors.muted | hig-components |
| tokens.colors.secondary | hig-components |
| tokens.colors.link | apple-home |
| tokens.colors.link-on-dark | apple-home |
| tokens.typography.family.display | apple-home |
| tokens.typography.family.text | apple-home |
| tokens.typography.display-hero.size / weight / lineHeight / tracking | apple-home |
| tokens.typography.section.size / weight / lineHeight | apple-home |
| tokens.typography.tile-heading.size / weight / lineHeight / tracking | apple-home |
| tokens.typography.body.size / weight / lineHeight / tracking | apple-home |
| tokens.typography.body-small.size / weight / lineHeight / tracking | apple-home |
| tokens.typography.caption.size / weight / lineHeight / tracking | apple-home |
| tokens.spacing.compact / control-inline / pill-block / pill-inline / content | apple-home |
| tokens.rounded.control | apple-home |
| tokens.rounded.docs-card | hig-components |
| tokens.rounded.marketing-pill | apple-home |
| tokens.components.marketing-primary.* | apple-home |
| tokens.components.marketing-outline.* | apple-home |
| tokens.components.marketing-compact.* | apple-home |
| tokens.components.product-gallery-tab.* | apple-store-product |
| tokens.components.hig-reference-card.* | hig-components |

`tokens.colors.muted` `#6e6e73` and `tokens.colors.secondary` `#515154` remain HIG documentation neutrals. They are not apple.com marketing neutrals.

YAML `tokens.components.marketing-outline.bg` is `transparent` and remains the outline CTA field in portable Components. It is not collapsed into Surface or Fog Canvas.

YAML `tokens.components.product-gallery-tab.fg` `#1d1d1f` is the gallery-tab field and the source’s selected commerce state. Unselected treatment is not named.

## Capture selectors

The source DESIGN.md does not record CSS selectors or `data-omd-capture` pointers. None are invented here.

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- Interaction: marketing buttons default geometry only; hover/pressed/disabled not retained. Product gallery tab records selected and unselected thumbnails. HIG reference card records default documentation state only.
- Capture absence is not a `not-applicable` reason. Loading, error, and success on the three marketing CTAs, the product gallery tab, and the HIG reference card are `not-applicable` by those roles’ meaning (navigation CTA, image selection, documentation-index navigation). State coverage is not claimed complete.
- The source never records `focus-visible`. Applicability stays; no focus color is promoted as `focus-visible` treatment.
- Official HIG design contexts in source §13 are not demographic personas and were not copied here as fictional biographies. Independently verified tasks only: scan apple.com marketing CTAs; choose a Store product image; open a HIG index topic.
- Liquid Glass, SF Compact/watchOS, SF Mono/Xcode, and New York are narrative or family-role context. They are not apple.com computed component tokens.
