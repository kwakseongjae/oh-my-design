---
id: stripe
name: Stripe
country: US
category: fintech
homepage: "https://stripe.com"
primary_color: "#635bff"
logo:
  type: simpleicons
  slug: stripe
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: docs-home, kind: product, url: "https://docs.stripe.com/", inspected: "2026-07-13" }
    - { id: docs-payments, kind: product, url: "https://docs.stripe.com/payments", inspected: "2026-07-13" }
    - { id: docs-api, kind: product, url: "https://docs.stripe.com/api", inspected: "2026-07-13" }
  sources:
    - { id: docs-home-live, kind: product-surface, url: "https://docs.stripe.com/", captured: "2026-07-13" }
    - { id: docs-payments-live, kind: product-surface, url: "https://docs.stripe.com/payments", captured: "2026-07-13" }
    - { id: docs-api-live, kind: product-surface, url: "https://docs.stripe.com/api", captured: "2026-07-13" }
    - { id: newsroom, kind: brand-asset, url: "https://stripe.com/newsroom/information", captured: "2026-07-13" }
    - { id: culture, kind: official-doc, url: "https://stripe.com/jobs/culture", captured: "2026-07-13" }
    - { id: soehne-foundry, kind: license, url: "https://klim.co.nz/fonts/soehne/", captured: "2026-07-13" }
    - { id: source-code-license, kind: license, url: "https://github.com/adobe-fonts/source-code-pro/blob/release/LICENSE.md", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.foreground": &docsHome { surface_id: docs-home, source_id: docs-home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.foreground-strong": &docsApi { surface_id: docs-api, source_id: docs-api-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.muted": *docsHome
    "tokens.colors.link": *docsHome
    "tokens.colors.accent": *docsApi
    "tokens.colors.canvas": *docsHome
    "tokens.colors.surface-subtle": *docsHome
    "tokens.colors.hairline": *docsHome
    "tokens.colors.hairline-hover": *docsHome
    "tokens.colors.on-dark": *docsApi
    "tokens.typography.body.size": *docsHome
    "tokens.typography.body.weight": *docsHome
    "tokens.typography.body.lineHeight": *docsHome
    "tokens.typography.body.use": *docsHome
    "tokens.typography.heading.size": *docsApi
    "tokens.typography.heading.weight": *docsApi
    "tokens.typography.heading.lineHeight": *docsApi
    "tokens.typography.heading.use": *docsApi
    "tokens.typography.control.size": *docsHome
    "tokens.typography.control.weight": *docsHome
    "tokens.typography.control.lineHeight": *docsHome
    "tokens.typography.control.use": *docsHome
    "tokens.spacing.xs": *docsHome
    "tokens.spacing.sm": *docsHome
    "tokens.spacing.md": *docsHome
    "tokens.spacing.lg": *docsHome
    "tokens.spacing.xl": *docsHome
    "tokens.spacing.xxl": *docsHome
    "tokens.rounded.sm": *docsHome
    "tokens.rounded.md": *docsHome
    "tokens.rounded.lg": *docsApi
    "tokens.components.docs-search-prompt.type": *docsHome
    "tokens.components.docs-search-prompt.bg": *docsHome
    "tokens.components.docs-search-prompt.fg": *docsHome
    "tokens.components.docs-search-prompt.radius": *docsHome
    "tokens.components.docs-search-prompt.padding": *docsHome
    "tokens.components.docs-search-prompt.font": *docsHome
    "tokens.components.docs-search-prompt.hover": *docsHome
    "tokens.components.docs-search-prompt.pressed": *docsHome
    "tokens.components.docs-search-prompt.focus": *docsHome
    "tokens.components.docs-search-prompt.states": *docsHome
    "tokens.components.docs-secondary-action.type": *docsHome
    "tokens.components.docs-secondary-action.bg": *docsHome
    "tokens.components.docs-secondary-action.fg": *docsHome
    "tokens.components.docs-secondary-action.border": *docsHome
    "tokens.components.docs-secondary-action.radius": *docsHome
    "tokens.components.docs-secondary-action.padding": *docsHome
    "tokens.components.docs-secondary-action.font": *docsHome
    "tokens.components.docs-secondary-action.hover": *docsHome
    "tokens.components.docs-secondary-action.pressed": *docsHome
    "tokens.components.docs-secondary-action.focus": *docsHome
    "tokens.components.docs-secondary-action.states": *docsHome
    "tokens.components.docs-content-tab.type": *docsHome
    "tokens.components.docs-content-tab.fg": *docsHome
    "tokens.components.docs-content-tab.radius": *docsHome
    "tokens.components.docs-content-tab.padding": *docsHome
    "tokens.components.docs-content-tab.font": *docsHome
    "tokens.components.docs-content-tab.states": *docsHome
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Only selector-backed public Docs values are tokens. Stripe marketing, newsroom assets, Docs chrome, and declared-only font assets are separate evidence domains."
  colors:
    foreground: "#414552"
    foreground-strong: "#1a2c44"
    muted: "#50617a"
    link: "#5469d4"
    accent: "#533afd"
    canvas: "#ffffff"
    surface-subtle: "#f4f7fa"
    hairline: "#d4dee9"
    hairline-hover: "#95a4ba"
    on-dark: "#ffffff"
  typography:
    body: { size: 14, weight: 400, lineHeight: 1.43, use: "Repeated public Docs text; operating-system stack, not a named Stripe UI family" }
    heading: { size: 32, weight: 700, lineHeight: 1.25, use: "Observed Docs h1 only; not a complete display scale" }
    control: { size: 14, weight: 400, lineHeight: 1.43, use: "Public Docs prompt, action, input, and tab samples" }
  spacing: { xs: 4, sm: 6, md: 8, lg: 12, xl: 16, xxl: 24 }
  rounded: { sm: 4, md: 6, lg: 8 }
  components:
    docs-search-prompt: { type: button, bg: "#ffffff", fg: "#5469d4", radius: 8, padding: "2px 8px", font: "14px/400 operating-system stack", hover: "#273951 text with #95a4ba border", pressed: "#f4f7fa background with #3c4f69 text and #d4dee9 border", focus: "captured without a distinct computed value", states: "focus, hover, pressed; home and payments only" }
    docs-secondary-action: { type: button, bg: "#ffffff", fg: "#50617a", border: "0px #d4dee9", radius: 8, padding: "6px 12px", font: "14px/400/20px operating-system stack", hover: "#273951 text with #95a4ba border", pressed: "#f4f7fa background with #3c4f69 text", focus: "#f4f7fa background with #50617a text", states: "focus, hover, pressed; home and payments only" }
    docs-content-tab: { type: tab, fg: "#414552", radius: 0, padding: "0px", font: "14px/400 operating-system stack", states: "selected; static aria-tab capture on Docs home and payments" }
  components_harvested: true
---

# Design System Inspiration of Stripe

## 1. Visual Theme & Atmosphere

Stripe builds economic infrastructure for internet businesses, from payments to broader business-management software. Its official newsroom frames that mission around increasing the GDP of the internet, while the current public Docs surfaces turn the same infrastructure stance into an information-dense, quiet interface. The supplied capture covers Docs home, Payments documentation, and API reference—not the marketing home, Dashboard, or checkout. Across those public documentation routes, a restrained blue-gray text hierarchy sits on white and faintly cool surfaces, with purple/indigo used for links and API-reference accents. The visual character is therefore best described as product documentation chrome: readable, compact, and deliberately non-promotional. Stripe’s official operating principles add the relevant brand context—users first, craft and beauty, urgency and focus, and careful foundations—but they do not authorize treating marketing art direction as a Docs token.

**Key characteristics:**

- Public Docs use `#414552` as repeated foreground text and `#1a2c44` in API-reference content.
- `#5469d4` is the selector-backed Docs link/action color; `#533afd` occurs on API-reference actions and borders.
- White `#ffffff` is the repeated canvas; `#f4f7fa` appears in pressed/subtle controls.
- Captured geometry is compact: 4px, 6px, and 8px radii; the evidence does not support a universal radius rule.
- Marketing, Docs, newsroom assets, and unauthenticated product UI remain separate evidence domains.

## 2. Color Palette & Roles

### Selector-backed public Docs colors

- **Docs Foreground** (`#414552`): repeated text and tab color on Docs home, Payments docs, and API reference.
- **API Foreground** (`#1a2c44`): stronger text on captured API-reference and Payments documentation content.
- **Muted Docs Text** (`#50617a`): compact secondary-action text.
- **Docs Link** (`#5469d4`): repeated Docs home/Payments link and prompt-action color.
- **API Accent** (`#533afd`): API-reference action/link and border samples; it is not promoted as a universal Docs fill.
- **Canvas / On-dark** (`#ffffff`): repeated white public Docs canvas and dark-control text.
- **Subtle Pressed Surface** (`#f4f7fa`): observed only on pressed/focused compact Docs controls.
- **Hairline** (`#d4dee9`): observed compact-control border; **Hairline Hover** (`#95a4ba`) appears in captured hover styles.

### Brand-asset boundary

Stripe’s newsroom says its wordmark is available in slate, blurple, and white. The catalog’s `primary_color` remains `#635bff`, but the current packet contains no computed marketing-surface sample that would make it a Docs token. Do not substitute the marketing/wordmark color for `#5469d4` or `#533afd` on the captured Docs routes.

## 3. Typography Rules

### Evidence classes

| Evidence class | Family and boundary |
|---|---|
| Official product-use | No supplied official Stripe statement establishes a named type family for the three captured Docs routes. |
| Live computed surface-use | The Docs capture records an operating-system stack beginning `-apple-system` in 355 visible uses. It is system typography, not a Stripe-owned family or a substitute for one. |
| Official distributed brand asset | Klim Type Foundry’s Söhne page lists Stripe in its separate “Söhne in use” showcase and describes available WOFF2/web licensing. This is foundry/brand context only; it is not evidence that the captured Docs routes loaded Söhne. |
| Declared-only | Heiti SC, Hiragino Kaku Gothic ProN, Hiragino Sans, Hiragino Sans GB, Meiryo UI, Microsoft JhengHei, Microsoft YaHei, PingFang SC, and Yu Gothic UI have declarations but no visible use in the supplied capture. |
| System / unresolved | `Source Code Pro` (four computed occurrences) and Menlo (two) have no matching loaded FontFace/source URL in the artifact, so neither is promoted. Adobe’s Source Code Pro repository/license establishes the font’s OFL status, not Stripe deployment. |

### Captured hierarchy

| Role | Family boundary | Size | Weight | Line height | Evidence boundary |
|---|---|---:|---:|---:|---|
| Public Docs body | operating-system stack | 14px | 400 | 20px or normal | repeated Docs samples; no named UI family claim |
| API Docs h1 | operating-system stack | 32px | 700 | 40px | two observed API-reference samples only |
| Docs control | operating-system stack | 14px | 400 | 20px or normal | prompt, action, input, and tab samples |
| Code-adjacent sample | Source Code Pro | 12px | 700 | 20px | four computed occurrences; unresolved because FontFace/source corroboration is absent |

Do not render a system fallback as Söhne or Source Code Pro. The capture supports system-stack documentation typography only.

## 4. Component Stylings

### Public Docs actions

**Search Prompt**
- Background: `#ffffff`
- Text: `#5469d4`
- Border: 0px `#5469d4`
- Radius: 8px
- Padding: 2px 8px
- Font: 14px / 400 / operating-system stack
- Hover: `#273951` text with `#95a4ba` border
- Pressed: `#f4f7fa` background with `#3c4f69` text and `#d4dee9` border
- Focus: captured without a distinct computed value
- Use: Docs home and Payments search-prompt action; selector `home::[data-omd-capture="2"]`.

**Secondary Action**
- Background: `#ffffff`
- Text: `#50617a`
- Border: 0px `#d4dee9`
- Radius: 8px
- Padding: 6px 12px
- Font: 14px / 400 / 20px / operating-system stack
- Hover: `#273951` text with `#95a4ba` border
- Pressed: `#f4f7fa` background with `#3c4f69` text
- Focus: `#f4f7fa` background with `#50617a` text
- Use: Docs home and Payments compact action; selector `home::[data-omd-capture="4"]`.

### Public Docs navigation

**Content Tab**
- Text: `#414552`
- Border: 0px `#414552`
- Radius: 0px
- Padding: 0px
- Font: 14px / 400 / operating-system stack
- State: selected is present as a static ARIA-tab capture; no interaction transition was captured.
- Use: Docs home and Payments content tabs; selectors `home::[data-omd-capture="7"]` and `surface-2::[data-omd-capture="46"]`.

### Scope boundary

The supplied collector records `interactionCount: 0`. Hover, pressed, focus, and selected values above are only the individual static state samples retained in the artifact; no menu, dialog, toast, form-error, disabled, or authenticated-product variant is inferred. Low-confidence card/badge detections and Docs input styling are preserved in verification evidence but not promoted into canonical components.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://docs.stripe.com/ ; https://docs.stripe.com/payments ; https://docs.stripe.com/api ; https://stripe.com/newsroom/information ; https://stripe.com/jobs/culture
**Tier 2 sources:** https://getdesign.md/stripe (independent analysis; no numeric token promoted); https://styles.refero.design/?q=stripe and https://styles.refero.design/style/48e5de76-05d5-4c4e-a269-c7c245b291ec (independent, older marketing-system record)
**Conflicts unresolved:** none

## 5. Layout Principles

The capture supports documentation layout behavior only: Docs body/list text repeats at 14px, API-reference headings at 32px, and repeated gaps cluster at 4px, 6px, 8px, 12px, 16px, and 24px. Tabs, prompts, and compact actions use zero or low-radius chrome. It does not establish public marketing-grid, Dashboard, checkout, or mobile breakpoint rules.

## 6. Depth & Elevation

Captured Docs controls are principally flat. The search prompt and secondary action use white `#ffffff`; their pressed/focused states use `#f4f7fa` and hairline values rather than a documented universal shadow scale. An API-only dark sample has a shadow, but a single route-local control is insufficient to publish an elevation system.

## 7. Do's and Don'ts

### Do

- Keep the captured Docs hierarchy compact: 14px public text/control samples and a 32px API h1 sample.
- Use `#5469d4` for the observed Docs prompt/link treatment and reserve `#533afd` for the captured API-reference accent context.
- Preserve selector/surface boundaries when using the 8px compact actions or zero-radius content tabs.
- Treat Söhne, Source Code Pro, and declared CJK faces according to their evidence class rather than loading a substitute.

### Don't

- Don't apply a marketing purple, gradient, shadow, font, or button treatment to Docs merely because it is associated with Stripe elsewhere.
- Don't claim menu, dialog, toast, error, disabled, or authenticated Dashboard states from this zero-interaction packet.
- Don't render the operating-system stack as though it were a named Stripe typeface.
- Don't turn a low-confidence generic card/badge detection into a reusable component token.

## 8. Responsive Behavior

No mobile viewport or responsive transition was captured. The public Docs routes may be responsive, but this packet supports no breakpoint, collapsed-navigation, or touch-target specification.

## 9. Agent Prompt Guide

For a Docs-local reference implementation, use a white `#ffffff` canvas, `#414552` foreground text, 14px operating-system-stack controls, a `#5469d4` compact prompt action with an 8px radius, and `#d4dee9`/`#95a4ba` hairline states. Do not describe this as Stripe marketing, Dashboard, or checkout styling, and omit any named font specimen unless a future capture supplies computed usage plus FontFace/source corroboration.

## 10. Voice & Tone

Stripe’s operating principles emphasize users first, craft and beauty, urgency and focus, egoless collaboration, talent, and curiosity. Its product-facing public copy can therefore be direct and concrete: state the capability, then the mechanism or next action. The supplied Docs capture supports documentation context but does not itself establish a complete marketing-copy corpus.

| Context | Supported direction |
|---|---|
| Product / Docs | Lead with the operation or capability; keep terminology precise. |
| Action labels | Use short, literal labels that name the next task. |
| Brand narrative | Connect financial infrastructure to what businesses can build, without inventing a product claim. |

## 11. Brand Narrative

Stripe describes itself as a technology company building economic infrastructure for the internet. Its newsroom names Patrick Collison as co-founder and CEO and John Collison as co-founder and president, and says businesses from new startups to public companies use Stripe to accept payments and manage their businesses online. That current, first-party positioning is the basis for this reference; no unsupported origin story, valuation, customer, or historical milestone is added here.

## 12. Principles

1. **Users first.** Work backwards from user needs; a Docs interface should make the next implementation decision easier to locate.
   *UI implication:* preserve direct labels and source provenance instead of decorative ambiguity.
2. **Create with craft and beauty.** Stripe states that careful thought can make work surprisingly great.
   *UI implication:* compact spacing and quiet hierarchy must remain legible, not merely minimal.
3. **Move with urgency and focus.** Speed should not erase the investment that makes later work faster.
   *UI implication:* prefer predictable Docs controls and stable evidence boundaries over speculative variants.
4. **Stay curious.** Stripe describes its work as ongoing learning about businesses and the world.
   *UI implication:* leave unknown font/state fields absent and make a future evidence need explicit.

## 13. Personas

The following are stakeholder groups, not synthetic user-satisfaction claims.

**Developer integrating Stripe.** Needs public Docs and API-reference navigation that exposes exact implementation information without pretending a marketing or Dashboard surface is the same system.

**Business operator evaluating Stripe.** Needs the first-party account of Stripe’s economic-infrastructure role and product breadth; detailed brand claims must remain tied to official context rather than inferred visual tokens.

**Design or documentation contributor.** Needs clear boundaries between current Docs chrome, brand assets, declared fonts, and unobserved product UI so a local reuse does not become a false Stripe clone.

## 14. States

No reusable Docs state matrix is published from this packet. The only retained control-state observations are the search-prompt and secondary-action focus/hover/pressed samples and the static selected tab in §4. Error, loading, success, empty, disabled, menu, dialog, and toast states require a future selector-backed capture.

## 15. Motion & Easing

No motion duration, easing curve, or reduced-motion behavior was measured in the supplied evidence. Omit motion tokens rather than inventing a Stripe motion system.
