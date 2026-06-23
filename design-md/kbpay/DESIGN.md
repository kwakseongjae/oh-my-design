---
id: kbpay
name: KB Pay
display_name_kr: KB페이
country: KR
category: fintech
homepage: "https://card.kbcard.com/CXPRISVC0127.cms"
primary_color: "#FFCC00"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=kbcard.com&sz=128"
verified: "2026-06-22"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-22"
  note: "primary = live primary CTA yellow (#FFCC00 = rgb(255,204,0)); brand accent purple (#614CC2) appears on label/menu tints; heading text near-black (#151515 effective from rgba(0,0,0,0.87)); font family = KB Financial Group proprietary KBFGText / KBFGDisplayM."
  colors:
    primary: "#FFCC00"
    primary-light: "#FFE066"
    primary-tint: "#FAEAAD"
    canvas: "#FFFFFF"
    surface: "#F9F9F9"
    surface-alt: "#F9FAFE"
    ink: "#151515"
    body: "#333333"
    muted: "#444444"
    faint: "#666666"
    divider: "#AAAAAA"
    on-primary: "#000000"
    accent-purple: "#614CC2"
  typography:
    family: { display: "KBFGDisplayM", body: "KBFGText" }
    display-hero: { size: 32, weight: 400, lineHeight: 1.3, use: "Page hero title (KB Pay), KBFGDisplayM" }
    section: { size: 24, weight: 400, lineHeight: 1.4, use: "Section headings (서비스 특징), KBFGDisplayM" }
    nav-main: { size: 15, weight: 400, lineHeight: 1.5, use: "Main navigation items, KBFGText" }
    body: { size: 15, weight: 400, lineHeight: 1.6, use: "Standard body copy, KBFGText" }
    nav-util: { size: 13, weight: 400, lineHeight: 1.5, use: "Utility nav links (회원가입, 고객센터), KBFGText" }
    button-lg: { size: 18, weight: 600, lineHeight: 1.0, use: "Primary CTA label (로그인, 신청하기)" }
    label: { size: 18, weight: 600, lineHeight: 1.0, use: "Section label (인기 메뉴), accent-purple" }
  spacing: { xs: 4, sm: 8, md: 16, base: 20, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 3, md: 4, lg: 16, full: 9999 }
  shadow:
    card: "rgba(0, 0, 0, 0.16) 0px 1px 3px 0px"
    none: "none"
  components:
    button-primary: { type: button, bg: "#FFCC00", fg: "#000000", radius: "4px", height: "48px", padding: "0 16px", font: "18px / 600 KBFGText", use: "Primary CTA (로그인, 신청하기) — KB signature yellow" }
    button-outlined: { type: button, bg: "#FFFFFF", fg: "#333333", border: "1px solid #AAAAAA", radius: "3px", height: "44px", font: "14px / 400 KBFGText", use: "Secondary action (로그인 버튼 in nav header)" }
    input-text: { type: input, bg: "#FFFFFF", border: "1px solid #AAAAAA", radius: "4px", fg: "#333333", font: "15px KBFGText", use: "Form input fields" }
    card-standard: { type: card, bg: "#FFFFFF", radius: "16px", shadow: "rgba(0,0,0,0.16) 0px 1px 3px 0px", use: "Recommended card / finance menu item (recom-card, finance-menu__item)" }
    card-surface: { type: card, bg: "#F9FAFE", radius: "4px", use: "Secondary surface card (braille-card, info containers)" }
    badge-yellow: { type: badge, bg: "#FFCC00", fg: "#000000", radius: "3px", font: "12px / 600 KBFGText", use: "Notification count badge (active nav indicator)" }
    badge-accent: { type: badge, bg: "#FAEAAD", fg: "#333333", radius: "4px", font: "14px / 400 KBFGText", use: "Breadcrumb highlight / active section label (KB Pay breadcrumb)" }
    nav-tab: { type: tab, fg: "#333333", active: "text #614CC2 + yellow #FFE066 underline bar", font: "15px / 400 KBFGText", use: "Main horizontal nav (My KB, 혜택, 금융, 카드, 서비스, 라이프)" }
    toggle-switch: { type: toggle, bg: "#FFCC00", fg: "#FFFFFF", radius: "9999px", use: "On/off toggle for settings and alerts" }
  components_harvested: true
---

# Design System Inspiration of KB Pay

## 1. Visual Theme & Atmosphere

KB Pay (KB페이) is KB Kookmin Card's flagship mobile payment platform — the unified gateway to Korea's largest credit card network wrapped in KB Financial Group's signature warm yellow identity. The visual system opens on a clean white canvas (`#FFFFFF`) with the brand's defining primary color, KB Yellow (`#FFCC00`), commanding every primary call-to-action on the page. This isn't an accent color or a decorative flourish — it is the action color, anchoring the system's visual hierarchy as unmistakably as a neon sign. The result is a financial product that reads as approachable and warm rather than austere and institutional.

The typography is built entirely on KB Financial Group's proprietary typefaces: `KBFGDisplayM` for headings and display text, and `KBFGText` for body copy and UI labels. This proprietary system gives KB Pay an identifiably Korean-premium quality — the display face at 32px/weight 400 on the hero reads as confident and calm, while the body type at 15px handles dense financial menu text with clean legibility. Section labels such as "인기 메뉴" appear in a warm accent purple (`#614CC2`) that creates a subtle counterpoint to the dominant yellow-and-black palette, signaling editorial curation without breaking the brand anchor.

Depth on the main surface is handled through soft single-layer card shadows — `rgba(0,0,0,0.16) 0px 1px 3px 0px` — applied consistently to finance-menu cards and recommendation panels, giving the page a gentle layered feel without heavy elevation. Surface tints (`#F9F9F9`, `#F9FAFE`) segment content zones on an otherwise white canvas. The geometry throughout favors moderate rounding: `4px` on buttons (sharp and purposeful), `16px` on cards (modern and spacious), maintaining a balance between efficiency and contemporary Korean fintech aesthetics.

**Key Characteristics:**
- KB Yellow (`#FFCC00`) as the exclusive primary CTA color — one brand anchor, one action signal
- KBFGDisplayM for display headings, KBFGText for body — both proprietary KB fonts
- White canvas with light surface tints (`#F9F9F9`, `#F9FAFE`) segmenting content zones
- Single-layer card shadow (`rgba(0,0,0,0.16) 0px 1px 3px 0px`) for gentle elevation
- 4px radius on buttons (decisive, financial-grade), 16px on cards (spacious, modern)
- Accent purple (`#614CC2`) for editorial labels (인기 메뉴, 인기 신용카드) — warmth without disruption
- `18px/600 KBFGText` for CTA labels — weight carried in font weight, not size alone
- Near-black heading text (`rgba(0,0,0,0.87)` ≈ `#151515`) instead of pure black

## 2. Color Palette & Roles

### Primary Brand
- **KB Yellow** (`#FFCC00`): The signature brand color of KB Financial Group and KB Pay. Used exclusively for primary CTAs (`.btn.btn--primary`), notification badges, and active UI indicators. Maps to Pantone 1235 C / `rgb(255, 204, 0)`. The single "action" color in the system.
- **Yellow Light** (`#FFE066`): Nav underline accent and depth-1 bar (`em.depth1-bar`) for the active main navigation item. A lighter sibling to KB Yellow.
- **Yellow Tint** (`#FAEAAD`): Warm tinted surface for breadcrumb highlights and breadcrumb-KB Pay path background — confirms the user's current section.

### Background & Surface
- **Canvas White** (`#FFFFFF`): Page background, card surfaces, and CTA text on yellow.
- **Surface Light** (`#F9F9F9`): The primary content zone separator — used throughout for section backgrounds and list-item surfaces.
- **Surface Alt** (`#F9FAFE`): Secondary tinted surface (`.braille-card`, utility containers) with a very faint blue cast for differentiation.

### Text Hierarchy
- **Ink** (`#151515`): Effective heading and primary body color (`rgba(0,0,0,0.87)`) — not pure black but a near-black with visual warmth.
- **Body Dark** (`#333333`): Standard body copy, nav links, button labels.
- **Body Mid** (`#444444`): Secondary UI text and descriptive copy.
- **Muted** (`#666666`): Utility navigation, captions, meta information.
- **Divider** (`#AAAAAA`): Border color for outlined buttons and form field borders.

### Accent & State
- **Accent Purple** (`#614CC2`): Used for editorial section headings ("인기 메뉴", "인기 신용카드", "인기 체크카드") — a complementary warm purple that balances the yellow dominance.
- **Black on Yellow** (`#000000`): CTA label text on `#FFCC00` backgrounds — maximum contrast, brand-prescribed.
- **KB Brown** (`#776C61`): Skip navigation and accessibility-first link background — a warm brown from KB's brand neutral palette.

## 3. Typography Rules

### Font Family
- **Display**: `KBFGDisplayM` — KB Financial Group's proprietary display medium typeface. Used for page titles ("KB Pay"), section headings ("서비스 특징", "이용전 유의사항").
- **Body**: `KBFGText` — KB Financial Group's proprietary text typeface. Used for navigation, body copy, button labels, utility text. Weight 400 as default.

### Hierarchy

| Role | Font | Size | Weight | Use |
|------|------|------|--------|-----|
| Display Hero | KBFGDisplayM | 32px | 400 | Page hero title (KB Pay) |
| Section Heading | KBFGDisplayM | 24px | 400 | Section sub-titles (서비스 특징) |
| Main Nav | KBFGText | 15px | 400 | Primary navigation items |
| Body | KBFGText | 15px | 400 | Standard body copy |
| Editorial Label | KBFGText | 18px | 600 | Section labels (인기 메뉴) in accent purple |
| CTA Label | KBFGText | 18px | 600 | Primary button labels (로그인, 신청하기) |
| Utility Nav | KBFGText | 13px | 400 | Utility links (회원가입, 고객센터) |
| Tag/Badge | KBFGText | 14px | 400 | Breadcrumb and content labels |

### Principles
- **Proprietary fonts as identity**: KBFGDisplayM and KBFGText are exclusive to KB Financial Group, making every text element brand-identifiable without a logo.
- **Weight contrast is hierarchy**: KBFGDisplayM at weight 400 for headings achieves a calm authority; KBFGText at weight 600 for CTAs and labels provides emphasis without visual aggression.
- **15px as the information density anchor**: Body and nav at 15px is generous for Korean hangul legibility while remaining dense enough for financial service browsing.
- **Black on yellow at 18px/600**: CTA legibility maximized through weight rather than size — the yellow does the attention-grabbing, the weight does the reading-clarity.

## 4. Component Stylings

### Buttons

**Primary CTA (KB Yellow)**
- Background: `#FFCC00`
- Text: `#000000`
- Radius: 4px
- Height: 48px
- Padding: 0 16px
- Font: 18px KBFGText weight 600
- Use: All primary actions (로그인, 신청하기, 확인) — the single action color

**Secondary Outlined**
- Background: `#FFFFFF`
- Text: `#333333`
- Border: 1px solid `#AAAAAA`
- Radius: 3px
- Height: 44px
- Font: 14px KBFGText weight 400
- Use: Login button in nav header — a lower-emphasis companion to yellow CTA

### Inputs & Forms

**Text Input**
- Background: `#FFFFFF`
- Border: 1px solid `#AAAAAA`
- Radius: 4px
- Text: `#333333`
- Font: 15px KBFGText weight 400
- Use: Standard form input fields

### Cards & Containers

**Standard Card (Finance Menu)**
- Background: `#FFFFFF`
- Radius: 16px
- Shadow: `rgba(0, 0, 0, 0.16) 0px 1px 3px 0px`
- Use: Finance menu items (대출, 카드, 신용점수 등) and recommendation panels (recom-card)

**Surface Card**
- Background: `#F9FAFE`
- Radius: 4px
- Use: Braille-accessible info blocks and utility containers; no shadow, surface tint only

**Feature Banner**
- Background: transparent / image
- Radius: 16px
- Use: KB Pay feature banner items (setting-banner__item) — large image cards

### Badges & Labels

**Notification Badge**
- Background: `#FFCC00`
- Text: `#000000`
- Radius: 3px
- Font: 12px KBFGText weight 600
- Use: Active nav indicator dot and notification count

**Breadcrumb Highlight**
- Background: `#FAEAAD`
- Text: `#333333`
- Radius: 0px
- Font: 14px KBFGText weight 400
- Use: Active breadcrumb path segment (KB Pay current section)

### Navigation

**Main Nav Item**
- Background: `#FFFFFF` (nav bar)
- Text: `rgba(0,0,0,0.87)`
- Active underline: `#FFE066` bar (em.depth1-bar), 2px equivalent
- Height: 80px nav height
- Font: 15px KBFGText weight 400
- Use: Primary horizontal navigation (My KB, 혜택, 금융, 카드, 서비스, 라이프)

**Utility Nav Links**
- Background: `#FFFFFF`
- Text: `#666666`
- Height: 60px utility nav bar
- Font: 13px KBFGText weight 400
- Use: Utility links (회원가입, 고객센터, 상품공시실 등)

---

**Verified:** 2026-06-22 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://card.kbcard.com/CXPRISVC0127.cms, https://card.kbcard.com/
**Tier 2 sources:** getdesign.md/kbpay — not found (404); styles.refero.design/?q=KB+Pay — no KB Pay entries found
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 16px, 20px, 24px, 32px, 48px, 64px
- Button padding: `0 16px` horizontal
- Nav padding: `27px 0px` on main nav links (80px total height with 26px top/bottom)
- Utility nav: `20px 0px` (60px total height)

### Grid & Container
- Single-column hero with KB Pay title at 32px KBFGDisplayM
- Feature tabs (홈, 카드(듀얼홈), 혜택, 결제, 금융, 쇼핑/여행) as horizontal scroll or 6-tab layout
- Finance menu: 2-column or 4-column grid of 16px-radius white cards with subtle shadow
- Full-width white nav bar with dual-row: utility links (60px) + main nav (80px)
- Content grouped into white (`#FFFFFF`) and light-surface (`#F9F9F9`) alternating bands

### Whitespace Philosophy
- **Measured and purposeful**: KB Pay is a financial product serving millions — layout choices favor clarity and scanability over decorative whitespace.
- **Card rhythm**: Finance menu cards repeat at consistent 16px radius with the same single shadow, creating a uniform grid of trustworthy service tiles.
- **Yellow as the only visual interrupt**: On a largely monochromatic (white + gray) surface, `#FFCC00` is the sole saturated element — its scarcity amplifies its authority.

### Border Radius Scale
- Micro (3px): Notification badge, legacy `.kbBtn` utility buttons
- Standard (4px): Primary CTA buttons, form inputs — the workhorse interactive radius
- Card (16px): Finance cards, banner items, guide containers
- Full (9999px): Toggle switches, pill badges

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, transparent bg | Navigation, headings, inline text, most links |
| Surface (Level 1) | `#F9F9F9` or `#F9FAFE` background shift | Section separators, utility containers |
| Card (Level 2) | `rgba(0,0,0,0.16) 0px 1px 3px 0px` | Finance menu items, recommendation cards |

**Shadow Philosophy**: KB Pay's elevation system is deliberately minimal — a single thin shadow (`rgba(0,0,0,0.16) 0px 1px 3px`) applied only to cards makes them feel clickable without creating visual noise. The shadow's low opacity and small spread keeps the surface clean and fast-reading — appropriate for a mobile payment app where cognitive load should be low. Heavy elevation or multi-layer shadows would conflict with the brand's approachable, warm aesthetic anchored by the bright yellow primary.

## 7. Do's and Don'ts

### Do
- Use KB Yellow (`#FFCC00`) exclusively for primary CTAs — one action color, one meaning
- Apply `KBFGDisplayM` for all section headings and display text — it carries KB's brand DNA
- Use `#F9F9F9` surface tints to separate content zones without resorting to borders
- Keep card radius at 16px for containers and 4px for interactive controls — each has a purpose
- Apply the single card shadow (`rgba(0,0,0,0.16) 0px 1px 3px 0px`) only to clickable card units
- Set CTA labels in `18px/600 KBFGText` — weight signals emphasis, size signals hierarchy
- Use `#614CC2` (accent purple) sparingly for editorial/curatorial labels — it balances yellow without competing

### Don't
- Use KB Yellow for decorative backgrounds or illustrations — dilutes its CTA signal
- Replace KBFGText/KBFGDisplayM with system fonts or third-party typefaces — loses brand identity
- Add multiple shadow layers or heavy elevation — KB Pay is a clean, performance-first mobile product
- Use pure black (`#000000`) for body text — near-black `rgba(0,0,0,0.87)` ≈ `#151515` reads warmer
- Apply the accent purple (`#614CC2`) to CTAs or interactive elements — it is a label/editorial color only
- Use the outlined secondary button for primary flows — yellow CTA must always be the first visible action
- Round buttons beyond 4px on desktop surfaces — sharp buttons signal decisiveness for financial transactions

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, stacked nav, compact finance menu |
| Tablet | 640-1024px | 2-column finance menu, moderate padding |
| Desktop | 1024-1440px | Full dual-row nav, 4-column finance grid, centered hero |

### Touch Targets
- Primary CTA buttons: 48px height — comfortable thumb target on iOS/Android
- Nav links: 80px nav height provides a generous interaction zone
- Finance menu cards: large tiles at 176px+ height, easily tappable
- Utility nav links: 60px height minimum

### Collapsing Strategy
- Dual-row nav (utility + main) → single hamburger menu on mobile
- 4-column finance menu → 2-column → scrollable horizontal chips on narrow viewport
- Feature tabs (6 items) → horizontally scrollable tab row
- Hero title scales proportionally; KBFGDisplayM weight 400 maintained throughout
- KB Yellow CTA button stretches to full-width on mobile

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / brand anchor: KB Yellow (`#FFCC00`)
- CTA label: Black (`#000000`)
- Yellow nav accent: `#FFE066`
- Yellow breadcrumb tint: `#FAEAAD`
- Background: White (`#FFFFFF`)
- Surface segment: `#F9F9F9`
- Heading / body text: Near-black (`#151515` / `rgba(0,0,0,0.87)`)
- Secondary text: `#333333`
- Muted text: `#666666`
- Divider / outlined border: `#AAAAAA`
- Editorial accent: Warm purple (`#614CC2`)
- Card shadow: `rgba(0,0,0,0.16) 0px 1px 3px 0px`

### Example Component Prompts
- "Create a primary CTA button: #FFCC00 background, #000000 text, 4px radius, 48px height, 0 16px padding, 18px KBFGText weight 600. Label: '신청하기'. This is the only yellow element on the surface — use it to anchor the primary action."
- "Design a finance menu card: #ffffff background, 16px radius, rgba(0,0,0,0.16) 0px 1px 3px shadow. Inside: 18px KBFGText weight 600 #151515 label, 15px weight 400 #333333 descriptor. The card is fully clickable — no separate button."
- "Build a section with editorial label: label text '인기 메뉴' at 18px KBFGText weight 600 color #614CC2. Below it, 16px-radius white cards in a 2-4 column grid, each with the standard card shadow."
- "Create KB Pay main nav: white bar, 80px height. KBFGText 15px weight 400, color rgba(0,0,0,0.87). Active item shows a #FFE066 underline bar (em.depth1-bar). Right side: outlined login button (#ffffff, 1px solid #AAAAAA, 3px radius, 44px height)."

### Iteration Guide
1. KB Yellow (`#FFCC00`) is the single action anchor — use it for one element per view (the primary button)
2. KBFGDisplayM for all headings; KBFGText for everything interactive — never swap
3. Card shadow is always `rgba(0,0,0,0.16) 0px 1px 3px 0px` — don't add layers or increase opacity
4. 4px radius on buttons; 16px on cards — these two scales cover all interactive surfaces
5. `#614CC2` accent purple only for editorial labels — never for buttons or navigation
6. Surface segments use `#F9F9F9` or `#F9FAFE` backgrounds — no borders between sections
7. Button text is always weight 600 at 18px — KB Pay's CTAs are large and decisive

---

## 10. Voice & Tone

KB Pay's voice is **warm, confident, and enabling** — a financial partner that speaks plain Korean to the widest possible audience, from teenagers making first purchases to seniors managing retirement funds. The headline "한번에, 한손에, 한눈에 KB Pay" (at once, in one hand, at a glance) sets the register: punchy, parallel, optimistic. The service does not lecture about finance; it simplifies it. Copy is short, action-oriented, and jargon-light — consistent with KB Financial Group's stated mission of being "국민의 행복생활 파트너" (the Korean people's happy-life partner).

| Context | Tone |
|---|---|
| Hero / primary CTA | Short, punchy, parallel structure. "한번에, 한손에, 한눈에". Action verbs without punctuation excess. |
| Feature descriptions | Benefit-first, feature-second. "나에게 꼭 맞는 콘텐츠 추천" — the outcome, then the mechanism. |
| Service feature tabs | Ultra-compact 2-4 Korean syllable labels (홈, 혜택, 결제, 금융). Density over description. |
| Eligibility / restrictions | Clear, matter-of-fact. "만 7세 이상 개인 고객" — no softening language around limits. |
| Error / notice copy | Formal and direct, consistent with Korean financial regulation communication standards. |
| CTAs | Verb + subject. "신청하기" (apply), "다운받기" (download), "확인" (confirm). |

**Voice samples (verbatim from live KB Pay page):**
- "한번에, 한손에, 한눈에 KB Pay" — hero tagline (parallel three-part promise). *(verified live 2026-06-22)*
- "나에게 꼭 맞는 콘텐츠 추천" — 홈 tab feature description (benefit-first). *(verified live 2026-06-22)*
- "매일 새로운 혜택과 이벤트" — 혜택 tab feature description (ongoing value promise). *(verified live 2026-06-22)*
- "국민의 행복생활 파트너 KB국민카드" — site title / brand positioning. *(verified live 2026-06-22)*

**Forbidden register**: financial jargon left unexplained, urgency tactics ("마감 임박"), aggressive upsell framing, English acronyms without Korean equivalents in consumer-facing copy.

## 11. Brand Narrative

KB Pay was launched in **2020** as KB Kookmin Card's mobile payment solution, and in **2022** consolidated the existing "KB국민카드 모바일홈" app into a single unified platform — delivering on the promise of "한번에, 한손에, 한눈에" (at once, in one hand, at a glance). KB Kookmin Card is a subsidiary of **KB Financial Group (KB금융그룹)**, Korea's largest financial holding company by total assets, with headquarters in Yeongdeungpo, Seoul. The parent group's brand identity — the yellow star-b symbol and `#FFCC00` primary — carries directly into KB Pay's visual system, making the payment app an extension of one of Korea's most trusted institutional identities.

The founding logic was straightforward: Korean consumers were managing payment, card issuance, loan inquiry, point redemption, and lifestyle benefits across fragmented apps. KB Pay's consolidation — card, points, financial products, shopping, travel, all accessible in one home screen — was a product response to that fragmentation. The "듀얼홈" (dual home) structure introduced a split-view between personal use and card management, reflecting the reality that KB's users range from young adults making first digital payments to professionals managing corporate accounts.

KB Financial Group's branding philosophy is built around the concept of "국민" (the Korean people) — the name literally means "National People's Card." Design decisions reflect a responsibility to the widest possible demographic: generous touch targets (48px CTAs), accessible color contrast on yellow (black text for maximum WCAG compliance), proprietary fonts that render cleanly at all sizes, and copy guidelines that mandate plain language accessible to users regardless of age or education level. KB Pay is not a startup designing for a demographic niche — it is a national financial infrastructure product.

## 12. Principles

1. **One action, one color.** KB Yellow (`#FFCC00`) carries all primary CTAs. *UI implication:* every screen has exactly one yellow element — the next step is always unambiguous regardless of the user's financial literacy.
2. **"국민" means everyone.** The service must be legible and operable by a 7-year-old and a 75-year-old on the same day. *UI implication:* 48px touch targets, 15px minimum body size, KBFGText at accessible weight, WCAG AA-compliant yellow-on-black contrast.
3. **Finance without intimidation.** KB Pay rejects the cold institutional blue of legacy Korean banking. *UI implication:* warm yellow, rounded cards, white surfaces — the palette of a consumer product, not a government counter.
4. **한손에 (in one hand) is a design constraint, not a tagline.** The app must function entirely within thumb reach. *UI implication:* primary actions at the bottom of the viewport, nav condensed to a 6-item tab row, no deep hierarchy.
5. **Trust through consistency.** A national-scale financial product must behave the same way on every surface. *UI implication:* KBFGDisplayM/Text proprietary fonts across all KB subsidiaries; `#FFCC00` is the same hex in KB Bank, KB Card, KB Insurance — the brand is the group, not the product.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable KB Pay user segments (Korean cardholders, students, families, financial product shoppers), not individual people.*

**이지원, 22, 부산.** A university student who received her first KB Kookmin Card as a family member gift. Uses KB Pay primarily for NFC payment on the subway and convenience store purchases. Chose KB because her parents use it; trusts the brand because "국민카드" sounds official. Expects the app to work instantly at checkout — never reads the notice text.

**박민준, 38, 서울 강남.** A dual-income household head managing family credit cards, loan status, and point accumulation through KB Pay's 듀얼홈. Uses the "카드이용정보" tab daily to track family spending. Values the consolidated view — previously had three separate bank and card apps. Would leave the platform if the app required multiple steps to reach his balance.

**김순희, 63, 전주.** A retiree who transitioned from bank teller visits to the KB Pay app at her children's suggestion. Relies on the large 48px yellow CTA buttons and 15px body text for navigation. Calls the help center (1644-9311) when confused — expects the app to speak plain Korean, not fintech English. Would describe KB Pay as "믿을 수 있는 앱" (a trustworthy app) because it bears the KB group identity.

**최준호, 31, 판교.** A developer at a mid-size tech company who uses KB Pay for seamless checkout integration at online merchants. Appreciates the app's speed and the breadth of acceptance — more merchants accept KB Pay than smaller fintech competitors. Occasionally checks the "금융" tab for loan eligibility, finds the plain-language rate summaries more useful than the jargon-heavy alternatives at competing banks.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no card registered)** | White canvas. Single near-black line in KBFGText 15px explaining how to add a card, one `#FFCC00` CTA "카드 등록하기". No illustration clutter. |
| **Empty (no transaction history)** | Muted text `#666666` in KBFGText 15px stating the period has no transactions; date filter visible above for adjustment. |
| **Loading (initial app launch)** | Skeleton blocks at card dimensions with `#F9F9F9` fill and gentle pulse animation. Nav and tab bar remain visible. No spinner overlay. |
| **Loading (balance refresh)** | Previous balance remains visible; a subtle progress indicator below the card header. Avoids a blank screen during refresh. |
| **Error (network failure)** | Inline message in body text area — KBFGText 15px, near-black, plain Korean explanation. A yellow `#FFCC00` retry CTA. No red-heavy alarmist UI. |
| **Error (payment declined)** | Dedicated state with the decline reason in plain Korean and a single action path (카드 확인하기 or 고객센터 연결). |
| **Success (payment complete)** | Brief confirmation screen: large KB Yellow checkmark or animated symbol, "결제 완료" in KBFGDisplayM 24px, transaction details in KBFGText 15px. Auto-advance to home after 2s. |
| **Success (card application submitted)** | Inline confirmation with expected processing time. Plain Korean timeline, no marketing upsell on the confirmation screen. |
| **Skeleton** | `#F9F9F9` blocks at final card and list-item dimensions, 16px radius, gentle 1.5s pulse. |
| **Disabled** | Reduced-opacity surface (`opacity: 0.4`) on button; yellow fades to `#FAEAAD` tint rather than turning grey — preserves brand warmth. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | CTA press feedback, tab active state |
| `motion-standard` | 200ms | Card expand, modal open, dropdown |
| `motion-slow` | 320ms | Screen-level transition, bottom-sheet slide |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Cards/sheets arriving |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Modals/overlays dismissing |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way state transitions |

**Motion rules**: Motion in KB Pay is transactional and purposeful — this is a payment infrastructure product used by millions of Korean users including elderly and accessibility-sensitive users. The primary CTA (`#FFCC00`) responds to press with an immediate opacity shift at `motion-fast`; no spring or bounce. Bottom sheets slide in at `motion-slow/ease-enter` giving users a moment to register what is appearing. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the yellow CTA remains visible and tappable without any animation dependency.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle on:
- https://card.kbcard.com/CXPRISVC0127.cms (KB Pay introduction page)
- https://card.kbcard.com/ (KB Kookmin Card homepage)

Key observations:
- Page title: "KB Pay 소개>KB Pay>결제서비스>서비스 | 국민의 행복생활 파트너 KB국민카드"
- H1 "KB Pay": KBFGDisplayM 32px / weight 400 / rgba(0,0,0,0.87)
- H3 "서비스 특징": KBFGDisplayM 24px / weight 400 / rgb(21,21,21)
- Primary CTA ".btn.btn--primary" (로그인, 신청하기): bg rgb(255,204,0) #FFCC00 / text rgb(0,0,0) / radius 4px / height 48px / font 18px/600 KBFGText
- Nav main ".linkDep1": bg rgba(0,0,0,0) / color rgba(0,0,0,0.87) / 15px/400 KBFGText / height 80px padding 27px 0px
- Utility nav: 13px/400/rgb(102,102,102) / height 60px
- body: KBFGText / rgba(0,0,0,0.87) / 15px
- bg freq: white ×74, #F9F9F9 ×29, #F2F2F2 ×11, #FFCC00 ×11, ...
- Yellow elements: active breadcrumb bg rgb(250,234,173) #FAEAAD, nav depth1-bar rgb(255,224,102) #FFE066, notification badge rgb(255,223,1) ≈ #FFDF01
- Editorial labels "인기 메뉴/신용카드/체크카드": rgb(97,76,194) #614CC2 at 18px
- Outlined login button: bg #FFFFFF / border 1px solid rgb(170,170,170) #AAAAAA / radius 3px / height 42-44px
- Finance cards (.recom-card, .finance-menu__item): bg #FFFFFF / radius 16px / shadow rgba(0,0,0,0.16) 0px 1px 3px 0px

Voice samples (§10) are verbatim from live KB Pay page content (page title, feature tab descriptions, hero tagline from https://m.kbcard.com/BON/DVIEW/MBEM0007).

Brand narrative (§11): KB Pay (2020 launch), app consolidation (2022), KB Kookmin Card subsidiary of KB Financial Group — widely documented public facts about the company. kbpay.kbcard.com returned 404; primary domain is card.kbcard.com.

Personas (§13) are fictional archetypes informed by publicly observable KB Pay user segments (Korean cardholders, students, retirees, tech workers). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "one action, one color" principle, "national infrastructure product" framing) are editorial readings connecting KB's observed design system to its institutional positioning, not directly sourced KB statements.
-->
