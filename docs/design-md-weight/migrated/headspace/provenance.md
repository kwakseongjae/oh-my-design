# Headspace provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/headspace/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | headspace |
| name | Headspace |
| country | US |
| category | healthcare |
| homepage | `https://www.headspace.com` |
| primary_color | `#0061ef` |
| logo | `type: simpleicons`, `slug: headspace` |
| omd format (source) | 0.1 |
| verified | 2026-06-17 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-17 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / components in `DESIGN.md`. The simpleicons slug is dual: identity here, and a portable asset pointer in `DESIGN.md` §3.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-17 |
| added | 2026-06-17 |
| tokens.extracted | 2026-06-17 |
| Tier 1 live inspect (source footer) | 2026-06-17 |

The source footer records the verification verbatim as **Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | homepage, live computed style | `https://www.headspace.com` | 2026-06-17 |
| subscriptions | subscriptions surface — plan cards, content chips | `https://www.headspace.com/subscriptions` | 2026-06-17 |
| italic | 2024 rebrand case study — typeface + illustration system | `https://italic-studio.com/projects/headspace-rebrand/` | named in the source footer; not a computed-token surface |

### Tier 1 (as listed in the source footer)

- `https://www.headspace.com` — homepage, live computed style
- `https://www.headspace.com/subscriptions` — subscriptions surface — plan cards, content chips
- `https://italic-studio.com/projects/headspace-rebrand/` — 2024 rebrand case study — typeface + illustration system

### Tier 2

- getdesign.md/headspace — 404 (not catalogued)
- styles.refero.design/?q=headspace — no dedicated Headspace style page surfaced (generic browse grid only)

### Philosophy-layer URLs named in the source comment

- `https://www.itsnicethat.com/articles/italic-studio-headspace-graphic-design-project-250424`
- `https://www.printmag.com/branding-identity-design/headspaces-refreshed-identity-offerings-signal-new-era-of-empowered-well-being/`

Those two are coverage URLs the source cites for rebrand quotations. They are not computed-token surfaces.

## Token note (YAML `tokens.note`)

The source frontmatter note, kept here as a ledger string and also landed in the portable body as the facts it names (Headspace Blue as live hero/CTA, warm-orange family + gold from the 2024 Italic Studio rebrand, cream canvas not white, Headspace Apercu / Colophon at weight 700 for display):

> primary = live hero/CTA Headspace Blue (#0061ef); the signature warm orange family (#ff7300/#ffa500) + gold (#ffce00) carry the emotion-driven smiley illustration system from the 2024 Italic Studio rebrand. Canvas is a warm cream (#f9f4f2), not white. Type is the custom 'Headspace Apercu' (Colophon), weight 700 for all display.

## Sibling handling (`web/references/headspace/.verification.md`)

The sibling exists — confirmed with `find web/references/headspace -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-17. Method: playwright getComputedStyle (live DOM) — global playwright (chromium, headless), Chrome UA, goto domcontentloaded + 4.5s settle, Escape/modal dismissal pass, then `getComputedStyle` on body, headings, buttons/links/inputs, candidate cards, and a full-DOM background/text/border color-frequency scan. Two surfaces inspected.
- Sources: `https://www.headspace.com`; `https://www.headspace.com/subscriptions`; `https://italic-studio.com/projects/headspace-rebrand/`
- body: `font-family: "Headspace Apercu", sans-serif`; `color: rgb(75, 76, 77)` (#4b4c4d); `font-size: 16px`; `line-height: 18.4px`
- hero H2 "Members are enjoying happier and healthier...": 64px / 700 / 64px / -1.92px / `#2d2c2b`
- section H2 "The mental health app for every moment": 48px / 700 / 48px / -1.44px
- feature H3 "Always-there support": 40px / 700 / 46px / -1.2px
- sub H2 "What kind of headspace are you looking...": 32px / 700 / -0.96px
- footer H4 "Our content": 24px / 700 / 32px / -0.6px / `#4b4c4d`
- primary CTA "Try for free": `#0061ef` / white / 32px radius / `14.3px 24px` / 48px / 14px / 700
- charcoal CTA "Try for $0": `#2d2c2b` / `14px 20px` / 48px / 16px / 700
- soft pill "Get started" / "Learn more": `#f9f4f2` / `#44423f` / `12.1px 24px` / 48px / 18px / 700
- pill tab active "AI guidance": `#2d2c2b` / 24px radius / `0px 24px` / 48px / 18px / 700
- theme-selector tile "Stress less": white / `2px solid #e2ded9` / 8px / `8px 16px 8px 24px` / height 78px
- circular play: `#2d2c2b` and `#ff7300` / `50%` / 10px / 48px
- email input: white / black / `1px solid #d2d5de` / 8px / `24px 16px 8px` / 58px / 16px
- feature card: `#f9f4f2` / 24px / `box-shadow: none` / height 213px
- color-block card top: `#0061ef` and `#ffce00` / `24px 24px 0px 0px` / height 175px
- [subscriptions] hero H2 "Be kind to your mind": 64px / 700 / -1.92px / `rgb(68, 66, 63)`
- [subscriptions] selected plan card "Annual - 14 days free": `#ffce00` / 12px / `24px 64px 24px 24px` / height 128px
- [subscriptions] unselected "Monthly - 7 days free": white / `1px solid #44423f` / 12px
- [subscriptions] chip "Sleep": `#ff7300` / `rgb(20,19,19)` / 8px / `8px 12px` / height 34px / 14px / 500
- [subscriptions] chips "Meditate"/"Move"/"Focus": `#ffa500`
- [subscriptions] "Start your free trial": `#0061ef` / 32px / `20px 40px` / height 62px
- frequency scan backgrounds: `#f9f4f2` ×40, `#ffffff` ×33, `#2d2c2b` ×20, `#0061ef` ×15, `#44423f` ×9, `#ffce00` ×7, `#27455c` ×4, `#ffa1cc` ×1, `#3b197f` ×1
- frequency scan text: `#4b4c4d` ×2215, `#44423f` ×510, `#2d2c2b` ×417, `#ffffff` ×140, `#000000` ×70
- `box-shadow: none` across hero, nav, headings, cards, and buttons
- document.title: "Mental Health App for Meditation & Sleep - Headspace"
- meta description: "Live a healthier, happier, more well-rested life in just a few minutes a day. Get the science-backed mental health app for every moment. Try for free."

Values and strings the sibling carries that the visible source body does not, kept here and not promoted:

- Computed paddings `14.3px` and `12.1px`
- Heights `78px` (theme tile), `213px` (feature card), `175px` (color-block top), `128px` (plan card)
- Plan-card padding `24px 64px 24px 24px`
- Active pill-tab label `AI guidance`
- Hero H2 `Members are enjoying happier and healthier...`
- Feature H3 `Always-there support`
- Footer H4 `Our content`
- Sub-head truncation `What kind of headspace are you looking...`
- Plan labels `Annual - 14 days free` and `Monthly - 7 days free`
- document.title `Mental Health App for Meditation & Sleep - Headspace`
- Sleep-chip label color `rgb(20,19,19)` (the source body records `#ffffff` on `#ff7300`)
- Subscriptions hero color `rgb(68, 66, 63)` for "Be kind to your mind" (the source body records charcoal `#2d2c2b` for headlines)
- Frequency counts (×40, ×2215, and the rest)
- Meta-description trailing sentence `Try for free.` after the source's recorded meta sample
- Tier 2 page miss string `No designs found for 'headspace'.`

The source body and the sibling disagree on the Sleep-chip foreground and on the subscriptions-hero headline color. Neither side is chosen; the portable body keeps the source body's recorded values.

## Byte-form notes

- The source frontmatter records line heights as unitless ratios (`1.00`, `1.10`, `1.15`, `1.20`, `1.33`, `1.44`). They are carried as ratios in the portable body, never converted to a replacement px (A1a). The source table's parenthetical px conversions stay beside the ratios.
- The source frontmatter records spacing and radius steps unitless (`xs: 4` … `xxl: 64`; `sm: 8`, `md: 12`, `lg: 24`, `pill: 32`, `full: 9999`). The portable body keeps both the unitless steps and the px forms the visible sections use. `full: 9999` stays a step.
- `tokens.spacing.lg: 24` is not `tokens.rounded.lg: 24`. `tokens.spacing.md: 12` is not `tokens.rounded.md: 12`. `tokens.spacing.sm: 8` is not `tokens.rounded.sm: 8`. `tokens.spacing.base: 16` is not the 16px body or button size. `tokens.spacing.xl: 40` is not the 40px feature size. `tokens.spacing.xxl: 64` is not the 64px display-hero size. `tokens.rounded.pill: 32` is not the 32px subsection size. `tokens.rounded.full: 9999` is not the play-button `50%`.
- YAML tracking `-1.20` / `-0.60` sits beside the visible-section forms `-1.2px` / `-0.6px`.
- YAML `category-chip` records `#ffffff` on `#ff7300`. The §4 Amber Chip row records `#000000` on `#ffa500`. Both fills stay attached to their rows.
- YAML `button-primary` is 48px / `14px 24px`. The source's layout notes also record hero CTAs at 62px / 40px. Those are different keys.
- `tokens.colors.on-primary` `#ffffff` is not `tokens.colors.surface` `#ffffff`.
- `tokens.colors.ink-pure` `#000000` is not body text. Body text is `#4b4c4d`.

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| `ease-enter` curve `cubic-bezier(0.2, 0.6, 0.25, 1)` | curve value only; role name, use, and 140/240/360ms durations kept | No Headspace-computed sample. Not a live-extract attribution. |
| `ease-exit` curve `cubic-bezier(0.4, 0.0, 1, 1)` | curve value only | Same family as the documented re-injection path in `spec/omd-v0.1.md` (`ease-exit`). |
| `ease-gentle` curve `cubic-bezier(0.4, 0.0, 0.2, 1)` | curve value only | Same family as the documented re-injection path (`ease-standard`). |
| §13 Personas — four entries | whole section | The source's own header labels them fictional archetypes. Fictional personas are neither promoted to verified tasks nor re-hosted in a sidecar. The four entries — including names, ages, cities, and biographies — are dropped and are deliberately not restated here (D2, D2a). |
| §9 Agent Prompt Guide | whole section | Tool-facing copy-paste prompts and restatements of rules stated elsewhere. Checked value by value before deletion: see the next paragraph. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Headspace Blue `#0061ef`, charcoal `#2d2c2b`, cream `#f9f4f2`, white `#ffffff`, heading `#2d2c2b`, body `#4b4c4d`, slate `#44423f`, orange/amber/gold, pink/purple/teal-navy, tan/input borders — Foundations semantic color. Hero 64px / 700 / 1.00 / -1.92px / `#2d2c2b` — Type roles Display Hero + Primary CTA. Feature card `#f9f4f2` / 24px / no shadow / 40px / -1.2px — Feature Card + Type roles Feature. Color-block `#0061ef` / `24px 24px 0 0` — Color-Block Card. Chips `#ff7300` / `#ffa500` / 8px / `8px 12px` / 14px/500 — Smiley Orange Chip + Amber Chip. Pill tab active `#2d2c2b` / inactive `#f9f4f2` / 24px / 18px/700 — Pill Tabs. Plan card selected `#ffce00` / 12px / 24px; unselected white / `1px #44423f` — Subscription Plan Card. Iteration-guide rules (weight 700, cream base, reserved blue, orange family, no shadows, pill geometry, charcoal/grey text, tight tracking) — Principles + Application rules + Avoid + Type rules.

## Claim ledger

| Claim | Surface |
|---|---|
| `tokens.colors.primary` / `ink` / `ink-pure` / `body` / `slate` / `canvas` / `surface` / `orange` / `amber` / `gold` / `pink` / `purple` / `teal-navy` / `border-tan` / `border-input` / `on-primary` | homepage + subscriptions live computed |
| `tokens.typography.family.sans` Headspace Apercu | homepage + subscriptions live computed |
| `tokens.typography.display-hero` / `display-lg` / `display-md` / `feature` / `subsection` / `card-title` / `body-lg` / `body` / `button` / `button-sm` (size, weight, lineHeight, tracking, use) | homepage + subscriptions |
| `tokens.spacing.xs` / `sm` / `md` / `base` / `lg` / `xl` / `xxl` | homepage + subscriptions |
| `tokens.rounded.sm` / `md` / `lg` / `pill` / `full` | homepage + subscriptions |
| `tokens.shadow.none` | homepage + subscriptions (`box-shadow: none`) |
| `tokens.components.button-primary` / `button-dark` / `button-soft` / `pill-tab` / `category-chip` / `feature-card` / `color-card` / `plan-card` / `email-input` / `play-button` | homepage / subscriptions as each `use` records |
| Voice strings `Be kind to your mind` / `The mental health app for every moment` / meta description / CTA and chip labels | homepage + subscriptions |
| Founding 2010 / Andy Puddicombe / Rich Pierson / London / saffron / 2020s platform / Ebb / 4,000 organizations / 2024 Italic Studio (ITAL/C) / Colophon | source §11 narrative |

## Proof notes

- Two brand-owned Tier 1 web surfaces, recorded 2026-06-17. Italic Studio is a named rebrand-partner source, not a computed-token surface.
- `components_harvested: true`; ten component records in the source token set (`button-primary`, `button-dark`, `button-soft`, `pill-tab`, `category-chip`, `feature-card`, `color-card`, `plan-card`, `email-input`, `play-button`).
- The source records no `focus-visible` string (`grep -o 'focus-visible' web/references/headspace/DESIGN.md | wc -l` = 0). Uncaptured hover, focus-visible, disabled, loading, error, and success treatments are omitted as values; they are not turned into `not-applicable`. Applicability follows control role. State coverage is not claimed complete.
- Headspace has no published first-party design system in the source. Derived-editorial qualifications therefore close with the toss-form example: not Headspace-authored or a separately published UI specification. Italic Studio's case study is a rebrand write-up, not a UI specification, so the toss-form close stays (rulebook v12 B2a 전제 주석).
- Founding year, founders, saffron-robe mascot, 2020s platform expansion, 4,000 organizations, and the 2024 Italic Studio / Colophon rebrand are source-stated narrative. They stay in Experience Scope as narrative context, not as interface tokens.

## Portable derived-editorial scope

Every passage in the portable `DESIGN.md` that carries the derived-editorial qualification. The qualification itself stays in the body; this table is an index, not its home. Measured against `DESIGN.md` with `grep -o 'derived editorial implementation inference' … | wc -l` (file-level, not `grep -c`): **27**. This table has **27** rows (E1 1:1). The same 27 lines also carry `not Headspace-authored` and `separately published UI specification`.

| Portable location | Qualified material |
|---|---|
| Experience — Scope ¶1 | Surface boundary: values stay attached; Italic Studio is a named source that does not supply computed tokens |
| Experience — Scope ¶2 | Paper-like cream, reserved blue as "do this", orange as emotion system, shadowless depth from tints |
| Experience — Scope ¶3 | Classifying the 2010 founding / 2024 rebrand narrative as context that does not supply tokens |
| Experience — Scope ¶4 | Reading the source's refuse/embrace pairing as a current-surface design instruction |
| Experience — Primary tasks | Selecting the five label-and-surface tasks; they do not come from the persona section |
| Experience — Audience | Reading members + 4,000 organizations as the audience grouping |
| Experience — Distinctive traits | Grouping the eight traits and the reserved-blue / orange-core / rounded-bold / pill-rhythm readings |
| Experience — Principles | The five source principles and their UI implications (toss-form header) |
| Experience — Application rules | The eight Do-list rules and the reasons attached to them |
| Experience — Avoid | The eight Don't-list prohibitions and the reasons inside them |
| Foundations — Semantic color | Characterizations (paper-like cream, "do this" blue, robe-orange, grounding teal) |
| Foundations — Spacing | Keeping spacing keys off rounded and type keys that share a number |
| Foundations — Shape | Calling the cluster pill-forward; keeping rounded steps off spacing and type keys |
| Foundations — Elevation | Reading the stack as near-shadowless / illustration-led rather than clinical card-stack chrome |
| Foundations — Motion | Treating durations, easing roles, and motion rules as outside the live-extract attribution |
| Typography — Font evidence Official product-use | The "no published type token sheet" reading |
| Typography — Font evidence License | The foundry-versus-distributed-license-grant reading |
| Typography — Family | Treating `sans-serif` as a fallback rather than a stand-in brand face, including the Declared-only row's same reading |
| Typography — Type roles | Keeping unitless ratios and parenthetical px conversions on separate readings |
| Typography — Type rules | The four rule titles and the confidence / DNA / whisper readings |
| Typography — Assets | Reading the smiley as the emotional carrier, and the simpleicons slug as an identity pointer rather than a hosted file |
| Components — How applicability is decided | Role-based decision procedure, kind verdicts, applicability verdicts, and reasons |
| Components — Surface state contract | Reading the nine rows as a system-level contract rather than per-control observations |
| Layout — Whitespace | Calm-over-density, color-as-structure, and pill-rhythm readings |
| Layout — Responsive | Breakpoints / collapsing / "comfortable" targets as system-level rather than cross-viewport measurements |
| Content — Voice | Warm / plain-spoken / quietly-encouraging characterization, register reading, and tone table |
| Content — Forbidden register | Reading the source's forbidden list as a current-surface register contract |
