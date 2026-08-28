# Heptabase Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Heptabase is a visual note-taking and knowledge-management app built around an infinite whiteboard of cards. This contract covers the first-party web surfaces the source records as Tier 1 on 2026-06-17: the homepage at `https://heptabase.com` and the pricing page at `https://heptabase.com/pricing`. The official Wiki at `https://wiki.heptabase.com` is a named brand-owned source for the mission and founder record; it does not supply the interface tokens below. Every value stays attached to the surface that established it. Keeping values attached to the surface that established them, and treating the Wiki as a named mission source rather than a token surface, is a derived editorial implementation inference from the verified surfaces; it is not Heptabase-authored or a separately published UI specification.

The captured marketing layer is a warm off-white canvas (`#f7f7f7`) rather than pure white, and content sits on it as a quiet field of cards. There is essentially no chroma in the chrome — text and the primary call-to-action both live in the same near-black ink (`#2e2e2e`), never a hard `#000000` for display. Display headlines run in Instrument Sans Medium (weight 500) at large sizes — 48px on the hero with `-1.584px` tracking. Everything functional — nav, body, buttons, pricing copy — drops to Inter at weight 400–500. Live inspection found `box-shadow: none` across the hero, nav, cards, and pricing columns. Depth is built from flat translucent fills and hairlines: a faint `rgba(252,252,252,0.5)` card tint over `#fcfcfc`, warm `#f0f0ea` feature tiles, and 1px `rgba(0,0,0,0.08)` borders. Color appears in exactly two reserved roles: a clear interactive blue (`#207dff`) that highlights AI-feature phrases, and a single green (`#75c33a`) that marks pricing checkmarks. Reading that canvas as paper-like and low-glare, reading the near-black as printed-on-paper weight instead of screen glare, reading the page as a tidy desk guided by type weight and spacing rather than color, and reading the whole as a quiet board on which a few deliberate things have been placed, is a derived editorial implementation inference from the verified surfaces; it is not Heptabase-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Heptabase was created by founder Alan Chan, who built the product around a single conviction: that genuine understanding is spatial and visual, not linear. The product is a visual note-taking and knowledge-management app whose core interaction is an infinite whiteboard of cards — you bring sources in, lay them out on a canvas, and make sense of them by arranging, connecting, and synthesizing rather than by stacking notes in a list. Its stated vision is to "create a world where anyone can effectively establish a deep understanding of anything." Organizationally, Heptabase is a Taipei-based team — the founder and core team operate out of Taiwan, which is why this reference is classified `country: TW` by operating base. The company is incorporated in Delaware and went through Y Combinator's W22 batch, so the legal entity is US-registered; but the design culture, the team, and the day-to-day product work are Taiwanese, and the design-led founder's hand is visible in the restraint of every surface. (Classification follows operating base, not place of incorporation.) Official history and the live surfaces provide that narrative context; they do not by themselves supply interface tokens. Classifying that founding-and-incorporation narrative as context that does not by itself supply interface tokens, classifying the reference as `country: TW` by operating base rather than place of incorporation, and reading the design-led founder's hand as visible in the restraint of every surface, is a derived editorial implementation inference from the verified surfaces; it is not Heptabase-authored or a separately published UI specification.

What the source says Heptabase refuses, visible in its design: the loud, gradient-heavy chrome of growth-stage SaaS and the dopamine-loop urgency of consumer productivity apps. What it embraces: a warm, paper-like canvas; a near-monochrome palette where color is reserved for meaning; expressive display type over a quiet text face; and a flat, shadowless surface that feels like the inside of the product — a calm board on which serious thinking can happen. The website is, deliberately, a demonstration of the product's thesis: that a well-arranged space helps you understand. That refusal/embrace reading, and reading the website as a demonstration of the product's thesis, is a derived editorial implementation inference from the verified surfaces; it is not Heptabase-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

- Read the hero line "Master anything you learn. Do your best research and thinking."
- Start from "Get started" or "Get started on mobile".
- Compare pricing tiers and switch Monthly / Yearly (Save 25%).
- Open a product area from the top nav — AI Tutor, Wiki, Download, Gallery, Pricing.

Selecting these four as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not Heptabase-authored or a separately published UI specification. Each names a label or surface the source records. They do not come from the source's persona section.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as fictional archetypes informed by publicly observable Heptabase user segments (university researchers, lifelong learners, knowledge workers building personal knowledge bases), not individual people, so those biographies are dropped rather than promoted, and no name, age, city, or occupation is carried into this document or its sidecar. What the source independently records is the audience grouping those archetypes were said to be informed by: university researchers, lifelong learners, and knowledge workers building personal knowledge bases. As a Taipei-built product that ships in English first but serves a Traditional-Chinese-reading team and audience, 繁體中文 is in scope for type fallback. Reading those groups as this product's audience, and treating 繁體中文 as in scope for type fallback because the product is Taipei-built and ships in English first, is a derived editorial implementation inference from the verified surfaces; it is not Heptabase-authored or a separately published UI specification.

### Distinctive traits

- Warm off-white canvas (`#f7f7f7`) instead of stark white
- Near-black ink (`#2e2e2e`) for both display text and the primary CTA — monochrome chrome
- Instrument Sans Medium (500) display with extreme tight tracking (`-1.584px` at 48px)
- Inter 400–500 for all functional/UI text; CJK falls through to system PingFang TC / Noto Sans TC
- Shadow-free: depth from translucent fills (`#fcfcfc`, `#f0f0ea`) + `rgba(0,0,0,0.08)` hairlines
- Single saturated blue (`#207dff`) reserved for AI-feature highlight text
- Green (`#75c33a`) used only for pricing checkmarks
- Gentle radius ladder — 6px / 8px / 12px cards, full `9999px` pill for the dark CTA

These eight traits, and the readings carried inside them — paper-like canvas, monochrome chrome, tight-tracking display signature, shadowless tint-and-hairline depth — are a derived editorial implementation inference from the verified surfaces; they are not Heptabase-authored or a separately published UI specification. Each names the values it rests on.

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Heptabase-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Understanding is spatial.** The product's whole premise is that arranging knowledge on a canvas beats stacking it in a list. *UI implication:* lay content out as cards on a generous canvas; let space and adjacency carry relationships, not nesting depth.
2. **Color is information, not decoration.** The palette is near-monochrome so that the two accents mean something. *UI implication:* reserve blue (`#207dff`) for feature emphasis and green (`#75c33a`) for "included"; keep all chrome in ink and neutrals.
3. **Calm over stimulation.** A thinking tool should not compete for attention. *UI implication:* no shadows, no gradients, no urgency — a warm `#f7f7f7` canvas and flat fills keep the surface quiet.
4. **Type sets the thesis.** Expressive display type states the idea; neutral text type serves the reading. *UI implication:* Instrument Sans Medium with tight tracking for headlines; Inter for everything that must simply be read.
5. **Built to live with.** Copy frames a "lifelong knowledge base," not a quick win. *UI implication:* design for durability and density of use, not for first-session delight; nothing should feel like a trend that ages in a year.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Heptabase-authored or a separately published UI specification.

- Use a warm off-white canvas (`#f7f7f7`) instead of pure white
- Use near-black ink (`#2e2e2e`) for display text and the primary CTA — keep chrome monochrome
- Set headlines in Instrument Sans Medium (500) with tight negative tracking (`-1.584px` at 48px)
- Use Inter weight 400–500 for all nav, body, and UI text
- Keep the system shadow-free — separate with `#fcfcfc` / `#f0f0ea` fills and `rgba(0,0,0,0.08)` hairlines
- Reserve blue (`#207dff`) for AI-feature highlight text only
- Use green (`#75c33a`) only for pricing checkmarks
- Fall CJK text through to the system stack (PingFang TC / Noto Sans TC) for 繁體中文

### Avoid

The source states these eight as its Don't list; they are kept as its rules, reasons included. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Heptabase-authored or a separately published UI specification.

- Use pure black (`#000000`) for display or body text — reserve it for rare maximum-contrast accents
- Add drop shadows for elevation — Heptabase is flat and paper-like
- Spread the blue or green accents across chrome — they carry meaning, not decoration
- Set headlines in a heavy 700 weight — Medium 500 plus tight tracking is the voice
- Use Inter for big display headlines — Instrument Sans owns display
- Use a stark white page background — the warmth of `#f7f7f7` is intentional
- Bundle a CJK webfont — let 繁體中文 render in the native OS hanzi face
- Use loud SaaS gradients or glassmorphism — the surface stays quiet and printed

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Where a line also characterizes a value — paper-like ink, warm canvas, reserved AI blue — that characterization is a derived editorial implementation inference from the verified surfaces; it is not Heptabase-authored or a separately published UI specification.

Primary

- **Ink** (`#2e2e2e`): The system's primary color — display headings, body emphasis, and the fill of the dark CTA pill. A soft near-black that the source records as never the harsh `#000000` for display. Token-set key `tokens.colors.ink`.
- **Pure Black** (`#000000`): Reserved for maximum-contrast moments — the active state of a sub-nav pill, the logotype link. Used sparingly. Token-set key `tokens.colors.ink-pure`.
- **Pure White** (`#ffffff`): White product-mock cards and text on the dark ink CTA. Token-set keys `tokens.colors.surface` and `tokens.colors.on-primary`.

Canvas and surface

- **Canvas** (`#f7f7f7`): The page background — a warm off-white that frames every card. Token-set key `tokens.colors.canvas`.
- **Surface Tint** (`#fcfcfc`): Near-white card fill, frequently rendered at 0.5 alpha (`rgba(252,252,252,0.5)`) so the warm canvas reads faintly through it. Token-set key `tokens.colors.surface-tint`.
- **Surface Warm** (`#f0f0ea`): A warmer beige-grey for feature tiles and section panels. Token-set key `tokens.colors.surface-warm`.
- **Hairline** (`#e5e7eb`): The default border token in the stylesheet; card and divider outlines more often use the translucent `rgba(0,0,0,0.08)` / `rgba(0,0,0,0.14)` variants over it. Token-set key `tokens.colors.hairline`.

Accent

- **Accent Blue** (`#207dff`): The single saturated interactive hue — highlights AI-feature phrases ("AI chat", "AI tutor", "Save 25%") and active/interactive emphasis. The product's only "this is special" color. Token-set key `tokens.colors.accent-blue`.
- **Accent Green** (`#75c33a`): Pricing checkmark color only — signals "included" in feature lists. Not a brand color and never used for chrome. Token-set key `tokens.colors.accent-green`.

Text hierarchy

- **Ink** (`#2e2e2e`): Primary text, headings, nav, strong labels.
- **Muted** (`#6a6972`): Secondary body copy, descriptions, captions. Token-set key `tokens.colors.muted`.
- **Muted Warm** (`#777169`): Warm-grey alternate for inactive sub-nav pills and fine print. Token-set key `tokens.colors.muted-warm`.
- **On Primary** (`#ffffff`): Text on the dark ink CTA and on dark surfaces.

### Spacing

Token-set steps, unitless: `xs 4 · sm 8 · md 12 · base 16 · lg 24 · xl 32 · xxl 48 · section 64`. Visible sections also write 4px, 8px, 12px, 16px, 24px, 32px, 48px, and 64px where those strings already appear. The source also writes a base unit of 8px as the rhythm those steps sit on. Token-set key `tokens.spacing.xs: 4` is a spacing step. Token-set key `tokens.spacing.sm: 8` is a spacing step. It is not `tokens.rounded.md: 8`. Token-set key `tokens.spacing.md: 12` is a spacing step. It is not `tokens.rounded.lg: 12`. Token-set key `tokens.spacing.base: 16` is a spacing step. It is not the 16px body, nav, or button type size. Token-set key `tokens.spacing.lg: 24` is a spacing step. It is not the 24px card-title size. Token-set key `tokens.spacing.xl: 32` is a spacing step. Token-set key `tokens.spacing.xxl: 48` is a spacing step. Token-set key `tokens.spacing.section: 64` is a spacing step for section bands. Keeping those keys on separate paths is a derived editorial implementation inference from the verified surfaces; it is not Heptabase-authored or a separately published UI specification.

### Shape

Token-set steps, unitless: `sm 6 · md 8 · lg 12 · pill 9999`. Named uses the source records:

- Small (6px): inner card elements, dense containers. Token-set key `tokens.rounded.sm`.
- Medium (8px): nav items, white/warm cards, toggle segments. Token-set key `tokens.rounded.md`.
- Large (12px): pricing cards, large panels. Token-set key `tokens.rounded.lg`.
- Pill (9999): header CTA, sub-nav segmented pills. Token-set key `tokens.rounded.pill`. The source also writes this step as `9999px`.

`tokens.rounded.md: 8` is a radius step. It is not `tokens.spacing.sm: 8`. `tokens.rounded.lg: 12` is a radius step. It is not `tokens.spacing.md: 12`. `tokens.rounded.pill: 9999` has no spacing counterpart. The 10px radius on the Hero / Pricing CTA and the Ghost CTA is a component measurement; it is not a `tokens.rounded` step.

Calling 8px the workhorse for nav and cards, keeping `tokens.rounded` steps off the spacing keys that share a number, and classing the 10px Hero / Ghost radius as a component measurement rather than a `tokens.rounded` step, is a derived editorial implementation inference from the verified surfaces; it is not Heptabase-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page canvas, inline text, most surfaces |
| Tint (Level 1) | `#fcfcfc` / `#f0f0ea` fill shift | Card and section separation without elevation |
| Hairline (Level 2) | `1px solid rgba(0,0,0,0.08)` border | Card outlines, dividers |

Heptabase is a deliberately shadowless system. Live inspection found `box-shadow: none` across the hero, nav, feature cards, and pricing columns. Token-set key `tokens.shadow.none: none`. Depth and grouping come entirely from flat translucent fills — a `rgba(252,252,252,0.5)` tint over `#fcfcfc`, warm `#f0f0ea` panels — and thin `rgba(0,0,0,0.08)` hairlines over the `#e5e7eb` base border. When emphasis is needed the system reaches for the dark ink (`#2e2e2e`) fill or the blue accent (`#207dff`), never a drop shadow. Reading that stack as a flat, tint-and-hairline elevation system is a derived editorial implementation inference from the verified surfaces; it is not Heptabase-authored or a separately published UI specification. The measurements themselves are recorded values.

### Motion

Durations the source attributes to named tokens:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, pill press, focus |
| `motion-standard` | 200ms | Card/section reveal, panel open, sheet |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

Easing roles — three roles with declared uses. The specific curve values the source lists are not traceable to Heptabase evidence, so the curves are omitted here and only the roles and their uses are kept. Classing those curves as untraceable to Heptabase evidence, and omitting them on that ground, is a derived editorial implementation inference from the verified surfaces; it is not Heptabase-authored or a separately published UI specification:

| Token | Use |
|---|---|
| `ease-enter` | Arriving — cards, panels, sheets |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions |

A future motion pass may promote an omitted curve only after recording, per component, the computed transition properties, the animation name, the duration, the easing, and the reduced-motion behavior on the live surface; confirming a single curve, or citing an official source for one, does not satisfy that condition. That condition is set by this document, not by Heptabase.

Motion rules, as the source states them:

- Motion is functional and quiet, consistent with the calm, paper-like aesthetic.
- Cards and panels fade-in from below at `motion-standard / ease-enter`; pills respond to press with a subtle scale/opacity shift.
- There is no bounce or spring — a thinking tool signals steadiness, not playfulness.
- On an infinite-canvas product, panning and zooming are direct and immediate rather than animated for show.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

Reading those motion rules as matching a calm, paper-like aesthetic, and reading the no-bounce stance as a steadiness signal, is a derived editorial implementation inference from the verified surfaces; it is not Heptabase-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The marketing surfaces and the Wiki state the product and ship live type. They do not publish a universal current typography token or a separately issued type specimen. That "no published type token" reading is a derived editorial implementation inference from the verified surfaces; it is not Heptabase-authored or a separately published UI specification. |
| Live computed surface-use | Hero and section headlines compute Instrument Sans at weight 500. Nav, body, buttons, and pricing compute Inter. |
| FontFaceSet and source corroboration | Instrument Sans (loaded as `__instrumentSans`); Inter (loaded as `__Inter`). |
| Official distributed asset | No Heptabase-exclusive distributed type family was verified. Instrument Sans and Inter are the observed faces. CJK has no bundled hanzi webfont. |
| Declared-only | Traditional-Chinese text falls through the Inter stack to the platform CJK face (PingFang TC on Apple, Noto Sans TC / Microsoft JhengHei on others). Token-set path `tokens.typography.family.cjk`. |
| License | This record does not establish a Heptabase font-license notice for Instrument Sans or Inter. Treating those faces as upstream faces used by Heptabase, not Heptabase-owned brand assets, is a derived editorial implementation inference from the verified surfaces; it is not Heptabase-authored or a separately published UI specification. |
| Outside these captures | Type on surfaces beyond the two token-inspected pages sits outside this contract. That outside-this-contract boundary is a derived editorial implementation inference from the verified surfaces; it is not Heptabase-authored or a separately published UI specification. |

### Family

- **Display:** `Instrument Sans` (loaded as `__instrumentSans`) — all hero and section headlines, weight 500. Token-set path `tokens.typography.family.display`.
- **Body / UI:** `Inter` (loaded as `__Inter`) — nav, body, buttons, pricing, the document default at weight 400–600. Token-set path `tokens.typography.family.body`.
- **CJK:** no bundled hanzi webfont; Traditional-Chinese text falls through the Inter stack to the platform CJK face (PingFang TC on Apple, Noto Sans TC / Microsoft JhengHei on others). Token-set path `tokens.typography.family.cjk`.

A fallback member of a stack is never presented as the brand face. Do not replace Instrument Sans or Inter with a system substitute, and do not present PingFang TC / Noto Sans TC as a bundled Heptabase webfont. That fallback prohibition is a derived editorial implementation inference from the verified surfaces; it is not Heptabase-authored or a separately published UI specification. Instrument Sans and Inter never swap roles.

### Type roles

| Role | Font | Size | Weight | Line height | Tracking | Token-set use |
|---|---|---:|---:|---:|---:|---|
| Display Hero | Instrument Sans | 48px (3.00rem) | 500 | 1.30 (62.4px) | -1.584px | Hero headline, Instrument Sans Medium |
| Section Heading | Instrument Sans | 36px (2.25rem) | 500 | 1.30 (46.8px) | -0.54px | Section titles, Instrument Sans |
| Card / Tier Title | Inter | 24px (1.50rem) | 600 | 1.50 | normal | Pricing tier / card titles, Inter SemiBold |
| Logotype | Inter | 18px (1.13rem) | 600 | — | -0.36px | "Heptabase" wordmark |
| Nav Link | Inter | 16px (1.00rem) | 400 | 1.50 | normal | Nav links, Inter |
| Body | Inter | 16px (1.00rem) | 400 | 1.50 | normal | Standard reading text, Inter |
| Button | Inter | 16px (1.00rem) | 500 | 1.00 | normal | Header CTA label, Inter Medium |
| Sub-nav Pill | Inter | 13px (0.81rem) | 500 | 1.00 | normal | Segmented sub-nav pill, Inter |

Line heights are unitless ratios in the source token set (`1.30` on display-hero and section; `1.50` on card-title, nav, and body; `1.00` on button and pill) and stay ratios here. They are not converted to a single px form. The source itself spells the hero line-height as both `1.30` and `62.4px`, and the section line-height as both `1.30` and `46.8px`; both forms stay. Keeping those line heights as unitless ratios, and refusing to convert them to a single px form, is a derived editorial implementation inference from the verified surfaces; it is not Heptabase-authored or a separately published UI specification. Token-set paths: `tokens.typography.display-hero` · `section` · `card-title` · `nav` · `body` · `button` · `pill`. The Logotype row is from the source hierarchy table; it has no token-set key.

Token-set `use` strings, verbatim: Display Hero `Hero headline, Instrument Sans Medium`; Section `Section titles, Instrument Sans`; Card / Tier Title `Pricing tier / card titles, Inter SemiBold`; Nav `Nav links, Inter`; Body `Standard reading text, Inter`; Button `Header CTA label, Inter Medium`; Pill `Segmented sub-nav pill, Inter`.

### Type rules

The source states these four as its typography principles. Reading the measured metrics as those principles is a derived editorial implementation inference from the verified surfaces; it is not Heptabase-authored or a separately published UI specification.

- **Two faces, two jobs**: Instrument Sans is the expressive display voice; Inter is the functional reading/UI voice. They never swap roles.
- **Tight display tracking**: headlines compress hard (`-1.584px` at 48px, `-0.54px` at 36px); body and UI stay at normal tracking. The compression is the brand's typographic signature.
- **Soft-black ink, not pure black**: display and body text use `#2e2e2e`, reserving `#000000` for rare maximum-contrast accents.
- **Medium weight as display weight**: the hero runs at weight 500, not 700 — confidence through tracking and size, not heaviness.

### Assets

- The catalog's logo entry for this reference is a Google favicon-service URL (`https://www.google.com/s2/favicons?domain=heptabase.com&sz=128`) rather than a Heptabase-hosted file. The source's own sibling excludes that service from the TW brand-owned count, so the URL is recorded here as a favicon-service pointer and in the provenance ledger, and is not presented as a Heptabase-hosted brand asset. Classing that entry as a third-party favicon service is a derived editorial implementation inference from the verified surfaces; it is not Heptabase-authored or a separately published UI specification.
- Product-mock cards carry no shadow at any size, consistent with the flat system. Cards maintain their 8px / 12px radius across the breakpoints the source declares. Whiteboard/canvas screenshots sit inside `#fcfcfc` / `#ffffff` framed cards. Reading that shadowless image behavior as consistent with the flat system is a derived editorial implementation inference from the verified surfaces; it is not Heptabase-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### How to read this section

The source declares each component with a primitive type (`button`, `tab`, `card`, `toggle`) and a value set. Those types are preserved per component. Applicability below is judged by each control's role in this product, not by whether a visual treatment for that state was recorded; where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. The source's live inspection recorded computed default styling, and the state treatments in the State record below are stated at system level rather than measured per control. Every kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; it is not Heptabase-authored or a separately published UI specification. This is not a claim that state coverage is finished.

The source records no `focus-visible` treatment. Generic focus is not invented. `focus-visible` stays applicable on interactive controls; the visual treatment is omitted.

### Header CTA (Primary Pill)

- Role: header "Get started" call-to-action — the system's single solid pill
- Primitive type: `button` · Kind: interactive
- Domain: Marketing (`heptabase.com`)
- Background: `#2e2e2e`
- Text: `#ffffff`
- Radius: 9999px
- Padding: 8px 16px
- Height: 36px
- Font: 16px Inter weight 500
- Token-set font record: `16px / 500 Inter`
- Token-set use: `Header 'Get started' CTA — solid near-black pill`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination control can be gated; treatment omitted |
| loading | not-applicable | This control takes the reader to a start destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | This control takes the reader to a destination; it does not commit an operation whose outcome it could report |
| success | not-applicable | Same role reason: reaching a destination is not an operation with a success result |

### Hero / Pricing CTA (Rounded Rect)

- Role: Hero "Get started on mobile" and the featured pricing tier CTA
- Primitive type: `button` · Kind: interactive
- Domain: Marketing / pricing
- Background: `#2e2e2e`
- Text: `#ffffff`
- Radius: 10px
- Padding: 14px 24px
- Height: 48px
- Font: 16px Inter weight 600
- Token-set font record: `16px / 600 Inter`
- Token-set use: `Hero / pricing primary CTA — rounded-rect`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination control can be gated; treatment omitted |
| loading | not-applicable | This control takes the reader to a start destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination role; the destination, not this button, reports failure |
| success | not-applicable | Same role reason: reaching a start destination is not an operation with a success result |

### Ghost CTA

- Role: Secondary pricing-tier CTA on translucent fill
- Primitive type: `button` · Kind: interactive
- Domain: Pricing
- Background: `#fcfcfc`
- Text: `#2e2e2e`
- Border: 1px solid `rgba(0,0,0,0.08)`
- Radius: 10px
- Padding: 13px 23px
- Height: 48px
- Font: 18px Inter weight 500
- Token-set font record: `18px / 500 Inter`
- Token-set use: `Secondary pricing CTA on translucent fill`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination control can be gated; treatment omitted |
| loading | not-applicable | This control takes the reader to a start destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination role; the destination, not this button, reports failure |
| success | not-applicable | Same role reason: reaching a start destination is not an operation with a success result |

### Top Nav Item

- Role: top navigation links (AI Tutor, Wiki, Download, Gallery, Pricing)
- Primitive type: `tab` · Kind: interactive
- Domain: Marketing
- Text: `#2e2e2e`
- Radius: 8px
- Padding: 8px 12px
- Font: 16px Inter weight 400
- Token-set use: `Top nav item`
- Token-set active: `text #2e2e2e on hover tint`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web nav item; the source names a hover tint without a color value, so the tint is omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A nav item can be gated; treatment omitted |
| loading | not-applicable | This item is a destination tab/link; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination tab/link; the destination, not the item, reports failure |
| success | not-applicable | Same role reason: reaching a nav destination is not an operation with a success result |

### Sub-nav Segmented Pill

- Role: Product sub-navigation segmented pills (Home / AI Tutor)
- Primitive type: `tab` · Kind: interactive
- Domain: Marketing
- Text: `#777169` (inactive)
- Radius: 9999px
- Padding: 7px 22px
- Font: 13px Inter weight 500
- Active: text `#000000` in a filled pill
- Token-set use: `Product sub-nav segmented pills (Home / AI Tutor)`
- Token-set active: `text #000000 + filled pill`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A tab can be gated; treatment omitted |
| loading | not-applicable | This pill is a destination tab; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination tab; the destination, not the pill, reports failure |
| success | not-applicable | Same role reason: reaching a product-area destination is not an operation with a success result |

### Billing Toggle Segment

- Role: Monthly / Yearly (Save 25%) billing switch — active segment fills white, inactive text drops to `rgba(0,0,0,0.32)`
- Primitive type: `toggle` · Kind: interactive
- Domain: Pricing
- Background: `#ffffff`
- Text: `#2e2e2e`
- Radius: 8px
- Padding: 6px 10px
- Height: 32px
- Font: 16px Inter weight 500
- Token-set use: `Monthly / Yearly billing switch`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web toggle; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A billing switch can be gated; treatment omitted |
| loading | not-applicable | This control selects a billing period; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Toggle role; selecting Monthly or Yearly is not an operation this control reports as failure |
| success | not-applicable | Same role reason: selecting a billing period is not an operation with a success result |

### Pricing Card

- Role: Pricing tier column — translucent fill over warm canvas, no shadow
- Primitive type: `card`
- Domain: Pricing
- Background: `#fcfcfc` (rendered at `rgba(252,252,252,0.5)`)
- Border: 1px solid `rgba(0,0,0,0.08)`
- Radius: 12px
- Token-set use: `Pricing tier column on translucent fill, no shadow`
- No kind and no applicability map: the source supplies no interaction evidence for this container, so neither is decided here.

### White Product Card

- Role: White product-mock card in feature sections
- Primitive type: `card`
- Domain: Marketing
- Background: `#ffffff`
- Border: 1px solid `rgba(0,0,0,0.14)`
- Radius: 8px
- Token-set use: `White product mock card`
- No kind and no applicability map: the source supplies no interaction evidence for this container, so neither is decided here.

### Warm Feature Tile

- Role: Warm beige feature tile on the canvas
- Primitive type: `card`
- Domain: Marketing
- Background: `#f0f0ea`
- Border: 1px solid `rgba(0,0,0,0.04)`
- Radius: 8px
- Token-set use: `Warm feature tile on canvas`
- No kind and no applicability map: the source supplies no interaction evidence for this container, so neither is decided here.

### Accent Treatment

- Feature-highlight text: `#207dff` (blue) for AI-feature phrases
- Pricing checkmarks: `#75c33a` (green) for included-feature ticks
- Neither accent appears on buttons, borders, or chrome — color is information, not decoration. Reading the accents as information rather than chrome decoration is a derived editorial implementation inference from the verified surfaces; it is not Heptabase-authored or a separately published UI specification.

### State record

The source's state contract, preserved with its values and copy. The treatments below are a derived editorial implementation inference from the verified surfaces rather than measured per-control observations or treatments attached to the marketing destination controls, and they are not Heptabase-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (new whiteboard)** | Warm canvas (`#f7f7f7`) with a single Ink (`#2e2e2e`) prompt at body size inviting the first card. No illustration clutter — the empty canvas is the invitation. |
| **Empty (no search results)** | Muted (`#6a6972`) single line explaining nothing matched, with a path to adjust the query. Calm, honest. |
| **Loading (board / card fetch)** | Flat skeleton blocks on `#fcfcfc` fill at final dimensions, 8px/12px radius. No shadow shimmer — a quiet pulse consistent with the shadowless system. |
| **Loading (AI compute)** | Inline progress within the AI panel; the blue accent (`#207dff`) marks the active AI action; previous content stays visible. |
| **Error (sync / load failed)** | Inline message in Ink (`#2e2e2e`) with a plain-language explanation and a retry. No generic "Something went wrong" alone — states what to do next. |
| **Error (form / field)** | Field-level message below the input describing what is valid, not just "Required". |
| **Success (saved / synced)** | Brief, quiet inline confirmation; no celebratory emoji, no toast spam — the card itself reflects the saved state. |
| **Skeleton** | `#fcfcfc` blocks at final dimensions, 8px/12px radius, flat pulse. |
| **Disabled** | Muted Warm (`#777169`) text on reduced-opacity surface; the dark ink action fades rather than switching to a different hue, preserving the monochrome read. |

These rows describe empty/loading/error/success treatments the source wrote at system level. They are not attached as visual treatments to the marketing destination controls above.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- Centered single-column hero anchored by the 48px Instrument Sans headline
- Feature sections present product mocks inside `#fcfcfc` / `#ffffff` cards on the warm canvas
- Pricing is a 3-column grid of equal `#fcfcfc` tier cards at 12px radius
- Warm `#f0f0ea` tiles arrange supporting features in a quiet sub-grid
- Spacing restated from `tokens.spacing`: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64
- Shape restated from `tokens.rounded`: inner 6 · nav/white/warm/toggle 8 · pricing 12 · pill 9999

Whitespace the source states:

- **Canvas as breathing room**: the warm off-white `#f7f7f7` field is generous; cards float on it with wide margins, echoing the app's infinite whiteboard.
- **Flat segmentation**: sections separate by surface tint (`#fcfcfc` vs `#f0f0ea` vs canvas) and hairlines, never by shadow.
- **Hierarchy by type, not color**: weight and size carry the structure so the palette can stay almost monochrome.

Reading the page as a generous canvas, reading bands as tint-not-elevate segmentation, and reading hierarchy as type-not-color, is a derived editorial implementation inference from the verified surfaces; it is not Heptabase-authored or a separately published UI specification.

Responsive behavior. The source's live inspection was run as a desktop computed-style pass, and its own evidence note attributes token-level claims to that inspection; the breakpoints, collapsing strategy, image behavior, and the recorded target sizes are stated by the source at system level rather than measured across viewports, so they are a derived editorial implementation inference from the verified surfaces and are not Heptabase-authored or a separately published UI specification.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single column, hero headline compresses, pricing cards stack |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full layout, centered hero, 3-column pricing grid |

Touch targets the source records:

- Large CTAs at 48px height with 14px 24px padding
- Header pill CTA at 36px height, full radius
- Nav items at 36px height with 8px 12px hit area

Collapsing strategy, as the source states it:

- Hero: 48px Instrument Sans headline scales down on mobile, weight 500 maintained
- Pricing: 3-column tier grid collapses to a single stacked column
- Feature cards: multi-column → stacked single column
- Warm/white card surfaces maintain their fills and hairlines across breakpoints

Image behavior: product-mock cards carry no shadow at any size, consistent with the flat system. Cards maintain their 8px/12px radius across breakpoints. Whiteboard/canvas screenshots sit inside `#fcfcfc` / `#ffffff` framed cards. The Desktop row keeps the source body's `1024-1440px` range. Reading that image behavior as consistent with the flat system is a derived editorial implementation inference from the verified surfaces; it is not Heptabase-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The source characterizes Heptabase's voice as **calm, intellectual, and earnest** — a tool for thinkers that speaks the way a good study partner does, plainly and with quiet conviction. The hero line "Master anything you learn. Do your best research and thinking." sets the register: aspirational about understanding, never gimmicky about productivity. Copy treats the user as a serious learner building something lasting, not a metrics target. The vision statement — "create a world where anyone can effectively establish a deep understanding of anything" — is the spine of every surface. That characterization, that register reading, and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not Heptabase-authored or a separately published UI specification. The quoted lines themselves are live surface copy.

| Context | Tone |
|---|---|
| Hero headlines | Aspirational, learning-framed. "Master anything you learn." Confident, not hype. |
| Feature copy | Concrete and capability-first. "Ask AI to explain any sources you bring." |
| Pricing taglines | Plain, audience-named. "For anyone building a lifelong knowledge base." |
| CTAs | Direct, low-pressure. "Get started", "Get started on mobile". |
| Trust / social proof | Understated. "Trusted by customers from the world's leading universities." |

**Voice samples (verbatim from live site, 2026-06-17):**

- "Master anything you learn. Do your best research and thinking." — hero headline (learning-framed mission).
- "For anyone building a lifelong knowledge base." — Pro tier tagline (audience-named, plain).
- "Trusted by customers from the world's leading universities." — pricing social proof (understated).

Further published strings the source records on the inspected surfaces, kept byte-exact:

- Heptabase
- Get started
- Get started on mobile
- AI chat
- AI tutor
- Save 25%
- Home
- AI Tutor
- Wiki
- Download
- Gallery
- Pricing
- Monthly
- Yearly
- 繁體中文
- Ask AI to explain any sources you bring.
- create a world where anyone can effectively establish a deep understanding of anything

**Forbidden register:** hustle-productivity hype, exclamation-heavy urgency, undefined buzzwords, "10x your output"-style claims, and anything that frames learning as a competition rather than a personal pursuit of understanding. The source states that forbidden list.

Reproduce the 繁體中文 string above byte-exact rather than translating or re-casing it. An English gloss may sit beside a non-Latin line; it never replaces the line.

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

These are named values the source already opened, not permissions to invent, and not a list of domains the source never established. That framing is a derived editorial implementation inference from the verified surfaces; it is not Heptabase-authored or a separately published UI specification:

- Exact easing curves. Three easing roles and their uses are established; the curve values are omitted because they are not traceable to Heptabase evidence. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- focus-visible visual treatments on the declared controls
- hover visual treatments other than the nav item's named hover tint, whose color value is unnamed
- The disabled fade value. The system states that the dark ink action fades rather than switching to a different hue, without naming an opacity.
- Wiki as a token source. `https://wiki.heptabase.com` is a named brand-owned source for the mission and founder record. It does not contribute computed interface tokens.
