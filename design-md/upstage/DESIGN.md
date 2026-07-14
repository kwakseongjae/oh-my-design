---
id: upstage
name: Upstage
display_name_kr: 업스테이지
country: KR
category: ai
homepage: "https://www.upstage.ai"
primary_color: "#5b52ff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=upstage.ai&sz=256"
verified: "2026-07-13"
omd: "0.1"
ds:
  name: Upstage Brand Resource Center
  url: "https://www.upstage.ai/resources/brand-resource-center"
  type: brand
  description: "Official distribution point for Upstage logo, product-logo, media-kit, and leadership assets; it does not publish a UI token specification."
  og_image: "https://cdn.prod.website-files.com/6743d5190bb2b52f38e99e37/680a25ee07a17eed6deeff74_OG.avif"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.upstage.ai/", inspected: "2026-07-13" }
    - { id: api-pricing, kind: public-pricing, url: "https://www.upstage.ai/pricing/api", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.upstage.ai/", captured: "2026-07-13" }
    - { id: api-pricing-live, kind: product-surface, url: "https://www.upstage.ai/pricing/api", captured: "2026-07-13" }
    - { id: about-context, kind: official-doc, url: "https://www.upstage.ai/about", captured: "2026-07-13" }
    - { id: studio-context, kind: official-doc, url: "https://www.upstage.ai/products/studio", captured: "2026-07-13" }
    - { id: brand-assets, kind: brand-asset, url: "https://www.upstage.ai/resources/brand-resource-center", captured: "2026-07-13" }
    - { id: geist-license, kind: license, url: "https://github.com/vercel/geist-font", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.canvas": &home { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.ink": *home
    "tokens.colors.text": *home
    "tokens.colors.text-subtle": *home
    "tokens.colors.action-violet": *home
    "tokens.colors.card-border": &pricing { surface_id: api-pricing, source_id: api-pricing-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.typography.family.ui": *home
    "tokens.typography.family.marketing-display": *home
    "tokens.typography.marketing-display.size": *home
    "tokens.typography.marketing-display.weight": *home
    "tokens.typography.marketing-display.lineHeight": *home
    "tokens.typography.marketing-display.use": *home
    "tokens.typography.section-heading.size": *home
    "tokens.typography.section-heading.weight": *home
    "tokens.typography.section-heading.lineHeight": *home
    "tokens.typography.section-heading.use": *home
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.use": *home
    "tokens.typography.action.size": *home
    "tokens.typography.action.weight": *home
    "tokens.typography.action.lineHeight": *home
    "tokens.typography.action.use": *home
    "tokens.spacing.action-y": *home
    "tokens.spacing.action-x": *home
    "tokens.spacing.card": *pricing
    "tokens.spacing.card-end": *pricing
    "tokens.rounded.action": *home
    "tokens.rounded.card": *pricing
    "tokens.components.api-pricing-card.type": *pricing
    "tokens.components.api-pricing-card.bg": *pricing
    "tokens.components.api-pricing-card.border": *pricing
    "tokens.components.api-pricing-card.radius": *pricing
    "tokens.components.api-pricing-card.padding": *pricing
    "tokens.components.api-pricing-card.use": *pricing
tokens:
  source: reconciled
  extracted: "2026-07-13"
  components_harvested: true
  colors:
    canvas: "#ffffff"
    ink: "#0a0d14"
    text: "#52525b"
    text-subtle: "#525866"
    action-violet: "#5b52ff"
    card-border: "#cdd0d5"
  typography:
    family: { ui: "Geist", marketing-display: "Espeak" }
    marketing-display: { size: 64, weight: 600, lineHeight: 1.10, use: "Public home marketing hero only" }
    section-heading: { size: 48, weight: 500, lineHeight: 1.15, use: "Public marketing section headings" }
    body: { size: 18, weight: 400, lineHeight: 1.60, use: "Public home and API-pricing body copy" }
    action: { size: 16, weight: 500, lineHeight: 1.50, use: "Public CTA controls" }
  spacing: { action-y: 12, action-x: 18, card: 32, card-end: 96 }
  rounded: { action: 8, card: 8 }
  components:
    api-pricing-card: { type: card, bg: "#ffffff", border: "1px solid #cdd0d5", radius: "8px", padding: "32px 96px 32px 32px", use: "API pricing model card observed on the public pricing surface" }
---

# Upstage — Design Reference

> **Enterprise AI for document-heavy work.** (Current public-surface reference, observed 2026-07-13)

## 1. Visual Theme & Atmosphere

Upstage is a Korean AI company building language models and document-processing engines for work. Its public site frames the offer through Solar models, document intelligence, and Studio workflows for high-stakes industries, rather than as a generic consumer chatbot. The current public expression is a compact, white-led enterprise marketing system: dark `#0A0D14` headings, `#52525B` long-form copy, and `#5B52FF` conversion actions organise the page. The hero is the conspicuous exception: a loaded **Espeak** face appears only in the public home’s large display treatment, while loaded **Geist** carries the rest of the observed marketing and public pricing content. The design’s rhythm comes from restrained, square-to-8px geometry and repeated direct actions, not from a broad decorative palette. Upstage’s own About and Studio pages connect this visual restraint to a practical proposition: making document-heavy workflows more controllable, traceable, and useful for enterprises.

What is distinctive in the evidence:

- **A narrow violet action lane.** `#5B52FF` appears on observed filled and outlined calls to action; it is not promoted as a general semantic/status palette.
- **Marketing display has a bounded job.** Espeak is loaded for the home hero, while Geist is the repeatedly resolved public UI/content family.
- **Public pricing is calmer than the hero.** The API-pricing surface uses white model cards, `#CDD0D5` borders, and `#525866` supporting text.
- **Geometry is mostly flat.** Buttons and observed cards use 8px corners; the supplied samples show no general card-shadow system.

## 2. Layout & Grid

- **Public action scale:** the repeated home filled and outlined action controls use 12px 18px padding; the compact outlined action uses 10px 16px.
- **Public pricing card:** the captured API-pricing model card uses `32px 96px 32px 32px` padding and a 24px internal gap.
- **Observed rhythm:** 8, 12, 16, 24, 32, 40, 96, and 128px occur in the collector’s spacing aggregation. This is a frequency record, not a claimed universal spacing scale.
- **Boundary:** no responsive breakpoint, desktop container maximum, or logged-in application layout is promoted from the supplied capture.

## 3. Color & Typography

### Color tokens

- `#FFFFFF` — observed page/card canvas
- `#0A0D14` — observed dark heading/ink
- `#52525B` — dominant observed public body-copy tone
- `#525866` — observed pricing-surface supporting-copy tone
- `#5B52FF` — observed public action foreground/background and catalog primary color
- `#CDD0D5` — observed API-pricing card border

The collector also sees isolated browser/default-like blue and red values. They are not assigned a brand or product role because the raw public capture does not establish one.

### Typography evidence classes

- **Live public UI/content use — Geist.** The collector records `Geist` as loaded/high confidence, with 626 visible uses across body, actions, navigation-like controls, cards, tabs, and headings, backed by five Google Fonts source URLs. It is the sole general UI-family token. The official Geist project identifies the family and publishes it under SIL Open Font License 1.1; that licence describes the font software, not an Upstage visual-identity licence.
- **Live public marketing-display use — Espeak.** The collector records `Espeak` as loaded/high confidence for five visible `h1` uses and two Upstage-hosted WOFF2 sources. The observed home hero reaches 64px/600/70.4px. This is a marketing-display token only, not evidence for an authenticated product UI. No public first-party licence terms for the face were found in this update; Upstage’s Brand Resource Center says brand assets and associated intellectual-property rights belong to Upstage.
- **System-resolved values.** `system-ui` (three observed uses) and `monospace` (one observed hero use) are operating-system families, not Upstage font assets or substitute specimens.
- **Declared-only assets.** Archivo, Inter, Montserrat, Noto Sans JP, and Noto Sans KR have `@font-face` declarations in the bundle but zero observed visible uses. They stay declared-only and are not machine UI-family tokens.
- **Measured public styles.** The capture records 48px/500 section headings, 18px/400 body text at 28.8px line height, and 16px/500 actions at 24px line height. These remain public-surface measurements, not a complete product type scale.

## 4. Components

### Public primary action

**Default**
- Background: `#5B52FF`
- Text: `#FFFFFF`
- Border: `1px solid #5B52FF`
- Radius: `8px`
- Padding: `12px 18px`
- Font: `16px / 500`
- Use: public filled conversion action on the home surface; evidence `home::[data-omd-capture="7"]`

### Public secondary action

**Default**
- Background: `#FFFFFF`
- Text: `#5B52FF`
- Border: `1px solid #5B52FF`
- Radius: `8px`
- Padding: `12px 18px`
- Font: `16px / 500`
- Use: public outlined conversion action on the home surface; evidence `home::[data-omd-capture="8"]`

### API pricing card

**Default**
- Background: `#FFFFFF`
- Text: `#52525B`
- Border: `1px solid #CDD0D5`
- Radius: `8px`
- Padding: `32px 96px 32px 32px`
- Font: `18px / 400`
- Use: public API-pricing model card; evidence `surface-2::#solar-pro-3`

### Public model tab

**Current item as captured**
- Background: `#FFFFFF`
- Text: `#0A0D14`
- Border: `1px solid #E2E4E9`
- Radius: `8px`
- Padding: `8px 16px`
- Font: `18px / 500`
- Use: currently selected model tab on public API pricing; evidence `surface-2::[data-omd-capture="5"]`, class `w--current`

Only static defaults/current markup are recorded. The bundle has `interactionCount: 0` and no interaction records, so hover, focus, pressed, disabled, menu, dialog, form, and tab-transition variants are intentionally omitted. Raw selector fragments marked `state-pressed` are not promoted because the summary does not corroborate an interaction run.

---
**Verified:** 2026-07-13
**Tier 1 sources:** `https://www.upstage.ai/` (public marketing), `https://www.upstage.ai/pricing/api` (public API-pricing), `https://www.upstage.ai/about` (corporate context), `https://www.upstage.ai/products/studio` (public product context), `https://www.upstage.ai/resources/brand-resource-center` (official brand-asset ownership), `https://github.com/vercel/geist-font` (official Geist family and SIL OFL 1.1 licence)
**Tier 2 sources:** `https://getdesign.md/upstage` (attempted; built-in web open safe-open failure), `https://styles.refero.design/?q=upstage` (attempted; built-in web open safe-open failure), web search for both catalog names (no Upstage record returned)
**Conflicts unresolved:** none

The prior `#3C043B` plum / `#D2FF95` Solar-accent palette, 2025 font counts, generic card claim, inferred motion timing, and unbounded product claims are not supported by the supplied 2026 capture and were removed rather than carried forward.

## 5. Elevation

The observed filled/outlined actions and API-pricing cards have `box-shadow: none`. A currently selected public pricing tab has a local `0px 2px 3px rgba(0,0,0,0.06)` shadow, but it is not promoted as a general elevation token or a tab-interaction rule.

## 6. Imagery & Illustration

- The public home and product pages use product screenshots and workflow/process imagery to explain document intelligence, Solar, and Studio. They are marketing evidence, not a reusable application-image component specification.
- The Brand Resource Center distributes logo, product-logo, media-kit, and leadership assets. Its ownership statement is an asset/IP boundary, not permission to reproduce those binaries.
- No repeated crop ratio, overlay rule, illustration style, or image-frame token is established by the supplied capture.

## 7. Iconography

The capture identifies ordinary links, buttons, and product imagery but no named icon library, icon-stroke rule, or reusable icon-size scale. No icon token is inferred.

## 8. Motion

No duration, easing, transition, scroll, or interaction sequence was captured. Motion is intentionally undocumented instead of inferred from Webflow classes or from the static pricing-tab markup.

## 9. Accessibility

- `#0A0D14` on `#FFFFFF` and `#5B52FF` on `#FFFFFF` are observed public text/action pairings; implementations should test each exact size and weight rather than treating this reference as an accessibility audit.
- The supplied capture does not establish focus-visible, keyboard, disabled, error, dialog, or menu states. Provide accessible behavior in an implementation without claiming it is an observed Upstage state.
- Geist has live FontFaceSet/source corroboration. Espeak is live only in the observed marketing hero; declared-only and system families must not be rendered as Upstage UI-family substitutes.

## 10. Voice & Tone

**Voice adjectives:** precise · enterprise-ready · workflow-oriented

| Do | Don't |
|---|---|
| Start from a document-heavy or high-stakes workflow. | Lead with an abstract AI-superlative detached from work. |
| Connect a model or agent to control, traceability, and deployment context. | Claim a capability without describing its operational setting. |
| Use concise, direct conversion labels. | Inflate marketing copy with invented benchmark or customer claims. |
| Separate public product promises from unobserved logged-in UI behavior. | Treat a marketing page as proof of a complete product design system. |

These are source-derived communication characteristics, not permission to reuse Upstage copy verbatim.

## 11. Brand Narrative

Upstage’s first-party About page says the company was founded in 2020 and builds intelligence for the future of work through language models and document-processing engines. Its founding story explains the name as helping companies move “up” to the stage of AI and describes the initial motivation as making advanced AI practical for organizations with data and IT teams. The current public site presents Solar, Document Parse, Information Extract, Studio, and AI Space, with industry framing for insurance, healthcare, manufacturing, and financial services.

The current evolution is toward document workflows that can be designed, deployed, and operated with visibility, control, governance, review, and traceability. Studio’s public page makes that product direction explicit while the About page supplies company context. Neither page is treated as evidence for private application visual tokens.

## 12. Principles

1. **Make work context explicit.** Frame the value around documents, operational control, and the environment where a model is deployed. *UI implication:* keep public claims tied to an identifiable workflow rather than generic capability badges.
2. **Reserve violet for conversion.** `#5B52FF` is observed on the public action treatments. *UI implication:* do not expand it into unsupported product status meanings.
3. **Use typography by source domain.** Geist is the loaded public UI/content family; Espeak is the bounded marketing display face. *UI implication:* do not use the hero face as a general product-app default.
4. **Preserve evidence boundaries.** Marketing, public pricing, corporate narrative, asset distribution, and unobserved documentation/app surfaces have different evidentiary roles. *UI implication:* do not merge their claims into a fictional unified component library.

## 13. Personas

Upstage’s public pages identify stakeholder groups without supplying formal user research or demographics. This reference preserves only those named functional contexts:

- **Document-workflow teams:** use Studio to design, deploy, and operate document-oriented agents with review and governance.
- **Enterprise technology and operations leaders:** evaluate deployment, traceability, security, and controlled access in high-stakes workflows.
- **AI/API builders:** evaluate Solar and document-intelligence services through public pricing and developer-oriented conversion paths.

No fictional names, demographic details, or unverified motivations are added.

## 14. States

No loading, empty, success, error, disabled, focus, or validation state is documented. The API-pricing capture contains a static current tab and inactive tab markup, but the zero-interaction bundle does not establish behavior or transitions; it is therefore not a behavioral state specification.

## 15. Motion & Easing

No motion or easing values were captured. Preserve that absence rather than assigning default curves or durations.

## 16. Do's and Don'ts

### Do

- Use the observed white / dark-ink public-surface foundation with `#5B52FF` reserved for conversion actions.
- Keep Geist as the loaded general public UI/content family and confine Espeak to the verified public marketing-display context.
- Use the 8px action/card geometry only where the public evidence establishes it.
- Keep public pricing-card claims separate from marketing, corporate, documentation, and logged-in product UI claims.
- Retain selector and surface provenance when reusing a documented component pattern.

### Don't

- Reintroduce the prior plum or Solar-lime palette as a current token without fresh source evidence.
- Present Archivo, Inter, Montserrat, Noto Sans JP/KR, `system-ui`, or `monospace` as an Upstage UI-family token.
- Invent hover, focus, pressed, disabled, dialog, or form variants from the uncorroborated state fragments.
- Treat the Brand Resource Center’s asset ownership notice as a licence to redistribute logos, photographs, or the Espeak face.
- Infer an authenticated product design system from these public surfaces.
