---
name: Hwahae
colors:
  ink: '#000000'
  ink-soft: '#111111'
  label: '#3d3d3d'
  muted: '#666666'
  faint: '#999999'
  placeholder: '#aaaaaa'
  hairline: '#e8e8e8'
  canvas: '#ffffff'
  surface: '#f7f7f7'
  on-media: '#ffffff'
  award-accent: '#82e6e6'
  info-ink: '#3750be'
  info-tint: '#ebf5ff'
typography:
  section:
    fontSize: 18px
    fontWeight: 600
    letterSpacing: '-0.2px'
    use: Home section title (h2.hds-text-title-medium, line height computes normal)
  title-large:
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: '-0.2px'
    use: Awards page title text (p.hds-text-title-large)
  nav:
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.53
    use: Top navigation, selected item; unselected items compute 400
  button:
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.53
    use: Awards outline button label
  card-title:
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.5
    use: White label over category imagery on home (h3)
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Page body text
  label:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    use: Header search field text
  caption:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    use: Footer chip and note text
rounded:
  xs: 4px
  sm: 8px
  tile: 12px
  md: 16px
  full: 99999px
spacing:
  chip-x: 8
  tile: 12
  control-x: 16
  card: 16
  icon-button: 10
  header-x: 20
components:
  nav-tab:
    type: tab
    backgroundColor: transparent
    textColor: '#111111'
    typography: 15px / 400 / 23px Pretendard Variable
    selected: '15px / 600 on the current section: 홈 on home (capture 8), 어워드 on the awards page (capture 4)'
    states: selected variant read from rest values only; no pointer or focus frame was recorded for these links
    use: Top navigation link (홈, 랭킹, 어워드) at home::[data-omd-capture="9"], 26 x 23; the same three links repeat on the awards page
  language-button:
    type: button
    backgroundColor: transparent
    textColor: '#111111'
    rounded: 8px
    padding: 10px
    height: 44px
    typography: 16px / 400 / 24px Pretendard Variable
    states: 'hover and pressed frames change only border-color (#e8e8e8 to #111111) while the computed border width stays 0px, so nothing visible changes and no state value is declared'
    use: Header language selector (한국어) at home::[data-omd-capture="3"], 108 x 44
  footer-login-chip:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#3d3d3d'
    border: '1px solid #e8e8e8'
    rounded: 4px
    padding: 0px 8px
    height: 24px
    typography: 12px / 400 / 18px Pretendard Variable
    states: rest on home, rankings and awards; no state frame
    use: 24px outline chip at the foot of each page (home::[data-omd-capture="106"], 49 x 24); the page text places 로그인 at this position
    pressed: 'bg #f7f7f7 (:hover + :active)'
    focus: no visible change (measured 2026-10-16) on :focus-visible
  footer-info-toggle:
    type: button
    backgroundColor: transparent
    textColor: '#3d3d3d'
    rounded: 4px
    padding: 0px 8px
    height: 24px
    typography: 12px / 400 / 18px Pretendard Variable
    states: rest on all three pages; no state frame
    use: Footer text button (home::[data-omd-capture="98"], 89 x 24) whose six-character label the page text gives as 사업자 정보
  dark-block-button:
    type: button
    backgroundColor: '#3d3d3d'
    rounded: 8px
    size: 344px x 52px
    states: rest only; no state frame
    use: Full-width dark button on home (home::[data-omd-capture="108"], class bg-gray-850); its label sits in a child that was not captured, so no text colour is claimed
  ranking-card:
    type: card
    backgroundColor: '#ffffff'
    rounded: 8px
    padding: 16px
    shadow: rgba(0, 0, 0, 0.08) 0px 2px 8px 0px
    size: 560px x 112px
    use: Rankings list card (li.shadow-card) on the rankings page
  award-card:
    type: card
    backgroundColor: '#ffffff'
    rounded: 16px
    shadow: rgba(0, 0, 0, 0.08) 0px 2px 8px 0px
    size: 560px x 284px
    use: Awards page section card (div.rounded-16.shadow-card, six captured)
  award-outline-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#3d3d3d'
    border: '1px solid #e8e8e8'
    rounded: 8px
    padding: 0px 16px
    height: 44px
    typography: 15px / 600 / 23px Pretendard Variable
    hover: 'bg #f7f7f7'
    pressed: 'bg #f7f7f7'
    states: 'rest, hover and pressed; the hover and pressed frames of both sibling buttons (capture 14, 21) read #f7f7f7; focus is not declared from the capture'
    use: Full-width outline button on the awards page (surface-3::[data-omd-capture="14"], 528 x 44)
  award-tint-button:
    type: button
    backgroundColor: '#ebf5ff'
    textColor: '#3750be'
    rounded: 8px
    padding: 0px 16px
    height: 44px
    typography: 15px / 600 / 23px Pretendard Variable
    states: rest only; no state frame
    use: Blue-tint full-width button near the end of the awards page (surface-3::[data-omd-capture="51"], 520 x 44)
  award-category-tile:
    type: card
    backgroundColor: '#ffffff'
    border: '1px solid #e8e8e8'
    rounded: 12px
    padding: 12px
    size: 88px x 124px
    use: Awards category tile link, ten captured in two rows (surface-3::[data-omd-capture="8"])
  banner-card:
    type: card
    rounded: 16px
    size: 560px x 332px
    use: Home carousel banner link (a.rounded-16 at home::[data-omd-capture="11"]); the imagery carries the colour
  product-row:
    type: listItem
    backgroundColor: '#ffffff'
    textColor: '#000000'
    size: 320px x 80px
    typography: 16px / 400 / 24px Pretendard Variable
    use: Ranking product row (li.bg-white w-[320px]); 44 captured on home and rankings
  search-field:
    type: input
    textColor: '#aaaaaa'
    height: 21px
    typography: 14px / 400 / 21px Pretendard Variable
    states: the home field carries the disabled attribute (it opens /search rather than accepting text); no hover or focus frame
    use: Header search field text (home::[data-omd-capture="6"], 496 x 21) inside a rounded wrapper link whose own styles were not captured
fonts:
  roles:
    product: Pretendard Variable
---

# Design System Inspiration of Hwahae

## Overview

### Visual Theme & Atmosphere

Hwahae (화해) is Korea's cosmetics-information platform: ingredient lists, real-user reviews, rankings, an annual awards programme and purchase in one service, operated by Hwahae Global Inc. (화해글로벌). Its product-design team dates the service to 2013, when it set out to fix the information asymmetry of Korean cosmetics — shoppers could not see what was in a product or trust the box — and describes how it grew from ingredient lookup into makeup, inner beauty, sample trials, ingredient look-alikes, reviews and purchase. Its own newsroom now frames it as a K-beauty acceleration platform: in June 2026 it reported 2 million monthly users across Korea and abroad, with the global web (English, Japanese, Chinese, Vietnamese and Spanish) at 1.2 million after growing more than 800% in a year, and over 10 million real-user reviews behind its rankings.

The brand expression is split on purpose. Identity lives in the turquoise flower mark and the photography; the web chrome is a quiet, index-like monochrome. The captured pages set black (`#000000`) text on a soft grey page (`#f7f7f7`), stack white (`#ffffff`) cards and rows on it, and draw the few edges they need with a `#e8e8e8` hairline. Navigation and utility labels soften to `#111111`, chip labels to `#3d3d3d`, and a `#666666` → `#999999` → `#aaaaaa` ladder carries notes and the search field. The only raised surface is one light card shadow, `rgba(0, 0, 0, 0.08) 0px 2px 8px 0px`, used on ranking and award cards. Everything is set in Pretendard Variable, and the whole desktop page is a 560px column centred on the window — the web reads as the app, held in place.

The current evolution is systemic. In January 2023 the product-design team committed to a design system — a Foundation of colour, typography, grid, radius and spacing feeding components and templates — and the live DOM still carries its `hds-` utility namespace (for example `hds-rounded-8`, `hds-text-title-medium`). The awards surface (화해 어워드) shows the same system stretched to a campaign: 16px-radius shadow cards, 12px-radius category tiles, a mint `#82e6e6` heading, and a pale-blue `#ebf5ff` action with `#3750be` text. The logo turquoise itself (`#00d5ce`, from the official OG image) is identity rather than a UI token; none of the three captured pages renders it on a sampled element.

**Key Characteristics:**
- Monochrome chrome — `#000000` text, `#111111` navigation, `#3d3d3d` chip labels — on a `#f7f7f7` page with `#ffffff` cards
- One elevation: `rgba(0, 0, 0, 0.08) 0px 2px 8px 0px` on ranking and award cards; `#e8e8e8` hairlines elsewhere
- Pretendard Variable everywhere, served as the 1.3.9 variable dynamic subset from cdnjs
- A dense app scale: 18px / 600 section titles, 16px body, 15px navigation and buttons, 12px notes
- Radii of 4px (chips), 8px (buttons and ranking cards), 12px (award tiles), 16px (banners and award cards) and full round
- A 560px centred column on desktop — the web renders the app's layout rather than a wide site
- `hds-` class namespace from the Hwahae Design System adopted in 2023
- Turquoise is the logo's colour, not the interface's

### Primary tasks

- Check a product's ingredient list and rating before buying
- Find products ranked for your own skin type or age group
- Browse the rankings that Hwahae users chose themselves
- See which products won the season's Hwahae Awards
- Read Korean users' reviews from abroad through the global web

### Brand Narrative

Hwahae began in **2013** as a service to resolve the information asymmetry of Korean cosmetics, making ingredient lists and real reviews readable so people could choose on evidence rather than advertising. Over its first decade it grew into a full beauty platform covering makeup, inner beauty, sample trials, ingredient look-alikes, reviews and purchase. (Source: Hwahae product-design team, "사용 가능한 진짜 디자인 시스템을 만드는 여정", official blog, 2023-08-03.)

The same post documents the design language's maturation. Ten years of fast experiments had left legacy screens and page-by-page drift in colour and layout; in **January 2023** the team decided to adopt a design system, built as a Foundation layer (colour, typography, grid, radius, spacing) that components and templates build on. The `hds-` classes on the captured pages are that system in production.

The company, Hwahae Global Inc., now describes Hwahae as a platform that supports K-beauty brands from domestic growth to overseas launch. Its June 2026 newsroom post reports 2 million monthly users, a global web in five languages that overtook domestic app and web users for the first time, more than 10 million real-user reviews, and plans for live commerce and localised content. The half-yearly Hwahae Awards, captured here as the awards page, turn that review data into a campaign surface.

What Hwahae's design refuses, visible on the surface: the glossy, colour-saturated chrome of beauty marketing. What it embraces: a quiet neutral frame that lets product imagery and user data lead, and a documented system that keeps a content-heavy product consistent.

### Principles

1. **Decode, don't sell.** Hwahae exists to make cosmetics legible. *UI implication:* lead with data — rank, score, review count, ingredients — and keep chrome neutral.
2. **User evidence over brand voice.** Rankings are framed as chosen by Hwahae users. *UI implication:* never visually privilege a brand without disclosure; keep product rows uniform (`#ffffff`, 16px / 400 `#000000`).
3. **Imagery carries colour, chrome stays quiet.** *UI implication:* `#f7f7f7` page, white cards, monochrome text; photography is the colour layer.
4. **Identity in the mark.** The turquoise belongs to the logo. *UI implication:* do not spread it onto controls.
5. **Consistency through a real system.** *UI implication:* reuse the radius ladder (4 / 8 / 12 / 16) and the single card shadow rather than inventing per page.
6. **Flat and fast.** *UI implication:* hairlines and one soft shadow keep dense ranking content quick to scan.

### Personas

*Personas below are fictional archetypes informed by publicly observable Hwahae user segments (Korean beauty shoppers comparing ingredients and reviews, and overseas K-beauty shoppers on the global web), not individual people.*

**이서연, 26, 서울.** Checks every new product's ingredient list and Hwahae rating before buying. Distrusts brand marketing; trusts the score and the volume of real reviews.

**박지호, 33, 경기.** Sensitive, acne-prone skin. Relies on skin-type rankings ("내 피부에 꼭 맞는 제품 랭킹") to avoid trial and error, and values a calm, data-first interface.

**Mai, 24, Ho Chi Minh City.** Follows K-beauty and reads Korean users' reviews through the global web before ordering. Needs the ranking and review layout to read without Korean.

## Colors

Every token below was read by the deterministic collector on 2026-09-30 from the public home, rankings and awards pages.

### Ink & Text
- **Ink** (`#000000`): Body text and headings; the page body computes it on all three pages.
- **Ink Soft** (`#111111`): Top navigation links, the language selector and awards title text.
- **Label** (`#3d3d3d`): Chip and outline-button labels (footer chips, awards outline buttons).
- **Muted** (`#666666`): Secondary notes (`p.hds-text-gray-secondary`) and awards footer links.
- **Faint** (`#999999`): Tertiary notes and footer copy (`text-gray-tertiary`).
- **Placeholder** (`#aaaaaa`): The header search field text and search icon on home.

### Surface & Lines
- **Surface** (`#f7f7f7`): The page background behind the 560px column; also the hover fill of the awards outline button.
- **Canvas** (`#ffffff`): Cards, ranking rows, chips and tiles.
- **On Media** (`#ffffff`): Labels set over category imagery (home `h3`).
- **Hairline** (`#e8e8e8`): The 1px border on outline buttons, the footer chip and awards tiles.

### Campaign accents (awards page)
- **Award Accent** (`#82e6e6`): Mint section heading on the awards page (one element) — the closest the captured interface comes to the brand turquoise.
- **Info Ink** (`#3750be`) on **Info Tint** (`#ebf5ff`): The blue-tint action near the end of the awards page.

### Identity colour outside the token set
- **Logo turquoise** (`#00d5ce`): The flower mark, pixel-sampled from the official OG image (`static.hwahae.co.kr/og/OG_1200.png`) in the June 2026 record. It is a brand-asset value and not a UI token: no sampled element on the three captured pages renders it. Under the catalogue rule of 2026-09-30, `primary_color` must be a colour the product surface renders in a primary role, so the catalogue's primary is the home page's full-width dark action `#3d3d3d` (344 × 52, 8px radius, `home::[data-omd-capture="108"]`), and the turquoise stays here as the logo's colour.
- The June 2026 inspection also counted rating-star amber (`#ffaa3c`), a teal (`#00a5aa`), a blue (`#467dff`), a coral (`#ff5555`), a pale mint (`#eefbfb`) and a `#d8d8d8` divider on the home page. The 2026-09-30 collector samples block elements, controls and headings rather than every inline span, and did not record any of them, so they are history in `.verification.md`, not tokens.

## Typography

### Font Family
- **Product web, live use**: `Pretendard Variable` — the computed family of body, headings, buttons, inputs and list items on all three pages (352 observed uses), loaded from `cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/variable/woff2-dynamic-subset/`. Fallback stack: `-apple-system`, `system-ui`, `Apple SD Gothic Neo`, `SF pro display`, `Noto Sans KR`, `Roboto`, `sans-serif`.
- **Declared only**: static `Pretendard` faces from `cdn.jsdelivr.net/npm/pretendard@1.3.9` are declared in the page CSS but no visible text resolves to them.
- **Licence**: Pretendard is Kil Hyung-jin's typeface, licensed under the SIL Open Font License 1.1 with the Reserved Font Name 'Pretendard' (repository LICENSE). This is licence context, not a Hwahae brand-font claim.
- **Other domain**: the official blog (`blog.hwahae.co.kr`) was observed in June 2026 in `Spoqa Han Sans`. The blog is a separate evidence domain and was not captured on 2026-09-30, so it contributes no token here.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Observed on |
|------|------|------|--------|-------------|----------------|-------------|
| Title Large | Pretendard Variable | 20px | 600 | 28px (1.4) | -0.2px | Awards title text (`p.hds-text-title-large`, `#111111`) |
| Section Title | Pretendard Variable | 18px | 600 | normal | -0.2px | Home section heads (`h2.hds-text-title-medium`) |
| Nav Link | Pretendard Variable | 15px | 600 selected / 400 | 23px (1.53) | normal | 홈 / 랭킹 / 어워드 |
| Button | Pretendard Variable | 15px | 600 | 23px (1.53) | normal | Awards outline and tint buttons |
| Card Title | Pretendard Variable | 14px | 600 | 21px (1.5) | normal | White labels over category imagery |
| Body | Pretendard Variable | 16px | 400 | 24px (1.5) | normal | Page body, ranking rows |
| Label | Pretendard Variable | 14px | 400 | 21px (1.5) | normal | Header search field |
| Caption | Pretendard Variable | 12px | 400 | 18px (1.5) | normal | Footer chips and notes |

### Principles
- **One family, weight as hierarchy**: 600 marks titles, the selected navigation item and button labels; 400 carries body, unselected navigation and notes. No captured text uses 700.
- **App-dense scale**: the largest measured product text is 20px; section heads stop at 18px.
- **Slight negative tracking on titles only**: -0.2px on 18px and 20px titles; body and labels stay at normal tracking.

## Layout

### Spacing System
- Chip inset: 8px horizontal (footer chips)
- Icon and utility buttons: 10px all round (language selector, a 44 × 44 header icon button)
- Tiles: 12px (award category tiles)
- Controls and cards: 16px (outline-button inset, ranking-card padding)
- Header inset: 20px (the app banner row)
- The collector's padding census on these pages is led by 16px, then 8px and 12px, then 10px and 20px.

### Grid & Container
- A single 560px column centred on the 1440px desktop window: ranking cards, award cards, banners and footer notes all measure 560px wide.
- Product rows run in 320px-wide rows inside horizontally scrolling groups.
- The grey `#f7f7f7` page frames the white column content.

### Whitespace Philosophy
- **Imagery carries colour, chrome stays quiet**: neutral page, white cards, black text — product photography is the loudest layer.
- **Dense but held**: an app's information density inside a narrow column, rather than a wide marketing layout.

### Border Radius Scale
- 4px: footer chips
- 8px: outline buttons, the language selector, ranking cards
- 12px: award category tiles
- 16px: banner cards and award cards
- Full (99999px): the round carousel arrow button

### Responsive Behavior

#### Breakpoints
Only the 1440 × 900 desktop viewport was captured. At that width the site already renders its mobile-width 560px column; no other breakpoint was measured.

#### Touch Targets
- Header utility buttons: 44px tall (language selector, a 44 × 44 icon button)
- Awards outline and tint buttons: 44px tall and full column width
- Footer chips: 24px tall

#### Collapsing Strategy
- The column layout is the same on the three captured pages; how it changes on a phone was not measured.

#### Image Behavior
- Banner imagery sits in 16px-radius, 560 × 332 links; category imagery carries white 14px / 600 labels.

## Elevation & Depth

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Page, rows, text, most controls |
| Hairline | 1px solid `#e8e8e8` border | Outline buttons, footer chip, award tiles |
| Card | `rgba(0, 0, 0, 0.08) 0px 2px 8px 0px` | Ranking cards and award cards |

**Shadow Philosophy**: the card shadow computes as three layers — two transparent zero-size ring layers followed by `rgba(0, 0, 0, 0.08) 0px 2px 8px 0px` — so only the last one draws. It is the only elevation on the three pages; everything else separates by the grey page, white fills and hairlines.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.card`: `rgba(0, 0, 0, 0.08) 0px 2px 8px 0px`

## Motion & Easing

The collector reads computed style, not animation, so no duration or easing is measured. Class names hint at motion without timing it: the 29 × 29 home `h1` carries `transition-[top] duration-300`, and the dark block button's class list includes a transition. Treat motion as unspecified rather than borrowing values from elsewhere, and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/hwahae.json (capturedAt 2026-09-30T06:12:41.923Z), deterministic collector, 1440x900, logged out, three public pages: home, /rankings, /awards/home (redirected to /awards/home/2026).
- §1 and §11 company facts: blog.hwahae.co.kr/all/tech/13236 (2023-08-03, product-design team) and blog.hwahae.co.kr/all/newsroom/news/15569 (2026-06-09 newsroom). Both opened 2026-09-30.
- June 2026 values not re-observed are recorded in .verification.md as history, not tokens.
- Personas are fictional archetypes. Interpretive readings (e.g. "imagery carries colour") are editorial.
-->

## Components

### Navigation

**Top navigation link**
- Background: transparent
- Text: `#111111`
- Font: 15px / 400 / 23px Pretendard Variable
- Selected: 15px / 600 (홈 on home, 어워드 on the awards page)
- States: selected variant from rest values only; no pointer or focus frame was recorded
- Use: 홈, 랭킹, 어워드 links in the header of every captured page

**Language selector**
- Background: transparent
- Text: `#111111`
- Radius: 8px
- Padding: 10px
- Height: 44px
- Font: 16px / 400 / 24px Pretendard Variable
- States: the hover and pressed frames change only border-color, `#e8e8e8` to `#111111`, while the computed border width stays 0px — nothing visible changes, so no state value is declared
- Use: 한국어 selector in the header, 108 × 44

### Buttons

**Awards outline button**
- Background: `#ffffff`
- Text: `#3d3d3d`
- Border: 1px solid `#e8e8e8`
- Radius: 8px
- Padding: 0px 16px
- Height: 44px
- Font: 15px / 600 / 23px Pretendard Variable
- Hover: background `#f7f7f7`
- Pressed: background `#f7f7f7`
- States: both sibling buttons (capture 14 and 21) settle on `#f7f7f7` in the hover and pressed frames; focus is not declared from the capture
- Use: full-width outline action on the awards page, 528 × 44

**Awards tint button**
- Background: `#ebf5ff`
- Text: `#3750be`
- Radius: 8px
- Padding: 0px 16px
- Height: 44px
- Font: 15px / 600 / 23px Pretendard Variable
- States: rest only; no state frame
- Use: blue-tint full-width action near the end of the awards page, 520 × 44

**Dark block button**
- Background: `#3d3d3d`
- Radius: 8px
- Size: 344 × 52
- States: rest only; no state frame
- Use: full-width dark button on home; its label sits in a child that was not captured, so no text colour is given

**Footer chip**
- Background: `#ffffff`
- Text: `#3d3d3d`
- Border: 1px solid `#e8e8e8`
- Radius: 4px
- Padding: 0px 8px
- Height: 24px
- Font: 12px / 400 / 18px Pretendard Variable
- States: rest on all three pages; no state frame
- Use: 24px outline chip at the foot of each page, where the page text reads 로그인

**Footer text button**
- Background: transparent
- Text: `#3d3d3d`
- Radius: 4px
- Padding: 0px 8px
- Height: 24px
- Font: 12px / 400 / 18px Pretendard Variable
- States: rest on all three pages; no state frame
- Use: 사업자 정보 toggle in the footer, 89 × 24

### Inputs & Forms

**Header search field**
- Text: `#aaaaaa`
- Height: 21px (the text field inside a rounded wrapper link)
- Font: 14px / 400 / 21px Pretendard Variable
- States: the field carries the disabled attribute on home because it opens the search page rather than accepting text; no hover or focus frame
- Use: header search entry, 496 × 21

### Cards & Containers

**Ranking card**
- Background: `#ffffff`
- Radius: 8px
- Padding: 16px
- Shadow: `rgba(0, 0, 0, 0.08) 0px 2px 8px 0px`
- Size: 560 × 112
- Use: list card on the rankings page (`li.shadow-card`)

**Award card**
- Background: `#ffffff`
- Radius: 16px
- Shadow: `rgba(0, 0, 0, 0.08) 0px 2px 8px 0px`
- Size: 560 × 284
- Use: section card on the awards page (six captured)

**Award category tile**
- Background: `#ffffff`
- Border: 1px solid `#e8e8e8`
- Radius: 12px
- Padding: 12px
- Size: 88 × 124
- Use: category tile link on the awards page, ten captured in two rows

**Banner card**
- Radius: 16px
- Size: 560 × 332
- Use: home carousel banner link; the photography carries the colour

**Product row**
- Background: `#ffffff`
- Text: `#000000`
- Size: 320 × 80
- Font: 16px / 400 / 24px Pretendard Variable
- Use: ranking product row, 44 captured on home and rankings

---

**Verified:** 2026-09-30 (deterministic collector capture of three public product-web pages, logged out, plus first-party context)
**Tier 1 sources:** https://www.hwahae.co.kr/ ; https://www.hwahae.co.kr/rankings ; https://www.hwahae.co.kr/awards/home/2026 ; https://blog.hwahae.co.kr/all/tech/13236 ; https://blog.hwahae.co.kr/all/newsroom/news/15569
**Tier 2 sources:** getdesign.md/hwahae (HTTP 200; the served page contains no occurrence of the name) and styles.refero.design/?q=hwahae (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

### States

Only these states were observed on the three captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Selected navigation** | The current section's link computes 15px / 600; the others 400. Colour stays `#111111`. |
| **Hover and pressed (awards outline button)** | Background `#ffffff` → `#f7f7f7` on both sibling buttons. |
| **Language selector hover** | border-color changes to `#111111` while the border width is 0px — no visible change. |
| **Disabled search field** | The header field is disabled on home and computes `#aaaaaa`; it acts as an entry to search. |
| **Notice layer** | A dismissible notice (`공지 닫기`) and banner (`배너 닫기`) sat over home at load; the collector closed them before measuring. |

Focus rings, error, empty, loading and success treatments were not captured and are not described.

Live state probe, 2026-10-16 (`https://www.hwahae.co.kr/`), `footer-login-chip`: pressed — bg #f7f7f7; focus — no visible change (measured 2026-10-16).

## Do's and Don'ts

### Do
- Set the page on `#f7f7f7` with `#ffffff` cards and rows so photography stays loudest
- Use Pretendard Variable for all product text, with 600 for titles and the selected navigation item
- Keep text black (`#000000`), navigation `#111111` and chip labels `#3d3d3d`
- Separate with `#e8e8e8` hairlines and the single `rgba(0, 0, 0, 0.08) 0px 2px 8px 0px` card shadow
- Use 8px radius on buttons and ranking cards, 16px on banners and award cards, 4px on chips
- Hold the layout in a narrow centred column, as the live web does
- Treat the turquoise flower mark as the logo, not as an interface fill

### Don't
- Don't paint controls in the logo turquoise — no captured control uses it
- Don't stack heavy or coloured shadows; there is one light card shadow
- Don't use bold 700 in product text; the measured hierarchy stops at 600
- Don't set the page pure white edge to edge — the grey frame is part of the look
- Don't mix the blog's Spoqa Han Sans into product screens
- Don't invent hover colours for controls that recorded none; only the awards outline button has a measured hover

## Voice & Tone

Hwahae's voice is **trustworthy, plain-spoken and evidence-first** — a guide that turns an opaque, marketing-heavy category into ingredients, real reviews and rankings. Copy leans on user data rather than brand superlatives: rankings are "chosen directly by Hwahae customers", sections are organised by rising products, category, skin type, age and brand, and the rankings page promises daily updates.

| Context | Tone |
|---|---|
| Section titles | Plain, data-framed. "급상승 랭킹", "내 피부에 꼭 맞는 제품 랭킹", "나이대별 추천", "요즘 뜨는 브랜드". |
| Rankings | Neutral and concrete: rank, product, score and review count. |
| CTAs | Low-pressure and helpful. "화해 앱에서 더 편리하게", "전체보기". |
| Newsroom | Factual, figure-led company news. |
| Blog (engineering and design) | Reflective, first-person, craft-oriented. |

**Voice samples (verbatim, opened 2026-09-30):**
- "화장품 정보는 화해 - 화장품 성분과 정보, 리뷰 확인하고 구매 하세요" — home page title.
- "화해 고객들이 직접 선택한 랭킹" — home section link.
- "지금 인기있는 화장품 추천 | 화해는 매일 업데이트" — rankings page title.
- "사용 가능한 진짜 디자인 시스템을 만드는 여정" — official blog, product-design team.

**Forbidden register**: cosmetic-marketing superlatives, unverifiable efficacy claims, fear-based skin pitches and unexplained jargon. The service exists to explain, not to dazzle.

## Agent Prompt Guide

### Quick Color Reference
- Page: `#f7f7f7`; cards and rows: `#ffffff`
- Text: `#000000`; navigation `#111111`; chip labels `#3d3d3d`
- Notes: `#666666`, `#999999`; search text `#aaaaaa`
- Hairline: `#e8e8e8`
- Awards accents: mint heading `#82e6e6`; tint action `#ebf5ff` with `#3750be`
- Logo only (not a UI fill): `#00d5ce`

### Example Component Prompts
- "Create a ranking card: white `#ffffff`, 8px radius, 16px padding, shadow `rgba(0, 0, 0, 0.08) 0px 2px 8px 0px`, 560px wide. Product name in Pretendard Variable 16px / 400 `#000000`."
- "Build an outline action: `#ffffff` background, 1px solid `#e8e8e8`, 8px radius, 44px tall, 0 16px padding, 15px / 600 `#3d3d3d` label; hover and pressed fill `#f7f7f7`."
- "Make a header on a `#f7f7f7` page: 15px Pretendard Variable links in `#111111`, the current one at 600, the rest at 400; a 44px language button with 10px padding and 8px radius."
- "Design an awards tile row: 88 × 124 white tiles, 1px `#e8e8e8` border, 12px radius, 12px padding."

### Iteration Guide
1. Pretendard Variable only; 600 for titles and selection, 400 for everything else
2. Grey page, white cards, black text — the palette is monochrome
3. One card shadow, hairlines otherwise
4. Radii 4 / 8 / 12 / 16 / full, by role
5. A narrow centred column, even on desktop
6. Turquoise stays in the logo

---

## Governance

### Known Gaps

- **Contrast, `nav-tab`.** Text `#111111` on `#00000000` measures 1.11:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `language-button`.** Text `#111111` on `#00000000` measures 1.11:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `footer-info-toggle`.** Text `#3d3d3d` on `#00000000` measures 1.93:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
