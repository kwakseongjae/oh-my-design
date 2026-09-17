---
id: barogo
name: Barogo
display_name_kr: 바로고
country: KR
category: consumer-tech
homepage: "https://www.barogo.com/"
primary_color: "#fa5014"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=barogo.com&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = live hero-CTA orange (#fa5014, rgb(250,80,20)); text is true black (#000000) softening to #111111; near-shadowless flat surfaces with a #2d3ce6 electric-blue used only inside the aboutUs brand-identity block. Single family Pretendard, with Termina reserved for Latin/numeral display accents."
  colors:
    primary: "#fa5014"
    ink: "#000000"
    ink-soft: "#111111"
    body: "#666666"
    muted: "#999999"
    hairline: "#dcdcdc"
    canvas: "#ffffff"
    surface: "#f6f6f6"
    surface-alt: "#f9f9f9"
    dark: "#1a1a1a"
    accent-blue: "#2d3ce6"
    on-primary: "#ffffff"
  typography:
    family: { body: "Pretendard", display: "Termina" }
    mission-hero: { size: 54, weight: 700, lineHeight: 1.33, use: "About-page mission headline, Pretendard Bold" }
    hero:         { size: 42, weight: 700, lineHeight: 1.43, use: "Homepage hero + section titles, Pretendard Bold" }
    stat-numeral: { size: 150, weight: 700, use: "Ghosted background year numerals (Termina), color #000000 at 0.05 alpha" }
    subsection:   { size: 36, weight: 700, lineHeight: 1.0, use: "Sub-section heads / stat block labels" }
    nav:          { size: 20, weight: 500, use: "Top nav item, Pretendard (700 when active)" }
    button:       { size: 20, weight: 700, use: "Primary CTA label, Pretendard Bold" }
    button-sm:    { size: 18, weight: 700, use: "Outline button label, Pretendard Bold" }
    body:         { size: 16, weight: 400, lineHeight: 1.0, use: "Standard reading / UI text, Pretendard" }
    caption:      { size: 12, weight: 500, use: "Footer links, Pretendard" }
  spacing: { xs: 8, sm: 12, md: 16, base: 20, lg: 30, xl: 40, xxl: 50 }
  rounded: { sm: 3, md: 12, lg: 16, xl: 20, full: 9999 }
  shadow:
    cta: "rgba(0,0,0,0.2) 0px 2px 10px 0px"
    card: "rgba(0,0,0,0.1) 0px 2px 20px 0px"
  components:
    button-primary: { type: button, bg: "#fa5014", fg: "#ffffff", radius: "3px", height: "72px", padding: "0 40px", font: "20px / 700 Pretendard", shadow: "rgba(0,0,0,0.2) 0px 2px 10px", use: "Primary CTA — 바로 문의하기" }
    button-outline: { type: button, fg: "#fa5014", border: "1px solid #fa5014", radius: "3px", height: "64px", padding: "0 30px", font: "18px / 700 Pretendard", use: "Secondary outline action — 스토어프로그램 / 사용 설명서 / 자세히 보기" }
    card-feature: { type: card, bg: "#ffffff", radius: "12px", padding: "20px", shadow: "rgba(0,0,0,0.1) 0px 2px 20px", use: "Feature/info card grid on aboutUs" }
    card-stat: { type: card, bg: "#ffffff", radius: "16px", padding: "40px 32px", shadow: "rgba(0,0,0,0.1) 0px 2px 20px", use: "'숫자로 보는 바로고' statistic card" }
    nav-link: { type: tab, fg: "#000000", font: "20px / 500 Pretendard", active: "weight 700 #000000", use: "Top navigation item" }
    footer-link: { type: listItem, fg: "#ffffff", font: "12px / 500 Pretendard", use: "Footer navigation link on #1a1a1a dark footer" }
  components_harvested: true
---

# Design System Inspiration of Barogo

## 1. Visual Theme & Atmosphere

Barogo (바로고) is one of Korea's largest last-mile delivery-dispatch platforms — the logistics rails beneath thousands of restaurants and stores — and its website carries the confident, high-energy plainness of an operator that moves physical goods for a living. The canvas is pure white (`#ffffff`) with occasional cool-grey resting surfaces (`#f6f6f6`, `#f9f9f9`), and text is set in true black (`#000000`) softening to a near-black (`#111111`) — no navy, no warm greys, just a direct high-contrast read that mirrors the brand's "무엇이든 어디서나" (anything, anywhere) matter-of-factness. The single saturated brand color is a hot delivery orange (`#fa5014`), applied with discipline: it owns the primary call-to-action, the outline-button ink, and little else, so the eye is trained to read orange as "act now — get moving."

The typographic voice is Korean-utilitarian rather than editorial. A single family, **Pretendard**, carries essentially the entire site (measured across 434–474 nodes per page) — bold weight 700 for every headline from the 42px homepage hero up to the 54px mission line on the company page, and a quiet weight 400 at 16px for body and UI. There is almost no typographic ornament; the only exception is **Termina**, a geometric Latin display face reserved for oversized numerals such as the ghosted `2016` founding-year marker (150px, black at 5% alpha) on the about page. Hierarchy is driven by size and weight, not by color or decoration.

What gives Barogo its particular flavor is its near-flat, sharp-cornered geometry. Buttons round at a barely-there ~3px (measured 3.008px) — crisp, almost square, reading as functional and fast rather than soft. Cards step up to 12px and 16px, and larger rounded surfaces reach 20px, but elevation stays restrained: a light `rgba(0,0,0,0.1) 0px 2px 20px` card shadow and a slightly firmer `rgba(0,0,0,0.2) 0px 2px 10px` under the primary CTA. Structure is communicated by tint (`#f6f6f6`), hairlines (`#dcdcdc`), and the black footer (`#1a1a1a`) rather than by heavy stacked cards. An electric blue (`#2d3ce6`) appears once, inside the "BAROGO Brand Identity" block, as a deliberate secondary-brand accent — never as general UI color.

**Key Characteristics:**
- Single saturated delivery orange (`#fa5014`) reserved for the primary CTA and outline-button ink — the site's one "action" color
- Pretendard everywhere: weight 700 for all headlines (42px hero, 54px mission), weight 400 at 16px for body/UI
- Termina used only for oversized Latin/numeral display accents (the ghosted 150px `2016`)
- True black (`#000000`) and near-black (`#111111`) text on white — direct, high-contrast, no navy
- Sharp ~3px button corners — crisp and functional, not pill-soft; cards at 12px/16px, rounded surfaces at 20px
- Restrained elevation: light `rgba(0,0,0,0.1)` card shadow, firmer `rgba(0,0,0,0.2)` CTA shadow
- Cool-grey resting surfaces (`#f6f6f6`, `#f9f9f9`) and `#dcdcdc` hairlines carry structure over heavy cards
- Black footer (`#1a1a1a`) with white (`#ffffff`) links; electric blue (`#2d3ce6`) as a single brand-identity accent

## 2. Color Palette & Roles

### Primary
- **Barogo Orange** (`#fa5014`): The brand's single saturated color and primary CTA background (rgb(250,80,20)). Also the ink and border color of outline buttons. The site's exclusive "action" hue.

### Text & Ink
- **Ink Black** (`#000000`): Primary heading and body text color — true black for maximum directness.
- **Ink Soft** (`#111111`): A near-black used on secondary headings and dense text; a marginally softer companion to pure black.
- **Body Grey** (`#666666`): Secondary body copy and descriptions on content-heavy pages.
- **Muted Grey** (`#999999`): Tertiary text, captions, and metadata.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, card surfaces, text on orange/dark. Also the `on-primary` text color.
- **Surface Grey** (`#f6f6f6`): Cool-grey resting surface for segmented content blocks.
- **Surface Alt** (`#f9f9f9`): A slightly lighter secondary grey surface for alternating bands on the company page.
- **Hairline** (`#dcdcdc`): Thin borders, dividers, and card outlines — a primary separation device in this near-flat system.
- **Dark** (`#1a1a1a`): Near-black footer background (rendered alongside pure `#000000`), carrying white links.

### Accent
- **Brand-Identity Blue** (`#2d3ce6`): An electric blue used only inside the "BAROGO Brand Identity" block on the about page as a deliberate secondary-brand accent — never general UI chrome.

## 3. Typography Rules

### Font Family
- **Body / UI / Headlines**: `Pretendard` — the document default, carrying essentially the entire site (measured across 434–474 nodes per page). Weight 700 for display, weight 400–500 for text and nav.
- **Display Accent**: `Termina` (`termina, sans-serif`) — a geometric Latin face reserved for oversized numeral/Latin display accents (e.g. the ghosted 150px `2016` founding-year marker). Never used for hangul body text.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Mission Hero | Pretendard | 54px (3.38rem) | 700 | 1.33 | About-page mission headline |
| Hero / Section | Pretendard | 42px (2.63rem) | 700 | 1.43 | Homepage hero + section titles |
| Stat Numeral | Termina | 150px (9.38rem) | 700 | — | Ghosted background year numerals, `#000000` at 0.05 alpha |
| Sub-section | Pretendard | 36px (2.25rem) | 700 | 1.0 | Sub-section heads / stat block labels |
| Nav | Pretendard | 20px (1.25rem) | 500 | — | Top nav item (700 when active) |
| Button | Pretendard | 20px (1.25rem) | 700 | — | Primary CTA label |
| Button Small | Pretendard | 18px (1.13rem) | 700 | — | Outline button label |
| Body | Pretendard | 16px (1.00rem) | 400 | 1.0 | Standard reading / UI text |
| Caption | Pretendard | 12px (0.75rem) | 500 | — | Footer links |

### Principles
- **One family, size-and-weight hierarchy**: Pretendard does nearly all the work; hierarchy comes from size (16px → 42px → 54px) and weight (400 → 700), not from mixing typefaces or colors.
- **Bold display, light body**: every headline is weight 700; body and UI sit at weight 400. The weight jump is the primary emphasis signal.
- **Termina as numeral ornament only**: the geometric Latin face appears solely on oversized numerals and Latin wordmarks (the ghosted `2016`), never on functional hangul text.
- **High-contrast black text**: text is `#000000`/`#111111` on white — direct and legible, not the softened navy common to fintech peers.

## 4. Component Stylings

### Buttons

**Primary CTA**
- Background: `#fa5014`
- Text: `#ffffff`
- Radius: 3px
- Padding: 0px 40px
- Height: 72px
- Font: 20px / 700 / Pretendard
- Shadow: `rgba(0,0,0,0.2) 0px 2px 10px`
- Use: Primary call-to-action — "바로 문의하기" (the site's single primary action)

**Outline / Secondary**
- Background: transparent
- Text: `#fa5014`
- Border: 1px solid `#fa5014`
- Radius: 3px
- Padding: 0px 30px
- Height: 64px
- Font: 18px / 700 / Pretendard
- Use: Secondary actions — "스토어프로그램", "사용 설명서", "자세히 보기", "BI / GUIDE"

### Cards & Containers

**Feature Card**
- Background: `#ffffff`
- Radius: 12px
- Padding: 20px
- Shadow: `rgba(0,0,0,0.1) 0px 2px 20px`
- Use: Feature/info card grid on the about page (also rendered in `#fa5014`, `#000000`, `#2d3ce6`, and `#dcdcdc` fills)

**Stat Card**
- Background: `#ffffff`
- Radius: 16px
- Padding: 40px 32px
- Shadow: `rgba(0,0,0,0.1) 0px 2px 20px`
- Use: "숫자로 보는 바로고" (Barogo by the numbers) statistic cards

### Badges
- Background: `#f6f6f6`
- Text: `#666666`
- Radius: 20px
- Font: 12px / 500 / Pretendard
- Use: Small rounded category/status pills reusing the 20px surface radius

### Navigation
- Background: `#ffffff`
- Text: `#000000`
- Font: 20px / 500 / Pretendard
- Active: weight 700, `#000000`
- Use: Top horizontal nav ("배달대행 문의", "라이더 지원", "허브 창업", "회사 소개", "채용")

### Footer
- Background: `#1a1a1a`
- Links: `#ffffff`
- Font: 12px / 500 / Pretendard
- Use: Footer navigation on the near-black dark band

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://www.barogo.com/, https://www.barogo.com/aboutUs
**Tier 2 sources:** getdesign.md/barogo (0 files — "No designs found"); styles.refero.design/?q=barogo (no barogo-specific match — generic browse grid only)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base rhythm: ~8px, scaling 8 / 12 / 16 / 20 / 30 / 40 / 50
- Notable: buttons pad horizontally at 30px (outline) and 40px (primary CTA); cards pad at 20px, stat cards at 40px 32px; footer band pads 50px vertically

### Grid & Container
- Centered single-column hero anchored by the 42px Pretendard headline and the orange primary CTA
- Feature/info cards arranged in multi-column grids (12px radius), grouping services and store-program entry points
- Alternating full-width bands: white (`#ffffff`) content over cool-grey (`#f6f6f6` / `#f9f9f9`) resting sections
- About page adds oversized ghost numerals (Termina) as background typographic texture behind stat blocks

### Whitespace Philosophy
- **Operational clarity over decoration**: generous vertical rhythm between sections keeps a logistics-dense product feeling calm and scannable.
- **Flat segmentation**: sections separate by background tint (`#f6f6f6` vs `#ffffff`) and `#dcdcdc` hairlines rather than by heavy elevation.
- **Sharp, functional geometry**: the ~3px button corner keeps interactive chrome reading as fast and utilitarian.

### Border Radius Scale
- Small (3px): buttons — sharp, functional
- Medium (12px): feature/info cards
- Large (16px): stat cards
- X-Large (20px): rounded surfaces and pill-style chips
- Full (9999px): fully rounded elements when used

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, headings, inline text, most surfaces |
| Tint (Level 1) | `#f6f6f6` / `#f9f9f9` background shift | Section/card separation without elevation |
| Hairline (Level 2) | `1px solid #dcdcdc` border | Card and divider outlines |
| Card (Level 3) | `rgba(0,0,0,0.1) 0px 2px 20px` | Feature and stat cards |
| CTA (Level 4) | `rgba(0,0,0,0.2) 0px 2px 10px` | Primary orange call-to-action button |

**Shadow Philosophy**: Barogo is a near-flat system. Most of the page carries `box-shadow: none`; depth is communicated through flat tinted surfaces (`#f6f6f6`, `#f9f9f9`) and `#dcdcdc` hairlines. When elevation is used it is light and diffuse — a soft `rgba(0,0,0,0.1) 0px 2px 20px` lift on cards, and a slightly firmer, tighter `rgba(0,0,0,0.2) 0px 2px 10px` under the primary CTA so the single action button reads as pressable. This restraint keeps the logistics UI feeling fast and modern rather than heavy — emphasis comes from the orange (`#fa5014`) and the sharp geometry, not from stacked drop shadows.

## 7. Do's and Don'ts

### Do
- Reserve Barogo orange (`#fa5014`) for the primary CTA and outline-button ink — keep it the single "action" color
- Set every headline in Pretendard weight 700; use weight 400 at 16px for body and UI
- Use true black (`#000000`) / near-black (`#111111`) for text on white — direct and high-contrast
- Keep button corners sharp at ~3px; step cards up to 12px/16px and rounded surfaces to 20px
- Separate sections with flat tint (`#f6f6f6` / `#f9f9f9`) and `#dcdcdc` hairlines, not heavy shadows
- Keep elevation light — `rgba(0,0,0,0.1) 0px 2px 20px` on cards, firmer `rgba(0,0,0,0.2)` only on the CTA
- Use the black footer (`#1a1a1a`) with white (`#ffffff`) links for the closing band
- Reserve Termina and the electric blue (`#2d3ce6`) for display numerals and the brand-identity block respectively

### Don't
- Spread orange across many elements — it dilutes the single-action signal
- Set headlines in a light weight — display is always Pretendard 700
- Use navy or soft grey for primary text — Barogo text is true black on white
- Round buttons into full pills — the ~3px sharp corner is the functional read
- Lean on heavy stacked drop shadows for structure — use tint and hairlines instead
- Use Termina for hangul body text — it is a Latin/numeral display accent only
- Promote the electric blue (`#2d3ce6`) into general UI color — it belongs to the brand-identity block
- Mix in a second saturated accent alongside orange in product chrome

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, card grids stack |
| Tablet | 640–1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024–1440px | Full layout, centered hero, multi-column feature/stat grids |

### Touch Targets
- Primary CTA at 72px height with 40px horizontal padding — an unmistakable, comfortably tappable target
- Outline buttons at 64px height with 30px horizontal padding
- Nav links padded 10px vertically within the top header for touch spacing

### Collapsing Strategy
- Hero: 42px (home) / 54px (about) headline scales down on mobile, weight 700 maintained
- Feature/stat card grids: multi-column → 2-up → single stacked column
- Alternating white / tinted bands maintain full-width treatment; internal padding reduces
- Oversized Termina ghost numerals scale down or clip gracefully as background texture

### Image Behavior
- App screenshots and illustrations sit on flat surfaces with light or no shadow, consistent with the near-flat system
- Cards maintain their 12px/16px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / action: Barogo Orange (`#fa5014`)
- Heading / body text: Ink Black (`#000000`), Ink Soft (`#111111`)
- Secondary text: Body Grey (`#666666`)
- Muted text: Muted Grey (`#999999`)
- Background: Pure White (`#ffffff`)
- Resting surface: Surface Grey (`#f6f6f6`), Surface Alt (`#f9f9f9`)
- Hairline: `#dcdcdc`
- Footer / dark: `#1a1a1a`
- Brand-identity accent: Electric Blue (`#2d3ce6`)
- On-orange / on-dark text: White (`#ffffff`)

### Example Component Prompts
- "Create a hero on white background. Headline at 42px Pretendard weight 700, color #000000. One orange primary CTA: #fa5014 background, white text, 3px radius, 0 40px padding, 72px height, 20px/700 Pretendard, shadow rgba(0,0,0,0.2) 0px 2px 10px — '바로 문의하기'. Beside it an outline button: transparent, #fa5014 text, 1px solid #fa5014, 3px radius, 0 30px padding, 64px height, 18px/700."
- "Design a feature card: white #ffffff background, 12px radius, 20px padding, shadow rgba(0,0,0,0.1) 0px 2px 20px. Title in Pretendard weight 700 #000000, body 16px weight 400 #666666."
- "Build a stat card row ('숫자로 보는 바로고'): white cards, 16px radius, 40px 32px padding, light rgba(0,0,0,0.1) shadow. Place an oversized ghost numeral behind in Termina at 150px, #000000 at 0.05 alpha."
- "Create a top nav: white header, Pretendard 20px weight 500 links in #000000, weight 700 for the active item. Sections separate with #f6f6f6 tint and #dcdcdc hairlines. Close with a #1a1a1a footer carrying 12px/500 white links."

### Iteration Guide
1. Orange (`#fa5014`) is the single action color — do not spread it
2. Pretendard 700 for every headline; Pretendard 400 at 16px for body
3. Sharp ~3px button corners; cards at 12px/16px; rounded surfaces at 20px
4. Text is true black `#000000` / `#111111` on white — never navy
5. Structure with `#f6f6f6`/`#f9f9f9` tint and `#dcdcdc` hairlines, not heavy shadows
6. Keep elevation light — `rgba(0,0,0,0.1)` cards, firmer `rgba(0,0,0,0.2)` only on the CTA
7. Termina and electric blue (`#2d3ce6`) stay confined to display numerals and the brand-identity block

---

## 10. Voice & Tone

Barogo's voice is **direct, operational, and can-do** — the register of a logistics partner that measures itself by whether the delivery arrives. The tagline "무엇이든 어디서나" ("anything, anywhere") and the hero "무엇이든 어디서나 배달" set the tone: plain, capability-first Korean, no hype. Copy addresses two audiences at once — merchants ("사장님", the store owners) and riders — and stays practical and reassuring for both, framing Barogo as the infrastructure that lets a small business focus on its craft ("사장님의 정성 그대로" / "just as the owner made it").

| Context | Tone |
|---|---|
| Hero headlines | Plain, capability-first. "무엇이든 어디서나 배달." Confident, never superlative. |
| Merchant-facing copy | Supportive, respectful of the store owner. "사장님의 정성 그대로", "성공하는 매장의 노하우". |
| CTAs | Direct, low-friction. "바로 문의하기", "자세히 보기", "바로레터 구독하기". |
| Company / mission | Aspirational but grounded. "세상에 활력을 더하는 초연결 생태계를 만듭니다." |
| Data / trust copy | Concrete and numeric. "숫자로 보는 바로고" — lets the figures speak. |

**Voice samples (verbatim from live surfaces):**
- "무엇이든 어디서나" — brand tagline / homepage title (capability-first). *(verified live 2026-07-02)*
- "세상에 활력을 더하는 초연결 생태계를 만듭니다." — aboutUs mission headline (mission-framed). *(verified live 2026-07-02)*
- "성공하는 매장의 노하우" — homepage section heading (merchant-supportive). *(verified live 2026-07-02)*

**Forbidden register**: hype superlatives, fear-based urgency, jargon that hides the operational reality, exclamation-heavy sales copy. Barogo speaks like an operator, not a marketer.

## 11. Brand Narrative

Barogo (바로고) was founded in **2016** (the founding year is rendered as an oversized ghost numeral on the company page) as a last-mile delivery-dispatch platform addressing a structural gap in Korea's food-and-retail economy: individual stores had no reliable, technology-driven way to get orders to customers, and the delivery-agency market was fragmented and manual. Barogo's premise — captured in the mission line "세상에 활력을 더하는 초연결 생태계를 만듭니다" ("we build a hyper-connected ecosystem that adds vitality to the world") — was to become the shared logistics rails connecting merchants, riders, and delivery demand.

The product grew into one of Korea's largest delivery-dispatch networks, coordinating riders and store operators through software (the Barogo Store Manager program, rider apps, and hub-franchise operations visible in the site's "스토어프로그램", "라이더 지원", and "허브 창업" entry points). The "숫자로 보는 바로고" (Barogo by the numbers) section frames the company's scale in concrete figures rather than adjectives — an operator's instinct to let the metrics carry the claim.

What Barogo's design refuses is the decorative softness of consumer-lifestyle branding: there is no navy-and-pastel gentleness, no heavy card-stacking, no pill-rounded playfulness. What it embraces is an operator's aesthetic — one hot orange for action, true-black high-contrast text, a single workhorse typeface (Pretendard), sharp functional corners, and a flat, fast surface. The design says what the business does: move things, reliably, anywhere.

## 12. Principles

1. **Anything, anywhere — reliably.** The brand promise is universal reach with operational dependability. *UI implication:* keep the primary action ("바로 문의하기") always obvious in orange; never bury the path to getting started.
2. **One action, one color.** Orange (`#fa5014`) means "do this." *UI implication:* reserve the saturated orange for the primary CTA and outline ink so the next step is never ambiguous.
3. **Operator, not marketer.** Copy and layout favor plain capability over hype. *UI implication:* lead with concrete figures ("숫자로 보는 바로고") and direct labels; avoid superlatives and decorative flourish.
4. **Fast and flat.** A logistics product should feel quick and unfussy. *UI implication:* near-shadowless surfaces, tint-and-hairline separation, sharp ~3px corners — nothing that reads as slow or heavy.
5. **Respect the store owner.** The merchant ("사장님") is the customer whose craft Barogo protects. *UI implication:* merchant-facing copy stays supportive ("사장님의 정성 그대로"); tools present as approachable, not gatekeeping.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Barogo user segments (Korean store owners using delivery dispatch, delivery riders, hub franchise operators), not individual people.*

**김상현, 41, 대구.** A fried-chicken store owner who signed up for Barogo's Store Manager program to stop juggling multiple ad-hoc delivery riders. Values that a single dashboard routes orders and that support is a direct "문의하기" away. Chose Barogo because the pitch was operational and concrete, not a lifestyle promise.

**이도윤, 28, 서울.** A delivery rider who works through Barogo's rider app. Cares about steady dispatch volume and clear earnings, and found the "라이더 지원" onboarding path plain and fast. Distrusts platforms that over-design; trusts one that looks like it just works.

**박지은, 47, 경기.** A prospective hub-franchise operator evaluating "허브 창업". Reads the "숫자로 보는 바로고" figures to gauge the network's scale before committing. Wants transparent numbers and a no-nonsense interface over glossy marketing.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no orders / no results)** | White canvas. Single Ink Black (`#000000`) line at body size explaining there is nothing yet, with one orange (`#fa5014`) CTA to take the next operational step. No decorative illustration. |
| **Empty (saved / list none yet)** | Muted Grey (`#999999`) single line: nothing here yet, plus a path back to the primary flow. Calm and plain. |
| **Loading (dashboard / results fetch)** | Skeleton cards on `#f6f6f6` tinted surface at final 12px/16px dimensions. Light flat pulse consistent with the near-shadowless system — no heavy shimmer. |
| **Loading (action submit)** | Inline progress on the pressed control; the orange CTA stays visible with a reduced-opacity state rather than disappearing. |
| **Error (request failed)** | Inline message in Ink Black with a plain-language explanation and a retry. States what to do next — never a bare "오류가 발생했습니다". |
| **Error (form validation)** | Field-level message below the input in a direct tone; describes what is valid, not just "필수". |
| **Success (inquiry / application submitted)** | Brief inline confirmation in a plain, operational tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f6f6f6` blocks at final dimensions, 12px/16px radius, flat pulse. |
| **Disabled** | Muted Grey (`#999999`) text on reduced-opacity surface; the orange action fades rather than turning grey to preserve the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 220ms | Card/section reveal, dropdown, slide (hero carousel step) |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets, carousel slides |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and steady — matching the fast, flat aesthetic of a logistics operator. The homepage hero carousel advances with a `motion-standard / ease-enter` slide (the "Previous slide" / "Next slide" controls); buttons respond to press with a subtle opacity/scale shift. No bounce or spring — a delivery-infrastructure product signals reliability, not playfulness. Under `prefers-reduced-motion: reduce`, carousel auto-advance pauses and all transitions collapse to instant; the site remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on two brand-owned surfaces:
- https://www.barogo.com/ — homepage: hero H1 "무엇이든 어디서나 배달" (Pretendard 42px/700),
  primary CTA "바로 문의하기" (bg rgb(250,80,20) #fa5014, radius 3.008px, 20px/700, white text),
  outline buttons (#fa5014 text + 1px solid #fa5014), section H2s "성공하는 매장의 노하우"
  "사장님의 정성 그대로", black footer #1a1a1a with white links, radius freq 20px×45 / 3.008px×6,
  font Pretendard ×434.
- https://www.barogo.com/aboutUs — mission H1 "세상에 활력을 더하는 초연결 생태계를 만듭니다."
  (54px/700), ghost numeral "2016" (Termina 150px, #000000 @0.05 alpha), stat cards
  (16px radius), feature cards (12px radius, rgba(0,0,0,0.1) 0px 2px 20px), "BAROGO Brand
  Identity" block with #2d3ce6, "숫자로 보는 바로고" / "바로고가 걸어온 길" section headings.

Token-level claims (§1–9) are sourced from this live inspection (see .verification.md Raw samples).

Voice samples (§10) are verbatim from the live homepage and aboutUs page (tagline, mission H1,
section headings).

Brand narrative (§11): Barogo (바로고) is a Korean last-mile delivery-dispatch platform; the 2016
founding year is taken from the oversized ghost numeral on the aboutUs page and the mission line
"세상에 활력을 더하는 초연결 생태계를 만듭니다" is verbatim from that page. Broader scale/positioning
claims are general public knowledge about the company, not quoted from a single verified statement
in this turn.

Personas (§13) are fictional archetypes informed by publicly observable Barogo user segments
(store owners, delivery riders, hub franchise operators). Names are illustrative; they do not
refer to real people.

Interpretive claims (e.g. "operator, not marketer", "one action, one color", "fast and flat as a
rejection of consumer-lifestyle softness") are editorial readings connecting Barogo's observed
design to its positioning, not directly sourced Barogo statements.
-->
