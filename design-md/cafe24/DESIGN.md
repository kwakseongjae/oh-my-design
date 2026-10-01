---
id: cafe24
name: Cafe24
display_name_kr: 카페24
country: KR
category: ecommerce
homepage: "https://www.cafe24.com"
primary_color: "#084fff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=cafe24.com&sz=128"
verified: "2026-10-01"
added: "2026-06-26"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-10-01"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.cafe24.com/", inspected: "2026-10-01" }
    - { id: surface-2, kind: marketing-product, url: "https://www.cafe24.com/commerce/design/", inspected: "2026-10-01" }
    - { id: surface-3, kind: enterprise-marketing, url: "https://www.cafe24.com/enterprise/main.html", inspected: "2026-10-01" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://www.cafe24.com/", captured: "2026-10-01" }
    - { id: aside-census, kind: product-surface, url: "https://www.cafe24.com/", captured: "2026-10-01" }
    - { id: surface-surface-2, kind: product-surface, url: "https://www.cafe24.com/commerce/design/", captured: "2026-10-01" }
    - { id: surface-surface-3, kind: product-surface, url: "https://www.cafe24.com/enterprise/main.html", captured: "2026-10-01" }
    - { id: corp-history, kind: official-doc, url: "https://www.cafe24corp.com/company/history", captured: "2026-10-01" }
    - { id: corp-about, kind: official-doc, url: "https://www.cafe24corp.com/company/about", captured: "2026-10-01" }
    - { id: corp-culture, kind: official-doc, url: "https://www.cafe24corp.com/company/culture", captured: "2026-10-01" }
    - { id: cafe24-fonts, kind: official-doc, url: "https://fonts.cafe24.com/", captured: "2026-10-01" }
    - { id: pretendard-license, kind: license, url: "https://raw.githubusercontent.com/orioncactus/pretendard/main/LICENSE", captured: "2026-10-01" }
  conflicts: []
  claims:
    "tokens.colors.primary": { surface_id: home, source_id: aside-census, method: live-inspect, selector: "a 214x56 \"지금 무료로 시작하기\" x1 background-color rgb(8, 79, 255)", captured: "2026-10-01" }
    "tokens.colors.black": &hdr { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"1\"]", captured: "2026-10-01" }
    "tokens.colors.accent": &blue { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"17\"]", captured: "2026-10-01" }
    "tokens.colors.ink": &feat { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-10-01" }
    "tokens.colors.ink-cool": &body2 { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::body", captured: "2026-10-01" }
    "tokens.colors.slate": &lead { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::p", captured: "2026-10-01" }
    "tokens.colors.muted": &desc { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-10-01" }
    "tokens.colors.faint": &bannerdesc { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-10-01" }
    "tokens.colors.soft": &storysub { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-10-01" }
    "tokens.colors.charcoal": &dark { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::div", captured: "2026-10-01" }
    "tokens.colors.canvas": &wcard { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"35\"]", captured: "2026-10-01" }
    "tokens.colors.surface": &gcard { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"14\"]", captured: "2026-10-01" }
    "tokens.colors.surface-alt": &linkpill { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"62\"]", captured: "2026-10-01" }
    "tokens.colors.hairline": *wcard
    "tokens.colors.highlight": &hl { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::span", captured: "2026-10-01" }
    "tokens.typography.family.display": &h2home { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-10-01" }
    "tokens.typography.family.body": *body2
    "tokens.typography.display-xl.size": &h2design { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h2", captured: "2026-10-01" }
    "tokens.typography.display-xl.weight": *h2design
    "tokens.typography.display-xl.lineHeight": *h2design
    "tokens.typography.display-xl.use": *h2design
    "tokens.typography.display.size": *h2home
    "tokens.typography.display.weight": *h2home
    "tokens.typography.display.lineHeight": *h2home
    "tokens.typography.display.use": *h2home
    "tokens.typography.banner-title.size": &banner { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-10-01" }
    "tokens.typography.banner-title.weight": *banner
    "tokens.typography.banner-title.lineHeight": *banner
    "tokens.typography.banner-title.tracking": *banner
    "tokens.typography.banner-title.use": *banner
    "tokens.typography.feature-title.size": *feat
    "tokens.typography.feature-title.weight": *feat
    "tokens.typography.feature-title.lineHeight": *feat
    "tokens.typography.feature-title.use": *feat
    "tokens.typography.card-title.size": &ctitle { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-10-01" }
    "tokens.typography.card-title.weight": *ctitle
    "tokens.typography.card-title.lineHeight": *ctitle
    "tokens.typography.card-title.use": *ctitle
    "tokens.typography.card-title-sm.size": &ctitlesm { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-10-01" }
    "tokens.typography.card-title-sm.weight": *ctitlesm
    "tokens.typography.card-title-sm.lineHeight": *ctitlesm
    "tokens.typography.card-title-sm.use": *ctitlesm
    "tokens.typography.lead.size": *lead
    "tokens.typography.lead.weight": *lead
    "tokens.typography.lead.lineHeight": *lead
    "tokens.typography.lead.use": *lead
    "tokens.typography.section-desc.size": *desc
    "tokens.typography.section-desc.weight": *desc
    "tokens.typography.section-desc.lineHeight": *desc
    "tokens.typography.section-desc.use": *desc
    "tokens.typography.body.size": *wcard
    "tokens.typography.body.weight": *wcard
    "tokens.typography.body.lineHeight": *wcard
    "tokens.typography.body.use": *wcard
    "tokens.typography.quote.size": &quote { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-10-01" }
    "tokens.typography.quote.weight": *quote
    "tokens.typography.quote.lineHeight": *quote
    "tokens.typography.quote.use": *quote
    "tokens.typography.button-lg.size": &ctadark { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"33\"]", captured: "2026-10-01" }
    "tokens.typography.button-lg.weight": *ctadark
    "tokens.typography.button-lg.lineHeight": *ctadark
    "tokens.typography.button-lg.use": *ctadark
    "tokens.typography.button.size": &cta { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"34\"]", captured: "2026-10-01" }
    "tokens.typography.button.weight": *cta
    "tokens.typography.button.lineHeight": *cta
    "tokens.typography.button.use": *cta
    "tokens.typography.label.size": &pill { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::li", captured: "2026-10-01" }
    "tokens.typography.label.weight": *pill
    "tokens.typography.label.lineHeight": *pill
    "tokens.typography.label.use": *pill
    "tokens.typography.description.size": &cdesc { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-10-01" }
    "tokens.typography.description.weight": *cdesc
    "tokens.typography.description.lineHeight": *cdesc
    "tokens.typography.description.use": *cdesc
    "tokens.typography.caption.size": &bname { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-10-01" }
    "tokens.typography.caption.weight": *bname
    "tokens.typography.caption.lineHeight": *bname
    "tokens.typography.caption.use": *bname
    "tokens.typography.small.size": &result { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-10-01" }
    "tokens.typography.small.weight": *result
    "tokens.typography.small.lineHeight": *result
    "tokens.typography.small.use": *result
    "tokens.spacing.card-y": *gcard
    "tokens.spacing.card-x": *gcard
    "tokens.spacing.pill-y": *pill
    "tokens.spacing.pill-x": *pill
    "tokens.spacing.cta-x": *cta
    "tokens.spacing.cta-x-lg": *ctadark
    "tokens.rounded.cta-sharp": *blue
    "tokens.rounded.icon": &icon { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::div", captured: "2026-10-01" }
    "tokens.rounded.card": *dark
    "tokens.rounded.card-lg": *wcard
    "tokens.rounded.card-xl": *gcard
    "tokens.rounded.tab": &tabsel { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"3\"]", captured: "2026-10-01" }
    "tokens.rounded.header-pill": *hdr
    "tokens.rounded.pill": *cta
    "tokens.components.header-cta.type": *hdr
    "tokens.components.header-cta.bg": *hdr
    "tokens.components.header-cta.fg": *hdr
    "tokens.components.header-cta.border": *hdr
    "tokens.components.header-cta.radius": *hdr
    "tokens.components.header-cta.padding": *hdr
    "tokens.components.header-cta.height": *hdr
    "tokens.components.header-cta.font": *hdr
    "tokens.components.header-cta.states": *hdr
    "tokens.components.header-cta.use": *hdr
    "tokens.components.design-cta.type": *blue
    "tokens.components.design-cta.bg": *blue
    "tokens.components.design-cta.fg": *blue
    "tokens.components.design-cta.border": *blue
    "tokens.components.design-cta.radius": *blue
    "tokens.components.design-cta.padding": *blue
    "tokens.components.design-cta.height": *blue
    "tokens.components.design-cta.font": *blue
    "tokens.components.design-cta.states": *blue
    "tokens.components.design-cta.use": *blue
    "tokens.components.round-cta-lg.type": *ctadark
    "tokens.components.round-cta-lg.bg": *ctadark
    "tokens.components.round-cta-lg.fg": *ctadark
    "tokens.components.round-cta-lg.radius": *ctadark
    "tokens.components.round-cta-lg.padding": *ctadark
    "tokens.components.round-cta-lg.height": *ctadark
    "tokens.components.round-cta-lg.font": *ctadark
    "tokens.components.round-cta-lg.states": *ctadark
    "tokens.components.round-cta-lg.use": *ctadark
    "tokens.components.round-cta.type": *cta
    "tokens.components.round-cta.bg": *cta
    "tokens.components.round-cta.fg": *cta
    "tokens.components.round-cta.radius": *cta
    "tokens.components.round-cta.padding": *cta
    "tokens.components.round-cta.height": *cta
    "tokens.components.round-cta.font": *cta
    "tokens.components.round-cta.states": *cta
    "tokens.components.round-cta.use": *cta
    "tokens.components.floating-banner-button.type": &float { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-10-01" }
    "tokens.components.floating-banner-button.bg": *float
    "tokens.components.floating-banner-button.fg": *float
    "tokens.components.floating-banner-button.radius": *float
    "tokens.components.floating-banner-button.padding": *float
    "tokens.components.floating-banner-button.height": *float
    "tokens.components.floating-banner-button.font": *float
    "tokens.components.floating-banner-button.states": *float
    "tokens.components.floating-banner-button.use": *float
    "tokens.components.enterprise-tab.type": &taboff { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"4\"]", captured: "2026-10-01" }
    "tokens.components.enterprise-tab.bg": *taboff
    "tokens.components.enterprise-tab.fg": *taboff
    "tokens.components.enterprise-tab.border": *taboff
    "tokens.components.enterprise-tab.radius": *taboff
    "tokens.components.enterprise-tab.padding": *taboff
    "tokens.components.enterprise-tab.height": *taboff
    "tokens.components.enterprise-tab.font": *taboff
    "tokens.components.enterprise-tab.selected": *tabsel
    "tokens.components.enterprise-tab.states": *tabsel
    "tokens.components.enterprise-tab.use": *taboff
    "tokens.components.link-pill.type": *linkpill
    "tokens.components.link-pill.bg": *linkpill
    "tokens.components.link-pill.fg": *linkpill
    "tokens.components.link-pill.border": *linkpill
    "tokens.components.link-pill.radius": *linkpill
    "tokens.components.link-pill.padding": *linkpill
    "tokens.components.link-pill.height": *linkpill
    "tokens.components.link-pill.font": *linkpill
    "tokens.components.link-pill.states": *linkpill
    "tokens.components.link-pill.use": *linkpill
    "tokens.components.slider-control.type": &ctrl { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"20\"]", captured: "2026-10-01" }
    "tokens.components.slider-control.bg": *ctrl
    "tokens.components.slider-control.fg": *ctrl
    "tokens.components.slider-control.radius": *ctrl
    "tokens.components.slider-control.size": *ctrl
    "tokens.components.slider-control.states": *ctrl
    "tokens.components.slider-control.use": *ctrl
    "tokens.components.promo-pill.type": *pill
    "tokens.components.promo-pill.bg": *pill
    "tokens.components.promo-pill.fg": *pill
    "tokens.components.promo-pill.radius": *pill
    "tokens.components.promo-pill.padding": *pill
    "tokens.components.promo-pill.height": *pill
    "tokens.components.promo-pill.font": *pill
    "tokens.components.promo-pill.shadow": *pill
    "tokens.components.promo-pill.use": *pill
    "tokens.components.content-card-gray.type": *gcard
    "tokens.components.content-card-gray.bg": *gcard
    "tokens.components.content-card-gray.radius": *gcard
    "tokens.components.content-card-gray.padding": *gcard
    "tokens.components.content-card-gray.size": *gcard
    "tokens.components.content-card-gray.use": *gcard
    "tokens.components.content-card-white.type": *wcard
    "tokens.components.content-card-white.bg": *wcard
    "tokens.components.content-card-white.border": *wcard
    "tokens.components.content-card-white.radius": *wcard
    "tokens.components.content-card-white.padding": *wcard
    "tokens.components.content-card-white.size": *wcard
    "tokens.components.content-card-white.use": *wcard
    "tokens.components.intro-dark-card.type": *dark
    "tokens.components.intro-dark-card.bg": *dark
    "tokens.components.intro-dark-card.radius": *dark
    "tokens.components.intro-dark-card.shadow": *dark
    "tokens.components.intro-dark-card.use": *dark
    "tokens.components.story-card.type": &story { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::div", captured: "2026-10-01" }
    "tokens.components.story-card.bg": *story
    "tokens.components.story-card.radius": *story
    "tokens.components.story-card.size": *story
    "tokens.components.story-card.use": *story
tokens:
  source: reconciled
  extracted: "2026-10-01"
  colors:
    primary: "#084fff"
    black: "#000000"
    accent: "#235bf5"
    ink: "#1c1c1c"
    ink-cool: "#1b1e26"
    slate: "#444b59"
    muted: "#757575"
    faint: "#a6a6a6"
    soft: "#bfbfbf"
    charcoal: "#323232"
    canvas: "#ffffff"
    surface: "#f9fafb"
    surface-alt: "#f0f2f3"
    hairline: "#e0e0e0"
    highlight: "#10b981"
  typography:
    family: { display: "Cafe24Ohsquare", body: "Pretendard" }
    display-xl: { size: 56, weight: 700, lineHeight: 1.25, use: "Hero headline of the design service page (쇼핑몰 디자인), Cafe24Ohsquare, computed 55.98px on a 70.02px line, in #1b1e26" }
    display: { size: 48, weight: 700, lineHeight: 1.21, use: "Section titles on home and the enterprise page, Cafe24Ohsquare, 58px line, #1c1c1c on light bands and #ffffff on dark ones" }
    banner-title: { size: 40, weight: 700, lineHeight: 1.35, tracking: -0.4, use: "Banner headline on home (banner__title), Cafe24Ohsquare, 54px line, in #ffffff" }
    feature-title: { size: 30, weight: 700, lineHeight: 1.53, use: "Feature grid titles on home (feature-grid__card-title), Cafe24Ohsquare, 46px line, in #1c1c1c" }
    card-title: { size: 24, weight: 700, lineHeight: 1.42, use: "White content card titles on home, Cafe24Ohsquare, 34px line" }
    card-title-sm: { size: 20, weight: 700, lineHeight: 1.4, use: "Grey content card titles on home, Cafe24Ohsquare, 28px line" }
    lead: { size: 22, weight: 400, lineHeight: 1.5, use: "Lead paragraphs on the design service page, Pretendard, computed 21.996px on a 32.94px line, in #444b59" }
    section-desc: { size: 20, weight: 400, lineHeight: 1.4, use: "Section descriptions under home titles, Pretendard, 28px line, in #757575 (white on dark bands)" }
    body: { size: 18, weight: 400, lineHeight: 1.5, use: "Card and page body on home, Pretendard, 27px line, in #1c1c1c" }
    quote: { size: 18, weight: 600, lineHeight: 1.56, use: "Customer testimonial quotes on home, Pretendard, 28px line, in #ffffff" }
    button-lg: { size: 22, weight: 700, lineHeight: 1.45, use: "Label of the 64px round call to action on home, 32px line" }
    button: { size: 18, weight: 700, lineHeight: 1.44, use: "Label of the 56px round call to action on home, 26px line" }
    label: { size: 16, weight: 700, lineHeight: 1.5, use: "Promo pill labels on home, 24px line, in #000000" }
    description: { size: 16, weight: 400, lineHeight: 1.5, use: "Content card descriptions on home, 24px line, in #757575" }
    caption: { size: 14, weight: 600, lineHeight: 1.43, use: "Brand names under the brand cards on home, 20px line" }
    small: { size: 13, weight: 500, lineHeight: 1.38, use: "Result lines on the story cards on home, 18px line" }
  spacing: { card-y: 40, card-x: 32, pill-y: 12, pill-x: 24, cta-x: 32, cta-x-lg: 40 }
  rounded: { cta-sharp: 3.96, icon: 8, card: 12, card-lg: 16, card-xl: 20, tab: 30, header-pill: 100, pill: 9999 }
  components:
    header-cta: { type: button, bg: "#000000", fg: "#ffffff", border: "1px solid #000000", radius: "100px", padding: "12px 16px", height: "40px", font: "16px / 700 / 40px Pretendard", states: "rest only on two pages; the Aside bundle has no hover, pressed or focus frame", use: "쇼핑몰 만들기 in the header of the design service and enterprise pages, 121 x 40, at surface-2::[data-omd-capture=\"1\"] and surface-3::[data-omd-capture=\"1\"]" }
    design-cta: { type: button, bg: "#235bf5", fg: "#ffffff", border: "1px solid #235bf5", radius: "3.96px", padding: "0px 39.96px", height: "56px", font: "18px / 700 / 54px Pretendard", states: "rest only; no state frame", use: "The in-page 쇼핑몰 만들기 at the foot of the design service page, 179 x 56, at surface-2::[data-omd-capture=\"17\"]; the page's text links use the same #235bf5" }
    round-cta-lg: { type: button, bg: "#ffffff", fg: "#1c1c1c", radius: "9999px", padding: "0px 40px", height: "64px", font: "22px / 700 / 32px Pretendard", states: "rest only; no state frame", use: "White round call to action (btn--fill btn--round btn--on-dark) under a white section title on a dark band of home, 201 x 64, at home::[data-omd-capture=\"33\"]; its label was not recorded" }
    round-cta: { type: button, bg: "#ffffff", fg: "#1c1c1c", radius: "9999px", padding: "0px 32px", height: "56px", font: "18px / 700 / 26px Pretendard", states: "rest only; no state frame", use: "White round call to action (btn--primary) under the white banner headline on home, 179 x 56, at home::[data-omd-capture=\"34\"]; its label was not recorded" }
    floating-banner-button: { type: button, bg: "#ffffff", fg: "#000000", radius: "999px", padding: "0px 24px", height: "44px", font: "15px / 600 / 22.5px Pretendard", states: "rest only; no state frame", use: "Button on the floating banner of the home hero (cafe24pro-hero__floating-banner-btn), 172 x 44, at home::[data-omd-capture=\"10\"]" }
    enterprise-tab: { type: tab, bg: "#ffffff", fg: "#1c1c1c", border: "1px solid #ffffff", radius: "30px", padding: "0px 20px", height: "50px", font: "20px / 700 / 28px Arial (system stack)", selected: "bg #1c1c1c, fg #ffffff (class active)", states: "rest values only; selected read from the active class at rest; no hover, pressed or focus frame", use: "Tab buttons (btnTab) in the enterprise page's tab menu at surface-3::[data-omd-capture=\"4\"]; the menu strip itself carries a 0 0 4px shadow" }
    link-pill: { type: button, bg: "#f0f2f3", fg: "#1c1c1c", border: "1px solid #ffffff", radius: "100px", padding: "0px 24px", height: "56px", font: "18px / 700 / 54px Pretendard", states: "rest only; no state frame", use: "Grey pill link on the enterprise page, 147 x 56, at surface-3::[data-omd-capture=\"62\"]" }
    slider-control: { type: button, bg: "rgba(255, 255, 255, 0.2)", fg: "#ffffff", radius: "9999px", size: "60px x 60px", states: "rest only on three instances; no state frame", use: "Previous, play and next controls of the brand story carousel on home (pro-brands__ctrl) at home::[data-omd-capture=\"20\"]" }
    promo-pill: { type: badge, bg: "#ffffff", fg: "#000000", radius: "9999px", padding: "12px 24px", height: "48px", font: "16px / 700 / 24px Pretendard", shadow: "rgba(0, 0, 0, 0.04) 0px 2px 8px 0px", use: "White benefit pills stacked in the home promo cards (promo-card__pill); a two-line variant is 72px tall and carries a #10b981 highlight span" }
    content-card-gray: { type: card, bg: "#f9fafb", radius: "20px", padding: "40px 32px", size: "200px x 202px", use: "Grey linked cards on home (content-card--gray, six instances), each with a 38px #000000 icon box at 8px radius and a 20px Cafe24Ohsquare title" }
    content-card-white: { type: card, bg: "#ffffff", border: "1px solid #e0e0e0", radius: "16px", padding: "40px 32px", size: "416px x 228px", use: "White linked cards on home (content-card--white, three instances) with a 24px title and #757575 description" }
    intro-dark-card: { type: card, bg: "#323232", radius: "12px", shadow: "rgba(0, 0, 0, 0.43) 0px 20.57px 51.43px 0px on the active card; rgba(0, 0, 0, 0.07) 0px 3.43px 8.57px 0px on its neighbours; none on the far cards", use: "Fanned carousel cards in the dark intro section of home (intro-section-dark__card), 406–578px wide" }
    story-card: { type: card, bg: "#323232", radius: "16px", size: "560px x 560px", use: "Square image cards of the customer story section on home (story-section__card-img); #323232 is the placeholder fill under the photograph" }
  components_harvested: true
---

# Design System Inspiration of Cafe24

## 1. Visual Theme & Atmosphere

Cafe24 (카페24) builds the platform on which Korean online shops are made, run and marketed. Its company timeline begins in 1999 with 심플렉스인터넷(주) and its research lab. The 카페24 brand launched in 2000, followed by a hosting centre (2002), a shopping-mall centre (2003), a design centre (2004) and a marketing centre (2006). Mobile shops came in 2010 and a brand identity revision (BI 개편) in 2011. A global e-commerce platform followed in 2013 with an Amazon partnership, and the company took the name 카페24 주식회사 in 2017. It listed on KOSDAQ in 2018, signed a mutual-investment partnership with Naver in 2021 and took investment from Google in 2023. In 2024 it launched what it calls the world's first feature for opening a store dedicated to YouTube Shopping. Today it describes itself as a global success partner for K-style goods: a one-stop platform from store building to global marketing and logistics, chosen by 2 million shops and 6.2 million members. Its culture page describes a flat organisation: no titles besides leaders, everyone called "님", minimal rules and decisions made close to the work.

Its public website is a black-and-white marketing system with one blue call to action and one display face. On home the main call to action, 지금 무료로 시작하기 (start for free), is a blue `#084fff` button, 214 × 56; a full-page census of every visible element on home (1,375, 2026-10-01) found it as the only interactive element with that fill. Section titles are set in Cafe24Ohsquare, the company's own bold geometric Hangul face, at 48px. They sit over Pretendard body copy at 18–22px. The persistent call to action on the design service and enterprise pages, 쇼핑몰 만들기 (build a shop), is a black `#000000` pill with white text in the header. On home, the calls to action invert: white `#ffffff` round pills with `#1c1c1c` labels sit on dark bands. Those bands are carried by `#323232` cards and photography, and the light bands use `#f9fafb` cards at 20px radius and white cards with a `#e0e0e0` hairline at 16px. Around that blue the chrome is black and white. The design service page, an older template with a cooler `#1b1e26` ink and `#444b59` lead text, uses blue `#235bf5` for its own 쇼핑몰 만들기 and for its text links. Depth is light but real: the white promo pills carry a faint shadow, and the active card of the dark intro carousel lifts on a deep 51px blur.

**Key Characteristics:**
- Blue main call to action on home: `#084fff` fills 지금 무료로 시작하기 (full-page census of home)
- Black and white secondary actions: the `#000000` header pill 쇼핑몰 만들기 on light pages, white `#ffffff` round pills on dark bands of home
- Cafe24Ohsquare for display (48px section titles, up to 56px on the design page), Pretendard for everything read
- Rounded geometry by role: 9999px calls to action and pills, 100px header pill, 30px tabs, 20px / 16px / 12px cards, 8px icon boxes
- Light bands of `#f9fafb` and white cards, dark bands of `#323232` cards
- One page-specific blue, `#235bf5`, on the design service page's in-page call to action and links
- Soft shadows only where something floats: promo pills, the active intro card, the enterprise tab strip

## Primary tasks

- Start building an online shop (쇼핑몰 만들기)
- Choose a free design theme or a designer-made design for the shop
- Learn what Cafe24 offers enterprise brands and see customer brands that run on it
- Read customer stories and the services that support selling at home and abroad

## 2. Color Palette & Roles

Every token below was read from the bundle the main session captured on 2026-10-01 through a logged-out browser window (the "Aside browser", not a fixed 1440 × 900 headless viewport) on www.cafe24.com, /commerce/design/ and /enterprise/main.html. The bundle records rest values only.

### Primary
- **Cafe24 Blue** (`#084fff`): The fill of 지금 무료로 시작하기, the main call to action on home (an `a`, 214 × 56). It is the primary because it fills the home page's primary action. The 250-element capture of home stopped before it; the value comes from a full-page computed-style census of all 1,375 visible elements on home, taken the same day in the same logged-out browser (`docs/research/2026-09-29-growth/raw/aside/primary-census-2026-10-01.json`), which found exactly one element with that fill, and it is interactive. The census covers home only and recorded the fill and size, not the label colour, radius or font, so no on-primary colour and no component is declared for it.

### Header black
- **Black** (`#000000`): The fill of 쇼핑몰 만들기, the call to action fixed in the header of the design service and enterprise pages (121 × 40 pill, 1px `#000000` border, `#ffffff` label; captures `surface-2` and `surface-3` #1). On home the dark bands invert it: white round pills with `#1c1c1c` labels. The census counts 12 `#000000` fills on home, 6 of them interactive.

### Accent
- **Design Blue** (`#235bf5`): The fill and border of the in-page 쇼핑몰 만들기 at the foot of the design service page (179 × 56, 3.96px radius) and the colour of that page's text links. It appears only on that page, so it is an accent, not the primary.
- **Highlight Green** (`#10b981`): A highlight span inside one of the home promo pills.

### Neutral & Surface
- **Canvas** (`#ffffff`): White content cards and promo pills.
- **Surface** (`#f9fafb`): Grey linked content cards on home.
- **Surface Alt** (`#f0f2f3`): The grey pill link on the enterprise page.
- **Charcoal** (`#323232`): The dark intro carousel cards and the placeholder fill of the story cards on home.
- **Hairline** (`#e0e0e0`): The 1px border of the white content cards (and the dominant border colour of home and the enterprise page).

### Text
- **Ink** (`#1c1c1c`): Headings and body on home and the enterprise page; the label of the white round pills.
- **Ink Cool** (`#1b1e26`): Document text and headings on the design service page.
- **Slate** (`#444b59`): Lead paragraphs on the design service page.
- **Muted** (`#757575`): Section descriptions and card descriptions on home.
- **Faint** (`#a6a6a6`): The banner description on home and footer links.
- **Soft** (`#bfbfbf`): The story section subtitle on its dark band.

### Brand assets, not tokens
- The enterprise page's customer card stack paints each card in its client's colours (for example `#111d76` with `#76cab2`, `#eacdde` with `#c23b6c`, `#bc7b4d` with `#652e07`). These are customer brand artwork, not Cafe24 tokens.
- The Cafe24 logo is an image-replaced `h1` (0px text); no logo colour was measured or claimed.

## 3. Typography Rules

### Font Family
- **Cafe24Ohsquare** — `loaded / high`, 49 observed uses (h1, h2, h3, display text). Section and card titles on all three pages. It is a Cafe24 typeface; the company's font site fonts.cafe24.com says its fonts are "모든 사용자에게 무료로 제공되며 상업적인 사용이 가능합니다" (free for all users and commercially usable). The catalogue on that site is rendered by script and Ohsquare was not seen in its static HTML, so the face's own catalogue entry and licence text were not confirmed for this record.
- **Pretendard** — `loaded / high`, 573 observed uses (body, cards, list items, buttons, badges). Distributed by its author under the SIL Open Font License 1.1.
- **Arial** — 11 uses, the system stack on the enterprise tab buttons and a footer button; not a brand face.
- **Declared only:** `AdobeClean-Bold`, `AdobeClean-Regular` — `@font-face` without observed use.

### Hierarchy

| Role | Font | Size | Weight | Line height | Tracking | Where |
|---|---|---|---|---|---|---|
| Display XL | Cafe24Ohsquare | 56px (55.98) | 700 | 70px | normal | Design service hero |
| Display | Cafe24Ohsquare | 48px | 700 | 58px | normal | Section titles, home and enterprise |
| Banner title | Cafe24Ohsquare | 40px | 700 | 54px | -0.4px | Home banner |
| Feature title | Cafe24Ohsquare | 30px | 700 | 46px | normal | Home feature grid |
| Card title | Cafe24Ohsquare | 24px | 700 | 34px | normal | White cards |
| Card title small | Cafe24Ohsquare | 20px | 700 | 28px | normal | Grey cards |
| Lead | Pretendard | 22px (21.996) | 400 | 32.94px | normal | Design service paragraphs |
| Section description | Pretendard | 20px | 400 | 28px | normal | Under section titles |
| Body | Pretendard | 18px | 400 | 27px | normal | Cards and page body |
| Quote | Pretendard | 18px | 600 | 28px | normal | Testimonials |
| Button large | Pretendard | 22px | 700 | 32px | normal | 64px round CTA |
| Button | Pretendard | 18px | 700 | 26px | normal | 56px round CTA |
| Label | Pretendard | 16px | 700 | 24px | normal | Promo pills |
| Description | Pretendard | 16px | 400 | 24px | normal | Card descriptions |
| Caption | Pretendard | 14px | 600 | 20px | normal | Brand names |
| Small | Pretendard | 13px | 500 | 18px | normal | Story card results |

The home hero's intro message is set larger still in Cafe24Ohsquare (34.56px / 700 / 48.384px, white); it is a one-off and not a token.

### Principles
- **Two faces, two jobs.** Cafe24Ohsquare titles; Pretendard reads. Buttons and labels stay in Pretendard.
- **Bold titles, regular reading.** Every title is 700; reading copy is 400, with 600 for quotes and captions.
- **Tracking stays normal.** Only the home banner title (-0.4px) and the top belt links (-0.28px) tighten.

## 4. Component Stylings

### Buttons

**Header call to action**
- Background: `#000000`
- Text: `#ffffff`
- Border: 1px solid `#000000`
- Radius: 100px
- Padding: 12px 16px
- Height: 40px (121px wide)
- Font: 16px / 700 / 40px Pretendard
- States: rest only; the Aside bundle has no hover, pressed or focus frame
- Use: 쇼핑몰 만들기 in the header of the design service and enterprise pages

**Design page call to action**
- Background: `#235bf5`
- Text: `#ffffff`
- Border: 1px solid `#235bf5`
- Radius: 3.96px
- Padding: 0px 39.96px
- Height: 56px (179px wide)
- Font: 18px / 700 / 54px Pretendard
- States: rest only
- Use: The in-page 쇼핑몰 만들기 on /commerce/design/

**Round call to action, large**
- Background: `#ffffff`
- Text: `#1c1c1c`
- Radius: 9999px
- Padding: 0px 40px
- Height: 64px
- Font: 22px / 700 / 32px Pretendard
- States: rest only
- Use: White pill on a dark band of home (label not recorded)

**Round call to action**
- Background: `#ffffff`
- Text: `#1c1c1c`
- Radius: 9999px
- Padding: 0px 32px
- Height: 56px
- Font: 18px / 700 / 26px Pretendard
- States: rest only
- Use: White pill under the home banner headline (label not recorded)

**Floating banner button**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 999px
- Padding: 0px 24px
- Height: 44px
- Font: 15px / 600 / 22.5px Pretendard
- States: rest only
- Use: The button on the home hero's floating banner

**Link pill**
- Background: `#f0f2f3`
- Text: `#1c1c1c`
- Border: 1px solid `#ffffff`
- Radius: 100px
- Padding: 0px 24px
- Height: 56px
- Font: 18px / 700 / 54px Pretendard
- States: rest only
- Use: Grey pill link on the enterprise page

**Carousel control**
- Background: rgba(255, 255, 255, 0.2)
- Icon: `#ffffff`
- Radius: 9999px
- Size: 60 × 60px
- States: rest only
- Use: Previous, play and next on the home brand story carousel

### Tabs

**Enterprise tab**
- Background: `#ffffff`
- Text: `#1c1c1c`
- Border: 1px solid `#ffffff`
- Radius: 30px
- Padding: 0px 20px
- Height: 50px
- Font: 20px / 700 / 28px Arial (system stack)
- Selected: background `#1c1c1c`, text `#ffffff`
- States: rest values only; selected read from the `active` class at rest
- Use: The enterprise page's tab menu, whose strip carries a rgba(0, 0, 0, 0.24) 0 0 4px shadow

### Badges

**Promo pill**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 9999px
- Padding: 12px 24px
- Height: 48px
- Font: 16px / 700 / 24px Pretendard
- Shadow: rgba(0, 0, 0, 0.04) 0px 2px 8px 0px
- Use: Benefit pills stacked in the home promo cards; a two-line variant is 72px tall with a `#10b981` highlight

### Cards

**Grey content card**
- Background: `#f9fafb`
- Radius: 20px
- Padding: 40px 32px
- Size: 200 × 202px
- Use: Linked cards on home with a 38px `#000000` icon box (8px radius)

**White content card**
- Background: `#ffffff`
- Border: 1px solid `#e0e0e0`
- Radius: 16px
- Padding: 40px 32px
- Size: 416 × 228px
- Use: Linked cards on home with a 24px title and `#757575` description

**Dark intro card**
- Background: `#323232`
- Radius: 12px
- Shadow: rgba(0, 0, 0, 0.43) 0px 20.57px 51.43px 0px on the active card
- Use: Fanned carousel in the dark intro section of home

**Story card**
- Background: `#323232` (under the photograph)
- Radius: 16px
- Size: 560 × 560px
- Use: Customer story images on home

**Verified:** 2026-10-01 (bundle captured by the main session through a logged-out Aside browser window on three public cafe24.com pages, plus first-party company pages read the same day)
**Tier 1 sources:** https://www.cafe24.com/ ; https://www.cafe24.com/commerce/design/ ; https://www.cafe24.com/enterprise/main.html ; https://www.cafe24corp.com/company/history ; https://www.cafe24corp.com/company/about ; https://www.cafe24corp.com/company/culture ; https://fonts.cafe24.com/
**Tier 2 sources:** not attempted
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Most frequent recorded spacing values: 16px (41), 32px (33), 20px (17), 24px (16), 12px (13), 28px (11), 40px (11).
- Tokens: card padding 40px × 32px, promo pill padding 12px × 24px, round CTA side padding 32px and 40px.

### Grid & Container
- Home and enterprise content sits in a 1280px column (section titles are 1280px wide).
- The design service page uses 592px text columns beside imagery.
- Home cards: 200px grey cards in a row of six, 416px white cards in a row of three, 560px square story cards.

### Whitespace Philosophy
- Generous: 48px titles over 20px descriptions, 40px card padding and full-width alternating light and dark bands.

### Border Radius Scale
- 3.96px — the design page call to action
- 8px — icon boxes
- 12px — dark intro cards and brand card images
- 16px — white content cards and story cards
- 20px — grey content cards and enterprise customer cards
- 30px — enterprise tabs
- 100px — the header pill and link pill
- 9999px — round calls to action, promo pills, carousel controls

## 6. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow | Most recorded elements |
| Hairline | 1px `#e0e0e0` | White content cards |
| Whisper | rgba(0, 0, 0, 0.04) 0 2px 8px | Promo pills |
| Strip | rgba(0, 0, 0, 0.24) 0 0 4px | Enterprise tab menu |
| Lift | rgba(0, 0, 0, 0.07) 0 3.43px 8.57px → rgba(0, 0, 0, 0.43) 0 20.57px 51.43px | Intro carousel cards, neighbour → active |

Shadows mark only what floats or is in focus in a carousel; cards on the page are flat.

## 7. Do's and Don'ts

### Do
- Use blue `#084fff` for the one main call to action, as home does for 지금 무료로 시작하기
- Use the black `#000000` pill for the persistent header call on light pages and a white round pill on dark bands
- Set titles in Cafe24Ohsquare 700 and reading copy in Pretendard
- Round by role: 9999px for calls and pills, 16–20px for cards
- Alternate light (`#ffffff`, `#f9fafb`) and dark (`#323232`) bands
- Keep `#235bf5` to contexts like the design service page, where it was observed

### Don't
- Don't use `#3971ff` or lime `#bbf94f` from the earlier record as tokens; neither occurs among the recorded elements of this capture or in the home census
- Don't set buttons or body copy in Cafe24Ohsquare
- Don't put shadows on static cards
- Don't invent hover, pressed or focus values; this bundle records none

## 8. Responsive Behavior

### Breakpoints
Not measured. The bundle comes from one browser window, so no breakpoint or mobile layout is claimed.

### Touch Targets
- Header pill 40px, round calls 56px and 64px, enterprise tabs 50px, promo pills 48px, carousel controls 60px.

### Collapsing Strategy
Not observed.

### Image Behavior
- Story photographs sit in 16px-radius squares over a `#323232` fill; brand card images use 12px.

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary call (home main CTA): `#084fff`
- Header call: `#000000` with `#ffffff` label (inverse on dark: `#ffffff` with `#1c1c1c`)
- Accent (design page): `#235bf5`
- Ink: `#1c1c1c`, `#1b1e26`; secondary `#444b59`, `#757575`, `#a6a6a6`
- Surfaces: `#ffffff`, `#f9fafb`, `#f0f2f3`, dark `#323232`; hairline `#e0e0e0`

### Example Component Prompts
- "Header call to action: black `#000000` pill, 100px radius, 40px tall, 12px 16px padding, `#ffffff` 16px / 700 Pretendard label reading 쇼핑몰 만들기."
- "Dark band call to action: white `#ffffff` 9999px pill, 64px tall, 0 40px padding, `#1c1c1c` 22px / 700 Pretendard label."
- "Grey content card: `#f9fafb`, 20px radius, 40px 32px padding, a 38px black icon box at 8px radius, 20px Cafe24Ohsquare 700 title in `#1c1c1c`."

### Iteration Guide
1. Blue `#084fff` for the main call; black on light and white on dark for the other actions
2. Cafe24Ohsquare titles, Pretendard everything else
3. Pills for actions, 16–20px cards
4. Light and dark bands; shadows only for floating pills and carousel focus
5. Declare only rest and selected states unless a probe measures more

## 10. Voice & Tone

Cafe24 speaks to would-be sellers plainly and encouragingly, with the next step always spelled out. The design service page (read on 2026-10-01) is typical:

| Context | Example (first-party) |
|---|---|
| Positioning | "Cafe24 - No.1 E-Commerce Platform" (page heading) |
| Ease | "HTML 지식 없어도 쇼핑몰 디자인 쉽고 빠르게" (no HTML needed — shop design, quick and easy) |
| Choice | "당신이 찾는 모든 디자인, 카페24 디자인센터" |
| Reassurance | "이 폰트를 써도 될까? 라이선스 걱정 없는 카페24 …" (fonts without licence worries) |
| Encouragement | "성공으로 가는 첫 걸음, 카페24와 함께" (the first step to success, with Cafe24) |
| Action | 쇼핑몰 만들기 |

The corporate site frames the company as "전 세계 K스타일 상품 확산을 위한 글로벌 성공 파트너" (a global success partner for spreading K-style goods).

## 11. Brand Narrative

The company's history page divides its story into three eras. From 1999 to 2007 it opened services one by one and became the leading brand: 심플렉스인터넷(주) was founded in 1999, the 카페24 brand launched in 2000, then the hosting (2002), shopping-mall (2003), design (2004) and marketing (2006) centres opened. From 2008 to 2012 it built a global network and grew its technology and brand: a China (Yanji) subsidiary in 2008, mobile shops in 2010, the BI revision and the 카페24 창업센터 in 2011, a Tokyo subsidiary and 스마트디자인 in 2012. From 2013 it opened export routes: the global e-commerce platform and an Amazon partnership (2013), the rename to 카페24 주식회사 (2017), a KOSDAQ listing and a Japan launch (2018), the Naver mutual-investment partnership (2021), YouTube Shopping integration (2022), Google investment (2023) and the YouTube Shopping store feature (2024).

The about page states the mission: give merchants a one-stop platform — store building, global marketing, global logistics — so that they can concentrate on creative work, and help K-fashion and K-beauty sell online worldwide. The company claims 2 million shops and 6.2 million members. Its management philosophy names trust, people and customers (신뢰경영, 인본주의 경영, 고객중심 경영). The culture page describes a flat structure with no titles besides leaders and the "님" form of address for everyone, information shared openly, minimal rules, and autonomy for each organisation to decide close to the work.

## 12. Principles

1. **Let merchants focus on what they make.** The about page's one-stop promise. *UI implication:* one clear action — 쇼핑몰 만들기 — repeated in the header and at the foot of the page.
2. **Make the start feel easy.** "HTML 지식 없어도 … 쉽고 빠르게". *UI implication:* large, bold titles, short descriptions, generous spacing.
3. **One blue call, black and white for the rest.** *UI implication:* the main call to action takes blue `#084fff`; the header and secondary calls are black on light and white on dark, and other colour is reserved for content and the odd service page.
4. **Flat, with lift only where things move.** *UI implication:* cards stay flat; carousels and floating pills get the shadows.

## 13. Personas

No persona research is published on the pages consulted, so no named persona is given. The audiences the company addresses on its own pages are first-time sellers starting a shop, brands moving online or abroad (K-fashion, K-beauty), creators selling through YouTube Shopping, and enterprise brands, whose own brand cards fill the enterprise page.

## 14. States

| State | Observed treatment |
|---|---|
| Selected (enterprise tab) | `#1c1c1c` fill, `#ffffff` label (`active` class at rest) |
| Unselected (enterprise tab) | `#ffffff` fill, `#1c1c1c` label |
| Carousel focus (intro cards) | The active card is larger (578 × 345 against 406 × 233) and lifts on rgba(0, 0, 0, 0.43) 0 20.57px 51.43px |

Hover, pressed, focus, disabled, empty, loading, error and success states were not captured; the bundle has no state frames and no interaction events, so none is described.

## 15. Motion & Easing

No motion value is declared. The bundle records no transition or animation property, and no Cafe24 source consulted publishes a motion scale. The Partial body's motion values had no source and were removed.
