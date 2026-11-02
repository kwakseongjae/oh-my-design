---
name: KBS
colors:
  primary: '#0090d4'
  foreground: '#dddddd'
  blue1: '#140661'
  blue2: '#0090d4'
  blue3: '#006fff'
  black: '#1e1f21'
  black-deep: '#000000'
  black-sub: '#3a3a3a'
  white: '#ffffff'
  deep-gray1: '#535353'
  deep-gray2: '#8f8f8f'
  deep-gray3: '#292929'
  light-gray1: '#dddddd'
  light-gray2: '#ebebeb'
  light-gray3: '#f8f8f8'
  onair-red: '#ff001c'
  red: '#ff0000'
  orange: '#ff9c00'
  purple: '#9252e1'
  green: '#45a840'
  green-kong: '#70bf54'
  yellow: '#fbae17'
  pink: '#d32989'
  comp-newsbar-bg: '#252628'
typography:
  hero:
    fontSize: 48px
    fontWeight: 700
    use: 'Homepage hero .tit rule: 48px/56px, bold; root --fz-hero-tit is 48px. Live-loaded family.'
  body:
    fontSize: 16px
    fontWeight: 400
    use: Root scale --fz-body and --fw-normal; this is a declared scale, not a measurement of the body element's default size.
  navigation:
    fontSize: 18px
    fontWeight: 700
    use: Drama header link at page top; the parked sticky-header snapshot reads weight 500.
  card-title:
    fontSize: 18px
    fontWeight: 400
    use: Visible title span of the measured programme card; the anchor itself inherits 13px/400.
  hero-action:
    fontSize: 12px
    fontWeight: 700
    use: Measured white hero CTA link, line-height 18px.
rounded:
  square: 0px
  common: 16px
spacing:
  margin-sec: 72
  margin-tit: 24
  padding-comp: 48
components:
  program-card:
    type: card
    textColor: '#ffffff'
    rounded: 0px
    height: 339.4px
    padding: 0px
    typography: 18px / 400
    hover: Image transform matrix(1.03, 0, 0, 1.03, 0, 0); link bounds remain 186.7px x 339.4px.
    pressed: While :active and :focus match, link transform matrix(0.99, 0, 0, 0.99, 0, 0), bounds 184.8px x 336px; image retains hover matrix(1.03, 0, 0, 1.03, 0, 0).
    focus: Link transform matrix(0.99, 0, 0, 0.99, 0, 0), bounds 184.8px x 336px; returns to rest after blur.
    use: '옥탑방의 문제아들 — transparent programme link on the #3a3a3a programme strip. Width 186.7px. Font field describes its visible title; anchor inherits 13px/400. Hover affects the image, keyboard focus the whole link. Browser auto outlines are excluded. States from second capture with hideOverlays enabled.'
  hero-next:
    type: button
    textColor: '#ffffff'
    rounded: 0px
    height: 48px
    padding: 0px
    typography: 13px / 400
    hover: 'opacity: 1, from 0.4; visual bounds 57.6px x 57.6px, from 48px x 48px.'
    pressed: 'opacity: 1; visual bounds 57.6px x 57.6px, identical to measured hover.'
    use: 다음 버튼 — transparent carousel link with role=button over hero imagery; the sprite is its visible icon and 13px/400 applies to the hidden label. Rest width 48px and opacity 0.4. Computed transition all 0.2s ease-out 0s. Keyboard focus adds only a browser auto outline, excluded here. States from second capture with hideOverlays enabled.
fonts:
  roles:
    sans: Noto Sans
---

# Design System Inspiration of KBS

## Overview

### Visual Theme & Atmosphere

KBS is South Korea's public broadcaster. Its own history traces radio broadcasting to 1927, television to 1961 and the establishment of 한국방송공사 as a public broadcasting corporation to 1973. Today its services include television, radio and KBS+ digital media. [KBS introduction and history](https://open.kbs.co.kr/index.html?sname=kbs&stype=introduce)

The identity combines the KBS wordmark with a globe-like symbol. KBS explains the globe as its place in a developing world, the internal lines as information flowing across Korea, and the overall form as drawn from Taegeuk's yin and yang. On the measured homepage, white branding and navigation sit over large programme artwork; dark content bands carry news, video thumbnails and programme posters. Cyan highlights help distinguish content categories and live-broadcast information. The visual reading is grounded in the captured homepage, while the symbol's meaning comes from the [official CI page](https://open.kbs.co.kr/index.html?sname=kbs&stype=ci).

KBS's 2025–2027 plan centres on trust, innovation, public interest, enjoyment and diversity. It describes a direction spanning terrestrial broadcasting, online and mobile content, with AI among its planned service technologies. [KBS medium-term plan](https://open.kbs.co.kr/index.html?sname=kbs&stype=vision)

The measured homepage is the Korean-language surface at `www.kbs.co.kr/`, with HTML `lang="ko"`, no redirect and dark mode active. Its immediate tasks are opening live broadcasts, finding programmes and browsing news or recorded video.

### Brand Narrative

The historical thread runs from radio through television to today's broadcast and digital services. KBS's introduction describes universal access to quality programmes across income levels and geography. Its CI gives that public-service identity a globe form and flowing information lines. A useful design reading is to retain clear routes into live services and programme discovery alongside expressive programme artwork. [KBS introduction](https://open.kbs.co.kr/index.html?sname=kbs&stype=introduce), [KBS CI](https://open.kbs.co.kr/index.html?sname=kbs&stype=ci)

### Principles

KBS's stated strategic directions are trust, innovation, public interest, enjoyment and diversity. For this measured surface, carry those facts into a practical reference through clear content labels, distinct content groupings, prominent live-broadcast entry points and the observed type and colour hierarchy. These implementation suggestions are a reading of the page, not a published KBS UI-principles document. [2025–2027 plan](https://open.kbs.co.kr/index.html?sname=kbs&stype=vision)

### Personas

No user-persona research was verified.

## Colors

The live page exposes 374 computed root custom properties. Every property name also occurs in the two KBS stylesheets linked by that page. The palette below preserves their names, with `foreground` explicitly mapped to the paragraph ink and `--common-txt`. Colours are normalized from the captured short or uppercase hex values.

| Live value | Hex | Observed variable or role |
|---|---|---|
| foreground / light-gray1 | `#dddddd` | `--common-txt`, `--color-light-gray1`; the census's one paragraph ink sample |
| blue1 | `#140661` | `--color-blue1`, `--color-blue-deep`; white hero CTA's text |
| primary / blue2 | `#0090d4` | `--color-blue2`, `--color-blue`; category/progress accent; `primary` is this reference's mapping to the measured blue |
| blue3 | `#006fff` | `--color-blue3`, `--color-blue-light` |
| black | `#1e1f21` | `--color-black`, dark `--common-background` |
| black-deep | `#000000` | `--color-black-deep`, dark background-point token |
| black-sub | `#3a3a3a` | `--color-black-sub`, dark component surface and line tokens |
| white | `#ffffff` | `--color-white`; navigation, card title and hero CTA background |
| deep-gray1 | `#535353` | `--color-deep-gray1`; theme-button border |
| deep-gray2 | `#8f8f8f` | `--color-deep-gray2`; descriptions and card schedule text |
| deep-gray3 | `#292929` | `--color-deep-gray3`, dark section-background token |
| light-gray2 | `#ebebeb` | `--color-light-gray2`; dark secondary text / common-border token |
| light-gray3 | `#f8f8f8` | `--color-light-gray3`; declared palette value |
| onair-red | `#ff001c` | `--color-onair-red` |
| red | `#ff0000` | `--color-red` |
| orange | `#ff9c00` | `--color-orange` |
| purple | `#9252e1` | `--color-purple` |
| green | `#45a840` | `--color-green` |
| green-kong | `#70bf54` | `--color-green-kong` |
| yellow | `#fbae17` | `--color-yellow` |
| pink | `#d32989` | `--color-pink` |
| comp-newsbar-bg | `#252628` | Dark `--comp-newsbar-bg` |

The remaining named hues are palette evidence, without verified error, success or warning roles. The text census is dominated by white (211 samples), but paragraph ink is `#dddddd` (one sample); those are different observations.

The official corporate CI palette is a separate evidence domain: KBS Purple Blue is RGB 9/0/62 (`#09003e`, Pantone 275C), KBS Blue RGB 34/130/185 (`#2282b9`, Pantone 2925C), and KBS Orange RGB 255/156/0 (`#ff9c00`, Pantone 165C). These published RGB values are not substituted for the live UI blues. [Official CI colours](https://open.kbs.co.kr/index.html?sname=kbs&stype=ci)

## Typography

**Official product-use statement:** no opened corporate or CI prose identifies a product-wide interface font.

**Live-loaded:** `document.fonts` reports **Noto Sans**, normal style, at 300, 400, 500 and 700. This is the only family in the structured typography tokens. The homepage stylesheet names it `Noto Sans` but maps its sources to **Noto Sans CJK KR / NotoSansKR Hestia** files. For each weight it offers local sources followed by EOT, WOFF and OTF URLs on `res.static.kbs.co.kr`. The census confirms loaded faces, rather than which local or network source supplied them. At weight 400 the CSS contains both DemiLight and Regular declarations, so the individual file remains unresolved. [Homepage stylesheet](https://static.kbs.co.kr/www/20261022165838/resources/v2/css/style.min.css)

**Official distributed assets:** the deployed CSS exposes font-source URLs. No public font-distribution page or licence was verified, and no font files were downloaded.

**Declared-only:** the CSS also defines Noto Sans at 100 and 900, absent from the loaded-face census. Its fallback stack names Apple SD Gothic Neo, 애플 SD 산돌고딕 Neo, Helvetica Neue and Roboto; none appears in that loaded-face list. VideoJS is declared for player icons and is also absent from the loaded list. These declarations receive no specimens or additional family tokens.

**Unresolved:** the exact 400-weight font resource, actual local-versus-network source, and a company-wide font policy. **Substitute: none chosen.**

| Setting | Verified value | Evidence class |
|---|---|---|
| Hero headline | 48px, 700, line-height 56px | Loaded homepage CSS `.tit` rule; root `--fz-hero-tit: 48px` |
| Hero programme name | 30px | Homepage CSS `.program` rule |
| Root body scale | 16px / 400; common line-height 1.5 | Computed custom properties; not the body element's default size |
| Header drama link | 18px / 700, line-height 28px, tracking -1px | Page-top control identity; parked sticky-header reading is 18px / 500 |
| Programme-card title | 18px / 400 | Visible `span.tit`; its anchor inherits 13px / 400 |
| Hero action | 12px / 700, line-height 18px | Measured CTA |
| Search-opening label | 11px / 400, line-height 16px | Measured link |
| Theme button | 13.3333px / 400, normal line-height | Measured button |

Additional root scale values are page title 30px, page subtitle 24px, item title 18px, item subtitle 16px, description 14px, and badge 12px. These describe captured declarations, not measurements of every corresponding component. [Hero stylesheet](https://static.kbs.co.kr/www/20261022165838/resources/v2/css/main.css)

## Layout

Use a wide promotional stage followed by content bands. The captured desktop page has a 1200px content column, matching `--wrap-width`; survey controls span x=113 to x=1313. The hero is configured at 613px high. News and video rows mix large features with smaller thumbnails, while the programme strip shows six poster links.

The survey measures paired feature links at 592px each, four smaller video links at 288px each, and the selected programme poster at 186.7px wide. Root spacing declarations are `--margin-sec: 72px`, `--margin-tit: 24px` and `--padding-comp: 48px`. Preserve their named scope instead of applying all three to every card.

### Responsive Behavior

Only the 1440 × 1000 desktop viewport was measured; mobile layouts, breakpoints and the light-mode surface were not measured.

## Elevation & Depth

All six sampled controls have `box-shadow: none` at rest. The interface separates content through artwork, dark surface bands and typography. Header tokens configure `rgba(0 0 0 / 72%)`, `blur(20px)` and `0 0 50px rgba(0 0 0 / 25%)`; the parked drama-link snapshot records that translucent header background. The hero text-shadow token is `1px 1px 3px #3a3a3a`.

## Motion & Easing

The hero-next link's raw computed transition is **`all 0.2s ease-out 0s`**. Its measured hover and pointer-held state use opacity 1 and expanded 57.6 × 57.6px bounds.

The root image-transition token is **`--transition-img: transform .3s ease-in-out`**, derived from **`--common-transition: .3s ease-in-out`**. These are captured custom-property values. The programme card link itself computes to **`all 0s ease 0s`**; its image is the hover target. No additional easing curve, carousel interval or reduced-motion behaviour was verified.

---

**Measurement evidence:** homepage survey and two states captures on 2026-11-03 Korea time; raw data, exact selectors, control identities, transition strings, source quotes and limitations are recorded in `report.md` and `verification.md`. Corporate narrative and CI pages support only the facts attributed to them; live tokens come from the measured homepage and its linked CSS.

## Components

**Programme poster link — `program-card`.** The measured link is “옥탑방의 문제아들 2TV 화 20:30 방송”, with a 186.7 × 339.4px box, square corners, no padding, border or shadow, and a transparent background over the `#3a3a3a` programme strip. Its visible title is white `#ffffff`, 18px / 400; schedule text is `#8f8f8f`. The image scales to 1.03 on hover. Keyboard focus scales the whole link to 0.99. A held pointer combines that focused-link contraction with the image hover. These distinct targets matter when reproducing the interaction.

**Hero carousel next — `hero-next`.** “다음 버튼” is an icon link with `role="button"`, 48 × 48px, square corners and no padding, border or shadow. It is transparent over changing hero artwork. Its external SVG sprite is visible; the inherited white 13px / 400 text belongs to a hidden label. Hover and measured pointer press change opacity from 0.4 to 1 and visual bounds from 48 × 48px to 57.6 × 57.6px. Focus has only the browser's `auto` ring.

The other measured controls remain prose references. The hero CTA is a 120 × 34px white `#ffffff` link with `#140661` text, square corners, 8px 12px padding and 12px / 700 type. The secondary “라이트 모드” button is 130 × 56px, `#1e1f21` with `#dddddd` text, a 2px `#535353` border, 14px padding and a 50px pill radius. The drama and search links are transparent, square, unpadded and white. No visible search input appeared in the survey.

The root `--common-radius` is 16px. It does not override the measured square corners of these links. Only the programme card and carousel arrow have authored interaction changes sufficient for structured components.

### States

The second capture used `hideOverlays: true`; the search trigger still remained covered by its sticky header. Both captures closed the chatbot prompt through `.chatbot-btn__close`, labelled “닫기”. No consent rejection was recorded and no consent banner was visible in the inspected viewport screenshots.

| Control | Hover | Pointer held | Keyboard focus |
|---|---|---|---|
| Programme card | Image `matrix(1.03, 0, 0, 1.03, 0, 0)`; link stays 186.7 × 339.4px | With `:active` and `:focus` both true: link `matrix(0.99, 0, 0, 0.99, 0, 0)`, 184.8 × 336px; image retains 1.03 hover | Same link matrix and 184.8 × 336px bounds, plus browser `auto` outline; after blur returns to `none`, 186.7 × 339.4px |
| Hero next | Opacity 0.4 → 1; 48 × 48px → 57.6 × 57.6px | Measured; identical to hover | Browser `auto` outline only |
| Theme button | No change within the compared scope | UNMEASURED: `:active` did not match | Browser `auto` outline only |
| Drama navigation | No change within the compared scope | UNMEASURED: `:active` did not match | Browser `auto` outline only |
| Search trigger | UNMEASURED: covered by sticky header | UNMEASURED: covered by sticky header | Browser `auto` outline only |
| Hero CTA | UNMEASURED: carousel made the selected link `pointer-events:none` | UNMEASURED: same disabled condition | UNMEASURED: selected link not reached before the Tab walk cycled |

The no-change scope covers the element and its pseudo-elements, descendants and their pseudo-elements, plus recorded ancestors: one descendant and one ancestor for the theme button, zero descendants and three ancestors for drama navigation. It compares colours, backgrounds, borders, drawn outlines, shadows, opacity, transforms, filters, visibility, size, decoration, image and mask properties, media sources and supported SVG internals. The drama-link parked snapshot reads weight 500 after scrolling, versus 700 at page top; the no-change verdict does not establish an invariant font across header modes. Browser `auto` outlines are observations rather than brand ring tokens. No disabled visual treatment was measured.

## Do's and Don'ts

- Keep the captured dark canvas, light text hierarchy and content imagery together.
- Use the live UI blues for the interface and the documented CI values when discussing corporate identity.
- Distinguish the programme card's image hover from its whole-link focus transform.
- Preserve square geometry where it was measured; use the theme control's pill treatment only in that context.
- Keep advertising, translation widgets and chatbot surfaces out of the product component set.
- Add no search-input, disabled-state, font-substitution or brand focus-ring value without evidence.

## Voice & Tone

Navigation uses direct Korean destination and action labels: “온에어 바로가기”, “프로그램 바로가기”, “검색” and “메뉴 열기”. Use similarly short labels that tell the visitor where a control leads. No broader editorial voice was assessed from programme copy.

## Agent Prompt Guide

“Build a Korean programme-browsing surface with the measured dark KBS palette: `#1e1f21` canvas, `#3a3a3a` programme band, `#dddddd` paragraph ink, white titles and `#0090d4` accents. Use the live-loaded Noto Sans family. A programme poster link is 186.7 × 339.4px, square and unpadded, with an 18px / 400 visible title. Hover enlarges its image to 1.03; keyboard focus contracts the whole link to 0.99. Keep those transforms on their measured targets.”
