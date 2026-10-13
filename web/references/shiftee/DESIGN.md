---
name: Shiftee
colors:
  primary: '#004dc1'
  on-primary: '#ffffff'
  primary-hover: '#0a2864'
  primary-pressed: '#0062cc'
  canvas: '#ffffff'
  ink: '#212529'
  heading: '#1e1f21'
  body-muted: '#464a52'
  on-dark: '#e7ecf7'
  muted: '#969faa'
  caption: '#54595f'
  charcoal: '#35343c'
  charcoal-hover: '#494a4e'
  surface: '#f4f7fb'
  band-blue: '#074499'
  soft-blue: '#dcedfd'
  soft-blue-hover: '#badbfa'
  divider: '#c2cad5'
  tag-blue: '#0575e6'
  hairline: '#ced4da'
  input-text: '#495057'
typography:
  display-hero:
    fontSize: 58px
    fontWeight: 700
    lineHeight: 1.36
    letterSpacing: '-0.4px'
    use: Home hero headline (기업의 도약을 위한 솔루션, Shiftee), white, 78.88px line
  page-title:
    fontSize: 52px
    fontWeight: 700
    lineHeight: 1.36
    letterSpacing: '-0.4px'
    use: Page headlines on /ko/pricing (#1e1f21) and /ko/company (white over its hero), 70.72px line
  closing:
    fontSize: 46px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: '-0.4px'
    use: Closing-band headline on home, white, 59.8px line
  section:
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: '-0.4px'
    use: 'Section headings on all three pages, #1e1f21 (white on dark bands), 52px line'
  price:
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: '-0.4px'
    use: Plan prices on /ko/pricing, 46.8px line
  stat:
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.65
    letterSpacing: '-0.24px'
    use: Statistic figures on home, 66px line
  subsection:
    fontSize: 32px
    fontWeight: 700
    letterSpacing: '-0.4px'
    use: Feature headings on home, /ko/pricing and /ko/company; line height computes normal
  card-title:
    fontSize: 24px
    fontWeight: 700
    letterSpacing: '-0.4px'
    use: Plan names on /ko/pricing; line height computes normal
  lead:
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: '-0.24px'
    use: Hero sublines on home and /ko/company, white, 35px line
  faq-title:
    fontSize: 17px
    fontWeight: 700
    letterSpacing: '-0.4px'
    use: FAQ panel titles on /ko/pricing; line height computes normal
  reading:
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: '-0.24px'
    use: 'Feature descriptions on home in #464a52, 26.25px line'
  body:
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: '-0.24px'
    use: 'Document default, #212529 on #ffffff, 22.5px line'
  tag:
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.65
    letterSpacing: '-0.24px'
    use: Eyebrow labels above section headings (sft-tag), 23.1px line
  nav:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 2.57
    letterSpacing: '-0.24px'
    use: Header navigation items, 36px line
  button:
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: '-0.24px'
    use: Header and plan button labels, 14px line
  button-lg:
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: '-0.24px'
    use: Large button labels (자세히 알아보기, 도입 문의하기, 무료 체험), 15px line
  caption:
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: '-0.24px'
    use: 'Plan notes on /ko/pricing in #54595f, 21.45px line'
  footer-heading:
    fontSize: 12px
    fontWeight: 700
    letterSpacing: '-0.4px'
    use: Footer column headings; line height computes normal
rounded:
  square: 0px
  button-lg: 2px
  button: 3.2px
  input: 4px
  tag: 4px
  expander: 5px
  card: 8px
spacing:
  button-y: 14
  button-x: 25.2
  button-lg-y: 15
  button-lg-x: 45
  card-y: 26
  card-x: 24
  input-y: 6
  input-x: 12
components:
  primary-button:
    type: button
    backgroundColor: '#004dc1'
    textColor: '#ffffff'
    border: '1px solid #004dc1'
    rounded: 3.2px
    padding: 14px 25.2px
    height: 44px
    typography: 14px / 600 / 14px Inter, letter-spacing -0.24px
    hover: 'bg #0a2864, border #0a2864'
    pressed: 'bg #0062cc, border #005cbf, ring rgba(38, 143, 255, 0.5) 0px 0px 0px 3.2px'
    focus: 'bg #0a2864 with the same 3.2px ring (Tab #17 on /ko/pricing)'
    states: 'probe on /ko/pricing: hover settles on #0a2864, pressed on #0062cc with a 3.2px blue ring, focus on #0a2864 with the ring; transition all 0.35s ease-in-out; the plan 문의하기 buttons read the same'
    use: 무료 체험 in the header of /ko/pricing and /ko/company at surface-2::[data-omd-capture="11"] (106 x 44) and the plan actions 문의하기 on /ko/pricing (251 x 44)
  primary-button-lg:
    type: button
    backgroundColor: '#004dc1'
    textColor: '#ffffff'
    border: '1px solid #004dc1'
    rounded: 2px
    padding: 15px 45px
    height: 47px
    typography: 15px / 600 / 15px Inter, letter-spacing -0.24px
    hover: 'bg #0a2864, border #0a2864, translateY(-2px)'
    pressed: 'bg #0062cc, border #005cbf, ring rgba(38, 143, 255, 0.5) 0px 0px 0px 3.2px, translateY(-2px)'
    focus: 'bg #0a2864, the 3.2px ring and the 2px lift (Tab #46)'
    states: 'probe on home: hover lifts 2px and fills #0a2864; pressed fills #0062cc with the ring; transition all 0.35s ease-in-out'
    use: 자세히 알아보기 on home at home::[data-omd-capture="50"], 190.5 x 47
  square-button:
    type: button
    backgroundColor: '#004dc1'
    textColor: '#ffffff'
    border: '1px solid #004dc1'
    rounded: 0px
    padding: 15px 45px
    height: 47px
    typography: 15px / 600 / 15px Inter, letter-spacing -0.24px
    states: 'rest only: the capture''s pressed and focus frames were still moving and the probe did not target this control, so no state value is declared'
    use: 뉴스룸 보기 under the press cards on /ko/company at surface-3::[data-omd-capture="18"], 163 x 47
  login-button:
    type: button
    backgroundColor: transparent
    textColor: '#004dc1'
    border: '1px solid #004dc1'
    rounded: 3.2px
    padding: 14px 25.2px
    height: 44px
    typography: 14px / 600 / 14px Inter, letter-spacing -0.24px
    hover: 'bg #004dc1, fg #ffffff'
    pressed: 'bg #004dc1, fg #ffffff'
    focus: 'bg #004dc1, fg #ffffff (Tab #16)'
    states: 'probe on /ko/pricing: hover, pressed and focus fill the button #004dc1 with a white label'
    use: 로그인 in the header of /ko/pricing and /ko/company at surface-2::[data-omd-capture="10"], 90 x 44; over the home hero it is white with a rgba(255, 255, 255, 0.4) border
  contact-link:
    type: button
    textColor: '#1e1f21'
    rounded: 3.2px
    padding: 14px 25.2px
    height: 49px
    typography: 14px / 500 / 21px Inter, letter-spacing -0.24px
    hover: 'fg #004dc1, underline'
    pressed: 'fg #004dc1, underline'
    focus: 'fg #0a2864 (Tab #15)'
    states: 'probe on /ko/pricing: hover and pressed turn the label #004dc1 and underline it; focus turns it #0a2864; transition all 0.3s ease'
    use: '도입문의 text action in the header of /ko/pricing and /ko/company at surface-2::[data-omd-capture="9"], 121 x 49, with a #004dc1 icon'
  hero-contact-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#004dc1'
    border: '1px solid #ffffff'
    rounded: 3.2px
    padding: 16px 28.8px
    height: 50px
    typography: 16px / 600 / 16px Inter, letter-spacing -0.24px
    hover: opacity 0.95 -> 1
    pressed: opacity 0.95 -> 1
    focus: 'opacity 1 (Tab #18)'
    states: 'probe on home: the button rests at opacity 0.95 and goes fully opaque on hover, pressed and focus; transition all 0.35s ease-in-out'
    use: 도입문의 in the home hero at home::[data-omd-capture="12"], 117.5 x 50
  hero-ghost-button:
    type: button
    backgroundColor: rgba(255, 255, 255, 0.2)
    textColor: '#ffffff'
    border: 1px solid rgba(255, 255, 255, 0.2)
    rounded: 3.2px
    padding: 14px 25.2px
    height: 44px
    typography: 14px / 600 / 14px Inter, letter-spacing -0.24px
    hover: 'bg #ffffff, fg #004dc1, border 1px solid #ffffff'
    pressed: 'bg #ffffff, fg #004dc1, ring rgba(38, 143, 255, 0.5) 0px 0px 0px 3.2px'
    focus: 'bg #ffffff, fg #004dc1 and the ring (Tab #17)'
    states: 'probe on home: the translucent header action turns solid white with a #004dc1 label'
    use: 무료 체험 in the header while it sits over the home hero, at home::[data-omd-capture="11"], 106 x 44
  closing-contact-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#004dc1'
    border: '1px solid #ffffff'
    rounded: 2px
    padding: 15px 45px
    height: 47px
    typography: 15px / 600 / 15px Inter, letter-spacing -0.24px
    hover: translateY(-2px)
    pressed: translateY(-2px)
    focus: 'translateY(-2px) (Tab #49)'
    states: 'probe on home: a 2px lift on hover, pressed and focus, no colour change'
    use: 도입 문의하기 in the closing band of home at home::[data-omd-capture="52"], 176.9 x 47
  closing-trial-button:
    type: button
    backgroundColor: transparent
    textColor: '#ffffff'
    border: '1px solid #ffffff'
    rounded: 2px
    padding: 15px 45px
    height: 47px
    typography: 15px / 600 / 15px Inter, letter-spacing -0.24px
    shadow: rgba(54, 55, 61, 0.25) 0px 8px 24px 0px
    hover: 'bg #ffffff, fg #004dc1, translateY(-2px)'
    pressed: 'bg #ffffff, fg #004dc1, translateY(-2px)'
    focus: 'bg #ffffff, fg #004dc1, translateY(-2px) (Tab #50)'
    states: 'probe on home: the outlined action fills white with a #004dc1 label and lifts 2px'
    use: '무료 체험 beside 도입 문의하기 in the closing band of home at home::[data-omd-capture="53"], 160.6 x 47, over the band''s #074499'
  addon-button:
    type: button
    backgroundColor: '#35343c'
    textColor: '#ffffff'
    border: '1px solid #35343c'
    rounded: 3.2px
    padding: 14px 25.2px
    height: 44px
    typography: 14px / 600 / 14px Inter, letter-spacing -0.24px
    hover: 'bg #494a4e, border #494a4e'
    pressed: 'bg #494a4e, ring rgba(38, 143, 255, 0.5) 0px 0px 0px 3.2px'
    focus: 'ring rgba(38, 143, 255, 0.5) 0px 0px 0px 3.2px only (Tab #22)'
    states: 'probe on /ko/pricing: hover and pressed settle on #494a4e; focus adds only the blue ring'
    use: '문의하기 on the add-on plan card (부가서비스 추가) of /ko/pricing at surface-2::[data-omd-capture="15"], 236 x 44; the card itself is #f4f7fb'
  features-expander:
    type: button
    backgroundColor: '#dcedfd'
    textColor: '#004dc1'
    border: '0px top, 1px solid #c2cad5 on the other sides'
    rounded: 0px 0px 5px 5px
    padding: 16px
    height: 57px
    typography: 16px / 700 / 24px Inter, letter-spacing -0.24px
    hover: 'bg #badbfa, fg #0a2864, underline'
    pressed: 'bg #badbfa, fg #0a2864, underline'
    focus: 'fg #0a2864 (Tab #23)'
    states: 'probe on /ko/pricing: hover and pressed fill #badbfa, turn the label #0a2864 and rotate its arrow icon; transition all 0.3s ease'
    use: 모든 기능 보기 under the plan cards of /ko/pricing at surface-2::[data-omd-capture="16"], 1170 x 57
  email-input:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#495057'
    border: '1px solid #ced4da'
    rounded: 4px 0px 0px 4px
    padding: 6px 12px
    height: 38px
    typography: 16px / 400 / 24px Inter
    states: rest only; the field was not probed and nothing was typed
    use: 'Email field of the free-trial form near the foot of /ko/pricing at surface-2::[data-omd-capture="45"], 391 x 38, joined on its right to a 105 x 38 #004dc1 무료 체험 button'
  plan-tag:
    type: badge
    backgroundColor: '#0575e6'
    textColor: '#ffffff'
    rounded: 4px 4px 0px 0px
    padding: 6px
    height: 33px
    typography: 13px / 700 / 21.45px Inter
    use: Tag across the top of the highlighted plan card on /ko/pricing (sft-standard-tag), 300 x 33
  stat-card:
    type: card
    backgroundColor: '#ffffff'
    rounded: 8px
    padding: 26px 24px
    size: 350px x 259px
    use: Three statistics cards (sft-statistics-card) on /ko/company, flat, no shadow
fonts:
  roles:
    sans: Inter
    hangul: Noto Sans KR
---

# Design System Inspiration of Shiftee

## Overview

### Visual Theme & Atmosphere

Shiftee (시프티) is a Korean workforce-management company, 주식회사 시프티, based in Gangnam, Seoul. Its company page tells the product's arc in three facts: the service launched in 2017 as an attendance-management (근태관리) tool and has since become an integrated workforce-management suite; it is used in more than 30 countries through English and Chinese editions, with an entry into Taiwan in 2023; and 97.2% of paying customers renewed. The suite now covers scheduling, clock-in records, leave, approvals, messaging, e-contracts, attendance reports, payroll, integrations with an Open API, a desktop PC-OFF client and mobile apps. The company says it works with more than 300,000 businesses and workplaces, and its own newsroom reported an operating profit of about 5 billion won for 2023. Its stated mission is to "HR 혁신을 통해 모두에게 더 나은 근무환경을 만듭니다" (make a better working environment for everyone through HR innovation).

The website reads as orderly B2B software. Pages are white (`#ffffff`) with near-black text: `#212529` for the document default and `#1e1f21` for headings. Headlines are bold (700) at a descending scale — 58px on the home hero, 52px page titles, 40px section headings — and every heading level carries the same `-0.4px` tracking. One saturated blue, `#004dc1`, carries the actions: the header's 무료 체험, the plan buttons, 자세히 알아보기 and the pricing form. On hover it fills a deep navy `#0a2864`, and on press a brighter `#0062cc` with a pale blue 3.2px ring. Corners stay nearly square: 3.2px on header and plan buttons, 2px on large buttons, 0px on 뉴스룸 보기. Almost everything is flat. The one recorded drop shadow, `rgba(54, 55, 61, 0.25) 0px 8px 24px`, sits under the 무료 체험 action of the closing bands.

**Key Characteristics:**
- Action blue `#004dc1` on every filled action, `#0a2864` navy on hover and focus, `#0062cc` on press
- Inter for Latin and Noto Sans KR for hangul in one stack (`inter, "Noto Sans KR", sans-serif`), bold 700 headings with uniform `-0.4px` tracking
- Near-square geometry: 3.2px, 2px and 0px buttons, 4px inputs and tags, 8px cards
- A text ladder of `#1e1f21` headings, `#212529` body, `#464a52` feature copy, `#54595f` notes and `#969faa` footer links
- Soft blue `#dcedfd` for the pricing table's 모든 기능 보기 expander, charcoal `#35343c` for the add-on plan action
- Flat surfaces; the closing bands' 무료 체험 action is the only element with a drop shadow

### Primary tasks

- Draw up a shift plan for staff across several stores
- Run the month-end payroll report from recorded attendance
- Request leave from a phone between shifts
- Check attendance records for a chosen date range

### Brand Narrative

Shiftee began, in its own words, as an attendance-management service launched in 2017 and turned into an integrated workforce-management solution that covers the whole working cycle: "빠르게 변화하는 국내외 근무환경 속에서 시프티는 근태에서 시작하는 모든 인력관리 경험을 혁신합니다." The company page lists English and Chinese editions used in more than 30 countries, a successful entry into Taiwan in 2023, and a 97.2% repurchase rate among paying customers. Its newsroom on the same site reports an operating profit of about 5 billion won for 2023 ("시프티, 23년 영업이익 약 50억원…역대급 실적 기록"), its readiness to compete with global SaaS companies abroad, and the launch of Shiftee Desktop with PC-OFF for office attendance.

The company states four values. 모든 산업 그리고 하나의 솔루션: the same product should serve every country, size and industry, general-purpose but finely customisable. 솔루션은 고객으로부터: features begin with customers, heard through dedicated customer-success and support teams. 국내 B2B SaaS 생태계 활성화: Shiftee invests strategically in other Korean B2B companies. 한국을 넘어 세계로: flexible design is its weapon for markets beyond Korea, starting in Asia.

The website carries that positioning in a restrained way: white pages, one action blue, bold uniform headings, nearly square corners and almost no shadow, with dark bands reserved for the hero and the closing call to action.

### Principles

1. **One solution for every workplace.** Shiftee's first stated value. *UI implication:* one consistent component set across scheduling, attendance, leave and payroll.
2. **Start from the customer.** "시프티의 모든 기능과 솔루션은 고객으로부터 시작됩니다." *UI implication:* plain labels (무료 체험, 도입문의) and visible routes to support.
3. **One action colour.** *UI implication:* `#004dc1` for filled actions, `#0a2864` for their hover, nothing else competing. (An editorial reading of the captured pages, not a Shiftee statement.)
4. **Beyond Korea.** *UI implication:* a type stack that sets Latin in Inter and hangul in Noto Sans KR, so the same layout holds in both scripts.
5. **Restraint builds trust.** *UI implication:* near-square corners, flat cards and near-black text. (Editorial.)

### Personas

*Personas below are fictional archetypes informed by publicly observable Shiftee user segments (HR managers, operations leads and shift-based business owners), not individual people.*

**박민서, 38, 서울.** HR manager at a 400-person retail chain. Runs monthly shift plans and payroll across dozens of stores and wants scheduling, attendance and the payroll report in one place instead of a stack of spreadsheets.

**James Okafor, 45, Singapore.** Operations director at a regional logistics firm using Shiftee in several countries. Cares that the English edition behaves like the Korean one.

**이수아, 31, 경기.** Café-franchise owner handling part-time schedules and leave requests from her phone. Starts with the free trial and wants plain workflows without HR jargon.

## Colors

Every token below was read on 2026-09-30 from shiftee.io/ko, /ko/pricing and /ko/company by the deterministic collector, and hover, pressed and focus values by the fixed keyboard probe. The tokens describe Shiftee's public Korean website; the Shiftee app behind 로그인 was not captured and none of its values is claimed.

### Primary
- **Action Blue** (`#004dc1`): The fill of 무료 체험 in the header of /ko/pricing and /ko/company, the plan actions 문의하기, 자세히 알아보기 on home, 뉴스룸 보기 on /ko/company and the button of the pricing email form — 14 recorded fills across the three pages. It is the primary because it is the colour of the product's primary action, the free trial, on every page where the header is solid. It is also the label and border of 로그인, the label of the white buttons, eyebrow text on /ko/company and link text on cards. Over the home hero the header's 무료 체험 is a translucent white button instead; on hover it turns white with a `#004dc1` label.
- **Action Blue Hover** (`#0a2864`): Hover and focus fill of the blue buttons, settled after their 0.35s transition. The header 도입문의 and 모든 기능 보기 labels also turn `#0a2864` on focus or hover.
- **Action Blue Pressed** (`#0062cc`): The pressed fill of the blue buttons, with a `#005cbf` border and a `rgba(38, 143, 255, 0.5)` 3.2px ring.
- **On Primary** (`#ffffff`): Labels on the blue and charcoal buttons.

### Neutral & Surface
- **Canvas** (`#ffffff`): The body background on all three pages, the Enterprise plan card and the statistics cards.
- **Surface** (`#f4f7fb`): The add-on plan card (부가서비스 추가) on /ko/pricing, read from the ancestor of its button.
- **Band Blue** (`#074499`): The colour behind the outlined 무료 체험 in the home closing band, as the probe read it; the band's own element was not recorded.
- **Soft Blue** (`#dcedfd`): The 모든 기능 보기 expander, which fills `#badbfa` on hover, with a `#c2cad5` border on three sides.
- **Charcoal** (`#35343c`): The add-on plan's 문의하기, `#494a4e` on hover.
- **Tag Blue** (`#0575e6`): The tag across the top of the highlighted plan card.
- **Hairline** (`#ced4da`): The border of the pricing email field, whose text is `#495057`.

### Text
- **Heading** (`#1e1f21`): Headings, card titles and the header navigation on /ko/pricing and /ko/company.
- **Ink** (`#212529`): The document default text colour.
- **Body Muted** (`#464a52`): Feature descriptions on home.
- **Caption** (`#54595f`): Plan notes on /ko/pricing.
- **Muted** (`#969faa`): Footer links.
- **On Dark** (`#e7ecf7`): Descriptions set on the dark bands of home, /ko/pricing and /ko/company.

### Brand assets, not tokens
- The 정부지원사업 menu item in the top bar carries a badge-check icon in `#ffc31b` on home and `#ff9000` on the other pages; these are icon colours, not interface tokens.
- The Shiftee logo and the hero imagery were not measured; no logo colour is claimed. The home hero's own fill was not recorded: the buttons over it read white or translucent white, and their ancestors are transparent.

## Typography

### Font Family
- **Live surface use**: every recorded text element computes `inter, "Noto Sans KR", sans-serif` (only the icon glyphs differ). `Inter` is `loaded / high` with 916 observed uses, served from Google Fonts (`fonts.gstatic.com/s/inter/v20/`). Inter has no hangul, so Korean text falls through to `Noto Sans KR`, served from Google Fonts in unicode-range slices (`fonts.gstatic.com/s/notosanskr/v39/`). The collector credits text to the first family in the stack and so lists Noto Sans KR as `declared / medium` with 0 uses. A same-day headless read of shiftee.io/ko found Noto Sans KR faces `loaded` (weight range 400–800), and `document.fonts.check('700 58px "Noto Sans KR"', "기업")` returned true.
- **Official distributed font assets**: Inter's LICENSE (rsms/inter) states "Copyright (c) 2016 The Inter Project Authors" and the SIL Open Font License 1.1; it was opened on 2026-09-30. The Noto Sans KR licence was not opened this session.
- **Official product use**: no Shiftee page opened this session names its typefaces, so no statement of official product use is made.
- **Declared only (no visible use)**: `Font Awesome 5 Brands`, `slick` (carousel icons) and the `tawk-font-icon` / `tawk-icon` faces of the embedded chat widget. `Font Awesome 5 Pro` is loaded as an icon font (3 uses, the badge-check icon) from pro.fontawesome.com; it sets no text.
- **Unresolved**: none.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Observed on |
|------|------|------|--------|-------------|----------|-------------|
| Display Hero | Inter / Noto Sans KR | 58px | 700 | 78.88px (1.36) | -0.4px | Home hero, white |
| Page Title | Inter / Noto Sans KR | 52px | 700 | 70.72px (1.36) | -0.4px | /ko/pricing and /ko/company headlines |
| Closing | Inter / Noto Sans KR | 46px | 700 | 59.8px (1.3) | -0.4px | Home closing band, white |
| Section | Inter / Noto Sans KR | 40px | 700 | 52px (1.3) | -0.4px | Section headings, `#1e1f21` |
| Stat | Inter / Noto Sans KR | 40px | 700 | 66px (1.65) | -0.24px | Statistic figures on home |
| Price | Inter / Noto Sans KR | 36px | 700 | 46.8px (1.3) | -0.4px | Plan prices |
| Subsection | Inter / Noto Sans KR | 32px | 700 | normal | -0.4px | Feature headings |
| Card Title | Inter / Noto Sans KR | 24px | 700 | normal | -0.4px | Plan names |
| Lead | Inter / Noto Sans KR | 20px | 400 | 35px (1.75) | -0.24px | Hero sublines |
| FAQ Title | Inter / Noto Sans KR | 17px | 700 | normal | -0.4px | Pricing FAQ panels |
| Reading | Inter / Noto Sans KR | 15px | 400 | 26.25px (1.75) | -0.24px | Feature descriptions, `#464a52` |
| Body | Inter / Noto Sans KR | 15px | 400 | 22.5px (1.5) | -0.24px | Document default, `#212529` |
| Button Large | Inter / Noto Sans KR | 15px | 600 | 15px | -0.24px | 자세히 알아보기, 도입 문의하기 |
| Tag | Inter / Noto Sans KR | 14px | 700 | 23.1px (1.65) | -0.24px | Eyebrows above headings |
| Nav | Inter / Noto Sans KR | 14px | 500 | 36px | -0.24px | Header navigation |
| Button | Inter / Noto Sans KR | 14px | 600 | 14px | -0.24px | Header and plan buttons |
| Caption | Inter / Noto Sans KR | 13px | 400 | 21.45px (1.65) | -0.24px | Plan notes, `#54595f` |
| Footer Heading | Inter / Noto Sans KR | 12px | 700 | normal | -0.4px | Footer columns |

### Principles
- **Bold headings, regular reading**: every heading from 17px to 58px is weight 700; reading text is 400.
- **Flat tracking**: headings hold `-0.4px` at every size and text holds `-0.24px`, rather than tracking that scales with size.
- **Two scripts, one stack**: Latin in Inter and hangul in Noto Sans KR, with no separate Korean size scale.

## Layout

### Spacing System
- Header and plan buttons: 14px vertical, 25.2px horizontal padding at 44px height
- Large buttons: 15px 45px at 47px; the hero contact button 16px 28.8px at 50px
- Statistics cards: 26px 24px
- Email field: 6px 12px at 38px
- Frequent spacing values in the capture: 12, 16, 5, 14, 8, 24 and 15px

### Grid & Container
- The pages use a Bootstrap-style grid: class names such as `container`, `row`, `col-12 col-sm-6 col-md-4 col-lg-3` and `col-12 col-lg-6` appear on the captured elements.
- Home opens with a white hero headline and two actions, then a four-column grid of 307px feature link cards, alternating feature sections, statistics, and a closing band with two actions.
- /ko/pricing sets its plans in columns, then a full-width expander (1170px), feature tables and an FAQ of 1110px panels.
- /ko/company opens with a hero, three statistics cards, the company values, three press cards (380 × 406) and a closing band.

### Whitespace Philosophy
- **Calm B2B layout**: large headings over open white space, with dark bands for emphasis near the top and the end of a page.
- **Flat segmentation**: sections separate by background colour, not by borders or elevation.

### Border Radius Scale
- 0px: the default and the 뉴스룸 보기 button
- 2px: large buttons (자세히 알아보기, the closing band actions)
- 3.2px: header and plan buttons
- 4px: the email field's left corners and the plan tag's top corners
- 5px: the expander's bottom corners
- 8px: statistics cards

### Responsive Behavior

#### Breakpoints
Only the 1440 × 900 desktop viewport was captured (the probe used 1440 × 1000). The grid classes (`col-sm-6`, `col-md-4`, `col-lg-3`, `col-lg-6`) show that the layout reflows at Bootstrap's sm, md and lg breakpoints; no breakpoint value was measured.

#### Touch Targets
- Hero contact button: 50px
- Header contact link: 49px
- Large buttons: 47px
- Header and plan buttons: 44px
- Email field and its button: 38px
- Features expander: 57px

#### Collapsing Strategy
- /ko/company carries a `sft-sm-text-center` class on its hero text, a sign that the hero centres on small screens; how the pages collapse was not captured.

#### Image Behavior
- Press cards and feature link cards sit flat, without borders or shadows.

## Elevation & Depth

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | 901 of the 919 recorded elements; the rest are the closing-band shadow and still-moving state frames |
| Surface | `#f4f7fb` fill | The add-on plan card |
| Soft fill | `#dcedfd` | The features expander |
| Lifted action | `rgba(54, 55, 61, 0.25)` 0px 8px 24px | 무료 체험 in the closing bands of home (outlined) and /ko/company (white), and one closing action on /ko/pricing |
| Pressed ring | `rgba(38, 143, 255, 0.5)` 0px 0px 0px 3.2px | Pressed and focused blue buttons |

**Shadow Philosophy**: shadow is rare. It appears on the actions of the closing bands and, as a ring, on pressed and focused buttons. Hover on large buttons lifts them by 2px instead of adding a shadow.

## Motion & Easing

The probe read the transitions the controls compute. The blue, white and charcoal buttons transition `all 0.35s ease-in-out`; the header 도입문의 and the features expander transition `all 0.3s ease`. Large buttons lift 2px on hover (`matrix(1, 0, 0, 1, 0, -2)`), and the expander's arrow icon turns. Nothing else about motion (carousels, counters, page transitions) was measured; treat it as unspecified and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/shiftee.json (capturedAt 2026-09-30T11:08:00Z), deterministic collector, 1440x900, logged out: shiftee.io/ko, /ko/pricing, /ko/company. States: fixed keyboard probe raws docs/research/2026-09-29-growth/raw/shiftee-states-{home,pricing}.json.
- §1, §10, §11 context: shiftee.io/ko/company (About Us, statistics, values, press list, footer), shiftee.io/ko (title, hero, footer), shiftee.io/ko/blog and two of its news articles, opened 2026-09-30.
- §3: Inter LICENSE on GitHub, opened 2026-09-30; Noto Sans KR load state from a same-day headless document.fonts read.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->

## Components

### Buttons

**Primary button**
- Background: `#004dc1`
- Text: `#ffffff`
- Border: 1px solid `#004dc1`
- Radius: 3.2px
- Padding: 14px 25.2px
- Height: 44px
- Font: 14px / 600 / 14px Inter, letter-spacing -0.24px
- Hover: background `#0a2864`
- Pressed: background `#0062cc`, border `#005cbf`, ring `rgba(38, 143, 255, 0.5)` 0px 0px 0px 3.2px
- Focus: background `#0a2864` with the same ring
- Use: 무료 체험 in the header of /ko/pricing and /ko/company; 문의하기 on the plan cards (251 × 44)

**Large primary button**
- Background: `#004dc1`
- Text: `#ffffff`
- Border: 1px solid `#004dc1`
- Radius: 2px
- Padding: 15px 45px
- Height: 47px
- Font: 15px / 600 / 15px Inter
- Hover: background `#0a2864`, lifts 2px
- Pressed: background `#0062cc` with the 3.2px ring, lifted
- Focus: background `#0a2864`, the ring and the lift
- Use: 자세히 알아보기 on home (190.5 × 47)

**Square button**
- Background: `#004dc1`
- Text: `#ffffff`
- Radius: 0px
- Padding: 15px 45px
- Height: 47px
- Font: 15px / 600 / 15px Inter
- States: rest only; no settled state value was recorded
- Use: 뉴스룸 보기 under the press cards on /ko/company (163 × 47)

**Login button**
- Background: transparent
- Text: `#004dc1`
- Border: 1px solid `#004dc1`
- Radius: 3.2px
- Padding: 14px 25.2px
- Height: 44px
- Font: 14px / 600 / 14px Inter
- Hover: background `#004dc1`, text `#ffffff`
- Pressed: background `#004dc1`, text `#ffffff`
- Focus: background `#004dc1`, text `#ffffff`
- Use: 로그인 in the header of /ko/pricing and /ko/company (90 × 44)

**Header contact link**
- Text: `#1e1f21`
- Padding: 14px 25.2px
- Height: 49px
- Font: 14px / 500 / 21px Inter
- Hover: text `#004dc1`, underlined
- Pressed: text `#004dc1`, underlined
- Focus: text `#0a2864`
- Use: 도입문의 in the header of /ko/pricing and /ko/company, with a `#004dc1` icon

**Hero contact button**
- Background: `#ffffff`
- Text: `#004dc1`
- Border: 1px solid `#ffffff`
- Radius: 3.2px
- Padding: 16px 28.8px
- Height: 50px
- Font: 16px / 600 / 16px Inter
- Hover: opacity 0.95 to 1
- Pressed: opacity 0.95 to 1
- Focus: opacity 1
- Use: 도입문의 in the home hero (117.5 × 50)

**Hero ghost button**
- Background: `rgba(255, 255, 255, 0.2)`
- Text: `#ffffff`
- Border: 1px solid `rgba(255, 255, 255, 0.2)`
- Radius: 3.2px
- Padding: 14px 25.2px
- Height: 44px
- Font: 14px / 600 / 14px Inter
- Hover: background `#ffffff`, text `#004dc1`, border 1px solid `#ffffff`
- Pressed: the hover values plus the 3.2px ring
- Focus: the hover values plus the 3.2px ring
- Use: 무료 체험 in the header while it sits over the home hero

**Closing contact button**
- Background: `#ffffff`
- Text: `#004dc1`
- Border: 1px solid `#ffffff`
- Radius: 2px
- Padding: 15px 45px
- Height: 47px
- Font: 15px / 600 / 15px Inter
- Hover: lifts 2px, no colour change
- Pressed: lifts 2px
- Focus: lifts 2px
- Use: 도입 문의하기 in the closing band of home (176.9 × 47)

**Closing trial button**
- Background: transparent
- Text: `#ffffff`
- Border: 1px solid `#ffffff`
- Radius: 2px
- Padding: 15px 45px
- Height: 47px
- Font: 15px / 600 / 15px Inter
- Shadow: `rgba(54, 55, 61, 0.25)` 0px 8px 24px
- Hover: background `#ffffff`, text `#004dc1`, lifts 2px
- Pressed: background `#ffffff`, text `#004dc1`, lifts 2px
- Focus: background `#ffffff`, text `#004dc1`, lifts 2px
- Use: 무료 체험 beside 도입 문의하기 in the home closing band, over `#074499`

**Add-on plan button**
- Background: `#35343c`
- Text: `#ffffff`
- Border: 1px solid `#35343c`
- Radius: 3.2px
- Padding: 14px 25.2px
- Height: 44px
- Font: 14px / 600 / 14px Inter
- Hover: background `#494a4e`
- Pressed: background `#494a4e` with the 3.2px ring
- Focus: the 3.2px ring only
- Use: 문의하기 on the add-on plan card of /ko/pricing (236 × 44)

**Features expander**
- Background: `#dcedfd`
- Text: `#004dc1`
- Border: 1px solid `#c2cad5` on the sides and bottom
- Radius: 0px 0px 5px 5px
- Padding: 16px
- Height: 57px
- Font: 16px / 700 / 24px Inter
- Hover: background `#badbfa`, text `#0a2864`, underlined, arrow icon rotates
- Pressed: background `#badbfa`, text `#0a2864`
- Focus: text `#0a2864`
- Use: 모든 기능 보기 under the plan cards of /ko/pricing (1170 × 57)

### Inputs & Forms

**Email field**
- Background: `#ffffff`
- Text: `#495057`
- Border: 1px solid `#ced4da`
- Radius: 4px 0px 0px 4px
- Padding: 6px 12px
- Height: 38px
- Font: 16px / 400 / 24px Inter
- States: rest only; the field was not probed
- Use: The free-trial form near the foot of /ko/pricing (391 × 38), joined to a 105 × 38 `#004dc1` 무료 체험 button

### Badges

**Plan tag**
- Background: `#0575e6`
- Text: `#ffffff`
- Radius: 4px 4px 0px 0px
- Padding: 6px
- Height: 33px
- Font: 13px / 700 / 21.45px Inter
- Use: The tag across the top of the highlighted plan card on /ko/pricing (300 × 33)

### Cards

**Statistics card**
- Background: `#ffffff`
- Radius: 8px
- Padding: 26px 24px
- Use: Three 350 × 259 cards on /ko/company, flat

---

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out pages of shiftee.io plus fixed keyboard-probe state reads and first-party context)
**Tier 1 sources:** https://shiftee.io/ko ; https://shiftee.io/ko/pricing ; https://shiftee.io/ko/company ; https://shiftee.io/ko/blog
**Tier 2 sources:** getdesign.md/shiftee (HTTP 200, the name does not appear in the response) and styles.refero.design/?q=shiftee (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

### States

Only these states were observed on the three captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Hover (blue buttons)** | `#004dc1` → `#0a2864`, settled after a 0.35s transition; large buttons also lift 2px. |
| **Pressed (blue buttons)** | `#0062cc` fill, `#005cbf` border, `rgba(38, 143, 255, 0.5)` 3.2px ring. |
| **Focus (blue buttons)** | `#0a2864` fill with the 3.2px ring (real Tab walk). |
| **Login** | Transparent with `#004dc1` outline → filled `#004dc1` with a white label on hover, pressed and focus. |
| **Text action** | 도입문의 turns `#004dc1` and underlines on hover; `#0a2864` on focus. |
| **White buttons** | The hero contact button goes from opacity 0.95 to 1; the closing contact button lifts 2px; the outlined closing button fills white. |
| **Charcoal** | `#35343c` → `#494a4e` on hover and pressed; focus adds only the ring. |
| **Expander** | `#dcedfd` → `#badbfa`, label `#0a2864`, underline, rotating arrow. |

Error, empty, loading, success and disabled states were not captured and are not described. The square 뉴스룸 보기 button and the email field were not probed, so their states are unmeasured, not absent.

## Do's and Don'ts

### Do
- Use `#004dc1` for every filled action and fill `#0a2864` on hover
- Keep button corners at 3.2px (header, plan) or 2px (large); keep cards at 8px
- Set headings in weight 700 with `-0.4px` tracking and reading text at 15px weight 400
- Put Noto Sans KR after Inter in the stack so hangul renders in it
- Use `#1e1f21` for headings and `#212529` for text, not pure black
- Use `#dcedfd` for soft secondary controls in tables

### Don't
- Don't round actions into pills; no captured radius exceeds 8px
- Don't add card shadows; the recorded cards are flat
- Don't render Inter or Noto Sans KR with another face in their place
- Don't set headings in light weights; every captured heading is 700
- Don't invent a brand focus ring beyond the measured 3.2px `rgba(38, 143, 255, 0.5)` ring on pressed and focused buttons

## Voice & Tone

Shiftee's voice is **clear, capable and reassuring**: it names the job the product does, backs it with figures and keeps actions short. The Korean site speaks to HR managers and operators as professionals.

| Context | Tone |
|---|---|
| Hero headline | Declarative and benefit-framed. "기업의 도약을 위한 솔루션, Shiftee". |
| Feature copy | Names the capability. "정교한 근무일정 관리", "신뢰가는 출퇴근기록과 자동화된 근태관리를 제공합니다". |
| Actions | Short and low-friction. "무료 체험", "도입문의", "문의하기", "자세히 알아보기". |
| Trust copy | Concrete numbers. "전 세계 300,000+ 기업과 사업장", "유료고객사 재구매율 97.2%". |
| Company page | Mission-led. "HR 혁신을 통해 모두에게 더 나은 근무환경을 만듭니다". |

**Voice samples (verbatim, opened 2026-09-30):**
- "통합 인력관리 솔루션 | 시프티" — shiftee.io/ko page title.
- "기업의 도약을 위한 솔루션,Shiftee" — home hero headline.
- "인력관리에 필요한 모든 기능" — home section heading.
- "전 세계 300,000+ 기업과 사업장에서 시프티와 함께 더 나은 근무환경을 만듭니다." — home and /ko/company.
- "지금. 인사업무 변화가 시작됩니다." — /ko/company closing band.

**Forbidden register**: hype superlatives, fear-based compliance copy, undefined jargon, exclamation-heavy marketing.

## Agent Prompt Guide

### Quick Color Reference
- Action: `#004dc1`; hover and focus `#0a2864`; pressed `#0062cc`
- Text: `#1e1f21` headings, `#212529` body, `#464a52` feature copy, `#54595f` notes, `#969faa` footer
- Surfaces: `#ffffff` canvas, `#f4f7fb` add-on card, `#dcedfd` expander (`#badbfa` hover)
- Charcoal action: `#35343c` (`#494a4e` hover); plan tag `#0575e6`; input border `#ced4da`

### Example Component Prompts
- "Create a primary button: `#004dc1` background, 1px solid `#004dc1` border, `#ffffff` 14px Inter label at weight 600, 3.2px radius, 14px 25.2px padding, 44px tall. Hover fills `#0a2864`; pressed fills `#0062cc` with a `rgba(38, 143, 255, 0.5)` 3.2px ring."
- "Create a large action: `#004dc1` background, `#ffffff` 15px Inter label at weight 600, 2px radius, 15px 45px padding, 47px tall; on hover fill `#0a2864` and lift 2px."
- "Build a pricing table expander: `#dcedfd` background, `#004dc1` 16px bold label, 1px solid `#c2cad5` on the sides and bottom, 0 0 5px 5px radius, 16px padding; hover fills `#badbfa` and turns the label `#0a2864`."
- "Build a closing band with two 47px actions: a white `#ffffff` button with a `#004dc1` label and an outlined white button with a `rgba(54, 55, 61, 0.25)` 0px 8px 24px shadow that fills white on hover."

### Iteration Guide
1. One blue for actions (`#004dc1`), navy `#0a2864` for their hover
2. Bold 700 headings, `-0.4px` tracking, Inter plus Noto Sans KR
3. Near-square corners: 3.2px, 2px, 0px
4. Flat cards; shadow only on the closing-band actions
5. `#1e1f21` headings, `#212529` text

---

## Governance

### Known Gaps

- **Contrast, `login-button`.** Text `#004dc1` on `#00000000` measures 2.83:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `hero-ghost-button`.** Text `#ffffff` on `#ffffff33` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `plan-tag`.** Text `#ffffff` on `#0575e6` measures 4.47:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
