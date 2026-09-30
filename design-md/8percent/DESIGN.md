---
id: 8percent
name: 8percent
display_name_kr: 에잇퍼센트
country: KR
category: fintech
homepage: "https://www.8percent.kr/"
primary_color: "#6e49da"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=8percent.kr&sz=128"
verified: "2026-09-30"
added: "2026-07-02"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: product, url: "https://www.8percent.kr/", inspected: "2026-09-30" }
    - { id: surface-2, kind: corporate, url: "https://www.8percent.kr/disclosures/management/", inspected: "2026-09-30" }
    - { id: surface-3, kind: product, url: "https://www.8percent.kr/deals/real-estate-special/", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://www.8percent.kr/", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://www.8percent.kr/disclosures/management/", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://www.8percent.kr/deals/real-estate-special/", captured: "2026-09-30" }
    - { id: 8percent-probe-home, kind: product-surface, url: "https://www.8percent.kr/", captured: "2026-09-30" }
    - { id: 8percent-probe-disclosures, kind: product-surface, url: "https://www.8percent.kr/disclosures/management/", captured: "2026-09-30" }
    - { id: 8percent-careers, kind: official-doc, url: "https://8percent.careers.team/", captured: "2026-09-30" }
    - { id: 8percent-blog-eds, kind: official-doc, url: "https://8percent.github.io/2024-07-15/frontend-eds-improvement/", captured: "2026-09-30" }
    - { id: pretendard-license, kind: license, url: "https://raw.githubusercontent.com/orioncactus/pretendard/main/LICENSE", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &login { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"7\"]", captured: "2026-09-30" }
    "tokens.colors.on-primary": *login
    "tokens.colors.primary-tint": &invest { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"15\"]", captured: "2026-09-30" }
    "tokens.colors.blue": &rate { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::span", captured: "2026-09-30" }
    "tokens.colors.blue-tint": &all { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"12\"]", captured: "2026-09-30" }
    "tokens.colors.link-blue": &disclink { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"25\"]", captured: "2026-09-30" }
    "tokens.colors.link-violet": &presslink { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"76\"]", captured: "2026-09-30" }
    "tokens.colors.ink": &body { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::body", captured: "2026-09-30" }
    "tokens.colors.canvas": *body
    "tokens.colors.surface": &panel { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::div", captured: "2026-09-30" }
    "tokens.colors.muted": &foot { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"78\"]", captured: "2026-09-30" }
    "tokens.colors.faint": &meta { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::span", captured: "2026-09-30" }
    "tokens.colors.disabled": &investoff { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"21\"]", captured: "2026-09-30" }
    "tokens.colors.footer-strong": &footstrong { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"77\"]", captured: "2026-09-30" }
    "tokens.colors.stat": &stat { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.colors.legacy-ink": &tabon { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"8\"]", captured: "2026-09-30" }
    "tokens.colors.legacy-label": &notice { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-09-30" }
    "tokens.colors.legacy-canvas": *notice
    "tokens.colors.legacy-faint": &taboff { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"9\"]", captured: "2026-09-30" }
    "tokens.colors.tab-hover": &tabstate { surface_id: surface-2, source_id: 8percent-probe-disclosures, method: live-state-probe, selector: "a 이용정보 (53.7 x 19, fg rgb(156, 165, 173)): hover and pressed fg -> rgb(142, 142, 142) on the label and its selected bar; focus (Tab #23) outline rgb(110, 73, 218) solid 2px offset 2px; selected 경영현황 no change on hover or pressed, focus (Tab #22) the same ring", captured: "2026-09-30" }
    "tokens.colors.select-border": &select { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"11\"]", captured: "2026-09-30" }
    "tokens.typography.family.body": *body
    "tokens.typography.stat.size": *stat
    "tokens.typography.stat.weight": *stat
    "tokens.typography.stat.lineHeight": *stat
    "tokens.typography.stat.tracking": *stat
    "tokens.typography.stat.use": *stat
    "tokens.typography.section.size": &h3 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-09-30" }
    "tokens.typography.section.weight": *h3
    "tokens.typography.section.lineHeight": *h3
    "tokens.typography.section.tracking": *h3
    "tokens.typography.section.use": *h3
    "tokens.typography.nav.size": &gnbsel { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-09-30" }
    "tokens.typography.nav.weight": *gnbsel
    "tokens.typography.nav.lineHeight": *gnbsel
    "tokens.typography.nav.tracking": *gnbsel
    "tokens.typography.nav.use": *gnbsel
    "tokens.typography.card-title.size": &title { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::span", captured: "2026-09-30" }
    "tokens.typography.card-title.weight": *title
    "tokens.typography.card-title.lineHeight": *title
    "tokens.typography.card-title.tracking": *title
    "tokens.typography.card-title.use": *title
    "tokens.typography.tab-active.size": *tabon
    "tokens.typography.tab-active.weight": *tabon
    "tokens.typography.tab-active.lineHeight": *tabon
    "tokens.typography.tab-active.tracking": *tabon
    "tokens.typography.tab-active.use": *tabon
    "tokens.typography.tab.size": *taboff
    "tokens.typography.tab.weight": *taboff
    "tokens.typography.tab.lineHeight": *taboff
    "tokens.typography.tab.tracking": *taboff
    "tokens.typography.tab.use": *taboff
    "tokens.typography.button.size": *login
    "tokens.typography.button.weight": *login
    "tokens.typography.button.lineHeight": *login
    "tokens.typography.button.tracking": *login
    "tokens.typography.button.use": *login
    "tokens.typography.rate.size": *rate
    "tokens.typography.rate.weight": *rate
    "tokens.typography.rate.lineHeight": *rate
    "tokens.typography.rate.tracking": *rate
    "tokens.typography.rate.use": *rate
    "tokens.typography.link.size": *disclink
    "tokens.typography.link.weight": *disclink
    "tokens.typography.link.lineHeight": *disclink
    "tokens.typography.link.tracking": *disclink
    "tokens.typography.link.use": *disclink
    "tokens.typography.body.size": *body
    "tokens.typography.body.weight": *body
    "tokens.typography.body.lineHeight": *body
    "tokens.typography.body.use": *body
    "tokens.typography.footer.size": *foot
    "tokens.typography.footer.weight": *foot
    "tokens.typography.footer.lineHeight": *foot
    "tokens.typography.footer.tracking": *foot
    "tokens.typography.footer.use": *foot
    "tokens.typography.meta.size": *meta
    "tokens.typography.meta.weight": *meta
    "tokens.typography.meta.lineHeight": *meta
    "tokens.typography.meta.tracking": *meta
    "tokens.typography.meta.use": *meta
    "tokens.typography.badge.size": &gnbbadge { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::span", captured: "2026-09-30" }
    "tokens.typography.badge.weight": *gnbbadge
    "tokens.typography.badge.lineHeight": *gnbbadge
    "tokens.typography.badge.tracking": *gnbbadge
    "tokens.typography.badge.use": *gnbbadge
    "tokens.spacing.control-x": *login
    "tokens.spacing.card": *panel
    "tokens.spacing.card-frame": &card { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"13\"]", captured: "2026-09-30" }
    "tokens.spacing.notice-x": *notice
    "tokens.spacing.chip-x": &chip { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::span", captured: "2026-09-30" }
    "tokens.rounded.select": *select
    "tokens.rounded.control": *login
    "tokens.rounded.card": *card
    "tokens.rounded.notice": *notice
    "tokens.rounded.pill": *gnbbadge
    "tokens.components.login-button.type": *login
    "tokens.components.login-button.bg": *login
    "tokens.components.login-button.fg": *login
    "tokens.components.login-button.radius": *login
    "tokens.components.login-button.padding": *login
    "tokens.components.login-button.height": *login
    "tokens.components.login-button.font": *login
    "tokens.components.login-button.hover": &loginstate { surface_id: home, source_id: 8percent-probe-home, method: live-state-probe, selector: "button 로그인 (59.5 x 40, rest bg rgb(110, 73, 218), fg rgb(255, 255, 255), transition all 0s): hover background-image overlay rgba(255, 255, 255, 0.08), pressed rgba(255, 255, 255, 0.16); focus (Tab #21) outline rgb(110, 73, 218) solid 2px offset 2px; the same on /disclosures/management/ (Tab #21)", captured: "2026-09-30" }
    "tokens.components.login-button.pressed": *loginstate
    "tokens.components.login-button.focus": *loginstate
    "tokens.components.login-button.states": *loginstate
    "tokens.components.login-button.use": *login
    "tokens.components.gnb-menu.type": &gnb { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"2\"]", captured: "2026-09-30" }
    "tokens.components.gnb-menu.fg": *gnb
    "tokens.components.gnb-menu.font": *gnb
    "tokens.components.gnb-menu.selected": *gnbsel
    "tokens.components.gnb-menu.hover": &gnbstate { surface_id: home, source_id: 8percent-probe-home, method: live-state-probe, selector: "button 투자 (45 x 24.8, fg rgb(110, 73, 218)): hover and pressed turn the caret span to matrix(-1, 0, 0, -1, 0, 0) with a 150ms transition; focus (Tab #2) outline rgb(110, 73, 218) solid 2px offset 2px", captured: "2026-09-30" }
    "tokens.components.gnb-menu.pressed": *gnbstate
    "tokens.components.gnb-menu.focus": *gnbstate
    "tokens.components.gnb-menu.states": *gnbstate
    "tokens.components.gnb-menu.use": *gnb
    "tokens.components.invest-button.type": *invest
    "tokens.components.invest-button.bg": *invest
    "tokens.components.invest-button.fg": *invest
    "tokens.components.invest-button.radius": *invest
    "tokens.components.invest-button.padding": *invest
    "tokens.components.invest-button.height": *invest
    "tokens.components.invest-button.font": *invest
    "tokens.components.invest-button.hover": &investstate { surface_id: home, source_id: 8percent-probe-home, method: live-state-probe, selector: "button 투자하기 (261.3 x 40, rest bg rgb(236, 235, 252), fg rgb(110, 73, 218), transition all 0s): hover background-image overlay rgba(0, 0, 0, 0.04), pressed rgba(0, 0, 0, 0.08); focus (Tab #29) outline rgb(110, 73, 218) solid 2px offset 2px", captured: "2026-09-30" }
    "tokens.components.invest-button.pressed": *investstate
    "tokens.components.invest-button.focus": *investstate
    "tokens.components.invest-button.disabled": *investoff
    "tokens.components.invest-button.states": *investstate
    "tokens.components.invest-button.use": *invest
    "tokens.components.cart-button.type": &cart { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"14\"]", captured: "2026-09-30" }
    "tokens.components.cart-button.bg": *cart
    "tokens.components.cart-button.radius": *cart
    "tokens.components.cart-button.size": *cart
    "tokens.components.cart-button.hover": &cartstate { surface_id: home, source_id: 8percent-probe-home, method: live-state-probe, selector: "button 장바구니 (40 x 40, rest bg rgb(244, 244, 245)): hover background-image overlay rgba(0, 0, 0, 0.04), pressed rgba(0, 0, 0, 0.08); focus (Tab #28) outline rgb(110, 73, 218) solid 2px offset -2px", captured: "2026-09-30" }
    "tokens.components.cart-button.pressed": *cartstate
    "tokens.components.cart-button.focus": *cartstate
    "tokens.components.cart-button.states": *cartstate
    "tokens.components.cart-button.use": *cart
    "tokens.components.invest-all-button.type": *all
    "tokens.components.invest-all-button.bg": *all
    "tokens.components.invest-all-button.fg": *all
    "tokens.components.invest-all-button.radius": *all
    "tokens.components.invest-all-button.padding": *all
    "tokens.components.invest-all-button.height": *all
    "tokens.components.invest-all-button.font": *all
    "tokens.components.invest-all-button.hover": &allstate { surface_id: home, source_id: 8percent-probe-home, method: live-state-probe, selector: "button 전체 상품, 한 번에 투자해볼까요? (234 x 40, rest bg rgb(241, 246, 254), fg rgb(24, 24, 27), transition opacity 0.2s ease): hover opacity 1 -> 0.8, pressed 1 -> 0.6; focus (Tab #26) outline rgb(110, 73, 218) solid 2px offset 2px", captured: "2026-09-30" }
    "tokens.components.invest-all-button.pressed": *allstate
    "tokens.components.invest-all-button.focus": *allstate
    "tokens.components.invest-all-button.states": *allstate
    "tokens.components.invest-all-button.use": *all
    "tokens.components.notice-link.type": *notice
    "tokens.components.notice-link.bg": *notice
    "tokens.components.notice-link.fg": *notice
    "tokens.components.notice-link.radius": *notice
    "tokens.components.notice-link.padding": *notice
    "tokens.components.notice-link.height": *notice
    "tokens.components.notice-link.font": *notice
    "tokens.components.notice-link.focus": &noticestate { surface_id: home, source_id: 8percent-probe-home, method: live-state-probe, selector: "a [공지] 2026년 추석 연휴 기간 서비스 이용 안내 (1080 x 56, rest bg rgb(241, 243, 245), fg rgb(75, 82, 90)): hover and pressed no change across self, 2 descendants and 3 ancestor levels; focus (Tab #24) outline rgb(110, 73, 218) solid 2px offset 2px", captured: "2026-09-30" }
    "tokens.components.notice-link.states": *noticestate
    "tokens.components.notice-link.use": *notice
    "tokens.components.disclosure-tab.type": *taboff
    "tokens.components.disclosure-tab.fg": *taboff
    "tokens.components.disclosure-tab.font": *taboff
    "tokens.components.disclosure-tab.selected": *tabon
    "tokens.components.disclosure-tab.hover": *tabstate
    "tokens.components.disclosure-tab.pressed": *tabstate
    "tokens.components.disclosure-tab.focus": *tabstate
    "tokens.components.disclosure-tab.states": *tabstate
    "tokens.components.disclosure-tab.use": *taboff
    "tokens.components.year-select.type": *select
    "tokens.components.year-select.bg": *select
    "tokens.components.year-select.fg": *select
    "tokens.components.year-select.border": *select
    "tokens.components.year-select.radius": *select
    "tokens.components.year-select.padding": *select
    "tokens.components.year-select.height": *select
    "tokens.components.year-select.font": *select
    "tokens.components.year-select.focus": &selectstate { surface_id: surface-2, source_id: 8percent-probe-disclosures, method: live-state-probe, selector: "select (74 x 40, rest bg rgb(255, 255, 255), fg rgb(60, 60, 60), transition background-color, color, border-color 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67)): hover adds only an inset 0px shadow, nothing drawn; pressed UNMEASURED (:active did not match); focus (Tab #25) outline rgb(110, 73, 218) solid 2px offset 2px", captured: "2026-09-30" }
    "tokens.components.year-select.states": *selectstate
    "tokens.components.year-select.use": *select
    "tokens.components.deal-card.type": *card
    "tokens.components.deal-card.bg": *card
    "tokens.components.deal-card.radius": *card
    "tokens.components.deal-card.padding": *card
    "tokens.components.deal-card.size": *card
    "tokens.components.deal-card.use": *card
    "tokens.components.deal-card-panel.type": *panel
    "tokens.components.deal-card-panel.bg": *panel
    "tokens.components.deal-card-panel.radius": *panel
    "tokens.components.deal-card-panel.padding": *panel
    "tokens.components.deal-card-panel.use": *panel
    "tokens.components.gnb-badge.type": *gnbbadge
    "tokens.components.gnb-badge.bg": *gnbbadge
    "tokens.components.gnb-badge.fg": *gnbbadge
    "tokens.components.gnb-badge.radius": *gnbbadge
    "tokens.components.gnb-badge.padding": *gnbbadge
    "tokens.components.gnb-badge.font": *gnbbadge
    "tokens.components.gnb-badge.use": *gnbbadge
    "tokens.components.deal-chip.type": *chip
    "tokens.components.deal-chip.bg": *chip
    "tokens.components.deal-chip.fg": *chip
    "tokens.components.deal-chip.radius": *chip
    "tokens.components.deal-chip.padding": *chip
    "tokens.components.deal-chip.height": *chip
    "tokens.components.deal-chip.font": *chip
    "tokens.components.deal-chip.use": *chip
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#6e49da"
    on-primary: "#ffffff"
    primary-tint: "#ecebfc"
    blue: "#377dfa"
    blue-tint: "#f1f6fe"
    link-blue: "#3282f0"
    link-violet: "#6741d9"
    ink: "#18181b"
    canvas: "#f4f4f5"
    surface: "#ffffff"
    muted: "#8e8e95"
    faint: "#aaaab1"
    disabled: "#e4e4e7"
    footer-strong: "#5a5a60"
    stat: "#3c3c3c"
    legacy-ink: "#1d2024"
    legacy-label: "#4b525a"
    legacy-canvas: "#f1f3f5"
    legacy-faint: "#9ca5ad"
    tab-hover: "#8e8e8e"
    select-border: "#dee2e5"
  typography:
    family: { body: "Pretendard" }
    stat: { size: 40, weight: 400, lineHeight: 1.1, tracking: -0.9, use: "누적 대출액 figure on home, 44px line, in #3c3c3c" }
    section: { size: 24, weight: 700, lineHeight: 1.5, tracking: -0.6, use: "Product-list headings (모집중 상품, 오픈 예정 상품) on home and the deals page, 36px line, in #18181b" }
    nav: { size: 16, weight: 700, lineHeight: 1.55, tracking: -0.32, use: "Header menu triggers (투자, 대출), 24.8px line" }
    card-title: { size: 16, weight: 700, lineHeight: 1.55, tracking: -0.32, use: "Deal-card property name, 24.8px line, in #18181b" }
    tab-active: { size: 16, weight: 700, lineHeight: 1.75, tracking: -0.3, use: "Selected disclosure tab (경영현황), 28px line, in #1d2024" }
    tab: { size: 16, weight: 400, lineHeight: 1.5, tracking: -0.4, use: "Unselected disclosure tabs (이용정보, 취급현황), 24px line, in #9ca5ad" }
    button: { size: 14, weight: 700, lineHeight: 1.55, tracking: -0.28, use: "Button labels (로그인, 투자하기), 21.7px line" }
    rate: { size: 14, weight: 700, lineHeight: 1.55, tracking: -0.28, use: "Interest rate on deal cards, 21.7px line, in #377dfa" }
    link: { size: 14, weight: 700, lineHeight: 1.71, tracking: -0.6, use: "Text links under home sections (사업공시 보러가기 in #3282f0, 언론기사 link in #6741d9), 24px line" }
    body: { size: 14, weight: 400, lineHeight: 1.15, use: "Document default on all three pages, 16.1px line, in #18181b" }
    footer: { size: 14, weight: 400, lineHeight: 1.55, tracking: -0.28, use: "Footer contact values, 21.7px line, in #8e8e95" }
    meta: { size: 12, weight: 400, lineHeight: 1.6, tracking: -0.12, use: "Deal-card meta line (주거안정 7103호), 19.2px line, in #aaaab1" }
    badge: { size: 10, weight: 700, lineHeight: 1.6, tracking: -0.1, use: "Header badge and deal-card chips, 16px line" }
  spacing: { control-x: 12, card: 16, card-frame: 4, notice-x: 16, chip-x: 8 }
  rounded: { select: 3, control: 8, card: 12, notice: 16, pill: 9999 }
  components:
    login-button: { type: button, bg: "#6e49da", fg: "#ffffff", radius: "8px", padding: "1px 12px", height: "40px", font: "14px / 700 / 21.7px Pretendard, letter-spacing -0.28px", hover: "white overlay rgba(255, 255, 255, 0.08) laid over the fill as a background-image", pressed: "white overlay rgba(255, 255, 255, 0.16)", focus: "2px solid #6e49da outline at 2px offset", states: "probe on home and /disclosures/management/: hover and pressed add a white overlay layer (the fill itself stays #6e49da), focus draws the violet ring; transition all 0s", use: "로그인 at the right end of the header on all three pages, 59.5 x 40; the one filled action a logged-out visitor sees on every page" }
    gnb-menu: { type: tab, fg: "#18181b", font: "16px / 700 / 24.8px Pretendard, letter-spacing -0.32px", selected: "fg #6e49da on the current section (투자 on home and the deals page)", hover: "the caret beside the label turns 180 degrees", pressed: "the caret turns 180 degrees", focus: "2px solid #6e49da outline at 2px offset", states: "probe on 투자: hover and pressed flip the caret over a 150ms transition, the label colour does not change; focus draws the violet ring", use: "Header menu triggers 투자 and 대출 (45 x 25); 법인투자, 상담, 회사소개, 이용안내 and 혜택 follow in lighter 14px items" }
    invest-button: { type: button, bg: "#ecebfc", fg: "#6e49da", radius: "8px", padding: "1px 12px", height: "40px", font: "14px / 700 / 21.7px Pretendard, letter-spacing -0.28px", hover: "black overlay rgba(0, 0, 0, 0.04)", pressed: "black overlay rgba(0, 0, 0, 0.08)", focus: "2px solid #6e49da outline at 2px offset", disabled: "bg #e4e4e7, fg #aaaab1 on cards not yet open (내일 오전 10시 오픈)", states: "probe: hover and pressed add a black overlay layer, focus draws the violet ring; disabled read from the attribute at capture", use: "투자하기 at the foot of each open deal card on home and the deals page, 261 x 40" }
    cart-button: { type: button, bg: "#f4f4f5", radius: "8px", size: "40px x 40px", hover: "black overlay rgba(0, 0, 0, 0.04)", pressed: "black overlay rgba(0, 0, 0, 0.08)", focus: "2px solid #6e49da outline at -2px offset (inset)", states: "probe: same overlay steps as 투자하기; the focus ring sits inside the square", use: "장바구니 icon button beside 투자하기 on each deal card" }
    invest-all-button: { type: button, bg: "#f1f6fe", fg: "#18181b", radius: "8px", padding: "6px 16px 6px 12px", height: "40px", font: "14px / 400 / 16.1px Pretendard", hover: "opacity 0.8", pressed: "opacity 0.6", focus: "2px solid #6e49da outline at 2px offset", states: "probe: opacity steps over a 0.2s ease transition, read after it settled; focus draws the violet ring", use: "전체 상품, 한 번에 투자해볼까요? above the product list on home and the deals page, 234 x 40, with a small image before the label" }
    notice-link: { type: button, bg: "#f1f3f5", fg: "#4b525a", radius: "16px", padding: "0px 16px", height: "56px", font: "14px / 400 / 16.1px Pretendard", focus: "2px solid #6e49da outline at 2px offset", states: "probe: hover and pressed show no change across the link, its two children and three ancestor levels; focus draws the violet ring", use: "[공지] announcement row above the product list on home, 1080 x 56" }
    disclosure-tab: { type: tab, fg: "#9ca5ad", font: "16px / 400 / 24px Pretendard, letter-spacing -0.4px", selected: "fg #1d2024, 16px / 700 / 28px, letter-spacing -0.3px", hover: "fg #8e8e8e", pressed: "fg #8e8e8e", focus: "2px solid #6e49da outline at 2px offset", states: "probe on 이용정보: hover and pressed turn the label and its selected bar #8e8e8e; the selected 경영현황 does not change; focus draws the violet ring on both", use: "Section tabs of 사업공시 (경영현황, 이용정보, 취급현황) on /disclosures/management/" }
    year-select: { type: input, bg: "#ffffff", fg: "#3c3c3c", border: "1px solid #dee2e5", radius: "3px", padding: "0px 28px 0px 10px", height: "40px", font: "14px / 400 / 16.1px Pretendard", focus: "2px solid #6e49da outline at 2px offset", states: "probe: hover draws nothing (an inset shadow of zero size), pressed unmeasured, focus draws the violet ring", use: "Year pickers of 임직원 현황 and 전문가 보유내역 on the disclosures page, 74 x 40" }
    deal-card: { type: card, bg: "#f4f4f5", radius: "12px", padding: "4px 4px 8px", size: "349px x 285px", use: "Outer frame of each deal card on home and the deals page; the whole card carries role=button and a white panel sits inside it, with the meta line on the grey frame below" }
    deal-card-panel: { type: card, bg: "#ffffff", radius: "12px", padding: "16px", use: "White panel inside the deal card holding the property name, rate, 유효담보비율, term, amounts and the two buttons" }
    gnb-badge: { type: badge, bg: "#377dfa", fg: "#ffffff", radius: "9999px", padding: "2px 6px", font: "10px / 700 / 16px Pretendard, letter-spacing -0.1px", use: "Small blue pill beside a header menu item on all three pages, 29 x 20" }
    deal-chip: { type: badge, bg: "#f4f4f5", fg: "#18181b", radius: "8px", padding: "0px 8px", height: "24px", font: "10px / 700 / 16px Pretendard, letter-spacing -0.1px", use: "Chip badge on deal cards (대단지), 42 x 24" }
  components_harvested: true
---

# Design System Inspiration of 8percent

## 1. Visual Theme & Atmosphere

8percent (에잇퍼센트) is a Korean online investment-linked finance company. Its own disclosure page gives the facts: 주식회사 에잇퍼센트 was founded on 13 November 2014, registered as online investment-linked finance business no. 2021-2 on 10 June 2021, is led by CEO 이효진 and employs 71 people from Citi Plaza in Yeouido, Seoul. Its careers page tells the founding story: young workers and mid-credit borrowers forced into loans above 20% while savers could find no stable place to invest, so 8percent set out to cut interest burdens and open an alternative investment — "대한민국 1호 중금리 전문 금융 서비스" (Korea's first mid-rate specialist). It also calls itself the first financial institution built only in Python and Korea's first registered 온라인투자연계금융기관. The home page leads with numbers, dated 2026.09.30: 누적 대출액 1조 5,119억 2,116만 원, 대출 잔액 2,481억 2,833만 원 and 20,031,763 investments. The product it shows logged-out visitors is a marketplace of real-estate-backed notes, each card giving a rate, a loan-to-value figure (유효담보비율), a term and the amount still open.

The brand is in the middle of an evolution. The home page's own press summaries record a rebrand that unified the service name and introduced a new logo built from the numeral 8 and a percent sign, and the site now carries a new line, "맞닿아 펼쳐진 금융 가능성". The interface is being moved to a new design system at the same time: the page markup declares cascade layers `legacy-reboot, eds.reset, eds.tokens, eds.base, eds.components, eds.utilities`, and its components carry `edsn-` class names. The company has written about its in-house EDS (Eight Design System) and the `eds-wc` web-component library on its product blog since 2024. The new system shows in the header, deal cards and footer: `#18181b` ink on a `#f4f4f5` canvas, white panels, 8px and 12px corners and one violet, `#6e49da`, which the stylesheet names `--color-bg-brand-violet-default`. Older styles remain on the disclosures tabs, the notice row and the headline figure (`#1d2024`, `#9ca5ad`, `#3c3c3c`, `#f1f3f5`).

Everything is set in Pretendard, and no captured element carries a drop shadow. Interaction is uniform. Filled buttons get a white overlay on hover and pressed, tonal and grey ones a black overlay, and every probed control draws the same 2px violet focus ring.

**Key Characteristics:**
- One violet `#6e49da` for the persistent 로그인 action, the selected header section, the 투자하기 label and the focus ring; its pale partner `#ecebfc` fills the tonal 투자하기 button
- A second brand colour, blue `#377dfa`, for interest rates and the header badge; its tint `#f1f6fe` fills the 전체 상품 action
- New-system neutrals: `#18181b` ink, `#f4f4f5` canvas, `#ffffff` panels, `#8e8e95` and `#aaaab1` secondary text, `#e4e4e7` disabled fill
- Legacy neutrals still live on some pages: `#1d2024`, `#9ca5ad`, `#3c3c3c`, `#4b525a`, `#f1f3f5`, `#dee2e5`
- Pretendard only, 400 and 700, with negative tracking on nearly every role
- State by overlay, not by new fills: white 8% and 16% on violet, black 4% and 8% on tonal and grey; focus is always a 2px `#6e49da` ring
- Flat: every recorded element computes `box-shadow: none`

## Primary tasks

- Browse open real-estate-backed notes, each with its rate, 유효담보비율, term and remaining amount
- Invest in all open products in one action (전체 상품, 한 번에 투자해볼까요?)
- See which products open next (오픈 예정 상품)
- Read the regulatory business disclosures before committing money
- Refinance a high-rate loan into a lower-rate one

## 2. Color Palette & Roles

Every token below was read on 2026-09-30 from the logged-out home page, /disclosures/management/ and /deals/real-estate-special/ by the deterministic collector, and state values by the fixed keyboard probe. The tokens describe 8percent's public website; the 8percent app was not captured.

### Primary
- **Brand Violet** (`#6e49da`): The fill of 로그인, the one filled action in the header of all three captured pages (59.5 × 40, 8px radius, `#ffffff` label). It is the primary because it renders in every primary role the site has: the persistent header action, the label of the current header section (투자 on home and the deals page), the label of each deal card's 투자하기 button, and the 2px focus ring the probe read on every control it reached. The site's stylesheet names this value `--color-bg-brand-violet-default` and uses it for the brand violet border too.
- **On Primary** (`#ffffff`): The 로그인 label, the header badge label and the deal-card panels.
- **Violet Tint** (`#ecebfc`): The fill of the tonal 투자하기 button (named `--color-bg-brand-violet-tertiary` in the stylesheet), with a `#6e49da` label.

### Accent
- **Brand Blue** (`#377dfa`): The interest rate on each deal card and the fill of the small header badge. The stylesheet names it `--color-bg-brand-blue-default` and `--color-blue-500`. It marks figures and news, not actions.
- **Blue Tint** (`#f1f6fe`): The fill of 전체 상품, 한 번에 투자해볼까요?, the soft action above the product list.
- **Link Blue** (`#3282f0`): The text link 사업공시 보러가기 under the home statistics. Until the July 2026 record it was treated as the primary; on 2026-09-30 it renders only on this link and on banner and new-item dots.
- **Link Violet** (`#6741d9`): The text link under the home press section.

### Neutral & Surface
- **Canvas** (`#f4f4f5`): The body background on all three pages, the deal-card frame, the cart button and the deal chips.
- **Surface** (`#ffffff`): The deal-card panels and the year selectors.
- **Disabled** (`#e4e4e7`): The fill of 투자하기 on cards not yet open, with a `#aaaab1` label.
- **Select Border** (`#dee2e5`): The 1px border of the disclosure year selectors.
- **Legacy Canvas** (`#f1f3f5`): The fill of the [공지] announcement row on home.

### Text
- **Ink** (`#18181b`): The document default text colour on all three pages, headings of the product lists and deal-card names.
- **Muted** (`#8e8e95`): Footer contact values and links, and the amounts on deal cards.
- **Faint** (`#aaaab1`): The deal-card meta line and disabled labels.
- **Footer Strong** (`#5a5a60`): Bold footer lines.
- **Stat** (`#3c3c3c`): The 40px 누적 대출액 figure on home and the year-selector labels.
- **Legacy Ink** (`#1d2024`): The selected disclosure tab.
- **Legacy Label** (`#4b525a`): The text of the announcement row.
- **Legacy Faint** (`#9ca5ad`): Unselected disclosure tabs; they turn **Tab Hover** `#8e8e8e` on hover and pressed.

### Brand assets, not tokens
- The hero banner carousel on home carries small labels on campaign fills (`#3282f0`, `#68be66`, `#6741d9`, `#fd7470`, `#414a5c`, `#6da5ff`) and a `#18181b` counter badge. They belong to banner artwork and are not colour tokens; their visible label colours were not recorded.
- The new logo (built from the numeral 8 and a percent sign, per the home page's press summary) was not measured; no logo colour is claimed.

## 3. Typography Rules

### Font Family
- **Live surface use**: `Pretendard` (554 observed uses across body, headings, buttons, cards, badges and inputs), `loaded / high`, self-hosted by 8percent from `cdn.8percent.kr/fonts/Pretendard/` as subset WOFF2 and WOFF files (Light, Regular, SemiBold, Bold) with TTF fallbacks. The body computes `Pretendard, system-ui, sans-serif` on all three pages.
- **Official distributed font assets**: Pretendard is an open-source Korean typeface by Kil Hyung-jin (orioncactus); its LICENSE, opened on 2026-09-30, states the SIL Open Font License 1.1. The identification rests on the served file names and the declared family; the files' name tables were not inspected.
- **Official product use**: no 8percent page opened this session names its typeface, so no statement of official product use is made.
- **Declared only / unresolved**: none. The July record's `NanumSquare` for the product blog was not checked this session and is not claimed.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Observed on |
|------|------|------|--------|-------------|----------|-------------|
| Stat | Pretendard | 40px | 400 | 44px (1.1) | -0.9px | 누적 대출액 figure on home, `#3c3c3c` |
| Section | Pretendard | 24px | 700 | 36px (1.5) | -0.6px | 모집중 상품, 오픈 예정 상품 |
| Tab Active | Pretendard | 16px | 700 | 28px (1.75) | -0.3px | Selected disclosure tab, `#1d2024` |
| Nav | Pretendard | 16px | 700 | 24.8px (1.55) | -0.32px | Header menu triggers |
| Card Title | Pretendard | 16px | 700 | 24.8px (1.55) | -0.32px | Deal-card property name |
| Tab | Pretendard | 16px | 400 | 24px (1.5) | -0.4px | Unselected disclosure tabs, `#9ca5ad` |
| Link | Pretendard | 14px | 700 | 24px (1.71) | -0.6px | 사업공시 보러가기 |
| Button | Pretendard | 14px | 700 | 21.7px (1.55) | -0.28px | 로그인, 투자하기 |
| Rate | Pretendard | 14px | 700 | 21.7px (1.55) | -0.28px | Deal-card rate, `#377dfa` |
| Footer | Pretendard | 14px | 400 | 21.7px (1.55) | -0.28px | Footer values, `#8e8e95` |
| Body | Pretendard | 14px | 400 | 16.1px (1.15) | normal | Document default |
| Meta | Pretendard | 12px | 400 | 19.2px (1.6) | -0.12px | Deal-card meta, `#aaaab1` |
| Badge | Pretendard | 10px | 700 | 16px (1.6) | -0.1px | Header badge, deal chips |

### Principles
- **One family, two main weights**: 400 for reading and 700 for anything that names or acts; the only 40px figure stays at 400.
- **Tight by default**: new-system roles track about -2% of their size (-0.28px at 14px, -0.32px at 16px); the legacy headings go further (-0.6px at 24px, -0.9px at 40px).
- **Numbers carry colour sparingly**: the rate is the only figure in blue; everything else on a card is ink or grey.

## 4. Component Stylings

### Buttons

**Login (primary)**
- Background: `#6e49da`
- Text: `#ffffff`
- Radius: 8px
- Padding: 1px 12px
- Height: 40px (59.5px wide)
- Font: 14px / 700 / 21.7px Pretendard, letter-spacing -0.28px
- Hover: white overlay `rgba(255, 255, 255, 0.08)` over the fill
- Pressed: white overlay `rgba(255, 255, 255, 0.16)`
- Focus: 2px solid `#6e49da` outline at 2px offset
- Use: 로그인 in the header of all three pages

**Invest (tonal)**
- Background: `#ecebfc`
- Text: `#6e49da`
- Radius: 8px
- Padding: 1px 12px
- Height: 40px
- Font: 14px / 700 / 21.7px Pretendard, letter-spacing -0.28px
- Hover: black overlay `rgba(0, 0, 0, 0.04)`
- Pressed: black overlay `rgba(0, 0, 0, 0.08)`
- Focus: 2px solid `#6e49da` outline at 2px offset
- Disabled: background `#e4e4e7`, text `#aaaab1` (cards opening later)
- Use: 투자하기 on each open deal card

**Cart (icon)**
- Background: `#f4f4f5`
- Radius: 8px
- Size: 40 × 40
- Hover / pressed: black overlay 4% / 8%
- Focus: 2px solid `#6e49da` outline at -2px offset
- Use: 장바구니 beside 투자하기

**Invest all (soft)**
- Background: `#f1f6fe`
- Text: `#18181b`
- Radius: 8px
- Padding: 6px 16px 6px 12px
- Height: 40px
- Font: 14px / 400 / 16.1px Pretendard
- Hover: opacity 0.8
- Pressed: opacity 0.6
- Focus: 2px solid `#6e49da` outline at 2px offset
- Use: 전체 상품, 한 번에 투자해볼까요? above the product list

**Announcement row**
- Background: `#f1f3f5`
- Text: `#4b525a`
- Radius: 16px
- Padding: 0px 16px
- Height: 56px (1080px wide)
- Font: 14px / 400 / 16.1px Pretendard
- States: no hover or pressed change; focus draws the violet ring
- Use: [공지] row above the product list on home

### Tabs & Navigation

**Header menu**
- Text: `#18181b`; the current section `#6e49da`
- Font: 16px / 700 / 24.8px Pretendard, letter-spacing -0.32px
- Hover / pressed: the caret beside the label turns 180 degrees; the colour does not change
- Focus: 2px solid `#6e49da` outline at 2px offset
- Use: 투자 and 대출, followed by lighter 14px items (법인투자, 상담, 회사소개, 이용안내, 혜택)

**Disclosure tabs**
- Text: `#9ca5ad`, 16px / 400 / 24px, letter-spacing -0.4px
- Selected: `#1d2024`, 16px / 700 / 28px, letter-spacing -0.3px
- Hover / pressed: `#8e8e8e` (label and its bar)
- Focus: 2px solid `#6e49da` outline at 2px offset
- Use: 경영현황, 이용정보, 취급현황 on 사업공시

### Inputs

**Year select**
- Background: `#ffffff`
- Text: `#3c3c3c`
- Border: 1px solid `#dee2e5`
- Radius: 3px
- Padding: 0px 28px 0px 10px
- Height: 40px
- Font: 14px / 400 / 16.1px Pretendard
- Focus: 2px solid `#6e49da` outline at 2px offset
- Use: year pickers on the disclosures page

### Cards & Badges

**Deal card**
- Frame: `#f4f4f5`, 12px radius, 4px 4px 8px padding, 349 × 285
- Panel: `#ffffff`, 12px radius, 16px padding
- Rate `#377dfa` 14px / 700; name `#18181b` 16px / 700; meta `#aaaab1` 12px; amounts `#8e8e95` 12px
- Use: every product on home and the deals page; the whole card is clickable (role=button)

**Header badge**
- Background: `#377dfa`
- Text: `#ffffff`
- Radius: 9999px
- Padding: 2px 6px
- Font: 10px / 700 / 16px Pretendard

**Deal chip**
- Background: `#f4f4f5`
- Text: `#18181b`
- Radius: 8px
- Padding: 0px 8px
- Height: 24px
- Font: 10px / 700 / 16px Pretendard
- Use: 대단지 and similar chips on deal cards

---

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out pages of 8percent.kr plus fixed keyboard-probe state reads and first-party context)
**Tier 1 sources:** https://www.8percent.kr/ ; https://www.8percent.kr/disclosures/management/ ; https://www.8percent.kr/deals/real-estate-special/ ; https://8percent.careers.team/ ; https://8percent.github.io/2024-07-15/frontend-eds-improvement/
**Tier 2 sources:** not attempted on 2026-09-30; no Tier 2 value used (getdesign.md and styles.refero.design do not count toward the KR requirement)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Buttons: 12px horizontal padding at 40px height; the soft action uses 6px 16px 6px 12px
- Deal cards: a 4px grey frame (8px at the foot) around a white panel with 16px padding
- Announcement row: 16px horizontal padding at 56px height
- Chips: 8px horizontal padding at 24px height
- Frequent spacing values in the capture: 8, 4, 12, 20 and 2px

### Grid & Container
- A fixed header (logo, menu triggers, 로그인) over a full-width hero banner carousel.
- Home stacks the announcement row, the product list as a grid of 349px cards inside a 1080px column, the 오픈 예정 상품 grid, the statistics band, feature banners, a press carousel and the footer.
- The deals page repeats the product grid under a banner; the disclosures page places tabs over tables and year selectors.

### Whitespace Philosophy
- **Grey canvas, white panels**: grouping comes from the `#f4f4f5` canvas against `#ffffff` panels, not from borders or shadows.
- **Dense cards, calm chrome**: each card packs rate, 유효담보비율, term and amounts in 12–16px type while the page around it stays open.

### Border Radius Scale
- 0px: the default (458 of the recorded radii)
- 3px: year selectors
- 8px: buttons, cart buttons, chips (43 uses)
- 12px: deal-card frame and panel
- 16px: announcement row
- 9999px: header badge

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Every captured element |
| Canvas | `#f4f4f5` | Page background, card frames, cart buttons |
| Panel | `#ffffff` | Deal-card panels, selects |
| Overlay | white 8% / 16%, black 4% / 8% layers | Hover and pressed on buttons |

**Shadow Philosophy**: no recorded element draws a box-shadow (the year selector's hover adds an inset shadow of zero size, which draws nothing). Emphasis comes from the violet and blue, from white panels on grey, and from the state overlays.

## 7. Do's and Don'ts

### Do
- Use `#6e49da` for the one persistent action, the selected section and every focus ring
- Pair `#ecebfc` with a `#6e49da` label for per-item actions such as 투자하기
- Show state with overlays: white 8% / 16% on filled buttons, black 4% / 8% on tonal and grey ones
- Put figures that matter (rates) in `#377dfa` and everything else in ink or grey
- Set everything in Pretendard with tight negative tracking
- Keep surfaces flat: `#ffffff` panels on a `#f4f4f5` canvas

### Don't
- Don't make `#3282f0` the action colour; on the live site it is a text link, not a button fill
- Don't add drop shadows
- Don't invent new state colours; the system darkens or lightens with overlays and a violet ring
- Don't use the banner campaign colours as interface colours
- Don't rely on colour alone for risk; the cards pair each figure with its label (유효담보비율, 12개월)

## 8. Responsive Behavior

### Breakpoints
Only the 1440 × 900 desktop viewport was captured. Class names such as `mobile:tw-hidden` on the 전체 상품 action show that the pages restyle for mobile; no breakpoint value was measured.

### Touch Targets
- Announcement row: 56px
- 로그인, 투자하기, cart and soft actions: 40px
- Year selectors: 40px
- Deal chips: 24px

### Collapsing Strategy
Not captured.

### Image Behavior
- The hero banner is a full-width carousel with 240px-wide previous and next hit areas at each side.

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action, selection, focus: `#6e49da` with `#ffffff`; tonal `#ecebfc`
- Figures: `#377dfa`; soft action `#f1f6fe`
- Text: `#18181b` default, `#8e8e95` secondary, `#aaaab1` meta
- Canvas `#f4f4f5`, panels `#ffffff`, disabled `#e4e4e7`
- Legacy pages: `#1d2024` selected tab, `#9ca5ad` tabs, `#3c3c3c` figure, `#dee2e5` select border

### Example Component Prompts
- "Create a header login button: `#6e49da` background, `#ffffff` 14px Pretendard label at weight 700 with -0.28px tracking, 8px radius, 1px 12px padding, 40px tall; on hover lay a white 8% overlay over it, 16% when pressed; focus is a 2px solid `#6e49da` outline at 2px offset."
- "Create an investment card: a `#f4f4f5` frame with 12px radius and 4px padding around a white panel with 16px padding; property name 16px/700 `#18181b`, rate 14px/700 `#377dfa`, meta 12px `#aaaab1`; at the foot a 40px `#ecebfc` button with a `#6e49da` label (black 4% overlay on hover) beside a 40 × 40 `#f4f4f5` icon button."
- "Build disclosure tabs: unselected 16px/400 `#9ca5ad`, hover `#8e8e8e`; selected 16px/700 `#1d2024`."

### Iteration Guide
1. One violet (`#6e49da`) for action, selection and focus
2. Blue (`#377dfa`) only for figures and badges
3. Overlays for hover and pressed, never new fills
4. Pretendard everywhere, tight tracking
5. Flat grey canvas and white panels

---

## 10. Voice & Tone

8percent's voice is **plain, reassuring and evidence-led** — a finance platform that earns trust by showing its numbers and its licence rather than promising returns. The home page leads with dated statistics, the careers page with the problem the company set out to solve, and the disclosures page with a legal statement of transparency.

| Context | Tone |
|---|---|
| Statistics | Concrete and dated. "2026.09.30 기준 누적 대출액 1조 5,119억 2,116만 원." |
| Product cards | Functional. Rate, 유효담보비율, term and remaining amount, stated plainly. |
| Actions | Direct and low-pressure. "투자하기", "전체 상품, 한 번에 투자해볼까요?", "사업공시 보러가기". |
| Disclosure | Formal and transparent. "온라인투자연계금융법에 따라 사업 현황을 투명하게 공시합니다." |
| Brand line | Open and forward-looking. "맞닿아 펼쳐진 금융 가능성." |

**Voice samples (verbatim, opened 2026-09-30):**
- "모집중 상품" — home product-list heading.
- "곧 만나요! 오픈 예정 상품" — home, products opening next.
- "사업공시 보러가기" — home link under the statistics.
- "온라인투자연계금융법에 따라 사업 현황을 투명하게 공시합니다." — disclosures page.
- "다음 세대의 금융을 만들어 갑니다." — careers page.

**Forbidden register**: guaranteed-return language, urgency pressure on investments, unexplained financial jargon, exclamation-heavy hype.

## 11. Brand Narrative

8percent began with a gap its careers page describes directly: people who could not get enough credit from banks paid more than 20% interest, while savers in a low-rate era found no stable investment. The company's answer was to connect the two as "대한민국 1호 중금리 전문 금융 서비스", and it notes three firsts on the way — Korea's first mid-rate P2P service, the first financial institution built only in Python, and Korea's first registered online investment-linked finance institution. Its disclosures record the dates: founded on 13 November 2014, registered as 온투업 no. 2021-2 on 10 June 2021. The careers page adds that roughly eight years of data on mid-credit borrowers, whom banks did not assess, went into its own credit-scoring model, and the site's description now speaks of an AI-based credit-asset assessment solution that treats borrowers fairly and gives investors stable returns.

The home page keeps its own record of the company's evolution in its press section: a 10th-anniversary corporate white paper, an 온투업 user guide published as "1호 기업", CEO 이효진's meeting with U.S. Treasury Secretary Janet Yellen, growing corporate and institutional investment, and a rebrand, headlined "'8퍼센트' 10년 발자취 넘는다", that unified the service name and introduced a logo made of the numeral 8 and a percent sign. The new line "맞닿아 펼쳐진 금융 가능성" runs across the home page, the careers page and the site description. The interface is changing with it: a new component system (`edsn-`) now carries the header, deal cards and footer, following the EDS (Eight Design System) and `eds-wc` library the front-end team described on the product blog in July 2024.

What the design refuses, as observed: hard-sell urgency, guaranteed-return theatrics and decorative depth. What it keeps: dated figures at the top, one violet for action and focus, and a flat, legible card for every product.

## 12. Principles

1. **Show the numbers.** *UI implication:* lead with dated statistics and put each product's rate, 유효담보비율 and term on the card itself.
2. **One action colour.** *UI implication:* `#6e49da` marks the persistent action, the selected section and focus; per-item actions use its tint `#ecebfc`.
3. **Disclosure over persuasion.** *UI implication:* regulatory information gets plain tabbed pages that read like a filing.
4. **Consistent feedback.** *UI implication:* every button answers hover and press with the same overlay steps, and every control shows the same focus ring. (An editorial reading of the captured states, not an 8percent statement.)
5. **Flat and calm.** *UI implication:* no shadows; white panels on a grey canvas.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable 8percent user segments (Korean retail investors seeking mid-yield alternatives, borrowers refinancing high-rate loans), not individual people.*

**정민수, 34, 서울.** A salaried investor parking part of his savings for a better-than-deposit yield. Distrusts "guaranteed return" pitches; values that 8percent leads with dated loan figures and its registration number.

**한지영, 41, 경기.** A small-business owner who refinanced a high-rate loan into a lower-rate one. Appreciates terms shown plainly and an interface that feels like a calm tool.

**오세라, 29, 부산.** A cautious first-time investor who reads the disclosure tabs and each card's 유효담보비율 before committing.

## 14. States

Only these states were observed on the three captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Hover / pressed (filled)** | 로그인 keeps `#6e49da` and gains a white overlay, 8% on hover and 16% pressed. |
| **Hover / pressed (tonal, grey)** | 투자하기 and the cart button gain a black overlay, 4% and 8%. |
| **Hover / pressed (soft)** | 전체 상품 action: opacity 0.8 and 0.6. |
| **Hover / pressed (tabs)** | Unselected disclosure tabs turn `#8e8e8e`; the header menu flips its caret. |
| **No change** | The announcement row and the selected disclosure tab show no hover or pressed change. |
| **Focus** | Every probed control draws a 2px solid `#6e49da` outline at 2px offset (the cart button at -2px). |
| **Selected** | Header section `#6e49da`; disclosure tab `#1d2024` at weight 700. |
| **Disabled** | 투자하기 on cards opening later: `#e4e4e7` fill, `#aaaab1` label. |

Error, empty, loading and success states were not captured and are not described. The year selector's pressed state is unmeasured.

## 15. Motion & Easing

The probe read the transitions the controls compute. 로그인, 투자하기, the cart button, the announcement row and the disclosure tabs compute `transition: all 0s`, so their state changes are instant. The 전체 상품 action transitions opacity over 0.2s ease. The header menu's caret turns over a 150ms transition. The year selector transitions background colour, colour and border colour over 0.3s with `cubic-bezier(0.17, 0.67, 0.83, 0.67)`. Nothing else about motion (the banner carousels) was measured; treat it as unspecified and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/8percent.json (capturedAt 2026-09-30T09:56:01Z), deterministic collector, 1440x900, logged out: www.8percent.kr, /disclosures/management/, /deals/real-estate-special/. States: fixed keyboard probe raws docs/research/2026-09-29-growth/raw/8percent-states-home.json and 8percent-states-disclosures.json. CSS variable names read from the site's own stylesheet /assets/eight-BBN4IJlN.css.
- §1, §10, §11 context: the three pages' rendered text, the home HTML head (description, layer comment), 8percent.careers.team and 8percent.github.io/2024-07-15/frontend-eds-improvement/, opened 2026-09-30.
- §3 licence: the Pretendard LICENSE on GitHub, opened 2026-09-30.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->
