# Moin provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/moin/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | moin |
| name | Moin |
| display_name_kr | 모인 |
| country | KR |
| category | fintech |
| homepage | `https://www.themoin.com/ko` |
| primary_color | `#0082ff` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=themoin.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-07-02 |
| added | 2026-07-02 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-02 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / components in `DESIGN.md`. The Google s2 favicon slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. `tokens.source: live-extract` is dual: identity here, and Experience Scope in `DESIGN.md`. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

**Logo decision.** The catalog field is `logo.type: favicon` with a Google s2 proxy URL. Sibling records the candidate at 908 bytes, PNG 128×128 (a real brand favicon, not the generic globe). simpleicons/moin → HTTP 404. The sibling states that getdesign.md / refero.design / Google favicon are explicitly not counted toward the KR brand-owned requirement. That slug remains an identity pointer, not a Moin-hosted brand file.

**Token note, quoted verbatim from the source frontmatter:**

> primary = live currency-exchange 'Send money' CTA azure (#0082ff); a slightly deeper #007bff appears on the top-nav send button. Headings near-black navy (#1a1b22); body default #333333. Near shadowless — one soft card shadow rgba(0,0,0,0.05). 6px is the workhorse radius.

Every value inside that note is carried separately in the portable document.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-02 |
| added | 2026-07-02 |
| tokens.extracted | 2026-07-02 |
| surfaces inspected | 2026-07-02 |
| sibling verification notes | 2026-07-02 |

The source footer records the verification verbatim as **Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved, as the source footer and the sibling conflict matrix both state: none. A near-identical `#007bff` on the nav send button is recorded as `primary-alt`, not a conflict (two distinct button chromes).

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | product homepage | `https://www.themoin.com/ko` | 2026-07-02 |
| eng-blog | official engineering blog | `https://themoin.github.io/` | 2026-07-02 |

### Tier 1 (as listed in the source footer)

- `https://www.themoin.com/ko` — product homepage, live computed style, primary token source
- `https://themoin.github.io/` — MOIN 모인 기술 블로그, official engineering blog, brand-owned; confirms company identity; generic Montserrat theme, so product tokens are sourced from themoin.com, not the blog

### Tier 2

- getdesign.md/moin — no result — "No designs found for 'moin'"
- styles.refero.design/?q=moin — not listed — 96 fuzzy substring hits, none the Moin fintech

Tier 2 data was not used to establish any token or component value.

## Sibling handling (`web/references/moin/.verification.md`)

The sibling exists — confirmed with `find web/references/moin -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

**Method, quoted from the sibling:** playwright `getComputedStyle` (live DOM) — global playwright (chromium, headless, viewport 1440×900), goto `https://www.themoin.com/ko` `domcontentloaded`, cookie/modal dismissal pass, then `getComputedStyle` on body, h1/h2/h3, buttons, inputs, links, plus a full-DOM background/text/border/radius/shadow frequency scan. Second surface `https://themoin.github.io/` inspected the same way.

The viewport figure `1440×900` is a sibling method detail. It is not a portable measurement of a band, a canvas, or a breakpoint. The portable Desktop row keeps the source body's `1024-1440px` range.

### Sibling-only values — held here, not promoted

| Value | Sibling record | Why it stays here |
|---|---|---|
| Currency amount input height `47px` | raw sample, active and resting | The legacy YAML and §4 record the amount field without a height. The body keeps the source keys. |
| Radius frequency `12px` ×2 | frequency scan | Not a YAML `tokens.rounded` step. Not promoted as a missing scale step. |
| Radius frequency `50%` ×13 | frequency scan | The source already writes `9999px / 50%` for circular avatars and icon chips. The ×13 count is measurement detail. |
| Text frequency `rgb(0,0,0)` ×69 | frequency scan | The source Don't list forbids `#000000` for body text. The rank is not promoted as a text token. |
| Frequency counts (bg/text/border) | full-DOM scan | Measurement detail, not contract. |
| Blog link colors `rgb(0,55,100)` / `rgb(0,91,153)` | second-surface raw sample | Montserrat blog theme; the source already says the blog is not the product-token source. |
| Viewport `1440×900` | method | Capture context, not a portable width token. |

### Sibling-only published strings — held here byte-exact (A5)

These lines are mentions of disposition, not portable use. The portable body carries the labels the legacy body itself carries.

- `Previous review` / `Next review` — carousel control raw samples
- `MOIN: Global Money Transfer` — `document.title` on `https://www.themoin.com/ko`
- `MOIN 모인 기술 블로그` — second-surface title
- `소개` / `포스트` / `채용` — blog nav
- `© 2026, ALL RIGHTS RESERVED MOIN Inc.` — blog footer (sibling comma form)

The source HTML comment records the blog footer as `"© 2026 ALL RIGHTS RESERVED MOIN Inc."` (no comma). That no-comma form is the source writing; the sibling comma form stays here. Neither is treated as a product-UI string.

### Third-party strings the source itself excludes

Recorded because the source recorded them, and excluded from evidence for the same reason the source excludes them.

- `"No designs found for 'moin'"` — getdesign.md
- Fuzzy refero hits (Mezmo, Motto, Monad, Moffitt, mishmash, MAKR, Vanmoof, Frame.io) — none is the Moin fintech

## Byte-form notes

- The source frontmatter records `display-hero` line height as unitless `1.2` and body as unitless `1.5`. They are carried as ratios in the portable body, never converted to a replacement px (A1a). Source §3's `~1.2` sits beside `1.2`.
- The source frontmatter records spacing and radius steps unitless (`xs: 4` … `section: 64`; `sm: 6`, `md: 8`, `lg: 16`, `xl: 20`, `full: 9999`). The portable body keeps both the unitless steps and the px forms the visible sections use. `full: 9999` stays a step; §5 writes `9999px / 50%` beside it.
- `tokens.spacing.md: 12` is not a radius step. `tokens.spacing.base: 16` is not `tokens.rounded.lg: 16` and not the 16px body size. `tokens.spacing.xl: 48` is not the carousel-control height 48px. `tokens.spacing.lg: 24` is not the 24px feature-heading size. `tokens.rounded.md: 8` is not `tokens.spacing.sm: 8`. Nav Send height 40px is not the hero 40px.
- YAML card shadow is `rgba(0,0,0,0.05) 0px 4px 15px`. Source §4 / §6 spell `rgba(0, 0, 0, 0.05) 0px 4px 15px 0px`. Both stay.
- `tokens.colors.canvas` and `tokens.colors.on-primary` share `#ffffff` as two paths: page/card canvas versus text/icon on azure and dark fills. The portable Semantic color bullet keeps both paths on that hex.
- YAML `tokens.typography.button` weight is `700`. Exchange CTA font is `16px / 400`. Both stay; the §3 complete writing is `400-700` (700 on dark/nav, 400 on exchange CTA).
- YAML `tokens.typography.eyebrow` use is `Blue accent eyebrow labels (Speed, Lower fees)`. §3 / §4 complete writing adds `Easy to start`. The longer writing is kept.
- YAML `tokens.typography.section-lg` use is `Large section titles + currency amount value`. §3 complete writing is `"Why so many users choose MOIN" + currency amount value`. The section title computes `#333333`; the amount field is `#242424` resting / `#0082ff` active. Those two 32px uses are not one color.
- Hero line has two source writings: `"Complex international remittances, now made simple with MOIN!"` (§10 / live H1) and `"Complex international remittances, now made simple"` (§11). Both stay.

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| §13 Personas — three entries | whole section | The source's own header labels them fictional archetypes informed by publicly observable Moin user segments, not individual people. Fictional personas are neither promoted to verified tasks nor re-hosted in a sidecar. The three entries — including names, ages, cities, biographies, motivations, and affiliation classifications — are dropped and are deliberately not restated here (D2, D2a). |
| §9 Agent Prompt Guide | whole section | Tool-facing copy-paste prompts and restatements of rules stated elsewhere. Checked value by value before deletion: see the next paragraph. |
| Three unsourced easing curves | curve values only | `ease-enter` / `ease-exit` / `ease-standard` roles and uses stay. The three cubic-bezier values are not traceable to Moin-computed samples. `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` is byte-identical to the example table at `spec/omd-v0.1.md`. Durations 120ms / 200ms / 320ms and the motion rules stay. The B3 promotion condition is kept in the portable body. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Primary / azure `#0082ff` — Semantic color + Exchange CTA. Nav send `#007bff` — Semantic color + Nav Send. Ink `#1a1b22` / body `#333333` / amount resting `#242424` / muted `#6b6c74` / muted-slate `#818daa` / grey `#555555` / faint `#a9abb4` / canvas `#ffffff` / surface `#f7f7f8` / surface-cool `#f3f5f8` / hairline `#efefef` / border-cool `#e9ecef` / border `#e0e0e0` — Semantic color. Exchange CTA `#0082ff` / white text / 6px / 8px 16px / 50px / amount 32px 700 `#242424` turning `#0082ff` — Exchange CTA + Currency Amount. Feature block `#f3f5f8` / 1px solid `#efefef` / 16px / eyebrow 16px 700 `#0082ff` / heading 24px 700 `#1a1b22` / body 16px 400 `#333333` — Cool Feature Block + Azure Eyebrow + Type roles. Review card `#f7f7f8` / 16px / soft shadow / carousel 48px white squares / 1px solid `#e0e0e0` / `#555555` / 8px — Tinted Surface Card + Carousel Control. Top nav white / `#333333` links / right-aligned `#007bff` "Send money" at 6px — Top Navigation + Nav Send.

## Claim ledger

| Claim | Surface |
|---|---|
| `tokens.colors.primary` / `primary-alt` / `ink` / `body` / `dark` / `muted` / `muted-slate` / `grey` / `faint` / `canvas` / `surface` / `surface-cool` / `hairline` / `border` / `border-cool` / `on-primary` | `https://www.themoin.com/ko` |
| `tokens.typography.family.sans` Spoqa Han Sans / `fallback` Spoqa Han Sans JP | `https://www.themoin.com/ko` |
| `tokens.typography.display-hero` / `section-lg` / `section` / `eyebrow` / `body` / `button` (size, weight, lineHeight where recorded, use) | `https://www.themoin.com/ko` |
| `tokens.spacing.xs` / `sm` / `md` / `base` / `lg` / `xl` / `section` | `https://www.themoin.com/ko` |
| `tokens.rounded.sm` / `md` / `lg` / `xl` / `full` | `https://www.themoin.com/ko` |
| `tokens.shadow.card` / `elevated` | `https://www.themoin.com/ko` |
| `tokens.components.button-primary` / `button-nav` / `button-dark` / `button-carousel` / `input-amount` / `card-surface` / `card-cool` / `eyebrow-label` | `https://www.themoin.com/ko` |
| Published strings `Send money` / `More reviews` / `Speed` / `Easy to start` / `Lower fees` / `Why so many users choose MOIN` / `Complex international remittances, now made simple with MOIN!` / `Complex international remittances, now made simple` / `Fast, direct remittances you can trust` / `Done in five minutes, right in the app` / 모인 / Moin Inc. | source §10 / §11 / §4 / live homepage |
| Licensed small-sum overseas-remittance provider / Korea's amended Foreign Exchange Transactions Act / early independent players / five minutes on their phone / sender's advocate / refuse-and-embrace closing paragraph | source §11 narrative |

## Proof notes

- Two named Tier 1 sources, recorded 2026-07-02. The engineering blog is a brand source, not a computed-token surface.
- `components_harvested: true`; eight component records in the source token set (`button-primary`, `button-nav`, `button-dark`, `button-carousel`, `input-amount`, `card-surface`, `card-cool`, `eyebrow-label`).
- The source records no `focus-visible` string. It does record an active value color on the amount field. Uncaptured hover, focus-visible, disabled, loading, error, and success treatments are omitted as values; they are not turned into `not-applicable`. Applicability follows control role. State coverage is not claimed complete.
- Moin has no published first-party design system in the source (getdesign.md no data; refero no Moin fintech match). Derived-editorial qualifications therefore close with the toss-form example: not Moin-authored or a separately published UI specification (rulebook v12 B2a 전제 주석).
- Licensed-provider status, the Foreign Exchange Transactions Act, the early-independent-player sentence, the five-minutes-on-their-phone sentence, the sender's-advocate sentence, and the source §11 closing refuse-and-embrace paragraph are source-stated narrative. They stay in Experience Scope as narrative context, not as interface tokens. The philosophy-layer note that corporate details beyond the homepage were not directly quoted from a verified Moin statement in that turn stays in Scope beside those facts (B2).

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope ¶1 | Treating `https://www.themoin.com/ko` as this contract's token surface; keeping values attached to the surface that established them; treating the engineering blog as a named source that does not supply interface tokens |
| Experience Scope ¶2 | Trustworthy utility rather than a flashy consumer app; azure as "the money moves here"; navy as warm and trustworthy rather than stark; scale as compact and pragmatic for real numbers rather than oversized marketing poetry; fast, mobile-native, engineered-feeling remittance tool |
| Experience Scope ¶3 | Founding-and-licensing narrative as context that does not by itself supply interface tokens; philosophy-layer authority bound on corporate details beyond the homepage; refuse-and-embrace reading |
| Primary tasks | Selecting the three surface-or-control outcomes as primary tasks; not from the persona section |
| Audience | Reading the source-named groups as this product's audience; dropping the archetype biographies rather than promoting them; keeping them out of `primary-tasks` |
| Distinctive traits | Classifying the list as a restatement of Key Characteristics, and the groupings and the readings inside them |
| Principles | The five items and their UI implications; "the number is the product" and "flat and fast as a rejection of legacy banking chrome" as editorial readings |
| Application rules | The eight Do-list rules and the reasons attached to them |
| Avoid | The eight Don't-list prohibitions and the reasons inside them |
| Foundations Semantic color | Role names from the source's labels; `#0082ff` as the single saturated hue and money-action signal; `#007bff` as a second near-identical blue rather than a conflict; catalog `primary_color` on the same azure as `tokens.colors.primary` |
| Foundations Semantic color 32px unmerge | Section title kept on Body Charcoal rather than rewritten as Ink Navy; the two 32px uses unmerged |
| Foundations Spacing | Keeping each number on its own key path rather than treating a shared numeral as the same token |
| Foundations Shape | Keeping local radii on their components and each YAML step on its own key path |
| Foundations Elevation | Near-flat system that keeps the remittance UI feeling fast, clean, and mobile-native rather than heavy; attention via azure not elevation |
| Foundations Motion | The durations, easing roles, and motion rules as a section the source leaves unattributed |
| Foundations Motion spring stance | No bounce or spring — a money-transfer product signals steadiness, not playfulness |
| Typography Font evidence, Official product-use | The "no published type token" reading |
| Typography Font evidence, License | Spoqa Han Sans as an upstream open-source hangul face, not a Moin-owned brand asset |
| Typography Family | The fallback prohibition — never present a system substitute as the brand face |
| Type roles intro | YAML integers beside §3 px/rem; unitless line heights as ratios; longer of two writings; attaching each size to the surface element that established it |
| Type roles surface attachment | Reading those sizes as the roles and surfaces named beside them rather than as shared numerals across spacing |
| Typography rules | The four typography principles as readings of the measured metrics |
| Assets | Google s2 slug as an identity pointer rather than hosted brand artwork |
| Components how-to-read | Every kind verdict, every applicability verdict, and the reason given for either; generic Focus capture is not `focus-visible` treatment evidence; amount-field observed active value is that observed active state rather than a `focus-visible` color; not a complete state-coverage claim |
| Exchange CTA geometry | 6px / 8px 16px / 50px / 16px 400 as this control's geometry rather than a spacing or type-role step |
| Nav Send geometry | 6px / 40px as this control's geometry rather than Exchange CTA's 6px or the Display Hero 40px |
| Dark Secondary geometry | 6px / 14px 48px / 52px as this control's geometry rather than a spacing step |
| Carousel Control geometry | 8px / 48px as this control's geometry rather than a spacing step |
| Currency Amount | Observed active value as that observed active state rather than as `focus-visible` treatment; 32px as this field's size rather than the section-title 32px |
| Tinted Surface Card geometry | 16px as this card's radius rather than as a spacing step |
| Cool Feature Block geometry | 16px as this block's radius rather than as Tinted Surface Card's 16px written here |
| Azure Eyebrow geometry | 16px / 700 as this label's font rather than as a spacing step or as the Body type-role |
| Top Navigation identity | Bar "Send money" CTA identified as the Nav Send button rather than as a second control |
| Components State record | The nine state treatments as an unattributed system-level statement |
| Components State record non-attachment | Those treatments not attached as captured visual treatments to the destination header and carousel controls |
| Layout & Platforms | 40px hero as the layout anchor; exchange widget as the primary interactive object; the three whitespace names as this capture's layout philosophy |
| Layout & Platforms responsive | Breakpoints, collapsing strategy, image behavior, and the "comfortably tappable" reading as system-level statements rather than cross-viewport measurements |
| Content & Locales | The voice characterization, the register reading, and the tone table |
