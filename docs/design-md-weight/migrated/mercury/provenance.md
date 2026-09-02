# Mercury provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/mercury/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | mercury |
| name | Mercury |
| country | US |
| category | fintech |
| homepage | https://mercury.com |
| primary_color | `#5266eb` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=mercury.com&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

`tokens.source: prose-derived` is this identity/Claim ledger only as a YAML key (A1c). The portable body does not contain the string `prose-derived`. Portable Scope restates the relation in plain language: YAML records the machine-readable token block as drawn from the document's own prose (extracted 2026-06-09), not as a separate live capture.

`components_harvested: true` is this ledger only as a YAML key (A1c).

Source has no `ds.name` / `ds.url` / `ds.type` / `ds.description` and no `verification_v2`. None is invented here.

Catalog logo type `favicon` / Google s2 slug URL `https://www.google.com/s2/favicons?domain=mercury.com&sz=128` is dual: this identity ledger + portable Typography & Assets (E2a). It is a catalog identity-boundary record, not a captured first-party mark. No Named-gaps row was added for a first-party mark.

Homepage `https://mercury.com` is dual-destination: Experience Scope + this identity/surfaces/Tier 1 ledger (E2a). Catalog `primary_color` `#5266eb` is dual: this identity ledger + portable Foundations Indigo / YAML `primary` (E2a).

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-06-06 |
| added | 2026-06-06 |
| tokens.extracted | 2026-06-09 |
| HTML-comment token grounding | 2026-06-06 via WebSearch + WebFetch |

Sibling file `web/references/mercury/.verification.md` exists (path recorded directly; a dotfile). Inspected 2026-06-06. Method named in the sibling: playwright getComputedStyle (live DOM) on `https://mercury.com`. A5a hand sweep is recorded in `migration-log.md`. Sibling-only samples stay in the Sibling section below; they are not portable facts.

Conflicts unresolved: none as a source footer field. Preserved value pairs inside the reconstruction (neither side chosen) are listed under Recorded conflicts in portable Governance and again below.

## Surfaces

Source has no `verification_v2.surfaces` object. The named live host in source §4 is recorded here without inventing a surface `kind` the YAML does not give.

| id | url | inspected |
|---|---|---|
| mercury-com | https://mercury.com | 2026-06-06 (source §4: live production site, verified via live DOM getComputedStyle; YAML `verified` 2026-06-06) |

The URL is dual-destination with portable Experience Scope (E2a).

## Sibling (`web/references/mercury/.verification.md`)

The sidecar exists. It is a verification note for the 2026-06-06 live inspect, not a second portable token table.

### Sibling-only samples (not portable facts)

These values appear in the sibling and not in the visible source body. They stay on this ledger. They are not portable facts.

- live mercury.com body text: color `#000000`, font 16px, family arcadia
- live mercury.com page background: color `#000000`
- live mercury.com root background: color `#000000`
- live mercury.com heading: font 49.3472px, family arcadiaDisplay
- live mercury.com primary button: border-radius 32px, font 16px / 420
- Method label: playwright getComputedStyle

### Shared with the source body (corroboration, not new portable facts)

`#ededf3` heading/link, `#ffffff` button text, `#5266eb` button background, height 40px, family arcadia, weight 480.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| mercury-live | named in source §4 as live production / live DOM getComputedStyle | https://mercury.com | 2026-06-06 |
| shadcn-token-export | named in source HTML comment as Mercury Design System token export | https://shadcn.io/design/mercury | 2026-06-06 |
| brandfetch | named in source HTML comment as corroborating brand summary | https://brandfetch.com/mercury.com | 2026-06-06 |
| blakecrosley | named in source HTML comment as corroborating brand summary | https://blakecrosley.com/guides/design/mercury | 2026-06-06 |

### Tier 1 (as the source names it)

- https://mercury.com — live production site, verified via live DOM getComputedStyle (source §4). Dual portable Scope + this ledger (E2a).

### HTML-comment grounding (not a second portable token table)

Source HTML comment, Token grounding (verified 2026-06-06 via WebSearch + WebFetch), quoted as the comment writes it:

- Primary indigo `#5266eb`, accents periwinkle `#9cb4e8` / mist `#cdddff`, dark canvas `#171721`, off-white ink `#ededf3`, custom Arcadia 480 weight, 1.625 body line-height, 4px base radius, 40px hero pill — sourced from shadcn.io/design/mercury (Mercury Design System token export) and corroborating brand summaries (brandfetch.com/mercury.com, blakecrosley.com/guides/design/mercury).
- Arcadia / Arcadia Display proprietary typeface family confirmed across multiple brand-design writeups of Mercury.

Brand narrative facts (founding 2017 by Immad Akhund et al., public launch 2019, startup-banking positioning) are widely documented public information.

Interpretive claims (e.g., "indigo chosen as a considered middle between institutional navy and consumer blue") are editorial readings of the design, not documented Mercury statements. Some token values for components, motion, and states are reasoned extrapolations consistent with the verified core tokens where Mercury does not publish a formal public spec.

Those two class sentences are dual-destination with portable Experience Scope (E2a).

## YAML token block (A1c)

Machine-readable keys as the source frontmatter wrote them. Portable Foundations / Typography / Components restate the values with role names; this table is the ledger of the YAML keys.

**colors:** primary `#5266eb`; primary-hover `#4354c8`; primary-active `#3442a6`; periwinkle `#9cb4e8`; mist `#cdddff`; canvas `#171721`; canvas-elevated `#1e1e2a`; canvas-light `#fbfcfd`; surface `#ededf3`; surface-secondary `#f4f5f9`; surface-hover `#dddde5`; ink-subdued `#c3c3cc`; ink-disabled `#70707d`; on-primary `#ffffff`; error `#d03275`; hairline `#272735`.

**typography.family:** sans `Arcadia`; mono `Arcadia Mono`.

**typography roles (YAML):** display-hero size 65 weight 360 lineHeight 1.05 tracking 0.42 use `Marketing hero, Arcadia Display`; display-lg size 48 weight 360 lineHeight 1.10 tracking 0.42 use `Section openers`; heading-lg size 28 weight 480 lineHeight 1.25 use `Feature titles, modal headers`; heading size 22 weight 480 lineHeight 1.30 use `Card headings, sub-sections`; subtitle size 18 weight 420 lineHeight 1.40 use `List headers, nav titles`; body-lg size 17 weight 400 lineHeight 1.625 use `Lead paragraphs`; body size 15 weight 400 lineHeight 1.625 use `Standard reading text`; body-sm size 13 weight 400 lineHeight 1.50 use `Secondary info, dense tables`; caption size 12 weight 420 lineHeight 1.40 use `Metadata, timestamps, labels`.

**spacing:** xs 4, sm 8, md 12, base 16, lg 18, xl 24, xxl 28, section 48.

**rounded:** sm 4, md 4, lg 12, full 9999.

**shadow:** card `0px 1px 2px rgba(23,23,33,0.06)`; elevated `0px 8px 32px rgba(0,0,0,0.4)`; dialog `0px 16px 48px rgba(23,23,33,0.24)`.

**components (YAML type preserved, A1b):** button-primary type button; button-secondary type button; button-ghost type button; email-pill type button; input type input; badge-neutral type badge; badge-accent type badge; card type card; tab type tab; toast type toast; dialog type dialog; toggle type toggle.

## Omitted easing curves (T1-3 constraint 5)

Deletion target is unsourced spec-template curves only. Duration tokens, signature motions, reduced-motion, easing *names*, and the two non-template source curves remain in portable Foundations.

Source §15 writings, kept here as the omission ledger (not promoted as portable tokens):

- `ease-exit` curve as the source wrote it: `cubic-bezier(0.4, 0, 1, 1)` — matches `spec/omd-v0.1.md` example `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`.
- `ease-standard` curve as the source wrote it: `cubic-bezier(0.4, 0, 0.2, 1)` — matches `spec/omd-v0.1.md` example `ease-standard` `cubic-bezier(0.4, 0.0, 0.2, 1)`.

Portable Foundations keeps the names `ease-exit` / `ease-standard` and the Use column, and records the omission. Dual: this ledger + portable Motion table / Named gaps (E2a).

Kept in portable (source-stated; HTML-comment class = reasoned extrapolation, not computed CSS):

- `ease-enter` `cubic-bezier(0.16, 1, 0.3, 1)`
- `ease-glide` `cubic-bezier(0.22, 0.61, 0.36, 1)`

## Omission ledger (D2 / D2a)

Source §13 carries 3 fictional archetypes (names, ages, cities, motivations, and affiliation classifications included). They are marked in the source as fictional archetypes informed by publicly described startup-customer segments, not individual people. Deleted with §13. Not promoted into Experience Audience or Primary tasks. Not re-hosted in this file even as names, cities, motivations, or affiliation classifications.

Mention of that deletion is this unidentified count and field-kind only. This paragraph names the source section and the dropped field kinds. It does not assert that those strings are absent from a file that is currently listing them.

## Claim ledger

YAML color / type / spacing / radius / shadow / component keys above. Portable restates the values under Foundations, Typography & Assets, and Components & States. HTML-comment verified-core list is dual with portable Scope (E2a).

## Derived editorial inventory

Portable `DESIGN.md` carries 32 complete B2a qualifications. This table is 32 data rows. Preamble sentences on this page are not portable qualifications.

| # | Portable location | Qualified reading |
|---|---|---|
| 1 | Experience Scope ¶2 `:11` | Two source-named surface registers as this contract's coverage; marketing-canvas value not a proxy for the product dashboard; product-dashboard value not a proxy for marketing |
| 2 | Experience Scope ¶3 `:13` | Three named sources as separate evidence domains; third-party token export not merged into a Mercury-authored specification; HTML-comment class split (verified core vs source-stated reconstructions, not live-computed promotions) |
| 3 | Experience Scope narrative `:17` | Founding and stack facts as narrative context, not interface tokens |
| 4 | Experience Scope atmosphere `:19` | Atmosphere and causal readings (quiet confidence, cinematic middle, light/dark duality, restraint and taste, founding thesis in the design) |
| 5 | Primary tasks `:29` | Selecting the three source-stated product jobs as Primary tasks; not lifting tasks from source §13 fictional archetypes |
| 6 | Audience `:38` | Restricting Audience so those archetypes are not Audience and are not primary tasks; group-level founders and operators |
| 7 | Distinctive traits `:42` | Grouping the recorded Key Characteristics as the distinctive layer |
| 8 | Principles `:54` | The eight numbered items and their UI implications |
| 9 | Recorded application rules `:67` | The eight Do rules copied from source §7 |
| 10 | Avoid `:80` | The seven Don't rules copied from source §7 |
| 11 | Foundations Semantic color `:96` | Shared-hex roles unmerged (surface vs Ink Default; canvas-elevated vs Ink Emphasized; ink-subdued vs Hairline Subdued; primary-active vs unresolved success); `#ffffff` unmerged across on-primary, card.bg, dialog.bg, Product Card, Centered Modal, toggle thumb, Top Nav link hover; button-primary `fg` stays on that control |
| 12 | Foundations Error `:125` | Rose rather than fire-red as an editorial reading; hex recorded |
| 13 | Foundations Success `:126` | Source reconstruction note, not a Mercury-authored success token; no single success hex promoted |
| 14 | Foundations Neutral notes `:133` | Narrow cool ramp; no warm grey; faint blue undertone |
| 15 | Foundations Spacing `:141` | YAML `lg` 18 / `xxl` 28 unmerged from the body common-value list; body 32px / 64px / 96px unmerged from the YAML scale |
| 16 | Foundations Shape `:154` | YAML `email-pill.radius` 9999 unmerged from body 40px pill; YAML `rounded.full` 9999 unmerged from that pill; 4px as named workhorse, not a universal radius |
| 17 | Foundations Elevation unmerge `:174` | YAML `tokens.shadow` three keys, body five-level table, and toast-local `0px 8px 24px rgba(0,0,0,0.3)` unmerged |
| 18 | Foundations Shadow philosophy `:176` | Whisper-soft cool-tinted on light; dramatic float on dark; theatrical vs restrained |
| 19 | Foundations Gradient & light `:178` | “focuses attention toward centered content” and “used sparingly” as the source’s own reconstruction note |
| 20 | Foundations Motion class `:182` | Duration table, easing names, signature motions, and reduced-motion as source-stated rather than computed CSS; HTML-comment extrapolation class |
| 21 | Foundations Motion readings `:201` | Soft refined deceleration; cinematic float; leaving lighter than arriving; money never bounces |
| 22 | Typography Font evidence `:218` | Sorting named faces into the evidence-class rows |
| 23 | Typography Family `:235` | Fallback instruction, not a brand-face substitution; Helvetica Neue / system fallback is not Arcadia |
| 24 | Typography Weights `:237` | “authoritative without feeling heavy” and “lightness reads as elegant” as the source’s own reconstruction note |
| 25 | Typography Type roles `:241` | YAML unitless `lineHeight` ratios not fixed px; body `1.1` / `1.3` / `1.4` / `1.5` as size-local writings, not replacements; YAML `0.42` and body `+0.42px` plus body-only Display Medium `+0.2px` unmerged |
| 26 | Typography principles `:257` | The five typographic principles and the values inside them |
| 27 | Assets catalog logo `:267` | Google s2 URL as a catalog identity-boundary record, not a captured first-party mark |
| 28 | Components Capture record `:276` | State contract preserved while catalog graph is not adopted; HTML-comment class for component/state values; generic Focus is not `focus-visible` evidence; applicability by control meaning; YAML keys and body §4 dark-pairs/extra fields unmerged; kind/map omitted where interactive-kind is unconfirmed; not a complete state-coverage claim; table characterizations |
| 29 | Components button system `:297` | Disciplined one-filled-CTA pairing; 4px tight not pill-soft except the marketing email-capture pill |
| 30 | Layout Whitespace `:701` | Editorial spaciousness; one idea per band; dense where it counts |
| 31 | Layout not-complete viewport `:737` | ~40px buttons, ~32px pill, ≥44px rows, 65px hero, 36px Display Medium as source writings, not a complete cross-viewport specification |
| 32 | Content Voice `:742` | Voice reading, context table, and forbidden-register list; example strings kept byte-exact |

## Recorded conflicts (ledger copy of portable Governance)

Neither side is chosen. Portable Governance carries the same list.

- YAML `email-pill.radius` 9999 vs body Email-Capture Pill 40px vs YAML `rounded.full` 9999 vs body Circle 9999px
- YAML spacing vs body common values 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px
- YAML `shadow` three keys vs body elevation five levels vs toast-local `0px 8px 24px rgba(0,0,0,0.3)`
- YAML type roles vs body Display Medium 36px / 400 / 1.15 / +0.2px
- YAML `lineHeight` 1.10 / 1.30 / 1.40 / 1.50 vs body table 1.1 / 1.3 / 1.4 / 1.5
- YAML `card.bg` `#ffffff` vs body Product Card `#ffffff` / `#ededf3`
- YAML `tokens.source` drawn from prose (extracted 2026-06-09) vs source §4 live DOM getComputedStyle vs HTML-comment shadcn.io/design/mercury token export (verified 2026-06-06 via WebSearch + WebFetch)

## Proof notes

- Sibling exists at `web/references/mercury/.verification.md`. Sibling-only samples stay in the Sibling section of this ledger and are not portable facts
- Interaction expansions are not recorded in this packet
- Uncaptured `focus-visible` treatments are omitted. They are not `not-applicable`; applicability follows control meaning. Generic `Focus` is a different observation. State coverage is not claimed complete
- Official founding facts and the HTML-comment class split are narrative / evidence-class context, not extra token sources
