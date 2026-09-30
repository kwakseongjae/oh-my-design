---
id: kcd
name: Korea Credit Data
display_name_kr: 한국신용데이터 (캐시노트)
country: KR
category: fintech
homepage: "https://kcd.co.kr"
primary_color: "#2d91ff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=kcd.co.kr&sz=128"
verified: "2026-09-30"
added: "2026-06-26"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: corporate, url: "https://kcd.co.kr/", inspected: "2026-09-30" }
    - { id: surface-2, kind: corporate, url: "https://kcd.co.kr/about/", inspected: "2026-09-30" }
    - { id: surface-3, kind: corporate, url: "https://kcd.co.kr/service/", inspected: "2026-09-30" }
    - { id: surface-4, kind: marketing, url: "https://cashnote.kr/", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://kcd.co.kr/", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://kcd.co.kr/about/", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://kcd.co.kr/service/", captured: "2026-09-30" }
    - { id: surface-surface-4, kind: product-surface, url: "https://cashnote.kr/", captured: "2026-09-30" }
    - { id: kcd-probe-home, kind: product-surface, url: "https://kcd.co.kr/", captured: "2026-09-30" }
    - { id: kcd-probe-about, kind: product-surface, url: "https://kcd.co.kr/about/", captured: "2026-09-30" }
    - { id: kcd-probe-cashnote, kind: product-surface, url: "https://cashnote.kr/", captured: "2026-09-30" }
    - { id: kcd-blog, kind: official-doc, url: "https://blog.kcd.co.kr/", captured: "2026-09-30" }
    - { id: pretendard-license, kind: license, url: "https://raw.githubusercontent.com/orioncactus/pretendard/main/LICENSE", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &navsel { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"1\"]", captured: "2026-09-30" }
    "tokens.colors.navy": &eyebrow { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h4", captured: "2026-09-30" }
    "tokens.colors.ink": &body { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::body", captured: "2026-09-30" }
    "tokens.colors.ink-deep": &cnfoot { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::h3", captured: "2026-09-30" }
    "tokens.colors.ink-black": &ghost { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"17\"]", captured: "2026-09-30" }
    "tokens.colors.body": &foot { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.gray": &cardp { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.muted": &legal { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.grey": &menusub { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"14\"]", captured: "2026-09-30" }
    "tokens.colors.faint": &headsub { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"6\"]", captured: "2026-09-30" }
    "tokens.colors.sky": &cardtitle { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h4", captured: "2026-09-30" }
    "tokens.colors.hairline": &menu { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"9\"]", captured: "2026-09-30" }
    "tokens.colors.surface": &cnstart { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::[data-omd-capture=\"1\"]", captured: "2026-09-30" }
    "tokens.colors.on-blue": &cnhero { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::h2", captured: "2026-09-30" }
    "tokens.colors.white": &hero { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.typography.family.sans": *body
    "tokens.typography.product-display.size": *cnhero
    "tokens.typography.product-display.weight": *cnhero
    "tokens.typography.product-display.lineHeight": *cnhero
    "tokens.typography.product-display.use": *cnhero
    "tokens.typography.display.size": *hero
    "tokens.typography.display.weight": *hero
    "tokens.typography.display.lineHeight": *hero
    "tokens.typography.display.use": *hero
    "tokens.typography.product-section.size": &cnsection { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::h2", captured: "2026-09-30" }
    "tokens.typography.product-section.weight": *cnsection
    "tokens.typography.product-section.lineHeight": *cnsection
    "tokens.typography.product-section.use": *cnsection
    "tokens.typography.section.size": &h3 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-09-30" }
    "tokens.typography.section.weight": *h3
    "tokens.typography.section.lineHeight": *h3
    "tokens.typography.section.use": *h3
    "tokens.typography.product-feature.size": &cnfeature { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::h3", captured: "2026-09-30" }
    "tokens.typography.product-feature.weight": *cnfeature
    "tokens.typography.product-feature.lineHeight": *cnfeature
    "tokens.typography.product-feature.use": *cnfeature
    "tokens.typography.service-lead.size": &svclead { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h2", captured: "2026-09-30" }
    "tokens.typography.service-lead.weight": *svclead
    "tokens.typography.service-lead.lineHeight": *svclead
    "tokens.typography.service-lead.use": *svclead
    "tokens.typography.card-title.size": *cardtitle
    "tokens.typography.card-title.weight": *cardtitle
    "tokens.typography.card-title.lineHeight": *cardtitle
    "tokens.typography.card-title.use": *cardtitle
    "tokens.typography.eyebrow.size": *eyebrow
    "tokens.typography.eyebrow.weight": *eyebrow
    "tokens.typography.eyebrow.lineHeight": *eyebrow
    "tokens.typography.eyebrow.use": *eyebrow
    "tokens.typography.menu.size": *menu
    "tokens.typography.menu.weight": *menu
    "tokens.typography.menu.lineHeight": *menu
    "tokens.typography.menu.use": *menu
    "tokens.typography.lead.size": &lead { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.lead.weight": *lead
    "tokens.typography.lead.lineHeight": *lead
    "tokens.typography.lead.use": *lead
    "tokens.typography.nav.size": &nav { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-09-30" }
    "tokens.typography.nav.weight": *nav
    "tokens.typography.nav.lineHeight": *nav
    "tokens.typography.nav.use": *nav
    "tokens.typography.button.size": *ghost
    "tokens.typography.button.weight": *ghost
    "tokens.typography.button.use": *ghost
    "tokens.typography.product-button.size": &cnherobtn { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::[data-omd-capture=\"3\"]", captured: "2026-09-30" }
    "tokens.typography.product-button.weight": *cnherobtn
    "tokens.typography.product-button.lineHeight": *cnherobtn
    "tokens.typography.product-button.use": *cnherobtn
    "tokens.typography.product-button-sm.size": *cnstart
    "tokens.typography.product-button-sm.weight": *cnstart
    "tokens.typography.product-button-sm.lineHeight": *cnstart
    "tokens.typography.product-button-sm.use": *cnstart
    "tokens.typography.body.size": *cardp
    "tokens.typography.body.weight": *cardp
    "tokens.typography.body.lineHeight": *cardp
    "tokens.typography.body.use": *cardp
    "tokens.typography.caption.size": *foot
    "tokens.typography.caption.weight": *foot
    "tokens.typography.caption.lineHeight": *foot
    "tokens.typography.caption.use": *foot
    "tokens.typography.fine.size": *legal
    "tokens.typography.fine.weight": *legal
    "tokens.typography.fine.lineHeight": *legal
    "tokens.typography.fine.use": *legal
    "tokens.spacing.ghost-y": *ghost
    "tokens.spacing.ghost-x": *ghost
    "tokens.spacing.menu-bottom": *menu
    "tokens.spacing.tab-x": &tab { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"24\"]", captured: "2026-09-30" }
    "tokens.spacing.chip-y": &chip { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::p", captured: "2026-09-30" }
    "tokens.spacing.chip-x": *chip
    "tokens.spacing.soft-x": *cnstart
    "tokens.spacing.soft-lg-x": *cnherobtn
    "tokens.spacing.download-y": &cndl { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::[data-omd-capture=\"5\"]", captured: "2026-09-30" }
    "tokens.spacing.download-x": *cndl
    "tokens.rounded.ghost": *ghost
    "tokens.rounded.soft": *cnstart
    "tokens.rounded.soft-lg": *cnherobtn
    "tokens.rounded.pill": *tab
    "tokens.components.ghost-button.type": *ghost
    "tokens.components.ghost-button.bg": *ghost
    "tokens.components.ghost-button.fg": *ghost
    "tokens.components.ghost-button.border": *ghost
    "tokens.components.ghost-button.radius": *ghost
    "tokens.components.ghost-button.padding": *ghost
    "tokens.components.ghost-button.height": *ghost
    "tokens.components.ghost-button.font": *ghost
    "tokens.components.ghost-button.hover": &ghoststate { surface_id: home, source_id: kcd-probe-home, method: live-state-probe, selector: "button 서비스 보기 (260 x 51): hover and pressed bg rgba(0, 0, 0, 0) -> rgb(25, 45, 130), fg rgb(0, 0, 0) -> rgb(255, 255, 255), border 1px solid rgb(30, 33, 55) -> 1px solid rgb(25, 45, 130) (transition all 0.2s); focus (Tab #17) changes only an ancestor's scroll-reveal transform and opacity", captured: "2026-09-30" }
    "tokens.components.ghost-button.pressed": *ghoststate
    "tokens.components.ghost-button.states": *ghoststate
    "tokens.components.ghost-button.use": *ghost
    "tokens.components.ghost-link.type": &more { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"19\"]", captured: "2026-09-30" }
    "tokens.components.ghost-link.bg": *more
    "tokens.components.ghost-link.fg": *more
    "tokens.components.ghost-link.border": *more
    "tokens.components.ghost-link.radius": *more
    "tokens.components.ghost-link.padding": *more
    "tokens.components.ghost-link.height": *more
    "tokens.components.ghost-link.font": *more
    "tokens.components.ghost-link.hover": &morestate { surface_id: home, source_id: kcd-probe-home, method: live-state-probe, selector: "a 더보기 (260 x 48): hover and pressed bg rgba(0, 0, 0, 0) -> rgb(25, 45, 130), fg rgb(30, 33, 55) -> rgb(255, 255, 255), border -> 1px solid rgb(25, 45, 130); focus (Tab #23) outline none -> rgb(0, 95, 204) auto 1px, the browser default", captured: "2026-09-30" }
    "tokens.components.ghost-link.pressed": *morestate
    "tokens.components.ghost-link.states": *morestate
    "tokens.components.ghost-link.use": *more
    "tokens.components.ghost-inverse.type": &inverse { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"19\"]", captured: "2026-09-30" }
    "tokens.components.ghost-inverse.bg": *inverse
    "tokens.components.ghost-inverse.fg": *inverse
    "tokens.components.ghost-inverse.border": *inverse
    "tokens.components.ghost-inverse.radius": *inverse
    "tokens.components.ghost-inverse.padding": *inverse
    "tokens.components.ghost-inverse.height": *inverse
    "tokens.components.ghost-inverse.font": *inverse
    "tokens.components.ghost-inverse.states": *inverse
    "tokens.components.ghost-inverse.use": *inverse
    "tokens.components.menu-item.type": *menu
    "tokens.components.menu-item.fg": *menu
    "tokens.components.menu-item.border": *menu
    "tokens.components.menu-item.padding": *menu
    "tokens.components.menu-item.height": *menu
    "tokens.components.menu-item.font": *menu
    "tokens.components.menu-item.selected": { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"9\"]", captured: "2026-09-30" }
    "tokens.components.menu-item.states": *menu
    "tokens.components.menu-item.use": *menu
    "tokens.components.header-nav-item.type": *nav
    "tokens.components.header-nav-item.fg": *nav
    "tokens.components.header-nav-item.height": *nav
    "tokens.components.header-nav-item.font": *nav
    "tokens.components.header-nav-item.selected": *navsel
    "tokens.components.header-nav-item.states": *nav
    "tokens.components.header-nav-item.use": *nav
    "tokens.components.leadership-tab.type": *tab
    "tokens.components.leadership-tab.bg": *tab
    "tokens.components.leadership-tab.fg": *tab
    "tokens.components.leadership-tab.border": *tab
    "tokens.components.leadership-tab.radius": *tab
    "tokens.components.leadership-tab.padding": *tab
    "tokens.components.leadership-tab.height": *tab
    "tokens.components.leadership-tab.font": *tab
    "tokens.components.leadership-tab.selected": { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"23\"]", captured: "2026-09-30" }
    "tokens.components.leadership-tab.states": { surface_id: surface-2, source_id: kcd-probe-about, method: live-state-probe, selector: "button C-level (selected, 104 x 44; rest bg rgba(0, 0, 0, 0), behind rgb(255, 255, 255), fg rgb(255, 255, 255), border 1px solid rgb(25, 45, 130)) and Advisor (108 x 44): hover, pressed and focus (Tabs #20 and #21) no change", captured: "2026-09-30" }
    "tokens.components.leadership-tab.use": *tab
    "tokens.components.entity-link.type": &entity { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"19\"]", captured: "2026-09-30" }
    "tokens.components.entity-link.fg": *entity
    "tokens.components.entity-link.height": *entity
    "tokens.components.entity-link.font": *entity
    "tokens.components.entity-link.states": { surface_id: surface-2, source_id: kcd-probe-about, method: live-state-probe, selector: "a 바로가기 (first of four, 620 x 28): hover and pressed no change; focus (Tab #16) outline none -> rgb(0, 95, 204) auto 1px, the browser default", captured: "2026-09-30" }
    "tokens.components.entity-link.use": *entity
    "tokens.components.service-chip.type": *chip
    "tokens.components.service-chip.fg": *chip
    "tokens.components.service-chip.border": *chip
    "tokens.components.service-chip.radius": *chip
    "tokens.components.service-chip.padding": *chip
    "tokens.components.service-chip.height": *chip
    "tokens.components.service-chip.font": *chip
    "tokens.components.service-chip.use": *chip
    "tokens.components.carousel-arrow.type": &arrow { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::div", captured: "2026-09-30" }
    "tokens.components.carousel-arrow.bg": *arrow
    "tokens.components.carousel-arrow.fg": *arrow
    "tokens.components.carousel-arrow.radius": *arrow
    "tokens.components.carousel-arrow.size": *arrow
    "tokens.components.carousel-arrow.states": *arrow
    "tokens.components.carousel-arrow.use": *arrow
    "tokens.components.cashnote-start-button.type": *cnstart
    "tokens.components.cashnote-start-button.bg": *cnstart
    "tokens.components.cashnote-start-button.fg": *cnstart
    "tokens.components.cashnote-start-button.radius": *cnstart
    "tokens.components.cashnote-start-button.padding": *cnstart
    "tokens.components.cashnote-start-button.height": *cnstart
    "tokens.components.cashnote-start-button.font": *cnstart
    "tokens.components.cashnote-start-button.states": &cnstate { surface_id: surface-4, source_id: kcd-probe-cashnote, method: live-state-probe, selector: "button 캐시노트 시작하기 (138.4 x 40) and 앱 다운로드 (118.5 x 48): hover, pressed and focus (Tabs #3 and #5) no change across self and 3 ancestor levels; transition all 0s", captured: "2026-09-30" }
    "tokens.components.cashnote-start-button.use": *cnstart
    "tokens.components.cashnote-download-button.type": *cnherobtn
    "tokens.components.cashnote-download-button.bg": *cnherobtn
    "tokens.components.cashnote-download-button.fg": *cnherobtn
    "tokens.components.cashnote-download-button.radius": *cnherobtn
    "tokens.components.cashnote-download-button.padding": *cnherobtn
    "tokens.components.cashnote-download-button.height": *cnherobtn
    "tokens.components.cashnote-download-button.font": *cnherobtn
    "tokens.components.cashnote-download-button.states": *cnstate
    "tokens.components.cashnote-download-button.use": *cnherobtn
    "tokens.components.cashnote-footer-download.type": *cndl
    "tokens.components.cashnote-footer-download.bg": *cndl
    "tokens.components.cashnote-footer-download.fg": *cndl
    "tokens.components.cashnote-footer-download.radius": *cndl
    "tokens.components.cashnote-footer-download.padding": *cndl
    "tokens.components.cashnote-footer-download.height": *cndl
    "tokens.components.cashnote-footer-download.font": *cndl
    "tokens.components.cashnote-footer-download.states": *cndl
    "tokens.components.cashnote-footer-download.use": *cndl
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#2d91ff"
    navy: "#192d82"
    ink: "#1e2137"
    ink-deep: "#0c1120"
    ink-black: "#000000"
    body: "#44546f"
    gray: "#666666"
    muted: "#728094"
    grey: "#9f9f9f"
    faint: "#a4aeba"
    sky: "#57a8ff"
    hairline: "#d9d9d9"
    surface: "#f4f7f9"
    on-blue: "#f3faff"
    white: "#ffffff"
  typography:
    family: { sans: "Pretendard" }
    product-display: { size: 72, weight: 700, lineHeight: 1.19, use: "CashNote product site (cashnote.kr): hero headline, 86px line, in #f3faff" }
    display: { size: 52, weight: 700, lineHeight: 1.27, use: "Corporate page heroes on kcd.co.kr (home, /about/, /service/), 66px line, white over imagery" }
    product-section: { size: 56, weight: 700, lineHeight: 1.21, use: "CashNote product site (cashnote.kr): section headlines, 68px line, in #192d82" }
    section: { size: 46, weight: 700, lineHeight: 1.35, use: "Corporate section headings, 62px line, in #1e2137 (white on dark bands)" }
    product-feature: { size: 44, weight: 700, lineHeight: 1.27, use: "CashNote product site (cashnote.kr): feature headings, 56px line, in #192d82" }
    service-lead: { size: 44, weight: 300, lineHeight: 1.23, use: "Light-weight service introductions on /service/, 54px line, in #1e2137" }
    card-title: { size: 22, weight: 600, lineHeight: 1.45, use: "Card titles on the corporate pages, 32px line, in #1e2137, or #57a8ff on dark bands" }
    eyebrow: { size: 18, weight: 600, lineHeight: 1.56, use: "Section eyebrows above corporate headings, 28px line, in #192d82 (#57a8ff on dark bands)" }
    menu: { size: 18, weight: 700, lineHeight: 1.0, use: "Full-screen menu items (회사소개, 서비스, 팀 문화, 인재영입, 새 소식), 18px line" }
    lead: { size: 18, weight: 400, lineHeight: 1.67, use: "Lead paragraphs under corporate headings, 30px line, in #1e2137" }
    nav: { size: 16, weight: 400, lineHeight: 1.0, use: "Header navigation over the hero, 16px line, white; the current page's item turns #2d91ff" }
    button: { size: 16, weight: 700, use: "Corporate ghost button labels (서비스 보기, 자세히 보기, 더보기)" }
    product-button: { size: 19, weight: 700, lineHeight: 1.37, use: "CashNote product site (cashnote.kr): hero 앱 다운로드 label, 26px line" }
    product-button-sm: { size: 16, weight: 600, lineHeight: 1.63, use: "CashNote product site (cashnote.kr): header 캐시노트 시작하기 label, 26px line" }
    body: { size: 16, weight: 400, lineHeight: 1.63, use: "Card descriptions and body copy, 26px line, in #666666" }
    caption: { size: 14, weight: 400, lineHeight: 1.71, use: "Footer company details, 24px line, in #44546f" }
    fine: { size: 13, weight: 400, lineHeight: 1.54, use: "Footer legal line, 20px line, in #728094" }
  spacing: { ghost-y: 15, ghost-x: 32, menu-bottom: 25, tab-x: 23, chip-y: 3, chip-x: 25, soft-x: 12, soft-lg-x: 16, download-y: 12, download-x: 28 }
  rounded: { ghost: 6, soft: 12, soft-lg: 16, pill: 100 }
  components:
    ghost-button: { type: button, bg: "transparent", fg: "#000000", border: "1px solid #1e2137", radius: "6px", padding: "15px 32px", height: "51px", font: "16px / 700", hover: "bg #192d82, fg #ffffff, border #192d82", pressed: "bg #192d82, fg #ffffff, border #192d82", states: "probe on home: hover and pressed fill the button #192d82 with a #ffffff label after a 0.2s transition; focus draws no authored style (the Tab landing only finished an ancestor's scroll-reveal)", use: "서비스 보기 and 자세히 보기 on home (260 x 51); 캐시노트 바로가기, Google Play and Apple Store on /service/ (260 x 59). The button element computes Arial 13.33px; the visible label is a child span whose family was not recorded" }
    ghost-link: { type: button, bg: "transparent", fg: "#1e2137", border: "1px solid #1e2137", radius: "6px", padding: "15px 32px", height: "48px", font: "16px / 700 / 16px Pretendard", hover: "bg #192d82, fg #ffffff, border #192d82", pressed: "bg #192d82, fg #ffffff, border #192d82", states: "probe: hover and pressed settle on #192d82 with a #ffffff label (transition all 0.2s); focus shows only the browser's default ring", use: "더보기 under the news list on home, 260 x 48" }
    ghost-inverse: { type: button, bg: "transparent", fg: "#ffffff", border: "1px solid #ffffff", radius: "6px", padding: "15px 32px", height: "51px", font: "16px / 700", states: "rest only; not probed", use: "데이터 랩 바로가기 on the dark band of /service/ and 인재영입 중 on home" }
    menu-item: { type: tab, fg: "#1e2137", border: "1px solid #d9d9d9 (bottom only)", padding: "0px 0px 25px", height: "44px", font: "18px / 700 / 18px Pretendard", selected: "fg #2d91ff on the current section (회사소개 on /about/, 서비스 on /service/)", states: "selected variant from rest values; no pointer frame", use: "Full-screen menu list, 1380 x 44 rows" }
    header-nav-item: { type: tab, fg: "#ffffff", height: "16px", font: "16px / 400 / 16px Pretendard", selected: "fg #2d91ff on the current page", states: "selected variant from rest values on /about/ and /service/; no pointer frame", use: "Header navigation over the hero image (회사소개, 서비스, 팀 문화, 인재영입, 새 소식); two secondary header links, one of them 데이터 랩, sit in #a4aeba" }
    leadership-tab: { type: tab, bg: "transparent", fg: "#9f9f9f", border: "1px solid #d9d9d9", radius: "100px", padding: "0px 23px", height: "44px", font: "18px / 500 / 26px (the button computes Arial; see §3)", selected: "fg #ffffff with a 1px #192d82 border; the fill behind the white label is painted outside the probe's scope and is not declared", states: "probe: neither tab changes on hover, pressed or focus", use: "C-level / Advisor switch in the leadership section of /about/" }
    entity-link: { type: button, fg: "#2d91ff", height: "28px", font: "18px / 700 / 28px Pretendard", states: "probe: hover and pressed show no change; focus shows only the browser's default ring", use: "바로가기 links on the four KCD 공동체 company cards of /about/" }
    service-chip: { type: badge, fg: "#192d82", border: "1px solid #192d82", radius: "100px", padding: "3px 25px", height: "38px", font: "18px / 400 / 30px Pretendard", use: "Outlined label chips above the service introductions on /service/, 150 x 38" }
    carousel-arrow: { type: button, bg: "#192d82", fg: "#ffffff", radius: "50%", size: "56px x 56px", states: "rest only; not probed", use: "Previous and next arrows of the service carousel on /service/" }
    cashnote-start-button: { type: button, bg: "#f4f7f9", fg: "#2d91ff", radius: "12px", padding: "0px 12px", height: "40px", font: "16px / 600 / 26px Pretendard", states: "probe: hover, pressed and focus (Tab #3) show no change", use: "CashNote product site (cashnote.kr): 캐시노트 시작하기 in the header, 138 x 40" }
    cashnote-download-button: { type: button, bg: "#f4f7f9", fg: "#2d91ff", radius: "16px", padding: "0px 16px", height: "48px", font: "19px / 700 / 26px Pretendard", states: "probe: hover, pressed and focus (Tab #5) show no change", use: "CashNote product site (cashnote.kr): 앱 다운로드 in the hero, 118.5 x 48" }
    cashnote-footer-download: { type: button, bg: "#f4f7f9", fg: "#2d91ff", radius: "12px", padding: "12px 28px", height: "40px", font: "16px / 600 / 16px Pretendard", states: "rest only; not probed", use: "CashNote product site (cashnote.kr): 앱 다운로드 in the closing band, 129 x 40" }
  components_harvested: true
---

# Design System Inspiration of Korea Credit Data

## 1. Visual Theme & Atmosphere

Korea Credit Data (한국신용데이터, KCD) builds software and data services for Korean small-business owners (사장님). Its /about/ page gives the founding and the product in the company's own words. CEO 김동호 co-founded KCD in 2016. He is a serial founder who co-founded 아이디인큐 (now 오픈서베이) in 2011 while at Yonsei University. The first product answered one question owners ask every day, "그래서 오늘 통장에 돈이 얼마 들어올까?". In 2017 "카카오톡 챗봇 기반의 캐시노트가 탄생했습니다". CashNote (캐시노트) is still the company's service. KCD's /service/ page presents it with 캐시노트 바로가기, and cashnote.kr's footer links back to 한국신용데이터. The mission line is "우리는 사업을 시작하고 운영하고 성장시키는 모든 과정이 쉬워지도록 돕습니다". The company now describes itself as a group, the KCD 공동체: 한국평가정보 (KCS, a sole-proprietor credit bureau licensed in July 2022), 한국결제네트웍스 (KPN, payments), 아임유 (IMU, POS hardware and software), 한국사업자경험 (KMX, owner support) and 바틀드 (BOTTLED, a store near 강남역 where staff "become owners" and new CashNote features are tried first).

This reference covers two evidence domains. The corporate site (kcd.co.kr) is a white, editorial page system. Large white 52px headlines sit over full-bleed imagery. Section heads are 46px/700 in an ink (`#1e2137`), with navy (`#192d82`) eyebrows. Actions are quiet 6px-radius ghost buttons outlined in ink that fill navy on hover. The product site (cashnote.kr) is a different register. A blue hero band carries a 72px headline in `#f3faff`, and headings run in navy. Every action is a soft grey (`#f4f7f9`) button with a blue (`#2d91ff`) label. The two domains share Pretendard and one blue. On kcd.co.kr the blue marks where you are: the current header item, the current menu section, the 바로가기 links. On cashnote.kr it is the action label.

**Key Characteristics:**
- One blue, `#2d91ff`: the selected state on kcd.co.kr and the action label on cashnote.kr
- Navy `#192d82` for eyebrows, the ghost-button hover fill, the carousel arrows and CashNote headings
- Ink `#1e2137` for corporate text, menu items and ghost-button outlines; ghost labels in `#000000`
- Quiet corporate actions: 6px ghost buttons, 15px 32px padding, a navy fill on hover
- CashNote soft buttons: `#f4f7f9` fill, `#2d91ff` label, 12px and 16px radii
- Pretendard throughout, 300–700; the corporate `button` elements fall back to Arial

## Primary tasks

- Check consolidated card sales each morning without opening a spreadsheet
- Connect a sales source so the figures start arriving
- Work out how settlements run before opening a new business
- Take payments and buy supplies from the same place

## 2. Color Palette & Roles

### Why `#2d91ff` is the primary
- **Blue** (`#2d91ff`): the one colour KCD renders in a primary role on both domains. On kcd.co.kr it is the selected state: the current item in the header navigation and in the full-screen menu (/about/ and /service/), plus the four 바로가기 links on the KCD 공동체 cards. On cashnote.kr it is the label of every captured action (캐시노트 시작하기, both 앱 다운로드 buttons). The corporate site has no chromatic action fill; its actions are ink outlines that fill navy on hover. Navy is therefore recorded as `navy`, the hover and heading colour, and blue as the primary.

### Navy & Ink
- **Navy** (`#192d82`): section eyebrows on light bands, the hover and pressed fill of the ghost buttons (probe), the leadership tab's selected border, the /service/ chip outline and carousel arrows, and CashNote section and feature headings.
- **Ink** (`#1e2137`): the corporate body colour, headings, menu items and ghost outlines.
- **Ink Deep** (`#0c1120`): CashNote footer headings.
- **Ink Black** (`#000000`): the label colour the ghost buttons compute.

### Neutrals
- **Body** (`#44546f`): footer details on both domains and CashNote body copy.
- **Gray** (`#666666`): card descriptions on the corporate pages.
- **Muted** (`#728094`): the footer legal line and CashNote legal links.
- **Grey** (`#9f9f9f`): secondary menu links and the unselected leadership tab.
- **Faint** (`#a4aeba`): two secondary header links (one is 데이터 랩).
- **Hairline** (`#d9d9d9`): menu-row and leadership-tab borders.

### Surface & Light
- **White** (`#ffffff`): canvas, hero headlines, labels on navy.
- **Surface** (`#f4f7f9`): the CashNote soft-button fill.
- **Sky** (`#57a8ff`): eyebrows and card titles on the corporate site's dark bands.
- **On Blue** (`#f3faff`): the CashNote hero headline and lead on the blue band.

### Brand assets outside the tokens
- /about/ offers a media kit (KCD 공동체 브랜드 가이드 and 로고, 캐시노트 브랜드 가이드 and 로고). The files were not opened, so nothing is taken from them. A supplementary survey read the CashNote hero band as the primary blue behind a background image, and the corporate dark band as a deep navy. Neither band was recorded by the collector, so neither is a token.

## 3. Typography Rules

### Font Family
- **Sans:** `Pretendard`. Loaded and in use on 467 recorded elements across both domains (body, headings, cards, list items). The survey's `document.fonts` lists weights 400–700 on kcd.co.kr (300 on /service/) and 400, 600 and 700 on cashnote.kr. Distributed under the SIL Open Font License 1.1. No KCD or CashNote page opened names its typeface, so there is no official product-use claim.
- **Arial (live surface use, not a brand face):** 20 recorded elements compute the system Arial. They are the corporate site's `button` elements, which do not inherit Pretendard. The leadership tabs (C-level, Advisor) and the media-kit row headings render in Arial for that reason. It is a CSS inheritance gap, not a typeface choice.
- **Declared only:** `Plipop-Social-Icons` and `swiper-icons` (icon fonts, 0 text uses).

### Hierarchy

| Role | Size | Weight | Line height | Colour | Domain |
|------|------|--------|-------------|--------|--------|
| Product display | 72px | 700 | 86px | `#f3faff` | cashnote.kr hero |
| Product section | 56px | 700 | 68px | `#192d82` | cashnote.kr |
| Display | 52px | 700 | 66px | white | kcd.co.kr heroes |
| Section | 46px | 700 | 62px | `#1e2137` | kcd.co.kr |
| Product feature | 44px | 700 | 56px | `#192d82` | cashnote.kr |
| Service lead | 44px | 300 | 54px | `#1e2137` | kcd.co.kr /service/ |
| Card title | 22px | 600 | 32px | `#1e2137` / `#57a8ff` | kcd.co.kr |
| Eyebrow | 18px | 600 | 28px | `#192d82` / `#57a8ff` | kcd.co.kr |
| Menu | 18px | 700 | 18px | `#1e2137` / `#2d91ff` | kcd.co.kr |
| Lead | 18px | 400 | 30px | `#1e2137` | kcd.co.kr |
| Product button | 19px | 700 | 26px | `#2d91ff` | cashnote.kr |
| Button | 16px | 700 | — | `#000000` / `#1e2137` | kcd.co.kr ghost |
| Nav | 16px | 400 | 16px | white / `#2d91ff` | kcd.co.kr header |
| Body | 16px | 400 | 26px | `#666666` | kcd.co.kr |
| Caption | 14px | 400 | 24px | `#44546f` | footer |
| Fine | 13px | 400 | 20px | `#728094` | footer |

### Principles
- **Bold display, light introductions.** Headlines run at 700; /service/ switches its long introductions to Pretendard 300.
- **Eyebrow, heading, lead.** Each corporate section stacks an 18px/600 navy eyebrow, a 46px/700 heading and an 18px/400 lead with a 30px line.

## 4. Component Stylings

### Corporate buttons (kcd.co.kr)

**Ghost Button**: transparent, 1px `#1e2137` outline, `#000000` label, 6px radius, 15px 32px padding, 51px tall (59px on /service/), 16px/700. Hover and pressed: `#192d82` fill, `#ffffff` label, `#192d82` border, after a 0.2s transition (probe). Use: 서비스 보기, 자세히 보기, 캐시노트 바로가기, Google Play, Apple Store.

**Ghost Link**: the same shape as an anchor, label `#1e2137`, 48px tall; the same navy hover (probe). Use: 더보기.

**Ghost Inverse**: `#ffffff` outline and label on dark bands (데이터 랩 바로가기, 인재영입 중); rest only.

**Entity Link**: `#2d91ff` at 18px/700 with an arrow icon; no hover change (probe). Use: 바로가기 on the KCD 공동체 cards.

### Navigation & tabs (kcd.co.kr)

**Header Item**: white at 16px/400 over the hero; the current page's item is `#2d91ff`.

**Menu Item**: `#1e2137` at 18px/700, 25px bottom padding over a 1px `#d9d9d9` rule; the current section is `#2d91ff`.

**Leadership Tab**: 100px radius, padding 0 23px, 44px tall, 18px/500; unselected `#9f9f9f` label with a `#d9d9d9` border. Selected: `#ffffff` label with a `#192d82` border; its fill was not measurable, so it is not declared. No change on hover, pressed or focus (probe).

**Service Chip**: `#192d82` outline and label, 100px radius, 3px 25px padding, 38px tall, 18px/400.

**Carousel Arrow**: a 56 × 56 `#192d82` circle with a `#ffffff` arrow (/service/).

### CashNote buttons (cashnote.kr)

**Start Button**: `#f4f7f9` fill, `#2d91ff` label, 12px radius, padding 0 12px, 40px tall, 16px/600 (header).
**Download Button**: `#f4f7f9` fill, `#2d91ff` label, 16px radius, padding 0 16px, 48px tall, 19px/700 (hero).
**Footer Download**: `#f4f7f9` fill, `#2d91ff` label, 12px radius, 12px 28px padding, 40px tall.
None changes on hover, pressed or focus (probe on the first two).

---

**Verified:** 2026-09-30 (deterministic collector on three kcd.co.kr pages and cashnote.kr + fixed keyboard probe on three)
**Tier 1 sources:** https://kcd.co.kr/ | https://kcd.co.kr/about/ | https://kcd.co.kr/service/ | https://cashnote.kr/
**Tier 2 sources:** getdesign.md/kcd and styles.refero.design/?q=cashnote — no KCD or CashNote entry
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing
- Ghost buttons 15px 32px; menu rows 25px bottom padding; leadership tabs 0 23px; service chips 3px 25px
- CashNote soft buttons 0 12px (header), 0 16px (hero), 12px 28px (footer)

### Grid & Container
- kcd.co.kr: full-bleed hero image with a 52px white headline; sections of eyebrow, heading, lead and a ghost button at 1280px; a dark band for recruiting; a full-screen menu of 1380px rows
- /about/: mission stories as expandable 620px rows; four KCD 공동체 cards with 바로가기 links; the leadership switch; the media kit
- cashnote.kr: a blue hero band with the download button, then navy-headed feature sections and a closing download band

### Border Radius Scale
- 6px ghost buttons · 12px CashNote header and footer buttons · 16px CashNote hero button · 100px tabs and chips · 50% carousel arrows

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Recorded controls and text |
| Rule | 1px `#d9d9d9` | Menu rows, tab outlines |
| Fill on hover | `#192d82` | Ghost buttons |

The supplementary survey read one soft shadow on /service/ and one on cashnote.kr, on elements the collector did not record. Their values are in `.verification.md`; no shadow token is declared.

## 7. Do's and Don'ts

### Do
- Use `#2d91ff` for where-you-are on kcd.co.kr and for action labels on CashNote
- Outline corporate actions in `#1e2137` and fill them `#192d82` on hover
- Put CashNote actions on a `#f4f7f9` fill with a `#2d91ff` label
- Stack eyebrow (`#192d82`, 18px/600), heading (46px/700) and lead (18px/400/30px)
- Set text in Pretendard, and give buttons the family explicitly (the site's own buttons fall back to Arial)

### Don't
- Don't mix the domains' button styles: ghost outlines belong to kcd.co.kr, soft grey buttons to CashNote
- Don't fill corporate actions blue at rest; the site keeps blue for selection and links
- Don't add drop shadows to controls

## 8. Responsive Behavior

Only the 1440px desktop layout was captured; no breakpoint table is given.

### Touch Targets (measured at 1440px)
- Ghost buttons 48–59px tall; menu rows 44px; leadership tabs 44px; CashNote buttons 40–48px; carousel arrows 56px

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary (selected state, CashNote action label): `#2d91ff`
- Navy (eyebrows, hover fill, CashNote headings): `#192d82`
- Ink `#1e2137`; ghost label `#000000`; deep `#0c1120`
- Text ladder: `#44546f`, `#666666`, `#728094`, `#9f9f9f`, `#a4aeba`
- CashNote button fill `#f4f7f9`; hero text `#f3faff`; dark-band eyebrow `#57a8ff`; hairline `#d9d9d9`; white `#ffffff`

### Example Component Prompts
- "Corporate section: 18px/600 eyebrow in #192d82, 46px/700 heading in #1e2137 with a 62px line, 18px/400 lead with a 30px line, then a ghost button: transparent, 1px #1e2137 border, 6px radius, 15px 32px padding, 16px/700 label; on hover fill #192d82 with a #ffffff label."
- "CashNote header action: #f4f7f9 fill, #2d91ff label at 16px/600 Pretendard, 12px radius, 0 12px padding, 40px tall."
- "Full-screen menu: 18px/700 Pretendard items in #1e2137 with 25px bottom padding over a 1px #d9d9d9 rule; the current section in #2d91ff."

### Iteration Guide
1. Blue marks selection on kcd.co.kr and labels actions on CashNote
2. Navy is the hover fill and the heading colour on CashNote
3. Ghost 6px outlines for corporate; soft grey 12–16px buttons for CashNote
4. Pretendard everywhere, set explicitly on buttons

---

## 10. Voice & Tone

KCD talks about owners' days, not about finance. The /about/ page opens with "사업의 모든 순간 — 더 쉽게, 더 빠르게, 더 똑똑하게" and states the mission as helping every stage of starting, running and growing a business get easier. Its mission stories are plain first-person beliefs: "우리는 사업의 모든 순간이 지금보다 더 쉬워질 수 있다고 믿습니다." CashNote's page title keeps the same register: "사장님의 모든 순간 캐시노트로 쉽고 빠르고 똑똑하게".

| Context | Tone |
|---|---|
| Mission | Calm, first-person beliefs ("우리는 … 믿습니다") |
| Origin | A real owner's question: "그래서 오늘 통장에 돈이 얼마 들어올까?" |
| Group | Descriptive, one line per company (KCS, KPN, IMU, KMX, BOTTLED) |
| Actions | Short and direct: 서비스 보기, 자세히 보기, 더보기, 캐시노트 시작하기, 앱 다운로드 |

**Forbidden register:** sales urgency, unexplained financial jargon, fear-based pitching, talking down to 사장님.

## 11. Brand Narrative

The /about/ page argues that owners miss decisions because the information they need never reaches them. It names how to manage cash flow, how to win regulars, where to borrow more cheaply and which government support applies. KCD answers in three beliefs, each on its own row: every moment of a business can be easier; every owner should get the right information at the right time; and owners need a trustworthy data and business ecosystem, built with partners vetted to a high standard.

CashNote was the first answer. In 2017 it launched as a KakaoTalk chatbot that told owners what would land in their account that day. The group grew around it: a credit bureau (KCS, licensed for sole-proprietor credit in July 2022), payments (KPN), POS (IMU), owner support (KMX), and a working store (BOTTLED) where every employee goes through a "사장님 되어보기" onboarding. CTO 임정기, formerly of 우아한형제들, 쿠팡 and 네이버, has led technology since September 2022. 김동호 was named a World Economic Forum Young Global Leader in 2025. The home page's news list carries the current framing, for example "AI 승부는 모델보다 데이터… 220만 자영업 고객이 경쟁력" (매일경제). Headquarters: 서울특별시 강남구 테헤란로 127.

## 12. Principles

1. **Start from the owner's question.** *UI implication:* lead with the number or answer an owner wants today.
2. **Make every step easier.** *UI implication:* one quiet action per section; large, plain headings.
3. **Blue shows where you are.** *UI implication:* keep `#2d91ff` for selection and product actions, not decoration.
4. **Trust through restraint.** *UI implication:* ink outlines, navy hover, no shadows.

## 13. Personas

*Fictional archetypes informed by the owners KCD serves; not real people.*

**박은정, 47, 대구.** Runs a neighbourhood bakery and checks yesterday's card sales in CashNote each morning.

**김상호, 39, 인천.** Preparing to open a restaurant; wants to understand settlements before launch.

**이지연, 52, 부산.** Runs two shops and handles payments and supplies from one place.

## 14. States

Observed only:
- **Hover / pressed:** ghost button and ghost link fill `#192d82` with a `#ffffff` label; the entity link, leadership tabs and CashNote buttons show no change.
- **Selected:** `#2d91ff` on the current header item and menu section; the leadership tab's `#ffffff` label and `#192d82` border.
- **Focus:** no authored focus style. 더보기 and 바로가기 draw only the browser's default ring.

Empty, loading, error and success states belong to the CashNote app, which was not captured.

## 15. Motion & Easing

Measured transitions only:
- `all 0.2s ease` on the ghost buttons and ghost link (hover fill)
- `all 0s ease 0.2s` on the selected leadership tab
- `transform 0.5s, height 0.2s` on a 40 × 40 icon button present on every corporate page
- `opacity 1s, transform 1s` fade-up on CashNote's consultant button and `0.3s` on CashNote links, from the supplementary survey
- `all 0s` on the CashNote soft buttons

No durations or easings beyond these are declared.

<!--
Sources (2026-09-30): artifacts/reference-evidence/kcd.json (capturedAt 2026-09-30T11:08:27.287Z, four surfaces,
coverage 66); docs/research/2026-09-29-growth/raw/kcd-states-home.json, kcd-states-about.json,
kcd-states-cashnote.json (fixed keyboard probe). Narrative from kcd.co.kr/about/ (mission, 지나온 길,
KCD 공동체, leadership, media kit, footer) and kcd.co.kr/service/. Personas are fictional. Details in .verification.md.
-->
