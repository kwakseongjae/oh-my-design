---
name: Nexon
colors:
  primary: '#0077ff'
  ink: '#17191d'
  muted: '#737881'
  label: '#4a4e57'
  helper: '#9fa1a7'
  pill-ink: '#080410'
  canvas: '#ffffff'
  input-ink: '#222426'
  input-line: '#dde1e5'
  guide-ink: '#222222'
  guide-meta: '#51555d'
  guide-disabled: '#a1a7b5'
typography:
  gnb:
    fontSize: 16px
    fontWeight: 400
    use: 'Portal GNB menu link in NEXON Gothic (the portal''s name for NEXON Lv.1 Gothic), #17191d'
  section:
    fontSize: 24px
    fontWeight: 400
    use: Portal section heading (h2) set in the NEXON Gothic Bold family, which registers the Lv.1 Gothic Bold cut at weight 400
  card-title:
    fontSize: 16px
    fontWeight: 400
    use: Portal game-card title in the NEXON Gothic Bold family
  utility:
    fontSize: 14px
    fontWeight: 400
    letterSpacing: '-0.4px'
    use: Portal utility links (보안센터, PC방 찾기) in NEXON Gothic
  body:
    fontSize: 12px
    fontWeight: 400
    use: Portal body and small print; declares the system face malgun gothic, so no brand face is claimed for it
  guide-display:
    fontSize: 52px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: '-0.52px'
    use: Brand-guide section display (Brand Articles) in KlavikaNX, 57.2px line
  guide-article-title:
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: '-0.18px'
    use: Brand-guide article card title in Pretendard, 28.8px line
  guide-article-text:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: '-0.16px'
    use: Brand-guide article excerpt in Pretendard, 27.2px line
rounded:
  pill: 19px
  badge: 7px
  guide-button: 4px
spacing:
  gnb-top: 23
  gnb-x: 23
  pill-x: 18
  game-card-media: 224
components:
  gnb-link:
    type: tab
    textColor: '#17191d'
    padding: 23px 23px 21px
    height: 62px
    typography: 16px / 400 NEXON Gothic
    states: rest only; the bundle holds no state frame for this link (capture 1)
    use: Portal GNB menu link at home::[data-omd-capture="1"], 107 x 62
  gnb-icon-link:
    type: tab
    textColor: '#17191d'
    padding: 21px 0px 0px
    size: 22px x 62px
    typography: 14px / 400 NEXON Gothic
    hover: 'fg #0077ff on the anchor; the icon span''s own hover value is outside the capture'
    pressed: 'fg #0077ff on the anchor, the same frame as hover'
    states: 'settled frames: four sibling GNB links (captures 2-5) record the identical #0077ff for hover and pressed; focus is not declared'
    use: 'Portal GNB icon link at home::[data-omd-capture="2"], 22 x 62; its visible glyph is a 22 x 22 span (one records bg #191919), the label text is hidden'
  gnb-pill-link:
    type: button
    textColor: '#080410'
    border: '2px #17191d'
    rounded: 19px
    padding: 7px 18px 0px
    height: 36px
    typography: 15px / 400 NEXON Gothic Bold
    states: 'a single element, so sibling agreement is unavailable; its hover and pressed frames both record bg #0077ff, fg #ffffff and a 2px #0077ff border, exact values equal to the blue the four GNB icon links settle on; kept as a recorded frame rather than declared hover or pressed keys'
    use: Portal GNB outline pill link (three-character label) at home::[data-omd-capture="6"], 85 x 36
  gnb-badge:
    type: badge
    backgroundColor: '#0077ff'
    textColor: '#ffffff'
    rounded: 7px
    padding: 0px 3px 0px 4px
    size: 14px x 14px
    typography: 10px / 400
    use: Portal GNB notification count badge (span.gnbBadge) at home::span, set on a GNB icon
  login-box-action:
    type: button
    backgroundColor: '#17191d'
    textColor: '#ffffff'
    rounded: 0px
    padding: 22px 0px 0px
    height: 60px
    typography: 15px / 400 NEXON Gothic Bold
    states: rest only; the bundle holds no state frame for capture 29
    use: Portal login-box primary link, a 353 x 60 dark block at home::[data-omd-capture="29"]; the green button below it (a.naver-login-btn, 네이버 로그인) is Naver's sign-in and is excluded as a third-party brand element
  search-input:
    type: input
    textColor: '#222426'
    border: 'bottom 1px #dde1e5'
    rounded: 0px
    padding: 0px 3px
    height: 44px
    typography: 12px / 400
    states: rest only; the bundle holds no state frame for capture 40
    use: Portal game search field at home::[data-omd-capture="40"], 302 x 44, underline only, letter-spacing -0.3px; its text declares the system face malgun gothic
  game-card:
    type: card
    textColor: '#17191d'
    padding: 224px 0px 0px
    size: 302px x 320px
    typography: 16px / 400 NEXON Gothic Bold
    use: 'Portal game grid card (a) at home::[data-omd-capture="42"]: a 224px image area above the title; 39 cards in the grid, each with a 20 x 20 #737881 icon link beside it'
  game-tile:
    type: card
    backgroundColor: '#ffffff'
    rounded: 0px
    size: 153px x 342px
    states: 'hover and pressed frames record box-shadow rgba(0, 0, 0, 0) 0px 0px 0px 0px while other frames record blur values that differ tile to tile (1.3332px to 1.33992px): the collector sampled a shadow transition in flight, so the settled hover is unmeasured and none is declared'
    use: 'Portal featured-game carousel tile (a) at home::[data-omd-capture="16"], eleven tiles; the first (capture 15) carries a 2px #f78029 bottom border'
  guide-arrow-button:
    type: button
    backgroundColor: '#222222'
    border: '1px #222222'
    rounded: 0px
    size: 40px x 40px
    disabled: 'bg #a1a7b5, 1px #a1a7b5 border, icon #adb5bd (capture 9, disabled at capture time)'
    states: 'the enabled button is a single element, so sibling agreement is unavailable; its hover and pressed frames both record bg #ffffff with the 1px #222222 border kept, recorded here rather than declared as hover or pressed keys'
    use: Brand-guide carousel arrow button at surface-2::[data-omd-capture="10"]
  guide-language-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#2e2e2e'
    border: 1px transparent
    rounded: 4px
    size: 44px x 42px
    typography: 16px / 600 / 16px Pretendard
    states: the pressed frame records the rest values in every captured property; no hover frame
    use: Brand-guide header language button (KO) at surface-2::[data-omd-capture="4"]
  guide-family-site-select:
    type: button
    backgroundColor: '#000000'
    textColor: '#ffffff'
    border: 'bottom 1px #a1a7b5'
    padding: 11px 0px
    height: 43px
    typography: 16px / 400 / 24.8px Pretendard
    states: 'the collector''s menu interaction opened a 250 x 298 dropdown: bg #000000, 1px #e9ecef border, 8px 0px padding, items 248 x 40 in #ffffff 16px / 400 / 24.8px with 0px 12px padding'
    use: Brand-guide footer family-site select at surface-2::[data-omd-capture="17"], 248 x 43
  guide-article-card:
    type: card
    rounded: 0px
    size: 342px x 521px
    use: 'Brand-guide article card (a) at surface-2::[data-omd-capture="11"], five in a row: a 342 x 342 image over a #51555d 15px / 400 / 15px date, a #000000 18px / 500 / 28.8px title and a 16px / 400 / 27.2px excerpt; the anchor''s own 16px / 400 black equals the body''s inherited text, so no card-level label style is claimed'
fonts:
  roles:
    ui: NEXON Gothic
    identity: KlavikaNX
---

# Design System Inspiration of Nexon

## Overview

### Visual Theme & Atmosphere

Nexon (넥슨) is the Korean game company that, in its own brand team's words, was founded in 1994 and went on to serve the world's first internet graphic online game. Thirty years later it describes itself as becoming a global entertainment company built on strong IP, solid development and more than three decades of running online games. The portfolio spans MapleStory, KartRider and its successor KartRider: Drift, Dungeon&Fighter from Neople, Mabinogi from devCAT, V4, Sudden Attack and Blue Archive from Nexon Games, and Mintrocket's Dave the Diver; in 2026 it also took on Korean publishing of Overwatch and saw ARC Raiders win at the D.I.C.E. and BAFTA awards. The company marked its 30th anniversary in 2024 with a commemorative logo from its in-house brand design team, and in May 2026 reopened its computer museum under the Nexon Museum name.

The identity is managed from a public brand guide. Its symbol mark is described as a "gate" — a doorway of communication into an imagined world of new fun, the passage through which more players reach satisfying play. The guide pairs a vertical signature for emphasising the visual identity with a horizontal one for the verbal identity, and names **KlavikaNX** as Nexon's exclusive typeface, a paid face licensed only for Nexon works. For Korean text Nexon ships its own families: **NEXON Lv.1 Gothic**, a young, readable body face made for mobile, web and print, and the more mature **NEXON Lv.2 Gothic**, alongside game-born faces such as Bazzi, Football Gothic, MapleStory and Warhaven.

The game portal at nexon.com is deliberately plain so the game art can be loud. Navigation and headings run in NEXON Gothic (the portal's name for Lv.1 Gothic) in near-black `#17191d` on white; dense detail drops to 12px system text in grey `#737881`; corners stay square almost everywhere. One colour does the interactive work: `#0077ff`, the blue that GNB links turn on hover, that fills the outline pill on hover and that carries the notification badge. The brand guide shows the identity side of the same company — KlavikaNX display at 52px, black and white panels, Pretendard for reading.

**Key Characteristics:**
- White canvas, near-black `#17191d` navigation and headings in NEXON Gothic
- A single interaction blue, `#0077ff`, on hover states and the notification badge
- Dense 12px system text in `#737881` for the portal's detail and legal lines
- Square geometry: 330 of 336 captured radii are 0px; the 19px outline pill is the exception
- Game art supplies the colour; the chrome stays grey
- KlavikaNX as the exclusive identity typeface, NEXON Lv.1 and Lv.2 Gothic for Korean text

### Primary tasks

- Check which events and updates are running before playing
- Find and launch a game from the portal's game grid
- Look up Nexon's brand assets, CI rules and typefaces
- Read company news, history and affiliate information

### Brand Narrative

Nexon was founded in 1994 and, as its brand design team writes in the 30th-anniversary article, began by serving the world's first internet graphic online game, releasing new genres ever since with the goal of giving players fun. KartRider's league, run by Nexon from 2005 to 2021, was the longest-running regular e-sports league it operated; when KartRider closed after 18 years and returned as KartRider: Drift, the league restarted as the KartRider: Drift League with a new visual identity. MapleStory, one of the company's best-loved IPs, stages a showcase every half-year, and the brand design team produced the graphics for several of them (IGNITION, SAVIOR, NEW AGE), and its characters have moved into digital goods such as KakaoTalk themes.

The company today is a group: Nexon Games, Neople (creator of Dungeon&Fighter), devCAT (Mabinogi), Nexon Networks for game service and QA, Nexon Communications in Busan, Mintrocket for casual games, the investment arm Nexon Partners and others. The 2026 history lists Korean publishing of Overwatch, awards for ARC Raiders, the rebranded Nexon Museum and a 250-billion-won public-private fund for next-generation Korean games. The brand guide exists so that, across many game IPs and affiliates, Nexon's corporate identity stays consistent in the market — its brand assets are the CI, colour, typefaces and application examples.

### Principles

*Editorial readings of the captured surfaces and the brand guide, not Nexon statements.*

1. **The frame is quiet so the games can be loud.** White, near-black and grey chrome with square corners leaves colour to game art.
2. **One accent for interaction.** `#0077ff` marks what responds to the pointer and what needs attention, and nothing else.
3. **Own the letters.** Navigation and headings are set in Nexon's own Lv.1 Gothic and the identity in the exclusive KlavikaNX.
4. **Identity is a doorway.** The symbol's "gate" framing — a passage to new fun — is the story the CI tells.

### Personas

*Personas below are fictional archetypes informed by publicly observable Nexon audience segments, not individual people.*

**박민준, 24, 서울.** A long-time MapleStory player who opens nexon.com to check events and jump into the game; he scans the grid by title and expects the menu to answer his pointer instantly.

**이수연, 33, 부산.** A returning player curious about KartRider: Drift; she likes that the portal is dense and fast and does not bury games under decoration.

**정하나, 28, 서울.** A designer at a partner studio who uses the brand guide to place the Nexon signature correctly and checks the typeface licences before using them.

**김도윤, 41, 대전.** Follows Nexon's company news and affiliates; the calm, factual company pages are what he reads.

## Colors

### Portal (captured on nexon.com)
- **Interaction Blue** (`#0077ff`): the hover and pressed colour of the GNB icon links, the hover fill of the GNB outline pill and the fill of the notification badge. No captured page names it as a CI colour; it is the portal's working accent.
- **Ink** (`#17191d`): GNB menu links, section headings, game-card titles, the outline pill's 2px border and the dark login-box block.
- **Muted** (`#737881`): the body text colour — small links, footer and detail lines, the icon links beside game cards.
- **Label** (`#4a4e57`): secondary heading-side links at 13px.
- **Helper** (`#9fa1a7`): 12px helper text in the login box and the border of carousel arrows.
- **Pill Ink** (`#080410`): the outline pill's label.
- **Canvas** (`#ffffff`): page ground, carousel tiles, and the text on the dark login block and the badge.
- **Input Ink** (`#222426`) and **Input Line** (`#dde1e5`): the search field's text and its 1px underline.
- **Tile marker** (`#f78029`): a 2px bottom border on the first carousel tile.

### Brand guide (captured on brand.nexon.com)
- **Guide Ink** (`#222222`): the carousel arrow fill and the "MORE" control.
- **Guide Meta** (`#51555d`): article dates.
- **Guide Disabled** (`#a1a7b5`): the disabled arrow fill and the footer select's underline; the disabled arrow's icon is `#adb5bd`.
- **Black** (`#000000`) and **White** (`#ffffff`): the guide's text, the footer select and its dropdown (1px `#e9ecef` border); the language button's text is `#2e2e2e`.

### Not Nexon's
- `#00de5a` appears once on the portal: the "네이버 로그인" button in the login box, which is Naver's sign-in. It is a third-party brand element and is not part of Nexon's palette.

## Typography

### Font evidence by class
- **Official product-use (brand guide):** KlavikaNX is named Nexon's exclusive typeface, chosen to sit with the identity elements; its licence is paid and limited to Nexon works (print and websites allowed, game embedding and video subtitles not). NEXON Lv.1 Gothic is described as the readable body face for games across mobile, web and print, with a low-capacity "Low" version; NEXON Lv.2 Gothic is its more mature sibling. The guide lists further faces: 넥슨 배찌체, 넥슨 풋볼 고딕, 넥슨 메이플스토리, 던파 비트비트 v2, 던파 연단된 칼날, 넥슨 워헤이븐체, 넥슨 카트 고딕 and 마비옛체.
- **Live surface-use:** on the portal, `NEXON Gothic` and `NEXON Gothic Bold` are loaded from `rs.nxfs.nexon.com/home/fonts/` (files named `NEXON Lv1 Gothic OTF` and `… OTF Bold`); the Bold cut is registered as its own family at weight 400. On the brand guide, `KlavikaNX` (from `brand.nexon.com/font/KlavikaNX/`) sets display and card titles and `Pretendard` (from `brand.nexon.com/font/Pretendard/`) sets reading text.
- **Official distributed font assets:** the brand guide stylesheet declares Nexon's own faces from `brand.nexon.com/font/` — NexonLv1Gothic, NexonLv2Gothic, NexonBazzi, NexonFootballGothic, NexonMapleStory, NexonWarhaven, NexonKartGothic, MabinogiClassic, DNFBitBitv2 and DNFForgedBlade — none of which renders visible text on the captured pages.
- **Declared-only:** `Noto Sans KR` on the brand guide; `LatoWeb`, `Pretendard Variable` and `Pretendard Bold` from the shared GNB component; the `slick` and `swiper-icons` icon fonts.
- **System, not brand:** the portal's body text declares `"malgun gothic", "sans serif"`; it is an OS face and gets no family token or specimen.
- **Unresolved:** the licence of NEXON Lv.1 Gothic and the other in-house faces sits in a collapsed FAQ on the typeface page whose answers were not read in this pass.

### Hierarchy

| Role | Surface | Family | Size | Weight | Line height | Notes |
|------|---------|--------|------|--------|-------------|-------|
| GNB link | Portal | NEXON Gothic | 16px | 400 | normal | `#17191d` |
| Section heading | Portal | NEXON Gothic Bold | 24px | 400 (bold cut) | normal | `#17191d` |
| Game-card title | Portal | NEXON Gothic Bold | 16px | 400 (bold cut) | normal | `#17191d` |
| Utility link | Portal | NEXON Gothic | 14px | 400 | normal | tracking -0.4px |
| Body / detail | Portal | system (malgun gothic) | 12px | 400 | normal | `#737881` |
| Guide display | Brand guide | KlavikaNX | 52px | 600 | 57.2px | tracking -0.52px |
| Guide article title | Brand guide | Pretendard | 18px | 500 | 28.8px | tracking -0.18px |
| Guide article text | Brand guide | Pretendard | 16px | 400 | 27.2px | tracking -0.16px |

### Principles
- **Bold as a separate cut.** The portal switches to the NEXON Gothic Bold family for headings and titles instead of raising the weight number.
- **Brand face for navigation, system face for density.** NEXON Gothic carries menus, headings and titles; 12px system text carries the long tail of detail.
- **Latin identity in KlavikaNX.** Section display on the brand guide is Latin (Brand Articles) and set in the exclusive typeface.

## Layout

### Spacing
- The GNB row is 62px; menu links pad 23px 23px 21px, the outline pill 7px 18px 0px.
- The login box is 353px wide with a 60px dark action.
- Game grid cards are 302 x 320 with a 224px media area; section headings span a 1304px content width.
- Carousel tiles are 153 x 342.

### Radius
- 0px on 330 of 336 captured radii.
- 19px on the GNB outline pill, 7px on the notification badge, 4px on the guide's language button.

### Whitespace
- The portal is dense: many entry points above the fold, grouped by headings rather than by cards with padding.

### Responsive Behavior

Both surfaces were captured at a 1440 x 900 desktop viewport. No breakpoint behaviour was measured, so none is specified here. The measured interactive sizes are the 62px GNB row, the 36px outline pill, the 44px search field and the 60px login-box action.

## Elevation & Depth

| Level | Treatment | Where |
|-------|-----------|-------|
| Flat | no shadow | every captured portal and guide element at rest |
| Block | `#17191d` fill | the login-box action |
| Transition (unmeasured) | a shadow the carousel tiles animate on hover | settled value not captured |

Neither surface carries a resting shadow in the capture. The carousel tiles do animate a shadow on hover, but the collector caught it in flight, so no elevation value is declared.

## Motion & Easing

The evidence collector records colours, sizes and state endpoints, not transition or animation properties, so no duration or easing is declared for Nexon here. The one motion the capture proves exists is the carousel tile's hover shadow, whose in-flight frames were recorded; its settled value, duration and curve were not. Keep interaction feedback on the `#0077ff` endpoint and collapse motion to instant under `prefers-reduced-motion: reduce`.

## Components

### Navigation

**GNB menu link**
- Text: `#17191d`
- Font: 16px NEXON Gothic, weight 400
- Padding: 23px 23px 21px
- Height: 62px

**GNB icon link**
- Text: `#17191d`
- Size: 22 x 62
- Padding: 21px 0px 0px
- Hover: anchor colour `#0077ff`
- Pressed: anchor colour `#0077ff`

**GNB outline pill**
- Text: `#080410`
- Border: 2px `#17191d`
- Radius: 19px
- Padding: 7px 18px 0px
- Height: 36px
- Font: 15px NEXON Gothic Bold
- Recorded hover frame: fill `#0077ff`, text `#ffffff`, border 2px `#0077ff`

**GNB notification badge**
- Background: `#0077ff`
- Text: `#ffffff`
- Radius: 7px
- Size: 14 x 14
- Font: 10px, weight 400

### Actions & Inputs

**Login-box action**
- Background: `#17191d`
- Text: `#ffffff`
- Size: 353 x 60
- Padding: 22px 0px 0px
- Font: 15px NEXON Gothic Bold

**Game search field**
- Text: `#222426`
- Border: bottom 1px `#dde1e5`
- Height: 44px
- Padding: 0px 3px
- Font: 12px, weight 400, tracking -0.3px

### Cards

**Game grid card**
- Title: `#17191d`, 16px NEXON Gothic Bold
- Size: 302 x 320
- Media: a 224px image area above the title

**Featured carousel tile**
- Background: `#ffffff`
- Size: 153 x 342
- Radius: 0px
- First tile: 2px `#f78029` bottom border

### Brand guide

**Carousel arrow**
- Background: `#222222`
- Border: 1px `#222222`
- Size: 40 x 40
- Disabled: fill `#a1a7b5`, border `#a1a7b5`, icon `#adb5bd`
- Recorded hover frame: fill `#ffffff`, border 1px `#222222`

**Language button**
- Background: `#ffffff`
- Text: `#2e2e2e`
- Radius: 4px
- Size: 44 x 42
- Font: 16px Pretendard, weight 600

**Family-site select**
- Background: `#000000`
- Text: `#ffffff`
- Border: bottom 1px `#a1a7b5`
- Height: 43px
- Open: a 250 x 298 dropdown on `#000000` with a 1px `#e9ecef` border and 248 x 40 `#ffffff` items

**Article card**
- Size: 342 x 521
- Image: 342 x 342
- Date: `#51555d`, 15px Pretendard
- Title: `#000000`, 18px Pretendard, weight 500

### State evidence
Only the GNB icon links carry declared hover and pressed values: four siblings settle on the identical `#0077ff`. The outline pill and the guide's enabled arrow are single elements, so their hover frames are recorded but not declared. The carousel tiles' hover was caught mid-transition and is unmeasured. No focus value is declared.

---

**Verified:** 2026-09-30 (deterministic evidence capture of the game portal and the brand guide, reconciled with the brand guide's identity and typeface pages and the company site)
**Tier 1 sources:** https://www.nexon.com/Home/Game, https://brand.nexon.com/ko, https://brand.nexon.com/ko/ci-brand-guidelines/primary-identity, https://brand.nexon.com/ko/ci-brand-guidelines/typeface, https://company.nexon.com/ko/company
**Tier 2 sources:** getdesign.md/nexon returned a page with no Nexon content; styles.refero.design search for "nexon" returned no usable result
**Conflicts unresolved:** none

### States

| State | Treatment (observed) |
|---|---|
| Hover — GNB icon link | anchor colour `#0077ff` (four siblings agree) |
| Pressed — GNB icon link | anchor colour `#0077ff` |
| Hover frame — GNB outline pill | fill `#0077ff`, text `#ffffff`, border 2px `#0077ff` (single element; recorded) |
| Hover frame — guide arrow | fill `#ffffff`, border 1px `#222222` (single element; recorded) |
| Disabled — guide arrow | fill `#a1a7b5`, icon `#adb5bd` |
| Hover — carousel tile | caught mid-transition; unmeasured |
| Open — guide family-site select | 250 x 298 dropdown on `#000000`, 1px `#e9ecef` border |

Focus is not declared from the capture. Loading, empty and error states did not occur on these public pages and are not specified.

## Do's and Don'ts

### Do
- Set navigation, headings and titles in NEXON Gothic, switching to its Bold cut for headings
- Keep the chrome white and `#17191d`, with `#737881` for dense detail
- Use `#0077ff` for hover emphasis and notification counts
- Keep corners square; reserve the 19px pill for the one outline action
- Let game art carry colour

### Don't
- Don't treat `#00de5a` as a Nexon colour; it belongs to Naver's sign-in button
- Don't set KlavikaNX outside Nexon's own works; its licence forbids it
- Don't render a substitute font as though it were NEXON Gothic
- Don't add resting drop shadows to cards or tiles
- Don't distort or recolour the symbol mark; the guide requires its specified colours and angles

## Voice & Tone

Nexon talks in two registers. The company and brand pages are warm and first-person-plural, often in the soft "~해요" ending ("안녕하세요, 넥슨코리아 브랜드디자인팀입니다."), explaining why a design decision was made. The CI rules are firm and prescriptive. Player-facing copy on the portal is short and functional.

| Context | Tone |
|---|---|
| Company mission | Aspirational, plural — "도전과 변화를 즐기는 모험가들이 재미의 진화를 이끌어갑니다." |
| Social responsibility | Warm — "게임으로 더 재미있고 더 따뜻한 세상을 만듭니다." |
| Brand rules | Prescriptive — "지정된 컬러와 각도 등 형태의 원칙을 반드시 준수하여 왜곡, 변형이 없도록 해야 합니다." |
| Brand articles | Conversational, explanatory, "~해요" endings |

**Voice samples (verbatim, read 2026-09-30):**
- "넥슨은 우수한 IP와 탄탄한 개발력, 30년 이상의 온라인게임 서비스 경험을 바탕으로 글로벌 종합 엔터테인먼트 기업으로 거듭나고 있습니다." — company site description
- "도전과 변화를 즐기는 모험가들이 재미의 진화를 이끌어갑니다." — company site, PEOPLE
- "넥슨 Lv.1 고딕은 넥슨이 추구하는 젊음, 즐거운 세상에 전하는 서체입니다." — brand guide, typeface

## Agent Prompt Guide

### Quick Color Reference
- Interaction blue: `#0077ff`
- Ink: `#17191d`
- Detail text: `#737881`
- Secondary label: `#4a4e57`
- Helper text: `#9fa1a7`
- Canvas: `#ffffff`
- Search underline: `#dde1e5`

### Example Component Prompts
- "GNB on white, 62px tall: menu links 16px NEXON Gothic in `#17191d`, padding 23px 23px 21px; icon links turn `#0077ff` on hover; a 14 x 14 `#0077ff` badge with white 10px count and 7px radius sits on an icon."
- "Outline pill action: 2px `#17191d` border, 19px radius, 36px tall, 15px NEXON Gothic Bold label in `#080410`."
- "Game grid: cards 302 x 320 with a 224px image area and a 16px NEXON Gothic Bold title in `#17191d`, square corners, no shadow."

### Iteration Guide
1. One accent — `#0077ff` — and only for interaction
2. Square by default
3. NEXON Gothic for navigation and headings, system text for 12px detail
4. The game art is the colour; keep the frame grey

## Governance

### Known Gaps

- **Contrast, `gnb-badge`.** Text `#ffffff` on `#0077ff` measures 4.13:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
