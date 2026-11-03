---
name: TellingMe
colors:
  primary: '#07beb8'
  canvas: '#fffdfa'
  foreground: '#807f7d'
  muted: '#807f7d'
  heading: '#404642'
  heading-soft: '#666f6a'
  mint: '#f2fdf6'
  cream: '#f9f7f2'
  surface: '#e6e4e2'
typography:
  hero:
    fontSize: 48px
    fontWeight: 700
    use: Desktop emphasized feature headline; current first-party QR h1_b declaration and homepage binding
  headline:
    fontSize: 48px
    fontWeight: 400
    use: Desktop regular feature headline; current first-party QR h1 declaration and homepage binding
  subhead:
    fontSize: 32px
    fontWeight: 400
    use: Desktop supporting headline; current first-party QR h2 declaration and homepage binding
  button:
    fontSize: 17px
    fontWeight: 400
    use: Measured visible CTA span; NanumSquareRound loaded
  navigation:
    fontSize: 12px
    fontWeight: 700
    use: Measured visible footer navigation span; NanumSquareRound loaded
rounded:
  md: 20px
spacing:
  xs: 4
  sm: 8
  base: 16
  btn-y: 18
  lg: 24
  xl: 32
  btn-x: 36
components:
  button-start:
    type: button
    backgroundColor: '#f2fdf6'
    textColor: '#07beb8'
    rounded: 20px
    padding: 18px 36px
    height: 53px
    typography: 17px / 400 NanumSquareRound
    hover: 'box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 20px 0px'
    use: 시작하기 — header button; visible child label is teal. Rest shadow none. Hover adds the measured shadow; pressed unmeasured and focus browser-only.
  button-download:
    type: button
    backgroundColor: '#f2fdf6'
    textColor: '#07beb8'
    rounded: 20px
    padding: 18px 32px
    height: 53px
    typography: 17px / 400 NanumSquareRound
    hover: 'box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 20px 0px'
    pressed: 'background: #a3f4c1; box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 20px 0px'
    use: '앱 다운로드 — closing button; visible child label is teal. Rest shadow none. Hover adds the measured shadow; pressed changes the fill to #a3f4c1 and retains that shadow. Persistent ancestor reveal changes are excluded from focus tokens.'
  button-subscribe:
    type: button
    backgroundColor: '#f9f7f2'
    textColor: '#07beb8'
    rounded: 20px
    padding: 18px 32px
    height: 53px
    typography: 17px / 400 NanumSquareRound
    hover: 'box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 20px 0px'
    pressed: 'background: #e6e4e2; box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 20px 0px'
    use: '텔링미 소식 구독 — filled closing button leading to the newsletter route; distinct from the 12px-high footer button. Rest shadow none. Pressed changes the fill to #e6e4e2 and retains the hover shadow; no authored focus token.'
fonts:
  roles:
    display: NanumSquareRound
---

# Design System Inspiration of TellingMe

## Overview

### Visual Theme & Atmosphere

TellingMe (텔링미) is a question-led journaling diary made by the 텔링어스 team. Its [homepage](https://tellingme.co.kr/) presents a daily question delivered at 6 a.m., six bird emotion stickers called 듀이티콘, and an accumulating collection of personal answers. The team's [May 2023 planning account](https://medium.com/@tellingme/서비스기획-서비스기획의-첫-단추-텔링미-서비스의-기능-정의까지-f9d112905c85) describes an initial project for iOS and the web, focused on helping people in their twenties, especially university students, make time for self-exploration.

The homepage has the warm ground and rounded lettering of a notebook: off-white `#fffdfa`, NanumSquareRound, teal `#07beb8` headings and pale mint or cream actions. The opening viewport centres a handwritten-style wordmark inside concentric rings, with mint-to-blue decorative shapes. Its softness comes from rounded forms, light fills and open space. Teal also colours the visible CTA labels; the palette is broader than a single saturated headline colour. The closing stanza uses sage `#666f6a`. These are observations of the Korean-language homepage at `/`, whose final URL remained `https://tellingme.co.kr/` and whose HTML language was `ko`.

The brand's own design writing gives this softness a useful context. In [January 2024, designer Brynlee](https://medium.com/@tellingme/ux-voc는-어떻게-반영해야-할까-32f058ce30fa) described weak text visibility and unclear separation between pale buttons and backgrounds, and a redesign around the main colour `#07beb8` to improve intuitiveness. The same article discusses a revised answer-writing flow and tests of points and levels for personal motivation, while rejecting competition between users. Those are dated descriptions of work in progress; the captured homepage still uses pale CTA fills. They establish an evolution toward clearer interaction without proving that the proposed app redesign has shipped.

#### Primary tasks

- Answer the delivered daily question.
- Associate an answer with one of six bird emotion stickers.
- Revisit the accumulating record of personal thoughts.
- Start the service, find the app download action, or visit the newsletter route.

### Brand Narrative

The team's [official publication](https://medium.com/@tellingme) identifies itself as the team making TellingMe. Its [2023 planning account](https://medium.com/@tellingme/서비스기획-서비스기획의-첫-단추-텔링미-서비스의-기능-정의까지-f9d112905c85) starts from a lack of time for self-exploration among people in their twenties and university students, and describes the intended iOS and web product. The live homepage turns that premise into three concrete ideas: a daily delivered question, an emotion sticker for an answer and a growing record of thoughts.

The [January 2024 UX account](https://medium.com/@tellingme/ux-voc는-어떻게-반영해야-할까-32f058ce30fa) adds a more practical strand: testing a simpler answer-writing flow, making controls easier to see, and considering levels and points as motivation for personal growth. It records a decision to exclude reward competition between users. These details support a reference concerned with approachable reflection and understandable interaction. They do not establish clinical benefits or the efficacy of a sustained journaling habit.

The measured web expression pairs a warm notebook-like ground with rounded text, pale surfaces, a teal wordmark and labels, bird illustrations and subtle depth. This visual description is an editorial reading of the homepage, rather than a claim about an official brand manifesto.

### Principles

The following directions connect verified product statements to verified visual observations.

1. **Begin with a question.** The live product description makes the delivered prompt central; a reference screen can give that prompt a clear place in the hierarchy.
2. **Make actions legible.** The team's UX writing explicitly discusses button/background ambiguity and text visibility. Preserve the recorded live colours as evidence while keeping that stated design objective visible.
3. **Use gentle forms with real feedback.** Rounded, pale CTA surfaces have a measured hover shadow. Softness does not imply absent interaction feedback.
4. **Keep motivation personal.** The dated UX account considers points and levels while excluding competition between users; do not turn its position into a blanket rejection of achievement features.
5. **Name emotions through the product's birds.** The homepage explicitly presents six bird emotion stickers. Other emotion-selection mechanisms were not measured.

### Personas

The team's May 2023 planning article documents an initial focus on people in their twenties, especially university students, who lack time for self-exploration. No named persona, age/location biography, commuting routine or anxiety profile was verified. [Planning account](https://medium.com/@tellingme/서비스기획-서비스기획의-첫-단추-텔링미-서비스의-기능-정의까지-f9d112905c85).

## Colors

The rendered census and the six measured controls establish the following homepage palette. Names retain the legacy reference's descriptive roles; they are not advertised CSS custom-property names.

| Role | Value | Evidence and use |
|---|---|---|
| Primary / Telling Teal | `#07beb8` | Rendered text census, thirteen elements; all three CTA child labels; the current bundle names it `colors.logo`. |
| Canvas / Warm Off-White | `#fffdfa` | One opaque background in the census; explicitly set on `body` in the current stylesheet. |
| Foreground / Muted Grey | `#807f7d` | All 247 `<p>` ink samples in this census; visible footer navigation labels and footer copy. `foreground` and legacy `muted` refer to this same observed colour. |
| Sage Heading | `#404642` | Six text census elements; the homepage source binds supporting headings to `gray8`. |
| Soft Sage | `#666f6a` | Three text census elements; the closing stanza binds to `gray6`. |
| Mint | `#f2fdf6` | Two opaque backgrounds; Start and App Download buttons. |
| Cream | `#f9f7f2` | Six opaque backgrounds; the filled Subscribe button, footer and source-declared clock tiles. |
| Warm Grey Surface | `#e6e4e2` | Two opaque backgrounds; the source binds it to the circular footer social controls, rather than a measured rectangular panel. |

The buttons themselves inherit `color: #000000`, but their visible spans override that value. Use teal for the three CTA labels and muted grey for the measured footer labels. The black inherited value is not evidence for black visible CTA lettering or a black paragraph role. The census returned no rendered border colours. [Current stylesheet](https://tellingme.co.kr/static/css/main.a2407ab4.css), [current homepage bundle](https://tellingme.co.kr/static/js/main.86aca4b0.js).

## Typography

### Font evidence classes

- **Official product-use statement:** no separate brand typography specification was located. The homepage's own stylesheet explicitly assigns `NanumSquareRound` and declares a generic `sans-serif` fallback; this is first-party implementation evidence for this web surface.
- **Live-loaded:** `NanumSquareRound 400 normal` and `NanumSquareRound 700 normal` were present in the census's loaded faces. These are the two faces eligible for live specimens from this capture.
- **Serving path:** the homepage imports `https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css`. A direct read redirected to jsDelivr's `innks/NanumSquareRound@master` stylesheet. That stylesheet offers local names and EOT, WOFF2, WOFF and TTF sources, including `NanumSquareRoundR` and `NanumSquareRoundB`. The census does not identify which local or network font resource satisfied each loaded face.
- **Official distributed assets:** no TellingMe-distributed font package or font licence was verified. The imported community mirror is not presented as such a package.
- **Declared-only:** NanumSquareRound 300 and 800 appear in the imported stylesheet but were not in the loaded list. The first-party stylesheet also declares the `slick` icon font at 400; it was not loaded and belongs to the carousel package. Neither receives a specimen.
- **Unresolved:** native-app typography, a separately documented product-wide font policy, font licensing and the old 16px paragraph role. **Substitute: none chosen.**

### Hierarchy

The visible labels below were measured on the live controls. The larger heading values are confirmed by the current first-party bundle's `QR` scale and its homepage bindings; they are source declarations, not additional computed heading samples.

| Role | Family | Size / weight | Colour and basis |
|---|---|---|---|
| Desktop emphasized feature headline | NanumSquareRound | 48px / 700 | Teal; `h1_b` declaration and homepage binding. |
| Desktop regular feature headline | NanumSquareRound | 48px / 400 | Teal; `h1` declaration and homepage binding. |
| Desktop supporting headline | NanumSquareRound | 32px / 400 | Sage; `h2` declaration and homepage binding. |
| Closing headline | NanumSquareRound | 48px / 400 and 700 | Soft sage; source binding, with the final phrase bold. |
| Visible CTA label | NanumSquareRound | 17px / 400 | Teal; measured child span on Start, Download and Subscribe. |
| Visible footer navigation label | NanumSquareRound | 12px / 700 | Muted grey; measured child span. |

The CTA wrapper's `13.3333px/400` and black colour do not describe its visible label. Measured wrappers have normal letter spacing. The global stylesheet declares `body { line-height: 1 }`, while the source heading roles also declare a line-height of 1. A uniform 16px reading-text role was not established. [Homepage CSS](https://tellingme.co.kr/static/css/main.a2407ab4.css), [homepage source](https://tellingme.co.kr/static/js/main.86aca4b0.js).

## Layout

The opening viewport gives the wordmark and concentric-ring illustration most of the space, with a small logo at the upper left and Start at the upper right. The subsequent source-defined sections introduce the daily question, emotion tagging and accumulated answers, followed by a centred closing invitation and two actions. The captured closing viewport shows several illustrated answer cards above that invitation; the page is not a uniform single-column card stack.

Spacing is recorded as individual observations, not a verified universal 4px grid. CTA padding is measured at 18px vertically and 32px or 36px horizontally. The current homepage source uses 4px between footer information lines, 8px within footer information groups, 16px between social controls, 24px between footer row contents and 32px between a feature headline group and its supporting group. Those values preserve the useful part of the prior scale without asserting an unverified 48px spacing token.

The header source declares a 1200px maximum inner width on desktop. The footer declares 146px height and 25px 60px padding on desktop. These are current source declarations; only the 1440 × 1000 desktop viewport was captured. [Homepage source](https://tellingme.co.kr/static/js/main.86aca4b0.js).

### Responsive Behavior

Desktop was captured at 1440 × 1000. The following ranges and type changes come from the current homepage source, rather than additional viewport measurements.

| Source branch | Width | Main feature heading | Supporting heading |
|---|---|---|---|
| Mobile | ≤767px | 24px, regular/bold | 17px, regular |
| Tablet vertical | 768–1023px | 32px, regular/bold | 26px, regular |
| Tablet horizontal | 1024–1199px | 32px, regular/bold | 26px, regular |
| Desktop | ≥1200px | 48px, regular/bold | 32px, regular |

The source changes feature headline groups from rows to columns on mobile and declares a 247px-high footer with 25px padding there. The closing headline uses 17px on mobile. Clock tiles retain a 20px radius while their width and height change. The desktop CTA hit area is 53px high; mobile CTA widths, mobile interaction states and image behaviour across all sizes were not measured. [Current source](https://tellingme.co.kr/static/js/main.86aca4b0.js).

## Elevation & Depth

At rest, the three measured CTA buttons have no shadow. On hover, each gains the same 8%-black shadow, `rgba(0, 0, 0, 0.08) 0px 4px 20px 0px`. Their fill, label colour, geometry and transform remain unchanged within the compared scope.

Warm cream and grey fills provide grouping, but depth also appears in the live artwork. The captured opening and closing illustrations have soft shadows, and the first-party source declares SVG drop-shadow treatments for illustration wrappers. Use the quiet resting surfaces and the measured hover elevation together; a fully shadowless system is contradicted by this capture. [Homepage source](https://tellingme.co.kr/static/js/main.86aca4b0.js).

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`
- `shadow.cta-hover`: `rgba(0, 0, 0, 0.08) 0px 4px 20px 0px`

## Motion & Easing

All six measured controls report the raw computed transition `all 0s ease 0s`; the three action controls report the same string in the pressed follow-up. This does not establish a site-wide duration or easing scale. During keyboard traversal the closing-section ancestors changed from opacity 0 to 1 and from a 10px vertical translation to none, and stayed there after blur; those observations belong to a reveal, not a focus animation. App Download and Subscribe pressed snapshots change the fill and retain the hover shadow, with computed transform `none` and opacity `1`; no scale or opacity change appears in the compared snapshots. Start's pressed state and reduced-motion behaviour remain unmeasured.

## Components

### Filled actions

All three are actual `<button>` elements, with a border of `none`, a 20px radius, a resting shadow of `none`, and visible 17px/400 NanumSquareRound spans in teal. Their own computed foreground is black; the child foreground is the visible colour.

| Control | Position and identity | Fill | Padding | Size |
|---|---|---|---|---|
| Start — 시작하기 | Header; `button.gWDkey` | Mint | 18px 36px | 133.9 × 53px |
| App Download — 앱 다운로드 | Closing section; `button.gRCfcu` | Mint | 18px 32px | 145.6 × 53px |
| Subscribe — 텔링미 소식 구독 | Closing section; `button.dtXtOB`, not the footer instance | Cream | 18px 32px | 180.8 × 53px |

Hover adds `box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 20px 0px` to each button. No other compared property changed on hover. The follow-up measured App Download pressed from `rgb(242, 253, 246)` (`#f2fdf6`) to `rgb(163, 244, 193)` (`#a3f4c1`), and Subscribe from `rgb(249, 247, 242)` (`#f9f7f2`) to `rgb(230, 228, 226)` (`#e6e4e2`). Both retain the hover shadow; visible label colour, geometry, transform and opacity remain unchanged within the compared scope. Start pressed remains **UNMEASURED** because `:active` did not match during mouse-down. Keyboard focus draws the browser's `auto` outline, which is not a brand focus token.

### Footer navigation

Service Introduction, Newsletter and Terms are navigation buttons with transparent backgrounds over the cream footer, zero padding and a computed 20px radius. Their own style is black 13.3333px/400; the visible spans are muted grey, 12px/700. Heights are 12px; widths are 57.6px, 82.4px and 43.7px respectively. Hover produced no change in the compared DOM/style scope. Focus produced only the browser ring; pressed was unmeasured. These remain prose observations and are excluded from the machine component inventory because no authored state was established.

### Containers and circular controls

The current homepage source declares cream clock tiles at 79 × 92px with a 20px radius, reducing to 64 × 64px in its mobile branch. It declares the footer social controls at 32 × 32px with a `100%` radius and warm-grey fill. Their interactive states were not measured. These observations do not establish the legacy reference's generic cream content card or rectangular warm-grey panel. [First-party source](https://tellingme.co.kr/static/js/main.86aca4b0.js).

### States

`S` below is the measured shadow `rgba(0, 0, 0, 0.08) 0px 4px 20px 0px`. The focus outline is `rgb(0, 95, 204) auto 1px off 0px`, a browser default rather than a brand token.

| Key | Rest | Hover | Pressed | Keyboard focus |
|---|---|---|---|---|
| `start` | Mint, teal label, shadow none | Shadow becomes S | UNMEASURED; `:active` false | Browser `auto` outline only on the control |
| `download` | Mint, teal label, shadow none | Shadow becomes S | Fill `#f2fdf6` → `#a3f4c1`; shadow S; `:active` true | Browser outline; ancestor reveal persists after blur and is excluded |
| `subscribe` | Cream, teal label, shadow none | Shadow becomes S | Fill `#f9f7f2` → `#e6e4e2`; shadow S; `:active` true | Browser outline; ancestor reveal persists after blur and is excluded |
| `nav-service` | Transparent over cream, muted label | No change in compared scope | UNMEASURED; `:active` false | Browser outline only |
| `nav-newsletter` | Transparent over cream, muted label | No change in compared scope | UNMEASURED; `:active` false | Browser outline only |
| `nav-terms` | Transparent over cream, muted label | No change in compared scope | UNMEASURED; `:active` false | Browser outline only |

Every measured hover matched `:hover`. The comparison covers the control and its pseudo-elements, its one nonempty label descendant and pseudo-elements, and three ancestor levels and their pseudo-elements. It includes colour, background, border, drawn outline, shadow, opacity, transform, filter, visibility, size, decoration, full background/mask properties and image/SVG attributes. It does not establish pixel-only changes, sibling changes, canvas/video behaviour, closed shadow roots or cross-origin iframe internals. No input or card link appeared in the homepage survey. Empty, loading, validation, save-error, success, skeleton and disabled product states were not verified.

## Do's and Don'ts

These are implementation directions derived from the captured homepage, not an official brand manual.

- Use the loaded NanumSquareRound 400 and 700 faces and preserve the regular/bold contrast inside heading stanzas.
- Use the off-white canvas, teal feature headings and CTA labels, sage supporting text and pale action fills.
- Preserve the 20px action radius, measured padding and quiet resting appearance; add the measured shadow on hover.
- Keep the closing invitation centred and place the two filled actions together, as shown in the desktop capture.
- Use the visible span's colour and type metrics when recreating an action.
- Keep circular footer controls distinct from rectangular content panels.
- Do not turn an unchanged hover or a browser `auto` ring into an authored state token.
- Do not extend homepage observations into medical positioning, native-app styling or a ban on rewards; the opened first-party material does not establish those rules.

## Voice & Tone

The homepage uses short, encouraging Korean phrases about time for oneself, a daily question and an accumulating record. Its invitation to answer a question is specific and easy to understand. The bird emotion names bring a playful register to the explanation. This is a reading of the displayed copy, not evidence of a product-wide prohibited-word list.

| Context | Homepage wording |
|---|---|
| Daily ritual | “하루 한 번, 질문에 답변하며 나를 깨닫는 시간” |
| Delivered prompt | “오직 나를 위한 질문이 매일 오전 6시에 배달돼요!” |
| Emotion tagging | “총 6가지 뱁새 감정티콘으로 글의 감정을 정리해보세요” |
| Accumulation | “꾸준한 기록은 나에 대해 더 많은 걸 알게 해줘요!” |
| Actions | “시작하기”, “앱 다운로드”, “텔링미 소식 구독” |

The wording above retains the legacy copy and was rechecked in the current homepage source, with adjacent visual lines joined for reading. [Homepage](https://tellingme.co.kr/), [delivered source](https://tellingme.co.kr/static/js/main.86aca4b0.js).

## Agent Prompt Guide

### Quick colour reference

Teal `#07beb8`; off-white `#fffdfa`; paragraph/footer foreground `#807f7d`; supporting sage `#404642`; closing sage `#666f6a`; mint `#f2fdf6`; cream `#f9f7f2`; circular footer surface `#e6e4e2`.

### Example component prompts

- “Build the desktop Start button with a mint fill, teal 17px/400 NanumSquareRound label, 20px radius and 18px 36px padding. Match the observed 53px height. Rest shadow is none; hover adds `rgba(0, 0, 0, 0.08) 0px 4px 20px 0px`.”
- “Build the closing Subscribe action with cream fill, teal label, 20px radius and 18px 32px padding. Use the filled 53px-high instance, distinct from the small footer navigation button.”
- “Recreate the source-declared clock tile: cream, 79 × 92px and 20px radius on desktop, with muted-grey digits. Keep it distinct from a generic article card.”
- “Set a desktop feature stanza in the source's 48px regular and bold heading roles, with a 32px sage supporting group; preserve NanumSquareRound and the warm canvas.”

### Iteration guide

Check the visible label first, then geometry, pale fill, hover shadow and the relationship to its surrounding stanza. Reuse verified observations at their stated surface and viewport; an unmeasured state remains unresolved.

## Governance

### Known Gaps

- **Contrast, `button-start`.** Text `#07beb8` on `#f2fdf6` measures 2.22:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `button-download`.** Text `#07beb8` on `#f2fdf6` measures 2.22:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `button-subscribe`.** Text `#07beb8` on `#f9f7f2` measures 2.16:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
