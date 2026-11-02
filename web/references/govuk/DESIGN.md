---
name: GOV.UK
colors:
  primary: '#1d70b8'
  primary-hover: '#0f385c'
  brand: '#1d70b8'
  action: '#0f7a52'
  action-shadow: '#083d29'
  action-secondary: '#f3f3f3'
  action-secondary-shadow: '#858686'
  action-warning: '#ca3535'
  action-warning-shadow: '#651b1b'
  canvas: '#ffffff'
  foreground: '#0b0c0c'
  secondary-text: '#484949'
  surface: '#f4f8fb'
  surface-alt: '#f3f3f3'
  hairline: '#cecece'
  input-border: '#0b0c0c'
  focus: '#ffdd00'
  focus-text: '#0b0c0c'
  error: '#ca3535'
  success: '#0f7a52'
  visited: '#54319f'
  on-primary: '#ffffff'
  tag-default-bg: '#d2e2f1'
  tag-default-fg: '#0f385c'
  notification-banner: '#1d70b8'
  link: '#1a65a6'
  accent-teal: '#00ffe0'
  search-ink: '#000000'
  surface-border: '#8eb8dc'
typography:
  display-hero:
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.07
    use: Homepage headline span .homepage-header__intro; served homepage CSS at min-width 1281px
  heading-xl:
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.0416666667
    use: Official large-screen govuk-heading-xl; 50px line height
  heading-l:
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.1111111111
    use: Official large-screen govuk-heading-l; 40px line height
  heading-m:
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.25
    use: Official large-screen govuk-heading-m; 30px line height
  heading-s:
    fontSize: 19px
    fontWeight: 700
    lineHeight: 1.3157894737
    use: Official govuk-heading-s; 25px line height; measured Benefits link is 19px/700
  body-l:
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.25
    use: Official large-screen lead paragraph govuk-body-l
  body-m:
    fontSize: 19px
    fontWeight: 400
    lineHeight: 1.3157894737
    use: Official default paragraph govuk-body
  body-s:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.25
    use: Official small paragraph govuk-body-s
  search-input:
    fontSize: 19px
    fontWeight: 400
    lineHeight: 1.4736842105
    use: Measured homepage search input; 28px line height
  menu:
    fontSize: 16px
    fontWeight: 700
    use: Measured Menu toggle
rounded:
  sm: 0px
  md: 0px
  lg: 0px
  tag: 1px
spacing:
  xs: 5
  sm: 10
  md: 15
  base: 20
  lg: 30
  xl: 40
  xxl: 60
  section: 60
components:
  search-submit:
    type: button
    backgroundColor: '#d2e2f1'
    textColor: '#1d70b8'
    rounded: 0px
    height: 50px
    padding: 0px
    typography: 13.3333px / 400
    hover: 'background #f4f8fb'
    pressed: 'background #f4f8fb; 3px solid #ffdd00 outline, offset 0; inset 0 0 0 4px #0b0c0c'
    focus: '3px solid #ffdd00 outline, offset 0; inset 0 0 0 4px #0b0c0c; rest colours retained'
    use: Hero Search GOV.UK submit button, an icon control; the font metric is its computed hidden-label style. Measured with the cookie banner still open.
  search-input:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#000000'
    rounded: 0px
    height: 50px
    padding: 6px
    typography: 19px / 400 GDS Transport
    pressed: '3px solid #ffdd00 outline, offset 0; inset 0 0 0 4px #000000'
    focus: '3px solid #ffdd00 outline, offset 0; inset 0 0 0 4px #000000'
    use: Hero Search combobox, measured width 580px, no rest border; hover has no change in the probe comparison scope. Measured with the cookie banner still open.
  menu-toggle:
    type: button
    textColor: '#ffffff'
    rounded: 0px
    height: 61px
    padding: 0px
    typography: 16px / 700 GDS Transport
    hover: white ::after underline, 83.3516px by 3px
    pressed: white ::after underline, 83.3516px by 3px
    focus: 'background #ffdd00; foreground and chevron #0b0c0c; ::after underline #0b0c0c; inner right border #ffdd00'
    use: 'Menu / Show navigation menu button; transparent at rest on the #1d70b8 header. Measured with the cookie banner still open; opening the menu was not tested.'
  home-link:
    type: button
    backgroundColor: '#1d70b8'
    textColor: '#ffffff'
    rounded: 0px
    height: 37px
    padding: 0px
    typography: 30px / 400
    hover: '3px solid #ffffff bottom border; underline; height increases to 40px'
    pressed: 'background #ffdd00; foreground and SVG fills #0b0c0c; shadow 0 -2px #ffdd00, 0 4px #0b0c0c'
    focus: 'background #ffdd00; foreground and SVG fills #0b0c0c; shadow 0 -2px #ffdd00, 0 4px #0b0c0c'
    use: 'GOV.UK homepage link #logo; its visible wordmark and crown are an SVG, including a teal dot at rest. Measured with the cookie banner still open.'
  hmrc-link:
    type: button
    textColor: '#1a65a6'
    rounded: 0px
    height: 48.2px
    padding: 0px
    typography: 19px / 700 GDS Transport
    hover: 'foreground and underline #0f385c'
    pressed: 'background #ffdd00; foreground #0b0c0c; no text underline; shadow 0 -2px #ffdd00, 0 4px #0b0c0c'
    focus: 'background #ffdd00; foreground #0b0c0c; no text underline; shadow 0 -2px #ffdd00, 0 4px #0b0c0c'
    use: 'HMRC account: sign in or set up — an action link, transparent on the white Popular on GOV.UK section. Geometry is the link label, excluding its sibling arrow icon. Measured with the cookie banner still open.'
  benefits-card:
    type: card
    textColor: '#1a65a6'
    rounded: 0px
    height: 23.5px
    padding: 0px
    typography: 19px / 700 GDS Transport
    hover: 'foreground and underline #0f385c; ::before chevron borders change from #1d70b8 to #0f385c'
    pressed: 'background #ffdd00; foreground and chevron #0b0c0c; no text underline; shadow 0 -2px #ffdd00, 0 4px #0b0c0c'
    focus: 'background #ffdd00; foreground and chevron #0b0c0c; no text underline; shadow 0 -2px #ffdd00, 0 4px #0b0c0c'
    use: Benefits card link to /browse/benefits, transparent on white. Geometry is the 72.9px-wide inline link label, not the whole card. Measured with the cookie banner still open.
fonts:
  roles:
    sans: GDS Transport
---

# Design System Inspiration of GOV.UK

## Overview

### Visual Theme & Atmosphere

GOV.UK is the UK government's website for services and information, maintained by the Government Digital Service. It brings citizen and business services, professional guidance, and government information into one place. Its public launch on 17 October 2012 replaced Directgov and Business Link; the GOV.UK Design System followed in June 2018, bringing shared styles, components and patterns together for government service teams. [About GOV.UK](https://www.gov.uk/help/about-govuk), [launch announcement](https://www.gov.uk/government/news/launch-of-gov-uk-a-key-milestone-in-making-public-service-delivery-digital-by-default), [Design System introduction](https://gds.blog.gov.uk/2018/06/22/introducing-the-gov-uk-design-system/).

The homepage combines a broad blue header and white headline with a white, text-led service directory. Its measured paragraph ink is near-black, its links are underlined blue, and its six sampled controls have square corners. Keyboard focus changes the interface visibly: yellow backgrounds and dark underline shadows on links, and yellow outlines with dark inset edges on search controls. These are observations from the homepage, rather than a rule that every GOV.UK component shares identical geometry.

The identity is evolving across channels. The June 2025 refresh introduced a blue header, a raised light-coloured dot in the wordmark, more colour, and animation primarily for the app and social channels. Current brand guidance names Primary blue and Accent teal as its core colours and describes a range from informative to inspiring, with web at the informative end. Build the web reference around readable content and clear tasks while retaining that newer blue-and-teal identity. [Changes to GOV.UK](https://www.gov.uk/guidance/changes-to-govuk), [brand introduction](https://brand.design-system.service.gov.uk/introduction/), [core colours](https://brand.design-system.service.gov.uk/colour/govuk-blue/).

The measured page is the English homepage at `www.gov.uk/`, HTML `lang="en"`, captured with `en-GB`; there was no regional redirect. The cookie banner remained visible because the probe did not recognise “Reject additional cookies”; the state observations below retain that capture condition.

Primary tasks supported by the opened sources are finding services and information, following task statuses, correcting validation errors through linked error summaries, and retaining a transaction reference and next steps on a confirmation page. [Task list](https://design-system.service.gov.uk/components/task-list/), [error summary](https://design-system.service.gov.uk/components/error-summary/), [confirmation pages](https://design-system.service.gov.uk/patterns/confirmation-pages/).

### Brand Narrative

GOV.UK's 2012 launch framed the site as a single domain organised around what people need to do. The announcement identified GDS as the Cabinet Office team that built it, and described a staged migration beginning with Directgov and Business Link. The 2018 Design System introduction brought previously dispersed patterns and code together and established shared, supported resources for government teams. [2012 launch](https://www.gov.uk/government/news/launch-of-gov-uk-a-key-milestone-in-making-public-service-delivery-digital-by-default), [2018 introduction](https://gds.blog.gov.uk/2018/06/22/introducing-the-gov-uk-design-system/).

That continuity now includes a broader identity for web, app and social media. The refreshed wordmark, dot, colour and motion are explicitly intended to work in those different contexts. The guidelines allow a reserved style for sensitive topics and a brighter expression for positive content. The homepage reference remains grounded in the informative web surface while acknowledging that wider brand range. [Brand introduction](https://brand.design-system.service.gov.uk/introduction/).

### Principles

The official Government Design Principles begin with user needs, ask teams to reuse useful work, design with data, simplify difficult tasks and iterate. They also require inclusive design, attention to context, consistency that allows necessary differences, open sharing, and minimising environmental impact. The final principle was added in April 2025. [Government Design Principles](https://www.gov.uk/guidance/government-design-principles).

For implementation, the Service Manual describes progressive enhancement as starting with functional HTML, then adding CSS and JavaScript. It also acknowledges cases in which core functionality needs JavaScript and requires consideration of access through other channels. This is more precise than claiming that no component can rely on JavaScript. [Progressive enhancement](https://www.gov.uk/service-manual/technology/using-progressive-enhancement).

Official public-sector guidance describes the accessibility regulations that came into force in September 2018 and the requirements to meet WCAG 2.2 AA and publish an accessibility statement, while acknowledging possible legal exceptions. [Public-sector accessibility requirements](https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps).

The Design System colour guidance requires WCAG 2.2 AA minimum text and interactive-element contrast. This reference records GOV.UK's actual yellow focus design; it does not claim that WCAG specifies that hexadecimal colour.

### Personas

No named personas were verified; the official audience description covers UK residents, British citizens abroad, and people abroad who want to do business in or travel to the UK. [Use clear language](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/).

## Colors

The homepage census contains 24 first-party `--govuk-*` custom properties. Its most frequent paragraph colour is `#0b0c0c` across 26 paragraphs; the most frequent text colour overall is the link colour `#1a65a6`, across 76 text-bearing elements. Use paragraph ink to identify the body foreground.

| Role | Value | Evidence and use |
|---|---|---|
| Primary / brand | `#1d70b8` | `--govuk-brand-colour`; measured header and homepage-link background |
| Link | `#1a65a6` | `--govuk-link-colour`; measured HMRC and Benefits link text |
| Link hover / primary-hover | `#0f385c` | `--govuk-link-hover-colour`; measured link hover; official blue shade-50 |
| Accent teal | `#00ffe0` | Official core brand colour; measured SVG wordmark dot at rest |
| Canvas / on-primary | `#ffffff` | `--govuk-body-background-colour`; white search field and header lettering |
| Foreground | `#0b0c0c` | `--govuk-text-colour`; paragraph ink and focused link text |
| Search ink | `#000000` | Actual homepage search input text and inset focus edge; distinct from paragraph ink |
| Secondary text | `#484949` | `--govuk-secondary-text-colour`; official secondary-text role and black tint-25 |
| Surface | `#f4f8fb` | Template and surface-background variables; search submit hover background |
| Surface border | `#8eb8dc` | `--govuk-surface-border-colour` |
| Hairline / input hover | `#cecece` | Border and hover variables; official border role, black tint-80 |
| Input border | `#0b0c0c` | Official service-input variable; the homepage search field itself has no rest border |
| Focus | `#ffdd00` | `--govuk-focus-colour`; measured keyboard focus |
| Focus text | `#0b0c0c` | `--govuk-focus-text-colour`; measured links and logo |
| Error / warning action | `#ca3535` | `--govuk-error-colour`; official warning-button CSS |
| Success / default service action | `#0f7a52` | `--govuk-success-colour`; service-button CSS and visible cookie buttons |
| Visited | `#54319f` | `--govuk-link-visited-colour`; declared role, not a visited-state experiment |
| Notification banner | `#1d70b8` | Official banner border and title strip; its content area is white |

The retained service-button and tag colours below come from the opened Design System CSS and examples. They describe official service components, not additional homepage state measurements.

| Official component role | Background / foreground | Supporting colour |
|---|---|---|
| Default service button | `#0f7a52` / `#ffffff` | Shadow `#083d29`; CSS hover `#0b5c3e` |
| Secondary button / surface-alt | `#f3f3f3` / `#0b0c0c` | Shadow `#858686`; CSS hover `#cecece` |
| Warning button | `#ca3535` / `#ffffff` | Shadow `#651b1b`; CSS hover `#982828` |
| Default tag | `#d2e2f1` / `#0f385c` | Blue tint-80 / blue shade-50 |

The homepage search submit also uses `#d2e2f1`, with `#1d70b8` for its icon. Its hover background is `#f4f8fb`.

The Design System explicitly assigns colours by purpose through `govuk-functional-colour`, including `"brand"`, `"text"` and `"error"`. Use `govuk-colour` for palette colours outside those functional roles. Its guidance reserves focus yellow for focus and permits supporting palette colours for illustrations or appropriate custom components. [Colour guidance](https://design-system.service.gov.uk/styles/colour/), [served component CSS](https://design-system.service.gov.uk/stylesheets/main-206763ef36517e2a2f1a37045d34db0a.css).

## Typography

**Official product use.** The brand guidelines name **GDS Transport** as GOV.UK's typeface. They trace it to Jock Kinneir and Margaret Calvert's road-sign typeface and say GDS adapted it for digital use in 2012. The official names of its two weights are **Light** and **Bold**; the site's CSS maps them to normal/400 and bold/700. The Design System requires GDS Transport for services on `service.gov.uk`. [Brand typography](https://brand.design-system.service.gov.uk/typography/), [typeface guidance](https://design-system.service.gov.uk/styles/typeface/).

**Live-loaded.** The homepage font census reports `GDS Transport normal normal` and `GDS Transport bold normal` as loaded. Body, H1 and the first button declare `"GDS Transport", arial, sans-serif`. The measured search input uses 19px/400, and the Menu label uses 16px/700.

**Official distributed assets.** The live `@font-face` rules reference same-origin Light and Bold files in WOFF2 and WOFF under `/assets/frontend/`. Their CSS says the cut was customised for exclusive use on `gov.uk` and is not commercially available. The font binaries were not separately downloaded or inspected. This is font-distribution evidence from the served stylesheet, not permission for unrelated products to use the cut. [Homepage stylesheet](https://www.gov.uk/assets/frontend/views/_homepage-4b78ffd85484b305e392c489eec8af4fc215bd086f63d464f44372f72ad6d92b.css).

**Declared-only.** `arial` and generic `sans-serif` occur in the CSS stack, but are not loaded web faces in the census. The icon-only Search submit has a computed Arial family and 13.3333px/400 metric; its visible magnifying glass is an SVG. That declaration does not become the product typeface or a specimen. The logo is also an SVG; its 30px computed font metric does not describe the wordmark outlines.

**Unresolved.** No additional product font or 14px caption role was verified. Substitute: none chosen.

The published type scale uses line heights in multiples of 5px. Heading classes express visual hierarchy independently from HTML heading level; official examples use `govuk-heading-l` for an H1 on question pages and `govuk-heading-xl` for an H1 in long-form content. Headings use sentence case. [Type scale](https://design-system.service.gov.uk/styles/type-scale/), [headings](https://design-system.service.gov.uk/styles/headings/), [paragraphs](https://design-system.service.gov.uk/styles/paragraphs/).

| Role | Large-screen size / line height | Weight | Source class |
|---|---|---|---|
| Homepage headline span | 64px / 1.07 | 700 | `.homepage-header__intro`, served homepage CSS above 1281px |
| Heading XL | 48px / 50px | 700 | `.govuk-heading-xl` |
| Heading L | 36px / 40px | 700 | `.govuk-heading-l` |
| Heading M | 24px / 30px | 700 | `.govuk-heading-m` |
| Heading S | 19px / 25px | 700 | `.govuk-heading-s` |
| Lead paragraph | 24px / 30px | 400 | `.govuk-body-l` |
| Default paragraph | 19px / 25px | 400 | `.govuk-body` |
| Small paragraph | 16px / 20px | 400 | `.govuk-body-s` |
| Homepage search | 19px / 28px | 400 | Measured combobox |
| Menu | 16px / normal | 700 | Measured toggle |
| Standard service button | 19px / 19px | 400 | Official `.govuk-button` CSS |

The six measured controls report normal letter spacing. This supports those controls' treatment; it does not establish a system-wide prohibition on tracking.

## Layout

Use the documented small-screen-first, single-column starting point. The Design System recommends two-thirds or two-thirds-and-one-third layouts for most page types and a main reading column no longer than about 75 characters. The published layout guide calls its default maximum page width 1020px; the served `.govuk-width-container` rule separately has a 960px content maximum, with 15px narrow-screen margins and 30px wider-screen margins before centring. Keep those documented page-width and CSS content-width facts distinct. [Layout](https://design-system.service.gov.uk/styles/layout/).

The static spacing scale is `0, 5, 10, 15, 20, 25, 30, 40, 50, 60` pixels, exposed through `govuk-spacing`. The responsive scale retains units 0–3, then maps small/large screens as 15/20, 15/25, 20/30, 25/40, 30/50 and 40/60. The guide uses the tablet breakpoint of approximately 640px to distinguish those scales. [Spacing](https://design-system.service.gov.uk/styles/spacing/).

The measured desktop screenshot places the blue hero before “Popular on GOV.UK”, then the services directory. The served homepage CSS gives the hero search a two-thirds width at its tablet breakpoint and the popular-links list three columns at its desktop breakpoint. It uses 60px section padding in several desktop sections, a 40px bottom margin for the headline, and 32px bottom padding on popular-link items. These are homepage rules, not a universal spacing mandate. The heading CSS also varies bottom margins by class and breakpoint, so use those classes rather than a single fixed 25/20/15px hierarchy.

### Responsive Behavior

Only the 1440×1000 desktop viewport was rendered. The following are source rules, not a mobile-device test.

The homepage census exposes `--govuk-breakpoint-mobile: 20rem`, `--govuk-breakpoint-tablet: 40.0625rem` and `--govuk-breakpoint-desktop: 48.0625rem`. Its served CSS uses corresponding `em` breakpoints. The homepage headline span steps through 2.5rem, 3.125rem, 3.4375rem and 4rem, with the last step at 1281px. Popular links change from one column to three at 48.0625em.

The current published small-screen type scale is Heading XL 32px/35px, Heading L 27px/30px, Heading M and lead body 21px/25px, default body and Heading S 19px/25px, and small body 16px/20px. Large-screen values are in §3. The Design System identifies this updated small-screen scale as a GOV.UK Frontend v6 change. [Type scale](https://design-system.service.gov.uk/styles/type-scale/).

The official layout guide says to start with a single column and design for screen sizes rather than assuming a particular device. A universal 44px button target, mobile menu interaction, and checkbox/radio hit areas were not measured in this capture.

## Elevation & Depth

At rest, the six measured homepage controls have no box shadow. Focus adds a functional edge: search controls use a 4px inset shadow; text and logo links use the yellow top and near-black bottom shadow described above.

Official service buttons use a 2px bottom shadow, coloured `#083d29`, `#858686` or `#651b1b` for default, secondary and warning variants. Their `:active` CSS moves the button down by 2px. This documents the service button treatment without making a system-wide claim that no other shadow or elevation can exist. [Served service CSS](https://design-system.service.gov.uk/stylesheets/main-206763ef36517e2a2f1a37045d34db0a.css).

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.button`: `0 2px 0 #083d29`
- `shadow.button-secondary`: `0 2px 0 #858686`
- `shadow.button-warning`: `0 2px 0 #651b1b`
- `shadow.focus`: `0 -2px #ffdd00, 0 4px #0b0c0c`

## Motion & Easing

All six captured control identities have the raw computed transition string `all 0s ease 0s`. No transition duration or easing token beyond that observation is assigned here. The measured hover and focus changes are settled style changes; the Menu's opened state and service accordions were not exercised.

The official brand refresh separately introduces animation into the identity, primarily for the app and social channels. That channel-level direction does not supply timings for these homepage controls. [Changes to GOV.UK](https://www.gov.uk/guidance/changes-to-govuk).

## Components

Six homepage controls were measured at 1440×1000. Every hover snapshot matched `:hover`, every pressed snapshot matched `:active`, and focus came from a real Tab walk. The cookie banner stayed open. No dialog was closed and no overlay was hidden. Heights below are the selected elements' bounding boxes, which can be smaller than the surrounding card or action row.

| Control | Rest identity | Hover | Pressed | Keyboard focus |
|---|---|---|---|---|
| Search submit, “Search GOV.UK” | 50×50px; radius 0; padding 0; `#d2e2f1` / `#1d70b8`; no border or shadow | Background `#f4f8fb` | Hover background plus 3px yellow outline and 4px near-black inset shadow | Rest colours; 3px `#ffdd00` solid outline at offset 0; inset `0 0 0 4px #0b0c0c` |
| Search combobox | 580×50px; radius 0; padding 6px; 19px/400 GDS Transport, line height 28px; `#ffffff` / `#000000`; no border or shadow | No change within the comparison scope below | 3px yellow outline and 4px black inset shadow | 3px `#ffdd00` solid outline at offset 0; inset `0 0 0 4px #000000` |
| Menu / “Show navigation menu” | 103.4×61px; radius 0; padding 0; 16px/700; transparent on blue, white label; no shadow | White `::after` underline, 83.3516×3px | Same underline | Yellow background; dark label, chevron and underline; inner right border changes from `#f4f8fb` to yellow |
| GOV.UK home link, `#logo` | 162×37px; radius 0; padding 0; computed 30px/400, SVG artwork; blue / white | 3px white bottom border and underline; height becomes 40px | Yellow / near-black, dark SVG including the teal dot; yellow top and dark bottom shadow | Same colour and shadow treatment as press |
| “HMRC account: sign in or set up” | Label 214.2×48.2px; radius 0; padding 0; 19px/700, line height 24.7px; transparent on white, `#1a65a6`; underlined | Text and underline `#0f385c` | Yellow background, near-black text; text underline removed; yellow top and dark bottom shadow | Same treatment as press |
| Benefits card link | Label 72.9×23.5px; radius 0; padding 0; 19px/700, line height 25px; transparent on white, `#1a65a6`; underlined | Text/underline `#0f385c`; chevron's two 3px borders change from brand blue to `#0f385c` | Yellow background; near-black text and chevron; underline removed; yellow top and dark bottom shadow | Same treatment as press |

For the home, HMRC and Benefits links, the focus shadow is exactly `0 -2px #ffdd00, 0 4px #0b0c0c`. Focus changes did not persist after blur. The focus indicators are authored styles, not a browser `auto` outline. The pointer-pressed snapshots include the element's simultaneous focus state; they are not isolated `:active` rules.

The search input's “no change” hover verdict covers itself, `::before`/`::after`, zero descendants, and three ancestor levels with their pseudo-elements, across the probe's colour, border, outline, shadow, transform, opacity, decoration, background, mask, geometry and image/SVG properties. It does not claim absence of pixel-only or out-of-scope changes. The HMRC arrow is a sibling outside its selected link, and is not included in that link's state claim.

### Official service components retained from the prior reference

These are current documentation and stylesheet facts. They were not additional browser state captures, and are not exported as measured interactive components. The opened standalone examples establish the element labels and CSS classes. [Button](https://design-system.service.gov.uk/components/button/), [text input](https://design-system.service.gov.uk/components/text-input/), [select](https://design-system.service.gov.uk/components/select/), [tag](https://design-system.service.gov.uk/components/tag/), [inset text](https://design-system.service.gov.uk/components/inset-text/), [notification banner](https://design-system.service.gov.uk/components/notification-banner/).

| Component | Published CSS and usage |
|---|---|
| Default “Save and continue” button | `.govuk-button`: green `#0f7a52`, white text, radius 0, padding 8px 10px 7px, 19px/400 with line height 1, 2px transparent border, shadow `0 2px 0 #083d29`. These CSS dimensions total 38px at a 19px line height. Default buttons carry the page's main action. |
| Secondary “Find address” button | Same base geometry; `#f3f3f3` / `#0b0c0c`, shadow `0 2px 0 #858686`. Use for secondary actions; the guidance also gives “Add another” as an action label. |
| Warning “Delete account” button | Same base geometry; `#ca3535` / `#ffffff`, shadow `0 2px 0 #651b1b`. Reserve for serious, difficult-to-undo actions. The guidance recommends an extra confirmation step, with a warning button for the final confirmation. |
| “Start now” link button | Official guidance uses a link because the start action does not usually submit form data. The start modifier is 24px/700 on large screens and retains the default green and white treatment. |
| Service text input | `.govuk-input`: height 2.5rem (40px at a 16px root), padding 5px, radius 0, 2px border using `--govuk-input-border-colour`, 19px/400. Its focus CSS declares a 3px yellow outline and a 2px inset input-border-colour shadow. This is separate from the measured 50px homepage combobox. |
| Native select | `.govuk-select`: height 2.5rem (40px at a 16px root), padding 5px, 2px input-colour border, `#ffffff` background and `#0b0c0c` text, 19px/400. It is a native `<select>`. |
| Inset text | 10px left border in `#cecece`, padding 15px, foreground `#0b0c0c`; no background declaration in the rule. Use to distinguish supplementary content from the surrounding body text. |
| Default “Completed” tag | `.govuk-tag`: `#d2e2f1` / `#0f385c`, radius 1px, padding 2px 8px 3px, 19px/400. Tags show status and must not be links or buttons. The current all-colours example lists grey, green, teal, blue, purple, magenta, red, orange and yellow: nine named colours. |
| Informational notification banner | 5px brand-blue border and a blue title strip with white text; its content is `#ffffff` with `#0b0c0c` text. Place it before the page H1 for information outside the immediate page task. |
| Success notification banner | Green border/title strip, white title, white content area and dark body text. The guidance gives a green “Success” heading for an expected outcome, and removes the banner on the next page. |

The service-button CSS declares hover backgrounds `#0b5c3e`, `#cecece` and `#982828` for default, secondary and warning variants. On focus it sets a yellow border, a 3px transparent outline and a 1px yellow inset shadow; the `:focus:not(:active):not(:hover)` rule additionally sets yellow background, dark text and a 2px dark bottom shadow. Those are published selectors, not measured service-button states.

The visible cookie buttons separately confirm a green background, white 19px/400 label, 38px height, radius 0 and padding 8px 10px 7px in the survey. They are consent controls and are excluded from exported components.

The official index still lists **37 components**: Accordion, Back link, Breadcrumbs, Button, Character count, Checkboxes, Cookie banner, Date input, Details, Error message, Error summary, Exit this page, Feedback, Fieldset, File upload, Generic header, GOV.UK footer, GOV.UK header, Inset text, Language navigation, Notification banner, Pagination, Panel, Password input, Phase banner, Radios, Select, Service navigation, Skip link, Summary list, Table, Tabs, Tag, Task list, Text input, Textarea, Warning text. The separate patterns index lists **30 task or page patterns**, including addresses, bank details, check answers, confirm an email address, create accounts, question pages and step-by-step navigation. Index membership is not a measurement of those components. [Components index](https://design-system.service.gov.uk/components/), [patterns index](https://design-system.service.gov.uk/patterns/).

### States

The measured rest, hover, pressed and keyboard-focus treatments are in §4. No disabled control was measured. The declared visited colour is retained as a token role, rather than described as an observed navigation state.

The opened service documentation adds the following behaviour:

- **Task status:** task rows communicate what is done and what remains; current Task list guidance uses black text without a background for “Completed” so incomplete work receives more attention. [Task list](https://design-system.service.gov.uk/components/task-list/).
- **Validation errors:** show both an error summary and a message beside each invalid answer. The summary has the heading “There is a problem”, links to the answers and receives keyboard focus. Error text should explain the correction and retain the user's existing answers. The served CSS uses a **5px** red left border on the error form group and a red border on an input with `govuk-input--error`; the error message is **19px/700**. [Error summary](https://design-system.service.gov.uk/components/error-summary/), [error message](https://design-system.service.gov.uk/components/error-message/), [served CSS](https://design-system.service.gov.uk/stylesheets/main-206763ef36517e2a2f1a37045d34db0a.css).
- **Service unavailable:** use a dedicated page headed “Sorry, the service is unavailable”, with availability information, what happened to answers where relevant, and useful contact or alternative-service details. The pattern distinguishes planned closure from a service problem. [Service unavailable pages](https://design-system.service.gov.uk/patterns/service-unavailable-pages/).
- **Transaction complete:** use a confirmation page with a reference if one exists, next steps, contact details and a way to save the transaction. The published green panel has white type; the opened example and CSS do not establish a checkmark requirement. [Confirmation pages](https://design-system.service.gov.uk/patterns/confirmation-pages/).
- **An expected action completes within a wider journey:** a green notification banner can acknowledge it; linear services usually use a confirmation page instead. The guidance removes a green banner when the user moves to another page. [Notification banner](https://design-system.service.gov.uk/components/notification-banner/).
- **Disabled CSS:** the served `.govuk-button[disabled]` rule sets opacity to 0.5, and its disabled hover sets the cursor to `not-allowed`. The service input's disabled rule sets opacity 0.5, inherited colour and transparent background. The documented disabled-button HTML also includes `disabled` and `aria-disabled="true"`. These are source declarations, not measured disabled states; the button guidance advises avoiding disabled buttons unless research supports them. [Button guidance](https://design-system.service.gov.uk/components/button/), [served CSS](https://design-system.service.gov.uk/stylesheets/main-206763ef36517e2a2f1a37045d34db0a.css).

Empty search results, submission loading and skeleton states were not verified.

## Do's and Don'ts

- Use GDS Transport only within its documented product and distribution conditions. Keep its Light/400 and Bold/700 distinction; no substitute has been chosen here.
- Use the functional colour roles in their intended contexts and preserve visible keyboard focus. Reserve `#ffdd00` for focus, as the colour guidance says.
- Reproduce the sampled homepage controls with 0px corners. Keep the documented Tag's 1px radius when implementing that component.
- Use the green default service button for a main service action, the secondary variant for a secondary action, and warning red sparingly for serious destructive actions. Keep the documented bottom shadow.
- Keep paragraph ink `#0b0c0c` distinct from link `#1a65a6`, brand `#1d70b8`, and the homepage search's `#000000` ink.
- Write headings and button labels in sentence case. Make an action's meaning clear in its words; colour alone does not explain a destructive action.
- Keep status tags non-interactive. Use text alongside status colour, as the Tag guidance requires.
- Choose colours from the published palette. The brand guidelines prohibit mixed-colour gradients, while permitting a single-colour gradient over imagery; the web palette also explicitly allows supporting illustration colours. [Brand colour rules](https://brand.design-system.service.gov.uk/colour/govuk-blue/).

## Voice & Tone

Current GOV.UK content guidance requires plain English, short paragraphs and clear actions. It recommends active voice while allowing specific exceptions, addresses the user as “you”, and asks for conversational writing with the authority to help. Its tone is specific, informative, clear, concise and human. It says there is usually no need for “please”; that is not a blanket ban. Specialist terms may be necessary, but should be explained on first use. [Use clear language](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/), [use the right tone](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/right-tone/).

Button guidance distinguishes “Continue” when information is not saved from “Save and continue” when it is, and gives “Start now”, “Sign in” and “Confirm and send” for their respective tasks. Error guidance asks for an explanation of what went wrong and how to fix it, using language from the field label. Hints can give a concrete format, such as “For example, 27 3 2007” in the error-message example. Link guidance rejects generic labels such as “click here” in favour of descriptive text. [Button labels](https://design-system.service.gov.uk/components/button/), [error messages](https://design-system.service.gov.uk/components/error-message/), [effective links](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/add-links/).

## Agent Prompt Guide

Use `#1d70b8` for the homepage header, `#00ffe0` for the wordmark's accent dot, `#ffffff` for the page, `#0b0c0c` for paragraph ink, `#1a65a6` for links, `#0f385c` for link hover and `#ffdd00` for focus. The declared visited colour is `#54319f`. Official service buttons use `#0f7a52` with shadow `#083d29`; the documented tag uses `#d2e2f1` / `#0f385c`.

Example prompts grounded in the captured controls and opened component sources:

- “Build the GOV.UK homepage search field: 50px high, 6px padding, 19px/400 GDS Transport, white with black ink and no rest border. On keyboard focus, add a 3px yellow outline at offset 0 and a 4px black inset edge.”
- “Place a 50px square search icon button beside it: `#d2e2f1` background, blue magnifying glass, no rounding or rest shadow; hover to `#f4f8fb`; keyboard focus adds the yellow outline and a near-black 4px inset edge.”
- “Build a Benefits directory card link in 19px/700 GDS Transport on white. Rest link `#1a65a6`, hover `#0f385c`, and focus yellow with dark text, dark chevron and the measured two-part underline shadow. Keep the inline-label box separate from the card layout.”
- “For a service page, use the documented `.govuk-button`: green, white 19px/400 label, padding 8px 10px 7px, radius 0 and a 2px darker-green bottom shadow. Use the official component CSS for its states.”
- “For a status label, use the documented 1px-radius tag, padding 2px 8px 3px and dark blue text on pale blue. Keep it non-interactive.”
- “For an informational banner, use a blue title strip and border above a white content area with dark text.”

During iteration, check the actual selected element, visible label or SVG, surrounding background, and keyboard focus. Use the published type scale and component classes instead of imposing a blanket 19px label rule or a blanket zero-radius rule.

## Governance

### Known Gaps

- **Contrast, `search-submit`.** Text `#1d70b8` on `#d2e2f1` measures 3.91:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
