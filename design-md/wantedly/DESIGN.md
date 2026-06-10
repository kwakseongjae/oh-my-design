---
id: wantedly
name: Wantedly
country: JP
category: consumer-tech
homepage: "https://www.wantedly.com"
primary_color: "#21bddb"
logo:
  type: simpleicons
  slug: wantedly
verified: "2026-06-10"
added: "2026-06-10"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-10"
  note: "primary = official blue400 #21bddb (Brand Guide v2.0) confirmed live on the signup CTA; text links use a darker accessible teal #006f8e; dark editorial surfaces (wantedly.design) run on official gray800 #292929."
  colors:
    primary: "#21bddb"
    link: "#006f8e"
    ink: "#24282a"
    gray800: "#292929"
    card-dark: "#424242"
    gray50: "#f5f5f5"
    banner: "#eeeeee"
    mid-gray: "#757575"
    canvas: "#ffffff"
    on-primary: "#ffffff"
    alert: "#cc0000"
  typography:
    family: { latin-display: "ITC Avant Garde Gothic → Poppins", latin-body: "Lato / Helvetica Neue", japanese: "Tazugane Gothic → Hiragino Kaku Gothic ProN → Noto Sans CJK" }
    display-hero: { size: 72, weight: 700, lineHeight: 1.33, use: "Hero headline over photography, Poppins Bold, white" }
    section:      { size: 40, weight: 700, lineHeight: 1.40, use: "Section headlines, Poppins Bold" }
    h1-quiet:     { size: 28, weight: 400, lineHeight: 1.50, use: "Page H1, regular weight (visual hierarchy carried by hero H2)" }
    button:       { size: 16, weight: 600, use: "Pill button labels, Poppins SemiBold" }
    button-sm:    { size: 14, weight: 600, use: "Small pill buttons / SSO buttons, Poppins SemiBold" }
    nav-label:    { size: 14, weight: 600, tracking: 0.2, use: "Uppercase nav labels on wantedly.design" }
    input:        { size: 16, weight: 400, use: "Form inputs, Lato" }
    body:         { size: 14, weight: 400, lineHeight: 1.57, use: "Standard reading text, Helvetica Neue / Hiragino Sans" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 40, section: 72 }
  rounded: { sm: 4, md: 8, lg: 16, xl: 24, full: 9999 }
  shadow:
    button: "rgba(0,0,0,0.1) 0px 2px 6px"
    card: "rgba(0,0,0,0.15) 0px 2px 8px"
  components:
    button-primary: { type: button, bg: "#21bddb", fg: "#ffffff", radius: "28px", height: "56px", font: "16px / 400 Poppins", use: "Signup / submit CTA — full pill on the brand blue" }
    button-secondary: { type: button, bg: "#ffffff", fg: "rgba(0,0,0,0.56)", radius: "48px", height: "52px", padding: "0 16px", font: "16px / 600 Poppins", shadow: "rgba(0,0,0,0.1) 0px 2px 6px", use: "White pill (今すぐシゴトを検索, SSO sign-in)" }
    input-text: { type: input, bg: "rgba(0,0,0,0.06)", fg: "rgba(0,0,0,0.84)", radius: "4px", height: "40px", padding: "6px 12px", font: "16px / 400 Lato", use: "Email signup field — tinted fill, no border" }
    card-elevated: { type: card, bg: "#ffffff", radius: "12px", shadow: "rgba(0,0,0,0.15) 0px 2px 8px", use: "Floating banner card" }
    panel-tint: { type: card, bg: "rgba(0,0,0,0.06)", radius: "16px", padding: "20px 24px", use: "App-download promo panel on white" }
    banner-recruiter: { type: card, bg: "#eeeeee", radius: "24px", padding: "40px 80px 32px", use: "Recruiter-facing wide banner" }
    card-dark: { type: card, bg: "#424242", fg: "#ffffff", radius: "4px", use: "Article card on the wantedly.design gray800 canvas" }
    link-teal: { type: tab, fg: "#006f8e", active: "text #24282a", font: "14px / 400 Poppins", use: "Text links and nav items — dark teal, darkens to ink on active" }
  components_harvested: true
---

# Design System Inspiration of Wantedly

## 1. Visual Theme & Atmosphere

Wantedly is Japan's "business SNS connected by empathy" (共感でつながるビジネスSNS), and its visual system is engineered to make job hunting feel like browsing a lifestyle magazine rather than scanning classified ads. The canvas is overwhelmingly white (`#ffffff`) with calm light-gray section bands (`#f5f5f5`), body text in a soft near-black (`#24282a`), and a single, disciplined splash of the corporate cyan (`#21bddb`) reserved for the one action that matters — joining. The official Brand Guide even codifies this restraint as a "Color Ratio": blue is the smallest slice of the palette, the neutrals do the talking. The result reads as airy, photographic, and optimistic — closer to a consumer social product than to HR software.

Typography is a deliberate East-West duet. Latin display type is geometric and round — ITC Avant Garde Gothic in the brand guide, shipped on the web as its documented fallback Poppins — while Japanese text runs in Tazugane Gothic with Hiragino Kaku Gothic fallbacks, and functional Latin body text sits in Lato/Helvetica Neue. Hero statements are enormous Poppins Bold at 72px set in white over full-bleed photography of real workplaces (「私を本気にさせる仕事はどこにある?」— "Where is the work that makes me serious?"), while UI labels drop to a tidy 14–16px SemiBold. The emotional weight lives in the photography and the oversized question; the chrome stays quiet.

Geometry is the system's most recognizable tell: almost everything you can press is a full pill. The cyan signup CTA rounds at 28px on a 56px height, secondary white buttons at 48px radius, and the codebase's pill token computes to an absurd 143986px — effectively infinite. Depth is shallow and friendly — white pills float on faint `rgba(0,0,0,0.1)` 2px shadows, cards on slightly stronger 8px blurs — and inputs skip borders entirely in favor of a translucent dark fill. Together with the dark editorial counterpart at wantedly.design (gray800 `#292929` canvas, `#424242` cards), the system spans two moods: a bright, hopeful consumer surface and a confident, gallery-dark brand stage.

**Key Characteristics:**
- One brand accent: corporate cyan blue400 (`#21bddb`), used live on exactly one element class — the primary CTA
- Pill-everything interaction chrome: 28px–48px radii on buttons, an effectively-infinite pill token for chips
- Poppins (ITC Avant Garde Gothic fallback) for display and labels; Lato/Helvetica Neue for body; Tazugane/Hiragino for Japanese
- 72px / 700 white hero type over full-bleed workplace photography
- Borderless inputs: translucent `rgba(0,0,0,0.06)` fills at a tight 4px radius
- Text links in a darker accessible teal (`#006f8e`) rather than the brand cyan
- Soft, low elevation — 2px-offset shadows only; separation mostly via `#f5f5f5` bands and tinted panels
- A second, official dark-editorial mode (gray800 `#292929` / `#424242`) on wantedly.design

## 2. Color Palette & Roles

### Primary
- **Blue400** (`#21bddb`): The corporate color (Pantone 311U), straight from the official Brand Guide and confirmed live as the signup CTA background. Used for the logo's dot, the primary action, and almost nothing else.
- **Link Teal** (`#006f8e`): The workhorse interactive color for text links and nav items — a darker, WCAG-friendlier sibling of the brand cyan, appearing on over a hundred nodes per page.
- **Ink** (`#24282a`): Default body text. A soft near-black with a hint of blue-green, never harsh pure black.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page canvas, button surfaces, text on cyan and dark grounds.
- **Gray50** (`#f5f5f5`): Official light surface for section bands (hero, profile sections).
- **Banner Gray** (`#eeeeee`): Slightly deeper tint for wide recruiter banners.
- **Mid Gray** (`#757575`): Image placeholder / decorative rectangle fill.
- **Gray800** (`#292929`): Official dark neutral — the entire canvas of wantedly.design and the dark logo background in the Brand Guide.
- **Card Dark** (`#424242`): Card surface on the gray800 canvas.

### Functional
- **Alert Red** (`#cc0000`): Error text and attention markers (required fields, closed postings).
- **Translucent ladder**: text steps down through `rgba(0,0,0,0.84)` → `0.74` → `0.56` → `0.4` → `0.24` rather than discrete gray hexes; fills use `rgba(0,0,0,0.03)` and `rgba(0,0,0,0.06)` for panels and inputs. On dark surfaces the same trick inverts to `rgba(255,255,255,0.7)`.

## 3. Typography Rules

### Font Family
- **Latin display**: ITC Avant Garde Gothic (Brand Guide), shipped on the web as **Poppins** — the guide's own first fallback.
- **Latin body**: **Lato** (Brand Guide body font, used live on inputs) and Helvetica Neue for running text.
- **Japanese**: たづがね角ゴシック (Tazugane Gothic) per the Brand Guide, falling back to Hiragino Kaku Gothic ProN and Noto Sans CJK; Meiryo trails the stack.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Poppins | 72px (4.50rem) | 700 | 1.33 (96px) | White over photography, multi-line questions |
| Section Heading | Poppins | 40px (2.50rem) | 700 | 1.40 (56px) | `rgba(0,0,0,0.84)` on light |
| Page H1 | Poppins | 28px (1.75rem) | 400 | 1.50 (42px) | Deliberately quiet — hero H2 outranks it visually |
| Button | Poppins | 16px (1.00rem) | 600 | tight | Pill labels |
| Button Small / Nav | Poppins | 14px (0.88rem) | 600 | tight | +0.2px tracking on wantedly.design nav |
| Input | Lato | 16px (1.00rem) | 400 | normal | Form fields |
| Body | Helvetica Neue / Hiragino | 14px (0.88rem) | 400 | 1.57 (22px) | Document default |

### Principles
- **Big question, small chrome**: the hero headline is a 72px Bold question addressed to the reader; everything else stays at 14–16px. The size gap is the hierarchy.
- **Weight split by script**: Latin display takes 700, UI labels take 600, Japanese body stays at 400 — bold hangs on Poppins, legibility on the JP stack.
- **Quiet H1**: the semantic H1 is a 28px regular-weight line; visual drama is delegated to H2s. SEO structure and visual structure are decoupled.
- **Opacity over hue**: secondary text is made by lowering alpha on black (0.84/0.74/0.56/0.4), not by picking new gray hexes.

## 4. Component Stylings

### Buttons

**Primary (Signup CTA)**
- Background: `#21bddb`
- Text: `#ffffff`
- Radius: 28px
- Height: 56px
- Font: 16px / 400 / Poppins
- Use: The single brand-blue action — account signup / submit

**Secondary (White Pill)**
- Background: `#ffffff`
- Text: `rgba(0,0,0,0.56)`
- Radius: 48px
- Padding: 0px 16px
- Height: 52px
- Font: 16px / 600 / Poppins
- Shadow: `rgba(0,0,0,0.02) 0px 0px 0px` (resting, near-flat)
- Use: 今すぐシゴトを検索, プロフィールを作成, お問い合わせ

**SSO Button**
- Background: `#ffffff`
- Text: `rgba(0,0,0,0.56)`
- Radius: 48px
- Padding: 0px 16px
- Height: 48px
- Font: 14px / 600 / Poppins
- Shadow: `rgba(0,0,0,0.1) 0px 2px 6px`
- Use: Facebook / Google / Apple sign-in row (Facebook label tinted in that service's blue)

**Ghost Pill**
- Background: transparent
- Text: `rgba(0,0,0,0.56)`
- Radius: 143986px (full pill token)
- Padding: 0px 20px
- Height: 36px
- Font: 14px / 600 / Poppins
- Disabled: text fades to `rgba(0,0,0,0.24)`
- Use: Footer feedback actions (返信が必要な方はこちら)

### Inputs & Forms

**Email Field**
- Background: `rgba(0,0,0,0.06)`
- Text: `rgba(0,0,0,0.84)`
- Border: none
- Radius: 4px
- Padding: 6px 12px
- Height: 40px
- Font: 16px / 400 / Lato
- Use: Signup email capture — tinted fill instead of a stroked box

### Cards & Containers

**Elevated Card**
- Background: `#ffffff`
- Radius: 12px
- Shadow: `rgba(0,0,0,0.15) 0px 2px 8px`
- Use: Fixed promotional banner card

**Tinted Panel**
- Background: `rgba(0,0,0,0.06)`
- Radius: 16px
- Padding: 20px 24px
- Use: App-download promos (気軽に会社訪問 / Wantedly People) with white 8px-radius QR tiles inside

**Recruiter Banner**
- Background: `#eeeeee`
- Radius: 24px
- Padding: 40px 80px 32px
- Use: Wide 採用担当者さまへ band before the footer

**Dark Article Card** (wantedly.design)
- Background: `#424242`
- Text: `#ffffff`
- Radius: 4px
- Use: Editorial article tiles on the gray800 canvas; secondary text `rgba(255,255,255,0.7)`

### Navigation & Links

**Text Link**
- Text: `#006f8e`
- Font: 14px / 400 / Poppins
- Use: Default link color across nav, lists, and footer — darker than the brand cyan for contrast

**Design-Site Nav Label** (wantedly.design)
- Text: `#ffffff`
- Font: 14px / 600 / Poppins
- Letter-spacing: 0.2px
- Use: ARTICLE / TEAM / PHILOSOPHY uppercase items; muted state `rgba(255,255,255,0.7)`

---
**Verified:** 2026-06-10
**Tier 1 sources:** https://www.wantedly.com/ (live computed-style inspect, logged-out home); https://wantedly.design/ (live inspect, official design-org site); WantedlyBrandGuide_v2_0.pdf v2.0 Jun 2021 (official brand colors/typography/logo rules); https://wantedlyinc.com/ja/brand_assets (official Brand Assets page hosting the guide)
**Tier 2 sources:** none available (getdesign.md/wantedly — "No designs found"; styles.refero.design ?q=wantedly — not listed, search attempted)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Inputs run tight (6px 12px padding); buttons breathe horizontally (0 16–20px on fixed pill heights).
- Panels use a 20px 24px interior; the recruiter banner steps up to 40px 80px 32px.
- Footer block padding reaches 72px top — section seams are generous even when component padding is compact.

### Grid & Container
- Full-bleed hero photography with the headline question overlaid; the signup form sits directly on the hero as a card-free cluster.
- Alternating white and `#f5f5f5` full-width bands segment the page instead of ruled dividers.
- App-promotion panels pair copy with QR tiles in a two-column arrangement; the recruiter banner is a single centered column.
- wantedly.design runs a dark masonry-like article grid of `#424242` tiles with uppercase Poppins navigation.

### Whitespace Philosophy
- **Photography carries the density**: pages alternate between image-rich hero/profile sections and very sparse text sections — whitespace is concentrated around CTAs so the pill buttons always float in calm space.
- **Tint, don't rule**: separation is done with surface tints (`#f5f5f5`, `rgba(0,0,0,0.03–0.06)`) and radius, almost never with border lines.

### Border Radius Scale
- 4px: inputs, dark editorial cards — the "tool" radius
- 8px: QR tiles, small media
- 12px: elevated banner cards
- 16px: tinted promo panels
- 24px: wide banners
- 28–48px → full pill: every button; the chip token computes to 143986px (effectively 9999/full)

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page, tinted panels, banners, inputs |
| Resting button | `rgba(0,0,0,0.02) 0px 0px 0px` | XL white pills at rest (near-flat) |
| Floating button | `rgba(0,0,0,0.1) 0px 2px 6px` | SSO buttons, hovering pills |
| Card | `rgba(0,0,0,0.15) 0px 2px 8px` | Fixed banner card |
| Scrim | `rgba(0,0,0,0.7)` overlay | Modal/photo overlays |

**Shadow Philosophy**: Elevation is minimal and neutral — small 2px offsets with soft 6–8px blurs, never colored, never layered. The system prefers tinted fills and full-bleed photography to create depth; shadows exist only so white pills remain legible on white-on-photo contexts. The dark editorial surface (wantedly.design) uses no shadows at all — `#424242` cards on `#292929` separate purely by value step.

## 7. Do's and Don'ts

### Do
- Reserve `#21bddb` for the primary CTA and brand marks — follow the official Color Ratio where cyan is the smallest slice
- Make every pressable element a pill (28px+ radius on buttons; full-round chips)
- Set Latin display in Poppins Bold (ITC Avant Garde Gothic's documented fallback) and Japanese in the Tazugane/Hiragino stack
- Use `#006f8e` for text links — the darker teal, not the brand cyan
- Build secondary text with black alpha steps (0.84 / 0.74 / 0.56 / 0.4) on light, white alpha (0.7) on dark
- Use borderless `rgba(0,0,0,0.06)` fills at 4px radius for inputs
- Let full-bleed workplace photography carry emotion; keep UI chrome white, soft, and quiet
- Use gray800 `#292929` with `#424242` cards for dark editorial/brand surfaces

### Don't
- Don't spread the cyan across badges, icons, or decorative elements — one accent, one job
- Don't draw borders on inputs or cards — tint and radius do the separating
- Don't use sharp rectangles for buttons — a square-cornered button is off-brand here
- Don't set Japanese body text bold; weight contrast belongs to Latin display type
- Don't recolor, outline, crop, deform, or drop-shadow the W logo, and never separate the mark from the logotype (Brand Guide misuse rules)
- Don't place the color logo on photography, gradients, or non-corporate-color fields — switch to the mono black/white mark
- Don't use heavy or colored shadows — elevation stays at 2px offsets with neutral alpha
- Don't add hype punctuation to CTAs — labels are plain verbs (今すぐシゴトを検索, プロフィールを作成)

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column; hero question shrinks but keeps 700 weight; app-download panels become primary CTAs |
| Tablet | 768–1024px | Two-column promo panels; pills keep fixed heights |
| Desktop | >1024px | Full-bleed photography, side-by-side hero copy + signup cluster |

### Touch Targets
- Pill buttons hold 48–56px heights — comfortably tappable at every breakpoint.
- The product is aggressively app-forward: QR tiles and store badges appear in white 8px-radius tiles inside tinted panels, repeated per section.

### Collapsing Strategy
- Hero: 72px display steps down on mobile while photography stays full-bleed.
- The signup module (email field + SSO pills) stacks vertically; SSO buttons keep 48px height.
- Recruiter banner's 40px 80px padding compresses horizontally first.

### Image Behavior
- Photography is the brand surface: real workplaces and teams, edge-to-edge, with white display type overlaid.
- Logo visibility rules from the Brand Guide apply on photos: black logo on light imagery, white on dark — never the color logo over a photograph.

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Blue400 (`#21bddb`)
- Text link: Dark Teal (`#006f8e`)
- Body text: Ink (`#24282a`)
- Background: White (`#ffffff`)
- Section band: Gray50 (`#f5f5f5`)
- Wide banner: Banner Gray (`#eeeeee`)
- Dark canvas: Gray800 (`#292929`)
- Dark card: Card Dark (`#424242`)
- Error: Alert Red (`#cc0000`)
- Secondary text: rgba(0,0,0,0.56); muted: rgba(0,0,0,0.4)

### Example Component Prompts
- "Create a hero: full-bleed workplace photo, headline in Poppins 72px/700 white with 96px line-height phrased as a question (私を本気にさせる仕事はどこにある?). Below, an email input (rgba(0,0,0,0.06) fill, 4px radius, 40px tall, Lato 16px) and a cyan pill submit button (#21bddb bg, white text, 28px radius, 56px tall)."
- "Design a white pill button: #ffffff background, rgba(0,0,0,0.56) text, 48px radius, 52px height, 0 16px padding, Poppins 16px/600, shadow rgba(0,0,0,0.1) 0px 2px 6px."
- "Build an app-download panel: rgba(0,0,0,0.06) background, 16px radius, 20px 24px padding; inside, white QR tiles at 8px radius and a bold Poppins heading; body text #24282a 14px on Helvetica/Hiragino."
- "Create a dark editorial grid like wantedly.design: #292929 canvas, #424242 article cards at 4px radius, white titles, rgba(255,255,255,0.7) metadata, uppercase Poppins 14px/600 nav with 0.2px letter-spacing."
- "Make a recruiter banner: #eeeeee background, 24px radius, 40px 80px 32px padding, Poppins 40px/700 heading at rgba(0,0,0,0.84), one white pill CTA."

### Iteration Guide
1. Blue `#21bddb` appears once per screen — on the action you want taken. If two elements are cyan, demote one.
2. Buttons are pills, inputs are 4px tinted boxes — keep those two geometries distinct.
3. Links are `#006f8e`, never the brand cyan; body ink is `#24282a`, never #000000.
4. Hierarchy = size contrast (72 → 40 → 16/14), not color contrast.
5. Use `#f5f5f5` bands to break up long pages; borders are a last resort.
6. For dark/brand surfaces, jump to the official gray800 `#292929` rather than inventing a navy.

---

## 10. Voice & Tone

Wantedly's voice is **empathetic, direct, and aspiration-first**. It speaks to the reader in first person about their own working life — hero copy literally voices the user's inner monologue (「私を本気にさせる仕事は どこにある?」) rather than advertising features. The register is warm but unsentimental: no salary talk, no recruiting jargon, no exclamation-mark hype; instead, plain verbs and an invitation to "go visit" (会社訪問) before deciding anything. The mission vocabulary — 「シゴトでココロオドル」(work that makes your heart dance) — deliberately uses katakana シゴト over the formal 仕事 to soften and personalize "work."

| Context | Tone |
|---|---|
| Hero headlines | First-person questions/declarations voicing the user's ambition. Big, sincere, no product name. |
| CTAs | Plain imperatives: 今すぐシゴトを検索, プロフィールを作成, 話を聞きに行く. No urgency theatrics. |
| Product descriptions | "What you can do" framing (気軽に会社訪問) — lowering the barrier is the message. |
| Recruiter-facing copy | Politely formal (採用担当者さまへ), stats-led (registered-user counts), still no hard sell. |
| Brand/design surfaces | English uppercase labels (ARTICLE / TEAM / PHILOSOPHY), confident and editorial. |
| Mission language | Idealistic and codified: 究極の適材適所 (ultimate right-person-right-place), ココロオドル. |

Voice samples:
- 「私を本気にさせる仕事は どこにある?」 — wantedly.com hero H2 (observed live 2026-06-10)
- 「さあ、このプロフィールで あなたのシゴトを面白く。」 — wantedly.com section headline (observed live 2026-06-10)
- 「究極の適材適所により、シゴトでココロオドルひとをふやす」 / "Create a world where work drives passion" — official mission, wantedlyinc.com
- 「共感でつながるビジネスSNS」 — site title tagline (observed live 2026-06-10)

## 11. Brand Narrative

Wantedly was founded in September 2010 by **Akiko Naka (仲暁子)** — a Kyoto University economics graduate who left Goldman Sachs equity sales, joined Facebook Japan's early team, and then set out to rebuild how people and companies meet ([Akiko Naka — Wikipedia (JA)](https://ja.wikipedia.org/wiki/仲暁子), [Crunchbase](https://www.crunchbase.com/person/akiko-naka)). The service launched publicly in February 2012 with a contrarian premise: job postings on Wantedly may not list salary or benefits. Instead, companies publish why they exist and what the team is like, and candidates click 話を聞きに行く ("go listen to their story") to casually visit — empathy first, conditions later. The company grew into Japan's leading professional social network with millions of users and tens of thousands of companies, and listed on the Tokyo Stock Exchange in 2017 (widely documented; not re-verified this pass).

The mission — 「究極の適材適所により、シゴトでココロオドルひとをふやす」("through the ultimate right-person-in-the-right-place, increase the number of people whose hearts dance at work") — is the design system's actual spec. The brand's visual restraint (one cyan, calm neutrals, soft pills) keeps the interface from competing with what Wantedly considers the real content: photographs of teams at work and the stories they tell. The Brand Guide's "Color Ratio" — cyan as the smallest slice — is the mission expressed as a palette rule: the platform recedes, passion takes the frame.

What Wantedly refuses: the transactional aesthetics of job boards — salary tables, urgency banners, aggressive reds (its only red, `#cc0000`, marks errors, not offers). What it embraces: a consumer-social grammar (profiles, feeds, "visits"), magazine-grade photography, geometric type with a friendly roundness, and an interface humble enough to let a stranger's workplace story make the sale.

## 12. Principles

1. **Empathy before conditions.** The founding product rule — sympathize with the why before discussing the what — translates to UI that leads with story and imagery, never compensation data. *UI implication:* cards and detail pages open with photography and mission copy; numbers and logistics sit below the fold.
2. **One color, one action.** The Brand Guide's Color Ratio makes cyan the rarest element on screen. *UI implication:* exactly one `#21bddb` element per view; all secondary actions are white or ghost pills.
3. **Round is the brand.** From the logo's dot to 48px-radius buttons, geometry stays circular and approachable. *UI implication:* never ship a sharp-cornered pressable; pills at 28px+ radius, panels at 16–24px.
4. **The user is the protagonist.** Hero copy is written in the user's first person, not the company's. *UI implication:* headline slots should hold aspirational questions addressed to "私" (me), with the product name absent.
5. **Lower the barrier everywhere.** 気軽に (casually) is a recurring brand word — visiting a company should feel as light as a coffee chat. *UI implication:* primary flows favor single-field forms, SSO pills, and QR-to-app handoffs over multi-step forms.

## 13. Personas

*Personas below are fictional archetypes informed by Wantedly's publicly stated user segments (young professionals, startup teams, recruiters); they do not refer to real people.*

**Haruka Sato, 26, Tokyo.** Third-year designer at a mid-size SIer, quietly browsing Wantedly on her commute. She isn't "job hunting" — she's collecting teams whose stories make her curious. Clicks 話を聞きに行く only when a company's photos look like a place she could belong. Would close the tab instantly if a posting led with salary bands and KPI language.

**Kenji Yamamoto, 34, Fukuoka.** Co-founder of a 12-person SaaS startup who writes the company's Wantedly stories himself. Treats the page like the company's magazine — he competes with bigger salaries by out-narrating them. Cares that the platform's chrome stays neutral so his team's photography does the persuading.

**Mina Okada, 29, Osaka.** Used Wantedly People to digitize a stack of business cards, then drifted into the feed. Halfway between "satisfied where I am" and "open to something interesting" — exactly the passive-talent middle the empathy-first model is built to move.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no matches/bookmarks)** | White canvas, one quiet line of ink (`#24282a`) copy, and a single white pill suggesting the next browse action. No illustrations shouting; the tone stays 気軽に — "go look around" rather than "nothing here". (illustrative — pattern inferred from system conventions) |
| **Empty (new profile)** | Treated as an invitation, echoing さあ、このプロフィールで あなたのシゴトを面白く。— a completion module with one cyan CTA. |
| **Loading (first paint)** | White page with gray50 (`#f5f5f5`) placeholder bands where photography will land; text regions as soft `rgba(0,0,0,0.06)` blocks. (illustrative) |
| **Loading (in-feed)** | Inline spinner in mid gray; existing cards stay put — the feed never blanks during fetch. (illustrative) |
| **Error (form validation)** | Field-level message in Alert Red (`#cc0000`) below the input; the tinted input fill does not turn red — only the message carries the alarm. |
| **Error (page/network)** | Plain-language apology in ink with a single retry pill; no red full-screen takeover. (illustrative) |
| **Success (application/visit sent)** | Confirmation in the brand's calm register — a check, a one-line 完了 message, and the next suggested story. Cyan reserved for the next action, not the celebration. (illustrative) |
| **Skeleton** | Gray50 blocks at final dimensions for media-heavy cards; photography placeholders use the `#757575` rectangle tone observed live. |
| **Disabled** | Label alpha drops to `rgba(0,0,0,0.24)` (observed live on the footer feedback button); surface stays put — disabled is a text-opacity state, not a gray repaint. |

## 15. Motion & Easing

*Motion tokens below are recommended values consistent with the observed system (soft, low-elevation, consumer-calm); Wantedly does not publish motion specs.* (illustrative)

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 150ms | Pill hover lift, link color shifts |
| `motion-standard` | 250ms | Card enter, panel expand, tab swaps |
| `motion-slow` | 400ms | Hero photo crossfades |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Default two-way transitions |
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.3, 1)` | Cards and sheets arriving |

**Motion rules.**

1. **Photography moves, chrome doesn't.** Hero/story imagery may crossfade slowly; buttons and nav never animate position — a pill may gain shadow on hover (`rgba(0,0,0,0.1) 0px 2px 6px`), nothing more.
2. **No bounce.** The brand is warm but grown-up; spring overshoot would cheapen the empathy register. Keep curves monotonic.
3. **Feed items fade up 8px** on entry at `motion-standard`, staggered ≤60ms — enough life to feel social, not enough to feel gamified.
4. **Reduced motion**: under `prefers-reduced-motion`, crossfades become cuts and entry fades become instant; the system loses nothing essential because meaning never lives in motion.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Direct verification (2026-06-10):
- https://www.wantedly.com/ — live inspect; hero copy 「私を本気にさせる仕事はどこにある?」,
  「私のチームは組織の壁を超えていく。」, 「さあ、このプロフィールであなたのシゴトを面白く。」,
  CTAs 今すぐシゴトを検索 / プロフィールを作成, title 「共感でつながるビジネスSNS」.
- https://wantedlyinc.com/ja — mission 「究極の適材適所により、シゴトでココロオドルひとをふやす」
  / "CREATE A WORLD WHERE WORK DRIVES PASSION"; products Visit / People / Engagement Suite / Hire.
- WantedlyBrandGuide_v2_0.pdf — colors, fonts, logo misuse rules, Color Ratio.
- Founder facts: ja.wikipedia.org/wiki/仲暁子, crunchbase.com/person/akiko-naka,
  celebratingwomenjapan.com/234-akiko-naka (Kyoto Univ. economics 2008, Goldman Sachs equity
  sales, Facebook Japan growth, founded Sept 2010, launched Feb 2012).

Widely documented, not re-verified this pass: TSE listing in 2017; "no salary in postings"
product rule; 話を聞きに行く as the signature CTA (it appears on project pages, which sit
behind the WAF's rate limiting — not captured in this session's live inspect).

Personas (§13) are fictional archetypes. States/Motion entries marked (illustrative) are
recommendations consistent with observed tokens, not published Wantedly specs.
-->
