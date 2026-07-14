---
id: mercari
name: Mercari
country: JP
category: consumer-tech
homepage: "https://www.mercari.com"
primary_color: "#5356ee"
logo:
  type: github
  slug: mercari
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: public-marketplace, url: "https://www.mercari.com/", inspected: "2026-07-12" }
    - { id: surface-2, kind: corporate-marketing, url: "https://www.mercari.com/about/", inspected: "2026-07-12" }
    - { id: surface-3, kind: brand-directory, url: "https://www.mercari.com/us/brand/", inspected: "2026-07-12" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.mercari.com/", captured: "2026-07-12" }
    - { id: about-live, kind: product-surface, url: "https://www.mercari.com/about/", captured: "2026-07-12" }
    - { id: brand-live, kind: product-surface, url: "https://www.mercari.com/us/brand/", captured: "2026-07-12" }
    - { id: marketplace-guidelines, kind: official-doc, url: "https://www.mercari.com/us/help_center/article/407/", captured: "2026-07-13" }
    - { id: listing-guide, kind: official-doc, url: "https://www.mercari.com/us/help_center/topics/listing/guides/creating-a-listing/", captured: "2026-07-13" }
    - { id: marketplace-principles, kind: official-doc, url: "https://pj.mercari.com/principles/marketplace-principles-and-history_EN.pdf", captured: "2026-07-13" }
    - { id: averta-foundry, kind: official-doc, url: "https://foundryfivetype.com/", captured: "2026-07-13" }
    - { id: averta-license, kind: license, url: "https://foundryfivetype.com/eulas/", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.public-action": &live { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.colors.canvas": *live
    "tokens.colors.foreground": *live
    "tokens.colors.muted": *live
    "tokens.typography.family.sans": *live
    "tokens.typography.body.size": *live
    "tokens.typography.body.weight": *live
    "tokens.typography.body.lineHeight": *live
    "tokens.typography.body.tracking": *live
    "tokens.typography.body.use": *live
    "tokens.typography.header-action.size": &about { surface_id: surface-2, source_id: about-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.typography.header-action.weight": *about
    "tokens.typography.header-action.lineHeight": *about
    "tokens.typography.header-action.use": *about
    "tokens.typography.marketing-display.size": *about
    "tokens.typography.marketing-display.weight": *about
    "tokens.typography.marketing-display.lineHeight": *about
    "tokens.typography.marketing-display.use": *about
    "tokens.spacing.xs": *live
    "tokens.spacing.sm": *live
    "tokens.spacing.md": *live
    "tokens.spacing.lg": *live
    "tokens.spacing.xl": *live
    "tokens.rounded.none": *live
    "tokens.rounded.compact": *live
    "tokens.rounded.image": *live
    "tokens.rounded.circular": *live
    "tokens.shadow.none": *live
    "tokens.components.marketplace-sell-action.type": *live
    "tokens.components.marketplace-sell-action.bg": *live
    "tokens.components.marketplace-sell-action.fg": *live
    "tokens.components.marketplace-sell-action.radius": *live
    "tokens.components.marketplace-sell-action.padding": *live
    "tokens.components.marketplace-sell-action.font": *live
    "tokens.components.marketplace-sell-action.states": *live
    "tokens.components.marketplace-sell-action.use": *live
    "tokens.components.marketing-sell-action.type": *about
    "tokens.components.marketing-sell-action.bg": *about
    "tokens.components.marketing-sell-action.fg": *about
    "tokens.components.marketing-sell-action.radius": *about
    "tokens.components.marketing-sell-action.padding": *about
    "tokens.components.marketing-sell-action.font": *about
    "tokens.components.marketing-sell-action.states": *about
    "tokens.components.marketing-sell-action.use": *about
    "tokens.components.marketing-skip-link.type": *live
    "tokens.components.marketing-skip-link.bg": *live
    "tokens.components.marketing-skip-link.fg": *live
    "tokens.components.marketing-skip-link.radius": *live
    "tokens.components.marketing-skip-link.padding": *live
    "tokens.components.marketing-skip-link.font": *live
    "tokens.components.marketing-skip-link.states": *live
    "tokens.components.marketing-skip-link.use": *live
    "tokens.components.listing-image.type": *live
    "tokens.components.listing-image.radius": *live
    "tokens.components.listing-image.use": *live
tokens:
  source: reconciled
  extracted: "2026-07-12"
  colors:
    public-action: "#5356ee"
    canvas: "#ffffff"
    foreground: "#222222"
    muted: "#6b6b6b"
  typography:
    family: { sans: "Averta" }
    body: { size: 14, weight: 400, lineHeight: 1.43, tracking: "-0.16px", use: "Repeated public-site body and link text on the supplied US surfaces." }
    header-action: { size: 16, weight: 600, lineHeight: 1.38, use: "Observed corporate-marketing header text action only." }
    marketing-display: { size: 48, weight: 600, lineHeight: 1.2, use: "Observed corporate-marketing display heading only." }
  spacing: { xs: 4, sm: 6, md: 12, lg: 16, xl: 20 }
  rounded: { none: 0, compact: 4, image: 8, circular: 50 }
  shadow: { none: "none" }
  components_harvested: true
  components:
    marketplace-sell-action: { type: button, bg: "#ffffff", fg: "#222222", radius: 4, padding: "0px 16px", font: "14px/600 Averta", states: "Default baseline captured; no changed interaction style promoted.", use: "Observed default at home::[data-omd-capture=\"12\"] on the public marketplace home only." }
    marketing-sell-action: { type: button, bg: "#5356ee", fg: "#ffffff", radius: 4, padding: "0px 16px", font: "14px/600 Averta", states: "Default baseline captured; no changed interaction style promoted.", use: "Observed default at surface-2::[data-omd-capture=\"11\"] on the corporate-marketing route only." }
    marketing-skip-link: { type: button, bg: "#5356ee", fg: "#ffffff", radius: 4, padding: "0px 16px", font: "16px/600 Averta", states: "Default and an identical focus snapshot captured; no distinct focus value promoted.", use: "Observed skip-link default and identical focus snapshot at home::[data-omd-capture=\"3\"] on public routes." }
    listing-image: { type: card, radius: 8, use: "Observed image shell at home::[data-testid=\"AnonCardImage\"] on the public marketplace home only." }
---

# Design System Inspiration of Mercari

## 1. Visual Theme & Atmosphere

Mercari operates a marketplace where people can list and buy items that can be shipped; its US guidance frames listing as taking photos, adding a description, and setting a price. The supplied public capture shows a compact, type-led web presence rather than the former Japanese marketplace system: a near-white canvas, charcoal reading text, and a repeated indigo `#5356ee` action/link value. Averta is loaded from Mercari’s own web-assets domain throughout all three routes. The observed experience splits into three source domains—a public marketplace home, a corporate-marketing about page, and a brand-directory page—so their shared typography and controls are useful public-web evidence but not proof of an authenticated buying, selling, payment, or mobile-app system. Mercari’s published marketplace principles connect the service to circulation and a safe, trustworthy, humane marketplace; its public guidelines express that operationally as neighborly, safe, and legal behavior. [Listing guide](https://www.mercari.com/us/help_center/topics/listing/guides/creating-a-listing/) · [Marketplace principles](https://pj.mercari.com/principles/marketplace-principles-and-history_EN.pdf)

**Key Characteristics:**

- Loaded **Averta** across the three supplied public US routes, with Mercari-hosted font sources
- Repeated public action/link value `#5356ee`; it is an observed public-web value, not an asserted global brand token
- Near-white canvas with `#222222` foreground and `#6b6b6b` muted text
- Small `4px` action corners, `8px` image corners, and isolated circular icon controls
- Public marketplace, corporate marketing, and brand-directory chrome kept as separate evidence domains
- No authenticated marketplace-flow, Japanese-product, responsive, or app-system claims in this update

## 2. Color Palette & Roles

### Observed public surfaces

- **Public action/link** (`#5356ee`): repeated text and border value on the marketplace home, corporate-marketing page, and brand directory. It appears as the fill of the observed marketing skip/sell controls and as text on public links.
- **Canvas** (`#ffffff`): observed on the marketplace sell action and repeated public surface/background samples.
- **Foreground** (`#222222`): repeated public text value, including the marketplace sell action and search field.
- **Muted text** (`#6b6b6b`): observed in compact marketplace navigation/footer text.

### Boundary

The capture does not establish the earlier red/blue semantic palette, success/error colors, a universal filled CTA, or a global product color architecture. Values from third-party Truste consent controls (`#ecedf1`, `#dcdde0`) are excluded; their presence on the pages is not Mercari product evidence.

## 3. Typography Rules

### Evidence classes

- **Live computed surface-use:** **Averta** is the computed family on 902 captured elements across the public marketplace, corporate-marketing, and brand-directory surfaces. The supplied FontFaceSet/source evidence includes Mercari-hosted light, regular, semibold, and bold WOFF/WOFF2 URLs, so Averta is the verified public-web UI family in this reference.
- **Official product-use:** no first-party announcement reviewed in this pass states that Averta is the native mobile-app or authenticated-marketplace family. This reference does not make that promotion.
- **Font-publisher context and license boundary:** Foundry5 lists Averta PE among its families and publishes a commercial EULA covering webfont `@font-face` use. That publisher material does not grant readers a Mercari font-file license or establish that its retail package is the exact CDN build. [Foundry5](https://foundryfivetype.com/) · [EULA](https://foundryfivetype.com/eulas/)
- **Declared-only:** `averta-bold` has a declared face in the supplied evidence but zero observed visible uses; it is not a separate token. `averta-semibold` and `averta-regular` are loaded aliases associated with the verified Averta family.
- **System/unresolved:** the capture’s Arial fallback declarations have no independent loaded/source corroboration and are not promoted. Do not substitute a system face and label it Averta.

### Observed hierarchy

| Role | Size | Weight | Line height | Source boundary |
|------|------|--------|-------------|-----------------|
| Public body/link | 14px | 400 | 20px | Repeated marketplace and corporate public text |
| Corporate header action | 16px | 600 | 22px | Corporate-marketing route only |
| Corporate display | 48px | 600 | 57.6px | Corporate-marketing route only |

The capture also contains isolated sizes; it does not establish a universal type scale beyond the roles above.

## 4. Component Stylings

### Public marketplace home

**Sell action — observed default**
- Background: #ffffff
- Text: #222222
- Radius: 4px
- Padding: 0px 16px
- Font: 14px / 600 / Averta
- Use: `home::[data-omd-capture="12"]`, a 32px-high public marketplace-home action only.

**Circular icon action — observed default**
- Background: transparent
- Text: #000000
- Radius: 50%
- Padding: 0px
- Font: 16px / 400 / Averta
- Use: `home::[data-omd-capture="6"]`, a 40px-high public-home icon control. Its semantic purpose is not named in the supplied artifact.

**Listing image shell — observed default**
- Background: transparent
- Radius: 8px
- Shadow: none
- Use: `home::[data-testid="AnonCardImage"]`, the image element of the anonymous public-home listing cards. No card container fill, metadata, price, or state specification was captured.

### Corporate-marketing route

**Sell action — observed default**
- Background: #5356ee
- Text: #ffffff
- Radius: 4px
- Padding: 0px 16px
- Font: 14px / 600 / Averta
- Use: `surface-2::[data-omd-capture="11"]`, a 32px-high corporate-marketing action only. It is not a marketplace transaction CTA.

**Header text action — observed default**
- Background: transparent
- Text: #222222
- Radius: 0px
- Padding: 0px
- Font: 16px / 600 / Averta
- Hover: Text #5356ee at `surface-2::[data-omd-capture="7"]::state-hover`
- Pressed: Text #5356ee at `surface-2::[data-omd-capture="7"]::state-pressed`
- Use: `surface-2::[data-omd-capture="7"]`, a 22px-high corporate-marketing header control. The stated hover and pressed values are collector snapshots for this selector only.

**Skip link — observed default and focus snapshot**
- Background: #5356ee
- Text: #ffffff
- Radius: 4px
- Padding: 0px 16px
- Font: 16px / 600 / Averta
- Focus: identical visible values at `home::[data-omd-capture="3"]::state-focus`
- Use: `home::[data-omd-capture="3"]`, a 44px-high public-route accessibility control; it is not a standard primary action.

The collector recorded three dialog interactions, all triggered from Truste cookie-consent controls. Those third-party dialogs are deliberately excluded. No authenticated-marketplace button, checkout, input, product-card metadata, toast, modal, error, success, disabled, or mobile component variant has source-backed provenance in this update.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.mercari.com/; https://www.mercari.com/about/; https://www.mercari.com/us/brand/; https://www.mercari.com/us/help_center/article/407/; https://www.mercari.com/us/help_center/topics/listing/guides/creating-a-listing/; https://pj.mercari.com/principles/marketplace-principles-and-history_EN.pdf; https://foundryfivetype.com/; https://foundryfivetype.com/eulas/
**Tier 2 sources:** https://getdesign.md/mercari (attempted; no usable record returned); https://styles.refero.design/?q=mercari (attempted; no usable record returned)
**Conflicts unresolved:** none

## 5. Layout Principles

The supplied 1440×900 capture exposes public routes only. Measured spacing clusters at 4, 6, 12, 16, and 20px; the selector-backed actions above use 0px 16px or 6px 16px padding. No captured evidence establishes a product grid, page-width rule, breakpoint, mobile navigation, or authenticated listing layout, so those rules are omitted.

## 6. Depth & Elevation

The selector-backed public controls and listing-image shell have `box-shadow: none`. The evidence does not establish a card elevation, menu, sheet, modal, tooltip, or z-index scale. The only captured dialogs belong to third-party cookie consent and are excluded from Mercari depth guidance.

## 7. Do's and Don'ts

### Do

- Use Averta only where the verified family can be loaded from an appropriately licensed source.
- Keep `#5356ee` scoped to the observed public-web action/link contexts, rather than treating it as a complete product palette.
- Retain source-domain provenance when using the public-home, corporate-marketing, or brand-directory observations.
- Use the 8px radius only for the observed listing image shell, not as a general card rule.

### Don't

- Do not revive the former Japanese semantic-red system, JP typography stack, or token inventory from a different capture.
- Do not reuse the corporate-marketing sell action as a checkout, payment, listing-submit, or mobile-app CTA.
- Do not carry Truste cookie-consent controls or dialogs into a Mercari component system.
- Do not invent responsive, error, success, disabled, motion, or authenticated-marketplace variants.

## 8. Responsive Behavior

Only a 1440×900 viewport was supplied. No mobile viewport, breakpoint, layout transition, touch-target policy, or safe-area behavior was observed. Responsive behavior is therefore not specified.

## 9. Agent Prompt Guide

For a public US Mercari web concept only, use a near-white canvas, `#222222` reading text, `#5356ee` as the observed action/link color, and Averta when it can actually load. Keep a compact 4px action radius and an 8px listing-image radius. Do not generate a mobile marketplace flow, checkout, payment, seller workflow, status system, or Japanese-product design from this reference; the supplied evidence does not establish them.

## 10. Voice & Tone

Mercari’s reviewed public guidance is neighborly, practical, and safety-conscious. The marketplace guidelines address buyers and sellers as real people, ask them to represent items accurately, and structure safety/legal rules in plain language. The listing guide is similarly procedural: photos, description, price, then shipping. [Marketplace guidelines](https://www.mercari.com/us/help_center/article/407/) · [Listing guide](https://www.mercari.com/us/help_center/topics/listing/guides/creating-a-listing/)

| Context | Observed direction |
|---------|--------------------|
| Marketplace guidance | Address participants directly and concretely. |
| Listing assistance | Sequence the next practical action without hype. |
| Safety policy | Name the boundary and the reason for it plainly. |

Voice samples are quoted or closely paraphrased from the cited public pages; they are not an authenticated-product copy specification.

- “Keep it neighborly.” — public marketplace guideline.
- “Keep it safe.” — public marketplace guideline.
- “Just take some photos, add a description, and set the price.” — public listing guide.

## 11. Brand Narrative

Mercari’s current marketplace-principles material states its mission as circulating forms of value to unleash people’s potential, and frames the marketplace as needing to remain diverse, free, safe, trustworthy, and humane. The same material connects the marketplace to the reuse of dormant value and a circular economy. On the public US product side, the listing guide turns that broad purpose into a practical peer-to-peer exchange: people photograph an item, describe it, price it, and choose shipping. [Marketplace principles](https://pj.mercari.com/principles/marketplace-principles-and-history_EN.pdf) · [Listing guide](https://www.mercari.com/us/help_center/topics/listing/guides/creating-a-listing/)

This reference does not add founding dates, expansion history, or claims about the Japanese app because they were not re-established by the sources reviewed in this update.

## 12. Principles

1. **Circulate value through a marketplace.** Mercari’s official principles connect exchanges of dormant value with a circular economy. *UI implication:* make the transaction task and its next step legible; do not introduce decorative claims in place of item information.

2. **Keep peer-to-peer exchange neighborly.** The marketplace guidelines say buyers and sellers are real people and ask participants to represent themselves and their items accurately. *UI implication:* favour direct labels, truthful item details, and understandable conditions over ambiguous promotional language.

3. **Safety is a condition of marketplace freedom.** Mercari’s principles treat a safe environment as necessary for free transactions, while the US guidelines direct users to keep communication in the app. *UI implication:* safety boundaries should be clear and contextual, not hidden in decorative reassurance.

## 13. Personas

*The following are non-factual design archetypes derived only from the official marketplace’s buyer/seller framing; they are not demographic claims, user research, or representations of individual Mercari users.*

**A person listing a shippable household item.** Needs a short, ordered path from photos to description, price, and shipping choice. Their exact device, location, frequency of use, and payment needs are not established here.

**A person assessing a listing.** Needs accurate item information and clear marketplace boundaries. Their browsing behavior, budget, and trust signals are not established here.

## 14. States

No authenticated product workflow was captured. The supplied collector records only public-route selector snapshots and third-party cookie-consent dialogs; it does not establish Mercari empty, loading, error, success, skeleton, or disabled treatments. Do not manufacture those states from the colors or controls above.

## 15. Motion & Easing

No Mercari motion duration, easing curve, transition, or reduced-motion treatment was captured on the selector-backed public components. Motion guidance is intentionally absent pending product-surface evidence.
