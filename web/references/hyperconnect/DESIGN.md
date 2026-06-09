---
id: hyperconnect
name: Hyperconnect
country: KR
category: consumer-tech
homepage: "https://hyperconnect.com"
primary_color: "#00dd99"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=hyperconnect.com&sz=128"
verified: "2026-06-09"
added: "2026-06-09"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-09"
  components_harvested: true
  colors:
    primary: "#00dd99"
    primary-bright: "#18da9e"
    ink: "#222222"
    ink-soft: "#333333"
    canvas: "#ffffff"
    surface: "#f8f8f8"
    surface-alt: "#f4f4f4"
    dark: "#1c1c1c"
    heading-on-dark: "#ffffff"
    body: "#696969"
    label: "#858585"
    muted: "#b4b4b4"
    blue-accent: "#3860be"
    blue-tint: "#cddcf2"
    on-primary: "#ffffff"
    hairline: "#bbbbbb"
  typography:
    family: { display: "Poppins", body: "noto-sans", ui: "Inter" }
    hero:       { size: 62, weight: 700, lineHeight: 1.17, tracking: 0, use: "Mission hero headline on dark imagery" }
    section:    { size: 46, weight: 700, lineHeight: 1.20, tracking: 0, use: "Section titles, e.g. Grow Rapidly & Expand Globally" }
    body-lg:    { size: 18, weight: 400, lineHeight: 1.45, tracking: 0, use: "Intro and standard reading text" }
    body:       { size: 16, weight: 400, lineHeight: 1.50, tracking: 0, use: "Paragraph copy, Inter UI text" }
    nav:        { size: 16, weight: 700, lineHeight: 1.63, tracking: 0, use: "Primary nav item, Poppins bold" }
    link:       { size: 14, weight: 400, lineHeight: 1.86, tracking: 0, use: "Secondary nav / footer links" }
    eyebrow:    { size: 13, weight: 400, lineHeight: 1.17, tracking: 0, use: "Small eyebrow labels, e.g. Serviced in" }
    button:     { size: 14, weight: 700, lineHeight: 1.00, tracking: 0.144, use: "Primary button label, uppercase-ish weight" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 30, xxl: 48, section: 64 }
  rounded: { sm: 2, md: 8, lg: 17, full: 9999 }
  shadow:
    none: "none"
    soft: "rgba(0,0,0,0.08) 0px 4px 16px"
    raised: "rgba(0,0,0,0.12) 0px 10px 30px"
  components:
    button-primary: { type: button, bg: "#222222", fg: "#ffffff", radius: "2px", padding: "12px 30px", font: "14px / 700", use: "Primary action — Apply, submit; near-black solid, 1px #222222 border" }
    button-secondary: { type: button, bg: "#222222", fg: "#ffffff", radius: "2px", padding: "10px 30px", font: "13px / 600", use: "Dialog action — Confirm, Reject All" }
    button-filter: { type: button, bg: "#3860be", fg: "#ffffff", radius: "17px", padding: "8px 16px", font: "14px / 600", use: "Pill filter toggle, 1px #bbbbbb border" }
    nav-item: { type: tab, bg: "#ffffff", fg: "#222222", font: "16px / 700", use: "Top nav item, Poppins bold", active: "#00dd99 text on active/hover" }
    link-footer: { type: badge, bg: "#ffffff", fg: "#858585", font: "14px / 400", use: "Footer / sub-nav link, gray #858585" }
    card: { type: card, bg: "#ffffff", fg: "#222222", radius: "8px", use: "Content card on #f8f8f8 surface, soft shadow rgba(0,0,0,0.08)" }
    card-tint: { type: card, bg: "#cddcf2", fg: "#222222", radius: "8px", use: "Tinted info/stat card, blue #cddcf2 wash" }
    input-text: { type: input, bg: "#ffffff", fg: "#222222", radius: "2px", font: "16px / 400", use: "Form field, 1px #bbbbbb border, focus #00dd99" }
    eyebrow-label: { type: badge, bg: "#ffffff", fg: "#b4b4b4", font: "13px / 400", use: "Small eyebrow / metadata label — Serviced in" }
    dialog-cookie: { type: dialog, bg: "#ffffff", fg: "#333333", radius: "8px", use: "Cookie consent dialog with #222222 action buttons" }
---

# Design System Inspiration of Hyperconnect

## 1. Visual Theme & Atmosphere

Hyperconnect's corporate site reads as a confident, globally-minded engineering company that happens to build social video at planetary scale. The atmosphere is bright, clean, and editorial: large stretches of pure white (`#ffffff`) and near-white surfaces (`#f8f8f8`, `#f4f4f4`) carry the layout, punctuated by full-bleed dark hero imagery where the mission headline lands in pure white over photography. The signature note is a single electric mint-green (`#00dd99`) used sparingly as the interactive and brand-identity accent — it appears on active navigation, key links, and brand moments, never as a flood. The result feels like a hybrid of a Korean tech employer-brand site and a Silicon Valley product company: optimistic, human, and technically credible.

Typography does the heavy lifting. Headlines are set in `Poppins` at heavy weight 700 and large sizes (the mission hero at 62px, section titles at 46px), giving the page a geometric, rounded, friendly authority. Body and UI text drop to `noto-sans` and `Inter` at weight 400, which keeps long-form copy quiet and readable, especially for the bilingual Korean/English audience. The pairing — geometric heavy display over neutral humanist body — is the backbone of the brand's voice: bold claims, calm explanation.

The chrome is deliberately restrained. Buttons are near-black (`#222222`) solid blocks with a tight 2px radius and a slightly tracked, bold 14px label — corporate and decisive rather than playful. Where the UI needs lightness, it reaches for pill-shaped filter toggles (17px radius) and a secondary blue accent (`#3860be`) for utility controls. Shadows are minimal; the design earns depth from whitespace and the light/dark hero cadence rather than heavy elevation.

**Key Characteristics:**
- Electric mint accent (`#00dd99`) used surgically for brand identity, active nav, and key links — never as a background flood
- `Poppins` weight 700 display type (62px hero, 46px sections) over `noto-sans` / `Inter` weight 400 body
- Near-black (`#222222`) solid buttons with tight 2px radius and a bold, lightly-tracked 14px label
- Bright white and near-white canvas (`#ffffff`, `#f8f8f8`, `#f4f4f4`) with full-bleed dark hero imagery
- Secondary blue (`#3860be`) reserved for utility controls like pill filter toggles (17px radius)
- Restrained elevation — depth comes from whitespace and light/dark cadence, not heavy shadows

## 2. Color Palette & Roles

### Primary
- **Hyperconnect Mint** (`#00dd99`): The brand's defining accent. Active navigation, key interactive links, brand-identity moments. A bright, slightly-cool spring green that signals energy and connection.
- **Mint Bright** (`#18da9e`): A near-twin of the primary used on certain hover/emphasis states and brand decorations — interchangeable in feel, marginally brighter.
- **Pure White** (`#ffffff`): Page background, card surfaces, hero headline text over dark imagery.

### Ink & Action
- **Ink** (`#222222`): The near-black workhorse — primary button backgrounds, strong headings, nav text. Not pure black, slightly softened.
- **Ink Soft** (`#333333`): Default body ink (rendered as `rgba(0,0,0,0.8)` on the live page) for paragraph copy.
- **Dark** (`#1c1c1c`): Deep section/footer backgrounds for immersive dark moments.

### Surface & Neutrals
- **Surface** (`#f8f8f8`): Primary off-white surface for alternating sections and card backgrounds.
- **Surface Alt** (`#f4f4f4`): Secondary light surface for nested panels and subtle banding.
- **Body** (`#696969`): Secondary reading text, descriptions.
- **Label** (`#858585`): Footer links, sub-navigation, captions.
- **Muted** (`#b4b4b4`): Eyebrow labels, the quietest metadata text (e.g. "Serviced in").
- **Hairline** (`#bbbbbb`): Borders on inputs and pill controls.

### Secondary Accent
- **Blue Accent** (`#3860be`): Utility controls — pill filter toggles, secondary interactive chrome. A muted royal blue that stays out of the brand-mint's way.
- **Blue Tint** (`#cddcf2`): Soft blue wash for tinted info/stat cards.

### On-Color
- **On Primary** (`#ffffff`): White text/icons on mint and dark surfaces.
- **Heading on Dark** (`#ffffff`): Hero headlines over photographic dark backgrounds.

## 3. Typography Rules

### Font Family
- **Display**: `Poppins` — geometric sans, used at weight 700 for all headlines and primary nav. Fallbacks: `Inter, system-ui, sans-serif`.
- **Body**: `noto-sans` — humanist neutral for long-form and bilingual KR/EN copy. Fallbacks: `sans-serif, serif`.
- **UI**: `Inter` — used for compact UI paragraph text. Fallbacks: `system-ui, sans-serif`.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Notes |
|------|------|------|--------|-------------|----------|-------|
| Hero | Poppins | 62px | 700 | 1.17 | 0 | Mission headline, white on dark imagery |
| Section | Poppins | 46px | 700 | 1.20 | 0 | Section titles ("Grow Rapidly & Expand Globally") |
| Nav | Poppins | 16px | 700 | 1.63 | 0 | Primary nav items |
| Body Large | noto-sans | 18px | 400 | 1.45 | 0 | Intro and standard reading text |
| Body | Inter / noto-sans | 16px | 400 | 1.50 | 0 | Paragraph copy |
| Link | noto-sans | 14px | 400 | 1.86 | 0 | Footer / sub-nav links, gray |
| Eyebrow | Poppins | 13px | 400 | 1.17 | 0 | Small labels ("Serviced in") |
| Button | noto-sans | 14px | 700 | 1.00 | 0.144px | Primary button label |

### Principles
- **Heavy geometric display, quiet humanist body.** Poppins 700 owns the headlines; body text steps all the way down to weight 400 so claims read as bold and explanations read as calm.
- **Two-family split by job.** Poppins for anything that should feel branded and structural (hero, sections, nav); noto-sans / Inter for anything that should disappear into reading.
- **Minimal tracking.** Letter-spacing is near-zero everywhere except button labels, which carry a faint `0.144px` track to read as deliberate and corporate.
- **Big jumps, few steps.** The scale leaps from 62px hero to 46px section down to 16–18px body — there is no crowded middle. Hierarchy is created by size and weight, not by many intermediate tiers.

## 4. Component Stylings

### Buttons

**Primary (Ink)**
- Background: `#222222`
- Text: `#ffffff`
- Padding: 12px 30px
- Radius: 2px
- Border: `1px solid #222222`
- Font: 14px noto-sans weight 700, tracking 0.144px
- Use: Primary actions — "Apply", form submit

**Dialog Action**
- Background: `#222222`
- Text: `#ffffff`
- Padding: 10px 30px
- Radius: 2px
- Font: 13px weight 600, tracking 0.13px
- Use: Modal/consent actions — "Confirm My Choices", "Reject All"

**Filter Pill (Blue)**
- Background: `#3860be`
- Text: `#ffffff`
- Radius: 17px (pill)
- Border: `1px solid #bbbbbb`
- Use: Utility toggle controls

### Cards & Containers
- Background: `#ffffff` on `#f8f8f8` / `#f4f4f4` surfaces
- Radius: 8px
- Tinted variant: `#cddcf2` blue wash for stat/info cards
- Shadow (soft): `rgba(0,0,0,0.08) 0px 4px 16px`
- Shadow (raised): `rgba(0,0,0,0.12) 0px 10px 30px`

### Navigation
- White header, Poppins 16px weight 700 nav items in `#222222`
- Active/hover state shifts item text to mint `#00dd99`
- Sub-nav and footer links drop to noto-sans 14px weight 400 in `#858585`

### Inputs & Forms
- Border: `1px solid #bbbbbb`
- Radius: 2px
- Text: `#222222`, 16px
- Focus: mint `#00dd99` accent

### Badges / Eyebrows
- Eyebrow label: `#b4b4b4` text, 13px Poppins, e.g. "Serviced in"
- Footer link badge: `#858585` text, 14px

---

**Verified:** 2026-06-09 (live DOM inspect)
**Tier 1 sources:** https://hyperconnect.com, https://hyperconnect.com/about/hyperconnect

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 30px, 48px, 64px
- Notable: 30px horizontal button padding is a recurring rhythm value, giving buttons a wide, confident footprint

### Grid & Container
- Centered single-column hero with full-bleed dark imagery
- Multi-column feature/stat grids on `#f8f8f8` surfaces
- Generous side margins keep content centered on wide desktop viewports
- Alternating white / near-white bands create vertical rhythm

### Whitespace Philosophy
- **Bright and open.** The page breathes — large white gaps separate sections, and headlines are given room rather than crowded by chrome.
- **Light/dark cadence.** Full-bleed dark hero and immersive sections (`#1c1c1c`) alternate with bright white content bands for a cinematic rhythm.
- **Content over decoration.** Few borders, minimal shadow; structure comes from spacing and the type scale.

### Border Radius Scale
- Tight (2px): Buttons, inputs — corporate, decisive
- Comfortable (8px): Cards, dialogs
- Pill (17px): Filter toggles and chip controls
- Full (9999): Circular avatars / icon buttons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow | Page background, inline text, hero over imagery |
| Soft (1) | `rgba(0,0,0,0.08) 0px 4px 16px` | Cards, raised panels |
| Raised (2) | `rgba(0,0,0,0.12) 0px 10px 30px` | Dialogs, popovers, sticky headers |
| Focus | mint `#00dd99` accent ring | Keyboard focus, active input |

**Shadow Philosophy:** Hyperconnect treats elevation as a quiet last resort. Most depth is created through the light/dark band cadence and whitespace rather than shadow. When shadow appears, it is a soft, neutral black at low opacity — never colored, never dramatic. The brand's drama lives in photography and the mint accent, not in floating UI.

## 7. Do's and Don'ts

### Do
- Use mint `#00dd99` surgically — active nav, key links, brand moments only
- Set headlines in `Poppins` weight 700 at large sizes (46px+) for branded authority
- Keep body copy quiet in `noto-sans` / `Inter` weight 400
- Use near-black `#222222` solid buttons with tight 2px radius
- Alternate bright white (`#ffffff`) and near-white (`#f8f8f8`) bands with dark hero imagery
- Reserve blue `#3860be` for utility controls, pill toggles
- Let whitespace and photography carry the page; keep shadows soft and neutral

### Don't
- Don't flood large areas with mint — it is an accent, not a background
- Don't use pill-radius on primary buttons — the 2px corner is the corporate signal
- Don't set body copy in Poppins or at heavy weight — keep explanation calm
- Don't introduce colored or heavy shadows — elevation stays soft black, low opacity
- Don't crowd the middle of the type scale — jump from display to body
- Don't let blue `#3860be` compete with mint for brand identity — blue is utility only

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero type reduced, nav collapses to menu |
| Tablet | 640-1024px | 2-column grids, moderate padding |
| Desktop | 1024-1440px | Full layout, multi-column stat/feature grids |
| Large | >1440px | Centered content with generous side margins |

### Touch Targets
- Buttons use wide padding (12px 30px) for comfortable tap area
- Nav items at 16px weight 700 with generous spacing
- Pill filter toggles sized for thumb taps

### Collapsing Strategy
- Hero: 62px display compresses toward 36–40px on mobile, weight 700 maintained
- Navigation: horizontal Poppins nav collapses to a menu toggle
- Feature/stat grids: multi-column to 2-column to single stacked
- Dark hero imagery maintains full-bleed treatment, reduces internal padding

### Image Behavior
- Full-bleed hero photography scales to cover at all sizes
- Cards maintain 8px radius across breakpoints
- Brand decorations using mint simplify on small screens

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand accent: Mint (`#00dd99`)
- Primary button: Ink (`#222222`), white text
- Background: White (`#ffffff`), surfaces `#f8f8f8` / `#f4f4f4`
- Heading: Ink (`#222222`) / white on dark
- Body text: `#696969`, ink-soft `#333333`
- Label / link: `#858585`, muted `#b4b4b4`
- Utility: Blue (`#3860be`), blue tint `#cddcf2`
- Dark section: `#1c1c1c`

### Example Component Prompts
- "Create a hero on full-bleed dark imagery. Headline in Poppins 62px weight 700, line-height 1.17, white (#ffffff). Below it, body in noto-sans 18px weight 400, color rgba(255,255,255,0.85)."
- "Design a section on #f8f8f8. Title in Poppins 46px weight 700, color #222222. Cards: white background, 8px radius, soft shadow rgba(0,0,0,0.08) 0px 4px 16px."
- "Build a primary button: #222222 background, white text, 2px radius, 12px 30px padding, noto-sans 14px weight 700, tracking 0.144px. Label 'Apply'."
- "Create top nav: white header, Poppins 16px weight 700 items in #222222, active/hover item shifts to mint #00dd99."
- "Design a filter pill: #3860be background, white text, 17px radius, 1px solid #bbbbbb border."

### Iteration Guide
1. Mint `#00dd99` is an accent — apply it to one or two interactive elements per view, never as a fill
2. Poppins 700 for display and nav; noto-sans / Inter 400 for everything readable
3. Buttons are `#222222` solid, 2px radius, wide 30px horizontal padding
4. Use whitespace and the light/dark band cadence for depth before reaching for shadow
5. Blue `#3860be` is utility chrome only — keep it subordinate to mint
6. Keep the type scale bimodal: big display, calm body, no crowded middle

---

## 10. Voice & Tone

Hyperconnect's voice is mission-forward, globally ambitious, and quietly technical — an engineering company that frames social video as human connection. Headlines make broad, optimistic claims ("Our Mission", "Grow Rapidly & Expand Globally") while body copy stays measured and explanatory. As a Korea-headquartered company operating worldwide, the register is bilingual-aware: English-first on the global corporate site, with copy that reads cleanly for non-native speakers. There is pride in scale and reach, expressed through concrete numbers (markets served, downloads) rather than hype adjectives.

| Context | Tone |
|---|---|
| Hero / mission | Aspirational, declarative. "Our Mission." Broad but sincere. |
| Section titles | Outcome-oriented, confident. "Grow Rapidly & Expand Globally." |
| Product (Azar) | Plain capability framing — what it does, where it's used. |
| Careers / culture | Warm, talent-focused, emphasizes global team and engineering depth. |
| Stats / metrics | Concrete numbers presented matter-of-factly, no superlatives. |
| Legal / consent | Formal, clear, compliance-grade (cookie/consent dialogs). |

**Forbidden register.** Avoid hype stacking ("revolutionary", "game-changing"), exclamation-heavy CTAs, and emoji on the corporate site. Avoid vague platitudes untethered to a concrete number or capability. The brand earns trust through scale figures and engineering credibility, not adjectives.

## 11. Brand Narrative

Hyperconnect is a Korea-founded technology company best known for **Azar**, a video-based social discovery app that connects people across languages and borders through real-time video and AI-powered translation/matching. Founded in Seoul, the company built deep expertise in real-time WebRTC video, on-device machine learning, and global-scale matching infrastructure, growing Azar into one of the most-downloaded social-video apps worldwide across the Middle East, Europe, Asia, and the Americas. The brand story is one of Korean engineering reaching a global consumer audience: the corporate site foregrounds the mission of connecting people and the global footprint of its products.

The company became part of **Match Group** following a landmark acquisition, anchoring Match's video and AI capabilities — a milestone frequently cited as one of the largest exits for a Korean app company. That heritage shapes the brand: it presents as both a proud Korean tech success story and a globally operating consumer-internet company, balancing local engineering roots with worldwide product reach.

The design system reflects this duality. The bright, optimistic palette and friendly geometric Poppins headlines signal a consumer-facing, human brand; the disciplined near-black buttons, restrained shadows, and quiet body type signal engineering seriousness. The single mint accent ties it together — energetic and modern without being loud.

## 12. Principles

1. **Connection is the mission.** The product exists to connect people across language and distance; the brand's optimism is in service of that, not decoration.
2. **Global by default.** Built for a worldwide audience from the start — English-first corporate voice, bilingual awareness, concrete reach metrics.
3. **Engineering credibility, consumer warmth.** Real-time video and AI depth underneath; a friendly, bright surface on top. Both are true.
4. **Accent, not flood.** The mint identity color earns its power by scarcity — one or two touches per view.
5. **Scale spoken in numbers.** Trust is built with figures (markets, downloads), not hype adjectives.
6. **Calm explanation under bold claims.** Heavy display headlines, quiet humanist body — the rhythm of confidence followed by clarity.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Hyperconnect/Azar audience and stakeholder segments (global app users, engineers, recruiters, partners), not individual people.*

**Mehmet Yılmaz, 24, Istanbul.** Heavy Azar user who values real-time translation to talk with people he'd never otherwise meet. Judges the app by how natural the video connection feels and how quickly matching works. The corporate brand's optimistic, global framing matches why he uses the product.

**Jiyeon Park, 33, Seoul.** Senior backend engineer evaluating Hyperconnect as an employer. Reads the careers and tech pages for evidence of real-time/WebRTC and ML engineering depth. Reassured by the disciplined, credible visual tone — bright but serious — over a flashy startup look.

**Sara Lindholm, 41, Stockholm.** Partnerships lead at a media company assessing Hyperconnect/Match for a video collaboration. Needs the corporate site to communicate scale and reliability quickly; values the concrete reach numbers and the clean, professional presentation.

**Daniel Okafor, 29, London.** Mobile growth marketer studying Azar's global expansion. Notices the bilingual-aware, English-first copy and the consumer-warm-yet-engineering-credible brand balance as a model for cross-border consumer apps.

## 14. States

| State | Treatment |
|---|---|
| **Empty (list / no results)** | White canvas, single quiet line in body `#696969` at 16px. One ink `#222222` CTA if an action recovers the state. No illustration clutter. |
| **Loading** | Neutral skeleton blocks in `#f4f4f4` at final dimensions; soft fade. No spinner drama. |
| **Error (form validation)** | Field-level message below the input; concise, plain-language. Input border draws attention; brand mint reserved for the valid/focus state, not error. |
| **Success (action saved)** | Brief inline confirmation in body text; optional mint `#00dd99` check accent. No emoji, no exclamation. |
| **Focus** | Mint `#00dd99` accent ring / border on the focused control. |
| **Disabled** | Reduced opacity on surface and label together; ink button fades rather than switching to gray. |
| **Consent / cookie** | White dialog (8px radius), clear copy in `#333333`, ink `#222222` action buttons ("Confirm My Choices", "Reject All"). Compliance-grade and unambiguous. |

## 15. Motion & Easing

**Durations**

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, focus, nav item color shift to mint |
| `motion-standard` | 240ms | Dropdown, dialog, card reveal |
| `motion-slow` | 400ms | Section / hero crossfades, band transitions |

**Easings**

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Most UI transitions |
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving panels, dialogs |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |

**Signature motions.**
1. **Nav accent shift.** On hover/active, nav item text crossfades from ink `#222222` to mint `#00dd99` over `motion-fast` — the one place the brand color animates.
2. **Light/dark band reveal.** Section bands fade in on scroll with `motion-slow / ease-enter`; headlines settle, imagery does the cinematic work.
3. **Reduce motion.** Under `prefers-reduced-motion: reduce`, transitions collapse to near-instant; the page stays fully functional without ambient motion.

## 16. Do's and Don'ts (Quick Reference)

### Do
- Lead with `Poppins` 700 display headlines over bright white or dark imagery
- Use mint `#00dd99` as a scarce, deliberate accent for brand and interactivity
- Keep buttons ink `#222222`, 2px radius, wide 30px horizontal padding
- Let whitespace and the light/dark cadence create depth before shadow
- Express scale and credibility through concrete numbers and clean layout

### Don't
- Don't flood the layout with mint or use it as a background
- Don't round primary buttons into pills — 2px is the corporate signal
- Don't set body copy heavy or in Poppins — keep explanation calm in noto-sans / Inter
- Don't add colored or dramatic shadows — soft neutral black only
- Don't let utility blue `#3860be` compete with mint for brand identity
