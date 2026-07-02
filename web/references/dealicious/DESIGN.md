---
id: dealicious
name: Sinsang Market (Dealicious)
display_name_kr: 신상마켓 (딜리셔스)
country: KR
category: ecommerce
homepage: "https://dealicious.kr"
primary_color: "#001339"
logo:
  type: favicon
  slug: "https://dealicious.kr/assets/images/deali_logo_square.png"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "Monochrome-navy corporate system. primary = deep brand navy (#001339, the square-logo fill + hero identity); #222222 near-black ink is the single interactive pill-CTA color; #3e4149 slate carries headings/links on light. Near-shadowless — cool-grey tints (#f5f6fb/#ebeef6) + hairlines separate."
  colors:
    primary: "#001339"
    primary-deep: "#102245"
    navy-scrim: "#151f32"
    ink: "#222222"
    black: "#000000"
    slate: "#3e4149"
    canvas: "#ffffff"
    surface: "#f5f6fb"
    surface-alt: "#ebeef6"
    surface-blue: "#f1f8ff"
    hairline: "#d0d6e1"
    muted: "#8f97a7"
    faint: "#bec5d2"
    faint-alt: "#a6adbd"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Roboto", kr: "Noto Sans KR" }
    display-hero: { size: 60, weight: 700, lineHeight: 1.5, use: "Hero headline, white on dark-navy hero" }
    section:      { size: 30, weight: 700, use: "Section titles (딜리셔스의 이야기)" }
    button:       { size: 18, weight: 700, use: "Pill CTA label" }
    nav:          { size: 16, weight: 400, use: "Top navigation link" }
    body:         { size: 16, weight: 400, lineHeight: 1.5, use: "Standard reading text" }
    caption:      { size: 15, weight: 400, use: "Footer links, contact meta" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 31, xxl: 48, section: 64 }
  rounded: { sm: 8, md: 20, lg: 50, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#222222", fg: "#ffffff", radius: "50px", padding: "14px 31px", height: "55px", font: "18px / 700", use: "Primary pill CTA (인재영입 바로가기) — the single dark action pill" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#3e4149", radius: "50px", padding: "14px 31px", height: "55px", font: "18px / 700", use: "Secondary white pill CTA (블로그 바로가기)" }
    nav-link: { type: tab, fg: "#ffffff", font: "16px / 400", active: "text #ffffff on dark hero header", use: "Top nav item over the dark-navy hero" }
    card-surface: { type: card, bg: "#f5f6fb", radius: "20px", use: "Tinted section container / story-card frame, shadowless" }
    card-story: { type: card, bg: "#ffffff", radius: "20px", use: "Editorial story/interview card, image-led, no shadow" }
    footer-link: { type: listItem, fg: "#3e4149", font: "15px / 400", use: "Footer navigation / contact link" }
  components_harvested: true
---

# Design System Inspiration of Sinsang Market (Dealicious)

## 1. Visual Theme & Atmosphere

Dealicious (딜리셔스) is the company behind 신상마켓 (Sinsang Market), Korea's No.1 K-fashion wholesale (도소매) trading platform, and its corporate surface reads like a confident, editorial tech company rather than a busy commerce site. The canvas is pure white (`#ffffff`), and the hero flips to a deep brand navy — the same `#001339` that fills the square logo — with the headline "고객의 사업을 쉽고 즐겁게" ("Making our customers' business easy and enjoyable") set large in white. The system is deliberately monochrome: near-black ink (`#222222`), a warm slate (`#3e4149`) for headings and links on light, and a cool-grey neutral ladder that keeps everything calm and trustworthy. There is exactly one interactive "action" treatment — a dark pill button — so the eye always knows where to go next.

The typographic personality is clean and corporate-Korean. Headlines run heavy: the hero at 60px / weight 700, section titles at 30px / 700 in slate `#3e4149`. The type stack is `Roboto` with `Noto Sans KR` carrying hangul, and body/UI text drops to a quiet 16px / weight 400 at a comfortable 24px (1.5) line-height. The contrast between bold display weight and light functional body is the core hierarchy signal — assertive where it introduces a story, calm where it explains.

What distinguishes Dealicious from typical commerce chrome is its flat restraint. Live inspection found `box-shadow: none` across the hero, navigation, headings, and cards — depth comes from color and flat tinted surfaces (`#f5f6fb`, `#ebeef6`, `#f1f8ff`) and thin `#d0d6e1` hairlines, never elevation. Geometry leans into two shapes: fully-rounded 50px pills for buttons and generous 20px-radius rounded rectangles for editorial cards. The result is a modern, engineered, mobile-native feel — a B2B marketplace company that presents itself with the composure of a product studio.

**Key Characteristics:**
- Deep brand navy (`#001339`) as the identity anchor — the square-logo fill and hero background tone
- Monochrome ink system: near-black `#222222` for the single action pill, warm slate `#3e4149` for headings/links on light
- One action color, one action shape — a dark 50px pill CTA is the only interactive emphasis
- `Roboto` + `Noto Sans KR` type; heavy 700 headlines (60px hero, 30px sections) over quiet 400 body
- Near-shadowless, flat depth — cool-grey tints (`#f5f6fb`, `#ebeef6`, `#f1f8ff`) + `#d0d6e1` hairlines separate content
- Pill + rounded-card geometry — 50px button pills, 20px editorial cards
- Cool-grey neutral ladder (`#bec5d2` → `#a6adbd` → `#8f97a7`) for muted/low-emphasis text
- White hero flips to `#151f32` navy scrim over imagery for the dark, premium opening

## 2. Color Palette & Roles

### Primary & Brand
- **Deali Navy** (`#001339`): Primary brand color — the deep navy that fills the square brand logo (~91% of its pixels) and defines the dark hero identity. The single ownable brand hue in an otherwise monochrome system.
- **Navy Deep** (`#102245`): A slightly lighter secondary navy from the logo mark; used for layered dark tones and deep accents.
- **Navy Scrim** (`#151f32`): The translucent navy overlay laid over hero imagery so the white headline reads cleanly.

### Ink & Text
- **Ink** (`#222222`): Near-black — the interactive pill-CTA background and the strongest UI/label ink. Used instead of pure black for chrome so it reads warm, not harsh.
- **Pure Black** (`#000000`): Maximum-contrast body/paragraph text on white.
- **Slate** (`#3e4149`): Headings on light, footer and contact links, secondary strong text — a warm blue-grey that carries most of the editorial copy.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, card surfaces, and text on the navy hero / dark pill.
- **Surface Grey** (`#f5f6fb`): Cool-grey tinted surface for section bands and card frames.
- **Surface Alt** (`#ebeef6`): A secondary cool grey for alternating blocks and subtle fills.
- **Surface Blue** (`#f1f8ff`): The faintest blue-tinted surface for highlight panels.
- **Hairline** (`#d0d6e1`): Thin borders, dividers, and card outlines — the primary separation device in the shadow-free system.

### Muted Text Ladder
- **Faint** (`#bec5d2`): Low-emphasis labels, disabled-adjacent text.
- **Faint Alt** (`#a6adbd`): Alternate faint blue-grey for fine print.
- **Muted** (`#8f97a7`): Tertiary text, captions, metadata.

### On-color
- **On Primary** (`#ffffff`): White text/icons on the navy hero and the dark `#222222` pill.

## 3. Typography Rules

### Font Family
- **Sans (primary)**: `Roboto`, with the document stack `Roboto, "Noto Sans KR", "Noto Sans SC", "Noto Sans JP", sans-serif`.
- **Korean**: `Noto Sans KR` carries all hangul, optimized for dense Korean legibility.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Hero Headline | Roboto / Noto Sans KR | 60px (3.75rem) | 700 | ~1.5 | White on dark-navy hero |
| Section Title | Roboto / Noto Sans KR | 30px (1.88rem) | 700 | normal | "딜리셔스의 이야기", slate `#3e4149` |
| Pill CTA | Roboto / Noto Sans KR | 18px (1.13rem) | 700 | normal | Dark/white pill button label |
| Nav Link | Roboto / Noto Sans KR | 16px (1.00rem) | 400 | normal | Top navigation, white on hero |
| Body | Roboto / Noto Sans KR | 16px (1.00rem) | 400 | 1.5 (24px) | Standard reading text |
| Caption / Footer | Roboto / Noto Sans KR | 15px (0.94rem) | 400 | normal | Footer links, contact meta |

### Principles
- **Heavy display, light body**: Weight 700 owns every headline (60px hero, 30px sections); weight 400 carries all body and navigation. The weight jump is the primary hierarchy signal.
- **One stack, two scripts**: `Roboto` sets Latin, `Noto Sans KR` sets hangul, from a single font-family declaration — consistent rhythm across mixed Korean/English copy.
- **Comfortable body**: Body sits at 16px with a 1.5 (24px) line-height — generous for hangul, easy to scan.
- **Bold titles, calm paragraphs**: Titles persuade; body informs. The two never swap register.

## 4. Component Stylings

### Buttons

**Primary Pill (인재영입 바로가기)**
- Background: `#222222`
- Text: `#ffffff`
- Radius: 50px
- Padding: 14px 31px
- Height: 55px
- Font: 18px / 700 / Roboto
- Use: The single dark action pill — primary CTA ("인재영입 바로가기" / recruit)

**Secondary Pill (블로그 바로가기)**
- Background: `#ffffff`
- Text: `#3e4149`
- Radius: 50px
- Padding: 14px 31px
- Height: 55px
- Font: 18px / 700 / Roboto
- Use: Secondary white pill CTA ("블로그 바로가기" / blog)

### Cards & Containers

**Story / Interview Card**
- Background: `#ffffff`
- Radius: 20px
- Shadow: none
- Use: Editorial story/interview card, image-led (사내인터뷰, 개발팀 연대기)

**Tinted Surface Card**
- Background: `#f5f6fb`
- Radius: 20px
- Shadow: none
- Use: Tinted section container / card frame on cool-grey bands

### Navigation
- Background: transparent over the dark-navy hero
- Text: `#ffffff`
- Font: 16px / 400 / Roboto
- Height: 64px header
- Use: Top horizontal nav ("회사소개", "서비스", "사람과 문화", "뉴스룸")

### Footer
- Background: `#ffffff`
- Links: `#3e4149`
- Font: 15px / 400 / Roboto
- Use: Footer navigation and contact rows ("회사소개", "개인정보 처리방침", contact@deali.net, 1661-1916)

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://dealicious.kr, https://dealicious-inc.github.io/, https://github.com/dealicious-inc
**Tier 2 sources:** getdesign.md/dealicious (0 files — not listed); styles.refero.design/?q=dealicious (no brand match)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 31px, 48px, 64px
- Notable: Pill CTAs use a measured 14px 31px padding, giving the buttons a generous, tappable footprint

### Grid & Container
- Centered single-column hero with the 60px headline as the anchor, set over a dark-navy image band
- "딜리셔스의 이야기" story section arranges editorial cards (interviews, culture, news) in a rounded 20px-radius grid
- Feature/story bands alternate white (`#ffffff`) with cool-grey tints (`#f5f6fb`, `#ebeef6`) for full-width rhythm
- Footer is a white band with contact info, quick links, and legal rows

### Whitespace Philosophy
- **Airy and editorial**: Despite a data-heavy B2B business, the corporate surface is spacious — generous vertical rhythm between story bands.
- **Flat segmentation**: Sections separate by background tint and `#d0d6e1` hairlines, not by shadow or heavy borders.
- **Single-action clarity**: Only the dark `#222222` pill draws interactive attention, so the next step is never ambiguous.

### Border Radius Scale
- Small (8px): inner elements, small containers
- Medium (20px): editorial cards, content containers — the workhorse
- Large (50px): pill buttons / CTAs
- Full (9999px): fully-rounded pill extremes

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f5f6fb` / `#ebeef6` background shift | Card / section separation without elevation |
| Hairline (Level 2) | `1px solid #d0d6e1` border | Card outlines, dividers |
| Scrim (Level 3) | `#151f32` navy overlay | Dark hero imagery so white headline reads |

**Shadow Philosophy**: Dealicious is a near-shadowless system. Live inspection returned `box-shadow: none` across the hero, navigation, headings, and story cards. Depth and grouping are communicated through flat cool-grey tints (`#f5f6fb`, `#ebeef6`, `#f1f8ff`) and thin `#d0d6e1` hairlines, with the deep navy (`#001339` / `#151f32`) doing the dramatic work on the hero. This is a deliberate modern-flat choice that keeps the corporate surface clean, fast, and confident — when emphasis is needed the system reaches for the dark `#222222` pill, never elevation.

## 7. Do's and Don'ts

### Do
- Use deep navy (`#001339`) as the brand anchor — the logo fill and the dark hero identity
- Reserve the dark `#222222` pill as the single interactive action treatment
- Use warm slate (`#3e4149`) for headings and links on light instead of pure black chrome
- Set headlines heavy (weight 700) — 60px hero, 30px sections — over quiet 400 body
- Separate sections with flat cool-grey tints (`#f5f6fb`, `#ebeef6`) and `#d0d6e1` hairlines, not shadows
- Use pill (50px) buttons and 20px-radius editorial cards
- Keep `Roboto` + `Noto Sans KR` as one stack across mixed Korean/English copy
- Overlay hero imagery with the `#151f32` navy scrim so white text stays legible

### Don't
- Introduce a second saturated accent color — the system is monochrome navy + ink
- Add drop shadows for elevation — Dealicious is a flat, shadow-free system
- Spread the dark pill treatment across many elements — it dilutes the single-action signal
- Use pure black (`#000000`) for chrome/labels — reserve it for body copy; use `#222222` / `#3e4149` for UI ink
- Use sharp/square corners on buttons — CTAs are always fully-rounded pills
- Set headlines in a light weight — display is always 700
- Let hero text sit on raw imagery without the navy scrim

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, story cards stack |
| Tablet | 640-1024px | Moderate padding, 2-up story cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column story grid |

### Touch Targets
- Pill CTAs at 55px height with 14px 31px padding — comfortably tappable
- Nav links spaced within the 64px header
- Story cards are large tap targets across their full 20px-radius frame

### Collapsing Strategy
- Hero: 60px headline scales down on mobile, weight 700 maintained
- Story grid: multi-column → stacked single column
- White / cool-grey tinted bands maintain full-width treatment
- Footer contact and link rows stack vertically on narrow viewports

### Image Behavior
- Story-card imagery keeps the 20px radius and stays shadowless at all sizes
- Hero imagery keeps the `#151f32` navy scrim so the white headline stays legible

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand anchor / hero: Deali Navy (`#001339`)
- Interactive pill CTA: Ink (`#222222`)
- Body text: Pure Black (`#000000`)
- Headings / links on light: Slate (`#3e4149`)
- Background: Pure White (`#ffffff`)
- Tinted surfaces: Surface Grey (`#f5f6fb`), Surface Alt (`#ebeef6`), Surface Blue (`#f1f8ff`)
- Hairline: `#d0d6e1`
- Muted text: `#8f97a7`, `#a6adbd`, `#bec5d2`
- Hero scrim: `#151f32`

### Example Component Prompts
- "Create a hero: dark-navy `#001339` band with a `#151f32` scrim over imagery. Headline at 60px Roboto/Noto Sans KR weight 700, white `#ffffff`. Top nav links white 16px weight 400 in a 64px header. One dark pill CTA: `#222222` background, white text, 50px radius, 14px 31px padding, 18px weight 700."
- "Design a story card: white `#ffffff` background, 20px radius, no shadow, image-led. Title 30px weight 700, slate `#3e4149`. Body 16px weight 400, line-height 1.5."
- "Build a tinted section: `#f5f6fb` background, full-width. Section title 30px weight 700 `#3e4149`. Cards inside use white `#ffffff` with a `#d0d6e1` hairline and 20px radius."
- "Create a footer: white band, links `#3e4149` at 15px weight 400, contact rows (email, tel) in the same slate. No shadow; separate rows with `#d0d6e1` hairlines."

### Iteration Guide
1. Deep navy `#001339` is the brand anchor; the dark `#222222` pill is the only action treatment
2. Headlines weight 700 (60px hero, 30px sections); body weight 400 at 16px / 1.5
3. No shadows — separate with `#f5f6fb` / `#ebeef6` tints and `#d0d6e1` hairlines
4. Pill (50px) buttons and 20px-radius editorial cards throughout
5. Text ink is `#222222` / `#3e4149`; reserve pure black `#000000` for paragraph body
6. Overlay hero imagery with the `#151f32` navy scrim
7. Keep the palette monochrome — navy + ink + cool grey, no second accent

---

## 10. Voice & Tone

Dealicious's voice is **warm, plain-spoken, and people-first** — a B2B infrastructure company that talks about small fashion-wholesale businesses in human terms rather than jargon. The mission line "고객의 사업을 쉽고 즐겁게" ("Making our customers' business easy and enjoyable") sets the register: benefit-framed, kind, and unpretentious. The corporate surface leans heavily on culture and people ("사람과 문화", "딜리셔스의 이야기", 사내인터뷰), so the tone is that of a company proud of how it works, not one shouting about metrics.

| Context | Tone |
|---|---|
| Hero headline | Mission-framed, warm. "고객의 사업을 쉽고 즐겁게." Confident, not hype. |
| Navigation / section labels | Plain and human. "회사소개", "서비스", "사람과 문화", "뉴스룸". |
| CTAs | Direct, low-pressure. "인재영입 바로가기", "블로그 바로가기". |
| Story / culture cards | People-first, narrative. "신상마켓의 얼굴을 만드는…", "딜리셔스개발팀 연대기". |
| Recruiting / culture copy | Values-led — "자유와 체계가 공존하는", "심리적 안정감을 주는". |

**Voice samples (verbatim from live corporate homepage):**
- "고객의 사업을 쉽고 즐겁게" — hero headline (mission-framed). *(verified live 2026-07-02)*
- "딜리셔스의 이야기" — story-section title (narrative, people-first). *(verified live 2026-07-02)*
- "K패션 도소매 거래 No.1 신상마켓" — positioning line (category leadership claim). *(verified live 2026-07-02)*

**Forbidden register**: aggressive sales urgency, buzzword-stacked B2B jargon, cold corporate-speak that hides the small-business customer, exclamation-heavy hype.

## 11. Brand Narrative

Dealicious (딜리셔스) was founded in **2015** and operates **신상마켓 (Sinsang Market)**, a mobile-first wholesale trading platform connecting the retailers and wholesalers of Korea's Dongdaemun-centered fashion ecosystem. The founding problem was uniquely Korean: K-fashion wholesale (도소매) ran on phone calls, paper ledgers, and in-person 사입 (sourcing runs) at dawn markets — an opaque, relationship-locked system that was hard for new sellers to enter. Sinsang Market's premise was to digitize that trade so ordering, sourcing, and settlement could happen in an app, and to "make our customers' business easy and enjoyable."

The product matured into the category's No.1 K-fashion 도소매 marketplace, and Dealicious now presents itself as a genuine tech company — its engineering organization publishes an open tech blog (dealicious-inc.github.io) covering Android clean architecture, Elasticsearch search, Kafka pipelines, and i18n for the marketplace. The corporate site foregrounds people and culture ("자유와 체계가 공존하는 딜리셔스", "심리적 안정감을 주는 딜리셔스"), signaling a company that treats how it builds as part of the brand.

What Dealicious refuses, visible in its design: the loud, discount-driven chrome of typical commerce, and cold enterprise-B2B sterility. What it embraces: a calm monochrome-navy palette, a single confident action pill, heavy human headlines, and an editorial, people-first surface — infrastructure for small businesses, presented with the composure of a product studio.

## 12. Principles

1. **Easy and enjoyable for the customer.** The mission is to make small fashion-wholesale businesses easier to run. *UI implication:* reduce friction and decoration; one clear action, plain language, no dark patterns.
2. **One action, one shape.** The dark `#222222` pill is the only interactive emphasis. *UI implication:* reserve the pill CTA for the primary next step so intent is never ambiguous.
3. **Flat and fast.** Depth is unnecessary weight. *UI implication:* no shadows; separate with cool-grey tints and `#d0d6e1` hairlines; keep the surface light and quick to scan.
4. **People are the product story.** Culture and the humans behind Sinsang Market lead the narrative. *UI implication:* editorial story cards and interviews get generous, image-led 20px-radius space.
5. **Composed, not loud.** A monochrome navy + ink palette signals trust over hype. *UI implication:* one brand hue, heavy headlines, calm body — never a second saturated accent.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Sinsang Market / Dealicious user segments (Dongdaemun fashion retailers and wholesalers, and the company's own engineers), not individual people.*

**정하늘, 28, 서울.** Runs a small online fashion boutique and sources stock through Sinsang Market instead of dawn 사입 runs. Values seeing wholesale inventory and ordering from her phone, and trusts the platform because the flow is simple and calm rather than pushy.

**김도현, 41, 서울 동대문.** A wholesale vendor listing new arrivals ("신상") daily. Cares that his catalog reaches retailers fast and that settlement is clear. Chose the platform because it digitized a trade he used to run entirely by phone.

**이서연, 33, 딜리셔스 엔지니어.** A mobile engineer who reads and writes on the company tech blog. Appreciates that Dealicious presents itself as an engineering-led company ("자유와 체계가 공존하는") and that the culture is foregrounded, not hidden behind sales copy.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no listings / results)** | White canvas. A single slate (`#3e4149`) line explaining nothing matches yet, with one dark `#222222` pill CTA to adjust or add. No illustration clutter. |
| **Empty (saved / none yet)** | Muted (`#8f97a7`) single line: nothing saved yet, plus a calm path back. Honest, low-pressure. |
| **Loading (list fetch)** | Skeleton blocks on `#f5f6fb` tinted surface at final card dimensions, 20px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (in-place refresh)** | Subtle progress on the affected band; previous content stays visible with previous values. |
| **Error (fetch / action failed)** | Inline message in slate (`#3e4149`) with a plain-language explanation and a retry. No bare "오류가 발생했습니다" — say what to do next. |
| **Error (form validation)** | Field-level message below the input; describes what is valid, not just "필수". |
| **Success (action completed)** | Brief inline confirmation in a calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f5f6fb` blocks at final dimensions, 20px radius, flat pulse. |
| **Disabled** | Faint (`#bec5d2`) text on reduced-opacity surface; the `#222222` pill fades rather than switching to a new grey, preserving the action read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, pill press, focus |
| `motion-standard` | 200ms | Card / section reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet — consistent with the flat, composed aesthetic. Pill CTAs respond to press with a subtle scale/opacity shift; story cards and sections fade in from below at `motion-standard / ease-enter`. No bounce or spring — an infrastructure company for small businesses signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the surface remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on https://dealicious.kr:
- Hero H1 "고객의 사업을 쉽고 즐겁게" — Roboto/Noto Sans KR 60px / weight 700 / white on dark-navy hero
- Section H1 "딜리셔스의 이야기" — 30px / 700 / color rgb(62,65,73) #3e4149
- Primary pill CTA "인재영입 바로가기" — bg rgb(34,34,34) #222222 / radius 50px / 14px 31px / 18px 700 / white text
- Secondary pill CTA "블로그 바로가기" — bg #ffffff / color #3e4149 / radius 50px
- Nav (회사소개/서비스/사람과 문화/뉴스룸) — white 16px/400, 64px header
- Story cards — 20px radius, box-shadow none
- Logo deali_logo_square.png dominant fill rgb(0,19,57) #001339
- document.title: "딜리셔스 Dealicious | 고객의 사업을 쉽고 즐겁게"

Token-level claims (§1-9) are sourced from this live inspection (see web/references/dealicious/.verification.md).

Voice samples (§10) are verbatim from the live corporate homepage (hero headline, story-section title, positioning line).

Brand narrative (§11): Dealicious (딜리셔스) operates 신상마켓 (Sinsang Market), a Korean K-fashion
wholesale (도소매) marketplace; founded ~2015. The engineering tech blog (dealicious-inc.github.io)
confirms the engineering-led positioning and topics (Android clean architecture, Elasticsearch, Kafka,
i18n). Specific founding details beyond the homepage/blog are general public knowledge, not directly
quoted from a verified Dealicious statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable Sinsang Market user segments
(Dongdaemun fashion retailers/wholesalers) and the company's own engineers. Names are illustrative;
they do not refer to real people.

Interpretive claims (e.g., "one action, one shape", "flat and fast as a rejection of discount-driven
commerce chrome") are editorial readings connecting Dealicious's observed design to its positioning,
not directly sourced Dealicious statements.
-->
