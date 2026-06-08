---
id: sansan
name: Sansan
country: JP
category: productivity
homepage: "https://www.sansan.com"
primary_color: "#E60012"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=sansan.com&sz=128"
verified: "2026-06-06"
added: "2026-06-06"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#E60012"
    primary-hover: "#cc0010"
    primary-tint: "#fdecec"
    canvas: "#ffffff"
    ink: "#1a1a1a"
    ink-black: "#222222"
    orange: "#f5821f"
    blue: "#0a6ebd"
    error: "#d32f2f"
    success: "#2e9e5b"
    warning: "#f5a623"
    grey-50: "#f7f8fa"
    grey-100: "#eef0f3"
    grey-200: "#e1e4e8"
    grey-300: "#cbd0d6"
    grey-400: "#9aa1aa"
    grey-500: "#6b727c"
    grey-600: "#4a5159"
    grey-700: "#33383f"
    grey-900: "#1a1a1a"
  typography:
    family: { sans: "Hiragino Kaku Gothic ProN", mono: "SF Mono" }
    display-hero: { size: 48, weight: 700, lineHeight: 1.25, tracking: -0.01, use: "Landing hero headline" }
    display-lg:   { size: 36, weight: 700, lineHeight: 1.33, tracking: -0.01, use: "Section openers" }
    heading-1:    { size: 28, weight: 700, lineHeight: 1.43, use: "Page titles" }
    heading-2:    { size: 22, weight: 700, lineHeight: 1.45, use: "Sub-sections, modal headers" }
    heading-3:    { size: 18, weight: 600, lineHeight: 1.55, use: "Card titles" }
    subtitle:     { size: 16, weight: 600, lineHeight: 1.62, use: "List headers, lead-ins" }
    body-lg:      { size: 16, weight: 400, lineHeight: 1.75, use: "Marketing body, descriptions" }
    body:         { size: 14, weight: 400, lineHeight: 1.71, use: "Standard UI reading text" }
    body-sm:      { size: 13, weight: 400, lineHeight: 1.62, use: "Secondary info" }
    caption:      { size: 12, weight: 400, lineHeight: 1.50, use: "Timestamps, fine print, labels" }
  spacing: { xs: 4, sm: 8, md: 16, base: 24, lg: 32, xl: 48, xxl: 64, section: 96 }
  rounded: { sm: 4, md: 6, lg: 12, full: 9999 }
  shadow:
    subtle: "0 1px 3px rgba(26,26,26,0.06)"
    standard: "0 4px 16px rgba(26,26,26,0.08)"
    elevated: "0 8px 24px rgba(26,26,26,0.14)"
    modal: "0 12px 32px rgba(26,26,26,0.20)"
  components:
    button-primary: { type: button, bg: "#E60012", fg: "#ffffff", radius: 4, padding: "14px 28px", font: "16px/700 Hiragino", use: "Primary CTA, hover #cc0010" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#E60012", radius: 4, padding: "13px 27px", font: "16px/700 Hiragino", use: "Outline red, 1.5px #E60012 border, hover #fdecec" }
    button-neutral: { type: button, bg: "#ffffff", fg: "#33383f", radius: 4, padding: "13px 27px", font: "16px/600 Hiragino", use: "Cancel, back, 1px #cbd0d6 border" }
    button-ghost: { type: button, bg: "#ffffff", fg: "#E60012", padding: "8px 4px", font: "15px/600 Hiragino", use: "Inline text link with arrow glyph" }
    input-text: { type: input, bg: "#ffffff", fg: "#1a1a1a", radius: 4, padding: "12px 14px", font: "15px/400 Hiragino", use: "Standard form input, 1px #cbd0d6 border, focus #E60012" }
    input-filled: { type: input, bg: "#f7f8fa", fg: "#1a1a1a", radius: 4, padding: "12px 14px", use: "In-product dense forms, focus #ffffff bg + #E60012 border" }
    card-standard: { type: card, bg: "#ffffff", radius: 8, padding: "24px", use: "Content panels, 1px #e1e4e8 border" }
    card-elevated: { type: card, bg: "#ffffff", radius: 12, padding: "32px", use: "Hero feature, pricing tiers" }
    card-list: { type: listItem, bg: "#ffffff", radius: 6, padding: "16px", use: "Dense list rows, contact records, 1px #e1e4e8 border" }
    card-highlighted: { type: card, bg: "#fdecec", radius: 8, padding: "24px", use: "Recommended tier, selected, 1px #E60012 border" }
    badge-brand: { type: badge, bg: "#E60012", fg: "#ffffff", radius: 4, padding: "3px 8px", font: "12px/700 Hiragino", use: "NEW, おすすめ, featured" }
    badge-soft: { type: badge, bg: "#fdecec", fg: "#cc0010", radius: 4, padding: "3px 8px", font: "12px/700 Hiragino", use: "Subtle category/status tag" }
    badge-neutral: { type: badge, bg: "#eef0f3", fg: "#4a5159", radius: 4, padding: "3px 8px", font: "12px/600 Hiragino", use: "Metadata, tag chips, filter labels" }
    badge-success: { type: badge, fg: "#2e9e5b", radius: 4, padding: "3px 8px", use: "登録済み, completion state" }
    tab-underline: { type: tab, fg: "#6b727c", padding: "12px 20px", font: "15px/600 Hiragino", active: "Active #1a1a1a text + 2px #E60012 bottom border", use: "In-product section switching" }
    tab-segmented: { type: tab, bg: "#eef0f3", radius: 6, padding: "8px 16px", font: "14px/600", active: "Active #ffffff bg + #1a1a1a text", use: "Compact view toggles" }
    toast-default: { type: toast, bg: "#1a1a1a", fg: "#ffffff", radius: 6, padding: "12px 16px", font: "14px/500", use: "Transient confirmation, 3s auto-dismiss" }
    toast-success: { type: toast, bg: "#ffffff", fg: "#1a1a1a", radius: 6, padding: "12px 16px", use: "Inline success banner, 4px #2e9e5b left border" }
    dialog-modal: { type: dialog, bg: "#ffffff", fg: "#1a1a1a", radius: 12, padding: "32px", use: "Confirmation prompts, forms, detail overlays" }
    toggle-switch: { type: toggle, bg: "#E60012", radius: 9999, use: "Boolean settings, #cbd0d6 off, #ffffff thumb" }
  components_harvested: true
---

# Design System Inspiration of Sansan (サンサン)

## 1. Visual Theme & Atmosphere

Sansan is Japan's category-defining B2B "business card" cloud — the company that turned the ritual exchange of *meishi* into a structured, searchable contact graph and grew it into a sales-intelligence platform. The brand wears that heritage as a single, unmistakable mark: a clean white canvas (`#ffffff`) carrying near-black corporate text (`#1a1a1a`) interrupted by one decisive stroke of **Sansan red** (`#E60012`). The red is not decoration. It is the literal *赤い糸* — the "red thread of fate" that, in Japanese tradition, ties destined people together. Sansan's positioning ("出会いからイノベーションを生み出す" — *creating innovation from encounters*) lives inside that one line. The 2017 logo refresh distilled the brand to exactly this: a horizontal red bar connecting two halves of the wordmark, the visual proof that *san* (person) meets *san* (person).

The atmosphere is **clean corporate Japanese SaaS**: disciplined, trustworthy, enterprise-credible, but warmer than the cold institutional blues of legacy Japanese IT. Where competitors reach for navy and grey, Sansan owns vermilion — energetic, confident, distinctly human. The layout language is generous whitespace, restrained type, photography of real business people in real meetings, and a near-total absence of gradients or skeuomorphism. Trust is communicated through clarity and precision, not ornament.

Typography is a pragmatic system sans-serif stack: **Hiragino Kaku Gothic ProN** / **Noto Sans JP** for Japanese, **Helvetica Neue** / **Arial** / system sans for Latin. Sansan does not ship a proprietary typeface; the brand identity rides entirely on the red, the wordmark, and obsessive spatial discipline.

**Key Characteristics:**
- Sansan Red (`#E60012`) as the singular brand accent — the "red thread" connecting people
- White-dominant canvas with near-black `#1a1a1a` corporate text
- Hiragino / Noto Sans JP for Japanese, Helvetica Neue / Arial for Latin — no custom font
- Enterprise-clean: generous whitespace, flat surfaces, almost no gradients
- Photography of real business encounters over illustration
- Restrained, semantic use of red — CTAs, links, brand moments only
- Mixed JP/EN typesetting with careful vertical-rhythm balancing

## 2. Color Palette & Roles

### Primary
- **Sansan Red** (`#E60012`): The brand. Logo "red thread", primary CTAs, links, active states, key accents. A pure high-chroma vermilion — the single most important token.
- **Red Hover** (`#cc0010`): Darkened red for hover/pressed states on red surfaces.
- **Red Tint** (`#fdecec`): Faint red-tinted background for highlight panels, selected rows, soft callouts.
- **Pure White** (`#ffffff`): Page background, card surfaces, header bar.
- **Corporate Near-Black** (`#1a1a1a`): Primary heading and strong text color. Warm near-black, never pure `#000`.

### Brand (Logo / Marketing)
- **Sansan Red** (`#E60012`): The logo bar and wordmark. Used at full saturation only on white or very light surfaces.
- **Ink Black** (`#222222`): The "Sansan" wordmark lettering paired with the red thread.

### Secondary / Accent
- **Deep Orange** (`#f5821f`): Secondary warm accent for sub-brands, campaign moments, and data highlights where pure red would over-signal. Used sparingly.
- **Trust Blue** (`#0a6ebd`): Informational accent — inline help links, info banners, secondary product chrome where red would compete with CTAs.

### Semantic
- **Error Red** (`#d32f2f`): Validation errors, destructive confirmations. Slightly desaturated from brand red so it reads as "alert", not "brand".
- **Success Green** (`#2e9e5b`): Confirmations, completed states, positive indicators.
- **Warning Amber** (`#f5a623`): Pending, attention-needed, soft warnings.
- **Info Blue** (`#0a6ebd`): Informational notices, neutral system messages.

### Neutral Scale
- **Grey 50** (`#f7f8fa`): Lightest surface — section backgrounds, app shell fill.
- **Grey 100** (`#eef0f3`): Secondary surface, card fills, disabled backgrounds.
- **Grey 200** (`#e1e4e8`): Default border, divider, input outline.
- **Grey 300** (`#cbd0d6`): Emphasized border, active input outline.
- **Grey 400** (`#9aa1aa`): Placeholder text, disabled icons.
- **Grey 500** (`#6b727c`): Caption, secondary labels, metadata.
- **Grey 600** (`#4a5159`): Body text, descriptions.
- **Grey 700** (`#33383f`): Emphasized body, sub-headings.
- **Grey 900** (`#1a1a1a`): Primary heading, strongest text.

### Surface & Borders
- **Border Default**: `#e1e4e8` (grey200). Card borders, input borders, table dividers.
- **Border Strong**: `#cbd0d6` (grey300). Active inputs, emphasized separators.
- **Overlay Scrim**: `rgba(26,26,26,0.55)`. Modal/sheet backdrop — warm near-black, never blue-tinted.

## 3. Typography Rules

### Font Family
- **Japanese**: `"Hiragino Kaku Gothic ProN", "Hiragino Sans", "Noto Sans JP", "Yu Gothic", "Meiryo", sans-serif`
- **Latin / Numerals**: `"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", sans-serif`
- **Combined web stack**: `-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Hiragino Kaku Gothic ProN", "Noto Sans JP", "Yu Gothic", Meiryo, Arial, sans-serif`
- **Monospace** (data/IDs): `"SF Mono", Menlo, Consolas, monospace`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Helvetica Neue / Hiragino | 48px | 700 | 60px (1.25) | -0.01em | Landing hero headline |
| Display Large | Helvetica Neue / Hiragino | 36px | 700 | 48px (1.33) | -0.01em | Section openers |
| Heading 1 | Hiragino / Noto Sans JP | 28px | 700 | 40px (1.43) | normal | Page titles |
| Heading 2 | Hiragino / Noto Sans JP | 22px | 700 | 32px (1.45) | normal | Sub-sections, modal headers |
| Heading 3 | Hiragino / Noto Sans JP | 18px | 600 | 28px (1.55) | normal | Card titles |
| Subtitle | Hiragino / Noto Sans JP | 16px | 600 | 26px (1.62) | normal | List headers, lead-ins |
| Body Large | Hiragino / Noto Sans JP | 16px | 400 | 28px (1.75) | normal | Marketing body, descriptions |
| Body | Hiragino / Noto Sans JP | 14px | 400 | 24px (1.71) | normal | Standard UI reading text |
| Body Small | Hiragino / Noto Sans JP | 13px | 400 | 21px (1.62) | normal | Secondary info |
| Caption | Hiragino / Noto Sans JP | 12px | 400 | 18px (1.50) | normal | Timestamps, fine print, labels |

### Principles
- **Generous JP line-height**: Japanese body text uses 1.7–1.8 line-height — denser glyphs need vertical air. Latin-only blocks tighten to 1.5–1.6.
- **Three weights**: 400 (body), 600 (emphasis/sub-heads), 700 (headings). No light weights for UI; Japanese gothic faces read poorly below 400.
- **Negative tracking on large Latin**: Display Latin headlines take `-0.01em`; Japanese never takes negative tracking (it breaks the glyph grid).
- **No italics in Japanese**: Emphasis uses weight or color (Sansan red), never synthetic italic on JP text.
- **Numerals stay Latin**: Figures always render in Helvetica Neue / Arial even inside Japanese sentences for legibility in data contexts.

## 4. Component Stylings

### Buttons

Sansan's button system is two-tier: a **primary red CTA** for the single most important action and **neutral/outline** variants for everything else. Geometry is square-ish — radius stays small (4–6px), reinforcing the corporate-precise tone.

**Primary (Fill / Red)**
- Background: `#E60012`
- Text: `#ffffff`
- Border: none
- Radius: 4px
- Padding: 14px 28px
- Font: 16px / 700 / Hiragino
- Hover: background `#cc0010`
- Active: background `#b3000e`
- Disabled: background `#f0a6ab`, text `#ffffff`
- Use: Primary CTA — 資料請求, お問い合わせ, 無料で試す. ~48px tall.

**Secondary (Outline / Red)**
- Background: `#ffffff`
- Text: `#E60012`
- Border: 1.5px solid `#E60012`
- Radius: 4px
- Padding: 13px 27px
- Font: 16px / 700 / Hiragino
- Hover: background `#fdecec`
- Use: Secondary action paired with the primary CTA (詳しく見る next to 資料請求).

**Neutral (Outline / Grey)**
- Background: `#ffffff`
- Text: `#33383f`
- Border: 1px solid `#cbd0d6`
- Radius: 4px
- Padding: 13px 27px
- Font: 16px / 600 / Hiragino
- Hover: background `#f7f8fa`, border `#9aa1aa`
- Use: Cancel, back, tertiary navigation.

**Ghost / Text Link Button**
- Background: transparent
- Text: `#E60012`
- Border: none
- Padding: 8px 4px
- Font: 15px / 600 / Hiragino, with trailing "›" arrow glyph
- Hover: text `#cc0010`, underline
- Use: Inline "もっと見る ›" / "See more ›" navigation links.

Button display modes — `inline` (auto-width), `block` (full-width on mobile / forms). Size scale (height · font · padding): `small` 36px · 14px · 8px 16px; `medium` 44px · 15px · 12px 24px; `large` (default) 48px · 16px · 14px 28px; `hero` 56px · 17px · 18px 40px.

### Inputs

**Text Field (default)**
- Background: `#ffffff`
- Text: `#1a1a1a`
- Border: 1px solid `#cbd0d6`
- Radius: 4px
- Padding: 12px 14px
- Font: 15px / 400 / Hiragino
- Placeholder: `#9aa1aa`
- Focus: border `#E60012`, box-shadow `0 0 0 3px rgba(230,0,18,0.12)`
- Use: Standard form input.

**Text Field (filled / app)**
- Background: `#f7f8fa`
- Text: `#1a1a1a`
- Border: 1px solid transparent
- Radius: 4px
- Padding: 12px 14px
- Focus: background `#ffffff`, border `#E60012`
- Use: In-product dense forms (contact records, search).

**Text Field (error)**
- Background: `#ffffff`
- Border: 1px solid `#d32f2f`
- Radius: 4px
- Padding: 12px 14px
- Focus: box-shadow `0 0 0 3px rgba(211,47,47,0.12)`
- Help text below: `#d32f2f`, 13px / 400
- Use: Validation failure, paired with inline message.

**Select / Dropdown** reuses the default text-field geometry with a trailing chevron in `#6b727c`.

### Cards

**Standard**
- Background: `#ffffff`
- Border: 1px solid `#e1e4e8`
- Radius: 8px
- Padding: 24px
- Shadow: `0 1px 3px rgba(26,26,26,0.06)`
- Use: Content panels, feature blocks — the workhorse surface.

**Elevated (Marketing)**
- Background: `#ffffff`
- Border: none
- Radius: 12px
- Padding: 32px
- Shadow: `0 4px 16px rgba(26,26,26,0.08)`
- Use: Hero feature cards, pricing tiers on landing pages.

**Flat / List Item**
- Background: `#ffffff`
- Border: 1px solid `#e1e4e8` (or bottom-only divider in lists)
- Radius: 6px
- Padding: 16px
- Shadow: none
- Use: Dense list rows, contact records — softer edge over shadow.

**Highlighted (Selected)**
- Background: `#fdecec`
- Border: 1px solid `#E60012`
- Radius: 8px
- Padding: 24px
- Use: Recommended pricing tier, selected option, active record.

### Badges / Tags

**Brand (Fill / Red)**
- Background: `#E60012`
- Text: `#ffffff`
- Radius: 4px
- Padding: 3px 8px
- Font: 12px / 700 / Hiragino
- Use: "NEW", "おすすめ", featured emphasis.

**Soft (Tint / Red)**
- Background: `#fdecec`
- Text: `#cc0010`
- Radius: 4px
- Padding: 3px 8px
- Font: 12px / 700 / Hiragino
- Use: Subtle category / status tag.

**Neutral**
- Background: `#eef0f3`
- Text: `#4a5159`
- Radius: 4px
- Padding: 3px 8px
- Font: 12px / 600 / Hiragino
- Use: Metadata, tag chips, filter labels.

**Success**
- Background: `#e6f4ec`
- Text: `#2e9e5b`
- Radius: 4px
- Padding: 3px 8px
- Use: "登録済み", completion state.

### Tabs

**Underline Tabs (default)**
- Container border-bottom: 1px solid `#e1e4e8`
- Inactive: `#6b727c`, 15px / 600, no underline
- Active: `#1a1a1a` text + 2px bottom border `#E60012`
- Padding: 12px 20px
- Use: In-product section switching (名刺 / 会社 / 商談).

**Pill Segmented**
- Background: `#eef0f3`
- Radius: 6px
- Active: `#ffffff` bg + `#1a1a1a` text + `0 1px 2px rgba(26,26,26,0.08)` shadow
- Padding: 8px 16px
- Font: 14px / 600
- Use: Compact view toggles (リスト / カード).

### Toasts

**Default**
- Background: `#1a1a1a`
- Text: `#ffffff`
- Radius: 6px
- Padding: 12px 16px
- Shadow: `0 4px 12px rgba(26,26,26,0.16)`
- Font: 14px / 500
- Use: Transient confirmation ("保存しました"). 3s auto-dismiss.

**Success**
- Background: `#ffffff`
- Border-left: 4px solid `#2e9e5b`
- Text: `#1a1a1a`
- Radius: 6px
- Padding: 12px 16px
- Shadow: `0 4px 12px rgba(26,26,26,0.12)`
- Use: Inline success banner inside the product.

### Dialogs

**Centered Modal**
- Background: `#ffffff`
- Text: `#1a1a1a`
- Radius: 12px
- Padding: 32px
- Shadow: `0 12px 32px rgba(26,26,26,0.20)`
- Backdrop: `rgba(26,26,26,0.55)`
- Use: Confirmation prompts, forms, detail overlays.

### Header / Navigation

**Global Header**
- Background: `#ffffff`
- Height: 72px (desktop)
- Border-bottom: 1px solid `#e1e4e8` (appears on scroll)
- Logo: Sansan wordmark with red thread, ~28px tall
- Nav links: `#33383f`, 15px / 600, hover `#E60012`
- CTA: Primary red button (資料請求) pinned right
- Use: Sticky corporate header.

### Toggles

**Switch**
- On: `#E60012`; Off: `#cbd0d6`
- Radius: 9999px
- Thumb: `#ffffff` 18px circle, `0 1px 2px rgba(26,26,26,0.2)` shadow
- Use: Boolean settings.

---

**Verified:** 2026-06-06 (OmD v0.1)
**Tier 1 sources:** sansan.com (live page inspect — white canvas, red CTA system, Hiragino/Noto stack), corp-sansan.com 2017 logo-refresh release (red "thread" mark, `#E60012` vermilion brand red). · https://www.sansan.com (live production site)
**Tier 2 sources:** brandfetch.com/corp-sansan.com (logo assets; color page 403 at fetch time). Wikimedia Commons `Sansan logo.svg` (mark geometry).
**Conflicts unresolved:** none. Sansan ships no proprietary typeface; the Hiragino/Noto/Helvetica stack is the documented system default for JP enterprise web.

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Common values: 4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px
- Marketing section vertical rhythm: 80–96px between blocks
- In-product padding: 16–24px; tighter 8px inside data rows

### Grid & Container
- Marketing max-width: 1120px centered, 24px gutters
- 12-column grid at desktop; collapses to single column under 768px
- In-product app shell: fixed left nav (~240px) + fluid content
- Content blocks alternate full-bleed photography with constrained text columns (~640px measure)

### Whitespace Philosophy
- **Air signals enterprise trust**: B2B buyers read whitespace as competence. Sansan never crowds a landing block — one idea, one headline, one CTA per section.
- **Photography as breathing room**: Real business-meeting photography occupies large areas, balancing dense Japanese text with imagery.
- **The red is rationed**: Whitespace makes the single red CTA unmissable. Crowding would dilute the one accent that carries the brand.

### Border Radius Scale
- Sharp (4px): Buttons, inputs, tags, badges — the corporate-precise default
- Soft (6px): List items, segmented controls, toasts
- Comfortable (8px): Standard cards
- Round (12px): Marketing/elevated cards, modals
- Pill (9999px): Toggles, filter chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, 1px `#e1e4e8` border | App surfaces, list rows, default cards |
| Subtle (Level 1) | `0 1px 3px rgba(26,26,26,0.06)` | Standard cards, slight lift |
| Standard (Level 2) | `0 4px 16px rgba(26,26,26,0.08)` | Marketing/elevated cards, dropdowns |
| Elevated (Level 3) | `0 8px 24px rgba(26,26,26,0.14)` | Popovers, floating panels |
| Modal (Level 4) | `0 12px 32px rgba(26,26,26,0.20)` | Dialogs, full overlays |

**Shadow Philosophy**: Sansan elevation is warm-neutral — shadows derive from `rgba(26,26,26,...)`, never pure black or blue-tinted. In enterprise contexts, restraint reads as reliability. Most surfaces prefer a 1px grey border over a shadow; shadow is reserved for genuinely floating layers. No colored (red) shadows — the red stays a flat brand signal, never a glow.

### Blur Effects
- Sticky header gains a faint backdrop and border on scroll; no heavy glass blur.
- Modal backdrops use opacity scrim, not blur, keeping the corporate-flat aesthetic.

## 7. Do's and Don'ts

### Do
- Use Sansan Red (`#E60012`) for the single primary CTA and links — the "red thread"
- Keep the canvas white-dominant with `#1a1a1a` corporate text
- Apply the Hiragino / Noto Sans JP / Helvetica Neue stack with JP-aware line-height (1.7+)
- Keep border-radius small (4–8px) for a precise, corporate feel
- Ration the red — one decisive accent per section, surrounded by whitespace
- Use real business-encounter photography over illustration
- Render numerals in Latin (Helvetica/Arial) even inside Japanese text

### Don't
- Don't scatter red across decorative elements — it must mean "interactive" or "brand"
- Don't use pure black `#000` for text — Sansan text is warm near-black `#1a1a1a`
- Don't apply negative letter-spacing or synthetic italics to Japanese text
- Don't use heavy gradients, glows, or colored shadows — keep surfaces flat
- Don't crowd CTAs — whitespace is what makes the red land
- Don't drop below 400 weight on Japanese gothic text — it loses legibility
- Don't use radius > 12px except pills/toggles — large rounding breaks the corporate tone

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, full-width CTAs, stacked nav drawer |
| Tablet | 768–1024px | 2-column feature grids, condensed header |
| Desktop | 1024–1440px | Full 12-column grid, 1120px container |
| Wide | >1440px | Container caps at 1120px, side margins grow |

### Touch Targets
- Buttons: hero 56px, large 48px, medium 44px, small 36px (min 44px on mobile)
- List rows: minimum 48px height
- Nav drawer items: 52px tall on mobile

### Collapsing Strategy
- Desktop horizontal nav → hamburger drawer under 768px
- Multi-column feature grids → single stacked column
- Sticky bottom CTA bar appears on mobile landing pages (資料請求)
- Tables → stacked card layout on narrow screens

### Image Behavior
- Hero photography: full-bleed, maintains aspect via object-fit cover
- Logos / partner marks: grayscale or fixed-height (~32px) rows
- Product screenshots: bordered (1px `#e1e4e8`) with 8px radius

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / Brand: Sansan Red (`#E60012`)
- CTA Hover: Dark Red (`#cc0010`)
- Background: White (`#ffffff`)
- Background Surface: Grey 50 (`#f7f8fa`)
- Heading text: Near-Black (`#1a1a1a`)
- Body text: Grey 600 (`#4a5159`)
- Caption text: Grey 500 (`#6b727c`)
- Placeholder: Grey 400 (`#9aa1aa`)
- Border: Grey 200 (`#e1e4e8`)
- Red Tint surface: (`#fdecec`)
- Success: Green (`#2e9e5b`)
- Error: Red (`#d32f2f`)
- Info: Blue (`#0a6ebd`)

### Example Component Prompts
- "Create a primary CTA: #E60012 bg, white text, 16px weight 700, 14px/28px padding, 4px radius, ~48px tall. Hover #cc0010. Label '資料請求'."
- "Build a feature card: white bg, 1px #e1e4e8 border, 8px radius, 24px padding, shadow 0 1px 3px rgba(26,26,26,0.06). Title 18px weight 600 #1a1a1a, body 14px weight 400 #4a5159 line-height 1.7."
- "Design a text input: white bg, 1px #cbd0d6 border, 4px radius, 12px/14px padding, 15px text #1a1a1a. Focus: #E60012 border + 3px rgba(230,0,18,0.12) ring. Placeholder #9aa1aa."
- "Create an underline tab bar: bottom border 1px #e1e4e8. Active tab #1a1a1a text + 2px #E60012 bottom border. Inactive #6b727c 15px weight 600."
- "Design a sticky header: white bg, 72px tall, 1px #e1e4e8 bottom border on scroll. Nav links #33383f 15px weight 600 hover #E60012. Right-pinned red CTA button."

### Iteration Guide
1. Use the full JP/Latin font stack; set Japanese line-height to 1.7+
2. Primary interactive color is `#E60012` — ration it, one decisive accent per section
3. Text is warm near-black `#1a1a1a`, never pure black; body is grey `#4a5159`
4. Keep radius small (4px buttons/inputs, 8px cards, 12px modals)
5. Prefer 1px `#e1e4e8` borders over shadows; shadows are warm-neutral only
6. White-dominant canvas; whitespace is the trust signal
7. Numerals always render Latin (Helvetica/Arial) inside Japanese text

---

## 10. Voice & Tone

Sansan speaks as a confident, dependable Japanese B2B partner: polite, precise, outcome-focused, and quietly aspirational about the value of human connection ("出会い"). Japanese is the primary voice; English strings are clean professional translations, not casual. The register is teineigo (です・ます) — respectful but not stiff. Copy leads with the customer's business outcome (営業力強化, 業務効率化), then names the feature. No slang, no emoji in product surfaces, no exclamation-heavy hype.

| Context | Tone |
|---|---|
| CTAs | Noun-phrase or short verb (`資料請求`, `お問い合わせ`, `無料で試す`) |
| Section headlines | Outcome-first, aspirational (`出会いを、イノベーションにつなぐ`) |
| Success messages | Past-tense teineigo (`保存しました`, `送信が完了しました`) |
| Error messages | Polite, specific, blameless (`メールアドレスの形式が正しくありません`) |
| Onboarding | One idea per step, benefit before mechanic |
| Legal / disclosure | Formal 営業 register, full です・ます endings |
| Marketing body | Authoritative, evidence-led — cites adoption scale and ROI |

**Forbidden moves.** No casual English ("Oops", "Whoops"), no emoji on product/money surfaces, no vague apologies (`ご迷惑をおかけします` without a concrete fix), no hype punctuation (`!!`). The red thread metaphor is reserved for brand-level storytelling — don't overuse "出会い" in mundane UI strings.

## 11. Brand Narrative

Sansan, Inc. (Sansan株式会社) was founded in **2007** in Tokyo by **Chika Terada (寺田親弘)**, born from a simple observation: business cards — *meishi* — are the dense, decentralized record of every business relationship a company holds, and almost all of it is locked in desk drawers, invisible and unsearchable. Sansan's founding thesis was to digitize that exchange and turn the firm's collective contact graph into a shared, queryable asset. The product slogan crystallizes it: **"早く言ってよ〜"** — *"You should've told me sooner"* — the pain of discovering a colleague already knew the prospect you were cold-calling.

The brand mark is the argument. The **2017 logo refresh** reduced the identity to a single horizontal **red line** — the *赤い糸*, the red thread of fate that in East Asian tradition binds destined people together. That thread sits between the two *san* halves of the name (*san* = 三 / person), making the wordmark a tiny diagram of the mission: **person meets person, and the encounter creates value.** Sansan red (`#E60012`) is therefore not a palette choice; it is the company's entire thesis rendered as one stroke.

Sansan listed on the Tokyo Stock Exchange in **2019** and expanded from its flagship contact-management cloud into a platform spanning Bill One (invoice management), Contract One (contract management), and Eight (the personal-edition business-card app). Across that portfolio the design language holds constant: white canvas, warm near-black text, rationed vermilion, generous air, real photography of people meeting people.

What Sansan refuses: the cold institutional navy of legacy Japanese IT, the cartoon playfulness of consumer apps, and decorative excess. It occupies a confident middle — warm enough to be human, disciplined enough to be enterprise-credible. The whole system exists to make one red thread, and one red CTA, impossible to miss.

## 12. Principles

1. **The red is the thread.** `#E60012` means connection and action. It appears on the logo, the primary CTA, and interactive states — never as decoration. One rationed red per view.
2. **Whitespace is the trust signal.** B2B buyers read air as competence. Never crowd a section; one idea, one headline, one CTA.
3. **Warm near-black, never pure black.** Text is `#1a1a1a`. Pure `#000` reads cheap and harsh against the brand's warmth.
4. **Precision through small radius.** 4px buttons and inputs say "engineered, reliable." Large rounding belongs to consumer toys, not enterprise software.
5. **Borders before shadows.** A 1px `#e1e4e8` border defines most surfaces. Shadow is reserved for genuinely floating layers and stays warm-neutral.
6. **Japanese typography gets air.** JP body runs 1.7+ line-height; numerals stay Latin for data legibility. Never compress the glyph grid.
7. **Outcome before feature.** Copy and layout lead with the business result (営業力強化), then explain the mechanism.
8. **Photography of real encounters.** People meeting people — not abstract illustration — carries the "出会い" brand promise.

## 13. Personas

*Personas below are fictional archetypes informed by publicly described Japanese B2B SaaS buyer segments, not individual people.*

**田中部長 (Tanaka, Department Head), 48, Tokyo.** Sales division leader at a mid-large manufacturer. The economic buyer. Cares about pipeline visibility and that his 40-person sales team stops losing warm introductions. Reads a landing page for proof — adoption numbers, ROI, security certifications (ISMS/ISO). Trusts whitespace and restraint; a cluttered, hype-heavy page reads as a startup he can't rely on. Japanese-first; skims English only on global pages.

**佐藤さん (Sato), 32, Osaka.** Inside-sales rep, daily power user of the product. Scans contact records, logs business cards from her phone after every meeting, searches the company graph before each call. Wants dense, fast, keyboard-friendly screens — list rows that don't waste vertical space, instant search, a clear red action when she needs to commit. Annoyed by anything that adds a tap between her and a record.

**山本さん (Yamamoto), 39, Nagoya.** Corporate IT / procurement evaluator. Vets the tool for security, SSO, and admin controls before rollout. Reads the trust page and the docs more than the marketing. Values clear neutral system chrome, predictable states, and accessible contrast. Indifferent to the brand story; persuaded by reliability cues — stable layouts, precise typography, no surprises.

## 14. States

| State | Treatment |
|---|---|
| **Empty (first use)** | One line of `#4a5159` body explaining what will appear (`まだ名刺が登録されていません`), plus a primary red CTA to the first action. Calm, no illustration overload. |
| **Empty (filtered)** | Single `#6b727c` caption line (`条件に一致する結果がありません`). Provide a "条件をクリア" text button. |
| **Loading (first paint)** | Skeleton blocks at `#eef0f3` matching final layout, 1.2s shimmer with 6% white highlight, rounded at component radius. |
| **Loading (in button)** | Spinner replaces label, button width preserved, press committed to prevent double-submit. |
| **Error (inline field)** | `#d32f2f` 1px border + 3px `rgba(211,47,47,0.12)` ring, help text below in `#d32f2f` 13px. One polite, specific sentence. |
| **Error (toast/banner)** | White bg, 4px `#d32f2f` left border, `#1a1a1a` text, one teineigo sentence. Non-blocking. |
| **Error (page-level)** | Reserved for outage. Centered `#1a1a1a` 16px/600 message + red retry button. No illustration clutter. |
| **Success (toast)** | Dark `#1a1a1a` bg, white 14px text, 3s auto-dismiss (`保存しました`). |
| **Success (banner)** | White bg, 4px `#2e9e5b` left border, persists until dismissed. |
| **Selected / Active** | `#fdecec` background + 1px `#E60012` border (cards/rows), or 2px `#E60012` underline (tabs). |
| **Disabled** | Button bg `#f0a6ab` (red) or `#eef0f3` (neutral); text keeps contrast; inputs keep `#cbd0d6` border so geometry stays stable. |
| **Focus (keyboard)** | 3px `rgba(230,0,18,0.12)` ring + `#E60012` border on the focused control. Always visible for accessibility. |

## 15. Motion & Easing

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Checkbox/toggle state flips |
| `motion-fast` | 120ms | Hover, focus, button press |
| `motion-standard` | 220ms | Default — dropdowns, accordions, tab content |
| `motion-slow` | 360ms | Modal open, emphasized reveals |
| `motion-page` | 300ms | Route/section transitions on marketing pages |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Things appearing — modals, dropdowns, toasts |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Things leaving — dismissals |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way — accordions, hover lifts |
| `ease-emphasis` | `cubic-bezier(0.2, 0.0, 0.0, 1)` | Brand moments — hero reveals, the red-thread draw |

**Signature motions.**

1. **Red-thread reveal.** On hero load, the brand's red line draws left-to-right over `motion-slow` with `ease-emphasis` — the visual signature of "connection forming". Reserved for brand/hero moments, never routine UI.
2. **CTA hover.** Primary red button shifts `#E60012` → `#cc0010` over `motion-fast` with a subtle 1px lift; no scale bounce — the corporate tone forbids playful overshoot.
3. **Card hover (marketing).** Feature cards lift with shadow Level 1 → Level 2 over `motion-standard / ease-standard`, translateY -2px. Restrained, not springy.
4. **Modal entry.** Backdrop fades `rgba(26,26,26,0)` → `rgba(26,26,26,0.55)` while the dialog rises from `y+16px` over `motion-slow / ease-enter`. Dismissal uses `motion-fast / ease-exit`.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all tokens collapse to `motion-instant`; the red-thread draw renders instantly at full length. The interface stays fully usable.

<!--
OmD v0.1 Sources — Sansan

Token grounding:
- sansan.com (live page, 2026-06-06): white canvas, near-black corporate text,
  red primary CTA system, Hiragino/Noto Sans JP/Helvetica Neue font stack,
  generous whitespace, real business-meeting photography.
- corp-sansan.com 2017 logo-refresh announcement: red "thread of fate" (赤い糸)
  horizontal mark; Sansan red vermilion (#E60012) as the singular brand color.
- Wikimedia Commons "Sansan logo.svg": wordmark + red-line geometry.
- brandfetch.com/corp-sansan.com: logo asset library (color detail page 403 at
  fetch time; brand-red value cross-confirmed via logo SVG + public brand usage).

Company facts (publicly documented): Sansan, Inc. founded 2007, Tokyo, by
Chika Terada; TSE listing 2019; product family includes Sansan, Bill One,
Contract One, and Eight. Slogan "早く言ってよ〜".

Personas (§13) are fictional archetypes informed by publicly described Japanese
B2B SaaS buyer segments; any resemblance to specific individuals is unintended.

Interpretive claims (e.g., "the red is the company's entire thesis rendered as
one stroke") are editorial readings grounded in Sansan's own published red-thread
brand explanation, not verbatim Sansan statements. Semantic/neutral scale hexes
are reasoned reconstructions consistent with the observed live palette.
-->
