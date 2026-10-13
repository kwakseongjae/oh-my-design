---
name: Buzzvil
colors:
  primary: '#f44336'
  on-primary: '#ffffff'
  black: '#000000'
  navy: '#0e171f'
  ink-slate: '#1c2b36'
  body: '#2a3f4d'
  secondary: '#3e5463'
  muted: '#5b7282'
  muted-alt: '#7a909e'
  faint: '#9fb1bd'
  surface: '#f2f5f7'
  surface-soft: '#f8f9fa'
  mist: '#dce3e8'
  white: '#ffffff'
typography:
  display-hero:
    fontSize: 78px
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: '-0.78px'
    use: 'Home hero headline (모두가 사랑하는 방식의 광고), 109.2px line; its fill is clipped to the text over the #0e171f hero, so no text colour is a token'
  display-about:
    fontSize: 76px
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: '-0.76px'
    use: Mission headline on /company/about_us (Boost our client growth in a way people love.), white, 106.4px line
  display-product:
    fontSize: 56px
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: '-0.56px'
    use: 'Product page headline on /monetize/buzzbenefit, #000000, 78.4px line'
  stat:
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: '-0.56px'
    use: Hero statistics on home (39%, x4, 82%), white
  section:
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: '-0.48px'
    use: 'Section headings on all three pages, white on dark bands and #000000 on light ones, 67.2px line'
  stat-value:
    fontSize: 48px
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: '-0.48px'
    use: Company figures on /company/about_us (9,000만+, 82%, 500개+, 4배)
  subsection:
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: '-0.36px'
    use: 'Feature headings on home and about (white on dark, #1c2b36 on light), 54px line'
  card-title:
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: '-0.32px'
    use: 'Ad-product card titles on home (노출형 →, SNS형 →), #000000, 44.8px line'
  lead:
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: '-0.24px'
    use: Hero subline on home, 36px line
  eyebrow:
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: '-0.2px'
    use: 'Red eyebrows over the ad-product cards (압도적인 클릭률) and the product page name (버즈베네핏), in #f44336'
  body-lg:
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: '-0.2px'
    use: 'Card descriptions on home, in #3e5463, 30px line'
  body:
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.64
    letterSpacing: '-0.18px'
    use: 'Reading copy on about and the product page, in #2a3f4d, 29.52px line'
  nav:
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: '-0.16px'
    use: Header navigation (Products, Technologies, Resources, Company, Career)
  button:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: '-0.16px'
    use: Header action labels (광고센터 바로가기, 문의하기)
  button-lg:
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: '-0.2px'
    use: Hero button labels (광고 상품 둘러보기, 광고 문의하기)
  caption:
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: '-0.12px'
    use: 'Group labels in the footer, in #9fb1bd, 19.2px line'
rounded:
  cta: 4px
  button: 8px
  feature: 12px
  card: 32px
spacing:
  cta-y: 12
  cta-x: 16
  hero-btn-y: 16
  hero-btn-x: 32
  card: 40
  card-top: 80
components:
  contact-button:
    type: button
    backgroundColor: '#f44336'
    textColor: '#ffffff'
    rounded: 4px
    padding: 12px 16px
    height: 44px
    typography: 16px / 400 / 25.6px Pretendard, letter-spacing -0.16px
    hover: lifts 4px (transform translateY(-4px)); colours unchanged
    pressed: lifts 4px, as hover
    states: transition all 0.4s ease; focus shows only the browser's default ring, so no brand focus style is declared
    use: 문의하기 with an arrow icon in the fixed header of all three pages (home capture 7, about and product page capture 6)
  adcenter-button:
    type: button
    backgroundColor: '#000000'
    textColor: '#ffffff'
    rounded: 4px
    padding: 12px 16px
    height: 44px
    typography: 16px / 400 / 25.6px Pretendard, letter-spacing -0.16px
    hover: lifts 4px (transform translateY(-4px))
    pressed: lifts 4px, as hover
    states: transition all 0.4s ease; focus shows only the browser's default ring
    use: 광고센터 바로가기 with an arrow icon in the fixed header, linking to the self-serve ad centre
  lang-toggle:
    type: button
    backgroundColor: transparent
    textColor: '#000000'
    border: '1.17647px solid #000000'
    rounded: 4px
    padding: 12px 16px
    height: 44px
    typography: 16px / 400 Pretendard
    hover: lifts 4px (transform translateY(-4px))
    pressed: lifts 4px, as hover
    states: 'focus (Tab #8) shows no change'
    use: ENG language switch at the end of the header
  nav-item:
    type: tab
    textColor: '#5b7282'
    height: 75px
    typography: 16px / 600 / 25.6px Pretendard, letter-spacing -0.16px
    hover: 'fg #000000'
    pressed: 'fg #000000'
    states: 'hover and pressed settle on #000000 (probe and bundle frames agree); focus (Tab #1) shows no change'
    use: Header navigation buttons (Products, Technologies, Resources, Company, Career), 56 x 75
  explore-button:
    type: button
    backgroundColor: '#f2f5f7'
    textColor: '#3e5463'
    border: '1.17647px solid #f2f5f7'
    rounded: 8px
    padding: 16px 32px
    height: 55px
    typography: 20px / 400 / 30px Pretendard, letter-spacing -0.2px
    hover: filter brightness(0.9)
    pressed: filter brightness(0.9)
    states: transition background-color, color 0.3s ease; focus shows only the browser's default ring
    use: 광고 상품 둘러보기 in the home hero, 204 x 55
  ghost-button:
    type: button
    backgroundColor: transparent
    textColor: '#f2f5f7'
    border: '1.17647px solid #f2f5f7'
    rounded: 8px
    padding: 16px 32px
    height: 55px
    typography: 20px / 400 / 30px Pretendard, letter-spacing -0.2px
    hover: bg rgba(242, 245, 247, 0.125), filter brightness(1.1)
    pressed: bg rgba(242, 245, 247, 0.125), filter brightness(1.1)
    states: transition background-color, color 0.3s ease; focus shows only the browser's default ring
    use: '광고 문의하기 beside the explore button, over the #0e171f hero'
  feature-card:
    type: button
    backgroundColor: '#dce3e8'
    rounded: 12px
    padding: 80px 40px 0px
    size: 500px x 588px
    states: rest on seven captured instances; no state frame, not probed
    use: Large selectable cards lower on /monetize/buzzbenefit (7 instances); their labels were not read
  product-link-card:
    type: card
    rounded: 32px
    padding: 40px
    size: 496px x 153px
    use: '버즈베네핏 → and 버즈부스터 → links on home, each on a white gradient fill (not a token) with a 36px / 700 title and a #7a909e line'
  about-card:
    type: card
    backgroundColor: '#f8f9fa'
    rounded: 8px
    size: 317px x 516px
    use: 'Advertise, Activate and Monetize cards under 브랜드의 성장 단계별 지원 on /company/about_us, with #7a909e labels and #1c2b36 32px titles'
  carousel-arrow:
    type: button
    backgroundColor: transparent
    border: '1.17647px solid #ffffff'
    rounded: 8px
    shadow: rgba(22, 34, 51, 0.12) 0px 4px 12px -4px
    size: 54px x 54px
    disabled: all four instances were disabled at capture
    states: disabled at rest only; no other state read
    use: Carousel arrows on home, two pairs (captures 18-19 at the ad-product carousel, 26-27 lower on the page); the only elements with a shadow
fonts:
  roles:
    sans: Pretendard
---

# Design System Inspiration of Buzzvil

## Overview

### Visual Theme & Atmosphere

Buzzvil (버즈빌) is a Korean ad-tech company built on reward advertising: brands reward users for engaging, and partner apps earn revenue by hosting that inventory. Its own history begins with the founding of the company in April 2012 and the HoneyScreen lock-screen app in January 2013. In 2016 it merged with Slidejoy, then the leading lock-screen company in the US, and by 2017 it described itself as the world's largest lock-screen ad platform, active in 30 countries. 버즈베네핏 took the model into in-app placements in 2018 and relaunched as a next-generation offerwall in October 2023, the same year the homepage was rebuilt to present Buzzvil as a reward-based full-funnel marketing platform. The newest chapter is AI: a targeting model (Performance Maximizer, 2024), AI 리뷰픽 review-summary ads and the self-serve 광고센터 (2025), and in January 2026 Olive Young cooperative ads. Today the company frames itself as "인터랙션 AI 에이전트의 혁신, 버즈빌" and cites 90 million cumulative users, 500+ premium partners and conversion four times that of ordinary ads.

The site speaks in one family, Pretendard, and in large, confident numbers. A white header carries two filled actions — black 광고센터 바로가기 and red `#f44336` 문의하기 — and an outlined ENG toggle, all at a crisp 4px radius; on hover they lift 4px. Below it, the home hero opens on a dark navy `#0e171f` field. The 78px ExtraBold headline "모두가 사랑하는 방식의 광고" is painted as a gradient clipped to the letters, which a same-day supplementary read shows as coral fading to pale blue-grey. The rest of the site keeps the same mood: white statistics at 56px, section headings at 48px bold, cool slate greys (`#1c2b36`, `#2a3f4d`, `#3e5463`, `#5b7282`, `#7a909e`, `#9fb1bd`) for text, and red eyebrows over the ad-product cards. Nearly everything is flat: of 515 recorded elements, only the four carousel arrows carry a shadow.

**Key Characteristics:**
- One red, `#f44336`, for the persistent contact action and for eyebrows; black `#000000` for the second header action
- Pretendard for every role: 78px / 800 hero, 48px / 700 sections, 16px / 600 navigation, all with tracking at -1% of the size
- Dark `#0e171f` hero under a white header; light `#f2f5f7` and `#dce3e8` fills for buttons and cards
- A cool slate text ladder from `#1c2b36` to `#9fb1bd`
- Small radii on actions (4px header, 8px hero buttons), large on cards (12px and 32px)
- Motion as a lift: header actions rise 4px over 0.4s on hover

### Primary tasks

- Contact Buzzvil about an advertising campaign
- Open the self-serve 광고센터 to run ads directly
- Choose an ad product by goal (노출형, SNS형, UA 특화형, 앱 유입형, 액션 유도형)
- Monetize a partner app with the 버즈베네핏 offerwall
- Read the site in English as an overseas partner

### Brand Narrative

Buzzvil was founded in April 2012 and launched HoneyScreen, a reward lock-screen app, in January 2013. Merging with the US lock-screen leader Slidejoy in 2016 made it global; by 2017 it was active in 30 countries, and acquisitions followed — 42Company (India and Pakistan) in 2018, the finance ad platform 핀크럭스 in 2020 and the reward ad-tech company 아바티 in 2022. Its products widened from lock screens to in-app placements (버즈베네핏, 2018; relaunched as an offerwall in 2023), point-based CRM (버즈부스터, 2022) and AI: the Performance Maximizer targeting model (2024), AI 리뷰픽 and the self-serve 광고센터 (2025). The 2023 homepage renewal marked its repositioning as a reward-based full-funnel marketing platform; today it calls itself an interaction-AI company.

Its mission reads "우리는 모두가 사랑하는 방식으로, 고객사의 성장을 촉진합니다." The careers page describes how the team works — responsible autonomy, a growth mindset, grit and one team; OKRs, company-wide meetings and English nicknames instead of titles. Design is part of that story: a 2019 post by Maxence Mauduit (Product Designer, CDO) explains that the team built its design system on Google's Material Design and chose minimalism as a key principle so a small team could serve partners in Korea, Japan and the US. The tech blog still publishes on it — a June 2026 post on a design system for AI agents, and a September 2026 post on designers shipping pull requests.

### Principles

1. **Advertising people love.** *UI implication:* lead with user benefit and a concrete figure, never urgency.
2. **One accent, one action.** *UI implication:* red marks the contact action and eyebrows; everything else stays neutral.
3. **Simplicity is key.** Buzzvil's design team names minimalism as a key principle. *UI implication:* one typeface, flat surfaces, few colours.
4. **Prove it with numbers.** *UI implication:* statistics get display-size type.
5. **Question convention.** "우리는 그 모든 것에 반문을 제기합니다." *UI implication:* confident, large type and bold dark bands rather than a conventional ad-network look. (An editorial reading.)

### Personas

*Personas below are fictional archetypes informed by publicly observable Buzzvil user segments (performance marketers, app publishers monetizing with reward ads, overseas partners), not individual people.*

**박지훈, 33, 서울.** A performance marketer at an e-commerce brand who buys reward-ad inventory and judges every channel by CTR and CVR. Trusts claims that come with figures.

**이서연, 29, 경기.** A product manager at a consumer app evaluating the 버즈베네핏 offerwall as a new revenue line. Wants clear documentation and an ad experience her users will not resent.

**Daniel Kim, 41, San Francisco.** A partnerships lead evaluating cross-border reward-ad supply. Uses the ENG toggle and looks for proof of scale.

## Colors

Every token below was read on 2026-09-30 from buzzvil.com, /company/about_us and /monetize/buzzbenefit by the deterministic collector, and state values by the fixed keyboard probe. The tokens describe Buzzvil's public website; the ad centre, SDKs and partner apps were not captured.

### Primary
- **Buzzvil Red** (`#f44336`): The fill of 문의하기, the contact action in the fixed header of all three pages (home capture 7, capture 6 on the other two), and the colour of the eyebrows over the ad-product cards and the 버즈베네핏 product name. It is the primary because it is the site's persistent primary action and its only accent; the black 광고센터 바로가기 beside it is a secondary route to the self-serve tool.
- **On Primary** (`#ffffff`): The 문의하기 and 광고센터 바로가기 labels.

### Neutral & Surface
- **White** (`#ffffff`): The fixed header; headings and statistics on dark bands.
- **Black** (`#000000`): The 광고센터 바로가기 fill, the ENG outline and label, the document default text colour and headings on light sections.
- **Navy** (`#0e171f`): The home hero field behind the ghost button; the hero headline computes it as its background colour under the clipped gradient. It also colours the footer links.
- **Surface** (`#f2f5f7`): The fill of 광고 상품 둘러보기 and the border and label of 광고 문의하기.
- **Surface Soft** (`#f8f9fa`): The Advertise / Activate / Monetize cards on the about page.
- **Mist** (`#dce3e8`): The large cards on the 버즈베네핏 page, and reading copy on its dark bands.

### Text
- **Ink Slate** (`#1c2b36`): Headings and timeline text on the about and product pages.
- **Body** (`#2a3f4d`): Reading copy at 18px on the about and product pages and in the home contact band.
- **Secondary** (`#3e5463`): Card descriptions on home and the 광고 상품 둘러보기 label.
- **Muted** (`#5b7282`): Header navigation at rest; eyebrows on the product page.
- **Muted Alt** (`#7a909e`): Small labels on dark bands, product-link descriptions and the about-card labels.
- **Faint** (`#9fb1bd`): Captions under the hero statistics and group labels in the footer.

### Brand assets, not tokens
- The hero headline's gradient, the translucent tints of the statistic cards and the white gradient of the product-link cards were read only in a supplementary pass; they are not tokens.
- The red Buzzvil logo was not measured; no logo colour is claimed.

## Typography

### Font Family
- **Live surface use**: `Pretendard` (515 observed uses, `loaded / high`) for every heading, paragraph, button and list item on all three pages, served from jsDelivr as the dynamic-subset build of `orioncactus/pretendard@v1.3.6`. The body computes `Pretendard, sans-serif`.
- **Official distributed font assets**: the files come from Pretendard's own distribution on GitHub (orioncactus) via jsDelivr. The LICENSE file, opened on 2026-09-30, states the SIL Open Font License 1.1 (copyright Kil Hyung-jin).
- **Official product use**: no Buzzvil page opened this session names its typeface; not claimed.
- **Declared only (no visible use)**: `Inter` (from `cdn.jotfor.ms`, a form embed) and `swiper-icons` (the carousel library's icon font), both with 0 observed uses.
- **Unresolved**: none of the observed families is unidentified.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Observed on |
|------|------|------|--------|-------------|----------|-------------|
| Display Hero | Pretendard | 78px | 800 | 109.2px (1.4) | -0.78px | Home hero headline |
| Display About | Pretendard | 76px | 800 | 106.4px (1.4) | -0.76px | About mission headline, white |
| Display Product | Pretendard | 56px | 800 | 78.4px (1.4) | -0.56px | 버즈베네핏 headline |
| Stat | Pretendard | 56px | 700 | 78.4px (1.4) | -0.56px | 39%, x4, 82% |
| Section | Pretendard | 48px | 700 | 67.2px (1.4) | -0.48px | Section headings |
| Stat Value | Pretendard | 48px | 800 | 67.2px (1.4) | -0.48px | About figures |
| Subsection | Pretendard | 36px | 700 | 54px (1.5) | -0.36px | Feature headings |
| Card Title | Pretendard | 32px | 700 | 44.8px (1.4) | -0.32px | Ad-product cards |
| Lead | Pretendard | 24px | 400 | 36px (1.5) | -0.24px | Hero subline |
| Eyebrow | Pretendard | 20px | 700 | 30px (1.5) | -0.2px | Red eyebrows |
| Body Large | Pretendard | 20px | 400 | 30px (1.5) | -0.2px | Card descriptions |
| Button Large | Pretendard | 20px | 400 | 30px (1.5) | -0.2px | Hero buttons |
| Body | Pretendard | 18px | 400 | 29.52px (1.64) | -0.18px | Reading copy, `#2a3f4d` |
| Nav | Pretendard | 16px | 600 | 25.6px (1.6) | -0.16px | Header navigation |
| Button | Pretendard | 16px | 400 | 25.6px (1.6) | -0.16px | Header actions |
| Caption | Pretendard | 12px | 500 | 19.2px (1.6) | -0.12px | Footer group labels |

### Principles
- **One family, weight does the work**: 800 for headlines, 700 for sections and figures, 600 for navigation, 400 for reading copy and buttons.
- **Tracking at -1%**: every measured style tracks at one hundredth of its size, from -0.78px at 78px to -0.12px at 12px.
- **Generous line heights**: 1.4 for display and section type, 1.5–1.64 for reading copy.

## Layout

### Spacing System
- Header actions: 12px 16px
- Hero buttons: 16px 32px
- Product-link cards: 40px all round
- Feature cards: 80px top, 40px sides

### Grid & Container
- A fixed 75px white header sits above every page; home adds a fixed announcement banner above it.
- Home: dark hero with headline, subline and two buttons, three statistic cards, then a goal-based ad-product carousel, alternating dark and light sections, product links, a contact band and the footer.
- About: a dark mission hero, company figures, the year-by-year history, three service cards and a contact prompt.
- Content sits in a centred column about 1020px wide.

### Whitespace Philosophy
- **Big type, open bands**: 48px section headings with 1.4 line height and wide vertical spacing between full-width bands.
- **Colour-band segmentation**: sections separate by fill, not by borders or shadows.

### Border Radius Scale
- Header actions (4px)
- Hero buttons, about cards and carousel arrows (8px)
- Feature cards (12px)
- Product-link cards (32px)

### Responsive Behavior

#### Breakpoints
Only the 1440 × 900 desktop viewport was captured. Borders compute as 1.17647px, which suggests the page is scaled; no breakpoint value was measured.

#### Touch Targets
- Hero buttons: 55px tall
- Carousel arrows: 54 × 54
- Header actions and ENG: 44px
- Header navigation: 75px tall

#### Collapsing Strategy
- Not captured.

#### Image Behavior
- Illustrations and statistic artwork sit flat on their bands.

## Elevation & Depth

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | 511 of 515 recorded elements |
| Band | Navy `#0e171f` field under white type | Home hero |
| Tint | `#f2f5f7`, `#f8f9fa`, `#dce3e8` fills | Buttons and cards |
| Soft shadow | `rgba(22, 34, 51, 0.12) 0px 4px 12px -4px` | The four carousel arrows only |

**Shadow Philosophy**: emphasis comes from the red action, the navy field and large type. The carousel arrows are the one exception to a flat system.

## Motion & Easing

The probe read the transitions the controls compute: the header actions and ENG use `all 0.4s ease` and lift 4px on hover and press; the hero buttons transition `background-color` and `color` over 0.3s with `ease` (their brightness filter is outside that list, so it changes instantly); the navigation items compute `all 0s`. Nothing else about motion (carousels, scroll effects) was measured; treat it as unspecified and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/buzzvil.json (capturedAt 2026-09-30T11:09:05Z), deterministic collector, 1440x900, logged out: buzzvil.com, /company/about_us, /monetize/buzzbenefit. States: fixed keyboard probe raw docs/research/2026-09-29-growth/raw/buzzvil-states-home.json.
- Hero gradient, band fills and label texts: a same-day supplementary headless read, logged in .verification.md; not used for tokens.
- §1, §10, §11 context: /company/about_us (mission, history), /career/how_we_work (values), tech.buzzvil.com (2019 design-system post, blog index), opened 2026-09-30.
- §3 licence: the Pretendard LICENSE on GitHub, opened 2026-09-30.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->

## Components

### Buttons

**Contact action (primary)**
- Background: `#f44336`
- Text: `#ffffff`, 16px / 400 / 25.6px, with an arrow icon
- Radius: 4px
- Padding: 12px 16px
- Height: 44px
- Hover: lifts 4px
- Pressed: lifts 4px
- States: `transition: all 0.4s ease`; focus shows only the browser's default ring
- Use: 문의하기 in the fixed header of every page

**Ad-centre action**
- Background: `#000000`
- Text: `#ffffff`, 16px / 400 / 25.6px, with an arrow icon
- Radius: 4px
- Padding: 12px 16px
- Height: 44px
- Hover: lifts 4px
- Use: 광고센터 바로가기 in the header

**Language toggle**
- Background: transparent
- Text: `#000000`
- Border: 1.17647px solid `#000000`
- Radius: 4px
- Padding: 12px 16px
- Height: 44px
- Hover: lifts 4px; focus shows no change
- Use: ENG

**Explore button**
- Background: `#f2f5f7`
- Text: `#3e5463`, 20px / 400 / 30px
- Radius: 8px
- Padding: 16px 32px
- Height: 55px
- Hover: brightness 0.9
- Use: 광고 상품 둘러보기 in the home hero

**Ghost button**
- Background: transparent
- Text: `#f2f5f7`
- Border: 1.17647px solid `#f2f5f7`
- Radius: 8px
- Padding: 16px 32px
- Height: 55px
- Hover: background `rgba(242, 245, 247, 0.125)` and brightness 1.1
- Use: 광고 문의하기 over the navy hero

**Carousel arrow**
- Background: transparent
- Border: 1.17647px solid `#ffffff`
- Radius: 8px
- Shadow: `rgba(22, 34, 51, 0.12) 0px 4px 12px -4px`
- Size: 54 × 54
- States: disabled at capture
- Use: Carousel arrows on home (two pairs, one at the ad-product carousel)

### Navigation

**Header item**
- Text: `#5b7282`, 16px / 600 / 25.6px
- Height: 75px
- Hover: `#000000`
- Pressed: `#000000`
- Use: Products, Technologies, Resources, Company, Career

### Cards

**Product-link card**
- Radius: 32px
- Padding: 40px
- Size: 496 × 153
- Use: 버즈베네핏 → and 버즈부스터 → on home

**About card**
- Background: `#f8f9fa`
- Radius: 8px
- Size: 317 × 516
- Use: Advertise, Activate, Monetize on the about page

**Feature card**
- Background: `#dce3e8`
- Radius: 12px
- Padding: 80px 40px 0px
- Size: 500 × 588
- Use: Seven large cards on the 버즈베네핏 page

---

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out pages of buzzvil.com plus fixed keyboard-probe state reads and first-party context)
**Tier 1 sources:** https://www.buzzvil.com/ ; https://www.buzzvil.com/company/about_us ; https://www.buzzvil.com/monetize/buzzbenefit ; https://www.buzzvil.com/career/how_we_work ; https://tech.buzzvil.com/blog/design-system-at-buzzvil
**Tier 2 sources:** not re-attempted on 2026-09-30; the June record found no Buzzvil entry on getdesign.md (404) or styles.refero.design; no Tier 2 value used
**Conflicts unresolved:** none

### States

Only these states were observed; nothing else is specified here.

| State | Observation |
|---|---|
| **Hover / pressed (header actions, ENG)** | Lift 4px (`translateY(-4px)`), colours unchanged, `transition: all 0.4s ease`. |
| **Hover / pressed (header navigation)** | `#5b7282` → `#000000`, settled (probe and bundle frames agree). |
| **Hover / pressed (explore button)** | `filter: brightness(0.9)`. |
| **Hover / pressed (ghost button)** | Background `rgba(242, 245, 247, 0.125)` and `filter: brightness(1.1)`. |
| **Focus** | The four links show only the browser's default ring; ENG and navigation show no change. No brand focus style exists. |
| **Disabled** | The four carousel arrows were `disabled` at capture. |

Error, empty, loading and success states were not captured and are not described.

## Do's and Don'ts

### Do
- Keep `#f44336` for the contact action and eyebrows; pair it with a black secondary action
- Set everything in Pretendard with tracking at -1% of the size
- Use 800 for headlines, 700 for sections, 600 for navigation
- Use the slate greys for text hierarchy on light sections
- Lift header actions 4px on hover over 0.4s
- Keep action radii small (4px, 8px) and card radii large (12px, 32px)

### Don't
- Don't add shadows to cards or buttons; only the carousel arrows carry one
- Don't use red for large fills or backgrounds
- Don't render Pretendard with another face in its place
- Don't invent focus styles; the site shows only the browser's default ring
- Don't set headlines in light weights
- Don't use pill radii on actions; none was observed

## Voice & Tone

Buzzvil's voice is **confident, human-centred and proven in numbers**. It frames advertising as something people welcome and backs each claim with a figure.

| Context | Tone |
|---|---|
| Hero | Optimistic and declarative. "모두가 사랑하는 방식의 광고" |
| Positioning | Technology-forward. "인터랙션 AI 에이전트를 기반으로, 고객에게 필요한 초개인화 된 경험을 설계합니다." |
| Proof | Metric first. "39% 리워드 광고로 만드는 평균 클릭률 (CTR)", "x4 일반 광고 대비 리워드 광고 전환율 (CVR)" |
| Calls to action | Direct. "문의하기", "광고센터 바로가기", "버즈빌에 지금 문의하세요" |
| Culture | Challenging convention. "우리는 정해진 방식대로 일하지 않습니다." |

**Voice samples (read on first-party pages, 2026-09-30):**
- "Boost our client growth in a way people love." — mission, /company/about_us.
- "'마케팅은 당연히 이렇게 해야해'라는 고정관념, '광고는 늘 이렇지'라는 편견, 우리는 그 모든 것에 반문을 제기합니다." — /company/about_us.
- "Simplicity is key. By keeping things simple, more people will understand what you want to express." — Buzzvil design-system post (2019).

**Forbidden register**: interruption-framed ad language, dark-pattern urgency, superlatives without a figure.

## Agent Prompt Guide

### Quick Color Reference
- Primary action and eyebrows: `#f44336` with `#ffffff` labels
- Secondary action: `#000000` with `#ffffff`
- Hero field: `#0e171f`; header `#ffffff`
- Light fills: `#f2f5f7`, `#f8f9fa`, `#dce3e8`
- Text: `#000000`, `#1c2b36`, `#2a3f4d`, `#3e5463`, `#5b7282`, `#7a909e`, `#9fb1bd`

### Example Component Prompts
- "Create a white header with Pretendard 16px / 600 navigation in `#5b7282` (hover `#000000`) and two actions at 4px radius, 12px 16px padding, 44px tall: black `#000000` and red `#f44336`, white 16px labels with arrow icons; both lift 4px on hover over 0.4s."
- "Build a dark hero on `#0e171f`: a 78px Pretendard headline at weight 800 with -0.78px tracking and 1.4 line height, a 24px subline, and two 55px buttons at 8px radius — `#f2f5f7` fill with a `#3e5463` label, and a ghost with a `#f2f5f7` border and label."
- "Design a product card row: 32px Pretendard titles at weight 700 in `#000000`, 20px red `#f44336` eyebrows at weight 700, and 20px `#3e5463` descriptions."

### Iteration Guide
1. Red `#f44336` for contact and eyebrows, black for the second action
2. Pretendard only; weight and size carry the hierarchy
3. Tracking at -1% of the size
4. Navy hero, white header, light tinted cards
5. Small action radii, large card radii
6. No shadows except the carousel arrows

---

## Governance

### Known Gaps

- **Contrast, `contact-button`.** Text `#ffffff` on `#f44336` measures 3.68:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `lang-toggle`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
