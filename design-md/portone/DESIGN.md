---
id: portone
name: PortOne
display_name_kr: 포트원
country: KR
category: fintech
homepage: "https://www.portone.io"
primary_color: "#fc6b2d"
logo:
  type: github
  slug: portone-io
verified: "2026-09-30"
added: "2026-06-26"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.portone.io/", inspected: "2026-09-30" }
    - { id: surface-2, kind: corporate, url: "https://www.portone.io/team", inspected: "2026-09-30" }
    - { id: surface-3, kind: marketing, url: "https://www.portone.io/pricing", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://www.portone.io/", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://www.portone.io/team", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://www.portone.io/pricing", captured: "2026-09-30" }
    - { id: portone-probe-home, kind: product-surface, url: "https://www.portone.io/", captured: "2026-09-30" }
    - { id: portone-blog, kind: official-doc, url: "https://blog.portone.io/", captured: "2026-09-30" }
    - { id: pretendard-license, kind: license, url: "https://raw.githubusercontent.com/orioncactus/pretendard/main/LICENSE", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &seltab { surface_id: home, source_id: portone-probe-home, method: live-state-probe, selector: "div 국내 결제, selected product tab (566 x 55): rest bg rgb(255, 248, 245), label h2 rgb(252, 107, 45) 17px, ::after border 1px solid rgb(252, 107, 45), radius 16px, padding 16px; hover and pressed no change; focus not measured", captured: "2026-09-30" }
    "tokens.colors.secondary": &cta { surface_id: home, source_id: portone-probe-home, method: live-state-probe, selector: "a 도입문의 in the header (83.9 x 40): rest background-image linear-gradient(rgb(54, 58, 68) 0%, rgb(3, 7, 18) 100%), label p rgb(255, 255, 255) 15px, radius 64px, padding 16px; hover and pressed gradient -> linear-gradient(rgb(63, 67, 77) 0%, rgb(107, 114, 128) 100%); the anchor's own fg rgb(0, 0, 238) -> rgb(255, 0, 0) is the Chromium default link colour; focus not measured", captured: "2026-09-30" }
    "tokens.colors.on-primary": *cta
    "tokens.colors.selected-surface": *seltab
    "tokens.colors.ink": &h1 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h1", captured: "2026-09-30" }
    "tokens.colors.body": &teamp { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::p", captured: "2026-09-30" }
    "tokens.colors.muted": &h3muted { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-09-30" }
    "tokens.colors.subtle": &foot { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::p", captured: "2026-09-30" }
    "tokens.colors.label-dark": &login { surface_id: home, source_id: portone-probe-home, method: live-state-probe, selector: "a 로그인 in the header (70.9 x 40): rest bg rgb(255, 255, 255), label p rgb(51, 51, 51) 15px, radius 64px, padding 16px; hover and pressed bg -> rgb(238, 238, 238); focus not measured", captured: "2026-09-30" }
    "tokens.colors.canvas": &body { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::body", captured: "2026-09-30" }
    "tokens.colors.accent-blue": &eyeblue { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.colors.accent-purple": &eyepurple { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.typography.family.display": *h1
    "tokens.typography.family.body": *teamp
    "tokens.typography.family.serif-accent": &serif { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h2", captured: "2026-09-30" }
    "tokens.typography.display-hero.size": *h1
    "tokens.typography.display-hero.weight": *h1
    "tokens.typography.display-hero.lineHeight": *h1
    "tokens.typography.display-hero.use": *h1
    "tokens.typography.page-title.size": &pageh1 { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h1", captured: "2026-09-30" }
    "tokens.typography.page-title.lineHeight": *pageh1
    "tokens.typography.page-title.use": *pageh1
    "tokens.typography.section.size": &h2 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.typography.section.lineHeight": *h2
    "tokens.typography.section.use": *h2
    "tokens.typography.sub-section.size": &h3 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-09-30" }
    "tokens.typography.sub-section.weight": *h3
    "tokens.typography.sub-section.lineHeight": *h3
    "tokens.typography.sub-section.use": *h3
    "tokens.typography.serif-accent.size": *serif
    "tokens.typography.serif-accent.weight": *serif
    "tokens.typography.serif-accent.lineHeight": *serif
    "tokens.typography.serif-accent.use": *serif
    "tokens.typography.eyebrow.size": &eyebrow { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.typography.eyebrow.lineHeight": *eyebrow
    "tokens.typography.eyebrow.use": *eyebrow
    "tokens.typography.card-title.size": &cardh3 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-09-30" }
    "tokens.typography.card-title.lineHeight": *cardh3
    "tokens.typography.card-title.use": *cardh3
    "tokens.typography.body.size": *teamp
    "tokens.typography.body.lineHeight": *teamp
    "tokens.typography.body.use": *teamp
    "tokens.typography.nav.size": &nav { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.nav.lineHeight": *nav
    "tokens.typography.nav.use": *nav
    "tokens.typography.caption.size": *foot
    "tokens.typography.caption.lineHeight": *foot
    "tokens.typography.caption.use": *foot
    "tokens.spacing.pill-pad": *cta
    "tokens.spacing.tab-pad": *seltab
    "tokens.rounded.tab": *seltab
    "tokens.rounded.pill": *cta
    "tokens.components.header-cta.type": *cta
    "tokens.components.header-cta.bg": *cta
    "tokens.components.header-cta.fg": *cta
    "tokens.components.header-cta.radius": *cta
    "tokens.components.header-cta.height": *cta
    "tokens.components.header-cta.padding": *cta
    "tokens.components.header-cta.font": *cta
    "tokens.components.header-cta.hover": *cta
    "tokens.components.header-cta.pressed": *cta
    "tokens.components.header-cta.use": *cta
    "tokens.components.hero-cta.type": &start { surface_id: home, source_id: portone-probe-home, method: live-state-probe, selector: "a 시작하기 (98.1 x 49.5): fill on descendant div.framer-1ce5yuz, background-image linear-gradient(rgb(54, 58, 68) 0%, rgb(3, 7, 18) 100%), box-shadow rgba(255, 255, 255, 0.1) 0px 2px 0px 0px inset, label rgb(255, 255, 255) 17px; hover and pressed descendant gradient -> linear-gradient(rgb(63, 67, 77) 0%, rgb(107, 114, 128) 100%); focus not measured", captured: "2026-09-30" }
    "tokens.components.hero-cta.bg": *start
    "tokens.components.hero-cta.fg": *start
    "tokens.components.hero-cta.height": *start
    "tokens.components.hero-cta.font": *start
    "tokens.components.hero-cta.shadow": *start
    "tokens.components.hero-cta.hover": *start
    "tokens.components.hero-cta.pressed": *start
    "tokens.components.hero-cta.use": *start
    "tokens.components.login-button.type": *login
    "tokens.components.login-button.bg": *login
    "tokens.components.login-button.fg": *login
    "tokens.components.login-button.radius": *login
    "tokens.components.login-button.height": *login
    "tokens.components.login-button.padding": *login
    "tokens.components.login-button.font": *login
    "tokens.components.login-button.hover": *login
    "tokens.components.login-button.pressed": *login
    "tokens.components.login-button.use": *login
    "tokens.components.product-tab.type": *seltab
    "tokens.components.product-tab.bg": &offtab { surface_id: home, source_id: portone-probe-home, method: live-state-probe, selector: "div 해외 결제, unselected product tab (566 x 55): rest bg rgb(255, 255, 255), label h2 rgb(55, 65, 81) 17px, ::after border 1px solid rgb(229, 229, 229), radius 16px; hover and pressed no change; focus not measured", captured: "2026-09-30" }
    "tokens.components.product-tab.fg": *offtab
    "tokens.components.product-tab.border": *offtab
    "tokens.components.product-tab.radius": *seltab
    "tokens.components.product-tab.height": *seltab
    "tokens.components.product-tab.padding": *seltab
    "tokens.components.product-tab.font": *seltab
    "tokens.components.product-tab.selected": *seltab
    "tokens.components.product-tab.states": *seltab
    "tokens.components.product-tab.use": *seltab
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#fc6b2d"
    secondary: "#363a44"
    on-primary: "#ffffff"
    selected-surface: "#fff8f5"
    ink: "#111827"
    body: "#374151"
    muted: "#6b7280"
    subtle: "#9ca3af"
    label-dark: "#333333"
    canvas: "#ffffff"
    accent-blue: "#2873ff"
    accent-purple: "#8438e8"
  typography:
    family: { display: "Pretendard Variable", body: "Pretendard Variable", serif-accent: "PT Serif Caption" }
    display-hero: { size: 56, weight: 400, lineHeight: 1.2, use: "Home hero H1 (AI로 결제와 재무 운영을 자유롭게), tracking -2.24px" }
    page-title: { size: 56, lineHeight: 1.2, use: "Page H1 on pricing and team; weight set on the variable axis, see §3" }
    section: { size: 48, lineHeight: 1.25, use: "Home section headlines, tracking -1.44px" }
    sub-section: { size: 36, weight: 400, lineHeight: 1.35, use: "Product block headlines (사업의 시작부터 확장까지, 단 하나의 결제 인프라)" }
    serif-accent: { size: 36, weight: 400, lineHeight: 1.2, use: "Serif accent heading on the team (RECIPE culture) page, #6b7280" }
    eyebrow: { size: 24, lineHeight: 1.5, use: "Coloured product-line eyebrow above each home block" }
    card-title: { size: 28, lineHeight: 1.35, use: "Feature headings inside product blocks" }
    body: { size: 17, lineHeight: 1.5, use: "Body copy and value descriptions" }
    nav: { size: 15, lineHeight: 1.47, use: "Header navigation and header button labels" }
    caption: { size: 13, lineHeight: 1.7, use: "Footer company details" }
  spacing: { pill-pad: 16, tab-pad: 16 }
  rounded: { tab: 16, pill: 64 }
  components:
    header-cta: { type: button, bg: "linear-gradient(180deg, #363a44 0%, #030712 100%)", fg: "#ffffff", radius: "64px", height: "40px", padding: "16px", font: "15px Pretendard Variable", hover: "gradient lightens to #3f434d -> #6b7280 (instant)", pressed: "same as hover", use: "Header 도입문의 (contact sales), the site's primary action" }
    hero-cta: { type: button, bg: "linear-gradient(180deg, #363a44 0%, #030712 100%)", fg: "#ffffff", height: "49.5px", font: "17px Pretendard Variable", shadow: "inset 0 2px 0 rgba(255, 255, 255, 0.1)", hover: "gradient lightens to #3f434d -> #6b7280 (instant)", pressed: "same as hover", use: "Hero 시작하기 and the 살펴보기 block buttons; the fill sits on an inner wrapper, not on the link" }
    login-button: { type: button, bg: "#ffffff", fg: "#333333", radius: "64px", height: "40px", padding: "16px", font: "15px Pretendard Variable", hover: "bg #eeeeee", pressed: "same as hover", use: "Header 로그인 (leads to the admin console, which was not opened)" }
    product-tab: { type: tab, bg: "#ffffff", fg: "#374151", border: "1px solid #e5e5e5", radius: "16px", height: "55px", padding: "16px", font: "17px Pretendard Variable", selected: "bg #fff8f5, label #fc6b2d, 1px border #fc6b2d", states: "hover and pressed: no change (probe); focus not measured", use: "Two-up switcher inside a product block (국내 결제 / 해외 결제)" }
  components_harvested: true
---

# Design System Inspiration of PortOne

## 1. Visual Theme & Atmosphere

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

## Primary tasks

- Compare integrating many payment gateways through one PortOne connection against doing it one by one.
- Check pricing and what the free tier covers.
- Read how partner settlement and tax invoices are automated.
- Contact sales (도입문의) or start an account (시작하기).

## 2. Color Palette & Roles

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

## 3. Typography Rules

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

## 4. Component Stylings

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

## 5. Layout Principles

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

## 6. Depth & Elevation

The only shadow measured is the 1px inner highlight on the hero button (`inset 0 2px 0 rgba(255, 255, 255, 0.1)`). Surfaces are otherwise flat; tabs separate with 1px borders.

## 7. Do's and Don'ts

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

## 8. Responsive Behavior

### Breakpoints
Only the 1440px desktop viewport was captured.

### Touch Targets
- Header pills are 40px tall, the hero button about 50px, switcher tabs 55px.

### Collapsing Strategy
Not measured.

### Image Behavior
Product blocks pair copy with illustrated UI mock-ups; the customer-story cards use photography.

## 9. Agent Prompt Guide

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

## 10. Voice & Tone

PortOne's voice is clear, infrastructural and quietly ambitious. It turns a complicated domain (many payment gateways, settlement, tax invoices, reconciliation) into plain Korean. The hero "AI로 결제와 재무 운영을 자유롭게" and the block line "사업의 시작부터 확장까지, 단 하나의 결제 인프라" set the register: declarative and capability-first. The closing banner makes a point without pressure: "재무 관리는 '버티는 것'이 아니라 '앞서가는 것'이어야 합니다".

| Context | Tone |
|---|---|
| Hero | Capability promise ("AI로 결제와 재무 운영을 자유롭게") |
| Eyebrows | Product names (원 페이먼트 인프라, 파트너 정산 자동화, 글로벌 커머스 솔루션) |
| Calls to action | Short and low-pressure (도입문의, 시작하기, 살펴보기) |
| Proof | Numbers and customer quotes (48조, 85% 결제대행사 연동 비용 절감, 위버스, 아더에러) |
| Culture | Values stated as behaviours (the RECIPE page) |

**Forbidden register:** sales urgency, unexplained jargon, exclamation-heavy hype, fear-based framing.

## 11. Brand Narrative

PortOne began as a developer-first way to put many Korean payment gateways behind one integration. The home page still leads with that ("모든 PG 결제, 정산을 단 한번의 연동으로 완성합니다", about 25 domestic PGs), and its developer guide keeps 결제모듈 V1 and V2 side by side. The current site shows the next step. The company presents itself as AI finance infrastructure that runs from payment through tax and settlement, with products for partner settlement, payouts, tax invoices, month-end close and a global site for cross-border settlement.

The team page sets out the culture as six values under the name RECIPE: Respect (존중), Execution (실행), Customer (고객), Integrity (솔직함), PortOne (One Team) and Excellence (탁월한 태도와 방식). Several of them name AI directly: automating customers' manual work with AI, and looking for better methods "AI를 포함한 새로운 접근으로". The company publishes a corporate blog (blog.portone.io) with news, customer stories and tips, and a Naver blog for Korean readers.

The design follows that stance: calm white pages, charcoal actions, and one orange used to show where you are rather than to shout.

*The June record also described an earlier brand name, a 2023 rebrand date and 2022 volume figures. They were not re-opened on a first-party page in this wave and are left out until they are.*

## 12. Principles

1. **One integration, one infrastructure.** *UI implication:* one action style (the charcoal gradient) and one accent (orange) across the site.
2. **Show where the user is.** *UI implication:* orange marks the selected option and the current section, not the button.
3. **Capability over hype.** *UI implication:* declarative headlines, short calls to action, numbers as proof.
4. **Flat and instant.** *UI implication:* no shadows beyond a hairline highlight; state changes without animation.

## 13. Personas

*Personas below are fictional archetypes informed by the audiences the site addresses (Korean commerce developers, finance and operations teams, cross-border merchants), not individual people.*

**이준호, 30, 서울.** Backend developer at a fast-growing D2C commerce startup. Wants several Korean PGs live without wiring each one by hand. Judges a payments vendor by how fast its docs get checkout working.

**박지은, 38, 경기.** Finance operations lead at a mid-market retailer selling in several countries. Lives in settlement and reconciliation. Values partner-settlement automation and a single month-end close.

**Sanjay Mehta, 34, Singapore.** Product manager at a cross-border marketplace expanding into Korea. Needs local payment methods behind one integration and English documentation.

## 14. States

| State | What was measured |
|---|---|
| **Hover / pressed, charcoal buttons** | Gradient `#363a44` → `#030712` becomes `#3f434d` → `#6b7280`; instant |
| **Hover / pressed, 로그인** | `#ffffff` → `#eeeeee`; instant |
| **Selected, product tab** | `#fff8f5` fill, `#fc6b2d` label and 1px border |
| **Hover / pressed, product tabs** | No change |
| **Focus** | Not measured; do not infer a focus style from this reference |

Empty, loading, error and success states were not observed on the public pages and are not specified here.

## 15. Motion & Easing

Every probed control (도입문의, 로그인, 시작하기 and both product tabs) computes `transition: all 0s`, so its state changes are instant. Nothing else about motion (Framer scroll effects, the logo marquee, counters) was measured. Treat it as unspecified and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/portone.json (capturedAt 2026-09-30T13:12:59Z), deterministic collector, 1440x900, logged out: www.portone.io, /team, /pricing. States, the gradient fills and the tab colours: fixed keyboard probe raw docs/research/2026-09-29-growth/raw/portone-states-home.json.
- §1, §10, §11 context: the home copy and footer, /team (RECIPE values), /pricing, blog.portone.io and blog.naver.com/portone_kr, opened 2026-09-30.
- §3 licence: the Pretendard LICENSE file on GitHub.
- The June body's orange-filled button, docs-site slate palette, status badges, cards, search input and motion table were not observed on the captured pages and were removed.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->
