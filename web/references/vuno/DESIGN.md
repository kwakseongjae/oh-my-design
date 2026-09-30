---
id: vuno
name: VUNO
display_name_kr: 뷰노
country: KR
category: healthcare
homepage: "https://www.vuno.co"
primary_color: "#40e2de"
logo:
  type: github
  slug: vuno
verified: "2026-09-30"
added: "2026-06-26"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.vuno.co/", inspected: "2026-09-30" }
    - { id: surface-2, kind: corporate, url: "https://www.vuno.co/about", inspected: "2026-09-30" }
    - { id: surface-3, kind: marketing, url: "https://www.vuno.co/deepcars", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://www.vuno.co/", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://www.vuno.co/about", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://www.vuno.co/deepcars", captured: "2026-09-30" }
    - { id: vuno-probe-home, kind: product-surface, url: "https://www.vuno.co/", captured: "2026-09-30" }
    - { id: vuno-probe-deepcars, kind: product-surface, url: "https://www.vuno.co/deepcars", captured: "2026-09-30" }
    - { id: vuno-story, kind: official-doc, url: "https://www.vuno.co/story", captured: "2026-09-30" }
    - { id: vuno-history, kind: official-doc, url: "https://www.vuno.co/history", captured: "2026-09-30" }
    - { id: vuno-news, kind: official-doc, url: "https://www.vuno.co/news", captured: "2026-09-30" }
    - { id: poppins-license, kind: license, url: "https://raw.githubusercontent.com/itfoundry/Poppins/master/OFL.txt", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &fillprobe { surface_id: home, source_id: vuno-probe-home, method: live-state-probe, selector: "a 더 알아보기 (250 x 60): own bg rgba(0, 0, 0, 0); ::before bg rgb(64, 226, 222) 250x60; ::after bg rgb(180, 255, 253) at matrix(1, 0, -1, 1, -325, 0); label rgb(16, 33, 53); behind rgb(16, 33, 53); hover and pressed ::after -> matrix(1, 0, -1, 1, 0, 0); transition all 0.2s linear", captured: "2026-09-30" }
    "tokens.colors.on-primary": &fill { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"34\"]", captured: "2026-09-30" }
    "tokens.colors.primary-sweep": *fillprobe
    "tokens.colors.navy": *fillprobe
    "tokens.colors.navy-deep": &ctaprobe { surface_id: home, source_id: vuno-probe-home, method: live-state-probe, selector: "button 문의사항 남기기 (250 x 60): own bg rgba(0, 0, 0, 0); ::before 1px solid rgb(64, 226, 222) 250x60; ::after bg rgb(64, 226, 222) at matrix(1, 0, -1, 1, -357.5, 0); behind rgb(12, 26, 41); hover and pressed ::after -> matrix(1, 0, -1, 1, 0, 0) and label rgb(64, 226, 222) -> rgb(16, 33, 53); transition all 0.2s linear", captured: "2026-09-30" }
    "tokens.colors.navy-band": &bandprobe { surface_id: surface-3, source_id: vuno-probe-deepcars, method: live-state-probe, selector: "a.btn-xl.btn-effect 문의사항 남기기 (250 x 60): up2 section.sub-bottom bg rgb(24, 49, 77); ::before bg rgb(64, 226, 222); ::after bg rgb(180, 255, 253); label rgb(16, 33, 53)", captured: "2026-09-30" }
    "tokens.colors.surface": &newsprobe { surface_id: surface-3, source_id: vuno-probe-deepcars, method: live-state-probe, selector: "a.btn-arrow 모든 소식 보기 (129 x 32): up3 section.product-news bg rgb(247, 247, 247); fg rgb(16, 33, 53); ::after 30x30 1px solid rgb(16, 33, 53); hover and pressed no change across self, pseudo-elements and 3 ancestor levels", captured: "2026-09-30" }
    "tokens.colors.white": &board { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::article", captured: "2026-09-30" }
    "tokens.colors.on-dark": &bodylg { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.muted": &lang { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"8\"]", captured: "2026-09-30" }
    "tokens.colors.black": &cardtitle { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-09-30" }
    "tokens.colors.secondary": &category { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.caption": &cookiedesc { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.charcoal": &cookielink { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"54\"]", captured: "2026-09-30" }
    "tokens.colors.hairline": &tag { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.family.latin": &body { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::#home-home-body", captured: "2026-09-30" }
    "tokens.typography.family.korean": *body
    "tokens.typography.display-hero.size": &hero { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.display-hero.weight": *hero
    "tokens.typography.display-hero.lineHeight": *hero
    "tokens.typography.display-hero.use": *hero
    "tokens.typography.section.size": &section { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.typography.section.weight": *section
    "tokens.typography.section.lineHeight": *section
    "tokens.typography.section.use": *section
    "tokens.typography.contact-title.size": &contact { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.typography.contact-title.weight": *contact
    "tokens.typography.contact-title.lineHeight": *contact
    "tokens.typography.contact-title.use": *contact
    "tokens.typography.menu.size": &menu { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"9\"]", captured: "2026-09-30" }
    "tokens.typography.menu.weight": *menu
    "tokens.typography.menu.lineHeight": *menu
    "tokens.typography.menu.use": *menu
    "tokens.typography.section-sm.size": &section3 { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h2", captured: "2026-09-30" }
    "tokens.typography.section-sm.weight": *section3
    "tokens.typography.section-sm.lineHeight": *section3
    "tokens.typography.section-sm.use": *section3
    "tokens.typography.card-title-lg.size": &prodtitle { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.card-title-lg.weight": *prodtitle
    "tokens.typography.card-title-lg.lineHeight": *prodtitle
    "tokens.typography.card-title-lg.use": *prodtitle
    "tokens.typography.lead.size": &lead { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.lead.weight": *lead
    "tokens.typography.lead.lineHeight": *lead
    "tokens.typography.lead.use": *lead
    "tokens.typography.body-lg.size": *bodylg
    "tokens.typography.body-lg.weight": *bodylg
    "tokens.typography.body-lg.lineHeight": *bodylg
    "tokens.typography.body-lg.use": *bodylg
    "tokens.typography.copy.size": &copy { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::p", captured: "2026-09-30" }
    "tokens.typography.copy.weight": *copy
    "tokens.typography.copy.lineHeight": *copy
    "tokens.typography.copy.use": *copy
    "tokens.typography.tab.size": &tab { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::li", captured: "2026-09-30" }
    "tokens.typography.tab.weight": *tab
    "tokens.typography.tab.lineHeight": *tab
    "tokens.typography.tab.use": *tab
    "tokens.typography.card-title.size": *cardtitle
    "tokens.typography.card-title.weight": *cardtitle
    "tokens.typography.card-title.lineHeight": *cardtitle
    "tokens.typography.card-title.use": *cardtitle
    "tokens.typography.nav.size": &nav { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-09-30" }
    "tokens.typography.nav.weight": *nav
    "tokens.typography.nav.lineHeight": *nav
    "tokens.typography.nav.use": *nav
    "tokens.typography.button.size": &cta { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"39\"]", captured: "2026-09-30" }
    "tokens.typography.button.weight": *cta
    "tokens.typography.button.lineHeight": *cta
    "tokens.typography.button.use": *cta
    "tokens.typography.body.size": *body
    "tokens.typography.body.weight": *body
    "tokens.typography.body.lineHeight": *body
    "tokens.typography.body.use": *body
    "tokens.typography.eyebrow.size": &eyebrow { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h2", captured: "2026-09-30" }
    "tokens.typography.eyebrow.weight": *eyebrow
    "tokens.typography.eyebrow.lineHeight": *eyebrow
    "tokens.typography.eyebrow.use": *eyebrow
    "tokens.typography.link-sm.size": &arrow { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"35\"]", captured: "2026-09-30" }
    "tokens.typography.link-sm.weight": *arrow
    "tokens.typography.link-sm.lineHeight": *arrow
    "tokens.typography.link-sm.use": *arrow
    "tokens.typography.footer.size": &footer { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::li", captured: "2026-09-30" }
    "tokens.typography.footer.weight": *footer
    "tokens.typography.footer.lineHeight": *footer
    "tokens.typography.footer.use": *footer
    "tokens.typography.tag.size": *tag
    "tokens.typography.tag.weight": *tag
    "tokens.typography.tag.lineHeight": *tag
    "tokens.typography.tag.use": *tag
    "tokens.typography.breadcrumb.size": &crumb { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::li", captured: "2026-09-30" }
    "tokens.typography.breadcrumb.weight": *crumb
    "tokens.typography.breadcrumb.lineHeight": *crumb
    "tokens.typography.breadcrumb.use": *crumb
    "tokens.spacing.cta-x": *cta
    "tokens.spacing.tag-x": *tag
    "tokens.spacing.row-y": &row { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::li", captured: "2026-09-30" }
    "tokens.spacing.row-left": *row
    "tokens.spacing.arrow-right": *arrow
    "tokens.spacing.article-x": &article { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::article", captured: "2026-09-30" }
    "tokens.spacing.dialog": &cookie { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::div", captured: "2026-09-30" }
    "tokens.rounded.none": *cta
    "tokens.components.filled-button.type": *fill
    "tokens.components.filled-button.bg": *fillprobe
    "tokens.components.filled-button.fg": *fill
    "tokens.components.filled-button.radius": *fill
    "tokens.components.filled-button.padding": *fill
    "tokens.components.filled-button.height": *fill
    "tokens.components.filled-button.font": *fill
    "tokens.components.filled-button.hover": *fillprobe
    "tokens.components.filled-button.pressed": *fillprobe
    "tokens.components.filled-button.states": *fillprobe
    "tokens.components.filled-button.use": *bandprobe
    "tokens.components.outline-button.type": *cta
    "tokens.components.outline-button.bg": *cta
    "tokens.components.outline-button.fg": *cta
    "tokens.components.outline-button.border": *ctaprobe
    "tokens.components.outline-button.radius": *cta
    "tokens.components.outline-button.padding": *cta
    "tokens.components.outline-button.height": *cta
    "tokens.components.outline-button.font": *cta
    "tokens.components.outline-button.hover": *ctaprobe
    "tokens.components.outline-button.pressed": *ctaprobe
    "tokens.components.outline-button.states": *ctaprobe
    "tokens.components.outline-button.use": *cta
    "tokens.components.arrow-link.type": *arrow
    "tokens.components.arrow-link.fg": *arrow
    "tokens.components.arrow-link.padding": *arrow
    "tokens.components.arrow-link.height": *arrow
    "tokens.components.arrow-link.font": *arrow
    "tokens.components.arrow-link.icon": &arrowprobe { surface_id: home, source_id: vuno-probe-home, method: live-state-probe, selector: "a.btn-arrow.color-gray 모든 소식 보기 (129.7 x 32): fg rgb(215, 223, 230); ::after 30x30, 1px solid rgb(215, 223, 230), arrow image 14px auto; hover and pressed no change across self, pseudo-elements and 3 ancestor levels", captured: "2026-09-30" }
    "tokens.components.arrow-link.states": *arrowprobe
    "tokens.components.arrow-link.use": *newsprobe
    "tokens.components.nav-link.type": *nav
    "tokens.components.nav-link.fg": *nav
    "tokens.components.nav-link.height": *nav
    "tokens.components.nav-link.font": *nav
    "tokens.components.nav-link.selected": &navsel { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"1\"]", captured: "2026-09-30" }
    "tokens.components.nav-link.states": *navsel
    "tokens.components.nav-link.use": *nav
    "tokens.components.lang-toggle.type": *lang
    "tokens.components.lang-toggle.fg": *lang
    "tokens.components.lang-toggle.padding": *lang
    "tokens.components.lang-toggle.font": *lang
    "tokens.components.lang-toggle.selected": { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"7\"]", captured: "2026-09-30" }
    "tokens.components.lang-toggle.states": *lang
    "tokens.components.lang-toggle.use": *lang
    "tokens.components.product-tab.type": *tab
    "tokens.components.product-tab.fg": *tab
    "tokens.components.product-tab.padding": *tab
    "tokens.components.product-tab.font": *tab
    "tokens.components.product-tab.selected": { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::li", captured: "2026-09-30" }
    "tokens.components.product-tab.states": *tab
    "tokens.components.product-tab.use": *tab
    "tokens.components.news-card.type": &card { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::li", captured: "2026-09-30" }
    "tokens.components.news-card.bg": *card
    "tokens.components.news-card.fg": *card
    "tokens.components.news-card.border": *card
    "tokens.components.news-card.radius": *card
    "tokens.components.news-card.size": *card
    "tokens.components.news-card.use": *card
    "tokens.components.tag.type": *tag
    "tokens.components.tag.fg": *tag
    "tokens.components.tag.border": *tag
    "tokens.components.tag.radius": *tag
    "tokens.components.tag.padding": *tag
    "tokens.components.tag.height": *tag
    "tokens.components.tag.font": *tag
    "tokens.components.tag.use": *tag
    "tokens.components.solution-row.type": *row
    "tokens.components.solution-row.border": *row
    "tokens.components.solution-row.padding": *row
    "tokens.components.solution-row.size": *row
    "tokens.components.solution-row.use": *row
    "tokens.components.cookie-dialog.type": *cookie
    "tokens.components.cookie-dialog.bg": *cookie
    "tokens.components.cookie-dialog.fg": *cookie
    "tokens.components.cookie-dialog.padding": *cookie
    "tokens.components.cookie-dialog.size": *cookie
    "tokens.components.cookie-dialog.use": *cookie
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#40e2de"
    on-primary: "#102135"
    primary-sweep: "#b4fffd"
    navy: "#102135"
    navy-deep: "#0c1a29"
    navy-band: "#18314d"
    surface: "#f7f7f7"
    white: "#ffffff"
    on-dark: "#d7dfe6"
    muted: "#9bacbb"
    black: "#000000"
    secondary: "#555555"
    caption: "#707070"
    charcoal: "#222222"
    hairline: "#dddddd"
  typography:
    family: { latin: "Poppins", korean: "NANUMSQUARE" }
    display-hero: { size: 60, weight: 600, lineHeight: 1.4, use: "Home hero statement (의료인공지능의 미래, 뷰노가 이끌어갑니다.) in #ffffff, 84px line; Korean glyphs fall through Poppins to the NanumSquare face" }
    section: { size: 50, weight: 600, lineHeight: 1.36, use: "Section headings on home (주요 소식 in #ffffff; the heading above the logo grid in #000000), 68px line" }
    contact-title: { size: 50, weight: 600, lineHeight: 1.6, use: "Closing contact heading on every page (뷰노메드 솔루션에 대해 더 궁금하신가요?), #ffffff, 80px line" }
    menu: { size: 45, weight: 500, lineHeight: 1.15, use: "First-level items of the full-screen menu layer (About VUNO, Products, News ...), 51.75px line" }
    section-sm: { size: 35, weight: 600, lineHeight: 1.1, use: "관련 뉴스 heading on the DeepCARS page, #000000, 38.5px line" }
    card-title-lg: { size: 29, weight: 500, lineHeight: 1.15, use: "Product slide titles in the home Products carousel, #ffffff, 33.35px line" }
    lead: { size: 24, weight: 300, lineHeight: 1.67, use: "Product descriptions on home and the DeepCARS hero, #ffffff, 40.08px line (39.6px on DeepCARS)" }
    body-lg: { size: 20, weight: 400, lineHeight: 1.75, use: "Slide descriptions in the home Products carousel, #d7dfe6, 35px line" }
    copy: { size: 20, weight: 300, lineHeight: 1.67, use: "Feature copy under the DeepCARS point headings, #ffffff, 33.4px line" }
    tab: { size: 20, weight: 400, lineHeight: 1.15, use: "Product tabs on home (#d7dfe6, the current tab #40e2de), 23px line" }
    card-title: { size: 20, weight: 600, lineHeight: 1.5, use: "Press card titles, #000000, 30px line" }
    nav: { size: 18, weight: 400, lineHeight: 1.15, use: "Header navigation links, #ffffff, the current section #40e2de, 20.7px line" }
    button: { size: 16, weight: 600, lineHeight: 1.4, use: "Call-to-action labels (문의사항 남기기, 더 알아보기), 22.4px line" }
    body: { size: 16, weight: 400, lineHeight: 1.15, use: "Document default on all three pages, Poppins then NANUMSQUARE-400, 18.4px line" }
    eyebrow: { size: 15, weight: 500, lineHeight: 1.6, use: "Icon-led product label above the DeepCARS hero copy, #40e2de, 24px line" }
    link-sm: { size: 15, weight: 500, lineHeight: 1.4, use: "모든 소식 보기 arrow link, #d7dfe6 on home (600 weight in #102135 on the DeepCARS #f7f7f7 band), 21px line" }
    footer: { size: 15, weight: 300, lineHeight: 1.15, use: "Footer menu items, muted blue-grey at 75% alpha, 17.25px line" }
    tag: { size: 14, weight: 400, lineHeight: 1.57, use: "Press card category and hashtag labels, #555555, 22px line" }
    breadcrumb: { size: 13, weight: 500, lineHeight: 1.18, use: "Breadcrumb trail on /about and /deepcars, #9bacbb, 15.34px line" }
  spacing: { cta-x: 8, tag-x: 6, row-y: 60, row-left: 22, arrow-right: 40, article-x: 90, dialog: 30 }
  rounded: { none: 0 }
  components:
    filled-button: { type: button, bg: "#40e2de", fg: "#102135", radius: "0px", padding: "0px 8px", height: "60px", font: "16px / 600 / 22.4px Poppins", hover: "a #b4fffd sheet (::after, 325 x 60, skewed) slides across the teal fill; the label stays #102135", pressed: "same as hover", states: "the fill is the ::before layer (250 x 60, bg #40e2de); the button's own background is transparent; hover and pressed move the ::after from matrix(1, 0, -1, 1, -325, 0) to matrix(1, 0, -1, 1, 0, 0) under transition all 0.2s linear; focus not measured", use: "더 알아보기 in the home VUNO Med Solution section at home::[data-omd-capture=\"34\"] (250 x 60, on #102135) and 문의사항 남기기 in the DeepCARS closing band (on #18314d)" }
    outline-button: { type: button, bg: "transparent", fg: "#40e2de", border: "1px solid #40e2de (::before layer)", radius: "0px", padding: "0px 8px", height: "60px", font: "16px / 600 / 22.4px Poppins (400 on the DeepCARS hero instance)", hover: "a #40e2de sheet (::after, skewed) slides in; label turns #102135", pressed: "same as hover", states: "hover and pressed settle after transition all 0.2s linear (probe on home and /deepcars); focus not measured", use: "문의사항 남기기 in the closing contact band of all three pages at home::[data-omd-capture=\"39\"] (250 x 60, on #0c1a29) and in the DeepCARS hero" }
    arrow-link: { type: button, fg: "#d7dfe6", padding: "6px 40px 5px 0px", height: "32px", font: "15px / 500 / 21px Poppins", icon: "30 x 30 ::after box with a 1px border in the label colour and an arrow image", states: "hover and pressed show no change across the link, its pseudo-elements and three ancestor levels", use: "모든 소식 보기 beside 주요 소식 on home (#d7dfe6; the ground behind it was not revealed when the probe read it) and beside 관련 뉴스 on /deepcars (#102135, 15px / 600, on #f7f7f7)" }
    nav-link: { type: tab, fg: "#ffffff", height: "100px", font: "18px / 400 / 20.7px Poppins", selected: "fg #40e2de on the current section (About VUNO on /about, Products on /deepcars)", states: "selected variant read from rest values on three pages; no pointer frame measured", use: "Header navigation (About VUNO, Products, News, IR, Publications, Career) at home::[data-omd-capture=\"1\"], 110 x 100 cells" }
    lang-toggle: { type: tab, fg: "#9bacbb", padding: "0px 8px", font: "16px / 500 / 18.4px Poppins", selected: "fg #ffffff on the current language (KR)", states: "rest values only", use: "KR / EN switch in the header at home::[data-omd-capture=\"8\"]" }
    product-tab: { type: tab, fg: "#d7dfe6", padding: "0px 0px 0px 37px", font: "20px / 400 / 23px Poppins", selected: "fg #40e2de on the current tab (li.tab.on)", states: "rest values only", use: "Product tabs beside the home Products carousel (VUNO Med-Chest X-ray, Fundus AI, DeepCARS, VUNO Care-HATIV), 384 x 23" }
    news-card: { type: card, bg: "#ffffff", fg: "#000000", border: "2px solid #40e2de on the top edge only", radius: "0px", size: "399px x 581px", use: "Press cards in the 주요 소식 carousel on home (three visible) and 관련 뉴스 on /deepcars; every captured card carries the teal top rule" }
    tag: { type: badge, fg: "#555555", border: "1px solid #dddddd", radius: "0px", padding: "0px 6px", height: "26px", font: "14px / 400 / 22px Poppins", use: "Hashtag labels (#announcement, #pressrelease) at the foot of press cards" }
    solution-row: { type: card, border: "1px solid rgba(255, 255, 255, 0.2) on the top edge", padding: "60px 8px 60px 22px", size: "758px x 301px", use: "Numbered data-domain rows on home (01 Medical Imaging, 02 Pathology, 03 Biosignals, 04 Speech) in white text; the ground behind them was not measured" }
    cookie-dialog: { type: dialog, bg: "rgba(255, 255, 255, 0.93)", fg: "#000000", padding: "30px", size: "420px x 234px", use: "Cookie notice open at capture on all three pages; its only button accepts, so the collector left it open and nothing was pressed" }
  components_harvested: true
---

# Design System Inspiration of VUNO

## 1. Visual Theme & Atmosphere

VUNO (뷰노) is a Korean medical-AI company. Its own Our Story page says it was founded "at the dawn of medical AI" under the slogan "View the Invisible, Know the Unknown", and calls itself the pioneer that brought out Korea's first AI medical device. Its timeline confirms the details: (주)뷰노 was incorporated in December 2014, built its own deep-learning engine, VunoNet, in June 2015, and in May 2018 won approval from the Ministry of Food and Drug Safety (식약처) for VUNO Med-BoneAge, "국내 최초 인공지능 의료기기". It listed on KOSDAQ in February 2021. Since then its products have spread from reading medical images to predicting outcomes: VUNO Med-Chest X-ray, Fundus AI, DeepBrain, LungCT AI and DeepCARS for hospitals, and, under VUNO Care, the HATIV line (HATIV P30 launched in 2023, HATIV K30 in 2025). The timeline also records US FDA 510(k) clearances for DeepBrain (2023) and Chest X-ray (2024), and a European CE MDR certificate for DeepCARS (2025). The mission it states is "기술로 인류를 건강하고 행복하게 만들자" (make humanity healthier and happier through technology), and its vision is patient-centred, high-quality healthcare "anytime, anywhere".

The website frames that clinical work on dark navy. The probe read `#102135` behind 더 알아보기 in the home VUNO Med Solution section, `#0c1a29` behind the closing contact band, and `#18314d` in the DeepCARS closing band; most home copy is white or `#d7dfe6`, set on dark grounds the collector could not read directly. Light bands are white or `#f7f7f7`. One saturated teal, `#40e2de`, does every pointing job. It is the fill of the solid call-to-action, the outline and label of the contact action, the current section in the navigation, the current product tab, the DeepCARS product label, and a 2px rule on top of every press card. Type is Poppins for Latin. Korean text falls through to NanumSquare, which VUNO self-hosts. Headings run at weight 600 with generous line height, and copy on navy steps down to `#d7dfe6` and `#9bacbb`. Every one of the 419 captured elements has 0px radius and no box-shadow. The page is square-cornered and flat, and its only depth is the change between navy and white bands.

**Key Characteristics:**
- Navy grounds (`#102135`, `#0c1a29`, `#18314d`) with white and `#f7f7f7` bands between them
- One teal, `#40e2de`, for the filled action, the outlined contact action and every current or selected item
- Actions animate with a skewed sheet that slides across the button (`#b4fffd` over the teal fill; teal over the outlined button), `transition: all 0.2s linear`
- Poppins for Latin, NanumSquare for Korean; headings at weight 600, lead copy at weight 300
- Radius 0 and no shadow on every captured element
- Cool blue-grey text on navy (`#d7dfe6`, `#9bacbb`); `#000000`, `#555555` and `#707070` on white

## Primary tasks

- Learn what each VUNO Med solution reads and on which kind of medical data
- Follow the company's approvals, contracts and disclosures in 주요 소식
- Open a product page such as DeepCARS and read its evidence points
- Leave an inquiry through 문의사항 남기기

## 2. Color Palette & Roles

Every token below was read on 2026-09-30 from www.vuno.co, /about and /deepcars by the deterministic collector, with fills painted by pseudo-elements and ancestors read by the fixed keyboard probe on home and /deepcars. The tokens describe VUNO's public website. The HATIV app and the clinical software were not captured, and none of their values is claimed.

### Primary
- **VUNO Teal** (`#40e2de`): The fill of the solid call-to-action. On 더 알아보기 (home) and the DeepCARS closing 문의사항 남기기 the button's own background is transparent, and the teal is its `::before` layer, 250 × 60 (probe). The same teal draws the 1px `::before` outline and the label of the outlined 문의사항 남기기, which closes every page. It also marks the current header section (About VUNO on /about, Products on /deepcars), the current product tab on home and the current items of the menu layer. It is the primary because it is both the site's action fill and its only selected-state colour; no other chromatic colour appears in an action or selected role on the captured pages.
- **On Primary** (`#102135`): The label on the teal fill, and the label the outlined button switches to when its teal sheet slides in.
- **Primary Sweep** (`#b4fffd`): The pale teal `::after` sheet that slides across the filled button on hover and press.

### Navy grounds
- **Navy** (`#102135`): The ground behind 더 알아보기 in the home VUNO Med Solution section (probe `behind`), and the label colour on teal and on light bands.
- **Navy Deep** (`#0c1a29`): The ground behind the closing contact band on home (probe `behind`).
- **Navy Band** (`#18314d`): The background of the DeepCARS closing band (`section.sub-bottom`, probe ancestor read).

### Neutral & Surface
- **White** (`#ffffff`): The home news board (`article.board-list-wrap`), press cards, and text on navy.
- **Surface** (`#f7f7f7`): The DeepCARS 관련 뉴스 band (`section.product-news`, probe ancestor read).
- **Hairline** (`#dddddd`): The 1px border of press-card hashtag tags.

### Text
- **On Dark** (`#d7dfe6`): Descriptions, contact links and the arrow link on navy.
- **Muted** (`#9bacbb`): The inactive language (EN) and breadcrumbs; footer items use it at 75% alpha.
- **Black** (`#000000`): Press card titles, the partner heading and the document default text colour.
- **Secondary** (`#555555`): Press card categories and tags.
- **Caption** (`#707070`): Cookie notice copy.
- **Charcoal** (`#222222`): The cookie policy link and the home news board text.

### Not tokens
- The earlier record's `#12273d`, `#244161` and `#f8f8f8` do not render on any captured page and were removed.
- The VUNO logo was not measured, so no logo colour is claimed.

## 3. Typography Rules

### Font Family
- **Live surface use**: every captured element computes `Poppins` first, followed by `NANUMSQUARE-400` (388 elements), `NANUMSQUARE-700` (25) or `NANUMSQUARE-300` (6), then `Roboto` or `sans-serif`. Poppins is `loaded / high` (419 observed uses) and served from Google Fonts (`fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700`, files on `fonts.gstatic.com`). Poppins has no Hangul, so Korean text renders in the NanumSquare face named second in the stack. VUNO self-hosts that face under `www.vuno.co/views/res/fonts/NanumSquare/` (`NanumSquareL/R/B/EB.woff2`) as the families `NANUMSQUARE-300`, `-400`, `-700` and `-800`. The collector counts only the first family, so it lists NanumSquare as declared with 0 uses. A same-day headless read found `NANUMSQUARE-300`, `-400` and `-700` loaded on home, together with Poppins 300, 400, 500 and 600.
- **Official distributed font assets**: Poppins is by the Indian Type Foundry. Its OFL.txt, opened on 2026-09-30, reads "Copyright 2014-2019 Indian Type Foundry … licensed under the SIL Open Font License, Version 1.1". NanumSquare is a Naver typeface, but no licence text for it was opened this session, so no licence is stated for it.
- **Official product use**: no VUNO page opened this session names its typefaces, so no statement of official product use is made.
- **Declared only (no visible use)**: `NANUMSQUARE-800` is declared and was not loaded on home. `Noto Sans CJKKR` and the Font Awesome families are declared with 0 observed uses.
- **Unresolved**: none.

### Hierarchy

| Role | Size | Weight | Line Height | Observed on |
|------|------|--------|-------------|-------------|
| Display Hero | 60px | 600 | 84px (1.4) | Home hero statement, `#ffffff` |
| Section | 50px | 600 | 68px (1.36) | 주요 소식; partner heading |
| Contact Title | 50px | 600 | 80px (1.6) | Closing contact band, every page |
| Menu | 45px | 500 | 51.75px | Full-screen menu layer |
| Section Small | 35px | 600 | 38.5px | 관련 뉴스 on /deepcars |
| Card Title Large | 29px | 500 | 33.35px | Home product slides |
| Lead | 24px | 300 | 40.08px (1.67) | Product descriptions |
| Body Large | 20px | 400 | 35px (1.75) | Slide descriptions, `#d7dfe6` |
| Copy | 20px | 300 | 33.4px | DeepCARS feature copy |
| Tab | 20px | 400 | 23px | Product tabs |
| Card Title | 20px | 600 | 30px | Press card titles |
| Nav | 18px | 400 | 20.7px | Header navigation |
| Button | 16px | 600 | 22.4px | Call-to-action labels |
| Body | 16px | 400 | 18.4px | Document default |
| Eyebrow | 15px | 500 | 24px | DeepCARS product label, `#40e2de` |
| Link Small | 15px | 500 | 21px | 모든 소식 보기 |
| Footer | 15px | 300 | 17.25px | Footer menu |
| Tag | 14px | 400 | 22px | Card category and tags |
| Breadcrumb | 13px | 500 | 15.34px | /about, /deepcars |

All captured type has `letter-spacing: normal`.

### Principles
- **Weight 600 for statements, 300 for explanation**: headings from 35px to 60px are 600, and descriptions at 20–24px drop to 300.
- **Tall line heights on display type**: 84px on the 60px hero and 80px on the 50px contact heading give Korean headlines room to wrap in two lines.
- **Two scripts in one stack**: Latin in Poppins, Korean in NanumSquare, at the same sizes and weights.

## 4. Component Stylings

### Buttons

**Filled button (primary)**
- Background: `#40e2de`, painted by the button's `::before` layer (own background transparent)
- Text: `#102135`, 16px / 600 / 22.4px Poppins
- Size: 250 × 60, padding 0 8px, radius 0
- Hover / pressed: a `#b4fffd` sheet (`::after`, 325 × 60, skewed) slides across; the label stays `#102135`; `transition: all 0.2s linear`
- Use: 더 알아보기 on home (on `#102135`); 문의사항 남기기 in the DeepCARS closing band (on `#18314d`)

**Outlined button**
- Background: transparent; outline 1px `#40e2de` drawn by `::before`
- Text: `#40e2de`, 16px / 600 / 22.4px Poppins (400 on the DeepCARS hero)
- Size: 250 × 60, padding 0 8px, radius 0
- Hover / pressed: a `#40e2de` sheet slides in and the label turns `#102135`
- Use: 문의사항 남기기 closing every page (on `#0c1a29`) and in the DeepCARS hero

**Arrow link**
- Text: `#d7dfe6`, 15px / 500 on home; `#102135`, 15px / 600 on the `#f7f7f7` band
- Padding: 6px 40px 5px 0; the arrow sits in a 30 × 30 `::after` box with a 1px border in the label colour
- Hover / pressed: no change (probe)
- Use: 모든 소식 보기

### Navigation
- **Header links**: `#ffffff`, 18px / 400 Poppins, in 110 × 100 cells; the current section turns `#40e2de`.
- **Language switch**: KR / EN at 16px / 500, padding 0 8px; the current language `#ffffff`, the other `#9bacbb`.
- **Product tabs**: 20px / 400 in `#d7dfe6`, 37px left padding; the current tab `#40e2de`.

### Cards & Containers
- **Press card**: `#ffffff`, radius 0, 399 × 581, with a 2px `#40e2de` rule on the top edge only; title 20px / 600 in `#000000`, category 14px in `#555555`.
- **Tag**: 14px `#555555` in a 1px `#dddddd` box, padding 0 6px, 26px tall, radius 0.
- **Data-domain row**: 758 × 301, white text, a 1px `rgba(255, 255, 255, 0.2)` top rule and 60px 8px 60px 22px padding.
- **Cookie notice**: 420 × 234 at `rgba(255, 255, 255, 0.93)`, 30px padding; open at capture.

---

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out pages of www.vuno.co plus fixed keyboard-probe reads and first-party context)
**Tier 1 sources:** https://www.vuno.co/ ; https://www.vuno.co/about ; https://www.vuno.co/deepcars ; https://www.vuno.co/story ; https://www.vuno.co/history ; https://www.vuno.co/news
**Tier 2 sources:** not attempted on 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing
- Observed values: 8px action padding, 6px tag padding, 60px 8px 60px 22px data-domain rows, a 40px right pad that holds the arrow link's icon, 0 90px on the DeepCARS hero article, 30px inside the cookie notice.
- The page alternates full-width navy and light bands at 1440px, and the capture ran at that width only.

### Radius
- 0px on every captured element. The earlier record's 30px pill and 50% circle were not observed and were removed.

## 6. Depth & Elevation

All 419 captured elements compute `box-shadow: none`. Depth comes from the change between navy grounds (`#102135`, `#0c1a29`, `#18314d`) and light bands (`#ffffff`, `#f7f7f7`). The one translucent layer observed is the open cookie notice at `rgba(255, 255, 255, 0.93)`. The earlier record's three shadow tokens were not observed and were removed.

## 7. Do's and Don'ts

### Do
- Put actions on navy and fill the primary one with `#40e2de` and a `#102135` label
- Use `#40e2de` for current and selected items: header section, product tab, menu item
- Keep corners at 0 and surfaces flat
- Set Korean in NanumSquare behind Poppins at the same size and weight
- Use `#d7dfe6` for copy on navy and `#9bacbb` for inactive items

### Don't
- Add a second accent hue; teal is the only one observed
- Round buttons or cards
- Add drop shadows
- Set display headings in a light weight; 600 is used from 35px up

## 8. Responsive Behavior

The capture ran at 1440 × 900 only. No breakpoint, collapsed menu or mobile layout was measured, and none is claimed. The earlier record's breakpoint table was unsourced and was removed.

## 9. Agent Prompt Guide

### Quick Color Reference
- Action fill and selected: `#40e2de`; label on it `#102135`; hover sheet `#b4fffd`
- Navy grounds: `#102135`, `#0c1a29`, `#18314d`
- Light bands: `#ffffff`, `#f7f7f7`
- Text on navy: `#d7dfe6`, `#9bacbb`; on white: `#000000`, `#555555`, `#707070`
- Hairline: `#dddddd`

### Example Component Prompts
- "A navy `#102135` section with a 50px / 600 white heading and a 250 × 60 square button: fill `#40e2de`, label `#102135` 16px / 600 Poppins; on hover a pale `#b4fffd` skewed sheet slides across in 0.2s linear."
- "A closing contact band on `#0c1a29`: 50px / 600 white heading on an 80px line, and an outlined 250 × 60 button with a 1px `#40e2de` border and `#40e2de` label that fills teal on hover."
- "A press card: white, radius 0, a 2px `#40e2de` top rule, title 20px / 600 `#000000`, category 14px `#555555`, and `#555555` hashtags in 1px `#dddddd` boxes."

---

## 10. Voice & Tone

VUNO writes as a clinical technology company. It states what it does, names the modality or approval, and leaves out exclamation.

| Context | Tone |
|---|---|
| Slogan | "View the Invisible, Know the Unknown" — the page title of every captured page |
| Hero | Plain leadership claim: "의료인공지능의 미래, 뷰노가 이끌어갑니다." |
| Products | Workflow-centred: "뷰노메드 솔루션은 의료진들의 일상적인 워크플로우에서 새로운 경험을 제공하고 있습니다." |
| News | Disclosure-style headlines (신주발행공고; 뷰노, 중국 시장 진출…하이난성 'DeepCARS' 독점 판매계약) |
| Actions | 더 알아보기, 모든 소식 보기, 문의사항 남기기 |

**Voice samples (verbatim, www.vuno.co, 2026-09-30):**
- "의료인공지능의 미래, 뷰노가 이끌어갑니다." — home hero
- "VUNO Med® Solution 인공지능이 융합될 수 있는 광범위한 의료 데이터를 분석해 의료현장의 혁신을 주도합니다." — home solution section
- "뷰노메드 솔루션에 대해 더 궁금하신가요? VUNO 팀에게 언제든지 연락주세요." — closing contact band

## 11. Brand Narrative

VUNO's Our Story page places its founding "at the dawn of the global medical-AI field" and names two firsts: the slogan "View the Invisible, Know the Unknown", and Korea's first AI medical device. Our History fills in the path. It runs from incorporation in December 2014 and the in-house VunoNet engine in 2015 to the 2018 approval of VUNO Med-BoneAge. Then come the Chest X-ray and DeepBrain approvals of 2019, Korea's first innovative-medical-device designation for Fundus AI in 2020, and the KOSDAQ listing in February 2021. After that the timeline turns international, with FDA 510(k) clearances, CE MDR certification, and approvals for HATIV P30 in Indonesia and Saudi Arabia in 2025. The History page describes the company as covering medical images, pathology, biosignals and medical speech, "from diagnostic assistance to prognosis prediction". The home page repeats the same four domains as its numbered rows: 01 Medical Imaging, 02 Pathology, 03 Biosignals, 04 Speech.

The mission is "기술로 인류를 건강하고 행복하게 만들자". The vision is patient-centred healthcare that anyone can use "언제 어디서든" (anytime, anywhere).

## 12. Principles

1. **Evidence before adjectives.** The timeline and news are lists of approvals, certifications and contracts. *UI implication:* lead with the regulatory or clinical fact.
2. **One signal on a dark field.** Teal marks every action and every current item, and nothing else is chromatic. *UI implication:* reserve `#40e2de` for those roles.
3. **Instrument geometry.** Square corners and no shadows on every element. *UI implication:* keep radius 0 and separate by band colour.

## 13. Personas

*These are fictional archetypes drawn from the audiences VUNO's pages address — clinicians and hospitals (VUNO Med), people who buy HATIV devices, and investors (IR, disclosures). They are not real people.*

**박민수, 44, 서울.** A radiologist comparing chest X-ray reading aids. He reads the product page for the modality and the approval status, then uses 문의사항 남기기.

**이준호, 51, 경기.** A hospital CIO. He reads 주요 소식 and the History page for certifications (ISO/IEC 27001 and 27701 in 2025) before a vendor review.

**Sarah Kim, 35, Singapore.** An investor following VUNO's disclosures and overseas contracts in 주요 소식.

## 14. States

Only observed states are listed.

| State | Observed treatment |
|---|---|
| Hover / pressed, filled button | `#b4fffd` sheet slides across the `#40e2de` fill; label unchanged |
| Hover / pressed, outlined button | `#40e2de` sheet slides in; label `#40e2de` → `#102135` |
| Hover / pressed, arrow link | No change |
| Selected | `#40e2de` text on the current header section, product tab and menu item; `#ffffff` on the current language |
| Focus | Not measured (probe run with `--no-focus`); none declared |

The earlier record's empty, loading, error, success, skeleton and disabled treatments had no source and were removed.

## 15. Motion & Easing

The captured actions compute `transition: all 0.2s linear`. The probe waited past the longest transition in scope (up to 1,100ms on /deepcars, where ancestors run reveal animations) before reading. The sheet animation moves a skewed `::after` layer from `matrix(1, 0, -1, 1, -325, 0)` (or `-357.5`) to `matrix(1, 0, -1, 1, 0, 0)`. Section reveal animations (`aniOn` classes) were not measured. The earlier record's duration and cubic-bezier tables were not grounded in any capture and were removed.
