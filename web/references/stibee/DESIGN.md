---
id: stibee
name: Stibee
display_name_kr: 스티비
country: KR
category: marketing
homepage: "https://stibee.com"
primary_color: "#ff6464"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=stibee.com&sz=128"
verified: "2026-09-30"
added: "2026-06-17"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: marketing, url: "https://stibee.com/", inspected: "2026-09-30" }
    - { id: surface-2, kind: marketing, url: "https://stibee.com/pricing", inspected: "2026-09-30" }
    - { id: surface-3, kind: marketing, url: "https://stibee.com/feature/email", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://stibee.com/", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://stibee.com/pricing", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://stibee.com/feature/email", captured: "2026-09-30" }
    - { id: stibee-probe-home, kind: product-surface, url: "https://stibee.com/", captured: "2026-09-30" }
    - { id: stibee-probe-pricing, kind: product-surface, url: "https://stibee.com/pricing", captured: "2026-09-30" }
    - { id: stibee-team, kind: official-doc, url: "https://team.stibee.com/", captured: "2026-09-30" }
    - { id: pretendard-license, kind: license, url: "https://raw.githubusercontent.com/orioncactus/pretendard/main/LICENSE", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &cta { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"6\"]", captured: "2026-09-30" }
    "tokens.colors.primary-hover": &ctastate { surface_id: home, source_id: stibee-probe-home, method: live-state-probe, selector: "a 무료로 시작하기 in the header (128.2 x 42, rest bg rgb(255, 100, 100), fg rgb(255, 255, 255)): hover and pressed bg -> rgb(255, 82, 82); focus (Tab #7) no change; transition all 0.3s ease", captured: "2026-09-30" }
    "tokens.colors.on-primary": *cta
    "tokens.colors.ink": &body { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::body", captured: "2026-09-30" }
    "tokens.colors.muted": &lead { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.colors.caption": &label { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h3", captured: "2026-09-30" }
    "tokens.colors.subtle": &navstate { surface_id: home, source_id: stibee-probe-home, method: live-state-probe, selector: "a 가격 (67.7 x 42, rest bg rgba(0, 0, 0, 0), fg rgb(32, 33, 36)): hover bg -> rgb(255, 255, 255), fg -> rgb(157, 158, 162); pressed bg -> rgb(255, 255, 255); focus (Tab #3) bg -> rgb(255, 255, 255); transition all 0.3s ease", captured: "2026-09-30" }
    "tokens.colors.border": &select { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"7\"]", captured: "2026-09-30" }
    "tokens.colors.border-focus": &selectstate { surface_id: surface-2, source_id: stibee-probe-pricing, method: live-state-probe, selector: "select subscriber tier (180 x 48, rest bg rgb(255, 255, 255), border 1px solid rgb(188, 189, 193)): hover no change; pressed unmeasured (:active did not match); focus (Tab #8) border -> 1px solid rgb(65, 66, 69); transition all 0s; ancestor up3 bg rgb(246, 246, 246)", captured: "2026-09-30" }
    "tokens.colors.surface": *selectstate
    "tokens.colors.hairline": &sales { surface_id: surface-2, source_id: stibee-probe-pricing, method: live-state-probe, selector: "button 영업팀에 문의하기 (232 x 52, rest bg rgba(0, 0, 0, 0) over rgb(255, 255, 255), fg rgb(255, 100, 100), border 1px solid rgb(255, 100, 100), radius 4px, padding 12px 20px, 16px/400 Pretendard Variable): hover, pressed and focus (Tab #15) no change; transition all 0s; ancestor up1 border 1px solid rgb(235, 235, 235)", captured: "2026-09-30" }
    "tokens.colors.white": &menu { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-09-30" }
    "tokens.typography.family.sans": *body
    "tokens.typography.display-hero.size": &h1 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h1", captured: "2026-09-30" }
    "tokens.typography.display-hero.weight": *h1
    "tokens.typography.display-hero.lineHeight": *h1
    "tokens.typography.display-hero.tracking": *h1
    "tokens.typography.display-hero.use": *h1
    "tokens.typography.page-title.size": &ph1 { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h1", captured: "2026-09-30" }
    "tokens.typography.page-title.weight": *ph1
    "tokens.typography.page-title.lineHeight": *ph1
    "tokens.typography.page-title.use": *ph1
    "tokens.typography.feature-title.size": &fh2 { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h2", captured: "2026-09-30" }
    "tokens.typography.feature-title.weight": *fh2
    "tokens.typography.feature-title.lineHeight": *fh2
    "tokens.typography.feature-title.tracking": *fh2
    "tokens.typography.feature-title.use": *fh2
    "tokens.typography.plan-price.size": &price { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h4", captured: "2026-09-30" }
    "tokens.typography.plan-price.weight": *price
    "tokens.typography.plan-price.lineHeight": *price
    "tokens.typography.plan-price.use": *price
    "tokens.typography.lead.size": *lead
    "tokens.typography.lead.weight": *lead
    "tokens.typography.lead.lineHeight": *lead
    "tokens.typography.lead.use": *lead
    "tokens.typography.nav.size": &nav { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"2\"]", captured: "2026-09-30" }
    "tokens.typography.nav.weight": *nav
    "tokens.typography.nav.lineHeight": *nav
    "tokens.typography.nav.use": *nav
    "tokens.typography.link.size": &link { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"7\"]", captured: "2026-09-30" }
    "tokens.typography.link.weight": *link
    "tokens.typography.link.lineHeight": *link
    "tokens.typography.link.use": *link
    "tokens.typography.body.size": *body
    "tokens.typography.body.weight": *body
    "tokens.typography.body.lineHeight": *body
    "tokens.typography.body.use": *body
    "tokens.typography.button.size": *cta
    "tokens.typography.button.weight": *cta
    "tokens.typography.button.use": *cta
    "tokens.typography.label.size": *label
    "tokens.typography.label.weight": *label
    "tokens.typography.label.lineHeight": *label
    "tokens.typography.label.use": *label
    "tokens.spacing.cta-x": *cta
    "tokens.spacing.cta-lg-x": &hero { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"7\"]", captured: "2026-09-30" }
    "tokens.spacing.outline-y": *sales
    "tokens.spacing.outline-x": *sales
    "tokens.spacing.field-y": *select
    "tokens.spacing.field-x": *select
    "tokens.spacing.field-trail": *select
    "tokens.rounded.none": *h1
    "tokens.rounded.control": *cta
    "tokens.components.button-primary.type": *cta
    "tokens.components.button-primary.bg": *cta
    "tokens.components.button-primary.fg": *cta
    "tokens.components.button-primary.radius": *cta
    "tokens.components.button-primary.padding": *cta
    "tokens.components.button-primary.height": *cta
    "tokens.components.button-primary.font": *cta
    "tokens.components.button-primary.hover": *ctastate
    "tokens.components.button-primary.pressed": *ctastate
    "tokens.components.button-primary.states": *ctastate
    "tokens.components.button-primary.use": *cta
    "tokens.components.button-primary-lg.type": *hero
    "tokens.components.button-primary-lg.bg": *hero
    "tokens.components.button-primary-lg.fg": *hero
    "tokens.components.button-primary-lg.radius": *hero
    "tokens.components.button-primary-lg.padding": *hero
    "tokens.components.button-primary-lg.height": *hero
    "tokens.components.button-primary-lg.font": *hero
    "tokens.components.button-primary-lg.hover": &herostate { surface_id: home, source_id: stibee-probe-home, method: live-state-probe, selector: "a 무료로 시작하기 in the hero (152.8 x 52, rest bg rgb(255, 100, 100)): hover and pressed bg -> rgb(255, 82, 82); focus (Tab #8) no change; transition all 0.6s ease", captured: "2026-09-30" }
    "tokens.components.button-primary-lg.pressed": *herostate
    "tokens.components.button-primary-lg.states": *herostate
    "tokens.components.button-primary-lg.use": *hero
    "tokens.components.button-plan.type": &plan { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"8\"]", captured: "2026-09-30" }
    "tokens.components.button-plan.bg": *plan
    "tokens.components.button-plan.fg": *plan
    "tokens.components.button-plan.radius": *plan
    "tokens.components.button-plan.padding": *plan
    "tokens.components.button-plan.height": *plan
    "tokens.components.button-plan.font": *plan
    "tokens.components.button-plan.hover": &planstate { surface_id: surface-2, source_id: stibee-probe-pricing, method: live-state-probe, selector: "a 무료로 시작하기 on a plan card (228 x 38, rest bg rgb(255, 100, 100)): hover and pressed bg -> rgb(255, 82, 82); focus (Tab #11) no change; transition all 0.6s ease", captured: "2026-09-30" }
    "tokens.components.button-plan.pressed": *planstate
    "tokens.components.button-plan.states": *planstate
    "tokens.components.button-plan.use": *plan
    "tokens.components.button-outline.type": *sales
    "tokens.components.button-outline.bg": *sales
    "tokens.components.button-outline.fg": *sales
    "tokens.components.button-outline.border": *sales
    "tokens.components.button-outline.radius": *sales
    "tokens.components.button-outline.padding": *sales
    "tokens.components.button-outline.height": *sales
    "tokens.components.button-outline.font": *sales
    "tokens.components.button-outline.states": *sales
    "tokens.components.button-outline.use": *sales
    "tokens.components.text-link.type": *link
    "tokens.components.text-link.fg": *link
    "tokens.components.text-link.radius": *link
    "tokens.components.text-link.height": *link
    "tokens.components.text-link.font": *link
    "tokens.components.text-link.states": *link
    "tokens.components.text-link.use": *link
    "tokens.components.nav-link.type": *nav
    "tokens.components.nav-link.fg": *nav
    "tokens.components.nav-link.radius": *nav
    "tokens.components.nav-link.padding": *nav
    "tokens.components.nav-link.height": *nav
    "tokens.components.nav-link.font": *nav
    "tokens.components.nav-link.hover": *navstate
    "tokens.components.nav-link.pressed": *navstate
    "tokens.components.nav-link.focus": *navstate
    "tokens.components.nav-link.states": *navstate
    "tokens.components.nav-link.use": *nav
    "tokens.components.nav-menu.type": *menu
    "tokens.components.nav-menu.bg": *menu
    "tokens.components.nav-menu.fg": *menu
    "tokens.components.nav-menu.radius": *menu
    "tokens.components.nav-menu.padding": *menu
    "tokens.components.nav-menu.height": *menu
    "tokens.components.nav-menu.font": *menu
    "tokens.components.nav-menu.hover": &menustate { surface_id: home, source_id: stibee-probe-home, method: live-state-probe, selector: "button 기능 (67.7 x 42, rest bg rgb(255, 255, 255), fg rgb(32, 33, 36)): hover and pressed fg -> rgb(157, 158, 162) on the button and its label span; focus (Tab #2) no change; transition all 0.3s ease", captured: "2026-09-30" }
    "tokens.components.nav-menu.pressed": *menustate
    "tokens.components.nav-menu.states": *menustate
    "tokens.components.nav-menu.use": *menu
    "tokens.components.tier-select.type": *select
    "tokens.components.tier-select.bg": *select
    "tokens.components.tier-select.fg": *select
    "tokens.components.tier-select.border": *select
    "tokens.components.tier-select.radius": *select
    "tokens.components.tier-select.padding": *select
    "tokens.components.tier-select.height": *select
    "tokens.components.tier-select.font": *select
    "tokens.components.tier-select.focus": *selectstate
    "tokens.components.tier-select.states": *selectstate
    "tokens.components.tier-select.use": *select
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#ff6464"
    primary-hover: "#ff5252"
    on-primary: "#ffffff"
    ink: "#202124"
    muted: "#606165"
    caption: "#747579"
    subtle: "#9d9ea2"
    border: "#bcbdc1"
    border-focus: "#414245"
    surface: "#f6f6f6"
    hairline: "#ebebeb"
    white: "#ffffff"
  typography:
    family: { sans: "Pretendard Variable" }
    display-hero: { size: 44, weight: 600, lineHeight: 1.4, tracking: -0.4, use: "Home hero headline (고객이 좋아하는 이메일 스티비로 보내세요), 61.6px line, in #202124" }
    page-title: { size: 42, weight: 600, lineHeight: 1.4, use: "Page headlines on /pricing (성장 단계에 따라 요금제를 선택하세요) and /feature/email, 58.8px line, in #202124" }
    feature-title: { size: 32, weight: 600, lineHeight: 1.5, tracking: -0.2, use: "Feature headings on /feature/email, 48px line, in #202124" }
    plan-price: { size: 28, weight: 600, lineHeight: 1.5, use: "Plan prices on the /pricing cards, 42px line" }
    lead: { size: 16, weight: 400, lineHeight: 1.6, use: "Hero sub-copy on home and the page description on /feature/email, set as h2, 25.6px line, in #606165" }
    nav: { size: 16, weight: 400, lineHeight: 2.63, use: "Header navigation labels (기능, 가격, 자료, 도움말, 로그인), 42px line that fills the 42px item" }
    link: { size: 16, weight: 400, lineHeight: 1.88, use: "Coral text link on /feature/email, 30px line" }
    body: { size: 14, weight: 400, lineHeight: 1.5, use: "Document default text, 21px line, in #202124" }
    button: { size: 14, weight: 400, use: "Header and plan-card 무료로 시작하기 labels; the line height equals the button height (42px header, 36px plan card)" }
    label: { size: 12, weight: 400, lineHeight: 1.6, use: "Small feature labels above the /feature/email headings, 19.2px line, in #747579" }
  spacing: { cta-x: 20, cta-lg-x: 26, outline-y: 12, outline-x: 20, field-y: 11, field-x: 12, field-trail: 34 }
  rounded: { none: 0, control: 4 }
  components:
    button-primary: { type: button, bg: "#ff6464", fg: "#ffffff", radius: "4px", padding: "0px 20px", height: "42px", font: "14px / 400 / 42px Pretendard Variable", hover: "bg #ff5252", pressed: "bg #ff5252", states: "hover and pressed settle on #ff5252 after an all 0.3s ease transition; focus (Tab #7) shows no change", use: "무료로 시작하기 in the header of all three captured pages at home::[data-omd-capture=\"6\"], 128 x 42" }
    button-primary-lg: { type: button, bg: "#ff6464", fg: "#ffffff", radius: "4px", padding: "0px 26px", height: "52px", font: "16px / 400 / 50px Pretendard Variable", hover: "bg #ff5252", pressed: "bg #ff5252", states: "hover and pressed settle on #ff5252 after an all 0.6s ease transition; focus (Tab #8) shows no change", use: "Hero 무료로 시작하기 on home at home::[data-omd-capture=\"7\"], 153 x 52" }
    button-plan: { type: button, bg: "#ff6464", fg: "#ffffff", radius: "4px", padding: "0px 20px", height: "38px", font: "14px / 400 / 36px Pretendard Variable", hover: "bg #ff5252", pressed: "bg #ff5252", states: "hover and pressed settle on #ff5252 after an all 0.6s ease transition; focus (Tab #11) shows no change", use: "무료로 시작하기 on each of the four plan cards on /pricing at surface-2::[data-omd-capture=\"8\"], 228 x 38" }
    button-outline: { type: button, bg: "transparent", fg: "#ff6464", border: "1px solid #ff6464", radius: "4px", padding: "12px 20px", height: "52px", font: "16px / 400 Pretendard Variable", states: "hover, pressed and focus (Tab #15) show no change; it computes transition all 0s", use: "영업팀에 문의하기 in the enterprise box on /pricing (232 x 52), a box outlined in #ebebeb; read by the fixed probe, below the collector's first viewport" }
    text-link: { type: button, fg: "#ff6464", radius: "4px", height: "38px", font: "16px / 400 / 30px Pretendard Variable", states: "the bundle's hover and pressed frames record the same values as rest; no probe reading", use: "Coral text link on /feature/email at surface-3::[data-omd-capture=\"7\"], 119 x 38, with a transparent background" }
    nav-link: { type: tab, fg: "#202124", radius: "4px", padding: "0px 20px", height: "42px", font: "16px / 400 / 42px Pretendard Variable", hover: "fg #9d9ea2, bg #ffffff", pressed: "bg #ffffff", focus: "bg #ffffff", states: "all 0.3s ease transition; the label greys to #9d9ea2 only on hover", use: "Header links (가격, 도움말, 로그인) on all three pages at home::[data-omd-capture=\"2\"], 68 x 42 for 가격" }
    nav-menu: { type: button, bg: "#ffffff", fg: "#202124", radius: "4px", padding: "0px 20px", height: "42px", font: "16px / 400 / 42px Pretendard Variable", hover: "fg #9d9ea2", pressed: "fg #9d9ea2", states: "all 0.3s ease transition; focus (Tab #2) shows no change", use: "Dropdown triggers in the header (기능, 자료) at home::[data-omd-capture=\"1\"], 68 x 42" }
    tier-select: { type: input, bg: "#ffffff", fg: "#202124", border: "1px solid #bcbdc1", radius: "4px", padding: "11px 34px 11px 12px", height: "48px", font: "14px / 400 Pretendard Variable", focus: "border 1px solid #414245", states: "hover shows no change; pressed was not measured (:active did not match); focus (Tab #8) switches the border to #414245 with no transition", use: "Subscriber-count selector on /pricing (~500명, ~1,000명, ~2,500명 …) at surface-2::[data-omd-capture=\"7\"], 180 x 48, on a #f6f6f6 band" }
  components_harvested: true
---

# Design System Inspiration of Stibee

## 1. Visual Theme & Atmosphere

Stibee (스티비) is a Korean email-newsletter and email-marketing service: its team page describes it as a place to make and send newsletters and marketing emails and check how they performed, so that anyone can build and keep a relationship with their customers, fans and subscribers directly. The service launched in November 2016, the company incorporated in May 2019 and took a seed round in May 2020, and the team says it has grown without further investment, profitable for seven straight years since incorporation. By its own figures about 5,700 users send at least one email a month and 290 million emails go out through Stibee monthly; the home page adds that it handles more than ten million sends a day and holds ISO 27001, 27017 and 27018 certification. The team names Kurly, Woowa Brothers, NEWNEEK, LongBlack, Magazine B and the major Korean newspapers and broadcasters among its senders. Its mission line is "좋은 뉴스레터를 더 많은 사람에게", pursued, in its own words, "간결하고 세심하고 친절한 방식으로" — concisely, attentively and kindly.

The marketing site reads the same way. It sets everything in one typeface, Pretendard Variable, on white, with near-black `#202124` text and a single warm coral, `#ff6464`. The coral fills every 무료로 시작하기 button — in the header of each page, in the home hero and on the four plan cards on /pricing — and outlines the one secondary action, 영업팀에 문의하기. Headlines are SemiBold (600) at 44px on the home hero and 42px on page titles, with the sub-copy in a soft `#606165`. Every control shares one 4px radius, and none of the 99 captured records carries a box-shadow. Hover darkens the coral to `#ff5252`; navigation labels fade to a light `#9d9ea2`.

**Key Characteristics:**
- One coral, `#ff6464`, for every primary action and the outlined secondary action; hover `#ff5252`
- Pretendard Variable for all text, hierarchy by size and weight (600 headlines, 400 everything else)
- Near-black `#202124` ink, `#606165` sub-copy, `#747579` small labels, `#9d9ea2` icons and hovered navigation
- A single 4px radius on buttons, links and fields
- No shadows; the enterprise box is outlined in `#ebebeb` and the pricing calculator sits on `#f6f6f6`
- Short, friendly Korean copy with plain calls to action

## Primary tasks

- Start a free account from any page (무료로 시작하기)
- Compare plans and estimate the price by subscriber count on /pricing
- Read what the email editor, subscriber management and statistics features do
- Contact sales for an enterprise plan

## 2. Color Palette & Roles

Every token below was read on 2026-09-30 from stibee.com, /pricing and /feature/email by the deterministic collector at 1440 × 900 and by the fixed keyboard probe. They describe Stibee's public marketing site; the email editor and dashboard behind login were not opened, and none of their values is claimed. The collector recorded the first viewport of each page, because the pages scroll inside a container; the probe reached controls further down.

### Primary
- **Stibee Coral** (`#ff6464`): The fill of 무료로 시작하기, the primary action in the header of all three captured pages (128 × 42, `home::[data-omd-capture="6"]`), the home hero (153 × 52) and the four plan cards on /pricing (228 × 38) — 13 fills across three surfaces. It is also the label and 1px outline of 영업팀에 문의하기 and the colour of the text link on /feature/email. It is the primary because it is the colour of the product's primary action on every page, and no other hue is rendered in any action, selection or accent.
- **Coral Hover** (`#ff5252`): The settled hover and pressed fill of all three coral buttons, read by the probe after their 0.3s and 0.6s transitions.
- **On Primary** (`#ffffff`): Labels on the coral buttons.

### Neutral & Surface
- **White** (`#ffffff`): The header dropdown triggers and the plan selector. The body element computes a transparent background, so the page white is the browser canvas.
- **Surface** (`#f6f6f6`): The band behind the /pricing subscriber selector (the probe's third ancestor level).
- **Hairline** (`#ebebeb`): The 1px outline of the enterprise box that holds 영업팀에 문의하기 on /pricing (the probe's first ancestor level).
- **Border** (`#bcbdc1`): The 1px border of the subscriber selector at rest.
- **Border Focus** (`#414245`): The selector's border once it has keyboard focus.

### Text
- **Ink** (`#202124`): The document default text, headlines and navigation labels.
- **Muted** (`#606165`): The home hero sub-copy and the page description on /feature/email.
- **Caption** (`#747579`): Small labels above the feature headings on /feature/email.
- **Subtle** (`#9d9ea2`): The hovered navigation labels (read by the probe), and the computed colour of the plan-card check icons on /pricing.

### Removed from the palette
- `#fff8f8` (a "coral tint" subscribe band in the Partial body): the June record read it as the background of the newsletter-subscribe band lower on home. The 2026-09-30 collector recorded only the first viewport and the probe did not read that band, so the value was not re-measured and is not a token. In today's bundle `#fff8f8` and `#fffcfc` occur only as border colours of mid-transition focus frames.
- `#d9d9d9` was not observed. The June record's `#f6f6f6` subscribe inputs and 10px plan cards were below the first viewport and were not re-measured.

## 3. Typography Rules

### Font Family
- **Live surface use**: `Pretendard Variable` (99 observed uses, `loaded / high`) on every text role — headings, navigation, buttons, list items, fields. It is served from jsDelivr as `cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/web/variable/woff2/PretendardVariable.woff2`.
- **Official distributed font assets**: Pretendard is an open-source Korean typeface by Kil Hyung-jin (orioncactus); its LICENSE states the SIL Open Font License 1.1, with Reserved Font Name "Pretendard" (opened 2026-09-30). Stibee loads the distributed file directly; the identification rests on the declared family name and the served file.
- **Official product use**: no Stibee page opened this session names its typeface, so no statement of official product use is made.
- **Declared only (no visible use)**: icon fonts `Font Awesome 5 Brands`, `Font Awesome 5 Duotone`, `Font Awesome 5 Pro`, `Font Awesome 6 Brands`, `Font Awesome 6 Duotone`, `Font Awesome 6 Pro`, `FontAwesome` (self-hosted under `stibee.com/webfonts/`), `stibeeicon` and `stibeeicon10`; text faces `Inter`, `Lato` and `Roboto Mono` from Google Fonts. All have 0 observed uses on the captured pages.
- **Unresolved**: none of the observed families is unidentified.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Observed on |
|------|------|------|--------|-------------|----------|-------------|
| Display Hero | Pretendard Variable | 44px | 600 | 61.6px (1.4) | -0.4px | Home hero headline |
| Page Title | Pretendard Variable | 42px | 600 | 58.8px (1.4) | normal | /pricing and /feature/email headlines |
| Feature Title | Pretendard Variable | 32px | 600 | 48px (1.5) | -0.2px | /feature/email headings |
| Plan Price | Pretendard Variable | 28px | 600 | 42px (1.5) | normal | Plan cards on /pricing |
| Lead | Pretendard Variable | 16px | 400 | 25.6px (1.6) | normal | Hero sub-copy, `#606165` |
| Nav | Pretendard Variable | 16px | 400 | 42px | normal | Header navigation |
| Link | Pretendard Variable | 16px | 400 | 30px | normal | Coral text link |
| Body | Pretendard Variable | 14px | 400 | 21px (1.5) | normal | Document default |
| Button | Pretendard Variable | 14px | 400 | equals height | normal | Header and plan-card buttons |
| Label | Pretendard Variable | 12px | 400 | 19.2px (1.6) | normal | Feature labels, `#747579` |

### Principles
- **One typeface, two weights**: SemiBold 600 for every headline from 28px to 44px, Regular 400 for everything else, including buttons.
- **Tracking only at the top**: the hero tightens to -0.4px and the feature headings to -0.2px; all other text runs at normal tracking.
- **Buttons centre their label with line height**: header buttons set a 42px line in a 42px box, the hero button a 50px line in 52px.

## 4. Component Stylings

### Buttons

**Primary (header)**
- Background: `#ff6464`
- Text: `#ffffff`
- Radius: 4px
- Padding: 0px 20px
- Height: 42px
- Font: 14px / 400 / 42px Pretendard Variable
- Hover: background `#ff5252`
- Pressed: background `#ff5252`
- States: all 0.3s ease transition; focus shows no change
- Use: 무료로 시작하기 in the header of every page

**Primary (large)**
- Background: `#ff6464`
- Text: `#ffffff`
- Radius: 4px
- Padding: 0px 26px
- Height: 52px
- Font: 16px / 400 / 50px Pretendard Variable
- Hover: background `#ff5252`
- Pressed: background `#ff5252`
- States: all 0.6s ease transition; focus shows no change
- Use: the hero 무료로 시작하기 on home

**Primary (plan card)**
- Background: `#ff6464`
- Text: `#ffffff`
- Radius: 4px
- Padding: 0px 20px
- Height: 38px
- Font: 14px / 400 / 36px Pretendard Variable
- Hover: background `#ff5252`
- Pressed: background `#ff5252`
- States: all 0.6s ease transition; focus shows no change
- Use: 무료로 시작하기 on the four plan cards on /pricing

**Outlined secondary**
- Background: transparent
- Text: `#ff6464`
- Border: 1px solid `#ff6464`
- Radius: 4px
- Padding: 12px 20px
- Height: 52px
- Font: 16px / 400 Pretendard Variable
- States: hover, pressed and focus show no change
- Use: 영업팀에 문의하기 in the `#ebebeb`-outlined enterprise box on /pricing

**Text link**
- Text: `#ff6464`
- Radius: 4px
- Height: 38px
- Font: 16px / 400 / 30px Pretendard Variable
- States: bundle hover and pressed frames match rest; no probe reading
- Use: the coral link on /feature/email (119 × 38)

### Navigation

**Header link**
- Text: `#202124`
- Radius: 4px
- Padding: 0px 20px
- Height: 42px
- Font: 16px / 400 / 42px Pretendard Variable
- Hover: text `#9d9ea2`, background `#ffffff`
- Pressed: background `#ffffff`
- Focus: background `#ffffff`
- Use: 가격, 도움말 and 로그인 in the header

**Header dropdown trigger**
- Background: `#ffffff`
- Text: `#202124`
- Radius: 4px
- Padding: 0px 20px
- Height: 42px
- Font: 16px / 400 / 42px Pretendard Variable
- Hover: text `#9d9ea2`
- Pressed: text `#9d9ea2`
- States: focus shows no change
- Use: 기능 and 자료 in the header

### Inputs

**Subscriber-count selector**
- Background: `#ffffff`
- Text: `#202124`
- Border: 1px solid `#bcbdc1`
- Radius: 4px
- Padding: 11px 34px 11px 12px
- Height: 48px
- Font: 14px / 400 Pretendard Variable
- Focus: border 1px solid `#414245`
- States: hover shows no change; pressed was not measurable
- Use: the price estimator on /pricing, on a `#f6f6f6` band

---

**Verified:** 2026-09-30 (deterministic collector on 3 surfaces + fixed keyboard probe on 2 pages)
**Tier 1 sources:** https://stibee.com/ | https://stibee.com/pricing | https://stibee.com/feature/email | https://team.stibee.com/
**Tier 2 sources:** not attempted this session
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Values come from the captured controls, not from a published scale: buttons and navigation pad 20px horizontally (26px on the large hero button), the outlined button 12px × 20px, and the selector 11px × 12px with 34px on the trailing side for its arrow.
- Spacing census (99 records): 20px dominates (36 uses), followed by 11px, 30px, 8px, 12px and 34px.

### Grid & Container
- A fixed header with the logo, five navigation items and the coral 무료로 시작하기.
- Home opens on a hero (headline, `#606165` sub-copy, large coral button); /pricing opens on its page title above the subscriber selector and four plan cards; /feature/email opens on a title and description.
- The captured headings on /pricing and /feature/email are 1132px wide.

### Whitespace Philosophy
- **Outline and fill instead of elevation**: the enterprise box is a `#ebebeb` outline, the estimator a `#f6f6f6` band.
- **One accent in a quiet field**: black-grey text on white leaves the coral as the only colour on the page.

### Border Radius Scale
- None (0px): headings, list items and containers — 50 of the measured radii
- Control (4px): every button, link and field — 49 of the measured radii

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Every captured element — 0 of 99 records carries a box-shadow |
| Band | `#f6f6f6` fill | The /pricing estimator |
| Outline | 1px `#ebebeb` | The enterprise box |

**Shadow Philosophy**: Stibee's public site uses no shadows. Grouping comes from fills and thin outlines.

## 7. Do's and Don'ts

### Do
- Use `#ff6464` for every primary action and for the outlined secondary action; darken to `#ff5252` on hover
- Set everything in Pretendard Variable: 600 for headlines, 400 for the rest
- Keep one 4px radius on buttons, links and fields
- Use `#202124` for text and `#606165` for sub-copy
- Group with a `#ebebeb` outline or a `#f6f6f6` band instead of shadows

### Don't
- Add a second accent colour; the site renders only the coral
- Use heavy weights (700+) for headlines; the site stops at 600
- Round controls into pills; the site's only control radius is 4px
- Add drop shadows
- Substitute a system face for Pretendard and present it as the brand type

## 8. Responsive Behavior

Only the 1440 × 900 desktop layout was captured, so no breakpoint, collapsing rule or touch-target size is claimed. At that width the header items and buttons are 42px tall, the hero button 52px and the plan-card buttons 38px.

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action: Stibee Coral (`#ff6464`), hover `#ff5252`
- Text: `#202124`
- Sub-copy: `#606165`
- Small labels: `#747579`
- Icons and hovered navigation: `#9d9ea2`
- Field border: `#bcbdc1`, focused `#414245`
- Estimator band: `#f6f6f6`; box outline: `#ebebeb`
- Canvas: `#ffffff`

### Example Component Prompts
- "Create a hero: headline in Pretendard Variable 44px weight 600, line-height 61.6px, letter-spacing -0.4px, `#202124`; sub-copy 16px weight 400, line-height 25.6px, `#606165`; a 52px button with `#ff6464` fill, white 16px label, 4px radius, 0 26px padding, hover `#ff5252` over 0.6s."
- "Create a header: Pretendard Variable 16px weight 400 labels in `#202124`, each a 42px-tall item with 20px side padding and 4px radius; labels fade to `#9d9ea2` on hover; a 42px `#ff6464` 무료로 시작하기 button at the right, 14px label, hover `#ff5252`."
- "Create an enterprise box: 1px `#ebebeb` outline, and an outlined button inside: transparent fill, `#ff6464` 16px label, 1px solid `#ff6464` border, 4px radius, 12px 20px padding, 52px tall."

### Iteration Guide
1. Coral `#ff6464` is the only accent; hover `#ff5252`
2. Pretendard Variable everywhere; 600 headlines, 400 text
3. One radius: 4px
4. No shadows; `#ebebeb` outlines and `#f6f6f6` bands
5. Text `#202124`, sub-copy `#606165`, labels `#747579`

---

## 10. Voice & Tone

Stibee's copy is warm, plain and practical. Headlines state what the reader can do; descriptions explain it without jargon; calls to action are low-pressure verbs. The team page names the manner it aims for: "간결하고 세심하고 친절한 방식으로".

| Context | Tone |
|---|---|
| Hero | Reader-centred: "고객이 좋아하는 이메일 스티비로 보내세요" — emails customers like, not more sends |
| Feature titles | Plain verb phrases: "드래그 한 번으로 이메일 만들기", "고객을 이해하고 최적의 메시지 보내기", "데이터 기반으로 성과 개선하기" |
| Feature copy | Reassuring: "복잡한 코드는 잊고 콘텐츠에만 집중하세요." |
| Pricing | Staged and unhurried: "성장 단계에 따라 요금제를 선택하세요", "아직 망설여지시나요?" |
| Calls to action | "무료로 시작하기", "자세히 알아보기", "영업팀에 문의하기", "엔터프라이즈 도입 문의하기" |
| Trust | Concrete: "고객 데이터를 안전하게 보호합니다" with the named ISO certifications |

**Voice samples (verbatim from stibee.com, 2026-09-30):**
- "고객이 좋아하는 이메일 스티비로 보내세요" — home hero headline
- "복잡한 코드는 잊고 콘텐츠에만 집중하세요." — home feature copy
- "성장 단계에 따라 요금제를 선택하세요" — /pricing headline

**Forbidden register**: growth-hacking hype, spam-style urgency, unexplained jargon, exclamation-heavy selling.

## 11. Brand Narrative

Stibee's team page tells the company story in numbers. The service launched in November 2016 and has made revenue ever since; the company incorporated in May 2019, raised a seed round in May 2020, and has grown without further investment, profitable for seven consecutive years. About 5,700 users send at least one email a month, and Stibee sends 290 million emails a month. The team connects this to the return of the email newsletter as a marketing channel and names senders from Kurly and Woowa Brothers to NEWNEEK, LongBlack, Magazine B and Korea's major newspapers and broadcasters.

Its purpose is "좋은 뉴스레터를 더 많은 사람에게": why — so that anyone can build a relationship with their own subscribers; how — concisely, attentively and kindly; what — tools to create and publish content. The team says it sees itself as more than a newsletter service: a content tool and, more broadly, a communication tool for marketers, creators and brands. It also says the team's own character should become the product: "팀의 모습이 곧 제품이 되고, 고객에게 이야기하는 것이 곧 팀의 모습이 될 수 있도록".

The home page adds the operating side: more than ten million sends a day, ISO 27001, 27017 and 27018 certification, encryption beyond legal requirements, and account-security features such as unusual-login detection and IP-based access limits. The website expresses that combination in one coral, one typeface, no shadows and plain copy.

## 12. Principles

1. **좋은 뉴스레터를 더 많은 사람에게.** Stibee's stated purpose. *UI implication:* lead with what the reader gains; keep the path to the first send short and visible (무료로 시작하기 on every page).
2. **간결하고 세심하고 친절한 방식으로.** The manner the team names. *UI implication:* short headlines, plain descriptions, low-pressure calls to action.
3. **The team is the product.** The team page says the team's character should become the product. *UI implication:* the site's voice and the product's voice stay the same.
4. **One action, one colour** (editorial reading of the capture). *UI implication:* keep `#ff6464` for actions only.
5. **Flat and quiet** (editorial reading). *UI implication:* no shadows; group with thin outlines and pale bands.

## 13. Personas

*Personas below are fictional archetypes informed by the senders Stibee's own pages address (online shops, platforms, media and content businesses, SaaS companies and non-profits), not individual people.*

**한지수, 32, 서울.** A marketer at a small online shop who sends a weekly newsletter to preview products. She values building an email by dragging blocks without a developer.

**김도현, 28, 경기.** An independent newsletter creator growing a paying audience. He segments subscribers and A/B-tests subject lines to learn what readers open.

**이서연, 41, 부산.** A communications lead at a non-profit who needs to reach donors reliably. She reads the security section and the ISO certifications before choosing a plan.

## 14. States

Only states read by the fixed probe are listed.

| Component | State | Treatment |
|---|---|---|
| Coral buttons (header, hero, plan card) | Hover, pressed | `#ff6464` → `#ff5252` |
| Coral buttons | Focus | No change |
| Outlined secondary | Hover, pressed, focus | No change |
| Header link | Hover | Label `#202124` → `#9d9ea2`, background `#ffffff` |
| Header link | Pressed, focus | Background `#ffffff` |
| Header dropdown trigger | Hover, pressed | Label `#202124` → `#9d9ea2` |
| Subscriber selector | Focus | Border `#bcbdc1` → `#414245` |
| Subscriber selector | Pressed | Not measurable (`:active` did not match) |

Empty, loading, error and success states were not observed on these public pages and are not described.

## 15. Motion & Easing

The fixed probe read these transitions on 2026-09-30; nothing else is claimed.

| Element | Transition |
|---|---|
| Header 무료로 시작하기, header link, dropdown trigger | `all 0.3s ease` |
| Hero and plan-card 무료로 시작하기 | `all 0.6s ease` |
| Outlined secondary, subscriber selector | `all 0s` (instant) |

No custom easing curve was observed. Reduced-motion behaviour was not tested.
