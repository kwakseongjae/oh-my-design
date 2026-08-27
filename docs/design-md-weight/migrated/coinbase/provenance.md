# Coinbase provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/coinbase/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | coinbase |
| name | Coinbase |
| country | US |
| category | fintech |
| homepage | https://www.coinbase.com |
| primary_color | `#0052ff` |
| logo | type `simpleicons`, slug `coinbase` |
| omd format (source) | 0.1 |
| tokens.source | design-system |
| tokens.extracted | 2026-06-08 |
| components_harvested | true |

Token note from source: Coinbase open-sourced CDS (internally Cedar) at `cds.coinbase.com` and `github.com/coinbase/cds`. Patterns combine CDS-documented semantics with values measured live from `coinbase.com` (playwright `getComputedStyle`, 2026-06). Color roles map to CDS semantic tokens: `fgPrimary`/`bgPrimary` = Blue70 (`#0052ff`), `fgMuted`/`line` = Gray60 (`#5b616e` muted role at 20% opacity), `fgInverse`/`bg` = Gray0/white, foreground text = `#0a0b0d`. Dual destination (E2a): this ledger and portable Experience Scope / Components intro.

Catalog logo type `simpleicons` / slug `coinbase` is dual: this identity ledger + portable Typography & Assets (E2a). It is a catalog identity-boundary record, not a captured first-party mark. No portable Named-gaps row was invented for a first-party logo-file absence.

Homepage `https://www.coinbase.com` is dual-destination: Experience Scope + this identity ledger (E2a). Live hosts `/`, `/explore`, `/about` on `coinbase.com` are dual Scope / Primary tasks + this Surfaces/Tier 1 ledger (E2a). CDS hosts `cds.coinbase.com` and `github.com/coinbase/cds` are dual Scope 11 / 13 + Components intro 192 + this Sources/Tier 1 ledger (E2a). Open-sourced is source-stated §8, not sidecar Proof.

Catalog `primary_color` `#0052ff` destinations: this identity ledger + portable Scope / Distinctive / Principles / Avoid local recipes / Semantic Coinbase Blue / Primary Button fill / Chip selected / Switch checked / Checkbox selected / SegmentedControl active / Progress fg / Sparkline fg / Dark Section accent / White-hero is not this hex as fill / Dark-section local recipe accent link (E2a).

`tokens.source: design-system` and `components_harvested: true` are this ledger only as YAML keys (A1c). Portable Font evidence restates named families and YAML/body §3 metrics as source-stated, not live-computed type-size evidence (E2). YAML `verified` 2026-05-15 and `extracted` 2026-06-08 are this freshness ledger. Footer **Verified:** 2026-06-08 (component harvest — TIER 1) is this ledger only.

Source has no `ds.name` / `ds.url` / `ds.type` / `ds.description` and no `verification_v2`; none invented. `web/references/coinbase/.verification.md` exists (SHA-256 `af3f4ed1e9c8feb74375e18388a65d4f6165e57543e08ea05e42868871eb8b8e`). Canonical `DESIGN.md` and this packet do not adopt or link that sidecar; its contents are not this packet’s source. File existence is not adoption. Sidecar Proof values are not imported here.

Style ref: `stripe`. This ledger only. Not a portable token.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-05-15 |
| tokens.extracted | 2026-06-08 |
| footer Verified | 2026-06-08 (component harvest — TIER 1) |
| homepage tagline | 2026-05 (source §10) |
| playwright getComputedStyle | 2026-06 (source §8) |

Conflicts unresolved: none.

Preserved value pairs inside the reconstruction (neither side chosen): `#0052ff` vs `#578bfa` vs `#0667d0`; `#ffffff` canvas vs on-primary; `#0a0b0d` foreground vs dark-section; `#5b616e` muted vs `rgba(91,97,110,0.2)` line; `#eef0f3` surface vs YAML primary fill vs §4 Primary Pill `#eef0f3` or `#282b31`; `#282b31` vs `#0a0b0d`; `rgba(247,247,247,0.88)` vs canvas vs `#eef0f3`; YAML pill 56 vs YAML full 100000 vs live `56px` / `100000px` / chip `16px`; YAML spacing numbers without px vs §5 px scale including 1px/3px/5px/6px/10px/12px/15px/20px/25px; YAML `section` 64 vs no 64 in the §5 list; YAML caption weight 600 vs body 600–700; YAML `body-semibold` 1.25 vs YAML `button` 1.20 + `0.16px`; unitless lineHeight `1.00` / `1.11` / `1.13` / `1.33` / `1.50` / `1.25` / `1.56` / `1.20` / `1.23`.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | product-surface | https://www.coinbase.com / `coinbase.com/` | 2026-06-08 (footer) / tagline 2026-05 |
| explore | product-surface | `coinbase.com/explore` | 2026-06-08 |
| about | product-surface | `coinbase.com/about` | 2026-06-08 |
| cds | official-design-system | `cds.coinbase.com` | named 2026-06-08 footer |
| cds-github | official-design-system-source | `github.com/coinbase/cds` | named 2026-06-08 footer |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | coinbase.com `/` | 2026-06 (playwright getComputedStyle) |
| explore-live | product-surface | coinbase.com `/explore` | 2026-06 |
| about-live | product-surface | coinbase.com `/about` | 2026-06 |
| cds | official-design-system | cds.coinbase.com | named in source §8 / footer |
| cds-github | official-design-system-source | github.com/coinbase/cds | named in source §8 / footer |

### Tier 1

- coinbase.com (live DOM via playwright across `/`, `/explore`, `/about` — round 56px icon buttons; nav chip 16px radius 4px·16px; input 56px·16px pad; pill 100000px; link `#0667d0`; surface `#eef0f3`). Dual portable Scope / Distinctive / Components + this ledger (E2a).
- Coinbase Design System (CDS / "Cedar"), open-sourced per source §8 — cds.coinbase.com + github.com/coinbase/cds: component inventory (100+ across Layout/Inputs/Cards/Data Display/Feedback/Overlay/Navigation/Charts) and per-component specs (Button variants/sizes/states, TextInput, Banner, Modal, Toast, ProgressCircle, Table, Switch). Dual portable Scope 11 / 13 + Components intro 192 + this ledger (E2a).

### Tier 1 (Philosophy)

- coinbase.com homepage
- Brian Armstrong public talks
- SEC public filings

These are philosophy-layer sources in the footer. They are not interface-token sources.

### Tier 2 (no usable record)

- styles.refero.design — no record
- getdesign.md/coinbase — cross-checked

Portable body does not re-host Tier 2 failure strings (E1).

### Narrative (not interface tokens)

Source §11 public-history URLs (not first-party Coinbase product tokens):

- https://en.wikipedia.org/wiki/Brian_Armstrong_(businessman)
- https://www.frederick.ai/blog/brian-armstrong-coinbase
- https://99bitcoins.com/people/who-is-brian-armstrong/

June 2012 San Francisco founding; Brian Armstrong (CEO) and Fred Ehrsam (former Goldman Sachs FX trader); Armstrong posted on Hacker News looking for a co-founder for Y Combinator; Ehrsam responded after seeing the post on Reddit; the HN post itself went viral; Y Combinator S12 with $150K; mission *"to increase economic freedom in the world"*; NASDAQ direct listing April 14, 2021 ticker COIN; IPO peak approached $100B market cap; 2022 crypto winter / FTX collapse (Nov 2022); most-regulated US crypto exchange; regulatory caution into positioning advantage; Coinbase Wallet (non-custodial), Coinbase Prime (institutional), Base (L2, launched 2023); and the source refusal list, are restated in portable Scope under adjacent complete B2a (public-history / causal tails / refusal). Exact URLs stay in this ledger. They are not interface tokens.

## Claim ledger

Token extraction is `design-system` (2026-06-08). `components_harvested: true`. The source does not record `data-omd-capture` selectors. Footer live-inspect notes attach groups of values to named URLs; they are not a claim-by-claim computed Proof table invented here.

| claim | surface / source-stated host |
|---|---|
| tokens.colors.primary / brand / primary_color | CDS Blue70 + live coinbase.com |
| tokens.colors.primary-hover | live / YAML hover |
| tokens.colors.canvas / on-primary | live coinbase.com |
| tokens.colors.foreground / dark-section | live coinbase.com |
| tokens.colors.muted / line at 20% | CDS Gray60 + live |
| tokens.colors.surface | live coinbase.com (`#eef0f3`) |
| tokens.colors.surface-dark | live / YAML inverse |
| tokens.colors.link | live `/` `/explore` `/about` (`#0667d0`) |
| tokens.typography.family.sans / display / body / icon | named reconstruction families |
| tokens.typography.display-hero … small | YAML + body §3 |
| tokens.spacing.* | YAML; live px scale is body §5 |
| tokens.rounded.* | YAML; live ranges are body §5 |
| tokens.shadow.soft | YAML + body §6 |
| tokens.components.button-primary | CDS Button primary + live |
| tokens.components.button-secondary | CDS Button secondary |
| tokens.components.button-tertiary / inverse / negative / transparent / blue-bordered | CDS Button variants |
| tokens.components.icon-button | CDS IconButton; live 56px homepage utility row |
| tokens.components.chip | YAML badge |
| tokens.components.nav-tab-chip | live header chip |
| tokens.components.text-input | CDS TextInput; live 56px·16px |
| tokens.components.search-input | CDS SearchInput |
| tokens.components.switch | CDS Switch |
| tokens.components.checkbox-radio | CDS Checkbox/Radio |
| tokens.components.segmented-control | CDS SegmentedControl |
| tokens.components.card | CDS ContentCard family |
| tokens.components.data-table | CDS Table |
| tokens.components.list-cell | CDS ListCell |
| tokens.components.modal | CDS Modal |
| tokens.components.toast | CDS Toast |
| tokens.components.tooltip | CDS Tooltip/Popover/Coachmark |
| tokens.components.banner | CDS Banner |
| tokens.components.progress | CDS ProgressCircle/ProgressBar/Spinner |
| tokens.components.sparkline | CDS charts |
| tokens.components.dark-section | live dark feature section |

## Capture selectors

Source records no `data-omd-capture` pointers. Live measurements named in the footer: round 56px icon buttons; nav chip 16px radius 4px·16px; input 56px·16px pad; pill 100000px; link `#0667d0`; surface `#eef0f3`. Dual portable Components / Distinctive + this ledger (E2a).

## Proof notes

- No `verification_v2` object on the source; none invented
- `web/references/coinbase/.verification.md` exists (SHA-256 `af3f4ed1e9c8feb74375e18388a65d4f6165e57543e08ea05e42868871eb8b8e`) but is not adopted or linked by canonical `DESIGN.md` or this packet; sidecar contents are not this packet’s source
- `components_harvested: true`
- Method named in source: playwright `getComputedStyle`, 2026-06, across `/`, `/explore`, `/about`
- CDS is open-sourced (source §8); cross-platform React / React Native library of 100+ components. Dual portable Scope 11 / 13 + Components intro 192 + this ledger (E2a)
- Uncaptured `focus-visible` treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete
- Generic Focus `2px solid black` outline on primary is a different observation from `focus-visible`. Restored as one natural prose sentence (E3); not a table-row treatment
- Official history URLs are narrative context, not token sources
- Style ref `stripe` is this ledger only

## Omitted §9 wrappers

Quick Color Reference and Example Component Prompts wrappers deleted from the portable body. Unique parent-child tuples restored as White hero and Dark section local recipes in portable Components. Dual this omission ledger + portable local recipes (E2a). Verified hexes already in Foundations/Components stay there (A3/A4).

## Omitted curves (E2b)

Source §15: `Easings: standard cubic-bezier; no bounce.` No `cubic-bezier(...)` function value appears in the source. The phrase `standard cubic-bezier` is omitted from portable Foundations (unsourced curve language). `no bounce` is kept as a source-stated constraint on portable Motion. This omission is a disposition, not a silent drop.

## Personas (D2)

Source §13 names fictional archetypes and says they are not individual people. Those archetypes are not Audience, not primary tasks, and are not re-hosted here. No names, ages, cities, or segment biographies are recorded in this ledger.

## Derived inventory (portable B2a sites)

Complete adjacent limiter form: `derived editorial implementation inference` / `not Coinbase-authored or a separately published UI specification`.

Portable sites (DESIGN.md): Scope catalog-homepage-as-identity 9; Scope evidence-domains / this-contract-covers / CDS-open-sourced 11; Scope CDS-to-hex mapping / open-sourced 13; Scope atmosphere 15; Scope public-history + origin-story / regulatory-caution causal tails 17; Scope refusal 19; Primary tasks named top-nav jobs (not live component ids) 25; Audience no-personas 34; Distinctive unmerged-role extras 38; Principles 5-item header 51; Principles UI-implication tails 59; capture-bound §7 Do’s 61; Avoid §7/§9 70; Semantic unmerged-role 81; Spacing YAML-without-px 97; Spacing YAML-vs-live / yaml-section-64 101; Shape local-geometry precede 105; Shape local-geometry after-list 116; Elevation no-reusable-ladder 120; Elevation modal-scrim-not-elevation 122; Motion omitted-standard-cubic-bezier-language 137; Font evidence-class source-stated metrics 145; Font trailing do-not-substitute 152; Family Display-for-hero-only 161; Type-role YAML-vs-px forms 165; body-semibold-unmerged-from-button / caption-600-unmerged 183; Assets simpleicons identity-boundary 187; Capture-record graph-not-adopted 196; Primary Button field note 233; Secondary Button field note 259; Icon Button field note 342; Chip selected variant 375; Nav Tab Chip field note 388; Text Input field note 415; Switch checked variant 469; Modal Tray field note 558; §4 Primary Pill unmerged recipe 658; CDS siblings Type-not-invented 669; §9 local-recipe named tuples 677; Layout spacing-record / component-local 695; Layout breakpoint span 712; Content Observed citation-character 719; Content §14-not-extra-Observed 723; Content derived voice / table guidances 727.

Left without that wrapper (not reconstruction readings): catalog product name `Coinbase.` / YAML tokens / primitive types / Components intro open-sourced 192 (source-stated §8) / B3 five-kind gate on 137 (omission reading on the same line is wrapped; the five-kind promotion-gate sentence is not) / C1–C3 capture-record policy 214 / C4 kind/map omission prose / per-control C2 omission sentences / Governance controlled copy / Named gaps inventory 769–780 / Observed tagline quote 721 / §14 table cells 202–212.
