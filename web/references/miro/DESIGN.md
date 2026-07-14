---
id: miro
name: Miro
country: US
category: design-tools
homepage: "https://miro.com"
primary_color: "#fde050"
logo:
  type: simpleicons
  slug: miro
verified: "2026-07-13"
omd: "0.1"
ds:
  name: Mirotone
  url: "https://www.mirotone.xyz"
  type: system
  description: Miro's base CSS component library for applications on the Miro platform.
  og_image: "https://www.mirotone.xyz/cover.png"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: public-marketing, url: "https://miro.com/ko/", inspected: "2026-07-13" }
    - { id: pricing-desktop, kind: public-pricing, url: "https://miro.com/ko/pricing/", inspected: "2026-07-13" }
    - { id: pricing-repeat, kind: public-pricing-repeat, url: "https://miro.com/ko/pricing/", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://miro.com/ko/", captured: "2026-07-13" }
    - { id: pricing-live, kind: product-surface, url: "https://miro.com/ko/pricing/", captured: "2026-07-13" }
    - { id: miro-about, kind: official-doc, url: "https://miro.com/about/", captured: "2026-07-13" }
    - { id: miro-aura, kind: brand-asset, url: "https://miro.com/aura/", captured: "2026-07-13" }
    - { id: miro-identity, kind: brand-asset, url: "https://miro.com/blog/miro-vis/", captured: "2026-07-13" }
    - { id: mirotone-docs, kind: official-doc, url: "https://developers.miro.com/docs/design-guidelines", captured: "2026-07-13" }
    - { id: roobert-foundry, kind: brand-asset, url: "https://displaay.net/typeface/roobert", captured: "2026-07-13" }
    - { id: roobert-license, kind: license, url: "https://displaay.net/help/licenses", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.brand-yellow": &home_live { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.action-blue": &pricing_live { surface_id: pricing-desktop, source_id: pricing-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.action-blue-border": *pricing_live
    "tokens.colors.ink": *home_live
    "tokens.colors.canvas": *pricing_live
    "tokens.colors.border-input": *home_live
    "tokens.colors.border-control": *pricing_live
    "tokens.colors.border-subtle": *pricing_live
    "tokens.colors.muted": *pricing_live
    "tokens.typography.family.ui": &font_live { surface_id: home, source_id: home-live, method: computed-style-fontfaceset-and-source-url, captured: "2026-07-13" }
    "tokens.typography.family.display": *font_live
    "tokens.typography.display-hero.size": *font_live
    "tokens.typography.display-hero.weight": *font_live
    "tokens.typography.display-hero.lineHeight": *font_live
    "tokens.typography.display-hero.tracking": *font_live
    "tokens.typography.display-hero.use": *font_live
    "tokens.typography.display-section.size": *font_live
    "tokens.typography.display-section.weight": *font_live
    "tokens.typography.display-section.lineHeight": *font_live
    "tokens.typography.display-section.tracking": *font_live
    "tokens.typography.display-section.use": *font_live
    "tokens.typography.body.size": *pricing_live
    "tokens.typography.body.weight": *pricing_live
    "tokens.typography.body.lineHeight": *pricing_live
    "tokens.typography.body.use": *pricing_live
    "tokens.typography.action.size": *pricing_live
    "tokens.typography.action.weight": *pricing_live
    "tokens.typography.action.lineHeight": *pricing_live
    "tokens.typography.action.use": *pricing_live
    "tokens.spacing.xs": *home_live
    "tokens.spacing.sm": *home_live
    "tokens.spacing.md": *home_live
    "tokens.spacing.lg": *home_live
    "tokens.spacing.xl": *home_live
    "tokens.spacing.xxl": *home_live
    "tokens.rounded.control": *pricing_live
    "tokens.rounded.segmented": *pricing_live
    "tokens.components.pricing-period-toggle.type": &toggle { surface_id: pricing-desktop, source_id: pricing-live, method: computed-style-and-observed-state, captured: "2026-07-13" }
    "tokens.components.pricing-period-toggle.radius": *toggle
    "tokens.components.pricing-period-toggle.height": *toggle
    "tokens.components.pricing-period-toggle.padding": *toggle
    "tokens.components.pricing-period-toggle.states": *toggle
    "tokens.components.pricing-period-toggle.use": *toggle
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Machine tokens are limited to supplied public marketing/pricing capture. Mirotone, Aura, and documentation establish context only; they do not supply unobserved live variants."
  components_harvested: true
  colors:
    brand-yellow: "#fde050"
    action-blue: "#3859ff"
    action-blue-border: "#7a90fe"
    ink: "#1c1c1e"
    canvas: "#ffffff"
    border-input: "#e9eaef"
    border-control: "#c7cad5"
    border-subtle: "#e0e2e8"
    muted: "#555a6a"
  typography:
    family: { ui: "Noto Sans", display: "Roobert PRO Medium" }
    display-hero: { size: 56, weight: 500, lineHeight: 56, tracking: -1.68, use: "Observed public home display headline" }
    display-section: { size: 48, weight: 400, lineHeight: 55.2, tracking: -1.44, use: "Observed public home section heading" }
    body: { size: 14, weight: 400, lineHeight: 20, use: "Observed public pricing control and list text" }
    action: { size: 16, weight: 600, lineHeight: 24, use: "Observed public pricing action" }
  spacing: { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 }
  rounded: { control: 8, segmented: 40 }
  components:
    pricing-period-toggle: { type: toggle, radius: 40, height: 34, padding: "6px 16px", states: "checked, unchecked", use: "Public pricing billing-period selector" }
---

# Design System Inspiration of Miro

## 1. Visual Theme & Atmosphere

Miro is a collaborative canvas for teams that want to move from an early idea to a shared outcome. Its first version, RealtimeBoard, began in 2011 as a way for Andrey Khusid’s design agency to communicate with clients at a distance; Miro now describes the service as a place for teams and AI to develop strategy, design products and services, and manage the innovation lifecycle. The public presentation connects that expansive canvas metaphor to a deliberately vivid visual language: an optimistic yellow brand signal, restrained white and near-black functional surfaces, and blue conversion actions in the captured pricing flow. Miro’s 2023 identity work says yellow should be the protagonist rather than paint every surface, while the current Aura material expands the palette for colorful board work and pairs it with a broad-language body face.

- **Yellow as a signal:** the official identity story calls yellow iconic and sparing; the supplied public capture observes `#fde050` on a 40px promo action.
- **Canvas before chrome:** white surfaces and near-black `#1c1c1e` text dominate the captured public controls, leaving color to mark a moment rather than fill the whole page.
- **Workroom energy:** Miro’s own language foregrounds collaborative, canvas-first work; brand imagery can be expressive, while functional pricing controls remain compact and measured.

## 2. Color Palette & Roles

### Observed public-surface roles

- **Miro Yellow / promo accent** (`#fde050`): live 40px marketing/promo action on home and pricing; Miro’s brand story establishes yellow as the central identity color, but no general primary-action role is inferred.
- **Action Blue** (`#3859ff`): repeated public-pricing CTA fill with white text.
- **Action Blue border** (`#7a90fe`): observed 1px border/inset edge on the blue pricing CTA.
- **Ink** (`#1c1c1e`): repeated public text and control color.
- **Canvas** (`#ffffff`): observed public surface and selected pricing-period fill.
- **Input border** (`#e9eaef`): observed on the single public-home email field.
- **Control border** (`#c7cad5`): observed outlined public pricing action border.
- **Subtle border** (`#e0e2e8`): observed pricing badge/control border.
- **Muted text** (`#555a6a`): observed unchecked pricing-period label.

Miro’s Aura material names a broader accent palette—Coral, Cyan, Lilac, Lime, Sunshine, Orange, Pink, Moss, and Teal—but the supplied capture does not establish their exact current public-web values or semantic component roles. They remain narrative context, not machine tokens.

## 3. Typography Rules

### Evidence classes

- **Official product-use:** Miro Aura calls Noto Sans its new body-text font, citing broad language and writing-system support for multilingual hybrid teams.
- **Live computed public-surface use:** `Noto Sans` is loaded/high confidence with 882 visible uses and 24 font-source URLs in the supplied bundle. `Roobert PRO Medium` is loaded/high confidence with 46 visible uses; the bundle also records the loaded `roobertPROLocal` face with three Miro-hosted WOFF2 source URLs. These FontFaceSet-backed families are the only typography families promoted to tokens.
- **Official distributed font asset and licence boundary:** Displaay identifies Roobert as a geometric sans with weight, slant, and mono axes. Displaay’s licence describes paid usage, including web self-hosting via `@font-face`; it is the foundry’s licence, not evidence that Miro grants third parties permission to redistribute its hosted files.
- **Declared-only:** Fragment Mono, Inter Placeholder, M PLUS 1, Nanum Pen Script, Vazirmatn, and placeholder/fallback faces are declared with zero visible use in this capture. They are not substitutes or UI tokens.
- **System/unresolved:** `sans-serif` is a system stack. Computed `Roobert PRO` has visible uses but no matching loaded-font record, so it is not separately tokenized.

### Measured public hierarchy

| Role | Family | Size | Weight | Line height | Tracking | Provenance |
|---|---|---:|---:|---:|---:|---|
| Public display hero | Roobert PRO Medium | 56px | 500 | 56px | -1.68px | `home::h1` |
| Public section heading | Roobert PRO Medium | 48px | 400 | 55.2px | -1.44px | `home::h2` |
| Public pricing action | Noto Sans | 16px | 600 | 24px | normal | `surface-2::[data-omd-capture="136"]` |
| Pricing control/list text | Noto Sans | 14px | 400 | 20px | normal | `surface-2::[data-omd-capture="89"]` |

## 4. Component Stylings

All variants below are constrained to the supplied public marketing/pricing capture. Selector, surface, and observed-state provenance are kept with each entry; Mirotone documentation establishes a broader app-library context but does not turn undocumented or unobserved variants into tokens.

### Public actions

**Yellow promo action**
- Background: `#fde050`
- Text: `#1c1c1e`
- Radius: `8px`
- Padding: `8px 12px`
- Height: `40px`
- Font: `16px / 900 / Roobert PRO Medium`
- Use: public promo/banner action; `home::[data-omd-capture="0"]`, repeated at `surface-2::[data-omd-capture="76"]`

**Blue pricing action**
- Background: `#3859ff`
- Text: `#ffffff`
- Border: `1px solid #7a90fe`
- Radius: `8px`
- Padding: `11px 15px`
- Height: `48px`
- Font: `16px / 600 / Noto Sans`
- Use: public pricing CTA; `surface-2::[data-omd-capture="136"]`, repeated on `surface-3`

**Outlined pricing action**
- Background: transparent
- Text: `#1c1c1e`
- Border: `1px solid #c7cad5`
- Radius: `8px`
- Padding: `11px 15px`
- Height: `48px`
- Font: `16px / 600 / Noto Sans`
- Use: public pricing action; `surface-2::[data-omd-capture="137"]`, repeated on `surface-3`

### Public form and choice controls

**Email input**
- Background: `#ffffff`
- Text: `#1c1c1e`
- Border: `1px solid #e9eaef`
- Radius: `8px`
- Padding: `16px`
- Height: `48px`
- Font: `16px / 400 / Noto Sans`
- Use: public home email field; `home::[data-omd-capture="82"]` (one observed instance)

**Pricing-period toggle**
- Radius: `40px`
- Padding: `6px 16px`
- Height: `34px`
- Font: `16px / 600 / Noto Sans`
- Checked: white background with `#1c1c1e` text; `surface-2::[data-omd-capture="86"]`
- Unchecked: transparent background with `#555a6a` text at `16px / 400`; `surface-2::[data-omd-capture="85"]`
- Use: public pricing billing-period selector; both states observed

### Captured dialog boundary

**Pricing dialog**
- Background: `oklch(1 0 0)`
- Text: `#1c1c1e`
- Padding: `20px 24px`
- Font: `16px / 400 / roobertPROLocal`
- Dialog-open: `surface-2::[data-omd-interaction-capture="dialog-0-8"]`; shadow includes `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px`
- Use: dialog opened by a captured public-pricing interaction; no global modal token or further state contract is inferred

## 5. Layout Principles

### Observed spacing scale

The supplied public capture repeatedly uses 4, 8, 12, 16, 24, and 32px values. This reference retains only those observed values as its spacing tokens.

### Observed shape scale

- **Public action and email input:** `8px`
- **Pricing-period option:** `40px`
- **Circular controls:** `50%` was observed locally on home controls; it is intentionally not normalized into a general-purpose radius token.

## 6. Depth & Elevation

No global elevation scale is established. The captured pricing dialog has a local two-part black shadow, while public buttons are largely flat; retain that shadow only when reproducing the recorded dialog context.

## 7. Do's and Don'ts

### Do

- Use yellow as a deliberate public-brand signal rather than a blanket surface fill.
- Use the supplied blue CTA geometry only for public pricing/conversion contexts.
- Default to the evidence-backed Noto Sans body/UI family where multilingual readability is needed.
- Keep public actions compact, with the observed 8px control corners.

### Don't

- Don’t turn the observed yellow promo button into Miro’s universal primary action.
- Don’t promote declared-only scripts, placeholders, or a system stack to Miro typography.
- Don’t apply Mirotone app-library components to Miro marketing/pricing tokens without direct live evidence.
- Don’t invent hover, pressed, focus, error, loading, toast, or animation variants from the captured dialog/toggle states.

## 8. Responsive Behavior

The supplied capture is desktop-only (`1440x900`) for the home and two pricing records. It does not establish a mobile breakpoint, layout transition, or responsive component variant.

## 9. Agent Prompt Guide

### Evidence-safe prompts

- “Create a public pricing CTA using the observed `#3859ff` fill, white text, `#7a90fe` 1px border, 8px radius, 11px 15px padding, and 48px height. Keep it scoped to a pricing/conversion context.”
- “Use Miro Yellow `#fde050` only for a compact public promo action with `#1c1c1e` text, 8px radius, 8px 12px padding, and 40px height; do not assume it is the default app CTA.”
- “Set functional body/UI text in Noto Sans. Reserve FontFaceSet-backed Roobert display use for short public headings; do not substitute a declared-only or system family.”
- “For the pricing-period selector, use only the captured checked and unchecked treatments; do not invent transition or focus behavior.”

## 10. Voice & Tone

Miro’s first-party language is collaborative, expansive, and outcome-oriented: teams come together on a canvas to dream, design, and build. Its recent AI positioning keeps the emphasis on shared work rather than an individual assistant.

| Context | Supported voice evidence |
|---|---|
| Mission | “empower teams to create the next big thing” — Miro About |
| Product metaphor | “canvas-first” / “from idea to outcome” — Miro newsroom |
| Accessibility | “Everyone should be able to collaborate … without barriers” — Miro Accessibility |

No invented error copy or prohibition list is asserted.

## 11. Brand Narrative

Miro’s own account traces the product to a 2011 RealtimeBoard experiment built so a design agency could communicate with distant clients. The company now describes the product as a visual workspace where teams work with AI across strategy, product design, and innovation delivery.

Its 2023 identity work explains the expression behind the public brand: yellow had always been iconic, but the brand team chose to use it with moderation and supporting colors rather than flood every interface. Aura extends that evolution into a richer board palette and Noto Sans body text for multilingual collaboration. The result is a useful split for this reference: lively brand expression belongs to marketing and board context, while only the supplied live public controls become implementation tokens.

## 12. Principles

1. **The canvas keeps work shared.** *UI implication:* prioritize surfaces that let teams move among ideas, structure, and outcomes without treating the workspace as a document-only flow.
2. **Yellow is an intentional identity signal.** *UI implication:* use a yellow accent to focus attention, not as a default fill for every public or product action.
3. **Multilingual clarity is a product concern.** *UI implication:* use Noto Sans for body/UI content where the live and official evidence supports it.
4. **Accessible collaboration is part of the experience.** *UI implication:* support keyboard access, named colors, readable contrast, and reduced-motion behavior when implementing product work with separate surface evidence.

## 13. Personas

*These are first-party stakeholder groups, not fictional individual personas.*

- **Cross-functional innovation teams:** Miro describes teams using the canvas to develop strategy, design products and services, and manage the innovation lifecycle.
- **Multilingual, hybrid collaborators:** Aura explicitly positions Noto Sans around broad language support for distributed teams.
- **People with access needs:** Miro’s accessibility work addresses keyboard, screen-reader, voice-control, color, and motion-sensitive collaboration.

## 14. States

Only the following states are observed or officially described in this pass:

| State | Treatment | Provenance |
|---|---|---|
| Checked | White pricing-period option with `#1c1c1e` text | `surface-2::[data-omd-capture="86"]` |
| Unchecked | Transparent pricing-period option with `#555a6a` text | `surface-2::[data-omd-capture="85"]` |
| Dialog open | White pricing dialog with local shadow | captured pricing dialog interactions |
| Disabled | 36px circular home control was captured disabled | `home::[data-omd-capture="100"]` |
| Reduced motion | Animations and transitions removed | official Miro Accessibility page |

No public evidence in this pass establishes a loading, empty, success, error, hover, pressed, or focus treatment.

## 15. Motion & Easing

The supplied raw capture contains no timing, easing, or transition values. Miro’s accessibility documentation says reduced motion removes animations and transition effects; that establishes a behavioral boundary, not motion tokens. No duration or easing value is asserted.

---

**Verified:** 2026-07-13
**Tier 1 sources:** https://miro.com/ko/ | https://miro.com/ko/pricing/ | https://miro.com/about/ | https://miro.com/aura/ | https://miro.com/blog/miro-vis/ | https://developers.miro.com/docs/design-guidelines | https://displaay.net/typeface/roobert | https://displaay.net/help/licenses
**Tier 2 sources:** https://getdesign.md/miro/design-md (third-party independent analysis; summary only) | https://styles.refero.design/?q=Miro (attempted search; service returned an internal error)
**Conflicts unresolved:** none

Legacy `#5b76fe`/pastel/card/badge tokens and unobserved state variants were removed because the supplied July 2026 capture did not support them; repeated live public pricing actions resolve to `#3859ff`, while `#fde050` is retained only as a promo/brand-accent action.
