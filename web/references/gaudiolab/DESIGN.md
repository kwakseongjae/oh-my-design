---
id: gaudiolab
name: Gaudio Lab
display_name_kr: 가우디오랩
country: KR
category: ai
homepage: "https://www.gaudiolab.com/"
primary_color: "#00b7ff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=gaudiolab.com&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = live CTA/outline sky-blue (#00b7ff); marketing ink near-black (#111214) while the MUI chrome layer uses rgba(0,0,0,0.87). Hybrid type stack: Poppins (EN display) + Roboto (MUI body/UI) + Noto Sans KR (KO). Shadowless."
  colors:
    primary: "#00b7ff"
    ink: "#111214"
    canvas: "#ffffff"
    surface: "#f0f9ff"
    night: "#1e1e1f"
    ocean: "#12354e"
    muted: "#9ca3af"
    faint: "#d3d5da"
    hairline: "#d6d6d6"
    on-primary: "#fafafa"
  typography:
    family: { display: "Poppins", body: "Roboto", ko: "Noto Sans KR" }
    display-hero: { size: 80, weight: 700, lineHeight: 1.00, use: "Korean brand hero headline, system-ui / Noto Sans KR" }
    section:      { size: 48, weight: 900, lineHeight: 1.46, use: "English section titles, black weight" }
    stat:         { size: 36, weight: 700, lineHeight: 1.11, tracking: 0.15, use: "Milestone stat H1, Roboto" }
    card-title:   { size: 18, weight: 500, lineHeight: 1.56, use: "Blog/news card heading, Roboto" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Body text, Roboto / MUI base" }
    nav:          { size: 14, weight: 500, lineHeight: 1.00, use: "Top nav menu buttons, Roboto" }
    button-lg:    { size: 18, weight: 500, lineHeight: 1.00, use: "'Watch the Film' overlay button, Poppins" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 40, section: 64 }
  rounded: { sm: 4, md: 6, lg: 12, xl: 16, full: 9999 }
  shadow:
    none: "none"
  components:
    cta-primary: { type: button, bg: "#00b7ff", fg: "#fafafa", radius: "6px", padding: "8px 16px", height: "32px", font: "14px / 500", use: "Header 'Contact us' / '문의하기' CTA" }
    cta-hero: { type: button, bg: "#00b7ff", fg: "#ffffff", radius: "4px", height: "44px", font: "16px / 500", use: "Hero primary 'Contact us' CTA" }
    button-outline: { type: button, fg: "#00b7ff", border: "1px solid #00b7ff", radius: "4px", height: "44px", font: "16px / 500", use: "'All products' secondary action" }
    button-film: { type: button, bg: "#ffffff", fg: "#111214", radius: "4px", padding: "16px 40px", height: "62px", font: "18px / 500 Poppins", use: "'Watch the Film' overlay button on brand hero" }
    nav-item: { type: tab, fg: "#111214", radius: "6px", padding: "8px 16px", font: "14px / 500", active: "text #00b7ff", use: "Top nav menu items (light surface)" }
    news-card: { type: card, bg: "#ffffff", border: "1px solid #d6d6d6", radius: "12px", use: "Blog & news thumbnail card, shadowless" }
    product-row: { type: listItem, fg: "#111214", radius: "9999px", height: "64px", font: "16px / 400", use: "Product row in app-launcher menu" }
    app-launcher: { type: button, radius: "9999px", height: "40px", use: "Circular app-launcher icon button" }
  components_harvested: true
---

# Design System Inspiration of Gaudio Lab

## 1. Visual Theme & Atmosphere

Gaudio Lab (가우디오랩) is a Korean AI-audio technology company, and its website reads like a research lab that learned restraint from consumer product design. The canvas is almost entirely pure white (`#ffffff`), sectioned by wide bands of full-bleed video and near-black immersive blocks (`#1e1e1f`) where the sound-wave imagery lives. Against that quiet ground, a single saturated sky-blue (`#00b7ff`) does all the pointing — it is the only chromatic accent in the whole system, reserved for the "Contact us" / "문의하기" call-to-action and the outline of the "All products" button. The eye is trained: blue means act. Everything else is calibrated grayscale, so the interface feels engineered and trustworthy rather than decorated.

The typographic personality is deliberately split across a hybrid stack, which is the tell that this is an engineering-led site rather than an agency showpiece. The English marketing layer runs in **Poppins** — geometric, rounded, and confident, climbing to a heavy weight 900 for section titles like "The Science of Sound". The functional chrome (nav, milestone stats, blog cards) is straight **Roboto** on Material UI, carrying the MUI default ink of `rgba(0,0,0,0.87)` and a 0.15px tracking on its `<h1>` stats. Korean copy resolves through the system stack into **Noto Sans KR**, where the brand hero "우리는 좋은 소리를 만들고 좋은 소리는 우리를 만듭니다" ("We make good sound, and good sound makes us") is set at a commanding 80px / weight 700. On the newer marketing sections the heading ink shifts to a crisper near-black `#111214`.

What distinguishes Gaudio Lab is its refusal of elevation. Live inspection found `box-shadow: none` across the hero, nav, CTAs, headings, and cards — nothing floats. Separation comes from flat sky-tinted panels (`#f0f9ff`), thin `#d6d6d6` hairlines around 12px-radius news cards, and hard cuts into dark sections (`#1e1e1f`, and a deeper navy `#12354e`). Geometry mixes two ideas cleanly: full pills (`9999px`) for product-list rows and the circular app-launcher, and a tight small-radius scale (4px / 6px CTAs, 12px / 16px cards) for everything structural. Text steps down through a cool neutral ladder — `#d3d5da` faint labels on dark, `#9ca3af` muted captions, `#fafafa` near-white on the blue CTA — a flat, fast, science-forward aesthetic that lets the audio content, not the chrome, do the talking.

**Key Characteristics:**
- Single saturated sky-blue (`#00b7ff`) as the only accent — reserved for the primary CTA and the outline button
- Hybrid type stack: Poppins (EN display, up to weight 900), Roboto/MUI (body + chrome), Noto Sans KR (Korean)
- Near-black marketing ink (`#111214`) alongside the MUI default `rgba(0,0,0,0.87)` on chrome
- Shadowless system — no `box-shadow` anywhere; separation via tint, hairline, and dark bands
- Dual geometry — full pills (`9999px`) for product rows/launcher, tight 4-16px radii for CTAs and cards
- Dark immersive bands (`#1e1e1f`, `#12354e`) hosting sound-wave and film imagery
- Cool neutral ladder (`#d3d5da` → `#9ca3af`) for text hierarchy against white and dark
- Near-white label (`#fafafa`) on the blue CTA instead of pure white — a subtle MUI softness

## 2. Color Palette & Roles

### Primary / Brand
- **Gaudio Sky** (`#00b7ff`): The signature bright sky-blue and the system's single action color. It is the "Contact us" / "문의하기" CTA background, the "All products" outline button's border and text, and appears as a background fill roughly nine times across the homepage (rgb(0, 183, 255)). Nothing else competes with it.
- **On-Primary** (`#fafafa`): The near-white label color that sits on the blue CTA (rgb(250, 250, 250)) — softer than pure white, an MUI convention.

### Ink & Text
- **Ink** (`#111214`): Near-black used for headings and body on the newer marketing sections (rgb(17, 18, 20), 130+ observed instances). The Material UI chrome layer additionally uses `rgba(0,0,0,0.87)` as its default body/heading ink, so both blacks coexist by layer.
- **Muted** (`#9ca3af`): Muted cool grey for secondary and caption text.
- **Faint** (`#d3d5da`): Faint light-grey used for low-emphasis labels on dark sections (rgb(211, 213, 218)).

### Surface & Border
- **Canvas** (`#ffffff`): The dominant page background — pure white, and the fill of the "Watch the Film" button and news cards.
- **Surface** (`#f0f9ff`): A faint sky-tinted panel background used for light feature blocks — the palest echo of the brand blue.
- **Hairline** (`#d6d6d6`): The thin border/divider color around the 12px-radius news cards in the shadowless card system (rgb(214, 214, 214)).

### Dark Sections
- **Night** (`#1e1e1f`): Near-black background for the immersive dark bands that host sound-wave and video imagery (rgb(30, 30, 31)).
- **Ocean** (`#12354e`): A deep navy-teal used as an accent dark-section background (rgb(18, 53, 78)).

## 3. Typography Rules

### Font Family
- **Display (EN)**: `Poppins` — geometric sans for English marketing headlines and the "Watch the Film" button. Loaded at weights 400 / 500 / 700, and pushed to 900 for the largest section titles.
- **Body / UI**: `Roboto` (Material UI base, with `Helvetica, Arial` fallback) — nav, milestone stats, blog/news cards, and body copy. Weights 300-700 loaded.
- **Korean**: `Noto Sans KR` (resolved through the `-apple-system, system-ui` stack) — Korean headlines and copy, e.g. the 80px brand hero.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero (KO) | Noto Sans KR | 80px (5.00rem) | 700 | 1.00 | normal | Brand-page hero, white on dark |
| Section Title | Poppins | 48px (3.00rem) | 900 | 1.46 | normal | "The Science of Sound", black weight |
| Milestone Stat | Roboto | 36px (2.25rem) | 700 | 1.11 (40px) | 0.15px | "50 million users", "Award-winning" |
| Card Title | Roboto | 18px (1.13rem) | 500 | 1.56 (28px) | normal | Blog & news card headings |
| Button Large | Poppins | 18px (1.13rem) | 500 | 1.00 | normal | "Watch the Film" overlay button |
| Body | Roboto | 16px (1.00rem) | 400 | 1.50 (24px) | normal | Standard reading text, MUI base |
| Nav | Roboto | 14px (0.88rem) | 500 | 1.00 | normal | Top nav menu buttons |

### Principles
- **Split by layer, not by whim**: Poppins persuades (English marketing display), Roboto informs (chrome + body), Noto Sans KR speaks Korean. Each font owns one job and never trespasses.
- **Weight carries hierarchy**: The system leans on weight jumps — Poppins 900 for section titles, Roboto 700 for stats, 500 for card titles and nav, 400 for body — more than on size alone.
- **Two blacks by design**: Marketing sections use the crisp `#111214`; the MUI chrome keeps its native `rgba(0,0,0,0.87)`. This is a real, observable duality, not an inconsistency to paper over.
- **Numbers as headlines**: Milestone figures ("50M", "119", "35") are set as large Roboto `<h1>` stats with 0.15px tracking — data is promoted to display type.

## 4. Component Stylings

### Buttons

**Header CTA (Primary)**
- Background: `#00b7ff`
- Text: `#fafafa`
- Radius: 6px
- Padding: 8px 16px
- Height: 32px
- Font: 14px / 500 / Roboto
- Use: Header "Contact us" / "문의하기" — the persistent primary action

**Hero CTA (Primary)**
- Background: `#00b7ff`
- Text: `#ffffff`
- Radius: 4px
- Height: 44px
- Font: 16px / 500 / Roboto
- Use: In-page hero "Contact us" call-to-action

**Outline (Secondary)**
- Text: `#00b7ff`
- Border: 1px solid `#00b7ff`
- Radius: 4px
- Height: 44px
- Font: 16px / 500 / Roboto
- Use: "All products" — secondary action beside the hero CTA

**Watch the Film (Overlay)**
- Background: `#ffffff`
- Text: `#111214`
- Radius: 4px
- Padding: 16px 40px
- Height: 62px
- Font: 18px / 500 / Poppins
- Use: White film-launch button over the brand hero video

**App Launcher (Icon)**
- Radius: 9999px
- Height: 40px
- Use: Circular "Open app launcher" icon button in the header

### Navigation

**Nav Menu Item**
- Text: `#111214`
- Radius: 6px
- Padding: 8px 16px
- Height: 36px
- Font: 14px / 500 / Roboto
- Active: `#00b7ff` text
- Use: Top nav items ("Products", "Technology", "Blog & News", "Careers", "About us" / "제품", "기술")

### Cards & Containers

**News Card**
- Background: `#ffffff`
- Border: 1px solid `#d6d6d6`
- Radius: 12px
- Shadow: none
- Use: Blog & news thumbnail card — hairline separation, no elevation

### List Items

**Product Row**
- Text: `#111214`
- Radius: 9999px
- Height: 64px
- Font: 16px / 400 / Roboto
- Use: Product rows in the app-launcher menu (GSA, Gaudio Sing, GTS, LM1, Gaudio Studio Pro)

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 3 surfaces)
**Tier 1 sources:** https://www.gaudiolab.com/ , https://www.gaudiolab.com/company/brand , https://www.gaudiolab.com/ko/company/brand
**Tier 2 sources:** getdesign.md/gaudiolab (0 DESIGN.md files — empty); styles.refero.design/?q=gaudio (not listed — generic trending grid only)
**Conflicts unresolved:** none (Tier 2 supplied no competing values)

## 5. Layout Principles

### Spacing System
- Base unit: 8px (MUI-derived), with 4px micro-steps
- Scale: 4px, 8px, 12px, 16px, 24px, 40px, 64px
- Notable: CTA padding lands at 8px 16px (header) and the large film button at a generous 16px 40px

### Grid & Container
- Full-bleed hero video/imagery bands alternate with centered content columns
- Product entries are listed as full-pill (`9999px`) rows inside the app-launcher menu
- Blog & news arranged as a grid of 12px-radius cards
- Milestone/stat sections present large Roboto numbers in a horizontal row

### Whitespace Philosophy
- **Content over chrome**: generous white (`#ffffff`) space frames the audio/video content so the imagery, not the UI, holds attention.
- **Flat segmentation**: sections separate by background swap — white, sky-tinted `#f0f9ff`, or near-black `#1e1e1f` — rather than by borders or shadows.
- **Immersive dark bands**: full-width `#1e1e1f` / `#12354e` blocks create rhythm and host the sound-wave visuals.

### Border Radius Scale
- Small (4px): hero CTA, outline button, film button
- Medium (6px): header CTA, nav menu items
- Large (12px): news/blog cards
- XL (16px): larger feature containers
- Full (9999px): product-list rows, app-launcher icon button

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Every surface — page, nav, CTAs, cards |
| Tint (Level 1) | `#f0f9ff` background shift | Light feature-block separation |
| Hairline (Level 2) | `1px solid #d6d6d6` border | News card outlines, dividers |
| Dark band (Level 3) | `#1e1e1f` / `#12354e` background | Immersive full-width sections |

**Shadow Philosophy**: Gaudio Lab is a fully shadowless system — live inspection returned `box-shadow: none` on the hero, nav, CTAs, headings, and cards. Depth is communicated entirely through flat means: sky-tinted panels (`#f0f9ff`), thin `#d6d6d6` hairlines, and hard cuts into near-black bands (`#1e1e1f`, `#12354e`). When the design needs to draw the eye it reaches for the one saturated blue (`#00b7ff`) or a dark band, never elevation. This keeps the interface feeling fast, clean, and technical — appropriate for an audio-engineering company whose product lives in the sound, not the screen.

## 7. Do's and Don'ts

### Do
- Reserve sky-blue (`#00b7ff`) for the single primary action — CTA fill and the outline button, nothing else
- Use Poppins for English display headlines, up to weight 900 for section titles
- Use Roboto (MUI) for nav, stats, cards, and body — keep the chrome consistent
- Set Korean copy in Noto Sans KR, and let the brand hero run large (80px / 700)
- Keep the system shadowless — separate with `#f0f9ff` tint, `#d6d6d6` hairlines, and dark bands
- Use near-black `#111214` for marketing headings; accept `rgba(0,0,0,0.87)` on MUI chrome
- Use full pills (`9999px`) for product rows and the app-launcher, tight 4-6px radii for CTAs
- Promote key numbers (50M, 119, 35) to large Roboto stat headlines

### Don't
- Spread the blue across many elements — it dilutes the single-action signal
- Add drop shadows for elevation — the system is deliberately flat
- Mix a second saturated accent color alongside `#00b7ff`
- Set English display type in Roboto — Poppins owns the marketing headline voice
- Use pure black for the near-white CTA label — it is `#fafafa`, softer by intent
- Apply pill radii to structural cards — cards stay at 12-16px, pills are for rows/launcher
- Let Korean and English headings share a font — each locale keeps its own stack

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero video crops, product rows stack |
| Tablet | 640-1024px | 2-up news cards, condensed nav |
| Desktop | 1024-1440px | Full layout, wide hero bands, multi-column stats |

### Touch Targets
- Header CTA at 32px height, hero CTA and outline button at 44px — comfortably tappable
- Nav menu buttons at 36px with 8px 16px padding
- App-launcher icon at 40px, full-circle target

### Collapsing Strategy
- Hero: Korean 80px / English 48px headlines scale down; weight maintained
- Product list: full-pill rows stack vertically in the app-launcher on narrow viewports
- News grid: multi-column → 2-up → single column
- Dark immersive bands keep full-width treatment; internal padding reduces

### Image Behavior
- Hero and section video/imagery run full-bleed and crop rather than shrink
- News cards keep 12px radius and their `#d6d6d6` hairline (no shadow) at all sizes

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action: Gaudio Sky (`#00b7ff`)
- CTA label: On-Primary (`#fafafa`) / white (`#ffffff`)
- Marketing heading: Ink (`#111214`)
- Chrome ink: `rgba(0,0,0,0.87)` (MUI default)
- Background: Canvas (`#ffffff`)
- Tinted panel: Surface (`#f0f9ff`)
- Muted text: `#9ca3af`; Faint on dark: `#d3d5da`
- Card hairline: `#d6d6d6`
- Dark bands: Night (`#1e1e1f`), Ocean (`#12354e`)

### Example Component Prompts
- "Create a header CTA: `#00b7ff` background, `#fafafa` text, 6px radius, 8px 16px padding, 32px tall, 14px/500 Roboto. Label 'Contact us'."
- "Build a hero row: white background. English section title in Poppins 48px weight 900, `#111214`. Primary CTA (`#00b7ff` bg, white text, 4px radius, 44px tall) next to an outline button (transparent, 1px solid `#00b7ff`, `#00b7ff` text, 4px radius, 44px tall)."
- "Design a news card: white `#ffffff` background, 1px solid `#d6d6d6` border, 12px radius, no shadow. Card title 18px Roboto weight 500, line-height 28px."
- "Create a dark immersive band: `#1e1e1f` background, Korean headline in Noto Sans KR 80px weight 700, white text. Optional white 'Watch the Film' button (16px 40px padding, 4px radius, `#111214` text, 18px Poppins)."

### Iteration Guide
1. `#00b7ff` is the single action color — never spread it
2. Poppins for EN display, Roboto for chrome/body, Noto Sans KR for Korean
3. No shadows — separate with `#f0f9ff` tint, `#d6d6d6` hairlines, dark bands
4. Two blacks: `#111214` marketing / `rgba(0,0,0,0.87)` MUI chrome
5. Pills (`9999px`) for product rows + launcher; 4-16px radii for everything structural
6. Promote key numbers to large Roboto stat headlines

---

## 10. Voice & Tone

Gaudio Lab's voice is **precise, wonder-tinged, and quietly authoritative** — an audio research lab that treats sound as both science and emotion, and says so plainly. The English tagline "Where sound is, Gaudio Lab is there." and the section header "The Science of Sound" set the register: declarative, curiosity-forward, never hype. The company frames itself through evidence — "Over 40 audio experts including 9 Ph.D" — rather than adjectives, and lets awards (CES Innovation Awards) and numbers (50M daily users) do the boasting. Korean copy carries a warmer, almost poetic note: "우리는 좋은 소리를 만들고 좋은 소리는 우리를 만듭니다" ("We make good sound, and good sound makes us").

| Context | Tone |
|---|---|
| Brand hero (KO) | Poetic, reciprocal. "좋은 소리는 우리를 만듭니다." Warm, mission-framed. |
| Section titles (EN) | Declarative, scientific. "The Science of Sound", "Wherever Sound Goes". |
| Mission line | Plain-spoken capability. "We provide an excellent sound experience through innovative technologies." |
| Stats / milestones | Concrete and unadorned. "50M daily users", "119 IP", "35 partners". |
| CTAs | Minimal and direct. "Contact us", "All products", "Watch the Film". |

**Voice samples (verbatim from live surfaces):**
- "Where sound is, Gaudio Lab is there." — brand-page hero subtitle (mission-framed). *(verified live 2026-07-02, /company/brand)*
- "Sound is the most fundamental means of connecting with people or touching their emotions." — "The Science of Sound" section. *(verified live 2026-07-02, /company/brand)*
- "우리는 좋은 소리를 만들고 좋은 소리는 우리를 만듭니다" — Korean brand hero. *(verified live 2026-07-02, /ko/company/brand)*

**Forbidden register**: hype superlatives, exclamation-heavy marketing, undefined buzzwords, and any framing that hides the engineering behind vague "magic". Sound is presented as science first, feeling second — never as a gimmick.

## 11. Brand Narrative

Gaudio Lab (가우디오랩) is a Seoul-based AI-audio technology company, spun out of academic sound research and, by its own homepage timeline, marking its **10th anniversary in 2025** (founded circa 2015). Its founding premise is stated directly on the brand page: "We provide an excellent sound experience through innovative technologies" — and, more memorably, "Where sound is, Gaudio Lab is there." The company positions sound as a rigorous science ("Sound is science, from smartphone to movie theaters") staffed by "over 40 audio experts including 9 Ph.D" dedicated to R&D.

The product line spans spatial and generative audio: **GSA** (Spatial Audio), **Gaudio Sing** (AI Karaoke), **GTS / Gaudio Text Sync**, **LM1** (Loudness Normalizer), **Gaudio Studio Pro** (AI Content Localization), and **Gaudio Developers**, an API platform for audio AI. By its published milestones the company reports **50M worldwide daily users** of its technologies, **16.9 billion KRW (~$13M) in Series B** funding, **119 items of intellectual property**, and **35 partners and investors** including Genie Music, Melon, KT Alpha Shopping, and META48 — plus **CES Innovation Awards 2026 for a fourth consecutive year**.

What Gaudio Lab refuses, visible in its design: the ornamented, shadow-heavy look of consumer entertainment brands and the buzzword-first pitch of generic "AI" startups. What it embraces: a flat, shadowless, mostly-monochrome canvas where a single sky-blue points to action, evidence-based copy, and full-bleed sound-wave imagery that keeps the focus on what the company actually makes — sound.

## 12. Principles

1. **Sound is science first.** The brand leads with rigor ("The Science of Sound", "9 Ph.D"), not spectacle. *UI implication:* present capabilities with concrete numbers and evidence; keep chrome plain so the content reads as credible.
2. **One color, one action.** Sky-blue (`#00b7ff`) is the sole saturated hue. *UI implication:* reserve `#00b7ff` exclusively for the primary CTA and its outline sibling so the next step is never ambiguous.
3. **Flat and fast.** The system is shadowless by choice. *UI implication:* separate with tint (`#f0f9ff`), hairlines (`#d6d6d6`), and dark bands — never elevation — to keep the interface quick and technical.
4. **Let the sound imagery lead.** Full-bleed video and waveform visuals carry the emotion. *UI implication:* frame media generously in white and dark bands; the UI recedes so the audio content dominates.
5. **Evidence over adjectives.** Milestones, awards, and user counts replace hype. *UI implication:* promote key numbers to large stat headlines; avoid superlatives in copy.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Gaudio Lab audiences (audio/ML engineers, media & broadcast partners, and consumer product teams), not individual people.*

**정민호, 34, 서울.** A media-tech product manager at a Korean streaming service evaluating Gaudio's dialogue-separation and loudness tools. Trusts the brand because it argues from Ph.D depth and measurable results, not marketing gloss.

**Sarah Nguyen, 29, Los Angeles.** An audio ML engineer integrating the Gaudio Developers API for content localization. Values the plain, evidence-first documentation tone and the single clear CTA when she needs to reach the team.

**김하윤, 41, 판교.** A broadcast/OTT partnerships lead assessing Gaudio for IBC-grade spatial audio. Reassured by the shadowless, no-nonsense site — it reads like an engineering company that ships, matching the CES-award track record.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no results)** | White canvas, single Ink (`#111214`) line explaining nothing matched, with one sky-blue (`#00b7ff`) CTA to adjust. No decorative clutter. |
| **Empty (no saved items)** | Muted (`#9ca3af`) single line stating nothing is saved yet, plus a path back. Calm and plain. |
| **Loading (content fetch)** | Flat skeleton blocks at final dimensions on `#ffffff` / `#f0f9ff`, 12px radius, no shadow shimmer — consistent with the shadowless system. |
| **Loading (in-place)** | Thin sky-blue (`#00b7ff`) progress indicator; previous content stays visible. |
| **Error (request failed)** | Inline message in Ink (`#111214`) with a plain-language explanation and a retry — never a bare "오류가 발생했습니다". |
| **Error (form validation)** | Field-level note below the input describing what is valid, not just "필수". |
| **Success (submitted)** | Brief inline confirmation in a calm tone; next-step detail linked below. No celebratory emoji. |
| **Skeleton** | `#f0f9ff` / `#ffffff` blocks at final dimensions, 12px radius, flat pulse. |
| **Disabled** | Faint (`#d3d5da`) / Muted (`#9ca3af`) text on reduced-opacity surface; the blue action fades rather than turning grey, to preserve the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 240ms | Card/section reveal, menu open, carousel slide |
| `motion-slow` | 400ms | Full-bleed band transitions, hero/film reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, menus, carousel |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and composed — matching the flat, science-forward aesthetic. The product carousel (Swiper) slides at `motion-standard / ease-enter`; the app-launcher pill rows and CTAs respond to hover/press with a subtle opacity/scale shift; full-bleed video bands crossfade at `motion-slow`. No bounce or spring — an audio-engineering company signals precision, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and autoplaying carousels pause; the site remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10-15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on:
- https://www.gaudiolab.com/ (EN homepage) — nav, CTAs, product rows, color/radius frequency scan
- https://www.gaudiolab.com/company/brand (EN brand/company) — mission, section titles, milestone stats, "Watch the Film"
- https://www.gaudiolab.com/ko/company/brand (KO brand) — Korean hero + nav chrome

Token-level claims (§1-9) are sourced from this live inspection (see .verification.md Proof block).

Voice samples (§10) are verbatim from the live brand/company pages (hero subtitle, "The Science of Sound"
paragraph, Korean brand hero).

Brand narrative (§11): facts are taken from the live gaudiolab.com/company/brand page — mission line,
"Where sound is, Gaudio Lab is there.", "over 40 audio experts including 9 Ph.D", 50M daily users,
16.9B KRW (~$13M) Series B, 119 IP, 35 partners/investors (Genie Music, Melon, KT Alpha Shopping, META48),
CES Innovation Awards 2026 (4th consecutive year), and the 10th-anniversary (2025) milestone implying a
~2015 founding. Product line (GSA, Gaudio Sing, GTS, LM1, Gaudio Studio Pro, Gaudio Developers) is from the
homepage app-launcher and milestone timeline. Company HQ (Seoul, KR) is widely documented public knowledge.

Personas (§13) are fictional archetypes informed by publicly observable Gaudio Lab audiences (media-tech PMs,
audio ML engineers, broadcast/OTT partners). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "one color, one action", "flat and fast as a rejection of ornamented consumer
audio chrome", "sound is science first") are editorial readings connecting Gaudio Lab's observed design to
its stated positioning, not directly quoted Gaudio Lab statements.
-->
