---
id: uswds
name: U.S. Web Design System
country: US
category: government
homepage: "https://designsystem.digital.gov/"
primary_color: "#005ea2"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=designsystem.digital.gov&sz=128"
verified: "2026-07-13"
omd: "0.1"
ds:
  name: U.S. Web Design System
  url: "https://designsystem.digital.gov/"
  type: system
  description: "GSA's open-source design system for accessible, mobile-friendly U.S. government websites and services."
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, url: "https://designsystem.digital.gov/", inspected: "2026-07-13" }
    - { id: components, url: "https://designsystem.digital.gov/components/overview/", inspected: "2026-07-13" }
    - { id: accordion, url: "https://designsystem.digital.gov/components/accordion/", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://designsystem.digital.gov/", captured: "2026-07-13" }
    - { id: components-live, kind: official-doc, url: "https://designsystem.digital.gov/components/overview/", captured: "2026-07-13" }
    - { id: accordion-live, kind: official-doc, url: "https://designsystem.digital.gov/components/accordion/", captured: "2026-07-13" }
    - { id: about-doc, kind: official-doc, url: "https://designsystem.digital.gov/about/", captured: "2026-07-13" }
    - { id: typography-doc, kind: official-doc, url: "https://designsystem.digital.gov/components/typography/", captured: "2026-07-13" }
    - { id: policy-license, kind: license, url: "https://designsystem.digital.gov/about/website-policies-notices/", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": { surface_id: components, source_id: components-live, method: supplied-computed-style, captured: "2026-07-13" }
    "tokens.colors.primary-vivid": { surface_id: accordion, source_id: accordion-live, method: supplied-computed-style, captured: "2026-07-13" }
    "tokens.colors.canvas": { surface_id: components, source_id: components-live, method: supplied-computed-style, captured: "2026-07-13" }
    "tokens.colors.foreground": { surface_id: home, source_id: home-live, method: supplied-computed-style, captured: "2026-07-13" }
    "tokens.colors.hairline": { surface_id: components, source_id: components-live, method: supplied-computed-style, captured: "2026-07-13" }
    "tokens.colors.header": { surface_id: home, source_id: home-live, method: supplied-computed-style, captured: "2026-07-13" }
    "tokens.colors.search-surface": { surface_id: home, source_id: home-live, method: supplied-computed-style, captured: "2026-07-13" }
    "tokens.colors.search-action": { surface_id: home, source_id: home-live, method: supplied-computed-style, captured: "2026-07-13" }
    "tokens.colors.inverse": { surface_id: home, source_id: home-live, method: supplied-computed-style, captured: "2026-07-13" }
    "tokens.typography.family.ui": { surface_id: home, source_id: home-live, method: loaded-font-and-computed-style, captured: "2026-07-13" }
    "tokens.typography.family.form": { surface_id: components, source_id: components-live, method: loaded-font-and-computed-style, captured: "2026-07-13" }
    "tokens.typography.body.size": { surface_id: home, source_id: home-live, method: supplied-computed-style, captured: "2026-07-13" }
    "tokens.typography.body.weight": { surface_id: home, source_id: home-live, method: supplied-computed-style, captured: "2026-07-13" }
    "tokens.typography.body.lineHeight": { surface_id: home, source_id: home-live, method: supplied-computed-style, captured: "2026-07-13" }
    "tokens.typography.body.use": { surface_id: home, source_id: home-live, method: supplied-computed-style, captured: "2026-07-13" }
    "tokens.typography.form-input.size": { surface_id: components, source_id: components-live, method: supplied-computed-style, captured: "2026-07-13" }
    "tokens.typography.form-input.weight": { surface_id: components, source_id: components-live, method: supplied-computed-style, captured: "2026-07-13" }
    "tokens.typography.form-input.lineHeight": { surface_id: components, source_id: components-live, method: supplied-computed-style, captured: "2026-07-13" }
    "tokens.typography.form-input.use": { surface_id: components, source_id: components-live, method: supplied-computed-style, captured: "2026-07-13" }
    "tokens.spacing.xs": { surface_id: home, source_id: home-live, method: supplied-computed-style, captured: "2026-07-13" }
    "tokens.spacing.sm": { surface_id: home, source_id: home-live, method: supplied-computed-style, captured: "2026-07-13" }
    "tokens.spacing.md": { surface_id: home, source_id: home-live, method: supplied-computed-style, captured: "2026-07-13" }
    "tokens.spacing.lg": { surface_id: components, source_id: components-live, method: supplied-computed-style, captured: "2026-07-13" }
    "tokens.spacing.xl": { surface_id: accordion, source_id: accordion-live, method: supplied-computed-style, captured: "2026-07-13" }
    "tokens.rounded.none": { surface_id: components, source_id: components-live, method: supplied-computed-style, captured: "2026-07-13" }
    "tokens.rounded.control": { surface_id: home, source_id: home-live, method: supplied-computed-style, captured: "2026-07-13" }
    "tokens.components.search-submit.type": { surface_id: home, source_id: home-live, method: selector-backed-component, captured: "2026-07-13" }
    "tokens.components.search-submit.bg": { surface_id: home, source_id: home-live, method: selector-backed-component, captured: "2026-07-13" }
    "tokens.components.search-submit.fg": { surface_id: home, source_id: home-live, method: selector-backed-component, captured: "2026-07-13" }
    "tokens.components.search-submit.border": { surface_id: home, source_id: home-live, method: selector-backed-component, captured: "2026-07-13" }
    "tokens.components.search-submit.radius": { surface_id: home, source_id: home-live, method: selector-backed-component, captured: "2026-07-13" }
    "tokens.components.search-submit.padding": { surface_id: home, source_id: home-live, method: selector-backed-component, captured: "2026-07-13" }
    "tokens.components.search-submit.size": { surface_id: home, source_id: home-live, method: selector-backed-component, captured: "2026-07-13" }
    "tokens.components.search-submit.font": { surface_id: home, source_id: home-live, method: selector-backed-component, captured: "2026-07-13" }
    "tokens.components.search-submit.states": { surface_id: home, source_id: home-live, method: selector-backed-component, captured: "2026-07-13" }
    "tokens.components.search-submit.use": { surface_id: home, source_id: home-live, method: selector-backed-component, captured: "2026-07-13" }
    "tokens.components.side-navigation-item.type": { surface_id: components, source_id: components-live, method: selector-backed-component, captured: "2026-07-13" }
    "tokens.components.side-navigation-item.bg": { surface_id: components, source_id: components-live, method: selector-backed-component, captured: "2026-07-13" }
    "tokens.components.side-navigation-item.fg": { surface_id: components, source_id: components-live, method: selector-backed-component, captured: "2026-07-13" }
    "tokens.components.side-navigation-item.border": { surface_id: components, source_id: components-live, method: selector-backed-component, captured: "2026-07-13" }
    "tokens.components.side-navigation-item.radius": { surface_id: components, source_id: components-live, method: selector-backed-component, captured: "2026-07-13" }
    "tokens.components.side-navigation-item.size": { surface_id: components, source_id: components-live, method: selector-backed-component, captured: "2026-07-13" }
    "tokens.components.side-navigation-item.font": { surface_id: components, source_id: components-live, method: selector-backed-component, captured: "2026-07-13" }
    "tokens.components.side-navigation-item.use": { surface_id: components, source_id: components-live, method: selector-backed-component, captured: "2026-07-13" }
tokens:
  source: live-extract
  extracted: "2026-07-13"
  note: "Only the supplied three-surface computed-style packet grounds machine tokens; narrative and license evidence remain separate."
  colors:
    primary: "#005ea2"
    primary-vivid: "#0050d8"
    canvas: "#fcfcfc"
    foreground: "#1b1b1b"
    hairline: "#e6e6e6"
    header: "#252f3e"
    search-surface: "#13171f"
    search-action: "#2672de"
    inverse: "#ffffff"
  typography:
    family: { ui: "Public Sans Web", form: "Source Sans Pro Web" }
    body: { size: 16, weight: 400, lineHeight: 1.6, use: "Observed documentation body baseline" }
    form-input: { size: 16.96, weight: 400, lineHeight: 1.3, use: "Observed text input baseline" }
  spacing: { xs: 4, sm: 8, md: 12, lg: 16, xl: 24 }
  rounded: { none: 0, control: 4 }
  components_harvested: true
  components:
    search-submit: { type: button, bg: "#2672de", fg: "#ffffff", border: "0px", radius: "0px 4px 4px 0px", padding: "0px 12px", size: "48px x 38px", font: "16.96px / 700 / Source Sans Pro Web", states: "Default baseline observed; no hover, focus, pressed, disabled, or error value was captured.", use: "Observed site-search submit control on all three captured surfaces" }
    side-navigation-item: { type: listItem, bg: "transparent", fg: "#000000", border: "0px", radius: "0px", size: "204px x 38px", font: "15.04px / 400 / Public Sans Web", use: "Observed side-navigation row on the official components overview and accordion documentation surfaces" }
---

# Design System Inspiration of U.S. Web Design System

## 1. Visual Theme & Atmosphere

The U.S. Web Design System (USWDS) is the General Services Administration’s open-source system for helping federal teams build familiar, accessible, and mobile-friendly public websites and services. Its visual character is deliberately civic rather than proprietary: high-contrast ink, white and near-white reading surfaces, strong government blues, clear borders, and compact square-to-lightly-rounded controls make task completion legible across agencies. The system began in 2015 through 18F and the U.S. Digital Service with an advisory board spanning federal agencies; it is now maintained by GSA’s Digital Services Division. Its current mission is to shape the future of government digital services, with a stated focus on helping teams align, design, and keep services current.

The supplied capture covers the public USWDS home page plus component overview and accordion documentation. Across those official documentation surfaces, `#1b1b1b` text and `#fcfcfc` canvas establish a sober reading field, while `#005ea2`, `#0050d8`, and a darker `#252f3e` header distinguish navigation and action. Measured 0px and 4px radii keep controls structural rather than decorative.

The public documentation also frames USWDS as an active open-source community of government engineers, content specialists, and designers. This reference keeps that organization-level narrative separate from the measured documentation-surface tokens: it does not claim that a component captured here represents every federal implementation.

**Key characteristics:**

- Public-service clarity through dark ink, white space, and restrained blue action colors
- Documentation surfaces use both `Public Sans Web` and `Source Sans Pro Web`, backed by loaded first-party font files
- Spacing measurements cluster around 4px, 8px, 12px, 16px, and 24px
- Square baselines with 4px control corners
- Accessible, semantic component documentation rather than agency-specific branding

## 2. Color Palette & Roles

- **Primary blue** (`#005ea2`): observed documentation action and outline color.
- **Vivid blue** (`#0050d8`): observed accordion-button fill.
- **Canvas** (`#fcfcfc`): observed documentation-surface canvas and outlined-button fill.
- **Foreground** (`#1b1b1b`): the recurring dark text and border color.
- **Hairline** (`#e6e6e6`): observed list boundary.
- **Header** (`#252f3e`): observed home-page extended-header surface.
- **Search surface** (`#13171f`) and **search action** (`#2672de`): observed paired search control values.
- **Inverse** (`#ffffff`): observed text and border against blue or dark surfaces.

No success, warning, error, hover, focus, selected, disabled, or alert color is promoted from this packet. Those semantic groups are absent here rather than filled with plausible USWDS defaults.

## 3. Typography Rules

### Font evidence boundary

| Evidence class | Resolution |
|---|---|
| Official product-use | USWDS documentation presents Public Sans, Source Sans Pro, Merriweather, and Roboto Mono as included typefaces and describes role-based family tokens. This is a system capability and not a claim that every project uses every face. |
| Live computed surface-use | `Public Sans Web` was loaded/high with 841 observed uses; `Source Sans Pro Web` was loaded/high with 143 uses; `Roboto Mono Web` was loaded/high with 6 uses in the supplied packet. |
| Official distributed brand asset | The packet records first-party `designsystem.digital.gov/assets/fonts/` WOFF2 sources for Public Sans, Source Sans Pro, and Roboto Mono. USWDS documents Public Sans as an open-source face maintained by the Design System. |
| Declared-only | `Merriweather Web` had first-party `@font-face` declarations but no visible use in the packet. It remains documented as an available typeface, not a current UI-family token. |
| Unresolved | Typography on downstream agency products, and any font state outside the three captured documentation surfaces, is unresolved. |

| Observed role | Family | Size | Weight | Line height |
|---|---:|---:|---:|---:|
| Documentation body baseline | Public Sans Web | 16px | 400 | 25.6px |
| Text-input baseline | Source Sans Pro Web | 16.96px | 400 | 22.048px |

USWDS’s typography guidance says its faces are selected for legibility and can be configured by role. Do not substitute a system fallback and label it as Public Sans or Source Sans Pro; this capture confirmed first-party loaded font faces for both measured families.

## 4. Component Stylings

### Button

**Search submit default**

- Background: `#2672de`
- Text: `#ffffff`
- Border: `0px`
- Radius: `0px 4px 4px 0px`
- Padding: `0px 12px`
- Size: `48px x 38px`
- Font: `16.96px / 700 / Source Sans Pro Web`
- States: Default baseline observed; no hover, focus, pressed, disabled, or error value was captured.
- Use: Site-search submit control observed on all three supplied capture surfaces.

### List item

**Side navigation default**

- Background: transparent
- Text: `#000000`
- Border: `0px`
- Radius: `0px`
- Size: `204px x 38px`
- Font: `15.04px / 400 / Public Sans Web`
- Use: Side-navigation row observed on the components overview and accordion documentation surfaces.

The packet contains zero interaction records. Static default geometry above is retained because it is selector- and surface-backed; no interactive visual state is inferred from component names or CSS class names.

## 5. Layout & Spacing

The measured spacing sequence is `4px`, `8px`, `12px`, `16px`, and `24px`; these values recur in the supplied computed-style aggregates. Documentation body text was measured at 16px with a 25.6px line height. USWDS’s official typography guidance separately recommends comfortable body text and explains that whitespace should group related elements while distinguishing unrelated ones.

The capture does not establish a universal grid, page max width, responsive breakpoint, or agency-application layout token. Those groups are omitted rather than generalized from one documentation viewport.

## 6. Visual Effects & Imagery

The observed components use `box-shadow: none` and a largely flat treatment. Borders, contrast, and spacing carry hierarchy more often than elevation. The home header’s dark `#252f3e` field and white inverse text provide the strongest measured tonal shift.

No image direction, illustration system, photography treatment, iconography token, or global elevation scale was established by the supplied evidence. Do not infer one from federal seals, page artwork, or component documentation examples.

## 7. UI Guidelines

### Do

- Use the measured blue, ink, canvas, and inverse values only in the roles documented above.
- Preserve the observed flat control treatment and 0px/4px corners when applying these specific static component references.
- Keep Public Sans Web and Source Sans Pro Web distinct from their fallback stacks when reproducing the captured documentation surface.
- Treat the search submit and side-navigation row as measured defaults, not as a source of unobserved interaction states.

### Don't

- Do not promote hover, focus, pressed, disabled, error, success, or selected values from this zero-interaction packet.
- Do not treat the documentation capture as evidence for a particular agency’s product UI.
- Do not label a fallback or system font as a verified USWDS-loaded font.
- Do not add semantic color groups that were not measured in the supplied evidence.

## 8. Responsive & Accessibility

USWDS describes its mission in terms of familiar, easy-to-use services and documents accessibility as a core concern; its typography page states WCAG 2.1 AA conformance for that component guidance. The documented system supports role-based type configuration and emphasizes legibility, readable line length, and clear labels.

The supplied capture is a 1440×900 desktop observation. It does not provide a mobile breakpoint, keyboard focus treatment, reduced-motion behavior, validation state, or assistive-technology behavior for the two tokenized components. Those details remain absent from this reference.

## 9. Implementation Notes

Use the values in the frontmatter as a narrow documentation-surface reference. The token graph maps every color, typography, spacing, radius, and component field to a supplied surface/source pair from 2026-07-13. It has no unresolved conflict entries.

Public Sans and Source Sans Pro were loaded from first-party font assets in the supplied evidence. Merriweather was declared but not visibly used; retain its official-documentation context without promoting it as a UI token. The official website policy describes GSA’s open-source approach and the public-domain/third-party-license boundary for code; consult the relevant upstream font and package licenses when redistributing assets.

## 10. Voice & Tone

USWDS presents a practical, plain, and supportive voice for public-service teams. The following are documented-content paraphrases, not fabricated quotations.

| Do | Don't |
|---|---|
| State the service task and next action plainly. | Use brand flourish that obscures a government task. |
| Prefer familiar labels and readable explanations. | Make users decode a novel interaction pattern. |
| Explain configuration boundaries directly. | Imply a default applies to every agency implementation. |

- “Use a comfortable reading size for body text.” — official typography guidance.
- “Keep websites and services up to date.” — paraphrase of the stated USWDS polestar.
- “Align, design, and maintain” — condensed from the official mission/polestar framing.

## 11. Brand Narrative

USWDS was created in 2015 by a collaborative team at 18F and the U.S. Digital Service, with an advisory board drawn from several federal agencies. It is now a GSA Technology Transformation Services product maintained by the Digital Services Division.

Its mission is to shape the future of government digital services. Its vision centers on supported digital service teams and familiar, easy-to-use digital services, linking system stewardship to people completing public tasks.

The current public material describes an active open-source community of engineers, content specialists, and designers that supports agencies and sites. No individual executive quotation was located in the first-party sources consulted, so none is attributed here.

## 12. Principles

1. **Favor familiar, easy-to-use digital services.**
   *UI implication:* Prefer clear hierarchy, readable body text, and predictable actions over novelty.
2. **Support teams in keeping services current.**
   *UI implication:* Use documented, reusable patterns and state the evidence boundary for any local adaptation.
3. **Design for legibility.**
   *UI implication:* Use a comfortable body size, readable measure, and whitespace that groups related content.
4. **Work in the open.**
   *UI implication:* Keep implementation decisions inspectable and respect the code and asset license boundary.

## 13. Personas

The following are stakeholder archetypes derived from USWDS’s stated audiences; they are not synthetic user-research findings.

- **Government digital service team:** A cross-functional team aligning, designing, and maintaining a public website or service. It needs reusable guidance that does not erase agency-specific responsibility.
- **Content specialist:** A contributor working with public information and task guidance. Readability, labels, and understandable structure are central to their work.
- **Government engineer or designer contributor:** A participant in the open-source community improving shared components and documentation. They need clear implementation and licensing boundaries.

## 14. States

No visual state token was captured for the categories below. These are documentation-level implementation considerations, not measured USWDS component values.

| Category | Evidence-safe direction |
|---|---|
| Empty | Explain the missing result or content plainly; no empty-state color or illustration is claimed. |
| Loading | Keep task context readable; no spinner, duration, or motion value is claimed. |
| Error — field validation | Provide clear labels and instructions; no error color or border value is claimed. |
| Error — service failure | State the service problem and an actionable next step; no toast or dialog geometry is claimed. |
| Success | Confirm the completed public-service task plainly; no success color is claimed. |
| Skeleton | Preserve reading structure while content is unavailable; no skeleton fill value is claimed. |
| Disabled | Explain unavailable actions where needed; no disabled visual value is claimed. |

## 15. Motion & Easing

The supplied packet has zero interaction observations and no motion or easing measurements. No duration scale, easing token, animation, transition, or reduced-motion rule is promoted. For an implementation, obtain those values from the relevant official USWDS component documentation or a separately captured interaction evidence packet before treating them as design tokens.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://designsystem.digital.gov/ · https://designsystem.digital.gov/components/overview/ · https://designsystem.digital.gov/components/accordion/ · https://designsystem.digital.gov/about/ · https://designsystem.digital.gov/components/typography/
**Tier 2 sources:** https://getdesign.md/uswds (attempted; unavailable to the search fetcher) · https://styles.refero.design/?q=uswds (attempted; unavailable to the search fetcher)
**Conflicts unresolved:** none
