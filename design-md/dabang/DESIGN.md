---
id: dabang
name: 다방
display_name_kr: Dabang (다방)
country: KR
category: consumer-tech
homepage: "https://www.dabangapp.com"
primary_color: "#ff3478"
logo:
  type: favicon
  slug: "https://www.dabangapp.com/static/favicon.ico"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: product-home, kind: product-surface, url: "https://www.dabangapp.com/", inspected: "2026-07-13" }
    - { id: product-map, kind: product-surface, url: "https://www.dabangapp.com/map/onetwo?m_lat=37.494367328004216&m_lng=127.01446798508894&m_zoom=11", inspected: "2026-07-13" }
    - { id: support-faq, kind: support-documentation, url: "https://www.dabangapp.com/service/faq", inspected: "2026-07-13" }
  sources:
    - { id: home-capture, kind: product-surface, url: "https://www.dabangapp.com/", captured: "2026-07-13" }
    - { id: map-capture, kind: product-surface, url: "https://www.dabangapp.com/map/onetwo?m_lat=37.494367328004216&m_lng=127.01446798508894&m_zoom=11", captured: "2026-07-13" }
    - { id: faq-capture, kind: product-surface, url: "https://www.dabangapp.com/service/faq", captured: "2026-07-13" }
    - { id: service-context, kind: official-doc, url: "https://www.station3.co.kr/service/", captured: "2026-07-13" }
    - { id: terms-context, kind: official-doc, url: "https://static.dabangapp.com/html/useragreement.html", captured: "2026-07-13" }
    - { id: font-design, kind: brand-asset, url: "https://github.com/orioncactus/pretendard", captured: "2026-07-13" }
    - { id: font-license, kind: license, url: "https://github.com/orioncactus/pretendard/blob/main/LICENSE", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.canvas": &home { surface_id: product-home, source_id: home-capture, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.foreground": *home
    "tokens.colors.border": *home
    "tokens.colors.surface-muted": *home
    "tokens.colors.action": &map { surface_id: product-map, source_id: map-capture, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.map-field-border": *map
    "tokens.typography.family.ui": *home
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.use": *home
    "tokens.typography.section-title.size": *home
    "tokens.typography.section-title.weight": *home
    "tokens.typography.section-title.lineHeight": *home
    "tokens.typography.section-title.use": *home
    "tokens.typography.map-control.size": *map
    "tokens.typography.map-control.weight": *map
    "tokens.typography.map-control.lineHeight": *map
    "tokens.typography.map-control.use": *map
    "tokens.spacing.xs": *home
    "tokens.spacing.sm": *home
    "tokens.spacing.md": *home
    "tokens.rounded.compact": *home
    "tokens.rounded.standard": *home
    "tokens.rounded.map-tool": *map
    "tokens.rounded.search-entry": *home
    "tokens.rounded.map-search": *map
    "tokens.components.header-account-control.type": *home
    "tokens.components.header-account-control.bg": *home
    "tokens.components.header-account-control.fg": *home
    "tokens.components.header-account-control.radius": *home
    "tokens.components.header-account-control.padding": *home
    "tokens.components.header-account-control.font": *home
    "tokens.components.header-account-control.states": *home
    "tokens.components.header-account-control.use": *home
    "tokens.components.header-outline-action.type": *home
    "tokens.components.header-outline-action.fg": *home
    "tokens.components.header-outline-action.border": *home
    "tokens.components.header-outline-action.radius": *home
    "tokens.components.header-outline-action.padding": *home
    "tokens.components.header-outline-action.font": *home
    "tokens.components.header-outline-action.states": *home
    "tokens.components.header-outline-action.use": *home
    "tokens.components.map-location-search.type": *map
    "tokens.components.map-location-search.bg": *map
    "tokens.components.map-location-search.fg": *map
    "tokens.components.map-location-search.border": *map
    "tokens.components.map-location-search.radius": *map
    "tokens.components.map-location-search.padding": *map
    "tokens.components.map-location-search.font": *map
    "tokens.components.map-location-search.states": *map
    "tokens.components.map-location-search.use": *map
    "tokens.components.map-dock-control.type": *map
    "tokens.components.map-dock-control.bg": *map
    "tokens.components.map-dock-control.fg": *map
    "tokens.components.map-dock-control.border": *map
    "tokens.components.map-dock-control.radius": *map
    "tokens.components.map-dock-control.padding": *map
    "tokens.components.map-dock-control.font": *map
    "tokens.components.map-dock-control.states": *map
    "tokens.components.map-dock-control.use": *map
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Values are limited to selector-backed home and map observations in the supplied evidence. The support FAQ is documentation chrome, not a product-token source."
  colors:
    canvas: "#ffffff"
    foreground: "#222222"
    border: "#dfdfdf"
    surface-muted: "#f5f5f5"
    action: "#326cf9"
    map-field-border: "#ededed"
  typography:
    family: { ui: "Pretendard Variable" }
    body: { size: 14, weight: 400, lineHeight: "24px", use: "Repeated public home and map text/control cluster" }
    section-title: { size: 20, weight: 700, lineHeight: "32px", use: "Public-home section-title sample" }
    map-control: { size: 14, weight: 400, lineHeight: "24px", use: "Map location-search and dock-control samples" }
  spacing: { xs: 4, sm: 8, md: 16 }
  rounded: { compact: 2, standard: 8, map-tool: 6, search-entry: 32, map-search: 42 }
  components:
    header-account-control: { type: button, bg: "#ffffff", fg: "#222222", radius: "8px", padding: "8px 16px", font: "16px / 400 Pretendard Variable", states: "default only; no interaction expansion captured", use: "Shared public header account control; home::[data-omd-capture=4]" }
    header-outline-action: { type: button, fg: "#222222", border: "1px solid #dfdfdf", radius: "2px", padding: "0px 16px", font: "14px / 700 Pretendard Variable", states: "default only; no interaction expansion captured", use: "Shared public header outline action; home::[data-omd-capture=5]" }
    map-location-search: { type: input, bg: "#ffffff", fg: "#222222", border: "1px solid #ededed", radius: "42px", padding: "7px 37px 7px 15px", font: "14px / 400 Pretendard Variable", states: "default only; no interaction expansion captured", use: "Map location-search field; surface-2::[data-omd-capture=1]" }
    map-dock-control: { type: button, bg: "#ffffff", fg: "#000000", border: "1px solid #dfdfdf", radius: "2px", padding: "0px 7px 0px 11px", font: "14px / 400 Pretendard Variable", states: "default only; no interaction expansion captured", use: "Map dock control; surface-2::[data-omd-capture=14]" }
  components_harvested: true
---

# Design System Inspiration of Dabang (다방)

## 1. Visual Theme & Atmosphere

Dabang is Station3’s residential-information service: the company presents Dabang alongside its broker and landlord services, while the service terms describe a platform where individual users, licensed brokers, and landlords can find or register property information. The current public web product is deliberately utilitarian rather than a brand campaign. Its home and map routes use a white field, dark neutral text, compact controls, and one loaded `Pretendard Variable` family to make browsing and filtering legible. The notable product expression is geometric rather than decorative: an 8px header control, 2px outlined actions, a 32px home-search pill, and a 42px map-search pill coexist because they serve different contexts.

The supplied evidence establishes three separate source domains: the home and map as product surfaces, the FAQ as support-documentation chrome, and Station3’s service page as corporate context. This reference does not turn support controls or corporate messaging into universal product tokens.

## 2. Color Palette & Roles

- `#FFFFFF` — observed public home/map canvas and control background.
- `#222222` — repeated home/map foreground and control text.
- `#DFDFDF` — repeated outline border on public header and map dock controls.
- `#F5F5F5` — observed muted surface and header-control hover sample; it is not promoted as a global interaction state.
- `#EDEDED` — map location-search border.
- `#326CF9` — observed map-route action ink/border and selected tool treatment. The current evidence supports it as a map action color, not a universal Dabang CTA rule.

The pink value in frontmatter is catalog identity metadata. It was not established as a reusable current product-control token by this supplied capture, so it is not silently substituted for the map action color.

## 3. Typography Rules

### Verified visible UI family

`Pretendard Variable` is the only family promoted to `tokens.typography.family.ui`. The supplied bundle records 376 visible first-family uses across body text, headings, buttons, inputs, and lists; it is marked `loaded` with high confidence and is corroborated by 92 Dabang-hosted dynamic-subset WOFF2 source URLs. That is computed use plus FontFaceSet/source corroboration, not an inference from a CSS declaration.

| Role | Observed value | Surface boundary |
|---|---|---|
| Body/control cluster | 14px / 400 / 24px | Repeated on the public home and map routes |
| Home section title | 20px / 700 / 32px | Public home heading sample |
| Map input/dock control | 14px / 400 / 24px | Map search and dock-control samples |
| Support FAQ display | 46px / 700 / 70px | Support-documentation route only; not a product type token |

| Evidence class | Resolution |
|---|---|
| **Official product-use** | No separate Dabang typography announcement was found in the checked official sources. |
| **Live computed surface-use** | `Pretendard Variable` is loaded/high and visibly used across all three supplied routes. |
| **Official distributed asset** | Pretendard’s upstream project distributes the family under SIL Open Font License 1.1. This explains the font asset but does not itself prove Dabang use. |
| **Declared-only** | No additional family is promoted from declarations because the supplied bundle reports only the loaded, visible Pretendard family. |
| **Unresolved** | Native-app typography metrics and a Dabang-owned font licence/asset are not established by these public web sources. |

## 4. Components

### Header account control

**Default**
- Background: `#FFFFFF`
- Text: `#222222`
- Radius: `8px`
- Padding: `8px 16px`
- Font: `16px / 400 Pretendard Variable`
- Use: Shared public header account control on the product home; `home::[data-omd-capture="4"]`.

### Header outline action

**Default**
- Text: `#222222`
- Border: `1px solid #DFDFDF`
- Radius: `2px`
- Padding: `0px 16px`
- Font: `14px / 700 Pretendard Variable`
- Use: Shared public header outline action; `home::[data-omd-capture="5"]`.

### Map location search

**Default**
- Background: `#FFFFFF`
- Text: `#222222`
- Border: `1px solid #EDEDED`
- Radius: `42px`
- Padding: `7px 37px 7px 15px`
- Font: `14px / 400 Pretendard Variable`
- Use: Map location-search field; `surface-2::[data-omd-capture="1"]`.

### Map dock control

**Default**
- Background: `#FFFFFF`
- Text: `#000000`
- Border: `1px solid #DFDFDF`
- Radius: `2px`
- Padding: `0px 7px 0px 11px`
- Font: `14px / 400 Pretendard Variable`
- Use: Map dock control; `surface-2::[data-omd-capture="14"]`.

### Support FAQ row

**Default**
- Text: `#000000`
- Border: `1px solid #F5F5F5` on the block end
- Padding: `16px 20px`
- Font: `13.3333px / 400 Pretendard Variable`
- Use: Support-documentation FAQ row; `surface-3::[data-omd-capture="10"]`. It is documented here as support chrome, not promoted into product tokens.

The supplied bundle has `interactionCount: 0` and an empty `interactions` array. Static selector strings ending in hover, focus, or pressed are therefore not reusable state evidence. No menu, dialog, validation, disabled, loading, responsive, or component variants beyond the defaults above are claimed.

---

**Verified:** 2026-07-13
**Tier 1 sources:** `https://www.dabangapp.com/` (product home), `https://www.dabangapp.com/map/onetwo?m_lat=37.494367328004216&m_lng=127.01446798508894&m_zoom=11` (product map), `https://www.dabangapp.com/service/faq` (support documentation), `https://www.station3.co.kr/service/` (official company/service context), `https://static.dabangapp.com/html/useragreement.html` (official service and stakeholder context), `https://github.com/orioncactus/pretendard` (upstream font context), and `https://github.com/orioncactus/pretendard/blob/main/LICENSE` (font licence).
**Tier 2 sources:** `https://getdesign.md/dabang` (attempted; built-in web open safe-open failure and name search returned no record), `https://styles.refero.design/?q=dabang` (attempted; built-in web open safe-open failure and name search returned no record).
**Conflicts unresolved:** none

The earlier reference’s full semantic colour ramps, pink-as-global-brand-control rule, status meanings, map-marker semantics, universal 8px layout system, zero-shadow universal rule, and unobserved interaction/motion matrices were rolled back. The supplied 2026 bundle does not substantiate them as reusable product claims.

## 5. Layout Principles

- The home and map are distinct product compositions: home exposes a 32px-radius search-entry control, while the map route uses a 42px location-search field and compact dock controls.
- Repeated observed spacing values support only a conservative `4 / 8 / 16px` set. They do not establish a full layout grid, rail width, map-canvas percentage, or breakpoint contract.
- The FAQ uses a separate support-documentation layout. Its 16px/20px row padding must not be treated as map or listing-card spacing.

## 6. Depth & Elevation

The selector-backed product controls retained in §4 report `box-shadow: none`. This is useful evidence for those controls, but not proof of a global zero-elevation system: the supplied routes do not establish cards, markers, drawers, or native-app elevation. Use flat borders and surfaces only where a retained component names them; label any broader shadow system as a local extension.

## 7. Do's and Don'ts

### Do

- Keep home, map, support-documentation, and corporate-context evidence explicitly separated.
- Use `Pretendard Variable` only where its loaded public-web evidence applies; retain a normal runtime fallback in an implementation.
- Preserve the observed 32px home-search and 42px map-search geometries as separate controls.
- Use `#326CF9` only for the documented map action context unless a broader product source verifies it.
- Build the retained outline controls from their explicit border, radius, padding, and type values.

### Don't

- Don't promote the frontmatter pink identity color into a current universal CTA or status color.
- Don't represent the FAQ disclosure row as a product-listing, modal, or accordion component contract.
- Don't infer hover, pressed, focus, disabled, error, or loading states from static pseudo-state selector names when interaction expansion is zero.
- Don't substitute a system font as if it were loaded Pretendard Variable.
- Don't invent map markers, card elevation, breakpoints, icon geometry, or motion values absent from the supplied evidence.

## 8. Responsive Behavior

The supplied evidence uses a 1440×900 viewport for all three routes. It does not verify mobile breakpoints, map drawer behavior, native safe areas, or listing density at another viewport. Treat the current dimensions as desktop public-web observations only.

## 9. Agent Prompt Guide

- “Create a Dabang public-home account control with a white background, `#222222` text, 8px radius, 8px 16px padding, and 16px/400 Pretendard Variable.”
- “Create a Dabang map location-search field with a white background, 1px `#EDEDED` border, 42px radius, 7px 37px 7px 15px padding, and 14px/400 Pretendard Variable.”
- “Create a map dock control from the selector-backed default only; do not add hover, disabled, or selected states as verified Dabang behaviour.”
- “If a component is not listed here, mark it as an extension rather than presenting it as a verified Dabang product component.”

## 10. Voice & Tone

The official service context centres on housing information and on connecting the people who search for, list, and manage a property: individual users, licensed brokers, and landlords. That makes the reliable voice direction practical and role-aware. Name the property task, make the next action clear, and distinguish information provided by the platform from content entered by a user or broker. Avoid a campaign-like promise, a demographic stereotype, or an implication that the platform itself is a party to a property transaction.

## 11. Brand Narrative

Station3 publicly positions Dabang beside Dabang Pro and Dabang Bangjoo-in: consumer property discovery, broker workflow, and landlord-management services are related but different offerings. The service terms make the platform boundary equally explicit: Dabang provides real-estate information and a place for registered content, while users, landlords, and brokers provide the relevant listings and conduct their own transactions.

The current public web UI reflects that operational role. Its controlled neutral palette and compact map controls prioritize a finding/filtering task rather than a decorative real-estate lifestyle story. The pink identity colour remains catalog metadata in this revision because the supplied web evidence does not show it as a reusable product-control rule.

## 12. Principles

1. **Separate source domains.** Home/map evidence, FAQ chrome, and Station3 corporate copy have different authority.
   *UI implication:* do not merge their component values into one synthetic library.
2. **Keep property tasks explicit.** The terms distinguish search, listing, and transaction roles.
   *UI implication:* name the task and actor instead of using vague conversion language.
3. **Use action blue locally.** `#326CF9` is verified in the map-route action treatment only.
   *UI implication:* expand its use only after a specific product component provides evidence.
4. **Preserve measured geometry.** The two search pills differ by route and purpose.
   *UI implication:* keep the 32px and 42px radii distinct rather than averaging them.

## 13. Personas

These are service-role contexts from the official terms and Station3 service page, not invented demographic personas.

- **Property seeker:** searches public housing information and needs a clear route into filtering or inquiry.
- **Licensed broker:** can register and provide permitted property information through the service.
- **Landlord:** can provide a listing for rental and needs the platform’s registration boundary made clear.

## 14. States

| Evidence area | Verified state boundary |
|---|---|
| Header account and outline controls | Default visual values only |
| Map location search and dock control | Default visual values only |
| Support FAQ row | Default documentation-row visual values only |

No interaction expansion was retained, so hover, focus, pressed, disabled, error, empty, loading, success, skeleton, menu, dialog, and toast contracts remain unclaimed.

## 15. Motion & Easing

No motion duration, easing curve, or animation behaviour is promoted. The static supplied capture has no interaction records, and any motion implementation must be treated as a local extension with reduced-motion support rather than as verified Dabang behaviour.
