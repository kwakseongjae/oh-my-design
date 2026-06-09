---
id: shinhancard
name: Shinhan Card
country: KR
category: fintech
homepage: "https://www.shinhancard.com"
primary_color: "#005df9"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=shinhancard.com&sz=128"
verified: "2026-06-09"
added: "2026-06-09"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-09"
  components_harvested: true
  colors:
    primary: "#005df9"
    indigo: "#6268ff"
    canvas: "#ffffff"
    surface: "#f8f9fc"
    surface-blue: "#f0f4fa"
    surface-indigo: "#ebf0ff"
    heading: "#101828"
    slate: "#344054"
    body: "#475467"
    muted: "#667085"
    muted-light: "#818da2"
    border: "#e4e7ec"
    border-strong: "#d0d5dd"
    on-primary: "#ffffff"
    danger: "#f44f4f"
    danger-bg: "#fff6f5"
  typography:
    family: { sans: "Digital One Shinhan" }
    display:    { size: 32, weight: 900, lineHeight: 1.20, tracking: -0.64, use: "Hero / main visual headline" }
    h1:         { size: 28, weight: 700, lineHeight: 1.30, tracking: -0.28, use: "Page title" }
    section:    { size: 21, weight: 700, lineHeight: 1.30, tracking: -0.28, use: "Section heading" }
    body-input: { size: 16, weight: 500, lineHeight: 1.69, tracking: -0.32, use: "Form input, emphasized body" }
    body:       { size: 14, weight: 400, lineHeight: 1.71, tracking: -0.28, use: "Standard reading text, nav links" }
    caption:    { size: 12, weight: 400, lineHeight: 1.50, use: "Metadata, fine print, timestamps" }
  spacing: { xs: 2, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 32, section: 48 }
  rounded: { sm: 8, md: 12, lg: 16, full: 9999 }
  shadow:
    hairline: "#e4e7ec 0px 0px 0px 1px"
    inset-line: "#d0d5dd 0px -1px 0px 0px inset"
  components:
    button-primary: { type: button, bg: "#005df9", fg: "#ffffff", radius: "16px", padding: "2px 12px", font: "14px / 400", use: "Primary CTA — 로그인, SOL페이 다운로드 (shc-btn theme-primary)" }
    button-tertiary: { type: button, bg: "#f0f4fa", fg: "#101828", radius: "12px", padding: "2px 8px", font: "14px / 400", use: "Tertiary action — 마이페이지, 내 정보관리 (shc-btn theme-tertiary)" }
    button-indigo: { type: button, bg: "#6268ff", fg: "#ffffff", radius: "12px", padding: "2px 8px", font: "14px / 400", use: "Secondary accent action / promo" }
    card: { type: card, bg: "#f8f9fc", fg: "#101828", radius: "16px", padding: "24px", font: "14px / 400", use: "Product / loan entry card, hairline #e4e7ec ring" }
    card-indigo: { type: card, bg: "#ebf0ff", fg: "#101828", radius: "16px", padding: "24px", use: "Highlighted promo card on indigo tint" }
    input-text: { type: input, bg: "#ffffff", fg: "#101828", radius: "8px", font: "16px / 500", use: "Search / form input, 1px #d0d5dd border, focus #005df9" }
    badge-danger: { type: badge, bg: "#fff6f5", fg: "#f44f4f", radius: "8px", padding: "2px 8px", font: "12px / 400", use: "Alert / required / error badge" }
    tab: { type: tab, bg: "#ffffff", fg: "#667085", radius: "0px", font: "14px / 400", active: "2px bottom border #005df9, fg #101828", use: "Main navigation / content tabs" }
    list-item: { type: listItem, bg: "#ffffff", fg: "#344054", radius: "12px", padding: "0px 12px", font: "14px / 400", use: "Menu / quick-link list row, #e4e7ec divider" }
    toggle: { type: toggle, bg: "#005df9", fg: "#ffffff", radius: "9999px", use: "On-state switch / segmented selector" }
---

# Design System Inspiration of Shinhan Card

## 1. Visual Theme & Atmosphere

Shinhan Card's website reads as the digital face of a major Korean financial institution that has been deliberately modernized for a mobile-first, super-app era. The page opens on a clean white canvas (`#ffffff`) layered with soft off-white and pale-blue surfaces (`#f8f9fc`, `#f0f4fa`), anchored by a single confident interactive blue (`#005df9`) that carries every primary call to action. Where legacy bank sites lean on dense navy chrome and stock imagery, Shinhan Card opts for generous rounded cards, airy spacing, and a restrained two-tone neutral scale that lets the blue do all the signalling. The result feels trustworthy and institutional, yet light and consumer-friendly — closer to a fintech app than a traditional card-issuer portal.

The defining typographic element is the proprietary `Digital One Shinhan` typeface, set across the entire system from 32px hero display down to 12px fine print. It runs with consistently tight negative letter-spacing (around -0.28px at body sizes, widening to -0.64px at display) that packs Korean and Latin glyphs into dense, engineered lines. Body text sits at a comfortable 14px with a generous 24px line-height, giving the dense Hangul a calm, readable rhythm. Headlines escalate in weight rather than only in size — 700 for page and section titles, jumping to 900 for the hero — so hierarchy is felt through ink density as much as scale.

What distinguishes Shinhan Card is its use of barely-there elevation. Instead of drop shadows, surfaces are separated by a 1px hairline ring (`#e4e7ec 0px 0px 0px 1px`) and an inset bottom line (`#d0d5dd 0px -1px 0px 0px inset`). Depth is communicated through tinted surface stacking — white over `#f8f9fc` over `#f0f4fa` over `#ebf0ff` — rather than blur. This flat, paper-layered aesthetic keeps the interface feeling crisp and document-grade, appropriate for a product where users scan statements, balances, and transactions.

**Key Characteristics:**
- Proprietary `Digital One Shinhan` typeface across the entire system
- Single interactive blue (`#005df9`) as the sole primary-action color
- Weight-driven hierarchy: 400 body, 700 titles, 900 hero
- Tinted surface stacking (`#ffffff` / `#f8f9fc` / `#f0f4fa` / `#ebf0ff`) instead of drop shadows
- Hairline `#e4e7ec` rings and inset `#d0d5dd` lines for separation
- Generous rounded geometry — 8px / 12px / 16px radius family
- Tight negative tracking (-0.28px body, -0.64px display) for dense Korean text
- Indigo (`#6268ff`) as a secondary accent for promotional moments

## 2. Color Palette & Roles

### Primary
- **Shinhan Blue** (`#005df9`): Primary brand color, CTA backgrounds, link text, active tab indicator, focus rings. A saturated, slightly electric blue that anchors the entire system.
- **Ink** (`#101828`): Primary heading and high-emphasis text color. A near-black navy that adds warmth and depth over pure black.
- **Pure White** (`#ffffff`): Page background, card surfaces, button text on the blue.

### Accent
- **Indigo** (`#6268ff`): Secondary accent for promotional cards and decorative highlights, paired with its tint surface.
- **Surface Indigo** (`#ebf0ff`): Pale indigo tint for highlighted promo cards and feature callouts.

### Neutral Scale
- **Slate** (`#344054`): Strong body text, list rows, secondary headings.
- **Body** (`#475467`): Standard secondary text, descriptions.
- **Muted** (`#667085`): Tertiary text, inactive tab labels, captions.
- **Muted Light** (`#818da2`): Disabled text, placeholders, axis labels.

### Surfaces & Borders
- **Surface** (`#f8f9fc`): Default card and panel background.
- **Surface Blue** (`#f0f4fa`): Tertiary button background, subtle filled chips.
- **Border** (`#e4e7ec`): Standard hairline border, dividers, card rings.
- **Border Strong** (`#d0d5dd`): Input borders, inset separator lines.

### Feedback
- **Danger** (`#f44f4f`): Error text, alert badges, required-field markers.
- **Danger BG** (`#fff6f5`): Tinted surface behind danger badges and inline errors.

## 3. Typography Rules

### Font Family
- **Primary**: `Digital One Shinhan`, with system fallback stack: `-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- The proprietary face covers both Hangul and Latin and is used at every level — there is no separate display or mono family on the marketing surface.

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| Display / Hero | 32px (2.00rem) | 900 | 1.20 | -0.64px | Main visual headline, maximum density |
| Page Title (h1) | 28px (1.75rem) | 700 | 1.30 | -0.28px | Top-level page title |
| Section (h2) | 21px (1.31rem) | 700 | 1.30 | -0.28px | Section / card-group heading |
| Body Emphasized / Input | 16px (1.00rem) | 500 | 1.69 | -0.32px | Form input, emphasized body |
| Body | 14px (0.88rem) | 400 | 1.71 | -0.28px | Standard reading text, nav links |
| Caption | 12px (0.75rem) | 400 | 1.50 | normal | Metadata, fine print, timestamps |

### Principles
- **Weight as hierarchy**: Distinction comes primarily from weight escalation (400 → 700 → 900), not only size. The hero's 900 weight is the heaviest moment in the system.
- **Tight tracking for Hangul density**: Negative letter-spacing (-0.28px body, -0.64px display) keeps dense Korean lines compact and engineered.
- **Generous line-height on body**: 14px body runs at a 24px line box (~1.71) so dense Hangul stays calm and scannable.
- **One family, all levels**: `Digital One Shinhan` carries the entire system, reinforcing brand consistency from hero to fine print.

## 4. Component Stylings

### Buttons

**Primary** (`shc-btn theme-primary`)
- Background: `#005df9`
- Text: `#ffffff`
- Padding: 2px 12px (size-xl), 2px 8px (size-lg)
- Radius: 16px (xl), 12px (lg)
- Font: 14px `Digital One Shinhan` weight 400
- Use: Primary CTA — "로그인", "신한 SOL페이 다운로드"

**Tertiary** (`shc-btn theme-tertiary`)
- Background: `#f0f4fa`
- Text: `#101828`
- Padding: 2px 8px
- Radius: 12px
- Use: Secondary actions — "마이페이지", "내 정보관리"

**Indigo Accent**
- Background: `#6268ff`
- Text: `#ffffff`
- Radius: 12px
- Use: Promotional / accent CTAs paired with `#ebf0ff` surfaces

### Cards & Containers
- Background: `#f8f9fc` (standard) or `#ebf0ff` (promo highlight)
- Text: `#101828`
- Radius: 16px
- Padding: 24px
- Separation: 1px hairline ring `#e4e7ec 0px 0px 0px 1px`, no drop shadow
- Use: Loan/product entry cards, feature tiles

### Inputs & Forms
- Background: `#ffffff`
- Border: `1px solid #d0d5dd`
- Radius: 8px
- Text: `#101828`, 16px weight 500
- Placeholder: `#818da2`
- Focus: `#005df9` border / ring

### Badges
**Danger / Alert**
- Background: `#fff6f5`
- Text: `#f44f4f`
- Padding: 2px 8px
- Radius: 8px
- Font: 12px weight 400

### Tabs / Navigation
- Inactive: `#667085` text, transparent background
- Active: `#101828` text with 2px bottom border `#005df9`
- Font: 14px weight 400
- Sticky header on white with hairline `#e4e7ec` divider

### List Items
- Background: `#ffffff`
- Text: `#344054`
- Radius: 12px
- Padding: 0px 12px
- Divider: 1px `#e4e7ec` between rows

---

**Verified:** 2026-06-09 (omd-add-reference live inspect)
**Tier 1 sources:** https://www.shinhancard.com, https://www.shinhancard.com/pconts/html/main.html

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 2px, 8px, 12px, 16px, 20px, 24px, 32px, 48px
- Notable: Tight inner button padding (2px vertical) contrasts with generous 24px card padding — chrome is dense, content surfaces are airy.

### Grid & Container
- Centered main column with full-width tinted section bands
- Product/loan entries arranged as multi-column rounded card grids
- Sticky top header with GNB navigation; footer carries customer-center numbers and legal links over `#ffffff`
- Quick-link rows and statement-style lists use full-width `#ffffff` rows with hairline dividers

### Whitespace Philosophy
- **Paper-layered depth**: Sections are distinguished by tinted surfaces (`#f8f9fc`, `#f0f4fa`, `#ebf0ff`) stacked over white, not by shadows.
- **Airy cards, dense data**: Marketing cards get 24px padding while transactional list rows pack tightly for scanning statements.
- **Rounded calm**: Consistent 12–16px radius across cards and buttons softens the institutional density.

### Border Radius Scale
- Small (8px): Inputs, badges, small chips
- Standard (12px): Buttons, list rows, the workhorse radius
- Large (16px): Cards, product tiles, large CTAs
- Full (9999px): Toggles, pill selectors

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text |
| Hairline (Level 1) | `#e4e7ec 0px 0px 0px 1px` ring | Cards, panels, content tiles |
| Inset Line (Level 2) | `#d0d5dd 0px -1px 0px 0px inset` | Sticky headers, list-row bottoms, input bases |
| Surface Tint (Level 3) | `#f8f9fc` / `#f0f4fa` / `#ebf0ff` stacking | Section separation without blur |
| Focus Ring | `#005df9` outline | Keyboard focus, active input |

**Shadow Philosophy**: Shinhan Card almost entirely avoids blurred drop shadows. Elevation is communicated through crisp 1px hairline rings (`#e4e7ec`) and inset bottom lines (`#d0d5dd`), reinforced by tinted-surface stacking. This produces a document-grade, paper-layered feel appropriate for a financial product where clarity and precision outrank decorative depth.

## 7. Do's and Don'ts

### Do
- Use `#005df9` as the single primary-action and link color
- Separate surfaces with hairline `#e4e7ec` rings and tinted stacking rather than drop shadows
- Use `#101828` (ink navy) for headings instead of pure black
- Escalate weight (400 → 700 → 900) to build hierarchy
- Keep radii in the 8–16px family for cards and buttons
- Apply tight negative tracking (-0.28px) on dense Korean body text
- Use `Digital One Shinhan` at every level for brand consistency

### Don't
- Don't introduce a second primary CTA color — blue carries all primary actions
- Don't use heavy blurred drop shadows — hairlines and inset lines are the language
- Don't use pure black (`#000000`) for headings — always `#101828`
- Don't use pill/fully-rounded shapes on cards — those are reserved for toggles
- Don't crowd cards — keep the airy 24px padding
- Don't use the indigo (`#6268ff`) accent for standard primary CTAs — it is promotional
- Don't apply positive letter-spacing on Hangul body text

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, stacked cards, larger tap targets |
| Tablet | 640–1024px | 2-column card grids, moderate padding |
| Desktop | 1024–1280px | Full multi-column product grids |
| Large Desktop | >1280px | Centered content with generous side margins |

### Touch Targets
- Buttons keep comfortable horizontal padding (8–12px) with full-height tap zones
- Navigation links at 14px with adequate row spacing
- Cards span full width on mobile for easy tapping
- `pc-only` list rows collapse out of the mobile layout

### Collapsing Strategy
- Hero: 32px display compresses on mobile, weight 900 maintained
- Navigation: horizontal GNB → hamburger / drawer on mobile
- Product cards: multi-column → 2-column → single column stacked
- Statement/list rows: maintain full-width hairline-divided layout
- Section spacing: 48px → reduced on mobile

### Image Behavior
- Card thumbnails maintain 16px radius at all sizes
- Tinted section bands persist full-width across breakpoints
- Promo cards keep their `#ebf0ff` surface and indigo accent on mobile

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Shinhan Blue (`#005df9`)
- Background: Pure White (`#ffffff`)
- Card surface: Off-white (`#f8f9fc`)
- Promo surface: Surface Indigo (`#ebf0ff`)
- Heading text: Ink (`#101828`)
- Body text: Body (`#475467`)
- Muted text: Muted (`#667085`)
- Border: Hairline (`#e4e7ec`)
- Link: Shinhan Blue (`#005df9`)
- Accent: Indigo (`#6268ff`)
- Error: Danger (`#f44f4f`)

### Example Component Prompts
- "Create a hero on white. Headline at 32px Digital One Shinhan weight 900, line-height 1.20, letter-spacing -0.64px, color #101828. Subtitle 16px weight 500, color #475467. Primary blue CTA (#005df9 bg, #ffffff text, 16px radius, 2px 12px padding) and tertiary button (#f0f4fa bg, #101828 text, 12px radius)."
- "Design a product card: #f8f9fc background, 16px radius, 24px padding, 1px hairline ring #e4e7ec, no drop shadow. Title 21px weight 700 #101828, body 14px weight 400 #475467."
- "Build a danger badge: #fff6f5 background, #f44f4f text, 8px radius, 2px 8px padding, 12px weight 400."
- "Create tabs: inactive #667085 14px labels, active #101828 with 2px bottom border #005df9. Sticky white header with hairline #e4e7ec divider."
- "Design an input: white background, 1px solid #d0d5dd border, 8px radius, 16px weight 500 #101828 text, #818da2 placeholder, focus border #005df9."

### Iteration Guide
1. Blue (`#005df9`) is the only primary-action color — never add a second
2. Weight escalation (400 / 700 / 900) builds hierarchy before size
3. Separate surfaces with hairline rings + tinted stacking, never heavy shadows
4. Heading color is `#101828`, body `#475467`, muted `#667085`
5. Radius family: 8px inputs, 12px buttons/rows, 16px cards, 9999px toggles
6. Apply -0.28px tracking on body, -0.64px on display
7. Indigo (`#6268ff`) and `#ebf0ff` are promotional only — not standard CTAs

---

## 10. Voice & Tone

Shinhan Card's voice is that of a trusted, polished Korean financial partner — reassuring, clear, and service-oriented, without the stiffness of a legacy bank. Korean copy favors polite, customer-respecting registers and concrete benefit framing ("목돈이 필요할 때", "카드값이 부담될 때") that meets the user at a moment of need. Labels are plain and functional ("로그인", "마이페이지", "이용대금명세서"), prioritizing comprehension over cleverness. The tone is calm and competent: a major card issuer that wants the digital experience to feel as dependable as its physical card.

| Context | Tone |
|---|---|
| Hero / promo headlines | Benefit-first, situational. Speaks to a user's moment of need. |
| Product descriptions | Concrete and plain. Names the product and the situation it solves. |
| CTAs | Functional imperatives. "로그인", "다운로드", "신청하기". |
| Form / error messages | Polite, specific, guiding. Explains what to fix. |
| Navigation / menu | Noun-based, scannable. Mirrors banking task vocabulary. |
| Legal / disclosure | Formal, regulatory-grade Korean. |
| Customer center | Warm, accessible. Phone numbers surfaced prominently. |

**Forbidden phrases.** Hype superlatives ("혁신적인", "최고의" without basis), exclamation-heavy marketing, emoji on transactional surfaces, and vague benefit claims without a concrete product. The register stays trustworthy and service-grade.

## 11. Brand Narrative

Shinhan Card is one of Korea's largest credit-card and consumer-finance companies, part of the Shinhan Financial Group, one of the country's leading financial conglomerates. As a major issuer, its remit spans credit and check cards, card loans (장기/단기카드대출), installment finance, and an expanding digital-payments footprint anchored by the SOL Pay app. The website positions Shinhan Card not merely as a card portal but as a financial-services super-app gateway — surfacing loans, statements, payments, and account management from a single, modernized hub.

The design reflects a deliberate modernization of the institutional banking experience. Rather than the dense navy chrome and corporate imagery typical of legacy financial portals, Shinhan Card adopts a light, rounded, fintech-adjacent aesthetic: white canvases, tinted surface layering, a single confident blue, and the proprietary `Digital One Shinhan` typeface that ties every touchpoint — web, app, card, and signage — to one coherent brand voice. This is a company signalling that it takes both trust and modern usability seriously.

What Shinhan Card embraces: clarity over decoration, a single anchoring brand blue, paper-layered depth that reads as document-grade precision, and benefit-first copy that meets users at moments of financial need. What it avoids: heavy shadows, cluttered legacy chrome, and hype-driven marketing that would undercut a financial institution's credibility.

## 12. Principles

1. **Trust through clarity.** Every surface prioritizes legibility and scannability — appropriate for a product where users read balances, statements, and terms. Decoration never competes with comprehension.
2. **One anchoring blue.** `#005df9` carries all primary intent. A single, confident interactive color keeps the system disciplined and the brand instantly recognizable.
3. **Weight, not noise.** Hierarchy is built through weight escalation (400 → 700 → 900), letting the neutral palette stay calm while importance is still unmistakable.
4. **Paper, not blur.** Elevation is hairline rings and tinted stacking, not drop shadows. The interface should feel like a crisp, well-organized document.
5. **One typeface, one voice.** `Digital One Shinhan` across every level unifies web, app, and physical brand into a single identity.
6. **Meet the moment of need.** Copy is benefit-first and situational, addressing the user's financial context directly rather than abstractly.
7. **Modern, but dependable.** Rounded geometry and airy spacing modernize the experience without sacrificing the steadiness a major financial institution must project.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Shinhan Card user segments (everyday cardholders, loan/credit users, mobile-payment adopters, and SMB owners), not individual people.*

**Ji-woo Park, 29, Seoul.** Office worker who manages nearly everything through the SOL Pay app. Checks her statement weekly and values being able to see her 이용대금명세서 and reward points at a glance. Trusts Shinhan Card because the digital experience feels as reliable as the physical card, and the clean layout makes scanning transactions effortless.

**Min-seok Kang, 41, Incheon.** Needs a short-term card loan to cover a cash-flow gap (단기카드대출). Appreciates that the site surfaces loan options with plain, situational labels ("소액 현금이 필요할 때") rather than burying them in jargon. Wants clear terms and a frictionless application — and distrusts financial sites that feel cluttered or pushy.

**Hye-jin Lim, 35, Busan.** Small-business owner exploring 개인사업자대출 and installment options. Works daily across statements and payment schedules. Values the dense, scannable list rows and the consistency between the web portal and the app. Would be frustrated by any redesign that added decoration at the expense of data density.

**Seung-ho Yoon, 52, Daegu.** Long-time cardholder who primarily uses the web portal and customer center. Relies on the prominently displayed 고객센터 number and the formal, regulatory-grade disclosure copy to feel confident. Trusts the modernized look precisely because it still reads as a serious financial institution, not a flashy startup.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no transactions)** | White canvas. Single line in Muted (`#667085`) at 14px explaining no activity yet. One Shinhan Blue CTA. No illustration clutter. |
| **Empty (no results)** | Muted (`#667085`) single line. Filter/search summary stays visible so the user can adjust. |
| **Loading** | Skeleton blocks in Border (`#e4e7ec`) at final dimensions, paper-flat with subtle shimmer. No spinner overlays on content. |
| **Error (form validation)** | Field-level. Danger (`#f44f4f`) text + `#fff6f5` tinted background. Message names what is invalid and how to fix it. |
| **Error (request failed)** | Inline banner in Danger tone. Plain-Korean explanation plus a retry or customer-center path. No generic "오류가 발생했습니다" alone. |
| **Success (action saved)** | Brief inline confirmation in Ink (`#101828`); blue accent on the affected row. Calm, no exclamation, no emoji. |
| **Disabled** | Surface and text fade together; primary blue becomes a muted tint rather than switching to gray, preserving brand read. |
| **Focus** | `#005df9` ring/border on inputs and interactive elements for clear keyboard navigation. |
| **Active tab** | `#101828` label with 2px `#005df9` bottom border. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State commits, selection, focus rings |
| `motion-fast` | 150ms | Hover, button press, tab switch |
| `motion-standard` | 250ms | Drawer, modal, dropdown, accordion |
| `motion-slow` | 350ms | Page-level transitions, hero reveals |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sheets, drawers, dropdowns |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Explicitly forbidden.** No bounce, no overshoot, no playful spring on transactional surfaces. A financial institution's motion is steady and predictable; motion exists to clarify continuity (which panel opened, which tab is active), never to delight at the cost of trust.

**Signature motions.**

1. **Tab indicator slide.** The `#005df9` 2px bottom border slides between tabs using `motion-fast / ease-standard`, signalling the active section without abrupt jumps.
2. **Drawer / GNB reveal.** Mobile navigation slides in with `motion-standard / ease-enter`; surfaces fade their hairline rings into place rather than dropping shadows.
3. **Surface tint transition.** Section bands crossfade their tinted backgrounds (`#f8f9fc` ↔ `#ebf0ff`) on scroll-into-view with `motion-slow`, keeping the paper-layered feel calm.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Tabs and drawers commit immediately; the portal stays fully functional.

## 16. Do's and Don'ts

### Do
- Anchor every primary action and link in Shinhan Blue (`#005df9`)
- Build hierarchy with weight (400 / 700 / 900) before reaching for size
- Use hairline `#e4e7ec` rings and tinted surface stacking for separation
- Keep `Digital One Shinhan` across all levels for a unified brand voice
- Hold radii in the 8 / 12 / 16px family; reserve 9999px for toggles
- Write benefit-first, situational Korean copy that meets the user's need
- Use Ink (`#101828`) for headings, never pure black

### Don't
- Don't add a second primary CTA color alongside the blue
- Don't apply heavy blurred drop shadows — hairlines and inset lines are the depth language
- Don't use the indigo (`#6268ff`) accent for standard primary CTAs
- Don't crowd cards — preserve the airy 24px padding
- Don't use fully-rounded pill shapes on cards or content tiles
- Don't lean on hype superlatives or emoji on transactional surfaces
- Don't apply positive letter-spacing to dense Korean body text
