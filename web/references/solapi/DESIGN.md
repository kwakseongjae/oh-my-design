---
id: solapi
name: SOLAPI
display_name_kr: 솔라피
country: KR
category: developer-tools
homepage: "https://solapi.com"
primary_color: "#4541ff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=solapi.com&sz=128"
verified: "2026-06-26"
added: "2026-06-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-26"
  note: "primary = live CTA indigo (#4541ff, rgb 69 65 255) used for every action button and link; appears as an 8% tint surface and a 20%-alpha brand-glow shadow. Two heading-grey eras coexist: legacy marketing greys (#333333 / #222222 / #828282) and a newer slate ladder (#111827 / #64748b) on the developers + pricing surfaces."
  colors:
    primary: "#4541ff"
    primary-light: "#a788ff"
    ink: "#222222"
    heading: "#333333"
    slate-ink: "#111827"
    muted: "#828282"
    slate-muted: "#64748b"
    link: "#2563eb"
    success: "#28c840"
    canvas: "#ffffff"
    surface: "#f8fafc"
    input-bg: "#f9f9f9"
    hairline: "#e5e8eb"
    border-slate: "#e2e8f0"
    code-ink: "#24292f"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Pretendard", mono: "Monaco" }
    display-hero: { size: 64, weight: 800, lineHeight: 1.18, use: "Homepage hero headline, Pretendard ExtraBold" }
    display:      { size: 52, weight: 800, lineHeight: 1.20, use: "Section marketing headlines" }
    headline:     { size: 48, weight: 700, lineHeight: 1.20, use: "Developers section heads" }
    title:        { size: 28, weight: 600, lineHeight: 1.30, use: "Pricing table / sub-section titles" }
    subsection:   { size: 20, weight: 600, lineHeight: 1.30, use: "Feature card heads" }
    body-lg:      { size: 18, weight: 400, lineHeight: 1.55, use: "Lead paragraph / problem statements" }
    body:         { size: 16, weight: 400, lineHeight: 1.55, use: "Standard reading + nav links" }
    button:       { size: 14, weight: 700, lineHeight: 1.00, use: "Header CTA / nav button label" }
    caption:      { size: 13, weight: 400, lineHeight: 1.40, use: "Footer, fine print, utility links" }
    code:         { size: 14, weight: 400, lineHeight: 1.60, use: "SDK snippets, Monaco/Menlo mono" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 28, xl: 32, xxl: 48, section: 64 }
  rounded: { xs: 5, sm: 6, md: 8, base: 12, card: 20, pill: 100, full: 9999 }
  shadow:
    subtle: "rgba(0,0,0,0.05) 0px 1px 2px 0px"
    card: "rgba(0,0,0,0.1) 0px 0px 16px 0px"
    elevated: "rgba(0,0,0,0.1) 0px 8px 32px 0px"
    brand-glow: "rgba(69,65,255,0.2) 0px 0px 20px 0px"
  components:
    button-primary: { type: button, bg: "#4541ff", fg: "#ffffff", border: "1px solid #4541ff", radius: "8px", padding: "14px 32px", height: "50px", font: "17px / 600", states: "header variant radius 5px · developers variant radius 12px", use: "Primary CTA — 시작하기 / 솔라피 가입하기 / 시작하기 →" }
    button-pill-outline: { type: button, bg: "#ffffff", fg: "#4541ff", border: "1px solid #4541ff", radius: "100px", padding: "16px 32px", font: "16px / 800", use: "Enterprise-inquiry pill — 도입 문의하기" }
    button-ghost-outline: { type: button, bg: "#ffffff", fg: "#111827", border: "1px solid #e2e8f0", radius: "8px", padding: "14px 32px", font: "17px / 600", use: "Secondary CTA — 데모 체험하기" }
    input-search: { type: input, bg: "#f9f9f9", fg: "#222222", border: "1px solid #e5e8eb", radius: "14px", padding: "12px 44px", height: "45px", font: "16px / 400", use: "Pricing / docs search field" }
    card-pricing: { type: card, bg: "#f8fafc", fg: "#111827", border: "1px solid #e2e8f0", radius: "10px", shadow: "rgba(0,0,0,0.1) 0px 0px 16px 0px", use: "Pricing + discount-table linked card" }
    card-feature: { type: card, bg: "#ffffff", radius: "20px", shadow: "rgba(69,65,255,0.2) 0px 0px 20px 0px", use: "Feature card, 20px workhorse radius + brand-glow" }
    nav-link: { type: tab, fg: "#222222", font: "16px / 400", active: "text #4541ff on active", use: "Top nav item — 가이드 / SDK / API" }
    code-block: { type: card, bg: "#ffffff", fg: "#24292f", radius: "12px", font: "14px / 400 Monaco", use: "Developers SDK snippet panel" }
    badge-success: { type: badge, bg: "#ffffff", fg: "#28c840", border: "1px solid #e2e8f0", radius: "6px", font: "13px / 700", use: "Status / success indicator pill" }
  components_harvested: true
---

# Design System Inspiration of SOLAPI

## 1. Visual Theme & Atmosphere

SOLAPI (솔라피) is a Korean cloud-messaging API platform — the infrastructure layer that lets developers send SMS, KakaoTalk 알림톡, Naver, and RCS messages and automate CRM flows from a few lines of code. Its design reflects that dual identity: a clean, confident consumer-marketing surface on the homepage and a calmer, slate-toned developer surface on `/developers` and `/pricing`. The canvas is pure white (`#ffffff`) throughout, and the entire system is unified by a single, unusually saturated indigo — SOLAPI Indigo (`#4541ff`) — which carries every primary call-to-action, every active nav link, and even reappears as an 8%-tint feature surface and a 20%-alpha brand-glow shadow. The effect is a product that feels engineered and trustworthy without resorting to the heavy navy-and-grey chrome of legacy enterprise telecom.

Typography is the system's backbone, set almost entirely in **Pretendard** — the de-facto Korean product sans — with a Monaco/Menlo monospace stack reserved for SDK snippets. Headlines run heavy: the homepage hero lands at 64px / weight 800 (ExtraBold) and section headlines at 52px / 800, projecting declarative confidence ("메시지를 보내고, 고객을 남기다"). The developer surface dials this back to weight 700 at 64px and 48px, a slightly quieter register appropriate for a technical audience. Body and UI text sit at a comfortable 16–18px / 400, and the smallest chrome (footer, header CTA) drops to 13–14px. Heading colour is deliberately *not* pure black: the marketing surfaces use a soft `#333333`, body copy uses `#222222`, and secondary text steps down to `#828282`.

A distinguishing trait is that SOLAPI is mid-migration between two grey eras. The original marketing pages lean on the warm grey ladder (`#333333` → `#222222` → `#828282`), while the newer developer and pricing pages adopt a cool Tailwind-style slate ladder — headings in `#111827`, secondary text in slate `#64748b`, inline documentation links in blue (`#2563eb`), surfaces in `#f8fafc`, and hairlines in `#e2e8f0`. Inputs fill to a near-white `#f9f9f9` with a `#e5e8eb` border, code text renders in GitHub-ink `#24292f`, a light-purple accent (`#a788ff`) and a status green (`#28c840`) appear sparingly, and white (`#ffffff`) text rides on every indigo button. Depth is light-touch: a soft `rgba(0,0,0,0.1)` ambient card shadow does most of the work, with the indigo brand-glow reserved for hero feature cards.

**Key Characteristics:**
- Single saturated indigo (`#4541ff`) owns every CTA, link, and active state — the system's one "action" colour
- Pretendard everywhere — ExtraBold (800) for marketing display, weight 700 on the developer surface, 400 for body
- Two coexisting neutral eras: warm marketing greys (`#333333` / `#222222` / `#828282`) and a cool slate ladder (`#111827` / `#64748b`)
- 20px as the dominant card radius, with a pill (100px) reserved for the enterprise-inquiry button
- Light, ambient depth — `rgba(0,0,0,0.1)` card shadow + an indigo brand-glow (`rgba(69,65,255,0.2)`) for hero cards
- Developer surface signals: Monaco code panels in `#24292f`, blue doc links (`#2563eb`), slate surfaces (`#f8fafc`)
- Status green (`#28c840`) and a light-purple accent (`#a788ff`) used sparingly for emphasis
- White (`#ffffff`) page canvas and on-indigo button text throughout

## 2. Color Palette & Roles

### Primary
- **SOLAPI Indigo** (`#4541ff`): The primary brand colour. Fills every primary CTA, colours every link and active nav item, and reappears as an 8% tint and a 20%-alpha glow shadow. A vivid blue-violet that anchors the entire system.
- **Indigo Light** (`#a788ff`): A soft lavender accent used sparingly for decorative highlights and gradient ends.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, card surfaces, and text on indigo/dark fills.
- **Slate Surface** (`#f8fafc`): Cool near-white surface for pricing cards and segmented developer blocks.
- **Input Fill** (`#f9f9f9`): Near-white fill for search and form fields.
- **Hairline** (`#e5e8eb`): Warm light-grey border on legacy controls and inputs.
- **Slate Border** (`#e2e8f0`): Cool light-grey border on developer/pricing cards and secondary buttons.

### Text Hierarchy — marketing (warm)
- **Heading Grey** (`#333333`): Primary heading colour on the homepage and marketing pages — soft, never pure black.
- **Ink** (`#222222`): Default body and nav-link text across the site.
- **Muted** (`#828282`): Tertiary text, captions, and inactive labels.

### Text Hierarchy — developer (cool)
- **Slate Ink** (`#111827`): Heading and strong-label colour on the developers and pricing surfaces.
- **Slate Muted** (`#64748b`): Secondary descriptive text on the cool surfaces.
- **Doc Link Blue** (`#2563eb`): Inline documentation/reference links on the pricing page.
- **Code Ink** (`#24292f`): Monospace code text in SDK snippet panels (GitHub-ink tone).

### Accent & Status
- **Success Green** (`#28c840`): Status, confirmation, and success indicators.
- **On Primary** (`#ffffff`): White label text on every indigo button and dark fill.

## 3. Typography Rules

### Font Family
- **Sans (primary)**: `Pretendard, sans-serif` — the document default for every headline, body, nav, and button label.
- **Monospace**: `Monaco, Menlo, Consolas` — reserved for SDK code snippets on the developer surface.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Pretendard | 64px (4.00rem) | 800 | 1.18 | Homepage hero headline, ExtraBold |
| Display | Pretendard | 52px (3.25rem) | 800 | 1.20 | Section marketing headlines |
| Headline | Pretendard | 48px (3.00rem) | 700 | 1.20 | Developer section heads (quieter weight) |
| Title | Pretendard | 28px (1.75rem) | 600 | 1.30 | Pricing table / sub-section titles |
| Sub-section | Pretendard | 20px (1.25rem) | 600 | 1.30 | Feature card heads |
| Body Large | Pretendard | 18px (1.13rem) | 400 | 1.55 | Lead paragraphs, problem statements |
| Body | Pretendard | 16px (1.00rem) | 400 | 1.55 | Standard reading text + nav links |
| Button | Pretendard | 14px (0.88rem) | 700 | 1.00 | Header CTA / nav button labels |
| Caption | Pretendard | 13px (0.81rem) | 400 | 1.40 | Footer, fine print, utility links |
| Code | Monaco | 14px (0.88rem) | 400 | 1.60 | SDK snippets, monospace |

### Principles
- **One typeface, two weights of voice**: Pretendard carries everything; ExtraBold (800) persuades on marketing, weight 700 informs on the developer surface, 400 reads as body.
- **Heavy display, calm body**: The weight jump from 800 headlines to 400 body is the primary hierarchy signal — there is little reliance on colour for hierarchy.
- **Heading greys, never black**: Display text uses `#333333` (marketing) or `#111827` (developer), never `#000000`, keeping the page warm and approachable.
- **Mono only for code**: The Monaco stack appears exclusively inside SDK snippet panels — code is visually quarantined from prose.

## 4. Component Stylings

### Buttons

**Primary (Indigo)**
- Background: `#4541ff`
- Text: `#ffffff`
- Border: 1px solid `#4541ff`
- Radius: 8px
- Padding: 14px 32px
- Height: 50px
- Font: 17px Pretendard weight 600
- Use: Primary CTA — "솔라피 가입하기", "시작하기"

**Primary (Header / Compact)**
- Background: `#4541ff`
- Text: `#ffffff`
- Radius: 5px
- Padding: 9px 10px
- Height: 36px
- Font: 14px Pretendard weight 700
- Use: Persistent header sign-up CTA — "시작하기"

**Primary (Developers)**
- Background: `#4541ff`
- Text: `#ffffff`
- Radius: 12px
- Padding: 14px 28px
- Height: 51px
- Font: 16px Pretendard weight 600
- Use: Developer-surface CTA — "시작하기 →"

**Enterprise Pill (Outline)**
- Background: `#ffffff`
- Text: `#4541ff`
- Border: 1px solid `#4541ff`
- Radius: 100px
- Padding: 16px 32px
- Height: 53px
- Font: 16px Pretendard weight 800
- Use: Enterprise-inquiry pill — "도입 문의하기"

**Secondary (Ghost Outline)**
- Background: `#ffffff`
- Text: `#111827`
- Border: 1px solid `#e2e8f0`
- Radius: 8px
- Padding: 14px 32px
- Height: 50px
- Font: 17px Pretendard weight 600
- Use: Secondary CTA beside the primary — "데모 체험하기"

### Inputs

**Search / Form Field**
- Background: `#f9f9f9`
- Text: `#222222`
- Border: 1px solid `#e5e8eb`
- Radius: 14px
- Padding: 12px 44px
- Height: 45px
- Font: 16px Pretendard weight 400
- Use: Pricing and documentation search field

### Cards

**Pricing Card**
- Background: `#f8fafc`
- Text: `#111827`
- Border: 1px solid `#e2e8f0`
- Radius: 10px
- Shadow: `rgba(0,0,0,0.1) 0px 0px 16px 0px`
- Use: Pricing tables and the discount-table linked card

**Feature Card (Brand-Glow)**
- Background: `#ffffff`
- Radius: 20px
- Shadow: `rgba(69,65,255,0.2) 0px 0px 20px 0px`
- Use: Hero feature cards — 20px workhorse radius with the indigo glow

### Badges

**Success Indicator**
- Background: `#ffffff`
- Text: `#28c840`
- Border: 1px solid `#e2e8f0`
- Radius: 6px
- Font: 13px Pretendard weight 700
- Use: Status / success indicator pill

### Navigation
- Background: `#ffffff`
- Text: `#222222`
- Font: 16px Pretendard weight 400
- Active: indigo `#4541ff` text on the active item
- Use: Top horizontal nav ("가이드", "SDK", "API", "가격")

### Code Panels
- Background: `#ffffff`
- Text: `#24292f`
- Radius: 12px
- Font: 14px Monaco / Menlo monospace
- Use: Developer-surface SDK snippet panels

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 3 surfaces)
**Tier 1 sources:** https://solapi.com/, https://solapi.com/developers, https://solapi.com/pricing, https://github.com/solapi
**Tier 2 sources:** getdesign.md/solapi (SPA shell — no static token data); styles.refero.design (searched "solapi" — not listed)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px / 8px
- Scale: 4px, 8px, 12px, 16px, 28px, 32px, 48px, 64px
- Notable: CTA buttons land on a generous 14px × 32px padding; the enterprise pill widens to 16px × 32px for an unmistakable hit area

### Grid & Container
- Centered single-column hero anchored by the 64px ExtraBold headline
- Marketing sections alternate white bands with full-bleed indigo "solution" sections (white text on `#4541ff`)
- Pricing renders as a stacked sequence of slate cards (`#f8fafc`) with linked detail rows
- Developer surface pairs a prose column with Monaco code panels side-by-side

### Whitespace Philosophy
- **Airy marketing, dense docs**: the homepage breathes with large vertical rhythm; the pricing and developer surfaces pack more information per screen
- **Colour for emphasis, not borders**: separation comes from indigo fills, slate surfaces, and light shadows rather than heavy rules
- **One action per view**: the saturated indigo CTA is never crowded by a second equally-loud button — the secondary is always a quiet outline

### Border Radius Scale
- Extra-small (5px): compact header buttons
- Small (6px): badges, small chips
- Medium (8px): primary/secondary buttons
- Base (12px): developer CTAs, code panels
- Card (20px): the workhorse feature-card radius
- Pill (100px): the enterprise-inquiry button

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most marketing copy |
| Subtle (Level 1) | `rgba(0,0,0,0.05) 0px 1px 2px 0px` | Inputs, small chips |
| Card (Level 2) | `rgba(0,0,0,0.1) 0px 0px 16px 0px` | Standard cards, pricing tables — the workhorse |
| Brand Glow (Level 3) | `rgba(69,65,255,0.2) 0px 0px 20px 0px` | Hero feature cards — indigo-tinted ambient glow |
| Elevated (Level 4) | `rgba(0,0,0,0.1) 0px 8px 32px 0px` | Floating panels, hover-lifted cards |

**Shadow Philosophy**: SOLAPI keeps elevation deliberately light. The dominant shadow is a soft, evenly-spread `rgba(0,0,0,0.1) 0px 0px 16px` ambient halo (observed on dozens of cards) rather than a hard directional drop. The one expressive move is the brand-glow — `rgba(69,65,255,0.2) 0px 0px 20px` — which tints elevation with the indigo brand colour so a hero feature card appears to emit a faint violet light. Depth is never used to crowd or stack; the system prefers flat colour fields and a single soft halo.

## 7. Do's and Don'ts

### Do
- Reserve indigo (`#4541ff`) for the single primary action — keep it the one "do this" colour
- Use Pretendard ExtraBold (800) for marketing display and weight 700 on the developer surface
- Use heading greys (`#333333` marketing, `#111827` developer) instead of pure black
- Default cards to a 20px radius and a soft `rgba(0,0,0,0.1) 0px 0px 16px` ambient shadow
- Pair a loud indigo primary with a quiet outline secondary (`#e2e8f0` border)
- Reserve the indigo brand-glow (`rgba(69,65,255,0.2)`) for hero feature cards only
- Quarantine code to Monaco panels with `#24292f` ink
- Use the 100px pill exclusively for the enterprise-inquiry CTA

### Don't
- Don't introduce a second saturated accent — indigo is the only loud hue (status green stays minimal)
- Don't use pure black (`#000000`) for headings or body — use `#333333` / `#222222` / `#111827`
- Don't put two equally-loud CTAs side by side — the secondary is always an outline
- Don't apply heavy directional drop shadows — the system is soft, even halos
- Don't mix the warm and cool grey ladders within a single surface — marketing greys stay on marketing, slate stays on docs
- Don't set Monaco anywhere but inside code panels
- Don't pill-shape ordinary buttons — the 100px radius is reserved for the enterprise CTA
- Don't let the indigo glow leak onto ordinary cards — it dilutes the hero emphasis

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, code panels stack below prose |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full layout, centered hero, side-by-side prose + code |

### Touch Targets
- Hero CTAs at 50–53px height with 14–16px × 32px padding — comfortably tappable
- Header CTA compact at 36px height for the persistent nav bar
- Search field at 45px height with generous 12px × 44px padding

### Collapsing Strategy
- Hero: 64px ExtraBold headline scales down on mobile, weight 800 maintained
- Developer surface: prose + Monaco code panels stack vertically on narrow viewports
- Feature cards: multi-column → single column, 20px radius preserved
- Full-bleed indigo "solution" sections keep their treatment, padding reduces

### Image Behavior
- Product screenshots sit inside 20px-radius cards with the soft ambient shadow
- Code panels keep Monaco treatment and may horizontally scroll on mobile
- Brand-glow cards retain the indigo halo at all sizes

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: SOLAPI Indigo (`#4541ff`)
- On indigo: White (`#ffffff`)
- Marketing heading: Heading Grey (`#333333`)
- Body text: Ink (`#222222`)
- Muted text: Muted (`#828282`)
- Developer heading: Slate Ink (`#111827`)
- Developer muted: Slate Muted (`#64748b`)
- Doc link: Blue (`#2563eb`)
- Surface: Slate Surface (`#f8fafc`)
- Input fill: (`#f9f9f9`)
- Hairline: (`#e5e8eb`) / Slate border (`#e2e8f0`)
- Code: Code Ink (`#24292f`)
- Accent: Indigo Light (`#a788ff`), Success (`#28c840`)

### Example Component Prompts
- "Create a hero on white background. Headline at 64px Pretendard weight 800, color #333333. Below it an indigo primary CTA (#4541ff bg, #ffffff text, 8px radius, 14px 32px padding, 17px/600) and a ghost outline secondary (#ffffff bg, #111827 text, 1px solid #e2e8f0 border, 8px radius)."
- "Design a feature card: white #ffffff background, 20px radius, shadow rgba(69,65,255,0.2) 0px 0px 20px 0px. Title 20px Pretendard weight 600, #111827. Body 16px weight 400, #64748b."
- "Build a pricing card: #f8fafc background, 1px solid #e2e8f0 border, 10px radius, shadow rgba(0,0,0,0.1) 0px 0px 16px 0px. Heading 28px weight 600 #111827."
- "Create a developer code panel: white background, Monaco 14px monospace, #24292f ink, 12px radius. Above it an indigo CTA #4541ff with 12px radius."
- "Make an enterprise-inquiry pill: white background, #4541ff text, 1px solid #4541ff border, 100px radius, 16px 32px padding, 16px Pretendard weight 800 — '도입 문의하기'."

### Iteration Guide
1. Indigo (`#4541ff`) is the single action colour — never spread it across competing buttons
2. Pretendard ExtraBold (800) for marketing display; weight 700 on the developer surface; 400 for body
3. Heading colour is `#333333` (marketing) or `#111827` (developer), never pure black
4. Card radius defaults to 20px; buttons to 8px; the enterprise pill alone is 100px
5. Soft ambient shadow `rgba(0,0,0,0.1) 0px 0px 16px`; reserve the indigo glow for hero cards
6. Keep warm greys on marketing surfaces, the slate ladder on docs — don't mix them
7. Monaco mono only inside code panels with `#24292f` ink

---

## 10. Voice & Tone

SOLAPI's voice is **plain, capable, and developer-respectful** — it sells messaging infrastructure by promising to remove friction, not by hyping it. The homepage hero "메시지를 보내고, 고객을 남기다. 모든 과정은 자동으로." ("Send the message, keep the customer. Every step automated.") sets the register: outcome-first, calm, declarative. On the developer surface the tone shifts to peer-to-peer engineering candor — "개발자의 시간을 아껴드려요" ("We save developers' time") — treating the reader as a builder who values their hours.

| Context | Tone |
|---|---|
| Hero headlines | Outcome-first, declarative. "메시지를 보내고, 고객을 남기다." Calm confidence, no hype. |
| Developer surface | Peer engineering candor. "개발자의 시간을 아껴드려요", "AI와 함께하는 쉽고 빠른 메시지 발송". |
| Feature / problem framing | Empathetic problem statements. "반복되는 메시지 발송 업무를 자동화하고 싶다." |
| CTAs | Direct, low-pressure. "시작하기", "데모 체험하기", "도입 문의하기". |
| Pricing / docs | Precise and factual. Rate limits, standard unit prices, webhooks stated plainly. |

**Voice samples (verbatim from live surfaces):**
- "메시지를 보내고, 고객을 남기다. 모든 과정은 자동으로." — homepage hero H1. *(verified live 2026-06-26)*
- "잘나가는 브랜드는 왜 SOLAPI를 쓸까요?" — homepage section headline. *(verified live 2026-06-26)*
- "AI와 함께하는 쉽고 빠른 메시지 발송" — developers hero H1. *(verified live 2026-06-26)*
- "개발자의 시간을 아껴드려요" — developers section H2. *(verified live 2026-06-26)*
- "반나절 만에 끝내는 편리한 API연동과 문자, 카카오, 네이버, RCS등 모든 종류의 메시지 발송 및 자동화 CRM." — meta description. *(verified live 2026-06-26)*

**Forbidden register**: aggressive sales urgency, undefined jargon left unexplained, exclamation-heavy hype, and superlatives that over-promise reliability. The brand sells calm capability, not adrenaline.

## 11. Brand Narrative

SOLAPI (솔라피) is operated by **솔라피(주)** (SOLAPI Inc.), led by CEO **최대성 (Choi Dae-sung)**, headquartered in Seocho-gu, Seoul (강남대로 359), with the homepage footer carrying a "© 2008 ~" lineage — placing the company's messaging-platform roots among the earliest Korean SMS-API providers. The product is a developer-first cloud-messaging API: a single integration that sends SMS/LMS/MMS, KakaoTalk 알림톡·친구톡, Naver, and the third-generation RCS message format, layered with automation and CRM tooling. Its stated promise — "반나절 만에 끝내는 편리한 API연동" ("convenient API integration finished in half a day") — frames the entire brand around reducing developer integration time.

SOLAPI sits in a uniquely Korean market problem: businesses need to reach customers across a fragmented landscape of channels (SMS for universality, KakaoTalk 알림톡 for transactional trust, RCS for rich media), each with its own carrier rules and pricing. SOLAPI's premise is to collapse that fragmentation behind one API and one dashboard — and increasingly behind AI-assisted integration ("AI와 함께하는 쉽고 빠른 메시지 발송", with AI that "대신 코딩해드려요" — writes the integration code for you).

What the design refuses, and what it embraces, both follow from this: it rejects the heavy navy-and-grey chrome of legacy telecom and the dark-pattern urgency of marketing-spam tooling. It embraces a clean white canvas, a single trustworthy indigo, heavy Pretendard headlines that speak plainly, and a developer surface (Monaco code panels, blue doc links, slate surfaces) that signals "this was built by engineers, for engineers."

## 12. Principles

1. **One action, one colour.** Indigo (`#4541ff`) means "do this." *UI implication:* reserve the saturated indigo for the single primary CTA so the next step is never ambiguous; the secondary is always a quiet outline.
2. **Remove integration friction.** The brand's promise is "half a day" to integrate. *UI implication:* the developer surface foregrounds copy-ready Monaco code and AI assistance over marketing prose.
3. **Calm capability over hype.** Messaging infrastructure must read as reliable. *UI implication:* declarative headlines, no exclamation-heavy urgency, soft ambient depth instead of loud shadows.
4. **Two surfaces, one system.** Marketing persuades; the developer surface informs. *UI implication:* the warm grey ladder lives on marketing, the cool slate ladder on docs — but indigo, Pretendard, and the radius scale unify both.
5. **Heavy where it persuades, plain where it informs.** *UI implication:* Pretendard ExtraBold (800) for marketing display; weight 700 and 400 for the technical surface; mono only for code.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable SOLAPI user segments (Korean backend developers, growth/CRM marketers, and product teams integrating messaging), not individual people.*

**김도현, 30, 서울.** A backend developer at a mid-size commerce startup wiring up order-confirmation 알림톡 and shipping SMS. Chose SOLAPI because the SDK example on `/developers` was copy-ready and the "half a day" integration promise held. Values that the docs read like they were written by engineers.

**이서연, 34, 판교.** A growth/CRM marketer automating re-engagement campaigns across SMS and KakaoTalk. Doesn't write code but lives in the dashboard and pricing page. Appreciates the plain rate tables and that the interface doesn't pressure her with countdowns or upsell modals.

**박준영, 41, 대전.** A CTO at a B2B SaaS company evaluating messaging vendors. Clicks "도입 문의하기" for an enterprise quote. Trusts the brand partly because the design reads as steady infrastructure — one calm indigo, no hype — rather than a flashy growth tool.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no messages / no data)** | White canvas with a single line in Slate Ink (`#111827`) explaining the empty state, plus one indigo CTA to send a first message. No clutter. |
| **Empty (search no results)** | Muted (`#828282`) single line on the `#f9f9f9` field context; filter stays visible so the query can be adjusted. |
| **Loading (dashboard / table)** | Skeleton rows at final card dimensions on `#f8fafc` surface, 20px radius, soft ambient pulse consistent with the light-shadow system. |
| **Loading (code/SDK action)** | Inline progress within the developer panel; previous code stays visible. |
| **Error (send failed)** | Inline message in Slate Ink with a plain-language cause and a retry — never a bare "오류가 발생했습니다". States the next step. |
| **Error (form validation)** | Field-level message below the `#f9f9f9` input; describes what is valid, not just "필수". |
| **Success (message sent)** | Brief inline confirmation; the success indicator uses green (`#28c840`). No celebratory emoji — calm acknowledgement. |
| **Skeleton** | `#f8fafc` blocks at final dimensions, 20px radius, soft pulse. |
| **Disabled** | Reduced-opacity surface; indigo actions fade rather than turn grey to preserve the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 200ms | Card/section reveal, dropdown, sheet |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets, dropdowns |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is quiet and functional, consistent with the calm, infrastructure register. Buttons respond to hover/press with a subtle opacity or shadow shift; feature cards fade-in from below at `motion-standard / ease-enter`; the indigo brand-glow may intensify slightly on hover. No bounce or spring — messaging infrastructure signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the glow holds static; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-26) via playwright getComputedStyle on three brand-owned surfaces:
- https://solapi.com/ (homepage) — hero H1 64px/800 #333333, CTA #4541ff, body Pretendard #222222
- https://solapi.com/developers — hero H1 64px/700 #111827, indigo CTA radius 12px, Monaco code #24292f
- https://solapi.com/pricing — slate cards #f8fafc, doc links #2563eb, search input #f9f9f9
Plus https://github.com/solapi (official GitHub org, confirmed live 200).

Token-level claims (§1-9) are sourced from this live inspection.

Voice samples (§10) are verbatim from the live homepage (hero H1, section headline),
the developers surface (hero H1, section H2), and the meta description.

Brand narrative (§11): 솔라피(주) (SOLAPI Inc.), CEO 최대성, Seoul HQ, "© 2008 ~"
lineage and service scope (SMS/LMS/MMS, KakaoTalk 알림톡·친구톡, Naver, RCS, automation/CRM)
are taken from the live homepage footer and meta description (verified 2026-06-26).
SOLAPI is widely documented as a Korean cloud-messaging API platform; details beyond the
footer/meta are general public knowledge, not directly quoted from a verified statement
in this turn.

Personas (§13) are fictional archetypes informed by publicly observable SOLAPI user
segments (Korean backend developers, CRM marketers, product teams). Names are illustrative;
they do not refer to real people.

Interpretive claims (e.g., "one action, one colour", "two surfaces, one system", the
warm-vs-slate grey-era reading) are editorial readings connecting SOLAPI's observed design
to its positioning, not directly sourced SOLAPI statements.
-->
