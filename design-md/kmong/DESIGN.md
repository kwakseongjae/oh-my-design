---
id: kmong
name: Kmong
country: KR
category: consumer-tech
homepage: "https://kmong.com"
primary_color: "#92fa72"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=kmong.com&sz=128"
verified: "2026-06-09"
added: "2026-06-09"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-09"
  components_harvested: true
  colors:
    primary: "#92fa72"
    primary-deep: "#5dd877"
    primary-tint: "#e1f5dc"
    mint: "#27e7b7"
    canvas: "#ffffff"
    heading: "#212224"
    ink: "#000000"
    label: "#303441"
    hairline: "#f2f3f7"
    border: "#c8cad2"
    border-card: "#e4e5ed"
    blue: "#4b94fa"
    blue-deep: "#116ad4"
    blue-tint: "#ebf4ff"
    red: "#ff402b"
    on-primary: "#212224"
  typography:
    family: { sans: "Pretendard" }
    display:    { size: 40, weight: 700, lineHeight: 1.30, tracking: 0, use: "Hero headline (40px / 52px)" }
    section:    { size: 28, weight: 700, lineHeight: 1.36, tracking: 0, use: "Section titles (28px / 38px)" }
    subheading: { size: 20, weight: 700, lineHeight: 1.40, tracking: 0, use: "Card heads, search field text" }
    body:       { size: 16, weight: 400, lineHeight: 1.50, tracking: 0, use: "Standard reading text, nav, links" }
    button:     { size: 16, weight: 500, lineHeight: 1.00, tracking: 0, use: "Primary button label" }
    caption:    { size: 11, weight: 700, lineHeight: 1.40, tracking: 0, use: "Badges, ranking labels" }
    micro:      { size: 10, weight: 700, lineHeight: 1.40, tracking: 0, use: "Pill tags (기업용), metadata" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 40, section: 76 }
  rounded: { sm: 4, md: 11, lg: 27, full: 9999 }
  shadow:
    card: "rgba(0,0,0,0.08) 0px 4px 12px 0px"
    pop: "rgba(0,0,0,0.1) 0px 0px 20px 0px"
  components:
    button-primary: { type: button, bg: "#92fa72", fg: "#212224", radius: "4px", padding: "0px 24px", font: "16px / 500", use: "Primary CTA — 크몽 시작하기, dark ink label on signature green" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#000000", radius: "4px", padding: "0px 20px", font: "16px / 400", use: "Outlined action, 1px #c8cad2 border — category chips" }
    button-pill: { type: button, bg: "#ffffff", fg: "#303441", radius: "9999px", padding: "0px", font: "16px / 400", use: "Round icon/control button, translucent white surface" }
    input-search: { type: input, bg: "#ffffff", fg: "#212224", radius: "4px", padding: "16px 0px", font: "20px / 400", use: "Hero search — 어떤 전문가가 필요하세요?, underline-led, 1px #f2f3f7 hairline" }
    card-gig: { type: card, bg: "#ffffff", fg: "#212224", radius: "4px", use: "Service/gig card, 1px #e4e5ed border, shadow rgba(0,0,0,0.08) 0px 4px 12px" }
    badge-biz: { type: badge, bg: "#ebf4ff", fg: "#116ad4", radius: "11px", font: "10px / 700", use: "기업용 / Biz pill, blue-tinted" }
    badge-best: { type: badge, bg: "#ffffff", fg: "#ff402b", radius: "27px", font: "11px / 700", use: "Best / ranking badge, red accent" }
    badge-mint: { type: badge, bg: "#e1f5dc", fg: "#5dd877", radius: "11px", font: "10px / 700", use: "Promo / new tag, green-tint on deep green text" }
    nav-bar: { type: tab, bg: "#ffffff", fg: "#212224", font: "16px / 400", use: "Top header 76px, white surface, category nav row", active: "2px bottom border #212224" }
    avatar-pro: { type: avatar, bg: "#f2f3f7", radius: "9999px", use: "Expert/seller profile circle, hairline fill" }
---

# Design System Inspiration of Kmong

## 1. Visual Theme & Atmosphere

Kmong (크몽) is Korea's largest freelance and skill marketplace, and its homepage reads exactly like what it is: a high-trust, high-volume transaction surface designed to move a buyer from "I have a problem" to "I hired the right expert" with the least possible friction. The canvas is pure white (`#ffffff`) with near-black ink headings (`#212224`), and the entire personality is carried by a single, almost shockingly bright signature green — `#92fa72` on the primary CTA and the deeper `#5dd877` saturating cards, tags, and accents across the page. This is not the muted, institutional green of a bank; it is a fresh, energetic, almost neon lime that signals approachability and momentum. The effect is a marketplace that feels optimistic and fast rather than corporate.

The typography is set entirely in **Pretendard**, the de-facto Korean web sans that renders Hangul and Latin with even rhythm and excellent legibility at small sizes. Headlines run heavy (weight 700) and tight in leading — the hero is 40px on a 52px line — projecting confidence and directness rather than the whisper-weight restraint of Western fintech. Korean copy ("성공이 필요한 순간, 딱 맞는 전문가를 찾아보세요") is large, bold, and conversational. There is no decorative letter-spacing; tracking sits at `normal` throughout, letting Pretendard's native metrics do the work.

Depth is handled with the lightest possible touch. Cards lift on a soft single-layer shadow (`rgba(0,0,0,0.08) 0px 4px 12px`) and floating popovers use a diffuse `rgba(0,0,0,0.1) 0px 0px 20px`. Corners are conservative — a 4px radius dominates buttons, cards, and inputs — while small status pills go fully rounded (11px–27px) for a friendly, badge-like read. The overall atmosphere is clean, dense, and commerce-first: lots of real content per screen, a vivid green guiding every primary action, and just enough elevation to separate the gig cards from the white field they sit on.

**Key Characteristics:**
- Pretendard everywhere — the standard Korean web sans, weight 700 for headings, 400 for body
- Signature electric green `#92fa72` on the primary CTA with deeper `#5dd877` as the dominant brand fill
- Dark ink labels (`#212224`) ON the green button rather than white text — the green is bright enough to carry dark type
- Pure white (`#ffffff`) canvas with `#f2f3f7` hairlines for a clean, high-density commerce layout
- Conservative 4px radius on buttons/cards/inputs; fully-rounded pills (11px–27px) on status badges
- Soft single-layer shadows (`rgba(0,0,0,0.08) 0px 4px 12px`) — gentle elevation, never heavy
- Blue (`#116ad4` on `#ebf4ff`) for Biz/기업용 trust tags; red (`#ff402b`) for Best/ranking accents
- Bold, conversational Korean headlines at 40px/52px — direct and momentum-driven, not understated

## 2. Color Palette & Roles

### Primary
- **Kmong Green** (`#92fa72`): The primary CTA background ("크몽 시작하기"). A bright, energetic lime-green that anchors every primary action.
- **Brand Green Deep** (`#5dd877`): The dominant brand fill across cards, tags, and decorative accents — the most-used saturated color on the page.
- **Green Tint** (`#e1f5dc`): Soft pale-green surface for promo/new tags and tinted backgrounds.
- **Mint** (`#27e7b7`): Secondary teal-green accent for highlights and decorative gradients.

### Neutrals & Text
- **Heading Ink** (`#212224`): Primary heading and label color — a near-black with a hint of warmth. Also the label color on the green CTA.
- **Pure Ink** (`#000000`): Section headings and high-contrast body text.
- **Label Slate** (`#303441`): Secondary control text, muted labels on translucent surfaces.
- **Pure White** (`#ffffff`): Page background, card surfaces, header bar.

### Accents
- **Trust Blue** (`#4b94fa`): Informational accent, links, Biz-related highlights.
- **Blue Deep** (`#116ad4`): Biz/기업용 badge text color.
- **Blue Tint** (`#ebf4ff`): Tinted surface for blue Biz badges.
- **Alert Red** (`#ff402b`): Best/ranking badges, urgency and promotional accents.

### Surface & Borders
- **Hairline** (`#f2f3f7`): The standard light divider and input underline color.
- **Border** (`#c8cad2`): Outlined secondary button and control borders.
- **Card Border** (`#e4e5ed`): Subtle 1px border on gig/service cards.

## 3. Typography Rules

### Font Family
- **Primary**: `Pretendard`, with system sans fallback (`sans-serif`)
- Pretendard is the de-facto Korean web typeface, chosen for even Hangul/Latin rhythm and strong small-size legibility. No monospace face is used on the marketing surface.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Hero Display | Pretendard | 40px (2.50rem) | 700 | 52px (1.30) | normal | Main homepage headline |
| Section Heading | Pretendard | 28px (1.75rem) | 700 | 38px (1.36) | normal | Feature/section titles |
| Subheading | Pretendard | 20px (1.25rem) | 700 | 1.40 | normal | Card heads, search field text |
| Body | Pretendard | 16px (1.00rem) | 400 | 1.50 | normal | Standard text, nav, links |
| Button | Pretendard | 16px (1.00rem) | 500 | 1.00 | normal | Primary CTA label |
| Caption | Pretendard | 11px (0.69rem) | 700 | 1.40 | normal | Best/ranking badges |
| Micro | Pretendard | 10px (0.63rem) | 700 | 1.40 | normal | Pill tags (기업용), metadata |

### Principles
- **Bold-and-direct**: Headlines at weight 700 with tight leading (40px on 52px). Kmong communicates with confidence and clarity, not whisper-weight restraint.
- **One family, full range**: Pretendard handles everything from 40px hero to 10px micro-tags. Weight is the primary hierarchy lever — 700 for headings/badges, 500 for buttons, 400 for body.
- **No decorative tracking**: Letter-spacing stays at `normal` throughout. Pretendard's native metrics are tuned for Hangul and need no adjustment.
- **Korean-first sizing**: Body and labels are generously sized (16px base, 20px search input) for comfortable Hangul reading and dense commerce scanning.

## 4. Component Stylings

### Buttons

**Primary (Kmong Green)**
- Background: `#92fa72`
- Text: `#212224` (dark ink — not white)
- Padding: 0px 24px
- Radius: 4px
- Font: 16px Pretendard weight 500
- Use: Primary CTA — "크몽 시작하기", "의뢰하기"

**Secondary (Outlined)**
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #c8cad2`
- Padding: 0px 20px
- Radius: 4px
- Font: 16px Pretendard weight 400
- Use: Category chips, secondary actions

**Round Control Pill**
- Background: `#ffffff` (often translucent)
- Text: `#303441`
- Radius: 9999px (full)
- Font: 16px weight 400
- Use: Icon/carousel control buttons

### Cards & Containers
- Background: `#ffffff`
- Border: `1px solid #e4e5ed`
- Radius: 4px
- Shadow: `rgba(0,0,0,0.08) 0px 4px 12px 0px`
- Popover shadow: `rgba(0,0,0,0.1) 0px 0px 20px 0px`
- Use: Gig/service cards, expert profile cards

### Badges / Tags / Pills
**Biz / 기업용 Pill**
- Background: `#ebf4ff`
- Text: `#116ad4`
- Radius: 11px
- Font: 10px weight 700

**Best / Ranking Badge**
- Background: `#ffffff`
- Text: `#ff402b`
- Radius: 27px
- Font: 11px weight 700

**Green Promo Tag**
- Background: `#e1f5dc`
- Text: `#5dd877`
- Radius: 11px
- Font: 10px weight 700

### Inputs & Forms
- Hero search: white surface, 4px radius, 20px Pretendard text, placeholder "어떤 전문가가 필요하세요?"
- Underline/hairline border in `#f2f3f7`
- Text color: `#212224`
- Padding: 16px vertical

### Navigation
- White (`#ffffff`) sticky header, 76px tall
- Ink (`#212224`) link text, 16px Pretendard weight 400
- Category nav row below the brand logotype
- Active nav item: 2px bottom border in `#212224`
- Primary green CTA right-aligned

---

**Verified:** 2026-06-09 (live DOM inspect — homepage)
**Tier 1 sources:** https://kmong.com, https://kmong.com/atoz (Kmong A to Z brand guide / help center)

## 5. Layout Principles

### Spacing System
- Base unit: 4px, scaling 4 / 8 / 12 / 16 / 20 / 24 / 40 / 76px
- Section rhythm uses generous ~76px header-to-content gaps, while gig cards pack densely in grids
- Notable: dense at the small end (4–16px) for in-card spacing, generous at the section level

### Grid & Container
- Wide centered content area for category grids and gig-card carousels
- Hero: left-aligned bold headline + large search field as the primary entry point
- Feature sections: horizontally scrolling card carousels ("쇼핑몰 사장님이 많이 찾아요")
- High content density — many gig cards visible per screen, commerce-first

### Whitespace Philosophy
- **Commerce density**: Unlike minimalist marketing sites, Kmong fills the screen with real, scannable inventory. Whitespace separates sections, not individual cards.
- **Green as wayfinding**: The bright green CTA is the single most prominent element, pulling the eye to the next action on every section.
- **Card rhythm**: Uniform 4px-radius gig cards in repeating carousels create a predictable, catalog-like scanning rhythm.

### Border Radius Scale
- Standard (4px): Buttons, inputs, cards — the workhorse radius
- Pill small (11px): Biz/promo status tags
- Pill large (27px): Best/ranking badges
- Full (9999px): Round control buttons, avatars

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, hairline dividers |
| Card (Level 1) | `rgba(0,0,0,0.08) 0px 4px 12px 0px` | Gig cards, content panels |
| Popover (Level 2) | `rgba(0,0,0,0.1) 0px 0px 20px 0px` | Dropdowns, floating tooltips, hover cards |

**Shadow Philosophy**: Kmong's elevation is deliberately gentle. Shadows are neutral black at very low alpha (0.08–0.1), single-layer, with no colored tinting. The goal is to lift a gig card just enough off the white field to register as tappable, without introducing visual heaviness that would slow down catalog scanning. Elevation is functional separation, not decorative drama — appropriate for a high-volume marketplace where the content, not the chrome, is the star.

## 7. Do's and Don'ts

### Do
- Use the signature green `#92fa72` for the primary CTA, with dark ink (`#212224`) text on it
- Use `#5dd877` as the dominant brand fill for accents, tags, and decorative elements
- Set all type in Pretendard — 700 for headings/badges, 500 for buttons, 400 for body
- Keep button/card/input radius at 4px; reserve full-round pills for status badges only
- Use soft single-layer shadows (`rgba(0,0,0,0.08) 0px 4px 12px`) for card elevation
- Use blue (`#116ad4` on `#ebf4ff`) for Biz/기업용 trust tags and red (`#ff402b`) for Best/ranking
- Let content density carry the layout — many scannable gig cards per screen

### Don't
- Don't put white text on the green CTA — the green is bright; dark ink (`#212224`) is the brand choice
- Don't use heavy or colored shadows — elevation stays soft, neutral, and minimal
- Don't apply decorative letter-spacing — Pretendard runs at `normal` tracking
- Don't use large rounded corners (12px+) on cards or buttons — 4px is the standard
- Don't dilute the green with secondary brand colors — green is the single wayfinding accent
- Don't use thin/light heading weights — Kmong headlines are bold (700) and direct
- Don't sacrifice content density for whitespace — this is a marketplace, not a minimalist landing page

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single-column, full-width search, stacked card carousels |
| Tablet | 768–1024px | 2-column gig grids, condensed nav |
| Desktop | 1024–1440px | Full multi-column carousels, complete category nav |
| Large | >1440px | Centered content with side margins |

### Touch Targets
- Primary CTA and search field sized for comfortable mobile tapping
- Gig cards full-width tappable on mobile
- Category chips with adequate horizontal padding (0 20px)
- Round control pills sized as discrete tap targets

### Collapsing Strategy
- Hero: 40px headline compresses on mobile, weight 700 maintained
- Navigation: full category row collapses to hamburger + search on mobile
- Card carousels: horizontal scroll preserved across breakpoints
- Search field: remains the dominant above-the-fold element at all sizes

### Image Behavior
- Gig thumbnails maintain 4px radius at all sizes
- Expert avatars stay fully round (9999px)
- Card images fill card width, fixed aspect ratio for catalog uniformity

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Kmong Green (`#92fa72`) with dark ink (`#212224`) text
- Brand fill: Green Deep (`#5dd877`)
- Background: Pure White (`#ffffff`)
- Heading text: Ink (`#212224`)
- Body text: Ink (`#000000`)
- Hairline/divider: (`#f2f3f7`)
- Card border: (`#e4e5ed`)
- Biz tag: blue text (`#116ad4`) on tint (`#ebf4ff`)
- Best/ranking: Red (`#ff402b`)

### Example Component Prompts
- "Create a hero on white background. Headline at 40px Pretendard weight 700, line-height 52px, color #212224, no letter-spacing. Below it a search field (white, 4px radius, 20px text, placeholder '어떤 전문가가 필요하세요?'). Primary green CTA button (#92fa72 bg, #212224 dark text, 4px radius, 0 24px padding, 16px weight 500)."
- "Design a gig card: white background, 1px solid #e4e5ed border, 4px radius, shadow rgba(0,0,0,0.08) 0px 4px 12px. Title at 20px Pretendard weight 700, #212224. A Biz pill: #ebf4ff bg, #116ad4 text, 11px radius, 10px weight 700."
- "Build a Best badge: white background, #ff402b text, 27px radius, 11px Pretendard weight 700."
- "Create navigation: white sticky 76px header. Pretendard 16px weight 400 links in #212224, active item with 2px bottom border #212224. Green CTA '크몽 시작하기' right-aligned (#92fa72 bg, #212224 text, 4px radius)."

### Iteration Guide
1. The signature green `#92fa72` carries dark ink text (`#212224`), not white — this is the defining brand quirk
2. Pretendard is the only family; lean on weight (700/500/400) for hierarchy
3. Radius stays at 4px for buttons/cards/inputs; full-round only for badges and avatars
4. Shadows are soft, neutral, single-layer — `rgba(0,0,0,0.08) 0px 4px 12px`
5. Blue (`#116ad4`/`#ebf4ff`) is reserved for Biz/trust; red (`#ff402b`) for ranking/urgency
6. Content density over whitespace — this is a marketplace catalog

---

## 10. Voice & Tone

Kmong's voice is warm, encouraging, and outcome-focused — it speaks to small-business owners, founders, and solo creators who need expert help and frames the platform as the bridge to their goal. The hero line "성공이 필요한 순간, 딱 맞는 전문가를 찾아보세요" (When you need success, find exactly the right expert) is characteristic: it leads with the user's aspiration, then offers a concrete path. Copy is conversational and second-person, never bureaucratic. Section headers like "쇼핑몰 사장님이 많이 찾아요" (Shopping-mall owners search for this a lot) use social proof and relatable personas rather than abstract feature claims.

| Context | Tone |
|---|---|
| Hero headlines | Aspirational + concrete. Names the goal ("성공"), then the action ("전문가를 찾아보세요"). |
| Category labels | Plain, scannable Korean nouns. "디자인", "마케팅", "IT·프로그래밍". |
| Social-proof sections | Relatable persona framing. "쇼핑몰 사장님이 많이 찾아요". |
| CTAs | Direct, momentum verbs. "크몽 시작하기", "의뢰하기", "전문가 찾기". |
| Trust signals | Specific and reassuring — ratings, review counts, 안전결제 (safe payment), Biz guarantees. |
| Help / A to Z | Friendly, step-by-step, beginner-aware. Assumes the user is new to outsourcing. |

**Forbidden register.** Cold corporate jargon, English-heavy buzzwords where plain Korean works, fear-based urgency, or anything that makes a first-time outsourcer feel they don't belong. Kmong's voice lowers the barrier to hiring an expert.

## 11. Brand Narrative

Kmong (크몽) launched in **2012** and grew into **Korea's largest freelance and skill marketplace**, operated by **Kmong Inc.** The platform connects clients with freelancers and agencies across categories such as design, IT/programming, marketing, video/photography, translation, documents, and business consulting. The model is a service-listing ("gig") marketplace: experts publish productized services with fixed scopes and prices, and buyers browse, compare ratings and reviews, and commission work through Kmong's escrow-style safe-payment (안전결제) system.

The name "크몽" is the brand's own coinage, and the bright lime-green identity has become a recognizable mark in the Korean startup and SMB ecosystem. Over time Kmong expanded beyond individual gigs into **Kmong Enterprise / Biz** offerings (the 기업용 / 엔터프라이즈 tags visible in the nav) — bringing vetted experts, quality guarantees, and managed sourcing to companies, not just individuals. The platform positions itself as the default first stop for any Korean small business or founder who needs specialized work done without the overhead of hiring full-time.

What Kmong embraces: lowering the barrier to outsourcing, trust infrastructure (reviews, safe payment, dispute handling), and a friendly, high-energy visual brand that makes commissioning expert work feel approachable rather than intimidating.

## 12. Principles

1. **Lower the barrier to expertise.** The entire experience is engineered so a first-time buyer can go from problem to hired expert quickly. Design should reduce friction, never add ceremony.
2. **Trust is the product.** Reviews, ratings, safe payment, and Biz guarantees are not features bolted on — they are the reason the marketplace works. Surface trust signals prominently.
3. **Green means go.** The signature `#92fa72` is reserved for the next action. One unmistakable wayfinding color keeps the path to purchase obvious.
4. **Density serves discovery.** A marketplace lives or dies by inventory visibility. Show many scannable gig cards; let content, not chrome, fill the screen.
5. **Approachable, not corporate.** Bold conversational Korean, warm persona framing, and an energetic palette make hiring an expert feel friendly — appropriate for SMB and solo founders.
6. **Conservative chrome, vivid accent.** 4px radii and soft neutral shadows keep the frame quiet so the green CTA and the gig content stand out.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Kmong user segments (small-business owners, solo founders, freelancers, marketers), not individual people.*

**Jisoo Han, 34, Seoul.** Runs a small online clothing shop. Needs a detail page (상세페이지) designed and product photos shot but has no in-house designer. Searches Kmong by category, compares portfolios and review counts, and commissions a freelancer through safe payment. Trusts the green "크몽 시작하기" path because it always tells her clearly what happens next.

**Minjun Park, 29, Busan.** Solo SaaS founder who needs a landing page built and a logo designed on a startup budget. Lives in the IT·프로그래밍 and 디자인 categories. Values the review system and fixed-price gigs because they make scope predictable. Would be put off by a marketplace that hid prices behind "문의하기" gates.

**Soyeon Lee, 41, Daejeon.** Marketing lead at a mid-size company evaluating Kmong Biz / Enterprise for ongoing outsourced work. Notices the 기업용 blue tags and quality-guarantee messaging. Cares that the platform can provide vetted experts and managed sourcing, not just one-off gigs.

**Daniel Kim, 26, freelance designer, Seoul.** Sells productized design gigs on Kmong as a seller. Optimizes his card thumbnails, ratings, and Best-badge ranking. Experiences the same green-accented, Pretendard-set system from the supply side and relies on the trust infrastructure to get paid reliably.

## 14. States

| State | Treatment |
|---|---|
| **Empty (search, no results)** | White canvas, ink (`#212224`) single line: "검색 결과가 없어요." A green CTA suggests browsing categories instead. No heavy illustration. |
| **Loading (card grid)** | Skeleton cards at final dimensions in hairline (`#f2f3f7`), 4px radius. Soft shimmer. Card-shaped placeholders preserve the catalog grid. |
| **Error (action failed)** | Inline message below the action in ink. Red (`#ff402b`) accent for the error marker. Plain-Korean explanation plus a retry affordance. |
| **Error (form validation)** | Field-level. Red (`#ff402b`) marker + short Korean message describing what to fix. |
| **Success (order placed / safe payment)** | Confirmation with the green brand fill (`#5dd877`/`#e1f5dc` tint). Clear next-step link to the order. Reassuring, momentum-preserving. |
| **Disabled** | Reduced opacity on surface and text together. Green actions fade rather than switch to gray, preserving brand read. |
| **Loading (button press)** | Inline spinner on the green CTA; label stays, button stays green. No layout shift. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, focus, button press feedback |
| `motion-standard` | 200ms | Dropdowns, card hover lift, carousel steps |
| `motion-slow` | 320ms | Section reveals, modal open |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Default two-way transitions |
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Dropdowns, hover cards arriving |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |

**Signature motions.**

1. **Card hover lift.** Gig cards raise gently on hover using `motion-standard / ease-standard`, the soft shadow (`rgba(0,0,0,0.08) 0px 4px 12px`) deepening slightly. The motion signals tappability without distracting from scanning.
2. **Carousel step.** Horizontal card carousels ("쇼핑몰 사장님이 많이 찾아요") slide one column at a time with `motion-standard`, keeping the catalog's left-to-right reading order intact.
3. **CTA press.** The green primary button gives immediate `motion-fast` press feedback — a brief scale/opacity dip — confirming the action without delay.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, hover lifts and carousel slides become instantaneous; the marketplace stays fully functional with no decorative motion.

<!--
OmD v0.1 Sources — Kmong

Token-level claims (sections 1–9) are sourced from a live DOM inspection of
https://kmong.com on 2026-06-09 via Playwright getComputedStyle:
- Primary CTA "크몽 시작하기": background #92fa72, color #212224, radius 4px,
  padding 0 24px, 16px / weight 500 (BUTTON).
- Dominant brand fill #5dd877 (152 occurrences), tint #e1f5dc, mint #27e7b7.
- H1 hero 40px / weight 700 / line-height 52px / color rgb(33,34,36)=#212224,
  font-family Pretendard.
- H2 28px / weight 700 / line-height 38px.
- Header (nav) white #ffffff, height 76px, ink #212224 links.
- Biz pill 기업용: bg #ebf4ff, fg #116ad4, radius 11px, 10px / 700.
- Best badge: fg #ff402b, radius 27px, 11px / 700.
- Secondary button: border #c8cad2, radius 4px, fg #000000, 16px / 400.
- Card: white, radius 4px, border #e4e5ed, shadow rgba(0,0,0,0.08) 0px 4px 12px;
  popover shadow rgba(0,0,0,0.1) 0px 0px 20px.
- Search input placeholder "어떤 전문가가 필요하세요?", 20px text, #f2f3f7 hairline.

Brand-narrative claims (sections 10–13): Kmong (크몽) is Korea's largest
freelance/skill marketplace operated by Kmong Inc., launched 2012, productized
gig model with safe-payment (안전결제) escrow and a Biz/Enterprise tier
(기업용 / 엔터프라이즈 tags observed in nav). These are widely documented public
facts about the company plus on-page observed labels.

Personas (§13) are fictional archetypes informed by publicly observable Kmong
user segments (SMB owners, solo founders, freelancers, marketers). Names are
illustrative; they do not refer to real people.

Interpretive claims (e.g., "green means go", "dark ink on bright green is the
defining brand quirk") are editorial readings connecting Kmong's observed design
choices to its marketplace strategy, not directly sourced Kmong statements.
-->
