---
id: familymart-tw
name: 全家便利商店
country: TW
category: ecommerce
homepage: "https://www.family.com.tw/Marketing/"
primary_color: "#00b347"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=family.com.tw&sz=128"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.family.com.tw/Marketing/ko", inspected: "2026-07-13" }
    - { id: convenience, kind: product-information, url: "https://www.family.com.tw/Marketing/zh/Convenience", inspected: "2026-07-13" }
    - { id: map, kind: store-service, url: "https://www.family.com.tw/Marketing/zh/Map", inspected: "2026-07-13" }
  sources:
    - { id: familymart-home-live, kind: product-surface, url: "https://www.family.com.tw/Marketing/ko", captured: "2026-07-13" }
    - { id: familymart-convenience-live, kind: product-surface, url: "https://www.family.com.tw/Marketing/zh/Convenience", captured: "2026-07-13" }
    - { id: familymart-map-live, kind: product-surface, url: "https://www.family.com.tw/Marketing/zh/Map", captured: "2026-07-13" }
    - { id: familymart-company-info, kind: official-doc, url: "https://www.family.com.tw/web_enterprise/page/information.aspx", captured: "2026-07-14" }
    - { id: familymart-vision, kind: official-doc, url: "https://www.family.com.tw/web_enterprise/page/business.aspx", captured: "2026-07-14" }
    - { id: familymart-franchise, kind: official-doc, url: "https://www.family.com.tw/Web_Franchise/page/advantage.aspx", captured: "2026-07-14" }
  conflicts: []
  claims:
    "tokens.colors.brand-green": &live { surface_id: home, source_id: familymart-home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.canvas": *live
    "tokens.colors.ink": *live
    "tokens.colors.navigation": *live
    "tokens.colors.utility-surface": *live
    "tokens.colors.card-title": *live
    "tokens.typography.body.size": *live
    "tokens.typography.body.weight": *live
    "tokens.typography.body.lineHeight": *live
    "tokens.typography.body.use": *live
    "tokens.typography.navigation.size": *live
    "tokens.typography.navigation.weight": *live
    "tokens.typography.navigation.lineHeight": *live
    "tokens.typography.navigation.use": *live
    "tokens.typography.card-title.size": *live
    "tokens.typography.card-title.weight": *live
    "tokens.typography.card-title.lineHeight": *live
    "tokens.typography.card-title.use": *live
    "tokens.spacing.xs": *live
    "tokens.spacing.sm": *live
    "tokens.spacing.md": *live
    "tokens.spacing.lg": *live
    "tokens.rounded.square": *live
    "tokens.rounded.compact": *live
    "tokens.shadow.flat": *live
    "tokens.components.current-section-nav-row.type": *live
    "tokens.components.current-section-nav-row.bg": *live
    "tokens.components.current-section-nav-row.fg": *live
    "tokens.components.current-section-nav-row.radius": *live
    "tokens.components.current-section-nav-row.height": *live
    "tokens.components.current-section-nav-row.font": *live
    "tokens.components.current-section-nav-row.use": *live
tokens:
  source: live-extract
  extracted: "2026-07-13"
  colors:
    brand-green: "#00b347"
    canvas: "#ffffff"
    ink: "#212529"
    navigation: "#7a7a7a"
    utility-surface: "#f2f2f2"
    card-title: "#68b5ac"
  typography:
    body: { size: 14, weight: 400, lineHeight: 1.5, use: "Observed public-route body and text navigation" }
    navigation: { size: 14, weight: 700, lineHeight: 1.5, use: "Observed main navigation list-item label" }
    card-title: { size: 16, weight: 700, lineHeight: 1.2, use: "Observed content-card title" }
  spacing: { xs: 3, sm: 5, md: 10, lg: 15 }
  rounded: { square: 0, compact: 3 }
  shadow:
    flat: "none"
  components:
    current-section-nav-row: { type: listItem, bg: "#00b347", fg: "#212529", radius: 0, height: 51, font: "14px/700", use: "Static current-section navigation row at home::li.main-menu__menu--active" }
  components_harvested: true
---

# Design System Inspiration of 全家便利商店

## 1. Visual Theme & Atmosphere

Taiwan FamilyMart (全家便利商店) is a convenience-retail business that began with its first Taipei shop in 1988 and has developed a nationwide store, supply-chain, fresh-food, and digital-service network. Its own corporate history frames the current period as digital transformation: a customer-needs-led OMO platform that links physical stores with data-driven services. On the three supplied public routes, that practical “always nearby” role appears as a white, information-dense utility surface with a narrow green brand signal, dark functional text, quiet gray navigation, compact three-pixel controls, and teal content-card headings. The page does not turn green into a dominant canvas; it uses the measured `#00b347` most visibly as a small current-section marker and utility accent. That restrained treatment lets store information, service categories, and promotional imagery carry the page’s changing content while the shell remains familiar.

The visual record is deliberately scoped. It describes the captured public marketing, convenience-information, and store-service routes—not a checkout, membership account, native app, corporate website, or unobserved mobile breakpoint. FamilyMart’s corporate material supports the business and OMO context; it does not turn corporate language into UI-token evidence. [Company information](https://www.family.com.tw/web_enterprise/page/information.aspx) · [Brand vision](https://www.family.com.tw/web_enterprise/page/business.aspx)

**Key characteristics:**

- White `#ffffff` page surfaces with `#212529` operational text.
- A compact `#00b347` current-section accent rather than a documented universal CTA fill.
- `#7a7a7a` text navigation and `#f2f2f2` utility controls keep the shell low contrast.
- Zero- and three-pixel corners dominate the measured public routes; no elevation token was observed.
- The card-title accent is teal `#68b5ac`, separating content emphasis from the navigation green.

## 2. Color Palette & Roles

### Observed public-route palette

- **Brand green** (`#00b347`): Repeated computed text/border value across all three supplied routes and the measured fill on a current-section navigation row. It is not generalized into an unmeasured primary-button system.
- **Canvas** (`#ffffff`): Repeated public-route background and card surface.
- **Ink** (`#212529`): Repeated body text and border value; use as the observed functional baseline.
- **Navigation gray** (`#7a7a7a`): The measured text/border value on `navbar-item--text` links.
- **Utility surface** (`#f2f2f2`): The measured fill of the compact `dropbtn-more__btn` utility control.
- **Card-title teal** (`#68b5ac`): Measured content-card title color. Its local role is retained rather than inferred as a general brand color.

Other measured siblings—including `#007bff`, `#444444`, `#737373`, `#8c8c8c`, `#28a745`, and `#36ad1b`—are kept in the raw proof but omitted from tokens because their role is not resolved at a smaller boundary.

## 3. Typography Rules

### Evidence classes

**Live computed surface-use.** The supplied bundle records `Microsoft JhengHei, 微軟正黑體, sans-serif` as the computed family on 652 visible observations across the three public routes. It is classified by the bundle as unresolved and low confidence because there is no matching loaded FontFace or known-system mapping. The observed 14px/400 body and text-navigation samples, 14px/700 main-navigation labels, and 16px/700 card titles are recorded as metrics only; no `tokens.typography.family` is emitted.

**Official product-use.** No first-party source found in the permitted research names a product or app typeface. No such claim is inferred from the public capture.

**Official distributed brand asset.** No first-party distributed FamilyMart type asset was identified in the permitted research. The absence of that finding does not alter the measured public-route metrics.

**Declared-only and loaded icon assets.** The bundle reports `Font Awesome 5 Free` as loaded on two card-role observations, and `Font Awesome 5 Brands`, `IAGlyphs`, and `Material Icons` as declared with zero visible use. These icon-font facts do not establish a FamilyMart UI typeface and are omitted from typography tokens.

### Observed public-route hierarchy

| Role | Size | Weight | Line height | Evidence boundary |
|---|---:|---:|---:|---|
| Body/text navigation | 14px | 400 | 21px | Captured public routes only |
| Main navigation list item | 14px | 700 | 21px | `main-menu__menu` row only |
| Content-card title | 16px | 700 | 19.2px | `card__title` only |

## 4. Component Stylings

### List item

**Current-section navigation row — static route context**
- Background: `#00b347`
- Text: `#212529`
- Radius: 0px
- Height: 51px
- Font: 14px / 700 / computed family unresolved
- Use: Static `home::li.main-menu__menu--active` current-section row; this selector, surface, and default geometry are the canonical `tokens.components.current-section-nav-row` evidence.

The supplied bundle reports `interactionCount: 0`. The selected-looking class is a static route snapshot, not an observed hover, focus, pressed, disabled, or other dynamic state. It is preserved as a list-item variant because the observed element is a navigation row, not as a button or inferred tab.

### Button and input measurements retained outside tokens

The bundle measures a compact `dropbtn-more__btn` button (`#f2f2f2` fill, `#00b347` text, 3px radius, 5px padding, 12px/400) and a 14px input sample. They remain raw default geometry only: zero interaction records do not support state matrices, and no interactive component token is emitted.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.family.com.tw/Marketing/ko, https://www.family.com.tw/Marketing/zh/Convenience, https://www.family.com.tw/Marketing/zh/Map, https://www.family.com.tw/web_enterprise/page/information.aspx, https://www.family.com.tw/web_enterprise/page/business.aspx
**Tier 2 sources:** attempted https://getdesign.md/familymart-tw; attempted https://styles.refero.design/?q=FamilyMart%20Taiwan
**Conflicts unresolved:** none

## 5. Layout Principles

- Use the measured 3/5/10/15px values only as a compact public-route rhythm; the packet does not establish a universal grid.
- Keep the green accent local to an explicitly current navigation row or measured utility treatment rather than flooding the canvas.
- Use the measured teal only for content-card-title emphasis until a wider product-surface role is observed.
- The three routes were captured at 1440×900. Do not derive mobile columns, touch targets, carousel behavior, or breakpoints from this packet.

## 6. Depth & Elevation

The supplied component and element samples report `box-shadow: none`. The reference therefore has only the flat shadow token; it does not claim that dialogs, menus, maps, or other unobserved layers are shadowless.

## 7. Do's and Don'ts

### Do

- Keep public information surfaces white and dense enough for store/service discovery.
- Use dark functional text, restrained gray navigation, and the locally measured green cue in their observed roles.
- Preserve the sharp-to-compact 0px/3px corner distinction.
- Treat route-selected navigation as a static context marker unless interaction evidence is captured.

### Don't

- Do not invent a green filled CTA, hover recipe, or universal active state from this capture.
- Do not substitute a system font for the unresolved computed family or label it a FamilyMart typeface.
- Do not transfer corporate vision language into a component specification.
- Do not infer authenticated purchase, account, or native-app behavior from the public routes.

## 8. Accessibility Notes

- Keep the observed dark-on-white informational baseline; evaluate any new green text or fill against its actual foreground/background pairing.
- Preserve visible route context without treating a class name as proof of keyboard focus.
- The supplied evidence contains no keyboard, screen-reader, contrast-audit, error, or responsive test. Those requirements remain unverified rather than assumed.

## 9. Implementation Notes

Use the machine-readable token block as the canonical source for the measured public-route values. `current-section-nav-row` is intentionally the sole component token: it is a high-confidence collector `listItem` with a named class, source surface, selector, and default geometry. The `components_harvested: true` marker records an honestly capped harvest, not a claim that every public component was observed.

## 10. Voice & Tone

The first-party vision frames the service around customer needs, convenience, shared growth, and a cross-industry convenience-life platform. For public service copy, that supports a practical, nearby, and action-oriented register—not a claim about an unpublished editorial style guide. [Brand vision](https://www.family.com.tw/web_enterprise/page/business.aspx)

| Do | Don't |
|---|---|
| Name the immediate service or store task. | Replace the task with abstract technology language. |
| Keep actions short and locally useful. | Promise unavailable real-time capability. |
| Connect convenience to a clear next step. | Invent a branded slogan or quote. |

Observed public-route voice samples: utility navigation labels, a convenience-information route, and a store-map route. Their exact strings are not tokenized or generalized as a copy system.

## 11. Brand Narrative

FamilyMart Taiwan says it opened its first Taipei store in 1988, grew from one store into a network embedded in daily routines, and built its business with employees, franchisees, customers, suppliers, and cross-industry partners. Its official history explicitly labels 2021–2026 as a period of digital transformation. [Company information](https://www.family.com.tw/web_enterprise/page/information.aspx)

The company describes its current direction as a customer-needs-led OMO, data-driven retail platform that connects stores and digital channels, with an aim of making cross-industry convenience part of everyday life. It also states an ESG direction of a fair, mutually beneficial sustainable ecosystem. These are corporate narrative facts, not UI or typography specifications. [Brand vision](https://www.family.com.tw/web_enterprise/page/business.aspx)

Its franchise material presents the lasting brand idea as “全家就是你家” and describes a mix of community retail, supply-chain capability, fresh food, and varied store formats. This reference does not attribute an unverified executive quotation or translate that idea into unobserved product behavior. [Franchise advantage](https://www.family.com.tw/Web_Franchise/page/advantage.aspx)

## 12. Principles

1. **Start from customer need.**
   *UI implication:* Make the immediate store/service task legible before secondary promotion; do not claim unobserved flows.
2. **Connect physical and digital convenience.**
   *UI implication:* Keep route context and service wayfinding explicit; verify any OMO interaction separately.
3. **Grow with a broad stakeholder network.**
   *UI implication:* Distinguish customer-facing service information from partner, corporate, and franchise content rather than collapsing the domains.
4. **Evolve with social and environmental change.**
   *UI implication:* Treat sustainability and service evolution as content context, not as license to invent status, success, or motion patterns.

## 13. Personas

These are service-context archetypes derived from FamilyMart Taiwan’s stated stakeholder and convenience-service framing; they are not research-validated personas or demographic claims.

- **Nearby customer:** Needs a clear, quick route to store, product, or service information.
- **Franchise operator:** Needs operating and support information distinct from consumer-facing marketing.
- **Partner or supplier:** Encounters corporate and ecosystem context rather than a consumer transaction flow.
- **Service explorer:** Uses public route navigation to understand changing convenience, food, and store offerings.

## 14. States

The supplied evidence establishes no branded state system. The following state boundaries are retained so they are not silently replaced with generic FamilyMart-looking UI.

| Category | Observed status | Boundary |
|---|---|---|
| Empty | Not observed | No empty-state copy, visual, or component token is asserted. |
| Loading | Not observed | No spinner, progress, or loading transition is asserted. |
| Error — form | Not observed | No validation color, message, or field geometry is asserted. |
| Error — service | Not observed | No outage or map-service treatment is asserted. |
| Success | Not observed | No confirmation treatment is asserted. |
| Skeleton | Not observed | No skeleton pattern is asserted. |
| Disabled | Not observed | No disabled visual token is asserted. |
| Selected route | Static capture only | A `main-menu__menu--active` row is observed; it is not an interaction-state claim. |
| Hover | Not observed | `interactionCount: 0`; omitted. |
| Focus | Not observed | `interactionCount: 0`; omitted. |
| Pressed | Not observed | `interactionCount: 0`; omitted. |

## 15. Motion & Easing

No duration, easing, transition, loading, carousel, or menu-motion value is established by the supplied evidence. The capture has `interactionCount: 0`; motion tokens and motion rules are therefore omitted rather than filled with a generic convenience-retail default.
