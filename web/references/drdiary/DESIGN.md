---
id: drdiary
name: Dr.diary
display_name_kr: 닥터다이어리
country: KR
category: healthcare
homepage: "https://drdiary.co.kr/"
primary_color: "#3eaeff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=drdiary.co.kr&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = sky-blue gradient anchor (#3eaeff); brand identity is a tri-stop sweep #3eaeff→#ff5a8c→#dc6eff (+#00c8fa cyan tail). Headings ink-navy (#232f4d); body pure black (#000000) on white. Flat, shadow-free."
  colors:
    primary: "#3eaeff"
    accent-pink: "#ff5a8c"
    accent-purple: "#dc6eff"
    accent-cyan: "#00c8fa"
    accent-violet: "#4970f5"
    ink: "#232f4d"
    ink-pure: "#000000"
    slate: "#4f5971"
    muted: "#9197a6"
    faint: "#bdc1ca"
    canvas: "#ffffff"
    surface: "#f5f8fb"
    hairline: "#dee0e4"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Pretendard" }
    heading:    { size: 40, weight: 600, lineHeight: 1.4, use: "Section headlines (H2), ink navy" }
    card-title: { size: 18, weight: 500, lineHeight: 1.4, use: "Press / news card titles (H3)" }
    nav:        { size: 20, weight: 400, lineHeight: 1.2, use: "Top navigation links, slate" }
    body:       { size: 16, weight: 400, lineHeight: 1.5, use: "Standard reading text, Pretendard" }
    button:     { size: 18, weight: 500, lineHeight: 1.2, use: "App-store download CTA label" }
    more-link:  { size: 20, weight: 600, lineHeight: 1.2, use: "'전체보기' more-link, faint grey" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 40, section: 64 }
  rounded: { sm: 8, md: 16, pill: 100, full: 9999 }
  shadow:
    none: "none"
  components:
    news-card:     { type: card, bg: "#ffffff", border: "1px solid #dee0e4", radius: "16px", shadow: "none", use: "Press/news cards on homepage — flat, hairline outline" }
    value-card:    { type: card, bg: "#f5f8fb", radius: "16px", use: "Value/feature card on cool-grey tinted section band" }
    store-cta:     { type: button, fg: "#ffffff", border: "1px solid #ffffff", radius: "8px", padding: "12px 16px", font: "18px / 500 Pretendard", use: "App Store / Google Play download, outline on dark hero" }
    nav-link:      { type: tab, fg: "#4f5971", font: "20px / 400 Pretendard", active: "text sky-blue #3eaeff", use: "Top nav item (Platform, Solution, Brand, News, Contact)" }
    gradient-pill: { type: badge, fg: "#ff5a8c", radius: "9999px", use: "Gradient emphasis text — #ff5a8c to #dc6eff to #00c8fa signature sweep" }
  components_harvested: true
---

# Design System Inspiration of Dr.diary

## 1. Visual Theme & Atmosphere

Dr.diary (닥터다이어리) is a Korean healthcare and lifestyle-tech company built around hyper-personalized chronic-disease care — blood-glucose tracking, continuous glucose monitoring (CGM), and data-driven diabetes management. Its corporate site reads as clean, clinical, and optimistic rather than heavy or institutional: a pure white canvas (`#ffffff`) with occasional cool-grey tinted bands (`#f5f8fb`) segmenting content into airy, breathable zones. Text sits in ink navy (`#232f4d`) for headings and pure black (`#000000`) for body copy, giving the page a precise, trustworthy medical-grade weight without the cold navy-and-gold chrome of legacy health institutions.

The defining brand signature is a **tri-stop gradient sweep** — sky-blue (`#3eaeff`) flowing into hot pink (`#ff5a8c`) and violet-purple (`#dc6eff`), with a cyan (`#00c8fa`) tail on emphasis text. This gradient is the identity: it renders as clipped text on hero headlines and stat figures, and as a horizontal accent bar under key sections. The sky-blue end anchors the palette and functions as the single "trust" color (it is by far the most frequent solid accent), while the pink-purple end injects consumer-app warmth — the visual argument that managing a chronic condition can be approachable, even friendly, not a lifelong clinical burden.

Typographically the system is Korean-modern and restrained: **Pretendard** carries everything, the de-facto Korean product font optimized for dense hangul legibility. Section headlines run at 40px / weight 600 in ink navy; body drops to a quiet 16px / weight 400 pure black; nav sits at 20px / weight 400 slate (`#4f5971`). What most distinguishes Dr.diary from its fintech-adjacent peers is its total commitment to **flatness** — live inspection found `box-shadow: none` across the hero, nav, headings, and every card. Separation comes entirely from tinted surfaces (`#f5f8fb`), thin hairlines (`#dee0e4`), and 16px-radius cards. The result is a fast, mobile-native, medical-consumer aesthetic: engineered enough to signal data rigor, soft enough to feel like a wellness product.

**Key Characteristics:**
- Signature tri-stop gradient — sky-blue `#3eaeff` → pink `#ff5a8c` → purple `#dc6eff` (with `#00c8fa` cyan tail) as clipped text and accent bars
- Sky-blue (`#3eaeff`) as the single anchor/trust accent — the most frequent solid color
- Pretendard for the entire type system — headlines at 40px/600, body at 16px/400
- Ink navy (`#232f4d`) headings and pure black (`#000000`) body on a white (`#ffffff`) canvas
- Flat, shadow-free depth: `box-shadow: none` everywhere; separation via `#f5f8fb` tint and `#dee0e4` hairlines
- 16px-radius cards as the container workhorse; 8px on outline CTAs
- Cool slate-grey text ladder (`#4f5971` → `#9197a6` → `#bdc1ca`) for hierarchy
- Secondary blue-violet (`#4970f5`) for occasional link/icon accents

## 2. Color Palette & Roles

### Primary & Gradient
- **Sky Blue** (`#3eaeff`): Primary brand color and gradient anchor. The leading stop of the horizontal brand sweep and the single most frequent solid accent — the system's "trust/action" color.
- **Accent Pink** (`#ff5a8c`): The warm middle of the signature gradient; injects consumer-app friendliness into an otherwise clinical palette.
- **Accent Purple** (`#dc6eff`): The violet-magenta stop of the gradient; used on emphasis/stat text and the accent bar.
- **Accent Cyan** (`#00c8fa`): The cyan tail on the tri-stop headline gradient (`#ff5a8c` → `#dc6eff` → `#00c8fa`).
- **Accent Violet** (`#4970f5`): A secondary blue-violet used sparingly for links and icon accents.

### Text & Ink
- **Ink Navy** (`#232f4d`): Primary heading color — a deep blue-black that carries medical-grade trust without harshness.
- **Pure Black** (`#000000`): Body copy and dense reading text on the white canvas.
- **Slate** (`#4f5971`): Navigation links and secondary labels.
- **Muted Slate** (`#9197a6`): Tertiary text, captions, metadata.
- **Faint Blue-Grey** (`#bdc1ca`): Lowest-emphasis labels ("전체보기" more-links), disabled text, placeholders.

### Surface & Border
- **Pure White** (`#ffffff`): Page background, card surfaces, text on gradient/dark hero. Also the on-primary text color (`on-primary` = `#ffffff`).
- **Surface Grey** (`#f5f8fb`): Cool-grey tinted band for value/feature sections — the primary segmentation device.
- **Hairline** (`#dee0e4`): Thin 1px borders and card outlines — the separation device in a shadow-free system.

## 3. Typography Rules

### Font Family
- **Sans (all roles)**: `Pretendard` (with `Pretendard Fallback`, then `-apple-system` / `system-ui`) — the document default across headlines, nav, body, and UI. No separate display face; weight is the hierarchy lever (400 body → 500 titles → 600 headlines).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Color | Notes |
|------|------|------|--------|-------------|-------|-------|
| Section Heading | Pretendard | 40px (2.50rem) | 600 | 1.4 | `#232f4d` | H2 section titles |
| Card Title | Pretendard | 18px (1.13rem) | 500 | 1.4 | `#232f4d` | Press/news card headings (H3) |
| Nav Link | Pretendard | 20px (1.25rem) | 400 | 1.2 | `#4f5971` | Top navigation items |
| Button | Pretendard | 18px (1.13rem) | 500 | 1.2 | `#ffffff` | App-store download CTA label |
| More Link | Pretendard | 20px (1.25rem) | 600 | 1.2 | `#bdc1ca` | "전체보기" more-links |
| Body | Pretendard | 16px (1.00rem) | 400 | 1.5 (24px) | `#000000` | Standard reading text |

### Principles
- **One font, weight as hierarchy**: Pretendard carries everything; the jump from 400 (body) to 600 (headlines) is the primary hierarchy signal, not a font swap.
- **Ink navy over pure black for headlines**: Headings use `#232f4d` (a warm blue-black) while body stays pure black (`#000000`) — a subtle two-tone that keeps headlines premium.
- **Hangul-first sizing**: Body sits at a comfortable 16px / 1.5 line-height — generous for hangul legibility in an information-dense health context.
- **Gradient is a type treatment**: The brand gradient appears as clipped text on hero words and stat figures, never as a heavy fill behind paragraphs — color energy stays reserved for emphasis.

## 4. Component Stylings

### Buttons

**App-Store Download CTA (Outline)**
- Background: transparent
- Text: `#ffffff`
- Border: 1px solid `#ffffff`
- Radius: 8px
- Padding: 12px 16px
- Font: 18px Pretendard weight 500
- Height: 54px
- Use: "App Store" / "Google Play" download buttons, outlined over the dark/imagery hero — the site's primary call-to-action

### Cards & Containers

**Press / News Card**
- Background: `#ffffff`
- Border: 1px solid `#dee0e4`
- Radius: 16px
- Shadow: none
- Use: Press/news tiles in the "닥터다이어리 새소식" grid — flat, hairline-outlined

**Value / Feature Card (Tinted)**
- Background: `#f5f8fb`
- Text: `#232f4d`
- Radius: 16px
- Shadow: none
- Use: Value/feature card sitting on the cool-grey tinted section band

### Navigation

**Top Nav Link**
- Text: `#4f5971`
- Font: 20px Pretendard weight 400
- Padding: 12px 8px
- Height: 48px
- Active: sky-blue `#3eaeff` text
- Use: Top navigation items (Platform, Solution, Brand, News, Contact)

**More Link**
- Text: `#bdc1ca`
- Font: 20px Pretendard weight 600
- Use: "전체보기" section more-links (lowest-emphasis)

### Badges

**Gradient Emphasis Pill**
- Text: `#ff5a8c`
- Radius: 9999px (full)
- Use: Gradient-clipped emphasis text / stat figures — the signature `#ff5a8c` → `#dc6eff` → `#00c8fa` sweep

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://drdiary.co.kr/ | https://careers.drdiary.co.kr/9acdc4b5-ea9b-484c-8fcb-baf528c25a26
**Tier 2 sources:** getdesign.md/drdiary — "No designs found"; styles.refero.design/?q=drdiary — no brand match (generic trending results only)
**Conflicts unresolved:** none (no Tier 2 data exists for Dr.diary; Tier 1 live inspect is the sole authoritative source — expected KR under-coverage)

## 5. Layout Principles

### Spacing System
- Base unit: ~4px
- Scale: 4px, 8px, 12px, 16px, 24px, 40px, 64px
- Notable: nav links pad at 12px 8px; outline CTAs at 12px 16px; section headlines land at the 40px step, which doubles as the vertical rhythm anchor between bands

### Grid & Container
- Centered single-column hero with a large gradient-clipped headline as the anchor
- Value/feature content grouped into cards on alternating white (`#ffffff`) and tinted grey (`#f5f8fb`) full-width bands
- Press/news items in a horizontal card row/grid (each tile ~373px tall, 16px radius)
- App-store CTAs sit as an outline pair over the dark/imagery hero band

### Whitespace Philosophy
- **Breathing room over density**: despite a data-heavy health domain, the marketing surface is airy, with generous vertical rhythm between bands.
- **Flat segmentation**: sections separate by background tint (`#f5f8fb` vs `#ffffff`) and hairlines (`#dee0e4`), never by shadow or heavy borders.
- **Reserved color energy**: the vivid gradient is confined to headline words, stat figures, and thin accent bars — the bulk of the page is calm white and slate.

### Border Radius Scale
- Small (8px): outline CTAs, small controls
- Medium (16px): cards, content containers — the workhorse
- Pill (100px): careers-site navigation pills (brand-owned careers surface)
- Full (9999px): gradient emphasis pills / round chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f5f8fb` background shift | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #dee0e4` border | White card outlines, dividers |
| Overlay (hero) | `linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))` scrim | Legibility scrim over hero imagery only |

**Shadow Philosophy**: Dr.diary is a near-shadowless system. Live inspection returned `box-shadow: none` across the hero, nav, headings, value cards, and press cards. Depth and grouping are communicated entirely through flat tinted surfaces (`#f5f8fb`) and thin `#dee0e4` hairlines. The one place tonal depth appears is a dark top-scrim gradient over hero photography to keep white overlay text legible — a functional overlay, not decorative elevation. When emphasis is needed, the system reaches for the brand gradient (`#3eaeff` → `#ff5a8c` → `#dc6eff`) or ink navy (`#232f4d`), never a drop shadow. This keeps the health UI feeling clean, fast, and mobile-native.

## 7. Do's and Don'ts

### Do
- Use Pretendard for the entire type system — 40px/600 headlines, 16px/400 body
- Anchor the palette on sky-blue (`#3eaeff`) and reserve the tri-stop gradient (`#3eaeff` → `#ff5a8c` → `#dc6eff`) for emphasis text and thin accent bars
- Use ink navy (`#232f4d`) for headings and pure black (`#000000`) for body copy
- Separate sections with flat tint (`#f5f8fb`) and `#dee0e4` hairlines, not shadows
- Keep cards at 16px radius with a 1px hairline outline and no shadow
- Keep the page mostly calm white and slate — let color energy stay in the gradient accents
- Use the cool slate ladder (`#4f5971` → `#9197a6` → `#bdc1ca`) for text hierarchy

### Don't
- Add drop shadows for elevation — Dr.diary is a flat, shadow-free system
- Fill large surfaces with the vivid gradient — it belongs on headline words and stat figures, not paragraph backgrounds
- Use pure black (`#000000`) for headings — reserve ink navy (`#232f4d`) for headline weight
- Introduce the heavy navy-and-gold chrome of legacy medical institutions
- Swap in a second display font — Pretendard owns every role; use weight for hierarchy
- Spread the sky-blue accent onto every element — keep it the single anchor color
- Use sharp square corners on cards — the container radius is 16px

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, headline compresses, cards stack, nav collapses |
| Tablet | 640-1024px | Moderate padding, 2-up cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column value/press bands |

### Touch Targets
- Nav links within a comfortable 48px-height row with 12px 8px padding
- App-store outline CTAs at 54px height with 12px 16px padding — clearly tappable
- Press cards are large full-tile tap targets (~373px)

### Collapsing Strategy
- Hero: gradient-clipped headline scales down on mobile; weight 600 maintained
- Value/press bands: multi-column → stacked single column
- Tinted/white alternating sections maintain full-width treatment
- App-store CTA pair stacks vertically on narrow viewports

### Image Behavior
- Hero photography carries a dark top-scrim gradient for overlay-text legibility at all sizes
- Cards and app screenshots carry no shadow at any size, consistent with the flat system
- Cards maintain 16px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary / trust accent: Sky Blue (`#3eaeff`)
- Gradient sweep: `#3eaeff` → `#ff5a8c` → `#dc6eff` (cyan tail `#00c8fa`)
- Secondary accent: Blue-Violet (`#4970f5`)
- Heading text: Ink Navy (`#232f4d`)
- Body text: Pure Black (`#000000`)
- Nav / secondary text: Slate (`#4f5971`)
- Muted text: Muted Slate (`#9197a6`)
- Faint / disabled: Faint Blue-Grey (`#bdc1ca`)
- Background: Pure White (`#ffffff`)
- Tinted surface: Surface Grey (`#f5f8fb`)
- Hairline: `#dee0e4`

### Example Component Prompts
- "Create a hero on white with a centered headline at 40px Pretendard weight 600. Apply a gradient text-clip to the emphasis word: linear-gradient(270deg, #ff5a8c 60%, #dc6eff 75%, #00c8fa 100%). Body 16px Pretendard 400, #000000. Below, an outline app-store CTA pair: transparent bg, 1px solid #ffffff, #ffffff text, 8px radius, 12px 16px padding, 18px/500."
- "Design a press card: white #ffffff background, 1px solid #dee0e4 border, 16px radius, no shadow. Title 18px Pretendard weight 500, #232f4d."
- "Build a value section: #f5f8fb tinted band, full-width. Section title 40px Pretendard weight 600, #232f4d. Cards inside use #f5f8fb tinted surface, 16px radius, no shadow. Add a thin accent bar with linear-gradient(to right, #3eaeff, #ff5a8c, #dc6eff)."
- "Create top nav on white. Pretendard 20px weight 400 links, #4f5971 text, sky-blue #3eaeff on active. 48px row height, 12px 8px link padding."

### Iteration Guide
1. Pretendard for every role; weight is the hierarchy lever (400 → 500 → 600)
2. Sky-blue (`#3eaeff`) is the single anchor accent; the gradient is for emphasis text and thin bars only
3. No shadows — separate with `#f5f8fb` tint and `#dee0e4` hairlines
4. Cards at 16px radius; outline CTAs at 8px
5. Headings `#232f4d` ink navy; body `#000000` pure black
6. Keep most of the page calm white/slate; reserve color energy for the gradient
7. Slate ladder `#4f5971` → `#9197a6` → `#bdc1ca` for text de-emphasis

---

## 10. Voice & Tone

Dr.diary's voice is **warm, clear, and empowering** — a health companion that reframes a lifelong clinical burden (diabetes, chronic-disease management) into something approachable and even encouraging. The company positions itself as "Healthcare & Lifestyle Tech," and the register reflects that split: mission-framed and confident on the corporate surface, friendly and human on the careers/team surface. Copy decodes clinical jargon into plain Korean and treats the user as a capable person managing their own health data, not a patient being managed.

| Context | Tone |
|---|---|
| Hero / mission headlines | Declarative, mission-framed. "데이터로 선도하는 초개인화 만성질환 케어." Confident, data-forward, never fear-based. |
| Section titles | Plain and value-oriented. "닥터다이어리가 지향하는 가치", "맞춤형 건강관리 서비스". |
| Press / news | Factual, third-person, credibility-building (hospital + public-health-center partnerships). |
| Team / careers voice | Human, first-person, aspirational. "건강 관리가 평생 숙제가 아닌, 쉽고 재밌는 과정". |
| Product / feature copy | Benefit-first; clinical terms (CGM, 혈당) turned into everyday language. |

**Voice samples (verbatim from live surfaces):**
- "데이터로 선도하는 초개인화 만성질환 케어" — hero headline, mission-framed. *(verified live 2026-07-02, drdiary.co.kr)*
- "닥터다이어리가 지향하는 가치" — section heading (values framing). *(verified live 2026-07-02, drdiary.co.kr)*
- "건강 관리가 평생 숙제가 아닌, 쉽고 재밌는 과정" — careers/team voice (reframes health as easy and fun). *(verified live 2026-07-02, careers.drdiary.co.kr)*
- "닥터다이어리 | Healthcare & Lifestyle Tech Company" — page title / positioning meta. *(verified live 2026-07-02, drdiary.co.kr)*

**Forbidden register**: fear-based medical urgency, clinical jargon left undefined, guilt/shame framing around health habits, exclamation-heavy hype, and any tone that treats the user as a passive patient rather than an active data owner.

## 11. Brand Narrative

Dr.diary (닥터다이어리) is a Korean healthcare and lifestyle-tech company whose flagship product began as a blood-glucose diary for people living with diabetes — a simple, humane response to a hard problem: chronic-disease management is a daily, data-heavy, often isolating burden, and the tools for it were clinical and unfriendly. The company's stated direction — *"데이터로 선도하는 초개인화 만성질환 케어"* ("data-driven, hyper-personalized chronic-disease care") — reframes that burden as a design problem: if the data is captured continuously (via CGM and in-app logging) and rendered legibly, managing a chronic condition can become approachable rather than intimidating.

That premise matured into a platform spanning a consumer app, continuous glucose monitoring, and B2B corporate-health services, backed by partnerships that build medical credibility: continuous-glucose-management pilots with public-health centers (보건소), AI chronic-care collaboration with 서울대병원, and employee-health programs with corporate partners. A companion health-product line (글루어트 / Gluart) extends the brand into retail (noted in press as expanding into overseas retail channels). The through-line is data: capture it, personalize on it, and present it in a way an ordinary person can act on.

What Dr.diary refuses, visible in its design: the heavy navy-and-gold chrome and shadow-stacked severity of legacy medical institutions, and the fear-based framing common to health marketing. What it embraces — and what the careers voice makes explicit (*"건강 관리가 평생 숙제가 아닌, 쉽고 재밌는 과정"*, "health care as an easy, fun process rather than a lifelong homework assignment") — is a flat, fast, mobile-native interface; a trustworthy sky-blue anchor warmed by a pink-purple gradient; and copy that decodes clinical terms instead of hiding behind them.

## 12. Principles

1. **Reframe the burden.** Chronic-disease care should feel approachable, not clinical. *UI implication:* warm the trustworthy sky-blue with a pink-purple gradient; keep surfaces flat, airy, and mobile-native — never the heavy chrome of legacy medical software.
2. **Data made legible.** The product's value is turning continuous health data into something a person can act on. *UI implication:* reserve gradient/color energy for the numbers and headlines that matter; keep everything else calm white and slate so the data reads first.
3. **Decode, don't intimidate.** Clinical terms (CGM, 혈당, DSR-style metrics) are surfaced in plain language. *UI implication:* every clinical term gets a plain-language label; copy explains, it does not gatekeep.
4. **Trust through restraint.** Credibility comes from calm precision, not decoration. *UI implication:* no shadows; ink-navy headings; hairline separation — the visual argument that the data underneath is rigorous.
5. **One anchor, one signature.** Sky-blue (`#3eaeff`) is the trust color; the tri-stop gradient is the memorable signature. *UI implication:* don't dilute either — keep the anchor single and the gradient reserved for emphasis.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Dr.diary user segments (people managing diabetes and chronic conditions, health-conscious professionals, corporate-wellness participants), not individual people.*

**김도현, 34, 서울.** Recently diagnosed with type-2 diabetes, logging blood glucose for the first time. Was intimidated by clinical tracking tools; chose Dr.diary because the interface felt like a friendly consumer app, not a hospital chart. Values seeing his own trend data rendered clearly.

**이서연, 41, 경기.** A caregiver managing a parent's chronic condition alongside her own health. Uses CGM data and in-app logging to spot patterns before a doctor's visit. Appreciates that clinical terms are explained in plain Korean and that nothing on screen feels alarming.

**박준영, 29, 부산.** A health-conscious professional in a corporate-wellness program. Engages with the B2B health service through his employer. Trusts the brand partly because of its hospital and public-health-center partnerships, and because the product feels fast and modern rather than bureaucratic.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no logged data yet)** | White canvas. Single Ink Navy (`#232f4d`) line at body size inviting the first glucose/health entry, with one sky-blue (`#3eaeff`) CTA. No alarming illustration — calm and encouraging. |
| **Empty (no press/results)** | Muted Slate (`#9197a6`) single line explaining nothing to show yet, plus a path back. Honest and low-key. |
| **Loading (data fetch)** | Skeleton cards on `#f5f8fb` tinted surface at final 16px-radius dimensions. Flat pulse, no shadow shimmer — consistent with the shadowless system. |
| **Loading (chart compute)** | Inline progress within the card; previous values stay visible so the trend view is never blank. |
| **Error (data sync failed)** | Inline message in Ink Navy (`#232f4d`) with a plain-language explanation and a retry — never a bare "오류가 발생했습니다". States what to do next. |
| **Error (form validation)** | Field-level message below the input describing what is valid, not just "필수". Warm, non-judgmental tone. |
| **Success (entry saved / goal met)** | Brief inline confirmation in a calm, encouraging tone; may briefly use the gradient accent on a stat figure. No fear or guilt framing, no celebratory emoji clutter. |
| **Skeleton** | `#f5f8fb` blocks at final dimensions, 16px radius, flat pulse. |
| **Disabled** | Faint Blue-Grey (`#bdc1ca`) text on a reduced-opacity surface; sky-blue actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, tap feedback, focus |
| `motion-standard` | 220ms | Card/section reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero reveal, gradient sweep-in |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets, data reveals |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and calm — consistent with the flat, fast, trust-first aesthetic. Cards and data views fade-in from below at `motion-standard / ease-enter`; the signature gradient may sweep in once on hero reveal at `motion-slow`, then hold static. No bounce or spring — a health-data product signals steadiness and reliability, not playful delight. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the gradient renders static; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on https://drdiary.co.kr
and https://careers.drdiary.co.kr:
- Hero H2 "데이터로 선도하는 초개인화 만성질환 케어" — Pretendard 40px / weight 600 / color rgb(35,47,77) #232f4d
- Section H2 "닥터다이어리가 지향하는 가치" — 40px / 600 / #232f4d
- Signature gradient text — linear-gradient(270deg, rgb(255,90,140) #ff5a8c, rgb(220,110,255) #dc6eff, rgb(0,200,250) #00c8fa)
- Brand gradient bar — linear-gradient(to right, rgb(62,174,255) #3eaeff, rgb(255,90,140) #ff5a8c, rgb(220,110,255) #dc6eff)
- Nav links — Pretendard 20px / 400 / color rgb(79,89,113) #4f5971
- Press cards — bg #ffffff / 1px solid rgb(222,224,228) #dee0e4 / radius 16px / box-shadow none
- App-store CTAs — transparent / #ffffff text + border / radius 8px / 12px 16px padding / 18px 500
- box-shadow: none across hero/nav/headings/cards (shadowless system)
- Page title meta: "닥터다이어리 | Healthcare & Lifestyle Tech Company"
- Careers voice sample: "건강 관리가 평생 숙제가 아닌, 쉽고 재밌는 과정" (careers.drdiary.co.kr)

Token-level claims (§1-9) are sourced from this live inspection (see web/references/drdiary/.verification.md).

Voice samples (§10) are verbatim from the live surfaces (hero H2, section H2, careers card, page title meta).

Brand narrative (§11): Dr.diary (닥터다이어리) is a Korean healthcare/lifestyle-tech company focused on
chronic-disease (notably diabetes) management via a consumer app, CGM, and B2B corporate-health services,
with hospital and public-health-center partnerships and a companion health-product line (글루어트/Gluart).
These are drawn from the company's own homepage positioning ("Healthcare & Lifestyle Tech Company",
"데이터로 선도하는 초개인화 만성질환 케어") and the press items surfaced on the homepage news grid; specific
corporate details beyond the site are treated as general public knowledge, not quoted from a verified
Dr.diary statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable Dr.diary user segments
(people managing diabetes/chronic conditions, corporate-wellness participants). Names are illustrative;
they do not refer to real people.

Interpretive claims (e.g., "reframe the burden", "trust through restraint", "flat and fast as a
rejection of legacy medical chrome") are editorial readings connecting Dr.diary's observed design to its
positioning, not directly sourced Dr.diary statements.
-->
