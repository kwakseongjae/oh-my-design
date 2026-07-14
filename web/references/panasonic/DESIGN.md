---
id: panasonic
name: パナソニック
country: JP
category: consumer-tech
homepage: "https://holdings.panasonic/global/"
primary_color: "#0041c0"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=holdings.panasonic&sz=128"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: product-surface, url: "https://holdings.panasonic/global/", inspected: "2026-07-13" }
    - { id: about, kind: product-surface, url: "https://holdings.panasonic/global/corporate/about.html", inspected: "2026-07-13" }
    - { id: technology, kind: product-surface, url: "https://holdings.panasonic/global/corporate/technology.html", inspected: "2026-07-13" }
  sources:
    - { id: home-capture, kind: product-surface, url: "https://holdings.panasonic/global/", captured: "2026-07-13" }
    - { id: about-capture, kind: product-surface, url: "https://holdings.panasonic/global/corporate/about.html", captured: "2026-07-13" }
    - { id: technology-capture, kind: product-surface, url: "https://holdings.panasonic/global/corporate/technology.html", captured: "2026-07-13" }
    - { id: noto-license, kind: license, url: "https://github.com/googlefonts/noto-cjk/blob/main/Sans/LICENSE", captured: "2026-07-13" }
  claims:
    "tokens.colors.canvas": &body_capture { surface_id: home, source_id: home-capture, method: "computed-style; home::#page-29286b2519", captured: "2026-07-13" }
    "tokens.colors.foreground": *body_capture
    "tokens.colors.muted": &footer_capture { surface_id: home, source_id: home-capture, method: "computed-style; home::li (class: holdings-footer__sns__list__item)", captured: "2026-07-13" }
    "tokens.colors.navigation": &nav_capture { surface_id: home, source_id: home-capture, method: "computed-style; home::li (class: holdings-header__nav__list__item l2)", captured: "2026-07-13" }
    "tokens.colors.link": &link_capture { surface_id: home, source_id: home-capture, method: "computed-style; home::[data-omd-capture=115]", captured: "2026-07-13" }
    "tokens.typography.family.ui": { surface_id: home, source_id: noto-license, method: "visible computed family backed by loaded FontFace; Noto Sans SIL Open Font License", captured: "2026-07-13" }
    "tokens.typography.body.size": *body_capture
    "tokens.typography.body.weight": *body_capture
    "tokens.typography.body.lineHeight": *body_capture
    "tokens.typography.body.use": *body_capture
    "tokens.typography.navigation.size": *nav_capture
    "tokens.typography.navigation.weight": *nav_capture
    "tokens.typography.navigation.lineHeight": *nav_capture
    "tokens.typography.navigation.use": *nav_capture
    "tokens.spacing.xs": *footer_capture
    "tokens.spacing.sm": *link_capture
    "tokens.spacing.md": *body_capture
    "tokens.spacing.nav-gap": *nav_capture
    "tokens.rounded.square": *body_capture
    "tokens.rounded.cookie-control": &cookie_capture { surface_id: home, source_id: home-capture, method: "computed-style; home::[data-omd-capture=118]", captured: "2026-07-13" }
    "tokens.components.header-navigation-item.type": *nav_capture
    "tokens.components.header-navigation-item.fg": *nav_capture
    "tokens.components.header-navigation-item.radius": *nav_capture
    "tokens.components.header-navigation-item.margin": *nav_capture
    "tokens.components.header-navigation-item.size": *nav_capture
    "tokens.components.header-navigation-item.font": *nav_capture
    "tokens.components.header-navigation-item.use": *nav_capture
    "tokens.components.search-toggle.type": &search_capture { surface_id: home, source_id: home-capture, method: "computed-style; home::[data-omd-capture=10] (class: holdings-header__search__tglbtn)", captured: "2026-07-13" }
    "tokens.components.search-toggle.bg": *search_capture
    "tokens.components.search-toggle.fg": *search_capture
    "tokens.components.search-toggle.border": *search_capture
    "tokens.components.search-toggle.radius": *search_capture
    "tokens.components.search-toggle.padding": *search_capture
    "tokens.components.search-toggle.size": *search_capture
    "tokens.components.search-toggle.font": *search_capture
    "tokens.components.search-toggle.states": *search_capture
    "tokens.components.search-toggle.use": *search_capture
  conflicts: []
tokens:
  source: live-extract
  extracted: "2026-07-13"
  note: "Only the three supplied Panasonic Holdings public-web surfaces ground these tokens. Corporate narrative, official design philosophy, and declared-only font observations remain separate where the evidence does not connect them."
  colors:
    canvas: "#f2f2f2"
    foreground: "#1a1a1a"
    muted: "#666666"
    navigation: "#4d4d4d"
    link: "#0041c0"
  typography:
    family: { ui: "Noto Sans" }
    body: { size: 16, weight: 400, lineHeight: "24px", use: "Observed default body treatment on the captured Panasonic Holdings home surface" }
    navigation: { size: 15, weight: 400, lineHeight: "22.5px", use: "Observed top-level header navigation treatment across the supplied public surfaces" }
  spacing: { xs: 4, sm: 12, md: 20, nav-gap: 26 }
  rounded: { square: 0, cookie-control: 2 }
  components_harvested: true
  components:
    header-navigation-item: { type: listItem, fg: "#4d4d4d", radius: "0px", margin: "0px 26px 0px 0px", size: "167px x 23px", font: "15px / 400 / Noto Sans", use: "Public Holdings header .holdings-header__nav__list__item.l2 row" }
    search-toggle: { type: button, bg: "transparent", fg: "#1a1a1a", border: "0px", radius: "0px", padding: "0px", size: "16px x 16px", font: "16px / 400 / Noto Sans", states: "Default static baseline observed; no interactive state was captured.", use: "Public Holdings header .holdings-header__search__tglbtn button" }
---

# Design System Inspiration of パナソニック

## 1. Visual Theme & Atmosphere

Panasonic is a Japan-founded technology group whose public offer spans consumer products, business solutions, technology, and corporate initiatives. Its Holdings site communicates that breadth with a quiet, document-like public-web language: pale-gray canvas, charcoal reading text, small regular-weight Noto Sans, square geometry, and a restrained blue link treatment. That reserve fits a brand that began in 1918 under founder Konosuke Matsushita and now presents both a long manufacturing legacy and a forward-looking design practice. Panasonic Design calls its philosophy “Future Craft,” while the Group’s current environmental direction is Panasonic GREEN IMPACT. Those are verified corporate and design narratives, not evidence that the supplied corporate pages expose one shared product UI system or that a color in the capture carries an environmental meaning.

**Key Characteristics:**
- Pale-gray `#f2f2f2` canvas with `#1a1a1a` primary reading text.
- Quiet `#666666` secondary text and `#4d4d4d` top-navigation treatment.
- A limited `#0041c0` link color on the captured home surface; it is retained as a surface value, not promoted to a semantic product action.
- Loaded, visibly used `Noto Sans` across the three supplied Panasonic Holdings surfaces.
- Predominantly square `0px` geometry, with only a `2px` cookie-control radius observed as a separate exception.

## 2. Color Palette & Roles

- **Canvas** (`#f2f2f2`): home body background on the supplied public Holdings surface.
- **Foreground** (`#1a1a1a`): dominant text and border color across all supplied surfaces.
- **Muted** (`#666666`): footer/social and secondary text treatment observed on all three supplied surfaces.
- **Navigation** (`#4d4d4d`): header navigation text and border treatment on the public Holding surfaces.
- **Link** (`#0041c0`): limited home-surface link treatment observed in the supplied packet.

These roles describe measured public corporate-web values only. They do not establish a native-product palette, success/error meanings, hover/focus colors, or a universal Panasonic brand token set.

## 3. Typography Rules

### Visible public-web family

`Noto Sans` is the canonical visible UI family for this reference. The supplied packet records 509 loaded/high-confidence first-family uses across body, headings, lists, buttons, dialog content, and text, backed by loaded FontFace resources. It is a live public-web-use fact, not evidence of a proprietary Panasonic text typeface.

| Role | Size | Weight | Line Height | Evidence boundary |
|---|---:|---:|---|---|
| Body | 16px | 400 | 24px | observed default body treatment on the public home surface |
| Header navigation | 15px | 400 | 22.5px | observed top-level header navigation across the supplied surfaces |

| Evidence class | Panasonic status |
|---|---|
| **Official product-use** | No first-party statement found in this pass names a text family for Panasonic native products; none is promoted. |
| **Live computed surface-use** | `Noto Sans` is loaded and visibly used on the supplied Holdings home, about, and technology surfaces. |
| **Official distributed brand asset** | No official Panasonic text-font asset was established in this pass. |
| **Declared-only** | `swiper-icons` is declared in the packet but has zero visible use; it is an icon asset, not a text-family token. |
| **License** | Noto CJK publishes the SIL Open Font License 1.1. This is a font-license boundary, not a Panasonic brand-font claim. |
| **Unresolved** | `Noto Sands` has low-confidence computed appearances without a matching loaded FontFace; it is excluded. Native-product typography and any Panasonic-owned text typeface are absent. |

## 4. Component Stylings

### Header Navigation Item

**Default static baseline**
- Text: `#4d4d4d`
- Radius: 0px
- Margin: 0px 26px 0px 0px
- Size: 167px x 23px
- Font: 15px / 400 / Noto Sans
- Use: Public Holdings header `.holdings-header__nav__list__item.l2` row

### Search Toggle

**Default static baseline**
- Background: transparent
- Text: `#1a1a1a`
- Border: 0px
- Radius: 0px
- Padding: 0px
- Size: 16px x 16px
- Font: 16px / 400 / Noto Sans
- States: Default static baseline observed; no interactive state was captured.
- Use: Public Holdings header `.holdings-header__search__tglbtn` button

---
**Verified:** 2026-07-13 (verification v2, supplied computed-style capture plus source-bound Noto font-license review)
**Tier 1 sources:** https://holdings.panasonic/global/ https://holdings.panasonic/global/corporate/about.html https://holdings.panasonic/global/corporate/technology.html
**Tier 2 sources:** https://getdesign.md/panasonic direct detail attempt returned an internal retrieval error; https://styles.refero.design/?q=Panasonic direct search attempt returned an internal retrieval error.
**Surface split:** Holdings home, corporate about, and technology pages remain distinct public corporate-web evidence; no native product UI is inferred.
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System

The supplied surfaces repeatedly expose 4px, 12px, 20px, and 26px values. They are retained as measured public-web spacing values, not as proof of a private or native-product token system. The 26px value is specifically the observed right margin of a top-level header navigation item.

### Grid & Container

The home page is a broad corporate-information surface with compact global chrome and long editorial regions. The about and technology pages preserve this public-information rhythm. Keep navigation density and editorial content distinct rather than recasting these measurements as checkout, account, or device-control patterns.

### Shape

The dominant captured shape is square (`0px` radius). A `2px` radius appears on a cookie-control button and is retained only as that observed exception. The evidence does not support a general rounded-control or pill scale.

## 6. Depth & Elevation

No canonical shadow token is promoted. The body, navigation item, and search-toggle samples each report `box-shadow: none`; separation comes from text color, pale canvas, spacing, and document hierarchy.

## 7. Do's and Don'ts

### Do

- Use the measured pale-gray canvas with charcoal and muted-gray public-web typography.
- Keep the observed public header compact, regular-weight, and square-cornered.
- Use `Noto Sans` only where it can actually load; retain the unavailable-family boundary rather than substituting a system font as if it were the observed face.

### Don't

- Treat `#0041c0` as a verified universal Panasonic primary action, success, focus, or hover token.
- Invent search-open, hover, focus, pressed, disabled, error, or motion values from the zero-interaction packet.
- Merge corporate marketing, product, and technology evidence into a fictional shared component library.

## 8. AI Design Prompts

- “Create a Panasonic Holdings-inspired public-information page with a `#f2f2f2` canvas, `#1a1a1a` body text, 16px Noto Sans, and compact square navigation. Do not invent state styling.”
- “Design a restrained corporate header with 15px regular Noto Sans navigation in `#4d4d4d`, a 26px right-gap rhythm, and one 16px square search trigger.”
- “Make a quiet content page that uses a limited `#0041c0` inline link treatment without presenting it as a verified product CTA or brand semantic.”

## 9. Reference Assets & Evidence Boundaries

- **Catalog logo:** favicon image at `https://www.google.com/s2/favicons?domain=holdings.panasonic&sz=128`.
- **Public-web capture:** Panasonic Holdings home, corporate about, and corporate technology surfaces from the supplied 2026-07-13 packet.
- **Typography resource:** `Noto Sans` is visibly loaded; `swiper-icons` remains a declared-only icon asset; unresolved `Noto Sands` stays excluded.
- **Not included:** consumer product sites, authenticated experiences, checkout, support flows, downloaded Panasonic design guidelines, product interaction recordings, and a public official component specification.

## 10. Voice & Tone

Use a **considerate, clear, and future-facing** voice. Panasonic’s public brand statement emphasizes integrity, seeking truth, and transforming the future; its design philosophy emphasizes careful anticipation of people’s needs. These are narrative principles, not a captured UI-copy specification.

| Do | Don't |
|---|---|
| Lead with a concrete human or societal benefit. | Use technology claims as empty spectacle. |
| State commitments with care and clear scope. | Turn an unmeasured color or component into a sustainability claim. |
| Make a next step understandable in plain language. | Make unsupported promises about product performance or outcomes. |

- “A clearer way to understand the next step.” *(Illustrative voice sample, not official Panasonic copy; aligned to the brand’s stated care and clarity.)*
- “Technology shaped around the life it supports.” *(Illustrative voice sample, not official Panasonic copy; aligned to Future Craft.)*
- “Built with attention to what changes next.” *(Illustrative voice sample, not official Panasonic copy; avoids an unsupported product claim.)*

## 11. Brand Narrative

Panasonic began in 1918 when Konosuke Matsushita founded Matsushita Electric Housewares Manufacturing Works. The Group’s official history frames its purpose as contributing to social progress and people’s well-being through business, enhancing quality of life worldwide. That origin provides the context for a brand whose name has travelled from household electrical goods to a wide group of products, services, and business activities. Source: https://holdings.panasonic/global/corporate/about/history.html

The Panasonic brand was first used in 1955 for a speaker intended for export markets; today it is used for both corporate identity and products and services. Panasonic’s brand material describes its aim as building lasting customer connections with consistency, transparency, and a long-term view. Source: https://holdings.panasonic/global/corporate/brand.html

Today, Panasonic Design describes its philosophy as “Future Craft,” while Panasonic GREEN IMPACT, formulated in 2022, gives the Group a current environmental direction. The Group CCO describes Future Craft as creating with care, consideration, and attention to future generations. These are verified design and corporate narratives; they do not make the measured corporate-web colors or controls environmental semantics. Sources: https://holdings.panasonic/global/corporate/design.html and https://holdings.panasonic/global/corporate/panasonic-green-impact/mission.html

## 12. Principles

The following are application principles derived from Panasonic’s official brand, design, and business-philosophy material. They are not a published Panasonic UI component specification.

1. **Commit to integrity.** Panasonic’s brand personality begins with integrity and its business philosophy names fairness and honesty.
   *UI implication:* Prefer precise labels and sourceable claims over embellished product language.
2. **Seek the real need.** Future Craft describes discovering real issues and guiding customers toward appropriate solutions.
   *UI implication:* Make primary information and the next action easy to find; do not hide essential context behind ornamental layers.
3. **Transform thoughtfully.** Panasonic frames future-making as a responsibility to people, society, and the environment.
   *UI implication:* Explain tradeoffs and impact claims concretely rather than treating a color or icon as proof of sustainability.
4. **Work through collective wisdom.** Panasonic’s business philosophy emphasizes cooperation and participative management.
   *UI implication:* Give customers, partners, and stakeholders clear routes to the information relevant to them.

## 13. Personas

*These are evidence-bounded stakeholder archetypes drawn from Panasonic’s public group, brand, design, and sustainability material; they are not synthetic research personas or performance scores.*

### Household or individual customer

People looking for products and services need an intelligible route from a public explanation to the relevant offer. The supplied capture supports corporate navigation and public information hierarchy only, not a purchase or account flow.

### Business customer or partner

Organizations need to understand Panasonic’s technology, solution, and operating-company context. Keep business information distinct from consumer-product transactions unless a specific surface supplies direct evidence.

### Society-facing stakeholder

Employees, customers, business partners, shareholders, and wider society are repeatedly named in Panasonic’s philosophy and sustainability material. Communicate commitments with clear scope and measurable sources, not generic green styling.

## 14. States

The supplied interaction count is zero. The following are implementation guidance categories for a future Panasonic-adjacent surface, not observed Panasonic state styling; do not add their values to tokens without new evidence.

| Category | Guidance |
|---|---|
| Empty | Explain why content or results are unavailable and offer a safe next route. |
| Loading | Preserve information hierarchy without pretending an observed Panasonic skeleton exists. |
| Loading | Keep a task label stable while the requested information is being prepared. |
| Error | State the failed task plainly and provide a retry or support route. |
| Error | Separate unavailable information from a failed submission. |
| Error | Never use the limited home-surface blue as an unverified error or recovery semantic. |
| Success | Confirm the completed task with a concrete next step. |
| Skeleton | Reserve the measured header and content hierarchy without claiming a captured loading pattern. |
| Skeleton | Avoid layout shifts when public-information content is delayed. |
| Disabled | Do not infer opacity, cursor, or disabled color values from this packet. |

## 15. Motion & Easing

No duration scale, easing curve, transition, or interactive motion state was captured in the supplied evidence. Accordingly, no Panasonic motion token is published here. Future work should respect reduced-motion preferences and keep motion subordinate to the task, but must measure any timing or easing value before treating it as Panasonic-specific.
