---
name: Greencar
colors:
  primary: '#222222'
  on-primary: '#ffffff'
  accent: '#00c88c'
  ink: '#000000'
  ink-soft: '#171717'
  warm-grey: '#3e3a39'
  body-grey: '#434343'
  muted: '#5e5e5e'
  faint: '#b4b4b4'
  surface: '#f6f6f6'
  hairline: '#dddddd'
  promo-red: '#f83333'
  white: '#ffffff'
typography:
  display-service:
    fontSize: 80px
    fontWeight: 600
    lineHeight: 1.5
    use: 'Service page title on the G car round-trip page (h2.local-name), 120px line, #222222, Outfit stack'
  display:
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1.5
    use: 'Closing headline on the G car home (h2.title), 96px line, #171717, Outfit stack'
  headline:
    fontSize: 52px
    fontWeight: 800
    lineHeight: 1.5
    use: 'Feature headlines on the G car home (h3.title), 78px line, #171717; the section h2s run 52px at weight 600'
  section:
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.5
    use: 'Section headings on the corporate home (h3.section-subject, p.para), 54px line, #222222; stack Outfit, Pretendard, so Hangul glyphs render in Pretendard'
  section-service:
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.5
    use: 'Section titles on the G car round-trip page (h3.section-title), Pretendard first, 54px line, #171717'
  wordmark:
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.5
    use: 'Header h1 wordmark on the corporate home, 48px line, #000000'
  card-title:
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.5
    use: 'Card subjects on the G car round-trip page (p.subject), 36px line, #171717'
  tab:
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.5
    use: Service tabs on the G car round-trip page, Pretendard, 36px line
  lead:
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.5
    use: Service slide summaries on the corporate home (p.summary), 30px line, white on the slide image
  reading:
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.5
    use: 'Guide bullets revealed by the G car round-trip tabs (li.bullet-item), 30px line, #434343'
  nav:
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.2
    use: 'Header navigation on the corporate home (a.gnb-name), 21.6px line, #171717'
  button:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.4
    use: Button labels on the corporate home, 22.4px line, Outfit stack
  badge:
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    use: Coupon and promotion labels on the G car round-trip page, Pretendard, 24px line
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: 'Document default on the corporate home, stack Outfit, Pretendard, sans-serif, 24px line, #000000'
  desc:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: 'Service-card descriptions on the G car home (p.desc), Pretendard, 24px line, #5e5e5e'
rounded:
  button: 8px
  badge: 8px
  coupon: 10px
  link: 12px
  tab: 16px
  card: 20px
spacing:
  button-y: 14
  button-x: 20
  card-y: 40
  card-x: 24
  coupon: 18
  badge-y: 4
  badge-x: 12
  link-y: 13
  link-x: 17
components:
  button-fill:
    type: button
    backgroundColor: '#222222'
    textColor: '#ffffff'
    border: '1px solid #222222'
    rounded: 8px
    padding: 14px 20px
    height: 52px
    typography: 16px / 700 / 22.4px Outfit stack
    hover: 'bg #00c88c, fg #222222, border #00c88c'
    pressed: 'bg #00c88c, fg #222222, border #00c88c'
    states: 'probe: hover and pressed settle on #00c88c with a #222222 label after an 800ms transition; focus paints the same fill but the only ring is the browser default, so no brand focus style is declared'
    use: 채용 바로가기 on the corporate home at home::[data-omd-capture="39"], 128 x 52, sitting on the green recruiting band
    focus: 'bg #00c88c, label #222222, border #00c88c, browser default focus ring (outline auto) (+1 nested-layer changes) on :focus-visible'
  button-line:
    type: button
    backgroundColor: transparent
    textColor: '#222222'
    border: '1px solid #222222'
    rounded: 8px
    padding: 14px 20px
    height: 52px
    typography: 16px / 700 / 22.4px Outfit stack
    hover: 'bg #00c88c, border #00c88c'
    pressed: 'bg #00c88c, border #00c88c'
    states: 'probe: hover and pressed fill #00c88c and turn the border green; the label stays #222222; transition all 0.2s'
    use: 더 많은 뉴스 보기 under the news section of the corporate home at home::[data-omd-capture="12"], 148 x 52
  button-line-invert:
    type: button
    backgroundColor: transparent
    textColor: '#ffffff'
    border: '1px solid #ffffff'
    rounded: 8px
    padding: 14px 20px
    height: 52px
    typography: 16px / 700 / 22.4px Outfit stack
    states: rest only; the bundle holds a focus frame, which is not declared
    use: 더 알아보기 on the three service slides of the corporate home (G car, 무버스, 세차클링), 324 x 52
  brand-panel:
    type: card
    backgroundColor: '#00c88c'
    size: 1440px x 640px
    use: Full-bleed green recruiting band (div.section-06) on the corporate home, with a repeating noise texture in ::after; read by the probe as the ancestor of 채용 바로가기
  nav-item:
    type: tab
    textColor: '#171717'
    typography: 18px / 500 / 21.6px Outfit stack
    states: rest only; no pointer or keyboard state was read
    use: Header navigation (그린카, 서비스, 인재채용, 뉴스) on the corporate home
  link-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#000000'
    border: 1px solid rgba(0, 0, 0, 0.08)
    rounded: 12px
    padding: 13px 17px
    height: 50px
    typography: 16px / 400 Outfit stack
    states: rest only; no pointer or keyboard state was read
    use: Outbound-link buttons (a.btn.module-a with an out-link icon) on the G car home, four instances, 138-158 x 50
  service-card:
    type: card
    backgroundColor: '#f6f6f6'
    border: 1px solid rgba(0, 0, 0, 0.08)
    rounded: 20px
    padding: 40px 24px
    size: 400px x 431px
    use: Six grey service cards on the G car home
  service-tab:
    type: tab
    backgroundColor: '#ffffff'
    textColor: '#222222'
    border: 1px solid rgba(0, 0, 0, 0.08)
    rounded: 16px
    padding: 18px
    height: 74px
    typography: 24px / 500 / 36px Pretendard
    selected: 'bg #222222, fg #ffffff, border #222222'
    states: selected read after the collector clicked the first tab; no hover, pressed or focus value was read
    use: Tabs on the G car round-trip page; the collector clicked the first and read the selected fill
  coupon-card:
    type: card
    backgroundColor: '#ffffff'
    border: '1px solid #dddddd'
    rounded: 10px
    padding: 18px
    shadow: rgba(0, 0, 0, 0.08) 0px 4px 8px 0px
    size: 220px x 136px
    use: Three coupon cards on the G car round-trip page, the only elements with a shadow
  coupon-badge:
    type: badge
    backgroundColor: '#f83333'
    textColor: '#ffffff'
    rounded: 8px
    padding: 4px 12px
    height: 32px
    typography: 16px / 600 / 24px Pretendard
    use: Red coupon and promotion labels (p.coupon-label, p.label) on the G car round-trip page, eight instances
fonts:
  roles:
    display: Outfit
    body: Pretendard
---

# Design System Inspiration of Greencar

## Overview

### Visual Theme & Atmosphere

Greencar (그린카) calls itself Korea's first commercial car-sharing service. Its own timeline starts with the founding of (주)그린포인트 in December 2009, a car-sharing server and in-car terminal in 2010, a patent filing on the car-sharing system in May 2011 and the start of "국내 최초 카셰어링 상용화 서비스" in September 2011. The company took the name 그린카 in February 2015 and, in June 2015, became a Lotte group company as a subsidiary of Lotte Rental (롯데렌탈). By December 2020 it reported about 8,000 cars at 3,200 그린존 in 147 areas, 3.5 million individual members and 10,000 corporate car-sharing accounts. It then widened past car-sharing: the at-home car-wash platform 세차클링 (September 2021), a next-generation app (May 2023) and the car-delivery app 무버스 (November 2023). In September 2024 the consumer service was renamed: "그린카 → 롯데렌터카 G car로 BI 리뉴얼". Today (주)그린카 is the company and 롯데렌터카 G car is the car-sharing brand it runs. The CI/BI page draws that hierarchy and offers the company CI, the G car, 무버스 and 세차클링 BIs and a service-brand design guideline as downloads.

The company describes itself with three principles, Connect, Communicate and Co-Create: "그린카의 이동은 물리적인 거리를 넘어 사람과 시간 그리고 공간을 연결합니다". Both of its websites carry that restraint. The corporate site (greencar.co.kr) is white and black. Section headings are 36px weight 700 in `#222222`, the header navigation is `#171717`, and actions are 8px-radius rectangles 52px tall. The rest-state fill is dark `#222222`. Green appears in two places. One is a full-bleed recruiting band in `#00c88c` with a noise texture. The other is interaction: on hover and press, both the filled and the outlined buttons fill with `#00c88c`. The G car product site (greencar-gcar.co.kr) uses the same header and footer templates in a more promotional register. It has 52–80px headlines, grey `#f6f6f6` service cards with 20px corners, 74px service tabs that turn `#222222` when selected, and red `#f83333` coupon labels. Its coupon cards are the only elements that carry a shadow.

**Key Characteristics:**
- Dark `#222222` is the rest fill of the filled action on the corporate home and of the selected service tab on G car. It is the one action colour on every captured page.
- Green `#00c88c` is the interaction and brand-surface colour. It fills hover and pressed buttons on the corporate home and floods its recruiting band.
- The font stack is `Outfit, Pretendard, sans-serif`. Latin glyphs render in Outfit and Hangul falls to Pretendard, and G car's section titles put Pretendard first.
- Headlines are large and even-leaded: 80, 64, 52 and 36px, all at a 1.5 line-height.
- Buttons are 8px-radius rectangles 52px tall. Link buttons use 12px, tabs 16px and cards 20px.
- The pages are flat. Only the G car coupon cards carry a shadow (`rgba(0, 0, 0, 0.08) 0px 4px 8px`). Elsewhere surfaces are separated by the `#f6f6f6` fill and hairlines.

### Primary tasks

- Book a shared G car for a weekend trip
- Take a one-way car for errands
- Compare the services in the mobility line-up (G car, 무버스, 세차클링)
- Look into a corporate account for a small business

### Brand Narrative

The narrative comes from the company's own timeline and about pages. It began as (주)그린포인트 in 2009, launched commercial car-sharing in 2011, became 그린카 and joined Lotte Rental in 2015, and passed 3.5 million members by 2020. The about page places it inside Lotte Rental's "Mobility Full Line up": rental, maintenance and used-car sales across the group, which Greencar uses for vehicle upkeep and disposal. The product side calls itself a "라이프스타일 Mobility Platform": car-sharing (G car), contactless car delivery (무버스) and at-home washing (세차클링). The 2024 rename to 롯데렌터카 G car tied the consumer brand to its parent's rental brand. Meanwhile (주)그린카 keeps its own name, site and green CI. The two websites show the split. The corporate site uses green as the brand's surface and interaction colour. The G car site uses dark tabs, grey cards and red promotion labels.

### Principles

1. **Connect, Communicate, Co-Create.** These are the company's three stated principles. *UI implication:* keep the interface about the journey and the service, not the price.
2. **Dark to act, green to respond.** *UI implication:* a rest-state action is `#222222`, and the green `#00c88c` arrives on hover and press.
3. **One stack, two scripts.** *UI implication:* Outfit for Latin, Pretendard for Hangul, even leading at 1.5.
4. **Flat by default.** *UI implication:* separate surfaces with fills and translucent hairlines, and raise only promotional coupons.

### Personas

*Personas are fictional archetypes informed by the service lines Greencar describes (round-trip and one-way car-sharing, corporate car-sharing). They are not real people.*

**김도윤, 28, 서울.** Has no car of his own and books a G car round-trip for weekend trips. He expects the booking path to feel calm rather than like a rental counter.

**이서연, 34, 경기.** Uses one-way G car for errands. She reads the coupon labels and wants clear, low-pressure actions.

**박준호, 41, 부산.** A small-business owner looking at corporate car-sharing. He reads the Lotte Rental connection as reassurance.

## Colors

### Primary action
- **Action Dark** (`#222222`): the primary colour. It fills 채용 바로가기 on the corporate home with a white label and a matching 1px border. It is also the fill of the selected service tab on the G car round-trip page. No other colour fills a rest-state action on the three captured pages, which is why `#222222` is the primary.
- **On Primary** (`#ffffff`): labels on the dark fill.

### Brand accent
- **Greencar Green** (`#00c88c`): the brand colour in its rendered roles. It is the hover and pressed fill of both the dark and the outlined buttons on the corporate home, with the label switching to `#222222`. It is also the fill of the full-bleed recruiting band. It never appears at rest on an action, and it does not render on either captured G car page. So it is the `accent`, not the primary.

### Text
- **Ink** (`#000000`): document default on the corporate home and the header wordmark.
- **Ink Soft** (`#171717`): header navigation and G car headlines.
- **Heading Dark** (`#222222`): section headings on the corporate home. This is the same value as the action fill.
- **Warm Grey** (`#3e3a39`): summaries on the G car home.
- **Body Grey** (`#434343`): guide text in the G car round-trip tabs.
- **Muted** (`#5e5e5e`): card descriptions and tips on G car.
- **Faint** (`#b4b4b4`): low-emphasis footer controls.

### Surface and signal
- **White** (`#ffffff`): canvas, link buttons and coupon cards.
- **Surface Grey** (`#f6f6f6`): G car service cards.
- **Hairline** (`#dddddd`): coupon-card border. Card and tab borders elsewhere are translucent `rgba(0, 0, 0, 0.08)`.
- **Promo Red** (`#f83333`): coupon and promotion labels on the G car round-trip page. It is a signal colour, not an action colour.

## Typography

### Font Family
- **Stack:** `Outfit, Pretendard, sans-serif` is the computed family on the body of all three pages. Outfit is a Latin typeface, so Korean text in any Outfit-first element renders in Pretendard. The two faces divide the work by script, not by role.
- **Pretendard first:** on the G car round-trip page the section titles, tabs, badges and card descriptions declare Pretendard first.
- **Delivery:** both families load from greencar.co.kr (`/fonts/outfit/Outfit-*.woff2`), with 224 observed uses of Outfit and 95 of Pretendard. Both are distributed under the SIL Open Font License 1.1.

### Hierarchy

| Role | Size / weight / line | Colour | Where |
|---|---|---|---|
| Service title | 80px / 600 / 120px | `#222222` | G car 왕복 page title |
| Display | 64px / 600 / 96px | `#171717` | G car home closing headline |
| Headline | 52px / 800 / 78px | `#171717` | G car home feature headlines (section h2 at 600) |
| Section | 36px / 700 / 54px | `#222222` | Corporate home section headings |
| Section (service) | 36px / 600 / 54px, Pretendard | `#171717` | G car round-trip section titles |
| Wordmark | 32px / 700 / 48px | `#000000` | Corporate header h1 |
| Card title | 24px / 600 / 36px | `#171717` | G car card subjects |
| Tab | 24px / 500 / 36px, Pretendard | `#222222` / white | G car service tabs |
| Lead | 20px / 500 / 30px | white | Corporate service slides |
| Reading | 20px / 400 / 30px | `#434343` | G car guide bullets |
| Nav | 18px / 500 / 21.6px | `#171717` | Corporate header navigation |
| Button | 16px / 700 / 22.4px | per button | Corporate buttons |
| Badge | 16px / 600 / 24px, Pretendard | white | G car coupon labels |
| Body | 16px / 400 / 24px | `#000000` | Document default |

### Principles
- **Even leading:** every headline and reading size sits at a 1.5 line-height. Only navigation (1.2) and button labels (1.4) are tighter.
- **Weight carries hierarchy:** 800 and 700 for headlines, 600 for sub-heads and badges, 500 for navigation and leads, 400 for reading.
- **No tracking:** every captured element computes `letter-spacing: normal`.

## Layout

### Spacing observed
- Buttons: `14px 20px`. Link buttons: `13px 17px`. Badges: `4px 12px`.
- Service cards: `40px 24px`. Coupon cards: `18px`. Tabs: `18px`.

### Grid and container
- Captured at 1440 × 900. Corporate headings and the G car tab strip span 1400px, which leaves a 20px side margin. The service cards on G car sit three across at 400px.

### Border radius scale
- 8px buttons and badges, 10px coupon cards, 12px link buttons, 16px tabs, 20px service cards.

### Responsive Behavior

Only the 1440 × 900 desktop viewport was captured. Breakpoints, touch targets and collapse behaviour were not measured and are not declared here. The buttons are 52px tall and the service tabs 74px on desktop.

## Elevation & Depth

Almost nothing is raised. The coupon cards on the G car round-trip page carry `rgba(0, 0, 0, 0.08) 0px 4px 8px 0px`, and every other captured element computes `box-shadow: none`. Depth comes from fills instead: the green band, the grey `#f6f6f6` cards, and translucent `rgba(0, 0, 0, 0.08)` borders on cards, tabs and link buttons.

## Motion & Easing

The probe read two transitions on the corporate home. The filled button's longest transition is 800ms. The outline button declares `transition: all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1) 0s`. When keyboard focus scrolled 채용 바로가기 into view, its section head's transform went from `translateY(100px)` to `0` and stayed there after blur. That is a reveal animation, not a control state. No other duration or easing was measured, and none is declared.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/greencar.json (capturedAt 2026-09-30T11:47:59Z), deterministic collector, 1440x900, logged out: www.greencar.co.kr, www.greencar-gcar.co.kr, /sharing/gcar. Button states and the green band: fixed keyboard probe raw docs/research/2026-09-29-growth/raw/greencar-states-home.json (2026-09-30T13:13Z).
- §1, §10, §11 context: greencar.co.kr/greencar/history, /greencar/about, /greencar/ci and the corporate home copy, opened 2026-09-30.
- §3 licences: the Outfit OFL.txt and Pretendard LICENSE files on GitHub, opened 2026-09-30.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->

## Components

### Buttons
- **Filled** (`button-fill`): `#222222` fill, white label, 1px `#222222` border, 8px radius, `14px 20px` padding, 52px tall, 16px/700. On hover and press it turns `#00c88c` with a `#222222` label and a green border. Used for 채용 바로가기.
- **Outline** (`button-line`): transparent, `#222222` label and 1px border, same geometry. On hover and press it fills `#00c88c` and the border turns green. Used for 더 많은 뉴스 보기.
- **Outline on image** (`button-line-invert`): transparent with a white label and 1px white border, 324 × 52. Used for 더 알아보기 on the three service slides.
- **Link button** (`link-button`, G car): white, `#000000` label, 1px `rgba(0, 0, 0, 0.08)` border, 12px radius, `13px 17px`, 50px tall, 16px/400, with an out-link icon.

### Tabs and navigation
- **Service tab** (`service-tab`, G car): white, `#222222` label, translucent 1px border, 16px radius, 18px padding, 74px tall, 24px/500 Pretendard. Selected: `#222222` fill with a white label.
- **Header navigation** (`nav-item`, corporate): 18px/500 `#171717` labels.

### Cards and badges
- **Brand panel** (`brand-panel`): full-bleed `#00c88c` band, 1440 × 640, with a repeating noise texture. It holds the recruiting message and the dark 채용 바로가기 button.
- **Service card** (`service-card`, G car): `#f6f6f6`, translucent 1px border, 20px radius, `40px 24px`, 400 × 431.
- **Coupon card** (`coupon-card`, G car): white, 1px `#dddddd`, 10px radius, 18px padding, shadow `rgba(0, 0, 0, 0.08) 0px 4px 8px 0px`, 220 × 136.
- **Coupon badge** (`coupon-badge`, G car): `#f83333`, white 16px/600 label, 8px radius, `4px 12px`, 32px tall.

**Verified:** 2026-09-30 (deterministic collector capture of the public, logged-out corporate home and two G car pages, a fixed keyboard-probe state read on the corporate home, and first-party company pages)
**Tier 1 sources:** https://www.greencar.co.kr/ ; https://www.greencar-gcar.co.kr/ ; https://www.greencar-gcar.co.kr/sharing/gcar ; https://www.greencar.co.kr/greencar/history ; https://www.greencar.co.kr/greencar/about ; https://www.greencar.co.kr/greencar/ci
**Tier 2 sources:** getdesign.md and styles.refero.design were not re-queried in this pass; no Tier 2 value used

### States

Only states read from the capture and the probe are listed.

| Component | State | Treatment | Evidence |
|---|---|---|---|
| Filled button | hover, pressed | `#00c88c` fill, `#222222` label, green border | probe |
| Outline button | hover, pressed | `#00c88c` fill, green border, label unchanged | probe |
| Filled / outline button | focus | same green fill plus the browser default ring. No brand focus style is declared | probe |
| Service tab | selected | `#222222` fill, white label | collector tab interaction |
| Carousel arrow | disabled | `swiper-button-disabled` on the G car round-trip page | collector |

Empty, loading, error and success states were not observed and are not declared.

Live state probe, 2026-10-16 (`https://www.greencar.co.kr/`), `button-fill`: focus — bg #00c88c, label #222222, border #00c88c, browser default focus ring (outline auto) (+1 nested-layer changes).

## Do's and Don'ts

### Do
- Fill the primary action in `#222222` with a white label, and use an 8px radius and a 52px height.
- Use `#00c88c` for the hover and pressed fill and for full-bleed brand bands.
- Set Korean text in Pretendard and Latin text in Outfit, with the stack `Outfit, Pretendard, sans-serif`.
- Keep headlines at a 1.5 line-height and weight 600–800.
- Use `#f83333` only for coupon and promotion labels.

### Don't
- Don't fill a rest-state action in green. The captured pages never do.
- Don't add shadows to buttons or service cards. Only coupon cards are raised.
- Don't track Korean headlines. Every captured element is at `normal`.
- Don't use pill radii on actions. The largest radius on an action is 12px.

## Voice & Tone

Greencar speaks about mobility as connection and daily life rather than rental transactions. The corporate copy is mission-framed and calm. The G car copy is promotional but plain.

| Context | Sample (verbatim, 2026-09-30) |
|---|---|
| Company principle | "그린카의 이동은 물리적인 거리를 넘어 사람과 시간 그리고 공간을 연결합니다" |
| Corporate hero | "연결된 우리의 다양한 일상은 새로운 경험을 만들어내고 더 나은 삶의 가치를 완성시킵니다." |
| Section heading | "그린카는 고객 중심의 모빌리티 풀 라인업을 열어갑니다." |
| Service slides | "당신의 라이프스타일에 맞춘 편안한 이동, 카셰어링 서비스 G car" |
| Recruiting band | "더 나은 모빌리티 경험을 함께 만들어 갈 여러분을 기다립니다." |
| CTAs | "더 알아보기", "더 많은 뉴스 보기", "채용 바로가기" |

The June record's English hero tagline "Create a Better Life" is not on the current corporate home and is no longer quoted.

## Agent Prompt Guide

### Quick colour reference
- Primary action: `#222222` (white label)
- Hover / pressed and brand band: `#00c88c`
- Text: `#000000`, `#171717`, `#222222`, `#434343`, `#5e5e5e`
- Surface: `#ffffff`, `#f6f6f6`; hairline `#dddddd`
- Promotion: `#f83333`

### Example component prompts
- "A 52px-tall button with an 8px radius, `#222222` fill and a white 16px/700 label. On hover it fills `#00c88c` and the label turns `#222222`."
- "A full-bleed `#00c88c` band with a 36px/700 headline in `#222222` and a dark 채용 바로가기 button."
- "Three 400 × 431 service cards in `#f6f6f6`, 20px radius, `40px 24px` padding and a 1px `rgba(0, 0, 0, 0.08)` border."
- "A service tab strip of 74px white tabs with 16px corners. The selected tab is `#222222` with a white 24px/500 Pretendard label."

### Iteration guide
- If an action looks green at rest, move green to the hover state.
- If a card has a shadow, remove it unless the card is a coupon.
- If Korean text renders in a Latin face, check that Pretendard is second in the stack.

## Governance

### Known Gaps

- **Contrast, `button-line`.** Text `#222222` on `#00000000` measures 1.32:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `coupon-badge`.** Text `#ffffff` on `#f83333` measures 3.81:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
