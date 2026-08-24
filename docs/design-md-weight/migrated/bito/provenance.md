# Bito provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/bito/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | bito |
| name | Bito |
| country | TW |
| category | design-tools |
| homepage | https://bito.tv/ |
| primary_color | `#f92c16` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=bito.tv&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-17 |
| added | 2026-06-17 |
| components_harvested | true |

Token note from source: `Studio-as-reference (motion-design / branding studio, like Goodpatch). Stark editorial portfolio: pure black ink (#000000) on white canvas (#ffffff), 0px-radius everywhere, no shadows. Signature warm accent = Bito red-orange family (#f92c16 / #ff5529 / #e74118) used as full-bleed project-tile backgrounds; electric blue (#4419fe) as secondary accent. Type = neue-haas-unica (Latin) + Noto Sans TC (Traditional Chinese).` Dual destination (E2a): this ledger and portable Experience Scope (same note plus the adjacent register-split / derived editorial implementation inference / not-Bito-authored or a separately published UI specification limiter).

Catalog logo type `favicon` / Google s2 slug URL `https://www.google.com/s2/favicons?domain=bito.tv&sz=128` is this identity ledger only. Portable Typography & Assets states a Google-favicon identity-boundary sentence without the URL (E2a). It is not a captured first-party mark. No portable Named-gaps row was invented for a first-party logo-file absence.

Catalog homepage exact `https://bito.tv/` (trailing slash, matching YAML) is multi-destination: Experience Scope 9/11 + Primary tasks 33 + Content Observed 456/458 + this identity ledger + Surfaces/Sources/Tier 1 (E2a). Live-inspect project URL `https://bito.tv/work/148/The-60th-Golden-Horse-Awards-Branding` is dual Scope 11 + this surfaces/Tier 1 ledger (E2a). Path `/work/148` also appears in Primary tasks 34 and Content Observed 457.

Catalog `primary_color` `#f92c16` is identity metadata + portable Scope token-note 13 + Scope atmosphere 19 + Distinctive 44/53 + Principles 61 + capture-bound Do 69 (Avoid has no `#f92c16` hex) + Foundations Bito Red-Orange / Semantic unmerged-role 95/99 + Elevation color-field 148/152 + Warm Project Tile Background 301 / field note 306. It is not a button or link. Named gaps has no hex.

`tokens.source: live-extract`, `added: 2026-06-17`, and `components_harvested: true` are this ledger only (A1c). YAML has no `ds.type`.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-06-17 |
| added | 2026-06-17 |
| tokens.extracted | 2026-06-17 |
| live inspect (playwright getComputedStyle) | 2026-06-17 |
| Observed voice samples | 2026-06-17 |
| footer Verified | 2026-06-17 |

Conflicts unresolved: none (source footer). Preserved value pairs inside the reconstruction: `#f92c16` catalog primary / warm-tile fill vs `#ff5529` vs `#e74118` vs `#ff2700`; `#4419fe` vs `#126dff` vs `#fb76ff` vs `#166b22`; Ink `#000000` vs Dark Project Tile fill `#000000`; Canvas `#ffffff` vs YAML `on-accent` `#ffffff` vs Contact Footer Block local link `#ffffff`; Mid Grey `#707070` vs Faint Grey `#bebebe` vs Hairline `#e2e2e2`; YAML line-height ratios `1.50` / `1.20` vs body-table 42px / 28.8px / 19.2px / 24px; 28px (1.75rem) / 24px (1.50rem) / 16px (1.00rem) rem/px pairs; YAML spacing unitless xs 4 / sm 8 / md 16 / base 24 / lg 32 / xl 40 / section 96 vs body 4px–96px; header 32px 40px / 96px vs Work tile 1440px / 668px; YAML `type: tab` vs `card` vs `badge` vs `listItem`; YAML Footer Link ink `#000000` vs Contact Footer Block local white `#ffffff` on parent `#e74118`. Both sides of each pair stay in portable Foundations, Typography, Components, or Layout. Neither is chosen.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | portfolio-home | https://bito.tv/ | 2026-06-17 |
| project-148 | project-page | https://bito.tv/work/148/The-60th-Golden-Horse-Awards-Branding | 2026-06-17 |

YAML homepage identity is `https://bito.tv/` (trailing slash). Portable Scope catalog identity uses that exact literal. Surfaces/Tier 1 home row uses the same form from the source footer (E2a).

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://bito.tv/ | 2026-06-17 |
| project-148-live | product-surface | https://bito.tv/work/148/The-60th-Golden-Horse-Awards-Branding | 2026-06-17 |

### Tier 1

- https://bito.tv/ — home — nav, Work grid, project tiles, footer
- https://bito.tv/work/148/The-60th-Golden-Horse-Awards-Branding — project page — H3 title, Credits label, accent tiles

Home / project URLs are dual-destination with portable Experience Scope (E2a).

Live-observed values (HTML comment, 2026-06-17):

- nav (Work/News/About/Bitween): Neue Haas Unica 16px/400, black
- Work grid full-bleed tiles: `#f92c16` / `#ff5529` / `#e74118` / `#4419fe` / `#000000`
- filter labels Genre/Service/Sector 24px/500
- faint-grey `#bebebe` tags
- footer "© Bito 2026 — Taipei, Taiwan · info@bito.tv"
- `box-shadow: none`, 0px radius
- project H3 title 28px/500, "Credits" label 24px/500
- accent tiles `#f92c16` / `#e74118` / `#4419fe`

### Tier 2 (no usable record)

- getdesign.md/bito — not listed (studio, not in catalog)
- styles.refero.design ?q=bito — no matching style page

### Narrative (not interface tokens)

- Bito (滿滿大平台) is a Taipei, Taiwan motion-design / branding studio. Dual portable Scope 9 + this ledger (E2a). The Chinese name is not at Scope 23.
- Live project title “The 60th Golden Horse Awards Branding” on `/work/148`. Dual portable Scope + Primary tasks + Type roles + Content Observed (E2a).
- Source HTML comment: Golden Horse Awards identity, Taiwan Lantern Festival, and public/cultural commissions confirmed by the live Work index project titles. Broader studio history is general public knowledge, not quoted from a verified Bito statement this turn. Dual portable Scope (under adjacent complete B2a, narrative rather than interface tokens) + this ledger (E2a).
- Source §11 records that Golden Horse work includes visual identity and title sequences, performed across multiple editions, for Taiwan’s premier film awards, and also names Taipei Metro brand films, tourism rebrandings, and government/cultural campaigns under that same public-knowledge class. Dual portable Scope 23 + this ledger (E2a). **[SUPERSEDED dest 2026-08-24 wave11 sol resubmit — prior Narrative/portable Scope that kept only “known for the Golden Horse Awards identity” without title-sequence / multiple-edition / premier-awards is not current.]**

Voice samples (§10) are verbatim from the live site as inspected 2026-06-17. Dual-destination for the Observed strings and the 2026-06-17 date: portable Content & Locales + this ledger (E2a). Exact “Work / News / About / Bitween” is Content Observed 456 and Top Nav loading reason 265; it is not a Primary tasks 33 string. Related comma/slash forms are Top Nav Role 246 / Use 255 and Type roles Nav Link 207. “The 60th Golden Horse Awards Branding” is Scope 23 + Primary tasks 34 + Type roles 205 + Content Observed 457 (tone table 477 is derived, not this observation class). Full string “© Bito 2026 — Taipei, Taiwan · info@bito.tv” is Content Observed 458 and this ledger’s live-observed footer line; it is not Footer Link Use 388 (email substring only) and not Contact Footer Block 411–412 (Facebook / Instagram / Behance / `info@bito.tv` without the copyright line). Tone table 478 is derived (split “© Bito 2026 — Taipei, Taiwan” / `info@bito.tv`). Derived §10 tone table and forbidden register are not this observation class. “Typography” and “TAIWAN Tourism Rebranding” are derived genre-tone table examples (477 / 479), not live Observed / harvested strings. Portable Observed harvested control strings (459) are EN / 中; Genre, Service, Sector, Credits; Live Action, Event, Ceremony, Branding; Facebook, Instagram, Behance, info@bito.tv. Adjacent complete B2a at Content 465 names those two strings as derived-not-Observed. **[SUPERSEDED dest 2026-08-24 wave11 sol resubmit — prior claim that the full copyright string is also at Footer Link Use, and that Typography / TAIWAN Tourism Rebranding are Observed/harvested, is not current.]**

Interpretive claims (e.g., "the work is the interface", "restraint amplifies craft as a deliberate frame for maximal motion work") are editorial readings connecting Bito's observed, restrained site design to its studio positioning, not directly sourced Bito statements. Portable Principles and Scope atmosphere restate those readings under adjacent complete B2a.

Source §13 fictional archetypes are deleted. Names, ages, cities, occupations, biographies, and persona-derived audience labels are not re-hosted here or in portable Audience (D2). Portable Audience records only a generic exclusion boundary (DESIGN.md 40). **[SUPERSEDED dest 2026-08-24 wave11 final resubmit — four derived audience labels removed; not re-hosted.]**

## Claim ledger

Token extraction is `live-extract` (2026-06-17). `components_harvested: true`. The source does not record `data-omd-capture` selectors or a per-hex Proof map. Footer live-inspect notes attach groups of values to named URLs; they are not a claim-by-claim computed Proof table invented here.

| claim group | evidence class / source-stated surface |
|---|---|
| YAML / body `#f92c16` `#ff5529` `#e74118` `#4419fe` `#000000` tiles, nav 16px/400 black, 0px radius, `box-shadow: none`, footer line | home-live computed style (footer HTML comment) |
| YAML / body project H3 28px/500, Credits 24px/500, accent tiles `#f92c16` / `#e74118` / `#4419fe` | project-148-live |
| YAML `nav-link` type `tab`, `#000000`, `16px / 400 neue-haas-unica`, active ink `#000000` label no underline | YAML + portable Top Nav Link |
| YAML `lang-toggle` type `tab`, `#000000`, `16px / 400 neue-haas-unica` | YAML + portable Language Toggle |
| YAML `project-tile` type `card`, `#f92c16` / `#ffffff` / `0px` | YAML + portable Warm Project Tile; `#ff5529` / `#e74118` variants stay on that tile (A4) |
| YAML `project-tile-dark` type `card`, `#000000` / `#ffffff` / `0px` | YAML + portable Dark Project Tile |
| YAML `filter-label` type `badge`, `#000000` / `0px` / `24px / 500 neue-haas-unica` | YAML + portable Filter Label; Kind+map omitted (C4) |
| YAML `tag-chip` type `badge`, `#bebebe` / `0px` / `16px / 400 neue-haas-unica` | YAML + portable Tag Chip (Inactive) |
| YAML `footer-link` type `listItem`, `#000000`, `16px / 400 neue-haas-unica` | YAML + portable Footer Link (ink `#000000`; not recolored to white-on-orange) |
| §9 contact-footer local composition: full-bleed `#e74118` parent + white `#ffffff` Neue Haas Unica 16px Facebook / Instagram / Behance / `info@bito.tv`, sharp corners, no shadow | portable Contact Footer Block (local recipe). Not YAML Footer Link. Accent Deep named fill is Foundations. |
| YAML unitless `lineHeight` 1.50 / 1.20 | YAML + portable Type roles |
| YAML `family.latin` neue-haas-unica; `family.cjk` Noto Sans TC | YAML + portable Family |
| YAML spacing xs 4 / sm 8 / md 16 / base 24 / lg 32 / xl 40 / section 96 | YAML + portable Spacing |
| YAML `rounded` sm/md/lg/full 0 | YAML + portable Shape |
| YAML `shadow.none` `none` | YAML + portable Elevation |
| §14 empty/loading/error/success/skeleton/disabled rows | source state contract; portable Capture record under adjacent complete B2a on table characterizations |
| §15 durations 120ms/240ms/400ms, easing names, reduced-motion, no-bounce/no-spring | philosophy layer (sections 10–15); portable Motion under adjacent complete B2a |

## Capture selectors

The source does not record `data-omd-capture` selectors. None are invented here.

## Omitted unattributed curves

Exact cubic-bezier values from source §15, omitted from portable Foundations (names kept):

- `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` — matches `spec/omd-v0.1.md` template example `ease-exit`
- `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`

These are unattributed. Duration tokens (`120ms` / `240ms` / `400ms`), easing names, `prefers-reduced-motion: reduce`, and “no bounce or spring on the chrome” remain in portable Motion under the philosophy-layer / source-stated limiter. B3 five-kind per-component computed gate remains on curve / animation-name / transition-property promotion beyond those tables. Named gaps lists the omitted curve names and “all five kinds” without enumerating the five evidence kinds; the B3 full text is Foundations Motion only.

## Omitted §9 construction prompts

§9 Agent Prompt Guide Quick Color Reference, Example Component Prompts, and numbered Iteration Guide are deleted from the portable body (no adapter slot). Verified hexes and harvested geometry in that guide already live in Foundations / Components / Experience capture-bound. Unique §9 contact-footer construction (full-bleed `#e74118` parent, white `#ffffff` Neue Haas Unica 16px Facebook / Instagram / Behance / `info@bito.tv`, sharp corners, no shadow) is portable Contact Footer Block as a local recipe (DESIGN.md 402–414). YAML Footer Link stays ink `#000000` (380–400). Accent Deep `#e74118` remains the named Foundations fill (101). Scatter of deep-orange fill + black Footer Link + Content strings is not tuple preservation. Remaining prompt-only constructions stay omitted here as deleted tool prompts, not as harvested components. **[SUPERSEDED dest 2026-08-24 wave11 sol resubmit — prior “already Accent Deep + Footer Link + Content Observed (A3)” scatter-as-tuple close is not current.]**

## Placeholder omission ledger

No `[FILL IN]` placeholders exist in the source; none are emitted.

## Proof notes

- tokens.source: `live-extract`; `components_harvested: true` preserved (A1c)
- Catalog Google favicon URL is this identity ledger only. URL-free capture-method / not-a-portable-mark sentence → portable Assets only (E2a). Named gaps has no first-party-mark sentence.
- Catalog homepage `https://bito.tv/` is multi-destination: Experience Scope 9/11 + Primary tasks 33 + Content Observed 456/458 + this identity ledger + Surfaces/Sources/Tier 1 (E2a)
- Project URL is dual Scope 11 + this surfaces/Tier 1 ledger (E2a). Path `/work/148` also Primary tasks 34 + Content Observed 457
- `primary_color` `#f92c16` destinations: identity + Scope token-note 13 + Scope atmosphere 19 + Distinctive 44/53 + Principles 61 + capture-bound Do 69 + Foundations Bito Red-Orange / Semantic unmerged-role 95/99 + Elevation 148/152 + Warm Project Tile Background 301 / field note 306. Avoid has no `#f92c16` hex. Named gaps has no hex.
- Token note is dual-destination: Experience Scope + this ledger (E2a)
- YAML unitless `lineHeight` 1.50 / 1.20 preserved as ratios (A1a)
- YAML primitive types tab / tab / card / card / badge / badge / listItem preserved per component (A1b)
- Fictional §13 names/ages/cities/occupations/biographies and persona-derived audience labels are not in this file (D2)
- No current portable claim that project photography/reels/full-bleed fields are “first-party craft content”. Assets 215 records project art/reels/full-bleed fields as not replaceable with invented chrome decoration, without an ownership class.
- Font evidence portable table is live computed surface-use only (188). Official product-use / exclusive distributed family / declared-only / license / specimen-URL absence rows are not current portable claims (D1). Named gaps has no license/specimen row.

## Derived inventory (portable B2a sites)

Adjacent complete B2a (`derived editorial implementation inference` / `not Bito-authored or a separately published UI specification`) on the current portable body: Scope product-story-span 9; two-URL evidence-domain 11; token-note register-split 13; evidence-domain stay-attached / home-Work-grid-not-a-proxy / YAML-interest-craft 15; monastic-plain / chrome-disappears / work-can-shout / classic-agency-move / studio-as-reference / Goodpatch / personality-erupts / energy-leaks / architectural-color-fields / separation-via-whitespace-never-elevation / typography-as-the-other-half-of-the-identity 17 (not type-stays-quiet / gallery-wall / kinetic-imagery — those phrases are not in the adjacent paragraphs); public-history-as-narrative including Golden Horse visual identity and title sequences across multiple editions for Taiwan’s premier film awards 23; craft-first / silent-white-frame / refuses / embraces / posture-as-reason / opposite-silent-frame 25; Primary tasks not-from-§13 31; Audience no-individual-personas / fictional-archetypes-deleted-not-Audience / three-tasks 40 (named group labels are not a current Audience site); Distinctive unmerged-role / surface-measurement 53; numbered Principles 1–5 57; capture-bound reserved-red-orange / secondary-accents-not-buttons / whitespace-separating 65; Avoid named Don’ts 78; Avoid last-bullet white-canvas-is-the-recorded-frame 87; Semantic unmerged-role extras 95; Spacing unitless-versus-px 125; Spacing header-measurement 127; Spacing harvested-control-padding 129; Shape local-geometry / no-radius-scale / not-universal 135; Elevation table Use (limiter precedes table) 143; Elevation divider-not-elevation / extra philosophy 152; Motion philosophy-layer / duration-table Use / easing-table Use / spec-template 156; Motion chrome-stays-calm extras 172; Motion omitted-unattributed-curves-not-promoted 174; Font evidence-class pairing Latin-face-not-CJK-substitute 184 (no-first-party-font-announcement / no-distributed-family / no-declared-only / no-license-invented are not current sites); Family font-use named 190 (no-invented-license-or-specimen-URL is not a current site); Type-rule extras 192; Type-role ratio-versus-size-local 201; Assets Google-favicon 213; Assets project-art-not-replaceable-without-ownership-class 215 (first-party-craft-content is not a current site); Capture graph-not-adopted 222; Capture philosophy-layer extras 224; Capture table characterizations extras 238; C4 / Kind-from-§8 242; Top Nav unmerged / named-variant 257; Top Nav additional named-variant 269; Language Toggle unmerged 283; Warm unmerged-variant 306; Dark unmerged-field 330; Filter unmerged-field 353; Tag Chip unmerged / §14-disabled-not-computed 368; Footer unmerged / listItem / not-white-on-orange 390; Contact Footer local-composition / parent-fill-not-Footer-Link-background / white-on-orange-not-a-rewrite-of-YAML-ink 404/414; Layout negative-space extras 421; Layout measurement-boundary extras 447; Content citation-character 454; Content caption-labels 461; Content §14-not-extra-Observed 463; Content Typography-and-TAIWAN-Tourism-derived-not-Observed 465; Content derived voice extras 469; Content no-synthetic 483. Reconstruction-boundary exemption not used. This ledger does not re-host those sentences.

## Revision 2026-08-24 (wave11 sol resubmit)

F3 was not re-run. Current portable dests grepped after the DESIGN.md body edit:

- Footer tuple: Contact Footer Block 402–414 (`#e74118` parent 408 + white `#ffffff` 16px links 411–412). YAML Footer Link Text remains `#000000` at 386. Accent Deep named fill 101.
- Observed inventory: live nav 456, Golden Horse title 457, full copyright 458, harvested controls 459 without Typography / TAIWAN Tourism Rebranding. Those two strings: derived table 477 / 479 + B2a 465.
- Full copyright string dest: Observed 458 + this file’s live-observed footer line. Not Footer Link Use 388.
- D2: generic deletion only. Portable Audience 40. Persona-derived labels absent from this file.
- No current first-party craft-content claim. Assets 215.
- Golden Horse relation: Scope 23 + Narrative above (visual identity and title sequences, multiple editions, Taiwan’s premier film awards).
- D1 font negatives: absent from portable Font evidence / Named gaps.

SHA-256 `c0be520beb698a941cfb7a737c9a85297937477533b5fa23579d27391e2dc9f5`. `--gate-only` PASS, problems []. `--require-portable-core` exit 0, `portable_core: true`. F3 was not re-run. Not a catalog-adoption claim (E2c).

## Revision 2026-08-24 (wave11 final resubmit)

D2: the superseded note at this file’s §13 paragraph is a generic deletion record only — four derived audience labels removed; not re-hosted. Matches Proof-notes D2 (not in this file) and the wave11 sol resubmit D2 bullet (absent). Portable Audience 40 unchanged. DESIGN.md SHA-256 unchanged `c0be520beb698a941cfb7a737c9a85297937477533b5fa23579d27391e2dc9f5`. F3 was not re-run. Not a catalog-adoption claim (E2c).
