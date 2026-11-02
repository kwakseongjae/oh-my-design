---
name: GitLab
colors:
  primary: '#171321'
  foreground: '#ffffff'
  foreground-dark: '#171321'
  muted: '#a2a1a6'
  muted-light-surface: '#74717a'
  off-white: '#f7f7f5'
  canvas: '#ffffff'
  feature-tint: '#e8e7eb'
  brand-orange: '#fc6d26'
  brand-purple: '#7759c2'
  nav-hover: '#d1d0d3'
  dark-border: '#45424d'
typography:
  navigation:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Measured Pricing navigation link, 24px line-height
  hero-action:
    fontSize: 18px
    fontWeight: 580
    use: Measured Try for free hero link; 22px line-height
  marketing-action:
    fontSize: 18px
    fontWeight: 660
    lineHeight: 1.25
    use: Measured Request a demo and rest-only Get your free trial links; 22.5px line-height
rounded:
  none: 0px
  sm: 4px
spacing:
  sm: 8
  base: 16
  lg: 24
  xxl: 48
  section: 64
components:
  hero-cta:
    type: button
    textColor: '#ffffff'
    border: 1px solid rgba(255, 255, 255, 0.2)
    rounded: 0px
    height: 72px
    padding: 24px
    typography: 18px / 580 GitLab Sans
    hover: background rgba(255, 255, 255, 0.17); arrow translateX(3px)
    pressed: background rgba(255, 255, 255, 0.17); arrow translateX(3px)
    use: 'Try for free is a link on the #171321 hero. Its background-color is transparent, with linear-gradient(-90deg, rgba(119, 89, 194, 0.3), rgba(229, 60, 151, 0.3) 34%, rgba(252, 109, 38, 0.3)) and backdrop blur(12.5px). Pointer states were measured with overlays hidden; focus was not reached.'
  demo-link:
    type: button
    textColor: '#ffffff'
    rounded: 4px
    height: 44.5px
    padding: 11px 16px
    typography: 18px / 660 GitLab Sans
    hover: background rgba(255, 255, 255, 0.12)
    pressed: background rgba(255, 255, 255, 0.12)
    use: Request a demo is a link with transparent rest background on the dark header, whose own layer is rgba(23, 19, 33, 0.1). Pointer states were measured with overlays hidden; focus was not reached.
  pricing-link:
    type: button
    textColor: '#ffffff'
    rounded: 4px
    height: 24px
    padding: 0px
    typography: 16px / 400 GitLab Sans
    hover: 'color #d1d0d3'
    pressed: 'color #d1d0d3'
    use: 'Pricing is a navigation link with transparent background on the dark header. The text changes from white to #d1d0d3. Pointer states were measured with overlays hidden; focus was not reached.'
  search-trigger:
    type: button
    textColor: '#ffffff'
    rounded: 4px
    height: 32px
    padding: 8px 0px 8px 8px
    hover: 'color #d1d0d3; SVG fill #d1d0d3'
    pressed: 'color #d1d0d3; SVG fill #d1d0d3'
    use: Search is an icon button, 24px wide, with transparent background on the dark header and a 16px SVG. It is not a search input. Pointer states were measured with overlays hidden; focus was not reached.
  release-card:
    type: card
    textColor: '#ffffff'
    rounded: 0px
    height: 121px
    padding: 24px
    typography: 16px / 400 GitLab Sans
    hover: background rgba(255, 255, 255, 0.17); arrow opacity 1
    pressed: background rgba(255, 255, 255, 0.17); arrow opacity 1
    use: '19.5 What''s new in GitLab is a link with a measured rgba(255, 255, 255, 0.1) background layer on the #171321 hero and backdrop blur(12.5px). Its background is kept as a layered value in prose because a standalone alpha swatch loses the backing surface. White is the measured h2 label color; the link container inherits #171321, while the gradient-filled eyebrow has transparent text ink. The font field records the container, not the h2. Pointer states were measured with overlays hidden; focus was not reached.'
fonts:
  roles:
    sans: GitLab Sans
    mono: GitLab Mono
---

# Design System Inspiration of GitLab

## Overview

### Visual Theme & Atmosphere

GitLab brings planning, source control, CI/CD, and security into a shared software delivery platform. Its current company page describes an intelligent orchestration platform where teams work with AI agents; the homepage puts speed, control, governance, and traceability alongside the software workflow. This extends a history that began with an open-source collaboration project in 2011, incorporated as a company in 2014, and reached the Nasdaq in 2021. [Company](https://about.gitlab.com/company/)

The current marketing expression is a dark Charcoal canvas (`#171321`) with white type (`#ffffff`), large tightly tracked GitLab Sans headlines, fine grid lines, square translucent action tiles, and GitLab Mono labels. A pale feature band interrupts the dark surface, followed by numbered platform cards, industry statistics, customer quotations, and a white closing CTA. Orange (`#fc6d26`) and purple (`#7759c2`) appear together in the hero action's gradient. The 72px square-cornered hero action coexists with the older 4px, 18px/660 marketing button style; there is no single button geometry across this homepage. These observations come from the homepage census, control snapshots, screenshots, and CSS delivered in its HTML on 2026-11-02.

GitLab's 2022 logo announcement linked the iterated mark to the DevOps infinity loop and the company's value of iteration. The current site carries the GitLab identity into an agent-oriented message, while the official brand palette still includes orange, purple, white, and Charcoal. Purple belongs to the wider brand palette; it is not exclusive to AI. The brand guide reserves a particular orange-to-purple gradient for AI content, a narrower rule than assigning every purple surface to GitLab Duo. [Brand evolution](https://about.gitlab.com/blog/devops-is-at-the-center-of-gitlab/), [brand color](https://design.gitlab.com/brand-design/color/)

Pajamas explicitly separates brand guidance from foundations and components for building GitLab's product UI. Its product confirm-button example uses blue, whereas the marketing homepage uses Charcoal, white, and an alpha gradient for its actions. Keep these surface roles distinct when building from this reference. [Pajamas](https://design.gitlab.com/), [product color](https://design.gitlab.com/product-foundations/color/)

#### Primary tasks

- Coordinate planning, code, CI/CD, security, and delivery in the platform.
- Explore the platform and its industry applications from the marketing site.
- Follow the free-trial or demo links.
- Use Pajamas documentation when implementing GitLab product interfaces.

### Brand Narrative

GitLab's first commit dates to **October 8, 2011**. Its history describes Dmitriy Zaporozhets creating a collaboration tool from his home in Ukraine with Valeriy Sizov. The company was incorporated in **2014**. GitLab's own history identifies Sid Sijbrandij as a co-founder; the company timeline records publication of its handbook to its website repository in **2015** and a Nasdaq listing in **2021**. [History](https://handbook.gitlab.com/handbook/company/history/), [company](https://about.gitlab.com/company/)

Iteration connects this company history to the identity. The 2022 logo announcement described an evolution of the existing mark rather than a wholesale replacement, tied to the DevOps infinity loop. Today the company presents teams and AI agents working in the same software-delivery platform. The brand introduction describes a visual identity built to communicate GitLab's mission, values, and AI-driven DevSecOps platform. [Brand evolution](https://about.gitlab.com/blog/devops-is-at-the-center-of-gitlab/), [brand introduction](https://design.gitlab.com/brand-introduction/)

Public documentation remains a concrete part of that expression: this reference used GitLab's readable company history and the public Pajamas site, which offers brand guidance and product components. GitLab describes its working environment as all-remote. Its account of remote work explicitly says there is no headquarters; the US address in its Privacy Statement must therefore not be described as a measured operating headquarters. [Company](https://about.gitlab.com/company/), [remote-work account](https://about.gitlab.com/blog/pyb-all-remote-mark-frein/)

### Principles

Current Pajamas principles include the following. These are product-design guidance, not inferred company beliefs from a screenshot. [Principles](https://design.gitlab.com/about/principles/)

- **Sophisticated simplicity:** make thoughtful choices that help people focus on complex daily work.
- **Natural developer flow:** connect related tasks and preserve context between them.
- **Gradual complexity:** begin with useful simple paths, then make advanced capabilities discoverable.
- **A coherent product:** keep terminology, patterns, and interactions consistent so learning transfers.
- **Visible status and a next step:** explain progress and failures and give people a route forward.
- **Teams, scale, and guardrails:** support collaboration, customization, governance, and auditability.

For the marketing surface, the measured implementation suggests a practical composition rule: use large type and light/dark bands for hierarchy, then reserve the local alpha/arrow response for interactive detail. This is a build recommendation derived from the observations, not an official named principle.

### Personas

No first-party persona profiles were established. The earlier named characters, ages, cities, and personal motivations are unconfirmed and are not used as GitLab facts.

## Colors

### Marketing homepage: live census and controls

| Role | Value | Observed use |
|---|---|---|
| Charcoal / primary base | `#171321` | Dominant opaque background, dark text on light sections, and the closing solid CTA |
| Foreground / white | `#ffffff` | Dark-surface paragraph ink, nav labels, hero action label, release-card h2; also light surfaces |
| Muted on dark | `#a2a1a6` | Fourteen visible paragraph ink samples |
| Muted on light | `#74717a` | Present in the text census; feature-description color in delivered CSS |
| Off-white | `#f7f7f5` | Text census; numbered-card and industry headings in delivered CSS |
| Feature tint | `#e8e7eb` | `--one-feature-tint`, declared on the feature section; two rendered background samples |
| Brand orange | `#fc6d26` | Orange stop of the computed hero action gradient; also officially Orange 02p |
| Brand purple | `#7759c2` | Purple stop of that gradient; also officially Purple 02p |
| Navigation hover / pressed ink | `#d1d0d3` | Pricing label and Search SVG change from white to this gray |
| Dark border | `#45424d` | Six border samples; numbered-card borders in the survey |

The hero action has a transparent background-color and this measured background image:

```css
linear-gradient(-90deg, rgba(119, 89, 194, 0.3), rgba(229, 60, 151, 0.3) 34%, rgba(252, 109, 38, 0.3))
```

Its border is `1px solid rgba(255, 255, 255, 0.2)`. Hover and pressed add `rgba(255, 255, 255, 0.17)` beneath the unchanged image. The release-card layer changes from `rgba(255, 255, 255, 0.1)` to that same 0.17 alpha; these are layers over a dark surface, not standalone white canvases.

### Official product palette: documented, separate from homepage tokens

The current Pajamas color page shows a primary confirm example at `color.blue.500` **`#1f73ca`**, hover/focus at `.600` **`#2566b5`**, and active at `.700` **`#27599f`**. These are documented product states, not browser-measured homepage states. [Product color](https://design.gitlab.com/product-foundations/color/)

Its type documentation assigns default product text to `color.neutral.800` **`#3a383d`**, strong/headings to `.950` **`#18171d`**, subtle text to `.600` **`#646163`**, and disabled text to `.400` **`#8a8888`** in the light UI. **`#28272d`** remains a documented neutral `.900`, rather than the default body-text role. [Product typography](https://design.gitlab.com/product-foundations/type-fundamentals/), [product color](https://design.gitlab.com/product-foundations/color/)

Pajamas assigns green to success, orange to attention, red to problems, blue to current/active states, and purple to brand affinity. Badge variants express neutral, info, success, warning, danger, and product tier. Their old tint/text pairs were not re-measured, so this reference does not assign new badge hex values by analogy. [Product color](https://design.gitlab.com/product-foundations/color/), [badge](https://design.gitlab.com/components/badge/)

## Typography

### Font evidence classes

| Class | Verified evidence |
|---|---|
| Official product use | Pajamas says GitLab Sans is used for most UI elements, and GitLab Mono for code-related elements such as branches, commits, pipelines, and code blocks. |
| Live-loaded on the marketing homepage | `document.fonts` lists `GitLab Sans 100 900 normal` and `GitLab Mono 400 700 normal`, both loaded. Body, h1, and button declarations name GitLab Sans. |
| Official distributed assets | The official type page provides links to the GitLab fonts package and font catalog. The captured homepage declares local-variable names followed by same-origin WOFF2 URLs for Sans and Mono. |
| Declared-only | Neither of the homepage's two declared `@font-face` families is declared-only; both are loaded. Generic CSS backup families are not evidence of another rendered brand face. |
| Unresolved | Exact downloaded font bytes, an independent license-file inspection, italic availability, and additional script coverage were not established. Substitute: none chosen. |

The measured `@font-face` sources are `local("GitLab Sans Variable"), url("/fonts/gitlab-sans/GitLabSans.woff2") format("woff2")` and `local("GitLab Mono Variable"), url("/fonts/gitlab-mono/GitLabMono.woff2") format("woff2")`. This records the browser's source list; it does not distinguish a local resolution from a network response. No font file was downloaded by the author.

Official documentation describes Sans as based on Inter, and Mono as based on JetBrains Mono. Those are design origins, not additional selected faces. The product documentation emphasizes tall x-height and character disambiguation. The brand typography guide uses Sans as its primary face and Mono sparingly for secondary elements and numerical information. [Product type](https://design.gitlab.com/product-foundations/type-fundamentals/), [brand typography](https://design.gitlab.com/brand-design/typography/)

### Measured interface metrics

| Element | Face | Size / weight | Line-height |
|---|---|---|---|
| Hero trial link | GitLab Sans | 18px / 580 | 22px |
| Header demo and closing trial links | GitLab Sans | 18px / 660 | 22.5px |
| Pricing navigation | GitLab Sans | 16px / 400 | 24px |
| Release-card container | GitLab Sans | 16px / 400 inherited | 24px |
| Release-card eyebrow | GitLab Mono in delivered CSS | 12px / 400 in snapshot | 18px in delivered CSS |

The search trigger is icon-only: its inherited font computes to 0px/660, with a 16px SVG. That zero is not a text-size recommendation.

### Authored hierarchy beyond the measured controls

The delivered homepage CSS sets the hero and final headline to `clamp(48px, 6.7vw, 96px)`, weight 660, line-height 1.04, and tracking `-0.03em`. The upper bound therefore corresponds to 96px with -2.88px tracking; this is a CSS declaration, not a fresh h1 computed-style sample. Major section headings use `clamp(48px, 4.45vw, 64px)`, weight 660, and line-height 1.0625. Feature-card titles use 32px/580 with 36px line-height and `-0.02em` tracking. Feature descriptions declare 16px/24px.

Product typography has a separate 14px body/UI baseline and generally uses weights 400 and 600. Its dynamic heading scale ranges from 18–20px through 28–36px; do not apply the marketing headline's weight 660 universally to product headings. Brand collateral has its own guidance: Bold headlines with 105% leading, Regular body copy with 135% leading, and SemiBold CTAs. [Product type](https://design.gitlab.com/product-foundations/type-fundamentals/), [brand typography](https://design.gitlab.com/brand-design/typography/)

## Layout

### Homepage composition

The desktop screenshot shows a wide, left-aligned hero headline over a fine column grid, a smaller supporting description, an action tile aligned to a grid column, and staggered resource tiles. The delivered hero CSS defines a three-column layout with a maximum width of **1111px**, gaps of **48px 32px**, and padding **164px 0 64px**. The surveyed hero action and release card are each about **370.3px** wide.

The feature band uses white cards against a pale geometric background. The surveyed first two feature links are **541px** wide; the security feature spans **1108px**. Numbered platform links form a three-card row, each **354×243px**, with 24px padding and `#45424d` borders on `#171321`. Industry links form a staggered arrangement with 15% white layers; they are not the prior rounded proof-stat carousel. Resource links near the bottom use **64px 48px** padding. The white closing CTA is centered. These dimensions are desktop observations, not a universal grid specification.

### Official product spacing

Pajamas specifies an **8px base** with an augmented scale. The prior values **4, 8, 12, 16, 24, 32, 48, and 64px** are all present in its current spacing table. It uses 2px/4px within a component, 8px between related elements, 16px between unrelated elements, 24px between subsections, and 32px between sections. The **12px** step is reserved for horizontal padding in tabs, buttons, and form elements. This is documented product guidance, not a claim that each step was measured as a homepage spacing token. [Spacing](https://design.gitlab.com/product-foundations/spacing/)

### Radius by surface

- Homepage hero actions and resource tiles: **0px**, measured.
- Marketing header and closing CTA style: **4px**, measured.
- Product controls: **8px**, documented; product card regions: **12px**, documented.
- Product `border.radius.full`: **9999px**, documented for circular/pill shapes; no new badge-specific radius was measured.

### Responsive Behavior

The live capture was desktop-only. The following rules were read from CSS delivered in the homepage HTML; they were not tested in a mobile viewport.

| Authored condition | Behavior |
|---|---|
| Hero at `max-width: 1025px` | Three-column layout becomes one column; gap becomes 24px; padding becomes 80px 0 64px; actions and resource tiles use one column |
| Feature grid from `min-width: 768px` | One column becomes two; feature-card content padding changes from 24px to 32px |
| Closing actions from `min-width: 768px` | Column arrangement becomes a centered row |
| Headline sizing | Hero/final title use `clamp(48px, 6.7vw, 96px)`; major section titles use `clamp(48px, 4.45vw, 64px)` |

The measured hit-area heights are 72px for the hero CTA, 44.5px for the header demo link, 24px for Pricing, and 32px for Search. These are geometry observations; no mobile touch-target compliance assessment was performed.

## Elevation & Depth

The measured homepage controls have no box shadow. They separate through Charcoal/white contrast, alpha fills, borders, and, for the hero CTA and resource tile, **12.5px backdrop blur**. The full-page screenshot also uses imagery, a fine grid, and light/dark section changes to organize the composition. That evidence supports these controls' flat boundaries, not a universal ban on marketing shadows.

Pajamas gives shadows specific product roles: small for a subtle interactive surface boundary, medium for overlapping elements such as popovers and dropdowns, and large for modals and drawers. Its current implementation guidance says to use a border for an edge and a shadow for elevation, and discourages new uses of legacy inset-shadow utilities. Exact shadow offsets, blurs, and alpha combinations were not re-measured. [Elevation](https://design.gitlab.com/product-foundations/elevation/)

## Motion & Easing

### Computed homepage transitions

| Control | Raw computed transition |
|---|---|
| Hero CTA and release card | `background-color 0.18s ease-out 0s` |
| Demo link and rest-only closing trial link | `background-color 0.3s cubic-bezier(0.7, 0, 0.3, 1) 0s` |
| Pricing link and Search trigger | `color 0.2s ease 0s` |

These correspond to **180ms**, **300ms**, and **200ms**, respectively. The hero arrow moves 3px and the release-card arrow changes opacity from 0 to 1 in the measured hover/pressed states. No additional press effect was observed within the compared scope.

### Documented product guidance

Pajamas documents **100ms** for list-item hover/focus and **200ms** for interactive-element hover/focus. It recommends animation that is purposeful, natural, sparing, and respectful of `prefers-reduced-motion`. These are official product recommendations, not measurements of the marketing controls. [Animation fundamentals](https://design.gitlab.com/product-foundations/animation-fundamentals/)

The delivered homepage CSS disables feature-image scaling and its transition under `prefers-reduced-motion: reduce`. That targeted rule does not establish that every transition on the site becomes instant. No reduced-motion browser session was captured.

## Components

### Homepage actions and card link

These are control identities measured at 1440×1000. All measured rest box shadows were `none`.

| Key / identity | Height / radius / padding | Rest treatment | Measured pointer response |
|---|---|---|---|
| `hero-cta`: Try for free link, `a.one-hero__action--primary` | 72px / 0px / 24px | Transparent color over the gradient in §2; white 18px/580 text; 20% white border; blur(12.5px) | Hover and pressed add 17% white background and translate the arrow 3px right |
| `demo-link`: Request a demo header link | 44.5px / 4px / 11px 16px | Transparent; white 18px/660 text; no border | Hover and pressed add 12% white background |
| `pricing-link`: Pricing header link | 24px / 4px / 0px | Transparent; white 16px/400 text | Hover and pressed change text to `#d1d0d3` |
| `search-trigger`: Search icon button | 32px / 4px / 8px 0px 8px 8px | Transparent; white 16px SVG; 24px total width | Hover and pressed change foreground and SVG fill to `#d1d0d3` |
| `release-card`: 19.5 What's new in GitLab link | 121px / 0px / 24px | 10% white layer; blur(12.5px); white h2 | Hover and pressed raise layer to 17% white and reveal the arrow, opacity 0 → 1 |

The release link container computes to Charcoal `#171321`, but its visible h2 computes to white `#ffffff`. Its eyebrow uses transparent ink with a clipped gradient. Use the child heading's foreground for the card label, rather than the parent's inherited color.

The closing **Get your free trial** link retains the solid Charcoal `#171321` fill, white text, a `1px solid #171321` border, 4px radius, 11px 16px padding, and 18px/660 label. Its measured height is **46.5px**. All its interactive states are unmeasured in both attempts, so it remains a rest-only description and is absent from machine components. The header **Get free trial** variant was surveyed at 46.5px with white fill and Charcoal text; no interactive states were collected for it.

Consent stayed open. Pointer observations above used `hideOverlays: true`; the tool temporarily hid covering navigation/consent layers. Keyboard Tab stayed in the consent banner, so focus is **UNMEASURED for all six chosen controls**. No focus token is published. There was no visible search input in the survey; the search trigger was not activated.

### Official product components

Pajamas documents primary and tertiary button categories, with default, confirm, danger, and link variants. Confirm expresses a non-destructive confirmation; danger expresses destructive actions. The documentation permits a link styled as a button when destinations and actions share a control set. Use concise sentence-case labels that name the result. [Button](https://design.gitlab.com/components/button/)

The current border foundation assigns `border.radius.lg` to buttons, text inputs, and other controls. It resolves through `spacing-scale.3` to **8px**. Card regions use `border.radius.xl`, resolving through `spacing-scale.4` to **12px**; overlays use larger radii. These are documented product values, separate from the square homepage tiles. [Border](https://design.gitlab.com/product-foundations/border/), [spacing](https://design.gitlab.com/product-foundations/spacing/)

Badges are static metadata by default, with neutral, info, success, warning, danger, and tier variants. A linked badge should lead to the object it describes. Text does not wrap; icon-only badges need an accessible name identifying the metadata. No badge dimensions or color pairs were freshly measured. [Badge](https://design.gitlab.com/components/badge/)

Text inputs should be associated with their form-group label using `label-for`. Product examples bind validation state to both the input and form group so the visual error and explanation appear together. This documentation establishes behavior, without re-establishing the prior field's inset-border color or height. [Text input](https://design.gitlab.com/components/text-input/)

### States

#### Measured homepage states

Hover and pointer press were measured for the hero CTA, demo link, Pricing link, Search button, and release card. All five pressed snapshots match their hover treatment within the tool's comparison scope: the control, descendants and pseudo-elements, and three ancestor levels. The tool also compares SVG fill/stroke and geometry, background images and positions, masks, transforms, opacity, outlines, shadows, decoration, and media source attributes. This does not establish an absence of video/canvas-only changes, inaccessible iframe or closed-shadow-root changes, or changes outside that scope.

The exact changes are listed in §4. No keyboard-focus state was reached; this is **UNMEASURED**, not “no change.” The closing trial link also has unmeasured hover and press. Disabled, empty, loading, validation, and success states were not live-measured on this homepage.

#### Official product behavior

- **Disabled:** Pajamas prefers an explanation or validation over an unavailable action. Its disabled component remains focusable and uses an associated explanation; a native disabled button is a last resort. [Button](https://design.gitlab.com/components/button/)
- **Loading button:** a spinner precedes a text label, or replaces an icon; the component prevents activation and exposes `aria-disabled`. This is documented behavior, not a fresh color measurement. [Button](https://design.gitlab.com/components/button/)
- **Selected:** a toggle-style button uses `aria-pressed`; a control showing or hiding a panel uses `aria-expanded`. [Button](https://design.gitlab.com/components/button/)
- **Validation:** an invalid input state is paired with its form-group explanation and `aria-invalid`. [Text input](https://design.gitlab.com/components/text-input/)
- **Empty content:** explain the condition and a suitable action; Pajamas permits purposeful illustrations. Empty search results have no CTA and use “No results found” with guidance to revise the search. [Empty states](https://design.gitlab.com/patterns/empty-states/)
- **Loading more:** the documented pattern loads results inline and moves focus to the first appended item. Its skeleton/spinner guidance is incomplete on that page; no skeleton color or radius is assigned here. [Loading](https://design.gitlab.com/patterns/loading/)
- **Success:** a success badge denotes positive or desired metadata. Its earlier tint/text/radius combination is not re-established. [Badge](https://design.gitlab.com/components/badge/)

## Do's and Don'ts

### Do

- Build the current marketing hierarchy with GitLab Sans, and use loaded GitLab Mono for secondary code-like labels and numerical detail.
- Match the specific action: 72px square hero tile with 18px/580 text, or the measured 4px marketing style with 18px/660 text.
- Preserve white text over dark surfaces and Charcoal text on light ones; keep alpha fills attached to their underlying surface.
- Keep product confirm-blue guidance separate from the homepage's marketing treatments.
- Use sentence-case action labels and the official product spacing/radius roles when building product UI.
- Match badge variants to metadata meaning, as Pajamas specifies.

### Don't

- Treat orange as a universal primary fill, or purple as an AI-only signal; the measured hero combines brand colors and the official palette gives purple a broader brand role.
- Apply one radius or font weight to every GitLab surface.
- Render the release-card label in its parent's inherited Charcoal; its visible h2 is white.
- Convert a transparent or alpha layer into an opaque standalone swatch.
- Turn the unmeasured focus states into a guessed branded ring.
- Use a drop shadow as the only product boundary; current Pajamas guidance calls for a border when an edge must remain distinguishable.

## Voice & Tone

GitLab's official voice has three traits: **Visionary, Empathetic, and Intentional**. Visionary content demonstrates technical expertise with examples and useful evidence. Empathetic content meets readers at their level without patronizing them. Intentional content is direct, transparent, clear, and honest about limitations. [Brand voice](https://design.gitlab.com/brand-messaging/brand-voice/)

The current homepage connects speed to trust and control, and names concrete workflows, security gates, and audit trails. Its trial and demo labels are short actions. Industry statistics pair a number with an outcome and unit. For new copy, name the task or outcome, provide evidence where available, and explain the next action. The official voice guidance supports this approach without imposing an absolute ban on every superlative or expressive phrase.

## Agent Prompt Guide

### Quick reference

Charcoal `#171321` · white `#ffffff` · dark-surface muted `#a2a1a6` · light-surface muted `#74717a` · pale feature tint `#e8e7eb` · orange `#fc6d26` · purple `#7759c2` · navigation hover `#d1d0d3`.

### Example component prompts

- “Build the current GitLab marketing hero action as a square 72px-high link with 24px padding, white 18px/580 GitLab Sans text, and the exact alpha gradient in §2 over Charcoal. Add a 20% white border and blur(12.5px). Hover and pressed add 17% white and move the arrow 3px right.”
- “Build a transparent header demo link with white 18px/660 GitLab Sans, 4px radius, 11px 16px padding, and 44.5px height. Hover and pressed add 12% white. Keep keyboard focus unspecified until it is measured.”
- “Build a square release-card link over the dark hero: 24px padding, 121px measured height, a 10% white layer, white h2, and a small Mono eyebrow. Hover and pressed raise the white layer to 17% and reveal its arrow.”

For a product interface, follow the current Pajamas product color, type, spacing, and border documentation cited above; its documented confirm-blue example and 8px control radius belong to that domain.
