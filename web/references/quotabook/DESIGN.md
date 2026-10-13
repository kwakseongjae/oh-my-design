---
name: Quotabook
colors:
  primary: '#00e8c5'
  on-primary: '#171b21'
  canvas: '#000000'
  white: '#ffffff'
  heading-soft: '#e6e6e6'
  band-mint: '#04e8c6'
  mint-text: '#96faeb'
  nav-grey: '#979797'
  muted: '#8e8e94'
  muted-light: '#bfbfbf'
  footer-grey: '#828282'
  surface-dark: '#121212'
  text-dark: '#333333'
typography:
  mega:
    fontSize: 180px
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: '-8.4px'
    use: Home hero word 금융, Pretendard ExtraBold, white, 189px line; the hero lines above it share the size at -9px tracking
  product-hero:
    fontSize: 140px
    fontWeight: 900
    lineHeight: 1
    letterSpacing: '-3px'
    use: Hero headline of /platform/stock-award, Pretendard Black, white, 140px line
  pricing-hero:
    fontSize: 130px
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: '-3px'
    use: Pricing headline, Pretendard Black, white, 143px line
  display:
    fontSize: 100px
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: '-3.5px'
    use: 'Section heading 쿼타북 BizSuite on home, Pretendard Black, #e6e6e6, 105px line'
  display-md:
    fontSize: 90px
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: '-3.5px'
    use: 'Section heading 기업 맞춤형 End-to-End 서비스 on home, Pretendard Black, #e6e6e6, 94.5px line'
  section:
    fontSize: 80px
    fontWeight: 900
    lineHeight: 1.15
    letterSpacing: '-3.2px'
    use: 'Section headings on /pricing, Pretendard Black, #e6e6e6, 92px line'
  closing:
    fontSize: 79px
    fontWeight: 900
    lineHeight: 1.15
    letterSpacing: '-3.2px'
    use: 'Closing-band headline on home, Pretendard Black, #000000 on the mint band, 90.85px line'
  feature:
    fontSize: 59px
    fontWeight: 900
    lineHeight: 1.15
    letterSpacing: '-2px'
    use: 'Large feature labels on home, Pretendard Black, #e6e6e6, 67.85px line'
  card-title:
    fontSize: 25px
    fontWeight: 800
    lineHeight: 1.35
    letterSpacing: '-0.8px'
    use: 'Card headings on /platform/stock-award, Pretendard ExtraBold, #333333, 33.75px line'
  lead:
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: '-0.5px'
    use: 'Descriptions on home, Pretendard Medium, #8e8e94, 25.2px line'
  button:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: '-0.15px'
    use: Action labels 바로 결제 and 견적 문의, Pretendard Bold, 16px line
  nav:
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: '-0.1px'
    use: 'Header navigation labels, Pretendard Bold, #979797'
  chip:
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: '-0.15px'
    use: 'Category chip labels, Pretendard Bold, #171b21'
  login:
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: '-0.15px'
    use: 'Header 로그인 label, Pretendard Bold, #171b21'
  legal:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 0.93
    use: 'Footer company disclosure, Pretendard Medium, #828282, 13px line'
rounded:
  pill: 50px
  chip: 30px
  social: 3px
spacing:
  cta-y: 15
  cta-x: 16
  chip-y: 12
  chip-x: 15
  social-y: 10
  social-x: 12
components:
  pay-button:
    type: button
    backgroundColor: '#00e8c5'
    textColor: '#171b21'
    rounded: 50px
    padding: 15px 16px
    height: 46px
    typography: 16px / 700 / 16px Pretendard Bold (label), letter-spacing -0.15px
    states: 'probe on home: hover shows no change across the button, its 3 descendants and 3 ancestor levels; pressed changes only Chromium''s default link colour on the anchor and its wrappers, not the visible label; focus draws only the browser''s default ring; transition all 0s; no brand state is declared'
    use: 바로 결제 in the home hero at home::[data-omd-capture="6"], 90.3 x 46, linking to the app checkout; the same mint pill opens /platform/stock-award
  plan-button:
    type: button
    backgroundColor: '#00e8c5'
    rounded: 50px
    padding: 12px 14px
    height: 39px
    states: 'rest only: the bundle''s hover and focus frames show no change on the anchor and its pressed frame only the default link colour; the label child was not recorded, so no label value or state is declared'
    use: 바로 결제 and 견적 문의 on the plan cards of /pricing at surface-2::[data-omd-capture="5"] (16 instances, 83 x 39)
  quote-ghost-button:
    type: button
    backgroundColor: transparent
    textColor: '#96faeb'
    rounded: 50px
    padding: 15px 16px
    height: 46px
    typography: 16px / 700 Pretendard Bold (label)
    states: 'probe on home: hover no change; pressed only the default link colour; focus only the browser ring; transition all 0s'
    use: 견적 문의 beside 바로 결제 in the home hero, a borderless pill over the black canvas, 90.3 x 46, read by the fixed probe
  login-pill:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#171b21'
    rounded: 50px
    padding: 14px 16px
    height: 42px
    typography: 14px / 700 / 14px Pretendard Bold (label), letter-spacing -0.15px
    states: 'probe on home: hover no change; pressed only the default link colour; focus only the browser ring'
    use: 로그인 in the header of all three pages at home::[data-omd-capture="5"], 67.9 x 42, linking to the app login
  category-chip:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#171b21'
    rounded: 30px
    padding: 12px 15px
    height: 39px
    typography: 15px / 700 / 15px Pretendard Bold (label), letter-spacing -0.15px
    states: 'probe on home: hover no change; pressed only the default link colour; focus only the browser ring'
    use: 디지털 플랫폼 chips on the BizSuite cards of home at home::[data-omd-capture="8"], 110.2 x 39, linking to the platform pages
  closing-pay-button:
    type: button
    backgroundColor: '#000000'
    textColor: '#ffffff'
    rounded: 50px
    padding: 14px 16px
    height: 44px
    typography: 16px / 700 / 16px Pretendard Bold (label)
    states: 'probe on home: hover no change; pressed only the default link colour; focus only the browser ring'
    use: '바로 결제 on the mint closing band of home at home::[data-omd-capture="13"], 90.3 x 44; the band is #04e8c6'
  closing-quote-button:
    type: button
    backgroundColor: rgba(255, 255, 255, 0.95)
    textColor: '#000000'
    rounded: 50px
    padding: 15px 16px
    height: 46px
    typography: 16px / 800 / 16px Pretendard ExtraBold (label)
    states: 'probe on home: hover no change; pressed only the default link colour; focus only the browser ring'
    use: 견적 문의 beside the black 바로 결제 on the closing band at home::[data-omd-capture="14"], 90.2 x 46
  social-button:
    type: button
    backgroundColor: '#121212'
    rounded: 3px
    padding: 10px 12px
    height: 34px
    states: rest only; not probed
    use: 링크드인, 네이버 블로그 and 브런치 스토리 in the footer of all three pages at home::[data-omd-capture="30"] (72 to 98 wide, 34 tall); the label sits in a child the collector did not record, so no label colour is declared
fonts:
  roles:
    display: Pretendard
---

# Design System Inspiration of Quotabook

## Overview

### Visual Theme & Atmosphere

Quotabook (쿼타북) is the corporate securities platform of 쿼타랩 주식회사 (Quotalab), a company based in Gangnam, Seoul, whose site footer dates Quotabook from 2019. Quotalab describes itself as Korean financial infrastructure — "독자적인 금융 생태계로 대한민국 자본시장의 미래를 만듭니다" — built from two products: 쿼타북, which leads the digital transformation of securities and voting (의결) management, and 킵스, which standardises investment and fund management. Quotabook's own title now calls it "국내 1위 기업 증권금융" (Korea's number-one corporate securities finance). Its BizSuite covers 증권 (issuing and managing shares and bonds in real time), 의결 (running shareholder meetings and boards under the Commercial Act), 주식보상 (RSU, stock-option and virtual-stock programmes) and 투자관계 (reporting under investment contracts), alongside consulting for IPOs and compensation plans. Quotalab's newsroom lists the steps of that expansion: the acquisition of 로고스시스템 (2023), Korea's first virtual-stock compensation service (2024), a stock-compensation service inside NH투자증권's trading app (2025), a 2025 Korea Economic Daily fintech award, and a bid to become an electronic registration body for unlisted shares.

The website looks nothing like pastel consumer fintech. Home and /pricing sit on a pure black canvas (`#000000`); /platform/stock-award opens on a dark hero with a white page below it. Headlines are monumental Pretendard: the hero word 금융 at 180px ExtraBold, a 140px product headline, a 130px pricing headline, and section headings at 100px, 90px and 80px in Pretendard Black, most of them in a soft grey `#e6e6e6` rather than white. Tracking is very tight: -8.4px at 180px, -3.5px at 100px. Actions are pills: a mint `#00e8c5` 바로 결제 with a dark `#171b21` label, a white 로그인, white category chips at 30px radius. At the foot of home a mint band (`#04e8c6`) turns the primary action black. All 521 recorded elements are flat.

**Key Characteristics:**
- Black canvas (`#000000`) on home and pricing; white body on the product page below its dark hero
- Pretendard Black (900) and ExtraBold (800) at 59–180px with tracking between -2px and -9px
- One mint for actions (`#00e8c5`), a mint closing band (`#04e8c6`) where the action inverts to black
- Pill geometry: 50px actions and login, 30px chips; 3px footer social buttons
- Grey text ladder on black: `#e6e6e6` headings, `#bfbfbf`, `#979797` navigation, `#8e8e94` descriptions, `#828282` footer
- No shadows anywhere in the capture

### Primary tasks

- Move a cap table off spreadsheets before a financing round
- Manage employee option grants, vesting, and disclosure filings
- Administer a fund and report across its portfolio companies
- Run a shareholder meeting and board governance on one platform
- Import your first shareholder records into an empty account

### Brand Narrative

Quotabook is run by Quotalab, which frames its mission at the scale of a market: "쿼타랩이 만드는 최초의 금융 생태계" — Quotabook for securities and voting management and KIPS for investment and fund management, connecting companies and capital "하나의 금융 인프라로". Its home page counts the stock-compensation securities it has issued, the companies and funds it manages and its adoption among companies, asset managers and limited partners, and Quotabook's own banner says more than 80% of Korean asset managers use its infrastructure.

Quotalab's newsroom shows how the product widened. In July 2023 it acquired 로고스시스템 ("40조원 비상장주식 관리 쿼타랩, 로고스시스템 인수"). In February 2024 Quotabook launched what it calls Korea's first virtual-stock (가상주식) compensation service. In 2025 it signed a stock-compensation agreement with NH투자증권, launched a link service inside NH's trading app, and won the tech prize of the 2025 한경 핀테크대상. In December 2025 it declared a bid to become an electronic registration body for unlisted shares. Quotabook's home adds ISO/IEC 27001:2022 certification and a consulting arm for IPOs, share administration and compensation design.

Quotabook's site names six qualities for the product and its consulting: 완결성 (a flawless operating system), 확장성 (coverage from start-up to listed company), 투명성 (a communication hub for executives, staff and shareholders), 전문성, 연속성 (from strategy to execution in one place) and 합리성. The design carries the same confidence: black pages, words at architectural scale, and one mint for the next step.

### Principles

1. **Completeness (완결성).** "검증된 자동화 프로세스를 통해 단일 시스템 내에서 증권사무를 일괄 관리합니다." *UI implication:* one system, one consistent set of pills and labels.
2. **Scalability (확장성).** Coverage "스타트업의 유연함은 물론, 상장사가 갖춰야할 엔터프라이즈 기준까지". *UI implication:* the same components at every company stage, without special cases.
3. **Transparency (투명성).** A hub where "이해관계자별 권리 정보를 실시간 확인". *UI implication:* plain, high-contrast labels on black.
4. **One action, one colour.** *UI implication:* `#00e8c5` for the primary action, black on the mint band. (An editorial reading of the captured pages, not a Quotabook statement.)
5. **Flat and serious.** *UI implication:* no shadows, scale instead of decoration. (Editorial.)

### Personas

*Personas below are fictional archetypes informed by publicly observable Quotabook user segments (Korean startup founders, finance/CFO teams, and venture investors), not individual people.*

**정민석, 38, 서울.** Co-founder and CEO of a Series-B SaaS start-up. Moved the shareholder register and option pool off spreadsheets before a new round and wants one record his lawyers, board and employees can trust.

**한지우, 33, 성남.** Finance lead at a growth-stage company running RSU and stock-option programmes. Uses Quotabook to manage grants and vesting and appreciates that it speaks her professional vocabulary.

**이도현, 45, 서울.** Partner at a venture fund who needs clean reporting across portfolio companies and trusts a platform that looks like financial infrastructure.

## Colors

Every token below was read on 2026-09-30 from quotabook.com, /pricing and /platform/stock-award by the deterministic collector, and label colours by the fixed keyboard probe. The tokens describe Quotabook's public marketing website; the app behind 로그인 and 바로 결제 (app.quotabook.com) was not captured and none of its values is claimed.

### Primary
- **Quotabook Mint** (`#00e8c5`): The fill of 바로 결제 — the purchase action — in the home hero, on the plan cards of /pricing (where 견적 문의 is mint too) and on /platform/stock-award: 19 recorded fills across the three pages. It is the primary because it is the colour of the product's primary action on every page; no other colour fills an action on the black canvas. On the mint closing band the same action is black `#000000` with a white label.
- **On Primary** (`#171b21`): The label of 바로 결제, and of the white 로그인 and category chips (16px, 14px and 15px Pretendard Bold).

### Surfaces
- **Canvas** (`#000000`): The body of home and /pricing, and the closing 바로 결제 pill.
- **White** (`#ffffff`): 로그인 and the category chips, hero headlines, and the body of /platform/stock-award.
- **Band Mint** (`#04e8c6`): The closing band of home (검증된 1위와 함께 가장 안전한 성장을 시작하세요), read from the section behind its actions.
- **Surface Dark** (`#121212`): The footer social buttons.

### Text
- **Heading Soft** (`#e6e6e6`): The 59–100px section headings on black.
- **Mint Text** (`#96faeb`): The label of the borderless 견적 문의 beside 바로 결제 in the hero.
- **Muted Light** (`#bfbfbf`): 20px ExtraBold lines on home.
- **Nav Grey** (`#979797`): Header navigation labels (디지털 플랫폼, 금융 컨설팅, 요금제, 유용한 자료, 회사 소개).
- **Muted** (`#8e8e94`): 18px descriptions on home.
- **Footer Grey** (`#828282`): Footer disclosure text.
- **Text Dark** (`#333333`): Card headings on the white part of /platform/stock-award.

### Brand assets, not tokens
- Smaller accent labels on home use other mints and blues (`#20fde3`, `#52ffe5`, `#7be3d3`, and `#03c4ff` for the NEW flag of the top banner); each appears once to six times and they are not interface tokens.
- The Quotabook logo was not measured; no logo colour is claimed.

## Typography

### Font Family
- **Live surface use**: Pretendard, uploaded to Framer and served from `framerusercontent.com/assets/` as one family per weight: `Pretendard Bold` (124 uses), `Pretendard SemiBold` (101), `Pretendard ExtraBold` (67), `Pretendard Black` (54) and `Pretendard Medium` (14), all `loaded / high`. `Geist` is loaded from Google Fonts (`fonts.gstatic.com/s/geist/v5/`) with 8 uses on short labels; it is not a token. The anchors, list items and body compute the browser's `sans-serif` (153 uses), because Framer sets fonts only on the text layers inside them; `sans-serif` is not a brand face.
- **Official distributed font assets**: Pretendard is Kil Hyung-jin's open-source typeface; its LICENSE states the SIL Open Font License 1.1. Geist's OFL.txt states "Copyright 2024 The Geist Project Authors" and the SIL Open Font License 1.1. Both were opened on 2026-09-30. The identification of the uploaded files rests on their declared family names; their name tables were not inspected.
- **Official product use**: no Quotabook page opened this session names its typefaces, so no statement of official product use is made.
- **Declared only (no visible use)**: `Pretendard Regular`, `Fragment Mono`, `Inter`, `SangBleu Versailles Book`, `Angkor` and their Framer placeholders, with 0 observed uses.
- **Unresolved**: none.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Observed on |
|------|------|------|--------|-------------|----------|-------------|
| Mega | Pretendard ExtraBold | 180px | 800 | 189px (1.05) | -8.4px | Home hero word 금융, white |
| Product Hero | Pretendard Black | 140px | 900 | 140px (1) | -3px | /platform/stock-award headline |
| Pricing Hero | Pretendard Black | 130px | 900 | 143px (1.1) | -3px | /pricing headline |
| Display | Pretendard Black | 100px | 900 | 105px (1.05) | -3.5px | 쿼타북 BizSuite, `#e6e6e6` |
| Display Medium | Pretendard Black | 90px | 900 | 94.5px (1.05) | -3.5px | 기업 맞춤형 End-to-End 서비스 |
| Section | Pretendard Black | 80px | 900 | 92px (1.15) | -3.2px | /pricing sections |
| Closing | Pretendard Black | 79px | 900 | 90.85px (1.15) | -3.2px | Closing band, `#000000` on mint |
| Feature | Pretendard Black | 59px | 900 | 67.85px (1.15) | -2px | Feature labels on home |
| Card Title | Pretendard ExtraBold | 25px | 800 | 33.75px (1.35) | -0.8px | Cards on /platform/stock-award, `#333333` |
| Lead | Pretendard Medium | 18px | 500 | 25.2px (1.4) | -0.5px | Descriptions, `#8e8e94` |
| Button | Pretendard Bold | 16px | 700 | 16px | -0.15px | 바로 결제, 견적 문의 |
| Nav | Pretendard Bold | 15px | 700 | 15px | -0.1px | Header navigation, `#979797` |
| Chip | Pretendard Bold | 15px | 700 | 15px | -0.15px | Category chips |
| Login | Pretendard Bold | 14px | 700 | 14px | -0.15px | 로그인 |
| Legal | Pretendard Medium | 14px | 500 | 13px | normal | Footer disclosure, `#828282` |

### Principles
- **Monumental display, compact labels**: headlines run from 59px to 180px in weights 800–900; action and navigation labels sit at 14–16px Bold.
- **Tight tracking that grows with size**: -8.4px at 180px, -3.5px at 90–100px, -2px at 59px, -0.15px on labels.
- **Soft grey for the giants**: the largest section headings are `#e6e6e6`; only the hero lines are pure white.
- **One family, many weights**: Pretendard carries display and UI; Geist appears only on a few short labels.

## Layout

### Spacing System
- Pay and quote pills: 15px 16px at 46px; the closing pay pill 14px 16px at 44px
- Plan buttons: 12px 14px at 39px
- Category chips: 12px 15px at 39px
- Footer social buttons: 10px 12px at 34px
- Frequent spacing values in the capture: 10, 12, 14, 16 and 15px

### Grid & Container
- Home stacks a top banner, a header with grey navigation and a white 로그인 pill, the 180px hero with its two actions, a logo strip of listed companies and start-ups, the BizSuite cards with white chips, the End-to-End service section, feature sections, and the mint closing band.
- /pricing opens with a 130px headline over black, then plan cards with small mint pills and 80px section headings.
- /platform/stock-award opens with a 140px headline on a dark hero, then continues on white with `#333333` card headings.

### Whitespace Philosophy
- **Words as imagery**: the oversized headlines fill the space that photography would take elsewhere.
- **Dark separation**: sections separate by scale and by space on black, not by borders or cards with shadows.

### Border Radius Scale
- 0px: the default (477 of the recorded radii)
- 3px: footer social buttons
- 30px: category chips
- 50px: every action pill and 로그인

### Responsive Behavior

#### Breakpoints
Only the 1440 × 900 desktop viewport was captured (the probe used 1440 × 1000). The site is built with Framer, whose breakpoint variants were not measured.

#### Touch Targets
- Pay and quote pills: 46px
- Closing pay pill: 44px
- 로그인: 42px
- Plan buttons and category chips: 39px
- Footer social buttons: 34px

#### Collapsing Strategy
- How the pages collapse was not captured.

#### Image Behavior
- The logo strip and product images sit flat on black, without borders or shadows.

## Elevation & Depth

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | All 521 recorded elements |
| Canvas | `#000000` | Home and /pricing |
| Inset | `#121212` | Footer social buttons |
| Band | `#04e8c6` | The closing band of home |

**Shadow Philosophy**: every recorded element computes `box-shadow: none`. Emphasis comes from type scale and from the single mint, not from elevation.

## Motion & Easing

The six probed controls compute `transition: all 0s`, so any colour change they had would be instant; none was observed. Framer-driven scroll or appear animation was not measured; treat it as unspecified and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/quotabook.json (capturedAt 2026-09-30T11:08:00Z), deterministic collector, 1440x900, logged out: quotabook.com, /pricing, /platform/stock-award. Labels and states: fixed keyboard probe raw docs/research/2026-09-29-growth/raw/quotabook-states-home.json.
- §1, §10, §11, §12 context: quotabook.com home copy and footer, www.quotalab.com (mission, products, newsroom list), blog.naver.com/quotabook, opened 2026-09-30.
- §3 licences: Pretendard LICENSE and Geist OFL.txt on GitHub, opened 2026-09-30.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->

## Components

### Buttons

**Pay button (primary)**
- Background: `#00e8c5`
- Text: `#171b21`
- Radius: 50px
- Padding: 15px 16px
- Height: 46px
- Font: 16px / 700 / 16px Pretendard Bold, letter-spacing -0.15px
- States: the probe found no hover change; pressed shows only the browser's default link colour on the anchor; focus shows only the browser's default ring
- Use: 바로 결제 in the home hero (90.3 × 46), also on /platform/stock-award

**Plan button**
- Background: `#00e8c5`
- Radius: 50px
- Padding: 12px 14px
- Height: 39px
- States: rest only; the label was not recorded
- Use: 바로 결제 and 견적 문의 on the plan cards of /pricing (16 instances, 83 × 39)

**Quote ghost button**
- Background: transparent
- Text: `#96faeb`
- Radius: 50px
- Padding: 15px 16px
- Height: 46px
- Font: 16px / 700 Pretendard Bold
- States: no hover change; browser-default pressed colour and focus ring only
- Use: 견적 문의 beside 바로 결제 in the home hero, borderless on black

**Login pill**
- Background: `#ffffff`
- Text: `#171b21`
- Radius: 50px
- Padding: 14px 16px
- Height: 42px
- Font: 14px / 700 / 14px Pretendard Bold
- States: no hover change; browser-default pressed colour and focus ring only
- Use: 로그인 in the header of all three pages (67.9 × 42)

**Category chip**
- Background: `#ffffff`
- Text: `#171b21`
- Radius: 30px
- Padding: 12px 15px
- Height: 39px
- Font: 15px / 700 / 15px Pretendard Bold
- States: no hover change; browser-default pressed colour and focus ring only
- Use: 디지털 플랫폼 chips on the BizSuite cards of home (110.2 × 39)

**Closing pay button**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 50px
- Padding: 14px 16px
- Height: 44px
- Font: 16px / 700 / 16px Pretendard Bold
- States: no hover change; browser-default pressed colour and focus ring only
- Use: 바로 결제 on the mint closing band of home, over `#04e8c6`

**Closing quote button**
- Background: `rgba(255, 255, 255, 0.95)`
- Text: `#000000`
- Radius: 50px
- Padding: 15px 16px
- Height: 46px
- Font: 16px / 800 / 16px Pretendard ExtraBold
- States: no hover change; browser-default pressed colour and focus ring only
- Use: 견적 문의 beside the black 바로 결제 on the closing band

**Social button**
- Background: `#121212`
- Radius: 3px
- Padding: 10px 12px
- Height: 34px
- States: rest only; not probed
- Use: 링크드인, 네이버 블로그 and 브런치 스토리 in the footer of all three pages

---

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out pages of quotabook.com plus fixed keyboard-probe reads and first-party context)
**Tier 1 sources:** https://quotabook.com/ ; https://quotabook.com/pricing ; https://quotabook.com/platform/stock-award ; https://www.quotalab.com/ ; https://blog.naver.com/quotabook
**Tier 2 sources:** getdesign.md/quotabook (HTTP 200, the name does not appear in the response) and styles.refero.design/?q=quotabook (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

### States

Only these states were observed on the captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Hover** | No change on 바로 결제, 견적 문의, 로그인, the category chip or the two closing pills, across each control, its descendants and three ancestor levels. |
| **Pressed** | Only Chromium's default link colour (`rgb(0, 0, 238)` → `rgb(255, 0, 0)`) on the anchor and its wrapper layers; the visible labels do not change. Not a brand state. |
| **Focus** | Only the browser's default ring (`outline: auto`); no brand focus style. |

Error, empty, loading, success and disabled states were not captured and are not described. The plan buttons and footer social buttons were not probed, so their states are unmeasured, not absent.

## Do's and Don'ts

### Do
- Use `#00e8c5` for the primary action and label it in `#171b21`
- Set headlines in Pretendard Black or ExtraBold at monumental sizes with tight tracking
- Use `#e6e6e6` for the largest section headings on black
- Shape actions as 50px pills and chips as 30px pills
- Invert the action to `#000000` with a white label when it sits on the mint band

### Don't
- Don't add drop shadows; none of the 521 recorded elements has one
- Don't use a second saturated hue for actions
- Don't render Pretendard with another face in its place, and don't treat the wrappers' `sans-serif` as the brand face
- Don't invent hover or focus styles; the probed controls show only browser defaults
- Don't set headlines in light weights

## Voice & Tone

Quotabook's voice is **authoritative and precise**. It speaks to founders, finance teams and investors as a peer in capital markets, uses institutional vocabulary without explaining it, and states its category claim plainly.

| Context | Tone |
|---|---|
| Positioning | Category claim, stated plainly. "국내 1위 기업 증권금융". |
| Hero | Declarative and stacked. "기업을 위한 기업을 돕는 증권·의결·투자 금융". |
| Product labels | Capital-markets vocabulary. "증권", "의결", "주식보상", "투자관계", "주주명부 정비", "전자증권 등록". |
| Actions | Direct and transactional. "바로 결제", "견적 문의", "로그인". |
| Closing | Confident and reassuring. "검증된 1위와 함께 가장 안전한 성장을 시작하세요." |

**Voice samples (verbatim, opened 2026-09-30):**
- "쿼타북｜국내 1위 기업 증권금융" — quotabook.com page title.
- "쿼타북 BizSuite" — home section heading.
- "기업 맞춤형 End-to-End 서비스" — home section heading.
- "RSU∙스톡옵션∙가상주식 보상제도 설계 및 운영" — home, the 주식보상 card.
- "검증된 1위와 함께 가장 안전한 성장을 시작하세요." — home closing band.

**Forbidden register**: consumer-cutesy tone, emoji, exclamation-heavy hype, over-explaining basic securities terms to a professional audience.

## Agent Prompt Guide

### Quick Color Reference
- Primary action: `#00e8c5` with `#171b21` label; on the mint band `#000000` with a white label
- Canvas: `#000000`; band: `#04e8c6`; inset: `#121212`
- Text on black: `#ffffff` hero, `#e6e6e6` headings, `#bfbfbf`, `#979797` nav, `#8e8e94` descriptions, `#828282` footer
- Ghost label: `#96faeb`; text on white: `#333333`

### Example Component Prompts
- "Create a primary pill: `#00e8c5` background, `#171b21` 16px Pretendard Bold label with -0.15px tracking, 50px radius, 15px 16px padding, 46px tall, no shadow."
- "Pair it with a borderless ghost pill: transparent background, `#96faeb` 16px Pretendard Bold label, 50px radius, same size."
- "Set a hero on `#000000`: the headline in Pretendard ExtraBold at 180px, line height 1.05, tracking -8.4px, white; section headings in Pretendard Black at 100px, tracking -3.5px, `#e6e6e6`."
- "Build a closing band on `#04e8c6` with a 79px Pretendard Black headline in `#000000`, a black 바로 결제 pill with a white label and a `rgba(255, 255, 255, 0.95)` 견적 문의 pill with a black label."

### Iteration Guide
1. Black canvas, monumental Pretendard, tight tracking
2. One mint for actions, labelled in `#171b21`
3. Pills for actions (50px) and chips (30px)
4. Soft grey `#e6e6e6` for the largest headings
5. No shadows

---
