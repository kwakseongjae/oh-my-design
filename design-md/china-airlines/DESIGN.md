---
id: china-airlines
name: "中華航空"
country: TW
category: consumer-tech
homepage: "https://www.china-airlines.com/"
primary_color: "#23569d"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=www.china-airlines.com&sz=128"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: product, url: "https://www.china-airlines.com/kr/ko", inspected: "2026-07-13" }
    - { id: surface-2, kind: corporate, url: "https://www.china-airlines.com/kr/ko/about-china-airlines/about-us", inspected: "2026-07-13" }
    - { id: surface-3, kind: corporate, url: "https://www.china-airlines.com/kr/ko/about-china-airlines/corporate-governance", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.china-airlines.com/kr/ko", captured: "2026-07-13" }
    - { id: about-live, kind: product-surface, url: "https://www.china-airlines.com/kr/ko/about-china-airlines/about-us", captured: "2026-07-13" }
    - { id: governance-live, kind: product-surface, url: "https://www.china-airlines.com/kr/ko/about-china-airlines/corporate-governance", captured: "2026-07-13" }
    - { id: design-story, kind: official-doc, url: "https://www.china-airlines.com/it/en/about-us/design-story", captured: "2026-07-13" }
    - { id: sustainability-vision, kind: official-doc, url: "https://calec.china-airlines.com/csr/en/aboutus.html", captured: "2026-07-13" }
    - { id: brand-center, kind: brand-asset, url: "https://brandcenter.china-airlines.com/", captured: "2026-07-13" }
    - { id: roboto-license, kind: license, url: "https://github.com/googlefonts/roboto-2/blob/main/LICENSE", captured: "2026-07-13" }
    - { id: noto-license, kind: license, url: "https://notofonts.github.io/noto-docs/website/use/", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.canvas": &home { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.ink": *home
    "tokens.colors.primary": *home
    "tokens.colors.primary-bright": *home
    "tokens.colors.booking-accent": *home
    "tokens.colors.on-primary": *home
    "tokens.colors.muted": *home
    "tokens.colors.hairline": *home
    "tokens.colors.soft-blue": *home
    "tokens.colors.soft-blue-border": *home
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.tracking": *home
    "tokens.typography.body.use": *home
    "tokens.typography.action.size": *home
    "tokens.typography.action.weight": *home
    "tokens.typography.action.lineHeight": *home
    "tokens.typography.action.tracking": *home
    "tokens.typography.action.use": *home
    "tokens.typography.section-heading.size": *home
    "tokens.typography.section-heading.weight": *home
    "tokens.typography.section-heading.lineHeight": *home
    "tokens.typography.section-heading.tracking": *home
    "tokens.typography.section-heading.use": *home
    "tokens.spacing.action-x": *home
    "tokens.spacing.menu-end": *home
    "tokens.spacing.dialog-viewport": *home
    "tokens.rounded.control": *home
    "tokens.rounded.dialog": &dialog { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.rounded.pill": *home
    "tokens.shadow.dialog": *dialog
    "tokens.components.action-primary-blue.type": *home
    "tokens.components.action-primary-blue.bg": *home
    "tokens.components.action-primary-blue.fg": *home
    "tokens.components.action-primary-blue.radius": *home
    "tokens.components.action-primary-blue.padding": *home
    "tokens.components.action-primary-blue.height": *home
    "tokens.components.action-primary-blue.font": *home
    "tokens.components.action-primary-blue.states": *home
    "tokens.components.action-primary-blue.use": *home
    "tokens.components.selected-menu-option.type": &menu_option { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.components.selected-menu-option.bg": *menu_option
    "tokens.components.selected-menu-option.fg": *menu_option
    "tokens.components.selected-menu-option.radius": *menu_option
    "tokens.components.selected-menu-option.padding": *menu_option
    "tokens.components.selected-menu-option.height": *menu_option
    "tokens.components.selected-menu-option.font": *menu_option
    "tokens.components.selected-menu-option.states": *menu_option
    "tokens.components.selected-menu-option.use": *menu_option
    "tokens.components.search-dialog.type": *dialog
    "tokens.components.search-dialog.bg": *dialog
    "tokens.components.search-dialog.fg": *dialog
    "tokens.components.search-dialog.radius": *dialog
    "tokens.components.search-dialog.shadow": *dialog
    "tokens.components.search-dialog.states": *dialog
    "tokens.components.search-dialog.use": *dialog
tokens:
  source: live-extract
  extracted: "2026-07-13"
  components_harvested: true
  colors:
    canvas: "#ffffff"
    ink: "#17181c"
    primary: "#23569d"
    primary-bright: "#1d6dcd"
    booking-accent: "#d81159"
    on-primary: "#ffffff"
    muted: "#69707a"
    hairline: "#8e959f"
    soft-blue: "#f1f8fd"
    soft-blue-border: "#9fd1f1"
  typography:
    body: { size: 16, weight: 400, lineHeight: 28, tracking: 0.16, use: "Measured public-web body and list text; no brand family token" }
    action: { size: 16, weight: 500, lineHeight: 28, tracking: 0.16, use: "Measured public-web primary-action text; no brand family token" }
    section-heading: { size: 40, weight: 500, lineHeight: 56, tracking: 0, use: "Measured public-web section heading; no brand family token" }
  spacing: { action-x: 20, menu-end: 24, dialog-viewport: 40 }
  rounded: { control: 8, dialog: 20, pill: 40 }
  shadow:
    dialog: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(23, 24, 28, 0.12) 0px 2px 4px 0px, rgba(23, 24, 28, 0.09) 0px 4px 28px 0px, rgba(23, 24, 28, 0.04) 0px 4px 16px 0px, rgba(23, 24, 28, 0.04) 0px 60px 50px 0px, rgba(23, 24, 28, 0.1) 0px 20px 32px 0px, rgba(23, 24, 28, 0.1) 0px 0px 0px 0px"
  components:
    action-primary-blue: { type: button, bg: "#23569d", fg: "#ffffff", radius: "8px", padding: "0px 20px", height: "56px", font: "16px / 500", states: "default observed on all three captured public surfaces; no altered pseudo-state captured", use: "Primary blue public-web action; `home::[data-omd-capture=\"99\"]`" }
    selected-menu-option: { type: button, bg: "#ffffff", fg: "#23569d", radius: "8px", padding: "0px 12px", height: "48px", font: "16px / 500", states: "expanded menu and selected option state observed (`aria-selected=true`)", use: "Selected option button in the captured public booking/menu control; `home::[data-omd-capture=\"88\"]`" }
    search-dialog: { type: dialog, bg: "#ffffff", fg: "#000000", radius: "20px", shadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(23, 24, 28, 0.12) 0px 2px 4px 0px, rgba(23, 24, 28, 0.09) 0px 4px 28px 0px, rgba(23, 24, 28, 0.04) 0px 4px 16px 0px, rgba(23, 24, 28, 0.04) 0px 60px 50px 0px, rgba(23, 24, 28, 0.1) 0px 20px 32px 0px, rgba(23, 24, 28, 0.1) 0px 0px 0px 0px", states: "default shell and dialog-open state observed", use: "Public search dialog shell; `home::div[role=dialog]`" }
---

# 中華航空 — Design Reference

## 1. Visual Theme & Atmosphere

China Airlines is Taiwan’s international carrier, founded in 1959, whose public passenger site connects ticketing and travel-service tasks with a broader corporate story of safe, reliable global connection. Its digital surface is deliberately more utilitarian than the cabin identity: white planes, dark ink, disciplined blue actions, muted gray utility controls, and compact 8px corners let booking and navigation carry the page. The distinctive brand expression lives most strongly in the relationship between that calm service layer and the company’s design story: Oriental aesthetics, local inspirations, a home-away-from-home feeling, and warm blessings shape the cabin experience. The current corporate direction was refreshed in 2024 around “Believe we can always do better,” a mission to create more wonderful moments through flying, and a vision of leading Asia-Pacific while flying worldwide. These are official company and cabin-design narratives, not an extrapolation of the three captured web surfaces.

- **Reserved service foundation:** observed public-web canvas `#ffffff`, ink `#17181c`, and gray utility text `#69707a` keep high-density travel tasks legible.
- **Layered blue:** `#23569d` is the observed standard blue action and selected-option text; `#1d6dcd` appears on a circular public action. Neither value is claimed for an authenticated mobile app or cabin surface.
- **One local booking accent:** `#d81159` is a measured home action fill, retained as a local booking accent rather than a global brand-primary claim.
- **Cultural expression belongs to its own domain:** persimmon, Song-dynasty references, local landscapes, and sapphire details are official cabin-design context, not web token evidence.

## 2. Color Palette & Roles

### Observed public-web roles

- **Canvas** (`#ffffff`): visible page, menu-option, and dialog surfaces across the captured public site.
- **Ink** (`#17181c`): primary public control and body text.
- **Primary blue** (`#23569d`): 56px public action and selected menu-option text.
- **Bright blue** (`#1d6dcd`): observed circular public action; scoped to that control.
- **Booking accent** (`#d81159`): observed 64px home action; this is a local measured surface, not a universal semantic status color.
- **Muted utility** (`#69707a`) and **hairline** (`#8e959f`): search/utility control text and borders.
- **Soft blue surface** (`#f1f8fd`) with **soft blue border** (`#9fd1f1`): dialog-open chip controls.

The cabin’s sapphire and other material/color references are documented by the official design story but are not folded into this public-web palette. No error or success role is promoted: the supplied capture does not establish one.

## 3. Typography Rules

### Evidence classes

- **Live computed public-web use:** visible Korean public-site samples resolve to `Roboto, Arial, "Noto Sans KR", sans-serif`; the bundle reports 1,161 Roboto uses but classifies the family as `system`, explicitly describing it as an operating-system stack. Measured sizes, weights, line heights, and tracking are retained, but no `tokens.typography.family.ui` is emitted and no fallback is presented as a China Airlines typeface.
- **Official product-use:** no official announcement in the reviewed sources says that a named typeface is the airline’s product or brand typeface. None is promoted.
- **Official distributed brand asset:** the official Brand Center is an authenticated asset portal in the reviewed session; no downloadable or inspectable font asset was available. It contributes no font claim.
- **Declared-only:** Noto Sans JP, KR, SC, TC, Thai, and swiper-icons have supplied `@font-face` declarations but zero visible uses. They remain declared-only. Noto’s OFL and Roboto’s Apache-2.0 sources describe third-party font licensing, not a grant of China Airlines brand assets.
- **Unobserved domains:** no authenticated product app, mobile app, documentation system, or cabin UI was captured; their typography is absent rather than inferred.

### Measured public-web hierarchy

| Role | Size | Weight | Line height | Tracking | Boundary |
|---|---:|---:|---:|---:|---|
| Body/list text | 16px | 400 | 28px | 0.16px | Public web only; family unresolved as a brand fact |
| Primary action | 16px | 500 | 28px | 0.16px | `home::[data-omd-capture="99"]` |
| Section heading | 40px | 500 | 56px | 0px | Observed public-web heading cluster |

## 4. Components

All component values are measured on the supplied 1440×900 public passenger and corporate surfaces. A component is included only where the packet provides a selector/surface-backed default geometry. The `states` summaries report only observed menu/dialog state; they do not imply hover, focus, pressed, disabled, error, or motion values unless stated.

### Primary blue action

**Default**
- Background: `#23569d`
- Text: `#ffffff`
- Radius: `8px`
- Padding: `0px 20px`
- Height: `56px`
- Font: `16px / 500` measured metrics; family is not a brand token
- States: default observed on all three captured public surfaces; no altered pseudo-state captured
- Use: primary blue public-web action; evidence `home::[data-omd-capture="99"]`

### Selected menu option

**Selected**
- Background: `#ffffff`
- Text: `#23569d`
- Radius: `8px`
- Padding: `0px 12px`
- Height: `48px`
- Font: `16px / 500` measured metrics; family is not a brand token
- States: expanded menu and selected option state observed (`aria-selected=true`)
- Use: selected option button in the public booking/menu control; evidence `home::[data-omd-capture="88"]`

### Search dialog

**Default shell**
- Background: `#ffffff`
- Text: `#000000`
- Radius: `20px`
- Shadow: `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(23, 24, 28, 0.12) 0px 2px 4px 0px, rgba(23, 24, 28, 0.09) 0px 4px 28px 0px, rgba(23, 24, 28, 0.04) 0px 4px 16px 0px, rgba(23, 24, 28, 0.04) 0px 60px 50px 0px, rgba(23, 24, 28, 0.1) 0px 20px 32px 0px, rgba(23, 24, 28, 0.1) 0px 0px 0px 0px`
- States: default shell and dialog-open state observed
- Use: public search dialog shell; evidence `home::div[role=dialog]`

---
**Verified:** 2026-07-13
**Tier 1 sources:** `https://www.china-airlines.com/kr/ko` (public passenger web), `https://www.china-airlines.com/kr/ko/about-china-airlines/about-us` (corporate public web), `https://www.china-airlines.com/kr/ko/about-china-airlines/corporate-governance` (corporate public web), `https://www.china-airlines.com/it/en/about-us/design-story` (official design context), `https://calec.china-airlines.com/csr/en/aboutus.html` (official current mission, vision, and values)
**Tier 2 sources:** `https://getdesign.md/china-airlines` (attempted; unavailable to the search environment), `https://styles.refero.design/?q=China%20Airlines` (attempted; unavailable to the search environment)
**Conflicts unresolved:** none

## 5. Layout Principles

- **Public task controls:** the blue action uses 20px horizontal padding at 56px height; selected menu options use 12px horizontal padding at 48px height.
- **Menu rhythm:** the captured dark menu item uses `6px 24px 6px 0px` padding and a 40px row height. Its 24px end spacing is an observed local metric, not a universal grid.
- **Modal restraint:** the default search dialog uses a 20px radius. The surrounding modal viewport carries 40px padding in the desktop capture.
- **Boundary:** no responsive breakpoint or mobile reflow is promoted from this single desktop capture.

## 6. Depth & Elevation

Most captured public controls report no shadow. The one reusable elevation observation is the white public search dialog: layered low-opacity ink shadows separate it from the backdrop. This is a dialog-specific depth value, not a general card or floating-panel scale.

## 7. Do's and Don'ts

### Do

- Keep public travel-task surfaces white, calm, and text-led, using the measured `#23569d` blue for the documented action context.
- Use the 8px control and 20px dialog corners only in their observed public-web contexts.
- Preserve the distinction between observed service UI and the official cabin narrative of Asian aesthetics and local inspiration.
- Leave the brand typeface unresolved when the target project cannot prove a licensed China Airlines font.

### Don't

- Do not represent Roboto, Arial, or a system fallback as China Airlines’ proprietary UI font.
- Do not turn the locally observed pink booking action into a global error, success, or brand-primary color.
- Do not infer hover, focus, pressed, disabled, validation, or accessibility behavior from class names or unmeasured CSS.
- Do not carry public web tokens into the cabin, mobile app, authenticated product, or documentation experience without direct evidence.

## 8. Responsive Behavior

The supplied bundle records a 1440×900 desktop viewport only. It does not establish breakpoints, touch targets, mobile navigation, responsive card behavior, or dialog resizing rules. The official product site is global and likely responsive, but those values are absent at the smallest unresolved boundary.

## 9. Agent Prompt Guide

Use this reference for a China Airlines-like **public travel-service surface**: a white and navy operational plane, compact 8px controls, one strong 56px blue action, quiet gray utility controls, and a carefully elevated 20px search dialog. Pair that service clarity with culturally grounded imagery only when the project has its own rights and evidence; cabin metaphors such as persimmon, Song-dynasty calm, and local landscape are official context, not a request to reproduce airline assets. Do not name or substitute a China Airlines font.

## 10. Voice & Tone

Official current language is aspirational but practical: safe, reliable, efficient service connects people worldwide, while the mission centers on wonderful moments through flying. The cabin-design story adds warmth, welcome, cultural depth, and a sense of journey. This is public brand direction, not a documented transactional-error-copy specification.

| Context | Direction |
|---|---|
| Travel task | Be concise, clear, and reliable. |
| Welcome | Offer warmth without becoming casual or decorative. |
| Brand narrative | Connect travel with Taiwan, culture, and thoughtful service. |

**Official wording samples**

- *“Create more wonderful moments through flying.”* — official mission.
- *“Leading Asia-Pacific, Flying Worldwide.”* — official vision.
- *“Believe we can always do better.”* — official value.

## 11. Brand Narrative

China Airlines’ official company profile dates the airline’s founding to 16 December 1959. Its current corporate direction, refreshed in 2024 after a review of market and operating conditions, joins a global-connection vision with the mission of creating more wonderful moments through flying. The same official material explicitly connects the strategy to safe, reliable, efficient, and excellent service rather than to visual style alone.

The official design story locates the experiential expression in cultural continuity: Oriental aesthetics, local inspirations, home-like comfort, and warm blessings inform the cabin. Persimmon wood, mountain landscapes, Song-dynasty references, and sapphire details are described as part of that cabin experience. These are source-specific material and service narratives, not a claim that the captured public website implements the same visual system.

## 12. Principles

1. **Safety and reliability anchor the journey.** The official vision calls out safe, reliable, efficient, and excellent service. *UI implication:* make important travel decisions explicit and calm before adding brand decoration.
2. **Warmth is part of service, not an interruption to it.** The company mission focuses on wonderful moments through flying, while the cabin story frames welcome and home-like comfort. *UI implication:* use human, reassuring language around passenger moments without obscuring operational information.
3. **Local culture can travel globally.** Official cabin material connects Asian aesthetics and local inspirations to an international journey. *UI implication:* use culturally specific imagery or stories only with direct rights, relevance, and a clear contextual role.
4. **Improve continuously.** “Believe we can always do better” is the company’s stated value. *UI implication:* prefer transparent recovery and clear next steps over pretending an uncertain travel task succeeded.

The UI implications are this reference’s interpretation of official positioning, not published China Airlines product rules.

## 13. Personas

No named or fictional personas are asserted. Official material addresses passengers seeking a satisfactory flight experience and describes a worldwide network supported by safe, reliable, efficient service. The official sustainability framework also names employees, communities, partners, and other stakeholders. These audience groups are a scope boundary, not user-research personas or a claim about authenticated-product roles.

## 14. States

Only menu expansion and a search-dialog opening were observed in the supplied public-web capture. No empty, loading, success, error, form-validation, or transactional recovery state is established.

| Category | Evidence | Guidance boundary |
|---|---|---|
| Menu open | Observed on all three captured public surfaces | Preserve the measured selected option only; no hover/focus claim. |
| Dialog open | Observed on all three captured public surfaces | Preserve shell geometry and shadow only. |
| Empty | Not captured | Omit. |
| Loading | Not captured | Omit. |
| Error | Not captured | Omit. |
| Success | Not captured | Omit. |
| Disabled | A separate circular control was captured disabled, but it is not a promoted component variant | Do not generalize a disabled treatment. |
| Skeleton | Not captured | Omit. |

## 15. Motion & Easing

The bundle records nine interaction captures across menu and dialog opens, but it does not expose a measured duration, easing curve, or reduced-motion rule. No motion token is established. Static component geometry remains valid; unobserved animated states are omitted rather than invented.
