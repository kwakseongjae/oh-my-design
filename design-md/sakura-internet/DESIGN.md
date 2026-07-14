---
id: sakura-internet
name: さくらインターネット
country: JP
category: backend-devops
homepage: "https://www.sakura.ad.jp/"
primary_color: "#ff5577"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=www.sakura.ad.jp&sz=128"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: corporate-marketing, url: "https://www.sakura.ad.jp/", inspected: "2026-07-13" }
    - { id: brand-assets, kind: brand-assets, url: "https://www.sakura.ad.jp/brand-assets/", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.sakura.ad.jp/", captured: "2026-07-13" }
    - { id: brand-assets-live, kind: brand-asset, url: "https://www.sakura.ad.jp/brand-assets/", captured: "2026-07-13" }
    - { id: company-history, kind: official-doc, url: "https://www.sakura.ad.jp/corporate/corp/history/", captured: "2026-07-13" }
    - { id: company-vision, kind: official-doc, url: "https://www.sakura.ad.jp/corporate/corp/", captured: "2026-07-13" }
    - { id: brand-design, kind: brand-asset, url: "https://www.sakura.ad.jp/corporate/corp/design/", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &home_live { surface_id: home, source_id: home-live, method: supplied-computed-style, captured: "2026-07-13" }
    "tokens.colors.canvas": *home_live
    "tokens.colors.foreground": *home_live
    "tokens.colors.inverse": *home_live
    "tokens.colors.muted": *home_live
    "tokens.colors.hairline": *home_live
    "tokens.typography.family.ui": *home_live
    "tokens.typography.family.brand": &brand_assets { surface_id: brand-assets, source_id: brand-assets-live, method: supplied-computed-style-and-brand-asset, captured: "2026-07-13" }
    "tokens.typography.body.size": *home_live
    "tokens.typography.body.weight": *home_live
    "tokens.typography.body.lineHeight": *home_live
    "tokens.typography.body.use": *home_live
    "tokens.typography.section-title.size": *home_live
    "tokens.typography.section-title.weight": *home_live
    "tokens.typography.section-title.lineHeight": *home_live
    "tokens.typography.section-title.use": *home_live
    "tokens.typography.tab.size": *home_live
    "tokens.typography.tab.weight": *home_live
    "tokens.typography.tab.lineHeight": *home_live
    "tokens.typography.tab.use": *home_live
    "tokens.spacing.sm": *home_live
    "tokens.spacing.md": *home_live
    "tokens.spacing.lg": *home_live
    "tokens.spacing.xl": *home_live
    "tokens.rounded.card": *home_live
    "tokens.rounded.tab": *home_live
    "tokens.rounded.pill": *home_live
    "tokens.shadow.card": *home_live
    "tokens.components.service-initiative-list.type": *home_live
    "tokens.components.service-initiative-list.bg": *home_live
    "tokens.components.service-initiative-list.fg": *home_live
    "tokens.components.service-initiative-list.radius": *home_live
    "tokens.components.service-initiative-list.padding": *home_live
    "tokens.components.service-initiative-list.font": *home_live
    "tokens.components.service-initiative-list.use": *home_live
    "tokens.components.case-tab-selected.type": *home_live
    "tokens.components.case-tab-selected.bg": *home_live
    "tokens.components.case-tab-selected.fg": *home_live
    "tokens.components.case-tab-selected.border": *home_live
    "tokens.components.case-tab-selected.radius": *home_live
    "tokens.components.case-tab-selected.padding": *home_live
    "tokens.components.case-tab-selected.height": *home_live
    "tokens.components.case-tab-selected.font": *home_live
    "tokens.components.case-tab-selected.states": *home_live
    "tokens.components.case-tab-selected.use": *home_live
tokens:
  source: live-extract
  extracted: "2026-07-13"
  note: "Machine tokens are limited to selector-backed values in the supplied public corporate and brand-asset capture; company narrative and font-design context remain separate evidence domains."
  colors:
    primary: "#ff5577"
    canvas: "#ffffff"
    foreground: "#1d1d1d"
    inverse: "#f1f1f1"
    muted: "#6d6d75"
    hairline: "#cccccf"
  typography:
    family: { ui: "Noto Sans JP", brand: "Haru TP M" }
    body: { size: 16, weight: 400, lineHeight: "28px", use: "Dominant public corporate body and service-card text." }
    section-title: { size: 28, weight: 600, lineHeight: "36.4px", use: "Observed public corporate section heading." }
    tab: { size: 16, weight: 400, lineHeight: "28px", use: "Observed case-study tab label." }
  spacing: { sm: 8, md: 16, lg: 32, xl: 40 }
  rounded: { card: 8, tab: 8, pill: 46 }
  shadow: { card: "0px 2px 1px rgba(0, 0, 0, 0.15)" }
  components_harvested: true
  components:
    service-initiative-list: { type: card, bg: "transparent", fg: "#1d1d1d", radius: "0px", padding: "0px", font: "16px / 400 Noto Sans JP", use: "Static service-initiative list container, selector home::div.service-card.service-initiative-list." }
    case-tab-selected: { type: tab, bg: "#ffffff", fg: "#1d1d1d", border: "2px solid #ff5577", radius: "8px", padding: "16px", height: "110px", font: "16px / 400 Noto Sans JP", states: "selected and tab-selected observed in supplied tab interaction captures; no other state value is promoted", use: "Selected case-study tab, selector home::[data-omd-capture=23]." }
---

# Design System Inspiration of さくらインターネット

## 1. Visual Theme & Atmosphere

さくらインターネット is a Japanese internet-infrastructure company whose public story began in 1996, when its founder started by building servers and lending them to friends. Today its public ecosystem spans hosting, cloud, data centres, and newer AI-oriented infrastructure; the company frames that work around helping people turn what they want to do into what they can do. The captured corporate site makes a deliberately human counterpoint to infrastructure’s usual severity: near-black copy on white, a sparse pink `#ff5577` accent, roomy editorial cards, and rounded tab or action outlines. The brand’s own design material explains that Haru TP, its original typeface, carries handwriting-like character, while the high-volume public UI is set in Noto Sans JP. This reference preserves that useful two-layer expression without treating a corporate marketing capture as a logged-in cloud-console specification.

The current direction connects a long data-centre and cloud history to a wider platform role. First-party history records the 2016 logo refresh and recent AI/cloud additions; the visual system remains recognisable through its warm pink accents, soft card corners, and deliberate contrast between functional sans-serif UI copy and the more expressive Haru TP brand voice.

**Key Characteristics:**

- White `#ffffff` canvas and near-black `#1d1d1d` foreground create a clear editorial base.
- Pink `#ff5577` is an observed accent and selected-tab border, not a universal fill token.
- Noto Sans JP is the loaded, dominant public UI family; Haru TP M is a separately observed and officially described brand typeface.
- Spacious 32px/40px card padding and 8px card corners sit beside 46px pill-shaped news tabs.
- Only selected/tab-selected interaction evidence was supplied; unobserved hover, focus, pressed, disabled, validation, dialog, and toast values are absent.

## 2. Color Palette & Roles

### Supplied public-surface tokens

- **Accent pink** (`#ff5577`): observed as a background on both captured official surfaces and as the selected case-tab border on the corporate home.
- **Canvas** (`#ffffff`): public page and card ground.
- **Foreground** (`#1d1d1d`): dominant home-page text and selected-tab text.
- **Inverse ink** (`#f1f1f1`): light text and border treatment in the home-page dark footer area.
- **Muted copy** (`#6d6d75`): observed service-card supporting text.
- **Hairline neutral** (`#cccccf`): observed unselected case-tab border.

The frontmatter `primary_color` is the observed pink accent. It must not be replaced by a plausible Sakura, cherry-blossom, or generic cloud blue not backed by the supplied capture.

## 3. Typography Rules

### Evidence classes

- **Official product-use:** no first-party announcement in this research set states that a named family is the typography of a distinct authenticated product UI; no such claim is made.
- **Live computed surface-use:** `Noto Sans JP` is loaded with high confidence, has 166 visible uses, and supplies the dominant public corporate body, cards, headings, tabs, and buttons in the supplied capture.
- **Official distributed brand asset:** Sakura’s first-party design page describes Haru TP as an original typeface developed and used to express the company’s human character, and says it is used on the website, in presentation material, and in data-centre signage. The supplied brand-assets surface also loads Haru TP R and Haru TP M. This is brand-expression evidence, not a licence grant or a substitute for Noto Sans JP in ordinary UI text.
- **Declared-only:** none is promoted from declaration alone in this reference.
- **Unresolved:** no public redistribution or licence terms for Haru TP were located in the reviewed official materials; browser-loadable source URLs were supplied only for Noto Sans JP.

| Role | Family | Size | Weight | Line height | Evidence |
|---|---|---:|---:|---:|---|
| Body / service card | Noto Sans JP | 16px | 400 | 28px | dominant corporate public text |
| Section title | Noto Sans JP | 28px | 600 | 36.4px | observed corporate heading |
| Case-study tab | Noto Sans JP | 16px | 400 | 28px | observed tab button |
| Brand-asset specimen | Haru TP M | 12px | 400 | 13.8px | observed brand-assets surface; not a general UI token |

Do not render a system fallback as if it were Haru TP, and do not promote the Haru TP brand story into a general Noto Sans JP replacement or a product-console contract.

## 4. Component Stylings

### Service initiative list

**Static observed container**
- Background: transparent
- Text: #1d1d1d
- Radius: 0px
- Padding: 0px
- Font: 16px / 400 / Noto Sans JP
- Use: `home::div`, class `service-card service-initiative-list`; a 1200px-wide static service-list container in the supplied desktop capture.

### Case-study tab

**Selected observed tab**
- Background: #ffffff
- Text: #1d1d1d
- Border: 2px solid #ff5577
- Radius: 8px
- Padding: 16px
- Height: 110px
- Font: 16px / 400 / Noto Sans JP
- States: selected and tab-selected were observed in the supplied tab captures. No hover, focus, pressed, disabled, or error value is supplied.
- Use: `home::[data-omd-capture="23"]`, class `case-tab-button`; selected case-study navigation.

The 46px news-tab pill and the unselected 1px `#cccccf` case-tab border remain observed surface details in the evidence record, but are not expanded into additional component tokens where the captured state/value boundary is less direct.

---

**Verified:** 2026-07-13 (verification v2, supplied deterministic computed-style capture plus first-party context)
**Tier 1 sources:** https://www.sakura.ad.jp/ · https://www.sakura.ad.jp/brand-assets/ · https://www.sakura.ad.jp/corporate/corp/design/
**Tier 2 sources:** https://getdesign.md/sakura-internet (attempted; no usable record) · https://styles.refero.design/?q=Sakura%20Internet (attempted; no usable record)
**Conflicts unresolved:** none

## 5. Layout & Spacing System

The observed public desktop surface uses a small practical spacing ladder rather than a dense infrastructure-console grid: 8px appears as card gap, 16px as selected-tab inset, 32px as primary card inset, and 40px as wider case-card inset. Treat these as observed public-surface values, not a complete responsive spacing scale. The static service-initiative container adds a 24px vertical margin in raw capture, but it is not elevated to a shared token because this record only preserves the four directly reused measured steps.

## 6. Imagery & Iconography

Brand assets are published separately with logo variants and usage guidance. Use the official logo files for branded work rather than redrawing the mark from a favicon. The supplied capture supports the page’s high-contrast graphic language and its pink accent, but it does not provide a reusable icon grid, stroke weight, illustration library, or image-treatment token; those fields are omitted.

## 7. Do's and Don'ts

### Do

- Keep ordinary public UI copy in the observed Noto Sans JP family where the hosted font is available.
- Use `#ff5577` sparingly for a selected or branded accent against white and near-black structure.
- Preserve the contrast between square structural containers and the observed 8px cards or 46px pill tabs.
- Use Haru TP only when official brand-asset access and its usage boundary are appropriate.

### Don't

- Replace Haru TP with a system font and present the result as the original brand face.
- Turn every public action into a solid pink button; the retained action evidence is surface-specific.
- Invent a dark cloud-console, validation, modal, toast, or keyboard-focus system from the marketing capture.
- Treat the 2016 brand-asset guidance as proof of every current product-screen component value.

## 8. Responsive Behavior

The supplied evidence is a public desktop capture and does not establish a responsive breakpoint, mobile typography scale, navigation collapse, or touch-target contract. Retain measured default geometry only where it is selector-backed; omit all other responsive prescriptions.

## 9. Accessibility Considerations

The white/near-black public pairing gives the reference a strong contrast-oriented baseline, while muted `#6d6d75` and inverse `#f1f1f1` remain surface-specific observations rather than audited accessibility claims. Preserve semantic native tab controls where tabs are required and expose their selected state programmatically. Do not infer keyboard focus styling from the selected-tab capture; provide a tested focus treatment in any new implementation rather than claiming Sakura’s exact one.

## 10. Voice & Tone

The official company material frames the brand as enabling people’s ambitions through the internet, while its design page argues for a more human, hand-drawn note inside technical infrastructure. The working tone is enabling, candid, and human—not falsely casual or ornamental.

| Do | Don't |
|---|---|
| State the capability and the next practical step. | Lead with infrastructure jargon before explaining the outcome. |
| Pair technical confidence with plain, considerate Japanese. | Make a broad availability claim the service cannot support. |
| Let Haru TP or a warm illustration carry character where officially supplied. | Simulate handwritten warmth with an unrelated fallback face. |

Voice samples (analyst paraphrases, not official copy):

- “Start with the workload you want to run; choose the infrastructure path after that.”
- “Keep the operational detail visible, then make the next decision clear.”
- “Make room for a new project without making the platform feel remote.”

## 11. Brand Narrative

Sakura Internet’s history page dates the start of the business to 1996, when founder Kunihiro Tanaka built servers as a student and lent them to friends; shared hosting was its first listed service. The company later expanded through dedicated servers, data centres, VPS, cloud, and more recent AI infrastructure. That trajectory makes the brand’s human visual layer more than decoration: it places a personal point of view beside services that can otherwise feel impersonal.

Its current vision is to create, with the internet, a society where people with the desire to try can realise what they want to do. The company’s own materials connect customer success, employee challenge, and wider collaboration; this reference therefore treats clarity, enabling language, and visible operational confidence as narrative implications, not as invented product facts.

## 12. Principles

1. **Make ambition actionable.**
   *UI implication:* name the user’s intended outcome before presenting infrastructure choices.
2. **Keep the technical foundation legible.**
   *UI implication:* use direct hierarchy, clear data labels, and distinct structural groups rather than opaque decorative layers.
3. **Let human character coexist with precision.**
   *UI implication:* reserve the official Haru TP expression for branded moments and retain readable Noto Sans JP for dense public UI.
4. **Build with a broader ecosystem in mind.**
   *UI implication:* write handoffs and service relationships plainly; do not imply that one screen contains every solution.

## 13. Personas

These are service-role archetypes derived from Sakura’s first-party statements about customers, employees, and partners; they are not synthetic research participants.

- **Builder with a concrete project:** needs a clear route from an intended service to an appropriate hosting, cloud, or infrastructure option.
- **Operations or technical decision-maker:** needs confident, scannable information about infrastructure without promotional ambiguity.
- **Partner or regional collaborator:** needs to understand how Sakura’s platform and expertise can connect to a wider initiative.

## 14. States

| State | Guidance |
|---|---|
| Empty | Explain what can appear here and offer one direct next step. |
| Loading | Keep the existing information hierarchy visible; avoid pretending that a loaded result is available. |
| Error: service request | State what failed, preserve user-entered context where safe, and give a recoverable next action. |
| Error: unavailable option | Explain the boundary plainly and route to a supported alternative or support contact. |
| Success | Confirm the completed action and identify what happens next. |
| Skeleton | Reserve the measured card structure without inventing an animated Sakura loading treatment. |
| Disabled | Give a nearby explanation of the unmet condition; do not rely on colour alone. |
| Selected tab | The public capture supports selected/tab-selected case-study tabs with white fill, near-black text, and a 2px pink border. |
| Unobserved interaction states | Hover, focus, pressed, validation, toast, dialog, and menu values are intentionally absent from this reference. |
| Long-form content | Retain clear section spacing and readable line length rather than compressing infrastructure explanations into control labels. |

## 15. Motion & Easing

No selector-backed duration, easing, animation, transition, or reduced-motion rule appears in the supplied evidence. Motion tokens are intentionally omitted. If a new implementation needs movement, make it restrained, purposeful, and independently accessibility-tested rather than presenting it as an observed Sakura rule.
