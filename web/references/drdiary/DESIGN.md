---
id: drdiary
name: Dr.diary
display_name_kr: 닥터다이어리
country: KR
category: healthcare
homepage: "https://drdiary.co.kr/"
primary_color: "#3eaeff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=drdiary.co.kr&sz=128"
verified: "2026-09-30"
added: "2026-07-02"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: marketing, url: "https://drdiary.co.kr/", inspected: "2026-09-30" }
    - { id: surface-2, kind: marketing, url: "https://drdiary.co.kr/solution", inspected: "2026-09-30" }
    - { id: surface-3, kind: corporate, url: "https://drdiary.co.kr/news/press", inspected: "2026-09-30" }
    - { id: surface-4, kind: corporate, url: "https://drdiary.co.kr/contact", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://drdiary.co.kr/", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://drdiary.co.kr/solution", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://drdiary.co.kr/news/press", captured: "2026-09-30" }
    - { id: surface-surface-4, kind: product-surface, url: "https://drdiary.co.kr/contact", captured: "2026-09-30" }
    - { id: drdiary-probe-contact, kind: product-surface, url: "https://drdiary.co.kr/contact", captured: "2026-09-30" }
    - { id: drdiary-probe-solution, kind: product-surface, url: "https://drdiary.co.kr/solution", captured: "2026-09-30" }
    - { id: drdiary-probe-press, kind: product-surface, url: "https://drdiary.co.kr/news/press", captured: "2026-09-30" }
    - { id: drdiary-blog, kind: official-doc, url: "https://blog.naver.com/drdiary_official", captured: "2026-09-30" }
    - { id: pretendard-license, kind: license, url: "https://raw.githubusercontent.com/orioncactus/pretendard/main/LICENSE", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &inquiry { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::[data-omd-capture=\"6\"]", captured: "2026-09-30" }
    "tokens.colors.primary-tint": &morestate { surface_id: surface-2, source_id: drdiary-probe-solution, method: live-state-probe, selector: "a 자세히 보기→ (204.1 x 64): hover and pressed bg rgba(0, 0, 0, 0) -> rgb(236, 247, 255); focus (Tab #14) no change", captured: "2026-09-30" }
    "tokens.colors.ink": &h2 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.colors.ink-pure": &body { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::body", captured: "2026-09-30" }
    "tokens.colors.slate": &nav { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-09-30" }
    "tokens.colors.slate-soft": &filter { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"7\"]", captured: "2026-09-30" }
    "tokens.colors.gray": &feature { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"7\"]", captured: "2026-09-30" }
    "tokens.colors.muted": &foot { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.faint": &morelink { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"6\"]", captured: "2026-09-30" }
    "tokens.colors.violet": &page { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"19\"]", captured: "2026-09-30" }
    "tokens.colors.violet-tint": *page
    "tokens.colors.surface": &contactcard { surface_id: surface-4, source_id: drdiary-probe-contact, method: live-state-probe, selector: "a 문의하기 (204.2 x 72), rest.ups up1 div.flex.items-center: bg rgb(245, 248, 251), border 1px solid rgb(222, 224, 228)", captured: "2026-09-30" }
    "tokens.colors.hairline": &card { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"9\"]", captured: "2026-09-30" }
    "tokens.colors.white": *body
    "tokens.typography.family.sans": *body
    "tokens.typography.display.size": &h1 { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::h1", captured: "2026-09-30" }
    "tokens.typography.display.weight": *h1
    "tokens.typography.display.lineHeight": *h1
    "tokens.typography.display.tracking": *h1
    "tokens.typography.display.use": *h1
    "tokens.typography.hero.size": &hero { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.hero.weight": *hero
    "tokens.typography.hero.lineHeight": *hero
    "tokens.typography.hero.tracking": *hero
    "tokens.typography.hero.use": *hero
    "tokens.typography.section.size": *h2
    "tokens.typography.section.weight": *h2
    "tokens.typography.section.lineHeight": *h2
    "tokens.typography.section.tracking": *h2
    "tokens.typography.section.use": *h2
    "tokens.typography.list.size": &li { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::li", captured: "2026-09-30" }
    "tokens.typography.list.weight": *li
    "tokens.typography.list.lineHeight": *li
    "tokens.typography.list.tracking": *li
    "tokens.typography.list.use": *li
    "tokens.typography.button.size": *inquiry
    "tokens.typography.button.weight": *inquiry
    "tokens.typography.button.lineHeight": *inquiry
    "tokens.typography.button.tracking": *inquiry
    "tokens.typography.button.use": *inquiry
    "tokens.typography.chip.size": &filtersel { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"6\"]", captured: "2026-09-30" }
    "tokens.typography.chip.weight": *filtersel
    "tokens.typography.chip.lineHeight": *filtersel
    "tokens.typography.chip.tracking": *filtersel
    "tokens.typography.chip.use": *filtersel
    "tokens.typography.nav.size": *nav
    "tokens.typography.nav.weight": *nav
    "tokens.typography.nav.lineHeight": *nav
    "tokens.typography.nav.tracking": *nav
    "tokens.typography.nav.use": *nav
    "tokens.typography.tab.size": &tabsel { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"11\"]", captured: "2026-09-30" }
    "tokens.typography.tab.weight": *tabsel
    "tokens.typography.tab.lineHeight": *tabsel
    "tokens.typography.tab.tracking": *tabsel
    "tokens.typography.tab.use": *tabsel
    "tokens.typography.card-title.size": &h3 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-09-30" }
    "tokens.typography.card-title.weight": *h3
    "tokens.typography.card-title.lineHeight": *h3
    "tokens.typography.card-title.tracking": *h3
    "tokens.typography.card-title.use": *h3
    "tokens.typography.body.size": *body
    "tokens.typography.body.weight": *body
    "tokens.typography.body.lineHeight": *body
    "tokens.typography.body.use": *body
    "tokens.typography.caption.size": *foot
    "tokens.typography.caption.weight": *foot
    "tokens.typography.caption.lineHeight": *foot
    "tokens.typography.caption.tracking": *foot
    "tokens.typography.caption.use": *foot
    "tokens.spacing.cta-y": *inquiry
    "tokens.spacing.cta-x": *inquiry
    "tokens.spacing.chip-y": *filtersel
    "tokens.spacing.chip-x": *filtersel
    "tokens.spacing.nav-y": *nav
    "tokens.spacing.nav-x": *nav
    "tokens.spacing.card-pad": &featuresel { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"6\"]", captured: "2026-09-30" }
    "tokens.rounded.pager-sm": &pagedis { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"17\"]", captured: "2026-09-30" }
    "tokens.rounded.pager": *page
    "tokens.rounded.store": &store { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"19\"]", captured: "2026-09-30" }
    "tokens.rounded.card": *card
    "tokens.rounded.card-lg": *feature
    "tokens.rounded.pill": *inquiry
    "tokens.components.inquiry-button.type": *inquiry
    "tokens.components.inquiry-button.bg": *inquiry
    "tokens.components.inquiry-button.fg": *inquiry
    "tokens.components.inquiry-button.border": *inquiry
    "tokens.components.inquiry-button.radius": *inquiry
    "tokens.components.inquiry-button.padding": *inquiry
    "tokens.components.inquiry-button.height": *inquiry
    "tokens.components.inquiry-button.font": *inquiry
    "tokens.components.inquiry-button.hover": &inqstate { surface_id: surface-4, source_id: drdiary-probe-contact, method: live-state-probe, selector: "a 문의하기 (first of five, 204.2 x 72): hover and pressed opacity 1 -> 0.8 (transition all 0s); focus (Tab #7) no change across self, 2 descendants and 3 ancestor levels", captured: "2026-09-30" }
    "tokens.components.inquiry-button.pressed": *inqstate
    "tokens.components.inquiry-button.states": *inqstate
    "tokens.components.inquiry-button.use": *inquiry
    "tokens.components.more-button.type": &more { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"13\"]", captured: "2026-09-30" }
    "tokens.components.more-button.bg": *more
    "tokens.components.more-button.fg": *more
    "tokens.components.more-button.border": *more
    "tokens.components.more-button.radius": *more
    "tokens.components.more-button.padding": *more
    "tokens.components.more-button.height": *more
    "tokens.components.more-button.font": *more
    "tokens.components.more-button.hover": *morestate
    "tokens.components.more-button.pressed": *morestate
    "tokens.components.more-button.states": *morestate
    "tokens.components.more-button.use": *more
    "tokens.components.consult-button.type": &consult { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"14\"]", captured: "2026-09-30" }
    "tokens.components.consult-button.bg": *consult
    "tokens.components.consult-button.fg": *consult
    "tokens.components.consult-button.radius": *consult
    "tokens.components.consult-button.padding": *consult
    "tokens.components.consult-button.height": *consult
    "tokens.components.consult-button.font": *consult
    "tokens.components.consult-button.states": { surface_id: surface-2, source_id: drdiary-probe-solution, method: live-state-probe, selector: "button 상담 신청하기 (269.8 x 70): hover and pressed no change across self, 1 descendant and 3 ancestor levels; focus (Tab #15) changes only the arrow image source", captured: "2026-09-30" }
    "tokens.components.consult-button.use": *consult
    "tokens.components.filter-chip.type": *filter
    "tokens.components.filter-chip.bg": *filter
    "tokens.components.filter-chip.fg": *filter
    "tokens.components.filter-chip.border": *filter
    "tokens.components.filter-chip.radius": *filter
    "tokens.components.filter-chip.padding": *filter
    "tokens.components.filter-chip.height": *filter
    "tokens.components.filter-chip.font": *filter
    "tokens.components.filter-chip.selected": *filtersel
    "tokens.components.filter-chip.states": { surface_id: surface-3, source_id: drdiary-probe-press, method: live-state-probe, selector: "button 언론 (selected, 91.1 x 64) and 미디어 (111.6 x 64): hover, pressed and focus (Tabs #7 and #8) no change", captured: "2026-09-30" }
    "tokens.components.filter-chip.use": *filter
    "tokens.components.underline-tab.type": &tab { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"12\"]", captured: "2026-09-30" }
    "tokens.components.underline-tab.fg": *tab
    "tokens.components.underline-tab.padding": *tab
    "tokens.components.underline-tab.height": *tab
    "tokens.components.underline-tab.font": *tab
    "tokens.components.underline-tab.selected": *tabsel
    "tokens.components.underline-tab.hover": &tabstate { surface_id: surface-2, source_id: drdiary-probe-solution, method: live-state-probe, selector: "button 클래스 (127.3 x 38): hover and pressed fg rgb(189, 193, 202) -> rgb(79, 89, 113); focus (Tab #13) no change", captured: "2026-09-30" }
    "tokens.components.underline-tab.pressed": *tabstate
    "tokens.components.underline-tab.states": *tabstate
    "tokens.components.underline-tab.use": *tab
    "tokens.components.feature-card-button.type": *feature
    "tokens.components.feature-card-button.bg": *feature
    "tokens.components.feature-card-button.fg": *feature
    "tokens.components.feature-card-button.border": *feature
    "tokens.components.feature-card-button.radius": *feature
    "tokens.components.feature-card-button.padding": *feature
    "tokens.components.feature-card-button.height": *feature
    "tokens.components.feature-card-button.font": *feature
    "tokens.components.feature-card-button.selected": *featuresel
    "tokens.components.feature-card-button.hover": &featurestate { surface_id: surface-2, source_id: drdiary-probe-solution, method: live-state-probe, selector: "button 휴먼 코칭 (347 x 84): hover and pressed border 1px solid rgb(222, 224, 228) -> 1px solid rgb(79, 89, 113); focus (Tab #8) changes only an icon image source", captured: "2026-09-30" }
    "tokens.components.feature-card-button.pressed": *featurestate
    "tokens.components.feature-card-button.states": *featurestate
    "tokens.components.feature-card-button.use": *feature
    "tokens.components.press-card.type": *card
    "tokens.components.press-card.bg": *card
    "tokens.components.press-card.border": *card
    "tokens.components.press-card.radius": *card
    "tokens.components.press-card.size": *card
    "tokens.components.press-card.states": { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"8\"]::state-hover", captured: "2026-09-30" }
    "tokens.components.press-card.use": *card
    "tokens.components.pagination-button.type": &pager { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"20\"]", captured: "2026-09-30" }
    "tokens.components.pagination-button.fg": *pager
    "tokens.components.pagination-button.radius": *pager
    "tokens.components.pagination-button.size": *pager
    "tokens.components.pagination-button.font": *pager
    "tokens.components.pagination-button.selected": *page
    "tokens.components.pagination-button.disabled": *pagedis
    "tokens.components.pagination-button.states": { surface_id: surface-3, source_id: drdiary-probe-press, method: live-state-probe, selector: "button 2 (40 x 40): hover, pressed and focus (Tab #19) no change", captured: "2026-09-30" }
    "tokens.components.pagination-button.use": *pager
    "tokens.components.store-button.type": *store
    "tokens.components.store-button.bg": *store
    "tokens.components.store-button.fg": *store
    "tokens.components.store-button.border": *store
    "tokens.components.store-button.radius": *store
    "tokens.components.store-button.padding": *store
    "tokens.components.store-button.height": *store
    "tokens.components.store-button.font": *store
    "tokens.components.store-button.states": { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"19\"]::state-hover", captured: "2026-09-30" }
    "tokens.components.store-button.use": *store
    "tokens.components.nav-item.type": *nav
    "tokens.components.nav-item.fg": *nav
    "tokens.components.nav-item.padding": *nav
    "tokens.components.nav-item.height": *nav
    "tokens.components.nav-item.font": *nav
    "tokens.components.nav-item.selected": { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"2\"]", captured: "2026-09-30" }
    "tokens.components.nav-item.states": *nav
    "tokens.components.nav-item.use": *nav
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#3eaeff"
    primary-tint: "#ecf7ff"
    ink: "#232f4d"
    ink-pure: "#000000"
    slate: "#4f5971"
    slate-soft: "#656d82"
    gray: "#7b8294"
    muted: "#9197a6"
    faint: "#bdc1ca"
    violet: "#4970f5"
    violet-tint: "#d7dffd"
    surface: "#f5f8fb"
    hairline: "#dee0e4"
    white: "#ffffff"
  typography:
    family: { sans: "Pretendard" }
    display: { size: 64, weight: 700, lineHeight: 1.38, tracking: -0.2, use: "Page headlines on /solution and /news/press (white over imagery) and /contact (in #232f4d), 88px line" }
    hero: { size: 64, weight: 600, lineHeight: 1.38, tracking: -0.2, use: "Home hero line (당신의 … 일상이 지속될 수 있도록), white over the hero image, 88px line" }
    section: { size: 40, weight: 600, lineHeight: 1.4, tracking: -0.2, use: "Section headings (닥터다이어리가 지향하는 가치, 걸어온 길), 56px line, in #232f4d or #000000" }
    list: { size: 24, weight: 400, lineHeight: 1.58, tracking: -0.2, use: "Timeline items under 걸어온 길 on home, 38px line, in #4f5971" }
    button: { size: 24, weight: 600, lineHeight: 1.58, tracking: -0.2, use: "Pill action labels (문의하기, 자세히 보기, 상담 신청하기), 38px line" }
    chip: { size: 24, weight: 500, lineHeight: 1.58, tracking: -0.2, use: "Press filter chips (언론, 미디어), 38px line" }
    nav: { size: 20, weight: 400, lineHeight: 1.6, tracking: -0.2, use: "Header navigation (Platform, Solution, Brand, News, Contact), 32px line; the current page's item is 700" }
    tab: { size: 20, weight: 600, lineHeight: 1.6, tracking: -0.2, use: "Underline tabs on /solution (커넥트, 클래스), 32px line" }
    card-title: { size: 18, weight: 500, lineHeight: 1.56, tracking: -0.1, use: "Press card titles, 28px line, in #232f4d; the same metrics set the store button labels" }
    body: { size: 16, weight: 400, lineHeight: 1.5, use: "Document default, 24px line, in #000000" }
    caption: { size: 16, weight: 400, lineHeight: 1.56, tracking: -0.1, use: "Footer address and captions, 25px line, in #9197a6" }
  spacing: { cta-y: 16, cta-x: 32, chip-y: 12, chip-x: 24, nav-y: 12, nav-x: 8, card-pad: 32 }
  rounded: { pager-sm: 4, pager: 6, store: 8, card: 16, card-lg: 20, pill: 9999 }
  components:
    inquiry-button: { type: button, bg: "#ffffff", fg: "#3eaeff", border: "1px solid #3eaeff", radius: "9999px", padding: "16px 32px", height: "72px", font: "24px / 600 / 38px Pretendard, letter-spacing -0.2px", hover: "opacity 0.8", pressed: "opacity 0.8", states: "probe on /contact: hover and pressed settle at opacity 0.8 (transition all 0s); focus (Tab #7) shows no change; the bundle's hover and pressed frames record no fill, text or border change", use: "문의하기 on the five inquiry cards of /contact (captures 6-10), 204 x 72, each on a #f5f8fb card with a #dee0e4 hairline; the label is a p and a blue arrow image" }
    more-button: { type: button, bg: "transparent", fg: "#3eaeff", border: "1px solid #3eaeff", radius: "9999px", padding: "12px 32px", height: "64px", font: "24px / 600 / 38px Pretendard", hover: "bg #ecf7ff", pressed: "bg #ecf7ff", states: "probe: hover and pressed settle on #ecf7ff after a 0.15s colour transition; focus (Tab #14) shows no change", use: "자세히 보기 → under the connect tab of /solution at surface-2::[data-omd-capture=\"13\"], 204 x 64" }
    consult-button: { type: button, bg: "#232f4d", fg: "#ffffff", radius: "9999px", padding: "16px 24px 16px 36px", height: "70px", font: "24px / 600 / 38px Pretendard", states: "probe: hover and pressed show no change; focus (Tab #15) swaps only the arrow image source, with no colour, border or outline change", use: "상담 신청하기 near the foot of /solution, 270 x 70, the only filled action captured" }
    filter-chip: { type: button, bg: "#ffffff", fg: "#656d82", border: "1px solid #dee0e4", radius: "9999px", padding: "12px 24px", height: "64px", font: "24px / 500 / 38px Pretendard", selected: "bg #232f4d, fg #ffffff", states: "probe: neither the selected nor the unselected chip changes on hover, pressed or focus", use: "Press filter chips on /news/press (언론 selected, 미디어), 91-112 x 64" }
    underline-tab: { type: tab, fg: "#bdc1ca", padding: "0px 38px 6px", height: "38px", font: "20px / 600 / 32px Pretendard", selected: "fg #232f4d with a 2px bottom border in #232f4d", hover: "fg #4f5971", pressed: "fg #4f5971", states: "probe: the unselected tab settles on #4f5971 on hover and pressed after a 0.15s colour transition; focus (Tab #13) shows no change", use: "커넥트 and 클래스 tabs on /solution, 127 x 38" }
    feature-card-button: { type: button, bg: "#ffffff", fg: "#7b8294", border: "1px solid #dee0e4", radius: "20px", padding: "12px 32px", height: "84px", font: "24px / 600 / 38px Pretendard", selected: "expands to 347 x 254 with padding 32px and label #232f4d; its own border is transparent in the capture", hover: "border #4f5971", pressed: "border #4f5971", states: "probe: hover and pressed settle on a #4f5971 border after a 0.2s transition; focus (Tab #8) swaps only an icon image", use: "Feature selector cards on /solution (휴먼 코칭, 전문 콘텐츠, 기록 관리 SW, 통계 리포트), 347 x 84" }
    press-card: { type: card, bg: "#ffffff", border: "1px solid #dee0e4", radius: "16px", size: "320px x 373px", states: "bundle hover and pressed frames on the /news/press cards show no fill, text or border change", use: "Press cards in the home news carousel (10 instances, 16px radius); the /news/press grid uses the same card at 376 x 372 with a 20px radius" }
    pagination-button: { type: button, fg: "#656d82", radius: "6px", size: "40px x 40px", font: "20px / 600 / 32px Pretendard", selected: "bg #d7dffd, fg #4970f5", disabled: "fg #bdc1ca with a 4px radius on the first and previous page arrows", states: "probe on page 2: hover, pressed and focus (Tab #19) show no change", use: "Pagination under the press grid on /news/press" }
    store-button: { type: button, bg: "transparent", fg: "#ffffff", border: "1px solid #ffffff", radius: "8px", padding: "12px 16px", height: "54px", font: "18px / 500 / 28px Pretendard, letter-spacing -0.1px", states: "bundle hover and pressed frames record no change", use: "Google Play and App Store links in the closing app band of every page, 158 x 54 and 143 x 54" }
    nav-item: { type: tab, fg: "#4f5971", padding: "12px 8px", height: "48px", font: "20px / 400 / 32px Pretendard", selected: "the current page's item turns 700; its label is gradient-clipped text, so no colour is declared", states: "selected variant from rest values on /solution, /news/press and /contact; no pointer frame", use: "Header navigation on all four pages (Platform, Solution, Brand, News, Contact)" }
  components_harvested: true
---

# Design System Inspiration of Dr.diary

## 1. Visual Theme & Atmosphere

Dr.diary (닥터다이어리) is a Seoul healthcare company that began in 2017 as a diary app for people with diabetes. Its own home page puts the origin in one line: "2017년, 당뇨병 환자의 더 나은 일상을 위해 닥터다이어리가 시작되었습니다." It then says where the company has gone since: "지금의 우리는 만성질환자를 넘어, 모두의 건강한 삶을 위한 행동 습관 변화 솔루션으로 성장하고 있습니다." The timeline on the same page traces that path. The app and a patient community launched in 2017. Dr.diary glucose meters and a test-strip subscription followed in 2021, and a Series B round and a Ministry of Health and Welfare certification for non-medical health management in 2022. The company then moved into foods (무화당 in 2020, 글루어트 in 2023), collaborated with Samsung on health services (2023–2024), launched the B2B 닥터다이어리 커넥트 (2024), and took part in hospital research and national MyData pilots in 2025. The company site is now less an app page than a company page. It explains a consumer app, a food line (무화당, 글루어트), and a B2B solution for organisations; the contact page's first inquiry type is 기업 EAP 솔루션 도입 문의.

The site reads calm and clinical-clean. The canvas is white (`#ffffff`). Headings sit in a deep navy ink (`#232f4d`), body copy in pure black (`#000000`), and a cool slate ladder (`#4f5971` → `#656d82` → `#7b8294` → `#9197a6` → `#bdc1ca`) steps text down in emphasis. The one chromatic accent in any action role is sky blue (`#3eaeff`). It draws the outline and label of the pill actions, 문의하기 on each inquiry card and 자세히 보기 on /solution, and the small accent labels above headings. The brand's warmth comes from a pink, violet and cyan gradient. It appears only as clipped text: the current page's navigation label, and the colour-tinted rotating words of the home hero (행복한, 건강한, 평온한). A supplementary survey read it, but the collector did not record it, so it is described here and not tokenised.

Everything is set in Pretendard, served from the site itself. Headlines are large and airy: 64px page titles with an 88px line, 40px/600 section heads, and 24px pill labels and timeline items. Pills are fully round (`9999px`), cards round at 16–20px, and separation comes from hairlines (`#dee0e4`) and pale tinted cards (`#f5f8fb`). Every element the collector recorded computes no shadow.

**Key Characteristics:**
- Sky blue (`#3eaeff`) as the one chromatic action colour: outline pills and accent labels; hover on the /solution pill fills it with `#ecf7ff`
- Navy ink (`#232f4d`) for headings, and as the fill of the single filled action and of selected chips and tabs
- Pink, violet and cyan gradient text on the current navigation item and the home hero words (survey-read; not a token)
- Pretendard for every role; large 24px labels, 40px section heads, 64px page titles
- Full pills (`9999px`) for actions and chips; 16px and 20px card radii; 8px store buttons
- Flat: hairline `#dee0e4` borders and `#f5f8fb` cards; no recorded shadow

## Primary tasks

- Log blood glucose for the first time after a diagnosis
- Spot patterns in logged glucose data before a doctor's visit
- Use the B2B health service offered through an employer
- Understand what the company offers for chronic-disease care
- Browse press and news items on the homepage

## 2. Color Palette & Roles

### Why sky blue is the primary
- **Sky Blue** (`#3eaeff`, the site's `brandblue100` class): the primary. It is the only chromatic colour in an action role on the captured pages. It draws the border and label of all five 문의하기 pills on /contact and of 자세히 보기 on /solution, which is six of the seven pill actions captured. It also colours accent labels on three pages: the `h3` eyebrows on /solution, the inquiry-type labels on /contact, and the outlet name on each home press card.
- **Navy** (`#232f4d`, `brand100`) fills the one remaining action, 상담 신청하기 on /solution, and the selected press filter chip and underline tab. It is also the heading ink across the site, the top of the neutral scale. Navy is therefore recorded as `ink` and as those components' fill, not as the primary.
- **Primary Tint** (`#ecf7ff`): the hover and pressed fill of 자세히 보기 (probe).

### Ink & Neutrals
- **Navy Ink** (`#232f4d`): section and card headings, footer links, the filled action, the selected chip and tab.
- **Pure Black** (`#000000`): document default and body copy.
- **Slate** (`#4f5971`): header navigation, timeline items, and the hover colour of unselected tabs and feature-card borders.
- **Slate Soft** (`#656d82`): unselected filter-chip labels and page numbers.
- **Gray** (`#7b8294`): labels of the unselected feature cards on /solution.
- **Muted** (`#9197a6`): footer address, captions, units beside large figures.
- **Faint** (`#bdc1ca`): 전체보기 links, unselected tabs, disabled pagination.

### Surface & Accent
- **White** (`#ffffff`): canvas, cards, store-button outlines over the closing band.
- **Surface** (`#f5f8fb`): the inquiry cards on /contact (probe).
- **Hairline** (`#dee0e4`): card, chip and feature-card borders.
- **Violet** (`#4970f5`) on **Violet Tint** (`#d7dffd`): the current page number; violet also colours the hashtag line on home (#당뇨병 예방·체중 관리).

### Brand assets outside the tokens
- The gradient in the navigation and hero is a pink → violet → cyan sweep of clipped text. A supplementary survey read its stops, recorded in `.verification.md`. Neither the collector nor a probe recorded it, so it is not a token.

## 3. Typography Rules

### Font Family
- **Sans (every role):** `Pretendard`, with a declared `pretendard Fallback` and system fallbacks. The collector saw it loaded and in use on 324 recorded elements (body, headings, buttons, list items), served from the site's own build as a variable face (weights 100–900). Pretendard is distributed under the SIL Open Font License 1.1. No Dr.diary page opened names its typeface, so there is no official product-use claim.

### Hierarchy

| Role | Size | Weight | Line height | Tracking | Colour | Notes |
|------|------|--------|-------------|----------|--------|-------|
| Display | 64px | 700 | 88px | -0.2px | white / `#232f4d` | Page headlines on /solution, /news/press, /contact |
| Hero | 64px | 600 | 88px | -0.2px | white | Home hero line |
| Section | 40px | 600 | 56px | -0.2px | `#232f4d` / `#000000` | Section headings |
| List | 24px | 400 | 38px | -0.2px | `#4f5971` | Timeline items |
| Button | 24px | 600 | 38px | -0.2px | `#3eaeff` / white | Pill actions |
| Chip | 24px | 500 | 38px | -0.2px | `#656d82` / white | Press filters |
| Nav | 20px | 400 (700 current) | 32px | -0.2px | `#4f5971` | Header navigation |
| Tab | 20px | 600 | 32px | -0.2px | `#bdc1ca` / `#232f4d` | Underline tabs |
| Card title | 18px | 500 | 28px | -0.1px | `#232f4d` | Press cards; store labels share the metrics |
| Body | 16px | 400 | 24px | normal | `#000000` | Document default |
| Caption | 16px | 400 | 25px | -0.1px | `#9197a6` | Footer, captions |

### Principles
- **One family, weight as hierarchy.** Pretendard carries every role; 400 → 500 → 600 → 700 does the work.
- **Large labels.** Actions, chips and timeline items all sit at 24px, bigger than the 16px body. The pages read like a presentation, not a dense app.
- **Tight negative tracking** (-0.2px) on everything from 20px up; -0.1px on 16–18px captions and titles.

## 4. Component Stylings

### Buttons

**Inquiry Pill (primary outline)**
- Background `#ffffff`, label and 1px border `#3eaeff`, radius 9999px, padding 16px 32px, 72px tall, 24px/600
- Hover and pressed: opacity 0.8 (probe); focus: no change
- Use: 문의하기 on each of the five inquiry cards of /contact

**More Pill (outline)**
- Transparent fill, label and 1px border `#3eaeff`, radius 9999px, padding 12px 32px, 64px tall
- Hover and pressed: fill `#ecf7ff` after a 0.15s colour transition (probe); focus: no change
- Use: 자세히 보기 → on /solution

**Consult Pill (filled)**
- Background `#232f4d`, label `#ffffff`, radius 9999px, padding 16px 24px 16px 36px, 70px tall
- Hover and pressed: no change; focus swaps only the arrow image (probe)
- Use: 상담 신청하기 on /solution

**Store Button (outline on the closing band)**
- Transparent fill, label and 1px border `#ffffff`, radius 8px, padding 12px 16px, 54px tall, 18px/500
- Use: Google Play and App Store links on every page

### Chips, Tabs & Selectors

**Filter Chip**: white fill, `#656d82` label, 1px `#dee0e4` border, 9999px radius, 12px 24px padding, 64px tall. Selected: `#232f4d` fill with a `#ffffff` label. Neither variant changes on hover, pressed or focus (probe).

**Underline Tab**: `#bdc1ca` label, padding 0 38px 6px, 38px tall, 20px/600. Selected: `#232f4d` label over a 2px `#232f4d` bottom border. Hover and pressed: `#4f5971` label (probe).

**Feature Card Selector**: white fill, `#7b8294` label, 1px `#dee0e4` border, 20px radius, 12px 32px padding, 84px tall. Selected: 347 × 254, padding 32px, label `#232f4d`. Hover and pressed: border `#4f5971` (probe).

**Pagination**: 40 × 40, `#656d82` numbers at 20px/600, 6px radius; the current page is `#4970f5` on `#d7dffd`; disabled arrows are `#bdc1ca` with a 4px radius.

### Cards

**Press Card**: white fill, 1px `#dee0e4` border, 16px radius, 320 × 373 in the home carousel (20px radius, 376 × 372, in the /news/press grid). Bundle hover and pressed frames show no change.

### Navigation

**Header Item**: `#4f5971` at 20px/400, padding 12px 8px, 48px tall. The current page's item turns 700 and its label is gradient-clipped text.

---

**Verified:** 2026-09-30 (deterministic collector on four public pages + fixed keyboard probe on three)
**Tier 1 sources:** https://drdiary.co.kr/ | https://drdiary.co.kr/solution | https://drdiary.co.kr/news/press | https://drdiary.co.kr/contact
**Tier 2 sources:** getdesign.md/drdiary and styles.refero.design/?q=drdiary — no Dr.diary entry
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing
- Pill actions: 16px 32px (inquiry) and 12px 32px (more); the filled consult pill 16px 24px 16px 36px
- Filter chips 12px 24px; header items 12px 8px; the selected feature card 32px
- The collector's most frequent padding and gap values are 12, 16, 4, 8, 32 and 24px

### Grid & Container
- Full-width hero image with a centred white headline on home; page heroes on /solution and /news/press follow the same pattern
- Press cards in a horizontally scrolling carousel on home (320px cards) and a three-column grid on /news/press
- /solution pairs a column of feature selector cards with a detail panel; /contact stacks five tinted inquiry cards, each with its own 문의하기 pill

### Border Radius Scale
- 4px disabled pagination arrows · 6px page numbers · 8px store buttons · 16px home press cards · 20px feature cards and the /news/press grid · 9999px pills and chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Every recorded element |
| Tint | `#f5f8fb` card with a `#dee0e4` hairline | Inquiry cards on /contact |
| Hairline | 1px `#dee0e4` | Press cards, chips, feature cards |

**Shadow philosophy:** every element the collector recorded computes no shadow. A supplementary survey read one soft, low-opacity navy shadow on an unrecorded home element (and a teal-tinted one on /solution). Those values are in `.verification.md`, and no shadow token is declared. Emphasis comes from colour instead: the sky-blue outline, the navy fill, the gradient text.

## 7. Do's and Don'ts

### Do
- Use sky blue (`#3eaeff`) for outline actions and accent labels; fill its hover with `#ecf7ff`
- Use navy (`#232f4d`) for headings, the filled action and selected chips and tabs
- Keep actions and chips fully round (`9999px`) and cards at 16–20px
- Set everything in Pretendard with -0.2px tracking at 20px and above
- Separate with `#dee0e4` hairlines and `#f5f8fb` cards

### Don't
- Don't fill large areas with sky blue; on the captured pages it is an outline and label colour
- Don't add drop shadows to cards or pills
- Don't treat the gradient as a flat colour token; it is clipped text on a few words
- Don't introduce a second typeface

## 8. Responsive Behavior

Only the 1440px desktop layout was captured. The class names show mobile variants (`m-body…` classes switching to `md:` sizes), but they were not measured, so no breakpoint table is given.

### Touch Targets (measured at 1440px)
- Pills 64–72px tall; filter chips 64px; feature cards 84px; store buttons 54px; header items 48px; page numbers 40 × 40

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary outline / accent: `#3eaeff`; its hover fill `#ecf7ff`
- Heading ink and filled action: `#232f4d`
- Body: `#000000`; slate ladder `#4f5971` → `#656d82` → `#7b8294` → `#9197a6` → `#bdc1ca`
- Current page: `#4970f5` on `#d7dffd`
- Canvas `#ffffff`; tinted card `#f5f8fb`; hairline `#dee0e4`

### Example Component Prompts
- "Inquiry card: #f5f8fb card with a 1px #dee0e4 border and 20px radius. Inside, a 문의하기 pill: white fill, 1px #3eaeff border, #3eaeff label at 24px/600 Pretendard, 9999px radius, 16px 32px padding, 72px tall; on hover, opacity 0.8."
- "Press filter: pills at 24px/500 Pretendard, 12px 24px padding, 9999px radius. Selected: #232f4d fill, white label. Unselected: white fill, #656d82 label, 1px #dee0e4 border."
- "Press card: white, 1px #dee0e4 border, 16px radius, no shadow; outlet name in #3eaeff at 16px/500; title 18px/500 #232f4d."

### Iteration Guide
1. Sky blue is an outline and label colour; navy is ink and the one fill
2. Pills and chips at 9999px; cards at 16–20px
3. Pretendard only; 24px labels, 40px sections, 64px page titles
4. No shadows; hairlines and pale tint separate
5. The gradient is prose, not a token

---

## 10. Voice & Tone

Dr.diary speaks warmly and plainly about a long-term condition. The home page frames the product around everyday wellbeing ("당신의 행복한 · 건강한 · 평온한 일상이 지속될 수 있도록", "일상의 모든 순간, 닥터다이어리"). The values section frames self-management as a marathon the company helps people finish: "사용자가 만성질환 관리라는 긴 마라톤을 포기하지 않고 완주할 수 있도록, 사용자의 일상 속 자가관리를 돕습니다."

| Context | Tone |
|---|---|
| Hero | Everyday, reassuring: "일상의 모든 순간, 닥터다이어리" |
| Values | Mission-framed, plain: SELF-MOTIVATION, COMMUNITY, DIGITAL THERAPEUTICS, DIGITAL MULTI-SOLUTION |
| Solution | B2B, concrete: 휴먼 코칭, 전문 콘텐츠, 기록 관리 SW, 통계 리포트; "상담 신청하기" |
| Contact | Direct: "궁금한 점은 아래 메일로 문의를 남겨…", one 문의하기 per inquiry type |
| Closing band | Invitational: "닥터다이어리와 함께 내일 더 건강한 나를 만나보세요." |

**Forbidden register:** fear-based medical urgency, undefined clinical jargon, guilt about health habits, hype.

## 11. Brand Narrative

Dr.diary started from one daily problem: people newly diagnosed with diabetes had to record glucose, food and medication by hand, alone. The 2017 app made that diary easy and added a community. In its own words, the company has since grown "만성질환자를 넘어, 모두의 건강한 삶을 위한 행동 습관 변화 솔루션으로".

Its timeline (home page, 걸어온 길) shows each step:
- **2017–2019:** app launch, community, the 닥다몰 store; diabetes camps and offline events; Seoul's diabetes-education contractor; an efficacy paper with Pusan National University; 200,000 downloads.
- **2020–2021:** the food brand 무화당; a Roche partnership; a Dr.diary glucose meter and a test-strip subscription; membership of the Digital Therapeutics Alliance; 500,000 downloads.
- **2022:** Series B; Ministry of Health and Welfare certification for non-medical health management (chronic-disease type); 800,000 downloads; 닥터다이어리 워크 and 클래스.
- **2023–2024:** a Samsung Electronics healthcare collaboration; the Financial Times' APAC high-growth companies list; 글루어트; 1.5 million downloads; 닥터다이어리 커넥트; a predicted-HbA1c algorithm in Samsung Health; insurer partnerships.
- **2025:** selection for a Ministry of Science and ICT MyData pilot; an MOU with Handok; 글루어트 clinical research with Seoul National University Hospital.

The values section names four directions: self-motivation, community, digital therapeutics (it calls itself the first Korean diabetes-category DTA member), and a multi-solution platform. Regional press it links from the home page describes the same turn toward hospital AI and chronic-care coaching (Bloter, Edaily; see `.verification.md`).

## 12. Principles

1. **Make the marathon finishable.** Self-management is long; *UI implication:* calm pages, big readable labels, one clear action per card.
2. **Plain over clinical.** *UI implication:* explain every term; headings in navy ink, never alarm colours.
3. **One accent, one fill.** *UI implication:* sky blue outlines the actions; navy fills the one that must stand out.
4. **Flat and light.** *UI implication:* hairlines and tints, no shadows.

## 13. Personas

*Fictional archetypes informed by the segments Dr.diary names (people with diabetes and chronic conditions, employers and public-health partners); not real people.*

**김도현, 34, 서울.** Newly diagnosed with type-2 diabetes and logging glucose for the first time. He chose an app that felt like a friendly consumer product, not a hospital chart.

**이서연, 41, 경기.** Manages a parent's condition alongside her own. She reads trends before doctor's visits and wants every term explained in plain Korean.

**박준영, 29, 부산.** Uses Dr.diary through an employer programme. He trusts it partly because of its hospital and public-health partnerships.

## 14. States

Observed only:
- **Hover / pressed:** inquiry pill opacity 0.8; more pill fill `#ecf7ff`; unselected tab label `#4f5971`; feature-card border `#4f5971`. The consult pill, filter chips, page numbers, press cards and store buttons show no change.
- **Selected:** filter chip `#232f4d` fill with a `#ffffff` label; underline tab `#232f4d` with a 2px bottom border; feature card expanded with a `#232f4d` label; page number `#4970f5` on `#d7dffd`; header item at 700 with gradient text.
- **Disabled:** first and previous page arrows in `#bdc1ca`.
- **Focus:** no captured control draws an authored focus style. The probe's Tab walk changed only image sources on two controls.

Empty, loading, error and success states belong to the app and were not captured.

## 15. Motion & Easing

Measured transitions only:
- `color, background-color, border-color, text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1)` on the more pill, underline tabs, pagination and the store buttons
- `all 0.2s cubic-bezier(0.4, 0, 0.2, 1)` on the feature selector cards
- `0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)` (a back-ease) on the home press cards and `0.15s cubic-bezier(0.4, 0, 0.2, 1)` on the /news/press cards, from the supplementary survey
- `all 0s` on the inquiry pill, the consult pill and the filter chips

No durations or easings beyond these are declared.

<!--
Sources (2026-09-30): artifacts/reference-evidence/drdiary.json (capturedAt 2026-09-30T11:08:27.308Z, four surfaces,
coverage 67); docs/research/2026-09-29-growth/raw/drdiary-states-contact.json, drdiary-states-solution.json,
drdiary-states-press.json (fixed keyboard probe). Narrative from the drdiary.co.kr home page (hero, values,
걸어온 길 timeline, footer). Personas are fictional. Details in .verification.md.
-->
