---
name: さくらインターネット
colors:
  primary: '#ff5577'
  canvas: '#ffffff'
  foreground: '#1d1d1d'
  inverse: '#f1f1f1'
  muted: '#6d6d75'
  hairline: '#cccccf'
typography:
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 28px
    use: Dominant public corporate body and service-card text.
  section-title:
    fontSize: 28px
    fontWeight: 600
    lineHeight: 36.4px
    use: Observed public corporate section heading.
  tab:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 28px
    use: Observed case-study tab label.
rounded:
  card: 8px
  tab: 8px
  pill: 46px
spacing:
  sm: 8
  md: 16
  lg: 32
  xl: 40
components:
  service-initiative-list:
    type: card
    backgroundColor: transparent
    textColor: '#1d1d1d'
    rounded: 0px
    padding: 0px
    typography: 16px / 400 Noto Sans JP
    use: Static service-initiative list container, selector home::div.service-card.service-initiative-list.
  case-tab-selected:
    type: tab
    backgroundColor: '#ffffff'
    textColor: '#1d1d1d'
    border: '2px solid #ff5577'
    rounded: 8px
    padding: 16px
    height: 110px
    typography: 16px / 400 Noto Sans JP
    states: selected and tab-selected observed in supplied tab interaction captures; no other state value is promoted
    use: Selected case-study tab, selector home::[data-omd-capture=23].
fonts:
  roles:
    ui: Noto Sans JP
    brand: Haru TP M
---

# Design System Inspiration of さくらインターネット

## Overview

### Visual Theme & Atmosphere

さくらインターネット is a Japanese internet-infrastructure company whose public story began in 1996, when its founder started by building servers and lending them to friends. Today its public ecosystem spans hosting, cloud, data centres, and newer AI-oriented infrastructure; the company frames that work around helping people turn what they want to do into what they can do. The captured corporate site makes a deliberately human counterpoint to infrastructure’s usual severity: near-black copy on white, a sparse pink `#ff5577` accent, roomy editorial cards, and rounded tab or action outlines. The brand’s own design material explains that Haru TP, its original typeface, carries handwriting-like character, while the high-volume public UI is set in Noto Sans JP. This reference preserves that useful two-layer expression without treating a corporate marketing capture as a logged-in cloud-console specification.

The current direction connects a long data-centre and cloud history to a wider platform role. First-party history records the 2016 logo refresh and recent AI/cloud additions; the visual system remains recognisable through its warm pink accents, soft card corners, and deliberate contrast between functional sans-serif UI copy and the more expressive Haru TP brand voice.

**Key Characteristics:**

- White `#ffffff` canvas and near-black `#1d1d1d` foreground create a clear editorial base.
- Pink `#ff5577` is an observed accent and selected-tab border, not a universal fill token.
- Noto Sans JP is the loaded, dominant public UI family; Haru TP M is a separately observed and officially described brand typeface.
- Spacious 32px/40px card padding and 8px card corners sit beside 46px pill-shaped news tabs.
- Only selected/tab-selected interaction evidence was supplied; unobserved hover, focus, pressed, disabled, validation, dialog, and toast values are absent.

### Primary tasks

- Find the hosting or cloud option that fits a planned project
- Read infrastructure detail before making a technical decision
- Browse case studies through the tabbed case-study navigation
- Understand how the platform can connect to a wider initiative

### Imagery & Iconography

Brand assets are published separately with logo variants and usage guidance. Use the official logo files for branded work rather than redrawing the mark from a favicon. The supplied capture supports the page’s high-contrast graphic language and its pink accent, but it does not provide a reusable icon grid, stroke weight, illustration library, or image-treatment token; those fields are omitted.

### Brand Narrative

Sakura Internet’s history page dates the start of the business to 1996, when founder Kunihiro Tanaka built servers as a student and lent them to friends; shared hosting was its first listed service. The company later expanded through dedicated servers, data centres, VPS, cloud, and more recent AI infrastructure. That trajectory makes the brand’s human visual layer more than decoration: it places a personal point of view beside services that can otherwise feel impersonal.

Its current vision is to create, with the internet, a society where people with the desire to try can realise what they want to do. The company’s own materials connect customer success, employee challenge, and wider collaboration; this reference therefore treats clarity, enabling language, and visible operational confidence as narrative implications, not as invented product facts.

### Principles

1. **Make ambition actionable.**
   *UI implication:* name the user’s intended outcome before presenting infrastructure choices.
2. **Keep the technical foundation legible.**
   *UI implication:* use direct hierarchy, clear data labels, and distinct structural groups rather than opaque decorative layers.
3. **Let human character coexist with precision.**
   *UI implication:* reserve the official Haru TP expression for branded moments and retain readable Noto Sans JP for dense public UI.
4. **Build with a broader ecosystem in mind.**
   *UI implication:* write handoffs and service relationships plainly; do not imply that one screen contains every solution.

### Personas

These are service-role archetypes derived from Sakura’s first-party statements about customers, employees, and partners; they are not synthetic research participants.

- **Builder with a concrete project:** needs a clear route from an intended service to an appropriate hosting, cloud, or infrastructure option.
- **Operations or technical decision-maker:** needs confident, scannable information about infrastructure without promotional ambiguity.
- **Partner or regional collaborator:** needs to understand how Sakura’s platform and expertise can connect to a wider initiative.

## Colors

### Supplied public-surface tokens

- **Accent pink** (`#ff5577`): observed as a background on both captured official surfaces and as the selected case-tab border on the corporate home.
- **Canvas** (`#ffffff`): public page and card ground.
- **Foreground** (`#1d1d1d`): dominant home-page text and selected-tab text.
- **Inverse ink** (`#f1f1f1`): light text and border treatment in the home-page dark footer area.
- **Muted copy** (`#6d6d75`): observed service-card supporting text.
- **Hairline neutral** (`#cccccf`): observed unselected case-tab border.

The frontmatter `primary_color` is the observed pink accent. It must not be replaced by a plausible Sakura, cherry-blossom, or generic cloud blue not backed by the supplied capture.

## Typography

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

## Layout

### Layout & Spacing System

The observed public desktop surface uses a small practical spacing ladder rather than a dense infrastructure-console grid: 8px appears as card gap, 16px as selected-tab inset, 32px as primary card inset, and 40px as wider case-card inset. Treat these as observed public-surface values, not a complete responsive spacing scale. The static service-initiative container adds a 24px vertical margin in raw capture, but it is not elevated to a shared token because this record only preserves the four directly reused measured steps.

### Responsive Behavior

The supplied evidence is a public desktop capture and does not establish a responsive breakpoint, mobile typography scale, navigation collapse, or touch-target contract. Retain measured default geometry only where it is selector-backed; omit all other responsive prescriptions.

## Elevation & Depth

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.card`: `0px 2px 1px rgba(0, 0, 0, 0.15)`

## Motion & Easing

No selector-backed duration, easing, animation, transition, or reduced-motion rule appears in the supplied evidence. Motion tokens are intentionally omitted. If a new implementation needs movement, make it restrained, purposeful, and independently accessibility-tested rather than presenting it as an observed Sakura rule.

## Components

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

### States

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

## Do's and Don'ts

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

## Voice & Tone

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

## Governance

### Accessibility Considerations

The white/near-black public pairing gives the reference a strong contrast-oriented baseline, while muted `#6d6d75` and inverse `#f1f1f1` remain surface-specific observations rather than audited accessibility claims. Preserve semantic native tab controls where tabs are required and expose their selected state programmatically. Do not infer keyboard focus styling from the selected-tab capture; provide a tested focus treatment in any new implementation rather than claiming Sakura’s exact one.

### Known Gaps

- **Contrast, `service-initiative-list`.** Text `#1d1d1d` on `#00000000` measures 1.25:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
