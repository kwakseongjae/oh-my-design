---
id: upbit
name: Upbit
country: KR
category: fintech
homepage: "https://upbit.com"
primary_color: "#0062df"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=upbit.com&sz=256"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: marketing-home, kind: marketing, url: "https://www.upbit.com/home", inspected: "2026-07-13" }
    - { id: exchange, kind: product, url: "https://www.upbit.com/exchange?code=CRIX.UPBIT.KRW-BTC", inspected: "2026-07-13" }
    - { id: support-notice, kind: support, url: "https://www.upbit.com/service_center/notice", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.upbit.com/home", captured: "2026-07-13" }
    - { id: exchange-live, kind: product-surface, url: "https://www.upbit.com/exchange?code=CRIX.UPBIT.KRW-BTC", captured: "2026-07-13" }
    - { id: notice-live, kind: product-surface, url: "https://www.upbit.com/service_center/notice", captured: "2026-07-13" }
    - { id: developer-center, kind: official-doc, url: "https://global-docs.upbit.com/", captured: "2026-07-13" }
    - { id: sdk-license, kind: license, url: "https://docs.upbit.com/kr/page/upbit_developer_sdk_license", captured: "2026-07-13" }
    - { id: roboto-license, kind: license, url: "https://github.com/googlefonts/roboto-2/blob/main/LICENSE", captured: "2026-07-13" }
    - { id: noto-license, kind: license, url: "https://notofonts.github.io/noto-docs/website/use/", captured: "2026-07-13" }
  claims:
    "tokens.colors.accent": &exchange { surface_id: exchange, source_id: exchange-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.accent-deep": &home { surface_id: marketing-home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.rise": *exchange
    "tokens.colors.fall": *exchange
    "tokens.colors.ink": *exchange
    "tokens.colors.body": *home
    "tokens.colors.muted": *home
    "tokens.colors.border": *exchange
    "tokens.colors.surface": *exchange
    "tokens.colors.canvas": *home
    "tokens.colors.control": *exchange
    "tokens.colors.disabled": &notice { surface_id: support-notice, source_id: notice-live, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.use": *home
    "tokens.typography.dense.size": *exchange
    "tokens.typography.dense.weight": *exchange
    "tokens.typography.dense.lineHeight": *exchange
    "tokens.typography.dense.use": *exchange
    "tokens.spacing.control-inline": *exchange
    "tokens.rounded.square": *exchange
    "tokens.rounded.control": *exchange
    "tokens.components.quick-fill.type": *exchange
    "tokens.components.quick-fill.bg": *exchange
    "tokens.components.quick-fill.fg": *exchange
    "tokens.components.quick-fill.border": *exchange
    "tokens.components.quick-fill.radius": *exchange
    "tokens.components.quick-fill.padding": *exchange
    "tokens.components.quick-fill.height": *exchange
    "tokens.components.quick-fill.font": *exchange
    "tokens.components.quick-fill.use": *exchange
  conflicts: []
tokens:
  source: live-extract
  extracted: "2026-07-13"
  note: "Observed public marketing, exchange, and service-center surfaces only; no authenticated application or documentation-chrome token is inferred."
  colors:
    accent: "#0062df"
    accent-deep: "#003597"
    rise: "#dd3c44"
    fall: "#1375ec"
    ink: "#1a2434"
    body: "#333333"
    muted: "#565d6a"
    border: "#d6d8db"
    surface: "#ffffff"
    canvas: "#e9ecf1"
    control: "#f4f5f7"
    disabled: "#8e929b"
  typography:
    body: { size: 14, weight: 400, lineHeight: "21px", use: "Observed public home/list body text" }
    dense: { size: 12, weight: 400, lineHeight: "normal", use: "Observed exchange labels and quick-fill control text" }
  spacing: { control-inline: 8 }
  rounded: { square: 0, control: 4 }
  components_harvested: true
  components:
    quick-fill: { type: badge, bg: "#ffffff", fg: "#1a2434", border: "1px solid #d6d8db", radius: "4px", padding: "0px 8px 1px", height: "28px", font: "12px / 400", use: "Exchange percentage quick-fill link; surface-2::[data-omd-capture=\"139\"]" }
---

# Upbit — Design Reference

## 1. Visual Theme & Atmosphere

Upbit is a digital-asset service operated by Dunamu. Its public web surface makes market information the visual priority: the reverified exchange page exposes trading-oriented controls and dense data regions, while the home and service-center notice pages retain the same light, low-radius treatment around them. The current Developer Center describes APIs for prices, order books, trading, balances, deposits, withdrawals, and real-time streaming; that public product framing helps explain why compact numeric controls and restrained surface colors dominate the captured pages. The observable identity is not a universal visual system: it is a disciplined public-web layer in which blue is used for actions and down-market data, red for up-market data, and white panels sit on a pale gray canvas. This record keeps that exchange, marketing, support, documentation, and authenticated-product boundary explicit.

- **Public-source boundary:** the supplied capture contains `https://www.upbit.com/home`, the public exchange URL, and `https://www.upbit.com/service_center/notice`. It contains no authenticated application screen and no Developer Center chrome.
- **Geometry:** the repeated raw radii are 0px and 4px; the captured quick-fill control is the only retained component pattern.
- **No state inference:** the bundle has `interactionCount: 0` and no observed interaction kind. Hover, focus, pressed, disabled, validation, menu, modal, toast, and transition claims are omitted.

## 2. Color & surface roles

The following values are live computed observations, not a published Upbit token set.

| Observed role | Value | Evidence boundary |
|---|---:|---|
| Action/accent | `#0062DF` | visible text, border, and background on captured public surfaces; not assigned a universal semantic role |
| Deeper public-blue fill | `#003597` | background on home and exchange; no reusable CTA component is inferred |
| Rise market value | `#DD3C44` | exchange-only visible text/border observation |
| Fall market value | `#1375EC` | exchange-only visible text/border observation |
| Primary ink | `#1A2434` | public controls and text |
| Body / muted text | `#333333` / `#565D6A` | repeated public text observations |
| Hairline control border | `#D6D8DB` | quick-fill and service-center controls |
| White surface / pale canvas | `#FFFFFF` / `#E9ECF1` | repeated public panel and page surfaces |
| Control fill / disabled text | `#F4F5F7` / `#8E929B` | observed public values; neither establishes a behavior state |

The exchange-only red/blue pair is documented as a local market display observation. It is not generalized into an accessibility, locale, or cross-market rule without a first-party specification.

## 3. Typography & font evidence

### Evidence classes

- **Live computed system use:** visible public text resolves most often to `Roboto, "Noto Sans KR", sans-serif, AppleSDGothicNeo-Regular, "Malgun Gothic", Dotum, sans-serif`; the collector classifies `Roboto` as a **system** family with high confidence and 744 visible uses. Its `FontFaceSet` record also lists Google-hosted Roboto sources. This verifies a current resolved public runtime family, not an Upbit-owned brand typeface, so no `tokens.typography.family` is promoted.
- **Declared-only assets:** `Noto Sans KR` has 128 listed source URLs but zero visible uses in the supplied bundle; `Droid Sans`, `Roboto Condensed`, and the TradingView-bundled `EuclidCircular` are likewise declared with zero visible uses. They are not UI-family tokens and must not be substituted into specimens.
- **Other system results:** `Arial` and `Helvetica` occur only a handful of times and are classified system; neither is a brand claim.
- **Official font/licence context:** the Google Fonts Roboto repository carries Apache License 2.0; Noto’s official documentation says Noto fonts use SIL OFL 1.1. These third-party font licences do not grant rights to Upbit marks, UI assets, or an Upbit brand font.
- **Upbit licence boundary:** the Upbit Developer SDK licence applies to the SDK materials, says it is not an open-source licence, and expressly does not grant rights to Dunamu trademarks, logos, names, or brands. It is not a font licence or a public design-system specification.

### Measured public text roles

| Role | Resolved family | Size | Weight | Line height | Surface |
|---|---|---:|---:|---:|---|
| Public list body | Roboto system stack | 14px | 400 | 21px | home, exchange, notice |
| Dense exchange/control text | Roboto system stack | 12px | 400 | normal | exchange |

## 4. Components

### Exchange quick-fill control

**Observed default**
- Background: `#FFFFFF`
- Text: `#1A2434`
- Border: `1px solid #D6D8DB`
- Radius: 4px
- Padding: 0px 8px 1px
- Height: 28px
- Font: 12px / 400 / resolved Roboto system stack
- Use: percentage quick-fill link on the public exchange; evidence `surface-2::[data-omd-capture="139"]`, class `percentage-button css-1vvi88j`

The collector reports this as five medium-confidence occurrences on the exchange page. It captures a static default only. No hover, focus, pressed, disabled, validation, or size variant is documented because the top-level interaction record is empty.

---
**Verified:** 2026-07-13
**Tier 1 sources:** `https://www.upbit.com/home` (public marketing), `https://www.upbit.com/exchange?code=CRIX.UPBIT.KRW-BTC` (public exchange), `https://www.upbit.com/service_center/notice` (public support/notice), `https://global-docs.upbit.com/` (official Developer Center), `https://docs.upbit.com/kr/page/upbit_developer_sdk_license` (official SDK licence)
**Tier 2 sources:** `https://getdesign.md/upbit` (attempted; built-in web open returned an internal/safe-open failure), `https://styles.refero.design/?q=upbit` (attempted; built-in web open returned an internal/safe-open failure); no Upbit record was returned by built-in web search for either catalog.
**Conflicts unresolved:** none

The prior prose-derived token block, 2025 date stamp, broad navigation/hero/table component inventory, motion timings, contrast results, persona profiles, and behavioral state catalogue were not supported by the supplied 2026 collector and are removed rather than refreshed by assumption.

## 5. Elevation

The retained exchange quick-fill sample has `box-shadow: none`. No general elevation scale is claimed from one control or from unqualified article containers.

## 6. Imagery & illustration

The supplied evidence is a computed-style/component capture and does not establish a reusable image, illustration, crop, overlay, or asset-licence rule. The public marketing surface remains separate from the exchange UI; neither is used to infer an authenticated-product image system.

## 7. Iconography

No named icon family, stroke specification, icon-size scale, or reusable icon component is established in the retained evidence. Coin symbols, glyphs, and asset files are intentionally not promoted from incidental page content.

## 8. Motion

No duration, easing, transition, data-update animation, scroll behavior, or interactive sequence was captured. Static CSS classes and one rendered default do not establish a motion contract.

## 9. Accessibility & locale

- The public capture supplies color and geometry values, not an accessibility audit; contrast, keyboard support, focus indication, and target-size conformance are not claimed here.
- The current public text stack includes Korean-capable fallback families, but the capture does not establish a locale typography policy or cross-market color convention.
- Implementations should provide accessible states without presenting those states as observed Upbit behavior.

## 10. Voice & Tone

No first-party voice or editorial guideline was collected. The public Korean product, support, and Developer Center surfaces show different functional registers, but this evidence is insufficient to prescribe a reusable brand voice. Avoid inventing customer promises, urgency claims, or copied copy under the Upbit name.

## 11. Brand Narrative

The official Developer Center identifies Upbit as a Dunamu service and presents market-data, exchange, and real-time APIs for strategic trading. Its Korean reference footer identifies Dunamu and a registered virtual-asset-business number. A 2022 Dunamu/Upbit conference report records the then-current statement that Upbit would focus on regulation compliance and investor protections; it is retained as dated corporate context, not as proof of a present visual token or product workflow.

No first-party history, rebrand, or public brand-system source was found in the supplied collector evidence. This reference therefore does not create an origin story or infer a private product strategy.

## 12. Principles

The following are evidence-bounded reference implications, not quoted Upbit principles.

1. **Keep market data local to its surface.** The red `#DD3C44` and blue `#1375EC` observations come from the exchange only. *UI implication:* do not reuse them as universal marketing, error, or success tokens.
2. **Keep controls compact only where measured.** The retained quick-fill control is 28px high with a 4px radius. *UI implication:* do not extrapolate that geometry into navigation, forms, or authenticated trading flows.
3. **Keep domains separate.** Marketing home, exchange, support notice, Developer Center, SDK licence, and unobserved authenticated product each have different evidence roles. *UI implication:* do not combine them into a fictional public design system.

## 13. Personas

[FILL IN] No first-party user research, audience segmentation, or persona material was collected for this update. No fictional names, demographics, jobs, or motivations are supplied.

## 14. States

No loading, empty, success, error, disabled, focus, validation, menu, dialog, toast, or tab-transition state is documented. The supplied collector has zero interaction records; adding a behavior table would fabricate unobserved variants.

## 15. Motion & Easing

No motion or easing values were captured. Preserve this absence instead of assigning default durations or curves.

## 16. Do's and Don'ts

### Do

- Use the observed public exchange quick-fill treatment only with its recorded `#FFFFFF`, `#1A2434`, `#D6D8DB`, 4px-radius, and 28px-height provenance.
- Keep `#DD3C44` and `#1375EC` bounded to their captured exchange-market context.
- Treat Roboto as an observed system-resolved runtime family, not an Upbit-owned brand font.
- Keep marketing, exchange, support, Developer Center, and unobserved authenticated-product claims separated.
- Record only static defaults when the interaction capture is empty.

### Don't

- Reintroduce the former prose-derived semantic palette or unsupported broad component inventory as current evidence.
- Render Noto Sans KR, EuclidCircular, Droid Sans, Roboto Condensed, Arial, or Helvetica as a verified Upbit UI-family substitute.
- Invent hover, focus, pressed, disabled, validation, menu, dialog, toast, state-transition, motion, or accessibility behavior from static markup.
- Treat the Upbit Developer SDK licence as a licence for UI assets, fonts, logos, or brand use.
- Infer a documented public design system from the absence of a discovered design-system URL.
