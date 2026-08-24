# Notion provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/notion/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | notion |
| name | Notion |
| country | US |
| category | productivity |
| homepage | https://www.notion.so |
| primary_color | `#0075de` |
| logo | simpleicons slug `notion` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-13 |

Catalog logo metadata is Simple Icons identity, not a captured first-party mark. It was not promoted into Typography & Assets.

Token note from source: three current public routes. NotionInter is computed on visible text and backed by Notion-hosted FontFace records (906 uses). Interaction states that were captured remain selector-specific. Global CTA pressed/focus raw values stay in the source `.verification.md` artifact; they are not in this contract.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

Conflicts unresolved: none.

Resolution note from source: the prior `#455dd3` primary-CTA claim and unobserved generic controls were removed. Fresh three-route evidence measures `#0075de` on public CTAs and records selector-specific states separately.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing | https://www.notion.com/ko | 2026-07-13 |
| product | public-product-marketing | https://www.notion.com/ko/product | 2026-07-13 |
| help | documentation-chrome | https://www.notion.com/ko/help | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.notion.com/ko | 2026-07-13 |
| product-live | product-surface | https://www.notion.com/ko/product | 2026-07-13 |
| help-live | product-surface | https://www.notion.com/ko/help | 2026-07-13 |
| about | official-doc | https://www.notion.com/about | 2026-07-13 |
| careers | official-doc | https://www.notion.com/careers | 2026-07-13 |
| ai-story | official-doc | https://www.notion.com/blog/behind-the-scenes-notion-ai | 2026-07-13 |
| notioninter-assets | brand-asset | https://www.notion.com/front-static/fonts/NotionInter-Regular.woff2 | 2026-07-13 |

### Tier 1

- https://www.notion.com/ko (Korean marketing)
- https://www.notion.com/ko/product (public product marketing)
- https://www.notion.com/ko/help (Korean Help); supplied deterministic evidence artifact only

### Tier 2 (no usable record as an absence claim)

- https://getdesign.md/notion
- Refero query attempted at `https://styles.refero.design/?q=Notion`; the built-in web fetch returned an internal error and is not treated as an absence claim

### Narrative (not interface tokens)

- About: https://www.notion.com/about
- Careers: https://www.notion.com/careers
- Notion AI story: https://www.notion.com/blog/behind-the-scenes-notion-ai

## Claim ledger

Claims use YAML anchors from the source: `marketing` = home / home-live / live-inspect / 2026-07-13; `docs` = help / help-live / live-inspect / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.primary | marketing |
| tokens.colors.canvas | marketing |
| tokens.colors.ink | marketing |
| tokens.colors.muted | marketing |
| tokens.colors.docs-layer | docs |
| tokens.colors.primary-hover | marketing |
| tokens.typography.family.sans | marketing |
| tokens.typography.hero.size / weight / lineHeight / tracking / use | marketing |
| tokens.typography.heading.size / weight / lineHeight / tracking / use | marketing |
| tokens.typography.body.size / weight / lineHeight / use | marketing |
| tokens.typography.action.size / weight / lineHeight / use | marketing |
| tokens.typography.label.size / weight / lineHeight / use | marketing |
| tokens.spacing.xs / sm / md / lg / xl | marketing |
| tokens.rounded.control / card / pill | marketing |
| tokens.rounded.docs-input | docs |
| tokens.shadow.floating-action | marketing |
| tokens.components.marketing-primary-action.* | marketing |
| tokens.components.help-search.* | docs |

`tokens.colors.docs-layer` is the Help toggle hover `#f9f9f8`, not a general documentation canvas. YAML `help-search.fg` is `#000000` and remains the Language-picker search renderable field in portable Components. The component also records `rgba(0,0,0,0.95)` as focused computed text. Those are different source roles; they are not collapsed into general Ink.

## Capture selectors

| Component | Pointer |
|---|---|
| Global CTA | `home::[data-omd-capture="9"]`, class `button_buttonVariantPrimary__mUFQZ globalNavigation_tryFreeCta__mNYk6`; also observed on the other two captured routes. Hover: `home::[data-omd-capture="9"]::state-hover` |
| Hero CTA | `home::[data-omd-capture="11"]`, class `HeroCTA_cta__hOE_c button_primary__k0`. Pressed: `home::[data-omd-capture="11"]::state-pressed`. Focus: `home::[data-omd-capture="11"]::state-focus` |
| Hero secondary action | `home::[data-omd-capture="12"]`, class `HeroCTA_cta__hOE_c button_secondary__` |
| Compact card | `home::div`, class `cardCompact_cardCompact__W2i4I` |
| Bento feature tab | `home::[data-omd-capture="27"]` / `home::[data-omd-capture="28"]`, role `tab`. Selected: `home::[data-omd-interaction-capture="tab-1-0"]` |
| Circular carousel action | `home::[data-omd-capture="31"]` |
| Language picker trigger | `home::[data-omd-capture="60"]` and equivalent product/Help selectors |
| Language-picker search | `home::[data-omd-interaction-capture="dialog-0-1"]`, class `input_input__PoidJ languagePicker_searchInput__Jrbry` |
| Help toggle | `surface-3::[data-omd-capture="11"]`, class `toggleList_toggleButtonWrapper__79NEe`. Hover: `surface-3::[data-omd-capture="11"]::state-hover` |

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- Uncaptured empty/loading/error/success/skeleton/disabled treatments are omitted. Capture absence is not a `not-applicable` reason. Loading, error, and success on the Bento feature tab, circular carousel arrow, language-menu trigger, and Help toggle are `not-applicable` by those roles' meaning. State coverage is not claimed complete.
- Generic `Focus` / `::state-focus` captures on Hero CTA, Hero secondary, and Language-picker search are additional observed states. They are not `focus-visible` treatments.
- Compact card has no interactive-kind evidence; kind and a state-applicability map were omitted rather than invented.
- Official About, Careers, and Notion AI story pages are narrative context, not token sources.
- Source §13 labeled four product-role archetypes as inferred and not as research participants. They were not promoted to primary-tasks or Audience. Independently verified tasks only: keep notes/docs/project work/knowledge in one workspace; adapt building blocks to a task list, roadmap, or design repository; think and work with teams of people and AI agents. The inferred archetype labels are not recorded here and were not moved to a persona sidecar.
- YAML `tokens.colors.docs-layer` / Help hover layer and Help focus rings stay Help-chrome-only.
- Principle UI implications remain in the portable Experience section with the source’s first-party-value-to-UI limitation.
