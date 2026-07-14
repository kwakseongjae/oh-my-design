---
id: shinhancard
name: Shinhan Card
country: KR
category: fintech
homepage: "https://www.shinhancard.com"
primary_color: "#005df9"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=shinhancard.com&sz=128"
verified: "2026-07-13"
added: "2026-06-09"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: product-web, url: "https://www.shinhancard.com/pconts/html/main.html", inspected: "2026-07-13" }
    - { id: credit-detail, kind: product-web, url: "https://www.shinhancard.com/pconts/html/card/apply/credit/1232390_2207.html", inspected: "2026-07-13" }
    - { id: premium-detail, kind: product-web, url: "https://www.shinhancard.com/pconts/html/card/apply/premium/1236160_2205.html", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.shinhancard.com/pconts/html/main.html", captured: "2026-07-13" }
    - { id: credit-detail-live, kind: product-surface, url: "https://www.shinhancard.com/pconts/html/card/apply/credit/1232390_2207.html", captured: "2026-07-13" }
    - { id: premium-detail-live, kind: product-surface, url: "https://www.shinhancard.com/pconts/html/card/apply/premium/1236160_2205.html", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &home { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.canvas": *home
    "tokens.colors.surface": *home
    "tokens.colors.tonal": &detail { surface_id: credit-detail, source_id: credit-detail-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.surface-accent": *home
    "tokens.colors.ink": *home
    "tokens.colors.body": *home
    "tokens.colors.slate": *home
    "tokens.colors.muted": *home
    "tokens.colors.border": *home
    "tokens.colors.danger": *home
    "tokens.colors.danger-bg": *home
    "tokens.typography.family.sans": *home
    "tokens.typography.display.size": *home
    "tokens.typography.display.weight": *home
    "tokens.typography.display.lineHeight": *home
    "tokens.typography.display.tracking": *home
    "tokens.typography.display.use": *home
    "tokens.typography.title.size": *detail
    "tokens.typography.title.weight": *detail
    "tokens.typography.title.lineHeight": *detail
    "tokens.typography.title.tracking": *detail
    "tokens.typography.title.use": *detail
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.tracking": *home
    "tokens.typography.body.use": *home
    "tokens.typography.compact.size": *home
    "tokens.typography.compact.weight": *home
    "tokens.typography.compact.lineHeight": *home
    "tokens.typography.compact.tracking": *home
    "tokens.typography.compact.use": *home
    "tokens.spacing.tight": *home
    "tokens.spacing.compact": *home
    "tokens.spacing.regular": *home
    "tokens.spacing.surface": *detail
    "tokens.rounded.sm": *home
    "tokens.rounded.md": *home
    "tokens.rounded.lg": *home
    "tokens.rounded.xl": *detail
    "tokens.shadow.menu": *home
    "tokens.components.badge-danger.type": *home
    "tokens.components.badge-danger.bg": *home
    "tokens.components.badge-danger.fg": *home
    "tokens.components.badge-danger.radius": *home
    "tokens.components.badge-danger.padding": *home
    "tokens.components.badge-danger.font": *home
    "tokens.components.badge-danger.use": *home
    "tokens.components.badge-blue.type": *home
    "tokens.components.badge-blue.bg": *home
    "tokens.components.badge-blue.fg": *home
    "tokens.components.badge-blue.radius": *home
    "tokens.components.badge-blue.padding": *home
    "tokens.components.badge-blue.font": *home
    "tokens.components.badge-blue.use": *home
tokens:
  source: reconciled
  extracted: "2026-07-13"
  components_harvested: true
  colors:
    primary: "#005df9"
    canvas: "#ffffff"
    surface: "#f8f9fc"
    tonal: "#f0f4fa"
    surface-accent: "#ebf0ff"
    ink: "#101828"
    body: "#475467"
    slate: "#344054"
    muted: "#667085"
    border: "#e4e7ec"
    danger: "#f44f4f"
    danger-bg: "#fff6f5"
  typography:
    family: { sans: "Digital One Shinhan" }
    display: { size: 32, weight: 800, lineHeight: 1.50, tracking: -0.64, use: "Promotional card title observed on the public home surface" }
    title: { size: 28, weight: 700, lineHeight: 1.50, tracking: -0.56, use: "Detail-page heading observed on credit-card product surface" }
    body: { size: 14, weight: 400, lineHeight: 1.71, tracking: -0.28, use: "Product-page reading text and controls" }
    compact: { size: 12, weight: 300, lineHeight: 1.67, tracking: -0.24, use: "Compact product and menu metadata" }
  spacing: { tight: 4, compact: 8, regular: 12, surface: 20 }
  rounded: { sm: 8, md: 12, lg: 16, xl: 20 }
  shadow:
    menu: "rgba(12,17,29,0.1) 0px 4px 16px 0px"
  components:
    badge-danger: { type: badge, bg: "#fff6f5", fg: "#f44f4f", radius: "12px", padding: "2px 8px", font: "11px / 500", use: "Tinted text badge on the public home surface (shc-badge--text type-tint theme-red)" }
    badge-blue: { type: badge, bg: "#ebf0ff", fg: "#005df9", radius: "12px", padding: "2px 8px", font: "11px / 500", use: "Tinted text badge on the public home surface (shc-badge--text type-tint theme-blue)" }
---

# Shinhan Card — Design Reference

## 1. Visual Theme & Atmosphere

Shinhan Card is a Korean specialist finance company whose stated business spans credit-card sales, cash advances, instalment finance, card loans, auto lease, and a broader platform-and-data business. The current public web experience connects that institutional remit to the group’s Shinhan SOL Pay digital brand: the company describes SOL Pay as a platform linking financial life and daily life, rather than only a card-management destination. On the captured public product surfaces, that transition is expressed through a bright `#005df9` action blue, quiet white and blue-grey fields, and `Digital One Shinhan` set tightly across product content. The result is a practical product language for card discovery and account-related tasks rather than a generalized marketing style.

The public system is more varied than the prior snapshot suggested. Product-detail pages carry `#f8f9fc` selection tiles and `#f0f4fa` toned actions; the home surface also exposes red and blue tint badges. Rounded values occur at 8, 12, 16, and 20px, while an opened navigation menu uses a light border and a small, explicit shadow. This reference therefore distinguishes the captured product web surfaces from the company’s corporate narrative and from any unobserved signed-in app, checkout, or documentation UI.

## 2. Color Palette & Roles

- **Primary blue** (`#005df9`): observed as the background of `shc-btn theme-primary size-xl` across the home, credit-detail, and premium-detail product surfaces.
- **Canvas** (`#ffffff`): observed page and expanded-menu surface.
- **Surface** (`#f8f9fc`): observed on home and product-detail selection tiles.
- **Tonal surface** (`#f0f4fa`): observed on the `shc-capsule-btn theme-tonal size-md` action on both captured detail pages.
- **Accent tint** (`#ebf0ff`): observed behind the blue text badge on the home surface.
- **Ink** (`#101828`), **body** (`#475467`), **slate** (`#344054`), and **muted** (`#667085`): observed text families across the three product surfaces.
- **Border** (`#e4e7ec`): observed on the open navigation menu and home chip.
- **Danger tint** (`#fff6f5`) and **danger text** (`#f44f4f`): observed on `shc-badge--text type-tint theme-red` on home.

## 3. Typography Rules

### Font evidence classes

- **Live computed surface-use — `Digital One Shinhan`.** The supplied capture records 691 visible uses across the home, credit-detail, and premium-detail product surfaces. Computed declarations resolve to `"Digital One Shinhan", -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`.
- **FontFaceSet/source corroboration — `Digital One Shinhan`.** The same bundle reports the family as `loaded` with high confidence and eight first-party source URLs: Light, Medium, Bold, and ExtraBold `.woff`/`.woff2` files under `https://www.shinhancard.com/pconts/static/webfonts/`.
- **Official distributed product asset.** Those files are served from Shinhan Card’s own webfont path and corroborate the live web family. A publicly indexed Shinhan Card font licence or separate brand-font catalogue was not found in this update, so no reuse licence is asserted.
- **Declared-only asset — `swiper-icons`.** A data-URL `@font-face` was declared, but the capture records zero visible uses. It is an icon asset, not a UI-family token.
- **System fallbacks.** The Apple/system/Segoe/Roboto/Arial chain remains a declaration fallback; it is not presented as a Shinhan Card brand font.

### Observed hierarchy

| Role | Size | Weight | Line height | Tracking | Captured context |
|---|---:|---:|---:|---:|---|
| Promotional title | 32px | 800 | 48px | -0.64px | Home card text |
| Detail heading | 28px | 700 | 42px | -0.56px | Credit-card product page |
| Product body/control | 14px | 400 | 24px | -0.28px | Product pages and controls |
| Compact metadata | 12px | 300 | 20px | -0.24px | Product and menu metadata |

## 4. Components

### Primary action

**Default**
- Background: `#005df9`
- Text: `#101828`
- Radius: `16px`
- Padding: `2px 12px`
- Font: `14px / 400 / Digital One Shinhan`
- Use: `shc-btn theme-primary size-xl` on home, credit-detail, and premium-detail public product surfaces; evidence `home::[data-omd-capture="27"]`.

### Toned capsule action

**Default**
- Background: `#f0f4fa`
- Text: `#101828`
- Radius: `20px`
- Padding: `8px 12px`
- Font: `14px / 400 / Digital One Shinhan`
- Use: `shc-capsule-btn theme-tonal size-md` on both captured product-detail surfaces; evidence `surface-2::[data-omd-capture="29"]`.

### Product-detail tile

**Default**
- Background: `#f8f9fc`
- Text: `#101828`
- Radius: `16px`
- Padding: `20px`
- Font: `14px / 400 / Digital One Shinhan`
- Use: captured product-detail tile on both credit and premium pages; evidence `surface-2::[data-omd-capture="20"]`.

### Tinted text badge

**Danger**
- Background: `#fff6f5`
- Text: `#f44f4f`
- Radius: `12px`
- Padding: `2px 8px`
- Font: `11px / 500 / Digital One Shinhan`
- Use: `shc-badge--text type-tint theme-red` on the public home surface; evidence `home::span`.

**Blue**
- Background: `#ebf0ff`
- Text: `#005df9`
- Radius: `12px`
- Padding: `2px 8px`
- Font: `11px / 500 / Digital One Shinhan`
- Use: `shc-badge--text type-tint theme-blue` on the public home surface; evidence `home::span`.

### Navigation menu

**Observed open menu**
- Background: `#ffffff`
- Text: `#101828`
- Border: `1px solid #e4e7ec`
- Radius: `12px`
- Shadow: `rgba(12,17,29,0.1) 0px 4px 16px 0px`
- Font: `14px / 400 / Digital One Shinhan`
- State: `expanded`, `menu-open`
- Use: `shc-dropdown__option` after the captured menu interaction on all three product surfaces; evidence `home::[data-omd-interaction-capture="menu-0-0"]`.

Only the defaults and the one expanded menu state above are documented. The supplied evidence records menu expansion only; it does not establish hover, focus, disabled, error, pressed, dialog, toast, input, or tab-state variants for these components.

---

**Verified:** 2026-07-13
**Tier 1 sources:** `https://www.shinhancard.com/pconts/html/main.html` (public product surface), `https://www.shinhancard.com/pconts/html/card/apply/credit/1232390_2207.html` (credit-card detail product surface), `https://www.shinhancard.com/pconts/html/card/apply/premium/1236160_2205.html` (premium-card detail product surface), `https://www.shinhancard.com/pconts/company/html/intro/business/business.html` (official company/business context), `https://www.shinhancard.com/pconts/company/html/promotion/press/1225309_3999.html` (official SOL Pay brand-transition context)
**Tier 2 sources:** `https://getdesign.md/shinhancard` (attempted; built-in web open safe-open failure and no Shinhan Card record returned by search), `https://styles.refero.design/?q=Shinhan%20Card` (attempted; built-in web open safe-open failure and no matching indexed result returned by search)
**Conflicts unresolved:** none

Legacy primary text, tertiary/indigo button, input, tab, list-row, toggle, universal-card, broad responsive, and all unobserved interactive-state claims were removed because the supplied 2026 three-surface bundle does not support them.

## 5. Layout Principles

### Observed spacing and shape

The capture’s most frequent spacing values are 4, 8, 12, 20, and 24px. Component-level evidence gives the useful boundary: the toned action uses 8px 12px padding, while the product-detail tile uses 20px padding. Rounded values are not a single global scale: the captured actions and menus use 8, 12, 16, or 20px according to component.

### Surface-domain boundary

The three inspected URLs are public product-web surfaces. They are not a signed-in statement, checkout, or mobile-app capture, so this reference does not prescribe a transactional information architecture, responsive breakpoint map, or a universal grid.

## 6. Depth & Elevation

The expanded `shc-dropdown__option` menu is the only directly measured elevated layer: `rgba(12,17,29,0.1) 0px 4px 16px 0px` with a 1px `#e4e7ec` border and 12px radius. The product tiles measured in this bundle use no blur shadow. This is evidence for those two observed contexts, not a general “no-shadow” rule for the whole product.

## 7. Do's and Don'ts

### Do

- Use `#005df9` for a primary action only when applying the observed `shc-btn theme-primary size-xl` pattern.
- Keep the observed `Digital One Shinhan` webfont metadata when the first-party files can be loaded; otherwise label it unavailable rather than substituting a system font as the brand face.
- Preserve component provenance: product-detail tile values belong to the two card-detail URLs, while tint badges were observed on home.
- Treat the 12px-radius elevated menu as an observed open-menu treatment, not a general card token.

### Don't

- Don't promote the declared `swiper-icons` face or the system fallback chain to Shinhan Card’s UI family.
- Don't infer a white primary-button label, focus ring, hover style, disabled state, input spec, or tab treatment from the unobserved component states.
- Don't extend public product-web measurements into signed-in app, checkout, or documentation UI.
- Don't represent the prior indigo button, full-pill toggle, or universal 24px card as current canonical components without new evidence.

## 8. Responsive Behavior

No viewport comparison is present in the supplied evidence bundle. The reference therefore preserves no breakpoint, mobile-navigation, touch-target, or image-behaviour rule. A responsive claim requires a later capture that records the relevant viewport and component provenance.

## 9. Agent Prompt Guide

Use this reference as a constrained public-product-web sample, not a complete Shinhan Card application kit. A faithful observed action is `#005df9` background, `#101828` text, 16px radius, 2px 12px padding, and 14px/400 `Digital One Shinhan`; a toned detail-page action is `#f0f4fa`, `#101828`, 20px radius, and 8px 12px padding. For product-detail tiles, use `#f8f9fc`, 16px radius, and 20px padding only in that detail-page context. Do not invent a primary-button contrast color or interaction state.

## 10. Voice & Tone

Shinhan Card’s official business description uses a practical service register: card, instalment-finance, loan, lease, platform, and data services are named plainly, and SOL Pay is described as connecting financial life and everyday life. The public product surfaces therefore support a clear, task-oriented tone rather than speculative lifestyle copy. The 2023 SOL Pay announcement says the rebrand was intended to make the group’s digital brands easier for customers to understand and use; that supports clarity and familiarity as editorial goals, not a complete public copywriting standard.

### Do

- Name the card or financial task directly.
- Use short, respectful Korean labels that help a customer move through a known task.
- Keep SOL Pay references tied to their stated payment and daily-finance role.

### Don't

- Don't invent a brand slogan, executive quote, or promotional tone rule from component styling.
- Don't turn regulatory, eligibility, or lending copy into casual lifestyle claims.

## 11. Brand Narrative

Shinhan Card describes itself as a specialist finance company handling credit cards and instalment finance, with card loans and auto lease among its stated businesses. Its official business page places those services alongside a platform-and-data business that uses the digital Shinhan SOL Pay platform to connect customers’ financial lives and daily lives. It also situates the company’s current identity after the 2007 integration with LG Card.

The recent public evolution relevant to this reference is the SOL Pay naming transition. In its November 2023 announcement, Shinhan Card said the former life-finance platform Shinhan pLay had been renamed under the group’s Shinhan SOL digital brand while strengthening the card company’s payment identity. The captured web system belongs to public card and product-detail surfaces in that larger context; it is not evidence about the complete logged-in SOL Pay experience.

## 12. Principles

1. **Connect card services to daily finance.** Shinhan Card explicitly frames SOL Pay as linking financial life and daily life. *UI implication:* keep public product paths understandable as card, payment, and finance tasks rather than generic platform navigation.
2. **Make the group digital brand easier to understand.** The SOL Pay announcement identifies intuitive understanding and easier use as the goal of the brand transition. *UI implication:* prefer direct labels and avoid using visual novelty as a replacement for task clarity.
3. **Preserve evidence domains.** Public web product pages, corporate/company material, and a potentially signed-in app answer different questions. *UI implication:* reuse a captured public component only with its URL and state boundary; do not infer hidden product patterns.

## 13. Personas

### Evidence-backed service audiences (not fictional personas)

- **Individual, corporate, and public-organization card users.** The official business page describes credit-card payment services for these groups. No individual behaviour, name, or demographic is asserted.
- **Customers considering card-finance products.** The official page describes short-term and long-term card loans and instalment finance. This supports a service audience only, not a persona journey.
- **SOL Pay users.** Shinhan Card describes SOL Pay as its digital platform for connecting finance and daily life. The supplied web capture does not expose a signed-in user flow or user-research segment.

Specific personas, motivations, and quotes remain **[FILL IN]** until supported by first-party research or user-provided material.

## 14. States

| Observed state | Evidence boundary |
|---|---|
| Expanded navigation menu | Captured after a menu interaction on all three product surfaces; white surface, 1px `#e4e7ec` border, 12px radius, and `rgba(12,17,29,0.1) 0px 4px 16px 0px` shadow. |
| Hover, focus, disabled, error, loading, empty, success, toast, dialog, and form validation | Not established by the supplied bundle; intentionally omitted rather than synthesized. |

## 15. Motion & Easing

No motion duration, easing curve, or reduced-motion treatment was captured. The menu’s open state proves that a menu can expand; it does not prove a transition recipe. Motion tokens and animation guidance are therefore **[FILL IN]** pending a capture that records timing and behaviour.
