---
name: Corca
colors:
  primary: '#056eb9'
  brand-light: '#419eff'
  brand-deep: '#163272'
  heading: '#1a2352'
  action: '#163272'
  action-hover: '#102654'
  action-soft: '#eef6ff'
  focus: '#163272'
  foreground: '#1a1a1a'
  secondary: '#526071'
  muted: '#626975'
  canvas: '#ffffff'
  surface-subtle: '#f5f7fb'
  surface-hover: '#eef2f7'
  intro: '#e1eaf7'
  border: '#e5e7eb'
  border-strong: '#cad7ea'
  on-dark: '#ffffff'
  on-dark-secondary: '#b7d7ff'
  on-dark-muted: '#7fa8d6'
  accent: '#419eff'
  ink: '#1a2352'
typography:
  action:
    fontSize: 15px
    fontWeight: 650
    use: Measured hero action links; 15px line height
  nav:
    fontSize: 16.56px
    fontWeight: 400
    use: Measured header blog link; 23.184px line height
  card-wrapper:
    fontSize: 16px
    fontWeight: 400
    use: Measured card anchor default; individual descendants have their own styles
  service-name:
    fontSize: 18px
    fontWeight: 600
    use: Measured Moonlight and Corca AX name spans
  story-topic:
    fontSize: 13px
    fontWeight: 400
    use: Measured product topic span in the story card
rounded:
  square: 0px
  pill: 999px
spacing:
  nav-y: 8
  nav-x: 11
  action-y: 12
  action-x: 22
  story-card: 28
components:
  cta-primary:
    type: button
    backgroundColor: '#163272'
    textColor: '#ffffff'
    border: '1px solid #163272'
    rounded: 999px
    height: 41px
    padding: 12px 22px
    typography: 15px / 650
    hover: 'bg and border #102654; transform translateY(-2px)'
    focus: 'outline 3px solid #163272; outline-offset 4px'
    use: AX 도입 알아보기 — a link to /ax on the pale hero; measured width 151.5px. Press is unmeasured.
  cta-secondary:
    type: button
    textColor: '#163272'
    border: '1px solid #163272'
    rounded: 999px
    height: 41px
    padding: 12px 22px
    typography: 15px / 650
    hover: 'bg #eef6ff; fg and border #102654; transform translateY(-2px)'
    focus: 'outline 3px solid #163272; outline-offset 4px'
    use: '제품 살펴보기 — an in-page link to #home-products; transparent at rest over #f5f7fb. Measured width 127.3px. Press is unmeasured.'
  nav-blog:
    type: button
    textColor: '#1a1a1a'
    rounded: 999px
    height: 40px
    padding: 8px 11px
    typography: 16.56px / 400
    hover: bg rgba(183, 191, 217, 0.16)
    use: 블로그 — a header link to /blog; transparent at rest over white. Width 64.9px. Hover measured in the second pass; focus is browser auto and press is unmeasured.
  card-moonlight:
    type: card
    backgroundColor: '#ffffff'
    textColor: '#1a2352'
    rounded: 0px
    height: 626px
    padding: 0px
    typography: 18px / 600
    hover: 'child .service-body bg #eef6ff'
    pressed: 'child .service-body bg #eef6ff'
    focus: 'outline 3px solid #163272; outline-offset -3px'
    use: 'Moonlight — a 531px-wide link to /products/moonlight. Font describes its name span; anchor default is 16px / 400. Right and bottom borders are 1px #e5e7eb. The child fill remaining after blur is excluded from the focus token.'
  card-ax:
    type: card
    textColor: '#ffffff'
    rounded: 0px
    height: 626px
    padding: 0px
    typography: 18px / 600
    hover: descendant video opacity 0 to 1
    pressed: descendant video opacity 0 to 1
    focus: 'outline 3px solid #163272; outline-offset -3px; descendant video opacity 0 to 1'
    use: 'Corca AX — a 531px-wide link to /ax. The visible name is white over image/video and a black alpha gradient; the covered anchor itself computes white bg and navy fg. Font describes the name span. Right and bottom borders are 1px #e5e7eb. A persistent source attribute mutation is excluded from the focus token.'
  card-story:
    type: card
    backgroundColor: '#ffffff'
    textColor: '#1a2352'
    rounded: 0px
    height: 276.9px
    padding: 28px
    typography: 16px / 400
    hover: 'bg #eef6ff'
    pressed: 'bg #eef6ff'
    focus: 'bg #eef6ff; outline 3px solid #163272; outline-offset -3px'
    use: '우리가 만들고 싶은 AI Colleague — a 373px-wide link to /blog/we-make-ai-colleague. Font is the anchor default; topic is 13px / 400 in brand blue, heading navy and paragraph #1a1a1a. Right and bottom borders are 1px #e5e7eb.'
fonts:
  roles:
    sans: Pretendard Variable
---

# Design System Inspiration of Corca

## Overview

### Visual Theme & Atmosphere

Corca (코르카) is a Seoul-based AI company that develops products for research and everyday life and offers enterprise AI transformation services. Its [contact page](https://www.corca.ai/about/vision-mission) and [product legal footer](https://www.themoonlight.io/en/policy) publish the same Seoul address. Its current homepage connects these activities: experience gained by making products and changing its own work becomes the basis for helping other organizations adopt AI. Moonlight helps researchers read, understand and summarize papers; Trace handles schedules; Corca AX and Ceal address organizational AI use and the environment supporting it. This is the positioning presented on the [homepage](https://www.corca.ai/), [Moonlight page](https://www.corca.ai/products/moonlight) and [Corca AX page](https://www.corca.ai/ax).

The visual expression combines a pale blue-grey hero, large navy Korean type and a brighter blue emphasis with a wavy underline. A tabbed achievement panel occupies the right side of the desktop hero. Rounded action links sit beneath the explanation; below them, product and service cards have square corners and thin shared grid borders. Navy `#1a2352` still carries main headings, but the site's explicit brand property is blue `#056eb9`. The main action colour is the deeper blue `#163272`. White and `#f5f7fb` alternate across the page. These are measured homepage properties and screenshot observations.

Corca's own design writing adds context to the current expression. A [January 2025 designer interview](https://www.corca.ai/blog/product-designer-work) describes a role spanning UX, interfaces, BX, logos and graphics, with iteration informed by user feedback and product data. A [September 2026 AX design-study article](https://www.corca.ai/blog/ax-design-study) describes applying ideas to actual work, comparing the results and considering the reader's time. It documents learning and experimentation, not a published brand rulebook or a formal visual rebrand.

The measured homepage is the Korean edition (`corca.ai/`, HTML `lang="ko"`), captured at 1440×1000 without a regional redirect. This reference describes the corporate marketing surface. Moonlight's application interface is a separate surface; the product-page CSS facts below do not establish application tokens.

#### Primary tasks

- Explore the products and the distinct AX offering.
- Follow the Moonlight and Trace product links.
- Try Moonlight through the marketing page's “Try it now” action in English.
- Read company achievements and linked reporting.
- Read practical product and organizational stories.

### Brand Narrative

Corca's current story links a company that builds named AI products with one that helps organizations change how they work. Moonlight and Trace demonstrate the product side; Corca AX and Ceal make the organizational side explicit. The [vision page](https://www.corca.ai/about/vision-mission) describes making the benefits of technological progress available broadly, with people, research-based decisions and ethical AI among its stated themes. The [working-culture page](https://www.corca.ai/about/how-we-work) describes chapters and squads using feedback, retrospectives and scrum to grow their teams and products.

That narrative has a practical design counterpart on the homepage: a shared navy-and-blue framework, recognizable product imagery, prominent adoption figures, and direct links to the team's own accounts of making and learning. Moonlight retains a purple marketing-page background declaration, while its homepage card participates in the corporate white grid. This reading connects the observed design to the published positioning; it is not a claim that Corca has issued these observations as brand principles.

### Principles

- **Retain the user's judgment.** The AI Colleague article describes assisting deeper research and revising language that suggested handing understanding away.
- **Apply, compare, revise.** The design-study article describes trying concepts in actual work and discussing whether an idea made a difference.
- **Respect readers' time.** The design-study article connects clear explanations and less repetition to the reader's experience.
- **Show concrete products and outcomes.** As a visual reading of the homepage, preserve named products, explicit jobs and published metrics.
- **Use flat controls with visible focus.** As a measured interface pattern, combine shadowless control roots with authored solid outlines on actions and cards.

### Personas

No first-party persona profiles were verified in the sources reviewed.

## Colors

The survey resolves **22 `--site-color-*` custom properties** on `:root`. The table preserves their names and resolved values; aliases are retained because the site separates the roles even when their colours coincide.

| First-party property | Resolved value | Role evidenced by the property or measured control |
|---|---|---|
| `--site-color-brand` | `#056eb9` | Brand blue; hero emphasis and story topic |
| `--site-color-brand-light` | `#419eff` | Light brand colour |
| `--site-color-brand-deep` | `#163272` | Deep brand colour |
| `--site-color-heading` | `#1a2352` | Main heading and card ink |
| `--site-color-action` | `#163272` | Primary fill and secondary action ink |
| `--site-color-action-hover` | `#102654` | Hero action hover colour |
| `--site-color-action-soft` | `#eef6ff` | Secondary action and card hover fill |
| `--site-color-focus` | `#163272` | Authored action and card focus outlines |
| `--site-color-text` | `#1a1a1a` | **Foreground**: main explanatory paragraphs |
| `--site-color-text-secondary` | `#526071` | Named secondary text property |
| `--site-color-text-muted` | `#626975` | Named muted text property |
| `--site-color-surface` | `#ffffff` | White canvas, header and cards |
| `--site-color-surface-subtle` | `#f5f7fb` | Hero and story-section ground |
| `--site-color-surface-hover` | `#eef2f7` | Named alternate surface-hover property |
| `--site-color-intro` | `#e1eaf7` | Named introduction property |
| `--site-color-border` | `#e5e7eb` | Shared card-grid borders |
| `--site-color-border-strong` | `#cad7ea` | Named stronger border property |
| `--site-color-on-dark` | `#ffffff` | Text on dark surfaces |
| `--site-color-on-dark-secondary` | `#b7d7ff` | Footer text and links |
| `--site-color-on-dark-muted` | `#7fa8d6` | Named muted on-dark text property |
| `--site-color-accent` | `#419eff` | Alias of the light brand colour |
| `--site-color-ink` | `#1a2352` | Alias of heading ink |

The paragraph census needs interpretation by location: `#b7d7ff` appears on ten footer paragraphs, `#1a1a1a` on five paragraphs, and white on two. The body-text role is `foreground` (`#1a1a1a`), corroborated by the paragraph inside the measured story card; footer repetition does not make pale blue the body ink.

The navigation hover uses **`rgba(183, 191, 217, 0.16)`** over the white header. This alpha colour is a measured state, not an opaque palette swatch. The selected OpenAI tab has an 8% brand-blue background reported as `color(srgb 0.0196078 0.431373 0.72549 / 0.08)`; it was surveyed at rest, not state-probed.

The [current official stylesheet](https://www.corca.ai/_astro/_..DjzxgHAC.css) also retains Moonlight-specific declarations: `.moonlight-hero` has background `#402060` and white text; `.metric-label` uses `#bbbbbb`. Those rules belong to the [Moonlight marketing page](https://www.corca.ai/products/moonlight), whose markup uses these classes. They are declared page-specific facts, not values from the homepage's resolved token set or measurements of the Moonlight app.

## Typography

**Official product use:** the first-party design articles reviewed do not name an official product typeface or document a separate display family.

**Live-loaded:** `document.fonts` reports **Pretendard Variable**, normal style, weight range **45–920**. Body, H1 and button declarations all begin with that same family. This is the only family placed in `tokens.typography.family`.

**Official distributed assets:** the live site's `@font-face` points to the same-origin `/fonts/PretendardVariable.woff2`, with `format("woff2-variations")`. This verifies the webfont delivery path; no separate brand font kit or font licence was opened.

**Declared-only:** `Pretendard` also appears after the variable family in the CSS fallback stack, but no separately loaded face with that name appears in the census. It receives no token or specimen.

**Unresolved:** no additional display face was established. **Substitute: none chosen.**

### Measured interface metrics

| Element | Size / weight | Line height | Evidence |
|---|---|---|---|
| Hero action links | 15px / 650 | 15px | Both states runs |
| Header blog link | 16.56px / 400 | 23.184px | Both states runs |
| Card anchor default | 16px / 400 | 22.4px | First states run |
| Moonlight / Corca AX name spans | 18px / 600 | Not separately captured | Visible label snapshots |
| Story topic span | 13px / 400 | Not separately captured | Visible label snapshot |
| Footer contact links | 12px / 400 | 18.6px | Survey rows |

### CSS-declared headline hierarchy

The homepage stylesheet specifies the hero H1 as `clamp(44px,4.4vw,64px)`, weight 650, line height 1.16 and letter spacing `-.045em`. The services H2 uses `clamp(30px,3.3vw,44px)` at weight 650; group H3 uses `clamp(23px,2.3vw,28px)` at weight 600. Hero explanatory copy is declared at 18px with line height 1.8; story paragraphs at 15px with line height 1.75. These are source declarations, not additional computed-style samples.

The [English Moonlight marketing page](https://www.corca.ai/en/products/moonlight) currently uses the H1 “AI PDF Paper Reader for Researchers”. The same official stylesheet declares a 60px H1 at `width>=1280px`, with weight 400. Its metric values are declared at 47px/600 at that width. These retain the product page's large headline and number tiers as CSS facts; they were not rendered in a second product-page probe.

Use the loaded variable family to reproduce the measured interface. The weight contrast is numeric in the current CSS and controls: 400 for the navigation, 600 for product names, 650 for the hero actions and headline declarations. Do not replace this with an unidentified heavy display cut.

## Layout

The desktop hero is a two-column composition: mission and explanation on the left, a tabbed recognition panel on the right. The main product area then separates **organizational AI use** from **research and everyday products** into two parallel columns. Each group begins with a 3px deep-blue top rule. Product names, explanations and large adoption figures give these columns an information hierarchy rather than a uniform tile grid.

The measured product/service cards are 531px wide; story cards are 373px wide. The story section's CSS defines three equal grid tracks, while the current homepage fills two with stories. Its white cards meet at thin `#e5e7eb` edges. Keep the square outer silhouette and the distinction between image area, product copy and inline arrow action.

Measured spacing includes 12px/22px vertical/horizontal action padding, 8px/11px navigation padding and 28px story-card padding. The stylesheet declares a 12px gap between hero actions, a 32px gap above them and a 56px desktop hero-column gap. It defines `--home-section-extra-space: 16px` on the homepage. These local declarations do not establish a universal 8px spacing system.

### Responsive Behavior

Only desktop was rendered. The following behavior is **verified in the official stylesheet**, rather than in a mobile viewport.

At `width<=809px`, the hero becomes one column, the service groups stack, and the story grid becomes one column. The hero H1 switches to `clamp(38px,9.5vw,54px)`; hero explanatory text becomes 16px. Homepage extra section spacing changes from 16px to 8px. Between 810px and 1100px, the hero gap is declared as 28px. The header's desktop state was measured at 66px tall; its mobile interaction was not measured.

The Moonlight marketing page has its own CSS breakpoints. Its metrics grid uses two columns by default and four at `width>=768px`. These are page-specific declarations and do not establish a global corporate breakpoint scale.

## Elevation & Depth

All six measured control roots have `box-shadow: none`, including hover and focus samples. The three ancestor levels compared around them also show no box shadow in their resting snapshots. This supports a flat treatment for these controls, not a claim that every route and every asset is shadowless.

The homepage separates sections with white and `#f5f7fb`, cards with shared borders, and focus with drawn outlines. The Corca AX image uses a black alpha gradient to keep its white text readable. That image overlay is a distinct depth treatment from a drop shadow.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.measured-controls`: `none`

## Motion & Easing

Both hero actions report this raw computed transition string:

`color, background-color, border-color, transform 0.16s, 0.16s, 0.16s, 0.16s ease, ease, ease, ease 0s, 0s, 0s, 0s`

The probe reports a longest transition of **160ms** and samples after 900ms. The measured hover transform is `matrix(1, 0, 0, 1, 0, -2)`, a 2px upward movement. The card and navigation roots report `all 0s ease 0s`; this is a root-level observation and does not establish timing for descendants or media.

The official CSS separately declares `animation:36s linear infinite partner-scroll` on `.partner-track`, pauses it under pointer hover, and disables that animation under `prefers-reduced-motion:reduce`. It also hides the connection-line spark under that media query. The homepage script prevents the service preview from starting when reduced motion is requested. These rules do not establish that every page transition becomes instant.

## Components

All six controls were identified by tag, landmark, selector and destination. They are links; the action and navigation links use component type `button`, and the content links use `card`.

### Hero actions

**AX 도입 알아보기** links to `/ax`. Its measured box is **151.5×41px**, radius **999px**, padding **12px 22px**, font **15px/650**, and line height **15px**. Rest fill and 1px border are `#163272`; the label is white. Hover changes fill and border to `#102654` and moves the link up 2px. Keyboard focus adds a **3px solid `#163272` outline with 4px offset**, which disappears after blur. Press is **UNMEASURED** in both runs because `:active` did not match.

**제품 살펴보기** links to `#home-products`. Its box is **127.3×41px**, with the same radius, padding and font. It is transparent at rest over `#f5f7fb`, with `#163272` text and a 1px border in that colour. Hover fills it with `#eef6ff`, darkens label and border to `#102654`, and moves it up 2px. Focus uses the same 3px outline and 4px offset. Press is **UNMEASURED**.

### Header link

**블로그** links to `/blog`. It measures **64.9×40px**, radius **999px**, padding **8px 11px**, and **16.56px/400** type. Rest is transparent over white with `#1a1a1a` text and no border or shadow. The second run measured the hover background as `rgba(183, 191, 217, 0.16)`. Press is **UNMEASURED**. Keyboard focus draws a browser `auto` outline; that ring is not a brand token.

### Product and service cards

**Moonlight** links to `/products/moonlight`. The outer card is **531×626px**, white, **0px radius**, **0px padding**, with a 16px/400 anchor default and navy ink. Its visible name span is **18px/600** in `#1a2352`. The card draws 1px `#e5e7eb` borders on the right and bottom; its grid parent supplies the other edges. Hover and press change the **child `.service-body`**, from transparent over white to `#eef6ff`; the outer card remains white. Keyboard focus adds a **3px `#163272` outline at −3px offset**. The child fill also appeared during focus, but remained after blur while `:hover` remained true, so it is excluded from the focus token.

**Corca AX** links to `/ax`, with the same **531×626px**, square, zero-padding outer geometry and right/bottom border treatment. The covered anchor computes white background and navy ink; the **visible name and explanatory text are white over image/video**, with `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8))`. The name is 18px/600. Hover and press change descendant video opacity from **0 to 1**. Focus adds the inset 3px blue outline and also changes video opacity to 1. A source-attribute mutation that persisted after blur is excluded. Video-frame pixels were outside the comparison scope.

### Story card

**우리가 만들고 싶은 AI Colleague** links to `/blog/we-make-ai-colleague`. It measures **373×276.9px**, radius **0px**, padding **28px**, with white fill, navy heading ink and the same right/bottom grid borders. Its topic is brand blue at 13px/400; its paragraph is `#1a1a1a`. Hover and press change the card's own background to `#eef6ff`. Keyboard focus changes the same background and adds the **3px `#163272` inset outline**. Both changes clear after blur in the capture.

### States

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| AX action link | Fill/border `#102654`; up 2px | UNMEASURED | 3px solid `#163272`, offset 4px |
| Product anchor | Fill `#eef6ff`; ink/border `#102654`; up 2px | UNMEASURED | 3px solid `#163272`, offset 4px |
| Blog navigation link | Background `rgba(183, 191, 217, 0.16)` | UNMEASURED | Browser `auto`; no brand token |
| Moonlight card link | Child body fill `#eef6ff` | Same child fill | 3px solid `#163272`, offset −3px; persistent child fill excluded |
| AX card link | Video opacity 0 → 1 | Same opacity change | Inset 3px outline and video opacity 1; persistent source change excluded |
| AI Colleague story link | Own fill `#eef6ff` | Same fill | Same fill and inset 3px outline; both clear after blur |

Every measured hover sample matched `:hover`; all measured card presses matched `:active`. Both hero links and the blog link failed the pressed-state match and remain unmeasured. Empty, loading, error, success, skeleton and disabled treatments were not observed through the authorized interactions.

The comparison covers the control, descendants including empty layers, their pseudo-elements and three ancestor levels. It checks computed styling and selected DOM/SVG/image attributes. It does not compare video frames, canvas pixels, closed shadow roots or cross-origin iframe internals.

## Do's and Don'ts

These are reproduction guidelines drawn from the measured surface, not a claimed Corca brand policy.

- Use `#1a2352` for the main navy heading role and `#056eb9` for blue emphasis; preserve the distinction from `#163272` actions.
- Pair the filled and outlined 41px hero links, with 999px corners and the measured 2px hover lift.
- Keep product and story cards square, with thin shared edges and ample text padding.
- Preserve the strong product names and adoption figures as part of the product hierarchy.
- Use the loaded Pretendard Variable family and distinguish 400, 600 and 650 weights.
- Do not give the transparent secondary or navigation link an invented opaque rest fill.
- Do not apply the browser's navigation focus colour as a brand focus token.
- Do not transfer Moonlight's page-specific purple into the corporate homepage token set.

## Voice & Tone

The current corporate headline is **“AI로 삶과 일의 패러다임을 바꿉니다.”** It is declarative and addresses both life and work. Product descriptions identify a concrete job: reading research PDFs or managing schedules. The homepage still presents its 2024 Baby Unicorn selection and a RecSys result described as seventh worldwide and first among domestic companies; it now also foregrounds the 2026 OpenAI services-partner story. Adoption figures are presented directly, including **400,000+ users** and **4.2M+ papers read** for Moonlight. Its marketing page also reports **156+ countries** and **8,370+ institutions**. These are Corca's published figures, not independently audited usage.

The [July 2026 AI Colleague article](https://www.corca.ai/blog/we-make-ai-colleague) gives a more specific guide to tone than a generic prohibition on hype: it describes changing a generated recommendation after a researcher objected that the wording undervalued the effort of understanding. Corca explains that Moonlight should help researchers ask better questions, evaluate arguments and choose their next direction. Preserve that respect for the researcher's judgment when writing product explanations.

The [AX design-study article](https://www.corca.ai/blog/ax-design-study) likewise connects the attitude toward readers with concrete editing questions: provide enough explanation, remove repetition and avoid company-internal language. These are reported reflections from that team, not evidence of a formal company-wide voice manual.

## Agent Prompt Guide

“Build a Corca corporate hero on `#f5f7fb`: navy `#1a2352` headline with a blue `#056eb9` emphasized phrase and a wavy underline, explanatory Korean text in `#1a1a1a`, and a recognition panel beside it. Use the live-loaded Pretendard Variable family. Put a filled `/ax` action next to an outlined product anchor.”

“For the primary action, use a 41px-high, 999px-radius link with 12px 22px padding, 15px/650 white text, `#163272` fill and border. Hover uses `#102654` and a 2px upward translation. Keyboard focus adds a 3px `#163272` outline at 4px offset.”

“For a story link, use a square white card, 28px padding, navy heading, blue topic and dark paragraph. On hover and press, change its own background to `#eef6ff`; on keyboard focus, use that fill plus a 3px navy-blue outline inset 3px.”

These prompts reproduce measured states; they do not supply loading, disabled or error behavior.
