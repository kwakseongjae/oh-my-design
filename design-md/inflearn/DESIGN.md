---
id: inflearn
name: Inflearn
country: KR
category: education
homepage: "https://www.inflearn.com"
primary_color: "#00c471"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=inflearn.com&sz=256"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: product-home, kind: product-home, url: "https://www.inflearn.com/", inspected: "2026-07-13" }
    - { id: product-courses, kind: product-catalog, url: "https://www.inflearn.com/courses", inspected: "2026-07-13" }
    - { id: engineering-documentation, kind: documentation-chrome, url: "https://tech.inflab.com/20260305-new-header/", inspected: "2026-07-13" }
  sources:
    - { id: home-capture, kind: product-surface, url: "https://www.inflearn.com/", captured: "2026-07-13" }
    - { id: courses-capture, kind: product-surface, url: "https://www.inflearn.com/courses", captured: "2026-07-13" }
    - { id: engineering-context, kind: official-doc, url: "https://tech.inflab.com/20260305-new-header/", captured: "2026-07-13" }
    - { id: design-system-context, kind: official-doc, url: "https://tech.inflab.com/20240224-design-system/", captured: "2026-07-13" }
    - { id: company-context, kind: official-doc, url: "https://story.inflab.com/main/%ED%9A%8C%EC%82%AC%EC%86%8C%EA%B0%9C/", captured: "2026-07-13" }
    - { id: font-design, kind: official-doc, url: "https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md", captured: "2026-07-13" }
    - { id: font-license, kind: license, url: "https://github.com/orioncactus/pretendard/blob/main/LICENSE", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.canvas": &product { surface_id: product-home, source_id: home-capture, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.ink": *product
    "tokens.colors.text": *product
    "tokens.colors.neutral": *product
    "tokens.colors.subtle": *product
    "tokens.colors.hairline": *product
    "tokens.colors.primary": *product
    "tokens.colors.primary-hover": *product
    "tokens.colors.info-surface": *product
    "tokens.colors.info": *product
    "tokens.colors.cyan-tag-surface": *product
    "tokens.colors.cyan-tag": *product
    "tokens.typography.family.ui": *product
    "tokens.typography.product-body.size": *product
    "tokens.typography.product-body.weight": *product
    "tokens.typography.product-body.lineHeight": *product
    "tokens.typography.product-body.use": *product
    "tokens.typography.product-control.size": *product
    "tokens.typography.product-control.weight": *product
    "tokens.typography.product-control.lineHeight": *product
    "tokens.typography.product-control.use": *product
    "tokens.typography.course-badge.size": *product
    "tokens.typography.course-badge.weight": *product
    "tokens.typography.course-badge.lineHeight": *product
    "tokens.typography.course-badge.use": *product
    "tokens.spacing.xs": *product
    "tokens.spacing.sm": *product
    "tokens.spacing.md": *product
    "tokens.spacing.lg": *product
    "tokens.rounded.badge": *product
    "tokens.rounded.input": *product
    "tokens.rounded.pill": *product
    "tokens.rounded.full": *product
    "tokens.shadow.flat": *product
    "tokens.components.product-search-submit.type": *product
    "tokens.components.product-search-submit.bg": *product
    "tokens.components.product-search-submit.fg": *product
    "tokens.components.product-search-submit.radius": *product
    "tokens.components.product-search-submit.font": *product
    "tokens.components.product-search-submit.states": *product
    "tokens.components.product-search-submit.use": *product
    "tokens.components.product-nav-action.type": *product
    "tokens.components.product-nav-action.bg": *product
    "tokens.components.product-nav-action.fg": *product
    "tokens.components.product-nav-action.radius": *product
    "tokens.components.product-nav-action.padding": *product
    "tokens.components.product-nav-action.font": *product
    "tokens.components.product-nav-action.states": *product
    "tokens.components.product-nav-action.use": *product
    "tokens.components.product-course-card.type": *product
    "tokens.components.product-course-card.radius": *product
    "tokens.components.product-course-card.font": *product
    "tokens.components.product-course-card.states": *product
    "tokens.components.product-course-card.use": *product
    "tokens.components.product-content-tab.type": *product
    "tokens.components.product-content-tab.bg": *product
    "tokens.components.product-content-tab.fg": *product
    "tokens.components.product-content-tab.radius": *product
    "tokens.components.product-content-tab.padding": *product
    "tokens.components.product-content-tab.font": *product
    "tokens.components.product-content-tab.states": *product
    "tokens.components.product-content-tab.use": *product
    "tokens.components.product-dialog-overlay.type": *product
    "tokens.components.product-dialog-overlay.bg": *product
    "tokens.components.product-dialog-overlay.font": *product
    "tokens.components.product-dialog-overlay.states": *product
    "tokens.components.product-dialog-overlay.use": *product
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Selector-backed tokens are limited to the supplied Inflearn product-home and course-catalog capture. The Inflab engineering article is documentation chrome and official context, not a product-token source."
  colors:
    canvas: "#ffffff"
    ink: "#212529"
    text: "#495057"
    neutral: "#f8f9fa"
    subtle: "#f1f3f5"
    hairline: "#dee2e6"
    primary: "#00c471"
    primary-hover: "#00a760"
    info-surface: "#e7f5ff"
    info: "#228be6"
    cyan-tag-surface: "#e3fafc"
    cyan-tag: "#1098ad"
  typography:
    family: { ui: "Pretendard" }
    product-body: { size: 16, weight: 400, lineHeight: 1.50, use: "Repeated product-home and course-catalog text/card sample" }
    product-control: { size: 16, weight: 400, lineHeight: 1.00, use: "Product GNB and control sample" }
    course-badge: { size: 11, weight: 700, lineHeight: 1.64, use: "Course badge wrapper on product home and catalog" }
  spacing: { xs: 4, sm: 8, md: 10, lg: 16 }
  rounded: { badge: 4, input: 8, pill: 32, full: 999 }
  shadow:
    flat: "none"
  components:
    product-search-submit: { type: button, bg: "#00c471", fg: "#ffffff", radius: "999px", font: "16px / 400 Pretendard", states: "hover observed: #00a760", use: "Product GNB search submit; home::[data-omd-capture=8]" }
    product-nav-action: { type: button, bg: "#f8f9fa", fg: "#495057", radius: "32px", padding: "0px 22px", font: "16px / 600 Pretendard", states: "hover observed: rgba(241,243,245,0.65)", use: "Product GNB navigation action; home::[data-omd-capture=12]" }
    product-course-card: { type: card, radius: "8px", font: "16px / 400 Pretendard", states: "default only; no card interaction state captured", use: "Product course article shell; home::article" }
    product-content-tab: { type: tab, bg: "#25262b", fg: "#ffffff", radius: "9999px", padding: "10px 16px", font: "14px / 700 system sans-serif", states: "selected observed", use: "Product-home selected content tab; home::[data-omd-capture=19]" }
    product-dialog-overlay: { type: dialog, bg: "rgba(0,0,0,0.6)", font: "16px / 400 Pretendard", states: "dialog-open observed", use: "Product dialog backdrop; home::[data-omd-interaction-capture=dialog-2-8]" }
  components_harvested: true
---

# Design System Inspiration of Inflearn (인프런)

## 1. Visual Theme & Atmosphere

Inflearn is Inflab’s career-learning platform: its official company introduction describes a space where people can learn and share knowledge without economic or time constraints, while its public product routes organize that promise as a dense course catalogue. The supplied home and course-list captures use a white field, dark neutral text, a precise green action color, compact rounded navigation controls, and image-led course articles. The expression is practical rather than decorative: the emphasis is on finding, comparing, and entering learning content.

The current product shell should not be confused with every Inflearn-owned page. The supplied third route is an Inflab engineering article with separate documentation chrome; it is recorded as first-party context only. Inflab’s own engineering writing says the service has accumulated multiple systems and that its newer shared GNB serves courses, challenges, mentoring, clips, and community across multiple front-end environments. That is useful evidence for the header’s product importance, not authorization to turn documentation styles into product tokens.

## 2. Color Palette & Roles

### Color tokens

- `#FFFFFF` — observed product canvas and control background.
- `#212529` — repeatedly observed product ink.
- `#495057` — repeatedly observed product control and secondary text.
- `#F8F9FA` — observed GNB action background and product tab hover background.
- `#F1F3F5` — observed hover/disabled neutral treatment; the source-specific alpha is retained in the component record below.
- `#DEE2E6` — observed product control border.
- `#00C471` — observed product GNB search-submit and selected control background.
- `#00A760` — observed hover treatment for the GNB search-submit and an observed course-badge background.
- `#E7F5FF` / `#228BE6` — observed blue course-badge wrapper/text pair.
- `#E3FAFC` / `#1098AD` — observed cyan course-badge wrapper/text pair.

These values are product-route observations, not a claim that every public Inflab site has the same palette.

## 3. Typography & Layout Evidence

### Typography evidence classes

- **Live product computed use:** `Pretendard` is the sole promoted UI family. It has 1,278 visible computed uses across the home and course catalog, and the supplied collector reports a loaded FontFaceSet match with high confidence. The artifact supplies no font-file URL for that loaded face, so the web-source location remains unresolved rather than invented.
- **System fallbacks:** `sans-serif` is a high-confidence system resolution in 153 observed product elements; `Arial` and `Roboto` each occur once in the full bundle. They remain system evidence, not Inflearn brand families.
- **Declared-only assets:** Fira Code, Font Awesome 6 Pro, KaTeX faces, and Source Serif 4 have zero visible use in this capture. Fira Code, Font Awesome, and Source Serif 4 include declared source URLs; the KaTeX declarations do not. None are promoted to UI tokens or rendered as substitutes.
- **Official distribution and licence boundary:** Pretendard’s upstream README documents static and variable webfont distribution, while its upstream project publishes the font software under SIL Open Font License 1.1. These identify the asset and licence only; the product-use claim comes from computed use plus the loaded FontFaceSet observation.

- The captured product surfaces expose repeated 4px, 8px, 10px, and 16px spacing values. They form the conservative observed spacing set in frontmatter.
- The product home and catalog both include course `article` shells at 8px radius with zero padding and no shadow. The capture does not establish a universal course-grid column count, image ratio, responsive breakpoint, course-detail layout, or checkout layout.
- Product navigation actions are route-level controls, not evidence for a universal page container or an application-wide 65px header rule.

## 4. Components

### Product GNB search submit

**Default**
- Background: `#00C471`
- Text: `#FFFFFF`
- Radius: `999px`
- Font: `16px / 400 Pretendard`
- Hover: background `#00A760`
- Use: Product GNB search-submit; `home::[data-omd-capture="8"]`. Hover provenance is `home::[data-omd-capture="8"]::state-hover` and is also present on the catalog surface.

### Product GNB navigation action

**Default**
- Background: `#F8F9FA`
- Text: `#495057`
- Radius: `32px`
- Padding: `0px 22px`
- Font: `16px / 600 Pretendard`
- Hover: background `rgba(241, 243, 245, 0.65)`
- Use: Product GNB navigation action; `home::[data-omd-capture="12"]`. The observed hover selector is `home::[data-omd-capture="12"]::state-hover`.

### Product course card

**Default**
- Radius: `8px`
- Padding: `0px`
- Font: `16px / 400 Pretendard`
- Shadow: none
- Use: Product course article shell on home and course catalog; `home::article` and `surface-2::article`.

### Product content tab

**Selected**
- Background: `#25262B`
- Text: `#FFFFFF`
- Radius: `9999px`
- Padding: `10px 16px`
- Font: `14px / 700 system sans-serif`
- Use: Selected product-home content tab; `home::[data-omd-capture="19"]` and interaction capture `home::[data-omd-interaction-capture="tab-3-3"]`.

**Hover**
- Background: `#F8F9FA`
- Text: `#212529`
- Radius: `9999px`
- Padding: `10px 16px`
- Font: `14px / 400 system sans-serif`
- Use: Product-home content-tab hover sample; `home::[data-omd-capture="20"]::state-hover`.

### Product dialog overlay

**Open**
- Background: `rgba(0, 0, 0, 0.6)`
- Font: `16px / 400 Pretendard`
- Use: Dialog backdrop expanded by the collector on home and catalog; `home::[data-omd-interaction-capture="dialog-2-8"]`.

The supplied bundle records menu, dialog, and tab interactions (nine interaction expansions in total). Only the selectors and states listed above are reusable claims. No checkout, payment, error, toast, skeleton, course-card-hover, or responsive variant is inferred.

---

**Verified:** 2026-07-13
**Tier 1 sources:** `https://www.inflearn.com/` (product home), `https://www.inflearn.com/courses` (product catalog), `https://tech.inflab.com/20260305-new-header/` (first-party engineering documentation/context), `https://tech.inflab.com/20240224-design-system/` (first-party design-system context), `https://story.inflab.com/main/%ED%9A%8C%EC%82%AC%EC%86%8C%EA%B0%9C/` (first-party company context), `https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md` (upstream font distribution), and `https://github.com/orioncactus/pretendard/blob/main/LICENSE` (upstream font licence boundary)
**Tier 2 sources:** `https://getdesign.md/inflearn` (attempted; built-in web open returned an internal safe-open failure), `https://styles.refero.design/?q=inflearn` (attempted; built-in web open returned an internal safe-open failure); no usable Inflearn record was returned by the required cross-check attempts.
**Conflicts unresolved:** none

Legacy claims about a universal Mantine token sheet, a named 65px sticky GNB contract, course-detail/cart/payment CTAs, input outlines, footer geometry, card motion, empty/error/success states, and unmeasured course-grid rules were removed because the supplied 2026 evidence does not establish them.

## 5. Iconography & Imagery

The product surfaces include course articles and standard controls, but the supplied evidence does not identify a named icon library, SVG stroke rule, image aspect-ratio contract, or universal thumbnail treatment. Course imagery and any inline icon implementation remain route content rather than promoted system tokens.

## 6. Shape & Elevation

- Product evidence includes 4px badge wrappers, 8px course-card/input shells, 32px GNB actions, and `999px`/`9999px` pill controls. These are distinct observed shapes, not a mandate to round unrelated interfaces.
- The selector-backed GNB controls, search submit, course article, and dialog backdrop have `box-shadow: none`. A separate course-catalog control has a local shadow observation, but the bundle does not establish a reusable elevation scale.

## 7. Content & Voice

Inflab’s official company page frames the service around career learning, knowledge sharing, fair access to growth opportunities, transparent course/review information, and content rather than inflated marketing. Treat this as brand context: it supports clear, learner-respecting copy but does not establish fictional UI slogans, exact CTA wording, or a product-wide Korean grammatical style guide.

### Do

- Keep learner and knowledge-sharing context tied to the official company narrative.
- Preserve source-domain boundaries when referring to product, documentation, or company-story content.

### Don't

- Turn a company mission statement into an unobserved product microcopy template.
- Present declared-only or system fonts as loaded Inflearn UI fonts.

## 8. Accessibility & States

- The captured search-submit is white text on `#00C471`; the source records its observed hover background as `#00A760`.
- The captured dialog backdrop is `rgba(0, 0, 0, 0.6)`. The bundle confirms that a dialog-open state exists but does not provide a general dialog-panel accessibility specification.
- The home capture includes one disabled button with `#F1F3F5` background, `#ADB5BD` text, a `#DEE2E6` border, and 32px radius. It is a selector-specific observation, not a universal disabled-state token because the catalog’s disabled sample differs.
- No accessibility conformance, focus-visible outline, keyboard order, error message, loading, empty, success, or responsive behavior is claimed beyond the recorded interaction states.

## 9. Source Boundaries

The product home and course catalog are the only sources of product tokens and component claims in this reference. The Inflab engineering article is documentation chrome and describes the 2025 GNB redesign, its MFE/App Shell context, and the product’s core service navigation; it must not populate product CSS tokens. The company introduction supplies factual narrative about career learning and knowledge sharing. No separate public marketing surface was captured, and no login, course-detail, cart, payment, or learning-room flow was treated as observed.

## 10. Voice & Tone

The first-party company introduction addresses people who build careers and dreams, describes expert knowledge sharing, and frames Inflearn as a career-learning platform. It also explicitly values transparent course information, opportunities to learn despite cost or time constraints, and good content over inflated marketing. Together those statements support a grounded, learner-respecting brand voice: clarity about what is being learned and who is sharing the knowledge is more defensible than pressure or spectacle.

They are not a published UI copy manual. The product capture confirms controls and course content but does not prove an exact CTA vocabulary, a required Korean sentence ending, a particular error-message formulation, or a campaign-copy rule. Preserve the company’s stated commitments as context and leave specific product strings unclaimed unless a product surface directly supplies them.

## 11. Brand Narrative

Inflab’s own introduction describes Inflearn as a career-learning platform for people who pursue work and dreams. It says the service aims to let people learn and share knowledge without being prevented by economic or time constraints, and it presents knowledge sharers with substantial professional experience as a source of expertise. The company also frames transparent course information and a long-term growth ecosystem as part of its purpose.

Its engineering writing gives that public product a current operational context. A 2024 design-system retrospective says historical systems coexisted, while the 2026 GNB account explains how a new shared header made the core services—courses, challenges, mentoring, clips, and community—more legible across multiple front-end environments. This is an evolution in product infrastructure and navigation, not evidence that every public surface shares a single stylesheet or component library.

The reference therefore keeps the official service and evolution story, but does not invent founder history, customer metrics, a uniform visual system, or a quantified design outcome beyond what those sources state.

## 12. Principles

1. **Career learning and knowledge sharing.** The company describes a platform for people to learn and share expertise. *UI implication:* do not replace that service context with unsupported commerce or credential claims.
2. **Transparent information.** The company says it publishes learner counts and course evaluations without selection or manipulation. *UI implication:* where such data is presented, distinguish actual product evidence from marketing interpretation.
3. **Opportunity through accessibility.** The company describes reducing economic and time barriers to learning. *UI implication:* do not turn that narrative into unobserved pricing, promotion, or eligibility UI.

## 13. Stakeholder Groups

The official company page identifies learners seeking career development and experts who share knowledge. The product’s current GNB article additionally names courses, challenges, mentoring, clips, and community as core services. These are stakeholder/service facts, not synthetic personas; no age, task frequency, conversion behavior, or preference is inferred.

## 14. Observed Interaction States

| State | Selector-backed observation | Boundary |
|---|---|---|
| Hover | GNB search submit changes to `#00A760`; GNB action has `rgba(241,243,245,0.65)` background. | Only the listed selectors are promoted. |
| Selected | Product content tab has `#25262B` background, white 14px/700 text, and full pill radius. | Product-home tab only. |
| Menu open | Collector expanded a product menu; a 14px Pretendard option at 8px radius and `10px 12px` padding was recorded. | No general menu token is inferred. |
| Dialog open | Collector recorded a `rgba(0,0,0,0.6)` product backdrop. | No dialog-panel, validation, or checkout state is inferred. |
| Disabled | Home selector records a neutral 32px button; catalog selector records a different 8px control. | Keep them selector-local; do not create a universal token. |

## 15. Motion & Easing

No duration, easing curve, card-scale, skeleton animation, page transition, or reduced-motion rule was captured in the supplied product evidence. The first-party GNB article discusses a shift from reflow-based scroll motion to composite-based scroll motion for the shared header, but it does not supply reusable animation tokens. No motion token is therefore promoted.
