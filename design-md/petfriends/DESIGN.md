---
id: petfriends
name: Pet Friends
display_name_kr: 펫프렌즈
country: KR
category: ecommerce
homepage: "https://www.pet-friends.co.kr/"
primary_color: "#ff4081"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=pet-friends.co.kr&sz=128"
verified: "2026-09-30"
added: "2026-07-02"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: product, url: "https://m.pet-friends.co.kr/main/tab/2", inspected: "2026-09-30" }
    - { id: surface-2, kind: product, url: "https://m.pet-friends.co.kr/main/product/list?tab_info_id=1960", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://m.pet-friends.co.kr/main/tab/2", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://m.pet-friends.co.kr/main/product/list?tab_info_id=1960", captured: "2026-09-30" }
    - { id: petfriends-probe-home, kind: product-surface, url: "https://m.pet-friends.co.kr/main/tab/2", captured: "2026-09-30" }
    - { id: petfriends-probe-home-sheet, kind: product-surface, url: "https://m.pet-friends.co.kr/main/tab/2", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &tabsel { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"49\"]", captured: "2026-09-30" }
    "tokens.colors.on-primary": *tabsel
    "tokens.colors.ink": &h2 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.colors.ink-pure": &body { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::body", captured: "2026-09-30" }
    "tokens.colors.muted": &hint { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.discount": &red { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.magenta": &mag { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.surface-pink": &chip { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"13\"]", captured: "2026-09-30" }
    "tokens.colors.hairline": &sort { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"15\"]", captured: "2026-09-30" }
    "tokens.typography.family.brand": *body
    "tokens.typography.section-title.size": *h2
    "tokens.typography.section-title.weight": *h2
    "tokens.typography.section-title.tracking": *h2
    "tokens.typography.section-title.use": *h2
    "tokens.typography.list-title.size": &listh2 { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h2", captured: "2026-09-30" }
    "tokens.typography.list-title.weight": *listh2
    "tokens.typography.list-title.lineHeight": *listh2
    "tokens.typography.list-title.tracking": *listh2
    "tokens.typography.list-title.use": *listh2
    "tokens.typography.search.size": &input { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"0\"]", captured: "2026-09-30" }
    "tokens.typography.search.weight": *input
    "tokens.typography.search.use": *input
    "tokens.typography.keyword.size": &pilllabel { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.keyword.weight": *pilllabel
    "tokens.typography.keyword.tracking": *pilllabel
    "tokens.typography.keyword.use": *pilllabel
    "tokens.typography.tab-selected.size": *tabsel
    "tokens.typography.tab-selected.weight": *tabsel
    "tokens.typography.tab-selected.lineHeight": *tabsel
    "tokens.typography.tab-selected.use": *tabsel
    "tokens.typography.tab.size": &tab { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"50\"]", captured: "2026-09-30" }
    "tokens.typography.tab.weight": *tab
    "tokens.typography.tab.lineHeight": *tab
    "tokens.typography.tab.use": *tab
    "tokens.typography.nav-selected.size": &navsel { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.nav-selected.weight": *navsel
    "tokens.typography.nav-selected.tracking": *navsel
    "tokens.typography.nav-selected.use": *navsel
    "tokens.typography.nav.size": &navlabel { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.nav.weight": *navlabel
    "tokens.typography.nav.lineHeight": *navlabel
    "tokens.typography.nav.tracking": *navlabel
    "tokens.typography.nav.use": *navlabel
    "tokens.typography.product-title.size": &pname { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-testid=\"product-card-name\"]", captured: "2026-09-30" }
    "tokens.typography.product-title.weight": *pname
    "tokens.typography.product-title.lineHeight": *pname
    "tokens.typography.product-title.tracking": *pname
    "tokens.typography.product-title.use": *pname
    "tokens.typography.product-title-list.size": &pname2 { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-testid=\"product-card-name\"]", captured: "2026-09-30" }
    "tokens.typography.product-title-list.weight": *pname2
    "tokens.typography.product-title-list.lineHeight": *pname2
    "tokens.typography.product-title-list.tracking": *pname2
    "tokens.typography.product-title-list.use": *pname2
    "tokens.typography.meta.size": &meta { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.meta.weight": *meta
    "tokens.typography.meta.lineHeight": *meta
    "tokens.typography.meta.tracking": *meta
    "tokens.typography.meta.use": *meta
    "tokens.typography.label-bold.size": *mag
    "tokens.typography.label-bold.weight": *mag
    "tokens.typography.label-bold.lineHeight": *mag
    "tokens.typography.label-bold.tracking": *mag
    "tokens.typography.label-bold.use": *mag
    "tokens.typography.hint.size": *hint
    "tokens.typography.hint.weight": *hint
    "tokens.typography.hint.lineHeight": *hint
    "tokens.typography.hint.tracking": *hint
    "tokens.typography.hint.use": *hint
    "tokens.spacing.chip-y": *chip
    "tokens.spacing.chip-x-start": *chip
    "tokens.spacing.chip-x-end": *chip
    "tokens.spacing.chip-gap": *chip
    "tokens.spacing.pill-y": &pill { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"2\"]", captured: "2026-09-30" }
    "tokens.spacing.pill-x": *pill
    "tokens.spacing.input-y": *input
    "tokens.spacing.input-x": *input
    "tokens.spacing.input-icon": *input
    "tokens.spacing.nav-top": &nav { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"18\"]", captured: "2026-09-30" }
    "tokens.spacing.nav-bottom": *nav
    "tokens.spacing.gutter": &navbar { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::nav", captured: "2026-09-30" }
    "tokens.spacing.sort-x": *sort
    "tokens.rounded.input": *input
    "tokens.rounded.tile": &tile { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::li", captured: "2026-09-30" }
    "tokens.rounded.tab": *tabsel
    "tokens.rounded.pill": *pill
    "tokens.rounded.chip": *chip
    "tokens.rounded.cta": &sheet { surface_id: home, source_id: petfriends-probe-home-sheet, method: live-state-probe, selector: "button APP 설치하기 in the app-install sheet (162 x 48): rest bg rgb(255, 64, 129), radius 48px, padding 0px, label p rgb(255, 255, 255) 16px/700; hover and pressed NO CHANGE across self, 5 descendants and 3 ancestor levels; transition all 0s; focus not reached (Tab walk cycled after 34 stops)", captured: "2026-09-30" }
    "tokens.rounded.sort": *sort
    "tokens.components.category-tab.type": *tab
    "tokens.components.category-tab.fg": *tab
    "tokens.components.category-tab.radius": *tab
    "tokens.components.category-tab.size": *tab
    "tokens.components.category-tab.font": *tab
    "tokens.components.category-tab.selected": *tabsel
    "tokens.components.category-tab.states": &tabprobe { surface_id: home, source_id: petfriends-probe-home, method: live-state-probe, selector: "button 사료 (74 x 32, role tab, selected): rest bg rgb(255, 64, 129), fg rgb(255, 255, 255), transition all 0s; button 간식: rest fg rgb(45, 48, 53) over rgb(255, 255, 255); hover and pressed unmeasured (pointer-events none while the app-install sheet was open), focus not reached", captured: "2026-09-30" }
    "tokens.components.category-tab.use": *tab
    "tokens.components.app-install-button.type": *sheet
    "tokens.components.app-install-button.bg": *sheet
    "tokens.components.app-install-button.fg": *sheet
    "tokens.components.app-install-button.radius": *sheet
    "tokens.components.app-install-button.height": *sheet
    "tokens.components.app-install-button.size": *sheet
    "tokens.components.app-install-button.font": *sheet
    "tokens.components.app-install-button.states": *sheet
    "tokens.components.app-install-button.use": *sheet
    "tokens.components.header-chip.type": *chip
    "tokens.components.header-chip.bg": *chip
    "tokens.components.header-chip.fg": &chipprobe { surface_id: home, source_id: petfriends-probe-home, method: live-state-probe, selector: "button 강아지 (84 x 32): rest bg rgb(255, 241, 245), label span rgb(45, 48, 53) 14px/700; focus (Tab #24) NO CHANGE across self, 4 descendants and 3 ancestor levels; hover and pressed unmeasured (pointer-events none while the app-install sheet was open)", captured: "2026-09-30" }
    "tokens.components.header-chip.radius": *chip
    "tokens.components.header-chip.padding": *chip
    "tokens.components.header-chip.height": *chip
    "tokens.components.header-chip.font": *chipprobe
    "tokens.components.header-chip.states": *chipprobe
    "tokens.components.header-chip.use": *chip
    "tokens.components.keyword-pill.type": *pill
    "tokens.components.keyword-pill.bg": *pill
    "tokens.components.keyword-pill.fg": *pilllabel
    "tokens.components.keyword-pill.radius": *pill
    "tokens.components.keyword-pill.padding": *pill
    "tokens.components.keyword-pill.height": *pill
    "tokens.components.keyword-pill.font": *pilllabel
    "tokens.components.keyword-pill.states": &pillprobe { surface_id: home, source_id: petfriends-probe-home, method: live-state-probe, selector: "a 체험단 (73.6 x 30): rest bg rgba(255, 170, 199, 0.5), label p rgb(45, 48, 53) 16px/500; focus (Tab #12) NO CHANGE across self, 1 descendant and 3 ancestor levels; hover and pressed unmeasured (pointer-events none)", captured: "2026-09-30" }
    "tokens.components.keyword-pill.use": *pill
    "tokens.components.search-input.type": *input
    "tokens.components.search-input.fg": *input
    "tokens.components.search-input.border": &inputprobe { surface_id: home, source_id: petfriends-probe-home, method: live-state-probe, selector: "input 어떤 상품을 찾으시나요? (280 x 52): border none, radius 6px, fg rgb(45, 48, 53); focus (Tab #10) NO CHANGE across self and 3 ancestor levels; submit button 검색 (67 x 67) focus (Tab #11) NO CHANGE; hover and pressed unmeasured (pointer-events none)", captured: "2026-09-30" }
    "tokens.components.search-input.radius": *input
    "tokens.components.search-input.padding": *input
    "tokens.components.search-input.height": *input
    "tokens.components.search-input.font": *input
    "tokens.components.search-input.states": *inputprobe
    "tokens.components.search-input.use": *input
    "tokens.components.sort-button.type": *sort
    "tokens.components.sort-button.border": *sort
    "tokens.components.sort-button.radius": *sort
    "tokens.components.sort-button.padding": *sort
    "tokens.components.sort-button.height": *sort
    "tokens.components.sort-button.states": *sort
    "tokens.components.sort-button.use": *sort
    "tokens.components.nav-tab.type": *nav
    "tokens.components.nav-tab.fg": *navlabel
    "tokens.components.nav-tab.padding": *nav
    "tokens.components.nav-tab.height": *nav
    "tokens.components.nav-tab.font": *navlabel
    "tokens.components.nav-tab.selected": *navsel
    "tokens.components.nav-tab.states": *nav
    "tokens.components.nav-tab.use": *nav
    "tokens.components.banner-control.type": &bannerbtn { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"31\"]", captured: "2026-09-30" }
    "tokens.components.banner-control.bg": *bannerbtn
    "tokens.components.banner-control.radius": *bannerbtn
    "tokens.components.banner-control.padding": *bannerbtn
    "tokens.components.banner-control.size": *bannerbtn
    "tokens.components.banner-control.states": *bannerbtn
    "tokens.components.banner-control.use": *bannerbtn
    "tokens.components.image-tile.type": *tile
    "tokens.components.image-tile.radius": *tile
    "tokens.components.image-tile.size": *tile
    "tokens.components.image-tile.use": *tile
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#ff4081"
    on-primary: "#ffffff"
    ink: "#2d3035"
    ink-pure: "#000000"
    muted: "#9ca1aa"
    discount: "#f33f46"
    magenta: "#ea306f"
    surface-pink: "#fff1f5"
    hairline: "#e9ebec"
  typography:
    family: { brand: "Lific" }
    section-title: { size: 18, weight: 700, tracking: -0.2, use: "Merchandising section headings on home (h2, line height normal), in #2d3035; the emphasised phrase inside each heading is set apart in pink (see §3)" }
    list-title: { size: 16, weight: 700, lineHeight: 1.25, tracking: -0.2, use: "Page title in the header of the best-products list, 20px line" }
    search: { size: 20, weight: 500, use: "Search field text and placeholder (어떤 상품을 찾으시나요?)" }
    keyword: { size: 16, weight: 500, tracking: -0.2, use: "Trending-keyword pill labels (체험단, 개구리, 오리젠), in #2d3035" }
    tab-selected: { size: 14, weight: 700, lineHeight: 2.14, use: "Selected category tab label (사료), white on #ff4081, 30px line" }
    tab: { size: 14, weight: 500, lineHeight: 2.14, use: "Unselected category tab labels (간식, 용품), in #2d3035, 30px line" }
    nav-selected: { size: 14, weight: 700, tracking: -0.2, use: "Label of the current top tab (HOME), line height normal" }
    nav: { size: 14, weight: 400, lineHeight: 1.64, tracking: -0.2, use: "Top tab labels (웰컴펫페어, 심쿵펫페어, 사료 최저가 도전!), 23px line, in #2d3035" }
    product-title: { size: 13, weight: 400, lineHeight: 1.38, tracking: -0.2, use: "Product names in home carousels, 18px line, in #2d3035" }
    product-title-list: { size: 14, weight: 400, lineHeight: 1.64, tracking: -0.2, use: "Product names in the best-products grid, 23px line" }
    meta: { size: 12, weight: 500, lineHeight: 1, tracking: -0.2, use: "Sub-category names under the category tabs (어덜트, 퍼피, 시니어) and small product lines, 12px line" }
    label-bold: { size: 12, weight: 700, lineHeight: 1, tracking: -0.2, use: "펫프 Only label above exclusive products, in #ea306f" }
    hint: { size: 10, weight: 400, lineHeight: 1, tracking: -0.2, use: "Age hints under sub-categories ((1-7세), (1세미만)), in #9ca1aa" }
  spacing: { chip-y: 4, chip-x-start: 12, chip-x-end: 8, chip-gap: 8, pill-y: 3, pill-x: 15, input-y: 14.5, input-x: 16, input-icon: 44, nav-top: 14, nav-bottom: 10, gutter: 16, sort-x: 12 }
  rounded: { input: 6, tile: 8, tab: 16, pill: 18.5, chip: 36, cta: 48, sort: 100 }
  components:
    category-tab: { type: tab, fg: "#2d3035", radius: "16px", size: "74px x 32px", font: "14px / 500 / 30px Lific", selected: "bg #ff4081, fg #ffffff, 14px / 700 (class data-[state=active]:bg-brand)", states: "selected read from rest values; hover and pressed unmeasured because the page ignored the pointer while the app-install sheet was open, and Tab never reached the tabs; transition all 0s", use: "사료 / 간식 / 용품 category switcher on home at home::[data-omd-capture=\"49\"] (selected) and [data-omd-capture=\"50\"]" }
    app-install-button: { type: button, bg: "#ff4081", fg: "#ffffff", radius: "48px", height: "48px", size: "162px x 48px", font: "16px / 700 Lific (label p) with a white download icon", states: "probe: hover and pressed show no change across the button, its 5 descendants and 3 ancestor levels (transition all 0s); focus was not reached by the Tab walk", use: "APP 설치하기 in the app-install sheet that opens over home for logged-out visitors (펫프렌즈 앱에서 가입하면 5,000원 쿠폰 즉시 지급); read by the fixed probe" }
    header-chip: { type: button, bg: "#fff1f5", fg: "#2d3035", radius: "36px", padding: "4px 8px 4px 12px", height: "32px", font: "14px / 700 Lific (label span)", states: "probe: focus (Tab #24) shows no change; hover and pressed unmeasured (pointer ignored while the sheet was open)", use: "Pet-type (강아지) and delivery-address (배송지 입력) selectors in the app header, each with a chevron icon; the button itself computes #000000, the visible label is its child span" }
    keyword-pill: { type: badge, bg: "rgba(255, 170, 199, 0.5)", fg: "#2d3035", radius: "18.5px", padding: "3px 15px", height: "30px", font: "16px / 500 Lific, letter-spacing -0.2px (label p)", states: "probe: focus (Tab #12) shows no change; hover and pressed unmeasured", use: "Trending search keywords (체험단, 개구리, 오리젠, 호랑이, 터키츄) under the search field of the desktop side panel, linking to search results; the anchor computes #ffffff but the visible label is its child p" }
    search-input: { type: input, fg: "#2d3035", border: "none", radius: "6px", padding: "14.5px 44px 14.5px 16px", height: "52px", font: "20px / 500 Lific", states: "probe: focus (Tab #10) shows no change on the field or its three ancestors; hover and pressed unmeasured", use: "Product search in the desktop side panel, placeholder 어떤 상품을 찾으시나요?, 280 x 52; the frame drawn around it and the round submit control are painted by something outside the probe's compared scope, so no frame colour is declared" }
    sort-button: { type: button, border: "1px solid #e9ebec", radius: "100px", padding: "0px 12px", height: "32px", states: "rest only; no state frame was recorded and the probe did not read it", use: "펫프추천순 sort control at the top of the best-products list at surface-2::[data-omd-capture=\"15\"], 105 x 32; its label sits in a child span the collector did not record, so no label colour is declared" }
    nav-tab: { type: tab, fg: "#2d3035", padding: "14px 0px 10px", height: "47px", font: "14px / 400 / 23px Lific, letter-spacing -0.2px (label p)", selected: "label 14px / 700 on the current tab (HOME); the underline indicator was not recorded", states: "selected variant read from rest values; no pointer or focus state was read", use: "Scrolling top tabs of the app (HOME, 웰컴펫페어, 심쿵펫페어, 사료 최저가 도전!, 할인, NEW 신상, 오직 펫프에서만) in a role=tablist nav" }
    banner-control: { type: button, bg: "rgba(0, 0, 0, 0.1)", radius: "8px", padding: "7px", size: "30px x 30px", states: "rest only; not probed", use: "Icon control over the home banner carousel, with a 4px backdrop blur (class backdrop-blur-[4px])" }
    image-tile: { type: card, radius: "8px", size: "136px x 72px", use: "Rounded image tiles on home (4 instances)" }
  components_harvested: true
---

# Design System Inspiration of Pet Friends

## 1. Visual Theme & Atmosphere

Pet Friends (펫프렌즈) is a Korean pet-commerce platform that sells food, treats and supplies to dog and cat owners. Its storefront introduces itself as "반려동물 1등 쇼핑몰, 펫프렌즈" and promises "사료, 간식, 용품을 한곳에서! 서울, 경기 당일&새벽배송" — everything in one place, with same-day and dawn delivery in Seoul and Gyeonggi. Korean press traces the company to its founding in 2015 and to 2021, when IMM Private Equity and GS Retail acquired it and growth accelerated: revenue roughly doubled from about ₩61bn in 2021 to ₩117.1bn in 2024, and in the first half of 2025 the company reported its first half-year profit. The same coverage credits 집사생활, the in-app community where owners trade care tips and share photos of their pets ('내새꾸 자랑'), for the brand's emotional pull, and quotes the company's stated ambition to grow into a "super app" covering a pet's whole life cycle.

The brand speaks to owners as 집사 (the pet's devoted butler) and to pets as 내새꾸 (my baby). On the live site this shows up as a warm, deal-forward mobile storefront. At desktop width the product keeps its phone shape: a 430px app column sits beside a fixed side panel that carries the search field and trending keywords over a pale field with pink and mint diagonal artwork. Inside the app column everything is set in Lific. Headings are charcoal `#2d3035` at 18px bold, and a supplementary read shows each one lifting a phrase such as 재구매율 81% or 최저가 도전 사료 모음! into weight 900 pink. The one saturated colour, pink `#ff4081`, fills the selected category tab and the APP 설치하기 call to action. Price copy has its own reds: `#f33f46` for the 첫구매 혜택가 label and `#ea306f` for 펫프 Only. Every one of the 409 recorded elements is flat; nothing computes a box-shadow.

**Key Characteristics:**
- One pink, `#ff4081`, for selection and the primary call to action (the category tab's class names it `bg-brand`)
- Lific for every role: 18px bold headings, 13–14px product names, 10–12px meta lines, all with -0.2px tracking
- Charcoal `#2d3035` for reading text rather than pure black; `#9ca1aa` for hints and "전체보기"
- Commerce signals in their own reds: `#f33f46` (첫구매 혜택가) and `#ea306f` (펫프 Only)
- Soft pink `#fff1f5` pills for the pet-type and delivery chips in the header
- Rounded everywhere: 6px field, 8px tiles, 16px tabs, 18.5px keyword pills, 36px chips, 48px call to action, 100px sort pill
- Flat surfaces; separation comes from tint and a single `#e9ebec` hairline

## Primary tasks

- Order pet food, treats and supplies in one place
- Set the delivery address and pet type from the header chips
- Search for a product, or tap a trending keyword such as 체험단
- Scan discount rates and first-purchase prices before the product name
- Claim the first-purchase benefit (첫구매 혜택가) or the app sign-up coupon

## 2. Color Palette & Roles

Every token below was read on 2026-09-30 from the logged-out home (m.pet-friends.co.kr/main/tab/2, where www.pet-friends.co.kr lands) and the best-products list by the deterministic collector at 1440 × 900, and the call to action by the fixed keyboard probe. The tokens describe the mobile web storefront; the native app was not captured.

### Primary
- **Pet Friends Pink** (`#ff4081`): The fill of the selected category tab (사료, `aria-selected=true`, class `data-[state=active]:bg-brand`) and of APP 설치하기, the one call to action shown to every logged-out visitor in the sheet that opens over home. It is the primary because it is the colour the product uses for both its selected state and its primary action; no other saturated fill was recorded.
- **On Primary** (`#ffffff`): The selected tab's label and the APP 설치하기 label.

### Text
- **Ink** (`#2d3035`): Section headings, product names, tab and chip labels, keyword labels and the search text.
- **Pure Black** (`#000000`): The document default colour; the header chips compute it on the button while their visible labels are `#2d3035`.
- **Muted** (`#9ca1aa`): Age hints under sub-categories and the "전체보기" links; a supplementary read also finds it on struck-through original prices and review counts.

### Commerce signals
- **Discount Red** (`#f33f46`): The 첫구매 혜택가 (first-purchase price) label on product cards. A supplementary read shows the discount rate beside the price (for example 50 %) in the same red.
- **Magenta** (`#ea306f`): The 펫프 Only label above products sold only on Pet Friends; a supplementary read also finds it on "쿠폰 적용됨" lines.

### Surface & Neutral
- **Surface Pink** (`#fff1f5`): The fill of the 강아지 and 배송지 입력 chips in the header.
- **Hairline** (`#e9ebec`): The 1px border of the 펫프추천순 sort pill on the best-products list, the only drawn neutral border recorded. (The search field declares this colour but draws no border.)

### Brand assets, not tokens
- The trending-keyword pills are `rgba(255, 170, 199, 0.5)`, a half-transparent pink laid over the side panel; it is kept as a component value, not a colour token.
- The desktop frame's pink and mint diagonal artwork, the "반려동물 1등 쇼핑몰 펫프렌즈" headline graphic and the pink logo were not measured; no colour is claimed for them.

## 3. Typography Rules

### Font Family
- **Live surface use**: `Lific` (409 observed uses, `loaded / high`), self-hosted by Pet Friends as `Lific-Regular`, `Lific-Medium` and `Lific-Bold` WOFF2/WOFF/OTF files on `cdn.pet-friends.co.kr/font/`. The body computes `Lific, "Noto Sans KR", sans-serif` on both pages, and every heading, label, input and list item renders in Lific.
- **Official distributed font assets**: none found. No page opened this session names Lific's designer, owner or licence.
- **Official product use**: no Pet Friends page opened this session names its typeface; not claimed.
- **Declared only (no visible use)**: `Noto Sans KR` (a Light face served from `m.pet-friends.co.kr/fonts/`), `hi-melody` (from `cdn.pet-friends.co.kr/font/`) and FontAwesome 4.7 (from `use.fontawesome.com`), each with 0 observed uses.
- **Unresolved**: whether Lific is a face made for Pet Friends or a licensed retail family, and under what licence it is served.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Observed on |
|------|------|------|--------|-------------|----------|-------------|
| Search | Lific | 20px | 500 | normal | normal | Search field and placeholder |
| Section Title | Lific | 18px | 700 | normal | -0.2px | Home section headings, `#2d3035` |
| List Title | Lific | 16px | 700 | 20px (1.25) | -0.2px | Best-products page title |
| Keyword | Lific | 16px | 500 | normal | -0.2px | Trending-keyword pill labels |
| Tab (selected) | Lific | 14px | 700 | 30px (2.14) | normal | 사료, white on pink |
| Tab | Lific | 14px | 500 | 30px (2.14) | normal | 간식, 용품 |
| Nav (selected) | Lific | 14px | 700 | normal | -0.2px | HOME |
| Nav | Lific | 14px | 400 | 23px (1.64) | -0.2px | Other top tabs |
| Product Title (list) | Lific | 14px | 400 | 23px (1.64) | -0.2px | Best-products grid |
| Product Title | Lific | 13px | 400 | 18px (1.38) | -0.2px | Home carousels |
| Meta | Lific | 12px | 500 | 12px (1.0) | -0.2px | Sub-category names |
| Label Bold | Lific | 12px | 700 | 12px (1.0) | -0.2px | 펫프 Only, `#ea306f` |
| Hint | Lific | 10px | 400 | 10px (1.0) | -0.2px | Age hints, `#9ca1aa` |

### Principles
- **One family**: Lific carries every role; hierarchy comes from size and weight, not from a second face.
- **Tight, uniform tracking**: -0.2px on headings, names and meta lines alike (class `tracking-tight-02`).
- **Small, dense type**: product names at 13–14px and meta at 10–12px, sized for a phone-width commerce grid.
- **Heading emphasis in pink** (supplementary read, not a token): the persuasive phrase inside a section heading renders in `#ff4081` at weight 900 — 재구매율 81%, 최저가 도전 사료 모음!, 오늘 특가!.

## 4. Component Stylings

### Buttons

**App-install call to action (primary)**
- Background: `#ff4081`
- Text: `#ffffff`, 16px / 700 Lific, with a white download icon
- Radius: 48px
- Size: 162 × 48
- States: the probe found no hover or pressed change; focus was not reached
- Use: APP 설치하기 in the sheet that opens over home ("펫프렌즈 앱에서 가입하면 5,000원 쿠폰 즉시 지급")

**Header chip**
- Background: `#fff1f5`
- Text: `#2d3035`, 14px / 700 Lific (child span)
- Radius: 36px
- Padding: 4px 8px 4px 12px (the 8px end leaves room for a chevron)
- Height: 32px
- States: focus shows no change; hover and pressed unmeasured
- Use: 강아지 and 배송지 입력

**Sort pill**
- Background: transparent
- Border: 1px solid `#e9ebec`
- Radius: 100px
- Padding: 0px 12px
- Height: 32px
- Use: 펫프추천순 on the best-products list

**Banner control**
- Background: `rgba(0, 0, 0, 0.1)` with a 4px backdrop blur
- Radius: 8px
- Size: 30 × 30, 7px padding
- Use: Icon control over the home banner carousel

### Tabs

**Category tab**
- Selected: `#ff4081` fill, `#ffffff` 14px / 700 label
- Unselected: transparent, `#2d3035` 14px / 500 label
- Radius: 16px
- Size: 74 × 32, 30px line
- Use: 사료 / 간식 / 용품 on home

**Top tab**
- Text: `#2d3035`, 14px / 400 / 23px; current tab 14px / 700
- Padding: 14px 0px 10px
- Height: 47px
- Use: HOME, 웰컴펫페어, 심쿵펫페어, 사료 최저가 도전!, 할인, NEW 신상, 오직 펫프에서만

### Inputs

**Search field**
- Background: transparent
- Text: `#2d3035`, 20px / 500 Lific
- Border: none on the field itself
- Radius: 6px
- Padding: 14.5px 44px 14.5px 16px (the 44px end reserves room for the submit control)
- Height: 52px
- Use: 어떤 상품을 찾으시나요? in the desktop side panel

### Badges

**Trending-keyword pill**
- Background: `rgba(255, 170, 199, 0.5)`
- Text: `#2d3035`, 16px / 500 Lific (child p)
- Radius: 18.5px
- Padding: 3px 15px
- Height: 30px
- Use: 체험단, 개구리, 오리젠, 호랑이, 터키츄, 프라이엄프, 배변패드, 하네스, 오메가3, 트릿

### Tiles

**Image tile**
- Radius: 8px
- Size: 136 × 72
- Use: Rounded image tiles on home

---

**Verified:** 2026-09-30 (deterministic collector capture of two public, logged-out pages of the Pet Friends mobile web storefront plus fixed keyboard-probe state reads and first-party and Korean press context)
**Tier 1 sources:** https://m.pet-friends.co.kr/main/tab/2 ; https://m.pet-friends.co.kr/main/product/list?tab_info_id=1960
**Tier 2 sources:** not re-attempted on 2026-09-30; the July record found no Pet Friends entry on getdesign.md or styles.refero.design; no Tier 2 value used
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Chip padding: 4px vertical, 12px start, 8px end, 8px gap
- Keyword pill padding: 3px 15px
- Search field: 14.5px vertical, 16px start, 44px end
- Top tabs: 14px above and 10px below the label; the tab strip has a 16px side gutter
- Sort pill: 12px horizontal

### Grid & Container
- At desktop width the storefront renders a 430px app column (classes such as `max-w-mobile-max` and `max-w-[42.8rem]`) beside a fixed 512px side panel with the search field, trending keywords and app-store links.
- Inside the column: header chips, a scrolling top-tab strip, banner carousel, category tabs with sub-category grids, then merchandising sections of product carousels.
- The best-products page swaps the home header for a back button and page title, then a sort pill over a product grid.

### Whitespace Philosophy
- **Dense merchandising**: small type and tight line heights (1.0 on meta lines) pack prices and labels close together.
- **Soft grouping**: tinted chips and pills and rounded tiles group content without borders.

### Border Radius Scale
- Field (6px): search input
- Tile (8px): image tiles, banner control
- Tab (16px): category tabs
- Pill (18.5px): trending keywords
- Chip (36px): header chips
- Call to action (48px): APP 설치하기
- Sort (100px): 펫프추천순

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Every recorded element |
| Tint | `#fff1f5` fill; half-transparent pink pills | Header chips, trending keywords |
| Hairline | 1px solid `#e9ebec` | Sort pill |
| Frosted | `rgba(0, 0, 0, 0.1)` with a 4px backdrop blur | Banner control |

**Shadow Philosophy**: all 409 elements the collector recorded compute `box-shadow: none`. Emphasis comes from the pink fill and from colour in the price lines, not from elevation.

## 7. Do's and Don'ts

### Do
- Keep `#ff4081` for the selected state and the primary call to action
- Set everything in Lific with -0.2px tracking on headings, names and meta lines
- Use `#2d3035` for reading text and `#9ca1aa` for hints
- Use `#f33f46` for first-purchase prices and `#ea306f` for 펫프 Only labels
- Use soft pink `#fff1f5` pills for header selectors
- Round every control: 16px tabs, 36px chips, 48px call to action

### Don't
- Don't add drop shadows; none of the 409 recorded elements has one
- Don't use the price reds for actions or selection
- Don't set white labels on the half-transparent keyword pills; their labels are `#2d3035`
- Don't render Lific with another face in its place
- Don't invent hover, pressed or focus styles; the probe measured none (see §14)
- Don't use square corners on actions or pills

## 8. Responsive Behavior

### Breakpoints
Only the 1440 × 900 desktop viewport was captured. At that width the storefront already renders its phone-width column beside a side panel; no breakpoint value was measured.

### Touch Targets
- Search field: 52px tall
- APP 설치하기: 48px
- Top tabs: 47px
- Header chips, category tabs and sort pill: 32px
- Keyword pills and banner control: 30px

### Collapsing Strategy
- Not captured. The column layout suggests the side panel drops away on phones, but that was not observed.

### Image Behavior
- Product and banner images sit flat, without borders or shadows; image tiles round to 8px.

## 9. Agent Prompt Guide

### Quick Color Reference
- Selected state and primary call to action: `#ff4081` with `#ffffff` text
- Text: `#2d3035`; hints `#9ca1aa`; document default `#000000`
- First-purchase price: `#f33f46`; 펫프 Only: `#ea306f`
- Header chip fill: `#fff1f5`; hairline `#e9ebec`

### Example Component Prompts
- "Create a category tab row: 74 × 32 tabs with 16px radius. Selected: `#ff4081` fill, white 14px Lific at weight 700 on a 30px line. Unselected: transparent with a `#2d3035` label at weight 500."
- "Create an app-install button: `#ff4081` fill, 48px radius, 162 × 48, white 16px Lific label at weight 700 with a download icon, no hover change, no shadow."
- "Build header chips: `#fff1f5` fill, 36px radius, 4px 8px 4px 12px padding, 32px tall, `#2d3035` 14px Lific label at weight 700 followed by a chevron."
- "Build trending-keyword pills: `rgba(255, 170, 199, 0.5)` fill, 18.5px radius, 3px 15px padding, 30px tall, `#2d3035` 16px Lific label at weight 500 with -0.2px tracking."

### Iteration Guide
1. Pink `#ff4081` only for selection and the primary call to action
2. Lific everywhere, -0.2px tracking
3. `#2d3035` text, `#9ca1aa` hints
4. Price reds `#f33f46` and `#ea306f` stay in price and label lines
5. Tinted pills and rounded tiles; no shadows
6. Small, dense type sized for a phone column

---

## 10. Voice & Tone

Pet Friends' voice is **warm, playful and deal-forward**. It calls owners 집사님 and pets 내새꾸, and leads with a benefit or a number.

| Context | Tone |
|---|---|
| Positioning | Confident, first-place claim. "반려동물 1등 쇼핑몰, 펫프렌즈" |
| Promise | Everything-in-one-place convenience with delivery speed. "사료, 간식, 용품을 한곳에서! 서울, 경기 당일&새벽배송" |
| Section headings | Upbeat and benefit-first, one phrase lifted in pink. "최저가 도전 사료 모음!", "오늘 특가!" |
| Price lines | Plain and numeric. "첫구매 혜택가", "쿠폰 적용됨" |
| App prompt | Direct offer with a polite way out. "펫프렌즈 앱에서 가입하면 5,000원 쿠폰 즉시 지급" / "괜찮아요. 모바일 웹으로 볼게요" |

**Voice samples (read on the live home page, 2026-09-30):**
- "반려동물 1등 쇼핑몰, 펫프렌즈" — page and Open Graph title.
- "사료, 간식, 용품을 한곳에서! 서울, 경기 당일&새벽배송, 가입 5천원 쿠폰부터 80% 첫구매 혜택까지" — page description.
- "재구매율 81%" — emphasised phrase in a home section heading.
- "괜찮아요. 모바일 웹으로 볼게요" — the dismiss line of the app-install sheet.

**Forbidden register**: cold logistics jargon, guilt-based pressure on pet owners, promotional claims without a concrete figure.

## 11. Brand Narrative

Pet Friends began in 2015 as a specialist online shop for pet supplies, built around a single promise that still heads its storefront: food, treats and supplies in one place, delivered the same day or at dawn in Seoul and Gyeonggi. In 2021 IMM Private Equity and GS Retail acquired the company, and Korean business press describes the years since as a period of rapid growth: revenue rose from about ₩61bn in 2021 to ₩117.1bn in 2024, and the first half of 2025 brought the company's first half-year profit. Coverage also notes a distribution deal for the North American organic pet-food brand Blue Buffalo and a stated plan to become a "super app" spanning a pet's life cycle.

What sets the brand apart in that coverage is emotion rather than logistics: the 집사생활 community inside the app, where first-time owners swap care tips and post photos of their pets. The storefront speaks the same language — 집사님, 내새꾸 — and its design reads the same way: one affectionate pink for the actions that matter, charcoal type, soft rounded pills and flat surfaces that keep a dense catalogue light.

## 12. Principles

1. **One pink for what matters.** *UI implication:* `#ff4081` marks the selected state and the primary call to action, and nothing else competes with it.
2. **Owners as 집사.** *UI implication:* copy is warm and familiar (집사님, 내새꾸), never cold transaction language.
3. **Prove the deal.** *UI implication:* show the number — discount rate, first-purchase price, coupon value — in its own colour.
4. **Flat and light.** *UI implication:* no shadows; group with tinted pills and rounded tiles. (An editorial reading of the captured pages, not a Pet Friends statement.)
5. **Friendly geometry.** *UI implication:* every control is rounded, from the 6px field to the 100px sort pill.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Pet Friends user segments (Korean dog and cat owners buying food and supplies online), not individual people.*

**김서연, 32, 서울.** A first-time puppy owner who orders food, treats and pads every week and relies on dawn delivery. Reads the 집사생활 community before trying a new brand.

**이준호, 41, 경기.** Runs a two-cat household and buys in bulk. Scans the red discount rate and first-purchase price before reading the product name.

**박민지, 27, 부산.** A dog owner who taps trending keywords such as 체험단 to find trial offers, and trusts repurchase figures more than star ratings.

## 14. States

Only these states were observed on the two captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Selected (category tab)** | `#ff4081` fill with a white 14px / 700 label; unselected tabs are transparent with `#2d3035` 14px / 500 labels. |
| **Selected (top tab)** | The current tab's label is 14px / 700; the others are 14px / 400. The underline indicator was not recorded. |
| **Hover / pressed (APP 설치하기)** | No change (probe, transition all 0s). |
| **Focus** | No change on the header chip, keyword pill, search field and submit control (Tab stops #24, #12, #10, #11). |
| **Dialog open** | An app-install sheet covered the app column on load for a logged-out visitor, with APP 설치하기 and a "괜찮아요. 모바일 웹으로 볼게요" dismiss line. |

Hover and pressed on the tabs, chips, pills and search field are **unmeasured**, not absent: while the sheet was open the page ignored the pointer. Error, empty, loading and success states were not captured and are not described.

## 15. Motion & Easing

Every control the probe read computes `transition: all 0s`, so its states change instantly. Nothing else about motion (carousels, the sheet's entrance) was measured; treat it as unspecified and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/petfriends.json (capturedAt 2026-09-30T11:09:05Z), deterministic collector, 1440x900, logged out: m.pet-friends.co.kr/main/tab/2 and /main/product/list?tab_info_id=1960. States: fixed keyboard probe raws docs/research/2026-09-29-growth/raw/petfriends-states-home.json and petfriends-states-home-sheet.json.
- Heading emphasis, price-line colours beyond the bundle, and label texts: a same-day supplementary headless read, logged in .verification.md; not used for tokens.
- §1, §10, §11 context: the live home page (title, description, sheet copy) and Korean press opened 2026-09-30 (newsis 2025-08-04 and 2025-05-07, news1 2025-05-07).
- Personas are fictional archetypes. Interpretive readings are editorial.
-->
