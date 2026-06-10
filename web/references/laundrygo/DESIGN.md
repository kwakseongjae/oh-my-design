---
id: laundrygo
name: LaundryGo
display_name_kr: 런드리고
country: KR
category: consumer-tech
homepage: "https://www.laundrygo.com"
primary_color: "#0ac290"
logo:
  type: favicon
  slug: "https://www.laundrygo.com/wp-content/uploads/2022/12/favicon_web.png"
verified: "2026-06-11"
added: "2026-06-11"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-11"
  note: "primary = live CTA + eyebrow-label green (#0ac290), a down-toned mint introduced in the 2022 rebrand for trustworthiness; blue accent (#0170b9) appears in stat/data text; warm-grey ladder (#dfdfdf muted button, #ecebdc beige surface) is the documented sub-color. Pretendard for web body/UI; '런드리고딕체' is the brand's proprietary display typeface."
  colors:
    primary: "#0ac290"
    blue-accent: "#0170b9"
    ink: "#000000"
    ink-soft: "#3a3a3a"
    body: "#4b4b4b"
    muted: "#60646a"
    muted-alt: "#888c8e"
    faint: "#b5bcc0"
    canvas: "#ffffff"
    surface: "#f8f9fa"
    beige: "#ecebdc"
    hairline: "#dfdfdf"
    near-black: "#181b1e"
    on-primary: "#ffffff"
  typography:
    family: { display: "런드리고딕체", body: "Pretendard" }
    display-hero:  { size: 62, weight: 600, lineHeight: 1.00, use: "Dark-hero headline, Pretendard SemiBold" }
    section:       { size: 45, weight: 600, lineHeight: 1.44, use: "Section titles, Pretendard SemiBold" }
    subsection:    { size: 35, weight: 700, lineHeight: 1.00, use: "Sub-headline / statement, Pretendard Bold" }
    eyebrow:       { size: 18, weight: 700, lineHeight: 1.00, use: "Green section eyebrow label (Vision, Growth, Quality)" }
    card-title:    { size: 24, weight: 600, lineHeight: 1.67, use: "Service/card titles" }
    nav:           { size: 17, weight: 500, lineHeight: 1.40, use: "Top-level nav item" }
    nav-sub:       { size: 14, weight: 400, lineHeight: 1.50, use: "Sub-nav / footer link" }
    body:          { size: 16, weight: 400, lineHeight: 1.40, use: "Standard reading text, Pretendard" }
    button:        { size: 17, weight: 700, lineHeight: 1.40, use: "Primary CTA label" }
  spacing: { xs: 4, sm: 8, md: 15, base: 16, lg: 30, xl: 40, xxl: 72, section: 96 }
  rounded: { sm: 10, md: 14, lg: 20, full: 9999 }
  shadow:
    cta: "rgba(0,0,0,0.15) 0px 14px 29px 0px"
  components:
    button-primary: { type: button, bg: "#0ac290", fg: "#ffffff", radius: "10px", padding: "0 40px", font: "17px / 700 Pretendard", height: "52px", use: "Primary CTA (채용공고 보러가기, 문의하기)" }
    button-emphasis: { type: button, bg: "#0ac290", fg: "#ffffff", radius: "14px", font: "24px / 700 Pretendard", height: "76px", shadow: "rgba(0,0,0,0.15) 0px 14px 29px 0px", use: "Large emphasis CTA (B2B·대량세탁 문의, 상담 문의하기)" }
    button-muted: { type: button, bg: "#dfdfdf", fg: "#60646a", radius: "10px", padding: "15px 30px", font: "17px / 500 Pretendard", height: "52px", use: "Secondary / neutral action (웹사이트)" }
    nav-link: { type: tab, fg: "#000000", font: "17px / 500 Pretendard", use: "Top nav item", active: "green #0ac290 text on active" }
    eyebrow-badge: { type: badge, fg: "#0ac290", font: "18px / 700 Pretendard", use: "Green section eyebrow label above section heads" }
    service-card: { type: card, bg: "#ffffff", fg: "#000000", radius: "20px", use: "Service summary card (런드리고 / 런드리24 / 호텔&비즈니스)" }
    stat-block: { type: listItem, fg: "#ffffff", font: "23px / 700 Pretendard", use: "Growth metric block on dark band (회원 수, 누적 세탁량)" }
  components_harvested: true
---

# Design System Inspiration of LaundryGo

## 1. Visual Theme & Atmosphere

LaundryGo (런드리고), the flagship contactless mobile-laundry service of 의식주컴퍼니 (Uisikju Company), presents a clean, confident, infrastructure-grade brand surface. The canvas is pure white (`#ffffff`) broken by full-bleed dark photographic hero bands where large Pretendard headlines sit in white (`#ffffff`) over imagery of folded laundry and logistics. Text on light sections is near-black (`#000000`) softening to slate greys, giving the page a calm, trustworthy weight rather than a hard-sell consumer-app shout. The single saturated brand color is a down-toned mint green (`#0ac290`) — introduced in the 2022 rebrand specifically to trade neon attention-grabbing for trust — and it is reserved almost exclusively for two jobs: the green eyebrow labels that announce each section (Vision, Our Business, Growth, Quality) and the primary call-to-action buttons.

The typographic personality is large, declarative, and Korean-premium. Hero statements run in Pretendard SemiBold (weight 600) at 62px ("의식주 생활의 혁신을 만들어 갑니다."), with section heads at 45px / 600 and bold statement lines at 35px / 700. Body and UI text drop to Pretendard at 16px / weight 400, the de-facto Korean product font optimized for dense hangul legibility. The brand also ships a proprietary display typeface, "런드리고딕체," developed during the rebrand so the logotype and headline voice feel custom — its strokes are designed to evoke the soft texture of laundry. The split is consistent: heavy, large display where it persuades; quiet, dense Pretendard where it informs.

What distinguishes LaundryGo from typical app-marketing sites is its restraint and its infrastructure framing. There is almost no decorative elevation — separation comes from alternating white and dark photographic bands plus thin `#dfdfdf` hairlines and a warm-grey/beige surface (`#ecebdc`); shadow appears only as a single soft drop (`rgba(0,0,0,0.15) 0px 14px 29px`) under the largest emphasis CTAs. Geometry is gently rounded: 10px on standard buttons, 14px on emphasis CTAs, ~20px on service cards. A secondary blue (`#0170b9`) surfaces in data/stat text. The result reads as a calm, engineered consumer-tech brand that positions laundry as a logistics platform, not a chore.

**Key Characteristics:**
- Down-toned mint green (`#0ac290`) reserved for green section eyebrow labels and primary CTAs — the system's single "action/brand" color
- Pretendard for all web body and headline text; "런드리고딕체" proprietary display typeface for logotype/brand voice
- Large declarative headlines — 62px/600 hero, 45px/600 section, 35px/700 statement
- Near-black (`#000000`) text on white sections; white (`#ffffff`) headlines on dark photographic hero bands
- Near-flat depth: alternating white/dark bands + `#dfdfdf` hairlines + `#ecebdc` beige surface; one soft drop shadow only on big CTAs
- Gently rounded geometry — 10px buttons, 14px emphasis CTAs, ~20px cards
- Cool-grey text ladder (`#4b4b4b` → `#60646a` → `#888c8e` → `#b5bcc0`) for hierarchy
- Blue accent (`#0170b9`) for data/stat text

## 2. Color Palette & Roles

### Primary
- **LaundryGo Green** (`#0ac290`): Primary brand color — CTA button backgrounds and the green section eyebrow labels (Vision, Our Business, Growth, Quality). A down-toned mint introduced in the 2022 rebrand to signal trust and the fresh, clean mood of finished laundry. The system's single "action" color.
- **Pure Black** (`#000000`): Primary text and heading color on white sections. Used directly (not a softened navy) for maximum-contrast headlines and body.
- **Pure White** (`#ffffff`): Page background, card surfaces, and headline/CTA text on dark hero bands.

### Accent
- **Accent Blue** (`#0170b9`): Secondary accent used in data/stat and select link text — a calm corporate blue that supports the green without competing as a CTA color.

### Neutral & Surface
- **Surface Grey** (`#f8f9fa`): Faint cool-grey tinted surface for alternating content blocks.
- **Beige** (`#ecebdc`): Warm-grey/beige surface — the documented rebrand "웜그레이" sub-color for warmer section backgrounds.
- **Hairline** (`#dfdfdf`): Thin borders, dividers, and the muted/neutral button background — the primary separation device in this near-flat system.
- **Near-Black** (`#181b1e`): Deep near-black background for occasional dark chrome and footer-adjacent blocks.

### Text Hierarchy
- **Ink** (`#000000`): Primary text, headings, nav.
- **Ink Soft** (`#3a3a3a`): Softer heading/label tone for secondary headings.
- **Body Slate** (`#4b4b4b`): Secondary body copy and descriptions.
- **Muted Slate** (`#60646a`): Tertiary text and muted button label.
- **Muted Alt** (`#888c8e`): Captions, fine print, company-info lines.
- **Faint Blue-Grey** (`#b5bcc0`): Lowest-emphasis labels, disabled/placeholder text.

## 3. Typography Rules

### Font Family
- **Display/Brand**: `런드리고딕체` — the brand's proprietary typeface developed in the 2022 rebrand; strokes designed to evoke the soft texture of laundry, connected to the logotype.
- **Web body/UI**: `Pretendard` (with `sans-serif` fallback) — the document default for all headlines, nav, and body on the web surface; SemiBold (600) and Bold (700) at display sizes, 400 for reading text.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Pretendard | 62px (3.88rem) | 600 | 1.00 (62px) | White headline on dark hero band |
| Section Heading | Pretendard | 45px (2.81rem) | 600 | 1.44 (65px) | Section statements |
| Statement | Pretendard | 35px (2.19rem) | 700 | 1.00 (35px) | Bold value statements on dark bands |
| Card Title | Pretendard | 24px (1.50rem) | 600 | 1.67 (40px) | Service/card titles |
| Stat Block | Pretendard | 23px (1.44rem) | 700 | 1.00 (23px) | Growth metric labels |
| Eyebrow Label | Pretendard | 18px (1.13rem) | 700 | 1.00 (18px) | Green section eyebrow (`#0ac290`) |
| Nav (top) | Pretendard | 17px (1.06rem) | 500 | 1.40 | Top-level nav item |
| Button | Pretendard | 17px (1.06rem) | 700 | 1.40 | Primary CTA label |
| Body | Pretendard | 16px (1.00rem) | 400 | 1.40 (22.4px) | Standard reading text |
| Nav (sub) / Footer | Pretendard | 14px (0.88rem) | 400 | 1.50 | Sub-nav and footer links |

### Principles
- **Large, declarative display**: Pretendard 600–700 at 35–62px carries every headline; the scale is bold and confident, framing laundry as serious infrastructure.
- **One quiet body weight**: Pretendard 400 at 16px carries paragraphs and dense UI — the weight contrast between display and body is the primary hierarchy signal.
- **Green eyebrow rhythm**: small green (`#0ac290`) 18px/700 eyebrow labels announce sections in English (Vision, Growth, Quality) above large Korean heads — a consistent editorial cadence.
- **Proprietary display, ubiquitous body**: "런드리고딕체" owns the brand/logotype voice; Pretendard owns everything functional. They never swap roles.

## 4. Component Stylings

### Buttons

**Primary CTA**
- Background: `#0ac290`
- Text: `#ffffff`
- Radius: 10px
- Padding: 0px 40px
- Font: 17px / 700 / Pretendard
- Height: 52px
- Use: Primary action ("채용공고 보러가기", "문의하기")

**Emphasis CTA**
- Background: `#0ac290`
- Text: `#ffffff`
- Radius: 14px
- Font: 24px / 700 / Pretendard
- Height: 76px
- Shadow: `rgba(0,0,0,0.15) 0px 14px 29px 0px`
- Use: Large emphasis call-to-action ("B2B·대량세탁 문의", "상담 문의하기")

**Muted / Neutral**
- Background: `#dfdfdf`
- Text: `#60646a`
- Radius: 10px
- Padding: 15px 30px
- Font: 17px / 500 / Pretendard
- Height: 52px
- Use: Secondary neutral action ("웹사이트")

### Inputs & Forms
- Background: `#ffffff`
- Border: 1px solid `#dfdfdf`
- Radius: 10px
- Text: `#000000`
- Placeholder: `#b5bcc0`
- Use: Contact/inquiry form fields (B2B 문의 surfaces)

### Cards & Containers

**Service Card**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 20px
- Use: Service summary card (런드리고 / 런드리24 / 호텔&비즈니스 / EPC)

**Beige Surface**
- Background: `#ecebdc`
- Text: `#000000`
- Radius: 20px
- Use: Warm-grey content block for softer sections

### Badges

**Green Eyebrow**
- Text: `#0ac290`
- Font: 18px / 700 / Pretendard
- Use: Section eyebrow label above heads (Vision, Our Business, Growth, Quality)

### Navigation
- Background: `#ffffff`
- Text: `#000000`
- Font: 17px / 500 / Pretendard (top-level); 14px / 400 (sub-nav)
- Active: green `#0ac290` text on active item
- Use: Top horizontal nav (회사소개 / 비즈니스 / 컬쳐 / 채용) with sub-items (비전, 성장, 언론, 런드리고)

### Stat Blocks
- Text: `#ffffff`
- Font: 23px / 700 / Pretendard
- Use: Growth metric labels on dark band (회원 수, 누적 세탁량, 누적 주문수, 누적 투자액)

---

**Verified:** 2026-06-11
**Tier 1 sources:** https://www.laundrygo.com, https://www.laundrygo.com/business/
**Tier 2 sources:** none available (getdesign.md/laundrygo not found; styles.refero.design has no LaundryGo style page — KR brand, no Western-catalog coverage)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~8px, with frequent 4/8/15/16/30/40/72px steps
- Notable: generous large gaps (72px+) between full-width bands give the page an airy, editorial rhythm; CTA padding lands at 30–40px horizontal for comfortable hit areas

### Grid & Container
- Full-width alternating bands: white (`#ffffff`) content sections alternate with dark photographic hero bands carrying white headlines
- Centered single-column hero with the large Pretendard statement as the anchor
- Service offerings (런드리고 / 런드리24 / 호텔&비즈니스 / EPC) arranged as a row of `~20px`-radius cards
- Growth metrics shown as a horizontal row of stat blocks on a dark band

### Whitespace Philosophy
- **Breathing room over density**: despite being a logistics-heavy product, the marketing surface is airy with generous vertical rhythm between bands.
- **Band-based segmentation**: sections separate by alternating white vs dark photographic backgrounds (and the `#ecebdc` beige surface), not by heavy borders.
- **Restrained accent**: green (`#0ac290`) appears only as eyebrow labels and CTAs, training the eye to read it as "the brand / the action."

### Border Radius Scale
- Small (10px): standard buttons, inputs
- Medium (14px): emphasis CTAs
- Large (~20px): service cards, content containers
- Full (9999px): pills where used

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f8f9fa` / `#ecebdc` background shift | Section separation without elevation |
| Hairline (Level 2) | `1px solid #dfdfdf` border | Card outlines, dividers, muted button fill |
| Drop (Level 3) | `rgba(0,0,0,0.15) 0px 14px 29px 0px` | Largest emphasis CTAs only |

**Shadow Philosophy**: LaundryGo is a near-flat system. Live inspection found `box-shadow: none` across the hero, nav, headings, cards, and standard buttons — depth and grouping are communicated through alternating white/dark photographic bands, the warm-grey `#ecebdc` surface, and thin `#dfdfdf` hairlines. The one exception is a single soft drop shadow (`rgba(0,0,0,0.15) 0px 14px 29px`) reserved for the largest green emphasis CTAs, lifting the primary action just enough to feel tappable. When emphasis is needed elsewhere, the system reaches for the green (`#0ac290`) or a dark band, never decorative elevation.

## 7. Do's and Don'ts

### Do
- Use the down-toned green (`#0ac290`) for primary CTAs and section eyebrow labels — it is the single brand/action color
- Use Pretendard for all web headlines and body; reserve "런드리고딕체" for logotype/brand voice
- Set headlines large and bold — 62px/600 hero, 45px/600 section, 35px/700 statements
- Put white headlines on dark photographic hero bands; near-black (`#000000`) text on white sections
- Separate sections with alternating white/dark bands, the `#ecebdc` beige surface, and `#dfdfdf` hairlines — not heavy shadows
- Use the green 18px/700 eyebrow label above section heads (Vision, Growth, Quality)
- Keep geometry gently rounded — 10px buttons, 14px emphasis CTAs, ~20px cards
- Reserve the single soft drop shadow for the largest emphasis CTAs only

### Don't
- Spread the green across many elements — it dilutes the single-action/brand signal
- Use neon green — the rebrand deliberately down-toned it for trustworthiness
- Set body copy in the proprietary display typeface — Pretendard owns functional text
- Use heavy drop shadows on cards or standard buttons — the system is near-flat
- Use the accent blue (`#0170b9`) as a CTA color — green is the only action color
- Use small, timid headlines — display is large and declarative
- Add a second saturated accent hue — green is the only brand color, blue is a quiet data accent

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, cards stack, nav collapses |
| Tablet | 640-1024px | Moderate padding, 2-up service cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column service/stat rows |

### Touch Targets
- Primary CTAs at 52px height with 30–40px horizontal padding — comfortably tappable
- Emphasis CTAs at 76–85px height for unmistakable targets
- Nav links spaced for touch within the top header

### Collapsing Strategy
- Hero: 62px Pretendard headline scales down on mobile, weight 600 maintained
- Service cards: multi-column → stacked single column
- Growth stat blocks: horizontal row → wrapped/stacked grid
- Alternating white/dark bands maintain full-width treatment

### Image Behavior
- Dark photographic hero bands retain white headline treatment at all sizes
- Service-card imagery maintains `~20px` radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / brand: LaundryGo Green (`#0ac290`)
- Accent (data/links): Blue (`#0170b9`)
- Background: Pure White (`#ffffff`)
- Tinted surface: Surface Grey (`#f8f9fa`)
- Warm surface: Beige (`#ecebdc`)
- Heading / body text: Ink (`#000000`)
- Secondary text: Body Slate (`#4b4b4b`)
- Muted text: Muted Slate (`#60646a`) / Muted Alt (`#888c8e`)
- Faint / disabled: Faint Blue-Grey (`#b5bcc0`)
- Hairline / muted button: `#dfdfdf`

### Example Component Prompts
- "Create a hero on a dark photographic band. Headline at 62px Pretendard weight 600, line-height 1.0, white. Above the section title a green eyebrow label: 18px Pretendard weight 700, #0ac290 ('Vision'). One green CTA: #0ac290 background, white text, 10px radius, 0 40px padding, 17px Pretendard weight 700, 52px height."
- "Design a service card: white background, ~20px radius, no shadow. Title 24px Pretendard weight 600, #000000. Body 16px Pretendard weight 400, #4b4b4b."
- "Build a large emphasis CTA: #0ac290 background, white text, 14px radius, 24px Pretendard weight 700, 76px height, shadow rgba(0,0,0,0.15) 0px 14px 29px."
- "Create top nav: white header. Pretendard 17px weight 500 links, #000000 text, green #0ac290 on active. Sub-nav links 14px weight 400."
- "Build a Growth stat band: dark background, white 23px Pretendard weight 700 metric labels (회원 수, 누적 세탁량) with large numbers above."

### Iteration Guide
1. Green (`#0ac290`) is the single brand/action color — eyebrow labels + CTAs only
2. Pretendard for all web text; large bold display (600–700), quiet 400 body
3. Near-flat — alternating white/dark bands + `#ecebdc` beige + `#dfdfdf` hairlines; one soft shadow on big CTAs only
4. Gently rounded — 10px buttons, 14px emphasis CTAs, ~20px cards
5. Text is `#000000` on white, white on dark hero bands
6. Blue (`#0170b9`) is a quiet data accent, never a CTA
7. Down-toned green, never neon — the rebrand chose trust over attention

---

## 10. Voice & Tone

LaundryGo's voice is **confident, mission-framed, and reassuring** — it positions a mundane chore (laundry) as serious infrastructure and a lever for changing everyday life. The corporate hero "의식주 생활의 혁신을 만들어 갑니다." ("We are building the innovation of clothing-food-housing life") sets the register: declarative, ambitious in scope, calm rather than hype-driven. Service copy is plain and benefit-first — the contactless promise ("저녁 10시 전 런드렛에 넣으면 다음 날 정오 전 수령") is stated as a concrete mechanism, not a slogan.

| Context | Tone |
|---|---|
| Corporate hero | Declarative, mission-framed. "의식주 생활의 혁신을 만들어 갑니다." Ambitious, calm. |
| Section eyebrow labels | Terse English signposts. "Vision", "Our Business", "Growth", "Quality", "Infra". |
| Value statements | Bold, purpose-driven. "세탁 산업의 혁신을 시작으로 의식주 산업 전반의 문제를 찾고 해결합니다." |
| CTAs | Direct, low-pressure. "채용공고 보러가기", "B2B·대량세탁 문의", "상담 문의하기". |
| B2B / hotel copy | Credibility-first, concrete. "국내 유수의 프리미엄 호텔에서 이미 경험하고 있습니다." |

**Voice samples (verbatim from live site):**
- "의식주 생활의 혁신을 만들어 갑니다." — corporate hero headline (mission-framed). *(verified live 2026-06-11)*
- "세탁 산업의 혁신을 시작으로 의식주 산업 전반의 문제를 찾고 해결합니다." — Vision section statement. *(verified live 2026-06-11)*
- "국내 최대 호텔 전문 세탁 서비스, 런드리고 호텔&비즈니스" — B2B hero (scale + category claim). *(verified live 2026-06-11)*

**Forbidden register**: hype-driven superlatives without proof, fear/urgency selling, undefined jargon, exclamation-heavy consumer-app shouting.

## 11. Brand Narrative

LaundryGo (런드리고) is the flagship service of **의식주컴퍼니 (Uisikju Company)**, founded in **2018** by **조성우 (Cho Sung-woo)**, a former corporate-comms professional who had previously led 배민프레시 (Baemin Fresh, the early-morning grocery-delivery service of 우아한형제들). In 2019 the company launched LaundryGo, a contactless mobile-laundry service: a user places garments in a "런드렛" (Laundrette) collection bin before 10pm, and the cleaned laundry is returned by noon the next day — turning a recurring household chore into an on-demand logistics product.

The brand's stated mission is to "make the lives of busy modern people simpler and more abundant" across the full 의(clothing)·식(food)·주(housing) domain — the company name literally encodes that ambition. Its strong conviction, in the founder's framing, is that **innovating laundry will in turn innovate living space** ("세탁이 혁신되면 주거 공간이 혁신될 것"), and that the change to clothing-food-housing life begins with laundry. The vision extends globally — laundry being a universal problem, LaundryGo aims to grow into a global service.

The 2022 rebrand (LaundryGo's third anniversary) made the brand's posture explicit in design: the previously **neon green** identity was deliberately down-toned to a **softer, more trustworthy green**, paired with a **warm-grey** sub-color evoking clean, refined laundry. A proprietary lettermark combines the alphabet **G with an arrow pictogram** (animating like a rotating washing drum in-app), and a custom typeface — "런드리고딕체" — was developed so headline strokes evoke the soft texture of fabric. The values the system encodes: convenient, considerate service; reliability proven through laundry quality; and practicality.

## 12. Principles

1. **Laundry is infrastructure.** LaundryGo frames a chore as a logistics platform — collection bins, smart factories, route delivery. *UI implication:* present the service with infrastructure-grade confidence (large declarative headlines, scale metrics), not consumer-app cuteness.
2. **Trust over attention.** The 2022 rebrand traded neon green for a down-toned green to read as reliable. *UI implication:* keep the green calm and reserved; never let color shout louder than the proof.
3. **One action, one color.** Green (`#0ac290`) means "brand / do this." *UI implication:* reserve the green for eyebrow labels and primary CTAs so the next step and the brand are always legible.
4. **Considerate simplicity.** The promise is a chore removed from the user's day. *UI implication:* copy states concrete mechanisms (drop by 10pm, back by noon) plainly; the interface stays airy and uncluttered.
5. **Bold where it persuades, quiet where it informs.** *UI implication:* large Pretendard 600–700 display for mission/value statements; calm Pretendard 400 body for explanation.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable LaundryGo user segments (busy metro-area professionals, dual-income households, B2B hotel partners), not individual people.*

**김도현, 32, 서울.** A dual-income office worker in a Seoul apartment who never has time to visit a dry cleaner. Drops garments in the 런드렛 bin before bed and has them back by lunch. Chose LaundryGo because the contactless mechanism is reliable and removes a recurring chore without a conversation.

**이서연, 29, 경기.** A renter in a small officetel with no in-home laundry space. Uses LaundryGo and 런드리24 smart laundromats interchangeably. Values that the brand feels trustworthy and modern rather than like a traditional cleaner.

**박준호, 47, 부산.** Operations manager at a premium hotel evaluating B2B linen partners. Reads the 호텔&비즈니스 page for proof points — scale, quality infrastructure, existing premium-hotel clients — before requesting a consultation. Trusts the calm, credibility-first tone.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no order history)** | White canvas. Single Ink (`#000000`) line at body size explaining no orders yet, with one green (`#0ac290`) CTA to start an order. No illustration clutter. |
| **Empty (saved/none yet)** | Muted Slate (`#60646a`) single line: nothing saved yet, plus a path to the service. Calm, honest. |
| **Loading (order/results fetch)** | Skeleton blocks on `#f8f9fa` tinted surface at final card dimensions, ~20px radius. Flat pulse consistent with the near-shadowless system — no shadow shimmer. |
| **Loading (form submit)** | Inline progress within the green CTA; previous content stays visible. |
| **Error (request failed)** | Inline message in Ink with a plain-language explanation and a retry. Never a bare "오류가 발생했습니다" — states the next step. |
| **Error (form validation)** | Field-level message below the input describing what's valid, not just "필수". Ruby-free, calm tone. |
| **Success (order placed / inquiry sent)** | Brief inline confirmation in calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f8f9fa` blocks at final dimensions, ~20px radius, flat pulse. |
| **Disabled** | Faint Blue-Grey (`#b5bcc0`) text on reduced-opacity surface; green actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 200ms | Card/section reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level band transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sections, cards, CTAs |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and steady — consistent with the calm, infrastructure-grade aesthetic. Section content fades in from below at `motion-standard / ease-enter` as photographic bands enter the viewport; CTAs respond to press with a subtle scale/opacity shift. The brand's one signature playful motion is the logo's G-arrow rotating like a washing drum in-app, but on marketing surfaces motion stays restrained — no bounce or spring, signaling reliability over delight. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-11) via playwright getComputedStyle on https://www.laundrygo.com
and https://www.laundrygo.com/business/:
- Corporate hero H2 "의식주 생활의 혁신을 만들어 갑니다." — Pretendard 62px / weight 600 / white
- Vision statement H3 "세탁 산업의 혁신을 시작으로 의식주 산업 전반의 문제를 찾고 해결합니다." — 45px / 600
- Green eyebrow labels "Vision"/"Our Business"/"Growth"/"Quality"/"Infra" — 18px / 700 / rgb(10,194,144) #0ac290
- Primary CTAs "채용공고 보러가기"/"문의하기" — bg rgb(10,194,144) #0ac290 / white / radius 10px / 17px-30px / 700
- Emphasis CTAs "B2B·대량세탁 문의"/"상담 문의하기" — bg #0ac290 / radius 14px / box-shadow rgba(0,0,0,0.15) 0px 14px 29px
- Muted button "웹사이트" — bg rgb(223,223,223) #dfdfdf / color rgb(96,100,106) #60646a / radius 10px
- box-shadow: none across hero/nav/headings/cards/standard buttons (near-flat system)
- document.title: "런드리고 - 모바일 세탁 서비스"

Token-level claims (§1-9) are sourced from this live inspection.

Voice samples (§10) are verbatim from the live site (corporate hero, Vision statement, B2B hero).

Brand narrative (§11): 의식주컴퍼니 founded 2018 by 조성우 (Cho Sung-woo, ex-배민프레시 대표);
LaundryGo launched 2019 as a contactless mobile-laundry service (런드렛 bin, 10pm→next-noon).
2022 rebrand down-toned neon green to a trustworthy green + warm-grey sub-color, G+arrow lettermark,
"런드리고딕체" proprietary typeface. These are publicly documented facts corroborated via WebSearch
(kyeongin.com, techm.kr, forbeskorea, sisajournal) and the Design+ rebrand write-up
(design.co.kr/article/17584, designcompass.org). Mission/vision quotes ("세탁이 혁신되면 주거 공간이
혁신될 것", "삶을 단순하고 윤택하게") are widely reported public statements of the company/founder,
not directly quoted from a verified first-party page in this turn.

Personas (§13) are fictional archetypes informed by publicly observable LaundryGo user segments
(busy metro professionals, small-home renters, B2B hotel partners). Names are illustrative; they do
not refer to real people.

Interpretive claims (e.g., "laundry is infrastructure", "trust over attention") are editorial
readings connecting LaundryGo's observed design and stated rebrand intent to its positioning, not
directly sourced company statements.
-->
