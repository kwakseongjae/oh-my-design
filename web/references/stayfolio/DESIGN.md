---
name: Stayfolio
colors:
  primary: '#000000'
  on-primary: '#ffffff'
  ink: '#181818'
  heading: '#171719'
  nav: '#1a1a1a'
  secondary: '#767676'
  meta: '#6b6b6e'
  base-price: '#979799'
  discount: '#0199f8'
  last-minute: '#017bc6'
  footer-chip: '#595959'
  journal-text: '#333333'
  journal-muted: '#898989'
  journal-number: '#c0c0c0'
  hairline: '#dfe0e2'
  skeleton: '#f2f2f2'
  canvas: '#ffffff'
typography:
  section:
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.29
    letterSpacing: '-0.56px'
    use: Home section heading (h2, class title-28-sb)
  stay-name:
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: '-0.2px'
    use: Stay name on home cards (class label-16-sb)
  price:
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.44
    letterSpacing: '-0.54px'
    use: Stay price; the discount rate beside it is 700
  nav:
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    use: Uppercase top navigation (FIND STAY, PROMOTION, JOURNAL, PRE-ORDER)
  button:
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    use: 지도 action label
  subtitle:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Home section subtitle (class label-16-rg)
  toggle:
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.21px
    use: Selected 국내 / 해외 label; the unselected label is 600
  meta:
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.38
    use: Region and capacity line on stay cards
  badge:
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.33
    letterSpacing: 0.24px
    use: Photo badge label
  caption:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0.12px
    use: Footer outline buttons (class caption-12-rg)
  body:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1
    use: Body default (line height computes to 14px)
  journal-title:
    fontSize: 21px
    fontWeight: 400
    lineHeight: 1.5
    use: Magazine card title on the journal page
  journal-tab:
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.83
    use: Journal section tabs; Latin labels in Lato-Light, the selected one in Lato-Bold
rounded:
  xs: 4px
  sm: 5px
  md: 8px
  lg: 10px
  button: 20px
  pill: 100px
spacing:
  badge-y: 4
  badge-x: 8
  button-y: 8
  button-x: 16
  toggle-y: 6
  toggle-inner: 12
  toggle-outer: 16
  caption-y: 4
  caption-x: 8
  journal-frame: 15
components:
  nav-menu-button:
    type: tab
    backgroundColor: transparent
    textColor: '#1a1a1a'
    border: 2px solid transparent (bottom only)
    height: 26px
    typography: 16px / 600 / 24px Pretendard
    hover: 'bottom border 2px solid #1a1a1a'
    pressed: 'bottom border 2px solid #1a1a1a'
    selected: 'bottom border 2px solid #1a1a1a on the current section (FIND STAY on the listing, JOURNAL on the journal)'
    states: rest, hover, pressed and selected; all eleven unselected items on the three pages turn the bottom edge solid in both frames, and the current section keeps it at rest (surface-2 capture 1, surface-3 capture 4); focus is not declared from the capture
    use: Uppercase top navigation (FIND STAY, PROMOTION, JOURNAL, PRE-ORDER) at home::[data-omd-capture="4"]
  region-toggle:
    type: toggle
    backgroundColor: rgba(255, 255, 255, 0.24)
    textColor: '#171719'
    border: '1px solid #dfe0e2'
    rounded: 100px
    height: 44px
    padding: 6px 12px 6px 16px
    shadow: rgba(0, 0, 0, 0.08) 0px 4px 8px 0px
    selected: 'a #171719 thumb (62 x 42, 100px radius, rgba(0, 0, 0, 0.12) 0px 4px 12px 0px) under a white 15px / 700 label'
    states: 'selected segment read from rest values (국내 selected, 해외 at 15px / 600 #171719); no pointer frame'
    use: 국내 / 해외 switch in the home header at home::[data-omd-capture="1"], 120 x 44; padding is per segment
  map-button:
    type: button
    backgroundColor: '#000000'
    textColor: '#ffffff'
    rounded: 20px
    padding: 8px 16px
    height: 40px
    typography: 16px / 500 / 24px Pretendard
    shadow: rgba(26, 26, 26, 0.1) 0px 2px 6px 0px
    states: rest only; no state frame
    use: 지도 (map view) action floating over the FIND STAY listing at surface-2::[data-omd-capture="12"], 86 x 40 — the only filled action on the captured pages
    pressed: no visible change (measured 2026-10-16) (:hover + :active)
    focus: no visible change (measured 2026-10-16) on :focus-visible
  stay-badge:
    type: badge
    backgroundColor: rgba(26, 26, 26, 0.6)
    textColor: '#ffffff'
    rounded: 5px
    padding: 4px 8px
    height: 24px
    typography: 12px / 500 / 16px Pretendard
    use: Overlay labels on stay photographs on home (페스타, 프로모션, 단독소개); the white label is a child span with 0.24px tracking
  last-minute-badge:
    type: badge
    backgroundColor: '#017bc6'
    textColor: '#ffffff'
    rounded: 5px
    padding: 4px 8px
    height: 24px
    typography: 12px / 500 / 16px Pretendard
    use: 마감할인 (last-minute discount) overlay on stay photographs, five on home
  stay-card:
    type: card
    textColor: '#171719'
    size: 411px x 378px
    use: 'Stay card on home at home::[data-omd-capture="11"]: photograph with overlay badges, name 16px / 600 / 24px, region and capacity 13px / 400 in #6b6b6e, price 18px / 600 with the discount rate in 18px / 700 #0199f8 and the struck base price 13px / 500 in #979799; no card border, fill or shadow'
  listing-photo:
    type: card
    rounded: 10px
    size: 389px x 260px
    use: Photo slider at the top of each FIND STAY listing card (twenty captured)
  skeleton:
    type: card
    backgroundColor: '#f2f2f2'
    rounded: 8px
    use: Loading placeholders on the FIND STAY listing (a 389 x 260 photo block, a 90 x 24 title and region lines), captured while the list was still loading
  footer-chip:
    type: button
    backgroundColor: transparent
    textColor: '#595959'
    border: '1px solid #767676'
    rounded: 4px
    padding: 4px 8px
    height: 26px
    typography: 12px / 400 / 16px Pretendard
    states: rest only on three siblings per page; no state frame
    use: Small outline buttons in the footer beside the customer-centre hours at surface-2::[data-omd-capture="13"]
  journal-tab:
    type: tab
    backgroundColor: transparent
    textColor: '#898989'
    height: 33px
    typography: 18px / 400 / 33px Lato-Light
    selected: 'fg #000000 in Lato-Bold (MAGAZINE on the magazine page, capture 10)'
    states: selected variant read from rest values (capture 10 against captures 8, 9 and 11); no pointer frame
    use: Journal section tabs (나의 스테이 답사기, TRAVEL, MAGAZINE, PICK) at surface-3::[data-omd-capture="9"]; the hangul tab renders in the Pretendard stack
  journal-card:
    type: card
    border: '15px solid #ffffff'
    size: 664px x 683px
    use: 'Magazine card on the journal page: issue number in DroidSerif-Italic 27px #c0c0c0, title 21px / 400 / 31.5px #333333, and a more link in Abel 14px / 400 / 30px with 1.3px tracking in #000000 over a 1px rule'
fonts:
  roles:
    sans: Pretendard
---

# Design System Inspiration of Stayfolio

## Overview

### Visual Theme & Atmosphere

Stayfolio (스테이폴리오) is a Korean stay-curation and booking platform run by 주식회사 스테이폴리오 from Tongin-dong in Jongno, Seoul; its footer lists 장인성 as chief executive, an online-sales registration numbered 제2015-서울종로-0499호 and a general travel agency registration numbered 2018-000049호. Its business site states the idea plainly — "스테이폴리오는 머무름만으로 여행이 되는 공간을 제안합니다": a place where the stay itself is the trip — and describes ten years of curation and operating know-how, more than 1,500 stays, a million monthly visitors and partners such as Aman, Hoshino Resorts and 설해원. It presents itself as "안목있는 여행자의 선택", the choice of travellers with an eye, curating "철학이 담긴 공간" and building stays into a travel culture of their own.

The product reflects that editorial stance. Four uppercase sections — FIND STAY, PROMOTION, JOURNAL and PRE-ORDER, where new stays open for early booking at a discount — sit over a white page of stay photographs. The current direction is wider: the header's 국내 / 해외 switch and the home promotions now carry Kyoto, Tokyo and Shanghai hotels next to Korean private houses, there is a STAYFOLIO for Business programme for companies, and the JOURNAL runs its own series (나의 스테이 답사기, TRAVEL, MAGAZINE, PICK) in typefaces distinct from the rest of the site.

The interface is near-black on white. Body text is `#181818`, headings `#171719`, the uppercase navigation `#1a1a1a`; the only filled action is the black `#000000` 지도 pill with a white label, and the journal marks its current tab in black `#000000`. Colour arrives with commerce, not chrome: a bright `#0199f8` discount rate beside prices, `#017bc6` 마감할인 badges, and translucent `rgba(26, 26, 26, 0.6)` labels over photographs. Cards have no border, fill or shadow — the photograph is the card — and only floating controls lift off the page: the 국내 / 해외 switch with its dark thumb and the 지도 pill.

**Key Characteristics:**
- Near-black ink ladder on white: `#181818` body, `#171719` headings, `#1a1a1a` navigation, `#000000` action fill
- Uppercase Latin navigation at 16px / 600 whose 2px `#1a1a1a` underline appears on hover and marks the current section
- Photograph-first stay cards with 5px translucent badges; no card chrome
- Colour only for commerce signals: `#0199f8` discount rates, `#017bc6` last-minute badges
- Pill controls: 100px 국내 / 해외 switch, 20px 지도 pill, each with a soft shadow
- Class names expose a type scale — `title-28-sb`, `label-16-sb`, `label-16-rg`, `caption-12-rg`, `caption-13-bd`
- A separate editorial voice on the journal: Lato, Droid Serif Italic numerals and Abel links

### Primary tasks

- Browse curated domestic and overseas stays
- Switch between 국내 and 해외 while browsing
- Open the map view of the FIND STAY listing
- Read the JOURNAL before choosing a stay
- Pre-order a newly opening stay at an early discount
- Save stays to bookmarks and book through the platform

### Brand Narrative

The name reads, editorially, as "stay" plus "folio": a selected collection rather than an inventory. Stayfolio's own business pitch is about curation over a decade — "10년 간 쌓아온 큐레이션과 운영 노하우" — spaces with a philosophy behind them, and a culture of treating the stay as the destination. The company's scale now backs the stance: its business site counts more than 1,500 stays, 300-plus corporate clients and partners from Aman to Hoshino Resorts.

The product shows how that curation is growing. PRE-ORDER lets travellers book stays before they open; the JOURNAL keeps an editorial voice with its own typography; the 국내 / 해외 switch and the home promotions bring Japanese and Chinese hotels into the same monochrome frame as Korean private houses; and STAYFOLIO for Business offers the collection to companies for welfare and marketing programmes.

What the interface refuses, as an editorial reading of the captured pages: card chrome, colourful navigation and loud badges. What it embraces: photographs as cards, near-black type, an underline for state, and colour spent only where a price or a deadline needs it.

### Principles

1. **Curation over aggregation.** *UI implication:* present each stay as a photograph and a name, not a dense listing row.
2. **The photograph is the card.** *UI implication:* no borders, fills or shadows on stay cards; badges sit on the image.
3. **State by underline.** *UI implication:* navigation shows hover and the current section with a 2px `#1a1a1a` underline.
4. **One filled action.** *UI implication:* `#000000` pill with a white label for the key action; everything else is text or outline.
5. **Colour for value, not decoration.** *UI implication:* blue only for discount rates and last-minute badges.

### Personas

*Personas below are fictional archetypes informed by publicly observable Stayfolio user segments (design-conscious Korean travellers, overseas hotel seekers, corporate programme buyers), not individual people.*

**정다은, 32, 서울.** A designer planning a quiet weekend away. Chooses from the curated list because the photographs and names tell her more than an amenity grid.

**김도현, 38, 경기.** Reads the JOURNAL and watches PRE-ORDER for new stays opening at a discount before booking a family trip.

**박서윤, 41, 서울.** An HR manager comparing STAYFOLIO for Business for an employee welfare programme.

## Colors

Every token below was read on 2026-09-30 from the home page, the FIND STAY listing and the journal's magazine page.

### Primary
- **Primary** (`#000000`): the fill of the 지도 (map view) pill on the FIND STAY listing — the only filled action on the captured pages — with a white label. The same black marks the selected journal tab (MAGAZINE, in Lato-Bold). The rule for this reference is that the primary is the colour the product renders in a primary role; the captured pages are monochrome, so it is the measured primary action fill. The navigation's `#1a1a1a` underline (selected and hover) and the `#171719` thumb of the 국내 / 해외 switch are near-black selected states of the same register.
- **On Primary** (`#ffffff`): the 지도 label and the badge labels.

### Ink
- **Ink** (`#181818`): body text.
- **Heading** (`#171719`): section headings, stay names, prices and the unselected 국내 / 해외 label.
- **Nav** (`#1a1a1a`): the uppercase navigation and its underline.
- **Secondary** (`#767676`): section subtitles on home and footer links; the edge of the footer buttons.
- **Meta** (`#6b6b6e`): region and capacity line on stay cards.
- **Base Price** (`#979799`): struck base price; also the dates in the listing's search bar.
- **Footer Chip** (`#595959`): labels of the footer outline buttons.

### Commerce signals
- **Discount** (`#0199f8`): the discount rate beside a price (e.g. 20%).
- **Last Minute** (`#017bc6`): fill of the 마감할인 badge.

### Journal
- **Journal Text** (`#333333`): magazine card titles and copy.
- **Journal Muted** (`#898989`): unselected journal tabs.
- **Journal Number** (`#c0c0c0`): Droid Serif Italic issue numbers.

### Surface & Lines
- **Canvas** (`#ffffff`): page background.
- **Hairline** (`#dfe0e2`): the 1px edge of the 국내 / 해외 switch.
- **Skeleton** (`#f2f2f2`): loading placeholders on the listing.

### Not tokens
- A coral-to-red gradient fills the header's "해외 스테이 지금 보러 가기" promo pill; it was read by the same-day headless check, not by the collector, so it stays out of the tokens (values in the verification record).
- `#007aff` on the home banner's arrows is the carousel library's default theme colour, not a Stayfolio colour.
- `#444444` is the inherited colour of the listing's card containers; no visible label in it was identified, so it is not a token.

## Typography

### Font Family
- **Live surface use**: `Pretendard`, from the jsdelivr `pretendard@v1.3.9` dynamic-subset stylesheet the site links. Every element's stack reads `"Pretendard JP Variable", "Pretendard JP", Pretendard, -apple-system…`; the first two names have no `@font-face` on the pages and never load, so text falls through to Pretendard, whose subsets were loaded on all three pages in a same-day headless check (49 on home, 40 on the listing, 24 on the journal).
- **Live surface use, journal only**: `Lato-Light` and `Lato-Bold` (tab labels), `DroidSerif-Italic` (issue numbers) and `Abel` (more links), each self-hosted under `/_next/static/media/` and loaded on the magazine page.
- **Declared only**: `Lato-Regular` (self-hosted, no observed use).
- **Third-party, excluded**: `PretendardVariable-v1` and `InterRegular-ascii` come from `upload.codenbutter.com`, an embedded widget, not Stayfolio's own type.
- **Unresolved**: `Pretendard JP Variable` and `Pretendard JP` — named first on 764 elements but backed by no font file; they are not claimed.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Observed on |
|------|------|------|--------|-------------|----------------|-------------|
| Section | Pretendard | 28px | 600 | 36px (1.29) | -0.56px | Home section headings |
| Journal Title | Pretendard | 21px | 400 | 31.5px (1.5) | normal | Magazine cards |
| Journal Tab | Lato-Light / Lato-Bold | 18px | 400 | 33px | normal | Journal tabs |
| Price | Pretendard | 18px | 600 (rate 700) | 26px (1.44) | -0.54px | Stay prices |
| Nav | Pretendard | 16px | 600 | 24px (1.5) | normal | Uppercase navigation |
| Stay Name | Pretendard | 16px | 600 | 24px (1.5) | -0.2px | Stay cards |
| Button | Pretendard | 16px | 500 | 24px (1.5) | normal | 지도 pill |
| Subtitle | Pretendard | 16px | 400 | 24px (1.5) | normal | Section subtitles |
| Toggle | Pretendard | 15px | 700 / 600 | 15px | 0.21px | 국내 / 해외 |
| Body | Pretendard | 14px | 400 | 14px | normal | Body default |
| Meta | Pretendard | 13px | 400 | 18px (1.38) | normal | Region and capacity |
| Badge | Pretendard | 12px | 500 | 16px (1.33) | 0.24px | Photo badges |
| Caption | Pretendard | 12px | 400 | 16px (1.33) | 0.12px | Footer buttons |

### Principles
- **600 for structure, 400 for reading**: headings, names, prices and navigation are 600; body, subtitles and meta 400.
- **Tight on large, open on small**: -0.56px at 28px and -0.54px on prices; +0.21px, +0.24px and +0.12px on the small toggle, badge and caption labels.
- **A named scale**: class names such as `title-28-sb`, `label-16-sb` and `caption-12-rg` pair a size with a weight.
- **The journal speaks differently**: Latin tabs in Lato, italic serif numerals, spaced Abel links.

## Layout

### Spacing System
- Badges: 4px 8px; the 지도 pill 8px 16px; footer buttons 4px 8px
- 국내 / 해외 segments: 6px vertical, 12px inside and 16px outside
- Journal cards: a 15px white frame around each card

### Grid & Container
- Home stay rows run three 411px cards per row under a section heading and subtitle.
- The FIND STAY listing places 389px cards three to a row under a three-part search bar (place, dates, guests), with the 지도 pill floating over the list.
- The journal lays magazine cards two to a row at 664px.

### Whitespace Philosophy
- **The photograph is the card**: no card borders, fills or shadows; space and imagery do the grouping.
- **Chrome recedes**: navigation is text with an underline; controls are small pills.

### Border Radius Scale
- 4px: footer buttons
- 5px: photo badges
- 8px: loading skeletons
- 10px: listing photos
- 20px: the 지도 pill
- 100px: the 국내 / 해외 switch and its thumb

### Responsive Behavior

#### Breakpoints
Only the 1440px desktop layout was captured; no breakpoint values are claimed.

#### Touch Targets
- The 국내 / 해외 switch is 44px tall; the 지도 pill 40px; footer buttons 26px.

#### Collapsing Strategy
Not captured. The home page's markup includes a mobile tab bar (홈, 탐색, 프로모션, 북마크, 메시지) that the desktop capture did not measure.

#### Image Behavior
- Stay photographs fill their cards; listing photos are clipped at a 10px radius.

## Elevation & Depth

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Page, cards, navigation, badges |
| Translucent | `rgba(26, 26, 26, 0.6)` | Badges over photographs |
| Float | `rgba(0, 0, 0, 0.08) 0px 4px 8px 0px` | 국내 / 해외 switch |
| Thumb | `rgba(0, 0, 0, 0.12) 0px 4px 12px 0px` | Selected segment thumb |
| Action | `rgba(26, 26, 26, 0.1) 0px 2px 6px 0px` | 지도 pill |

**Shadow Philosophy**: content stays flat; only controls that float over content — the region switch and the map pill — carry soft shadows.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.toggle`: `rgba(0, 0, 0, 0.08) 0px 4px 8px 0px`
- `shadow.thumb`: `rgba(0, 0, 0, 0.12) 0px 4px 12px 0px`
- `shadow.button`: `rgba(26, 26, 26, 0.1) 0px 2px 6px 0px`

## Motion & Easing

The collector reads computed style, not animation. A same-day headless read of declared `transition` values found: the 지도 pill transitions colour, background, shadow and transform over 0.32s; the 국내 / 해외 thumb transitions its transform over 0.16s; the navigation declares `transition: all` with no duration, which matches the settled hover frames. No easing curve is claimed. Honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/stayfolio.json (capturedAt 2026-09-30), deterministic collector, 1440x900, logged out: www.stayfolio.com, /findstay (the site redirects it to its own default dates, check_in=2026-12-09&check_out=2026-12-10&adult_cnt=2; no booking step was taken), /journal/magazines.
- §1, §10, §11: home footer and promotions, business.stayfolio.com, and the terms page on stayfolio.notion.site, read 2026-09-30.
- The June body's "PRE-ORDER (physical publications)" was wrong: PRE-ORDER lists stays opening for early booking. Its "single saturated accent" and "sharp 0px photo cards" readings were also not supported by this capture.
- brunch.co.kr/@stayfolio could not be opened logged out and is not cited.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->

## Components

### Navigation

**Top navigation**
- Background: transparent
- Text: `#1a1a1a`
- Border: 2px solid transparent, bottom only
- Height: 26px
- Font: 16px / 600 / 24px Pretendard, uppercase labels
- Hover: bottom border 2px solid `#1a1a1a`
- Pressed: bottom border 2px solid `#1a1a1a`
- Selected: bottom border 2px solid `#1a1a1a` on the current section
- States: eleven unselected items on three pages agree in both frames; focus is not declared
- Use: FIND STAY, PROMOTION, JOURNAL, PRE-ORDER

**Journal tab**
- Background: transparent
- Text: `#898989`
- Height: 33px
- Font: 18px / 400 / 33px Lato-Light
- Selected: text `#000000` in Lato-Bold
- Use: 나의 스테이 답사기, TRAVEL, MAGAZINE, PICK

### Tabs & Toggles

**국내 / 해외 switch**
- Background: `rgba(255, 255, 255, 0.24)`
- Text: `#171719`
- Border: 1px solid `#dfe0e2`
- Radius: 100px
- Height: 44px (120px wide)
- Padding: 6px 12px 6px 16px per segment
- Shadow: `rgba(0, 0, 0, 0.08) 0px 4px 8px 0px`
- Selected: a `#171719` thumb (62 × 42, 100px radius, `rgba(0, 0, 0, 0.12) 0px 4px 12px 0px`) under a white 15px / 700 label
- Use: switching the home page between domestic and overseas stays

### Buttons

**지도 (map view) pill**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 20px
- Padding: 8px 16px
- Height: 40px
- Font: 16px / 500 / 24px Pretendard
- Shadow: `rgba(26, 26, 26, 0.1) 0px 2px 6px 0px`
- Use: floating over the FIND STAY listing

**Footer outline button**
- Background: transparent
- Text: `#595959`
- Border: 1px solid `#767676`
- Radius: 4px
- Padding: 4px 8px
- Height: 26px
- Font: 12px / 400 / 16px Pretendard, 0.12px tracking
- Use: small buttons beside the customer-centre hours

### Badges

**Photo badge**
- Background: `rgba(26, 26, 26, 0.6)`
- Text: `#ffffff`
- Radius: 5px
- Padding: 4px 8px
- Height: 24px
- Font: 12px / 500 / 16px Pretendard, 0.24px tracking
- Use: 페스타, 프로모션, 단독소개 over stay photographs

**Last-minute badge**
- Background: `#017bc6`
- Text: `#ffffff`
- Radius: 5px
- Padding: 4px 8px
- Height: 24px
- Use: 마감할인 over stay photographs

### Cards & Containers

**Stay card (home)**
- Text: `#171719`
- Size: 411 × 378
- Use: photograph with overlay badges; name 16px / 600; region and capacity 13px / 400 `#6b6b6e`; price 18px / 600 with the rate in `#0199f8` and the struck base price in `#979799`; no border, fill or shadow

**Listing photo**
- Radius: 10px
- Size: 389 × 260
- Use: the photo slider on each FIND STAY listing card

**Loading skeleton**
- Background: `#f2f2f2`
- Radius: 8px
- Use: photo, title and region placeholders on the FIND STAY listing

**Magazine card**
- Border: 15px solid `#ffffff`
- Size: 664 × 683
- Use: journal card with a `#c0c0c0` italic serif number, a 21px `#333333` title and an Abel more link in `#000000`

---

**Verified:** 2026-09-30 (deterministic collector capture of three public pages, logged out, plus first-party context)
**Tier 1 sources:** https://www.stayfolio.com/ ; https://www.stayfolio.com/findstay ; https://www.stayfolio.com/journal/magazines ; https://business.stayfolio.com/
**Tier 2 sources:** getdesign.md/stayfolio (HTTP 200; the served page contains no occurrence of the name) and styles.refero.design/?q=stayfolio (HTTP 200; the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

### States

Only these states were observed on the three captured pages.

| State | Observation |
|---|---|
| **Hover and pressed (top navigation)** | The transparent 2px bottom border turns solid `#1a1a1a`; eleven items on three pages agree. |
| **Selected (top navigation)** | The current section keeps the solid 2px `#1a1a1a` underline at rest (FIND STAY on the listing, JOURNAL on the journal). |
| **Selected (국내 / 해외)** | A `#171719` thumb sits under the selected white 15px / 700 label. |
| **Selected (journal tab)** | The current tab switches to `#000000` Lato-Bold. |
| **Loading (listing)** | `#f2f2f2` placeholders at 8px radius for photo, title and region lines. |

Focus rings, disabled, empty, error and success treatments were not captured and are not described.

Live state probe, 2026-10-16 (`https://www.stayfolio.com/findstay?check_in=2026-12-09&check_out=2026-12-10&adult_cnt=2`), `map-button`: pressed — no visible change (measured 2026-10-16); focus — no visible change (measured 2026-10-16).

## Do's and Don'ts

### Do
- Keep text on the near-black ladder: `#181818` body, `#171719` headings, `#1a1a1a` navigation
- Use `#000000` with a white label for the one filled action
- Underline navigation with 2px `#1a1a1a` on hover and for the current section
- Let photographs be the cards; label them with 5px translucent badges
- Reserve `#0199f8` for discount rates and `#017bc6` for last-minute badges
- Use pills for floating controls and give them soft shadows

### Don't
- Add borders, fills or shadows to stay cards
- Use colour for navigation or structure
- Set body text in pure black; `#000000` is for the action and the selected journal tab
- Mix the journal's Lato, serif and Abel faces into the booking interface

## Voice & Tone

Stayfolio writes like a travel editor: short, sensory lines about places, with the offer stated after the mood. Section labels stay in plain uppercase English; promotional lines are specific about the benefit without shouting.

| Context | Tone |
|---|---|
| Positioning | Calm, confident. "머무름만으로 여행이 되는 공간" |
| Section heads | Place-led and descriptive. "하이엔드를 말하는 스테이 4선" |
| Promotions | Mood first, then the benefit. "잠시 숨고르기, 스테이 테라피 — 최대 20% 할인 & 3만 원 쿠폰" |
| Navigation | Minimal uppercase English: FIND STAY, PROMOTION, JOURNAL, PRE-ORDER |
| Search | Conversational. "어디로 떠날까요?" |

**Voice samples (read on 2026-09-30):**
- "스테이폴리오는 머무름만으로 여행이 되는 공간을 제안합니다" — business site.
- "안목있는 여행자의 선택" — business site.
- "잠시 숨고르기, 스테이 테라피" — home promotion.
- "해외 스테이 지금 보러 가기" — header promo pill.
- "어디로 떠날까요?" — home search.

**Forbidden register**: discount-shouting, countdown urgency, exclamation-heavy hype, generic OTA phrasing.

## Agent Prompt Guide

### Quick Color Reference
- Primary action: `#000000` with `#ffffff` label
- Body: `#181818`; headings: `#171719`; navigation: `#1a1a1a`
- Secondary: `#767676`; meta: `#6b6b6e`; struck price: `#979799`
- Discount rate: `#0199f8`; last-minute badge: `#017bc6`
- Switch edge: `#dfe0e2`; skeleton: `#f2f2f2`; canvas: `#ffffff`

### Example Component Prompts
- "Create a top navigation: uppercase Pretendard 16px / 600 labels in #1a1a1a with a 2px transparent bottom border that turns solid #1a1a1a on hover and on the current section."
- "Create a stay card: a photograph with a 24px badge (rgba(26, 26, 26, 0.6), 5px radius, 4px 8px padding, 12px / 500 white label), then the name in 16px / 600 #171719, the region in 13px / 400 #6b6b6e and the price in 18px / 600 with the discount rate in 18px / 700 #0199f8. No border or shadow."
- "Create a floating map pill: #000000, white 16px / 500 label, 20px radius, 8px 16px padding, 40px tall, shadow rgba(26, 26, 26, 0.1) 0px 2px 6px 0px."
- "Create a 국내 / 해외 switch: 120 x 44 pill, rgba(255, 255, 255, 0.24) fill, 1px solid #dfe0e2, shadow rgba(0, 0, 0, 0.08) 0px 4px 8px 0px, with a #171719 thumb under the selected white 15px / 700 label."

### Iteration Guide
1. Near-black text only; one black filled action
2. Underline for navigation state, never colour
3. Photograph-first cards without chrome
4. Colour only for discount and last-minute signals
5. Radii: 4 / 5 / 8 / 10 / 20 / 100px
6. Soft shadows only on floating controls

---

## Governance

### Known Gaps

- **Contrast, `nav-menu-button`.** Text `#1a1a1a` on `#00000000` measures 1.21:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `footer-chip`.** Text `#595959` on `#00000000` measures 3.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
