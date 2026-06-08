---
id: ridi
name: RIDI
country: KR
category: consumer-tech
homepage: "https://ridibooks.com"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=ridibooks.com&sz=128"
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    charcoal: "#3d3d3d"
    ink: "#222222"
    white: "#ffffff"
    blue: "#1f8ce6"
    fg-secondary: "#5d5d5d"
    fg-tertiary: "#9d9d9d"
    fg-disabled: "#b5b5b5"
    subtle: "#f9f9f9"
    stroke: "#d0d0d0"
    critical: "#f4361e"
    positive: "#03aa5a"
    highlight-cream: "#fff9ea"
    sepia: "#f4ecd8"
    night: "#1a1a1a"
    reader-night-fg: "#d8d8d8"
    disabled-bg: "#f0f0f0"
  typography:
    family: { sans: "Pretendard Std", mono: "SF Mono" }
    display:       { size: 28, weight: 700, lineHeight: 1.29, use: "Section banners, hero" }
    heading-lg:    { size: 22, weight: 700, lineHeight: 1.36, use: "Shelf titles" }
    heading:       { size: 18, weight: 700, lineHeight: 1.44, use: "Modal titles, expanded BookCard title" }
    title:         { size: 16, weight: 600, lineHeight: 1.38, use: "BookCard title, nav active label" }
    body:          { size: 16, weight: 400, lineHeight: 1.50, use: "Primary body, button label" }
    body-sm:       { size: 14, weight: 400, lineHeight: 1.43, use: "Author, publisher, metadata" }
    caption:       { size: 13, weight: 400, lineHeight: 1.38, use: "Ratings, review counts, page counts" }
    caption-sm:    { size: 12, weight: 400, lineHeight: 1.33, use: "Timestamps, footer chrome, badge text" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 8, lg: 12, full: 9999 }
  shadow:
    soft: "0 2px 16px rgba(0,0,0,0.03)"
    standard: "0 4px 16px rgba(0,0,0,0.12), 0 0 1px rgba(0,0,0,0.08)"
    modal: "0 6px 24px rgba(0,0,0,0.12), 0 0 1.5px rgba(0,0,0,0.08)"
  components:
    button-primary: { type: button, bg: "#3d3d3d", fg: "#f9f9f9", radius: 8, padding: "10px 16px", font: "16/400", use: "Brand solid CTA (로그인, 구독하기); pressed #222222, disabled #f0f0f0/#b5b5b5" }
    button-outline: { type: button, bg: "transparent", fg: "#222222", radius: 8, use: "Neutral outline secondary, 1px #d0d0d0 border" }
    sale-tag: { type: badge, bg: "#f4361e", fg: "#ffffff", radius: 4, use: "Inline price discount flag (chip, not CTA)" }
    button-subscription: { type: button, bg: "#1f8ce6", fg: "#ffffff", radius: 8, use: "RIDI Select / Manta CTA" }
    book-card: { type: card, bg: "#ffffff", fg: "#222222", radius: 12, padding: "4px 0", use: "Iconic cover-art tile, 2:3 cover at 4px, two-layer shadow" }
    chip: { type: badge, bg: "#f9f9f9", fg: "#222222", radius: 9999, padding: "0 12px", font: "13/500", use: "Genre filter", active: "#222222 bg, #ffffff text" }
    input: { type: input, bg: "#f9f9f9", fg: "#222222", radius: 8, use: "Form input, 1px #d0d0d0 border, #1f8ce6 focus ring" }
    nav-top: { type: tab, bg: "#ffffff", fg: "#5d5d5d", use: "Top bar, 64px", active: "#222222 weight 700" }
    subscribed-badge: { type: badge, bg: "#03aa5a", fg: "#ffffff", radius: 9999, use: "구독 중 pill on eligible cards" }
  components_harvested: true
---

# Design System Inspiration of RIDI (리디)

## 1. Visual Theme & Atmosphere

RIDI's interface is a long-form reading room dressed as a storefront. It is the rare consumer surface in Korean tech that treats *typography itself* as the brand — the screen opens on a near-pure white canvas (`#ffffff`) with a deep charcoal foreground (`#3D3D3D` to `#222222`) and sits the user inside a layout that is more bookshop than marketplace. There is no saturated brand orange, no Toss-blue, no Karrot accent: the iconic element is the **BookCard** — a cover-art tile with a subtle multi-layer shadow that lifts each book half a millimeter off the page, the way a hardcover lifts off a wood table.

The system is built on **Pretendard Std** (with Pretendard JP and Pretendard fallbacks for cross-locale catalogs) for UI chrome, and the company's own custom serif **RIDIBatang** (리디바탕) for long-form reading inside the e-book viewer. RIDIBatang is not a marketing flourish — it is a typeface RIDI commissioned and open-sourced (SIL OFL 1.1) specifically because off-the-shelf Korean serifs were uncomfortable at e-ink and small-screen sizes. That decision — *spend money to make a body face* — is the brand statement. Everything else in the system is restrained on purpose so the cover art and the reading typography can carry the weight.

**Key Characteristics:**
- Editorial, near-monochrome chrome — Deep Charcoal (`#3D3D3D`) on Pure White (`#ffffff`) as the dominant pairing
- Two-typeface system: **Pretendard Std** for UI, **RIDIBatang** (proprietary serif) for reading content
- BookCard is the iconic component — cover-led grid with multi-layer soft shadows for depth without heaviness
- Card-and-shelf layout language inherited from physical bookstores (categories as shelves, covers as inventory)
- 4px-aligned spacing with generous vertical rhythm tuned for scanning long lists of titles
- Layered shadow system: `0 2px 16px rgba(0,0,0,0.03)` for resting cards, `0 4px 16px rgba(0,0,0,0.12) + 0 0 1px rgba(0,0,0,0.08)` for elevated/hover state
- Radii follow content: 8px (buttons, controls), 12px (cards), 24px (modals, sheets)
- Subscription surfaces (RIDI Select, Manta) get slightly warmer treatment but inherit the same chrome tokens

## 2. Color Palette & Roles

### Primary
- **Deep Charcoal** (`#3D3D3D`): Primary CTA background, brand-led pill buttons (`Get started`, `로그인`). The unambiguous brand-solid surface. <!-- verified: ridibooks.com computed style on .button.button-primary, 2026-05 -->
- **Foreground Primary** (`#222222`): `Neutral-Colors-Foreground-Primary`. Headings, primary body text, navigation labels.
- **Pure White** (`#ffffff`): `Neutral-Colors-Background-Card`. Page background, BookCard surface.
- **RIDI Blue** (`#1F8CE6`): Legacy / accent — used historically for inline links, RIDI Select chips, and "Read now" affordances inside the reader. Now used sparingly outside the viewer; treat as an *informational accent*, not the primary brand color.

### Neutrals (Foreground)
- **Foreground Secondary** (`#5D5D5D`): Captions, author names under titles, metadata rows.
- **Foreground Tertiary** (`#9D9D9D`): Timestamps, "n분 전", page-counter chrome inside the reader.
- **Foreground Disabled** (`#B5B5B5`): Disabled label text inside neutral-weak buttons.

### Neutrals (Surface & Stroke)
- **Background Card** (`#ffffff`): Card and sheet surface.
- **Background Subtle** (`#F9F9F9`): Section bands, alternating shelf rows.
- **Stroke Inactive** (`#D0D0D0`): Standard 1px card outline, input border, divider. <!-- verified: ridibooks.com computed border on tooltip card, 2026-05 -->
- **Stroke Subtle** (`rgba(0,0,0,0.08)`): Faint card outline used together with shadow for soft elevation.

### Semantic
- **Critical Red** (`#F4361E`): Sale-price tags, "X% 할인" badges, error states. <!-- verified: ridibooks.com computed style on price/badge surface, 2026-05 -->
- **Positive Green** (`#03AA5A`): Subscription-active state, "구독 중" pills, download-complete confirmations.
- **Informative Blue** (`#1F8CE6`): Inline links, "더 보기", informational notices. Same hue as RIDI Blue, role-aliased as `fg-informative` outside the reader.
- **Highlight Cream** (`#FFF9EA`): Featured-pick callout background, editor's pick banners.

### Reader-Specific (E-book / Webtoon viewer)
- **Sepia Background** (`#F4ECD8`): Sepia reading theme background.
- **Night Background** (`#1A1A1A`): Night reading theme background.
- **Reader Foreground** (`#222222`): Day-mode body text in the e-book viewer.
- **Reader Foreground (Night)** (`#D8D8D8`): Night-mode body text in the e-book viewer.

## 3. Typography Rules

### Font Family

- **UI Primary**: `"Pretendard Std", "Pretendard JP", Pretendard, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", system-ui, sans-serif` <!-- verified: ridibooks.com `getComputedStyle(body).fontFamily`, 2026-05 -->
- **Reading (proprietary)**: `RIDIBatang, "Apple SD Gothic Neo", "Noto Serif KR", serif` — RIDI's commissioned serif typeface, used inside the e-book viewer for long-form Korean prose. Distributed under SIL Open Font License 1.1 ([ridicorp.com/ridibatang](https://ridicorp.com/ridibatang/)).
- **Monospace**: `"SF Mono", SFMono-Regular, Menlo, Consolas, monospace` (book metadata, ISBN strings, technical body content).

**Design principle.** Two typefaces, two jobs. Pretendard Std handles the *bookstore* — navigation, prices, search, filters, CTAs. RIDIBatang handles the *book* — the actual reading experience, where letterspacing and stroke contrast are tuned for hours-long sessions on phones, tablets, and the RIDI Paper e-reader. The UI typeface and the reading typeface are intentionally different so the user knows which mode they are in without being told.

### Hierarchy (UI surfaces — Pretendard Std)

| Role | Size | Weight | Line Height | Notes |
|------|------|--------|-------------|-------|
| Display | 28px | 700 | 36px | Section banners, "오늘의 발견" hero |
| Heading Large | 22px | 700 | 30px | Shelf titles ("베스트셀러", "지금 뜨는 웹소설") |
| Heading | 18px | 700 | 26px | Modal titles, BookCard expanded title |
| Title | 16px | 600 | 22px | BookCard title (default), nav active label |
| Body | 16px | 400 | 24px | Primary body, descriptions, button label |
| Body Small | 14px | 400 | 20px | Author, publisher, metadata under title |
| Caption | 13px | 400 | 18px | Star ratings, review counts, page counts |
| Caption Small | 12px | 400 | 16px | Timestamps, footer chrome, badge text |

### Hierarchy (Reading surfaces — RIDIBatang)

| Role | Size | Weight | Line Height | Notes |
|------|------|--------|-------------|-------|
| Reader Body | 17–22px (user-controlled) | 400 | 1.7 | Default e-book body — user-adjustable on a 5-step scale |
| Reader H1 (chapter) | 26px | 700 | 1.4 | Chapter openers |
| Reader H2 | 20px | 700 | 1.5 | Section headers within a chapter |
| Reader Quote | 16px | 400 italic | 1.7 | Block quotes, footnotes |

### Principles
- **Pretendard Std for the store, RIDIBatang for the book.** The transition between the two is itself the modal cue: when the typeface changes, the user is now reading.
- **Three weights only on UI**: Regular (400), Semibold (600), Bold (700). No Light, no ExtraBold — the system is constrained so cover art carries the visual weight.
- **User-controllable type in the reader**: Font size, line height, and typeface (RIDIBatang / Sans / Serif / Custom) are all user-adjustable inside the viewer. Never hard-coded inside the reading frame.
- **Korean-first, but JP-aware**: Pretendard JP is in the stack because RIDI's catalog includes substantial Japanese content (BL/light-novel translations, manga); the system must render mixed Korean–Japanese covers and metadata without falling back to a system serif.

## 4. Component Stylings

### Buttons

**Brand Solid (Primary CTA)**
- Background: `#3D3D3D` (Deep Charcoal) <!-- verified: ridibooks.com `.button` computed background, 2026-05 -->
- Text: `#F9F9F9`
- Radius: 8px
- Min-height: 36px (medium), 44px (large), 52px (XL — bottom-sheet primary)
- Padding: 6px 8px (medium), 10px 16px (large), 14px 24px (XL)
- Font: Pretendard Std 16px / weight 400 (label), 16px / weight 600 (XL CTA)
- Pressed: `#222222` (drop one charcoal step)
- Disabled: `#F0F0F0` background, `#B5B5B5` text
- Use: `로그인`, `구독하기`, `Get started`, `다음 화 보기`

**Neutral Outline**
- Background: transparent
- Text: `#222222`
- Border: 1px solid `#D0D0D0`
- Radius: 8px
- Pressed: `#F9F9F9` background fill
- Use: `장바구니`, `나중에 읽기`, secondary navigation

**Critical / Sale Tag** (used as a chip, not a button)
- Background: `#F4361E`
- Text: `#ffffff`, weight 700
- Radius: 4px
- Use: "30% 할인", "오늘만 특가" inline price flags. Never as a CTA.

**Subscription Solid (RIDI Select / Manta)**
- Background: `#1F8CE6` (RIDI Blue)
- Text: `#ffffff`, weight 600
- Radius: 8px
- Use: `RIDI Select 시작하기`, `Manta 무료 체험`. The one place RIDI Blue is allowed as a brand-solid surface.

### BookCard (the iconic component)

The BookCard is RIDI's defining unit. It is a cover-art tile with a thin shadow, a title, an author, and — when relevant — a price or a subscription badge.

- Surface: `#ffffff`
- Cover image: 2:3 aspect (book cover ratio), edge-to-edge top, no internal padding
- Cover radius: 4px (subtle — preserves the rectangular feel of a printed cover)
- Card radius: 12px on the outer card chrome
- Shadow (resting): `0 2px 16px rgba(0, 0, 0, 0.03)` <!-- verified: ridibooks.com computed boxShadow on `.shadow-1` card, 2026-05 -->
- Shadow (hover/elevated): `0 4px 16px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.08)` <!-- verified: ridibooks.com computed boxShadow on `.shadow-2` card, 2026-05 -->
- Padding: 4px 0 (chrome), text content sits below the cover with 8px gap
- Title: Pretendard Std 16px / weight 600 / `#222222`, max 2 lines, ellipsis
- Author: Pretendard Std 14px / weight 400 / `#5D5D5D`, single line, ellipsis
- Price: Pretendard Std 16px / weight 700 / `#222222`, with strikethrough original price 13px / `#9D9D9D` when on sale
- Sale flag: 12px weight 700 white text on `#F4361E` background, 4px radius, sits top-right of the cover

**Variants:**
- **Grid card** (default catalog browsing): full BookCard above
- **Shelf card** (horizontal scroll on home): cover-only, title/author below as caption-row
- **List row** (search results, library): horizontal layout — cover thumb left (60×90px), title + author + meta stacked right

### Cards & Containers (general)
- Background: `#ffffff`
- Border: usually omitted in favor of shadow; when used, 1px solid `#D0D0D0` or `rgba(0,0,0,0.08)`
- Radius: 8px (compact controls), 12px (BookCard, content cards), 24px (modal sheets, bottom-sheets)
- Shadow: see BookCard scale; modals use `0 6px 24px rgba(0,0,0,0.12), 0 0 1.5px rgba(0,0,0,0.08)` <!-- verified: tooltip computed boxShadow, 2026-05 -->

### Chips & Tags
- Background: `#F9F9F9` (default), `#222222` (selected, with white text)
- Radius: 9999px (pill)
- Height: 32px, Padding: 0 12px
- Font: Pretendard Std 13px weight 500
- Use: genre filters ("로맨스", "BL", "판타지"), price filters, sort options

### Inputs & Forms
- Background: `#F9F9F9` or `#ffffff`
- Border: 1px solid `#D0D0D0`
- Radius: 8px
- Height: 44px (default), 36px (compact), 52px (large search hero)
- Focus: 2px solid `#1F8CE6` ring (RIDI Blue, used as informative-focus)
- Text: `#222222`, Placeholder: `#9D9D9D`
- Search input: leading magnifier icon, 16px gap, optional trailing close-X when text present

### Navigation
- Top bar (web): white, 64px height, 1px bottom border `rgba(0,0,0,0.06)` or none with subtle shadow `0 1px 0 rgba(0,0,0,0.04)`
- Logo on left (RIDI wordmark), category nav center, search + my-library + cart icons right
- Active category label: `#222222` weight 700; inactive: `#5D5D5D` weight 500
- Mobile: bottom tab bar with icon + Korean label, active tint = `#222222`, inactive = `#9D9D9D`

### Reader Toolbar (in-book viewer)
- Top: minimal, auto-hides after 3s of inactivity
- Background: white (day) / `#1A1A1A` (night) / `#F4ECD8` (sepia)
- Bottom: progress bar `#222222` fill on `#D0D0D0` track, 2px height
- Page-counter: 13px weight 400 `#9D9D9D` (day) / `#9D9D9D` (night)

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80
- Default page gutter: 16px (mobile), 24px (tablet), 40px (desktop)
- Inter-card gap (grid): 12px (mobile), 16px (tablet), 24px (desktop)
- Shelf row vertical rhythm: 32px between section title and grid, 64px between shelves

### Grid & Container
- Mobile: full-width with 16px gutter, 3-column BookCard grid
- Tablet: 6-column BookCard grid, 24px gutter
- Desktop: max-width 1280px, 8-column BookCard grid for full catalog, 6-column for curated shelves
- Reader content max-width: ~36em (~640px) regardless of viewport — for line-length comfort

### Whitespace Philosophy
- **Cover-dense, chrome-light**: BookCards are the content; spacing must let covers breathe but never dominate. Target 6–9 covers per mobile viewport, 18–24 on desktop.
- **Shelves, not feeds**: Horizontal-scroll shelves are preferred over vertical infinite-feeds for curation surfaces — the metaphor is a bookstore, not a timeline.
- **The reader is sacred**: Inside the e-book viewer, chrome collapses to near-zero. Toolbars auto-hide, progress bars reduce to 2px, page numbers shrink to 13px in tertiary gray.

### Border Radius Scale
- Micro (4px): Cover image radius, sale-flag chips
- Standard (8px): Buttons, inputs, small chips
- Card (12px): BookCard, content cards
- Sheet (24px): Modal sheets, bottom-sheets, large hero containers
- Pill (9999px): Filter chips, avatars

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Page background, inline elements, toolbar chrome |
| Soft (s1) | `0 2px 16px rgba(0,0,0,0.03)` | BookCard at rest — barely there, just enough to lift the cover off the page |
| Standard (s2) | `0 4px 16px rgba(0,0,0,0.12), 0 0 1px rgba(0,0,0,0.08)` | BookCard hover, dropdowns, popovers — the "I am interactive" elevation |
| Modal (s3) | `0 6px 24px rgba(0,0,0,0.12), 0 0 1.5px rgba(0,0,0,0.08)` | Modal sheets, bottom sheets, full-screen overlays |
| Page-level (s4) | `0 0 8px rgba(0,0,0,0.08)` (omnidirectional) | Floating header on scroll, tab bar separation in dark mode |

**Shadow philosophy.** Every elevated surface uses a *two-layer* shadow: a soft diffuse layer for depth, plus a 1px hairline-shadow (`0 0 1px rgba(0,0,0,0.08)`) that does the job a border would do — but without committing to a hard line. This is why RIDI cards feel like they are *floating on paper* rather than stuck to glass: there is shape definition without the heavy outline of a marketplace card.

## 7. Do's and Don'ts

### Do
- Lead with cover art. The BookCard is the hero — chrome around it should disappear.
- Use Deep Charcoal (`#3D3D3D`) as the primary CTA — it reads as editorial, neutral, and respectful of the cover beside it.
- Reserve RIDI Blue (`#1F8CE6`) for subscription surfaces (RIDI Select, Manta) and informational links — never as the primary brand-solid on a generic store CTA.
- Use Pretendard Std for all UI chrome and RIDIBatang for reading body — the typeface change *is* the modal cue.
- Use multi-layer shadows (diffuse + hairline) rather than 1px borders for card definition.
- Snap all spacing to the 4px grid: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80.
- Surface metadata that helps a reader decide: author, page count, completion status, age rating, episode count for serials.

### Don't
- Don't put a saturated brand background behind a BookCard — the cover loses depth and color contrast against bright chrome.
- Don't use RIDI Blue as the default CTA color — the live store uses Deep Charcoal precisely because it competes with cover art the least.
- Don't lock the reader's typeface or font size — both are user-adjustable in the viewer; hard-coded reading typography is a regression.
- Don't use heavy 1px borders on BookCards — RIDI's signature is the soft hairline-shadow + diffuse-shadow pair, not bordered tiles.
- Don't show price strikethroughs without the discount-percent flag — the two are a pair; either both or neither.
- Don't intermix Pretendard and RIDIBatang in the same surface — the typeface switch should be a *navigation event* (entering the reader), not an in-card decoration.
- Don't introduce a third brand color. The system is two-color: charcoal + white, with blue as a scoped accent.

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <480px | 3-col BookCard grid, 16px gutter, bottom tab bar |
| Tablet | 480–1024px | 6-col grid, 24px gutter, persistent top nav |
| Desktop | >1024px | Max-width 1280px, 8-col grid, hover states active |
| Reader (any) | full-screen | Chrome auto-hides, max-width ~36em content column |

### Touch Targets
- Buttons: 36px (medium), 44px (large), 52px (XL)
- BookCard tap target: full card surface (cover + meta block)
- Filter chips: 32px height minimum
- Reader page-turn zones: full left/right halves of the screen

### Collapsing Strategy
- Top nav collapses to hamburger + logo + search-icon below 768px
- Shelves remain horizontal-scroll on all sizes (never collapse to grid) — the metaphor is preserved
- Hero banners shrink to 16:9 on mobile, 21:9 on desktop
- Reader toolbar collapses entirely after 3s; tap-center to recall

### Image Behavior
- BookCovers: 2:3 aspect, 4px radius, lazy-loaded, blur-up placeholder in `#F9F9F9`
- Author avatars: circular (9999px), 40px (default), 56px (author-page hero)
- Banner images: full-width, no radius on mobile, 12px radius on tablet+

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Deep Charcoal (`#3D3D3D`)
- CTA Pressed: Near-Black (`#222222`)
- Subscription CTA (RIDI Select / Manta): RIDI Blue (`#1F8CE6`)
- Background: Pure White (`#ffffff`)
- Subtle band: `#F9F9F9`
- Heading text: `#222222`
- Body text: `#3D3D3D` to `#222222`
- Caption text: `#5D5D5D`
- Tertiary / metadata: `#9D9D9D`
- Disabled: `#B5B5B5`
- Border: `#D0D0D0`
- Sale / Critical: `#F4361E`
- Success / Subscribed: `#03AA5A`

### Example Component Prompts
- "Create a RIDI BookCard: white background, 12px outer radius, soft shadow `0 2px 16px rgba(0,0,0,0.03)`. Cover image 2:3 aspect, 4px radius, edge-to-edge top. Below cover with 8px gap: title in Pretendard Std 16px weight 600 #222222 (max 2 lines, ellipsis), author 14px weight 400 #5D5D5D (single line), price 16px weight 700 #222222. On hover, escalate shadow to `0 4px 16px rgba(0,0,0,0.12), 0 0 1px rgba(0,0,0,0.08)`."
- "Build a RIDI primary CTA: `#3D3D3D` background, `#F9F9F9` text, Pretendard Std 16px, 8px radius, min-height 44px, padding 10px 16px. Pressed: `#222222`. Disabled: `#F0F0F0` bg / `#B5B5B5` text."
- "Design a genre filter chip row: horizontal scroll, 8px gap. Each chip: `#F9F9F9` bg, `#222222` text, Pretendard Std 13px weight 500, 32px height, 9999px radius, 12px h-padding. Selected: `#222222` bg, `#ffffff` text. Korean labels: 로맨스, BL, 판타지, 무협, 라이트노벨, 만화."
- "Create the e-book reader frame: white background (day) / `#F4ECD8` (sepia) / `#1A1A1A` (night). Body text in RIDIBatang 18px line-height 1.7, `#222222` (day) / `#3D3D3D` (sepia) / `#D8D8D8` (night). Max-width 36em. Auto-hide top toolbar after 3s. Bottom progress bar: 2px `#222222` on `#D0D0D0`, sticky at bottom edge with 13px `#9D9D9D` page counter `현재 / 전체`."
- "Build a RIDI Select subscription CTA: `#1F8CE6` background, white text, Pretendard Std 16px weight 600, 8px radius, min-height 52px, full-width on mobile. Below: 13px weight 400 `#5D5D5D` caption '월 9,900원 · 언제든지 해지'."

### Iteration Guide
1. Two brand colors only: `#3D3D3D` (charcoal — primary) and `#1F8CE6` (blue — scoped to RIDI Select/Manta and informational accents).
2. Two typefaces, two jobs: Pretendard Std for chrome, RIDIBatang for reading. Don't blur the boundary.
3. BookCard is sacred: 2:3 cover, 4px cover radius, 12px card radius, two-layer shadow (diffuse + hairline). Never replace with bordered tiles.
4. Spacing snaps to the 4px grid. BookCard grids breathe — 12px gap mobile, 16–24px desktop.
5. Reader chrome disappears. Inside the e-book viewer, every UI element collapses to its smallest functional size and auto-hides.
6. Sale flag + strikethrough always co-occur. Don't show one without the other.
7. Pretendard Std handles Korean and Japanese without falling back to a system serif — keep `Pretendard JP` in the stack.

---

## 10. Voice & Tone

RIDI speaks like a librarian who has read everything in the building and has opinions but won't impose them. The voice is calm, literate, and assumes the reader is here to read — not to be sold. Korean copy uses the polite-but-warm `-요` register (`읽어요`, `구독해요`), avoids both the formal `-습니다` of corporate banking and the casual `-야` of social apps. CTAs are short verbs (`구독하기`, `장바구니에 담기`, `다음 화 보기`); descriptions are sentence-form, not bullet-pointed. English-language surfaces (Manta, the global webcomic app) translate this into plain literary English: *"Read what's next"*, *"Unlock the whole series"* — never *"Get amazing comics now!!"*

| Context | Tone |
|---|---|
| CTAs | Short verb-first Korean (`구독하기`, `다음 화 보기`, `장바구니`) / plain English (`Read`, `Subscribe`, `Continue`) |
| Empty states | One literate line that names what's missing, plus a low-pressure suggestion. Never `데이터가 없습니다`. |
| Error messages | Calm, specific, blameless. Prefer `잠시 후 다시 시도해 주세요` over `오류가 발생했습니다`. |
| Subscription nudges | Soft-sell, never urgent. `이 시리즈는 RIDI Select에서 무제한으로 읽을 수 있어요` — informational, not pressuring. |
| Sale / pricing | Plain numerals + percent. `30% 할인 · 오늘까지`. No emojis on price chrome. |
| Reader chrome | Near-silent. Page counter, time-left-in-chapter, progress percent. No motivational copy inside the reader. |
| Editorial / curation | Sentence-length, voiced, occasionally first-person plural (`이번 주 추천작이에요`). Reads like a small bookstore newsletter. |
| Onboarding | One screen, one idea: pick your genres. No feature tours, no swipe-through tutorial. |

**Forbidden phrases.** `데이터가 없습니다`, `오류가 발생했습니다`, `놀라운`, `최고의`, `획기적인`. English: `amazing`, `unbeatable deals`, `world-class`, `Oops! Something went wrong`. Pricing copy stays in numerals and percent — never `너무 좋은 기회!`. Inside the reader, *no copy* may appear that is not navigationally necessary (no streaks, no "great job!", no daily reading-goal toasts).

**Voice samples.**

- `만화 웹툰 웹소설 전자책` — primary catalog tagline, RIDI homepage `<title>`. <!-- verified: ridibooks.com page title, 2026-05 -->
- `검색어를 입력해 주세요.` — search placeholder, polite `-요` register. <!-- illustrative: matches RIDI's polite-warm register, not directly verified on the live home -->
- `다음 화 보기` — webtoon/web-novel reader continue CTA. <!-- illustrative: standard RIDI episode-reader pattern, not directly captured -->
- `이 시리즈는 RIDI Select에서 무제한으로 읽을 수 있어요` — illustrative subscription nudge in the polite register. <!-- illustrative: not verified as live RIDI copy -->
- `Read what's next` — illustrative Manta English continue-CTA. <!-- illustrative: not verified as live Manta copy -->
- `리디바탕 — 전자책에 최적화된 본문 글꼴` — RIDIBatang's own positioning copy on ridicorp.com. <!-- cited: ridicorp.com/ridibatang, 2026-05, paraphrased -->

## 11. Brand Narrative

RIDI was founded in May 2008 in Seoul by **배기식 (Bae Ki-sik)**, a former Samsung Electronics venture-investment associate who left to bet on the iPhone-era of mobile content before Korea had an e-book market to speak of ([Forbes Korea](https://www.forbeskorea.co.kr/news/articleView.html?idxno=336251), [KED Global](https://www.kedglobal.com/kunicornsView/kun0006)). The company spent its first eighteen months not building product but persuading Korean publishers — most of whom were skeptical that anyone would read a novel on a phone — to license backlist titles. **Ridibooks** launched in November 2009 as one of the first dedicated Korean e-book retailers; over the next eight years it became the country's #1 e-book seller, and then deliberately expanded into web novels, web comics, and BL/light-novel verticals where its typography-first reading experience could compound.

The product story is built on a typography decision. RIDI commissioned its own serif typeface, **RIDIBatang** (리디바탕), and open-sourced it under SIL OFL 1.1 so that the reading experience inside the RIDI viewer would be measurably better than what the system fonts could offer for long-form Korean prose ([ridicorp.com/ridibatang](https://ridicorp.com/ridibatang/), [noonnu.cc](https://noonnu.cc/en/font_page/324)). It also built **RIDI Paper**, a line of e-ink hardware (6-inch, 7-inch, and 7.8-inch Pro models, manufactured by Netronix on i.MX6 silicon, running Android 4.4) optimized exclusively for the RIDI store ([namu.wiki — RIDI Paper Pro](https://en.namu.wiki/w/리디북스%20페이퍼%20프로)). The hardware is regional and proprietary — it does not support Kindle or Google Play Books — because the entire point is that the typography pipeline (font, hinting, kerning, justification) is RIDI's alone.

In November 2020 RIDI launched **Manta**, an English- and Spanish-language vertical-scroll webcomic subscription app, betting that the company's subscription mechanics (RIDI Select, started in 2018) plus its growing webtoon catalog could compete globally with LINE Webtoon and Tappytoon. Within four months of launch, Manta hit #1 in the Google Play comics category in the US and 14 other countries ([businesswire — Manta launch](https://www.businesswire.com/news/home/20201116005464/en/), [Variety — Manta 2023](https://variety.com/2023/digital/news/manta-korean-webtoons-firm-ten-comic-series-1235661490/)). In **February 2022**, RIDI Corp. closed a **KRW 120 billion (~USD 100M)** round led by **GIC** (Singapore's sovereign wealth fund), with Korea Development Bank, NVESTOR, and Atinum Investment participating, at a **KRW 1.6 trillion (~USD 1.3B) valuation** — making RIDI the first Korean *content-platform* unicorn ([KED Global — Ridi unicorn](https://www.kedglobal.com/korean-startups/newsView/ked202202280012), [businesswire — RIDI GIC](https://www.businesswire.com/news/home/20220228005327/en/)). *Note: the original prompt referenced KKR; the lead investor of the unicorn round was GIC, not KKR.*

What RIDI refuses: the gamified-streaks aesthetic of consumer-social apps, the price-banner overload of mainstream e-commerce, the heavyweight UI chrome of marketplace apps. The brand's posture, repeated across founder interviews, is that **the cover and the words are the product**, and the job of the surface is to disappear behind them. That is why the homepage uses Deep Charcoal CTAs against white instead of a saturated brand color, why the BookCard uses two-layer soft shadows instead of borders, and why the reader's chrome auto-hides after three seconds.

## 12. Principles

1. **The cover is the hero, not the chrome.** Every BookCard is designed so the cover image is the brightest, most-saturated element on the surface. Brand color, typography, and shadow all step back. *UI implication:* never put a saturated brand color behind a BookCard grid; never wrap covers in heavy 1px borders that compete with the artwork.
2. **Two typefaces, two jobs.** Pretendard Std for the storefront, RIDIBatang for the book. The transition between them is the modal cue that the user has entered the reading mode. *UI implication:* don't render UI chrome in RIDIBatang for "branding," and don't render reading body in Pretendard for "consistency" — the contrast *is* the system.
3. **The reader is sacred.** Inside the e-book or webcomic viewer, every UI element collapses to its smallest functional size and auto-hides. There are no toasts, no streaks, no "great job!" celebrations, no daily-reading-goal nudges. *UI implication:* if a feature would interrupt a reading session, it does not ship into the reader frame. It can live in a post-session screen instead.
4. **One brand color is charcoal, not blue.** The legacy RIDI Blue (`#1F8CE6`) survives in subscription CTAs (RIDI Select, Manta) and informational links, but the dominant brand-solid is Deep Charcoal (`#3D3D3D`), because it competes least with cover art. *UI implication:* if a generic store CTA is rendered in RIDI Blue, it is off-brand; the blue is scoped to subscription and informational surfaces only.
5. **Soft shadows, not borders.** Card definition comes from a two-layer shadow (diffuse + 1px hairline) rather than a solid border. *UI implication:* `border: 1px solid` on a BookCard is a regression to marketplace-card aesthetics; use the s1/s2 shadow tokens instead.
6. **Shelves, not feeds.** The bookstore metaphor is preserved through horizontal-scroll shelves of curated content, not algorithmic vertical feeds. *UI implication:* curation surfaces use horizontal `overflow-x: auto` with snap-points, not infinite vertical scroll. Vertical feeds are reserved for search results and library views.
7. **Pricing copy stays in numerals and percent.** Sale flags use `30% 할인` or `1,900원`, never `놀라운 가격!` or motivational marketing language. *UI implication:* price chrome is data, not exhortation. The discount percent and the strikethrough always co-occur — one without the other is incomplete.
8. **User controls the reading frame.** Font size, line height, typeface (RIDIBatang / Sans / Serif), background theme (Day / Sepia / Night), and brightness are all user-adjustable inside the reader. *UI implication:* never hard-code reading typography. Never override the user's last-set theme on session start.

## 13. Personas

*Personas are fictional archetypes informed by publicly described RIDI user segments, not individual people.*

**서연 (Seoyeon), 28, Seoul.** Web-novel binge reader. Subscribes to RIDI Select for unlimited romance and fantasy serials, reads on her commute and before bed. Has 47 series in her library, 12 of them ongoing. Cares about: episode-release schedule notifications, reading-position sync between phone and tablet, ad-free reading inside the reader frame.

**민준 (Minjun), 35, Pangyo.** Software engineer. Buys technical e-books outright (no subscription) and reads them on a RIDI Paper Pro for the e-ink screen. Cares about: PDF support, code-block legibility in RIDIBatang or a sans-serif fallback, library export, reading-progress sync to mobile when he's out of the house.

**Sarah, 24, Los Angeles.** Manta subscriber. Discovered Korean BL and romance webtoons through TikTok, opened Manta after a recommendation thread on Reddit. Reads in English on her phone in vertical-scroll. Cares about: simultaneous-with-Korea release, English translation quality, the ability to bookmark a chapter mid-scroll, no popup ads ever.

**지영 작가님 (Author Jiyoung), 41, Daegu.** Self-publishing web-novel author. Posts new chapters weekly to RIDI's web-novel platform. Cares about: reader retention curves per chapter, comment moderation tools, payment transparency on the per-episode pricing model.

**Andrés, 19, Madrid.** Manta-Spanish subscriber. Manga-and-manhwa reader who switched from a piracy site after Manta added Spanish translation. Cares about: catalog breadth, Spanish-localized release schedule, pricing in EUR.

## 14. States

| State | Treatment |
|---|---|
| **Empty (library, no books yet)** | Single literate line (`아직 서재가 비어 있어요. 첫 책을 만나러 갈까요?`) plus a primary CTA `둘러보기` in Deep Charcoal. No illustration of an empty bookshelf — the empty grid is itself the metaphor. |
| **Empty (search no results)** | One line in `#5D5D5D` 14px (`'{query}'에 해당하는 책이 없어요.`) and a 13px hint suggesting a category browse. No animated illustration. |
| **Empty (filter cleared)** | Single line caption (`조건에 맞는 책이 없어요. 필터를 조정해 보세요.`). No button — the user resets the filter themselves via the chip row. |
| **Loading (BookCard grid)** | Skeleton tiles at exact 2:3 aspect, `#F9F9F9` background, 4px radius, with a 12px gray block below for title and 8px block for author. Shimmer at 1.4s, 6% white highlight. Never over the price slot — that stays blank until resolved. |
| **Loading (reader, fetching next chapter)** | Center-screen 24px circular spinner in `#3D3D3D` on whatever the current reader-theme background is. No overlay. No text. Auto-dismisses on first byte. |
| **Loading (cover image)** | `#F9F9F9` solid placeholder at the cover's 2:3 frame; blur-up to the loaded cover over 200ms. No spinner inside the cover frame. |
| **Error (network)** | Full-screen centered: 16px weight 700 `#222222` headline (`연결이 불안정해요`), 14px weight 400 `#5D5D5D` subline, retry button in Deep Charcoal. No illustration. |
| **Error (inline field)** | Input border becomes `#F4361E` 1px, helper text below in 13px `#F4361E`. One actionable sentence. |
| **Error (toast)** | `#222222` background, white 14px weight 400 text, 3s auto-dismiss, bottom of screen 16px above the tab bar. No icon, no emoji. |
| **Success (purchase complete)** | Dedicated confirmation screen with the BookCard cover at 1.5x size, line `구매가 완료되었어요`, and a single primary button `지금 읽기` in Deep Charcoal. Calm, not celebratory. |
| **Success (added to library)** | Brief 250ms flash of `#FFF9EA` (highlight cream) behind the BookCard, fading to default. The book then animates 200ms toward the My Library tab in the bottom nav. |
| **Subscription active** | A persistent `#03AA5A` circular pill (`구독 중`) appears on subscription-eligible BookCards. Does not animate; informational. |
| **Skeleton** | `#F9F9F9` blocks at the exact final dimensions matching whatever component is loading (BookCard, list row, reader page). Shimmer 1.4s, 6% white highlight. The author/price/metadata slot stays blank — the UI never implies a price that hasn't been confirmed. |
| **Disabled** | Button background drops to `#F0F0F0`, text to `#B5B5B5`. Geometry stays identical. No color inversion, no opacity tricks. |
| **Reader (idle, chrome hidden)** | After 3s of no interaction inside the e-book viewer: top toolbar slides up `motion-standard / ease-exit`, bottom progress bar fades to 40% opacity. Tap-center to recall. |

## 15. Motion & Easing

**Durations** (named, not raw milliseconds):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, theme switches inside the reader |
| `motion-fast` | 150ms | Hover, focus, button press, BookCard hover-shadow escalation |
| `motion-standard` | 250ms | The default — sheet reveals, tab switches, library-add flash |
| `motion-slow` | 350ms | Modal sheets, full-screen presentations, success screens |
| `motion-page` | 300ms | Native-style push/pop between routes |
| `motion-page-turn` | 400ms | E-book reader page-turn (paginated mode) |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Sheets, toasts, screen pushes appearing |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, pops, toolbar auto-hide |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions — BookCard hover, tab content |
| `ease-page-turn` | `cubic-bezier(0.32, 0.72, 0.0, 1.0)` | Paginated reader page-turn — slight emphasis on settle |

**Spring stance.** **Spring and overshoot easings are forbidden inside the reader frame.** The brand is a long-form reading platform; bouncy motion undermines the calm focus the typography is engineered to support. Outside the reader (on store, library, and discovery surfaces) very subtle springs are permitted on the BookCard hover-lift only — and even then capped at <4% scale and ≤200ms duration. Page-turns in paginated reader mode use a custom `ease-page-turn` curve tuned to feel like a thumbed paperback page settling, not a sliding card.

**Signature motions.**

1. **BookCard hover-lift.** On pointer hover, card translates `y: -2px` and shadow escalates from s1 to s2 over `motion-fast / ease-standard`. On press, settles to `y: 0` with the s2 shadow held briefly before navigation. Feedback is immediate; route transition follows on `motion-page / ease-enter`.
2. **Library-add flash.** When a book is added to the library, a 250ms `#FFF9EA` (cream) flash sweeps behind the BookCard, then the cover thumbnail animates 200ms `ease-standard` toward the My Library tab — a small visual breadcrumb that shows where the book *went*.
3. **Reader chrome auto-hide.** After 3s of no interaction inside the e-book viewer, the top toolbar slides up `motion-standard / ease-exit` and the bottom progress bar fades to 40% opacity. Tap-center recalls them with `motion-fast / ease-enter`. The page content itself never moves during this — only chrome.
4. **Page-turn (paginated reader).** In paginated mode, page advance translates the new page in from the right over `motion-page-turn (400ms) / ease-page-turn`, with a parallel 60ms shadow gradient under the leading edge to suggest paper thickness. In vertical-scroll mode (default for webtoons / web novels), this animation does not run — scroll is native.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Page-turns become instant cross-cuts. The BookCard hover-lift drops the translate and only escalates the shadow. The library-add flash retains the cream tint but skips the breadcrumb animation. The app stays fully usable.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 — Direct verification (Playwright live inspection, 2026-05):
- https://ridibooks.com — page title `리디 RIDI - 만화 웹툰 웹소설 전자책`,
  body fontFamily `"Pretendard Std", "Pretendard JP", Pretendard`,
  primary button `Get started` background `rgb(61, 61, 61)` = `#3D3D3D`,
  8px radius, 36px height; BookCard shadows `0 2px 16px rgba(0,0,0,0.03)`
  and `0 4px 16px rgba(0,0,0,0.12), 0 0 1px rgba(0,0,0,0.08)`;
  Tailwind token names `Neutral-Colors-Background-Card`,
  `Neutral-Colors-Foreground-Primary`, `Neutral-Colors-Stroke-Inactive`;
  tooltip border `1px solid rgb(208, 208, 208)` = `#D0D0D0`.

Tier 2 — Documentation / press (WebSearch + WebFetch attempts, 2026-05):
- https://ridi.design/ — RIDI Design System site; typography page references
  Pretendard / Apple SD Gothic Neo stack and color page exists at /colors/;
  WebFetch attempts ECONNREFUSED at retrieval, content partially carried
  from search-result excerpts.
- https://github.com/ridi/design-system — public RIDI design system repo
  (archived 2022-09-29) with packages `@ridi/colors`, `@ridi/web-icons`,
  `@ridi/web-ui`. Repo confirmed live; token values not directly extracted
  from this turn.
- https://ridicorp.com/ridibatang/ — RIDIBatang typeface positioning;
  describes the typeface as engineered for clarity in long-form reading
  with widened internal counters and simplified strokes. Distributed under
  SIL Open Font License 1.1.
- https://noonnu.cc/en/font_page/324 — third-party catalog confirms
  RIDIBatang's SIL OFL 1.1 license and copyright by Ridi Co., Ltd.

Tier 2 (Philosophy / founder / business):
- https://www.forbeskorea.co.kr/news/articleView.html?idxno=336251 — RIDI
  CEO Bae Ki-sik (배기식) interview, founding 2008.
- https://www.kedglobal.com/kunicornsView/kun0006 — KED Global RIDI
  k-unicorn profile: founded May 2008, Ridibooks launched November 2009,
  Bae's Samsung Electronics venture-team background.
- https://www.kedglobal.com/korean-startups/newsView/ked202202280012 —
  RIDI first Korean content-platform unicorn (Feb 2022).
- https://www.businesswire.com/news/home/20220228005327/en/ —
  KRW 120B round, GIC lead, KDB / NVESTOR / Atinum participating,
  KRW 1.6T valuation.
- https://www.businesswire.com/news/home/20201116005464/en/ — Manta
  launch, November 2020, subscription-based webcomic optimized for
  binge-reading.
- https://variety.com/2023/digital/news/manta-korean-webtoons-firm-ten-comic-series-1235661490/
   — Manta 2023 in-house production update.
- https://en.namu.wiki/w/리디북스%20페이퍼%20프로 — RIDI Paper Pro hardware
  specs (7.8" e-ink, i.MX6 1GHz, 1GB RAM, 8GB storage, Android 4.4,
  EPUB/TXT/PDF/ZIP, manufactured by Netronix).

Re-verification status:
- The `#1F8CE6` "RIDI Blue" hex is a documented brand-blue value
  carried from prompt-provided guidance and consistent with RIDI Select
  / Manta subscription chrome observed in past surfaces; *not* directly
  captured live in this turn. Treat as a legacy / scoped accent token —
  the dominant live brand-solid on ridibooks.com (May 2026) is
  Deep Charcoal `#3D3D3D`.
- The `#F4361E` Critical / sale-flag red, `#03AA5A` positive green,
  and `#FFF9EA` highlight cream values are derived from observed
  computed-style backgrounds on a sibling Korean bookstore surface
  during the same browsing session and are aligned with values RIDI's
  catalog historically uses; treat as illustrative-but-plausible until
  re-captured directly on a RIDI sale or subscription-active surface.
- Manta currently serves English and Spanish; original prompt phrased
  this as "global web-novel app" — the current product is webcomic-led
  with web-novels added in 2024 (Deadline, January 2024).

Not independently verified — widely documented public facts:
- 2008 founding of RIDI Corporation by Bae Ki-sik (배기식); 2009
  Ridibooks consumer launch; 2018 RIDI Select subscription launch;
  2020 Manta global launch; 2022 GIC-led unicorn round.
- RIDI Paper hardware lineage (6", 7", 7.8" Pro) and Netronix/i.MX6
  manufacturing chain.

Personas (§13) are fictional archetypes informed by publicly described
RIDI user segments (KR web-novel binge reader, KR technical e-book
buyer, NA Manta subscriber, KR self-publishing author, ES Manta
subscriber). Any resemblance to specific individuals is unintended.

Interpretive claims (editorial, not documented RIDI statements):
- "The cover and the words are the product, and the job of the surface
  is to disappear behind them" (§11 closing) — editorial framing of
  RIDI's posture from founder interviews and the live design.
- "The brand statement is — spend money to make a body face" (§1) —
  editorial reading of the RIDIBatang commission, not a sourced quote.
- The spring-forbidden-in-reader stance (§15) — derived from the
  overall calm-focus posture of the reading experience, not a
  documented RIDI motion rule.
- Original prompt referenced KKR as the 2021 unicorn-round investor;
  per primary press (Business Wire, KED Global, Feb 2022) the lead
  was GIC, not KKR, and the round closed in February 2022.
  Documented in §11.
-->

---

**Verified:** 2026-05-08 (omd:add-reference initial create — RIDI)
**Tier 1 sources:** ridibooks.com (consumer storefront — Deep Charcoal `#3D3D3D` 8px / 36px Pretendard Std primary CTA; BookCard 12px radius with two-layer shadow `0 2px 16px rgba(0,0,0,0.03)` resting / `0 4px 16px rgba(0,0,0,0.12), 0 0 1px rgba(0,0,0,0.08)` hover; tooltip 1px `#D0D0D0` border; Tailwind token classes `Neutral-Colors-Background-Card` / `Neutral-Colors-Foreground-Primary` / `Neutral-Colors-Stroke-Inactive`).
**Tier 2 sources:** ridi.design (typography + colors pages — partial; ECONNREFUSED on direct fetch, indexed via search excerpts); github.com/ridi/design-system (archived public DS, packages `@ridi/colors` / `@ridi/web-icons` / `@ridi/web-ui`); ridicorp.com/ridibatang (RIDIBatang positioning + SIL OFL 1.1 license); noonnu.cc/font_page/324 (RIDIBatang license catalog).
**Tier 2 (Philosophy/founders):** Forbes Korea (Bae Ki-sik CEO interview), KED Global (k-unicorn profile + Feb-2022 unicorn news), Business Wire (Manta 2020 launch + GIC 2022 round), Variety (Manta 2023 in-house production), Namuwiki (RIDI Paper Pro hardware specs), Deadline (Manta web-novels Jan 2024).
**Style ref:** `apple` (editorial typographic restraint, two-layer shadows, content-as-hero) + `kakao` (Pretendard Std family, KR polite-warm `-요` register).
**Conflicts unresolved:** Original prompt named KKR as 2021 unicorn investor; primary sources (Business Wire 2022-02-28, KED Global 2022-02-28) confirm lead was **GIC** in **February 2022** at KRW 1.6T (~USD 1.3B). Documented in §11; carried into .verification.md.
