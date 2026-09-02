# maum.ai Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

maum.ai (마음AI (구 마인즈랩), formerly MindsLab / 마인즈랩) is a Korean artificial-intelligence company. This contract covers two first-party web surfaces inspected together: the marketing homepage at `https://maum.ai/` and the official BRAIN Team research blog. It does not treat the homepage as a proxy for the blog's computed type, or either captured surface as a proxy for a surface that did not contribute a value here.

The homepage presents the company as a `Physical AI 플랫폼`. The captured interface layer is a pure-white `#ffffff` canvas with cool-grey tinted surfaces `#f2f3f8` and `#f2f5f9` that segment the page into airy, breathable bands. Text sits in near-black `#111111` — never a flat pure black for running copy — and drops to true `#000000` only for maximum-contrast display moments. The one saturated brand anchor is electric indigo-blue `#4262ff`, reserved almost exclusively for the primary `시작하기` call-to-action, so the eye is trained to read that single color as "the action." The typographic system is three fonts with distinct jobs: **Pretendard** is the workhorse — the de-facto Korean product font — carrying body, navigation, and button labels at a quiet 16px; **Jamsil** (잠실체) steps up for section headings such as `MAUM.AI Foundation Model` at 36px / weight 700, lending a heavier, more editorial Korean voice to feature titles; **Orbitron**, a geometric techno face, appears at an oversized 115px (7.20rem) for the `MAIED` wordmark — a deliberate sci-fi flourish that signals the company's frontier-model ambitions. Live inspection returned `box-shadow: none` across nav, hero, and product cards; separation comes from flat tinted surfaces and thin `#dee4eb` hairlines. Buttons split into two families — the sharp-cornered indigo primary (`#4262ff`, 8px radius, with a darker `#3652d8` outline) for the main funnel, and a charcoal `#343434` full-pill (9999px radius) for `Contact Us` and `Chatbot Inquiry`. A single warm red `#ff4d4d` provides emphasis accents; a secondary link blue `#2563eb` handles inline links. Product showcase cards use a 20px radius with a translucent white `#ffffff` hairline outline floating over media. The cool-grey text ladder is `#5b636d` → `#595959` → `#8e8e8e`. The overall impression is flat, modern, and industrial — an AI infrastructure brand that looks built, not decorated.

The company was founded in **2014** by **유태준 (Taejun Yoo)** as a conversational-AI and `AI Human` specialist — speech-to-text, text-to-speech, and virtual-human technology — and later listed on Korea's **KOSDAQ** market. The rebrand from MindsLab to maum.ai reframed the company around a broader, more ambitious thesis: not just software AI, but **Physical AI** — foundation models embodied in robots, industrial machines (e.g. agricultural spraying robots), and defense systems, as surfaced across the current homepage's product lineup (`JINDO BOT`, `AIden`, `MAIED`, `Defense`). Founding year, founder, and the MindsLab→maum.ai rebrand are widely documented public facts; specifics beyond the observed surfaces are general public knowledge, not a directly quoted maum.ai statement in the source of this contract. The company maintains an official engineering identity through its **BRAIN Team** research blog and a public **GitHub organization**, signaling a build-in-the-open, research-forward posture typical of a frontier AI lab. What maum.ai's design refuses, visible in its restraint: the soft, playful chrome of consumer apps and the heavy shadow-stacked cards of legacy enterprise software. What it embraces: a flat, engineered, near-shadowless interface; a single decisive indigo action color; a three-font system where a techno display face (Orbitron) telegraphs frontier ambition while Pretendard keeps the reading calm; and a bilingual, credibility-forward tone appropriate to a listed deep-tech company selling to enterprise and government buyers.

The characterizations in this section — including the bound that neither captured surface stands in for a surface that did not contribute a value, calm engineered confidence, airy breathable bands, "the eye is trained" to read indigo as "the action.", de-facto Korean product font, heavier editorial Korean voice, deliberate sci-fi flourish, two-track button geometry, "looks built, not decorated", build-in-the-open research-forward posture, and the reading of what the design refuses versus what it embraces — are a derived editorial implementation inference from the verified surfaces; they are not maum.ai-authored or a separately published UI specification. The values named alongside them are live-computed. The source's own note that founding/rebrand facts are public knowledge rather than a quoted maum.ai statement is kept here so that evidence class stays visible in this document.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

These four outcomes are read out of the controls and labels recorded on the two captured surfaces, since the source declares no task list of its own. Selecting them as primary tasks is a derived editorial implementation inference from the verified surfaces; it is not maum.ai-authored or a separately published UI specification.

- Act on the primary hero call-to-action `시작하기`.
- Reach a conversation through the secondary charcoal actions `Contact Us` and `Chatbot Inquiry`.
- Scan the product lineup named on the homepage: `JINDO BOT`, `AIden`, `MAIED`, `Defense`.
- Read the official engineering identity on the BRAIN Team research blog (`maum.ai BRAIN Team`) and the public GitHub organization.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. Fictional individual biographies are not design authority and none is carried here. Use group-level segments only, in the source's own grouping: enterprise AI buyers, robotics/defense procurement, and ML engineers evaluating the foundation model. Dropping named biographies rather than promoting them, and reading those source-named groups as this product's audience, are a derived editorial implementation inference from the verified surfaces; they are not maum.ai-authored or a separately published UI specification.

### Distinctive traits

- Three-font system: Pretendard (body/UI), Jamsil (section display), Orbitron (techno wordmark)
- Single saturated indigo (`#4262ff`) reserved for the primary `시작하기` CTA
- Two-track buttons: sharp 8px indigo primary vs charcoal (`#343434`) full-pill secondary
- Near-black `#111111` text instead of pure black for running copy
- Flat depth: `box-shadow: none`; separation via tinted `#f2f3f8` surfaces and `#dee4eb` hairlines
- Warm red (`#ff4d4d`) as the single accent; blue (`#2563eb`) for inline links
- 20px-radius product cards with translucent white (`#ffffff`) hairline outlines over media
- Cool-grey neutral ladder (`#5b636d` → `#595959` → `#8e8e8e`) for text hierarchy

The characterizations above ("two-track", "techno wordmark", "flat depth") are a derived editorial implementation inference from the verified surfaces; they are not maum.ai-authored or a separately published UI specification. The values inside them are live-computed.

### Principles

These 5 items are a derived editorial implementation inference from the verified surfaces; they are not maum.ai-authored or a separately published UI specification.

1. **Engineered, not decorated.** The system is flat and shadow-free by design. *UI implication:* separate with tint and hairlines; avoid elevation and ornament — the product should look built.
2. **One decisive action.** Indigo (`#4262ff`) means "do this." *UI implication:* reserve the saturated indigo for the single primary CTA so the next step is never ambiguous; use charcoal pills for softer secondary actions.
3. **Frontier signalled through type, not noise.** *UI implication:* let Orbitron/Jamsil display faces carry the ambition; keep body copy in calm Pretendard rather than shouting with color or motion.
4. **Bilingual clarity for enterprise buyers.** *UI implication:* KR/ENG parity, terse product names, and capability-first descriptions that respect a technical reader.
5. **Restraint as credibility.** A listed deep-tech company earns trust by looking precise. *UI implication:* limited palette (indigo + charcoal + one red accent), consistent 20px card radius, and disciplined typographic hierarchy.

### Application rules

These application rules are a derived editorial implementation inference from the verified surfaces; they are not maum.ai-authored or a separately published UI specification.

- Reserve indigo (`#4262ff`) for the primary CTA — keep it the single "action" color
- Use the charcoal (`#343434`) full-pill for secondary "Contact"/"Chatbot" actions
- Use near-black `#111111` for text instead of pure black for running copy
- Separate sections with flat tinted surfaces (`#f2f3f8` / `#f2f5f9`) and `#dee4eb` hairlines, not shadows
- Use Pretendard weight 500 for body/UI, weight 700 for buttons and nav
- Reserve Jamsil for section headings and Orbitron for the techno wordmark only
- Use the warm red (`#ff4d4d`) sparingly as the single emphasis accent
- Keep product cards at 20px radius with a hairline outline over media

### Avoid

These avoidances are a derived editorial implementation inference from the verified surfaces; they are not maum.ai-authored or a separately published UI specification.

- Do not spread indigo across many elements — it dilutes the single-action signal
- Do not use drop shadows for elevation — maum.ai is a flat, shadow-free system
- Do not use pure black (`#000000`) for body copy — reserve it for max-contrast display
- Do not give the primary CTA a pill radius — the indigo button is sharp 8px; only the charcoal action is a pill
- Do not introduce a second saturated hue alongside the indigo and the red accent
- Do not set body copy in Jamsil or Orbitron — Pretendard owns reading text
- Do not overuse the red accent (`#ff4d4d`) — it is emphasis-only, never a surface or CTA fill

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The hex values below are live-computed from the captured homepage, and the uses that name a captured element — the `시작하기` fill and `#3652d8` outline, the charcoal `Contact Us` / `Chatbot Inquiry` fill, the contact-field `#f2f3f8` and `#dee4eb` outline, the product-card `#ffffff` hairline — are observations. The role names and the wider use descriptions around them are a derived editorial implementation inference from those surfaces; they are not maum.ai-authored or a separately published UI specification.

- **maum Indigo** (`#4262ff`): Primary brand color and CTA background. The saturated indigo-blue on the `시작하기` button — the system's single "action" color.
- **Indigo Border** (`#3652d8`): A darker indigo used as the 1px border/outline on the primary button, giving the fill a subtle engineered edge.
- **Charcoal** (`#343434`): The secondary-action color. Backs the full-pill `Contact Us` and `Chatbot Inquiry` round buttons.
- **Pure White** (`#ffffff`): Page background, card surfaces, text on indigo/charcoal, and the translucent card outline.
- **Surface Grey** (`#f2f3f8`): Cool-grey tinted surface for input fields and segmented content sections.
- **Surface Alt** (`#f2f5f9`): A slightly cooler secondary grey for alternating bands.
- **Hairline** (`#dee4eb`): Thin borders and field outlines — the primary separation device in this shadow-free system.
- **Ink** (`#111111`): Primary text, headings, nav labels, strong copy — a near-black used instead of pure black.
- **Pure Black** (`#000000`): Reserved for maximum-contrast display moments only.
- **Body Slate** (`#5b636d`): Secondary body copy and descriptions.
- **Muted Grey** (`#595959`): Tertiary text, captions, metadata.
- **Nav Muted** (`#8e8e8e`): Inactive top-navigation labels.
- **Accent Red** (`#ff4d4d`): The single warm accent — emphasis labels, highlight numbers, and attention cues.
- **Link Blue** (`#2563eb`): Inline text links and secondary interactive text.
- **On Primary** (`#ffffff`): Text/icon color on indigo and charcoal buttons.

### Spacing

Base unit: ~4px, with a dominant 8/16/20/32 rhythm. Named steps: `xs` 4px, `sm` 8px, `md` 16px, `base` 20px, `lg` 32px, `xl` 40px, `xxl` 64px. CTA horizontal padding lands at 32px; product cards use 40px vertical padding. Reading those named steps as a ~4px base with a dominant 8/16/20/32 rhythm is a derived editorial implementation inference from the verified surfaces; it is not maum.ai-authored or a separately published UI specification. The step values themselves are live-computed.

### Shape

- Small (6px): input fields, small containers
- Medium (8px): the primary CTA button
- Large (20px): product and content cards — the workhorse card radius
- Full (9999px): charcoal round buttons, accent pills

Named steps: `sm` 6px, `md` 8px, `lg` 20px, `full` 9999px. Calling 20px the workhorse card radius is a derived editorial implementation inference from the verified surfaces; it is not maum.ai-authored or a separately published UI specification. The four radius values themselves are live-computed.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f2f3f8` / `#f2f5f9` background shift | Section / card separation without elevation |
| Hairline (Level 2) | `1px solid #dee4eb` (fields) or `1px solid #ffffff` (cards over media) | Field and card outlines |

Shadow token: `none` is `none`. Live inspection returned `box-shadow: none` across the nav, hero, headings, buttons, and product cards.

The following elevation reading is a derived editorial implementation inference from the verified surfaces; it is not maum.ai-authored or a separately published UI specification. maum.ai is a near-shadowless system. Depth and grouping are communicated entirely through flat tinted surfaces (`#f2f3f8`, `#f2f5f9`) and thin hairlines (`#dee4eb`, plus translucent white outlines on media cards). This is a deliberate modern-flat, industrial choice — it keeps the deep-tech UI feeling engineered and fast rather than decorated. When emphasis is needed, the system reaches for color (indigo `#4262ff`, accent red `#ff4d4d`, or the charcoal `#343434` pill), never elevation.

### Motion

Duration roles as this record states them, with no computed transition observation behind them:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 240ms | Card/section reveal, carousel step, dropdown |
| `motion-slow` | 360ms | Page-level transitions, hero reveal |

Easing token names and uses as this record states them, with the curves omitted:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | Omitted — the token name and use are recorded and no curve evidence is attributed | Arriving — cards, sheets, carousel |
| `ease-exit` | Omitted — the token name and use are recorded and no curve evidence is attributed | Dismissals |
| `ease-standard` | Omitted — the token name and use are recorded and no curve evidence is attributed | Two-way transitions |

The duration roles and easing-use assignments in the tables above, and the reduced-motion rule and motion character in this paragraph, are a derived editorial implementation inference from the verified surfaces; they are not maum.ai-authored or a separately published UI specification. Motion is functional and restrained — consistent with the flat, engineered aesthetic. The product carousel steps horizontally at `motion-standard / ease-enter`; buttons respond to press with a subtle opacity/scale shift. No bounce or spring — a deep-tech AI platform signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the carousel becomes a static scroll; the product remains fully functional.

The three exact cubic-bezier curves carry no attribution in this record and stay omitted rather than promoted. Do not promote an easing curve, an animation name, a CSS transition property, or a duration beyond the table above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record's font evidence into classes. The sorting, and the resolution in each cell — no maum.ai-published type specification, no distributed font file, no declared-but-unused family, no license statement, and no type value from a surface outside these two captures — is a derived editorial implementation inference from the verified surfaces; it is not maum.ai-authored or a separately published UI specification. The observation inside each row stands on its own.

| Evidence class | Resolution |
|---|---|
| Official product-use | This record's evidence is live inspection of two web surfaces; it carries no maum.ai-published type specification. |
| Live computed surface-use | Homepage body, nav, and button labels compute as Pretendard. The section heading `MAUM.AI Foundation Model` computes as Jamsil 36px / 700 / line-height 45px. The `MAIED` wordmark computes as Orbitron 115px / 700. |
| Official distributed asset | The record establishes the families in use and carries no maum.ai-distributed font file. |
| Declared-only | The record lists no declared-but-unused family for these surfaces. |
| License | No license or distribution statement accompanies the families in this record. |
| Outside these captures | Surfaces other than the homepage and the BRAIN Team blog contributed no type value here. |

### Family

- **Body / UI:** `Pretendard` — the document default; body, nav, and button labels at 16px.
- **Display:** `Jamsil` (잠실체) — heavier Korean face for section headings (e.g. `MAUM.AI Foundation Model`).
- **Techno:** `Orbitron` — geometric sci-fi face used for the oversized `MAIED` wordmark only.

Calling Pretendard the document default, Jamsil a heavier Korean face, and Orbitron a geometric sci-fi face, and assigning those three jobs, is a derived editorial implementation inference from the verified surfaces; it is not maum.ai-authored or a separately published UI specification. The family names and the 16px body size are live-computed.

Do not substitute a system font or another family for Pretendard, Jamsil, or Orbitron and present it as the brand face. Do not replace an unavailable or unobserved brand type with Pretendard.

### Type roles

| Role | Font | Size | Weight | Line height | Letter spacing | Notes |
|---|---|---:|---:|---:|---|---|
| Display Techno | Orbitron | 115px (7.20rem) | 700 | 1.01 | normal | Oversized MAIED techno wordmark, Orbitron. §3: "MAIED" oversized wordmark |
| Section Heading | Jamsil | 36px (2.25rem) | 700 | 1.25 (45px) | normal | Section heads (MAUM.AI Foundation Model), Jamsil. §3: Feature section titles |
| Sub-heading | Pretendard | 18px (1.13rem) | 700 | 1.25 | normal | Sub-heads / policy titles, Pretendard |
| Button Large | Pretendard | 20px (1.25rem) | 600 | 1.40 | normal | Large charcoal round CTA label, Pretendard. §3: Charcoal round CTA labels |
| Button | Pretendard | 16px (1.00rem) | 700 | 1.25 | normal | Primary CTA label (시작하기), Pretendard |
| Nav | Pretendard | 16px (1.00rem) | 700 | 1.19 | normal | Top nav item, Pretendard. §3: Top navigation items |
| Body | Pretendard | 16px (1.00rem) | 500 | 1.25 (20px) | normal | Standard reading / UI text, Pretendard |

The following type-hierarchy readings are a derived editorial implementation inference from the verified surfaces; they are not maum.ai-authored or a separately published UI specification.

- **Functional font stays calm, display fonts persuade**: Pretendard carries the reading load at a quiet weight 500; Jamsil and Orbitron are reserved for headlines and the techno wordmark.
- **Three fonts, three jobs**: Pretendard = product/UI, Jamsil = editorial section voice, Orbitron = frontier-tech display. They never swap roles.
- **Hangul-first sizing**: Body sits at a comfortable 16px, generous for hangul legibility in an information-dense B2B deep-tech context.
- **Weight, not size, carries UI hierarchy**: nav and buttons share 16px but split by weight (700 vs 500) and color, keeping the chrome compact.

### Assets

- Product and robotics imagery sits inside 20px-radius cards with a translucent white `#ffffff` hairline outline over media and `box-shadow: none`.
- This record establishes no maum.ai-published logo or illustration file. The favicon pointer stored with this reference is a third-party proxy, not a maum.ai-hosted brand file, and is not presented as a brand asset here.
- Observed product names on the homepage lineup: `JINDO BOT`, `AIden`, `MAIED`, `Defense`.

Reading the imagery as first-party page content rather than as a published illustration specification, and declining to present a third-party favicon proxy as a brand file, are a derived editorial implementation inference from the verified surfaces; they are not maum.ai-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The live inspection recorded default computed styles. Hover, button press, and focus are named in this record's motion rules (`motion-fast` 120ms), but no computed value accompanies them, so those visual treatments are omitted here.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. This is not a complete state-coverage claim.

The Product Showcase Card, Tinted Surface Card, and Accent Highlight have recorded geometry and no interactive-kind evidence, so kind and a state-applicability map are omitted for them rather than assumed.

The applicability note above, the omit-kind decision for the three non-interactive records, every interactive-kind verdict, every applicability verdict, and the reason given for either, are a derived editorial implementation inference from the verified surfaces; they are not maum.ai-authored or a separately published UI specification.

### State treatments

The nine state treatments below are a derived editorial implementation inference from the verified surfaces; they are not maum.ai-authored or a separately published UI specification. They compose values established elsewhere in this contract, and no computed per-component observation accompanies them.

| State | Treatment |
|---|---|
| Empty (no results / no data) | White canvas. Single Ink (`#111111`) line explaining the empty condition, with one indigo CTA to proceed. No illustration clutter. |
| Empty (saved / list none yet) | Muted Grey (`#595959`) single line stating nothing yet, plus a path back to the action. Calm, honest. |
| Loading (content fetch) | Skeleton blocks on `#f2f3f8` tinted surface at final card dimensions, 20px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| Loading (form submit) | Inline progress within the charcoal button; label stays visible, action disabled until response. |
| Error (request failed) | Inline message in Ink (`#111111`) with a plain explanation and a retry. Accent red (`#ff4d4d`) marks the error cue; never a generic `오류` alone. |
| Error (form validation) | Field-level message below the `#f2f3f8` input; accent-red cue; describes what is valid, not just `필수`. |
| Success (form submitted) | Brief inline confirmation in a calm tone; next-step detail linked immediately below. No celebratory emoji. |
| Skeleton | `#f2f3f8` blocks at final dimensions, 20px radius, flat pulse. |
| Disabled | Muted Grey (`#8e8e8e`) text on reduced-opacity surface; indigo actions fade rather than turn grey to preserve brand read. |

### Primary CTA (시작하기)

- Role: primary hero call-to-action — the system's single primary action
- Type: button
- Kind: interactive
- Anatomy: label
- Label: `시작하기`
- Background: `#4262ff`
- Text: `#ffffff`
- Border: `1px solid #3652d8`
- Radius: 8px
- Padding: 0px 32px
- Height: 50px
- Font: 16px / 700 Pretendard. 16px Pretendard weight 700
- Use: Primary hero CTA (시작하기)
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Computed on the homepage hero |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | applicable | The control commits the primary funnel step; visual treatment omitted |
| error | applicable | The committed step can fail and report on this control; visual treatment omitted |
| success | applicable | The committed step can confirm on this control; visual treatment omitted |

### Charcoal Round (Contact / Chatbot)

- Role: secondary Contact Us / Chatbot Inquiry round CTA
- Type: button
- Kind: interactive
- Anatomy: label
- Labels: `Contact Us`, `Chatbot Inquiry`
- Background: `#343434`
- Text: `#ffffff`
- Radius: 9999px
- Padding: 20px 32px
- Height: 65px
- Font: 20px / 600 Pretendard. 20px Pretendard weight 600
- Use: Contact Us / Chatbot Inquiry round CTA. §4: Secondary actions — "Contact Us", "Chatbot Inquiry"
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Computed on the homepage |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | applicable | The control commits a contact or chatbot request; the source states inline progress within the charcoal button on form submit; visual treatment omitted as a computed value |
| error | applicable | The committed request can fail and report on this control; visual treatment omitted |
| success | applicable | The committed request can confirm on this control; visual treatment omitted |

### Contact Field

- Role: contact form text field and message textarea
- Type: input
- Kind: interactive
- Anatomy: value field
- Background: `#f2f3f8`
- Text: `#111111`
- Border: `1px solid #dee4eb`
- Radius: 6px
- Height: 64px
- Font: 16px Pretendard
- Use: Contact form text field. Contact form text fields and message textarea.
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Computed on the homepage contact form |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Input control; visual treatment omitted |
| loading | applicable | The field belongs to a form that submits; visual treatment omitted |
| error | applicable | Form field; the source states a field-level message below the `#f2f3f8` input; visual treatment omitted as a computed value |
| success | applicable | Form field; visual treatment omitted |

### Product Showcase Card

- Role: product carousel card with a translucent white hairline outline floating over media
- Type: card
- Kind: omitted. The record establishes geometry and no interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Border: `1px solid #ffffff`
- Radius: 20px
- Padding: 40px 0px
- Shadow: none
- Use: Product showcase card with white hairline outline over media
- Title in Jamsil weight 700, `#111111`. Body 16px Pretendard weight 500, `#5b636d`.

### Tinted Surface Card

- Role: tinted content / section card on the cool-grey surface
- Type: card
- Kind: omitted. The record establishes geometry and no interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#f2f3f8`
- Text: `#111111`
- Radius: 20px
- Use: Tinted content / section card

### Accent Highlight

- Role: warm-red emphasis label / highlight tag
- Type: badge
- Kind: omitted. The record establishes geometry and no interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Text: `#ff4d4d`
- Radius: 9999px
- Font: 16px / 700 Pretendard. 16px Pretendard weight 700
- Use: Warm-red emphasis label / highlight tag

### Top Navigation Item

- Role: item in the top horizontal nav
- Type: tab
- Kind: interactive
- Anatomy: label
- Background: `#ffffff`
- Text: `#8e8e8e`
- Font: 16px / 700 Pretendard. 16px Pretendard weight 700
- Active: ink `#111111` text on the active item (`ink #111111 text on active`)
- Items: `Physical AI`, `Defense`, `MAIED`, `Company`
- Use: Top navigation item
- Observed: default; active item text `#111111`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Computed on the homepage header |
| hover | applicable | Pointer-web navigation item; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A navigation entry can be unavailable; visual treatment omitted |
| loading | not-applicable | The item moves the reader to another area; the item itself commits no operation that pends |
| error | not-applicable | Active versus inactive is the item's whole meaning; it reports no request or validation failure |
| success | not-applicable | Reaching a destination area is navigation, not an action-outcome confirmation on the item |

Additional observed state: active — text `#111111`.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Spacing and container

The recorded spacing scale runs 4px, 8px, 16px, 20px, 32px, 40px, 64px on a ~4px base unit, with a dominant 8/16/20/32 rhythm. The hero is centered with a large Orbitron/Jamsil display anchor and a single indigo CTA. Product/solution cards are arranged as a horizontal carousel of 20px-radius outlined tiles. Feature sections alternate white (`#ffffff`) and tinted grey (`#f2f3f8` / `#f2f5f9`) full-width bands. The contact form uses stacked `#f2f3f8` fields at 6px radius. CTA horizontal padding lands at 32px; product cards use 40px vertical padding.

The following whitespace reading — "Engineered breathing room", "Flat segmentation", "Two-track button rhythm", the ~4px base / dominant 8/16/20/32 rhythm as a reading of the recorded scale, and "generous breathing room" for that 40px vertical padding — is a derived editorial implementation inference from the verified surfaces; it is not maum.ai-authored or a separately published UI specification.

- **Engineered breathing room**: despite dense B2B AI content, sections are airy with generous vertical rhythm; product cards use 40px vertical padding, giving the deep-tech content generous breathing room.
- **Flat segmentation**: bands separate by background tint and `#dee4eb` hairlines, not by shadow or heavy borders.
- **Two-track button rhythm**: the sharp indigo primary and the charcoal pill recur as a consistent action vocabulary across surfaces.

### Responsive behavior

The breakpoint table and the collapsing rules below are a derived editorial implementation inference from the verified surfaces; they are not maum.ai-authored or a separately published UI specification. The inspections that produced the values in this contract were taken at a desktop viewport.

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, display sizes compress, product carousel scrolls |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column feature bands |

- Hero: Orbitron/Jamsil display scales down on mobile, weight maintained
- Product cards: horizontal carousel becomes swipe/scroll on narrow viewports
- Feature bands: multi-column → stacked single column
- Tinted/white alternating sections maintain full-width treatment

### Touch targets

- Primary CTA at 50px height with 32px horizontal padding — comfortably tappable
- Charcoal round buttons at 65px height, full pill for an unmistakable target
- Contact fields at 64px height for easy touch entry
- Nav items spaced within the top header

Calling those heights comfortable, unmistakable, or easy is a derived editorial implementation inference from the verified surfaces; it is not maum.ai-authored or a separately published UI specification. The heights themselves are recorded component measurements.

### Image behavior

- Product and robotics imagery carries no shadow at any size, consistent with the flat system
- Cards maintain 20px radius and the translucent white outline across breakpoints

Reading the no-shadow imagery rule as consistent with the flat system, and keeping 20px radius plus the translucent white outline across breakpoints, is a derived editorial implementation inference from the verified surfaces; it is not maum.ai-authored or a separately published UI specification. The geometry values themselves are recorded component measurements.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice samples

These three strings are verbatim live copy from the captured surfaces. The parenthetical labels — positioning, frontier-model framing, engineering identity — are a derived editorial implementation inference from the verified surfaces; they are not maum.ai-authored or a separately published UI specification.

- `마음AI - Physical AI 플랫폼` — homepage H1 / title (positioning)
- `MAUM.AI Foundation Model` — section heading (frontier-model framing)
- `maum.ai BRAIN Team` — official research blog H1 (engineering identity)

### Voice and tone

The voice reading below, including the tone table, is a derived editorial implementation inference from the verified surfaces; it is not maum.ai-authored or a separately published UI specification. maum.ai's voice is **precise, confident, and frontier-facing** — a deep-tech company that talks about building real AI systems (foundation models, robots, defense) without hype or consumer cuteness. The positioning line `Physical AI 플랫폼` sets the register: technical, ambitious, matter-of-fact. Product names are terse and engineered (`MAIED`, `AIden`, `JINDO BOT`), and CTAs are direct verbs (`시작하기`, `Contact Us`, `Chatbot Inquiry`). The bilingual KR/ENG surface treats the reader as a technical or enterprise buyer, not a casual visitor.

| Context | Tone |
|---|---|
| Hero / positioning | Ambitious, technical. `Physical AI 플랫폼.` Confident, not hype. |
| Product names | Terse, engineered. `MAIED`, `AIden`, `JINDO BOT`. |
| CTAs | Direct imperatives. `시작하기`, `Contact Us`, `Chatbot Inquiry`. |
| Feature descriptions | Capability-first, concrete. States what the model/robot does. |
| Company / IR | Formal, credibility-forward — a KOSDAQ-listed AI company register. |

### Forbidden register

The exclusions below are a derived editorial implementation inference from the verified surfaces; they are not maum.ai-authored or a separately published UI specification. Consumer-app cuteness, exclamation-heavy hype, vague `revolutionary`/`game-changing` superlatives, and undefined jargon left unexplained to an enterprise reader.

### Locale

maum.ai is a Korean company. Its name is written `마음AI` (구 마인즈랩) in Korean, and the captured homepage is bilingual KR/ENG. Hangul-first sizing at 16px body is recorded under Typography. KR/ENG parity is an application rule under Experience, not a complete locale profile.

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

These decisions are unnamed values, not permissions to invent:

- the exact `ease-enter`, `ease-exit`, and `ease-standard` curves; the token names and uses are recorded, the curves carry no attribution
- hover, button-press, and focus visual treatments, which the motion rules name (`motion-fast` 120ms) without any accompanying computed value
- the interactive kind of the Product Showcase Card, Tinted Surface Card, and Accent Highlight
- computed per-component values behind the empty, loading, error, success, skeleton, and disabled treatments described above
