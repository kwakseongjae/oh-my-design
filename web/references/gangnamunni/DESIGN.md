---
id: gangnamunni
name: 강남언니
display_name_kr: Gangnamunni (강남언니)
country: KR
category: consumer-tech
homepage: "https://www.gangnamunni.com"
primary_color: "#d54300"
logo:
  type: favicon
  slug: "https://www.gangnamunni.com/favicon.ico"
verified: "2026-07-13"
omd: "0.1"
ds:
  name: Gangnamunni Blog
  url: "https://blog.gangnamunni.com/post/welchis/"
  type: brand
  description: Official account of Cell for the consumer app and Welchis for the PC back office.
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: product, url: "https://www.gangnamunni.com/", inspected: "2026-07-13" }
    - { id: events, kind: product, url: "https://www.gangnamunni.com/events", inspected: "2026-07-13" }
    - { id: welchis-post, kind: documentation, url: "https://blog.gangnamunni.com/post/welchis/", inspected: "2026-07-13" }
  sources:
    - { id: live-home, kind: product-surface, url: "https://www.gangnamunni.com/", captured: "2026-07-13" }
    - { id: live-events, kind: product-surface, url: "https://www.gangnamunni.com/events", captured: "2026-07-13" }
    - { id: official-welchis, kind: official-doc, url: "https://blog.gangnamunni.com/post/welchis/", captured: "2026-07-13" }
    - { id: official-voice, kind: official-doc, url: "https://blog.gangnamunni.com/post/ui-text-guideline", captured: "2026-07-13" }
    - { id: pretendard-license, kind: license, url: "https://github.com/orioncactus/pretendard/blob/main/LICENSE", captured: "2026-07-13" }
  claims:
    "tokens.colors.canvas": &card { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=20]", captured: "2026-07-13" }
    "tokens.colors.foreground": &cta { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=3]", captured: "2026-07-13" }
    "tokens.colors.muted": &events { surface_id: events, source_id: live-events, method: computed-style, selector: "surface-2::p.typo-label-sm-subtle", captured: "2026-07-13" }
    "tokens.colors.surface": &chip { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=34]", captured: "2026-07-13" }
    "tokens.colors.border": *cta
    "tokens.typography.family.sans": *card
    "tokens.typography.body.size": *card
    "tokens.typography.body.weight": *card
    "tokens.typography.body.lineHeight": *card
    "tokens.typography.label.size": *chip
    "tokens.typography.label.weight": *chip
    "tokens.typography.label.lineHeight": *chip
    "tokens.typography.title.size": &title { surface_id: home, source_id: live-home, method: computed-style, selector: "home::h3", captured: "2026-07-13" }
    "tokens.typography.title.weight": *title
    "tokens.typography.title.lineHeight": *title
    "tokens.spacing.sm": *cta
    "tokens.spacing.md": *cta
    "tokens.rounded.cta": *cta
    "tokens.rounded.card": *card
    "tokens.rounded.full": *chip
    "tokens.components.outline-cta.type": *cta
    "tokens.components.outline-cta.fg": *cta
    "tokens.components.outline-cta.border": *cta
    "tokens.components.outline-cta.radius": *cta
    "tokens.components.outline-cta.padding": *cta
    "tokens.components.outline-cta.font": *cta
    "tokens.components.outline-cta.states": *cta
    "tokens.components.outline-cta.use": *cta
    "tokens.components.filter-chip.type": *chip
    "tokens.components.filter-chip.bg": *chip
    "tokens.components.filter-chip.fg": *chip
    "tokens.components.filter-chip.radius": *chip
    "tokens.components.filter-chip.height": *chip
    "tokens.components.filter-chip.padding": *chip
    "tokens.components.filter-chip.font": *chip
    "tokens.components.filter-chip.states": *chip
    "tokens.components.filter-chip.use": *chip
  conflicts: []
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Only current computed consumer-product values are tokens. Frontmatter primary_color is catalog identity metadata, not a current token."
  colors: { canvas: "#ffffff", foreground: "#131517", muted: "#697683", surface: "#eff2f5", border: "#b5bfc9" }
  typography:
    family: { sans: "PretendardVariable" }
    body: { size: 16, weight: 400, lineHeight: "24px" }
    label: { size: 14, weight: 500, lineHeight: "19.6px" }
    title: { size: 20, weight: 700, lineHeight: "28px" }
  spacing: { sm: 8, md: 12 }
  rounded: { cta: 6, card: 20, full: 9999 }
  components_harvested: true
  components:
    outline-cta: { type: button, fg: "#131517", border: "1px solid #b5bfc9", radius: "6px", padding: "8px 12px", font: "13px / 600", states: "pressed state captured; no changed pressed value retained", use: "Current small outline CTA on home and events" }
    filter-chip: { type: button, bg: "#eff2f5", fg: "#131517", radius: "9999px", height: "32px", padding: "0px 10px", font: "14px / 500", states: "selected-false and selected-true DOM variants captured; no interaction expansion", use: "Current procedure filter chip on home" }
---

# Design System Inspiration of Gangnamunni (강남언니)

## 1. Visual Theme & Atmosphere

강남언니 is a Korean consumer service for finding and comparing medical-procedure information, hospitals, and event prices. Its current public product routes put this research task ahead of ornamental branding: the homepage and events surface use a white canvas, blue-grey text, quiet grey filter fills, and compact procedure controls that can be scanned quickly. The official team describes Cell as the system for the consumer app across iOS, Android, and mobile web, while Welchis is a separate PC back-office system; their component geometry must not be blended. The product’s public copy frames the service around confidence in a choice, and the design team’s writing guidance connects that confidence to clear, understandable information.

**Key Characteristics:**
- Current canvas `#ffffff`, foreground `#131517`, muted text `#697683`, and filter surface `#eff2f5`
- Loaded, visible consumer-product family `PretendardVariable`
- Compact outline CTA and 32px full-radius filter-chip geometry
- Cell consumer surfaces and Welchis back-office documentation are separate evidence domains

## 2. Color Palette & Roles

- **Canvas** (`#ffffff`): captured home feature-card action.
- **Foreground** (`#131517`): captured home outline CTA and filter chip.
- **Muted** (`#697683`): captured events-page tertiary label.
- **Surface** (`#eff2f5`): captured unselected home filter chip.
- **Border** (`#b5bfc9`): captured home outline CTA.

The catalog identity color in frontmatter was not retained as a current computed component value, so no orange value is offered as a reusable UI token.

## 3. Typography Rules

| Role | Family | Size | Weight | Line Height | Evidence |
|---|---|---:|---:|---:|---|
| Body | PretendardVariable | 16px | 400 | 24px | current consumer-product observation |
| Label | PretendardVariable | 14px | 500 | 19.6px | current home filter chip |
| Title | PretendardVariable | 20px | 700 | 28px | current home observation |

| Evidence class | Status |
|---|---|
| **Official product-use** | No current Gangnamunni announcement naming a product font was found. |
| **Live computed surface-use** | `PretendardVariable` is first family in 616 visible consumer-product observations and has one loaded Gangnamunni-hosted WOFF2 source. |
| **Official distributed font asset** | Pretendard’s upstream project documents `Pretendard Variable` and SIL Open Font License 1.1; this is not a Gangnamunni distribution claim. |
| **Documentation chrome** | The Welchis blog loaded separate `pretendard` files in 66 observations; those are not consumer-product tokens. |
| **Declared-only** | `color-emoji`, `commitMono`, `icomoon`, and fallback families had no visible usage. |
| **Unresolved** | No public evidence establishes a product font-license notice, native-app type contract, or monospace family. |

## 4. Component Stylings

### Outline CTA

**Small outline CTA**
- Text: `#131517`
- Border: 1px solid `#b5bfc9`
- Radius: 6px
- Padding: 8px 12px
- Font: 13px / 600 / PretendardVariable
- Pressed: State captured; no changed pressed value retained.
- Use: `home::[data-omd-capture="3"]`; same fingerprint on home and events.

### Procedure filter

**Unselected fill chip**
- Background: `#eff2f5`
- Text: `#131517`
- Radius: 9999px
- Height: 32px
- Padding: 0px 10px
- Font: 14px / 500 / PretendardVariable
- Selected: Separate selected-true DOM variant captured with `#131517` background and `#ffffff` text; no interaction expansion.
- Use: `home::[data-omd-capture="34"]`.

### Media card action

**Home feature-card action**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 20px
- Font: 16px / 400 / PretendardVariable
- Use: `home::[data-omd-capture="20"]`; 303px rendered height is context, not a portable token.

---

**Verified:** 2026-07-13 (verification v2; supplied current computed-style bundle plus first-party source review)
**Tier 1 sources:** https://www.gangnamunni.com/ · https://www.gangnamunni.com/events · https://blog.gangnamunni.com/post/welchis/ · https://blog.gangnamunni.com/post/ui-text-guideline
**Tier 2 sources:** https://getdesign.md/gangnamunni direct detail attempt returned an internal fetch error; https://styles.refero.design/?q=gangnamunni and https://styles.refero.design/?q=%EA%B0%95%EB%82%A8%EC%96%B8%EB%8B%88 direct search attempts returned internal fetch errors. No Tier 2 value was imported.
**Surface split:** Home and events are consumer-product surfaces. The Welchis post is documentation context only; its typography and controls are not Cell/product tokens.
**Conflicts unresolved:** none

No importable Tier 2 value was available to conflict with current Tier 1 observations.

## 5. Layout Principles

- Retained component observations include 8px and 12px CTA padding, 10px horizontal chip padding, 6px CTA radius, 20px media-card radius, and full-radius chips.
- These are public-surface samples, not a complete Cell scale or native-app layout specification.
- Cell is the consumer system; Welchis is the PC back office. Do not transfer documentation chrome between them.

## 6. Depth & Elevation

The retained component representatives report `box-shadow: none`. This describes those components only; it does not establish a global shadow, modal, or card-depth contract.

## 7. Do's and Don'ts

### Do

- Name tokens by their captured product role and source surface.
- Use loaded `PretendardVariable` for a reconstruction of this consumer web capture.
- Preserve the captured 32px full-radius filter-chip geometry.
- Keep Cell consumer work separate from Welchis references.

### Don't

- Don't promote catalog identity orange without a current component observation.
- Don't reuse blog `pretendard` or declared `commitMono` as the product family.
- Don't invent hover, focus, disabled, error, toast, or changed pressed values.
- Don't promote responsive 303px card height into a general token.

## 8. Responsive Behavior

The supplied evidence has one retained capture context and establishes no breakpoints, grids, mobile navigation, or native-app behavior. Treat responsive behavior as unresolved.

## 9. Agent Prompt Guide

"Recreate the current Gangnamunni consumer-web filter area with `#ffffff` canvas, `#131517` foreground, `#697683` muted labels, and `#eff2f5` chips. Use loaded `PretendardVariable`; make chips 32px high with 9999px radius and 0px 10px padding. The small outline CTA uses 6px radius, 8px 12px padding, `#131517` text, and a 1px `#b5bfc9` border. Do not add an unobserved primary-orange CTA, shadows, or interaction states."

---

## 10. Voice & Tone

The official UI-text guideline calls for confident communication, easy-to-understand medical information, and one topic at a time. It permits restrained emphasis, including an exclamation mark, when it makes value or a completed journey clear; the earlier legacy claim banning exclamation marks has been removed.

| Principle | Apply | Avoid |
|---|---|---|
| Confidence | State a feature’s value and completion directly. | Hesitant wording. |
| Understandability | Use familiar language and a next action for an exception. | Jargon or generic error text. |
| One topic | Keep one message focused; split distinct cases. | Dense combined instructions. |

## 11. Brand Narrative

The public product presents Gangnamunni as a place to compare procedure information and prices with confidence in a choice. The company’s design writing states a mission to make better medical services accessible to anyone and describes customer perspective as central to product work. Its engineering account separates Cell’s consumer mobile platforms from Welchis’s PC back office because their users and interaction patterns differ.

## 12. Principles

1. **Make the next step understandable.** *UI implication:* give an error a concrete recovery action when current evidence supports that state.
2. **Keep a message to one topic.** *UI implication:* separate unrelated procedure conditions or instructions.
3. **Use the system for its user and platform.** *UI implication:* do not import Welchis desktop geometry into Cell without direct evidence.

## 13. Personas

No named synthetic personas are included. First-party sources substantiate only consumer-app users (Cell) and PC back-office users (Welchis).

**[FILL IN]** Add research-backed decision, accessibility, and locale needs only when a user or first-party source supplies them.

## 14. States

**[FILL IN]** The supplied bundle has `interactionCount: 0` and no current first-party contract for loading, empty, error, success, disabled, or selection behavior beyond the captured DOM variants.

## 15. Motion & Easing

**[FILL IN]** No current first-party motion token, duration, easing curve, or reduced-motion behavior was collected.
