---
id: omnichat
name: Omnichat
country: TW
category: marketing
homepage: "https://www.omnichat.ai"
primary_color: "#006aff"
logo:
  type: favicon
  slug: "https://www.omnichat.ai/wp-content/uploads/webiconlogo.png"
verified: "2026-06-10"
added: "2026-06-10"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-10"
  note: "primary = header CTA / featured-card blue (#006aff); action CTAs use lighter #408fff; deep navy-blue #0202a6 for section headings; signature aurora gradient (#ac9cff/#8e4dff/#69dfb2/#379afd) clipped into hero text on black."
  colors:
    primary: "#006aff"
    action: "#408fff"
    deep: "#0202a6"
    gradient-base: "#3337f6"
    gradient-sky: "#379afd"
    gradient-mint: "#69dfb2"
    gradient-lavender: "#ac9cff"
    gradient-violet: "#8e4dff"
    heading-sky: "#4e97ff"
    heading-sky-soft: "#75adfc"
    hero-sub: "#8ca8cf"
    ink: "#333333"
    ink-strong: "#2e2e2e"
    ink-heading: "#3d3d3d"
    muted: "#666666"
    icon-grey: "#69727d"
    canvas: "#ffffff"
    surface: "#f8f9fa"
    surface-alt: "#f9f9f9"
    tint-blue: "#ecf4ff"
    tint-blue-deep: "#d9e8ff"
    hero-dark: "#000000"
    input-border: "#c5c5c5"
    menu-accent: "#cc3366"
  typography:
    family: { display: "Outfit", zh: "Noto Sans HK" }
    display-hero: { size: 52, weight: 500, lineHeight: 1.23, tracking: 1.4, use: "Hero headline, aurora-gradient-clipped Outfit on black" }
    display-xl:   { size: 46, weight: 500, lineHeight: 1.40, tracking: 1, use: "Major section headlines on dark bands" }
    section:      { size: 40, weight: 500, lineHeight: 1.60, tracking: 1, use: "Section titles (deep blue or ink)" }
    feature:      { size: 34, weight: 500, lineHeight: 1.40, tracking: 1, use: "Feature / case-study headings" }
    card-head:    { size: 26, weight: 500, lineHeight: 1.30, tracking: 1, use: "Card and capability heads" }
    plan-head:    { size: 24, weight: 500, tracking: 1, use: "Pricing plan names" }
    nav:          { size: 17, weight: 400, use: "Top navigation items" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Body copy, buttons, badges" }
    menu-item:    { size: 14, weight: 500, use: "Mega-menu dropdown links" }
  spacing: { xs: 3, sm: 8, md: 10, base: 16, lg: 20, xl: 27, xxl: 36 }
  rounded: { sm: 5, md: 10, lg: 20, full: 99 }
  shadow:
    card: "rgba(0,0,0,0.06) 3px 3px 15px 0px"
    panel: "rgba(0,0,0,0.15) 0px 3px 7px 0px"
  components:
    button-primary: { type: button, bg: "#006aff", fg: "#ffffff", border: "1px solid #006aff", radius: "13px 13px 0px", height: "32px", font: "16px / 500", use: "Header 專家諮詢 CTA — notched bottom-right corner" }
    button-outline: { type: button, bg: "#ffffff", fg: "#006aff", border: "1px solid #006aff", radius: "13px 13px 0px", height: "32px", font: "16px / 500", use: "Header 免費試用 secondary CTA, same notched geometry" }
    button-gradient: { type: button, bg: "#3337f6", fg: "#ffffff", radius: "10px", height: "44px", padding: "10px", font: "16px / 500", states: "animated 270deg gradient #3337f6 → #379afd → #69dfb2", use: "Hero 專家諮詢 CTA on black" }
    button-action: { type: button, bg: "#408fff", fg: "#ffffff", radius: "0px 24px", height: "45px", padding: "8px 20px 11px", font: "16px / 500", use: "聯絡專人 / 送出資料 ribbon CTA — opposing corners rounded" }
    segment-toggle: { type: tab, fg: "#408fff", active: "bg #408fff + text #ffffff", radius: "99px", height: "36px", font: "16px / 500", use: "Pricing product switcher pill (線上對話商務 / OMO / Social CDP)" }
    input-default: { type: input, bg: "#f9f9f9", fg: "#3d3d3d", border: "1px solid #c5c5c5", radius: "8px", height: "44px", padding: "8px 16px", font: "16px / 400", use: "Lead-form text field" }
    card-pricing: { type: card, bg: "#ffffff", border: "2px solid #006aff", radius: "20px", padding: "36px 26px", shadow: "rgba(0,0,0,0.06) 3px 3px 15px", use: "Featured plan card; non-featured plans carry an invisible 2px #ffffff border" }
    badge-popular: { type: badge, bg: "#006aff", fg: "#ffffff", radius: "5px", padding: "1px 32px", height: "28px", font: "16px / 400", use: "最受歡迎 plan ribbon" }
  components_harvested: true
---

# Design System Inspiration of Omnichat

## 1. Visual Theme & Atmosphere

Omnichat is Taiwan and Hong Kong's leading omnichannel chat-commerce platform, and its zh-TW marketing surface reads like a confident AI-era SaaS pitch deck: a pure black (`#000000`) hero stage where the headline itself glows in an animated aurora gradient — lavender (`#ac9cff`) through violet (`#8e4dff`), mint (`#69dfb2`) and sky blue (`#379afd`) — clipped directly into the Outfit letterforms. Below that cinematic opening, the page settles onto a white (`#ffffff`) and soft-grey (`#f8f9fa`) canvas with periodic light-blue tint bands (`#ecf4ff`), so the dark AI theatre and the bright commercial sections alternate in clean cycles.

The system speaks two typographic languages at once. Latin display text — including the rounded "Omnichat" wordmark moments — is set in **Outfit at weight 500**, while Traditional Chinese UI copy runs in **Noto Sans HK**. Crucially, every heading uses *positive* letter-spacing (+1px to +1.4px) at a medium 500 weight, the opposite of the tight-tracked heavyweight convention: headlines feel open, geometric, and friendly rather than aggressive. Heading color is itself a hierarchy device — deep navy-blue (`#0202a6`) for trust-bearing section titles, sky blues (`#4e97ff`, `#75adfc`) for AI feature heads on dark, and neutral inks (`#2e2e2e`, `#3d3d3d`) for plain content.

The most distinctive signature is Omnichat's asymmetric corner geometry. Header CTAs round three corners at 13px and square the bottom-right ("13px 13px 0px"); pricing and form CTAs round only opposing corners ("0px 24px"), producing a ribbon-like parallelogram feel; pricing cards sit at a generous 20px with feather-soft shadows. Nothing is a plain rectangle and nothing is a default pill — the corner language alone identifies the brand. Combined with the chat-bubble logo mark and the blue monochrome action palette (`#006aff` primary, `#408fff` action), the whole surface signals "conversational, automated, commerce-grade".

**Key Characteristics:**
- Black hero stage with aurora-gradient text (`#ac9cff` → `#8e4dff` → `#69dfb2` → `#379afd`) clipped into the headline
- Outfit (Latin) + Noto Sans HK (zh-TW) pairing at medium weight 500 — never bold-heavy
- Positive letter-spacing (+1px / +1.4px) on all headings — open, geometric, friendly
- Asymmetric corner signatures: notched "13px 13px 0px" header CTAs, ribbon "0px 24px" action CTAs
- Blue-only action palette: `#006aff` primary chrome, `#408fff` action CTAs, `#0202a6` deep headings
- White/`#f8f9fa` canvas with `#ecf4ff` and `#d9e8ff` light-blue tint bands
- Feather shadows (`rgba(0,0,0,0.06) 3px 3px 15px`) on 20px-radius pricing cards
- Heading color as hierarchy: deep blue for trust claims, sky blue for AI features, ink for plain content

## 2. Color Palette & Roles

### Primary
- **Omnichat Blue** (`#006aff`): Primary brand action color — header CTA fill and outline, featured pricing-card border, the 最受歡迎 badge. The chrome-level "do this" blue.
- **Action Blue** (`#408fff`): Lighter working blue for in-page CTAs (聯絡專人, 送出資料, 獲得報價), the active pricing toggle, inline link CTAs (了解完整案例), and the rounded wordmark moments.
- **Deep Blue** (`#0202a6`): Near-navy section-heading color for trust statements ("深受全球 5,000+ 客戶信賴") and the dark solid button (更多成功案例). A close variant `#0403b7` appears on feature H3s.

### Aurora Gradient (hero signature)
- **Gradient Lavender** (`#ac9cff`): First and last stop of the 270° hero text gradient.
- **Gradient Violet** (`#8e4dff`): Second stop — the purple depth of the aurora.
- **Gradient Mint** (`#69dfb2`): Center stop — the green flash that ties to the logo's mint petals.
- **Gradient Sky** (`#379afd`): Fourth stop — bridges the aurora back to brand blue.
- **Gradient Base** (`#3337f6`): Indigo base color of the hero gradient CTA button (stops run `#3332f6` → `#379afd` → `#69dfb2`).

### Headings on Dark
- **Heading Sky** (`#4e97ff`): AI feature H3s ("Omni AI Message Flow：AI 行銷活動產生器").
- **Heading Sky Soft** (`#75adfc`): Large section H2s on black bands.
- **Hero Sub** (`#8ca8cf`): Muted blue-grey hero subtitle ("Omni AI by Omnichat").

### Neutral & Ink
- **Ink** (`#333333`): Document body color and nav links.
- **Ink Strong** (`#2e2e2e`): Strong section H2s on white ("為何 Omnichat 是最好的選擇？").
- **Ink Heading** (`#3d3d3d`): H3s, plan names, partner statements.
- **Muted** (`#666666`): Secondary copy and descriptions.
- **Icon Grey** (`#69727d`): Footer social icons and tertiary glyphs.

### Surface
- **Canvas** (`#ffffff`): Page background, cards, button text on blue.
- **Surface** (`#f8f9fa`): The dominant section-band grey (most frequent background on the homepage).
- **Surface Alt** (`#f9f9f9`): Form-field fill.
- **Tint Blue** (`#ecf4ff`): Light-blue pricing hero band.
- **Tint Blue Deep** (`#d9e8ff`): Deeper blue tint for feature chips and translucent panels (`rgba(217,232,255,0.75)`).
- **Hero Dark** (`#000000`): Full-bleed black hero and AI showcase bands.
- **Input Border** (`#c5c5c5`): Form-field hairline.

### Accent (menu-only)
- **Menu Accent** (`#cc3366`): Raspberry-pink link color inside the mega-menu dropdowns (platform/product lists). It lives only in the opened navigation panels — never on buttons or body copy — acting as a hidden wayfinding accent inside an otherwise all-blue system.

## 3. Typography Rules

### Font Family
- **Display / Latin**: `Outfit` — geometric rounded sans for all headings and English display text.
- **Traditional Chinese UI**: `"Noto Sans HK"` — buttons, nav, body-level zh-TW copy.
- **Body default**: system stack (`-apple-system, "Segoe UI", Roboto, "Noto Sans"...`) at 16px/24px.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Outfit | 52px | 500 | 1.23 (64px) | +1.4px | Aurora-gradient-clipped, on black |
| Display XL | Outfit | 46px | 500 | 1.40 | +1px | Section headlines on dark bands |
| Section | Outfit | 40–42px | 500 | 1.60 | +1px | Section titles (deep blue `#0202a6` or ink) |
| Feature | Outfit | 34px | 500 | 1.40 | +1px | Case-study and AI feature heads |
| Card Head | Outfit | 26px | 500 | 1.30 | +1px | Capability card heads |
| Plan Head | Outfit | 24px | 500 | — | +1px | Pricing plan names |
| Sub-head | Outfit | 22–24px | 500 | 1.40–1.60 | +0.6–1px | Partner line, hero eyebrow |
| Nav | Noto Sans HK | 17px | 400 | — | normal | Top navigation items |
| Body / Button | Noto Sans HK | 16px | 400–500 | 1.50 (24px) | normal–0.6px | Body copy 400; buttons 500 |
| Menu Item | Noto Sans HK | 14px | 500 | — | normal | Mega-menu dropdown links |

### Principles
- **Medium, never bold**: Weight 500 is the display weight across every size. Omnichat persuades with color and gradient, not with heavy strokes.
- **Positive tracking as identity**: +1px to +1.4px letter-spacing on headings — open and airy where most tech brands track tight. Body returns to normal tracking.
- **Color is the type hierarchy**: The same 40px/500 heading switches between deep blue (`#0202a6`) for trust claims, ink (`#2e2e2e`) for questions, and sky (`#75adfc`) on dark — meaning is encoded in hue, not weight.
- **Two scripts, one voice**: Outfit's geometric rounds and Noto Sans HK's clean strokes are matched in optical weight so bilingual lines feel uniform.

## 4. Component Stylings

### Buttons

**Header Primary (專家諮詢)**
- Background: `#006aff`
- Text: `#ffffff`
- Border: 1px solid `#006aff`
- Radius: 13px 13px 0px
- Padding: 3px
- Font: 16px / 500 / Noto Sans HK
- Use: Header expert-consult CTA — signature notched bottom-right corner

**Header Outline (免費試用)**
- Background: `#ffffff`
- Text: `#006aff`
- Border: 1px solid `#006aff`
- Radius: 13px 13px 0px
- Padding: 3px
- Font: 16px / 500 / Noto Sans HK
- Use: Free-trial secondary CTA, identical notched geometry next to the primary

**Hero Gradient (專家諮詢)**
- Background: `#3337f6`
- Text: `#ffffff`
- Radius: 10px
- Padding: 10px
- Font: 16px / 500 / Noto Sans HK
- Hover: animated 270° gradient sweep (`#3332f6` → `#379afd` → `#69dfb2` → `#379afd` → `#3332f6`)
- Use: Hero CTA on the black stage — the aurora gradient made clickable

**Action Ribbon (聯絡專人 / 送出資料 / 獲得報價 / 預約示範)**
- Background: `#408fff`
- Text: `#ffffff`
- Border: 1px solid `#006aff`
- Radius: 0px 24px
- Padding: 8px 20px 11px
- Font: 16px / 500 / Noto Sans HK
- Use: All pricing and form CTAs — opposing corners rounded into a ribbon shape; compact 33px variant uses 2px 20px 5px padding

**Deep Solid (更多成功案例)**
- Background: `#0202a6`
- Text: `#ffffff`
- Radius: 10px
- Padding: 10px
- Font: 16px / 500 / Outfit
- Use: Case-study section CTA — deep blue gravity without the gradient

### Tabs

**Pricing Product Switcher**
- Background: `#ffffff`
- Text: `#408fff`
- Radius: 99px
- Padding: 6px
- Font: 16px / 500 / Noto Sans HK
- Active: `#408fff` background + `#ffffff` text
- Use: Segmented pill switching 線上對話商務 / OMO全渠道銷售 / Social CDP plan groups

### Inputs & Forms

**Lead-Form Field**
- Background: `#f9f9f9`
- Text: `#3d3d3d`
- Border: 1px solid `#c5c5c5`
- Radius: 8px
- Padding: 8px 16px
- Font: 16px / 400
- Use: Demo-request form fields (name, company, email)

### Cards & Containers

**Pricing Plan Card**
- Background: `#ffffff`
- Border: 2px solid `#ffffff`
- Radius: 20px
- Padding: 36px 26px
- Shadow: `rgba(0,0,0,0.06) 3px 3px 15px`
- Use: Plan cards (高效客服方案, 基本行銷商務…); featured plan swaps the invisible border for 2px solid `#006aff`

**Tab Content Panel**
- Background: `#ffffff`
- Radius: 0px 0px 13px 13px
- Padding: 27px
- Shadow: `rgba(0,0,0,0.15) 0px 3px 7px`
- Use: Content panel hanging below active tabs — top corners squared into the tab bar

### Badges

**最受歡迎 (Most Popular)**
- Background: `#006aff`
- Text: `#ffffff`
- Radius: 5px
- Padding: 1px 32px
- Font: 16px / 400
- Use: Plan ribbon floating above the featured pricing card

### Navigation
- Background: `#ffffff`
- Text: `#333333`
- Font: 17px / 400 / Noto Sans HK
- Height: 60px rows
- Use: Top nav (平台 / 產品 / 案例 / 價格 / 資源 / 關於 Omnichat); active section turns `#408fff`
- Dropdown items: `#cc3366` text, 14px / 500, radius 0px 0px 5px 5px, 42px rows

---
**Verified:** 2026-06-10
**Tier 1 sources:** https://www.omnichat.ai/tw/ (homepage, live inspect), https://www.omnichat.ai/tw/pricing/ (pricing, live inspect), https://www.omnichat.ai/tw/about/ (brand story), https://blog.omnichat.ai/tw/ (official blog)
**Tier 2 sources:** none available (getdesign.md/omnichat → 404 "No designs found"; styles.refero.design/?q=omnichat → not listed)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px with measured stops at 3px, 8px, 10px, 16px, 20px, 27px, 36px
- Notable: pricing cards run asymmetric 36px 26px padding with a deep 130px bottom reserve for the anchored CTA; panels use 27px

### Grid & Container
- Full-bleed alternating bands: black hero → white/`#f8f9fa` content → black AI showcase → `#ecf4ff` pricing tint
- Centered single-column hero with a single inline question field ("你想從哪裡著手?")
- Pricing: 4-up equal-width plan cards (288px) under a centered 99px segmented pill
- Case studies: logo-led cards with 了解完整案例 link CTAs in repeating rows

### Whitespace Philosophy
- **Stage vs. shelf**: black bands are theatrical and sparse (one headline, one CTA); white bands are denser, shelf-like product sections. The contrast in density is intentional rhythm.
- **Tint as chapter break**: `#ecf4ff` and `#d9e8ff` bands mark commercial chapters (pricing, lead capture) without needing rules or borders.
- **Soft separation**: shadows are feather-light; most separation comes from background alternation.

### Border Radius Scale
- Small (5px): badges, dropdown bottoms
- Medium (8–10px): inputs, gradient/deep buttons
- Notch (13px 13px 0px): header CTAs, tab panels (inverted)
- Large (20px): pricing cards
- Ribbon (0px 24px): action CTAs — opposing corners only
- Full (99px): segmented pills

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Bands, hero, nav, badges |
| Tint (Level 1) | `#f8f9fa` / `#ecf4ff` background shift | Section and chapter separation |
| Feather (Level 2) | `rgba(0,0,0,0.06) 3px 3px 15px` | Pricing cards — barely-there lift |
| Panel (Level 3) | `rgba(0,0,0,0.15) 0px 3px 7px` | Tab content panels, dropdown sheets |

**Shadow Philosophy**: Omnichat keeps elevation nearly invisible. The two measured shadows are a feather-soft 6%-alpha card lift and a slightly firmer 15%-alpha panel drop — both tight and neutral. Drama is delegated entirely to the black bands and the aurora gradient; surfaces themselves stay calm and flat so the conversational UI mockups inside them (chat bubbles, LINE/WhatsApp threads) carry the visual interest. When the system wants emphasis it changes the background color of a whole band, never the z-axis of a single card.

## 7. Do's and Don'ts

### Do
- Stage hero statements on pure black (`#000000`) with the aurora gradient (`#ac9cff` → `#8e4dff` → `#69dfb2` → `#379afd`) clipped into the headline text
- Set headings in Outfit weight 500 with positive +1px letter-spacing; pair zh-TW copy in Noto Sans HK
- Use the notched corner ("13px 13px 0px") on header CTAs and the ribbon ("0px 24px") on action CTAs — the asymmetric corners are the brand signature
- Keep the action palette blue-only: `#006aff` chrome, `#408fff` in-page CTAs, `#0202a6` deep headings
- Separate sections with background alternation (white / `#f8f9fa` / `#ecf4ff` / black), not rules or heavy shadows
- Use heading color (deep blue vs sky vs ink) to signal content register
- Float the `#006aff` badge above the featured pricing card and mark it with a 2px `#006aff` border
- Keep shadows at feather strength (`rgba(0,0,0,0.06)`)

### Don't
- Use bold (700+) display weights — the system persuades at weight 500
- Track headings tight or negative — Omnichat's letter-spacing is always open and positive
- Round buttons symmetrically into default pills or plain rectangles — every CTA carries an asymmetric corner
- Introduce warm accent colors on actions — the raspberry `#cc3366` lives only inside mega-menu dropdowns
- Stack heavy drop shadows on cards — elevation stays whisper-quiet
- Put the aurora gradient on body text or small UI — it belongs to hero-scale statements and the hero CTA only
- Use grey hairline dividers between sections — switch the band background instead
- Mix a second blue system into chrome — `#006aff` and `#408fff` have fixed, separate jobs

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, hero text scales down, plan cards stack |
| Tablet | 768–1024px | 2-up plan cards, condensed nav |
| Desktop | 1024–1440px | Full 4-up pricing, mega-menu navigation |

### Touch Targets
- Action ribbon CTAs at 45px height with 20px side padding
- Segmented pill options at 36px inside a generously padded track
- Form fields at 44px height
- Nav rows at 60px with dropdown items at 42px

### Collapsing Strategy
- Hero: 52px aurora headline compresses while keeping gradient clip and +letter-spacing
- Pricing: 4-up cards → stacked column, featured card keeps its `#006aff` border and badge
- Mega-menu: hover dropdowns → accordion drawer
- Black showcase bands keep full-bleed treatment with reduced internal padding

### Image Behavior
- Product UI mockups (chat threads, dashboards) sit directly on band backgrounds without frames
- Client logos render monochrome on white cards in case-study rows
- Cards maintain 20px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary chrome CTA: Omnichat Blue (`#006aff`)
- In-page action CTA: Action Blue (`#408fff`)
- Deep heading / dark button: Deep Blue (`#0202a6`)
- Hero gradient: `#ac9cff` → `#8e4dff` → `#69dfb2` → `#379afd` (270°)
- Hero CTA gradient base: `#3337f6`
- Background: White (`#ffffff`) / Surface (`#f8f9fa`)
- Tint bands: `#ecf4ff`, `#d9e8ff`
- Hero stage: Black (`#000000`)
- Body text: Ink (`#333333`); headings `#2e2e2e` / `#3d3d3d`
- Headings on dark: `#75adfc`, `#4e97ff`; hero subtitle `#8ca8cf`

### Example Component Prompts
- "Create a hero on pure black #000000. Headline at 52px Outfit weight 500, line-height 64px, letter-spacing +1.4px, with a 270deg linear-gradient (#ac9cff, #8e4dff, #69dfb2, #379afd, #ac9cff) clipped into the text. Subtitle 24px Outfit 500 in #8ca8cf. One CTA: #3337f6 background with animated gradient sweep to #379afd and #69dfb2, 10px radius, 44px height, white 16px/500 text."
- "Design a header: white background, 17px Noto Sans HK #333333 nav links. Two CTAs with radius '13px 13px 0px' (notched bottom-right): outline version with 1px solid #006aff border and #006aff text, filled version with #006aff background and white text, both 32px tall."
- "Build a pricing card: white background, 20px radius, 2px solid #006aff border, shadow rgba(0,0,0,0.06) 3px 3px 15px, padding 36px 26px. Plan name 24px Outfit 500 #3d3d3d, letter-spacing +1px. Floating badge above: #006aff background, white 16px text, 5px radius, 1px 32px padding. CTA at bottom: #408fff background, white 16px/500 text, radius '0px 24px', 45px tall."
- "Create a segmented switcher: 99px-radius track on white with 1px blue outline. Options 16px/500: active option #408fff background with white text, inactive options white with #408fff text, 36px tall."
- "Design a lead form: fields with #f9f9f9 fill, 1px solid #c5c5c5 border, 8px radius, 44px height, 16px text #3d3d3d. Submit button #408fff with white text, radius '0px 24px', padding 9px 80px 10px."

### Iteration Guide
1. Weight 500 + positive letter-spacing on every heading — never bold, never tight
2. Asymmetric corners on every CTA: "13px 13px 0px" in chrome, "0px 24px" in page
3. Blue roles are fixed: #006aff = chrome/featured, #408fff = in-page action, #0202a6 = deep heading
4. The aurora gradient appears exactly twice per page: hero headline clip + hero CTA
5. Separate sections by switching band background (white / #f8f9fa / #ecf4ff / black)
6. Shadows stay at rgba(0,0,0,0.06)–0.15 — barely visible
7. Heading hue encodes register: deep blue = trust claim, sky = AI feature on dark, ink = plain content
8. zh-TW copy in Noto Sans HK, Latin display in Outfit, matched optical weight

---

## 10. Voice & Tone

Omnichat's voice is **confident, conversion-obsessed, and warmly pragmatic** — a sales engineer who genuinely believes conversation is commerce. Every headline ties technology to a business outcome: AI is never demoed for its own sake, it "賦能客服、行銷、銷售轉換" (empowers service, marketing, and sales conversion). Numbers do the persuading — 5,000+ clients, 50% open rates, 轉換率 (conversion rate) appears in nearly every section — while the register stays polite Taiwanese business Mandarin with English product nouns (Omni AI, Social CDP, OMO) left untranslated as badges of category leadership.

| Context | Tone |
|---|---|
| Hero headlines | Platform-scale declarations. "AI 全通路顧客體驗平台" — category first, capability second. |
| Feature heads | Outcome verbs: 打造, 賦能, 轉換, 加速. Tech term + business result in one line. |
| CTAs | Consultative, low-friction: "免費試用", "專家諮詢", "聯絡專人", "預約示範" — talk to a human, not "Buy now". |
| Trust claims | Quantified and partner-anchored: "深受全球 5,000+ 客戶信賴", "LINE、WhatsApp、Meta 官方合作夥伴". |
| Case studies | Client name + metric + mechanism: "信義房屋…締造精準受眾推播 50% 超高開封率". |
| Pricing | Friendly imperative with one exclamation allowed: "選擇最適合您的方案，優化客戶服務，提升銷售業績！" |

**Voice samples (verbatim from live zh-TW surfaces):**
- "AI 全通路顧客體驗平台 全方位賦能客服、行銷、銷售轉換" — hero H1 *(verified live 2026-06-10)*
- "全渠道 AI 對話商務平台 深受全球 5,000+ 客戶信賴" — homepage H2 *(verified live 2026-06-10)*
- "為何 Omnichat 是最好的選擇？" — homepage H2 *(verified live 2026-06-10)*
- "選擇最適合您的方案，優化客戶服務，提升銷售業績！" — pricing subtitle *(verified live 2026-06-10)*
- "Omnichat 讓品牌與顧客保持緊密連結互動，以提升品牌的轉換率為使命。" — about page mission *(fetched 2026-06-10)*

**Forbidden register**: vague AI mysticism without a metric, hard-sell urgency ("限時搶購"), untranslated jargon walls, and cold enterprise stiffness — the brand believes "有溫度的顧客體驗" (warm customer experience) and its copy must feel like a helpful consultant, not a vending machine.

## 11. Brand Narrative

Omnichat was founded in **2017 by Alan Chan** in Hong Kong, beginning — as the company's own about page tells it — with a single rented coworking desk where Chan coded the first MVP of a website chat tool that quickly attracted hundreds of e-commerce businesses. The founding insight was that in Asia's mobile-first markets, commerce doesn't happen on web forms — it happens inside chat threads on LINE, WhatsApp, Facebook Messenger, Instagram and WeChat. Omnichat unified those channels into one conversational commerce platform, and Taiwan became its largest market: the zh-TW surface leads the brand, LINE 官方帳號 sits first in the platform menu, and Taiwanese retail names (信義房屋, à la sha, 博士助聽器) headline its case studies.

The company states its mission plainly: "Omnichat 讓品牌與顧客保持緊密連結互動，以提升品牌的轉換率為使命" — keep brands and customers tightly connected, with raising conversion rate as the mission. Founder Alan Chan compresses it further: "Omnichat 的目標永遠只有一個，就是提高品牌的轉換率" (Omnichat has only ever had one goal: raising brands' conversion rates). Backed by a US$1.8M Pre-A round in 2022 and consecutive years of ~300% ARR growth, the platform now serves 5,000+ companies across Taiwan, Hong Kong, Malaysia, Singapore, Thailand and Indonesia as an official WhatsApp Business Solution Provider and authorized partner of Meta and LINE — partner logos the design treats as first-class trust assets. The 2025-era reinvention as an "Agentic AI customer experience platform" (Omni AI) put the black-stage aurora hero at the front of the brand.

What Omnichat refuses: faceless automation. The company's stated belief — "Omnichat 相信有溫度的顧客體驗，是品牌成功的關鍵" (warm customer experience is the key to brand success) — explains the design's character: a friendly rounded wordmark, open positive-tracked headings, consultative CTAs that offer a human expert, and chat bubbles as the recurring visual motif. The aesthetic says AI infrastructure; the voice says there's a person on the other end of the conversation.

## 12. Principles

1. **Conversion is the only scoreboard.** Every surface ties capability to 轉換率. *UI implication:* every section ends in a measurable next step (試用, 諮詢, 報價); decorative sections without a CTA are off-brand.
2. **Conversation is the interface.** Commerce happens in chat threads, so chat is the hero artifact. *UI implication:* show real LINE/WhatsApp-style bubbles and threads in product mockups; the logo's speech-bubble motif echoes through rounded, asymmetric shapes.
3. **Warmth over automation theatre.** "有溫度的顧客體驗" is the stated belief. *UI implication:* medium weights, open tracking, consultative CTA language ("專家諮詢" not "立即購買"), and human-team imagery beside AI features.
4. **Prove it with partners and numbers.** Official Meta/LINE/WhatsApp partnership and 5,000+ clients carry the trust load. *UI implication:* partner logos and quantified case-study metrics are first-class design elements, placed early and styled prominently.
5. **One drama per page.** The black aurora hero is the spectacle; everything after is calm white shelf. *UI implication:* reserve gradient and black bands for the opening statement and one AI showcase; keep pricing and content sections flat, tinted, and quiet.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Omnichat customer segments (Taiwanese omnichannel retailers, e-commerce marketing teams, customer-service leads), not individual people.*

**林佳穎, 34, 台北.** E-commerce marketing manager at a mid-size apparel brand running LINE OA, Instagram and a Shopline store. Lives in broadcast open-rate dashboards; chose Omnichat because segmented LINE pushes lifted open rates past 50% without raising message costs. Wants every new AI feature explained as a campaign she can ship this quarter.

**陳俊宏, 41, 台中.** Retail operations director for a 60-store chain rolling out OMO member binding. Cares about 門市 staff adoption more than features — the platform must let a store clerk pick up a web chat without training. Trusts Omnichat because case studies name brands his scale, with numbers attached.

**黃以涵, 28, 高雄.** Customer-service team lead at a beauty D2C brand drowning in repeated FAQs across five channels. Evaluates AI agents by how gracefully they hand off to her human team. The "專家諮詢" button — a person, not a paywall — is exactly the vendor relationship she wants.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no conversations yet)** | White canvas, single Ink (`#333333`) line explaining the channel isn't connected, with one Action Blue (`#408fff`) ribbon CTA to connect LINE/WhatsApp. Chat-bubble illustration kept minimal. |
| **Empty (no campaign results)** | Muted (`#666666`) single line on `#f8f9fa`; CTA offers a template, not a blank editor. |
| **Loading (dashboard)** | Skeleton blocks on `#f8f9fa` at final dimensions, 20px radius for cards; flat pulse, no shimmer drama — consistent with the feather-shadow system. |
| **Loading (AI generating)** | The one permitted spectacle: aurora-gradient progress treatment on the generating element, echoing the hero gradient. |
| **Error (channel disconnected)** | Inline banner with plain-language cause and a reconnect action; never just "發生錯誤". Deep tone, no red flooding. |
| **Error (form validation)** | Field-level message below the `#c5c5c5`-bordered input; states what a valid value looks like. |
| **Success (campaign sent)** | Calm inline confirmation with the sent count — a number, in brand fashion. No confetti. |
| **Success (form submitted)** | Confirmation replaces the form body; next step (專人將與您聯繫) stated explicitly. |
| **Skeleton** | `#f8f9fa` blocks, 20px radius on cards, 99px on pill placeholders; flat pulse. |
| **Disabled** | Buttons drop to reduced-opacity blue rather than grey, preserving the blue-only action language; text at `#69727d`. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 150ms | Hover, pill toggle, focus |
| `motion-standard` | 250ms | Card reveal, dropdown sheets, tab panels |
| `motion-slow` | 400ms | Band transitions, hero entrance |
| `motion-ambient` | 6–10s | Aurora gradient sweep on hero text and CTA |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — dropdowns, panels, cards |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-ambient` | `linear` | The looping aurora gradient |

**Motion rules**: The aurora gradient is the brand's only continuous motion — a slow linear 270° sweep across the hero headline and gradient CTA, ambient like the AI it represents. Everything else is quick and functional: dropdown mega-menus slide down with `motion-standard / ease-enter`, the pricing pill slides its active state, chat-bubble mockups may type in once on scroll-into-view. No bounce, no spring — the product sells reliability to retailers. Under `prefers-reduced-motion: reduce`, the aurora freezes to a static gradient and all transitions collapse to instant; nothing functional is lost.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-10) via playwright getComputedStyle on
https://www.omnichat.ai/tw/ and https://www.omnichat.ai/tw/pricing/:
- All token-level claims in §1–9 (colors, Outfit/Noto Sans HK, weight 500 +
  positive tracking, notched/ribbon radii, aurora gradient stops, shadows)
  are sourced from this live inspection. Raw samples in .verification.md.

Voice samples (§10) are verbatim from the live zh-TW homepage and pricing
page (hero H1, H2s, pricing subtitle), plus the about page mission line.

Brand narrative (§11): founding (2017, Alan Chan, coworking-desk MVP origin),
mission/belief statements, and the founder quote are from
https://www.omnichat.ai/tw/about/ (fetched 2026-06-10). Funding (US$1.8M
Pre-A, April 2022) and ~300% YoY ARR growth are from the company's PR
(en.prnasia.com release, surfaced via web search 2026-06-10). Official
WhatsApp BSP / Meta / LINE partner status is stated on the live homepage.
Market list (TW/HK/MY/SG/TH/ID) is from the about page. Omnichat is
HK-founded; it is catalogued country: TW as Taiwan is its lead market and
the zh-TW surface is the brand's primary storefront.

Personas (§13) are fictional archetypes informed by publicly observable
Omnichat customer segments (Taiwanese retail/e-commerce teams). Names are
illustrative; they do not refer to real people.

States (§14) and Motion (§15) are design-system extrapolations consistent
with the observed live aesthetic (flat surfaces, feather shadows, single
ambient gradient), marked here as editorial/illustrative rather than
documented Omnichat product specs.
-->
