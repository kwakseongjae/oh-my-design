---
name: Finda
colors:
  primary: '#4e2eed'
  on-primary: '#ffffff'
  accent: '#5d4cf2'
  accent-hover: '#7164f8'
  ink: '#010a26'
  ink-pure: '#000000'
  charcoal: '#15161b'
  body: '#444857'
  slate: '#3a415a'
  muted: '#65798e'
  muted-alt: '#737a94'
  white: '#ffffff'
  surface: '#f6f6f9'
  hairline: '#e9e9e9'
typography:
  display-hero:
    fontSize: 50px
    fontWeight: 800
    lineHeight: 1.32
    letterSpacing: '-0.75px'
    use: 'Home hero headline (금융 선택의 기준을 바꾸다), SUIT, 66px line, in #000000'
  display-culture:
    fontSize: 52px
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: '-0.78px'
    use: 'Culture page headline (누구도 가지 않은 금융 혁신의 길을 만듭니다), SUIT, 73px line, in #15161b'
  section-lg:
    fontSize: 46px
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: '-0.69px'
    use: Large section headings on home and culture, SUIT, 60px line
  section:
    fontSize: 34px
    fontWeight: 800
    lineHeight: 1.41
    letterSpacing: '-0.51px'
    use: Home section heading (대출 비교부터 신청까지), SUIT, 48px line
  subsection:
    fontSize: 28px
    fontWeight: 800
    lineHeight: 1.43
    letterSpacing: '-0.42px'
    use: Feature headings on home (악성 앱 차단, 신용관리) and culture, SUIT, 40px line
  card-title:
    fontSize: 24px
    fontWeight: 800
    lineHeight: 1.42
    letterSpacing: '-0.47px'
    use: Work-principle tile headings on the culture page, SUIT, 34px line, -0.4656px tracking
  lead:
    fontSize: 25px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: '-0.49px'
    use: 'Home hero subline, SUIT, 35px line, -0.485px tracking, in #444857'
  company-title:
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: '-0.14px'
    use: Section headings on /about-us (핀다 연혁, 핀다 프로덕트, 핀다 언론보도), Pretendard, 37.8px line
  button-lg:
    fontSize: 17px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: '-0.17px'
    use: Large pill action labels (채용공고 확인하기, 더 이상 보지 않기, 닫기), Pretendard, 22.95px line
  nav:
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.56
    use: Header navigation labels, SUIT on home and culture, Pretendard on /about-us, 23.4px line
  tab:
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.64
    use: Benefit filter tabs on the culture page, SUIT, 23px line
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: '-0.16px'
    use: 'Review text on home, SUIT, 28px line, in #444857'
  button-sm:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    use: Header 앱 다운받기 label, SUIT (Pretendard on /about-us), 18px line
  caption:
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.65
    use: 'Footer company disclosure, SUIT, 21.45px line, in #65798e'
  fine:
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.56
    use: 'Footer legal notes, SUIT, 17.16px line, in #65798e'
rounded:
  tag: 2px
  card: 6px
  tile: 10px
  tab: 43px
  link: 52px
  chip: 60px
  cta: 100px
  pill: 9999px
spacing:
  chip-x: 29
  tab-y: 14
  tab-x: 28
  card-y: 40
  card-x: 32
components:
  header-download-button:
    type: button
    backgroundColor: '#4e2eed'
    textColor: '#ffffff'
    rounded: 100px
    height: 33px
    typography: 12px / 400 / 18px SUIT (Pretendard on /about-us)
    states: 'probe on /about-us and home: hover, pressed and focus (Tab #2) show no change across the button and three ancestor levels, and it computes transition all 0s'
    use: 앱 다운받기 in the fixed header of all three pages at home::[data-omd-capture="1"], a fixed 105 x 33 pill
  pill-cta:
    type: button
    backgroundColor: '#5d4cf2'
    textColor: '#ffffff'
    rounded: 9999px
    padding: 4px 0px
    height: 54px
    typography: 17px / 600 / 22.95px Pretendard, letter-spacing -0.17px
    hover: 'bg #7164f8'
    pressed: 'bg #7164f8'
    states: 'hover and pressed settle on #7164f8 (transition all 0s; bundle frames and the probe agree); focus (Tab #6) shows no change'
    use: 'Large violet pill: 채용공고 확인하기 on /about-us at surface-2::[data-omd-capture="5"] (1180 x 54) and 더 이상 보지 않기 in the home notice dialog (365 x 54)'
    focus: no visible change (measured 2026-10-16) on :focus-visible
  dialog-outline-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#5d4cf2'
    border: '1px solid #5d4cf2'
    rounded: 9999px
    padding: 4px 12px
    height: 54px
    typography: 17px / 600 / 22.95px Pretendard, letter-spacing -0.17px
    hover: 'bg #f0eeff'
    pressed: 'bg #f0eeff'
    states: 'hover and pressed settle on #f0eeff (transition all 0s); focus (Tab #33) shows no change'
    use: 닫기 beside 더 이상 보지 않기 in the home notice dialog at home::[data-omd-capture="32"], 120 x 54
  calculator-chip:
    type: button
    backgroundColor: '#15161b'
    rounded: 60px
    padding: 14.48px 29px
    height: 48px
    states: rest on six captured chips (home captures 2-7); the probe could not locate them on two loads while the home notice dialog was open, so no hover, pressed or focus value is declared
    use: Calculator shortcuts under 모든 계산을 쉽고 빠르게 on home (대출이자, 연봉 실수령, 전월세 비교, DSR, 내 집 대출한도, 연말정산), 153 x 48; the label sits in a child element the collector did not record, so no label colour or font is declared
  more-chip:
    type: button
    backgroundColor: '#15161b'
    rounded: 60px
    padding: 0px 20px
    height: 48px
    states: rest on two captured instances; no state frame
    use: 더 보러가기 under the review and story sections on home at home::[data-omd-capture="8"], 153 x 48
  culture-filter-tab:
    type: tab
    backgroundColor: '#f6f6f9'
    textColor: '#15161b'
    rounded: 43px
    padding: 14px 28px
    height: 51px
    typography: 14px / 700 / 23px SUIT
    selected: 'bg #15161b, fg #ffffff'
    hover: 'bg #e0e3eb'
    pressed: 'bg #e0e3eb'
    states: 'unselected tabs settle on #e0e3eb on hover and pressed after a 0.15s colour transition; the selected tab shows no change; focus (Tabs #9 and #10) shows no change on either'
    use: Benefit filter tabs on the culture page (최고의 환경, 스페셜 보상, 성장 지원, 재충전, 생활 속 지원) at surface-3::[data-omd-capture="10"]; recruiting page
  nav-item:
    type: tab
    textColor: '#3a415a'
    height: 56px
    typography: 15px / 400 / 23.4px SUIT
    selected: 'fg #5d4cf2 on the current section''s item (핀다 on home and /about-us, 채용 on /culture)'
    states: selected variant read from rest values on three pages; no pointer frame
    use: Header navigation items (핀다, 서비스, 문의, 핀다포스트, 채용) in 165 x 56 list cells
  biz-info-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#65798e'
    border: '1px solid #e9e9e9'
    rounded: 2px
    padding: 2px 8px
    height: 22px
    typography: 12px / 400 / 16px Pretendard
    states: 'probe on /about-us: hover, pressed and focus (Tab #27) show no change'
    use: 사업자정보확인 > disclosure toggle in the footer at surface-2::[data-omd-capture="26"], 101 x 22
  join-link:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#15161b'
    rounded: 52px
    padding: 14px 30px
    height: 54px
    typography: 17px / 800 SUIT
    hover: opacity 0.9
    pressed: opacity 0.9
    states: 'hover and pressed settle at opacity 0.9 after a 0.15s opacity transition; focus (Tab #18) draws only the browser''s default ring, so no brand focus style is declared'
    use: 핀다 크루 합류하기 over the closing image of the culture page, 186.7 x 54, linking to the recruiting site; recruiting page, read by the fixed probe
  card-carousel-arrow:
    type: button
    backgroundColor: transparent
    rounded: 9999px
    size: 40px x 40px
    disabled: capture 7 is disabled at rest and computes the same values as the enabled capture 8
    states: rest and disabled only; no pointer frame
    use: Previous and next arrows of the benefit card carousel on the culture page at surface-3::[data-omd-capture="8"]; recruiting page
  tile-arrow:
    type: button
    backgroundColor: rgba(255, 255, 255, 0.2)
    rounded: 9999px
    size: 40px x 40px
    states: rest on five captured instances; no state frame
    use: Round translucent arrows on the work-principle tiles of the culture page at surface-3::[data-omd-capture="2"]; recruiting page
  value-card:
    type: card
    backgroundColor: '#f6f6f9'
    rounded: 6px
    padding: 40px 32px
    size: 285px x 340px
    use: Grey benefit cards under the culture filter tabs (21 instances); recruiting page
  benefit-card:
    type: card
    backgroundColor: '#f6f6f9'
    rounded: 10px
    padding: 40px 18px
    size: 256px x 400px
    use: Grey cards in the culture page carousel (10 instances); recruiting page
  culture-tile:
    type: card
    rounded: 10px
    size: 590px x 590px
    use: Square work-principle tiles on the culture page, each on its own illustration fill; the fills are artwork, not tokens; recruiting page
  notice-dialog:
    type: dialog
    backgroundColor: rgba(0, 0, 0, 0.4) (backdrop)
    size: 1440px x 900px (fixed, full viewport)
    use: Notice dialog open over home at capture, with 더 이상 보지 않기 and 닫기 at its foot
fonts:
  roles:
    display: SUIT
    body: Pretendard
---

# Design System Inspiration of Finda

## Overview

### Visual Theme & Atmosphere

Finda (핀다) is a Korean loan-comparison company. Its own timeline starts with the founding of (주)핀다 in September 2015 and the launch of 핀다 웹, a financial-product information portal, in July 2016. After selection for the loan-brokerage regulatory sandbox in May 2019, the 핀다 앱 loan-comparison platform followed in July 2019, and a MyData licence in January 2021. Finda states its purpose as correcting the information asymmetry of financial markets so that individuals can manage money easily, and the home page frames the product as 1-minute loan comparison "부터 신청까지" (through to application) across what it calls the most lenders in Korea. From there the product has kept widening: credit-loan switching in 2023, an interest-refund PLCC called 핀다카드 in April 2025, and in June 2025 an AI loan-prediction service that needs no limit inquiry. The footer states its registration as a loan broker (대부중개업 등록번호 2025-서울강남-0103호).

On finda.co.kr the brand speaks in two registers. Home and the culture page set declarative Korean headlines in SUIT ExtraBold (weight 800) with tight negative tracking — 50px on the home hero, 52px on the culture hero — over white, with body copy in a soft grey-violet `#444857`. The company page (/about-us) is set entirely in Pretendard at weight 600. Action colour is violet, split into two tones. `#4e2eed` fills the 앱 다운받기 pill in the fixed header of every page. A lighter `#5d4cf2` fills the large 54px pill actions, outlines their secondary partner and colours the current section in the navigation. Tool shortcuts on home are charcoal `#15161b` pills with 60px radius. Grey `#f6f6f9` cards and tabs carry the culture page. Every captured element is flat: none of the 420 records carries a box-shadow.

**Key Characteristics:**
- Two violets with separate jobs: `#4e2eed` for the persistent header download action, `#5d4cf2` for large pill actions, outlines and the selected navigation item (hover `#7164f8`)
- SUIT ExtraBold 800 headlines with negative tracking (-0.75px at 50px, -0.69px at 46px, -0.51px at 34px); Pretendard for the document default and the whole company page
- Charcoal `#15161b` 60px-radius shortcut pills on home and a charcoal selected tab on the culture page
- Text in navy-black `#010a26`, charcoal `#15161b`, `#444857` for reading copy and `#65798e` in the footer; hero and feature headings on home in pure `#000000`
- Pills everywhere an action lives: 100px, 9999px, 60px, 52px and 43px radii; cards at 6px and 10px; a 2px footer tag
- No shadows on any captured element; separation comes from `#f6f6f9` fills and one `#e9e9e9` hairline

### Primary tasks

- Compare loan offers from many financial institutions at once.
- Apply for a loan directly after comparing offers.
- Work out your borrowing capacity with the DSR calculator.
- Look into switching an existing loan to a lower rate.
- Adjust your criteria when no offers match.

### Brand Narrative

Finda's company page opens with a statement of purpose: to correct the information asymmetry that makes financial markets inefficient, and to let individuals manage their finances easily through fintech and big data — "이것이 핀다가 걸어온 길이자 앞으로 나아갈 방향입니다."

Its timeline tells the rest. (주)핀다 was founded in September 2015 and launched 핀다 웹, a financial-product information portal, in July 2016. In May 2019 it was selected for the regulatory sandbox for loan brokerage, and in July 2019 it launched the 핀다 앱 as a comparison-loan brokerage platform, followed by the loan management service 나의 대출관리 that December. A MyData licence came in January 2021 and registration as a financial-product sales agent and broker in September 2021. In 2022 Finda acquired the commercial-district analytics start-up OpenUp (오픈업) outright and introduced what it calls the industry's first malicious-app blocking against phishing. In 2023 it launched credit-loan switching on national infrastructure, raised a 47 billion won Series C from JB Financial Group and 500 Global, and built 핀다GPT on Microsoft's Azure OpenAI service. Since then: the 핀다 오토 (차즘) spin-off (2024), card comparison and the interest-refund PLCC 핀다카드 (2025), an AI loan-prediction service that needs no limit inquiry (2025), and AI tools for franchise commercial analysis and start-up banking. Today the company page lists three products: the 핀다 앱 (confirmed-terms comparison loans), 핀다 웹 and the financial media outlet 핀다포스트. On home it quotes 347만+ cumulative members and 400+ loan products and calls itself the first in Korea and the one with the most lenders.

The culture page states how the crew works — Focus (목표를 명확히 이해하고 문제를 정의합니다), Impact Ownership (역할을 넘어 오너십을 발휘해 목표를 달성합니다), Never Give up (집요하게 방법을 찾아 문제를 해결합니다), 퀄리티는 절대 타협하지 않습니다 and 실행하고 배우며 계속 성장합니다. The website's design reads the same way: confident headlines, one download action repeated on every page, and quiet grey structure around it.

### Principles

1. **Correct the asymmetry.** Finda's stated purpose is to fix information asymmetry. *UI implication:* show figures plainly (lenders, products, members) and let the comparison speak.
2. **One persistent action.** *UI implication:* the header download pill in `#4e2eed` appears on every page and never changes; secondary pages add one large `#5d4cf2` pill, not several competing actions.
3. **Tools as friendly objects.** *UI implication:* financial calculators appear as charcoal pills with plain names rather than as forms.
4. **Quality without compromise.** "퀄리티는 절대 타협하지 않습니다" is one of the crew's stated principles. *UI implication:* consistent pill geometry, exact tracking, no decorative depth.
5. **Flat and legible.** *UI implication:* no shadows; group with grey fills; reading copy in `#444857`. (An editorial reading of the captured pages, not a Finda statement.)

### Personas

*Personas below are fictional archetypes informed by publicly observable Finda user segments (Korean borrowers comparing loans, people managing existing loans), not individual people.*

**김지원, 29, 서울.** A first-time borrower comparing personal-loan offers before moving house. Distrusts going bank by bank; wants to see many lenders' offers in one place and apply from the same app.

**박서준, 35, 경기.** A freelancer who checks the 연봉 실수령 and DSR calculators before applying, to understand how much he can borrow.

**이수진, 42, 부산.** A homeowner looking into switching an existing loan to a lower rate. Wants clear terms and a calm interface that does not push her.

## Colors

Every token below was read on 2026-09-30 from finda.co.kr, /about-us and /culture by the deterministic collector, and hover values by the fixed keyboard probe. The tokens describe Finda's public website; the Finda app was not captured and none of its values is claimed.

### Primary
- **Finda Violet** (`#4e2eed`): The fill of 앱 다운받기, the one action present in the fixed header of all three captured pages (a 105 × 33 pill with `#ffffff` text; captures `home`, `surface-2` and `surface-3` #1). It is the primary because it is the product's persistent primary action: downloading the app is what the website asks every visitor to do, on every page, in this colour. The probe found no hover, pressed or focus change on it.
- **On Primary** (`#ffffff`): Labels on both violets and on the charcoal selected tab.

### Accent
- **Action Violet** (`#5d4cf2`): The fill of the large 54px pill actions — 채용공고 확인하기 on /about-us and 더 이상 보지 않기 in the home notice dialog — the 1px outline and label of their partner 닫기, and the label of the current section in the header navigation (핀다 on home and /about-us, 채용 on /culture). Unselected navigation labels are `#3a415a`.
- **Action Violet Hover** (`#7164f8`): Hover and pressed fill of the `#5d4cf2` pills, settled (the pills compute `transition: all 0s`). The outlined 닫기 settles on a pale `#f0eeff` fill instead.

### Neutral & Surface
- **White** (`#ffffff`): Fills of 닫기, the footer disclosure toggle, 핀다 크루 합류하기 and one culture tile. The body element computes a transparent background, so the page white is the browser canvas.
- **Surface** (`#f6f6f9`): Culture page cards and unselected benefit tabs; unselected tabs darken to `#e0e3eb` on hover.
- **Hairline** (`#e9e9e9`): The 1px border of the footer disclosure toggle, the only border observed outside the violet outline.
- **Charcoal** (`#15161b`): Shortcut pills on home, the selected culture tab, and headings on the culture page and parts of home.

### Text
- **Ink** (`#010a26`): The document default text colour and the footer headline.
- **Pure Black** (`#000000`): The home hero headline and several home section and feature headings.
- **Body** (`#444857`): Reading copy on home and the culture page — the hero subline, section descriptions, review text.
- **Slate** (`#3a415a`): Unselected header navigation labels and product headings on /about-us.
- **Muted** (`#65798e`): Footer disclosure and legal notes, and the footer toggle label.
- **Muted Alt** (`#737a94`): The large grey lead-in heading of the home history section and review dates.

### Brand assets, not tokens
- The culture page's square work-principle tiles sit on illustration fills (`#35afff`, `#061729`, `#2551e0`, `#7ee8ff`, as well as `#f6f6f9` and `#ffffff`). They are artwork and are not colour tokens.
- The Finda logo was not measured; no logo colour is claimed.

## Typography

### Font Family
- **Live surface use**: `suit` (320 observed uses) and `pretendard` (100), both `loaded / high`, self-hosted by Finda as WOFF2 files from `static.finda.co.kr/common-web/4.038.6/_next/static/media/`. The body element computes `pretendard, "pretendard Fallback"` on all three pages. Home and the culture page set their headings, navigation and most copy in `suit`; /about-us renders everything in `pretendard`. A same-day headless read found SUIT weights 300–800 and Pretendard 400 and 600 loaded on home, and Pretendard 400–700 on /about-us.
- **Official distributed font assets**: the family names match two open-source Korean typefaces. SUIT is by SUNN (sun.fo/suit), and its LICENSE states the SIL Open Font License 1.1. Pretendard is by Kil Hyung-jin (orioncactus), and its LICENSE also states the SIL Open Font License 1.1. Both licence files were opened on 2026-09-30. The identification rests on the declared family names; the name tables of Finda's served files were not inspected.
- **Official product use**: no Finda page opened this session names its typefaces, so no statement of official product use is made.
- **Declared only (no visible use)**: `suit Fallback` and `pretendard Fallback`, the metric-matched fallbacks declared alongside the self-hosted faces, with 0 observed uses.
- **Unresolved**: none of the observed families is unidentified.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Observed on |
|------|------|------|--------|-------------|----------|-------------|
| Culture Hero | SUIT | 52px | 800 | 73px (1.4) | -0.78px | Culture page headline, `#15161b` |
| Display Hero | SUIT | 50px | 800 | 66px (1.32) | -0.75px | Home hero headline, `#000000` |
| Section Large | SUIT | 46px | 800 | 60px (1.3) | -0.69px | Section headings on home and culture |
| Section | SUIT | 34px | 800 | 48px (1.41) | -0.51px | 대출 비교부터 신청까지 on home |
| Subsection | SUIT | 28px | 800 | 40px (1.43) | -0.42px | Feature headings on home and culture |
| Company Title | Pretendard | 28px | 600 | 37.8px (1.35) | -0.14px | Section headings on /about-us |
| Lead | SUIT | 25px | 600 | 35px (1.4) | -0.485px | Home hero subline, `#444857` |
| Card Title | SUIT | 24px | 800 | 34px (1.42) | -0.4656px | Work-principle tiles on culture |
| Button Large | Pretendard | 17px | 600 | 22.95px (1.35) | -0.17px | Large pill action labels |
| Body | SUIT | 16px | 400 | 28px (1.75) | -0.16px | Review text on home |
| Nav | SUIT | 15px | 400 | 23.4px (1.56) | normal | Header navigation labels |
| Tab | SUIT | 14px | 700 | 23px (1.64) | normal | Culture benefit tabs |
| Caption | SUIT | 13px | 400 | 21.45px (1.65) | normal | Footer company disclosure |
| Button Small | SUIT | 12px | 400 | 18px (1.5) | normal | Header 앱 다운받기 |
| Fine | SUIT | 11px | 400 | 17.16px (1.56) | normal | Footer legal notes |

### Principles
- **ExtraBold headlines, tracked tight**: every SUIT heading from 24px to 52px is weight 800, and tracking tightens with size in proportion (about -1.5% of the size).
- **Two templates, two faces**: home and culture are SUIT-first; the company page is Pretendard-only at weight 600 for headings. Pretendard also carries the large pill action labels and the document default.
- **Grey-violet reading copy**: descriptions sit in `#444857` rather than the navy-black ink.

## Layout

### Spacing System
- Shortcut pills: 14.48px vertical, 29px horizontal padding at 48px height, with a 7.24px gap before the icon
- Culture tabs: 14px vertical, 28px horizontal padding at 51px height
- Culture cards: 40px 32px padding (benefit cards) and 40px 18px (carousel cards)
- Recruiting link: 14px 30px padding at 54px height
- Frequent spacing values in the capture: 40, 32, 12, 24 and 18px

### Grid & Container
- Home centres a SUIT headline over a hero film, then alternates left- and right-aligned feature sections, a calculator section with six shortcut pills in two columns, a statistics band and a review row.
- /about-us runs a full-width violet recruiting action (1180 × 54) inside its 1180px content column.
- The culture page stacks 590 × 590 principle tiles in pairs, a filtered grid of 285 × 340 cards and a card carousel.

### Whitespace Philosophy
- **Airy marketing, dense footer**: sections are separated by large headings and open space; the footer compresses legal copy into 11px and 13px lines.
- **Flat segmentation**: grey `#f6f6f9` fills group content on the culture page; no shadow is used.

### Border Radius Scale
- 0px: the default (347 of the recorded radii)
- 2px: footer disclosure toggle
- 6px: culture benefit cards
- 10px: carousel cards and principle tiles
- 43px: culture tabs
- 52px: recruiting link
- 60px: shortcut and more pills
- 100px: header download action
- 9999px: large pill actions and carousel arrows

### Responsive Behavior

#### Breakpoints
Only the 1440 × 900 desktop viewport was captured. Class names such as `md:max-w-[150px]`, `lg:text-28-bold` and `lg:h-[340px]` show that the pages restyle at md and lg breakpoints; no breakpoint value was measured.

#### Touch Targets
- Large pill actions: 54px tall
- Recruiting link: 54px
- Culture tabs: 51px
- Shortcut and more pills: 48px
- Carousel arrows: 40 × 40
- Header download action: 33px
- Footer disclosure toggle: 22px

#### Collapsing Strategy
- The culture page carries two sizes of each principle-tile heading (28px and 24px), a sign of a layout switch; how the pages collapse was not captured.

#### Image Behavior
- Hero film and app screenshots sit flat, without borders or shadows.

## Elevation & Depth

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Every captured element |
| Surface | `#f6f6f9` fill | Culture cards and unselected tabs |
| Hairline | 1px solid `#e9e9e9` | Footer disclosure toggle |
| Dark | `#15161b` fill | Shortcut pills and the selected tab |
| Overlay | `rgba(0, 0, 0, 0.4)` backdrop | Notice dialog on home |

**Shadow Philosophy**: all 420 elements the collector recorded compute `box-shadow: none`. Emphasis comes from colour — the two violets and charcoal — and from pill shapes, not from elevation.

## Motion & Easing

The probe read the transitions the controls compute. The culture tabs transition colour, background, border, text-decoration colour, fill and stroke over 0.15s with `cubic-bezier(0.4, 0, 0.2, 1)`; the recruiting link transitions opacity over 0.15s with the same curve. The header download pill, the large and outlined pills and the footer toggle compute `transition: all 0s`, so their colour changes are instant. The calculator pills carry a `transition-colors` class, but no computed value was read for them. Nothing else about motion (carousels, hero film, counters) was measured; treat it as unspecified and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/finda.json (capturedAt 2026-09-30T07:53:29Z), deterministic collector, 1440x900, logged out: finda.co.kr, /about-us, /culture. States and the recruiting link: fixed keyboard probe raws docs/research/2026-09-29-growth/raw/finda-states-{about,culture,home,home-chips}.json.
- §1, §10, §11 context: finda.co.kr/about-us (vision, 핀다 연혁, 핀다 프로덕트), /culture (work principles), the home page copy and footer, and www.post.finda.co.kr, opened 2026-09-30.
- §3 licences: the SUIT and Pretendard LICENSE files on GitHub, opened 2026-09-30.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->

## Components

### Buttons

**Header download action (primary)**
- Background: `#4e2eed`
- Text: `#ffffff`
- Radius: 100px
- Height: 33px (fixed 105px wide)
- Font: 12px / 400 / 18px SUIT (Pretendard on /about-us)
- States: the probe found no hover, pressed or focus change; it computes `transition: all 0s`
- Use: 앱 다운받기 in the fixed header of all three pages

**Large pill action**
- Background: `#5d4cf2`
- Text: `#ffffff`
- Radius: 9999px
- Padding: 4px 0px
- Height: 54px
- Font: 17px / 600 / 22.95px Pretendard, letter-spacing -0.17px
- Hover: background `#7164f8`
- Pressed: background `#7164f8`
- States: focus shows no change
- Use: 채용공고 확인하기 on /about-us (1180 × 54); 더 이상 보지 않기 in the home notice dialog (365 × 54)

**Outlined pill action**
- Background: `#ffffff`
- Text: `#5d4cf2`
- Border: 1px solid `#5d4cf2`
- Radius: 9999px
- Padding: 4px 12px
- Height: 54px
- Font: 17px / 600 / 22.95px Pretendard, letter-spacing -0.17px
- Hover: background `#f0eeff`
- Pressed: background `#f0eeff`
- States: focus shows no change
- Use: 닫기 in the home notice dialog, 120 × 54

**Calculator shortcut pill**
- Background: `#15161b`
- Radius: 60px
- Padding: 14.48px 29px
- Height: 48px
- States: rest only; the probe could not reach these pills while the notice dialog was open
- Use: 대출이자, 연봉 실수령, 전월세 비교, DSR, 내 집 대출한도 and 연말정산 under 모든 계산을 쉽고 빠르게 on home, 153 × 48. The visible label sits in a child element that neither the collector nor the probe recorded; a same-day headless read showed white 15px / 600 SUIT labels, which is kept out of the tokens.

**More pill**
- Background: `#15161b`
- Radius: 60px
- Padding: 0px 20px
- Height: 48px
- States: rest only
- Use: 더 보러가기 on home, 153 × 48

**Recruiting link**
- Background: `#ffffff`
- Text: `#15161b`
- Radius: 52px
- Padding: 14px 30px
- Height: 54px
- Font: 17px / 800 SUIT
- Hover: opacity 0.9
- Pressed: opacity 0.9
- States: focus draws only the browser's default ring; no brand focus style
- Use: 핀다 크루 합류하기 on the culture page (recruiting page)

**Footer disclosure toggle**
- Background: `#ffffff`
- Text: `#65798e`
- Border: 1px solid `#e9e9e9`
- Radius: 2px
- Padding: 2px 8px
- Height: 22px
- Font: 12px / 400 / 16px Pretendard
- States: the probe found no hover, pressed or focus change
- Use: 사업자정보확인 > in the footer of every page

**Carousel arrows**
- The benefit carousel on the culture page uses transparent 40 × 40 round arrows; the first is `disabled` at capture with the same computed values as its enabled partner. The work-principle tiles carry 40 × 40 round arrows filled `rgba(255, 255, 255, 0.2)`.

### Tabs & Navigation

**Culture benefit tab**
- Background: `#f6f6f9`
- Text: `#15161b`
- Radius: 43px
- Padding: 14px 28px
- Height: 51px
- Font: 14px / 700 / 23px SUIT
- Selected: background `#15161b`, text `#ffffff`
- Hover: background `#e0e3eb` (unselected tabs)
- Pressed: background `#e0e3eb` (unselected tabs)
- States: the selected tab does not change on hover or pressed; focus shows no change
- Use: 최고의 환경, 스페셜 보상, 성장 지원, 재충전 and 생활 속 지원 on the culture page (recruiting page)

**Header navigation**
- Text: `#3a415a`
- Selected: `#5d4cf2` on the current section's item
- Height: 56px cells
- Font: 15px / 400 / 23.4px SUIT
- Use: 핀다, 서비스, 문의, 핀다포스트 and 채용 in the fixed header

### Cards

**Benefit card**
- Background: `#f6f6f9`
- Radius: 6px
- Padding: 40px 32px
- Use: 285 × 340 cards under the culture tabs (recruiting page)

**Carousel card**
- Background: `#f6f6f9`
- Radius: 10px
- Padding: 40px 18px
- Use: 256 × 400 cards in the culture carousel (recruiting page)

**Work-principle tile**
- Radius: 10px
- Use: 590 × 590 square tiles, each on its own illustration fill

### Dialog

**Notice dialog**
- Background: `rgba(0, 0, 0, 0.4)` backdrop over the full viewport
- Use: open over home at capture; its foot pairs 더 이상 보지 않기 with 닫기

---

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out pages of finda.co.kr plus fixed keyboard-probe state reads and first-party context)
**Tier 1 sources:** https://finda.co.kr/ ; https://finda.co.kr/about-us ; https://finda.co.kr/culture ; https://www.post.finda.co.kr/
**Tier 2 sources:** getdesign.md/finda (HTTP 200, the name does not appear in the response) and styles.refero.design/?q=finda (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

### States

Only these states were observed on the three captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Hover / pressed (large pill)** | `#5d4cf2` → `#7164f8`, settled (probe and bundle frames agree). |
| **Hover / pressed (outlined pill)** | `#ffffff` → `#f0eeff`. |
| **Hover / pressed (culture tab)** | Unselected `#f6f6f9` → `#e0e3eb`; the selected `#15161b` tab does not change. |
| **Hover / pressed (recruiting link)** | Opacity 1 → 0.9. |
| **No change** | The header download pill and the footer disclosure toggle show no hover, pressed or focus change within the probe's compared scope. |
| **Selected** | Header navigation turns the current section `#5d4cf2`; the culture tab fills `#15161b` with white text. |
| **Disabled** | The first culture carousel arrow is `disabled` at capture, with the same computed values as its enabled partner. |
| **Focus** | No captured control draws an authored focus style; 핀다 크루 합류하기 shows only the browser's default ring. |
| **Dialog open** | A notice dialog with a `rgba(0, 0, 0, 0.4)` backdrop covered home at capture. |

Error, empty, loading and success states were not captured and are not described. The calculator pills were not reachable by the probe, so their states are unmeasured, not absent.

Live state probe, 2026-10-16 (`https://finda.co.kr/about-us`), `pill-cta`: focus — no visible change (measured 2026-10-16).

## Do's and Don'ts

### Do
- Use `#4e2eed` for the one persistent primary action and `#5d4cf2` for large pill actions, their outlines and the selected navigation item
- Hover `#5d4cf2` pills to `#7164f8`; give outlined violet pills a `#f0eeff` hover fill
- Set headlines in SUIT weight 800 with tracking near -1.5% of the size
- Use charcoal `#15161b` pills with 60px radius for tool shortcuts
- Keep reading copy in `#444857` and legal copy in `#65798e`
- Keep every surface flat; group with `#f6f6f9` fills

### Don't
- Don't add drop shadows; none of the 420 captured elements has one
- Don't use the culture page's illustration fills as interface colours
- Don't render SUIT or Pretendard with another face in their place
- Don't invent focus styles; the captured controls show none of their own (one link shows the browser default ring)
- Don't set headlines in light weights; every captured SUIT heading is 800 (700 for the grey lead-in and the footer headline)
- Don't use square corners on actions; every captured action is a pill

## Voice & Tone

Finda's voice is **declarative and reassuring**: short mission lines, plain calculator names and concrete numbers. Headlines promise a change in how people choose financial products; body copy explains with figures.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, mission-framed. "금융 선택의 기준을 바꾸다." |
| Product promise | Concrete and quantified. "1분만에 대출 비교부터 신청까지." |
| Tool labels | Plain nouns. "대출이자", "연봉 실수령", "DSR", "전월세 비교". |
| Actions | Direct, low-pressure. "앱 다운받기", "더 보러가기", "채용공고 확인하기". |
| Company and culture pages | First-person plural, purposeful. "누구도 가지 않은 금융 혁신의 길을 만듭니다." |

**Voice samples (verbatim, opened 2026-09-30):**
- "대출비교플랫폼, 핀다 | 1분만에 국내 최다 금융사 대출 비교" — finda.co.kr page title.
- "금융 선택의 기준을 바꾸다" — home hero headline.
- "대출 비교부터 신청까지" — home section heading.
- "핀다로 선택이 쉬워진 사람들의 이야기" — home review section heading.
- "우리가 꿈꾸는 금융이 핀다" — /about-us headline.
- "누구도 가지 않은 금융 혁신의 길을 만듭니다" — /culture headline.

**Forbidden register**: fear-based lending pitches, urgency timers, unexplained jargon, stacked exclamation marks.

## Agent Prompt Guide

### Quick Color Reference
- Persistent primary action: `#4e2eed` with `#ffffff` text
- Large pill actions, outlines, selected nav: `#5d4cf2`; hover `#7164f8`; outlined hover `#f0eeff`
- Charcoal pills and selected tab: `#15161b`
- Grey surface: `#f6f6f9`; tab hover `#e0e3eb`; hairline `#e9e9e9`
- Text: `#010a26` default, `#000000` home headlines, `#444857` reading copy, `#3a415a` nav, `#65798e` footer, `#737a94` grey lead-ins

### Example Component Prompts
- "Create a header download pill: `#4e2eed` background, `#ffffff` 12px SUIT label (weight 400, line height 18px), 100px radius, 105 × 33, no hover change, no shadow."
- "Create a large pill action: `#5d4cf2` background, `#ffffff` 17px Pretendard label at weight 600 with -0.17px tracking, 9999px radius, 54px tall; hover and pressed `#7164f8`. Pair it with an outlined version: white background, 1px solid `#5d4cf2`, `#5d4cf2` label, hover `#f0eeff`."
- "Build calculator shortcut pills: `#15161b` background, 60px radius, 14.48px 29px padding, 48px tall, arranged in two columns."
- "Build filter tabs: `#f6f6f9` background, `#15161b` 14px SUIT label at weight 700, 43px radius, 14px 28px padding, 51px tall; selected `#15161b` with white text; unselected hover `#e0e3eb`."

### Iteration Guide
1. One violet for the persistent download action (`#4e2eed`), one for everything else violet (`#5d4cf2`)
2. SUIT 800 headlines, tracked tight; Pretendard for the company page and pill labels
3. Pills for every action; 6px and 10px for cards
4. `#444857` for reading copy, never pure black for paragraphs
5. Flat surfaces, grey `#f6f6f9` grouping
6. Charcoal `#15161b` for tools and selection on grey

---

## Governance

### Known Gaps

- **Contrast, `biz-info-button`.** Text `#65798e` on `#ffffff` measures 4.49:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
