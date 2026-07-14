---
id: karrot
name: Karrot
country: KR
category: consumer-tech
homepage: "https://www.karrotmarket.com"
primary_color: "#ff7e36"
logo:
  type: github
  slug: daangn
verified: "2026-07-11"
omd: "0.1"
ds:
  name: SEED Design
  url: "https://v2.seed-design.io"
  type: system
  description: Karrot (Daangn)'s open-source design system for marketplace apps.
verification_v2:
  schema: 2
  checked: "2026-07-11"
  surfaces:
    - { id: marketing-home, kind: marketing, url: "https://www.karrotmarket.com/", inspected: "2026-07-11" }
    - { id: marketing-about, kind: marketing, url: "https://www.karrotmarket.com/about/", inspected: "2026-07-11" }
    - { id: seed-system, kind: design-system, url: "https://v2.seed-design.io/", inspected: "2026-07-11" }
  sources:
    - { id: karrot-live, kind: product-surface, url: "https://www.karrotmarket.com/", captured: "2026-07-11" }
    - { id: seed-source, kind: official-doc, url: "https://github.com/daangn/seed-design/blob/fb4459e90f84e049112395964319b163f980b821/packages/stylesheet/global.css", captured: "2026-07-11" }
    - { id: seed-typography, kind: official-doc, url: "https://v2.seed-design.io/foundation/typography/", captured: "2026-07-11" }
    - { id: seed-box-button, kind: official-doc, url: "https://v2.seed-design.io/component/box-button/usage/", captured: "2026-07-11" }
    - { id: seed-text-field, kind: official-doc, url: "https://v2.seed-design.io/component/text-field/usage/", captured: "2026-07-11" }
    - { id: seed-tabs, kind: official-doc, url: "https://v2.seed-design.io/component/tabs/usage/", captured: "2026-07-11" }
    - { id: seed-snackbar, kind: official-doc, url: "https://v2.seed-design.io/component/snackbar/usage/", captured: "2026-07-11" }
  claims:
    "tokens.colors.primary": &seed_color { surface_id: seed-system, source_id: seed-source, method: official-source, captured: "2026-07-11" }
    "tokens.colors.primary-hover": *seed_color
    "tokens.colors.primary-pressed": *seed_color
    "tokens.colors.canvas": *seed_color
    "tokens.colors.background": *seed_color
    "tokens.colors.surface": *seed_color
    "tokens.colors.foreground": *seed_color
    "tokens.colors.muted": *seed_color
    "tokens.colors.on-primary": *seed_color
    "tokens.colors.hairline": *seed_color
    "tokens.colors.brand-tint": *seed_color
    "tokens.colors.error": *seed_color
    "tokens.colors.info": *seed_color
    "tokens.colors.success": *seed_color
    "tokens.colors.marketing": &karrot_live { surface_id: marketing-home, source_id: karrot-live, method: computed-style, captured: "2026-07-11" }
    "tokens.typography.family.sans": *karrot_live
    "tokens.typography.h1.size": &seed_type { surface_id: seed-system, source_id: seed-typography, method: official-doc, captured: "2026-07-11" }
    "tokens.typography.h1.weight": *seed_type
    "tokens.typography.h1.lineHeight": *seed_type
    "tokens.typography.h2.size": *seed_type
    "tokens.typography.h2.weight": *seed_type
    "tokens.typography.h2.lineHeight": *seed_type
    "tokens.typography.h3.size": *seed_type
    "tokens.typography.h3.weight": *seed_type
    "tokens.typography.h3.lineHeight": *seed_type
    "tokens.typography.title.size": *seed_type
    "tokens.typography.title.weight": *seed_type
    "tokens.typography.title.lineHeight": *seed_type
    "tokens.typography.body.size": *seed_type
    "tokens.typography.body.weight": *seed_type
    "tokens.typography.body.lineHeight": *seed_type
    "tokens.typography.body-small.size": *seed_type
    "tokens.typography.body-small.weight": *seed_type
    "tokens.typography.body-small.lineHeight": *seed_type
    "tokens.spacing.sm": *karrot_live
    "tokens.spacing.md": *karrot_live
    "tokens.spacing.lg": *karrot_live
    "tokens.spacing.xl": *karrot_live
    "tokens.spacing.section": *karrot_live
    "tokens.rounded.sm": *karrot_live
    "tokens.rounded.md": *karrot_live
    "tokens.rounded.full": *karrot_live
    "tokens.components.marketing-primary.type": *karrot_live
    "tokens.components.marketing-primary.bg": *karrot_live
    "tokens.components.marketing-primary.fg": *karrot_live
    "tokens.components.marketing-primary.radius": *karrot_live
    "tokens.components.marketing-primary.height": *karrot_live
    "tokens.components.marketing-primary.padding": *karrot_live
    "tokens.components.marketing-primary.font": *karrot_live
    "tokens.components.marketing-primary.states": *karrot_live
    "tokens.components.marketing-primary.use": *karrot_live
    "tokens.components.box-button.type": &seed_box { surface_id: seed-system, source_id: seed-box-button, method: official-doc, captured: "2026-07-11" }
    "tokens.components.box-button.states": *seed_box
    "tokens.components.box-button.use": *seed_box
    "tokens.components.text-field.type": &seed_field { surface_id: seed-system, source_id: seed-text-field, method: official-doc, captured: "2026-07-11" }
    "tokens.components.text-field.states": *seed_field
    "tokens.components.text-field.use": *seed_field
    "tokens.components.tabs.type": &seed_tabs_claim { surface_id: seed-system, source_id: seed-tabs, method: official-doc, captured: "2026-07-11" }
    "tokens.components.tabs.states": *seed_tabs_claim
    "tokens.components.tabs.use": *seed_tabs_claim
    "tokens.components.snackbar.type": &seed_snackbar_claim { surface_id: seed-system, source_id: seed-snackbar, method: official-doc, captured: "2026-07-11" }
    "tokens.components.snackbar.states": *seed_snackbar_claim
    "tokens.components.snackbar.use": *seed_snackbar_claim
  conflicts: []
tokens:
  source: reconciled
  extracted: "2026-07-11"
  colors:
    primary: "#ff6f0f"
    primary-hover: "#ff9e66"
    primary-pressed: "#ff9e66"
    marketing: "#ff6600"
    canvas: "#ffffff"
    background: "#f2f3f6"
    surface: "#f7f8fa"
    foreground: "#212124"
    muted: "#868b94"
    on-primary: "#ffffff"
    hairline: "#eaebee"
    brand-tint: "#fff5f0"
    error: "#fa2314"
    info: "#009ceb"
    success: "#1aa174"
  typography:
    family: { sans: "System" }
    h1: { size: 48, weight: 700, lineHeight: "135%" }
    h2: { size: 42, weight: 700, lineHeight: "135%" }
    h3: { size: 34, weight: 700, lineHeight: "135%" }
    title: { size: 24, weight: 700, lineHeight: "135%" }
    body: { size: 16, weight: 400, lineHeight: "150%" }
    body-small: { size: 14, weight: 400, lineHeight: "150%" }
  spacing: { sm: 4, md: 8, lg: 12, xl: 16, section: 64 }
  rounded: { sm: 6, md: 8, full: 9999 }
  components_harvested: true
  components:
    marketing-primary: { type: button, bg: "#ff6600", fg: "#ffffff", radius: "9999px", height: "36px", padding: "4px 12px", font: "14px / 500", states: "default on two public surfaces; hover not captured", use: "Karrot marketing-site CTA" }
    box-button: { type: button, states: "primary, primary-low, secondary, danger, disabled, hover, keyboard", use: "SEED action with five documented sizes" }
    text-field: { type: input, states: "outlined, underlined, focused, disabled, readonly, required, invalid", use: "SEED single-line form field" }
    tabs: { type: tab, states: "selected, disabled, focus", use: "SEED category switching with indicator" }
    snackbar: { type: toast, states: "default, success, warning, action focus", use: "SEED transient action feedback" }
---

# Design System Inspiration of Karrot (당근)

## 1. Visual Theme & Atmosphere

Karrot is a hyperlocal platform built around the idea that technology should make neighborhood relationships feel more human, not more anonymous. Its design keeps community content dominant through warm orange accents, calm neutrals, direct language, and light interface chrome. Two related but non-identical public surfaces express that identity: the current SEED v2 product system defines semantic Primary as carrot-500 (`#ff6f0f`), while the public Karrot marketing site renders its CTA orange as `#ff6600`. Keeping those values separate preserves both product-system truth and the recognizable warmth of the brand.

SEED is the canonical source for product-system colors, type roles, and component behavior. The public marketing pages are evidence for the web font stack and marketing CTA geometry only. Both use warm neutrals, direct hierarchy, and restrained ornament so neighborhood content remains dominant.

**Key Characteristics:**
- SEED semantic Primary: `#ff6f0f`; current marketing CTA: `#ff6600`
- System-first web typography; `Pretendard Variable` is declared as a fallback but was not the computed first family in the inspected pages
- Official SEED semantic roles backed by the open-source `global.css`
- Components documented as behavior/state contracts, with marketing geometry kept surface-specific

## 2. Color Palette & Roles

### SEED v2 product semantics
- **Primary** (`#ff6f0f`): `--seed-semantic-color-primary`, mapped to carrot-500.
- **Primary Hover / Pressed** (`#ff9e66`): current light-theme state mapping.
- **Canvas** (`#ffffff`): gray-00 and `paper-default`.
- **Background** (`#f2f3f6`): gray-100 and `paper-background`.
- **Surface** (`#f7f8fa`): gray-50 and `paper-contents`.
- **Foreground** (`#212124`): gray-900 and `ink-text`.
- **Muted** (`#868b94`): gray-600 and `ink-text-low`.
- **Hairline** (`#eaebee`): gray-200 and `divider-2`.
- **Brand Tint** (`#fff5f0`): carrot-50 and `paper-accent`.
- **Danger** (`#fa2314`): red-600.
- **Accent / Info** (`#009ceb`): blue-500.
- **Success** (`#1aa174`): green-500.

### Marketing web exception
- **Marketing CTA** (`#ff6600`): computed background on both inspected Karrot public pages. Do not label it carrot-500 or substitute it for SEED Primary.

## 3. Typography Rules

### Font Family
- **Observed web UI**: `System`. The computed first family was `-apple-system` across 420 visible elements.
- **Declared fallback**: `Pretendard Variable` appeared in the stack and FontFace declarations but had no visible first-family usage in this capture.
- **Monospace**: no canonical UI monospace claim; do not invent one.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| H1 | System | 48px | 700 | 135% | 0 | SEED semantic h1 |
| H2 | System | 42px | 700 | 135% | 0 | SEED semantic h2 |
| H3 | System | 34px | 700 | 135% | 0 | SEED semantic h3 |
| Title 1 Bold | System | 24px | 700 | 135% | 0 | Section or chapter title |
| Body L1 | System | 16px | 400 | 150% | -0.02em on web | Long-form body |
| Body L2 | System | 14px | 400 | 150% | -0.02em on web | Compact body |

### Principles
- Official SEED exposes regular and bold semantic weights; do not infer a broad custom weight scale.
- Web tracking differs by role: headings remain neutral while body roles use narrow tracking.
- The previous 26px maximum was an old snapshot and is no longer canonical.

| Evidence class | Karrot status |
|---|---|
| **Official product-use** | SEED v2 defines product typography roles around platform/system families rather than a branded display face |
| **Live surface-use** | `-apple-system` was the visible first family across the inspected Karrot marketing surfaces |
| **Official distributed asset** | SEED design tokens and components are published openly; no separate public Karrot typeface asset is asserted |
| **Declared-only** | Pretendard Variable appeared in public stacks and FontFace declarations without visible first-family use in this capture |
| **Unresolved** | Exact native-app runtime family resolution outside the published SEED semantic roles |

## 4. Component Stylings

### Marketing Web

**Primary CTA**
- Background: `#ff6600`
- Text: `#ffffff`
- Radius: 9999px
- Padding: 4px 12px
- Height: 36px
- Font: 14px / 500 / System
- States: default observed on two public surfaces; hover not captured
- Use: Header-level marketing action

### SEED Product Components

**Box Button**
- States: primary, primary-low, secondary, danger, disabled, hover, keyboard
- Use: Action component with xsmall through xlarge sizes; medium is the documented default

**Text Field**
- States: outlined, underlined, focused, disabled, readonly, required, invalid
- Use: Single-line form input with label, description, error message, and optional prefix/suffix

**Tabs**
- States: selected, disabled, focus
- Use: Hug or fill category navigation with a current-selection indicator

**Snackbar**
- States: default, success, warning, action focus
- Use: Brief action feedback with at most one related action

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Observed public-web clusters: 4px, 8px, 12px, 16px, and 64px
- Treat larger marketing gaps as surface composition, not universal product tokens

### Grid & Container
- Marketing pages use responsive full-width sections and a centered content column.
- SEED components define their own layout constraints; for example, Box Button keeps a 16px mobile edge inset.

### Whitespace Philosophy
- Keep content dominant and chrome quiet.
- Use the observed 4/8/12/16 rhythm locally; do not extrapolate undocumented marketplace grid rules from the marketing site.

### Border Radius Scale
- Small: 6px, observed on a public CTA.
- Medium: 8px, observed on a public CTA.
- Full: 9999px, dominant public-web button geometry.
- Component-specific radii from SEED must be taken from that component's current style page, not inferred from this marketing scale.

## 6. Depth & Elevation

The inspected public controls were flat and reported `box-shadow: none`. No universal shadow tokens are published in the canonical frontmatter until current component-style sources are captured claim by claim.

## 7. Do's and Don'ts

### Do
- Use SEED Primary `#ff6f0f` for product-system work.
- Use the system font result unless a target product surface proves another first family.
- Follow each SEED component's documented states and accessibility behavior.
- Keep marketing `#ff6600` explicitly scoped to the observed public website.

### Don't
- Don't relabel marketing `#ff6600` as SEED carrot-500.
- Don't treat a declared Pretendard face as proof of visible use.
- Don't reuse the retired 26px maximum; current SEED heading roles reach 48px.
- Don't invent marketplace cards, sheets, or native-app geometry from a marketing snapshot.

## 8. Responsive Behavior

### Observed and documented behavior
- Public marketing controls render as compact 36px pills in the header and larger 40–48px CTAs deeper in the page.
- SEED Box Button documents five sizes and requires a 16px mobile edge inset.
- SEED Tabs supports `hug` and `fill`; fill is limited to five stable top-level items, while hug is recommended for six or more or variable categories.
- Text Field labels and descriptions may wrap; the input value itself remains one line and clips horizontally.

## 9. Agent Prompt Guide

### Quick Color Reference
- Product Primary: `#ff6f0f`
- Product Hover / Pressed: `#ff9e66`
- Marketing CTA only: `#ff6600`
- Canvas: `#ffffff`; Background: `#f2f3f6`; Surface: `#f7f8fa`
- Foreground: `#212124`; Muted: `#868b94`; Hairline: `#eaebee`
- Danger: `#fa2314`; Accent: `#009ceb`; Success: `#1aa174`

### Example Component Prompts
- "Build a SEED primary action using semantic Primary `#ff6f0f`; use the Box Button's documented size and state contract rather than inventing geometry."
- "Build a Karrot marketing header CTA with observed `#ff6600`, white text, 14px/500 System type, 36px height, and full-pill radius."
- "Create a SEED text field with outlined and underlined variants, explicit label, error message, focused, readonly, required, invalid, and disabled states."

### Iteration Guide
1. Choose the target surface first: SEED product system or Karrot marketing web.
2. Keep `#ff6f0f` and `#ff6600` distinct.
3. Start with System typography; Pretendard remains a fallback until target-surface use is proved.
4. Use only the 4/8/12/16/64 spacing observations as canonical shared values.
5. Source component behavior from the current SEED page for that component.

---

## 10. Voice & Tone

Karrot speaks like a trustworthy neighbor who just moved in next door: warm, plain-spoken, low-friction, and allergic to anything that sounds like corporate marketing. The voice assumes two strangers are about to hand each other a used crib across a parking lot — it protects that trust with earnestness, removes barriers with `부담 없이` (without burden) framing, and stays in everyday Korean sentence endings (`-어요`, `-예요`) rather than the formal `-ㅂ니다`. English surfaces (Karrot in US/Canada/UK/JP) mirror this in plain, contraction-friendly English — *"Buy and sell for free with locals"*, not *"Discover premium local marketplace experiences"*.

| Context | Tone |
|---|---|
| CTAs | Short verb-first Korean (`판매하기`, `채팅하기`, `거래 완료`) / plain imperative English (`Sell`, `Chat`, `Apply`) |
| Empty states | One warm line explaining *why it's empty* + one low-pressure suggestion. Never `데이터가 없습니다`. |
| Error messages | Specific, blameless, actionable. Prefer `다시 시도해 주세요` over `오류가 발생했습니다`. |
| Success toasts | Past-tense single sentence (`거래가 완료되었어요`). Quiet, not celebratory. |
| Community guidelines | Second-person, direct, grounded in neighborhood norms. Reads like a house rule, not a ToS. |
| Trust & safety | Calm, factual, never fearmongering. The goal is to keep people transacting, not to scare them off. |
| Local / hyperlocal copy | Always name the neighborhood (`강남구 역삼동`, `Manhattan`). Proximity is the brand — surface it. |
| Onboarding | One screen, one idea, one action. No bullet lists. No feature tours. |

**Forbidden phrases.** `불편을 드려 죄송합니다`, `죄송하지만`, `데이터가 없습니다`, `오류가 발생했습니다`, `혁신적인`, English boilerplate like `Oops, something went wrong` or `We apologize for the inconvenience`. Marketing-speak bans: `amazing deals`, `best-in-class`, `revolutionary`, `world-class`. Emoji are permitted sparingly in community chat and stickers, but never in error messages, never in trust/safety copy, and never in financial/payment confirmations.

**Voice samples.**

- `Buy and sell for free with locals` — homepage hero, English. <!-- verified: https://www.karrotmarket.com, 2026-04 -->
- `Welcome to your new neighborhood buy & sell` — homepage sub-hero. <!-- verified: https://www.karrotmarket.com, 2026-04 -->
- `It's easier in the apps` / `Download the Karrot app` — app-install nudge. <!-- verified: https://www.karrotmarket.com, 2026-04 -->
- `동네를 여는 문, 당근` — brand narrative tagline (corporate site). <!-- verified: https://about.daangn.com, 2026-04 -->
- `로컬의 모든 것을 연결해, 동네의 숨은 가치를 깨워요` — mission statement. <!-- cited: about.daangn.com mission page, 2026-04 -->
- `<neighborhood>에서 <product>을(를) 찾고 있어요` — illustrative search/wanted-listing pattern (variable placeholders). <!-- illustrative: not verified as live Karrot copy -->
- `이 거래, 직접 만나서 할까요?` — illustrative in-chat nudge for face-to-face meeting (hyperlocal behavior). <!-- illustrative: not verified as live Karrot copy -->

## 11. Brand Narrative

Karrot (당근, *daangn*) launched in 2015 in Pangyo, South Korea, founded by Kim Yong-hyun and Kim Jae-hyun — both former Kakao engineers who had watched the open-marketplace model (Korean e-commerce giants, nationwide shipping, anonymous counterparties) fail the one job users actually cared about: trust. Their founding bet was that secondhand transactions are not a logistics problem; they are a **neighborhood problem**. The first version of the app hard-capped transactions to a **6 km radius** (later relaxed to 10 km in KR/JP, up to 50 km in North America), on the theory that if you can walk to the meeting, you can look the other person in the eye ([Crunchbase](https://www.crunchbase.com/organization/daangn-market), [KED Global](https://www.kedglobal.com/korean-startups/newsView/ked202407040005)).

The product is built around that proximity constraint. Every listing surfaces the neighborhood name. Every match is geo-scoped. Every CTA assumes the buyer and seller will eventually stand in the same parking lot. The design language follows suit: a warm orange (`#ff6600`) that reads as a fresh carrot — not the corporate orange of enterprise dashboards, not the alarm orange of warnings — and no custom typeface, because the brand doesn't want a distinctive voice *around* user content; it wants user content to feel like the voice of the neighborhood itself. **Series D $162M August 2021** at **$2.7B valuation** made **Danggeun Market Inc.** Korea's **13th unicorn** (>1 trillion KRW). Earlier September 2019 raise: 40 billion KRW from **Altos Ventures + Goodwater Capital** (Silicon Valley). By early 2025 the company reports 40M+ cumulative registered users and 20M+ monthly active users across 1,400+ regions worldwide, with 227B KRW in cumulative funding ([Crunchbase — Karrot Market](https://www.crunchbase.com/organization/daangn-market), [KED Global — Korea's top flea market $180M](https://www.kedglobal.com/newsView/ked202102010008), [about.daangn.com](https://about.daangn.com)). <!-- about.daangn.com retrieved 2026-04 -->

What Karrot refuses: the anonymity of nationwide marketplaces (eBay, Coupang), the impersonal aesthetics of enterprise commerce (data-heavy dashboards, filter-rich search UIs), and the gamified engagement loops of consumer social (streaks, badges, algorithmic feeds). The brand's mission, stated on its own corporate page, is *"로컬의 모든 것을 연결해 동네의 숨은 가치를 기술로 깨우는"* — connecting everything local, awakening hidden neighborhood value through technology ([medium.com/daangn](https://medium.com/daangn)). Orange is the accent because the brand is supposed to feel like one warm thing in an otherwise neutral room.

## 12. Principles

1. **Orange is scarce, on purpose.** `#ff6600` appears only on the primary CTA, active states, and a small set of brand moments. It never decorates, never fills a hero background, never tints a shadow. *UI implication:* at most one orange element per viewport in the primary flow; if a design has two orange CTAs competing on one screen, one must demote to neutral-weak.
2. **System font, because content is the brand.** No custom typeface. Pretendard on web, Apple SD Gothic Neo / system sans on native. The community's listings *are* the product; the UI's job is to disappear behind them. *UI implication:* never embed a branded webfont on Karrot-styled surfaces. If a heading needs weight, use weight 700, not a display face.
3. **Proximity is surfaced, always.** Every listing, chat, and search result shows a neighborhood name. Distance is not a filter you have to remember to toggle — it's a default. *UI implication:* every card, row, or summary that represents user content must show the neighborhood (`동` / `neighborhood`) as visible metadata, not hidden in a detail screen.
4. **Trust comes from calm, not from badges.** No padlock icons in the main flow, no "Verified Seller" trophies, no red "FRAUD WARNING" banners on first paint. Trust is communicated through consistency, neutrality, and the user's ability to meet in person. *UI implication:* trust-and-safety copy lives in body-weight neutral text; reserve red and warning-iconography for actual errors, not ambient advisories.
5. **Everything on the 4px grid.** The Seed Design system snaps all measurements to multiples of 4px. Off-grid values accrete into visual noise. *UI implication:* any padding, gap, or component height not in `{4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64}` must be justified in a comment or corrected.
6. **One accent. One system. One rhythm.** No secondary brand hue exists. No "Karrot Blue" for utility, no "Karrot Green" for success-branded promo. Semantic colors (`fg-critical`, `fg-informative`, `fg-positive`) exist — but they are utility, not brand. *UI implication:* if a design introduces a second brand-scale color, it has drifted off-system; reject or re-scope to semantic.
7. **Dark mode is a remap, not an inversion.** Semantic tokens point to different palette entries in dark mode; brand solid, critical, and informative are intentionally re-tuned rather than auto-computed. *UI implication:* never rely on `filter: invert()` or runtime HSL math. Every component reads from semantic tokens that already account for theme.
8. **Content-dense, chrome-light.** Users scan many listings in one session — a listing card is closer to an SMS than to a Pinterest tile. *UI implication:* target 3–4 listings visible per mobile viewport; chrome (borders, shadows, decorative space) must not push that below 3.

## 13. Personas

These are official product and stakeholder contexts, not invented demographic personas.

- **A neighbor buying or selling nearby:** needs location, distance, conversation, and handoff expectations to stay visible without marketplace-style complexity.
- **A local resident sharing information or help:** needs plain community language and enough neighborhood context to judge relevance and trust.
- **A local business connecting with nearby customers:** needs technology translated into familiar, human communication rather than enterprise marketing language.
- **A person entering a new neighborhood:** needs recognizable local cues and low-pressure participation before the product asks for deeper commitment.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no listings nearby)** | Warm one-line explanation (`아직 우리 동네에 올라온 물건이 없어요`) + one secondary CTA in neutral-weak (`내 동네 바꾸기` / change neighborhood). Never an illustration. Never `데이터가 없습니다`. |
| **Empty (filter cleared)** | Single line of `gray-700` caption (`조건에 맞는 물건이 없어요`). No button — user resets the filter themselves. |
| **Empty (new user, first paint)** | Single welcome sentence naming the user's detected neighborhood, plus a primary CTA `둘러보기` (browse) in Karrot Orange. No onboarding carousel. |
| **Loading (first paint)** | Skeleton blocks at `gray-200` matching the final listing-card layout — 1:1 thumbnail box, two text lines, one metadata line. Shimmer at 1.2s with 8% white highlight. |
| **Loading (infinite scroll)** | Bottom-of-list spinner in Karrot Orange, 24px diameter. No overlay. Existing cards stay visible. |
| **Loading (refresh / pull-to-refresh)** | Pull-down reveals a carrot-glyph progress indicator in Karrot Orange; never a generic iOS spinner on branded surfaces. |
| **Error (inline field)** | Input border becomes `#fa342c` (red-700) 2px, helper text below in red-700 13px. One actionable sentence (`동네를 다시 선택해 주세요`). |
| **Error (toast)** | `#1a1c20` (gray-1000) background, white 14px weight 400 text, 3s auto-dismiss. Bottom of screen with 16px inset above the tab bar. One sentence. No icon. |
| **Error (network / server-blocking)** | Full-screen centered message in `gray-1000` 16px weight 600, `gray-800` 14px weight 400 subline, retry button in Karrot Orange. No illustration. |
| **Success (inline flash)** | Brief 300ms flash of `#fff2ec` (carrot-100) behind the updated element, fading back to default. For routine confirmations (favorited, saved search). |
| **Success (transaction complete)** | Dedicated confirmation screen — not a toast. `#079171` (positive green) check icon top-center, one-line past-tense sentence (`거래가 완료되었어요`), and a single primary button `매너 평가 남기기` (leave manner rating). |
| **Skeleton** | `gray-200` blocks at exact final dimensions matching the listing-card layout (1:1 thumbnail, two text lines, one metadata line). Shimmer 1.2s with 8% white highlight. Never over the neighborhood-name metadata — that slot stays blank until resolved, so the UI never implies a location that hasn't been confirmed. |
| **Disabled** | Button background drops to `gray-200`, text to `gray-500`. No color inversion. Geometry stays identical so re-enable is frame-stable. |

## 15. Motion & Easing

**Durations** (named, not raw milliseconds):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox state changes |
| `motion-fast` | 150ms | Hover, focus, button press overlays, inline flash success |
| `motion-standard` | 250ms | The default — card taps, tab switches, bottom-sheet reveals |
| `motion-slow` | 350ms | Emphasized transitions — full-sheet presentations, success screens |
| `motion-page` | 300ms | Native-style push/pop between routes |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Sheets, toasts, screen pushes appearing |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, pops, toast auto-close |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions — expandable cards, tab content |

**Spring stance.** **Spring and overshoot easings are forbidden across Karrot surfaces.** The brand is a neighborhood marketplace between strangers; playful bounce undermines the calm trust the rest of the system works to establish. Money and goods change hands on this app — a button that wobbles on press reads as toy-like, and a success card that springs in reads as celebratory in a way Karrot deliberately isn't. The one licensed exception is the native-platform pull-to-refresh indicator, which inherits the OS's default spring because overriding it would feel *more* jarring than accepting it. Every other motion uses `ease-enter`, `ease-exit`, or `ease-standard`.

**Signature motions.**

1. **Listing-card tap.** Card compresses to 98% scale on press (`motion-fast / ease-standard`), releases on tap-up before navigation begins. Feedback is immediate; the route transition follows on `motion-page / ease-enter`.
2. **Bottom-sheet presentation.** Sheets rise from `y+40px` with `motion-standard / ease-enter` and a synchronized backdrop fade from `rgba(0,0,0,0)` to `rgba(0,0,0,0.5)` (`bg-overlay-muted`). Dismissal uses `motion-fast / ease-exit` — leaving is lighter than entering.
3. **Neighborhood switch.** When the user changes their 동 (neighborhood), the listings feed cross-fades over `motion-slow` rather than sliding — sliding would imply geographic direction, which is misleading (Korean neighborhoods aren't ordered on an axis).
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. No exceptions. Cross-fades replace slides. Pull-to-refresh indicator simplifies to a static spinner. The app stays fully usable; just less kinetic.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 — Direct verification (WebFetch, 2026-04):
- https://www.karrotmarket.com — live English microcopy: "Buy and sell for free with locals",
  "Welcome to your new neighborhood buy & sell", "It's easier in the apps",
  "Download the Karrot app", category labels, CTAs, footer taxonomy.
- https://about.daangn.com — corporate site confirms mission tagline
  "동네를 여는 문, 당근", full mission statement "로컬의 모든 것을 연결해,
  동네의 숨은 가치를 깨워요", Jan-2025 metrics (40M+ registered users,
  20M+ MAU, 1,400+ regions, 227B KRW funding).
- https://medium.com/daangn — engineering publication confirms
  "로컬의 모든 것을 연결해 동네의 숨은 가치를 기술로 깨우는" as the tech-focused
  mission variant; 4.3K followers; categories (Engineering, AI/ML, Data, Search).

Tier 2 — Press / secondary (WebSearch, 2026-04):
- https://www.crunchbase.com/organization/daangn-market — confirms 2015 founding,
  co-founders Kim Yong-hyun and Kim Jae-hyun, both ex-Kakao.
- https://www.kedglobal.com/korean-startups/newsView/ked202407040005 —
  confirms initial 6 km transaction radius, later 10 km (KR/JP) and up to
  50 km (US/CA), Canada expansion (2024).

Base DESIGN.md (sections 1–9) is the source for token-level claims including
Karrot Orange #ff6600, Seed Design system, 4px grid, semantic token architecture,
shadow levels, and the system-font-only typography decision.

Re-verification status:
- The 40M+ registered / 20M+ MAU / 1,400+ regions / 227B KRW figures in §11 are
  carried from about.daangn.com as of the retrieval date. Numbers may drift;
  re-verify before quoting publicly. <!-- source: about.daangn.com, 2026-04,
  not independently cross-checked against financial filings -->
- The 6 km / 10 km / 50 km radius progression is widely reported in press
  (KED Global, Crunchbase, TechCrunch 2020/2021). Current product-level radius
  may differ; verify before using as a design constraint.

Not independently verified — widely documented public facts:
- Karrot (Danggeun Market Inc.) founded 2015 in Pangyo by Kim Yong-hyun and
  Kim Jae-hyun, both formerly at Kakao Corp.
- Korean "동네" (neighborhood / dong) is a real administrative unit; the
  characterization of nationwide Korean e-commerce incumbents is general
  industry knowledge, not a sourced Karrot statement.

Personas (§13) are fictional archetypes informed by publicly described Karrot
user segments (KR urban young adult, KR secondary-city student, NA expat,
KR retiree 동네생활 user). Any resemblance to specific individuals is unintended.

Interpretive claims (editorial, not documented Karrot statements):
- "Orange is the accent because the brand is supposed to feel like one warm
  thing in an otherwise neutral room" (§11 closing) — editorial reading of the
  design, not a sourced brand statement.
- The characterization of the Karrot orange as "fresh carrot, not corporate
  orange, not alarm orange" (§11) — editorial framing based on observed usage.
- The spring-forbidden stance (§15) — derived from the overall brand posture
  (trust between strangers, calm neutrality) as expressed in base §6 Shadow
  Philosophy and §7 Do's/Don'ts; not a documented Seed Design rule.
-->

---

**Verified:** 2026-07-11 (CAP0 evidence v1 + SEED v2 source reconciliation)
**Tier 1 sources:** https://www.karrotmarket.com/ (marketing live DOM); https://www.karrotmarket.com/about/ (second public surface); https://v2.seed-design.io/foundation/color/palette/ and https://v2.seed-design.io/foundation/typography/ (official SEED); https://github.com/daangn/seed-design/blob/fb4459e90f84e049112395964319b163f980b821/packages/stylesheet/global.css (official token source).
**Tier 2 sources:** https://getdesign.md/karrot and https://styles.refero.design/?q=Karrot were attempted; neither yielded an importable Karrot claim in this run.
**Tier 2 (Philosophy/founders):** Crunchbase (Karrot + Kim Jae-hyun + Kim Yong-hyun profiles), KED Global ($180M unicorn 2021), Korea Herald (Canada 2M), ZoomInfo (HQ Gangnam), KoreaTechDesk.
**Style ref:** `toss` (KR neighbor tone, retained).
**Conflicts unresolved:** none
**Resolved drift:** current SEED product Primary is `#ff6f0f`; current marketing-web CTA `#ff6600` is retained as a separate surface token. The prior 26px maximum and exact Pretendard/SF Mono claims were removed.
