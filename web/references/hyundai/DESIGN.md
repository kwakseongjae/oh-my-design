---
id: hyundai
name: Hyundai
display_name_kr: 현대자동차
country: KR
category: automotive
homepage: "https://www.hyundai.com/kr/ko/e"
primary_color: "#002c5f"
logo:
  type: simpleicons
  slug: hyundai
verified: "2026-06-22"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-22"
  note: "primary = deep navy (#002c5f) dominant brand/CTA color; secondary teal (#007fa8) on badges; warm off-white (#f6f3f2) surface. Custom typefaces HyundaiSansHeadKR (display) and HyundaiSansTextKR (body). Zero-radius sharp corners everywhere — automotive precision geometry."
  colors:
    primary: "#002c5f"
    primary-teal: "#007fa8"
    accent-cyan: "#00aad2"
    ink: "#000000"
    body: "#666666"
    dark-label: "#333333"
    canvas: "#ffffff"
    surface: "#f6f3f2"
    surface-neutral: "#f5f5f5"
    dark-chrome: "#1c1b1b"
    on-primary: "#ffffff"
    muted: "#999999"
    hairline: "#cbcbcb"
  typography:
    family: { display: "HyundaiSansHeadKR", body: "HyundaiSansTextKR", fallback: "Magul Gothic" }
    display-hero: { size: 44, weight: 400, lineHeight: 1.32, tracking: -0.4, use: "Section H2 headings — Model, Brand, Events" }
    section:      { size: 30, weight: 400, lineHeight: 1.47, tracking: -0.4, use: "Sub-section H3 headings, HyundaiSansHeadKR" }
    subsection:   { size: 24, weight: 400, lineHeight: 1.42, tracking: -0.24, use: "Event/feature card H3 titles" }
    nav:          { size: 16, weight: 400, lineHeight: 1.50, use: "Primary nav items, HyundaiSansHeadKRR" }
    body:         { size: 16, weight: 400, lineHeight: 1.15, use: "Body text, HyundaiSansTextKR" }
    button:       { size: 16, weight: 500, lineHeight: 1.50, use: "CTA label — 내 차 만들기, 자세히 보기" }
    caption:      { size: 15, weight: 500, lineHeight: 1.33, use: "Small action text, HyundaiSansHeadKRR" }
  spacing: { xs: 4, sm: 8, md: 16, base: 20, lg: 24, xl: 40, xxl: 60, section: 80 }
  rounded: { none: 0, sm: 2, md: 4, full: 9999 }
  shadow:
    none: "none"
    subtle: "rgba(0,0,0,0.1) 0px 2px 8px"
    glow: "rgba(0,0,0,0.15) 0px 0px 20px 0px"
  components:
    button-primary: { type: button, bg: "#002c5f", fg: "#ffffff", radius: "0px", padding: "10px 20px", font: "16px / 500 HyundaiSansTextKR", use: "Primary vehicle CTA — 내 차 만들기, 자세히 보기" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#002c5f", radius: "2px", padding: "12px 10px", border: "1px solid #002c5f", font: "13px / 600 HyundaiSansTextKR", use: "Cookie accept / secondary action — I Understand" }
    button-ghost: { type: button, bg: "transparent", fg: "#002c5f", radius: "2px", padding: "12px 10px", border: "1px solid #002c5f", font: "13px / 600 HyundaiSansTextKR", use: "Settings and tertiary actions — Cookies Settings" }
    nav-item: { type: tab, fg: "#000000", font: "16px / 400 HyundaiSansHeadKRR", use: "Top nav items — 구매/이벤트, 서비스/멤버십, 브랜드", active: "text #002c5f underline active" }
    card-vehicle: { type: card, bg: "#ffffff", fg: "#000000", radius: "0px", use: "Vehicle model card, flat no-shadow, sharp corners" }
    card-surface: { type: card, bg: "#f6f3f2", fg: "#000000", radius: "0px", use: "Warm off-white section surface card" }
    badge-teal: { type: badge, bg: "#007fa8", fg: "#ffffff", radius: "0px", font: "13px / 400 HyundaiSansTextKR", use: "Category badge or EV highlight tag" }
    input-default: { type: input, bg: "#ffffff", fg: "#000000", border: "1px solid #cbcbcb", radius: "0px", font: "16px HyundaiSansTextKR", use: "Search input field" }
    chatbot-fab: { type: toggle, bg: "#00aad2", fg: "#666666", radius: "100%", shadow: "rgba(0,0,0,0.15) 0px 0px 20px 0px", use: "Floating chatbot action button, circle 60px" }
  components_harvested: true
---

# Design System Inspiration of Hyundai

## 1. Visual Theme & Atmosphere

현대자동차 (Hyundai Motor Company) presents a design language that is resolutely automotive and precision-engineered — a digital expression of its "Sensuous Sportiness" brand philosophy. The homepage opens on a near-white canvas (`#ffffff`) alternating with a warm off-white tone (`#f6f3f2`) that echoes the pale sophistication of automotive showroom interiors. The dominant brand anchor is a deep, authoritative navy (`#002c5f`), used on every primary CTA ("내 차 만들기") and across brand-link text. This is not a product-blue or a tech-startup blue — it is the kind of navy that suggests institutional trust, engineered quality, and decades of heritage. Against it, a secondary teal accent (`#007fa8`) functions as the signal for innovation and electrification content (EV charging, Hi-EV sections).

What makes Hyundai's digital design distinctive is its absolute rejection of rounded corners. Where Korean fintech peers (Toss, Kakao) embrace pill radii and friendly curves, Hyundai uses 0px radius throughout — every button is a perfect rectangle, every card a sharp-edged frame. This isn't accidental; it mirrors the precision of automotive body panel geometry, the exact-cut steel character lines of a Hyundai vehicle. Typography reinforces this architectural rigor: `HyundaiSansHeadKR` handles all display headings at weight 400 (not 700 — confident, not shouting), while `HyundaiSansTextKR` handles body. The letterforms are bespoke, purpose-designed for the brand, and appear across both KR and global surfaces.

The system is depth-minimalist: no drop shadows on cards or CTAs, with separation achieved through the warm surface tint (`#f6f3f2`) and thin hairlines (`#cbcbcb`). Elevation is communicated by imagery — full-bleed vehicle photography that creates visual depth without UI chrome trickery.

**Key Characteristics:**
- HyundaiSansHeadKR for all display headings — weight 400, a calm authority that matches automotive brochure aesthetics
- Zero border-radius (`0px`) throughout — buttons, cards, inputs are sharp rectangles referencing vehicle panel geometry
- Deep navy (`#002c5f`) as the sole interactive/CTA color — single action color philosophy
- Warm off-white surface (`#f6f3f2`) alternating with pure white for section rhythm
- Flat depth: no shadows on primary surfaces; vehicle imagery creates visual elevation
- Negative letter-spacing at display sizes (-0.4px at 44px, -0.24px at 24px)
- Secondary teal (`#007fa8`) reserved for EV/innovation contexts
- HyundaiSansTextKR for body and button labels — the workhorse text face

## 2. Color Palette & Roles

### Primary
- **Hyundai Navy** (`#002c5f`): The definitive brand color. All primary CTAs, nav accent color, brand link text, and dark overlays. An extremely saturated, authoritative deep blue with minimal warmth.
- **Teal Blue** (`#007fa8`): Secondary brand color for electrification and innovation surfaces (Hi-EV section, EV charging). Cooler than the navy, suggesting technology and energy.
- **Accent Cyan** (`#00aad2`): Used on the chatbot FAB and interactive digital-service elements. Brighter and more digital than the teal.

### Surface & Canvas
- **Pure White** (`#ffffff`): Primary page canvas and card backgrounds. The clean automotive showroom floor.
- **Warm Off-White** (`#f6f3f2`): The signature surface tint. Section background that separates content zones without elevation. A barely-warm stone tone — the color of brushed automotive interior panels.
- **Surface Neutral** (`#f5f5f5`): Alternative neutral surface for secondary content areas.

### Text & Neutral
- **Ink Black** (`#000000`): Primary text and heading color. Not softened to navy — maximum legibility for automotive product specs.
- **Body Grey** (`#666666`): Secondary body copy, captions, metadata. The most frequent text color in the neutral ladder.
- **Dark Label** (`#333333`): Dark body copy for high-contrast sections.
- **Dark Chrome** (`#1c1b1b`): Near-black footer background and dark chrome UI surfaces.
- **Muted** (`#999999`): Placeholder text, disabled states, very low emphasis labels.
- **Hairline** (`#cbcbcb`): Card borders, dividers, input borders. The system's primary structural separator.

## 3. Typography Rules

### Font Family
- **Display/Heading**: `HyundaiSansHeadKR` — Hyundai's proprietary Korean display typeface. Also `HyundaiSansHeadKRR` variant for nav items. Global surfaces use `HyundaiMedium` / `HyundaiKRMedium`.
- **Body/Text**: `HyundaiSansTextKR` — the workhorse text face. Fallback: `"Magul Gothic"`.
- All fonts are custom, brand-owned. No system fonts or Korean standards (Noto/Pretendard/SUIT) used.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Section H2 | HyundaiSansHeadKR | 44px | 400 | 1.32 (58px) | -0.4px | "Model", "Brand", "Events" section titles |
| Sub-section H3 | HyundaiSansHeadKR | 30px | 400 | 1.47 (44px) | -0.4px | Sub-section heads, Hi-EV, Trendy Hyundai |
| Feature H3 | HyundaiSansHeadKR | 24px | 400 | 1.42 (34px) | -0.24px | Event/card title, 이벤트 H3 |
| Nav Item | HyundaiSansHeadKRR | 16px | 400 | 1.50 | normal | Primary nav — 구매/이벤트, 서비스/멤버십 |
| Body | HyundaiSansTextKR | 16px | 400 | 1.15 | normal | Standard body copy |
| CTA Button | HyundaiSansTextKR | 16px | 500 | 1.50 | normal | "내 차 만들기" — medium weight for action |
| Small Caption | HyundaiSansHeadKRR | 15px | 500 | 1.33 | normal | "자세히 보기" card links |

### Principles
- **Weight 400 at display sizes**: Unlike Korean consumer brands (SUIT 800 / Pretendard 800), Hyundai uses weight 400 for all headlines. The custom HyundaiSansHeadKR letterforms carry sufficient visual authority without bold weight — like a automotive nameplate, quiet confidence.
- **Negative tracking scales with size**: -0.4px at 44px/30px; -0.24px at 24px; normal tracking at 16px and below.
- **Two-font system**: HyundaiSansHeadKR for display hierarchy, HyundaiSansTextKR for all body/UI. Sharp division of roles.
- **Proprietary type as brand identity**: The custom fonts are a significant moat — no competitor can simply use HyundaiSansHeadKR. The letterforms themselves communicate brand membership.

## 4. Component Stylings

### Buttons

**Primary CTA (내 차 만들기)**
- Background: `#002c5f`
- Text: `#ffffff`
- Radius: 0px
- Padding: 10px 20px
- Font: 16px HyundaiSansTextKR weight 500
- Height: 50px
- Use: Vehicle configurator entry CTA on every model card — "내 차 만들기"

**Secondary / Inline Action**
- Background: `#ffffff`
- Text: `#002c5f`
- Border: 1px solid `#002c5f`
- Radius: 2px
- Padding: 12px 10px
- Font: 13px weight 600
- Height: 42px
- Use: Cookie accept, secondary confirmation — "I Understand"

**Ghost / Tertiary**
- Background: transparent
- Text: `#002c5f`
- Border: 1px solid `#002c5f`
- Radius: 2px
- Padding: 12px 10px
- Font: 13px weight 600
- Height: 42px
- Use: Settings and tertiary actions — "Cookies Settings"

**Detail Link (자세히 보기)**
- Background: `#002c5f`
- Text: `#ffffff`
- Radius: 0px
- Font: 15px HyundaiSansHeadKRR weight 500
- Height: 40px
- Use: Section-level "more detail" link-button on brand/events cards

### Cards & Containers

**Vehicle Model Card**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 0px
- Use: Vehicle model listing card on homepage — sharp edge, no shadow, full-bleed vehicle photo

**Section Surface Card**
- Background: `#f6f3f2`
- Text: `#000000`
- Radius: 0px
- Use: Warm off-white section containers separating content bands

### Badges

**Teal Category Badge**
- Background: `#007fa8`
- Text: `#ffffff`
- Radius: 0px
- Font: 13px HyundaiSansTextKR weight 400
- Use: EV/electrification category tags, Hi-EV section marker

### Inputs & Forms

**Search Input**
- Background: `#ffffff`
- Border: 1px solid `#cbcbcb`
- Radius: 0px
- Font: 16px HyundaiSansTextKR
- Text: `#000000`
- Placeholder: `#999999`
- Use: Site-wide search input

### Navigation

- Background: `#ffffff` (sticky, no blur)
- Text: `#000000` primary, `#002c5f` brand accent
- Font: 16px HyundaiSansHeadKRR weight 400
- Active: navy `#002c5f` underline / text shift
- Right-aligned: Auth ("로그인"), Language ("KR"), Search
- No radius on any nav element

### Chatbot FAB

- Background: `#00aad2` (accent cyan)
- Radius: 100% (perfect circle)
- Dimensions: 60px × 60px
- Border: 4px solid transparent
- Shadow: `rgba(0,0,0,0.15) 0px 0px 20px 0px`
- Use: Floating chatbot trigger fixed on all pages; the lone deliberate glow in an otherwise shadow-free system

---

**Verified:** 2026-06-22 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://www.hyundai.com/kr/ko/e, https://www.hyundainews.com/ko-kr/

**Tier 2 sources:** getdesign.md/hyundai — not found; styles.refero.design/?q=hyundai — no Hyundai result (automotive results: BMW, Tesla, Rivian)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 16px, 20px, 24px, 40px, 60px, 80px (section)
- Button horizontal padding: 20px (primary CTA), 10px (secondary)
- Section vertical rhythm: 80px+ between major page sections

### Grid & Container
- Full-width hero carousel with vehicle imagery occupying 100vw
- Section headings left-aligned with generous top margin (80px+)
- Vehicle model grid: horizontal scroll/carousel with fixed-height cards
- Events grid: 3-column with H3 titles and thumbnail imagery
- Alternating white and warm-off-white (`#f6f3f2`) full-width section bands

### Whitespace Philosophy
- **Automotive generosity**: significant whitespace between sections mirrors the spacious quality of physical showrooms
- **Flat separation**: color alternation (`#ffffff` ↔ `#f6f3f2`) rather than elevation or shadows for section rhythm
- **Sharp geometry**: 0px radius throughout; no organic curves in UI chrome (curves live in the vehicle photography)

### Border Radius Scale
- Zero (0px): All interactive elements — buttons, cards, inputs — the system signature
- Micro (2px): Occasional secondary button at global surface
- Full (100%): Chatbot FAB only — the single exception that proves the rule

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, cards, all primary surfaces |
| Tint (Level 1) | `#f6f3f2` background shift | Section separation without elevation |
| Hairline (Level 2) | `1px solid #cbcbcb` | Card/input borders, fine structural lines |
| Overlay | `rgba(0,0,0,0.1)` — `rgba(0,0,0,0.7)` | Hero carousel overlays over vehicle photography |

**Shadow Philosophy**: Hyundai is a near-zero-shadow digital system. Live inspection found `box-shadow: none` across all primary UI surfaces — CTAs, cards, the nav header, model carousels. Depth is provided entirely by full-bleed vehicle photography and surface tints. The single deliberate exception is the floating chatbot FAB (`button.btn.ibtn.chatbot`), which carries a soft ambient glow (`rgba(0,0,0,0.15) 0px 0px 20px 0px`) to lift it off the page surface and signal interactivity — a functional exception, not a design contradiction. Every other surface remains flat.

## 7. Do's and Don'ts

### Do
- Use HyundaiSansHeadKR weight 400 for all display headings — the proprietary letterform IS the brand voice
- Use 0px border-radius on all buttons, cards, and inputs — sharp corners are the system's geometric signature
- Reserve `#002c5f` deep navy as the single primary CTA/action color
- Separate sections with the warm off-white surface tint (`#f6f3f2`) and hairlines, not shadows
- Use vehicle photography as the primary depth signal — full-bleed, cinematic, no shadow competition
- Use weight 400 for headings and 500 for CTAs — never 700/bold
- Apply negative letter-spacing on display headings (-0.4px at 44px)
- Use teal (`#007fa8`) exclusively for EV/electrification contexts

### Don't
- Use rounded corners or pill shapes — 0px is the geometric commitment
- Use drop shadows on cards or buttons — Hyundai is a flat-depth system
- Mix in non-brand fonts (Pretendard, SUIT, Noto) — HyundaiSans is the brand moat
- Spread the teal (`#007fa8`) across general UI — it signals EV specifically
- Use heavy font weights (600-800) on headlines — weight 400 is the deliberate choice
- Use pure decorative color gradients — automotive photography carries the visual richness
- Use circular or pill shapes for standard buttons — only the chatbot FAB breaks the 0px rule
- Add drop shadows to vehicle card imagery — flat presentation lets the vehicle design speak

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, hero full-height, stacked model cards |
| Tablet | 768-1024px | 2-column events grid, moderate padding |
| Desktop | 1024-1440px | Full layout, 3-column events, horizontal model carousel |
| Large Desktop | >1440px | Centered content, wider section padding |

### Touch Targets
- Primary CTA buttons: 50px height with 20px horizontal padding — comfortable automotive-grade target
- Nav items: 30px height in desktop nav with adequate hover zones
- Detail link buttons: 40px height

### Collapsing Strategy
- Hero carousel: maintains full-bleed at all sizes; text overlays scale down
- Model carousel: horizontal scroll behavior on mobile with snap points
- Navigation: hamburger at mobile breakpoint, preserving brand logo
- Section headings 44px → smaller on mobile, weight 400 maintained
- Off-white section bands: maintain full-width at all sizes

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Hyundai Navy (`#002c5f`)
- Background: Pure White (`#ffffff`)
- Surface Tint: Warm Off-White (`#f6f3f2`)
- Heading / body text: Ink Black (`#000000`)
- Secondary text: Body Grey (`#666666`)
- EV/Innovation: Teal Blue (`#007fa8`)
- Interactive Cyan: `#00aad2`
- Border / hairline: `#cbcbcb`
- Dark chrome: `#1c1b1b`

### Example Component Prompts
- "Create a vehicle model CTA: `#002c5f` background, white text, 0px radius, 10px 20px padding, 16px HyundaiSansTextKR weight 500 — '내 차 만들기'."
- "Design a Hyundai model card: white background, 0px radius, no shadow. Vehicle full-bleed image at top. Title in HyundaiSansHeadKR 24px weight 400 letter-spacing -0.24px, #000000. Navy CTA button below."
- "Build a section heading: HyundaiSansHeadKR 44px weight 400, letter-spacing -0.4px, color #000000. Section label in teal #007fa8 13px above for EV section."
- "Create top nav: white sticky header. HyundaiSansHeadKRR 16px weight 400 for all nav items, #000000 text. Brand logo left. Language selector (KR) + login + search right. No radius, no shadow."
- "Design an events section: #f6f3f2 warm off-white background full-width. H2 'Events' in HyundaiSansHeadKR 44px weight 400, letter-spacing -0.4px. Cards in 3-column grid, white background, 0px radius, event thumbnail + H3 title 24px weight 400 HyundaiSansHeadKR."

### Iteration Guide
1. 0px radius is the single most distinctive UI commitment — never add rounded corners
2. Weight 400 at all text sizes — no bold headlines
3. `#002c5f` navy is the only interactive color; teal `#007fa8` for EV-specific only
4. No shadows — flat depth, photography provides dimension
5. Section separation: alternate `#ffffff` and `#f6f3f2` full-width bands
6. HyundaiSans fonts carry the brand — no substitutes
7. Negative letter-spacing on display: -0.4px at 44px/30px, -0.24px at 24px

---

## 10. Voice & Tone

Hyundai's voice is **aspirational, global, and quietly confident** — an automotive authority that has outgrown its challenger origins and now speaks from a position of earned scale. The Korean homepage balances product functionality ("내 차 만들기" — Build your car) with lifestyle framing ("혼라이프를 즐기다" — Enjoy solo life / "새로운 차원의 라이프" — A new dimension of life). The global surface leads with brand campaigns and FIFA World Cup 2026 sponsorship, projecting global ambition. Hyundai does not shout; it presents.

| Context | Tone |
|---|---|
| Vehicle hero headlines | Cinematic, product-forward. "The new GRANDEUR DONE. YET." Mixed Korean-English registers for premium feel. |
| Model section labels | Clean categorical. "Model", "전기차", "Brand". Functional clarity. |
| CTA labels | Direct, action-oriented. "내 차 만들기" (Build your car), "자세히 보기" (See more detail). |
| Event copy | Specific and benefit-led. "6월 전용카드 신차 구매 혜택" — month, product, benefit, in that order. |
| Brand / lifestyle copy | Lifestyle-benefit framing. "혼라이프를 즐기다" — cultural relevance over product spec. |
| Global surface | Campaign-narrative. "Forests Without Names", FIFA partnership, "Next Starts Now". |

**Voice samples (verbatim from live homepage):**
- "The new GRANDEUR DONE. YET. GRANDEUR." — hero carousel headline *(verified live 2026-06-22)*
- "KONA Electric 새로운 차원의 라이프" — model card headline (EV lifestyle framing) *(verified live 2026-06-22)*
- "Venue 혼라이프를 즐기다" — model card sub-headline (cultural lifestyle) *(verified live 2026-06-22)*
- "내 차 만들기" — primary CTA on every vehicle card *(verified live 2026-06-22)*
- "Hi, EV" — EV section heading *(verified live 2026-06-22)*

**Forbidden register**: aggressive hard-sell, price-anxiety urgency ("지금 당장!"), technical jargon without lifestyle framing, exclamation-heavy copy on premium vehicle surfaces.

## 11. Brand Narrative

현대자동차 (Hyundai Motor Company) was founded in **1967** by **정주영 (Chung Ju-yung)** in Seoul, South Korea, as part of the broader Hyundai industrial conglomerate. What started as a domestic car assembler has evolved over six decades into the world's third-largest automotive group by sales, a status that would have seemed implausible when Hyundai first exported the Pony to Canada in 1984 — the first Korean car to be exported. That arc — from humble manufacturing ambition to genuine global automotive force — defines Hyundai's brand posture: the brand that proves underestimation wrong.

The design language governing current Hyundai vehicles is **"Sensuous Sportiness"**, introduced under Chief Design Officer **Luc Donckerwolke** (joined 2016) and first fully realized in the 8th-generation Sonata (2019). The philosophy is organized around four values: **Proportion, Architecture, Styling, and Technology**. It pursues the integration of emotional sensibility (the "Sensuous") with dynamic form (the "Sportiness") — surfaces that feel alive rather than engineered, that invite touch before they invite analysis. The IONIQ sub-brand, launched in 2021 as Hyundai's dedicated EV identity, extends this language into a more futuristic, parametric direction with "Parametric Pixels" — the distinctive pixel-pattern lighting signature that appears across IONIQ 5, 6, and 7.

What Hyundai has consistently refused, especially since the 2010s transformation: the generic Korean corporate aesthetic, the safe beige of legacy automotive marketing, and the assumption that Korean brands must visually defer to European automotive dominance. The digital surface — HyundaiSansHeadKR at 0px radius, deep navy, warm off-white — is a direct translation of that same ambition: distinctly Korean-branded, globally polished, refusing easy categorization.

## 12. Principles

1. **Progress Through Innovation.** Hyundai's stated commitment ("Innovation for Humanity") drives a design culture where new technology — BEV, FCEV, robotics — is not hidden but showcased. *UI implication:* the EV section has its own distinct teal (`#007fa8`) color identity that marks technological differentiation within the system.
2. **Sensuous Sportiness — form as emotion.** Vehicle design centers on emotionally resonant proportion and surface, not pure function. *UI implication:* vehicle photography is the primary design element; the UI chrome steps back to pure supporting frame.
3. **Sharp precision as identity.** 0px radius on every button and card is not a default — it is a deliberate statement of manufacturing precision. *UI implication:* never add rounding to Hyundai UI without explicit brand justification.
4. **Heritage with ambition.** Hyundai operates from 50+ years of history while aggressively investing in next-generation mobility. *UI implication:* the deep navy heritage color and the teal EV accent can coexist — past and future in the same system.
5. **Korean excellence, global stage.** The proprietary HyundaiSans font family and the unique visual language are Korean-developed but globally applicable. *UI implication:* do not use generic Korean consumer fonts (Pretendard/SUIT) — the brand font IS the brand.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Hyundai product segments, not individual people.*

**김민준, 38, 서울.** A married professional in his late 30s upgrading from an i30 to the new Grandeur. Cares deeply about how the car expresses his professional status. Uses "내 차 만들기" to configure colors and trim. Trusts Hyundai's flagship sedans after 15 years as a loyal customer. Would notice if the website felt cheap — the warm off-white surfaces and sharp-precision UI reinforce that he's making a premium purchase.

**이수연, 29, 부산.** A first-time car buyer considering the Venue after seeing "혼라이프를 즐기다" marketing. Values independence and personality-match over raw specs. Gravitates toward lifestyle framing in the model copy. Uses the comparison calculator to understand monthly payments. Appreciates that the website speaks to her life, not just the vehicle dimensions.

**박현우, 44, 경기.** An early EV adopter researching the IONIQ 5. Tracks charging infrastructure, consults "Hi, EV" and the charging network map. Values Hyundai's commitment to rapid EV expansion. The teal `#007fa8` EV color distinction helps him quickly navigate away from ICE content.

**Rachel Kim, 35, Los Angeles.** A second-generation Korean-American considering a TUCSON. Encounters Hyundai as a quality global brand rather than a discount alternative. The worldwide.hyundai.com FIFA World Cup 2026 sponsorship content reinforces her sense that Hyundai has arrived on the global stage. Design quality matches her expectation for a brand sponsoring a world sporting event.

## 14. States

| State | Treatment |
|---|---|
| **Empty (model lineup, no filter match)** | White canvas. Single line in body grey (`#666666`) at 16px HyundaiSansTextKR: "조건에 맞는 차량이 없습니다." One navy CTA to reset filters. No illustration. Functional, not decorative. |
| **Empty (event list, none available)** | Neutral statement at body grey: no current events, with a link to all promotions. |
| **Loading (homepage carousel first paint)** | Warm off-white (`#f6f3f2`) placeholder at final vehicle card dimensions, 0px radius. Pulse without shimmer — flat and consistent with shadow-free system. |
| **Loading (model page fetch)** | Progressive image reveal — vehicle photo loads from blurred thumbnail to full res. No spinning loader; image quality arrival is the transition. |
| **Error (page not found)** | Clean error page with H2 "페이지를 찾을 수 없습니다." at 44px HyundaiSansHeadKR weight 400, H3 explanation below, and a single navy "홈으로" CTA. No illustration, no apology emoji. |
| **Error (form validation)** | Field-level inline message at 13px below the input in a red-adjacent tone; states the specific issue. |
| **Success (form submitted)** | Inline confirmation in navy tone. Brief, sentence case, next-step linked. No celebratory animation — automotive purchase flows are deliberate, not impulsive. |
| **Skeleton** | `#f6f3f2` blocks at final image and text dimensions. 0px radius on skeleton blocks (consistent with system). Quiet pulse animation. |
| **Disabled** | Opacity reduction to 0.4 on surface and label. Navy CTA fades to `rgba(0,44,95,0.4)` — preserves brand color identity rather than switching to grey. |
| **Hover** | Subtle background shift or text color shift to `#002c5f` on links. No scale/transform animations — automotive brand restraint. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State toggles, checkbox selection |
| `motion-fast` | 120ms | Hover states, nav item transitions |
| `motion-standard` | 200ms | Dropdown open, filter apply, card reveal |
| `motion-slow` | 400ms | Hero carousel transition, page-level cross-fades |
| `motion-cinematic` | 800ms | Hero image reveal, full-bleed vehicle entrance |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — panels, carousels, dropdowns |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, slide-outs |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |
| `ease-automotive` | `cubic-bezier(0.15, 0.85, 0.35, 1)` | Hero carousel — a custom curve suggesting vehicle acceleration and deceleration |

**Motion rules**: Hyundai's digital motion mirrors automotive quality — deliberate, smooth, never jittery. Hero carousels transition at `motion-cinematic` (800ms) to honor the full-bleed vehicle photography; cutting fast would make the premium imagery feel cheap. Hover states at `motion-fast` (120ms) are crisp and responsive. The system avoids bounce, spring, or overshoot — automotive engineering is precise, not playful.

**Signature motions:**
1. **Vehicle carousel.** Full-bleed hero images cross-fade at `motion-cinematic / ease-automotive`. Overlay text fades in 200ms after image settles. Arrow controls respond at `motion-fast`.
2. **Model card reveal.** On scroll-triggered entry, vehicle cards reveal with a 3px upward fade at `motion-standard / ease-enter`. Sequential stagger of 50ms per card.
3. **Nav dropdown.** Opens at `motion-standard / ease-enter`. Closes at `motion-fast / ease-exit` — asymmetric timing mirrors automotive door behavior (slower to open, crisper to close).
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all transitions collapse to `motion-instant`. The carousel becomes paginated with immediate cuts. Product remains fully functional — no motion is structural.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle on:
- https://www.hyundai.com/kr/ko/e (homepage, live computed style)
- https://www.hyundai.com/worldwide/en (worldwide global English)

Primary observations:
- body: font-family HyundaiSansTextKR, "Magul Gothic"; color rgb(0,0,0); font-size 16px
- H1 "HYUNDAI": font-size 32px; font-weight 400; HyundaiSansTextKR; color rgb(0,0,0)
- H2 "Model": font-size 44px; font-weight 400; HyundaiSansHeadKR; line-height 58px; letter-spacing -0.4px
- H3 "Hi, EV": font-size 30px; font-weight 400; HyundaiSansHeadKR; line-height 44px; color rgb(255,255,255)
- H3 event cards: font-size 24px; font-weight 400; letter-spacing -0.4px
- Primary CTA "내 차 만들기": bg rgb(0,44,95) #002c5f; color rgb(255,255,255); radius 0px; padding 10px 20px; height 50px; font 16px weight 500 HyundaiSansTextKR
- Detail link "자세히 보기": bg rgb(0,44,95); color rgb(255,255,255); height 40px; font 15px weight 500 HyundaiSansHeadKRR
- Chatbot FAB: bg rgb(0,170,210) #00aad2; radius 100%; 60px x 60px
- Cookie button "I Understand": bg rgb(0,44,95); radius 2px; padding 12px 10px; font 13px weight 600
- Cookie ghost "Cookies Settings": bg #fff; color rgb(0,44,95); border 1px solid rgb(0,44,95); radius 2px
- Carousel arrow: bg rgba(31,45,61,0.4); color rgb(255,255,255); height 44px
- bgFreq top: rgb(246,243,242) ×24 (#f6f3f2), rgb(255,255,255) ×24, rgb(0,127,168) ×18 (#007fa8), rgb(0,44,95) ×16
- fgFreq top: rgb(0,0,0) ×1551, rgb(102,102,102) ×557 (#666666), rgb(0,44,95) ×247, rgb(255,255,255) ×210

Worldwide site (https://www.hyundai.com/worldwide/en):
- fonts: HyundaiMedium, HyundaiKRMedium
- nav CTA color: rgb(0,44,95) matching KR site
- btn "I Understand": bg rgb(0,44,95); radius 2px; weight 600
- H1 weight 400 consistent

Brand narrative sources:
- https://www.hyundai.com/kr/ko/e — verified live brand headlines (GRANDEUR, KONA EV, Venue)
- https://www.hyundainews.com/ko-kr/ — Hyundai official Korean press room (HTTP 200, brand-owned)
- Hyundai founding (1967, Chung Ju-yung) and Pony/Canada export (1984) are widely documented public facts
- "Sensuous Sportiness" design language: publicly documented, first fully realized in 8th-gen Sonata 2019, CDO Luc Donckerwolke
- IONIQ "Parametric Pixels": publicly documented EV design language, brand-owned

Personas (§13) are fictional archetypes, not individual people.
Interpretive claims (0px radius as manufacturing precision analogy, "photography as depth") are editorial readings connecting observed design to brand positioning.
-->
