---
id: greenvines
name: Greenvines
country: TW
category: ecommerce
homepage: "https://www.greenvines.com.tw"
primary_color: "#002d18"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=www.greenvines.com.tw&sz=128"
verified: "2026-06-10"
added: "2026-06-10"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-10"
  note: "primary = deep forest green ink (#002d18) used for text, borders, and footer; single warm accent = burnt orange (#c84600) reserved for commerce CTAs. Sharp-corner (0px radius), shadowless system with ultra-thin (weight 100) display type."
  colors:
    primary: "#002d18"
    accent: "#c84600"
    canvas: "#ffffff"
    sage: "#9caba3"
    sage-pale: "#e6eae8"
    sage-button: "#ced5d1"
    green-soft: "#3b5647"
    ink-alt: "#0a2d1b"
    stepper-grey: "#f1f1f1"
    footer-heading: "#9b9b9b"
    footer-muted: "#aaaaaa"
    helper-grey: "#666464"
    on-primary: "#ffffff"
  typography:
    family: { display: "gv (custom webfont)", fallback: "Noto Sans TC / 微軟正黑體", base: "Helvetica Neue" }
    display-hero: { size: 104, weight: 100, lineHeight: 1.10, tracking: 2, use: "Page-title hero (品牌故事, brand name)" }
    display:      { size: 52, weight: 100, lineHeight: 1.23, tracking: 2, use: "Section headlines, homepage H2/H3" }
    heading:      { size: 45, weight: 100, lineHeight: 1.25, tracking: 2, use: "Product-page section H2" }
    subheading:   { size: 30, weight: 100, lineHeight: 1.30, tracking: 2, use: "Sub-section heads, story links" }
    card-title:   { size: 28, weight: 100, lineHeight: 1.36, use: "Overlay card titles on photography" }
    body-lg:      { size: 20, weight: 400, lineHeight: 1.60, use: "Brand-story paragraphs" }
    nav:          { size: 16, weight: 300, lineHeight: 1.20, use: "Mega-menu product links" }
    body:         { size: 14, weight: 400, lineHeight: 1.43, use: "Standard body text, buttons" }
    button:       { size: 14, weight: 400, lineHeight: 1.40, tracking: 1, use: "Outline / fill CTA labels" }
    footer-head:  { size: 15, weight: 100, lineHeight: 2.40, use: "Footer column headings" }
  spacing: { xs: 4, sm: 8, md: 12, base: 15, lg: 20, xl: 32, xxl: 50, section: 80 }
  rounded: { none: 0, full: 9999 }
  shadow:
    none: "none"
  components:
    button-outline: { type: button, fg: "#002d18", border: "2px solid #002d18", radius: "0px", padding: "12px 20px", height: "48px", font: "14px / 400", states: "letter-spacing 1px, arrow suffix →", use: "Default CTA — 深入了解, 閱讀文章, 純淨保養組合" }
    button-accent: { type: button, bg: "#c84600", fg: "#ffffff", border: "2px solid #c84600", radius: "0px", padding: "12px 20px", height: "48px", font: "14px / 400", use: "Emphasis CTA — sustainability 深入了解 blocks, promo links" }
    button-cart: { type: button, bg: "#c84600", fg: "#ffffff", radius: "0px", padding: "12px 20px", height: "80px", font: "20px / 600", use: "加入購物車 add-to-cart bar on product pages" }
    button-stepper: { type: button, bg: "#f1f1f1", fg: "#0a2d1b", radius: "0px", height: "80px", font: "20px / 400", use: "Quantity +/− stepper flanking add-to-cart" }
    button-newsletter: { type: button, bg: "#ced5d1", fg: "#002d18", radius: "0px", height: "50px", font: "16px / 400", use: "Newsletter submit on footer dark panel" }
    input-newsletter: { type: input, fg: "#ffffff", radius: "0px", height: "55px", font: "14px / 400", use: "Newsletter name/email field on #002d18 footer, translucent #e6eae8-tinted fill" }
    card-sage: { type: card, bg: "#9caba3", fg: "#002d18", radius: "0px", use: "Sage-green tinted section surface / content band" }
    footer-link: { type: listItem, fg: "#ffffff", font: "15px / 400", use: "Footer navigation link on #002d18 (品牌故事, 永續報告書)" }
  components_harvested: true
---

# Design System Inspiration of Greenvines

## 1. Visual Theme & Atmosphere

Greenvines (綠藤生機) is Taiwan's flagship clean-beauty brand, and its site reads like a botanical manifesto typeset by a luxury magazine. The canvas is pure white (`#ffffff`), but the system's soul is a deep forest-green ink (`#002d18`) that does triple duty as body text, button borders, and the footer's immersive dark panel — the brand literally writes in the color of leaves. Large photographic sections sit on a muted sage surface (`#9caba3`), the single most frequent background on the homepage, supported by a pale grey-green (`#e6eae8`). The one deliberate disruption is a burnt orange (`#c84600`) reserved for commerce moments: add-to-cart, promotional deep-dives, and offer links. Green is the voice; orange is the ask.

Typography is the most radical statement. Display headlines run in a custom "gv" webfont (falling back to Noto Sans TC) at **weight 100** — an ultra-thin, almost calligraphic stroke — at enormous sizes: 104px for page titles like 品牌故事, 52px for section heads, with *positive* 2px letter-spacing that lets the thin strokes breathe. Where most e-commerce shouts in bold, Greenvines whispers in hairlines, and the effect is unmistakably premium and serene — the typographic equivalent of the brand's 減法 (subtraction) skincare philosophy: remove everything unnecessary, including font weight.

Geometry is equally disciplined. Every button, input, and card is a sharp 0px-radius rectangle; the only curve in the system is the perfect circle of the floating chat button. Outline CTAs use a confident 2px solid `#002d18` border with 1px letter-spaced 14px labels and an arrow suffix (深入了解 →). There are no drop shadows anywhere — separation comes from photography, tinted sage bands, and the dark green footer. The whole system feels like an apothecary label: precise, honest, quietly botanical.

**Key Characteristics:**
- Deep forest-green ink (`#002d18`) as text color, border color, and footer background — the brand color is literally the reading color
- Ultra-thin weight-100 display type at 104px/52px with positive 2px tracking — subtraction as typography
- Single burnt-orange accent (`#c84600`) reserved exclusively for commerce CTAs
- Sharp 0px radius on every rectangle; the chat FAB circle is the only rounded element
- Shadowless: separation via sage tints (`#9caba3`, `#e6eae8`) and full-bleed photography
- 2px solid outline buttons with arrow suffixes (→ / 〉) as the default CTA grammar
- Custom "gv" webfont over Noto Sans TC for Traditional Chinese display
- Dark green footer (`#002d18`) with grey column headings (`#9b9b9b`) and white links

## 2. Color Palette & Roles

### Primary
- **Forest Ink** (`#002d18`): The brand color. Body text, headings, outline-button borders and labels, footer background, chat FAB. A near-black green that reads as ink on paper.
- **Pure White** (`#ffffff`): Page canvas, text on dark/sage/orange surfaces, footer links.
- **Burnt Orange** (`#c84600`): The single warm accent — add-to-cart buttons, emphasis 深入了解 CTAs, promotional offer links. Strictly a commerce/action color. (A brighter `#e67600` appears rarely on promotional ribbons.)

### Sage Surfaces
- **Sage** (`#9caba3`): The signature tinted surface — large homepage section bands and photographic content blocks. The most frequent background color measured on the live homepage.
- **Pale Sage** (`#e6eae8`): Light grey-green secondary surface for quieter bands; also the tint base of the translucent newsletter input fill.
- **Sage Button** (`#ced5d1`): Muted sage fill for the newsletter submit button on the dark footer.

### Greens & Greys
- **Soft Green** (`#3b5647`): Secondary green for icons, supporting text, and product-page tab links (擁抱需要 / 減去非必要).
- **Ink Alt** (`#0a2d1b`): Near-identical dark green used on quantity-stepper glyphs.
- **Stepper Grey** (`#f1f1f1`): Light grey fill of the +/− quantity steppers beside add-to-cart.
- **Footer Heading Grey** (`#9b9b9b`): Footer column headings (深入了解, 客戶服務, 訂閱電子報).
- **Footer Muted** (`#aaaaaa`): Footer fine print and legal text on the dark panel.
- **Helper Grey** (`#666464`): Customer-service helper paragraphs and low-emphasis notes.

## 3. Typography Rules

### Font Family
- **Display & UI**: `gv` (custom webfont), fallback `"Noto Sans TC", 微軟正黑體, serif` — carries every headline, nav item, button label, and footer link.
- **Base**: `"Helvetica Neue", Helvetica, Arial, sans-serif` on the document body for Latin fallback text.
- (Third-party promo ribbons injected by the marketing layer use `Insider-Poppins` at 12px/600 — an embed, not a brand font.)

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | gv | 104px | 100 | 1.10 (114px) | 2px | Page titles (品牌故事), brand name hero |
| Display | gv | 52px | 100 | 1.23 (64px) | 2px / normal | Homepage and product section heads |
| Heading | gv | 45px | 100 | 1.25 | 2px | Product-page narrative H2 |
| Sub-heading | gv | 30px | 100–400 | 1.30 | 2px | Sub-sections, product story tabs |
| Card Title | gv | 28px | 100 | 1.36 (38px) | normal | White titles on photographic cards |
| Body Large | gv | 20px | 400 | 1.60 (32px) | normal | Brand-story paragraphs |
| Nav (mega menu) | gv | 16px | 300 | 1.20 | normal | Product links in the full-screen menu |
| Body / Button | gv | 14px | 400 | 1.40 | 1px (buttons) | Standard text; CTA labels |
| Footer Heading | gv | 15px | 100 | 2.40 (36px) | normal | Footer column heads in `#9b9b9b` |

### Principles
- **Weight 100 is the brand voice**: every display headline is ultra-thin. Bolder weights (400–600) are reserved for small functional UI (buttons, add-to-cart).
- **Positive tracking, not negative**: 2px letter-spacing at display sizes and 1px on button labels — thin strokes are given air, the opposite of the tight-tracked Western SaaS convention.
- **Hanzi-first scale**: the system is tuned for Traditional Chinese — generous line-heights (1.4–1.6 body) and large display sizes keep dense hanzi legible and elegant.
- **Two jobs, one family**: the gv/Noto Sans TC stack covers both whisper-thin display and functional UI; hierarchy is created by weight and size, never by switching typefaces.

## 4. Component Stylings

### Buttons

**Outline CTA (Default)**
- Background: transparent
- Text: `#002d18`
- Border: 2px solid `#002d18`
- Radius: 0px
- Padding: 12px 20px
- Font: 14px / 400 / gv, letter-spacing 1px
- Use: The system's default CTA — 深入了解 →, 閱讀文章 →, 純淨保養組合 →, 非必要成分清單 →

**Accent Fill CTA**
- Background: `#c84600`
- Text: `#ffffff`
- Border: 2px solid `#c84600`
- Radius: 0px
- Padding: 12px 20px
- Font: 14px / 400 / gv, letter-spacing 1px
- Use: Emphasis variant of the same geometry — sustainability 深入了解 blocks, 88-折 offer links

**Add-to-Cart**
- Background: `#c84600`
- Text: `#ffffff`
- Radius: 0px
- Padding: 12px 20px
- Font: 15–20px / 600 / gv, letter-spacing 1px
- Use: 加入購物車 on product pages — 80px tall commerce bar, the heaviest weight in the system

**Quantity Stepper**
- Background: `#f1f1f1`
- Text: `#0a2d1b`
- Radius: 0px
- Font: 20px / 400
- Use: +/− steppers flanking the add-to-cart bar, same 80px height

**Newsletter Submit**
- Background: `#ced5d1`
- Text: `#002d18`
- Radius: 0px
- Font: 16px / 400
- Use: 訂閱電子報 submit on the dark footer panel, 50px tall

**Chat FAB**
- Background: `#002d18`
- Radius: 50%
- Use: Floating 58px circular customer-chat button — the only rounded element in the system

### Inputs & Forms

**Newsletter Field**
- Background: rgba(229,229,229,0.2) — translucent pale tint over the `#002d18` footer
- Text: `#ffffff`
- Border: none
- Radius: 0px
- Font: 14px / 400
- Use: Name and email fields (placeholder 希望綠藤怎麼稱呼您 / 您的電子郵件地址), 55px tall

### Cards & Containers

**Sage Section Band**
- Background: `#9caba3`
- Text: `#002d18`
- Radius: 0px
- Use: Large tinted content bands segmenting the homepage; photography sits directly on the tint

**Pale Surface Band**
- Background: `#e6eae8`
- Text: `#002d18`
- Radius: 0px
- Use: Quieter alternating section surface

**Photo Overlay Card**
- Background: full-bleed photography
- Text: `#ffffff`
- Font: 28px / 100 / gv titles
- Use: Story cards — 減法保養「荷包蛋保養法」, 綠藤生機空瓶回收計畫

### Navigation

**Mega Menu**
- Background: `#002d18` full-screen overlay
- Text: `#ffffff`
- Font: 16px / 300 / gv for product links; 17px / 400 for section heads (更多綠藤, 加入綠藤)
- Use: Full-screen dark-green menu listing every product by name

### Footer
- Background: `#002d18`
- Column headings: `#9b9b9b`, 15px / 100, line-height 36px
- Links: `#ffffff`, 15px (品牌故事, 純淨保養主張, 3200+ 非必要成份清單, 永續報告書)
- Fine print: `#aaaaaa`

---
**Verified:** 2026-06-10
**Tier 1 sources:** https://www.greenvines.com.tw (homepage, live computed-style inspect), https://www.greenvines.com.tw/products/know-more-luminosity-serum (product surface, live inspect), https://www.greenvines.com.tw/pages/about-us (brand-story surface, live inspect), https://blog.greenvines.com.tw (official Greenvines blog 純淨生活提案部落格 — brand-owned)
**Tier 2 sources:** none available (getdesign.md/greenvines → 404 "No designs found"; styles.refero.design searched "greenvines" and "綠藤" — brand not listed)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Button padding: 12px 20px — the recurring interactive unit
- Mega-menu links carry 50px right padding; product story tabs use 15px horizontal padding
- Section bands are tall and full-bleed, with display headlines given generous 64px+ line boxes

### Grid & Container
- Full-width photographic bands alternate with white editorial blocks — the page is a vertical rhythm of image, manifesto, image
- Homepage: hero photography → 52px thin headline → outline CTA, repeated as a cadence
- Product pages: long-form narrative sections (配方架構 透明解析, reviews) with a persistent 80px add-to-cart bar
- Footer is a four-column directory (深入了解 / 客戶服務 / 關注我們 / 訂閱電子報) on the dark green panel

### Whitespace Philosophy
- **Subtraction as layout**: consistent with 減法保養, sections hold one idea each — a headline, a paragraph, one CTA. No sidebars, no widget clutter.
- **Photography is the container**: instead of cards-with-borders, content sits directly on full-bleed imagery or sage tints.
- **Flat segmentation**: bands of `#ffffff`, `#9caba3`, `#e6eae8`, and `#002d18` create the page's entire depth structure.

### Border Radius Scale
- 0px: every button, input, card, and band — the system is rigorously sharp-cornered
- 50% / 9999px: the floating chat button only

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | The entire system — `box-shadow: none` measured across nav, buttons, cards |
| Tint (Level 1) | `#9caba3` / `#e6eae8` background shift | Section and card separation |
| Dark panel (Level 2) | `#002d18` background | Footer, mega menu — immersive brand moments |

**Shadow Philosophy**: Greenvines is a fully shadowless system. Live inspection found no box-shadows on any measured element — buttons, the add-to-cart bar, photo cards, and the sticky chrome are all flat. Depth is communicated by color temperature instead: white canvas → sage tint → deep forest green, a progression that mirrors walking from daylight into foliage. Combined with the 0px radius discipline, the result feels printed rather than layered — closer to high-end packaging design than to app UI, which is precisely the brand's territory.

## 7. Do's and Don'ts

### Do
- Set display headlines in weight 100 at 45–104px with +2px letter-spacing — thinness is the brand voice
- Use `#002d18` forest ink for text, borders, and dark panels — green is the reading color, not a decoration
- Reserve `#c84600` burnt orange strictly for commerce actions (add-to-cart, offers)
- Keep every rectangle at 0px radius; allow circles only for the chat FAB
- Use 2px solid `#002d18` outline buttons with arrow suffixes (→) as the default CTA
- Separate sections with sage tints (`#9caba3`, `#e6eae8`) and full-bleed photography
- Write CTAs as invitations to learn (深入了解, 閱讀文章) rather than commands to buy
- Use the dark `#002d18` panel for footer and menu — immersive, ink-like brand moments

### Don't
- Use bold display headlines — weight 600+ belongs only to the add-to-cart label
- Apply border-radius to buttons, inputs, or cards — the system is sharp-cornered
- Add drop shadows — flat tints and photography carry all depth
- Spread the orange accent into navigation or editorial content — it is a commerce signal only
- Use negative letter-spacing — thin hanzi strokes need air, always track positive
- Introduce additional accent hues — the palette is green, sage, white, and one orange
- Crowd sections with multiple CTAs — one idea, one button, per band
- Replace the photographic surfaces with illustration or gradients — real botanicals are the brand texture

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column; display sizes compress; mega menu becomes full-screen list |
| Tablet | 768–1200px | Photographic bands persist full-bleed; editorial blocks narrow |
| Desktop | >1200px | Full layout, 1440px-class canvas with centered editorial measure |

### Touch Targets
- Outline CTAs at 48px height with 12px 20px padding — comfortably tappable
- Add-to-cart bar at 80px height with full-width steppers — thumb-zone commerce
- Newsletter fields at 55px height on the footer panel

### Collapsing Strategy
- Display headlines scale down but keep weight 100 and positive tracking
- Full-bleed photography crops rather than stacks — imagery stays immersive
- The persistent add-to-cart bar docks to the bottom on product pages
- Footer columns stack vertically on the dark panel

### Image Behavior
- Photography is full-bleed at every size, with white weight-100 titles overlaid
- No image carries shadow or rounded corners at any breakpoint

## 9. Agent Prompt Guide

### Quick Color Reference
- Text / borders / dark panels: Forest Ink (`#002d18`)
- Background: Pure White (`#ffffff`)
- Tinted section: Sage (`#9caba3`), Pale Sage (`#e6eae8`)
- Commerce CTA: Burnt Orange (`#c84600`), white text
- Secondary green: Soft Green (`#3b5647`)
- Newsletter submit: Sage Button (`#ced5d1`) with `#002d18` text
- Footer headings: `#9b9b9b`; footer fine print: `#aaaaaa`; helper text: `#666464`
- Stepper fill: `#f1f1f1` with `#0a2d1b` glyphs

### Example Component Prompts
- "Create a hero band: full-bleed botanical photograph. Overlay headline at 52px, font-weight 100, letter-spacing 2px, color #ffffff. Below, an outline button: transparent background, 2px solid #ffffff border, 0px radius, 12px 20px padding, 14px/400 label with 1px letter-spacing and a → suffix."
- "Design an editorial section on white: headline 52px weight 100 letter-spacing 2px color #002d18; paragraph 20px/400 line-height 1.6 color #002d18; one outline CTA with 2px solid #002d18 border, 0px radius, 深入了解 → label."
- "Build a product add-to-cart bar: 80px tall, background #c84600, white 20px/600 label 加入購物車, letter-spacing 1px, 0px radius. Flank with #f1f1f1 quantity steppers, #0a2d1b glyphs, same height."
- "Create a footer: background #002d18. Column headings 15px weight 100 color #9b9b9b (深入了解, 客戶服務, 訂閱電子報). Links 15px #ffffff. Newsletter input 55px tall, translucent light fill, white text, 0px radius; submit button #ced5d1 with #002d18 text, 50px tall."
- "Design a sage band: background #9caba3, headline 52px weight 100 #002d18, one accent button #c84600 background, white text, 2px solid #c84600 border, 0px radius."

### Iteration Guide
1. Weight 100 + positive 2px tracking on every display headline — never bold, never tight
2. 0px radius on all rectangles; only the chat FAB is circular
3. `#002d18` is simultaneously text color, border color, and dark surface — keep that triple role
4. Orange `#c84600` appears only when money changes hands
5. No shadows — use `#9caba3`/`#e6eae8` tints and photography for depth
6. CTAs are outline-first; filled buttons are the exception, not the rule
7. Line-height stays generous (1.4–1.6) for Traditional Chinese body text
8. The dark green panel (footer/menu) is the brand's immersive moment — white text, grey headings

---

## 10. Voice & Tone

Greenvines speaks in the voice of a **calm, knowledgeable, subtraction-minded** botanist — confident enough to tell customers to use *less*. The register is editorial and philosophical rather than promotional: the site's own title is a thesis, 「沒有減法，何來精華」 ("without subtraction, whence essence?"). Copy consistently teaches before it sells, decodes ingredient science into plain Traditional Chinese, and frames purchases as choices within a larger sustainable life.

| Context | Tone |
|---|---|
| Hero headlines | Aphoristic, manifesto-like. 「現在，保養從減法開始」. Statements of philosophy, not offers. |
| Product naming | Poetic-functional compounds: 活萃三日修護精華, 綠色海洋精華油, 入夢 θ 呼吸精萃. |
| CTAs | Invitations to understand: 深入了解 →, 閱讀文章 →. Even commerce CTAs stay quiet (加入購物車). |
| Ingredient claims | Evidence-framed and transparent: 配方架構 透明解析, the 3200+ 非必要成分清單. |
| Social proof | Concrete numbers, no superlatives: 超過兩萬則真實好評，23 款純淨保養洗沐產品. |
| Customer service | Warm, unhurried, reassuring — 45 天無條件退貨 stated as confidence in the product. |
| Sustainability | Action-led reporting: 空瓶回收計畫, 綠色生活 21 天, presented as ongoing experiments. |

**Voice samples (verbatim from brand surfaces):**
- 「沒有減法，何來精華」 — site title tagline. *(verified live 2026-06-10, document.title)*
- 「現在，保養從減法開始 #二減一加」 — homepage section headline. *(verified live 2026-06-10)*
- 「超過兩萬則真實好評，23 款純淨保養洗沐產品」 — homepage social-proof headline. *(verified live 2026-06-10)*
- "More is Less. 多，即是少。" — brand-story page headline. *(verified live 2026-06-10, /pages/about-us)*
- 「讓肌膚熟悉的，應該純淨」 — product-page section headline. *(verified live 2026-06-10)*
- "The more we know, the less we need." — clean-beauty beliefs page. *(fetched 2026-06-10, /pages/clean-beliefs)*

**Forbidden register**: miracle-cure promises, fear-based ingredient scaremongering without evidence, urgency pressure (countdown timers, 限時搶購 hysteria), beauty-standard shaming, and undefined chemistry jargon left unexplained.

## 11. Brand Narrative

Greenvines (綠藤生機) was founded in **2010** in Taipei by three National Taiwan University finance graduates — **鄭涵睿 (Harris Cheng)**, **廖怡雯 (Patricia Liao)**, and **許偉哲 (Wei-Che Hsu)** — who left careers in banking and asset management and pooled NT$5 million to start the company. The scientific soul of the brand is **林碧霞博士 (Dr. Lin Bi-Hsia)**, the agricultural scientist (and mother of co-founder 鄭涵睿) whose 20+ years of plant-cell research the brand-story page credits directly: 「承襲自林碧霞博士的啟發」. The company began with living broccoli sprouts (活芽菜) before growing into Taiwan's defining clean-beauty house, and in **2015 became one of Taiwan's first certified B Corporations** — repeatedly honored among B Lab's "Best for the World." As of the 2024 永續報告書, **廖怡雯 serves as CEO**, and the company donates 1% for the Planet (over NT$10 million cumulatively) while running a closed-loop 空瓶回收計畫 bottle-recycling program.

The founding question, preserved verbatim on the brand-story page, is disarmingly simple: 「如果肌膚只需要水和油，為什麼我們不單純替肌膚補水補油？」 ("If skin only needs water and oil, why don't we simply give it water and oil?"). From that came 減法保養 (subtraction skincare): strip every routine and formula down to what skin actually needs, and maintain a public 非必要成分清單 of **3,200+ unnecessary or questionable ingredients** the brand refuses to use — codified in its FAITH formulation principles. The brand is explicit that it does not blindly worship "natural": 「我們並不盲目信仰天然，而是從天然之中找尋與安全的交集」.

What Greenvines refuses: shadow-heavy, discount-screaming beauty e-commerce; bold-faced hype typography; and the industry habit of selling more steps. What it embraces: ink-green text on white, hairline-thin headlines, photography of real plants and real bottles, and a sustainability report published like a product. The design system *is* the philosophy — every removed border-radius, shadow, and font-weight is subtraction made visible.

## 12. Principles

1. **Subtraction is the product.** 減法保養 governs formulas, routines, and pixels alike. *UI implication:* one idea per section, one CTA per band; remove decoration before adding it — no shadows, no rounding, no second accent.
2. **Transparency builds trust.** The 3200+ 非必要成分清單 and 配方架構 透明解析 make exclusion lists public. *UI implication:* surface ingredient data, sources, and numbers plainly; never hide claims behind marketing gloss.
3. **Teach before selling.** The blog, calculators of skin knowledge, and 深入了解 CTAs put understanding first. *UI implication:* default CTA is an outline "learn more," not a filled "buy now"; commerce orange appears only at the cart.
4. **Sustainability is an action, not a badge.** B Corp certification, 空瓶回收計畫, 1% for the Planet. *UI implication:* report real numbers (letters collected, bottles recycled) with the same typographic dignity as product claims.
5. **Quiet confidence over volume.** Weight-100 headlines and a 45-day unconditional return policy say the same thing: we don't need to shout. *UI implication:* whisper-thin display type, generous whitespace, no urgency patterns.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Greenvines customer segments (Taiwanese clean-beauty consumers, sustainability-minded shoppers), not individual people.*

**林佳穎, 31, 台北.** A marketing manager with sensitized skin from years of 10-step routines. Found Greenvines through the 無乳液實驗 articles and was converted by the idea of doing *less*. Reads the 非必要成分清單 before trying any new brand, and trusts the 45-day return policy enough to experiment.

**陳威廷, 38, 新竹.** An engineer who buys the 頭皮淨化蜂膠+ 洗髮精 on subscription and returns empty bottles through 空瓶回收計畫. Chose the brand for its B Corp certification — he wants his household spending to match his values, and Greenvines is the only beauty brand whose sustainability report he has actually opened.

**張雅婷, 26, 台中.** A graduate student who discovered the brand at the 台中漢神洲際 store. Loves the calm, apothecary-like retail space and the poetic product names (入夢 θ 呼吸精萃). Follows the blog for evidence-based skincare and mindfulness content rather than influencer reviews.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no search/filter results)** | White canvas, single thin headline in Forest Ink (`#002d18`) stating no matches, with one outline CTA back to 所有產品. No illustration clutter — subtraction applies to empty states too. |
| **Empty (cart)** | Calm one-line statement plus an outline 深入了解 path to bestsellers; never urgency copy. |
| **Loading (page/section)** | Flat sage (`#e6eae8`) placeholder blocks at final dimensions, 0px radius, gentle opacity pulse — no shimmer, no shadow, consistent with the flat system. |
| **Loading (add-to-cart)** | The `#c84600` bar holds its size with an inline progress state; label stays visible. |
| **Error (form validation)** | Field-level message below the input in plain Traditional Chinese describing what's needed; the field keeps its translucent fill, no aggressive red flooding. |
| **Error (checkout/network)** | Inline banner in Forest Ink on pale sage explaining the failure and the retry path; tone stays calm and instructional. |
| **Success (added to cart)** | Quiet inline confirmation near the cart bar; the persistent bar itself reflects quantity. No confetti, no modal interruption. |
| **Success (newsletter subscribed)** | Single white confirmation line on the `#002d18` footer panel, replacing the form. |
| **Skeleton** | `#e6eae8` blocks at exact final dimensions with 0px radius — sharp-cornered like everything else. |
| **Disabled** | Outline buttons drop to reduced-opacity `#002d18` border and label together; orange CTAs fade rather than turn grey to preserve the commerce signal. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 150ms | Hover fills on outline buttons, link underlines |
| `motion-standard` | 250ms | Section fades, mega-menu open, image crossfades |
| `motion-slow` | 400ms | Full-screen menu and photographic hero transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Default two-way transitions |
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Menu and overlay arrivals |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |

**Motion rules**: Motion is slow, soft, and botanical — closer to a breath than a bounce. Outline CTAs transition border/fill on hover at `motion-fast`; the full-screen `#002d18` mega menu fades in at `motion-slow`; photography crossfades rather than slides. No spring, overshoot, or parallax gimmicks — a brand built on subtraction does not add kinetic noise. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and crossfades become cuts; the store remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-10) via playwright getComputedStyle on:
- https://www.greenvines.com.tw (homepage) — document.title 「綠藤生機 Greenvines｜沒有減法，何來精華」;
  H3 52px/100 headlines incl. 「現在，保養從減法開始 #二減一加」, 「超過兩萬則真實好評，23 款純淨保養洗沐產品」;
  outline CTAs 2px solid rgb(0,45,24) / 0px radius / 12px 20px / 14px / letter-spacing 1px;
  accent CTA bg rgb(200,70,0); footer bg rgb(0,45,24); bgFreq top rgb(156,171,163).
- https://www.greenvines.com.tw/products/know-more-luminosity-serum — 加入購物車 bg rgb(200,70,0) h 80px,
  stepper bg rgb(241,241,241), H2 45-52px weight 100 letter-spacing 2px, 「讓肌膚熟悉的，應該純淨」.
- https://www.greenvines.com.tw/pages/about-us — H1 品牌故事 104px/100; "More is Less. 多，即是少。";
  brand-story paragraphs verbatim (林碧霞博士, 非必要成分清單 3200+, 公平貿易辣木油).

WebFetch (2026-06-10):
- https://www.greenvines.com.tw/pages/clean-beliefs — FAITH principles, "The more we know, the less we need.",
  3200+ unnecessary-ingredient list, 98%+ natural origin, 45-day return.
- https://www.greenvines.com.tw/pages/benefit-report — 2024 sustainability report: 空瓶回收計畫 closed-loop,
  1% for the Planet NT$10M+ cumulative, 綠色生活 21 天 (8th year, 66,000+ letters), CEO 廖怡雯,
  2024 DBS Asia Business Impact Award.
- https://blog.greenvines.com.tw — official blog 純淨生活提案部落格 (brand-owned surface).

Web search (2026-06-10) — founding facts: founded 2010 by 鄭涵睿/廖怡雯/許偉哲 (NTU finance, ex-UBS/ABN AMRO),
NT$5M initial capital; certified as one of Taiwan's first B Corps (2015); sources: B Lab Taiwan
(blab.tw/bcommunity-greenvines), DBS feature (dbs.com/livemore/tw-zh/social-enterprise/greenvines.html),
Greenvines official blog founder interviews. Leadership noted as of the 2024 benefit report (CEO 廖怡雯).

Personas (§13) are fictional archetypes informed by publicly observable Greenvines customer segments.
Names are illustrative; they do not refer to real people.

§14 States and §15 Motion are editorial extrapolations consistent with the measured flat/sharp/quiet system
(box-shadow: none, 0px radius, weight-100 display) — marked as design guidance, not measured values.

Interpretive claims (e.g., "subtraction made visible", "green is the voice; orange is the ask") are editorial
readings connecting Greenvines' stated philosophy to its observed design, not direct brand statements.
-->
