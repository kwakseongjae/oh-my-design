# Ably provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/ably/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | ably |
| name | Ably |
| display_name_kr | Ably (에이블리) |
| country | KR |
| category | ecommerce |
| homepage | https://m.a-bly.com |
| primary_color | `#ff5160` |
| logo | favicon `https://www.google.com/s2/favicons?domain=a-bly.com&sz=128` |
| omd format (source) | 0.1 |
| ds.name | ABLY Team |
| ds.url | https://ably.team/ |
| ds.type | brand |
| ds.description | ABLY's official mission, company, product-evolution, and culture surface; consumer app and Seller Square remain separate UI evidence domains. |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-12 |

YAML `ds.name` is ABLY Team. YAML `ds.type` is `brand`. Catalog logo is a Google s2 favicon proxy, not a captured first-party mark. The same identity-only boundary sentence is in portable Typography & Assets (E2a dual destination). Catalog `primary_color` `#ff5160` is dual identity + portable Foundations Current ABLY coral (E2a). Homepage `https://m.a-bly.com` is dual Experience Scope + this identity/surfaces/Tier 1 row (E2a).

Token note from source: Fresh consumer mobile web, ABLY Team, and Seller Square capture. Each evidence domain keeps its own font and component roles; native-app commerce patterns are not inferred from brand or seller surfaces. That note is also in portable Experience Scope (E2a).

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-12 |
| verified footer | 2026-07-12 (omd:migrate) |
| verification_v2.checked | 2026-07-12 |
| surfaces inspected | 2026-07-12 |
| sources captured | 2026-07-12 |
| tokens.extracted | 2026-07-12 |

Conflicts unresolved: none.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| consumer | mobile-consumer | https://m.a-bly.com/ | 2026-07-12 |
| team | corporate-brand | https://ably.team/ | 2026-07-12 |
| seller | seller-platform | https://square.a-bly.com/ | 2026-07-12 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| consumer-live | product-surface | https://m.a-bly.com/ | 2026-07-12 |
| team-live | official-doc | https://ably.team/ | 2026-07-12 |
| seller-live | product-surface | https://square.a-bly.com/ | 2026-07-12 |
| product-story | official-doc | https://ably.team/news/ZS8_IREAACIAr50Y | 2026-07-12 |

### Tier 1

- https://m.a-bly.com/
- https://ably.team/
- https://square.a-bly.com/
- https://ably.team/news/ZS8_IREAACIAr50Y

YAML `verification_v2.surfaces` consumer/team/seller URLs (`https://m.a-bly.com/`, `https://ably.team/`, `https://square.a-bly.com/`) are dual-destination: portable Experience Scope + this surfaces/sources/Tier 1 ledger (E2a). Footer Tier 1 repeats the same three URLs; that footer row is not a substitute for the `verification_v2.surfaces` source-row. The product-story URL is provenance-only; portable Scope cites the official product story without repeating that path.

### Tier 2 (no usable record)

- getdesign.md had no reliable ABLY consumer record
- Refero produced no authoritative current ABLY surface

### Narrative (not interface tokens)

- Official product story: https://ably.team/news/ZS8_IREAACIAr50Y
- ABLY Team mission/culture surface: https://ably.team/

Official product story and ABLY Team copy supply narrative context (taste, next commerce, seller ecosystem, chain-platform expansion). They are not token sources that flatten consumer, Team, and Seller Square into one component system.

Derived editorial range in the portable body (B2/B2a, E1) — not ABLY-authored UI specification:

- Scope evidence-domain sentences (separate UI evidence domains; do not infer native-app commerce patterns from brand or seller surfaces)
- Scope product-story synthesis (personalization and an accessible seller ecosystem as two connected sides of next-commerce)
- Scope cross-surface-signal reading (`#ff5160` as the stable cross-surface signal)
- Scope ecosystem/interchangeability paragraph (shared coral identity; systems not interchangeable; three different claims; shared color signals one company)
- Distinctive trait readings (consumer/company narrative pairing; strict evidence-domain boundary)
- Principles numbered list (four items) and the capture-bound application list
- Avoid Don'ts (source-stated prohibitions and retained capture-bound judgements)
- Spacing and Shape local-scale readings (not a universal spacing or radius scale)
- Elevation judgement that the Team card shadow is not a native commerce sheet token (Foundations Elevation and the story-card field note)
- Yellow Seller Square campaign-action canonicality judgement (not a canonical ABLY semantic color)
- Typography surface-ownership Don't and reading
- Assets product-imagery reading
- Compact app-entry field note (does not carry native purchase meaning)
- Layout judgement that captured sizes are not a cross-viewport specification
- Content voice and copy reading

Official product-story/mission attribution (the two source-attributed sentences before the synthesis), the yellow campaign capture as a local promotion, live-capture measurements, YAML token fields, and Core §4.4 default/hover/focus-visible/disabled rows are outside that derived range. Loading/error/success rows are omitted on Team primary, Team soft, editorial pill, and Seller entry; they are not closed as `not-applicable`.

## Claim ledger

Claims use YAML anchors from the source: `consumer` = consumer / consumer-live / live-inspect / 2026-07-12; `team` = team / team-live / live-inspect / 2026-07-12; `seller` = seller / seller-live / live-inspect / 2026-07-12.

| claim | surface |
|---|---|
| tokens.colors.primary | team |
| tokens.colors.canvas | consumer |
| tokens.colors.foreground | consumer |
| tokens.colors.consumer-secondary | consumer |
| tokens.colors.team-secondary | team |
| tokens.colors.seller-body | seller |
| tokens.colors.consumer-border | consumer |
| tokens.colors.platform-border | team |
| tokens.colors.team-accent-surface | team |
| tokens.typography.family.consumer | consumer |
| tokens.typography.family.corporate | team |
| tokens.typography.family.seller | seller |
| tokens.typography.consumer-label.size / weight / lineHeight / tracking / use | consumer |
| tokens.typography.consumer-compact.size / weight / lineHeight / tracking / use | consumer |
| tokens.typography.consumer-meta.size / weight / lineHeight / use | consumer |
| tokens.typography.corporate-display.size / weight / lineHeight / tracking / use | team |
| tokens.typography.corporate-section.size / weight / lineHeight / tracking / use | team |
| tokens.typography.corporate-card.size / weight / lineHeight / tracking / use | team |
| tokens.typography.corporate-body.size / weight / lineHeight / tracking / use | team |
| tokens.typography.seller-body.size / weight / lineHeight / use | seller |
| tokens.spacing.xs / sm | consumer |
| tokens.spacing.md / lg / xl | team |
| tokens.rounded.corporate-control / pill | team |
| tokens.rounded.consumer-action | consumer |
| tokens.rounded.full | seller |
| tokens.shadow.corporate-card | team |
| tokens.components.consumer-open-app.* | consumer |
| tokens.components.corporate-primary.* | team |
| tokens.components.corporate-soft-action.* | team |
| tokens.components.corporate-pill.* | team |
| tokens.components.corporate-card.* | team |
| tokens.components.seller-primary.* | seller |

YAML typography `lineHeight` values are the unitless ratios 1.25 (consumer-label), 1.33 (consumer-compact, corporate-display, corporate-card), 1.27 (consumer-meta), 1.4 (corporate-section), 1.5 (corporate-body), and 1.6 (seller-body). Those ratios remain in portable Type roles. The legacy body table’s computed 20px / 16px / 14px / 64px / 56px / 32px / 24px / 25.6px observations are size-local and are not the same values as the ratios.

YAML `tokens.components.corporate-pill.fg` `#4e4e4e` is the editorial-pill field. It is not collapsed into Foreground `#1f1f1f`. YAML `tokens.components.corporate-soft-action.bg` `#fff2ea` is that control’s accent surface, not general Canvas `#ffffff`. YAML `tokens.components.seller-primary.font` `14px / 400` is that entry action’s type, not Seller body 16px / 400 / 1.6.

YAML primitive types: `consumer-open-app`, `corporate-primary`, `corporate-soft-action`, `corporate-pill`, and `seller-primary` are `button`; `corporate-card` is `card`.

## Capture selectors

The source does not record `data-omd-capture` pointers. None are invented.

## Proof notes

- verification_v2 schema 2; conflicts: []
- YAML `verification_v2.surfaces` three URLs are dual Scope + this ledger (E2a)
- components_harvested: true (YAML `tokens.components_harvested`; Proof notes only — not a portable Scope sentence)
- Interaction expansions: none. Only default component observations are documented. Source states: default baseline captured; consumer-open-app additionally records that no hover or pressed value is promoted.
- Capture absence is not a `not-applicable` reason. Compact app-entry loading/error/success remain `not-applicable` by the source-stated app-entry / handoff role. Team primary, Team soft, editorial pill, and Seller Square primary entry omit those three fields: exact selector/label/behavior is unresolved, so they are not closed from styling, emphasis, editorial name, or entry name (C2). The story card omits kind and the applicability map (C4). State coverage is not claimed complete.
- The source never records `focus-visible`. Applicability stays; no focus color is promoted as `focus-visible` treatment.
- Source §13 is first-party task contexts, not fictional archetypes. Names/ages/spending/seller revenue/category preference/conversion rate/success metrics are unspecified in the source and are not invented here. Independently verified tasks only: compact mobile-web app-entry; ABLY Team mission/culture/platform reading; Seller Square primary entry.
- No `[FILL IN]` wrappers in the source. No omission-ledger placeholders.
- No unattributed cubic-bezier values in the source. No motion curve omission ledger.
