---
id: channeltalk
name: Channel Talk
country: KR
category: saas
homepage: "https://channel.io"
primary_color: "#4f46e5"
logo:
  type: github
  slug: channel-io
verified: "2026-05-14"
omd: "0.1"
ds:
  name: Bezier
  url: "https://github.com/channel-io/bezier-react"
  type: system
  description: Channel Talk's open-source design system — Bezier (MIT). Inter + Noto KR/JP type stacks, token/component/icon packages, marketing-vs-product type cliff documented.
  og_image: "https://opengraph.githubassets.com/d5fd6836ec938de2c8399cf28b2ceabc49104fbbf86e937f9e89983f1b50d638/channel-io/bezier-react"
tokens:
  source: prose-derived
  extracted: "2026-06-08"
  note: "primary = live product-chrome accent Cobalt 400 (#329BE7); frontmatter primary_color (#4f46e5) is the registry indigo and is NOT a Bezier token — drift documented"
  colors:
    primary: "#329BE7"
    primary-hover: "#327AB8"
    brand: "#329BE7"
    canvas: "#FFFFFF"
    surface: "#FCFCFC"
    canvas-tint: "#F7F7F8"
    hairline: "#EFEFF0"
    foreground: "#313234"
    body: "#464748"
    muted: "#A7A7AA"
    on-primary: "#FFFFFF"
    cta-dark: "#242428"
    accent-light: "#47C8FF"
    info: "#5E56F0"
    success: "#31A552"
    caution: "#EDBC40"
    error: "#E94E58"
  typography:
    family: { sans: "Inter, NotoSansKR, NotoSansJP", mono: "ui-monospace, Cascadia Code, Source Code Pro, Menlo" }
    size-16: { size: 16, weight: 400, lineHeight: 1.5, tracking: -0.1, use: "Standard body text (product chrome)" }
    size-15: { size: 15, weight: 400, lineHeight: 1.33, tracking: -0.1, use: "Nav links, dense body" }
    size-18: { size: 18, weight: 400, lineHeight: 1.33, use: "Subhead / product CTA label" }
    size-22: { size: 22, weight: 700, lineHeight: 1.27, tracking: -0.4, use: "Section subhead" }
    size-24: { size: 24, weight: 700, lineHeight: 1.33, tracking: -0.4, use: "Card heading" }
    size-36: { size: 36, weight: 700, lineHeight: 1.22, tracking: -0.4, use: "Product-chrome max heading" }
    hero-h1: { size: 64, weight: 700, lineHeight: 1.375, tracking: -1.5, use: "Marketing hero (brand-layer only)" }
    section-h2-xl: { size: 54, weight: 600, lineHeight: 1.33, tracking: -1.5, use: "Marketing section h2 on dark" }
    section-h2-lg: { size: 48, weight: 600, lineHeight: 1.33, tracking: -1, use: "Marketing section h2" }
  spacing: { xs: 4, sm: 8, md: 16, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 8, chip: 8, product: 8, cta: 18, card: 20, band: 32, ladder-max: 44, full: 9999 }
  shadow:
    flat: "none (live homepage leans flat — depth via surface tint + border alpha)"
    popover: "subtle drop-shadow + rgba(0,0,0,0.05) border (Level 3)"
    modal: "full shadow + rgba(0,0,0,0.3) scrim (Level 4)"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#242428", fg: "#FFFFFF", radius: "18px", padding: "8px 24px", height: "64px", font: "18px / 600", use: "Marketing hero CTA — top-of-funnel Sign Up only" }
    button-secondary: { type: button, bg: "rgba(0,0,0,0.05)", fg: "rgba(0,0,0,0.85)", radius: "16px", padding: "8px 20px", height: "54px", font: "20px / 700", use: "Section View Details pivots, not primary" }
    button-cobalt: { type: button, bg: "#329BE7", fg: "#FFFFFF", radius: "8px", hover: "cobalt-400-20 #329BE733 ghost fill", use: "In-product primary action (Inbox CTA, send-message)" }
    input: { type: input, bg: "#FFFFFF", border: "1px solid rgba(0,0,0,0.05)", radius: "8px", padding: "8px 12px", focus: "cobalt-400-30 #329BE74D ring", use: "Bezier form input" }
    card: { type: card, bg: "rgb(250,154,240)", fg: "rgba(0,0,0,0.85)", radius: "20px", height: "400px", use: "Theatrical-colored AI Messenger feature card (marketing)" }
    cta-band: { type: card, bg: "transparent", radius: "32px", padding: "16px", use: "Bottom Experience It Yourself conversion band, full-bleed" }
    nav-link: { type: tab, bg: "transparent", fg: "rgba(0,0,0,0.85)", font: "15px / 400", active: "2px bottom-border indicator", use: "Nav menu items" }
---

# Design System Inspiration of Channel Talk

## 1. Visual Theme & Atmosphere

Channel Talk's marketing surface (`channel.io`) reads as a confident **B2B customer-service messenger** that has openly bet the company on the AI-agent shift. The page operates on a near-white canvas (`#FFFFFF` body with `#FCFCFC` / `#F7F7F8` surface tints from the Bezier `grey` ramp) and uses translucent off-black (`rgba(0,0,0,0.85)`) for body text rather than a hard `#000` — a small but characteristic warmth that softens the otherwise engineering-leaning palette. The signature accent observed in product chrome is **Cobalt 400** (`#329BE7`) — Channel's primary brand blue — while the homepage AI manifesto sections drop into a dark plum-purple canvas (`rgba(25,3,49,0.898)`) that visually quarantines the AI agent story from the surrounding helpdesk product story.

Typography is **Inter** (with `NotoSansKR` / `NotoSansJP` tied for fallback depending on locale). The Bezier DS product scale tops out at **36px / 44px line-height**, but the marketing surface deliberately breaks that ceiling for editorial hero/sectional moments — a 64px / 88px-lh / -1.5px-tracking `h1` and a 54px / 72px-lh `h2` give the homepage a sectional, almost manifesto rhythm that the in-product chrome never uses. Negative tracking is light by default (`-0.1px` at 15-17px, `-0.4px` at 22-36px), tightening at the marketing tier (`-1px` at 48px, `-1.5px` at hero).

What distinguishes Channel Talk visually is its **radius ladder discipline**: Bezier exposes 2 / 3 / 4 / 6 / 8 / 12 / 16 / 20 / 32 / 44 / 42% — and the marketing surface uses each tier intentionally. Primary CTAs land at **18px** (pill-tending without becoming capsules), product cards at **20px**, the bottom "Experience It Yourself" CTA band at **32px**, and small chips at **8px**. Cobalt 400 hover treatment also lives in the alpha ladder — `#329BE7` solid → `#329BE73D` / `#329BE71A` for subtle ghost states — a sign of a mature semantic-token system, not improvised tinting.

**Key characteristics**
- Canvas: white (`#FFFFFF`) with grey-50 / grey-100 surface tints (`#FCFCFC` / `#F7F7F8`)
- Body text: translucent off-black `rgba(0, 0, 0, 0.85)` (141/118 sampled elements observed live)
- Brand accent: **Cobalt 400 `#329BE7`** (`bezier.cobalt.400` + alpha ladder 10/20/30/40)
- AI manifesto canvas: dark plum `rgba(25, 3, 49, 0.898)` (homepage AI section only)
- Type: **Inter** primary, Bezier KR/JP stacks fall through Noto Sans KR/JP
- Marketing hero: 64px / weight 700 / 1.375 line-height / `-1.5px` tracking
- Radius ladder used by tier — 8px chips → 18px CTAs → 20px cards → 32px CTA bands
- Easing default: `cubic-bezier(0.3, 0, 0, 1)` with 150 / 300 / 450ms duration tokens

## 2. Color Palette & Roles

Source of truth: `github.com/channel-io/bezier-react/packages/bezier-tokens/src/global/color.json` (Bezier Design System, MIT). Each hue ships **300 / 400 / 500** weights plus a 4-step alpha ladder per weight (e.g., `300-40` = 40% alpha) — surfaced below by canonical role.

### Brand / accent

- **Cobalt 400** (`#329BE7`): primary brand blue — Channel Talk's product-chrome accent (live: 12 of 118 sampled elements)
- **Cobalt 300** (`#47C8FF`): lighter cobalt — illustrative / surface highlight
- **Cobalt 500** (`#327AB8`): cobalt heavy — pressed / hover-on-light
- **Cobalt 400-30** (`#329BE74D`) / **400-20** (`#329BE733`) / **400-10** (`#329BE71A`): hover / focus / subtle ghost fills

### Foundation neutrals (`bezier.grey`)

- **Grey 50** (`#FCFCFC`): elevated surface
- **Grey 100** (`#F7F7F8`): canvas tint
- **Grey 200** (`#EFEFF0`): divider light
- **Grey 500** (`#A7A7AA`): muted text
- **Grey 700** (`#464748`): body text on light (dark theme inverse)
- **Grey 800** (`#313234`): heading on dark
- **Grey 850** (`#2A2B2D`): dark surface
- **Grey 900** (`#242428`): deepest dark — also `rgb(36,36,40)` observed live as primary CTA bg

### Black / White alpha (`bezier.black` / `bezier.white`)

- **Black 85** (`#000000D9` = `rgba(0,0,0,0.85)`): canonical body text — 141 / 118 elements in live capture
- **Black 60** (`rgba(0,0,0,0.6)`): secondary text
- **Black 40 / 30 / 22 / 20 / 15 / 8 / 5 / 3**: full alpha ladder for borders, overlays, disabled tints
- **White 100** (`#FFFFFF`): primary surface
- **White 90 / 80 / 60 / 40 / 20 / 12 / 8 / 5**: full alpha ladder for inverted scrims, overlays

### Semantic hue family (each `300 / 400 / 500` + alpha 40/30/20/10)

- **Blue** 300 `#6687FF` · 400 `#5E56F0` · 500 `#4E40C9` — info / link-secondary
- **Teal** 300 `#3CDDCD` · 400 `#0FB3A3` · 500 `#449C8A`
- **Green** 300 `#3ACF5A` · 400 `#31A552` · 500 `#41904F` — success
- **Olive** 300 `#CAD548` · 400 `#A0A540` · 500 `#818628`
- **Yellow** 300 `#FDD353` · 400 `#EDBC40` · 500 `#C39E37` — caution
- **Orange** 300 `#FFAB5C` · 400 `#F4800B` · 500 `#C57417`
- **Red** 300 `#FF5C5C` · 400 `#E94E58` · 500 `#AC3E46` — error / destructive
- **Pink** 300 `#EC6FD3` · 400 `#CB48AD` · 500 `#A32E92`
- **Purple** 300 `#B570FF` · 400 `#915CE0` · 500 `#6B23B3`
- **Navy** 300 `#647CC9` · 400 `#3A4F8D` · 500 `#333D5B`

### Marketing-only theatrical colors (homepage chrome, not Bezier tokens)

- **AI canvas plum** (`rgba(25,3,49,0.898)`): the "AI Handles The Routine / You Handle The Strategy" panel
- **AI plum deep** (`rgb(60,3,54)`): nested AI panel
- **Inbox card pink** (`rgb(250,154,240)`): single illustrative card surface — not in token source

## 3. Typography Rules

### Font stack (Bezier `font.family`)

- **Sans (KR locale)**: `Inter, NotoSansKR, "Noto Sans KR", NotoSansJP, "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", Roboto, system-ui, sans-serif`
- **Sans (JP locale)**: `Inter, NotoSansJP, "Noto Sans JP", NotoSansKR, "Noto Sans KR", ...same fallbacks`
- **Mono**: `ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace`
- **Marketing display (homepage chrome only)**: `BildV5, "BildV5 Fallback"` (observed on 1 of 118 sampled elements — not a product token)

### Product-chrome scale (Bezier `typography.size`)

| Token | Size | Line height | Letter spacing |
|---|---|---|---|
| 11 | 11px | 16px | — |
| 12 | 12px | 16px | — |
| 13 | 13px | 18px | — |
| 14 | 14px | 18px | — |
| 15 | 15px | 20px | -0.1px |
| 16 | 16px | 24px | -0.1px |
| 17 | 17px | 24px | -0.1px |
| 18 | 18px | 24px | — |
| 22 | 22px | 28px | -0.4px |
| 24 | 24px | 32px | -0.4px |
| 30 | 30px | 36px | -0.4px |
| 36 | 36px | 44px | -0.4px |

Weights ship at **400 (regular)** and **700 (bold)** only — Bezier does not stock a 500/600 mid-weight in product chrome.

### Marketing-surface extension (homepage observed live)

| Role | Size | Weight | Line height | Letter spacing |
|---|---|---|---|---|
| Hero h1 | 64px | 700 | 88px | -1.5px |
| Section h2 (XL, on dark) | 54px | 600 | 72px | -1.5px |
| Section h2 (LG) | 48px | 600 | 64px | -1px |
| CTA label (hero) | 18px | 600 | 26px | -0.4px |
| Section "View Details" lead | 20px | 700 | 30px | -0.5px |
| Nav link | 15px | 400 | 21.45px | normal |

Note: weights 500 / 600 appear on marketing-surface headings but NOT in the Bezier source font weights — treat marketing scale as a brand-layer extension, not a product-chrome token.

## 4. Component Stylings

### Buttons

**Primary (hero CTA — marketing surface)**
- Background: `#242428` (grey 900, live captured as `rgb(36, 36, 40)` after rendering)
- Text: `#FFFFFF`
- Radius: 18px
- Padding: 8px 24px
- Label: 18px / weight 600 / 26px line-height / -0.4px tracking
- Height: ~64px (label area; outer wrapper drives height)
- Use: top-of-funnel "Sign Up for Free" only

**Secondary (subtle pill — section CTAs)**
- Background: `rgba(0, 0, 0, 0.05)`
- Text: `rgba(0, 0, 0, 0.85)`
- Radius: 16px
- Padding: 8px 20px
- Label: 20px / weight 700 / 30px line-height / -0.5px tracking
- Height: ~54px
- Use: "View Details" mid-section pivots; not a primary action

**Tertiary (text link)**
- Background: transparent
- Text: `rgba(0, 0, 0, 0.6)`
- Padding: 4px 6px
- Border: none (underline on hover inferred from convention; not directly captured)
- Use: "Learn more" inline references

**Cobalt accent (in-product, inferred from Bezier semantic tokens)**
- Background: `#329BE7` (cobalt 400)
- Hover: `#329BE7` over `rgba(50, 155, 231, 0.2)` ghost fill (live observed `rgba(50,155,231,0.2)` = `#329BE733` = cobalt 400-20)
- Text: `#FFFFFF`
- Radius: 6px or 8px (product chrome — Bezier 6/8 tokens)
- Use: primary action inside Channel Talk's product (Inbox CTA, send-message, etc.)

### Cards

**AI Messenger feature card (marketing)**
- Background: per-card theatrical color (e.g., `rgb(250, 154, 240)` pink for Inbox card)
- Text: `rgba(0, 0, 0, 0.85)`
- Radius: 20px
- Padding: section-driven (no padding on outer `a` wrapper; inner content gets its own)
- Width: 1160px on 1280-viewport (`100% - 120px` two-col gutters)
- Height: 400px (fixed feature-card height)
- Use: each Inbox / Meet / Team Chat / Workflow / Marketing / Docs surface gets one of these

**CTA section wrapper ("Experience It Yourself")**
- Background: transparent (content inside is the colored block)
- Radius: 32px
- Padding: 16px horizontal page-edge inset, vertical-driven
- Width: ~1248px (`100% - 32px`)
- Use: bottom-of-page conversion band

### Navigation

- Nav menu items: Inter 15px / weight 400 / 21.45px line-height
- Color: `rgba(0, 0, 0, 0.85)`
- Padding: 10px 16px 8px 0px (asymmetric — visual underline indicator on bottom only)
- Active indicator: 2px bottom border (border-bottom captured as `0px 0px 2px` on three sides + bottom)
- Logo link: 194×40px wrapper, fg `rgb(82, 84, 99)` (grey-tinted)
- Menu toggle button (mobile): `#FFFFFF` bg, 8px radius

### Form inputs

- Source of truth: `bezier-tokens/src/semantic/input.json` (1.4KB — full input semantic surface in Bezier)
- Surface (resting): `#FFFFFF` with `Black 8` (`rgba(0,0,0,0.05)`) border
- Surface (focus): cobalt 400-30 (`#329BE74D`) outline ring
- Radius: 6px or 8px (product chrome)
- Padding (medium): vertical 8px, horizontal 12px (inferred from Bezier 6/8 sizing patterns)

## 5. Layout Principles

**Page max width** (marketing): ~1248px content with 16px page-edge inset on 1280 viewport.

**Grid**: 2-up / 3-up product card rows; the All-in-One AI Messenger section uses a horizontal pill nav (Inbox / Meet / Team Chat / Workflow / Marketing / Docs) that pivots the entire card content in place rather than scrolling — a non-trivial interaction pattern.

**Spacing scale**: Bezier doesn't publish a separate spacing token file — instead, padding values cluster at: 4 / 6 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 60 / 64 / 80px (inferred from observed live values; Bezier semantic tokens use these as scale stops).

**Radius scale** (Bezier `radius`): 2, 3, 4, 6, 8, 12, 16, 20, 32, 44px, plus a special `42%` token for circular avatars (used by `bezier-react`'s avatar size scale where 42% gives the visual rounding without committing to a fixed px value).

**Surface elevation**: see §6.

## 6. Depth & Elevation

Source: `bezier-tokens/src/semantic/elevation.json` (2.3KB). Bezier exposes a semantic elevation ladder rather than raw `box-shadow` tokens — every elevation is paired with a background surface so dark-theme inversion is automatic.

- **Level 1** (resting card): `Grey 50` (`#FCFCFC`) surface + minimal shadow
- **Level 2** (interactive card): `Grey 100` (`#F7F7F8`) surface + slight shadow
- **Level 3** (popover / dropdown): subtle drop-shadow + `Black 8` border instead of pure shadow
- **Level 4** (modal / sheet): full shadow + dimmed scrim (`Black 30` / `rgba(0,0,0,0.3)`)

Live homepage chrome leans **flat** — virtually no `box-shadow` captured across 118 elements; depth is signaled via surface tint + border alpha, not shadow.

## 7. Do's and Don'ts

### Do
- Use **Inter** as the type voice — never substitute a different sans for product-chrome.
- Apply translucent off-black (`rgba(0,0,0,0.85)`) for body text — never pure `#000`.
- Honor the Bezier radius ladder by tier — 8px for chips, 18-20px for CTAs/cards, 32px for full-bleed CTA bands.
- Use Cobalt 400 `#329BE7` as the **only** brand accent in product chrome.
- Reach for the Bezier alpha ladder (`-10` / `-20` / `-30`) before inventing new tints.
- Top out at **36px** for in-product type; reserve >36px for marketing surfaces only.

### Don't
- Don't introduce a 5th radius value between Bezier tokens (e.g., 24px is not in the ladder).
- Don't add font weights between 400 and 700 inside product chrome — Bezier only ships those two.
- Don't decorate with semantic hues (red / yellow / green) — they are reserved for status semantics.
- Don't translate marketing's plum AI canvas (`rgba(25,3,49,0.898)`) into product chrome — it's a homepage-only rhetorical device.
- Don't use `BildV5` for product UI — it's a marketing display face.

## 8. Responsive Behavior

Marketing breakpoints (inferred from live capture at 1280-viewport):
- 768px / 896px / 1024px / 1280px

The product app (Inbox / Meet / Team Chat) is a desktop-first SaaS surface — Bezier components ship with `size` prop (`xs / s / m / l / xl`) rather than viewport-driven responsive behavior; the host app sets size programmatically based on layout context. The marketing site does respond fluidly with a mobile MenuToggleButton (8px radius, white surface) replacing the desktop nav under ~768px.

## 9. Agent Prompt Guide

### Quick reference

- **Canvas**: `#FFFFFF` body, `#FCFCFC` / `#F7F7F8` surface tints
- **Body text**: `rgba(0, 0, 0, 0.85)` — *never* `#000`
- **Brand accent**: Cobalt `#329BE7`
- **Type**: Inter 15-16px body, 18-24px subheads (product); 48-64px marketing headlines
- **Radius**: 8 / 18 / 20 / 32 — pick the tier, don't interpolate
- **Easing**: `cubic-bezier(0.3, 0, 0, 1)` at 150 / 300 / 450ms

### Example component prompts

- *"Build a Channel-Talk-styled SaaS dashboard hero. White (#FFFFFF) canvas, Inter 64px / weight 700 / 88px line-height / -1.5px tracking, text rgba(0,0,0,0.85). Primary CTA: bg #242428, text #fff, 18px radius, padding 8px 24px, label Inter 18px / weight 600 / -0.4px tracking. Secondary CTA: bg rgba(0,0,0,0.05), text rgba(0,0,0,0.85), 16px radius."*
- *"Build an AI-handles-routine manifesto section. Dark plum canvas rgba(25,3,49,0.898), Inter 54px / weight 600 / 72px line-height / -1.5px tracking, two-line headline with the second line color-shifted lighter as visual call-and-response."*
- *"Build a Bezier product modal. Grey-100 (#F7F7F8) surface, 12px radius, 24px padding, Black-30 scrim, transition s (150ms) cubic-bezier(0.3, 0, 0, 1)."*

## 10. Voice & Tone

Channel Talk's voice is **operator-pragmatic + AI-evangelical**. The marketing surface speaks as a Korean-origin B2B platform that has staked its 2025-26 narrative on the AI-agent transition — every section pivots back to how AI takes "the routine" so human teams can take "the strategy."

| Context | Tone |
|---|---|
| CTA | Direct verb. "Sign Up for Free" / "View Details" / "Learn more" |
| Marketing headline | Manifesto-shaped, present-tense. "The future of customer service is AI." "AI handles the routine. You handle the strategy." |
| Feature copy | Compound noun-led. "All Chats In One Place." "All-in-One AI Messenger." |
| Product (Inbox) | Pragmatic operator-speak (inferred from Bezier component naming: `Inbox`, `Workflow`, `Meet` — verbs/nouns, no "experiences") |
| Error | Specific, action-paired (e.g., "Message not sent. Retry") — convention inferred from Bezier semantic-tokens framing |

**Voice samples** (live channel.io 2026-05-14, paraphrased to avoid verbatim brand copy in derivative work)

- AI-era positioning: *"The future of customer service is AI."* (homepage hero) <!-- verified: channel.io/en 2026-05-14, used only as voice reference, not as derived copy -->
- AI/human split: *"AI handles the routine. You handle the strategy."* (homepage AI section) <!-- verified: channel.io/en 2026-05-14, voice reference only -->
- Compound positioning: *"All-in-One AI Messenger"* (section h2) <!-- verified: channel.io/en 2026-05-14 -->

**IP guardrail (DO NOT verbatim).** Any DESIGN.md or downstream artifact derived from this reference must **rewrite** Channel Talk's marketing taglines in its own voice — these voice samples document *tone shape*, not borrowable copy. Fresh derivation patterns (use these as templates instead): "Routine, automated. Strategy, yours." / "AI for the queue. You for the moves that matter." / "Every channel. One inbox." — none of which appear verbatim on channel.io.

**Forbidden phrases.** "AI-powered" without specifics. "Revolutionary support." "Next-generation CRM." Anything that promises AI without naming the surface (Inbox / Meet / Workflow) it operates on.

## 11. Brand Narrative

*Some facts in this section carry partial verification — see footer for source map.*

Channel Talk is operated by **Channel Corp** (주식회사 채널코퍼레이션) [channel.io/en/team], a Korean SaaS company whose current CEO is **Choi Si-won (최시원)** [channel.io/en/team]. The company's roots trace to a Korean startup originally named **ZOYI Corp**, founded around 2014 [secondary source — confidence moderate]; the rename to Channel Corp followed the product's pivot from offline-retail analytics to the SaaS customer-messenger that ships today. Channel Talk's primary positioning through ~2023 was as "the all-in-one business messenger" competing with Intercom on smaller-team economics + Korean/Japanese market fit; the 2024-26 narrative has shifted explicitly to **AI agent infrastructure**, with the **ALF** brand surface (AI Agent for customer inquiries + AI Agent for internal work) now sharing main-nav placement with the historical Inbox/Meet/Team Chat product line [channel.io/en about page].

By the metrics Channel itself publishes [channel.io/en/team footer 2026-05-14]: **234,545+ cumulative channels** deployed, **170 million monthly support messages**, **1,286,781+ AI-resolved cases** cumulative, **2,135+ companies using ALF**, **98% uptime**, **4.8/5 G2 rating**. Engineering compliance: **ISMS** (Korean information security certification), **ISO information protection certification**, AWS-hosted infrastructure.

The most distinctive engineering signal is **Bezier** — Channel's openly published, MIT-licensed design system [github.com/channel-io/bezier-react] shipping `bezier-react` (274+ stars) + `BezierSwift` (native iOS) + a canonical `bezier-tokens` package that powers both. Few Korean SaaS companies maintain a public token-grade DS at this depth, and the fact that the marketing site's homepage renders against the same primitives (Inter, the cobalt accent, the radius ladder) is itself the strongest claim about Channel's product-discipline.

*Unverified at time of writing*: precise founding year (2014 vs neighboring year), founder list beyond current CEO, total funding raised, exact HQ city within Korea. These are flagged in the verification footer for a follow-up UPDATE pass.

## 12. Principles

1. **One brand color does the lifting.** Cobalt 400 (`#329BE7`) is the only brand accent — semantic hues (red/yellow/green/blue) are reserved for status. *UI implication*: don't decorate with the semantic palette; pick cobalt or nothing.
2. **Inter, always — Noto fills the locale gap.** Korean and Japanese product rendering must keep Inter primary; Noto Sans KR/JP only resolves CJK characters Inter doesn't ship. *UI implication*: never substitute a single Korean-first stack — break the dual-locale resolution.
3. **Radius is a ladder, not a slider.** 2 → 3 → 4 → 6 → 8 → 12 → 16 → 20 → 32 → 44px. *UI implication*: pick the rung that matches component scale; never interpolate (24 is not a Bezier rung).
4. **Translucent off-black over pure black.** Body text is `rgba(0,0,0,0.85)`. *UI implication*: the 0.15 alpha is a deliberate atmospheric softening — preserve it on light surfaces.
5. **Marketing breaks the product ceiling on purpose.** 64px hero, 54-48px section headlines, 600-weight intermediate — all marketing-only. *UI implication*: never bring those tokens into product chrome; the visual cliff between marketing and product is part of the brand register.
6. **Dark theme is paired surface + elevation.** Bezier ships dark-theme as a full semantic mirror, not a CSS filter. *UI implication*: every elevation level has a paired light/dark surface — never invert color without inverting elevation.

## 13. Personas

*Personas are fictional archetypes informed by publicly visible Channel Talk user segments (Korean/Japanese DTC ecommerce, K-beauty, SaaS support, mid-market team CS leads) — not real individuals.*

**Yoonseo Han, 31, Seoul.** Customer-experience lead at a K-beauty DTC brand on Cafe24. Has the Channel Talk Inbox open in a pinned tab from 09:00 to 19:00 KST. Just turned ALF on for tier-1 FAQs (size exchange, shipping ETA) — measures the deflection weekly and reports it to her CCO.

**Ren Takahashi, 38, Tokyo.** Support manager at a B2B SaaS that uses Channel Talk for both customer Inbox and internal Team Chat. Cares deeply about JP/KR locale resolution (Inter + Noto), keyboard-shortcut macros, and the team-handoff UX when ALF escalates to a human agent.

**Jiwon Park, 27, Seongnam.** Frontline CS agent on a 5-person team. Lives in Inbox. Will defect to any tool with cleaner conversation-history scroll-back and faster `cmd+k` search. Doesn't care about the AI narrative — cares that ALF closed 60 of her 100 daily tickets so she can focus on the 40 that need her.

**Sungho Lee, 44, Busan.** RevOps lead at a mid-market commerce platform. Integrated Channel Talk with Channel's Meet (Call) for outbound retention plays. Reads the weekly Workflow dashboard. Reports cost-per-resolved-ticket to the founder.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no conversations)** | Cobalt-tinted illustrated panel + single CTA "Connect a channel" (inferred from Bezier `EmptyContent` component name) |
| **Empty (ALF disabled)** | Subtle prompt: "Turn on ALF to deflect tier-1 tickets" + single cobalt CTA |
| **Loading (conversation history)** | Skeleton message bubbles in `Grey 100` (`#F7F7F8`) — no shimmer animation, just static surface tint (Bezier's flat depth signature) |
| **Loading (ALF response)** | Three-dot typing indicator with ALF avatar (cobalt accent ring) |
| **Error (sync failure)** | Top-of-Inbox banner in `Red 400` (`#E94E58`) at `red-400-20` alpha fill + "Retry" link |
| **Error (ALF escalation needed)** | Inline below message bubble, `Yellow 400` (`#EDBC40`) status dot + "Hand off to human" CTA |
| **Success (ticket closed)** | Subtle row tint shift to `Green 400` at `green-400-10` (`#31A5521A`) — no animation |
| **Success (ALF resolved)** | Resolution badge on conversation row — cobalt outlined chip |
| **Skeleton (inbox list)** | `Grey 100` row blocks, no shimmer, transition fades when real content lands |
| **Disabled (no permission)** | Component opacity 40% + permission tooltip on hover |
| **Loading (ALF reasoning trace)** | Per-step expandable trace: "Searching knowledge base..." → "Drafting response..." → "Awaiting confirmation" |

## 15. Motion & Easing

| Token | Value | Use |
|---|---|---|
| `transition.duration.s` | 150ms | Hover, focus, small surface tints |
| `transition.duration.m` | 300ms | Modal open, popover, sheet |
| `transition.duration.l` | 450ms | Page transitions, large surface swaps |
| `transition.timing-function.default` | `cubic-bezier(0.3, 0, 0, 1)` | All transitions unless overridden |

Bezier ships exactly **one** easing curve as default — `cubic-bezier(0.3, 0, 0, 1)` — a sharp-out / soft-in shape that arrives quickly then settles. No bouncy or elastic curves in the source. The marketing site's section transitions (the AI-Messenger card pivots between Inbox / Meet / Team Chat / Workflow) appear to use the `m` duration with the default ease.

`prefers-reduced-motion: reduce` → durations collapse toward 0ms, transforms become opacity-only (convention; not explicitly documented in source but consistent with Bezier's accessibility framing).

---

**Verified:** 2026-05-14
**Tier 1 sources (live + canonical DS):**
- `channel.io/en` — live DOM via CDP (Chrome DevTools Protocol over localhost:9222) 2026-05-14, 118 element samples with full `getComputedStyle` capture (proof file: `assets/_reference/.live-inspect-proof.json`, 10 raw_samples retained ≥ 5-minimum threshold)
- `github.com/channel-io/bezier-react/tree/main/packages/bezier-tokens/src/global` — canonical Bezier DS token JSON files (color 6.7KB, font 3.0KB, typography 2.7KB, radius 463B, transition 945B, opacity 66B, z-index 361B) fetched via `gh api` 2026-05-14
- `github.com/channel-io/bezier-react/tree/main/packages/bezier-tokens/src/semantic` — elevation 2.3KB + input 1.5KB + light-theme/dark-theme directories

**Tier 2 sources:** `styles.refero.design/?q=channel+talk` and `getdesign.md/channeltalk` not consulted this pass (Bezier is the Tier-1 canonical source, making Tier-2 third-party indexes redundant for this reference); to be checked in a follow-up UPDATE.

**Tier 2 (Philosophy/founders):** `channel.io/en/about` (positioning + metrics + tagline), `channel.io/en/team` (CEO + metrics + compliance). Founder list beyond current CEO, exact founding year, total funding raised — *unverified* at this pass, flagged in §11 and below.

**Style ref:** `intercom` (closest peer: B2B customer messaging + AI agent positioning; warm dual-product chrome ↔ cobalt-disciplined product chrome contrast deliberate).

**Conflicts unresolved:**
- Founding year: secondary sources suggest ZOYI Corp lineage ~2014; Channel-side surfaces consulted do not confirm year. Flag for UPDATE.
- Founder list: only current CEO Choi Si-won verified from Channel surfaces; co-founders not enumerated.
- Total funding / HQ city: not extractable from channel.io surfaces consulted; Crunchbase blocked WebFetch (403); requires Tier 2 source on UPDATE pass.

**IP guardrails applied:**
- §10 voice samples documented for tone-shape reference only, **not derivable as verbatim copy** in downstream DESIGN.md generations. Fresh derivation patterns provided inline.
- Brand assets (logo, marketing photography) NOT mirrored into `assets/_reference/`; only computed-style raw samples + canonical Bezier DS token JSON (MIT-licensed, redistribution-permitted) captured.
- Bezier tokens are MIT-licensed at source — reproduction in this DESIGN.md is within license terms with attribution.

**Earlier mistakes reverted:** none (first capture of this reference).
