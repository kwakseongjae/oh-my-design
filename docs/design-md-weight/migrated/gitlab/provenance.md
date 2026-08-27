# GitLab provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the GitLab migration. Canonical source remains `web/references/gitlab/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | gitlab |
| name | GitLab |
| country | US |
| category | developer-tools |
| homepage | https://about.gitlab.com |
| primary_color | `#1f75cb` |
| logo | `type: simpleicons`, `slug: gitlab` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-17 |
| components_harvested | true |

Token note from the source, quoted in full:

> primary = Pajamas confirm/action blue (#1f75cb); brand orange Tanuki (#fc6d26) is the accent/logo color; GitLab Duo AI purple (#7759c2) marks AI surfaces. Marketing chrome (about.gitlab.com) is ink-based (#171321) with GitLab Sans; the open Pajamas DS (design.gitlab.com) supplies the canonical component tokens.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-17 |
| added | 2026-06-17 |
| tokens.extracted | 2026-06-17 |
| surfaces inspected | 2026-06-17 |
| Tier 2 attempts | 2026-06-17 |
| voice samples verified live | 2026-06-17 |

Conflicts unresolved: none (the source's footer states this explicitly).

The `*(verified live 2026-06-17)*` markers that sat beside each of the three voice samples in the source are freshness metadata and are recorded here rather than in the portable body; the sample strings themselves stay in the portable body verbatim.

## Sibling verification file (E2)

`web/references/gitlab/.verification.md` exists and was read in full. It is adopted as **evidence grade only**: no value in it was promoted into the portable body that the legacy `DESIGN.md` did not already establish, and no structural classification from it (element roles, frequency ranks, selector names) was promoted into a portable body fact.

- **Inspected:** 2026-06-17
- **Method (verbatim):** playwright getComputedStyle (live DOM) — global playwright (chromium, headless, viewport 1440×900/1200), goto each surface `domcontentloaded`, cookie/modal dismissal pass, then `getComputedStyle` on body, h1/h2/h3, buttons/links/inputs, `.gl-button`/`.gl-badge`/`.gl-form-input`, plus a full-DOM background/text color + radius frequency scan.
- **Raw samples:** 26 records.
- Token comparison: the sibling introduces no hex, px, rem, ms, or percentage value that the legacy `DESIGN.md` does not already carry (measured: sibling-only token set is empty), except the padding on the nav-card grid. Raw sample 6 records `nav-card grid radius 14px / padding 16px`. The source body establishes only `Product-nav cards arranged in a multi-card grid inside dropdown panels (14px radius)` and YAML `nav-card` `padding: 24px` / `radius: 16px`. The `16px` grid padding stays here as a sibling observation and is not a portable-body fact.

## Evidence class

| Domain | Surface | What it establishes | What it does not establish |
|---|---|---|---|
| Marketing chrome | `about.gitlab.com` | Ink palette, GitLab Sans display metrics, marketing CTA geometry, dark proof-stat card, nav labels, published headline/CTA/proof copy | Pajamas product tokens |
| Published product design system | `design.gitlab.com` + `/components/button/`, `/components/badge/`, `/components/text-input/` | Canonical Pajamas button, badge, and text-input tokens; docs text ladder | Marketing geometry; Pajamas pages other than those three |
| Narrative | Company history in the source's §11 | Founding, product evolution, IPO, transparency posture | Interface tokens |
| Motion | — | Nothing. No transition, animation, duration, or easing observation appears in the sibling's method or raw samples | Any exact curve value |

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| marketing | marketing-chrome | https://about.gitlab.com | 2026-06-17 |
| pajamas | published-design-system | https://design.gitlab.com/ | 2026-06-17 |

## Sources

### Tier 1 (from the legacy footer, with its own scope notes)

- https://about.gitlab.com — marketing chrome, live DOM (hero, nav, CTAs, dark proof-stat cards)
- https://design.gitlab.com/ — Pajamas open design system, live DOM (docs chrome, action color)
- https://design.gitlab.com/components/button/ — canonical button tokens
- https://design.gitlab.com/components/badge/ — badge tokens
- https://design.gitlab.com/components/text-input/ — input tokens

Verified line from the source footer: **Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect).

### Tier 2 (no usable record)

- `getdesign.md/gitlab` — fetched + playwright-rendered 2026-06-17; the page returns `"gitlab — 0 DESIGN.md files"` / `"No designs found for \"gitlab\"."`. Not listed.
- `styles.refero.design/?q=gitlab` — searched via playwright 2026-06-17; result links present but no card text references GitLab and the page body does not contain "gitlab". Not listed.

The sibling records that GitLab is `country: US`, so Tier 2 absence carries no penalty, and that Tier 1 — live marketing chrome plus the open Pajamas design system, an official first-party DS — supplies all token evidence.

### Narrative (not interface tokens)

The source's §11 narrative names GitLab's 2011 origin (Dmitriy Zaporozhets, an open-source Git repository manager), the 2014 company founding by Sytse "Sid" Sijbrandij as CEO, the growth into a single-application DevSecOps platform, the 2021 Nasdaq IPO, the all-remote operating model, and the public handbook and Pajamas design system. The source's own closing note records these as widely documented public facts rather than as quotations from a single verified GitLab statement in that turn. No URL is given for them in the source.

## Raw samples (from the sibling, 26 records)

| # | Surface | Element | Recorded values |
|---:|---|---|---|
| 1 | about.gitlab.com | body | `font-family: "GitLab Sans"`; `color: rgb(23, 19, 33)` (#171321); `font-size: 16px`; `line-height: 24px` |
| 2 | about.gitlab.com | hero H1 "Ship faster. With trust." | GitLab Sans; `font-size: 96px`; `font-weight: 660`; `line-height: 100px`; `letter-spacing: -2.88px`; `color: rgb(23, 19, 33)` (#171321) |
| 3 | about.gitlab.com | ink CTA "Get free trial" | `background-color: rgb(23, 19, 33)` (#171321); `color: rgb(255,255,255)`; `border: 1px solid rgb(23,19,33)`; `border-radius: 4px`; `padding: 11px 16px`; height 47px; `font-size: 18px`; `font-weight: 660` |
| 4 | about.gitlab.com | white CTA "Request a demo" | `background-color: rgb(255,255,255)`; `color: rgb(23,19,33)`; `border-radius: 4px`; `padding: 11px 16px`; height 45px; `font-size: 18px` |
| 5 | about.gitlab.com | dark proof-stat card "4 hours saved per engineer per week" | `background-color: rgb(31, 28, 46)` (#1f1c2e); `color: rgb(255,255,255)`; `border-radius: 16px`; `padding: 32px` |
| 6 | about.gitlab.com | feature/nav card | `border-radius: 16px`; `padding: 24px`; `color: rgb(23,19,33)`; also nav-card grid radius 14px / padding 16px |
| 7 | about.gitlab.com | nav inactive label "Platform" | `color: rgb(116, 113, 122)` (#74717a); `font-size: 16px`; `font-weight: 400`; GitLab Sans |
| 8 | about.gitlab.com | Tanuki orange accent (hero emphasis label + icons) | `color: rgb(252, 109, 38)` (#fc6d26) — 32 occurrences in the fg frequency scan |
| 9 | about.gitlab.com | GitLab Duo purple | `color: rgb(119, 89, 194)` (#7759c2) — 58 occurrences in the fg frequency scan; the source's own closing note records the same measurement as "Duo purple rgb(119,89,194) #7759c2 (58 uses)" |
| 10 | about.gitlab.com | top background colors (freq) | `rgb(255,255,255)` ×23, `rgb(31,28,46)` ×17 (#1f1c2e), `rgb(23,19,33)` ×16 (#171321), `rgb(244,244,244)` ×7 (#f4f4f4), `rgb(246,243,254)` ×6 (#f6f3fe), `rgb(242,241,245)` ×1 (#f2f1f5), `rgb(6,10,15)` ×1 (#060a0f) |
| 11 | about.gitlab.com | top radii (freq) | 8px ×48, 4px ×39, 16px ×30, 2px ×16; font `"GitLab Sans"` ×1372 (single typeface) |
| 12 | about.gitlab.com | document.title | "Finally, AI for the entire software lifecycle." |
| 13 | design.gitlab.com/components/button/ | confirm `.btn-confirm` | `background-color: rgb(31, 117, 203)` (#1f75cb); `color: rgb(255,255,255)`; `border: 1px solid rgb(47, 104, 180)` (#2f68b4); `border-radius: 8px`; `padding: 0px 12px`; height 32px; `font-size: 14px`; `font-weight: 400` |
| 14 | design.gitlab.com/components/button/ | danger `.btn-danger` | `background-color: rgb(221, 43, 14)` (#dd2b0e); `color: rgb(255,255,255)`; `border: 1px solid rgb(192, 47, 18)` (#c02f12); `border-radius: 8px` |
| 15 | design.gitlab.com/components/button/ | default `.btn-default` | `background-color: rgb(255,255,255)`; `color: rgb(58, 56, 63)` (#3a383f); `border: 1px solid rgb(191, 191, 195)` (#bfbfc3); `border-radius: 8px`; `padding: 0px 12px` |
| 16 | design.gitlab.com/components/button/ | selected default | `background-color: rgb(236, 236, 239)` (#ececef); `box-shadow: rgb(164, 163, 168) 0px 0px 0px 1px inset` (#a4a3a8) |
| 17 | design.gitlab.com/components/button/ | disabled/loading default | `background-color: rgb(251, 250, 253)` (#fbfafd); `color: rgb(115, 114, 120)` (#74717a≈); `border: 1px solid rgb(220, 220, 222)` (#dcdcde) |
| 18 | design.gitlab.com/components/button/ | tertiary confirm | transparent bg; `color: rgb(31, 117, 203)` (#1f75cb); `border-radius: 8px` |
| 19 | design.gitlab.com/components/text-input/ | `.gl-form-input` | `background-color: rgb(255,255,255)`; `color: rgb(58, 56, 63)` (#3a383f); `border-radius: 8px`; `padding: 8px 12px`; `box-shadow: rgb(137, 136, 141) 0px 0px 0px 1px inset` (#89888d); `font-size: 14px` |
| 20 | design.gitlab.com/components/badge/ | `.badge-info` | `background-color: rgb(203, 226, 249)` (#cbe2f9); `color: rgb(47, 92, 160)` (#2f5ca0); `border-radius: 160px`; `padding: 2px 6px`; height 20px; `font-size: 12px` |
| 21 | design.gitlab.com/components/badge/ | `.badge-success` | `background-color: rgb(195, 230, 205)` (#c3e6cd); `color: rgb(48, 100, 64)` (#306440); `border-radius: 160px` |
| 22 | design.gitlab.com/components/badge/ | `.badge-warning` | `background-color: rgb(245, 217, 168)` (#f5d9a8); `color: rgb(137, 75, 22)` (#894b16); `border-radius: 160px` |
| 23 | design.gitlab.com/components/badge/ | `.badge-danger` | `background-color: rgb(253, 212, 205)` (#fdd4cd); `color: rgb(163, 44, 18)` (#a32c12); `border-radius: 160px` |
| 24 | design.gitlab.com/components/badge/ | `.badge-neutral` | `background-color: rgb(220, 220, 222)` (#dcdcde); `color: rgb(76, 75, 81)` (#4c4b51); `border-radius: 160px` |
| 25 | design.gitlab.com/components/badge/ | `.badge-tier` | `background-color: rgb(225, 216, 249)` (#e1d8f9); `color: rgb(92, 71, 166)` (#5c47a6); `border-radius: 160px` |
| 26 | design.gitlab.com | Pajamas docs body | `color: rgb(58, 56, 63)` (#3a383f); strong text `rgb(40, 39, 45)` (#28272d) / `rgb(24, 23, 29)` (#18171d); muted `rgb(98, 97, 104)` (#626168); `font-size: 14px` |

## Source closing note (legacy HTML comment, sections 10–15)

The legacy file closes with a comment headed "OmD v0.1 Sources — Philosophy Layer (sections 10–15)". It records the same 2026-06-17 Tier 1 live inspect "via global playwright getComputedStyle", the marketing measurements (hero H1, ink CTA "Get free trial", dark stat cards, "Tanuki orange rgb(252,109,38) #fc6d26 (icons/emphasis)", "Duo purple rgb(119,89,194) #7759c2 (58 uses)", `document.title`), and the Pajamas component values. It then assigns an evidence class to each philosophy section:

- "Token-level claims (§1-9) are sourced from this live inspection and the open Pajamas design system."
- "Voice samples (§10) are verbatim from live surfaces (hero H1, page title, proof-stat card)."
- "Brand narrative (§11): ... These are widely documented public facts; not quoted from a single verified GitLab statement in this turn."
- "Personas (§13) are fictional archetypes informed by publicly observable GitLab user segments ... Names are illustrative; they do not refer to real people."
- "Interpretive claims (e.g., 'one color, one job', 'flat and structural') are editorial readings connecting GitLab's observed design to its stated transparency posture, not directly sourced statements."

These five assignments drove the three dispositions that most changed the portable body: the voice samples move as bytes, the personas are deleted, and every interpretive sentence carries an adjacent qualification.

## Conflict matrix (from the sibling)

| Field | Tier 1 (live) | getdesign | refero | Resolution |
|---|---|---|---|---|
| Primary action color | `#1f75cb` (Pajamas confirm + action blue) | not listed | not listed | Tier 1 — `#1f75cb` is the Pajamas confirm/action token. Tanuki orange `#fc6d26` documented as accent/logo, not primary. |
| Button radius | 8px (Pajamas) / 4px (marketing CTA) | not listed | not listed | Both retained as separate variant subgroups (product 8px vs marketing 4px). |
| Display font | GitLab Sans (sole typeface) | not listed | not listed | Tier 1. |
| Badge geometry | 160px pill, tint+text semantic pairs | not listed | not listed | Tier 1 (Pajamas badge tokens). |

The 8px/4px split survives into the portable body as two shape steps with their domains attached, exactly as the matrix resolves it.

## Logo decision (from the sibling)

- `type: simpleicons`, `slug: gitlab` — `https://cdn.simpleicons.org/gitlab` returns HTTP 200, 588 bytes, `fill="#FC6D26"` (the Tanuki orange, matching the live homepage `rgb(252,109,38)`).
- Google favicon `https://www.google.com/s2/favicons?domain=about.gitlab.com&sz=128` also valid (HTTP 200, 1203 bytes — above the 450-byte generic-globe floor) as a fallback. The catalog chose simpleicons for the clean brand-orange Tanuki mark.
- Evidence separation: Simple Icons is a third-party icon set, so this entry is a third-party rendering of the mark, not a GitLab-distributed logo asset. The portable body therefore carries the brand-mark color and its live corroboration, and points at this ledger for the catalog's logo entry.

## Claim ledger

Every value below is claimed from the 2026-06-17 live inspection recorded in the sibling; the source's own footer attributes §1–§9 token-level claims to the same inspection and to the open Pajamas design system.

| Claim | Domain / surface | Portable destination |
|---|---|---|
| `tokens.colors.primary` `#1f75cb`, `primary-border` `#2f68b4` | pajamas | Foundations → Semantic color (primary & brand) |
| `tokens.colors.brand-orange` `#fc6d26` | marketing / brand mark | Foundations → Semantic color; Typography & Assets → Assets |
| `tokens.colors.duo-purple` `#7759c2` | marketing | Foundations → Semantic color |
| `tokens.colors.ink` `#171321`, `ink-strong` `#18171d`, `dark-surface` `#1f1c2e`, `dark-deep` `#060a0f` | marketing / pajamas docs | Foundations → Semantic color (ink & dark surfaces) |
| `tokens.colors.text-default` `#28272d`, `text-primary` `#3a383f`, `muted` `#74717a`, `muted-alt` `#626168`, `faint` `#4c4b51` | pajamas / marketing | Foundations → Semantic color (text hierarchy) |
| `tokens.colors.canvas` `#ffffff`, `surface` `#f4f4f4`, `surface-tint` `#f2f1f5`, `purple-tint` `#f6f3fe`, `hairline` `#bfbfc3`, `hairline-soft` `#dcdcde`, `on-primary` `#ffffff` | both | Foundations → Semantic color (neutral & surface) |
| `tokens.colors.danger` `#dd2b0e`, `danger-border` `#c02f12`, `danger-text` `#a32c12`, `danger-tint` `#fdd4cd`, `success-tint` `#c3e6cd`, `success-text` `#306440`, `warning-tint` `#f5d9a8`, `warning-text` `#894b16`, `info-tint` `#cbe2f9`, `info-text` `#2f5ca0`, `tier-tint` `#e1d8f9`, `tier-text` `#5c47a6` | pajamas | Foundations → Semantic color (semantic pairs); Components → Status Badge |
| `#ececef` / `#a4a3a8` (selected default), `#fbfafd` (disabled/loading default) | pajamas | Foundations → Semantic color (closing note); Components → Default (Secondary) Button; Components → State record |
| `tokens.typography.family.sans` `GitLab Sans` + declared fallback stack | both | Typography & Assets → Font evidence, Family |
| `tokens.typography` six roles (size / weight / unitless lineHeight / tracking / use) | both | Typography & Assets → Type roles |
| `tokens.spacing` 8 keys, verbatim `{ xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }` | both | Foundations → Spacing; Layout & Platforms |
| `tokens.rounded` 4 keys, verbatim `{ sm: 4, md: 8, lg: 16, full: 9999 }` — Shape Pill value cell carries `full: 9999` with the source-body alias `(160px / full)` | both | Foundations → Shape |
| `tokens.shadow.inset-border`, `tokens.shadow.elevated` | pajamas | Foundations → Elevation |
| `tokens.components.button-confirm` / `button-danger` / `button-default` / `button-marketing` | pajamas / marketing | Components & States, one record each |
| `tokens.components.input-text` | pajamas | Components → Text Input (Pajamas) |
| `tokens.components.nav-card`, `dark-stat-card` | marketing | Components → Nav / Feature Card, Dark Proof-Stat Card |
| `tokens.components.badge-info` / `badge-success` / `badge-danger` / `badge-tier` (+ warning and neutral from §4) | pajamas | Components → Status Badge variant table |
| Hero copy, CTA labels, proof stats, page title, nav labels | marketing | Experience → Scope, Primary tasks; Components → CTA records, Navigation record; Content & Locales |

## Token-block component strings (verbatim)

The legacy `tokens.components` block writes several values in a shorthand that differs from the same value in the source's own §4 body (`"0 12px"` vs `Padding: 0px 12px`, `"14px GitLab Sans"` vs `Font: 14px / GitLab Sans`). The portable body carries the §4 body form; the token-block form is preserved here byte-for-byte so neither notation is lost.

| Component key | Verbatim token-block fields |
|---|---|
| `button-confirm` | `type: button`, `bg: "#1f75cb"`, `fg: "#ffffff"`, `border: "1px solid #2f68b4"`, `radius: "8px"`, `height: "32px"`, `padding: "0 12px"`, `font: "14px / 400 GitLab Sans"`, `use: "Primary confirm action (Pajamas), hover darkens"` |
| `button-danger` | `type: button`, `bg: "#dd2b0e"`, `fg: "#ffffff"`, `border: "1px solid #c02f12"`, `radius: "8px"`, `height: "32px"`, `padding: "0 12px"`, `font: "14px / 400 GitLab Sans"`, `use: "Destructive action"` |
| `button-default` | `type: button`, `bg: "#ffffff"`, `fg: "#3a383f"`, `border: "1px solid #bfbfc3"`, `radius: "8px"`, `height: "32px"`, `padding: "0 12px"`, `font: "14px / 400 GitLab Sans"`, `use: "Secondary/default action"`, `states: "selected #ececef · disabled bg #fbfafd fg #74717a"` |
| `button-marketing` | `type: button`, `bg: "#171321"`, `fg: "#ffffff"`, `radius: "4px"`, `height: "47px"`, `padding: "11px 16px"`, `font: "18px / 660 GitLab Sans"`, `use: "Marketing ink CTA on about.gitlab.com — Get free trial / Try for free"` |
| `input-text` | `type: input`, `bg: "#ffffff"`, `fg: "#3a383f"`, `radius: "8px"`, `padding: "8px 12px"`, `height: "32px"`, `font: "14px GitLab Sans"`, `shadow: "0 0 0 1px inset #89888d"`, `use: "Pajamas form input, focus blue #1f75cb ring"` |
| `nav-card` | `type: card`, `bg: "#ffffff"`, `fg: "#171321"`, `radius: "16px"`, `padding: "24px"`, `use: "Homepage product nav / feature card on dark band"` |
| `dark-stat-card` | `type: card`, `bg: "#1f1c2e"`, `fg: "#ffffff"`, `radius: "16px"`, `padding: "32px"`, `use: "Dark proof-stat card (4 hours saved, 82% decrease)"` |
| `badge-info` | `type: badge`, `bg: "#cbe2f9"`, `fg: "#2f5ca0"`, `radius: "160px"`, `padding: "2px 6px"`, `font: "12px / 400 GitLab Sans"`, `use: "Info pill (Pajamas badge)"` |
| `badge-success` | `type: badge`, `bg: "#c3e6cd"`, `fg: "#306440"`, `radius: "160px"`, `padding: "2px 6px"`, `font: "12px / 400 GitLab Sans"`, `use: "Success pill"` |
| `badge-danger` | `type: badge`, `bg: "#fdd4cd"`, `fg: "#a32c12"`, `radius: "160px"`, `padding: "2px 6px"`, `font: "12px / 400 GitLab Sans"`, `use: "Danger pill"` |
| `badge-tier` | `type: badge`, `bg: "#e1d8f9"`, `fg: "#5c47a6"`, `radius: "160px"`, `padding: "2px 6px"`, `font: "12px / 400 GitLab Sans"`, `use: "Tier / plan pill (purple)"` |

The typography token block uses the same shorthand: `display-hero` `use: "Hero headline, GitLab Sans semibold"`, `section` `use: "Section titles"`, `subsection` `use: "Card / nav-card heads, CTA labels"`, `body` `use: "Standard reading text"`, `ui` `use: "Component / docs UI text, Pajamas default"`, `badge` `use: "Pill badge label"`. The shadow block records `inset-border: "rgb(137,136,141) 0px 0px 0px 1px inset"` and `elevated: "rgba(5,5,6,0.08) 0px 2px 8px"`.

## Derived editorial inventory

Sentences in the portable body that read a purpose, cause, or classification into a measurement, each carrying an adjacent B2a qualification. The source's own closing note flags this class: *"Interpretive claims (e.g., 'one color, one job', 'flat and structural') are editorial readings connecting GitLab's observed design to its stated transparency posture, not directly sourced statements."*

| Location | Interpretive content |
|---|---|
| Experience → Scope, second paragraph | Characterizations "ink-forward", "editorial", "restrained geometry" built on recorded measurements |
| Experience → Scope, third paragraph | The refuses/embraces pairing read off the same design |
| Experience → Scope, final paragraph | The two-layer split as one identity, the palette as role-per-color discipline, the near-flat treatment as a consequence of the transparency posture, and the "engineering tool that learned typography" impression |
| Experience → Primary tasks, head | Naming three jobs from the two captured surfaces |
| Experience → Audience | Grouping the two captured surfaces into practitioners and builders |
| Experience → Distinctive traits, head | The groupings "two-tier color logic", "restrained radius", "cool neutral text ladder" |
| Experience → Principles, head | The five principles' UI implications, which link posture to treatment |
| Experience → Application rules, head | The justifications attached to the eight rules |
| Experience → Avoid, head | The reasons attached to the eight avoidances |
| Foundations, section head | Explanatory clauses attached to recorded values — why a padding is tight, what a shadow is *for*, what a color rule protects |
| Foundations → Elevation, closing | Reading the shadow measurements as a deliberate emphasis strategy |
| Foundations → Motion, head | The whole motion contract — durations, easing roles, motion rules |
| Typography & Assets → Typography rules, head | What a weight or a tracking value is *for* |
| Typography & Assets → Assets, logo file | Classing the catalog logo entry as a third-party rendering |
| Components & States → How to read this section | Every interactive-kind verdict, every applicability verdict, and the reasons given |
| Components & States → Status Badge | Grouping four token-block badges plus warning and neutral into one component with six variants |
| Layout & Platforms → Whitespace | "Generous marketing, dense product", "flat banding for rhythm", "pill cadence in status" |
| Content & Locales, opening | Naming the register and tying it to the transparency posture |

## Omission ledger

| Item | Disposition |
|---|---|
| §15 easing curve values — `cubic-bezier(0.2, 0.6, 0.25, 1)` (`ease-enter`), `cubic-bezier(0.4, 0.0, 1, 1)` (`ease-exit`), `cubic-bezier(0.25, 0.1, 0.25, 1)` (`ease-standard`) | Removed from the portable body as unsourced curves; kept here verbatim. The sibling's method and its 26 raw samples record no transition, animation, duration, or easing observation, and `cubic-bezier(0.4, 0.0, 1, 1)` is the example value that `spec/omd-v0.1.md` carries and defines as a non-brand implementation default that must not be moved into a reference. The roles and their uses stay in the portable body. |
| §13 Personas — three archetypes | Deleted. The source's own persona header and its closing note both state that the archetypes are fictional and that the names are illustrative. Biographies, ages, cities, and the segment list are not re-hosted here. |
| `*(verified live 2026-06-17)*` markers beside the three voice samples | Freshness metadata; recorded in Freshness above, removed from the portable body. The sample strings themselves stay in the portable body verbatim. |
| §9 Agent Prompt Guide — Quick Color Reference, five Example Component Prompts, seven-step Iteration Guide | Deleted as tool-facing restatement. One value was unique to §9 and was restated rather than dropped: the dark proof-stat card's typography ("Large stat in GitLab Sans 660, caption in 16px/400"), now on the Dark Proof-Stat Card record as "the large stat is set in GitLab Sans 660 and the caption at 16px / 400". |
| Legacy H1 `# Design System Inspiration of GitLab` | Replaced by the Core v2 identity line `# GitLab Design System`. |
| Legacy footer `**Verified:** … / Tier 1 / Tier 2 / Conflicts unresolved` | Moved to Freshness and Sources above. |

## Notes on evidence separation

- Marketing chrome and Pajamas are separate evidence domains. Every value in the portable body carries its domain, and the source's own conflict matrix resolves the one place they disagree — button radius — by keeping both rather than merging them.
- Pajamas is a published first-party design system, so its component values are documented product tokens. That does not make the migration's own state-applicability and kind verdicts part of that documentation; the portable body says so at the head of Components & States.
- The sibling's frequency ranks, selector names, and element classifications stayed in this file. None of them became a structural fact in the portable body.
- Motion has no evidence domain at all in this capture. Durations, easing roles, and motion rules are carried with an evidence qualification, and the exact curves are not carried.
