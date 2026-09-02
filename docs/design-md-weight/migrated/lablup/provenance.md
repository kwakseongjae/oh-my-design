# Lablup provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the Lablup migration. Canonical source remains `web/references/lablup/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | lablup |
| name | Lablup |
| display_name_kr | 래블업 |
| country | KR |
| category | backend-devops |
| homepage | https://www.lablup.com |
| primary_color | `#28ab6c` |
| logo | `type: github`, `slug: lablup` |
| omd format (source) | 0.1 |
| verified | 2026-06-26 |
| added | 2026-06-26 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-26 |
| components_harvested | true |

The catalog logo pointer is the official GitHub organization avatar (`type: github`, `slug: lablup`). The sibling verification file treats that avatar as a genuine brand-owned mark. Fetch size, pixel dimensions, and the Google-favicon alternative stay in the Logo decision section below; they are not asserted as a Lablup-distributed asset file in the portable body.

Token note from the source, quoted in full:

> primary = Lablup emerald accent (#28ab6c, interactive/links); deep teal (#002926) is the signature dark canvas (body/hero/footer/teal pill CTA); Backend.AI product accent cyan (#03b5e5) lives on docs.backend.ai. Pill-everything (999px) on lablup.com marketing; 4px-sharp utility chrome on consent/docs.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-26 |
| added | 2026-06-26 |
| tokens.extracted | 2026-06-26 |
| surfaces inspected | 2026-06-26 |
| voice samples verified live | 2026-06-26 |

Conflicts unresolved: none (source footer, verbatim: "**Conflicts unresolved:** none").

The `*(verified live 2026-06-26)*` markers that sat beside each of the four voice samples in the source are freshness metadata and are recorded here rather than in the portable body; the sample strings themselves stay in the portable body verbatim.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing homepage | https://www.lablup.com | 2026-06-26 |
| docs | product documentation | https://docs.backend.ai/ | 2026-06-26 |
| github | open-source org / logo mark | https://github.com/lablup | 2026-06-26 |

GitHub is a logo-and-ownership source in this packet. It does not contribute a computed interface-token sample.

## Sources

### Tier 1 (from the legacy footer, with its own scope notes)

- https://www.lablup.com — homepage, live computed style — palette, typography, pills, cards
- https://docs.backend.ai/ — Backend.AI docs, live computed style — body font + cyan link accent `#03b5e5`
- https://github.com/lablup — official GitHub org — open-source Backend.AI, logo mark

Verified line from the source footer: **Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces).

### Tier 2 (no usable record)

- getdesign.md/lablup — not listed (generic shell, no Lablup tokens)
- styles.refero.design/?q=lablup — not listed (KR B2B infra brand uncovered)

The sibling records the same two misses and adds byte-size comparison and a regional-catalog note. Those extra strings stay in the sibling section below and are not portable-body facts.

### Narrative (not interface tokens)

The source's §11 names the 2015 Seoul founding by Jeongkyu Shin (신정규, CEO), Joongi Kim (CTO), and Jonghyun Park; a founding team of current and former lab researchers frustrated by the repetitive technical hurdles of running computation in research environments; Backend.AI as open source; the mission line; the 10-year anniversary in 2025; Backend.AI FastTrack / Backend.AI:GO / AI:GO / Sovereign AI for national and consortium-scale deployments; Gangnam HQ; the San Jose office; the 2026 ICT Merit Awards Presidential Commendation; and CEO background (POSTECH physics Ph.D, Google Developer Expert in AI and Cloud). The source's own closing note records founder names, founding year, the 10-year anniversary, and executive background as widely documented public facts rather than as quotations from a single verified Lablup statement in that turn, and records HQ Gangnam, San Jose, and the 2026 commendation as stated on the live homepage. No URL is given for the public-fact subset in the source.

Voice samples from the source, verbatim (portable body carries the same four strings; the live-date markers stay here):

- "Lablup — Make AI infrastructure accessible"
- "We untangle complex AI infrastructure with software, for a tomorrow where AI reaches everyone"
- "AI infrastructure is never a solo effort. We build alongside the hardware, storage, cloud, and service partners..."
- "The Operating System for AI Infrastructure"

## Sibling verification file (E2)

`web/references/lablup/.verification.md` exists and was read in full (`ls -la` on the brand directory, not a listing that hides dotfiles). It is adopted as **evidence grade only**: no value in it was promoted into the portable body that the legacy `DESIGN.md` did not already establish, and no structural classification from it (frequency ranks, viewport, method plumbing, selector names) was promoted into a portable body fact.

| Field | Value |
|---|---|
| sibling | `web/references/lablup/.verification.md` |
| bytes | 6,710 |
| lines | 64 |
| SHA-256 | `62a8ac9aa1a8e7c5bd34349d66e004db3497845027a653f75fb6fd39d4160db7` |
| heading | `# Lablup — Verification Notes (2026-06-26)` |
| grade | `## Proof — Tier 1 live inspect` |
| inspected | 2026-06-26 |

**Method, quoted from the sibling:** "playwright getComputedStyle (live DOM) — global playwright (chromium, headless, viewport 1440×900), `goto` domcontentloaded + 3.5s settle, cookie/modal dismissal pass, then `getComputedStyle` on body, h1/h2/h3, buttons, anchors, cards, plus a full-DOM background/text/border/radius frequency scan. Two brand-owned surfaces inspected."

The viewport in that quote, 1440×900, is the only viewport the sibling records. It is the sole ground under the portable body's single-viewport qualification on the breakpoint table. The number itself stays here.

**Why it is adopted.** The date, the method family (`playwright getComputedStyle`), and the three brand-owned URLs all agree with what the source `DESIGN.md` footer and trailing comment state in short form, so the sibling corroborates the source rather than contradicting or widening its token set.

### Korean regional requirement, from the sibling

The sibling names the same three brand-owned URLs as satisfying the KR ≥2 requirement, and adds, quoted: "getdesign.md / styles.refero.design / Google favicon proxy are explicitly NOT counted toward the KR brand-owned requirement." The catalog `logo` is the GitHub org avatar, not that Google proxy.

### Conflict matrix (from the sibling)

| Field | Tier 1 (live) | getdesign.md | refero | Resolution |
|---|---|---|---|---|
| Brand canvas | `#002926` deep teal (body bg, hero, footer, ×6) | not listed | not listed | Tier 1 (live computed) |
| Interactive accent | `#28ab6c` emerald (links/active/consent) | not listed | not listed | Tier 1 (live computed) |
| Product/docs accent | `#03b5e5` cyan (docs.backend.ai links, ×80) | not listed | not listed | Tier 1 (live computed) |
| Display font | Google Sans (marketing) / Pretendard (docs) | not listed | not listed | Tier 1 (live computed) |
| Primary CTA geometry | 999px full pill, no shadow | not listed | not listed | Tier 1 (live computed) |
| Card radius | 24px feature / 18px blog | not listed | not listed | Tier 1 (live computed) |

**Tier 2 status from the sibling, quoted:** "getdesign.md/lablup returns a generic shell (13,973 B, no Lablup tokens — vs apple 26,638 B) → not listed. styles.refero.design/?q=lablup → KR B2B infrastructure brand not catalogued. Per `spec/regional-sources.yaml`, Western Tier-2 catalogs do not cover this brand; the KR proof gate is carried entirely by Tier 1."

Those byte counts, the apple comparison, and the regional-catalog sentence stay here. Portable-body counts for `getdesign`, `refero`, `13,973`, and `26,638` are 0.

### Logo decision (from the sibling)

- `type: github, slug: lablup` — official GitHub org avatar (`https://github.com/lablup.png`), genuine isometric Lablup mark + wordmark, 128×128 PNG, 6,925 B, HTTP 200. The sibling calls this a genuine brand-owned mark (no Simple Icons / tracing / fallback).
- Alternative checked: Google s2 favicon (`?domain=lablup.com&sz=128`) → 2,130 B PNG (passes the >450 B globe threshold) — same isometric mark, lower resolution. GitHub org avatar chosen for higher fidelity + first-party ownership.

The portable body carries the isometric-mark color note the source already states, and points at this ledger for the catalog's logo entry. Pixel size, byte size, and the Google-favicon alternative are not portable-body facts.

### Sibling-only values, recorded here and not promoted

The sibling measures the live DOM; the portable contract reconstructs the source `DESIGN.md`. Those are different evidence domains, so a value that exists only in the sibling is a ledger entry and never a portable token.

| Sibling-only value | Portable-body treatment |
|---|---|
| Viewport `1440×900`, `domcontentloaded`, `3.5s settle`, chromium headless | Qualification of the breakpoint table as one desktop viewport; the numbers stay here |
| `document.title` (lablup.com): `Lablup \| Make AI Accessible` | Not promoted. Source voice sample is `Lablup — Make AI infrastructure accessible` |
| Section H2 `Better, together` / `Need a hand with your AI infrastructure?` | Source YAML use is `Better together / Need a hand`. Portable type-role notes keep the YAML form |
| Section H2 `Trusted by leading organizations` | Source YAML use is `Trusted by`. Portable type-role notes keep the YAML form |
| News card H3 `Lablup adds Intel Arc Pro B70 support…` | Not promoted |
| Light shortcut card label `Product / Explore Backend.AI` | Source names the grid `Product / News / Careers`. The Explore line stays here |
| Blog link card label `Lablup Blog` | Not promoted |
| Light shortcut card height `160px` | Not promoted |
| docs.backend.ai body `font-size: 18px` as a body measurement | Source attributes `18px` to TOC / inline links, not to docs body. Portable Docs Link keeps `18px / 400` |
| TOC nav links `18-20px` | Source records `18px`. The range stays here |
| Frequency scans (`rgb(255,255,255)` ×31, text `rgb(0,0,0)` ×569, cyan ×80, radius `24px` ×16, …) | Not promoted |
| getdesign.md `13,973 B` / apple `26,638 B` | Not promoted |
| Logo fetch `6,925 B`, `128×128`, Google favicon `2,130 B` | Not promoted |

The sibling records no hover, focus, pressed, loading, error, or success sample, and no transition, animation, duration, or easing observation. That absence is the ground under the portable motion qualification and under the omitted `focus-visible` treatments; it is not a `not-applicable` reason.

## Evidence class

| Domain | Surface | What it establishes | What it does not establish |
|---|---|---|---|
| Marketing chrome | `https://www.lablup.com` | Teal canvas, emerald accent, Google Sans display metrics, pill geometry, three-temperature cards, hairlines, shadow none | Docs cyan; docs reading stack |
| Product documentation | `https://docs.backend.ai/` | `Pretendard, Poppins` reading stack; cyan `#03b5e5` TOC / inline links at 18px / 400 | Marketing pill geometry; Google Sans |
| Narrative | Company history in the source's §11 | Founding, product family, HQ / office, 2026 commendation | Interface tokens |
| Motion | — | Nothing computed. No transition, animation, duration, or easing observation appears in the sibling's method or raw samples | Any exact curve value |

## Raw samples (from the sibling)

Reproduced from the sibling's `### Raw samples` block. Aggregate numbers are the sibling's frequency scan, not portable tokens.

- body (lablup.com): `font-family: "Google Sans", PyeojinGothic, Pretendard, sans-serif`; `background-color: rgb(0, 41, 38)` (#002926); `color: rgb(0, 0, 0)`; `font-size: 16px`
- hero H2 "Making AI possible where it wasn't": `font-size: 80px`; `font-weight: 700`; Google Sans
- section H2 "Better, together" / "Need a hand with your AI infrastructure?": `font-size: 52px`; `font-weight: 700`
- section H2 "Latest news" / "Trusted by leading organizations": `font-size: 36px`; `font-weight: 600`
- news card H3 "Lablup adds Intel Arc Pro B70 support…": `font-size: 34px`; `font-weight: 600`
- Primary teal pill "View all partners": `background-color: rgb(0, 41, 38)` (#002926); `color: rgb(255,255,255)`; `border-radius: 999px`; `padding: 16px 36px`; `font-size: 19px`; height 51px
- Black pill "About Lablup": `background-color: rgb(0, 0, 0)` (#000000); `color: rgb(255,255,255)`; `border-radius: 999px`; `padding: 14px 24px`; `font-size: 19px`; weight 500; height 47px
- White inverse pill "Contact Us": `background-color: rgb(255, 255, 255)`; `color: rgb(0, 41, 38)` (#002926); `border-radius: 999px`; `padding: 18px 40px`; `font-size: 19px`; weight 700; height 55px
- Ghost outline pill "View All": `background-color: rgba(0,0,0,0)`; `color: rgb(255,255,255)`; `border: 1px solid rgba(255, 255, 255, 0.3)`; `border-radius: 999px`; `padding: 14px 34px`; height 49px
- Consent "Accept All": `background-color: rgb(40, 171, 108)` (#28ab6c); `color: rgb(255,255,255)`; `border-radius: 4px`; `padding: 7px 16px`; `font-size: 13px`; weight 500
- Consent "Customize": `color: rgb(40, 171, 108)` (#28ab6c); `border: 1px solid rgb(40, 171, 108)`; `border-radius: 4px`; `padding: 7px 16px`
- Light shortcut card "Product / Explore Backend.AI": `background-color: rgb(243, 243, 243)` (#f3f3f3); `border-radius: 24px`; `padding: 20px 24px`; height 160px
- Dark feature card "News / Latest from Lablup": `background-color: rgb(26, 26, 26)` (#1a1a1a); `color: rgb(255,255,255)`; `border-radius: 24px`; `padding: 20px 24px`
- Teal feature card "Careers / Join our team": `background-color: rgb(0, 41, 38)` (#002926); `color: rgb(255,255,255)`; `border-radius: 24px`
- Blog link card "Lablup Blog": `background-color: rgb(243, 243, 243)` (#f3f3f3); `border: 1px solid rgb(229, 229, 229)` (#e5e5e5); `border-radius: 18px`; `padding: 32px`
- Carousel circle button (prev/next): `border: 1px solid rgba(255, 255, 255, 0.3)`; `border-radius: 50%`; height 52px; `color: rgb(255,255,255)`
- docs.backend.ai body: `font-family: Pretendard, Poppins, sans-serif`; `background-color: rgb(255, 255, 255)`; `font-size: 18px`
- docs.backend.ai link accent: `color: rgb(3, 181, 229)` (#03b5e5); TOC nav links 18-20px / weight 400
- box-shadow: `none` across hero, nav, cards, and CTAs
- document.title (lablup.com): "Lablup | Make AI Accessible"

## Source closing note (legacy HTML comment, sections 10–15)

The legacy file closes with a comment headed "OmD v0.1 Sources — Philosophy Layer (sections 10–15)". It records the same 2026-06-26 Tier 1 live inspect via playwright getComputedStyle, the marketing measurements (body bg `#002926`, accent `#28ab6c`, hero H2 80px/700 Google Sans, pills 999px, cards 24px/18px, box-shadow none, consent buttons `#28ab6c` 4px), and the docs stack `Pretendard, Poppins` with cyan `#03b5e5`. It then assigns an evidence class to each philosophy section:

- Voice samples (§10) are verbatim from the live homepage, all verified 2026-06-26.
- Brand narrative (§11): founder names, founding year, 10-year anniversary (2025), and exec background are widely documented public facts (corroborated via web search 2026-06-26: Crunchbase, backend.ai blog), not directly quoted from a single verified Lablup statement in this turn. HQ Gangnam, Seoul + US office San Jose and the 2026 ICT Merit Awards Presidential Commendation are stated on the live homepage.
- Personas (§13) are fictional archetypes informed by publicly observable Backend.AI user segments. Names are illustrative; they do not refer to real people.
- Interpretive claims (e.g., "one action, one green", "untangle, don't decorate as a rejection of legacy enterprise IT chrome") are editorial readings connecting Lablup's observed design to its stated positioning, not directly sourced Lablup statements.

These four assignments drove the dispositions that most changed the portable body: the voice samples move as bytes, the personas are deleted, and every interpretive sentence carries an adjacent qualification.

## Claim ledger

Every value below is claimed from the 2026-06-26 live inspection recorded in the source footer and the sibling, unless a row says otherwise.

| claim | surface |
|---|---|
| tokens.colors.primary `#28ab6c` | home |
| tokens.colors.teal `#002926` | home |
| tokens.colors.cyan `#03b5e5` | docs |
| tokens.colors.ink `#000000` | home |
| tokens.colors.dark-card `#1a1a1a` | home |
| tokens.colors.canvas `#ffffff` | home |
| tokens.colors.surface `#fafafa` | home |
| tokens.colors.surface-grey `#f3f3f3` | home |
| tokens.colors.hairline `#e5e5e5` | home |
| tokens.colors.muted `#606060` | home |
| tokens.colors.faint `#929292` | home |
| tokens.colors.mint `#badba3` | home |
| tokens.colors.dark-grey `#383838` | home |
| tokens.typography.family.display `Google Sans` | home |
| tokens.typography.family.body `Pretendard` | home |
| tokens.typography.family.docs `Poppins` (YAML key; live stack `Pretendard, Poppins`) | docs |
| tokens.typography.display-hero 80 / 700 / 1.05 | home |
| tokens.typography.display-lg 52 / 700 | home |
| tokens.typography.section 36 / 600 | home |
| tokens.typography.subsection 34 / 600 | home |
| tokens.typography.button 19 / 700 | home |
| tokens.typography.body 16 / 400 / 1.5 | home |
| tokens.typography.caption 13 / 500 | home |
| tokens.spacing xs 4 / sm 8 / md 14 / base 16 / lg 24 / xl 32 / xxl 40 / section 64 | home |
| tokens.rounded xs 2 / sm 4 / md 8 / lg 18 / xl 24 / pill 999 | home |
| tokens.shadow.none `none` | home |
| tokens.components.button-primary.* (`type: button`) | home |
| tokens.components.button-dark.* (`type: button`) | home |
| tokens.components.button-inverse.* (`type: button`) | home |
| tokens.components.button-outline.* (`type: button`) | home |
| tokens.components.button-accent.* (`type: button`) | home |
| tokens.components.card-light.* (`type: card`) | home |
| tokens.components.card-dark.* (`type: card`) | home |
| tokens.components.card-blog.* (`type: card`) | home |
| tokens.components.nav-circle.* (`type: button`) | home |
| tokens.components.doc-link.* (`type: listItem`) | docs |
| Voice samples (4, §10) | home |
| Brand positioning strings (§1, §11) | home |

Values recorded in §4 prose but absent from the source frontmatter: Emerald Outline Button (consent "Customize"); Teal Feature Card (Careers "Join our team"); Top Nav Link (16px / 400 Google Sans, active `#28ab6c`). The Blog Link Card body color `#606060` in Pretendard 16px appears only in the source's §9 example prompt.

### Token-block component strings (verbatim)

| Key | type | recorded fields |
|---|---|---|
| button-primary | button | bg `#002926` fg `#ffffff` radius `999px` padding `16px 36px` font `19px / 700` use `Primary deep-teal pill CTA (View all partners)` |
| button-dark | button | bg `#000000` fg `#ffffff` radius `999px` padding `14px 24px` font `19px / 500` use `Black pill CTA (About Lablup)` |
| button-inverse | button | bg `#ffffff` fg `#002926` radius `999px` padding `18px 40px` font `19px / 700` use `White pill CTA on dark sections (Contact Us)` |
| button-outline | button | fg `#ffffff` border `1px solid rgba(255,255,255,0.3)` radius `999px` padding `14px 34px` font `19px / 600` use `Ghost outline pill on dark (View All)` |
| button-accent | button | bg `#28ab6c` fg `#ffffff` radius `4px` padding `7px 16px` font `13px / 500` use `Emerald accent action (consent Accept All)` |
| card-light | card | bg `#f3f3f3` fg `#000000` radius `24px` padding `20px 24px` use `Light feature shortcut card (Product / News / Careers grid)` |
| card-dark | card | bg `#1a1a1a` fg `#ffffff` radius `24px` padding `20px 24px` use `Near-black dark feature card` |
| card-blog | card | bg `#f3f3f3` radius `18px` padding `32px` border `1px solid #e5e5e5` use `Blog link card with hairline outline (no shadow)` |
| nav-circle | button | fg `#ffffff` border `1px solid rgba(255,255,255,0.3)` radius `50%` use `Carousel prev/next circle on dark hero` |
| doc-link | listItem | fg `#03b5e5` font `18px / 400` use `Backend.AI docs TOC / inline link accent` |

## Derived editorial inventory

Portable `DESIGN.md` carries 31 complete B2a qualifications. This table is 31 data rows. Preamble sentences on this page are not portable qualifications.

| # | Portable location | Qualified reading |
|---|---|---|
| 1 | Experience Scope ¶1 | Two inspected pages as token surfaces; GitHub as logo-and-ownership source, not a third token surface |
| 2 | Experience Scope ¶2 | Defining recorded move; forest-dark / engineered / trustworthy / serious-infrastructure-not-toy atmosphere |
| 3 | Experience Scope ¶3 | Geometric and quietly bold typographic personality |
| 4 | Experience Scope ¶4 | Geometry split and near-shadowless treatment as the distinguishing move; flat, modern, infrastructure-grade aesthetic |
| 5 | Experience Scope narrative | Lab-researcher origin as the reason Backend.AI exists; "untangling so researchers can focus on the AI" as a design implication |
| 6 | Experience Scope refuses/embraces | Refuses/embraces pairing as an editorial reading |
| 7 | Experience Scope evidence domains | Marketing measurement is not a docs token; docs measurement is not a marketing value; the two domains stay unmerged |
| 8 | Primary tasks | Selecting the three recorded surfaces and labels as primary tasks; not from the persona section |
| 9 | Audience | Biography-drop (no name, age, city, motivation, or affiliation classification); group-level ML platform engineers, research-lab infra leads, enterprise AI teams |
| 10 | Distinctive traits | Grouping the recorded Key Characteristics as the distinctive layer |
| 11 | Principles | The five numbered items and their UI implications |
| 12 | Application rules | The eight Do rules and the reasons attached |
| 13 | Avoid | The eight Don't rules and the reasons inside them |
| 14 | Foundations Semantic color | Role pairing; marketing teal-and-emerald kept off docs cyan; `#000000` text job unmerged from black-pill fill; emerald as live/action green and as the isometric mark's brighter facet |
| 15 | Foundations Spacing unmerged steps | `md: 14` kept unmerged from `base: 16` |
| 16 | Foundations Spacing named base | ~8px named base not converted from the 14px step; generous pill padding |
| 17 | Foundations Shape | `sm: 4` unmerged from `xs: 2`; `lg: 18` unmerged from `xl: 24`; `pill: 999` unmerged from carousel `50%` |
| 18 | Foundations Elevation | Near-shadowless system; color and bands instead of drop shadow |
| 19 | Foundations Motion | Unattributed durations, easing roles, and motion rules; no computed transition observation |
| 20 | Typography Font evidence | Sorting the evidence-class table; Hangul stack as fallback not display; no system-face substitute |
| 21 | Typography Type roles | YAML unitless ratios kept beside table notes; YAML button weight 700 kept beside table 500-700 |
| 22 | Typography rules | What a weight jump or Hangul fallback is *for* |
| 23 | Assets Brand mark | Isometric mark brighter facet as emerald; catalog pointer not a Lablup-distributed asset file |
| 24 | Components how-to-read | Kind and applicability verdicts; generic Focus is not a focus-visible treatment; token-set `use` kept beside longer §4 Role; not a complete state-coverage claim |
| 25 | State treatments | Ten-row state contract as composed, uncomputed treatments |
| 26 | Layout Whitespace | Breathing-room / flat-segmentation / one-loud-moment readings |
| 27 | Layout Responsive | Breakpoint table and collapsing rules; one desktop viewport |
| 28 | Layout Touch targets | Comfortably tappable; nav spaced for touch |
| 29 | Layout Image behavior | No-shadow rule as consistent with the flat system |
| 30 | Content Voice and tone | Plain, technical, quietly mission-driven register, including the tone table |
| 31 | Content Forbidden register | Superlative-hype / fear-urgency / jargon / exclamation / consumer-cuteness exclusions |

## Omission ledger

| Omitted | Reason |
|---|---|
| §13 personas — three named fictional archetypes with ages, cities, and motivations | Fictional biography (D2 / D2a). Not promoted, and deliberately not re-recorded here, not even as names. The source's own group-level segments (ML platform engineers, research-lab infra leads, enterprise AI teams) survive in the body's Audience. |
| `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`, `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | The three exact curves carry no attribution in the source, whose motion section is part of an unsourced philosophy layer; `ease-exit` is the same value carried by the legacy authoring template at `spec/omd-v0.1.md`. Token names, durations, and uses survive in the body; the curves are dropped rather than promoted. |
| §9 tool-facing prompt wrappers, iteration checklist, and the quick color reference restatement | Tool-specific prompt packaging with no receiving slot. The one value that existed only there — Blog Link Card body `#606060` in Pretendard 16px — was moved into Components instead of dropped (A3). |
| Original H1 `# Design System Inspiration of Lablup` | Core v2 identity line `# Lablup Design System` replaces it. |

## Proof notes

- Interaction expansions: 0 computed hover/focus/pressed samples. One additional observed state in the source body: top-nav active text `#28ab6c`. Every other component record is a default-state observation.
- Uncaptured hover/disabled/loading/error/success treatments are omitted as visual treatments. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- The source never records `focus-visible` as a captured state. The emerald 1px outline is a generic Focus observation and is not carried into any `focus-visible` row.
- Four cards (Light Shortcut, Dark Feature, Teal Feature, Blog Link) carry no interactive-kind evidence, so kind and the state-applicability map are omitted for them (C4).
- Loading, error, and success are closed as `not-applicable` on the four marketing destination pills, the carousel arrow, the top-nav item, the docs link, and (for loading/error/success only) the consent Customize trigger, for role reasons — never for absence of observation. Emerald Accent "Accept All" keeps those three states `applicable` because it commits a consent write.
- Official history is narrative context, not a token source.
- `components_harvested: true` and `tokens.source: live-extract` are preserved in Identity (A1c).
