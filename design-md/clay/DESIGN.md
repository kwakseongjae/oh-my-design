---
id: clay
name: Clay
country: US
category: design-tools
homepage: "https://www.clay.com"
primary_color: "#000000"
logo:
  type: github
  slug: clay-run
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.clay.com/", inspected: "2026-07-13" }
    - { id: surface-2, kind: marketing, url: "https://www.clay.com/partners/solutions", inspected: "2026-07-13" }
    - { id: surface-3, kind: marketing, url: "https://www.clay.com/pricing", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.clay.com/", captured: "2026-07-13" }
    - { id: partners-live, kind: product-surface, url: "https://www.clay.com/partners/solutions", captured: "2026-07-13" }
    - { id: pricing-live, kind: product-surface, url: "https://www.clay.com/pricing", captured: "2026-07-13" }
    - { id: roobert-license, kind: license, url: "https://displaay.net/help/licenses", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.canvas": &home { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.ink": *home
    "tokens.colors.oat-action": *home
    "tokens.colors.nav-muted": *home
    "tokens.colors.tab-default": *home
    "tokens.colors.tab-active": *home
    "tokens.typography.family.ui": *home
    "tokens.typography.compact-action.size": *home
    "tokens.typography.compact-action.weight": *home
    "tokens.typography.compact-action.lineHeight": *home
    "tokens.typography.compact-action.tracking": *home
    "tokens.typography.compact-action.use": *home
    "tokens.spacing.action-y": *home
    "tokens.spacing.action-x": *home
    "tokens.rounded.action": *home
    "tokens.rounded.tab": *home
    "tokens.rounded.logo-card": *home
    "tokens.components.logo-card.type": *home
    "tokens.components.logo-card.bg": *home
    "tokens.components.logo-card.radius": *home
    "tokens.components.logo-card.padding": *home
    "tokens.components.logo-card.use": *home
tokens:
  source: live-extract
  extracted: "2026-07-13"
  components_harvested: false
  colors:
    canvas: "#fefdfb"
    ink: "#000000"
    oat-action: "#f3f2ed"
    nav-muted: "#79756d"
    tab-default: "#f4f3f0"
    tab-active: "#aaebfd"
  typography:
    family: { ui: "Roobertvf" }
    compact-action: { size: 13.92, weight: 500, lineHeight: 20.88, tracking: -0.1392, use: "Compact public-marketing header action" }
  spacing: { action-y: 8, action-x: 16 }
  rounded: { action: 12, tab: 12, logo-card: 18 }
  components:
    logo-card: { type: card, bg: "#fefdfb", radius: "18px", padding: "16px 20px", use: "Customer-logo card on the public home marketing surface" }
---

# Clay — Design Reference

## 1. Visual Theme & Atmosphere

Clay is a go-to-market infrastructure company for teams that build revenue systems from data, agents, orchestration, execution, and governance. Its current public homepage frames that work as infrastructure rather than a single enrichment tool, while Clay’s own account of the 2026 redesign says the old page no longer represented the breadth of the product. The captured public pages answer that technical story with a light, almost paper-white field, black type and actions, rounded compact controls, and unusually cheerful color moments in tabs, cards, and pricing. Clay describes the intended tension directly: make infrastructure and engineering feel fun and creative. This reference is deliberately bounded to the three captured public marketing pages—home, partner solutions, and pricing. It does not generalize their visual system into the authenticated product or documentation chrome, neither of which was supplied as evidence.

- **Crisp neutral base:** the most repeated visible pair is `#fefdfb` and `#000000`, rather than a broad semantic application palette.
- **Playful local accents:** `#aaebfd` is an observed active tab fill; pricing and partner cards introduce additional local colors without establishing a global app-color scale.
- **Soft geometry:** small actions and tabs are 12px-rounded; a home customer-logo card is 18px-rounded.
- **System-plus-illustration story:** Clay’s first-party redesign account describes a playful Rube Goldberg visual for an interconnected GTM system; that is brand context, not a token claim.

## 2. Color Palette & Roles

### Observed public-marketing roles

- **Paper canvas** (`#fefdfb`): home customer-logo card fill (`home::div.logo-card`); it is an observed card surface, not a claim about an authenticated app canvas.
- **Ink** (`#000000`): body, navigation, and the compact dark header action across all three captured pages.
- **Oat action** (`#f3f2ed`): compact light header action on home, partner-solutions, and pricing.
- **Muted navigation label** (`#79756d`): home navigation-content label text.
- **Default tab fill** (`#f4f3f0`): home `.tab-btn` default.
- **Active tab fill** (`#aaebfd`): home `.tab-btn.cc-active`.

Other bright surfaces appear in the bundle—for example partner testimonial fills and pricing-plan colors—but each is local to its observed component. They are not promoted to a universal status or product palette.

## 3. Typography Rules

### Evidence classes

- **Live computed public-web use:** visible text on the three captured marketing pages resolves to `Roobertvf, Arial, sans-serif`. The collector reports `Roobertvf` as loaded with high confidence, 1,564 visible uses, and two Clay-hosted WOFF2 sources. It is the sole machine UI-family token here because computed usage, FontFaceSet status, and source URLs agree.
- **Official foundry and licence context:** Displaay identifies Roobert as a mono-linear geometric sans with variable weight, slant, and mono axes. Its web licence covers WOFF/WOFF2 use through `@font-face`; that licence describes the foundry’s terms, not a reusable Clay asset licence.
- **Declared-only families:** Canela, Canela Web, Inter, Roobert (static family name), Roobert mono, Space Mono, Phosphor, and Webflow icon faces appear in declarations, but the supplied collector found no visible loaded use for them. They remain declared-only and are not substituted or promoted to UI tokens.
- **Unobserved domains:** no authenticated product surface or documentation chrome was captured, so this reference makes no product-font or docs-font claim.

### Measured public-marketing hierarchy

| Role | Font | Size | Weight | Line height | Tracking | Evidence boundary |
|---|---|---:|---:|---:|---:|---|
| Compact header action | Roobertvf | 13.92px | 500 | 20.88px | -0.1392px | `home::[data-omd-capture="9"]` and `"10"` |
| Tab control | Roobertvf | 16px | 500 | 24px | normal | `home::[data-omd-capture="116"]` |
| Logo card text context | Roobertvf | 16px | 400 | 24px | normal | `home::div.logo-card` |

## 4. Components

All variants below are public-marketing observations. Selectors, surface IDs, and pseudo-state snapshots are retained so that the values are not mistaken for a general Clay product component library. The bundle reports `interactionCount: 0`; pseudo-state values are visual snapshots, not evidence of motion, transition timing, or a full interaction contract.

### Header action

**Dark compact action**
- Background: `#000000`
- Text: `#ffffff`
- Border: `1px solid transparent`
- Radius: `12px`
- Padding: `8px 16px`
- Font: `13.92px / 500 / Roobertvf`
- Use: compact public header action on `home`, `surface-2`, and `surface-3`; default evidence `home::[data-omd-capture="10"]`
- Pressed: `rgb(9, 10, 12)` background at `home::[data-omd-capture="10"]::state-pressed`
- Focus: `rgb(2, 2, 2)` background at `home::[data-omd-capture="10"]::state-focus`

**Oat compact action**
- Background: `#f3f2ed`
- Text: `#000000`
- Border: `1px solid transparent`
- Radius: `12px`
- Padding: `8px 16px`
- Font: `13.92px / 500 / Roobertvf`
- Use: paired compact public header action; default evidence `home::[data-omd-capture="9"]`
- Hover: `rgb(237, 234, 227)` background at `home::[data-omd-capture="9"]::state-hover`
- Pressed: `rgb(233, 229, 221)` background at `home::[data-omd-capture="9"]::state-pressed`
- Focus: `rgb(242, 241, 236)` background at `home::[data-omd-capture="9"]::state-focus`

### Marketing tab

**Default**
- Background: `#f4f3f0`
- Text: `#1b1a18`
- Radius: `12px`
- Padding: `10px 16px`
- Font: `16px / 500 / Roobertvf`
- Use: public home tab; evidence `home::[data-omd-capture="116"]`

**Active color variant**
- Background: `#aaebfd`
- Text: `#1b1a18`
- Radius: `12px`
- Padding: `10px 16px`
- Font: `16px / 500 / Roobertvf`
- Use: active public home tab; evidence `home::[data-omd-capture="123"]`

### Customer-logo card

**Default**
- Background: `#fefdfb`
- Border: `1px 0px solid` with observed mixed border colors
- Radius: `18px`
- Padding: `16px 20px`
- Font: `16px / 400 / Roobertvf`
- Use: customer-logo card on the public home page; evidence `home::div.logo-card`

### Pricing select

**Default**
- Background: `#ffffff`
- Border: `1px solid #d1cdc7`
- Radius: `8px`
- Padding: `12px 16px 12px 40px`
- Font: `14px / 400 / Roobertvf`
- Use: pricing-page select; evidence `surface-3::[data-omd-capture="104"]`
- Disabled: `rgb(244, 243, 240)` background at `surface-3::[data-omd-capture="100"]`

---

**Verified:** 2026-07-13
**Tier 1 sources:** `https://www.clay.com/` (public marketing), `https://www.clay.com/partners/solutions` (public marketing), `https://www.clay.com/pricing` (public marketing), `https://www.clay.com/blog/new-homepage-2026` (official positioning and design context), `https://displaay.net/typeface/roobert` and `https://displaay.net/help/licenses` (font and licence context)
**Tier 2 sources:** `https://getdesign.md/clay` (record exists but identifies an unrelated creative agency; no Clay GTM token value used), `https://styles.refero.design/?q=Clay` (attempted; safe open returned an internal error, no usable record)
**Conflicts unresolved:** none

## 5. Layout Principles

- **Header controls:** the repeated compact header pair uses 8px vertical and 16px horizontal padding at the captured 1440×900 viewport.
- **Local grouping:** observed home tabs use 10px 16px padding; logo cards use 16px 20px. No site-wide spacing scale is asserted from those local values.
- **Bounded scope:** the supplied capture has one desktop viewport. It does not establish responsive breakpoints, authenticated-product tables, or documentation layouts.

## 6. Depth & Elevation

The captured customer-logo card, tabs, and header actions report `boxShadow: none`. No reusable elevation ladder or shadow token is established. Color, border treatment, and corner radius—not shadow—carry the observed separation on these public surfaces.

## 7. Do's and Don'ts

### Do

- Keep the public-marketing neutral base (`#fefdfb`, `#000000`, and oat action `#f3f2ed`) crisp and legible.
- Treat bright tab, partner, and pricing colors as local story accents unless another surface verifies a broader role.
- Use the measured 12px compact-action and tab corners only in the public contexts documented above.
- Preserve Roobertvf as the observed web family; disclose unavailable or declared-only faces rather than substituting them.

### Don't

- Do not apply public marketing colors or components to Clay’s authenticated product without product-surface evidence.
- Do not turn the recorded pseudo-state snapshots into claims about animation, focus-ring behavior, or accessibility support.
- Do not promote Canela, Inter, Space Mono, or Roobert Mono from declarations to live UI fonts without a computed loaded-use match.
- Do not infer mobile breakpoints or a universal card radius from the single captured viewport.

## 8. Responsive Behavior

Only a 1440×900 desktop capture was supplied. The public pages may of course be responsive, but no breakpoint, reflow, touch-target, or mobile-navigation behavior is recorded here.

## 9. Agent Prompt Guide

Use this reference for a Clay-like **public GTM-infrastructure marketing moment**, not as a clone of Clay’s authenticated application: paper-white cards, black compact calls to action, 12px control corners, and one locally meaningful bright tab or plan accent. Keep the typography to the observed Roobertvf web family only when it is actually available and licensed for the target project; otherwise leave the family unresolved rather than presenting a substitute as Roobert.

## 10. Voice & Tone

Clay’s official redesign account balances systems language with creative explanation: data, agents, orchestration, execution, and governance are presented as connected building blocks rather than opaque AI magic. The same post describes the desired brand world as playful, expansive, creative, and precise. That is useful public-marketing guidance; it is not a documented product-error-copy system.

| Context | Observed direction |
|---|---|
| Positioning | State the infrastructure and the outcome plainly. |
| Explanation | Name the building blocks and show their relationship. |
| Brand story | Pair technical clarity with a playful visual metaphor. |

**Official wording samples**
- *“Clay is the infrastructure GTM engineers build on.”* — official homepage-relaunch account.
- *“Data” / “Agents” / “Orchestration” / “Execution” / “Governance”* — five official primitives.
- *“fun and creative”* — Clay’s stated design challenge for the infrastructure story.

## 11. Brand Narrative

Clay’s official 2026 homepage account says the prior site primarily represented a data-enrichment product and no longer reflected the breadth of the current offer. The new public position is GTM infrastructure: teams combine data, agents, orchestration, execution, and governance to build their own revenue systems. Clay explains the visual transition as continuity rather than a reset, using a Rube Goldberg machine to make an interconnected engineered system feel playful and understandable. The source is a first-party marketing narrative; it does not establish unobserved product-interface rules or historical company facts beyond that account.

## 12. Principles

1. **Systems over a single feature.** Clay’s published five-primitives framing connects data through governance. *Reference UI implication:* explain relationships and flow before decorating isolated widgets.
2. **Customer-specific building blocks.** Clay says each GTM system looks different. *Reference UI implication:* favor composable examples over a one-size-fits-all outcome claim.
3. **Technical clarity with play.** Clay describes the challenge of making infrastructure fun and creative. *Reference UI implication:* use an intentional, concrete visual metaphor only when it clarifies the system.

The UI implications are this reference’s interpretation of official positioning, not published Clay product principles.

## 13. Personas

No named or fictional personas are asserted. First-party positioning identifies GTM engineers and GTM leaders as the public audience for systems built from the five primitives; its examples span revenue-critical work such as RevOps, growth, customer success, and data-oriented operations. This is an audience boundary, not a substitute for Clay’s user research.

## 14. States

No authenticated product, empty, loading, success, or error-state surface was captured. The only state evidence retained in §4 is the collector’s public-marketing pseudo-state snapshots for the header actions and the pricing select; it must not be extrapolated into application-state guidance.

## 15. Motion & Easing

The evidence bundle contains no observed interaction actions (`interactionCount: 0`) and no measured transition or easing values. Although pseudo-state snapshots exist for some public actions, no motion token, duration, or reduced-motion rule is established.
