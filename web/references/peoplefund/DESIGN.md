---
id: peoplefund
name: PeopleFund
display_name_kr: 피플펀드
country: KR
category: fintech
homepage: "https://peoplefund.co.kr/"
primary_color: "#ffc32d"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=peoplefund.co.kr&sz=128"
verified: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = live brand amber (#ffc32d) on status badges (NOTICE/HOT/NEW/마감임박); confirmed via Tailwind class bg-[#FFC32D] and bgFreq ×13. Canvas white (#ffffff). Body bg soft grey (#f6f6f6). Secondary charcoal (#2e303b) for nav/UI text. Footer dark blue-grey (#263238). Site has rebranded from PeopleFund to 크플 (Cple) at cple.co.kr; peoplefund.co.kr redirects there."
  colors:
    primary: "#ffc32d"
    canvas: "#ffffff"
    surface: "#f6f6f6"
    surface-alt: "#f5f5f5"
    ink: "#000000"
    ink-secondary: "#2e2e2e"
    charcoal: "#2e303b"
    muted: "#6a6a6a"
    muted-light: "#90a4af"
    hairline: "#d0d8dc"
    on-primary: "#000000"
    footer-bg: "#263238"
    error: "#ff4d4f"
    success: "#37c94d"
    accent-blue: "#2054ae"
  typography:
    family: { sans: "Pretendard", fallback: "Lato, \"Noto Sans KR\", sans-serif" }
    section:    { size: 29, weight: 600, lineHeight: 1.31, tracking: -0.4, use: "Section headings H2, Pretendard SemiBold" }
    subsection: { size: 23, weight: 600, lineHeight: 1.39, tracking: -0.3, use: "Sub-section headings H3" }
    card-head:  { size: 19, weight: 600, lineHeight: 1.37, tracking: -0.3, use: "Card headings H4" }
    body:       { size: 16, weight: 400, lineHeight: 1.50, use: "Standard body copy" }
    nav:        { size: 16, weight: 500, lineHeight: 1.00, use: "Nav link labels" }
    button:     { size: 15, weight: 600, lineHeight: 1.00, use: "Primary CTA button label" }
    button-nav: { size: 16, weight: 400, lineHeight: 1.00, use: "Nav action buttons (signup/login)" }
  spacing: { xs: 3, sm: 6, md: 12, base: 20, lg: 32, xl: 48, section: 64 }
  rounded: { none: 0, sm: 10, md: 16, pill: 30, full: 9999 }
  shadow:
    none: "none"
  components:
    button-cta: { type: button, bg: "#ffffff", fg: "#000000", radius: "0px", height: "46px", padding: "0px", font: "15px / 600 Pretendard", use: "Primary 'View Products' CTA on hero sections" }
    button-nav-outline: { type: button, bg: "#ffffff", fg: "#2e303b", border: "1px solid #d0d8dc", radius: "10px", height: "50px", padding: "0px 20px", font: "16px / 400 Pretendard", use: "Nav action buttons — 투자회원가입, 로그인" }
    button-dark-pill: { type: button, bg: "rgba(0,0,0,0.2)", fg: "#000000", border: "1px solid rgba(255,255,255,0.2)", radius: "30px", height: "58px", padding: "17px 32px", font: "16px / 400 Pretendard", use: "Phone/FAQ contact pill buttons on dark hero section" }
    badge-status: { type: badge, bg: "#ffc32d", fg: "#000000", radius: "0px", padding: "3px 6px", font: "12px / 600 Pretendard", use: "Investment status labels — NOTICE, HOT, NEW, 마감임박" }
    badge-progress: { type: badge, bg: "#2054ae", fg: "#ffffff", radius: "4px", font: "12px / 400 Pretendard", use: "Progress / percent-funded status on invest cards" }
    card-product: { type: card, bg: "#ffffff", fg: "#000000", radius: "8px", use: "Investment product cards on product listing page" }
    card-feature: { type: card, bg: "#f6f6f6", fg: "#000000", radius: "8px", use: "Feature highlight cards on homepage sections" }
    nav-link: { type: tab, fg: "#2e303b", font: "16px / 500 Pretendard", use: "Top nav items — 투자, 대출, 이용안내", active: "text #000000 bold on active" }
    input-default: { type: input, bg: "#ffffff", fg: "#000000", border: "1px solid #d0d8dc", radius: "10px", font: "16px / 400 Pretendard", use: "Standard form input fields" }
  components_harvested: true
---

# Design System Inspiration of PeopleFund

## 1. Visual Theme & Atmosphere

PeopleFund (피플펀드), now rebranded as 크플 (Cple), is Korea's online P2P real-estate lending and investment platform, and its design system reads as a confident, minimal financial product with a single bold accent: the brand amber `#ffc32d`. The canvas is pure white (`#ffffff`) with a soft cool-grey body background (`#f6f6f6`) segmenting content into breathable zones. Text is set in near-pure black (`#000000`) — not a warmed navy or charcoal — projecting directness and legibility over refinement. The amber appears almost exclusively on status badges (NOTICE, HOT, NEW, 마감임박) where it punches through the monochromatic field to signal urgency and brand identity simultaneously.

The typographic personality is anchored entirely in Pretendard — Korea's de facto product font — at a consistent SemiBold (weight 600) for all headings and quieter weight 400-600 for body and UI. Headings compress tightly: H2 at 29px with -0.4px letter-spacing, H3 at 23px with -0.3px — a controlled but not extreme scale. The system avoids hero-sized display type; the largest visible heading in the live homepage is 29px, giving the product an information-dense, data-board feel appropriate for a P2P investment platform rather than a mass-market consumer app.

What defines PeopleFund's visual character is its flatness and restraint. There are essentially no drop shadows; the invest-page background (`#f5f5f5`) and the homepage grey (`#f6f6f6`) do separation work by tint alone. The product cards are white on grey — clean and scannable. The dark footer (`#263238`) grounds the page. The amber status label is a surgical accent: one color, maximum signal, deployed only where real urgency exists (a product 95% funded, a NOTICE, a HOT ranking). This is a fintech brand that trusts data density over decoration.

**Key Characteristics:**
- Pretendard SemiBold (weight 600) for all headings — consistent, legible, Korean-optimized
- Pure black (`#000000`) body text — no warm navy or grey subtlety; directness is the value
- Single brand amber (`#ffc32d`) reserved for status and urgency signals
- Flat depth: no shadows; separation via `#f6f6f6` surface tint
- White cards on grey body — data-board aesthetic for an investment platform
- Tight negative tracking on headings (-0.4px at 29px, -0.3px at 23px and 19px)
- Dark charcoal (`#2e303b`) for secondary UI text (nav links, action buttons)
- Dark blue-grey footer (`#263238`) — grounding anchor
- Primary CTA "상품 보러가기": white button, black text, zero radius — deliberately un-styled

## 2. Color Palette & Roles

### Primary
- **Brand Amber** (`#ffc32d`): The single saturated brand accent. Deployed exclusively on status badges (NOTICE, HOT, NEW, 마감임박) to signal urgency on investment listings. Confirmed in Tailwind source class `bg-[#FFC32D]`.
- **Pure Black** (`#000000`): Primary body text, heading text, and text on the amber badge. Chosen for maximum legibility contrast with white and grey surfaces.
- **Pure White** (`#ffffff`): Canvas, card surfaces, nav background, and button backgrounds.

### Neutral & Surface
- **Surface Grey** (`#f6f6f6`): Body background on the new homepage. Provides gentle section separation without harsh borders.
- **Surface Alt** (`#f5f5f5`): Body background on the invest product listing page — a nearly identical grey variant.
- **Hairline** (`#d0d8dc`): Border color on outline buttons (signup/login) and form inputs. The primary separation device in UI chrome.
- **Charcoal** (`#2e303b`): Secondary UI text — used for nav link labels and action button text where pure black would be too stark against the white button background.

### Text Hierarchy
- **Pure Black** (`#000000`): Primary headings and body text throughout the new homepage.
- **Ink Secondary** (`#2e2e2e`): Slightly softened dark for body text in legacy areas.
- **Muted Grey** (`#6a6a6a`): Secondary body text on the invest listing page — the workhorse muted color for descriptions, metadata, footer text.
- **Muted Light** (`#90a4af`): Light muted for lowest-emphasis elements, placeholders.

### Semantic & Dark
- **Footer Dark** (`#263238`): Dark blue-grey footer background. Professional, grounding, financial-grade.
- **Error Red** (`#ff4d4f`): Error and warning states. Measured intensity — not alarming but clearly negative.
- **Success Green** (`#37c94d`): Success / completion states on transaction-level feedback.
- **Progress Blue** (`#2054ae`): Accent for funded-percentage progress bars on investment cards. A secondary accent outside the amber primary.

## 3. Typography Rules

### Font Family
- **Primary**: `Pretendard`, with fallback `Lato, "Noto Sans KR", sans-serif`
- Pretendard is used for every text level — headings, body, nav, buttons. No secondary display font.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Section Heading (H2) | Pretendard | 29px (1.81rem) | 600 | 1.31 (38px) | -0.4px | Homepage section titles |
| Sub-section (H3) | Pretendard | 23px (1.44rem) | 600 | 1.39 (32px) | -0.3px | Feature sub-heads, dark section callouts |
| Card Heading (H4) | Pretendard | 19px (1.19rem) | 600 | 1.37 (26px) | -0.3px | Investment card titles, feature bullets |
| Body | Pretendard | 16px (1.00rem) | 400 | 1.50 (24px) | normal | Standard reading text |
| Nav Link | Pretendard | 16px (1.00rem) | 500 | 1.00 | normal | Top navigation labels |
| Button (CTA) | Pretendard | 15px (0.94rem) | 600 | 1.00 | normal | "상품 보러가기" CTA label |
| Button (Nav action) | Pretendard | 16px (1.00rem) | 400 | 1.00 | normal | Signup/login outline buttons |

### Principles
- **Single font system**: Pretendard does everything. No separate display or monospace font is visible on the main product surfaces.
- **Weight 600 as the heading anchor**: All headings use SemiBold. There is no ExtraBold (800) headline, unlike more expressive KR fintechs like Finda or Toss.
- **Tight tracking at display sizes**: -0.4px at 29px, -0.3px at 23px and 19px. Headlines compress but not dramatically — a measured, professional cadence.
- **400 for body and nav action buttons**: The split between 600 (heading/CTA) and 400 (body/nav-action) is the system's primary hierarchy signal.

## 4. Component Stylings

### Buttons

**Primary CTA (View Products)**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 0px
- Height: 46px
- Font: 15px Pretendard weight 600
- Use: "상품 보러가기" (View Products) CTA on each investment card in the hero carousel

**Nav Action Outline**
- Background: `#ffffff`
- Text: `#2e303b`
- Border: 1px solid `#d0d8dc`
- Radius: 10px
- Padding: 0px 20px
- Height: 50px
- Font: 16px Pretendard weight 400
- Use: Header signup (투자회원가입) and login (로그인) actions

**Dark Pill (Contact)**
- Background: `rgba(0, 0, 0, 0.2)`
- Text: `#000000`
- Border: 1px solid `rgba(255, 255, 255, 0.2)`
- Radius: 30px
- Padding: 17px 32px
- Height: 58px
- Font: 16px Pretendard weight 400
- Use: Phone number (1600-9613) and FAQ pill buttons on the dark hero section

### Inputs

**Default**
- Background: `#ffffff`
- Border: 1px solid `#d0d8dc`
- Radius: 10px
- Font: 16px Pretendard weight 400
- Use: Standard form inputs for signup, login, and investment flow

### Cards & Containers

**Product Card**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 8px
- Use: Investment listing cards on the product board — white on `#f6f6f6` grey background, no shadow

**Feature Card**
- Background: `#f6f6f6`
- Text: `#000000`
- Radius: 8px
- Use: Homepage feature highlight sections (three attraction points)

### Badges & Tags

**Status Badge (Amber)**
- Background: `#ffc32d`
- Text: `#000000`
- Radius: 0px
- Padding: 3px 6px
- Font: 12px Pretendard weight 600
- Use: Investment product status labels — NOTICE, HOT, NEW, 마감임박 (Near-close)

**Progress Badge (Blue)**
- Background: `#2054ae`
- Text: `#ffffff`
- Radius: 4px
- Font: 12px Pretendard weight 400
- Use: Funded-percentage status on investment card listings

### Navigation

- Background: `#ffffff`
- Height: 80px header
- Text: `#2e303b`, 16px Pretendard weight 500
- Active: text `#000000` bold on active nav item
- Right actions: outline signup and login buttons
- Use: Top horizontal sticky nav

---

**Verified:** 2026-07-02
**Tier 1 sources:** https://peoplefund.co.kr/ (redirects to https://www.cple.co.kr/ — homepage live computed style), https://tech.peoplefund.co.kr/ (PeopleFund engineering tech blog)
**Tier 2 sources:** getdesign.md/peoplefund — not found; styles.refero.design/?q=peoplefund — not found (KR brand, typical Tier-2 gap)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px
- Scale: 3px, 6px, 12px, 20px, 32px, 48px, 64px
- Notable: Card horizontal padding 20px; section vertical gap 48–64px; tight body padding reflecting dense investment-data presentation

### Grid & Container
- Centered single-column hero with investment product carousel as the anchor
- Product listing section: horizontal scrolling card row (visible on homepage)
- Feature sections: 3-up grid (three attraction points)
- Full-width dark sections (`#000000` bg) for "Contact us" callouts with white text H3 headings
- White sections alternate with `#f6f6f6` tinted sections for separation

### Whitespace Philosophy
- **Data density over breathing room**: the product serves investors who want to scan multiple investment options; the layout is relatively dense with information
- **Flat separation**: `#f6f6f6` vs `#ffffff` bands do all separation work, no shadow elevation
- **Single accent per screen**: the amber `#ffc32d` on status badges is the only saturated color; everything else is white, grey, black, and charcoal — so the amber always reads immediately

### Border Radius Scale
- Zero (0px): Primary CTA buttons — deliberately raw and un-styled
- Small (10px): Nav outline action buttons, form inputs
- Medium (8px): Cards and containers — the workhorse
- Pill (30px): Contact/phone/FAQ pill buttons in the dark hero section

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, no border | Most surfaces — pure flat system |
| Tint (Level 1) | `#f6f6f6` background shift | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #d0d8dc` border | Outline buttons, form inputs, white card edges on grey background |

**Shadow Philosophy**: PeopleFund is a flat, near-shadowless system. Live DOM inspection found `box-shadow: none` across all visible elements. Depth and grouping come from tinted background bands (`#f6f6f6`) and thin `#d0d8dc` hairline borders. This is a deliberate choice for a P2P investment platform: flat UIs load faster on mobile and avoid the "bank software" heaviness that can reduce trust perception in the crowdfunding-adjacent segment. The amber badge does the hierarchy work that shadows would otherwise do.

## 7. Do's and Don'ts

### Do
- Use Pretendard SemiBold (weight 600) for all headings — it is the single heading anchor
- Reserve amber (`#ffc32d`) for urgency and status signals — NOTICE, HOT, NEW, 마감임박
- Separate sections with flat tinted surfaces (`#f6f6f6`) and `#d0d8dc` hairlines, not shadows
- Use pure black (`#000000`) for primary text — directness is the brand value
- Use charcoal (`#2e303b`) for secondary UI chrome (nav text, button text) to soften pure black in interactive contexts
- Apply tight negative letter-spacing to headings (-0.4px at 29px, -0.3px at 23px)
- Use 0px radius on the primary product CTA button — its un-styled nature signals content confidence

### Don't
- Spread amber across decorative elements — dilutes the urgency signal
- Use drop shadows for elevation — PeopleFund is a flat system
- Use a second accent color outside `#ffc32d` and `#2054ae` — palette discipline is the system's restraint
- Apply large pill radius to product cards or standard buttons — only contact/phone pill buttons use 30px
- Use display-size type (48px+) — the system's max heading is 29px; density over drama
- Use light font weights (300 or below) for headings — SemiBold (600) is the minimum heading weight
- Use warm-tinted greys for text — `#000000` and `#2e303b` are the text colors; keep them cool and direct

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, product carousel becomes single-item; reduced section padding |
| Tablet | 768-1024px | 2-up investment card rows; moderate padding |
| Desktop | 1024px+ | Full layout; horizontal product carousel; 3-up feature grid |

### Touch Targets
- Product "상품 보러가기" buttons: 46px height — comfortable for tap
- Nav action buttons: 50px height with 20px horizontal padding — generously tappable
- Contact pill buttons: 58px height — large hit area for phone number tap

### Collapsing Strategy
- Hero investment carousel: multi-card horizontal scroll → single centered card on mobile
- H2 headings maintain 29px on mobile (size scale is conservative enough to not compress further)
- Feature 3-up grid → stacked single column on mobile
- Footer: multi-column links collapse to stacked single column

### Image Behavior
- Investment product images carry no shadow at any size — consistent with flat system
- Cards maintain 8px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand accent / status: PeopleFund Amber (`#ffc32d`)
- Background: Pure White (`#ffffff`)
- Tinted surface: Surface Grey (`#f6f6f6`)
- Primary text: Pure Black (`#000000`)
- Secondary UI text: Charcoal (`#2e303b`)
- Muted text: Muted Grey (`#6a6a6a`)
- Hairline: `#d0d8dc`
- Footer: Dark Blue-Grey (`#263238`)
- Error: `#ff4d4f`
- Success: `#37c94d`
- Progress/accent: Blue (`#2054ae`)

### Example Component Prompts
- "Create a hero section on white background. Section heading 29px Pretendard SemiBold (600), letter-spacing -0.4px, color #000000. Below it, a product card row: white #ffffff cards on #f6f6f6 surface, 8px radius. Amber status badge #ffc32d, black text, 0px radius, 3px 6px padding, 12px 600. CTA button: white bg, black text, 0px radius, 15px 600, 46px height — 'View Products'."
- "Design a product card: white #ffffff background, 8px radius, no shadow. Title 19px Pretendard weight 600 -0.3px tracking, black. Metadata 16px weight 400 #6a6a6a. Amber badge top-left #ffc32d for status. Progress indicator in blue #2054ae."
- "Build top nav: white 80px header. Pretendard 16px weight 500 links, #2e303b text. Two outline action buttons: white bg, #2e303b text, 10px radius, 50px height, 1px solid #d0d8dc border, 16px weight 400 — 투자회원가입, 로그인."
- "Create a dark hero callout section: #000000 background, white text. H3 heading 23px Pretendard 600 -0.3px, white. Two pill contact buttons: rgba(0,0,0,0.2) bg, black text, 1px solid rgba(255,255,255,0.2) border, 30px radius, 58px height, 16px weight 400."

### Iteration Guide
1. Pretendard SemiBold (600) for every heading; Pretendard 400 for body and nav actions
2. Amber (`#ffc32d`) is for urgency signals only — NOTICE, HOT, NEW, 마감임박
3. No shadows — separate with `#f6f6f6` tint and `#d0d8dc` hairlines
4. CTA button is 0px radius — un-styled white on dark bg sections
5. Charcoal `#2e303b` for secondary UI text, not pure black
6. Negative tracking on headings: -0.4px at 29px, -0.3px at 23px and 19px
7. Footer always `#263238` dark blue-grey

---

## 10. Voice & Tone

PeopleFund's voice is **direct, data-forward, and quietly ambitious** — a platform that speaks to investors as rational adults who want yields and returns, not lifestyle aspirations. The homepage title "크플 - 대한민국 최상위 온투금융(투자, 대출)" (크플 - Korea's Top Online Investment Finance) sets the register: declarative, superlative in claim but specific in domain. The section headline "폭풍성장 크플" ("Storm-growth Cple") reads as bold shorthand for performance, not hype. Copy is dense and numeric — funding percentages (95.1%), product codes (21548호), annualized return rates — because the user is here to decide whether to commit capital.

| Context | Tone |
|---|---|
| Hero / section headings | Bold and declarative. "폭풍성장", "세 가지 매력 포인트." Confident without adjective-stacking. |
| Investment product labels | Data-first: percentage funded, product ID, status (마감임박 / 모집중). |
| Status badges | Single-word urgency. NOTICE · HOT · NEW · 마감임박. Amber background does the emphasis work. |
| CTAs | Plain imperatives. "상품 보러가기" (View Products). No exclamation marks. |
| Feature descriptions | Benefit-summarized: "손쉬운 투자", "높은 수익률", "다채로운 상품" — three-word benefit anchors. |
| Contact / support | Direct. "고민하지 말고 물어보세요" (Don't hesitate, just ask) — approachable but not casual. |

**Voice samples (verbatim from live homepage):**
- "크플 - 대한민국 최상위 온투금융(투자, 대출)" — page title (domain authority claim). *(verified live 2026-07-02)*
- "폭풍성장 크플" — section heading (performance claim, colloquial strength). *(verified live 2026-07-02)*
- "세 가지 매력 포인트" — feature section heading (structured promise). *(verified live 2026-07-02)*

**Forbidden register**: vague lifestyle marketing ("unlock your financial future"), undifferentiated safety claims without numbers, exclamation-mark-driven urgency, cute mascot language. The amber badge handles urgency — copy stays numeric and factual.

## 11. Brand Narrative

PeopleFund (피플펀드) was founded in **2015** by **김대윤 (Kim Dae-yoon, CEO)** as a marketplace lending platform connecting individual investors with property-secured borrowers — a model Korea permitted under its P2P lending regulatory framework. The founding thesis addressed a Korean market inefficiency: retail investors had almost no access to mid-yield instruments between bank deposits (1-2%) and equity risk, while qualified borrowers were underserved by banks with rigid scoring. PeopleFund proposed a middle path: real-estate-collateralized loans, transparently listed, directly matchable online.

The company rebranded to **크플 (Cple)** — 크라우드펀딩 플랫폼 (Crowdfunding Platform) — reflecting its ambition to be the defining Korean online investment finance brand, claiming the position of "대한민국 최상위 온투금융" (Korea's Top Online Finance). This rebrand surfaced in 2024-2025 with the new `cple.co.kr` domain, though `peoplefund.co.kr` continues to redirect there. The brand's parent company is **PFCT (피에프씨테크놀로지스 / PFC Technologies)**.

PeopleFund has received recognition including a **2019 국무총리 표창** (Prime Minister's Commendation), coverage from **Bloomberg** and **CNBC**, awards at the **IFLR APAC Awards**, and investment from international firms including **CLSA Capital Partners**. This institutional recognition is surfaced prominently on the homepage as social proof — appropriate for a platform asking retail investors to commit capital to property loans.

What PeopleFund refuses, visible in its design: the glossy over-promise of neo-bank apps, the lifestyle marketing of mainstream consumer fintech, and the heavy regulatory-compliance aesthetic of old banking. What it embraces: a data-dense, scannable product board, a single amber urgency signal, and the confidence to let the numbers speak.

## 12. Principles

1. **Returns over rhetoric.** The product listings lead with funded percentages and product codes, not marketing copy. *UI implication:* investment card layout prioritizes data fields — funding %, status badge, product ID — before descriptive text.
2. **Single accent, maximum signal.** Amber `#ffc32d` appears only on status labels. *UI implication:* do not add a second accent color; the amber's power comes from its singularity. Every new use dilutes the urgency signal.
3. **Flat and fast.** No shadows, no depth tricks. *UI implication:* separate content zones with tint (`#f6f6f6`) and hairlines (`#d0d8dc`); avoid elevation layers that add visual noise without adding meaning.
4. **Pretendard all the way.** A single font across all levels signals system coherence. *UI implication:* do not introduce a second typeface; vary weight (400 body, 600 heading/CTA) to create hierarchy.
5. **Credibility through specificity.** Awards, partner logos, return rates, and product percentages anchor trust. *UI implication:* always prefer a specific number ("95.1% 마감임박") over a generic quality claim.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable PeopleFund user segments (Korean retail investors, property-secured borrowers), not individual people.*

**박준혁, 38, 서울 강남.** A salaried professional with 2,000만원 in savings looking for yield beyond 2% bank deposits. Compares PeopleFund listings by annual return rate and collateral-to-loan ratio before committing. The amber "마감임박" badge triggers action — he doesn't want to miss a 10%+ product. Trusts the platform because of the Prime Minister's Commendation badge on the homepage; distrusts anything that looks too slick.

**이민정, 44, 인천.** A small business owner who borrowed through PeopleFund for short-term bridge financing on a commercial property. Values the faster approval relative to banks and appreciates seeing her own product listed transparently on the platform — she knows exactly who is funding her loan.

**최동현, 29, 부산.** A first-time P2P investor who downloaded the app after seeing the Bloomberg mention. Starts with 100만원 on a 6-month product. The clean, data-board UI made him trust the platform more than a more "designed" competitor that felt more like a lifestyle brand. He wants a spreadsheet, not a mood board.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no invest products matching filter)** | White canvas. Charcoal (`#2e303b`) single line at body size explaining no matching products. No illustration. One plain CTA to reset filter. |
| **Empty (portfolio, no investments yet)** | Muted grey (`#6a6a6a`) text: first-investment prompt with link to product list. Direct, no celebratory onboarding art. |
| **Loading (product list fetch)** | Skeleton white cards on `#f6f6f6` background at product card dimensions, 8px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (portfolio calculation)** | Inline data refreshes with previous values staying visible; spinner next to the yield figure. |
| **Error (investment failed)** | Inline error message with Error Red (`#ff4d4f`) accent. Plain Korean: states what failed and what to do next. No generic "오류가 발생했습니다" alone. |
| **Error (form validation)** | Field-level message below the input. Describes the specific violation and the valid format. |
| **Error (product sold out / 모집완료)** | Status badge changes to "모집완료" (closed). Product card dims. No amber badge — the urgency color retires when the window closes. |
| **Success (investment placed)** | Brief inline confirmation in calm tone. Success Green (`#37c94d`) accent. Next step (view portfolio) linked immediately below. No celebratory animation. |
| **Skeleton** | `#f6f6f6` blocks at final card dimensions, 8px radius, flat pulse consistent with shadowless system. |
| **Disabled** | Muted grey (`#6a6a6a`) text and reduced-opacity surface; amber status signals disappear on disabled products. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 100ms | Hover, button press |
| `motion-standard` | 200ms | Card reveal, dropdown, tooltip |
| `motion-slow` | 300ms | Page-level section transition |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, dropdowns, panels |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and minimal — appropriate for a P2P investment platform where the user is making financial decisions, not consuming entertainment. Product cards fade into view at `motion-standard / ease-enter` as the list loads. The amber status badge does not animate — static signals are trusted signals; a pulsing badge would feel like manipulation on a financial platform. No spring or bounce anywhere. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the platform remains fully usable and data-accessible.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on https://peoplefund.co.kr/ → https://www.cple.co.kr/ and https://www.cple.co.kr/product/invest:
- Homepage title: "크플 - 대한민국 최상위 온투금융(투자, 대출)"
- Section headings: "폭풍성장 크플", "세 가지 매력 포인트", "대한민국을 대표하는 크플", "크플과 함께하는"
- Status badges (Tailwind class bg-[#FFC32D]): NOTICE, 마감임박, HOT, NEW
- Products listed: "서울시 양천구 21548호" 94.7% 마감임박, "평택시 독곡동 21577호" 95.1% 마감임박
- H2 29px/600/-0.4px, H3 23px/600/-0.3px, H4 19px/600/-0.3px: all confirmed live
- footer: "회사소개", "뉴스룸", "투자사 소개" nav links
- Recognition on homepage: "2019 국무총리 표창", "CLSA Capital Partners", "블룸버그", "CNBC", "IFLR APAC AWARDS"

blog.pfct.co.kr metadata (2026-07-02): Organization name "피에프씨테크놀로지스(PFC Technologies)" / "피플펀드 PeopleFund"; blog title "PFCT 공식블로그 '피플로그'"; description "보통 사람을 위한 보통이 아닌 금융, 피플펀드 공식 블로그 '피플로그' 입니다." These are brand-owned first-party sources.

Brand narrative: PeopleFund founded 2015 as Korean P2P lending platform; CEO 김대윤. Rebrand to 크플 (Cple) / PFCT (PFC Technologies) publicly visible on sites. These are documented public facts about the company.

Personas (§13) are fictional archetypes informed by publicly observable PeopleFund user segments (Korean retail P2P investors, property-secured borrowers). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "single accent maximum signal", "flat and fast as a rejection of banking software heaviness") are editorial readings connecting PeopleFund's observed design to its positioning, not directly sourced PeopleFund statements.
-->
