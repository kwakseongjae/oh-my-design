---
name: KakaoPage
colors:
  primary: '#ffd618'
  ink: '#000000'
  canvas: '#ffffff'
  cta-label: '#222222'
  muted: '#999999'
  on-media: '#ffffff'
typography:
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.4
    use: Default text on all three pages (body)
  section-title:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.38
    use: Shelf heading on home and the webtoon page (h2)
  cover-title:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.25
    use: Title overlaid on a cover card, white
  cta:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.38
    use: 첫 화 보기 label on the content page
  small-heading:
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.33
    use: Small bold heading on the content page (h2)
  search:
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.38
    use: Header search field
  footer-link:
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.4
    use: Underlined footer link
rounded:
  md: 8px
spacing:
  menu-gap: 6
  chip-x: 12
  chip-gap: 8
  cta-x: 15
components:
  main-menu-item:
    type: tab
    backgroundColor: transparent
    textColor: '#000000'
    height: 56px
    typography: 16px / 400 / 22.4px
    states: rest only in the capture; a same-day supplementary probe found the current menu marked aria-current=page and set bold, which the bundle does not record, so no selected value is declared
    use: Top menu item (추천, 웹툰, 웹소설 and the rest) at home::li, 64-97 x 56 with a 6px right margin; the webtoon page repeats it
  primary-cta:
    type: button
    textColor: '#222222'
    padding: 0px 15px
    height: 56px
    typography: 16px / 700 / 22px
    states: the pressed frame reads the label at rgba(34, 34, 34, 0.3), matching the authored class active:text-[rgb(var(--colors-static-mono-90)_/_30%)]; one element with no sibling, so no pressed value is declared
    use: 첫 화 보기 on the content page at surface-3::[data-omd-capture="12"], 272 x 56. The button's own background is transparent; the visible fill is painted by a wrapper div the collector does not record (see §2), so no bg or radius is declared
  carousel-button-lg:
    type: button
    backgroundColor: '#000000'
    rounded: 3.35544e+07px
    size: 44px x 44px
    states: rest only; no state frame
    use: Hero carousel previous and next buttons (bg-static-mono-black, class opacity-80) at home::[data-omd-capture="43"] and 44; the webtoon page repeats the pair
  carousel-button:
    type: button
    backgroundColor: '#000000'
    rounded: 3.35544e+07px
    size: 36px x 36px
    states: rest only; no state frame
    use: Shelf carousel button (bg-static-mono-black, class opacity-80) at home::[data-omd-capture="61"]; also on the webtoon page and twice on the content page
  reaction-chip:
    type: button
    backgroundColor: rgba(0, 0, 0, 0.05)
    textColor: '#000000'
    rounded: 8px
    padding: 0px 12px
    height: 28px
    states: rest only; no state frame
    use: Comment reaction chip (bg-theme-transparent-10) on the content page at surface-3::[data-omd-capture="47"], 55-75 x 28 with an 8px right margin; icon-only variants are 28 x 28; 77 captured. The label sits in a child the collector did not record, so no font is declared
  search-input:
    type: input
    backgroundColor: transparent
    textColor: '#000000'
    height: 18px
    typography: 13px / 400 / 18px
    states: rest only; no state frame
    use: Header search field at home::[data-omd-capture="6"], 150 x 18, identical on all three pages; no border or fill of its own
  cover-card:
    type: card
    rounded: 8px
    size: 152px x 274px
    use: 'Cover card (rounded-8pxr overflow-hidden) at home::div on home and the webtoon page, 24 captured; the cover image fills it and its title overlays in 16px / 700 / 20px #ffffff'
  content-row:
    type: listItem
    textColor: '#000000'
    size: 632px x 88px
    typography: 16px / 400 / 22.4px
    use: List row on the content page at surface-3::li, six captured
  first-episode-cta:
    type: button
    backgroundColor: '#ffd618'
    textColor: '#222222'
    size: 272px x 56px
    typography: 12px / 700 (label span)
    hover: no change across self, 1 descendant and 3 ancestor levels (live probe)
    pressed: label fg rgba(34, 34, 34, 0.3), opacity 1 -> 0.3; the yellow wrapper is unchanged
    states: hover and pressed measured by the live keyboard probe on 2026-09-30; focus not measured (--no-focus)
    use: Work-page 첫 화 보기 call-to-action on surface-3; the button is transparent and the point-yellow fill is its grandparent div (bg-static-point-yellow)
---

# Design System Inspiration of KakaoPage

## Overview

### Visual Theme & Atmosphere

카카오페이지 (KakaoPage) is Kakao Entertainment's webtoon and web-novel service; the web footer links to kakaoent.com, and its privacy policy is served from kakaoent.com with `service=kakaopage`. Kakao's own service page introduces it as "세상 모든 이야기를 담다" — original webtoons and web novels serialised exclusively, popular Daum Webtoon originals alongside them, chat-style 톡드립 stories, films and broadcast replays. Its signature mechanism is 기다리면 무료: works marked with a clock icon give one free episode, and a new free pass recharges a set time after you read. A daily 오늘의 선물 box hands out passes for new works. The web page's own description says the same in two sentences: "오리지널 독점 웹툰, 웹소설 부터 책 까지 한 곳에서 즐기세요. 인기 콘텐츠가 기다리면 무료!"

The captured web product is almost entirely black and white. Body text is `#000000` on a `#ffffff` canvas on all three pages, and one colour carries the reading action: the 첫 화 보기 call-to-action sits on a `#ffd618` point-yellow panel. Otherwise the only filled controls are black, fully round carousel buttons drawn at 80% opacity. Colour arrives with the cover art. Cover cards are 152 × 274 with an 8px radius, filled by the image, with titles overlaid in bold white. The current menu is marked by weight, not a pill or a colour: the supplementary probe found 추천 set bold and marked `aria-current=page`.

Type is compact and flat. Almost everything is 16px Pretendard, and hierarchy comes from moving between 400 and 700 rather than from size. Only the small meta layer drops to 12–13px.

The current web build shows how the look is organised. It is a Next.js app (its CSS is served from `page.kakaocdn.net/pageweb/csr/real/2.43.0/`), and its utility classes use a named colour vocabulary. *Static* colours stay fixed: `static-mono-black`, `static-mono-white`, `static-mono-90`, `static-point-yellow`. *Theme* colours follow the `light` class on `<body>`: `theme-solid-100`, `theme-transparent-10`. The reading call-to-action's yellow belongs to that static "point" set. It is documented in §2 but kept out of the machine palette, because the capture did not record it.

**Key Characteristics:**
- Monochrome chrome: `#000000` ink on `#ffffff`, and no hue on any captured control
- Cover art supplies the colour; 8px-radius portrait cover cards with bold white overlay titles
- Black, fully round carousel buttons (44px in the hero, 36px on shelves) at class `opacity-80`
- Weight, not colour, marks the current menu and headings: 16px at 400 and 700
- Translucent `rgba(0, 0, 0, 0.05)` reaction chips on the content page
- No box shadow on any of the 447 captured elements

### Primary tasks

- Start reading a webtoon or web novel from its content page (첫 화 보기)
- Read the next episode free after the 기다리면 무료 wait
- Collect the daily 오늘의 선물 passes
- Browse by menu (추천, 웹툰, 웹소설 and the rest) and by shelf
- Search for a work by title or author

### Brand Narrative

Kakao's service page frames KakaoPage as the place that holds every story: exclusive, advance-serialised webtoons and web novels, Daum Webtoon's popular originals, chat-style 톡드립 stories, and films and broadcast replays that can be watched in parts. The page's differentiator is its access model. 기다리면 무료 recharges a free pass a set time after each free read, and 오늘의 선물 adds daily passes, so waiting is a first-class way to read.

The web product carries that promise with very little chrome. The captured pages leave colour to the cover art, and they keep the interface in black and white with weight-based emphasis. They reserve a single static "point" yellow for the reading action; the capture could not record that yellow, so it is documented rather than tokenised. The build's split between fixed static colours and theme colours that follow a `light` body class shows a product organised around a small token set, not around page-by-page styling.

The June record's launch year, merger history and overseas-platform claims were not re-verified from a first-party page this session and are omitted.

### Principles

1. **The art is the colour.** *UI implication:* monochrome chrome; no hue on navigation, chips or shelves.
2. **Waiting is a way to read.** *UI implication:* the free-by-waiting model is stated plainly in copy, not hidden in fine print.
3. **Weight before colour.** *UI implication:* the current menu and headings are bold; nothing turns blue or gets a pill.
4. **One reading action per work.** *UI implication:* the content page's 56px 첫 화 보기 is the single large action.
5. **Flat and fast.** *UI implication:* no shadows; overlay controls are black at reduced opacity.

### Personas

*Personas below are fictional archetypes informed by publicly observable KakaoPage reader segments, not individual people.*

**이하나, 22, 서울.** A university student who found a series through its drama adaptation. She reads on the wait-for-free cycle and pays only for the few titles she cannot wait for.

**박민준, 31, 부산.** A commuter who reads web novels on the subway. He wants to open a work, tap 첫 화 보기 and be reading, with nothing in the way.

**김서연, 38, 대전.** A working parent who started with a romance webtoon her daughter recommended. The plain black-and-white pages feel calm and trustworthy to her.

## Colors

### Why the primary is point yellow

The product's primary action on a work page is 첫 화 보기 (read the first episode), and the product paints it point yellow: `#ffd618`. The button itself is transparent (272 × 56); the yellow comes from its grandparent `div.flex.items-center` (class `bg-static-point-yellow`). The capture collector records the button and not the wrapper, so the bundle holds four colours only (`#000000`, `#ffffff`, `#999999`, `#222222`). The live keyboard probe of 2026-09-30 compares three ancestor levels and recorded the fill at level 2, `rgb(255, 214, 24)` (`raw/kakaopage-states-content.json`). Under the catalogue rule of 2026-09-30, `primary` is the colour the product renders in its primary-action role, so it is `#ffd618`. The eight black carousel buttons (`bg-static-mono-black`) stay component values.

### Ink & Canvas
- **Ink** (`#000000`): body text on every page, headings, menu labels, the search field, list rows and the reaction chip labels.
- **Canvas** (`#ffffff`): page background (`body`).
- **CTA label** (`#222222`): the 첫 화 보기 label (`text-static-mono-90`).
- **Muted** (`#999999`): 13px underlined footer links.
- **On media** (`#ffffff`): bold titles overlaid on cover cards (`text-static-mono-white`).

### Tint
- **Chip tint** (`rgba(0, 0, 0, 0.05)`): reaction chips on the content page (`bg-theme-transparent-10`), 77 captured.

### Documented but not tokenised
- **Point yellow** (`#ffd618`): now the machine `primary` (see *Why the primary is point yellow*). The June record saw the same value.

### Not carried forward
- `#eeeeee` card surface, `rgba(153,153,153,0.15)` skeleton, `#666666` date text, `#ff3042` BEST badge and its white label. None of them appears in the 2026-09-30 bundle or probe.
- `oklch(0.928 0.006 264.531)` appears 358 times, but only as the border colour of elements whose border width is 0px (a framework default), so nothing is drawn. It is excluded.

## Typography

### Font Family
- **Declared stack:** `"Pretendard Variable", Pretendard, -apple-system, system-ui, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, …` on every captured element.
- **Served face:** Pretendard (static cut) from `page.kakaocdn.net/pageweb/pretendard/web/static/`, Thin to Black, woff2 and woff. No face named "Pretendard Variable" is declared.
- **Why there is no family token:** the collector's font census marks "Pretendard Variable" as unresolved and "Pretendard" as declared but unobserved, because it credits usage to the first family in the stack. So the bundle cannot confirm which face renders, and no family token is emitted. A same-day supplementary probe read Pretendard 400 and 700 as loaded on home and the content page. That reading is recorded in the verification file, not as a token.
- **Evidence class:** Pretendard is a third-party typeface, not a KakaoPage brand font. Its repository licence credits Kil Hyung-jin, with Reserved Font Name "Pretendard". None of the sources opened for this reference names a KakaoPage-specific typeface.

### Hierarchy

| Role | Size | Weight | Line height | Colour | Where |
|------|------|--------|-------------|--------|-------|
| Body | 16px | 400 | 22.4px | `#000000` | Default text, menu items, list rows |
| Shelf heading | 16px | 700 | 22px | `#000000` | `h2` on home and the webtoon page |
| Cover title | 16px | 700 | 20px | `#ffffff` | Overlay on cover cards |
| CTA label | 16px | 700 | 22px | `#222222` | 첫 화 보기 |
| Small heading | 12px | 700 | 16px | `#000000` | `h2` on the content page |
| Search | 13px | 400 | 18px | `#000000` | Header search field |
| Footer link | 13px | 400 | 18.2px | `#999999` | Underlined footer links |

### Principles
- **One size, two weights.** Nearly all captured text is 16px; 700 marks headings, titles and the reading action.
- **Small type is for meta only.** 12–13px appears only on the small content-page heading, the search field and footer links.
- **Letter spacing is normal throughout.**

## Layout

### Spacing System
- Captured spacing values, by frequency: 12px (50), 8px (43), 6px (26), 4px (23), 16px (15), 32px (12), 24px (6).
- Named in tokens: 6px between menu items, 12px chip padding, 8px between chips, 15px inside the reading CTA.

### Grid & Container
- Captured at 1440 wide. The header search sits near the top (y ≈ 39), the menu strip starts at y = 96 with 56px items, the hero carousel's buttons sit at y = 448, and cover shelves begin near y = 704.
- Shelves are horizontal rows of 152px-wide cover cards with carousel buttons at the edge.

### Whitespace Philosophy
- **The art fills, the chrome recedes.** Cover cards carry no border or shadow, and the image runs to the 8px corners.
- **Flat rows.** List rows and chips separate by position and a 5% tint, not by rules or elevation.

### Border Radius Scale
- 8px: cover cards and reaction chips (99 captured elements)
- Fully round: carousel buttons
- 2px: the reading CTA's transparent inner button only

### Responsive Behavior

#### Breakpoints
Only the 1440px desktop layout was captured; no breakpoint values were measured, so none are specified.

#### Touch Targets
- Reading CTA: 56px tall
- Hero carousel buttons: 44 × 44; shelf carousel buttons: 36 × 36
- Reaction chips: 28px tall — below common touch-target minimums, desktop-captured

#### Collapsing Strategy
Not captured.

#### Image Behavior
Cover images fill 152 × 274 cards with 8px corners (`overflow-hidden`); titles overlay the art in white.

## Elevation & Depth

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | `box-shadow: none` | All 447 captured elements |
| Tint | `rgba(0, 0, 0, 0.05)` fill | Reaction chips |
| Overlay control | `#000000` at class `opacity-80` | Carousel buttons over cover art |

KakaoPage's captured pages use no shadow at all. Separation comes from the cover art itself, from white space and from one 5% black tint.

## Motion & Easing

The collector reads computed style, not animation, so no duration or easing is measured. The supplementary probe read the computed `transition` of the reading CTA and its wrappers as the bare shorthand `all`, which declares no timing. Treat motion as unspecified rather than borrowing values, and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/kakaopage.json (capturedAt 2026-09-30T07:01:42Z), deterministic collector, 1440x900, logged out: page.kakao.com, page.kakao.com/menu/10010/, page.kakao.com/content/57668776/.
- Supplementary (not tokens): headless playwright-core probe the same day of the content page and home — CTA ancestor chain, loaded fonts, aria-current.
- §1, §10, §11 context: www.kakaocorp.com/page/service/service/KakaoPage, page.kakao.com meta description, page.kakao.com/notice/ (title only). All opened 2026-09-30.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->

## Components

### Navigation

**Main menu item**
- Background: transparent
- Text: `#000000`
- Height: 56px
- Font: 16px / 400 / 22.4px
- Spacing: 6px right margin between items
- Use: top menu (추천, 웹툰, 웹소설 and the rest), 64–97px wide. The current item is bold with `aria-current=page` (supplementary probe; not in the bundle)

### Buttons

**Reading CTA (첫 화 보기)**
- Text: `#222222`
- Height: 56px
- Padding: 0px 15px
- Font: 16px / 700 / 22px
- Size: 272 × 56
- Fill: painted by a wrapper `div` the collector does not record; see §2 for the documented `#ffd618`
- Use: the content page's reading action

**Carousel button (hero)**
- Background: `#000000`, class `opacity-80`
- Radius: fully round (computed `3.35544e+07px`)
- Size: 44 × 44
- Use: previous and next on the hero carousel, home and the webtoon page

**Carousel button (shelf)**
- Background: `#000000`, class `opacity-80`
- Radius: fully round (computed `3.35544e+07px`)
- Size: 36 × 36
- Use: shelf carousels on all three pages

**Reaction chip**
- Background: `rgba(0, 0, 0, 0.05)`
- Text: `#000000`
- Radius: 8px
- Height: 28px
- Padding: 0px 12px
- Spacing: 8px right margin
- Use: comment reactions on the content page; icon-only chips are 28 × 28

### Inputs & Forms

**Header search field**
- Background: transparent
- Text: `#000000`
- Height: 18px
- Font: 13px / 400 / 18px
- Size: 150 × 18
- Use: title and author search in the header on every page; no border or fill of its own

### Cards & Containers

**Cover card**
- Radius: 8px
- Size: 152 × 274
- Title overlay: 16px / 700 / 20px `#ffffff`
- Use: portrait cover shelves on home and the webtoon page; the image fills the card

**Content-page list row**
- Text: `#000000`
- Size: 632 × 88
- Font: 16px / 400 / 22.4px
- Use: list rows on the content page, six captured

---

**Verified:** 2026-09-30 (deterministic collector capture of three public pages, logged out, plus first-party context and a supplementary headless probe)
**Tier 1 sources:** https://page.kakao.com/ ; https://page.kakao.com/menu/10010/ ; https://page.kakao.com/content/57668776/ ; https://page.kakao.com/notice/ ; https://www.kakaocorp.com/page/service/service/KakaoPage
**Tier 2 sources:** not attempted on 2026-09-30 (the June 2026 record found no getdesign.md or refero entry); no Tier 2 value used
**Conflicts unresolved:** none

### States

Only these were captured or probed; nothing else is specified.

| State | Observation |
|---|---|
| **Pressed frame (reading CTA)** | The label reads `rgba(34, 34, 34, 0.3)`, matching the authored `active:` class; one element with no sibling, so it is not declared as a pressed value. |
| **Current menu (supplementary probe)** | 추천 marked `aria-current=page` and set bold; not in the bundle. |
| **No other state frames** | The bundle holds no hover, focus, expanded or selected frames (`interactionCount: 0`). That means none were recorded, not that the product has none. |

## Do's and Don'ts

### Do
- Keep chrome monochrome: `#000000` text on `#ffffff`, and let cover art carry colour
- Mark the current menu item and headings with weight (700), not with a fill
- Use 8px-radius portrait cover cards with bold white overlay titles
- Use black, fully round carousel buttons at reduced opacity over art
- Use the `rgba(0, 0, 0, 0.05)` tint for small reaction chips
- Keep elevation flat; no shadows

### Don't
- Don't add accent hues to navigation or chips; the captured chrome has none
- Don't promote the documented point yellow (`#ffd618`) into a machine palette until a capture records it
- Don't reintroduce the June `#eeeeee` card surface, `#666666` date text or `#ff3042` badge as tokens; the current capture does not show them
- Don't render another font as if it were Pretendard; if Pretendard is unavailable, say so

## Voice & Tone

KakaoPage's voice is short and service-plain. Menu labels are single nouns (추천, 웹툰, 웹소설), the reading action is a direct verb phrase (첫 화 보기), and the service copy explains its benefit model in a clause: 기다리면 무료.

| Context | Tone |
|---|---|
| Menus | Single nouns — 추천, 웹툰, 웹소설 |
| Reading action | Direct — 첫 화 보기 |
| Benefit model | Plain promise — 기다리면 무료 |
| Service introduction | Warm, inclusive — "세상 모든 이야기를 담다" |

**Voice samples (read 2026-09-30):**
- "오리지널 독점 웹툰, 웹소설 부터 책 까지 한 곳에서 즐기세요. 인기 콘텐츠가 기다리면 무료!" — page.kakao.com meta description.
- "추천 - 지금핫한 | 카카오페이지" — home page title in the headless session.
- "오직 카카오페이지에만 볼 수 있는 오리지널, 인기 작품을 기다리면 무료로 즐겨보세요!" — Kakao's service page.
- "첫 화 보기" — the content page's reading action.

**Forbidden register**: spoilers or genre hype in chrome, urgency dark patterns on paid episodes, decoration that competes with cover art.

## Agent Prompt Guide

### Quick Color Reference
- Primary / ink: `#000000`
- Canvas: `#ffffff`
- CTA label: `#222222`
- Muted footer link: `#999999`
- On cover art: `#ffffff`
- Chip tint: `rgba(0, 0, 0, 0.05)`
- Documented reading-action fill (not a token): `#ffd618`

### Example Component Prompts
- "A shelf of portrait cover cards: 152 × 274, 8px radius, the cover image filling each card, title overlaid in 16px Pretendard 700 #ffffff. A 36px black, fully round carousel button at 80% opacity sits at the right edge. Shelf heading above in 16px 700 #000000."
- "A top menu strip on white: items 56px tall, 16px Pretendard 400 #000000, 6px apart; the current item set bold."
- "Comment reaction chips: 28px tall, 8px radius, 0 12px padding, background rgba(0, 0, 0, 0.05), black label, 8px apart."

### Iteration Guide
1. Monochrome chrome; colour comes from the art
2. 16px everywhere; hierarchy by 400/700
3. 8px radius for cards and chips; fully round for carousel buttons
4. No shadows
5. Treat the reading action's yellow as documented, not tokenised

---

## Governance

### Known Gaps

- **Contrast, `main-menu-item`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `reaction-chip`.** Text `#000000` on `#0000000d` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `search-input`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
