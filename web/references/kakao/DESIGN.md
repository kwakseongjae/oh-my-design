---
name: Kakao
colors:
  login: '#fee500'
  login-symbol: '#000000'
  login-label: '#000000'
  marketing: '#fae100'
  dark-marketing: '#111111'
  canvas: '#ffffff'
  foreground: '#333333'
  on-dark: '#ffffff'
  muted: '#888888'
  surface: '#eeeeee'
  border: '#dbdbdb'
typography:
  display:
    fontSize: 53.82px
    fontWeight: 700
    lineHeight: 66px
    letterSpacing: '-1px'
  heading:
    fontSize: 30px
    fontWeight: 700
    lineHeight: 40px
  title:
    fontSize: 28px
    fontWeight: 700
    lineHeight: 42px
  nav:
    fontSize: 17px
    fontWeight: 400
    lineHeight: 27px
  body:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 21px
  body-readable:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 24.92px
    letterSpacing: '-0.2px'
  caption:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 18px
    letterSpacing: '-0.2px'
rounded:
  login: 12px
  marketing: 16px
  search: 18px
  footer: 24px
  filter: 30px
  full: 999px
spacing:
  xs: 4
  sm: 6
  md: 8
  lg: 16
  xl: 20
components:
  kakao-login:
    type: button
    backgroundColor: '#fee500'
    textColor: rgba(0, 0, 0, 0.85)
    rounded: 12px
    typography: 30Pt / OS system
    states: full label or shortened label; hover, pressed, and disabled visuals are not specified by this guide
    use: Kakao Login only; preserve black speech-bubble symbol and mandated colors
  corporate-nav:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#000000'
    rounded: 999px
    padding: 4px 16px 6px
    height: 37px
    typography: 17px / 400 / KakaoBig
    hover: 'bg #f3f3f3'
    pressed: 'bg #f3f3f3'
    focus: 'bg #f3f3f3'
    states: 'light and dark theme variants; hover and pressed bg #f3f3f3 in the 2026-07-11 capture on three corporate pages and again on 2026-09-29 with :hover and :active matched; keyboard focus (Tab stop 4, :focus-visible matched) fills bg #f3f3f3 beside the browser default ring (outline auto); the fill stayed after focus moved on, which suggests a script-applied current-item state (a lead, not a finding)'
    use: top-level corporate menu trigger
  search-control:
    type: button
    backgroundColor: transparent
    textColor: '#333333'
    rounded: 18px
    height: 36px
    typography: 14px / 400 / KakaoSmall
    hover: 'bg #eeeeee'
    pressed: 'bg #eeeeee'
    states: 'hover and pressed bg #eeeeee, measured 2026-09-29 on the corporate home with :hover and :active matched and sampled 2026-07-11 on the search, language and theme buttons of the corporate pages; keyboard focus draws only the browser default ring (outline auto), so no focus value is declared; the search input opens in a layer behind a click and was not measured'
    use: corporate-site circular search control; the language and theme toggles share the same 36px circle
  dark-marketing-tag:
    type: badge
    backgroundColor: '#111111'
    textColor: '#ffffff'
    border: '2px solid #ffffff'
    rounded: 16px
    padding: 7px 8px 8px
    height: 32px
    typography: 13px / 700 / KakaoSmall
    hover: bg rgba(17, 17, 17, 0.75)
    pressed: bg rgba(17, 17, 17, 0.75)
    states: hover and pressed bg rgba(17, 17, 17, 0.75), sampled 2026-07-11 and confirmed 2026-09-29 with :hover and :active matched; border and label stay as at rest; keyboard focus draws only the browser default ring (outline auto), so no focus value is declared
    use: dark corporate marketing tag/CTA label
  milestone-filter:
    type: button
    backgroundColor: '#eeeeee'
    textColor: '#000000'
    rounded: 30px
    padding: 8px 20px 12px
    height: 44px
    typography: 16px / 700 / KakaoBig
    pressed: 'bg #dfdfdf'
    states: 'selected filter captured; pressed bg #dfdfdf from one 2026-07-11 frame on the category combobox (surface-3::[data-omd-capture="15"]); hover and focus not sampled'
    use: milestone category filter
  footer-pill:
    type: button
    backgroundColor: '#eeeeee'
    textColor: '#000000'
    rounded: 24px
    padding: 10px 20px 12px
    height: 40px
    typography: 12px / 400 / KakaoSmall
    states: 'default captured 2026-07-11 on the milestones page; on 2026-09-29 the same pill on the corporate home matched :hover and :active and kept bg #eeeeee and fg #000000, so there is no hover or pressed value to declare; keyboard focus draws only the browser default ring (outline auto)'
    use: corporate footer related-site pill
  marketing-download-cta:
    type: button
    backgroundColor: '#fae100'
    textColor: '#000000'
    border: '2px solid #000000'
    rounded: 16px
    padding: 7px 13px 8px 30px
    height: 32px
    typography: 13px / 700 / KakaoSmall
    states: default captured 2026-07-11 (home::[data-omd-capture="10"], 142 x 32, tracking -0.5px); on 2026-09-29 hover and pressed matched :hover and :active and left fill, border and label at rest, so no hover or pressed value is declared; keyboard focus draws only the browser default ring (outline auto), so no focus value is declared
    use: 'Corporate-home marketing download pill (a.btn_top.btn_down, 카카오톡 다운로드) beside the dark marketing tag; the only #fae100 element in the capture'
  service-card:
    type: card
    backgroundColor: transparent
    textColor: '#111111'
    padding: 0px 16px 0px 0px
    size: 288px x 299px
    typography: 30px / 700
    hover: icon opacity 1 via title ::after (24 x 24 SVG)
    pressed: icon opacity 1 via title ::after (24 x 24 SVG)
    states: 'rest, hover and pressed measured 2026-09-29 with :hover and :active matched: the title ::after icon goes from opacity 0 to 1 and nothing recolours, moves or casts a shadow; keyboard focus draws only the browser default ring (outline auto), so no focus value is declared; fg and font are the title label (strong.title_service), not the anchor (#333333, 14px / 400 / KakaoBig); not in the 2026-07-11 capture'
    use: Corporate-home service card link (a.item_service) with a 120px service image, title and description
  milestone-service-link:
    type: button
    backgroundColor: transparent
    textColor: '#333333'
    height: 20px
    typography: 14px / 400 / KakaoSmall
    hover: 'fg #111111'
    pressed: 'fg #111111'
    states: 'default, hover and pressed sampled 2026-07-11 on three sibling links (surface-3 captures 21, 22 and 23), each fg #333333 to #111111, the dark-marketing colour; focus not sampled (the 2026-09-29 probe covered the corporate home only)'
    use: Milestones-page service-name text link (a.link_service in li.item_service, 35 in the list); line height 24.92px, tracking -0.2px
  culture-carousel-control:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#333333'
    border: '1px solid #dbdbdb'
    rounded: 50%
    size: 50px x 50px
    typography: 14px / 400 / KakaoSmall
    states: default captured 2026-07-11 (surface-2::[data-omd-capture="11"]); no pointer-state sample
    use: 'Culture-page circular carousel control (button.btn_control); the element behind the #dbdbdb border token'
fonts:
  roles:
    display: KakaoBig
    text: KakaoSmall
    login: System
---

# Design System Inspiration of Kakao (카카오)

## Overview

### Visual Theme & Atmosphere

Kakao is a mobile-life platform whose identity is built around making communication and everyday services feel immediately approachable. Yellow, speech-bubble symbolism, friendly proprietary type, and compact Korean language create recognition before a person reads a product name. That familiarity spans many services, but it is not one transferable UI kit: the corporate site uses KakaoBig and KakaoSmall with black, white, and marketing yellow; Kakao Login is a regulated integration component; and Kakao Developers uses Pretendard only for documentation chrome. Correct reuse begins by naming the surface and relationship being designed.

The clean-slate rule is therefore surface identity first: name whether a value belongs to corporate marketing, the official login integration, or documentation chrome before reusing it.

**Key Characteristics:**
- Corporate fonts: KakaoSmall 133 visible uses; KakaoBig 49
- Developers docs font: Pretendard 1,339 visible uses, documentation chrome only
- Login compliance: `#fee500`, black symbol, black 85% label, 12px radius, OS system font at 30Pt
- Corporate marketing yellow `#fae100` remains distinct from login yellow

### Primary tasks

- Browse the company's milestone history filtered by category
- Read how the company describes itself and its services
- Search the corporate site for a page or service
- Add a compliant Kakao Login button to a third-party service

### Brand Narrative

Kakao describes itself as a mobile-life platform that uses technology, content, and high mobile reach to make everyday services more convenient. Its current mission—bringing a needed future closer through technology that understands people—places human context before technical novelty.

KakaoTalk’s communication model became the organizing metaphor for a broader ecosystem: channels connect people with brands and stores, messages carry transactional information, and services extend into commerce, maps, content, mobility, and social impact. The corporate yellow and speech-bubble identity therefore signal connection, but each service still needs its own product rules.

This is why surface separation is essential. Kakao’s corporate type and marketing yellow express the parent identity; Kakao Login uses a precisely regulated `#fee500` component so third-party integrations remain recognizable and trustworthy; developer documentation uses its own Pretendard chrome. A coherent Kakao reference preserves the relationship between these systems without flattening them into one fictional theme.

### Principles

These are evidence-derived implementation principles:

1. **Compliance outranks approximation.** Login symbols, labels, colors, type, and relative emphasis follow the official integration guide even when another treatment looks more fashionable.
2. **Surface-specific fonts are part of correctness.** KakaoBig/KakaoSmall, OS system labels, and Pretendard documentation chrome describe different jobs, not a fallback chain.
3. **Preserve the dual-yellow distinction.** Corporate marketing `#fae100` and regulated Login `#fee500` remain separately named and sourced.
4. **Connection should stay legible.** Friendly language and familiar symbols can reduce distance, but transactional information, consent, and support states must remain explicit.
5. **Use first-party evidence over remembered KakaoTalk conventions.** Do not fabricate chat bubbles, navigation, or native-service tokens from cultural familiarity with the brand.

### Personas

These are official service and stakeholder contexts, not invented demographic personas.

- **A person communicating in daily life:** expects familiar language, fast recognition, and continuity between conversation and adjacent services.
- **A customer receiving information or benefits from a channel:** needs promotional, transactional, and support messages to remain clearly distinguishable.
- **A business or creator operating a Kakao channel:** needs approachable customer communication without losing operational clarity or consent boundaries.
- **A developer integrating Kakao Login:** needs exact compliance rules for symbol, color, type, label, and relative emphasis so the integration remains trustworthy.

## Colors

### Kakao Login compliance
- **Container** (`#fee500`): mandatory login-button background.
- **Symbol** (`#000000`): mandatory speech-bubble symbol color.
- **Label** (`rgba(0, 0, 0, 0.85)`): mandatory 85% black label.

The official guide explicitly says colors outside this regulation must not be applied and that another third-party login button must not be emphasized by omitting Kakao's button color.

### Corporate marketing
- **Marketing Yellow** (`#fae100`): current corporate-home marketing accent.
- **Dark Marketing** (`#111111`): current paired dark tag/CTA background.
- **Canvas** (`#ffffff`): dominant public-site background.
- **Foreground** (`#333333`): primary corporate text/control color.
- **On Dark** (`#ffffff`): content on black/dark surfaces.
- **Muted** (`#888888`): milestone metadata.
- **Surface** (`#eeeeee`): current filter/footer-pill fill.
- **Border** (`#dbdbdb`): captured culture-page circular-control border.

## Typography

### Verified families
- **KakaoBig**: loaded/high; 49 visible uses; display, navigation, card, and heading roles.
- **KakaoSmall**: loaded/high; 133 visible uses; body, input, button, badge, and heading roles.
- **System**: required by the Kakao Login design guide for the 30Pt label.
- **Pretendard**: 1,339 visible uses on the Kakao Developers documentation website. It is documentation chrome, not the Kakao Login label font.
- **KakaoDigitLatin**: declared but 0 visible uses; not promoted.

| Role | Family | Size | Weight | Line Height | Tracking |
|---|---|---:|---:|---:|---:|
| Corporate Display | KakaoBig | 53.82px | 700 | 66px | -1px |
| Corporate Heading | KakaoBig | 30px | 700 | 40px | normal |
| Corporate Title | KakaoSmall | 28px | 700 | 42px | normal |
| Navigation | KakaoBig | 17px | 400 | 27px | normal |
| Body | KakaoSmall | 14px | 400 | 21px | normal |
| Readable Body | KakaoSmall | 14px | 400 | 24.92px | -0.2px |
| Caption | KakaoSmall | 12px | 400 | 18px | -0.2px |
| Kakao Login Label | OS system | 30Pt | guide does not specify | proportional | unchanged |

| Evidence class | Kakao status |
|---|---|
| **Official product-use** | The Kakao Login guide mandates OS system type for its label; KakaoBig/KakaoSmall are the official corporate families |
| **Live surface-use** | KakaoBig and KakaoSmall are loaded on corporate surfaces; Pretendard is loaded on developer-documentation chrome |
| **Official distributed asset** | No general redistribution right for KakaoBig/KakaoSmall is asserted by the current official sources |
| **Declared-only** | KakaoDigitLatin is declared but had zero visible first-family uses in the inspected surfaces |
| **Unresolved** | A universal KakaoTalk/native-service family mapping beyond the exact official surfaces documented here |

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `typography.login-label.fontSize`: `30Pt`

## Layout

- Corporate content uses a compact 4/6/8/16/20 spacing rhythm around controls and text.
- The Login guide requires the symbol and label zones to remain intact when widening the container; expand left and right equally.
- When scaling the whole Login button, preserve symbol/label proportions and keep the label height at no more than one third of the container height.

### Responsive Behavior

The corporate pages are responsive, but this run does not promote universal breakpoints. For the Login button, follow the official proportional resizing rule: extend both sides equally when widening, preserve symbol/label zones, and use the shortened label if a smaller format is required.

## Elevation & Depth

No canonical shadow token is promoted. Captured corporate controls are largely flat; the Developers documentation site contains its own hover shadows, but those belong to documentation chrome rather than the Kakao Login component.

## Motion & Easing

No exact motion duration or easing token is promoted. Preserve focus and hover clarity on the corporate site and platform-standard interaction feedback for the Login button; label custom timing as an extension until first-party evidence is available.

On 2026-09-29 all six probed corporate-home controls computed `transition: all 0s`: their hover, pressed and focus changes are instant, not animated.

## Components

### Kakao Login Button
- Background: `#fee500`
- Symbol: `#000000`, mandatory Kakao speech bubble; shape, proportion, and color cannot change
- Label: `rgba(0, 0, 0, 0.85)`
- Radius: 12px
- Font: 30Pt OS default system font
- Labels: `카카오 로그인` / `Login with Kakao`, or shortened `로그인` / `Login`
- States: full or shortened label; hover, pressed, and disabled visuals are not specified by this guide
- Use: login integration only; preserve symbol/label area when resizing

### Corporate Navigation Menu
- Background: `#ffffff` in light mode; `#000000` on captured dark subpages
- Text: `#000000` in light mode; `#ffffff` in dark mode
- Radius: 999px
- Padding: 4px 16px 6px
- Height: 37px
- Font: 17px / 400 / KakaoBig
- Hover and pressed: bg `#f3f3f3` (2026-07-11 capture on three corporate pages; 2026-09-29 probe with `:hover` and `:active` matched)
- Focus: keyboard focus fills bg `#f3f3f3` next to the browser's default ring. The fill was still there after focus moved to the next control, which looks like a script-applied "current menu item" state rather than a `:focus` rule; computed styles cannot tell the two apart, so treat it as a lead.
- States: light/dark themes, hover, pressed, focus

### Corporate Search Control
- Background: transparent
- Text/Icon: `#333333`
- Radius: 18px
- Height: 36px
- Font context: 14px / 400 / KakaoSmall
- Hover and pressed: bg `#eeeeee` (the surface grey), on the corporate home on 2026-09-29 and on the search, language and theme buttons in the 2026-07-11 capture
- Focus: the browser's default ring only, which is not a Kakao style, so no focus value is declared
- Use: the language and theme toggles share this 36px circle; the search input opens in a layer behind a click and was not measured

### Dark Marketing Tag
- Background: `#111111`
- Text: `#ffffff`
- Border: 2px solid `#ffffff`
- Radius: 16px
- Padding: 7px 8px 8px
- Height: 32px
- Font: 13px / 700 / KakaoSmall
- Hover and pressed: bg `rgba(17, 17, 17, 0.75)`; border and label stay (2026-07-11 capture, confirmed 2026-09-29)
- Focus: the browser's default ring only

### Marketing Download Pill
- Background: `#fae100` (marketing yellow; the only element in the capture with this fill)
- Text: `#000000`
- Border: 2px solid `#000000`
- Radius: 16px
- Padding: 7px 13px 8px 30px
- Height: 32px
- Font: 13px / 700 / KakaoSmall, tracking -0.5px
- States: on 2026-09-29 hover and pressed (`:hover` and `:active` matched) left the fill, border and label as at rest, so the pill does not respond to the pointer. Keyboard focus shows only the browser's default ring.
- Use: `카카오톡 다운로드` on the corporate home, paired with the dark marketing tag

### Milestone Filter
- Background: `#eeeeee`
- Text: `#000000`
- Radius: 30px
- Padding: 8px 20px 12px
- Height: 44px
- Font: 16px / 700 / KakaoBig
- Pressed: bg `#dfdfdf`, from one 2026-07-11 frame on the category combobox
- States: selected filter captured; hover and focus not sampled

### Footer Related-Site Pill
- Background: `#eeeeee`
- Text: `#000000`
- Radius: 24px
- Padding: 10px 20px 12px
- Height: 40px
- Font: 12px / 400 / KakaoSmall
- States: default captured on 2026-07-11. On 2026-09-29 the pill matched `:hover` and `:active` and kept bg `#eeeeee` and fg `#000000`: it has no pointer response. Keyboard focus shows only the browser's default ring. (Corrected 2026-09-29: earlier text said hover was "not retained", which read as a capture gap.)

### Service Card
- Background: transparent
- Title: `#111111`, 30px / 700 (`strong.title_service`); the card anchor itself is `#333333`, 14px / 400 / KakaoBig
- Size: 288 × 299px with 16px right padding and a 120px service image
- Hover and pressed: a 24 × 24 SVG icon on the title's `::after` goes from opacity 0 to 1; nothing recolours, moves or casts a shadow
- Focus: the browser's default ring only
- Source: the 2026-09-29 probe; the July capture holds no home service card

### Milestone Service Link
- Background: transparent
- Text: `#333333`
- Font: 14px / 400 / KakaoSmall, line height 24.92px, tracking -0.2px
- Height: 20px
- Hover and pressed: fg `#111111`, on three sibling links in the 2026-07-11 capture
- Use: service-name links in the milestones-page list (35 items)

### Culture Carousel Control
- Background: `#ffffff`
- Icon: `#333333`
- Border: 1px solid `#dbdbdb`
- Radius: 50% on a 50 × 50px circle
- States: default only
- Use: circular carousel control on the culture page

### Keyboard focus (2026-09-29)
All six controls probed on the corporate home (navigation pill, search button, download pill, dark tag, service card, footer pill) draw the browser's default focus ring (`outline: auto`, rendered `#005fcc`). That ring is Chrome's, not Kakao's, so no component carries it as a focus value. The navigation pill is the only control that adds an authored change, its `#f3f3f3` fill.

---

**Verified:** 2026-07-11 (verification v2, current corporate surfaces + rendered official Login guide); states re-measured 2026-09-29 by a live probe of the corporate home
**Tier 1 sources:** https://www.kakaocorp.com/page/ https://www.kakaocorp.com/page/about/culture https://www.kakaocorp.com/page/about/milestones https://developers.kakao.com/docs/ko/kakaologin/design-guide
**Tier 2 sources:** https://getdesign.md/kakao and https://styles.refero.design/?q=Kakao did not provide importable current Kakao records in this run.
**Surface split:** corporate marketing uses KakaoBig/KakaoSmall; the Login component requires OS system type; Developers docs chrome uses Pretendard.
**Conflicts unresolved:** none

### States

| Component | Verified state evidence |
|---|---|
| Kakao Login | full/short label and resizing constraints; interaction-state styling not specified |
| Corporate nav | light/dark themes; hover and pressed bg `#f3f3f3`; keyboard focus bg `#f3f3f3` beside the browser ring (the fill persists after blur: a lead) |
| Search control | hover and pressed bg `#eeeeee`; focus is the browser ring |
| Dark marketing tag | hover and pressed bg `rgba(17, 17, 17, 0.75)`; focus is the browser ring |
| Marketing download pill | no pointer response (measured 2026-09-29); focus is the browser ring |
| Service card | hover and pressed reveal the title icon; focus is the browser ring |
| Milestone service link | hover and pressed fg `#111111` |
| Milestone filter | selected; pressed bg `#dfdfdf` (one frame) |
| Footer pill | no pointer response (measured 2026-09-29); focus is the browser ring |
| Culture carousel control | default only |

Keyboard focus was walked with real Tab presses on 2026-09-29. None of the six probed controls has an authored focus ring; the browser default is not a Kakao value and is not tokenized.

## Do's and Don'ts

### Do
- Use the exact Kakao Login compliance colors, symbol, radius, and system font.
- Keep corporate KakaoBig/KakaoSmall values separate from Developers-site Pretendard.
- Name marketing yellow `#fae100` separately from login yellow `#fee500`.
- Use the shortened Login label instead of distorting a standard button below its intended size.
- Preserve observed theme and interaction states on corporate navigation.

### Don't
- Don't change the Kakao Login symbol shape, proportion, or color.
- Don't replace the speech-bubble symbol with Kakao CI or a functional icon.
- Don't remove the symbol from the Login button.
- Don't use Developers-site Pretendard as evidence that the Login button uses Pretendard.
- Don't present unverified KakaoTalk chat bubbles, mobile inputs, tabs, badges, or semantic colors as current canonical Kakao tokens.

## Voice & Tone

Kakao’s corporate mission centers on bringing a needed future closer through technology that understands people. In user-facing copy, that translates into familiar Korean, short labels, and service explanations grounded in an everyday action—talking, finding a place, sending a gift, following a channel—rather than abstract technology claims.

The tone changes by surface. Corporate and culture pages can be optimistic and connective; product/service descriptions should be concrete about the benefit; developer and compliance guidance must be prescriptive and exact. Kakao Login wording, symbol, color, and label rules are not a place for playful rewriting. Avoid turning Kakao’s friendliness into childishness or using yellow as a substitute for clear instructions.

## Agent Prompt Guide

- “Build a compliant Kakao Login button with `#fee500`, black speech-bubble symbol, 85% black label, 12px radius, and OS system font at 30Pt.”
- “Create the current corporate navigation pill with KakaoBig 17px/400, 37px height, 999px radius, and explicit light/dark themes.”
- “Use KakaoSmall for corporate body/control text; do not substitute Pretendard unless reproducing Developers documentation chrome.”
- “Create the corporate download pill: `#fae100` fill, 2px black border, 16px radius, 32px height, KakaoSmall 13px/700. It does not change on hover or press.”
- “Treat any KakaoTalk in-app component as an unverified extension unless native product evidence is supplied.”

## Governance

### Known Gaps

- **Contrast, `search-control`.** Text `#333333` on `#00000000` measures 1.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `service-card`.** Text `#111111` on `#00000000` measures 1.11:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `milestone-service-link`.** Text `#333333` on `#00000000` measures 1.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
