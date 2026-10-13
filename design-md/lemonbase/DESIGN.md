---
name: Lemonbase
colors:
  primary: '#ffffff'
  canvas: '#111111'
  on-dark: '#fafafa'
  action-ink: '#1a2128'
  muted: '#677583'
  faint: '#cfd3d8'
  footer-link: '#858585'
typography:
  hero:
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: '-1.68px'
    use: Page headline (h1) on home and pricing, Onest
  section:
    fontSize: 42px
    fontWeight: 700
    lineHeight: 1.21
    use: Home feature heading (h2), Pretendard Bold
  subsection:
    fontSize: 35px
    fontWeight: 700
    lineHeight: 1.4
    use: Heading (h3) on pricing, home and the inquiry page, Pretendard Bold
  body:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.57
    use: Running text (p) on all three pages, Pretendard Regular
  action-lg:
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.56
    use: Hero action label, Pretendard Bold
rounded:
  nav: 6px
  action: 8px
  action-lg: 12px
  pill: 100px
  circle: 999px
spacing:
  action-y: 16
  action-x: 16
  action-lg-y: 16
  action-lg-x: 20
  pill-y: 8
  pill-x: 12
  nav: 8
components:
  hero-primary-action:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#1a2128'
    rounded: 12px
    padding: 16px 20px
    size: 142px x 60px
    typography: 18px / 700 / 28.08px Pretendard Bold
    states: 'rest on home captures 6 and 16 and pricing capture 16; the hover frame recorded no change; the pressed frame''s #ff0000 text and border are Chrome''s default active-link colour on the a container (the label is a child p that keeps #1a2128) and its 0.996-alpha fill is a transition frame, so no hover or pressed value is declared'
    use: 'White hero and closing-band action (a) at home::[data-omd-capture="6"], 142 x 60; the label is a child p, #1a2128 18px / 700 / 28.08px Pretendard Bold'
  hero-ghost-action:
    type: button
    backgroundColor: transparent
    textColor: '#fafafa'
    rounded: 12px
    padding: 16px
    size: 145px x 60px
    typography: 18px / 700 / 28.08px Pretendard Bold
    states: rest on home captures 7 and 17 and pricing capture 17; hover recorded no change and the pressed frame shows only the container's default active-link colour, so no state value is declared
    use: 'Transparent companion to the white hero action at home::[data-omd-capture="7"], 145 x 60, label a child p in #fafafa; the computed border is 0px and the served HTML draws a 1px border through Framer border variables outside the captured properties, so no border is claimed'
  header-primary-action:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#1a2128'
    rounded: 8px
    padding: 16px
    size: 114px x 40px
    typography: 14px / 400 / 21.98px Pretendard Bold
    states: rest on home capture 5 and pricing captures 5 and 6; the home hover frame holds a 0.98-alpha fill (a transition frame) while pricing capture 5 records no hover change, so no hover is declared; pressed shows only the container's default active-link colour
    use: 'Global navigation white action (a) at home::[data-omd-capture="5"], 114 x 40 (111 x 40 on pricing capture 6); the label is a child p in #1a2128, Pretendard Bold at a computed weight of 400'
  section-ghost-link:
    type: button
    backgroundColor: transparent
    textColor: '#fafafa'
    rounded: 8px
    padding: 16px
    size: 96px x 40px
    typography: 14px / 400 / 21.98px Pretendard Bold
    states: rest on home captures 8-10 and pricing captures 7-10 (123 x 40 and 118 x 40 there); hover recorded no change, and the pressed frame is the container's default active-link colour with a near-transparent alpha tween, so no state is declared
    use: 'Transparent section link at home::[data-omd-capture="8"], 96 x 40; the label is a child p in #fafafa'
  nav-link:
    type: tab
    backgroundColor: transparent
    textColor: '#f1f5f9'
    rounded: 6px
    padding: 8px
    size: 40px x 38px
    typography: 14px / 400 / 21.98px Pretendard Regular
    hover: 'bg #1c1c1c'
    states: 'hover fill #1c1c1c recorded on home and on pricing (capture 2 on both, a cross-surface match), and the pressed frame carries the same opaque fill, so the transition had finished before mousedown; the pressed frame''s #ff0000 text is the container''s default active-link colour, not a label change'
    use: 'Short global navigation link (a) at home::[data-omd-capture="2"], 40 x 38; the label is a child p in #f1f5f9'
  pill-segment:
    type: button
    backgroundColor: transparent
    textColor: '#677583'
    rounded: 100px
    padding: 8px 12px
    size: 88px x 38px
    typography: 14px / 400 / 21.98px Pretendard Bold
    states: 'three sibling buttons on home and pricing (captures 11-13): capture 11 records a #ffffff fill with a #121412 label while 12 and 13 are transparent with #677583 labels; no aria-selected or aria-pressed was recorded, so the white one is described as a variant, not a selected state; hover and pressed frames recorded no change'
    use: Pill segment button at home::[data-omd-capture="12"], 88 x 38 (the white variant is 85 x 38); labels are child p nodes
  carousel-arrow:
    type: button
    backgroundColor: rgba(20, 20, 20, 0.9)
    textColor: '#ffffff'
    border: '1px #2e2e2e'
    rounded: 999px
    size: 40px x 40px
    states: rest on capture 15 (home, pricing) and capture 1 (inquiry); capture 14 (and inquiry capture 0) carries the disabled attribute with the same fill, border and colour, and opacity is not among the captured properties; hover and pressed recorded no change
    use: Circular previous/next control (button, icon only) at home::[data-omd-capture="15"], 40 x 40
  footer-link:
    type: listItem
    textColor: '#858585'
    typography: 14px / 400 / 21.98px Pretendard Regular
    height: 16px
    hover: 'fg #fafafa'
    states: 'hover #fafafa on all six probed links (captures 18-23) on home and on pricing, with the identical opaque value in the pressed frame, so the transition had settled; links 24-46 lie beyond the collector''s first 24 probed controls and carry no frame'
    use: Footer text link (a.framer-text) at home::[data-omd-capture="18"]; 29 links on home and on pricing
  inquiry-text-field:
    type: input
    backgroundColor: transparent
    textColor: '#fafafa'
    rounded: 0px
    padding: 0px
    size: 452px x 24px
    typography: 14px / 400 / 16.8px Pretendard Regular
    states: 'rest on four fields (text, text, email, tel: captures 2, 4, 6, 7); the pressed frame shifts padding to 24px 0px 8px because mousedown focuses the field, so it is a focus effect and is not declared; after reportValidity() only the first field shows that shift (it receives focus) and the others record no change, so no error styling is declared'
    use: 'Inquiry form text field at surface-3::[data-omd-capture="2"] on the #111111 page'
  inquiry-select:
    type: input
    backgroundColor: transparent
    textColor: '#8a8f98'
    rounded: 0px
    padding: 14px
    size: 466px x 52px
    typography: 14px / 400 / 16.8px Pretendard Regular
    states: rest on three selects (captures 3, 5, 8); the pressed frame's 24px 14px 8px padding follows focus and is not declared, and the reportValidity() pass recorded no change
    use: Inquiry form select at surface-3::[data-omd-capture="3"]
  inquiry-submit:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#1a2128'
    rounded: 8px
    padding: 0px
    size: 480px x 48px
    typography: 14px / 400 / 21.98px Pretendard Bold
    states: rest; hover and pressed recorded no change; the button was never clicked
    use: 'Full-width inquiry submit button at surface-3::[data-omd-capture="11"]; the label (제품 도입 문의하기) is a child p in #1a2128'
fonts:
  roles:
    display: Onest
    body: Pretendard Regular
    heading: Pretendard Bold
---

# Design System Inspiration of Lemonbase

> **A Korean performance-management platform that now presents itself on a dark canvas, with white actions and record-centred copy.**

## Overview

### Visual Theme & Atmosphere

Lemonbase (레몬베이스) is a Korean HR platform run by Lemonbase Corp. The site footer names 대표이사 권민석 and an office in Seongdong-gu, Seoul. The product covers performance management, which its own product page frames as "목표부터 평가까지 성과관리를 더 공정하게" (fairer performance management from goals to evaluation), and engagement management, framed as "서베이로 시작하는 구성원 몰입관리" (member engagement that starts with a survey). Expert services sit alongside the software: consulting, leadership assessment, organization assessment and leadership education. There are also industry pages for logistics and mobility, retail, and smart manufacturing. The public story is about records rather than memory. The current home headline is "우리 조직에 지금 필요한 변화" (the change your organization needs now), and the feature headings promise that every performance record gathers in one place automatically and that evaluation and HR decisions rest on records, not recollection.

The current expression is dark and typographic. Every captured page sits on a `#111111` canvas with near-white `#fafafa` text. The page headline is set in Onest at 56px/700 with −1.68px tracking, and Korean feature headings are set in Pretendard Bold. Actions are white rectangles (`#ffffff`) carrying navy `#1a2128` labels: 12px radius at hero size, 8px in the header. Transparent companions sit beside them.

The visual system has recently changed. This catalogue's June 2026 snapshot recorded a white canvas, a `#328af6` blue action and a 48px Pretendard Bold hero. The 2026-09-30 capture records the dark canvas, the Onest headline and the white actions, and the served HTML carries a Framer build stamp of 2026-09-09. This reference records what changed, not why.

### Primary tasks

- Run goal setting and evaluation in one flow, backed by accumulated performance records
- Send a member-engagement survey and read the organization through its results
- Compare plans on the pricing page before adopting the product
- Request an introduction through the public inquiry form
- Add expert support: consulting, leadership assessment, organization assessment, leadership education

### Iconography

The carousel arrows and navigation carry icon-only controls, but the capture records no icon font, icon catalogue or sizing rule. No icon token is promoted.

### Imagery & Illustration

The home page renders product illustrations as HTML layers in the Framer page. The served markup contains layers such as `목표 칩` (goal chip) and small 9–10px text, and the loaded DM Sans and Inter faces appear in that small text. These depict the product rather than the marketing system, so their colours and type are not promoted to tokens.

### Brand Narrative

Lemonbase's first-party pages present one platform that runs performance management (goals through evaluation) and engagement management (surveys), with expert services layered on top for organizations that want guidance while adopting it. The current home page puts that promise in three moves. Records collect automatically in one place. Analysis makes people and the organization visible. Evaluation and HR decisions rest on records instead of memory. The closing heading, "설계부터 정착까지 하나의 솔루션으로" (one solution from design to adoption), extends the promise from software to the whole rollout.

The September 2026 site pairs that message with a quieter, darker frame than the June snapshot: a near-black canvas, white actions and large headline type.

### Principles

1. **Let the canvas recede.** The measured system is dark (`#111111`) with near-white text, and colour is not used for emphasis.
2. **White is the action.** Every primary action is a white fill with a navy label; transparent actions accompany it rather than compete.
3. **Headlines carry the hierarchy.** A 56px Onest headline and 42px Pretendard Bold feature headings do the structural work.
4. **Keep depicted product UI separate.** Colours and faces inside the page's HTML product illustrations are not marketing tokens.

### Personas

First-party pages address organizations and their people rather than named individuals. The stakeholder groups retained are:

- **Organizations adopting the platform:** the inquiry and pricing pages address teams deciding on adoption.
- **Leaders:** the leadership assessment and leadership education services address them directly.
- **Members (구성원):** the engagement page title names them as the subject of engagement management.
- **Industry teams:** logistics and mobility, retail, and smart-manufacturing pages address sector-specific buyers.

No named or demographic personas are invented.

## Colors

### Color & Typography

#### Color tokens

- `#ffffff`: the fill of every primary action (header, hero, inquiry submit). The action colour is white on a dark canvas, so `primary` is white.
- `#111111`: the page canvas on all three pages.
- `#fafafa`: dominant text on the dark canvas (feature headings, running text, ghost-action labels) and the footer-link hover colour.
- `#1a2128`: labels on white actions.
- `#677583`: secondary running text (38 paragraphs on home, 28 on pricing) and the unselected pill labels.
- `#cfd3d8`: faint small text on home.
- `#858585`: footer links at rest.
- Component-local, recorded in §4 and not promoted to palette roles:
  - `#1c1c1c`: navigation-link hover fill
  - `#f1f5f9`: navigation-link label
  - `#121412`: label of the white pill variant
  - `#2e2e2e`: carousel-arrow border
  - `#8a8f98`: select text

Other colours are observed but not promoted. `#328af6` survives only as the text colour of five small paragraphs on home, and no longer fills any action. `#4fae85` (ten paragraphs) and `#f7ce36` (eight paragraphs) are text colours whose role was not established.

#### Typography evidence classes

- **Live computed use, backed by loaded FontFaces:**
  - `Pretendard Regular`: 364 observed uses across body, input, list and text.
  - `Pretendard Bold`: 103 uses across `h2`, `h3` and action labels.
  - `Onest`: 5 uses, the `h1` on home and pricing.
  - `DM Sans` (30 uses, 9–10px text), `Inter` (8 uses, 24px figures on pricing), and `Pretendard Medium`, `SemiBold` and `ExtraBold` (small counts) are also loaded and used.
  - The machine tokens name only Onest (display), Pretendard Regular (body) and Pretendard Bold (heading).
- **Computed weight versus cut:** Pretendard is served as named cuts. Several labels compute `font-weight: 400` while rendering the `Pretendard Bold` family, and the tokens report both values as measured.
- **Declared-only faces:** `Manrope`, `Pretendard Black`, `Inter Display`, `Inter Variable` and Framer's `… Placeholder` metric faces have `@font-face` declarations but zero visible uses. `Manrope` was a token in the June snapshot and is now declared only.
- **Assets and licences:** the bundle records no font source URL for any face, so hosting and licence terms are not established in this reference.
- **Product-app fonts:** the authenticated Lemonbase application was not observed, and its fonts are unresolved.
- **System stack:** `sans-serif` (142 uses) appears on `a` and `button` containers whose visible labels are child `p` nodes. It is not a type choice.

## Layout

### Layout & Grid

- **Canvas:** the page background is `#111111` on all three captured pages. The served HTML declares it outside any colour-scheme query (`html body { background: rgb(17, 17, 17); }`).
- **Headline hierarchy:** the `h1` measures 56px/700/72.8px Onest in a 1200px-wide box on home. `h2` feature headings measure 42px/700/50.82px Pretendard Bold in 580px columns, and `h3` headings 35px/700/49px Pretendard Bold.
- **Action spacing:** the header action uses 16px padding in a 40px-high box. The hero action uses 16px 20px in a 60px-high box. These are component measurements, not a general spacing scale.
- **Boundary:** the capture records a 1440px desktop viewport only. No breakpoint, container rule or logged-in application shell was measured.

## Motion & Easing

### Motion

Some hover and pressed frames hold fractional-alpha fills (0.98 on the header action, 0.996 on the hero action), which shows that those controls animate between values. No duration or easing was recorded.

No duration, easing curve or reduced-motion behaviour was captured. The fractional-alpha frames in §7 show that transitions exist, and this reference does not invent their timing.

## Components

These are static computed-style observations from three public pages, with selector provenance. Labels on Framer links are child `p` nodes, so each label's colour and type come from that child, not the `a` container (which computes the browser default `#0000ee`, 12px). Hover and pressed values are declared only when both frames hold the same opaque value on more than one element or surface. Focus values are never taken from the bundle. The pressed frames' `#ff0000` is Chrome's default active-link colour on the container, and is never a brand state.

### Hero actions

**White** (`hero-primary-action`)
- Background: `#ffffff`
- Label: `#1a2128`, 18px / 700 / 28.08px Pretendard Bold
- Radius: `12px`
- Padding: `16px 20px`
- Size: 142px × 60px
- States: none declared. Hover recorded no change, and pressed shows only the container's active-link colour plus a 0.996-alpha transition frame.
- Evidence: home captures 6 and 16, pricing capture 16

**Transparent** (`hero-ghost-action`)
- Background: transparent
- Label: `#fafafa`, 18px / 700
- Radius: `12px`
- Padding: `16px`
- Size: 145px × 60px
- Border: the served HTML draws a 1px border through Framer variables that sit outside the captured properties, so no border is claimed.

### Header action

**White** (`header-primary-action`)
- Background: `#ffffff`
- Label: `#1a2128`, 14px Pretendard Bold (computed weight 400)
- Radius: `8px`
- Padding: `16px`
- Size: 114px × 40px
- States: hover is not declared. Home holds a 0.98-alpha transition frame while pricing records no change.

### Section link

**Transparent** (`section-ghost-link`)
- Background: transparent
- Label: `#fafafa`, 14px Pretendard Bold
- Radius: `8px`
- Padding: `16px`
- Size: 96px × 40px
- Instances: 123px × 40px and 118px × 40px on pricing

### Navigation link

**Default** (`nav-link`)
- Background: transparent
- Label: `#f1f5f9`, 14px / 400 / 21.98px Pretendard Regular
- Radius: `6px`
- Padding: `8px`
- Size: 40px × 38px
- Hover: background `#1c1c1c`. It was recorded on both home and pricing, and the pressed frame holds the same opaque fill.

### Pill segment

**Default** (`pill-segment`)
- Background: transparent
- Label: `#677583`, 14px Pretendard Bold
- Radius: `100px`
- Padding: `8px 12px`
- Size: 88px × 38px
- Variant: one sibling records a `#ffffff` fill with a `#121412` label. Neither `aria-selected` nor `aria-pressed` was recorded, so it is a described variant, not a selected state.

### Carousel arrow

**Default** (`carousel-arrow`)
- Background: `rgba(20, 20, 20, 0.9)`
- Icon colour: `#ffffff`
- Border: 1px `#2e2e2e`
- Radius: `999px`
- Size: 40px × 40px
- Disabled: the disabled instance records the same fill, border and colour (opacity was not captured). It appears on all three pages.

### Footer link

**Default** (`footer-link`)
- Text: `#858585`, 14px / 400 / 21.98px Pretendard Regular
- Height: 16px
- Hover: `#fafafa` on all six probed links on both home and pricing, with the pressed frame identical.
- Instances: 29 links per page. Links beyond the first 24 probed controls carry no frame.

### Inquiry form

- **Text field** (`inquiry-text-field`):
  - Style: transparent, `#fafafa` 14px / 400 / 16.8px Pretendard Regular, 452px × 24px, 0px padding
  - Scope: four fields (text, text, email, tel)
- **Select** (`inquiry-select`): transparent, `#8a8f98` text, 14px padding, 466px × 52px.
- **Submit** (`inquiry-submit`): `#ffffff` fill, `#1a2128` label (제품 도입 문의하기), 8px radius, 480px × 48px. It was never clicked.
- **No field state is declared.** The padding shift to `24px 0px 8px` happens when a field gains focus, and the `reportValidity()` pass recorded no colour or border change on any field.

---

**Verified:** 2026-09-30
**Tier 1 sources:** `https://lemonbase.com/`, `https://lemonbase.com/pricing`, `https://lemonbase.com/products/inquiry` (public marketing, computed styles); `https://lemonbase.com/products/performance`, `https://lemonbase.com/products/hr-survey` (first-party product context)
**Tier 2 sources:** not attempted in this session (see `.verification.md`)
**Conflicts unresolved:** none

The June 2026 snapshot's tokens are superseded wherever the 2026-09-30 capture contradicts them or cannot support them. Removed:
- the white canvas and `#328af6` action
- `#469f68`, `#edf5ff`, the slate surfaces and the three purple/yellow/pink accents
- the 48/44/36/28px Pretendard scale
- the three-step shadow scale
- Manrope as an accent family
- the invented hover darkening, loading, empty and error states
- the motion tokens

### States

- **Observed:**
  - navigation-link hover (`#1c1c1c` background)
  - footer-link hover (`#fafafa` text)
  - the carousel arrow's `disabled` attribute, with unchanged fill, border and colour
- **Not declared:**
  - focus values (never taken from the bundle)
  - field error styling (the validation pass recorded no change)
  - the pressed frames' `#ff0000` browser default
- **Not captured:** loading, empty, success and selected states.

## Do's and Don'ts

### Do

- Set actions as `#ffffff` fills with `#1a2128` labels on the `#111111` canvas.
- Use Onest only for the page headline and Pretendard Regular/Bold for Korean text, as captured.
- Keep hover declarations to the two measured cases (navigation fill `#1c1c1c`, footer text `#fafafa`).
- Preserve the surface and selector provenance recorded in §4.

### Don't

- Reintroduce the June white canvas, the `#328af6` action, the accent trio or the shadow scale.
- Treat the pressed frames' `#ff0000` as a brand pressed colour.
- Promote colours or faces from the HTML product illustrations to marketing tokens.
- Invent focus, error, loading or empty states.

---

**Verified:** 2026-09-30
**Pipeline:** omd:add-reference UPDATE (deterministic capture + first-party context reconcile)
**Catalog position:** KR · saas · HR performance management

## Voice & Tone

### Content & Voice

The public copy frames HR work around records, fairness and organizational change. Performance is something recorded and analysed, not remembered. Engagement starts with a survey. Adoption is a conversation, with a "제품 도입 문의" (product adoption inquiry) request on every page.

**Voice adjectives:** evidence-minded · plain · organization-level

| Context | Observed wording (served HTML, 2026-09-30) |
|---|---|
| Page headline | "우리 조직에 지금 필요한 변화" |
| Feature headings | "모든 성과의 기록이 자동으로 한 곳에", "쌓인 기록을 분석하여 사람과 조직이 보이도록", "기억이 아닌, 기록으로 근거있는 평가와 인사 결정", "설계부터 정착까지 하나의 솔루션으로" |
| Product page titles | "목표부터 평가까지 성과관리를 더 공정하게", "서베이로 시작하는 구성원 몰입관리" |
| Actions | "제품 도입 문의", "제품 도입 문의하기" |

| Do | Don't |
|---|---|
| Ground claims in records and analysis. | Frame evaluation as judgement or surveillance. |
| Speak to the organization and its members together. | Address only executives or only individual employees. |
| Keep action labels literal ("도입 문의"). | Add urgency or promotional exclamation. |

## Governance

### Accessibility

- The primary action pairs `#1a2128` on `#ffffff`, and running text pairs `#fafafa` or `#677583` on `#111111`.
- The collector recorded no focus-visible, keyboard or screen-reader behaviour, and no field error styling. Implementations should supply an explicit focus indicator and field-level error treatment rather than infer them.
- `#677583` on `#111111` is a lower-contrast pairing for 14px text and should be checked before reuse.

### Known Gaps

- **Contrast, `pill-segment`.** Text `#677583` on `#00000000` measures 4.45:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
