---
name: Mercury
colors:
  primary: '#5266eb'
  primary-hover: '#4354c8'
  primary-active: '#3442a6'
  periwinkle: '#9cb4e8'
  mist: '#cdddff'
  canvas: '#171721'
  canvas-elevated: '#1e1e2a'
  canvas-light: '#fbfcfd'
  surface: '#ededf3'
  surface-secondary: '#f4f5f9'
  surface-hover: '#dddde5'
  foreground: '#ededf3'
  ink-subdued: '#c3c3cc'
  ink-disabled: '#70707d'
  on-primary: '#ffffff'
  error: '#d03275'
  hairline: '#272735'
  border-default: '#535461'
  focus-ring: '#9cb4e8'
typography:
  button:
    fontSize: 16px
    fontWeight: 420
    lineHeight: 1
    use: Measured navigation actions, Launch demo and hero email input; live-loaded arcadia.
rounded:
  sm: 4px
  primary: 32px
  secondary: 40px
spacing:
  xs: 4
  sm: 8
  md: 12
  base: 16
  xl: 24
  section: 48
  s20: 20
  s32: 32
  s64: 64
  s96: 96
components:
  nav-open:
    type: button
    backgroundColor: '#5266eb'
    textColor: '#ffffff'
    rounded: 32px
    height: 40px
    padding: 0px 20px
    typography: 16px / 420
    hover: '#4354c8'
    pressed: '#3442a6'
    focus: 'bg #4354c8; outline 2px solid #9cb4e8; outline-offset 4px'
    use: Open account navigation link to https://app.mercury.com/signup, measured without following it. Rest width 144.5px, no border or shadow.
  launch-demo:
    type: button
    textColor: '#ededf3'
    border: 1px solid rgba(175, 178, 206, 0.36)
    rounded: 40px
    height: 40px
    padding: 0px 20px
    typography: 16px / 420
    hover: rgba(175, 178, 206, 0.28)
    pressed: rgba(175, 178, 206, 0.36)
    focus: 'bg rgba(175, 178, 206, 0.28); outline 2px solid #9cb4e8; outline-offset 4px'
    use: Rest fill rgba(175, 178, 206, 0.2). Launch demo hero link, 141.1px wide; 20px backdrop blur over the landscape image. Link destination was not followed.
  nav-pricing:
    type: button
    textColor: '#ededf3'
    rounded: 40px
    height: 40px
    padding: 0px 20px
    typography: 16px / 420
    hover: bg rgba(156, 180, 232, 0.28)
    pressed: bg rgba(156, 180, 232, 0.28)
    focus: 'bg rgba(156, 180, 232, 0.28); outline 2px solid #9cb4e8; outline-offset 4px'
    use: 'Pricing navigation link, 90.4px wide. Transparent at rest over the hero image; the pointer baseline found #171721 behind it after scrolling.'
  hero-email:
    type: input
    textColor: '#ededf3'
    height: 46px
    padding: 0px 0px 0px 20px
    typography: 16px / 420
    hover: wrapper bg rgba(175, 178, 206, 0.28)
    pressed: wrapper bg rgba(175, 178, 206, 0.28)
    focus: 'wrapper bg rgba(175, 178, 206, 0.28); wrapper outline 2px solid #9cb4e8; outline-offset 0px'
    use: Empty Enter your email input, 245.5px wide, transparent over its frosted wrapper rgba(175, 178, 206, 0.2). Own radius 32px 0px 0px 32px; the wrapper owns the 1px border and state indication. No form was submitted.
  news-more:
    type: button
    textColor: '#ededf3'
    height: 40px
    padding: 0px
    typography: 16px / 420
    hover: rgba(156, 180, 232, 0.28)
    pressed: rgba(156, 180, 232, 0.36)
    focus: 'bg rgba(156, 180, 232, 0.28); outline 2px solid #9cb4e8; outline-offset 4px'
    use: 'Rest fill rgba(156, 180, 232, 0.2). Read more link inside the Fast Company news card, a circular 40px action on #1e1e2a. The measured link is the arrow action, not the surrounding card. Its destination was not opened by the state probe.'
  nav-products:
    type: button
    textColor: '#ededf3'
    rounded: 40px
    height: 40px
    padding: 0px 20px
    typography: 16px / 420
    hover: bg rgba(156, 180, 232, 0.28)
    pressed: bg rgba(156, 180, 232, 0.28)
    focus: 'bg rgba(156, 180, 232, 0.28); outline 2px solid #9cb4e8; outline-offset 4px'
    use: 'Products navigation menu button, 124.6px wide. Transparent over the hero image; #171721 behind the pointer baseline. Menu-open behavior was not activated.'
fonts:
  roles:
    sans: arcadia
    display: arcadiaDisplay
---

# Design System Inspiration of Mercury

## Overview

### Visual Theme & Atmosphere

Mercury brings business banking and financial operations into one interface: accounts, payments, invoices, bill pay, spend monitoring and cash-flow information. Its company page describes banking becoming the nucleus of those operations. It is a fintech company whose banking services are provided through partner banks. [Company](https://mercury.com/about)

The measured homepage presents that software through a cinematic landscape: a desk, chair and laptop sit above a misty river valley. A centered headline, pale lettering and rounded actions occupy the sky, while the landscape imagery supplies most of the visual complexity. Dark `#171721` sections and `#1e1e2a` surfaces continue below it. Indigo `#5266eb` anchors the account action; softer translucent surfaces support navigation and the demo. The expansive scene, centered type and compact actions give the measured homepage its editorial spaciousness.

Mercury’s design thinking has developed alongside its expanding product. Its December 2025 emotional-resonance essay describes a framework shared by product and marketing teams, with a chosen feeling guiding each journey. In March 2026 it explained why its public demo shows the real, evolving product without a signup gate. The useful design reference is both expressive presentation and an accessible route to evaluating the software. [Emotional resonance](https://mercury.com/blog/emotional-resonance), [public demo](https://mercury.com/blog/designing-in-the-open)

Primary tasks visible on this surface are opening an account, entering an email, launching a demo and exploring products and pricing. The captured page is the English homepage, `mercury.com/`, with HTML `lang="en"`.

### Brand Narrative

Mercury was founded in 2017 by Immad Akhund, Jason Zhang and **Max Tagher**. Its launch post is dated April 16, 2019 and announces the move out of private alpha. That post describes practical interface goals: a short money-sending flow, searchable transactions and accessible account details, alongside better financial insight. [Founders and history](https://mercury.com/blog/occ-national-bank-charter-application), [launch](https://mercury.com/blog/salve-munde)

The company’s March 2025 announcement traces expansion from accounts to a corporate card and financial software for bills, invoices, accounting and employee expenses, and reported more than 200,000 business customers at that time. Today’s company page describes managing payments, spend and cash flow together. The design reference should support that breadth without assuming a particular dashboard arrangement. [Product evolution](https://mercury.com/blog/series-c-announcement), [company](https://mercury.com/about)

The 2026 demo essay supplies a concrete expression of respect for prospective customers: let people inspect the working product and make their own decision. That position is supported by the homepage’s demo link. [Demo rationale](https://mercury.com/blog/designing-in-the-open)

### Principles

Mercury’s emotional-resonance framework names five foundational categories: **Trust, Clarity, Connection, Momentum and Transcendence**. Teams choose a primary feeling for a journey, consider where a person begins emotionally, and question design choices that fail to serve the intended outcome. The essay treats those intentions as hypotheses to check through research. [Framework](https://mercury.com/blog/emotional-resonance)

The open-demo essay adds a second documented practice: give prospective customers an ungated view of the actual product as it evolves. [Practice](https://mercury.com/blog/designing-in-the-open)

### Personas

Verified audience segments include technology startups, venture-capital firms, ecommerce companies and other small businesses. No individual persona was verified. [Audience evidence](https://mercury.com/blog/series-c-announcement)

## Colors

The survey enumerated 402 computed root custom properties and 472 declared properties. Roles below distinguish the rendered dark homepage from root theme definitions; the light values do not establish a separate dashboard measurement.

| Role | Value | Evidence and application |
|---|---|---|
| Primary | `#5266eb` | `--surface-primary`; navigation account action at rest |
| Primary hover | `#4354c8` | `--surface-primary-hover`; the same action on hover and keyboard focus |
| Primary active | `#3442a6` | `--surface-primary-active`; the same action while pressed |
| Periwinkle / measured focus ring | `#9cb4e8` | `--color-purple-magic-400`; authored focus outline; translucent news and navigation states |
| Mist | `#cdddff` | `--color-purple-magic-200`; three opaque background census occurrences; no universal gradient recipe established |
| Dark canvas | `#171721` | `--color-neutral-base-950`; six background census occurrences |
| Elevated dark surface | `#1e1e2a` | `--surface-inverted`; seven background occurrences and the news action’s card ancestor |
| Light canvas token | `#fbfcfd` | `--background-default`, `--surface-input` on the root theme |
| Default root surface | `#ededf3` | `--surface-default` |
| Secondary root background | `#f4f5f9` | `--background-secondary` |
| Root surface hover | `#dddde5` | `--surface-default-hover` |
| Foreground | `#ededf3` | Actual paragraph ink: 62 paragraphs; `--text-default-inverted` |
| Subdued ink | `#c3c3cc` | Nine paragraphs; `--text-subdued-inverted` and `--border-subdued` |
| Disabled token | `#70707d` | `--text-disabled`, `--surface-primary-disabled`; no disabled control was tested |
| On-primary | `#ffffff` | Actual account-action label; root `--text-on-primary` is `#fff` |
| Error token | `#d03275` | `--text-error`, `--icon-error`; no validation error was triggered |
| Emphasized root border | `#272735` | `--border-emphasized`; also the surveyed checkbox fill |
| Default root border | `#535461` | `--border-default`; a different role from the emphasized border |
| Frosted neutral | `rgba(175, 178, 206, 0.2)` | Measured demo surface and email wrapper; retained with its alpha |

The hero demo uses `rgba(175, 178, 206, 0.2)` with a `1px solid rgba(175, 178, 206, 0.36)` border. Hover raises the fill alpha to `0.28`; pressing raises it to `0.36`. The circular news action uses the same alpha sequence with periwinkle channels: `rgba(156, 180, 232, 0.2)`, `rgba(156, 180, 232, 0.28)` and `rgba(156, 180, 232, 0.36)`.

The CSS also contains beige, orange, green, blue and purple palette families. The dark neutral homepage is one application of a broader theme vocabulary, and periwinkle supports actions alongside the primary indigo.

## Typography

| Evidence class | Verified finding |
|---|---|
| Official product use | No opened typography specification identifies the logged-in banking product’s font. Homepage observations apply to the public surface. |
| Live-loaded | `arcadia 360 500 normal` and `arcadiaDisplay 320 480 normal`, exactly as listed by `document.fonts`. Body and buttons declare `arcadia`; H1 declares `arcadiaDisplay`. |
| First-party-served assets | Production CSS references `ArcadiaText_Variable-s.p.1x_q7ztf_htve.woff2` and `ArcadiaDisplay_Variable-s.p.37a6szvr8v8r0.woff2` under `/_next/static/media/`. Both use `font-display: optional`. A separate public font package or redistribution licence was not verified. |
| Declared-only | `IBM Plex Mono` at 400 normal; `tiemposHeadline` at 400 normal and 300/400/500 italic. Their WOFF2 sources appear in the census, but neither face appears in its loaded list. They receive no specimen or family token. Generated fallback aliases are also excluded. |
| Unresolved | Typeface commission history, font licensing and the typography of authenticated app screens. Substitute: none chosen. |

The loaded faces expose weight ranges, rather than only four static cuts. Mercury’s theme names 300, 360, 400, 420, 480 and 500, plus `--font-weight-medium: 530`; a declared weight does not prove a loaded face supports it. The six sampled controls use **16px / 420 / arcadia**, a 16px line height and normal tracking. The survey’s footer links use 16px/420 with 20px line height; its opt-out label uses 12px/480 with 16.8px line height.

The following are **CSS declarations**, not additional computed measurements. The homepage H1 carries `.arcadia-display-3`, which declares `font-size: clamp(2rem,.75rem + 3.126vw,4.563rem)`, weight 480, 110% line height and zero tracking. This fluid display rule replaces a fixed hero recipe. Base rules for `.arcadia-heading-1` declare display-family text at `1.75rem`, 480, 120% line height and `.015em` tracking; `.arcadia-body-1` declares text-family `1rem`, 360, 135% line height and zero tracking. These class rules should be read with their responsive CSS, rather than treated as a complete product type scale. [Theme CSS](https://mercury.com/_next/static/chunks/1nnoba5m4czls.css)

## Layout

The desktop root declares `--grid-total-columns: 16`, `--grid-max-width: 1952px`, `--grid-gutters: 32px` and `--grid-margins: 32px`. Its navigation is 72px high. The viewport shows a centered hero message above the email-and-action group, with the landscape scene occupying the remainder of the first screen.

The numeric spacing vocabulary includes 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 96, 112, 128, 144, 160, 192, 224 and 240px. The utility spacing multiplier is `--spacing: 1px`, so this is not evidence for a universal 8px base. At the measured width, `--gap-xs` is 12px, `--gap-sm` 24px, `--gap-md` and `--gap-lg` 32px, `--gap-xl` 40px, `--gap-2xl` 72px and `--gap-3xl` 112px. Those are root values, not measurements of every gap on the page.

For the sampled actions, retain 20px horizontal padding, 40px height and 32px or 40px corner radii. The email field is taller at 46px and shares its visual container with the account button. The 4px checkbox corners are a separate treatment.

### Responsive Behavior

The opened production stylesheet contains root adjustments at `min-width: 40rem`, `48rem`, `64rem`, `80rem`, `96rem` and `122rem`. These are declared rules; the rendered probe covered the desktop viewport only.

| Declaration | Root change |
|---|---|
| Base | Grid has 12 columns; `--gap-md` is 16px; hero-padding token is 32px |
| At 48rem | Hero-padding token becomes 40px; larger gap and layout-padding tokens change |
| At 64rem | Grid becomes 16 columns; `--gap-md` becomes 32px; hero-padding token becomes 64px |
| At 80rem | Hero-padding token becomes 72px |
| At 122rem | Hero-padding token becomes 80px; `--layout-padding-xl` becomes 144px |

The H1 class uses the fluid `clamp(...)` declaration in §3. Mobile navigation behavior, touch targets, dashboard sidebar collapse and table reflow were not tested. [Responsive declarations](https://mercury.com/_next/static/chunks/1nnoba5m4czls.css)

## Elevation & Depth

All six sampled control surfaces have `box-shadow: none`. The hero demo link and the email wrapper instead use translucent neutral fills, 1px translucent borders and `backdrop-filter: blur(20px)`. The news action sits on an opaque `#1e1e2a` ancestor. Reproduce those material differences without adding an unmeasured shadow scale.

The hero image supplies visible spatial depth through the desk in the foreground and the valley behind it. No floating-dashboard-card shadow or universal gradient pair was established by this capture.

## Motion & Easing

The five sampled action controls declare a **0.3s** colour/surface transition with **`cubic-bezier(0, 0, 0.2, 1)`**. The computed property list includes color, background-color, border-color, outline-color, text-decoration-color, fill, stroke and the gradient custom properties. Preserve the timing where rebuilding those measured action states; it is not a universal modal or route-transition specification.

The input itself declares **`all 0s ease 0s`**. Its visible state change occurs on its wrapper, for which no separate raw transition string was recorded. All state samples settled for 900ms; the tool reported longest in-scope transitions of 300ms for the hero/navigation controls and 500ms for the news action’s comparison scope. Those waits are measurement metadata, not additional motion tokens.

Reduced-motion behavior, modal entrances, money updates and scroll choreography were not verified.

## Components

These are public homepage controls measured at 1440×1000. Link destinations were not followed and the email stayed empty. Every row has measured interaction states, detailed in §14.

| Key and exact identity | Size / radius | Padding / type | Rest treatment |
|---|---|---|---|
| `nav-open`: navigation link “Open account”, signup href | 144.5×40px / 32px | `0px 20px`; 16px/420 | `#5266eb` fill, `#ffffff` label; no border or shadow |
| `launch-demo`: hero link “Launch demo” | 141.1×40px / 40px | `0px 20px`; 16px/420 | `rgba(175, 178, 206, 0.2)`, `#ededf3`; 1px border at alpha 0.36; 20px backdrop blur |
| `nav-pricing`: navigation link “Pricing”, `/pricing` | 90.4×40px / 40px | `0px 20px`; 16px/420 | Transparent, `#ededf3`; the pointer baseline found `#171721` behind it |
| `hero-email`: input, placeholder “Enter your email” | 245.5×46px / `32px 0px 0px 32px` | `0px 0px 0px 20px`; 16px/420 | Transparent input with `#ededf3` ink, no own border; frosted wrapper supplies the visible fill and border |
| `news-more`: “Read more” link to the Fast Company AI-card article | 40×40px / computed `3.35544e+07px` | `0px`; 16px/420 | Circular arrow action; `rgba(156, 180, 232, 0.2)` on a `#1e1e2a` card, `#ededf3` ink |
| `nav-products`: navigation menu button “Products” | 124.6×40px / 40px | `0px 20px`; 16px/420 | Transparent with `#ededf3` ink; `#171721` behind the pointer baseline |

The Products chevron SVG measures 14×14px; the news arrow SVG measures 14×16px. The measured news link is the small arrow action inside a card, so it is recorded as a button-style link rather than a harvested card. No search input appeared among the 120 surveyed interactive elements; the email input is identified as email. The hero form’s submit button was surveyed at 40px high, 32px radius and 16px/420, but its states were not independently probed.

The survey also records a 20×20px checkbox at 4px radius. This supports that corner value in a specific context, rather than a universal button or input radius. Badge, dialog, toast, toggle and dashboard-card recipes were not verified.

### States

Every hover below has `:hover === true`; every pressed snapshot has `:active === true`; all focus snapshots were reached by a real Tab walk and have `:focus-visible === true`. No focus change persisted after blur. `#9cb4e8` is an authored solid outline here, rather than a browser `auto` ring.

| Control | Hover, relative to rest | Pressed, relative to rest | Keyboard focus |
|---|---|---|---|
| `nav-open` | Fill `#4354c8` | Fill `#3442a6` | Fill `#4354c8`; 2px solid `#9cb4e8` outline, 4px offset |
| `launch-demo` | Fill `rgba(175, 178, 206, 0.28)` | Fill `rgba(175, 178, 206, 0.36)` | Hover fill; 2px solid `#9cb4e8` outline, 4px offset |
| `nav-pricing` | Fill `rgba(156, 180, 232, 0.28)` | Same fill as hover | Hover fill; 2px solid `#9cb4e8` outline, 4px offset |
| `hero-email` | Wrapper fill `rgba(175, 178, 206, 0.28)` | Same wrapper fill as hover | Same wrapper fill; wrapper outline 2px solid `#9cb4e8`, offset 0px |
| `news-more` | Fill `rgba(156, 180, 232, 0.28)` | Fill `rgba(156, 180, 232, 0.36)` | Hover fill; 2px solid `#9cb4e8` outline, 4px offset |
| `nav-products` | Fill `rgba(156, 180, 232, 0.28)` | Same fill as hover | Hover fill; 2px solid `#9cb4e8` outline, 4px offset |

The account link’s descendant count also changed from two to eight during interaction, including a canvas; that DOM difference does not establish a separate visual animation recipe. Label ink stayed at its rest value in the compared snapshots. The input itself retains its own transparent fill and lack of border: its parent owns the measured visual changes.

The comparison includes each control and its pseudo-elements, descendants and their pseudo-elements, and three ancestor levels. No change claim extends to canvas/video pixels, external sprite contents, closed shadow roots, cross-origin frames or siblings. Empty, loading, error, success and disabled product states were not exercised.

## Do's and Don'ts

Implementation guidance derived from the measured surface:

- Preserve the primary action’s indigo rest, hover and pressed sequence; retain white lettering across those states.
- Use the periwinkle focus outline and the measured offset. Apply the email indication to the wrapper that owns the frosted surface.
- Keep the demo action translucent, bordered and blurred over imagery; keep its text pale.
- Match each control’s geometry. The account link uses 32px corners, while the demo and navigation items use 40px.
- Keep declared-only font faces out of rendered specimens. Use the loaded text and display faces for the measured homepage roles.
- Treat light-theme definitions, disabled/error colours and responsive CSS as definitions until their corresponding surfaces or states are measured.

## Voice & Tone

The homepage pairs the differentiating headline “Radically different banking” with short action labels: “Open account” and “Launch demo”. The email placeholder names the requested information directly. The visible regulatory disclosure distinguishes Mercury’s fintech role from the banks that provide banking services.

For this surface, use concise action verbs and make the next step explicit. This is an editorial reading of the captured homepage copy.

## Agent Prompt Guide

“Build a Mercury-inspired public banking hero using a full landscape image with a desk in the foreground. Center the headline above an email group. Use loaded `arcadiaDisplay` for the headline and `arcadia` for controls. Make the navigation account link 40px high, 32px radius, `0px 20px` padding and 16px/420 text. Its fill sequence is `#5266eb` → `#4354c8` → `#3442a6`; keep the label `#ffffff`. Keyboard focus uses the hover fill plus a 2px solid `#9cb4e8` outline offset by 4px.”

“For the hero demo link, use 40px height and radius, `rgba(175, 178, 206, 0.2)` fill, a 1px border in the same channels at alpha 0.36, and 20px backdrop blur. Raise fill alpha to 0.28 on hover and 0.36 while pressed. Set the label to `#ededf3`. Draw the same periwinkle focus outline with a 4px offset.”

These prompts describe the measured marketing surface. Product layouts, account data and transactional feedback require their own evidence.
