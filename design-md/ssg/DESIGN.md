---
id: ssg
name: SSG.COM
display_name_kr: 쓱닷컴
country: KR
category: ecommerce
homepage: "https://www.ssg.com"
primary_color: "#ff5452"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=ssg.com&sz=128"
verified: "2026-10-01"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-10-01"
  surfaces:
    - { id: home, kind: product, url: "https://www.ssg.com/", inspected: "2026-10-01" }
    - { id: surface-2, kind: product, url: "https://www.ssg.com/page/pc/ranking.ssg", inspected: "2026-10-01" }
    - { id: surface-3, kind: product, url: "https://www.ssg.com/event/eventMain.ssg", inspected: "2026-10-01" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://www.ssg.com/", captured: "2026-10-01" }
    - { id: aside-census, kind: product-surface, url: "https://www.ssg.com/", captured: "2026-10-01" }
    - { id: surface-surface-2, kind: product-surface, url: "https://www.ssg.com/page/pc/ranking.ssg", captured: "2026-10-01" }
    - { id: surface-surface-3, kind: product-surface, url: "https://www.ssg.com/event/eventMain.ssg", captured: "2026-10-01" }
    - { id: ssg-company-intro, kind: official-doc, url: "https://company.ssg.com/intrd/keybsns.ssg", captured: "2026-10-01" }
    - { id: ssg-growth-story, kind: official-doc, url: "https://company.ssg.com/intrd/grthstory.ssg", captured: "2026-10-01" }
    - { id: ssg-brand-story, kind: official-doc, url: "https://company.ssg.com/intrd/brstory.ssg", captured: "2026-10-01" }
    - { id: pretendard-license, kind: license, url: "https://raw.githubusercontent.com/orioncactus/pretendard/main/LICENSE", captured: "2026-10-01" }
  conflicts: []
  claims:
    "tokens.colors.primary": { surface_id: home, source_id: aside-census, method: live-inspect, selector: "span.ssgitem_label x124 background-color rgb(255, 84, 82)", captured: "2026-10-01" }
    "tokens.colors.ink": &body2 { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::body", captured: "2026-10-01" }
    "tokens.colors.ink-legacy": &body1 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::body", captured: "2026-10-01" }
    "tokens.colors.muted": &taboff { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"26\"]", captured: "2026-10-01" }
    "tokens.colors.subtle": &sub3 { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h2", captured: "2026-10-01" }
    "tokens.colors.faint": &evoff { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"66\"]", captured: "2026-10-01" }
    "tokens.colors.canvas": *body2
    "tokens.colors.surface": *taboff
    "tokens.colors.surface-2": &chip { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"41\"]", captured: "2026-10-01" }
    "tokens.colors.hairline": &slider { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"71\"]", captured: "2026-10-01" }
    "tokens.typography.family.display": &title3 { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h1", captured: "2026-10-01" }
    "tokens.typography.family.body": *body2
    "tokens.typography.title.size": *title3
    "tokens.typography.title.weight": *title3
    "tokens.typography.title.lineHeight": *title3
    "tokens.typography.title.use": *title3
    "tokens.typography.hero-title.size": &hero { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-10-01" }
    "tokens.typography.hero-title.weight": *hero
    "tokens.typography.hero-title.use": *hero
    "tokens.typography.home-section.size": &h2home { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-10-01" }
    "tokens.typography.home-section.weight": *h2home
    "tokens.typography.home-section.lineHeight": *h2home
    "tokens.typography.home-section.tracking": *h2home
    "tokens.typography.home-section.use": *h2home
    "tokens.typography.tab-lg.size": &evsel { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"65\"]", captured: "2026-10-01" }
    "tokens.typography.tab-lg.weight": *evsel
    "tokens.typography.tab-lg.lineHeight": *evsel
    "tokens.typography.tab-lg.use": *evsel
    "tokens.typography.tab.size": &tabsel { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"25\"]", captured: "2026-10-01" }
    "tokens.typography.tab.weight": *tabsel
    "tokens.typography.tab.lineHeight": *tabsel
    "tokens.typography.tab.use": *tabsel
    "tokens.typography.body.size": *body2
    "tokens.typography.body.weight": *body2
    "tokens.typography.body.lineHeight": *body2
    "tokens.typography.body.use": *body2
    "tokens.typography.nav.size": &nav { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"21\"]", captured: "2026-10-01" }
    "tokens.typography.nav.weight": *nav
    "tokens.typography.nav.lineHeight": *nav
    "tokens.typography.nav.use": *nav
    "tokens.typography.subtitle.size": *sub3
    "tokens.typography.subtitle.weight": *sub3
    "tokens.typography.subtitle.lineHeight": *sub3
    "tokens.typography.subtitle.use": *sub3
    "tokens.typography.chip.size": *chip
    "tokens.typography.chip.weight": *chip
    "tokens.typography.chip.lineHeight": *chip
    "tokens.typography.chip.use": *chip
    "tokens.typography.body-legacy.size": *body1
    "tokens.typography.body-legacy.weight": *body1
    "tokens.typography.body-legacy.lineHeight": *body1
    "tokens.typography.body-legacy.use": *body1
    "tokens.typography.utility.size": &util { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"13\"]", captured: "2026-10-01" }
    "tokens.typography.utility.weight": *util
    "tokens.typography.utility.lineHeight": *util
    "tokens.typography.utility.use": *util
    "tokens.spacing.tab-x": *tabsel
    "tokens.spacing.tab-lg": *evsel
    "tokens.rounded.none": *tabsel
    "tokens.rounded.input": &input { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"8\"]", captured: "2026-10-01" }
    "tokens.rounded.pill": *chip
    "tokens.components.ranking-tab.type": *taboff
    "tokens.components.ranking-tab.bg": *taboff
    "tokens.components.ranking-tab.fg": *taboff
    "tokens.components.ranking-tab.radius": *taboff
    "tokens.components.ranking-tab.padding": *taboff
    "tokens.components.ranking-tab.height": *taboff
    "tokens.components.ranking-tab.font": *taboff
    "tokens.components.ranking-tab.selected": *tabsel
    "tokens.components.ranking-tab.states": *tabsel
    "tokens.components.ranking-tab.use": *taboff
    "tokens.components.event-tab.type": *evoff
    "tokens.components.event-tab.bg": *evoff
    "tokens.components.event-tab.fg": *evoff
    "tokens.components.event-tab.radius": *evoff
    "tokens.components.event-tab.padding": *evoff
    "tokens.components.event-tab.height": *evoff
    "tokens.components.event-tab.font": *evoff
    "tokens.components.event-tab.selected": *evsel
    "tokens.components.event-tab.states": *evsel
    "tokens.components.event-tab.use": *evoff
    "tokens.components.filter-chip.type": *chip
    "tokens.components.filter-chip.bg": *chip
    "tokens.components.filter-chip.fg": *chip
    "tokens.components.filter-chip.radius": *chip
    "tokens.components.filter-chip.height": *chip
    "tokens.components.filter-chip.font": *chip
    "tokens.components.filter-chip.states": *chip
    "tokens.components.filter-chip.use": *chip
    "tokens.components.search-field.type": *input
    "tokens.components.search-field.bg": *input
    "tokens.components.search-field.fg": *input
    "tokens.components.search-field.radius": *input
    "tokens.components.search-field.height": *input
    "tokens.components.search-field.font": *input
    "tokens.components.search-field.states": *input
    "tokens.components.search-field.use": *input
    "tokens.components.slider-control.type": *slider
    "tokens.components.slider-control.bg": *slider
    "tokens.components.slider-control.border": *slider
    "tokens.components.slider-control.radius": *slider
    "tokens.components.slider-control.padding": *slider
    "tokens.components.slider-control.size": *slider
    "tokens.components.slider-control.states": *slider
    "tokens.components.slider-control.use": *slider
    "tokens.components.product-thumb.type": &thumb { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"58\"]", captured: "2026-10-01" }
    "tokens.components.product-thumb.radius": *thumb
    "tokens.components.product-thumb.size": *thumb
    "tokens.components.product-thumb.use": *thumb
tokens:
  source: reconciled
  extracted: "2026-10-01"
  colors:
    primary: "#ff5452"
    ink: "#222222"
    ink-legacy: "#000000"
    muted: "#666666"
    subtle: "#777777"
    faint: "#888888"
    canvas: "#ffffff"
    surface: "#fafafa"
    surface-2: "#f5f5f5"
    hairline: "#e5e5e5"
  typography:
    family: { display: "Pretendard", body: "Pretendard" }
    title: { size: 30, weight: 700, lineHeight: 1.2, use: "Page and section titles on the event page (이벤트/쿠폰, 지금 인기 상승 중!) and the ranking page title 베스트, 36px line, in #222222" }
    hero-title: { size: 24, weight: 700, use: "Home hero slide titles (ssghero24_titmain), white or #222222 over the slide image; line-height computes normal, so none is declared" }
    home-section: { size: 20, weight: 700, lineHeight: 1.2, tracking: -0.3, use: "Home section titles (cmmain_title), 24px line, in #222222" }
    tab-lg: { size: 20, weight: 700, lineHeight: 1.2, use: "Event page tabs (전체 이벤트, 구매사은 혜택, 체험단); 700 selected, 400 unselected, 24px line" }
    tab: { size: 16, weight: 700, lineHeight: 1.5, use: "Ranking category tabs (전체, 패션의류 … 반려동물); 700 selected, 500 unselected, 24px line" }
    body: { size: 16, weight: 400, lineHeight: 1.5, use: "Document default on the ranking and event pages, 24px line, in #222222" }
    nav: { size: 14, weight: 600, lineHeight: 1.5, use: "Header menu triggers on the ranking and event pages, 21px line" }
    subtitle: { size: 14, weight: 400, lineHeight: 1.21, use: "Event page subtitle (쿠폰과 혜택이 모두 여기에!), 17px line, in #777777" }
    chip: { size: 13, weight: 700, lineHeight: 1.5, use: "Filter chip label (백화점상품) on the ranking page, 19.5px line" }
    body-legacy: { size: 12, weight: 400, lineHeight: 1.5, use: "Document default on the legacy home build, 18px line, in #000000" }
    utility: { size: 12, weight: 500, lineHeight: 1.5, use: "Header utility links on home, 18px line, in #666666" }
  spacing: { tab-x: 12, tab-lg: 20 }
  rounded: { none: 0, input: 2, pill: 9999 }
  components:
    ranking-tab: { type: tab, bg: "#fafafa", fg: "#666666", radius: "0px", padding: "0px 12px", height: "52px", font: "16px / 500 / 24px Pretendard", selected: "bg #222222, fg #ffffff, 16px / 700", states: "rest values only; the selected variant is read from aria-selected=true at rest; the Aside bundle has no hover, pressed or focus frame, so none is declared", use: "Category tabs on the 베스트 ranking page, a 183 x 52 grid of 14 tabs (전체 selected at capture, then 패션의류, 패션잡화, 명품, 뷰티 … 반려동물) at surface-2::[data-omd-capture=\"26\"]" }
    event-tab: { type: tab, bg: "transparent", fg: "#888888", radius: "0px", padding: "20px", height: "64px", font: "20px / 400 / 24px Pretendard", selected: "fg #222222, 20px / 700, 1px #000000 bottom border", states: "rest values only; the selected variant is read from aria-selected=true at rest; no hover, pressed or focus frame in the bundle", use: "Section tabs on the event page (전체 이벤트 selected, 구매사은 혜택, 체험단), 160 x 64, at surface-3::[data-omd-capture=\"66\"]" }
    filter-chip: { type: button, bg: "#f5f5f5", fg: "#666666", radius: "9999px", height: "28px", font: "13px / 700 / 19.5px Pretendard", states: "rest only on three instances; no state frame in the bundle", use: "Pill filters under the ranking tabs at surface-2::[data-omd-capture=\"41\"] (백화점상품, 73 x 28); the two neighbouring 84 x 28 chips carry logo images instead of text" }
    search-field: { type: input, bg: "#ffffff", fg: "#222222", radius: "2px", height: "33px", font: "13px / 400 / 16px Pretendard", states: "rest only; the field computes no border of its own (the outline belongs to a wrapper the collector did not record), and no focus frame exists in the bundle", use: "Header search field on the ranking and event pages, 304 x 33, at surface-2::[data-omd-capture=\"8\"]" }
    slider-control: { type: button, bg: "transparent", border: "1px solid #e5e5e5", radius: "0px", padding: "3px", size: "28px x 28px", states: "rest only; no state frame", use: "Autoplay control of the home hero slider (slider_ctrl_auto) at home::[data-omd-capture=\"71\"]" }
    product-thumb: { type: card, radius: "0px", size: "302px x 302px", use: "Square product image links in the ranking grid at surface-2::[data-omd-capture=\"58\"]; image only, no fill, border or shadow" }
  components_harvested: true
---

# Design System Inspiration of SSG.COM

## 1. Visual Theme & Atmosphere

SSG.COM (쓱닷컴) is Shinsegae Group's integrated online shopping platform. Its own company pages say it was born on 1 January 2014 so that customers could see every Shinsegae Group product — Shinsegae Department Store, emart and the rest — online in one place and buy it with a single payment. The lineage is older: 신세계몰 opened in July 1997 and 이마트몰 in 2000, and both still run as stores inside SSG.COM. The two malls became independent companies in December 2018 and merged into (주)에스에스지닷컴 in March 2019; the company describes that as SSG.COM's new start. Since then the timeline reads as a steady push into delivery and curation. It lists dawn delivery, the 쓱배송 time-slot delivery its intro page leads with, the W컨셉 acquisition (2021), the SSG 럭셔리 luxury hall and SSG.TV (2022), the 바로퀵 quick-commerce service (2025) and, in March 2026, a declared ambition to be Korea's leading online grocery mall. The brand speaks through 쓱: the 2016 campaign with 공유 and 공효진 wrote SSG as ㅅㅅㄱ ("쓱"). The company says the word was chosen to stand for fast, all-in-one shopping, and filmed it with painting-inspired, deliberately luxurious art direction. The 2026 SSG7CLUB membership campaign replaced star models with a mascot, the seven-leaf clover 쓱칠이.

On screen, the product is ink-led chrome with one coral accent. Controls are near-black `#222222` and pale grey: the selected ranking tab is `#222222` with white text, and everything else separates by text weight and pale greys (`#fafafa`, `#f5f5f5`). The accent is coral `#ff5452`, the colour the page CSS declares as `--m-colors-primary`. A full-page census of the logged-out home (all 32,131 visible elements, 2026-10-01) found it filling 124 product item labels — "SSG 개런티", "선물포장" and "1+1" — and no interactive control (§2). The 250-element capture of the three pages did not reach those labels; the census covers home only. Two builds coexist. The home page is the older template: a 12px / 18px body in pure `#000000` with hero slides and quick-menu icons. The ranking and event pages are a newer component build with a 16px / 24px body in `#222222`, square category tabs and 30px bold titles. Both set every recorded text in Pretendard. Corners are square almost everywhere (744 of 746 recorded radii are 0). The exceptions are the 2px search field and the 9999px filter chips. None of the 750 elements carries a shadow.

**Key Characteristics:**
- Ink chrome, coral accent: `#222222` fills the selected tab and sets the text; coral `#ff5452`, the declared `--m-colors-primary`, fills 124 product item labels on home (full-page census) and no control
- One family, Pretendard, in two builds: legacy home at 12px / 18px in `#000000`, the newer ranking and event pages at 16px / 24px in `#222222`
- Square geometry: 0px tabs, tiles and controls; the only curves are the 2px search field and 9999px filter chips
- Grey steps for hierarchy: `#666666` unselected tab labels, `#777777` subtitles, `#888888` unselected event tabs; `#fafafa` and `#f5f5f5` fills
- Flat: no box-shadow on any of the 750 recorded elements; the home slider control uses a `#e5e5e5` hairline

## Primary tasks

- Browse the 베스트 ranking by category (전체, 패션의류, 뷰티, 신선식품 …) and narrow it with filter chips such as 백화점상품
- Find coupons and benefit events on the 이벤트/쿠폰 page and switch between 전체 이벤트, 구매사은 혜택 and 체험단
- Search the integrated catalogue from the header search field
- Move between the Shinsegae Group stores (SSG.COM, 신세계몰, 이마트몰 and the 신세계백화점 store) from one header

## 2. Color Palette & Roles

Every token below was read from the bundle the main session captured on 2026-10-01 through a logged-out browser window (the "Aside browser", not a fixed 1440 × 900 headless viewport) on www.ssg.com, /page/pc/ranking.ssg and /event/eventMain.ssg. The bundle records rest values only and stops at 250 elements per page. The primary comes from a second reading the same day in the same logged-out browser: a full-page computed-style census of every visible element on the home page (32,131 elements, `docs/research/2026-09-29-growth/raw/aside/primary-census-2026-10-01.json`). That census covers home only and counted two colours, `#ff5452` and `#222222`.

### Primary
- **SSG Coral** (`#ff5452`): The fill of the product item labels on home (`span.ssgitem_label`, 20px tall): "SSG 개런티" ×79, "선물포장" ×38 and "1+1" ×2, 124 background uses in the full-page census, plus 2 text uses. It is the primary because it is the colour the product renders in an accent role, and it is the site's own declared primary (`--m-colors-primary: #ff5452` in the page CSS). None of the 124 elements is interactive: it marks products, it does not fill buttons. The label text colour on these badges was not recorded, so no on-primary colour is declared.

### Declared, not rendered
- The ranking and event page CSS (same-day HTML) declares `--m-colors-primary: #ff5452`, `--m-colors-primary_light: #fff2f2`, `--m-colors-primary_dark: #ff0014`, `--m-colors-accent: #e50005`, `--m-colors-secondary: #222222` and a brand gradient `--m-colors-ssg_brand: linear-gradient(90deg, #ff5452 0%, #f43479 42%, #f43479 59%, #be3ffa 100%)`. Of these, `#ff5452` is rendered (the census above) and `#222222` is the ink. The light and dark coral, `#e50005` and the gradient stops occur neither in the 21-colour extract of the 750 recorded elements nor in the census, which counted only `#ff5452` and `#222222`, so none is a token here.
- The full-width promotional belt at the top of the ranking and event pages is `#f12972` at capture. It is campaign artwork that changes with the promotion and is not a token.

### Neutral & Surface
- **Canvas** (`#ffffff`): Body fill of the ranking and event pages.
- **Surface** (`#fafafa`): Fill of the 13 unselected ranking tabs.
- **Surface 2** (`#f5f5f5`): Fill of the pill filter chips on the ranking page.
- **Hairline** (`#e5e5e5`): The 1px border of the home hero slider's autoplay control.

### Text
- **Ink** (`#222222`): Document text, titles and selected labels on the ranking and event pages, and the fill of the selected ranking tab. On home the census counts it as the text colour of 12,376 elements and the fill of 10 interactive selected or category buttons (오반장, 패션잡화 …).
- **Ink Legacy** (`#000000`): Document text on the legacy home build.
- **Muted** (`#666666`): Unselected ranking tab labels, filter chip labels and the header store links on home.
- **Subtle** (`#777777`): The event page subtitle.
- **Faint** (`#888888`): Unselected event tab labels and the small links beside the event page title.

## 3. Typography Rules

### Font Family
- **Pretendard** — `loaded / high`, 749 observed uses across body, headings, tabs, buttons, inputs and list items on all three pages. The stacks are `Pretendard, -apple-system, "system-ui", sans-serif` on home and `Pretendard, sans-serif` on the newer pages. Pretendard is distributed by its author under the SIL Open Font License 1.1 (licence file below). No SSG page opened for this record names its typeface, so official product use is not claimed. The identification rests on the computed family name and a loaded FontFace.
- **Arial** — the computed family of the home search input only (one use), a system stack, not a brand face.
- **Declared only:** `AdobeClean-Bold`, `AdobeClean-Regular` and the icon font `ssgui-font-icons` have `@font-face` rules but no observed text use.

### Hierarchy

| Role | Size | Weight | Line height | Tracking | Where |
|---|---|---|---|---|---|
| Title | 30px | 700 | 36px | normal | Event page titles (이벤트/쿠폰, 지금 인기 상승 중!) and the 베스트 title |
| Hero title | 24px | 700 | normal | normal | Home hero slide titles |
| Home section | 20px | 700 | 24px | -0.3px | Home section titles |
| Large tab | 20px | 700 / 400 | 24px | normal | Event page tabs, selected / unselected |
| Tab | 16px | 700 / 500 | 24px | normal | Ranking category tabs, selected / unselected |
| Body | 16px | 400 | 24px | normal | Ranking and event page default |
| Nav | 14px | 600 | 21px | normal | Header menu triggers on the newer pages |
| Subtitle | 14px | 400 | 17px | normal | Event page subtitle in `#777777` |
| Chip | 13px | 700 | 19.5px | normal | Filter chip label |
| Body legacy | 12px | 400 | 18px | normal | Home default |
| Utility | 12px | 500 | 18px | normal | Home header utility links in `#666666` |

### Principles
- **Weight carries selection.** Ranking tabs step 500 → 700 and event tabs 400 → 700 when selected, alongside the colour change.
- **Two body scales.** The legacy home reads at 12px / 18px; the newer pages at 16px / 24px. Do not mix them on one screen.
- **Tracking is almost always normal.** Only the home section titles and a few small labels compute -0.3px.

## 4. Component Stylings

### Tabs

**Ranking category tab**
- Background: `#fafafa`
- Text: `#666666`
- Radius: 0px
- Padding: 0px 12px
- Height: 52px (183px wide)
- Font: 16px / 500 / 24px Pretendard
- Selected: background `#222222`, text `#ffffff`, 16px / 700
- States: rest values only; the selected variant is read from `aria-selected=true`. The Aside bundle has no hover, pressed or focus frame.
- Use: The 14 category tabs on the 베스트 page (전체, 패션의류, 패션잡화, 명품, 뷰티, 스포츠/레저, 생활/주방, 가구/인테리어, 유아동, 디지털/렌탈, e쿠폰/문구/도서, 신선식품, 가공/건강식품, 반려동물)

**Event tab**
- Background: transparent
- Text: `#888888`
- Radius: 0px
- Padding: 20px
- Height: 64px (160px wide)
- Font: 20px / 400 / 24px Pretendard
- Selected: text `#222222`, 20px / 700, 1px `#000000` bottom border
- States: rest values only; selected read from `aria-selected=true`
- Use: 전체 이벤트, 구매사은 혜택, 체험단 on the 이벤트/쿠폰 page

### Buttons

**Filter chip**
- Background: `#f5f5f5`
- Text: `#666666`
- Radius: 9999px
- Height: 28px
- Font: 13px / 700 / 19.5px Pretendard
- States: rest only
- Use: 백화점상품 and two logo-image chips under the ranking tabs

**Slider control**
- Background: transparent
- Border: 1px solid `#e5e5e5`
- Radius: 0px
- Padding: 3px
- Size: 28 × 28px
- States: rest only
- Use: Autoplay toggle of the home hero slider

### Inputs

**Search field**
- Background: `#ffffff`
- Text: `#222222`
- Radius: 2px
- Height: 33px (304px wide)
- Font: 13px / 400 / 16px Pretendard
- States: rest only; the visible outline belongs to a wrapper the collector did not record, so no border is declared
- Use: Header search on the ranking and event pages. The legacy home field is a transparent 304 × 36 input in 13px Arial.

### Cards

**Product thumbnail**
- Radius: 0px
- Size: 302 × 302px
- Use: Square product image links in the ranking grid; no fill, border or shadow

**Verified:** 2026-10-01 (bundle captured by the main session through a logged-out Aside browser window on three public SSG.COM pages, plus first-party company pages read the same day)
**Tier 1 sources:** https://www.ssg.com/ ; https://www.ssg.com/page/pc/ranking.ssg ; https://www.ssg.com/event/eventMain.ssg ; https://company.ssg.com/intrd/keybsns.ssg ; https://company.ssg.com/intrd/grthstory.ssg ; https://company.ssg.com/intrd/brstory.ssg
**Tier 2 sources:** not attempted
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- The recorded spacing values are few and small: 16px (47 uses), 12px (14), 4px, 3px, 8px, 20px. Two are tokens: 12px, the horizontal padding of the ranking tabs, and 20px, the padding of the event tabs.
- No base-unit scale is declared; the bundle does not establish one.

### Grid & Container
- The ranking tabs form a 7-across grid of 183 × 52 cells in two rows.
- Product thumbnails in the ranking grid are 302 × 302 squares.
- The home hero is a slider of 424 × 375 image links; the home quick menu uses 72px-wide icon items.

### Whitespace Philosophy
- Dense, retail-first: small type on home, compact tab grids, and separation by fill (`#fafafa`, `#f5f5f5`) rather than borders or elevation.

### Border Radius Scale
- 0px — tabs, thumbnails, controls (744 of 746 recorded radii)
- 2px — the header search field
- 9999px — filter chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow | All 750 recorded elements |
| Fill | `#fafafa` / `#f5f5f5` | Unselected tabs, filter chips |
| Hairline | 1px `#e5e5e5` | Home slider control |
| Underline | 1px `#000000` bottom border | Selected event tab |

No recorded element carries a box-shadow. Hierarchy comes from fill and weight.

## 7. Do's and Don'ts

### Do
- Mark the selected tab with a `#222222` fill and white 700 text (ranking) or a `#222222` 700 label with a 1px `#000000` underline (event)
- Keep tabs, thumbnails and controls square; reserve 9999px for filter chips
- Use Pretendard throughout and change weight with selection
- Use coral `#ff5452` as the accent fill for product item labels such as SSG 개런티, 선물포장 and 1+1
- Separate with `#fafafa` / `#f5f5f5` fills, not shadows

### Don't
- Don't fill buttons or tabs with coral `#ff5452`: the home census found it on 124 labels and on no interactive element; controls and selection stay in `#222222`
- Don't add shadows; none was observed
- Don't mix the 12px legacy body and the 16px newer body on one screen
- Don't invent hover, pressed or focus values; this bundle records none

## 8. Responsive Behavior

### Breakpoints
Not measured. The bundle comes from one browser window, so no breakpoint, mobile layout or column count is claimed.

### Touch Targets
- Ranking tabs 52px tall, event tabs 64px, filter chips 28px, the slider control 28px, the search field 33px.

### Collapsing Strategy
Not observed.

### Image Behavior
- Product thumbnails are square 302px images with 0px radius; hero slides are full-bleed image links.

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary (accent, product item labels): `#ff5452`
- Selected fill and ink: `#222222`, label `#ffffff`
- Legacy ink: `#000000`
- Greys: `#666666`, `#777777`, `#888888`
- Fills: `#ffffff`, `#fafafa`, `#f5f5f5`; hairline `#e5e5e5`

### Example Component Prompts
- "Category tab grid: 183 × 52 square cells, `#fafafa` fill, `#666666` 16px / 500 Pretendard label, 0 12px padding. Selected cell: `#222222` fill, `#ffffff` 16px / 700."
- "Event tabs: transparent 160 × 64 tabs, 20px padding, `#888888` 20px / 400. Selected: `#222222` 20px / 700 with a 1px `#000000` underline."
- "Filter chip: `#f5f5f5` pill (9999px), 28px tall, `#666666` 13px / 700 Pretendard label."

### Iteration Guide
1. Pretendard only; selection changes weight
2. `#222222` for chrome and selection; coral `#ff5452` only as the product-label accent
3. Square corners except chips (9999px) and the search field (2px)
4. No shadows
5. Declare only rest and selected states unless a probe measures more

## 10. Voice & Tone

SSG.COM's voice is plain, warm and benefit-led. The header tagline on the ranking and event pages is "믿고 사는 즐거움" (the joy of buying with trust). The company intro speaks directly to the shopper's worries: "언제 배송이 올지 기다리는 일" (waiting to find out when a delivery will come), answered with "쓱배송은 내가 정한 일자에, 내가 선택한 시간에 도착하니까요" (쓱배송 arrives on the day and at the time you chose).

| Context | Tone | Example (first-party) |
|---|---|---|
| Tagline | Calm trust | 믿고 사는 즐거움 |
| Event page | Upbeat, benefit-first | 쿠폰과 혜택이 모두 여기에! · 지금 인기 상승 중!🔥 · 이번 주 카드할인 |
| Navigation | Plain category names | 전체, 패션의류, 명품, 신선식품, 반려동물 |
| Campaigns | Witty, simple | 쓸만한 혜택은 심플하다 (SSG7CLUB, 2026) · SSG.COM 신선은 이마트로부터 (2025) |

## 11. Brand Narrative

From the company's own pages: 신세계몰 opened in July 1997 and began selling department-store goods online that year. 이마트몰 followed in 2000. On 1 January 2014 the group launched SSG.COM to gather all Shinsegae Group products in one place with one payment; the 신세계백화점 store moved inside it then. In 2018 신세계몰 and 이마트몰 became independent companies, and in March 2019 they merged into (주)에스에스지닷컴, which the growth story calls the new start as SSG.COM. In the years since, the growth story records 새벽배송, 쓱배송 time slots, the W컨셉 acquisition (May 2021), the revamped 오반장 grocery-deal corner (March 2021), the SSG 럭셔리 hall and the move to 역삼 센터필드 (July 2022), the 신세계 유니버스 클럽 membership (June 2023), 바로퀵 quick commerce (August 2025), and the March 2026 declaration that it will become "대한민국 대표 장보기 온라인몰" (Korea's leading online grocery mall).

The brand story explains the name in use. In 2016 the company wrote SSG as ㅅㅅㄱ and made "쓱" the core message: fast, all-in-one shopping that is easy to recall. It cast 공유 and 공효진 and filmed the ads in a luxurious, painting-inspired style to balance a word that could feel light. The company says the campaign set off a "쓱돌풍" of parodies and won the Korea Advertising Awards and the Effie Awards. Later work keeps the wit. 2025's subway campaign with the characters 영심이 and 경태 ran under "SSG.COM 신선은 이마트로부터" (SSG.COM fresh food comes from emart). The 2026 SSG7CLUB membership was fronted by 쓱칠이, a seven-leaf clover mascot standing for its 7% rewards.

## 12. Principles

1. **One store for the whole group.** The product exists to put department-store, emart and specialist halls behind one search and one checkout. *UI implication:* the header carries store links and a single search.
2. **Selection is shown with ink and weight.** The selected tab takes `#222222` and weight 700; unselected tabs stay grey. *UI implication:* do not show selection with coral; coral marks product labels.
3. **Square, flat, dense.** 0px corners, no shadow, small type on home. *UI implication:* separate with fills and spacing.
4. **Simple benefits, said simply.** The SSG7CLUB campaign is literally "쓸만한 혜택은 심플하다". *UI implication:* benefit copy is short and declarative.

## 13. Personas

No persona research is published on the pages consulted, so no named persona is given. The company pages describe the audiences the product is built around: grocery shoppers (이마트몰, 미식관, 쓱배송, 새벽배송, 바로퀵), department-store and luxury shoppers (신세계백화점 store, SSG 럭셔리 with the SSG 개런티 authenticity guarantee), and beauty and fashion shoppers (Beauty of SSG, the fashion hall). Design for scanning and comparison across those halls rather than for one archetype.

## 14. States

| State | Observed treatment |
|---|---|
| Selected (ranking tab) | `#222222` fill, `#ffffff` 16px / 700 label (`aria-selected=true` at rest) |
| Selected (event tab) | `#222222` 20px / 700 label with a 1px `#000000` bottom border |
| Unselected | `#fafafa` fill with `#666666` 500 label (ranking); transparent with `#888888` 400 label (event) |

Hover, pressed, focus, disabled, empty, loading, error and success states were not captured; the bundle has no state frames and no interaction events, so none is described.

## 15. Motion & Easing

No motion value is declared. The bundle records no transition or animation property, and no SSG source consulted publishes a motion scale. The Partial body's carousel and tab timings had no source and were removed.
