# Greenvines Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Greenvines (綠藤生機) is Taiwan's flagship clean-beauty brand. This contract covers the first-party web surfaces the source inspected on 2026-06-10: the homepage at `https://www.greenvines.com.tw`, the product surface at `https://www.greenvines.com.tw/products/know-more-luminosity-serum`, and the brand-story surface at `https://www.greenvines.com.tw/pages/about-us`. The source also fetched `https://www.greenvines.com.tw/pages/clean-beliefs` and `https://www.greenvines.com.tw/pages/benefit-report` for philosophy-layer copy, and names the official blog `https://blog.greenvines.com.tw` (純淨生活提案部落格) as a brand-owned surface. Every value below stays attached to the surface that established it. The boundary that stops a homepage measurement from standing in for a Greenvines surface the source did not inspect is a derived editorial implementation inference from the verified surfaces; it is not Greenvines-authored or a separately published UI specification.

The captured interface layer is a pure white canvas (`#ffffff`) whose reading color is deep forest-green ink (`#002d18`) — body text, outline-button borders, and the footer’s immersive dark panel. Large photographic sections sit on a muted sage surface (`#9caba3`), the single most frequent background measured on the live homepage, supported by pale grey-green (`#e6eae8`). The one deliberate disruption is a burnt orange (`#c84600`) reserved for commerce moments: add-to-cart, promotional deep-dives, and offer links. A brighter `#e67600` appears rarely on promotional ribbons. Reading the site as a botanical manifesto typeset by a luxury magazine, reading that the brand writes in the color of leaves, and reading “Green is the voice; orange is the ask,” are derived editorial implementation inferences from the verified surfaces; they are not Greenvines-authored or a separately published UI specification.

Typography is the most radical recorded statement. Display headlines run in a custom `gv` webfont (falling back to Noto Sans TC / 微軟正黑體) at **weight 100** — an ultra-thin stroke — at 104px for page titles like 品牌故事 and 52px for section heads, with positive 2px letter-spacing. Geometry is sharp: every button, input, and card is a 0px-radius rectangle; the only curve is the perfect circle of the floating chat button. Outline CTAs use a 2px solid `#002d18` border with 1px letter-spaced 14px labels and an arrow suffix (深入了解 →). Live inspection found no drop shadows — `box-shadow: none` on nav, buttons, cards, and sticky chrome. Separation comes from photography, tinted sage bands, and the dark green footer. Calling typography the most radical recorded statement, reading weight-100 display as the typographic equivalent of the brand’s 減法 (subtraction) skincare philosophy, and reading the whole system as an apothecary label — precise, honest, quietly botanical — are derived editorial implementation inferences from the verified surfaces; they are not Greenvines-authored or a separately published UI specification.

Brand narrative recorded by the source, kept separate from the interface evidence above. Greenvines (綠藤生機) was founded in **2010** in Taipei by three National Taiwan University finance graduates — **鄭涵睿 (Harris Cheng)**, **廖怡雯 (Patricia Liao)**, and **許偉哲 (Wei-Che Hsu)** — who left careers in banking and asset management and pooled NT$5 million to start the company. The scientific soul of the brand is **林碧霞博士 (Dr. Lin Bi-Hsia)**, the agricultural scientist (and mother of co-founder 鄭涵睿) whose 20+ years of plant-cell research the brand-story page credits directly: 「承襲自林碧霞博士的啟發」. The company began with living broccoli sprouts (活芽菜) before growing into Taiwan's defining clean-beauty house, and in **2015 became one of Taiwan's first certified B Corporations** — repeatedly honored among B Lab's "Best for the World." As of the 2024 永續報告書, **廖怡雯 serves as CEO**, and the company donates 1% for the Planet (over NT$10 million cumulatively) while running a closed-loop 空瓶回收計畫 bottle-recycling program. The founding question, preserved verbatim on the brand-story page, is 「如果肌膚只需要水和油，為什麼我們不單純替肌膚補水補油？」. From that came 減法保養 (subtraction skincare): strip every routine and formula down to what skin actually needs, and maintain a public 非必要成分清單 of **3,200+** unnecessary or questionable ingredients the brand refuses to use — codified in its FAITH formulation principles. The brand is explicit that it does not blindly worship "natural": 「我們並不盲目信仰天然，而是從天然之中找尋與安全的交集」. Official history and the brand-story / benefit-report pages provide that narrative context; they do not by themselves supply interface tokens. What the source says Greenvines refuses: shadow-heavy, discount-screaming beauty e-commerce; bold-faced hype typography; and the industry habit of selling more steps. What it embraces: ink-green text on white, hairline-thin headlines, photography of real plants and real bottles, and a sustainability report published like a product. Reading that narrative as not supplying interface tokens, reading that the design system *is* the philosophy — every removed border-radius, shadow, and font-weight as subtraction made visible — and the refuse/embrace pairing are derived editorial implementation inferences from the verified surfaces; they are not Greenvines-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

Selecting these four as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not Greenvines-authored or a separately published UI specification. Each names the source passage it rests on. They do not come from the source's persona section.

- Read the brand-story and philosophy surfaces (品牌故事, 「沒有減法，何來精華」, 「現在，保養從減法開始 #二減一加」).
- Discover products and act on an outline invitation (深入了解 →, 閱讀文章 →, 純淨保養組合 →) or open the 非必要成分清單.
- Add a product to cart from the persistent 加入購物車 bar on a product page.
- Subscribe from the footer 訂閱電子報 field and submit.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its three named figures as fictional archetypes informed by publicly observable Greenvines customer segments, so their names, ages, cities, and biographies are dropped rather than promoted, and no demographic segment list is carried into this document or its sidecar. What the source independently records is the audience grouping those archetypes were said to be informed by: Taiwanese clean-beauty consumers, and sustainability-minded shoppers. Reading those groups as this product's audience is a derived editorial implementation inference from the verified surfaces; it is not Greenvines-authored or a separately published UI specification.

### Distinctive traits

These eight traits, and the readings carried inside them — forest ink as the reading color, subtraction as typography, orange as the only commerce ask, and the chat circle as the only curve — are a derived editorial implementation inference from the verified surfaces; they are not Greenvines-authored or a separately published UI specification. Each names the values it rests on.

- Deep forest-green ink (`#002d18`) as text color, border color, and footer background
- Ultra-thin weight-100 display type at 104px/52px with positive 2px tracking
- Single burnt-orange accent (`#c84600`) reserved exclusively for commerce CTAs
- Sharp 0px radius on every rectangle; the chat FAB circle is the only rounded element
- Shadowless: separation via sage tints (`#9caba3`, `#e6eae8`) and full-bleed photography
- 2px solid outline buttons with arrow suffixes (→ / 〉) as the default CTA grammar
- Custom `gv` webfont over Noto Sans TC / 微軟正黑體 for Traditional Chinese display
- Dark green footer (`#002d18`) with grey column headings (`#9b9b9b`) and white links

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Greenvines-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each, and its own closing note names “subtraction made visible” and “green is the voice; orange is the ask” among the readings that connect its observed design to the stated philosophy rather than quoting the company as a UI specification.

1. **Subtraction is the product.** 減法保養 governs formulas, routines, and pixels alike. *UI implication:* one idea per section, one CTA per band; remove decoration before adding it — no shadows, no rounding, no second accent.
2. **Transparency builds trust.** The 3200+ 非必要成分清單 and 配方架構 透明解析 make exclusion lists public. *UI implication:* surface ingredient data, sources, and numbers plainly; never hide claims behind marketing gloss.
3. **Teach before selling.** The blog, calculators of skin knowledge, and 深入了解 CTAs put understanding first. *UI implication:* default CTA is an outline "learn more," not a filled "buy now"; commerce orange appears only at the cart.
4. **Sustainability is an action, not a badge.** B Corp certification, 空瓶回收計畫, 1% for the Planet. *UI implication:* report real numbers (letters collected, bottles recycled) with the same typographic dignity as product claims.
5. **Quiet confidence over volume.** Weight-100 headlines and a 45-day unconditional return policy say the same thing: we don't need to shout. *UI implication:* whisper-thin display type, generous whitespace, no urgency patterns.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Greenvines-authored or a separately published UI specification.

- Set display headlines in weight 100 at 45–104px with +2px letter-spacing — thinness is the brand voice
- Use `#002d18` forest ink for text, borders, and dark panels — green is the reading color, not a decoration
- Reserve `#c84600` burnt orange strictly for commerce actions (add-to-cart, offers)
- Keep every rectangle at 0px radius; allow circles only for the chat FAB
- Use 2px solid `#002d18` outline buttons with arrow suffixes (→) as the default CTA
- Separate sections with sage tints (`#9caba3`, `#e6eae8`) and full-bleed photography
- Write CTAs as invitations to learn (深入了解, 閱讀文章) rather than commands to buy
- Use the dark `#002d18` panel for footer and menu — immersive, ink-like brand moments

### Avoid

The source states these eight as its Don't list; they are kept as its rules, reasons included. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Greenvines-authored or a separately published UI specification.

- Use bold display headlines — weight 600+ belongs only to the add-to-cart label
- Apply border-radius to buttons, inputs, or cards — the system is sharp-cornered
- Add drop shadows — flat tints and photography carry all depth
- Spread the orange accent into navigation or editorial content — it is a commerce signal only
- Use negative letter-spacing — thin hanzi strokes need air, always track positive
- Introduce additional accent hues — the palette is green, sage, white, and one orange
- Crowd sections with multiple CTAs — one idea, one button, per band
- Replace the photographic surfaces with illustration or gradients — real botanicals are the brand texture

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The role names below are this contract's naming of the source's recorded uses rather than published Greenvines role names. Calling `#002d18` the reading color rather than a decoration, calling `#c84600` the single commerce ask, and calling sage a tinted surface rather than a second brand color, are derived editorial implementation inferences from the verified surfaces; they are not Greenvines-authored or a separately published UI specification. The hex values and the recorded uses beside them are live-computed.

Primary

| Role | Value | Recorded use |
|---|---|---|
| Forest Ink (`primary`) | `#002d18` | Body text, headings, outline-button borders and labels, footer background, chat FAB. A near-black green that reads as ink on paper. |
| Pure White (`canvas` / `on-primary`) | `#ffffff` | Page canvas, text on dark/sage/orange surfaces, footer links. Token keys `canvas` and `on-primary` share this hex; they are not merged into one role. |
| Burnt Orange (`accent`) | `#c84600` | The single warm accent — add-to-cart buttons, emphasis 深入了解 CTAs, promotional offer links. Strictly a commerce/action color. |

Sage surfaces

| Role | Value | Recorded use |
|---|---|---|
| Sage (`sage`) | `#9caba3` | The signature tinted surface — large homepage section bands and photographic content blocks. The most frequent background color measured on the live homepage. |
| Pale Sage (`sage-pale`) | `#e6eae8` | Light grey-green secondary surface for quieter bands; also the tint base of the translucent newsletter input fill. |
| Sage Button (`sage-button`) | `#ced5d1` | Muted sage fill for the newsletter submit button on the dark footer. |

Greens and greys

| Role | Value | Recorded use |
|---|---|---|
| Soft Green (`green-soft`) | `#3b5647` | Secondary green for icons, supporting text, and product-page tab links (擁抱需要 / 減去非必要). |
| Ink Alt (`ink-alt`) | `#0a2d1b` | Near-identical dark green used on quantity-stepper glyphs. |
| Stepper Grey (`stepper-grey`) | `#f1f1f1` | Light grey fill of the +/− quantity steppers beside add-to-cart. |
| Footer Heading Grey (`footer-heading`) | `#9b9b9b` | Footer column headings (深入了解, 客戶服務, 訂閱電子報). |
| Footer Muted (`footer-muted`) | `#aaaaaa` | Footer fine print and legal text on the dark panel. |
| Helper Grey (`helper-grey`) | `#666464` | Customer-service helper paragraphs and low-emphasis notes. |

A brighter `#e67600` appears rarely on promotional ribbons. It is recorded as that rare observation, not as a second accent role to spread. Withholding a second accent role from that rare ribbon is a derived editorial implementation inference from the verified surfaces; it is not Greenvines-authored or a separately published UI specification. Thirteen named token-set colors. None is merged with another role.

### Spacing

Token-set steps, unitless: `xs 4 · sm 8 · md 12 · base 15 · lg 20 · xl 32 · xxl 50 · section 80`. The visible sections write the component steps in px where the source does: button padding 12px 20px (the recurring interactive unit); mega-menu links 50px right padding; product story tabs 15px horizontal padding; display headlines given generous 64px+ line boxes. The `section` step stays 80, unitless in the token set, and is also written as section-band height language in the source. These eight keys stay in the Spacing slot; they are not a radius scale. Keeping them in that slot rather than reading them as a radius scale is a derived editorial implementation inference from the verified surfaces; it is not Greenvines-authored or a separately published UI specification.

### Shape

- None / rectangle (`none: 0`): every button, input, card, and band — the system is rigorously sharp-cornered
- Full / circular (`full: 9999` / `9999px`): the floating chat button only; the source also writes that circle as `50%`

Reading 0px on every rectangle and the chat FAB as the only curve as a deliberate discipline is a derived editorial implementation inference from the verified surfaces; it is not Greenvines-authored or a separately published UI specification. The two token keys themselves are live-computed.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | The entire system — `box-shadow: none` measured across nav, buttons, cards |
| Tint (Level 1) | `#9caba3` / `#e6eae8` background shift | Section and card separation |
| Dark panel (Level 2) | `#002d18` background | Footer, mega menu — immersive brand moments |

**Shadow Philosophy**, as the source states it: Greenvines is a fully shadowless system. Live inspection found no box-shadows on any measured element — buttons, the add-to-cart bar, photo cards, and the sticky chrome are all flat. Depth is communicated by color temperature instead: white canvas → sage tint → deep forest green. Combined with the 0px radius discipline, the result feels printed rather than layered — closer to high-end packaging design than to app UI. Reading that progression as walking from daylight into foliage, and reading the printed-rather-than-layered result as the brand's territory, are derived editorial implementation inferences from the verified surfaces; they are not Greenvines-authored or a separately published UI specification.

### Motion

The source attributes its token-level claims to a live inspection of computed color, type, spacing, radius, and shadow on the homepage, product, and brand-story surfaces. The source's own closing note assigns §14 States and §15 Motion as editorial extrapolations consistent with the measured flat/sharp/quiet system — design guidance, not measured values. The durations, easing roles, motion rules, and reduced-motion behavior below are therefore a derived editorial implementation inference from the verified surfaces; they are not Greenvines-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 150ms | Hover fills on outline buttons, link underlines |
| `motion-standard` | 250ms | Section fades, mega-menu open, image crossfades |
| `motion-slow` | 400ms | Full-screen menu and photographic hero transitions |

Easing roles — three roles with declared uses. The specific curve values the source lists are not traceable to Greenvines evidence, so the curves are omitted here and only the roles and their uses are kept:

| Token | Use |
|---|---|
| `ease-standard` | Default two-way transitions |
| `ease-enter` | Menu and overlay arrivals |
| `ease-exit` | Dismissals |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.

Motion rules, as the source states them. Motion is slow, soft, and botanical — closer to a breath than a bounce. Outline CTAs transition border/fill on hover at `motion-fast`; the full-screen `#002d18` mega menu fades in at `motion-slow`; photography crossfades rather than slides. No spring, overshoot, or parallax gimmicks — a brand built on subtraction does not add kinetic noise. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and crossfades become cuts; the store remains fully functional. The breath/bounce characterization is part of the same editorial extrapolation named above.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

Assigning these six rows to official product-use, live computed surface-use, official distributed asset, declared-only, license, and outside-these-captures — including the reading that the philosophy pages do not publish a typography token, that `gv` is not a downloadable brand-font package, and that `Insider-Poppins` is an embed rather than a brand face — is a derived editorial implementation inference from the verified surfaces; it is not Greenvines-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Official product-use | The brand-story and clean-beliefs pages state philosophy and formulation principles; they do not publish a universal current typography token. |
| Live computed surface-use | Display and UI compute `gv, "Noto Sans TC", 微軟正黑體, serif`. Document body computes `"Helvetica Neue", Helvetica, Arial, sans-serif` for Latin fallback text. |
| Official distributed asset | No Greenvines-exclusive distributed type family file was verified. `gv` is recorded as a custom webfont used on the live surfaces, not as a downloadable brand-font package. |
| Declared-only | Third-party promo ribbons injected by the marketing layer use `Insider-Poppins` at 12px/600 — an embed, not a brand font. |
| License | This record does not establish a Greenvines font-license notice for `gv` or Noto Sans TC. |
| Outside these captures | Typography on any surface beyond the inspected pages and the fetched philosophy pages sits outside this contract. |

### Family

- **Display & UI:** `gv` (custom webfont), fallback `"Noto Sans TC", 微軟正黑體, serif` — carries every headline, nav item, button label, and footer link.
- **Base:** `"Helvetica Neue", Helvetica, Arial, sans-serif` on the document body for Latin fallback text.

A fallback member of a stack is never presented as the brand face. Do not replace `gv` with Noto Sans TC or Helvetica Neue and present the substitute as Greenvines display type. That fallback rule is a derived editorial implementation inference from the verified surfaces; it is not Greenvines-authored or a separately published UI specification.

### Type roles

| Role | Font | Size | Weight | Line height | Tracking | Notes |
|---|---|---:|---:|---:|---:|---|
| Display Hero (`display-hero`) | gv | 104px | 100 | 1.10 (114px) | 2px | Page titles (品牌故事), brand name hero |
| Display (`display`) | gv | 52px | 100 | 1.23 (64px) | 2px / normal | Homepage and product section heads |
| Heading (`heading`) | gv | 45px | 100 | 1.25 | 2px | Product-page narrative H2 |
| Sub-heading (`subheading`) | gv | 30px | 100 | 1.30 | 2px | Sub-sections, product story tabs. The source table also writes weight 100–400 for this role; the token-set key records 100. |
| Card Title (`card-title`) | gv | 28px | 100 | 1.36 (38px) | normal | White titles on photographic cards |
| Body Large (`body-lg`) | gv | 20px | 400 | 1.60 (32px) | normal | Brand-story paragraphs |
| Nav (mega menu) (`nav`) | gv | 16px | 300 | 1.20 | normal | Product links in the full-screen menu |
| Body (`body`) | gv | 14px | 400 | 1.43 | normal | Standard body text. Token-set key `body` records line-height 1.43; it is not the button role. |
| Button (`button`) | gv | 14px | 400 | 1.40 | 1px | Outline / fill CTA labels |
| Footer Heading (`footer-head`) | gv | 15px | 100 | 2.40 (36px) | normal | Footer column heads in `#9b9b9b` |

Line heights are kept in the form the source verified them: unitless ratios, with the px equivalents the source itself spelled out shown beside them. `body` 1.43 and `button` 1.40 stay two keys.

Mega-menu section heads are recorded in the source body at 17px / 400 (更多綠藤, 加入綠藤). That metric is not a token-set type role; it stays attached to the Mega Menu Product Link record.

### Typography rules

The source states these four as its typography principles. Reading the measured metrics as those principles is a derived editorial implementation inference from the verified surfaces; it is not Greenvines-authored or a separately published UI specification.

- **Weight 100 is the brand voice**: every display headline is ultra-thin. Bolder weights (400–600) are reserved for small functional UI (buttons, add-to-cart).
- **Positive tracking, not negative**: 2px letter-spacing at display sizes and 1px on button labels — thin strokes are given air, the opposite of the tight-tracked Western SaaS convention.
- **Hanzi-first scale**: the system is tuned for Traditional Chinese — generous line-heights (1.4–1.6 body) and large display sizes keep dense hanzi legible and elegant.
- **Two jobs, one family**: the gv/Noto Sans TC stack covers both whisper-thin display and functional UI; hierarchy is created by weight and size, never by switching typefaces.

### Assets

- Photography of real plants and real bottles is first-party catalog content. Treating that photography as the brand texture, and the instruction not to replace it with illustration or gradients, are derived editorial implementation inferences from the verified surfaces; they are not Greenvines-authored or a separately published UI specification.
- The catalog's logo entry for this reference is a Google favicon-service URL rather than a Greenvines-hosted file. The source's own sibling excludes that service from the TW brand-owned evidence count, so the URL is recorded in the provenance ledger and is not presented here as a Greenvines brand asset.

<!-- design-md:section components-states -->
## 4. Components & States

### How to read this section

The source declares each harvested component with a primitive type (`button`, `input`, `card`, `listItem`) and a value set. Those types are preserved per component. Applicability below is judged by each control's role in this product, not by whether a visual treatment for that state was recorded; where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. The source's live inspection recorded computed default styling, and the state treatments in the State record below are stated by the source as editorial extrapolations rather than measured per control. Every kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; it is not Greenvines-authored or a separately published UI specification. This is not a claim that state coverage is finished.

### Outline CTA (Default)

- Role: the system's default CTA — 深入了解 →, 閱讀文章 →, 純淨保養組合 →, 非必要成分清單 →
- Primitive type: `button` · Kind: interactive
- Background: transparent
- Text: `#002d18`
- Border: 2px solid `#002d18`
- Radius: 0px
- Padding: 12px 20px
- Height: 48px
- Font: 14px / 400 / gv, letter-spacing 1px
- Observed: default; arrow suffix → / 〉

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; the system declares outline CTAs transitioning border/fill on hover at `motion-fast`. No separate hover fill value is given |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | The system declares outline buttons dropping to reduced-opacity `#002d18` border and label together; no opacity value is given |
| loading | not-applicable | This control takes the reader to a story, article, or list; it does not commit an operation whose in-progress state it could report. |
| error | not-applicable | This control takes the reader to a destination; the destination, not the button, reports whether that request failed. |
| success | not-applicable | Same role reason: reaching a destination is not an operation with a success result. |

### Accent Fill CTA

- Role: emphasis variant of the same geometry — sustainability 深入了解 blocks, 88-折 offer links
- Primitive type: `button` · Kind: interactive
- Background: `#c84600`
- Text: `#ffffff`
- Border: 2px solid `#c84600`
- Radius: 0px
- Padding: 12px 20px
- Height: 48px
- Font: 14px / 400 / gv, letter-spacing 1px

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | The system declares orange CTAs fading rather than turning grey to preserve the commerce signal; no opacity value is given |
| loading | not-applicable | This control sends the reader to a sustainability block or offer; reaching that destination is not a commit whose in-progress state the button reports. |
| error | not-applicable | This control sends the reader to a destination; the destination, not the button, reports whether that request failed. |
| success | not-applicable | Same role reason: reaching a destination is not an operation with a success result. |

### Add-to-Cart

- Role: 加入購物車 on product pages — 80px tall commerce bar, the heaviest weight in the system
- Primitive type: `button` · Kind: interactive
- Background: `#c84600`
- Text: `#ffffff`
- Radius: 0px
- Padding: 12px 20px
- Height: 80px
- Font: 20px / 600 / gv, letter-spacing 1px. The source body also writes this label as 15–20px / 600; the token-set key records `20px / 600`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A commit control whose availability can lapse; the system's orange-fade disabled treatment applies |
| loading | applicable | The system declares the `#c84600` bar holding its size with an inline progress state while the label stays visible. |
| error | applicable | Adding to cart is a commit that can fail; visual treatment omitted at this control. The system's checkout/network error language lives in the State record. |
| success | applicable | The system declares a quiet inline confirmation near the cart bar; the persistent bar itself reflects quantity. |

### Quantity Stepper

- Role: +/− steppers flanking the add-to-cart bar, same 80px height
- Primitive type: `button` · Kind: interactive
- Background: `#f1f1f1`
- Text: `#0a2d1b`
- Radius: 0px
- Height: 80px
- Font: 20px / 400

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A stepper whose availability can lapse (bounds); visual treatment omitted |
| loading | not-applicable | This control increments or decrements quantity; it does not commit a cart or form operation whose in-progress state it could report. |
| error | not-applicable | Same role reason: stepping quantity is not an operation whose failure this control reports. |
| success | not-applicable | Same role reason: stepping quantity is not an operation with a success result. |

### Newsletter Submit

- Role: 訂閱電子報 submit on the dark footer panel, 50px tall
- Primitive type: `button` · Kind: interactive
- Background: `#ced5d1`
- Text: `#002d18`
- Radius: 0px
- Height: 50px
- Font: 16px / 400

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A commit control whose availability can lapse; visual treatment omitted |
| loading | applicable | This control commits the newsletter subscription; an in-progress state is meaningful for that commit. Visual treatment omitted. |
| error | applicable | A subscribe submit can fail; the system's form-validation language belongs here as a role. Visual treatment omitted. |
| success | applicable | The system declares a single white confirmation line on the `#002d18` footer panel, replacing the form. |

### Newsletter Field

- Role: name and email fields on the `#002d18` footer (placeholder 希望綠藤怎麼稱呼您 / 您的電子郵件地址), 55px tall
- Primitive type: `input` · Kind: interactive
- Background: rgba(229,229,229,0.2) — translucent pale tint over the `#002d18` footer; the token-set note also writes this as a `#e6eae8`-tinted fill
- Text: `#ffffff`
- Border: none
- Radius: 0px
- Height: 55px
- Font: 14px / 400

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A field whose availability can lapse; visual treatment omitted |
| loading | not-applicable | The field holds a value; the submit control, not the field, reports an in-progress subscribe. |
| error | applicable | The system declares a field-level message below the input in plain Traditional Chinese describing what's needed; the field keeps its translucent fill, no aggressive red flooding. |
| success | not-applicable | Subscribe success is reported by replacing the form, not by a success treatment on the field. |

### Chat FAB

- Role: floating circular customer-chat button — the only rounded element in the system
- Kind: interactive. The source does not attach a harvested `type` key; the record names it a button.
- Background: `#002d18`
- Radius: 50%
- Size: 58px

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A chat entry whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens customer chat; it is a dialog trigger, not a commit whose in-progress state it reports. |
| error | not-applicable | Opening chat is not an operation whose failure this control reports. |
| success | not-applicable | Same role reason: opening chat is not an operation with a success result. |

### Sage Section Band

- Role: large tinted content bands segmenting the homepage; photography sits directly on the tint
- Primitive type: `card`
- Kind: not declared. The source records this band's surface values and attaches no action, target, or interaction treatment to the band itself. Neither an interactive nor a non-interactive kind is established here, so no kind and no state-applicability map are declared.
- Background: `#9caba3`
- Text: `#002d18`
- Radius: 0px

### Pale Surface Band

- Role: quieter alternating section surface
- Kind: not declared. The source records the surface values and attaches no harvested `type` and no interaction treatment. Neither kind is established here, so no kind and no state-applicability map are declared.
- Background: `#e6eae8`
- Text: `#002d18`
- Radius: 0px

### Photo Overlay Card

- Role: story cards — 減法保養「荷包蛋保養法」, 綠藤生機空瓶回收計畫
- Kind: not declared. The source records full-bleed photography, white 28px / 100 / gv titles, and the two story titles, but attaches no harvested `type` and no interaction treatment to the card itself. Neither kind is established here, so no kind and no state-applicability map are declared.
- Background: full-bleed photography
- Text: `#ffffff`
- Font: 28px / 100 / gv titles

### Mega Menu Product Link

- Role: product links in the full-screen dark-green menu listing every product by name (example recorded: 活萃三日修護精華)
- Kind: interactive. The source does not attach a harvested `type` key; the record is a destination link.
- Background: `#002d18` full-screen overlay
- Text: `#ffffff`
- Font: 16px / 300 / gv for product links; 17px / 400 for section heads (更多綠藤, 加入綠藤)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destination can be unavailable; visual treatment omitted |
| loading | not-applicable | This control takes the reader to a product; choosing a destination is not a commit whose in-progress state the item reports. |
| error | not-applicable | The destination page, not the item, reports whether that request failed. |
| success | not-applicable | Same role reason: choosing a destination is not an operation that commits and reports success. |

### Footer Link

- Role: footer navigation link on `#002d18` (品牌故事, 純淨保養主張, 3200+ 非必要成份清單, 永續報告書)
- Primitive type: `listItem` · Kind: interactive
- Text: `#ffffff`
- Font: 15px / 400

Footer chrome recorded with this control: column headings `#9b9b9b`, 15px / 100, line-height 36px (深入了解, 客戶服務, 關注我們, 訂閱電子報); fine print `#aaaaaa`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destination can be unavailable; visual treatment omitted |
| loading | not-applicable | This control takes the reader to a footer destination; it does not commit an operation whose in-progress state it could report. |
| error | not-applicable | This control takes the reader to a destination; the destination, not the link, reports whether that request failed. |
| success | not-applicable | Same role reason: reaching a destination is not an operation with a success result. |

### State record

The source's state contract, preserved with its values and copy. The source's own closing note marks §14 States as an editorial extrapolation consistent with the measured flat/sharp/quiet system — design guidance, not measured values. The treatments below are therefore a derived editorial implementation inference from the verified surfaces rather than measured per-control observations, and they are not Greenvines-authored or a separately published UI specification.

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

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- Full-width photographic bands alternate with white editorial blocks — the page is a vertical rhythm of image, manifesto, image
- Homepage: hero photography → 52px thin headline → outline CTA, repeated as a cadence
- Product pages: long-form narrative sections (配方架構 透明解析, reviews) with a persistent 80px add-to-cart bar
- Footer is a four-column directory (深入了解 / 客戶服務 / 關注我們 / 訂閱電子報) on the dark green panel
- Button padding 12px 20px is the recurring interactive unit
- Mega-menu links carry 50px right padding; product story tabs use 15px horizontal padding
- Section bands are tall and full-bleed, with display headlines given generous 64px+ line boxes

Reading the page as a vertical rhythm of image, manifesto, image; reading subtraction as layout — one idea, one CTA, per band; photography as the container instead of cards-with-borders; and flat segmentation by bands of `#ffffff`, `#9caba3`, `#e6eae8`, and `#002d18` as the page's entire depth structure — is a derived editorial implementation inference from the verified surfaces; it is not Greenvines-authored or a separately published UI specification.

Responsive behavior. The source's live inspection was run as a desktop computed-style pass, and its own evidence note attributes token-level claims to that inspection; the breakpoints, collapsing strategy, image behavior, and the source's "comfortably tappable" reading of the recorded target sizes are stated by the source at system level rather than measured across viewports, so they are a derived editorial implementation inference from the verified surfaces and are not Greenvines-authored or a separately published UI specification.

| Name | Width | Key changes |
|---|---|---|
| Mobile | <768px | Single column; display sizes compress; mega menu becomes full-screen list |
| Tablet | 768–1200px | Photographic bands persist full-bleed; editorial blocks narrow |
| Desktop | >1200px | Full layout, 1440px-class canvas with centered editorial measure |

- **Touch targets:** Outline CTAs at 48px height with 12px 20px padding — comfortably tappable. Add-to-cart bar at 80px height with full-width steppers — thumb-zone commerce. Newsletter fields at 55px height on the footer panel.
- **Collapsing:** Display headlines scale down but keep weight 100 and positive tracking. Full-bleed photography crops rather than stacks — imagery stays immersive. The persistent add-to-cart bar docks to the bottom on product pages. Footer columns stack vertically on the dark panel.
- **Imagery:** Photography is full-bleed at every size, with white weight-100 titles overlaid. No image carries shadow or rounded corners at any breakpoint.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The source characterizes Greenvines as speaking in the voice of a calm, knowledgeable, subtraction-minded botanist — confident enough to tell customers to use *less*. The register is editorial and philosophical rather than promotional: the site's own title is a thesis, 「沒有減法，何來精華」 ("without subtraction, whence essence?"). Copy consistently teaches before it sells, decodes ingredient science into plain Traditional Chinese, and frames purchases as choices within a larger sustainable life. That characterization, that register reading, and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not Greenvines-authored or a separately published UI specification. The quoted strings themselves are brand-issued.

| Context | Tone |
|---|---|
| Hero headlines | Aphoristic, manifesto-like. 「現在，保養從減法開始」. Statements of philosophy, not offers. |
| Product naming | Poetic-functional compounds: 活萃三日修護精華, 綠色海洋精華油, 入夢 θ 呼吸精萃. |
| CTAs | Invitations to understand: 深入了解 →, 閱讀文章 →. Even commerce CTAs stay quiet (加入購物車). |
| Ingredient claims | Evidence-framed and transparent: 配方架構 透明解析, the 3200+ 非必要成分清單. |
| Social proof | Concrete numbers, no superlatives: 超過兩萬則真實好評，23 款純淨保養洗沐產品. |
| Customer service | Warm, unhurried, reassuring — 45 天無條件退貨 stated as confidence in the product. |
| Sustainability | Action-led reporting: 空瓶回收計畫, 綠色生活 21 天, presented as ongoing experiments. |

Voice samples, verbatim from brand surfaces. The Traditional Chinese text is the string; the English beside a Chinese line is a reading aid, not the label:

- 「沒有減法，何來精華」 — site title tagline.
- 「現在，保養從減法開始 #二減一加」 — homepage section headline.
- 「超過兩萬則真實好評，23 款純淨保養洗沐產品」 — homepage social-proof headline.
- "More is Less. 多，即是少。" — brand-story page headline.
- 「讓肌膚熟悉的，應該純淨」 — product-page section headline.
- "The more we know, the less we need." — clean-beauty beliefs page.

**Forbidden register**: miracle-cure promises, fear-based ingredient scaremongering without evidence, urgency pressure (countdown timers, 限時搶購 hysteria), beauty-standard shaming, and undefined chemistry jargon left unexplained. The source states that copy teaches before it sells — that characterization is a derived editorial implementation inference from the verified surfaces; it is not Greenvines-authored or a separately published UI specification.

Reproduce the Traditional Chinese strings above, the CTA and product labels recorded in the component roles, the footer column heads, the placeholders 希望綠藤怎麼稱呼您 / 您的電子郵件地址, and the strings in the State record byte-exact rather than translating or re-casing them. Traditional Chinese is the first-class voice on these TW surfaces.

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=evidence-backed-reconstruction lang=en -->
### Authority

This document is an evidence-backed reconstruction, not authority for an unrelated target project.
<!-- design-md:claim-end -->

<!-- design-md:claim application-priority order=prompt-fact,repository-fact,system-contract,reference-inspiration lang=en -->
### Application priority

1. Direct user instructions for the requested scope.
2. Repository facts.
3. This system contract.
4. Reference inspiration.
<!-- design-md:claim-end -->

<!-- design-md:claim unknowns policy=absent-at-smallest-unresolved-boundary lang=en -->
### Unknowns

Omit only the smallest unresolved value or group. Do not replace it with a plausible default.
<!-- design-md:claim-end -->

<!-- design-md:claim changes policy=review-record-validate-before-adoption lang=en -->
### Changes

Record, review, and validate changes before adoption.
<!-- design-md:claim-end -->

### Recorded unresolved decisions

These are named values, not permissions to invent. The source records no conflict among its own Tier 1 values.

- **Exact easing curves.** Three easing roles and their uses are established; the curve values are omitted because they are not traceable to Greenvines evidence. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **The hover fill value on outline CTAs.** The system states that outline CTAs transition border/fill on hover at `motion-fast`; it does not name the hover fill hex or opacity.
- **The disabled opacity value.** The system states reduced-opacity `#002d18` on outline buttons and an orange fade that preserves the commerce signal, without naming the opacity.
- **The skeleton / loading pulse.** The system declares `#e6eae8` blocks at final dimensions with a gentle opacity pulse, without naming the pulse's duration or opacity range.
- **The add-to-cart inline progress indicator's dimensions.** The system declares the bar holding size with an inline progress state, without naming thickness.
- **`#e67600` promotional-ribbon role.** The hex is observed rarely; no token-set key or role scale is established for it.
