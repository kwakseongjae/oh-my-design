---
name: Mercari
colors:
  public-action: '#5356ee'
  canvas: '#ffffff'
  foreground: '#222222'
  muted: '#6b6b6b'
typography:
  body:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: '-0.16px'
    use: Repeated public-site body and link text on the supplied US surfaces.
  header-action:
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.38
    use: Observed corporate-marketing header text action only.
  marketing-display:
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.2
    use: Observed corporate-marketing display heading only.
rounded:
  none: 0px
  compact: 4px
  image: 8px
  circular: 50px
spacing:
  xs: 4
  sm: 6
  md: 12
  lg: 16
  xl: 20
components:
  marketplace-sell-action:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#222222'
    rounded: 4px
    padding: 0px 16px
    typography: 14px/600 Averta
    states: Default baseline captured; no changed interaction style promoted.
    use: Observed default at home::[data-omd-capture="12"] on the public marketplace home only.
    height: 32px
    pressed: opacity 0.76 (:hover + :active)
    focus: opacity 0.76, browser default focus ring (outline auto) on :focus-visible
  marketing-sell-action:
    type: button
    backgroundColor: '#5356ee'
    textColor: '#ffffff'
    rounded: 4px
    padding: 0px 16px
    typography: 14px/600 Averta
    states: Default baseline captured; no changed interaction style promoted.
    use: Observed default at surface-2::[data-omd-capture="11"] on the corporate-marketing route only.
  marketing-skip-link:
    type: button
    backgroundColor: '#5356ee'
    textColor: '#ffffff'
    rounded: 4px
    padding: 0px 16px
    typography: 16px/600 Averta
    states: Default and an identical focus snapshot captured; no distinct focus value promoted.
    use: Observed skip-link default and identical focus snapshot at home::[data-omd-capture="3"] on public routes.
  listing-image:
    type: card
    rounded: 8px
    use: Observed image shell at home::[data-testid="AnonCardImage"] on the public marketplace home only.
fonts:
  roles:
    sans: Averta
---

# Design System Inspiration of Mercari

## Overview

### Visual Theme & Atmosphere

Mercari operates a marketplace where people can list and buy items that can be shipped; its US guidance frames listing as taking photos, adding a description, and setting a price. The supplied public capture shows a compact, type-led web presence rather than the former Japanese marketplace system: a near-white canvas, charcoal reading text, and a repeated indigo `#5356ee` action/link value. Averta is loaded from Mercari’s own web-assets domain throughout all three routes. The observed experience splits into three source domains—a public marketplace home, a corporate-marketing about page, and a brand-directory page—so their shared typography and controls are useful public-web evidence but not proof of an authenticated buying, selling, payment, or mobile-app system. Mercari’s published marketplace principles connect the service to circulation and a safe, trustworthy, humane marketplace; its public guidelines express that operationally as neighborly, safe, and legal behavior. [Listing guide](https://www.mercari.com/us/help_center/topics/listing/guides/creating-a-listing/) · [Marketplace principles](https://pj.mercari.com/principles/marketplace-principles-and-history_EN.pdf)

**Key Characteristics:**

- Loaded **Averta** across the three supplied public US routes, with Mercari-hosted font sources
- Repeated public action/link value `#5356ee`; it is an observed public-web value, not an asserted global brand token
- Near-white canvas with `#222222` foreground and `#6b6b6b` muted text
- Small `4px` action corners, `8px` image corners, and isolated circular icon controls
- Public marketplace, corporate marketing, and brand-directory chrome kept as separate evidence domains
- No authenticated marketplace-flow, Japanese-product, responsive, or app-system claims in this update

### Primary tasks

- List an item by taking photos, adding a description, and setting a price
- Buy a shipped item that another person has listed
- Judge an item from its stated details before buying
- Keep contact with a buyer or seller inside the app

### Brand Narrative

Mercari’s current marketplace-principles material states its mission as circulating forms of value to unleash people’s potential, and frames the marketplace as needing to remain diverse, free, safe, trustworthy, and humane. The same material connects the marketplace to the reuse of dormant value and a circular economy. On the public US product side, the listing guide turns that broad purpose into a practical peer-to-peer exchange: people photograph an item, describe it, price it, and choose shipping. [Marketplace principles](https://pj.mercari.com/principles/marketplace-principles-and-history_EN.pdf) · [Listing guide](https://www.mercari.com/us/help_center/topics/listing/guides/creating-a-listing/)

This reference does not add founding dates, expansion history, or claims about the Japanese app because they were not re-established by the sources reviewed in this update.

### Principles

1. **Circulate value through a marketplace.** Mercari’s official principles connect exchanges of dormant value with a circular economy. *UI implication:* make the transaction task and its next step legible; do not introduce decorative claims in place of item information.

2. **Keep peer-to-peer exchange neighborly.** The marketplace guidelines say buyers and sellers are real people and ask participants to represent themselves and their items accurately. *UI implication:* favour direct labels, truthful item details, and understandable conditions over ambiguous promotional language.

3. **Safety is a condition of marketplace freedom.** Mercari’s principles treat a safe environment as necessary for free transactions, while the US guidelines direct users to keep communication in the app. *UI implication:* safety boundaries should be clear and contextual, not hidden in decorative reassurance.

### Personas

*The following are non-factual design archetypes derived only from the official marketplace’s buyer/seller framing; they are not demographic claims, user research, or representations of individual Mercari users.*

**A person listing a shippable household item.** Needs a short, ordered path from photos to description, price, and shipping choice. Their exact device, location, frequency of use, and payment needs are not established here.

**A person assessing a listing.** Needs accurate item information and clear marketplace boundaries. Their browsing behavior, budget, and trust signals are not established here.

## Colors

### Observed public surfaces

- **Public action/link** (`#5356ee`): repeated text and border value on the marketplace home, corporate-marketing page, and brand directory. It appears as the fill of the observed marketing skip/sell controls and as text on public links.
- **Canvas** (`#ffffff`): observed on the marketplace sell action and repeated public surface/background samples.
- **Foreground** (`#222222`): repeated public text value, including the marketplace sell action and search field.
- **Muted text** (`#6b6b6b`): observed in compact marketplace navigation/footer text.

### Boundary

The capture does not establish the earlier red/blue semantic palette, success/error colors, a universal filled CTA, or a global product color architecture. Values from third-party Truste consent controls (`#ecedf1`, `#dcdde0`) are excluded; their presence on the pages is not Mercari product evidence.

## Typography

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

## Layout

The supplied 1440×900 capture exposes public routes only. Measured spacing clusters at 4, 6, 12, 16, and 20px; the selector-backed actions above use 0px 16px or 6px 16px padding. No captured evidence establishes a product grid, page-width rule, breakpoint, mobile navigation, or authenticated listing layout, so those rules are omitted.

### Responsive Behavior

Only a 1440×900 viewport was supplied. No mobile viewport, breakpoint, layout transition, touch-target policy, or safe-area behavior was observed. Responsive behavior is therefore not specified.

## Elevation & Depth

The selector-backed public controls and listing-image shell have `box-shadow: none`. The evidence does not establish a card elevation, menu, sheet, modal, tooltip, or z-index scale. The only captured dialogs belong to third-party cookie consent and are excluded from Mercari depth guidance.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`

## Motion & Easing

No Mercari motion duration, easing curve, transition, or reduced-motion treatment was captured on the selector-backed public components. Motion guidance is intentionally absent pending product-surface evidence.

## Components

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

### States

No authenticated product workflow was captured. The supplied collector records only public-route selector snapshots and third-party cookie-consent dialogs; it does not establish Mercari empty, loading, error, success, skeleton, or disabled treatments. Do not manufacture those states from the colors or controls above.

Live state probe, 2026-10-16 (`https://www.mercari.com/`), `marketplace-sell-action`: pressed — opacity 0.76; focus — opacity 0.76, browser default focus ring (outline auto).

## Do's and Don'ts

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

## Voice & Tone

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

## Agent Prompt Guide

For a public US Mercari web concept only, use a near-white canvas, `#222222` reading text, `#5356ee` as the observed action/link color, and Averta when it can actually load. Keep a compact 4px action radius and an 8px listing-image radius. Do not generate a mobile marketplace flow, checkout, payment, seller workflow, status system, or Japanese-product design from this reference; the supplied evidence does not establish them.
