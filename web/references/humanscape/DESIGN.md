---
id: humanscape
name: Humanscape
display_name_kr: 휴먼스케이프
country: KR
category: healthcare
homepage: "https://humanscape.io/"
primary_color: "#00adf7"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=humanscape.io&sz=128"
verified: "2026-09-30"
added: "2026-07-02"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: corporate, url: "https://lifex.io/", inspected: "2026-09-30" }
    - { id: surface-2, kind: corporate, url: "https://lifex.io/about-us", inspected: "2026-09-30" }
    - { id: surface-3, kind: corporate, url: "https://lifex.io/our-business", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://lifex.io/", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://lifex.io/about-us", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://lifex.io/our-business", captured: "2026-09-30" }
    - { id: humanscape-probe-about, kind: product-surface, url: "https://lifex.io/about-us", captured: "2026-09-30" }
    - { id: humanscape-redirect, kind: official-doc, url: "https://humanscape.io/", captured: "2026-09-30" }
    - { id: pretendard-license, kind: license, url: "https://raw.githubusercontent.com/orioncactus/pretendard/main/LICENSE", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &active { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h4", captured: "2026-09-30" }
    "tokens.colors.accent-hover": &siteprobe { surface_id: surface-2, source_id: humanscape-probe-about, method: live-state-probe, selector: "button 사이트 바로가기 (282 x 44, rest bg #f4f6f9, fg #3c3d42, transition colours 0.15s cubic-bezier(0.4, 0, 0.2, 1)): hover and pressed self and label fg rgb(60, 61, 66) -> rgb(0, 168, 246); focus (Tab #24) outline none -> oklab(0.708 0 0 / 0.5) auto 1px", captured: "2026-09-30" }
    "tokens.colors.violet": &index { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.ink": &h1 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h1", captured: "2026-09-30" }
    "tokens.colors.ink-body": &article { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::article", captured: "2026-09-30" }
    "tokens.colors.charcoal": &textlink { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"8\"]", captured: "2026-09-30" }
    "tokens.colors.slate": &footlink { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"25\"]", captured: "2026-09-30" }
    "tokens.colors.muted": &h4 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h4", captured: "2026-09-30" }
    "tokens.colors.faint": &copy { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.inactive": *active
    "tokens.colors.white": &hero { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h1", captured: "2026-09-30" }
    "tokens.colors.surface": &site { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"39\"]", captured: "2026-09-30" }
    "tokens.colors.hairline": &acc { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"20\"]", captured: "2026-09-30" }
    "tokens.typography.family.body": &body { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::body", captured: "2026-09-30" }
    "tokens.typography.display-page.size": &pageh1 { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h1", captured: "2026-09-30" }
    "tokens.typography.display-page.weight": *pageh1
    "tokens.typography.display-page.lineHeight": *pageh1
    "tokens.typography.display-page.tracking": *pageh1
    "tokens.typography.display-page.use": *pageh1
    "tokens.typography.display-statement.size": &h2xl { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.typography.display-statement.weight": *h2xl
    "tokens.typography.display-statement.lineHeight": *h2xl
    "tokens.typography.display-statement.use": *h2xl
    "tokens.typography.display-list.size": *active
    "tokens.typography.display-list.weight": *active
    "tokens.typography.display-list.lineHeight": *active
    "tokens.typography.display-list.use": *active
    "tokens.typography.display-hero.size": *hero
    "tokens.typography.display-hero.weight": *hero
    "tokens.typography.display-hero.lineHeight": *hero
    "tokens.typography.display-hero.use": *hero
    "tokens.typography.section.size": *h1
    "tokens.typography.section.weight": *h1
    "tokens.typography.section.lineHeight": *h1
    "tokens.typography.section.use": *h1
    "tokens.typography.heading.size": &h2 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.typography.heading.weight": *h2
    "tokens.typography.heading.lineHeight": *h2
    "tokens.typography.heading.use": *h2
    "tokens.typography.subheading.size": &h3 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-09-30" }
    "tokens.typography.subheading.weight": *h3
    "tokens.typography.subheading.lineHeight": *h3
    "tokens.typography.subheading.use": *h3
    "tokens.typography.card-title.size": &cardh3 { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h3", captured: "2026-09-30" }
    "tokens.typography.card-title.weight": *cardh3
    "tokens.typography.card-title.lineHeight": *cardh3
    "tokens.typography.card-title.use": *cardh3
    "tokens.typography.link-lg.size": *textlink
    "tokens.typography.link-lg.weight": *textlink
    "tokens.typography.link-lg.lineHeight": *textlink
    "tokens.typography.link-lg.use": *textlink
    "tokens.typography.body.size": *body
    "tokens.typography.body.weight": *body
    "tokens.typography.body.lineHeight": *body
    "tokens.typography.body.use": *body
    "tokens.typography.index-label.size": *index
    "tokens.typography.index-label.weight": *index
    "tokens.typography.index-label.lineHeight": *index
    "tokens.typography.index-label.use": *index
    "tokens.typography.button-sm.size": *site
    "tokens.typography.button-sm.weight": *site
    "tokens.typography.button-sm.lineHeight": *site
    "tokens.typography.button-sm.use": *site
    "tokens.typography.caption.size": *h4
    "tokens.typography.caption.weight": *h4
    "tokens.typography.caption.lineHeight": *h4
    "tokens.typography.caption.use": *h4
    "tokens.typography.fine.size": *copy
    "tokens.typography.fine.weight": *copy
    "tokens.typography.fine.lineHeight": *copy
    "tokens.typography.fine.use": *copy
    "tokens.spacing.nav-y": &nav { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"1\"]", captured: "2026-09-30" }
    "tokens.spacing.nav-x": *nav
    "tokens.spacing.menu": &menu { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-interaction-capture=\"menu-0-0\"]", captured: "2026-09-30" }
    "tokens.spacing.row-y": &acc2 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"21\"]", captured: "2026-09-30" }
    "tokens.spacing.button-x": *site
    "tokens.rounded.chip": *nav
    "tokens.rounded.card": &bizcard { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"13\"]", captured: "2026-09-30" }
    "tokens.rounded.panel": &panel { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"17\"]", captured: "2026-09-30" }
    "tokens.components.site-link-button.type": *site
    "tokens.components.site-link-button.bg": *site
    "tokens.components.site-link-button.fg": *site
    "tokens.components.site-link-button.radius": *site
    "tokens.components.site-link-button.padding": *site
    "tokens.components.site-link-button.height": *site
    "tokens.components.site-link-button.font": *site
    "tokens.components.site-link-button.hover": *siteprobe
    "tokens.components.site-link-button.pressed": *siteprobe
    "tokens.components.site-link-button.focus": *siteprobe
    "tokens.components.site-link-button.states": *siteprobe
    "tokens.components.site-link-button.use": *site
    "tokens.components.site-menu.type": *menu
    "tokens.components.site-menu.bg": *menu
    "tokens.components.site-menu.fg": *menu
    "tokens.components.site-menu.radius": *menu
    "tokens.components.site-menu.padding": *menu
    "tokens.components.site-menu.size": *menu
    "tokens.components.site-menu.font": *menu
    "tokens.components.site-menu.states": *menu
    "tokens.components.site-menu.use": *menu
    "tokens.components.nav-link.type": *nav
    "tokens.components.nav-link.fg": *nav
    "tokens.components.nav-link.radius": *nav
    "tokens.components.nav-link.padding": *nav
    "tokens.components.nav-link.height": *nav
    "tokens.components.nav-link.font": *nav
    "tokens.components.nav-link.states": *nav
    "tokens.components.nav-link.use": *nav
    "tokens.components.lang-toggle.type": &lang { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"6\"]", captured: "2026-09-30" }
    "tokens.components.lang-toggle.bg": *lang
    "tokens.components.lang-toggle.fg": *lang
    "tokens.components.lang-toggle.radius": *lang
    "tokens.components.lang-toggle.padding": *lang
    "tokens.components.lang-toggle.size": *lang
    "tokens.components.lang-toggle.font": *lang
    "tokens.components.lang-toggle.selected": *lang
    "tokens.components.lang-toggle.states": &langoff { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"7\"]", captured: "2026-09-30" }
    "tokens.components.lang-toggle.use": *lang
    "tokens.components.text-link.type": *textlink
    "tokens.components.text-link.fg": *textlink
    "tokens.components.text-link.border": *textlink
    "tokens.components.text-link.height": *textlink
    "tokens.components.text-link.font": *textlink
    "tokens.components.text-link.states": *textlink
    "tokens.components.text-link.use": *textlink
    "tokens.components.accordion-item.type": *acc
    "tokens.components.accordion-item.fg": *acc
    "tokens.components.accordion-item.border": *acc
    "tokens.components.accordion-item.padding": *acc2
    "tokens.components.accordion-item.disabled": *acc
    "tokens.components.accordion-item.states": *acc
    "tokens.components.accordion-item.use": *acc
    "tokens.components.business-card.type": *bizcard
    "tokens.components.business-card.radius": *bizcard
    "tokens.components.business-card.size": *bizcard
    "tokens.components.business-card.use": *bizcard
    "tokens.components.feature-panel.type": *panel
    "tokens.components.feature-panel.radius": *panel
    "tokens.components.feature-panel.size": *panel
    "tokens.components.feature-panel.use": *panel
    "tokens.components.highlight-list.type": *active
    "tokens.components.highlight-list.fg": *active
    "tokens.components.highlight-list.font": *active
    "tokens.components.highlight-list.selected": *active
    "tokens.components.highlight-list.use": *active
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#00adf7"
    accent-hover: "#00a8f6"
    violet: "#7b61ff"
    ink: "#1a1b1e"
    ink-body: "#191a1f"
    charcoal: "#28292d"
    slate: "#3c3d42"
    muted: "#5d5d60"
    faint: "#8c8f96"
    inactive: "#d2d4d9"
    white: "#ffffff"
    surface: "#f4f6f9"
    hairline: "#d8dde4"
  typography:
    family: { body: "Pretendard" }
    display-page: { size: 112, weight: 600, lineHeight: 1.3, tracking: -3.36, use: "Page titles on /about-us and /our-business, 146px line, filled with a #7b61ff to #00adf7 gradient clipped to the text" }
    display-statement: { size: 90, weight: 500, lineHeight: 1.3, use: "Closing statement heading on home, 117px line, in #1a1b1e" }
    display-list: { size: 72, weight: 500, lineHeight: 1.19, use: "Scroll-highlight list on /about-us, 86px line; the active item #00adf7, the others #d2d4d9" }
    display-hero: { size: 58, weight: 500, lineHeight: 1.21, use: "Home hero headline, 70px line, in #ffffff over the hero film" }
    section: { size: 52, weight: 500, lineHeight: 1.23, use: "Section headlines on home and /about-us, 64px line, in #1a1b1e" }
    heading: { size: 32, weight: 500, lineHeight: 1.3, use: "Home carousel heading, 41.6px line, in #1a1b1e" }
    subheading: { size: 24, weight: 500, lineHeight: 1.5, use: "Partner and investor names on home, 36px line, in #1a1b1e" }
    card-title: { size: 24, weight: 600, lineHeight: 1.5, use: "Leadership names on /about-us, 36px line, in #28292d" }
    link-lg: { size: 18, weight: 400, lineHeight: 1.56, use: "Underlined text links on home, 28px line, in #28292d" }
    body: { size: 16, weight: 400, lineHeight: 1.5, use: "Body default, header links and footer links, 24px line" }
    index-label: { size: 16, weight: 500, lineHeight: 1.5, use: "Numbered index labels above the accordion items, 24px line, in #7b61ff" }
    button-sm: { size: 14, weight: 500, lineHeight: 1.57, use: "사이트 바로가기 button and its menu, 22px line" }
    caption: { size: 14, weight: 600, lineHeight: 1.57, use: "Footer office headings, 22px line, in #5d5d60" }
    fine: { size: 12, weight: 400, lineHeight: 1.5, use: "Footer copyright line, 18px line, in #8c8f96" }
  spacing:
    nav-y: 8
    nav-x: 14
    menu: 16
    row-y: 40
    button-x: 16
  rounded:
    chip: 8
    card: 24
    panel: 32
  components:
    site-link-button: { type: button, bg: "#f4f6f9", fg: "#3c3d42", radius: "8px", padding: "0px 16px", height: "44px", font: "14px / 500 / 22px Pretendard", hover: "fg #00a8f6", pressed: "fg #00a8f6", focus: "browser default outline only (50% grey, auto 1px); no authored focus style", states: "probe on /about-us: transition colours 0.15s cubic-bezier(0.4, 0, 0.2, 1); hover and pressed turn the label azure", use: "사이트 바로가기 in the footer of every page; opens the site menu" }
    site-menu: { type: card, bg: "#f4f6f9", fg: "#3c3d42", radius: "8px", padding: "16px", size: "282px x 218px", font: "14px / 500 / 21px Pretendard", states: "opened by the collector's menu interaction on all three pages (expanded, menu-open)", use: "Menu of related sites opened from 사이트 바로가기; items are 8px-radius rows" }
    nav-link: { type: button, fg: "#1a1b1e", radius: "8px", padding: "8px 14px", height: "40px", font: "16px / 400 / 24px Pretendard", states: "rest only; the bundle's hover, pressed and focus frames on home are mid-transition reads, so no settled state is declared", use: "Header links (About Us, Our Business, Newsroom, Investor Relations, Career) on /about-us and /our-business; on the home hero the same links are white at 90% opacity" }
    lang-toggle: { type: toggle, bg: "#f4f6f9", fg: "#28292d", radius: "3.35544e+07px (fully rounded)", padding: "8px 14px", size: "46px x 38px", font: "14px / 600 / 22px Pretendard", selected: "the active language (KR) takes the #f4f6f9 pill and 600 weight", states: "inactive EN is transparent, #b0b3ba, 14px / 400; on the home hero the active pill is rgba(244, 246, 249, 0.3) with #f4f6f9 text", use: "KR / EN switch at the right of the header" }
    text-link: { type: button, fg: "#28292d", border: "bottom 1px #28292d", height: "29px", font: "18px / 400 / 28px Pretendard", states: "rest only; the bundle's pressed and focus frames are mid-transition reads, so none is declared", use: "Underlined text links under home section headlines; the site has no filled call-to-action" }
    accordion-item: { type: button, fg: "#191a1f", border: "bottom 1px #d8dde4", padding: "40px 0px", disabled: "the collapsed items carry the disabled attribute at capture", states: "rest and disabled only; no hover frame", use: "Three-step accordion beside the stacked panels on home, each headed by a violet index label" }
    business-card: { type: card, radius: "24px", size: "758px x 495px", use: "Business carousel cards on home; the fills are photography, not tokens" }
    feature-panel: { type: card, radius: "32px", size: "614px x 286px", use: "Stacked image panels beside the accordion on home" }
    highlight-list: { type: listItem, fg: "#d2d4d9", font: "72px / 500 / 86px Pretendard", selected: "fg #00adf7 on the item in view", use: "Scroll-highlight word list on /about-us" }
  components_harvested: true
---

# Design System Inspiration of Humanscape

## 1. Visual Theme & Atmosphere

Humanscape (휴먼스케이프) is a Korean healthcare-data company. Its domain now serves another name: `humanscape.io` answers with a permanent redirect (HTTP 301) to `lifex.io`, and the pages there speak as **LifeX**. LifeX calls itself "데이터 기반 헬스케어 인텔리전스" and describes a life-journey data company across pregnancy, birth and childcare, illness and treatment, and everyday health. The footer names the operator as 라이프엑스(주), business registration 636-81-00389, CEO 장민후, with its headquarters in 강남구, Seoul. The Hanoi office still uses a `humanscape.vn` address. No page opened this session says that Humanscape was renamed, so this record states only these links and does not claim a rename. The pages below are what the Humanscape domain delivers today.

The site is quiet and editorial. White body, near-black ink (`#1a1b1e` for headings, `#191a1f` for running text) and a cool grey fill (`#f4f6f9`) carry almost everything. Page titles are enormous: a 112px, 600-weight headline filled with a violet-to-azure gradient (`#7b61ff` → `#00adf7`). Section headlines stay at a calm 500 weight, from 52px to 90px. Every recorded element computes `box-shadow: none`. Rows are separated by `#d8dde4` hairlines, and corners run from 8px chips to 24px and 32px image cards.

Colour appears only where something is active or answers the pointer. Azure `#00adf7` colours the word in view in the /about-us scroll list while the others stay `#d2d4d9`. The footer's 사이트 바로가기 turns `#00a8f6` on hover. Violet `#7b61ff` numbers the accordion steps. There is no filled call-to-action: section links are 18px text with a 1px `#28292d` underline.

**Key Characteristics:**
- Pretendard only, from a 12px footer line to a 112px page title
- Medium display weights (500–600); size, not boldness, makes the hierarchy
- Azure `#00adf7` for the active item, `#00a8f6` for hover; violet `#7b61ff` for index labels
- Near-black ink `#1a1b1e` / `#191a1f`, greys `#28292d` → `#3c3d42` → `#5d5d60` → `#8c8f96`
- Flat: no shadows; `#f4f6f9` fills and `#d8dde4` hairlines
- Underlined text links instead of filled buttons

## Primary tasks

- Understand what the company does across the life journey
- Read the vision, roadmap, core values and leadership
- Find investor relations, news and careers
- Jump to the company's related sites from the footer

## 2. Color Palette & Roles

### Primary
- **Azure** (`#00adf7`): the primary colour. It is the active item in the /about-us scroll-highlight list: the element computes exactly `rgb(0, 173, 247)` while its siblings compute `#d2d4d9`. It is also the end stop of the page-title gradient. On a surface with no filled button, it is the colour that marks what is selected, so it is the primary.
- **Azure Hover** (`#00a8f6`): the hover and pressed label colour of 사이트 바로가기, read by the probe after the 0.15s transition. The page source uses the same value for the footer links' hover.

### Accent
- **Violet** (`#7b61ff`): numbered index labels above the home accordion and the /our-business steps; the start stop of the title gradient.

### Neutral & Surface
- **White** (`#ffffff`): page background and the hero headline over the film.
- **Surface** (`#f4f6f9`): 사이트 바로가기, its menu, and the active language pill.
- **Hairline** (`#d8dde4`): accordion row dividers.
- **Inactive** (`#d2d4d9`): the words not in view in the scroll list.

### Text
- **Ink** (`#1a1b1e`): headlines and header links.
- **Ink Body** (`#191a1f`): running text in cards and accordion rows.
- **Charcoal** (`#28292d`): underlined text links, leadership names, footer column heads.
- **Slate** (`#3c3d42`): footer links and the site menu.
- **Muted** (`#5d5d60`): footer office headings and addresses.
- **Faint** (`#8c8f96`): footer copyright and small captions.

### Brand assets, not tokens
The gradient `linear-gradient(90deg, #7B61FF 0%, #00ADF7 50%)` is clipped to the page-title text on /about-us and /our-business. The page source also has `bg-[#00ADF7]` fills (12 class uses) that the collector did not record as a component, so no token is built from them.

## 3. Typography Rules

### Font Family
- **Pretendard**: live surface use. `PretendardVariable` WOFF2 loads from `lifex.io/_next/static/media/`, and the family computes on all 469 recorded elements. Pretendard is distributed under the SIL Open Font License 1.1 (Kil Hyung-jin).
- **pretendard Fallback**: declared only, 0 uses.
- No page opened this session names the typeface, so official product use is not claimed.

### Hierarchy

| Role | Size | Weight | Line height | Where |
|---|---|---|---|---|
| Display page | 112px | 600 | 146px, -3.36px | /about-us and /our-business titles, gradient text |
| Display statement | 90px | 500 | 117px | Home closing heading |
| Display list | 72px | 500 | 86px | /about-us scroll list |
| Display hero | 58px | 500 | 70px | Home hero, white |
| Section | 52px | 500 | 64px | Home and /about-us section heads |
| Heading | 32px | 500 | 41.6px | Home carousel heading |
| Subheading | 24px | 500 | 36px | Partner names on home |
| Card title | 24px | 600 | 36px | Leadership names |
| Link large | 18px | 400 | 28px | Underlined text links |
| Body | 16px | 400 | 24px | Default, header and footer links |
| Index label | 16px | 500 | 24px | Violet step numbers |
| Button small | 14px | 500 | 22px | 사이트 바로가기 |
| Caption | 14px | 600 | 22px | Footer office heads |
| Fine | 12px | 400 | 18px | Copyright |

### Principles
- One family; scale does the work, and weight never goes above 600.
- Only the page title has negative tracking (-3.36px at 112px).
- Sizes are the desktop values at 1440px; the class names carry smaller mobile sizes that were not captured.

## 4. Component Stylings

### Buttons

**사이트 바로가기 (footer)**
- Background `#f4f6f9`, label `#3c3d42`, radius 8px, padding 0 16px, height 44px, 14px / 500 / 22px
- Hover and pressed: label `#00a8f6`. Focus: only the browser's default ring. The transition is 0.15s `cubic-bezier(0.4, 0, 0.2, 1)`.

**Text link**
- Label `#28292d` with a 1px `#28292d` bottom border, 18px / 400 / 28px, 29px tall

### Navigation

**Header links**
- `#1a1b1e`, 16px / 400 / 24px, padding 8px 14px, radius 8px, 40px tall. On the home hero the links are white at 90% opacity.

**Language toggle**
- Active KR: `#f4f6f9` pill, `#28292d`, 14px / 600, 46 × 38, fully rounded. Inactive EN: transparent, `#b0b3ba`, 14px / 400.

**Site menu**
- `#f4f6f9`, `#3c3d42` 14px / 500 items, radius 8px, padding 16px, 282 × 218

### Lists & Cards

**Accordion item**
- `#191a1f` text, 1px `#d8dde4` bottom border, 40px vertical padding; collapsed items carry `disabled`

**Scroll-highlight list**
- 72px / 500; the item in view is `#00adf7`, the rest `#d2d4d9`

**Business card**
- 24px radius, 758 × 495, photographic fill

**Feature panel**
- 32px radius, 614 × 286, stacked image panels

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out pages served for humanscape.io at lifex.io, plus a fixed keyboard-probe state read and first-party company context)
**Tier 1 sources:** https://humanscape.io/ ; https://lifex.io/ ; https://lifex.io/about-us ; https://lifex.io/our-business
**Tier 2 sources:** not attempted this session
**Conflicts unresolved:** none

---

## 5. Layout Principles

### Spacing System
Measured values only: header link padding 8px / 14px, menu padding 16px, accordion rows 40px vertical, footer button 16px sides. There is no evidence of a named scale.

### Grid & Container
Headings and footers run to a 1200px content width inside the 1440px viewport. Footer columns are 282px wide.

### Whitespace Philosophy
Generous: very large headlines with open space around them, and rows divided by hairlines rather than boxes.

### Border Radius Scale
0 (rows, headings) · 8px (header links, 사이트 바로가기, menu) · 24px (business cards) · 32px (feature panels) · fully rounded (language pill).

## 6. Depth & Elevation

All 469 recorded elements compute `box-shadow: none`. Separation comes from `#f4f6f9` fills, `#d8dde4` hairlines and photography.

## 7. Do's and Don'ts

### Do
- Keep azure for the active item and the hover answer; keep violet for index numbers.
- Use Pretendard at 500–600 and let size carry emphasis.
- Link with underlined text instead of filled buttons.
- Separate with `#d8dde4` hairlines and `#f4f6f9` fills.

### Don't
- Don't add shadows.
- Don't use heavy 700–800 weights for display type.
- Don't spread azure over body copy or large fills.
- Don't present Humanscape and LifeX as a documented rename; the site does not say so.

## 8. Responsive Behavior

### Breakpoints
Only the 1440 × 900 desktop layout was captured. The Tailwind `lg:` classes show smaller mobile sizes (for example 32px / 44px for the hero), but no other viewport was measured.

### Touch Targets
Measured heights: 사이트 바로가기 44px, header links 40px, language pills 38px.

### Collapsing Strategy
Not captured.

### Image Behavior
Business cards and feature panels are photographic fills inside 24px and 32px corners; scaling was not measured.

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary / active: `#00adf7`; hover `#00a8f6`
- Index accent: `#7b61ff`
- Ink: `#1a1b1e`, `#191a1f`; greys `#28292d`, `#3c3d42`, `#5d5d60`, `#8c8f96`
- Surface `#f4f6f9`; hairline `#d8dde4`; inactive `#d2d4d9`

### Example Component Prompts
- "A 112px Pretendard 600 page title with -3.36px tracking, filled with a 90° gradient from `#7b61ff` to `#00adf7` clipped to the text, on white."
- "A vertical list of 72px / 500 words; the one in view is `#00adf7`, the rest `#d2d4d9`."
- "A 44px footer button, `#f4f6f9` fill, 8px radius, `#3c3d42` 14px / 500 label that turns `#00a8f6` on hover over 0.15s."

### Iteration Guide
1. Start with white, `#1a1b1e` headlines at 500 and a lot of space.
2. Add azure only to what is active.
3. Use underlined text links, not buttons.
4. Divide with hairlines; never add shadows.

## 10. Voice & Tone

The copy is calm, bilingual and mission-led. English headlines lead ("eXploring human Life through data-driven intelligence", "Intelligence Across the Life Journey"), followed by plain Korean explanations ("데이터 기반 지능으로 인간의 삶을 탐구합니다"). Claims come with numbers: 1,800+ healthcare partners, 2.5M+ global users, 230M+ data points. Core values reuse the capital X: eXplores, eXecutes, eXceeds.

| Context | Tone |
|---|---|
| Hero | Aspirational but plain, one idea per line |
| Business | Descriptive: what the data does for the user ("AI가 태아의 성장과 발달을 분석합니다") |
| Metrics | Specific figures, no superlatives |
| Values | Short imperatives in English |

## 11. Brand Narrative

LifeX says its vision is "a future where data-driven intelligence shapes every stage of life". Its mission is "eXploring human Life through data-driven intelligence": connecting fragmented health and life data and turning the patterns into better care, diagnosis, treatment, finance and commerce. The roadmap says LifeX has spent ten years answering questions that recur across the life cycle, first where information demand is highest (pregnancy, birth, childcare), connecting users with healthcare providers. It now counts more than 2.5 million users, more than 1,800 healthcare institutions and service hubs in four countries (Korea, the United States, Vietnam, Indonesia). /our-business lists AI growth monitoring from ultrasound, early detection, developmental care, and personalised financial services, shopping and education. The leadership page lists 장민후 as founder and CEO, and the footer lists 라이프엑스(주). The pages link this company to the Humanscape domain through the redirect and the `humanscape.vn` address, but they do not tell the story of a rename.

## 12. Principles

1. **Life first, data as the instrument.** Lead with the person and the outcome. The numbers support the story.
2. **Specific numbers over adjectives.** Write "1,800+", "2.5M+" and "230M+", not vague scale words.
3. **One signal colour.** Azure means active; everything else is ink and grey.
4. **Flat and editorial.** Hairlines and space, not elevation.

*Principles are editorial readings of the captured site and its stated mission.*

## 13. Personas

*Fictional archetypes, not real people.*

**김서연, 34, 서울.** An expectant parent who wants her ultrasound results and her child's development explained plainly. She values a calm source over alarmist forums.

**박준호, 41, 판교.** A healthcare investor reading the investor-relations and roadmap pages. He trusts the concrete figures and the restrained presentation.

**Dr. Arun Patel, 45, Jakarta.** A clinic-network partner evaluating a data collaboration, who reads the healthcare-network numbers as evidence of real infrastructure.

## 14. States

| State | Treatment |
|---|---|
| **Hover / pressed** | 사이트 바로가기: label `#3c3d42` → `#00a8f6`; fill unchanged. |
| **Focus** | 사이트 바로가기 shows only the browser's default ring. |
| **Selected** | Scroll list: item in view `#00adf7`, others `#d2d4d9`. Language: active KR on a `#f4f6f9` pill at 600. |
| **Expanded** | 사이트 바로가기 opens a `#f4f6f9`, 8px-radius menu of related sites. |
| **Disabled** | Collapsed accordion items carry `disabled`. |

Header links and text links have bundle frames only mid-transition, so their settled states are unmeasured, not absent. Error, loading, empty and success states were not captured and are not described.

## 15. Motion & Easing

The probe read one transition: 사이트 바로가기 transitions colour, background, border, outline, text decoration, fill, stroke and gradient stops over 0.15s with `cubic-bezier(0.4, 0, 0.2, 1)`. The page source puts `duration-500 ease-out` on the scroll-list words and `duration-200` on the partner-name hover, but those were not measured as computed values. Nothing else about motion (hero film, carousels, counters) was measured; treat it as unspecified and honour `prefers-reduced-motion`.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/humanscape.json (capturedAt 2026-09-30T13:12:43Z), deterministic collector, 1440x900, logged out: lifex.io, /about-us, /our-business (humanscape.io 301 -> lifex.io). State: fixed keyboard probe raw docs/research/2026-09-29-growth/raw/humanscape-states-about.json.
- §1, §10, §11: lifex.io home, /about-us, /our-business, /newsroom, /ir and their footer, opened 2026-09-30.
- §3 licence: the Pretendard LICENSE on GitHub.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->
