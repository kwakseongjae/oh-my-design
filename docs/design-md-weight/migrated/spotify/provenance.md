# Spotify provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/spotify/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | spotify |
| name | Spotify |
| country | US |
| category | consumer-tech |
| homepage | https://www.spotify.com |
| primary_color | `#1ed760` |
| logo | type `simpleicons`, slug `spotify` |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |

No `ds.name` / `ds.url` / `ds.type` / `ds.description` fields exist on the source. None are invented here.

Catalog logo is Simple Icons identity (`spotify`). It is identity-only in this ledger; it is not a portable Typography & Assets mark (E2a: not dual-destination). Catalog `primary_color` `#1ed760` is identity metadata and the portable Foundations newsroom/editorial Spotify Green; it is not a captured Web Player control fill (E2a: dual identity + Foundations).

Homepage `https://www.spotify.com` is identity-only in this ledger. The three captured surface URLs are dual-destination with portable Experience Scope (E2a).

YAML `components_harvested` is false.

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

Source `verification_v2.surfaces` records `id` / `url` / `inspected` only. Surface `kind` is not on that object and is not invented here. Source `verification_v2.sources` separately records `kind` (`product-surface` / `official-doc`) on the source rows below.

| id | url | inspected |
|---|---|---|
| product-home | https://open.spotify.com/ | 2026-07-13 |
| product-search | https://open.spotify.com/search | 2026-07-13 |
| newsroom-company | https://newsroom.spotify.com/company-info/ | 2026-07-13 |

The three surface URLs are dual-destination with portable Experience Scope (E2a).

## Sources

| id | kind | url | captured |
|---|---|---|---|
| capture-product-home | product-surface | https://open.spotify.com/ | 2026-07-13 |
| capture-product-search | product-surface | https://open.spotify.com/search | 2026-07-13 |
| capture-newsroom | official-doc | https://newsroom.spotify.com/company-info/ | 2026-07-13 |
| official-design-history | official-doc | https://newsroom.spotify.com/2026-04-23/spotify-design-history/ | 2026-07-13 |
| official-developer-guidelines | official-doc | https://developer.spotify.com/documentation/design | 2026-07-13 |

### Tier 1

- https://open.spotify.com/
- https://open.spotify.com/search
- https://newsroom.spotify.com/company-info/
- https://newsroom.spotify.com/2026-04-23/spotify-design-history/
- https://developer.spotify.com/documentation/design

The first three URLs are dual-destination with portable Experience Scope (E2a). Design-history and developer-guidelines URLs are this ledger; portable Experience cites the articles by name without those two URLs.

### Tier 2 (independent; no numeric token promoted)

- https://getdesign.md/spotify/design-md (independent high-level cross-check)
- https://styles.refero.design/?q=spotify (query attempted; no usable response returned)

### Narrative (not player tokens)

- Official design history: https://newsroom.spotify.com/2026-04-23/spotify-design-history/
- Official developer design guidelines: https://developer.spotify.com/documentation/design
- Company-info newsroom: https://newsroom.spotify.com/company-info/

## Claim ledger

Claims use YAML anchors from the source: `product-home` / `capture-product-home` / 2026-07-13; `newsroom-company` / `capture-newsroom` / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.primary | newsroom-company |
| tokens.colors.control | product-home |
| tokens.colors.foreground | product-home |
| tokens.colors.muted | product-home |
| tokens.colors.outline | product-home |
| tokens.typography.family.ui | product-home |
| tokens.typography.family.title | product-home |
| tokens.typography.body.size / weight / use | product-home |
| tokens.typography.action.size / weight / use | product-home |
| tokens.rounded.search | product-home |
| tokens.rounded.control | product-home |
| tokens.components.player-search.* | product-home |
| tokens.components.player-outlined-action.* | product-home |
| tokens.components.player-icon-control.* | product-home |
| tokens.components.newsroom-cta.* | newsroom-company |

## Capture selectors

| Component | Pointer |
|---|---|
| Player Search Field | `home::[data-omd-capture="3"]`, `https://open.spotify.com/`; 48px tall in the raw bundle |
| Outlined Compact Action | `home::[data-omd-capture="14"]`, `https://open.spotify.com/`; 90px by 32px in the raw bundle |
| Circular Icon Control | `home::[data-omd-capture="1"]`, `https://open.spotify.com/`; 48px by 48px in the raw bundle |
| Filled Newsroom CTA | `surface-3::[data-omd-capture="9"]`, `https://newsroom.spotify.com/company-info/`; 182px by 50px in the raw bundle |
| Hollow Newsroom CTA | `surface-3::[data-omd-capture="10"]`, `https://newsroom.spotify.com/company-info/`; 246px by 50px in the raw bundle |

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: false
- tokens.source: `reconciled`
- No `ds.type` on source; none invented
- Catalog logo is Simple Icons identity-only. Not dual-destination with portable Assets (E2a)
- Homepage `https://www.spotify.com` is identity-only. The three capture URLs (`https://open.spotify.com/`, `https://open.spotify.com/search`, `https://newsroom.spotify.com/company-info/`) are dual Experience Scope + this surfaces ledger (E2a)
- Catalog `primary_color` `#1ed760` is dual identity metadata + portable Foundations newsroom/editorial Spotify Green, not a Web Player control fill (E2a)
- Hollow Newsroom CTA is source §4 body only; it is not a YAML `tokens.components` record. Dual portable Components & States + this selector ledger (E2a). Source body has no primitive type; portable Hollow has no `Type: button`. Kind remains interactive from CTA role plus captured Focus; button versus link is unresolved
- verification_v2.surfaces has no `kind` field. Surface kind is omitted at that field boundary; source-row `kind` on `verification_v2.sources` is preserved (A1)
- Numbered principle stems, *UI implication* notes, and the capture-bound application list are derived editorial implementation inference / not Spotify-authored or a separately published UI specification. Developer-guidance facts cited inside a stem remain source-stated; the numbered reconstruction is not first-party doctrine (B2/B2a, E1)
- Source §13 names stakeholder groups on the official company surface, not fictional personas. Portable Audience keeps those groups. Names, ages, cities, and biographies are not present in the source and are not invented here. They are not copied into this sidecar (D2). Primary tasks come from the three captured surfaces, not from §13
- Generic `Focus` on Player Search Field, Outlined Compact Action, Filled Newsroom CTA (`#25d564` / `#1ed760`), and Hollow Newsroom CTA (`#1dd35e`) is not `focus-visible` treatment. Circular Icon Control has no generic `Focus` snapshot (B1)
- Uncaptured loading/error/success/toast visual treatments are omitted. They are not `not-applicable` for that reason; applicability follows control meaning. State coverage is not claimed complete
- Player Search Field and Filled/Hollow Newsroom CTA loading·error·success follow the named search-entry and editorial-destination roles, not primitive-type bulk assignment (C2)
- Outlined Compact Action and Circular Icon Control have no captured selector label/behavior. Loading·error·success applicability is omitted at that field boundary, not closed as not-applicable from the chrome name. Partner like-state copy is not bound to the circular icon (C2)
- Disabled/unchecked icon-control instances were recorded; no general disabled visual rule is established
- No `[FILL IN]` placeholders exist in the source; none are emitted
- No unattributed cubic-bezier curves exist in the source; none are deleted. B3 five-kind per-component computed gate remains on any future motion promotion: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate
