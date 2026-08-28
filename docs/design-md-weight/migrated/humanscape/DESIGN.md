# Humanscape Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Humanscape (휴먼스케이프) is the Korean healthcare-data company behind RareNote (레어노트), and this contract covers the two first-party web surfaces the source records as Tier 1 on 2026-07-02: the current corporate site presented under the LifeX brand at `https://humanscape.io/` (which resolves to `https://lifex.io/`) and the second inspected surface at `https://lifex.io/our-business`. Every value stays attached to the surface that established it. Reading those two inspected pages as this contract's token surfaces, and keeping values attached to the surface that established them, is a derived editorial implementation inference from the verified surfaces; it is not Humanscape-authored or a separately published UI specification.

The captured corporate layer reads, in the source's wording, like a scientific white paper turned into a product page. The canvas is pure white (`#ffffff`), the hero rests on a soft mint-grey wash (`#dfe7e4`), and text sits in a near-black ink (`#191a1f`) rather than pure black. The single saturated brand accent is a bright azure (`#00adf7`), reserved for the one word that matters in the hero headline ("the Life Journey") and for small data-point indicator dots. The typographic personality is defined by scale rather than weight: every headline runs in **Pretendard** at oversized display sizes — 58px on the homepage hero, 64px on section headlines, and a full 112px on the "Our Business" page title — at a restrained medium weight (500-600). Body, navigation, and interface text drop to 16px / weight 400. A secondary violet accent (`#7b61ff`) marks the numbered section labels ("1. Built on Healthcare Network", "2. Powered by Global User Base", "3. Scaled by Data Intelligence") and the "we're hiring" micro tag. Live inspection found `box-shadow: none` across the hero, nav, headings, cards, and list rows. Separation comes from tinted surfaces (cool-grey `#f4f6f9`, mint `#dfe7e4`, pale data-blue `#c7e1ff`) and thin `#d8dde4` hairlines. Geometry leans generously rounded: 8px nav chips, 24px feature cards, 32px data cards, and full-pill (`9999px`) language toggles and indicator dots. The hex values, family name, sizes, weights, labels, and `box-shadow: none` in this paragraph are recorded. Reading the register as calm, editorial, and data-literate rather than clinical or salesy; reading the azure as "the signal in the data."; reading the medium weight as the opposite of the heavy-800 Korean-fintech convention; and reading the whole as a spacious, science-forward aesthetic — a data company that wants to feel trustworthy and human, not intimidating — is a derived editorial implementation inference from the verified surfaces; it is not Humanscape-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Humanscape (휴먼스케이프) was founded in **March 2016** by CEO **Jang Min-hoo (장민후)** as a digital-healthcare company built around a hard, human problem: patients with rare and intractable diseases had almost no accessible, trustworthy source of information about their own condition, drug-development status, or clinical trials. Its flagship service, **RareNote (레어노트)**, turned that gap into a patient-first data platform — organizing information on over a thousand rare diseases for tens of thousands of patients and guardians — and the company also operated **MamiTalk (마미톡)**, a pregnancy and childcare platform. In its early years Humanscape was known for exploring **blockchain-based health-data sharing**, framing patient data as something patients themselves should own and benefit from ([시사저널e interview with CEO 장민후](https://www.sisajournal-e.com/news/articleView.html?idxno=181666)). The company is now continuing its journey under the new brand **LifeX**, presented at `humanscape.io` (which resolves to `lifex.io`) as "data-driven healthcare intelligence across the life journey." The rebrand reframes the mission from a single rare-disease community into a broader **life-journey intelligence** platform spanning growth monitoring, developmental care, personalized financial and shopping services, and care navigation for serious illness. Per the live site, LifeX now describes itself as *Built on Healthcare Network (1,800+), Powered by Global User Base (2.5M+), and Scaled by Data Intelligence (230M+)* — with overseas expansion into the United States, Indonesia, and Vietnam through local subsidiaries ([VentureSquare coverage](https://www.venturesquare.net/1093607)). Official history and the live surfaces provide that narrative context; they do not by themselves supply interface tokens. Classifying that founding-rebrand-and-expansion narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Humanscape-authored or a separately published UI specification.

What the design refuses, and what it embraces, tracks this narrative. It refuses the heavy, alarming chrome of legacy medical software (no dense shadowed panels, no institutional blue-and-white sterility) and the dark-pattern urgency of consumer health marketing. It embraces a flat, editorial, science-forward surface: oversized Pretendard headlines that speak plainly, a single azure signal color for the data that matters, and a humane near-black ink that keeps a data company feeling like it is, first, about human life. That refusal/embrace pairing is stated by the source as the closing unit of its brand narrative; reading it as a current-surface design instruction is a derived editorial implementation inference from the verified surfaces; it is not Humanscape-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=5 lang=en -->
### Primary tasks

Selecting these five as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not Humanscape-authored or a separately published UI specification. Each names a label or surface the source records. They do not come from the source's persona section.

- Read the hero line "eXploring human Life through data-driven Intelligence Across the Life Journey".
- Follow the underlined text CTA "eXplore Our Business" or "eXplore About Us".
- Open a destination from the top nav — About Us, Our Business, Newsroom, Investor Relations, Career.
- Switch KR/EN on the language toggle pill.
- Read the scale claims "1,800+ Healthcare Network", "2.5M+ Global User Base", and "230M+ Data Intelligence".
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as fictional archetypes informed by publicly observable Humanscape/LifeX user and stakeholder segments (rare-disease patients and guardians, healthcare partners, and investors), not individual people, so those biographies are dropped rather than promoted, and no name, age, city, or occupation is carried into this document or its sidecar. What the source independently records is the audience grouping those archetypes were said to be informed by: rare-disease patients and guardians, healthcare partners, and investors. Reading those groups as this product's audience is a derived editorial implementation inference from the verified surfaces; it is not Humanscape-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are measured; the groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces — they are not Humanscape-authored or a separately published UI specification.

- Pretendard as the single family, scaled from a 16px body up to a 112px display — hierarchy by size, not weight
- Medium display weight (500-600) — confident and airy, never the heavy-800 Korean convention
- One saturated azure accent (`#00adf7`) reserved for the hero highlight word and data-point dots
- Secondary violet (`#7b61ff`) only on numbered section labels and the hiring tag
- Near-black ink (`#191a1f`) and heading navy (`#1a1b1e`) instead of pure black for warmth and trust
- Flat, shadow-free depth: mint (`#dfe7e4`), cool-grey (`#f4f6f9`), and data-blue tint (`#c7e1ff`) surfaces + `#d8dde4` hairlines do the separating
- Generous rounding — 24px / 32px cards, full-pill toggles and dots
- Text CTAs are minimalist underlined links (`#28292d` with a 1px bottom border), not filled buttons

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Humanscape-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Human life first, data second.** The hero literally reads "eXploring human Life through data-driven Intelligence" — life is the subject, data the instrument. *UI implication:* lead with the person and the outcome; let numbers support the story rather than dominate it.
2. **Data as a trust, not a commodity.** The company's origin in patient-owned, rare-disease data means information is handled as something borrowed from people who are vulnerable. *UI implication:* present metrics transparently and specifically ("1,800+", "2.5M+"), never as vague marketing puffery.
3. **Clarity over intimidation.** Serious healthcare topics are surfaced in plain language and airy layouts. *UI implication:* generous whitespace, oversized-but-calm headlines, and descriptive labels ("Care Navigation for Serious Illness") instead of jargon.
4. **One signal, one color.** Azure (`#00adf7`) means "this is the data point that matters." *UI implication:* reserve the azure accent for the single highlight and for data-point dots so the signal is never ambiguous.
5. **Flat and evidence-like.** A shadowless, hairline-separated surface reads like a well-set scientific document. *UI implication:* separate with tint and rules, not elevation; keep the page feeling like credible evidence rather than a sales deck.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Humanscape-authored or a separately published UI specification.

- Use Pretendard for everything and build hierarchy through size (16px body up to 112px display)
- Keep display weight at 500-600 — confident and airy, never heavy 700-800
- Reserve azure (`#00adf7`) for the single hero-highlight word and data-point dots
- Use violet (`#7b61ff`) only for numbered section labels and the hiring tag
- Use near-black ink (`#191a1f`) and heading navy (`#1a1b1e`) instead of pure black
- Separate sections with flat washes (`#dfe7e4`, `#f4f6f9`, `#c7e1ff`) and `#d8dde4` hairlines — no shadows
- Prefer underlined text CTAs (`#28292d` with a 1px bottom rule) over filled buttons
- Use generous rounding — 24px feature cards, 32px data cards, full-pill toggles

### Avoid

The source states these eight as its Don't list; they are kept as its rules, reasons included. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Humanscape-authored or a separately published UI specification.

- Set headlines in heavy weight — this system uses size, not boldness, for authority
- Spread azure across many elements — it dilutes the single-signal read
- Use violet as a fill or background — it is a small typographic accent only
- Add drop shadows for elevation — the system is flat and shadow-free
- Use pure black (`#000000`) for body or headings — reserve near-black ink `#191a1f`
- Introduce a third saturated hue — azure and violet are the only accents
- Use sharp/square corners on cards or toggles — geometry is generously rounded
- Cram headlines into tight columns — display type needs surrounding air

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Where a line also characterizes a value — single signal, typographic marker, warmth — that characterization is a derived editorial implementation inference from the verified surfaces; it is not Humanscape-authored or a separately published UI specification.

Primary and accent

- **LifeX Azure** (`#00adf7`): The primary brand accent. Coded verbatim as the Tailwind class `text-[#00ADF7]` on the hero highlight ("the Life Journey") and used as the fill for small full-round data-point indicator dots. The system's single "signal" color. Token-set key `tokens.colors.primary`.
- **Accent Violet** (`#7b61ff`): Secondary accent for the numbered section index labels ("1. / 2. / 3.") and the small "we're hiring" tag. Never a background — always a small typographic marker. Token-set key `tokens.colors.accent-violet`.

Text / ink hierarchy

- **Ink** (`#191a1f`): Primary text and card copy color (the most frequent foreground on the page). Token-set key `tokens.colors.ink`.
- **Heading Navy** (`#1a1b1e`): Display headlines and section titles — a hair softer than ink, still near-black. Token-set key `tokens.colors.heading`.
- **Body Black** (`#0a0a0a`): The document default body color. Token-set key `tokens.colors.body`.
- **Dark Slate** (`#28292d`): Inline underlined CTA links, footer section heads, and the active-nav ink on white surfaces. Token-set key `tokens.colors.dark`.
- **Meta Grey** (`#3c3d42`): Footer sub-navigation links and secondary metadata. Token-set key `tokens.colors.meta`.
- **Muted Grey** (`#5d5d60`): Tertiary text, captions, and muted labels. Token-set key `tokens.colors.muted`.
- **Faint Grey** (`#b0b3ba`): Disabled state, inactive language toggle, lowest-emphasis text. Token-set key `tokens.colors.faint`.

Neutral and surface

- **Pure White** (`#ffffff`): Page background, card surfaces, and text on the mint hero / azure accents. Token-set key `tokens.colors.canvas`.
- **Cool-Grey Surface** (`#f4f6f9`): Tinted surface for feature cards and the language-toggle pill background. Token-set key `tokens.colors.surface`.
- **Hero Mint** (`#dfe7e4`): The soft mint-grey wash behind the full-height homepage hero. Token-set key `tokens.colors.hero-mint`.
- **Data Blue Tint** (`#c7e1ff`): Pale blue tinted surface for data-visualization and metric cards. Token-set key `tokens.colors.blue-tint`.
- **Hairline** (`#d8dde4`): Thin borders, dividers, and list-row rules — the primary separation device in a shadowless system. Token-set key `tokens.colors.hairline`.

### Spacing

Token-set steps, unitless: `xs 4 · sm 8 · nav 14 · md 24 · lg 40 · xl 64 · section 120 · band 144`. Visible sections also write 4px, 8px, 14px, 24px, 40px, 64px, 120px, and 144px where those strings already appear. The source also writes a base unit of 8px as the rhythm those steps sit on. Token-set key `tokens.spacing.xs: 4` is a spacing step. Token-set key `tokens.spacing.sm: 8` is a spacing step. It is not `tokens.rounded.sm: 8`. Token-set key `tokens.spacing.nav: 14` is a spacing step. Token-set key `tokens.spacing.md: 24` is a spacing step. It is not `tokens.rounded.lg: 24`. Token-set key `tokens.spacing.lg: 40` is a spacing step. Token-set key `tokens.spacing.xl: 64` is a spacing step. Token-set key `tokens.spacing.section: 120` is a spacing step for section bands. Token-set key `tokens.spacing.band: 144` is a spacing step. Keeping those keys on separate paths is a derived editorial implementation inference from the verified surfaces; it is not Humanscape-authored or a separately published UI specification.

### Shape

Token-set steps, unitless: `sm 8 · lg 24 · xl 32 · full 9999`. Named uses the source records:

- Small (8px): nav chips, inner elements. Token-set key `tokens.rounded.sm`.
- Large (24px): feature cards — the workhorse. Token-set key `tokens.rounded.lg`.
- Extra-large (32px): data / metric cards. Token-set key `tokens.rounded.xl`.
- Full (9999): language toggle pills, azure data dots. Token-set key `tokens.rounded.full`. The source also writes this step as `9999px`.

`tokens.rounded.sm: 8` is a radius step. It is not `tokens.spacing.sm: 8`. `tokens.rounded.lg: 24` is a radius step. It is not `tokens.spacing.md: 24`. `tokens.rounded.xl: 32` is a radius step. It is not the 32px card-section title. `tokens.rounded.full: 9999` has no spacing counterpart. Calling 24px the workhorse for feature cards, keeping `tokens.rounded` steps off the spacing keys that share a number, and keeping the 32px data-card radius off the 32px type size, is a derived editorial implementation inference from the verified surfaces; it is not Humanscape-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Wash (Level 1) | Background shift (`#dfe7e4` / `#f4f6f9` / `#c7e1ff`) | Section and card separation without elevation |
| Hairline (Level 2) | `1px solid #d8dde4` | List-row dividers, card outlines |

Humanscape/LifeX is a fully shadowless system. Live inspection returned `box-shadow: none` on the hero, navigation, headings, cards, and list rows. Token-set key `tokens.shadow.none: none`. Depth and grouping are communicated entirely through flat tinted washes (mint `#dfe7e4`, cool-grey `#f4f6f9`, data-blue `#c7e1ff`) and thin `#d8dde4` hairlines. When emphasis is needed the system reaches for color (azure `#00adf7`) or scale (a 112px headline), never elevation. Reading that stack as a flat, wash-and-hairline elevation system is a derived editorial implementation inference from the verified surfaces; it is not Humanscape-authored or a separately published UI specification. The measurements themselves are recorded values.

### Motion

Durations the source attributes to named tokens:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, nav/link, focus |
| `motion-standard` | 240ms | Card / section reveal, toggle, dropdown |
| `motion-slow` | 400ms | Full-height hero reveal, page-level transitions |

Easing roles — three roles with declared uses. The specific curve values the source lists are not traceable to Humanscape evidence, so the curves are omitted here and only the roles and their uses are kept. Classing those curves as untraceable to Humanscape evidence, and omitting them on that ground, is a derived editorial implementation inference from the verified surfaces; it is not Humanscape-authored or a separately published UI specification:

| Token | Use |
|---|---|
| `ease-enter` | Arriving — sections, cards, data reveals |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions |

A future motion pass may promote an omitted curve only after recording, per component, the computed transition properties, the animation name, the duration, the easing, and the reduced-motion behavior on the live surface; confirming a single curve, or citing an official source for one, does not satisfy that condition. That condition is set by this document, not by Humanscape.

Motion rules, as the source states them:

- Motion is quiet, editorial, and evidence-paced — consistent with the flat, science-forward aesthetic.
- Oversized hero headlines and data metrics fade/rise in from below at `motion-standard / ease-enter`; azure data dots may animate in as the underlying number resolves, reinforcing "the signal arriving in the data."
- No bounce, spring, or overshoot — a healthcare-data company signals steadiness and credibility, not playfulness.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the page remains fully functional.

Reading those motion rules as matching a flat, science-forward aesthetic, and reading the no-bounce stance as a steadiness signal, is a derived editorial implementation inference from the verified surfaces; it is not Humanscape-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The two inspected LifeX surfaces ship live type. They do not publish a universal current typography token or a separately issued type specimen. That "no published type token" reading is a derived editorial implementation inference from the verified surfaces; it is not Humanscape-authored or a separately published UI specification. |
| Live computed surface-use | Both captured surfaces compute visible text as Pretendard, from the 112px page hero down to the 12px hiring tag. |
| Official distributed asset | No Humanscape-exclusive distributed type family was verified. Classing the absence of a separately distributed family as an evidence class, not as a claim that some other face is in use, is a derived editorial implementation inference from the verified surfaces; it is not Humanscape-authored or a separately published UI specification. |
| Declared-only | The live stack also names `Pretendard Fallback` and `system-ui`. Those names are fallbacks; they are not the brand face. Classing those load names as fallbacks rather than the Humanscape face is a derived editorial implementation inference from the verified surfaces; it is not Humanscape-authored or a separately published UI specification. |
| License | Pretendard is an upstream face. This describes the font asset, not a Humanscape brand asset. Treating Pretendard as an upstream face rather than a Humanscape-owned type family is a derived editorial implementation inference from the verified surfaces; it is not Humanscape-authored or a separately published UI specification. |
| Outside these captures | Type beyond the two inspected pages (`https://humanscape.io/` / `https://lifex.io/` and `https://lifex.io/our-business`) remains outside these two captures. Naming only those source-established pages as the capture boundary, rather than opening a surface the source never named, is a derived editorial implementation inference from the verified surfaces; it is not Humanscape-authored or a separately published UI specification. |

### Family

- **Sans (single family):** `Pretendard` (with `Pretendard Fallback`, `system-ui`) — used for every text element, from the 112px page hero down to the 12px hiring tag. Token-set key `tokens.typography.family.sans`. There is no separate display face; Pretendard carries both display and body roles.
- Do not replace unavailable or unobserved brand type with Pretendard, and do not present `Pretendard Fallback` or `system-ui` as the Humanscape face. Pretendard is canonical here only because computed visible use on the two inspected pages agrees with the token-set family. That substitution ban is a derived editorial implementation inference from the verified surfaces; it is not Humanscape-authored or a separately published UI specification.

### Type roles

| Role | Font | Size | Weight | Line height | Token-set use |
|---|---|---:|---:|---|---|
| Page Hero Title | Pretendard | 112px (7.00rem) | 600 | tight | Page hero title (Our Business) |
| Closing Statement | Pretendard | 90px (5.63rem) | 500 | tight | Closing statement headline |
| Section Headline | Pretendard | 64px (4.00rem) | 500 | 1.2 | Section headline |
| Homepage Hero H1 | Pretendard | 58px (3.63rem) | 500 | ~1.2 | Homepage hero H1 |
| Sub-hero H1 | Pretendard | 52px (3.25rem) | 500 | ~1.2 | — |
| Card Section Title | Pretendard | 32px (2.00rem) | 500 | normal | Card section title |
| Card Title | Pretendard | 24px (1.50rem) | 500 | normal | Card title |
| Section Index Label | Pretendard | 16px (1.00rem) | 500 | normal | Section index label (violet) |
| Body / Nav / Button | Pretendard | 16px (1.00rem) | 400 | 1.50 (24px) | Body, nav, buttons |
| Language Toggle | Pretendard | 14px (0.88rem) | 600 | normal | Language toggle pill |
| Micro Tag | Pretendard | 12px (0.75rem) | 600 | normal | Hiring badge / small tag |

The Sub-hero H1 row (52px / 500 / ~1.2) is from the source hierarchy table and has no token-set key. Token-set `tokens.typography.hero.lineHeight: 1.2` stays a unitless ratio on the Section Headline row. Token-set `tokens.typography.body.lineHeight: 1.5` stays a unitless ratio on the Body / Nav / Button row; the source also writes `1.50 (24px)` beside it, and both forms stay. They are never converted to a single px form. Keeping those ratios as ratios, and refusing a single px conversion, is a derived editorial implementation inference from the verified surfaces; it is not Humanscape-authored or a separately published UI specification.

YAML `use` strings restored verbatim: `Page hero title (Our Business)`, `Closing statement headline`, `Section headline`, `Homepage hero H1`, `Card section title`, `Card title`, `Section index label (violet)`, `Body, nav, buttons`, `Language toggle pill`, `Hiring badge / small tag`.

### Type rules

The source states these four as its typography principles. Reading the scale as those four rules is a derived editorial implementation inference from the verified surfaces; it is not Humanscape-authored or a separately published UI specification.

- **Scale, not weight, is the hierarchy**: display sizes climb to 112px while staying at weight 500-600. The system never reaches for 700-800 to command attention.
- **One family, two jobs**: Pretendard is both the display and the reading voice; the difference between a headline and a paragraph is size, not typeface.
- **Airy display, dense body**: headlines get vast surrounding whitespace; body text stays at a compact 16px / 1.5 for information-dense corporate content.
- **Accent by color, not weight**: the violet section labels and azure highlight word carry emphasis through hue, letting the surrounding type stay calm.

### Assets

- The catalog's logo entry for this reference is a Google favicon-service URL (`https://www.google.com/s2/favicons?domain=humanscape.io&sz=128`) rather than a Humanscape-hosted file. The source's own sibling excludes that service from the KR brand-owned count, so the URL is recorded here as a favicon-service pointer and in the provenance ledger, and is not presented as a Humanscape-hosted brand asset. Classing that entry as a third-party favicon service is a derived editorial implementation inference from the verified surfaces; it is not Humanscape-authored or a separately published UI specification.
- Product screenshots and data visuals carry no shadow at any size, consistent with the flat system. Cards maintain their 24px / 32px radius across the breakpoints the source declares. Azure data dots and tint surfaces persist as the visual signal. Reading that shadowless image behavior as consistent with the flat system is a derived editorial implementation inference from the verified surfaces; it is not Humanscape-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### How to read this section

The source declares each component with a primitive type (`button`, `tab`, `toggle`, `card`, `badge`, `listItem`) and a value set. Those types are preserved per component, and only on the component that holds the matching token-set key. Applicability below is judged by each control's role in this product, not by whether a visual treatment for that state was recorded; where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. The source's live inspection recorded computed default styling, and the state treatments in the State record below are stated at system level rather than measured per control. Every kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; it is not Humanscape-authored or a separately published UI specification. This is not a claim that state coverage is finished.

The source records no `focus-visible` treatment. Generic focus is not invented. `focus-visible` stays applicable on interactive controls; the visual treatment is omitted.

### Nav Link

- Role: top navigation items (About Us, Our Business, Newsroom, Investor Relations, Career)
- Primitive type: `tab` · Kind: interactive
- Domain: Corporate (`humanscape.io` / `lifex.io`)
- Text: `#1a1b1e`
- Radius: 8px
- Padding: 8px 14px
- Font: 16px Pretendard weight 400
- Active: `#00adf7` text
- Token-set font record: `16px / 400`
- Token-set use: `Top navigation item`
- Token-set active: `text #00adf7`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web nav item; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A nav item can be gated; treatment omitted |
| loading | not-applicable | This item is a destination tab/link; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination tab/link; the destination, not the item, reports failure |
| success | not-applicable | Same role reason: reaching a nav destination is not an operation with a success result |

### Language Toggle Pill

- Role: KR/EN language switch — active language filled, inactive `#b0b3ba` text
- Primitive type: `toggle` · Kind: interactive
- Domain: Corporate
- Background: `#f4f6f9`
- Text: `#28292d`
- Radius: 9999px (full pill)
- Padding: 8px 14px
- Font: 14px Pretendard weight 600
- Token-set font record: `14px / 600`
- Token-set use: `KR/EN language pill toggle`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web toggle; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A language switch can be gated; treatment omitted |
| loading | not-applicable | This control selects a language; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Toggle role; selecting KR or EN is not an operation this control reports as failure |
| success | not-applicable | Same role reason: selecting a language is not an operation with a success result |

### Inline Underlined CTA

- Role: primary text CTA ("eXplore Our Business", "eXplore About Us") — the site favors underlined links over filled buttons
- Primitive type: `button` · Kind: interactive
- Domain: Corporate
- Text: `#28292d`
- Border: `0 0 1px solid #28292d` (bottom rule only)
- Font: 18px Pretendard weight 400
- Token-set font record: `18px / 400`
- Token-set use: `Inline underlined text CTA (eXplore Our Business)`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destination control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination control can be gated; treatment omitted |
| loading | not-applicable | This control takes the reader to a destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination role; the destination, not this control, reports failure |
| success | not-applicable | Same role reason: reaching a destination is not an operation with a success result |

### Feature Card

- Role: Feature / content card on the cool-grey surface (no shadow)
- Primitive type: `card`
- Domain: Corporate
- Background: `#f4f6f9`
- Text: `#191a1f`
- Radius: 24px
- Token-set use: `Feature/content card on cool-grey surface`
- No kind and no applicability map: the source supplies no interaction evidence for this container, so neither is decided here.

### Data Card

- Role: Data-visualization / metric card with a pale-blue tint
- Primitive type: `card`
- Domain: Corporate
- Background: `#c7e1ff`
- Text: `#191a1f`
- Radius: 32px
- Token-set use: `Data-viz tinted metric card`
- No kind and no applicability map: the source supplies no interaction evidence for this container, so neither is decided here.

### Section Index Label

- Role: Violet numbered section labels ("1. Built on Healthcare Network")
- Primitive type: `badge`
- Kind: non-interactive — a numbered section marker, not a commit control
- Domain: Corporate
- Text: `#7b61ff`
- Font: 16px Pretendard weight 500
- Token-set font record: `16px / 500`
- Token-set use: `Section index label 1/2/3 (violet)`

### Hiring Tag

- Role: "we're hiring" micro tag
- Primitive type: `badge`
- Kind: non-interactive — a careers marker, not a commit control
- Domain: Corporate
- Text: `#7b61ff`
- Font: 12px Pretendard weight 600
- Token-set font record: `12px / 600`
- Token-set use: `'we're hiring' micro tag`

### Data Dot

- Role: Small azure data-point indicator (14px) beside metrics and timeline markers
- Primitive type: `badge`
- Kind: non-interactive — a data-point marker, not a commit control
- Domain: Corporate
- Background: `#00adf7`
- Text: `#191a1f`
- Radius: 9999px (full)
- Token-set use: `Azure data-point indicator dot`

### Growth Layers Row

- Role: Stacked "Growth Layers" list rows separated by hairline dividers
- Primitive type: `listItem`
- Domain: Corporate
- Text: `#191a1f`
- Border: `0 0 1px solid #d8dde4` (bottom hairline)
- Padding: 40px 0
- Font: 16px Pretendard weight 400
- Token-set font record: `16px / 400`
- Token-set use: `Growth Layers list row with hairline divider`
- No kind and no applicability map: the source supplies no interaction evidence for this row, so neither is decided here.

### State record

The source's state contract, preserved with its values and copy. The treatments below are a derived editorial implementation inference from the verified surfaces rather than measured per-control observations or treatments attached to the corporate destination controls, and they are not Humanscape-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (no data / results)** | White canvas. A single Ink (`#191a1f`) line explaining that no data is available yet, with one underlined `#28292d` text CTA to adjust the query. No illustration clutter, no alarm. |
| **Empty (saved / watchlist, none yet)** | Muted Grey (`#5d5d60`) single line stating nothing is saved, plus a calm path back. Honest and quiet. |
| **Loading (data fetch)** | Skeleton blocks on `#f4f6f9` tinted surface at final card dimensions, 24px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (metric compute)** | Inline progress near the azure data dot; previous values stay visible until the new value resolves. |
| **Error (fetch failed)** | Inline message in Ink (`#191a1f`) with a plain-language explanation and a retry link. No bare "오류가 발생했습니다" — always states the next step. |
| **Error (form validation)** | Field-level message below the input in a calm tone; describes what is valid, not just "필수". |
| **Success (submitted / saved)** | Brief inline confirmation in a calm tone; the relevant detail links immediately below. No celebratory emoji. |
| **Skeleton** | `#f4f6f9` blocks at final dimensions, 24px radius, flat pulse. |
| **Disabled** | Faint Grey (`#b0b3ba`) text on a reduced-opacity surface; the azure `#00adf7` accent fades rather than switching to grey, to preserve the brand read. |

These rows describe empty/loading/error/success treatments the source wrote at system level. They are not attached as visual treatments to the corporate destination controls above.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- Full-height (`100dvh`) hero anchored on the mint (`#dfe7e4`) wash with the 58px Pretendard headline centered
- Business-area cards laid out as a horizontal set of large rounded cards (24-32px radius)
- "Growth Layers" rendered as a stacked vertical list where each row is a 40px-padded band separated by a `#d8dde4` hairline
- Partner/investor logos arranged in grouped grids under 24px H3 category heads
- Footer expands into a multi-column sitemap (About Us / Our Business / Newsroom / Investor Relations)
- Spacing restated from `tokens.spacing`: 4 / 8 / 14 / 24 / 40 / 64 / 120 / 144
- Shape restated from `tokens.rounded`: nav 8 · feature 24 · data 32 · full 9999

Whitespace the source states:

- **Air as authority**: oversized headlines with generous surrounding space signal confidence without heavy weight.
- **Flat segmentation**: sections separate by background wash (mint `#dfe7e4` vs white `#ffffff` vs cool-grey `#f4f6f9`) and hairlines, never by shadow.
- **Data breathing room**: metric cards on `#c7e1ff` tint get their own space so the numbers read as evidence, not decoration.

Reading the page as air-as-authority, reading bands as tint-not-elevate segmentation, and reading metric space as evidence rather than decoration, is a derived editorial implementation inference from the verified surfaces; it is not Humanscape-authored or a separately published UI specification.

Responsive behavior. The source's live inspection was run as a desktop computed-style pass, and its own evidence note attributes token-level claims to that inspection; the breakpoints, collapsing strategy, image behavior, and the recorded target sizes are stated by the source at system level rather than measured across viewports, so they are a derived editorial implementation inference from the verified surfaces and are not Humanscape-authored or a separately published UI specification.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single column, hero headline compresses (112px -> ~40px), cards stack |
| Tablet | 640-1024px | 2-up card layout, moderate padding |
| Desktop | 1024-1440px | Full layout, full-height hero, horizontal card sets |

Touch targets the source records:

- Nav links at 40px height with 8px 14px padding — comfortably tappable
- Language toggle as a full pill for an unmistakable target
- Growth-layer rows at 40px vertical padding give generous tap zones

Collapsing strategy, as the source states it:

- Hero: oversized Pretendard headline scales down on mobile, weight 500-600 maintained
- Business-area cards: horizontal set -> stacked single column
- Growth Layers list: hairline-separated rows maintain full-width, padding tightens
- Partner logo grids: multi-column -> 2-column -> single column
- Mint / white / cool-grey wash sections keep full-width treatment

Image behavior: product screenshots and data visuals carry no shadow at any size, consistent with the flat system. Cards maintain their 24px / 32px radius across breakpoints. Azure data dots and tint surfaces persist as the visual signal on smaller screens. The Desktop row keeps the source body's `1024-1440px` range. Reading that image behavior as consistent with the flat system is a derived editorial implementation inference from the verified surfaces; it is not Humanscape-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The source characterizes Humanscape/LifeX's voice as **clear, humane, and evidence-led** — a healthcare-data company that speaks about serious subjects (rare disease, patient data, clinical outcomes) with calm confidence rather than either cold clinical jargon or startup hype. The brand's own hero framing — "eXploring human Life through data-driven Intelligence" and the closing "eXplore Life, Decide Better." — sets the register: human life first, data second, treating data as a means to better decisions, not an end in itself. Copy addresses partners, patients, and investors as intelligent readers who deserve transparency about how the data works. That characterization, that register reading, and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not Humanscape-authored or a separately published UI specification. The quoted lines themselves are live surface copy.

| Context | Tone |
|---|---|
| Hero headlines | Mission-framed, humane. "eXploring human Life through data-driven Intelligence." Confident, never superlative. |
| Business-area labels | Plain and descriptive. "AI Growth Monitoring", "Developmental Care & Treatment", "Care Navigation for Serious Illness". |
| Scale claims | Concrete and specific. "1,800+ Healthcare Network", "2.5M+ Global User Base", "230M+ Data Intelligence". |
| CTAs | Low-key invitations. "eXplore Our Business", "eXplore About Us". |
| Careers | Warm and inviting. A small violet "we're hiring" tag rather than an aggressive banner. |

**Voice samples (verbatim from live homepage, verified 2026-07-02):** The quoted lines are live surface copy. The parenthetical readings after each sample are a derived editorial implementation inference from the verified surfaces; they are not Humanscape-authored or a separately published UI specification.

- "eXploring human Life through data-driven Intelligence Across the Life Journey" — hero headline (human-first, data-second framing).
- "The Foundation for Scalable Innovation." — section headline (infrastructure register).
- "eXplore Life, Decide Better." — closing statement (data-for-decisions mission).

Further published strings the source records on the inspected surfaces, kept byte-exact:

- Humanscape
- 휴먼스케이프
- LifeX
- RareNote
- 레어노트
- MamiTalk
- 마미톡
- 장민후
- Jang Min-hoo
- the Life Journey
- eXplore Our Business
- eXplore About Us
- About Us
- Our Business
- Newsroom
- Investor Relations
- Career
- 1. Built on Healthcare Network
- 2. Powered by Global User Base
- 3. Scaled by Data Intelligence
- 1,800+ Healthcare Network
- 2.5M+ Global User Base
- 230M+ Data Intelligence
- AI Growth Monitoring
- Developmental Care & Treatment
- Care Navigation for Serious Illness
- we're hiring
- Growth Layers
- KR
- EN
- Intelligence Across the Life Journey
- text-[#00ADF7]
- 오류가 발생했습니다
- 필수

**Forbidden register**: fear-based medical urgency, undefined clinical jargon, hype superlatives ("revolutionary", "world-class"), and anything that treats patient data as a commodity rather than a trust. The source states that forbidden list.

Reproduce the Korean strings above byte-exact rather than translating or re-casing them. An English gloss may sit beside a Korean line; it never replaces the line. That byte-exact / gloss-beside rule is a derived editorial implementation inference from the verified surfaces; it is not Humanscape-authored or a separately published UI specification.

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=evidence-backed-reconstruction lang=en -->
### Authority

This document is an evidence-backed reconstruction, not authority for an unrelated target project.
<!-- design-md:claim-end -->

<!-- design-md:claim application-priority order=prompt-fact,repository-fact,system-contract,reference-inspiration lang=en -->
### Application priority

1. Direct user instructions for the requested scope.
2. Repository facts.
3. This system contract.
4. Reference inspiration.
<!-- design-md:claim-end -->

<!-- design-md:claim unknowns policy=absent-at-smallest-unresolved-boundary lang=en -->
### Unknowns

Omit only the smallest unresolved value or group. Do not replace it with a plausible default.
<!-- design-md:claim-end -->

<!-- design-md:claim changes policy=review-record-validate-before-adoption lang=en -->
### Changes

Record, review, and validate changes before adoption.
<!-- design-md:claim-end -->

### Recorded unresolved decisions

These are named values the source already opened, not permissions to invent, and not a list of domains the source never established. That framing is a derived editorial implementation inference from the verified surfaces; it is not Humanscape-authored or a separately published UI specification:

- Exact easing curves. Three easing roles and their uses are established; the curve values are omitted because they are not traceable to Humanscape evidence. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- focus-visible visual treatments on the declared controls
- hover visual treatments on the declared controls
- The disabled fade value. The system states that the azure `#00adf7` accent fades rather than switching to grey, without naming an opacity.
