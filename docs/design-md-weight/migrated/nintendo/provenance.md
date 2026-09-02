# Nintendo provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/nintendo/DESIGN.md` until catalog adoption.

Rulebook used by the worker: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v12.

## Identity

| Field | Value |
|---|---|
| id | nintendo |
| name | Nintendo |
| country | JP |
| category | consumer-tech |
| homepage | https://www.nintendo.com/us/ |
| primary_color | `#e60012` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=nintendo.com&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-17 |
| components_harvested | true |

Token note from source: `primary = Nintendo red (#e60012), the brand's near-immutable signature, used identically on US (nintendo.com/us) and JP (nintendo.com/jp) surfaces — links, primary CTAs, logo. US text ink is #484848 with Geologica Variable; JP text ink is #3c3c3c with the YakuHan/Hiragino CJK stack. Translucent overlay/shadow values appear in prose/components only.` Dual destination (E2a): this ledger and portable Experience Scope (same note plus the adjacent register-split / derived editorial implementation inference / not-Nintendo-authored or a separately published UI specification limiter).

Catalog logo type `favicon` / Google s2 slug URL `https://www.google.com/s2/favicons?domain=nintendo.com&sz=128` is this identity ledger only. Portable Typography & Assets states a URL-free Google-favicon identity-boundary sentence (not a captured first-party mark; not promoted as a portable mark file). No portable Named-gaps row was invented for a first-party logo-file absence.

Homepage exact `https://www.nintendo.com/us/` is dual-destination: portable Scope + this identity / Surfaces / Sources / Tier 1 (E2a). Japanese site `https://www.nintendo.com/jp/` is dual portable Scope + this Surfaces / Sources / Tier 1 (E2a). Substring hits of the `nintendo.com` host on the JP row are not the US homepage destination.

Catalog `primary_color` `#e60012` is identity metadata + portable Scope token-note / atmosphere + Distinctive / unmerged + Principles item 1 + capture-bound Do + Semantic Nintendo Red + Elevation philosophy + Capture-record Loading (in-place refresh) + Primary CTA / Play Pill / Red Inline Link / Nav Item active / Red Status Pill (E2a).

`tokens.source: live-extract` and `components_harvested: true` are this ledger only (A1c). `added` 2026-06-17 is this ledger only.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-06-17 |
| added | 2026-06-17 |
| tokens.extracted | 2026-06-17 |
| live inspect (playwright getComputedStyle, 2 surfaces US + JP) | 2026-06-17 |
| Observed voice samples | 2026-06-17 |
| footer Verified | 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces US + JP) |

Conflicts unresolved: none (source footer). Preserved value pairs inside the reconstruction: `#e60012` action red vs eShop green `#468254` / Accent Blue `#4b5cce` / Accent Navy `#27455c`; Ink `#484848` (US, Geologica) vs Ink JP `#3c3c3c` (CJK stack); Muted `#727272` vs Muted JP `#8c8c8c`; Canvas `#ffffff` jobs vs Surface `#f8f8f8` vs Surface Alt `#efefef` vs Surface JP `#f2f2f2`; Hairline `#e0e0e0` vs card fill; YAML `tokens.rounded.pill` 48 vs utility-pill 20px vs JP 50% circles; YAML `tokens.rounded.xs` 2 vs JP 2-3px; YAML `shadow.soft` / `shadow.card` trailing `0px` vs body shadows without it; YAML `family.cjk` short stack vs §3 complete stack including `ヒラギノ角ゴ ProN W3` / `nc3Jp`; YAML nav weight 600 vs §3 Nav Item (JP) 700; YAML Primary CTA Use vs §4 "See all news articles"; YAML padding `0 24px` vs §4 `0px 24px`. Both sides of each pair stay in portable Foundations, Typography, or Components. Neither is chosen.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| us | US store | https://www.nintendo.com/us/ | 2026-06-17 |
| jp | Japanese site | https://www.nintendo.com/jp/ | 2026-06-17 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| us-live | product-surface | https://www.nintendo.com/us/ | 2026-06-17 |
| jp-live | product-surface | https://www.nintendo.com/jp/ | 2026-06-17 |

### Tier 1

- https://www.nintendo.com/us/ — US store: nav, hero CTAs, media cards, utility pills, live DOM. Geologica Variable, ink `#484848`, brand red `#e60012` (rgb 230,0,18) on primary CTAs/links/wordmark, utility pills `#f8f8f8`, media-card 12px radius, soft shadow `rgba(0,0,0,0.07) 0px 2px 8px`, featured-card shadow `rgba(72,72,72,0.15) 0px 4px 16px`.
- https://www.nintendo.com/jp/ — Japanese site: CJK font stack `"YakuHanJPs, Roboto, Hiragino Kaku Gothic ProN, ヒラギノ角ゴ ProN W3, Arial, nc3Jp, sans-serif"`, ink `#3c3c3c`, body line-height 32px on 16px, red `#e60012` confirmed dominant, surface `#f2f2f2`, tighter 2-3px radii + 50% circular icon chips.

US / JP URLs are dual-destination with portable Experience Scope (E2a). HTML-comment live-inspect notes attach groups of values to named URLs; they are not a claim-by-claim computed Proof table invented here.

### Tier 2 (no usable record)

- getdesign.md/nintendo — 0 DESIGN.md files (no match)
- styles.refero.design/?q=nintendo — no Nintendo-specific style page (generic catalog returned)

Tier 2 records are not interface-token sources. No value was used.

### Narrative (not interface tokens)

- Nintendo Co., Ltd. (任天堂), Kyoto-headquartered, founded 1889 as a hanafuda card maker, later a global video-game/hardware company. Dual portable Scope + this ledger (E2a). The source HTML comment records these as widely documented public facts; specific claims beyond the homepage are general public knowledge, not directly quoted from a verified Nintendo statement in this turn. Portable Scope restates that public-knowledge limiter under adjacent complete B2a (narrative rather than interface tokens). The closing unit “What Nintendo refuses… craft in service of play” is portable Scope under adjacent complete B2a.

Voice samples (§10) are verbatim from the live US homepage (feature headlines, "Trending topics" label). Dual-destination for the Observed strings and the 2026-06-17 date: portable Content & Locales + this ledger (E2a). "Log in" / "Learn more" / "Start shopping" / "See all news articles" are also in Primary tasks / Primary CTA; "本体・グッズ" / "ゲームソフト" / "トピックス" / "サポート" are also Primary tasks / Nav Item; "Search games, hardware, news, etc" is also Primary tasks / Header Search (E2a). Derived §10 tone table and forbidden register are not this observation class.

## Claim ledger

Every value below traces to `web/references/nintendo/DESIGN.md`. Token extraction is `live-extract` (2026-06-17). `components_harvested: true`. The source does not record `data-omd-capture` selectors or a per-hex Proof map.

| Claim | Source location | Portable destination |
|---|---|---|
| `tokens.colors.primary` | YAML `tokens.colors.primary`, §2 Nintendo Red | Foundations → Semantic color |
| `tokens.colors.ink` | YAML `ink`, §2 Ink Grey (US) | Foundations → Semantic color |
| `tokens.colors.ink-jp` | YAML `ink-jp`, §2 Ink Grey (JP) | Foundations → Semantic color |
| `tokens.colors.muted` | YAML `muted`, §2 Muted Grey | Foundations → Semantic color |
| `tokens.colors.muted-jp` | YAML `muted-jp`, §2 Muted Grey (JP) | Foundations → Semantic color |
| `tokens.colors.disabled` | YAML `disabled`, §2 Disabled Grey | Foundations → Semantic color |
| `tokens.colors.on-primary` | YAML `on-primary`, §2 On-Primary White | Foundations → Semantic color |
| `tokens.colors.canvas` | YAML `canvas`, §2 Pure White | Foundations → Semantic color |
| `tokens.colors.surface` | YAML `surface`, §2 Surface Grey | Foundations → Semantic color |
| `tokens.colors.surface-alt` | YAML `surface-alt`, §2 Surface Alt | Foundations → Semantic color |
| `tokens.colors.surface-jp` | YAML `surface-jp`, §2 Surface Grey (JP) | Foundations → Semantic color |
| `tokens.colors.hairline` | YAML `hairline`, §2 Hairline | Foundations → Semantic color |
| `tokens.colors.eshop-green` | YAML `eshop-green`, §2 eShop Green | Foundations → Semantic color |
| `tokens.colors.accent-blue` | YAML `accent-blue`, §2 Accent Blue | Foundations → Semantic color |
| `tokens.colors.accent-navy` | YAML `accent-navy`, §2 Accent Navy | Foundations → Semantic color |
| `tokens.typography.family.sans` | YAML `family.sans` | Typography → Family |
| `tokens.typography.family.cjk` | YAML `family.cjk` (short); §3 complete stack | Typography → Family (both writings) |
| `tokens.typography.family.mono` | YAML `family.mono` `system-ui` | Typography → Family (not a brand face) |
| `tokens.typography.display` size / weight / lineHeight / use | YAML display; §3 Feature Headline | Typography → Type roles (A1a: unitless `1.35` kept; 1.75rem / 37.8px kept beside it) |
| `tokens.typography.subheading` | YAML subheading `Card / panel head (H2)`; §3 `Card / login panel heads` | Typography → Type roles (unitless `1.40`; YAML `use` beside §3 notes) |
| `tokens.typography.label` | YAML label; §3 Section Label | Typography → Type roles |
| `tokens.typography.body` | YAML body; §3 Body | Typography → Type roles |
| `tokens.typography.body-jp` | YAML body-jp; §3 Body (JP) | Typography → Type roles (unitless `2.00`; 32px kept beside it) |
| `tokens.typography.button` | YAML button; §3 Primary Button | Typography → Type roles (unitless `1.00`) |
| `tokens.typography.nav` | YAML nav; §3 Nav Item | Typography → Type roles |
| `tokens.typography.caption` | YAML caption; §3 Caption / Input | Typography → Type roles |
| §3 Nav Item (JP) 14px / 700 | §3 only | Typography → Type roles (not a YAML typography key) |
| `tokens.spacing.xs` / `sm` / `md` / `base` / `lg` / `xl` / `xxl` | YAML spacing; §5 Scale | Foundations → Spacing |
| `tokens.rounded.xs` / `sm` / `md` / `lg` / `pill` / `full` | YAML rounded; §5 Border Radius Scale | Foundations → Shape |
| `tokens.shadow.soft` / `tokens.shadow.card` | YAML shadow; §6 | Foundations → Elevation |
| `tokens.components.button-primary` (`type: button`) | YAML; §4 Primary CTA | Components → Primary CTA |
| `tokens.components.button-play` (`type: button`) | YAML; §4 Play Pill | Components → Play Pill |
| `tokens.components.button-utility` (`type: button`) | YAML; §4 Utility Pill | Components → Utility Pill |
| `tokens.components.link-red` (`type: button`) | YAML; §4 Red Inline Link | Components → Red Inline Link |
| `tokens.components.nav-item` (`type: tab`) | YAML; §4 Navigation | Components → Nav Item |
| `tokens.components.card-media` (`type: card`) | YAML; §4 Media Tile | Components → Media Tile |
| `tokens.components.input-search` (`type: input`) | YAML; §4 Header Search | Components → Header Search |
| `tokens.components.carousel-arrow` (`type: button`) | YAML; §4 Carousel Arrow | Components → Carousel Arrow |
| Featured Card / Red Status Pill | §4 only | Components (not in the token set) |
| §14 nine-row state table | §14 | Components → Capture record |
| §15 durations / easing names / motion rules | §15 | Foundations → Motion (curves omitted) |
| §10 voice, samples, forbidden register | §10 | Content & Locales |
| §11 1889 / hanafuda / Kyoto / late 20th century / refuses–embraces last sentence | §11 | Experience → Scope |
| §12 five principles with UI implications | §12 | Experience → Principles |
| §7 Do / Don't | §7 | Experience → Application rules / Avoid |
| §1 Key Characteristics | §1 | Experience → Distinctive traits |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | §4 footer block | This file — Freshness, Sources |

## Capture selectors

The source does not record `data-omd-capture` selectors. None invented.

## Sibling verification file (E2)

`web/references/nintendo/.verification.md` exists (`find` of that exact path). Dated 2026-06-17. Method: playwright `getComputedStyle` on https://www.nintendo.com/us/ and https://www.nintendo.com/jp/. Sibling-only live-DOM samples are a different evidence class from the source DESIGN.md; they were not adopted as portable token values or published-copy rows (B1). This ledger records that the sibling file exists and was read; it does not assert that sibling-only strings are missing from other files. A5a hand sweep used source DESIGN.md quoted brand-issued strings. Sibling-named copy that the source already records survived in portable DESIGN.md.

## Omission ledger

| Item | Status |
|---|---|
| §13 Personas — 3 fictional archetypes (name / age / city included in the source) | Deleted. The source's own §13 header and its closing HTML comment both state that the archetypes are fictional, informed by publicly observable Nintendo audience segments, and that names are illustrative. Not promoted into the portable body, and not re-listed here as identifiers (D2, D2a). Experience `Audience` restates only the source's own §13-header segment list and the §10 / §11 group strings. |
| §15 easing curve values — `cubic-bezier(0.2, 0.6, 0.25, 1)` (`ease-enter`), `cubic-bezier(0.4, 0.0, 1, 1)` (`ease-exit`), `cubic-bezier(0.25, 0.1, 0.25, 1)` (`ease-standard`) | Removed from the portable body as unsourced curves; kept here verbatim (E2b). `ease-exit` matches the legacy spec-template example in `spec/omd-v0.1.md`. The three names match the nintendo/workday/barogo unattributed set. Duration tokens (`120ms` / `220ms` / `360ms`), easing names, signature carousel/card-lift/bounce, and `prefers-reduced-motion: reduce` remain in portable Motion under the philosophy-layer / source-stated limiter. B3 five-kind per-component computed gate remains on curve / animation-name / transition-property promotion beyond those tables. Named gaps lists omitted curve names; the B3 full text is Foundations Motion only. |
| §9 Agent Prompt Guide — Quick Color Reference, four Example Component Prompts, seven-step Iteration Guide | Deleted as tool-facing restatement. Every value it named already has a Foundations / Typography / Components / Layout slot (A3). No §9-only unique renderable field. |
| Legacy H1 `# Design System Inspiration of Nintendo` | Replaced by the Core v2 identity line `# Nintendo Design System`. |
| Legacy footer `**Verified:** … / Tier 1 / Tier 2 / Conflicts unresolved` | Moved to Freshness and Sources above. |
| YAML logo Google-favicon slug | This identity ledger only. Portable Assets is URL-free. |

## Derived editorial inventory

Portable `DESIGN.md` carries 40 complete B2a qualifications. This table is 40 data rows. Preamble sentences on this page are not portable qualifications. Complete form used: "a derived editorial implementation inference from the verified surfaces; it is not Nintendo-authored or a separately published UI specification."

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience — Scope ¶1 | Treating the US store and Japanese-site URLs as this contract's named first-party evidence domains |
| Experience — Scope ¶2 | Token-note register split: `#e60012` as catalog `primary_color` plus CTA / Play / link / wordmark jobs; US `#484848`+Geologica unmerged from JP `#3c3c3c`+CJK; translucent overlay/shadow staying in prose/components |
| Experience — Scope ¶3 | visual-character / sacred-red / eye-trained-that-red-means-action-red-means-Nintendo / orderly-optimistic-family-friendly / engineered-trustworthy-welcoming readings |
| Experience — Scope ¶4 | regional-type / humanist-warmth / deliberately-legible / generously-line-spaced / split-is-regional-not-philosophical readings |
| Experience — Scope ¶5 | near-shadowless / whisper-of-lift / flat-tint-and-hairline / gently-rounded / JP-tighter-2-3px-plus-50-percent-circles / playful-where-it-persuades readings |
| Experience — Scope ¶6 | public-history as narrative rather than interface tokens, including Kyoto-headquartered, founded-1889-as-a-maker-of-hanafuda-playing-cards, transforming-across-the-late-20th-century, and wordmark-and-red-essentially-unchanged-for-decades |
| Experience — Scope ¶7 | calm-digital-product / light-canvas-single-sacred-accent / imagery-forward-storytelling / product-is-fun-chrome-is-composed / trust-to-a-famously-broad-audience readings |
| Experience — Scope ¶8 | refusal / embrace / craft-in-service-of-play readings; last-sentence unit kept |
| Experience — Primary tasks | Selecting the four live-surface jobs from named controls/labels; they do not come from the persona section |
| Experience — Audience | Dropping fictional archetypes; reading §13-header "families, lifelong fans, new players" and §10 / §11 group strings as the source's own groups rather than as promoted personas |
| Experience — Distinctive traits | Unmerged-role grouping of the Key Characteristics list |
| Experience — Principles | Five numbered items including each *UI implication* as editorial readings the source itself flags |
| Experience — Application rules | Treating the source Do list as a capture-bound application of §7 and harvested geometry |
| Experience — Avoid | Treating the source Don't list as reconstruction prohibitions |
| Foundations — Semantic color | Unmerged-role readings: single-saturated-action-hue; US-ink-not-JP-ink; US-muted-not-JP-muted; US-surface-not-surface-alt-not-JP-surface; canvas-jobs-not-one-semantic; hairline-not-a-card-fill; eShop-green-blue-navy-subordinate-to-red |
| Foundations — Spacing | Recorded-scale / unitless-YAML-not-required-px-suffix / padding-stays-with-components; spacing steps unmerged from radius / type / height / padding jobs |
| Foundations — Shape | Local-geometry: 20px-utility-not-YAML-pill-48; 2-3px-JP-not-merged-into-xs-2; 50-percent-JP-circles-not-YAML-full-9999; Extra-small/Small/Medium/Large/Pill/Full role labels |
| Foundations — Elevation table | Table Use assignments as source-stated uses; trailing-`0px` and no-trailing-`0px` writings unmerged |
| Foundations — Elevation philosophy | near-shadowless / whisper-soft-on-media-cards / brand-warm-grey-shadow-rather-than-pure-black / Japanese-site-flatter-still / emphasis-from-red-never-heavy-drop-shadows |
| Foundations — Motion (durations) | Duration table, easing names, signature carousel/card-lift/bounce, and reduced-motion as source-stated philosophy-layer rather than computed CSS; spec-template-ease-exit-match; nintendo/workday/barogo unattributed set |
| Foundations — Motion (rules) | friendly-but-composed / matching-calm-image-forward / signature carousel-slide and card-lift / gentle-tasteful-bounce-on-playful-moments / core-nav-and-commerce-steady / reduced-motion-fully-functional |
| Foundations — Motion (B3 gate) | Treating unattributed cubic-bezier as omitted rather than promoted; five-kind per-component computed gate; refusal of a partial confirmation |
| Typography — Font evidence | Evidence-class application: Geologica-as-US-store-family; YakuHan-plus-Hiragino-as-JP-stack; nc3Jp-as-Nintendo-bundled-web-font-fallback; system-ui-mono-not-a-brand-face |
| Typography — Family | Font-use boundary: Geologica-owns-the-US-store; YakuHan-plus-Hiragino-owns-the-Japanese-site; the-two-never-swap; fallbacks not the brand face |
| Typography — Type roles | Ratio-versus-size-local; YAML `use` beside longer §3 notes; Nav Item (JP) 14px / 700 as a §3-only row; rem / computed-px beside unitless ratios |
| Typography — Type principles | weight-600-carries-headings-400-carries-prose; regional-font-discipline; generous-Japanese-line-height; no-display-heroics-headlines-top-out-at-28px |
| Typography — Assets (favicon) | Catalog logo metadata as a Google favicon lookup, not a captured first-party mark, not a portable mark file |
| Typography — Assets (imagery) | Key-art / game/box-art / media-tile imagery not replaceable with invented brand-color decoration; wordmark as `#e60012` identity context rather than a harvested SVG |
| Components — Capture record (philosophy layer) | Graph-not-adopted preservation of the §14 table as philosophy-layer contract rather than computed per-component CSS |
| Components — Capture record (table characterizations) | “No clutter, friendly tone”; “Calm, never a dead-end error”; flat-soft-pulse; without-blocking-the-view; no-raw-error-codes; not-just-Required; enthusiastic-but-not-gimmicky; no-shadow-shimmer; red-actions-fade-rather-than-foreign-grey |
| Components — Capture record (kind / applicability) | Every interactive-kind verdict, every applicability verdict, every unmerged-field reading on the controls; Featured Card / Red Status Pill as not in the token set; Primitive type only on YAML components |
| Components — Nav Item | Treating the `#e60012` active appearance as a captured variant rather than an observed click transition |
| Components — Media Tile | Treating this surface as having no interactive-kind evidence for a §4.4 map; kind and a state-applicability map omitted |
| Components — Featured Card | Treating this tile as having no interactive-kind confirmation for a §4.4 map; kind and a state-applicability map omitted |
| Layout & Platforms — Whitespace | “calm, breathable rhythm” / “flat segmentation” / “imagery does the heavy lifting”; content-and-commerce-dense-product-feeling-airy; chrome-staying-quiet-and-orderly |
| Layout & Platforms — Responsive | Breakpoint table as a recorded span of named widths rather than a complete specification; 48px / 32px / 72px / 16px as surface measurements; touch-target as a purpose reading; collapsing / image-behavior as source-stated; image-behavior consistent-with-the-flat-system |
| Content & Locales — Observed | Parenthetical characterizations (experiential invitation / inclusive, family-first / plain, orderly navigation) as citation-character of live strings |
| Content & Locales — §14 vs Observed | Treating §14 empty/loading/error/success strings as part of the state contract, not extra Observed voice samples |
| Content & Locales — Derived voice | Voice reading, context table, and forbidden-register list as source-stated register rather than a published microcopy specification |
| Content & Locales — Locale pairing | US/JP regional pairing as locale behavior recorded in this packet rather than a complete localization specification for every unlisted string |

Evidence-class boundary sentences in the portable body (a different class from the qualifier above, listed separately so the two are not conflated):

- Scope — 1889 / hanafuda / Kyoto / late 20th century do not by themselves supply interface tokens; public-knowledge limiter from the source HTML comment.
- Foundations → Motion — exact cubic-bezier omitted; B3 five-kind gate is stated in full on the Motion omit paragraph.
- Typography — YAML `family.mono` `system-ui` and US fallback `-apple-system, "system-ui", sans-serif` are not the brand face.
- Components — generic Focus is not `focus-visible` treatment; `motion-fast` “focus” duration use is not `focus-visible` evidence (B1).
- Governance — controlled copy is the Core v2 English table, not a brand rule.

## Proof notes

- `components_harvested: true`
- `tokens.source: live-extract`
- Uncaptured hover/disabled/loading/error/success treatments on controls that lack a recorded paint are omitted. They are not `not-applicable` for want of a capture; applicability follows control meaning. Destination / nav / arrow / Play-affordance roles close loading/error/success with a role reason (C2). Primary CTA loading/error/success are omitted at the mixed-role boundary rather than closed from the §14 rows. State coverage is not claimed complete (C3).
- Source never records the token `focus-visible`. `focus-visible` rows are applicable with visual treatment omitted (B1).
- Media Tile (`type: card`) omits kind and a state-applicability map (C4). Featured Card and Red Status Pill are not in the token set; Featured Card omits kind/map; Red Status Pill is `kind: non-interactive` as a status marker.
- Primitive type is recorded only where YAML `tokens.components.*` names `type` (A1b).
- Official history facts in the HTML comment are narrative context, not token sources.
- This packet does not name a separately published Nintendo UI specification; the B2a form used is the default (not Nintendo-authored or a separately published UI specification). That form is not a claim that a first-party design-system publication is absent as a Named-gaps domain.
- A5a: sibling `.verification.md` exists (`find` of that exact path). Hand sweep of brand-issued strings from the source (labels, CTAs, slogans, JP nav names, voice samples) survived in portable DESIGN.md. Extracted brand-copy needles 28; unsurvived 0. Sibling-only labels were not promoted (B1). Gate copy-loss `compared` 5 / `candidates` 194; `verdict: PASS` is those 5 needles, not copy preservation.
