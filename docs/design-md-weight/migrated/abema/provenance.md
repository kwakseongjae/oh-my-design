# ABEMA provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/abema/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | abema |
| name | ABEMA |
| country | JP |
| category | consumer-tech |
| homepage | https://abema.tv |
| primary_color | `#ddaa00` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=abema.tv&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-10 |
| verified | 2026-06-10 |
| added | 2026-06-10 |
| components_harvested | true |

Token note from source: Token names are verbatim from ABEMA's shipped web-app CSS `:root` block (`--abema-yellow` = `--color-primary` `#ddaa00`; `--color-accent` `#f0163a` LIVE crimson). Canvas is pure black; surfaces ladder `#0b0b0b` → `#171717` → `#212121` → `#373737`. Main app was in a large-scale outage on inspect day; token CSS recovered from the brand's own asset bundle (Wayback 2025-12-31). HTML comment also quotes `--abema-yellow #da0` as the 3-digit CSS form of the same primary.

Catalog logo type `favicon` / Google s2 slug is dual: this identity ledger + portable Typography & Assets / Avoid identity-only / not-a-mark-file boundary; no first-party mark file is attached (E2a). Homepage `https://abema.tv` is dual-destination: Experience Scope + Primary tasks + this identity/surfaces ledger (E2a). Catalog `primary_color` `#ddaa00` is dual identity metadata + portable Foundations ABEMA Yellow (E2a). `tokens.source: live-extract` is dual: this ledger (A1c) + portable Scope extraction class (E2a). Token note is dual: Experience Scope (outage / Wayback recovery) + this ledger (E2a).

No `ds.name` / `ds.url` / `ds.type` / `ds.description` fields exist on the source. None are invented here.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-10 |
| added | 2026-06-10 |
| tokens.extracted | 2026-06-10 |
| live inspect (abema.tv outage shell; times.abema.tv) | 2026-06-10 |
| CSS bundle Wayback snapshot | 2025-12-31 |
| document-title tagline archive | 2026-01-01 |
| CADC 2022 / highlights.jp fetch | 2026-06-10 |

Conflicts unresolved: none as a product-vs-marketing clash. Preserved value pairs inside the product surface: `--color-primary-hover` `#dfb015` vs `--font-color-link-hover` `#c5c5c5`; Crimson Hover `#f34461` vs legacy hover `#bb122e` on older surfaces; YAML compact font stack vs body `--font-family-sans-serif` with Emoji / BIZ UDGothic / Meiryo; YAML Title L/M/S / Micro size+weight without `lineHeight` vs body-table 1.3 / 1.5; YAML `rounded.full` 9999 vs body circle 50%. Both sides of each pair stay in portable Foundations, Typography, or Components. Neither is chosen.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| abema-live | product-surface | https://abema.tv | 2026-06-10 (outage-day maintenance/SorryPage shell; playwright getComputedStyle) |
| abema-css-bundle | shipped-css | https://abema.tv/assets/registry.1bbd6d267a32e228541e6.css (Wayback 2025-12-31) | 2025-12-31 snapshot, recovered 2026-06-10 |
| times-abema | brand-owned-media | https://times.abema.tv | 2026-06-10 |

`https://times.abema.tv` is dual-destination: Experience Scope names it as a brand-owned media surface inspected the same day (dark canvas); Typography & Assets records that inspect beside the CopyRight / CSS stack; this surfaces ledger also holds the URL (E2a). No native-app or TIMES typography coverage claim is added.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| abema-live | product-surface | https://abema.tv | 2026-06-10 |
| abema-css | shipped-css | https://abema.tv/assets/registry.1bbd6d267a32e228541e6.css | Wayback 2025-12-31 |
| times-abema | brand-owned-media | https://times.abema.tv | 2026-06-10 |

### Tier 1

- https://abema.tv (live inspect 2026-06-10 — large-scale outage day, dark maintenance/sorry shell measured)
- https://abema.tv/assets/registry.1bbd6d267a32e228541e6.css (ABEMA's own shipped web-app CSS bundle: full `:root` token system + component classes, retrieved via web.archive.org snapshot 2025-12-31)
- https://times.abema.tv (ABEMA TIMES, brand-owned media surface, live inspect 2026-06-10)

### Tier 2 (no usable record)

- https://getdesign.md/abema (NOT_FOUND)
- https://getdesign.md/abematv (NOT_FOUND)
- https://styles.refero.design/?q=abema (no ABEMA listing)

### Narrative (not interface tokens)

- CADC 2022 session “ABEMAにおけるサービスブランディング” (cadc.cyberagent.co.jp) — first-party for brand concept 「テレビの再発明」, internal ABEMA BRAND GUIDELINES, 「意思」 framing, speakers 佐藤洋介 / 遠藤直人. Fetched 2026-06-10. Concept name is dual: Experience Scope + Principles (item 5 citation) + this narrative ledger (E2a). The cadc.cyberagent.co.jp URL is provenance-only (E2a: not dual-destination). Not a token sheet.
- https://highlights.jp/project/abematv-branding/ — VI design + brand experience design project page, 「テレビをもう一度発明する」 concept. Fetched 2026-06-10. Provenance-only; not a portable token sheet (E2a: not dual-destination).
- Widely documented public facts (source: not independently re-verified this turn): AbemaTV launch April 2016 as CyberAgent-led JV with TV Asahi; Susumu Fujita's leadership; 2020 rebrand to ABEMA; free full streaming of FIFA World Cup 2022; tagline 新しい未来のテレビ.

## Claim ledger

Claims use YAML anchors from the source. Token extraction is `live-extract` (2026-06-10). `components_harvested: true`. CSS `:root` names/values for §1–6 and §14–15 are quoted from the brand-shipped registry CSS.

| claim | surface |
|---|---|
| tokens.colors.primary `#ddaa00` (outage-day yellow links) | abema-css + abema-live |
| tokens.colors.canvas `#000000` (outage-day black canvas) | abema-css + abema-live |
| translucent chrome `rgba(23,23,23,.8)` (outage-day player chrome) | abema-live + abema-css surface token |
| tokens.rounded.md / `--radius` 4px (outage-day radius) | abema-css + abema-live |
| tokens.typography.family.sans CopyRight stack (outage-day named stack) | abema-css + abema-live |
| tokens.colors.primary-hover `#dfb015` | abema-css |
| tokens.colors.accent `#f0163a` / accent-hover `#f34461` | abema-css |
| tokens.colors.green / green-hover / purple / purple-hover / ppv-blue / coin | abema-css |
| tokens.colors.surface / surface-sub / surface-hover / surface-deep / skeleton | abema-css |
| tokens.colors.foreground / smoke / smoke-strong / link-hover / hairline / pale / on-primary / white | abema-css |
| tokens.typography.family.alphanumeric / condensed | abema-css |
| tokens.typography.title-l / title-m / title-s / heading / body-lg / body / caption / micro | abema-css |
| tokens.spacing.unit / sm / md / base / lg / content-min / content-max / content-max-vod | abema-css |
| tokens.rounded.sm / lg / xl / full | abema-css |
| tokens.shadow.floating / strong | abema-css |
| tokens.components.button-primary / button-secondary / button-dark / button-danger | abema-css |
| tokens.components.badge-live / input-text / card-floating / tab-panel / toggle-checkbox / toast-notification | abema-css |

## Capture selectors

The source does not record `data-omd-capture` selectors. Named component classes in the CSS bundle (not invented here): `com-a-Button--primary`, `com-a-Button--primary-dark`, `com-InputText`, `com-search-SearchSuggestList`, `com-BroadcastingTag`, `com-m-TabList`, `com-RoundTabItem`, `com-m-NotificationBlock`, `com-a-Modal`.

## Proof notes

- tokens.source: `live-extract`; `components_harvested: true` (A1c)
- No `ds.type` on source; none invented (A1c)
- Catalog logo Google favicon slug is dual-destination: this Identity ledger + portable Typography & Assets / Avoid identity-only boundary (E2a)
- Homepage `https://abema.tv` is dual-destination: Experience Scope + Primary tasks + this identity/surfaces/Tier 1 ledger (E2a)
- `primary_color` `#ddaa00` is dual-destination: identity + portable Foundations ABEMA Yellow (E2a)
- Token note / `live-extract` is dual-destination: Experience Scope + this ledger (E2a)
- CSS bundle URL is dual-destination: Experience Scope + this sources/Tier 1 ledger (E2a)
- `https://times.abema.tv` is dual-destination: Experience Scope + Typography & Assets + this surfaces/Tier 1 ledger (E2a)
- First-party concept 「テレビの再発明」 is dual-destination: Experience Scope + Principles + this narrative ledger (E2a). cadc.cyberagent.co.jp is provenance-only
- `https://highlights.jp/project/abematv-branding/` is provenance-only (E2a: not dual-destination)
- Verbatim voice samples (E2a):
  - "無料動画・話題の作品が楽しめる新しい未来のテレビ" — document title, archived 2026-01-01; Content & Locales + this ledger
  - "クリックでミュートを解除" — player mute-unlock, live 2026-06-10; Content & Locales + this ledger
  - "ABEMAの表示に失敗しました" / "申し訳ありません" — SorryPage, 2026-06-10 / archived snapshot. "ABEMAの表示に失敗しました" is Capture record Error (display failed) + Content verbatim + this ledger; "申し訳ありません" is Content table + Content verbatim + this ledger
  Derived §10 register/table rows are not this observation class
- Interpretive claims in source (examples given there: “the black canvas is a switched-on television in a dark living room”, “red means on-air first”) are editorial readings connecting observed tokens to the stated brand concept, not directly sourced ABEMA statements. Portable adjacent B2a covers the actual derived set: Scope evidence-domain (values stay attached to named observations); Scope visual-character; Scope envelope; Audience observable-work application; Distinctive traits (`role-locked`; `deliberately light`); Principles (five items + capture-bound application); Avoid causal Don’ts (source Don’ts only); Semantic color (`never white-on-yellow`; role-bound named-uses; Foreground `near-white, not pure white`; `cool to`; Pale `deliberately light`; Pure White maximum-contrast reading); Shape local-geometry (4px not every unlisted surface); Elevation philosophy; Motion table character `fast in, soft settle`; Motion purpose; Motion reduced-motion application (`nothing depends on animation`); type-character; Capture-record §14 causal wording; Layout whitespace; Layout `structural exception`; Layout collapsing-purpose / player-as-fixed-anchor; Layout thumbnail-veil “lifts” reading; Layout measurement-application; Assets thumbnail first-party / no-invented-decoration reading; Content voice (except verbatim samples); Content forbidden-register (own adjacent limiter after the verbatim interlude) (B2/B2a). Hiragino fallback and catalog Google favicon identity-only are evidence-class boundaries (migration/runtime and catalog/identity), not this derived set. There is no reconstruction-boundary exemption for remaining editorial sentences.
- Source §13 personas are fictional archetypes informed by publicly observable ABEMA audience segments, not individual people. Portable Audience keeps the exclusion boundary; the observable-work application has adjacent complete B2a. Names, ages, cities, and biographies are not copied here (D2). Primary tasks come from abema.tv linear-watch / home-rails / VOD-play evidence, not §13. Those task facts also sit in Layout (§5 home rails / VOD width) and Brand Narrative (§11 free-linear) source rows (E2a)
- Hiragino / system fallback display boundary is a migration/runtime evidence class in Avoid + Typography, not an ABEMA source Don’t (E2). Catalog Google favicon identity-only is a catalog/identity evidence class in Assets + Avoid, not a source Don’t (E2)
- Round Tab generic `Focus` (`#e6e6e6` / `#212121`) is not `focus-visible` treatment evidence (B1)
- YAML primitive types preserved per component: button ×4 (Primary, Secondary, Dark, Danger) plus body Primary Dark (`com-a-Button--primary-dark`), input, card (Floating Panel), badge (LIVE), tab ×2 (Panel, Round), toggle (Checkbox), toast (Notification Block) (A1b). Title Card / Pre-Broadcast / NEW / Modal have no YAML `type`; none invented
- YAML unitless lineHeight **1.5** is portable Type roles (A1a). Body-table 1.3 / 1.5 (21px) / controls-at-1 are additional source-stated values, not YAML back-fill
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete
- No `[FILL IN]` placeholders exist in the source; none are emitted
- Cubic-bezier `cubic-bezier(.33, 1, .68, 1)` is attributed to the brand-shipped CSS for search-suggest reveal and is kept in portable Motion. It is not an unattributed spec-template curve. No unattributed cubic-bezier was omitted. B3 five-kind per-component computed gate remains on promoting animation-name / transition-property / additional curves beyond the Motion tables
- Inactive Panel Tab label `#999999` is a §9-only unique piece; portable Panel Tab (A3)
