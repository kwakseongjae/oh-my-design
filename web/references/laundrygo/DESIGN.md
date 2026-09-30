---
id: laundrygo
name: LaundryGo
display_name_kr: 런드리고
country: KR
category: consumer-tech
homepage: "https://www.laundrygo.com"
primary_color: "#0ac290"
logo:
  type: favicon
  slug: "https://www.laundrygo.com/wp-content/uploads/2022/12/favicon_web.png"
verified: "2026-09-30"
added: "2026-06-11"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.laundrygo.com/", inspected: "2026-09-30" }
    - { id: surface-2, kind: marketing, url: "https://www.laundrygo.com/business/", inspected: "2026-09-30" }
    - { id: surface-3, kind: corporate, url: "https://www.laundrygo.com/culture/", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://www.laundrygo.com/", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://www.laundrygo.com/business/", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://www.laundrygo.com/culture/", captured: "2026-09-30" }
    - { id: laundrygo-probe-home, kind: product-surface, url: "https://www.laundrygo.com/", captured: "2026-09-30" }
    - { id: laundrygo-probe-business, kind: product-surface, url: "https://www.laundrygo.com/business/", captured: "2026-09-30" }
    - { id: laundrygo-font, kind: brand-asset, url: "https://www.laundrygo.com/font/", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &cta { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"20\"]", captured: "2026-09-30" }
    "tokens.colors.primary-hover": &ctastate { surface_id: home, source_id: laundrygo-probe-home, method: live-state-probe, selector: "a 채용공고 보러가기 (198.5 x 52, rest bg rgb(10, 194, 144), fg rgb(255, 255, 255), transition all 0.2s linear): hover and pressed bg -> rgb(19, 171, 130), read 900ms after; focus (Tab #16) fg -> rgb(58, 58, 58) and outline rgb(58, 58, 58) dotted 1px offset 1px", captured: "2026-09-30" }
    "tokens.colors.on-primary": *cta
    "tokens.colors.ink": &body { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::body", captured: "2026-09-30" }
    "tokens.colors.canvas": *body
    "tokens.colors.ink-soft": &news { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.colors.title": &recruittitle { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-09-30" }
    "tokens.colors.heading-alt": &culturetitle { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h4", captured: "2026-09-30" }
    "tokens.colors.muted": &web { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"7\"]", captured: "2026-09-30" }
    "tokens.colors.neutral-fill": *web
    "tokens.colors.footer": &footlink { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"22\"]", captured: "2026-09-30" }
    "tokens.colors.faint": &legal { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"28\"]", captured: "2026-09-30" }
    "tokens.colors.pagination-off": { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"15\"]", captured: "2026-09-30" }
    "tokens.colors.mint-tint": &quote { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::div", captured: "2026-09-30" }
    "tokens.typography.family.body": *body
    "tokens.typography.display-hero.size": &hero { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.typography.display-hero.weight": *hero
    "tokens.typography.display-hero.lineHeight": *hero
    "tokens.typography.display-hero.use": *hero
    "tokens.typography.business-hero.size": &bizhero { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h2", captured: "2026-09-30" }
    "tokens.typography.business-hero.weight": *bizhero
    "tokens.typography.business-hero.lineHeight": *bizhero
    "tokens.typography.business-hero.use": *bizhero
    "tokens.typography.section.size": &section { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-09-30" }
    "tokens.typography.section.weight": *section
    "tokens.typography.section.lineHeight": *section
    "tokens.typography.section.use": *section
    "tokens.typography.card-title.size": &bcardtitle { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h4", captured: "2026-09-30" }
    "tokens.typography.card-title.weight": *bcardtitle
    "tokens.typography.card-title.lineHeight": *bcardtitle
    "tokens.typography.card-title.use": *bcardtitle
    "tokens.typography.statement.size": &vision { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h4", captured: "2026-09-30" }
    "tokens.typography.statement.weight": *vision
    "tokens.typography.statement.lineHeight": *vision
    "tokens.typography.statement.use": *vision
    "tokens.typography.recruit-title.size": *recruittitle
    "tokens.typography.recruit-title.weight": *recruittitle
    "tokens.typography.recruit-title.lineHeight": *recruittitle
    "tokens.typography.recruit-title.use": *recruittitle
    "tokens.typography.card-description.size": &bcarddesc { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::p", captured: "2026-09-30" }
    "tokens.typography.card-description.weight": *bcarddesc
    "tokens.typography.card-description.lineHeight": *bcarddesc
    "tokens.typography.card-description.use": *bcarddesc
    "tokens.typography.feature.size": &feature { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-09-30" }
    "tokens.typography.feature.weight": *feature
    "tokens.typography.feature.lineHeight": *feature
    "tokens.typography.feature.use": *feature
    "tokens.typography.stat-label.size": &growth { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h4", captured: "2026-09-30" }
    "tokens.typography.stat-label.weight": *growth
    "tokens.typography.stat-label.lineHeight": *growth
    "tokens.typography.stat-label.use": *growth
    "tokens.typography.eyebrow.size": &eyebrow { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.typography.eyebrow.weight": *eyebrow
    "tokens.typography.eyebrow.lineHeight": *eyebrow
    "tokens.typography.eyebrow.use": *eyebrow
    "tokens.typography.nav.size": &nav { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-09-30" }
    "tokens.typography.nav.weight": *nav
    "tokens.typography.nav.lineHeight": *nav
    "tokens.typography.nav.use": *nav
    "tokens.typography.body.size": *body
    "tokens.typography.body.weight": *body
    "tokens.typography.body.lineHeight": *body
    "tokens.typography.body.use": *body
    "tokens.typography.footer.size": *footlink
    "tokens.typography.footer.weight": *footlink
    "tokens.typography.footer.lineHeight": *footlink
    "tokens.typography.footer.use": *footlink
    "tokens.typography.legal.size": *legal
    "tokens.typography.legal.weight": *legal
    "tokens.typography.legal.lineHeight": *legal
    "tokens.typography.legal.use": *legal
    "tokens.spacing.nav-gap": *nav
    "tokens.spacing.cta-x": *cta
    "tokens.spacing.neutral-y": *web
    "tokens.spacing.neutral-x": *web
    "tokens.spacing.card-y": &bcard { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::div", captured: "2026-09-30" }
    "tokens.spacing.card-x": *bcard
    "tokens.spacing.quote": *quote
    "tokens.rounded.toggle": &plus { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"7\"]", captured: "2026-09-30" }
    "tokens.rounded.button": *cta
    "tokens.rounded.quote-card": *quote
    "tokens.rounded.floating": &float { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"21\"]", captured: "2026-09-30" }
    "tokens.rounded.card": *bcard
    "tokens.components.recruit-button.type": *cta
    "tokens.components.recruit-button.bg": *cta
    "tokens.components.recruit-button.fg": *cta
    "tokens.components.recruit-button.radius": *cta
    "tokens.components.recruit-button.padding": *cta
    "tokens.components.recruit-button.height": *cta
    "tokens.components.recruit-button.font": *cta
    "tokens.components.recruit-button.hover": *ctastate
    "tokens.components.recruit-button.pressed": *ctastate
    "tokens.components.recruit-button.states": *ctastate
    "tokens.components.recruit-button.use": *cta
    "tokens.components.floating-cta.type": *float
    "tokens.components.floating-cta.bg": *float
    "tokens.components.floating-cta.fg": *float
    "tokens.components.floating-cta.radius": *float
    "tokens.components.floating-cta.height": *float
    "tokens.components.floating-cta.font": *float
    "tokens.components.floating-cta.shadow": *float
    "tokens.components.floating-cta.hover": &floatstate { surface_id: surface-2, source_id: laundrygo-probe-business, method: live-state-probe, selector: "a 상담 문의하기 (256 x 76, rest bg rgb(10, 194, 144), transition all 0.2s linear), read with --hide-overlays: hover and pressed bg -> rgb(19, 171, 130); focus UNMEASURED (not reached in 31 Tab presses); on home the fixed header covered B2B·대량세탁 문의 and hover, pressed and focus were UNMEASURED", captured: "2026-09-30" }
    "tokens.components.floating-cta.pressed": *floatstate
    "tokens.components.floating-cta.states": *floatstate
    "tokens.components.floating-cta.use": *float
    "tokens.components.inquiry-button.type": &inq { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"11\"]", captured: "2026-09-30" }
    "tokens.components.inquiry-button.bg": *inq
    "tokens.components.inquiry-button.fg": *inq
    "tokens.components.inquiry-button.radius": *inq
    "tokens.components.inquiry-button.height": *inq
    "tokens.components.inquiry-button.font": *inq
    "tokens.components.inquiry-button.hover": &inqstate { surface_id: surface-2, source_id: laundrygo-probe-business, method: live-state-probe, selector: "a 문의하기 (325 x 85, rest bg rgb(10, 194, 144), fg rgb(255, 255, 255), transition all 0.2s linear): hover and pressed bg -> rgb(19, 171, 130); focus (Tab #13) outline rgb(255, 255, 255) dotted 1px offset 1px", captured: "2026-09-30" }
    "tokens.components.inquiry-button.pressed": *inqstate
    "tokens.components.inquiry-button.states": *inqstate
    "tokens.components.inquiry-button.use": *inq
    "tokens.components.neutral-button.type": *web
    "tokens.components.neutral-button.bg": *web
    "tokens.components.neutral-button.fg": *web
    "tokens.components.neutral-button.radius": *web
    "tokens.components.neutral-button.padding": *web
    "tokens.components.neutral-button.height": *web
    "tokens.components.neutral-button.font": *web
    "tokens.components.neutral-button.hover": &webstate { surface_id: home, source_id: laundrygo-probe-home, method: live-state-probe, selector: "a 웹사이트 (140 x 52, rest bg rgb(223, 223, 223), fg rgb(96, 100, 106), transition all 0.3s ease): hover and pressed bg -> rgb(10, 194, 144), fg and label -> rgb(255, 255, 255); focus (Tab #9) outline rgb(96, 100, 106) dotted 1px offset 1px", captured: "2026-09-30" }
    "tokens.components.neutral-button.pressed": *webstate
    "tokens.components.neutral-button.states": *webstate
    "tokens.components.neutral-button.use": *web
    "tokens.components.nav-link.type": *nav
    "tokens.components.nav-link.fg": *nav
    "tokens.components.nav-link.padding": *nav
    "tokens.components.nav-link.font": *nav
    "tokens.components.nav-link.states": { surface_id: home, source_id: laundrygo-probe-home, method: live-state-probe, selector: "a 회사소개 (130.8 x 24, fg rgb(0, 0, 0), transition all 0.2s linear): hover and pressed no change across self, 4 descendants and 3 ancestor levels; focus (Tab #3) outline rgb(0, 0, 0) dotted 1px offset 1px", captured: "2026-09-30" }
    "tokens.components.nav-link.use": *nav
    "tokens.components.card-toggle.type": *plus
    "tokens.components.card-toggle.fg": *plus
    "tokens.components.card-toggle.radius": *plus
    "tokens.components.card-toggle.size": *plus
    "tokens.components.card-toggle.states": { surface_id: surface-2, source_id: laundrygo-probe-business, method: live-state-probe, selector: "button + (55 x 55, transition all 0s): hover, pressed and focus (Tab #9) no change across self, 1 descendant and 3 ancestor levels", captured: "2026-09-30" }
    "tokens.components.card-toggle.use": *plus
    "tokens.components.quality-card.type": *bcard
    "tokens.components.quality-card.bg": *bcard
    "tokens.components.quality-card.radius": *bcard
    "tokens.components.quality-card.padding": *bcard
    "tokens.components.quality-card.size": *bcard
    "tokens.components.quality-card.use": *bcard
    "tokens.components.testimonial-card.type": *quote
    "tokens.components.testimonial-card.bg": *quote
    "tokens.components.testimonial-card.radius": *quote
    "tokens.components.testimonial-card.padding": *quote
    "tokens.components.testimonial-card.size": *quote
    "tokens.components.testimonial-card.use": *quote
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#0ac290"
    primary-hover: "#13ab82"
    on-primary: "#ffffff"
    ink: "#000000"
    canvas: "#ffffff"
    ink-soft: "#3a3a3a"
    title: "#212121"
    heading-alt: "#212529"
    muted: "#60646a"
    neutral-fill: "#dfdfdf"
    footer: "#888c8e"
    faint: "#b5bcc0"
    pagination-off: "#c9c9c9"
    mint-tint: "#dbf5ee"
  typography:
    family: { body: "Pretendard" }
    display-hero: { size: 62, weight: 600, lineHeight: 1.3, use: "Hero headlines on home (의식주 생활의 혁신을 만들어 갑니다.) and the culture page, 80.6px line, white over the hero image" }
    business-hero: { size: 49, weight: 600, lineHeight: 1.45, use: "Business page hero (국내 최대 호텔 전문 세탁 서비스, 런드리고 호텔&비즈니스), 71px line, white" }
    section: { size: 45, weight: 600, lineHeight: 1.44, use: "Section statements under each eyebrow, 65px line, #000000 on white or #ffffff on image bands" }
    card-title: { size: 38, weight: 700, lineHeight: 1.2, use: "Quality card titles on /business/, 45.6px line" }
    statement: { size: 35, weight: 700, lineHeight: 1.2, use: "Vision statements on home and infrastructure headings on /business/, 42px line" }
    recruit-title: { size: 30, weight: 600, lineHeight: 1.57, use: "Recruiting banner headline on home and the culture page, 47px line, in #212121" }
    card-description: { size: 26, weight: 500, lineHeight: 1.5, use: "Quality card descriptions on /business/, 39px line, in #60646a" }
    feature: { size: 24, weight: 600, lineHeight: 1.67, use: "Service names in Our Business on home (런드리고, 런드리24), 40px line" }
    stat-label: { size: 23, weight: 700, lineHeight: 1.2, use: "Growth metric labels on home (회원 수, 누적 세탁량), 27.6px line, white" }
    eyebrow: { size: 18, weight: 700, lineHeight: 1.3, use: "English section eyebrows (Vision, Our Business, Infra, Quality) in #0ac290, 23.4px line" }
    nav: { size: 17, weight: 500, lineHeight: 1.41, use: "Top navigation links, 24px line, in #000000" }
    body: { size: 16, weight: 400, lineHeight: 1.4, use: "Document default on all three pages, 22.4px line, in #000000" }
    footer: { size: 15, weight: 600, lineHeight: 2, use: "Footer service and contact links, 30px line, in #888c8e" }
    legal: { size: 14, weight: 400, lineHeight: 1.86, use: "Footer company and legal lines, 26px line, in #b5bcc0" }
  spacing: { nav-gap: 72, cta-x: 40, neutral-y: 15, neutral-x: 30, card-y: 80, card-x: 50, quote: 30 }
  rounded: { toggle: 2, button: 10, quote-card: 10, floating: 14, card: 33 }
  components:
    recruit-button: { type: button, bg: "#0ac290", fg: "#ffffff", radius: "10px", padding: "0px 40px 0px 37px", height: "52px", font: "17px / 700 / 52px Pretendard", hover: "bg #13ab82", pressed: "bg #13ab82", states: "probe on home: hover and pressed settle on #13ab82, read 900ms after a 0.2s linear transition; focus turns the label #3a3a3a and draws a 1px dotted outline in the same colour, the WordPress theme's generic link focus rule rather than a brand focus style", use: "채용공고 보러가기 on the recruiting banner of home and the culture page, 198.5 x 52" }
    floating-cta: { type: button, bg: "#0ac290", fg: "#ffffff", radius: "14px", height: "76px", font: "24px / 700 / 76px Pretendard", shadow: "rgba(0, 0, 0, 0.15) 0px 14px 29px 0px", hover: "bg #13ab82", pressed: "bg #13ab82", states: "probe on /business/ with fixed overlays hidden: hover and pressed settle on #13ab82; on home the fixed header covered it, and Tab never reached it on either page, so focus is unmeasured", use: "Fixed call-to-action at the same spot on all three pages, 256 x 76: B2B·대량세탁 문의 on home, 상담 문의하기 on /business/; the third instance on /culture/ was not probed" }
    inquiry-button: { type: button, bg: "#0ac290", fg: "#ffffff", radius: "10px", height: "85px", font: "30px / 700 / 85px Pretendard", hover: "bg #13ab82", pressed: "bg #13ab82", states: "probe on /business/: hover and pressed settle on #13ab82; focus draws a 1px dotted white outline (theme default)", use: "문의하기 under 호텔&비즈니스 상담 at the foot of the business page, 325 x 85" }
    neutral-button: { type: button, bg: "#dfdfdf", fg: "#60646a", radius: "10px", padding: "15px 30px", height: "52px", font: "17px / 500 / 22px Pretendard", hover: "bg #0ac290, fg #ffffff", pressed: "bg #0ac290, fg #ffffff", states: "probe on home: hover and pressed switch to the brand green with a white label after a 0.3s ease transition; focus draws a 1px dotted #60646a outline (theme default)", use: "웹사이트 links under 런드리24 and 런드리고 호텔&비즈니스 in Our Business on home, 140 x 52" }
    nav-link: { type: tab, fg: "#000000", padding: "0px 72px 0px 0px", font: "17px / 500 / 24px Pretendard", states: "probe on 회사소개: hover and pressed show no change across the link, its four descendants and three ancestor levels; focus draws a 1px dotted #000000 outline (theme default); no active or selected colour was observed", use: "Top navigation (회사소개, 비즈니스, 컬쳐, 채용 and the rest) on all three pages" }
    card-toggle: { type: button, fg: "#ffffff", radius: "2px", size: "55px x 55px", states: "probe on /business/: hover, pressed and focus show no change across the button, its label and three ancestor levels", use: "+ toggle that opens the detail of each Quality card on /business/" }
    quality-card: { type: card, bg: "#ffffff", radius: "33px", padding: "80px 50px", size: "524px x 498px", use: "Four Quality cards on /business/ (지속적인 품질 관리, 고객별 관리 시스템, 고객이 원하는 시간 배송, 배송 시까지 깨끗하게), each with a 38px / 700 title and a 26px / 500 description in #60646a" }
    testimonial-card: { type: card, bg: "#dbf5ee", radius: "10px", padding: "30px 27px 0px 30px", size: "317px x 235px", use: "Mint employee-quote cards in the Values carousel of the culture page (7 instances); the quote text sits in children the collector did not record, so no text colour is declared" }
  components_harvested: true
---

# Design System Inspiration of LaundryGo

## 1. Visual Theme & Atmosphere

LaundryGo (런드리고) is the mobile laundry service of 의식주컴퍼니 (Lifegoeson Corp., 대표 조성우, based in Gunpo, Gyeonggi). On the company's own site the service works like this: put laundry out at your door, tap the pickup button in the app, and it comes back clean overnight, with everyday washing, dry cleaning, bedding, sneakers and repairs in one service. The company timeline starts with the launch in March 2019 (100,000 members within a month). A B2B hotel laundry business followed in 2022, when LaundryGo acquired Ourhome's 크린누리; it now runs as 런드리고 호텔&비즈니스, which calls itself Korea's largest hotel laundry service. The same year brought 런드리24 unmanned smart laundromats, a Series C of 49 billion won and the Gunpo smart factory, which the timeline calls the world's largest. Growth figures on the home page, cumulative from March 2019 to February 2024, read 64만 가구 members, 1,884만 laundry items, 305만 orders and 1,225억 원 invested. The company name encodes the ambition: 의(clothing)·식(food)·주(housing), and in English "Life goes on".

The brand in its current form dates from March 2022, when LaundryGo rebranded for its third anniversary. The Korean design magazine Design+ reported that the old neon green was toned down to a slightly muted green for trust, that the new logo joins the letter G to an arrow pictogram (it spins like a washing drum in the app) and that a dedicated typeface was drawn with strokes that suggest the softness of laundry. The company's font page distributes its dedicated typeface, 런드리고딕 (LaundryGothic), free. On the website the green `#0ac290` is the one saturated colour: it fills every call to action — 채용공고 보러가기, the fixed floating action present on all three captured pages, 문의하기 on the business page — and it colours the small English eyebrows (Vision, Our Business, Infra, Quality) that open each section. Headlines are large and declarative in Pretendard 600 and 700 (62px on the heroes, 45px for section statements), white over full-width image bands and `#000000` on white.

The site keeps depth out of the way. The only drop shadow on any captured element sits under the floating action (`rgba(0, 0, 0, 0.15) 0px 14px 29px`). Business cards are white with a generous 33px radius, the culture page's employee quotes sit on mint `#dbf5ee` cards, and a neutral `#dfdfdf` button turns green on hover.

**Key Characteristics:**
- One green `#0ac290` for every call to action and the section eyebrows; hover darkens it to `#13ab82`
- Pretendard 600 / 700 display at 35–62px over image bands, with 16px / 400 body text
- White `#ffffff` canvas, `#000000` ink, `#3a3a3a`, `#212121` and `#212529` for secondary headings, `#60646a` for descriptions
- A neutral `#dfdfdf` button with a `#60646a` label that turns into the green action on hover
- Corners at 10px for buttons, 14px for the floating action and 33px for business cards; a mint `#dbf5ee` quote card at 10px
- Flat, except the floating action's soft shadow
- A free dedicated typeface, 런드리고딕, distributed by the company but not used on the captured pages

## Primary tasks

- Put laundry out at the door, request pickup in the app and get it back overnight
- Switch between the pickup service and a 런드리24 unmanned laundromat
- Weigh a hotel laundry partner before requesting a consultation (상담 문의하기)
- Read the growth numbers to judge how established the service is
- Find open roles and the company's values before applying

## 2. Color Palette & Roles

Every token below was read on 2026-09-30 from www.laundrygo.com, /business/ and /culture/ by the deterministic collector, and hover values by the fixed keyboard probe. The tokens describe 의식주컴퍼니's public website; the LaundryGo app was not captured.

### Primary
- **LaundryGo Green** (`#0ac290`): The fill of every call to action on the captured pages — 채용공고 보러가기 (home and culture), the 256 × 76 floating action fixed on all three pages (B2B·대량세탁 문의 on home, 상담 문의하기 on /business/), and 문의하기 (325 × 85) on /business/ — and the colour of the section eyebrows. It is the primary because it is the product's measured primary action fill wherever an action appears; it is also the hover fill of the neutral button. Design+ describes it as the down-toned green chosen in the 2022 rebrand in place of the old neon.
- **Green Hover** (`#13ab82`): The hover and pressed fill of the green actions, read by the probe after the 0.2s transition settled.
- **On Primary** (`#ffffff`): Labels on the green actions.

### Neutral & Surface
- **Canvas** (`#ffffff`): The body background, the Quality cards on /business/ and headings over image bands.
- **Mint Tint** (`#dbf5ee`): The employee-quote cards on the culture page.
- **Neutral Fill** (`#dfdfdf`): The 웹사이트 buttons on home.

### Text
- **Ink** (`#000000`): The document default text colour, navigation and section statements on white.
- **Ink Soft** (`#3a3a3a`): Eyebrows that are not green (News on home, Values and Culture on the culture page) and the closing heading on /business/.
- **Title** (`#212121`): The recruiting banner headline and the active page number of the news list.
- **Heading Alt** (`#212529`): Culture-programme headings on the culture page.
- **Muted** (`#60646a`): The 웹사이트 button label and the Quality card descriptions.
- **Footer** (`#888c8e`): Footer links and the company line.
- **Faint** (`#b5bcc0`): Footer legal links.
- **Pagination Off** (`#c9c9c9`): Inactive page numbers under the news list.

### Brand assets and embed defaults, not tokens
- The logo was not measured; no logo colour is claimed.
- The news-list links and footer icon links compute `#0170b9`, the default link colour of the site's WordPress theme (Astra). The visible text sits in child elements the collector did not record, so it is not a brand token. The carousel arrows compute `#007aff`, the Swiper library default.

## 3. Typography Rules

### Font Family
- **Live surface use**: `Pretendard` (377 observed uses across body, headings, buttons, cards and lists), `loaded / high`, self-hosted from the site theme at `/wp-content/themes/Lifegoeson/assets/fonts/pretendard/` (WOFF2 and WOFF, Thin to Black). The body computes Pretendard on all three pages.
- **Official distributed font assets**: 런드리고딕 (LaundryGothic), presented on the company's font page (opened 2026-09-30) as LaundryGo's new dedicated typeface. It is a rounded Gothic whose soft curves recall neatly folded laundry, with strokes that follow laundry turning in a machine. The page gives two weights (Regular and Bold), 2,350 Hangul, 94 Latin and 986 symbol glyphs, and TTF, OTF and WOFF formats. It was made with 디자인210 and 햇빛스튜디오. Licence, as stated on that page: a free open-licence font that individuals and companies may use for commercial and non-commercial purposes; all intellectual property belongs to (주)의식주컴퍼니, and the font files may not be sold.
- **Official product use**: Design+ reports that the typeface was developed with the 2022 identity and connects to the logotype, and that the identity is applied to uniforms, delivery vehicles and packaging.
- **Declared only (no visible use)**: `LaundryGothic` is declared in the site's stylesheets but was used by 0 captured elements, so it has no live specimen here and is not a UI token. `Roboto` and `Roboto Slab` are page-builder defaults with 0 uses.
- **Unresolved**: none.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Observed on |
|------|------|------|--------|-------------|-------------|
| Display Hero | Pretendard | 62px | 600 | 80.6px (1.3) | Home and culture heroes, white |
| Business Hero | Pretendard | 49px | 600 | 71px (1.45) | /business/ hero, white |
| Section | Pretendard | 45px | 600 | 65px (1.44) | Section statements |
| Card Title | Pretendard | 38px | 700 | 45.6px (1.2) | Quality cards |
| Statement | Pretendard | 35px | 700 | 42px (1.2) | Vision statements, infrastructure headings |
| Recruit Title | Pretendard | 30px | 600 | 47px (1.57) | Recruiting banner, `#212121` |
| Card Description | Pretendard | 26px | 500 | 39px (1.5) | Quality cards, `#60646a` |
| Feature | Pretendard | 24px | 600 | 40px (1.67) | Service names on home |
| Stat Label | Pretendard | 23px | 700 | 27.6px (1.2) | Growth labels, white |
| Eyebrow | Pretendard | 18px | 700 | 23.4px (1.3) | Section eyebrows, `#0ac290` |
| Nav | Pretendard | 17px | 500 | 24px (1.41) | Top navigation |
| Body | Pretendard | 16px | 400 | 22.4px (1.4) | Document default |
| Footer | Pretendard | 15px | 600 | 30px (2.0) | Footer links, `#888c8e` |
| Legal | Pretendard | 14px | 400 | 26px (1.86) | Footer legal lines, `#b5bcc0` |

Buttons set their line height to their own height: 17px / 700 at 52px, 24px / 700 at 76px, 30px / 700 at 85px.

### Principles
- **Large and declarative**: every section opens with a small English eyebrow over a 45px Korean statement.
- **Weight carries hierarchy**: 600–700 for display, 500 for navigation and descriptions, 400 for body.
- **Tracking stays normal**: no captured role uses letter-spacing.
- **The brand face stays with the brand**: 런드리고딕 belongs to the logotype and printed identity; the website runs on Pretendard.

## 4. Component Stylings

### Buttons

**Recruiting action (primary)**
- Background: `#0ac290`
- Text: `#ffffff`
- Radius: 10px
- Padding: 0px 40px 0px 37px
- Height: 52px
- Font: 17px / 700 Pretendard
- Hover: background `#13ab82`
- Pressed: background `#13ab82`
- States: focus uses the theme's dotted outline and turns the label `#3a3a3a`; no brand focus style
- Use: 채용공고 보러가기 on home and the culture page

**Floating action**
- Background: `#0ac290`
- Text: `#ffffff`
- Radius: 14px
- Height: 76px (256px wide)
- Font: 24px / 700 Pretendard
- Shadow: `rgba(0, 0, 0, 0.15) 0px 14px 29px 0px`
- Hover: background `#13ab82`
- Pressed: background `#13ab82`
- States: focus unmeasured
- Use: fixed on all three pages — B2B·대량세탁 문의 on home, 상담 문의하기 on /business/

**Inquiry action**
- Background: `#0ac290`
- Text: `#ffffff`
- Radius: 10px
- Height: 85px (325px wide)
- Font: 30px / 700 Pretendard
- Hover: background `#13ab82`
- Pressed: background `#13ab82`
- Use: 문의하기 at the foot of /business/

**Neutral button**
- Background: `#dfdfdf`
- Text: `#60646a`
- Radius: 10px
- Padding: 15px 30px
- Height: 52px
- Font: 17px / 500 / 22px Pretendard
- Hover: background `#0ac290`, text `#ffffff`
- Pressed: background `#0ac290`, text `#ffffff`
- Use: 웹사이트 under 런드리24 and 런드리고 호텔&비즈니스 on home

**Card toggle**
- Text: `#ffffff` (+)
- Radius: 2px
- Size: 55 × 55
- States: no hover, pressed or focus change
- Use: opens the detail of each Quality card on /business/

### Navigation
- Text: `#000000`
- Font: 17px / 500 / 24px Pretendard
- Spacing: 72px right padding between items
- States: no hover or pressed change; focus uses the theme's dotted outline; no active colour observed
- Use: 회사소개, 비즈니스, 컬쳐, 채용 and the rest, on all three pages

### Cards

**Quality card**
- Background: `#ffffff`
- Radius: 33px
- Padding: 80px 50px
- Size: 524 × 498
- Title 38px / 700 `#000000`; description 26px / 500 `#60646a`
- Use: four cards under Quality on /business/

**Testimonial card**
- Background: `#dbf5ee`
- Radius: 10px
- Padding: 30px 27px 0px 30px
- Size: 317 × 235
- Use: employee quotes in the Values carousel of the culture page

---

**Verified:** 2026-09-30 (deterministic collector capture of three public pages of www.laundrygo.com plus fixed keyboard-probe state reads and first-party context)
**Tier 1 sources:** https://www.laundrygo.com/ ; https://www.laundrygo.com/business/ ; https://www.laundrygo.com/culture/ ; https://www.laundrygo.com/font/
**Tier 2 sources:** not attempted on 2026-09-30; no Tier 2 value used (getdesign.md and styles.refero.design do not count toward the KR requirement)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Navigation: 72px between items
- Recruiting action: 40px left and 37px right padding at 52px height
- Neutral button: 15px 30px padding at 52px height
- Quality cards: 80px 50px padding
- Testimonial cards: 30px padding on three sides, open at the foot
- Frequent spacing values in the capture: 20, 9, 86, 30 and 72px

### Grid & Container
- Full-width hero and statement bands with white headings over imagery alternate with white sections in a 1080px content column.
- Home runs Vision, Our Business (four services, each with a 24px name and a button), Growth (four metrics and a year-by-year timeline with a 1px `#000000` rule under each year), News and a recruiting banner.
- /business/ stacks its hero, a partner-hotel list, Infra headings in a carousel, a 2 × 2 grid of Quality cards and a large inquiry action.
- The culture page runs a hero, a carousel of mint quote cards, eight core values, culture programmes and the recruiting banner.

### Whitespace Philosophy
- **Airy and editorial**: large statements with generous vertical space between bands.
- **Band segmentation**: sections separate by image bands and white space, not by borders or elevation.

### Border Radius Scale
- 0px: the default (338 of the recorded radii)
- 2px: Quality card toggles
- 10px: buttons and quote cards
- 14px: floating action
- 33px: Quality cards

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Every captured element but one |
| Tint | `#dbf5ee` fill | Culture quote cards |
| Neutral | `#dfdfdf` fill | 웹사이트 buttons |
| Drop | `rgba(0, 0, 0, 0.15) 0px 14px 29px 0px` | The fixed floating action only |

**Shadow Philosophy**: the floating action is the only captured element with a box-shadow; it floats over the page, so it is lifted. Everything else is flat, and emphasis comes from the green and from large type.

## 7. Do's and Don'ts

### Do
- Use `#0ac290` for every call to action and the section eyebrows; darken to `#13ab82` on hover and press
- Let neutral `#dfdfdf` buttons turn green with a white label on hover
- Open sections with an 18px / 700 English eyebrow above a 45px / 600 Korean statement
- Set everything on the web in Pretendard; keep 런드리고딕 for identity uses
- Keep surfaces flat and reserve the drop shadow for a floating action

### Don't
- Don't use a neon green; the 2022 rebrand deliberately toned it down
- Don't add shadows to cards or standard buttons
- Don't treat the theme's `#0170b9` link colour or the `#007aff` carousel arrows as brand colours
- Don't invent focus styles; the captured controls show only the theme's dotted outline
- Don't render 런드리고딕 with another face in its place

## 8. Responsive Behavior

### Breakpoints
Only the 1440 × 900 desktop viewport was captured. The site theme (Astra with Elementor) switches layouts at its own breakpoints; no breakpoint value was measured.

### Touch Targets
- Inquiry action: 85px
- Floating action: 76px
- Card toggles: 55 × 55
- Recruiting and neutral buttons: 52px
- Navigation links: 24px tall with 72px spacing

### Collapsing Strategy
Not captured.

### Image Behavior
- Hero and statement bands are full-width images with white headings on top.

## 9. Agent Prompt Guide

### Quick Color Reference
- Actions and eyebrows: `#0ac290` with `#ffffff`; hover `#13ab82`
- Neutral button: `#dfdfdf` with `#60646a`
- Text: `#000000` default, `#3a3a3a` / `#212121` / `#212529` secondary headings, `#60646a` descriptions
- Footer: `#888c8e` links, `#b5bcc0` legal; `#c9c9c9` inactive page numbers
- Canvas `#ffffff`, quote cards `#dbf5ee`

### Example Component Prompts
- "Create a call-to-action button: `#0ac290` background, `#ffffff` 17px Pretendard label at weight 700, 10px radius, 52px tall, 40px side padding; hover and pressed `#13ab82` over a 0.2s linear transition."
- "Build a section opener: an 18px / 700 English eyebrow in `#0ac290` ('Vision'), then a 45px / 600 Korean statement with a 65px line in `#000000`."
- "Create a floating inquiry button fixed at the side of the page: `#0ac290`, 14px radius, 256 × 76, 24px / 700 white label, shadow `rgba(0, 0, 0, 0.15) 0px 14px 29px 0px`."
- "Design a quote card: `#dbf5ee` background, 10px radius, 30px padding on top and sides, 317 × 235."

### Iteration Guide
1. One green (`#0ac290`) for action and eyebrows, `#13ab82` on hover
2. Pretendard everywhere on the web, large 600–700 statements
3. Flat surfaces; only a floating action gets a shadow
4. 10px buttons, 33px feature cards
5. White canvas, black ink, grey footer

---

## 10. Voice & Tone

LaundryGo's voice is **confident, mission-framed and concrete**. It treats laundry as infrastructure and a first step toward changing everyday life: declarative headlines, then specifics — factory size, daily tonnage, delivery windows.

| Context | Tone |
|---|---|
| Company hero | Declarative, mission-framed. "의식주 생활의 혁신을 만들어 갑니다." |
| Eyebrows | Terse English signposts. "Vision", "Our Business", "Growth", "Infra", "Quality". |
| Service copy | Plain and mechanical. "문 앞에 내놓고 모바일로 수거 신청 버튼 클릭 한 번이면 한밤만에 깨끗해진 세탁물을 문 앞으로 배송해드립니다." |
| B2B | Credibility-first, quantified. "하루 최대 25톤까지 세탁물을 처리합니다." |
| Actions | Direct, low-pressure. "채용공고 보러가기", "B2B·대량세탁 문의", "상담 문의하기". |

**Voice samples (verbatim, opened 2026-09-30):**
- "의식주 생활의 혁신을 만들어 갑니다." — home hero.
- "세탁 산업의 혁신을 시작으로 의식주 산업 전반의 문제를 찾고 해결합니다." — Vision on home.
- "국내 최대 호텔 전문 세탁 서비스, 런드리고 호텔&비즈니스" — /business/ hero.
- "기술과 도전이 만드는 가치있는 변화를 주도합니다." — culture hero.
- "런드리고딕은 ‘세탁 없는 일상의 여유로움’이라는 가치를 담은 런드리고의 새로운 전용 서체입니다." — font page.

**Forbidden register**: superlatives without proof, fear or urgency selling, undefined jargon, exclamation-heavy app-marketing.

## 11. Brand Narrative

의식주컴퍼니 takes its English name, Lifegoeson ("Life goes on"), as a promise: to make busy, complicated modern lives richer, and to innovate across clothing, food and housing worldwide, starting with laundry. Its vision names three commitments — adding room and value to everyday life by solving problems people had accepted as normal, building irreplaceable businesses by bringing IT to industries that had not changed for decades, and creating a circular system that uses fewer resources through better logistics.

LaundryGo launched in March 2019 and reached 100,000 members in its first month. The company then built the physical side of the service: its own factories in Seongsu (2021), Gunpo (2022) and Busan (2023); the acquisition of the New York smart-factory EPC company A+ Machinery (2021), which now designs and builds laundry factories as 런드리고 EPC; Ourhome's hotel laundry business 크린누리 (2022), relaunched as 런드리고 호텔&비즈니스 in 2023; and 런드리24 unmanned laundromats (2022). The timeline also lists an AI style scanner that analyses incoming garments (2023), Forbes Asia's 100 to Watch (2023) and a one-touch RFID laundry tag that replaced barcodes (2024).

In March 2022, for its third anniversary, LaundryGo rebranded. Design+ described the brand's values in the new system as convenient, considerate service, reliability proven by laundry quality, and practicality. The neon green gave way to a quieter, more trustworthy green, the G became an arrow that turns like a drum, and a dedicated typeface followed, now given away as 런드리고딕 so that anyone can use it. The culture page lists eight values, from "대체 불가능한 사명과 실행력" to "권한 위임과 자율성, 팀 플레이", and a flat, titleless culture in which even the CEO is called "OO님".

## 12. Principles

1. **Laundry is infrastructure.** *UI implication:* present the service with factory figures, tonnage and delivery windows, not cuteness.
2. **Trust over attention.** The 2022 rebrand toned the green down (Design+). *UI implication:* keep `#0ac290` for actions and eyebrows only.
3. **One action, one colour.** *UI implication:* every call to action is green, and neutral buttons become green when they are about to act.
4. **Considerate simplicity.** *UI implication:* state the mechanism plainly (put it out, tap once, back overnight) and keep layouts open.
5. **Bold where it persuades, quiet where it informs.** *UI implication:* 45–62px statements for mission, 16px body for explanation. (An editorial reading of the captured pages.)

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable LaundryGo user segments (busy metro-area households, small-home renters, B2B hotel partners), not individual people.*

**김도현, 32, 서울.** A dual-income office worker who never makes it to the dry cleaner before closing. Puts garments out at the door, taps pickup in the app and has them back the next day.

**이서연, 29, 경기.** A renter in a small officetel with no room for a washer. Uses LaundryGo and 런드리24 interchangeably and values that the brand feels modern and reliable.

**박준호, 47, 부산.** Operations manager at a hotel evaluating linen partners. Reads the 호텔&비즈니스 page for proof — factory size, daily capacity, delivery times, partner hotels — before requesting a consultation.

## 14. States

Only these states were observed on the captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Hover / pressed (green actions)** | `#0ac290` → `#13ab82`, settled after a 0.2s linear transition (recruiting action on home, inquiry and floating actions on /business/). |
| **Hover / pressed (neutral button)** | `#dfdfdf` / `#60646a` → `#0ac290` / `#ffffff`, after a 0.3s ease transition. |
| **No change** | Navigation links and the Quality card toggles show no hover or pressed change. |
| **Focus** | Links draw the theme's 1px dotted outline in their text colour; the recruiting action's label also turns `#3a3a3a`. No brand focus style was observed. |
| **Disabled** | The first arrow of the culture carousel is marked disabled at capture. |

Error, empty, loading and success states were not captured and are not described. Focus on the floating action is unmeasured.

## 15. Motion & Easing

The probe read the transitions the controls compute. The green actions and the navigation links compute `transition: all 0.2s linear`, the neutral button `all 0.3s ease`, and the Quality card toggle `all 0s`. The Design+ write-up describes the G-arrow symbol turning like a washing drum in the app; that animation belongs to the app and was not measured. Nothing else about motion (carousels, band reveals) was measured; treat it as unspecified and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/laundrygo.json (capturedAt 2026-09-30T09:58:31Z), deterministic collector, 1440x900: www.laundrygo.com, /business/, /culture/. States: fixed keyboard probe raws docs/research/2026-09-29-growth/raw/laundrygo-states-home.json and laundrygo-states-business.json (the business run used --hide-overlays).
- §1, §3, §10, §11 context: the home page (vision, business, growth, timeline, footer), /business/, /culture/ and /font/ on www.laundrygo.com, and Design+ "런드리고의 새로운 BI 시스템" (design.co.kr/article/17584, 19 May 2022), opened 2026-09-30.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->
