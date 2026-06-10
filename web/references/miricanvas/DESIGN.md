---
id: miricanvas
name: MiriCanvas
display_name_kr: 미리캔버스
country: KR
category: design-tools
homepage: "https://www.miricanvas.com"
primary_color: "#21afbf"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=miricanvas.com&sz=128"
verified: "2026-06-10"
added: "2026-06-10"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-10"
  note: "primary = live CTA teal (#21afbf); deep teal (#1c95a2) is the text-link/ghost companion. Ink near-black (#16181d) headings; Pretendard Variable + Figtree latin."
  colors:
    primary: "#21afbf"
    primary-deep: "#1c95a2"
    accent-bright: "#26c7d9"
    tint: "#e7f9fb"
    ink: "#16181d"
    ink-soft: "#23242a"
    body: "#434956"
    muted: "#626677"
    muted-blue: "#70798f"
    faint: "#8d94a5"
    canvas: "#ffffff"
    surface: "#f1f2f4"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Pretendard Variable", latin: "Figtree" }
    display-hero: { size: 64, weight: 700, lineHeight: 1.50, use: "Hero headline, generous 96px line-height" }
    page-title:   { size: 40, weight: 700, lineHeight: 1.20, use: "Page-level titles (pricing hero)" }
    subsection:   { size: 28, weight: 600, lineHeight: 1.29, use: "Feature sub-heads (pricing H2)" }
    section:      { size: 24, weight: 600, lineHeight: 1.33, use: "Section titles (homepage H2)" }
    card-title:   { size: 20, weight: 600, lineHeight: 1.40, use: "Template category / card titles" }
    plan-title:   { size: 18, weight: 600, lineHeight: 1.44, use: "Pricing tier names" }
    cta-lg:       { size: 18, weight: 500, use: "Hero CTA labels" }
    body:         { size: 16, weight: 400, use: "Body copy, search input text" }
    ui:           { size: 14, weight: 500, use: "Nav items, standard buttons" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, section: 64 }
  rounded: { sm: 8, md: 10, lg: 12, xl: 16, full: 9999 }
  shadow:
    card: "rgba(0, 0, 0, 0.15) 0px 2px 8px 0px"
    floating: "rgba(0, 0, 0, 0.16) 0px 2px 6px 0px"
  components:
    button-primary: { type: button, bg: "#21afbf", fg: "#ffffff", radius: "8px", padding: "8px 16px", height: "40px", font: "14px / 500", use: "Header/inline CTA — 회원가입, 지금 써보기" }
    button-hero: { type: button, bg: "#21afbf", fg: "#ffffff", radius: "12px", padding: "14px 24px", height: "56px", font: "18px / 500", use: "Hero primary CTA — 바로 시작하기" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#1c95a2", radius: "12px", padding: "14px 24px", height: "56px", font: "18px / 500", use: "Hero secondary CTA — 템플릿 보러가기" }
    button-ghost: { type: button, fg: "#1c95a2", radius: "8px", padding: "8px 16px", height: "40px", font: "14px / 500", use: "Text-teal tertiary action — 무료로 시작하기, 요금제 알아보기" }
    nav-item: { type: tab, fg: "#23242a", radius: "8px", padding: "8px 16px", font: "14px / 500", use: "GNB items — 템플릿, 추천 기능, 요금제" }
    input-search: { type: input, fg: "#16181d", radius: "10px", height: "46px", font: "16px / 400", use: "Template hub natural-language search" }
    card-template: { type: card, bg: "#ffffff", radius: "12px", shadow: "rgba(0,0,0,0.15) 0px 2px 8px 0px", use: "Template thumbnail card on homepage rail" }
    avatar-social: { type: avatar, radius: "9999px", height: "40px", use: "Footer social circles (Facebook/Instagram/YouTube), subtle grey fill" }
  components_harvested: true
---

# Design System Inspiration of MiriCanvas

## 1. Visual Theme & Atmosphere

MiriCanvas (미리캔버스) is Korea's mass-market web design tool — the "design for everyone" answer to Canva — and its marketing surface reads exactly like its promise: bright, frictionless, and unintimidating. The page sits on a pure white canvas (`#ffffff`) with near-black ink headings (`#16181d`) and a single, unmistakable action color: a fresh aqua teal (`#21afbf`) that paints every "start now" moment. The teal is energetic without being loud — closer to a swimming-pool blue-green than a corporate cyan — and it instantly separates MiriCanvas from the purple-saturated Western design-tool landscape. Around it, soft grey surfaces (`#f1f2f4`) and a faint teal wash (`#e7f9fb`) keep the page airy, while real template thumbnails do most of the visual talking.

Typography is contemporary Korean-product standard executed with unusual generosity: **Pretendard Variable** (with Figtree handling Latin glyphs) at a bold 700 for the 64px hero — "세상의 모든 디자인은 미리캔버스로 완성" — set on a remarkably loose 96px line-height (1.5 ratio). Where most landing pages compress display type, MiriCanvas lets its hero breathe, which makes the headline feel like an invitation rather than a pitch. Below the hero, the scale steps down quickly and politely: 24px/600 section heads, 20px/600 card titles, 16px body, and a quiet 14px/500 for all UI chrome. Letter-spacing stays at normal throughout — no fashionable tightening — reinforcing the approachable, default-friendly tone.

Depth is used sparingly and only where content floats: template thumbnail cards carry a soft `rgba(0, 0, 0, 0.15) 0px 2px 8px` shadow at 12px radius, and small floating controls get `rgba(0, 0, 0, 0.16) 0px 2px 6px`. Buttons, nav, and sections are completely flat — separation comes from the grey surface bands and white cards. The geometry is consistently soft-rectangular: 8px on standard buttons, 10px on medium controls and the search field, 12px on hero CTAs and cards, 16px on large template tiles, and full circles only for footer social icons. The total effect is a tool that looks like it takes ten seconds to learn — which is precisely the brand strategy.

**Key Characteristics:**
- Single teal action color (`#21afbf`) — every primary CTA, one hue, zero ambiguity
- Deep teal text-link companion (`#1c95a2`) for secondary and ghost actions
- Pretendard Variable + Figtree — Korean-first sans with weights 700 (display) / 600 (sections) / 500 (UI) / 400 (body)
- 64px hero at line-height 1.5 — unusually generous, friendly air
- Near-black ink (`#16181d`) and soft ink (`#23242a`) instead of pure black
- Flat chrome + shadowed content: only template cards and floating controls elevate
- Soft radius ladder: 8 → 10 → 12 → 16px, circles reserved for social avatars
- Template thumbnails as the dominant visual element — the product demos itself

## 2. Color Palette & Roles

### Primary
- **MiriCanvas Teal** (`#21afbf`): The system's single action color. Primary CTA backgrounds — 회원가입, 바로 시작하기, 지금 써보기, 앱 다운로드 — and brand accents.
- **Deep Teal** (`#1c95a2`): Text-form teal for secondary CTAs on white, ghost buttons, and inline links. Slightly darkened for contrast on light backgrounds.
- **Bright Aqua** (`#26c7d9`): Lighter companion teal observed on decorative brand moments and highlights.

### Surface & Tint
- **Pure White** (`#ffffff`): Page canvas, card surfaces, secondary CTA backgrounds, text on teal.
- **Surface Grey** (`#f1f2f4`): Cool light-grey band for alternating sections and feature blocks (a sibling `#f1f2f3` appears on some bands).
- **Teal Tint** (`#e7f9fb`): Faint aqua wash for brand-tinted callouts; pricing uses a translucent `rgba(33, 175, 191, 0.1)` teal tint for the highlighted plan.
- **Subtle Fill** (`rgba(88, 98, 118, 0.05)`): Barely-there blue-grey fill for footer social circles; the footer band itself sits at `rgba(88, 98, 118, 0.1)`.

### Text Hierarchy
- **Ink** (`#16181d`): Headings, hero copy, primary text. A near-black with a cool undertone — never pure black for headings.
- **Ink Soft** (`#23242a`): Nav items, button labels, sub-headings.
- **Body Slate** (`#434956`): Secondary body copy and descriptions.
- **Muted** (`#626677`): Tertiary text, template-rail "더보기" links, captions.
- **Muted Blue** (`#70798f`): Metadata and lower-emphasis labels.
- **Faint** (`#8d94a5`): Placeholder-level, disabled, finest print.

## 3. Typography Rules

### Font Family
- **Primary**: `Pretendard Variable` — the document-wide sans for Korean and UI text.
- **Latin companion**: `Figtree` (stack continues to `IBM Plex Sans JP` for Japanese glyphs).
- Some server-rendered anchor text paints before hydration in the browser-default serif; the styled system is uniformly Pretendard Variable.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Pretendard Variable | 64px (4.00rem) | 700 | 1.50 (96px) | Homepage hero, two-line Korean headline |
| Page Title | Pretendard Variable | 40px (2.50rem) | 700 | 1.20 (48px) | Pricing hero |
| Sub-section | Pretendard Variable | 28px (1.75rem) | 600 | 1.29 (36px) | Pricing feature heads |
| Section Heading | Pretendard Variable | 24px (1.50rem) | 600 | 1.33 (32px) | Homepage section titles |
| Card Title | Pretendard Variable | 20px (1.25rem) | 600 | 1.40 (28px) | Template category titles |
| Plan Title | Pretendard Variable | 18px (1.13rem) | 600 | 1.44 (26px) | Pricing tier names (무료, Pro) |
| CTA Large | Pretendard Variable | 18px (1.13rem) | 500 | — | Hero CTA labels |
| Body | Pretendard Variable | 16px (1.00rem) | 400 | — | Reading text, search input |
| UI | Pretendard Variable | 14px (0.88rem) | 500 | — | Nav, standard buttons |

### Principles
- **Bold-but-breathing display**: 700-weight heroes on a 1.5 line-height — confidence delivered with air, not compression.
- **Normal tracking everywhere**: no negative letter-spacing at any size; the system reads default-friendly, not fashion-tight.
- **One family, weight-driven hierarchy**: Pretendard Variable carries every role; only weight (700/600/500/400) and size signal rank.
- **14px/500 chrome**: all interactive chrome shares one quiet spec, so the teal color — not type — flags the primary action.

## 4. Component Stylings

### Buttons

**Primary (Standard)**
- Background: `#21afbf`
- Text: `#ffffff`
- Radius: 8px
- Padding: 8px 16px
- Font: 14px / 500 / Pretendard Variable
- Height: 40px
- Use: Header CTA (회원가입) and inline CTAs (지금 써보기, 앱 다운로드, Pro로 업그레이드)

**Primary (Hero)**
- Background: `#21afbf`
- Text: `#ffffff`
- Radius: 12px
- Padding: 14px 24px
- Font: 18px / 500 / Pretendard Variable
- Height: 56px
- Use: Hero primary CTA (바로 시작하기, 모든 템플릿 둘러보기)

**Secondary (White)**
- Background: `#ffffff`
- Text: `#1c95a2`
- Radius: 12px
- Padding: 14px 24px
- Font: 18px / 500 / Pretendard Variable
- Height: 56px
- Use: Hero secondary CTA (템플릿 보러가기), paired beside the teal primary

**Ghost (Teal Text)**
- Background: transparent
- Text: `#1c95a2`
- Radius: 8px
- Padding: 8px 16px
- Font: 14px / 500 / Pretendard Variable
- Height: 40px
- Use: Tertiary actions on pricing (무료로 시작하기, 요금제 알아보기) and "더보기" rail links

**Neutral (White on Grey)**
- Background: `#ffffff`
- Text: `rgba(0, 0, 0, 0.8)`
- Radius: 10px
- Padding: 12px 20px
- Font: 16px / 500 / Pretendard Variable
- Height: 48px
- Use: Mid-emphasis actions on grey surfaces (자세히 보기, 요금제 비교)

### Inputs

**Template Search**
- Background: `#ffffff` (container; input itself transparent)
- Text: `#16181d`
- Border: 1px solid transparent (container)
- Radius: 10px
- Font: 16px / 400 / Pretendard Variable
- Height: 46px
- Use: Design-hub natural-language search ("스타일과 용도를 함께 검색해 보세요")

### Cards & Containers

**Template Card**
- Background: `#ffffff`
- Radius: 12px
- Shadow: `rgba(0, 0, 0, 0.15) 0px 2px 8px 0px`
- Use: Template thumbnail cards in homepage rails — the only consistently elevated element

**Category Tile**
- Background: `#ffffff`
- Radius: 16px
- Height: 280px
- Use: Large template-category link tiles (프레젠테이션, 동영상, SNS)

**Section Band**
- Background: `#f1f2f4`
- Use: Alternating full-width feature bands on white canvas (flat, no shadow)

### Navigation

**GNB Item**
- Background: transparent
- Text: `#23242a`
- Radius: 8px
- Padding: 8px 16px
- Font: 14px / 500 / Pretendard Variable
- Height: 40px
- Use: Top navigation (템플릿, 추천 기능, 기업용, 교육용, 요금제) — product-family switcher items (미리캔버스, 디자인허브, 프린트허브, 비즈하우스) run 44px tall

### Avatars

**Footer Social Circle**
- Background: `rgba(88, 98, 118, 0.05)`
- Radius: 50%
- Padding: 8px
- Height: 40px
- Use: Footer social links (Facebook, Instagram, Naver Blog, Pinterest, YouTube)

The marketing surfaces expose no standalone badge/tag component; the closest pattern is the translucent teal plan-highlight tint (`rgba(33, 175, 191, 0.1)`) on pricing. Buttons carry no box-shadow anywhere — elevation belongs exclusively to content imagery.

---
**Verified:** 2026-06-10
**Tier 1 sources:** https://www.miricanvas.com/ko (homepage, live computed style), https://www.miricanvas.com/ko/pricing (pricing, live computed style), https://www.miricanvas.com/ko/templates (template hub, live computed style), https://www.miridih.com/ko (operator MIRIDIH corporate site — mission/values), https://medium.com/miridih (MIRIDIH official team blog)
**Tier 2 sources:** none available (getdesign.md/miricanvas → 404 "No designs found"; styles.refero.design ?q=miricanvas searched — no MiriCanvas listing)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 64px
- Button padding pairs are tight and consistent: 8px 16px (standard), 12px 20px (medium), 14px 24px (hero)

### Grid & Container
- Centered hero with the 64px headline and a two-button CTA pair (teal + white)
- Template content presented as horizontal card rails grouped by category, each with a "더보기" teal text link
- Full-width alternating bands: white canvas ↔ `#f1f2f4` grey surface
- Pricing uses side-by-side plan cards with a translucent teal tint marking the recommended tier
- Footer is a single light band at `rgba(88, 98, 118, 0.1)` with circular social icons

### Whitespace Philosophy
- **Air as friendliness**: the 1.5 hero line-height and wide section gaps make a feature-dense product feel light.
- **Templates do the talking**: whitespace frames real thumbnail content rather than abstract illustration — the product is its own demo.
- **Flat segmentation**: bands of `#f1f2f4` separate topics without borders or shadows.

### Border Radius Scale
- Small (8px): standard buttons, nav items
- Medium (10px): medium buttons, search field
- Large (12px): hero CTAs, template cards
- XLarge (16px): big category tiles
- Full (50% / 9999px): footer social circles only

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Buttons, nav, sections, pricing cards |
| Tint (Level 1) | `#f1f2f4` / `#e7f9fb` background shift | Section and callout separation |
| Content (Level 2) | `rgba(0, 0, 0, 0.15) 0px 2px 8px 0px` | Template thumbnail cards |
| Floating (Level 3) | `rgba(0, 0, 0, 0.16) 0px 2px 6px 0px` | Small floating circular controls |

**Shadow Philosophy**: MiriCanvas elevates content, never chrome. Live inspection found `box-shadow: none` on every button, nav element, and heading; the only shadowed elements are template-thumbnail images (the user's potential designs) and small floating controls. This inverts the usual SaaS pattern — instead of decorating its own UI, the system spends its entire depth budget making *user-facing template content* pop off the page. Separation between sections is handled flatly with grey tints, keeping the page fast-feeling and print-clean.

## 7. Do's and Don'ts

### Do
- Reserve teal (`#21afbf`) for primary actions — one hue, every "start" moment
- Use deep teal (`#1c95a2`) for text-form secondary/ghost actions and links
- Set display type in Pretendard Variable 700 with generous (≥1.4) line-height
- Keep all UI chrome at 14px / 500 and let color signal priority
- Elevate only content imagery (template cards) with the soft 2px/8px shadow
- Separate sections with flat `#f1f2f4` bands
- Use the radius ladder deliberately: 8px buttons, 10px medium, 12px hero/cards, 16px tiles
- Use near-black ink (`#16181d`) for headings, never pure black

### Don't
- Put shadows on buttons or navigation — chrome stays flat
- Introduce a second saturated action color — teal carries the whole system
- Compress display type with negative letter-spacing — tracking stays normal
- Use pill-shaped buttons — full-round is reserved for social avatar circles
- Replace template thumbnails with abstract illustration — real content is the brand proof
- Set body text in grey lighter than `#626677` for reading copy
- Mix fonts — Pretendard Variable (with Figtree Latin) owns every role

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero scales down, template rails become swipe carousels |
| Tablet | 640–1024px | 2-up template grids, condensed nav |
| Desktop | 1024–1440px | Full GNB with product-family switcher, multi-rail template sections |

### Touch Targets
- Standard buttons at 40px height, hero CTAs at 56px — comfortably tappable
- GNB product-switcher items at 44px
- Footer social circles at 40px diameter
- Search field at 46px input height

### Collapsing Strategy
- Hero: 64px headline compresses on mobile, weight 700 and loose line-height maintained
- CTA pair (teal + white) stacks vertically on narrow screens
- Template rails: grid → horizontal swipe with snap
- GNB: full menu collapses behind a toggle; the teal CTA stays visible

### Image Behavior
- Template thumbnails keep the 12px radius and soft shadow at every size
- Category tiles maintain 16px radius
- Real template content is served at display density — thumbnails are the product proof and stay sharp

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: MiriCanvas Teal (`#21afbf`)
- Secondary/link teal: Deep Teal (`#1c95a2`)
- Bright accent: Aqua (`#26c7d9`)
- Background: Pure White (`#ffffff`)
- Section band: Surface Grey (`#f1f2f4`)
- Brand tint: Teal Wash (`#e7f9fb`)
- Heading text: Ink (`#16181d`)
- UI text: Ink Soft (`#23242a`)
- Body text: Body Slate (`#434956`)
- Muted text: Muted (`#626677`)

### Example Component Prompts
- "Create a hero on white. Headline 64px Pretendard Variable weight 700, line-height 1.5, color #16181d. Two CTAs side by side: primary #21afbf background, white text, 12px radius, 14px 24px padding, 18px/500; secondary white background, #1c95a2 text, same geometry. No shadows on buttons."
- "Design a template card rail: white cards, 12px radius, shadow rgba(0,0,0,0.15) 0px 2px 8px. Section title 24px Pretendard Variable weight 600, #16181d. A '더보기' text link in #626677 at 18px/500 on the right."
- "Build a top nav: white header, items 14px Pretendard Variable weight 500, #23242a text, 8px radius hover surface, 8px 16px padding. One teal CTA (#21afbf bg, white text, 8px radius) right-aligned."
- "Create a pricing band: white plan cards on #f1f2f4, the recommended plan tinted rgba(33,175,191,0.1). Tier name 18px/600 #23242a, price emphasized, ghost CTA in #1c95a2 text and a filled teal #21afbf CTA, both 8px radius, 40px tall."
- "Design a search field: white container, 10px radius, 46px tall, 16px Pretendard Variable text #16181d, long friendly Korean placeholder."

### Iteration Guide
1. Teal `#21afbf` fills = primary action; teal text `#1c95a2` = secondary; everything else neutral
2. Buttons flat, content shadowed — never the reverse
3. Radius ladder: 8 / 10 / 12 / 16px; circles only for social avatars
4. Pretendard Variable everywhere; hierarchy via weight 700 → 600 → 500 → 400
5. Display line-height stays generous (1.4–1.5) — never compress the hero
6. Sections alternate white and `#f1f2f4`; no border dividers
7. Show real template thumbnails as content — the product demos itself

---

## 10. Voice & Tone

MiriCanvas speaks in a voice that is **encouraging, plain, and possibility-selling** — it talks to people who don't think of themselves as designers and tells them they already are. The hero "세상의 모든 디자인은 미리캔버스로 완성" ("Every design in the world, completed with MiriCanvas") is the register: sweeping in promise, simple in vocabulary, zero technical jargon. CTAs are immediate and friction-free (바로 시작하기 — "start right now"), and even the search placeholder coaches the user with a concrete example instead of a generic "검색".

| Context | Tone |
|---|---|
| Hero headlines | Big, inclusive promise in plain Korean. "세상의 모든 디자인은 미리캔버스로 완성." |
| CTAs | Immediate, zero-commitment imperatives. "바로 시작하기", "지금 써보기", "템플릿 보러가기". |
| Feature copy | Capability + breadth. "프레젠테이션, 동영상, SNS 등 모든 템플릿이 한 곳에." |
| Pricing | Rational, user-side framing. "사용 방식에 따라 선택하는 합리적인 요금제." |
| Input placeholders | Coaching by example: shows users *how* to ask, with a vivid sample query. |
| Education/enterprise | Welcoming, benefit-first ("교육기관을 위한 특별한 무료 버전"). |

**Voice samples (verbatim from live surfaces):**
- "세상의 모든 디자인은 미리캔버스로 완성" — homepage hero H1. *(verified live 2026-06-10)*
- "프레젠테이션, 동영상, SNS 등 모든 템플릿이 한 곳에" — homepage section H2. *(verified live 2026-06-10)*
- "사용 방식에 따라 선택하는 합리적인 요금제" — pricing H1. *(verified live 2026-06-10)*
- "스타일과 용도를 함께 검색해 보세요 (예: 초록색 차분한 캘리그라피 웨딩 초대장)" — template search placeholder. *(verified live 2026-06-10)*
- "The design tool for creatives like you" — English homepage hero. *(verified live 2026-06-10)*

**Forbidden register**: designer jargon (kerning, bleed, grid system) on user-facing copy; pressure tactics or countdown urgency; English loan-word showing-off where plain Korean works; apologetic hedging — the voice assumes the user *can* do this.

## 11. Brand Narrative

MiriCanvas is operated by **미리디 (MIRIDIH)** — CEO **강창석** — a Seoul-based company whose corporate site states the mission verbatim: *"미리디는 디자인의 불편한 순간들을 바꾸고, 모두가 쉽게 디자인을 통해 소통할 수 있는 세상을 만들어 갑니다"* ("MIRIDIH changes the inconvenient moments of design and builds a world where everyone communicates easily through design"). The corporate tagline doubles down: *"모두가 쉽게 디자인을 통해 세상과 소통하게 합니다."* MiriCanvas launched as a free, browser-based design tool whose founding wedge was distinctly Korean: templates that are free to use **without copyright worry** (저작권 걱정 없는 무료 템플릿) — a direct answer to the licensing anxiety that haunted Korean small businesses, teachers, and civil servants making posters and presentations.

The product grew into an ecosystem visible in its own navigation: 미리캔버스 (the editor), 디자인허브 (template discovery), 프린트허브 and **비즈하우스 (BIZHOWS)** — the print-commerce sibling that turns finished designs into physical banners, business cards, and merchandise. This design-to-print loop is the company's structural moat: where global rivals stop at export, MiriCanvas hands the file to a printing plant. The team blog (medium.com/miridih) describes itself as *"간편한 디자인 문화를 만들어가는 미리디 팀 블로그"* — a team building an *easy design culture* — and the corporate site declares the next chapter: *"수치로 증명된 압도적인 고객 경험, 이제 국내를 넘어 글로벌 시장으로 나아갑니다"* (proven customer experience, now expanding beyond Korea to the global market).

What the brand refuses, visible in the design: professional-tool intimidation (no dense toolbars on marketing surfaces, no jargon), dark-pattern monetization pressure (the free tier leads every pricing conversation), and decorative abstraction (real templates instead of brand illustration). What it embraces: one friendly teal, generous type, and the conviction that showing 50,000 real templates is more persuasive than any slogan.

## 12. Principles

1. **Everyone is a designer.** The mission — "모두가 쉽게 디자인을 통해 소통" — defines the audience as the whole population, not professionals. *UI implication:* zero jargon, coached inputs (example-driven placeholders), and CTAs that promise immediacy (바로 시작하기) rather than capability depth.
2. **Templates are the interface.** Users start from finished work, not a blank canvas. *UI implication:* template thumbnails get the entire depth budget (the only shadowed elements) and the homepage is organized as browsable category rails.
3. **One color means go.** Teal `#21afbf` appears exactly where the user can act. *UI implication:* never spend the teal on decoration; secondary actions step down to teal *text* (`#1c95a2`), keeping a strict two-level action hierarchy.
4. **Customer focus, data-driven.** MIRIDIH's stated core values — "Customer Focus & Impact-Driven Goals", "Data-Driven & High Standards" — anchor decisions in measured user impact. *UI implication:* friction metrics beat aesthetics; the design favors obvious affordances (40px buttons, plain labels) over cleverness.
5. **Integrity for the whole.** The first stated value pair — "Integrity & Thinking for the Whole" — extends to the copyright-safe template promise. *UI implication:* trust messaging (free, no copyright worry) is stated plainly in copy, never buried in fine print.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable MiriCanvas user segments (small-business owners, teachers, marketing juniors, casual creators), not individual people.*

**박은주, 38, 대전.** Runs a small café and makes her own menu boards, event posters, and Instagram announcements. Doesn't know what a vector is and doesn't want to. Chose MiriCanvas because the templates were free, copyright-safe, and she could order the printed banner from the same screen.

**김태현, 27, 서울.** First-year marketer at a 20-person startup, responsible for every card-news post and sales deck. Lives in the template hub's search bar — types things like "미니멀 채용공고" and ships in twenty minutes. Upgraded to Pro when brand-kit consistency started to matter.

**이선영, 45, 경북.** Middle-school teacher preparing class materials and school-event posters. Uses the free education tier; values that students can collaborate in the browser with nothing installed. Trusts the tool because nothing in it ever made her feel behind.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no search results)** | White canvas, plain Ink (`#16181d`) one-liner stating no matching templates, with suggested alternate keywords as teal text links — the coached-search pattern continues into the empty state. |
| **Empty (new workspace, no designs)** | Template suggestions instead of a blank void — the system never shows a truly empty canvas; it shows starting points with one teal CTA. |
| **Loading (template rail)** | Skeleton cards at final 12px-radius dimensions on `#f1f2f4` blocks, flat pulse. Thumbnails pop in with their soft shadow once loaded. |
| **Loading (editor open)** | Brand-teal progress indication on white; cheerful, short. |
| **Error (search/network failed)** | Inline plain-Korean message with a retry action in teal text (`#1c95a2`). No blame, no codes — "다시 시도해 주세요" register. |
| **Error (form validation)** | Field-level message below the input; states what a valid value looks like, consistent with the example-driven placeholder voice. |
| **Success (saved/exported)** | Quiet inline confirmation; the resulting design preview is the real success signal. No confetti on routine saves. |
| **Skeleton** | `#f1f2f4` blocks at final dimensions matching the radius ladder (12px cards, 16px tiles), flat pulse, no shimmer gradient. |
| **Disabled** | Labels drop to Faint (`#8d94a5`); teal actions fade in opacity rather than turning grey, preserving the action-color meaning. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover surfaces on nav/buttons, focus rings |
| `motion-standard` | 200ms | Card hover lift, dropdown/menu open, rail snap |
| `motion-slow` | 320ms | Section reveals, page-level transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Cards, menus, panels arriving |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way state changes |

**Motion rules**: Motion is light and content-serving — template rails glide with momentum and snap, card hovers add a subtle lift consistent with the `rgba(0, 0, 0, 0.15)` shadow language, and chrome (nav, buttons) limits itself to fast background-tint fades. Nothing bounces: the tool sells effortlessness, and overshoot reads as effort. Under `prefers-reduced-motion: reduce`, rail animation and lifts collapse to instant state changes; browsing and editing remain fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-10) via playwright getComputedStyle:
- https://www.miricanvas.com/ko — hero H1 "세상의 모든 디자인은 미리캔버스로 완성" 64px/700/lh96,
  CTA bg rgb(33,175,191) #21afbf, secondary CTA text rgb(28,149,162) #1c95a2,
  section band rgb(241,242,243~244), template-card shadow rgba(0,0,0,0.15) 0 2px 8px
- https://www.miricanvas.com/ko/pricing — H1 40px/700, ghost teal buttons, plan tint rgba(33,175,191,0.1)
- https://www.miricanvas.com/ko/templates — search input 46px/10px radius, placeholder verbatim
- https://www.miridih.com/ko — mission/values verbatim: "미리디는 디자인의 불편한 순간들을 바꾸고,
  모두가 쉽게 디자인을 통해 소통할 수 있는 세상을 만들어 갑니다";
  core values "Integrity & Thinking for the Whole", "Customer Focus & Impact-Driven Goals",
  "Data-Driven & High Standards"; 대표 강창석 (site footer); products 미리캔버스/비즈하우스
- https://medium.com/miridih — official team blog, self-description verbatim:
  "간편한 디자인 문화를 만들어가는 미리디 팀 블로그"

Voice samples (§10) are verbatim from the live homepage, pricing, and template-hub surfaces.

Brand narrative (§11): operator MIRIDIH and CEO 강창석 are verbatim from miridih.com footer.
The "copyright-worry-free free templates" positioning (저작권 걱정 없는 무료 템플릿) is the product's
widely documented public positioning, not a verbatim quote captured this turn. BIZHOWS and the
design-to-print ecosystem are confirmed by the product-family switcher in the live GNB
(미리캔버스/디자인허브/프린트허브/비즈하우스).

Personas (§13) are fictional archetypes informed by publicly observable MiriCanvas user segments.
Names are illustrative; they do not refer to real people.

§14 States and §15 Motion are design-system extrapolations consistent with observed tokens
(flat chrome, content-only shadows, teal action hierarchy); they are not separately measured
runtime observations. Interpretive claims (e.g., "templates are the interface",
"one color means go") are editorial readings connecting observed design to stated mission.
-->
