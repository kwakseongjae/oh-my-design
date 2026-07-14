---
id: intuit
name: Intuit QuickBooks
country: US
category: fintech
homepage: https://design.intuit.com/quickbooks/brand/
primary_color: "#0d333f"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=intuit.com&sz=128"
verified: "2026-07-13"
omd: "0.1"
ds:
  name: QuickBooks Design
  url: https://design.intuit.com/quickbooks/brand/
  type: brand
  description: Official QuickBooks brand hub covering visual foundations, product expression, resources, and accessibility; it is distinct from an authenticated QuickBooks application specification.
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: brand-hub, kind: official-brand-hub, url: "https://design.intuit.com/quickbooks/brand/", inspected: "2026-07-13" }
    - { id: product-expression, kind: official-product-expression, url: "https://design.intuit.com/quickbooks/product/", inspected: "2026-07-13" }
    - { id: sign-in, kind: public-authentication, url: "https://federation.intuit.com/as/authorization.oauth2?scope=openid+profile+email&response_type=code&redirect_uri=https%3A%2F%2Fpartnerauth.platform.intuit.com%2Fexternal_partner%2Fintuit_eiam%2Fcallback&client_id=9d678f82-f00e-4e8f-875e-484cac84cbc1&state=awb.228bcc57-93dd-4b7c-8691-6e252452f1e8", inspected: "2026-07-13" }
  sources:
    - { id: brand-hub-capture, kind: official-doc, url: "https://design.intuit.com/quickbooks/brand/", captured: "2026-07-13" }
    - { id: product-expression-capture, kind: product-surface, url: "https://design.intuit.com/quickbooks/product/", captured: "2026-07-13" }
    - { id: sign-in-capture, kind: product-surface, url: "https://federation.intuit.com/as/authorization.oauth2?scope=openid+profile+email&response_type=code&redirect_uri=https%3A%2F%2Fpartnerauth.platform.intuit.com%2Fexternal_partner%2Fintuit_eiam%2Fcallback&client_id=9d678f82-f00e-4e8f-875e-484cac84cbc1&state=awb.228bcc57-93dd-4b7c-8691-6e252452f1e8", captured: "2026-07-13" }
    - { id: avenir-font-asset, kind: brand-asset, url: "https://lib.intuitcdn.net/fonts/AvenirNext/3.0/AvenirNextforINTUIT-Regular.1.woff2", captured: "2026-07-13" }
    - { id: quickbooks-type-guidance, kind: official-doc, url: "https://design.intuit.com/quickbooks/brand/design-foundations/type/", captured: "2026-07-13" }
    - { id: intuit-origins, kind: official-doc, url: "https://www.intuit.com/company/origins/", captured: "2026-07-13" }
    - { id: intuit-values, kind: official-doc, url: "https://www.intuit.com/company/operating-values/", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.dark-action": &product { surface_id: product-expression, source_id: product-expression-capture, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.ink": &brand { surface_id: brand-hub, source_id: brand-hub-capture, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.canvas": *product
    "tokens.colors.muted": *product
    "tokens.colors.brand-link": *brand
    "tokens.typography.family.ui": &font { surface_id: brand-hub, source_id: avenir-font-asset, method: computed-style-plus-fontfaceset-source, captured: "2026-07-13" }
    "tokens.typography.display.size": *font
    "tokens.typography.display.weight": *font
    "tokens.typography.display.lineHeight": *font
    "tokens.typography.display.use": *font
    "tokens.typography.body.size": *font
    "tokens.typography.body.weight": *font
    "tokens.typography.body.lineHeight": *font
    "tokens.typography.body.use": *font
    "tokens.typography.nav.size": *brand
    "tokens.typography.nav.weight": *brand
    "tokens.typography.nav.lineHeight": *brand
    "tokens.typography.nav.use": *brand
    "tokens.spacing.tile-text-bottom": *brand
    "tokens.spacing.secondary-action-x": *product
    "tokens.spacing.global-nav-y": *brand
    "tokens.rounded.square": *brand
    "tokens.rounded.secondary-action": *product
    "tokens.shadow.flat": *brand
    "tokens.components.global-nav-tab.type": *brand
    "tokens.components.global-nav-tab.bg": *brand
    "tokens.components.global-nav-tab.fg": *brand
    "tokens.components.global-nav-tab.radius": *brand
    "tokens.components.global-nav-tab.padding": *brand
    "tokens.components.global-nav-tab.height": *brand
    "tokens.components.global-nav-tab.font": *brand
    "tokens.components.global-nav-tab.states": *brand
    "tokens.components.global-nav-tab.use": *brand
tokens:
  source: reconciled
  extracted: "2026-07-13"
  components_harvested: true
  note: "Machine tokens are limited to selector-backed values in the supplied three-surface capture. The QuickBooks brand hub, product-expression route, and authentication route are separate evidence domains; no interaction state was captured."
  colors:
    dark-action: "#0d333f"
    ink: "#000000"
    canvas: "#ffffff"
    muted: "#6b6c72"
    brand-link: "#055393"
  typography:
    family: { ui: "Avenir Next forINTUIT" }
    display: { size: 40, weight: 600, lineHeight: 52, use: "Observed brand-hub tile heading" }
    body: { size: 16, weight: 400, lineHeight: 24, use: "Observed brand-hub body and tile text" }
    nav: { size: 16, weight: 400, lineHeight: 24, use: "Observed brand-hub global-navigation tab" }
  spacing:
    tile-text-bottom: 20
    secondary-action-x: 28
    global-nav-y: 28
  rounded:
    square: 0
    secondary-action: 4
  shadow:
    flat: none
  components:
    global-nav-tab: { type: button, bg: transparent, fg: "#000000", radius: "0px", padding: "28px 0px", height: "84px", font: "16px / 400 / Avenir Next forINTUIT", states: "Default snapshot only; interaction count 0, so hover, focus, pressed, and disabled variants are not observed.", use: "Brand-hub global-navigation tab with role=button; selector home::[data-omd-capture=1]" }
---

# Intuit QuickBooks — Design Reference

## 1. Visual Theme & Atmosphere

QuickBooks is Intuit’s small-business financial-management product and brand program: the official hub describes its job as helping teams craft experiences that champion small businesses, while Intuit situates QuickBooks inside a broader financial-technology platform. The recognizable expression is not a generic bank dashboard. QuickBooks frames its familiar logo as a green light for possibility and pairs that optimistic cue with candid small-business photography, playful industry illustration, approachable language, and a deliberate, balanced type voice. Its current design material is a working brand hub rather than a frozen identity archive, with product expression, accessibility, motion, resource libraries, and review office hours gathered around the same small-business mission. This sits within Intuit’s longer evolution from personal-computing finance software through web, mobile, cloud, and AI services. [QuickBooks Design](https://design.intuit.com/quickbooks/brand/) and [Intuit origins](https://www.intuit.com/company/origins/) provide that context.

The supplied capture covers the public QuickBooks brand hub, its public product-expression route, and an Intuit authentication surface at 1440×900. It does not establish an accounting-app shell, transaction flow, subscription checkout, or post-login dashboard.

## 2. Color Palette & Roles

### Selector-backed public-surface values

- **Dark action / dark text** (`#0D333F`): observed as text and border on the 52px outlined product-expression action, and as a repeated dark background value on public brand/product routes.
- **Ink** (`#000000`): repeated public brand-hub text, navigation, and border value.
- **Canvas** (`#FFFFFF`): repeated public-surface text/border and white surface value.
- **Muted text** (`#6B6C72`): repeated public brand/product text value.
- **Brand-hub link blue** (`#055393`): observed on the public brand-hub logo link.

The official hub calls the QuickBooks mark a metaphorical green light and offers a separate color-guideline resource, but the supplied computed-style artifact does not expose a selector-backed green hex. Green is therefore useful brand narrative, not a machine color token here. The single low-frequency orange and blue values on the authentication surface are likewise not promoted into the QuickBooks brand set.

## 3. Typography Rules

### Evidence classes

- **Official product-use:** QuickBooks names Avenir Next for Intuit as its official primary font. Its typography guidance calls it balanced, timeless, modern, and contemporary, and recommends a restrained weight range with a 4px design grid.
- **Live computed surface-use:** the supplied capture records `Avenir Next forINTUIT` as loaded/high confidence, with 203 visible uses across body, button, card, heading, list-item, and text roles. The computed family is backed by FontFaceSet and Intuit CDN font-source evidence; this is the only family promoted to machine tokens.
- **Official distributed brand asset:** the QuickBooks resources page provides a font-library download route, but says assets require SSO. It establishes that a controlled font library exists; it does not grant a public redistribution licence in this reference.
- **Declared-only:** `iconfont` and Proxima Nova faces are declared on the authentication domain with zero visible observed use. They are not QuickBooks UI-family substitutes or tokens.
- **System/unresolved:** Arial appears once as a system stack on the authentication surface. It is not promoted or substituted for the loaded Avenir family.

### Measured public hierarchy

| Role | Family | Size | Weight | Line height | Provenance |
|---|---|---:|---:|---:|---|
| Brand-hub tile heading | Avenir Next forINTUIT | 40px | 600 | 52px | `home::h2` |
| Brand-hub body/tile text | Avenir Next forINTUIT | 16px | 400 | 24px | `home::p` and body samples |
| Global-navigation tab | Avenir Next forINTUIT | 16px | 400 | 24px | `home::[data-omd-capture="1"]` |

## 4. Component Stylings

The supplied evidence contains 21 default component variants across the three public surfaces, but interaction coverage is zero. The selector-backed static component below is promoted because its role, geometry, family, and default visual values were measured; hover, focus, pressed, disabled, error, and expanded values are omitted.

### Global Navigation Tab

**Default role-button tab**
- Background: transparent
- Text: #000000
- Radius: 0px
- Padding: 28px 0px
- Height: 84px
- Font: 16px / 400 / Avenir Next forINTUIT
- Use: Brand-hub global-navigation tab; `home::[data-omd-capture="1"]`, a `div` with `role="button"`.

## 5. Layout Principles

The public brand hub uses an 80px global-navigation band followed by a 60px secondary navigation band in the supplied desktop capture. Its tile content repeatedly gives heading and body text a 20px bottom margin; this is a measured local relationship, not a universal product grid. On the separate product-expression route, the captured outlined action uses 28px horizontal padding and a 4px corner radius. The evidence does not establish mobile breakpoints, accounting-workspace columns, authenticated navigation, or a general spacing scale.

## 6. Depth & Elevation

The promoted global-navigation tab has `box-shadow: none`, and its default surface is transparent. Do not infer a card-shadow scale or overlay recipe from the public hub; the supplied capture has not established one.

## 7. Do's and Don'ts

### Do

- Use the loaded `Avenir Next forINTUIT` family when recreating the measured public brand-hub samples.
- Keep the role-button navigation tab square, transparent, and tied to its observed 84px / `28px 0px` geometry.
- Treat `#0D333F`, `#000000`, `#FFFFFF`, `#6B6C72`, and `#055393` as public-surface observations with their listed local roles.
- Use sentence case by default, in line with the official QuickBooks type guidance.

### Don't

- Do not substitute Arial, Proxima Nova, iconfont, or a system fallback as if it were the loaded Avenir family.
- Do not derive QuickBooks green, an app-dashboard palette, a checkout flow, or a universal spacing scale from this capture.
- Do not invent hover, focus, pressed, disabled, error, or expanded styling: interaction count is zero.
- Do not merge authentication-surface anomalies into the QuickBooks brand tokens.

## 8. Responsive Behavior

The supplied capture is desktop-only at 1440×900. It proves the observed desktop navigation and action geometry at that viewport, but no breakpoint, touch target, responsive type scale, or small-screen rearrangement is verified. The official type page documents marketing and product responsive scales as assets, yet their numeric values are not available as raw text in the evidence supplied for this reference and are not reconstructed here.

## 9. Agent Prompt Guide

For a measured public QuickBooks-brand-hub treatment, use loaded `Avenir Next forINTUIT`, black `#000000` text on transparent navigation, and a square 84px role-button tab with `28px 0px` padding. Use the documented brand character—optimistic, supportive of small businesses, and visually clear—without claiming an unobserved application UI. A secondary public action was observed at 52px high with `#0D333F` text/border, a 4px radius, and `0px 28px` padding, but it is a separate product-expression sample. Do not add green hexes, generic finance-dashboard components, shadows, responsive values, or interaction variants not present in the evidence.

## 10. Voice & Tone

QuickBooks’ official brand hub describes its voice as friendly and understanding, while its type guidance asks for sentence case and reserves all caps for short emphasis. Use a clear, helpful, benefit-led tone; this is a content-direction reading of official guidance, not a captured interface copy deck.

| Do | Don't |
|---|---|
| Lead with the customer’s next useful outcome. | Make financial work sound needlessly technical or distant. |
| Use sentence case for ordinary UI copy. | Use long all-caps headlines. |
| Make emphasis short and legible. | Treat the QuickBooks name itself as a colored emphasis device. |

Illustrative, non-official examples based on that guidance:

- “See what needs your attention today.”
- “Keep your cash flow in view.”
- “Review the details before you continue.”

## 11. Brand Narrative

Intuit began in 1983 when Scott Cook and Tom Proulx built Quicken after observing the difficulty of balancing a family checkbook. The company’s own history describes a progression from DOS to web, mobile, cloud, and AI while holding customer problems at the center. QuickBooks is one of the products through which that broader platform serves small businesses. [Intuit origins](https://www.intuit.com/company/origins/)

QuickBooks’ brand hub translates that financial-confidence story into a focused small-business expression: its logo signals possibility, its photography shows real customers in their own environments, and its illustrations bring playful charm to industries and people. That is a brand and marketing narrative; it should not be mistaken for proof of any unobserved product workflow. [QuickBooks Design](https://design.intuit.com/quickbooks/brand/)

## 12. Principles

1. **Start with the customer problem.** Intuit’s history says it falls in love with customer problems rather than solutions. *UI implication:* make the next meaningful task easy to identify before adding explanatory chrome.
2. **Champion small businesses.** QuickBooks frames its design mission around small businesses. *UI implication:* write benefits in terms of practical progress, clarity, and confidence.
3. **Use hierarchy sparingly.** The official type guidance recommends fewer sizes and a limited weight range. *UI implication:* let one clear heading/body/action relationship do the work before adding more display treatments.
4. **Protect trust and understanding.** Intuit’s operating values include customer obsession and integrity without compromise. *UI implication:* make consequential choices legible and avoid ambiguous financial language.

## 13. Personas

The following are product-context archetypes derived from official statements about QuickBooks serving small businesses; they are not research-validated personas or claims about a particular screen.

- **Small-business owner:** needs financial work to feel tractable alongside operating the business; benefits from direct, outcome-led language.
- **Self-employed operator:** needs confidence in routine financial decisions; benefits from hierarchy that makes the next task clear.
- **Accounting partner:** uses QuickBooks within a professional service relationship; benefits from unambiguous details and clear handoffs.

## 14. States

No QuickBooks state styling is established by the supplied capture. The following content practices are implementation guidance derived from the documented clarity and customer-support principles, not observed component specifications.

| State | Guidance boundary |
|---|---|
| Empty — no records | Name the missing thing and a next step; do not assign an unobserved icon or color. |
| Empty — filtered out | Explain that the filter caused the result and offer a reset path. |
| Loading — initial | Preserve the task context; no skeleton geometry or motion value is verified. |
| Loading — refresh | Keep already available information readable where the product permits; no visual treatment is specified here. |
| Error — recoverable | State what did not complete and give a concrete retry or correction action. |
| Error — access | Explain the access boundary without inventing an authentication-error component. |
| Error — validation | Describe the relevant field or issue plainly; no error color or focus style is verified. |
| Success | Confirm the completed outcome in sentence case; no success icon or color is verified. |
| Skeleton | Unresolved: no selector-backed skeleton shape, color, or animation was captured. |
| Disabled | Unresolved: no disabled visual value or state was captured. |

## 15. Motion & Easing

QuickBooks’ brand hub says motion can create feelings of passion and optimism, but the supplied raw evidence reports zero interactions and exposes no duration, delay, easing, or reduced-motion values. No motion token is therefore defined. Keep implementation motion purposeful and verify any timing or easing against a relevant official surface before treating it as QuickBooks guidance.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://design.intuit.com/quickbooks/brand/ https://design.intuit.com/quickbooks/product/ https://federation.intuit.com/as/authorization.oauth2?scope=openid+profile+email&response_type=code&redirect_uri=https%3A%2F%2Fpartnerauth.platform.intuit.com%2Fexternal_partner%2Fintuit_eiam%2Fcallback&client_id=9d678f82-f00e-4e8f-875e-484cac84cbc1&state=awb.228bcc57-93dd-4b7c-8691-6e252452f1e8
**Tier 2 sources:** https://getdesign.md/intuit (attempted; safe-open failure) https://styles.refero.design/?q=intuit (attempted; safe-open failure)
**Conflicts unresolved:** none
