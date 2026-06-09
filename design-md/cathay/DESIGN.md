---
id: cathay
name: Cathay
country: TW
category: finance
homepage: "https://www.cathaybk.com.tw"
primary_color: "#00512a"
logo:
  type: favicon
  slug: "https://www.cathaybk.com.tw/apple-touch-icon.png"
verified: "2026-06-08"
added: "2026-06-08"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-08"
  note: "primary = deep brand green #00512a (live primary CTA fill); accent = bright Cathay green #26a862 (most-used non-neutral, icon + emphasis)"
  colors:
    primary: "#00512a"
    accent: "#26a862"
    accent-tint: "#f3fff7"
    ink-deep: "#00283d"
    canvas: "#fafafa"
    surface: "#ffffff"
    heading: "#333333"
    body: "#555555"
    muted: "#888888"
    hairline: "#eeeeee"
    border-mute: "#bebebe"
    on-primary: "#ffffff"
    warn: "#e87c07"
  typography:
    family: { sans: "Roboto Flex", cjk: "Noto Sans TC", fallback: "PingFang TC, Microsoft JhengHei, Heiti TC, sans-serif" }
    hero:        { size: 36, weight: 700, lineHeight: 1.50, tracking: 0, use: "Homepage hero headline" }
    section:     { size: 28, weight: 700, lineHeight: 1.50, tracking: 0, use: "Feature / section titles" }
    subheading:  { size: 18, weight: 400, lineHeight: 1.50, tracking: 0, use: "Quick-action labels, lead text" }
    body:        { size: 16, weight: 400, lineHeight: 1.50, tracking: 0, use: "Standard reading text, nav, button label" }
    caption:     { size: 14, weight: 400, lineHeight: 1.50, tracking: 0, use: "Footer links, metadata, fine print" }
  spacing: { xs: 5, sm: 11, md: 15, base: 20, lg: 27, xl: 40, section: 64 }
  rounded: { sm: 5, md: 5, lg: 5, full: 9999 }
  shadow:
    ambient: "rgba(0,0,0,0.08) 0px 2px 8px"
    standard: "rgba(0,0,0,0.12) 0px 4px 16px"
    overlay: "rgba(0,0,0,0.22) 0px 8px 24px"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#00512a", fg: "#ffffff", border: "1px solid #00512a", radius: "5px", height: "50px", padding: "12px 20px", font: "16px / 400", active: "fill darkens briefly", use: "Primary CTA (把握好機匯, 我有興趣)" }
    button-outline: { type: button, bg: "transparent", fg: "#00512a", border: "1px solid #00512a", radius: "5px", font: "16px / 400", use: "Secondary action beside primary CTA" }
    nav-link: { type: tab, bg: "transparent", fg: "#333333", font: "16px / 400", use: "Top nav links (個人金融, 企業金融), no underline" }
    card: { type: card, bg: "#ffffff", radius: "5px", padding: "27px", shadow: "rgba(0,0,0,0.12) 0px 4px 16px", use: "Content/product cards (CUBE信用卡)" }
    card-glass: { type: card, bg: "rgba(255,255,255,0.5)", radius: "5px", padding: "40px 15px", use: "Quick-entry glass tiles over hero imagery (開戶, 匯率查詢)" }
    input: { type: input, bg: "#ffffff", fg: "#333333", border: "1px solid #eeeeee", radius: "5px", focus: "border #00512a", use: "Form input, placeholder #888888" }
    footer-link: { type: tab, bg: "#00283d", fg: "#ffffff", font: "14px / 400", use: "Footer group-company + policy links on dark band" }
---

# Design System Inspiration of Cathay

## 1. Visual Theme & Atmosphere

Cathay United Bank (國泰世華銀行) presents the calm, dependable face of one of Taiwan's largest financial groups — and its digital design reflects exactly that institutional weight, rendered with surprising lightness. The homepage opens on an almost-white canvas (`#fafafa`) carrying near-black `#333333` text, so the page never feels heavy or corporate-cold; the warmth comes entirely from a single confident brand color: Cathay green. Two greens do the work — a deep, forest-toned `#00512a` that anchors every primary action and a brighter, more optimistic `#26a862` that lights up icons, links, and emphasis. The result reads as trustworthy and grounded (the deep green), but never stuffy (the bright green and airy off-white). This is a bank that wants to feel like a steady partner for everyday financial life, not a marble-columned vault.

The atmosphere is utilitarian-friendly rather than aspirational-luxury. Where a Western fintech might chase a moody gradient or a whisper-weight headline, Cathay leans into clarity: bold 700-weight headlines (36px hero, 28px sections), generous 1.5 line-height for comfortable Traditional Chinese reading, and a tightly disciplined component palette where nearly every interactive surface settles on the same gentle 5px corner radius. Quick-action tiles — 換匯 (exchange), 提款 (withdraw), 轉帳 (transfer), 視訊 (video) — sit front-and-center, signaling a service-first product where the most common banking tasks are one tap away.

Restraint is the defining discipline. The live DOM shows green used sparingly and deliberately: `#00512a` and `#26a862` together account for only a few dozen of the hundreds of color applications on the page, while neutrals (`#333333`, `#ffffff`, `#555555`) carry the vast majority. Green is a punctuation color, not a wash. A faint mint tint (`#f3fff7`) backs green-themed sections, and a deep teal-navy (`#00283d`) appears in the footer and on dark surfaces for grounding contrast. There are no decorative gradients fighting for attention, no pill-shaped buttons, no playful overshoot — just a quietly competent surface that puts the customer's task above the brand's ego.

**Key Characteristics:**
- Cathay green dual-tone: deep `#00512a` for actions, bright `#26a862` for accents and icons
- Airy off-white canvas (`#fafafa`) with near-black `#333333` text — light, never corporate-cold
- Bold 700-weight headlines (36px / 28px) for confident hierarchy
- Roboto Flex + Noto Sans TC stack — Latin and Traditional Chinese tuned together
- Uniform 5px radius on buttons, cards, and tiles — gentle, consistent, never pill
- Generous 1.5 line-height throughout for comfortable CJK reading
- Green-as-punctuation: neutrals dominate, green appears only on intent
- Deep teal-navy (`#00283d`) grounding the footer and dark surfaces

## 2. Color Palette & Roles

### Primary
- **Cathay Deep Green** (`#00512a`): The primary brand color. Fills every primary CTA ("把握好機匯", "我有興趣", "更多新鮮事"), forms outline-button borders, and signals the bank's identity. A dark forest green that reads as stable, mature, and trustworthy.
- **Off-White Canvas** (`#fafafa`): The page background. A hair softer than pure white, keeping long pages easy on the eyes.
- **Surface White** (`#ffffff`): Card and tile surfaces, dropdown panels, content containers.

### Accent
- **Cathay Bright Green** (`#26a862`): The most-used non-neutral on the page (37 applications in the live scan). Powers icons, inline emphasis, link affordances, and lighter brand moments. The optimistic counterpart to the deep green.
- **Mint Tint** (`#f3fff7`): A barely-there green-white used to back green-themed section bands and soft highlight zones.

### Ink & Neutrals
- **Heading Ink** (`#333333`): Primary text and headings. Near-black with no color cast — by far the dominant color on the page (592 applications).
- **Body Slate** (`#555555`): Secondary text, sub-navigation links, descriptive copy.
- **Muted Gray** (`#888888`): Tertiary text, timestamps, disabled-adjacent labels.
- **Deep Teal-Navy** (`#00283d`): Footer background and dark-surface grounding tone. A very dark blue-green that pairs naturally with the brand greens.

### Surface & Borders
- **Hairline** (`#eeeeee`): Default border and divider color for cards, list rows, and inputs.
- **Border Mute** (`#bebebe`): Stronger neutral border for emphasized containers and form outlines.
- **On-Primary White** (`#ffffff`): Text and icons placed on deep-green fills.

### Status
- **Warn Orange** (`#e87c07`): Sparingly used warning / attention accent for notices and highlights. Never an interactive primary.

## 3. Typography Rules

### Font Family
- **Latin**: `Roboto Flex` — a variable grotesque carrying numerals, English labels, and product names.
- **Traditional Chinese**: `Noto Sans TC`, with system fallbacks `PingFang TC`, `Microsoft JhengHei`, `Heiti TC`.
- **Stack** (verbatim from live DOM): `"Roboto Flex", "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", "Heiti TC", sans-serif`
- The pairing is deliberate: Roboto Flex handles Latin and digits with a clean modern grotesque, while Noto Sans TC carries Han characters at matching weight and rhythm so mixed CJK/Latin lines stay even.

### Hierarchy

| Role | Size | Weight | Line Height | Notes |
|------|------|--------|-------------|-------|
| Hero Headline | 36px (2.25rem) | 700 | 1.50 (54px) | Homepage hero — "每次都是更好的體驗" |
| Section Title | 28px (1.75rem) | 700 | 1.50 (42px) | Feature / activity section heads |
| Subheading / Lead | 18px (1.13rem) | 400 | 1.50 (27px) | Quick-action labels, intro copy |
| Body | 16px (1.00rem) | 400 | 1.50 (24px) | Standard text, nav, button label |
| Caption / Footer | 14px (0.88rem) | 400 | 1.50 (21px) | Footer links, metadata, fine print |

### Principles
- **Bold for hierarchy, regular for everything else**: Headlines commit to weight 700; body, nav, and buttons all sit at weight 400. There is no in-between medium weight on the marketing surface — the contrast between 700 and 400 carries the entire hierarchy.
- **Consistent 1.5 line-height**: Every text role uses a 1.5 ratio (24px on 16px, 42px on 28px, 54px on 36px). This generous leading is a CJK-readability decision — Traditional Chinese needs breathing room that Latin-only systems can skip.
- **No letter-spacing tricks**: Tracking is `normal` everywhere. Han characters are already monospaced by design; forcing tracking would break their rhythm.
- **Size, not weight, separates body tiers**: Subheadings step up to 18px while staying weight 400 — the system prefers scaling type size over adding weight for secondary emphasis.

## 4. Component Stylings

### Buttons

**Primary (Deep Green)**
- Background: `#00512a`
- Text: `#ffffff`
- Padding: 12px 20px
- Radius: 5px
- Height: 50px
- Border: `1px solid #00512a`
- Font: 16px weight 400
- Use: Primary CTA — "把握好機匯", "我有興趣", "設定手機提款", "更多新鮮事"

**Outline / Secondary**
- Background: transparent
- Text: `#00512a`
- Radius: 5px
- Border: `1px solid #00512a`
- Font: 16px weight 400
- Use: Secondary actions paired beside a primary CTA

**Quiet Nav Action**
- Background: transparent
- Text: `#555555` (or `#333333` in main nav)
- Radius: 0
- Font: 16-18px weight 400
- Use: Header utility links (登入), inline service shortcuts (換匯 / 提款 / 轉帳 / 視訊)

### Cards & Tiles

**Standard Card**
- Background: `#ffffff`
- Radius: 5px
- Padding: 21-27px
- Shadow: `rgba(0,0,0,0.12) 0px 4px 16px` (soft neutral)
- Use: Content cards, product cards ("CUBE信用卡", "CUBE好友大募集")

**Glass Tile (over imagery)**
- Background: `rgba(255,255,255,0.5)`
- Radius: 5px
- Padding: 40px 15px
- Use: Quick-entry tiles over hero/feature imagery — "開戶", "挑選信用卡", "線上申辦", "匯率查詢", "預約服務", "活動專區"

### Navigation
- Top nav links: `#333333`, 16px weight 400, no underline — "個人金融", "企業金融", "私人銀行"
- Utility link (登入 / sign-in): 16px, 40px tall, transparent
- Sub-nav and footer groups: `#555555` at 14px
- Footer: dark `#00283d` surface, white (`#ffffff`) links at 14px — group-company links ("國泰金控", "國泰人壽", "國泰產險", "國泰綜合證券"), policy links ("隱私權保護政策", "顧客資料保密措施")

### Inputs & Forms
- Border: `1px solid #eeeeee` (or `#bebebe` for emphasis)
- Radius: 5px
- Focus: deep green `#00512a` border / ring
- Text: `#333333`
- Placeholder: `#888888`

---

**Verified:** 2026-06-08 (omd-add-reference — Tier 1 live inspect)
**Tier 1 sources:** https://www.cathaybk.com.tw, https://www.cathay-cube.com.tw (live DOM via playwright getComputedStyle; redirects to cathay-cube.com.tw/cathaybk — homepage of 國泰世華銀行; primary CTA `#00512a`, accent `#26a862`, canvas `#fafafa`, hero 36px/700 all measured live)
**Country sources:** cathaybk.com.tw (brand-owned .tw), cathayholdings.com (國泰金控 group .tw), Apple App Store TW (CUBE App listing)
**`.verification.md`:** `web/references/cathay/.verification.md`

## 5. Layout Principles

### Spacing System
- Base unit: ~5px, with the live DOM favoring multiples and near-multiples: 5px, 11px, 15px, 20px, 27px, 40px
- Notable: button padding `12px 20px`, card padding `21-27px`, glass-tile padding `40px 15px` — generous internal breathing room on tappable surfaces

### Grid & Container
- Centered max-width content column with full-bleed hero and feature bands
- Quick-action row: a horizontal strip of equal-width tiles (換匯 / 提款 / 轉帳 / 視訊) directly below the hero — task-first IA
- Product/activity sections: multi-column card grids that collapse to single column on mobile
- Footer: wide multi-column link directory grouping the broader Cathay Financial group on a dark `#00283d` band

### Whitespace Philosophy
- **Service density up top, marketing breathing room below**: The most-used banking tasks are packed tightly into the quick-action row, while promotional sections below get generous vertical spacing.
- **Card-driven rhythm**: Nearly all content lives in 5px-radius white cards on the off-white canvas, so whitespace reads as the gap between cards rather than empty void.
- **CJK-comfortable leading**: 1.5 line-height across the board gives Traditional Chinese paragraphs the air they need.

### Border Radius Scale
- The system is effectively single-radius: **5px** on buttons, cards, tiles, and inputs alike.
- 0px on plain text links and full-width footer rows.
- No pill shapes, no large 12px+ rounding — the uniform gentle 5px is a brand signature.

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, footer |
| Ambient (Level 1) | `rgba(0,0,0,0.08) 0px 2px 8px` | Subtle card lift, hover hints |
| Standard (Level 2) | `rgba(0,0,0,0.12) 0px 4px 16px` | Content cards, product cards |
| Overlay (Level 3) | `rgba(0,0,0,0.22) 0px 8px 24px` | Dropdowns, modals, floating menus |

**Shadow Philosophy**: Cathay's elevation is honest and neutral — soft black shadows (`rgba(0,0,0,...)`) with no color tint, in deliberate contrast to fintechs that brand their shadows. The bank's depth language is about subtle, trustworthy lift rather than dramatic float. The live DOM shows semi-transparent black overlays (`rgba(0,0,0,0.5)`, `rgba(0,0,0,0.22)`) used for scrims and floating layers, keeping the green palette reserved exclusively for brand intent rather than spending it on shadow.

### Decorative Depth
- Glass tiles (`rgba(255,255,255,0.5)`) over hero imagery create a frosted, layered feel without heavy shadow
- Dark footer band (`#00283d`) provides grounding contrast at page end
- Mint tint (`#f3fff7`) sections create gentle figure-ground separation without elevation

## 7. Do's and Don'ts

### Do
- Use deep green `#00512a` for every primary CTA fill and outline border
- Reserve bright green `#26a862` for icons, links, and emphasis accents
- Keep the canvas off-white (`#fafafa`) with `#333333` near-black text
- Use weight 700 for headlines, weight 400 for everything else
- Apply the uniform 5px radius to buttons, cards, tiles, and inputs
- Maintain 1.5 line-height for comfortable Traditional Chinese reading
- Use neutral (untinted) soft black shadows for elevation
- Ground the footer / dark surfaces with deep teal-navy `#00283d`

### Don't
- Don't wash large areas in green — green is punctuation, neutrals dominate
- Don't use pill shapes or large radii — the gentle 5px is the brand
- Don't introduce a medium weight between 400 and 700 on headlines
- Don't tint shadows with brand color — Cathay shadows stay neutral black
- Don't add letter-spacing to CJK text — it breaks Han rhythm
- Don't use orange `#e87c07` as an interactive/primary color — warning only
- Don't replace off-white `#fafafa` with stark pure white across full pages
- Don't bold body, nav, or button labels — they stay weight 400

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, stacked cards, quick-actions wrap to grid |
| Tablet | 768-1024px | 2-column card grids, condensed nav |
| Desktop | 1024-1440px | Full multi-column layout, horizontal quick-action row |
| Large | >1440px | Centered content with wide margins |

### Touch Targets
- Buttons at 50px height — comfortably tappable
- Quick-action tiles tall (≈187px) with 40px 15px padding for large tap zones
- Footer links at 14px with row spacing for finger accuracy

### Collapsing Strategy
- Hero: 36px headline scales down on mobile, weight 700 maintained
- Quick-action strip: horizontal row → 2-up or 3-up grid of tiles
- Product/activity card grids: multi-column → single column stacked
- Top nav: full horizontal → hamburger drawer
- Footer directory: wide multi-column → stacked accordion groups

### Image Behavior
- Glass tiles over imagery keep `rgba(255,255,255,0.5)` legibility scrim at all sizes
- Hero imagery crops to maintain headline contrast on narrow viewports
- Card images keep the consistent 5px radius

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Cathay Deep Green (`#00512a`)
- Accent / icons: Cathay Bright Green (`#26a862`)
- Accent tint: Mint (`#f3fff7`)
- Background: Off-White (`#fafafa`)
- Surface: White (`#ffffff`)
- Heading text: Near-Black (`#333333`)
- Body text: Slate (`#555555`)
- Muted text: Gray (`#888888`)
- Border: Hairline (`#eeeeee`)
- Dark / footer: Teal-Navy (`#00283d`)
- Warning: Orange (`#e87c07`)

### Example Component Prompts
- "Create a hero on off-white `#fafafa`. Headline 36px Noto Sans TC weight 700, line-height 1.5, color `#333333`. Below it a horizontal strip of quick-action tiles, each `rgba(255,255,255,0.5)` glass with 5px radius and 40px 15px padding. Primary CTA: `#00512a` fill, white text, 5px radius, 50px height, 12px 20px padding, weight 400."
- "Design a product card: white `#ffffff` surface, 5px radius, 27px padding, shadow `rgba(0,0,0,0.12) 0px 4px 16px`. Title 18px weight 400 `#333333`, body 16px weight 400 `#555555`. Bottom CTA: deep green `#00512a` button, white text, 5px radius."
- "Build an outline button: transparent fill, `#00512a` text, 1px solid `#00512a` border, 5px radius, 16px weight 400."
- "Create a footer: dark `#00283d` background, white `#ffffff` links at 14px weight 400, grouped in multiple columns for the Cathay group companies."
- "Design a green-themed highlight band: `#f3fff7` mint background, `#26a862` bright-green icons and emphasis, `#333333` body text, 5px-radius cards inside."

### Iteration Guide
1. Green is punctuation — keep neutrals dominant and apply `#00512a` / `#26a862` only on intent.
2. Weight 700 for headlines, weight 400 for body / nav / buttons. No in-between.
3. Every interactive surface gets the uniform 5px radius — never a pill.
4. Use 1.5 line-height everywhere for Traditional Chinese comfort.
5. Keep shadows neutral soft-black (`rgba(0,0,0,...)`) — never tint with green.
6. Canvas is `#fafafa`, not pure white; surfaces are `#ffffff`.
7. Ground dark surfaces and footers in teal-navy `#00283d`.
8. Reserve orange `#e87c07` strictly for warnings, never CTAs.

---

## 10. Voice & Tone

Cathay United Bank's voice is warm, reassuring, and service-led — the tone of a knowledgeable teller who genuinely wants your everyday banking to be easier. The homepage tagline "每次都是更好的體驗" ("Every time, a better experience") and "用科技讓金融生活更安全簡單" ("Use technology to make financial life safer and simpler") set the register: progress framed as care, not disruption. Copy speaks directly to common life tasks — exchange currency, withdraw, transfer, set up mobile withdrawal — in plain, action-first Traditional Chinese.

| Context | Tone |
|---|---|
| Hero headlines | Warm, optimistic, human. "每次都是更好的體驗." Progress as care. |
| Quick-action labels | Single concrete verb. "換匯", "提款", "轉帳", "視訊". No fluff. |
| CTAs | Friendly invitation, not command. "我有興趣", "更多新鮮事", "想轉就轉". |
| Product descriptions | Benefit-first, reassurance-led. Safety and simplicity foregrounded. |
| Notices / fine print | Formal, regulator-aware, precise. Banking compliance register. |
| Footer / legal | Institutional, exact. Group-company and policy links stated plainly. |

**Forbidden register.** Hype superlatives ("革命性" / "revolutionary"), pressure tactics, anything that undercuts the bank's core promise of safety and trust. Cathay sells reassurance; the voice never gambles it for excitement.

## 11. Brand Narrative

Cathay United Bank (國泰世華商業銀行) is the banking arm of **Cathay Financial Holding** (國泰金控), one of Taiwan's largest financial groups, with the broader Cathay group spanning life insurance (國泰人壽), property insurance (國泰產險), securities (國泰綜合證券), investment trust (國泰投信), and more — all surfaced directly in the bank's own footer. The bank in its current form is the product of the 2003 merger of **Cathay Commercial Bank** and **United World Chinese Commercial Bank (世華聯合商業銀行)**, uniting two long-standing Taiwanese institutions under the Cathay umbrella.

The contemporary digital identity centers on the **CUBE** brand — the CUBE App and CUBE credit card ("CUBE信用卡") form the consumer-facing core of a "better every time" product philosophy. The redirect from cathaybk.com.tw into the unified **cathay-cube.com.tw** experience signals the strategic bet: a single, technology-forward digital platform ("用科技讓金融生活更安全簡單") that consolidates everyday banking, cards, and lifestyle services. The deep Cathay green is the through-line connecting this modern digital surface back to the group's decades-long institutional heritage.

What Cathay's design refuses: the cold marble-and-gold visual clichés of legacy banking, and the hype-driven aesthetics of disruptor fintech. What it embraces: a single trustworthy brand green used with discipline, airy off-white surfaces, bold-but-friendly Traditional Chinese type, and a task-first layout that treats the customer's daily needs as the product.

## 12. Principles

1. **Trust is the product.** Every color, weight, and corner radius serves the perception of a safe, dependable bank. Design that gambles trust for novelty is off-brand.
2. **Green with discipline.** The brand green earns its impact precisely because it is rare — punctuation, never wallpaper. Neutrals carry the page so green can mean something.
3. **Service before marketing.** The most common banking tasks sit above the fold in dense quick-action tiles; promotion gets the lower, airier real estate.
4. **Readable in Traditional Chinese first.** 1.5 line-height and the Noto Sans TC pairing are non-negotiable — Han legibility outranks Latin-centric tightness.
5. **One radius, one rhythm.** The uniform 5px corner across every surface is a quiet consistency that reads as institutional reliability.
6. **Warm, not cold.** Off-white over stark white, bold-but-friendly headlines, optimistic bright green — the bank chooses approachability over austerity.
7. **Honest depth.** Shadows stay neutral and subtle. Elevation signals function, never spectacle.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Cathay United Bank customer segments (everyday retail banking customers in Taiwan, CUBE App / CUBE card users, group cross-sell customers), not individual people.*

**Lin Yi-chen (林宜臻), 29, Taipei.** Marketing coordinator and daily CUBE App user. Pays bills, splits dinners, and checks exchange rates before travel. Chose Cathay because the app made transfers and FX feel effortless. Trusts the green brand the way she trusts a familiar convenience store — always there, never surprising.

**Chen Kuo-wei (陳國維), 47, Taichung.** Small-business owner banking with Cathay for both his shop's corporate account (企業金融) and his family's personal accounts. Values that one group covers banking, insurance, and securities. Notices and appreciates when the digital experience is "safer and simpler" because his time is scarce.

**Wang Mei-ling (王美玲), 63, Kaohsiung.** Long-time customer since the United World Chinese Commercial Bank days. Prefers larger, high-contrast text and clear buttons. The bold 700-weight headlines, generous line-height, and obvious green CTAs make the site usable for her without help.

**David Hsu (許大衛), 35, Hsinchu.** Engineer and private-banking-curious investor exploring wealth services (私人銀行). Reads carefully, distrusts hype, and is reassured by the bank's restrained, compliance-aware tone over flashier competitors.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no transactions)** | Off-white canvas, single line in `#555555` at 16px: a plain statement that nothing has happened yet, plus one deep-green `#00512a` CTA to begin. No illustration clutter. |
| **Loading** | Neutral skeleton blocks in `#eeeeee` at final dimensions, soft shimmer. No green spinner — loading stays neutral. |
| **Error (form validation)** | Field-level message below the input, warn orange `#e87c07` accent + `#bebebe` emphasized border. Plain-language guidance on what to fix. |
| **Error (service failure)** | Inline notice in regulator-aware tone. States what happened and the next step. No vague "something went wrong". |
| **Success (action complete)** | Brief confirmation using bright green `#26a862` accent + `#f3fff7` mint background. Calm, past-tense, no exclamation. |
| **Disabled** | Reduced opacity on the green action so it desaturates toward gray while keeping brand read. |
| **Focus** | Deep green `#00512a` border / ring on inputs and buttons for keyboard accessibility. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 150ms | Hover, focus, button press states |
| `motion-standard` | 250ms | Dropdowns, tile hover lift, card reveals |
| `motion-slow` | 400ms | Page-level transitions, hero / carousel reveals |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Most two-way transitions |
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — dropdowns, menus |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |

**Forbidden.** No bounce, no spring overshoot, no playful elastic motion. A bank's motion is steady and predictable — the same discipline as its color use. Carousels and hero reveals on the homepage move at the slow end (≈400ms) and never call attention to themselves.

**Signature motions.**
1. **Quick-action tile hover.** Gentle lift with the standard shadow (`rgba(0,0,0,0.12) 0px 4px 16px`) at `motion-standard / ease-standard`. No color flash — the tile rises, it does not light up.
2. **Primary CTA press.** Brief darkening of the `#00512a` fill at `motion-fast`. Subtle, tactile, trustworthy.
3. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all transitions collapse to near-instant. Carousels become static. Function is never sacrificed for delight.

## 16. Do's and Don'ts

### Do
- Anchor every primary action in deep green `#00512a` and keep accents in bright green `#26a862`.
- Let neutrals (`#333333`, `#ffffff`, `#555555`) carry the page; spend green only on intent.
- Keep the uniform 5px radius and 1.5 line-height as cross-surface constants.
- Write warm, service-first Traditional Chinese copy — verbs and reassurance over hype.
- Ground footers and dark surfaces in teal-navy `#00283d`.

### Don't
- Don't flood layouts with green or switch to pill / large radii.
- Don't tint shadows or add a medium headline weight.
- Don't use orange `#e87c07` for anything interactive — warnings only.
- Don't tighten CJK letter-spacing or drop below 1.5 line-height.
- Don't trade the bank's calm, trustworthy tone for disruptor excitement.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10-16)

Tier 1 live inspect (2026-06-08) via playwright getComputedStyle on
https://www.cathaybk.com.tw (redirects to cathay-cube.com.tw/cathaybk),
homepage of 國泰世華銀行. All token-level claims (primary CTA #00512a,
accent #26a862, canvas #fafafa, ink #333333, footer teal-navy #00283d,
hero 36px/700, section 28px/700, 5px radius, 1.5 line-height, Roboto Flex +
Noto Sans TC stack) are measured from the live DOM.

Group structure (Cathay Financial Holding 國泰金控 — banking, life insurance
國泰人壽, property insurance 國泰產險, securities 國泰綜合證券, investment trust
國泰投信) is taken directly from the bank's own footer links observed in the
live DOM. The 2003 merger of Cathay Commercial Bank and United World Chinese
Commercial Bank (世華聯合商業銀行) is widely documented public history.

The CUBE brand (CUBE App, CUBE信用卡) and taglines "每次都是更好的體驗" and
"用科技讓金融生活更安全簡單" are observed verbatim from the live homepage DOM.

Personas (§13) are fictional archetypes informed by publicly observable
Cathay customer segments. Names are illustrative; they do not refer to real
people. Interpretive claims (e.g. "green as punctuation", "trust is the
product") are editorial readings connecting the measured design system to the
bank's stated safety-and-simplicity positioning.
-->
