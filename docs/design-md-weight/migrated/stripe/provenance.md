# Stripe provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/stripe/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | stripe |
| name | Stripe |
| country | US |
| category | fintech |
| homepage | https://stripe.com |
| primary_color | `#635bff` |
| logo | type `simpleicons`, slug `stripe` |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |

No `ds.name` / `ds.url` / `ds.type` / `ds.description` fields exist on the source. None are invented here.

Catalog logo is Simple Icons identity (`stripe`). It is identity-only in this ledger; it is not a portable Typography & Assets mark (E2a: not dual-destination). Catalog `primary_color` `#635bff` is identity metadata and a brand-asset boundary in portable Foundations; it is not a Docs fill.

Token note from source: Only selector-backed public Docs values are tokens. Stripe marketing, newsroom assets, Docs chrome, and declared-only font assets are separate evidence domains. Dual destination (E2a): this ledger and portable Experience Scope (`Only selector-backed public Docs values are tokens in this capture` plus the same evidence-domain split).

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

Conflicts unresolved: none.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| docs-home | product | https://docs.stripe.com/ | 2026-07-13 |
| docs-payments | product | https://docs.stripe.com/payments | 2026-07-13 |
| docs-api | product | https://docs.stripe.com/api | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| docs-home-live | product-surface | https://docs.stripe.com/ | 2026-07-13 |
| docs-payments-live | product-surface | https://docs.stripe.com/payments | 2026-07-13 |
| docs-api-live | product-surface | https://docs.stripe.com/api | 2026-07-13 |
| newsroom | brand-asset | https://stripe.com/newsroom/information | 2026-07-13 |
| culture | official-doc | https://stripe.com/jobs/culture | 2026-07-13 |
| soehne-foundry | license | https://klim.co.nz/fonts/soehne/ | 2026-07-13 |
| source-code-license | license | https://github.com/adobe-fonts/source-code-pro/blob/release/LICENSE.md | 2026-07-13 |

### Tier 1

- https://docs.stripe.com/
- https://docs.stripe.com/payments
- https://docs.stripe.com/api
- https://stripe.com/newsroom/information
- https://stripe.com/jobs/culture

The three Docs URLs are dual-destination with portable Experience Scope (E2a). Homepage `https://stripe.com` is identity-only in this ledger.

### Tier 2 (independent; no numeric token promoted)

- https://getdesign.md/stripe (independent analysis; no numeric token promoted)
- https://styles.refero.design/?q=stripe and https://styles.refero.design/style/48e5de76-05d5-4c4e-a269-c7c245b291ec (independent, older marketing-system record)

### Narrative / license (not Docs tokens)

- Newsroom information: https://stripe.com/newsroom/information
- Jobs/culture operating principles: https://stripe.com/jobs/culture
- Söhne foundry/brand context: https://klim.co.nz/fonts/soehne/
- Source Code Pro OFL: https://github.com/adobe-fonts/source-code-pro/blob/release/LICENSE.md

## Claim ledger

Claims use YAML anchors from the source: `docsHome` = docs-home / docs-home-live / live-inspect / 2026-07-13; `docsApi` = docs-api / docs-api-live / live-inspect / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.foreground | docs-home |
| tokens.colors.foreground-strong | docs-api |
| tokens.colors.muted | docs-home |
| tokens.colors.link | docs-home |
| tokens.colors.accent | docs-api |
| tokens.colors.canvas | docs-home |
| tokens.colors.surface-subtle | docs-home |
| tokens.colors.hairline | docs-home |
| tokens.colors.hairline-hover | docs-home |
| tokens.colors.on-dark | docs-api |
| tokens.typography.body.size / weight / lineHeight / use | docs-home |
| tokens.typography.heading.size / weight / lineHeight / use | docs-api |
| tokens.typography.control.size / weight / lineHeight / use | docs-home |
| tokens.spacing.xs / sm / md / lg / xl / xxl | docs-home |
| tokens.rounded.sm / md | docs-home |
| tokens.rounded.lg | docs-api |
| tokens.components.docs-search-prompt.* | docs-home |
| tokens.components.docs-secondary-action.* | docs-home |
| tokens.components.docs-content-tab.* | docs-home |

## Capture selectors

| Component | Pointer |
|---|---|
| Search Prompt | `home::[data-omd-capture="2"]` |
| Secondary Action | `home::[data-omd-capture="4"]` |
| Content Tab | `home::[data-omd-capture="7"]` and `surface-2::[data-omd-capture="46"]` |

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- tokens.source: `reconciled`
- Interaction expansions: 0. Hover/pressed/focus/selected values retained in the artifact are individual static state samples, not interaction expansions
- Catalog logo is Simple Icons identity-only. Not dual-destination with portable Assets (E2a)
- Homepage `https://stripe.com` is identity-only. The three Docs URLs are dual Experience Scope + this surfaces ledger (E2a)
- Catalog `primary_color` `#635bff` is dual identity metadata + portable Foundations brand-asset boundary (not a Docs fill) (E2a)
- Söhne foundry listing is official distributed brand-asset context in portable Font evidence; it is not live Docs family evidence. URL is also in this ledger (E2a)
- Source Code Pro OFL is license context for an unresolved claim; four computed occurrences plus two Menlo occurrences remain unpromoted
- Interpretive visual-character and product-copy-direction sentences in the source are editorial readings. Portable Scope and Content keep that evidence-class limit adjacent in the body (B2/B2a). Numbered operating-principle stems are first-party jobs/culture language. Derived editorial implementation inference covers the *UI implication* notes (including Principle #1’s Docs-specific clause `a Docs interface should make the next implementation decision easier to locate`, moved out of the first-party stem) and the capture-bound application list. Those derived sentences are not Stripe-authored or a separately published UI specification.
- Source §13 names stakeholder groups, not fictional archetypes. Portable Audience keeps those groups. Names, ages, cities, and biographies are not present in the source and are not invented here. They are not copied into this sidecar (D2). Primary tasks come from the three captured Docs surfaces, not from §13
- Generic `Focus` on Search Prompt (no distinct computed value) and Secondary Action (`#f4f7fa` background with `#50617a` text) is not `focus-visible` treatment
- Uncaptured disabled/loading/error/success visual treatments are omitted. They are not `not-applicable` for that reason; applicability follows control meaning. State coverage is not claimed complete
- No `[FILL IN]` placeholders exist in the source; none are emitted
- No unattributed cubic-bezier curves exist in the source; none are deleted. B3 five-kind per-component computed gate remains on any future motion promotion
