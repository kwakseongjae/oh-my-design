# Dropbox Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Dropbox is a US productivity company. Catalog homepage identity is `https://www.dropbox.com`. Dropbox publishes official brand guidelines at `https://brand.dropbox.com` (`dropbox.design` 301-redirects there), covering framework, voice and tone, logo, typography, iconography, color, imagery, and motion.

This contract holds two evidence domains apart and never fills one from the other. The **official published guideline domain** is `brand.dropbox.com`: it supplies the framework and voice pillars, the color statement and the named color wheel, the DB Sharp Grotesk typography page, and the four motion principles with one example curve. The **live marketing-surface domain** is a 2026-06-11 computed-style inspect of `https://www.dropbox.com` and `https://www.dropbox.com/plans`: it supplies the measured values in Foundations, Typography, Components, and Layout below. The one seam between the two is stated where it falls: the four accent hexes carried below are swatch values published on the guideline domain's color page, and of those only Azalea was additionally observed rendering on the live surface — a swatch value is not evidence of where the hue renders. Where the two agree, this document says so; a guideline statement never becomes a measured token, and a measured token never becomes a guideline statement. Treating that split as the contract boundary is a derived editorial implementation inference from the verified surfaces; it is not Dropbox-authored or a separately published UI specification.

The source reads the marketing surface as a warm editorial workspace rather than a sterile SaaS dashboard. The canvas is not white but **Coconut** — a warm cream (`#f7f5f2`) that the official brand site names as one of its three core colors — layered with pure white panels (`#ffffff`) and a deeper warm sand (`#eee9e2`) for alternating card surfaces. Text sits in **Graphite** (`#1e1919`), read as a warm near-black with a reddish undertone instead of a cold neutral. Against this paper-like field, a single electric **Dropbox Blue** (`#0061fe`) carries every primary action. The source calls the most telling micro-decision in the system the fact that text on blue buttons is coconut cream (`#f7f5f2`), not pure white — even at maximum contrast, the brand keeps its warmth. The warm-editorial reading, the reddish-undertone characterization, and the coconut-on-blue "warmth preserved at full contrast" reading are a derived editorial implementation inference from the verified surfaces; they are not Dropbox-authored or a separately published UI specification, and the source's own ledger marks the last of them as an editorial reading.

Typography is described as a two-font conversation. **Sharp Grotesk** — Dropbox's custom variable typeface, "DB Sharp Grotesk", commissioned from the Sharp Type foundry — owns every headline at a confident but unshouty weight 500 (40px hero, 26px feature heads), with a wider stylistic cut ("Sharp Grotesk 23") appearing at weight 400 for 32px section titles. **Atlas Grotesk** handles everything functional: body copy, nav, buttons, and footers at 16px/400. Reading that pairing as the brand's signature register — geometric personality in the display layer, calm legibility everywhere else — is a derived editorial implementation inference from the verified surfaces; it is not Dropbox-authored or a separately published UI specification.

Depth is essentially flat. Live inspection found `box-shadow: none` across CTAs, nav, and cards; separation comes from surface shifts (cream → white → sand → graphite) and chunky 2px borders rather than elevation. Geometry is read as soft but not bubbly: 12px is the workhorse radius (60 occurrences on the homepage), 16px for large CTAs, with occasional 100px full-pill moments. Full-width graphite bands (`#1e1919`, and a deeper `#1c1d21` variant) flip the palette for security and enterprise messaging, with coconut text glowing against the dark. Accent color is deliberately "diverse and unexpected" per the brand guidelines — a magenta azalea (`#cd2f7b`) shows up in live decoration, drawn from a 16-color accent wheel. The measured facts in this paragraph are the `box-shadow: none` result, the radius values and their frequency, the band colors, and the azalea value; reading depth as essentially flat, reading separation as carried by surface shifts and border weight rather than elevation, reading the geometry as soft but not bubbly, and reading the bands as glowing and as tied to security and enterprise messaging are a derived editorial implementation inference from the verified surfaces; they are not Dropbox-authored or a separately published UI specification, and only the "diverse and unexpected" phrase in this paragraph is quoted brand guideline language.

Dropbox was founded in **2007** by **Drew Houston**; the source records **Arash Ferdowsi** as co-founder and the forgotten-USB-drive-on-a-bus origin as widely documented public facts rather than same-turn verified ones, and the current about page as listing Houston as Co-Founder and Co-CEO, joined by Co-CEO Ashraf Alkarmi in 2024. The stated mission has widened from file syncing to "design a more enlightened way of working" — productivity tools that reduce busywork rather than create it. The product evolved from a single magic folder into a workspace platform — cloud storage plus Replay (video review), Sign, DocSend, Dash (AI-powered organization and search), and Reclaim.ai (scheduling) — serving, per the live homepage, "over 700 million registered users." Treating that history and product list as narrative context rather than as interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Dropbox-authored or a separately published UI specification.

The source reads the design as refusing sterile SaaS chrome (the canvas is warm coconut, not dashboard white), shadow-stacked skeuomorphism, and hype-driven copy; and as embracing a paper-warm editorial surface, one decisive blue, a custom typeface built to be "warm, soulful, and relatable," and the Eames maxim quoted on the brand site — "The details are not the details. They make the design." Those refuses/embraces readings are a derived editorial implementation inference from the verified surfaces; they are not Dropbox-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Treating these three captured-surface outcomes as the primary tasks, and not lifting the source's fictional archetypes into this list, is a derived editorial implementation inference from the verified surfaces; it is not Dropbox-authored or a separately published UI specification.

- Start a trial or a purchase from the captured marketing and pricing surfaces through the single blue CTA — "Try Dropbox free", "Get started", "Try for free", "Buy now", with "or buy now" as the tertiary text action.
- Compare plans on `https://www.dropbox.com/plans`, where plan columns stack and each repeats the same `#0061fe` CTA, one per plan.
- Browse the product line from the 72px global header mega-menu, whose 92px entry cards carry Dropbox, Replay, Sign, Dash, and DocSend.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source's persona section supplies fictional archetypes built on publicly observable Dropbox user segments — creative teams, small businesses, knowledge workers, and IT admins — and states plainly that they do not refer to real people; the archetypes, their names, and their biographies are dropped here and are not primary tasks. Keeping only those four segment labels, and reading them as stakeholder groups rather than as verified first-party audience research, is a derived editorial implementation inference from the verified surfaces; it is not Dropbox-authored or a separately published UI specification.

### Distinctive traits

- Coconut cream (`#f7f5f2`) canvas instead of white — read as paper-warm and editorial
- Graphite (`#1e1919`) warm near-black for text and dark bands
- One action color: Dropbox Blue (`#0061fe`) on every primary CTA
- Coconut (not white) text on blue — warmth preserved at full contrast
- Custom Sharp Grotesk display over Atlas Grotesk body
- Flat, shadowless depth — surface shifts and 2px borders do the separating
- 12px workhorse radius; 16px for large CTAs; 100px pill accents
- 2px borders on all buttons, including filled ones (border matches fill)

The paper-warm/editorial reading, the "warmth preserved at full contrast" reading, the single-action-color role, the flat/shadowless reading of depth with separation carried by surface shifts and 2px borders, and the ranking of 12px as the workhorse radius are a derived editorial implementation inference from the verified surfaces; they are not Dropbox-authored or a separately published UI specification. The remaining items restate measured values.

### Official brand guidance

First-party language published on `brand.dropbox.com`, quoted as issued:

- Framework: "Dropbox is designed to simplify the frenzy of modern work", resting on four pillars — **Humanity**, **Clarity**, **Action**, **Delight**; and the Eames quote "The details are not the details. They make the design."
- Color: "A diverse and unexpected color palette is a key visual expression of our brand."
- Typography: "Type is what meaning looks like" — the maxim quoted on the official typography page (Max Phillips, Sharp Type). The guidelines also note the variable version of DB Sharp Grotesk is used to optically adjust headline weight on light vs dark backgrounds.
- Motion, four principles: **Prioritize Simplicity** — "fewer, better elements means that the movement will always have a purpose"; **Deepen Understanding** — motion explains complex actions and eases cognitive load; **Instant Feedback** — interactions respond immediately with movement that "echoes physical properties"; **Subtle Playfulness** — "make the user smile with a wink, rather than throwing confetti in their face."
- Voice, four pillars: **Simple** ("Keep it crystal clear. Trim words. Use strong nouns. Craft a story."), **Helpful** ("Help people take action. Tell them what's coming, then show them how to get there."), **Human** ("Stay real and relatable. Write the way you talk. Avoid jargon."), **Magic** ("Charm them with wit. Clever is great. Fresh language is even better."), with the governing rule "no matter what we're saying, or where, we always sound like Dropbox."

### Principles

The four numbered items below quote first-party framework language from the official brand site. Each *UI implication* note, item 5's reading, and the pairing of a pillar with a measured value are a derived editorial implementation inference from the verified surfaces; they are not Dropbox-authored or a separately published UI specification.

1. **Humanity.** "Warm, soulful, and relatable. We're here to keep life organized and make work easier." *UI implication:* warm coconut canvas, graphite (not black) ink, coconut (not white) text on blue — every neutral carries warmth.
2. **Clarity.** "It's about surfacing what matters, cutting out what doesn't, and reducing complexity." *UI implication:* one action color, flat shadowless hierarchy, medium-weight type — nothing competes with the next step.
3. **Action.** Users "always know what to do next. They should never have to read a manual." *UI implication:* a single unmistakable `#0061fe` CTA per context; verb-first labels ("Get started", "Try Dropbox free").
4. **Delight.** "We design small moments of joy into everything we do." *UI implication:* witty copy, unexpected accent hues from the 16-color wheel, and motion that winks — used sparingly, one moment at a time.
5. **The details are not the details.** The Eames quote anchors the brand framework. *UI implication:* micro-decisions carry the system — the 2px self-colored border on filled buttons, the cream-on-blue label, the wide type cut reserved for 32px titles.

The application rules below copy the source's Do list. They are a derived editorial implementation inference from the verified surfaces; they are not Dropbox-authored or a separately published UI specification, except for the quoted guideline fragment inside the last item.

- Use coconut (`#f7f5f2`) as the default canvas — white (`#ffffff`) is for panels on top of it
- Reserve Dropbox Blue (`#0061fe`) for primary actions only — one action color
- Put coconut text (not pure white) on blue and graphite surfaces
- Set headlines in Sharp Grotesk weight 500; body and UI in Atlas Grotesk 400
- Use 2px borders on all buttons — filled buttons border in their own fill color
- Keep the system flat: separate with surface tints (`#eee9e2` sand, graphite bands), never shadows
- Use 12px radius as the default; 16px for large marketing CTAs
- Draw accent moments from the official wheel (Azalea `#cd2f7b`, Sunset `#fa551e`) sparingly, "to create harmony and focus"

### Avoid

The following items copy the source's Don't list. They are a derived editorial implementation inference from the verified surfaces; they are not Dropbox-authored or a separately published UI specification.

- Use a cold pure-white page background — the canvas is warm coconut
- Add drop shadows for elevation — the system is shadowless
- Use bold (700) display type — the marketing hierarchy tops out at weight 500
- Spread blue across links, icons, and decorations — it dilutes the single-action signal
- Use thin 1px borders on buttons — the 2px weight is part of the geometry
- Put pure black text on the canvas — Graphite `#1e1919` is the ink
- Stack multiple accent hues in one section — accents are single, intentional moments
- Round cards past 16px or square off CTAs — geometry stays in the 8–16px band

Two further boundaries hold for this contract: a measured marketing value is not evidence for a guideline the brand has not published, and a published guideline name is not a renderable value until a value is recorded for it. Stating those two boundaries is a derived editorial implementation inference from the verified surfaces; it is not Dropbox-authored or a separately published UI specification.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Core trio — the official brand site names these three as the core colors, and the 2026-06-11 live inspect computed the same values, so both evidence domains carry them:

- **Dropbox Blue** (`#0061fe`): the primary brand color and the system's single action color. Every primary CTA ("Get started", "Try Dropbox free", "Buy now") is this blue. Recorded as identical on `brand.dropbox.com` swatches and live computed styles.
- **Coconut** (`#f7f5f2`): the warm cream canvas — page background, and the text color on blue buttons and graphite bands. The brand's "white".
- **Graphite** (`#1e1919`): warm near-black for headings, body text, outline-button borders, and full-width dark sections.

Surfaces — live computed-style values from the marketing and pricing surfaces:

- **Pure White** (`#ffffff`): elevated panels and cards sitting on the coconut canvas.
- **Sand** (`#eee9e2`): deeper warm beige for alternate card surfaces and tinted sections.
- **Graphite Deep** (`#1c1d21`): a cooler near-black variant observed on dark feature panels.

Text hierarchy:

- **Graphite** (`#1e1919`): headings, body, nav — the default ink.
- **Muted Taupe** (`#716b61`): secondary text. The live value is `rgba(82, 74, 62, 0.82)` — a warm taupe at 82% opacity that composites to approximately `#716b61` over the coconut canvas. The composite is the derived figure; the live rgba is the measured one.
- **Coconut** (`#f7f5f2`): text on blue and on graphite bands; footer links at 14px.

Accents, from the official 16-color accent wheel:

- **Azalea** (`#cd2f7b`): magenta accent, additionally observed live in decorative elements.
- **Sunset** (`#fa551e`): warm orange-red accent.
- **Tangerine** (`#ff8c19`): orange accent.
- **Crimson** (`#9b0032`): deep red accent.

The guidelines list further accents by name — Pink, Rust, Gold, Vivid Vargas, Canopy, Lime, Ocean, Zen, Navy, Cloud, Plum, Orchid — plus a 20-step grey scale. Those names are official; this contract carries no value for them, and the value field stays omitted rather than filled from a neighbouring hue.

The hex values, the "core / surfaces / text hierarchy / accents" grouping, and the accent-wheel attribution above come from the source. Assigning each value to a bounded role, keeping `canvas`, `coconut`, and `on-primary` distinct where they share `#f7f5f2`, stating which of the two evidence domains carries each group, and carrying the further accent names and the grey scale by name with the value field left empty rather than filled from a neighbouring hue are a derived editorial implementation inference from the verified surfaces; they are not Dropbox-authored or a separately published UI specification.

### Spacing

Source scale: `xs` 4, `sm` 8, `md` 12, `base` 16, `lg` 24, `xl` 32, `xxl` 48, `section` 72. The measured paddings the source records alongside it are 12px (nav item horizontal), 16px (menu cards, CTA vertical), and 24px (CTA horizontal, hero CTA); section gaps between full-width bands run generous at roughly 72px, on a base unit of about 4px with a 12/16/24 working rhythm. Presenting the named scale and the measured paddings as one system, and the "generous" reading, are a derived editorial implementation inference from the verified surfaces; they are not Dropbox-authored or a separately published UI specification.

### Shape

Radius scale: small 8px for minor elements; medium 12px as the workhorse — menu cards, compact CTAs, content cards, 60 live occurrences; large 16px for marketing CTAs and large containers; full 100px for occasional pill accents. The four values and the 60-occurrence count are measured; calling 12px the workhorse and 100px occasional is a derived editorial implementation inference from the verified surfaces, and it is not Dropbox-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Everything — buttons, nav, cards |
| Tint (Level 1) | Surface shift `#f7f5f2` → `#ffffff` → `#eee9e2` | Card/section separation |
| Border (Level 2) | 2px solid border (`#0061fe`, `#1e1919`, or `#f7f5f2` on dark) | Interactive emphasis |
| Inversion (Level 3) | Graphite band `#1e1919` with coconut text | Maximum-emphasis sections |

The only measured fact in this table is that live inspection returned `box-shadow: none` on every measured CTA, nav element, and card across both surfaces; the source's `shadow.none` token records the same. Reading that as "shadowless by design", and reading hierarchy as carried by warm surface contrast plus an unusually heavy 2px border weight in a flat, print-like approach consistent with an editorial, paper-toned identity — and reading emphasis as inverting to graphite or reaching for an accent hue rather than lifting elements off the page — is a derived editorial implementation inference from the verified surfaces; it is not Dropbox-authored or a separately published UI specification, and the source's own ledger marks "the system is shadowless by design" as an editorial reading.

### Motion

Four motion principles and one curve are first-party, published on the official motion page. The duration scale is not: the source records 120ms / 240ms / 400ms as illustrative scale values consistent with the observed snappy marketing motion, and states that only `cubic-bezier(0.65, 0, 0.45, 1)` is officially documented. The table is carried with that class attached rather than promoted as a brand token.

| Token | Value | Class | Use |
|---|---|---|---|
| `motion-fast` | 120ms | illustrative scale value | Hover, button feedback, focus |
| `motion-standard` | 240ms | illustrative scale value | Menu open, card reveal, sheet |
| `motion-slow` | 400ms | illustrative scale value | Band transitions, hero illustration moments |

| Token | Curve | Use |
|---|---|---|
| `ease-dropbox` | `cubic-bezier(0.65, 0, 0.45, 1)` | The documented brand curve, from the official "Create folder" motion example — read as symmetric, snappy in, soft out |
| `ease-exit` | omitted — the token name and its use are stated, its curve is unattributed | Dismissals |

Reduced-motion behavior is stated by the source rather than left open: the homepage ships an explicit "Enable animation" toggle, so motion is opt-out-able by design, and under `prefers-reduced-motion: reduce` everything collapses to instant. Reading the toggle as making motion opt-out-able by design is a derived editorial implementation inference from the verified surfaces; it is not Dropbox-authored or a separately published UI specification.

Do not promote an easing curve, animation name, transition property, or a duration beyond the table above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of one curve is not that gate. The "symmetric, snappy in, soft out" characterization of the documented curve is a derived editorial implementation inference from the verified surfaces; it is not Dropbox-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official published guideline | The official typography page documents **DB Sharp Grotesk** as a custom typeface by Sharp Type and notes the variable version is used to optically adjust headline weights. |
| Live computed surface-use | The 2026-06-11 inspect computed `Sharp Grotesk`, the wider `Sharp Grotesk 23` cut, and `Atlas Grotesk` (`Atlas Grotesk Web`) on the marketing and pricing surfaces; every metric in the hierarchy below is from that inspect. |
| Custom-commission boundary | Sharp Grotesk is commissioned from the Sharp Type foundry for Dropbox. The source establishes it as the brand's own display face; it does not establish a distributed font package, so none is written here. |
| Character claim | The source describes the custom typeface as built to be "warm, soulful, and relatable" — brand language about the face, not a UI token. |

Sorting the source's typography material into these four evidence classes — and reading the absence of a distributed font package as a reason to write none rather than to assume one — is a derived editorial implementation inference from the verified surfaces; it is not Dropbox-authored or a separately published UI specification.

### Family

- **Display:** `Sharp Grotesk` ("DB Sharp Grotesk") — headlines and feature heads. A wider cut, `Sharp Grotesk 23`, appears for large section titles.
- **Body:** `Atlas Grotesk` (`Atlas Grotesk Web`) — body copy, nav, buttons, footers, captions.
- Do not substitute a system stack or a neighbouring grotesque for either face; they are named and observed together, and neither is presented as the other's fallback. This substitution rule is a derived editorial implementation inference from the verified surfaces; it is not Dropbox-authored or a separately published UI specification.

### Type roles

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Sharp Grotesk | 40px (2.50rem) | 500 | 1.20 (48px) | Hero headline ("Get to work, with a lot less work") |
| Section Title | Sharp Grotesk 23 | 32px (2.00rem) | 400 | 1.20 (38.4px) | Wide-cut section titles |
| Feature Heading | Sharp Grotesk | 26px (1.63rem) | 500 | 1.30 (33.8px) | Feature block heads |
| Subheading | Atlas Grotesk | 20px (1.25rem) | 500 | 1.20 (24px) | Social-proof lines, card heads |
| Body / Nav | Atlas Grotesk | 16px (1.00rem) | 400 | 1.50 | Reading text, nav items, button labels |
| Caption / Footer | Atlas Grotesk | 14px (0.88rem) | 400 | 1.55 | Footer links, legal |

Type rules carried from the source:

- **Medium, never bold**: display sits at weight 500 — read as assertive without shouting. The 32px section tier even drops to 400 in the wide cut, and the observed marketing hierarchy tops out below 700.
- **Variable type as a tool**: the guideline note above governs light-vs-dark headline weight.
- **Two fonts, two jobs**: the source reads Sharp Grotesk as persuading and Atlas Grotesk as explaining, and says they never swap roles.
- **Normal tracking**: letter-spacing stays `normal` across the measured hierarchy; the source reads the warmth as coming from the letterforms rather than from compression.

The "assertive without shouting", "persuades / explains", and "warmth comes from the letterforms" readings are a derived editorial implementation inference from the verified surfaces; they are not Dropbox-authored or a separately published UI specification.

### Assets

- The official brand site is the authority for logo, iconography, and imagery; this document establishes no logo geometry, icon grid, or image treatment of its own. Drawing that asset-authority boundary is a derived editorial implementation inference from the verified surfaces; it is not Dropbox-authored or a separately published UI specification.
- Illustration and photography carry the warm accent palette per the brand's imagery guidance.
- Product UI screenshots sit flat, with no shadow, on tinted surfaces at all sizes.

<!-- design-md:section components-states -->
## 4. Components & States

### Evidence boundary

Every component value below is a live computed-style observation from the 2026-06-11 marketing and pricing inspect. The official guideline domain contributes no component specification here. Applicability follows each control's role, not the completeness of the capture; where a visual treatment for a state is unrecorded, the treatment is omitted and the state stays applicable. State coverage is not claimed complete.

Treating the primitive-type retentions, the interaction-kind omissions, and every applicability judgment and reason statement in this section as implementation classifications is a derived editorial implementation inference from the verified surfaces and their component records; it is not Dropbox-authored or a separately published UI specification. Those classifications promote no unmeasured visual treatment.

Two geometry rules span the button family: filled buttons carry a 2px border in their own fill color, so filled and outline variants stay dimensionally identical; and on graphite bands the outline button flips to a coconut `#f7f5f2` border and text. Both sentences are the source's own; hoisting them out of the individual records into a family-level rule is a derived editorial implementation inference from the verified surfaces, and it is not Dropbox-authored or a separately published UI specification.

### Primary Marketing CTA

- Primitive type: button
- Kind: interactive
- Background: `#0061fe`
- Text: `#f7f5f2`
- Border: 2px solid `#0061fe`
- Radius: 16px
- Padding: 16px 24px
- Height: 55px; a hero-size primary also appears at 71px height with 24px uniform padding
- Font: 16px / 400 / Atlas Grotesk
- Use: "Try Dropbox free", "Buy now" — primary conversion CTA on homepage and pricing

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Live computed treatment on both surfaces |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | The source records a disabled presentation for primary actions; visual treatment omitted here |
| loading | not-applicable | A marketing CTA hands off to the signup or purchase flow and carries no loading presentation of its own |
| error | not-applicable | The control activates a flow rather than presenting validation failure |
| success | not-applicable | The control activates a flow rather than presenting completion feedback |

### Compact Header CTA

- Primitive type: button
- Kind: interactive
- Background: `#0061fe`
- Text: `#f7f5f2`
- Border: 2px solid `#0061fe`
- Radius: 12px
- Padding: 0px 12px
- Height: 40px
- Font: 16px / 400 / Atlas Grotesk
- Use: "Get started" in the 72px global header

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Live computed treatment in the global header |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | The source records a disabled presentation for primary actions; visual treatment omitted here |
| loading | not-applicable | A header CTA hands off to the signup flow and carries no loading presentation of its own |
| error | not-applicable | The control activates a flow rather than presenting validation failure |
| success | not-applicable | The control activates a flow rather than presenting completion feedback |

### Outline Secondary CTA

- Primitive type: button
- Kind: interactive
- Background: transparent
- Text: `#1e1919`
- Border: 2px solid `#1e1919`
- Radius: 16px
- Padding: 16px 24px
- Height: 55px
- Font: 16px / 400 / Atlas Grotesk
- Use: "Learn more" and secondary "Try Dropbox free" alongside a primary

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Live computed treatment on the marketing surface |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Secondary action of the same button family; visual treatment omitted |
| loading | not-applicable | A secondary marketing CTA hands off to another surface and carries no loading presentation of its own |
| error | not-applicable | The control activates navigation rather than presenting validation failure |
| success | not-applicable | The control activates navigation rather than presenting completion feedback |

### Tertiary Text Button

- Primitive type: the source names it a text button; it declares no `type` field for it, so no primitive beyond that name is asserted
- Kind: interactive
- Background: transparent
- Text: `#1e1919`
- Font: 13.33px / 400
- Use: "or buy now" tertiary action under pricing CTAs

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Live computed treatment on the pricing surface |
| hover | applicable | Pointer-web text action; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | not-applicable | A tertiary text action beneath a primary CTA exposes no unavailable variant in this system |
| loading | not-applicable | The action hands off to the purchase flow and carries no loading presentation of its own |
| error | not-applicable | The action navigates rather than presenting validation failure |
| success | not-applicable | The action navigates rather than presenting completion feedback |

### Header Nav Item

- Primitive type: tab
- Kind: interactive
- Background: transparent
- Text: `#1e1919`
- Padding: 16px 12px
- Font: 16px / 400 / Atlas Grotesk
- Use: "Products", "Solutions", "Enterprise", "Pricing" in the 72px header

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Live computed treatment in the global header |
| hover | applicable | Pointer-web header item; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A tab-typed header item can be unavailable; visual treatment omitted |
| loading | not-applicable | Opening a mega-menu panel carries no loading presentation of its own |
| error | not-applicable | Menu opening does not present validation failure |
| success | not-applicable | Menu opening does not present completion feedback |

### Mega-menu Product Card

- Primitive type: card
- Kind: interactive — the source records full-card hit areas for these entries
- Anatomy: product title plus a one-line muted description in `rgba(82,74,62,0.82)`
- Background: transparent
- Text: `#1e1919`
- Radius: 12px
- Padding: 16px
- Height: 92px
- Font: 16px / Atlas Grotesk (title)
- Use: product entries (Dropbox, Replay, Sign, Dash, DocSend) inside the nav dropdown

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Live computed treatment in the mega-menu |
| hover | applicable | Pointer-web hit area; visual treatment omitted |
| focus-visible | applicable | Interactive entry; visual treatment omitted |
| disabled | not-applicable | A product entry in the menu exposes no unavailable variant in this system |
| loading | not-applicable | The entry navigates to a product surface and carries no loading presentation of its own |
| error | not-applicable | Navigation does not present validation failure |
| success | not-applicable | Navigation does not present completion feedback |

### Footer Link

- Primitive type: listItem
- Kind: interactive
- Background: `#1e1919`
- Text: `#f7f5f2`
- Font: 14px / 400 / Atlas Grotesk
- Use: footer navigation links on the graphite band

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Live computed treatment on the graphite footer band |
| hover | applicable | Pointer-web navigation link; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | not-applicable | A footer navigation link exposes no unavailable variant in this system |
| loading | not-applicable | The link navigates and carries no loading presentation of its own |
| error | not-applicable | Navigation does not present validation failure |
| success | not-applicable | Navigation does not present completion feedback |

### Sand Surface Card

- Primitive type: card
- Interaction kind and applicability map: omitted. Treating the record as establishing a surface treatment rather than an interactive role, and therefore leaving the map out instead of settling it, is a derived editorial implementation inference from the verified surfaces; it is not Dropbox-authored or a separately published UI specification.
- Background: `#eee9e2`
- Text: `#1e1919`
- Radius: 12px
- Use: warm tinted card alternating with white panels on the coconut canvas

### Graphite Band

- Primitive type and interaction kind: omitted. Treating the record as establishing a surface treatment rather than an interactive role, and therefore leaving both out instead of settling them, is a derived editorial implementation inference from the verified surfaces; it is not Dropbox-authored or a separately published UI specification.
- Background: `#1e1919`
- Text: `#f7f5f2`
- Use: full-width dark sections ("Security never comes second") that flip the palette

### Source-stated state treatments

The state table below belongs to neither of the two evidence domains this contract names — neither the official brand guidelines nor the live marketing and pricing inspect: it applies marketing-surface colors and geometry to product file-management situations, and no capture of a Dropbox product screen stands behind it. It is carried whole because it is contract content, and it carries this class with it — the treatments below are a derived editorial implementation inference from the verified surfaces; they are not Dropbox-authored or a separately published UI specification, and they are not live observations of a Dropbox product screen. The applicability tables above are judged by control role and do not draw their treatments from this table.

| State | Treatment |
|---|---|
| **Empty (no files yet)** | Coconut (`#f7f5f2`) canvas, one Graphite (`#1e1919`) sentence in Atlas Grotesk explaining the folder is empty, one blue (`#0061fe`) CTA to upload or create. Friendly, zero clutter. |
| **Empty (search, no results)** | Muted taupe (`#716b61`) single line stating no matches, with a plain-language suggestion to adjust the query. No dead ends — always a next action. |
| **Loading (page / list)** | Flat skeleton blocks in sand (`#eee9e2`) on the coconut canvas at final dimensions, 12px radius. No shadow shimmer — flat pulse consistent with the shadowless system. |
| **Loading (file operation)** | Inline progress on the affected row; surrounding content stays interactive. Motion gives "instant feedback" that "echoes physical properties." |
| **Error (sync/upload failed)** | Inline message in plain words: what failed, why, and the retry action. Human register — no error codes without translation. |
| **Error (form validation)** | Field-level note below the input describing what a valid value looks like, not just "Required". |
| **Success (action completed)** | Brief inline confirmation in the human voice ("It's that simple :)" register), auto-dismissing; the changed row itself shows the new state. |
| **Skeleton** | Sand `#eee9e2` blocks, 12px radius, flat pulse at final dimensions. |
| **Disabled** | Reduced-opacity blue rather than grey for primary actions — the brand read survives; labels drop to muted taupe. |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Measured structure from the marketing and pricing inspect: a 72px sticky global header on the coconut canvas; a two-column hero with headline and CTAs left, product visual right; feature sections alternating coconut (`#f7f5f2`), white, sand (`#eee9e2`), and graphite (`#1e1919`) full-width bands; mega-menu dropdowns arranging 92px, 12px-radius product cards in a grid; and pricing plan columns carrying repeated `#0061fe` CTAs, one per plan, as `#ffffff` panels on the `#f7f5f2` canvas at 12px radius, flat.

Reading that rhythm as editorial air, as a light/dark band cadence in which color shifts rather than dividers mark section boundaries, and as flat segmentation where grouping is communicated by surface tint and the 2px border language, is a derived editorial implementation inference from the verified surfaces; it is not Dropbox-authored or a separately published UI specification. The pricing-panel description in the paragraph above is carried from the source's own worked example rather than from a component record, and relocating it here is the same class of inference.

Responsive contract as the source states it:

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero stacks, CTAs go full-width |
| Tablet | 640–1024px | 2-column grids, condensed nav |
| Desktop | 1024–1440px | Full layout, mega-menu nav, two-column hero |

Touch targets: marketing CTAs at 55px height (71px hero variant); header items at 72px row height with 16px 12px padding; mega-menu cards at 92px height with full-card hit areas.

Collapsing strategy: the 40px Sharp Grotesk hero headline scales down with weight 500 maintained; the mega-menu dropdown grid collapses into accordion sheets; band sections keep the full-width tint treatment and reduce internal padding; pricing plan columns stack vertically with repeated `#0061fe` CTAs. Cards and media keep the 12px radius across breakpoints.

The measured values in this section come from a 1440×900 desktop inspect. The source's ledger ties live inspect to measured token values and records no separate viewport-resize capture behind the collapsing behaviors and the tablet/mobile rows, so treating those rows as the responsive contract is a derived editorial implementation inference from the verified surfaces; it is not Dropbox-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Voice is governed by the four first-party pillars quoted in Experience — Simple, Helpful, Human, Magic — under the rule "no matter what we're saying, or where, we always sound like Dropbox." Summarising that as a voice that is simple, human, and quietly witty, and every Tone descriptor in the table below, are a derived editorial implementation inference from the verified surfaces; they are not Dropbox-authored or a separately published UI specification. The quoted strings in the table's right-hand column are published copy and are reproduced as issued.

| Context | Tone |
|---|---|
| Hero headlines | Plainspoken with a twist of wordplay. "Get to work, with a lot less work." |
| Product descriptions | Verb-first, concrete. "Store, share, and access files across devices." |
| CTAs | Friendly imperatives, zero pressure. "Try Dropbox free", "Get started", "Learn more". |
| Social proof | Numbers stated plainly. "Join the over 700 million registered users who trust Dropbox." |
| Security / trust copy | Calm and declarative. "Security never comes second." |
| Help / onboarding | Step-by-step, anticipatory — tell them what's coming, then how to get there. |

Voice samples, from the official brand guidelines and the live homepage:

- "Get to work, with a lot less work." — live homepage H1 and cited example on `brand.dropbox.com/voice-and-tone`, verified live 2026-06-11.
- "Go from idea to done with Dropbox." — `brand.dropbox.com/voice-and-tone` example, verified 2026-06-11.
- "These aren't just your files. They are pieces of your life." — `brand.dropbox.com/voice-and-tone` example, verified 2026-06-11.

**Forbidden register**: jargon, enterprise-speak, hype superlatives, pressure tactics. Wit is "a wink, rather than throwing confetti in their face" — the phrase is published as a motion principle; extending the same restraint to words is a derived editorial implementation inference from the verified surfaces, and it is not Dropbox-authored or a separately published UI specification.

Product and label strings carried as issued: "Try Dropbox free", "Get started", "Try for free", "Buy now", "or buy now", "Learn more"; nav items "Products", "Solutions", "Enterprise", "Pricing"; product names Dropbox, Replay, Sign, Dash, DocSend, Reclaim.ai. Reproduce them byte for byte; do not translate, re-case, or paraphrase them. This reproduction rule is a derived editorial implementation inference from the verified surfaces; it is not Dropbox-authored or a separately published UI specification.

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=evidence-backed-reconstruction lang=en -->
### Authority

This document is an evidence-backed reconstruction, not authority for an unrelated target project.
<!-- design-md:claim-end -->

The reconstruction is built from Dropbox's published brand guidelines and the captured marketing and pricing surfaces; it is not a copy of Dropbox's own design documentation, and it does not stand in for one. This boundary does not replace the qualification adjacent to each derived reading elsewhere in the document.

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

These are values the source names without settling, not permissions to invent. Selecting these three and no others is a derived editorial implementation inference from the verified surfaces; it is not Dropbox-authored or a separately published UI specification.

- Values for the further accent names the guidelines publish — Pink, Rust, Gold, Vivid Vargas, Canopy, Lime, Ocean, Zen, Navy, Cloud, Plum, Orchid — and for the 20-step grey scale. Pink, Rust, and Gold are a narrower case: the guideline domain's color page publishes swatch values for all three. They are named here without a value because the source names them without one, not because the published swatch is unknown.
- The exact curve behind the source's `ease-exit` token, which is carried as a name only.
- Visual treatments for the hover and focus moments the motion scale names, and for the disabled presentation the state table describes.
