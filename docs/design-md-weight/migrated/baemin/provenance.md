# Baemin provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/baemin/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | baemin |
| name | Baemin |
| country | KR |
| category | consumer-tech |
| homepage | https://www.baemin.com |
| primary_color | `#0cefd3` |
| logo | favicon `https://www.baemin.com/favicon.ico` |
| omd format (source) | 0.1 |
| ds.name | Woowa Font Catalog |
| ds.url | https://www.woowahan.com/fonts |
| ds.type | brand |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-11 |

Token note from source: Baemin 2.0 officially confirms BAEMINWORK/WORK as the app typeface. Exact type metrics remain surface-local: baemin.com, Woowa corporate UI, and the official font catalog are measured separately.

ds description from source: Official Baemin brand-font distribution; current web UI use is verified separately from declared brand assets.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-12 |
| verification_v2.checked | 2026-07-12 |
| surfaces inspected | 2026-07-11 (web); 2026-07-12 (Baemin 2.0 product source) |
| sources captured | 2026-07-11 (web); 2026-07-12 (Baemin 2.0 product source) |
| tokens.extracted | 2026-07-11 |

Conflicts unresolved: none.

Verified note from source: 2026-07-12 (verification v2, four live first-party web surfaces + official Baemin 2.0 product source).

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| baemin-home | marketing | https://www.baemin.com/ | 2026-07-11 |
| woowa-home | corporate | https://www.woowahan.com/ | 2026-07-11 |
| font-catalog | design-system | https://www.woowahan.com/fonts | 2026-07-11 |
| font-license | design-system | https://www.woowahan.com/fonts/license | 2026-07-11 |
| baemin-app-rebrand | product | https://www.woowahan.com/report/detail/975?page=1 | 2026-07-12 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| baemin-live | product-surface | https://www.baemin.com/ | 2026-07-11 |
| woowa-live | product-surface | https://www.woowahan.com/ | 2026-07-11 |
| font-catalog-live | official-doc | https://www.woowahan.com/fonts | 2026-07-11 |
| font-license-live | license | https://www.woowahan.com/fonts/license | 2026-07-11 |
| baemin-rebrand-official | official-doc | https://www.woowahan.com/report/detail/975?page=1 | 2026-07-12 |

### Tier 1

- https://www.baemin.com/
- https://www.woowahan.com/
- https://www.woowahan.com/fonts
- https://www.woowahan.com/fonts/license
- https://www.woowahan.com/report/detail/975?page=1

### Tier 2 (no usable record)

- https://getdesign.md/baemin (did not provide an importable current record)
- https://styles.refero.design/?q=Baemin (did not provide an importable current record)

### Narrative (not interface tokens)

- Official Baemin 2.0 product announcement: https://www.woowahan.com/report/detail/975?page=1
- Official font catalog: https://www.woowahan.com/fonts
- Official font license: https://www.woowahan.com/fonts/license

## Claim ledger

Claims use YAML anchors from the source: `baemin_live` = baemin-home / baemin-live / computed-style / 2026-07-11; `woowa_live` = woowa-home / woowa-live / computed-style / 2026-07-11; `catalog_live` = font-catalog / font-catalog-live / computed-style / 2026-07-11. `tokens.typography.family.ui` is official-doc from baemin-app-rebrand / baemin-rebrand-official / 2026-07-12, not a live computed family on baemin.com.

| claim | surface |
|---|---|
| tokens.colors.primary | baemin_live |
| tokens.colors.canvas | baemin_live |
| tokens.colors.foreground | baemin_live |
| tokens.colors.baemin-dark | baemin_live |
| tokens.colors.baemin-panel | baemin_live |
| tokens.colors.corporate-foreground | woowa_live |
| tokens.colors.corporate-muted | woowa_live |
| tokens.colors.corporate-surface | woowa_live |
| tokens.colors.corporate-disabled | woowa_live |
| tokens.colors.corporate-border | woowa_live |
| tokens.colors.on-dark | woowa_live |
| tokens.typography.family.ui | baemin-app-rebrand (official-doc) |
| tokens.typography.baemin-hero.size / weight / lineHeight | baemin_live |
| tokens.typography.baemin-heading.size / weight / lineHeight | baemin_live |
| tokens.typography.baemin-button.size / weight / lineHeight | baemin_live |
| tokens.typography.corporate-heading.size / weight / lineHeight / tracking | woowa_live |
| tokens.typography.corporate-card-title.size / weight / lineHeight / tracking | woowa_live |
| tokens.typography.corporate-body.size / weight / lineHeight / tracking | woowa_live |
| tokens.typography.corporate-label.size / weight / lineHeight / tracking | woowa_live |
| tokens.typography.catalog-title.size / weight / lineHeight / tracking | catalog_live |
| tokens.spacing.xs | baemin_live |
| tokens.spacing.sm / md / lg / xl / xxl / section | woowa_live |
| tokens.rounded.corporate-control | woowa_live |
| tokens.rounded.download-card | baemin_live |
| tokens.rounded.media-control | woowa_live |
| tokens.rounded.circle | woowa_live |
| tokens.components.app-download-card.* | baemin_live |
| tokens.components.baemin-nav-link.* | baemin_live |
| tokens.components.woowa-more-light.* | woowa_live |
| tokens.components.woowa-more-overlay.* | woowa_live |
| tokens.components.woowa-site-selector.* | woowa_live |
| tokens.components.woowa-carousel-control.* | woowa_live |
| tokens.components.font-download.* | catalog_live |

`tokens.typography.family.ui` (`BAEMINWORK`) remains an official app family. It is not collapsed into baemin.com System or Woowa Pretendard Variable live stacks. `tokens.colors.corporate-disabled` `#cccccc` is corporate disabled text; it is not assigned as the Font Download disabled treatment.

## Capture selectors

The source does not record `data-omd-capture` pointers. Component observations stay attached to the surface URLs above.

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- Surface split from source: WORK is promoted only as the officially confirmed app family; baemin.com, Woowa corporate, and the asset catalog retain separately measured metrics and roles.
- Uncaptured hover/expanded/loading/error/success treatments are omitted. Capture absence is not a `not-applicable` reason. Loading, error, and success on the app-download card, nav action, two read-more actions, family-site selector, and carousel arrow are `not-applicable` by those roles' meaning. Font catalog download loading and error stay `applicable` as a file-download action; success is `not-applicable` because available vs unavailable is the catalog meaning. State coverage is not claimed complete.
- Source §13 names official stakeholder contexts (customers, restaurant owners, riders) from Woowa Brothers reporting, not invented demographic personas. Those three groups are Experience Audience only. Source §13 cites no source id or URL, so restaurant-owner operational-tools and rider-safety bullets are not independently verified user-outcome tasks and were not promoted to Primary tasks. The independently verified Primary task is the official Baemin 2.0 mission already in Experience scope: keep what people need from going cold by ordering through the app. First-party source mapping for that task is `baemin-app-rebrand` / `baemin-rebrand-official` (https://www.woowahan.com/report/detail/975?page=1). They were not moved to a persona sidecar and no fictional biographies were recorded.
- Official history, font-program character, and the Baemin 2.0 announcement are narrative context, not a license to flatten surface-local tokens.
- `#2ac1bc` and the old black pill CTA are recorded as current-capture absences, not tokens.
- Source typography evidence class “Unresolved” is projected as “Outside this capture” so the portable file does not carry a prescriptive placeholder token. The omitted objects remain exact native-app type scale/weights and an authorized browser-loadable WORK specimen.
