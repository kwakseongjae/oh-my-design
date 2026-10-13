---
name: Elice
colors:
  primary: '#212121'
  on-primary: '#ffffff'
  ink: '#191f28'
  canvas: '#ffffff'
  slate: '#343e4b'
  muted: '#66717e'
  accent: '#7353ea'
  hairline: '#e9ebf0'
  success-tint: '#dfebe0'
  success-deep: '#1b5e20'
  tile-blue: '#2f5efb'
  tile-magenta: '#b853ea'
  tile-sky: '#03a9f4'
typography:
  display:
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.2
    use: Page title on the Cloud pricing page (h2 엘리스클라우드 요금제), Elice DX Neolli, tracking -2.4%
  section:
    fontSize: 40px
    fontWeight: 500
    lineHeight: 1.2
    use: Home statistics and section heads (h3), Elice DX Neolli, tracking -2.4%
  subsection:
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.24
    use: Pricing sub-heading (h4 Storage 요금제), Elice DX Neolli, tracking -1%
  product-label:
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    use: Product names beside the icon tiles on home, Elice DX Neolli
  body:
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    use: Page body, card copy and footer menu links, Pretendard
  button:
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.71
    use: Header and hero action labels, Pretendard (24px line)
  button-large:
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.6
    use: Closing-band action labels, Pretendard (24px line)
  button-small:
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.69
    use: 더 보기 on the case-study cards, Pretendard (22px line)
  tab:
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.25
    use: Product tabs on the pricing page, Pretendard (17.5px line)
  toggle:
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.75
    use: Selected option of the GPU, NPU and CPU switch, Pretendard; unselected options compute 500 (22.75px line)
  link:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.71
    use: 가격 문의 links in the pricing table, Pretendard (23.94px line)
  menu-label:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    use: Footer menu group labels (AI 교육, AI 전환), Pretendard (19.6px line)
  badge:
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.5
    use: Status tags (모집 중, 채용 중), Pretendard (16.5px line)
rounded:
  button: 8px
  button-large: 10px
  small: 6px
  tag: 4px
  card: 24px
  tile: 12px
spacing:
  button-y: 8
  button-x: 16
  card: 32
  menu-x: 12
  logo-gap: 32
components:
  primary-button:
    type: button
    backgroundColor: '#212121'
    textColor: '#ffffff'
    rounded: 8px
    padding: 8px 16px
    height: 40px
    typography: 14px / 600 / 24px Pretendard
    states: rest on all three captured pages; the collector recorded no hover, pressed or focus frame for this control, so no state value is declared
    use: 무료로 시작하기 in the header of home and the pricing page at home::[data-omd-capture="8"], 120 x 40 (MuiButton-contained, colorSecondary)
  hero-primary-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#191f28'
    rounded: 8px
    padding: 8px 16px
    height: 40px
    typography: 14px / 600 / 24px Pretendard
    states: rest; the recorded hover and pressed frames were read while the background was still changing, so no state value is declared
    use: 무료로 시작하기 in the home hero at home::[data-omd-capture="9"], 120 x 40 (MuiButton-contained, colorPrimary)
  outline-button:
    type: button
    backgroundColor: transparent
    textColor: '#212121'
    border: 1px rgba(33,33,33,0.5)
    rounded: 8px
    padding: 7px 15px
    height: 40px
    typography: 14px / 600 / 24px Pretendard
    states: rest; the recorded hover and pressed frames were read mid-change, so no state value is declared
    use: 도입문의 in the header at home::[data-omd-capture="7"], 80 x 40 (MuiButton-outlined, colorSecondary)
  hero-outline-button:
    type: button
    backgroundColor: transparent
    textColor: '#ffffff'
    border: '1px #ffffff'
    rounded: 8px
    padding: 7px 15px
    height: 40px
    typography: 14px / 600 / 24px Pretendard
    states: rest only; no hover or pressed frame was recorded
    use: 도입문의 beside the hero action at home::[data-omd-capture="10"], 80 x 40
  nav-button:
    type: button
    backgroundColor: transparent
    textColor: '#212121'
    rounded: 8px
    padding: 8px 16px
    height: 40px
    typography: 14px / 600 / 24px Pretendard
    states: rest; the recorded hover and pressed frames were read at the start of the background change, so no state value is declared
    use: Header menu buttons (엘리스AX, 엘리스클라우드, 리소스) plus 블로그 and 로그인 at home::[data-omd-capture="1"], 103 x 40; the same style carries 더 알아보기 on home
  small-text-button:
    type: button
    backgroundColor: transparent
    textColor: '#212121'
    rounded: 6px
    padding: 5px 12px
    height: 32px
    typography: 13px / 600 / 22px Pretendard
    states: rest only; no state frame
    use: 더 보기 on the case-study cards on home at home::[data-omd-capture="23"], 79 x 32
  large-primary-button:
    type: button
    backgroundColor: '#212121'
    textColor: '#ffffff'
    rounded: 10px
    padding: 11px 20px
    height: 46px
    typography: 15px / 700 / 24px Pretendard
    states: rest only; no state frame
    use: '무료로 시작하기 in the closing band of the pricing page at surface-2::[data-omd-capture="28"], 134 x 46; the home closing band repeats it with a #ffffff fill and #191f28 label'
  large-outline-button:
    type: button
    backgroundColor: transparent
    textColor: '#212121'
    border: 1px rgba(33,33,33,0.5)
    rounded: 10px
    padding: 10px 19px
    height: 46px
    typography: 15px / 700 / 24px Pretendard
    states: rest only; no state frame
    use: 도입문의 beside it at surface-2::[data-omd-capture="29"], 92 x 46; white-bordered with a white label on the home closing band
  product-tab:
    type: tab
    backgroundColor: transparent
    textColor: '#343e4b'
    rounded: 8px
    padding: 10px 8px
    height: 44px
    typography: 14px / 600 / 17.5px Pretendard
    selected: 'fg #7353ea on the Mui-selected tab (capture 9)'
    states: selected read from rest values (capture 9 against 10); the recorded hover and pressed frames are not declared because their settling was not confirmed
    use: Product tabs on the pricing page (엘리스AI클라우드, ECI) at surface-2::[data-omd-capture="10"]
  segmented-toggle:
    type: toggle
    backgroundColor: transparent
    textColor: rgba(0,0,0,0.54)
    rounded: 6px
    padding: 6px
    height: 35px
    typography: 13px / 500 / 22.75px Pretendard
    selected: 'bg #ffffff, fg #191f28, weight 700 (capture 11)'
    shadow: rgba(0, 0, 0, 0.04) 0px 4px 5px 0px, rgba(0, 0, 0, 0.04) 0px 4px 24px 0px on the selected option
    states: selected read from rest values (capture 11 against 12); no hover frame
    use: GPU, NPU and CPU switch on the pricing page at surface-2::[data-omd-capture="12"], 128 x 35 per option
  status-chip:
    type: badge
    backgroundColor: '#dfebe0'
    textColor: '#1b5e20'
    rounded: 4px
    padding: 0px 4px (label)
    height: 20px
    typography: 11px / 500 / 16.5px Pretendard
    use: 모집 중 and 채용 중 tags in the footer menu (MuiChip colorSuccess), 39 x 20; the label span computes 11px / 700
  feature-card:
    type: card
    backgroundColor: '#ffffff'
    textColor: '#191f28'
    border: '1px #e9ebf0'
    rounded: 24px
    padding: 32px (content block)
    size: 522px x 353px
    use: Outlined cards near the top of home (MuiCard on an outlined Paper), no shadow
  product-icon-tile:
    type: avatar
    backgroundColor: '#7353ea'
    textColor: '#ffffff'
    rounded: 12px
    size: 32px x 32px
    use: 'Square product icon tiles beside product names on home (MuiAvatar); fills are #7353ea, #2f5efb, #b853ea and #03a9f4 by product, and the footer menu repeats them at 24 x 24 with a 6px radius'
  footer-menu-item:
    type: listItem
    backgroundColor: transparent
    textColor: '#191f28'
    rounded: 4px
    padding: 8px 12px
    height: 40px
    typography: 16px / 500 / 24px Pretendard
    states: rest only; no state frame
    use: Footer menu links (엘리스LXP, 엘리스테스트, 런박스 and the rest) at home::[data-omd-capture="90"], 237 x 40; group labels (AI 교육, AI 전환) at capture 89 read rgba(25,31,40,0.38), 14px / 400
fonts:
  roles:
    display: Elice DX Neolli
    body: Pretendard
---

# Design System Inspiration of Elice

## Overview

### Visual Theme & Atmosphere

Elice (엘리스) is 엘리스그룹, a Korean company founded in 2015 that now calls itself an "AI 풀스택 기업" — an AI full-stack company. Its newsroom divides the business into two halves: AX (AI transformation), which covers industry AX solutions, the learning platform 엘리스LXP for training AI talent of every age and the Helpy series of AI agents; and AI Cloud, which covers the AI PMDC mobile modular data centre, the ECI cloud-infrastructure OS and 엘리스AI클라우드. On 2026-08-21 the same newsroom announced that the company had filed its securities registration for a KOSDAQ listing. The brand page explains the logo in two parts: text drawn in a programming font stands for Elice's technical skill and problem solving, and the irregular shape around it stands for possibilities and opportunities not yet defined — under the line "기회와 가능성을 만들어내는 기술". Elice also gives away three typefaces of its own, among them 엘리스 DX널리체, which is named for spreading the value of DX "널리" (widely).

The captured pages of elice.io read as a quiet, near-monochrome frame. Body text is a blue-black `#191f28` on a white `#ffffff` page, and the header actions are drawn in near-black `#212121`: a filled 무료로 시작하기, an outlined 도입문의 and text menu buttons, all 40px tall with an 8px radius. In the hero the same pair turns inverse — a white `#ffffff` action with a `#191f28` label and a white-bordered outline. Headings are set in Elice DX Neolli at weight 500 with −2.4% tracking. Violet `#7353ea` enters on the Elice Cloud pricing page, where it marks the selected product tab and the 가격 문의 links, and it is one of four product icon colours next to blue `#2f5efb`, magenta `#b853ea` and sky `#03a9f4`. Surfaces are flat: cards take a 1px `#e9ebf0` border and a 24px radius, and the only shadow on the captured pages sits under the selected option of the pricing page's GPU, NPU and CPU switch.

**Key Characteristics:**
- Near-black `#212121` fills the contained primary action (무료로 시작하기) on light backgrounds on every captured page
- Violet `#7353ea` for the selected pricing tab and the 가격 문의 links, not for action fills
- Elice DX Neolli headings at weight 500 (48px, 40px, 32px) with −2.4% tracking at 48px and 40px
- Pretendard for body and interface text, weight 500 in the body
- Radii of 8px (actions), 10px (large actions), 6px (small buttons and toggles), 4px (tags and menu items), 12px (icon tiles) and 24px (cards)
- Four product icon colours: `#7353ea`, `#2f5efb`, `#b853ea`, `#03a9f4`
- Flat surfaces separated by `#e9ebf0` borders; one soft shadow, on the selected toggle
- A header pair — filled and outlined — that repeats on every captured page and inverts over the hero

### Primary tasks

- Start with Elice for free (무료로 시작하기)
- Ask Elice about adopting its products (도입문의)
- Compare Elice AI Cloud plans by GPU, NPU or CPU
- Ask for the price of a GPU plan (가격 문의)
- Download Elice's logos and free typefaces from the brand page

### Brand Narrative

엘리스그룹 was founded in 2015. Its newsroom item of 2026-08-21, "엘리스그룹, 증권신고서 제출… 코스닥 상장 본격화", describes it as an AI full-stack company that supplies AI infrastructure, cloud and industry AX solutions on the strength of AI cloud technology it developed itself. The two business areas are AX — industry AX solutions, 엘리스LXP as a platform for training AI talent of every age, and the Helpy series of AI agents and enterprise AX solutions — and AI Cloud — the AI PMDC mobile modular data centre, the ECI cloud-infrastructure OS and 엘리스AI클라우드. The filing opened the offering process for a KOSDAQ listing, and the company says it will use the proceeds for AI infrastructure and cloud technology and for growth through its US, Singapore and Japan subsidiaries.

The brand page states the identity plainly. The logo's lettering is drawn in a programming font to signify technical skill and problem solving; the irregular shape that wraps it signifies possibilities and opportunities not yet defined. The line beneath is "기회와 가능성을 만들어내는 기술" — technology that creates opportunity and possibility. The page lists Elice Violet and Elice Black as the brand colours and publishes logos for the group and for 엘리스엔터프라이즈, 엘리스스쿨, 엘리스트랙 and 엘카데미.

Type is part of the brand's public offer. 엘리스 디지털 배움체 is given away "모두에게 손쉽고 효율적인 학습을 위해" — for easy, efficient learning for everyone; 엘리스 디지털 코딩체 adapts it to fixed width for code; and 엘리스 DX널리체, the face that sets elice.io's headings, is named for spreading the value of digital transformation widely. On the captured pages that identity reads as a near-monochrome frame, the bespoke DX Neolli headings, and violet held for selection and links.

### Principles

1. **Learn, build, run in one place.** "배우고, 만들고, 실행까지 한번에" is the home headline. *UI implication:* keep one header, one action pair and one type system across education and cloud pages.
2. **Technology that creates opportunity.** The brand line. *UI implication:* precise, technical detail (a programming-font logo, exact pricing tables) framed in open space. (An editorial reading of the brand page.)
3. **Monochrome action, violet selection.** *UI implication:* fill actions with `#212121`; keep `#7353ea` for the selected tab and links. (An editorial reading of the captured pages.)
4. **Share the type.** Elice distributes its typefaces free. *UI implication:* the display face that carries the brand is the one it gives away.
5. **Flat and outlined.** *UI implication:* separate with `#e9ebf0` borders, not shadows.

### Personas

*Personas below are fictional archetypes informed by the audiences named on the captured pages (educators and developers) and in the newsroom (public, finance and defence customers), not individual people.*

**정하윤, 41, 대전.** A training lead at a public institution. Opens 도입문의 after reading "교육자를 위한 AI 기반의 안정적인 교육 운영" and checks the security section before recommending 엘리스LXP.

**오세진, 29, 판교.** An ML engineer at a start-up. Switches the pricing table between GPU and NPU on the 엘리스AI클라우드 tab and sends a 가격 문의 for the plan that fits.

**한도현, 35, 서울.** A designer who downloaded 엘리스 DX널리체 from the brand page and uses it under its SIL Open Font License in presentations.

## Colors

Every token below was read by the deterministic collector on 2026-09-30 from https://elice.io/ko and the Elice Cloud pricing page (https://elice.io/ko/cloud/pricing, which lands on /ko/cloud/pricing/ai-cloud).

### Primary
- **Action Black** (`#212121`): The fill of 무료로 시작하기 in the header of every captured page and of the large 무료로 시작하기 that closes the pricing page — five filled actions in the colour census, all this colour. It is also the text of the header menu buttons and of the outlined 도입문의. It is the primary because it is the colour the product renders in its primary action role. Violet `#7353ea` was considered and is the accent instead: on the captured pages it never fills an action; it colours the selected tab and the 가격 문의 links and fills one of the icon tiles. The home page's MUI button variables read `--variant-textColor: #7353ea` and `--variant-outlinedColor: #7353ea` (headless survey, 2026-09-30), which shows the theme keeps violet for text and outlined buttons, while every filled action on a light background uses the `colorSecondary` near-black; over the hero, the filled action is `colorPrimary` in white.
- **On Primary** (`#ffffff`): Labels on the filled actions.

### Accent
- **Elice Cloud Violet** (`#7353ea`): The label colour of the selected product tab (엘리스AI클라우드) on the pricing page, the 14 가격 문의 links in its pricing table, and the icon tile of one product.

### Neutral & Surface
- **Canvas** (`#ffffff`): Page background, cards, the inverse hero action and the selected toggle option.
- **Hairline** (`#e9ebf0`): The 1px border of the outlined cards on home.

### Text
- **Ink** (`#191f28`): Body text, statistics, card copy, footer menu links and labels on white actions.
- **Slate** (`#343e4b`): Section headings on home and the pricing page, and the unselected product tab.
- **Muted** (`#66717e`): Card descriptions on home and the footer's business-registration line.

### Status
- **Success Tint** (`#dfebe0`) with **Success Deep** (`#1b5e20`): The 모집 중 and 채용 중 tags in the footer menu.

### Product icon tiles
- `#7353ea`, **Tile Blue** (`#2f5efb`), **Tile Magenta** (`#b853ea`) and **Tile Sky** (`#03a9f4`) fill the square MuiAvatar tiles beside product names on home and in the footer menu. On home the sky tiles sit in the developer-infrastructure section and the violet, magenta and blue tiles in the education section.

### Brand assets, not tokens
- The brand page (https://elice.io/ko/resources/brand) lists **Elice Violet** as `HEX: #6700e6`, but its own RGB line reads R:130 G:0 B:230, which is `#8200e6`, and its CMYK line reads C:78 M:82 Y:0 K:0. Neither value renders on the captured pages, and both differ from the product's `#7353ea`, so Elice Violet is recorded here as a brand asset, with the page's internal mismatch noted, and is not a token.
- The same page lists **Elice Black** (`#000000`) with reverse versions in white, and offers logo downloads for (주)엘리스그룹, 엘리스엔터프라이즈, 엘리스스쿨, 엘리스트랙 and 엘카데미. The logo artwork was not measured.

## Typography

### Font Family
- **Live surface use**: `Elice DX Neolli` (28 observed uses: the pricing h2, every h3, the pricing h4 and the product labels beside the icon tiles), served from `cdn-front-door.elice.io/font/static/f/dxneolli/`; home loads its 300 and 500 weights and the pricing page its 500 weight. `Pretendard` carries all other text: the face is self-hosted as `PretendardVariable-s.p.77d5d991.woff2` under `elice.io/_next/static/media/` and registered under the family name `pretendard` (44 elements name that family directly). The body stack begins with "Pretendard Variable", which no loaded face carries; its next entry, "Pretendard", matches the loaded face, because CSS matches family names case-insensitively, so body and interface text render in Pretendard.
- **Official distributed font assets**: the brand page distributes three Elice typefaces with web-font, OTF and TTF downloads and a licence PDF each (fetched 2026-09-30; the font.elice.io links redirect to cdn-front-door.elice.io).
  - **엘리스 DX널리체**: Light, Regular and Bold. The PDF says (주)엘리스 owns the intellectual property and releases it under the SIL Open Font License.
  - **엘리스 디지털 코딩체**: a fixed-width face tuned from 디지털 배움체 for programming, also SIL Open Font License, also owned by (주)엘리스.
  - **엘리스 디지털 배움체**: a free title face. Its PDF says it follows the "Open Font License", © 2016–2021, and forbids selling the font files or redistributing modified versions.
- **Declared only (no visible use)**: `Elice Digital Baeum` and `Elice Digital Coding`, declared from `cdn-front-door.elice.io`, and `gitlab_mono`, declared through next/font — 0 observed uses each.
- **Unresolved**: the family name "Pretendard Variable", which 1,267 elements request first; no token is made from it. The language icon button computes Arial, a system face (one per captured page), and it is not a token.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Observed on |
|------|------|------|--------|-------------|-------------|
| Display | Elice DX Neolli | 48px | 500 | 57.6px (1.2), −2.4% | 엘리스클라우드 요금제 (pricing h2) |
| Section | Elice DX Neolli | 40px | 500 | 48px (1.2), −2.4% | Statistics and section heads on home, plan heads on pricing |
| Subsection | Elice DX Neolli | 32px | 500 | 39.68px (1.24), −1% | Storage 요금제 |
| Product Label | Elice DX Neolli | 16px | 500 | 24px (1.5) | Product names beside the icon tiles |
| Body | Pretendard | 16px | 500 | 24px (1.5) | Page body, card copy, footer menu links |
| Button | Pretendard | 14px | 600 | 24px | Header and hero actions |
| Button Large | Pretendard | 15px | 700 | 24px | Closing-band actions |
| Button Small | Pretendard | 13px | 600 | 22px | 더 보기 |
| Tab | Pretendard | 14px | 600 | 17.5px | Pricing product tabs |
| Toggle | Pretendard | 13px | 700 selected, 500 unselected | 22.75px | GPU, NPU and CPU switch |
| Link | Pretendard | 14px | 500 | 23.94px | 가격 문의 |
| Menu Label | Pretendard | 14px | 400 | 19.6px | Footer menu group labels |
| Badge | Pretendard | 11px | 500 (label 700) | 16.5px | 모집 중, 채용 중 |

### Principles
- **A bespoke display face over a neutral text face**: Elice DX Neolli sets headings and product names; Pretendard sets everything functional.
- **Medium weights**: headings compute 500, body text 500, actions 600 (700 on the large closing actions).
- **Tight display tracking**: −2.4% at 48px and 40px, −1% at 32px; body and interface text keep normal tracking.

## Layout

### Spacing System
- Actions: 8px vertical, 16px horizontal padding at 40px; 11px 20px at 46px
- Card content: 32px padding
- Footer menu items: 8px 12px
- Logo strip: 32px between logos

### Grid & Container
- A 40px header with menu buttons on the left and the 도입문의 / 무료로 시작하기 pair on the right, on every captured page.
- Home runs from the hero into a logo strip, statistics (13,000 +, 2,810,000명 +), outlined cards, product sections with icon tiles, case-study cards, a press section (언론 속의 엘리스), a security section and a closing band with the inverse action pair.
- The pricing page stacks a 48px title, the product tabs, 40px plan headings, the GPU, NPU and CPU switch and pricing tables, then a closing band with the filled and outlined large actions.

### Whitespace Philosophy
- **Frame, not decoration**: the chrome stays near-monochrome so headings and product sections lead.
- **Repeated pair**: the filled and outlined actions return at the top and bottom of every captured page.

### Border Radius Scale
- 4px: status tags, footer menu items
- 6px: small text buttons, switch options, footer icon tiles
- 8px: header and hero actions, product tabs
- 10px: large closing actions
- 12px: icon tiles on home
- 24px: outlined cards

### Responsive Behavior

#### Breakpoints
Only the 1440 × 900 desktop viewport was captured. No breakpoint was measured.

#### Touch Targets
- Header and hero actions: 40px tall
- Large closing actions: 46px
- Product tabs: 44px
- Switch options: 35px
- Footer menu items: 40px

#### Collapsing Strategy
- Not measured at other widths.

#### Image Behavior
- Product icon tiles keep their square shape at 32px and 24px; no image treatment was measured beyond that.

## Elevation & Depth

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Page, actions, tabs, cards, tiles |
| Outline | 1px `#e9ebf0` | Outlined cards |
| Soft lift | `rgba(0, 0, 0, 0.04) 0px 4px 5px 0px, rgba(0, 0, 0, 0.04) 0px 4px 24px 0px` | Selected option of the GPU, NPU and CPU switch |

**Shadow Philosophy**: Elice's captured pages are flat. Cards, actions and tabs compute `box-shadow: none`; cards separate with a `#e9ebf0` border. The one measured shadow lifts the selected option of the pricing switch.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.toggle`: `rgba(0, 0, 0, 0.04) 0px 4px 5px 0px, rgba(0, 0, 0, 0.04) 0px 4px 24px 0px`

## Motion & Easing

The collector reads computed style, not animation, so no duration or easing is measured. The hover frames it recorded for the header buttons caught the background partway through a change, which shows the actions animate their states without timing them. The logo strip near the top of home is built as a LogoLoop component, whose name indicates a looping strip; its timing was not measured. Treat motion as unspecified rather than borrowing values, and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/elice.json (capturedAt 2026-09-30T07:52:30.952Z), deterministic collector, 1440x900, logged out: https://elice.io/ko (the frontmatter homepage https://elice.io lands there) and https://elice.io/ko/cloud/pricing (lands on /ko/cloud/pricing/ai-cloud; the bundle records it twice, as surface-2 and surface-3, and claims cite surface-2). The route /ko/ax/lxp was excluded because it hangs the collector; academy.elice.io was not captured.
- Labels (무료로 시작하기, 도입문의, 엘리스AI클라우드, GPU, 가격 문의, 모집 중) and the MUI button variables come from a headless survey of the same two pages on 2026-09-30 (ko-KR, 1440x1000), matched to captures by class, size and position.
- §1, §2 brand assets, §3, §10, §11: https://elice.io/ko/resources/brand, https://elice.io/ko/resources/newsroom/elice-kosdaq-ipo-submission (datePublished 2026-08-21) and the three licence PDFs, opened 2026-09-30. These supply narrative and licence facts, never a token.
- Personas are fictional archetypes. Interpretive readings are marked editorial.
-->

## Components

### Buttons

**Primary action (header)**
- Background: `#212121`
- Text: `#ffffff`
- Radius: 8px
- Padding: 8px 16px
- Height: 40px
- Font: 14px / 600 / 24px Pretendard
- States: rest on all three captured pages; no hover, pressed or focus frame was recorded for it, and no state value is declared
- Use: 무료로 시작하기 at the right of the header on home and the pricing page, 120 × 40

**Primary action over the hero**
- Background: `#ffffff`
- Text: `#191f28`
- Radius: 8px
- Padding: 8px 16px
- Height: 40px
- Font: 14px / 600 / 24px Pretendard
- States: rest; its hover and pressed frames were read mid-change and are not declared
- Use: 무료로 시작하기 in the home hero

**Outlined action**
- Background: transparent
- Text: `#212121`
- Border: 1px rgba(33,33,33,0.5)
- Radius: 8px
- Padding: 7px 15px
- Height: 40px
- Font: 14px / 600 / 24px Pretendard
- States: rest; its hover and pressed frames were read mid-change and are not declared
- Use: 도입문의 in the header, 80 × 40

**Outlined action over the hero**
- Background: transparent
- Text: `#ffffff`
- Border: 1px `#ffffff`
- Radius: 8px
- Padding: 7px 15px
- Height: 40px
- Use: 도입문의 beside the hero action

**Menu button**
- Background: transparent
- Text: `#212121`
- Radius: 8px
- Padding: 8px 16px
- Height: 40px
- Font: 14px / 600 / 24px Pretendard
- States: rest; its hover and pressed frames were read at the start of the background change and are not declared
- Use: 엘리스AX, 엘리스클라우드, 리소스, 블로그 and 로그인 in the header (로그인 was read, never followed), and 더 알아보기 on home

**Small text button**
- Background: transparent
- Text: `#212121`
- Radius: 6px
- Padding: 5px 12px
- Height: 32px
- Font: 13px / 600 / 22px Pretendard
- Use: 더 보기 on the case-study cards, 79 × 32

**Large actions (closing bands)**
- Filled: `#212121` background, `#ffffff` label, 10px radius, 11px 20px padding, 134 × 46, 15px / 700 / 24px Pretendard — 무료로 시작하기 closing the pricing page
- Outlined: transparent, `#212121` label, 1px rgba(33,33,33,0.5) border, 10px radius, 10px 19px padding, 92 × 46 — 도입문의 beside it
- On the home closing band, whose headings are white, the pair inverts: a `#ffffff` fill with a `#191f28` label, and a white border with a white label
- States: rest only

### Tabs & Toggles

**Product tabs (pricing page)**
- Background: transparent
- Text: `#343e4b`
- Radius: 8px
- Padding: 10px 8px
- Height: 44px
- Font: 14px / 600 / 17.5px Pretendard
- Selected: text `#7353ea` (엘리스AI클라우드)
- Use: 엘리스AI클라우드 and ECI under the page title

**GPU, NPU and CPU switch**
- Option: transparent, text rgba(0,0,0,0.54), 13px / 500 / 22.75px Pretendard, 6px radius, 6px padding, 128 × 35
- Selected: background `#ffffff`, text `#191f28`, weight 700, shadow `rgba(0, 0, 0, 0.04) 0px 4px 5px 0px, rgba(0, 0, 0, 0.04) 0px 4px 24px 0px`
- Use: switches the pricing table between GPU, NPU and CPU plans

### Links
- 가격 문의 in each row of the pricing table: `#7353ea`, 14px / 500 / 23.94px Pretendard, underline on hover (MuiLink `underlineHover` class; the hover itself was not measured).

### Badges

**Status tag**
- Background: `#dfebe0`
- Text: `#1b5e20`
- Radius: 4px
- Height: 20px
- Font: 11px / 500 / 16.5px Pretendard; the label span computes 11px / 700 with 0px 4px padding
- Use: 모집 중 beside 교육 파트너 and 채용 중 beside 채용 in the footer menu

### Cards & Containers

**Outlined card**
- Background: `#ffffff`
- Text: `#191f28`
- Border: 1px `#e9ebf0`
- Radius: 24px
- Padding: 32px in the content block
- Use: 522 × 353 cards near the top of home; no shadow

**Product icon tile**
- Background: `#7353ea`, `#2f5efb`, `#b853ea` or `#03a9f4` by product, with a `#ffffff` icon
- Radius: 12px at 32 × 32 on home; 6px at 24 × 24 in the footer menu
- Use: beside product names such as 엘리스LXP, 엘리스테스트, 헬피챗 and 엘리스AI클라우드

### Navigation
- Header: menu buttons at `#212121` and the 도입문의 / 무료로 시작하기 pair at the right, all 40px tall.
- Footer menu: links in `#191f28`, 16px / 500 / 24px Pretendard, 4px radius, 8px 12px padding, 237 × 40, grouped under labels in rgba(25,31,40,0.38) at 14px / 400 (AI 교육, AI 전환).

---

**Verified:** 2026-09-30 (deterministic collector capture of https://elice.io/ko and the Elice Cloud pricing page, logged out, plus first-party brand, newsroom and font-licence sources)
**Tier 1 sources:** https://elice.io/ko ; https://elice.io/ko/cloud/pricing/ai-cloud ; https://elice.io/ko/resources/brand ; https://elice.io/ko/resources/newsroom/elice-kosdaq-ipo-submission ; https://font.elice.io/static/downloads/EliceDXNeolli_License.pdf ; https://font.elice.io/static/downloads/EliceDigitalBaeum_License.pdf ; https://font.elice.io/static/downloads/EliceDigitalCoding_License.pdf
**Tier 2 sources:** getdesign.md/elice (HTTP 200, 30,781 bytes; the name does not occur in the returned HTML) and styles.refero.design/?q=elice (HTTP 200, 47,383 bytes; the name occurs 4 times, as the page echoes the query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

### States

Only these states were observed on the captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Selected (product tabs)** | The selected tab's label turns from `#343e4b` to `#7353ea`. |
| **Selected (switch)** | The selected option fills `#ffffff` with `#191f28` text at weight 700 and the soft two-layer shadow; the others are transparent with rgba(0,0,0,0.54) text at weight 500. |
| **Inverse over the hero** | The action pair turns white: `#ffffff` fill with a `#191f28` label, and a white outline. |

The collector's hover and pressed frames for the header, hero and closing actions were read while the background was still changing, so no hover or pressed value is declared. The pricing tabs' hover and pressed frames are recorded in the verification notes but not declared, because their settling was not confirmed. Focus treatments were not measured. Error, empty, loading and success states were not captured and are not described.

## Do's and Don'ts

### Do
- Fill primary actions with `#212121` and white labels; pair them with a 1px rgba(33,33,33,0.5) outlined action
- Invert the pair over dark or photographic areas: a `#ffffff` fill with a `#191f28` label and a white outline
- Use violet `#7353ea` for the selected tab and for inline links
- Set headings in Elice DX Neolli at weight 500 with −2.4% tracking; set text in Pretendard
- Keep cards flat with a 1px `#e9ebf0` border and a 24px radius
- Use the four product icon colours only for product tiles

### Don't
- Don't fill actions with violet; no captured action uses it
- Don't substitute the brand page's `#6700e6` or `#8200e6` for the product's `#7353ea`
- Don't add drop shadows to cards or actions; the one shadow belongs to the selected switch option
- Don't set headings in bold weights; they compute 500
- Don't render another face and present it as Elice DX Neolli or Pretendard
- Don't invent hover colours; none were measured as settled

## Voice & Tone

Elice speaks in short, declarative Korean that names what the product does — learning, building and running AI — and backs it with numbers.

| Context | Tone |
|---|---|
| Positioning | Plain and total. "엘리스 \| AI 풀스택 기업". |
| Headlines | Verb chains. "배우고, 만들고, 실행까지 한번에". |
| Audience heads | Who it is for, then what it gives. "교육자를 위한 AI 기반의 안정적인 교육 운영", "개발자를 위한 안정적인 AI 개발·운영 인프라". |
| Proof | Bare numbers. "13,000 +", "2,810,000명 +". |
| Actions | Direct and low-pressure. "무료로 시작하기", "도입문의", "더 알아보기", "가격 문의". |

**Voice samples (verbatim, opened 2026-09-30):**
- "배우고, 만들고, 실행까지 한번에" — elice.io/ko section heading.
- "AI로 미래를 바꾸는 당신의 여정, 엘리스클라우드가 함께 합니다." — closing heading of the pricing page.
- "기회와 가능성을 만들어내는 기술" — brand page.
- "고성능 AI 클라우드부터 산업별 AX 솔루션까지 아우르는 '풀스택 AI 파트너'" — CEO 김재원, quoted in the newsroom item of 2026-08-21.

**Forbidden register**: AI hype without numbers, fear-based urgency, stacked exclamation marks.

## Agent Prompt Guide

### Quick Color Reference
- Primary action: `#212121` with `#ffffff` labels
- Text: `#191f28`; headings and unselected tabs `#343e4b`; descriptions `#66717e`
- Page and cards: `#ffffff`; card border `#e9ebf0`
- Selected tab and links: `#7353ea`
- Product tiles: `#7353ea`, `#2f5efb`, `#b853ea`, `#03a9f4`
- Status tag: `#1b5e20` on `#dfebe0`

### Example Component Prompts
- "Create an Elice header pair: an outlined 도입문의 (transparent, 1px rgba(33,33,33,0.5) border, `#212121` label) and a filled 무료로 시작하기 (`#212121` background, `#ffffff` label), both 14px Pretendard weight 600, 8px radius, 40px tall, no shadow."
- "Build product tabs: 14px / 600 Pretendard, `#343e4b` unselected, `#7353ea` selected, 8px radius, 10px 8px padding, 44px tall."
- "Make a three-option switch: options 128 × 35 with a 6px radius; unselected transparent with rgba(0,0,0,0.54) text at weight 500; selected `#ffffff` with `#191f28` text at weight 700 and a soft two-layer shadow."
- "Design an outlined card: `#ffffff`, 1px `#e9ebf0` border, 24px radius, 32px padding, a 40px Elice DX Neolli heading at weight 500 with −2.4% tracking in `#343e4b`."

### Iteration Guide
1. Near-black `#212121` for actions; violet `#7353ea` for selection and links
2. Elice DX Neolli 500 for headings, Pretendard for text
3. 8px actions, 24px cards, 4px tags
4. Flat surfaces; one soft shadow on the selected switch option
5. Invert the action pair on dark bands

---

## Governance

### Known Gaps

- **Contrast, `outline-button`.** Text `#212121` on `#00000000` measures 1.30:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `nav-button`.** Text `#212121` on `#00000000` measures 1.30:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `small-text-button`.** Text `#212121` on `#00000000` measures 1.30:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `large-outline-button`.** Text `#212121` on `#00000000` measures 1.30:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `product-tab`.** Text `#343e4b` on `#00000000` measures 1.94:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `segmented-toggle`.** Text `#0000008a` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `footer-menu-item`.** Text `#191f28` on `#00000000` measures 1.27:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
