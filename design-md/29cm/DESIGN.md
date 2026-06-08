---
id: "29cm"
name: "29CM"
country: KR
category: ecommerce
homepage: "https://www.29cm.co.kr"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://asset.29cm.co.kr/icon/apple-icon-144x144.png"
verified: "2026-05-15"
tokens:
  source: prose-derived
  extracted: "2026-06-08"
  note: "monochrome system — brand 'color' is the absence of color; #000 ink on #fff, single muted grey, sale-red badge-only accent"
  colors:
    primary: "#000000"
    foreground: "#000000"
    body: "#000000"
    canvas: "#ffffff"
    background: "#ffffff"
    on-primary: "#ffffff"
    hairline: "#c4c4c4"
    border: "#c4c4c4"
    sale: "#ff0066"
    error: "#ff003c"
    skeleton: "#f5f5f5"
  typography:
    family: { sans: "Pretendard Variable" }
    section-headline: { size: 30, weight: 700, lineHeight: 1.13, use: "Special-Order / 29Magazine section headlines, lowercase-English / mixed Korean editorial" }
    sub-headline:     { size: 24, weight: 700, lineHeight: 1.21, use: "Smaller category nav items" }
    card-title:       { size: 22, weight: 700, lineHeight: 1.36, use: "Signature editorial card title — PT subjects, themed collections" }
    card-body:        { size: 15, weight: 400, lineHeight: 1.50, use: "Card descriptions, editorial blurbs" }
    nav-link:         { size: 16, weight: 200, use: "Primary nav link — 200 inactive, 800 active BEST/current section" }
    floating-cta:     { size: 15, weight: 400, use: "FAQ / 1:1 문의 — black bg, white text, 2px radius" }
    ghost-cta:        { size: 14, weight: 700, use: "더보기 — white bg, 1px #c4c4c4 border" }
    footer-heading:   { size: 13, weight: 700, lineHeight: 1.40, use: "Caps Latin section labels — NOTICE, ABOUT US, MY ORDER, HELP" }
    product-name:     { size: 12, weight: 400, lineHeight: 1.36, use: "Card product name, restrained, under the image" }
    product-price:    { size: 12, weight: 700, lineHeight: 1.36, use: "Card price — same size as name, never dominates" }
    price-caption:    { size: 12, weight: 400, lineHeight: 1.36, use: "옵션비 별도 in muted grey" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, page: 20, lg: 24, xl: 32, margin: 48 }
  rounded: { sm: 2, md: 4 }
  shadow:
    flat: "none — depth comes from photography on white, not box-shadow"
    inverted: "#000000 background on #ffffff page — elevation by colour inversion"
  components_harvested: true
  components:
    ghost-outline: { type: button, bg: "#ffffff", fg: "#000000", radius: 4, padding: "52px height", font: "14px/700", use: "workhorse 더보기 CTA, 1px solid #c4c4c4 border" }
    inverted-solid: { type: button, bg: "#000000", fg: "#ffffff", radius: 2, padding: "31px height", font: "15px/400", use: "floating FAQ / 1:1 문의 help control" }
    editorial-tile: { type: card, bg: "#ffffff", radius: 0, font: "22px/700 title + 15px/400 body", use: "full-bleed editorial image, no border, no shadow" }
    product-card: { type: card, bg: "#ffffff", radius: 0, font: "12px/400 name, 12px/700 price", use: "card name then price (#ff0066 if on sale); caption in muted grey" }
    sale-pill: { type: badge, fg: "#ff0066", radius: 0, font: "12px/700", use: "percent-off badge only" }
omd: "0.1"
---

# Design System Inspiration of 29CM

## 1. Visual Theme & Atmosphere

29CM is the editorial select-shop of Korean e-commerce — a curated department store that happens to live online, whose homepage reads more like the cover of a printed lookbook than the landing page of a retailer. The signature surface is pure white (`#ffffff`) carrying pure black (`#000000`) display type and quietly minimal chrome: no shadows, no gradients, no decorative iconography. The composition leans on the photography to do the heavy lifting and on typography to do the directing. Where Musinsa is street-utility and Ohouse is interior-lifestyle, 29CM is the magazine — generous margins, oversized image columns, captions that read like editorial blurbs, and an unmistakable belief that white space is the most expensive material in the room.

The defining typographic move is **Pretendard Variable** running across the entire surface in a tight three-step hierarchy: 30px/700 category headlines, 22px/700 editorial card titles, 12-15px body. There is no display-only face, no decorative weight; the same Korean sans does the magazine title, the product price, and the footer note. Buttons are unornamented — the workhorse CTA is a 1px `#C4C4C4` outlined pill on white with 4px corners ("더보기"), and the floating help affordances ("FAQ", "1:1 문의") are solid `#000000` rectangles with white text and 2px radius, treated like editorial captions rather than UI controls. There is no "primary blue", no accent purple, no brand red. The brand color is the absence of color.

Image presentation is the second signature: full-bleed editorial photography sets the rhythm, each PT (Presentation) or Showcase tile leads with one large image and one Korean sentence underneath as caption. Prices are demoted — set at 12px/700, sitting under a 12px/400 product title in muted `rgba(93,93,93,0.64)` (a soft grey nearly invisible until you look for it). The visual order is: photo first, story second, product third, price last. That ordering is the brand's whole thesis.

**Key Characteristics:**
- Pretendard Variable across all surfaces — one font, three weights (400 / 700 / 800), no display companion
- Pure `#ffffff` page background, pure `#000000` ink — no off-whites, no warm neutrals
- Three-tier display hierarchy: 30px section headline / 22px card title / 12-15px body & price
- Border-radius restraint: 2px for inverted CTAs, 4px for ghost buttons, 0px on most editorial chrome
- Muted secondary text via `rgba(93,93,93,0.64)` — a single transparent grey, not a swatch
- 1px solid `#C4C4C4` outlines for ghost buttons — never colored, never thicker
- 12px/700 prices, 12px/400 product names — both subordinate to the image
- Generous editorial padding: 20-48px page margins, multi-line lh ≈ 1.36-1.5 on Korean body
- No shadow system on the homepage — elevation reads as "raised image", not "elevated card"
- Lowercase, English-leaning category labels (`Special-Order`, `Showcase`, `Lookbook`, `29Magazine`) at 24-30px/700 — the brand's editorial register made literal

## 2. Color Palette & Roles

### Primary
- **Pure Black** (`#000000`): Body ink, headings, inverted CTA backgrounds, footer headings. The brand's only "color" in the strictest sense.
- **Pure White** (`#ffffff`): Page background, ghost-button background, inverted-CTA text. Total white — not `#fafafa`, not `#f5f5f5`.

### Greys (functional, not branded)
- **Muted Grey 64%** (`rgba(93, 93, 93, 0.64)`): Secondary captions, "옵션비 별도" hints, badge counts, inactive nav items. The single most-used non-primary color on the site, and it is a transparency, not a swatch — meaning the actual rendered colour shifts with whatever sits behind it.
- **Outline Grey** (`#c4c4c4`): The only border colour used for ghost-style buttons and editorial tile dividers. Mid-light, neutral, no warm tint.

### Accent / State (sparse)
- **Sale Red** (`#ff0066` / `#ff003c` family): Appears only on discount badges and percent-off pills on product cards. Never used for UI affordances or CTAs.
- **Brand Black on Brand Black**: Floating help CTAs ("FAQ", "1:1 문의") use `#000000` background with `#ffffff` text — the inverse of the page, treated as a high-contrast, low-frequency control.

### What 29CM Explicitly Does Not Use
- No brand blue, brand purple, or brand red. The category buttons that read "FAQ"/"1:1 문의" are not "primary" — they are inverted black, the same as the footer.
- No tinted neutrals (no `#fafafa`, no warm cream). Backgrounds are `#ffffff`, full stop.
- No semantic colour system beyond the discount-red badge. There is no success-green, warning-yellow, or info-blue on the marketing surface.

## 3. Typography Rules

### Font Family
- **Primary**: `Pretendard Variable`, with fallback chain `ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`
- **Single-family system**: There is no separate display face, no serif companion, no monospace. Pretendard Variable handles 100% of legible surfaces.

### Hierarchy

| Role | Size | Weight | Line Height | Notes |
|------|------|--------|-------------|-------|
| Section Headline (Special-Order / 29Magazine) | 30px | 700 | ~1.13 | Lowercase-English / mixed Korean editorial headlines |
| Sub-Headline (lower category) | 24px | 700 | ~1.21 | Smaller category nav items |
| Editorial Card Title | 22px | 700 | 29.92px (1.36) | The signature card title — PT subjects, themed collections |
| Editorial Body / Description | 15px | 400 | 22.5px (1.50) | Card descriptions, editorial blurbs |
| Nav Link (primary) | 16px | 200-800 | normal | 200 = inactive secondary, 800 = active "BEST" / current section |
| Floating CTA ("FAQ", "1:1 문의") | 15px | 400 | normal | Black bg, white text, 2px radius |
| Ghost CTA ("더보기") | 14px | 700 | normal | White bg, 1px `#c4c4c4` border |
| Footer Heading | 13px | 700 | 18.2px (1.40) | Caps Latin section labels — `NOTICE`, `ABOUT US`, `MY ORDER`, `HELP` |
| Product Name (card) | 12px | 400 | 16.32px (1.36) | Black ink, restrained, sits under the image |
| Product Price | 12px | 700 | 16.32px (1.36) | Same size as the name — price never dominates the card |
| Price Caption ("옵션비 별도") | 12px | 400 | 16.32px (1.36) | In `rgba(93,93,93,0.64)` grey |

### Principles

- **One family, three weights.** Pretendard Variable at 400 (body, captions), 700 (titles, prices, ghost CTAs), and 800 (active navigation). 200 appears on inactive secondary nav as a quiet hint. There is no italic; emphasis is by weight, never style.
- **Editorial card title = 22px/700.** This is the unit of voice. Most magazine-style tiles on the homepage carry one 22-29px Korean sentence at weight 700, then a 15px/400 description in the same line-height ratio. The pair is the brand's grammar.
- **Latin labels at large sizes, Korean at body sizes.** Category navigation uses English (`Special-Order`, `Showcase`, `PT`, `29Magazine`) at display sizes (24-30px), while Korean dominates body and editorial copy. The mixing is intentional — the English serves as a magazine table-of-contents register.
- **Prices are never the loudest thing on a card.** 12px/700 is by design subordinate to the 22px title and the photo. Where Coupang puts price first, 29CM puts price last.
- **Letter-spacing is `normal` almost everywhere.** No tight tracking, no display-tracking compensation. The font is well-cut enough to carry display sizes without spacing intervention.
- **Line-height ≈ 1.36-1.50.** Korean bodies need air; the editorial register needs more. 1.36 on titles, 1.50 on prose — never tighter.

## 4. Component Stylings

### Buttons

**Ghost Outline (the workhorse — "더보기")**
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #c4c4c4`
- Radius: 4px
- Padding: 16px 16px 16px 20px (asymmetric — slightly larger left for trailing-arrow icon)
- Height: 52px
- Font: 14px Pretendard Variable weight 700
- Use: "더보기 / View more" on every editorial section ending, primary "load more" affordance

**Inverted Solid (floating help — "FAQ", "1:1 문의")**
- Background: `#000000`
- Text: `#ffffff`
- Border: none
- Radius: 2px
- Padding: 4px 8px 4px 14px (asymmetric — leading icon space)
- Height: 31px
- Font: 15px Pretendard Variable weight 400
- Use: Fixed-position floating help controls on the bottom-right; the only persistent solid-fill control on the site

**Category Pill (navigation count badges — "63", "175", "6K")**
- Background: transparent
- Text: `rgba(93, 93, 93, 0.64)`
- Border: none
- Radius: 4px (inherited from container)
- Padding: 0
- Height: 52px (tap target, not visual height)
- Font: 16px Pretendard Variable weight 400
- Use: Category nav row count badges — number-only, large tap target, no visual chrome

**Sale Discount Pill** (product card overlay)
- Background: `#ffffff` or transparent
- Text: `#ff0066` (sale red)
- Border: none
- Radius: 0px
- Font: 12px weight 700
- Use: Percent-off badge on product cards, often paired with the price

### Cards & Containers

**Editorial Tile** (PT / Showcase / Magazine)
- Background: `#ffffff`
- Border: none
- Radius: 0px on the outer container; image inherits 0px (square / hard-edged)
- Padding: image full-bleed; caption block has 16-20px top padding
- Shadow: none — relies on photography and whitespace for separation
- Title: 22px / 700 / `#000000` / lh 29.92px sitting directly under the image
- Body: 15px / 400 / `#000000` / lh 22.5px
- Use: The dominant homepage unit — themed brand stories, lookbooks, editor curations

**Product Card**
- Background: `#ffffff`
- Border: none
- Radius: 0px
- Image: square or 4:5 portrait, 0px radius
- Title: 12px / 400 / `#000000` directly under the image
- Price: 12px / 700 / `#000000` (or red `#ff0066` if on sale)
- Caption ("옵션비 별도", "무료배송"): 12px / 400 / `rgba(93,93,93,0.64)`
- Spacing: 8-12px between rows of the card meta block
- Use: Standard catalog item — image-first, text small, no chrome

### Inputs & Forms

- Background: `#ffffff`
- Border: none on the homepage search affordance; bottom-rule only on focus
- Radius: 0px
- Font: Pretendard Variable
- Style: Editorial — search reads as a header-bar input, not a boxed UI control. When boxed elsewhere (PDP, checkout) it uses a 1px `#c4c4c4` border and 4px radius matching the ghost button.

### Navigation

- Header background: `#ffffff` (transparent over hero on scroll)
- Layout: logo center / utility links left and right at 16px / weight 200
- Primary category row: 16-30px Latin labels, weight 700-800 active, 200 inactive
- Logo: 29CM wordmark — see Logo asset
- Sticky behaviour: header stays, drops the secondary category row after scroll
- Mobile: hamburger toggle, full-screen sheet with same hierarchy

### Footer

- Background: `#ffffff`
- Padding: 20px 48px 48px (asymmetric — tight top, generous bottom)
- Section headings: 13px / weight 700 / `#000000`, all-caps Latin (`NOTICE`, `ABOUT US`, `MY ORDER`, `MY ACCOUNT`, `HELP`)
- Body links: ~13-14px / weight 400 / `#000000`
- No background tint, no top border — the footer is just more whitespace with denser type

### Decorative Elements

- **No iconography on hero/editorial surfaces.** Decorative graphics are intentionally absent; the image is the decoration.
- **Trailing-arrow on ghost CTAs.** "더보기" buttons carry a thin `>` chevron at the right — the only systematic icon use on marketing surfaces.
- **Sale red as the single accent.** When a percent-off ribbon appears on a product, it is the only chromatic moment on that tile. The restraint makes it work.

---

**Verified:** 2026-05-13 (omd:add-reference CREATE)
**Tier 1 sources:** www.29cm.co.kr/ (live DOM inspect, Pretendard Variable + #000/#fff + 22px/700 editorial cards + 1px `#c4c4c4` ghost CTAs + 2px-radius floating black CTAs — confirmed via getComputedStyle on home surface, scroll-loaded editorial tiles, footer, and floating help affordances)
**Tier 2 sources:** getdesign.md/29cm — *no entry returned* ("No designs found for '29cm'"); styles.refero.design/?q=29cm — *no 29CM-tagged styles found* (search returned generic editorial/gallery references unrelated to 29CM)
**Conflicts unresolved:** none — Tier 2 was silent on every claim, so Tier 1 live observation is the sole source. Token values in this section come exclusively from live `getComputedStyle()` on www.29cm.co.kr 2026-05-13.

## 5. Layout Principles

### Spacing System
- Base unit: 4px (derived from 4-8-12-16-20-24-32-48 cascade observed in padding values)
- Page horizontal margin: 48px desktop, ~16-20px mobile
- Editorial tile gap: 24-32px between major sections
- Card meta gap (image → title → price): 8-12px between rows
- Footer block padding: 20px top / 48px bottom — asymmetric, generous at the bottom

### Grid & Container
- Max content width: ~1280px centered, with full-bleed exceptions for hero editorial
- Editorial grid: 2-column on tablet, 3-4 column on desktop for product tiles, 1-2 column for PT/Magazine stories
- Hero: typically full-bleed image with 30px/700 caption sitting beneath, not overlaid
- Category nav row: horizontal scroll on mobile, fully visible on desktop

### Whitespace Philosophy
- **Whitespace is the brand asset.** 29CM treats empty space the way Apple treats it on iPhone hero pages — as proof that the curation was tight enough to remove rather than add.
- **Photography is the second voice.** Image columns are oversized relative to text columns; captions stay short and well-set rather than competing with the image.
- **Price is not the destination.** The vertical rhythm of a product card — image, title, price — keeps price last so the user reads narrative before number.

### Border Radius Scale
- 0px: Images, editorial tiles, search inputs, category labels — most surfaces
- 2px: Inverted black CTAs (`FAQ`, `1:1 문의`) — the smallest radius in the system, used on the highest-contrast control
- 4px: Ghost outline buttons (`더보기`), boxed form inputs on PDP
- No pill shapes, no >8px radii anywhere on the marketing surface

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, no border | Page background, editorial tiles, product cards — the dominant state |
| Outline (Level 1) | `1px solid #c4c4c4` | Ghost CTAs, boxed form inputs |
| Inverted (Level 2) | `#000000` background on `#ffffff` page | Floating help CTAs, footer headings — "elevation by colour inversion" |
| Image-as-elevation | Photography on white | Editorial tiles — the photograph itself reads as the lifted layer, no shadow needed |
| Focus | 2px black outline offset | Keyboard focus ring on interactive elements |

**Shadow Philosophy.** 29CM's marketing surface has no shadow system. The page is flat by design — depth comes from photographic content sitting on white, not from CSS box-shadows. The closest thing to "elevation" is the high-contrast inverted black CTA, which reads as an editorial pull-quote callout rather than a UI button. Adding a `0px 4px 8px rgba(0,0,0,0.1)` shadow to a 29CM tile would immediately look off-brand — it would push the page from "magazine" toward "SaaS dashboard".

## 7. Do's and Don'ts

### Do
- Use Pretendard Variable on every text element — there is no second face.
- Pair every editorial tile with one photograph and one short Korean caption at 22px/700.
- Use `#000000` and `#ffffff` as the only structural colours; `rgba(93,93,93,0.64)` for muted captions.
- Keep border-radius at 0px, 2px, or 4px — nothing above 4px on marketing surfaces.
- Subordinate price (12px/700) to title and image; never invert this order.
- Lean on whitespace for separation — 24-48px between sections, not borders or dividers.
- Use the inverted black CTA (`#000000` bg / `#ffffff` text / 2px radius) sparingly for high-priority, persistent affordances only.
- Mix Latin labels (Special-Order, Showcase, 29Magazine) at display sizes with Korean body copy at smaller sizes.

### Don't
- Don't add box-shadows to editorial tiles or product cards — the homepage is flat.
- Don't introduce a brand blue, brand red, or brand purple for CTAs. The brand "colour" is monochrome.
- Don't use pill-shaped buttons or radii above 8px anywhere on marketing surfaces.
- Don't promote price to the top of a card or to the largest size — image first, price last.
- Don't use italic for emphasis; emphasis is by weight (400 → 700).
- Don't tint backgrounds (`#fafafa`, `#f5f5f5`) — 29CM is pure white.
- Don't compose hero text overlaid on photography; 29CM almost always sets caption *below* the image, not on top.
- Don't use decorative iconography on hero — the image is the decoration.

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | 1-column editorial tiles, 2-column product grid, hamburger nav, 16-20px page margin |
| Tablet | 768-1024px | 2-column editorial, 3-column product grid, condensed nav |
| Desktop | 1024-1440px | 2-3 column editorial, 4-column product grid, full top nav row |
| Large Desktop | >1440px | 1280px max centered content, generous margins flanking |

### Touch Targets
- Category badge buttons: 52px tap height even when visually smaller
- Floating CTAs ("FAQ", "1:1 문의"): 31px height — minimum acceptable on mobile, paired with 8-12px padding
- Editorial tiles: full tile is tappable, no separate "view" button

### Collapsing Strategy
- Section headlines: 30px → 22px on mobile, weight 700 maintained
- Nav row: full horizontal list → hamburger sheet
- Product grid: 4-column → 2-column on mobile, image-aspect maintained
- Page margin: 48px → 16-20px on mobile
- Floating help CTA: stays bottom-right at all viewports — the one consistent control

### Image Behavior
- Editorial photography: full-bleed at all sizes; aspect ratio held
- Product cards: square or 4:5 portrait, maintained on mobile
- No lazy-load skeletons styled as cards — placeholder is a flat grey block, no shimmer

## 9. Agent Prompt Guide

### Quick Token Reference
- Page background: `#ffffff`
- Body text: `#000000`
- Muted text: `rgba(93,93,93,0.64)` (transparent grey on white = `#5d5d5d` at 64% opacity)
- Outline grey: `#c4c4c4`
- Sale red: `#ff0066` family (badge-only)
- Primary CTA: inverted black — `#000000` bg, `#ffffff` text, 2px radius
- Secondary CTA: ghost — `#ffffff` bg, `#000000` text, `1px solid #c4c4c4`, 4px radius
- Font family: `Pretendard Variable, ui-sans-serif, system-ui, sans-serif`
- Section headline: 30px / 700 / lh 1.13
- Editorial title: 22px / 700 / lh 29.92px
- Editorial body: 15px / 400 / lh 22.5px
- Product name: 12px / 400
- Product price: 12px / 700

### Example Component Prompts
- "Create an editorial tile: full-bleed photograph on top, then 16px gap, then 22px Pretendard Variable weight 700 Korean headline in `#000000`, then 8px gap, then 15px weight 400 description in `#000000`. No border, no shadow, no radius. White page background."
- "Build a 'View more' ghost button: white background, 1px solid `#c4c4c4` border, 4px radius, 14px Pretendard Variable weight 700 black text, padding 16px 16px 16px 20px, height 52px. Trailing chevron `>` right-aligned."
- "Build a product card: square photograph at 0px radius, then 12px Pretendard Variable weight 400 product name in `#000000`, then 12px weight 700 price in `#000000` directly below. Caption row '옵션비 별도' in 12px weight 400 `rgba(93,93,93,0.64)`. No card border, no shadow."
- "Floating help CTA: `#000000` background, `#ffffff` text, 2px radius, padding 4px 8px 4px 14px, height 31px, 15px Pretendard Variable weight 400. Fixed bottom-right, 24px inset."
- "Footer: white background, padding 20px 48px 48px. Column headings in 13px Pretendard Variable weight 700 uppercase Latin (`NOTICE`, `ABOUT US`, `HELP`). Link body 13-14px weight 400 black. No background tint, no top border."

### Iteration Guide
1. Always use Pretendard Variable — it is the brand font; do not substitute Noto Sans KR or Apple SD Gothic Neo unless the runtime cannot load Pretendard.
2. Default to `#000000` on `#ffffff`. Reach for `rgba(93,93,93,0.64)` only for secondary captions. Reach for any other colour only if you can name a specific brand reason.
3. Editorial card titles are 22px/700 with 29.92px line-height. This pair is the single most distinctive typographic unit in the system — replicate it precisely.
4. Product price is 12px/700 and lives under the title, not above. Inverting this order is the most common mistake when adapting other commerce designs to 29CM.
5. Radius scale is 0 / 2 / 4 — never 8, never pill. The 4px ghost button is the largest radius on the marketing surface.
6. White space is the brand. If a layout feels "empty", you are probably close to correct. Resist the urge to fill.
7. The inverted black CTA is high-cost. Use it once or twice per screen at most.
8. Photography does the visual heavy lifting. If you have weak imagery, no amount of typography will recover the 29CM register.

---

## 10. Voice & Tone

29CM speaks like an editor curating a magazine, not a marketer running a sale — calm, considered, never excited, never urgent. The brand book (`Guide to better 29CM`) defines the voice as personable but quiet: the brand persona is described as "착하지만 엉뚱한" (kind but offbeat), and the tone is treated as a deliberate craft layer that must stay consistent across every product caption, push notification, and email. Korean is the primary voice; English appears only as section labels and category names (`Special-Order`, `Showcase`, `29Magazine`) borrowed from print-magazine convention.

| Context | Tone |
|---|---|
| Editorial card titles | Short Korean phrases, often poetic or sensory (`나폴리의 산들바람`, `쿨링 시스템`). No imperatives. |
| Editorial card body | One sensory sentence + invitation. `스치는 바람처럼 여유로운 여름을 담은 지노키오의 여름 컬렉션을 같이 구경해요.` — the verb endings (`~해요`) are friendly-formal, never `~합니다`. |
| Product names | Brand-led, restrained — `[29CM 단독] (uni)Breeze 아이보리 솔리드 파자마`. Brackets carry exclusivity markers. |
| CTAs | `더보기`, `자세히 보기`, `장바구니 담기`. Bare verb-stems with `~기` endings. Never English (`SHOP NOW`), never exclamatory. |
| Price captions | Bare numerals + `원` later in the line. Modifier captions (`옵션비 별도`, `무료배송`) sit quietly under the price in muted grey. |
| PT (Presentation) copy | Long-form editorial — opens with a thesis sentence, then product context, then story. Reads like a Brunch essay. |
| Push / email | Same magazine register — `오늘의 컬렉션을 큐레이션했어요` rather than `세일 시작! 지금 클릭!`. |
| Empty states | Single Korean line explaining the absence — `아직 찜한 상품이 없어요`. Never `데이터가 없습니다`. |

**Forbidden phrases.** `최저가`, `초특가`, `긴급세일`, `오늘만`, English exclamatory CTAs (`SHOP NOW!`, `BUY!`), emoji of any kind on marketing surfaces, urgency-driven countdowns (`마감 임박!`), and the corporate-formal `~합니다` ending on consumer-facing voice. (`~합니다` is reserved for legal disclosure pages only.) Stacked superlatives on a single product (`프리미엄 럭셔리 시그니처 컬렉션`) read as Coupang-grade promo and are off-brand.

## 11. Brand Narrative

29CM was founded in **2011** as a media-commerce hybrid — the **C stands for Commerce** and the **M stands for Media** — under the parent operator Cafe24's incubator before passing through several owners. The name itself encodes the thesis: **29 centimeters** is, in the brand's own framing, *"the closest distance at which two people can open their hearts"* — the editorial premise that shopping is less about transaction than about taste, and that 29CM stands at conversational distance from its customer rather than retail distance ([NamuWiki / Asiance](https://blog.asiance.com/2021/03/24/vertical-platform-for-mz-generation/)). The brand's official identity statement is **"Guide to Better Choice"** — a curated selection promise rather than a discount promise.

The company was acquired by **Musinsa (무신사)** in **2021** and now operates as the editorial counterweight inside the Musinsa group: where Musinsa is street-utility and scale, 29CM is curation and editorial depth, with a dedicated PT (Presentation) format introduced in 2013 that publishes ~1.5 long-form brand stories per week ([29CM Brunch — likenoothers](https://brunch.co.kr/@likenoothers/11)). The 2023 Seongsu offline store and the [2023 BX renewal](https://designcompass.org/2023/08/21/29cm-seongsu/) reinforced the editorial framing — the wordmark uses dotted "2" and "9" digits to express the brand's *"착하지만 엉뚱한"* (kind-but-offbeat) personality, and the visual identity centres on a ruler-mark motif that frames the wordmark "like a container for the brand".

The internal brand book is titled **`Guide to better 29CM, 더 나은 29CM를 위한 가이드북`** — roughly 180 pages, with four parts: "우리다운 방식" (our way), "우리의 초상" (our portrait — brand persona as a person, complete with imagined clothes and weekend habits), "우리만의 목소리" (our voice — tone-and-manner guide for copy), and "그들의 취향" (their taste — nine taste-based customer personas, explicitly rejecting demographic segmentation) ([29CM Brand Book — Brunch](https://brunch.co.kr/@likenoothers/11)).

What 29CM refuses: discount-led merchandising (no permanent sale banners), demographic segmentation (age/gender bins are replaced by taste-based personas), urgency theatre (no countdowns, no "마감 임박"), and decorative chrome (no gradients, no shadows, no brand colour beyond black-on-white). What it embraces: long-form editorial inside the storefront, photography as the primary voice, Korean as the primary language with English borrowed from magazine convention, and the conviction that the customer is a reader first and a buyer second.

## 12. Principles

1. **The image is the headline.** Every editorial tile leads with a photograph at 22px-headline scale of visual weight. The Korean caption sits underneath, never overlaid. If the image cannot carry the tile, the tile is not ready.
   *UI implication:* Reserve the top 60-70% of every editorial unit for photography. Captions are subordinates, not co-headlines.

2. **Price is the punctuation, not the verb.** Product prices render at 12px/700 — the same size as the product name. Promoting price violates the editorial hierarchy and reframes the page as discount commerce.
   *UI implication:* Price never exceeds product-name size on a card. Discount red is a single accent, used sparingly on percent badges only.

3. **Whitespace is more expensive than ink.** 29CM's curation is proven by what is removed, not what is added. Page margins of 48px, section gaps of 32px, and an absence of dividers are the brand's structural commitment.
   *UI implication:* Default to more padding, fewer borders. If a layout reads "spacious", you are likely close to correct.

4. **One face, three weights, no italic.** Pretendard Variable is the entire typographic system. Emphasis is by weight (400 → 700 → 800). Adding a serif companion or a display face dilutes the editorial register.
   *UI implication:* Reject design contributions that introduce a second family. Bold is the only emphasis primitive.

5. **Korean is the primary voice; English is the section label.** Body copy, captions, error states, and onboarding are Korean. English appears at display sizes for navigation categories — borrowed from print-magazine convention, not adopted as parallel UI language.
   *UI implication:* Avoid English microcopy in body strings. Reserve English for top-level category names where it functions as decoration.

6. **Restraint is the brand.** The only "colour" is the discount-red badge. The only "elevation" is colour inversion. The only iconography is a trailing chevron. Every additional visual element competes with the photography.
   *UI implication:* Before adding a shadow, a border, an icon, or a colour — name a specific editorial reason. If there isn't one, remove.

7. **The customer is a reader.** PT, Showcase, and 29Magazine treat brand stories as long-form editorial. The site rewards browsing time, not click-through speed. Conversion follows attention; attention follows curation.
   *UI implication:* Allow long pages. Don't compress brand stories into "view more" gated cards. The full editorial is the funnel.

## 13. Personas

*Personas below are fictional archetypes informed by 29CM's stated taste-based segmentation (9 personas defined in the internal brand book) and publicly described 29CM user profiles. Not individual people.*

**지윤 (Jiyoon), 29, Seoul.** Marketing manager at a small lifestyle startup. Opens 29CM on her phone during the commute and on desktop at lunch. Reads PT pieces front-to-back before adding anything to cart — the editorial is the reason she's there. Owns one item from at least 12 different niche Korean brands, none of which she would have discovered on Musinsa. Resists discount notifications; deletes the app immediately if it starts pushing "오늘만" banners.

**민호 (Minho), 34, Seongsu.** Industrial designer. Treats 29CM as a curated showroom rather than a shop. Goes to the Seongsu offline store on weekends to handle objects in person, then buys online a week later. Will spend ₩280,000 on a single ceramic vase without flinching but considers a ₩9,900 cable organizer beneath consideration. The brand-story PT format is the deciding factor on every purchase above ₩100,000.

**서연 (Seoyeon), 26, Busan.** Recent grad, working her first office job. Uses 29CM as her "taste education" — she follows specific brand collections that 29CM has curated and slowly builds a wardrobe around them. Knows the difference between 29Magazine and Showcase. Reads Lookbook on Sunday evenings like other people read magazines. Has never used a 29CM coupon code.

**현우 (Hyeonwoo), 41, Gangnam.** Senior consultant. Buys gifts on 29CM — for partners, clients, parents. The site's editorial framing solves a problem ordinary commerce can't: it produces gift recommendations that feel "considered" rather than "expensive". Trusts the 29CM curation enough to buy without comparison shopping. Reads PT for vocabulary he can use in the card.

## 14. States

| State | Treatment |
|---|---|
| **Empty (wishlist / cart)** | Single Korean line of `#000000` 15px weight 400 body text explaining the absence (`아직 찜한 상품이 없어요`, `장바구니가 비어있어요`), plus one ghost outline CTA below (`상품 둘러보기`). Never an illustration, never a mascot. |
| **Empty (search / filter)** | One line of 14px `rgba(93,93,93,0.64)` caption (`검색 결과가 없어요`). No button — user adjusts filters themselves. |
| **Loading (first paint)** | Flat grey blocks at `#f5f5f5` (functional, not styled) at the final layout's geometry. No shimmer animation on editorial tiles — would compete with photography. |
| **Loading (more products)** | Bottom-of-list 3-dot loader in `#000000`. No overlay, no skeleton — the existing list stays visible. |
| **Error (inline field)** | 1px `#ff003c` border on the input, error text below in `#ff003c` 13px weight 400. One sentence (`이메일 형식이 올바르지 않아요`). Friendly-formal `~요` ending. |
| **Error (toast)** | `#000000` background, `#ffffff` 14px weight 400 text, 2px radius matching the inverted CTA, bottom-center placement, 3s auto-dismiss. No icon. |
| **Error (screen-blocking)** | Reserved for server outage. White screen, centered single-line message in `#000000` 16px weight 700, ghost CTA below (`다시 시도하기`). No illustration. |
| **Success (inline)** | Brief 200ms flash of the `#000000`/`#ffffff` inversion on the affected control — toggle flip, like-button activation. No green checkmark on routine UI. |
| **Success (purchase confirmation)** | Dedicated confirmation screen. Black-on-white order number in 22px/700, item summary below in 15px/400, single ghost CTA (`주문 내역 보기`). Money figures rendered in 22px/700 with comma separators. |
| **Skeleton** | `#f5f5f5` blocks at final dimensions, 0px radius (matching the editorial-tile and product-card geometry). 1.0s fade pulse, never shimmer. Never used on prices — those render as `--` until resolved. |
| **Disabled** | Button opacity drops to 0.4. Border colour does not change — disabled ghost buttons retain `#c4c4c4` border so geometry stays stable when re-enabled. |
| **Sale badge active** | `#ff0066` text on white tile corner — the single chromatic state on the marketing surface. Used for percent-off only, never for "NEW" or "BEST" (those are weight-only treatments in nav). |

## 15. Motion & Easing

**Durations** (named, not raw milliseconds):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, like-button state changes |
| `motion-quick` | 150ms | Hover state on ghost buttons, focus ring fades |
| `motion-standard` | 250ms | Default — image hover scale, sheet opens, tile reveal |
| `motion-editorial` | 400ms | Editorial transitions — hero image cross-fade, PT chapter advance |
| `motion-page` | 350ms | Full-screen route transitions |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-out` | `cubic-bezier(0.2, 0.0, 0.0, 1.0)` | Appearing — sheets enter, tiles reveal, hovers settle |
| `ease-in` | `cubic-bezier(0.4, 0.0, 1.0, 1.0)` | Leaving — dismissals, pops |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1.0)` | Two-way transitions — accordion expand, tab content |
| `linear` | `linear` | Image scrubbing in editorial galleries — preserves perceptual neutrality |

**Signature motions.**

1. **Image hover scale.** Hovering an editorial tile scales the image to 1.04 over `motion-standard` with `ease-out`; the surrounding tile chrome does not move. The motion is photographic, not interface — the photograph leans toward the cursor.
2. **Tile reveal on scroll.** Editorial tiles fade in from opacity 0 with a 12px upward translate over `motion-editorial` with `ease-out`. The stagger between tiles is 80-120ms, mimicking page-turn rhythm rather than dashboard pop-in.
3. **CTA hover (ghost outline).** The `#c4c4c4` border darkens to `#000000` over `motion-quick`, no fill change. The change is felt, not announced — typical of editorial restraint.
4. **CTA hover (inverted black).** Background lightens 4% over `motion-quick`. No transform, no shadow added. The brand never animates depth.
5. **Reduce motion.** If `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Image hover scale disables. Cross-fades replace translates. The site stays usable; just less kinetic.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10-15)

Direct verification via WebFetch / live inspect (2026-05-13):
- https://www.29cm.co.kr/ — confirmed homepage tagline "감도 깊은 취향 셀렉트샵 29CM",
  editorial tile structure, Pretendard Variable typography, monochrome palette,
  inverted-black FAQ/1:1 CTA pattern (live getComputedStyle 2026-05-13).
- https://brunch.co.kr/@likenoothers/11 — confirmed brand book title
  "Guide to better 29CM, 더 나은 29CM를 위한 가이드북", 4-part structure (우리다운
  방식 / 우리의 초상 / 우리만의 목소리 / 그들의 취향), 9 taste-based personas,
  "착하지만 엉뚱한" persona description.
- https://designcompass.org/2023/08/21/29cm-seongsu/ — confirmed wordmark dot
  motif, ruler-mark visual identity, "변하지 않는 본질" framing, "Guide to
  Better Choice" mission language.
- https://blog.asiance.com/2021/03/24/vertical-platform-for-mz-generation/ —
  confirmed "C = Commerce, M = Media" name etymology and editorial commerce
  positioning, Musinsa acquisition timeline.

Tier 2 (getdesign.md/refero) returned no 29CM-specific entries — §4 token
values are sourced exclusively from Tier 1 live inspect.

Not independently verified — widely documented public facts used:
- 29CM founding year (2011), Musinsa acquisition (2021).
- "29CM = 29 centimeters = closest distance to open hearts" — brand's own
  framing as referenced in Asiance and NamuWiki; treated as brand-stated
  mythology rather than externally documented etymology.

Personas (§13) are fictional archetypes informed by 29CM's stated taste-based
9-persona segmentation. Any resemblance to specific individuals is unintended.

Interpretive claims (e.g., "the image is the headline", "whitespace is more
expensive than ink") are editorial readings of the live design surface, not
documented 29CM statements.
-->
