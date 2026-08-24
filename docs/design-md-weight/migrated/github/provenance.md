# GitHub provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/github/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | github |
| name | GitHub |
| country | US |
| category | developer-tools |
| homepage | https://github.com |
| primary_color | `#0969da` |
| logo | type `simpleicons`, slug `github` |
| omd format (source) | 0.1 |
| tokens.source | design-system |
| tokens.extracted | 2026-06-08 |
| components_harvested | true |

Token note from source: grounded in Primer (primer.style public DS) functional + base tokens, cross-checked against live github.com computed styles (dark-default canvas `#0d1117`, green primary `#1f883d`, 6px radius, 32px control height). `primary` = `fgColor-accent` `#0969da`.

Catalog logo type `simpleicons` / slug `github` is dual: this identity ledger + portable Typography & Assets boundary sentence (`Catalog logo metadata is Simple Icons identity (github)`, not a captured first-party mark) (E2a). Homepage `https://github.com` is dual-destination: Experience Scope + this identity/surfaces ledger (E2a). Catalog `primary_color` `#0969da` is dual identity metadata + portable Foundations GitHub Blue / Accent fg (E2a).

No `ds.name` / `ds.url` / `ds.type` / `ds.description` fields exist on the source. None are invented here.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-06 |
| added | 2026-06-06 |
| tokens.extracted | 2026-06-08 |
| Live homepage voice WebFetch | 2026-06-06 |

Conflicts unresolved: none as a product-vs-marketing clash. Product UI (system stack, Primer tokens) and marketing web (Mona Sans / Hubot Sans) are documented as parallel surfaces. Preserved value pairs inside the product surface: YAML UI stack vs §3 UI stack with emoji faces; YAML Default Button `0 16px` / 600 vs live github.com `5px 16px` / 500; YAML Counter Label `12px / 400` vs §4 body `12px / 500` tabular; YAML Label radius `9999px` vs body `2em`; YAML Label `Border: 1px solid #ddf4ff` / `Height: 20px` vs body same-hue low-alpha / ~20px; YAML Action List `Padding: 16px` vs body ~16px; YAML Text Input `Height: 32px` vs body ~32px; YAML Overlay shadow `0 3px 6px rgba(140,149,159,0.15)` vs body medium/large; YAML rounded small `3px` vs layout Small `2px`; Toggle Switch on `#1f883d` or `#0969da` in some contexts. Both sides of each pair stay in portable Foundations, Typography, or Components. Neither is chosen.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| github-live | product-surface | https://github.com | 2026-06-06 |
| primer | design-system | primer.style | 2026-06-06 |

Marketing homepage / Enterprise are named as a parallel display-type surface, not the primary spec target. They are not given invented routes here.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| github-live | product-surface | https://github.com | 2026-06-06 |
| primer | design-system | primer.style | 2026-06-06 |

### Tier 1

- primer.style (Primer Design System — base scales, functional tokens, Button/TextInput/Label specs)
- https://github.com (live product UI — light/dark theming, green-primary buttons, blue links)
- https://github.com (live production site)

### Tier 2

None named in the source.

### Narrative (not interface tokens)

Widely documented public facts recorded in the source HTML comment: GitHub founded 2008 around Git (2005, Torvalds); acquired by Microsoft 2018 ($7.5B); 100M+ developers; Octocat mascot by Simon Oxley; Primer is open-source.

Live homepage voice strings observed via WebFetch 2026-06-06: "Change is constant. GitHub keeps you ahead"; "The future of building happens together". Dual-destination for the two strings and the WebFetch `2026-06-06` freshness date: portable Content & Locales + this ledger (E2a). Derived §10 copy-pattern rows are not this observation class.

## Claim ledger

Claims use YAML / Primer / live github.com as named in the source. Token extraction is `design-system` (2026-06-08). `components_harvested: true`.

| claim | surface |
|---|---|
| tokens.colors.primary / primary-dark / accent-subtle / tab-active | primer + github-live |
| tokens.colors.success / success-hover / success-subtle / danger / danger-subtle | primer + github-live |
| tokens.colors.attention / attention-emphasis / attention-subtle / done / done-subtle / sponsors | primer + github-live |
| tokens.colors.canvas / canvas-inset / canvas-dark / canvas-dark-inset / canvas-dark-subtle | primer + github-live |
| tokens.colors.heading / muted / subtle / on-emphasis / text-dark / muted-dark | primer + github-live |
| tokens.colors.border / border-muted / border-dark | primer + github-live |
| tokens.typography.family.ui / mono / marketing | primer + github-live |
| tokens.typography.page-title / h1 / h2 / h3 / body / body-strong / small / code | primer + github-live |
| tokens.spacing.xs … xxxl | primer |
| tokens.rounded.small / medium / large / full | primer |
| tokens.shadow.small / medium / large / xlarge / focus | primer |
| tokens.components.button-* / icon-button / button-sizes | primer + github-live |
| tokens.components.text-input / select / checkbox / radio / toggle-switch | primer + github-live |
| tokens.components.box / label / counter-label / state-label / token / branch-name | primer + github-live |
| tokens.components.avatar / avatar-stack / action-list / action-menu | primer + github-live |
| tokens.components.underline-nav / segmented-control / breadcrumbs / pagination / tree-view | primer + github-live |
| tokens.components.dialog / overlay / tooltip / banner / flash / inline-message | primer + github-live |
| tokens.components.spinner / progress-bar / skeleton / blankslate / timeline | primer + github-live |

## Capture selectors

The source does not record `data-omd-capture` selectors. None are invented here.

## Omitted unattributed curves

Exact cubic-bezier values from source §15, omitted from portable Foundations (names and uses kept):

- `ease-out` `cubic-bezier(0.33, 1, 0.68, 1)`
- `ease-in-out` `cubic-bezier(0.65, 0, 0.35, 1)`
- `ease-in` `cubic-bezier(0.32, 0, 0.67, 0)`

These are unattributed — they match common public easing approximations and are not named as Primer motion tokens in the source HTML comment. Duration tokens, easing names/uses, signature-motion prose, and reduced-motion behavior remain in portable Motion. B3 five-kind per-component computed gate remains on curve / animation-name / transition-property promotion beyond those tables.

## Proof notes

- tokens.source: `design-system`; `components_harvested: true`
- No `ds.type` on source; none invented (A1c)
- Catalog logo Simple Icons slug `github` is dual-destination: this identity ledger + portable Typography & Assets boundary sentence (E2a)
- Homepage `https://github.com` is dual-destination: Experience Scope + this identity/surfaces/Tier 1 ledger (E2a)
- `primary_color` `#0969da` is dual-destination: identity + portable Foundations GitHub Blue (E2a)
- Token note is dual-destination: Experience Scope + this ledger (E2a)
- primer.style is dual-destination: Experience Scope + this surfaces/sources/Tier 1 ledger (E2a)
- Interpretive claims in source (green-as-diff-semantics inheritance; dual-theme as defining tension; restraint-as-brand; voice as “senior engineer writing good documentation”) are editorial readings of the design system, not official GitHub statements. Portable Scope / Principles / Elevation / Layout whitespace / type-character / Voice blocks keep that evidence-class limit adjacent in the body (B2/B2a)
- Source §13 personas are fictional archetypes informed by publicly described developer-platform user segments, not specific individuals. Portable Audience keeps the exclusion boundary only. Names, ages, cities, employers, and biographies are not copied here (D2). Primary tasks come from Primer/github.com Create-Commit-Merge, diff/issue review, and Code/Issues/PR/Actions navigation, not §13
- Named `Focus (keyboard)` `0 0 0 3px rgba(9,105,218,0.3)` is not `focus-visible` treatment evidence (B1)
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete
- No `[FILL IN]` placeholders exist in the source; none are emitted
