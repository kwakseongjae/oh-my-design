---
name: Hanatour
colors:
  primary: '#5e2bb8'
  brand-hover: '#5123af'
  brand-active: '#441ca8'
  brand-subtle: '#ede6f7'
  accent-mint: '#08d1d9'
  background: '#ffffff'
  foreground: '#333333'
  heading: '#111111'
  muted: '#666666'
  border: '#e5e5e5'
  border-medium: '#dddddd'
  surface-subtle: '#f5f5f5'
  critical: '#c62828'
  positive: '#288828'
typography:
  heading:
    fontSize: 30px
    fontWeight: 600
    use: HDS headline-md size and emphasized weight; declared scale, not a measured h2
  body:
    fontSize: 16px
    fontWeight: 400
    use: HDS body-md size and regular weight; declared scale
  navigation:
    fontSize: 15px
    fontWeight: 400
    lineHeight: 56px
    letterSpacing: '-0.4px'
    use: Measured 베스트 navigation link
rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
  2xl: 16px
  3xl: 20px
  4xl: 40px
spacing:
  hds-1: 4
  hds-2: 8
  hds-3: 12
  hds-4: 16
  hds-5: 20
  hds-6: 24
  hds-8: 32
  hds-10: 40
  hds-12: 48
  hds-16: 64
components:
  trip-search:
    type: button
    backgroundColor: '#333333'
    textColor: '#ffffff'
    border: '1px solid #333333'
    rounded: 4px
    height: 56px
    padding: 0px 35px
    typography: 17px / 400
    hover: 'bg #111111; border 1px solid #111111'
    use: 해외여행 검색 — hero search button, width 330px. Hover measured with fixed overlays hidden; pressed and keyboard focus unmeasured.
  benefits:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#666666'
    border: '1px solid #dddddd'
    rounded: 4px
    height: 24px
    padding: 0px 10px
    typography: 12px / 400
    hover: 'border 1px solid #111111'
    use: 카드/제휴혜택 — a secondary action link in the customer-service section, width 84.9px. Hover measured with fixed overlays hidden; pressed and keyboard focus unmeasured.
  nav-best:
    type: button
    textColor: '#111111'
    rounded: 0px
    height: 57px
    padding: 0px
    typography: 15px / 400
    hover: 'fg #5e2bb8; ::after bg #5e2bb8, width 37.6953px, height 3px'
    use: 베스트 — a transparent navigation link on white, width 37.7px, line-height 56px. Hover measured with fixed overlays hidden; pressed and keyboard focus unmeasured.
fonts:
  roles:
    sans: Pretendard
---

# Design System Inspiration of Hanatour

## Overview

### Visual Theme & Atmosphere

Hanatour (하나투어) is a Korean travel company whose [company overview](https://www.hanatourcompany.com/kr/company/overview/about) dates its beginnings to 1993. Its website brings package holidays, flights, hotels and local tours into one booking surface. The [online-service description](https://www.hanatourcompany.com/kr/business/online-service) extends that remit from planning to travel and subsequent recording, with services including a planner and travel content on a map.

The [official history](https://www.hanatourcompany.com/kr/company/history) records a new CI and rebranding in October 2021. The current [CI page](https://www.hanatourcompany.com/kr/company/ci) explains the symbol as a map containing an H. Royal Violet and Playful Mint give this travel identity its distinctive pairing: an unfolding map, possibility and the anticipation of travel. The homepage expresses it through a purple logo and navigation feedback, destination photography, and mint campaign actions on a predominantly white interface. These visual observations describe the captured page.

The measured homepage is the Korean-language edition at `www.hanatour.com/v2/home` (`lang="ko"`), reached from the root URL. At 1440×1000, its search form sits beside large campaign imagery, followed by travel offers and editorial destination cards. One useful distinction for a builder: the actual hero search button is charcoal, while the HDS brand palette is purple.

### Brand Narrative

The [history](https://www.hanatourcompany.com/kr/company/history) records founding as 국진여행사 in November 1993, the change to 하나투어 in March 1996, and the opening of the online wholesale system 하나투어닷컴 in June 2004. In July 2021 it launched 하나팩 2.0 and 하나LIVE, followed by the October CI and rebrand. Today's online-service page describes planning, travel and post-trip records together; that wider journey gives context to the homepage's combination of booking controls and travel storytelling.

### Principles

These are construction rules inferred from the measured surface: use white and dark ink for the booking interface; make navigation feedback explicitly purple; give destination imagery substantial space; preserve separate geometry for compact secondary actions and the main search action. The map-and-H symbol and its unchanged form are official CI instructions.

### Personas

No first-party persona research was verified.

## Colors

The live census contains 788 computed root custom properties and 880 declared property names. Of these, 618 computed / 620 declared names belong to `--hds-*`. This is the site's CSS namespace; no separately published design-system documentation was verified. Tailwind defaults, Swiper and Sonner properties are excluded from the palette below. HDS-linked utility aliases remain evidence of site choices even when exposed through Tailwind.

| Reference role | Value | Measured or declared source |
|---|---|---|
| Primary | `#5e2bb8` | `--hds-color-semantic-bg-brand-default`; also measured on the hovered navigation label |
| Brand hover | `#5123af` | `--hds-color-semantic-bg-brand-hover`; a root declaration, not the search button's hover |
| Brand active | `#441ca8` | `--hds-color-semantic-bg-brand-active`; a root declaration, not a measured pressed state |
| Brand subtle | `#ede6f7` | `--hds-color-semantic-bg-brand-subtle` |
| Accent mint | `#08d1d9` | `--hds-color-mint-400` and `--hds-color-semantic-bg-accent-mint-default` |
| Background | `#ffffff` | `--hds-color-semantic-bg-neutral-primary`; white backgrounds ×50 in the census |
| Foreground | `#333333` | Most frequent paragraph ink, ×26; also `--hds-color-gray-900` |
| Heading / strong interface ink | `#111111` | `--hds-color-semantic-fg-neutral-primary`; actual navigation and card-title ink |
| Muted | `#666666` | `--hds-color-semantic-fg-neutral-subtle`; secondary action and card description |
| Border | `#e5e5e5` | `--hds-color-semantic-stroke-neutral-default` |
| Medium border | `#dddddd` | `--hds-color-semantic-stroke-neutral-medium`; secondary action at rest |
| Subtle surface | `#f5f5f5` | `--hds-color-semantic-bg-neutral-subtle` |
| Critical | `#c62828` | `--hds-color-semantic-fg-critical-primary`; declared semantic role only |
| Positive | `#288828` | `--hds-color-semantic-fg-positive-strong`; declared semantic role only |

The corporate CI specifies purple RGB 94, 43, 184 and mint RGB 8, 209, 217, matching the two HDS values above. The lower campaign link instead measures `#07d0da`; preserve that surface-specific value when reproducing that link. It is distinct from the CI mint.

## Typography

**Official product use:** no opened company writing explicitly identifies the website's UI typeface. The CI page documents the brand's dedicated face **여행그자체**, with Light, Regular and Bold labels; that statement establishes brand identity, without establishing a site-wide UI role.

**Live-loaded:** the census records Pretendard at 400, 500, 600, 700 and 800, with duplicate lowercase/capitalized family registrations. Body, h1 and button computed family stacks begin with Pretendard; all six selected controls also declare it. The machine family is therefore **Pretendard**, classified as live-loaded. `hnt-font` is also loaded at CSS weights 400 and 600. Its `@font-face` sources are `JourneyItself-Regular.otf` and `JourneyItself-Bold.otf` on `image.hanatour.com`; this connects the live alias to the named font assets, without assigning it an unmeasured component role.

**Official distributed assets:** product CSS serves Pretendard from both same-origin Next static WOFF2 paths and Hanatour's image host, and declares the JourneyItself OTF files there. These are observed web-serving declarations. A separate public font download package and reuse license were not verified; no font files were downloaded by the author.

**Declared-only:** Pretendard 900 and `hnt-font` 500 are declared but absent from the loaded-face list. The latter points to `JourneyItself-Light.otf`; the CSS weight is 500, regardless of the filename. The HDS family identifier `"JourneyItself"` is a custom-property value, not a loaded family registration under that name. These declarations receive no specimen. The remaining fallback names in the body stack do not establish loaded brand faces.

**Unresolved:** licensing, the exact elements that loaded `hnt-font`, and any claim that the literal `JourneyItself` family name is registered. Substitute: none chosen.

The HDS declared Pretendard scale is display 48 / 40 / 36px; headline 34 / 30 / 26px; title 22 / 20px; body 17 / 16 / 15px; label 14 / 13px; caption 12 / 11 / 10 / 9px. Its regular, emphasized and strong weights are 400, 600 and 700. The frontmatter's heading 30px/600 and body 16px/400 come from this declared scale, rather than a census of rendered headings or paragraphs.

Measured controls give more specific typography: search action 17px/400 with 54px line-height; navigation 15px/400 with 56px line-height and −0.4px tracking; secondary action 12px/400 with 22px line-height. The domestic card's visible title is 17px/600, even though its anchor is 14px/400.

## Layout

The desktop survey places the main content at x=113px, with left and right domestic-card positions spanning to x=1313px: a 1200px content extent. The HDS layout declarations independently specify a 1200px maximum content width, 12 columns, 24px gutter and 40px section gap. These are declared layout values; a twelve-column rendered grid was not measured.

Keep search tasks compact beside the campaign image, then move into image-led offer rows and editorial travel stories. The domestic row includes 190px square images and a larger central feature card. The header separates utility links, global search and a 57px navigation row.

The spacing tokens used in the frontmatter are `--hds-spacing-1/2/3/4/5/6/8/10/12/16`: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64px. They are root declarations, not inferred distances between every visible element.

### Responsive Behavior

Only the 1440×1000 desktop surface was measured; mobile reflow, breakpoints and touch states are unverified.

## Elevation & Depth

All six selected controls have `box-shadow: none` at rest. Use their measured borders and image blocks as the available depth reference; no reusable shadow token was verified.

## Motion & Easing

All six controls report the raw computed transition `all 0s ease 0s`. No nonzero transition or easing curve was measured for these controls. Root motion declarations are preserved in the research inventory without being assigned to these interactions.

---

First-party sources: [live homepage](https://www.hanatour.com/), [company overview](https://www.hanatourcompany.com/kr/company/overview/about), [history](https://www.hanatourcompany.com/kr/company/history), [CI](https://www.hanatourcompany.com/kr/company/ci), [online services](https://www.hanatourcompany.com/kr/business/online-service). Captured 2026-11-03 in Korea Standard Time; raw census, control findings and source quotations are recorded in `verification.md` and `report.md`.

## Components

Hover values below are computed observations after fixed overlays were temporarily hidden. A delayed marketing popup prevented reliable keyboard focus and pressed measurements. Hover matched at the snapshot, but the capture tool reported that it stopped matching during the subsequent crop; those images are not proof of the hover appearance.

| Control | Identity at rest | Measured hover |
|---|---|---|
| **해외여행 검색** (`trip-search`) | 330×56px; 4px radius; padding 0px 35px; Pretendard 17px/400; `#333333` background and 1px border; `#ffffff` label | Background and border become `#111111`; label stays white |
| **카드/제휴혜택** (`benefits`) | Secondary action **link**, 84.9×24px; 4px radius; padding 0px 10px; 12px/400; `#ffffff` background, `#666666` label, 1px `#dddddd` border | Border becomes `#111111`; background and label stay unchanged |
| **베스트** (`nav-best`) | Navigation **link**, 37.7×57px; 0px radius and padding; 15px/400; transparent on white; `#111111` label | Label becomes `#5e2bb8`; a `::after` bar appears at 37.6953×3px in the same purple |

Three additional controls remain prose references because their only measured state was unchanged hover. The header searchbox is 334×40px, square, transparent on white, with 15px/400 `#111111` ink and no own border. Its input geometry excludes the surrounding capsule. The domestic editorial card link is 190×300px with a 190×190px image, no own background or border, a `#111111` title and `#666666` description. Its anchor's inherited `lab(2.75381 0 0)` is not its visible title colour. The lower **쿠폰팩 받으러 가기** link is 320×56px with a 50px radius, padding 16px 0px, 16px/700 type, `#07d0da` fill and `#111111` ink.

HDS radius declarations are 0, 2, 4, 6, 8, 12, 16, 20 and 40px; its full-radius value is 9999px. The pill-shaped campaign action uses its own measured 50px radius.

### States

Hover is measured for all six controls. Three change as described in §4. Searchbox and campaign-link comparisons cover the control, its pseudo-elements and three ancestor levels; the unchanged card comparison additionally covers six descendants, two empty, including one image. This establishes no change only within that computed-style/attribute scope.

Pressed is **UNMEASURED** for every control because `:active` did not match while the pointer button was down. Keyboard focus is **UNMEASURED**: the searchbox was reached but `:focus-visible` did not match, and a delayed popup trapped the Tab walk before the other controls. No focus, pressed or disabled tokens are declared. No browser `auto` outline is promoted to a brand token.

## Do's and Don'ts

- Preserve the official map-and-H logo artwork and its shape; the CI instructions require retaining the original form.
- Keep the measured search action charcoal and use purple for the measured navigation hover.
- Distinguish the 4px action corners, square navigation/card anchors and campaign pill geometry.
- Keep declared HDS semantic states distinct from actual component measurements.
- Use the visible card-title ink, rather than the anchor's inherited colour.
- Leave unmeasured pressed and keyboard-focus behavior unspecified.

## Voice & Tone

The live homepage asks “고객님, 어떤 여행을 꿈꾸시나요?” and labels its action “해외여행 검색”. These examples combine a personal travel question with an explicit task label. The official slogan is “꿈꾸는 대로, 펼쳐지다”. This is an observation of the opened copy, not a verified editorial style guide.

## Agent Prompt Guide

“Build a Hanatour-style desktop travel search area on white. Use live-loaded Pretendard. Set the main search action to 330×56px, radius 4px, horizontal padding 35px, 17px/400 white text on `#333333`, and change its fill and 1px border to `#111111` on hover. Set the navigation to 15px/400 and 57px high; the 베스트 link turns `#5e2bb8` and gains a 3px purple underline on hover. Pair it with destination photography and the measured editorial card geometry.”
