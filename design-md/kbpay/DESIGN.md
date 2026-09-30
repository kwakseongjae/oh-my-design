---
id: kbpay
name: KB Pay
display_name_kr: KB페이
country: KR
category: fintech
homepage: "https://card.kbcard.com/CXPRISVC0127.cms"
primary_color: "#ffcc00"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=kbcard.com&sz=128"
verified: "2026-09-30"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: marketing, url: "https://card.kbcard.com/SVC/DVIEW/HSCMCXPRISVC0127", inspected: "2026-09-30" }
    - { id: surface-2, kind: marketing, url: "https://card.kbcard.com/CMN/DVIEW/HOAMCXPRIZZC0002", inspected: "2026-09-30" }
    - { id: surface-3, kind: marketing, url: "https://card.kbcard.com/SVC/DVIEW/HSCMCXPRISVC0128", inspected: "2026-09-30" }
    - { id: surface-4, kind: marketing, url: "https://card.kbcard.com/SVC/DVIEW/HSCMCXPRISVC0130", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://card.kbcard.com/SVC/DVIEW/HSCMCXPRISVC0127", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://card.kbcard.com/CMN/DVIEW/HOAMCXPRIZZC0002", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://card.kbcard.com/SVC/DVIEW/HSCMCXPRISVC0128", captured: "2026-09-30" }
    - { id: surface-surface-4, kind: product-surface, url: "https://card.kbcard.com/SVC/DVIEW/HSCMCXPRISVC0130", captured: "2026-09-30" }
    - { id: kbpay-probe-home, kind: product-surface, url: "https://card.kbcard.com/CMN/DVIEW/HOAMCXPRIZZC0002", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &primary { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"30\"]", captured: "2026-09-30" }
    "tokens.colors.on-primary": *primary
    "tokens.colors.heading": &h3 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-09-30" }
    "tokens.colors.text": &login { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"15\"]", captured: "2026-09-30" }
    "tokens.colors.footer-text": &footer { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"22\"]", captured: "2026-09-30" }
    "tokens.colors.muted": &util { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"4\"]", captured: "2026-09-30" }
    "tokens.colors.border": *login
    "tokens.colors.hover-fill": &loginhover { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"15\"]::state-hover", captured: "2026-09-30" }
    "tokens.colors.select-border": &family { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"45\"]", captured: "2026-09-30" }
    "tokens.colors.surface": &guide { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"68\"]", captured: "2026-09-30" }
    "tokens.colors.white": *login
    "tokens.colors.grid-line": &cell { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::li", captured: "2026-09-30" }
    "tokens.typography.family.display": &h1 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h1", captured: "2026-09-30" }
    "tokens.typography.family.body": &body { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::body", captured: "2026-09-30" }
    "tokens.typography.display.size": *h1
    "tokens.typography.display.weight": *h1
    "tokens.typography.display.lineHeight": *h1
    "tokens.typography.display.tracking": *h1
    "tokens.typography.display.use": *h1
    "tokens.typography.display-home.size": &hometit { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::p", captured: "2026-09-30" }
    "tokens.typography.display-home.weight": *hometit
    "tokens.typography.display-home.lineHeight": *hometit
    "tokens.typography.display-home.use": *hometit
    "tokens.typography.section.size": *h3
    "tokens.typography.section.weight": *h3
    "tokens.typography.section.lineHeight": *h3
    "tokens.typography.section.tracking": *h3
    "tokens.typography.section.use": *h3
    "tokens.typography.lead.size": &tit { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.lead.weight": *tit
    "tokens.typography.lead.use": *tit
    "tokens.typography.subsection.size": &h4 { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h4", captured: "2026-09-30" }
    "tokens.typography.subsection.weight": *h4
    "tokens.typography.subsection.lineHeight": *h4
    "tokens.typography.subsection.tracking": *h4
    "tokens.typography.subsection.use": *h4
    "tokens.typography.card-title.size": &homeh3 { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h3", captured: "2026-09-30" }
    "tokens.typography.card-title.weight": *homeh3
    "tokens.typography.card-title.lineHeight": *homeh3
    "tokens.typography.card-title.use": *homeh3
    "tokens.typography.tab-lg.size": &hometab { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"27\"]", captured: "2026-09-30" }
    "tokens.typography.tab-lg.weight": *hometab
    "tokens.typography.tab-lg.lineHeight": *hometab
    "tokens.typography.tab-lg.use": *hometab
    "tokens.typography.button-lg.size": *primary
    "tokens.typography.button-lg.weight": *primary
    "tokens.typography.button-lg.use": *primary
    "tokens.typography.category.size": &cat { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::[data-omd-capture=\"23\"]", captured: "2026-09-30" }
    "tokens.typography.category.weight": *cat
    "tokens.typography.category.lineHeight": *cat
    "tokens.typography.category.use": *cat
    "tokens.typography.nav.size": &gnb { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"9\"]", captured: "2026-09-30" }
    "tokens.typography.nav.weight": *gnb
    "tokens.typography.nav.lineHeight": *gnb
    "tokens.typography.nav.use": *gnb
    "tokens.typography.body.size": &txt { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.body.weight": *txt
    "tokens.typography.body.lineHeight": *txt
    "tokens.typography.body.use": *txt
    "tokens.typography.body-home.size": &homebody { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::p", captured: "2026-09-30" }
    "tokens.typography.body-home.weight": *homebody
    "tokens.typography.body-home.lineHeight": *homebody
    "tokens.typography.body-home.use": *homebody
    "tokens.typography.button-sm.size": *login
    "tokens.typography.button-sm.weight": *login
    "tokens.typography.button-sm.use": *login
    "tokens.typography.footer.size": *footer
    "tokens.typography.footer.weight": *footer
    "tokens.typography.footer.lineHeight": *footer
    "tokens.typography.footer.use": *footer
    "tokens.typography.util.size": *util
    "tokens.typography.util.weight": *util
    "tokens.typography.util.lineHeight": *util
    "tokens.typography.util.use": *util
    "tokens.typography.caption.size": &copyright { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.caption.weight": *copyright
    "tokens.typography.caption.lineHeight": *copyright
    "tokens.typography.caption.use": *copyright
    "tokens.spacing.gnb-y": *gnb
    "tokens.spacing.tab-x": &tab { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"19\"]", captured: "2026-09-30" }
    "tokens.spacing.segment-x": &seg { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"23\"]", captured: "2026-09-30" }
    "tokens.spacing.card-x": *guide
    "tokens.spacing.card-y": *guide
    "tokens.rounded.button-sm": *login
    "tokens.rounded.button": *primary
    "tokens.rounded.segment": *seg
    "tokens.rounded.card": &recom { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::div", captured: "2026-09-30" }
    "tokens.components.primary-button.type": *primary
    "tokens.components.primary-button.bg": *primary
    "tokens.components.primary-button.fg": *primary
    "tokens.components.primary-button.radius": *primary
    "tokens.components.primary-button.padding": *primary
    "tokens.components.primary-button.height": *primary
    "tokens.components.primary-button.font": *primary
    "tokens.components.primary-button.states": { surface_id: surface-2, source_id: kbpay-probe-home, method: live-state-probe, selector: "button.btn.btn--primary 로그인 (344 x 48, rest bg rgb(255, 204, 0), fg rgb(0, 0, 0), transition all 0s): hover and pressed NO CHANGE across self, 0 descendants and 3 ancestor levels; focus skipped (--no-focus)", captured: "2026-09-30" }
    "tokens.components.primary-button.use": *primary
    "tokens.components.header-login.type": *login
    "tokens.components.header-login.bg": *login
    "tokens.components.header-login.fg": *login
    "tokens.components.header-login.border": *login
    "tokens.components.header-login.radius": *login
    "tokens.components.header-login.height": *login
    "tokens.components.header-login.font": *login
    "tokens.components.header-login.hover": *loginhover
    "tokens.components.header-login.pressed": { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"15\"]::state-pressed", captured: "2026-09-30" }
    "tokens.components.header-login.states": *loginhover
    "tokens.components.header-login.use": *login
    "tokens.components.page-tab.type": *tab
    "tokens.components.page-tab.fg": *tab
    "tokens.components.page-tab.padding": *tab
    "tokens.components.page-tab.height": *tab
    "tokens.components.page-tab.font": *tab
    "tokens.components.page-tab.selected": { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"18\"]", captured: "2026-09-30" }
    "tokens.components.page-tab.hover": &tabhover { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"19\"]::state-hover", captured: "2026-09-30" }
    "tokens.components.page-tab.pressed": { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"19\"]::state-pressed", captured: "2026-09-30" }
    "tokens.components.page-tab.states": *tabhover
    "tokens.components.page-tab.use": *tab
    "tokens.components.segment-tab.type": *seg
    "tokens.components.segment-tab.bg": *seg
    "tokens.components.segment-tab.fg": *seg
    "tokens.components.segment-tab.border": *seg
    "tokens.components.segment-tab.radius": *seg
    "tokens.components.segment-tab.padding": *seg
    "tokens.components.segment-tab.height": *seg
    "tokens.components.segment-tab.font": *seg
    "tokens.components.segment-tab.selected": { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"22\"]", captured: "2026-09-30" }
    "tokens.components.segment-tab.hover": &seghover { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"23\"]::state-hover", captured: "2026-09-30" }
    "tokens.components.segment-tab.pressed": { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"23\"]::state-pressed", captured: "2026-09-30" }
    "tokens.components.segment-tab.states": *seghover
    "tokens.components.segment-tab.use": *seg
    "tokens.components.outline-button-xs.type": &xs { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"24\"]", captured: "2026-09-30" }
    "tokens.components.outline-button-xs.bg": *xs
    "tokens.components.outline-button-xs.fg": *xs
    "tokens.components.outline-button-xs.border": *xs
    "tokens.components.outline-button-xs.radius": *xs
    "tokens.components.outline-button-xs.padding": *xs
    "tokens.components.outline-button-xs.height": *xs
    "tokens.components.outline-button-xs.font": *xs
    "tokens.components.outline-button-xs.states": *xs
    "tokens.components.outline-button-xs.use": *xs
    "tokens.components.gnb-item.type": *gnb
    "tokens.components.gnb-item.fg": *gnb
    "tokens.components.gnb-item.padding": *gnb
    "tokens.components.gnb-item.height": *gnb
    "tokens.components.gnb-item.font": *gnb
    "tokens.components.gnb-item.states": *gnb
    "tokens.components.gnb-item.use": *gnb
    "tokens.components.audience-switch.type": &aud { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"2\"]", captured: "2026-09-30" }
    "tokens.components.audience-switch.bg": *aud
    "tokens.components.audience-switch.fg": *aud
    "tokens.components.audience-switch.padding": *aud
    "tokens.components.audience-switch.height": *aud
    "tokens.components.audience-switch.font": *aud
    "tokens.components.audience-switch.selected": { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-09-30" }
    "tokens.components.audience-switch.hover": &audhover { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"2\"]::state-hover", captured: "2026-09-30" }
    "tokens.components.audience-switch.pressed": { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"2\"]::state-pressed", captured: "2026-09-30" }
    "tokens.components.audience-switch.states": *audhover
    "tokens.components.audience-switch.use": *aud
    "tokens.components.merchant-category.type": *cat
    "tokens.components.merchant-category.fg": *cat
    "tokens.components.merchant-category.height": *cat
    "tokens.components.merchant-category.font": *cat
    "tokens.components.merchant-category.selected": { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::[data-omd-capture=\"22\"]", captured: "2026-09-30" }
    "tokens.components.merchant-category.hover": &cathover { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::[data-omd-capture=\"23\"]::state-hover", captured: "2026-09-30" }
    "tokens.components.merchant-category.pressed": { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::[data-omd-capture=\"23\"]::state-pressed", captured: "2026-09-30" }
    "tokens.components.merchant-category.states": *cathover
    "tokens.components.merchant-category.use": *cat
    "tokens.components.family-site.type": *family
    "tokens.components.family-site.fg": *family
    "tokens.components.family-site.border": *family
    "tokens.components.family-site.radius": *family
    "tokens.components.family-site.padding": *family
    "tokens.components.family-site.height": *family
    "tokens.components.family-site.font": *family
    "tokens.components.family-site.states": *family
    "tokens.components.family-site.use": *family
    "tokens.components.recommendation-card.type": *recom
    "tokens.components.recommendation-card.bg": *recom
    "tokens.components.recommendation-card.radius": *recom
    "tokens.components.recommendation-card.shadow": *recom
    "tokens.components.recommendation-card.size": *recom
    "tokens.components.recommendation-card.use": *recom
    "tokens.components.finance-menu-card.type": &finance { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::li", captured: "2026-09-30" }
    "tokens.components.finance-menu-card.bg": *finance
    "tokens.components.finance-menu-card.radius": *finance
    "tokens.components.finance-menu-card.shadow": *finance
    "tokens.components.finance-menu-card.padding": *finance
    "tokens.components.finance-menu-card.size": *finance
    "tokens.components.finance-menu-card.use": *finance
    "tokens.components.guide-card.type": *guide
    "tokens.components.guide-card.bg": *guide
    "tokens.components.guide-card.radius": *guide
    "tokens.components.guide-card.padding": *guide
    "tokens.components.guide-card.size": *guide
    "tokens.components.guide-card.use": *guide
    "tokens.components.info-box.type": &braille { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::div", captured: "2026-09-30" }
    "tokens.components.info-box.bg": *braille
    "tokens.components.info-box.radius": *braille
    "tokens.components.info-box.padding": *braille
    "tokens.components.info-box.size": *braille
    "tokens.components.info-box.use": *braille
    "tokens.components.merchant-cell.type": *cell
    "tokens.components.merchant-cell.border": *cell
    "tokens.components.merchant-cell.size": *cell
    "tokens.components.merchant-cell.use": *cell
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#ffcc00"
    on-primary: "#000000"
    heading: "#151515"
    text: "#333333"
    footer-text: "#444444"
    muted: "#666666"
    border: "#aaaaaa"
    hover-fill: "#ebebeb"
    select-border: "#c2c2c2"
    surface: "#f9fafc"
    white: "#ffffff"
    grid-line: "#e1e1e1"
  typography:
    family: { display: "KBFGDisplayM", body: "KBFGText" }
    display: { size: 32, weight: 400, lineHeight: 1.0, tracking: -1, use: "Page title (KB Pay) on the KB Pay pages, KBFGDisplayM, 32px line, in rgba(0, 0, 0, 0.87)" }
    display-home: { size: 32, weight: 600, lineHeight: 1.25, use: "Hero slide titles on the KB국민카드 home, KBFGDisplayM, 40px line" }
    section: { size: 24, weight: 400, lineHeight: 1.0, tracking: -1, use: "Section headings on the KB Pay pages (서비스 특징, 이용전 유의사항), KBFGDisplayM, 24px line, in #151515" }
    lead: { size: 24, weight: 400, use: "Tagline 한번에, 한손에, 한눈에 KB Pay on the KB Pay 소개 page, KBFGText, in #333333" }
    subsection: { size: 18, weight: 400, lineHeight: 1.0, tracking: -1, use: "Sub-headings on KB Pay 이용, KBFGDisplayM, 18px line, in #333333" }
    card-title: { size: 18, weight: 600, lineHeight: 1.6, use: "Card headings on the KB국민카드 home, KBFGText, 28.8px line" }
    tab-lg: { size: 18, weight: 600, lineHeight: 1.45, use: "Section tabs on the KB국민카드 home, KBFGText, 26.1px line, with a 3px underline when current" }
    button-lg: { size: 18, weight: 600, use: "로그인 label of the yellow primary button on the KB국민카드 home" }
    category: { size: 17, weight: 400, lineHeight: 1.41, use: "Merchant category links on KB Pay 가맹점, 24px line, weight 600 when current" }
    nav: { size: 15, weight: 400, lineHeight: 1.73, use: "Main navigation (My KB, 혜택, 금융, 카드, 서비스, 라이프), KBFGText, 26px line" }
    body: { size: 15, weight: 400, lineHeight: 1.47, use: "Introductory copy on the KB Pay 소개 page, KBFGText, 22px line" }
    body-home: { size: 15, weight: 400, lineHeight: 1.6, use: "Card and banner copy on the KB국민카드 home, 24px line" }
    button-sm: { size: 14, weight: 400, use: "Header 로그인 label, KBFGText" }
    footer: { size: 14, weight: 400, lineHeight: 1.43, use: "Footer links, KBFGText and KBFGTextM, 20px line, in #444444" }
    util: { size: 13, weight: 400, lineHeight: 1.54, use: "Utility links in the top bar, 20px line, in #666666" }
    caption: { size: 12, weight: 400, lineHeight: 1.5, use: "Footer copyright, 18px line, in #666666" }
  spacing: { gnb-y: 27, tab-x: 8, segment-x: 24, card-x: 32, card-y: 20 }
  rounded: { button-sm: 3, button: 4, segment: 6, card: 16 }
  components:
    primary-button: { type: button, bg: "#ffcc00", fg: "#000000", radius: "4px", padding: "0px 16px", height: "48px", font: "18px / 600 / 48px KBFGText", states: "probe on the KB국민카드 home: hover and pressed show no change across the button and three ancestor levels (transition all 0s); focus was not read, so none is declared", use: "로그인 in the login panel of the KB국민카드 home at surface-2::[data-omd-capture=\"30\"], 344 x 48; the only filled action on the four captured pages" }
    header-login: { type: button, bg: "#ffffff", fg: "#333333", border: "1px solid #aaaaaa", radius: "3px", height: "42px", font: "14px / 400 / 40px KBFGText", hover: "bg #ebebeb", pressed: "bg #ebebeb", states: "bundle hover and pressed frames on all four pages; focus not declared", use: "로그인 in the header of every captured page at home::[data-omd-capture=\"15\"], 82 x 42" }
    page-tab: { type: tab, fg: "rgba(0, 0, 0, 0.87)", padding: "8px", height: "64px", font: "15px / 400 KBFGText", selected: "3px bottom border rgba(0, 0, 0, 0.87), padding 8px 8px 5px", hover: "the same 3px bottom border appears", pressed: "the same 3px bottom border appears", states: "selected from rest values; hover and pressed from bundle frames; focus not declared", use: "KB Pay 소개, KB Pay 이용, KB Pay 가입, KB Pay 가맹점 tabs under the page title, 110 to 125 x 64" }
    segment-tab: { type: tab, bg: "#ffffff", fg: "rgba(0, 0, 0, 0.87)", border: "1px solid rgba(0, 0, 0, 0.16)", radius: "6px", padding: "12px 24px 10px", height: "48px", font: "15px / 400 / 21.75px KBFGText", selected: "2px solid rgba(0, 0, 0, 0.87) border, weight 600, padding 11px 23px 9px", hover: "2px solid rgba(0, 0, 0, 0.87) border, weight 600", pressed: "2px solid rgba(0, 0, 0, 0.87) border, weight 600", states: "selected from rest values; hover and pressed from bundle frames; focus not declared", use: "Second-level tabs on KB Pay 이용 at surface-3::[data-omd-capture=\"23\"], 103 to 120 x 48" }
    outline-button-xs: { type: button, bg: "#ffffff", fg: "rgba(0, 0, 0, 0.87)", border: "1px solid rgba(0, 0, 0, 0.6)", radius: "4px", padding: "0px 10px", height: "32px", font: "13px / 400 / 34px KBFGText", states: "rest only; no state frame and not probed", use: "Small outlined link buttons in the KB Pay 이용 guide at surface-3::[data-omd-capture=\"24\"], 159 x 32" }
    gnb-item: { type: tab, fg: "rgba(0, 0, 0, 0.87)", padding: "27px 0px", height: "80px", font: "15px / 400 / 26px KBFGText", states: "rest only; no state frame", use: "Main navigation items in the 80px header row of the KB Pay pages" }
    audience-switch: { type: tab, bg: "#ffffff", fg: "#333333", padding: "18px 0px 22px", height: "60px", font: "14px / 400 / 20px KBFGText", selected: "weight 600 (class menuON)", hover: "weight 600", pressed: "weight 600", states: "selected from rest values; hover and pressed from bundle frames; focus not declared", use: "The three audience switches at the left of the 60px top bar" }
    merchant-category: { type: tab, fg: "rgba(0, 0, 0, 0.87)", height: "24px", font: "17px / 400 / 24px KBFGText", selected: "weight 600 with a 1px bottom border rgba(0, 0, 0, 0.87)", hover: "weight 600 with a 1px bottom border", pressed: "weight 600 with a 1px bottom border", states: "selected from rest values; hover and pressed from bundle frames; focus not declared", use: "Merchant category links above the logo grid on KB Pay 가맹점" }
    family-site: { type: button, fg: "#666666", border: "1px solid #c2c2c2", radius: "0px", padding: "0px 25px 0px 15px", height: "34px", font: "14px / 400 / 32px KBFGText", states: "rest only; no state frame", use: "Family-site box in the footer of every captured page, 196 x 34" }
    recommendation-card: { type: card, bg: "#ffffff", radius: "16px", shadow: "rgba(0, 0, 0, 0.16) 0px 1px 3px 0px", size: "1080px x 541px", use: "Recommendation panel on the KB국민카드 home" }
    finance-menu-card: { type: card, bg: "#ffffff", radius: "16px", shadow: "rgba(0, 0, 0, 0.16) 0px 1px 3px 0px", padding: "24px 0px 0px 32px", size: "344px x 176px", use: "Finance menu tiles on the KB국민카드 home (smaller tiles 160 x 80)" }
    guide-card: { type: card, bg: "#f9fafc", radius: "16px", padding: "20px 32px", size: "528px x 106px", use: "Customer guide link on the KB국민카드 home at surface-2::[data-omd-capture=\"68\"]" }
    info-box: { type: card, bg: "#f9fafc", radius: "4px", padding: "16px 32px", size: "1016px x 105px", use: "Notice box (braille-card) on the KB국민카드 home" }
    merchant-cell: { type: card, border: "1px solid #e1e1e1 (top and sides)", size: "192px x 149px", use: "Merchant logo grid on KB Pay 가맹점" }
  components_harvested: true
---

# Design System Inspiration of KB Pay

## 1. Visual Theme & Atmosphere

KB Pay (KB페이) is KB국민카드's mobile payment service. Its own introduction page describes it as a service for paying quickly and easily anywhere in Korea or abroad with cards, points and other payment methods, and says the whole range of KB국민카드 services is available inside the KB Pay app. Payment methods registered in KB Pay, family and corporate cards included, can be used at online and offline merchants at home and abroad, and partnerships add financial and membership services. The page organises the app into six areas, each with a one-line promise: 홈 (recommended content), 카드(듀얼홈) (card usage at a glance), 혜택 (new benefits and events every day), 결제 (paying anywhere with KB Pay), 금융 (financial products that fit) and 쇼핑/여행 (shopping through to travel). Its tagline is "한번에, 한손에, 한눈에 KB Pay", and the app has its own customer centre (☎1644-9311).

On the web KB Pay lives inside the KB국민카드 site, and it looks it. The four KB Pay pages share one header, one set of self-hosted KB typefaces and one footer with the card-company home. The KB Pay pages themselves are almost monochrome: white, 87%-black type, KBFGDisplayM titles with -1px tracking, black 3px underline tabs, outlined buttons with 3px to 6px corners, and a grey `#ebebeb` hover fill. The one saturated colour of the site is its action yellow: `#ffcc00` fills the 로그인 button in the login panel of the KB국민카드 home, with `#000000` text on a 4px radius. The card-company home also carries the site's soft depth — white 16px cards with a single `rgba(0, 0, 0, 0.16) 0px 1px 3px` shadow — and pale `#f9fafc` guide boxes.

**Key Characteristics:**
- One action yellow, `#ffcc00`, on the site's filled primary button; the KB Pay pages themselves carry no filled action
- KBFGDisplayM for titles (32px, 24px and 18px at weight 400 with -1px tracking) and KBFGText for everything else
- Body text in `rgba(0, 0, 0, 0.87)`; headings in solid `#151515`; greys `#333333`, `#444444` and `#666666`
- Tabs marked by black underlines (3px on page tabs) and outlined segments (2px when current)
- Small radii on controls (3px, 4px, 6px) and 16px on cards; a single light shadow on home cards

## Primary tasks

- Learn what KB Pay does before installing the app.
- Check how to use KB Pay and which payment methods it accepts.
- Find out where KB Pay is accepted.
- Sign in to the KB국민카드 site from the header.
- Reach KB Pay customer support.

## 2. Color Palette & Roles

Every token below was read on 2026-09-30 from four public, logged-out pages of card.kbcard.com: KB Pay 소개, KB Pay 이용, KB Pay 가맹점 and the KB국민카드 home. All four are one evidence domain, the KB국민카드 website: the header's audience switches, utility links and 로그인 outline compute the same colours, sizes and paddings on every page, and the same KBFG font files load on each. The KB Pay app was not captured and no app value is claimed.

### Primary
- **KB Yellow** (`#ffcc00`): The fill of 로그인 in the login panel of the KB국민카드 home (344 × 48, `#000000` label, 4px radius, `18px / 600` KBFGText). It is the primary because it is the only filled action on the four captured pages: the KB Pay pages render no filled control of their own and use the site's shared header and action system, whose filled primary action is this yellow. The probe found no hover or pressed change on it.
- **On Primary** (`#000000`): The solid black label on the yellow button.

### Text
- **Heading** (`#151515`): Section headings on the KB Pay pages (서비스 특징, 이용전 유의사항).
- **Body** (`rgba(0, 0, 0, 0.87)`): The document text colour, page titles, tabs and navigation. It is an alpha colour, so it stays in prose and component fields rather than the colour tokens.
- **Text** (`#333333`): The header 로그인 label, the audience switches, the KB Pay tagline and sub-headings.
- **Footer Text** (`#444444`): Footer links.
- **Muted** (`#666666`): Utility links in the top bar, the copyright line and the family-site box.

### Neutral & Surface
- **White** (`#ffffff`): The canvas, the header 로그인 button, segment tabs and home cards.
- **Hover Fill** (`#ebebeb`): The header 로그인 button's hover and pressed fill.
- **Surface** (`#f9fafc`): Guide and notice boxes on the KB국민카드 home.
- **Border** (`#aaaaaa`): The header 로그인 outline.
- **Select Border** (`#c2c2c2`): The footer family-site box.
- **Grid Line** (`#e1e1e1`): The merchant logo grid on KB Pay 가맹점.

### Brand assets, not tokens
- The KB국민카드 logo and the phone illustrations on the KB Pay pages were not measured; no logo colour is claimed. The Partial record's `#ffe066` nav bar, `#faeaad` breadcrumb, `#614cc2` menu labels and `#776c61` skip link were not rendered on any captured page (the labels live in the closed mega-menu).

## 3. Typography Rules

### Font Family
- **Live surface use**: `KBFGText` (584 observed uses) and `KBFGDisplayM` (17), both `loaded / high`, self-hosted by KB국민카드 from `https://card.kbcard.com/CMN/common/fonts/` (`KBFGTextL_subset.woff2`, `KBFGTextM_subset.woff2`, `KBFGDisplayM_subset.woff2`, with WOFF fallbacks). KBFGDisplayM sets page titles, section headings and sub-headings, and the hero titles of the card home; KBFGText sets body, navigation, buttons and tabs. Footer links name `KBFGText, KBFGTextM`.
- **Official distributed font assets**: the files are subset copies served by the card site; no distribution page or licence was opened this session, so none is claimed. The "KBFG" prefix points to KB Financial Group, but no page opened confirms who owns or licenses the faces.
- **Official product use**: no KB page opened names these typefaces, so no statement of official use is made.
- **Declared only (no visible use)**: none observed. The fixed "top" button computes Arial, a system face, in 3 uses.
- **Unresolved**: none.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Observed on |
|------|------|------|--------|-------------|----------|-------------|
| Display | KBFGDisplayM | 32px | 400 | 32px (1.0) | -1px | KB Pay page title |
| Display Home | KBFGDisplayM | 32px | 600 | 40px (1.25) | normal | Card home hero slides |
| Section | KBFGDisplayM | 24px | 400 | 24px (1.0) | -1px | KB Pay section headings, `#151515` |
| Lead | KBFGText | 24px | 400 | normal | normal | 한번에, 한손에, 한눈에 KB Pay, `#333333` |
| Subsection | KBFGDisplayM | 18px | 400 | 18px (1.0) | -1px | KB Pay 이용 sub-headings, `#333333` |
| Card Title | KBFGText | 18px | 600 | 28.8px (1.6) | normal | Card home cards |
| Tab Large | KBFGText | 18px | 600 | 26.1px (1.45) | normal | Card home section tabs |
| Button Large | KBFGText | 18px | 600 | 48px | normal | Yellow 로그인 |
| Category | KBFGText | 17px | 400 | 24px (1.41) | normal | KB Pay 가맹점 categories |
| Nav | KBFGText | 15px | 400 | 26px (1.73) | normal | Main navigation |
| Body | KBFGText | 15px | 400 | 22px (1.47) | normal | KB Pay introduction |
| Body Home | KBFGText | 15px | 400 | 24px (1.6) | normal | Card home copy |
| Button Small | KBFGText | 14px | 400 | 40px | normal | Header 로그인 |
| Footer | KBFGText | 14px | 400 | 20px (1.43) | normal | Footer links, `#444444` |
| Util | KBFGText | 13px | 400 | 20px (1.54) | normal | Top-bar utility links, `#666666` |
| Caption | KBFGText | 12px | 400 | 18px (1.5) | normal | Copyright, `#666666` |

### Principles
- **Display face for titles only**: KBFGDisplayM at weight 400 with -1px tracking and a line height equal to the size; weight 600 appears only on the card home's hero slides.
- **Weight marks the current item**: audience switches, segment tabs and merchant categories go from 400 to 600 when current or hovered.
- **Dense 15px body**: navigation, body and card copy all sit at 15px.

## 4. Component Stylings

### Buttons

**Primary button (KB Yellow)**
- Background: `#ffcc00`
- Text: `#000000`
- Radius: 4px
- Padding: 0px 16px
- Height: 48px
- Font: 18px / 600 KBFGText
- State: the probe found no hover or pressed change (transition all 0s)
- Use: 로그인 in the login panel of the KB국민카드 home

**Header 로그인**
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#aaaaaa`
- Radius: 3px
- Height: 42px
- Font: 14px / 400 KBFGText
- Hover: background `#ebebeb`
- Pressed: background `#ebebeb`
- Use: header of every captured page

**Small outlined button**
- Background: `#ffffff`
- Text: `rgba(0, 0, 0, 0.87)`
- Border: 1px solid `rgba(0, 0, 0, 0.6)`
- Radius: 4px
- Padding: 0px 10px
- Height: 32px
- Font: 13px / 400 KBFGText
- Use: links inside the KB Pay 이용 guide

**Family-site box**
- Text: `#666666`
- Border: 1px solid `#c2c2c2`
- Radius: 0px
- Padding: 0px 25px 0px 15px
- Height: 34px
- Font: 14px / 400 KBFGText
- Use: footer of every captured page

### Tabs & Navigation

**Page tabs**
- Text: `rgba(0, 0, 0, 0.87)`
- Padding: 8px
- Height: 64px
- Font: 15px / 400 KBFGText
- Selected: 3px bottom border `rgba(0, 0, 0, 0.87)`
- Hover: the same 3px bottom border appears
- Use: KB Pay 소개, 이용, 가입, 가맹점

**Segment tabs**
- Background: `#ffffff`
- Text: `rgba(0, 0, 0, 0.87)`
- Border: 1px solid `rgba(0, 0, 0, 0.16)`
- Radius: 6px
- Padding: 12px 24px 10px
- Height: 48px
- Font: 15px / 400 KBFGText
- Selected: 2px solid `rgba(0, 0, 0, 0.87)` border, weight 600
- Hover: 2px solid `rgba(0, 0, 0, 0.87)` border, weight 600
- Use: second-level tabs on KB Pay 이용

**Main navigation**
- Text: `rgba(0, 0, 0, 0.87)`
- Padding: 27px 0px
- Height: 80px
- Font: 15px / 400 KBFGText
- Use: My KB, 혜택, 금융, 카드, 서비스, 라이프

**Audience switches**
- Background: `#ffffff`
- Text: `#333333`
- Padding: 18px 0px 22px
- Height: 60px
- Font: 14px / 400 KBFGText
- Selected: weight 600
- Hover: weight 600
- Use: the three switches at the left of the top bar

**Merchant categories**
- Text: `rgba(0, 0, 0, 0.87)`
- Height: 24px
- Font: 17px / 400 KBFGText
- Selected: weight 600 with a 1px bottom border
- Hover: weight 600 with a 1px bottom border
- Use: category links on KB Pay 가맹점

### Cards

**Recommendation card**
- Background: `#ffffff`
- Radius: 16px
- Shadow: `rgba(0, 0, 0, 0.16) 0px 1px 3px 0px`
- Use: recommendation panel on the KB국민카드 home

**Finance menu card**
- Background: `#ffffff`
- Radius: 16px
- Shadow: `rgba(0, 0, 0, 0.16) 0px 1px 3px 0px`
- Padding: 24px 0px 0px 32px
- Use: finance menu tiles on the KB국민카드 home

**Guide card**
- Background: `#f9fafc`
- Radius: 16px
- Padding: 20px 32px
- Use: customer guide link on the KB국민카드 home

**Notice box**
- Background: `#f9fafc`
- Radius: 4px
- Padding: 16px 32px
- Use: notice box on the KB국민카드 home

**Merchant cell**
- Border: 1px solid `#e1e1e1`
- Use: merchant logo grid on KB Pay 가맹점, 192 × 149

---

**Verified:** 2026-09-30 (deterministic collector capture of four public, logged-out pages of card.kbcard.com plus a fixed keyboard-probe state read and first-party context)
**Tier 1 sources:** https://card.kbcard.com/SVC/DVIEW/HSCMCXPRISVC0127 ; https://card.kbcard.com/SVC/DVIEW/HSCMCXPRISVC0128 ; https://card.kbcard.com/SVC/DVIEW/HSCMCXPRISVC0130 ; https://card.kbcard.com/CMN/DVIEW/HOAMCXPRIZZC0002
**Tier 2 sources:** getdesign.md/kbpay (HTTP 200, 30,781 bytes; the name does not appear in the response) and styles.refero.design/?q=kb%20pay (HTTP 200; "kb pay" occurs 2 times, not inspected further), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Observed paddings rather than a declared scale: navigation 27px vertical in an 80px row, top bar 18px to 22px in a 60px row, page tabs 8px, segment tabs 12px 24px 10px, guide cards 20px 32px, notice boxes 16px 32px, finance tiles 24px top and 32px left.

### Grid & Container
- The KB Pay pages use a 960px content column (title, tabs and lists all measure 960px); the card home uses 1080px panels.
- KB Pay 가맹점 lays merchant logos in 192 × 149 cells, five to a row.

### Whitespace Philosophy
- The KB Pay pages are information pages: stacked sections under 24px headings, bulleted notes and image-led feature rows.

### Border Radius Scale
- 0px: navigation, page tabs, family-site box and grid cells
- 3px: header 로그인
- 4px: primary button, small outlined buttons, notice box
- 6px: segment tabs
- 16px: home cards and guide links

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Every element on the KB Pay pages |
| Card | `rgba(0, 0, 0, 0.16) 0px 1px 3px 0px` | Recommendation panel and finance tiles on the KB국민카드 home |
| Tint | `#f9fafc` fill | Guide and notice boxes on the card home |

## 7. Do's and Don'ts

### Do
- Use `#ffcc00` with a `#000000` label for the one filled primary action
- Set titles in KBFGDisplayM at weight 400 with -1px tracking and everything else in KBFGText
- Mark the current tab with a black underline or a 2px black outline and weight 600
- Keep control corners small (3px to 6px) and card corners at 16px
- Use the single light card shadow only on the card-home tiles

### Don't
- Don't spread the yellow to tabs, labels or backgrounds; none of the captured pages does
- Don't use the Partial record's purple `#614cc2` or yellow tints; they do not render on the captured pages
- Don't substitute another typeface for KBFGText or KBFGDisplayM and present it as KB's
- Don't add a brand focus ring; focus was not measured

## 8. Responsive Behavior

### Breakpoints
All four pages were captured at 1440px wide only; no breakpoint was measured.

### Touch Targets
- Primary button 48px tall, header 로그인 42px, page tabs 64px, segment tabs 48px, navigation row 80px.

### Collapsing Strategy
Not measured.

### Image Behavior
Not measured.

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action: `#ffcc00` with `#000000` text
- Text: `rgba(0, 0, 0, 0.87)`; headings `#151515`; greys `#333333`, `#444444`, `#666666`
- Hover fill: `#ebebeb`; borders `#aaaaaa`, `#c2c2c2`, `#e1e1e1`
- Surface: `#ffffff`, tint `#f9fafc`

### Example Component Prompts
- "Primary button: #ffcc00 background, #000000 label '로그인' in KBFGText 18px weight 600, 48px tall, 0 16px padding, 4px radius, no hover change."
- "Page tabs: KBFGText 15px in rgba(0, 0, 0, 0.87), 64px tall; the current tab carries a 3px black bottom border."
- "Card-home tile: white, 16px radius, shadow rgba(0, 0, 0, 0.16) 0 1px 3px, 24px top and 32px left padding."

### Iteration Guide
1. Yellow `#ffcc00` is for the single filled primary action
2. KBFGDisplayM titles, KBFGText for the rest
3. Current state = black underline or outline plus weight 600
4. Corners 3px to 6px on controls, 16px on cards

## 10. Voice & Tone

The KB Pay pages speak in short, parallel promises and plain explanatory sentences.

| Context | Tone |
|---|---|
| Tagline | Three parallel beats. "한번에, 한손에, 한눈에 KB Pay" |
| Feature areas | One noun label and one benefit line each. "혜택 — 매일 새로운 혜택과 이벤트" |
| Service description | Plain and complete. "카드, 포인트 등 다양한 결제 수단으로 국내외 어디서나 쉽고 빠르게 결제할 수 있는 모바일 서비스입니다." |
| Conditions | Exact and formal, stating requirements and exceptions |

**Voice samples (verbatim from the KB Pay 소개 page, opened 2026-09-30):**
- "한번에, 한손에, 한눈에 KB Pay"
- "나에게 꼭 맞는 콘텐츠 추천" (홈)
- "한눈에 확인하는 카드이용정보" (카드(듀얼홈))
- "어디서든 간편하게 KB Pay로 결제" (결제)

## 11. Brand Narrative

KB Pay is presented by KB국민카드, whose site calls itself "국민의 행복생활 파트너 KB국민카드", as the app that gathers the card company's services in one place: payment with cards and points at home and abroad, card usage at a glance through the 듀얼홈 view, daily benefits and events, financial products, and shopping and travel. Family and corporate cards can be registered alongside personal ones, and partnerships extend it into financial and membership services. The web pages that explain it sit in the 결제서비스 section of card.kbcard.com, with separate pages for introduction, usage, sign-up and merchants.

## 12. Principles

1. **One saturated action colour.** *UI implication:* the only filled control on the captured pages is the yellow primary button.
2. **Titles in the house display face.** *UI implication:* KBFGDisplayM for page titles and headings; KBFGText for everything else.
3. **State by line and weight.** *UI implication:* underlines, outlines and weight 600 mark the current item instead of colour.
4. **Plain explanation.** *UI implication:* information pages lead with a one-line promise and follow with exact conditions.

## 13. Personas

*Personas below are fictional archetypes informed by the audiences the KB Pay pages address (KB국민카드 cardholders, family-card and corporate-card users, shoppers and travellers), not individual people.*

**이지원, 22, 부산.** A student with her first KB국민카드 who pays at convenience stores and on the subway with the app.

**박민준, 38, 서울.** Manages family cards and checks card usage in the 듀얼홈 view.

**김순희, 63, 전주.** Moved to the app at her children's suggestion and calls the app customer centre when something is unclear.

## 14. States

| State | Treatment |
|---|---|
| **Hover (header 로그인)** | Fill `#ebebeb` |
| **Hover (page tabs)** | A 3px black bottom border appears |
| **Hover (segment tabs, categories, audience switches)** | Weight 600 with a 2px or 1px black line where the component has one |
| **Hover and pressed (primary button)** | No change (probe) |
| **Current item** | Underline or outline plus weight 600 |
| **Focus** | Not measured; no focus style is declared |

## 15. Motion & Easing

The probe read `transition: all 0s` on the yellow primary button; its hover and pressed states show no change. No other transition was read, and no durations or easing curves are declared.
