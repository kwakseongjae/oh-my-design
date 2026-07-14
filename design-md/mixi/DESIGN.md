---
id: mixi
name: MIXI
country: JP
category: consumer-tech
homepage: "https://mixi.co.jp/"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=mixi.co.jp&sz=128"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: corporate-home, url: "https://mixi.co.jp/", inspected: "2026-07-13" }
    - { id: about, kind: corporate-about, url: "https://mixi.co.jp/about/", inspected: "2026-07-13" }
    - { id: conduct, kind: corporate-guidelines, url: "https://mixi.co.jp/about/conductguidelines/", inspected: "2026-07-13" }
  sources:
    - { id: home-capture, kind: product-surface, url: "https://mixi.co.jp/", captured: "2026-07-13" }
    - { id: about-capture, kind: product-surface, url: "https://mixi.co.jp/about/", captured: "2026-07-13" }
    - { id: conduct-capture, kind: product-surface, url: "https://mixi.co.jp/about/conductguidelines/", captured: "2026-07-13" }
    - { id: about-context, kind: official-doc, url: "https://mixi.co.jp/en/about/", captured: "2026-07-13" }
    - { id: history-context, kind: official-doc, url: "https://mixi.co.jp/en/company/history/", captured: "2026-07-13" }
    - { id: design-culture, kind: official-doc, url: "https://design-note.mixi.co.jp/n/n72743daaf24b", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.canvas": &home { surface_id: home, source_id: home-capture, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.ink": *home
    "tokens.colors.muted": &about { surface_id: about, source_id: about-capture, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.news-red": *home
    "tokens.typography.family.ui": *home
    "tokens.typography.body.size": *about
    "tokens.typography.body.weight": *about
    "tokens.typography.body.lineHeight": *about
    "tokens.typography.body.use": *about
    "tokens.typography.header-navigation.size": *home
    "tokens.typography.header-navigation.weight": *home
    "tokens.typography.header-navigation.lineHeight": *home
    "tokens.typography.header-navigation.use": *home
    "tokens.typography.guideline-heading.size": &conduct { surface_id: conduct, source_id: conduct-capture, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.guideline-heading.weight": *conduct
    "tokens.typography.guideline-heading.lineHeight": *conduct
    "tokens.typography.guideline-heading.use": *conduct
    "tokens.rounded.control": *home
    "tokens.rounded.news-image": *home
    "tokens.components.header-global-navigation.type": *home
    "tokens.components.header-global-navigation.bg": *home
    "tokens.components.header-global-navigation.fg": *home
    "tokens.components.header-global-navigation.radius": *home
    "tokens.components.header-global-navigation.padding": *home
    "tokens.components.header-global-navigation.height": *home
    "tokens.components.header-global-navigation.font": *home
    "tokens.components.header-global-navigation.states": *home
    "tokens.components.header-global-navigation.use": *home
    "tokens.components.news-category-label.type": *home
    "tokens.components.news-category-label.bg": *home
    "tokens.components.news-category-label.fg": *home
    "tokens.components.news-category-label.border": *home
    "tokens.components.news-category-label.radius": *home
    "tokens.components.news-category-label.padding": *home
    "tokens.components.news-category-label.height": *home
    "tokens.components.news-category-label.font": *home
    "tokens.components.news-category-label.use": *home
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Only selector-backed values from the supplied MIXI corporate-site capture are canonical tokens. Corporate history, product strategy, logo rationale, and design-culture sources provide narrative context only; no unobserved product, marketing, or interaction pattern is inferred."
  colors:
    canvas: "#ffffff"
    ink: "#000000"
    muted: "#5c5c5c"
    news-red: "#e5004d"
  typography:
    family: { ui: "Noto Sans JP" }
    body: { size: 15, weight: 400, lineHeight: 1.8, use: "Observed about and conduct-guideline body copy" }
    header-navigation: { size: 13, weight: 600, lineHeight: 1.15, use: "Observed corporate-header global-navigation control" }
    guideline-heading: { size: 35, weight: 600, lineHeight: 1.5, use: "Observed conduct-guideline section heading" }
  rounded: { control: 3, news-image: 5 }
  components_harvested: true
  components:
    header-global-navigation: { type: button, bg: "transparent", fg: "#000000", radius: "0px", padding: "0px", height: "70px", font: "13px / 600 Noto Sans JP", states: "Default baseline captured; no changed interaction state captured.", use: "Observed header global-navigation button at home::[data-omd-capture=3]." }
    news-category-label: { type: badge, bg: "transparent", fg: "#000000", border: "1px solid #000000", radius: "3px", padding: "4px 9px 5px", height: "22px", font: "11px / 600 Noto Sans JP", use: "Observed news-card category label at home::div.c-newsCard__info--category." }
---

# Design System Inspiration of MIXI

## 1. Visual Theme & Atmosphere

MIXI is a Japanese communication and entertainment company that began with the Find Job! service in 1997, launched the social network mixi in 2004, and has since expanded through services and businesses including MONSTER STRIKE, family sharing, sports, and live-event activity. Its current corporate expression is unusually deliberate for such a broad portfolio: a stark, editorial black-and-white site carries a heavy uppercase logo, while the company’s documented red and orange emotion marks give excitement and warmth separate roles. The official rationale connects the bold logo to trust, stability, and a large-scale communications presence; the two rotated underscore forms introduce emotional colour without turning every public surface into a multicolour UI.

The supplied July 13 corporate capture covers the home, about, and conduct-guidelines routes: 3 surfaces, 30 component variants, 0 interaction expansions, and coverage 71. Across those surfaces, Noto Sans JP is loaded with high confidence and 337 visible uses. The measured web surface is restrained rather than a universal product system: white/transparent fields, black text and boundaries, compact 13px/600 header controls, 15px/400 reading copy, and editorial 35px section headings. The red news label is route-local; it is retained as a measured news treatment, not promoted as a universal action colour.

MIXI’s current strategic language places emotional, meaningful connection ahead of communication volume. The company calls the present its “Third Founding” and frames a We-Time Economy around experiences shared with other people. That corporate evolution and its product/service portfolio explain the visual balance of forceful black structure and bounded emotional accents; they do not establish unobserved application controls, signed-in flows, or service-level design tokens.

## 2. Color & Surface Evidence

- **Canvas** — `#ffffff`, observed as the home logo block and white news-label foreground/border context.
- **Ink** — `#000000`, the repeated text, border, header-control, and navigation value across all three supplied corporate surfaces.
- **Muted** — `#5c5c5c`, observed on an about/conduct breadcrumb link; retain it as supporting corporate text only.
- **News red** — `#e5004d`, observed as the background of the home news-card red label. It is not evidence for a global CTA, error, or product action.

The official corporate-brand explanation describes red as excitement/adrenaline and orange as comfort/warmth. It does not publish an exact red/orange CSS token in the inspected material, so that narrative colour rationale is kept separate from the selector-backed values above.

## 3. Typography Rules

### Font evidence boundary

| Evidence class | Resolution |
|---|---|
| Official product-use | No first-party statement in the collected material establishes a MIXI product/app UI font. |
| Live computed surface-use | `Noto Sans JP` is loaded/high confidence with 337 visible uses across the three supplied corporate routes. |
| Official distributed brand asset | `mixi-bold` and `mixi-medium` are declared from MIXI-hosted MIXISANS files, but have zero visible uses in the bundle. |
| Declared-only | `mixi-bold`, `mixi-medium`, `Noto Sans`, and `swiper-icons` have no observed visible use in this capture. |
| Unresolved | The public capture does not establish a separate, browser-loadable MIXI product type family or a licence boundary for the declared MIXISANS files. |

`Noto Sans JP` is therefore the only canonical family for the captured corporate web specimen. It is not a substitute claim for MONSTER STRIKE, mixi2, or another MIXI service. The declared MIXISANS files remain useful implementation evidence, but not tokens or specimens.

| Observed role | Family | Size | Weight | Line height | Surface boundary |
|---|---|---:|---:|---:|---|
| Corporate header navigation | Noto Sans JP | 13px | 600 | 14.95px | Home/about/conduct shared header |
| Reading body | Noto Sans JP | 15px | 400 | 27px | About and conduct-guidelines samples |
| Conduct-guideline heading | Noto Sans JP | 35px | 600 | 52.5px | Conduct-guidelines route only |

## 4. Component Stylings

### Buttons

**Header global navigation**
- Background: transparent
- Text: `#000000`
- Radius: 0px
- Padding: 0px
- Height: 70px
- Font: 13px / 600 / Noto Sans JP
- States: Default baseline captured; no changed interaction state captured.
- Use: Corporate-header global-navigation button; `home::[data-omd-capture="3"]`.

### Badges

**News category label**
- Background: transparent
- Text: `#000000`
- Border: 1px solid `#000000`
- Radius: 3px
- Padding: 4px 9px 5px
- Height: 22px
- Font: 11px / 600 / Noto Sans JP
- Use: Home news-card category label; `home::div.c-newsCard__info--category`.

The bundle reports `interactionCount: 0` and no interaction records. That removes hover, focus, pressed, disabled, error, dialog, toast, and menu-state claims only; it does not remove the measured static header or news-label geometry above. Observed news-card rows are links/rows rather than evidence of button semantics and are not recast as actions.

---
**Verified:** 2026-07-13
**Tier 1 sources:** `https://mixi.co.jp/` (captured corporate home), `https://mixi.co.jp/about/` (captured corporate about), `https://mixi.co.jp/about/conductguidelines/` (captured conduct guidelines), `https://mixi.co.jp/en/about/` (official company and brand context), `https://mixi.co.jp/en/company/history/` (official history)
**Tier 2 sources:** `https://getdesign.md/mixi` (attempted; built-in web open returned no usable record), `https://styles.refero.design/?q=mixi` (attempted; built-in web open returned no usable record)
**Conflicts unresolved:** none

## 5. Layout & Responsive Evidence

The supplied desktop capture records a fixed, repeated 70px corporate header and broad editorial content widths. It also records 390px-wide home news-card rows, but does not establish a breakpoint system, mobile composition, grid scale, or touch-target policy. Preserve only the route-local measured shapes: 70px header controls, 390px news rows, 22px category labels, and 5px news-image rounding.

## 6. Depth & Elevation

No reusable box-shadow token was established. The captured corporate surfaces mostly use transparent fields, black rules, image framing, and whitespace rather than a documented elevation ladder. Do not create card, dialog, popover, or modal shadow values from static page structure.

## 7. Do's and Don'ts

### Do

- Keep the captured corporate specimen sober: white/transparent surfaces, black structure, and generous editorial reading space.
- Use `Noto Sans JP` only for the verified corporate-web specimen, with the observed 15px/400 body and 13px/600 header control roles where appropriate.
- Keep `#e5004d` bounded to its observed news-label treatment.
- Preserve the 70px header-navigation baseline and the 22px/3px news category label as separate measured components.

### Don't

- Do not substitute declared MIXISANS files, Noto Sans fallbacks, or a system font for a claimed MIXI product font.
- Do not turn corporate red/orange brand narrative into unmeasured product action, error, success, or hover tokens.
- Do not map a captured news link/row to a button; only the captured header elements with button tags are button evidence.
- Do not invent responsive breakpoints, interaction states, dialogs, toasts, inputs, or a generic component library from this corporate capture.

## 8. Responsive Behavior

Only the supplied 1440×900 desktop surface captures are available. No mobile viewport, breakpoint, focus management, menu expansion, or responsive-state observation is recorded.

## 9. Agent Prompt Guide

- Recreate the observed corporate header navigation as a transparent, 70px-high, square-cornered black-text control using Noto Sans JP 13px/600; it is a static default specimen, not a state model.
- Recreate the observed home news category label as transparent black text with a 1px black border, 3px radius, 4px 9px 5px padding, 22px height, and Noto Sans JP 11px/600.
- Use white/transparent corporate surfaces with black typography and boundaries. Treat `#e5004d` as a home-news label only.
- Do not generate a product UI, a brand-font specimen, or any interaction state without new evidence for that exact surface and selector.

## 10. Voice & Tone

The official corporate material is purposeful, emotionally literate, and concrete about connection: it values joy, warmth, surprise, and meaningful ties rather than connection as a raw volume metric. Its values pair a bold invitation to innovate with passion and integrity. This is a corporate communication register, not a blanket claim about every consumer service’s microcopy.

| Do | Don't |
|---|---|
| Name the human connection or moment the work enables. | Reduce the message to connection volume, metrics, or vague scale. |
| Be direct about a surprising or enjoyable outcome. | Manufacture excitement with unsupported urgency or claims. |
| Keep a sincere, grounded commitment when describing impact. | Treat red/orange emotion marks as permission for indiscriminate visual noise. |

Illustrative, not verbatim product copy: “Make a moment worth sharing.” “Leave room for a pleasant surprise.” “Build the connection, then let the joy travel.”

## 11. Brand Narrative

MIXI’s official history starts with the 1997 Find Job! service and records the 2004 launch of the mixi social network. The company later added services and businesses spanning mobile entertainment, family sharing, sports, and events; its name changed to MIXI, Inc. in 2022. This is a company narrative, not evidence that those individual products share one web component system.

The current corporate articulation centers on enriching communication and creating opportunities for meaningful connection. Its brand explanation says the redesigned heavy uppercase logo is intended to express trust, stability, ubiquity, and a leading presence, while the two red/orange underscore forms carry excitement and warmth. The current “Third Founding”/We-Time framing extends that connection mission toward experiences people enjoy together. These statements explain the corporate identity and direction; they do not fill in missing service UI facts.

## 12. Principles

1. **Make connection meaningful, not merely frequent.** MIXI’s purpose explicitly favors deeper, richer connection. *UI implication:* describe the value of a communication moment without fabricating engagement mechanics or product states.
2. **Put user surprise before novelty for its own sake.** MIXI Way asks whether an outcome is a pleasant surprise. *UI implication:* make the next step clear and useful; do not add unobserved animation or urgency patterns to simulate surprise.
3. **Carry emotion with structural restraint.** The corporate site’s black-and-white framework bounds its observed red news label, while official logo rationale assigns emotional meaning to red/orange. *UI implication:* keep any measured accent scoped to its source context.
4. **Be bold, passionate, and sincere.** The official values name innovation, passion, and integrity. *UI implication:* use a confident hierarchy and plain, accountable language rather than decorative complexity.

## 13. Stakeholder Groups

*Source-grounded groups, not fictional personas.*

- **People sharing communication and entertainment with friends or family:** the corporate mission explicitly identifies meaningful connection and shared emotion as the aim.
- **Service audiences across MIXI’s portfolio:** the company history identifies social networking, mobile entertainment, family sharing, sports, and event-related expansion; individual service UI remains outside this capture.
- **MIXI designers and collaborators:** the official MIXI DESIGN activity report describes a design community organized around contents, communication, and community, plus knowledge sharing and external exchange. It is culture context, not a public component specification.

## 14. States

No reusable empty, loading, error, success, disabled, validation, skeleton, or interactive-state treatment is recorded. The supplied bundle has zero interaction records, so state design is omitted rather than synthesized.

## 15. Motion & Easing

No reusable duration, easing, transition, or motion rule is recorded in the supplied evidence. Static corporate elements and a brand narrative about emotion do not establish a motion contract.
