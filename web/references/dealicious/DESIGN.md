---
id: dealicious
name: Sinsang Market (Dealicious)
display_name_kr: 신상마켓 (딜리셔스)
country: KR
category: ecommerce
homepage: "https://dealicious.kr"
primary_color: "#222222"
logo:
  type: favicon
  slug: "https://dealicious.kr/assets/images/deali_logo_square.png"
verified: "2026-09-30"
added: "2026-07-02"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: corporate, url: "https://dealicious.kr/", inspected: "2026-09-30" }
    - { id: surface-2, kind: corporate, url: "https://dealicious.kr/ir-center", inspected: "2026-09-30" }
    - { id: surface-3, kind: corporate, url: "https://dealicious.kr/career", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://dealicious.kr/", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://dealicious.kr/ir-center", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://dealicious.kr/career", captured: "2026-09-30" }
    - { id: dealicious-probe-home, kind: product-surface, url: "https://dealicious.kr/", captured: "2026-09-30" }
    - { id: dealicious-probe-ir, kind: product-surface, url: "https://dealicious.kr/ir-center", captured: "2026-09-30" }
    - { id: dealicious-probe-career, kind: product-surface, url: "https://dealicious.kr/career", captured: "2026-09-30" }
    - { id: dealicious-introduction, kind: official-doc, url: "https://dealicious.kr/introduction", captured: "2026-09-30" }
    - { id: dealicious-services, kind: official-doc, url: "https://dealicious.kr/services", captured: "2026-09-30" }
    - { id: dealicious-people-culture, kind: official-doc, url: "https://dealicious.kr/people-culture", captured: "2026-09-30" }
    - { id: roboto-license, kind: license, url: "https://raw.githubusercontent.com/google/fonts/main/ofl/roboto/OFL.txt", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &pill { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"17\"]", captured: "2026-09-30" }
    "tokens.colors.on-primary": *pill
    "tokens.colors.accent": &filtersel { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"6\"]", captured: "2026-09-30" }
    "tokens.colors.ink": &body { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::body", captured: "2026-09-30" }
    "tokens.colors.slate": &section { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h1", captured: "2026-09-30" }
    "tokens.colors.grey": &irtext { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::p", captured: "2026-09-30" }
    "tokens.colors.muted": &irtab { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"7\"]", captured: "2026-09-30" }
    "tokens.colors.faint": &lang { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"36\"]", captured: "2026-09-30" }
    "tokens.colors.faint-alt": &filter { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"7\"]", captured: "2026-09-30" }
    "tokens.colors.white": &blog { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"19\"]", captured: "2026-09-30" }
    "tokens.colors.hairline": *filter
    "tokens.colors.divider": &row { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"10\"]", captured: "2026-09-30" }
    "tokens.typography.family.sans": *body
    "tokens.typography.display-hero.size": &hero { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h1", captured: "2026-09-30" }
    "tokens.typography.display-hero.weight": *hero
    "tokens.typography.display-hero.lineHeight": *hero
    "tokens.typography.display-hero.use": *hero
    "tokens.typography.page-title.size": &irtitle { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h1", captured: "2026-09-30" }
    "tokens.typography.page-title.weight": *irtitle
    "tokens.typography.page-title.lineHeight": *irtitle
    "tokens.typography.page-title.use": *irtitle
    "tokens.typography.section.size": *section
    "tokens.typography.section.weight": *section
    "tokens.typography.section.lineHeight": *section
    "tokens.typography.section.use": *section
    "tokens.typography.banner-title.size": &bannerp { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.banner-title.weight": *bannerp
    "tokens.typography.banner-title.lineHeight": *bannerp
    "tokens.typography.banner-title.use": *bannerp
    "tokens.typography.story-title.size": &storyp { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.story-title.weight": *storyp
    "tokens.typography.story-title.lineHeight": *storyp
    "tokens.typography.story-title.use": *storyp
    "tokens.typography.caption-lg.size": &captionp { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.caption-lg.weight": *captionp
    "tokens.typography.caption-lg.lineHeight": *captionp
    "tokens.typography.caption-lg.use": *captionp
    "tokens.typography.button.size": *pill
    "tokens.typography.button.weight": *pill
    "tokens.typography.button.lineHeight": *pill
    "tokens.typography.button.use": *pill
    "tokens.typography.filter.size": *filtersel
    "tokens.typography.filter.weight": *filtersel
    "tokens.typography.filter.lineHeight": *filtersel
    "tokens.typography.filter.use": *filtersel
    "tokens.typography.eyebrow.size": &eyebrow { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::p", captured: "2026-09-30" }
    "tokens.typography.eyebrow.weight": *eyebrow
    "tokens.typography.eyebrow.lineHeight": *eyebrow
    "tokens.typography.eyebrow.tracking": *eyebrow
    "tokens.typography.eyebrow.use": *eyebrow
    "tokens.typography.list-title.size": &irh3 { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h3", captured: "2026-09-30" }
    "tokens.typography.list-title.weight": *irh3
    "tokens.typography.list-title.lineHeight": *irh3
    "tokens.typography.list-title.use": *irh3
    "tokens.typography.body.size": *body
    "tokens.typography.body.weight": *body
    "tokens.typography.body.lineHeight": *body
    "tokens.typography.body.use": *body
    "tokens.typography.footer.size": &footp { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.footer.weight": *footp
    "tokens.typography.footer.lineHeight": *footp
    "tokens.typography.footer.use": *footp
    "tokens.typography.fine.size": &finep { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.fine.weight": *finep
    "tokens.typography.fine.lineHeight": *finep
    "tokens.typography.fine.use": *finep
    "tokens.spacing.pill-y": *pill
    "tokens.spacing.pill-x": *pill
    "tokens.spacing.filter-y": *filtersel
    "tokens.spacing.filter-x": *filtersel
    "tokens.spacing.chip-y": &chip { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"17\"]", captured: "2026-09-30" }
    "tokens.spacing.chip-x": *chip
    "tokens.rounded.filter": *filtersel
    "tokens.rounded.pill": *pill
    "tokens.components.recruit-pill.type": *pill
    "tokens.components.recruit-pill.bg": *pill
    "tokens.components.recruit-pill.fg": *pill
    "tokens.components.recruit-pill.radius": *pill
    "tokens.components.recruit-pill.padding": *pill
    "tokens.components.recruit-pill.height": *pill
    "tokens.components.recruit-pill.font": *pill
    "tokens.components.recruit-pill.states": &pillstate { surface_id: home, source_id: dealicious-probe-home, method: live-state-probe, selector: "button 인재영입 바로가기 (219 x 55, rest bg rgb(34, 34, 34), fg rgb(255, 255, 255)) and 블로그 바로가기 (202.4 x 55, rest bg rgb(255, 255, 255), fg rgb(62, 65, 73)): hover and pressed no change on the button itself; its card ancestor div.rounded-[20px] changes box-shadow rgba(34, 34, 34, 0.08) 4px 10px 20px 0px -> rgba(34, 34, 34, 0.18) 4px 12px 20px 6px and transform none -> matrix(1, 0, 0, 1, 0, -5); focus (Tabs #18 and #20) only the browser ring; transition all 0s on the buttons", captured: "2026-09-30" }
    "tokens.components.recruit-pill.use": *pill
    "tokens.components.blog-pill.type": *blog
    "tokens.components.blog-pill.bg": *blog
    "tokens.components.blog-pill.fg": *blog
    "tokens.components.blog-pill.radius": *blog
    "tokens.components.blog-pill.padding": *blog
    "tokens.components.blog-pill.height": *blog
    "tokens.components.blog-pill.font": *blog
    "tokens.components.blog-pill.states": *pillstate
    "tokens.components.blog-pill.use": *blog
    "tokens.components.banner-card.type": *pillstate
    "tokens.components.banner-card.shadow": *pillstate
    "tokens.components.banner-card.hover": *pillstate
    "tokens.components.banner-card.pressed": *pillstate
    "tokens.components.banner-card.states": *pillstate
    "tokens.components.banner-card.use": *pillstate
    "tokens.components.career-filter.type": *filter
    "tokens.components.career-filter.bg": *filter
    "tokens.components.career-filter.fg": *filter
    "tokens.components.career-filter.border": *filter
    "tokens.components.career-filter.radius": *filter
    "tokens.components.career-filter.padding": *filter
    "tokens.components.career-filter.height": *filter
    "tokens.components.career-filter.font": *filter
    "tokens.components.career-filter.selected": *filtersel
    "tokens.components.career-filter.hover": &filterstate { surface_id: surface-3, source_id: dealicious-probe-career, method: live-state-probe, selector: "button 제품/서비스 (127.2 x 50, rest bg rgb(255, 255, 255), fg rgb(166, 173, 189)): hover and pressed bg -> rgb(245, 246, 251); selected 전체 (73.3 x 50, rest bg rgb(26, 34, 65), fg rgb(255, 255, 255)) no change on hover or pressed; focus (Tabs #7 and #8) only the browser ring; transition all 0.2s cubic-bezier(0, 0, 0.2, 1)", captured: "2026-09-30" }
    "tokens.components.career-filter.pressed": *filterstate
    "tokens.components.career-filter.states": *filterstate
    "tokens.components.career-filter.use": *filter
    "tokens.components.ir-tab.type": *irtab
    "tokens.components.ir-tab.fg": *irtab
    "tokens.components.ir-tab.font": *irtab
    "tokens.components.ir-tab.selected": &irtabsel { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"6\"]", captured: "2026-09-30" }
    "tokens.components.ir-tab.hover": &irstate { surface_id: surface-2, source_id: dealicious-probe-ir, method: live-state-probe, selector: "button 전자공시(DART) (109.5 x 24, rest fg rgb(143, 151, 167)): hover and pressed fg -> rgb(62, 65, 73); selected 일반공고 (rest fg rgb(34, 34, 34)) no change; 국문 (85.8 x 43, rest bg transparent, fg rgb(62, 65, 73)): hover and pressed bg -> rgb(245, 246, 251); focus (Tabs #7, #8 and #54) only the browser ring; transition colour properties 0.15s cubic-bezier(0.4, 0, 0.2, 1)", captured: "2026-09-30" }
    "tokens.components.ir-tab.pressed": *irstate
    "tokens.components.ir-tab.states": *irstate
    "tokens.components.ir-tab.use": *irtab
    "tokens.components.language-pill.type": *chip
    "tokens.components.language-pill.fg": *chip
    "tokens.components.language-pill.border": *chip
    "tokens.components.language-pill.radius": *chip
    "tokens.components.language-pill.padding": *chip
    "tokens.components.language-pill.height": *chip
    "tokens.components.language-pill.font": *chip
    "tokens.components.language-pill.hover": *irstate
    "tokens.components.language-pill.pressed": *irstate
    "tokens.components.language-pill.states": *irstate
    "tokens.components.language-pill.use": *chip
    "tokens.components.disclosure-row.type": *row
    "tokens.components.disclosure-row.fg": *row
    "tokens.components.disclosure-row.border": *row
    "tokens.components.disclosure-row.height": *row
    "tokens.components.disclosure-row.font": *row
    "tokens.components.disclosure-row.use": *row
    "tokens.components.language-switch.type": *lang
    "tokens.components.language-switch.fg": *lang
    "tokens.components.language-switch.font": *lang
    "tokens.components.language-switch.selected": { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"35\"]", captured: "2026-09-30" }
    "tokens.components.language-switch.states": *lang
    "tokens.components.language-switch.use": *lang
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#222222"
    on-primary: "#ffffff"
    accent: "#1a2241"
    ink: "#000000"
    slate: "#3e4149"
    grey: "#686e7b"
    muted: "#8f97a7"
    faint: "#bec5d2"
    faint-alt: "#a6adbd"
    white: "#ffffff"
    hairline: "#dfe3ed"
    divider: "#ebeef6"
  typography:
    family: { sans: "Roboto" }
    display-hero: { size: 60, weight: 700, lineHeight: 1.5, use: "Home hero headline (고객의 사업을 쉽고 즐겁게), 90px line, white over the hero image" }
    page-title: { size: 36, weight: 700, lineHeight: 1.5, use: "IR page title, 54px line, #222222" }
    section: { size: 30, weight: 700, lineHeight: 1.5, use: "Section headings on home, IR and career, 45px line, #3e4149" }
    banner-title: { size: 28, weight: 700, lineHeight: 1.5, use: "Recruiting and blog banner headings (딜리셔스와 함께할 멋진 동료를 찾습니다, 딜리셔스의 개발 이야기), 42px line, white or #3e4149" }
    story-title: { size: 26, weight: 700, lineHeight: 1.5, use: "Story headings on home, 39px line, #3e4149" }
    caption-lg: { size: 20, weight: 400, lineHeight: 1.5, use: "Story descriptions on home, 30px line, #8f97a7" }
    button: { size: 18, weight: 700, lineHeight: 1.5, use: "Pill labels (인재영입 바로가기, 블로그 바로가기), 27px line" }
    filter: { size: 17, weight: 700, lineHeight: 1.18, use: "Selected career filter label, 20px line; unselected filters are weight 400" }
    eyebrow: { size: 16, weight: 700, lineHeight: 1.5, tracking: 1.6, use: "Small label above the IR title, 24px line, #8f97a7" }
    list-title: { size: 16, weight: 500, lineHeight: 1.5, use: "Disclosure titles on the IR page, 24px line, #3e4149" }
    body: { size: 16, weight: 400, lineHeight: 1.5, use: "Document default, 24px line, #000000" }
    footer: { size: 15, weight: 400, lineHeight: 1.5, use: "Footer contact lines, 22.5px line, #3e4149" }
    fine: { size: 14, weight: 400, lineHeight: 1.71, use: "Footer company disclosure, 24px line, #3e4149" }
  spacing: { pill-y: 14, pill-x: 31, filter-y: 14, filter-x: 20, chip-y: 10, chip-x: 18 }
  rounded: { filter: 40, pill: 50 }
  components:
    recruit-pill: { type: button, bg: "#222222", fg: "#ffffff", radius: "50px", padding: "14px 31px", height: "55px", font: "18px / 700 / 27px Roboto", states: "probe: hover and pressed change nothing on the button; the banner card around it lifts (see banner-card); focus draws only the browser ring", use: "인재영입 바로가기, the one filled call to action, in the recruiting banner card at home::[data-omd-capture=\"17\"], 219 x 55" }
    blog-pill: { type: button, bg: "#ffffff", fg: "#3e4149", radius: "50px", padding: "14px 31px", height: "55px", font: "18px / 700 / 27px Roboto", states: "probe: hover and pressed change nothing on the button; its banner card lifts; focus draws only the browser ring", use: "블로그 바로가기 in the tech-blog banner card on home (home::[data-omd-capture=\"19\"]) and the career page, 202 x 55" }
    banner-card: { type: card, shadow: "rgba(34, 34, 34, 0.08) 4px 10px 20px 0px", hover: "shadow rgba(34, 34, 34, 0.18) 4px 12px 20px 6px and a 5px lift (translateY -5px)", pressed: "same as hover", states: "hover and pressed read by the probe on the card that holds each pill; the card's class names a 20px radius, which was not read as a computed value", use: "The two banner cards (recruiting and tech blog) near the foot of home and the other pages; read by the fixed probe as the pills' ancestor" }
    career-filter: { type: tab, bg: "#ffffff", fg: "#a6adbd", border: "1px solid #dfe3ed", radius: "40px", padding: "14px 20px", height: "50px", font: "17px / 400 / 20px Roboto", selected: "bg #1a2241, fg #ffffff, border #1a2241, weight 700", hover: "bg #f5f6fb", pressed: "bg #f5f6fb", states: "unselected filters take a #f5f6fb fill on hover and pressed after a 0.2s transition; the selected filter shows no change; focus draws only the browser ring", use: "Job category filters on the career page (전체, 제품/서비스, 경영지원) at surface-3::[data-omd-capture=\"7\"]" }
    ir-tab: { type: tab, fg: "#8f97a7", font: "16px / 400 / 24px Roboto", selected: "fg #222222, weight 700", hover: "fg #3e4149", pressed: "fg #3e4149", states: "unselected tabs darken to #3e4149 on hover and pressed after a 0.15s transition; the selected tab shows no change; focus draws only the browser ring", use: "IR section tabs (일반공고, 전자공시(DART), IR 자료실, IR CONTACT) at surface-2::[data-omd-capture=\"7\"]" }
    language-pill: { type: button, fg: "#3e4149", border: "1px solid #dfe3ed", radius: "40px", padding: "10px 18px", height: "43px", font: "14px / 500 / 21px Roboto", hover: "bg #f5f6fb", pressed: "bg #f5f6fb", states: "hover and pressed fill #f5f6fb after a 0.15s transition; focus draws only the browser ring", use: "국문 language selector on the IR page at surface-2::[data-omd-capture=\"17\"], 86 x 43" }
    disclosure-row: { type: listItem, fg: "#000000", border: "0px 0px 1px solid #ebeef6", height: "73px", font: "16px / 400 / 24px Roboto", use: "Rows of the IR disclosure list at surface-2::[data-omd-capture=\"10\"], 1198 x 73, divided by #ebeef6" }
    language-switch: { type: tab, fg: "#bec5d2", font: "15px / 700 / 22.5px Roboto", selected: "fg #222222", states: "selected read from rest values; no pointer frame", use: "한국어, ENG, 中文 and 日文 in the footer of every page at home::[data-omd-capture=\"36\"]" }
  components_harvested: true
---

# Design System Inspiration of Sinsang Market (Dealicious)

## 1. Visual Theme & Atmosphere

Dealicious (딜리셔스) runs 신상마켓 (Sinsang Market), the wholesale platform of Seoul's Dongdaemun fashion trade. In its own words, Dealicious "moved the B2B trade of the Dongdaemun fashion industry, which had only ever happened offline, online" — removing physical limits so that more products change hands more easily. Sinsang Market launched in July 2013 and connects Dongdaemun wholesalers with retailers in Korea and abroad; the company says more than 80% of Dongdaemun wholesalers have joined and 93% of retailers come back, and it counts 11,000 active wholesale shops, 130,000 active retail shops and 24,000 transactions a day. Around the marketplace sit 신상스튜디오, a one-stop product-photography service, and 신상애드, an advertising product for wholesalers. The company page cites 82.5 billion won of cumulative investment, 76 billion won of monthly transactions and 3 trillion won in total, and a member of its ad-platform team quoted there says users call Sinsang Market "the KakaoTalk of Dongdaemun". The mission line on every page is "고객의 사업을 쉽고 즐겁게" — making customers' business easy and enjoyable.

The corporate site at dealicious.kr is white and typographic. Headings are heavy (weight 700 at 60px on the hero, 30px for sections) in slate `#3e4149` or near-black `#222222`; body text defaults to `#000000`, and a ladder of cool greys (`#686e7b`, `#8f97a7`, `#a6adbd`, `#bec5d2`) carries secondary copy, unselected tabs and fine print. The site's one filled action is a near-black `#222222` pill, 인재영입 바로가기, set in a banner card beside a white 블로그 바로가기 pill. Selection is marked in two ways: `#222222` bold text for the current IR tab and footer language, and a deep navy `#1a2241` fill for the selected career filter. Pills are fully rounded (50px) and filters 40px; borders are 1px `#dfe3ed`, and the IR list is divided by `#ebeef6` rules.

**Key Characteristics:**
- White, typographic corporate pages with heavy 700 headings in `#3e4149` and `#222222`
- One filled action colour: `#222222` pills with white labels; a white pill with `#3e4149` label beside it
- Selected states in `#222222` bold text, or a `#1a2241` navy fill for the career filter
- Cool grey text ladder: `#686e7b`, `#8f97a7`, `#a6adbd`, `#bec5d2`
- Round geometry: 50px pills, 40px filters and language selector
- Banner cards that rest on a soft shadow and lift 5px on hover; every other captured element is flat

## Primary tasks

- Browse wholesale inventory and order from a phone instead of a dawn market run.
- List new arrivals daily so retailers see the catalog fast.
- Settle payment for a wholesale order inside the app.
- Adjust a search when no wholesale listings match.

## 2. Color Palette & Roles

Every token below was read on 2026-09-30 from dealicious.kr, /ir-center and /career by the deterministic collector, and hover values by the fixed keyboard probe. The tokens describe the Dealicious corporate website. The Sinsang Market product (sinsangmarket.kr and the app) is a separate domain that was not captured — it answered a plain HTTP request with a Cloudflare challenge — and none of its values is claimed.

### Primary
- **Ink Black** (`#222222`): The fill of 인재영입 바로가기, the site's one filled call to action (219 × 55 pill with `#ffffff` label, capture `home` #17); the label of the selected IR tab 일반공고 (`surface-2` #6, weight 700); and the selected footer language 한국어 (`home` #35). It is the primary because it is the colour the site uses for its primary action and, on two of the three captured pages, for selection. The navy `#1a2241` also renders in a primary role, but only once — the selected filter on the career page — so it is the `accent`.
- **On Primary** (`#ffffff`): Labels on the `#222222` pill and the `#1a2241` selected filter.

### Accent
- **Deali Navy** (`#1a2241`): Fill and 1px border of the selected career filter (전체), with a `#ffffff` label at weight 700.

### Neutral & Surface
- **White** (`#ffffff`): The white pill and the unselected career filters. The body element computes a transparent background, so the page white is the browser canvas.
- **Hairline** (`#dfe3ed`): The 1px border of the career filters and the IR language selector.
- **Divider** (`#ebeef6`): The 1px rule under each IR disclosure row.
- Hover fills are `#f5f6fb` (career filters, language selector); they come from the probe only and live in the components.

### Text
- **Ink** (`#000000`): The document default text colour and the disclosure rows.
- **Slate** (`#3e4149`): Section headings, story and banner headings, footer lines and the white pill's label; also the hover colour of unselected IR tabs.
- **Grey** (`#686e7b`): Reading text on the IR page.
- **Muted** (`#8f97a7`): Unselected IR tabs, story descriptions and the IR eyebrow label.
- **Faint** (`#bec5d2`): Unselected footer languages.
- **Faint Alt** (`#a6adbd`): Unselected career filter labels.

### Brand assets, not tokens
- **Logo navy** (`#001339`): the June record read the square logo's fill as `#001339`. It was not re-measured this session, and no captured interface element renders it.

## 3. Typography Rules

### Font Family
- **Live surface use**: the body and every captured element compute `Roboto, "Noto Sans KR", "Noto Sans SC", "Noto Sans JP", sans-serif` (227 observed uses of `Roboto`). The site ships Roboto WOFF2/WOFF files under `dealicious.kr/_next/static/media/` (e.g. `roboto-cyrillic-ext-400-normal.c8c031de.woff2`), but the collector classified the rendered face as `system / high`: on the capture machine it did not register as a loaded web font. No loaded-web-font claim is made.
- **Official distributed font assets**: Roboto's OFL.txt in the Google Fonts repository reads "Copyright 2011 The Roboto Project Authors … licensed under the SIL Open Font License, Version 1.1" (opened 2026-09-30). The identification rests on the declared family name.
- **Official product use**: no Dealicious page opened this session names its typefaces, so no statement of official product use is made.
- **Declared only (no visible use)**: `Noto Sans KR`, `Noto Sans SC` and `Noto Sans JP` (self-hosted files under the same path) and `swiper-icons`, each with 0 observed uses; none was loaded at capture.
- **Unresolved**: Roboto has no Hangul, and the Korean face declared after it did not load, so the face that renders Korean text depends on the visitor's system. It is not named here.

### Hierarchy

| Role | Size | Weight | Line Height | Tracking | Observed on |
|------|------|--------|-------------|----------|-------------|
| Display Hero | 60px | 700 | 90px (1.5) | normal | Home hero headline, white |
| Page Title | 36px | 700 | 54px (1.5) | normal | IR page title, `#222222` |
| Section | 30px | 700 | 45px (1.5) | normal | Section headings, `#3e4149` |
| Banner Title | 28px | 700 | 42px (1.5) | normal | Recruiting and blog banners |
| Story Title | 26px | 700 | 39px (1.5) | normal | Home stories, `#3e4149` |
| Caption Large | 20px | 400 | 30px (1.5) | normal | Home story descriptions, `#8f97a7` |
| Button | 18px | 700 | 27px (1.5) | normal | Pill labels |
| Filter | 17px | 700 / 400 | 20px | normal | Career filters |
| Eyebrow | 16px | 700 | 24px (1.5) | 1.6px | IR label, `#8f97a7` |
| List Title | 16px | 500 | 24px (1.5) | normal | IR disclosure titles, `#3e4149` |
| Body | 16px | 400 | 24px (1.5) | normal | Document default, `#000000` |
| Footer | 15px | 400 | 22.5px (1.5) | normal | Footer contact lines, `#3e4149` |
| Fine | 14px | 400 | 24px (1.71) | normal | Footer company disclosure |

### Principles
- **Heavy headings, plain body**: every heading from 26px up is weight 700; body and captions are 400.
- **A 1.5 rhythm**: almost every captured role sets its line height at 1.5 × the size.
- **Grey for secondary**: descriptions and unselected controls step down the cool grey ladder rather than using opacity.

## 4. Component Stylings

### Buttons

**Recruit Pill (primary)**
- Background: `#222222`; label `#ffffff`
- Radius: 50px; padding 14px 31px; height 55px
- Font: 18px weight 700, 27px line
- States: no change on the button itself; its banner card lifts on hover and pressed; focus draws only the browser ring
- Use: 인재영입 바로가기 in the recruiting banner card

**Blog Pill**
- Background: `#ffffff`; label `#3e4149`
- Same geometry and font as the recruit pill
- Use: 블로그 바로가기 in the tech-blog banner card

**Language Selector**
- Border: 1px solid `#dfe3ed`; label `#3e4149`
- Radius: 40px; padding 10px 18px; height 43px
- Font: 14px weight 500
- Hover / pressed: fill `#f5f6fb` (0.15s)
- Use: 국문 on the IR page

### Cards

**Banner Card**
- Shadow at rest: `rgba(34, 34, 34, 0.08) 4px 10px 20px 0px`
- Hover / pressed: `rgba(34, 34, 34, 0.18) 4px 12px 20px 6px` and a 5px lift
- Use: the recruiting and tech-blog banners that hold the two pills

### Tabs & Filters

**Career Filter**
- Unselected: `#ffffff` fill, `#a6adbd` label, 1px `#dfe3ed` border, 17px weight 400
- Selected: `#1a2241` fill and border, `#ffffff` label, weight 700
- Radius: 40px; padding 14px 20px; height 50px
- Hover / pressed (unselected): fill `#f5f6fb` (0.2s)

**IR Tab**
- Unselected: `#8f97a7`, 16px weight 400
- Selected: `#222222`, weight 700
- Hover / pressed (unselected): `#3e4149` (0.15s)

**Footer Language Switch**
- Unselected: `#bec5d2`, 15px weight 700; selected `#222222`

### Lists

**Disclosure Row**
- Text: `#000000`, 16px weight 400
- Border: 1px `#ebeef6` at the bottom
- Height: 73px
- Use: IR disclosure list

---

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out pages of dealicious.kr plus fixed keyboard-probe state reads and first-party context)
**Tier 1 sources:** https://dealicious.kr/ ; https://dealicious.kr/ir-center ; https://dealicious.kr/career ; https://dealicious.kr/introduction ; https://dealicious.kr/services ; https://dealicious.kr/people-culture
**Tier 2 sources:** getdesign.md/dealicious (HTTP 200, the name does not appear in the response) and styles.refero.design/?q=dealicious (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Pills: 14px vertical, 31px horizontal
- Career filters: 14px vertical, 20px horizontal
- Language selector: 10px vertical, 18px horizontal

### Grid & Container
- Content sits in a 1200px column (section headings and footer text are 1200px wide at the 1440px viewport)
- The IR disclosure list uses a three-column grid per row (80px, flexible, 160px), 1198px wide
- Home opens with the white 60px hero headline (its background is imagery the collector did not record) and closes with two banner cards above the footer

### Whitespace Philosophy
- Generous vertical rhythm between sections; grouping by headings and hairlines rather than filled panels

### Border Radius Scale
- 0px: most elements
- 40px: career filters and the language selector
- 50px: pills

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | All 227 elements the collector recorded |
| Hairline | 1px `#dfe3ed` / `#ebeef6` | Filters, language selector, disclosure rows |
| Card | `rgba(34, 34, 34, 0.08) 4px 10px 20px 0px` | Banner cards at rest (probe) |
| Lifted | `rgba(34, 34, 34, 0.18) 4px 12px 20px 6px`, 5px up | Banner cards on hover (probe) |

**Shadow Philosophy**: all 227 elements the collector recorded compute `box-shadow: none`. The one exception it did not record is the banner card: the probe read a soft resting shadow on it and a deeper shadow with a 5px lift on hover.

## 7. Do's and Don'ts

### Do
- Use `#222222` for the one filled action and for selected text
- Use the `#1a2241` navy fill only for a selected filter
- Set headings at weight 700 on a 1.5 line height; body at 16px / 400
- Step secondary text down the cool greys `#686e7b`, `#8f97a7`, `#a6adbd`, `#bec5d2`
- Use 50px pills and 40px filters with 1px `#dfe3ed` borders
- Give only banner cards depth: a soft shadow and a 5px hover lift

### Don't
- Don't use the logo navy `#001339` as an interface colour; no captured element renders it
- Don't add shadows to buttons, filters or rows
- Don't use square corners on pills or filters
- Don't invent focus styles; the captured controls show only the browser's default ring
- Don't name a Korean font the site does not load

## 8. Responsive Behavior

### Breakpoints
Only the 1440 × 900 desktop viewport was captured. Class names such as `lg:text-[16px]`, `lg:px-[31px]` and `md:mb-[280px]` show that the pages restyle at md, lg and xl breakpoints (the pills drop to 16px labels and 18px side padding below lg); no breakpoint width was measured.

### Touch Targets
- Pills: 55px
- Career filters: 50px
- Language selector: 43px
- Disclosure rows: 73px

### Collapsing Strategy
- Not captured.

### Image Behavior
- The banner cards clip their imagery (`overflow-hidden`); no other image behaviour was measured.

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action and selected text: `#222222`, label `#ffffff`
- Selected filter: `#1a2241`
- Headings and footer: `#3e4149`; body `#000000`; IR text `#686e7b`
- Secondary greys: `#8f97a7`, `#a6adbd`, `#bec5d2`
- Borders: `#dfe3ed`; rules `#ebeef6`; hover fill `#f5f6fb`

### Example Component Prompts
- "Create a primary pill: `#222222` background, `#ffffff` 18px label at weight 700, 50px radius, 14px 31px padding, 55px tall. Pair it with a white pill with a `#3e4149` label."
- "Create a banner card: white, rounded, shadow `rgba(34, 34, 34, 0.08) 4px 10px 20px 0px`; on hover shadow `rgba(34, 34, 34, 0.18) 4px 12px 20px 6px` and lift 5px."
- "Build filter chips: `#ffffff`, 1px `#dfe3ed` border, `#a6adbd` 17px label, 40px radius, 14px 20px padding, 50px tall; hover `#f5f6fb`; selected `#1a2241` fill with white bold label."
- "Build text tabs: 16px `#8f97a7`, hover `#3e4149`; selected `#222222` weight 700."

### Iteration Guide
1. `#222222` for the primary action and selection; `#1a2241` only for the selected filter
2. Headings 700, line height 1.5
3. Cool grey ladder for secondary text
4. 50px pills, 40px filters, 1px `#dfe3ed` borders
5. Flat except the banner cards

---

## 10. Voice & Tone

Dealicious's voice is **warm, plain and customer-first**. The mission line frames everything as help for the customer's business, and the culture pages speak in first-person plural about how the team works.

| Context | Tone |
|---|---|
| Mission | Benefit-framed, warm. "고객의 사업을 쉽고 즐겁게!" |
| Company story | Plain statement of change. "오프라인으로만 이루어지던 동대문 패션업계의 B2B 거래를 온라인으로 옮겼습니다." |
| Service facts | Concrete figures. "동대문 도매 사업자의 80% 이상이 가입한 플랫폼" |
| Principles | Short, friendly rules with hashtags. "#빠른 실행 #실패해도 도전하자" |
| Actions | Direct, low-pressure. "인재영입 바로가기", "블로그 바로가기", "서비스 보러가기" |
| Empty state | Plain. "채용중인 공고가 없습니다." |

**Voice samples (verbatim, opened 2026-09-30):**
- "딜리셔스 Dealicious | 고객의 사업을 쉽고 즐겁게" — dealicious.kr page title.
- "딜리셔스는 오프라인으로만 이루어지던 동대문 패션업계의 B2B 거래를 온라인으로 옮겼습니다." — /introduction.
- "2013년 7월 론칭한 신상마켓은 동대문 패션 도매 사업자와 국내외 소매 사업자를 연결하는 플랫폼입니다." — /services.
- "K패션 도소매 거래 NO.1" — /services, the company's own positioning line.

**Forbidden register**: aggressive sales urgency, stacked B2B jargon, corporate language that hides the small-business customer, exclamation-heavy hype.

## 11. Brand Narrative

Dealicious presents its founding problem directly: Dongdaemun's fashion wholesale trade happened only offline, and the company moved it online so that more products could move more easily and the fashion industry could grow. Sinsang Market, launched in July 2013, is the result — a platform linking Dongdaemun wholesalers with retailers in Korea and abroad, which the company describes as "K패션 도소매 거래 NO.1". Around it Dealicious built 신상스튜디오, which picks up, photographs and lists a wholesaler's products within a week, and 신상애드, which lets wholesalers promote their uploaded products to retailers across the country; the company says one in five Dongdaemun wholesalers already uses it.

The company page states five principles: 사장님 마음 (always think like the business owner), 80% 실행 (move fast at 80% and learn from failure), 스스로 성장, 피드백 핑퐁 (honest feedback built on respect) and 원팀 딜리언즈. The people-and-culture page foregrounds staff interviews, an R&D centre and development culture, and the engineering team runs a public tech blog (dealicious-inc.github.io), linked from every page as 딜리셔스의 개발 이야기. The footer lists co-CEOs 김준호 and 정창한 and an address in 종로구, Seoul.

The corporate site reads the same way: plain white pages, heavy headings, one near-black action and a warm, customer-first voice.

## 12. Principles

1. **Easy and enjoyable for the customer.** The mission is "고객의 사업을 쉽고 즐겁게". *UI implication:* one clear action per area, plain language, no pressure.
2. **Think like the owner.** "항상 사장님 마음으로 생각합니다." *UI implication:* show figures the business owner cares about — shops, transactions, return rates — plainly.
3. **Move at 80%.** "80% 수준으로 빠르게 실행합니다." *UI implication:* simple, reusable components (pills, filters, rows) over bespoke treatments. (An editorial reading.)
4. **One team.** *UI implication:* the same header, banners and footer on every page.
5. **Quiet structure.** *UI implication:* hairlines and greys for structure; depth only on the banner cards. (An editorial reading of the captured pages.)

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Sinsang Market / Dealicious user segments (Dongdaemun fashion retailers and wholesalers, and the company's own engineers), not individual people.*

**정하늘, 28, 서울.** Runs a small online fashion boutique and sources stock through Sinsang Market instead of dawn market runs. Values ordering from her phone and a calm, simple flow.

**김도현, 41, 서울 동대문.** A wholesaler listing new arrivals daily. Cares that his catalogue reaches retailers fast and has tried 신상애드 to reach more of them.

**이서연, 33, 딜리셔스 엔지니어.** A mobile engineer who reads and writes on the company tech blog and values the culture the company foregrounds.

## 14. States

Only these states were observed on the three captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Hover / pressed (career filter)** | Unselected `#ffffff` → `#f5f6fb`; the selected `#1a2241` filter does not change. |
| **Hover / pressed (IR tab)** | Unselected `#8f97a7` → `#3e4149`; the selected tab does not change. |
| **Hover / pressed (language selector)** | Transparent → `#f5f6fb`. |
| **Hover / pressed (banner card)** | Shadow deepens and the card lifts 5px; the pill inside does not change. |
| **Selected** | Career filter `#1a2241` fill with white bold label; IR tab and footer language `#222222` bold. |
| **Empty** | The career list read "채용중인 공고가 없습니다." on 2026-09-30 (a disabled button in the page markup). |
| **Focus** | No captured control draws an authored focus style; all show only the browser's default ring. |

Error, loading and success states were not captured and are not described.

## 15. Motion & Easing

The probe read the transitions the controls compute. Career filters transition `all 0.2s cubic-bezier(0, 0, 0.2, 1)`; IR tabs and the language selector transition colour, background, border, text-decoration colour, fill and stroke over `0.15s cubic-bezier(0.4, 0, 0.2, 1)`; the pills compute `transition: all 0s`, while the banner card's lift settles within the probe's 900ms wait (the longest transition in its compared scope is 500ms). Nothing else about motion (hero, carousels) was measured; treat it as unspecified and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/dealicious.json (capturedAt 2026-09-30T08:58:01Z), deterministic collector, 1440x900, logged out: dealicious.kr, /ir-center, /career. States and the banner card: fixed keyboard probe raws docs/research/2026-09-29-growth/raw/dealicious-states-{home,ir,career}.json.
- §1, §10, §11 context: /introduction, /services and /people-culture on dealicious.kr, and the home page and footer, opened 2026-09-30.
- §3 licence: the Roboto OFL.txt in the Google Fonts repository, opened 2026-09-30.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->
