---
id: sandoll
name: Sandoll
display_name_kr: 산돌
country: KR
category: design-tools
homepage: "https://www.sandoll.co.kr/"
primary_color: "#ff0600"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=sandoll.co.kr&sz=128"
verified: "2026-09-30"
added: "2026-07-02"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: corporate, url: "https://www.sandoll.co.kr/", inspected: "2026-09-30" }
    - { id: surface-2, kind: corporate, url: "https://www.sandoll.co.kr/story", inspected: "2026-09-30" }
    - { id: surface-3, kind: product, url: "https://www.sandollcloud.com/", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://www.sandoll.co.kr/", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://www.sandoll.co.kr/story", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://www.sandollcloud.com/", captured: "2026-09-30" }
    - { id: sandoll-probe-home, kind: product-surface, url: "https://www.sandoll.co.kr/", captured: "2026-09-30" }
    - { id: sandoll-probe-cloud, kind: product-surface, url: "https://www.sandollcloud.com/", captured: "2026-09-30" }
    - { id: sandoll-about, kind: official-doc, url: "https://www.sandoll.co.kr/about", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &inquiry { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"26\"]", captured: "2026-09-30" }
    "tokens.colors.on-primary": &inquirystate { surface_id: home, source_id: sandoll-probe-home, method: live-state-probe, selector: "a 제작문의 (126 x 52.8, href /inquiry): hover and pressed bg rgba(255, 255, 255, 0) -> rgb(255, 6, 0), fg rgb(255, 6, 0) -> rgb(255, 255, 255), border 1px solid rgb(255, 6, 0) -> none; focus (Tab #28) no change across self and 3 ancestor levels; transition all 0.3s ease", captured: "2026-09-30" }
    "tokens.colors.ink": &h2 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.colors.graphite": &lead { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.footer-ink": &footer { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::#footer-company-info-line", captured: "2026-09-30" }
    "tokens.colors.canvas": { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::#doz_body", captured: "2026-09-30" }
    "tokens.colors.hairline": &card { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::div", captured: "2026-09-30" }
    "tokens.colors.cloud-action": &cloudcta { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"105\"]", captured: "2026-09-30" }
    "tokens.colors.cloud-action-hover": &cloudctastate { surface_id: surface-3, source_id: sandoll-probe-cloud, method: live-state-probe, selector: "a SD 라바 보러가기 (200 x 60, a.btn.btn-sandoll): hover and pressed bg rgb(65, 115, 250) -> rgb(52, 92, 200); focus (Tab #110) bg -> rgb(52, 92, 200); transition all 0.3s ease", captured: "2026-09-30" }
    "tokens.colors.cloud-surface": &storycard { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::li", captured: "2026-09-30" }
    "tokens.colors.cloud-hairline": &taboff { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"75\"]", captured: "2026-09-30" }
    "tokens.colors.muted": *taboff
    "tokens.typography.family.display": &h1 { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h1", captured: "2026-09-30" }
    "tokens.typography.family.body": *lead
    "tokens.typography.family.product": &tabon { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"74\"]", captured: "2026-09-30" }
    "tokens.typography.display.size": *h1
    "tokens.typography.display.weight": *h1
    "tokens.typography.display.lineHeight": *h1
    "tokens.typography.display.use": *h1
    "tokens.typography.section.size": *h2
    "tokens.typography.section.weight": *h2
    "tokens.typography.section.lineHeight": *h2
    "tokens.typography.section.use": *h2
    "tokens.typography.lead.size": *lead
    "tokens.typography.lead.weight": *lead
    "tokens.typography.lead.lineHeight": *lead
    "tokens.typography.lead.use": *lead
    "tokens.typography.body.size": &bodyp { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.body.weight": *bodyp
    "tokens.typography.body.lineHeight": *bodyp
    "tokens.typography.body.use": *bodyp
    "tokens.typography.nav.size": &navstory { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"4\"]", captured: "2026-09-30" }
    "tokens.typography.nav.weight": *navstory
    "tokens.typography.nav.lineHeight": *navstory
    "tokens.typography.nav.use": *navstory
    "tokens.typography.button.size": *inquiry
    "tokens.typography.button.weight": *inquiry
    "tokens.typography.button.lineHeight": *inquiry
    "tokens.typography.button.use": *inquiry
    "tokens.typography.button-sm.size": &portfolio { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-09-30" }
    "tokens.typography.button-sm.weight": *portfolio
    "tokens.typography.button-sm.lineHeight": *portfolio
    "tokens.typography.button-sm.tracking": *portfolio
    "tokens.typography.button-sm.use": *portfolio
    "tokens.typography.caption.size": *footer
    "tokens.typography.caption.weight": *footer
    "tokens.typography.caption.lineHeight": *footer
    "tokens.typography.caption.use": *footer
    "tokens.typography.cloud-title.size": &cloudh3 { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h3", captured: "2026-09-30" }
    "tokens.typography.cloud-title.weight": *cloudh3
    "tokens.typography.cloud-title.lineHeight": *cloudh3
    "tokens.typography.cloud-title.use": *cloudh3
    "tokens.typography.cloud-quote.size": &quote { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::p", captured: "2026-09-30" }
    "tokens.typography.cloud-quote.weight": *quote
    "tokens.typography.cloud-quote.lineHeight": *quote
    "tokens.typography.cloud-quote.use": *quote
    "tokens.typography.cloud-body.size": &cloudrow { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::li", captured: "2026-09-30" }
    "tokens.typography.cloud-body.weight": *cloudrow
    "tokens.typography.cloud-body.lineHeight": *cloudrow
    "tokens.typography.cloud-body.use": *cloudrow
    "tokens.typography.cloud-tab.size": *tabon
    "tokens.typography.cloud-tab.weight": *tabon
    "tokens.typography.cloud-tab.lineHeight": *tabon
    "tokens.typography.cloud-tab.use": *tabon
    "tokens.spacing.cta-y": *inquiry
    "tokens.spacing.cta-x": *inquiry
    "tokens.spacing.hero-cta-x": *portfolio
    "tokens.spacing.nav-x": *navstory
    "tokens.spacing.cloud-button-y": *cloudcta
    "tokens.spacing.cloud-button-x": *cloudcta
    "tokens.spacing.cloud-tab-y": *tabon
    "tokens.spacing.cloud-tab-x": *tabon
    "tokens.rounded.cta": *inquiry
    "tokens.rounded.cloud-button": &csbtn { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"127\"]", captured: "2026-09-30" }
    "tokens.rounded.cloud-tab": *tabon
    "tokens.rounded.cloud-search": &search { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"13\"]", captured: "2026-09-30" }
    "tokens.rounded.cloud-pill": *cloudcta
    "tokens.components.inquiry-cta.type": *inquiry
    "tokens.components.inquiry-cta.fg": *inquiry
    "tokens.components.inquiry-cta.border": *inquiry
    "tokens.components.inquiry-cta.radius": *inquiry
    "tokens.components.inquiry-cta.padding": *inquiry
    "tokens.components.inquiry-cta.height": *inquiry
    "tokens.components.inquiry-cta.font": *inquiry
    "tokens.components.inquiry-cta.hover": *inquirystate
    "tokens.components.inquiry-cta.pressed": *inquirystate
    "tokens.components.inquiry-cta.states": *inquirystate
    "tokens.components.inquiry-cta.use": *inquiry
    "tokens.components.hero-outline-cta.type": *portfolio
    "tokens.components.hero-outline-cta.fg": *portfolio
    "tokens.components.hero-outline-cta.border": *portfolio
    "tokens.components.hero-outline-cta.radius": *portfolio
    "tokens.components.hero-outline-cta.padding": *portfolio
    "tokens.components.hero-outline-cta.height": *portfolio
    "tokens.components.hero-outline-cta.font": *portfolio
    "tokens.components.hero-outline-cta.hover": &portfoliostate { surface_id: home, source_id: sandoll-probe-home, method: live-state-probe, selector: "a 포트폴리오 (131 x 58.8, hero): hover and pressed bg rgba(255, 255, 255, 0) -> rgb(255, 6, 0), border 1px solid rgb(255, 255, 255) -> 1px solid rgb(255, 6, 0); focus (Tab #12) no change; transition all 0.3s ease", captured: "2026-09-30" }
    "tokens.components.hero-outline-cta.pressed": *portfoliostate
    "tokens.components.hero-outline-cta.states": *portfoliostate
    "tokens.components.hero-outline-cta.use": *portfolio
    "tokens.components.nav-item.type": *navstory
    "tokens.components.nav-item.fg": &navstate { surface_id: home, source_id: sandoll-probe-home, method: live-state-probe, selector: "a 서비스 (76 x 40, header): rest label rgb(255, 255, 255) over the hero; hover and pressed label rgb(102, 102, 102) -> rgb(255, 6, 0) with the header in its solid state; focus (Tab #3) no change; transition color, background, border-color 0.3s ease-out", captured: "2026-09-30" }
    "tokens.components.nav-item.padding": *navstory
    "tokens.components.nav-item.height": *navstory
    "tokens.components.nav-item.font": *navstory
    "tokens.components.nav-item.selected": *navstory
    "tokens.components.nav-item.hover": *navstate
    "tokens.components.nav-item.states": *navstate
    "tokens.components.nav-item.use": *navstory
    "tokens.components.portfolio-card.type": *card
    "tokens.components.portfolio-card.border": *card
    "tokens.components.portfolio-card.radius": *card
    "tokens.components.portfolio-card.size": *card
    "tokens.components.portfolio-card.use": *card
    "tokens.components.cloud-action-button.type": *cloudcta
    "tokens.components.cloud-action-button.bg": *cloudcta
    "tokens.components.cloud-action-button.fg": *cloudcta
    "tokens.components.cloud-action-button.border": *cloudcta
    "tokens.components.cloud-action-button.radius": *cloudcta
    "tokens.components.cloud-action-button.padding": *cloudcta
    "tokens.components.cloud-action-button.height": *cloudcta
    "tokens.components.cloud-action-button.font": *cloudcta
    "tokens.components.cloud-action-button.hover": *cloudctastate
    "tokens.components.cloud-action-button.pressed": *cloudctastate
    "tokens.components.cloud-action-button.states": *cloudctastate
    "tokens.components.cloud-action-button.use": *cloudcta
    "tokens.components.cloud-sort-tab.type": *taboff
    "tokens.components.cloud-sort-tab.bg": *taboff
    "tokens.components.cloud-sort-tab.fg": *taboff
    "tokens.components.cloud-sort-tab.border": *taboff
    "tokens.components.cloud-sort-tab.radius": *taboff
    "tokens.components.cloud-sort-tab.padding": *taboff
    "tokens.components.cloud-sort-tab.height": *taboff
    "tokens.components.cloud-sort-tab.font": *taboff
    "tokens.components.cloud-sort-tab.selected": *tabon
    "tokens.components.cloud-sort-tab.states": &tabstate { surface_id: surface-3, source_id: sandoll-probe-cloud, method: live-state-probe, selector: "button 판매순 (selected, 57.9 x 32.9) and 활성화순 (69.8 x 32.9): hover, pressed and focus (Tabs #76 and #77) no change across self and 3 ancestor levels; transition color, background-color, border-color 0.15s ease-in-out", captured: "2026-09-30" }
    "tokens.components.cloud-sort-tab.use": *taboff
    "tokens.components.cloud-dark-button.type": *csbtn
    "tokens.components.cloud-dark-button.bg": *csbtn
    "tokens.components.cloud-dark-button.fg": *csbtn
    "tokens.components.cloud-dark-button.border": *csbtn
    "tokens.components.cloud-dark-button.radius": *csbtn
    "tokens.components.cloud-dark-button.padding": *csbtn
    "tokens.components.cloud-dark-button.height": *csbtn
    "tokens.components.cloud-dark-button.font": *csbtn
    "tokens.components.cloud-dark-button.hover": &csstate { surface_id: surface-3, source_id: sandoll-probe-cloud, method: live-state-probe, selector: "a 1:1 문의하기 (180 x 50): hover and pressed bg rgb(51, 51, 51) -> rgb(28, 28, 28); focus (Tab #132) bg -> rgb(28, 28, 28); transition all 0.3s ease", captured: "2026-09-30" }
    "tokens.components.cloud-dark-button.pressed": *csstate
    "tokens.components.cloud-dark-button.states": *csstate
    "tokens.components.cloud-dark-button.use": *csbtn
    "tokens.components.cloud-carousel-control.type": &arrow { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"71\"]", captured: "2026-09-30" }
    "tokens.components.cloud-carousel-control.bg": *arrow
    "tokens.components.cloud-carousel-control.fg": *arrow
    "tokens.components.cloud-carousel-control.border": *arrow
    "tokens.components.cloud-carousel-control.radius": *arrow
    "tokens.components.cloud-carousel-control.size": *arrow
    "tokens.components.cloud-carousel-control.states": *arrow
    "tokens.components.cloud-carousel-control.use": *arrow
    "tokens.components.cloud-search-input.type": *search
    "tokens.components.cloud-search-input.fg": *search
    "tokens.components.cloud-search-input.radius": *search
    "tokens.components.cloud-search-input.padding": *search
    "tokens.components.cloud-search-input.height": *search
    "tokens.components.cloud-search-input.font": *search
    "tokens.components.cloud-search-input.states": *search
    "tokens.components.cloud-search-input.use": *search
    "tokens.components.cloud-story-card.type": *storycard
    "tokens.components.cloud-story-card.bg": *storycard
    "tokens.components.cloud-story-card.radius": *storycard
    "tokens.components.cloud-story-card.size": *storycard
    "tokens.components.cloud-story-card.use": *storycard
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#ff0600"
    on-primary: "#ffffff"
    ink: "#1c1c1c"
    graphite: "#333333"
    footer-ink: "#3b3b3b"
    canvas: "#ffffff"
    hairline: "#eeeeee"
    cloud-action: "#4173fa"
    cloud-action-hover: "#345cc8"
    cloud-surface: "#ebf0ff"
    cloud-hairline: "#dddddd"
    muted: "#999999"
  typography:
    family: { display: "SDGretaSans-hBd", body: "SDGretaSans-eRg", product: "SandollGothicNeo1Unicode" }
    display: { size: 44, weight: 400, lineHeight: 1.34, use: "Page title on /story (스토리), SDGretaSans-hBd, the heavy cut is drawn into the face while font-weight computes 400; 58.96px line, in #1c1c1c" }
    section: { size: 34, weight: 400, lineHeight: 1.4, use: "Section headings on the corporate home (서비스, 스토리 and the inquiry block), SDGretaSans-hBd, 47.6px line, in #1c1c1c" }
    lead: { size: 24, weight: 400, lineHeight: 1.8, use: "Large statement paragraphs on the corporate home, SDGretaSans-eRg, 43.2px line, in #333333" }
    body: { size: 16, weight: 400, lineHeight: 1.8, use: "Corporate body copy and card text, SDGretaSans-eRg, 28.8px line; the dark footer band sets the same size on a 32px line in white" }
    nav: { size: 16, weight: 400, lineHeight: 1.8, use: "Corporate header navigation labels, SDGretaSans-eRg, 28.8px line" }
    button: { size: 16, weight: 400, lineHeight: 1.43, use: "제작문의 action label, SDGretaSans-eRg, 22.86px line" }
    button-sm: { size: 14, weight: 400, lineHeight: 1.43, tracking: 1, use: "포트폴리오 hero action label, SDGretaSans-eRg, 20px line, letter-spacing 1px" }
    caption: { size: 12, weight: 400, lineHeight: 1.8, use: "Corporate footer company line, SDGretaSans-eRg, 21.6px line, in #3b3b3b" }
    cloud-title: { size: 26, weight: 700, lineHeight: 1.45, use: "Section titles on sandollcloud.com, SandollGothicNeo1Unicode, 37.7px line" }
    cloud-quote: { size: 34, weight: 700, lineHeight: 1.42, use: "Label over the dark quote section on sandollcloud.com, SandollGothicNeo1Unicode, 48.28px line, in white" }
    cloud-body: { size: 14, weight: 400, lineHeight: 1.61, use: "List rows and body copy on sandollcloud.com, SandollGothicNeo1Unicode, 22.54px line, in #333333" }
    cloud-tab: { size: 13, weight: 400, lineHeight: 1.61, use: "판매순 / 활성화순 ranking tabs on sandollcloud.com, SandollGothicNeo1Unicode, 20.93px line" }
  spacing: { cta-y: 14, cta-x: 30, hero-cta-x: 22, nav-x: 14, cloud-button-y: 12, cloud-button-x: 20, cloud-tab-y: 5, cloud-tab-x: 10 }
  rounded: { cta: 4, cloud-button: 6, cloud-tab: 19, cloud-search: 28, cloud-pill: 30 }
  components:
    inquiry-cta: { type: button, fg: "#ff0600", border: "1px solid #ff0600", radius: "4px", padding: "14px 30px", height: "53px", font: "16px / 400 / 22.86px SDGretaSans-eRg", hover: "bg #ff0600, fg #ffffff, border none", pressed: "bg #ff0600, fg #ffffff, border none", states: "probe: hover and pressed settle on a solid #ff0600 fill with a white label after an all 0.3s ease transition; focus (Tab #28) shows no change", use: "제작문의 production-inquiry action in the corporate inquiry block at home::[data-omd-capture=\"26\"], 126 x 53, transparent at rest, linking to /inquiry" }
    hero-outline-cta: { type: button, fg: "#ffffff", border: "1px solid #ffffff", radius: "4px", padding: "14px 22px", height: "59px", font: "14px / 400 / 20px SDGretaSans-eRg, letter-spacing 1px", hover: "bg #ff0600, border 1px solid #ff0600", pressed: "bg #ff0600, border 1px solid #ff0600", states: "probe: hover and pressed fill #ff0600 after an all 0.3s ease transition; focus (Tab #12) shows no change", use: "포트폴리오 outline action over the corporate hero image at home::[data-omd-capture=\"10\"], 131 x 59" }
    nav-item: { type: tab, fg: "#ffffff over the hero", padding: "0px 14px", height: "40px", font: "16px / 400 / 28.8px SDGretaSans-eRg", selected: "fg #ff0600 on the current section (the /story header item at surface-2::[data-omd-capture=\"4\"])", hover: "fg #ff0600", states: "probe on home: hover and pressed turn the label #ff0600 after a 0.3s ease-out colour transition; focus (Tab #3) shows no change", use: "Corporate header navigation items, 40px tall cells with 14px side padding" }
    portfolio-card: { type: card, border: "1px solid #eeeeee", radius: "0px", size: "393px x 298px", use: "Portfolio and story cards on the corporate home and /story (card_wrapper, 18 instances), square-cornered with a #eeeeee hairline" }
    cloud-action-button: { type: button, bg: "#4173fa", fg: "#ffffff", border: "1px solid #4173fa", radius: "30px", padding: "12px 20px", height: "60px", font: "14px / 400 / 22.96px SandollGothicNeo1Unicode", hover: "bg #345cc8", pressed: "bg #345cc8", states: "probe: hover, pressed and keyboard focus (Tab #110) settle on #345cc8 after an all 0.3s ease transition", use: "SD 라바 보러가기 (btn-sandoll) over the dark quote section of sandollcloud.com at surface-3::[data-omd-capture=\"105\"], 200 x 60; Sandoll Cloud only" }
    cloud-sort-tab: { type: tab, bg: "#ffffff", fg: "#999999", border: "1px solid #dddddd", radius: "19px", padding: "5px 10px", height: "33px", font: "13px / 400 / 20.93px SandollGothicNeo1Unicode", selected: "bg #1c1c1c, fg #ffffff, border 1px solid #1c1c1c", states: "probe: neither tab changes on hover, pressed or keyboard focus (Tabs #76 and #77); they declare a 0.15s ease-in-out colour transition", use: "판매순 (selected) and 활성화순 font-ranking tabs on sandollcloud.com at surface-3::[data-omd-capture=\"75\"]; Sandoll Cloud only" }
    cloud-dark-button: { type: button, bg: "#333333", fg: "#ffffff", border: "1px solid #333333", radius: "6px", padding: "12px 16px", height: "50px", font: "14px / 400 / 22.96px SandollGothicNeo1Unicode", hover: "bg #1c1c1c", pressed: "bg #1c1c1c", states: "probe: hover, pressed and keyboard focus (Tab #132) settle on #1c1c1c after an all 0.3s ease transition", use: "1:1 문의하기 support action near the foot of sandollcloud.com at surface-3::[data-omd-capture=\"127\"], 180 x 50, with an icon and 8px gap; Sandoll Cloud only" }
    cloud-carousel-control: { type: button, bg: "#ffffff", fg: "#333333", border: "1px solid #dddddd", radius: "50%", size: "40px x 40px", states: "rest on two captured instances; no state frame and no probe read, so hover, pressed and focus are unmeasured", use: "Round previous and next controls of the sandollcloud.com carousels at surface-3::[data-omd-capture=\"71\"]; Sandoll Cloud only" }
    cloud-search-input: { type: input, fg: "#999999", radius: "28px", padding: "14.5px 48px", height: "52px", font: "14px / 400 / 21px SandollGothicNeo1Unicode", states: "rest only; no state frame and no probe read, so hover and focus are unmeasured", use: "Font search field in the sandollcloud.com hero at surface-3::[data-omd-capture=\"13\"], 670 x 52; Sandoll Cloud only" }
    cloud-story-card: { type: card, bg: "#ebf0ff", radius: "1px", size: "370px x 604px", use: "Tinted story cards in the sandollcloud.com story carousel (12 instances); Sandoll Cloud only" }
  components_harvested: true
---

# Design System Inspiration of Sandoll

## 1. Visual Theme & Atmosphere

Sandoll (산돌) calls itself Korea's first font foundry. Its own company page says it was founded in 1984 and tells the origin plainly: 석금호, shocked that Korean text was being set on phototypesetting imported from Japan, founded 산돌타이포그라픽스, the country's first type foundry. Forty years on, the timeline on that page reads like a map of Korean screens and brands — Apple SD 산돌고딕 Neo shipped in OS X and iOS, the corporate typeface 삼성체 drawn with Samsung, bespoke families for Toss (토스 프로덕트 산스), LG and KT, and in October 2020 「Sandoll 그레타산스」, the Hangul companion to Typotheque's multilingual Greta Sans. The company states its purpose as building "a world where anyone can express themselves freely, the way Hangul removed the barrier of expressing thought in a foreign script." Today it runs two public faces: the foundry's corporate site (sandoll.co.kr) and Sandoll Cloud (산돌구름, sandollcloud.com), its font subscription platform, positioned as "모두의 창작을 위한 베스트 폰트 플랫폼".

The corporate site is an editorial white page (`#ffffff`) set entirely in the foundry's own type. Headings use `SDGretaSans-hBd`, the heavy cut of Sandoll Greta Sans, at 44px on the /story title and 34px on home section heads — the weight is drawn into the face, so `font-weight` computes 400. Body, navigation and actions use `SDGretaSans-eRg` at 16px on a generous 28.8px line. Text sits in near-black `#1c1c1c`, statement paragraphs in `#333333`. The page is monochrome except for one colour: Sandoll red `#ff0600`. It draws the outline and label of the 제작문의 (production inquiry) action, fills that action and the hero 포트폴리오 outline on hover, turns a header link red on hover, and marks the current section in the header. Cards are square-cornered behind a `#eeeeee` hairline, and no captured element carries a shadow.

Sandoll Cloud is a denser product in a second register: Sandoll Gothic Neo (`SandollGothicNeo1Unicode`) for every label, `#333333` text, a blue `#4173fa` action pill that deepens to `#345cc8`, charcoal `#1c1c1c` for the selected ranking tab, `#dddddd` outlines and a pale `#ebf0ff` tint on story cards. The two sites share a company, not a palette.

**Key Characteristics:**
- One chromatic colour on the corporate site: `#ff0600` for the primary action, hover fills and the current navigation item
- The foundry's own typefaces as UI type: SDGretaSans on corporate, Sandoll Gothic Neo on Sandoll Cloud, both streamed from Sandoll's own font service
- Heavy headlines through the `SDGretaSans-hBd` face rather than CSS weight
- Near-black `#1c1c1c` ink, `#333333` statements, `#3b3b3b` footer text
- 4px corners on corporate actions, square cards with a `#eeeeee` hairline
- Sandoll Cloud: blue `#4173fa` 30px pills, 19px ranking tabs, a 28px search field, `#ebf0ff` story cards
- No shadows on any captured element

## Primary tasks

- Commission a custom or corporate typeface through 제작문의
- Browse the portfolio of type-branding work
- Search Sandoll Cloud for a font and preview it in a catalogue card
- Compare the font ranking by sales (판매순) or activation (활성화순)
- Reach 1:1 support from Sandoll Cloud

## 2. Color Palette & Roles

### Primary
- **Sandoll Red** (`#ff0600`): The primary. It is the only chromatic colour the corporate surfaces render, and it renders in every primary role there: the label and 1px outline of 제작문의, the site's inquiry action; the solid fill of 제작문의 on hover and press (with a white `#ffffff` label); the fill of the hero 포트폴리오 outline on hover; the hover colour of the header links; and the current-section item in the /story header. The reference homepage is sandoll.co.kr, so the corporate red carries `primary`.
- **On Primary** (`#ffffff`): The label on the red hover fill, and the canvas.

### Ink & Neutrals
- **Ink** (`#1c1c1c`): Headings and default text on the corporate site; on Sandoll Cloud, the fill of the selected ranking tab and the hover of the 1:1 support action.
- **Graphite** (`#333333`): Large statement paragraphs on the corporate home; body text, carousel glyphs and the 1:1 support fill on Sandoll Cloud.
- **Footer Ink** (`#3b3b3b`): The corporate footer company line.
- **Canvas** (`#ffffff`): Page background on both sites.
- **Hairline** (`#eeeeee`): The 1px edge of corporate portfolio and story cards.

### Sandoll Cloud (sandollcloud.com only)
- **Cloud Action** (`#4173fa`): Fill and border of the `btn-sandoll` pill (SD 라바 보러가기); hover, press and keyboard focus deepen it to **Cloud Action Hover** (`#345cc8`).
- **Cloud Hairline** (`#dddddd`): Outlines of the unselected ranking tab and the round carousel controls, and list-row dividers.
- **Muted** (`#999999`): Unselected ranking-tab label and the search field text.
- **Cloud Surface** (`#ebf0ff`): Story cards in the Cloud carousel.

### Brand assets, not tokens
- Font specimens in Sandoll Cloud catalogue cards are products on display, not interface colour or type (see §3).
- The Sandoll wordmark was not measured; no logo colour is claimed.

## 3. Typography Rules

### Font Family
- **Corporate display**: `SDGretaSans-hBd` — the heavy cut of Sandoll Greta Sans, used on the /story title and home section headings.
- **Corporate body**: `SDGretaSans-eRg` — the regular cut, used for body copy, navigation, cards and actions. The `<body>` element itself computes the site builder's system stack (Apple SD Gothic Neo, Malgun Gothic …); the text is set in SDGretaSans at the element level.
- **Sandoll Cloud**: `SandollGothicNeo1Unicode` — Sandoll Gothic Neo, used for every Cloud label, tab, input and heading.

### Evidence classes
- **Official product facts** (sandoll.co.kr/about): 「Sandoll 그레타산스」 was developed in October 2020 as the Hangul version of Typotheque's Greta Sans family; Apple SD 산돌고딕 Neo shipped in Apple's OS X and iOS.
- **Live surface use**: SDGretaSans-eRg (372 observed uses), SDGretaSans-hBd (5) and SandollGothicNeo1Unicode (426), all loaded.
- **Official distributed font assets**: all three are streamed from Sandoll's own font service (`…execute-api.ap-northeast-2.amazonaws.com/…/api/woff/drop_fontstream_woff`).
- **Font-catalogue evidence, excluded from tokens**: the Cloud home also loads specimen faces (`SDFONTMH_*`, `SDFONTSQ_12295-0`, one use each) from a separate preview endpoint (`…/api/woff/drop_preview_woff/`). They render products inside catalogue cards and say nothing about the interface type.
- **Declared only**: SD November TT, Pretendard, Nanum Gothic and several icon fonts are declared with zero observed uses.
- **Licence**: SDGretaSans and Sandoll Gothic Neo are Sandoll's own typefaces; no licence text was opened this session, so their licence terms are unresolved here.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display | SDGretaSans-hBd | 44px | 400* | 1.34 (58.96px) | /story title, `#1c1c1c`; *heavy face |
| Section | SDGretaSans-hBd | 34px | 400* | 1.4 (47.6px) | Home section headings |
| Lead | SDGretaSans-eRg | 24px | 400 | 1.8 (43.2px) | Statement paragraphs, `#333333` |
| Body | SDGretaSans-eRg | 16px | 400 | 1.8 (28.8px) | Corporate copy; 32px line on the dark footer band |
| Nav | SDGretaSans-eRg | 16px | 400 | 1.8 (28.8px) | Header links |
| Button | SDGretaSans-eRg | 16px | 400 | 1.43 (22.86px) | 제작문의 |
| Button Small | SDGretaSans-eRg | 14px | 400 | 1.43 (20px) | 포트폴리오, letter-spacing 1px |
| Caption | SDGretaSans-eRg | 12px | 400 | 1.8 (21.6px) | Footer company line, `#3b3b3b` |
| Cloud Title | SandollGothicNeo1Unicode | 26px | 700 | 1.45 (37.7px) | Cloud section titles |
| Cloud Quote | SandollGothicNeo1Unicode | 34px | 700 | 1.42 (48.28px) | White label on the dark quote section |
| Cloud Body | SandollGothicNeo1Unicode | 14px | 400 | 1.61 (22.54px) | Cloud list rows |
| Cloud Tab | SandollGothicNeo1Unicode | 13px | 400 | 1.61 (20.93px) | Ranking tabs |

### Principles
- **The foundry's type is the interface.** Every captured label on both sites is set in a Sandoll typeface; never substitute a system font on a Sandoll surface.
- **Weight lives in the face.** Corporate headings compute `font-weight: 400` and render heavy because they use the `-hBd` cut.
- **Two sites, two families.** SDGretaSans on sandoll.co.kr, Sandoll Gothic Neo on sandollcloud.com.

## 4. Component Stylings

### Buttons

**Inquiry Action (Primary, corporate)**
- Rest: transparent, label `#ff0600`, border 1px solid `#ff0600`
- Radius 4px · padding 14px 30px · 126 × 53 · 16px / 400 SDGretaSans-eRg
- Hover and pressed: fill `#ff0600`, label `#ffffff`, border none (probe, after `all 0.3s ease`)
- Focus: no change measured
- Use: 제작문의 in the inquiry block of the corporate home, linking to /inquiry

**Hero Outline Action (corporate)**
- Rest: transparent, label `#ffffff`, border 1px solid `#ffffff`, over the hero image
- Radius 4px · padding 14px 22px · 131 × 59 · 14px / 400, letter-spacing 1px
- Hover and pressed: fill `#ff0600`, border `#ff0600` (probe)
- Use: 포트폴리오

**Cloud Action Pill (sandollcloud.com)**
- Fill and border `#4173fa`, label `#ffffff`
- Radius 30px · padding 12px 20px · 200 × 60 · 14px / 400 Sandoll Gothic Neo
- Hover, pressed and keyboard focus: `#345cc8` (probe)
- Use: SD 라바 보러가기 over the dark quote section

**Cloud Dark Button (sandollcloud.com)**
- Fill and border `#333333`, label `#ffffff`, icon with 8px gap
- Radius 6px · padding 12px 16px · 180 × 50
- Hover, pressed and keyboard focus: `#1c1c1c` (probe)
- Use: 1:1 문의하기

**Cloud Carousel Control (sandollcloud.com)**
- `#ffffff` with a 1px `#dddddd` border and `#333333` glyph, 40 × 40, radius 50%

### Tabs & Navigation

**Header Navigation (corporate)**
- 16px / 400 SDGretaSans-eRg, 40px cells, 14px side padding
- Rest: `#ffffff` over the hero; the probe read `#666666` once the header had switched to its solid state
- Hover and pressed: `#ff0600` (probe); focus: no change
- Selected: the current-section item on /story renders in `#ff0600`

**Ranking Tabs (sandollcloud.com)**
- Unselected: `#ffffff`, label `#999999`, border 1px solid `#dddddd`
- Selected: `#1c1c1c`, label `#ffffff`, border `#1c1c1c`
- Radius 19px · padding 5px 10px · 33px tall · 13px / 400
- Hover, pressed and focus: no change on either (probe)
- Use: 판매순 / 활성화순 above the font ranking

### Inputs

**Cloud Search Field (sandollcloud.com)**
- Text `#999999`, radius 28px, padding 14.5px 48px, 670 × 52, 14px / 400

### Cards

**Portfolio Card (corporate)**
- 1px solid `#eeeeee`, 0px radius, 393 × 298, no shadow (home and /story, 18 instances)

**Cloud Story Card (sandollcloud.com)**
- Fill `#ebf0ff`, 1px radius, 370 × 604

---

**Verified:** 2026-09-30 (deterministic collector capture of sandoll.co.kr, /story and sandollcloud.com, logged out, plus fixed keyboard-probe state reads and first-party context)
**Tier 1 sources:** https://www.sandoll.co.kr/ ; https://www.sandoll.co.kr/story ; https://www.sandoll.co.kr/about ; https://www.sandollcloud.com/
**Tier 2 sources:** getdesign.md/sandoll (HTTP 200, "0 design.md files") and styles.refero.design/?q=sandoll (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Corporate actions: 14px vertical padding; 30px sides on 제작문의, 22px on 포트폴리오
- Header links: 14px side padding in 40px cells
- Sandoll Cloud: 12px 20px on the action pill, 12px 16px on the dark button, 5px 10px on ranking tabs, 14.5px 48px in the search field

### Grid & Container
- Corporate pages run a 1220px content column (section headings span 1220px) on a 1440px canvas, with full-bleed hero and dark footer bands.
- Sandoll Cloud centres a 1200px container (`container-1200`) with carousels of font and story cards.

### Whitespace Philosophy
- **Corporate air.** Large heavy headings sit alone in white bands; the red action appears once, in its own block.
- **Cloud density.** Ranking tabs, carousels and list rows pack the catalogue so a designer can scan many faces quickly.

### Border Radius Scale
- 0px — corporate cards
- 1px — Cloud story cards
- 4px — corporate actions
- 6px — Cloud dark button
- 19px — Cloud ranking tabs
- 28px — Cloud search field
- 30px — Cloud action pill
- 50% — Cloud carousel controls

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | `box-shadow: none` | Every captured element on both sites |
| Hairline | 1px `#eeeeee` (corporate) / `#dddddd` (Cloud) | Cards, tabs, carousel controls, list rows |
| Tint | `#ebf0ff` | Cloud story cards |

**Shadow Philosophy**: none of the 816 recorded elements computes a shadow. Separation comes from whitespace, hairlines and, on Cloud, a pale tint. Emphasis is colour on type: red on the corporate site, blue or charcoal on Cloud.

## 7. Do's and Don'ts

### Do
- Reserve `#ff0600` for the corporate primary action, hover fills and the current navigation item
- Set corporate text in SDGretaSans (`-hBd` for headings, `-eRg` for the rest) and Cloud text in Sandoll Gothic Neo
- Keep corporate actions at 4px corners and corporate cards square with a `#eeeeee` hairline
- Keep `#4173fa` on Sandoll Cloud's action pill, with `#345cc8` for hover
- Mark the selected Cloud ranking tab with a `#1c1c1c` fill

### Don't
- Spread the red across decoration; it is the corporate site's only chromatic colour
- Substitute a generic or system font for Sandoll's own type
- Carry the Cloud blue onto the corporate site, or the corporate red onto Cloud
- Add drop shadows; nothing captured has one
- Treat catalogue specimens as the interface typeface

## 8. Responsive Behavior

### Breakpoints
Only the 1440px desktop layout was captured; breakpoints were not measured and are not specified here.

### Touch Targets
- Corporate actions: 53px (제작문의) and 59px (포트폴리오) tall
- Header links: 40px cells
- Cloud: 60px action pill, 50px dark button, 52px search field, 40px carousel controls, 33px ranking tabs

### Collapsing Strategy
Not captured. Both sites ship separate mobile markup (the corporate header carries `new_header_overlay_mobile` classes), but no narrow viewport was measured.

### Image Behavior
Corporate hero and portfolio images carry no shadow at 1440px; nothing else about image behaviour was measured.

## 9. Agent Prompt Guide

### Quick Color Reference
- Corporate primary / hover fill / current nav: Sandoll Red (`#ff0600`)
- Ink: `#1c1c1c` · statements: `#333333` · footer: `#3b3b3b`
- Canvas: `#ffffff` · corporate hairline: `#eeeeee`
- Sandoll Cloud action: `#4173fa` (hover `#345cc8`) · Cloud hairline: `#dddddd` · muted: `#999999` · story tint: `#ebf0ff`

### Example Component Prompts
- "Corporate inquiry block on white: a 34px SDGretaSans-hBd heading in #1c1c1c (47.6px line), then a transparent action with a #ff0600 label and 1px #ff0600 border, 4px radius, 14px 30px padding, 16px SDGretaSans-eRg — '제작문의'. On hover it fills #ff0600 with a white label over 0.3s. No shadow."
- "Sandoll Cloud ranking tabs: selected pill #1c1c1c with white 13px Sandoll Gothic Neo label, 19px radius, 5px 10px padding; unselected #ffffff with #999999 label and 1px #dddddd border."
- "Sandoll Cloud action pill: #4173fa fill and border, white 14px label, 30px radius, 12px 20px padding, 60px tall; hover #345cc8."

### Iteration Guide
1. Red is the corporate site's only colour, and it means action or current place
2. Sandoll type only: SDGretaSans on corporate, Sandoll Gothic Neo on Cloud
3. Heavy headings come from the `-hBd` face
4. Flat everywhere; hairlines `#eeeeee` (corporate) and `#dddddd` (Cloud)
5. Keep the Cloud blue and the corporate red on their own sites

---

## 10. Voice & Tone

Sandoll speaks as a craft authority that also wants to open type to everyone. The company page is declarative and historical; Sandoll Cloud is friendly and creator-facing.

| Context | Tone |
|---|---|
| Company story | Plain statement of firsts and purpose: "산돌은 1984년 설립된 국내 최초의 폰트 파운드리입니다." |
| Section labels | Short nouns: 소개, 서비스, 포트폴리오, 스토리, IR |
| Actions | Functional: 제작문의, 포트폴리오, 1:1 문의하기 |
| Sandoll Cloud | Enabling and product-led: "모두의 창작을 위한 베스트 폰트 플랫폼", SD 라바 보러가기 |

**Voice samples (verbatim, opened 2026-09-30):**
- "산돌은 1984년 설립된 국내 최초의 폰트 파운드리입니다." — sandoll.co.kr/about
- "모두의 창작을 위한 베스트 폰트 플랫폼 | 산돌구름" — sandollcloud.com title
- "스토리 - 산돌 Sandoll Inc" — /story title

**Forbidden register**: hype that undercuts craft, exclamation-heavy marketing, colour for its own sake.

## 11. Brand Narrative

Sandoll's own timeline (sandoll.co.kr/about) begins in 1984, when 석금호 founded 산돌타이포그라픽스 as Korea's first type foundry after seeing Hangul set on imported Japanese phototypesetting. The same page records the milestones that made Sandoll typefaces part of daily Korean reading: Apple SD 산돌고딕 Neo in OS X and iOS; the founding of 산돌티움, a Hangul culture-goods company, in 2008; the corporate typeface 삼성체 with Samsung; 「Sandoll 그레타산스」 in October 2020 as the Hangul version of Typotheque's Greta Sans; bespoke families for Toss, LG and KT; the 산돌 사이시옷 type conference; and the rebranding of the Sandoll Cloud mobile app as 베이키. The company is 주식회사 산돌, led by 윤영호 and based in Seongsu-dong, Seoul (footer of sandoll.co.kr).

Its work runs on two tracks that the two websites mirror. Type branding — custom and corporate typefaces commissioned through 제작문의 — is presented on a restrained, red-accented corporate site. Sandoll Cloud (산돌구름) puts the library in front of every creator as a subscription platform, with its own blue action colour and Sandoll Gothic Neo interface.

*(The reading that connects the two sites' designs to these two tracks is editorial interpretation, not a Sandoll statement.)*

## 12. Principles

1. **The sample is the pitch.** Sandoll sets its own interfaces in its own typefaces. *UI implication:* never render a Sandoll surface in a substitute font.
2. **One colour, one meaning.** Red appears only where the corporate site asks for action or marks location. *UI implication:* keep everything else monochrome.
3. **Emphasis on the letter.** Heavy faces and colour on type do the emphasising. *UI implication:* no badges, glows or shadows for hierarchy.
4. **Two registers.** The foundry and the platform are deliberately distinct. *UI implication:* don't mix the corporate red with the Cloud blue.

## 13. Personas

*Fictional archetypes informed by Sandoll's public audiences (brands commissioning type; Sandoll Cloud subscribers), not real people.*

**정민석, 38, 서울.** Brand-identity director at an agency, commissioning a corporate typeface. Reads the foundry's restraint as proof of craft and goes straight to 제작문의.

**이하늘, 27, 성남.** Freelance designer and Sandoll Cloud subscriber. Uses search and the 판매순 / 활성화순 ranking to find a face fast and previews it in the catalogue card before licensing.

**Yuki Tanaka, 33, Tokyo.** Product designer choosing a Hangul face for a bilingual app; trusts Sandoll Gothic Neo because it already ships on Apple platforms.

## 14. States

Only these states were observed; nothing else is specified here.

| State | Observation |
|---|---|
| **Hover / pressed (제작문의)** | Transparent → solid `#ff0600`, label `#ff0600` → `#ffffff`, border removed (probe). |
| **Hover / pressed (포트폴리오)** | Transparent → `#ff0600` fill with a `#ff0600` border (probe). |
| **Hover / pressed (header link)** | Label → `#ff0600` (probe). |
| **Hover / pressed / focus (Cloud pill)** | `#4173fa` → `#345cc8` (probe). |
| **Hover / pressed / focus (1:1 문의하기)** | `#333333` → `#1c1c1c` (probe). |
| **No change** | Cloud ranking tabs on hover, pressed and focus; 제작문의, 포트폴리오 and the header link on keyboard focus. |
| **Selected** | Current header item on /story in `#ff0600`; selected ranking tab `#1c1c1c` with a white label. |

The collector's own hover and focus frames for the corporate header links were read mid-transition (different values per link) and are superseded by the probe. No authored focus ring was observed on the corporate site. Error, empty, loading and success states were not captured.

## 15. Motion & Easing

The probe read these computed transitions: corporate actions (제작문의, 포트폴리오) `all 0.3s ease`; corporate header links `color, background, border-color 0.3s ease-out`; Sandoll Cloud action pill and 1:1 button `all 0.3s ease`; Cloud ranking tabs `color, background-color, border-color 0.15s ease-in-out`. Nothing else about motion (carousels, scroll effects) was measured; treat it as unspecified and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/sandoll.json (capturedAt 2026-09-30T09:56:17Z), deterministic collector, 1440x900, logged out: sandoll.co.kr, /story, sandollcloud.com. States: fixed keyboard probe raws docs/research/2026-09-29-growth/raw/sandoll-states-home.json and sandoll-states-cloud.json (configs sandoll-cfg-*.json).
- §1, §3, §10, §11 context: sandoll.co.kr/about (Since 1984, timeline, footer company details), /story and sandollcloud.com titles, opened 2026-09-30.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->
