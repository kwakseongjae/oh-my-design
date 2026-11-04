---
name: Zigbang
colors:
  primary: '#ff681b'
  canvas: '#ffffff'
  heading: '#1a1a1a'
  foreground: '#8e8e8e'
  content: '#000000'
  muted: '#808080'
  footer-secondary: '#4c4c4c'
  card: '#f3ede9'
  border: '#e6e6e6'
  new-badge: '#ff6905'
  advertising: '#092c59'
typography:
  category:
    fontSize: 22px
    fontWeight: 700
    use: Homepage property category entry; SpoqaHanSans, line-height 28px
  header-action:
    fontSize: 12px
    fontWeight: 400
    use: Hero header outlined actions; SpoqaHanSans, line-height 12px
  card-container:
    fontSize: 16px
    fontWeight: 400
    use: News card container; distinct from its bold title
  card-title:
    fontSize: 16px
    fontWeight: 700
    use: Visible title span inside the first news card
  more-label:
    fontSize: 18px
    fontWeight: 400
    use: First visible line 더 많은 inside the more-trends card
  footer-link:
    fontSize: 12px
    fontWeight: 400
    use: Company footer link; SpoqaHanSans, line-height 15.6px
rounded:
  none: 0px
  header: 6px
  card: 12px
  advertising: 40px
spacing:
  header-y: 4
  header-x: 12
  card-inset: 20
  card-gap: 20
components:
  category-apt:
    type: button
    textColor: '#1a1a1a'
    rounded: 0px
    height: 120px
    padding: 0px
    typography: 22px / 700
    hover: 'fg #ff681b'
    pressed: 'fg #ff681b'
    use: 아파트 property category action, implemented as a focusable div on the white category panel. Transparent background; includes a 40px image. Keyboard focus uses the browser auto ring.
  news-card:
    type: card
    backgroundColor: '#f3ede9'
    textColor: '#000000'
    rounded: 12px
    height: 136px
    padding: 20px
    typography: 16px / 400
    pressed: outline none
    use: 'First property news card action, implemented as a focusable div. Width 255px; visible title is 16px / 700. A 1px solid #e6e6e6 outline exists at rest, hover and keyboard focus and disappears while pressed.'
  footer-company:
    type: button
    textColor: '#000000'
    rounded: 0px
    height: 15.6px
    padding: 0px
    typography: 12px / 400
    hover: 'underline solid #000000'
    pressed: 'underline solid #000000'
    use: 회사소개 footer link on white, href //company.zigbang.com. Transparent background. Keyboard focus uses the browser auto ring.
fonts:
  roles:
    sans: SpoqaHanSans
    secondary: Pretendard
---

# Design System Inspiration of Zigbang (직방)

## Overview

### Visual Theme & Atmosphere

Zigbang combines home search with a broader residential technology business. Its [company overview](https://company.zigbang.com/) describes real estate services, smart home devices and virtual workspace Soma. The [service page](https://company.zigbang.com/what-we-do/real-estate-service) presents map filters, actual property photographs, 3D complex tours and VR interiors: useful context for an interface built around choosing a property type and examining a place.

The November 2022 [Beyond Home announcement](https://company.zigbang.com/newsroom/view?idx=269) explains the identity: a house and an ellipse express expansion of the residential experience. It retains orange in a deeper tone and replaces the Korean wordmark with English “zigbang.” The [company history](https://company.zigbang.com/who-we-are) records subsequent expansion, including AI home devices in 2025 and housing diagnosis reports in 2026. This is a brand extending from finding a home into living in it.

The measured Korean homepage (`www.zigbang.com/`, HTML `lang="ko"`) uses a dark architectural photograph, white header actions, an orange wordmark, a white property category panel and pale warm news cards. Six large category entries make the product choice prominent. Orange participates in the interface: the **아파트** label changes from `#1a1a1a` to **`#ff681b`** on hover and while pressed.

The apartment map at `/home/apt/map` uses the same loaded font families but a different composition: a full-width map below navigation, white floating search/filter controls, price markers and an orange nearby-listings action. Keep the landing page and map treatments distinct when building from this reference.

Primary tasks supported by the opened sources and captures are selecting a property type, filtering by place and deposit, examining actual photos and virtual views, comparing mapped apartment information, and listing a home through brokers.

### Brand Narrative

The [official history](https://company.zigbang.com/who-we-are) dates 채널브리즈's establishment to November 2010, the Zigbang app to January 2012, the web service to March 2012 and the company rename to October 2015. It records the Samsung SDS Home IoT acquisition in July 2022 and the new CI in November 2022. The [English announcement](https://company.zigbang.com/en/newsroom/view?idx=314) frames the next step as “Our next chapter goes beyond listings—we’re building the Home OS”.

The [company's product account](https://company.zigbang.com/what-we-do/real-estate-service) emphasizes actual property photos alongside 3D views, virtual tours and broker information. The logo's expansion motif expresses that wider scope. The live orange interactions are a product observation; the rebrand source is not evidence of a dated product color migration.

### Principles

The company explicitly names **Reliability, Innovation, Efficiency and Possibility** on its [about page](https://company.zigbang.com/who-we-are), connecting them to trust and respect, accessible technology, convenient use across place and time, and an integrated residential environment.

For this measured implementation, practical reference rules are large property choices, explicit labels, restrained card surfaces and contextual orange interaction feedback. These are readings of the captured UI, not additional official brand principles.

### Personas

No validated personas or first-party user research were verified.

## Colors

These role labels describe measured homepage values; they are not names from a published brand palette. The only exposed custom property is `--web-min-width: 1440px`.

| Role | Value | Measured use |
|---|---|---|
| Primary interaction | `#ff681b` | Apartment category label on hover and press |
| Canvas | `#ffffff` | Page and category panel; hero action lettering and border |
| Heading / category ink | `#1a1a1a` | Resting property category labels |
| Foreground | `#8e8e8e` | The census's sole measured paragraph; not a claim about every label |
| Content | `#000000` | News title and company footer link |
| Muted | `#808080` | News metadata and notice “더보기” |
| Footer secondary | `#4c4c4c` | Contact links |
| Card | `#f3ede9` | Three property news cards |
| Border | `#e6e6e6` | More-trends card border; news card outline at rest |
| New badge | `#ff6905` | Circle fill of the first news card's N badge |
| Advertising | `#092c59` | Floating general advertising inquiry action |

The homepage also contains a `#f8f8f8` background in the census. Its role was not resolved, so it is not assigned a palette token.

Map-only observations: the nearby-listings action has background **`#ff6905`**; the AI broker button has computed ink **`#4042ff`**. The price-marker census includes **`#1e3a8a`**. These do not establish a universal semantic palette. Raster map tiles are outside the brand palette. The rebrand announcement gives an orange color direction without a numeric specification; no estimated logo hex is supplied here.

## Typography

The evidence classes are separate:

- **Official product use:** no opened brand guideline specifies a universal product face. The official careers page names **Zuix (Zigbang UI/UX) Design System**, without specifying its typeface.
- **Live-loaded:** the homepage's `document.fonts` reports **SpoqaHanSans 400 and 700**, plus **Pretendard 400, 500 and 700**, all normal. Body and the measured control containers declare `SpoqaHanSans`. The map reports SpoqaHanSans 400/700 and Pretendard 500/700. A loaded family is not automatically the family of every control.
- **Official distributed assets:** the [Spoqa stylesheet](https://s.zigbang.com/zbee/spoqa/css/SpoqaHanSansApp-kr.css) defines static weights 100, 300, 400 and 700, with local sources followed by WOFF2, WOFF and TTF URLs. The [ZUIX Pretendard stylesheet](https://zuix2.zigbang.io/font/pretendard-subset.css) defines static 400, 500 and 700 with local sources followed by subset WOFF2 and WOFF URLs. Its header identifies SIL Open Font License 1.1. These are served font definitions; actual local-versus-network source selection was not recorded.
- **Declared-only:** SpoqaHanSans 100 and 300 occur in the opened CSS but were not loaded in either census. They receive no live specimen.
- **Unresolved:** the previous names `Pretendard Variable` and `Pretendard JP Variable`, their fallback chain and a variable-axis claim were not confirmed. No font binaries or additional license documents were opened. Substitute: none chosen.

| Homepage role | Measured size / weight | Line height | Detail |
|---|---|---|---|
| Category action | 22px / 700 | 28px | SpoqaHanSans, label and container agree |
| Hero header action | 12px / 400 | 12px | SpoqaHanSans |
| News card container | 16px / 400 | 16px | Its visible title is separately 16px / 700 |
| More-trends container | 16px / 400 | 16px | Its visible first label is 18px / 400, `#1a1a1a` |
| Company footer link | 12px / 400 | 15.6px | SpoqaHanSans |

The map search input declares a browser font outside the loaded web-font list; it is not promoted to a brand family or rendered as a specimen. Its measured size is 13px / 400. Bold category and news titles are part of the observed hierarchy; weight 400 is not a universal rule.

## Layout

At 1440×1000, the homepage's six 180px category entries form a 1080px strip starting at x=177. The four news cards use 255px widths with 20px gaps, calculated from their measured x coordinates (177, 452, 727, 1002). This aligns the category and news sections.

Use measured insets according to their component: 4px 12px for compact header actions and 20px inside cards. There is no verified global spacing progression. Corners are contextual: 0 on category cells and footer links, 6px on header actions, 12px on news cards, and 40px on the 80px advertising circles.

The logo sits at the left of navigation. A white navigation header remains visible in the homepage screenshot after Tab scrolls to the footer. The apartment map spans the viewport below its two navigation rows. Search and filters float at the upper left; the regional chip is near the top center and the nearby-listings action near the bottom center. This confirms the map-and-floating-controls arrangement, without establishing a maximum overlay width or a listing-rail specification.

### Responsive Behavior

Desktop only, 1440×1000. `--web-min-width: 1440px` is both declared on `:root` and computed there. Mobile breakpoints, hamburger navigation, touch targets and bottom-sheet behavior were not measured.

## Elevation & Depth

The category panel's measured shadow is `rgba(26, 26, 26, 0.1) 0px 8px 20px 0px`. The measured category cell, header actions, news card, more-trends card and footer link have `box-shadow: none` themselves. Use that panel shadow only in its observed role; no numbered elevation scale, mobile sheet shadow or modal backdrop was verified.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.category-panel`: `rgba(26, 26, 26, 0.1) 0px 8px 20px 0px`

## Motion & Easing

The two hero header actions compute `transition: all 0.3s ease 0s`. The apartment entry, news card, more-trends card and footer company link compute `all 0s ease 0s`. These raw declarations describe the measured controls; they do not establish a site-wide motion system. No custom cubic-bezier curve, map animation duration or reduced-motion response was verified.

## Components

**Property category action — 아파트.** A focusable `div`, 180×120px, radius 0, padding 0, no border or shadow of its own, transparent on a white panel. Label: SpoqaHanSans 22px / 700, `#1a1a1a`; a 40×40px image sits above it. Hover changes the computed label ink to `#ff681b`; pressed retains that color. The image's inherited CSS color also changes, but its source does not: this is not evidence of recoloring the image's internal SVG artwork. Focus is the browser's automatic ring.

**Hero header actions.** “로그인 및 회원가입” is 119.7×28px; “중개사무소 가입 및 상품문의” is 186.5×28px. Both have 6px corners, 4px 12px padding, SpoqaHanSans 12px / 400, transparent backgrounds and a 1px white border with white text over the photograph. Hover is unchanged within the compared scope. Press adds two descendant nodes without a settled style delta; no visual pressed token is inferred from those nodes. Focus is browser `auto`. These controls remain descriptive examples rather than structured component tokens. On the map, the corresponding actions have dark `#1a1a1a` text and borders, as measured at rest.

**News cards.** The first card is 255×136px, 12px corners, 20px padding, `#f3ede9`, no border or shadow, and a 1px solid `#e6e6e6` outline at rest. Its title is black 16px / 700; metadata is `#808080`. That outline remains on hover and keyboard focus and disappears while pressed; this is the card's measured component state. The fourth, more-trends card has the same dimensions, radius and padding, a transparent background on white and a 1px `#e6e6e6` border. Its visible first label is `#1a1a1a` at 18px / 400; the outer container reports black 16px / 400. Hover produced no measured change on either card. The news card outline also exists after blur and is not a focus indication. Pressed DOM additions on more-trends do not establish a visual state, so that card stays out of the structured components.

**Company footer link.** “회사소개” is an anchor to `//company.zigbang.com`: 44.2×15.6px, radius 0, padding 0, transparent on white, black SpoqaHanSans 12px / 400. Hover and press add a solid black underline. Keyboard focus uses the browser ring, with a 1px offset.

**Map controls, rest only.** The regional “논현동” chip is 104.3×36px, 18px radius, 8px 24px padding, white with black 16px / 400 SpoqaHanSans. The search field is visible without opening a separate mode: 289×29px, square, white, black text, 1px 2px padding, placeholder “아파트, 지역, 지하철역, 학교 검색”. Its adjacent search button is 30×30px with square corners. The nearby-listings action is 200×44px, 4px radius, 9px 15px padding and an orange background. No map states were measured and none of these controls is placed in `tokens.components`.

### States

| Homepage control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| Apartment entry | Label `#1a1a1a` → `#ff681b` | Same orange; two descendant nodes added | Browser `auto` outline |
| Hero auth action | No measured style change | Two descendant nodes added; no style token | Browser `auto` outline |
| Hero broker action | No measured style change | Two descendant nodes added; no style token | Browser `auto` outline |
| News card | No change against the initial rest baseline | 1px grey outline disappears | Outline also present at initial rest and after blur; no isolated focus delta |
| More-trends card | No measured style change | Two descendant nodes added; no style token | Browser `auto` outline |
| Company footer link | Solid black underline | Same underline | Browser `auto` outline |

Every listed hover matched `:hover`; pressed snapshots matched `:active`; keyboard measurements used real Tab navigation. “No change” covers the sampled control, descendants, pseudo-elements and three ancestor levels, with the blind spots detailed in the verification notes. Empty, loading, error, success and disabled application states were not exercised.

## Do's and Don'ts

- Preserve the homepage's contrast between the architectural hero, white category panel and warm pale news cards.
- Use the measured bold 22px category labels and orange hover ink; use compact outlined header actions in their hero context.
- Keep visible child typography distinct from the card container's inherited style.
- Keep map observations separate from homepage tokens and exclude raster map artwork from the brand palette.
- Use the evidenced faces and weights; choose no substitute and infer no variable font axis.
- Carry only measured interaction changes into component tokens; browser rings and persistent outline changes remain observations.

## Voice & Tone

Observed homepage copy moves from the direct campaign statement “부동산은 직방으로” to property category names and explanatory news headlines. The corporate site uses the aspirational “Beyond Home” and “공간에서 경험까지” language. This supports using clear task labels alongside broader residential vision copy; it does not establish a company ban on urgency, exclamation marks or particular promotional phrases.

## Agent Prompt Guide

“Build the measured Zigbang landing-page category action: a transparent 180×120px cell on a white panel, no cell radius or padding, a 40px image and a 22px / 700 SpoqaHanSans label. Use `#1a1a1a` at rest and `#ff681b` for hover and press. Preserve the browser focus indication.”

“Build its property news row with 255×136px cards, 20px gaps and insets, 12px corners and `#f3ede9` surfaces. Use black 16px / 700 title spans and `#808080` metadata. Give the more-trends card a white surrounding canvas and 1px `#e6e6e6` border; do not invent a card hover lift.”
