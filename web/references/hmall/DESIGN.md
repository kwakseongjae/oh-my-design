---
name: Hyundai Hmall
colors:
  primary: '#ff4321'
  primary-accent: '#ff2b14'
  primary-hover: '#d8391c'
  primary-tint: '#fff0ed'
  foreground: '#111111'
  text-secondary: '#333333'
  text-tertiary: '#666666'
  text-quaternary: '#999999'
  text-disabled: '#aaaaaa'
  border-primary: '#eeeeee'
  border-secondary: '#dddddd'
  border-quaternary: '#cccccc'
  bg-primary: '#f8f8f8'
  bg-tertiary: '#f4f4f4'
  canvas: '#ffffff'
  black: '#000000'
  showlive: '#3a48ff'
  secondary-aqua: '#03c3ea'
  secondary-pink: '#ff4484'
  informative: '#0078fb'
  positive: '#2fc7a8'
  negative: '#ff0000'
typography:
  button:
    fontSize: 14px
    fontWeight: 600
    use: purchase button label (구매하기)
  nav:
    fontSize: 16px
    fontWeight: 600
    use: top navigation link (라이브)
rounded:
  sm: 5px
  md: 10px
  lg: 20px
  xl: 22px
components:
  button-buy:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#ff2b14'
    border: '#ff2b14'
    rounded: 5px
    height: 36px
    padding: 4px 10px
    typography: 14px / 600
    hover: bg rgba(255,67,33,0.047)
    pressed: bg rgba(255,67,33,0.047) + filter brightness(0.95)
    use: '구매하기 — the purchase action on the live TV product: white with a 1px #ff2b14 outline and #ff2b14 label, 200ms transition; hover tints the fill, press adds a 5% darkening filter. Keyboard focus showed no change in the compared scope.'
  input-search:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#aaaaaa'
    border: '#000000'
    rounded: 22px
    height: 40px
    padding: 8px 42px 9px 20px
    typography: 14px / 400
    pressed: 'fg #111111'
    focus: 'fg #111111'
    use: 'Header search field (title 검색어 입력), 272px wide pill with a 1px black border; text colour goes from #aaaaaa to #111111 under press and keyboard focus (returns on blur); hover no change.'
  card-brand-link:
    type: card
    textColor: '#ffffff'
    rounded: 10px
    height: 248px
    padding: 0px
    typography: 16px / 600
    hover: '::before overlay rgba(0,0,0,0.3) to transparent, linear-gradient layer added'
    pressed: same as hover
    use: '노스페이스 공식 — a 170x248 promotional-panel card link over an image with a #ffffff 16px/600 label; sits on a transparent background; a 0.3 black scrim lifts on hover. Keyboard focus is the browser''s own ring.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Pretendard
---

# Design System Inspiration of Hyundai Hmall

## Overview

### Visual Theme & Atmosphere

Hyundai Hmall (현대Hmall) is the online shop of **㈜현대홈쇼핑** (Hyundai Home Shopping). The company's own business page describes it this way: "APP 누적 다운로드수 2,200만의 Hmall은 TV홈쇼핑, 현대백화점, 모바일라이브 상품 등을 판매하는 종합 인터넷 쇼핑몰입니다." The company was established on 2001. 5. 29 and listed on KOSPI on 2010. 9. 13; its history page opens with "Since 2001, 현대홈쇼핑의 발자취", and the home page's own description reads "백화점, 브랜드, 홈쇼핑까지- 당신의 모든 취향을 읽다." Its mission is "고객을 행복하게, 세상을 풍요롭게" and its vision "고객에게 가장 신뢰받는 기업"; the CEO letter calls trust the goal: "'고객이 가장 신뢰할 수 있는 채널'이 되겠습니다."

The measured homepage is the Korean edition (`www.hmall.com/md/dpl/index`, HTML `lang="ko"`), reached from `www.hmall.com/`. The shop renders as a phone-width column (about 415px) in a 1440px window, next to a separate promotional-card panel; what follows describes that shop surface.

The look is a white retail page with one hot orange-red. **`#ff4321`** is the primary (`--hmall-colors-primary-default`), a deeper **`#ff2b14`** carries the accent, outlines and the purchase button, and **`#d8391c`** is its hover shade. Neutrals are a plain grey ramp from `#111111` ink down to `#f8f8f8` panels, all in **Pretendard**. Corners are mixed: 5px on buttons, 10px on cards, 20px and 22px on pill-shaped controls (a 999px-class pill token also exists).

What makes it worth reading:

- **A first-party token layer with a real vocabulary.** 232 of the 255 computed root custom properties are `--hmall-*`: colours with roles (`button-bg-primary`, `text-accent`, `border-accent`), spacing, radius, font size, line height and weight.
- **Sub-brand colours as tokens.** `showlive` blue `#3a48ff` (the live-commerce channel), plus `topclass`, `diamond`, `platinum`, `gold`, `silver` and `hyundai` families.
- **Outline-first actions.** The purchase button is white with a red outline and red text, not a filled block; the filled `--hmall-colors-button-bg-primary` token is declared but no filled primary button was among the controls measured.

Current evolution, per first-party and press sources: a 2023 press report says the live-commerce channel in the Hmall app was renamed from 쇼핑라이브 to **쇼라** (ShowLa) to read as a platform for younger customers; the company's business page now presents 쇼라 as a mobile broadcast inside the Hmall app. A 2024 press report covers an app renewal that adds a centre "Short Deal" entry for short product videos. A group release says Hmall's 2026 open-innovation day reported proofs of concept including AI-based virtual fitting and that adoption as a regular service is "under consideration" ("정규 서비스 도입 검토") — a pilot, not a shipped feature.

#### Primary tasks
- Browse live TV and mobile-live products; buy (구매하기).
- Search the shop from the header search field.
- Follow the broadcast schedule (편성표) and the top tabs such as 라이브.

### Brand Narrative

Hyundai Home Shopping started as a TV home-shopping company in 2001 (cable broadcast began in 2001/11 per its history page) and runs "Hmall" as the internet and app shop for TV, department-store and mobile-live products. Its group, Hyundai Department Store Group, describes its CI as giving "더욱 견고하고 안정된 이미지" with emphasis on "주목성과 가독성", with an emerald green for the department store and a dark yellow for "고객의 기쁨"; that is group identity, and Hmall's shop surface measured here uses its own orange-red token set instead.

### Principles

- **Trust as the stated aim.** Vision: "고객에게 가장 신뢰받는 기업".
- **Customer-first digital change.** The vision page lists "고객 관점의 디지털 트랜스포메이션 추진, 데이터를 활용한 가치 제공".
- **One accent family, outline-first actions** (observed in the live surface).

### Personas

Not researched. No persona claim is made from a UI capture. (A press report quotes the company saying the 쇼라 channel targets customers in their 20s and 30s; that is the company's positioning, not a persona study.)

## Colors

Measured with `getComputedStyle` on the home page: 255 computed root custom properties (`--hmall-*` 232, `--color-*` 22, `--swiper-*` 1) and 279 declared entries. `--hmall-*` is first-party. `--color-hex-*` (20 entries: `--color-hex-111` … `--color-hex-0000ff`) are hex-named aliases whose values are the same greys and a few pure colours; `--color-primary` `#ff5340` and `--color-secondary` `#3abbd5` are also declared there and differ from the `--hmall-colors-primary-default` value, so they are not used as tokens. `--swiper-theme-color` `#007aff` belongs to the Swiper carousel library and is excluded.

### Brand
- **Primary** (`#ff4321`) — `--hmall-colors-primary-default`, `bg-brand-primary`, `button-bg-primary`.
- **Primary accent** (`#ff2b14`) — `--hmall-colors-primary-accent`, `text-accent`, `border-accent`; the purchase button's label and outline.
- **Primary hover** (`#d8391c`) — `--hmall-colors-button-bg-primary-hover`.
- **Primary tint** (`#fff0ed`) — `--hmall-colors-button-bg-tertiary`.

### Ink and neutrals
- **Foreground** (`#111111`) — `--hmall-colors-text-primary`; the most frequent dark text in the census (32 elements).
- **Text secondary** (`#333333`) · **tertiary** (`#666666`) · **quaternary** (`#999999`) · **disabled** (`#aaaaaa`).
- **Borders** — `#eeeeee` (primary), `#dddddd` (secondary), `#cccccc` (quaternary).
- **Surfaces** — `#f8f8f8` (bg-primary), `#f4f4f4` (bg-tertiary), **canvas** `#ffffff`, **black** `#000000`.

### Signals and sub-brands
**Showlive** `#3a48ff` · **Secondary aqua** `#03c3ea` · **Secondary pink** `#ff4484` · **Informative** `#0078fb` · **Positive** `#2fc7a8` · **Negative** `#ff0000`.

Census (rendered, with the promotional popup open at capture time): backgrounds `rgb(255,255,255)` ×43, `rgba(255,255,255,0.2)` ×20, `rgb(248,248,248)` ×6; text white ×90 (promotional and broadcast content), `rgb(17,17,17)` ×32, `rgb(102,102,102)` ×18; `<p>` ink white ×12, `rgb(102,102,102)` ×9, `rgb(153,153,153)` ×1. The census does not establish a single body-ink token.

## Typography

### Font family

- **Live-loaded: Pretendard**, weights 400, 500, 600 and 700 (normal), per the census's loaded faces. Served by the shop itself as subset woff2 files from `image.hmall.com/assets/fonts/` (`Pretendard-Regular`, `-Medium`, `-SemiBold`, `-Bold` `.subset.woff2`). It is the declared first family on `body`, `h1` and buttons.
- **Declared-only:** Pretendard 100, 200, 300, 800 and 900 are declared in `@font-face` but were not loaded on this page; the fallback stack after Pretendard (`apple-system`, `system-ui`, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, emoji faces, `sans-serif`) is named in CSS and was not loaded. `swiper-icons` is the carousel library's icon font.
- **Official product use:** no first-party statement about the typeface was found in the evidence.
- **Official distributed assets:** none opened; no font licence was opened.
- **Unresolved:** whether Hmall's Pretendard is the public open-source family or a customised build is not established. Substitute: none chosen.

### Scale (measured on controls)
- Purchase button 14px/600, letter-spacing -0.28px.
- Top navigation link 16px/600, line-height 21px, letter-spacing -0.32px.
- Search input and secondary buttons 14px/400, letter-spacing -0.28px.
- Card label 16px/600 white; "더보기" caption 13.008px/400.
- Token scale `--hmall-fontSize-10` … `-42` (0.625rem … 2.625rem) and weights 400, 500, 600, 700.

## Layout

- The shop column is about 415px wide inside the 1440×1000 window, beside a separate promotional panel; the sticky top nav is 415×55 and a fixed bottom tab bar ("하단 탭바") is 415×64. This is a mobile-width layout shown on desktop, not a measured full-width template.
- Spacing tokens `--hmall-spacing-0` … `-23`: 0, 0.125rem, 0.25rem, 0.375rem, 0.5rem, 0.625rem, 0.75rem, 1rem, 1.25rem, 1.5rem … up to 5rem (2px steps at the small end).
- The page scrolls inside the shop's own region, so the page-level capture reports a document height of 1000.

### Responsive Behavior

Not measured: desktop 1440×1000 only. The shop column's phone-like width (about 415px) is observed, but no breakpoints were captured.

## Elevation & Depth

Flat. All six measured controls have `box-shadow: none`. Depth comes from translucent layers: a `rgba(0,0,0,0.3)` scrim on cards, `rgba(255,255,255,0.2)` panels (20 elements) and a dark backdrop behind the promotional popup. Alpha tokens `--hmall-colors-blackAlpha-*` and `dimmed-*` exist (3 to 70).

## Motion & Easing

The purchase button declares `transition: background-color, color, border-color, box-shadow` at 200ms with `ease-in-out`, zero delay. The other measured controls compute `all 0s ease 0s` (no authored transition). The brand card's overlay change took up to 800ms to settle (the probe's longest-transition reading); its curve was not recorded. No `cubic-bezier` value was measured.

---

**Tier 1 sources:** https://www.hmall.com/ (live home, final URL `/md/dpl/index`; survey and states captured 2026-11-10); https://www.hmall.com/zz-this-does-not-exist (nonsense-path control: HTTP 200, byte-identical to the home response, so a catch-all); https://company.hmall.com/company/company_intro_tab1.html (overview, HQ address); https://company.hmall.com/company/company_intro_tab2.html (business); https://company.hmall.com/common/common_footer.html (legal footer); https://company.hmall.com/company/company_history.html (history); https://company.hmall.com/company/company_intro_tab4.html (mission and vision); https://company.hmall.com/company/company_ceo.html (CEO letter); https://www.ehyundai.com/newPortal/group/GI/GI000001.do?locale=ko (group CI); https://www.ehyundai.com/newPortal/group/GN/GNN000010_V.do?seq=1209 (2026 open-innovation release)

## Components

Measured on `hmall.com/md/dpl/index` after the promotional popup was closed with its "닫기" button. Consent rejection was not confirmed (no `# consent rejected via` line was printed). Hover counted only when `:hover` matched; focus under a real Tab walk.

- **Purchase button (구매하기)** — 69.3×36px, radius 5px, padding 4px 10px, Pretendard 14px/600; bg `#ffffff`, label and 1px border `#ff2b14`. Hover fills `rgba(255,67,33,0.047)`; press keeps that fill and adds `filter: brightness(0.95)`. Keyboard focus (Tab #30): no change within the compared scope; its crop is partly covered by the fixed bottom bar.
- **Search input** — `input#searchActive`, 272×40px, radius 22px, padding 8px 42px 9px 20px, 14px/400; bg `#ffffff`, text `#aaaaaa`, 1px `#000000` border. Hover: no change. Press and keyboard focus (Tab #3): text colour `#aaaaaa` → `#111111`, back on blur. Nothing was typed or submitted.
- **Brand card link (노스페이스 공식)** — 170×248px, radius 10px, no padding, transparent background over an image; label `#ffffff` 16px/600. Rest has a `rgba(0,0,0,0.3)` scrim in `::before`; hover (and press) make it transparent and add a `linear-gradient` image (the emitted gradient string was truncated, so its stops are not recorded). Keyboard focus (Tab #201) shows only the browser's own `auto` ring, not a brand token.
- **Schedule button (편성표)** — 85.5×30px, radius 20px, padding 0 12px, bg `#ffffff`, 1px `#000000` border, button text `#898b92`, visible label `#111111` 14px/700 with a calendar icon. Hover, press and focus (Tab #28): no change in the compared scope (self, six descendants including the SVG, three ancestors). Prose only.
- **Navigation link (라이브)** — 64.5×55px, radius 0, padding 22px 12px 12px, 16px/600, ink `#444444`, no background. Hover and press: no change in scope. Keyboard focus: **not measured** (Tab never landed on this anchor in 206 presses).
- **More-products button (더보기+1)** — 60×60px, radius 5px, bg `#f8f8f8`, 1px transparent border; caption `#999999`, "+1" `#000000`. Hover, press, focus: no change in scope. Prose only.

Disabled variants were not measured (`--hmall-colors-button-bg-disabled` `#eeeeee` and `text-disabled` `#aaaaaa` are declared, not observed on a control).

### Radius
Token ramp `--hmall-radius-*`: 0, 2px-class (0.125rem), 3px (0.1875rem), 5px (0.3125rem), 6px, 8px, 10px (0.625rem), 12px, 16px, 20px, and a 999px-class pill (62.4375rem). Observed: 5px (buttons), 10px (card), 20px (schedule), 22px (search).

### States

- Purchase button: hover fill `rgba(255,67,33,0.047)`; press adds `brightness(0.95)`; focus unchanged in scope.
- Search input: hover unchanged; press and focus turn the text `#111111`.
- Brand card: hover and press clear the scrim and add a gradient layer; focus is the browser `auto` ring (`rgb(0,95,204)`, 1px, offset 1px).
- Schedule, 더보기 and navigation link: hover and press unchanged within scope; focus unchanged for the first two, not measured for the nav link.

## Do's and Don'ts

### Do
- Keep the page white and ink `#111111`, with the red-orange family (`#ff4321`, `#ff2b14`, `#d8391c`) for action and emphasis.
- Make the purchase action an outline: white fill, `#ff2b14` 1px border and label, 5px radius.
- Use Pretendard at 14–16px with weights 400–700 and slightly negative letter-spacing (-0.28px / -0.32px).
- Give search and schedule controls pill radii (20–22px); keep cards at 10px.

### Don't
- Don't promote the filled `#ff4321` button token into a measured component; it was not observed on a control here.
- Don't treat the browser's blue `auto` focus ring on the card as a brand focus style.
- Don't substitute another typeface for Pretendard; none is chosen.

## Voice & Tone

Not assessed as authored voice. The interface strings observed are plain Korean commerce labels (구매하기, 편성표, 라이브, 검색어 입력, 더보기).

## Agent Prompt Guide

### Quick Color Reference
`#ff4321` primary · `#ff2b14` accent · `#d8391c` hover · `#fff0ed` tint · `#111111` ink · `#666666` mid · `#999999` caption · `#eeeeee` line · `#f8f8f8` panel · `#ffffff` canvas · `#3a48ff` showlive

### Example Component Prompts
- "A 36px outlined purchase button, 5px radius, white fill, 1px `#ff2b14` border and label, Pretendard 14px/600; hover fills `rgba(255,67,33,0.047)`, press adds `filter: brightness(0.95)`; 200ms ease-in-out."
- "A 40px pill search field, 272px wide, 22px radius, 1px `#000000` border, placeholder-grey `#aaaaaa` text that turns `#111111` on press and focus."
- "A 170×248 image card, 10px radius, white 16px/600 label, a 30% black scrim that clears on hover."

## Governance

### Known Gaps

- **Contrast, `button-buy`.** Text `#ff2b14` on `#ffffff` measures 3.74:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `input-search`.** Text `#aaaaaa` on `#ffffff` measures 2.32:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
