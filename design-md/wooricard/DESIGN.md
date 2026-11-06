---
name: Woori Card
colors:
  primary: '#006cea'
  link-blue: '#2b64ce'
  foreground: '#333333'
  heading: '#222222'
  muted: '#7c7c7c'
  canvas: '#ffffff'
  action-surface: '#000000'
  event-accent: '#61ffec'
  search-surface: '#e5e5e5'
  search-interaction: '#ccd2d5'
  event-lavender: '#dbd1fc'
  divider: '#e0e0e0'
typography:
  navigation:
    fontSize: 18px
    fontWeight: 700
    use: Header card navigation link; live-loaded Nanum Square; line-height 58px.
  action:
    fontSize: 16px
    fontWeight: 400
    use: Event all button label; live-loaded Nanum Square; line-height 36px.
  card-title:
    fontSize: 24px
    fontWeight: 700
    use: Short-term loan card title label observed in the first state capture; live-loaded Nanum Square.
  card-copy:
    fontSize: 18px
    fontWeight: 400
    use: Loan card inherited copy metrics; live-loaded Nanum Square; line-height 25.2px.
rounded:
  square: 0px
  event-action: 19px
  hero-action: 23px
  card-finder: 30px
components:
  event-all:
    type: button
    backgroundColor: '#000000'
    textColor: '#ffffff'
    rounded: 19px
    height: 36px
    padding: 0px 20px
    typography: 16px / 400
    hover: 'bg #006cea'
    pressed: 'bg #006cea'
    focus: 'bg #006cea'
    use: '이벤트 전체보기 — button; visible span is white and its 이벤트 em is #61ffec. The button element''s own black color is not the visible label. Focus records the authored background only.'
  nav-card:
    type: button
    textColor: '#222222'
    rounded: 0px
    height: 58px
    padding: 0px
    typography: 18px / 700
    hover: 'fg #2b64ce'
    pressed: 'fg #2b64ce'
    focus: 'fg #2b64ce'
    use: '카드 — header navigation link on a white #ffffff header; transparent background omitted. Label and link turn blue; focus color returned after blur in the clean second capture.'
  search-toggle:
    type: button
    backgroundColor: '#e5e5e5'
    textColor: '#000000'
    rounded: 0px
    height: 58px
    padding: 0px
    typography: 16px / 400
    hover: 'bg #ccd2d5; descendant span::before transform matrix(1.15, 0, 0, 1.15, 0, 0); span::after width 3px, height 12px'
    pressed: 'bg #ccd2d5; descendant span::before transform matrix(1.15, 0, 0, 1.15, 0, 0); span::after width 3px, height 12px'
    focus: 'bg #ccd2d5; descendant span::before transform matrix(1.15, 0, 0, 1.15, 0, 0); span::after width 3px, height 12px'
    use: 검색 — 64px-wide header icon button, not the hidden search input. The magnifier circle scales from none to 1.15 and its handle grows from 2px by 10px to 3px by 12px. Focus records authored background and icon changes only.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Nanum Square
---

# Design System Inspiration of Woori Card

## Overview

### Visual Theme & Atmosphere

Woori Card combines card discovery, benefits and account services. Its official history dates the present company's launch to 1 April 2013, the first three independent card products to 24 July 2023, and Woori WON Travel to 3 April 2024. The live homepage continues that product expansion with 카드의정석2 cards, travel offers and shortcuts to statements and payment information. [Company history](https://pc.wooricard.com/dcpc/yh1/cid/cid01/comhisrec/H1CID201S01.do)

The official CI explains the circular symbol as a united “we” and its gradient as rising light, associated with challenge and hope. The brand story develops a more tactile expression for card plates: combinations of colour, spatial graphics, light made through lines and planes, and contrasting materials. These are explanations of the identity and physical cards; they do not define web component tokens. [CI](https://pc.wooricard.com/dcpc/yh1/cid/cid04/ciintro/H1CID201S40.do), [brand story](https://pc.wooricard.com/dcpc/yh1/cid/cid04/nubrandstory/H1CID201S51.do)

On the measured website, that expression becomes a white two-tier header, bold Korean navigation, changing pastel campaign backgrounds, a diagonal boundary above illustrated service shortcuts, and compact rounded actions. The measured homepage is the Korean desktop surface at `pc.wooricard.com/dcpc/main.do`, reached from `/`, with HTML `lang="ko"`.

### Brand Narrative

The continuity is between an optimistic circular CI and a card brand exploring colour, space, light and materials. The present website pairs that expressive campaign area with explicit financial-service shortcuts. This is a reading of the official identity writing and the captured homepage. [CI](https://pc.wooricard.com/dcpc/yh1/cid/cid04/ciintro/H1CID201S40.do), [brand story](https://pc.wooricard.com/dcpc/yh1/cid/cid04/nubrandstory/H1CID201S51.do)

### Principles

The official brand story emphasizes customer benefits and experiences across card and lifestyle services. For this measured surface, use clear service labels, local campaign colour and control-specific feedback. The latter are implementation guidance drawn from the capture. [Brand story](https://pc.wooricard.com/dcpc/yh1/cid/cid04/nubrandstory/H1CID201S51.do)

### Personas

No researched personas were verified.

## Colors

The following names describe extracted roles, not published CSS variable names. The accessible census exposed two Swiper custom properties and no first-party custom-property namespace. Swiper's `--swiper-theme-color: #007aff` and `--swiper-navigation-size: 44px` are library values and are excluded from the brand palette.

| Role | Value | Measured use |
|---|---|---|
| Primary interaction | `#006cea` | Event button background on hover, press and keyboard focus; catalog primary colour is this observed UI action blue |
| Link blue | `#2b64ce` | Header card link on interaction; the emphasized word in the card-finder label at rest |
| Foreground | `#333333` | One of the two sampled paragraph inks; loan description and inherited link colour |
| Heading | `#222222` | Header navigation and loan title label |
| Muted | `#7c7c7c` | Other sampled paragraph ink and footer link colour |
| Canvas | `#ffffff` | Header behind the transparent navigation link; card-finder surface; event label |
| Action surface | `#000000` | Event button at rest and search magnifier |
| Event accent | `#61ffec` | The word 이벤트 within the event button |
| Search surface | `#e5e5e5` | Search button at rest |
| Search interaction | `#ccd2d5` | Search button on hover, press and keyboard focus |
| Campaign lavender | `#dbd1fc` | Event area ancestor in the initial state snapshot; campaign backgrounds change |
| Divider | `#e0e0e0` | Seven border entries in the survey census; no universal divider rule inferred |

The two `<p>` ink samples are tied, one each for `#333333` and `#7c7c7c`; the more frequent all-element colour `#222222` is not assigned the body-text role. The hero detail action uses `rgba(0, 0, 0, 0.1)`, retained as an alpha value rather than flattened against an assumed background. No official numeric logo colour was transcribed from the CI page's colour images.

## Typography

| Evidence class | Finding | Reference treatment |
|---|---|---|
| Official product use | No opened narrative document explicitly names a website UI typeface | No typography-policy claim |
| Live-loaded | `Nanum Square 400 normal` and `Nanum Square 700 normal` in `document.fonts` | Nanum Square is the only family in the typography tokens |
| Official distributed assets | The site's `fonts.css` declares first-party Nanum Square regular/bold sources, plus Pretendard, NanumSquareNeo and Poppins sources | Declaration/source evidence; font binaries and redistribution permissions were not inspected |
| Declared-only | Pretendard 100–900; NanumSquareNeo normal; Poppins normal/400, 500, 600 and 300 italic are declared but absent from the loaded list | No specimen and no UI-family token for these faces |
| Unresolved | The Noto Sans KR Google stylesheet was unreadable to the census; no Noto face appears in the loaded list. Rendering of individual glyphs outside the declared Nanum Square ranges was not traced | No specimen or family token |

The computed body, first `h1` and first button family declarations begin with Nanum Square. Its regular and bold source lists in the first-party stylesheet include `fonts/NanumSquareR.woff2` and `fonts/NanumSquareB.woff2`, with WOFF/TTF alternatives, relative to `/dcpc/css/`. These identify how the loaded faces are served; a resource-level font download was not performed. [First-party font stylesheet](https://pc.wooricard.com/dcpc/css/fonts.css?20260820000001)

Measured sizes are 18px/700 for the header card link, 16px/400 for the event label, 14px/400 for the hero detail action and 20px/700 for the card finder. The loan link inherits 18px/400 with 25.2px line-height, while its title child is 24px/700. Header-link line-height is 58px and letter spacing is −0.48px; card-finder line-height is 32px and letter spacing is −0.8px. These are element measurements, not a claimed global type scale.

Substitute: none chosen.

## Layout

At the measured 1440×1000 viewport, the logo begins at x=180px, the search trigger begins at x=1132px, and the adjacent menu button ends at x=1260px. This gives a 1080px header content span. The header is 136px high; its lower navigation controls start at y=78px and occupy 58px.

The initial service shortcuts have widths of 179px, with the last at 180px, across six columns. A left fixed section navigator lists events, cards, finance, benefits and life services. The main content uses fixed containers; the capture reports a 1000px document height while survey rows extend into later sections. Do not infer an ordinary long scrolling document from those row coordinates.

### Responsive Behavior

Only desktop 1440×1000 was measured; no breakpoint, mobile layout or reduced-motion behaviour was verified.

## Elevation & Depth

The event, header card link and search trigger have computed rest `box-shadow: none`. The card finder has `rgba(99, 136, 168, 0.35) 0px 30px 60px 0px`, measured even though its initial crop was outside the viewport. Keep that shadow local to the white card-finder action; no global elevation scale was verified.

## Motion & Easing

The exact computed transitions on the three retained controls were:

```css
/* event-all */
background-color 0.2s ease 0s
/* nav-card */
all 0.2s ease-out 0s
/* search-toggle */
background-color 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s
```

These strings describe the controls themselves. The search icon's observed transform and handle growth are documented in §4; no separate icon duration or global easing scale is inferred.

---

First-party sources: [live Korean desktop homepage](https://pc.wooricard.com/) · [company overview](https://pc.wooricard.com/dcpc/yh1/cid/cid07/H1CID207S00.do) · [company history](https://pc.wooricard.com/dcpc/yh1/cid/cid01/comhisrec/H1CID201S01.do) · [CI](https://pc.wooricard.com/dcpc/yh1/cid/cid04/ciintro/H1CID201S40.do) · [brand story](https://pc.wooricard.com/dcpc/yh1/cid/cid04/nubrandstory/H1CID201S51.do) · [privacy page and legal footer](https://pc.wooricard.com/dcpc/yh1/cct/cct12/psninfprotplcy/H1CCT212S08.do) · [font stylesheet](https://pc.wooricard.com/dcpc/css/fonts.css?20260820000001). Measured 2026-11-06; evidence paths and raw values are in `verification.md` and `report.md`.

## Components

Three controls have a clean second capture after closing the promotion with “팝업 닫기”. Each was reached by a real Tab walk, and its pointer snapshots matched `:hover` and `:active`.

| Control | Geometry and rest | Authored interaction |
|---|---|---|
| Event all, `#eventAll` | 164.4×36px; 19px radius; padding 0px 20px; Nanum Square 16px/400, 36px line-height; black background, white visible label with mint 이벤트 | Background becomes `#006cea` on hover, press and keyboard focus |
| Card navigation link | 31.8×58px; square; no padding; Nanum Square 18px/700; transparent on white; `#222222` label | Link and label become `#2b64ce` in all three measured states |
| Search trigger, `button.gnb_search` | 64×58px; square; no padding; black icon on `#e5e5e5`; hidden label 16px/400 | Background becomes `#ccd2d5`; the descendant magnifier circle scales to 1.15 and the handle changes from 2×10px to 3×12px in all three measured states |

The search trigger is a button. The input exists in a closed search layer and has no measured input states.

Additional geometry from the first capture is useful for reproduction: the hero's “자세히보기” link is 133.3×46px, radius 23px, padding 12px 27px 0px, with `#222222` text on 10% black. The “나에게 꼭 맞는 카드 찾기” link is 285×60px, radius 30px, padding 12px 19px 0px, white with `#222222` text. The short-term loan card link is 214×434.2px, radius 0px and padding 0px; its description is `#333333` and title is `#222222`. Their limitations and raw focus observations are retained in §14; they are omitted from structured components.

### States

For the three structured components, hover and pressed have the same authored changes within the probe's comparison scope: event background blue, navigation label blue, search background plus magnifier geometry. The scope includes the control and its pseudo-elements, 1–2 descendants and their pseudo-elements, and three ancestor levels; no image or SVG descendants occur in these three controls. Full property coverage is recorded in the verification notes.

Keyboard focus repeats those authored changes and adds a browser `auto` outline. No automatic outline is exported as a brand focus token; the focus tokens contain only the independently measured background, label or icon changes. All three focus snapshots matched `:focus-visible`. In the clean second capture, navigation colour returned after blur. The event area's lavender-to-green ancestor change persisted after blur and is excluded from focus styling.

The first capture left the promotion open. Its hero detail link later vanished from the DOM: hover, pressed and focus are UNMEASURED. Pointer states for the card finder and loan card are also UNMEASURED because no point remained inside the viewport. Raw keyboard observations in that capture were a blue-to-black plus-disc background for the card finder and a loan background image transform to `matrix(1.2, 0, 0, 1.2, 0, 0)`. Other ancestor/text transforms persisted after blur. These two focus observations were behind the promotion and were not repeated after closing it, so they remain prose observations and do not create component tokens. No disabled, validation, checked or loading state was measured.

## Do's and Don'ts

- Use the two measured interaction blues for their observed roles: event background and navigation text.
- Preserve the event button's white label and mint emphasis rather than copying the black inherited colour of the button element.
- Build the search icon's interaction on its descendant pseudo-elements as well as its background.
- Keep campaign colours local to the campaign; their ancestor background changed during the capture.
- Do not export Swiper defaults, unloaded font declarations or the browser's automatic outline as Woori tokens.

## Voice & Tone

The observed interface uses direct task labels: “검색”, “이벤트 전체보기” and “나에게 꼭 맞는 카드 찾기”. The official brand story frames benefits and customer experience as the starting point. [Brand story](https://pc.wooricard.com/dcpc/yh1/cid/cid04/nubrandstory/H1CID201S51.do)

## Agent Prompt Guide

“Build a Woori Card desktop header with a white surface, Nanum Square 18px/700 navigation and 58px navigation height. Make the card link turn `#2b64ce` on hover, press and keyboard focus. Add a square 64×58px search trigger whose `#e5e5e5` background becomes `#ccd2d5`; scale its magnifier circle to 1.15 and grow its handle from 2×10px to 3×12px.”

“Add a 36px-high event button with 19px radius, 20px horizontal padding, black rest background, white 16px/400 label and mint 이벤트 emphasis. Its background becomes `#006cea` on hover, press and keyboard focus.”
