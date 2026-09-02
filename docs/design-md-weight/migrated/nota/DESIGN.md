# Nota AI Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Nota AI (노타) is a Korean on-device-AI company whose mission is, in its own words, "Democratizing the use of AI." This contract covers the three first-party web surfaces the source inspected live on 2026-06-26: the homepage at `https://www.nota.ai`, the Tech Blog at `https://www.nota.ai/community`, and the contact form at `https://www.nota.ai/contact-us`. The official GitHub organization at `https://github.com/nota-github` is a named brand-owned source (HTTP 200); it does not supply the computed interface tokens below. The About Us page at `https://www.nota.ai/aboutus` is a named brand source for the mission string and company story; it does not supply those computed tokens. Treating those three inspected routes as this contract's token surfaces, and keeping GitHub and About Us as named sources that do not supply computed interface tokens, are derived editorial implementation inferences from the verified surfaces; they are not Nota AI-authored or a separately published UI specification.

The homepage stages that ambition as a confident, engineering-grade product site rather than a hype-driven startup splash. The captured interface layer: the hero opens on a deep, cool dark-navy canvas (`#252a39`) with crisp off-white headlines (`#f5f5f7`), then the page descends into bright white (`#ffffff`) and pale cool-grey (`#f6f6f8`) feature bands where text shifts to a dense near-black (`#101218`) — never pure-black body, which keeps long technical copy readable. The single saturated accent across the whole system is an electric, slightly cobalt blue (`#3264f0`): it carries links, the blue section eyebrow labels ("Newsroom", "Tech Blog"), and the primary outline button. The typographic voice is set in **Roboto** — the workhorse neo-grotesque — used for everything from the 52px / weight-700 hero ("Industry-tailored Vision Intelligence") down to 12px form fields and link buttons; the Korean locale swaps in **Pretendard** for hangul density. The result reads as precise and industrial. The hierarchy is built on size and weight contrast rather than many type families: bold 700 hero, regular 400 section headlines at ~43px, and a distinctive 21px blue eyebrow that floats above section titles like a chapter marker. Body copy sits quietly at 12–14px. Depth is handled with restraint. Most separation comes from flat tinted bands (`#f6f6f8`) and thin hairlines (`#e7e7e7`, `#eaeaee`) rather than heavy elevation; when a card does lift, it uses a single soft, slightly-offset grey shadow (`rgba(141,141,141,0.15) 10px 10px 28px 0px`) on a 10px-radius surface. Geometry is gently rounded: a dominant **10px** card radius, **4px** buttons, **8px** on filled CTAs, with the cookie/contact form fields kept deliberately **sharp (0px)** and outlined in `#000000`. Muted greys (`#7e8390`, `#888888`, `#aaaaaa`) ladder the secondary text. The hex values, families, radii, labels, and class names named beside them are the source's own. The readings in this section — confident engineering-grade product site rather than a hype-driven startup splash; the eye is trained to read that one hue as "this is interactive."; The result reads as precise and industrial; a company that ships AI onto cameras, cars, and edge devices and wants its marketing surface to feel as measured as its product; diffuse and quiet, never dramatic; a clean, modern, slightly technical white-and-navy system anchored by one decisive blue; the workhorse neo-grotesque; which keeps long technical copy readable; hierarchy built on size and weight contrast rather than many type families; the 21px blue eyebrow that floats above section titles like a chapter marker; Depth is handled with restraint — are a derived editorial implementation inference from the verified surfaces; they are not Nota AI-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Nota AI (노타, Nota Inc.) was founded in **2015** in Korea with a mission it states plainly today: **"Democratizing the use of AI."** The company began as an AI startup and evolved into a leader in **on-device / edge AI** — the discipline of compressing and optimizing neural networks so they run efficiently on real hardware (cameras, vehicles, embedded devices) rather than only in the cloud. Its flagship platform, **NetsPresso®**, is an end-to-end neural-network optimization toolchain that takes models from training to deployable, hardware-aware form. Around that core, Nota builds vertical **AI Solutions** — Vision Agent, Intelligent Transportation Systems (ITS), Driver Monitoring & Face Recognition (DMS & FR), Industrial Safety, and Surveillance — each tailored to a specific industry. The company expanded globally with subsidiaries in **Berlin (2018)** and **Sunnyvale (2023)**, signalling a deliberate move beyond the domestic market toward automotive and industrial AI customers worldwide. What Nota's design refuses, visible in its restraint: the over-saturated, gradient-heavy aesthetic of consumer-AI hype, and the intimidating density of legacy enterprise software. What it embraces: a clean white-and-navy system, a single decisive blue, plain capability-first language, and a layout disciplined enough (the recurring blue eyebrow, the flat tinted bands) to feel as engineered as the on-device models it ships. Founding year, mission string, NetsPresso®, the vertical solution names, and the subsidiary years are the source's own recordings. The source's own note that specific dates beyond the About Us page are general public knowledge, not independently re-verified that turn, is kept here. Classifying that founding-and-product narrative, the refuses/embraces pairing, and the closing sentence that the layout is disciplined enough to feel as engineered as the on-device models it ships as brand context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Nota AI-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=5 lang=en -->
### Primary tasks

Selecting these five as the product's primary tasks, each naming a control, label, or surface the source records, is a derived editorial implementation inference from the verified surfaces; it is not Nota AI-authored or a separately published UI specification. They do not come from a persona section.

- Read the hero headline `Industry-tailored Vision Intelligence`.
- Act on the captured CTAs `Read More →`, `Learn more →`, and `Subscribe to our newsletter →`.
- Move between the top-level areas named in the top nav: `AI Solutions`, `Tech Blog`, `Company`, `Contact Us`.
- Fill the contact form fields on `https://www.nota.ai/contact-us`.
- Scan the blue eyebrow labels `Newsroom` and `Tech Blog`.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as fictional archetypes, so those biographies are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records as publicly observable Nota AI customer segments, kept in its wording: embedded/edge AI engineers, automotive and industrial buyers, ML researchers. Copy on the captured surfaces treats the reader as a technical buyer or engineer who wants to know what the product does and where it runs. Dropping the fictional biographies rather than promoting them, carrying no name, age, city, motivation, or affiliation classification, reading those source-named groups as this product's audience, and keeping the source's technical-buyer-or-engineer note beside those groups, are derived editorial implementation inferences from the verified surfaces; they are not Nota AI-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside them, is a derived editorial implementation inference from the verified surfaces; it is not Nota AI-authored or a separately published UI specification.

- Dark-navy (`#252a39`) hero/footer canvas paired with bright white (`#ffffff`) feature bands
- Single saturated accent blue (`#3264f0`) reserved for links, eyebrow labels, and the primary button
- Near-black (`#101218`) for on-light text instead of pure black — warmer, easier to read
- Off-white (`#f5f5f7`) headlines on the dark hero for soft, high-end contrast
- Roboto everywhere (Pretendard for the KOR locale) — size + weight carry the hierarchy
- Distinctive 21px blue eyebrow label floating above section headlines
- Flat depth: tinted `#f6f6f8` bands and `#e7e7e7` / `#eaeaee` hairlines do the separating
- One soft diffuse card shadow (`rgba(141,141,141,0.15) 10px 10px 28px`) when lift is needed
- Gently rounded geometry — 10px cards, 4px / 8px buttons — with sharp 0px outlined form fields

### Principles

These 5 items are a derived editorial implementation inference from the verified surfaces; they are not Nota AI-authored or a separately published UI specification. The source labels interpretive claims of this kind — for example "engineered restraint", "one action, one color", "calm navy, bright work" — as editorial readings connecting Nota's observed design to its stated mission, not directly sourced Nota statements.

1. **Democratize, don't gatekeep.** The stated mission is to make AI usable broadly. *UI implication:* plain, capability-first copy; no undefined jargon; outcomes named before features.
2. **One action, one color.** Blue (`#3264f0`) means "interactive." *UI implication:* reserve the accent for links, eyebrows, and the primary button so the next step is never ambiguous.
3. **Engineered restraint.** A company that optimizes models for efficiency should not waste pixels. *UI implication:* flat depth, hairline separation, one soft shadow — nothing decorative.
4. **Structure you can feel.** The blue eyebrow label is a recurring chapter marker. *UI implication:* keep the eyebrow-over-headline rhythm consistent across sections.
5. **Calm navy, bright work.** *UI implication:* dark-navy (`#252a39`) hero/footer bookend bright white (`#ffffff`) feature bands — drama from contrast, not from color noise.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Nota AI-authored or a separately published UI specification.

- Use Roboto for the ENG system (Pretendard for KOR) and let weight + size carry hierarchy
- Reserve the accent blue (`#3264f0`) for links, eyebrow labels, and the primary button — the single action color
- Use the blue 21px eyebrow label above section headlines — it's the layout's signature marker
- Use near-black navy (`#101218`) for on-light text instead of pure black
- Pair the dark-navy hero/footer (`#252a39`) with bright white (`#ffffff`) feature bands
- Separate sections with flat `#f6f6f8` tints and `#e7e7e7` hairlines, not heavy shadows
- Keep cards at 10px radius; when lift is needed use the soft `rgba(141,141,141,0.15) 10px 10px 28px` shadow
- Keep contact-form fields sharp (0px) with the `#000000` outline and `#fafafa` fill

### Avoid

The source states these eight as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Nota AI-authored or a separately published UI specification.

- Spread the accent blue across many elements — it dilutes the single-action signal
- Use pure black (`#000000`) for body text — reserve near-black `#101218` for reading
- Stack heavy or dark drop shadows for elevation — Nota leans flat
- Mix in a second saturated accent color — blue is the only brand hue
- Round the form fields — they are intentionally sharp against the rounded cards
- Use a second display typeface — Roboto (ENG) / Pretendard (KOR) own the system
- Drop the eyebrow label — it is the recurring structural device above headlines
- Use stark `#ffffff` headlines on the dark hero — soften to `#f5f5f7`

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Role names follow the source's own labels and token-set keys. Taking those role names from the source's own labels, pairing each hex to the token-set path named beside it, keeping canvas `#ffffff` (page background for feature bands, card surfaces) off `tokens.colors.on-primary` `#ffffff` (text on navy fills and the dark hero), keeping `tokens.colors.black` `#000000` (maximum-contrast accents and the contact-form field border) off `tokens.colors.ink` `#101218` (on-light reading), keeping `tokens.colors.hairline` `#e7e7e7` off `tokens.colors.border-soft` `#eaeaee`, and keeping `#7e8390` / `#888888` / `#aaaaaa` as three grey keys rather than one, are derived editorial implementation inferences from the verified surfaces; they are not Nota AI-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

**Primary**

- **Nota Blue** (`#3264f0`): The single saturated brand accent. Links, the blue section eyebrow labels, primary outline button border + text, and interactive highlights. The system's one "action" color. Token-set path `tokens.colors.primary`. Catalog `primary_color` is the same hex.

**Dark Canvas & Ink**

- **Dark Navy** (`#252a39`): Hero and footer background, filled-CTA fill, and dark immersive sections. A cool blue-charcoal that grounds the brand. Token-set path `tokens.colors.navy`.
- **Ink Near-Black** (`#101218`): Primary on-light text and heading color — a very dark blue-black used instead of pure black for body copy. Token-set path `tokens.colors.ink`.
- **Pure Black** (`#000000`): Maximum-contrast accents and the contact-form field border (`1px solid #000000`). Token-set path `tokens.colors.black`.

**Neutral & Surface**

- **Pure White** (`#ffffff`): Page background for feature bands, card surfaces, and text on dark/navy. Token-set path `tokens.colors.canvas`. Same hex as `tokens.colors.on-primary`; it stays a second key.
- **Headline Off-White** (`#f5f5f7`): Hero headline color on the dark-navy canvas — soft white, not stark. Token-set path `tokens.colors.headline`.
- **Surface Grey** (`#f6f6f8`): Cool pale-grey tinted band for alternating sections and grouped content. Token-set path `tokens.colors.surface`.
- **Field Grey** (`#fafafa`): Background fill for contact/form input fields. Token-set path `tokens.colors.field`.
- **Hairline** (`#e7e7e7`): Thin card outlines and dividers — the primary separation device. Token-set path `tokens.colors.hairline`.
- **Border Soft** (`#eaeaee`): Alternate soft border on light surfaces and quiet dividers. Token-set path `tokens.colors.border-soft`.

**Text Hierarchy**

- **Ink Near-Black** (`#101218`): Primary text, headings, strong labels on light.
- **Slate** (`#7e8390`): Secondary body copy, descriptions, captions. Token-set path `tokens.colors.slate`.
- **Muted Grey** (`#888888`): Tertiary text and metadata. Token-set path `tokens.colors.muted`.
- **Faint Grey** (`#aaaaaa`): Lowest-emphasis labels, disabled/placeholder text, language-switcher idle state. Token-set path `tokens.colors.faint`.
- **On-Primary White** (`#ffffff`): Text on navy fills and the dark hero — declared as `on-primary`. Token-set path `tokens.colors.on-primary`. Same hex as `tokens.colors.canvas`; it stays a second key.

### Spacing

Token-set paths: `tokens.spacing.xs: 4`, `tokens.spacing.sm: 8`, `tokens.spacing.md: 11`, `tokens.spacing.base: 15`, `tokens.spacing.lg: 16`, `tokens.spacing.xl: 24`, `tokens.spacing.xxl: 48`, `tokens.spacing.section: 64`. YAML writes those steps unitless. Source §5 writes Base unit: ~4px and the scale as `4px, 8px, 11px, 15px, 16px, 24px, 48px, 64px`. Both writings stay. The unitless YAML steps are not rewritten as a replacement `px`. `tokens.spacing.md: 11` is not `tokens.spacing.base: 15` and is not `tokens.spacing.lg: 16`. Notable: buttons land at 11px 15px (outline) and 16px 24px (filled); form fields use a uniform 10px inset. `10px` is a §5 / component padding writing; it is not a YAML spacing key. Reading those named steps as a ~4px base, keeping YAML `4` / `8` / `11` / `15` / `16` / `24` / `48` / `64` off prose `4px` / `8px` / `11px` / `15px` / `16px` / `24px` / `48px` / `64px`, keeping outline padding `11px` off filled padding `16px`, and keeping form-field `10px` off the YAML spacing map, are derived editorial implementation inferences from the verified surfaces; they are not Nota AI-authored or a separately published UI specification. The step values themselves are the source's own.

### Shape

Token-set paths: `tokens.rounded.sm: 4`, `tokens.rounded.md: 8`, `tokens.rounded.lg: 10`, `tokens.rounded.full: 9999`. YAML writes those steps unitless. Source §5 writes Sharp (0px): contact-form fields (outlined in `#000000`); Small (4px): outline buttons, language switcher; Medium (8px): filled dark CTAs; Large (10px): cards and content containers — the workhorse radius; Circle (50%): avatars and icon chips. Both writings stay. YAML `4` / `8` / `10` / `9999` stay on their own paths; they are not rewritten as a replacement `px`. `tokens.rounded.sm: 4` is not `tokens.rounded.md: 8` and is not `tokens.rounded.lg: 10`. YAML `tokens.rounded.full: 9999` is not the prose Circle writing `50%`. Geometry is gently rounded: a dominant 10px card radius, 4px buttons, 8px on filled CTAs, with the cookie/contact form fields kept deliberately sharp (0px). Keeping YAML `4` off prose `4px`, YAML `8` off `8px`, YAML `10` off `10px`, YAML `9999` off prose `50%`, reading `10px` as the workhorse card radius rather than as a mid-range option, and reading `0px` as form-field-only rather than as a general square, are derived editorial implementation inferences from the verified surfaces; they are not Nota AI-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, hero, most surfaces |
| Tint (Level 1) | `#f6f6f8` background shift | Section separation without elevation |
| Hairline (Level 2) | `1px solid #e7e7e7` border | White card outlines, dividers |
| Soft Lift (Level 3) | `rgba(141,141,141,0.15) 10px 10px 28px 0px` | Insight/content cards when lift is wanted |

Shadow tokens: `tokens.shadow.card` is `rgba(141,141,141,0.15) 10px 10px 28px 0px`; `tokens.shadow.none` is `none`. Live inspection found `box-shadow: none` across the hero, nav, headings, and most sections; depth is communicated through flat tinted bands (`#f6f6f8`) and thin `#e7e7e7` / `#eaeaee` hairlines. When a card does lift, it reaches for a single soft, diffuse grey shadow offset down-and-right (`10px 10px 28px`) at low 0.15 alpha — quiet and atmospheric rather than dramatic.

The following elevation reading is a derived editorial implementation inference from the verified surfaces; it is not Nota AI-authored or a separately published UI specification. Nota AI is a mostly-flat system. Emphasis is carried by color (the blue `#3264f0` or the dark-navy `#252a39`), never by stacking heavy elevation. The four-level table, the `card` and `none` tokens, the live `box-shadow: none` observation, and the "quiet and atmospheric rather than dramatic" writing are the source's own; they stay unmerged.

### Motion

Duration roles as this record states them, with no computed transition observation behind them, are a derived editorial implementation inference from the verified surfaces; they are not Nota AI-authored or a separately published UI specification.

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, link/button feedback, focus |
| `motion-standard` | 220ms | Nav folder slide-in, card/section reveal, dropdown |
| `motion-slow` | 360ms | Page-level transitions, hero reveal |

Easing token names and uses as this record states them, with the curves omitted, are a derived editorial implementation inference from the verified surfaces; they are not Nota AI-authored or a separately published UI specification.

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | Omitted — the token name and use are recorded and no curve evidence is attributed | Arriving — nav folders, cards, dropdowns |
| `ease-exit` | Omitted — the token name and use are recorded and no curve evidence is attributed | Dismissals |
| `ease-standard` | Omitted — the token name and use are recorded and no curve evidence is attributed | Two-way transitions |

The reduced-motion rule and motion character in this paragraph are a derived editorial implementation inference from the verified surfaces; they are not Nota AI-authored or a separately published UI specification. Motion is functional and quiet, consistent with the engineered-restraint aesthetic. The nav uses a "slideIn" folder reveal on hover/tap; arrow link CTAs ("Read More →") nudge their arrow on hover; sections fade-in from below at `motion-standard / ease-enter`. No bounce or spring — a deep-tech infrastructure brand signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the page remains fully functional.

The three exact cubic-bezier curves carry no attribution in this record and stay omitted rather than promoted. `ease-exit`'s omitted value matches the legacy authoring template. Naming those five evidence kinds as the promotion gate, refusing a partial confirmation, and refusing a match against an official framework or vendor document as that gate, are a derived editorial implementation inference from the verified surfaces; they are not Nota AI-authored or a separately published UI specification. Do not promote an easing curve, an animation name, a CSS transition property, or a duration beyond the table above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record's font evidence into classes. The sorting, and the resolution in each cell — no Nota AI-published type specification, live Roboto / Pretendard surface-use, no distributed font file, `sans-serif` fallback not presented as the brand face, no license statement, and no type value from a surface outside the three captures — is a derived editorial implementation inference from the verified surfaces; it is not Nota AI-authored or a separately published UI specification. The observation inside each row stands on its own.

| Evidence class | Resolution |
|---|---|
| Official product-use | This record's evidence is live inspection of three web surfaces; it carries no Nota AI-published type specification. |
| Live computed surface-use | Captured ENG text computes as Roboto. The Korean locale substitutes Pretendard for hangul-dense KOR pages. |
| Official distributed asset | The record establishes the families in use and carries no Nota AI-distributed font file. |
| Declared-only | Roboto is declared with a `sans-serif` fallback; Pretendard is declared with a `sans-serif` fallback. Those stacks are not presented as the brand faces. |
| License | No license or distribution statement accompanies either family in this record. |
| Outside these captures | Surfaces other than `https://www.nota.ai`, `https://www.nota.ai/community`, and `https://www.nota.ai/contact-us` contributed no type value here. |

### Family

- **Sans (default):** `Roboto` (with `sans-serif` fallback) — used for headlines, navigation, body, and button labels across the live ENG site. Token-set path `tokens.typography.family.sans`.
- **Korean locale:** `Pretendard` (with `sans-serif` fallback) — substituted for hangul-dense KOR pages. Token-set path `tokens.typography.family.kr`.
- **Weights in use:** 700 (Bold) for the hero and emphasis section headlines; 500 for the primary outline button label; 400 (Regular) for section headlines, eyebrows, nav, body, and most UI.

Do not substitute a system font or another grotesque for Roboto or Pretendard and present it as the brand face. Do not replace an unavailable or unobserved brand type with Roboto or Pretendard. The roles never cross; each font owns its locale.

Calling Roboto the ENG family and Pretendard the KOR family, assigning 700 / 500 / 400 as the weights in use, refusing to substitute a system font as the brand face, refusing to replace an unavailable or unobserved brand type with Roboto or Pretendard, and reading that the roles never cross so each font owns its locale, is a derived editorial implementation inference from the verified surfaces; it is not Nota AI-authored or a separately published UI specification. The family names and the weights are live-computed.

### Type roles

YAML writes numeric sizes and line heights without a `px` suffix. Source §3 writes the same roles with `px` and rem, and some roles with a px line-height in parentheses. The trailing live-inspect comment writes the hero as `52px` / weight 700 / line-height `70.2px`, section H1 as `43.2px` / 400, and the blue eyebrow H4 as `21.36px`. All three writings stay. YAML lineHeight values stay as those numbers and are never converted to a replacement px. Pairing each YAML role to the token-set path named beside it, keeping YAML `use` strings verbatim in the Token-set use column, keeping the longer §3 notes beside them, keeping YAML `52` / `1.35` off prose `52px (3.25rem)` / `1.35 (70px)` and off live `52px` / `70.2px`, keeping YAML `43` / `1.38` off `43px (2.70rem)` / `1.38 (60px)` and off live `43.2px`, keeping YAML `43` / `1.20` off `43px (2.70rem)` / `1.20 (52px)`, keeping YAML `21` / `1.46` off `21px (1.31rem)` / `1.46 (31px)` and off live `21.36px`, keeping YAML `17` / `1.68` off `17px (1.06rem)`, keeping body YAML `14` off `tokens.spacing` (no `14` spacing key), keeping YAML small weight `400` beside §3 Small / Field `400-500`, and keeping live hero `70.2px` as the inspect writing rather than as a replacement for YAML `1.35` or §3 `70px`, are derived editorial implementation inferences from the verified surfaces; they are not Nota AI-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Token-set use | Notes |
|---|---|---|---:|---|---|---|
| Display Hero | Roboto | YAML `52` / §3 `52px (3.25rem)` / live `52px` | 700 | YAML `1.35` / §3 `1.35 (70px)` / live `70.2px` | Hero headline, Roboto Bold on dark navy | Hero headline on dark navy, off-white `#f5f5f7` |
| Section Heading | Roboto | YAML `43` / §3 `43px (2.70rem)` / live `43.2px` | 400 | YAML `1.38` / §3 `1.38 (60px)` | Section headlines, Roboto Regular | Regular-weight section headlines |
| Section Emphasis | Roboto | YAML `43` / §3 `43px (2.70rem)` | 700 | YAML `1.20` / §3 `1.20 (52px)` | Emphasis section headlines, Roboto Bold | Bold-weight emphasis headlines |
| Eyebrow Label | Roboto | YAML `21` / §3 `21px (1.31rem)` / live `21.36px` | 400 | YAML `1.46` / §3 `1.46 (31px)` | Blue section eyebrow labels (Newsroom, Tech Blog) | Blue `#3264f0` label above section titles |
| Nav Link | Roboto | YAML `17` / §3 `17px (1.06rem)` | 400 | YAML `1.68` / §3 `1.68` | Top navigation links, Roboto | Top navigation items |
| Body | Roboto | YAML `14` / §3 `14px (0.88rem)` | 400 | YAML `1.50` / §3 `1.50` | Standard reading text | Standard reading text |
| Small / Field | Roboto | YAML `12` / §3 `12px (0.75rem)` | YAML `400` / §3 `400-500` | YAML `1.50` / §3 `1.50` | Captions, form fields, inline link buttons | Captions, form fields, inline link buttons |

Token-set paths: `tokens.typography.display-hero` · `tokens.typography.display-section` · `tokens.typography.display-emphasis` · `tokens.typography.eyebrow` · `tokens.typography.nav` · `tokens.typography.body` · `tokens.typography.small`.

The following type-hierarchy readings are a derived editorial implementation inference from the verified surfaces; they are not Nota AI-authored or a separately published UI specification.

- **One family, weight-and-size hierarchy**: Roboto carries the entire ENG system; contrast comes from 700 vs 400 and the size jump from 52px hero to 12px caption, not from mixing typefaces. Roboto for ENG, Pretendard for KOR — one family per locale, hierarchy from weight + size.
- **The blue eyebrow as structure**: a 21px `#3264f0` label sits above section headlines as a recurring chapter marker — a signature of the layout rhythm.
- **Near-black, not black, for reading**: body and headings on light surfaces use `#101218`, reserving pure `#000000` for accents and form-field borders.
- **Locale-aware swap**: Roboto for ENG, Pretendard for KOR — the roles never cross; each font owns its locale.

### Assets

- Catalog favicon: `https://www.google.com/s2/favicons?domain=nota.ai&sz=128`. Frontmatter records `logo.type: favicon`. That URL is a third-party favicon-proxy pointer, not a Nota-hosted brand file.
- Product and solution imagery sits on 10px-radius cards. Cards maintain the soft grey shadow or hairline outline across breakpoints.

Reading the Google s2 favicon URL as a catalog identity pointer rather than a Nota-hosted brand file, and reading the product imagery as first-party page content rather than as a published illustration specification, are derived editorial implementation inferences from the verified surfaces; they are not Nota AI-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The live inspection recorded default computed styles. Hover is also named in this record's §14 table (accent blue `#3264f0` strengthens on links; outline buttons gain a subtle fill; arrow link CTAs nudge their "→") and in the motion rules (`motion-fast` 120ms) without an accompanying computed value, so those visual treatments are omitted as computed values. Generic `focus` is named as a `motion-fast` use; that mention is not `focus-visible` treatment evidence.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted where this packet holds no computed value. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow each control's product role rather than its primitive kind. This is not a complete state-coverage claim.

The Elevated Card, Outline Card, and Blue Eyebrow Label have recorded geometry and no interactive-kind evidence, so kind and a state-applicability map are omitted for them rather than assumed. A `Primitive type` line is attached only when the source YAML records that type on that component. YAML records `type: button` on `tokens.components.button-primary` and `tokens.components.button-dark`; `type: input` on `tokens.components.input-text`; `type: card` on `tokens.components.card-elevated` and `tokens.components.card-outline`; `type: badge` on `tokens.components.eyebrow-label`; `type: tab` on `tokens.components.nav-link`. Secondary (Outline Navy), Inline Link Button, and Textarea are labelled `not in the token set`.

The following applicability note, the reading that Generic `focus` named as a `motion-fast` use is not `focus-visible` treatment evidence, every interactive-kind verdict, every applicability verdict, the reason given for either, the omit-kind decision for the two card records and the eyebrow, the refusal to attach a YAML primitive type that the token set does not record, labelling every non-YAML component `not in the token set`, and the refusal to treat this as a complete state-coverage claim are a derived editorial implementation inference from the verified surfaces; they are not Nota AI-authored or a separately published UI specification.

### State treatments

The seven state treatments below are a derived editorial implementation inference from the verified surfaces; they are not Nota AI-authored or a separately published UI specification. They compose values established elsewhere in this contract, and no computed per-component observation accompanies them. The rows themselves are the source's §14 table, kept as written.

| State | Treatment |
|---|---|
| **Empty (no results / no posts)** | White canvas. Single Ink Near-Black (`#101218`) line explaining there's nothing yet, with one blue link to act. No clutter. |
| **Loading (content fetch)** | Flat skeleton blocks at final card dimensions, 10px radius, on `#f6f6f8` tint. No heavy shimmer — consistent with the mostly-flat system. |
| **Error (form submit failed)** | Inline message near the field in a plain tone; states what went wrong and what to do next. No bare generic error. |
| **Error (form validation)** | Field-level message below the sharp `#fafafa` input; describes what's valid, not just "required". |
| **Success (contact submitted)** | Brief inline confirmation in a calm tone; no celebratory emoji. |
| **Disabled** | Faint Grey (`#aaaaaa`) text on reduced-opacity surface; blue actions fade rather than turn grey to preserve the brand read. |
| **Hover (link / button)** | Accent blue `#3264f0` strengthens on links; outline buttons gain a subtle fill; arrow link CTAs nudge their "→". |

### Primary (Outline Blue)

- Role: Primary action button (Squarespace `sqs-button-element--primary`) — the accent-blue call to action
- Primitive type: `button` · Kind: interactive
- Anatomy: label
- Background: transparent
- Text: `#3264f0`
- Border: 1px solid `#3264f0`
- Radius: 4px
- Padding: 11px 15px
- Font: 12px Roboto weight 500
- Height: 38px
- YAML font: `12px / 500 Roboto`
- Token-set use: Primary outline action button (Squarespace sqs-button-element--primary), accent blue
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the Squarespace primary outline button |
| hover | applicable | Pointer-web button; source states outline buttons gain a subtle fill; visual treatment omitted as a computed value |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Button control; source states blue actions fade rather than turn grey; visual treatment omitted as a computed value |
| loading | applicable | The control commits a primary action, which pends; visual treatment omitted |
| error | applicable | The committed action can fail and report on this control; visual treatment omitted |
| success | applicable | A committed primary action can complete; visual treatment omitted |

### Dark Fill CTA

- Role: Filled dark-navy CTA — "Subscribe to our newsletter →", header actions
- Primitive type: `button` · Kind: interactive
- Anatomy: label
- Label: `Subscribe to our newsletter →`
- Background: `#252a39`
- Text: `#ffffff`
- Radius: 8px
- Padding: 16px 24px
- Font: 12px Roboto weight 400
- Height: 50px
- YAML font: `12px / 400 Roboto`
- Token-set use: Filled dark-navy CTA, e.g. newsletter subscribe
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the filled dark-navy CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | applicable | The control commits a newsletter subscribe, which pends; visual treatment omitted |
| error | applicable | The committed subscribe can fail and report on this control; visual treatment omitted |
| success | applicable | A committed subscribe can complete; visual treatment omitted |

### Secondary (Outline Navy)

- Role: Secondary / dismiss action (e.g. cookie "Decline", form "Send")
- Primitive type: not in the token set · Kind: interactive
- Anatomy: label
- Labels: `Decline`, `Send`
- Background: transparent
- Text: `#252a39`
- Border: 1px solid `#252a39`
- Radius: 4px
- Padding: 11px 15px
- Font: 12px Roboto weight 500
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as cookie Decline and form Send |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | applicable | Form Send commits a contact submit, which pends; visual treatment omitted |
| error | applicable | Source states Error (form submit failed); visual treatment omitted as a computed value |
| success | applicable | Source states Success (contact submitted); visual treatment omitted as a computed value |

### Inline Link Button

- Role: Text link CTA with arrow — "Read More →", "Learn more →"
- Primitive type: not in the token set · Kind: interactive
- Anatomy: label
- Labels: `Read More →`, `Learn more →`
- Background: transparent
- Text: `#101218`
- Font: 12px Roboto weight 400
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as inline arrow link CTAs |
| hover | applicable | Pointer-web link; source states arrow link CTAs nudge their "→"; visual treatment omitted as a computed value |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A text link can be gated; visual treatment omitted |
| loading | not-applicable | A destination link commits no operation in place |
| error | not-applicable | The link reports no request or validation failure of its own |
| success | not-applicable | Reaching the destination is navigation, not an action-outcome confirmation on the link |

### Contact Field

- Role: Contact form text / email field — deliberately sharp-cornered
- Primitive type: `input` · Kind: interactive
- Anatomy: value field
- Background: `#fafafa`
- Text: `#101218`
- Border: 1px solid `#000000`
- Radius: 0px
- Padding: 10px
- Height: 40px
- Font: 12px Roboto
- Token-set use: Contact form field, sharp-cornered
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the contact form |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Input control; visual treatment omitted |
| loading | applicable | The field belongs to a contact form that submits; visual treatment omitted |
| error | applicable | Form field; source states a field-level message below the sharp `#fafafa` input; visual treatment omitted as a computed value |
| success | applicable | Form field; source states Success (contact submitted); visual treatment omitted as a computed value |

### Textarea

- Role: Multi-line message field on the contact form
- Primitive type: not in the token set · Kind: interactive
- Anatomy: value field
- Background: `#fafafa`
- Text: `#101218`
- Border: 1px solid `#000000`
- Radius: 0px
- Padding: 10px
- Height: 100px
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the contact-form message field |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Input control; visual treatment omitted |
| loading | applicable | The field belongs to a contact form that submits; visual treatment omitted |
| error | applicable | Form field; source states Error (form submit failed) and field-level validation; visual treatment omitted as a computed value |
| success | applicable | Form field; source states Success (contact submitted); visual treatment omitted as a computed value |

### Elevated Card

- Role: Insight / content card with a soft, slightly-offset grey shadow
- Primitive type: `card`
- Background: `#ffffff`
- Radius: 10px
- Shadow: `rgba(141,141,141,0.15) 10px 10px 28px 0px`
- Token-set use: Insight / content card with soft grey drop shadow
- Kind and a state-applicability map are omitted: the YAML record names a card, not an interactive control, and it does not record hover or another interactive kind.

### Outline Card

- Role: Bordered feature card — hairline outline, no shadow
- Primitive type: `card`
- Background: `#ffffff`
- Border: 1px solid `#e7e7e7`
- Radius: 10px
- Token-set use: Bordered feature card, hairline outline, no shadow
- Kind and a state-applicability map are omitted: the YAML record names a card, not an interactive control, and it does not record hover or another interactive kind.

### Blue Eyebrow Label

- Role: Section eyebrow / category label above headlines ("Newsroom", "Tech Blog")
- Primitive type: `badge`
- Text: `#3264f0`
- Font: 21px Roboto weight 400
- YAML font: `21px / 400 Roboto`
- Labels: `Newsroom`, `Tech Blog`
- Token-set use: Blue section eyebrow / category label above headlines
- Kind and a state-applicability map are omitted: the YAML record names a badge, not an interactive control, and it does not record hover or another interactive kind.

### Nav Link

- Role: Top nav item on the dark-navy header
- Primitive type: `tab` · Kind: interactive
- Anatomy: label
- Background: `#252a39` (dark header) / `#ffffff` (scrolled / light pages)
- Text: `#ffffff` on dark, `#101218` on light
- Font: 17px Roboto weight 400
- YAML font: `17px / 400 Roboto`
- Active: accent blue `#3264f0` text (YAML `active: "accent #3264f0 text"`)
- Items: `AI Solutions`, `Tech Blog`, `Company`, `Contact Us`
- Token-set use: Top nav item on the dark-navy header
- Observed: default; active accent `#3264f0` text

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the top horizontal nav |
| hover | applicable | Pointer-web navigation item; source states accent blue `#3264f0` strengthens on links; visual treatment omitted as a computed value |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A navigation entry can be unavailable; visual treatment omitted |
| loading | not-applicable | The item moves the reader to another area; the item itself commits no operation that pends |
| error | not-applicable | Active versus inactive is the item's recorded meaning; it reports no request or validation failure |
| success | not-applicable | Reaching a destination area is navigation, not an action-outcome confirmation on the item |

Additional observed state: active — accent `#3264f0` text.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Spacing and container

Centered single-column hero anchored by the 52px Roboto headline on dark navy. Feature sections alternate between white (`#ffffff`) and pale-grey (`#f6f6f8`) full-width bands. Cards group insights/solutions at a consistent 10px radius. Footer returns to the dark-navy (`#252a39`) canvas, mirroring the hero.

The following whitespace reading — "Breathing, technical calm", "Flat segmentation", "One accent, repeated", and reading the named steps as a ~4px base — is a derived editorial implementation inference from the verified surfaces; it is not Nota AI-authored or a separately published UI specification.

- **Breathing, technical calm**: generous vertical rhythm between sections keeps a dense, capability-heavy story scannable.
- **Flat segmentation**: sections separate by background tint (`#f6f6f8` vs `#ffffff`) and hairlines (`#e7e7e7`), not heavy borders.
- **One accent, repeated**: the blue eyebrow + blue links create a consistent vertical cadence down the page.

### Responsive behavior

The breakpoint table, the collapsing rules below, and the desktop-viewport setting of the inspections that produced the values in this contract, are a derived editorial implementation inference from the verified surfaces; they are not Nota AI-authored or a separately published UI specification. The inspections that produced the values in this contract were taken at a desktop viewport.

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, cards stack |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column feature bands |

- Hero: 52px Roboto headline scales down on mobile, weight 700 maintained
- Feature bands: multi-column → stacked single column
- Tinted/white alternating sections keep full-width treatment
- Footer returns to dark navy at all sizes

### Touch targets

- Outline buttons at 38px height with 11px 15px padding
- Filled CTAs at ~50px height with generous 16px 24px padding
- Nav links spaced comfortably within the dark header

Calling those heights generous, or saying nav links are spaced comfortably, is a derived editorial implementation inference from the verified surfaces; it is not Nota AI-authored or a separately published UI specification. The heights themselves are recorded component measurements.

### Image behavior

- Product and solution imagery sits on 10px-radius cards
- Cards maintain the soft grey shadow or hairline outline across breakpoints

Reading the imagery rule as consistent with the 10px card geometry, and keeping that radius across breakpoints, is a derived editorial implementation inference from the verified surfaces; it is not Nota AI-authored or a separately published UI specification. The geometry values themselves are recorded component measurements.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice samples

These strings are verbatim live copy from the captured surfaces. The parenthetical labels — hero headline, section headline, newsroom section, company mission — are a derived editorial implementation inference from the verified surfaces; they are not Nota AI-authored or a separately published UI specification.

- "Industry-tailored Vision Intelligence" — hero headline. *(verified live 2026-06-26)*
- "High-performance AI on Any Device" — section headline. *(verified live 2026-06-26)*
- "Stay Ahead with the Latest AI Insights" — newsroom section. *(verified live 2026-06-26)*
- "Democratizing the use of AI" — company mission (About Us). *(verified 2026-06-26)*

### Voice and tone

The voice reading below, including the tone table, is a derived editorial implementation inference from the verified surfaces; it is not Nota AI-authored or a separately published UI specification. Nota AI's voice is **confident, technical, and benefit-framed** — a deep-tech company explaining hard engineering (model compression, on-device inference, edge optimization) in plain, capability-first English. The brand mission, stated verbatim, is "Democratizing the use of AI," and the homepage register matches: declarative headlines that name a concrete outcome rather than sell a feeling. Copy treats the reader as a technical buyer or engineer who wants to know what the product does and where it runs.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, capability-first. "Industry-tailored Vision Intelligence." Confident, not hype. |
| Section headlines | Outcome-framed. "High-performance AI on Any Device", "Turning On-Device AI into Reality". |
| Eyebrow labels | Plain, structural. "Newsroom", "Tech Blog", "AI Solutions". |
| CTAs | Direct, low-pressure. "Read More →", "Learn more →", "Subscribe to our newsletter →". |
| Product / solution copy | Concrete and vertical-specific (ITS, DMS, Industrial Safety, Surveillance). |

### Forbidden register

The exclusions below are a derived editorial implementation inference from the verified surfaces; they are not Nota AI-authored or a separately published UI specification. **Forbidden register**: vague AI hype with no concrete deployment claim, fear-based marketing, undefined jargon left unexplained, exclamation-heavy salesmanship.

### Locale

Nota AI is a Korean company. Its name is written `노타` in Korean, and the captured homepage is English. Roboto serves the ENG locale; Pretendard serves the KOR locale. A language-switcher idle state is recorded as faint `#aaaaaa`. The Korean name `노타` sits beside `Nota AI` and does not replace it. Keeping `노타` beside `Nota AI` rather than as a replacement, and keeping Roboto and Pretendard on their own locales rather than merged, are derived editorial implementation inferences from the verified surfaces; they are not Nota AI-authored or a separately published UI specification.

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

### Named gaps

These decisions are unnamed values, not permissions to invent. Treating the list as unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not Nota AI-authored or a separately published UI specification.

- the exact `ease-enter`, `ease-exit`, and `ease-standard` curves; the token names and uses are recorded, the curves carry no attribution
- hover, button-press, and focus visual treatments as computed values; the §14 table names qualitative hover (blue strengthens on links; outline buttons gain a subtle fill; arrow CTAs nudge "→") and the motion rules name `motion-fast` 120ms without an accompanying computed value
- the interactive kind of the Elevated Card, Outline Card, and Blue Eyebrow Label
- computed per-component values behind the empty, loading, error, success, disabled, and hover treatments described above
- `focus-visible` visual treatment; the source names generic focus as a motion-fast use and does not record a `focus-visible` color
