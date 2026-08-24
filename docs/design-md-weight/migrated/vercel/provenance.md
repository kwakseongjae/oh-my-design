# Vercel provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/vercel/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | vercel |
| name | Vercel |
| country | US |
| category | developer-tools |
| homepage | https://vercel.com |
| primary_color | `#171717` |
| logo | type `simpleicons`, slug `vercel` |
| omd format (source) | 0.1 |
| ds.name | Geist |
| ds.url | https://vercel.com/geist |
| ds.type | system |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-12 |

Catalog logo is Simple Icons identity (`vercel`). It is identity-only in this ledger; it is not a portable Typography & Assets mark (E2a: not dual-destination). Catalog `primary_color` `#171717` is identity metadata and the portable Foundations Primary / Foreground (E2a).

YAML `ds.name` is Geist (`https://vercel.com/geist`). YAML `ds.type` is `system`. YAML `ds.description`: Vercel's official design-system and type-family documentation; marketing, component examples, and authenticated dashboard evidence remain distinct. Dual destination (E2a): that evidence-domain split is also portable Experience Scope.

Token note from source: Fresh public home and official Geist introduction capture. Baseline-only mode avoided unsafe long-running interaction enumeration; current defaults are combined with explicit state absence rather than inferred hover values. Dual destination (E2a): this ledger and portable Experience Scope.

`tokens.source: reconciled` and `components_harvested: true` are metadata (A1c).

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-12 (omd:migrate) |
| verification_v2.checked | 2026-07-12 |
| surfaces inspected | 2026-07-12 |
| sources captured | 2026-07-12 |
| tokens.extracted | 2026-07-12 |

Footer metadata from the source: `Verified: 2026-07-12 (omd:migrate)`. The `(omd:migrate)` mark is preserved here (A1c).

Conflicts unresolved: none.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | public-product | https://vercel.com/ | 2026-07-12 |
| geist | official-design-system | https://vercel.com/geist/introduction | 2026-07-12 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://vercel.com/ | 2026-07-12 |
| geist-live | official-doc | https://vercel.com/geist/introduction | 2026-07-12 |
| geist-font | license | https://vercel.com/font | 2026-07-12 |

### Tier 1

- https://vercel.com/
- https://vercel.com/geist/introduction
- https://vercel.com/font

The public home and Geist introduction URLs are dual-destination with portable Experience Scope (E2a). `https://vercel.com/geist` is dual-destination with portable Experience Scope as the named Geist documentation URL (E2a). `https://vercel.com/font` is dual-destination with portable Typography & Assets as the official OFL distribution URL (E2a). Homepage `https://vercel.com` is identity metadata and the same public-home surface.

### Tier 2 (independent; no numeric token promoted)

- https://getdesign.md/vercel (directory entry only)
- Refero had no reliable Vercel record

### Narrative / license (not dashboard tokens)

- Official Geist documentation: https://vercel.com/geist and https://vercel.com/geist/introduction
- Geist / Geist Mono OFL distribution: https://vercel.com/font

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-live / live-inspect / 2026-07-12; `geist` = geist / geist-live / live-inspect / 2026-07-12.

| claim | surface |
|---|---|
| tokens.colors.primary | home |
| tokens.colors.canvas | home |
| tokens.colors.foreground | home |
| tokens.colors.body | home |
| tokens.colors.muted | home |
| tokens.colors.border | geist |
| tokens.colors.surface | home |
| tokens.typography.family.ui | geist |
| tokens.typography.family.mono | geist |
| tokens.typography.hero.size / weight / lineHeight / tracking / use | home |
| tokens.typography.section.size / weight / lineHeight / tracking / use | home |
| tokens.typography.feature.size / weight / lineHeight / tracking / use | home |
| tokens.typography.card-title.size / weight / lineHeight / tracking / use | home |
| tokens.typography.body.size / weight / lineHeight / use | home |
| tokens.typography.ui.size / weight / lineHeight / use | home |
| tokens.typography.mono.size / weight / lineHeight / use | home |
| tokens.spacing.xs / sm / md | home |
| tokens.spacing.lg / xl | geist |
| tokens.rounded.compact / control / full | geist |
| tokens.shadow.control-ring | geist |
| tokens.components.header-link.* | home |
| tokens.components.geist-secondary-action.* | geist |
| tokens.components.geist-icon-button.* | geist |
| tokens.components.geist-input.* | geist |
| tokens.components.geist-radio.* | geist |
| tokens.components.geist-example-card.* | geist |

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- Baseline-only mode; current defaults combined with explicit state absence rather than inferred hover values
- Uncaptured hover/focus/pressed/loading/success/error/deployment/authenticated-dashboard treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Radio unchecked and compact icon-button disabled were exposed in the baseline; those observations are named, not invented visual values
- Official Geist examples are reusable system evidence and are not authenticated dashboard tokens
- Simple Icons logo is identity-only
- YAML `ds.type` is `system`
- Footer `Verified: 2026-07-12 (omd:migrate)` keeps the `(omd:migrate)` mark in this freshness ledger (A1c)
- Font evidence class for authenticated dashboard-only overrides and product-specific font loading is `Unresolved claim` (captured but uncorroborated), not `Outside this capture`
- Header-link navigation and radio selection have identified roles for loading/error/success. Geist secondary action, compact icon-button, and compact input do not; those three applicability fields are omitted at that boundary (C2)
- Source has no per-claim invention beyond YAML `verification_v2.claims` copied into this ledger
