# Plaid Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Plaid is the financial-data network that sits behind a huge share of US fintech. This contract covers the two first-party marketing surfaces the source inspected live on 2026-06-17: the home page at `https://plaid.com/` (hero gradient H1, nav, pill CTAs, dark sections) and the products page at `https://plaid.com/products/` (H1/H2/H3 navy headings, mega-menu rows, dark-section Explore pills, input border). The source records that Plaid's design system is internally called **Threads**, and that it is deliberately split into two halves: a **Platform** side that governs all product UI (built to WCAG 2.1 AA) and a **Brand** side that governs marketing. Threads is documented on Plaid's own engineering/design blog (`medium.com/plaid-design`, `plaid.com/blog/behind-the-scenes-with-design`) and the Threads brand site (`threads.plaid.com/brand`). The live brand-guidelines route returned a 404 to the headless bot, so all token claims are grounded in the two inspected marketing surfaces. Treating those two inspected routes as this contract's token surfaces, keeping the Platform/Brand split as the source names it rather than as a second token table, and keeping blog and brand-site documentation as named Threads sources that do not supply the computed tokens below, are derived editorial implementation inferences from the verified surfaces; they are not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation.

The captured marketing surface reads exactly like infrastructure that wants to feel approachable: a crisp white (`#ffffff`) canvas, deep-navy and dark-teal ink, and sudden bursts of an eclectic, almost playful palette used with strict discipline. The defining gesture is the home hero headline — set in the custom **Plaid Sans** at a massive 76px with an extreme `-3.4px` tracking — whose glyphs are filled not with a flat color but with a bright radial gradient that runs from electric green (`#86ef5a`) through aqua-teal (`#10d0b7`). The text itself is transparent; the gradient shows through clipped letterforms (`background-clip: text`). It is the single most distinctive thing on the page and it announces the brand's whole thesis: serious financial plumbing, rendered with warmth and color. That duality is visible on the live site. The product chrome is restrained and engineered — near-black body text (`#111111`), the signature dark-teal ink (`#012e37`) on navigation and menus, navy headings (`#00172e`), and a pale blue-white surface (`#f7faff`) for dropdown menus. The brand layer is where the eclectic color shows up: full-bleed dark sections in deep navy (`#02294b`) and deep indigo (`#0d0d3f`), a muted forest green (`#468254`) accent block, and the green-to-teal gradient reserved almost entirely for the hero. Bright color is rationed; it lands on one or two surfaces per page and never dilutes into the working UI. Geometry is overwhelmingly pill-based. Navigation items, CTAs, and tags all run at full-round (`100px` / `999px`) radii, while cards and inputs sit at a calmer `6px`–`12px`. There are essentially **no drop shadows** anywhere on the marketing surface — live inspection returned `box-shadow: none` across the hero, nav, cards, and section bands. Separation is achieved entirely through tinted dark sections, the `#ebf0f4` and `#dde3e9` hairlines, and generous whitespace. The result is a flat, fast, modern aesthetic: a financial network that looks engineered and trustworthy, then surprises you with one confident hit of color. The hex values, family names, radii, labels, and `background-clip: text` writing named beside them are the source's own. The readings in this section — infrastructure that wants to feel approachable; an eclectic, almost playful palette used with strict discipline; the hero headline as the defining gesture and the single most distinctive thing on the page announcing the brand's whole thesis; serious financial plumbing rendered with warmth and color; restrained and engineered product chrome; bright color rationed; pill-based geometry; essentially no drop shadows, with separation entirely through tinted dark sections, hairlines, and whitespace; a flat, fast, modern aesthetic; engineered and trustworthy then one confident hit of color — are a derived editorial implementation inference from the verified surfaces; they are not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation.

Brand narrative recorded by the source, kept as narrative context. Plaid was founded in **2013** by **Zach Perret (CEO)** and **William Hockey** as a developer-first API company solving a structural problem in US finance: connecting a consumer's bank account to a fintech app was slow, brittle, and bespoke. Plaid's premise was to make that connection a few lines of code — the same developer-empathy thesis that defines its whole posture. By becoming the data layer beneath a large share of US fintech (payments, lending, personal finance, fraud), Plaid grew into the self-described "largest financial network," a claim its homepage backs with hard scale numbers rather than rhetoric. The product matured from a single account-linking primitive into a broad platform — Auth, Identity, Balance, Transfer, Signal, Protect, Identity Verification, and more — organized on the products page as a catalog of composable building blocks. The brand positions itself as the trustworthy plumbing of "open finance": the network that makes other companies' products better while staying mostly invisible to the end user. What Plaid refuses, visible in its design: the heavy, intimidating chrome of legacy banking (no shadow-stacked cards, no institutional navy-and-gold), and the loud hype of consumer fintech marketing. What it embraces — formalized in its **Threads** design system, split into an accessibility-first Platform side (WCAG 2.1 AA) and an expressive Brand side — is a flat, fast, modern surface; a restrained working palette of navy and dark-teal ink; and one rationed, joyful hit of color in the green-to-teal gradient that fills the hero. Serious infrastructure, rendered with warmth. Founding year, founders, the product-catalog taxonomy, the quoted "largest financial network" and "open finance" lines, and the refuses/embraces pairing through that closing sentence are the source's own recordings. The source's own note that founding people/year are widely documented public facts, not directly quoted from a verified Plaid statement in that turn, is kept here. Classifying that founding-and-product narrative, the refuses/embraces pairing, and the closing sentence "Serious infrastructure, rendered with warmth" as brand context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a control, label, or surface the source records, is a derived editorial implementation inference from the verified surfaces; it is not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation. They do not come from a persona section.

- Read the homepage headline "Turn data into revolutionary financial products" and act on "Start building" or "Read the docs".
- Scan the products catalog "Everything you need to build intelligent finance", including Auth, Identity, Balance, Transfer, Signal, Protect, and Identity Verification, and the secondary action "See all products".
- Open a recorded header CTA: "Contact sales" or "Log in".
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as fictional archetypes informed by publicly observable Plaid user segments, so those biographies are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records as publicly observable Plaid user segments, kept in its wording: fintech developers, product engineers, founders building on financial APIs. Copy treats the reader as a builder, not a lead to be closed. Dropping the fictional biographies rather than promoting them, carrying no name, age, city, motivation, or affiliation classification, reading those source-named groups as this product's audience, and keeping the source's builder-not-lead note beside those groups, are derived editorial implementation inferences from the verified surfaces; they are not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside them, is a derived editorial implementation inference from the verified surfaces; it is not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation.

- Custom **Plaid Sans** display type with extreme negative tracking (-3.4px at 76px, -2.8px at 70px) — `Cern` as the body/UI sans companion
- Hero H1 rendered with a clipped green→teal gradient text fill (`#86ef5a` → `#10d0b7`) — the brand's signature flourish
- Dual Threads system: restrained Platform ink (`#012e37`, `#00172e`, `#111111`) vs. eclectic Brand color used sparingly
- Deep navy (`#02294b`) and deep indigo (`#0d0d3f`) full-bleed dark sections carry the brand moments
- Pill-everything chrome — 100px / 999px CTAs, nav items, and tags; `6px`–`12px` on cards and inputs
- Near-shadowless: separation via dark-section tints, `#ebf0f4` / `#dde3e9` hairlines, and whitespace
- Pale blue-white menu surface (`#f7faff`) and dark-teal (`#012e37`) menu text for the mega-menu
- Muted forest green (`#468254`) as a quieter accent alongside the bright hero gradient

### Principles

These 5 items are a derived editorial implementation inference from the verified surfaces; they are not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation. The source labels claims of this kind — for example "ration the color", "infrastructure should be invisible then delightful" — as editorial readings connecting Plaid's observed design and stated Threads philosophy to its positioning, not directly sourced Plaid statements.

1. **Infrastructure should be invisible, then delightful.** Plaid is the layer beneath other products; the working UI stays calm and neutral. *UI implication:* keep chrome restrained (navy, teal-ink, hairlines) and let one rationed color moment carry the delight.
2. **Ration the color.** The bright green→teal gradient is precious because it is rare. *UI implication:* reserve the gradient for clipped hero text; never use it as a section fill or spread the accent green across the UI.
3. **Accessibility is a system, not an afterthought.** Threads Platform is built to WCAG 2.1 AA. *UI implication:* maintain strong contrast (navy/teal ink on white, white on `#02294b`) and never rely on color alone to carry meaning.
4. **Flat and fast.** Modern, mobile-native clarity beats decorative depth. *UI implication:* no drop shadows; separate with dark bands and hairlines; keep pages light and quick to scan.
5. **Numbers over adjectives.** Trust is earned with verifiable scale, not superlatives. *UI implication:* give stat figures their own large, bold (Cern 800) treatment and let data anchor the page.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation.

- Use Plaid Sans for all display, nav, menu, and button labels — Cern for body and stat figures
- Apply extreme negative tracking on headlines (-3.4px at 76px, -2px on section heads)
- Reserve the green→teal gradient (`#86ef5a` → `#10d0b7`) for clipped hero text only — keep it rare
- Use deep navy (`#02294b`) for dark sections and the default input border
- Use ink-teal (`#012e37`) for navigation and menu text — the signature Plaid ink
- Keep all CTAs, nav items, and tags as full-round pills (100px / 9999px)
- Separate sections with dark bands and `#ebf0f4` / `#dde3e9` hairlines, not shadows
- Use the pale blue-white surface (`#f7faff`) for mega-menu dropdown rows

### Avoid

The source states these eight as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation.

- Use the bright gradient as a section background — it is text-fill only, and overuse cheapens it
- Add drop shadows for elevation — Plaid's marketing surface is flat and shadow-free
- Set headlines in a thin or black weight — display stays at 500–600 (stat figures are the only 800)
- Use pure black for headings — reach for navy `#00172e` or ink-teal `#012e37`
- Use sharp/square corners on interactive elements — CTAs and nav are pills
- Spread the accent green across the working UI — it is a rationed brand-layer hit
- Mix Plaid Sans and Cern across roles — display vs. body is a fixed split
- Use positive letter-spacing at display sizes — Plaid tracks very tight

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Role names follow the source's own labels and token-set keys. Taking those role names from the source's own labels, pairing each hex to the token-set path named beside it, keeping `#ffffff` unmerged across canvas, on-primary, outline-button fill, input fill, and white product-card fill, keeping `#02294b` unmerged across primary dark-section fill, dark-feature-card fill, dark-section pill fill, and default input border, keeping YAML `ink` `#111111` off YAML `ink-button` `#111112`, and keeping gradient stops `#86ef5a` / `#10d0b7` in prose and the hero component rather than as solid token roles, are derived editorial implementation inferences from the verified surfaces; they are not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation. The hex values and recorded uses are the source's own. YAML token note, verbatim: "Bright gradient stops live in prose/components only — never as a solid token role."

**Primary & Dark Brand**

- **Plaid Navy** (`#02294b`): YAML `tokens.colors.primary`. Catalog `primary_color`. Primary brand color. Fills the dark marketing sections, the dark-section pill CTAs, and the default input border. The anchor of the system. Live inspect also writes `rgb(2,41,75)`.
- **Deep Navy** (`#00172e`): YAML `tokens.colors.navy-deep`. Heading color on the products page (H1/H2/H3) and eyebrow labels — a near-black blue used for large display type on white.
- **Deep Indigo** (`#0d0d3f`): YAML `tokens.colors.indigo-deep`. The darkest section background, used for immersive full-bleed brand bands ("Read the docs" CTA section).
- **Ink Teal** (`#012e37`): YAML `tokens.colors.ink-teal`. Plaid's signature dark-teal ink. Navigation links, mega-menu rows, and emphasis text. Warmer than navy, distinctly Plaid. Live inspect also writes `rgb(1,46,55)`.

**Text & Neutral**

- **Ink** (`#111111`): YAML `tokens.colors.ink`. Primary near-black body text on white. Live inspect also writes `rgb(17,17,17)`.
- **Button Ink** (`#111112`): YAML `tokens.colors.ink-button`. The near-black used on light pill CTAs and button labels.
- **Charcoal** (`#232424`): YAML `tokens.colors.charcoal`. Top-nav link text color on white. Live inspect also writes `rgb(35,36,36)`.
- **Blue** (`#043c67`): YAML `tokens.colors.blue`. Secondary text and links within copy.
- **Link Blue** (`#0a54c4`): YAML `tokens.colors.link`. Carousel prev/next controls and inline interactive accents.
- **Slate** (`#5c7695`): YAML `tokens.colors.slate`. Muted feature subheads (the 26px H3 descriptions).

**Accent**

- **Forest Green** (`#468254`): YAML `tokens.colors.green`. A muted green accent block — the calmer cousin of the bright hero gradient.
- **Gradient Green** (`#86ef5a`): Electric green, the start stop of the hero text gradient. Brand-layer only. Not a `tokens.colors.*` key.
- **Gradient Teal** (`#10d0b7`): Aqua-teal, the mid stop of the hero text gradient. Pairs with `#86ef5a`. Not a `tokens.colors.*` key.

**Surface & Borders**

- **Pure White** (`#ffffff`): YAML `tokens.colors.canvas`. Page background, card surfaces, text on dark. YAML `tokens.colors.on-primary` is the same hex as the on-primary field, not a second canvas token.
- **On Primary** (`#ffffff`): YAML `tokens.colors.on-primary`. Text on dark / on-primary field. Same hex as canvas; this is the on-dark text role.
- **Surface Blue** (`#f7faff`): YAML `tokens.colors.surface`. Pale blue-white background for mega-menu dropdown rows. Live inspect also writes `rgb(247,250,255)`.
- **Surface Grey** (`#f6f6f6`): YAML `tokens.colors.surface-grey`. Secondary neutral surface for alternating blocks.
- **Hairline** (`#ebf0f4`): YAML `tokens.colors.hairline`. Default card and divider border in the shadow-free system.
- **Hairline Alt** (`#dde3e9`): YAML `tokens.colors.hairline-alt`. Border on white outline buttons ("See all products").

Input text `#4b4b4b` is a component field on `tokens.components.input-text`, not a `tokens.colors.*` key. Keeping that hex on the component path rather than as a color-token role is a derived editorial implementation inference from the verified surfaces; it is not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation.

### Spacing

YAML scale (numbers as recorded, no px suffix added): `tokens.spacing.xs: 4` · `tokens.spacing.sm: 8` · `tokens.spacing.md: 12` · `tokens.spacing.base: 16` · `tokens.spacing.lg: 24` · `tokens.spacing.xl: 32` · `tokens.spacing.xxl: 48` · `tokens.spacing.section: 64`.

Source §5 restates a base unit of 8px and the scale 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px. Notable: nav pills use 12px 16px padding; mega-menu rows 13px 16px; hero CTAs 0 24px on a fixed 56px pill height.

Treating YAML unitless steps as unmerged from the body px list, treating `tokens.spacing.sm: 8` as not `tokens.rounded.md: 8`, treating `tokens.spacing.md: 12` as not `tokens.rounded.lg: 12`, treating `tokens.spacing.base: 16` as not body 16px and not eyebrow 16px, treating `tokens.spacing.lg: 24` as not card-title 24px, and treating mega-menu `13px` as a component padding rather than a YAML spacing key, is a derived editorial implementation inference from the verified surfaces; it is not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation.

### Shape

YAML `tokens.rounded`: `tokens.rounded.sm: 6` · `tokens.rounded.md: 8` · `tokens.rounded.lg: 12` · `tokens.rounded.full: 9999`.

Source §5 named radius uses, kept on their own rows:

- Small (6px): mega-menu rows, dropdown surfaces — `tokens.rounded.sm`
- Medium (8px): inputs — `tokens.rounded.md`
- Large (12px): cards and containers — the workhorse — `tokens.rounded.lg`
- Full (100px / 9999px): all pill CTAs, nav items, tags — `tokens.rounded.full: 9999` is the unitless full step

Source §1 writes full-round as `100px` / `999px`. YAML `button-primary-dark`, `button-primary-light`, and `button-ghost` write radius `100px`. YAML `button-outline` and `nav-link` write radius `9999px`. Those writings stay unmerged. `tokens.rounded.full: 9999` is not `999px` and is not `100px`. `tokens.rounded.sm: 6` is not a spacing step. `tokens.rounded.md: 8` is not `tokens.spacing.sm: 8`. `tokens.rounded.lg: 12` is not `tokens.spacing.md: 12`. Keeping those paths unmerged, and keeping 6px–12px as cards and inputs rather than as a universal radius, is a derived editorial implementation inference from the verified surfaces; it is not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#02294b` / `#0d0d3f` dark band, or `#f7faff` menu tint | Section/menu separation without elevation |
| Hairline (Level 2) | `1px solid #ebf0f4` or `1px solid #dde3e9` | White card and outline-button borders |

Shadow token: `tokens.shadow.none` is `none`. Live inspection returned `box-shadow: none` across the hero, nav, cards, and section bands.

The following elevation reading is a derived editorial implementation inference from the verified surfaces; it is not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation. Plaid's marketing surface is effectively shadowless. Depth comes from full-bleed dark sections (`#02294b`, `#0d0d3f`), pale menu tints (`#f7faff`), and thin hairlines (`#ebf0f4`, `#dde3e9`). When the page needs to elevate a moment, it reaches for color or a dark band, never a drop shadow — keeping the financial UI feeling flat, fast, and modern rather than skeuomorphic. The three-level table, the `none` token, and the live `box-shadow: none` observation are the source's own; they stay unmerged.

### Motion

Duration roles as this record states them, with no computed transition observation behind them, are a derived editorial implementation inference from the verified surfaces; they are not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation.

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, pill press, focus |
| `motion-standard` | 200ms | Card/section reveal, menu, carousel slide |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

Easing token names and uses as this record states them, with the curves omitted, are a derived editorial implementation inference from the verified surfaces; they are not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation.

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | Omitted — the token name and use are recorded and no curve evidence is attributed | Arriving — menus, cards, carousels |
| `ease-exit` | Omitted — the token name and use are recorded and no curve evidence is attributed | Dismissals |
| `ease-standard` | Omitted — the token name and use are recorded and no curve evidence is attributed | Two-way transitions |

The reduced-motion rule and motion character in this paragraph are a derived editorial implementation inference from the verified surfaces; they are not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation. Motion is functional and quiet — consistent with the flat, fast aesthetic. Pills respond to press with a subtle scale/opacity shift; carousels advance at `motion-standard / ease-enter` driven by the `#0a54c4` controls; the hero gradient may animate its stops slowly as ambient atmosphere (the one place non-interactive motion lives). No bounce or spring — financial infrastructure signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the gradient freezes; the product remains fully functional.

The three exact cubic-bezier curves carry no attribution in this record and stay omitted rather than promoted. `ease-exit`'s omitted value matches the legacy authoring template. Generic `Focus` named as a `motion-fast` use is not a `focus-visible` treatment. Naming those five evidence kinds as the promotion gate, refusing a partial confirmation, refusing a match against an official framework or vendor document — including the published Threads documentation — as that gate, and classifying that generic-Focus sentence as a non-promotion rather than a captured treatment, are a derived editorial implementation inference from the verified surfaces; they are not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation. Do not promote an easing curve, an animation name, a CSS transition property, or a duration beyond the table above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record's font evidence into classes. The sorting, and the resolution in each cell, is a derived editorial implementation inference from the verified surfaces; it is not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation. The observation inside each row stands on its own.

| Evidence class | Resolution |
|---|---|
| Official product-use | Threads is documented on Plaid blogs and `threads.plaid.com/brand`. This capture did not read a Threads type specimen page; it does not publish a universal current typography token sheet here. |
| Live computed surface-use | Both captured marketing surfaces use **Plaid Sans** for display, nav, menu, and button labels, and **Cern** for body and stat figures. |
| Declared fallback stack | Display: `Plaid Sans` with `Cern` and `Averta`-class fallbacks. Body / UI: `Cern` with `Helvetica, Arial` fallback. Those stacks are fallbacks, not the brand faces. |
| Official distributed asset | No Plaid-exclusive distributed type file is recorded in this packet. |
| License | None is stated. None is invented. |
| Outside these captures | Surfaces other than `https://plaid.com/` and `https://plaid.com/products/` contributed no type value here. |

### Family

- **Display**: `Plaid Sans` (with `Cern` and `Averta`-class fallbacks) — used for all headlines, nav, menu, and button labels. Token-set path `tokens.typography.family.display`.
- **Body / UI**: `Cern` (with `Helvetica, Arial` fallback) — the document body default at 16px / weight 400, and the font used for stat figures. Token-set path `tokens.typography.family.body`.

Do not substitute a system font, Helvetica, Arial, or an Averta-class fallback for Plaid Sans or Cern and present it as the brand face. Do not swap the two families across roles.

Calling Plaid Sans the display/nav/menu/button face and Cern the body/stat face, assigning those fallback stacks as fallbacks rather than as brand faces, and refusing to present Helvetica, Arial, or an Averta-class face as Plaid Sans or Cern, is a derived editorial implementation inference from the verified surfaces; it is not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation. The family names are live-computed.

### Type roles

YAML writes numeric sizes, line heights, and tracking without a `px` suffix. Source §3 writes the same roles with `px`, rem companions, and some computed px line heights. The trailing live-inspect comment writes the home section H2 "Powered by the largest financial network" as `58px` / weight `500`, color `rgb(0,23,46)` `#00172e`. All three writings stay. YAML lineHeight values stay as those numbers and are never converted to a replacement px. Pairing each YAML role to the token-set path named beside it, keeping YAML `use` strings verbatim in the Token-set use column, keeping the longer §3 notes beside them, keeping YAML `76` / `1.12` / `-3.4` off prose `76px` / `-3.4px` and off §3 `85px`, keeping YAML body `16` off `tokens.spacing.base: 16`, keeping live `58px` / `500` as the inspect writing rather than as a replacement for YAML `display-dark` `70` or YAML `section` `60`, and keeping Nav Link as a §3 table role that is not a YAML typography key, are derived editorial implementation inferences from the verified surfaces; they are not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation.

| Role | Font | Size | Weight | Line height | Letter spacing | Token-set use | Notes |
|---|---|---|---:|---|---|---|---|
| Display Hero | Plaid Sans | YAML `76` / §3 `76px (4.75rem)` | 500 | YAML `1.12` / §3 `1.12 (85px)` | YAML `-3.4` / §3 `-3.4px` | Home hero H1, Plaid Sans, gradient text fill | Home H1, green→teal gradient text fill, `background-clip: text` |
| Display Dark | Plaid Sans | YAML `70` / §3 `70px (4.38rem)` | 500 | YAML `1.08` / §3 `1.08 (76px)` | YAML `-2.8` / §3 `-2.8px` | Dark-section H2 headlines, Plaid Sans | White H2 on dark sections |
| Page Title | Plaid Sans | YAML `64` / §3 `64px (4.00rem)` | 600 | YAML `1.0` / §3 `1.0` | YAML `-2` / §3 `-2px` | Products page H1, Plaid Sans | Products page H1 |
| Section Heading | Plaid Sans | YAML `60` / §3 `60px (3.75rem)` | 600 | YAML `1.10` / §3 `1.10` | YAML `-2` / §3 `-2px` | Product section H2, Plaid Sans | Product section H2 |
| Home section H2 (inspect) | Plaid Sans | live `58px` | 500 | not a YAML key | not a YAML key | not a YAML typography key | "Powered by the largest financial network"; `rgb(0,23,46)` `#00172e`. Inspect writing, not a replacement for YAML `70` or `60` |
| Stat Figure | Cern | YAML `36` / §3 `36px (2.25rem)` | 800 | YAML `1.33` / §3 `1.33 (48px)` | normal | Stat figures, Cern | "1 in 2", "1M+", big numbers |
| Subhead | Plaid Sans | YAML `26` / §3 `26px (1.63rem)` | 500 | YAML `1.40` / §3 `1.40 (36.4px)` | YAML `-0.5` / §3 `-0.5px` | Feature H3 subheads, slate, Plaid Sans | Feature H3 descriptions, slate `#5c7695` |
| Card Title | Plaid Sans | YAML `24` / §3 `24px (1.50rem)` | 600 | YAML `1.30` / §3 `1.30` | normal | Product card H3, Plaid Sans | Product card H3 |
| Eyebrow | Plaid Sans | YAML `16` / §3 `16px (1.00rem)` | 800 | YAML `1.0` / §3 `1.0` | YAML `2` / §3 `2px` | All-caps eyebrow label, Plaid Sans | All-caps section label |
| Button | Plaid Sans | YAML `20` / §3 `20px (1.25rem)` | 600 | YAML `1.0` / §3 `1.0` | normal | Hero pill CTA label, Plaid Sans | Hero pill CTA |
| Button Small | Plaid Sans | YAML `16` / §3 `16px (1.00rem)` | 600 | YAML `1.0` / §3 `1.0` | normal | Header pill CTA label, Plaid Sans | Header pill CTA |
| Nav Link | Plaid Sans | §3 `16px (1.00rem)` | 400 | §3 `1.0` | normal | not a YAML typography key | Top nav pill items. YAML records the same 16px / 400 on `tokens.components.nav-link` |
| Body | Cern | YAML `16` / §3 `16px (1.00rem)` | 400 | YAML `1.50` / §3 `1.50 (24px)` | normal | Standard reading text, Cern | Standard reading text |

Token-set paths: `tokens.typography.display-hero` · `tokens.typography.display-dark` · `tokens.typography.page-title` · `tokens.typography.section` · `tokens.typography.stat` · `tokens.typography.subhead` · `tokens.typography.card-title` · `tokens.typography.eyebrow` · `tokens.typography.body` · `tokens.typography.button` · `tokens.typography.button-sm`. Outline-pill label `14px` and input `16.5px` Cern stay on those components; they are not YAML typography keys.

The following type-hierarchy readings are a derived editorial implementation inference from the verified surfaces; they are not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation.

- **Extreme display tracking is the signature**: -3.4px at 76px and -2.8px at 70px compress headlines into dense, engineered blocks — unusually tight even for a fintech.
- **Two fonts, two jobs**: Plaid Sans owns display, nav, menu, and buttons; Cern owns body copy and stat figures. They do not swap roles.
- **Weight discipline**: display sits at 500–600 (never thin, never black except for stat figures at 800). Body is a calm 400.
- **Gradient fill, not gradient backgrounds**: the green→teal gradient is clipped to hero glyphs, never used as a section fill — keeping the color rare and precious.

### Assets

- Catalog favicon: `https://www.google.com/s2/favicons?domain=plaid.com&sz=128`. Frontmatter records `logo.type: favicon`. That URL is a third-party favicon-proxy pointer, not a Plaid-hosted brand file.
- Product screenshots and brand illustrations carry no shadow at any size, consistent with the flat system.

Reading the Google s2 favicon URL as a catalog identity pointer rather than a Plaid-hosted brand file, and reading the screenshots as first-party page content rather than as a published illustration specification, are derived editorial implementation inferences from the verified surfaces; they are not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The live inspection recorded default computed styles. Hover, pill press, and focus are named in this record's motion rules (`motion-fast` 120ms) without an accompanying computed value on the controls, so those visual treatments are omitted where this packet holds no value for that same canonical state. Generic `Focus` named as a motion use is not a `focus-visible` treatment; no `focus-visible` row in this section carries a color.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted where this packet holds no value. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow each control's product role rather than its primitive kind. This is not a complete state-coverage claim.

The Product Card (White), Dark Feature Card, and Eyebrow Label have recorded geometry and no interactive-kind evidence, so kind and a state-applicability map are omitted for them rather than assumed. A `Primitive type` line is attached only when the source YAML records that type on that component. YAML records `type: button` on `tokens.components.button-primary-dark`, `tokens.components.button-primary-light`, `tokens.components.button-outline`, and `tokens.components.button-ghost`; `type: tab` on `tokens.components.nav-link`; `type: listItem` on `tokens.components.menu-item`; `type: card` on `tokens.components.card-product` and `tokens.components.card-dark`; `type: input` on `tokens.components.input-text`; `type: badge` on `tokens.components.badge-eyebrow`.

The capture-record notes above, including the generic-Focus non-promotion, every interactive-kind verdict, every applicability verdict, the reason given for either, the omit-kind decision for the two cards and the eyebrow, the refusal to attach a YAML primitive type that the token set does not record, and the refusal to treat this as a complete state-coverage claim are a derived editorial implementation inference from the verified surfaces; they are not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation.

### State treatments

The nine state treatments below are a derived editorial implementation inference from the verified surfaces; they are not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation. They compose values established elsewhere in this contract, and no computed per-component observation accompanies them. The rows themselves are the source's §14 table, kept as written.

| State | Treatment |
|---|---|
| **Empty (no connected accounts)** | White canvas. Single Deep Navy (`#00172e`) line at body size explaining nothing is linked yet, with one dark pill CTA to connect. No illustration clutter. |
| **Empty (no results)** | Slate (`#5c7695`) single line: nothing to show, plus a path to adjust criteria. Honest, calm. |
| **Loading (data fetch)** | Flat skeleton blocks at final card dimensions, 12px radius, on white with `#ebf0f4` hairlines. No shadow shimmer — a flat pulse consistent with the shadowless system. |
| **Loading (in-place refresh)** | Subtle Link Blue (`#0a54c4`) progress indicator; previous values stay visible. |
| **Error (connection failed)** | Inline message in Ink (`#111111`) with a plain-language explanation and a retry. No generic "Something went wrong" — states what to do next. |
| **Error (form validation)** | Field-level message below the input describing what is valid, not just "Required". Input border shifts to an error tone. |
| **Success (account linked)** | Brief inline confirmation in a calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#ebf0f4`-bordered blocks at final dimensions, 12px radius, flat pulse. |
| **Disabled** | Reduced-opacity surface and text together; navy pill actions fade rather than turn grey, preserving the brand read. |

### Primary Pill (Dark Section)

- Role: Hero CTA on dark/navy bands — "Start building", "Read the docs"
- Primitive type: `button` · Kind: interactive
- Anatomy: label
- Labels: `Start building`, `Read the docs`
- Background: `#02294b`
- Text: `#ffffff`
- Radius: 100px
- Padding: 0 24px
- Height: 56px
- Font: 20px / 600 / Plaid Sans
- Token-set path: `tokens.components.button-primary-dark`
- Token-set use: Hero pill CTA on dark/navy sections — Start building, Read the docs
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on dark/navy sections |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Button control; source states navy pill actions fade rather than turn grey; visual treatment omitted as a computed value |
| loading | not-applicable | `Start building` and `Read the docs` are destination controls; they commit no operation in place |
| error | not-applicable | Reaching docs or the build path is navigation, not a request this control reports |
| success | not-applicable | Arrival at the destination is not an operation this control reports as success |

### Header Dark Pill

- Role: Header conversion CTA — "Contact sales"
- Primitive type: `button` · Kind: interactive
- Anatomy: label
- Label: `Contact sales`
- Background: `#111112`
- Text: `#ffffff`
- Radius: 100px
- Padding: 0 18px
- Height: 39px
- Font: 16px / 600 / Plaid Sans
- Token-set path: `tokens.components.button-primary-light`
- Token-set use: Header dark pill CTA — Contact sales
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured in the header |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | not-applicable | `Contact sales` is a destination control; it commits no operation in place |
| error | not-applicable | Opening sales contact is navigation, not a request this control reports |
| success | not-applicable | Arrival at sales contact is not an operation this control reports as success |

### Outline Pill (Secondary)

- Role: Secondary action — "See all products"
- Primitive type: `button` · Kind: interactive
- Anatomy: label
- Label: `See all products`
- Background: `#ffffff`
- Text: `#232424`
- Border: 1px solid `#dde3e9`
- Radius: 9999px
- Padding: 12px 24px
- Height: 47px
- Font: 14px / 600 / Plaid Sans
- Token-set path: `tokens.components.button-outline`
- Token-set use: Secondary outline pill — See all products
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the secondary outline pill |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | not-applicable | `See all products` is a destination control; it commits no operation in place |
| error | not-applicable | Reaching the catalog is navigation, not a request this control reports |
| success | not-applicable | Arrival at the catalog is not an operation this control reports as success |

### Ghost Pill

- Role: Quiet header action — "Log in"
- Primitive type: `button` · Kind: interactive
- Anatomy: label
- Label: `Log in`
- Text: `#111112`
- Radius: 100px
- Padding: 0px 18px
- Font: 16px / 600 / Plaid Sans
- Token-set path: `tokens.components.button-ghost`
- Token-set use: Quiet header pill — Log in
- Observed: default only

YAML `button-ghost` records no background and no height; §4 adds padding `0px 18px`. Both writings stay. Keeping those two writings unmerged is a derived editorial implementation inference from the verified surfaces; it is not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the quiet header pill |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | not-applicable | `Log in` is a destination control; it commits no operation in place |
| error | not-applicable | Reaching login is navigation, not a request this control reports |
| success | not-applicable | Arrival at login is not an operation this control reports as success |

### Top Nav Item

- Role: Top horizontal nav pill items ("Use cases", "Industries", "Developers")
- Primitive type: `tab` · Kind: interactive
- Anatomy: label
- Labels: `Use cases`, `Industries`, `Developers`
- Text: `#232424`
- Radius: 9999px
- Padding: 12px 16px
- Font: 16px / 400 / Plaid Sans
- Active: `#012e37` ink-teal text
- YAML `active: "text #012e37"`
- Token-set path: `tokens.components.nav-link`
- Token-set use: Top nav pill items
- Observed: default; active text `#012e37`
- Source §8 also records nav items at 48px row height. That height is a §8 writing, not a YAML component field. Classifying that height as a §8 writing rather than a YAML component field is a derived editorial implementation inference from the verified surfaces; it is not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the top horizontal nav |
| hover | applicable | Pointer-web navigation item; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A navigation entry can be unavailable; visual treatment omitted |
| loading | not-applicable | The item moves the reader to another area or opens a panel; the item itself commits no operation that pends |
| error | not-applicable | Active versus inactive is the item's recorded meaning; it reports no request or validation failure |
| success | not-applicable | Reaching a destination area is navigation, not an action-outcome confirmation on the item |

Additional observed state: active — text `#012e37`.

### Mega-Menu Row

- Role: Dropdown mega-menu row ("By use case", "By industry")
- Primitive type: `listItem` · Kind: interactive
- Anatomy: label
- Labels: `By use case`, `By industry`
- Background: `#f7faff`
- Text: `#012e37`
- Radius: 6px
- Padding: 13px 16px
- Font: 16px / 400 / Plaid Sans
- Token-set path: `tokens.components.menu-item`
- Token-set use: Mega-menu dropdown row
- Observed: default only
- Source §8 also records mega-menu rows at ~50px height. That height is a §8 writing, not a YAML component field. Classifying that height as a §8 writing rather than a YAML component field is a derived editorial implementation inference from the verified surfaces; it is not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as mega-menu dropdown rows |
| hover | applicable | Pointer-web menu row; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A menu row can be unavailable; visual treatment omitted |
| loading | not-applicable | Opening a nav panel or following a row commits no operation that pends |
| error | not-applicable | A menu row reports no request or validation failure of its own |
| success | not-applicable | Revealing the panel is not an action-outcome confirmation |

### Product Card (White)

- Role: White product/feature card with hairline outline, no shadow
- Primitive type: `card`
- Kind and state-applicability map omitted — recorded geometry, no interactive-kind evidence
- Background: `#ffffff`
- Text: `#00172e`
- Border: 1px solid `#ebf0f4`
- Radius: 12px
- Token-set path: `tokens.components.card-product`
- Token-set use: White product card, hairline border, no shadow

### Dark Feature Card

- Role: Dark-navy section/feature card
- Primitive type: `card`
- Kind and state-applicability map omitted — recorded geometry, no interactive-kind evidence
- Background: `#02294b`
- Text: `#ffffff`
- Radius: 12px
- Token-set path: `tokens.components.card-dark`
- Token-set use: Dark-navy feature/section card

### Text Input

- Role: Form text field — navy hairline border, no shadow
- Primitive type: `input` · Kind: interactive
- Anatomy: value field
- Background: `#ffffff`
- Text: `#4b4b4b`
- Border: 1px solid `#02294b`
- Radius: 8px
- Padding: 8px 8px 8px 16px
- Font: 16.5px / Cern
- Token-set path: `tokens.components.input-text`
- Token-set use: Form text input, navy hairline border
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the products page |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | Input control; visual treatment omitted |
| loading | applicable | A form field can pend while a value is checked; visual treatment omitted |
| error | applicable | Form field; source states field-level validation and that the input border shifts to an error tone; the error-tone hex is omitted |
| success | applicable | Form field; visual treatment omitted |

### Eyebrow Label

- Role: All-caps section eyebrow ("ALL PRODUCTS"), 2px tracking
- Primitive type: `badge`
- Kind and state-applicability map omitted — recorded geometry, no interactive-kind evidence
- Text: `#00172e`
- Font: 16px / 800 / Plaid Sans
- Token-set path: `tokens.components.badge-eyebrow`
- Token-set use: All-caps eyebrow label, 2px tracking

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Spacing and container

Centered single-column hero anchored by the 76px gradient headline. Product sections alternate white (`#ffffff`) and full-bleed dark navy (`#02294b`) / indigo (`#0d0d3f`) bands. Customer-story and product cards arranged in horizontal carousels with `#0a54c4` prev/next controls. Cards group products at 12px radius with hairline `#ebf0f4` outlines.

The following whitespace reading — "Air over density", "Flat segmentation", "Color rationing" — is a derived editorial implementation inference from the verified surfaces; it is not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation.

- **Air over density**: despite being data infrastructure, the marketing surface is generously spaced with strong vertical rhythm between bands.
- **Flat segmentation**: sections separate by dark-band background (`#02294b` / `#0d0d3f`) and hairlines, never by elevation.
- **Color rationing**: bright gradient and accent green appear once or twice per page; the working chrome stays neutral.

### Responsive behavior

The breakpoint table, the collapsing rules below, and the desktop-viewport setting of the inspections that produced the values in this contract, are a derived editorial implementation inference from the verified surfaces; they are not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation.

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, carousels become swipeable |
| Tablet | 640-1024px | Moderate padding, 2-up product cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column product bands |

- Hero: 76px gradient headline scales down on mobile, weight 500 maintained
- Product/customer carousels: horizontal swipe on narrow viewports
- Dark/white alternating bands: maintain full-width treatment, reduce internal padding
- Mega-menus collapse into an accordion drawer

### Touch targets

- Hero pill CTAs at 56px height with 0 24px padding — large, unmistakable targets
- Header pills at 39px height; nav items at 48px row height
- Mega-menu rows at ~50px height with 13px 16px padding for comfortable tapping

Calling those heights large, unmistakable, or comfortable is a derived editorial implementation inference from the verified surfaces; it is not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation. The heights themselves are recorded component measurements.

### Image behavior

- Product screenshots and brand illustrations carry no shadow at any size, consistent with the flat system
- Cards hold 12px radius across breakpoints
- The hero gradient simplifies but the text-fill effect is retained on capable browsers

Reading the no-shadow imagery rule as consistent with the flat system, keeping 12px radius across breakpoints, and keeping the retained text-fill effect as the source wrote it, are derived editorial implementation inferences from the verified surfaces; they are not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice samples

These strings are verbatim live copy from the captured surfaces. The parenthetical labels — home hero H1, home section H2, products page H1 — are a derived editorial implementation inference from the verified surfaces; they are not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation.

- "Turn data into revolutionary financial products" — home hero H1. *(verified live 2026-06-17)*
- "Powered by the largest financial network" — home section H2. *(verified live 2026-06-17)*
- "Everything you need to build intelligent finance" — products page H1. *(verified live 2026-06-17)*

### Voice and tone

The voice reading below, including the tone table, is a derived editorial implementation inference from the verified surfaces; it is not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation. Plaid's voice is **plain, confident, and developer-respectful** — financial infrastructure described in clear, declarative English that treats the reader as a builder, not a lead to be closed. The live homepage headline "Turn data into revolutionary financial products" and the section title "Powered by the largest financial network" set the register: ambitious in scope, concrete in claim, free of exclamation points. CTAs are austere imperatives ("Start building", "Read the docs", "Contact sales", "See all products"). Marketing copy leans on verifiable numbers — "1 in 2 banked adults in the U.S.", "Over one million daily connections", "12,000 financial institutions" — rather than adjectives.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, ambitious-but-concrete. "Turn data into revolutionary financial products." |
| Section headings | Network-and-scale framed. "Powered by the largest financial network." |
| Feature subheads | Benefit-first, plain. "Bank payments designed for fast connections." |
| CTAs | Austere imperatives. "Start building", "Read the docs", "Contact sales". |
| Stat blocks | Numbers do the talking. "1 in 2 banked adults", "1M+ daily connections". |
| Developer surfaces | Precise, peer-to-peer; docs and API references respect the reader. |

### Forbidden register

The exclusions below are a derived editorial implementation inference from the verified surfaces; they are not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation. **Forbidden register**: hype superlatives stacked on capabilities, fear-based or urgency-driven sales pressure, undefined jargon left unexplained, emoji on product/marketing/developer surfaces, exclamation marks on routine CTAs.

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

These decisions are unnamed values, not permissions to invent. Treating the list as unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation.

- the exact `ease-enter`, `ease-exit`, and `ease-standard` curves; the token names and uses are recorded, the curves carry no attribution
- hover, pill-press, and focus visual treatments; the motion rules name `motion-fast` 120ms without an accompanying computed value
- the interactive kind of the Product Card (White), Dark Feature Card, and Eyebrow Label
- computed per-component values behind the empty, loading, error, success, skeleton, and disabled treatments described above
- the form-validation error-tone hex; the source names the border shift and does not give a hex
- `focus-visible` visual treatment; the source names generic focus as a motion-fast use and does not record a `focus-visible` color
