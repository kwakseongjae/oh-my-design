---
id: ringle
name: Ringle
display_name_kr: 링글
country: KR
category: education
homepage: "https://www.ringleplus.com"
primary_color: "#3e00d9"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=ringleplus.com&sz=128"
verified: "2026-09-30"
added: "2026-06-11"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.ringleplus.com/ko/1on1", inspected: "2026-09-30" }
    - { id: surface-2, kind: marketing, url: "https://www.ringleplus.com/ko/student/landing/home", inspected: "2026-09-30" }
    - { id: surface-3, kind: corporate, url: "https://www.ringleplus.com/ko/company", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://www.ringleplus.com/ko/1on1", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://www.ringleplus.com/ko/student/landing/home", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://www.ringleplus.com/ko/company", captured: "2026-09-30" }
    - { id: ringle-probe-1on1, kind: product-surface, url: "https://www.ringleplus.com/ko/1on1", captured: "2026-09-30" }
    - { id: ringle-probe-company, kind: product-surface, url: "https://www.ringleplus.com/ko/company", captured: "2026-09-30" }
    - { id: ringle-cofounder, kind: official-doc, url: "https://www.ringleplus.com/ko/company/1", captured: "2026-09-30" }
    - { id: ringle-global-bd, kind: official-doc, url: "https://www.ringleplus.com/en/company/4", captured: "2026-09-30" }
    - { id: ringle-b2b, kind: official-doc, url: "https://www.ringleplus.com/ko/b2b", captured: "2026-09-30" }
    - { id: pretendard-license, kind: license, url: "https://raw.githubusercontent.com/orioncactus/pretendard/main/LICENSE", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &start { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-09-30" }
    "tokens.colors.on-primary": &startprobe { surface_id: home, source_id: ringle-probe-1on1, method: live-state-probe, selector: "a 링글 시작하기 (200 x 61): rest bg rgb(62, 0, 217), label h6 fg rgb(255, 255, 255) 18px/700, transition all 0s; hover and pressed unmeasured (a Channel Talk modal covered the pointer target even with --hide-overlays); focus (Tab #11) outline none -> rgb(0, 95, 204) auto 1px, the browser default", captured: "2026-09-30" }
    "tokens.colors.deep-violet": &band { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"19\"]", captured: "2026-09-30" }
    "tokens.colors.navy": &product { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"21\"]", captured: "2026-09-30" }
    "tokens.colors.app-violet": &apptrial { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"10\"]", captured: "2026-09-30" }
    "tokens.colors.promo-violet": &pill { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"9\"]", captured: "2026-09-30" }
    "tokens.colors.sky": &sky { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"23\"]", captured: "2026-09-30" }
    "tokens.colors.promo-red": &banner { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"13\"]", captured: "2026-09-30" }
    "tokens.colors.promo-yellow": &h3 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-09-30" }
    "tokens.colors.lilac": &h2 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.colors.ink": &h1 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h1", captured: "2026-09-30" }
    "tokens.colors.ink-soft": &topbar { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"0\"]", captured: "2026-09-30" }
    "tokens.colors.body": &lead { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.slate": &semib { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::p", captured: "2026-09-30" }
    "tokens.colors.muted": &bodyp { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.faint": &faint { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.app-slate": &appnav { surface_id: surface-3, source_id: ringle-probe-company, method: live-state-probe, selector: "a 기업 교육 (51.8 x 22): label span fg rgb(62, 66, 106) 14px/500; hover and pressed parent li bg rgba(0, 0, 0, 0) -> rgb(251, 251, 255); focus (Tab #9) outline none -> rgb(0, 95, 204) auto 1px, the browser default", captured: "2026-09-30" }
    "tokens.colors.app-muted": &appfoot { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::li", captured: "2026-09-30" }
    "tokens.colors.hairline": &tile { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"39\"]", captured: "2026-09-30" }
    "tokens.colors.nav-hover": *appnav
    "tokens.colors.white": &chip { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"42\"]", captured: "2026-09-30" }
    "tokens.typography.family.display": *h1
    "tokens.typography.family.body": *bodyp
    "tokens.typography.family.app": &apph1 { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h1", captured: "2026-09-30" }
    "tokens.typography.display-hero.size": *h1
    "tokens.typography.display-hero.weight": *h1
    "tokens.typography.display-hero.lineHeight": *h1
    "tokens.typography.display-hero.tracking": *h1
    "tokens.typography.display-hero.use": *h1
    "tokens.typography.section-xl.size": *h2
    "tokens.typography.section-xl.weight": *h2
    "tokens.typography.section-xl.lineHeight": *h2
    "tokens.typography.section-xl.tracking": *h2
    "tokens.typography.section-xl.use": *h2
    "tokens.typography.section.size": *h2
    "tokens.typography.section.weight": *h2
    "tokens.typography.section.lineHeight": *h2
    "tokens.typography.section.tracking": *h2
    "tokens.typography.section.use": *h2
    "tokens.typography.subsection.size": *h3
    "tokens.typography.subsection.weight": *h3
    "tokens.typography.subsection.lineHeight": *h3
    "tokens.typography.subsection.tracking": *h3
    "tokens.typography.subsection.use": *h3
    "tokens.typography.card-title.size": &h4 { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h4", captured: "2026-09-30" }
    "tokens.typography.card-title.weight": *h4
    "tokens.typography.card-title.lineHeight": *h4
    "tokens.typography.card-title.tracking": *h4
    "tokens.typography.card-title.use": *h4
    "tokens.typography.button-lg.size": *startprobe
    "tokens.typography.button-lg.weight": *startprobe
    "tokens.typography.button-lg.use": *startprobe
    "tokens.typography.lead.size": *lead
    "tokens.typography.lead.weight": *lead
    "tokens.typography.lead.lineHeight": *lead
    "tokens.typography.lead.tracking": *lead
    "tokens.typography.lead.use": *lead
    "tokens.typography.body-strong.size": *semib
    "tokens.typography.body-strong.weight": *semib
    "tokens.typography.body-strong.lineHeight": *semib
    "tokens.typography.body-strong.tracking": *semib
    "tokens.typography.body-strong.use": *semib
    "tokens.typography.body.size": *bodyp
    "tokens.typography.body.weight": *bodyp
    "tokens.typography.body.lineHeight": *bodyp
    "tokens.typography.body.tracking": *bodyp
    "tokens.typography.body.use": *bodyp
    "tokens.typography.caption.size": &cap { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.caption.weight": *cap
    "tokens.typography.caption.lineHeight": *cap
    "tokens.typography.caption.tracking": *cap
    "tokens.typography.caption.use": *cap
    "tokens.typography.app-title.size": *apph1
    "tokens.typography.app-title.weight": *apph1
    "tokens.typography.app-title.lineHeight": *apph1
    "tokens.typography.app-title.use": *apph1
    "tokens.typography.app-body.size": &appli { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::li", captured: "2026-09-30" }
    "tokens.typography.app-body.weight": *appli
    "tokens.typography.app-body.lineHeight": *appli
    "tokens.typography.app-body.use": *appli
    "tokens.typography.app-label.size": *appfoot
    "tokens.typography.app-label.weight": *appfoot
    "tokens.typography.app-label.lineHeight": *appfoot
    "tokens.typography.app-label.use": *appfoot
    "tokens.spacing.action-y": *band
    "tokens.spacing.action-x": *band
    "tokens.spacing.pill-y": *pill
    "tokens.spacing.pill-x": *pill
    "tokens.spacing.banner-y": *banner
    "tokens.spacing.banner-x": *banner
    "tokens.spacing.chip-y": *chip
    "tokens.spacing.chip-x": *chip
    "tokens.spacing.header-y": *apptrial
    "tokens.spacing.header-x": *apptrial
    "tokens.spacing.nav-y": *appli
    "tokens.spacing.nav-x": *appli
    "tokens.spacing.tile": *tile
    "tokens.rounded.nav": *appli
    "tokens.rounded.chip": *chip
    "tokens.rounded.header-button": *apptrial
    "tokens.rounded.tile": *tile
    "tokens.rounded.cta": *start
    "tokens.rounded.pill": *pill
    "tokens.rounded.banner": *banner
    "tokens.rounded.arrow": &arrow { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"16\"]", captured: "2026-09-30" }
    "tokens.rounded.circle": &circle { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"49\"]", captured: "2026-09-30" }
    "tokens.components.start-button.type": *start
    "tokens.components.start-button.bg": *start
    "tokens.components.start-button.fg": *startprobe
    "tokens.components.start-button.radius": *start
    "tokens.components.start-button.height": *start
    "tokens.components.start-button.font": *startprobe
    "tokens.components.start-button.states": *startprobe
    "tokens.components.start-button.use": *start
    "tokens.components.band-button.type": *band
    "tokens.components.band-button.bg": *band
    "tokens.components.band-button.radius": *band
    "tokens.components.band-button.padding": *band
    "tokens.components.band-button.height": *band
    "tokens.components.band-button.states": *band
    "tokens.components.band-button.use": *band
    "tokens.components.product-button.type": *product
    "tokens.components.product-button.bg": *product
    "tokens.components.product-button.radius": *product
    "tokens.components.product-button.height": *product
    "tokens.components.product-button.states": *product
    "tokens.components.product-button.use": *product
    "tokens.components.promo-pill.type": *pill
    "tokens.components.promo-pill.bg": *pill
    "tokens.components.promo-pill.fg": &pillprobe { surface_id: home, source_id: ringle-probe-1on1, method: live-state-probe, selector: "a 9회말 역전 이벤트 특가 확인하기 (660 x 80): rest bg rgb(84, 66, 251), label h5 fg rgb(255, 255, 255) 20px/700, transition all 0s; hover and pressed unmeasured (no point inside the viewport); focus (Tab #10) outline none -> rgb(0, 95, 204) auto 1px, the browser default", captured: "2026-09-30" }
    "tokens.components.promo-pill.radius": *pill
    "tokens.components.promo-pill.padding": *pill
    "tokens.components.promo-pill.height": *pill
    "tokens.components.promo-pill.font": *pillprobe
    "tokens.components.promo-pill.states": *pillprobe
    "tokens.components.promo-pill.use": *pill
    "tokens.components.promo-banner.type": *banner
    "tokens.components.promo-banner.bg": *banner
    "tokens.components.promo-banner.radius": *banner
    "tokens.components.promo-banner.padding": *banner
    "tokens.components.promo-banner.size": *banner
    "tokens.components.promo-banner.use": *banner
    "tokens.components.top-bar.type": *topbar
    "tokens.components.top-bar.bg": *topbar
    "tokens.components.top-bar.size": *topbar
    "tokens.components.top-bar.use": *topbar
    "tokens.components.site-header.type": &headerprobe { surface_id: home, source_id: ringle-probe-1on1, method: live-state-probe, selector: "a 튜터 (35.5 x 30.4): label p fg rgb(13, 13, 13) 14px/500; ancestor up3 div.framer-1s4jyvg bg rgb(255, 255, 255), box-shadow rgba(20, 15, 51, 0.05) 0px 4px 30px 0px; hover and pressed unmeasured (Channel Talk modal backdrop on top); focus (Tab #3) outline none -> rgb(0, 95, 204) auto 1px, the browser default", captured: "2026-09-30" }
    "tokens.components.site-header.bg": *headerprobe
    "tokens.components.site-header.shadow": *headerprobe
    "tokens.components.site-header.use": *headerprobe
    "tokens.components.nav-link.type": *headerprobe
    "tokens.components.nav-link.fg": *headerprobe
    "tokens.components.nav-link.font": *headerprobe
    "tokens.components.nav-link.height": *headerprobe
    "tokens.components.nav-link.states": *headerprobe
    "tokens.components.nav-link.use": *headerprobe
    "tokens.components.app-trial-button.type": *apptrial
    "tokens.components.app-trial-button.bg": *apptrial
    "tokens.components.app-trial-button.fg": &apptrialprobe { surface_id: surface-3, source_id: ringle-probe-company, method: live-state-probe, selector: "button 무료 체험하기 (108 x 40): rest bg rgb(60, 43, 172), label fg rgb(255, 255, 255) 14px/500, transition all 0s; hover, pressed and focus (Tab #11) no change across self, 1 descendant and 3 ancestor levels", captured: "2026-09-30" }
    "tokens.components.app-trial-button.radius": *apptrial
    "tokens.components.app-trial-button.padding": *apptrial
    "tokens.components.app-trial-button.height": *apptrial
    "tokens.components.app-trial-button.font": *apptrialprobe
    "tokens.components.app-trial-button.states": *apptrialprobe
    "tokens.components.app-trial-button.use": *apptrialprobe
    "tokens.components.app-login-button.type": &login { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"11\"]", captured: "2026-09-30" }
    "tokens.components.app-login-button.bg": *login
    "tokens.components.app-login-button.fg": &loginprobe { surface_id: surface-3, source_id: ringle-probe-company, method: live-state-probe, selector: "button 로그인 (70.3 x 40): rest bg rgb(255, 255, 255), border 1px solid rgb(60, 43, 172), radius 5px, padding 8px 16px, label fg rgb(60, 43, 172) 14px/500; hover, pressed and focus (Tab #12) no change across self, 1 descendant and 3 ancestor levels", captured: "2026-09-30" }
    "tokens.components.app-login-button.border": *login
    "tokens.components.app-login-button.radius": *login
    "tokens.components.app-login-button.padding": *login
    "tokens.components.app-login-button.height": *login
    "tokens.components.app-login-button.font": *loginprobe
    "tokens.components.app-login-button.states": *loginprobe
    "tokens.components.app-login-button.use": *loginprobe
    "tokens.components.app-nav-item.type": *appli
    "tokens.components.app-nav-item.fg": *appnav
    "tokens.components.app-nav-item.radius": *appli
    "tokens.components.app-nav-item.padding": *appli
    "tokens.components.app-nav-item.font": *appnav
    "tokens.components.app-nav-item.hover": *appnav
    "tokens.components.app-nav-item.pressed": *appnav
    "tokens.components.app-nav-item.states": *appnav
    "tokens.components.app-nav-item.use": *appnav
    "tokens.components.tile-button.type": *tile
    "tokens.components.tile-button.bg": *tile
    "tokens.components.tile-button.border": *tile
    "tokens.components.tile-button.radius": *tile
    "tokens.components.tile-button.padding": *tile
    "tokens.components.tile-button.height": *tile
    "tokens.components.tile-button.font": *tile
    "tokens.components.tile-button.states": *tile
    "tokens.components.tile-button.use": *tile
    "tokens.components.filter-chip.type": *chip
    "tokens.components.filter-chip.bg": *chip
    "tokens.components.filter-chip.radius": *chip
    "tokens.components.filter-chip.padding": *chip
    "tokens.components.filter-chip.height": *chip
    "tokens.components.filter-chip.states": *chip
    "tokens.components.filter-chip.use": *chip
    "tokens.components.carousel-arrow.type": *arrow
    "tokens.components.carousel-arrow.bg": *arrow
    "tokens.components.carousel-arrow.radius": *arrow
    "tokens.components.carousel-arrow.size": *arrow
    "tokens.components.carousel-arrow.states": *arrow
    "tokens.components.carousel-arrow.use": *arrow
    "tokens.components.round-button.type": *circle
    "tokens.components.round-button.bg": *circle
    "tokens.components.round-button.radius": *circle
    "tokens.components.round-button.size": *circle
    "tokens.components.round-button.states": *circle
    "tokens.components.round-button.use": *circle
    "tokens.components.story-card.type": &card { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::article", captured: "2026-09-30" }
    "tokens.components.story-card.radius": *card
    "tokens.components.story-card.size": *card
    "tokens.components.story-card.use": *card
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#3e00d9"
    on-primary: "#ffffff"
    deep-violet: "#1d0788"
    navy: "#120968"
    app-violet: "#3c2bac"
    promo-violet: "#5442fb"
    sky: "#1170ff"
    promo-red: "#e80023"
    promo-yellow: "#ffe999"
    lilac: "#aa9dff"
    ink: "#000000"
    ink-soft: "#0d0d0d"
    body: "#242730"
    slate: "#4f545c"
    muted: "#6e737c"
    faint: "#9ea3ab"
    app-slate: "#3e426a"
    app-muted: "#80839e"
    hairline: "#e4e7f4"
    nav-hover: "#fbfbff"
    white: "#ffffff"
  typography:
    family: { display: "Pretendard JP Bold", body: "Pretendard JP Medium", app: "Pretendard Variable" }
    display-hero: { size: 50, weight: 700, lineHeight: 1.25, tracking: -2.25, use: "Hero headline on /ko/1on1 and /ko/student/landing/home (영어는 실전처럼), Pretendard JP Bold, 62.5px line, in #000000; dark-band headlines use the same style in #ffffff with a lilac second line" }
    section-xl: { size: 48, weight: 700, lineHeight: 1.25, tracking: -1.92, use: "Large stacked section headlines on /ko/1on1, Pretendard JP Bold, 60px line" }
    section: { size: 40, weight: 700, lineHeight: 1.2, tracking: -1.6, use: "Section headlines on both Framer pages, Pretendard JP Bold, 48px line, in #000000 or #0d0d0d" }
    subsection: { size: 32, weight: 700, lineHeight: 1.25, tracking: -0.96, use: "Feature headlines on /ko/1on1, Pretendard JP Bold, 40px line; the accented half of a headline turns #3e00d9" }
    card-title: { size: 26, weight: 700, lineHeight: 1.3, tracking: -0.65, use: "Card and list headings on /ko/student/landing/home (60 instances), Pretendard JP Bold, 33.8px line" }
    button-lg: { size: 18, weight: 700, use: "링글 시작하기 label, a Framer text element inside the button, in #ffffff" }
    lead: { size: 17, weight: 500, lineHeight: 1.4, tracking: -0.425, use: "Review and story copy on /ko/1on1, Pretendard JP Medium, 23.8px line, in #242730" }
    body-strong: { size: 16, weight: 600, lineHeight: 1.6, tracking: -0.4, use: "Descriptions under the card headings on /ko/student/landing/home, Pretendard JP SemiBold, 25.6px line, in #4f545c" }
    body: { size: 14, weight: 500, lineHeight: 1.6, tracking: -0.35, use: "Running copy on the Framer pages, Pretendard JP Medium, 22.4px line, in #6e737c" }
    caption: { size: 10, weight: 500, lineHeight: 1.6, tracking: -0.2, use: "Review metadata on /ko/1on1, Pretendard JP Medium, 16px line, in #6e737c" }
    app-title: { size: 24, weight: 700, lineHeight: 1.5, use: "Section headings on /ko/company, Pretendard Variable, 36px line, in #000000" }
    app-body: { size: 16, weight: 400, lineHeight: 1.5, use: "Header navigation rows on /ko/company, Pretendard Variable, 24px line" }
    app-label: { size: 14, weight: 500, lineHeight: 1.57, use: "Footer lists and header button labels on /ko/company, Pretendard Variable, 22px line, footer lists in #80839e" }
  spacing: { action-y: 16, action-x: 24, pill-y: 14, pill-x: 16, banner-y: 60, banner-x: 80, chip-y: 10, chip-x: 16, header-y: 8, header-x: 16, nav-y: 4, nav-x: 6, tile: 12 }
  rounded: { nav: 4, chip: 4, header-button: 5, tile: 7, cta: 8, pill: 16, banner: 24, arrow: 40, circle: 100 }
  components:
    start-button: { type: button, bg: "#3e00d9", fg: "#ffffff", radius: "8px", height: "61px", font: "18px / 700 Pretendard JP Bold (label)", states: "focus (Tab #11) draws only the browser's default ring; hover and pressed are unmeasured because a Channel Talk modal covered the button even with --hide-overlays; transition all 0s", use: "링글 시작하기, the primary action: 200 x 61 in the hero of /ko/1on1 and /ko/student/landing/home, repeated at 320 x 61 three more times down /ko/1on1" }
    band-button: { type: button, bg: "#1d0788", radius: "8px", padding: "16px 24px", height: "57px", states: "rest only; the bundle's pressed frame changes nothing but the browser's default link colour, which is not a brand state", use: "320 x 57 actions inside the product bands of /ko/1on1 (captures 19 and 20); the label element was not recorded" }
    product-button: { type: button, bg: "#120968", radius: "8px", height: "60px", states: "rest only; the collector's pseudo-state pass on /ko/student/landing/home stalled and was logged unmeasured, and the probe did not reach this control", use: "200 x 60 더 알아보기-sized actions in the product list of /ko/student/landing/home; siblings fill #3e00d9, #1d0788 and #1170ff; labels not recorded" }
    promo-pill: { type: button, bg: "#5442fb", fg: "#ffffff", radius: "16px", padding: "14px 16px", height: "80px", font: "20px / 700 Pretendard JP Bold (label)", states: "focus (Tab #10) draws only the browser's default ring; hover and pressed unmeasured", use: "9회말 역전 이벤트 특가 확인하기, a 660 x 80 promotion link under the hero of both Framer pages; time-boxed campaign" }
    promo-banner: { type: card, bg: "#e80023", radius: "24px", padding: "60px 0px 60px 80px", size: "1180px x 170px", use: "Promotion banner card on both Framer pages with a #ffe999 32px heading; time-boxed campaign" }
    top-bar: { type: card, bg: "#0d0d0d", size: "1440px x 44px", use: "Full-width countdown bar at the top of both Framer pages (내일 마감! 9월 마지막 역전 찬스, 최대 59% 할인!); time-boxed campaign" }
    site-header: { type: card, bg: "#ffffff", shadow: "0px 4px 30px rgba(20, 15, 51, 0.05)", use: "Header container of /ko/1on1 behind the navigation, the only shadow observed" }
    nav-link: { type: tab, fg: "#0d0d0d", font: "14px / 500 Pretendard JP Medium", height: "30px", states: "focus (Tab #3) draws only the browser's default ring; hover and pressed unmeasured (the Channel Talk modal backdrop was on top)", use: "Header navigation of the Framer pages (튜터, 교재, 학습 체계, AI, 후기, 가격, 기업 교육)" }
    app-trial-button: { type: button, bg: "#3c2bac", fg: "#ffffff", radius: "5px", padding: "8px 16px", height: "40px", font: "14px / 500 Pretendard Variable", states: "hover, pressed and focus (Tab #11) show no change across the button, its label and three ancestor levels; transition all 0s", use: "무료 체험하기 in the header of /ko/company, the Next.js web template, 108 x 40 in the probe" }
    app-login-button: { type: button, bg: "#ffffff", fg: "#3c2bac", border: "1px solid #3c2bac", radius: "5px", padding: "8px 16px", height: "40px", font: "14px / 500 Pretendard Variable", states: "hover, pressed and focus (Tab #12) show no change", use: "로그인 beside 무료 체험하기 in the /ko/company header" }
    app-nav-item: { type: tab, fg: "#3e426a", radius: "4px", padding: "4px 6px", font: "14px / 500 Pretendard Variable", hover: "row bg #fbfbff", pressed: "row bg #fbfbff", states: "hover and pressed tint the parent row #fbfbff; focus (Tab #9) draws only the browser's default ring", use: "Header navigation of /ko/company (1:1 화상영어, 튜터, 교재, 기업 교육)" }
    tile-button: { type: button, bg: "#ffffff", border: "1px solid #e4e7f4", radius: "7px", padding: "12px", height: "48px", font: "14px / 500 Pretendard Variable", states: "rest on four captured instances; no state frame and no probe read", use: "112 x 48 white tiles in a row of four near the foot of /ko/company" }
    filter-chip: { type: button, bg: "#ffffff", radius: "4px", padding: "10px 16px", height: "42px", states: "rest on four captured instances; the pseudo-state pass on this page stalled, so hover and pressed are unmeasured", use: "White 112 x 42 chips in a row of four on /ko/student/landing/home (captures 42-45); labels not recorded" }
    carousel-arrow: { type: button, bg: "rgba(0, 0, 0, 0.2)", radius: "40px", size: "40px x 40px", states: "rest on two captured instances; hover and pressed unmeasured", use: "Translucent round arrows over the hero carousel of /ko/student/landing/home" }
    round-button: { type: button, bg: "#ffffff", radius: "100px", size: "40px x 40px", states: "rest only; hover and pressed unmeasured", use: "White round control after the chip row on /ko/student/landing/home" }
    story-card: { type: card, radius: "8px", size: "333px x 331px", use: "Story cards on /ko/1on1; their fill is imagery" }
  components_harvested: true
---

# Design System Inspiration of Ringle

## 1. Visual Theme & Atmosphere

Ringle (링글) is a Korean English-tutoring company that sells 1:1 video lessons with tutors from top English-speaking universities ("명문대 튜터와의 1:1 화상영어"), plus AI 스피킹, an AI speaking test, a corporate English programme and 링글 틴즈 for teenagers. The company behind it, (주)링글잉글리시에듀케이션서비스, is run by its two co-founders and chief executives, 이성파 and 이승훈. Its own team page says 이승훈 started Ringle during his Stanford MBA after six years at BCG, and that the company keeps its head office on 테헤란로 in Seoul with a branch in San Mateo, near Stanford. It states its mission as "누구나 영어의 장벽을 넘어 더 큰 기회를 잡을 수 있는 세상", and its Global BD page says more than 30% of revenue comes from outside Korea. The product pitch is career English, not casual chat: "꿈꾸던 영어실력과 커리어를 만드는 일하는 사람을 위한 영어, 링글".

The marketing surface now lives on two Framer pages: /ko/1on1, where ringleplus.com lands, and /ko/student/landing/home. They set bold Korean headlines in Pretendard JP Bold with very tight tracking (50px at -2.25px on the hero) over white, in black `#000000` and `#0d0d0d`, and put every primary action in one electric violet, `#3e00d9`. Deeper violets `#1d0788` and `#120968` fill the secondary actions inside product bands, and the accented half of a headline switches to `#3e00d9`. Running copy is quiet grey Pretendard JP Medium, `#6e737c` at 14px. The company page (/ko/company) comes from a different build: Ringle's Next.js web template, set in Pretendard Variable, whose header still carries the earlier indigo `#3c2bac`. The June 2026 record put `#3c2bac` on the same 61px 링글 시작하기 button that now computes `#3e00d9`. Between those dates the marketing CTA moved to a brighter violet, while the app template kept the older one.

Promotions are loud and time-boxed. At capture a black `#0d0d0d` countdown bar, a `#5442fb` pill and a red `#e80023` banner card with `#ffe999` type ran the "9회말 역전 이벤트" sale, up to 59% off. Everything else is flat. The one shadow observed is a faint `rgba(20, 15, 51, 0.05)` glow under the header.

**Key Characteristics:**
- One electric violet `#3e00d9` for every 링글 시작하기 and for accented headline words; deeper `#1d0788` and `#120968` for secondary product actions
- Pretendard JP Bold 700 headlines with very tight tracking: -2.25px at 50px, -1.92px at 48px, -1.6px at 40px, -0.96px at 32px
- Grey Pretendard JP Medium copy (`#6e737c`, `#242730`, `#4f545c`) under black `#000000` headings
- 8px corners on primary actions, 16px on the promotion pill, 24px on the banner card, 4px on chips
- A second template on /ko/company: Pretendard Variable, indigo `#3c2bac` header button, 5px corners, hairline `#e4e7f4`
- Time-boxed campaign chrome in `#0d0d0d`, `#5442fb`, `#e80023` and `#ffe999`
- Flat surfaces; the header's `rgba(20, 15, 51, 0.05)` glow is the only shadow

## Primary tasks

- Book a 1:1 video lesson with a tutor and talk for twenty to forty minutes
- Save discussion material from the library to use in a lesson
- Practice speaking with the AI app on your own schedule
- Roll out English lessons to employees and measure how their speaking improves

## 2. Color Palette & Roles

Every token below was read on 2026-09-30 from /ko/1on1, /ko/student/landing/home and /ko/company by the deterministic collector, and label colours and states by the fixed keyboard probe. Tokens describe Ringle's public web pages; the lesson app behind the login was not opened.

### Primary
- **Ringle Violet** (`#3e00d9`): The fill of 링글 시작하기, the primary action, which is 200 × 61 in the hero of both Framer pages and repeats at 320 × 61 three more times down /ko/1on1. The same violet fills two of the "더 알아보기" actions on /ko/student/landing/home and colours the accented half of feature headlines. It is the primary because it is the colour of the one action the homepage asks for, in every place it asks. The older `#3c2bac` survives only in the /ko/company header, a different template.
- **On Primary** (`#ffffff`): The 18px/700 label inside 링글 시작하기 and the label of the promotion pill.

### Secondary violets
- **Deep Violet** (`#1d0788`): 320 × 57 actions inside the product bands of /ko/1on1 and a 200 × 60 action on the landing page.
- **Navy** (`#120968`): A 200 × 60 action on the landing page, dark 48px headlines on /ko/1on1 and 16px bold link text.
- **App Violet** (`#3c2bac`): The fill of 무료 체험하기 and the outline and label of 로그인 in the /ko/company header.
- **Lilac** (`#aa9dff`): The second line of white headlines on dark bands. `#7665f7` plays the same role once.
- **Sky** (`#1170ff`): One 200 × 60 action with a nine-character label in the product list of /ko/student/landing/home. The collector did not record the label.

### Campaign (time-boxed)
- **Promo Violet** (`#5442fb`): The 660 × 80 "9회말 역전 이벤트 특가 확인하기" pill.
- **Promo Red** (`#e80023`): The 1180 × 170 promotion banner card.
- **Promo Yellow** (`#ffe999`): The 32px heading on that card.
- **Ink Soft** (`#0d0d0d`): The 44px countdown bar across the top. The same near-black also sets navigation labels and many headings.

### Text
- **Ink** (`#000000`): Hero and section headlines.
- **Body** (`#242730`): Review and story copy at 17px.
- **Slate** (`#4f545c`): Card descriptions at 16px SemiBold.
- **Muted** (`#6e737c`): Running copy at 14px and review metadata at 10px. This is the most frequent text colour on the Framer pages.
- **Faint** (`#9ea3ab`): The quietest copy and metadata.
- **App Slate** (`#3e426a`): Navigation labels on /ko/company.
- **App Muted** (`#80839e`): Footer lists on /ko/company.

### Neutral & Surface
- **White** (`#ffffff`): The page, the header, chips and round controls.
- **Hairline** (`#e4e7f4`): The 1px border of the white tiles on /ko/company, and its default border colour.
- **Nav Hover** (`#fbfbff`): The row tint behind a /ko/company navigation item on hover and press.

### Brand assets, not tokens
- The Ringle logo was not measured; no logo colour is claimed. Framer links report the browser's default link colours (`#0000ee`, and `#ff0000` while pressed) on elements whose visible text is a child. Those are not brand colours.

## 3. Typography Rules

### Font Family
- **Live surface use**: `Pretendard JP Medium` (282 observed uses), `Pretendard JP Bold` (204) and `Pretendard JP SemiBold` (42), all `loaded / high`, on the two Framer pages. They are uploaded to Framer as custom fonts and served from `framerusercontent.com/assets/` (for example `gTPCJvFiJP72BBM1FJNS8i0ZKM.woff2` for Bold and `ZSHRGvJTyXobYS1wVqLXesolkY.woff2` for Medium). `Pretendard Variable` (78 uses, `loaded / high`) sets /ko/company, served from `cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6`. `Source Serif 4` is loaded and computed on 3 elements of the Framer pages.
- **Official distributed font assets**: Pretendard is Kil Hyung-jin's open-source family (orioncactus/pretendard). Its LICENSE, opened on 2026-09-30, reserves the font name 'Pretendard', lists works including M PLUS 1 among the included sources, and states the SIL Open Font License 1.1. The identification of Ringle's files rests on the declared family names; the files' name tables were not inspected.
- **Official product use**: no Ringle page opened this session names its typefaces, so no statement of official product use is made.
- **Declared only (no visible use)**: `Pretendard JP ExtraBold` has an `@font-face` rule on the Framer pages (`NTnDzxbPhY5dHz1DNJIl5Jgf9o0.woff2`), but no captured element computes it. Framer also declares Archivo, Archivo Narrow, Barlow Semi Condensed, Charis SIL, Inter, Noto Sans KR and others with 0 uses. /ko/company declares the Feather icon font.
- **Unresolved**: one element computes `CUSTOM;Pretendard Medium`. Framer's wrapper elements compute the browser default `sans-serif` at 12px; the text inside them is set in the Pretendard JP faces above.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Observed on |
|------|------|------|--------|-------------|----------|-------------|
| Display Hero | Pretendard JP Bold | 50px | 700 | 62.5px (1.25) | -2.25px | Hero of both Framer pages, `#000000` |
| Section XL | Pretendard JP Bold | 48px | 700 | 60px (1.25) | -1.92px | Stacked headlines on /ko/1on1 |
| Section | Pretendard JP Bold | 40px | 700 | 48px (1.2) | -1.6px | Section headlines |
| Subsection | Pretendard JP Bold | 32px | 700 | 40px (1.25) | -0.96px | Feature headlines, accent `#3e00d9` |
| Card Title | Pretendard JP Bold | 26px | 700 | 33.8px (1.3) | -0.65px | Cards on the landing page |
| App Title | Pretendard Variable | 24px | 700 | 36px (1.5) | normal | /ko/company headings |
| Button Large | Pretendard JP Bold | 18px | 700 | — | — | 링글 시작하기 label |
| Lead | Pretendard JP Medium | 17px | 500 | 23.8px (1.4) | -0.425px | Reviews, `#242730` |
| Body Strong | Pretendard JP SemiBold | 16px | 600 | 25.6px (1.6) | -0.4px | Card descriptions, `#4f545c` |
| App Body | Pretendard Variable | 16px | 400 | 24px (1.5) | normal | /ko/company navigation rows |
| Body | Pretendard JP Medium | 14px | 500 | 22.4px (1.6) | -0.35px | Running copy, `#6e737c` |
| App Label | Pretendard Variable | 14px | 500 | 22px (1.57) | normal | /ko/company footer and buttons |
| Caption | Pretendard JP Medium | 10px | 500 | 16px (1.6) | -0.2px | Review metadata |

### Principles
- **Bold, tracked tight**: every Framer headline is weight 700, with tracking at about -4.5% of the size at 48–50px and -3% at 32px.
- **Medium for reading**: copy runs in Pretendard JP Medium or SemiBold, never Regular, in cool greys.
- **Two templates**: the Framer marketing pages use the Pretendard JP faces; the Next.js company page uses Pretendard Variable at 400 and 500 with untracked text.

## 4. Component Stylings

### Buttons

**Start button (primary)**
- Background: `#3e00d9`
- Text: `#ffffff`
- Radius: 8px
- Height: 61px
- Font: 18px 700 Pretendard JP Bold
- States: focus shows the browser's default ring; hover and pressed were covered by a Channel Talk modal and are unmeasured
- Use: 링글 시작하기, 200 × 61 in the hero of both Framer pages and 320 × 61 three more times on /ko/1on1

**Band button**
- Background: `#1d0788`
- Radius: 8px
- Padding: 16px 24px
- Height: 57px
- Use: Actions inside the product bands of /ko/1on1

**Product button**
- Background: `#120968`
- Radius: 8px
- Height: 60px
- Use: The 200 × 60 actions in the landing page's product list; siblings fill `#3e00d9`, `#1d0788` and `#1170ff`

**Promotion pill**
- Background: `#5442fb`
- Text: `#ffffff`
- Radius: 16px
- Padding: 14px 16px
- Height: 80px
- Font: 20px 700 Pretendard JP Bold
- Use: 9회말 역전 이벤트 특가 확인하기, 660 × 80, time-boxed

**App trial button**
- Background: `#3c2bac`
- Text: `#ffffff`
- Radius: 5px
- Padding: 8px 16px
- Height: 40px
- Font: 14px 500 Pretendard Variable
- States: no hover, pressed or focus change within the probe's scope
- Use: 무료 체험하기 in the /ko/company header

**App login button**
- Background: `#ffffff`
- Text: `#3c2bac`
- Border: 1px solid `#3c2bac`
- Radius: 5px
- Padding: 8px 16px
- Height: 40px
- Font: 14px 500 Pretendard Variable
- Use: 로그인 in the /ko/company header

**Tile button**
- Background: `#ffffff`
- Border: 1px solid `#e4e7f4`
- Radius: 7px
- Padding: 12px
- Height: 48px
- Use: Four 112 × 48 tiles near the foot of /ko/company

**Filter chip**
- Background: `#ffffff`
- Radius: 4px
- Padding: 10px 16px
- Height: 42px
- Use: Four 112 × 42 chips on /ko/student/landing/home

**Carousel arrow**
- Background: `rgba(0, 0, 0, 0.2)`
- Radius: 40px
- Size: 40 × 40
- Use: Hero carousel of /ko/student/landing/home

**Round button**
- Background: `#ffffff`
- Radius: 100px
- Size: 40 × 40
- Use: Round control after the chip row on the landing page

### Navigation

**Site header**
- Background: `#ffffff`
- Shadow: 0px 4px 30px `rgba(20, 15, 51, 0.05)`
- Use: The header container of /ko/1on1

**Nav link (Framer)**
- Text: `#0d0d0d`
- Font: 14px 500 Pretendard JP Medium
- Height: 30px
- States: focus shows the browser's default ring; hover and pressed unmeasured
- Use: 튜터, 교재, 학습 체계, AI, 후기, 가격, 기업 교육

**Nav item (/ko/company)**
- Text: `#3e426a`
- Radius: 4px
- Padding: 4px 6px
- Font: 14px 500 Pretendard Variable
- Hover: row background `#fbfbff`
- Use: Header navigation of the company page

### Cards & Banners

**Promotion banner**
- Background: `#e80023`
- Radius: 24px
- Padding: 60px 0px 60px 80px
- Size: 1180 × 170
- Use: Campaign card with a `#ffe999` heading, time-boxed

**Top bar**
- Background: `#0d0d0d`
- Size: 1440 × 44
- Use: Countdown bar across the top of both Framer pages, time-boxed

**Story card**
- Radius: 8px
- Size: 333 × 331
- Use: Image-filled story cards on /ko/1on1

---

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out ringleplus.com pages plus fixed keyboard-probe state reads and first-party context)
**Tier 1 sources:** https://www.ringleplus.com/ko/1on1 ; https://www.ringleplus.com/ko/student/landing/home ; https://www.ringleplus.com/ko/company ; https://www.ringleplus.com/ko/company/1
**Tier 2 sources:** getdesign.md/ringle (HTTP 200, the name does not appear in the response) and styles.refero.design/?q=ringle (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Observed paddings: 16px 24px on band buttons, 14px 16px on the promotion pill, 60px 0 60px 80px on the banner card, 10px 16px on chips, 8px 16px on /ko/company header buttons, 4px 6px on its navigation rows, 12px in its tiles.
- The Framer primary button computes 0 padding; its size comes from the layout (200 × 61 or 320 × 61).

### Grid & Container
- Content sits in an 1180px column at the 1440px viewport, the width of the section headlines and the banner card.
- /ko/1on1 is a long page (about 26,700px) of alternating white and dark bands; the landing page stacks product blocks, each with a heading and a 200 × 60 action.

### Whitespace Philosophy
- Headlines carry the page; large bold type with generous space between bands, and grey copy kept short beside it.

### Border Radius Scale
- 4px: chips and /ko/company navigation rows
- 5px: /ko/company header buttons
- 7px: /ko/company tiles
- 8px: primary and product actions, story cards
- 16px: promotion pill
- 24px: promotion banner card
- 40px and 100px: round controls

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Buttons, cards, banners, text |
| Header | 0px 4px 30px `rgba(20, 15, 51, 0.05)` | The header container of the Framer pages |
| Band | Dark fill | Product bands with white headlines and lilac `#aa9dff` accents |

Depth is colour, not shadow. Apart from the header's faint glow, every recorded element computes `box-shadow: none`.

## 7. Do's and Don'ts

### Do
- Fill the primary action with `#3e00d9` and a white 18px bold label
- Use `#1d0788` or `#120968` for secondary actions inside product bands
- Set headlines in Pretendard JP Bold 700 with tight negative tracking
- Keep reading copy in Pretendard JP Medium greys (`#6e737c`, `#242730`)
- Keep campaign colours (`#e80023`, `#5442fb`, `#ffe999`) inside time-boxed promotion chrome
- Use 8px corners on actions and 24px on large banners

### Don't
- Use `#3c2bac` for marketing actions; it belongs to the /ko/company template
- Add drop shadows to cards or buttons
- Set headlines in ExtraBold; the declared 800 face is not used on these pages
- Treat browser link colours (`#0000ee`, `#ff0000`) as brand colours
- Let campaign red or yellow leak into permanent navigation

## 8. Responsive Behavior

### Breakpoints
Only the 1440 × 900 desktop viewport was captured. Framer marks its breakpoint variants with `ssr-variant hidden-…` classes, so the pages switch layouts, but no breakpoint width was measured.

### Touch Targets
- Promotion pill: 80px tall
- Start button: 61px
- Product buttons: 60px
- Band buttons: 57px
- /ko/company tiles: 48px
- Chips: 42px
- /ko/company header buttons and round controls: 40px
- Framer navigation links: 30px

### Collapsing Strategy
- Not captured; only the desktop layout was measured.

### Image Behavior
- Story cards are image-filled at 8px corners, without borders or shadows.

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action: Ringle Violet (`#3e00d9`), label `#ffffff`
- Secondary actions: `#1d0788`, `#120968`
- Headlines: `#000000` or `#0d0d0d`; accented words `#3e00d9`; on dark bands `#ffffff` with `#aa9dff`
- Copy: `#242730`, `#4f545c`, `#6e737c`, `#9ea3ab`
- Campaign: `#0d0d0d` bar, `#5442fb` pill, `#e80023` card, `#ffe999` heading
- /ko/company template: `#3c2bac` button, `#3e426a` navigation, `#80839e` footer, `#e4e7f4` hairline

### Example Component Prompts
- "Create a hero on white: headline 50px Pretendard JP Bold, line height 62.5px, tracking -2.25px, colour #000000. Below it a 200 × 61 button, background #3e00d9, radius 8px, label 18px bold #ffffff: '링글 시작하기'."
- "Build a product block: 40px Pretendard JP Bold heading (tracking -1.6px), 16px SemiBold #4f545c description, and a 200 × 60 action with background #120968 and 8px radius."
- "Add a campaign banner: 1180 × 170 card, background #e80023, radius 24px, padding 60px 0 60px 80px, heading 32px bold #ffe999."

### Iteration Guide
1. `#3e00d9` is the one primary action colour on the marketing pages
2. Headlines are Pretendard JP Bold 700 with tight tracking; copy is Medium grey
3. Actions have 8px corners; large banners 24px
4. No shadows except the header's faint glow
5. Campaign colours are temporary; the violet is not

---

## 10. Voice & Tone

Ringle speaks to working adults who want English that holds up in real work. It sounds confident and outcome-driven, and it doesn't chase gimmicks. The hero line "영어는 실전처럼" (English, like the real thing) sets the register, and the copy ties English to careers ("일하는 사람을 위한 영어").

| Context | Tone |
|---|---|
| Hero headlines | Declarative and outcome-framed: "영어는 실전처럼 — 명문대 튜터와의 1:1 맞춤 화상영어" |
| Product framing | Plain and concrete: lesson length, tutor, correction |
| CTAs | Direct: "링글 시작하기", "무료 체험하기", "더 알아보기" |
| Proof | Numbers: "누적 수업 수 2,100,460" |
| Campaigns | Urgent and time-boxed: "내일 마감! 9월 마지막 역전 찬스, 최대 59% 할인!" |

**Voice samples (verbatim from pages opened on 2026-09-30):**
- "영어는 실전처럼 · 명문대 튜터와의 1:1 맞춤 화상영어" (/ko/1on1 hero)
- "꿈꾸던 영어실력과 커리어를 만드는 일하는 사람을 위한 영어, 링글" (/ko/1on1 hero subline)
- "20분부터 40분까지, 내게 딱 맞는 수업으로 시작하세요." (/ko/1on1)
- "실전 비즈니스를 위한 영어교육부터 평가까지 한 번에" (/ko/b2b)

**Forbidden register**: gamified hype, fear-based pressure, undefined jargon.

## 11. Brand Narrative

(주)링글잉글리시에듀케이션서비스 is led by its co-founders 이성파 and 이승훈, both listed as 대표이사. On the co-founder page, 이승훈 says he started Ringle during his Stanford MBA after six years at BCG, and 이성파 says he studied engineering and business and wants to build services that make learning easier and more efficient. The company says Ringle exists for the growth of its customers, its tutors and its team.

The team page states the mission: "링글은 누구나 영어의 장벽을 넘어 더 큰 기회를 잡을 수 있는 세상을 만듭니다". Its stated aim is to become the world's No.1 edu-tech company through differentiated tutors, content and technology. It describes a small core team based in Korea and the US: head office on 테헤란로 in Seoul, a branch at a WeWork in San Mateo between Stanford and San Francisco, and remote members in Sydney, Seattle and Pennsylvania. Culture notes include no titles such as 대표님 or 팀장님, only names with 님, and the principle that "모든 아이디어는 평등하다". The Global BD page reports more than 30% of revenue from outside Korea. The site footer lists 링글 1:1 화상영어, 링글 AI 스피킹, 링글 AI 스피킹 테스트, 링글 기업 영어 솔루션 and 링글 틴즈, and cites six consecutive years (2020–2025) as a 한국소비자 평가 최고의 브랜드. The B2B page cites 2000+ native tutors from leading English-speaking universities, more than 75% of them with work experience.

In design terms, Ringle presents itself as serious and ambitious rather than playful: big bold headlines, one decisive violet for the next step, grey copy that stays out of the way.

## 12. Principles

1. **Real practice over rote prep.** *UI implication:* lead with conversation and outcomes ("영어는 실전처럼"); show lesson length, tutor and correction concretely.
2. **One action, one colour.** *UI implication:* `#3e00d9` means "start"; secondary actions step down to deeper violets.
3. **Headlines carry the page.** *UI implication:* large Pretendard JP Bold with tight tracking; copy in quiet Medium grey.
4. **Flat, not decorated.** *UI implication:* separate with bands and colour, not shadows.
5. **Campaigns are temporary.** *UI implication:* promotion colours live in removable chrome (top bar, pill, banner card).

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Ringle user segments (Korean working professionals, jobseekers targeting global roles, corporate L&D buyers), not individual people.*

**김도현, 31, 서울.** A product manager preparing for interviews at global tech companies. Wants real speaking practice with a sharp tutor, not vocabulary drills.

**박지은, 36, 경기.** A working parent who fits 20-minute lessons between work and home, and uses AI 스피킹 for low-pressure practice.

**이상우, 44, 기업 HR.** An L&D manager rolling out Ringle's corporate programme, who wants assessment and attendance management.

## 14. States

Only these states were observed on the three captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Hover / pressed (/ko/company navigation)** | The parent row tints `#fbfbff` (the probe read it settled). |
| **No change** | 무료 체험하기 and 로그인 in the /ko/company header show no hover, pressed or focus change within the probe's compared scope; neither does 상세 채용공고 확인하기 on hover or press. |
| **Focus** | No probed control draws an authored focus style; every focus read is the browser's default ring (`outline: auto`, `rgb(0, 95, 204)`). |
| **Unmeasured** | Hover and pressed on 링글 시작하기, the promotion pill and the Framer navigation: a third-party Channel Talk modal covered them, even with `--hide-overlays`. The bundle's Framer navigation frames show translucent grey fills at varying alphas, which were not settled and are not declared. |

Error, empty, loading and success states were not captured and are not described.

## 15. Motion & Easing

Every probed control computes `transition: all 0s`: 링글 시작하기, the promotion pill, the Framer navigation, and the header buttons and navigation of /ko/company. Their state changes are therefore instant. Framer animation on scroll or in carousels was not measured; treat it as unspecified.

<!--
Sources — 2026-09-30
Capture: artifacts/reference-evidence/ringle.json (capturedAt 2026-09-30T09:59:21.699Z; surfaces home /ko/1on1, surface-2 /ko/student/landing/home, surface-3 /ko/company; coverage 66).
Probes: docs/research/2026-09-29-growth/raw/ringle-states-1on1.json (run with --hide-overlays) and ringle-states-company.json.
Narrative: /ko/company, /ko/company/1, /en/company/4, /ko/b2b, /ko/1on1, all opened 2026-09-30.
Personas are fictional archetypes; names do not refer to real people.
-->
