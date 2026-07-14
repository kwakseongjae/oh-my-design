---
id: "hyundaicard"
name: "Hyundai Card"
country: KR
category: fintech
homepage: "https://www.hyundaicard.com"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://newsroom.hyundaicard.com/images/favicon.ico"
verified: "2026-07-13"
omd: "0.1"
ds:
  name: Hyundai Card Design Library
  url: "https://newsroom.hyundaicard.com/front/board/Hyundai-Card-Design-Library?country=en"
  type: brand
  description: A Hyundai Card cultural space, not a public component design-system specification.
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: product, url: "https://www.hyundaicard.com/index.jsp", inspected: "2026-07-13" }
    - { id: corporate-ceh, kind: corporate-information, url: "https://www.hyundaicard.com/about/ceh/ho/cehho0101_01.hc", inspected: "2026-07-13" }
    - { id: corporate-ckh, kind: corporate-information, url: "https://www.hyundaicard.com/about/ckh/ho/ckhho0101_01.hc", inspected: "2026-07-13" }
  sources:
    - { id: collector-home, kind: product-surface, url: "https://www.hyundaicard.com/index.jsp", captured: "2026-07-13" }
    - { id: collector-ceh, kind: product-surface, url: "https://www.hyundaicard.com/about/ceh/ho/cehho0101_01.hc", captured: "2026-07-13" }
    - { id: collector-ckh, kind: product-surface, url: "https://www.hyundaicard.com/about/ckh/ho/ckhho0101_01.hc", captured: "2026-07-13" }
    - { id: youandi-official, kind: official-doc, url: "https://newsroom.hyundaicard.com/front/board/Hyundai-Card-branding-through-typeface?country=en", captured: "2026-07-13" }
  claims:
    "tokens.colors.ink": &home { surface_id: home, source_id: collector-home, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.canvas": *home
    "tokens.colors.inverse": &corporate { surface_id: corporate-ceh, source_id: collector-ceh, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.link-product": *home
    "tokens.colors.link-corporate": *corporate
    "tokens.typography.family.sans": &font { surface_id: home, source_id: collector-home, method: computed-style-fontfaceset-source, captured: "2026-07-13" }
    "tokens.typography.hero.size": *font
    "tokens.typography.hero.weight": *font
    "tokens.typography.hero.lineHeight": *font
    "tokens.typography.hero.use": *font
    "tokens.typography.corporate-hero.size": *corporate
    "tokens.typography.corporate-hero.weight": *corporate
    "tokens.typography.corporate-hero.lineHeight": *corporate
    "tokens.typography.corporate-hero.use": *corporate
    "tokens.typography.nav.size": *font
    "tokens.typography.nav.weight": *font
    "tokens.typography.nav.lineHeight": *font
    "tokens.typography.nav.use": *font
    "tokens.typography.card-title.size": *home
    "tokens.typography.card-title.weight": *home
    "tokens.typography.card-title.lineHeight": *home
    "tokens.typography.card-title.use": *home
    "tokens.spacing.nav-inline": *font
    "tokens.spacing.corporate-action-inline": *corporate
    "tokens.rounded.corporate-outline-action": *corporate
    "tokens.rounded.carousel-control": *home
    "tokens.shadow.flat": *home
    "tokens.components.product-card-link.type": *home
    "tokens.components.product-card-link.fg": *home
    "tokens.components.product-card-link.font": *home
    "tokens.components.product-card-link.use": *home
  conflicts: []
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Current product home and corporate-information surfaces are separate from DIVE, marketing, and unobserved interaction states."
  colors:
    ink: "#000000"
    canvas: "#ffffff"
    inverse: "#ffffff"
    link-product: "#0070f0"
    link-corporate: "#1e75d6"
  typography:
    family: { sans: "YouandiNewKr" }
    hero: { size: 40, weight: 600, lineHeight: 52, use: "Product-home h2 headings" }
    corporate-hero: { size: 54, weight: 700, lineHeight: 80, use: "Corporate-information h2 headings on the two captured routes" }
    nav: { size: 18, weight: 500, lineHeight: 26, use: "Product-home second-level navigation links" }
    card-title: { size: 16, weight: 500, lineHeight: 22, use: "Product-card title labels" }
  spacing:
    nav-inline: 20
    corporate-action-inline: 29
  rounded:
    corporate-outline-action: 3
    carousel-control: 5
  shadow:
    flat: "none"
  components:
    product-card-link: { type: card, fg: "#000000", font: "16px / 400 / platform system stack", use: "Product-home card link; transparent, borderless default" }
  components_harvested: true
---
# Design System Inspiration of Hyundai Card

## 1. Visual Theme & Atmosphere

Hyundai Card is a Korean credit-card company whose identity reaches beyond payment products into card design, cultural programming, and branded libraries. Its most recognizable visual asset is Youandi: the company introduced the proprietary typeface in 2003, then renewed it as YouandiNew for contemporary digital media. Hyundai Card’s own account places the card plate’s proportions inside the letterforms, treating type as a carrier of brand identity rather than as a decorative layer. That history is visible on the current captured product home, where loaded YouandiNewKr leads product headings and navigation, while the corporate-information routes use a larger white-on-dark display treatment. The live product routes are not a uniform monochrome system: black and white form the common base, but their product and corporate links use distinct blue values. DIVE, the Design Library, and other cultural/marketing surfaces are meaningful brand context, but were not used to fill product tokens in this reference.

## 2. Color Palette & Roles

The three supplied current captures share black text and white page fields. Two blue link treatments are surface-specific, so neither is promoted as a universal brand primary.

| Role | Value | Usage and evidence boundary |
| --- | --- | --- |
| Ink | #000000 | Current product home and both corporate-information routes; text and border observations |
| Canvas | #FFFFFF | Current captured surface background observations |
| Inverse text | #FFFFFF | Corporate-information hero/action context; not a global text token |
| Product link | #0070F0 | Product-home detail links only |
| Corporate link | #1E75D6 | Corporate-information links only |

The prior DIVE-only red and green content tags are omitted: they were not observed in this product/corporate packet and cannot describe the current product token set.

## 3. Typography Rules

**Official product-use.** Hyundai Card says that it has used Youandi for product branding and official company documents since 2003; the 2021 renewal, YouandiNew, was designed for digital environments, readability, Korean/English balance, and variable-font use. The official account describes it as a proprietary corporate typeface, not a public web-font distribution or open-license announcement.

**Live computed surface-use.** `YouandiNewKr` is the only verified branded family in this packet: it is the computed family on 60 visible heading, navigation, and text observations, has a loaded FontFace match, and resolves to Hyundai Card-hosted `YouandiNewKrTitle` font files. The product home uses 40px/600/52px `h2` headings and 18px/500/26px second-level links; the two corporate-information pages use 54px/700/80px `h2` headings.

**System use.** A platform stack is the first computed family on 351 ordinary body, card, button, and text observations. It is an observed runtime fallback/utility stack, not a substitute rendering of YouandiNewKr and not a brand-font claim. Product-card labels are observed at 16px/500/22px in that stack.

**Declared-only assets.** `Spoqa Han Sans Neo`, `YouandiModernHEB`, `YouandiModernTR`, and `YouandModern` have `@font-face` source declarations in the capture but no visible first-family usage. They remain declared-only. A password-input face named `pass` is loaded for two inputs and is not a brand type token.

**License boundary.** The official font history establishes Hyundai Card’s ownership and internal product/document use. No public redistribution license or browser-consumable licensing terms were found in the official sources consulted; do not infer permission to ship the font outside its supplied Hyundai Card sources.

## 4. Component Stylings

### Product-home navigation link

**Second-level link**
- Background: transparent
- Text: #000000
- Border: none
- Radius: 0px
- Padding: 0px 20px
- Font: 18px / 500 / YouandiNewKr
- Use: `home::[data-omd-capture="1"–"7"]` static second-level navigation links on the product home

### Product-card link

**Default**
- Background: transparent
- Text: #000000
- Border: none
- Radius: 0px
- Font: 16px / 400 / platform system stack
- Use: `home::[data-omd-capture="55"–"84"]` product-card links; only the default was captured

### Corporate-information action

**Outline action**
- Background: transparent
- Text: #FFFFFF
- Border: 1px solid rgba(255,255,255,0.6)
- Radius: 3px
- Padding: 0px 29px
- Font: 16px / 400 / platform system stack
- Use: `surface-2::[data-omd-capture="11"]` and `surface-3::[data-omd-capture="12"]`; corporate-information routes only

No hover, focus, pressed, disabled, error, menu, dialog, or toast state is included: the supplied collector reports zero interaction expansions and zero observed states.

## 5. Layout Principles

The captured product home establishes hierarchy through a 40px YouandiNewKr heading, 18px second-level navigation, and transparent product-card links rather than a documented card-container recipe. Corporate-information routes use a separate 54px inverse hero and compact 3px outline action. Treat those as surface-specific compositions; there is no captured evidence for a shared responsive grid, spacing scale, or universal card treatment.

## 6. Depth & Elevation

The captured representatives report `box-shadow: none`. This supports a flat default for the retained components only. It does not establish that Hyundai Card never uses shadows, gradients, or elevation on other product, marketing, or native-app surfaces.

## 7. Do's and Don'ts

### Do

- Use YouandiNewKr only when it is licensed and actually available from Hyundai Card-controlled sources.
- Preserve the product/corporate split: black-and-white foundation, product link #0070F0, corporate link #1E75D6.
- Keep the observed product navigation and card links transparent and borderless.
- Use the 3px corporate outline action only for the corporate-information context from which it was measured.

### Don't

- Treat DIVE tag colors or Design Library visuals as current payment-product tokens.
- Replace unavailable YouandiNewKr with a system face while labeling it Youandi.
- Generalize the corporate white outline action into a product-home primary button.
- Invent interaction states, motion, a spacing scale, or component variants absent from the capture.

## 8. Responsive Behavior

The supplied evidence is desktop-only at 1440×900. It establishes typography and default component values on the listed routes, not a responsive contract. Preserve the surface split and remeasure at target breakpoints before assigning mobile dimensions, stacking behavior, or touch states.

## 9. Agent Prompt Guide

When using the verified current Hyundai Card web cues, prompt for a restrained black-and-white base with surface-local blue links, not a generic monochrome luxury system. Use licensed YouandiNewKr for verified display/nav moments only; otherwise keep the observed platform stack honestly labeled. On a product-home composition, use transparent 18px/500 YouandiNewKr second-level links with 20px inline padding and transparent product-card links. Do not import DIVE category tags, a 48px pill, Noto Sans KR, or any invented state behavior. Keep the 54px inverse corporate hero and 3px white outline action confined to corporate-information-like contexts.

## 10. Voice & Tone

The official materials frame Hyundai Card as a financial company that has deliberately built a wider culture-and-design practice through its branded spaces, card plates, and typeface. The usable voice is therefore precise, design-literate, and concrete rather than “luxury” by default.

| Do | Don't |
| --- | --- |
| Describe a specific product, design choice, or cultural program plainly. | Claim an unmeasured visual rule as a universal brand mandate. |
| Let Youandi’s card-derived construction carry a factual brand story. | Use vague premium language in place of evidence. |
| Keep product and cultural surfaces named and separated. | Fold DIVE or library material into payment-product UI claims. |

## 11. Brand Narrative

Hyundai Card pairs credit-card products with a long-running cultural and design program. Its official company overview describes a current move toward a technology-company identity while continuing the cultural work expressed through libraries, performance programs, branded spaces, card plates, and Youandi. That makes the company’s visual story broader than one web page or one card campaign.

Youandi is the clearest continuity thread. Hyundai Card developed the first version in 2003; its official account says the original letterforms drew from the physical shape and proportions of a card. The 2021 YouandiNew renewal rebuilt that asset for evolving digital media, expanded its range, and added variable-font capability. The current web capture corroborates that the newer family is not merely historical: `YouandiNewKr` is loaded and visible on current product and corporate headings.

## 12. Principles

1. **Build identity into useful assets.** Youandi is presented as a brand asset used in product branding and official documents.
   *UI implication:* preserve the verified family distinction instead of approximating it with a system font.
2. **Let the product and the cultural program remain distinct evidence domains.** The company’s libraries and DIVE expand brand context, but they are not product-component documentation.
   *UI implication:* do not transfer their colors or patterns into payment-product tokens without direct proof.
3. **Use surface-local rules.** The current product home and corporate-information routes intentionally expose different link and inverse-action treatments.
   *UI implication:* name a component’s source surface before reusing its geometry or colors.

## 13. Personas

These are service-context archetypes, not claims about private user research.

- **Card product visitor** — needs a product route whose navigation, cards, and links remain clear without relying on cultural-site styling.
- **Corporate-information reader** — encounters a high-contrast informational hero and outline action on Hyundai Card’s company pages.
- **Culture-program visitor** — may meet DIVE or a Hyundai Card library; that context can inform brand understanding but must not be mistaken for payment-product UI evidence.

## 14. States

The packet captured default styles only. It reports `interactionCount: 0`, `interactionKinds: 0`, and `observedStates: 0`; no state token is published. Reinspect the relevant live surface before specifying any of the following:

| Category | Status |
| --- | --- |
| Default | Observed only for the three §4 component defaults |
| Hover | Not observed |
| Focus | Not observed |
| Pressed | Not observed |
| Disabled | Not observed |
| Error | Not observed |
| Loading | Not observed |
| Success | Not observed |
| Empty | Not observed |
| Skeleton | Not observed |

## 15. Motion & Easing

No transition duration, easing curve, or motion state was observed in the supplied capture. Do not derive motion guidance from the flat default component styles; retain motion as unresolved until a relevant live surface is measured.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.hyundaicard.com/index.jsp (current product home, supplied computed-style capture), https://www.hyundaicard.com/about/ceh/ho/cehho0101_01.hc and https://www.hyundaicard.com/about/ckh/ho/ckhho0101_01.hc (current corporate-information routes, supplied capture), https://newsroom.hyundaicard.com/front/board/Hyundai-Card-branding-through-typeface?country=en (official Youandi/YouandiNew history and product-use context), https://img.hyundaicard.com/about/common/en/pageView.hc?id=ceabi0201_01 (official company overview), https://newsroom.hyundaicard.com/front/board/Hyundai-Card-Design-Library?country=en (official cultural/design context; not token evidence)
**Tier 2 sources:** https://getdesign.md/hyundaicard (attempted; built-in fetch path rejected the direct URL and search yielded no importable record), https://styles.refero.design/?q=Hyundai%20Card (attempted; built-in fetch path rejected the direct URL and search yielded no importable record). No Tier 2 values were promoted.
**Resolution note:** Prior DIVE-only palette, Noto Sans KR body, 26px heading, 24px/48px pill, category tags, and interaction guidance were removed because this packet did not corroborate them on current product/corporate routes.
**Conflicts unresolved:** none
**Proof:** see .verification.md (## Proof — Tier 1 live inspect)
