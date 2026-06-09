---
id: ikala
name: iKala
country: TW
category: developer-tools
homepage: "https://ikala.ai"
primary_color: "#061232"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=ikala.ai&sz=128"
verified: "2026-06-08"
added: "2026-06-08"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-08"
  components_harvested: true
  note: "primary = deep navy CTA fill #061232 (live getComputedStyle on 'Get in Touch'); brand-blue accent #3a82dd for links/nav; family Noto Sans TC (Taiwan-localized)"
  colors:
    primary: "#061232"
    primary-deep: "#031234"
    accent-blue: "#3a82dd"
    accent-blue-strong: "#4770df"
    accent-blue-deep: "#2168c2"
    link: "#2563eb"
    canvas: "#ffffff"
    heading: "#333333"
    body: "#525151"
    muted: "#6b7280"
    faint: "#999999"
    on-primary: "#ffffff"
    hairline: "#edf1f7"
    ink: "#000000"
  typography:
    family: { sans: "Noto Sans TC", fallback: "Noto Sans, sans-serif" }
    display-hero: { size: 84, weight: 800, lineHeight: 1.14, tracking: -3.49, use: "Hero headline, full-bleed over imagery, white on dark" }
    section:      { size: 36, weight: 600, lineHeight: 1.40, tracking: -1.50, use: "Section titles, e.g. solution headlines" }
    subheading:   { size: 24, weight: 600, lineHeight: 1.00, tracking: -1.00, use: "Card / sub-section heads, industry labels" }
    body-lg:      { size: 20, weight: 500, lineHeight: 1.40, use: "Intro paragraphs, lead copy" }
    body:         { size: 18, weight: 400, lineHeight: 1.55, use: "Standard reading text, nav links" }
    button:       { size: 18, weight: 500, lineHeight: 1.00, use: "Primary button label" }
    caption:      { size: 15, weight: 400, use: "Small labels, footer, metadata" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 30, xxl: 48, section: 80 }
  rounded: { sm: 4, md: 8, lg: 30, full: 9999 }
  shadow:
    ambient: "rgba(0,0,0,0.04) 0px 0px 10px 0px"
    standard: "rgba(0,0,0,0.10) 0px 0px 20px 0px"
    elevated: "rgba(0,0,0,0.19) 0px 0px 10px 0px"
  components:
    button-primary: { type: button, bg: "#061232", fg: "#ffffff", radius: "8px", padding: "20px 30px", height: "58px", font: "18px / 500", use: "Primary CTA (Get in Touch, Contact)" }
    button-ghost: { type: button, bg: "#ffffff", fg: "#061232", radius: "8px", font: "20px / 500", use: "Secondary CTA over dark/imagery (Try it Now)" }
    nav-link: { type: tab, fg: "#333333", font: "18px / 700", active: "#3a82dd brand-blue", use: "Horizontal nav links on white sticky header" }
    card: { type: card, bg: "#ffffff", border: "1px solid #edf1f7", radius: "8px", shadow: "rgba(0,0,0,0.04) 0px 0px 10px 0px", hover: "rgba(0,0,0,0.19) 0px 0px 10px 0px", use: "Feature/industry surface cards" }
    section-title: { type: badge, fg: "#333333", font: "36px / 600", use: "Section/feature titles, tight -1.5px tracking" }
    link-inline: { type: badge, fg: "#2563eb", font: "18px / 400", use: "Inline body-copy hyperlinks, weight 400-700" }
---

# Design System Inspiration of iKala

## 1. Visual Theme & Atmosphere

iKala's website presents itself as a clean, corporate-confident B2B AI and martech platform built for the Asia-Pacific enterprise buyer. The page opens on a pure white canvas (`#ffffff`) with a restrained, professional palette: deep navy (`#061232`) anchors the primary calls-to-action, a clear corporate blue (`#3a82dd`) carries links and active navigation states, and a soft warm gray (`#525151`) handles body copy. The result feels measured and trustworthy rather than flashy -- the aesthetic of a regional AI leader that sells to manufacturing, retail, and finance buyers who value credibility over spectacle. There is no neon, no gradient-overload, no dark-mode drama on the marketing surface; the design earns trust through clarity.

The defining typographic choice is `Noto Sans TC` -- Google's Traditional-Chinese-optimized humanist sans -- set as the primary family ahead of the Latin `Noto Sans` fallback. This is a deliberate, market-honest decision: iKala is a Taiwanese company serving a bilingual (Traditional Chinese + English) audience, and a font that renders Han characters and Latin glyphs with equal authority signals that the brand is genuinely local, not a Western template translated after the fact. The hero runs enormous -- 84px at weight 800 with aggressively tight `-3.49px` letter-spacing -- giving the headline a dense, billboard-grade presence that reads as ambition and scale. Below the hero, section titles step down to 36px weight 600, and the contrast between the heavy hero and the calmer mid-weight sections creates a clear top-down hierarchy.

The atmosphere is reinforced by soft, diffuse elevation. Rather than hard drop shadows, iKala uses low-alpha, zero-offset, blurred shadows (`rgba(0,0,0,0.04)` to `rgba(0,0,0,0.19)` at `0px 0px 10-20px`) that lift cards gently off the white field like a soft glow. Combined with an 8px workhorse radius, the surface feels modern and approachable -- enterprise-grade without being cold.

**Key Characteristics:**
- `Noto Sans TC` as the primary family -- a Taiwan-localized humanist sans that renders Han + Latin with equal weight
- Deep navy (`#061232`) as the primary CTA anchor instead of a bright accent -- gravitas over hype
- Corporate blue (`#3a82dd`) for links and active nav -- the brand's interactive signal
- Enormous weight-800 hero (84px, `-3.49px` tracking) stepping down to calm weight-600 sections
- Pure white canvas (`#ffffff`) with warm-gray body text (`#525151`) -- clean, readable, B2B-credible
- Soft diffuse glow shadows (zero-offset, low alpha) rather than directional drop shadows
- 8px workhorse radius with an occasional 30px pill for chips/badges
- Restrained palette: navy + blue + grays, no decorative gradients on the marketing chrome

## 2. Color Palette & Roles

### Primary
- **Deep Navy** (`#061232`): Primary brand color and primary CTA background ("Get in Touch", "Contact"). A near-black blue that signals enterprise gravitas and anchors the entire system. Measured live as the fill of the hero CTA button.
- **Primary Deep** (`#031234`): The darkest navy variant, used for the densest dark fields and footer-grade backgrounds -- a hair deeper than the primary.
- **Pure White** (`#ffffff`): Page background, card surfaces, button text on navy, hero text over imagery.

### Brand Blue (Interactive)
- **Accent Blue** (`#3a82dd`): The brand's interactive signal -- active navigation links, inline link hovers, highlighted UI. Measured live as the active nav-link color.
- **Accent Blue Strong** (`#4770df`): A stronger, more saturated blue for emphasized links and section accents.
- **Accent Blue Deep** (`#2168c2`): A deeper blue for hover/pressed states and high-contrast accents on light backgrounds.
- **Link Blue** (`#2563eb`): Standard inline link color for body-copy hyperlinks.

### Neutral Scale
- **Heading** (`#333333`): Section and card heading color -- a soft near-black, warmer and less harsh than pure black.
- **Body** (`#525151`): Primary body text color (set on `body`). A warm mid-gray tuned for comfortable long-form reading.
- **Muted** (`#6b7280`): Secondary text, captions, supporting metadata.
- **Faint** (`#999999`): Tertiary labels, disabled-adjacent text, fine print.
- **Ink** (`#000000`): Used sparingly for maximum-contrast UI chrome and certain icon fills.

### Surface & Borders
- **Hairline** (`#edf1f7`): Soft blue-tinted divider and border color for cards, sections, and table rows.

### Shadow Colors
- **Shadow Soft** (`rgba(0,0,0,0.04)`): Minimal ambient glow for light card lift.
- **Shadow Standard** (`rgba(0,0,0,0.10)`): Standard diffuse elevation for content panels.
- **Shadow Strong** (`rgba(0,0,0,0.19)`): Deeper diffuse glow for hovered/featured cards.

## 3. Typography Rules

### Font Family
- **Primary**: `Noto Sans TC`, with fallback chain `Noto Sans, sans-serif`
- **Rationale**: Traditional-Chinese-first family ensures Han and Latin glyphs share a consistent humanist skeleton -- essential for a bilingual Taiwanese B2B audience.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Noto Sans TC | 84px (5.25rem) | 800 | 1.14 | -3.49px | Full-bleed hero, white over imagery |
| Section Heading | Noto Sans TC | 36px (2.25rem) | 600 | 1.40 | -1.50px | Solution/feature section titles, `#333333` |
| Sub-heading | Noto Sans TC | 24px (1.50rem) | 600 | 1.00 | -1.00px | Card heads, industry labels |
| Body Large | Noto Sans TC | 20px (1.25rem) | 500 | 1.40 | normal | Lead paragraphs, intro copy |
| Body | Noto Sans TC | 18px (1.13rem) | 400 | 1.55 | normal | Standard reading text, nav links |
| Button | Noto Sans TC | 18px (1.13rem) | 500 | 1.00 | normal | Primary button label |
| Nav Active | Noto Sans TC | 18px (1.13rem) | 700 | normal | normal | Active nav link, `#3a82dd` |
| Caption | Noto Sans TC | 15px (0.94rem) | 400 | normal | normal | Footer, metadata, fine labels |

### Principles
- **Heavy hero, calm body**: The weight-800 / 84px hero is the single loud moment. Everything below settles to weight 400-600, so the page reads as confident, not shouty.
- **Progressive negative tracking**: Letter-spacing tightens dramatically at display sizes (`-3.49px` at 84px, `-1.5px` at 36px, `-1.0px` at 24px) and relaxes to normal at body sizes. Tight tracking gives large headlines a dense, engineered presence.
- **Warm grays, not black**: Headings are `#333333` and body is `#525151` -- both warm near-blacks rather than pure `#000000`, which keeps long passages comfortable.
- **Bilingual-first metrics**: Line-heights run generous at body sizes (1.55) to accommodate the taller rhythm of mixed Han + Latin text.
- **Weight as hierarchy**: 800 for hero, 600-700 for headings and active nav, 500 for buttons and lead copy, 400 for body. Weight, not size alone, carries the structure.

## 4. Component Stylings

### Buttons

**Primary (Navy)**
- Background: `#061232`
- Text: `#ffffff`
- Padding: 20px 30px
- Radius: 8px
- Height: ~58px
- Font: 18px Noto Sans TC weight 500
- Use: Primary CTA ("Get in Touch", "Contact")

**Ghost / Light**
- Background: `#ffffff`
- Text: `#061232`
- Radius: 8px
- Font: 20px Noto Sans TC weight 500
- Use: Secondary CTA over dark/imagery ("Try it Now")

**Text / Inline Link**
- Background: transparent
- Text: `#4770df` or `#2563eb`
- Font: 18-24px weight 400-700
- Use: Inline navigation, "learn more" affordances

### Cards & Containers
- Background: `#ffffff`
- Border: `1px solid #edf1f7` (hairline) where present
- Radius: 8px (standard), 4px (tight chips)
- Shadow (ambient): `rgba(0,0,0,0.04) 0px 0px 10px 0px`
- Shadow (standard): `rgba(0,0,0,0.10) 0px 0px 20px 0px`
- Hover: shadow deepens toward `rgba(0,0,0,0.19) 0px 0px 10px 0px`

### Badges / Chips / Pills
- Radius: 30px (pill) for category chips and tags
- Background: `#ffffff` or light tint
- Text: `#333333` heading-gray or `#3a82dd` for active
- Font: 15px weight 400-500

### Navigation
- Clean horizontal nav on white background
- Brand logotype left-aligned
- Links: Noto Sans TC 18px weight 700
- Active / hover link color: `#3a82dd` (brand blue)
- CTA: navy "Contact" / "Get in Touch" button right-aligned
- Sticky header on white with soft separation from content

### Section Titles
- Font: 36px Noto Sans TC weight 600
- Color: `#333333`
- Tracking: `-1.50px` (tight)
- Often centered above feature/industry grids

### Inline Links
- Color: `#2563eb` (link blue) or `#4770df` (strong)
- Weight: 400-700 depending on emphasis

---

**Verified:** 2026-06-08 (omd:add-reference — Tier 1 live inspect)
**Tier 1 sources:** https://ikala.ai, https://ikala.tw (live getComputedStyle on body, hero h1, section h2/h3, primary CTA "Get in Touch", nav links — 8+ real samples, 2026-06-08)
**Method:** playwright headless (`--disable-http2`), getComputedStyle on live DOM, rgb()→hex conversion.
**`.verification.md`:** `web/references/ikala/.verification.md`

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 30px, 48px, 80px
- Notable: 30px appears as a recurring rhythm unit (button horizontal padding, pill radius), and section gaps run generous at ~80px to give the white canvas room to breathe.

### Grid & Container
- Centered max-width content column with generous side gutters
- Hero: full-bleed image or dark field with the 84px headline overlaid, white text
- Feature/industry sections: multi-column card grids (Manufacturing, Retail, Finance, etc.)
- Alternating white sections with occasional dark navy bands for emphasis

### Whitespace Philosophy
- **Generous and calm**: The white canvas dominates. Sections are separated by large vertical gaps (~80px) so each block reads as a distinct, scannable unit -- appropriate for an enterprise buyer skimming for relevance.
- **Hero as the anchor**: The oversized hero claims the top of the page; everything below is deliberately quieter, creating a clear visual descent from headline to detail.
- **Card rhythm**: Industry and solution cards sit on the white field with soft glow shadows, evenly spaced, so the eye moves predictably across the grid.

### Border Radius Scale
- Tight (4px): chips, small inline elements
- Standard (8px): buttons, cards, panels -- the workhorse
- Pill (30px): category chips, tags, rounded badges
- Full (9999px): circular avatars/icons where used

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text |
| Ambient (Level 1) | `rgba(0,0,0,0.04) 0px 0px 10px 0px` | Subtle card lift, resting cards |
| Standard (Level 2) | `rgba(0,0,0,0.10) 0px 0px 20px 0px` | Content panels, feature cards |
| Strong (Level 3) | `rgba(0,0,0,0.19) 0px 0px 10px 0px` | Hovered / featured cards, popovers |

**Shadow Philosophy**: iKala's elevation is built on diffuse glow rather than directional drop. Every measured shadow uses a `0px 0px` offset -- no x/y displacement -- so the shadow radiates evenly around the element like a soft halo. The alpha steps (0.04 → 0.10 → 0.19) are the entire elevation language: low and subtle at rest, deepening on interaction. There is no colored or brand-tinted shadow; the system keeps shadows neutral black-on-white so the navy-and-blue palette stays unambiguous. The effect is clean and contemporary -- elements feel lifted but never heavy.

### Decorative Depth
- Dark navy (`#061232` / `#031234`) hero and accent bands create depth through color contrast against the white field
- Soft hairline (`#edf1f7`) dividers separate dense sections without hard lines

## 7. Do's and Don'ts (overview)

A condensed version lives here; the full Do's and Don'ts are enumerated in §16.
- **Do** use navy (`#061232`) for primary CTAs and `#3a82dd` blue for interactive links.
- **Do** keep the white canvas dominant and let sections breathe.
- **Don't** introduce decorative gradients or neon on marketing chrome.
- **Don't** swap `Noto Sans TC` for a Latin-only family -- the bilingual rendering is the point.

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero compresses from 84px toward ~40-48px, stacked cards |
| Tablet | 640-1024px | 2-column grids, moderate gutters |
| Desktop | 1024-1440px | Full multi-column feature/industry grids |
| Large Desktop | >1440px | Centered content with wide margins, hero at full scale |

### Touch Targets
- Primary buttons run ~58px tall with 20px vertical padding -- comfortable tap targets
- Nav links at 18px with generous spacing
- Pill chips maintain adequate horizontal padding for tapping

### Collapsing Strategy
- Hero: 84px display compresses sharply on mobile; weight 800 retained, tracking relaxes as size drops
- Navigation: horizontal links + navy CTA → hamburger toggle on mobile
- Industry/feature cards: multi-column → 2-column → single stacked column
- Section gaps: ~80px → reduced on mobile to keep scroll length reasonable

### Image Behavior
- Hero imagery is full-bleed with white headline overlaid; maintains aspect and crop across sizes
- Card thumbnails maintain 8px radius and soft glow shadow at all sizes

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Deep Navy (`#061232`)
- CTA text: White (`#ffffff`)
- Background: Pure White (`#ffffff`)
- Heading text: Soft Black (`#333333`)
- Body text: Warm Gray (`#525151`)
- Interactive / active nav: Brand Blue (`#3a82dd`)
- Inline link: Link Blue (`#2563eb`) / Strong (`#4770df`)
- Divider: Hairline (`#edf1f7`)
- Dark band: Primary Deep (`#031234`)

### Example Component Prompts
- "Create a hero on a dark navy (`#061232`) field with full-bleed imagery. Headline in Noto Sans TC at 84px weight 800, line-height 1.14, letter-spacing -3.49px, color #ffffff. Below it, a navy CTA button is unnecessary on dark — use a white ghost button (#ffffff bg, #061232 text, 8px radius, 18px weight 500) reading 'Try it Now'."
- "Design a feature card: white background, 8px radius, shadow rgba(0,0,0,0.04) 0px 0px 10px 0px. Title at 24px Noto Sans TC weight 600, color #333333, letter-spacing -1.0px. Body at 18px weight 400, color #525151, line-height 1.55."
- "Build a primary CTA button: #061232 navy background, #ffffff text, 8px radius, 20px 30px padding, ~58px tall, 18px Noto Sans TC weight 500, label 'Get in Touch'."
- "Create navigation: white sticky header, Noto Sans TC 18px weight 700 links in #333333, active link color #3a82dd. Navy 'Contact' button right-aligned (#061232 bg, white text, 8px radius)."
- "Design a section title: 36px Noto Sans TC weight 600, color #333333, letter-spacing -1.5px, centered above a 3-column industry card grid."

### Iteration Guide
1. Set `font-family: "Noto Sans TC", "Noto Sans", sans-serif` on all text -- the TC-first family is the brand's bilingual signature
2. Navy `#061232` is the primary CTA color; `#3a82dd` blue is the interactive/link signal
3. Headings use `#333333`, body uses `#525151` -- warm near-blacks, never pure `#000000` for long copy
4. Shadows are always `0px 0px` diffuse glow: 0.04 alpha at rest, 0.10 standard, 0.19 on hover
5. Border-radius is 8px for buttons/cards, 30px for pill chips, 4px for tight elements
6. Tracking tightens hard at display sizes (-3.49px at 84px) and relaxes to normal by 18px body
7. Keep the white canvas dominant; reserve navy bands for emphasis, never overwhelm

---

## 10. Voice & Tone

iKala's voice is that of a regional AI partner that speaks the language of business outcomes, not algorithms. The site's own framing -- *"Data → Intelligence → Impact"* (the page title) and *"Total AI Transformation Solutions and Services"* (a live h2) -- captures the register: outcome-oriented, enterprise-credible, and pragmatic. Copy leads with the customer's transformation, not the model architecture. CTAs are direct and unfussy ("Get in Touch", "Contact", "Try it Now"). The tone respects a buyer who is evaluating ROI and credibility, so it avoids consumer-app exuberance and stays measured.

| Context | Tone |
|---|---|
| Hero headlines | Ambitious but concrete. Frames AI as transformation for industries (manufacturing, retail, finance). |
| Product / solution descriptions | Outcome-first. "AI transformation solutions and services" — capability tied to business value. |
| CTAs | Direct, low-friction imperatives. "Get in Touch", "Contact", "Try it Now". |
| Case studies / industries | Sector-specific, credibility-led. Named verticals, concrete deployments. |
| Bilingual surfaces | Traditional Chinese and English share one voice; the Han text is primary, not an afterthought. |

**Forbidden register.** Hype superlatives ("revolutionary", "game-changing"), emoji on enterprise marketing chrome, and vague "AI magic" claims that don't tie to a business outcome. iKala sells to procurement-minded APAC enterprises; the voice stays professional and evidence-led.

## 11. Brand Narrative

iKala is a Taiwan-headquartered AI company founded in **2015**, widely associated with co-founder and CEO **Sega Cheng**. The company grew out of a thesis that AI's value is realized only when it drives measurable business impact -- a positioning crystallized in its own *"Data → Intelligence → Impact"* framing. iKala built two principal lines of business: an **AI cloud / AI transformation** practice that helps enterprises across manufacturing, retail, and finance operationalize AI, and **iKala Commerce / KOL Radar**, an influencer-marketing (martech) intelligence platform that became one of the most recognized creator-marketing tools in the Greater China and Southeast Asia markets.

What iKala rejects is AI sold as a black-box novelty. Its public posture -- as a Google Cloud partner and an APAC-focused AI services firm -- frames technology as a means to enterprise outcomes, which is why the marketing surface leads with industries and impact rather than model specifications. The design system mirrors this: a credible navy-and-white palette, a Traditional-Chinese-first typeface that signals genuine regional roots, and a calm, scannable layout built for an enterprise buyer rather than a hype-driven consumer.

The bilingual, Taiwan-rooted identity is not incidental. iKala competes regionally against both global cloud vendors and local martech players, and its brand expresses a specific bet: that the most trusted AI partner for an APAC enterprise is one that is unmistakably local in language and unmistakably credible in presentation.

## 12. Principles

1. **Impact over algorithms.** The brand frames itself as *Data → Intelligence → Impact*. Design artifacts should foreground outcomes and clarity, not technical spectacle.
2. **Regional authenticity.** `Noto Sans TC` as the primary family is a commitment, not a default. The brand reads as genuinely Taiwanese/APAC, and the design should never erase that.
3. **Enterprise credibility.** Navy gravitas, white space, neutral shadows -- the visual language is built to earn a procurement buyer's trust, not to delight a consumer.
4. **Calm confidence.** One loud moment (the weight-800 hero), then measured restraint. The system signals authority that does not need to shout.
5. **Bilingual parity.** Han and Latin text share one humanist skeleton and balanced metrics; neither language is a second-class citizen.
6. **Neutral elevation.** Diffuse glow shadows keep the palette unambiguous -- the navy and blue carry all the brand color, shadows stay out of the way.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable iKala customer segments (APAC enterprise AI buyers, retail/manufacturing digital-transformation leads, brand marketers using influencer intelligence), not individual people.*

**Wei-Chen Lin, 42, Taipei.** Head of digital transformation at a Taiwanese precision-manufacturing firm. Evaluates AI vendors on whether they understand his factory's actual processes, not on benchmark scores. Trusts iKala in part because the brand presents in Traditional Chinese as a peer, and because the marketing leads with manufacturing outcomes rather than model jargon.

**Priya Raman, 35, Singapore.** Regional marketing director at a consumer brand running campaigns across Southeast Asia. Uses iKala's influencer-intelligence platform to vet creators and measure campaign impact. Values dashboards that are dense but scannable, and a vendor that speaks credibly to both Chinese- and English-language markets.

**Hiroshi Tanaka, 48, Tokyo.** Enterprise IT director assessing AI-transformation partners for an APAC rollout. Cares about credibility signals -- cloud partnerships, sector case studies, professional presentation. The calm navy-and-white site reassures him that this is a serious infrastructure partner, not a hype startup.

**Mei-Ling Wu, 29, Kaohsiung.** Data analyst at a retail group. Works daily with AI-driven commerce insights. Appreciates the warm-gray body text and generous line-height that make long reports readable, and a layout that lets her scan for the section she needs.

## 14. States

| State | Treatment |
|---|---|
| **Empty (dashboard, no data)** | White canvas. Single sentence in heading gray (`#333333`) at 20px Noto Sans TC weight 500. One navy CTA (`#061232`) to add/connect a source. No illustration clutter. |
| **Loading (first paint)** | Soft skeleton blocks in hairline (`#edf1f7`) at final dimensions with a gentle shimmer. No spinner-only states on content-heavy panels. |
| **Error (request failed)** | Inline message in muted gray (`#6b7280`) with a clear plain-language explanation and a retry affordance. Professional, no apology theatrics. |
| **Error (form validation)** | Field-level message below the input, concise and specific about what is required. |
| **Success (action completed)** | Brief inline confirmation; brand-blue (`#3a82dd`) accent on the confirmed element. No emoji, no exclamation. |
| **Disabled** | Reduced opacity on surface and text together; navy actions fade rather than switch to gray, preserving brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State commits, selection, focus rings |
| `motion-fast` | 150ms | Hover, link color shifts, button press |
| `motion-standard` | 250ms | Card hover-lift, dropdown, sheet |
| `motion-slow` | 400ms | Section reveals, hero transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Default two-way transitions |
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving elements — cards, dropdowns |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |

**Signature motions.**

1. **Card hover-lift.** On hover, feature/industry cards deepen their diffuse glow from `rgba(0,0,0,0.04)` toward `rgba(0,0,0,0.19)` over `motion-standard / ease-standard`. The card does not translate sharply; the elevation change carries the feedback.
2. **Link color shift.** Navigation and inline links transition toward brand blue (`#3a82dd`) on hover over `motion-fast`. The color is the affordance.
3. **Section reveal.** On scroll, sections fade in with a small upward translate using `motion-slow / ease-enter`, reinforcing the calm top-down reading order.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`; reveals become immediate. The site remains fully functional without motion.

## 16. Do's and Don'ts

### Do
- Set `Noto Sans TC` first in the font stack on every text element -- the bilingual rendering is the brand
- Use deep navy (`#061232`) for primary CTAs and dark emphasis bands
- Use brand blue (`#3a82dd`) for active nav and interactive links; `#2563eb`/`#4770df` for inline links
- Keep headings at `#333333` and body at `#525151` -- warm near-blacks, not pure black
- Use diffuse `0px 0px` glow shadows (0.04 / 0.10 / 0.19 alpha) for elevation
- Keep border-radius at 8px for buttons and cards, 30px for pill chips
- Let the white canvas dominate and give sections generous (~80px) breathing room
- Track headlines tight (`-3.49px` at 84px, `-1.5px` at 36px) and relax to normal at body sizes

### Don't
- Don't replace `Noto Sans TC` with a Latin-only font -- it erases the brand's regional authenticity
- Don't use decorative gradients or neon on the marketing chrome -- the palette is navy + blue + grays
- Don't use directional drop shadows -- iKala's elevation is always even, zero-offset glow
- Don't use pure black (`#000000`) for headings or long body copy -- use `#333333` / `#525151`
- Don't make the hero quiet and the body loud -- the weight-800 hero is the single loud moment
- Don't introduce hype superlatives or emoji into enterprise-facing copy
- Don't use a single navy shade everywhere as a flat fill -- reserve it for CTAs and emphasis bands
- Don't apply positive letter-spacing at display sizes -- iKala tracks tight
