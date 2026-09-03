# Patreon Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

This contract covers the two first-party marketing surfaces the source inspected on 2026-06-17: `https://www.patreon.com` and `https://www.patreon.com/pricing`. Token extraction is `tokens.source: live-extract` (`tokens.extracted` 2026-06-17). YAML token note, kept as the facts it names: monochrome system from the 2023 Wolff Olins / Dinamo / Active Theory rebrand; primary = pure black (`#000000`) CTA fill on light surfaces, inverting to white (`#ffffff`) on dark surfaces; single typeface (Oracle) at ultra-light weight 250 for expressive display; marketing site is rem-scaled ≈1.5×; token sizes are design-intent (≈ live computed ÷ 1.5); Periwinkle/cornflower (`#94bbff` / `#71a0ff`) and brand blue (`#002a57`) are expressive accents, not chrome. Every value stays attached to the surface that established it. Reading those two inspected URLs as this contract's token surfaces, keeping the live-extract date beside the token note, and treating values as attached to the surface that established them, are derived editorial implementation inferences from the verified surfaces; they are not Patreon-authored or a separately published UI specification.

The source records Patreon's marketing surface as the rare brand system that treats restraint as a stage and color as something it deliberately gives away. Following its 2023 rebrand (strategy by Wolff Olins, custom type by Dinamo, motion by Active Theory), the interface is uncompromisingly monochrome — pure white (`#ffffff`) canvases and pure black (`#000000`) sections trade places down the page, with text in near-black ink (`#1a1a1a`) or true black (`#000000`) and a quiet muted grey (`#999999`) for support. The chrome itself almost never carries a brand hue; instead, full-bleed documentary photography of real creators fills the hero, and the enormous wordmark-scale headline sits *on top* of the image rather than beside it. The hex values, the 2023 partner credits, the photography placement, and the headline overlay are the source's own. Readings of restraint as a stage, of color as something the system deliberately gives away, of the chrome as almost never carrying a brand hue, and of the effect as editorial and warm — closer to a culture magazine than a SaaS dashboard — are a derived editorial implementation inference from the verified surfaces; they are not Patreon-authored or a separately published UI specification.

The defining element the source names is the typeface. The entire site runs in **Oracle**, Dinamo's custom variable typeface for Patreon, on every single text element (a live scan found Oracle on 1,556 elements and effectively nothing else). Display headlines run at an extraordinarily light **weight 250** — "Where podcasts grow", "Start Your Patreon for Free", "Earning made easy" — at hero scale (≈125px design size, 187.5px live computed on the 1.5×-scaled root) with tight negative tracking (≈ -0.06em). Smaller UI text — nav, buttons, body — drops to weight 350–400 at 9–15px. The count, the weight, the quoted headlines, the design and live sizes, and the tracking figure are the source's own. Readings of the ultra-light oversized treatment as the brand's signature, and of that treatment as confident enough to whisper at billboard scale so the creator photography and the headline carry the page, are a derived editorial implementation inference from the verified surfaces; they are not Patreon-authored or a separately published UI specification.

In Patreon's own words, "Our goal is not to be defined by a shape or a color, but rather by a visual language… one as diverse and expressive as the creators it represents." The system's saturated hues — a cornflower (`#71a0ff`), a periwinkle (`#94bbff`), a deep brand blue (`#002a57`), a soft sage (`#9fb08b`) — appear as full expressive section *bands*, contextual and rotating, never as a fixed button color. Geometry is all pill: buttons at 30px radius, search at 45px, avatars circular, larger pills at ≈25px. There are no shadows anywhere — depth comes from photography and the black/white contrast, never from elevation. The quote is Patreon-authored. The hex values, the pill figures, and the shadow-free observation are the source's own. Mapping that quote onto a philosophy of *color as creator expression rather than brand swatch*, and reading the bands as never a fixed button color, are a derived editorial implementation inference from the verified surfaces; they are not Patreon-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Patreon was co-founded in **2013** by **Jack Conte** and **Sam Yam**. Conte — half of the indie band Pomplamoose — built the first version because YouTube ad revenue couldn't come close to funding the work he wanted to make; his college roommate Sam Yam saw the opportunity to connect creators directly to their fans' support. The premise was, and remains, a rejection of the ad-funded attention economy: let fans pay creators directly through membership so creators can "afford the freedom to do their best work, and the stability to build an independent creative career". By 2021 the company was valued at roughly **$4 billion**, and fans have sent creators on the order of **$10 billion** since launch.

In **October 2023** Patreon overhauled its brand with partners Wolff Olins (strategy), Dinamo (the custom Oracle typeface and a variable, ever-shifting wordmark), Active Theory (digital and motion), and artist David McLeod. The centerpiece was a logo with no canonical form: "Our new logo does not have an exact canonical form, there isn't one definitive Patreon logo." The system was built "motion-first for a digital-first world," embracing "animation, interactivity, contextual adaptation, and color transformation" rather than 20th-century retail conventions.

What Patreon refuses, visible in its design: a fixed brand color, a frozen logo, and interface ornament that competes with the work. What it embraces: a single expressive typeface at the extremes of its weight range, a strictly monochrome chrome so that *color belongs to creators*, full-bleed documentary photography that heroizes real people, and a planned tool letting creators render the Patreon mark in their own colors, textures, and motion. The design is, in essence, a brand that gets out of the way. The years, founders, Pomplamoose, YouTube ad-revenue origin, college-roommate fact, about-page quote, 2021 valuation, creator-payout figure, October 2023 partners, no-canonical-form quote, motion-first quote, and the planned creator-mark tool are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-rebrand narrative as context that does not by itself supply interface tokens, and classifying the refuses / embraces / "a brand that gets out of the way" close as the source's own last-paragraph unit rather than as a separately published UI specification, is a derived editorial implementation inference from the verified surfaces; it is not Patreon-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a label or surface the source records, and not taking them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not Patreon-authored or a separately published UI specification.

- Start a Patreon from the captured CTAs "Get started", "Get Started", and the pricing headline "Start Your Patreon for Free".
- Find a creator from the captured "Find a Creator" pill search on the dark header.
- Scan pricing and feature cards on `https://www.patreon.com/pricing`.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. Source §13 names fictional archetypes informed by publicly observable Patreon user segments (independent creators monetizing via membership, and their paying fans), not individual people, so those biographies are dropped rather than promoted, and no name, age, city, occupation, or motivation is carried into this document or its sidecar. The source's own grouping string is kept as written. Restricting Audience to that source-stated grouping, and refusing to recast dropped biographies as tasks, is a derived editorial implementation inference from the verified surfaces; it is not Patreon-authored or a separately published UI specification.

### Distinctive traits

The list restates values the source records. The groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces; they are not Patreon-authored or a separately published UI specification.

- Single custom typeface (Oracle by Dinamo) on every text element — no secondary UI font; live scan Oracle on 1,556 elements
- Ultra-light weight 250 for all expressive display headlines at billboard scale (≈125px hero; live 187.5px)
- Strict monochrome chrome: pure black (`#000000`) and pure white (`#ffffff`) trade places, ink at `#1a1a1a`
- Color as creator expression — saturated bands (`#94bbff`, `#71a0ff`, `#002a57`, `#9fb08b`), never fixed brand chrome
- Pill geometry everywhere — 30px buttons, 45px search, circular avatars, full-round chips, larger pills at ≈25px
- Shadow-free system — depth from full-bleed photography and black/white contrast
- Surface-inverting primary CTA — black fill on light, white fill on dark
- Tight negative tracking on display headlines (≈ -0.06em); body text relaxed at weight 400

### Principles

These 6 items are a derived editorial implementation inference from the verified surfaces; they are not Patreon-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each. The source HTML comment marks interpretive claims such as "the creator is the brand", "color belongs to creators", and "a brand that gets out of the way" as editorial readings connecting Patreon's stated rebrand philosophy to its observed design, not directly quoted Patreon statements.

1. **The creator is the brand.** Patreon's identity foregrounds creators over the company. *UI implication:* full-bleed creator photography carries the page; chrome stays monochrome so nothing competes with the work.
2. **Color belongs to creators.** The system refuses a single fixed brand swatch. *UI implication:* keep buttons and chrome black/white; reserve saturated hues (`#94bbff`, `#71a0ff`, `#9fb08b`) for expressive, rotating, contextual bands.
3. **One voice, full range.** Oracle does every typographic job across its variable weight axis. *UI implication:* derive hierarchy from weight (250 vs 400) and scale, never from font switching.
4. **Get out of the way.** The lighter wordmark/weight exists "to put creators in the spotlight." *UI implication:* ultra-light billboard headlines and unobtrusive UI text; minimal ornament.
5. **Motion-first, contextual.** Built for a digital-first world that animates and adapts. *UI implication:* design for transformation and context, not a static, frozen mark.
6. **Flat, warm, editorial.** *UI implication:* no shadows; depth from photography and black/white contrast; hairline `#cccccc` separation.

### Application rules

The source states these as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Patreon-authored or a separately published UI specification.

- Use Oracle for everything — display, body, nav, buttons; one typeface does every job
- Set expressive headlines at weight 250 and billboard scale — ultra-light is the signature
- Keep chrome strictly monochrome — pure black (`#000000`) and pure white (`#ffffff`)
- Use near-black `#1a1a1a` for body ink on white, not a grey
- Invert the primary CTA by surface — black fill on light, white fill on dark
- Treat color (`#94bbff`, `#71a0ff`, `#002a57`, `#9fb08b`) as expressive creator-energy bands, contextual and rotating
- Use pill geometry throughout — 30px buttons, 45px search, circular avatars
- Let full-bleed creator photography carry depth and warmth
- Apply tight negative tracking (≈ -0.06em) on display headlines

### Avoid

The source states these as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Patreon-authored or a separately published UI specification.

- Add drop shadows for elevation — the system is flat and shadow-free
- Pin a single fixed brand color to buttons — color belongs to creator expression, chrome stays monochrome
- Set display headlines in a heavy weight — ultra-light 250 is the voice at scale
- Introduce a second UI typeface — Oracle covers the whole range
- Use sharp/square corners on interactive elements — geometry is pill
- Use mid-grey for body text — reserve near-black `#1a1a1a`
- Let interface ornament compete with the creator photography
- Apply positive letter-spacing at display sizes — Patreon tracks tight

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Role names follow the source's own labels. Taking those role names from the source, pairing each hex to the token-set path named beside it, keeping `tokens.colors.primary` `#000000` off `tokens.colors.black` `#000000`, keeping `tokens.colors.canvas` `#ffffff` off `tokens.colors.on-primary` `#ffffff`, keeping live `color(srgb …)` writings beside the hex, keeping the two translucent rgba values off the solid token map, and attaching every role to the use the source recorded rather than relabeling a marketing-surface value as a house palette for every Patreon surface, are derived editorial implementation inferences from the verified surfaces; they are not Patreon-authored or a separately published UI specification. Characterizations such as slightly-softened-from-pure-black, hair-warmer-than-pure-black, and closest-thing-to-a-Patreon-color are the source's own role prose, classified here as observation labels rather than a separately published UI specification.

#### Primary (Monochrome)

- **Stage Black** (`#000000`): The primary action color and the dark-section background. As a CTA it is a pure-black fill with white text on light surfaces; as a backdrop it is the full black hero/section behind white photography captions and the ultra-light wordmark. Token-set path `tokens.colors.primary`. Catalog `primary_color` is `#000000`. `tokens.colors.black` also writes `#000000` and stays a second key.
- **Paper White** (`#ffffff`): Page canvas, the inverted CTA fill on dark/photo heroes, and all text on black sections. Token-set path `tokens.colors.canvas`. `tokens.colors.on-primary` also writes `#ffffff` and stays a second key.
- **Obsidian Ink** (`#1a1a1a`): Near-black primary text and card copy on white surfaces (live `color(srgb 0.1 0.1 0.1)`, ×298). Token-set path `tokens.colors.ink`.

#### Neutral Support

- **Muted Grey** (`#999999`): Secondary/metadata text, captions, de-emphasized labels (live `color(srgb 0.6 0.6 0.6)`). Token-set path `tokens.colors.muted`.
- **Hairline Grey** (`#cccccc`): Thin card outlines and dividers — the primary separation device in a shadow-free system (live `color(srgb 0.8 0.8 0.8)`). Token-set path `tokens.colors.hairline`.
- **Near-Black Plum** (`#0f0c13`): Occasional deepest-section background, a hair warmer than pure black. Token-set path `tokens.colors.near-black`.

#### Expressive Accents (creator-energy bands, not chrome)

- **Brand Blue** (`#002a57`): The deep blue reserved for logo and brand moments — the closest thing to a "Patreon color", used sparingly. Token-set path `tokens.colors.brand-blue`.
- **Cornflower** (`#71a0ff`): Saturated mid-blue used as an expressive feature-band background. Token-set path `tokens.colors.accent-cornflower`.
- **Periwinkle** (`#94bbff`): Lighter blue-violet band background — the warm, inviting expressive surface seen on feature sections. Token-set path `tokens.colors.accent-periwinkle`.
- **Sage** (`#9fb08b`): Soft muted green used as an alternating expressive section/pricing surface tint. Token-set path `tokens.colors.accent-sage`.

Translucent values used in chrome (not in the solid token map): `rgba(255,255,255,0.16)` for utility chips and nav-hover fills on dark; `rgba(255,255,255,0.6)` for secondary captions on photography.

The two-tone black/white duality is the entire chrome system, in the source's own wording. `tokens.colors.primary` and `tokens.colors.black` stay two keys that share `#000000`. `tokens.colors.canvas` and `tokens.colors.on-primary` stay two keys that share `#ffffff`.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept as the source wrote them): `xs: 4` · `sm: 8` · `md: 12` · `base: 16` · `lg: 24` · `xl: 32` · `xxl: 48` · `section: 64`.

Source §5 restates the scale as 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, with base unit 4px. Notable: button padding lands at 15px 21px (live); sections breathe with 64px+ vertical gaps so full-bleed photography and the billboard headline have room. `tokens.spacing.md: 12` is not a radius step. `tokens.spacing.base: 16` is not a type size (body is 15). `tokens.spacing.lg: 24` is not a type size. `tokens.spacing.section: 64` is the section-gap step, not a type size. Button padding `15px 21px` is harvested control padding, not a spacing-scale step; `15` in that padding is not `tokens.rounded.sm: 15`. Keeping those unitless steps on their own keys, keeping the §5 px restatement beside them, and keeping harvested control padding with those controls, are derived editorial implementation inferences from the verified surfaces; they are not Patreon-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `sm: 15` · `md: 20` · `lg: 30` · `pill: 45` · `full: 9999`.

The source's named radius uses, kept on their own rows (the longer §5 writing sits beside the YAML keys):

- Medium (`15`–`20`): inner containers. Token-set keys `tokens.rounded.sm` / `tokens.rounded.md`.
- Large (`30` / `30px`): buttons, cards — the workhorse pill radius. Token-set key `tokens.rounded.lg`.
- Pill (`45` / `45px`): search input. Token-set key `tokens.rounded.pill`. This `45` is not the search-input height `45px`.
- Full (`9999` / `9999px` / `50%`): chips, circular avatars and icons. Token-set key `tokens.rounded.full`.
- Larger pills at ≈25px: source §1 body observation; not a YAML `tokens.rounded` key.

`tokens.rounded.sm: 15` is not the `15px` in button padding `15px 21px`. `tokens.rounded.md: 20` is not `tokens.typography.label-lg.size` `20`. `tokens.rounded.lg: 30` is not a type size. `tokens.rounded.pill: 45` stays the search radius step; search height `45px` stays a component field. Keeping `15`, `20`, `30`, `45`, and `9999` as five keys, keeping `50%` beside `9999` as the source's own dual writing for chips and avatars, and keeping ≈25px as a body observation rather than a sixth YAML key, are derived editorial implementation inferences from the verified surfaces; they are not Patreon-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Every surface — page, cards, buttons, nav |
| Hairline (Level 1) | `1px solid #cccccc` border | Card outlines, dividers |
| Photographic (Level 2) | Full-bleed image with text overlay | Hero / section depth comes from imagery |
| Color band (Level 3) | Full-width saturated background (`#94bbff` / `#71a0ff` / `#9fb08b`) | Expressive emphasis, creator-energy moments |

YAML `tokens.shadow.none` is `"none"`. Live inspection found `box-shadow: none` across nav, hero CTAs, headings, and pricing cards. The table rows and that live `box-shadow: none` sentence are the source's own. Readings of Patreon as a deliberately shadow-free system, of depth as communicated entirely through full-bleed documentary photography, stark black/white contrast of inverting sections, and expressive color bands, of hairline `#cccccc` borders as the separator for white cards, and of emphasis as reaching for scale, photography, or a saturated color band — never elevation — are a derived editorial implementation inference from the verified surfaces; they are not Patreon-authored or a separately published UI specification.

### Motion

Source-stated duration roles. The source HTML comment attaches live inspect to token-level claims in §1–9; §15 sits in the philosophy layer (sections 10–15) and is not in the live-inspect list. Treating §15 as philosophy-layer rather than live-inspect, treating the duration table, easing names, morphing-logo / variable-wordmark / ambient-color-transformation / pill-scale-opacity / bands-reveal-from-below readings, and reduced-motion line as source-stated rather than computed CSS, treating the omitted `ease-exit` curve as matching the legacy spec-template `ease-exit` example, and treating the omitted `ease-enter` and `ease-standard` curves as unattributed, is a derived editorial implementation inference from the verified surfaces; it is not Patreon-authored or a separately published UI specification.

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button/chip press, focus |
| `motion-standard` | 240ms | Card/section reveal, sheet, dropdown |
| `motion-slow` | 400ms | Band-to-band scroll transitions, hero reveals |
| `motion-brand` | 600ms+ | Morphing logo / wordmark density shifts, ambient color transformation |

Source-stated easing names (uncomputed cubic-bezier omitted):

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | omitted (unattributed cubic-bezier; source-stated name only) | Arriving — bands, cards, sheets |
| `ease-exit` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-exit` example) | Dismissals |
| `ease-standard` | omitted (unattributed cubic-bezier; source-stated name only) | Two-way transitions |

Patreon is explicitly a "motion-first brand for a digital-first world" — that phrase is from Patreon's own brand announcement, kept as written. The source records the signature as the morphing logo and the variable wordmark, which shift density and softness by context (thin to spotlight the creator, heavier to spotlight Patreon), and ambient color transformation across expressive bands. Interactive UI motion stays quiet and functional: pill controls respond with a subtle scale/opacity shift; bands reveal from below at `motion-standard / ease-enter`. The brand-level morphing and color transformation live in a slower, ambient register (`motion-brand`). Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the logo/wordmark hold a static form; the product remains fully functional. The announcement phrase, the density-shift rule, the duration-token names in those sentences, and the reduced-motion line are the source's own. Readings of motion as a first-class identity element rather than decoration, of interactive UI motion as quiet and functional, and of brand-level morphing as a slower ambient register, are a derived editorial implementation inference from the verified surfaces; they are not Patreon-authored or a separately published UI specification.

Exact cubic-bezier curves are unattributed and remain omitted rather than promoted. Do not promote an easing curve, animation name, transition property, or a duration beyond the tables above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record's font evidence into classes. The sorting, treating system sans fallbacks as fallbacks rather than a second identity family, treating Oracle as canonical here because the live scan and the Dinamo partner page agree, and refusing to substitute a system font while calling it Oracle, are derived editorial implementation inferences from the verified surfaces; they are not Patreon-authored or a separately published UI specification. The observation inside each row stands on its own.

| Evidence class | Resolution |
|---|---|
| Official product-use | Dinamo's custom page records Oracle as the custom variable typeface for Patreon, including a variable, ever-shifting wordmark. Patreon's 2023 brand announcement credits Dinamo for that typeface. |
| Live computed surface-use | Playwright `getComputedStyle` on `https://www.patreon.com` and `https://www.patreon.com/pricing` found Oracle on 1,556 elements and effectively nothing else. |
| Official distributed asset | Oracle is Dinamo's custom variable typeface for Patreon. This reconstruction does not host a live specimen file. |
| Declared fallback | YAML / §3 fallback list: `"Noto Sans JP/KR/SC/TC"`, `"Helvetica Neue"`, `Helvetica`, `Arial`, `sans-serif`. Those faces are fallbacks, not the brand face. |
| License | No Oracle licence string is recorded in the source. That field is omitted rather than filled. |

### Family

- **Display & Body:** `Oracle` (Dinamo's custom variable typeface for Patreon). YAML `tokens.typography.family.display` and `tokens.typography.family.body` both write `Oracle`.
- **Fallback:** `"Noto Sans JP/KR/SC/TC"`, `"Helvetica Neue"`, `Helvetica`, `Arial`, `sans-serif`. Those faces are fallbacks, not Oracle.
- **Variable axis:** Oracle ships a full variable weight range; the brand uses an adaptive wordmark that "shifts in density and softness depending on its context" — thin to spotlight the creator, heavier to spotlight Patreon.

One typeface does every job — there is no separate UI font. Do not present `"Noto Sans JP/KR/SC/TC"`, `"Helvetica Neue"`, `Helvetica`, `Arial`, or `sans-serif` as Oracle. Do not replace Oracle with a different claimed family. Reading computed visible use plus the Dinamo partner credit as the reason Oracle is the UI family here, and refusing to extend the fallback list into a second identity family, is a derived editorial implementation inference from the verified surfaces; it is not Patreon-authored or a separately published UI specification.

### Type roles

YAML writes unitless line heights and design-intent sizes. Source §3 writes the same roles with live computed sizes, px tracking, and ≈ -0.06em. Both writings stay. Unitless ratios stay ratios and are never converted to a replacement px (A1a). Pairing each role to the token-set path named beside it, keeping YAML `use` strings verbatim, keeping the longer §3 live-computed / tracking / notes column beside them, and keeping type sizes off spacing and radius steps, are derived editorial implementation inferences from the verified surfaces; they are not Patreon-authored or a separately published UI specification.

*Live computed sizes read ≈1.5× the design size because the marketing site enlarges its rem root; the proportions and weights are exact.* That sentence is the source's own.

| Role | Font | Size (design) | Live computed | Weight | Line height | Letter spacing | Token-set use | Notes |
|---|---|---:|---:|---:|---:|---|---|---|
| Display Hero | Oracle | ≈125px | 187.5px | 250 | 0.98 | -7.5px (≈ -0.06em) | Hero wordmark headline, Oracle ultra-light (live computed 187.5px @1.5× root) | Hero wordmark headline, ultra-light. Token-set path `tokens.typography.display-hero`. |
| Display Section | Oracle | ≈85px | 127.5px | 250 | 0.87 | -5.1px (≈ -0.06em) | Section display headline, Oracle ultra-light (live 127.5px) | Section display headlines. Token-set path `tokens.typography.display-section`. |
| Stat Figure | Oracle | ≈48px | 72px | 250 | 0.80 | -1.92px | Big stat figure e.g. '10%' (live 72px) | Big numbers ("10%"). Token-set path `tokens.typography.stat`. |
| Label Large | Oracle | ≈20px | 30px | 400 | 1.50 | normal | Section label / eyebrow, Oracle (live 30px) | Section label / eyebrow. Token-set path `tokens.typography.label-lg`. Size `20` is not `tokens.rounded.md: 20`. |
| Subhead | Oracle | ≈15px | 22.5px | 400 | 1.33 | -0.3px | Feature subheading, Oracle (live 22.5px) | Feature subheading. Token-set path `tokens.typography.subhead`. |
| Body | Oracle | ≈15px | — | 400 | 1.50 | normal | Body / card copy, Oracle | Card / body copy. Token-set path `tokens.typography.body`. |
| Nav | Oracle | ≈9px | 13.5px | 400 | normal | normal | Nav item label, Oracle (live 13.5px) | Top nav item labels. Token-set path `tokens.typography.nav`. YAML has no numeric lineHeight or tracking on this role. |
| Button | Oracle | ≈9px | 13.5px | 350 | normal | normal | Button / CTA label, Oracle (live 13.5px) | CTA / button labels. Token-set path `tokens.typography.button`. YAML has no numeric lineHeight or tracking on this role. |

The following type-rule readings (one typeface, full range; ultra-light as signature; scale is the hierarchy; tight display tracking) are a derived editorial implementation inference from the verified surfaces; they are not Patreon-authored or a separately published UI specification. Oracle does display, body, nav, and buttons. The hierarchy comes from weight (250 vs 400) and dramatic scale, not from font switching. Weight 250 on giant headlines is the brand's most distinctive choice — billboard-scale type that doesn't shout. Heavier weights are reserved for the adaptive wordmark when Patreon needs the spotlight. The jump from ≈125px display to ≈15px body is enormous and intentional — the headline is a graphic element, the body recedes. ≈ -0.06em on display sizes compresses the ultra-light letters into a cohesive block; body text returns to normal tracking.

### Assets

- Catalog favicon: `https://www.google.com/s2/favicons?domain=patreon.com&sz=128`. Frontmatter records `logo.type: favicon`.
- Oracle is Dinamo's custom variable typeface for Patreon; the partner page is `https://abcdinamo.com/custom/patreon`. This reconstruction does not host a live specimen file.
- Full-bleed documentary photography of real creators is first-party marketing content on the captured surfaces; do not replace it with invented brand-color decoration.
- The 2023 mark has no exact canonical form, in Patreon's own words. A planned tool letting creators render the Patreon mark in their own colors, textures, and motion is named in the source narrative; it is not a harvested asset file here.

Reading the Google s2 favicon URL as a catalog identity pointer rather than a Patreon-hosted brand file, reading the Dinamo URL as the official typeface-partner page rather than a live specimen, reading creator photography as not replaceable with invented decoration, and reading the planned creator-mark tool as a source-narrative name rather than a harvested asset file here, are derived editorial implementation inferences from the verified surfaces; they are not Patreon-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Preserving the source state contract here while the catalog graph is not adopted is a derived editorial implementation inference from the verified surfaces; it is not Patreon-authored or a separately published UI specification. Hex values and geometry in the harvested components remain source-stated.

The following classification of the source §14 table as philosophy-layer implementation guidance (sections 10–15), not live-inspect chrome paints copied onto harvested CTAs, is a derived editorial implementation inference from the verified surfaces; it is not Patreon-authored or a separately published UI specification. The source HTML comment attaches live inspect to token-level claims in §1–9. These rows describe empty/loading/error/success/skeleton/disabled treatments. They are not copied onto harvested CTAs as computed paints.

| State | Treatment |
|---|---|
| **Empty (no creators / no posts yet)** | White canvas, single Obsidian (`#1a1a1a`) line in Oracle explaining the empty state, with one black pill CTA to get started. No illustration clutter — restraint is the brand. |
| **Empty (search, no results)** | Muted Grey (`#999999`) single line in Oracle: nothing found, with a path to adjust the query. Calm and plain. |
| **Loading (page / feed)** | Flat skeleton blocks at final dimensions, 30px radius, hairline `#cccccc` outline, no shadow shimmer — consistent with the shadow-free system. |
| **Loading (in-place)** | Subtle progress within the control; previous content stays visible. No spinner-blocking. |
| **Error (action failed)** | Inline message in Obsidian (`#1a1a1a`) Oracle with a plain-language explanation and a retry. No generic "Something went wrong" alone. |
| **Error (form validation)** | Field-level message below the input describing what is valid, not just "Required". |
| **Success (membership / payment)** | Brief inline confirmation in calm Oracle tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#cccccc`-outlined blocks at final dimensions, 30px radius, flat pulse. |
| **Disabled** | Reduced-opacity surface and `#999999` text; pill geometry and monochrome preserved. |

Characterizations in that table such as "No illustration clutter — restraint is the brand", "Calm and plain", "no shadow shimmer — consistent with the shadow-free system", "No spinner-blocking", "No generic \"Something went wrong\" alone", "not just \"Required\"", "No celebratory emoji", and "pill geometry and monochrome preserved" are a derived editorial implementation inference from the verified surfaces; they are not Patreon-authored or a separately published UI specification.

The following applicability note, every interactive-kind verdict, every applicability verdict, the reason given for either, the kind-omission on Pricing / Feature Card and Expressive Accent Band, the refusal to treat this as a complete state-coverage claim, attaching a `Primitive type` line only when the source YAML records that type on that component, refusing a §4-only component outside the eight token-set records, treating generic Focus as not `focus-visible` evidence, treating the named hover `rgba(255,255,255,0.16)` as generic hover rather than keyboard-focus treatment, refusing absence of a capture as a `not-applicable` reason, and letting loading / error / success follow the control's product role rather than its primitive kind, are a derived editorial implementation inference from the verified surfaces; they are not Patreon-authored or a separately published UI specification. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. The source never records `focus-visible`. Named nav and outline hover `rgba(255,255,255,0.16)` is generic hover, not that keyboard-focus treatment. The `focus-visible` row does not carry a colour. A later generic Focus observation would not be `focus-visible` evidence. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. This is not a complete state-coverage claim.

A `Primitive type` line is attached only when the source YAML records that type on that component. The eight token-set records are `button-primary-dark`, `button-primary-light`, `button-outline`, `nav-item`, `search-input`, `card-pricing`, `chip-translucent`, and `accent-band`. There is no §4-only component outside that set.

### Primary (on light surface)

- Role: Primary CTA on white surfaces — "Get started" on pricing/feature sections
- Primitive type: `button` · Kind: interactive
- Background: `#000000`
- Text: `#ffffff`
- Border: `1px solid #000000`
- Radius: `30px`
- Padding: `15px 21px`
- Height: `47px`
- Font: `9px / 350 Oracle`
- Token-set use: Primary CTA on light surfaces — 'Get started'
- §4 Use: Primary CTA on white surfaces — "Get started" on pricing/feature sections
- Token-set path: `tokens.components.button-primary-dark` (`type`, `bg`, `fg`, `radius`, `padding`, `height`, `font`, `border`, `use`)
- Observed: default only
- Field note: Keeping this control's `#000000` fill off the dark-hero primary's `#ffffff` fill, keeping height `47px` off search height `45px`, keeping radius `30px` as `tokens.rounded.lg` on this control rather than as `tokens.rounded.pill: 45`, and keeping padding `15px 21px` off `tokens.rounded.sm: 15` and off `tokens.spacing` steps, is a derived editorial implementation inference from the verified surfaces; it is not Patreon-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on light pricing/feature surfaces |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted. Source §14 records a system Disabled row; that row is not copied here as a computed paint |
| loading | not-applicable | The light-surface primary CTA opens a destination ("Get started"); it commits no operation in place |
| error | not-applicable | A destination CTA does not report a failed request on itself |
| success | not-applicable | Reaching the destination is not an operation this button reports as success |

### Primary (on dark / photo hero)

- Role: Primary CTA on dark heroes — "Get Started" in the nav over photography
- Primitive type: `button` · Kind: interactive
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #ffffff`
- Radius: `30px`
- Padding: `15px 21px`
- Height: `47px`
- Font: `9px / 350 Oracle`
- Token-set use: Primary CTA on dark/photo hero — 'Get Started'
- §4 Use: Primary CTA on dark heroes — "Get Started" in the nav over photography
- Token-set path: `tokens.components.button-primary-light` (`type`, `bg`, `fg`, `radius`, `padding`, `height`, `font`, `border`, `use`)
- Observed: default only
- Field note: Keeping this control's `#ffffff` fill off the light-surface primary's `#000000` fill, keeping the quoted label "Get Started" unmerged from "Get started" on the light-surface primary, and keeping the two primaries as separate components that share radius, padding, height, and font, is a derived editorial implementation inference from the verified surfaces; it is not Patreon-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on dark/photo heroes |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted. Source §14 records a system Disabled row; that row is not copied here as a computed paint |
| loading | not-applicable | The dark-hero primary CTA opens a destination ("Get Started"); it commits no operation in place |
| error | not-applicable | A destination CTA does not report a failed request on itself |
| success | not-applicable | Reaching the destination is not an operation this button reports as success |

### Outline (on dark)

- Role: Secondary actions on dark — "Log in", "Updates"
- Primitive type: `button` · Kind: interactive
- Text: `#ffffff`
- Border: `1px solid #ffffff`
- Radius: `30px`
- Padding: `15px 21px`
- Height: `47px`
- Font: `9px / 350 Oracle`
- Hover: fill shifts to `rgba(255,255,255,0.16)`
- Token-set use: Secondary outline on dark — 'Log in', 'Updates'
- §4 Use: Secondary actions on dark — "Log in", "Updates"
- Token-set path: `tokens.components.button-outline` (`type`, `fg`, `radius`, `padding`, `height`, `border`, `font`, `use`)
- Observed: default, plus the named hover fill
- Field note: Keeping the named hover fill `rgba(255,255,255,0.16)` as this control's hover and as the nav-item hover / chip default fill that share the same rgba, rather than collapsing those three uses into one token, is a derived editorial implementation inference from the verified surfaces; it is not Patreon-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on dark chrome |
| hover | applicable | Pointer-web button; named treatment: fill shifts to `rgba(255,255,255,0.16)` |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted. Source §14 records a system Disabled row; that row is not copied here as a computed paint |
| loading | not-applicable | "Log in" / "Updates" open a destination; the control commits no operation in place |
| error | not-applicable | A destination CTA does not report a failed request on itself |
| success | not-applicable | Reaching the destination is not an operation this button reports as success |

### Navigation item

- Role: Top nav menu item on dark header
- Primitive type: `tab` · Kind: interactive
- Text: `#ffffff` on dark
- Radius: `30px` on item hit-area
- Padding: `11px 18px`
- Height: `47px`
- Font: `9px / 400 Oracle`
- Active / hover: `underline / hover bg rgba(255,255,255,0.16)`
- Background of the bar: `#000000` (dark photo header) or `#ffffff`
- Token-set use: Top nav menu item on dark header
- §4 Use: Top nav ("Creators", "Features", "Pricing", "Resources", "Updates") with the "PATREON" wordmark left-aligned and "Get Started" pill right-aligned
- Token-set path: `tokens.components.nav-item` (`type`, `fg`, `radius`, `padding`, `height`, `font`, `active`, `use`)
- Observed: default, plus the named hover / underline
- Field note: Keeping nav font weight `400` off button weight `350`, keeping padding `11px 18px` off button padding `15px 21px`, keeping the "PATREON" wordmark and the "Get Started" pill as adjacent harvested chrome rather than as this tab's anatomy, and keeping `rgba(255,255,255,0.16)` hover unmerged from the outline-button hover that shares the rgba, is a derived editorial implementation inference from the verified surfaces; it is not Patreon-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the dark header |
| hover | applicable | Pointer-web tab; named treatment: underline / hover bg `rgba(255,255,255,0.16)` |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A nav item can be unavailable; visual treatment omitted. Source §14 records a system Disabled row; that row is not copied here as a computed paint |
| loading | not-applicable | A top-nav item opens a destination ("Creators", "Features", "Pricing", "Resources", "Updates"); it commits no operation in place |
| error | not-applicable | A destination tab does not report a failed request on itself |
| success | not-applicable | Reaching the destination is not an operation this tab reports as success |

### Find-a-Creator Search

- Role: Pill search field on the dark header
- Primitive type: `input` · Kind: interactive
- Text: `#ffffff`
- Radius: `45px`
- Height: `45px`
- Font: `9px / 350 Oracle`
- Fill: translucent `rgba(255,255,255,0.16)`
- Token-set use: 'Find a Creator' pill search on dark, translucent fill rgba(255,255,255,0.16)
- §4 Use: Pill search field on the dark header; translucent `rgba(255,255,255,0.16)` fill
- Token-set path: `tokens.components.search-input` (`type`, `fg`, `radius`, `height`, `font`, `use`)
- Observed: default only
- Field note: Keeping radius `45px` as `tokens.rounded.pill` on this control, keeping height `45px` as this control's height rather than as that same rounded step, and keeping font weight `350` with the buttons rather than with nav weight `400`, is a derived editorial implementation inference from the verified surfaces; it is not Patreon-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the dark header |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Input control; visual treatment omitted. Source §14 records a system Disabled row; that row is not copied here as a computed paint |
| loading | not-applicable | The field accepts a query; it does not commit an operation whose in-progress state it could report on itself |
| error | applicable | A form field can fail validation; visual treatment omitted. Source §14 names a form-validation row and an empty-search row; those rows are not copied here as computed paints |
| success | not-applicable | The field does not complete a search on itself |

### Pricing / Feature Card

- Role: Shadow-free card with hairline outline on white surfaces
- Primitive type: `card`
- Background: `#ffffff`
- Text: `#1a1a1a`
- Border: `1px solid #cccccc`
- Radius: `30px`
- Token-set use: Pricing / feature card — shadow-free, hairline outline
- §4 Use: Shadow-free card with hairline outline on white surfaces
- Token-set path: `tokens.components.card-pricing` (`type`, `bg`, `fg`, `radius`, `border`, `use`)
- Observed: default only
- Field note: Keeping `#ffffff` as this card's fill and Canvas, keeping `#1a1a1a` as this card's copy and Obsidian Ink, and keeping radius `30px` as `tokens.rounded.lg` on this card rather than as search `45px`, is a derived editorial implementation inference from the verified surfaces; it is not Patreon-authored or a separately published UI specification.

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld. Withholding kind and a map because the source supplies no interaction evidence is a derived editorial implementation inference from the verified surfaces; it is not Patreon-authored or a separately published UI specification.

### Translucent Utility Chip

- Role: Language selector / utility chip on dark
- Primitive type: `badge` · Kind: interactive
- Text: `#ffffff`
- Radius: `9999px`
- Font: `9px / 400 Oracle`
- Fill: `rgba(255,255,255,0.16)`
- Token-set use: Language / utility chip on dark, fill rgba(255,255,255,0.16)
- §4 Use: Language selector / utility chip on dark; `rgba(255,255,255,0.16)` fill
- Token-set path: `tokens.components.chip-translucent` (`type`, `fg`, `radius`, `font`, `use`)
- Observed: default only
- Field note: Keeping radius `9999px` as `tokens.rounded.full` on this chip, keeping that `9999px` beside the source's `50%` writing for circular avatars rather than rewriting one as the other, and keeping this chip's default fill `rgba(255,255,255,0.16)` unmerged from the outline-button / nav-item hover that share the rgba, is a derived editorial implementation inference from the verified surfaces; it is not Patreon-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on dark chrome |
| hover | applicable | Pointer-web chip; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A language / utility chip can be unavailable; visual treatment omitted |
| loading | not-applicable | A language / utility chip selects a setting; it commits no operation in place |
| error | not-applicable | The chip does not report a failed request on itself |
| success | not-applicable | Selecting a language is not an operation this chip reports as success |

### Expressive Accent Band

- Role: Full-width periwinkle feature band — color as creator energy, rotating/contextual
- Primitive type: `card`
- Background: `#94bbff`
- Text: `#000000`
- Radius: `30px`
- Token-set use: Expressive periwinkle feature band — color as creator energy, not chrome
- §4 Use: Full-width periwinkle feature band — color as creator energy, rotating/contextual
- Token-set path: `tokens.components.accent-band` (`type`, `bg`, `fg`, `radius`, `use`)
- Observed: default only
- Field note: Keeping `#94bbff` as this band's fill and Periwinkle, not as Cornflower `#71a0ff`, Brand Blue `#002a57`, or Sage `#9fb08b`, and keeping radius `30px` as `tokens.rounded.lg` on this band, is a derived editorial implementation inference from the verified surfaces; it is not Patreon-authored or a separately published UI specification.

The source supplies no interaction evidence for this band, so kind and a state-applicability map are both withheld. Withholding kind and a map because the source supplies no interaction evidence is a derived editorial implementation inference from the verified surfaces; it is not Patreon-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Source §5 and §8, kept on the surfaces that established them. Reading the band-rhythm / photography-over-ornament / headline-as-graphic sentences as layout character, and reading the breakpoint table as the source's own named Mobile / Tablet / Desktop spans, is a derived editorial implementation inference from the verified surfaces; it is not Patreon-authored or a separately published UI specification.

### Spacing (layout restatement)

Base unit: 4px. Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px. Button padding lands at 15px 21px (live); sections breathe with 64px+ vertical gaps so full-bleed photography and the billboard headline have room.

### Grid & Container

- Full-bleed photographic heroes with the oversized Oracle headline overlaid in the lower-left or spanning the width
- Centered content columns for feature copy and pricing
- Alternating full-width bands: black sections, white sections, and expressive color bands (`#94bbff`, `#71a0ff`, `#9fb08b`) for rhythm
- Pricing cards group at 30px radius with hairline outlines

### Whitespace

- **Photography over ornament**: the visual richness comes from real human creator photography, not from interface decoration. Whitespace frames the photo and the headline.
- **Band rhythm**: the page reads as a sequence of full-width bands (black / white / color) rather than a card grid — cinematic, scroll-driven, editorial.
- **Headline as graphic**: the ultra-light billboard headline is treated as a layout element in its own right, not just a label.

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, billboard headline compresses, photo heroes stack |
| Tablet | 640-1024px | Moderate padding, 2-up feature/pricing cards |
| Desktop | 1024-1440px | Full-bleed heroes, multi-band layout, oversized headlines |

### Touch Targets

- Buttons at 47px height with 15px 21px padding — comfortably tappable pills
- Search input at 45px height, full pill
- Nav items at 47px height with generous spacing

### Collapsing Strategy

- Hero: billboard Oracle headline scales down on mobile, weight 250 maintained
- Bands: black / white / color full-width treatment maintained; internal padding reduces
- Pricing/feature cards: multi-column → stacked single column, 30px radius retained
- Photography: full-bleed heroes keep aspect via cover-crop, text overlay reflows

### Image Behavior

- Full-bleed creator photography is the load-bearing visual — kept edge-to-edge at all sizes, no shadow
- Cards maintain 30px radius and hairline outline across breakpoints
- Color bands maintain full-width saturated treatment

<!-- design-md:section content-locales -->
## 6. Content & Locales

Patreon's voice is **warm, creator-first, and quietly confident** — it speaks to and about creators, not about itself. Calling that register warm, creator-first, and quietly confident, and classifying the tone table plus forbidden register as source-stated marketing-surface voice rather than as a complete product-microcopy guide, is a derived editorial implementation inference from the verified surfaces; it is not Patreon-authored or a separately published UI specification. The 2023 brand framing makes this explicit: the company describes its goal as building "a visual language… one as diverse and expressive as the creators it represents," and its photography brief is about "heroizing creators in a way that feels inviting and warm." Headlines are declarative and human ("Where podcasts grow", "Your wildest creative reality", "Make it making art", "Creator is now a career"), and CTAs are direct and low-friction ("Get started", "Get Started for Free").

| Context | Tone |
|---|---|
| Hero headlines | Declarative, human, creator-centered. "Where podcasts grow." "Your wildest creative reality." |
| Feature headlines | Plain-benefit, confident. "Complete creative control." "Earning made easy." |
| CTAs | Direct, low-pressure. "Get started", "Start Your Patreon for Free". |
| Pricing copy | Plain and reassuring. "Secure payments handled for you." "We handle taxes." "No setup headaches." |
| Brand / mission | Mission-framed, generous — centers creators over the company. |

**Voice samples (verbatim from live surfaces):**

- "Where Creator Communities Thrive" — homepage title (mission-framed positioning). *(verified live 2026-06-17)*
- "Start Your Patreon for Free" — pricing hero headline (low-friction onboarding). *(verified live 2026-06-17)*
- "Our goal is not to be defined by a shape or a color, but rather by a visual language… one as diverse and expressive as the creators it represents." — Patreon brand announcement. *(verified via news.patreon.com 2026-06-17)*

Caption labels such as "mission-framed positioning" and "low-friction onboarding" are the source's own citation character. Treating those captions as citation character rather than as additional microcopy, and refusing additional synthetic voice samples, is a derived editorial implementation inference from the verified surfaces; it is not Patreon-authored or a separately published UI specification.

**Forbidden register**: corporate self-promotion that centers the platform over creators, hype-laden urgency, fear-based monetization pitches, and anything that treats color or logo as a rigid brand asset rather than a creator canvas.

The language / utility chip on dark is a captured control.

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

These decisions are unnamed values, not permissions to invent. The list names only fields the source itself left unresolved. Reading the list as a catalog of those unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not Patreon-authored or a separately published UI specification.

- exact cubic-bezier values for `ease-enter` / `ease-exit` / `ease-standard` (unattributed; names and uses kept)
- `focus-visible` visual treatments
- hover visual treatments on the two primary CTAs (outline and nav-item hover fills are named; the two primaries are not)
- getdesign.md record (the source names the lookup as no entry / "No designs found")
