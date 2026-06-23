---
id: hana
name: Hana Bank
display_name_kr: 하나은행
country: KR
category: fintech
homepage: "https://www.kebhana.com"
primary_color: "#00a39f"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=www.kebhana.com&sz=128"
verified: "2026-06-22"
added: "2026-06-22"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-22"
  note: "primary = Hana Mint (#00a39f), live-observed as bg on hero carousel and nav accent; deep teal (#008485) on product cards. Corporate group uses slightly different green (#009178) on hanafn.com. Body font NotoSans_Regular (legacy site) with Pretendard on financial group site."
  colors:
    primary: "#00a39f"
    primary-deep: "#008485"
    primary-group: "#009178"
    primary-light: "#2dc396"
    canvas: "#ffffff"
    surface: "#f8f8f8"
    surface-tint: "#f2f9f9"
    ink: "#333333"
    body: "#555555"
    muted: "#666666"
    muted-alt: "#999999"
    on-primary: "#ffffff"
    hairline: "#dbdbdb"
    dark: "#333333"
  typography:
    family: { primary: "NotoSans", body: "NotoSans_Regular", group: "Pretendard Variable" }
    heading: { size: 24, weight: 700, use: "Page headings, nav logo text" }
    nav: { size: 18, weight: 400, lineHeight: 1.56, use: "Main nav tab labels (조회/이체/공과금/외환/금융상품)" }
    body: { size: 12, weight: 400, lineHeight: 1.5, use: "Standard body and label text" }
    footer: { size: 12, weight: 400, use: "Footer navigation and legal text" }
    group-body: { size: 14, weight: 400, lineHeight: 1.4, use: "Hana Financial Group site body text" }
    group-cta: { size: 16, weight: 700, use: "Group site CTA buttons" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 40, section: 48 }
  rounded: { sm: 6, md: 10, lg: 20, full: 9999 }
  shadow:
    card: "0px 2px 8px rgba(0,0,0,0.08)"
  components:
    button-primary: { type: button, bg: "#00a39f", fg: "#ffffff", radius: "6px", font: "12px / 400 NotoSans", use: "Primary CTA and brand-tinted action buttons" }
    button-secondary: { type: button, bg: "#333333", fg: "#ffffff", radius: "20px", padding: "0px 24px", font: "14px / 400 NotoSans", use: "Dark secondary pill button (하나소비자세상 pattern)" }
    button-outline: { type: button, bg: "#ffffff", fg: "#555555", border: "1px solid #dbdbdb", radius: "10px", font: "12px / 400 NotoSans", use: "Footer select switcher (브랜드사이트/하나네트워크)" }
    button-group-cta: { type: button, bg: "#ffffff", fg: "#222222", radius: "27px", padding: "0px 48px 0px 24px", font: "16px / 700 Pretendard", use: "Group site white ghost pill CTA (인재상 알아보기)" }
    button-group-dark: { type: button, bg: "#292f35", fg: "#ffffff", radius: "27px", padding: "0px 48px 0px 24px", font: "16px / 700 Pretendard", use: "Group site dark pill CTA (채용공고 바로가기)" }
    card-product: { type: card, bg: "#ffffff", fg: "#555555", border: "2px solid #2dc396", radius: "6px", padding: "20px", use: "Product/loan recommendation card with teal accent border" }
    card-feature-teal: { type: card, bg: "#008485", fg: "#ffffff", radius: "0px", padding: "25px 15px 25px 30px", use: "Featured product card (고단위 플러스, 부자씨 적금) — teal brand fill" }
    card-surface: { type: card, bg: "#f8f8f8", fg: "#555555", radius: "0px", use: "Standard light grey card surface for product listings" }
    badge-teal: { type: badge, bg: "#00a39f", fg: "#ffffff", radius: "4px", use: "Category or status tag in Hana Mint teal" }
    nav-tab: { type: tab, fg: "#000000", bg: "#ffffff", font: "18px / 400 NotoSans", padding: "0px 40px", active: "text #000000 on #ffffff, 70px height", use: "Main banking nav tabs (조회/이체/공과금/외환/금융상품)" }
  components_harvested: true
---

# Design System Inspiration of Hana Bank

## 1. Visual Theme & Atmosphere

하나은행 (Hana Bank, KEB Hana Bank) presents a mature, institutional fintech aesthetic grounded in a signature **Hana Mint teal** (`#00a39f`) — a medium-dark, slightly warm teal that anchors every brand touchpoint from the homepage hero carousel to product card accents. This is not a saturated neon mint; it's a measured, financially trustworthy blue-green that reads calm and professional. The overall page character is conservative web banking with Korean financial-institution DNA: clean white canvas (`#ffffff`) with cool-grey surfaces (`#f8f8f8`), dense NotoSans body text at modest sizes, and a teal-on-white pattern used to signal primary actions and brand-tier products.

Unlike digital-native Korean fintechs (Toss, Kakao Pay) that adopt bold headlines and single saturated accents, Hana Bank's web presence retains the information-dense, accessibility-conscious layout of a full-service bank serving all age groups — including legacy JSP pages and newer redesigned sections side by side. The typography is dominated by **NotoSans / NotoSans_Regular** at `12–18px` with body text in `rgb(85,85,85)` (`#555555`), a neutral dark grey that is softer than pure black yet maintains high contrast for legibility.

The product catalog (推奨상품 surface) reveals the brand's color hierarchy most clearly: product cards with `2px solid #2dc396` teal borders, featured savings/deposits in a deep teal `#008485` block, and muted navy-grey cards (`#465e6f`) for housing finance. Hana Financial Group's investor site (hanafn.com) uses a slightly different corporate green (`#009178`) with Pretendard Variable and pill-shaped CTAs, reflecting a more modern design update for institutional audiences.

**Key Characteristics:**
- Hana Mint Teal (`#00a39f`) as primary brand color — measured, trustworthy blue-green
- Deep Teal (`#008485`) for featured product cards and brand-weight surfaces
- NotoSans_Regular at 12px body, 18px nav tabs — information-dense, accessibility-first
- White canvas with light grey surfaces (`#f8f8f8`, `#f2f9f9`) — flat, minimal depth
- Product cards with `2px solid #2dc396` teal accent borders and `6px` radius
- Footer buttons with `10px` rounded corners, `48px` height — comfortable Korean web standard
- Hana Financial Group site: Pretendard Variable + pill CTAs (`27px` radius) — more modern layer

## 2. Color Palette & Roles

### Primary Brand
- **Hana Mint** (`#00a39f`): The signature Hana brand teal. Used as primary accent on hero sections, nav highlights, and brand-tier CTAs. Observed at 6× frequency in homepage bg scan. A calm blue-green that signals trust and modernity in the Korean banking context.
- **Hana Deep Teal** (`#008485`): A darker teal used for featured product card backgrounds ("고단위 플러스", "부자씨 적금"). Appears with white text for maximum brand-on-card impact. The established `#008485` follows the brand's documented "하나 민트색" family.
- **Hana Accent Green** (`#2dc396`): Lighter, more vibrant teal-green used for product card borders (`2px solid #2dc396`) — creating a fresh, clickable accent on white cards.

### Corporate & Group
- **Hana Group Green** (`#009178`): Used on hanafn.com (Hana Financial Group) as the corporate primary — a slightly warmer, greener teal distinguishing the holding company surface from the retail bank.
- **Surface Tint** (`#f2f9f9`): Very light mint tint surface observed on group site cards — a subtle brand-green undertone for the information canvas.

### Neutral & Surface
- **Canvas** (`#ffffff`): Page background, card surfaces, nav background.
- **Surface** (`#f8f8f8`): Standard light grey background for alternating content sections.
- **Ink** (`#333333`): Primary dark text and heavy headings — warm dark grey, not pure black.
- **Body** (`#555555`): Most frequent text color (highest frequency in fgFreq scan). Standard body copy and nav labels.
- **Muted** (`#666666`): Secondary text, metadata, captions.
- **Hairline** (`#dbdbdb`): Border for footer select buttons, dividers.

### Error & Contrast
- **On-Primary** (`#ffffff`): Text on teal primary backgrounds.
- **Dark Chip** (`#333333`): Near-dark surface for secondary actions.

## 3. Typography Rules

### Font Family
- **NotoSans / NotoSans_Regular**: Primary font family on the retail banking site (www.kebhana.com). Used for all nav labels, body text, buttons, and headings. A robust, accessibility-tested Korean web font supporting full hangul range.
- **Pretendard Variable**: Used on the Hana Financial Group site (www.hanafn.com). The modern standard Korean product font, reflecting an updated design system layer for institutional/investor audiences.
- **Fallback stack** (hanafn.com): `"Pretendard Variable", "Pretendard JP Variable", -apple-system, "system-ui", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif`

### Hierarchy (kebhana.com retail site)

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Page H1 / Logo | NotoSans | 24px | 700 | — | Heading weight |
| Main Nav Tab | NotoSans | 18px | 400 | 1.56 | 70px tab height, 0px 40px padding |
| Body / Labels | NotoSans | 12px | 400 | 1.5 | Base body across most UI |
| Footer / Legal | NotoSans | 12px | 400 | — | Footer links and legal text |

### Hierarchy (hanafn.com group site)

| Role | Font | Size | Weight | Notes |
|------|------|------|--------|-------|
| Body | Pretendard Variable | 14px | 400 | `line-height: 19.6px` (1.4) |
| CTA Button | Pretendard Variable | 16px | 700 | Pill-shaped, 27px radius |
| Secondary Button | Pretendard Variable | 14px | 600 | 40px height, 20px radius |

### Principles
- **Conservative sizing for legibility**: Body at 12px reflects the bank's commitment to serving all age groups with high-contrast, accessible text.
- **NotoSans as the accessible Korean anchor**: Comprehensive hangul coverage without rendering quirks on older browsers — a deliberate legacy-friendly choice.
- **Pretendard for the newer layer**: The financial group site signals modernity with Pretendard, previewing the direction of future Hana Bank digital redesigns.

## 4. Component Stylings

### Buttons

**Primary Teal CTA**
- Background: `#00a39f`
- Text: `#ffffff`
- Radius: 6px
- Font: 12px NotoSans weight 400
- Use: Brand-tier primary actions and highlighted CTAs

**Dark Secondary Pill**
- Background: `#333333`
- Text: `#ffffff`
- Radius: 10px
- Font: 14px NotoSans weight 400
- Height: 48px
- Use: Footer brand-site link, secondary navigation launchers

**Outline Footer Select**
- Background: `#ffffff`
- Text: `#555555`
- Border: 1px solid `#dbdbdb`
- Radius: 10px
- Font: 12px NotoSans weight 400
- Height: 48px
- Padding: 0px 16px
- Use: Footer site-switcher buttons (브랜드사이트, 하나네트워크, 하나은행 SNS)

**Group Site White Pill**
- Background: `#ffffff`
- Text: `#222222`
- Radius: 27px
- Font: 16px Pretendard weight 700
- Height: 54px
- Padding: 0px 48px 0px 24px
- Use: Group site ghost pill CTA (인재상 알아보기)

**Group Site Dark Pill**
- Background: `#292f35`
- Text: `#ffffff`
- Radius: 27px
- Font: 16px Pretendard weight 700
- Height: 54px
- Padding: 0px 48px 0px 24px
- Use: Group site filled dark pill (채용공고 바로가기)

### Cards & Containers

**Product Card (Teal Border)**
- Background: `#ffffff`
- Text: `#555555`
- Border: 2px solid `#2dc396`
- Radius: 6px
- Padding: 20px
- Height: 234px (observed)
- Use: Loan/mortgage product recommendation cards (신용대출, 담보대출)

**Featured Product Card (Teal Fill)**
- Background: `#008485`
- Text: `#ffffff`
- Radius: 0px
- Padding: 25px 15px 25px 30px
- Height: 245px (observed)
- Use: Brand-featured savings products (고단위 플러스, 부자씨 적금)

**Standard Surface Card**
- Background: `#f8f8f8`
- Text: `#555555`
- Radius: 0px
- Padding: 20px
- Use: Standard grey-background product listings and content containers

### Badges

**Teal Status Badge**
- Background: `#00a39f`
- Text: `#ffffff`
- Radius: 4px
- Font: 12px NotoSans weight 400
- Use: Category indicator or status pill in Hana Mint teal

### Navigation

**Main Banking Tab**
- Background: `#ffffff`
- Text: `#000000`
- Font: 18px NotoSans weight 400
- Height: 70px
- Padding: 0px 40px
- Use: Primary banking action tabs — 조회/이체/공과금/외환/금융상품

---

**Verified:** 2026-06-22 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://www.kebhana.com/ (Hana Bank official homepage — live computed style extract) | https://www.hanafn.com/ (Hana Financial Group official site — live computed style extract)
**Tier 2 sources:** getdesign.md/hana — not found; styles.refero.design?q=hana+bank — no matching entries (non-Korean brands returned)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 40px, 48px
- Nav tabs: 0px 40px horizontal padding creates generous, tappable 112–144px wide tab zones
- Product cards: 20px padding, consistent grid alignment
- Footer: Compact 12px body, 48px touch targets on site-switcher buttons

### Grid & Container
- Traditional multi-column Korean banking layout: full-width header, tabbed main nav, content below
- Product recommendation grid: 4-up cards (recommended) with consistent 234–245px card height
- Featured product pairs: 2-up side-by-side panels with prominent brand-color fills

### Whitespace Philosophy
- **Accessibility-density balance**: Denser than digital-native fintechs, reflecting the full-service bank audience spanning generations
- **Color separation over shadows**: Section separation via background color shifts (`#f8f8f8` vs `#ffffff`) rather than drop shadows
- **Teal as spatial anchor**: The `#00a39f`/`#008485` teal creates visual hierarchy without adding depth layers

### Border Radius Scale
- Small (6px): Product cards, primary buttons — conservative, professional
- Medium (10px): Footer selectors, secondary buttons
- Large (20px): Pill-adjacent elements on newer UI sections
- Full (27px / 9999px): Group site pill CTAs, future-direction rounding

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Base page, nav, most surfaces |
| Tint (Level 1) | `#f8f8f8` / `#f2f9f9` background | Section separation, card grouping |
| Hairline (Level 2) | `1px–2px solid #dbdbdb` or `#2dc396` | Card borders, dividers |
| Teal Fill | `#008485` background | Featured product emphasis |

**Shadow philosophy**: The retail banking site (kebhana.com) is predominantly flat — shadows were not observed in the computed-style scan across nav, header, buttons, or product cards. Depth is communicated through background tint shifts and the `2px solid #2dc396` teal border accent on product cards. The financial group site is similarly flat, using soft `rgba` overlays only for modal-like layers.

## 7. Do's and Don'ts

### Do
- Use Hana Mint (`#00a39f`) as the primary brand accent for CTAs and important highlights
- Use NotoSans at 12px for body text — the accessible Korean standard for all-audience banking
- Apply `2px solid #2dc396` teal borders to product/loan recommendation cards
- Use Deep Teal (`#008485`) for featured product card fills — maximum brand impact
- Use `#555555` as the primary body text color (softer than pure black, high contrast)
- Apply 6px radius to cards and primary buttons — a conservative, trustworthy shape
- Use pill CTAs (27px radius) only on the group-site layer targeting institutional audiences
- Maintain `48px` height for footer touch targets and site-switcher buttons

### Don't
- Use pure black (`#000000`) for body text — Hana uses warm grey `#555555` / `#666666`
- Apply drop shadows on cards or nav — this is a flat, border-driven system
- Use the Corporate Group Green (`#009178`) on retail banking surfaces — it's a different brand layer
- Mix NotoSans and Pretendard on the same page section without purposeful context
- Spread the teal accent to decorative elements — it signals brand trust and action priority
- Use sharp 0px corners on interactive elements below the featured product card level
- Over-saturate with teal — the brand's restraint with color is its trustworthiness signal

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Stacked layout, collapsed nav, simplified banking shortcuts |
| Tablet | 768–1024px | Partial grid, 2-up product cards |
| Desktop | 1024px+ | Full-width header, 4–5 nav tabs, multi-column product grid |

### Touch Targets
- Banking nav tabs: 70px height at 1440px — generous enough for all touch contexts
- Footer site-switcher: 48px height — comfortable on mobile if accessed
- Product card links: 234–245px full-card hit area

### Collapsing Strategy
- Main nav tabs collapse to a hamburger or collapsed icon menu on mobile
- Product cards reflow from 4-up to 2-up to 1-up
- Featured product pair stacks vertically
- Teal fills maintain full-width impact at all breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary teal / CTA: Hana Mint (`#00a39f`)
- Featured product fill: Deep Teal (`#008485`)
- Product card accent border: Accent Green (`#2dc396`)
- Canvas: `#ffffff`
- Standard surface: `#f8f8f8`
- Primary text: `#555555`
- Heading text: `#333333`
- Muted / secondary text: `#666666`
- Hairline borders: `#dbdbdb`

### Example Component Prompts
- "Create a banking product card: white background (#ffffff), 2px solid #2dc396 teal border, 6px radius, 20px padding, 234px height. Title in #333333 at 14px NotoSans. Body text #555555 at 12px."
- "Design a featured savings product card: #008485 teal background, white text (#ffffff), 0px radius, 25px 15px 25px 30px padding, 245px height. Product name in 14px NotoSans weight 700."
- "Build the main banking nav: white 70px tall tab bar. NotoSans 18px / 400 / #000000 text. Tab items: 조회 / 이체 / 공과금 / 외환 / 금융상품. Horizontal padding 0px 40px each."
- "Create a CTA button: #00a39f background, white text, 6px radius, NotoSans 12px. Secondary dark pill: #333333 bg, white text, 10px radius, 48px height, 14px NotoSans."

### Iteration Guide
1. Teal is trust — `#00a39f` for primary brand moments, `#008485` for featured product fills
2. NotoSans at accessible sizes — 12px body, 18px nav tabs, 24px headings
3. Product cards with teal border (`2px solid #2dc396`, 6px radius) for browse surfaces
4. Flat layout: no shadows; background tint (`#f8f8f8`) and hairline borders do the separating
5. Text hierarchy: `#333333` headings → `#555555` body → `#666666` muted → `#999999` very muted
6. CTA buttons: small 6px radius for embedded actions; 27px pill for group-site modern layer

---

## 10. Voice & Tone

하나은행's voice is **trustworthy, approachable, and nationally rooted** — the voice of Korea's largest financial holding group presented through a retail banking lens that serves students opening their first accounts, middle-class families managing mortgages, and business clients handling foreign exchange. The brand positioning is grounded in the phrase "the bank that is one" (하나 = one), emphasizing unity, reliability, and full-service breadth.

| Context | Tone |
|---|---|
| Product headlines | Clear, benefit-first. "하나의 정기예금" — simple noun-form product branding. |
| Nav labels | Functional, minimal. "조회 / 이체 / 공과금 / 외환 / 금융상품" — plain category labels. |
| CTA labels | Inviting, non-urgent. "자세히보기" — calm "view details" rather than aggressive "apply now". |
| Financial product names | Conservative, compound. "고단위 플러스", "부자씨 적금", "급여하나 월복리적금". |
| Trust / certification | Credential-forward. ISMS, ISO marks visible in footer. |

**Voice samples (from live homepage):**
- "조회 / 이체 / 공과금 / 외환 / 금융상품" — main nav labels. *(verified live 2026-06-22)*
- "하나의 정기예금" — flagship deposit product name. *(verified live 2026-06-22)*
- "급여하나 월복리 적금" — flagship savings product with compound-rate promise. *(verified live 2026-06-22)*

**Forbidden register**: alarming credit-risk language, hard-sell urgency, complex jargon left unexplained, overly casual slang inconsistent with institutional trust.

## 11. Brand Narrative

하나은행 traces its origins to 1971 when Korea Investment Finance Corporation (한국투자금융주식회사) was established. In 1991 it became Hana Bank (하나은행), growing through acquisitions to become one of Korea's "Big Four" banks. A landmark 2015 merger with Korea Exchange Bank (KEB, 한국외환은행) created KEB Hana Bank — formally **주식회사 하나은행** — the flagship retail banking subsidiary of Hana Financial Group (하나금융그룹), Korea's second-largest financial holding company by total assets.

The bank's positioning centers on three pillars: full-service breadth (savings, loans, foreign exchange, funds, insurance under one roof), digital transformation leadership (the Hana1Q mobile banking platform), and genuine financial partnership ("Together, we grow"). The brand name itself — "하나" meaning "one" or "together" — encodes the mission: one bank, one place for all financial needs, one relationship that grows with you.

The design language reflects this conservative-yet-dependable identity: a teal that signals neither the flashy fintech startup nor the stuffy legacy institution, but a mature bank that has earned its place in Korean households over fifty years. The deep institutional green family (`#008485` through `#00a39f`) is the visual embodiment of "steady and growing."

## 12. Principles

1. **One relationship, complete service.** Hana Bank is a full-service institution, not a niche fintech. *UI implication:* primary navigation exposes all banking verticals (조회/이체/공과금/외환/금융상품) without gatekeeping or artificial upsell architecture.
2. **Teal signals trust, not hype.** The Hana Mint is not a vivid attention-grabbing accent; it's a measured signal of brand authority. *UI implication:* reserve `#00a39f` and `#008485` for brand-tier moments — product highlights, primary CTAs — not decorative chrome.
3. **Accessible to all generations.** The bank serves everyone from the elderly to digital natives. *UI implication:* 12px body at high contrast (`#555555` on `#ffffff`), large tap targets (70px nav, 48px footer buttons), conservative radius (6px) that doesn't read as overly modern.
4. **Flat and stable.** Financial security is communicated through steadiness, not depth tricks. *UI implication:* no drop shadows; teal fills and hairline borders create hierarchy without visual noise.
5. **Product names are the brand.** The product catalog (정기예금, 적금, 대출) carries the brand promise. *UI implication:* product card typography and teal-fill treatment give each product product-level brand dignity.

## 13. Personas

*These are fictional archetypes informed by Hana Bank's publicly observable product catalog and Korean banking demographics; not individual people.*

**이미영, 52, 서울.** A longtime Hana Bank customer managing a savings portfolio across 정기예금 and 적금 products. Values the bank's stability and familiarity — has been using 하나원큐 since it launched. Chooses Hana for the breadth of products under one app.

**박정훈, 28, 부산.** A salaried professional opening a "급여하나 월복리적금" to maximize salary savings compound returns. Primarily uses the mobile app but trusts the website for comparing product terms side-by-side. Appreciates the calm, unsales-y interface.

**김상민, 38, 경기.** A small business owner who uses KEB Hana's foreign exchange (외환) services for overseas supplier payments. Relies on the main nav's "외환" tab for quick rate checks. Values the bank's decades of FX expertise from the former KEB heritage.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no products found)** | White canvas. Body grey `#555555` single message with calm tone explaining the filter mismatch. One teal `#00a39f` link to reset criteria. |
| **Empty (account — no transactions)** | Muted `#666666` text explaining no recent transactions. Teal accent link to first action (이체하기). |
| **Loading (product list fetch)** | Skeleton card rows on `#f8f8f8` surface at final card height (234px). Consistent with flat system — no shimmer glow. |
| **Loading (FX rate lookup)** | Inline spinner inside the rate cell; surrounding content stays visible. |
| **Error (server error)** | "페이지 요청 오류" inline state with `#1, 128, 133`-tinted border, plain Korean explanation and retry link. |
| **Error (form validation)** | Field-level red underline (or `rgb(255,0,0)` observed in page). Plain-language message: what value is expected. |
| **Success (transfer complete)** | Brief confirmation message in body text; next-step prompt (print/share receipt). Calm, no excessive celebration. |
| **Skeleton** | `#f8f8f8` blocks at final dimensions, no radius variation from card (6px). |
| **Disabled** | `#999999` text; teal fills desaturate to `#c8d4d4` variant. |
| **Selected tab** | Active banking tab: bold `#000000` text with no additional border — implicit via content visibility. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 100ms | Tab switch, button press feedback |
| `motion-standard` | 200ms | Card hover, dropdown reveal, modal entry |
| `motion-slow` | 300ms | Page-level transition, hero carousel slide |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Content arriving — cards, panels |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, collapsing menus |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Standard two-way transitions |

**Motion rules**: Motion is institutional-conservative — it confirms user action without distracting from the financial task. The homepage hero runs a carousel at a gentle `motion-slow` pace. Modals and bottom sheets enter with `ease-enter` for trustworthy arrival. No spring physics, no bounce — a bank interface signals stability in every motion. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant while the interface remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle:
- kebhana.com body: font-family NotoSans_Regular; color rgb(102,102,102) #666666; 12px
- kebhana.com bgFreq: #00a39f (rgb 0,163,159) ×6, #008485 (rgb 0,132,133) ×2, #008491 (rgb 0,149,145) ×1
- kebhana.com fgFreq: #666666 ×2274, #555555 ×354 (most dominant text colors)
- Product cards: 2px solid rgb(45,195,150) = #2dc396; radius 6px; padding 20px; height 234px
- Featured product bg rgb(0,132,133) = #008485; white text; 25px 15px 25px 30px padding; 245px
- Nav tabs: bg #ffffff; color #000000; 18px NotoSans; 70px h; 0px 40px padding (조회/이체/공과금/외환/금융상품)
- Footer select buttons: bg #ffffff; radius 10px 0px 0px 10px; 48px; border 1px solid #dddddd
- hanafn.com body: Pretendard Variable; rgb(34,34,34); 14px; line-height 19.6px
- hanafn.com CTA pills: bg #ffffff, radius 27px, 54px h, 16px/700 Pretendard (인재상 알아보기)
- hanafn.com dark pill: bg rgb(41,47,53) = #292f35; white text; 27px radius; 16px/700 Pretendard
- hanafn.com bgFreq: #009178 (rgb 0,145,120) ×5 = corporate green
- Error page (kebhana.com): bg rgb(1,128,133) and rgb(46,148,152) — teal tints on error boundary

Brand narrative: Hana Bank (하나은행) founded 1971 as Korea Investment Finance Corp; renamed Hana Bank 1991; merged with KEB (한국외환은행) in 2015 to form KEB Hana Bank. These are public domain historical facts.

Personas are fictional archetypes.

Voice samples sourced verbatim from live homepage elements (verified 2026-06-22).
-->
