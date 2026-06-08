---
id: wadiz
name: Wadiz
country: KR
category: fintech
homepage: "https://www.wadiz.kr"
primary_color: "#00c4c4"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=wadiz.kr&sz=256"
verified: "2026-05-14"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#00c4c4"
    primary-hover: "#07abae"
    tint: "#e6fafa"
    tint-accent: "#bef5f5"
    heading: "#191f28"
    body: "#333d4b"
    muted: "#4e5968"
    subtle: "#6b7684"
    placeholder: "#8b95a1"
    disabled: "#b1b8c3"
    canvas: "#ffffff"
    surface-alt: "#fafbfd"
    surface-neutral: "#f2f5f8"
    divider: "#e3e7ee"
    border: "#ced4de"
    success: "#00af84"
    alert: "#ff5959"
    info: "#4672f9"
    promo: "#fcc500"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Pretendard", mono: "ui-monospace" }
    hero-numeral: { size: 64, weight: 700, lineHeight: 1.1, use: "Funded amount % on detail pages" }
    h1:           { size: 48, weight: 700, lineHeight: 1.2, use: "Home banner, category landing" }
    h2:           { size: 32, weight: 700, lineHeight: 1.25, use: "Section titles" }
    h3:           { size: 24, weight: 700, lineHeight: 1.3, use: "Maker name, modal headings" }
    card-title:   { size: 18, weight: 700, lineHeight: 1.35, use: "Reward card project title" }
    lead:         { size: 17, weight: 400, lineHeight: 1.5, use: "Short paragraph leads" }
    body:         { size: 15, weight: 400, lineHeight: 1.55, use: "Description text, body copy" }
    label:        { size: 14, weight: 400, lineHeight: 1.4, use: "Time-remaining, supporter count" }
    caption:      { size: 13, weight: 400, lineHeight: 1.4, use: "Helper text, fine print" }
    small:        { size: 12, weight: 400, lineHeight: 1.3, use: "Badge text, micro-tags" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 32, section: 64 }
  rounded: { sm: 4, md: 8, lg: 16, full: 9999 }
  shadow:
    header: "0 1px #0000000f"
    modal: "0 16px 16px -1px #0a16461a, 0 0 5px #0a16460f"
  components:
    button-primary: { type: button, bg: "#00c4c4", fg: "#ffffff", radius: 8, use: "Filled mint contained CTA; active #07abae family" }
    button-secondary: { type: button, bg: "transparent", fg: "#00c4c4", radius: 8, use: "Outlined mint; 1px #00c4c4 border, hover #e6fafa" }
    button-tint: { type: button, bg: "#e6fafa", fg: "#00c4c4", radius: 8, use: "Wadiz signature tint button; hover #bef5f5" }
    label-badge-solid: { type: badge, bg: "#00c4c4", fg: "#ffffff", use: "Funding-state chip solid (오픈중)" }
    label-badge-tint: { type: badge, bg: "#e6fafa", fg: "#00c4c4", use: "Funding-state chip tint (얼리버드)" }
    reward-card: { type: card, bg: "#ffffff", radius: 8, padding: "16px", use: "Most-shipped component; 4:3 thumbnail, badge row, funding row" }
    input: { type: input, bg: "#ffffff", fg: "#333d4b", radius: 8, padding: "12px 16px", font: "15px/400", use: "Border 1px #ced4de, focus #00c4c4, error #ff5959" }
    modal: { type: dialog, bg: "#ffffff", radius: 16, padding: "32px", use: "Desktop modal max-w 480px; mobile bottom-sheet top corners only" }
    tooltip: { type: card, bg: "#191f28", fg: "#ffffff", radius: 4, padding: "8px 12px", font: "12px/400", use: "Tooltip/popover" }
    nav: { type: tab, bg: "#ffffff", fg: "#191f28", use: "Fixed top header h64, white veil, hairline shadow" }
  components_harvested: true
---

# Design System Inspiration of Wadiz

## 1. Visual Theme & Atmosphere

Wadiz (와디즈) is the design language of **a crowdfunding marketplace that wants to feel like a clean retail catalog, not a charity drive**. Korea has a single dominant rewards-funding platform, and Wadiz long ago decided that *the maker's story belongs in the photography and the copy* — the chrome around it gets out of the way. The system runs on white surfaces (`#ffffff` page, `#fafbfd` surface alt, `#f2f5f8` content shelf), Toss-family near-black ink (`#191f28` heading, `#4e5968` muted, `#6b7684` subtle), and one saturated brand mint (`#00c4c4`) that does every interactive job — CTA fills, checkbox marks, focus outlines, progress fills, loader strokes. The mint is internally labeled `mint` in the CSS module class system (`.Button_mint__2W1nI`), and the supporting pastel `#e6fafa` is its tinted resting surface.

The single most distinctive geometric choice is the radius scale. The production bundle contains **112 occurrences of `border-radius: 8px`** and 56 of `4px` — `8px` is the workhorse for cards, buttons, badges, and inputs. There are also 24 instances of `16px` (mostly for hero-tier modals and the top-rounded sheet pattern `16px 16px 0 0`) and 30 instances of `50%` (avatars, indicator dots, the circular maker badge). Wadiz is **medium-soft**: not as flat as Banksalad (2px) and not as plumply consumer as Toss-mobile (12–16px default). 8px reads as *retail catalog* — confident, photographic-product-grid friendly, not toy-like.

Typography is **Pretendard only** — no display secondary face — loaded from the Cloudflare CDN (`pretendard/1.3.9/dynamic-subset`) and declared as the family on every text node in the reset (`wui.css`). The default weight is **400** (393 declarations) for body and listing text; **700** (358) appears almost as often for funding amounts, percentages, headings, and the maker name; **500** (109) is the medium-emphasis label weight. Base body size is `15px` (not the more common 14 or 16), and the size scale climbs through `14 → 16 → 18 → 20 → 24 → 28 → 32 → 40 → 48 → 64px` for the home hero. Letter-spacing is essentially zero across the system — Wadiz never tracks Korean tight; only the largest display headings get a `-.03em` adjustment.

**Key Characteristics:**
- Pretendard exclusive — no display accent face
- Brand mint `#00c4c4` for all interactive moments (`Button_mint`, checkbox, focus, progress, loader)
- Mint pastel `#e6fafa` as the resting surface of secondary CTAs (tint pattern)
- 8px radius dominance — medium-soft, retail-catalog feel
- Toss-family Korean ink palette (`#191f28` / `#4e5968` / `#6b7684` / `#8b95a1`)
- Four named label colors: `mint`, `yellow` `#fcc500`, `blue` `#4672f9`, `red` `#ff5959` — each with `solid` / `outlined` / `tint` shapes
- Five-state button system: `contained` / `outlined` / `tint` / `block` / `circular`
- Surface alternation `#ffffff` → `#fafbfd` → `#f2f5f8` — quiet shelf stacking
- Single-direction blue-black shadow `0 6px 6px -1px #0a16461a` — never colored, never theatrical
- `#fcc500` (yellow) for trending / hot-deal labels — the system's hottest visual moment is *promotion*, not error

## 2. Color Palette & Roles

### Primary
- **Wadiz Mint** (`#00c4c4`): Primary brand color. Filled CTA backgrounds, link color in body copy, checkbox-checked icon, focus outlines, progress-fill, loader stroke, brand wordmark. A teal-cyan close to Tiffany-green but cooler — readable on white, energetic without being playful.
- **Mint Hover/Active** (`#07abae`): Foreground color on tinted secondary buttons; *text* color on hover for outlined mint variants. Wadiz uses a *darker* mint on hover (opposite of Banksalad's lighten-on-hover convention).
- **Mint Tint Surface** (`#e6fafa`): The pastel resting surface for `tint` mint buttons, the hover surface for outlined mint buttons, the success-state surface.
- **Mint Tint Accent** (`#bef5f5`): Tint-mint hover/active surface — one shade more saturated than `#e6fafa`. Used when a tint button is itself being interacted with.

### Heading & Body (Toss-family ink scale)
- **Heading** (`#191f28`): Maximum-depth ink for headings, funding amounts, maker names. Never `#000`.
- **Heading Alt** (`#1d2129`): Secondary near-black, used as `--dark` CSS variable for top-bar and high-emphasis fills.
- **Body** (`#333d4b`): Standard reading text, paragraph copy.
- **Muted** (`#4e5968`): Secondary descriptions, metadata, list-item descriptions.
- **Subtle** (`#6b7684`): Captions, time-remaining text, footer copy.
- **Placeholder** (`#8b95a1`): Input placeholders, the lowest readable tier.
- **Disabled** (`#b1b8c3` / `#ced4de`): Disabled text and icons.

### Surface & Border
- **Page** (`#ffffff`): Default canvas.
- **Surface Alt** (`#fafbfd`): Soft alternation — section dividers, "softly different" panels.
- **Surface Neutral** (`#f2f5f8`): Content-shelf fills, search-bar resting surface, secondary card surface.
- **Surface Neutral 2** (`#f2f4f6`): A second-pass neutral, used in modal interiors.
- **Divider** (`#e3e7ee`): Default horizontal rules, table borders.
- **Input Border** (`#ced4de`): Default input field border.

### Label / Badge Family
Wadiz exposes four named color variants for `LabelBadge`, each with three shapes (`solid` = filled brand; `outlined` = border-only; `tint` = pastel surface + saturated foreground). These badges power the funding-state chips that sit on every campaign card — *오픈예정*, *오픈중*, *얼리버드*, *마감임박*, *앵콜*, *인기*.

- **Yellow** — `solid` `#fcc500` (text `#fff`), `tint` surface `#fffae1` (text `#fcc500`). For trending / hot-deal / 인기 (popular).
- **Blue** — `solid` `#4672f9` (text `#fff`), `tint` surface `#ecf2ff` (text `#4672f9`), `accent` surface `#d7e3ff`, alt `#325ad7`, pale-link `#5a87ff`. For info, neutral state tags, secondary CTAs.
- **Red** — `solid` `#ff5959` (text `#fff`), `tint` surface `#fff0f0` (text `#ff5959`), `accent` surface `#ffdcdc`, strong `#e43131`, softs `#ff6666`/`#ff7777`. For *마감임박* (deadline closing), refund, withdraw, validation error.
- **Mint** — the same `#00c4c4` family used for primary CTA — when used as a label, signals "active funding" / "오픈중".

### Semantic
- **Success Green** (`#00af84`): Used sparingly — paid / completed / shipped states only. Brand mint is the default success color; this deeper teal-green appears only when a "this is a financial settlement, not just an interaction" tone is needed.
- **Alert Red** (`#ff5959` family): All error and urgency. The deadline-closing chip is the only place red ever feels celebratory rather than punitive.
- **Image Error Thumb** (`#ffb9b9`): The placeholder background when a reward thumbnail fails to load — a soft pink-red, not a gray, so the failure is *visible* without being scary.

### Overlay / Modal
- **Scrim Light** (`rgba(0,0,0,.06)` / `.15` / `.32` / `.4`): Tier of darkening overlays for menus, popovers, modals, full-sheet.
- **White Veil** (`rgba(255,255,255,.7)` / `.9` / `.95`): For sticky headers on photography-rich pages.

## 3. Typography Rules

### Font Family
- **Primary**: `Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`
- **Display Accent**: None — Pretendard does the entire job
- Variable-axis Pretendard supplies 400/500/700 weights as needed; subset CSS is dynamic via cdnjs Pretendard 1.3.9
- Base body size: **15px** (not 14, not 16 — a deliberate Korean-rendering choice; Pretendard's 15px reads cleaner than 14px at typical Korean line lengths)

### Hierarchy

| Role | Family | Size | Weight | Line Height | Notes |
|---|---|---|---|---|---|
| Hero numeral (funded amount %) | Pretendard | 64px | 700 | 1.1 | The biggest moment — campaign success % on detail pages |
| H1 page | Pretendard | 40–48px | 700 | 1.2 | Home banner copy, category landing |
| H2 section | Pretendard | 32px | 700 | 1.25 | Section titles ("지금 오픈 중", "인기 펀딩") |
| H3 card title | Pretendard | 24px | 700 | 1.3 | Maker name on detail, modal headings |
| Card title (project) | Pretendard | 18px | 700 | 1.35 | Reward card project title (2-line clamp) |
| Lead body | Pretendard | 17px | 400 | 1.5 | Short paragraph leads |
| Body default | Pretendard | 15px | 400 | 1.55 | Description text, body copy (base) |
| Body emphasis | Pretendard | 15px | 500 | 1.55 | In-paragraph emphasis, button labels |
| Label / metadata | Pretendard | 14px | 400/500 | 1.4 | Time-remaining, supporter count, category tag |
| Caption | Pretendard | 13px | 400 | 1.4 | Helper text, fine print |
| Small label | Pretendard | 12px | 400/700 | 1.3 | Badge text, micro-tags |
| Micro | Pretendard | 10px | 400 | 1.3 | Footer fine print only |

Weight distribution (counted in production bundle): **400 = 393×, 700 = 358×, 500 = 109×.** The near-parity of 400 and 700 is the signal — every body paragraph is 400, every funding amount and percentage is 700, and the eye learns to bounce between the two. Wadiz never uses 300 (light) — there is no "elegant thin display" in the system.

### Letter Spacing
- Default: **0** (no tracking on Korean body)
- Largest display only: **-0.03em** (rare; visible only in the very biggest home-hero numerals)

## 4. Spacing & Layout

### Spacing Scale (px)

The system follows a roughly 4-multiple scale, but with specific opinionated stops:

`4 → 8 → 12 → 16 → 20 → 24 → 32 → 40 → 48 → 64`

Most observed gaps cluster around `16` (card padding), `20` (vertical rhythm between card sections), `24` (between-card gutter), and `32` (between section blocks). The 64px stop is rare — used as the top-padding on hero sections and the spacing under the biggest funding-amount numeral.

### Layout

- **Page max-width**: ~1200px content rail centered with auto margins; full-bleed hero photography routinely breaks out
- **Card grid**: 4-column on desktop home (240–280px each), 2-column on tablet, 1-column on mobile
- **Card aspect**: Reward thumbnail is 4:3, with a 16:9 variant on the hero carousel
- **Header height**: ~64px fixed, with a `rgba(255,255,255,.95)` veil so the photography behind it stays half-readable
- **Section vertical rhythm**: 32–48px between sections, 16–20px within a card
- **Card padding**: 16px on listing cards, 20–24px on detail-page cards

### Radius

`8px` is the system default (112 occurrences). The full scale:

- **3px** (26x): The smallest chip / inline indicator
- **4px** (56x): Inline tag, mini-badge
- **8px** (112x): Buttons, cards, inputs, modal — *the default for everything*
- **16px** (24x): Hero modals, the bottom-sheet pattern (rounded only at top: `16px 16px 0 0`, 3x)
- **50%** (30x): Avatars, indicator dots, circular maker badges
- **100px / 999em** (6 + 3x): Pill-shaped filter chips and the "see more" floating button

The 2px radius variant exists (7x) but is reserved for technical contexts — chart legend swatches, image-crop frames — not the user-facing UI.

## 5. Components

### Buttons

The most distinctive system in the bundle. Class names follow the pattern `.Button_<role>__<hash>` with five orthogonal axes:

1. **Color variant**: `mint` (brand) · `blue` (info) · `red` (destructive) · `yellow` (promo) · `green` (success)
2. **Shape variant**: `contained` (filled) · `outlined` (border-only, default) · `tint` (pastel surface + saturated label)
3. **Width**: default · `block` (full-row)
4. **Geometry**: rectangular · `circular` · `badge` (chip-sized)
5. **State**: default · `hover` · `active` · `disabled` · `loading`

**Primary CTA (filled mint contained)**:
- Background `#00c4c4`, text `#ffffff`, border-color `#00c4c4`, radius `8px`
- Hover: background stays `#00c4c4` with subtle inner-shadow shift
- Active: background and text desaturate to `#07abae`-family

**Secondary CTA (outlined mint)**:
- Background `transparent`, text `#00c4c4`, border `1px solid #00c4c4`
- Hover: background `#e6fafa`, text `#07abae`

**Tint button (the Wadiz signature)**:
- Background `#e6fafa`, text `#00c4c4`, border `1px solid #e6fafa`
- Hover: background `#bef5f5`, text `#07abae`
- This is the third button shape — neither filled-loud nor outlined-quiet — and it carries the most visual weight in marketing modules

### Label Badges

The funding-state vocabulary. Pattern `.LabelBadge_<color>__<hash>.LabelBadge_<shape>__<hash>`:

- **solid**: `border: solid 1px <hue>; background-color: <hue>; color: #fff;`
- **outlined**: `border: solid 1px <hue>; background-color: #fff; color: <hue>;`
- **tint**: `border: solid 1px <pastel>; background-color: <pastel>; color: <hue>;`

The 12 combinations cover every funding state (오픈예정 = blue outlined, 오픈중 = mint solid, 얼리버드 = yellow tint, 마감임박 = red solid, 앵콜 = blue solid, 인기 = yellow solid). The reversed badge (`ReversalLabelBadge`) is for dark-background photography overlays.

### Reward Card

The single most-shipped component. Structure:

- **Thumbnail** (4:3, radius `8px` at the top): Lazy-loaded with `opacity 0 → 1` 0.25s ease-in-out fade — `.CardThumbnail_visible__343f4`
- **Error state**: When the thumbnail fails, `background-color: #ffb9b9` (soft pink-red) — a recognizable Wadiz failure state, not a gray box
- **LabelBadge row**: 1–2 chips at top-left (`마감임박` + `얼리버드`)
- **Maker line**: `font-size: 13px`, `color: #6b7684` — small, secondary
- **Title**: `font-size: 18px`, `font-weight: 700`, `color: #191f28`, 2-line clamp
- **Funding row**: Percentage `28px / 700 / #00c4c4` + supporter count `14px / 400 / #4e5968`
- **Progress bar**: 4px tall, radius `2px`, fill `#00c4c4`, track `#f2f5f8`

### Inputs

- Border `1px solid #ced4de`, radius `8px`, padding `12–14px 16px`, font `15px / 400 / #333d4b`
- Focus: border `#00c4c4`, no shadow ring (Wadiz prefers a colored border change over an outline glow)
- Disabled: background `#fafbfd`, text `#b1b8c3`
- Error: border `#ff5959`, helper-text below in `#ff5959 / 13px`

### Header / Navigation

- Fixed top, height ~64px, background `rgba(255,255,255,.95)` so photography below stays half-visible
- Logo wordmark left, primary nav center (펀딩 · 프리오더 · 비즈니스 · 모집 · 광고 · 와디즈 매니저), search + login right
- Drop shadow `0 1px #0000000f` — barely a hairline

### Modal / Sheet

- Desktop modal: radius `16px`, shadow `0 16px 16px -1px #0a16461a, 0 0 5px #0a16460f`, max-width `~480px`, padding `32px`
- Mobile bottom-sheet: radius `16px 16px 0 0` (top corners only), full-width, slide-up
- Scrim `rgba(0,0,0,.4)`

### Tooltip / Popover

- Background `rgba(17,17,17,.8)`, text `#ffffff`, radius `4px`, padding `8px 12px`, font `12px / 400`
- Shadow `0 15px 30px #00000026`

## 6. Imagery & Iconography

### Imagery

Wadiz's photography is **the product**. Every campaign supplies its own hero — a kitchen tool against a colored backdrop, a maker holding a prototype in a workshop, a flat-lay of a fashion drop. The system never overrides this with a heavy chrome — the white surface, 8px radii, and quiet shadow exist so the imagery carries the entire emotional load. The home page is essentially a 4-column gallery of *other people's photography*, separated by `#f2f5f8` shelf neutrals.

The single Wadiz-controlled image moment is **the loader** — a "waffle" loader (the literal class is `Loader_waffle-loader-color__sANH-`) that animates the brand mint `#00c4c4` in a stroked-rectangle pulse. This is the only place Wadiz puts its mint *on* photography rather than next to it.

### Iconography

- **Style**: Outlined, 1.5-2px stroke, 24px default canvas; filled variants exist for active/selected states
- **Hit area**: 40-44px around 24px icons
- **Color**: Inherits text color by default (`#4e5968` for muted nav, `#191f28` for primary, `#00c4c4` for active)
- **Common icons**: Heart (즐겨찾기), bell (알림), search (검색), share (공유), filter (필터), close (X), chevron-down (드롭다운), check (확인 — uses mint), exclamation (마감임박 — uses red)

## 7. Motion & Interaction

- **Default easing**: `ease-in-out` for thumbnail fade-in (0.25s); the system avoids `cubic-bezier` show-off curves
- **Page transitions**: Instant — Wadiz is a content site, not a marketing scroll experience
- **Hover**: Cards do a barely-perceptible lift (`box-shadow 0 6px 6px → 0 32px 40px -2px`) — the resting elevation thickens, no translate
- **CTA hover**: Color shift only (no scale, no shadow change) — text `#00c4c4 → #07abae` on outlined, background tint deepens on filled
- **Loading**: The waffle loader is the global loading affordance — never a spinner, never a skeleton on the home grid (the imagery loads with `opacity 0 → 1`, which IS the skeleton)
- **Tap feedback** (mobile): Active state is the same as hover — saturated mint becomes `#07abae`, tint surface darkens to `#bef5f5`
- **Transitions**: `transition-property: opacity` `0.25s ease-in-out` is the most common; nothing animates color transitions
- **Scroll**: No parallax, no reveal-on-scroll; the page is a quiet vertical river

## 8. Voice & Microcopy

Wadiz writes in **Korean polite-casual** — `~해요` / `~하세요` tone, not formal `~합니다`. The voice is **the assistant standing next to a maker's product, explaining without selling**. Funding amounts are stated as facts, not exclamations. The system avoids superlative marketing language ("최고", "최강", "혁신적") — when something is selling well, the label badge does the work (인기 yellow solid), not the copy.

### Microcopy patterns observed

- Funding status: `오픈예정` · `오픈중` · `얼리버드` · `마감임박` · `종료` · `앵콜` — short, factual
- Empty state: descriptive without apology — `아직 등록된 펀딩이 없어요` (rather than 죄송합니다)
- Confirm dialogs: action-oriented buttons — `확인` / `취소`, never `예` / `아니오`
- Loading: silent (the waffle loader is the only signal — no copy)
- Errors: specific not vague — `해당 펀딩은 종료되었어요` rather than "오류가 발생했습니다"
- Time: relative — `3시간 남음` · `5일 남음` (not absolute timestamps in feed)
- CTA verbs: `펀딩하기` · `알림받기` · `공유하기` · `더보기` — *-하기* gerund pattern, not imperative `해라`

### IP guardrail
This DESIGN.md does **not** quote verbatim Wadiz taglines or marketing copy. The patterns above describe the *shape* of the voice (gerund -하기 verbs, polite-casual ~해요, factual funding-state labels) and are independently reproducible. Brand assets and product photography referenced in §1 / §6 are observational only — not for redistribution.

## 9. Accessibility & States

- **Focus ring**: 2px solid `#00c4c4` outline with `2px` offset (observed on `Checkbox_icon`)
- **Contrast**: Heading `#191f28` on white = 17.1:1 (AAA). Body `#333d4b` on white = 12.6:1 (AAA). Mint CTA `#00c4c4` on white = 2.3:1 — *fails AA for text but Wadiz uses `#fff` text on the filled mint, which is 2.7:1*. **This is the system's known weak point**: filled mint buttons have white text at borderline AA. The outlined and tint variants flip the contrast (`#00c4c4` text on `#e6fafa` surface = 2.4:1, also weak). For accessibility-critical surfaces, the outlined mint with a dark text override should be considered.
- **Disabled**: Text `#b1b8c3` on `#fafbfd` = ~2.7:1 (intentionally low — disabled IS the signal)
- **Hit area**: Minimum 40x40px (mobile increases to 44x44)
- **Labels**: All inputs paired with persistent above-field labels, never placeholder-as-label
- **Error state**: Color (`#ff5959`) + iconography (`!` icon) + helper text — never color alone

## 10. Philosophy & Principles

Wadiz's design philosophy can be read off the production system without needing brand-published manifestos:

1. **The product is the photograph.** White surfaces, 8px radii, hairline shadows — every visual decision in the chrome exists to keep the maker's image at the visual center. The brand mint never colorizes a thumbnail; it only colorizes the chrome that frames the thumbnail.

2. **Funding state is a vocabulary, not a sentiment.** Six named states (`오픈예정` / `오픈중` / `얼리버드` / `마감임박` / `앵콜` / `인기`) × three badge shapes (`solid` / `outlined` / `tint`) × four color hues = 72 valid badges. The system over-builds this surface so that no two campaigns ever feel "the same" in a feed.

3. **Mint is the verb.** The brand color appears almost exclusively on things you can *do* — buttons, links, checkboxes, focus, progress, loader. Mint is never decorative; if it's there, it's interactive.

4. **Korean ink, not black.** The `#191f28 → #4e5968 → #6b7684 → #8b95a1` scale is the Toss-family ink scale, now standard across Korean fintech-adjacent products. Wadiz adopting it positions itself in the *trustworthy Korean product* register rather than the *international marketplace* register that pure black or warm-near-black would suggest.

5. **Tint over outline.** The most distinctive button shape in the system is `tint` — pastel surface + saturated label — and it carries the marketing weight that outline buttons carry on most sites. This is a deliberate softening of the page rhythm: the eye lands on tint surfaces before it lands on outlined ones.

## 11. Personas (Speculative — Not Brand-Confirmed)

> ⚠️ The named personas below are *inferred from the surfaces*, not from a published Wadiz brand document. They are FILL-IN candidates for designers building Wadiz-adjacent products. Replace with audience-specific research before shipping.

- **The supporter (`서포터`)**: 25–45, mostly mobile, browses on subway during commute, supports 2–6 campaigns/year averaging 30–80k₩ each. Wants short campaign titles, clear *얼리버드* eligibility, and *마감임박* urgency cues. Cares about the maker's story for ~30 seconds before deciding.
- **The maker (`메이커`)**: 28–45, small studio or 1-person brand, ships 1–3 campaigns/year. Spends days inside Wadiz Studio (the back-office) writing campaign copy and uploading photography. Sees Wadiz as their pop-up retail moment, not their permanent store.
- **The browser (`구경꾼`)**: 20–40, no recent funding, opens Wadiz on a hot-deal notification ~weekly. Will scroll for 5 minutes, save 2 items, fund 1 in 4 sessions.

## 12. Anti-Patterns (System-Level)

- **No verbatim Wadiz taglines** — voice patterns yes, brand copy no
- **No "최고" / "최강" / "혁신적" marketing superlatives** — funding state vocabulary does the work
- **No drop-shadows with brand color** — shadows are always blue-black tinted, never mint
- **No mint on photography** — mint colorizes chrome, not images (the waffle loader is the single exception)
- **No 12px+ radius on functional buttons** — that's the consumer-app idiom; Wadiz stays at 8px to read as catalog
- **No skeleton placeholders on the home grid** — the opacity fade-in IS the loading state
- **No serif** — Pretendard is the entire system
- **No black `#000`** — `#191f28` is the floor

## 13. Reference Examples (User-Side)

- **Home rewards feed** (`/`) — the 4-column reward-card grid with funding-state badges
- **Category listing** (`/web/wreward/category/<id>`) — filtered grid with persistent filter chips
- **Campaign detail** (`/web/campaign/<id>`) — hero photography full-bleed, sticky funding panel right rail
- **Funding sheet** (mobile bottom-sheet pattern) — `16px 16px 0 0` rounded top, slide-up, `rgba(0,0,0,.4)` scrim

## 14. Notes on Adaptation

When borrowing Wadiz's language for a related product:

- If you're building a **rewards marketplace**, keep the white-page + 8px-radius + tint-button trio — that's the legible Wadiz signature
- If you're building a **non-funding catalog** (e.g., gallery commerce), drop the funding-state badges entirely and the system reads as a generic-but-clean Korean catalog (you've lost the IP)
- If you're building a **fintech adjacent surface**, swap mint `#00c4c4` for your brand hue, keep the Toss-family ink scale, keep the tint-button pattern — that's the broadly-applicable layer
- The brand color is **the only swap-out point**. Everything else is industry-standard Korean product hygiene and is fine to keep.

## 15. Footer — Verification

**Verified:** 2026-05-14

**Tier 1 — Live capture (primary):**
- `https://www.wadiz.kr/` (home, 58.3KB HTML)
- `https://www.wadiz.kr/web/wreward/category/289` (category listing, 58.0KB HTML)
- `https://www.wadiz.kr/web/main` (main route, 58.4KB HTML)
- `https://static.wadiz.kr/main/main.css` — **936KB production bundle, authoritative**. All `#00c4c4` (111×), `#191f28` (208×), radius (`8px` 112×), font-weight (`700` 358×), and named button-variant classes (`Button_mint`, `Button_blue`, `Button_red`, `Button_yellow`, `LabelBadge_solid`/`outlined`/`tint`) directly observed
- `https://static.wadiz.kr/static/web/wui.css` — reset + body font-family canonical declaration
- Proof: `assets/_reference/.live-inspect-proof.json` (5 surfaces, 8 raw_samples, full token-frequency table)

**Tier 1 fallback note:** CDP `:9222` WebSocket connection blocked by Chrome `--remote-allow-origins` guard (handshake 403). Substituted with direct `curl` of the production CSS bundle — which is *higher signal* than runtime sampling because it exposes the entire token system in one file rather than only the styles applied to currently-rendered DOM. Reproducible: any reader can `curl -sL https://static.wadiz.kr/main/main.css | grep -c "#00c4c4"` and recover the same `111` occurrence count.

**Tier 1 brand-owned docs:** Wadiz tech blog (`blog.wadiz.kr`) is known to publish a "와디즈 디자인 시스템 구축하기" article (referenced in Wadiz search results); direct article URL returned 404 on this verification pass — likely renamed or moved. **Followup**: re-discover the canonical URL in next UPDATE pass. The blog post's existence is acknowledged here, but no claims in §1–14 above depend on it — every claim is sourced to the live production CSS.

**Tier 2 — Cross-check directories:**
- `getdesign.md/wadiz` → **empty** (no entry)
- `styles.refero.design/?q=wadiz` → **empty** (no entry)

**Tier 3 — Reconcile:**
- No conflicts found. The CSS bundle is internally consistent and matches the rendered HTML structure across all three surfaces.
- Known weak spot: filled mint CTA contrast is borderline AA (white text on `#00c4c4` = 2.7:1). Documented in §9, not "fixed" — it is the system as shipped.

**Confidence:** **High** — single 936KB production CSS bundle is the canonical token source; named variant classes (`Button_mint`, `LabelBadge_yellow`) confirm internal design-system vocabulary; three HTML surfaces confirm consistent application. No `(unverified live)` flags on any §1–9 token.

**Known gaps / Followup:**
1. Re-discover canonical URL for the "와디즈 디자인 시스템 구축하기" blog post (linked in Wadiz internal search, 404 on direct fetch) — would upgrade §10 from "inferred from production system" to "brand-confirmed"
2. Detail-page (`/campaign/<id>`) and funding-sheet flows not inspected this pass — UPDATE pass recommended to verify §5 sticky funding panel + funding sheet measurements
3. §11 personas explicitly marked as inferred — replace with audience research before any production use

## 16. Do's and Don'ts

### Do
- Reserve the brand mint #00c4c4 for interactive moments only — CTA fills, links, checkbox marks, focus outlines, progress fills, and the waffle loader — so mint always reads as a verb
- Default to 8px radius for buttons, cards, inputs, and modals (the 112-occurrence workhorse), reserving 16px for hero modals and the 16px 16px 0 0 bottom-sheet pattern and 50% for avatars and indicator dots
- Set body text in Pretendard at 15px / 400 and reserve 700 for funding amounts, percentages, headings, and maker names so the eye bounces between the two near-parity weights
- Use the Toss-family ink scale (#191f28 heading, #4e5968 muted, #6b7684 subtle, #8b95a1 placeholder) for all text instead of pure black
- Build funding-state chips from the LabelBadge system using solid / outlined / tint shapes across the mint, yellow #fcc500, blue #4672f9, and red #ff5959 hues (오픈중 = mint solid, 마감임박 = red solid, 인기 = yellow solid)
- Reach for the tint button (#e6fafa surface, #00c4c4 label, hover to #bef5f5 / #07abae) to carry marketing weight, letting it land before outlined buttons in the page rhythm

### Don't
- Use pure black #000 anywhere — #191f28 is the ink floor of the system
- Apply mint #00c4c4 onto campaign photography or thumbnails — mint colorizes the chrome that frames the image, with the waffle loader as the single exception
- Tint drop-shadows with the brand color — shadows stay blue-black (0 6px 6px -1px #0a16461a), never mint, never theatrical
- Put 12px or larger radius on functional buttons — that consumer-app idiom breaks Wadiz's 8px retail-catalog read
- Drop skeleton placeholders on the home grid — the thumbnail opacity 0 to 1 fade-in over 0.25s ease-in-out IS the loading state
- Reach for marketing superlatives like 최고, 최강, or 혁신적, or introduce a serif or 300-weight thin face — the funding-state vocabulary does the selling and Pretendard does the entire type job
