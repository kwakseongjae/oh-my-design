---
id: selectstar
name: Selectstar
display_name_kr: 셀렉트스타
country: KR
category: ai
homepage: "https://selectstar.ai/"
primary_color: "#0c5fdb"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=selectstar.ai&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = live CTA / link blue (#0c5fdb); hover/link-alt brighter blue (#1274e7). Bootstrap-family neutral ladder (#212529 → #495057 → #6c757d → #adb5bd) on a #f8f9fa canvas. Light-blue tint surfaces use #5797f6 at 15% alpha; dark section bg #00001a."
  colors:
    primary: "#0c5fdb"
    primary-hover: "#1274e7"
    accent-blue: "#5797f6"
    sky: "#6ec1e4"
    canvas: "#ffffff"
    surface: "#f8f9fa"
    surface-alt: "#e9ecef"
    ink: "#212529"
    slate: "#495057"
    body: "#6c757d"
    muted: "#adb5bd"
    black: "#000000"
    navy: "#00001a"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Inter", kr: "Noto Sans KR" }
    display-hero: { size: 72, weight: 300, lineHeight: 1.25, tracking: -1.44, use: "English hero headline, Inter Light — 'Solution for Trustworthy AI'" }
    display:      { size: 60, weight: 600, lineHeight: 1.28, tracking: -1.2, use: "Product / blog hero display" }
    section:      { size: 48, weight: 600, lineHeight: 1.28, tracking: -0.96, use: "Section titles" }
    subsection:   { size: 36, weight: 600, lineHeight: 1.28, tracking: -0.72, use: "Feature / sub-section heads" }
    body:         { size: 16, weight: 400, lineHeight: 1.8, use: "Standard reading text, muted grey" }
    nav:          { size: 16, weight: 600, use: "Top-level nav items" }
    button:       { size: 14, weight: 600, use: "Header CTA / dropdown nav label" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 18, xl: 24, xxl: 38, section: 64 }
  rounded: { sm: 4, md: 10, lg: 24, full: 9999 }
  shadow:
    soft: "rgba(0, 0, 0, 0.15) 0px 1px 5px 0px"
    card: "rgba(0, 0, 0, 0.15) 0px 3px 8px 0px"
    float: "rgba(0, 0, 0, 0.05) 0px 2px 6px 0px, rgba(0, 0, 0, 0.1) 0px 8px 19.2px 0px"
  components:
    button-primary: { type: button, bg: "#0c5fdb", fg: "#ffffff", radius: "4px", height: "45px", padding: "9px 18px", font: "14px / 600 Inter", states: "hover #1274e7", use: "Header/primary CTA — 문의하기 / CONTACT" }
    button-pill: { type: button, bg: "#ffffff", fg: "#333333", radius: "50px", padding: "16px 38px", height: "64px", font: "20px / 400 Inter", shadow: "rgba(0,0,0,0.1) 0px 8px 19.2px", use: "Floating white pill CTA — 문의하기" }
    button-rounded: { type: button, bg: "#0c5fdb", fg: "#ffffff", radius: "26px", padding: "10px 24px", height: "50px", font: "16px / 400 Inter", use: "Newsletter Subscribe rounded CTA" }
    input-search: { type: input, bg: "#ffffff", fg: "#000000", radius: "4px", padding: "9px 18px", height: "47px", font: "16px Inter", use: "Blog search field, paired with blue Search button" }
    card: { type: card, bg: "#ffffff", radius: "10px", shadow: "rgba(0,0,0,0.15) 0px 3px 8px", use: "Feature / content card on grey canvas" }
    nav-link: { type: tab, fg: "#212529", font: "14px / 600 Inter", active: "text #0c5fdb", use: "Product dropdown / nav menu item" }
    tint-surface: { type: card, bg: "#5797f6", fg: "#0c5fdb", radius: "10px", use: "Light-blue tinted highlight surface, rendered at 15% alpha (base #5797f6)" }
    icon-chip: { type: badge, bg: "#e9ecef", fg: "#0c5fdb", radius: "9999px", height: "50px", use: "Circular icon chip / carousel control" }
  components_harvested: true
---

# Design System Inspiration of Selectstar

## 1. Visual Theme & Atmosphere

Selectstar (셀렉트스타) is a Korean AI-evaluation and data company whose homepage reads like a serious research-grade product rather than a flashy startup pitch. The atmosphere is calm, institutional, and blue — a light cool-grey canvas (`#f8f9fa`) carries white content cards while a single confident royal blue (`#0c5fdb`) does all the work of "action," appearing on every CTA, link, and interactive accent. Text sits in a soft Bootstrap-family neutral ladder — near-black `#212529` for the strongest labels, slate `#495057` for headings, and a muted grey `#6c757d` for the vast majority of body copy — which keeps the page quiet, legible, and trustworthy without ever reaching for pure black except on occasional maximum-contrast headings (`#000000`).

The typographic personality is deliberately restrained and Western-technical: everything is set in **Inter** (with Noto Sans KR carrying hangul), and the signature move is the hero headline running at an unusually **light weight 300** — "Solution for Trustworthy AI" at 72px with tight `-1.44px` tracking. This whisper-weight display is the opposite of the bold-hero convention; it signals research confidence rather than marketing volume. Below the hero, section headings snap back to weight 600 (48px, `-0.96px`) so the hierarchy reads as "quiet authority up top, firm structure below." Body text is a generous 16px at a relaxed 1.8 line-height, giving the dense bilingual content room to breathe.

Depth is soft and sparing. Most surfaces are flat white cards on the grey canvas, separated by subtle grey (`#e9ecef`) fills and light shadows (`rgba(0, 0, 0, 0.15) 0px 3px 8px 0px`); the floating white pill CTA earns a two-layer ambient shadow. Accents beyond the primary blue are minimal — a lighter blue tint (`#5797f6` at 15% alpha) for highlight surfaces, a soft sky cyan (`#6ec1e4`) for illustration touches, and a deep near-black navy (`#00001a`) for immersive dark sections. Geometry is conservative: 4px radius on the workhorse buttons and inputs, 10px on cards, and full pills (24px–50px, `9999px`) reserved for softer CTAs and circular controls.

**Key Characteristics:**
- Single royal blue (`#0c5fdb`) as the only action color — CTAs, links, active nav
- Inter everywhere (Noto Sans KR for hangul); light **weight 300** hero at 72px is the signature
- Bootstrap-family neutral ladder: `#212529` → `#495057` → `#6c757d` → `#adb5bd`
- Cool light-grey canvas (`#f8f9fa`) with flat white cards and light `rgba(0,0,0,0.15)` shadows
- Conservative geometry: 4px workhorse radius, 10px cards, pill (24px–50px) softer CTAs
- Light-blue tint (`#5797f6` @15%) + sky cyan (`#6ec1e4`) as the only secondary accents
- Deep navy (`#00001a`) dark sections for brand immersion
- Relaxed 1.8 body line-height for dense bilingual (KO/EN) reading

## 2. Color Palette & Roles

### Primary
- **Selectstar Blue** (`#0c5fdb`): Primary brand color and the single action color — CTA backgrounds, link text, active nav, interactive accents.
- **Blue Hover** (`#1274e7`): Slightly brighter blue for hover states and secondary link emphasis.
- **On Primary** (`#ffffff`): White text/icon on blue CTAs and dark surfaces.

### Accent
- **Accent Blue** (`#5797f6`): Light-blue tint used at ~15% alpha for highlight surfaces and soft callout backgrounds.
- **Sky Cyan** (`#6ec1e4`): Soft cyan for illustration touches and decorative accents.

### Neutral & Surface
- **Pure White** (`#ffffff`): Card surfaces, nav bar, and text on blue/dark.
- **Canvas Grey** (`#f8f9fa`): Page background — a cool light grey that segments content into airy zones.
- **Surface Alt** (`#e9ecef`): Slightly darker grey for circular icon chips, dividers, and alternating fills.
- **Navy Dark** (`#00001a`): Near-black navy background for immersive dark brand sections.

### Text Hierarchy
- **Ink** (`#212529`): Strongest labels, nav items, dark headings.
- **Slate** (`#495057`): Primary heading color for hero and section titles.
- **Body Grey** (`#6c757d`): The dominant body-text grey — descriptions, paragraphs, captions.
- **Muted Grey** (`#adb5bd`): Faint tertiary text, placeholders, lowest-emphasis labels.
- **Pure Black** (`#000000`): Occasional maximum-contrast headings and search-field text.
- **Slate 333** (`#333333`): Text on the floating white pill CTA.

## 3. Typography Rules

### Font Family
- **Sans (primary)**: `Inter` — used for all English display, headings, body, nav, and UI labels.
- **Korean**: `Noto Sans KR` — carries hangul headings and body where Inter lacks glyphs.
- Weights in use: 300 (hero display), 400 (body, softer CTAs), 600 (headings, nav, primary buttons).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Inter | 72px (4.50rem) | 300 | 1.25 (90px) | -1.44px | "Solution for Trustworthy AI" — light-weight signature |
| Display | Inter | 60px (3.75rem) | 600 | 1.28 (76.8px) | -1.2px | Product / blog hero |
| Section Heading | Inter | 48px (3.00rem) | 600 | 1.28 (61.44px) | -0.96px | Section titles |
| Sub-section | Inter | 36px (2.25rem) | 600 | 1.28 (46.08px) | -0.72px | Feature / sub-section heads |
| Body | Inter | 16px (1.00rem) | 400 | 1.80 (28.8px) | normal | Standard reading text, muted grey |
| Nav | Inter | 16px (1.00rem) | 600 | normal | normal | Top-level nav items |
| Button | Inter | 14px (0.88rem) | 600 | normal | normal | Header CTA / dropdown nav labels |

### Principles
- **Light hero, firm structure**: the 72px weight-300 hero is the defining choice; every headline below it uses weight 600. Lightness at the top signals research confidence, not marketing hype.
- **Tight tracking scales with size**: -1.44px at 72px, -1.2px at 60px, -0.96px at 48px, -0.72px at 36px; body stays at normal tracking.
- **One family, two scripts**: Inter for Latin, Noto Sans KR for hangul — they never swap roles.
- **Generous body leading**: 16px body at 1.8 line-height keeps dense bilingual content readable.

## 4. Component Stylings

### Buttons

**Primary CTA**
- Background: `#0c5fdb`
- Text: `#ffffff`
- Radius: 4px
- Padding: 9px 18px
- Height: 45px
- Font: 14px Inter weight 600
- Hover: `#1274e7`
- Use: Header and primary call-to-action — "문의하기" / "CONTACT"

**Floating White Pill**
- Background: `#ffffff`
- Text: `#333333`
- Radius: 50px
- Padding: 16px 38px
- Height: 64px
- Font: 20px Inter weight 400
- Shadow: `rgba(0, 0, 0, 0.05) 0px 2px 6px 0px, rgba(0, 0, 0, 0.1) 0px 8px 19.2px 0px`
- Use: Prominent floating CTA — "문의하기"

**Rounded Subscribe**
- Background: `#0c5fdb`
- Text: `#ffffff`
- Radius: 26px
- Padding: 10px 24px
- Height: 50px
- Font: 16px Inter weight 400
- Use: Newsletter "Subscribe" / "뉴스레터 구독하기" rounded CTA

### Inputs

**Search Field**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 4px
- Padding: 9px 18px
- Height: 47px
- Font: 16px Inter
- Use: Blog search input, paired with a blue `#0c5fdb` Search button

### Cards & Containers

**Feature Card**
- Background: `#ffffff`
- Radius: 10px
- Shadow: `rgba(0, 0, 0, 0.15) 0px 3px 8px 0px`
- Use: Content / feature card sitting on the grey `#f8f9fa` canvas

**Tinted Highlight Surface**
- Background: `#5797f6`
- Text: `#0c5fdb`
- Radius: 10px
- Use: Light-blue callout surface, rendered at ~15% alpha (base `#5797f6`)

### Badges

**Icon Chip (Circular)**
- Background: `#e9ecef`
- Text: `#0c5fdb`
- Radius: 9999px (full circle)
- Height: 50px
- Use: Circular icon chip / carousel prev-next control

### Navigation
- Background: `#ffffff`
- Text: `#212529`
- Font: 14px Inter weight 600 (dropdown items), 16px weight 600 (top-level)
- Active: blue `#0c5fdb` text
- Use: Top horizontal nav with Products / Resources / IR dropdowns ("데이터 구축", "데이터셋 스토어", "검증 솔루션 Datumo Eval", "AI 레드팀")

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://selectstar.ai/ , https://blog.datumo.com/
**Tier 2 sources:** getdesign.md/selectstar — no entry ("0 DESIGN.md files"); styles.refero.design/?q=selectstar — no specific entry (generic browse grid)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px, Bootstrap-family scale
- Scale: 4px, 8px, 12px, 16px, 18px, 24px, 38px, 64px
- Notable: button horizontal padding lands at 18px (compact) or 38px (pill CTA); section rhythm at 64px

### Grid & Container
- Centered content column with a large hero anchored by the weight-300 headline
- Feature sections use white cards on the grey `#f8f9fa` canvas, often in 2–3 column grids
- Full-width dark navy (`#00001a`) sections for product/brand immersion
- Blog uses a search bar plus a card grid of posts

### Whitespace Philosophy
- **Breathing room**: despite being a dense, data-heavy AI product, the marketing surface is airy with generous vertical rhythm.
- **Flat segmentation**: content separates by background tint (`#f8f9fa` vs `#ffffff`) and light shadows rather than heavy borders.
- **Restraint with color**: white and grey dominate; blue is spent only on the action layer.

### Border Radius Scale
- Small (4px): buttons, inputs, badges — the workhorse
- Medium (10px): cards and content containers
- Large (24px–26px): rounded/soft CTAs
- Pill / Full (50px, `9999px`): floating CTA, circular icon chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f8f9fa` / `#e9ecef` background shift | Card and section separation without elevation |
| Soft (Level 2) | `rgba(0, 0, 0, 0.15) 0px 1px 5px 0px` | Subtle lift on small elements |
| Card (Level 3) | `rgba(0, 0, 0, 0.15) 0px 3px 8px 0px` | Feature cards, content panels |
| Float (Level 4) | `rgba(0, 0, 0, 0.05) 0px 2px 6px 0px, rgba(0, 0, 0, 0.1) 0px 8px 19.2px 0px` | Floating pill CTA, prominent controls |

**Shadow Philosophy**: Selectstar keeps depth soft and neutral. Shadows are low-opacity black (`rgba(0, 0, 0, 0.15)`) rather than brand-tinted — the brand identity lives in the blue action layer and the clean grey canvas, not in elevation. Most surfaces stay flat; a shadow appears only to lift interactive chrome (cards, the floating CTA) a small, believable distance off the page. Dark navy (`#00001a`) sections create depth through background contrast instead of shadow.

## 7. Do's and Don'ts

### Do
- Use the single royal blue (`#0c5fdb`) for every action — CTAs, links, active nav
- Set the primary hero light (Inter weight 300) at large sizes for research-grade confidence
- Use weight 600 for all headings below the hero and for primary buttons
- Keep body text in muted grey (`#6c757d`) at 16px / 1.8 line-height
- Separate content with the grey canvas (`#f8f9fa`) and light `rgba(0,0,0,0.15)` shadows
- Use 4px radius on workhorse buttons/inputs, 10px on cards
- Reserve pills (24px–50px) for softer CTAs and circular icon chips
- Use Inter for Latin and Noto Sans KR for hangul

### Don't
- Introduce a second saturated accent — blue is the only action color
- Set the hero in a heavy weight — the weight-300 lightness is the signature
- Use pure black (`#000000`) for body text — the neutral ladder tops out at `#212529`
- Add heavy or colored drop shadows — depth stays soft and neutral
- Spread blue across decorative elements — keep it on the action layer
- Use large pill radius on content cards — cards are 10px, not rounded
- Apply positive letter-spacing on display headings — Selectstar tracks tight

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero compresses, nav collapses to menu |
| Tablet | 640-1024px | 2-column card grids, moderate padding |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column feature grids |

### Touch Targets
- Primary CTA at 45px height with 18px horizontal padding
- Floating pill CTA at 64px height, unmistakable target
- Nav dropdown items at 45px row height
- Circular icon chips at 50px diameter

### Collapsing Strategy
- Hero: 72px headline scales down on mobile, weight 300 maintained
- Nav: horizontal dropdowns collapse to a hamburger menu
- Feature card grids: multi-column → stacked single column
- Dark navy sections maintain full-width treatment, reduce internal padding

### Image Behavior
- Product screenshots and illustration accents sit on white cards with soft shadow
- Cards maintain 10px radius across breakpoints
- Sky-cyan (`#6ec1e4`) illustration touches scale with the section

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary / CTA / link: Selectstar Blue (`#0c5fdb`)
- Hover: Blue Hover (`#1274e7`)
- Accent tint: Accent Blue (`#5797f6`) at 15% alpha
- Decorative cyan: Sky (`#6ec1e4`)
- Background canvas: Canvas Grey (`#f8f9fa`)
- Cards / nav: Pure White (`#ffffff`)
- Surface alt / chips: `#e9ecef`
- Headings: Slate (`#495057`) / Ink (`#212529`)
- Body text: Body Grey (`#6c757d`)
- Muted: `#adb5bd`
- Dark section: Navy (`#00001a`)

### Example Component Prompts
- "Create a hero on a light grey `#f8f9fa` canvas. English headline at 72px Inter weight 300, line-height 1.25, letter-spacing -1.44px, color `#495057`. Below it a primary blue CTA: `#0c5fdb` background, white text, 4px radius, 9px 18px padding, 14px Inter weight 600 — hover `#1274e7`."
- "Design a feature card: white `#ffffff` background, 10px radius, shadow `rgba(0,0,0,0.15) 0px 3px 8px`. Title 36px Inter weight 600, letter-spacing -0.72px, `#212529`. Body 16px Inter weight 400, `#6c757d`, line-height 1.8."
- "Build a blog search bar: white `#ffffff` input, 4px radius, 9px 18px padding, 16px Inter, black `#000000` text, paired with a `#0c5fdb` Search button (white text, 4px radius)."
- "Create top nav on white: Inter 16px weight 600 top-level items in `#212529`, dropdown items 14px weight 600, active item in blue `#0c5fdb`. Primary blue CTA 'CONTACT' right-aligned."
- "Design a dark section: `#00001a` background, white text. Display heading 60px Inter weight 600, letter-spacing -1.2px. Body 16px, `rgba(255,255,255,0.7)`."

### Iteration Guide
1. Blue (`#0c5fdb`) is the single action color — never spread it decoratively
2. Hero is Inter weight 300; everything else weight 600 (headings) or 400 (body)
3. Body text is muted grey `#6c757d` at 16px / 1.8, never pure black
4. 4px radius for buttons/inputs, 10px for cards, pills for soft CTAs and circular chips
5. Depth is soft neutral shadow (`rgba(0,0,0,0.15)`), never brand-tinted
6. Canvas is grey `#f8f9fa`; cards are white `#ffffff`
7. Noto Sans KR for hangul, Inter for Latin

---

## 10. Voice & Tone

Selectstar's voice is **credible, precise, and reassuring** — the register of a research-grade AI company that sells trust, not hype. The hero line "Solution for Trustworthy AI" sets the tone: a plain, confident claim rather than a superlative. Korean copy is equally measured, naming what the product does ("AI 개발을 가속하세요" — "Accelerate your AI development") and backing it with proof ("세계 최고 권위 AI 학회 등재" — "Published at the world's top AI conferences"). The audience is technical — ML engineers, data teams, enterprise AI leads — so the voice respects the reader as a peer and leads with evidence.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, evidence-first. "Solution for Trustworthy AI." Never superlative. |
| Product names | Plain and functional. "데이터 구축", "데이터셋 스토어", "검증 솔루션 Datumo Eval", "AI 레드팀". |
| CTAs | Direct, low-pressure. "문의하기", "도입 문의하기", "Try Demo", "Subscribe". |
| Proof / credibility copy | Concrete, cited. Names conferences, awards, and dataset scope. |
| Feature descriptions | Benefit-first, jargon decoded for a technical-but-broad audience. |

**Voice samples (verbatim from live surfaces):**
- "Solution for Trustworthy AI" — hero H1, selectstar.ai (mission-framed). *(verified live 2026-07-02)*
- "AI 개발을 가속하세요" — section H2, selectstar.ai (benefit claim). *(verified live 2026-07-02)*
- "세계 최고 권위 AI 학회 등재" — section H2, selectstar.ai (proof / credibility). *(verified live 2026-07-02)*
- "Data-Centric AI Insights: Trends, Innovations, and Practical Advice" — blog page title, datumo.com/blog. *(verified live 2026-07-02)*

**Forbidden register**: hype superlatives ("revolutionary", "game-changing"), fear-based AI-risk marketing, undefined jargon left unexplained, exclamation-heavy urgency.

## 11. Brand Narrative

Selectstar (셀렉트스타) is a Korean AI company built around a single premise: **AI is only as trustworthy as the data and evaluation behind it.** Founded in 2018 (CEO 김세엽 / Kim Se-yeop), the company began by solving the hard, unglamorous problem of high-quality training-data construction — crowdsourced collection and labeling — and grew into a full "data-centric AI" platform spanning dataset construction, a dataset store, data-voucher programs, and verification consulting. *(Founding year and leadership are widely documented public facts; see the sources comment below.)*

As large language models moved from research into production, Selectstar extended the same rigor from data into **evaluation** — the product line marketed globally under the **Datumo** brand (Datumo Eval for LLM evaluation, plus an AI Red Team offering). The homepage's proof-first framing — "세계 최고 권위 AI 학회 등재" ("published at the world's top AI conferences") — reflects a company that treats academic credibility as a product feature, not a vanity metric.

What Selectstar refuses, visible in its design: the hype aesthetic of consumer AI marketing (no neon gradients, no breathless superlatives) and the intimidating opacity of enterprise software. What it embraces: a clean grey-and-white research canvas, a single trustworthy blue, a light-weight hero that signals confidence over volume, and copy that leads with evidence. The design is the argument — "trustworthy AI" rendered as calm, precise, credible interface.

## 12. Principles

1. **Trust is the product.** Everything ladders up to "Trustworthy AI." *UI implication:* lead with proof (conferences, benchmarks, scope); keep the interface calm and credible, never salesy.
2. **Evidence over hype.** The brand cites rather than claims. *UI implication:* pair every benefit statement with concrete proof; forbid superlatives in copy.
3. **One action, one color.** Blue (`#0c5fdb`) means "do this." *UI implication:* reserve the saturated blue exclusively for CTAs, links, and active states.
4. **Quiet confidence.** The weight-300 hero says "we don't need to shout." *UI implication:* lightness at the top, firm weight-600 structure below; restraint reads as authority.
5. **Clarity for a technical audience.** ML engineers and data teams are peers. *UI implication:* decode jargon, keep density readable (16px / 1.8 body), and respect the reader's expertise.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Selectstar user segments (ML engineers, enterprise AI leads, data-team managers), not individual people.*

**정민석, 33, 서울.** An ML engineer at a large-model team who needs high-quality Korean evaluation sets. Chose Selectstar because the credibility signals (top-conference publications) told him the data methodology was rigorous, not crowdsourced noise.

**Grace Lee, 41, Seoul/San Jose.** Head of AI at a mid-market enterprise adopting LLMs. Uses Datumo Eval to benchmark model quality before shipping. Values the calm, evidence-first surface — it reads like a research partner, not a vendor.

**한지우, 29, 판교.** A data-operations manager coordinating labeling and dataset construction. Appreciates that the product names are plain ("데이터 구축", "데이터셋 스토어") and that the interface stays legible under dense, bilingual content.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no datasets / results)** | White card on `#f8f9fa` canvas. Single Ink (`#212529`) line explaining nothing is here yet, with one blue `#0c5fdb` CTA to start. No clutter. |
| **Empty (search, no matches)** | Body-grey (`#6c757d`) single line: no results, with the filter/query visible above to adjust. Never a bare "no data". |
| **Loading (list / results fetch)** | Skeleton cards at final dimensions, 10px radius, on the grey canvas. Soft flat pulse consistent with the low-shadow system. |
| **Loading (evaluation running)** | Inline progress with blue `#0c5fdb` accent; previous content stays visible. |
| **Error (request failed)** | Inline message in Ink (`#212529`) with a plain-language explanation and a retry. States what to do next, not just "오류". |
| **Error (form validation)** | Field-level message below the input; describes what's valid, not just "필수". |
| **Success (submitted / saved)** | Brief inline confirmation in a calm tone with the blue accent; next-step detail linked below. No celebratory emoji. |
| **Skeleton** | `#e9ecef` blocks at final dimensions, 10px radius, flat pulse. |
| **Disabled** | Muted-grey (`#adb5bd`) text on reduced-opacity surface; blue actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, focus, button press |
| `motion-standard` | 200ms | Card / section reveal, dropdown, sheet |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, dropdowns, panels |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and restrained — consistent with the calm, research-grade aesthetic. Nav dropdowns and cards fade/rise a few pixels at `motion-standard / ease-enter`; the floating pill CTA lifts subtly on hover. No bounce or spring — a trustworthy-AI product signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on two brand surfaces:
- https://selectstar.ai/ — homepage (all token claims). Observed: hero H1 "Solution for
  Trustworthy AI" Inter 72px / weight 300 / -1.44px / color rgb(73,80,87); section H2
  "AI 개발을 가속하세요" 48px / 600 / -0.96px; H2 "세계 최고 권위 AI 학회 등재";
  primary CTA "문의하기" bg rgb(12,95,219) #0c5fdb / 4px / white; body rgb(108,117,125)
  #6c757d on canvas rgb(248,249,250) #f8f9fa; document.title "AI 평가 솔루션 기업 - 셀렉트스타".
- https://blog.datumo.com/ (redirects to datumo.com/blog/) — confirms the same system:
  CONTACT / Try Demo / Search buttons bg #0c5fdb; search input #ffffff 4px; H1 "Datumo Blog"
  Inter 60px / 600 / rgb(73,80,87); page title "Data-Centric AI Insights...".

Token-level claims (§1-9) are sourced from this live inspection.

Voice samples (§10) are verbatim from the live surfaces (hero H1, section H2, blog title).

Brand narrative (§11): Selectstar (셀렉트스타) is a Korean AI data / evaluation company;
founded 2018, CEO 김세엽 (Kim Se-yeop); product line marketed globally as "Datumo"
(Datumo Eval for LLM evaluation, AI Red Team). Product names ("데이터 구축", "데이터셋 스토어",
"검증 솔루션 Datumo Eval", "AI 레드팀") are observed live in the nav. Founding year and
leadership are widely documented public facts, not directly quoted from a verified
Selectstar statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable Selectstar user
segments (ML engineers, enterprise AI leads, data-team managers). Names are illustrative;
they do not refer to real people.

Interpretive claims (e.g., "the design is the argument", "one action, one color",
"quiet confidence") are editorial readings connecting Selectstar's observed design to its
positioning, not directly sourced Selectstar statements.
-->
