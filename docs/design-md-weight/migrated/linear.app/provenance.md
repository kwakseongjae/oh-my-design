# Linear provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/linear.app/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | linear.app |
| name | Linear |
| country | US |
| category | productivity |
| homepage | https://linear.app |
| primary_color | `#5e6ad2` |
| logo | simpleicons slug `linear` |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-12 |

Catalog logo metadata is Simple Icons identity, not a captured first-party mark. It was not promoted into Typography & Assets as a Linear mark file.

Official DS pointer from source: Linear Brand at `https://linear.app/brand` (type: brand). Description: Linear's official identity and asset-use guidance; public marketing/product-preview measurements remain a separate evidence domain.

Token note from source: Fresh four-route capture with 65 component variants and six safe menu expansions. Marketing, embedded product preview, Method, customer, pricing, and brand evidence remain separate.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-12 |
| verification_v2.checked | 2026-07-12 |
| surfaces inspected | 2026-07-12 |
| sources captured | 2026-07-12 |
| tokens.extracted | 2026-07-12 |

Conflicts unresolved: none.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing-product | https://linear.app/ | 2026-07-12 |
| method | official-method | https://linear.app/method | 2026-07-12 |
| customers | marketing-customer | https://linear.app/customers | 2026-07-12 |
| pricing | product-pricing | https://linear.app/pricing | 2026-07-12 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://linear.app/ | 2026-07-12 |
| method-live | product-surface | https://linear.app/method | 2026-07-12 |
| customers-live | product-surface | https://linear.app/customers | 2026-07-12 |
| pricing-live | product-surface | https://linear.app/pricing | 2026-07-12 |
| brand-official | official-doc | https://linear.app/brand | 2026-07-12 |

### Tier 1

- https://linear.app/
- https://linear.app/method
- https://linear.app/customers
- https://linear.app/pricing
- https://linear.app/brand

### Tier 2

- getdesign.md/linear supplied a directory snippet
- Refero was used only to discover historical lime/indigo and radius conflicts; those historical values were not promoted as current tokens

### Narrative / identity (not interface tokens)

- Method: https://linear.app/method
- Brand: https://linear.app/brand
- Customers: https://linear.app/customers

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-live / live-inspect / 2026-07-12; `method` = method / method-live / live-inspect / 2026-07-12; `customers` = customers / customers-live / live-inspect / 2026-07-12.

| claim | surface |
|---|---|
| tokens.colors.primary | home |
| tokens.colors.canvas | home |
| tokens.colors.foreground | home |
| tokens.colors.secondary | home |
| tokens.colors.muted | home |
| tokens.colors.quiet | home |
| tokens.colors.primary-action | home |
| tokens.colors.on-primary-action | home |
| tokens.colors.hairline | home |
| tokens.typography.family.ui | home |
| tokens.typography.family.mono | home |
| tokens.typography.display.* | home |
| tokens.typography.heading.* | home |
| tokens.typography.body.* | method |
| tokens.typography.navigation.* | home |
| tokens.typography.mono.* | home |
| tokens.spacing.xs / sm / md / lg / xl | home |
| tokens.rounded.product-control / card / full | home |
| tokens.shadow.primary-action | home |
| tokens.components.primary-action.* | home |
| tokens.components.secondary-action.* | home |
| tokens.components.nav-trigger.* | home |
| tokens.components.product-menu-item.* | home |
| tokens.components.customer-card.* | customers |

`tokens.colors.primary` `#5e6ad2` is identity indigo, not the public CTA fill. `tokens.colors.primary-action` `#e5e5e6` with `on-primary-action` `#08090a` is the get-started control field. `tokens.components.primary-action.fg` stays the control’s renderable content color and is not collapsed into canvas. Hairline `#1c1d1e` is 8% white on `#08090a`. Secondary action fill is 5% white / `rgba(255,255,255,0.05)`.

YAML typography `lineHeight` values are the unitless ratios 1, 1.33, 1.6, 1.5, and 1.71. Those ratios remain in portable Type roles. The legacy body table’s computed 48px / 31.92px / 24px / 19.5px / 24px observations are size-local and are not the same values as the ratios. 14 × 1.71 = 23.94, so the technical-preview 24px is a rounding, not the token.

Homepage `https://linear.app/` and the four public route URLs (`https://linear.app/`, `https://linear.app/method`, `https://linear.app/customers`, `https://linear.app/pricing`) plus the brand URL (`https://linear.app/brand`) are dual-destination: they remain in portable Experience Scope and in this identity/surfaces/sources/Tier 1 ledger.

## Capture selectors

The source DESIGN.md does not record `data-omd-capture` pointers or class selectors. None are invented here.

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- 65 component variants harvested; five named machine components are declared. The rest stay omitted unless current evidence establishes their exact role.
- Six safe menu expansions established open/selected behavior for public nav and the embedded preview.
- Uncaptured loading/empty/error/success/disabled-workflow/command-palette treatments are omitted. Capture absence is not a `not-applicable` reason. Loading, error, and success on the navigation trigger and embedded product menu row are `not-applicable` by those roles’ meaning. State coverage is not claimed complete.
- Generic `focus` on the navigation trigger is an additional observed state. It is not a `focus-visible` treatment. The source never records `focus-visible`.
- Customer story card has no interactive-kind evidence; kind and a state-applicability map were omitted rather than invented.
- YAML `family.ui` is `Inter`; live computed use is Inter Variable. Those are not collapsed. Tiempos Headline remains a one-heading observation. SF Pro remains declared-only.
- Source §13 is public task context only. Independently verified tasks: plan work and review progress; create, prioritize, or discuss issues; evaluate workflow, pricing, or migration fit. Project-specific names, team sizes, roles, metrics, and company stages stay unspecified. No fictional demographic set is recorded here and none was moved to a persona sidecar.
- Official Method and brand pages are philosophy/identity context, not a substitute for the four-route interface measurements.
