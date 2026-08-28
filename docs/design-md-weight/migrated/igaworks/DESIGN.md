# IGAWorks Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

IGAWorks (아이지에이웍스) is Korea's data-and-AI marketing company, and this contract covers the two first-party web surfaces the source inspected for tokens on 2026-07-02: the corporate homepage at `https://www.igaworks.com/` and the Solutions page at `https://www.igaworks.com/solutions`. The official company blog at `https://www.igaworksblog.com/` is a named brand-owned source; it does not supply the computed interface tokens below. Every value stays attached to the surface that established it. Reading IGAWorks as Korea's data-and-AI marketing company, reading those two inspected pages as this contract's token surfaces, keeping values attached to the surface that established them, and treating the company blog as a named source that does not supply computed interface tokens, are derived editorial implementation inferences from the verified surfaces; they are not IGAWorks-authored or a separately published UI specification.

The captured corporate layer reads, in the source's wording, exactly like the tagline stamped across the hero: *"Built on Data. Driven by AI."* The aesthetic is confident monochrome — a pure white canvas (`#ffffff`) carrying near-black ink headings (`#1a1d23`) and quiet slate body copy (`#373f49`), with almost no chrome, no gradients, and no drop shadows. The typographic personality is entirely `Pretendard Variable`, pushed to an extreme weight range. The home hero runs at a massive **88px / weight 900**. Section headings step down to 36px / 700 and 28px / 600, card titles to 24px / 700, while body and navigation settle into a calm 16px / 400 with 1.5 line-height. There is no secondary display font and no serif. Color is deployed with deliberate scarcity. The primary "action" is not a saturated brand hue but the dark ink itself — the header CTA (문의하기) is a `#1a1d23` block with white text and a soft 12px radius. The one genuinely chromatic action, the newsletter subscribe button, is a clean royal blue (`#3464f4`). Beyond that, red (`#ef4343`) and green (`#17cf63`) appear only as data and status accents — a direct echo of the red / yellow / blue tricolor dots that sit above the "iGA" logotype. Separation is done with flat cool-grey surfaces (`#f2f5f8`, `#f4f4f6`) and hairline `#e5e7eb` borders rather than elevation; live inspection found `box-shadow: none` across the hero, nav, cards, and CTAs. The hex values, family name, sizes, weights, labels, and `box-shadow: none` in this paragraph are recorded. Reading the register as the visual language of a serious infrastructure company that wants to look like the neutral, trustworthy substrate that thousands of brands build on top of, not a flashy consumer app; reading the restraint as the message — the data is the color; reading the single-font discipline as reinforcing an engineered, systematic feel; and reading the result as a flat, fast, data-first system that feels like the dashboard behind the marketing, not the marketing itself, are derived editorial implementation inferences from the verified surfaces; they are not IGAWorks-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. IGAWorks (아이지에이웍스) is a Korean marketing-technology and data company that has grown from mobile advertising attribution into an integrated **data-and-AI** platform. Its founding problem was the opacity of the mobile marketing ecosystem: advertisers and app publishers had no trustworthy, independent way to measure performance, understand the market, and act on it. IGAWorks' answer was to build the measurement and data infrastructure first — the attribution, the market index, the audience data — and then layer AI-driven action and creative on top of that foundation. The site's own three-act structure spells this out: "01 Data: The AI Moat", "02 The AI-Synthetic Audience", "03 AI Solutions, Built on the Data." The product portfolio reflects that data-first logic — a spread of solutions across **Data Infrastructure**, **AI Action & Creative**, and **Media & Network**, including the widely-cited MobileIndex mobile-market intelligence service. The company frames its own advantage as the accumulated data itself: the "AI Moat" language positions proprietary data as the durable competitive edge that makes the AI layer credible. What IGAWorks refuses, visible in its design: the flashy, gradient-heavy, shadow-stacked look of consumer marketing sites, and any aesthetic that would make it read as a single-product app rather than neutral infrastructure. What it embraces: a flat, monochrome, engineered surface; one typeface flexed across a huge weight range; dark ink as the dominant read; and color used with scientific scarcity — a single blue action, and red/green reserved for data and status. The design says *we are the data layer*, not *look at us*. The founding problem, the three-act labels, the portfolio names, MobileIndex, the "AI Moat" language, and the refuse/embrace pairing including *we are the data layer* / *look at us* are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-portfolio narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not IGAWorks-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=5 lang=en -->
### Primary tasks

Selecting these five as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not IGAWorks-authored or a separately published UI specification. Each names a label or surface the source records. They do not come from the source's persona section.

- Read the home hero "Built on Data. Driven by AI."
- Open the header primary CTA `문의하기`.
- Scan `Solutions by IGAWorks` and open a solution-card `바로가기`.
- Subscribe from the newsletter row (`구독`).
- Open a destination from the top nav — Solution / Data / Culture / Blog.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as fictional archetypes informed by publicly observable IGAWorks user segments (app marketers, growth teams, market analysts, agency planners), not individual people, so those biographies are dropped rather than promoted, and no name, age, city, or occupation is carried into this document or its sidecar. What the source independently records is the audience grouping those archetypes were said to be informed by: app marketers, growth teams, market analysts, agency planners. Reading those groups as this product's audience is a derived editorial implementation inference from the verified surfaces; it is not IGAWorks-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are measured; the groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces — they are not IGAWorks-authored or a separately published UI specification.

- One typeface, extreme weight range — `Pretendard Variable` from weight 900 (88px hero) down to 400 body
- Dark ink (`#1a1d23`) as the primary action color, not a saturated brand hue — the CTA is near-black on white
- Single blue accent (`#3464f4`) reserved for the newsletter subscribe action
- Tricolor data accents — red (`#ef4343`) and green (`#17cf63`) echoing the logo's red/yellow/blue dots
- Near-black ink (`#1a1d23`) for headings instead of pure black; slate (`#373f49`) for body
- Flat, shadowless depth — cool-grey `#f2f5f8` / `#f4f4f6` surfaces and `#e5e7eb` hairlines do the separating
- Soft-but-restrained radius — 12px on CTAs and cards, 8px on inputs and the subscribe button
- Cool-grey neutral ladder (`#1e293b` → `#4f5864` → `#4b5563`) for text hierarchy

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not IGAWorks-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Data before action.** The whole narrative is "Built on Data" first, "Driven by AI" second. *UI implication:* lead with evidence and numbers; let the action (the CTA, the blue button) be the quiet consequence, not the loud opener.
2. **Neutral infrastructure, not a pitch.** IGAWorks wants to read as the substrate other brands build on. *UI implication:* monochrome canvas, restrained color, no hard-sell chrome — trustworthy over flashy.
3. **One action color.** The blue accent (`#3464f4`) marks a single moment. *UI implication:* keep the saturated blue for the primary interactive action so the next step is never ambiguous.
4. **Flat and fast.** Engineered clarity beats decorative depth. *UI implication:* no shadows; separate with tint and hairlines; keep the page light and scannable like a dashboard.
5. **Weight is the hierarchy.** With one typeface, weight does the work. *UI implication:* weight 900 for the hero, 700 for headings, 400 for body — never introduce a second face to signal importance.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not IGAWorks-authored or a separately published UI specification.

- Use `Pretendard Variable` for every text element — one family, weight 900 down to 400
- Use dark ink (`#1a1d23`) as the primary action color and heading color
- Reserve the blue accent (`#3464f4`) for the single subscribe/action moment
- Use near-black ink (`#1a1d23`) for headings instead of pure black; slate (`#373f49`) for body
- Separate sections with flat tinted surfaces (`#f2f5f8` / `#f4f4f6`) and `#e5e7eb` hairlines, not shadows
- Keep radius restrained — 12px on CTAs and cards, 8px on inputs
- Let red (`#ef4343`) and green (`#17cf63`) appear only as data/status accents, echoing the tricolor logo dots
- Give the hero maximum weight (900) so it is the single loudest element per screen

### Avoid

The source states these eight as its Don't list; they are kept as its rules, reasons included. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not IGAWorks-authored or a separately published UI specification.

- Use drop shadows for elevation — IGAWorks is a flat, shadow-free system
- Introduce a saturated brand hue as the primary action — the primary action is dark ink
- Spread the blue accent (`#3464f4`) across many elements — it marks one action
- Use pure black (`#000000`) for headings — reserve near-black ink `#1a1d23`
- Add a second display or serif typeface — hierarchy comes from Pretendard weight alone
- Use heavy or colored borders — separation is a `#e5e7eb` hairline
- Turn the data-accent red/green into decorative brand color — keep them for data and status
- Set the hero in a light weight — it is always weight 900

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Where a line also characterizes a value — ink as the dominant action, blue as the single saturated subscribe moment, red/green as data and status echoing the tricolor dots, hairline as the primary separation device — that characterization is a derived editorial implementation inference from the verified surfaces; it is not IGAWorks-authored or a separately published UI specification.

Primary

- **Corporate Ink** (`#1a1d23`): The primary brand color — the "iGA" logotype color, the hero H1, and the primary CTA background. A near-black warm charcoal used as the dominant "action" and heading read across the whole site. Token-set key `tokens.colors.primary`.
- **Pure White** (`#ffffff`): Page background, card surfaces, and the text color on the dark ink CTA (`on-primary`). Token-set key `tokens.colors.canvas`.

Accents

- **Action Blue** (`#3464f4`): The single saturated action color, reserved for the newsletter subscribe button (구독). A clean royal blue that matches the blue dot of the logo mark. Token-set key `tokens.colors.accent-blue`.
- **Data Red** (`#ef4343`): Data-visualization and alert accent, usually as a 10%-tint pill (`rgba(239, 67, 67, 0.1)`) with red text. Echoes the red logo dot. Token-set key `tokens.colors.accent-red`.
- **Data Green** (`#17cf63`): Positive / growth data accent for metrics and status. Echoes the "up" direction in data displays. Token-set key `tokens.colors.accent-green`.

Text hierarchy

- **Corporate Ink** (`#1a1d23`): Headings, hero, strong labels, active nav. Same hex as `tokens.colors.primary`; the heading-read use stays on that key.
- **Slate Heading** (`#1e293b`): Solution category subheadings (e.g. "Data Infrastructure"). Token-set key `tokens.colors.slate`.
- **Body Slate** (`#373f49`): Standard body copy and descriptions — the document default text color. Token-set key `tokens.colors.body`.
- **Muted Slate** (`#4f5864`): Inactive navigation links and secondary labels. Token-set key `tokens.colors.muted`.
- **Muted Alt** (`#4b5563`): Tertiary captions and fine print. Token-set key `tokens.colors.muted-alt`.

Surface and borders

- **Surface Grey** (`#f2f5f8`): Cool-grey tinted surface for data/stat cards and segmented blocks. Token-set key `tokens.colors.surface`.
- **Surface Alt** (`#f4f4f6`): A warmer secondary grey for alternating bands. Token-set key `tokens.colors.surface-alt`.
- **Hairline** (`#e5e7eb`): Thin borders, card outlines, and dividers — the primary separation device in a shadow-free system. Token-set key `tokens.colors.hairline`.
- **On-Primary** (`#ffffff`): Foreground text on the dark ink CTA. Token-set key `tokens.colors.on-primary`. Same hex as Canvas White; the keys stay unmerged. Keeping `tokens.colors.canvas` and `tokens.colors.on-primary` as separate keys that share a hex is a derived editorial implementation inference from the verified surfaces; it is not IGAWorks-authored or a separately published UI specification.

### Spacing

Unitless token-set steps from `tokens.spacing`: `xs 4` · `sm 8` · `md 12` · `base 16` · `lg 20` · `xl 24` · `xxl 40` · `section 64`. The source restates the same scale in px as 4px, 8px, 12px, 16px, 20px, 24px, 40px, 64px, with a ~4px base unit. Button padding lands at 10px 24px (primary) and 10px 20px (secondary/subscribe). `tokens.spacing.sm: 8` is not `tokens.rounded.sm: 8`. `tokens.spacing.md: 12` is not `tokens.rounded.md: 12`. `tokens.spacing.base: 16` is not a type size. `tokens.spacing.lg: 20` is not the 20px half of `10px 20px`. `tokens.spacing.xl: 24` is not the 24px half of `10px 24px`. Keeping those key paths unmerged is a derived editorial implementation inference from the verified surfaces; it is not IGAWorks-authored or a separately published UI specification.

### Shape

Unitless token-set steps from `tokens.rounded`: `sm 8` · `md 12` · `full 9999`.

The source's named radius uses, kept on their own rows:

- Small (8px): inputs, the blue subscribe button — `tokens.rounded.sm`
- Medium (12px): primary CTA, outline buttons, cards — the workhorse radius — `tokens.rounded.md`
- Full (9999px): accent pills / badges — `tokens.rounded.full: 9999`

`tokens.rounded.full: 9999` stays the unitless full step. `tokens.rounded.sm: 8` is not `tokens.spacing.sm: 8`. `tokens.rounded.md: 12` is not `tokens.spacing.md: 12`. Keeping those paths unmerged is a derived editorial implementation inference from the verified surfaces; it is not IGAWorks-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, hero, headings, most surfaces |
| Tint (Level 1) | `#f2f5f8` / `#f4f4f6` background shift | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #e5e7eb` border | White card outlines, dividers |

Token-set path `tokens.shadow.none`: `none`. Live inspection across the homepage and solutions page found `box-shadow: none` on the hero, nav, CTAs, cards, and inputs. Depth and grouping are communicated entirely through flat tinted surfaces (`#f2f5f8`, `#f4f4f6`) and thin `#e5e7eb` hairlines. When emphasis is needed, the system reaches for the dark ink (`#1a1d23`) or the single blue accent (`#3464f4`), never elevation. Reading that as a deliberate modern-flat choice that keeps the data-marketing UI feeling clean, fast, and engineered, and that avoids the heavy card-stack look of legacy corporate sites, is a derived editorial implementation inference from the verified surfaces; it is not IGAWorks-authored or a separately published UI specification.

### Motion

The source attributes its token-level claims to a live inspection of computed color, type, radius, and shadow on `https://www.igaworks.com/` and `https://www.igaworks.com/solutions`. The motion contract below sits outside that attribution: the source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to the easing curves. The durations, easing roles, and motion rules below are therefore a derived editorial implementation inference from the verified surfaces; they are not IGAWorks-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 200ms | Card / section reveal, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

Easing roles — three roles with declared uses. The specific curve values the source lists (`cubic-bezier(0.2, 0.6, 0.25, 1)`, `cubic-bezier(0.4, 0.0, 1, 1)`, `cubic-bezier(0.25, 0.1, 0.25, 1)`) are not traceable to IGAWorks-computed samples, so the curves are omitted here and only the roles and their uses are kept:

| Token | Use |
|---|---|
| `ease-enter` | Arriving — cards, sections, sheets |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.

Motion rules, as the source states them:

- Motion is functional and quiet — consistent with the flat, engineered aesthetic.
- Cards and solution blocks fade-in from below at `motion-standard / ease-enter`; the oversized hero may reveal once on load at `motion-slow`.
- Buttons respond to press with a subtle opacity/scale shift, never a bounce.
- A data-and-infrastructure brand signals steadiness, not playfulness — no spring, no overshoot.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the interface remains fully functional.

The "steadiness, not playfulness" reading is the source's own motion rule; treating it as a current-surface instruction is already covered by the motion-section qualifier above.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The two inspected surfaces and the company blog describe the product and the data-and-AI portfolio. They do not publish a universal current typography token or a separately issued type specimen. That "no published type token" reading is a derived editorial implementation inference from the verified surfaces; it is not IGAWorks-authored or a separately published UI specification. |
| Live computed surface-use | Both inspected surfaces compute visible text as `Pretendard Variable`. |
| Official distributed asset | No IGAWorks-exclusive downloadable font package was verified in the source. That absence-of-exclusive-package reading is a derived editorial implementation inference from the verified surfaces; it is not IGAWorks-authored or a separately published UI specification. |
| Declared-only | The source records `Pretendard` as the named fallback after `Pretendard Variable`, then system sans. They are fallbacks, not a second brand face. Classing those fallback members as not the brand face is a derived editorial implementation inference from the verified surfaces; it is not IGAWorks-authored or a separately published UI specification. |
| License | The source records Pretendard Variable as the de-facto Korean product typeface. This record does not establish an IGAWorks-issued font-license notice. That upstream-versus-grant reading is a derived editorial implementation inference from the verified surfaces; it is not IGAWorks-authored or a separately published UI specification. |
| Outside these captures | Typography on surfaces the source did not inspect stays outside these two captures. Reading that typography as outside this contract is a derived editorial implementation inference from the verified surfaces; it is not IGAWorks-authored or a separately published UI specification. |

### Family

- **Current visible UI family:** `Pretendard Variable`, falling back to `Pretendard` then system sans. Token-set path `tokens.typography.family.sans` / `tokens.typography.family.fallback`.
- There is no secondary display or monospace face; hierarchy comes entirely from weight and size.
- Do not replace Pretendard Variable with a system substitute. A fallback member of the stack is never presented as the brand face. That single-family restatement and that fallback prohibition are a derived editorial implementation inference from the verified surfaces; they are not IGAWorks-authored or a separately published UI specification.

### Type roles

| Role | Font | Size | Weight | Line height | Token-set path | Token-set use |
|---|---|---:|---:|---:|---|---|
| Home Hero | Pretendard Variable | 88px (5.50rem) | 900 | ~1.1 | `tokens.typography.display-hero` | Home hero H1 (Built on Data. Driven by AI.) |
| Page H1 | Pretendard Variable | 56px (3.50rem) | 700 | ~1.2 | `tokens.typography.display` | Page H1 (Solutions by IGAWorks) |
| Section Heading | Pretendard Variable | 36px (2.25rem) | 700 | ~1.3 | `tokens.typography.section` | Section headings |
| Category Head | Pretendard Variable | 28px (1.75rem) | 600 | ~1.2 | `tokens.typography.category` | Solution category heads (Data Infrastructure) |
| Card Title | Pretendard Variable | 24px (1.50rem) | 700 | ~1.4 | `tokens.typography.card-title` | Solution card titles |
| Sub-head | Pretendard Variable | 18px (1.13rem) | 700 | normal | `tokens.typography.subhead` | Small block heads (newsletter) |
| Body | Pretendard Variable | 16px (1.00rem) | 400 | 1.5 (24px) | `tokens.typography.body` | Standard reading text, Pretendard |
| Nav Link | Pretendard Variable | 16px (1.00rem) | 400 | normal | `tokens.typography.nav` | Top nav links |
| Button | Pretendard Variable | 15px (0.94rem) | 500 | normal | `tokens.typography.button` | Primary CTA label |
| Button Small | Pretendard Variable | 14px (0.88rem) | 500 | normal | `tokens.typography.button-sm` | Secondary / subscribe button label |

YAML line heights stay unitless ratios where the token set records them: `1.1` on Home Hero, `1.2` on Page H1 and Category Head, `1.3` on Section Heading, `1.4` on Card Title, `1.5` on Body. The tilde forms (`~1.1`, `~1.2`, `~1.3`, `~1.4`) and the parenthetical `24px` are the source table's own spellings; they do not replace the unitless token-set figures. Sub-head, Nav Link, Button, and Button Small have no `lineHeight` key in the token set; the source table writes `normal` there, and no ratio is invented for those four rows. Keeping the ratios, the tilde forms, and the `normal` cells on separate readings, rather than filling the empty YAML cells, is a derived editorial implementation inference from the verified surfaces; it is not IGAWorks-authored or a separately published UI specification.

Type rules the source states:

- **One family, full weight range**: `Pretendard Variable` carries everything; the jump from weight 900 (hero) to 400 (body) is the system's primary hierarchy signal.
- **Black hero, calm body**: the 88px / 900 hero is the loudest element on the site; everything below it deliberately steps down in both size and weight.
- **Medium (500) for interactive labels**: buttons and links use weight 500 to feel tappable without competing with the 700–900 headings.
- **Hangul-first body sizing**: body sits at 16px with a generous 1.5 line-height (24px) for dense Korean legibility in an information-heavy layout.

The four rule titles and the hierarchy / loudest-element / tappable / hangul-legibility readings are a derived editorial implementation inference from the verified surfaces; they are not IGAWorks-authored or a separately published UI specification. The sizes, weights, and ratios are recorded.

### Assets

- Logo treatment the source frontmatter records: `logo.type: favicon` and `logo.slug` `https://www.google.com/s2/favicons?domain=igaworks.com&sz=128`. That slug is an identity pointer through a third-party favicon service, not an IGAWorks-hosted brand file URL.
- The source records the "iGA" wordmark in dark ink (`#1a1d23`) with three dots above — red (`#ef4343`), yellow, blue (`#3464f4`) — as the tricolor accent motif. No yellow hex is recorded.
- Product / solution imagery carries no shadow at any size, consistent with the flat system.

Reading the favicon-service URL as an identity pointer rather than a hosted brand file, and reading product imagery as first-party catalog content that must not be replaced with invented decoration, is a derived editorial implementation inference from the verified surfaces; it is not IGAWorks-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### How applicability is decided here

The source declares each token-set component with a primitive type (`button`, `input`, `card`, `tab`, `badge`) and a value set; those types are preserved per component. Applicability below is judged by each control's role, never by whether a visual treatment for that state happens to be recorded: where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. `not-applicable` is used only where the control's role makes the state meaningless — a destination CTA that commits no operation in place, a nav item that only selects a destination, or a display element with no action at all — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a container at all, its kind and applicability map are omitted rather than decided. A `Primitive type` line is attached only when the source YAML records that type on that component.

The source records no `focus-visible` treatment. Generic focus is not invented. `focus-visible` stays applicable on interactive controls; the visual treatment is omitted.

The role-based decision procedure above, every interactive-kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; they are not IGAWorks-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary CTA (Ink)

- Role: destination control that opens the header inquiry action
- Primitive type: `button` · Kind: interactive
- Domain: header on `https://www.igaworks.com/`
- Background: `#1a1d23`
- Text: `#ffffff`
- Radius: 12px
- Padding: 10px 24px
- Height: 43px
- Font: 15px Pretendard weight 500
- Token-set font record: `15px / 500 Pretendard`
- Token-set use: `Header primary CTA (문의하기) — dark ink action`
- Published label: `문의하기`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | The surface contract fades the ink action rather than switching it to a foreign grey |
| loading | not-applicable | This control opens `문의하기`; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | This control sends the reader to a destination; the destination, not the button, reports whether that request failed |
| success | not-applicable | Same role reason: reaching the inquiry destination is not an operation with a success result on this button |

### Secondary Link (Outline)

- Role: in-card destination link on solution cards
- Primitive type: `button` · Kind: interactive
- Domain: solution cards
- Background: `#ffffff`
- Text: `#1a1d23`
- Border: 1px solid `#e5e7eb`
- Radius: 12px
- Padding: 10px 20px
- Height: 43px
- Font: 14px Pretendard weight 500
- Token-set font record: `14px / 500 Pretendard`
- Token-set use: `Secondary link button (바로가기) on solution cards`
- Published label: `바로가기`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination link whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens `바로가기`; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this button, reports failure |
| success | not-applicable | Same role reason: reaching the solution destination is not an operation this button reports as success |

### Subscribe (Blue Accent)

- Role: newsletter subscribe commit
- Primitive type: `button` · Kind: interactive
- Domain: newsletter row
- Background: `#3464f4`
- Text: `#ffffff`
- Radius: 8px
- Padding: 10px 20px
- Height: 41px
- Font: 14px Pretendard weight 500
- Token-set font record: `14px / 500 Pretendard`
- Token-set use: `Newsletter subscribe (구독) — the single blue accent action`
- Published label: `구독`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | The surface contract fades the blue action rather than switching it to a foreign grey |
| loading | applicable | This control commits a subscribe; the surface contract records an in-place refresh with a subtle blue (`#3464f4`) progress indicator |
| error | applicable | A subscribe can fail; the surface contract records an inline Corporate Ink explanation and a tinted red pill on the failing item |
| success | applicable | A subscribe can complete; the surface contract records a brief inline confirmation with green (`#17cf63`) marking the positive state |

### Newsletter Field

- Role: newsletter email capture, paired inline with the blue subscribe button
- Primitive type: `input` · Kind: interactive
- Background: `#ffffff`
- Text: `#1a1d23`
- Border: 1px solid `#e5e7eb`
- Radius: 8px
- Padding: 10px 16px
- Height: 43px
- Font: 15px Pretendard weight 400
- Token-set font record: `15px / 400 Pretendard`
- Token-set use: `Newsletter email field`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | A field whose availability can lapse; visual treatment omitted |
| loading | not-applicable | The field accepts an address; it does not commit a fetch whose in-progress state it reports on itself |
| error | applicable | The surface contract records field-level validation below the input describing what is valid, not just "필수" |
| success | not-applicable | The field does not complete the subscribe on itself; the paired `구독` button does |

### White Solution Card

- Role: solution / feature card with hairline outline and no shadow
- Primitive type: `card`
- Background: `#ffffff`
- Text: `#1a1d23`
- Border: 1px solid `#e5e7eb`
- Radius: 12px
- Token-set use: `White solution / feature card, hairline outline, no shadow`

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld.

### Tinted Data Card

- Role: cool-grey data/stat card sitting on the white canvas
- Primitive type: `card`
- Background: `#f2f5f8`
- Text: `#1a1d23`
- Radius: 12px
- Token-set use: `Tinted cool-grey data/stat card`

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld.

### Data Accent Pill

- Role: data / alert accent tag
- Primitive type: `badge`
- Kind: non-interactive — a tinted red label, not a commit control
- Background: `rgba(239, 67, 67, 0.1)`
- Text: `#ef4343`
- Radius: 9999px (full)
- Font: 13px Pretendard weight 500
- Token-set font record: `13px / 500 Pretendard`
- Token-set use: `Data / alert accent pill (tinted red)`

### Top Nav

- Role: top horizontal nav item
- Primitive type: `tab` · Kind: interactive
- Domain: header
- Background: `#ffffff`
- Text: `#4f5864` (inactive)
- Active: ink `#1a1d23` text on the current item
- Font: 16px Pretendard weight 400
- Token-set font record: `16px / 400 Pretendard`
- Token-set active: `text #1a1d23`
- Token-set use: `Top nav items (Solution / Data / Culture / Blog)`
- Published labels: `Solution`, `Data`, `Culture`, `Blog`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable item; visual treatment omitted |
| disabled | applicable | A destination item whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This item is a destination tab; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination tab; the destination, not the item, reports failure |
| success | not-applicable | Same role reason: reaching Solution, Data, Culture, or Blog is not an operation with a success result |

### State record

The source's state contract, preserved with its values and copy. The source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to this state section; the treatments below are therefore a derived editorial implementation inference from the verified surfaces rather than measured per-control observations, and they are not IGAWorks-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (no data / no results)** | White canvas. Single Corporate Ink (`#1a1d23`) line at body size explaining there is nothing to show, with one ink CTA to adjust or start. No illustration clutter. |
| **Empty (saved / list, none yet)** | Muted Slate (`#4f5864`) single line stating nothing saved yet, plus a path back. Calm and honest. |
| **Loading (data fetch)** | Skeleton blocks on `#f2f5f8` tinted surface at final dimensions, 12px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (in-place refresh)** | Subtle blue (`#3464f4`) progress indicator; previous values stay visible during refresh. |
| **Error (request failed)** | Inline message in Corporate Ink with a plain-language explanation and a retry. A tinted red (`rgba(239, 67, 67, 0.1)`) pill flags the failing item; never a bare "오류". |
| **Error (form validation)** | Field-level message below the input describing what is valid, not just "필수". |
| **Success (submitted / subscribed)** | Brief inline confirmation in a calm tone; next step linked immediately below. Green (`#17cf63`) marks the positive state. No celebratory emoji. |
| **Skeleton** | `#f2f5f8` blocks at final dimensions, 12px radius, flat pulse. |
| **Disabled** | Muted Slate (`#4b5563`) text on reduced-opacity surface; the ink/blue actions fade rather than switch to a foreign grey. |

These rows describe empty, loading, error, success, skeleton, and disabled treatments the source wrote at system level. They are not attached as visual treatments to the destination controls above. The subscribe button's loading / error / success rows above cite the matching system-level treatments because that control commits a subscribe. That non-attachment reading, and the subscribe-button attachment, are derived editorial implementation inferences from the verified surfaces; they are not IGAWorks-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- Centered content column with the oversized hero (88px / 900) as the anchor
- Solution offerings arranged as a grid of white cards, each with a hairline outline and a "바로가기" link button
- Home sections alternate between white (`#ffffff`) and faint tinted (`#f2f5f8` / `#f4f4f6`) full-width bands
- Newsletter capture is a single inline row: email field plus the blue subscribe button
- Spacing restated from `tokens.spacing`: 4 / 8 / 12 / 16 / 20 / 24 / 40 / 64
- Shape restated from `tokens.rounded`: small 8 · medium 12 · `full: 9999`

Reading the marketing surface as airy despite being a data company — generous vertical rhythm separates each solution block; reading sections as flat segmentation by background tint and `#e5e7eb` hairlines, never by shadow or heavy borders; and reading the near-black hero and CTA as a single point of maximum contrast with everything else receding into slate and grey, are derived editorial implementation inferences from the verified surfaces; they are not IGAWorks-authored or a separately published UI specification.

Responsive behavior. The source's live inspection was run as a computed-style pass, and its own evidence note attributes token-level claims to that inspection; the breakpoints, collapsing strategy, and the source's reading of the recorded target sizes are stated by the source at system level rather than measured across viewports, so they are a derived editorial implementation inference from the verified surfaces and are not IGAWorks-authored or a separately published UI specification.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single column, hero compresses from 88px, cards stack |
| Tablet | 640-1024px | Moderate padding, 2-up solution cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column solution grid |

Touch targets the source records: Primary CTA at 43px height with 10px 24px padding; Subscribe button at 41px height, paired inline with the 43px email field; nav links spaced within the header for touch.

Collapsing strategy, as the source states it:

- Hero: 88px black headline scales down on mobile, weight 900 maintained
- Solution card grid: multi-column → 2-up → stacked single column
- Tinted / white alternating bands maintain full-width treatment
- Newsletter row: inline field + button → stacked on narrow viewports

Image behavior, as the source states it: product / solution imagery carries no shadow at any size, consistent with the flat system; cards maintain 12px radius across breakpoints.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The source characterizes IGAWorks' voice as **confident, technical, and evidence-first** — an infrastructure company that speaks in capabilities and numbers rather than adjectives. The hero line "Built on Data. Driven by AI." is the register in miniature: two short declarative fragments, English-forward, zero hype punctuation. Korean copy stays equally plain and functional ("솔루션 자세히 보기", "문의하기", "매주 뉴스레터로 인사이트를 받아보세요"). The company positions itself as the neutral data substrate other brands rely on, so the tone is that of a trusted platform, not a pitch. That characterization, that register reading, and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not IGAWorks-authored or a separately published UI specification. The published lines themselves are live surface copy.

| Context | Tone |
|---|---|
| Hero headline | Declarative, English-forward fragments. "Built on Data. Driven by AI." Certain, not loud. |
| Solution labels | Functional, capability-named. "Data Infrastructure", "AI Action & Creative", "Media & Network". |
| CTAs | Direct and low-pressure. "문의하기", "바로가기", "구독". |
| Data/scale claims | Concrete and numeric. "with 4000+ Global Brands". States scope plainly. |
| Newsletter / content | Insight-framed. "매주 뉴스레터로 인사이트를 받아보세요." Positions the brand as a source of intelligence. |

**Voice samples (verbatim from live corporate site):**

- "Built on Data. Driven by AI." — home hero H1 (mission in two fragments).
- "Solutions by IGAWorks" — section / page H1 (portfolio framing).
- "with 4000+ Global Brands" — scale claim H2 (concrete, numeric).

Further published strings the source records on the inspected surfaces, kept byte-exact:

- Built on Data. Driven by AI.
- Solutions by IGAWorks
- Data Infrastructure
- AI Action & Creative
- Media & Network
- 01 Data: The AI Moat
- 02 The AI-Synthetic Audience
- 03 AI Solutions, Built on the Data.
- 문의하기
- 바로가기
- 구독
- 솔루션 자세히 보기
- 매주 뉴스레터로 인사이트를 받아보세요
- with 4000+ Global Brands
- Solution
- Data
- Culture
- Blog
- IGAWorks
- 아이지에이웍스
- MobileIndex
- iGA
- 오류
- 필수

**Forbidden register**: superlative hype ("revolutionary", "world's best"), exclamation-heavy marketing, vague buzzwords with no capability behind them, and any tone that reads as a hard sell rather than a trusted platform. That premise-to-register causal is a derived editorial implementation inference from the verified surfaces; it is not IGAWorks-authored or a separately published UI specification.

Reproduce the Korean strings above byte-exact rather than translating or re-casing them. An English gloss may sit beside a Korean line; it never replaces the line. That byte-exact / gloss-beside rule is a derived editorial implementation inference from the verified surfaces; it is not IGAWorks-authored or a separately published UI specification.

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

These are named values, not permissions to invent. The source records no conflict among its own Tier 1 values. Treating the list as named unresolved values rather than a license to invent is a derived editorial implementation inference from the verified surfaces; it is not IGAWorks-authored or a separately published UI specification.

- **Exact easing curves.** Three easing roles and their uses are established; the curve values are omitted because they are not traceable to IGAWorks-computed samples. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **Full radius step.** `tokens.rounded.full: 9999` is the unitless full step.
- **Hover and focus-visible treatments.** Those visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning.
