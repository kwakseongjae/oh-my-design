# Bilibili provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/bilibili/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | bilibili |
| name | Bilibili |
| country | CN |
| category | consumer-tech |
| homepage | https://www.bilibili.com |
| primary_color | `#FB7299` |
| logo | simpleicons slug `bilibili` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-13 |

Catalog `primary_color` `#FB7299` is identity metadata. The source states it is not emitted by this capture and is not a current UI-token claim. It is not a Foundations colour.

Catalog logo metadata is Simple Icons identity, not a captured first-party mark. It was not promoted into Typography & Assets.

Token note from source: three supplied desktop product snapshots across the home and popular routes. Tokens are limited to computed values with selector-level provenance.

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
| home | product-home | https://www.bilibili.com/ | 2026-07-13 |
| surface-2 | product-home | https://www.bilibili.com/ | 2026-07-13 |
| surface-3 | product-popular | https://www.bilibili.com/v/popular/all/ | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.bilibili.com/ | 2026-07-13 |
| home-refresh-live | product-surface | https://www.bilibili.com/ | 2026-07-13 |
| popular-live | product-surface | https://www.bilibili.com/v/popular/all/ | 2026-07-13 |
| corporate-information | official-doc | https://ir.bilibili.com/en/corporate-information/ | 2026-07-13 |
| sustainability-framework | official-doc | https://ir.bilibili.com/media/crul0g3t/bilibili-sustainable-finance-framework.pdf | 2026-07-13 |

### Tier 1

- https://www.bilibili.com/ (supplied computed-style product snapshots, 2026-07-13)
- https://www.bilibili.com/v/popular/all/ (supplied computed-style product snapshots, 2026-07-13)
- https://ir.bilibili.com/en/corporate-information/ (official company narrative)
- https://ir.bilibili.com/media/crul0g3t/bilibili-sustainable-finance-framework.pdf (official company/community narrative)
- https://developer.huawei.com/consumer/en/design/resource/ (HarmonyOS Sans source-domain boundary; Huawei resource, not a Bilibili asset)

### Tier 2 (no usable record)

- https://getdesign.md/bilibili (attempted 2026-07-13; direct fetch rejected as unsafe)
- https://styles.refero.design/?q=bilibili (attempted 2026-07-13; direct fetch rejected as unsafe)
- https://styles.refero.design/ (catalog landing retrieved, no Bilibili-specific specification used)

### Narrative (not interface tokens)

- Corporate information: https://ir.bilibili.com/en/corporate-information/
- Sustainable finance framework: https://ir.bilibili.com/media/crul0g3t/bilibili-sustainable-finance-framework.pdf

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-live / computed-style / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.canvas | home |
| tokens.colors.surface | home |
| tokens.colors.foreground | home |
| tokens.colors.muted | home |
| tokens.colors.secondary | home |
| tokens.colors.hairline | home |
| tokens.typography.family.sans | home |
| tokens.typography.nav-label.size / weight / lineHeight / use | home |
| tokens.typography.video-title.size / weight / lineHeight / use | home |
| tokens.typography.metadata.size / weight / lineHeight / use | home |
| tokens.spacing.xs / sm / md | home |
| tokens.rounded.sm / md | home |
| tokens.shadow.flat | home |
| tokens.components.video-card-cover.* | home |
| tokens.components.video-card-stats.* | home |
| tokens.components.skeleton-line.* | home |

`tokens.colors.hairline` `#e3e5e7` is the search-field focus/pressed fill and a border/background candidate, including the feed roll 1px border. It is not collapsed into a hairline-only role. `tokens.colors.secondary` `#61666d` is default `nav-search-input` text, not general foreground. YAML `tokens.typography.family.sans` is `-apple-system`; that is a system-resolved effective family, not a Bilibili brand face.

## Capture selectors

| Component | Pointer |
|---|---|
| Header entry link | `home::[data-omd-capture="0"]` (`entry-title`) |
| Video-card title | `home::h3` (`bili-video-card__info--tit`) |
| Owner/date metadata | `bili-video-card__info--author` / `--date` |
| Video-card cover wrapper | `home::div.bili-video-card__image--wrap` |
| Video-card statistics strip | `home::div.bili-video-card__stats` |
| Home search field | `home::[data-omd-capture="9"]` (`nav-search-input`); the same default component appears on `surface-2` and `surface-3` |
| Video-card skeleton line | `home::p.bili-video-card__skeleton--text` and `--light` |
| Feed roll button | `home::[data-omd-capture="87"]` (`primary-btn roll-btn`) |

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: false
- Interaction expansions: 0; only default component observations plus the loading/skeleton treatments in §14 are promoted as visual treatments
- Uncaptured empty/error/success/disabled treatments are omitted. Capture absence is not a `not-applicable` reason. Home search loading/error/success are `not-applicable` because the field submits a query rather than loading, validating, or confirming on itself. Feed roll loading stays applicable as an in-progress card-set wait; error and success on that button are `not-applicable` because rolling replaces the card set rather than reporting failure or confirming an outcome on the control. State coverage is not claimed complete.
- Focused/pressed search-field fill `#e3e5e7` and text `#18191c` are colour-aggregate observations, not `focus-visible` treatments and not interaction-expansion states
- Official company narrative explains community context; it does not supply interface tokens
- HarmonyOS Sans at Huawei's design-resource URL is a Huawei resource, not a Bilibili font asset

## Source placeholders omitted from the portable file

Quoted from the source; values were not filled in:

- `[FILL IN — this packet contains one 1440×900 desktop capture only. No breakpoint, mobile, touch-target, or responsive-layout claim is established.]`
- `[FILL IN — no first-party empty-state observation in this packet.]`
- `[FILL IN — no error-state observation in this packet.]`
- `[FILL IN — no success-state observation in this packet.]`
- `[FILL IN — no disabled-state observation in this packet.]`
- `[FILL IN — the supplied capture reports no interaction expansion and no motion/easing measurements. Do not infer hover, player, or celebratory motion from static component evidence.]`
