---
name: ZEPETO
colors:
  primary: '#5c46ff'
  on-primary: '#ffffff'
  ink: '#292930'
  web-ink: '#000008'
  body: '#5c5c61'
  muted: '#47474d'
  black: '#000000'
  canvas: '#ffffff'
  surface: '#f5f5f6'
  surface-alt: '#f8f8fa'
  hairline: '#e0e0e1'
typography:
  display-hero:
    fontSize: 64px
    fontWeight: 800
    lineHeight: 1.09
    use: Hero headline on both Studio pages (h2.content-title), white, -apple-system stack
  card-title:
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.29
    use: Feature card titles and service names on the Studio world page
  service-name:
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.33
    use: Service names on Studio home (아이템, 월드, 라이브)
  guide-title:
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.36
    use: Guide card titles on the Studio world page
  hero-button:
    fontSize: 22px
    fontWeight: 700
    lineHeight: 3.09
    use: Hero pill label (시작하기, 월드 만들기), set on a 68px line box
  link-lg:
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.4
    use: 더 알아보기 links on the Studio guide cards
  nav:
    fontSize: 17px
    fontWeight: 500
    lineHeight: 1.15
    use: Studio top navigation; the current item steps to 700
  button:
    fontSize: 17px
    fontWeight: 500
    lineHeight: 2.82
    use: Violet Studio action label (더 알아보기), set on a 48px line box
  entry-button:
    fontSize: 17px
    fontWeight: 500
    lineHeight: 1.29
    use: 입장하기 on the web lobby's hero world banners, ui-sans-serif stack
  body:
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.41
    use: Descriptions on the Studio world page
  body-sm:
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.33
    use: Service descriptions on Studio home (letter-spacing -0.2px)
  world-name:
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.47
    use: World names under the web lobby's world tiles, ui-sans-serif stack
  web-body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.15
    use: Web lobby body text, ui-sans-serif stack
  utility-button:
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.33
    use: 내 콘텐츠 in the Studio header; the web lobby's 로그인 uses 15px / 500 / 20px
  menu:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    use: Options in the Studio language dropdown
rounded:
  none: 0px
  button: 8px
  thumbnail: 12px
  card: 16px
  pill: 24px
  hero-pill: 34px
spacing:
  button-y: 10
  button-x: 16
  entry-y: 14
  entry-x: 34
  pill-x: 34
  card-pad: 32
  guide-pad: 36
  option-y: 8
  option-x: 24
components:
  web-login-button:
    type: button
    backgroundColor: '#292930'
    textColor: '#ffffff'
    rounded: 8px
    padding: 10px 16px
    height: 40px
    typography: 15px / 500 / 20px ui-sans-serif stack
    states: rest only; no pointer frame was recorded
    use: 로그인 in the web lobby header, 80 x 40 (read, never followed)
  zem-button:
    type: button
    backgroundColor: '#f5f5f6'
    textColor: '#000000'
    rounded: 8px
    padding: 10px 16px
    height: 40px
    typography: 16px / 400 / 18.4px ui-sans-serif stack
    states: rest only; no pointer frame
    use: ZEM 구매 in the web lobby header, 114 x 40 (not opened)
  world-entry-button:
    type: button
    backgroundColor: '#f5f5f6'
    textColor: '#47474d'
    rounded: 8px
    padding: 14px 34px
    height: 56px
    typography: 17px / 500 / 22px ui-sans-serif stack
    states: rest on three instances; no pointer frame
    use: 입장하기 on the three hero world banners of the web lobby, 182 x 56
  carousel-control:
    type: button
    backgroundColor: rgba(199, 199, 201, 0.5)
    rounded: 50%
    size: 36px x 36px
    states: rest only
    use: Left and right arrows of the web lobby's hero carousel
  world-card:
    type: card
    backgroundColor: rgba(248, 248, 250, 0.5)
    textColor: '#000008'
    rounded: 12px
    size: 152px x 152px
    typography: 15px / 500 / 22px ui-sans-serif stack
    use: 'World tiles in the web lobby grid (157 tiles): a 12px-radius thumbnail on a translucent #f8f8fa ground over the world name'
  studio-primary-button:
    type: button
    backgroundColor: '#5c46ff'
    textColor: '#ffffff'
    rounded: 24px
    padding: 0px
    height: 48px
    typography: 17px / 500 / 48px -apple-system stack
    states: rest on three instances; no pointer frame
    use: 더 알아보기 under each Studio service card (아이템, 월드, 라이브), 200 x 48
  hero-pill-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#5c46ff'
    rounded: 34px
    padding: 0px 34px
    height: 68px
    typography: 22px / 700 / 68px -apple-system stack
    shadow: rgba(0, 0, 0, 0.2) 0px 0px 20px 0px
    states: rest on both Studio pages; no pointer frame
    use: 시작하기 on the Studio home hero (144 x 68) and 월드 만들기 on the world page hero (168 x 68)
  my-content-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#292930'
    rounded: 8px
    padding: 10px 16px
    height: 40px
    typography: 15px / 600 / 20px -apple-system stack
    states: rest on both Studio pages; no pointer frame
    use: 내 콘텐츠 in the Studio header, 88 x 40 (not followed)
  studio-nav-link:
    type: tab
    backgroundColor: transparent
    textColor: rgba(255, 255, 255, 0.6)
    padding: 15px 16px
    height: 50px
    typography: 17px / 500 / 19.55px -apple-system stack
    hover: 'fg #ffffff'
    pressed: 'fg #ffffff'
    selected: 'fg #ffffff at weight 700 on the current section''s item (world page)'
    states: 'hover and pressed frames read opaque #ffffff on all five items on Studio home and all four inactive items on the world page'
    use: Studio top navigation over the dark hero (five items on Studio home)
  language-dropdown:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#292930'
    border: '1px solid #e0e0e1 (trigger)'
    rounded: 8px
    padding: 8px 0px (list); 8px 24px (option)
    height: 36px (trigger)
    typography: 14px / 500 / 20px -apple-system stack
    shadow: rgba(0, 0, 0, 0.08) 0px 2px 6px 0px
    selected: 'bg #f8f8fa on the aria-selected option'
    states: opened by the collector's expansion pass on both Studio pages (expanded, menu-open)
    use: '한국어 language switcher in the Studio footer: a 74 x 36 trigger opening a 180-wide list of seven languages'
  service-card:
    type: card
    backgroundColor: '#ffffff'
    textColor: '#292930'
    rounded: 16px
    padding: 42px 32px 32px
    size: 320px x 416px
    use: 아이템, 월드, 라이브 cards on Studio home, each ending in the violet 더 알아보기
  world-feature-card:
    type: card
    textColor: '#292930'
    rounded: 16px
    size: 320px x 438px
    shadow: rgba(0, 0, 0, 0.05) 0px 2px 12px 0px
    typography: 28px / 700 / 36px title; 17px / 400 / 24px text
    use: '모험, 소통, 도전 cards on the Studio world page: image above, title and #5c5c61 text below'
  guide-card:
    type: card
    backgroundColor: '#f8f8fa'
    textColor: '#292930'
    rounded: 16px
    padding: 36px 36px 64px
    size: 368px x 244px
    use: 개발 가이드, 출시 가이드, 수익 창출 가이드 cards on the Studio world page
  guide-link:
    type: button
    backgroundColor: transparent
    textColor: '#5c46ff'
    padding: 0px 16px 0px 0px
    height: 28px
    typography: 20px / 500 / 28px -apple-system stack
    states: rest on three instances; no pointer frame
    use: 더 알아보기 link at the foot of each guide card
fonts:
  roles:
    sans: '-apple-system'
    web: ui-sans-serif
---

# Design System Inspiration of ZEPETO

## Overview

### Visual Theme & Atmosphere

ZEPETO (제페토) is a 3D-avatar social platform run by NAVER Z Corp. Its own About page describes it as a place where anyone can express themselves creatively and connect with users around the world: "제페토는 3D 아바타 기반 소셜 플랫폼으로, 누구나 쉽게 창의적으로 자신을 표현하고 전 세계 사용자들과 소통할 수 있는 기회를 제공하고자 합니다." NAVER Z's corporate site puts the ambition in one line — "현실의 한계를 넘어 상상 이상의 세상으로", beyond the limits of reality into a world past imagination. ZEPETO is two products under one name. The web lobby at web.zepeto.me lets people browse and enter worlds. ZEPETO Studio lets creators make items, Unity-built worlds and live content and sell them. Studio's counters read 6,800만 item sales, 230만 creators and 3억 ZEPETO members; a September 2025 post on ZEPETO's blog speaks of more than 4억 members. The platform keeps evolving: in 2026 the blog introduced ZEPETO's first AI streamer, 나미, and then two more, 제야 and 김여주.

The two products look different, and the captures show it. The web lobby is quiet and monochrome: a white header with a dark `#292930` 로그인 button and a light-grey `#f5f5f6` ZEM 구매 button, 8px-radius controls, and a grid of 12px-radius world tiles whose thumbnails supply the colour. Studio is where the brand colour lives. Its heroes carry 64px / 800 white headlines ("상상하는 모든 것. 제페토 스튜디오에서.") and a white 68px pill with a violet `#5c46ff` label and a soft glow. Its service cards end in violet `#5c46ff` pill actions, and its guide cards use violet links on `#f8f8fa`. Text runs in `#292930`, descriptions in `#5c5c61`, and sections alternate between white and `#f8f8fa`.

Neither surface loads a web font. The web lobby declares the platform UI stack (`ui-sans-serif, system-ui, -apple-system, …`) and Studio declares `-apple-system, "system-ui", AppleSDGothicNeo, …`, so type renders in each viewer's system face, and hierarchy comes from weight: 800 and 700 for headlines, 500 for navigation and actions, 400 for reading.

**Key Characteristics:**
- One brand violet, `#5c46ff`: Studio's filled actions, the hero pill label and guide links
- A monochrome web lobby: `#292930` 로그인, `#f5f5f6` utility buttons, world thumbnails for colour
- 64px / 800 white hero headlines on Studio; 700 for every other headline
- Two geometries: 8px utility buttons and 12px world tiles; 16px cards and 24px / 34px pills on Studio
- Mostly flat, with three soft shadows: the hero pill's glow, a light card shadow, the dropdown menu
- System UI type throughout; no brand typeface is served
- Studio sections alternate white and `#f8f8fa`

### Primary tasks

- Browse worlds in the web lobby and enter one (입장하기)
- Top up ZEM from the web lobby header
- Learn how to make items, worlds and live content in ZEPETO Studio
- Start as a creator (시작하기) and read the world development guides

### Brand Narrative

ZEPETO's About page defines the product in a sentence: a 3D-avatar social platform that gives anyone an easy, creative way to express themselves and to connect with people around the world. Every page opened carries "NAVER Z Corp. All rights reserved.", and NAVER Z's own site frames the company's work as going "beyond the limits of reality" and making "새로운 경험" for everyone's enjoyment.

The platform is built around a creator economy. ZEPETO Studio says creators can make everything in the ZEPETO world — fashion items, worlds and live broadcasts — and earn from them. Worlds are built with Unity, the world-building APIs are free, and anyone with a ZEPETO account can join Studio in three steps: sign up, create, and pass review. Studio's counters show 6,800만 item sales, 230만 creators and 3억 members; the world page says millions of users visit ZEPETO worlds every day.

The blog shows where the platform is heading. A September 2025 post describes ZEPETO as a global avatar platform with more than 4억 members, in a collaboration marking the Porsche Carrera GT's 25th anniversary. In July 2025 ZEPETO took billboards in New York's Times Square, and in November 2025 it opened a Hall of Fame for creators. In 2026 it debuted its first official AI streamer, 나미, on ZEPETO LIVE, and then added two more, 제야 and 김여주.

The design follows the split. The web lobby stays neutral so avatars and worlds supply the colour; Studio turns violet to sell creation itself.

### Principles

1. **Avatars and worlds carry the colour.** *UI implication:* keep the lobby's chrome white and grey; let thumbnails lead.
2. **One brand hue for creation.** *UI implication:* `#5c46ff` marks Studio's actions and links, nothing else.
3. **Creation should feel open.** Studio promises free tools and a three-step start. *UI implication:* large pills, generous card padding, plain guide links.
4. **Weight, not typeface.** *UI implication:* hierarchy from 800 / 700 / 500 / 400 on the system face.
5. **Soft depth, used sparingly.** *UI implication:* one glow on the hero pill, a light card shadow, a menu shadow; everything else flat. (An editorial reading of the captured pages, not a ZEPETO statement.)

### Personas

*Personas below are fictional archetypes informed by publicly observable ZEPETO user segments (avatar and social users, world visitors, item and world creators), not individual people.*

**민서, 17, 서울.** Styles her avatar daily, hangs out in worlds with friends and watches live shows. Tops up ZEM now and then for new outfits.

**Diego, 22, São Paulo.** A hobbyist 3D creator who sells avatar items through ZEPETO Studio and follows the Studio guides closely.

**지훈, 28, 경기.** A small-team world builder who uses Unity and the world guides to publish and monetise worlds.

## Colors

Every token below was read by the deterministic collector on 2026-09-30 from web.zepeto.me/ko, studio.zepeto.me/ko and the Studio world page.

### Primary
- **ZEPETO Violet** (`#5c46ff`): The fill of the three 더 알아보기 actions on Studio home (200 × 48, 24px radius), the label colour of the white hero pills (시작하기, 월드 만들기), and the colour of the 더 알아보기 links on the world page's guide cards. It is the primary because it is the only saturated action fill on any captured product surface. The web lobby's own main action, 로그인, is dark `#292930`; the lobby is otherwise monochrome, and violet appears only on Studio.
- **On Primary** (`#ffffff`): Labels on the violet actions.

### Text
- **Ink** (`#292930`): Studio headings, card titles and body text; also the fill of the web lobby's 로그인 and the label of 내 콘텐츠.
- **Web Ink** (`#000008`): World names and body text in the web lobby.
- **Body Grey** (`#5c5c61`): Descriptions on Studio's service, feature and guide cards.
- **Muted** (`#47474d`): The 입장하기 label on the web lobby's hero banners.
- **Black** (`#000000`): The ZEM 구매 label and header icon buttons in the web lobby.

### Surface
- **Canvas** (`#ffffff`): Pages set no body fill and render on the browser's white; white is set explicitly on Studio's service cards, the hero pills, 내 콘텐츠 and the dropdown menu.
- **Surface** (`#f5f5f6`): The ZEM 구매 and 입장하기 buttons.
- **Surface Alt** (`#f8f8fa`): Studio's alternating sections, the guide cards and the selected dropdown option; at 50% it is the ground behind world thumbnails.
- **Hairline** (`#e0e0e1`): The 1px border of the language dropdown trigger.

### Translucent values (not tokens)
- The hero carousel arrows are `rgba(199, 199, 201, 0.5)`, and the Studio navigation is white at 60% (`rgba(255, 255, 255, 0.6)`) at rest. Both are recorded on their components.

### Brand assets, not tokens
- No logo colour was measured. The June record's decorative magenta was not rendered on any captured page and is no longer listed.

## Typography

### Font Family
- **Live surface use**: the viewer's system UI face. web.zepeto.me declares `ui-sans-serif, system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` plus emoji fallbacks (500 observed uses); Studio declares `-apple-system, "system-ui", AppleSDGothicNeo, "Helvetica Neue", "Noto Sans KR", Helvetica, sans-serif` (216 observed uses). No font file is loaded for either; the collector classes both as system faces.
- **Declared only (no visible use)**: `Noto Sans KR`, `Noto Sans JP` and `Noto Sans SC` — declared, 0 observed uses, no file loaded.
- **Excluded**: `swiper-icons`, the Swiper carousel library's inline icon font.
- **No brand typeface**: none of the pages opened names or serves a ZEPETO typeface, and none is claimed.

### Hierarchy

| Role | Size | Weight | Line Height | Observed on |
|------|------|--------|-------------|-------------|
| Display Hero | 64px | 800 | 70px (1.09) | Studio heroes, white |
| Card Title | 28px | 700 | 36px (1.29) | World page feature and service cards |
| Service Name | 24px | 700 | 32px (1.33) | Studio home service cards |
| Guide Title | 22px | 700 | 30px (1.36) | World page guide cards |
| Hero Button | 22px | 700 | 68px box | 시작하기, 월드 만들기 |
| Link Large | 20px | 500 | 28px (1.4) | Guide card links |
| Nav | 17px | 500 | 19.55px (1.15) | Studio navigation; 700 when current |
| Button | 17px | 500 | 48px box | 더 알아보기 |
| Entry Button | 17px | 500 | 22px (1.29) | 입장하기 (web) |
| Body | 17px | 400 | 24px (1.41) | World page descriptions |
| Body Small | 15px | 400 | 20px (1.33) | Studio home service descriptions |
| World Name | 15px | 500 | 22px (1.47) | Web lobby world tiles |
| Web Body | 16px | 400 | 18.4px (1.15) | Web lobby text |
| Utility Button | 15px | 600 | 20px (1.33) | 내 콘텐츠; 로그인 at 500 |
| Menu | 14px | 500 | 20px (1.43) | Language dropdown options |

### Principles
- **Weight carries the hierarchy**: 800 for the hero, 700 for every other headline, 500 for navigation and actions, 400 for reading.
- **Big, short headlines**: Studio heroes set 64px on a 70px line.
- **System faces by declaration**: both surfaces ask for the platform face rather than a brand font; the brand lives in violet and in the avatars.

## Layout

### Spacing System
- Utility buttons: 10px vertical, 16px horizontal
- 입장하기: 14px vertical, 34px horizontal
- Hero pills: 34px horizontal
- Service cards: 42px top, 32px sides and foot
- Guide cards: 36px, with 64px at the foot
- Dropdown options: 8px vertical, 24px horizontal

### Grid & Container
- The web lobby stacks a white header (로그인, ZEM 구매), a hero carousel of world banners with 입장하기, and a grid of 152px world tiles.
- Studio pages open on a dark full-width hero with a 64px / 800 white headline and a white pill, then alternate white and `#f8f8fa` sections: three 320px service or feature cards, creator highlights, three guide cards, and a closing call to start.

### Whitespace Philosophy
- **Content leads in the lobby**: world thumbnails carry the colour; the chrome stays grey and white.
- **Studio breathes**: 16px-radius cards with 32–42px padding and large headlines.

### Border Radius Scale
- 0px: text blocks and links
- 8px: web buttons, 내 콘텐츠, the dropdown
- 12px: world thumbnails
- 16px: Studio cards
- 24px: violet Studio actions
- 34px: hero pills
- 50%: carousel arrows

### Responsive Behavior

#### Breakpoints
Only the 1440-pixel desktop viewport was captured; no breakpoint was measured.

#### Touch Targets
- 로그인, ZEM 구매, 내 콘텐츠: 40px tall
- 입장하기: 56px; hero pills: 68px; violet actions: 48px
- Studio navigation items: 50px; carousel arrows: 36 × 36

#### Collapsing Strategy
- Not measured.

#### Image Behavior
- World thumbnails are square with a 12px radius; feature cards place an image above the text.

## Elevation & Depth

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Web lobby controls, service and guide cards, navigation |
| Tint | `#f8f8fa` sections and cards | Studio alternation, guide cards |
| Card | `rgba(0, 0, 0, 0.05) 0px 2px 12px 0px` | World page feature cards |
| Menu | `rgba(0, 0, 0, 0.08) 0px 2px 6px 0px` | Language dropdown |
| Glow | `rgba(0, 0, 0, 0.2) 0px 0px 20px 0px` | Hero pills |

**Shadow Philosophy**: shadows are soft and rare. The strongest one belongs to the hero pill, the action Studio most wants pressed.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.hero-pill`: `rgba(0, 0, 0, 0.2) 0px 0px 20px 0px`
- `shadow.card`: `rgba(0, 0, 0, 0.05) 0px 2px 12px 0px`
- `shadow.menu`: `rgba(0, 0, 0, 0.08) 0px 2px 6px 0px`

## Motion & Easing

The collector reads computed style, not animation, so no duration or easing is measured. Studio's hero headline and pill carry a `fade-up` class, which shows entrance motion exists without timing it. Treat motion as unspecified rather than borrowing values, and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/zepeto.json (capturedAt 2026-09-30T07:52:37Z), deterministic collector, 1440 wide, logged out: web.zepeto.me/ko (the frontmatter homepage web.zepeto.me/ lands there), studio.zepeto.me/ko and studio.zepeto.me/ko/products/world.
- Labels (로그인, ZEM 구매, 입장하기, 더 알아보기, 시작하기, 월드 만들기, 내 콘텐츠) were read headless on the same pages on 2026-09-30 and from Studio's server HTML.
- §1, §10, §11: web.zepeto.me/ko/about, blog.zepeto.me/ko and www.naverz-corp.com, opened 2026-09-30, plus the Studio pages' own copy. The June body's launch year, parent-company description and regional audience claims were not on any page opened and were removed.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->

## Components

### Buttons

**Studio action (primary)**
- Background: `#5c46ff`
- Text: `#ffffff`
- Radius: 24px
- Padding: 0px (fixed 200px width)
- Height: 48px
- Font: 17px / 500 / 48px, -apple-system stack
- States: rest on three instances; no pointer frame
- Use: 더 알아보기 under the 아이템, 월드 and 라이브 cards on Studio home

**Hero pill**
- Background: `#ffffff`
- Text: `#5c46ff`
- Radius: 34px
- Padding: 0px 34px
- Height: 68px
- Font: 22px / 700 / 68px, -apple-system stack
- Shadow: `rgba(0, 0, 0, 0.2) 0px 0px 20px 0px`
- States: rest only
- Use: 시작하기 (Studio home) and 월드 만들기 (world page) over the dark heroes

**Web 로그인**
- Background: `#292930`
- Text: `#ffffff`
- Radius: 8px
- Padding: 10px 16px
- Height: 40px
- Font: 15px / 500 / 20px, ui-sans-serif stack
- States: rest only
- Use: web lobby header (read, never followed)

**ZEM 구매**
- Background: `#f5f5f6`
- Text: `#000000`
- Radius: 8px
- Padding: 10px 16px
- Height: 40px
- Font: 16px / 400 / 18.4px, ui-sans-serif stack
- States: rest only
- Use: web lobby header, beside 로그인

**입장하기**
- Background: `#f5f5f6`
- Text: `#47474d`
- Radius: 8px
- Padding: 14px 34px
- Height: 56px
- Font: 17px / 500 / 22px, ui-sans-serif stack
- States: rest only
- Use: the three hero world banners of the web lobby

**내 콘텐츠**
- Background: `#ffffff`
- Text: `#292930`
- Radius: 8px
- Padding: 10px 16px
- Height: 40px
- Font: 15px / 600 / 20px, -apple-system stack
- States: rest only
- Use: Studio header (not followed)

**Guide link**
- Background: transparent
- Text: `#5c46ff`
- Padding: 0px 16px 0px 0px
- Height: 28px
- Font: 20px / 500 / 28px
- States: rest only
- Use: 더 알아보기 at the foot of each guide card

**Carousel arrows**
- Background: `rgba(199, 199, 201, 0.5)`
- Radius: 50%
- Size: 36 × 36
- Use: web lobby hero carousel

### Navigation

**Studio navigation**
- Background: transparent
- Text: `rgba(255, 255, 255, 0.6)`
- Padding: 15px 16px
- Height: 50px
- Font: 17px / 500 / 19.55px
- Hover: text `#ffffff`
- Pressed: text `#ffffff`
- Selected: text `#ffffff` at weight 700 on the current section's item (world page)
- Use: Studio top navigation over the dark hero, five items on Studio home

**Language dropdown**
- Trigger: 1px solid `#e0e0e1`, radius 8px, 74 × 36, text `#292930`
- Menu: `#ffffff`, radius 8px, padding 8px 0px, shadow `rgba(0, 0, 0, 0.08) 0px 2px 6px 0px`, 180 wide
- Option: 14px / 500 / 20px, padding 8px 24px
- Selected: option background `#f8f8fa`
- Use: 한국어 switcher on both Studio pages, opened by the collector's expansion pass

### Cards

**Service card (Studio home)**
- Background: `#ffffff`
- Text: `#292930`
- Radius: 16px
- Padding: 42px 32px 32px
- Size: 320 × 416
- Use: 아이템, 월드, 라이브, each ending in a violet action

**Feature card (world page)**
- Text: `#292930` title at 28px / 700 / 36px; `#5c5c61` text at 17px / 400 / 24px
- Radius: 16px
- Shadow: `rgba(0, 0, 0, 0.05) 0px 2px 12px 0px`
- Size: 320 × 438
- Use: 모험, 소통, 도전

**Guide card (world page)**
- Background: `#f8f8fa`
- Text: `#292930`
- Radius: 16px
- Padding: 36px 36px 64px
- Size: 368 × 244
- Use: 개발 가이드, 출시 가이드, 수익 창출 가이드

**World tile (web lobby)**
- Thumbnail: 152 × 152, radius 12px, on `rgba(248, 248, 250, 0.5)`
- Name: `#000008`, 15px / 500 / 22px
- Use: the lobby's world grid (157 tiles)

---

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out pages — the web lobby and two ZEPETO Studio pages — plus first-party context)
**Tier 1 sources:** https://web.zepeto.me/ko ; https://studio.zepeto.me/ko ; https://studio.zepeto.me/ko/products/world ; https://web.zepeto.me/ko/about ; https://blog.zepeto.me/ko ; https://www.naverz-corp.com/
**Tier 2 sources:** getdesign.md/zepeto (HTTP 200, "zepeto — 0 DESIGN.md files") and styles.refero.design/?q=zepeto (HTTP 200, no ZEPETO style entry), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

### States

Only these states were observed on the three captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Hover / pressed (Studio navigation)** | Text goes from `rgba(255, 255, 255, 0.6)` to opaque `#ffffff`, on all five items on Studio home and all four inactive items on the world page. |
| **Selected (Studio navigation)** | The current section is `#ffffff` at weight 700. |
| **Open (language dropdown)** | A white 8px-radius menu with a `rgba(0, 0, 0, 0.08) 0px 2px 6px 0px` shadow; the selected option is `#f8f8fa`. |

No pointer frame was recorded for any button, so button hover, pressed and focus are unmeasured, not absent. The Studio logo link's pressed frame shows only the browser's default active colour, which is not a brand value. Error, empty, loading and success states were not captured.

## Do's and Don'ts

### Do
- Use `#5c46ff` for Studio actions and links, and as the label on a white hero pill
- Keep the web lobby monochrome: `#292930` for the main action, `#f5f5f6` for utility buttons
- Set heroes at 64px / 800 and other headlines at 700
- Use 16px radii for Studio cards and 24px / 34px for pills
- Alternate white and `#f8f8fa` sections on marketing pages
- Declare the system UI stack rather than substituting a named font

### Don't
- Don't use violet in the web lobby's chrome; none was captured there
- Don't bring back the June record's decorative magenta; it was not rendered
- Don't stack heavy shadows; the strongest is a 20px, 20% glow
- Don't invent hover colours for buttons; none were recorded
- Don't present a system face as a ZEPETO brand typeface

## Voice & Tone

ZEPETO's voice is inviting and creator-first. The web lobby speaks in short Korean labels ("로그인", "ZEM 구매", "입장하기"); Studio speaks in short declarative sentences that end with a full stop and cast the reader as a creator.

| Context | Tone |
|---|---|
| Web lobby actions | Short and functional: "로그인", "ZEM 구매", "입장하기". |
| Studio headlines | Declarative, aspirational: "상상하는 모든 것. 제페토 스튜디오에서." |
| Creator invitations | Encouraging: "이제 나도 제페토 크리에이터.", "크리에이터의 상상은 월드가 된다." |
| Guidance | Plain and helpful: "개발자 가이드 확인은 필수." |
| Company | Big-picture: "현실의 한계를 넘어 상상 이상의 세상으로". |

**Voice samples (verbatim, opened 2026-09-30):**
- "상상하는 모든 것. 제페토 스튜디오에서." — Studio home hero.
- "크리에이터를 위한 제페토." — Studio home section headline.
- "크리에이터의 상상은 월드가 된다." — Studio world page hero.
- "제페토는 3D 아바타 기반 소셜 플랫폼으로, …" — web.zepeto.me About page.

**Forbidden register**: corporate stiffness, scarcity pressure, jargon that makes creating sound hard.

## Agent Prompt Guide

### Quick Color Reference
- Brand action: `#5c46ff` with `#ffffff` text
- Text: `#292930` (Studio), `#000008` (web lobby); descriptions `#5c5c61`; muted label `#47474d`
- Surfaces: `#ffffff`, `#f5f5f6` (utility buttons), `#f8f8fa` (sections, guide cards)
- Border: `#e0e0e1`

### Example Component Prompts
- "Create a ZEPETO Studio action: `#5c46ff` pill, 24px radius, 200 × 48, `#ffffff` 17px / 500 label, no shadow, at the foot of a white 320 × 416 card with 16px radius and 42px 32px 32px padding."
- "Create a hero pill for a dark hero: white, 34px radius, 68px tall, 0 34px padding, `#5c46ff` 22px / 700 label, shadow `rgba(0, 0, 0, 0.2) 0px 0px 20px 0px`."
- "Create a web lobby header: white bar with a `#f5f5f6` ZEM 구매 button (`#000000` 16px text) and a `#292930` 로그인 button (`#ffffff` 15px / 500 text), both 40px tall with 8px radius and 10px 16px padding."
- "Create a guide card: `#f8f8fa`, 16px radius, 36px 36px 64px padding, 22px / 700 `#292930` title, 17px `#5c5c61` text, and a `#5c46ff` 20px / 500 더 알아보기 link."

### Iteration Guide
1. Violet only for Studio actions and links
2. A monochrome lobby where content carries the colour
3. Weight, not typeface, for hierarchy
4. 8px utility, 16px cards, 24–34px pills
5. Soft, rare shadows

---

## Governance

### Known Gaps

- **Contrast, `guide-link`.** Text `#5c46ff` on `#00000000` measures 3.78:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
