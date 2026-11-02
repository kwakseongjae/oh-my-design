---
name: Mailchimp
colors:
  primary: '#ffe01b'
  foreground: '#231e15'
  canvas: '#ffffff'
  surface: '#f5f5f5'
  footer-surface: '#e7b75f'
  foreground-secondary: '#403b3b'
  hairline: '#bcbab6'
  teal: '#004e56'
  focus-ring: '#4bc4c2'
  on-primary: '#231e15'
typography:
  heading-h1-token:
    fontSize: 48px
    lineHeight: 1
    use: Desktop root --h1-size/--h1-line; not the hero computed size
  heading-h2-token:
    fontSize: 40px
    lineHeight: 1
    use: Desktop root --h2-size/--h2-line
  heading-h3-token:
    fontSize: 32px
    lineHeight: 1.25
    use: Desktop root --h3-size/--h3-line
  heading-h5-token:
    fontSize: 24px
    lineHeight: 1.33333
    use: Desktop root --h5-size/--h5-line
  hero-action:
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.6
    use: Computed Tally request on hero Start Free Trial; no loaded Tally 600 face
  header-action:
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.5
    use: Header Start Free Trial and Log In, live Tally
  navigation:
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.1
    use: Pricing and Search links, live Tally
  footer-link:
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.35
    use: Survey footer links, live Tally
  legal-link:
    fontSize: 11px
    fontWeight: 700
    lineHeight: 1.454545
    use: 'Survey footer Privacy/Terms links: 16px line height'
rounded:
  nav: 3px
  header-action: 26px
  hero-action: 40px
  integration-tile: 16px
  arrow-link: 32px
spacing:
  step-1: 4
  step-2: 8
  step-3: 16
  step-4: 24
  step-5: 40
  step-6: 64
  step-7: 80
  step-8: 96
  action-block: 12
components:
  hero-trial:
    type: button
    backgroundColor: '#ffe01b'
    textColor: '#231e15'
    rounded: 40px
    padding: 12px 24px
    height: 48px
    typography: 15px/600 Tally
    shadow: rgb(35, 30, 21) 0px 0px 0px 1px
    hover: 'transform: matrix(1, 0, 0, 1, 0, -5.625); box-shadow: rgb(35, 30, 21) 0px 0px 0px 1px, rgb(35, 30, 21) 0px 5.625px 0px 0px'
    pressed: 'transform: matrix(1, 0, 0, 1, 0, -1.625); box-shadow: rgb(35, 30, 21) 0px 0px 0px 1px, rgb(35, 30, 21) 0px 3.25px 0px 0px'
    focus: '::after outline 2px solid #4bc4c2, offset 3px; transform: matrix(1, 0, 0, 1, 0, -1.625); additional depth shadow 0px 3.25px 0px 0px #231e15'
    use: Hero Start Free Trial link to /pricing/marketing/; 343px wide, 48px high; yellow surface over the photograph
  header-trial:
    type: button
    backgroundColor: '#ffe01b'
    textColor: '#231e15'
    rounded: 26px
    padding: 12px 24px
    height: 43.5px
    typography: 13px/700 Tally
    shadow: rgb(35, 30, 21) 0px 0px 0px 1px
    hover: 'transform: matrix(1, 0, 0, 1, 0, -4.875); box-shadow: rgb(35, 30, 21) 0px 0px 0px 1px, rgb(35, 30, 21) 0px 4.875px 0px 0px'
    pressed: 'transform: matrix(1, 0, 0, 1, 0, -1.625); box-shadow: rgb(35, 30, 21) 0px 0px 0px 1px, rgb(35, 30, 21) 0px 3.25px 0px 0px'
    focus: '::after outline 2px solid #4bc4c2, offset 3px; transform: matrix(1, 0, 0, 1, 0, -1.625); additional depth shadow 0px 3.25px 0px 0px #231e15'
    use: Header Start Free Trial link; 140.4px wide; yellow surface on the white header
  login-secondary:
    type: button
    textColor: '#231e15'
    rounded: 26px
    padding: 12px 24px
    height: 43.5px
    typography: 13px/700 Tally
    shadow: rgb(35, 30, 21) 0px 0px 0px 1px
    hover: 'transform: matrix(1, 0, 0, 1, 0, -4.875); box-shadow: rgb(35, 30, 21) 0px 0px 0px 1px, rgb(35, 30, 21) 0px 4.875px 0px 0px'
    pressed: 'transform: matrix(1, 0, 0, 1, 0, -1.625); box-shadow: rgb(35, 30, 21) 0px 0px 0px 1px, rgb(35, 30, 21) 0px 3.25px 0px 0px'
    focus: '::after outline 2px solid #4bc4c2, offset 3px; transform: matrix(1, 0, 0, 1, 0, -1.625); additional depth shadow 0px 3.25px 0px 0px #231e15'
    use: Log In link; 85.6px wide; transparent surface on the white header
  nav-pricing:
    type: button
    textColor: '#231e15'
    rounded: 3px
    padding: 8px
    height: 30.3px
    typography: 13px/700 Tally
    hover: 'background-color: rgba(35, 30, 21, 0.05)'
    pressed: 'background-color: rgba(35, 30, 21, 0.05)'
    focus: 'background-color: rgba(35, 30, 21, 0.05); outline 2px solid #4bc4c2, offset 2px'
    use: Pricing navigation link, 59px wide; transparent at rest on the white header
  search-link:
    type: button
    textColor: '#231e15'
    rounded: 3px
    padding: 8px
    height: 36px
    typography: 13px/700 Tally
    hover: 'background-color: rgba(35, 30, 21, 0.05)'
    pressed: 'background-color: rgba(35, 30, 21, 0.05)'
    focus: 'background-color: rgba(35, 30, 21, 0.05); outline 2px solid #4bc4c2, offset 2px'
    use: Search navigation link, 36px wide; transparent at rest on the white header; an icon link, not an input
  card-link:
    type: card
    padding: 0px
    height: 482px
    typography: 16px/400 Tally
    hover: 'Parent article background #ffffff -> #ffe01b; link width 632px -> 842.7px, height remains 482px'
    pressed: 'Parent article background #ffffff -> #ffe01b; link width 632px -> 842.7px, height remains 482px'
    use: 'Design with ease card link: an empty transparent hit area on its white article, tabIndex=-1. Recorded geometry and font belong to that link, not the visible card heading. Parent article radius and padding unresolved; keyboard focus unmeasured'
fonts:
  roles:
    display: Means Web
    sans: Tally
    also-loaded: Graphik Web
---

# Design System Inspiration of Mailchimp

## Overview

### Visual Theme & Atmosphere

Mailchimp is an email and marketing automations platform for growing businesses. Its [company story](https://mailchimp.com/about/) traces it to the email service Ben Chestnut and Dan Kurzius developed alongside their web design agency, the Rocket Science Group, in Atlanta in 2001. The company describes its continuing purpose as helping smaller businesses gain capabilities that larger competitors already have.

The identity joins Cavendish Yellow, Peppercorn, the winking Freddie icon, and an editorial serif with functional sans-serif controls. The [brand-assets page](https://mailchimp.com/about/brand-assets/) names the two colors and requires the company name to be paired with Freddie. These are concrete identity anchors; the more expressive imagery can vary around them. In the [2018 redesign announcement](https://mailchimp.com/resources/new-brand-announcement-2018/), Mailchimp explains that it unified a customer experience that had grown in different directions while retaining its distinctive personality and encouraging customers' own expression.

The current homepage develops that identity with a photograph behind a large serif heading, italic emphasis, yellow calls to action, a white navigation bar, and Tally on the functional controls. Its hero presents Intuit Intelligence as a way to identify marketing opportunities. The measured headline is “Turn ideas into emails that connect.” Yellow also fills a recommendation card on hover: it is part of the page's expressive surfaces as well as its actions.

The button interaction is unusually physical. The hero action rises 5.625px on hover and leaves a hard Peppercorn depth shadow underneath; keyboard focus uses a turquoise outline on a pseudo-element. This is an observed part of the current expression, alongside the serif and the color pairing.

The measured surface is the English public homepage at `mailchimp.com/` (`lang="en"`), captured at 1440×1000. The reference describes this marketing surface. Company history and writing guidance come from the linked first-party pages.

#### Primary tasks

- Follow the hero's free-trial link to marketing pricing, or use the separate trial link in the header.
- Compare plans and contact allowances on the homepage.
- Explore email creation, ecommerce, SMS, and integrations through recommendation links.
- According to the [terms](https://mailchimp.com/legal/terms/), the platform supports managing contacts, marketing campaigns, text messaging, and websites. No completion-time claim is made for those tasks.

### Brand Narrative

Mailchimp began as a small-business email service alongside Chestnut and Kurzius's web-design agency. The [About page](https://mailchimp.com/about/) dates its founding to Atlanta in 2001 and explains its aim of making capabilities available to small businesses that otherwise faced oversized, expensive software. The [official bootstrapping article](https://mailchimp.com/resources/bootstrapping/) says the founders started it without outside funding; this reference does not extend that statement into an independently verified year-by-year financing history.

The [2018 design announcement](https://mailchimp.com/resources/new-brand-announcement-2018/) places the identity change in the context of expansion beyond email. It records changes to the logo, wordmark, typeface, color, photography, and illustration, including the lowercase c in Mailchimp. The stated goal was a recognizable system across customer accounts, the website, marketing, and support while preserving the brand's personality. It advocates authenticity, originality, and expressiveness.

Intuit's acquisition closed on **November 1, 2021**, according to the [completion announcement](https://mailchimp.com/newsroom/intuit-completes-mailchimp-acquisition/); the [co-founders page](https://mailchimp.com/about/founders/) describes the acquisition as $12 billion. The current public homepage connects that broader platform direction to Intuit Intelligence and email/SMS marketing. The terms still identify an Atlanta-addressed operating entity, The Rocket Science Group LLC d/b/a Mailchimp, with Intuit Inc. as parent.

Read the current design through those documented continuities: a business that broadened its tools and ownership while retaining named colors, Freddie, expressive imagery, and a recognizable editorial heading style. This is a synthesis of the cited history and live surface, not a claim that Mailchimp rejects a particular competing SaaS aesthetic.

### Principles

1. **Support growing businesses.** The company's history explicitly frames the product around giving smaller businesses capabilities enjoyed by larger competitors.
2. **Keep the identity recognizable while allowing expression.** The 2018 announcement explains both the need for coherence and the value of original, expressive branding.
3. **Make content understandable.** The writing guide puts clarity and the reader's circumstances ahead of entertainment.
4. **Preserve the measured interaction details.** The hard depth shadow, specific lift distances, and solid focus outlines are concrete parts of the current public controls. This is implementation guidance derived from observation, not a quoted company principle.
5. **Let yellow serve more than one role.** The site uses it for primary actions and a recommendation-card hover surface. A restriction to one exclusive CTA is not supported by the capture.

### Personas

No researched individual personas were established. The first-party homepage presents small business, ecommerce, nonprofit, professional services, and content-creator entry points; its footer includes an Agencies & Freelancers destination. The About page also describes serving marketing teams of different sizes and skill levels. These are documented audience categories, not evidence for invented ages, locations, purchase motivations, or task-success stories.

## Colors

Cavendish Yellow and Peppercorn are official color names. Their hex values below come from the live homepage, rather than a hex specification in the brand-assets prose.

| Role | Value | First-party or measured basis |
|---|---|---|
| Primary / Cavendish Yellow | `#ffe01b` | `--cta-background-color`; both trial links; recommendation article on hover |
| Foreground / Peppercorn | `#231e15` | `--copy-color`, `--heading-color`, `--cta-text-color`; paragraph ink ×25 |
| On primary | `#231e15` | Trial labels on yellow |
| Canvas | `#ffffff` | Header backing and recommendation article at rest; census backgrounds ×26 |
| Light surface | `#f5f5f5` | Background census ×4; the earlier collapsed-card assignment is unresolved |
| Footer surface | `#e7b75f` | Background census ×1; confirmed on the captured footer by three RGB pixel samples |
| Additional paragraph ink | `#403b3b` | Paragraph ink ×5; no official “Warm Charcoal” name established |
| Hairline color | `#bcbab6` | Border census ×2; exact prior pricing-card assignment is unresolved |
| Teal computed anchor color | `#004e56` | Census text ×5 and the empty recommendation-card link's computed rest color |
| Authored keyboard-focus ring | `#4bc4c2` | Solid 2px outlines on Pricing/Search and CTA `::after` |

The root link tokens are `--link-color: #231e15` and `--link-color-hovered: #231e15`. The Pricing link retains Peppercorn on hover, press, and focus. Do not apply teal to every link. The empty card overlay's computed color changes from `#004e56` to `#002023`; its visible card heading is a separate element whose ink was not measured by that control capture.

Navigation hover and press add `rgba(35, 30, 21, 0.05)` over the white header. Keyboard focus adds the solid turquoise outline while retaining that background. Other published root values are `--copy-color-light: rgba(35,30,21,.65)`, `--selection-background-color: rgba(255,224,27,.15)`, and `--link-background-hovered: rgba(255,224,27,.65)`. These declarations do not establish an observed selection state.

The whole-page census also contains `#000000` text ×89; its earlier dense-card assignment was not identified. The warm gold `#e7b75f` footer is corroborated by the full-page capture: RGB (231, 183, 95) at (20, 6092), (20, 6492), and (20, 6772) in its 1433×6892px image. No illustration role or official “Sand” color name was established. The `#241c15` background was measured on the cookie banner; it is not included as a product-surface color token. The census includes overlays and third-party feedback UI, so an occurrence count alone does not identify a brand role.

## Typography

### Evidence classes

| Class | Verified evidence |
|---|---|
| Official product-use statement | None of the opened first-party prose pages names a font for the authenticated application. Marketing-page measurements do not establish that application's typography. |
| Live-loaded | `Means Web` 400 normal and italic; `Graphik Web` 500 normal; `Tally` 400, 500, and 700 normal, from `document.fonts` in the survey. |
| Live surface declaration | The body and first button declare Tally first; the h1 declares Means Web first. The measured trial, navigation, and footer controls use Tally. |
| Officially served assets | The page's `@font-face` rules point to first-party WOFF2 files beneath `https://mailchimp.com/cdn/product/fonts/mailchimp/`, in the `means/`, `graphik/`, and `tally/1.0.2/` directories. This establishes asset serving, not redistribution rights. No font file was downloaded. |
| Declared-only faces | Means 300 normal/italic and 500 normal/italic; Graphik 300 normal/italic, 400 normal/italic, 500 italic, 600 normal/italic; Tally 400/500/700 italic. These were declared but were not in the loaded list. No specimens are assigned to those faces. |
| Unresolved | A general application font policy, a font redistribution license, current h1 tracking/weight/size, and the browser's resolution of the hero's requested Tally 600 weight. |

Substitute: none chosen.

Means Web remains the serif heading family on this public surface. Tally now leads the body stack and supplies the measured controls. Graphik Web is still loaded at 500; that fact does not establish it as the current general body face.

### Measured control metrics

| Role | Family | Size / requested weight | Line height | Tracking |
|---|---|---|---|---|
| Hero trial link | Tally | 15px / 600 | 24px (1.6) | normal |
| Header trial and Log In | Tally | 13px / 700 | 19.5px (1.5) | normal |
| Pricing and Search | Tally | 13px / 700 | 14.3px (1.1) | normal |
| Footer product links | Tally | 13px / 400 | 17.55px (1.35) | not recorded in the survey |
| Footer Privacy / Terms | Tally | 11px / 700 | 16px (approximately 1.454545) | not recorded in the survey |

Tally 600 is a computed request on the hero CTA. The loaded-face list contains 400, 500, and 700, not a separate 600 face. Do not infer a new font file from that request.

### Root heading and copy tokens

The effective desktop root values are h1 `3rem` / line-height `1`, h2 `2.5rem` / `1`, h3 `2rem` / `1.25`, h4 `2rem` / `1.25`, h5 `1.5rem` / `1.33333`, and h6 `1.25rem` / `1.2`. Their pixel equivalents at the observed 16px rem basis are 48, 40, 32, 32, 24, and 20. These are root token values; the large photographic hero may override them, and its computed size was not collected.

The root regular-copy token is `1em` with line-height `1.5`. Info copy is `.8125rem` / `1.25`; legal copy `.6875rem` / `1.45455`. The empty card-link overlay inherits 16px/400 with 21.6px line-height, but that is not a measured paragraph or visible card-heading specimen. Do not apply the legacy 16px/1.35 claim to every paragraph.

## Layout

The desktop composition layers a compact Intuit brand strip, promotion strip, white navigation, a full-width photographic hero, recommendation cards, case studies, pricing, integrations, and footer links. This sequence is visible in the homepage capture and its surveyed controls.

The survey places the first two recommendation-card links at x=80 and x=728, each 632px wide: a 16px gap and a combined 1280px span. This measures that row, not a site-wide maximum container. After the dialogs close, the states capture has a 1425px layout area inside the 1440px browser viewport because a scrollbar is present; the first card's x-coordinate becomes 73px while its rest width remains 632px.

The effective root spacing steps, normalized to pixels, are:

| Custom property | Pixels |
|---|---|
| `--spacing-1` | 4 |
| `--spacing-2` | 8 |
| `--spacing-3` | 16 |
| `--spacing-4` | 24 |
| `--spacing-5` | 40 |
| `--spacing-6` | 64 |
| `--spacing-7` | 80 |
| `--spacing-8` | 96 |

`--module-padding` resolves to 80px and `--module-reducedPadding` to 40px. The stylesheet walk's first declarations contain a different spacing scale; use the effective root values for this captured desktop context. Buttons independently retain 12px vertical and 24px horizontal padding.

For provenance, those first-encountered `--spacing-1` through `--spacing-8` declarations normalize to 4, 8, 12, 16, 24, 32, 48, and 64px. The walk records one first declaration per property, so this list is not a second effective desktop scale.

Radius is component-specific: 3px for the measured nav links, 26px for header actions, 40px for the hero action, 16px on surveyed integration tiles, and 32px on surveyed arrow links. The recommendation overlay's 0px radius does not describe its article's outer shape.

### Responsive Behavior

Mobile/tablet layouts, breakpoint transitions, touch behavior, and reduced-motion behavior were not measured; only the 1440×1000 desktop surface is verified here.

## Elevation & Depth

The measured navigation links, card overlay, and card article have no rest shadow. The trial and login actions instead use the crisp one-pixel Peppercorn shadow ring. Their hover lift creates a hard, unblurred depth edge rather than a diffuse shadow: 5.625px on the hero and 4.875px in the header. Press and focus retain a smaller 3.25px depth edge.

The root publishes `--elevation-shadow-color: rgba(35,30,21,.15)`. That confirms a warm shadow color declaration, but not the legacy featured-card blur/spread recipe or a rule that only one card may be elevated. The verified component guidance is the measured action ring and hard depth treatment.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.hairline`: `rgb(35, 30, 21) 0px 0px 0px 1px`

## Motion & Easing

The trial and login links report a **300ms** transition for transform and box-shadow, using `cubic-bezier(0.5, 2.5, 0.7, 0.7)`. The elevated control point gives the timing curve an overshoot; this does not support the prior claim that this UI avoids overshoot.

Pricing and Search report **150ms** for background-color with `ease`. Their pointer samples settled with the background at 5% Peppercorn. The recommendation overlay itself reports `all 0s ease 0s`; the captured parent-color/width change does not establish an authored parent transition string.

Raw transition strings, copied as recorded in `states.json`:

- Hero trial, header trial, and Log In: `transform, box-shadow 0.3s, 0.3s cubic-bezier(0.5, 2.5, 0.7, 0.7), cubic-bezier(0.5, 2.5, 0.7, 0.7) 0s, 0s`
- Pricing and Search: `background-color 0.15s ease 0s`
- Recommendation overlay: `all 0s ease 0s`

Page reveals, sheets, application loading motion, and behavior under reduced-motion preferences remain unmeasured.

---

**Tier 1 sources:** [Live homepage](https://mailchimp.com/) and its 2026-11-02 survey/states captures; [nonsense-path control](https://mailchimp.com/zz-this-does-not-exist); [company story](https://mailchimp.com/about/); [brand assets](https://mailchimp.com/about/brand-assets/); [2018 redesign](https://mailchimp.com/resources/new-brand-announcement-2018/); [content voice and tone](https://styleguide.mailchimp.com/voice-and-tone/); [terms](https://mailchimp.com/legal/terms/); [co-founders](https://mailchimp.com/about/founders/); [bootstrapping](https://mailchimp.com/resources/bootstrapping/); [acquisition completion](https://mailchimp.com/newsroom/intuit-completes-mailchimp-acquisition/). Detailed measurements, source excerpts, legacy dispositions, and unresolved fields are in the companion verification and report files.

## Components

All six measured controls are links. Their pointer measurements followed closure of the personalization dialog and the cookie banner. No form or navigation was submitted. The rest, hover, pressed, and keyboard-focus crops are retained with the capture.

### Trial links and secondary action

| Control | Rest dimensions | Radius | Padding | Font | Rest treatment |
|---|---|---|---|---|---|
| Hero “Start Free Trial” | 343×48px | 40px | 12px 24px | Tally 15px/600 | `#ffe01b` / `#231e15`; 1px Peppercorn shadow ring |
| Header “Start Free Trial” | 140.4×43.5px | 26px | 12px 24px | Tally 13px/700 | `#ffe01b` / `#231e15`; same ring |
| Header “Log In” | 85.6×43.5px | 26px | 12px 24px | Tally 13px/700 | Transparent over `#ffffff`, `#231e15` label; same ring |

The rest ring is `rgb(35, 30, 21) 0px 0px 0px 1px`; the measured CSS border is `none`. Hero hover adds `rgb(35, 30, 21) 0px 5.625px 0px 0px` to that ring and changes the transform to `matrix(1, 0, 0, 1, 0, -5.625)`. The two header actions instead lift 4.875px and add a matching 4.875px hard shadow.

Pressed treatment on all three keeps the ring, adds a 3.25px downward hard shadow, and uses `matrix(1, 0, 0, 1, 0, -1.625)`. Keyboard focus uses the same lift and depth plus a `::after` outline of `2px solid #4bc4c2`, offset 3px. The element's own outline remains `none`; this is an authored pseudo-element ring. Background and label color remain unchanged in these measured states.

### Navigation and Search

Pricing is a 59×30.3px link; Search is a 36×36px icon link. Both have 3px radius, 8px padding, Tally 13px/700, 14.3px line-height, a transparent rest background on the white header, Peppercorn ink, no border, and no shadow.

Hover and press add `rgba(35, 30, 21, 0.05)`. Keyboard focus retains that fill and draws `2px solid #4bc4c2` at 2px offset on the link itself. There is no measured teal text change. Search's icon is a background sprite in `::before`; the tool compares its URL and positioning, not the pixels inside the external sprite. No search text input was present in the survey.

### Recommendation-card link

“Design with ease” is an empty transparent link overlay inside `article.spotlightCard.backgroundCoconut`, targeting `/solutions/content-creation-tools/`. Its rest hit area is 632×482px, with 0px radius and 0px padding on the overlay itself. It inherits Tally 16px/400 and 21.6px line-height. These are overlay metrics, not the article's visible text or outer corners.

Hover and press enlarge the link area to 842.7×482px and change its parent article's background from `#ffffff` to `#ffe01b`. The overlay's computed ink changes from `#004e56` to `#002023`. Its own background stays transparent and its border and shadow stay `none`. The visible heading's ink and the article's padding/radius are unresolved. Keyboard focus is **UNMEASURED**: the overlay has `tabIndex=-1` and was not reached within the 113-key Tab cycle.

### Other observed geometry

Survey integration links have 16px radius and 112px height. “View all case studies” and several other arrow links have 32px radius and 32px height. These are rest observations; they are not additional state-harvested components.

The surveyed “Customize my experience” button outside the dialog is 31.5px high, with 26px radius, 6px 16px padding, Tally 13px/700, a transparent background, and Peppercorn ink. This confirms a current small secondary-action shape; no hover, pressed, focus, or shadow recipe was collected for it.

The case-study section's separate “Start Free Trial” link is dark-filled at rest (`#231e15` with `#ffffff` text), 43.5px high, 26px radius, 12px 24px padding, and Tally 13px/700. This survey-only variant shows why the yellow hero/header recipe should stay scoped to those controls; its states were not measured.

No current trust-badge, 10px pricing-card, light-on-dark secondary-button, or radio-state recipe is published from the legacy claims without a matching measurement.

### States

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| Hero trial | −5.625px Y; adds 5.625px hard depth shadow | −1.625px Y; adds 3.25px depth shadow | Same lift/depth as pressed; `::after` 2px solid `#4bc4c2`, offset 3px |
| Header trial | −4.875px Y; adds 4.875px depth shadow | −1.625px Y; adds 3.25px depth shadow | Same lift/depth as pressed; same pseudo-element ring |
| Log In | −4.875px Y; adds 4.875px depth shadow | −1.625px Y; adds 3.25px depth shadow | Same lift/depth as pressed; same pseudo-element ring |
| Pricing | 5% Peppercorn background | Same measured fill as hover | Fill plus 2px solid `#4bc4c2`, offset 2px |
| Search link | 5% Peppercorn background | Same measured fill as hover | Fill plus 2px solid `#4bc4c2`, offset 2px |
| Design with ease overlay | Parent article becomes yellow; width 632→842.7px; computed link ink `#004e56`→`#002023` | Same measured changes as hover | UNMEASURED; not reached by Tab |

Each pointer state had the relevant `:hover` or `:active` flag true. All five measured keyboard states had `:focus-visible` true and no change persisting after blur. The tool compared self and pseudo-elements, descendants where present, and three ancestor levels; sibling content and the contents of external sprite files remain outside that scope.

Authenticated application empty, loading, error, success, skeleton, and disabled states were not observed or documented in the opened sources.

## Do's and Don'ts

### Do

- Pair the official yellow and Peppercorn with Freddie and the Mailchimp name, following the brand-assets usage guidance.
- Use the live-loaded Means Web and Tally evidence for this public-site reference; retain Graphik Web's separately loaded status.
- Distinguish the 48px/40px-radius hero action from the 43.5px/26px-radius header actions.
- Preserve the hard button depth shadow and the authored turquoise keyboard-focus indication.
- Allow yellow on recommendation-card hover as well as on primary actions.
- Keep writing direct, clear, and considerate of the reader's situation.

### Don't

- Recolor every link teal; the measured navigation keeps Peppercorn ink.
- Treat an empty card overlay's inherited font and color as its visible heading style.
- Turn root heading tokens into a claim about every rendered heading.
- Use the legacy generic motion scale or invent application loading, error, or disabled states.
- Alter the official logo files or combine the graphics with other graphics without the permission described on the brand-assets page.

## Voice & Tone

The [official content style guide](https://styleguide.mailchimp.com/voice-and-tone/) describes a plainspoken, genuine voice that translates confusing marketing language and uses dry humor. It prioritizes clarity over entertainment and tells writers to consider the reader's emotional state. The resulting guidance is practical: explain the task, make the language accessible, and let humor occur naturally.

| Context | Source-backed guidance or observed copy |
|---|---|
| General explanations | Educate without patronizing; make specialist terminology understandable. |
| Sensitive or confusing situations | Adjust tone to the reader's state of mind; clarity takes priority. |
| Humor | Keep it subtle and natural; avoid forced jokes, condescension, and exclusion. |
| Web actions | The measured labels include “Start Free Trial,” “Log In,” and “Customize my experience.” |
| Freddie | He smiles, winks, and sometimes high-fives; the guide says not to write in his voice because he does not talk. |

The guide recommends active voice, plain English, and positive language. The current homepage's opportunity-oriented hero and direct trial label provide live copy examples, without establishing a general prohibition on every kind of promotional language.

## Agent Prompt Guide

### Quick color reference

`#ffe01b` primary and card hover · `#231e15` foreground and CTA ring · `#ffffff` header/card backing · `#e7b75f` footer · `#4bc4c2` focus · `#403b3b` additional paragraph ink · `#f5f5f5` census light surface · `#bcbab6` census border · `#004e56` limited computed anchor use.

### Example component prompts

- “Build the measured hero action as a 343×48px link: yellow background, Peppercorn label, 40px radius, 12px 24px padding, Tally 15px with requested weight 600 and 24px line-height. Use the 1px Peppercorn shadow ring. On hover lift it 5.625px with a matching hard shadow. On press use the measured −1.625px transform and 3.25px depth shadow.”
- “Build the measured header Log In link at 85.6×43.5px, transparent over white, 26px radius, 12px 24px padding, Tally 13px/700, and a Peppercorn shadow ring. Its hover lift is 4.875px. Keyboard focus adds the 2px turquoise pseudo-element outline at 3px offset.”
- “Build the Pricing link at 59×30.3px with 3px radius and 8px padding. Retain Peppercorn ink. Hover and press add the 5% Peppercorn fill; focus adds a 2px turquoise outline at 2px offset.”

Use these as reconstructions of the measured public controls. No font substitute has been selected, and no unavailable face is given a specimen.
