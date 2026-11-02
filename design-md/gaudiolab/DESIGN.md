---
name: Gaudio Lab
colors:
  primary: '#00b7ff'
  foreground: '#ffffff'
  ink: '#111214'
  canvas: '#ffffff'
  surface: '#f0f9ff'
  night: '#1e1e1f'
  ocean: '#12354e'
  muted: '#9ca3af'
  faint: '#d3d5da'
  gray-200: '#d6d6d6'
  on-primary: '#fafafa'
typography:
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Homepage base declaration and outer link metrics; Roboto is live-loaded.
  nav:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.428571
    use: Products menu button, measured 20px line-height; native computed family recorded in section 3, no specimen assigned.
  button-lg:
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.666667
    use: Company-page Watch the Film button, survey rest measurement, Poppins live-loaded on that surface; 30px line-height.
rounded:
  none: 0px
  sm: 4px
  md: 6px
spacing:
  sm: 8
  md: 12
  base: 16
  xl: 40
components:
  cta-primary:
    type: button
    textColor: '#ffffff'
    border: '1px solid #ffffff'
    rounded: 6px
    padding: 8px 16px
    height: 32px
    typography: 14px / 500
    hover: 'bg #00b7ff; border 1px solid rgba(0, 0, 0, 0)'
    pressed: 'bg #00b7ff; border 1px solid rgba(0, 0, 0, 0)'
    use: 'Header Contact us button inside a link to /contact-us; transparent at rest on #1e1e1f. Homepage dark-header variant.'
  cta-hero:
    type: button
    backgroundColor: '#00b7ff'
    textColor: '#ffffff'
    rounded: 4px
    padding: 0px
    height: 44px
    typography: 16px / 500 Roboto
    hover: bg rgba(0, 183, 255, 0.9)
    use: Hero Contact us link, 192px wide on the dark gradient. Pressed state unmeasured; no focus-specific visual change in the comparison scope.
  button-outline:
    type: button
    textColor: '#00b7ff'
    border: '1px solid #00b7ff'
    rounded: 4px
    padding: 0px
    height: 44px
    typography: 16px / 500
    hover: 'bg #00b7ff; fg #ffffff'
    pressed: 'bg #00b7ff; fg #ffffff'
    use: All products button, 192px wide; transparent on the hero gradient at rest.
  nav-item:
    type: button
    textColor: '#ffffff'
    rounded: 6px
    padding: 8px 16px
    height: 36px
    typography: 14px / 500
    hover: 'fg #00b7ff'
    pressed: 'fg #00b7ff'
    focus: 'box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px, rgba(59, 130, 246, 0.5) 0px 0px 0px 3px, rgba(0, 0, 0, 0) 0px 0px 0px 0px'
    use: 'Products navigation menu button, 87.3px wide; transparent on #1e1e1f. Its CSS focus shadow uses the Tailwind ring default, not a separately asserted brand colour.'
  footer-company:
    type: button
    textColor: '#111214'
    rounded: 0px
    padding: 0px
    height: 16.5px
    typography: 14px / 400 Roboto
    hover: 'fg #00b7ff'
    pressed: 'fg #00b7ff'
    use: 'Company navigation link to /company/brand, 60.2px wide; transparent on #f0f9ff. Browser auto focus ring excluded from tokens.'
  news-card:
    type: card
    textColor: '#ffffff'
    rounded: 0px
    padding: 0px
    height: 331px
    typography: 16px / 400 Roboto
    hover: 'image transform matrix(1.05, 0, 0, 1.05, 0, 0); heading fg #00b7ff'
    pressed: 'image transform matrix(1.05, 0, 0, 1.05, 0, 0); heading fg #00b7ff'
    use: 'First Blog card link, Just Remove Dialogue?; 410.7px wide, transparent on #111214 with no border or rest shadow. Date #9ca3af, title #ffffff. Outer link geometry, not thumbnail geometry. Browser ring and persistent image-source update excluded from focus tokens.'
fonts:
  roles:
    display: Poppins
    body: Roboto
---

# Design System Inspiration of Gaudio Lab

## Overview

### Visual Theme & Atmosphere

Gaudio Lab (가우디오랩) develops audio technology across spatial audio, loudness management, source separation and AI content localization. Its own history dates the Korean corporation to May 2015, following a 2014 international-standard milestone for binaural rendering. The timeline moves through VR authoring tools and audio SDKs to Gaudio Studio, Gaudio Studio Pro and the Gaudio Developers API platform. This connects the company's scientific positioning with tools that people and media businesses can use. [Company history](https://www.gaudiolab.com/company/brand), [Korean company history](https://www.gaudiolab.com/ko/company/brand).

The current corporate homepage makes that range visible through an orbital product selector on a dark blue gradient. White display copy sits to the left, with a filled sky-blue contact action and a matching outline product action beneath it. A white partner-and-awards band follows; four product tiles mix pale and dark backgrounds; a second dark area presents technology categories and patents. Blog, news and the final contact invitation share a near-black ground before the pale blue footer. These are observed arrangements in the desktop capture, rather than a stated company design philosophy.

Sky-blue `#00b7ff` connects actions, hovered navigation and editorial titles. It also highlights words and figures, so its role extends beyond the primary CTA. Near-black `#111214`, white `#ffffff` and the pale `#f0f9ff` footer give the page strong changes of tone. Small control corners and low visual elevation keep the interface compact, while the large gradient and product imagery carry much of its visual character. The six sampled controls have no rest shadow; the Products menu adds a CSS shadow for keyboard focus.

The company page adds a full-width film surface and a distinct, lighter header variant. Its published logo guidance requires the supplied logo colours and proportions to be preserved and prohibits adding shadows or gradients to the logo itself. This restriction applies to the logo, not to the whole website: the homepage contains a measured gradient background. [Brand resource guidance](https://www.gaudiolab.com/company/brand).

The company's published evolution includes the 2025 Studio app and developer-platform launches and two CES 2026 honours for Studio Pro, described in its timeline as a fourth consecutive award year. No dated rebrand announcement was established. The measured homepage is the English edition (`gaudiolab.com/`, HTML `lang="en"`); the Korean company page (`/ko/company/brand`) was inspected separately without a regional redirect.

#### Primary tasks

- Explore the product range through the hero selector, product action and navigation.
- Compare spatial audio, AI separation and loudness capabilities, then contact the team.
- Watch the company film and read company history, patents, blog and news.

### Brand Narrative

The company history records Korean incorporation in May 2015 and a California subsidiary in November 2016. Earlier binaural-rendering work appears in its 2014 standardization milestone; the subsequent history includes VR authoring, spatial-audio SDKs, loudness normalization and AI tools. This supports a narrative of audio research reaching multiple practical surfaces, without establishing an academic spin-out origin. [Company history](https://www.gaudiolab.com/company/brand).

The English brand page describes an R&D team of over 40 audio experts, including nine PhDs. It currently reports 50M daily users of its technology, 119 items of intellectual property, 35 partners and investors, and KRW 16.9 billion ($13M) in cumulative investment, labelled Series B. Its separate October 2021 timeline entry describes a KRW 11.3 billion Series B round. These are different measures and must not be merged into a single round amount. The homepage separately shows 136 granted patents; that is not the same label as the brand page's 119 intellectual-property items.

The displayed product range includes GSA, Gaudio Sing, GTS, LM1 and Gaudio Studio Pro. The timeline records the Studio app launch in June 2025, Gaudio Developers in October, a tenth-anniversary event in September, and two Studio Pro CES 2026 honours in November. Named collaborations include Genie Music, Melon, KT Alpha Shopping and META48; the timeline does not label all these organizations as investors. [English company page](https://www.gaudiolab.com/company/brand), [Korean company page](https://www.gaudiolab.com/ko/company/brand).

The website expresses this breadth through the product orbit, product tiles, technology categories, patent listing and company film. Its branding guidance is precise about logo handling; broader claims about rejecting competing entertainment brands or generic AI aesthetics were not established.

### Principles

These are implementation readings of the observed pages, except for the explicitly published logo guidance.

1. **Make the audio capability visible.** Use product names, capability descriptions and media to connect the company story to a concrete tool.
2. **Use blue consistently across interaction.** The contact fill, product outline, hovered navigation and hovered editorial heading share the same measured blue.
3. **Separate through large surfaces.** Preserve the alternation of dark gradient, white proof band, product panels, dark editorial content and pale footer.
4. **Preserve each control's feedback.** Keep colour changes and the Products focus shadow; do not infer states for rest-only controls.
5. **Handle the logo as supplied.** The company prohibits colour changes, distortion and added logo shadows or gradients.

### Personas

No first-party persona profiles were verified; the prior fictional names, ages, locations and inferred trust responses are omitted.

## Colors

The values below come from the homepage's computed census and control snapshots. They are observations of this corporate surface; the internal interfaces pictured in product screenshots were not measured.

| Role | Value | Evidence and use |
|---|---|---|
| Primary | `#00b7ff` | Hero contact fill, outline-product text and border; hover colour for navigation and the blog heading. Nine background elements in the homepage census. |
| Foreground | `#ffffff` | Dominant homepage paragraph ink: 29 `<p>` elements; also the hero contact label and resting blog title. |
| Ink | `#111214` | Footer-link ink and the sampled blog card's surrounding dark ground; 35 text elements in the homepage census. On both company pages, eight paragraph elements use this colour. |
| Canvas | `#ffffff` | 37 background elements on the homepage; the company film button is also white. This frequency does not establish that most page area is white. |
| Surface | `#f0f9ff` | Computed ground behind the Company footer link; also the site's `--blue-100` HSL value after normalization. |
| Night | `#1e1e1f` | Computed background behind the homepage navigation. |
| Ocean | `#12354e` | One dark background in the homepage census. |
| Muted | `#9ca3af` | First Blog card's date; six text elements in the census. |
| Faint | `#d3d5da` | Eight text elements; also the normalized `--gray-300` declaration. A more specific element role was not resolved. |
| Gray 200 | `#d6d6d6` | Normalized from `--gray-200: 0,0%,84%`. This confirms the colour value, not the prior claim that it outlines homepage news cards. |
| On-primary | `#fafafa` | Labels on lower homepage actions and on the company-page filled header CTA. The homepage hero CTA instead uses pure white. |

The hero ancestor's computed background image is `linear-gradient(rgb(2, 2, 6), rgb(20, 66, 100))`, equivalent to `#020206` → `#144264`. Keep this separate from the flat Ocean colour. The hero contact hover changes its fill to `rgba(0, 183, 255, 0.9)`; that is an alpha value, not a new opaque swatch.

The homepage also records `rgba(0, 0, 0, 0.87)` on inherited outer elements. It is not the visible label colour of the sampled dark-header buttons. The company page's separate resource action uses `#02b9ff` at rest, as recorded by that page's survey; this is not a replacement for the homepage action blue.

The raw root `--foreground` value is `0 0% 3.9%`. The reference role named `foreground` above follows measured homepage paragraph ink, rather than equating a generic root variable with every text element. Tailwind, Swiper and unused generic theme variables are separated in the verification notes.

## Typography

### Evidence classes

- **Official product use:** no opened brand document explicitly designates an official product font. A font acknowledgement in the separate Studio terms does not establish the corporate website's type system.
- **Live-loaded on the homepage:** `__Poppins_cf84ab` at 400, 500 and 700; Roboto at 300, 400, 500, 600 and 700. The published family label Poppins refers to that observed Next.js family. Both English and Korean company-page censuses load Poppins 400/500 and Roboto 100/400/500/700/900.
- **Official served-face declarations:** Poppins is declared through first-party `/_next/static/media/*.woff2` URLs; Roboto through `/fonts/Roboto-*.ttf`. The 500 and 600 Roboto declarations point to the same Medium file. These are observed CSS source declarations; no font binaries or brand ZIP were downloaded.
- **Official distributed assets:** no dedicated font kit was inspected. The served-face declarations above are the available first-party asset evidence; no font licence or redistribution right is asserted.
- **Declared-only:** Poppins 600, the generated Poppins fallback face, Roboto 100/900 on the homepage, and Noto Sans KR 100/300/400/500/700/900. Noto Sans KR has WOFF2/WOFF/OTF source declarations but is absent from the loaded-face lists on all three inspected pages. It receives no family token or specimen. Swiper's declared icon face is a library asset, not a text face.
- **Unresolved:** the actual Hangul face supplied through the company page's native system stack, and the prior claim that Poppins renders the 900-weight company section headings. The homepage menu and native-button samples compute to `Arial`; that raw browser declaration is recorded without treating it as a loaded brand font or choosing it as a substitute.

Substitute: none chosen.

### Measured hierarchy

| Element | Size / weight | Line height | Family evidence |
|---|---|---|---|
| Homepage outer links and base declaration | 16px / 400 | 24px | Roboto is loaded; body declares Roboto first. |
| Hero Contact us link | 16px / 500 | 24px | Computed Roboto; tracking 0.15008px. |
| All products button | 16px / 500 | 24px | Native computed declaration; no brand specimen assigned. |
| Products menu and header Contact us button | 14px / 500 | 20px | Native computed declaration; prior Roboto attribution is not retained. |
| Company footer link | 14px / 400 | 20px | Computed Roboto; tracking 0.15008px. |
| First Blog card outer link | 16px / 400 | 24px | Computed Roboto; the date is a separate 14px/400 child. These are not measurements of the title's font size. |
| Company-page Watch the Film button | 18px / 500 | 30px | Computed Poppins, live-loaded on that surface. |

### Company-page declared hierarchy

The opened company-page HTML includes these inline CSS rules. They preserve useful hierarchy facts from the prior reference, but are not additional computed heading measurements:

- `.sc-mission .text-box .title`: `font-size:5rem; line-height:7.5rem; font-weight:700`. At a 16px root this is 80px type with 120px leading, rather than the prior 1.00 line-height. The face for Korean text remains unresolved.
- `.sc-title`: `font-size:3rem; line-height:4.375rem; font-weight:900; color:#111214`. At a 16px root this is 48px/70px. No Poppins 900 face is declared or loaded.
- `.sc-desc`: `font-size:1.125rem; line-height:1.875rem; font-weight:500`; the film button's live 18px/30px metrics agree with that size and leading.

Use the observed weight and scale contrasts without assigning every heading to the same face. Keep the live-loaded families, native declarations and unresolved Korean rendering distinct.

## Layout

The desktop homepage uses full-width sections with different grounds rather than one uniform white canvas. The hero couples left-aligned copy and two actions with the orbital product selector on the right. A partner-and-awards section provides a white interval before a two-by-two product layout, with the daily-user figure and award heading given prominent headline treatment. Technology links form three columns in the next dark section; Blog and News each have three card columns in the full capture.

The measured hero actions are both 192px wide and 44px high, with a 16px horizontal gap. The header menu uses 8px 16px padding; the locale control uses 0px 12px; the company film button uses 16px 40px. These support the recorded 8, 12, 16 and 40px spacing values, without establishing an exhaustive 8px-based scale.

Small control radii are 4px for hero actions and the film button and 6px for header controls. The sampled editorial card's outer link has zero radius; the prior 12px news-card shell was not reproduced. The 9999px pills belong to the orbital links and launcher and are kept as prose, separately from the numeric structural radius tokens.

On the company page, inline CSS declares `.inner` horizontal padding as `max(calc((100% - 90.25rem) / 2),1.5rem)`. Its science section declares 12.5rem top padding. These are page-specific declared layout rules, not a measured homepage container width.

### Responsive Behavior

Live browser measurements were desktop-only at 1440 × 1000. The company-page inline CSS separately documents a `max-width:1024px` layout: section titles become 1.5rem/2.25rem at weight 700; mission titles become 2.5rem/3.75rem at weight 700; the statistics list changes to a column; `.pc` content hides and `.mo` content shows. These are declared rules, without a mobile rendering check.

Measured desktop target heights are 32px for header Contact us, 36px for Products, 40px for the launcher and 44px for the hero actions. These values are recorded without asserting touch-target compliance. Homepage mobile grid changes, video cropping and narrow-screen app-launcher behaviour remain unmeasured.

## Elevation & Depth

All six final homepage control snapshots report `box-shadow: none` at rest. Background changes, open space and media create most of the observed section separation. The footer's `#f0f9ff` ground, the navigation's `#1e1e1f` ground and the editorial area's `#111214` ground serve different roles.

This does not make the system shadowless. Keyboard focus on Products adds this computed shadow:

`rgb(255, 255, 255) 0px 0px 0px 0px, rgba(59, 130, 246, 0.5) 0px 0px 0px 3px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`

The colour matches the census's Tailwind ring default; it is retained as the measured component state, rather than promoted to a new brand colour. The company-page HTML also declares decorative shadows on image pseudo-elements. The published prohibition on logo shadows does not forbid these effects elsewhere.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`

## Motion & Easing

The following durations are the probe's transition measurements; the corresponding raw computed strings are preserved verbatim in the verification notes.

| Measured control | Duration | Computed curve | Observed effect |
|---|---|---|---|
| Header Contact us, All products and corrected hero Contact us | 150ms | `cubic-bezier(0.4, 0, 0.2, 1)` | Colour/background/border properties in each raw transition string. |
| Products menu | 150ms | `cubic-bezier(0.4, 0, 0.2, 1)` | Colour and box-shadow. |
| Footer Company | 200ms | `cubic-bezier(0.4, 0, 0.2, 1)` | Its raw colour-related transition string. |

The Blog link itself computes to `all 0s ease 0s`. The probe reports a longest descendant transition of 300ms for that card, but does not preserve the descendant's full computed curve; no curve is assigned to the image enlargement. Every sampled state waited 900ms before comparison.

Carousel timing, film crossfades, springs, reveal sequences and `prefers-reduced-motion` behaviour were not measured. The prior named duration and easing scales are not carried forward.

---

Measured 2026-11-03 KST. First-party surfaces: [homepage](https://www.gaudiolab.com/), [company](https://www.gaudiolab.com/company/brand), [Korean company](https://www.gaudiolab.com/ko/company/brand). Supporting identity sources: [contact](https://www.gaudiolab.com/contact-us), [terms](https://www.gaudiolab.com/gaudio-studio/docs/terms), [privacy](https://www.gaudiolab.com/gaudio-studio/docs/policy). Full raw captures, claim dispositions and limitations are recorded in `report.md` and `verification.md`.

## Components

These six controls were measured on the English homepage. The identity measurements distinguish the intended node from its child label or an enclosing link. Transparent controls retain the actual surrounding surface.

| Control | Rest identity | Hover | Pressed | Keyboard focus |
|---|---|---|---|---|
| Header Contact us | Button within `/contact-us` link; 100.9 × 32px, radius 6px, padding 8px 16px, 14px/500, line-height 20px; transparent on `#1e1e1f`, white label and 1px white border | Fill `#00b7ff`; border becomes transparent | Same two changes as hover | No visual change within the recorded comparison scope |
| Hero Contact us | Link; 192 × 44px, radius 4px, padding 0, Roboto 16px/500, line-height 24px; `#00b7ff` / `#ffffff`, no border | Fill `rgba(0, 183, 255, 0.9)` | UNMEASURED: `:active` did not match | No visual change within scope |
| All products | Button; 192 × 44px, radius 4px, padding 0, 16px/500, line-height 24px; transparent on the hero gradient, `#00b7ff` label and 1px border | Blue fill, white label; blue border stays | Same as hover | No visual change within scope |
| Products | Navigation menu button; 87.3 × 36px, radius 6px, padding 8px 16px, 14px/500, line-height 20px; transparent on `#1e1e1f`, white label | Label `#00b7ff` | Same as hover | Adds a 3px CSS shadow using `rgba(59, 130, 246, 0.5)` |
| Company | Footer navigation link; 60.2 × 16.5px, radius 0, padding 0, Roboto 14px/400, line-height 20px; transparent on `#f0f9ff`, `#111214` label | Label `#00b7ff` | Same as hover | Browser `auto` outline; no focus token |
| First Blog card | Link; 410.7 × 331px, outer radius 0, padding 0, Roboto 16px/400; transparent on `#111214`, white heading and `#9ca3af` date, no border | Image transform becomes `matrix(1.05, 0, 0, 1.05, 0, 0)`; heading turns blue | Same two changes as hover | Browser `auto` outline; an image-source update persists after blur and is excluded from focus styling |

For unchanged focus readings, scope includes self and pseudo-elements, every recorded descendant and its pseudo-elements, and three ancestor levels. The hero link has two SVG descendants; the card has five descendants including one image; the four other final controls have none. The probe compares colour, backgrounds, borders, drawn outlines, shadows, opacity, transforms, filters, visibility, size, decoration, images, masks and SVG attributes. It does not establish the absence of changes inside video, canvas or external content.

### Confirmed rest-only observations

The company film button remains white with `#111214` text, a 4px radius, 16px 40px padding and 62px height, using Poppins 18px/500 with 30px leading. It is retained here without an interactive component token because its states were not measured.

The app-launcher button is 40 × 40px with a 9999px radius and zero padding. Homepage orbital product links include 64px-high pill shapes; the selected Studio Pro link is 256 × 64px. These are survey observations, not a measurement of the opened app-launcher menu. Their states are absent.

The company pages retain the filled 32px header CTA variant: `#00b7ff` with `#fafafa` text, radius 6px and 8px 16px padding. It is a separate rest observation from the dark-header homepage control.

### States

The measured hover, pressed and keyboard-focus treatments are in §4. Pressed snapshots on the first-call controls retained their hover treatment, with no additional difference from hover. The corrected hero link's pressed state is UNMEASURED, not unchanged.

Products has a CSS focus shadow. Footer Company has the browser's automatic outline. The Blog card also has an automatic outline; its image-source change persists after blur and is not attributed to focus. Header Contact us, All products and the corrected hero link showed no focus-only visual change within the recorded scope.

No search field exists in the homepage survey. Empty, loading, request-error, validation, success, skeleton and disabled appearances were not established; no form was submitted and no such treatment is specified.

## Do's and Don'ts

### Do

- Reproduce the sky-blue contact fill and product outline as distinct resting actions on the dark hero.
- Use blue for measured hover feedback as well as the observed inline highlights.
- Keep header, hero and editorial identities separate: their heights, fonts and surrounding surfaces differ.
- Preserve the rest-only film-button metrics without inventing its interaction states.
- Follow the company's logo rules: preserve the supplied colours and proportions, and keep added shadows and gradients off the logo.
- Use loaded font evidence per surface; keep unresolved Korean rendering out of specimens.

### Don't

- Turn the entire page white or treat all blue labels as primary CTAs.
- Give the current homepage Blog link the prior white 12px-radius bordered shell.
- Apply an all-purpose no-shadow rule that removes the measured keyboard-focus indication.
- Assign Poppins 900 or Noto Sans KR rendering without supporting face evidence.
- Treat a browser `auto` outline or an image load that survives blur as an authored brand state.

## Voice & Tone

The corporate pages connect audio engineering with human experience. The company explains sound as a means of connecting people and affecting emotion, from smartphones to cinemas. Scientific section titles and numerical evidence sit beside a Korean mission that describes good sound and the people making it as mutually shaping one another. This is an editorial reading of the opened copy, not a published tone manual.

| Context | Observed writing pattern |
|---|---|
| Company positioning | A sound-experience promise connected to technical development. |
| Research | Team expertise, audio science and the places where the technology is used. |
| Evidence | Daily-user counts, intellectual property, awards and dated commercial milestones. |
| Actions | Short labels such as Contact us, All products and Watch the Film. |
| Korean company mission | Reciprocal language about making good sound and being shaped by it. |

The visible company title “The Science of Sound” supports the scientific register. The opened pages do not establish a rule forbidding superlatives, exclamation marks, humour or other registers; no such prohibition is included here.

## Agent Prompt Guide

### Quick colour reference

`#00b7ff` action and hover · `#ffffff` homepage paragraph/CTA foreground · `#111214` light-surface ink and dark editorial ground · `#f0f9ff` footer · `#1e1e1f` header · `#12354e` sampled dark panel · `#9ca3af` date · `#d3d5da` sampled faint text · `#fafafa` selected lower CTA labels.

### Example component prompts

- “Build the measured hero action pair on the `#020206` → `#144264` gradient: two 192 × 44px controls, 4px corners, 16px gap. Contact us is a Roboto 16px/500 link with blue fill and white text; hover changes the fill to 90% blue. All products is transparent with a blue border and label; hover fills blue and turns the label white.”
- “Create a 32px header Contact us control with 6px corners and 8px 16px padding. On the dark header its rest fill is transparent and its border and label are white; hover or press adds blue fill and makes the border transparent.”
- “Create the measured Blog link on `#111214`: transparent outer shell, no border, zero outer radius, white heading and grey date. Hover enlarges the image to 1.05 and changes the heading to blue.”
- “Use the company-page film action's rest appearance: 62px high, 4px corners, 16px 40px padding, white fill, near-black label and Poppins 18px/500 with 30px leading. No interaction treatment is specified.”

## Governance

### Known Gaps

- **Contrast, `cta-hero`.** Text `#ffffff` on `#00b7ff` measures 2.28:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
