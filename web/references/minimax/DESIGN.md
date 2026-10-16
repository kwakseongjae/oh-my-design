---
name: MiniMax
colors:
  canvas: '#ffffff'
  ink: '#18181b'
  secondary-text: '#45515e'
  muted: '#86909c'
  surface: '#f5f5f5'
  border: '#e5e7eb'
  action-dark: '#181e25'
  action-on-dark: '#ffffff'
  audio-accent: '#7659fa'
  audio-on-accent: '#f8f8f8'
typography:
  public-body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    use: Repeated public home body and navigation context
  m3-display:
    fontSize: 78px
    fontWeight: 600
    lineHeight: 85.8px
    use: M3 model-launch hero heading
  careers-display:
    fontSize: 60px
    fontWeight: 700
    lineHeight: 60px
    use: Careers-marketing headline
rounded:
  home-action: 32px
  m3-action: 8px
  audio-action: 100px
  careers-action: 9999px
spacing:
  home-action-x: 28
  m3-action-x: 12
  audio-action-x: 20
  careers-action-x: 24
  careers-action-y: 12
components:
  home-light-action:
    type: button
    backgroundColor: '#f5f5f5'
    textColor: '#181e25'
    rounded: 32px
    padding: 0px 28px
    typography: 16px / 400 / MiSans
    states: default only; no interaction event or pseudo-state captured
    use: Home marketing header action, selector home::[data-omd-capture=16]
  m3-dark-action:
    type: button
    backgroundColor: '#000000'
    textColor: '#ffffff'
    rounded: 8px
    padding: 0px 12px
    typography: 14px / 400 / MiSans
    states: default only; no interaction event or pseudo-state captured
    use: M3 launch paired dark action, selector surface-2::[data-omd-capture=20]
  m3-light-action:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#222222'
    rounded: 8px
    padding: 0px 12px
    typography: 14px / 400 / MiSans
    states: default only; no interaction event or pseudo-state captured
    use: M3 launch paired light action, selector surface-2::[data-omd-capture=21]
  audio-generate:
    type: button
    backgroundColor: '#7659fa'
    textColor: '#f8f8f8'
    rounded: 100px
    padding: 0px 20px
    typography: 14px / 500 / MiSans
    states: default only; no interaction event or pseudo-state captured
    use: Public audio-tool generate action, selector surface-3::[data-omd-capture=12]
  careers-primary:
    type: button
    backgroundColor: '#181e25'
    textColor: '#ffffff'
    rounded: 9999px
    padding: 12px 24px
    typography: 14px / 500 / MiSans
    states: default only; no interaction event or pseudo-state captured
    use: Careers-marketing primary action, selector surface-4::[data-omd-capture=18]
    height: 44px
    pressed: 'bg #27272a (+2 nested-layer changes) (:hover + :active)'
  careers-outline:
    type: button
    textColor: '#18181b'
    border: '1px solid #18181b'
    rounded: 9999px
    padding: 12px 32px
    typography: 16px / 500 / MiSans
    states: default only; no interaction event or pseudo-state captured
    use: Careers-marketing outline action, selector surface-4::[data-omd-capture=26]
fonts:
  roles:
    ui: MiSans
    display: Outfit
---

# MiniMax — Design Reference

## Overview

### Visual Theme & Atmosphere

MiniMax is a general-AI company whose own current account centers a family of proprietary multimodal models and AI-native products for people, enterprises, and developers. The public web translates that breadth into a mostly white, text-led presentation: near-black type, restrained grey surfaces, large model-specific hero moments, and a few route-local action colors. The stable visual thread across the captured home, M3 launch, audio tool, and careers pages is not a universal card style or color scale; it is dense information given room to breathe through simple backgrounds, rounded actions, and clear hierarchy. The current product family is changing quickly—MiniMax’s official model documentation lists text, video, speech, image, and music offerings—so this reference preserves each observed surface domain rather than blending a launch page, an audio tool, careers marketing, and unobserved documentation chrome into one fictional system.

- **Neutral public base:** `#ffffff` canvas, `#18181b` ink, and `#e5e7eb` borders recur on home, M3, and careers surfaces.
- **Surface-local action geometry:** 32px on the home header, 8px on M3 paired actions, 100px on the audio tool, and full pills on careers are separate observations.
- **Model-family expression:** M3 uses a 78px Outfit hero while the careers page uses a 60px MiSans headline; neither becomes a universal app heading rule.
- **Bounded source domains:** the raw bundle contains no authenticated product session or documentation chrome. Those domains are intentionally not represented by tokens.

### Primary tasks

- Generate audio on the public audio tool page
- Read what a newly launched model can do
- Compare text, video, speech, image, and music model families

### Brand Narrative

MiniMax describes itself as a general-AI company founded in early 2022, pursuing AGI through the mission “Intelligence with Everyone.” Its official company profile connects proprietary multimodal models to AI-native products and an enterprise/developer open platform; the current official model documentation separates that portfolio into text, video, speech, image, and music families. The public visual system reflects this multi-product posture through a shared neutral web base with deliberately local launch, tool, and careers treatments rather than one uniformly styled application.

The official careers page adds a culture boundary: it presents technology, product, content, and aesthetics as intersecting disciplines, and frames curiosity and exploration as valued qualities. That supports a narrative of technical work that still attends to expression and usability; it does not justify invented user stories, company chronology beyond the official profile, or app-interface claims absent from the capture.

### Principles

1. **Intelligence with everyone.** MiniMax publicly frames its mission around broad participation in intelligent systems. *Reference UI implication:* explain what a capability enables before escalating technical detail.
2. **Multimodal, product-specific clarity.** Official materials distinguish text, video, speech, image, and music models. *Reference UI implication:* name the model and modality instead of using a vague universal “AI” label.
3. **No shortcuts.** The official about page lists this as a company value. *Reference UI implication:* avoid presenting unmeasured shortcuts, states, or design-system rules as facts.
4. **Technology and taste intersect.** The careers page places technology, product, content, and aesthetics together. *Reference UI implication:* use visual emphasis to clarify a technical proposition, not to hide its boundaries.

The UI implications are this reference’s constrained interpretations of official positioning, not published MiniMax component rules.

### Personas

No fictional personas are asserted. Official materials identify several audiences and contexts: individual users, enterprises, developers using the open platform, and prospective team members across technical, product, content, and aesthetic disciplines. Those are audience boundaries only; they do not replace MiniMax user research or validate behavioral assumptions.

## Colors

### Repeated public-web roles

- **Canvas** (`#ffffff`): body background observed on all four captured routes.
- **Ink** (`#18181b`): repeated home, M3, and careers text.
- **Secondary text** (`#45515e`): home supporting copy.
- **Muted** (`#86909c`): repeated home and M3 supporting text.
- **Surface** (`#f5f5f5`): home light header action.
- **Border** (`#e5e7eb`): repeated computed border color on home, M3, and careers elements.
- **Dark action** (`#181e25`) with **on-dark** (`#ffffff`): careers primary action; the dark value is also observed repeatedly on the home/M3 public family.

### Audio-tool-local role

- **Audio accent** (`#7659fa`) with **audio on-accent** (`#f8f8f8`): the observed `surface-3` generate action. It is an audio-tool-local value, not a global MiniMax brand-primary claim.

## Typography

### Evidence classes

- **Live computed public-web use:** `MiSans` is the dominant visible first family: the collector reports 421 visible uses across body, button, card, heading, list, and dialog roles. It is backed by loaded FontFaceSet entries and 43 MiniMax-hosted font-source URLs. It is the canonical UI-family token for these public routes.
- **Live computed display use:** `Outfit` is visibly used and loaded (9 uses, including M3 hero headings), backed by a MiniMax/Hailuo-hosted font source and a CDN asset. It is retained as a public display-family token only.
- **Live computed specialist use:** `JetBrains Mono` is loaded for two heading observations. It is not promoted to a general UI or code token because the supplied capture does not establish a reusable product role.
- **Declared-only assets:** `DM Sans`, Inter, Plus Jakarta Sans, Roboto, and Font Awesome faces occur in declarations or system stacks without observed visible use. They are not UI tokens and are not substituted at runtime.
- **System fallback:** `-apple-system` appears in the audio surface’s input stack. It is a system fallback observation, not a MiniMax typeface.
- **Font context and licence boundary:** Xiaomi identifies MiSans as a variable multilingual family and publishes its own licence agreement; MiniMax’s current hosted webfont use does not grant a downstream project permission to reuse MiniMax’s delivery assets. Outfit’s upstream project publishes it under SIL OFL 1.1. These are font-context facts, not an assertion that MiniMax distributes either family as a reusable brand kit.

### Measured public hierarchy

| Role | Family | Size | Weight | Line height | Surface boundary |
|---|---|---:|---:|---:|---|
| Public body | MiSans | 16px | 400 | 24px | repeated home body/navigation context |
| M3 display | Outfit | 78px | 600 | 85.8px | `surface-2::h1` on the M3 launch page |
| Careers display | MiSans | 60px | 700 | 60px | `surface-4::h1` on careers marketing |

## Layout

- The capture is a 1440×900 desktop bundle. It establishes local action padding—28px horizontal on the home action, 12px on M3 paired actions, 20px on the audio action, and 24px/32px on careers actions—not a universal spacing scale.
- White body surfaces recur across all four routes, but the routes serve different jobs: company/model marketing, an M3 launch, an audio tool, and recruitment.
- The bundle does not establish responsive breakpoints, authenticated-app navigation, or documentation layout conventions.

### Responsive Behavior

Only one 1440×900 desktop capture was supplied. No breakpoint, mobile navigation, reflow, touch target, or reduced-motion behavior is verified here.

## Elevation & Depth

The representative actions in §4 report `boxShadow: none`. No reusable elevation ladder, card shadow, or hover-lift rule is established. The old purple glow and broad product-card shadow claims were removed because this capture does not corroborate them.

## Motion & Easing

No motion token, duration, easing curve, or reduced-motion behavior is measured. Several observed classes include transition utilities, but the zero-interaction capture does not establish what changes, when it changes, or how it behaves under user preferences.

## Components

All variants are selector-backed observations from the supplied public bundle. `coverage.interactionCount` and `coverage.observedStates` are both zero, so every entry below is a default-state observation only. Class names may contain hover utilities, but those declarations are not promoted as measured hover, focus, pressed, disabled, or motion variants.

### Home header action

**Light action — `home` marketing surface**
- Background: `#f5f5f5`
- Text: `#181e25`
- Radius: `32px`
- Padding: `0px 28px`
- Font: `16px / 400 / MiSans`
- Use: Home marketing header action at `home::[data-omd-capture="16"]`.
- States: Default only; no interaction event or pseudo-state captured.

### M3 launch actions

**Dark paired action — `m3-launch` product-launch surface**
- Background: `#000000`
- Text: `#ffffff`
- Radius: `8px`
- Padding: `0px 12px`
- Font: `14px / 400 / MiSans`
- Use: M3 launch paired action at `surface-2::[data-omd-capture="20"]`.
- States: Default only; no interaction event or pseudo-state captured.

**Light paired action — `m3-launch` product-launch surface**
- Background: `#ffffff`
- Text: `#222222`
- Radius: `8px`
- Padding: `0px 12px`
- Font: `14px / 400 / MiSans`
- Use: M3 launch paired action at `surface-2::[data-omd-capture="21"]`.
- States: Default only; no interaction event or pseudo-state captured.

### Audio-tool action

**Generate — `audio-tool` product-tool surface**
- Background: `#7659fa`
- Text: `#f8f8f8`
- Radius: `100px`
- Padding: `0px 20px`
- Font: `14px / 500 / MiSans`
- Use: Public audio-tool generate action at `surface-3::[data-omd-capture="12"]`.
- States: Default only; no interaction event or pseudo-state captured.

### Careers actions

**Primary — `careers` marketing surface**
- Background: `#181e25`
- Text: `#ffffff`
- Radius: `9999px`
- Padding: `12px 24px`
- Font: `14px / 500 / MiSans`
- Use: Careers primary action at `surface-4::[data-omd-capture="18"]`.
- States: Default only; no interaction event or pseudo-state captured.

**Outline — `careers` marketing surface**
- Text: `#18181b`
- Border: `1px solid #18181b`
- Radius: `9999px`
- Padding: `12px 32px`
- Font: `16px / 500 / MiSans`
- Use: Careers outline action at `surface-4::[data-omd-capture="26"]`.
- States: Default only; no interaction event or pseudo-state captured.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.minimaxi.com/ (public marketing), https://www.minimaxi.com/models/text/m3 (model-launch page), https://www.minimaxi.com/audio (public audio tool), https://www.minimaxi.com/careers (careers marketing), https://minimaxi.com/about (official company context), https://platform.minimaxi.com/docs/guides/models-intro (official model documentation), https://filecdn.minimax.chat/public/MiSans-Regular.woff2 (loaded MiniMax-hosted font asset)
**Tier 2 sources:** https://getdesign.md/minimax (listing exists; its “bold dark/neon” description conflicts with the current captured public surfaces and supplies no promoted token), https://styles.refero.design/?q=MiniMax (attempted; current fetch returned an internal error and no usable record)
**Conflicts unresolved:** none

### States

No authenticated application state, empty state, loading state, error state, success state, disabled control, or accessibility-state contract was captured. The audio page is a public tool surface, but the supplied bundle records zero interaction events and zero observed states. The default component observations in §4 must not be expanded into an application-state specification.

Live state probe, 2026-10-16 (`https://www.minimaxi.com/careers`), `careers-primary`: pressed — bg #27272a (+2 nested-layer changes).

## Do's and Don'ts

### Do

- Keep the public-web neutral base clear: white canvas, near-black text, and low-contrast borders.
- Use a surface-local action treatment only in the context where it was observed.
- Use MiSans only where its loaded asset and target-project licence permit it; otherwise leave the family unresolved rather than substituting a generic font as MiSans.
- Treat current model names and product areas as evolving content, not permanent navigation or component taxonomy.

### Don't

- Do not combine the audio purple action with M3 or careers actions into a single global primary color.
- Do not turn CSS hover utilities or the presence of `transition-*` classes into measured state or motion specifications.
- Do not promote DM Sans, Inter, Roboto, or declared icon fonts to live MiniMax UI families.
- Do not infer app, console, or documentation-chrome design rules from these public routes.

## Voice & Tone

Official MiniMax materials combine a mission-led company voice with concrete model capability and product-family labels. The about page expresses the mission as “Intelligence with Everyone”; the M3 launch and platform documentation name capabilities such as coding, agentic work, multimodality, and long context. This supports a direct, technical register without establishing a complete product microcopy system.

| Context | Evidence-backed direction |
|---|---|
| Company positioning | State the mission and the intended human or productivity outcome plainly. |
| Model launch | Name the model and the specific capability before making a broad claim. |
| Developer documentation | Prefer a model name, modality, and operating constraint over metaphor. |

**Official wording samples**
- *“Intelligence with Everyone”* — MiniMax about page and M3 launch.
- *“Coding & Agentic”* and *“1M”* context — M3 launch page.
- *“MiniMax-M3”*, *“MiniMax Hailuo 2.3”*, and *“Speech-2.8”* — official platform model documentation.

## Agent Prompt Guide

For a MiniMax-like **public AI-model marketing moment**, start with a white field, near-black information hierarchy, a route-specific rounded action, and large display type only when the observed font is actually available. Do not copy an M3 launch button into the audio tool or careers surface merely because all are MiniMax-owned pages. For application work, leave product, documentation, and error-state decisions open until there is direct evidence.

## Governance

### Known Gaps

- **Contrast, `audio-generate`.** Text `#f8f8f8` on `#7659fa` measures 4.32:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
