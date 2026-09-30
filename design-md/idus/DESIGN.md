---
id: idus
name: idus (Backpackr)
display_name_kr: 아이디어스 (백패커)
country: KR
category: ecommerce
homepage: "https://www.idus.com"
primary_color: "#ef7014"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=idus.com&sz=128"
verified: "2026-09-30"
added: "2026-07-02"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: product, url: "https://www.idus.com/v2/", inspected: "2026-09-30" }
    - { id: surface-2, kind: product, url: "https://www.idus.com/v2/main/popular", inspected: "2026-09-30" }
    - { id: surface-3, kind: product, url: "https://www.idus.com/v2/gift-shop", inspected: "2026-09-30" }
    - { id: product, kind: product, url: "https://www.idus.com/v2/product/d418cb12-ecba-4534-860a-23836c3e0c44", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://www.idus.com/v2/", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://www.idus.com/v2/main/popular", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://www.idus.com/v2/gift-shop", captured: "2026-09-30" }
    - { id: idus-probe-product, kind: product-surface, url: "https://www.idus.com/v2/product/d418cb12-ecba-4534-860a-23836c3e0c44", captured: "2026-09-30" }
    - { id: backpackr-site, kind: official-doc, url: "https://backpac.kr/", captured: "2026-09-30" }
    - { id: idus-team, kind: official-doc, url: "https://team.idus.com/", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &cta { surface_id: product, source_id: idus-probe-product, method: live-state-probe, selector: "button 구매하기 (580 x 48): rest bg rgb(239, 112, 20), fg rgb(255, 255, 255), radius 2px, padding 0px 16px, 18px/700; hover ::before opacity 0 -> 0.1, pressed 0 -> 0.2; focus not measured (--no-focus)", captured: "2026-09-30" }
    "tokens.colors.on-primary": *cta
    "tokens.colors.ink": &rankdark { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::div.ProductCardVertical__imageTopBadge (bg rgb(17, 17, 17), 18 instances)", captured: "2026-09-30" }
    "tokens.colors.text": &pname { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p.ProductCardMainList__contentsProductName", captured: "2026-09-30" }
    "tokens.colors.text-muted": &tab { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::li.BaseTab", captured: "2026-09-30" }
    "tokens.colors.text-faint": &artist { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p.ProductCardMainList__contentsArtistName", captured: "2026-09-30" }
    "tokens.colors.sale": &discount { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::div.BaseProductCardVerticalContents__priceContainerDiscount", captured: "2026-09-30" }
    "tokens.colors.border-strong": &blockbtn { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"90\"]", captured: "2026-09-30" }
    "tokens.colors.chip-border": &chipout { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::span.BaseChip__outline", captured: "2026-09-30" }
    "tokens.colors.highlight-border": &chiphl { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::span.BaseChip__outline (165 x 42, border rgb(255, 198, 160))", captured: "2026-09-30" }
    "tokens.colors.divider": &subtab { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"19\"]", captured: "2026-09-30" }
    "tokens.colors.surface": &chipfill { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::span.BaseChip__fill", captured: "2026-09-30" }
    "tokens.colors.canvas": &card { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::article.BaseProductCardVertical", captured: "2026-09-30" }
    "tokens.typography.family.body": *tab
    "tokens.typography.cta.size": *cta
    "tokens.typography.cta.weight": *cta
    "tokens.typography.cta.use": *cta
    "tokens.typography.section-title.size": &h2 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.typography.section-title.weight": *h2
    "tokens.typography.section-title.lineHeight": *h2
    "tokens.typography.section-title.use": *h2
    "tokens.typography.tab.size": *tab
    "tokens.typography.tab.weight": *tab
    "tokens.typography.tab.lineHeight": *tab
    "tokens.typography.tab.use": *tab
    "tokens.typography.price.size": &price { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::div.BaseProductCardVerticalContents__priceContainerPrice", captured: "2026-09-30" }
    "tokens.typography.price.weight": *price
    "tokens.typography.price.lineHeight": *price
    "tokens.typography.price.use": *price
    "tokens.typography.body.size": *pname
    "tokens.typography.body.weight": *pname
    "tokens.typography.body.lineHeight": *pname
    "tokens.typography.body.use": *pname
    "tokens.typography.chip.size": *chipout
    "tokens.typography.chip.weight": *chipout
    "tokens.typography.chip.lineHeight": *chipout
    "tokens.typography.chip.use": *chipout
    "tokens.typography.caption.size": *artist
    "tokens.typography.caption.weight": *artist
    "tokens.typography.caption.lineHeight": *artist
    "tokens.typography.caption.use": *artist
    "tokens.typography.icon-label.size": &iconbtn { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"7\"]", captured: "2026-09-30" }
    "tokens.typography.icon-label.weight": *iconbtn
    "tokens.typography.icon-label.lineHeight": *iconbtn
    "tokens.typography.icon-label.use": *iconbtn
    "tokens.typography.micro.size": &bizbadge { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::div.BaseBadgeBusiness", captured: "2026-09-30" }
    "tokens.typography.micro.weight": *bizbadge
    "tokens.typography.micro.lineHeight": *bizbadge
    "tokens.typography.micro.use": *bizbadge
    "tokens.spacing.tag-x": *bizbadge
    "tokens.spacing.utility-x": &utility { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"0\"]", captured: "2026-09-30" }
    "tokens.spacing.card": &cardcontents { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::div.ProductCardMainList__contents", captured: "2026-09-30" }
    "tokens.spacing.chip-x": &chipsel { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::span.BaseChip__fill.BaseChip--medium (selected, 89 x 36)", captured: "2026-09-30" }
    "tokens.spacing.button-x": *cta
    "tokens.rounded.cta": *cta
    "tokens.rounded.card": *card
    "tokens.rounded.chip": *chipout
    "tokens.rounded.highlight": &hlwrap { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::div.BaseChipHighlightAnimation", captured: "2026-09-30" }
    "tokens.rounded.pill": *bizbadge
    "tokens.components.button-primary.type": *cta
    "tokens.components.button-primary.bg": *cta
    "tokens.components.button-primary.fg": *cta
    "tokens.components.button-primary.radius": *cta
    "tokens.components.button-primary.height": *cta
    "tokens.components.button-primary.padding": *cta
    "tokens.components.button-primary.font": *cta
    "tokens.components.button-primary.hover": *cta
    "tokens.components.button-primary.pressed": *cta
    "tokens.components.button-primary.states": *cta
    "tokens.components.button-primary.use": *cta
    "tokens.components.button-secondary.type": &gift { surface_id: product, source_id: idus-probe-product, method: live-state-probe, selector: "button 선물하기 (189.3 x 48): rest bg rgb(255, 255, 255), fg rgb(51, 51, 51), border 1px solid rgb(172, 172, 172), radius 2px, padding 0px 16px, 18px/700; hover ::before (rgb(51, 51, 51)) opacity 0 -> 0.1, pressed 0 -> 0.2", captured: "2026-09-30" }
    "tokens.components.button-secondary.bg": *gift
    "tokens.components.button-secondary.fg": *gift
    "tokens.components.button-secondary.border": *gift
    "tokens.components.button-secondary.radius": *gift
    "tokens.components.button-secondary.height": *gift
    "tokens.components.button-secondary.padding": *gift
    "tokens.components.button-secondary.font": *gift
    "tokens.components.button-secondary.hover": *gift
    "tokens.components.button-secondary.pressed": *gift
    "tokens.components.button-secondary.states": *gift
    "tokens.components.button-secondary.use": *gift
    "tokens.components.button-outline.type": &inquiry { surface_id: product, source_id: idus-probe-product, method: live-state-probe, selector: "button 작품문의 (189 x 40): rest bg rgb(255, 255, 255), fg rgb(239, 112, 20), border 1px solid rgb(239, 112, 20), radius 2px, padding 0px 16px, 14px/700; hover ::before (rgb(239, 112, 20)) opacity 0 -> 0.1, pressed 0 -> 0.2", captured: "2026-09-30" }
    "tokens.components.button-outline.bg": *inquiry
    "tokens.components.button-outline.fg": *inquiry
    "tokens.components.button-outline.border": *inquiry
    "tokens.components.button-outline.radius": *inquiry
    "tokens.components.button-outline.height": *inquiry
    "tokens.components.button-outline.padding": *inquiry
    "tokens.components.button-outline.font": *inquiry
    "tokens.components.button-outline.hover": *inquiry
    "tokens.components.button-outline.pressed": *inquiry
    "tokens.components.button-outline.states": *inquiry
    "tokens.components.button-outline.use": *inquiry
    "tokens.components.button-block.type": *blockbtn
    "tokens.components.button-block.bg": *blockbtn
    "tokens.components.button-block.fg": *blockbtn
    "tokens.components.button-block.border": *blockbtn
    "tokens.components.button-block.radius": *blockbtn
    "tokens.components.button-block.height": *blockbtn
    "tokens.components.button-block.padding": *blockbtn
    "tokens.components.button-block.font": *blockbtn
    "tokens.components.button-block.states": *blockbtn
    "tokens.components.button-block.use": *blockbtn
    "tokens.components.utility-button.type": *utility
    "tokens.components.utility-button.fg": *utility
    "tokens.components.utility-button.height": *utility
    "tokens.components.utility-button.padding": *utility
    "tokens.components.utility-button.font": *utility
    "tokens.components.utility-button.states": *utility
    "tokens.components.utility-button.use": *utility
    "tokens.components.rank-badge.type": &rank { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::div.ProductCardVertical__imageTopBadge (bg rgb(239, 112, 20), 6 instances)", captured: "2026-09-30" }
    "tokens.components.rank-badge.bg": *rank
    "tokens.components.rank-badge.fg": *rank
    "tokens.components.rank-badge.radius": *rank
    "tokens.components.rank-badge.size": *rank
    "tokens.components.rank-badge.font": *rank
    "tokens.components.rank-badge.use": *rank
    "tokens.components.chip-outline.type": *chipout
    "tokens.components.chip-outline.bg": *chipout
    "tokens.components.chip-outline.fg": *chipout
    "tokens.components.chip-outline.border": *chipout
    "tokens.components.chip-outline.radius": *chipout
    "tokens.components.chip-outline.padding": *chipout
    "tokens.components.chip-outline.height": *chipout
    "tokens.components.chip-outline.font": *chipout
    "tokens.components.chip-outline.use": *chipout
    "tokens.components.chip-highlight.type": *chiphl
    "tokens.components.chip-highlight.bg": *chiphl
    "tokens.components.chip-highlight.fg": *chiphl
    "tokens.components.chip-highlight.border": *chiphl
    "tokens.components.chip-highlight.radius": *chiphl
    "tokens.components.chip-highlight.height": *chiphl
    "tokens.components.chip-highlight.use": *chiphl
    "tokens.components.chip-fill.type": *chipfill
    "tokens.components.chip-fill.bg": *chipfill
    "tokens.components.chip-fill.fg": *chipfill
    "tokens.components.chip-fill.radius": *chipfill
    "tokens.components.chip-fill.padding": *chipfill
    "tokens.components.chip-fill.height": *chipfill
    "tokens.components.chip-fill.font": *chipfill
    "tokens.components.chip-fill.selected": *chipsel
    "tokens.components.chip-fill.states": *chipsel
    "tokens.components.chip-fill.use": *chipfill
    "tokens.components.business-badge.type": *bizbadge
    "tokens.components.business-badge.bg": *bizbadge
    "tokens.components.business-badge.fg": *bizbadge
    "tokens.components.business-badge.radius": *bizbadge
    "tokens.components.business-badge.padding": *bizbadge
    "tokens.components.business-badge.height": *bizbadge
    "tokens.components.business-badge.font": *bizbadge
    "tokens.components.business-badge.use": *bizbadge
    "tokens.components.nav-tab.type": *tab
    "tokens.components.nav-tab.fg": *tab
    "tokens.components.nav-tab.height": *tab
    "tokens.components.nav-tab.font": *tab
    "tokens.components.nav-tab.states": *tab
    "tokens.components.nav-tab.use": *tab
    "tokens.components.sub-tab.type": *subtab
    "tokens.components.sub-tab.fg": *subtab
    "tokens.components.sub-tab.border": *subtab
    "tokens.components.sub-tab.height": *subtab
    "tokens.components.sub-tab.font": *subtab
    "tokens.components.sub-tab.selected": &subtabsel { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"18\"]", captured: "2026-09-30" }
    "tokens.components.sub-tab.states": *subtabsel
    "tokens.components.sub-tab.use": *subtab
    "tokens.components.product-card.type": *card
    "tokens.components.product-card.bg": *card
    "tokens.components.product-card.radius": *card
    "tokens.components.product-card.size": *card
    "tokens.components.product-card.use": *card
    "tokens.components.search-input.type": &search { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"5\"]", captured: "2026-09-30" }
    "tokens.components.search-input.bg": *search
    "tokens.components.search-input.fg": *search
    "tokens.components.search-input.font": *search
    "tokens.components.search-input.states": *search
    "tokens.components.search-input.use": *search
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#ef7014"
    on-primary: "#ffffff"
    ink: "#111111"
    text: "#333333"
    text-muted: "#666666"
    text-faint: "#999999"
    sale: "#ff4b50"
    border-strong: "#acacac"
    chip-border: "#e1e1e1"
    highlight-border: "#ffc6a0"
    divider: "#e5e7eb"
    surface: "#f5f5f5"
    canvas: "#ffffff"
  typography:
    family: { body: '-apple-system, "system-ui", "Malgun Gothic", "맑은 고딕", helvetica, "Apple SD Gothic Neo", sans-serif' }
    cta: { size: 18, weight: 700, use: "구매하기 and 선물하기 labels on the product page" }
    section-title: { size: 20, weight: 700, lineHeight: 1.2, use: "Section headings over the product rows, 24px line" }
    tab: { size: 16, weight: 400, lineHeight: 1.2, use: "Main category tabs in the header row, 19.2px line, in #666666" }
    price: { size: 16, weight: 700, lineHeight: 1.2, use: "Card price and the coral discount rate beside it, 19.2px line" }
    body: { size: 14, weight: 400, lineHeight: 1.5, use: "Product names on cards, 21px line, in #333333" }
    chip: { size: 14, weight: 400, lineHeight: 1.2, use: "Shortcut and filter chip labels, 16.8px line; 700 when selected" }
    caption: { size: 12, weight: 400, lineHeight: 1.2, use: "Maker names on cards and header utility links, 14.4px line" }
    icon-label: { size: 11, weight: 400, lineHeight: 1.2, use: "Labels under the header icons (장바구니 and neighbours), 13.2px line" }
    micro: { size: 10, weight: 400, lineHeight: 1.2, use: "Grey business badge on ranking cards, 12px line" }
  spacing: { tag-x: 6, utility-x: 8, card: 10, chip-x: 12, button-x: 16 }
  rounded: { cta: 2, card: 6, chip: 36, highlight: 100, pill: 1000 }
  components:
    button-primary: { type: button, bg: "#ef7014", fg: "#ffffff", radius: "2px", height: "48px", padding: "0px 16px", font: "18px / 700", hover: "::before overlay (black) at opacity 0.1", pressed: "::before overlay at opacity 0.2", states: "probe on the product page: hover and pressed darken the fill through a black ::before overlay (0 -> 0.1 -> 0.2); the button itself computes transition all 0s; focus was not measured", use: "구매하기, the product page's purchase action, 580 x 48 at the end of the action row" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#333333", border: "1px solid #acacac", radius: "2px", height: "48px", padding: "0px 16px", font: "18px / 700", hover: "::before overlay (#333333) at opacity 0.1", pressed: "::before overlay at opacity 0.2", states: "probe: the same overlay pattern in the label colour; focus not measured", use: "선물하기 beside 구매하기 on the product page, 189.3 x 48" }
    button-outline: { type: button, bg: "#ffffff", fg: "#ef7014", border: "1px solid #ef7014", radius: "2px", height: "40px", padding: "0px 16px", font: "14px / 700", hover: "::before overlay (#ef7014) at opacity 0.1", pressed: "::before overlay at opacity 0.2", states: "probe: an orange ::before wash; focus not measured", use: "작품문의 (ask the maker) on the product page, 189 x 40" }
    button-block: { type: button, bg: "#ffffff", fg: "#333333", border: "1px solid #acacac", radius: "2px", height: "44px", padding: "0px 16px", font: "16px / 700", states: "rest on the captured instance; no pointer frame and not probed, so no hover, pressed or focus value is declared", use: "Full-width 360 x 44 outlined button near the foot of the ranking page; the same outline at 40px and 14px / 700 on the gift shop" }
    utility-button: { type: button, fg: "#666666", height: "30px", padding: "0px 8px", font: "12px / 400", states: "rest on 12 instances; no pointer frame, so no state value is declared", use: "Text links in the header utility row, present on all three browse pages" }
    rank-badge: { type: badge, bg: "#ef7014", fg: "#ffffff", radius: "0px 0px 6px", size: "30px x 30px", font: "16px / 700", use: "Number badge in the top-left corner of ranked product images on 실시간 인기 and the gift shop: 6 instances in orange, the other 18 in #111111" }
    chip-outline: { type: badge, bg: "#ffffff", fg: "#111111", border: "1px solid #e1e1e1", radius: "36px", padding: "0px 12px 0px 5px", height: "42px", font: "14px / 400", use: "Icon-led shortcut chips under the home hero (13 instances)" }
    chip-highlight: { type: badge, bg: "#ffffff", fg: "#111111", border: "1px solid #ffc6a0", radius: "36px", height: "42px", use: "The one shortcut chip with a peach outline, inside a 100px-radius highlight wrapper, 165 x 42" }
    chip-fill: { type: badge, bg: "#f5f5f5", fg: "#333333", radius: "36px", padding: "0px 16px", height: "40px", font: "14px / 400", selected: "bg #333333, fg #ffffff, 14px / 700", states: "selected read from rest values; no pointer frame", use: "Filter chips on the gift shop; the medium size is 36px tall with 12px side padding" }
    business-badge: { type: badge, bg: "#f5f5f5", fg: "#666666", radius: "1000px", padding: "0px 6px", height: "16px", font: "10px / 400", use: "Small grey badge in the review line of ranking cards" }
    nav-tab: { type: tab, fg: "#666666", height: "48px", font: "16px / 400", states: "rest on 24 instances; the current tab carries no distinct rest value in the capture and no pointer frame was recorded", use: "Main category tabs across the header (24 instances on three pages)" }
    sub-tab: { type: tab, fg: "#666666", border: "0px 0px 1px #e5e7eb", height: "44px", font: "14px / 400", selected: "fg #333333, 14px / 700", states: "selected read from rest values; no pointer frame", use: "Period and category sub-tabs on 실시간 인기" }
    product-card: { type: card, bg: "#ffffff", radius: "6px", size: "243px x 305px", use: "Vertical product card; the image corners take the 6px radius and nothing computes a shadow" }
    search-input: { type: input, bg: "#ffffff", fg: "#333333", font: "14px / 400", states: "rest only; the field was not focused or typed into, so no focus or error value is declared", use: "Borderless header search field, 396 x 17 inside the search bar" }
  components_harvested: true
---

# Design System Inspiration of idus (Backpackr)

## 1. Visual Theme & Atmosphere

idus (아이디어스) is the handmade marketplace run by Backpackr (백패커), a Seoul company founded in 2012 that describes its mission as "창작과 정성의 가치가 인정받는 세상을 만듭니다" and today operates three platforms as one creator ecosystem: 아이디어스 ("핸드메이드로 일상을 특별하게"), the crowdfunding service 텀블벅 and the design-goods shop 텐바이텐. On idus, independent 작가 (makers) sell handcrafted jewellery, ceramics, candles, food and gifts, and the site's vocabulary keeps the maker in front: 작가, 작품, 작가홈, 팔로우. Backpackr's culture page sums up how the company works in three lines — Action for Winning, One Team for Mission, Hyper for Growth — and its site lists awards from Apple's best-of-2014 selection to Red Dot 2021.

The web surface reads like a dense Korean commerce app. A white canvas carries rows of 243px product cards with 6px image corners, grey maker names, coral discount rates and black prices, all set in the operating system's own hangul font. There is no webfont and no drop shadow: every recorded component computes `box-shadow: none`. Separation comes from white space, a 1px `#e5e7eb` rule under sub-tabs and `#acacac` outlines on secondary buttons.

Colour is held back until it means something. On the browse pages, selection is neutral: a selected filter chip turns `#333333` with white bold text, and a selected sub-tab turns `#333333` and bold. Carrot orange `#ef7014` appears in two places. It fills the purchase button 구매하기 on the product page and outlines 작품문의, and it marks the top-ranked product badges on the ranking and gift pages, where the rest of the badges are near-black `#111111`. Coral `#ff4b50` is reserved for the discount rate.

**Key Characteristics:**
- One action colour: carrot orange `#ef7014` on the purchase button, the maker-inquiry outline and the leading rank badges
- Neutral selection: selected chips and tabs go `#333333`, not orange
- Operating-system type (`-apple-system`, Malgun Gothic, Apple SD Gothic Neo) with hierarchy carried by size and weight
- Flat surfaces: every recorded element computes `box-shadow: none`
- Tight 2px action buttons, 6px product cards and 36px chips
- Coral `#ff4b50` for discount rates only
- Text ladder `#333333` → `#666666` → `#999999`

## Primary tasks

- Buy a handmade piece from an independent maker
- Search for a maker or a piece from the header
- Browse the live ranking (실시간 인기) and the gift shop
- Ask a maker about a piece or send it as a gift
- Follow a maker and buy again when new work appears

## 2. Color Palette & Roles

### Primary
- **idus Carrot** (`#ef7014`): The primary colour because it is what the product renders in its primary roles. The product page's purchase button 구매하기 is filled with it (580 × 48, white 18px / 700 label), 작품문의 uses it for border and label, and on 실시간 인기 and the gift shop it fills the leading rank badges (6 of 24; the others are `#111111`). No other chromatic colour fills an action anywhere on the four pages.
- **On-Primary** (`#ffffff`): Label colour on the carrot button and on rank badges.

### Accent
- **Sale Coral** (`#ff4b50`): The discount rate beside each card price (27 cards on the ranking and gift pages).
- **Highlight Peach** (`#ffc6a0`): The 1px outline of the one highlighted shortcut chip on home.

### Neutral & Ink
- **Ink** (`#111111`): Near-black fill of the non-leading rank badges and the text of shortcut chips.
- **Text** (`#333333`): Product names, prices and the selected state of chips and tabs; the most frequent text colour (1,074 uses).
- **Text Muted** (`#666666`): Category tabs, header utility links and business badges.
- **Text Faint** (`#999999`): Maker names on cards.

### Surface & Borders
- **Canvas** (`#ffffff`): Page, cards, buttons.
- **Surface** (`#f5f5f5`): Filter chips and small grey badges.
- **Border Strong** (`#acacac`): 1px outline of secondary and full-width buttons.
- **Chip Border** (`#e1e1e1`): 1px outline of the home shortcut chips.
- **Divider** (`#e5e7eb`): The 1px rule under the sub-tabs.

## 3. Typography Rules

### Font Family
- **Live surface use:** two computed operating-system stacks. Most UI uses `-apple-system, "system-ui", "Malgun Gothic", "맑은 고딕", helvetica, "Apple SD Gothic Neo", sans-serif` (773 uses); some card wrappers inherit Tailwind's default `ui-sans-serif, system-ui, -apple-system, …` (686 uses). Both resolve to the visitor's system font.
- **Official distributed font assets:** none found; the pages load no webfont.
- **Official product use:** no idus page opened names a typeface.
- **Declared only:** none recorded. (Backpackr's recruiting site on team.idus.com declares Pretendard, but it is a different surface and supplies no idus token.)

### Hierarchy

| Role | Size | Weight | Line height | Use |
|------|------|--------|-------------|-----|
| CTA | 18px | 700 | — | 구매하기, 선물하기 |
| Section title | 20px | 700 | 24px | Row headings |
| Tab | 16px | 400 | 19.2px | Main category tabs |
| Price | 16px | 700 | 19.2px | Card price, discount rate |
| Body | 14px | 400 | 21px | Product names |
| Chip | 14px | 400 (700 selected) | 16.8px | Shortcut and filter chips |
| Caption | 12px | 400 | 14.4px | Maker names, utility links |
| Icon label | 11px | 400 | 13.2px | Header icon labels |
| Micro | 10px | 400 | 12px | Business badge |

### Principles
- **Weight over typeface**: with a system font, importance is a jump to 700 on actions, prices and selected states.
- **Dense sizing**: product names sit at 14px and maker names at 12px, so a 243px card holds image, maker, name, price and reviews.
- **Bold is for action, price and selection**: 700 marks what the shopper acts on or compares.

## 4. Component Stylings

### Buttons

**Primary Purchase (`구매하기`)**
- Background: `#ef7014`
- Text: `#ffffff`
- Radius: 2px
- Padding: 0px 16px
- Height: 48px
- Font: 18px / 700
- Hover: a black `::before` overlay rises to opacity 0.1
- Pressed: the overlay rises to 0.2
- Use: The purchase action on the product page

**Secondary (`선물하기`)**
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#acacac`
- Radius: 2px
- Padding: 0px 16px
- Height: 48px
- Font: 18px / 700
- Hover: a `#333333` overlay at opacity 0.1 (0.2 pressed)
- Use: Gift action beside 구매하기

**Brand Outline (`작품문의`)**
- Background: `#ffffff`
- Text: `#ef7014`
- Border: 1px solid `#ef7014`
- Radius: 2px
- Padding: 0px 16px
- Height: 40px
- Font: 14px / 700
- Hover: an orange overlay at opacity 0.1 (0.2 pressed)
- Use: Ask the maker about a piece

**Full-width Outline**
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#acacac`
- Radius: 2px
- Height: 44px
- Font: 16px / 700
- Use: 360px-wide button near the foot of the ranking page

**Header Utility**
- Text: `#666666`
- Padding: 0px 8px
- Height: 30px
- Font: 12px / 400
- Use: Utility links in the header

### Inputs

**Header Search**
- Background: `#ffffff`
- Text: `#333333`
- Font: 14px / 400
- Use: Borderless field inside the header search bar

### Cards & Containers

**Product Card**
- Background: `#ffffff`
- Radius: 6px
- Size: 243 × 305
- Use: Vertical product card; no shadow

### Badges & Chips

**Rank Badge**
- Background: `#ef7014` (leading ranks) or `#111111`
- Text: `#ffffff`
- Radius: 0px 0px 6px
- Size: 30 × 30
- Font: 16px / 700
- Use: Number badge on ranked product images

**Shortcut Chip**
- Background: `#ffffff`
- Text: `#111111`
- Border: 1px solid `#e1e1e1` (one highlighted chip uses `#ffc6a0`)
- Radius: 36px
- Height: 42px
- Font: 14px / 400
- Use: Icon-led shortcuts under the home hero

**Filter Chip**
- Background: `#f5f5f5`
- Text: `#333333`
- Radius: 36px
- Height: 40px
- Selected: `#333333` fill, white 14px / 700 label
- Use: Gift-shop filters

**Business Badge**
- Background: `#f5f5f5`
- Text: `#666666`
- Radius: 1000px
- Height: 16px
- Font: 10px / 400
- Use: Small grey badge in card review lines

### Navigation

**Category Tab**
- Text: `#666666`
- Height: 48px
- Font: 16px / 400
- Use: Main category row in the header

**Sub-tab**
- Text: `#666666`
- Border: 1px `#e5e7eb` rule underneath
- Height: 44px
- Selected: `#333333`, 14px / 700
- Use: Sub-tabs on 실시간 인기

---

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out idus browse pages, fixed keyboard probe on a public product page, and first-party Backpackr context)
**Tier 1 sources:** https://www.idus.com/v2/ ; https://www.idus.com/v2/main/popular ; https://www.idus.com/v2/gift-shop ; https://backpac.kr/ ; https://team.idus.com/
**Tier 2 sources:** not attempted in this pass
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Measured paddings: 6px (badge sides), 8px (utility links), 10px (card text block), 12px and 16px (chip sides), 16px (button sides)
- Product cards sit in rows at 243px width; the gift shop also uses a 169px card

### Grid & Container
- Rows of 243px product cards are the main layout unit on all three browse pages
- A horizontal category tab row anchors the header; 실시간 인기 adds a sub-tab row
- The product page places 선물하기 and 구매하기 side by side, with 작품문의 in the maker block

### Whitespace Philosophy
- **Density first**: the catalogue is large, so cards are compact and text is small.
- **Flat segmentation**: sections separate by space and single rules, not by shadow.
- **Orange as signal**: in a crowded grid the carrot fill is the one saturated action.

### Border Radius Scale
- 2px: action buttons
- 6px: product cards and rank-badge corner
- 36px: chips
- 100px: highlight wrapper
- 1000px: small badges

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Every recorded element |
| Rule | 1px `#e5e7eb` | Under sub-tabs |
| Outline | 1px `#acacac` / `#e1e1e1` | Secondary buttons / shortcut chips |

**Shadow Philosophy**: none. Depth is expressed by outlines and by the contrast between white cards and the `#f5f5f5` chip surface.

## 7. Do's and Don'ts

### Do
- Keep carrot orange (`#ef7014`) for the purchase action, the maker-inquiry outline and leading rank badges
- Show selection in `#333333` with a bold label
- Let size and weight carry hierarchy in the system font
- Keep action buttons at 2px radius and cards at 6px
- Use coral (`#ff4b50`) only for discount rates

### Don't
- Spread orange onto decoration or selected states
- Add drop shadows
- Load a display webfont
- Round action buttons into pills
- Use coral for actions

## 8. Responsive Behavior

This pass captured the desktop layout at 1440 × 900 only. No breakpoint was measured, so none is declared.

### Touch Targets
- Purchase and gift buttons are 48px tall; 작품문의 is 40px; header icon buttons are 60 × 67

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action: `#ef7014` with `#ffffff` label
- Discount rate: `#ff4b50`
- Text: `#333333` / `#666666` / `#999999`
- Rank badge (others) and chip text: `#111111`
- Chip surface: `#f5f5f5`
- Outlines: `#acacac`, `#e1e1e1`; rule `#e5e7eb`
- Canvas: `#ffffff`

### Example Component Prompts
- "Product action row: a white 선물하기 button (1px solid #acacac, #333333 label) beside a #ef7014 구매하기 button with a white label; both 48px tall, 2px radius, 18px / 700. On hover lay a black overlay at 10% opacity over the fill, 20% on press."
- "Ranked product card: 243px wide, white, 6px image radius, no shadow. A 30 × 30 number badge in the top-left corner, #ef7014 for the leading ranks and #111111 for the rest, radius 0 0 6px, 16px / 700 white."
- "Gift filters: chips 40px tall at 36px radius, #f5f5f5 with #333333 14px text; the selected chip is #333333 with a white bold label."

### Iteration Guide
1. Orange means act; selection is dark grey
2. 700 for actions, prices and selection; 400 elsewhere
3. No shadows
4. 2px buttons, 6px cards, 36px chips
5. Coral for discounts only

---

## 10. Voice & Tone

idus speaks about 작품 (works) and the 작가 (makers) behind them rather than products and sellers. The company line on its own pages is warm and mission-led — "핸드메이드로 일상을 특별하게!" and "창작과 정성의 가치가 인정받는 세상을 만듭니다." Actions are plain verbs (`구매하기`, `선물하기`, `작품문의`), and navigation names are discovery-framed.

| Context | Tone |
|---|---|
| Tagline | Warm, everyday. "핸드메이드로 일상을 특별하게!" |
| Mission | Values-led. "창작과 정성의 가치가 인정받는 세상을 만듭니다." |
| CTAs | Plain verbs. "구매하기", "선물하기", "작품문의". |
| Maker relationship | Person-first. 작가, 작가홈, 팔로우. |

**Forbidden register**: hard-sell urgency, calling makers anonymous sellers, hype-heavy exclamation.

## 11. Brand Narrative

Backpackr was founded in 2012 (its site counts "2012년 설립") and runs idus, 텀블벅 and 텐바이텐 under one line, "세 개의 플랫폼, 하나의 생태계", with the ambition "Global No.1 Creator Ecosystem". idus's own meta description carries the promise to buyers and makers alike: handmade things make daily life special, and craft and care deserve recognition. The recruiting site lists roles for each of the three services under the Backpackr name, and the idus footer names (주)백패커, CEO 김동환, as the operator in Seocho-gu, Seoul.

The design follows from that thesis. The interface centres people who make things, keeps chrome flat and quiet so product photography carries the page, and saves its single warm colour for the moment of commitment.

## 12. Principles

1. **Makers, not sellers.** The interface names people (작가, 작가홈, 팔로우). *UI implication:* keep the maker's name on every card.
2. **One colour means act.** *UI implication:* orange on purchase, inquiry and leading ranks; neutral selection.
3. **Dense but scannable.** *UI implication:* small type, compact cards, space instead of boxes.
4. **Flat and warm.** *UI implication:* no shadows; outlines and the photography do the work.

## 13. Personas

*Personas below are fictional archetypes informed by the audiences the site addresses (gift shoppers, supporters of independent makers), not individual people.*

**정유진, 28, 서울.** Shopping for a friend's birthday and wants something that does not look mass-produced. Uses the gift shop filters to narrow the options.

**김도현, 34, 경기.** Follows several ceramic and leather 작가 and buys again when a maker he follows releases new 작품.

**이서연, 41, 부산.** Browses the live ranking for family gifts and compares prices and discount rates across many cards quickly.

## 14. States

| State | Treatment (measured) |
|---|---|
| **Hover (buttons)** | A `::before` overlay fades in at opacity 0.1 — black on 구매하기, `#333333` on 선물하기, orange on 작품문의 |
| **Pressed (buttons)** | The same overlay at opacity 0.2 |
| **Selected chip** | `#333333` fill, white 14px / 700 |
| **Selected sub-tab** | `#333333`, 14px / 700 |

Focus, empty, loading, error and success states were not measured in this pass and are not declared.

## 15. Motion & Easing

The four probed buttons compute `transition: all 0s` on themselves; the probe found transitions of up to 200ms (구매하기) and 500ms (작품문의, 선물하기) elsewhere in the compared scope and waited them out before reading. No easing curve was read, so none is declared.
