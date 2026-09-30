---
id: danawa
name: Danawa
display_name_kr: 다나와
country: KR
category: ecommerce
homepage: "https://www.danawa.com"
primary_color: "#2070eb"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=danawa.com&sz=128"
verified: "2026-09-30"
added: "2026-06-11"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: product, url: "https://www.danawa.com/", inspected: "2026-09-30" }
    - { id: surface-2, kind: product, url: "https://prod.danawa.com/list/?cate=112758", inspected: "2026-09-30" }
    - { id: surface-3, kind: product, url: "https://prod.danawa.com/info/?pcode=122659760", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://www.danawa.com/", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://prod.danawa.com/list/?cate=112758", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://prod.danawa.com/info/?pcode=122659760", captured: "2026-09-30" }
    - { id: danawa-probe-home, kind: product-surface, url: "https://www.danawa.com/", captured: "2026-09-30" }
    - { id: danawa-probe-product, kind: product-surface, url: "https://prod.danawa.com/info/?pcode=122659760", captured: "2026-09-30" }
    - { id: danawa-corp, kind: official-doc, url: "https://www.danawa.com/corp/aboutus/about_us.html?snb=0", captured: "2026-09-30" }
    - { id: danawa-bi, kind: official-doc, url: "https://www.danawa.com/corp/prcenter/bi.html?snb=2", captured: "2026-09-30" }
    - { id: connectwave-history, kind: official-doc, url: "https://www.connectwave.co.kr/cowave.html", captured: "2026-09-30" }
    - { id: pretendard-license, kind: license, url: "https://raw.githubusercontent.com/orioncactus/pretendard/main/LICENSE", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &sel { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"277\"]", captured: "2026-09-30" }
    "tokens.colors.on-primary": *sel
    "tokens.colors.category": &cat { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-09-30" }
    "tokens.colors.ink": &homebody { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::body", captured: "2026-09-30" }
    "tokens.colors.ink-soft": &h2 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.colors.body": &pbody { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::body", captured: "2026-09-30" }
    "tokens.colors.muted": &research { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"58\"]", captured: "2026-09-30" }
    "tokens.colors.muted-alt": &search { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"5\"]", captured: "2026-09-30" }
    "tokens.colors.action-dark": &buy { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"58\"]", captured: "2026-09-30" }
    "tokens.colors.action-dark-hover": &buyprobe { surface_id: surface-3, source_id: danawa-probe-product, method: live-state-probe, selector: "a[role=button] 최저가 구매하기 (124.2 x 32): hover and pressed bg rgb(51, 51, 51) -> rgb(20, 20, 20); transition all 0.3s ease-in-out; focus not run (--no-focus)", captured: "2026-09-30" }
    "tokens.colors.white": &listbody { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::body", captured: "2026-09-30" }
    "tokens.colors.surface": &clip { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.colors.tint": &kindoff { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"278\"]", captured: "2026-09-30" }
    "tokens.colors.hairline": &pager { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"46\"]", captured: "2026-09-30" }
    "tokens.colors.border": &select { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"192\"]", captured: "2026-09-30" }
    "tokens.colors.border-button": &sellerbuy { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"110\"]", captured: "2026-09-30" }
    "tokens.typography.family.body": *homebody
    "tokens.typography.product-title.size": &prodtit { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h3", captured: "2026-09-30" }
    "tokens.typography.product-title.weight": *prodtit
    "tokens.typography.product-title.use": *prodtit
    "tokens.typography.section.size": *h2
    "tokens.typography.section.weight": *h2
    "tokens.typography.section.lineHeight": *h2
    "tokens.typography.section.use": *h2
    "tokens.typography.tab.size": &tab { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h3", captured: "2026-09-30" }
    "tokens.typography.tab.weight": *tab
    "tokens.typography.tab.lineHeight": *tab
    "tokens.typography.tab.use": *tab
    "tokens.typography.search.size": &search2 { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"5\"]", captured: "2026-09-30" }
    "tokens.typography.search.weight": *search2
    "tokens.typography.search.lineHeight": *search2
    "tokens.typography.search.use": *search2
    "tokens.typography.button-lg.size": *cat
    "tokens.typography.button-lg.weight": *cat
    "tokens.typography.button-lg.lineHeight": *cat
    "tokens.typography.button-lg.use": *cat
    "tokens.typography.nav.size": &nav { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"32\"]", captured: "2026-09-30" }
    "tokens.typography.nav.weight": *nav
    "tokens.typography.nav.lineHeight": *nav
    "tokens.typography.nav.use": *nav
    "tokens.typography.button.size": *buy
    "tokens.typography.button.weight": *buy
    "tokens.typography.button.lineHeight": *buy
    "tokens.typography.button.use": *buy
    "tokens.typography.subsection.size": &h4 { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h4", captured: "2026-09-30" }
    "tokens.typography.subsection.weight": *h4
    "tokens.typography.subsection.use": *h4
    "tokens.typography.pill.size": *sel
    "tokens.typography.pill.weight": *sel
    "tokens.typography.pill.lineHeight": *sel
    "tokens.typography.pill.use": *sel
    "tokens.typography.badge.size": &badge { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::div", captured: "2026-09-30" }
    "tokens.typography.badge.weight": *badge
    "tokens.typography.badge.lineHeight": *badge
    "tokens.typography.badge.use": *badge
    "tokens.typography.body.size": *listbody
    "tokens.typography.body.weight": *listbody
    "tokens.typography.body.use": *listbody
    "tokens.spacing.badge-x": *badge
    "tokens.spacing.badge-y": *badge
    "tokens.spacing.category-x": *cat
    "tokens.spacing.category-y": *cat
    "tokens.spacing.search-left": *search
    "tokens.spacing.button-x": *buy
    "tokens.rounded.search": *search
    "tokens.rounded.pill": *sel
    "tokens.rounded.tab": *cat
    "tokens.rounded.card": &outline { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"265\"]", captured: "2026-09-30" }
    "tokens.rounded.pager": *pager
    "tokens.rounded.utility": *buy
    "tokens.components.category-button.type": *cat
    "tokens.components.category-button.bg": *cat
    "tokens.components.category-button.fg": *cat
    "tokens.components.category-button.border": *cat
    "tokens.components.category-button.radius": *cat
    "tokens.components.category-button.padding": *cat
    "tokens.components.category-button.height": *cat
    "tokens.components.category-button.font": *cat
    "tokens.components.category-button.hover": &catprobe { surface_id: home, source_id: danawa-probe-home, method: live-state-probe, selector: "button 전체 카테고리 (201 x 44, rest bg #06b87f, fg #ffffff, transition all 0s): hover and pressed label span.txt text-decoration none -> underline solid rgb(255, 255, 255); focus (Tab #32) outline none -> rgb(0, 95, 204) auto 1px", captured: "2026-09-30" }
    "tokens.components.category-button.pressed": *catprobe
    "tokens.components.category-button.focus": *catprobe
    "tokens.components.category-button.states": *catprobe
    "tokens.components.category-button.use": *cat
    "tokens.components.search-input.type": *search
    "tokens.components.search-input.bg": *search
    "tokens.components.search-input.fg": *search
    "tokens.components.search-input.radius": *search
    "tokens.components.search-input.padding": *search
    "tokens.components.search-input.height": *search
    "tokens.components.search-input.font": *search
    "tokens.components.search-input.hover": &searchprobe { surface_id: home, source_id: danawa-probe-home, method: live-state-probe, selector: "input 검색어를 입력해주세요. (434 x 44, rest bg #ffffff, fg #767676): hover and pressed NO CHANGE; focus (Tab #8) fg rgb(118, 118, 118) -> rgb(15, 15, 15), 16px -> 18px, padding 8px 0px 10px 20px -> 10px 0px 10px 20px, wrapper div.search__box shadow none -> rgba(0, 0, 0, 0.08) 2px 2px 6px 0px, all still present after blur", captured: "2026-09-30" }
    "tokens.components.search-input.focus": *searchprobe
    "tokens.components.search-input.states": *searchprobe
    "tokens.components.search-input.use": *search
    "tokens.components.filter-pill.type": *kindoff
    "tokens.components.filter-pill.bg": *kindoff
    "tokens.components.filter-pill.fg": *kindoff
    "tokens.components.filter-pill.radius": *kindoff
    "tokens.components.filter-pill.size": *kindoff
    "tokens.components.filter-pill.font": *kindoff
    "tokens.components.filter-pill.selected": *sel
    "tokens.components.filter-pill.hover": &pillprobe { surface_id: surface-3, source_id: danawa-probe-product, method: live-state-probe, selector: "a 전체보기 (220 x 38, rest bg #2070eb, fg #ffffff) and a 의견 (220 x 38, rest bg #ebf3ff, fg #555555): hover and pressed self and label text-decoration none -> underline solid in the label colour; fills unchanged; transition all 0s; focus not run", captured: "2026-09-30" }
    "tokens.components.filter-pill.pressed": *pillprobe
    "tokens.components.filter-pill.states": *pillprobe
    "tokens.components.filter-pill.use": *kindoff
    "tokens.components.buy-button.type": *buy
    "tokens.components.buy-button.bg": *buy
    "tokens.components.buy-button.fg": *buy
    "tokens.components.buy-button.radius": *buy
    "tokens.components.buy-button.padding": *buy
    "tokens.components.buy-button.height": *buy
    "tokens.components.buy-button.font": *buy
    "tokens.components.buy-button.hover": *buyprobe
    "tokens.components.buy-button.pressed": *buyprobe
    "tokens.components.buy-button.states": *buyprobe
    "tokens.components.buy-button.use": *buy
    "tokens.components.b2b-button.type": &b2b { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"59\"]", captured: "2026-09-30" }
    "tokens.components.b2b-button.bg": *b2b
    "tokens.components.b2b-button.fg": *b2b
    "tokens.components.b2b-button.border": *b2b
    "tokens.components.b2b-button.radius": *b2b
    "tokens.components.b2b-button.padding": *b2b
    "tokens.components.b2b-button.height": *b2b
    "tokens.components.b2b-button.font": *b2b
    "tokens.components.b2b-button.states": *b2b
    "tokens.components.b2b-button.use": *b2b
    "tokens.components.purchase-badge.type": *badge
    "tokens.components.purchase-badge.bg": *badge
    "tokens.components.purchase-badge.fg": *badge
    "tokens.components.purchase-badge.radius": *badge
    "tokens.components.purchase-badge.padding": *badge
    "tokens.components.purchase-badge.height": *badge
    "tokens.components.purchase-badge.font": *badge
    "tokens.components.purchase-badge.use": *badge
    "tokens.components.product-tab.type": *tab
    "tokens.components.product-tab.fg": *tab
    "tokens.components.product-tab.height": *tab
    "tokens.components.product-tab.font": *tab
    "tokens.components.product-tab.selected": *tab
    "tokens.components.product-tab.states": *tab
    "tokens.components.product-tab.use": *tab
    "tokens.components.clip-tab.type": *clip
    "tokens.components.clip-tab.bg": *clip
    "tokens.components.clip-tab.fg": *clip
    "tokens.components.clip-tab.height": *clip
    "tokens.components.clip-tab.font": *clip
    "tokens.components.clip-tab.selected": *clip
    "tokens.components.clip-tab.states": *clip
    "tokens.components.clip-tab.use": *clip
    "tokens.components.seller-buy-button.type": *sellerbuy
    "tokens.components.seller-buy-button.bg": *sellerbuy
    "tokens.components.seller-buy-button.fg": *sellerbuy
    "tokens.components.seller-buy-button.border": *sellerbuy
    "tokens.components.seller-buy-button.radius": *sellerbuy
    "tokens.components.seller-buy-button.size": *sellerbuy
    "tokens.components.seller-buy-button.font": *sellerbuy
    "tokens.components.seller-buy-button.states": *sellerbuy
    "tokens.components.seller-buy-button.use": *sellerbuy
    "tokens.components.detail-search-button.type": &detail { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"188\"]", captured: "2026-09-30" }
    "tokens.components.detail-search-button.bg": *detail
    "tokens.components.detail-search-button.fg": *detail
    "tokens.components.detail-search-button.radius": *detail
    "tokens.components.detail-search-button.size": *detail
    "tokens.components.detail-search-button.font": *detail
    "tokens.components.detail-search-button.states": *detail
    "tokens.components.detail-search-button.use": *detail
    "tokens.components.outline-button.type": *outline
    "tokens.components.outline-button.bg": *outline
    "tokens.components.outline-button.fg": *outline
    "tokens.components.outline-button.border": *outline
    "tokens.components.outline-button.radius": *outline
    "tokens.components.outline-button.size": *outline
    "tokens.components.outline-button.font": *outline
    "tokens.components.outline-button.shadow": *outline
    "tokens.components.outline-button.states": *outline
    "tokens.components.outline-button.use": *outline
    "tokens.components.pager-button.type": *pager
    "tokens.components.pager-button.bg": *pager
    "tokens.components.pager-button.fg": *pager
    "tokens.components.pager-button.border": *pager
    "tokens.components.pager-button.radius": *pager
    "tokens.components.pager-button.size": *pager
    "tokens.components.pager-button.states": *pager
    "tokens.components.pager-button.use": *pager
    "tokens.components.category-link.type": &catlink { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"19\"]", captured: "2026-09-30" }
    "tokens.components.category-link.bg": *catlink
    "tokens.components.category-link.fg": *catlink
    "tokens.components.category-link.radius": *catlink
    "tokens.components.category-link.size": *catlink
    "tokens.components.category-link.font": *catlink
    "tokens.components.category-link.hover": &catlinkprobe { surface_id: surface-3, source_id: danawa-probe-product, method: live-state-probe, selector: "a 전체 카테고리 (131 x 30, rest bg #06b87f, fg #ffffff, transition all 0s): hover and pressed NO CHANGE across self, 1 descendant and 3 ancestor levels; focus not run", captured: "2026-09-30" }
    "tokens.components.category-link.pressed": *catlinkprobe
    "tokens.components.category-link.states": *catlinkprobe
    "tokens.components.category-link.use": *catlink
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#2070eb"
    on-primary: "#ffffff"
    category: "#06b87f"
    ink: "#000000"
    ink-soft: "#0f0f0f"
    body: "#333333"
    muted: "#555555"
    muted-alt: "#767676"
    action-dark: "#333333"
    action-dark-hover: "#141414"
    white: "#ffffff"
    surface: "#f8f8f8"
    tint: "#ebf3ff"
    hairline: "#e0e0e0"
    border: "#bfbfbf"
    border-button: "#b9bec5"
  typography:
    family: { body: "Pretendard" }
    product-title: { size: 25, weight: 700, use: "Product name at the top of the product page (h3.prod_tit), in #333333, line-height normal" }
    section: { size: 21, weight: 700, lineHeight: 1.62, use: "Home section titles (h2.title), 34px line, in #0f0f0f; one 20px variant" }
    tab: { size: 19, weight: 700, lineHeight: 2.37, use: "Product-page section tabs (h3.tab_txt), 45px line; selected #2070eb, others #333333" }
    search: { size: 18, weight: 400, lineHeight: 1.11, use: "Search field text on the list page and on home once focused, 20px line, in #0f0f0f" }
    button-lg: { size: 16, weight: 700, lineHeight: 1.31, use: "전체 카테고리 button label on home, 21px line" }
    nav: { size: 15, weight: 400, lineHeight: 2.27, use: "Home service navigation links, 34px line, in #333333; one bold #2070eb item" }
    button: { size: 15, weight: 700, lineHeight: 2.13, use: "최저가 구매하기 and 대량구매 buttons on the product page, 32px line" }
    subsection: { size: 15, weight: 700, use: "Product-page block headings (h4.tit), in #333333, line-height normal" }
    pill: { size: 14, weight: 700, lineHeight: 2.64, use: "Selected filter pill label, 37px line; unselected pills are 400" }
    badge: { size: 12, weight: 700, lineHeight: 1.5, use: "Purchase badge on list and product-page ad cards, 18px line, white on #2070eb" }
    body: { size: 12, weight: 400, use: "Default body size on the list and product pages (home body is 16px), line-height normal" }
  spacing:
    badge-x: 6
    badge-y: 2
    category-x: 16
    category-y: 11
    search-left: 20
    button-x: 15
  rounded:
    search: 52
    pill: 19
    tab: 8
    card: 8
    pager: 4
    utility: 2
  components:
    category-button: { type: button, bg: "#06b87f", fg: "#ffffff", border: "bottom 1px #31cb9a", radius: "8px 8px 0px 0px", padding: "11px 16px", height: "44px", font: "16px / 700 / 21px Pretendard", hover: "label underline in white; fill unchanged", pressed: "label underline in white; fill unchanged", focus: "browser default outline only (rgb(0, 95, 204) auto 1px); no authored focus style", states: "probe on home: transition all 0s; hover and pressed underline the label; focus shows the default ring", use: "전체 카테고리 on the home header, the tab that opens the category tree" }
    search-input: { type: input, bg: "#ffffff", fg: "#767676", radius: "52px", padding: "8px 0px 10px 20px", height: "44px", font: "16px / 400 Pretendard", hover: "no change", focus: "text #0f0f0f at 18px, padding 10px 0px 10px 20px, wrapper shadow rgba(0, 0, 0, 0.08) 2px 2px 6px; the change persists after blur", states: "probe on home: hover and pressed no change; focus restyles the field and its wrapper", use: "Global search pill in the header of all three pages; the list page renders it in its focused style at rest" }
    filter-pill: { type: button, bg: "#ebf3ff", fg: "#555555", radius: "19px", size: "220px x 38px", font: "14px / 400 / 37px Pretendard", selected: "bg #2070eb, fg #ffffff, 700", hover: "label underline; fill unchanged", pressed: "label underline; fill unchanged", states: "probe on the product page: transition all 0s; focus not measured", use: "Opinion filter pills (전체보기, 의견 ...) in the product-page community block" }
    buy-button: { type: button, bg: "#333333", fg: "#ffffff", radius: "2px", padding: "0px 15px", height: "32px", font: "15px / 700 / 32px Pretendard", hover: "bg #141414", pressed: "bg #141414", states: "probe on the product page: transition all 0.3s ease-in-out, read after it settled; focus not measured", use: "최저가 구매하기, the product page's buy action" }
    b2b-button: { type: button, bg: "transparent", fg: "#333333", border: "1px solid #c4c4c4", radius: "2px", padding: "0px 12px", height: "32px", font: "15px / 700 / 32px Pretendard", states: "rest only; no state frame and not probed", use: "대량구매 beside the buy action on the product page" }
    purchase-badge: { type: badge, bg: "#2070eb", fg: "#ffffff", radius: "0px 0px 8px", padding: "2px 6px", height: "22px", font: "12px / 700 / 18px Pretendard", use: "Purchase badge on the corner of ad product cards (ten instances on the list and product pages)" }
    product-tab: { type: tab, fg: "#333333", height: "45px", font: "19px / 700 / 45px Pretendard", selected: "fg #2070eb", states: "selected variant read from rest values of sibling tabs; hover and focus not measured", use: "Section tabs on the product page (가격비교, 상품정보 ...)" }
    clip-tab: { type: tab, bg: "#f8f8f8", fg: "#333333", height: "37px", font: "14px / 400 Pretendard", selected: "bg #ffffff, fg #0f0f0f, 700", states: "selected variant read from rest values of sibling tabs; hover and focus not measured", use: "Vertical shopping-clip tabs on home (h2.main-clip__tab)" }
    seller-buy-button: { type: button, bg: "#ffffff", fg: "#333333", border: "1px solid #b9bec5", radius: "0px", size: "70px x 28px", font: "13px / 700 / 26px Pretendard", states: "rest on ten captured instances; no state frame and not probed", use: "Per-seller buy link in the price-comparison table (ten instances)" }
    detail-search-button: { type: button, bg: "#333333", fg: "#ffffff", radius: "2px", size: "90px x 28px", font: "12px / 400 / 28px Pretendard", states: "rest only; no state frame and not probed", use: "상세 검색 in the list page's filter bar" }
    outline-button: { type: button, bg: "#ffffff", fg: "#2070eb", border: "1px solid #2070eb", radius: "8px", size: "400px x 68px", font: "20px / 700 Pretendard", shadow: "rgba(0, 0, 0, 0.2) 0px 2px 8px 0px", states: "rest only; no state frame and not probed", use: "Large outlined blue button low on the product page; its label was not recorded; the only shadowed element captured" }
    pager-button: { type: button, bg: "#ffffff", fg: "#000000", border: "1px solid #e0e0e0", radius: "4px 0px 0px 4px", size: "20px x 20px", states: "rest on six captured pairs; no state frame and not probed", use: "Paired prev/next arrows on home carousels (the next arrow mirrors the radius)" }
    category-link: { type: button, bg: "#06b87f", fg: "#ffffff", radius: "2px", size: "131px x 30px", font: "12px / 400 Pretendard", hover: "no change", pressed: "no change", states: "probe on the product page: no hover or pressed change; focus not measured", use: "전체 카테고리 link above the product-page breadcrumb" }
  components_harvested: true
---

# Design System Inspiration of Danawa

## 1. Visual Theme & Atmosphere

Danawa (다나와) is a Korean price-comparison portal. Its own service page says it builds content and community around price comparison to supply "양질의 쇼핑정보", helping shoppers decide, and aims to be "온라인 쇼핑의 관문이자 첫걸음". It compares prices on computers, appliances, baby goods, games, cars, outdoor gear and more, with detailed option-level product data and one search box for everything. The home page title is its slogan, "비교하고 잘 사는, 다나와".

The company behind it has changed while the service has stayed the same. ConnectWave's history page says Koreacenter signed to buy 51.29% of (주)다나와 in 2021, and in 2022 Koreacenter and Danawa merged to form (주)커넥트웨이브. The Danawa footer now names (주)커넥트웨이브 as operator and content producer, headquartered in 가산동, Seoul. ConnectWave describes Danawa and 에누리 as "국내 최초 가격비교 플랫폼", built on 1.4 billion product records.

The interface is a dense information tool, not a showcase. On white (`#ffffff`), a near-black ladder does most of the work: `#000000` as the home body colour, `#0f0f0f` for section titles, `#333333` for product-page copy, `#555555` and `#767676` for secondary labels. Pretendard is the only face that loads. Most working sizes are 12–15px, with a 25px product name and 19–21px section headings. Grey (`#f8f8f8`) and pale blue (`#ebf3ff`) fills mark out zones. Hairlines (`#e0e0e0`, `#bfbfbf`, `#b9bec5`) separate controls. Only one recorded element in 1,469 has a shadow.

Colour is rationed by role. Blue `#2070eb` marks what is selected or promoted, and it appears on all three captured pages. On the product page it fills the selected filter pill and colours the selected section tab. On the list and product pages it fills the purchase badges on ad cards. On home it colours one bold navigation item. Green `#06b87f` fills only the 전체 카테고리 control, on home and on the product page. The buy action itself is dark: 최저가 구매하기 is `#333333` and turns `#141414` on hover.

**Key Characteristics:**
- Pretendard everywhere, loaded from `static.danawa.com`; dense 12–15px working sizes
- Blue `#2070eb` for selection and promotion: selected pill, selected tab, purchase badge
- Green `#06b87f` only on the 전체 카테고리 control; the BI green `#68c91c` belongs to the logo
- Dark `#333333` buy action with a `#141414` hover
- Near-black text ladder `#000000` / `#0f0f0f` / `#333333` / `#555555` / `#767676`
- Flat surfaces separated by hairlines and `#f8f8f8` / `#ebf3ff` fills
- Mixed geometry: a 52px search pill and 19px filter pills beside 2px and 0px utility buttons

## Primary tasks

- Search for a product and compare prices across sellers
- Browse a category list and narrow it with filters
- Open a product page, compare sellers and follow the lowest-price link
- Check a product's purchase and ad badges before choosing

## 2. Color Palette & Roles

### Primary
- **Selection Blue** (`#2070eb`): the primary colour. It fills the selected filter pill on the product page (white 700 label), colours the selected product-page tab, fills the purchase badge on ad cards, draws the border and label of the large outlined button, and colours one bold navigation item on home. It is the only saturated colour on all three captured pages in a selected or accent role, so it is the primary. Text on it is `#ffffff`.

### Category and action
- **Category Green** (`#06b87f`): fills 전체 카테고리 on home (201 × 44, bottom border `#31cb9a`) and on the product page (131 × 30). The list page does not use it; there, 전체 카테고리 is blue text. It is a navigation control, not the buy action.
- **Action Dark** (`#333333`): 최저가 구매하기 and 상세 검색. Hover `#141414`, read by the probe after the 0.3s transition.

### Neutral & Surface
- **White** (`#ffffff`): list and product page background, search field, pager and seller-buy fills.
- **Surface** (`#f8f8f8`): home shopping-clip tabs and the list page category links.
- **Tint** (`#ebf3ff`): unselected filter pills.
- **Hairline** (`#e0e0e0`): pager arrow borders on home.
- **Border** (`#bfbfbf`): quantity select and footer buttons.
- **Border Button** (`#b9bec5`): per-seller buy links; 대량구매 uses `#c4c4c4`.

### Text
- **Ink** (`#000000`): home body colour and pager arrows.
- **Ink Soft** (`#0f0f0f`): home section titles, the selected clip tab and focused search text.
- **Body** (`#333333`): product-page body, tabs, navigation.
- **Muted** (`#555555`): list-page secondary buttons and unselected pill labels.
- **Muted Alt** (`#767676`): search placeholder.

### Brand assets, not tokens
The BI page (BI소개) sets the logo's online colours: green R104 G201 B28 (`#68c91c`) and black R66 G66 B66 (`#424242`), with PANTONE 368 C and 425 C for print. Neither renders as an interface fill on the captured pages, so both are logo colours only. The symbol is described as "그린컬러의 곡선모양", standing for "쇼핑의 시작 다나와". The wordmark "danawa" is a plain gothic, chosen for trust and clarity.

## 3. Typography Rules

### Font Family
- **Pretendard**: live surface use. It is loaded from `static.danawa.com/font/` (WOFF2 and WOFF dynamic subsets) and computes on 1,469 recorded elements across headings, body, buttons, inputs, tabs and badges. The stack continues `-apple-system, system-ui, Malgun Gothic, 맑은 고딕, 돋움, dotum, 굴림, gulim, Arial, sans-serif, Apple SD Gothic Neo`. Pretendard is distributed under the SIL Open Font License 1.1.
- **Pretendard Variable**: declared only. The declaration comes from `cdnet.nasmob.com`, an ad SDK host, not from Danawa. It is used 0 times.
- **swiper-icons**: an inline carousel icon font, declared only.
- No Danawa page opened this session names its typeface, so official product use is not claimed.

### Hierarchy

| Role | Size | Weight | Line height | Where |
|---|---|---|---|---|
| Product title | 25px | 700 | normal | Product page `h3.prod_tit`, `#333333` |
| Section | 21px | 700 | 34px | Home `h2.title`, `#0f0f0f` |
| Tab | 19px | 700 | 45px | Product-page tabs; selected `#2070eb` |
| Search | 18px | 400 | 20px | List-page search text, `#0f0f0f` |
| Button large | 16px | 700 | 21px | 전체 카테고리 |
| Nav | 15px | 400 | 34px | Home service links |
| Button | 15px | 700 | 32px | 최저가 구매하기, 대량구매 |
| Subsection | 15px | 700 | normal | Product-page `h4.tit` |
| Pill | 14px | 700 | 37px | Selected filter pill |
| Badge | 12px | 700 | 18px | Purchase badge |
| Body | 12px | 400 | normal | List and product page default |

### Principles
- One family; hierarchy comes from size and weight 400 against 700.
- Small working sizes: list and product pages default to 12px body.
- No letter-spacing is authored on the captured headings.

## 4. Component Stylings

### Buttons

**Category button (전체 카테고리, home)**
- Background `#06b87f`, text `#ffffff`, bottom border 1px `#31cb9a`
- Radius 8px 8px 0 0, padding 11px 16px, height 44px, 16px / 700 / 21px
- Hover and pressed: the label underlines in white; the fill does not change. Focus: only the browser's default ring. `transition: all 0s`.

**Buy (최저가 구매하기)**
- Background `#333333`, text `#ffffff`, radius 2px, padding 0 15px, height 32px, 15px / 700 / 32px
- Hover and pressed `#141414`; `transition: all 0.3s ease-in-out`

**Bulk (대량구매)**
- Transparent, text `#333333`, 1px `#c4c4c4` border, radius 2px, padding 0 12px, height 32px, 15px / 700

**Seller buy link**
- `#ffffff`, text `#333333`, 1px `#b9bec5` border, square corners, 70 × 28, 13px / 700 / 26px

**Detail search (상세 검색)**
- `#333333`, text `#ffffff`, radius 2px, 90 × 28, 12px / 400 / 28px

**Outlined button**
- `#ffffff`, text and 1px border `#2070eb`, radius 8px, 400 × 68, 20px / 700, shadow `rgba(0, 0, 0, 0.2) 0px 2px 8px 0px`. The label was not recorded.

**Category link (product page)**
- `#06b87f`, text `#ffffff`, radius 2px, 131 × 30, 12px / 400; the probe found no hover or pressed change

**Pager arrows (home carousels)**
- `#ffffff`, 1px `#e0e0e0` border, 20 × 20, radius 4px on the outer corners of the pair

### Filters & Tabs

**Filter pill**
- Unselected: `#ebf3ff`, text `#555555`, 14px / 400 / 37px, radius 19px, 220 × 38
- Selected: `#2070eb`, text `#ffffff`, 700
- Hover and pressed underline the label; fills stay the same

**Product tabs**
- 19px / 700 / 45px; `#333333`, selected `#2070eb`

**Shopping-clip tabs (home)**
- `#f8f8f8`, text `#333333`, 14px / 400, 37px tall; selected `#ffffff`, text `#0f0f0f`, 700

### Inputs

**Search pill**
- `#ffffff`, placeholder `#767676`, radius 52px, padding 8px 0 10px 20px, height 44px, 16px / 400
- Focus: text `#0f0f0f` at 18px, padding 10px 0 10px 20px, and the wrapper gains `rgba(0, 0, 0, 0.08) 2px 2px 6px`. The change stays after blur. Hover: no change.

### Badges

**Purchase badge**
- `#2070eb`, text `#ffffff`, 12px / 700 / 18px, padding 2px 6px, radius 0 0 8px (bottom-right only), 22px tall

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out Danawa pages plus fixed keyboard-probe state reads and first-party company context)
**Tier 1 sources:** https://www.danawa.com/ ; https://prod.danawa.com/list/?cate=112758 ; https://prod.danawa.com/info/?pcode=122659760 ; https://www.danawa.com/corp/aboutus/about_us.html?snb=0 ; https://www.danawa.com/corp/prcenter/bi.html?snb=2
**Tier 2 sources:** getdesign.md/danawa (HTTP 200, the name does not appear in the response) and styles.refero.design/?q=danawa (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

---

## 5. Layout Principles

### Spacing System
Measured values only: badge 2px / 6px, category button 11px / 16px, search left inset 20px, buy button 15px sides, bulk button 12px sides. There is no evidence of a named scale.

### Grid & Container
The home page ad-card row is 1260px wide. On the product page it is 1220px wide. The viewport was 1440px.

### Whitespace Philosophy
Rows are packed tightly, and separation comes from hairlines and tinted fills rather than gaps.

### Border Radius Scale
0 (most utility controls) · 2px (buy, bulk, detail search, category link) · 4px (pager pair) · 8px (category tab top, outlined button, badge corner) · 19px (filter pills) · 52px (search pill). The circular controls are 50%.

## 6. Depth & Elevation

The interface is flat. Of 1,469 recorded elements, one computes a box-shadow: the outlined button (`rgba(0, 0, 0, 0.2) 0px 2px 8px 0px`). The search wrapper gains `rgba(0, 0, 0, 0.08) 2px 2px 6px` only on focus.

## 7. Do's and Don'ts

### Do
- Use `#2070eb` for what is selected or promoted: pills, tabs, badges.
- Keep the buy action dark (`#333333`, hover `#141414`).
- Keep green `#06b87f` to the category entry.
- Set everything in Pretendard and build hierarchy from size and weight.
- Separate dense rows with hairlines, not shadows.

### Don't
- Don't use the BI green `#68c91c` as a UI fill.
- Don't add a price red or promotional purple; none renders on the captured pages.
- Don't add a second typeface.
- Don't raise cards with shadows.

## 8. Responsive Behavior

### Breakpoints
Only the 1440 × 900 desktop layout was captured. Breakpoints are not described.

### Touch Targets
Measured heights: search 44px, category button 44px, filter pills 38px, buy 32px, seller-buy 28px, pagers 20px.

### Collapsing Strategy
Not captured.

### Image Behavior
Product thumbnails fill the ad cards. Their scaling was not measured.

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary / selection: `#2070eb` (text `#ffffff`)
- Category entry: `#06b87f`
- Buy action: `#333333` → hover `#141414`
- Text: `#000000`, `#0f0f0f`, `#333333`, `#555555`, `#767676`
- Surfaces: `#ffffff`, `#f8f8f8`, `#ebf3ff`
- Lines: `#e0e0e0`, `#bfbfbf`, `#b9bec5`

### Example Component Prompts
- "A 220 × 38 filter pill row in Pretendard 14px: selected `#2070eb` with white 700 label, others `#ebf3ff` with `#555555` 400 labels, 19px radius, underline on hover."
- "A product header: 25px / 700 `#333333` title, then a 124 × 32 `#333333` buy button, 2px radius, 15px / 700 white label, `#141414` on hover, beside a transparent 대량구매 button with a 1px `#c4c4c4` border."
- "A 44px white search pill with 52px radius, `#767676` 16px placeholder; on focus the text turns `#0f0f0f` at 18px and the wrapper gains a soft 2px 2px 6px shadow."

### Iteration Guide
1. Start from density: 12px body, 15px buttons, 19–21px section heads.
2. Add blue only where something is selected or promoted.
3. Keep the buy action dark and the category entry green.
4. Separate with `#e0e0e0` hairlines and `#f8f8f8` fills.

## 10. Voice & Tone

The copy is practical and number-first. The slogan "비교하고 잘 사는, 다나와" sets the register: compare, then buy well. The company page sticks to the same promise: quality shopping information that helps the shopper decide.

| Context | Tone |
|---|---|
| Actions | Plain verbs: "최저가 구매하기", "대량구매", "상세 검색", "전체 카테고리". |
| Search | Direct: "검색어를 입력해주세요." |
| Company | Earnest and consumer-first: "양질의 쇼핑정보를 제공하여 소비자의 구매결정을 돕고". |

Avoid luxury framing and superlatives that no number backs up. Never let copy obscure the price or the seller.

## 11. Brand Narrative

The service page says price comparison is Danawa's core, surrounded by content and community. Satisfying shoppers with good information is, in its words, "가격비교 사이트의 본질". The BI page presents the green curved symbol as a guide into shopping ("쇼핑의 시작 다나와"), and the wordmark as a plain gothic that signals confidence and trust. ConnectWave's history records the ownership changes: 2021, the agreement to buy 51.29% of (주)다나와; 2022, the Koreacenter–Danawa merger creating (주)커넥트웨이브, and the launch of Danawa's price-subscription service. The consumer-facing brand, its slogan and its information-first interface stayed Danawa.

## 12. Principles

1. **Comparison is the product.** Keep price, seller and purchase action aligned and legible.
2. **Density serves the shopper.** Small type, tight rows, more options per screen.
3. **Colour marks state.** Blue for selected or promoted, dark for buy, green for the category entry.
4. **Flat and fast.** Hairlines and fills, not elevation.

*Principles are editorial readings of the captured interface and the company's stated mission.*

## 13. Personas

*Fictional archetypes, not real people.*

**Kang Min-su, 27, Seoul.** Builds his own PCs and compares component prices across sellers before every purchase. Wants more rows per screen, not more whitespace.

**Lee Hyun-jung, 41, Suwon.** Compares appliances for the household, filters by category and follows the lowest-price link.

**Park Dae-ho, 38, Incheon.** Buys office equipment and uses the 대량구매 path next to the buy action.

## 14. States

| State | Treatment |
|---|---|
| **Hover** | Buy button `#333333` → `#141414`. Category button and filter pills underline the label; fills unchanged. The product-page category link does not change. |
| **Pressed** | Same as hover on each probed control. |
| **Selected** | Filter pill fills `#2070eb` with white 700 text. Product tab turns `#2070eb`. Clip tab turns `#ffffff` with `#0f0f0f` 700 text. |
| **Focus** | Search: text `#0f0f0f` at 18px plus a wrapper shadow, which stays after blur. Category button: browser default ring only. Other controls: not measured. |

Empty, loading, error, success and disabled states were not captured and are not described. `interactionCount` is 0 in the bundle; that does not mean the page has no states.

## 15. Motion & Easing

The probe read the transitions these controls compute. 최저가 구매하기 transitions all properties over 0.3s `ease-in-out`. 전체 카테고리, the filter pills, the product-page category link and the search field compute `transition: all 0s`, so they change instantly. Carousel timing and other motion were not measured; treat them as unspecified and honour `prefers-reduced-motion`.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/danawa.json (capturedAt 2026-09-30T13:12:43Z), deterministic collector, 1440x900, logged out: www.danawa.com, prod.danawa.com/list/?cate=112758, prod.danawa.com/info/?pcode=122659760. States: fixed keyboard probe raws docs/research/2026-09-29-growth/raw/danawa-states-{home,product}.json.
- §1, §10, §11: danawa.com/corp/aboutus/about_us.html (서비스 정보), danawa.com/corp/prcenter/bi.html (BI소개), connectwave.co.kr/cowave.html (연혁), the home title and footer, opened 2026-09-30.
- §3 licence: the Pretendard LICENSE on GitHub.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->
