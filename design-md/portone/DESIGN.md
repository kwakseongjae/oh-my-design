---
name: PortOne
colors:
  primary: '#fc6b2d'
  secondary: '#363a44'
  on-primary: '#ffffff'
  selected-surface: '#fff8f5'
  ink: '#111827'
  body: '#374151'
  muted: '#6b7280'
  subtle: '#9ca3af'
  label-dark: '#333333'
  canvas: '#ffffff'
  accent-blue: '#2873ff'
  accent-purple: '#8438e8'
typography:
  display-hero:
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1.2
    use: Home hero H1 (AI로 결제와 재무 운영을 자유롭게), tracking -2.24px
  page-title:
    fontSize: 56px
    lineHeight: 1.2
    use: Page H1 on pricing and team; weight set on the variable axis, see §3
  section:
    fontSize: 48px
    lineHeight: 1.25
    use: Home section headlines, tracking -1.44px
  sub-section:
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.35
    use: Product block headlines (사업의 시작부터 확장까지, 단 하나의 결제 인프라)
  serif-accent:
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.2
    use: 'Serif accent heading on the team (RECIPE culture) page, #6b7280'
  eyebrow:
    fontSize: 24px
    lineHeight: 1.5
    use: Coloured product-line eyebrow above each home block
  card-title:
    fontSize: 28px
    lineHeight: 1.35
    use: Feature headings inside product blocks
  body:
    fontSize: 17px
    lineHeight: 1.5
    use: Body copy and value descriptions
  nav:
    fontSize: 15px
    lineHeight: 1.47
    use: Header navigation and header button labels
  caption:
    fontSize: 13px
    lineHeight: 1.7
    use: Footer company details
rounded:
  tab: 16px
  pill: 64px
spacing:
  pill-pad: 16
  tab-pad: 16
components:
  header-cta:
    type: button
    backgroundColor: 'linear-gradient(180deg, #363a44 0%, #030712 100%)'
    textColor: '#ffffff'
    rounded: 64px
    height: 40px
    padding: 16px
    typography: 15px Pretendard Variable
    hover: 'gradient lightens to #3f434d -> #6b7280 (instant)'
    pressed: same as hover
    use: Header 도입문의 (contact sales), the site's primary action
  hero-cta:
    type: button
    backgroundColor: 'linear-gradient(180deg, #363a44 0%, #030712 100%)'
    textColor: '#ffffff'
    height: 49.5px
    typography: 17px Pretendard Variable
    shadow: inset 0 2px 0 rgba(255, 255, 255, 0.1)
    hover: 'gradient lightens to #3f434d -> #6b7280 (instant)'
    pressed: same as hover
    use: Hero 시작하기 and the 살펴보기 block buttons; the fill sits on an inner wrapper, not on the link
  login-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#333333'
    rounded: 64px
    height: 40px
    padding: 16px
    typography: 15px Pretendard Variable
    hover: 'bg #eeeeee'
    pressed: same as hover
    use: Header 로그인 (leads to the admin console, which was not opened)
  product-tab:
    type: tab
    backgroundColor: '#ffffff'
    textColor: '#374151'
    border: '1px solid #e5e5e5'
    rounded: 16px
    height: 55px
    padding: 16px
    typography: 17px Pretendard Variable
    selected: 'bg #fff8f5, label #fc6b2d, 1px border #fc6b2d'
    states: 'hover and pressed: no change (probe); focus not measured'
    use: Two-up switcher inside a product block (국내 결제 / 해외 결제)
fonts:
  roles:
    display: Pretendard Variable
    body: Pretendard Variable
    serif-accent: PT Serif Caption
---

# Design System Inspiration of PortOne

## Overview

### Visual Theme & Atmosphere

PortOne (포트원), operated by 주식회사 코리아포트원 (PortOne Korea Corp.) from Seongsu-dong, Seoul, sells payment and finance infrastructure to online businesses. The home page puts the reach up front: about 2,500 businesses worldwide use its payment infrastructure, it handles 48조원 in transaction volume, and it connects about 25 domestic payment gateways through a single integration. The company is now reframing itself from a payments integrator into an "AI 재무 인프라". The page title reads "통합 결제·정산 AI 재무 인프라 | 포트원", the header has a new "Finance AX" item, and the hero promises "AI로 결제와 재무 운영을 자유롭게". The product line now runs from 원 페이먼트 인프라 (one payment infrastructure) through partner-settlement automation to a global commerce finance solution.

The site (built in Framer) is a white canvas (`#ffffff`) with deep Tailwind-style ink (`#111827`) for headlines and a grey ladder for text: `#374151` body, `#6b7280` muted, `#9ca3af` footer detail. The brand orange `#fc6b2d` is used for marking, not for filling. It is the site-wide eyebrow colour ("Culture" on the team page, "서비스 이용요금" on pricing), the eyebrow of the 원 페이먼트 인프라 block on home, and the selected state of the product switcher, where a 1px orange border and orange label sit on a faint `#fff8f5` fill. Two sibling product lines take their own eyebrow colours on home: blue `#2873ff` for partner settlement and purple `#8438e8` for global commerce.

The actions themselves are charcoal. 도입문의 in the header and 시작하기 in the hero both fill with a vertical gradient from `#363a44` to `#030712`, which lightens to `#3f434d` → `#6b7280` on hover. 로그인 is a white pill with a `#333333` label that greys to `#eeeeee`. Header buttons are 40px pills (64px radius). Product switcher tabs are 16px-radius panels. Changes are instant: every probed control computes `transition: all 0s`.

Type is Pretendard Variable throughout, with a serif accent (PT Serif Caption) on the team page. The home hero sits at 56px in weight 400 with tight tracking (-2.24px). Most other headings set their weight on the variable font's `wght` axis, which the browser reports as a computed `font-weight: 1000`; see §3.

**Key Characteristics:**
- Orange `#fc6b2d` marks the selected state and the page eyebrow on every captured page
- Primary actions are a charcoal gradient (`#363a44` → `#030712`), not orange
- White canvas, `#111827` ink, and a cool grey text ladder
- 40px header pills (64px radius); 16px-radius switcher tabs
- Pretendard Variable, with a 56px / 400 hero and tight negative tracking
- Instant state changes (no transitions measured)

### Primary tasks

- Compare integrating many payment gateways through one PortOne connection against doing it one by one.
- Check pricing and what the free tier covers.
- Read how partner settlement and tax invoices are automated.
- Contact sales (도입문의) or start an account (시작하기).

### Brand Narrative

PortOne began as a developer-first way to put many Korean payment gateways behind one integration. The home page still leads with that ("모든 PG 결제, 정산을 단 한번의 연동으로 완성합니다", about 25 domestic PGs), and its developer guide keeps 결제모듈 V1 and V2 side by side. The current site shows the next step. The company presents itself as AI finance infrastructure that runs from payment through tax and settlement, with products for partner settlement, payouts, tax invoices, month-end close and a global site for cross-border settlement.

The team page sets out the culture as six values under the name RECIPE: Respect (존중), Execution (실행), Customer (고객), Integrity (솔직함), PortOne (One Team) and Excellence (탁월한 태도와 방식). Several of them name AI directly: automating customers' manual work with AI, and looking for better methods "AI를 포함한 새로운 접근으로". The company publishes a corporate blog (blog.portone.io) with news, customer stories and tips, and a Naver blog for Korean readers.

The design follows that stance: calm white pages, charcoal actions, and one orange used to show where you are rather than to shout.

*The June record also described an earlier brand name, a 2023 rebrand date and 2022 volume figures. They were not re-opened on a first-party page in this wave and are left out until they are.*

### Principles

1. **One integration, one infrastructure.** *UI implication:* one action style (the charcoal gradient) and one accent (orange) across the site.
2. **Show where the user is.** *UI implication:* orange marks the selected option and the current section, not the button.
3. **Capability over hype.** *UI implication:* declarative headlines, short calls to action, numbers as proof.
4. **Flat and instant.** *UI implication:* no shadows beyond a hairline highlight; state changes without animation.

### Personas

*Personas below are fictional archetypes informed by the audiences the site addresses (Korean commerce developers, finance and operations teams, cross-border merchants), not individual people.*

**이준호, 30, 서울.** Backend developer at a fast-growing D2C commerce startup. Wants several Korean PGs live without wiring each one by hand. Judges a payments vendor by how fast its docs get checkout working.

**박지은, 38, 경기.** Finance operations lead at a mid-market retailer selling in several countries. Lives in settlement and reconciliation. Values partner-settlement automation and a single month-end close.

**Sanjay Mehta, 34, Singapore.** Product manager at a cross-border marketplace expanding into Korea. Needs local payment methods behind one integration and English documentation.

## Colors

### Primary
- **PortOne Orange** (`#fc6b2d`): The selected state of the product switcher (label and 1px border), the page eyebrow on the team and pricing pages, and the eyebrow of the 원 페이먼트 인프라 block on home. The site's own colour variable resolves to it for these labels. It is the primary because it is the colour the pages render for "selected" and for the site-wide accent on all three captured pages. The fill of the primary action is charcoal (below), and orange never fills a button on the captured pages.
- **Selected Surface** (`#fff8f5`): The fill behind the selected switcher tab.

### Action
- **Charcoal** (`#363a44`): The top stop of the action gradient `#363a44` → `#030712` on 도입문의 and 시작하기. Hover lightens it to `#3f434d` → `#6b7280`.
- **On Action** (`#ffffff`): The label on the charcoal gradient.

### Product-line accents
- **Blue** (`#2873ff`): Eyebrow of the partner-settlement block on home.
- **Purple** (`#8438e8`): Eyebrow of the global-commerce block on home.

### Neutral & Text
- **Canvas** (`#ffffff`): Page background.
- **Ink** (`#111827`): Headlines.
- **Body** (`#374151`): Body copy, unselected tab labels.
- **Muted** (`#6b7280`): Secondary headings and the serif accent.
- **Subtle** (`#9ca3af`): Footer company details.
- **Label Dark** (`#333333`): The 로그인 label.
- The unselected tab border is `#e5e5e5`; the 로그인 hover fill is `#eeeeee`.

### Brand assets, not tokens
The small data widgets inside the product illustrations (settlement tables, fee formulas) use their own orange, green and red text. They are illustrations, not UI roles, and are not tokens.

## Typography

### Font Family
- **Pretendard Variable** is loaded and carries headings, body, list items and labels (324 uses). Framer registers it as "Pretendard Variable Variable", and the doubled name is a Framer quirk. Pretendard is distributed under the SIL Open Font License 1.1.
- **PT Serif Caption** is loaded and used for one serif accent heading on the team page (36px / 400, `#6b7280`). It is a Google Fonts family (SIL OFL).
- **Archivo** and **Geist** are declared by the Framer build but no captured element uses them.
- **Weights.** Framer sets most heading and label weights on the variable `wght` axis (the markup declares `wght` 500 on the button labels), and the browser then reports `font-weight: 1000`. The number 1000 is not a weight to reproduce: in a non-variable stack it would render as the heaviest face. Weight is therefore left out of the tokens wherever the computed value is 1000, and given only where it is a plain value (the 56px / 400 hero and the 36px / 400 sub-section).

### Hierarchy

| Role | Size | Weight | Line height | Tracking | Where |
|---|---|---|---|---|---|
| Hero | 56px | 400 | 67.2px | -2.24px | Home H1 |
| Page title | 56px | variable axis | 67.2px | -2.24px / -1.6px | Pricing and team H1 |
| Section | 48px | variable axis | 60px | -1.44px | Home section headlines |
| Sub-section | 36px | 400 | 48.6px | -1.08px | Product block headlines |
| Serif accent | 36px | 400 | 43.2px | -1px | Team page, PT Serif Caption |
| Card title | 28px | variable axis | 37.8px | -0.84px | Feature headings |
| Eyebrow | 24px | variable axis | 36px | -0.24px | Coloured product-line labels |
| Tab label | 17px | variable axis | 22.95px | -0.51px | Product switcher |
| Body | 17px | variable axis | 25.5px | -0.17px | Body copy |
| Nav / button | 15px | variable axis | 22px | normal | Header |
| Caption | 13px | variable axis | 22.1px | normal | Footer |

### Principles
- **Tight tracking on big type.** Negative letter-spacing scales with size, from -2.24px at 56px down to -0.17px at 17px.
- **One family, one serif accent.** Pretendard Variable everywhere; PT Serif Caption only as the team page's accent.

## Layout

### Spacing System
- Header pills and switcher tabs both compute 16px padding.
- The collector's most frequent spacing value is 6px (140 uses), then 16, 10 and 20px.

### Grid & Container
- Content runs 1200px wide inside a 1440 viewport (hero H1 and section headlines are 1200px).
- The product switcher splits its block into two 566px tabs.

### Whitespace Philosophy
Large headline blocks on white, each followed by one product block with an eyebrow, a headline, a switcher and an illustration. The page moves through the product lines one block at a time.

### Border Radius Scale
- 16px: switcher tabs
- 64px: header pills
- The collector's radius census holds only 0 and 64px. The 16px tab radius comes from the probe.

### Responsive Behavior

#### Breakpoints
Only the 1440px desktop viewport was captured.

#### Touch Targets
- Header pills are 40px tall, the hero button about 50px, switcher tabs 55px.

#### Collapsing Strategy
Not measured.

#### Image Behavior
Product blocks pair copy with illustrated UI mock-ups; the customer-story cards use photography.

## Elevation & Depth

The only shadow measured is the 1px inner highlight on the hero button (`inset 0 2px 0 rgba(255, 255, 255, 0.1)`). Surfaces are otherwise flat; tabs separate with 1px borders.

## Motion & Easing

Every probed control (도입문의, 로그인, 시작하기 and both product tabs) computes `transition: all 0s`, so its state changes are instant. Nothing else about motion (Framer scroll effects, the logo marquee, counters) was measured. Treat it as unspecified and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/portone.json (capturedAt 2026-09-30T13:12:59Z), deterministic collector, 1440x900, logged out: www.portone.io, /team, /pricing. States, the gradient fills and the tab colours: fixed keyboard probe raw docs/research/2026-09-29-growth/raw/portone-states-home.json.
- §1, §10, §11 context: the home copy and footer, /team (RECIPE values), /pricing, blog.portone.io and blog.naver.com/portone_kr, opened 2026-09-30.
- §3 licence: the Pretendard LICENSE file on GitHub.
- The June body's orange-filled button, docs-site slate palette, status badges, cards, search input and motion table were not observed on the captured pages and were removed.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->

## Components

### Buttons

**Header contact (도입문의)**
- Background: `linear-gradient(180deg, #363a44 0%, #030712 100%)`
- Text: `#ffffff`, 15px
- Radius: 64px
- Size: 83.9 × 40, computed padding 16px
- Hover and pressed: the gradient lightens to `#3f434d` → `#6b7280`; instant
- Use: the primary action in the header

**Hero start (시작하기)**
- Background: the same charcoal gradient, painted on an inner wrapper
- Text: `#ffffff`, 17px
- Inner highlight: `inset 0 2px 0 rgba(255, 255, 255, 0.1)`
- Size: 98.1 × 49.5
- Hover and pressed: the wrapper gradient lightens to `#3f434d` → `#6b7280`
- Use: the hero call to action and the 살펴보기 buttons of each product block

**Login (로그인)**
- Background: `#ffffff`
- Text: `#333333`, 15px
- Radius: 64px
- Size: 70.9 × 40, computed padding 16px
- Hover and pressed: background `#eeeeee`
- Use: header link to the admin console (not opened)

The links' own colour reads as the browser default blue and turns red when pressed. That is Chromium's default link style on an element whose visible label is a child, not a PortOne state.

### Tabs

**Product switcher (국내 결제 / 해외 결제)**
- Unselected background: `#ffffff`
- Unselected label: `#374151`, 17px
- Unselected border: 1px `#e5e5e5` (drawn by `::after`)
- Selected: background `#fff8f5`, label `#fc6b2d`, border 1px `#fc6b2d`
- Radius: 16px; 566 × 55, padding 16px
- Hover and pressed: no change on either tab

---

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out www.portone.io pages plus fixed keyboard-probe state reads and first-party context)
**Tier 1 sources:** https://www.portone.io/ ; https://www.portone.io/team ; https://www.portone.io/pricing ; https://blog.portone.io/ ; https://blog.naver.com/portone_kr
**Tier 2 sources:** not attempted; no Tier 2 value used

### States

| State | What was measured |
|---|---|
| **Hover / pressed, charcoal buttons** | Gradient `#363a44` → `#030712` becomes `#3f434d` → `#6b7280`; instant |
| **Hover / pressed, 로그인** | `#ffffff` → `#eeeeee`; instant |
| **Selected, product tab** | `#fff8f5` fill, `#fc6b2d` label and 1px border |
| **Hover / pressed, product tabs** | No change |
| **Focus** | Not measured; do not infer a focus style from this reference |

Empty, loading, error and success states were not observed on the public pages and are not specified here.

## Do's and Don'ts

### Do
- Use `#fc6b2d` for the selected state and for the eyebrow label, with a `#fff8f5` fill behind a selected panel.
- Fill primary actions with the charcoal gradient `#363a44` → `#030712` and a white label.
- Keep header buttons as 40px pills with a 64px radius.
- Set big headlines in Pretendard Variable with negative tracking.

### Don't
- Don't fill buttons with orange; the captured pages never do.
- Don't copy the computed weight 1000 as a static font weight.
- Don't add transitions the pages don't have; state changes are instant.
- Don't treat the browser's default link colours as brand colours.

## Voice & Tone

PortOne's voice is clear, infrastructural and quietly ambitious. It turns a complicated domain (many payment gateways, settlement, tax invoices, reconciliation) into plain Korean. The hero "AI로 결제와 재무 운영을 자유롭게" and the block line "사업의 시작부터 확장까지, 단 하나의 결제 인프라" set the register: declarative and capability-first. The closing banner makes a point without pressure: "재무 관리는 '버티는 것'이 아니라 '앞서가는 것'이어야 합니다".

| Context | Tone |
|---|---|
| Hero | Capability promise ("AI로 결제와 재무 운영을 자유롭게") |
| Eyebrows | Product names (원 페이먼트 인프라, 파트너 정산 자동화, 글로벌 커머스 솔루션) |
| Calls to action | Short and low-pressure (도입문의, 시작하기, 살펴보기) |
| Proof | Numbers and customer quotes (48조, 85% 결제대행사 연동 비용 절감, 위버스, 아더에러) |
| Culture | Values stated as behaviours (the RECIPE page) |

**Forbidden register:** sales urgency, unexplained jargon, exclamation-heavy hype, fear-based framing.

## Agent Prompt Guide

### Quick Color Reference
- Selected / accent: `#fc6b2d` on `#fff8f5`
- Action: gradient `#363a44` → `#030712`, label `#ffffff`
- Ink: `#111827`
- Body: `#374151`
- Muted: `#6b7280`
- Canvas: `#ffffff`

### Example Component Prompts
- "A 40px pill button, radius 64px, 16px horizontal padding, background linear-gradient(180deg, #363a44, #030712), label #ffffff 15px Pretendard Variable; hover lightens the gradient to #3f434d → #6b7280 instantly."
- "A two-up tab switcher: each tab 55px tall, radius 16px, padding 16px, 17px label. Unselected: white fill, #374151 label, 1px #e5e5e5 border. Selected: #fff8f5 fill, #fc6b2d label and 1px border."
- "A section eyebrow in #fc6b2d, 24px Pretendard Variable, above a 36px / 400 headline in #111827."

### Iteration Guide
1. Check orange appears only as selection or eyebrow, never as a button fill.
2. Check primary buttons use the charcoal gradient.
3. Check headline tracking is negative and grows with size.
4. Check no transitions were added.
