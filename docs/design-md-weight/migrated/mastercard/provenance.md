# Mastercard provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, evidence grading, and omission record for the Core v2 migration of `web/references/mastercard/DESIGN.md`. The canonical source remains that file until catalog adoption. This file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | mastercard |
| name | Mastercard |
| country | US |
| category | fintech |
| homepage | `https://www.mastercard.com` |
| primary_color | `#EB001B` |
| logo.type | simpleicons |
| logo.slug | `mastercard` |
| omd format (source) | 0.1 |
| verified | 2026-06-06 |
| added | 2026-06-06 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

`tokens.source: prose-derived` is this identity/Claim ledger only as a YAML key (A1c). The portable body does not contain the string `prose-derived`. Portable Scope restates the source HTML comment in plain language: homepage WebFetch returned HTTP 403, so live-DOM token extraction was not possible; neutral scale, button/card/input geometry, and elevation are editorial syntheses.

Catalog `homepage` `https://www.mastercard.com` is dual: this identity table and portable Experience Scope (E2a). Catalog `primary_color` `#EB001B` is dual: this identity table and portable Scope / Semantic color / Brand Badge / Primary (Red) (E2a). YAML `tokens.colors.primary` `#141413` is a different path and stays unmerged from catalog `primary_color`. Logo `type: simpleicons` / `slug: mastercard` is dual: this identity table and portable Typography & Assets (E2a). `components_harvested: true` is this ledger only (A1c). YAML has no `ds.name` / `ds.url` / `ds.type` field; the absence is recorded, not filled.

**Token note from the source HTML comment**, quoted:

> Neutral scale, button/card/input geometry, and elevation are editorial syntheses consistent with Mastercard's public marketing surfaces (white/near-white surfaces, dark-led CTAs, red as accent) — homepage WebFetch returned HTTP 403, so live-DOM token extraction was not possible; values are grounded in brand-guideline color/type facts plus standard fintech-marketing layout conventions.

Brand colors EB001B / FF5F00 / F79E1B: Mastercard Brand Center / brandcolorcode.com and the task brief, as the same comment records. Typeface: customized cut of FF Mark, referenced in brand guidelines as the corporate type.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-06-06 |
| added | 2026-06-06 |
| sibling inspected | 2026-06-06 |
| tokens.extracted | 2026-06-09 |

Conflicts unresolved: the source's visible Tier 1 line claims live DOM getComputedStyle on `https://www.mastercard.com`; the source HTML comment records HTTP 403 and editorial synthesis of neutrals/geometry/elevation; YAML grades tokens `prose-derived`; the sibling records different live samples (held below). The portable body states that conflict and does not choose.

There is no **Verified:** footer date string in the source body beyond YAML `verified: "2026-06-06"` and the sibling heading date. The visible source has a Tier 1 sources line naming `https://www.mastercard.com`.

## Sibling verification file (E2)

`web/references/mastercard/.verification.md` was read and **adopted as evidence grading only**. Confirmed with `find web/references/mastercard -type f`, because a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input, so nothing in it was used to establish a portable body fact that the source body does not already record.

**Method, quoted from the sibling:** playwright getComputedStyle (live DOM) on the production site; inspected 2026-06-06; source `https://www.mastercard.com`.

### Sibling-only values — held here, not promoted into the portable body

| Value | Sibling record | Why it stays here |
|---|---|---|
| body text color `#000000` | live www.mastercard.com body text | Source body writes charcoal as `#1A1A1A` / `#141413` and canvas as `#FFFFFF`. `#000000` in the source body is Primary (Dark) Active/Pressed, not canvas or body text. |
| page background `#000000` | live www.mastercard.com page background | Source body writes Pure White `#FFFFFF` as page background. |
| root background `#000000` | live www.mastercard.com root background | Same as page background. Not promoted as canvas. |
| heading color `#000000`, font 32px / 700, family Times | live www.mastercard.com heading | Source body writes Heading 1 as Mark 32px / 700 / `#141413`. Family Times is sibling-only. |
| body font 16px, family Times | live www.mastercard.com body text | Source body writes Body Large as Mark 16px / 400. Size 16px exists independently in the source body; the Times family attribution does not. |
| "DESIGN.md token roles were reconciled against these measurements" | sibling Tier 2 sentence | The source body tokens (white canvas, Mark, charcoal) do not match these samples. The sentence is a sibling claim, not a portable reconciliation. |

These sibling-only strings are named as sibling-only. This file does not assert that they are absent from itself.

## Evidence class

| Domain | Surface | What it establishes | What it does not establish |
|---|---|---|---|
| Named public site | `https://www.mastercard.com` | The catalog homepage and the named first-party surface | A closed live-computed token sheet (visible Tier 1 live-DOM sentence and HTML-comment 403 remain in conflict) |
| Brand Center / brandcolorcode.com | cited in the source HTML comment | Interlocking-circles colors `#EB001B` / `#FF5F00` / `#F79E1B` (2016/2019 Pentagram mark) | Component geometry, neutrals, elevation, motion curves |
| Brand guidelines (type) | cited in the source HTML comment | Customized cut of FF Mark as corporate type ("Mastercard Mark") | A public redistribution license or a loadable webfont |
| Source body YAML + prose | `tokens.source: prose-derived` | Machine-token keys and the prose values as the source wrote them | Live-computed confirmation of neutrals, radii, shadows |
| Source HTML comment | same file | Editorial-synthesis bound on neutrals/geometry/elevation; interpretive claims not documented Mastercard statements | Permission to promote those syntheses as live tokens |
| Sibling live inspect | `.verification.md` | Raw samples listed above | Portable canvas, family, or ink tokens |
| Public history | source §11 | 1966 Interbank / Master Charge, 1979 name, 2006 IPO, Pentagram 2016 / 2019, Priceless 1997, sonic branding, Touch Card | Interface tokens |

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | named-public-site | https://www.mastercard.com | 2026-06-06 (sibling date; HTML comment records HTTP 403 on WebFetch) |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-named | product-surface | https://www.mastercard.com | 2026-06-06 |
| brand-center | official-doc (colors) | Mastercard Brand Center (cited, no URL in source) | cited in source HTML comment |
| brandcolorcode | third-party corroboration | brandcolorcode.com (cited, no full URL in source) | cited in source HTML comment |

### Tier 1

- https://www.mastercard.com (live production site, as the source's visible Tier 1 line writes it: verified via live DOM getComputedStyle). The HTML comment on the same file records HTTP 403 on homepage WebFetch.

### Tier 2

No Tier 2 URL is named in the source body. The sibling's Tier 2 section restates its own live samples as source of truth; those samples stay in the sibling-only table above. No Tier 2 value was promoted into the portable body.

## Claim ledger

| claim | surface | portable destination |
|---|---|---|
| tokens.colors.primary `#141413` | home-named / prose-derived | DESIGN.md Foundations Semantic color Deep Charcoal |
| tokens.colors.primary-hover `#333333` | home-named / prose-derived | DESIGN.md Semantic color Gray 700 · Primary (Dark) hover |
| tokens.colors.brand `#EB001B` | Brand Center / prose-derived | DESIGN.md Semantic color Mastercard Red |
| tokens.colors.brand-hover `#C8001A` | prose-derived | DESIGN.md Semantic color Brand hover · Primary (Red) hover · Tertiary hover |
| tokens.colors.accent-yellow `#F79E1B` | Brand Center / prose-derived | DESIGN.md Semantic color Mastercard Yellow |
| tokens.colors.accent-orange `#FF5F00` | Brand Center / prose-derived | DESIGN.md Semantic color Mastercard Orange |
| tokens.colors.canvas `#FFFFFF` | prose-derived | DESIGN.md Semantic color Pure White |
| tokens.colors.surface `#F7F7F7` | prose-derived | DESIGN.md Semantic color Gray 50 |
| tokens.colors.foreground `#141413` | prose-derived | DESIGN.md Semantic color Deep Charcoal |
| tokens.colors.body `#5A5A5A` | prose-derived | DESIGN.md Semantic color Gray 600 |
| tokens.colors.muted `#767676` | prose-derived | DESIGN.md Semantic color Gray 500 |
| tokens.colors.placeholder `#999999` | prose-derived | DESIGN.md Semantic color Gray 400 · Text Field placeholder |
| tokens.colors.hairline `#E0E0E0` | prose-derived | DESIGN.md Semantic color Gray 200 · Border Default |
| tokens.colors.border-strong `#CCCCCC` | prose-derived | DESIGN.md Semantic color Gray 300 · Border Strong |
| tokens.colors.on-primary `#FFFFFF` | prose-derived | DESIGN.md Semantic color on-primary |
| tokens.colors.success `#008A00` | prose-derived | DESIGN.md Semantic color Success Green |
| tokens.colors.error `#EB001B` | prose-derived | DESIGN.md Semantic color Error Red |
| tokens.colors.info `#1A73E8` | prose-derived | DESIGN.md Semantic color Info Blue |
| tokens.typography.family.sans `Mark` | brand guidelines / prose-derived | DESIGN.md Typography Family |
| tokens.typography.family.mono `SF Mono` | prose-derived | DESIGN.md Typography Family monospace |
| tokens.typography.display-hero / display-large / heading-1 / heading-2 / heading-3 / subtitle / body-large / body / caption / button / eyebrow | prose-derived | DESIGN.md Type roles |
| tokens.spacing.xs–hero (4, 8, 12, 16, 24, 32, 48, 64, 96) | prose-derived | DESIGN.md Foundations Spacing |
| tokens.rounded.sm / md / lg / full (4, 8, 16, 9999) | prose-derived | DESIGN.md Foundations Shape |
| tokens.shadow.subtle / raised / elevated / overlay | prose-derived | DESIGN.md Foundations Elevation |
| tokens.components.button-primary.* | prose-derived | DESIGN.md Components Primary (Dark) |
| tokens.components.button-red.* | prose-derived | DESIGN.md Components Primary (Red / Brand) |
| tokens.components.button-secondary.* | prose-derived | DESIGN.md Components Secondary (Outline) |
| tokens.components.button-tertiary.* | prose-derived | DESIGN.md Components Tertiary (Text / Link) |
| tokens.components.input.* | prose-derived | DESIGN.md Components Text Field |
| tokens.components.input-error.* | prose-derived | DESIGN.md Components Text Field (error) |
| tokens.components.search.* | prose-derived | DESIGN.md Components Search |
| tokens.components.card.* | prose-derived | DESIGN.md Components Standard Card |
| tokens.components.card-elevated.* | prose-derived | DESIGN.md Components Elevated / Featured Card |
| tokens.components.card-stat.* | prose-derived | DESIGN.md Components Stat / Data Card |
| tokens.components.badge-brand.* | prose-derived | DESIGN.md Components Brand Badge |
| tokens.components.badge-neutral.* | prose-derived | DESIGN.md Components Neutral Tag |
| tokens.components.badge-success.* | prose-derived | DESIGN.md Components Success Badge |
| tokens.components.tab.* | prose-derived | DESIGN.md Components Underline Tabs |
| tokens.components.alert.* | prose-derived | DESIGN.md Components Inline Alert |
| tokens.components.dialog.* | prose-derived | DESIGN.md Components Modal |
| tokens.components.toggle.* | prose-derived | DESIGN.md Components Switch |

## Proof notes

- No `verification_v2` schema field in the source YAML (A1c: absence recorded, not filled)
- `components_harvested: true`
- `tokens.source: prose-derived`; extracted 2026-06-09
- Source HTML comment: interpretive claims (e.g. "the overlap is the value", "red is precious") are editorial readings, not documented Mastercard statements
- Unattributed cubic-bezier values are omitted as promoted tokens; names, Use writings, durations, and signature motions stay in portable Foundations
- Uncaptured paint-on-button error/success treatments are omitted. Destination-link / tab / toggle loading/error/success are `not-applicable` for a role reason. State coverage is not claimed complete
- Source never records the token `focus-visible`. Focus (keyboard) stays in the capture table. `focus-visible` rows are applicable with visual treatment omitted (B1)
- Mastercard Brand Center is cited for interlocking-circles colors, not as a component UI specification

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 페르소나 3인 (이름·나이·도시 포함) | Deleted. The source labels them fictional archetypes informed by publicly described global-payments user segments, not individual people. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motives, or affiliation labels (D2, D2a). |
| §15 unattributed cubic-bezier curves as promoted tokens | Omitted from Foundations as promoted values. Exact source writings remain quoted in portable Motion and Named gaps (`ease-enter` / `ease-exit` / `ease-standard` match the legacy spec-template examples; `ease-brand` is source-stated and also unattributed). Names, Use pairings, durations, and signature motions stay in DESIGN.md. |
| §9 Agent Prompt Guide — tool-facing prompt sentences | Deleted. Tool-facing copy-paste prompts and iteration restatements. Brand constraints they restated (dark primary, red as accent, Mark stack, red→orange→yellow, radius 8/12/16/24, quiet shadows) are already in Experience / Foundations / Components. §9-only values that had a receiving slot (hero eyebrow `#EB001B`; stat-card label 14px/400 `#767676` uppercase eyebrow) were moved to Type roles / Stat card. |

## Derived editorial inventory

Portable `DESIGN.md` carries 24 complete B2a qualifications. This table is 24 data rows. Preamble sentences on this page are not portable qualifications.

| # | Portable location | Qualified reading |
|---|---|---|
| 1 | Experience — Scope ¶1 | Named surface; catalog `primary_color` unmerged from `tokens.colors.primary`; Brand Center as color-and-mark evidence not a component UI spec; refusal to choose between the live-DOM footer sentence and the HTTP 403 editorial-synthesis comment |
| 2 | Experience — Scope ¶2 | institutional-but-warm; system deliberately quiet so the symbol can carry the brand weight; red not a UI workhorse; most-fintechs brand-blue contrast |
| 3 | Experience — Scope ¶3 | Founding-to-Priceless narrative as context that does not supply tokens; "the overlap is the value" as the source's own narrative sentence |
| 4 | Experience — Primary tasks | Selecting the three CTA / search / confirmation tasks; they do not come from the persona section |
| 5 | Experience — Audience | Dropping fictional archetypes; reading source-named consumers, merchants, banks, governments, businesses and the global multilingual all-ages audience as the audience |
| 6 | Experience — Distinctive traits | Classifying the Key Characteristics list as a restatement and grouping |
| 7 | Experience — Principles | Eight numbered items as editorial readings; HTML-comment bound that they are not documented Mastercard statements |
| 8 | Experience — Application rules | Do list as source-stated rules |
| 9 | Experience — Avoid | Don't list as source-stated prohibitions |
| 10 | Foundations — Semantic color | Pairings and unmerges (`primary_color` / `tokens.colors.primary`; `#1A1A1A` / `#141413`; `#FFFFFF` canvas / on-primary same-hex jobs; `#141413` primary / foreground same-hex jobs; Error `#EB001B` / `#D11124`; Warning Amber job / Yellow brand job); Gray 100 (`#F0F0F0`) as a §2 scale writing, not a YAML colors key; Gray scale as editorial synthesis |
| 11 | Foundations — Spacing | YAML unitless keys unmerged from §5 px writings and from type/radius jobs |
| 12 | Foundations — Shape | Comfortable 12px unmerged from `tokens.rounded.lg: 16`; YAML `full: 9999` unmerged from Search `24px (pill)` and Neutral Tag `16px (pill)` |
| 13 | Foundations — Elevation | Shadow philosophy as editorial synthesis; modal backdrops a flat scrim, not blurred |
| 14 | Foundations — Motion | Durations / easing names / Use pairings / signature motions as source-stated; four cubic-bezier writings as unattributed |
| 15 | Typography — Font evidence | Evidence-class table rather than a published type specimen; Brand Center not a loadable Mark file; Helvetica Neue not Mark |
| 16 | Typography — Family | Mark / FF Mark / MarkPro as named UI family; two fallback stacks as fallbacks; SF Mono on data/code |
| 17 | Typography — Type roles | Unitless YAML line heights unconverted; YAML `use` verbatim; heading-2 24 off spacing lg 24; body-large 16 off spacing base 16; Display Hero 56 off a spacing step; §9 hero eyebrow `#EB001B` as a §9-only value, not a YAML color key |
| 18 | Typography — Type principles | Geometric-clarity / three-working-weights / uppercase-eyebrows / restraint-with-size-jumps / number-legibility as source-stated type rules |
| 19 | Typography — Assets | simpleicons slug as identity metadata rather than a first-party mark file |
| 20 | Components — Capture record | Every interactive-kind verdict and applicability verdict; omission of kind/map for non-interactive badges, stat card, and alert container |
| 21 | Layout & Platforms | Max-width, 12-column grid, mark clear-space, editorial-versus-product-density, breakpoint table as source-stated rather than live-computed harvest |
| 22 | Content & Locales | Voice table and forbidden-pattern paragraph as source-stated register rather than a published microcopy specification |
| 23 | Components — Standard Card | §9-only feature-card writings kept on this card rather than dropped or merged into a YAML color key |
| 24 | Content & Locales — locale omission | Locale number/date/address/script rules left unnamed rather than synthesized |
