---
id: mustit
name: "MUSTIT"
country: KR
category: ecommerce
homepage: "https://www.mustit.co.kr"
primary_color: "#D00000"
logo:
  type: favicon
  slug: "https://static-ux.mustit.co.kr/img/front/favicon.ico"
verified: "2026-06-03"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#d00000"
    brand: "#1f1f2c"
    canvas: "#ffffff"
    surface: "#fafafa"
    foreground: "#222222"
    muted: "#888888"
    on-primary: "#ffffff"
    accent-info: "#3083e4"
    accent-outlet: "#8c1e46"
    surface-mid: "#f5f5f5"
    hairline: "#e6e6e6"
    border-subtle: "#f0f0f0"
    disabled: "#cccccc"
  typography:
    family: { sans: "Pretendard", mono: "Pretendard" }
    display:    { size: 28, weight: 700, lineHeight: 1.35, use: "Section hero titles" }
    title-l:    { size: 24, weight: 700, lineHeight: 1.33, use: "Modal, page headers" }
    title-m:    { size: 20, weight: 700, lineHeight: 1.35, use: "Section headers" }
    title-s:    { size: 18, weight: 600, lineHeight: 1.5, use: "Card group titles" }
    body-l:     { size: 16, weight: 500, lineHeight: 1.5, use: "Navigation links" }
    body-m:     { size: 15, weight: 600, lineHeight: 1.47, use: "Button labels, product name" }
    body-s:     { size: 14, weight: 700, lineHeight: 1.43, use: "Product price, form labels" }
    caption-l:  { size: 13, weight: 700, lineHeight: 1.38, use: "Search keyword, chips" }
    caption-s:  { size: 12, weight: 700, lineHeight: 1.33, use: "Metadata, sizes" }
    label:      { size: 11, weight: 700, lineHeight: 1.45, use: "Badges, micro-copy" }
    fine:       { size: 10, weight: 400, lineHeight: 1.6, use: "Legal, cart count" }
  spacing: [8, 10, 12, 16]
  rounded: { sm: 2, md: 4, lg: 8, full: 9999 }
  shadow:
    level1: "0 2px 4px 0 rgba(0,0,0,.03)"
    level2: "0 2px 8px 0 rgba(0,0,0,.05)"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#333333", fg: "#ffffff", radius: "4px", height: "48px", padding: "0 16px", font: "15px / 600", use: "Primary black CTA" }
    button-confirm: { type: button, bg: "#d00000", fg: "#ffffff", border: "1px solid #d00000", radius: "4px", height: "48px", font: "18px / 500", use: "Red confirm CTA" }
    button-outline: { type: button, bg: "#ffffff", fg: "#222222", border: "1px solid #333333", radius: "4px", height: "32px", font: "13px / 600", use: "Secondary action" }
    button-disabled: { type: button, bg: "#ffffff", fg: "#888888", border: "1px solid #dddddd", radius: "4px", use: "Disabled action" }
    tab: { type: tab, fg: "#aaaaaa", font: "16px / 500", active: "2px solid #222222 bottom border, fg #222222, 16px / 700", use: "Section tabs" }
    badge-outlet: { type: badge, bg: "#8c1e46", fg: "#ffffff", radius: "2px", height: "22px", padding: "0 8px", font: "11px / 700", use: "Outlet badge" }
    badge-info: { type: badge, fg: "#3083e4", border: "1px solid #3083e4", radius: "2px", height: "24px", font: "12px / 400", use: "Info tag" }
    chip: { type: badge, border: "1px solid #cccccc", radius: "17px", height: "34px", active: "1px solid #d00000", use: "Filter chip" }
    input-search: { type: input, bg: "#ffffff", fg: "#222222", radius: "4px", height: "40px", padding: "0 12px", font: "15px / 600", use: "Search input, placeholder #aaaaaa" }
---

# MUSTIT

Korea's leading luxury resale marketplace connecting 1,300+ luxury brands and millions of monthly shoppers through a mobile-first, discovery-driven experience.

## 1. Visual Theme & Atmosphere

MUSTIT projects a disciplined luxury-marketplace aesthetic: a near-black (`#1F1F2C`) and white canvas that recedes so individual product photography can dominate, accented by a single assertive brand red (`#D00000`) that marks every price-cut, badge, and primary CTA. The official brand philosophy — "Smart Luxury — Make the Best Discovery" — is made tangible through high-density list grids, tight typographic hierarchy in Pretendard, and a periscope-lens symbol (M SCOPE) that signals personal curation. Shadow use is deliberately restrained (max `rgba(0,0,0,.05)`), surfaces feel flat and minimal, and the red accent creates instant visual priority in a visually busy product grid.

## 2. Color Palette & Roles

- **Brand Navy:** `#1F1F2C` — official primary brand color (CI logotype, hero backgrounds, brand header)
- **Brand Red:** `#D00000` — primary action color; discount price labels, primary CTA button, cart badge, active filter, sale tag
- **Text Primary:** `#222222` — body text, product titles, prices, headings
- **Text Secondary:** `#888888` — captions, secondary metadata, placeholder
- **Text Tertiary:** `#555555` — supporting body copy, sub-descriptions
- **Text Disabled:** `#cccccc` — disabled input labels, muted controls
- **Info Blue:** `#3083e4` — informational tags, delivery status, link text
- **Outlet Burgundy:** `#8c1e46` — outlet badge background
- **Background White:** `#ffffff` — page and card backgrounds
- **Surface Light:** `#fafafa` — list section backgrounds, hot deal section
- **Surface Mid:** `#f5f5f5` — divider fills, skeleton base
- **Border Default:** `#e6e6e6` — card borders, divider lines
- **Border Subtle:** `#f0f0f0` — tab underlines, light dividers

## 3. Typography Rules

Primary typeface: **Pretendard** (all UI copy); secondary: **SD Gothic Neo** (legacy web); display: **Archivo Expanded** (brand marketing/corp headings).

| Token | Size | Weight | Line-height | Usage |
|-------|------|--------|-------------|-------|
| Display | 28px | 700 | 1.35 | Section hero titles |
| Title L | 24px | 700 | 1.33 | Modal, page headers |
| Title M | 20px | 700 | 1.35 | Section headers |
| Title S | 18px | 600 | 1.5 | Card group titles |
| Body L | 16px | 500 | 1.5 | Navigation links |
| Body M | 15px | 600 | 1.47 | Button labels, product name |
| Body S | 14px | 700 | 1.43 | Product price, form labels |
| Caption L | 13px | 700 | 1.38 | Search keyword, chips |
| Caption S | 12px | 700 | 1.33 | Metadata, sizes |
| Label | 11px | 700 | 1.45 | Badges, micro-copy |
| Fine | 10px | 400 | 1.6 | Legal, cart count |

## 4. Component Stylings

### Button

**Primary (Black)**
- Background: `#333333`
- Text: `#ffffff`
- Radius: 4px
- Height: 48px
- Font: 15px / 600
- Padding: 0 16px

**Primary (Red / Confirm)**
- Background: `#D00000`
- Text: `#ffffff`
- Border: 1px solid `#D00000`
- Radius: 4px
- Height: 48px
- Font: 18px / 500

**Outline (Secondary)**
- Background: `#ffffff`
- Text: `#222222`
- Border: 1px solid `#333333`
- Radius: 4px
- Height: 32px
- Font: 13px / 600

**Disabled**
- Background: `#ffffff`
- Text: `#888888`
- Border: 1px solid `#dddddd`
- Radius: 4px

---

### Tab

**Active**
- Text: `#222222`
- Font: 16px / 700
- Border-bottom: 2px solid `#222222`

**Inactive**
- Text: `#aaaaaa`
- Font: 16px / 500

---

### Badge

**Outlet**
- Background: `#8c1e46`
- Text: `#ffffff`
- Radius: 2px
- Height: 22px
- Padding: 0 8px
- Font: 11px / 700

**Info Tag**
- Text: `#3083e4`
- Border: 1px solid `#3083e4`
- Radius: 2px
- Height: 24px
- Font: 12px / 400

---

### Filter Chip

**Default**
- Border: 1px solid `#cccccc`
- Radius: 17px
- Height: 34px

**Active**
- Border: 1px solid `#D00000`
- Radius: 17px

---

### Search Input

**Default**
- Background: `#ffffff`
- Text: `#222222`
- Radius: 4px
- Height: 40px
- Padding: 0 12px
- Font: 15px / 600

**Placeholder**
- Text: `#aaaaaa`
- Font: 15px / 400

---

**Verified:** 2026-06-03
**Tier 1 sources:** https://www.mustit.co.kr (homepage HTML + embedded CSS bundle, 1.2 MB), https://corp.mustit.co.kr/brand (CI/BI brand page HTML), https://corp.mustit.co.kr/lib/css/mustit-corp.css (corp brand CSS, 70 kB), https://static-ux.mustit.co.kr/ux/service/common/pretendard.css (font CSS)
**Tier 2 sources:** getdesign.md/mustit — NOT LISTED (no data returned). refero — KR/TW brand, no result expected.
**Conflicts unresolved:** The main shopping app uses `#333` as the primary CTA (near-black), while the corp site uses `#000`/`#1F1F2C` for brand backgrounds; `#D00000` is consistent across both as the accent/discount/action color.

## 5. Layout Principles

MUSTIT is built mobile-first as a Nuxt.js SPA served from `m.web.mustit.co.kr`. The standard content gutter is 16px on each side. Product grids use a 2-column layout with an ~8px gap between cards. Sections are separated by a 10px gray divider strip (`#f5f5f5`) or a 1px border line (`#f0f0f0`). The bottom fixed action bar (buy / cart) sits above the native safe-area inset. Maximum content width on desktop is 360–420px, centered with a white card. Sticky top navigation height is 44–56px.

## 6. Depth & Elevation

Surfaces are intentionally flat. Elevation is expressed through subtle shadows, not strong drop shadows:

- **Level 0** — flat (no shadow): content sections, list items
- **Level 1** — `box-shadow: 0 2px 4px 0 rgba(0,0,0,.03)`: product cards, filter chips
- **Level 2** — `box-shadow: 0 2px 8px 0 rgba(0,0,0,.05)`: bottom sheets, filter buttons
- **Overlay** — `background: rgba(0,0,0,.5)`: modal/sheet backdrop
- **Dark scrim** — `rgba(0,0,0,.03)` pseudo-overlay on product thumbnails

Bottom sheets use `border-radius: 15px 15px 0 0`; modals/alerts use `border-radius: 8px`.

## 7. Do's and Don'ts

### Do
- Use `#D00000` exclusively for price discounts, sale badges, and primary conversion CTAs
- Keep all button radius at 4px for UI elements; use 17px+ only for pill chips/filter controls
- Use Pretendard weight 700 for all prices and product names to create scan hierarchy
- Keep section backgrounds alternating between `#ffffff` and `#fafafa` for visual rhythm
- Apply `transition: all 0.2s ease` for interactive micro-feedback (hover/active states)
- Use the 16px horizontal gutter consistently across all list and card views

### Don't
- Don't mix the brand red `#D00000` with decorative elements — reserve it for urgency/action signals
- Don't use more than two typeface families in any single view (Pretendard + one brand face)
- Don't apply heavy shadows (`rgba >0.1`) — the luxury positioning demands minimal depth cues
- Don't round product image containers — keep them square with sharp corners to frame merchandise
- Don't use the outlet burgundy `#8c1e46` outside of the Outlet category badge context

## 8. Responsive Behavior

The primary product is a mobile web app (max-width ~360–428px). The viewport is locked: `user-scalable=no, initial-scale=1.0`. At wider breakpoints the layout centers in a white card against a neutral background. The product grid collapses from a 2-column to a 1-column detail view on PDP. Images use Cloudflare `/_dims_/format/webp/autorotate/on` for adaptive delivery. Font sizes do not scale with viewport — they are fixed px values throughout.

## 9. Agent Prompt Guide

When generating MUSTIT-style UI:
- Mobile-first, max-width 428px, 16px side padding
- Color: `#222` body, `#D00000` price/CTA, `#888` secondary, `#fafafa` section background
- Font: Pretendard; body 14px/700 for prices, 13px/700 for captions, 15px/600 for buttons
- Buttons: bg `#333`, color `#fff`, radius 4px, height 48px — or red `#D00000` for confirm actions
- Cards: no radius, white bg, `box-shadow: 0 2px 4px 0 rgba(0,0,0,.03)`, 1px `#f0f0f0` border
- Tabs: `border-bottom: 2px solid #222` active, `color: #aaa` inactive
- Chips: `border-radius: 17px`, `border: 1px solid #ccc` default, `#D00000` active
- No heavy gradients in product areas; hotdeal sections may use deep purple-to-teal gradients
- Keep all decorative shadow under `rgba(0,0,0,.05)`

## 10. Voice & Tone

**Three adjectives:** Direct, Discovery-forward, Confident

| Do | Don't |
|----|-------|
| Use active, action-oriented verbs ("발견하세요", "탐험하세요") | Use passive constructions or vague luxury puffery |
| Keep copy concise — product names and discount percentages speak | Over-explain or add unnecessary adjectives |
| Lead with the deal / discovery hook | Lead with brand philosophy in transactional flows |
| Mix Korean and brand/product names naturally | Force awkward Konglish or all-Korean transliterations |

**Illustrative voice samples:**
- *Illustrative:* "세상 모든 럭셔리 취향을 탐험하세요." — broad, aspirational, discovery-forward
- *Illustrative:* "정품 200% 보장. 오늘 핫딜 특가를 놓치지 마세요." — direct, urgency-led, trust-anchored
- *Illustrative:* "1,300개 해외명품 브랜드. 매일 달라지는 특가." — data-led, no fluff, scan-friendly

## 11. Brand Narrative

MUSTIT (머스트잇) launched in 2011 as Korea's first dedicated luxury goods marketplace, solving a single friction: accessing authenticated global luxury brands without travelling abroad or paying full retail. The platform grew into a multi-sided market, adding seller tools, authentication guarantees, and eventually a price-comparison engine across 1,300+ brands and 3.7 million+ product listings (2022 figures).

The company's second chapter, captured in the tagline "Smart Luxury — Make the Best Discovery," shifts emphasis from access to personalised taste-curation. Where early MUSTIT competed on price and breadth, today it competes on intelligence: surfacing the right item from an enormous catalogue for each individual shopper. The M SCOPE periscope symbol — introduced in the 2020s rebrand — encodes this shift from "shopping" to "exploration."

At its core, MUSTIT positions luxury not as an exclusive club but as an everyday enrichment layer. The brand promises that even a person who has never bought a designer item before can "minimise the risk of failure" through personalised guidance — democratising taste without cheapening aspiration.

## 12. Principles

1. **Discovery over search.** Every surface should surface the unexpected, not just confirm known intent. *UI implication:* Prioritise curated carousels and personalised shelf rows over pure search-result grids.

2. **Trust before conversion.** Authentication guarantees and seller ratings must be visible at the product card level, not buried in PDP fine print. *UI implication:* Show authenticity badges inline on thumbnails; never hide them behind a tap.

3. **Speed as luxury.** A slow page is a brand failure in a segment where impatience is typical. *UI implication:* Use WebP images, skeleton loading, and SSR; never show empty-state jumps on first paint.

4. **Red means action.** The brand red is a semantic signal, not a decoration. *UI implication:* Apply `#D00000` only to discount labels, CTA buttons, and active states — never to illustrative or informational copy.

5. **Mobile is the brand.** The desktop experience is secondary. *UI implication:* Design all layouts at 375px width first; use fixed px font sizes; lock zoom.

## 13. Personas

*Illustrative persona A — "명품 입문자" (Luxury Newcomer):* A mid-20s professional buying their first designer piece. Price-sensitive but aspirational, anxious about authenticity. Scans price discounts and authentication badges before product names. Expects clear return/guarantee copy.

*Illustrative persona B — "셀럽 팔로워" (Trend Follower):* A late-20s social-media-active consumer chasing the same items worn by influencers or K-pop idols. Arrives via specific brand + item searches. Values speed of finding the item and peer review signals over price.

*Illustrative persona C — "컬렉터" (Collector):* A 35–50 connoisseur who tracks rare or discontinued items across multiple platforms. Filters heavily, compares price histories, and values seller reputation data. Low churn once trusted.

*Illustrative persona D — "선물 구매자" (Gift Buyer):* An occasional visitor purchasing for a birthday or anniversary. Needs curated "best-seller" shelving, category gift guides, and express delivery confidence. Highly reactive to the discount badge.

## 14. States

- **Empty — search no results:** White background, centered illustration, heading "검색 결과가 없어요" in `#222`, subtitle in `#888`; height fills viewport minus nav
- **Loading — product grid:** 2-column skeleton grid; each card shows a `#f5f5f5` rectangle (image placeholder) and two `#f5f5f5` text lines at 14px and 12px height; no shimmer animation measured
- **Error — network failure:** Toast-style slide-up notification in `#333` background, white text, 0.4s cubic-bezier spring entry
- **Error — sold-out PDP:** Primary CTA replaced with a disabled-styled gray button (`#ddd` border, `#888` text); "품절" (sold out) label in `#D00000`
- **Success — add to cart:** Slide-up toast message confirms addition; green check in `#12cf35`; auto-dismiss at 2–3 s
- **Skeleton — product card:** `border-radius: 0` image block + two placeholder lines in `#f5f5f5` rendered before data arrives
- **Disabled — form field:** `background: #fafafa`, `border: 1px solid #f0f0f0`, label text `#ccc`
- **Active filter chip:** `border: 1px solid #D00000`; badge counter circle `background: #D00000`, `color: #fff`, `border-radius: 9px`

## 15. Motion & Easing

| Token | Duration | Easing | Usage |
|-------|----------|--------|-------|
| Micro | 150ms | `ease-out` | Icon rotation (dropdown arrow), tap highlight |
| Fast | 200ms | `ease` | Slide-up toast entry, top/bottom position change |
| Standard | 250ms | `ease-out` | Fade in/out, bottom-sheet slide up/down |
| Medium | 400ms | `cubic-bezier(.25,.46,.45,.94)` | Sheet slide + opacity composite |
| Spring | 400ms | `cubic-bezier(.47,1.64,.41,.8)` | Toast bounce-in |
| Slow | 500ms | `ease` | Pagination indicator slide, banner swipe |
| Wish | 400ms | `ease-in` | Wishlist heart animation (on/off) |

**Rules:**
- Enter animations use `ease-out`; exit animations use `ease-in`
- Never animate product image loads — swap instantly to avoid layout shift
- Sheet overlays fade backdrop at 250ms separate from content slide
- All interaction animations ≤ 500ms total; prefer ≤ 250ms for taps
