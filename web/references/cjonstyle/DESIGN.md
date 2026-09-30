---
id: cjonstyle
name: CJ ONSTYLE
display_name_kr: CJ온스타일
country: KR
category: ecommerce
homepage: "https://www.cjonstyle.com"
primary_color: "#640faf"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=cjonstyle.com&sz=128"
verified: "2026-09-30"
added: "2026-07-02"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: marketing, url: "https://display.cjonstyle.com/p/homeTab/main?hmtabMenuId=H00005&rPIC=homeonstyle", inspected: "2026-09-30" }
    - { id: surface-2, kind: product, url: "https://display.cjonstyle.com/p/item/2090936982", inspected: "2026-09-30" }
    - { id: surface-3, kind: product, url: "https://display.cjonstyle.com/p/brand/00034773", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://display.cjonstyle.com/p/homeTab/main?hmtabMenuId=H00005&rPIC=homeonstyle", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://display.cjonstyle.com/p/item/2090936982", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://display.cjonstyle.com/p/brand/00034773", captured: "2026-09-30" }
    - { id: cj-corp, kind: official-doc, url: "https://corp.cjonstyle.com/ko", captured: "2026-09-30" }
    - { id: cj-history, kind: official-doc, url: "https://corp.cjonstyle.com/ko/about/history", captured: "2026-09-30" }
    - { id: cj-who, kind: official-doc, url: "https://corp.cjonstyle.com/ko/about/who-we-are", captured: "2026-09-30" }
    - { id: pretendard-license, kind: license, url: "https://raw.githubusercontent.com/orioncactus/pretendard/main/LICENSE", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &buy { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"40\"]", captured: "2026-09-30" }
    "tokens.colors.on-primary": *buy
    "tokens.colors.ink": &h1 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h1", captured: "2026-09-30" }
    "tokens.colors.ink-strong": &h3 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-09-30" }
    "tokens.colors.tab-ink": &tabon { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"49\"]", captured: "2026-09-30" }
    "tokens.colors.muted": &taboff { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"50\"]", captured: "2026-09-30" }
    "tokens.colors.faint": &fine { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::li", captured: "2026-09-30" }
    "tokens.colors.chrome": &skip { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"0\"]", captured: "2026-09-30" }
    "tokens.colors.border-strong": &wish { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"37\"]", captured: "2026-09-30" }
    "tokens.colors.line": &more { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"51\"]", captured: "2026-09-30" }
    "tokens.colors.line-soft": &chipoff { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"56\"]", captured: "2026-09-30" }
    "tokens.colors.control-line": &refresh { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"132\"]", captured: "2026-09-30" }
    "tokens.colors.select-line": &select { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"36\"]", captured: "2026-09-30" }
    "tokens.colors.surface": &ask { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"56\"]", captured: "2026-09-30" }
    "tokens.colors.white": &cart { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"39\"]", captured: "2026-09-30" }
    "tokens.typography.family.ui": *h3
    "tokens.typography.module-title.size": *h3
    "tokens.typography.module-title.weight": *h3
    "tokens.typography.module-title.lineHeight": *h3
    "tokens.typography.module-title.tracking": *h3
    "tokens.typography.module-title.use": *h3
    "tokens.typography.logo-heading.size": *h1
    "tokens.typography.logo-heading.weight": *h1
    "tokens.typography.logo-heading.lineHeight": *h1
    "tokens.typography.logo-heading.tracking": *h1
    "tokens.typography.logo-heading.use": *h1
    "tokens.typography.buy-label.size": *buy
    "tokens.typography.buy-label.weight": *buy
    "tokens.typography.buy-label.use": *buy
    "tokens.typography.tab.size": *tabon
    "tokens.typography.tab.weight": *tabon
    "tokens.typography.tab.use": *tabon
    "tokens.typography.search.size": &search { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"4\"]", captured: "2026-09-30" }
    "tokens.typography.search.weight": *search
    "tokens.typography.search.use": *search
    "tokens.typography.body.size": &homeli { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::li", captured: "2026-09-30" }
    "tokens.typography.body.weight": *homeli
    "tokens.typography.body.lineHeight": *homeli
    "tokens.typography.body.tracking": *homeli
    "tokens.typography.body.use": *homeli
    "tokens.typography.chip.size": &chipon { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"55\"]", captured: "2026-09-30" }
    "tokens.typography.chip.weight": *chipon
    "tokens.typography.chip.lineHeight": *chipon
    "tokens.typography.chip.use": *chipon
    "tokens.typography.more.size": *more
    "tokens.typography.more.weight": *more
    "tokens.typography.more.lineHeight": *more
    "tokens.typography.more.tracking": *more
    "tokens.typography.more.use": *more
    "tokens.typography.meta.size": &brandli { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::li", captured: "2026-09-30" }
    "tokens.typography.meta.weight": *brandli
    "tokens.typography.meta.lineHeight": *brandli
    "tokens.typography.meta.use": *brandli
    "tokens.typography.fine.size": *fine
    "tokens.typography.fine.weight": *fine
    "tokens.typography.fine.lineHeight": *fine
    "tokens.typography.fine.tracking": *fine
    "tokens.typography.fine.use": *fine
    "tokens.spacing.ask-y": *ask
    "tokens.spacing.ask-left": *ask
    "tokens.spacing.select-left": *select
    "tokens.spacing.skip-left": *skip
    "tokens.spacing.skip-right": *skip
    "tokens.spacing.more-left": *more
    "tokens.spacing.more-right": *more
    "tokens.rounded.square": *tabon
    "tokens.rounded.tag": *ask
    "tokens.rounded.button": *buy
    "tokens.rounded.more": *more
    "tokens.rounded.chip": *chipon
    "tokens.components.buy-button.type": *buy
    "tokens.components.buy-button.bg": *buy
    "tokens.components.buy-button.fg": *buy
    "tokens.components.buy-button.border": *buy
    "tokens.components.buy-button.radius": *buy
    "tokens.components.buy-button.height": *buy
    "tokens.components.buy-button.font": *buy
    "tokens.components.buy-button.states": *buy
    "tokens.components.buy-button.use": *buy
    "tokens.components.cart-button.type": *cart
    "tokens.components.cart-button.bg": *cart
    "tokens.components.cart-button.fg": *cart
    "tokens.components.cart-button.border": *cart
    "tokens.components.cart-button.radius": *cart
    "tokens.components.cart-button.height": *cart
    "tokens.components.cart-button.font": *cart
    "tokens.components.cart-button.states": *cart
    "tokens.components.cart-button.use": *cart
    "tokens.components.wish-button.type": *wish
    "tokens.components.wish-button.bg": *wish
    "tokens.components.wish-button.fg": *wish
    "tokens.components.wish-button.border": *wish
    "tokens.components.wish-button.radius": *wish
    "tokens.components.wish-button.size": *wish
    "tokens.components.wish-button.states": *wish
    "tokens.components.wish-button.use": *wish
    "tokens.components.category-toggle.type": &gnb { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"9\"]", captured: "2026-09-30" }
    "tokens.components.category-toggle.fg": *gnb
    "tokens.components.category-toggle.height": *gnb
    "tokens.components.category-toggle.font": *gnb
    "tokens.components.category-toggle.hover": &gnbhover { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"9\"]::state-hover", captured: "2026-09-30" }
    "tokens.components.category-toggle.pressed": { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"9\"]::state-pressed", captured: "2026-09-30" }
    "tokens.components.category-toggle.states": *gnbhover
    "tokens.components.category-toggle.use": *gnb
    "tokens.components.detail-tab.type": *taboff
    "tokens.components.detail-tab.bg": *taboff
    "tokens.components.detail-tab.fg": *taboff
    "tokens.components.detail-tab.border": *taboff
    "tokens.components.detail-tab.height": *taboff
    "tokens.components.detail-tab.font": *taboff
    "tokens.components.detail-tab.selected": *tabon
    "tokens.components.detail-tab.states": *tabon
    "tokens.components.detail-tab.use": *taboff
    "tokens.components.module-chip.type": *chipoff
    "tokens.components.module-chip.bg": *chipoff
    "tokens.components.module-chip.fg": *chipoff
    "tokens.components.module-chip.border": *chipoff
    "tokens.components.module-chip.radius": *chipoff
    "tokens.components.module-chip.height": *chipoff
    "tokens.components.module-chip.font": *chipoff
    "tokens.components.module-chip.selected": *chipon
    "tokens.components.module-chip.states": *chipon
    "tokens.components.module-chip.use": *chipoff
    "tokens.components.more-chip.type": *more
    "tokens.components.more-chip.fg": *more
    "tokens.components.more-chip.border": *more
    "tokens.components.more-chip.radius": *more
    "tokens.components.more-chip.padding": *more
    "tokens.components.more-chip.height": *more
    "tokens.components.more-chip.font": *more
    "tokens.components.more-chip.states": *more
    "tokens.components.more-chip.use": *more
    "tokens.components.carousel-control.type": &prev { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"18\"]", captured: "2026-09-30" }
    "tokens.components.carousel-control.bg": *prev
    "tokens.components.carousel-control.border": *prev
    "tokens.components.carousel-control.radius": *prev
    "tokens.components.carousel-control.height": *prev
    "tokens.components.carousel-control.states": *prev
    "tokens.components.carousel-control.use": *prev
    "tokens.components.option-select.type": *select
    "tokens.components.option-select.fg": *select
    "tokens.components.option-select.border": *select
    "tokens.components.option-select.padding": *select
    "tokens.components.option-select.height": *select
    "tokens.components.option-select.font": *select
    "tokens.components.option-select.states": *select
    "tokens.components.option-select.use": *select
    "tokens.components.search-input.type": *search
    "tokens.components.search-input.fg": *search
    "tokens.components.search-input.padding": *search
    "tokens.components.search-input.height": *search
    "tokens.components.search-input.font": *search
    "tokens.components.search-input.states": *search
    "tokens.components.search-input.use": *search
    "tokens.components.ask-banner.type": *ask
    "tokens.components.ask-banner.bg": *ask
    "tokens.components.ask-banner.fg": *ask
    "tokens.components.ask-banner.radius": *ask
    "tokens.components.ask-banner.padding": *ask
    "tokens.components.ask-banner.size": *ask
    "tokens.components.ask-banner.font": *ask
    "tokens.components.ask-banner.states": *ask
    "tokens.components.ask-banner.use": *ask
    "tokens.components.view-toggle.type": &viewoff { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"136\"]", captured: "2026-09-30" }
    "tokens.components.view-toggle.border": *viewoff
    "tokens.components.view-toggle.size": *viewoff
    "tokens.components.view-toggle.checked": &viewon { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"135\"]", captured: "2026-09-30" }
    "tokens.components.view-toggle.states": *viewon
    "tokens.components.view-toggle.use": *viewoff
    "tokens.components.page-dot.type": &dot { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"201\"]", captured: "2026-09-30" }
    "tokens.components.page-dot.bg": *dot
    "tokens.components.page-dot.fg": *dot
    "tokens.components.page-dot.radius": *dot
    "tokens.components.page-dot.size": *dot
    "tokens.components.page-dot.states": *dot
    "tokens.components.page-dot.use": *dot
    "tokens.components.refresh-button.type": *refresh
    "tokens.components.refresh-button.bg": *refresh
    "tokens.components.refresh-button.fg": *refresh
    "tokens.components.refresh-button.border": *refresh
    "tokens.components.refresh-button.radius": *refresh
    "tokens.components.refresh-button.height": *refresh
    "tokens.components.refresh-button.font": *refresh
    "tokens.components.refresh-button.states": *refresh
    "tokens.components.refresh-button.use": *refresh
    "tokens.components.skip-link.type": *skip
    "tokens.components.skip-link.bg": *skip
    "tokens.components.skip-link.fg": *skip
    "tokens.components.skip-link.padding": *skip
    "tokens.components.skip-link.height": *skip
    "tokens.components.skip-link.font": *skip
    "tokens.components.skip-link.states": *skip
    "tokens.components.skip-link.use": *skip
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#640faf"
    on-primary: "#ffffff"
    ink: "#000000"
    ink-strong: "#111111"
    tab-ink: "#333333"
    muted: "#767676"
    faint: "#929292"
    chrome: "#26292a"
    border-strong: "#b2b2b2"
    line: "#d1d1d1"
    line-soft: "#e6e6e6"
    control-line: "#c5c5c5"
    select-line: "#d9d9d9"
    surface: "#f0f0f0"
    white: "#ffffff"
  typography:
    family: { ui: "Pretendard" }
    module-title: { size: 26, weight: 700, lineHeight: 1.19, tracking: -0.5, use: "Module titles on the home tab (tit_module), Pretendard, 31px line, in #111111" }
    logo-heading: { size: 24, weight: 700, lineHeight: 1.5, tracking: -0.5, use: "The h1 around the logo on every captured page, 36px line, in #000000; set in the declared 나눔바른고딕 stack, whose rendered face is unresolved" }
    buy-label: { size: 20, weight: 400, use: "바로구매, 장바구니 and 선물하기 labels on the product page, set in the 나눔바른고딕 stack on a 60px line box" }
    tab: { size: 18, weight: 700, use: "Selected product-page section tab; unselected tabs are 18px / 400" }
    search: { size: 18, weight: 400, use: "Header search field; Pretendard on the home tab, the 나눔바른고딕 stack on the product and brand pages" }
    body: { size: 16, weight: 400, lineHeight: 1.5, tracking: -0.25, use: "Module lists and product text on the home tab, Pretendard, 24px line, in #000000" }
    chip: { size: 15, weight: 700, lineHeight: 1.2, use: "Selected module filter chip on the home tab, Pretendard, 18px line; unselected chips are 15px / 400" }
    more: { size: 13, weight: 400, lineHeight: 1.23, tracking: -0.25, use: "Module 'more' links on the home tab, Pretendard, 16px line" }
    meta: { size: 12, weight: 400, lineHeight: 1.5, use: "Product meta on the brand and product pages, 18px line, in #000000, in the 나눔바른고딕 stack" }
    fine: { size: 11, weight: 700, lineHeight: 1.5, tracking: -0.5, use: "Fine labels on the product page, 16.5px line, in #929292, in a 돋움 stack whose rendered face is unresolved" }
  spacing: { ask-y: 22, ask-left: 72, select-left: 15, skip-left: 26, skip-right: 20, more-left: 12, more-right: 8 }
  rounded: { square: 0, tag: 2, button: 4, more: 14, chip: 18 }
  components:
    buy-button: { type: button, bg: "#640faf", fg: "#ffffff", border: "1px solid #640faf", radius: "4px", height: "60px", font: "20px / 400, 나눔바른고딕 stack", states: "rest only; no state frame was captured for this control and it was not probed", use: "바로구매 (u_btn btn_buy_now) on the product page, 162 x 60 at the right of the buy row; a 205 x 42 copy closes the lower buy panel" }
    cart-button: { type: button, bg: "#ffffff", fg: "#640faf", border: "1px solid #640faf", radius: "4px", height: "60px", font: "20px / 400, 나눔바른고딕 stack", states: "rest only; no state frame", use: "장바구니 (btn_cart_go), the outlined partner left of 바로구매; 선물하기 (btn_gift, 64 x 60) uses the same outline" }
    wish-button: { type: button, bg: "#ffffff", fg: "#111111", border: "1px solid #b2b2b2", radius: "4px", size: "64px x 60px", states: "rest only; no state frame", use: "찜 wishlist toggle (btn_dip) at the start of the buy row" }
    category-toggle: { type: button, fg: "#111111", height: "54px", font: "15px / 400, 나눔바른고딕 stack", hover: "bg #640faf, fg #ffffff", pressed: "bg #640faf, fg #ffffff", states: "the bundle's hover and pressed frames agree on the violet fill with white text", use: "카테고리 toggle (btn_gnb_toggle), 181 x 54, at the left of the global navigation" }
    detail-tab: { type: tab, bg: "#ffffff", fg: "#767676", border: "0 0 1px #767676 (bottom)", height: "62px", font: "18px / 400, 나눔바른고딕 stack", selected: "fg #333333, 18px / 700, bottom border 1px #333333", states: "selected variant read from rest values", use: "Product-page section tabs, 253 x 62" }
    module-chip: { type: tab, bg: "#ffffff", fg: "#111111", border: "1px solid #e6e6e6", radius: "18px", height: "36px", font: "15px / 400 Pretendard", selected: "bg #111111, fg #ffffff, border 1px #111111, 15px / 700", states: "selected variant read from rest values", use: "Filter chips (btn_tab) under home module titles" }
    more-chip: { type: button, fg: "#111111", border: "1px solid #d1d1d1", radius: "14px", padding: "0px 8px 0px 12px", height: "28px", font: "13px / 400 Pretendard", states: "rest only; the home tab's pseudo-state pass stalled and was logged unmeasured", use: "'More' links beside home module titles, 99 x 28" }
    carousel-control: { type: button, bg: "#ffffff", border: "1px solid #d1d1d1", radius: "18px 0 0 18px (previous), 0 18px 18px 0 (next), 50% (pause)", height: "36px", states: "rest only; hover unmeasured", use: "Previous, next and pause controls of the home hero carousel" }
    option-select: { type: input, fg: "#111111", border: "1px solid #d9d9d9", padding: "0px 33px 0px 15px", height: "45px", font: "15px / 400, 나눔바른고딕 stack", states: "rest only; the collector did not open it", use: "Product option selector (select_txt), 470 x 45" }
    search-input: { type: input, fg: "#111111", padding: "0px 50px 0px 0px", height: "46px", font: "18px / 400 Pretendard (home)", states: "rest only; the input itself draws no border", use: "Header search field, 314 x 46, on every captured page" }
    ask-banner: { type: button, bg: "#f0f0f0", fg: "#000000", radius: "2px", padding: "22px 50px 22px 72px", size: "760px x 80px", font: "12px / 400 / 18px", states: "rest only; no state frame", use: "Product-page entry banner (btn_ask) with a 34-character label" }
    view-toggle: { type: toggle, border: "1px solid #d9d9d9", size: "30px x 30px", checked: "border 1px solid #640faf on the active view (ico_gallery on)", states: "checked variant read from rest values", use: "Gallery and list view switch on the brand page" }
    page-dot: { type: button, bg: "#640faf", fg: "#ffffff", radius: "50%", size: "30px x 30px", states: "the current page (lk_pn on) fills violet; read from rest values", use: "Current page of the brand page's pagination" }
    refresh-button: { type: button, bg: "#ffffff", fg: "#111111", border: "1px solid #c5c5c5", radius: "4px", height: "40px", font: "14px / 400, 나눔바른고딕 stack", states: "rest only; no state frame", use: "Filter reset (btn_refresh) on the brand page, 180 x 40" }
    skip-link: { type: button, bg: "#26292a", fg: "#ffffff", padding: "0px 20px 0px 26px", height: "34px", font: "11px / 400 / 14px, letter-spacing -1px", states: "positioned 34px above the viewport at rest (shown when focused); focus was not measured", use: "Skip links (shortcut_g) at the top of every captured page" }
  components_harvested: true
---

# Design System Inspiration of CJ ONSTYLE

## 1. Visual Theme & Atmosphere

CJ ONSTYLE (CJ온스타일) is the commerce division of CJ ENM, legally (주)씨제이이엔엠 커머스부문 and headquartered in Seoul. By its own history page it opened Korea's first TV home-shopping channel in 1995 and joined CJ Group in 2000. It opened the CJmall internet store in 2001, shipped the industry's first smartphone app in 2010, and in 2012 became the first in the industry to pass 1 trillion won in sales. It launched the industry's first mobile live commerce in 2017, became part of CJ ENM in the 2018 merger, and unified its channels under the single brand CJ온스타일 in 2021. A very large mobile live show followed in 2024, and a global own-brand mall in 2026. The company calls itself "트렌드 PICK 라이브 편집샵" and describes shopping that you "discover through content and complete with taste" (콘텐츠로 발견하고, 취향으로 완성하는 쇼핑). It reports 1조 5,180억 won in 2025 sales and 20,000 brands in the app.

The storefront on display.cjonstyle.com reads like its heritage: a dense, white, black-on-white retail grid built for scanning. One deep violet, `#640faf`, carries commitment. It fills 바로구매, outlines 장바구니 and 선물하기, fills the 카테고리 toggle when a pointer rests on it, and marks the current page and the active view on brand pages. Everything else is neutral: `#000000` and `#111111` text, `#333333` for the selected tab, greys `#767676` and `#929292` for secondary copy, and a ladder of light greys for borders. The shell is square (0px corners on navigation, tabs and inputs), purchase buttons take 4px corners, and the newer home modules add pill chips at 18px. Two type systems coexist. The home tab's modules are set in Pretendard, served by CJ ONSTYLE itself. The product and brand pages ask for 나눔바른고딕 first, a family the browser never loads from the site, so the rendered face there is unresolved.

**Key Characteristics:**
- One violet `#640faf` for buy, cart and gift actions, the category-toggle hover, the current page and the active view
- Black-on-white density: `#000000` and `#111111` text, grey `#767676` and `#929292` secondary copy
- Square shell (0px) with 4px purchase buttons, 14px and 18px pill chips on the home tab, 2px on banners
- Pretendard on the home tab; the product and brand pages declare 나눔바른고딕 first
- Borders in steps of grey: `#b2b2b2`, `#c5c5c5`, `#d1d1d1`, `#d9d9d9`, `#e6e6e6`
- A dark `#26292a` skip-link bar hidden above the page

## Primary tasks

- Buy a product once its price and benefits add up
- Scan the home grid for the best discounts of the day
- Shop from a TV home-shopping broadcast inside the app
- Browse curated fashion and living categories on the storefront
- Place an order and follow its delivery afterwards

## 2. Color Palette & Roles

Every token below was read on 2026-09-30 by the deterministic collector from three public, logged-out storefront pages: the home tab, a product page (item 2090936982) and a brand page (에르헴, 00034773). The corporate site corp.cjonstyle.com is a separate evidence domain and supplies narrative only.

### Primary
- **CJ ONSTYLE Violet** (`#640faf`): The fill of 바로구매 (`u_btn btn_buy_now`, 162 × 60, white label), the product page's primary action. It is also the outline and label of 장바구니 and 선물하기 beside it, and the fill of the 카테고리 toggle in its hover and pressed frames. On the brand page it fills the current pagination dot and outlines the active view toggle. It is the primary because it is the colour of the purchase action and of every selected state the capture recorded.
- **On Primary** (`#ffffff`): Labels on the violet fill.

### Text
- **Ink** (`#000000`): The logo heading, product meta and most running text.
- **Ink Strong** (`#111111`): Home module titles, navigation, inputs, chips and outlined buttons.
- **Tab Ink** (`#333333`): The selected product-page tab label and its underline.
- **Muted** (`#767676`): Unselected product-page tabs and small links.
- **Faint** (`#929292`): Fine 11px labels on the product page.

### Neutral & Surface
- **White** (`#ffffff`): The page, outlined buttons and controls.
- **Surface** (`#f0f0f0`): The 760 × 80 entry banner on the product page.
- **Chrome** (`#26292a`): The skip-link bar.
- **Border Strong** (`#b2b2b2`): The 찜 wishlist toggle.
- **Control Line** (`#c5c5c5`): The brand page's filter reset and small "more" links.
- **Line** (`#d1d1d1`): Home carousel controls and "more" chips.
- **Select Line** (`#d9d9d9`): The product option selector and the inactive view toggle.
- **Line Soft** (`#e6e6e6`): Unselected home filter chips and brand-page arrow buttons.

### Not tokens
- A red label (`#d73535`) inside a grey-outlined 방송알림-style button (`#a6a6a6`) and dark translucent overlays appear on the product page; they are single observations and are not promoted. No logo colour was measured.

## 3. Typography Rules

### Font Family
- **Live surface use**: `Pretendard`, `loaded / high`, 473 observed uses, mostly on the home tab: module titles, lists, chips, "more" links and the search field. It is self-hosted by CJ ONSTYLE at `image.cjonstyle.net/public/confirm/contents/ec-static-contents/design/font/font/Pretendard-Regular.woff2`, and the shared `font.css` declares weights 400, 600 and 700.
- **Official distributed font assets**: Pretendard is Kil Hyung-jin's open-source family. Its LICENSE (orioncactus/pretendard, opened 2026-09-30) reserves the name 'Pretendard' and states the SIL Open Font License 1.1. The identification rests on the declared family name.
- **Official product use**: no CJ ONSTYLE page opened this session names its typefaces.
- **Declared only (no visible use)**: `Nanum Barun Gothic`. The same `font.css` declares it with `NanumBarunGothic.eot` and related files, but the face never reported as loaded on any captured page. `FontAwesome` is also declared.
- **Unresolved**: `나눔바른고딕` is the first family of the product and brand pages' stack and of the home navigation (723 uses). No loaded font carries that name and the declared web font never loaded, so the face the browser actually drew there cannot be named. `돋움` (82 uses) is in the same position. Their sizes, weights and line heights are kept below; the family is not.
- **Corporate site**: corp.cjonstyle.com preloads the group's CJ ONLYONE faces (`CJ_ONLYONE_400` to `700` WOFF2). That is a different evidence domain, and it is not a storefront token.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Observed on |
|------|------|------|--------|-------------|----------|-------------|
| Module Title | Pretendard | 26px | 700 | 31px (1.19) | -0.5px | Home module titles, `#111111` |
| Logo Heading | 나눔바른고딕 stack (unresolved) | 24px | 700 | 36px (1.5) | -0.5px | Every page, `#000000` |
| Buy Label | 나눔바른고딕 stack (unresolved) | 20px | 400 | 60px box | normal | 바로구매, 장바구니 |
| Tab | 나눔바른고딕 stack (unresolved) | 18px | 700 / 400 | 62px box | normal | Product-page tabs |
| Search | Pretendard (home) | 18px | 400 | 46px box | normal | Header search |
| Body | Pretendard | 16px | 400 | 24px (1.5) | -0.25px | Home lists, `#000000` |
| Chip | Pretendard | 15px | 700 / 400 | 18px (1.2) | normal | Home filter chips |
| More | Pretendard | 13px | 400 | 16px (1.23) | -0.25px | Home "more" links |
| Meta | 나눔바른고딕 stack (unresolved) | 12px | 400 | 18px (1.5) | normal | Product and brand meta |
| Fine | 돋움 stack (unresolved) | 11px | 700 | 16.5px (1.5) | -0.5px | Product-page labels, `#929292` |

### Principles
- **Weight, not size, for emphasis**: selected tabs and chips switch from 400 to 700 at the same size.
- **Dense by default**: meta text sits at 12px on an 18px line; titles rarely exceed 26px.
- **Two generations**: Pretendard modules on the home tab sit beside an older shell that asks for 나눔바른고딕.

## 4. Component Stylings

### Buttons

**Buy button (primary)**
- Background: `#640faf`
- Text: `#ffffff`
- Border: 1px solid `#640faf`
- Radius: 4px
- Height: 60px
- Font: 20px 400
- Use: 바로구매 on the product page, 162 × 60; a 205 × 42 copy closes the lower buy panel

**Cart button**
- Background: `#ffffff`
- Text: `#640faf`
- Border: 1px solid `#640faf`
- Radius: 4px
- Height: 60px
- Use: 장바구니, the outlined partner of 바로구매; 선물하기 (64 × 60) shares the outline

**Wishlist button**
- Background: `#ffffff`
- Text: `#111111`
- Border: 1px solid `#b2b2b2`
- Radius: 4px
- Size: 64 × 60
- Use: 찜 toggle at the start of the buy row

**Category toggle**
- Text: `#111111`
- Height: 54px
- Hover: fill `#640faf` with `#ffffff` text (bundle hover and pressed frames agree)
- Use: 카테고리, 181 × 54, at the left of the global navigation

**More chip**
- Text: `#111111`
- Border: 1px solid `#d1d1d1`
- Radius: 14px
- Padding: 0px 8px 0px 12px
- Height: 28px
- Use: Beside home module titles

**Carousel control**
- Background: `#ffffff`
- Border: 1px solid `#d1d1d1`
- Radius: 18px on the outer side (previous and next), 50% (pause)
- Height: 36px
- Use: Home hero carousel

**Entry banner**
- Background: `#f0f0f0`
- Text: `#000000`
- Radius: 2px
- Padding: 22px 50px 22px 72px
- Size: 760 × 80
- Use: Product-page entry banner

**Filter reset**
- Background: `#ffffff`
- Text: `#111111`
- Border: 1px solid `#c5c5c5`
- Radius: 4px
- Height: 40px
- Use: Brand-page filter panel, 180 × 40

**Page dot**
- Background: `#640faf`
- Text: `#ffffff`
- Radius: 50%
- Size: 30 × 30
- Use: Current page of the brand page's pagination

**Skip link**
- Background: `#26292a`
- Text: `#ffffff`
- Padding: 0px 20px 0px 26px
- Height: 34px
- Use: Skip links above the header, shown on focus

### Tabs & Toggles

**Product-page tab**
- Background: `#ffffff`
- Text: `#767676`
- Border: 1px `#767676` underline
- Height: 62px
- Selected: `#333333` text at 700 with a 1px `#333333` underline
- Use: Product-page section tabs, 253 × 62

**Home filter chip**
- Background: `#ffffff`
- Text: `#111111`
- Border: 1px solid `#e6e6e6`
- Radius: 18px
- Height: 36px
- Selected: `#111111` fill, `#ffffff` text, weight 700
- Use: Under home module titles

**View toggle**
- Border: 1px solid `#d9d9d9`
- Size: 30 × 30
- Checked: 1px solid `#640faf`
- Use: Gallery and list switch on the brand page

### Inputs

**Option select**
- Text: `#111111`
- Border: 1px solid `#d9d9d9`
- Padding: 0px 33px 0px 15px
- Height: 45px
- Use: Product option selector, 470 × 45

**Search field**
- Text: `#111111`
- Padding: 0px 50px 0px 0px
- Height: 46px
- Font: 18px 400 Pretendard (home)
- Use: Header search, 314 × 46; the input itself draws no border

---

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out display.cjonstyle.com pages and first-party context from corp.cjonstyle.com)
**Tier 1 sources:** https://display.cjonstyle.com/p/homeTab/main?hmtabMenuId=H00005 ; https://display.cjonstyle.com/p/item/2090936982 ; https://display.cjonstyle.com/p/brand/00034773 ; https://corp.cjonstyle.com/ko/about/history
**Tier 2 sources:** getdesign.md/cjonstyle (HTTP 200, the name does not appear in the response) and styles.refero.design/?q=cjonstyle (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Observed paddings: 22px 50px 22px 72px on the entry banner, 0 33px 0 15px on the option select, 0 20px 0 26px on skip links, 0 8px 0 12px on "more" chips, 0 12px 0 5px on filter chips.
- Spacing is tuned per module rather than taken from one scale.

### Grid & Container
- A fixed-width centred column under a persistent header: logo heading, search, then the global navigation with the 카테고리 toggle at its left.
- The home tab stacks modules, each with a 26px title, filter chips and a "more" link. The product page pairs media with a buy panel (option select, then 찜, 선물하기, 장바구니 and 바로구매 in one 60px row) and section tabs below.

### Whitespace Philosophy
- Density over air: many products per viewport, separated by thin grey lines rather than space.

### Border Radius Scale
- 0px: navigation, tabs, inputs, page arrows
- 2px: entry banner
- 4px: purchase buttons, filter reset
- 14px: "more" chips
- 18px: filter chips and carousel controls
- 50%: pagination dot and pause control

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Buttons, tabs, chips, cards |
| Line | 1px greys `#b2b2b2` to `#e6e6e6` | Controls and separators |
| Fill | `#f0f0f0` | Entry banner |

No captured control draws a shadow; separation is by line and fill.

## 7. Do's and Don'ts

### Do
- Use `#640faf` for the purchase action, its outlined partners and selected states
- Keep text black or near-black (`#000000`, `#111111`) on white
- Mark selection by weight (400 to 700) and, on tabs, a 1px underline
- Use 4px corners on purchase buttons and square corners in the shell
- Separate with 1px grey lines

### Don't
- Spread violet into decoration or running text
- Add shadows to cards or buttons
- Round the shell; pills belong to chips and carousel controls
- Name 나눔바른고딕 as the rendered face; it never loaded from the site

## 8. Responsive Behavior

### Breakpoints
Only the 1440 × 900 desktop viewport of the PC storefront was captured; its assets are the `-pc` builds. No breakpoint was measured.

### Touch Targets
- Product-page tabs: 62px
- Buy row: 60px
- Category toggle: 54px
- Search field: 46px
- Option select: 45px
- Filter reset and page arrows: 40px
- Filter chips and carousel controls: 36px
- Skip links: 34px
- "More" chips: 28px

### Collapsing Strategy
- Not captured; only the PC layout was measured.

### Image Behavior
- Product images sit in square frames without shadows.

## 9. Agent Prompt Guide

### Quick Color Reference
- Purchase action and selection: CJ ONSTYLE Violet (`#640faf`), label `#ffffff`
- Text: `#000000`, `#111111`; selected tab `#333333`; secondary `#767676`, `#929292`
- Lines: `#b2b2b2`, `#c5c5c5`, `#d1d1d1`, `#d9d9d9`, `#e6e6e6`
- Surfaces: `#ffffff`; banner `#f0f0f0`; skip bar `#26292a`

### Example Component Prompts
- "Build a product buy row: 64 × 60 찜 toggle (white, 1px solid #b2b2b2, radius 4px), 선물하기 and 장바구니 outlined in 1px solid #640faf with #640faf labels, and 바로구매 filled #640faf with a white 20px label, all 60px tall with 4px corners."
- "Create home module filter chips: 36px tall, radius 18px, white with 1px solid #e6e6e6 and #111111 15px Pretendard; the selected chip fills #111111 with white bold text."
- "Add product-page tabs: 253 × 62, white, 18px text in #767676 with a 1px #767676 underline; the selected tab is #333333 bold with a 1px #333333 underline."

### Iteration Guide
1. Violet `#640faf` means buy or selected
2. Black-on-white, dense, square
3. 4px on purchase buttons, 18px pills only on chips
4. Lines, not shadows

---

## 10. Voice & Tone

CJ ONSTYLE sells like a home-shopping host: offer first, then benefit, then the buy path. Its corporate voice adds curation and taste ("트렌드 PICK 라이브 편집샵"). On the storefront, copy is short and concrete: discount rates, benefits and broadcast times.

| Context | Tone |
|---|---|
| Module titles and banners | Offer-first: brand, season, discount ("에르헴 26FW 신상 · 미리주문 쿠폰 10% · ~10%할인") |
| Live and TV | Time-stamped and immediate ("라이브쇼 · 방송일정 · 오늘 21:00") |
| Social proof | Live counts ("지금 1,149명이 이 상품을 보고 있어요") |
| Buy row | Direct imperatives: 바로구매, 장바구니, 선물하기 |
| Corporate | Aspirational: "콘텐츠로 발견하고, 취향으로 완성하는 쇼핑" |

**Voice samples (verbatim from pages opened on 2026-09-30):**
- "에르헴 26FW 신상 / 미리주문 쿠폰 10% / ~10%할인" (home tab banner link)
- "지금 1,149명이 이 상품을 보고 있어요" (home tab product link)
- "트렌드 PICK 라이브 편집샵 — 콘텐츠로 발견하고, 취향으로 완성하는 쇼핑" (corp.cjonstyle.com)

**Forbidden register**: vague lifestyle copy with no offer, hedging on price.

## 11. Brand Narrative

CJ온스타일's history page calls its story "쇼핑의 방식을 바꿔온 30여년의 여정": a multichannel business spanning TV and mobile that moved to a one-platform, one-brand strategy. The milestones it lists are:
- 1995: Korea's first TV home-shopping channel
- 2000: acquired by CJ Group
- 2001: the CJmall internet store
- 2010: the industry's first smartphone shopping app, mobile CJmall
- 2012: the first in the industry to pass 1 trillion won in sales
- 2017: the industry's first mobile live commerce
- 2018: the CJ E&M merger and the birth of CJ ENM
- 2021: the unified brand CJ온스타일
- 2024: a very large mobile live show
- 2026: a global own-brand mall

By the numbers it publishes, CJ ONSTYLE had 1조 5,180억 won in sales in 2025, 66% growth in mobile live that year, 80 million annual mobile-live visitors, 20,000 brands in the app and 54 live IPs, which it calls the most in the industry. It describes itself as Korea's first video-commerce operator, a live pioneer from TV in 1995 to mobile in 2017.

Its mission page says CJ온스타일 expresses CJ Group's ONLYONE philosophy in the language of commerce. It aims to understand customers' lifestyles deeply, suggest tastes and needs they have not yet discovered, and connect products and content naturally. It calls "authentic recommendations and sensory products for the best lifestyle shopping experience" the direction of ONLYONE commerce. The business pages frame content commerce from TV to mobile, SNS and OTT, celebrity and influencer IP, trend-led curation and global expansion of K-lifestyle.

The storefront shows that lineage: dense, offer-led modules, broadcast times on product tiles, and one violet that means "buy".

## 12. Principles

1. **The offer leads.** *UI implication:* discount, benefit and broadcast time sit on the tile before secondary detail.
2. **One colour means buy.** *UI implication:* `#640faf` is kept for purchase actions and selection.
3. **Density is a feature.** *UI implication:* small type, square cells, thin grey lines.
4. **Content drives commerce.** *UI implication:* live and TV labels (라이브쇼, 방송일정) ride on product tiles.
5. **Flat and fast.** *UI implication:* no shadows; lines and fills separate.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable CJ ONSTYLE user segments (TV-home-shopping loyalists, mobile deal-seekers, style-and-home shoppers), not individual people.*

**이영숙, 54, 대전.** A long-time TV home-shopping viewer who now buys through the app during broadcasts; wants the offer, the card benefit and the buy button obvious.

**박지훈, 33, 서울.** A mobile-first deal-seeker who scans the home modules for the day's discounts and taps 바로구매 once the price adds up.

**최은정, 41, 경기.** A style-and-home shopper browsing brand pages, who likes the clean black-on-white chrome that lets product photography carry the page.

## 14. States

Only these states were observed on the three captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Hover / pressed (category toggle)** | The 카테고리 toggle fills `#640faf` with `#ffffff` text; the bundle's hover and pressed frames agree. |
| **Selected** | Product-page tab: `#333333`, 700, 1px `#333333` underline. Home filter chip: `#111111` fill, white bold text. Brand-page pagination: `#640faf` dot. Brand-page view toggle: `#640faf` outline. |
| **Hidden until focus** | Skip links sit 34px above the viewport; their focused appearance was not measured. |
| **Unmeasured** | The home tab's pseudo-state and interaction passes stalled after 90 seconds and were logged as unmeasured. The buy row was not probed. Focus was not measured anywhere. |

Error, empty, loading, sold-out and success states were not captured and are not described.

## 15. Motion & Easing

No transition or animation value was measured for any storefront control, and no official source consulted publishes a motion scale. The home hero carousel has previous, next and pause controls, but its timing was not measured. Treat motion as unspecified.

<!--
Sources — 2026-09-30
Capture: artifacts/reference-evidence/cjonstyle.json (capturedAt 2026-09-30T10:03:52.723Z; surfaces home tab, product item 2090936982, brand 00034773; coverage 100).
Narrative: corp.cjonstyle.com/ko, /ko/about/history, /ko/about/who-we-are, opened 2026-09-30.
Personas are fictional archetypes; names do not refer to real people.
-->
