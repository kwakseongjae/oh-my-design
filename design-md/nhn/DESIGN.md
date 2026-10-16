---
name: NHN
colors:
  primary: '#212126'
  foreground: '#36363d'
  muted: '#57575b'
  subtle: '#62626a'
  hint: '#aaaaae'
  surface: '#f8f8f8'
  canvas: '#ffffff'
  hairline: '#e5e7eb'
  on-primary: '#ffffff'
typography:
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Observed corporate body/list text
  nav:
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.75
    use: Observed primary navigation action
  label:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.57
    use: Observed secondary action and label
  title:
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.5
    use: Observed Korean heading
rounded:
  none: 0px
  pill: 50px
spacing:
  xs: 4
  sm: 7
  md: 8
  base: 10
  lg: 22
  xl: 32
  xxl: 80
components:
  previous-control:
    type: button
    rounded: 0px
    size: 26px x 32px
    states: 'captured disabled on the services surface (captures 37, 40, 44: the carousels sat on their first slide). Its dumped properties equal the enabled next control (captures 38, 41, 45); the class list names opacity-40, but opacity is outside the dump, so no disabled value is declared. Corrected 2026-09-30: the July entry took its values from the disabled element, gave it the inherited body text (#212126, 16px / 400) as a label although the control is icon-only, and stated opacity 0.4 from the class name'
    use: Carousel previous control (button.prevNav) on the services surface; geometry from the enabled next control at surface-2::[data-omd-capture="38"]
  gnb-submenu-link:
    type: tab
    backgroundColor: transparent
    textColor: '#57575b'
    rounded: 0px
    padding: 0px
    height: 22px
    typography: 14px / 500 / Pretendard Variable
    selected: font 14px / 700, tracking normal
    hover: font 14px / 700, tracking normal
    pressed: font 14px / 700, tracking normal
    states: rest, hover and pressed sampled on 52 header sub-menu links across the three surfaces (104 frames). Every frame changes only the weight (500 to 700) and the tracking (-0.14px to normal); the colour and every other dumped property stay at rest. The current sub-page link computes the same 700 / normal at rest on services (capture 10) and IR (capture 17), so the value is settled. Focus was not sampled
    use: Header sub-menu link (a.text-body11-m inside li.py-7) at home::[data-omd-capture="2"]; 48-90 px wide, line height 22px, rest tracking -0.14px
  gnb-link:
    type: tab
    backgroundColor: transparent
    textColor: '#36363d'
    rounded: 0px
    padding: 0px
    height: 28px
    typography: 16px / 500 / Pretendard Variable
    selected: font 16px / 700
    states: rest captured on all three surfaces; the current section's link computes 700 on services (capture 6) and on IR (capture 14), the same pairing on both routes. No state frame
    use: Header main navigation link (a.text-body10-m inside li.mainLink, which carries the colour and 80px right padding) at home::[data-omd-capture="1"]; line height 28px
  category-tab-pill:
    type: tab
    backgroundColor: '#ffffff'
    textColor: '#62626a'
    rounded: 40px
    padding: 0px 32px
    height: 48px
    typography: 16px / 500 / Pretendard Variable
    selected: 'bg #212126, fg #ffffff, 16px / 700'
    states: 'unselected pills captured on services (four) and IR (five); the pill for the current tab computes bg #212126, fg #ffffff and 700 on both routes (services capture 35, IR capture 34) and adds cursor-default to its class list. No aria-selected is recorded; no state frame. The class list names a border, but its computed width is 0px'
    use: Services and IR category tab pill (a.rounded-40) at surface-2::[data-omd-capture="33"]; 92-124 px wide, line height 28px
  services-pill:
    type: button
    backgroundColor: '#f8f8f8'
    textColor: '#62626a'
    rounded: 50px
    padding: 4px 8px 4px 14px
    height: 32px
    typography: 14px / 500 / Pretendard Variable
    states: four captured at rest on services (button capture 43; links 39, 42, 46); no state frame
    use: Services tag pill at surface-2::[data-omd-capture="43"]; 90-109 px wide, line height 22px, tracking -0.14px
    pressed: no visible change (measured 2026-10-16) (:hover + :active)
  ir-subtab-link:
    type: tab
    backgroundColor: transparent
    textColor: '#aaaaae'
    rounded: 100px
    padding: 11.008px 0px 11.008px 32px
    height: 50px
    typography: 16px / 500 / Pretendard Variable
    selected: 'fg #212126, font 16px / 700 (label)'
    states: 'two captured on IR; one (capture 38) computes #212126 with a 700 label, the other #aaaaae with 500. No aria-selected is recorded, so the pairing rests on that difference on a route carrying a subTab parameter. The hover colours in the class lists are declarations; no state frame'
    use: IR financial sub-tab link (a, 240 px wide) at surface-3::[data-omd-capture="39"]; the font is its li label (line height 28px)
  feature-card:
    type: card
    backgroundColor: '#f8f8f8'
    textColor: '#ffffff'
    rounded: 24px
    size: 612px x 702px
    typography: 32px / 800 / Main Pretendard Variable
    states: one card captured at rest on home; no state frame
    use: 'Home feature card at home::[data-omd-capture="33"]; text colour and font are the child h2 (line height 48px); the root''s #212126 / 16px / 400 are the inherited body text'
  news-list-item:
    type: card
    backgroundColor: transparent
    textColor: '#36363d'
    padding: 0px 22px 0px 0px
    size: 508px x 126px
    typography: 20px / 700 / Main Pretendard Variable
    states: nine captured at rest on home (captures 35-43); no state frame
    use: 'Home news list item at home::[data-omd-capture="35"]; text colour and font are the child h3 (line height 30px, clamped to two lines); the root''s #212126 / 16px / 400 are the inherited body text'
  footer-link:
    type: button
    backgroundColor: transparent
    textColor: '#212126'
    rounded: 0px
    padding: 0px
    height: 28px
    typography: 16px / 500 / Pretendard Variable
    states: captured on all three surfaces; the nine-character item (capture 47, 114 px wide) computes 700. No state frame
    use: Footer link and link-styled button (text-grayscale-1 min-w-[56px] text-body10-l) at home::[data-omd-capture="45"]; minimum width 56px, line height 28px
  footer-social-button:
    type: button
    backgroundColor: '#f8f8f8'
    border: '1px #f8f8f8'
    rounded: 100px
    padding: 10px
    size: 42px x 42px
    states: four per surface, captured at rest on all three surfaces; icon only; no state frame
    use: Footer social link (a with border-grayscale-12 bg-grayscale-12) at home::[data-omd-capture="50"]
fonts:
  roles:
    ui: Pretendard Variable
    display-kr: Main Pretendard Variable
---

# Design System Inspiration of NHN

## Overview

### Visual Theme & Atmosphere

NHN is a Korean IT group whose public corporate presence connects a long Hangame-era history with businesses in games, payments and advertising, technology, commerce, and content. Its current brand expression is built around **Weaving New Play**: NHN’s own rebrand story explains the phrase as a move from a simple connection toward a more multidirectional act of weaving. The 2024 CI then made that idea tangible through folded-paper forms, a 27-degree fold motif, and a decision to abandon a single fixed brand colour in favour of achromatic identity. [NHN history](https://www.nhn.com/company?tab=about) and [official CI story](https://inside.nhn.com/corp/245) provide that context.

The supplied July 2026 runtime evidence is limited to three public corporate surfaces: the main site, a services listing, and an investor-relations financial page. Across those surfaces, the visible interface is restrained and nearly monochrome: `#212126` is the principal ink, `#36363d` and `#57575b` carry hierarchy, and `#f8f8f8` provides the recurring soft surface. The collector observed no shadows. Navigation links and text actions are square; the rounded shapes are pills and circles: 40px category tabs on the services and IR pages, 50px tag pills, a 24px feature card and 42px circular social links (§4). Corrected 2026-09-30: the July text said the only rounded element was a 50px pill on one low-confidence services control. These are corporate-web observations, not a claim about NHN’s separate customer products or their documentation interfaces.

**Key Characteristics:**
- Official brand rationale: connection reinterpreted as multidirectional weaving
- Corporate-web palette: near-black ink with neutral grey hierarchy and white canvas
- Flat visual treatment: the captured components report `box-shadow: none`
- Live UI typography: Pretendard Variable; Main Pretendard Variable appears in Korean heading roles
- Official NHN Sans is a distinct brand asset, not a live-family token for these captured pages

### Primary tasks

- Find out which businesses the group works across
- Browse the technology services the group offers
- Look up the group's financial results on its investor-relations page

### Brand Narrative

NHN traces its history to Hangame Communication and the Hangame online-game portal, then describes a modern global IT group working across multiple business areas. Its official timeline records the 2023 public introduction of “Weaving New Play”; its 2024 CI story explains the subsequent folded-paper identity, the 27-degree fold, and the achromatic colour decision. [Official history](https://www.nhn.com/company?tab=about) · [Official CI story](https://inside.nhn.com/corp/245)

### Principles

1. **Connection becomes weaving.** Official rebrand material frames the idea as multidirectional connection. *UI implication:* organise diverse corporate information under one calm, consistent structure.
2. **Achromatic identity leaves room for variety.** NHN says it abandoned a single colour to open varied combinations. *UI implication:* keep corporate chrome neutral unless a directly observed surface provides a different role.
3. **CI and typography are controlled brand assets.** NHN asks that brand resources not be arbitrarily changed. *UI implication:* do not substitute NHN Sans, its CI, or unverified font-family names as though they were live tokens.

### Personas

NHN has not supplied first-party audience-segment or persona documentation in the sources reviewed for this reference. Do not fabricate named user personas from the corporate, services, or IR surfaces.

## Colors

### Live corporate-web colors
- **Primary Ink** (`#212126`): Observed text and transparent action labels across all three captured surfaces.
- **Foreground** (`#36363d`): Observed corporate primary-navigation list item text.
- **Muted** (`#57575b`): Most frequent observed secondary/list text colour.
- **Subtle** (`#62626a`): Secondary action/label text on the services surface.
- **Hint** (`#aaaaae`): Low-emphasis list text on the IR surface.
- **Surface** (`#f8f8f8`): Recurrent neutral background, including the observed services pill control.
- **Canvas / On Ink** (`#ffffff`): Observed page background and contrast text.
- **Hairline** (`#e5e7eb`): Computed border colour recurring in the raw collector output.

### Brand boundary

NHN’s official CI story says the company chose achromatic brand colour rather than a single colour so the identity could accommodate a variety of combinations. That supports the neutral brand narrative; it does not promote colours from affiliate product surfaces into this corporate-web token set. [Official CI story](https://inside.nhn.com/corp/245)

## Typography

### Evidence classes

- **Live computed + FontFaceSet corroborated — `Pretendard Variable`:** 370 observed uses across body, buttons, cards, headings, and lists. The bundle records 92 NHN-hosted subset source URLs under `static.nhnent.com`.
- **Live computed + FontFaceSet corroborated — `Main Pretendard Variable`:** 32 observed uses, including Korean `h2`/`h3` roles. The collector found it loaded, but did not retain an individual source URL; retain it as a live family with that source-url limitation.
- **Live internal family, public-name unresolved — `__Poppins_1848dd`:** two heading uses and NHN-hosted font assets were observed. The collector does not establish that this internal runtime name is the public Poppins family, so `Poppins` is not a typography token.
- **Official distributed brand asset / official product-use — `NHN Sans`:** NHN’s brand-resource page presents it as the company’s exclusive typeface, and the official typeface story says it is intended for official communications. It was not observed as a loaded family on the three captured surfaces, so it is not a live UI token or specimen here. [Brand resource](https://www.nhn.com/en-US/company?subTab=brandResource&tab=brand) · [Typeface story](https://inside.nhn.com/corp/260)
- **Declared-only:** `__Poppins_Fallback_1848dd` and `swiper-icons` appeared without visible use; neither is promoted.

### Observed hierarchy

| Role | Family | Size | Weight | Line Height | Evidence boundary |
|------|--------|------|--------|-------------|-------------------|
| Corporate body/list | Pretendard Variable | 16px | 400 | 24px | Repeated across all captured surfaces |
| Primary action | Pretendard Variable | 16px | 500 | 28px | Transparent action-label control |
| Secondary label | Pretendard Variable | 14px | 500 | 22px | Services controls/labels |
| Korean title | Main Pretendard Variable | 20px | 700 | 30px | Captured `h3` role |
| Large Korean display | Main Pretendard Variable | 32px | 800 | 48px | One captured `h2` role |

## Layout

The collected evidence supports a flat corporate information layout: transparent navigation/actions, neutral `#f8f8f8` surface moments, and a white canvas. Measured spacing clusters include 4, 7, 8, 10, 22, 32, and 80px; they are observations rather than a complete spacing scale. No product-app layout or documentation layout was captured.

### Responsive Behavior

The supplied collector used only a 1440×900 viewport. Responsive breakpoints, mobile navigation, and touch-target behaviour are unresolved and intentionally omitted.

## Elevation & Depth

All captured representative components report `box-shadow: none`. Separation in the captured corporate UI comes from text hierarchy, white/neutral surfaces, and the recurring `#e5e7eb` computed border colour. No elevation ramp is inferred beyond that evidence.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`

## Motion & Easing

No motion durations, easing curves, or interaction transitions were captured. The raw class names are not sufficient evidence to publish motion tokens; leave motion unresolved for this reference.

## Components

### Corporate navigation

**Primary list item**
- Text: `#36363d`
- Radius: 0px
- Padding: 0px 80px 0px 0px
- Label: the child link (`a.text-body10-m`) computes 16px / 500 / 28px; the current section's link computes 700 (see Header main link below).
- Use: Observed corporate primary-navigation list item (`home::li`; also present on services and IR surfaces).
- Corrected 2026-09-30: the July text gave this item 16px / 400, which is the list item's inherited body type; the visible label is its child link.

**Secondary list item**
- Text: `#57575b`
- Radius: 0px
- Padding: 7.008px 0px
- Label: the child link (`a.text-body11-m`) computes 14px / 500 / 22px, tracking -0.14px (see Header sub-menu link below).
- Use: Observed corporate secondary/list item (`home::li`; also present on services and IR surfaces).
- Corrected 2026-09-30: the July text gave this item 16px / 400, the list item's inherited body type; the visible label is its child link.

### Actions

**Transparent action label**
- Text: `#212126`
- Radius: 0px
- Font: 16px / 500 / Pretendard Variable
- Use: Observed transparent action control (`home::[data-omd-capture="45"]`) across the corporate surfaces. It is the footer link recorded as `footer-link` below.

**Secondary label action**
- Text: `#62626a`
- Radius: 0px
- Font: 14px / 500 / Pretendard Variable
- Use: Observed services-surface control (`surface-2::[data-omd-capture="49"]`). It is an unselected label inside a 273px × 48px control whose frame has a 40px radius and 0px 22px padding. The neighbouring label (capture 48) computes `#ffffff` / 14px / 700 over a fill the capture does not include, so no selected style is declared.

**Previous control**
- Radius: 0px; size 26px × 32px; transparent
- Disabled: all three previous controls on the services surface (captures 37, 40, 44) were disabled at capture time. Their dumped properties equal the enabled next controls (captures 38, 41, 45). The class list names `opacity-40`, but opacity is outside the collector's dump, so no disabled value is declared.
- Use: Observed previous-navigation control on the services surface; icon only.
- Corrected 2026-09-30: the July text read this control's values from the disabled element, listed the inherited body text (`#212126`, 16px / 400) as its text style, and stated `opacity: 0.4` from the class name.

### Compact pill

**Services pill**
- Background: `#f8f8f8`
- Text: `#62626a`
- Radius: 50px
- Padding: 4px 8px 4px 14px
- Font: 14px / 500 / Pretendard Variable
- Use: Services tag pill (`surface-2::[data-omd-capture="43"]`, a button; captures 39, 42 and 46 are links with the same values); do not generalize it to other NHN surfaces. Corrected 2026-09-30: the July text called it one low-confidence control; the services page holds four.

The components below were transcribed on 2026-09-30 from the same 2026-07-13 bundle; nothing was re-measured.

### Header sub-menu link

- Background: transparent
- Text: `#57575b`
- Font: 14px / 500 / Pretendard Variable, line height 22px, tracking -0.14px
- Radius: 0px; padding 0px; height 22px (48px to 90px wide)
- Hover: weight 700, tracking normal; colour #57575b in every frame
- Pressed: weight 700, tracking normal; colour #57575b in every frame
- Selected: the current sub-page link computes 700 and tracking normal at rest on services (capture 10) and IR (capture 17).
- States: 52 links across the three surfaces record a hover and a pressed frame (104 frames). Every frame changes only the weight (500 to 700) and the tracking (-0.14px to normal), which is exactly the current sub-page link's rest style on two routes, so the value is settled. The class list also names `hover:text-body11-l`; that is a declaration, and the frames are the measurement. Focus was not sampled.
- Use: `a.text-body11-m` inside the header sub-menu; evidence `home::[data-omd-capture="2"]`.

### Header main link

- Background: transparent
- Text: `#36363d`
- Font: 16px / 500 / Pretendard Variable, line height 28px
- Radius: 0px; padding 0px; height 28px
- Selected: the current section's link computes 700 on services (capture 6) and IR (capture 14).
- States: rest only; no state frame.
- Use: `a.text-body10-m` inside `li.mainLink`; evidence `home::[data-omd-capture="1"]`.

### Category tab pill

- Background: `#ffffff`
- Text: `#62626a`
- Font: 16px / 500 / Pretendard Variable, line height 28px
- Radius: 40px; padding 0px 32px; height 48px (92px to 124px wide)
- Selected: `#212126` fill, `#ffffff` text, weight 700 (services capture 35, IR capture 34); the class list adds `cursor-default`. No `aria-selected` is recorded; the pairing agrees on both routes.
- Border: none. The class list names `border`, but the computed width is 0px.
- States: default and selected only; no state frame.
- Use: category tabs on the services and IR pages; evidence `surface-2::[data-omd-capture="33"]`.

### IR sub-tab link

- Background: transparent
- Text: `#aaaaae`; label 16px / 500 / 28px (the child `li`)
- Radius: 100px; padding 11.008px 0px 11.008px 32px; 240px × 50px
- Selected: one of the two links (capture 38) computes `#212126` with a 700 label. No `aria-selected` is recorded, so the pairing rests on that difference on a route that carries a `subTab` parameter.
- States: no state frame; the hover colours in the class lists are declarations.
- Use: financial-statement sub-tabs on the IR page; evidence `surface-3::[data-omd-capture="39"]`.

### Feature card

- Background: `#f8f8f8`
- Radius: 24px
- Size: 612px × 702px
- Title: `#ffffff`, 32px / 800 / 48px, Main Pretendard Variable (the child `h2`)
- States: default only; no state frame.
- Use: home feature card; evidence `home::[data-omd-capture="33"]`. The root computes the inherited body text, so no text style is taken from it.

### News list item

- Background: transparent
- Size: 508px × 126px; padding 0px 22px 0px 0px
- Title: `#36363d`, 20px / 700 / 30px, Main Pretendard Variable, clamped to two lines (the child `h3`)
- States: nine captured at rest on home; no state frame.
- Use: home news list; evidence `home::[data-omd-capture="35"]`. The root computes the inherited body text.

### Footer link

- Background: transparent
- Text: `#212126`
- Font: 16px / 500 / Pretendard Variable, line height 28px
- Radius: 0px; padding 0px; height 28px; minimum width 56px
- Emphasis: the nine-character item (capture 47, 114px wide) computes 700.
- States: default only; no state frame.
- Use: footer links and link-styled buttons on all three surfaces; evidence `home::[data-omd-capture="45"]` to `"47"`.

### Footer social link

- Background: `#f8f8f8`
- Border: 1px `#f8f8f8`
- Radius: 100px; padding 10px; 42px × 42px
- States: four per surface, captured at rest on all three surfaces; icon only; no state frame.
- Use: footer social links; evidence `home::[data-omd-capture="50"]` to `"53"`.

---

**Verified:** 2026-07-13
**Tier 1 sources:** https://www.nhn.com/ (corporate marketing surface, raw collector); https://www.nhn.com/services?tab=technology (corporate services surface, raw collector); https://www.nhn.com/ir?tab=financials&subTab=consolidatedFinancial (IR disclosure surface, raw collector); https://www.nhn.com/company?tab=about (official context); https://inside.nhn.com/corp/245 (official CI narrative); https://inside.nhn.com/corp/260 (official typeface narrative)
**Tier 2 sources:** https://getdesign.md/nhn (attempted; retrieval error in this run); https://styles.refero.design/?q=nhn (attempted; retrieval error in this run)
**Conflicts unresolved:** none

### States

The supplied collector recorded 104 pointer-state frames, all on the header sub-menu links: hover and pressed change the weight from 500 to 700 and the tracking from -0.14px to normal, matching the current sub-page link at rest (§4). Selected states are recorded as current-route markers: the header main link (700), the category tab pill (`#212126` fill, `#ffffff` text) and the IR sub-tab link (`#212126`, 700). The previous-navigation controls were disabled at capture time; opacity is outside the dump, so their disabled look is unresolved. Focus, loading, error, empty and success states were not captured and are unresolved. Corrected 2026-09-30: the July text named the disabled control as the only recorded state and gave it `#212126` text and `opacity: 0.4`, taken from the body text and the class name.

Live state probe, 2026-10-16 (`https://www.nhn.com/services?tab=technology`), `services-pill`: pressed — no visible change (measured 2026-10-16).

## Do's and Don'ts

### Do
- Keep the corporate chrome neutral and let the ink-to-grey text hierarchy do the work.
- Use the observed flat treatment: no shadow on captured corporate components.
- Keep `Pretendard Variable` for live UI/body roles represented in this evidence.
- Treat NHN Sans as an official communication asset until a target surface proves live use.
- Keep the one observed disabled previous-control treatment tied to its services-surface context.

### Don't
- Promote affiliate-product colours or components into the NHN corporate reference without direct evidence.
- Rename `__Poppins_1848dd` to Poppins in a token set without a reliable public-family mapping.
- Invent hover, focus, pressed, error, or success variants beyond the header sub-menu link's measured hover and pressed weight change. Corrected 2026-09-30: the July reason, "zero interaction captures", counts expansions, not pointer-state frames.
- Generalize the low-confidence services pill into a global button style.

## Voice & Tone

NHN’s first-party language centres on connection and future-facing expansion: the official slogan is “Weaving New Play,” while the company’s rebrand story describes a shift from simple connection to multidirectional weaving. Corporate copy should stay explanatory and composed rather than adding product-marketing superlatives. [Official slogan story](https://inside.nhn.com/corp/164)

## Agent Prompt Guide

Use this reference only for an NHN-like **corporate information surface**: white canvas, near-black `#212126` text, a muted `#36363d` / `#57575b` hierarchy, `#f8f8f8` neutral surface moments, Pretendard Variable body/UI text, and no shadows. Do not use it as a substitute for an NHN affiliate product, authenticated app, or documentation system.

## Governance

### Known Gaps

- **Contrast, `gnb-submenu-link`.** Text `#57575b` on `#00000000` measures 2.92:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `gnb-link`.** Text `#36363d` on `#00000000` measures 1.75:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `feature-card`.** Text `#ffffff` on `#f8f8f8` measures 1.06:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `news-list-item`.** Text `#36363d` on `#00000000` measures 1.75:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `footer-link`.** Text `#212126` on `#00000000` measures 1.31:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
