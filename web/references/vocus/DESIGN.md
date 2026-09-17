---
id: vocus
name: Vocus
country: TW
category: productivity
homepage: "https://vocus.cc/"
primary_color: "#ff485a"
logo:
  type: favicon
  slug: "https://vocus.cc/static/img/icon-180x180.png"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "primary = live register/CTA coral (#ff485a); ink near-black #141413 for headings, #535150 for long-form body. Signature in-article link teal #00b3c6. Warm-grey neutral ladder #7a7574 → #a29c9b. Surfaces white #ffffff + warm greys #f6f6f6 / #f2f1f0. CJK reading type = Noto Sans TC at 18px / 1.9 lh / 0.9px tracking."
  colors:
    primary: "#ff485a"
    ink: "#141413"
    ink-pure: "#000000"
    body: "#535150"
    muted: "#7a7574"
    faint: "#a29c9b"
    accent-link: "#00b3c6"
    canvas: "#ffffff"
    surface: "#f6f6f6"
    surface-alt: "#f2f1f0"
    surface-faint: "#f7f7f7"
    hairline: "#ddd9d8"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Noto Sans TC" }
    spark-hero:   { size: 80, weight: 700, lineHeight: 1.36, use: "Brand spark hero 'Where the Sparks Begin', Noto Sans TC Bold" }
    section:      { size: 42, weight: 700, lineHeight: 1.45, use: "Landing section titles, Noto Sans TC Bold" }
    article-h1:   { size: 42, weight: 700, lineHeight: 1.50, tracking: 1, use: "Article title, Noto Sans TC Bold" }
    article-h2:   { size: 34, weight: 700, lineHeight: 1.50, tracking: 1.7, use: "Article H2, Noto Sans TC Bold" }
    feature-h3:   { size: 28, weight: 700, lineHeight: 1.43, use: "Feature-card heads, Noto Sans TC Bold" }
    article-h3:   { size: 24, weight: 700, lineHeight: 1.50, tracking: 1.2, use: "Article H3, Noto Sans TC Bold" }
    reading-body: { size: 18, weight: 400, lineHeight: 1.90, tracking: 0.9, use: "Long-form article body, Noto Sans TC — generous CJK reading rhythm" }
    nav:          { size: 16, weight: 400, lineHeight: 1.50, use: "Article-shell nav items, Noto Sans TC" }
    ui:           { size: 14, weight: 400, lineHeight: 1.50, use: "Default UI / chrome text, Noto Sans TC" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48 }
  rounded: { sm: 6, md: 8, lg: 16, pill: 14, full: 9999 }
  shadow:
    none: "none"
    scrim: "rgba(0,0,0,0.5)"
  components:
    button-primary: { type: button, bg: "#ff485a", fg: "#ffffff", radius: "8px", padding: "8px 12px", height: "36px", font: "14px / 500 Noto Sans TC", use: "Register/login CTA — the single coral action" }
    button-outline: { type: button, bg: "#ffffff", fg: "#141413", border: "4px solid #141413", radius: "16px", padding: "15px 24px", height: "60px", font: "18px / 500 Noto Sans TC", use: "Hero 'sign up now' bold-outline CTA" }
    button-menu:    { type: button, bg: "#ffffff", fg: "#141413", radius: "8px", padding: "10px 12px", height: "36px", font: "14px / 500 Noto Sans TC", use: "Nav dropdown trigger" }
    feature-tab:    { type: tab, fg: "#141413", radius: "6px", font: "12.25px / 500 Noto Sans TC", active: "text #141413 + 2px bottom border #ff485a", use: "Feature-card category tabs" }
    partner-badge:  { type: badge, bg: "#f6f6f6", fg: "#7a7574", radius: "14px", padding: "2px 8px", font: "14px / 400 Noto Sans TC", use: "Creator partner / status pill (格命夥伴)" }
    tag-link:       { type: badge, fg: "#a29c9b", font: "16px / 400 Noto Sans TC", use: "Hashtag topic tag (#投資策略)" }
    article-card:   { type: card, bg: "#ffffff", fg: "#141413", radius: "16px", use: "Article / feature card on warm-grey surface, 1px #ddd9d8 hairline" }
    nav-link:       { type: listItem, fg: "#535150", font: "16px / 400 Noto Sans TC", use: "Article-shell nav item (首頁 / 方格誌 / 格友大廳)" }
  components_harvested: true
---

# Design System Inspiration of Vocus

## 1. Visual Theme & Atmosphere

Vocus (方格子) is Taiwan's leading independent creator and paid-content platform — a local equivalent of Medium or Substack, built for Traditional-Chinese long-form writing. Its design reads as **warm editorial minimalism**: a pure white canvas (`#ffffff`) layered with soft warm-grey surfaces (`#f6f6f6`, `#f2f1f0`) that segment content without ever raising a visible edge. Text sits in a near-black warm ink (`#141413`) — never a cold pure black for chrome — which gives the page a calm, paper-like weight. The single saturated brand color is a confident coral-red (`#ff485a`), reserved almost exclusively for the register/login call-to-action and the brand logo field, so the eye learns to read that one hue as "the action."

The brand voice is set by the spark motif. The hero of the creator landing declares **"Where the Sparks Begin"** at 80px / weight 700, paired with the Chinese mission line *讓創作，成為一切的起點* ("let creation be the origin of everything"). This is the platform's promise: every piece of writing is a spark, and Vocus is where it ignites. The mark itself — a white speech-bubble/"square" (方格) glyph on the coral field — encodes the same idea: a small frame where a thought becomes public.

What truly distinguishes Vocus is its **long-form reading typography**. On a live article the body runs in **Noto Sans TC at 18px with a generous 1.9 line-height and 0.9px letter-spacing** — an unusually airy rhythm tuned for dense Traditional-Chinese characters, where vertical breathing room and slight tracking make a wall of hanzi calm to read. Headings step down cleanly (article H1 42px → H2 34px → H3 24px, all weight 700 with slight positive tracking), and in-article links carry a quiet signature teal (`#00b3c6`) that is the one accent allowed to interrupt the warm-grey reading field. Depth is essentially flat: separation comes from warm-grey surfaces and thin `#ddd9d8` hairlines rather than shadows, with the only elevation being a `rgba(0,0,0,0.5)` scrim behind overlays.

**Key Characteristics:**
- Coral-red (`#ff485a`) reserved for the primary register/login CTA and the brand logo field — the single "action" color
- Near-black warm ink (`#141413`) for headings/chrome instead of pure black; pure black (`#000000`) only on article H1
- Warm-grey neutral ladder: body `#535150` → muted `#7a7574` → faint `#a29c9b`
- Long-form CJK reading type: Noto Sans TC 18px / 1.9 line-height / 0.9px tracking — airy, calm, hanzi-tuned
- Signature in-article link teal (`#00b3c6`) — the one accent inside the reading field
- Flat depth: warm-grey surfaces (`#f6f6f6`, `#f2f1f0`) + `#ddd9d8` hairlines, no drop shadows; `rgba(0,0,0,0.5)` overlay scrim only
- The spark motif — "Where the Sparks Begin" / 讓創作，成為一切的起點 — as the brand's core narrative device
- Conservative geometry: 6–8px on chrome buttons, 14px pill chips, 16px cards, a bold 4px-outline hero CTA at 16px radius

## 2. Color Palette & Roles

### Primary
- **Vocus Coral** (`#ff485a`): Primary brand color and CTA background. The saturated coral-red on the register/login button and the logo field — the system's single "action" color.
- **Ink Warm-Black** (`#141413`): Primary heading and chrome text color. A near-black with a warm undertone, used instead of cold pure black for nav, hero, section titles, and article H2/H3.
- **Pure Black** (`#000000`): Reserved for maximum-contrast article H1 titles and the document default text color.

### Text Hierarchy
- **Body Slate** (`#535150`): Long-form article body copy — the primary reading color, warmer and softer than the heading ink.
- **Muted Warm-Grey** (`#7a7574`): Tertiary labels, partner/status badge text, metadata.
- **Faint Warm-Grey** (`#a29c9b`): Lowest-emphasis text — nav links, hashtag tags, captions, placeholders.

### Accent
- **Link Teal** (`#00b3c6`): The signature in-article link / inline accent color. The one hue allowed to interrupt the warm-grey reading field; never used for primary buttons.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, card surfaces, text on coral.
- **Surface Grey** (`#f6f6f6`): Warm-grey tinted surface for cards, badges, and segmented sections.
- **Surface Alt** (`#f2f1f0`): A slightly warmer secondary surface for alternating reading blocks.
- **Surface Faint** (`#f7f7f7`): The lightest warm-grey tint for subtle zone separation.
- **Hairline** (`#ddd9d8`): Thin borders, dividers, and card outlines — the primary separation device in this shadow-free system.

### Overlay
- **Scrim** (`rgba(0,0,0,0.5)`): Translucent backdrop behind modals/overlays — the only "elevation" the flat system reaches for.

## 3. Typography Rules

### Font Family
- **Primary**: `Noto Sans TC` — the full Traditional-Chinese sans stack carries every surface: hero, headings, article body, and chrome. The live stack falls back through `"Microsoft JhengHei"`, `"PingFang TC"`, `"Heiti TC"`, `-apple-system`, and `Helvetica` for cross-platform CJK rendering.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Spark Hero | Noto Sans TC | 80px (5.00rem) | 700 | 1.36 (109px) | normal | "Where the Sparks Begin" brand hero |
| Section / Landing | Noto Sans TC | 42px (2.63rem) | 700 | 1.45 | normal | Creator-landing section titles |
| Article H1 | Noto Sans TC | 42px (2.63rem) | 700 | 1.50 (63px) | 1px | Article title, color `#000000` |
| Article H2 | Noto Sans TC | 34px (2.13rem) | 700 | 1.50 (51px) | 1.7px | In-article section head |
| Feature H3 | Noto Sans TC | 28px (1.75rem) | 700 | 1.43 (40px) | normal | Landing feature-card heads |
| Article H3 | Noto Sans TC | 24px (1.50rem) | 700 | 1.50 (36px) | 1.2px | In-article sub-head |
| Reading Body | Noto Sans TC | 18px (1.13rem) | 400 | 1.90 (34.2px) | 0.9px | Long-form article body, `#535150` |
| Nav (article shell) | Noto Sans TC | 16px (1.00rem) | 400 | 1.50 | normal | Article-page nav items, `#535150` |
| UI / Chrome | Noto Sans TC | 14px (0.88rem) | 400 | 1.50 | normal | Default chrome text, buttons |

### Principles
- **Airy CJK reading rhythm**: the 18px body at 1.9 line-height and 0.9px tracking is the system's defining typographic choice — Traditional-Chinese long-form needs vertical breathing room and slight character spacing to stay calm and legible.
- **One family, two jobs**: Noto Sans TC at weight 700 persuades (hero, headings); at weight 400 it informs (body, nav, chrome). The weight contrast is the primary hierarchy signal.
- **Positive tracking on display, generous on body**: article headings carry slight positive tracking (1–1.7px) while the body holds 0.9px — the opposite of Latin display convention, tuned to hanzi.
- **Warm ink over pure black for chrome**: headings and nav use `#141413`; only the article H1 reaches for pure `#000000`.

## 4. Component Stylings

### Buttons

**Register CTA (Primary)**
- Background: `#ff485a`
- Text: `#ffffff`
- Radius: 8px
- Padding: 8px 12px
- Font: 14px / 500 / Noto Sans TC
- Height: 36px
- Use: Header 註冊/登入 register-login call-to-action — the system's single coral primary action

**Hero Outline CTA**
- Background: `#ffffff`
- Text: `#141413`
- Border: 4px solid `#141413`
- Radius: 16px
- Padding: 15px 24px
- Font: 18px / 500 / Noto Sans TC
- Height: 60px
- Use: Creator-landing 立即註冊 ("sign up now") bold-outline call-to-action

**Nav Menu Trigger**
- Background: `#ffffff`
- Text: `#141413`
- Radius: 8px
- Padding: 10px 12px
- Font: 14px / 500 / Noto Sans TC
- Height: 36px
- Use: Top-nav dropdown trigger (創作者資源, 商品)

### Inputs & Forms
- Background: `#ffffff`
- Border: 1px solid `#ddd9d8`
- Radius: 8px
- Text: 14px Noto Sans TC `#141413`
- Placeholder: `#a29c9b`
- Use: Default text input / search field on the warm-grey system

### Cards & Containers

**Article / Feature Card**
- Background: `#ffffff`
- Text: `#141413`
- Border: 1px solid `#ddd9d8`
- Radius: 16px
- Use: Article and feature cards on the warm-grey surface — separation by hairline, no shadow

**Tinted Surface Block**
- Background: `#f6f6f6`
- Text: `#141413`
- Radius: 16px
- Use: Warm-grey content block for alternating reading sections

### Badges

**Partner / Status Pill**
- Background: `#f6f6f6`
- Text: `#7a7574`
- Radius: 14px
- Padding: 2px 8px
- Font: 14px / 400 / Noto Sans TC
- Height: 24px
- Use: Creator partner / status pill (格命夥伴)

**Hashtag Tag**
- Text: `#a29c9b`
- Font: 16px / 400 / Noto Sans TC
- Use: In-article topic tag (#投資策略, #投資)

### Tabs

**Feature Category Tab**
- Text: `#141413`
- Radius: 6px
- Font: 12.25px / 500 / Noto Sans TC
- Active: `#141413` text + 2px bottom border `#ff485a`
- Use: Feature-card category tabs (內容創作與數據, 成長與變現工具)

### Navigation
- Background: `#ffffff`
- Text: `#535150` (article shell), `#a29c9b` (marketing shell)
- Font: 16px / 400 Noto Sans TC (article), 14px (marketing)
- Active: warm-ink `#141413`
- Use: Top horizontal nav (首頁, 方格誌, 格友大廳, 主題活動, vocus for Business)

### In-Article Links
- Text: `#00b3c6`
- Font: 18px / 400 / Noto Sans TC
- Use: Inline links inside long-form article body — the one accent inside the reading field

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 brand-owned surfaces)
**Tier 1 sources:** https://vocus.cc/ (home / creator landing — live computed style); https://vocus.cc/article/6a0fe680fd897800016b985e (live article reading surface — long-form CJK type, in-article links, tag chips, partner badge)
**Tier 2 sources:** getdesign.md/vocus — "No designs found for 'vocus'" (TW brand not covered); styles.refero.design/?q=vocus — no vocus-specific style card returned
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px
- Notable: chrome buttons use a tight 8–12px horizontal padding; the hero outline CTA jumps to 15px / 24px for a generous, deliberate tap target

### Grid & Container
- Article reading column is centered and narrow, optimized for a comfortable hanzi measure with the 18px / 1.9 body
- Creator landing alternates white (`#ffffff`) and warm-grey (`#f6f6f6`, `#f2f1f0`) full-width bands
- Feature sections use category-tabbed cards grouping creator tools (內容創作與數據, 成長與變現工具, 粉絲與社群管理)
- Cards use 16px radius and a single `#ddd9d8` hairline rather than elevation

### Whitespace Philosophy
- **Breathing room for reading**: the long-form body's 1.9 line-height makes vertical rhythm the dominant spatial gesture — the page is built to be read slowly.
- **Flat segmentation**: sections separate by warm-grey background shift and hairlines, not shadow or heavy borders.
- **One loud color in a quiet field**: coral `#ff485a` appears sparingly against the warm-grey ground, so each CTA reads as intentional.

### Border Radius Scale
- Small (6px): feature tabs, inner controls
- Standard (8px): chrome buttons, inputs
- Pill (14px): status / partner badges
- Large (16px): cards, the hero outline CTA
- Full (9999px): occasional circular avatars

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, article body, most surfaces |
| Tint (Level 1) | `#f6f6f6` / `#f2f1f0` background shift | Card / section separation without elevation |
| Hairline (Level 2) | `1px solid #ddd9d8` border | Card outlines, dividers |
| Scrim (Level 3) | `rgba(0,0,0,0.5)` backdrop | Modal / overlay dimming — the only "elevation" |

**Shadow Philosophy**: Vocus is a near-shadowless system. Live inspection found `box-shadow: none` across the hero, nav, headings, cards, and chips on both surfaces. Depth and grouping are communicated through warm-grey tinted surfaces (`#f6f6f6`, `#f2f1f0`) and thin `#ddd9d8` hairlines. This is a deliberate editorial-flat choice — it keeps the reading experience calm and paper-like, avoiding the heavy card-stack look of feed apps. The only elevation cue is the `rgba(0,0,0,0.5)` scrim behind overlays; when emphasis is needed in-flow, the system reaches for the coral (`#ff485a`) or the warm ink (`#141413`), never a shadow.

## 7. Do's and Don'ts

### Do
- Reserve coral (`#ff485a`) for the primary register/login CTA and the brand logo field — keep it the single "action" color
- Use near-black warm ink (`#141413`) for headings and chrome instead of pure black
- Set long-form body in Noto Sans TC at 18px with a generous 1.9 line-height and 0.9px tracking — the calm CJK reading rhythm is the system
- Use the warm-grey ladder (`#535150` body → `#7a7574` muted → `#a29c9b` faint) for text hierarchy
- Separate sections with warm-grey surfaces (`#f6f6f6`, `#f2f1f0`) and `#ddd9d8` hairlines, not shadows
- Use the signature teal (`#00b3c6`) only for inline article links — the one accent inside the reading field
- Use weight 700 for every heading and weight 400 for body and chrome — the weight contrast is the hierarchy
- Keep geometry conservative: 6–8px on chrome buttons, 14px badge pills, 16px cards

### Don't
- Spread coral (`#ff485a`) across many elements — it dilutes the single-action signal
- Use pure black (`#000000`) for chrome or body — reserve it for article H1; chrome is `#141413`
- Set long-form body at a tight line-height — the 1.9 leading and 0.9px tracking are the brand's reading promise
- Use drop shadows for elevation — Vocus is a flat, hairline-and-tint system
- Use the teal (`#00b3c6`) for buttons — it is an inline-link accent only
- Set headings in a light weight — display is always weight 700
- Use cold institutional blues or a second saturated accent — coral is the only loud hue
- Crowd the reading column — the narrow centered measure and airy leading are deliberate

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero compresses, feature tabs scroll, reading column full-width with side padding |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full layout, centered narrow reading column, multi-column feature bands |

### Touch Targets
- Register CTA at 36px height, 8–12px padding — a compact but tappable chrome target
- Hero outline CTA at 60px height with 15px / 24px padding — an unmistakable primary target
- Nav and feature tabs spaced for touch within the article/marketing shells

### Collapsing Strategy
- Spark hero: 80px headline scales down on mobile, weight 700 maintained
- Feature card tabs: horizontal scroll on narrow viewports
- Reading column: narrow centered measure → full-width with comfortable side padding, 18px / 1.9 body preserved
- Warm-grey / white alternating bands maintain full-width treatment

### Image Behavior
- Article cover images and illustrations carry no shadow at any size, consistent with the flat system
- Cards maintain 16px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / logo field: Vocus Coral (`#ff485a`)
- Heading / chrome text: Ink Warm-Black (`#141413`)
- Article H1 / default text: Pure Black (`#000000`)
- Long-form body: Body Slate (`#535150`)
- Muted text / badges: Muted Warm-Grey (`#7a7574`)
- Faint text / tags / nav: Faint Warm-Grey (`#a29c9b`)
- Inline article link: Link Teal (`#00b3c6`)
- Background: Pure White (`#ffffff`)
- Tinted surface: Surface Grey (`#f6f6f6`) / Surface Alt (`#f2f1f0`)
- Hairline: `#ddd9d8`

### Example Component Prompts
- "Create a creator-landing hero on white background. Spark headline 'Where the Sparks Begin' at 80px Noto Sans TC weight 700, color #141413. Below it a bold outline CTA: white background, 4px solid #141413 border, 16px radius, 15px 24px padding, 18px weight 500, #141413 text — '立即註冊'. A compact coral register button in the nav: #ff485a background, white text, 8px radius, 14px."
- "Design a long-form article page: white background. Article H1 at 42px Noto Sans TC weight 700, line-height 63px, 1px tracking, color #000000. Body at 18px weight 400, line-height 34.2px (1.9), 0.9px letter-spacing, color #535150. Inline links in #00b3c6. Hashtag tags at 16px #a29c9b."
- "Build a feature card: white background, 1px solid #ddd9d8 hairline, 16px radius, no shadow. Category tab row: 12.25px Noto Sans TC weight 500, #141413 text, active tab gets a 2px #ff485a bottom border, 6px radius."
- "Create a partner badge: #f6f6f6 background, #7a7574 text, 14px radius, 2px 8px padding, 14px Noto Sans TC. Use for status pills like 格命夥伴."

### Iteration Guide
1. Coral (`#ff485a`) is the single action color — don't spread it
2. Headings weight 700 in Noto Sans TC; body weight 400 at 18px / 1.9 line-height / 0.9px tracking
3. No shadows — separate with `#f6f6f6` / `#f2f1f0` tint and `#ddd9d8` hairlines
4. Warm ink `#141413` for chrome, pure black `#000000` only for article H1
5. Teal `#00b3c6` is an inline-link accent, never a button
6. Conservative geometry — 6–8px buttons, 14px badges, 16px cards
7. The narrow centered reading column with airy leading is the brand's reading promise

---

## 10. Voice & Tone

Vocus's voice is **warm, creator-first, and encouraging** — a platform that frames writing as a spark worth nurturing rather than content to be optimized. The English brand line *"Where the Sparks Begin"* and its Chinese partner *讓創作，成為一切的起點* ("let creation be the origin of everything") set the register: aspirational, generous, never growth-hack jargon. Copy speaks to creators as partners (格友, 格命夥伴 — "square friends", "creation partners"), and CTAs are direct invitations (立即註冊, 註冊/登入), never urgency-driven.

| Context | Tone |
|---|---|
| Brand hero | Aspirational, spark-framed. "Where the Sparks Begin" / 讓創作，成為一切的起點. Generous, not hype. |
| Feature descriptions | Creator-benefit-first. "內容與粉絲，都由自己掌握" — you own your content and your fans. |
| CTAs | Direct, low-pressure invitations. "立即註冊", "註冊/登入". |
| Community labels | Warm, in-group. 格友 ("square friends"), 格友大廳 ("members' lounge"), 格命夥伴. |
| Article chrome | Quiet and out of the way — the writing is the subject, the UI recedes. |

**Voice samples (verbatim from live surfaces):**
- "Where the Sparks Begin" — brand hero, English mission line. *(verified live 2026-06-17, /become_creator)*
- "讓創作，成為一切的起點" — section H2, Chinese mission line ("let creation be the origin of everything"). *(verified live 2026-06-17, /become_creator)*
- "在 vocus 建立你的真實互動社群" — feature H2 ("build your genuine, interactive community on vocus"). *(verified live 2026-06-17, /become_creator)*

**Forbidden register**: growth-hack urgency, follower-count vanity framing, undefined platform jargon, exclamation-heavy hype. Vocus addresses creators as owners of their work, not as metrics.

## 11. Brand Narrative

Vocus (方格子) is Taiwan's leading independent creator and paid-content platform — a Traditional-Chinese-first home for long-form writing, often described as a local Medium or Substack. The name 方格子 literally means "little squares" (as in grid-paper squares), and the brand mark — a white speech-bubble/grid glyph on a coral field — turns that into a metaphor: each square is a small frame where a private thought becomes public writing.

The platform's promise is captured in its bilingual mission: *"Where the Sparks Begin" / 讓創作，成為一切的起點* — every piece is a spark, and Vocus is the place it ignites. Around that promise it has built the full creator toolkit visible on its landing: content creation and analytics (內容創作與數據), growth and monetization tools (成長與變現工具), fan and community management (粉絲與社群管理), and multi-author collaboration (多人共創經營). The repeated framing — "內容與粉絲，都由自己掌握" (you own both your content and your fans) — positions Vocus as the creator-sovereignty alternative to algorithm-driven social feeds.

What Vocus refuses, visible in its design: the dense, shadow-stacked, metric-forward chrome of social feeds, and the cold institutional palette of corporate publishing. What it embraces: a warm-grey editorial canvas, a single coral action color, an airy Traditional-Chinese reading rhythm that respects long-form attention, and community language (格友, 格命夥伴) that treats writers as partners rather than users.

## 12. Principles

1. **The writing is the subject.** Chrome recedes so the article can be read. *UI implication:* keep the reading column narrow and centered, the nav quiet (`#535150`/`#a29c9b`), and the body airy (18px / 1.9 / 0.9px).
2. **One spark, one color.** Coral (`#ff485a`) means "act." *UI implication:* reserve the saturated coral for the register/login CTA and the logo field; let it stay rare against the warm-grey ground.
3. **Creators own their work.** The platform is a partner, not a gatekeeper. *UI implication:* use in-group, partner language (格友, 格命夥伴) and creator-benefit-first copy; never frame around follower-count vanity.
4. **Calm for long-form.** Traditional-Chinese reading needs room. *UI implication:* the generous 1.9 line-height and 0.9px tracking are non-negotiable; never tighten the reading body to fit more above the fold.
5. **Flat and warm.** Editorial calm beats decorative depth. *UI implication:* separate with warm-grey tint and `#ddd9d8` hairlines, not shadows; reach for color or warm ink for emphasis.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Vocus user segments (Traditional-Chinese long-form writers, paid-newsletter creators, Taiwanese readers of independent commentary), not individual people.*

**林雅婷, 33, 台北.** A finance commentator who publishes a paid investment-strategy column. Values that Vocus lets her own her subscriber relationship and analytics rather than renting an audience from a social feed. Chose Vocus because the reading layout makes her dense, chart-heavy posts calm to read.

**陳冠宇, 41, 台中.** A long-form essayist writing on culture and politics. Reads as much as he writes; appreciates the airy 18px / 1.9 body type that makes hour-long reading sessions comfortable. Distrusts platforms that bury the text under engagement chrome.

**Sarah Lin, 27, 高雄.** A bilingual lifestyle creator just starting out. Used the creator-landing tools (內容創作與數據, 成長與變現工具) to set up her first paid space. Liked that the onboarding felt like an invitation ("立即註冊") rather than a growth funnel, and that "Where the Sparks Begin" framed her first post as a beginning.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no articles yet)** | White canvas. Single Ink (`#141413`) line at reading size explaining nothing's published yet, with one coral CTA to start writing. No illustration clutter. |
| **Empty (saved / following list)** | Faint Warm-Grey (`#a29c9b`) single line: nothing here yet, plus a path back to discovery. Calm, honest. |
| **Loading (feed / article fetch)** | Skeleton blocks on `#f6f6f6` tinted surface at final card dimensions, 16px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (in-place refresh)** | Subtle inline progress; previous content stays visible with previous values. |
| **Error (load failed)** | Inline message in Ink (`#141413`) with a plain-language explanation and a retry. No generic error string alone — states what to do next. |
| **Error (form validation)** | Field-level message below the input in a warm error tone; describes what's valid, not just "必填". |
| **Success (published / saved)** | Brief inline confirmation in a calm tone; the published article links immediately below. No celebratory emoji. |
| **Skeleton** | `#f6f6f6` blocks at final dimensions, 16px radius, flat pulse. |
| **Disabled** | Faint Warm-Grey (`#a29c9b`) text on reduced-opacity surface; coral actions fade rather than turn grey to preserve the brand read. |
| **Overlay / Modal** | `rgba(0,0,0,0.5)` scrim behind a white panel — the only elevation cue the flat system uses. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, tab/chip press, focus |
| `motion-standard` | 200ms | Card/section reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sheets, cards, dropdowns |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is quiet and editorial — consistent with the calm, flat reading aesthetic. The brand "spark" motif is the one place a touch of animation is appropriate (a subtle ignite/fade on the hero), but the reading experience stays still so the text never moves under the eye. Feature tabs and cards respond to interaction with a subtle opacity/position shift; overlays fade the `rgba(0,0,0,0.5)` scrim in at `motion-standard / ease-enter`. No bounce or spring — a long-form reading platform signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the spark animation freezes; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via playwright getComputedStyle on two brand-owned surfaces:
- https://vocus.cc/ (resolves to /become_creator) — hero "Where the Sparks Begin" 80px/700/#141413;
  section H2 "讓創作，成為一切的起點" 42px/700; feature H2 "在 vocus 建立你的真實互動社群";
  register CTA #ff485a / white / 8px radius; hero outline CTA 4px solid #141413 / 16px radius.
- https://vocus.cc/article/6a0fe680fd897800016b985e — article body 18px/400/1.9 lh/0.9px tracking/#535150;
  in-article link teal #00b3c6; partner badge #f6f6f6/#7a7574/14px; tag #a29c9b; H1 42px/#000000.

Token-level claims (§1-9) are sourced from this live inspection (see .verification.md ## Proof).

Voice samples (§10) are verbatim from the live surfaces (brand hero English line, section H2, feature H2).

Brand narrative (§11): Vocus (方格子) is Taiwan's leading independent creator / paid-content platform
(a local Medium/Substack for Traditional-Chinese long-form writing). The bilingual mission
"Where the Sparks Begin" / "讓創作，成為一切的起點" and the creator-tool framing (內容創作與數據,
成長與變現工具, 粉絲與社群管理, 多人共創經營) are verbatim from the live /become_creator landing.
The name etymology (方格子 = "little squares" / grid-paper) and Medium/Substack comparison are
widely documented public descriptions, not a directly quoted Vocus statement.

Personas (§13) are fictional archetypes informed by publicly observable Vocus user segments
(Traditional-Chinese long-form writers, paid-newsletter creators, Taiwanese readers). Names are
illustrative; they do not refer to real people.

Interpretive claims (e.g., "the writing is the subject", "one spark, one color", "creator-sovereignty
alternative to algorithm-driven feeds") are editorial readings connecting Vocus's observed design and
copy to its positioning, not directly sourced Vocus statements.
-->
