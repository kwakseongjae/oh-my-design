---
id: amazingtalker
name: AmazingTalker
country: TW
category: consumer-tech
homepage: "https://www.amazingtalker.com"
primary_color: "#02cab9"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=amazingtalker.com&sz=128"
verified: "2026-06-08"
added: "2026-06-08"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-08"
  note: "primary = live teal CTA fill #02cab9 (rgb 2,202,185); coral #ff5f5f is the secondary energy accent; body text #484848 across both en. and tw. surfaces"
  colors:
    primary: "#02cab9"
    primary-deep: "#02b3a4"
    coral: "#ff5f5f"
    coral-soft: "#ffe5e5"
    canvas: "#ffffff"
    surface: "#f3f5f7"
    surface-alt: "#fbfbfb"
    heading: "#363636"
    body: "#484848"
    muted: "#767676"
    slate: "#909399"
    on-primary: "#ffffff"
    hairline: "#dcdfe6"
    hairline-soft: "#ebebeb"
  typography:
    family: { sans: "Roboto", cjk: "Helvetica Neue, PingFang, Microsoft JhengHei" }
    display-hero: { size: 50, weight: 600, lineHeight: 1.30, tracking: 0, use: "Hero H1 over imagery, white text, friendly authority" }
    section:      { size: 31, weight: 500, lineHeight: 1.50, tracking: 0, use: "Feature section titles, e.g. 4 reasons to learn" }
    section-cjk:  { size: 30, weight: 500, lineHeight: 1.50, tracking: 0, use: "CJK section titles on Helvetica/PingFang stack" }
    subhead:      { size: 24, weight: 400, lineHeight: 1.30, tracking: 0, use: "Hero subtitle, card category heads" }
    body-lg:      { size: 18, weight: 300, lineHeight: 1.50, tracking: 0, use: "Price labels, intro lines" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, tracking: 0, use: "Standard reading text, nav links" }
    button:       { size: 20, weight: 400, lineHeight: 1.50, tracking: 0, use: "Primary hero CTA label" }
    button-sm:    { size: 14, weight: 400, lineHeight: 1.50, tracking: 0, use: "Header utility buttons, Sign In" }
    caption:      { size: 14, weight: 400, lineHeight: 1.50, use: "Small labels, helper text" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 18, xl: 24, xxl: 36, section: 64 }
  rounded: { sm: 3, md: 5, lg: 8, full: 9999 }
  shadow:
    ambient: "rgba(0,0,0,0.06) 0px 2px 8px"
    standard: "rgba(0,0,0,0.10) 0px 4px 16px"
    elevated: "rgba(0,0,0,0.12) 0px 8px 28px"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#02cab9", fg: "#ffffff", radius: 5, font: "Roboto 20px/400", use: "hero primary CTA" }
    button-primary-cta: { type: button, bg: "#02cab9", fg: "#ffffff", radius: 3, padding: "8px 18px", font: "24px/300", use: "section CTA" }
    button-ghost: { type: button, fg: "#484848", use: "header utility actions (Sign In, Apply To Teach), no border" }
    card-course: { type: card, bg: "#ffffff", fg: "#484848", radius: 8, use: "ambient shadow, image top + price label" }
    accent-coral: { type: badge, bg: "#ffe5e5", fg: "#ff5f5f", use: "badges, highlights, urgency tags, soft tint background" }
    nav-link: { type: tab, font: "Roboto 16px/400", use: "nav link", active: "teal #02cab9 on active/hover" }
---

# Design System Inspiration of AmazingTalker

## 1. Visual Theme & Atmosphere

AmazingTalker is a Taiwanese language-learning marketplace, and its design speaks the language of friendly, approachable confidence rather than institutional gravity. The page opens on a clean white canvas (`#ffffff`) with a single, unmistakable brand signal: a bright aquatic teal (`#02cab9`) that owns every primary call-to-action. This is not the corporate blue of legacy ed-tech, nor the playful primary-color chaos of consumer apps — it is one saturated, optimistic teal carried with discipline across every surface, from the `en.` global site to the `tw.` Traditional-Chinese home that anchors the brand in Taiwan. The atmosphere is warm, human, and conversion-focused: large hero imagery of real tutors, generous white CTAs, and a layout that always knows what it wants you to click next.

The typographic foundation is `Roboto` — Google's humanist workhorse — used at a friendly weight 600 for the 50px hero headline ("Languages and learning made fun"). On CJK section titles the stack gracefully falls back to `Helvetica Neue`, `PingFang`, and `Microsoft JhengHei`, the standard high-quality Traditional-Chinese rendering chain. This dual-script awareness is core to the brand: a marketplace serving Taiwan, Korea, Japan, and the broader Asian language market must read beautifully in both Latin and CJK, and AmazingTalker's font strategy treats that as a first-class concern rather than an afterthought.

Where Stripe whispers and Apple subtracts, AmazingTalker reassures. The secondary accent — a warm coral (`#ff5f5f`) — appears for badges, highlights, and moments of energy, providing emotional counterweight to the cool teal. The result is a palette that feels like a conversation between calm competence (teal) and human warmth (coral), set on abundant white, with body copy in a soft near-black slate (`#484848`) that never bites the way pure black would.

**Key Characteristics:**
- One disciplined brand teal (`#02cab9`) owning all primary CTAs across en./tw. surfaces
- Coral (`#ff5f5f`) as the warm secondary accent for badges, urgency, and highlights
- `Roboto` as the Latin workhorse; `Helvetica Neue / PingFang / Microsoft JhengHei` for CJK
- Soft slate body text (`#484848`) instead of pure black — friendlier, warmer reading
- Conservative small radii (3px–5px on buttons, 8px on cards) — approachable, not aggressive
- White-dominant canvas with light-gray (`#f3f5f7`) surface alternation for rhythm
- Conversion-first hero: real tutor imagery, white overlay text, large teal CTA
- Dual-script discipline — the design assumes both Latin and Traditional-Chinese readers

## 2. Color Palette & Roles

### Primary
- **Brand Teal** (`#02cab9`): The signature. Primary CTA backgrounds ("English tutors", "Match me with tutors", "開始挑選教師吧！"), active nav state, link highlights. A bright, saturated aquatic teal (rgb 2,202,185) that anchors the entire identity.
- **Teal Deep** (`#02b3a4`): Pressed / hover-darkened variant of the primary teal for interactive feedback on CTAs.
- **Pure White** (`#ffffff`): Page background, card surfaces, and the text color sitting on every teal button.

### Accent
- **Coral** (`#ff5f5f`): The warm energy accent (rgb 255,95,95). Badges, urgency tags, highlight numbers, decorative emphasis. Provides emotional warmth against the cool teal.
- **Coral Soft** (`#ffe5e5`): Tinted coral surface (derived from coral at low alpha, `rgba(255,95,95,0.1)` observed live) for highlight-card backgrounds and badge fills.

### Neutral Scale
- **Heading** (`#363636`): Darkest text tone (rgb 54,54,54). Strong section titles, emphasis labels.
- **Body** (`#484848`): The dominant text color (rgb 72,72,72) — by far the most-used color on the page. Standard reading copy, price labels, nav.
- **Muted** (`#767676`): Secondary text (rgb 118,118,118). Descriptions, metadata, helper copy.
- **Slate** (`#909399`): Icon and tertiary-detail gray (rgb 144,147,153). Inactive icons, subtle markers.

### Surface & Borders
- **Surface** (`#f3f5f7`): Light cool-gray section background (rgb 243,245,247) for alternating bands and grouped content.
- **Surface Alt** (`#fbfbfb`): Near-white surface for subtle card separation.
- **Hairline** (`#dcdfe6`): Standard border / divider color (rgb 220,223,230) for cards and inputs.
- **Hairline Soft** (`#ebebeb`): Lightest divider for low-emphasis separation.

### On-Brand
- **On Primary** (`#ffffff`): Text and icons on teal and coral fills — always white for maximum contrast and friendliness.

**Color budget note.** AmazingTalker runs a tight two-hue identity: teal does all the interactive work, coral provides warmth and urgency, and everything else is a disciplined neutral scale on white. There is no third brand color competing for attention — the restraint is what makes the teal read as confident.

## 3. Typography Rules

### Font Family
- **Latin Primary**: `Roboto, sans-serif` — humanist, friendly, exceptionally legible at small sizes
- **CJK Stack**: `"Helvetica Neue", Helvetica, Arial, "PingFang HK", PingFang-SC-Regular, PingFang, "Hiragino Sans GB", STHeiti, "Microsoft JhengHei", sans-serif` — high-quality Traditional/Simplified Chinese rendering chain
- **No custom webfont**: AmazingTalker deliberately uses system-available and Google fonts, prioritizing fast load and broad CJK coverage over a bespoke typeface

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Hero H1 | Roboto | 50px | 600 | 1.30 (65px) | White over hero imagery — "Languages and learning made fun" |
| Section Title | Roboto | 31px | 500 | 1.50 (46.5px) | "4 reasons to learn on AmazingTalker" |
| Section Title (CJK) | Helvetica/PingFang | 30px | 500 | 1.50 (45px) | "Popular Courses", "Who can learn with AmazingTalker?" |
| Hero Subtitle | Roboto | 24px | 400 | 1.30 (31.2px) | White subhead under the hero H1 |
| Category Head (H3) | Roboto | 24px | 400 | 1.60 (38.4px) | Course-card category headings ("English tutors") |
| Body Large | Roboto | 18px | 300 | 1.50 (27px) | Price labels ("₩14,580/lesson"), intro lines |
| Body | Roboto | 16px | 400 | 1.50 (24px) | Standard reading text, nav links |
| Primary CTA | Roboto | 20px | 400 | 1.50 (30px) | Hero teal button label |
| Utility Button | Roboto | 14px | 400 | 1.50 (21px) | Header "Sign In", "Apply To Teach" |
| Caption | Roboto | 14px | 400 | 1.50 | Small labels, helper text |

### Principles
- **Weight as hierarchy, not drama**: AmazingTalker uses 600 only at the hero, 500 for section titles, 400 for body and CTAs, and 300 for price/intro lines. The range is broad but each weight has a clear job — there is no "heavy everywhere" shouting.
- **Roboto for trust and legibility**: The choice of Roboto signals friendliness and neutral competence; it never competes with the content. It reads identically across the dozens of language-locale subdomains AmazingTalker serves.
- **CJK-aware fallback is intentional**: Section titles on `tw.` surfaces resolve to the Helvetica/PingFang/Microsoft JhengHei stack so that Traditional-Chinese renders crisply. This is a deliberate dual-script design decision, not an accident of CSS.
- **Generous line-height (1.5)**: Body and section text run at 1.5 line-height for relaxed, scannable reading — appropriate for a content-heavy marketplace browsed by learners comparing tutors.
- **No letter-spacing tricks**: Tracking stays `normal` everywhere. The friendliness comes from weight and warmth, not from typographic engineering.

## 4. Component Stylings

### Buttons

**Primary Hero CTA**
- Background: `#02cab9`
- Text: `#ffffff`
- Radius: 5px
- Font: 20px Roboto weight 400
- Use: Hero primary action ("English tutors", "Match me with tutors")

**Primary Section CTA**
- Background: `#02cab9`
- Text: `#ffffff`
- Padding: 8px 18px
- Radius: 3px
- Height: ~54px
- Font: 24px Roboto weight 300
- Use: Section conversion CTA — observed live on `tw.` as "開始挑選教師吧！" (Start picking your teacher)
- Hover: darken toward `#02b3a4`

**Header Utility (Ghost)**
- Background: transparent
- Text: `#484848` (or `rgba(0,0,0,0.87)` in nav context)
- Border: none
- Font: 14px Roboto weight 400
- Use: "Sign In", "Apply To Teach" — low-emphasis header actions

**Coral Accent Button / Badge**
- Background: `#ff5f5f`
- Text: `#ffffff`
- Radius: 3px–5px
- Use: Urgency tags, promotional highlights, energy moments

### Cards & Containers

**Course Card**
- Background: `#ffffff`
- Radius: 8px
- Shadow: `rgba(0,0,0,0.10) 0px 4px 16px` (standard ambient)
- Structure: tutor/course image top, category head (24px), price label in `#484848` weight 300 (e.g. "₩14,580/lesson")
- Border: optional `1px solid #dcdfe6` hairline

**Surface Band**
- Background: `#f3f5f7` (alternating section bands) or `#fbfbfb`
- Used to group "Popular Courses", "4 reasons to learn", "Who can learn with AmazingTalker?" sections

### Navigation
- Clean horizontal header on white
- Brand logotype left-aligned, utility actions right ("Sign In", "Apply To Teach")
- Links: Roboto 16px weight 400, `rgba(0,0,0,0.87)` text, teal `#02cab9` on active/hover
- Dropdown mega-menus for tutor categories (English / Spanish / Korean / Japanese / French / Chinese Tutors)
- Locale awareness: header adapts between en. and tw. subdomains

### Badges / Tags / Pills
- **Coral Badge**: `#ff5f5f` background, white text, ~3px radius — urgency / promotional
- **Coral Soft Tag**: `#ffe5e5` (`rgba(255,95,95,0.1)`) background, coral text — low-emphasis highlight
- **Teal Tint Tag**: `rgba(2,202,185,0.2)` background, teal text — on-brand category markers

### Inputs & Forms
- Border: `1px solid #dcdfe6`
- Radius: 3px–5px
- Focus: teal `#02cab9` border / ring
- Text: `#484848`
- Placeholder: `#909399`

---

**Verified:** 2026-06-08 (Tier 1 live inspect — playwright getComputedStyle on en. and tw. surfaces)
**Tier 1 sources:** https://www.amazingtalker.com (redirects to en.amazingtalker.com — body/CTA/h1/h2/nav getComputedStyle, live DOM); https://tw.amazingtalker.com (Traditional-Chinese home — teal CTA `#02cab9` 3px radius confirmed, second surface)
**Method:** Live computed-style extraction; rgb()→hex conversion. >=6 real samples captured (teal CTA, coral accent, body `#484848`, h1 50px/600, h2 30px/500, nav teal active).
**`.verification.md`:** `web/references/amazingtalker/.verification.md`

## 5. Layout Principles

### Spacing System
- Base unit: ~8px with frequent 18px (`lg`) rhythm observed in CTA padding (8px 18px)
- Scale: 4px, 8px, 12px, 16px, 18px, 24px, 36px, 64px
- Section vertical rhythm: generous 64px+ bands separating content groups

### Grid & Container
- Centered max-width content column with full-bleed hero imagery
- Hero: large background image + white overlay headline/subtitle + teal CTA, left or center aligned
- Course grids: multi-column responsive card grids (English / Spanish / Korean / Japanese tutors)
- Alternating white and `#f3f5f7` section bands for visual rhythm
- Mega-menu navigation for the large tutor-category taxonomy

### Whitespace Philosophy
- **Generous and inviting**: As a consumer marketplace, AmazingTalker uses ample whitespace to keep the dense catalog of tutors, languages, and prices from feeling overwhelming.
- **Conversion-anchored**: Whitespace always funnels the eye toward the next teal CTA. Empty space is never decorative — it is directional.
- **Band rhythm**: White and light-gray (`#f3f5f7`) bands alternate to chunk the long marketing page into digestible, scannable sections.

### Border Radius Scale
- Sharp (3px): Section CTAs, tags — crisp, modern
- Standard (5px): Hero buttons, inputs — the workhorse
- Comfortable (8px): Cards, containers — friendly but restrained
- Pill (9999px): Avatars, occasional filter chips only

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, hero overlay text |
| Ambient (Level 1) | `rgba(0,0,0,0.06) 0px 2px 8px` | Subtle card lift, hover hints |
| Standard (Level 2) | `rgba(0,0,0,0.10) 0px 4px 16px` | Course cards, content panels |
| Elevated (Level 3) | `rgba(0,0,0,0.12) 0px 8px 28px` | Dropdown mega-menus, popovers, modals |
| Ring (Accessibility) | `2px solid #02cab9` outline | Keyboard focus ring |

**Shadow Philosophy**: AmazingTalker uses honest, neutral soft shadows — no chromatic tinting. Depth is gentle and functional: cards lift just enough to read as tappable, dropdowns sit clearly above content, and nothing floats dramatically. This restraint keeps the visual energy concentrated in the teal CTAs and coral accents rather than in elevation theatrics. The shadows are warm-neutral black at low alpha, which suits the friendly, content-first marketplace register.

### Decorative Depth
- Hero imagery provides natural depth; overlay text sits flat in white for maximum legibility
- Light-gray surface bands (`#f3f5f7`) create depth through value contrast rather than shadow
- Coral and teal accents provide chromatic energy without relying on elevation

## 7. Do's and Don'ts (Component Quick-Reference)

### Do
- Use teal `#02cab9` for every primary CTA — it is the single brand signal
- Use coral `#ff5f5f` for warmth, urgency, and highlight moments only
- Use `#484848` for body text — never pure black
- Keep button radius at 3px–5px and card radius at 8px
- Use Roboto for Latin and the PingFang/Helvetica stack for CJK
- Alternate white and `#f3f5f7` bands to chunk long pages

### Don't
- Don't introduce a third brand hue competing with teal and coral
- Don't use pure black (`#000000`) for body copy — `#484848` is warmer
- Don't use large pill radii on primary buttons — stay sharp (3–5px)
- Don't tint shadows — AmazingTalker uses neutral soft shadows
- Don't drop the CJK fallback stack — Traditional-Chinese must render crisply
- Don't bury the teal CTA — every section funnels toward it

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero text scales down, stacked cards, hamburger nav |
| Tablet | 640–1024px | 2-column card grids, condensed mega-menu |
| Desktop | 1024–1280px | Full multi-column course grids, full mega-menu nav |
| Large Desktop | >1280px | Centered content with generous side margins |

### Touch Targets
- Primary CTAs are large (hero CTA ~54px tall section variant) — comfortably tappable
- Nav links at 16px with adequate spacing
- Course cards are full tap targets

### Collapsing Strategy
- Hero: 50px H1 → ~32px on mobile, weight 600 maintained
- Navigation: horizontal links + mega-menu → hamburger drawer
- Course grids: 4-column → 2-column → single-column stacked
- Section CTA: full-width teal button on mobile
- Surface bands maintain full-width treatment, reduce internal padding

### Image Behavior
- Hero imagery uses responsive cropping, keeping the tutor's face and CTA visible
- Course-card thumbnails maintain 8px radius across breakpoints
- Locale-specific imagery may swap between en. and tw. surfaces

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Brand Teal (`#02cab9`)
- CTA pressed: Teal Deep (`#02b3a4`)
- Accent / urgency: Coral (`#ff5f5f`)
- Accent soft bg: Coral Soft (`#ffe5e5`)
- Background: Pure White (`#ffffff`)
- Surface band: Light Gray (`#f3f5f7`)
- Heading text: Dark (`#363636`)
- Body text: Slate (`#484848`)
- Muted text: Gray (`#767676`)
- Border: Hairline (`#dcdfe6`)

### Example Component Prompts
- "Create a hero on a tutor photo with white overlay. H1 at 50px Roboto weight 600, line-height 1.3, color #ffffff. Subtitle at 24px weight 400, white. Primary CTA: teal #02cab9 fill, white text, 5px radius, 20px Roboto weight 400 — label 'Find tutors'."
- "Design a course card: white background, 8px radius, shadow rgba(0,0,0,0.10) 0px 4px 16px. Category head 24px Roboto weight 400 #363636. Price label 18px weight 300, color #484848, e.g. '₩14,580/lesson'."
- "Build a section CTA: teal #02cab9 fill, white text, 3px radius, 8px 18px padding, 24px Roboto weight 300 — label 'Start now'. Place it centered on a #f3f5f7 band."
- "Create a coral urgency badge: #ff5f5f background, white text, 3px radius, 14px Roboto weight 400. Soft variant: #ffe5e5 background with coral text."
- "Design navigation: white header. Links Roboto 16px weight 400, rgba(0,0,0,0.87), teal #02cab9 on active. Utility buttons 'Sign In' / 'Apply To Teach' at 14px weight 400, #484848, transparent."

### Iteration Guide
1. Teal `#02cab9` is the one interactive color — every CTA, every active state
2. Coral `#ff5f5f` is warmth and urgency only — never a second CTA color
3. Body is `#484848`, headings `#363636` — never pure black
4. Roboto for Latin; keep the Helvetica/PingFang/Microsoft JhengHei stack for CJK
5. Button radius 3–5px, card radius 8px — friendly but crisp
6. Neutral soft shadows only — no chromatic tinting
7. Alternate white and `#f3f5f7` bands to structure long marketplace pages
8. Every layout decision funnels toward the next teal CTA

---

## 10. Voice & Tone

AmazingTalker's voice is encouraging, plain-spoken, and learner-first — the tone of a friendly guide who genuinely wants you to start learning today. The tagline "Languages and learning made fun" sets the register: warm, optimistic, zero jargon. CTAs are direct and inviting ("Find tutors", "Match me with tutors", "Apply To Teach"), and on Traditional-Chinese surfaces they carry the same warmth ("開始挑選教師吧！" — "Let's start picking your teacher!", complete with an inviting exclamation that the brand allows because the register is genuinely consumer-friendly).

| Context | Tone |
|---|---|
| Hero headlines | Warm, aspirational, accessible. "Languages and learning made fun." |
| CTAs | Direct, inviting imperatives. "Find tutors", "Match me with tutors". |
| Course / tutor descriptions | Concrete, benefit-led, learner-focused. Price and value upfront. |
| Tutor-facing (Apply To Teach) | Encouraging, opportunity-framed. "Apply To Teach". |
| Traditional-Chinese (tw.) | Same warmth, locally natural phrasing, friendly exclamation allowed. |
| Reviews / social proof | Authentic, specific, learner-voiced. |

**Forbidden register.** Cold institutional ed-tech jargon ("pedagogical outcomes", "learning solutions"). Hype superlatives stacked on capabilities. Anything that makes language learning feel like an obligation rather than an opportunity. The brand's whole premise is that learning should feel human and fun — the copy never betrays that.

## 11. Brand Narrative

AmazingTalker is a Taiwan-founded online language-learning marketplace that connects learners with professional tutors for one-on-one lessons. Born in Taipei, the company built its identity around a simple, design-forward premise: language learning should be personal, flexible, and genuinely enjoyable — a far cry from rigid classroom curricula or impersonal app gamification. The marketplace model puts real, vetted human tutors at the center, and the brand's visual language reflects that human warmth.

The company expanded from its Traditional-Chinese home market (`tw.amazingtalker.com`) across Asia and globally (`en.amazingtalker.com` plus dozens of language-locale subdomains), serving learners of English, Spanish, Korean, Japanese, French, Chinese, and more. This multi-market reach is why the design treats dual-script rendering — Latin via Roboto, CJK via the PingFang/Microsoft JhengHei stack — as a foundational requirement rather than a localization afterthought.

What AmazingTalker rejects: the cold, institutional aesthetic of legacy education platforms and the over-gamified noise of mass-market language apps. What it embraces: one confident teal that signals trust and calm, a coral accent that keeps the experience warm and human, abundant white space, and real tutor imagery. The design-forward startup ethos shows in the restraint — a tightly held two-hue palette, disciplined typography, and a relentless focus on guiding the learner to their next lesson.

## 12. Principles

1. **Human warmth over institutional gravity.** The marketplace is built on real tutors and real connection; the design must feel approachable, never clinical. Soft slate text, warm coral accents, and friendly Roboto all serve this.
2. **One brand color, held with discipline.** Teal `#02cab9` does all the interactive work. The restraint is the brand — a single confident hue reads as more trustworthy than a rainbow.
3. **Dual-script as a first-class concern.** Serving Taiwan, Korea, Japan, and the global market means Latin and CJK must both render beautifully. The font stack is a deliberate design decision.
4. **Conversion is a kindness, not a trick.** Every layout funnels toward the next teal CTA — but the goal is to help a hesitant learner actually start, which the brand frames as a genuine service.
5. **Fun is functional.** "Made fun" is not marketing fluff; it is a design constraint. If a surface feels like a chore, it has failed the brand.
6. **Restraint signals quality.** Two hues, neutral shadows, conservative radii, no custom-font theatrics — the discipline is what makes a design-forward Taiwanese startup read as premium and reliable.

## 13. Personas

*Personas below are fictional archetypes informed by AmazingTalker's publicly observable user segments (adult language learners, working professionals upskilling, parents arranging lessons for children, and tutors), not individual people.*

**Yi-Chen Lin, 28, Taipei.** Marketing professional who books English lessons twice a week to advance her career. Found AmazingTalker through the `tw.` site and loves that she can browse tutor profiles, read reviews, and see per-lesson prices upfront before committing. Trusts the brand because it feels human and transparent — not a faceless subscription app.

**Daniel Cho, 34, Seoul.** Engineer learning Japanese for a planned move to Tokyo. Uses the en. interface but appreciates that the platform clearly serves Asian-language learners. Picks tutors by reading detailed profiles and the coral-tagged "popular" markers. Would abandon a platform that hid pricing or felt like a generic gamified app.

**Mei Wong, 41, Hong Kong.** Parent arranging weekly Mandarin and English lessons for her two children. Values the warm, reassuring design — the teal CTAs and clean course cards make a complex catalog feel manageable. Books across multiple tutors and trusts the review system.

**Carlos Mendez, 30, who tutors Spanish on the platform.** Came in through "Apply To Teach". Values that the marketplace presents tutors with dignity and clear earning potential, and that the brand's friendly design attracts motivated, respectful learners.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no search results)** | White canvas. Friendly single line in `#484848` at 18px Roboto: "No tutors match these filters yet." One teal CTA: "Adjust filters". Encouraging, never a dead end. |
| **Empty (no bookings yet)** | Slate (`#767676`) line at 16px: "You haven't booked a lesson yet." Teal CTA "Find tutors". Warm, opportunity-framed. |
| **Loading (tutor list)** | Skeleton course cards at final dimensions in `#f3f5f7`. Gentle shimmer. No spinner-only screens. |
| **Loading (in-place filter)** | Subtle teal `#02cab9` progress indicator; previous results stay visible while refining. |
| **Error (search failed)** | Inline message in `#484848` with a coral `#ff5f5f` accent marker + plain-language explanation + "Try again" link. No generic "Something went wrong". |
| **Error (form validation)** | Field-level, coral `#ff5f5f` border + 14px helper text describing exactly what is needed. |
| **Success (lesson booked)** | Brief confirmation with teal `#02cab9` accent: "Lesson booked!" — the warmth and exclamation fit the brand. Booking detail linked immediately below. |
| **Disabled** | Reduced opacity on surface and text together. Teal actions fade to a lower-alpha teal — never switch to gray, to preserve brand read. |
| **Highlight / Promo** | Coral `#ff5f5f` badge or `#ffe5e5` tinted card for time-sensitive offers and popular markers. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection ticks, focus rings |
| `motion-fast` | 150ms | Hover, button press, card lift |
| `motion-standard` | 240ms | Dropdown mega-menu, modal, card expand |
| `motion-slow` | 360ms | Page-level transitions, hero reveals |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — dropdowns, cards, panels |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Signature motions.**

1. **Card hover lift.** Course cards lift gently on hover using `motion-fast / ease-standard` with a small shadow increase — signaling tappability without bounce.
2. **Mega-menu reveal.** Tutor-category dropdowns open with `motion-standard / ease-enter`, fading and sliding down a few pixels — calm, never abrupt.
3. **CTA feedback.** Teal CTAs darken toward `#02b3a4` on press with `motion-fast` — immediate, reassuring tactile feedback.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Hover lifts become instantaneous; the marketplace stays fully functional.

## 16. Do's and Don'ts

### Do
- Use teal `#02cab9` as the single primary interactive color across all surfaces
- Reserve coral `#ff5f5f` for warmth, urgency, and highlight moments
- Use `#484848` body / `#363636` heading text — warm, never pure black
- Pair Roboto (Latin) with the PingFang/Helvetica/Microsoft JhengHei stack (CJK)
- Keep button radii at 3–5px and card radii at 8px
- Use neutral soft shadows and alternate white / `#f3f5f7` bands
- Make every section funnel toward the next teal CTA
- Frame copy as encouraging and learner-first — "made fun" is a constraint

### Don't
- Don't add a third brand hue — teal + coral is the whole identity
- Don't use pure black for text — `#484848` keeps the warmth
- Don't use large pill radii on primary buttons — stay crisp
- Don't tint shadows or over-elevate — keep depth gentle and neutral
- Don't drop the CJK fallback stack — Traditional-Chinese must render crisply
- Don't make coral a second CTA color — it is accent only
- Don't write cold institutional ed-tech copy — keep it human and inviting
- Don't bury or weaken the teal CTA in any layout
