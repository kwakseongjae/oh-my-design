# Mercari provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/mercari/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | mercari |
| name | Mercari |
| country | JP |
| category | consumer-tech |
| homepage | `https://www.mercari.com` |
| primary_color | `#5356ee` |
| logo | `type: github`, `slug: mercari` |
| omd format (source) | 0.1 |
| verified | 2026-07-13 |
| verification_v2.schema | 2 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-12 |
| components_harvested | true |

The github-slug logo is dual-destination: identity metadata here, and a portable asset record in `DESIGN.md` §3. It is a catalog identity pointer, not a Mercari-hosted brand file in this packet.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-12 |
| sources captured (live) | 2026-07-12 |
| official-doc / license captured | 2026-07-13 |
| tokens.extracted | 2026-07-12 |

The source footer records **Verified:** 2026-07-13. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | public-marketplace | `https://www.mercari.com/` | 2026-07-12 |
| surface-2 | corporate-marketing | `https://www.mercari.com/about/` | 2026-07-12 |
| surface-3 | brand-directory | `https://www.mercari.com/us/brand/` | 2026-07-12 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | `https://www.mercari.com/` | 2026-07-12 |
| about-live | product-surface | `https://www.mercari.com/about/` | 2026-07-12 |
| brand-live | product-surface | `https://www.mercari.com/us/brand/` | 2026-07-12 |
| marketplace-guidelines | official-doc | `https://www.mercari.com/us/help_center/article/407/` | 2026-07-13 |
| listing-guide | official-doc | `https://www.mercari.com/us/help_center/topics/listing/guides/creating-a-listing/` | 2026-07-13 |
| marketplace-principles | official-doc | `https://pj.mercari.com/principles/marketplace-principles-and-history_EN.pdf` | 2026-07-13 |
| averta-foundry | official-doc | `https://foundryfivetype.com/` | 2026-07-13 |
| averta-license | license | `https://foundryfivetype.com/eulas/` | 2026-07-13 |

### Tier 1 (as listed in the source footer)

- `https://www.mercari.com/`
- `https://www.mercari.com/about/`
- `https://www.mercari.com/us/brand/`
- `https://www.mercari.com/us/help_center/article/407/`
- `https://www.mercari.com/us/help_center/topics/listing/guides/creating-a-listing/`
- `https://pj.mercari.com/principles/marketplace-principles-and-history_EN.pdf`
- `https://foundryfivetype.com/`
- `https://foundryfivetype.com/eulas/`

`https://www.mercari.com/` is dual-destination: Experience Scope in `DESIGN.md` and this ledger. `https://www.mercari.com/about/` and `https://www.mercari.com/us/brand/` are dual-destination the same way. The listing-guide, marketplace-guidelines, and marketplace-principles URLs are dual-destination: Content / Experience narrative in `DESIGN.md` and this ledger.

### Tier 2 (no usable record)

- `https://getdesign.md/mercari` (attempted; no usable record returned)
- `https://styles.refero.design/?q=mercari` (attempted; no usable record returned)

Neither Tier 2 directory supplies token or component evidence. No Tier 1 ↔ Tier 2 conflicts.

### Narrative (not interface tokens)

- Marketplace principles PDF: `https://pj.mercari.com/principles/marketplace-principles-and-history_EN.pdf`
- Marketplace guidelines: `https://www.mercari.com/us/help_center/article/407/`
- Listing guide: `https://www.mercari.com/us/help_center/topics/listing/guides/creating-a-listing/`
- Averta foundry / EULA: `https://foundryfivetype.com/` · `https://foundryfivetype.com/eulas/`

## Sibling handling (`web/references/mercari/.verification.md`)

The sibling exists — confirmed with `find web/references/mercari -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Pipeline `spec/verification-pipeline.md`; workflow `omd:add-reference` UPDATE; notes dated 2026-07-13
- Raw collector evidence: `artifacts/reference-evidence/mercari.json`, captured 2026-07-12 at 1440×900. Three surfaces, 95 coverage, 31 component variants, and three recorded interactions
- `surface-3` described as public brand-directory (“All brands available on Mercari”), not a Mercari brand-guideline or product-component document
- Collector interactions: three `dialog-open` records, all triggered by `truste-button1` cookie-consent controls; third-party Truste UI; excluded
- Raw samples (RGB forms of values the source body already records as hex):
  - `home::[data-omd-capture="12"]` — `background: rgb(255, 255, 255)`; `color: rgb(34, 34, 34)`; `border-radius: 4px`; `padding: 0px 16px`; `font: 14px / 600 / Averta`; rendered height `32px`
  - `surface-2::[data-omd-capture="11"]` — `background: rgb(83, 86, 238)`; `color: rgb(255, 255, 255)`; `border-radius: 4px`; `padding: 0px 16px`; `font: 14px / 600 / Averta`; rendered height `32px`
  - `home::[data-omd-capture="3"]` — `background: rgb(83, 86, 238)`; `color: rgb(255, 255, 255)`; `border-radius: 4px`; `padding: 0px 16px`; `font: 16px / 600 / Averta`; rendered height `44px`
  - `home::[data-omd-capture="6"]` — `background: rgba(0, 0, 0, 0)`; `color: rgb(0, 0, 0)`; `border-radius: 50%`; `font: 16px / 400 / Averta`; rendered height `40px`
  - `home::[data-testid="AnonCardImage"]` — `background: rgba(0, 0, 0, 0)`; `color: rgb(34, 34, 34)`; `border-radius: 8px`; `box-shadow: none`; `font: 16px / 400 / Averta`
  - `surface-2::[data-omd-capture="7"]` — `color: rgb(34, 34, 34)`; `border-radius: 0px`; `padding: 0px`; `font: 16px / 600 / Averta`; rendered height `22px`
  - `surface-2::[data-omd-capture="7"]::state-hover` and `::state-pressed` — `color: rgb(83, 86, 238)`; `background: rgba(0, 0, 0, 0)`; `border-radius: 0px`; `font: 16px / 600 / Averta`
- Averta loaded, high confidence, 902 computed uses; eight Mercari-hosted source URLs: light, regular, semibold, and bold WOFF/WOFF2 files under `https://u-web-assets.mercdn.net/assets/fonts/averta/`
- `averta-semibold` loaded with 27 visible uses; `averta-regular` loaded with three; both aliases. `averta-bold` declared with zero visible uses
- Earlier values removed (sibling list, not promoted into the portable body as tokens): Japanese marketplace custom-property inventory, `#ff333f` red system, `#0095ee` accent, success/error colors, Japanese-first system stack, global 4px-card claim, z-index scale, and easing values from a different historical surface
- Evidence limitations: desktop-only public US marketplace/corporate/directory; no authenticated buying, listing, checkout, shipping, payment, account, or mobile-app screen

Values and forms the sibling carries that the visible source body does not, kept here as corroboration and not promoted into the portable body as new facts:

- Brand-directory subtitle “All brands available on Mercari”
- Coverage count 95; component-variant count 31; interaction count 3
- Exact font CDN path `https://u-web-assets.mercdn.net/assets/fonts/averta/`
- Alias visible-use counts 27 and 3
- RGB writings `rgb(83, 86, 238)`, `rgb(34, 34, 34)`, `rgb(255, 255, 255)`, `rgba(0, 0, 0, 0)`
- Selector `truste-button1`
- Artifact path `artifacts/reference-evidence/mercari.json`
- Removed-history hexes `#ff333f` and `#0095ee`
- Method/pipeline strings `spec/verification-pipeline.md`, `omd:add-reference` UPDATE

Hex values those RGB samples convert to (`#5356ee`, `#222222`, `#ffffff`, `#000000`) are already in the source body.

## Capture selectors

| Component | Pointer |
|---|---|
| Marketplace sell action | `home::[data-omd-capture="12"]` |
| Circular icon action | `home::[data-omd-capture="6"]` |
| Listing image shell | `home::[data-testid="AnonCardImage"]` |
| Marketing sell action | `surface-2::[data-omd-capture="11"]` |
| Header text action | `surface-2::[data-omd-capture="7"]`; hover/pressed `::state-hover` / `::state-pressed` |
| Skip link | `home::[data-omd-capture="3"]`; identical focus `::state-focus` |

## Byte-form notes

- The source frontmatter records line heights as unitless ratios (`body` 1.43, `header-action` 1.38, `marketing-display` 1.2). They are carried as ratios in the portable body, never converted to a single px form (A1a). The source itself also writes 20px, 22px, and 57.6px; both forms stay.
- Body tracking `-0.16px` is a YAML field; it is carried on the Public body/link row.
- The source frontmatter records spacing and radius steps unitless (`xs: 4` … `xl: 20`; `none: 0`, `compact: 4`, `image: 8`, `circular: 50`). The portable body keeps both the unitless steps and the px / 50% forms the visible sections use.
- Frontmatter `primary_color` is `#5356ee`, the same byte form as `tokens.colors.public-action`.
- YAML `family.sans` is `Averta`.
- YAML primitive types: `marketplace-sell-action` / `marketing-sell-action` / `marketing-skip-link` are `button`; `listing-image` is `card`. Those types stay on those components only (A1b). Circular icon action and header text action have no YAML primitive type; none is invented.

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| §13 Personas — two entries | whole section | Source labels them non-factual design archetypes. Not promoted to verified tasks and not re-hosted in a sidecar. Role-need sentences, device/location/frequency fields, and biographies are dropped and are deliberately not restated here (D2, D2a). |
| §9 Agent Prompt Guide | whole section | Tool-facing copy-paste prompt and restatements of rules stated elsewhere. Checked value by value before deletion: see the next paragraph. |
| Unsourced motion curve | none present | The source promotes no duration, curve, or reduced-motion token. There is no template cubic-bezier to omit. The B3 promotion condition is kept in the portable body. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped, or was moved into a receiving slot. Near-white canvas / `#222222` reading text / `#5356ee` observed action/link color — Semantic color. Averta when it can actually load — Typography Family. Compact 4px action radius and 8px listing-image radius — Shape + components. `For a public US Mercari web concept only` — Experience Scope. Do not generate a mobile marketplace flow, checkout, payment, seller workflow, status system, or Japanese-product design from this reference — Experience Avoid (unique §9 bound; receiving slot). The second clause of that source sentence, `the supplied evidence does not establish them`, is on the same Avoid bullet.

## Claim ledger

Claims use YAML anchors from the source: `live` = home / home-live / live-inspect / 2026-07-12; `about` = surface-2 / about-live / live-inspect / 2026-07-12.

| claim | surface |
|---|---|
| `tokens.colors.public-action` / `canvas` / `foreground` / `muted` | live |
| `tokens.typography.family.sans` | live |
| `tokens.typography.body.size` / `weight` / `lineHeight` / `tracking` / `use` | live |
| `tokens.typography.header-action.size` / `weight` / `lineHeight` / `use` | about |
| `tokens.typography.marketing-display.size` / `weight` / `lineHeight` / `use` | about |
| `tokens.spacing.xs` / `sm` / `md` / `lg` / `xl` | live |
| `tokens.rounded.none` / `compact` / `image` / `circular` | live |
| `tokens.shadow.none` | live |
| `tokens.components.marketplace-sell-action.*` | live |
| `tokens.components.marketing-sell-action.*` | about |
| `tokens.components.marketing-skip-link.*` | live |
| `tokens.components.listing-image.*` | live |
| Mission / circulation / neighborly-safe-legal voice | marketplace-principles + marketplace-guidelines + listing-guide (narrative, not tokens) |

## Proof notes

- verification_v2 schema 2; conflicts: []
- Three public US web surfaces, recorded 2026-07-12. Computed interface values in the source body attach to `https://www.mercari.com/`, `https://www.mercari.com/about/`, and `https://www.mercari.com/us/brand/`.
- `components_harvested: true`; four YAML component records plus two source-body-only controls (circular icon action, header text action).
- Uncaptured empty/loading/error/success/skeleton/disabled treatments are omitted as values; they are not turned into `not-applicable` for lack of capture. Applicability follows control role. State coverage is not claimed complete.
- Generic focus on the skip-link is an identical snapshot; it is not promoted as a `focus-visible` treatment (B1).
- Mercari publishes no first-party design-system documentation in the source (getdesign silent; refero silent). Derived-editorial qualifications therefore close with the toss-form: not Mercari-authored or a separately published UI specification (rulebook v12 B2a). Official marketplace principles and US guidelines are Mercari-authored operational material, not a UI specification; the portable body keeps that distinction.
- Founding dates, expansion history, and Japanese-app claims are source-stated as not re-established; they stay unnamed rather than invented.

## Derived editorial inventory

Every passage in the portable `DESIGN.md` that carries the derived-editorial qualification. The qualification itself stays in the body; this table is an index, not its home. Measured against `DESIGN.md` with `grep -o 'derived editorial implementation inference' … | wc -l` (file-level, not `grep -c`): **23**. This table has **23** data rows (E1 1:1). The same 23 lines also carry `not Mercari-authored` and `separately published UI specification`. Wave 45 E1: the previous header `| Portable location | Qualified material |` was counted as a 24th ledger row by `check-limiter-ledger.mjs` because its first cell was not a skipped header token; the 23 data rows already matched the 23 complete body sites. No data row was merged or deleted. No body limiter was added.

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience — Scope ¶2 | Treating the three URLs as token surfaces, keeping the three chrome domains separate, and keeping values attached to the surface that established them |
| Experience — Scope ¶3 | Compact / type-led reading; shared typography as public-web evidence not authenticated-system proof |
| Experience — Scope ¶4 | Guidelines-as-operational-expression; listing-guide-as-peer-to-peer turn; narrative-not-token classing |
| Experience — Primary tasks | The step from listing-guide / capture work to “primary tasks” |
| Experience — Audience | The step from official buyer/seller framing to an audience grouping |
| Experience — Distinctive traits | Grouping the Key Characteristics list |
| Experience — Principles | The *UI implication* attached to each of the three Mercari-authored stems |
| Experience — Application rules | Grouping the Do list as application rules, and their rationales |
| Experience — Avoid | The rationales in the Don’t list and the Agent Prompt Guide brand constraint |
| Foundations — Semantic color | Characterizing phrases attached to roles; catalog `primary_color` is the same hex and the capture does not establish a universal filled CTA from that identity field |
| Foundations — Spacing | Keeping unitless steps beside the px cluster; refusing a product-grid promotion |
| Foundations — Shape | Local-not-universal reading of 4px / 8px / circular geometry |
| Foundations — Elevation | Flat treatment for observed elements only |
| Typography — Font evidence / Outside these captures | Naming only the three source-established routes as the capture boundary |
| Typography — Family | Canonical-only-because computed visible use and loaded FontFace/source agree on the three supplied public US routes; substitution ban (do not label a system face Averta) |
| Typography — Type roles | Keeping unitless ratios as ratios; refusing a universal type scale |
| Typography — Assets / logo | Classing the github-slug logo as an identity pointer rather than a Mercari-hosted brand file |
| Typography — Assets / Foundry5 | Treating Foundry5 as publisher context, not a Mercari-owned type family |
| Components — Capture record | Every kind verdict, every applicability verdict, and each Reason cell |
| Layout & Platforms | Reading component heights as desktop-capture measurements, not a cross-viewport specification |
| Content & Locales | Voice characterization and the tone table |
| Content & Locales | Limiting voice samples to the three quoted public lines rather than expanding them into an authenticated-product copy specification |
| Governance — Recorded unresolved decisions | Framing the list as source-opened values, not newly named domains |

## Hex role splits (same byte, different roles)

Recorded so this ledger matches the portable body (E1). Body roles are not rewritten.

- `#ffffff`: Foundations Canvas (`tokens.colors.canvas`); Marketplace sell action Background (`tokens.components.marketplace-sell-action.bg`); Marketing sell action Text (`tokens.components.marketing-sell-action.fg`); Skip link Text (`tokens.components.marketing-skip-link.fg`).
- `#5356ee`: catalog `primary_color` / Foundations Public action/link (`tokens.colors.public-action`); Marketing sell action Background; Skip link Background; Header text action hover/pressed Text.
- `#222222`: Foundations Foreground (`tokens.colors.foreground`); Marketplace sell action Text; Header text action Text.
