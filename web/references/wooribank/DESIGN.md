---
id: wooribank
name: Woori Bank
display_name_kr: 우리은행
country: KR
category: fintech
homepage: "https://www.wooribank.com/"
primary_color: "#0067ac"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=wooribank.com&sz=256"
verified: "2026-07-14"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-14"
  surfaces:
    - { id: home, kind: public-product-web, url: "https://www.wooribank.com/", inspected: "2026-07-13" }
    - { id: legacy-service, kind: public-product-web, url: "https://spot.wooribank.com/pot/Dream?withyou=PODEP0001", inspected: "2026-07-13" }
    - { id: legacy-information, kind: public-product-web, url: "https://spot.wooribank.com/pot/Dream?withyou=ln", inspected: "2026-07-13" }
    - { id: corporate-ci, kind: brand-asset, url: "https://spot.wooribank.com/pot/Dream?withyou=BPBKI0056", inspected: "2026-07-14" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.wooribank.com/", captured: "2026-07-13" }
    - { id: legacy-service-live, kind: product-surface, url: "https://spot.wooribank.com/pot/Dream?withyou=PODEP0001", captured: "2026-07-13" }
    - { id: legacy-information-live, kind: product-surface, url: "https://spot.wooribank.com/pot/Dream?withyou=ln", captured: "2026-07-13" }
    - { id: corporate-ci-source, kind: brand-asset, url: "https://spot.wooribank.com/pot/Dream?withyou=BPBKI0056", captured: "2026-07-14" }
    - { id: corporate-history, kind: official-doc, url: "https://spot.wooribank.com/pot/Dream?withyou=BPBKI0084", captured: "2026-07-14" }
    - { id: corporate-vision, kind: official-doc, url: "https://spot.wooribank.com/pot/Dream?withyou=BPBKI0049", captured: "2026-07-14" }
    - { id: corporate-esg, kind: official-doc, url: "https://spot.wooribank.com/pot/Dream?withyou=BPPCT0068", captured: "2026-07-14" }
    - { id: bank-museum-history, kind: official-doc, url: "https://spot.wooribank.com/pot/Dream?withyou=HMMUM0024", captured: "2026-07-14" }
  conflicts: []
  claims:
    "tokens.colors.brand-deep-blue": &ci { surface_id: corporate-ci, source_id: corporate-ci-source, method: official-brand-guideline, captured: "2026-07-14" }
    "tokens.colors.brand-light-blue": *ci
    "tokens.colors.brand-blue": *ci
    "tokens.colors.canvas": &home { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.foreground": *home
    "tokens.colors.foreground-secondary": &legacy { surface_id: legacy-service, source_id: legacy-service-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.muted": *legacy
    "tokens.typography.public-home-title.size": *home
    "tokens.typography.public-home-title.weight": *home
    "tokens.typography.public-home-title.lineHeight": *home
    "tokens.typography.public-home-title.use": *home
    "tokens.typography.legacy-body.size": *legacy
    "tokens.typography.legacy-body.weight": *legacy
    "tokens.typography.legacy-body.lineHeight": *legacy
    "tokens.typography.legacy-body.tracking": *legacy
    "tokens.typography.legacy-body.use": *legacy
    "tokens.spacing.popup-inline-start": *legacy
    "tokens.spacing.popup-inline-end": *legacy
    "tokens.rounded.none": *legacy
    "tokens.rounded.home-login-utility": *home
    "tokens.shadow.flat": *legacy
    "tokens.components.legacy-information-text-input.type": { surface_id: legacy-information, source_id: legacy-information-live, method: native-input-selector-provenance, captured: "2026-07-13" }
    "tokens.components.legacy-information-text-input.bg": { surface_id: legacy-information, source_id: legacy-information-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.legacy-information-text-input.fg": { surface_id: legacy-information, source_id: legacy-information-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.legacy-information-text-input.border": { surface_id: legacy-information, source_id: legacy-information-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.legacy-information-text-input.radius": { surface_id: legacy-information, source_id: legacy-information-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.legacy-information-text-input.padding": { surface_id: legacy-information, source_id: legacy-information-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.legacy-information-text-input.height": { surface_id: legacy-information, source_id: legacy-information-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.legacy-information-text-input.font": { surface_id: legacy-information, source_id: legacy-information-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.legacy-information-text-input.states": { surface_id: legacy-information, source_id: legacy-information-live, method: no-interaction-recorded, captured: "2026-07-13" }
    "tokens.components.legacy-information-text-input.use": { surface_id: legacy-information, source_id: legacy-information-live, method: selector-provenance, captured: "2026-07-13" }
tokens:
  source: reconciled
  extracted: "2026-07-14"
  note: "Brand-CI colors, the public-bank home, and two legacy public service surfaces are distinct evidence domains. Only selector-backed public-web values and official CI values are tokens; no fallback font, inferred state, or generic component is promoted."
  colors:
    brand-deep-blue: "#0067ac"
    brand-light-blue: "#20c4f4"
    brand-blue: "#0083ca"
    canvas: "#ffffff"
    foreground: "#000000"
    foreground-secondary: "#333333"
    muted: "#7f7f7f"
  typography:
    public-home-title: { size: 24, weight: 700, lineHeight: "normal", use: "Observed only on the public home h1; its computed NotoSans declaration has no loaded-FontFace corroboration." }
    legacy-body: { size: 14, weight: 400, lineHeight: "20px", tracking: "-1px", use: "Observed on repeated text/list samples of the two supplied legacy public service routes." }
  spacing: { popup-inline-start: 3, popup-inline-end: 7 }
  rounded: { none: 0, home-login-utility: 5 }
  shadow: { flat: "none" }
  components:
    legacy-information-text-input: { type: input, bg: "#ffffff", fg: "#000000", border: "1px solid #cccccc", radius: "0px", padding: "2px 3px 3px", height: "26px", font: "13px / 400 / 19px / computed stack beginning 맑은 고딕", states: "default only; interactionCount 0 and no hover, focus, pressed, disabled, or error value was retained", use: "Native text input at legacy-information::[data-omd-capture=\"35\"] on the supplied public information route." }
  components_harvested: true
---

# Woori Bank — Design Reference

## 1. Visual Theme & Atmosphere

Woori Bank is a Korean bank whose public narrative links a long institutional history with the promise of financial innovation. Its museum identifies Daehancheonil Bank, founded in 1899, as the predecessor of today’s Woori Bank, while the current corporate site frames the bank as creating tomorrow’s value through today’s innovation. The recognizable identity is the dawn-shaped symbol: the official CI describes it as challenge and hope, with deep blue logotype and a light-blue-to-blue symbol gradient. The supplied public-web capture presents a narrower and more utilitarian picture—white canvas, black and gray text, square legacy controls, and mixed Korean system/declaration stacks. That measured web layer is not the CI palette rendered as product controls, so this reference keeps corporate brand assets, public bank pages, and declared fonts deliberately separate.

**Key characteristics:**

- Official CI: deep blue `#0067AC`, light blue `#20C4F4`, and blue `#0083CA`; these are brand-asset values, not inferred public-bank CTA tokens.
- Supplied public bank routes repeat white `#FFFFFF`, black `#000000`, secondary `#333333`, and muted `#7F7F7F` chrome.
- The measured public surfaces are compact and predominantly square: 0px radius dominates; a single home login utility has 5px corners.
- The artifact covers a public home and two public legacy service/information routes only; it does not establish native, authenticated, transactional, or mobile UI.

## 2. Color Palette & Roles

### Official CI asset colors

- **Woori Deep Blue** (`#0067AC`): official logotype main color (Pantone 7462 C) in the corporate CI guide.
- **Woori Light Blue** (`#20C4F4`): official symbol-mark gradient color (Pantone 2915 CP).
- **Woori Blue** (`#0083CA`): official symbol-mark gradient color (Pantone 3015 CP).

### Selector-backed public-web colors

- **Canvas** (`#FFFFFF`): repeated public-page background samples across the supplied surfaces.
- **Foreground** (`#000000`): repeated structural text and border samples across all three supplied surfaces.
- **Secondary foreground** (`#333333`): repeated utility text/border sample on the home and legacy routes.
- **Muted text** (`#7F7F7F`): repeated legacy service/information text input and utility sample.

The official CI guide requires its colors to be reproduced consistently across visual media. That supports the three CI asset values above, but it does not make an unobserved blue button, gradient panel, or banking-flow state a product token.

## 3. Typography Rules

### Evidence classes

| Evidence class | Family and boundary |
|---|---|
| Official product-use | No first-party material reviewed states that a named font is required for the captured public bank UI. |
| Live computed surface-use | The public home exposes `NotoSans, "Noto Sans KR", sans-serif` on its h1 and navigation samples; the two legacy routes repeatedly expose a stack beginning `맑은 고딕` / `Malgun Gothic`. Neither computed family has a matching loaded FontFace in the supplied artifact, so neither is a Woori Bank UI-family token. |
| Official distributed brand asset | No official Woori Bank font download or licence document was found in the reviewed first-party material. |
| Declared-only | `Noto Sans CJK KR` is declared from `simg.wooribank.com` and `Noto Sans KR` from Google Fonts, both with zero visible uses in the artifact. They remain declared-only. |
| System / unresolved | `Roboto` is classified system with zero visible uses; `돋움`, `dotum`, and `Arial` are not Woori Bank brand-font evidence. |

### Captured hierarchy

| Role | Family boundary | Size | Weight | Line height | Evidence boundary |
|---|---|---:|---:|---:|---|
| Public-home title | Computed `NotoSans` declaration; unresolved | 24px | 700 | normal | `home::h1` only |
| Legacy public body | Computed stack beginning 맑은 고딕; unresolved | 14px | 400 | 20px | repeated legacy service/information list and text samples |
| Legacy utility action | Computed stack beginning 돋움; unresolved | 12px | 400 | 23px | `surface-2::[data-omd-capture="25"]` only |

Do not render a fallback as a verified Woori Bank typeface. The declaration and local/system stacks are useful audit context, but not a licence or a branded family token.

## 4. Component Stylings

### Legacy information text input

**Default**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px `#cccccc`
- Radius: 0px
- Padding: 2px 3px 3px
- Height: 26px
- Font: 13px / 400 / computed stack beginning 맑은 고딕
- States: Default only. The supplied artifact records `interactionCount: 0`; no hover, focus, pressed, disabled, or error value is retained.
- Use: Native text input `surface-3::[data-omd-capture="35"]`; medium-confidence, one public information-route sample only.

The artifact has `interactionCount: 0`, no interaction kinds, and no observed states. This selector-backed native input is therefore the sole structured component harvest: a static default with measured geometry, not evidence for hover, focus, pressed, disabled, validation, menu, dialog, toast, or authenticated banking patterns. Other detected anchors and rows remain raw evidence rather than being recast as buttons.

---
**Verified:** 2026-07-14
**Tier 1 sources:** https://www.wooribank.com/ ; https://spot.wooribank.com/pot/Dream?withyou=PODEP0001 ; https://spot.wooribank.com/pot/Dream?withyou=ln ; https://spot.wooribank.com/pot/Dream?withyou=BPBKI0056 ; https://spot.wooribank.com/pot/Dream?withyou=BPBKI0049
**Tier 2 sources:** https://getdesign.md/wooribank (attempted; no usable Woori Bank record) ; https://styles.refero.design/?q=wooribank (attempted; no usable Woori Bank record)
**Conflicts unresolved:** none

## 5. Layout Principles

The supplied capture is desktop-only at `1440×900`. It records a 24px public-home title and compact legacy utility chrome, but not a reusable grid, container width, responsive breakpoint, authenticated layout, or transaction journey. Treat the measured public routes as route-local legacy web evidence rather than a general banking layout contract.

## 6. Depth & Elevation

The promoted public samples have `box-shadow: none`; `flat: none` is recorded as a selector-backed token. This establishes flatness for the measured home/legacy utility examples only. No card, modal, notification, elevated panel, or layered navigation shadow scale was captured.

## 7. Do's and Don'ts

### Do

- Use the official CI blue family only for brand identification or where a future product surface explicitly observes it.
- Keep the captured public legacy utility treatment square and compact when reproducing the same route-local context.
- Keep the public home and legacy surface typography as unresolved computed stacks until a loaded family and its source are corroborated.
- Preserve the distinction between a 1899-rooted corporate story and a specific public web component claim.

### Don't

- Don't turn the official dawn-gradient symbol colors into an inferred universal online-banking CTA or background gradient.
- Don't substitute Noto Sans KR, Malgun Gothic, Roboto, or a system fallback as a verified Woori Bank font.
- Don't invent a responsive grid, native-app shell, authenticated form, error state, dialog, toast, or interaction animation from this static desktop packet.
- Don't recast detected anchors or rows as buttons; the only structured component harvest is the selector-backed native text input.

## 8. Responsive Behavior

No mobile viewport or responsive transition was captured. The public web routes may adapt at smaller widths, but the supplied evidence supports no breakpoint, collapsed navigation, touch-target, or reflow specification.

## 9. Agent Prompt Guide

For a route-local Woori Bank public-web reference, use a white `#FFFFFF` canvas with `#000000` and `#333333` text, a compact 14px legacy body sample where that exact legacy context is intended, square utility controls, and no shadow. The only harvested component is the supplied route’s 26px native text input; treat `#0067AC`, `#20C4F4`, and `#0083CA` as official CI asset colors—not automatic UI fills. Do not name a font specimen, create an authenticated bank flow, or add interaction states without a new selector-backed and font/state-correlated capture.

## 10. Voice & Tone

The official value system provides a useful but bounded public voice: customer-first, trustworthy, expert, and innovative. The current corporate story joins that language to a future-facing innovation claim, while the ESG material speaks of responsibility, inclusion, and transparent disclosure. These official statements guide high-level public communications; they do not prescribe regulated transaction copy, eligibility notices, or errors.

| Context | Supported direction |
|---|---|
| Corporate public message | Ground innovation in a concrete customer or societal value. |
| Trust-sensitive information | Be direct about principles, responsibilities, and what is being disclosed. |
| Service navigation | Use short, literal labels; the captured legacy web chrome is operational rather than campaign-led. |

### Supported copy samples

- “오늘의 혁신으로 내일의 가치를 만드는 은행” is the bank’s published vision statement.
- “우리 마음속 첫번째 금융” is the published slogan associated with the bank’s heritage and trust aspiration.
- “Good Finance for the Next” appears with the official ESG vision.

## 11. Brand Narrative

Woori Bank’s official history connects the present bank to Daehancheonil Bank, founded in 1899 as a modern national-capital bank. The bank’s historical material describes later firsts in overseas presence and online banking, making continuity and financial infrastructure part of its own story rather than an invented heritage claim.

Its current public vision is to create tomorrow’s value through today’s innovation, with customer, trust, expertise, and innovation named as core values. The official CI turns that narrative into a dawn symbol of challenge and hope, plus a controlled deep-blue and blue gradient palette. The public product-web evidence in this reference is much more restrained and legacy-oriented; it should not be overwritten by the corporate identity narrative.

The current ESG material adds a present-tense direction: responsible finance, social value, transparency, and long-term sustainable value. Those commitments explain the bank’s contemporary framing but do not yield unobserved product features, UX states, or quantitative service claims.

## 12. Principles

1. **Put customers and neighbours first.** The official value statement places customers and neighbours first.
   *UI implication:* operational public copy should explain the next action or required information without decorative ambiguity.
2. **Build trust through principles.** The bank describes trust as something made through principles.
   *UI implication:* keep source boundaries, disclosures, and state uncertainty explicit; do not invent a reassuring UI pattern.
3. **Use expertise with restraint.** The official values present the bank as a financial expert that leads the market.
   *UI implication:* separate institutional/brand facts from route-local CSS observations rather than flattening them into generic fintech styling.
4. **Make innovation accountable.** The current vision and ESG material join innovation with future value, responsibility, and transparency.
   *UI implication:* a future product treatment needs direct evidence before it is promoted as a reusable token or component.

## 13. Personas

The following are first-party stakeholder contexts, not synthetic personas or satisfaction claims.

**Individual banking customer.** The public vision and values address customers and neighbours directly. This reference preserves only the public desktop web styling available to them, not protected account or transaction experiences.

**Business or institutional customer.** The corporate site describes expertise and financial solutions for people and organisations. No enterprise application surface, dashboard, or administration UI was captured here.

**Brand, content, or service contributor.** Needs to distinguish the official dawn CI and corporate narrative from the white-and-neutral legacy public-bank chrome so a reuse does not become a false representation of the bank’s current product system.

## 14. States

The supplied artifact contains no interaction records, interaction kinds, or observed element states. Empty, loading, error, success, skeleton, and disabled treatments are therefore absent rather than filled with generic banking conventions. The static native text-input default in §4 is the only structured component evidence retained.

## 15. Motion & Easing

No motion duration, easing curve, transition property, or reduced-motion behavior was measured. Omit motion tokens rather than inventing a Woori Bank motion system.
