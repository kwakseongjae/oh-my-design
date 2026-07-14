---
id: ohouse
name: Ohouse
display_name_kr: 오늘의집
country: KR
category: consumer-tech
homepage: "https://ohou.se/"
primary_color: "#00a1ff"
logo:
  type: favicon
  slug: "https://ohou.se/favicon.ico"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: product, url: "https://ohou.se/", inspected: "2026-07-13" }
    - { id: experts, kind: product, url: "https://ohou.se/experts", inspected: "2026-07-13" }
    - { id: customer-center, kind: support, url: "https://ohou.se/customer_center", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://ohou.se/", captured: "2026-07-13" }
    - { id: experts-live, kind: product-surface, url: "https://ohou.se/experts", captured: "2026-07-13" }
    - { id: customer-live, kind: product-surface, url: "https://ohou.se/customer_center", captured: "2026-07-13" }
    - { id: bucketplace-about, kind: official-doc, url: "https://www.bucketplace.com/en/", captured: "2026-07-13" }
    - { id: pretendard-doc, kind: official-doc, url: "https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md", captured: "2026-07-13" }
    - { id: pretendard-license, kind: license, url: "https://github.com/orioncactus/pretendard/blob/main/LICENSE", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.action": &home { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.foreground": *home
    "tokens.colors.body": *home
    "tokens.colors.muted": *home
    "tokens.colors.canvas": *home
    "tokens.colors.hairline": *home
    "tokens.typography.family.ui": *home
    "tokens.typography.display.size": *home
    "tokens.typography.display.weight": *home
    "tokens.typography.display.lineHeight": *home
    "tokens.typography.display.tracking": *home
    "tokens.typography.display.use": *home
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.tracking": *home
    "tokens.typography.body.use": *home
    "tokens.typography.body-lg.size": *home
    "tokens.typography.body-lg.weight": *home
    "tokens.typography.body-lg.lineHeight": *home
    "tokens.typography.body-lg.tracking": *home
    "tokens.typography.body-lg.use": *home
    "tokens.typography.action.size": *home
    "tokens.typography.action.weight": *home
    "tokens.typography.action.lineHeight": *home
    "tokens.typography.action.tracking": *home
    "tokens.typography.action.use": *home
    "tokens.typography.compact-action.size": *home
    "tokens.typography.compact-action.weight": *home
    "tokens.typography.compact-action.lineHeight": *home
    "tokens.typography.compact-action.tracking": *home
    "tokens.typography.compact-action.use": *home
    "tokens.spacing.xs": *home
    "tokens.spacing.sm": *home
    "tokens.spacing.md": *home
    "tokens.spacing.lg": *home
    "tokens.rounded.square": *home
    "tokens.rounded.sm": *home
    "tokens.rounded.full": *home
    "tokens.shadow.floating": *home
    "tokens.components.product-list-article.type": *home
    "tokens.components.product-list-article.bg": *home
    "tokens.components.product-list-article.fg": *home
    "tokens.components.product-list-article.radius": *home
    "tokens.components.product-list-article.padding": *home
    "tokens.components.product-list-article.font": *home
    "tokens.components.product-list-article.use": *home
tokens:
  source: live-extract
  extracted: "2026-07-13"
  colors:
    action: "#00a1ff"
    foreground: "#2f3438"
    body: "#424242"
    muted: "#828c94"
    canvas: "#ffffff"
    hairline: "#e0e0e0"
  typography:
    family: { ui: "Pretendard Variable" }
    display: { size: 30, weight: 400, lineHeight: 30, tracking: "-0.3px", use: "Observed h1 on the consumer home" }
    body: { size: 15, weight: 400, lineHeight: 15, tracking: "-0.3px", use: "Observed list, card, and text content on the consumer home" }
    body-lg: { size: 16, weight: 400, lineHeight: 24, tracking: "-0.3px", use: "Observed body content on the consumer home" }
    action: { size: 16, weight: 700, lineHeight: 20, tracking: "-0.3px", use: "Observed text action on the consumer home" }
    compact-action: { size: 14, weight: 400, lineHeight: 18, tracking: "-0.3px", use: "Observed compact blue action" }
  spacing: { xs: 6, sm: 12, md: 16, lg: 20 }
  rounded: { square: 0, sm: 4, full: 24 }
  shadow:
    floating: "0 2px 5px rgba(63, 71, 77, 0.15)"
  components:
    product-list-article: { type: card, bg: "transparent", fg: "#424242", radius: 0, padding: "0px", font: "15px / 400 / Pretendard Variable", use: "Observed outer product-list article shell on the consumer home" }
  components_harvested: true
---

# Design System Inspiration of Ohouse (오늘의집)

## 1. Visual Theme & Atmosphere

Ohouse is Bucketplace’s lifestyle service for taking an envisioned life into a real space. Its official account joins user-made home content, a community, commerce, and home-related O2O services; the consumer site snapshot shows the corresponding product expression: image-led commerce and a relatively quiet text-and-control layer. The captured desktop home uses a white canvas, dark neutral copy, a bright blue action color, and compact controls rather than a published visual system. The current corporate story also extends the service beyond online discovery to purchase, installation, offline showrooms, and renovation consultation. This reference therefore records a live product snapshot rather than treating the corporate site or a historic app icon as a token export. ([Bucketplace About](https://www.bucketplace.com/en/))

**Evidence boundary.** Three consumer URLs were captured, but only the home yielded a populated UI tree; `/experts` and `/customer_center` are recorded as product-surface attempts, not a basis for generalising their chrome. No official public design-system or brand-token export was found in this run.

**Observed characteristics:**

- White `#ffffff` control surfaces and dark `#424242` / `#2f3438` body text dominate the populated home capture.
- `#00a1ff` appears as a compact filled action and as a text-action color; it is an observed action role, not an asserted immutable brand color.
- The loaded UI face is `Pretendard Variable`; the home’s computed stack includes declared fallbacks but only the first family is loaded and visibly used.
- The representative product-list articles are visually unframed at their outer element: transparent background, zero radius, and zero padding. Their child composition was not separately measured.
- Captured radii are mostly `0px`, with observed `4px` utility/action corners and a `24px` circular control.

## 2. Color Palette & Roles

The values below are representative computed values from the populated consumer-home capture. They are not a public Ohouse palette and should not be expanded into semantic states without new evidence.

### Observed action and surfaces

- **Action blue** (`#00a1ff`): Filled compact action background; text-action and border color on separate home controls.
- **Canvas white** (`#ffffff`): Filled compact action text and circular control background.
- **Foreground** (`#2f3438`): Outlined utility-control text.
- **Body neutral** (`#424242`): Repeated list, card, badge, and text color.
- **Muted neutral** (`#828c94`): Repeated text color in the home capture.
- **Hairline** (`#e0e0e0`): Observed 1px outline on a utility control.

### Unresolved roles

- No published sale, error, success, hover, pressed, focus, disabled, overlay, or selected-state color was collected.
- `#35c5f0` is not retained as a current token: it was not present in the supplied computed-style evidence, and no first-party token source was found.

## 3. Typography Rules

### Font evidence classes

- **Live computed and loaded product UI:** `Pretendard Variable`. It is the first computed family on 286 captured home elements across headings, body text, cards, buttons, badges, and input; the collector also matched it in `document.fonts` and recorded 92 Ohouse-hosted dynamic-subset sources under `assets.ohou.se`.
- **Official font distribution and license:** Pretendard’s maintainer documents `Pretendard Variable` dynamic subsets and its SIL Open Font License 1.1 terms. This is font-project evidence, not an assertion that Ohouse commissioned or owns the face. ([Pretendard documentation](https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md), [license](https://github.com/orioncactus/pretendard/blob/main/LICENSE))
- **Declared-only fallbacks/assets:** `Noto Sans KR`, `Open Sans`, `FontAwesome`, and `OhouseIcon` have `@font-face` declarations but no visible matched usage in the capture. They are not UI-family tokens.
- **Unresolved:** `Times` appeared on two text elements without a matching loaded FontFace or system mapping; it is not a UI-family token.

### Observed hierarchy

| Role | Family | Size | Weight | Line height | Tracking | Capture scope |
|------|--------|------|--------|-------------|----------|---------------|
| Home h1 | Pretendard Variable | 30px | 400 | 30px | -0.3px | 10 elements, home |
| Body/list/card | Pretendard Variable | 15px | 400 | 15px | -0.3px | 113 combined elements, home |
| Body large | Pretendard Variable | 16px | 400 | 24px | -0.3px | 7 elements, home |
| Body large emphasis | Pretendard Variable | 16px | 700 | 24px | -0.3px | 7 elements, home |
| Text action | Pretendard Variable | 16px | 700 | 20px | -0.3px | 6 elements, home |
| Compact action | Pretendard Variable | 14px | 400 | 18px | -0.3px | 1 element, home |

## 4. Component Stylings

These are only the representative controls directly preserved by the collector. Each use line carries its product-surface selector and no interaction-state variants are claimed because `interactionCount` is `0`.

### Buttons

**Compact blue action**
- Background: `#00a1ff`
- Text: `#ffffff`
- Border: `0px`
- Radius: `4px`
- Padding: `0px 16px`
- Font: `14px / 400 / Pretendard Variable`
- Use: Home `home::[data-omd-capture="9"]`, `button[role="button"]`, 91×40px; one captured occurrence.

**Circular floating control**
- Background: `#ffffff`
- Text: `#ffffff`
- Border: `0px`
- Radius: `24px`
- Padding: `0px`
- Shadow: `0px 2px 5px rgba(63, 71, 77, 0.15)`
- Font: `16px / 700 / Pretendard Variable`
- Use: Home `home::[data-omd-capture="20"]`, `button`, 48×48px; seven captured occurrences. The captured control has no text content.

**Outlined utility control**
- Background: `transparent`
- Text: `#2f3438`
- Border: `1px solid #e0e0e0`
- Radius: `4px`
- Padding: `0px 8px`
- Font: `14px / 400 / Pretendard Variable`
- Use: Home `home::[data-omd-capture="127"]`, `button`, 182×32px; one captured occurrence.

**Text action**
- Background: `transparent`
- Text: `#00a1ff`
- Border: `0px`
- Radius: `0px`
- Font: `16px / 700 / Pretendard Variable`
- Use: Home `home::[data-omd-capture="32"]`, `button`, 41×20px; six captured occurrences.

### Inputs

**Top-navigation text input**
- Background: `transparent`
- Text: `#141414`
- Border: `0px`
- Radius: `0px`
- Font: `14px / 400 / Pretendard Variable`
- Use: Home `home::[data-omd-capture="4"]`, `input[type="text"]`, 255×20px; one captured occurrence.

### Content shells

**Product-list article shell**
- Background: `transparent`
- Text: `#424242`
- Border: `0px`
- Radius: `0px`
- Padding: `0px`
- Font: `15px / 400 / Pretendard Variable`
- Use: Home `home::article.today-deal-item`, representative 269px-wide articles; 4+ captured occurrences. This describes the outer article only, not unmeasured child image, price, badge, or metadata styles.

### Not observed

- No hover, pressed, focus, disabled, validation, dialog, menu, tab, toast, or responsive component state was captured.
- Badge class names were present, but a standalone badge fill/text treatment was not measured with sufficient provenance; no badge variant is specified.

## 5. Layout Principles

The populated home capture provides spacing clusters rather than a documented layout scale: 6px (39 occurrences), 12px (27), 20px (24), 5px (13), and 9px (11). The representative content articles are 269px wide in this 1440×900 desktop capture. No mobile, breakpoint, container, grid, or global-gutter rule is asserted from these data.

## 6. Depth & Elevation

One repeated floating-control shadow was observed: `0px 2px 5px rgba(63, 71, 77, 0.15)`. The outer product-list article has no shadow. No elevation scale, modal shadow, or hover-lift rule was captured.

## 7. Do's and Don'ts

### Do

- Keep the observed action blue (`#00a1ff`) scoped to action treatments unless new product evidence establishes broader use.
- Use `Pretendard Variable` only when its supplied Ohouse-hosted product source can be loaded; do not silently substitute it.
- Preserve the measured outer-card boundary when adapting the home product-list article: transparent, square, and padding-free.

### Don't

- Don't resurrect `#35c5f0` as a current Ohouse token from historic or secondary descriptions.
- Don't convert declared-only font faces into visible UI-family claims.
- Don't invent state variants, badge treatments, price styles, or mobile chrome from the static home capture.

## 8. Responsive Behavior

No responsive sweep was included in the supplied collector evidence. The only measured viewport is 1440×900; responsive behavior is unresolved.

## 9. Agent Prompt Guide

Use a prompt bounded to the evidence, for example: “Create a desktop Ohouse-inspired home-section control using `Pretendard Variable`, white canvas, `#424242` body text, and one 91×40px `#00a1ff` action with 4px radius. Do not infer hover or mobile behavior.” Do not request a complete Ohouse design system from this snapshot.

## 10. Voice & Tone

Bucketplace describes Ohouse in practical, aspirational language: it helps people make the everyday life they envision real within a space, through content, community, commerce, and related services. The official team-culture page pairs that customer outcome with “Customer’s O! Moment,” growth, excellence, and long-term ownership. These are company statements; they do not establish UI microcopy samples or a formal content-style guide. ([About](https://www.bucketplace.com/en/), [Team culture](https://www.bucketplace.com/en/team-culture/))

## 11. Brand Narrative

Bucketplace was incorporated in 2014 and launched Ohouse Store in 2016. Its current first-party account frames Ohouse as an integrated lifestyle service: people encounter real-user content, connect through a community, discover products, and can continue into home-remodeling, moving, cleaning, installation, and consultation services. The company’s own timeline records expansion from the store to O2O remodeling, its original brand Ohouse layer, the Ohouse Bukchon showroom, Ohouse Kitchen, and the Ohouse Interior Pangyo Lounge. ([Bucketplace About](https://www.bucketplace.com/en/))

The visual reference should therefore keep its claims at two distinct levels: the product snapshot above is live consumer-web evidence, while the service arc and mission are corporate context. The corporate presentation does not publish a corresponding public component library, token set, or interaction specification.

## 12. Principles

1. **Connect inspiration to action.** Ohouse says it connects inspiring user content and community to commerce so people can bring ideas to life. *UI implication:* Preserve the relationship between discovered content and the next practical action; do not claim a particular card or interaction pattern unless observed. ([About](https://www.bucketplace.com/en/))
2. **Serve the whole space journey.** The official service description includes purchase, installation, renovation, moving, cleaning, and consultation. *UI implication:* Treat these as distinct service contexts rather than collapsing them into an unsupported marketplace-only UI. ([About](https://www.bucketplace.com/en/))
3. **Aim for a meaningful customer change.** The team-culture page defines the “O! Moment” as a positive, meaningful change in a customer’s life. *UI implication:* This is a product principle, not evidence for a specific color, animation, or copy treatment. ([Team culture](https://www.bucketplace.com/en/team-culture/))

## 13. Personas

The first-party material identifies stakeholder groups rather than individual user personas:

- **People sharing a home or everyday-life story:** official user content is described as a source of inspiration for others.
- **People discovering and purchasing products for a space:** commerce is described as connecting product discovery, shopping, and delivery.
- **People undertaking a space-related service:** official scope includes remodeling, moving, cleaning, installation, and consultation.

No age, location, frequency, preference, or conversion behavior is assigned to these groups without product research.

## 14. States

The collector recorded no interaction expansions or state transitions (`interactionKinds: 0`, `interactionCount: 0`). Empty, loading, error, success, disabled, and validation treatments are unresolved and intentionally omitted rather than reconstructed from generic commerce patterns.

## 15. Motion & Easing

No timing, easing, reduced-motion behavior, or animated-state evidence was collected. Motion guidance is unresolved.

---

**Verified:** 2026-07-13
**Tier 1 sources:** `https://ohou.se/` (populated consumer product surface, supplied collector); `https://ohou.se/experts` and `https://ohou.se/customer_center` (product-surface attempts, no populated UI tree); `https://www.bucketplace.com/en/` (official company/service context); `https://www.bucketplace.com/en/team-culture/` (official principles/culture); `https://github.com/orioncactus/pretendard/` (official font documentation and license).
**Tier 2 sources:** `https://getdesign.md/ohouse` and `https://styles.refero.design/?q=ohouse` were both attempted on 2026-07-13; the built-in fetch returned an internal error for each, so neither supplied a cross-check record.
The earlier `#35c5f0` and inferred semantic, state, layout, and motion claims were resolved by removing them because the supplied evidence did not corroborate them.

**Conflicts unresolved:** none
