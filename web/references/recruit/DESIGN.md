---
id: recruit
name: リクルート
country: JP
category: productivity
homepage: "https://www.recruit.co.jp/"
primary_color: "#0065bd"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=recruit.co.jp&sz=128"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: corporate-home, kind: product, url: "https://www.recruit.co.jp/", inspected: "2026-07-13" }
    - { id: productivity, kind: product, url: "https://www.recruit.co.jp/sustainability/improve-productivity/", inspected: "2026-07-13" }
    - { id: about-rss, kind: product, url: "https://www.recruit.co.jp/about_rss/", inspected: "2026-07-13" }
  sources:
    - { id: corporate-home-live, kind: product-surface, url: "https://www.recruit.co.jp/", captured: "2026-07-13" }
    - { id: productivity-live, kind: product-surface, url: "https://www.recruit.co.jp/sustainability/improve-productivity/", captured: "2026-07-13" }
    - { id: about-rss-live, kind: product-surface, url: "https://www.recruit.co.jp/about_rss/", captured: "2026-07-13" }
    - { id: group-about, kind: official-doc, url: "https://recruit-holdings.com/en/about/", captured: "2026-07-13" }
    - { id: group-history, kind: official-doc, url: "https://recruit-holdings.com/en/about/history/", captured: "2026-07-13" }
    - { id: group-values, kind: official-doc, url: "https://recruit-holdings.com/ja/about/vision-mission-values/", captured: "2026-07-13" }
    - { id: tazugane-license, kind: license, url: "https://www.monotype.com/fonts/tazugane", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.foreground": &home { surface_id: corporate-home, source_id: corporate-home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.muted": &productivity { surface_id: productivity, source_id: productivity-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.subtle": *productivity
    "tokens.colors.accent": *productivity
    "tokens.colors.canvas": *home
    "tokens.colors.surface-subtle": *productivity
    "tokens.colors.hairline": *home
    "tokens.typography.family.ui": *home
    "tokens.typography.family.spacing": *productivity
    "tokens.typography.family.latin-heading": *home
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.use": *home
    "tokens.typography.heading.size": *home
    "tokens.typography.heading.weight": *home
    "tokens.typography.heading.lineHeight": *home
    "tokens.typography.heading.use": *home
    "tokens.typography.control.size": *productivity
    "tokens.typography.control.weight": *productivity
    "tokens.typography.control.lineHeight": *productivity
    "tokens.typography.control.use": *productivity
    "tokens.spacing.sm": *home
    "tokens.spacing.md": *home
    "tokens.spacing.lg": *productivity
    "tokens.spacing.xl": *home
    "tokens.spacing.xxl": *productivity
    "tokens.rounded.none": *home
    "tokens.rounded.side-control": *productivity
    "tokens.components.primary-navigation-item.type": *productivity
    "tokens.components.primary-navigation-item.fg": *productivity
    "tokens.components.primary-navigation-item.border": *productivity
    "tokens.components.primary-navigation-item.radius": *productivity
    "tokens.components.primary-navigation-item.padding": *productivity
    "tokens.components.primary-navigation-item.font": *productivity
tokens:
  source: live-extract
  extracted: "2026-07-13"
  note: "Only selector- and surface-backed values from three public Recruit corporate surfaces are canonical. Recruit Holdings narrative, third-party font licensing, and declared-only faces remain separate evidence domains."
  colors:
    foreground: "#2d3133"
    muted: "#51656f"
    subtle: "#646d76"
    accent: "#0065bd"
    canvas: "#ffffff"
    surface-subtle: "#f5f7fb"
    hairline: "#e5e7eb"
  typography:
    family: { ui: "Tazugane Gothic", spacing: "YakuHanJP", latin-heading: "Graphik Web" }
    body: { size: 14, weight: 400, lineHeight: 1.5, use: "Repeated public corporate text and navigation samples" }
    heading: { size: 36, weight: 700, lineHeight: 1.5, use: "Observed Graphik Web h2 samples only" }
    control: { size: 14, weight: 400, lineHeight: 1.5, use: "Observed navigation item and side-control samples" }
  spacing: { sm: 10, md: 22, lg: 24, xl: 28, xxl: 32 }
  rounded: { none: 0, side-control: 4 }
  components:
    primary-navigation-item: { type: listItem, fg: "#2d3133", border: "0px #e5e7eb", radius: 0, padding: "0px", font: "14px/400/21px Tazugane Gothic" }
  components_harvested: true
---

# Design System Inspiration of リクルート

## 1. Visual Theme & Atmosphere

Recruit is a Japanese matching and productivity business whose public group materials describe services that connect individuals with business clients across work, housing, beauty, dining, travel, and SaaS operations. The company’s first offering was a university job-hunting magazine; its current business model has evolved from advertising-led media into technology-driven, two-sided matching platforms and business-support tools. On the three supplied Recruit corporate surfaces, that broad mission becomes a restrained information interface: charcoal text, pale hairlines, generous white space, and narrow blue utility accents. The visual impression is editorial and infrastructural rather than app-like—quiet navigation carries a large, content-led corporate story. The current group mission, “Opportunities for Life,” frames this evolution around faster, simpler, closer matching, but it does not authorize importing the visual language of uninspected consumer products into this corporate-surface reference.

**Key characteristics:**

- `#2d3133` is the repeated foreground across all three observed public surfaces; `#e5e7eb` is the repeated hairline.
- Muted navigation text uses `#51656f` and `#646d76`; `#0065bd` is a sparse blue side-control accent rather than a general page fill.
- The observed web typography is Tazugane Gothic with YakuHanJP spacing support; Graphik Web occurs only in a small set of h2 samples.
- The captured corporate routes are flat and mostly square-cornered: 0px radii dominate, with a 4px one-sided side-control exception.
- Marketing/corporate pages, Recruit product applications, Recruit Holdings narrative material, font licensing, and declared-only font faces are separate evidence domains.

## 2. Color Palette & Roles

### Selector-backed public corporate colors

- **Foreground** (`#2d3133`): repeated primary text and primary-navigation-item foreground on home, productivity, and about-RSS surfaces.
- **Muted** (`#51656f`): repeated secondary navigation/list text on the productivity and about-RSS surfaces.
- **Subtle** (`#646d76`): observed secondary/footer-control text across the supplied routes.
- **Accent** (`#0065bd`): observed side-control text on productivity and about-RSS; not established as a general CTA fill.
- **Canvas** (`#ffffff`): observed public white canvas.
- **Surface Subtle** (`#f5f7fb`): observed only on the side-menu switch control.
- **Hairline** (`#e5e7eb`): repeated border sample across all supplied surfaces.

No error, success, inverse, hover, focus, pressed, or disabled color role is published from this packet. `#007aff` occurs on observed disabled carousel controls, but it is not promoted as a general semantic color.

## 3. Typography Rules

### Evidence classes

| Evidence class | Family and boundary |
|---|---|
| Official product-use | No first-party Recruit statement located in this run assigns a named family to a product application. The observed pages are public corporate surfaces only. |
| Live computed surface-use | Tazugane Gothic is loaded with high confidence, 353 visible uses, and Recruit Fontplus source URLs; YakuHanJP is loaded with high confidence, 132 visible uses, from its CDN source; Graphik Web is loaded with high confidence in six observed h2 uses from Recruit-hosted files. |
| Official distributed brand asset | None established. The capture’s loaded webfont URLs show deployment, not a redistributable brand asset. |
| License context | Monotype identifies Tazugane Gothic as a Japanese humanist sans family with ten weights and licensing choices. That establishes foundry and licence context, not permission to redistribute Recruit’s loaded files. |
| Declared-only | Branding-Bold, Branding-Medium, Branding-Semibold, and swiper-icons have declarations but zero visible uses in the supplied capture, so they are not UI tokens. |

### Captured hierarchy

| Role | Family | Size | Weight | Line height | Evidence boundary |
|---|---|---:|---:|---:|---|
| Public corporate body/navigation | Tazugane Gothic | 14px | 400 | 21px | repeated visible list and button samples |
| Observed corporate text | Tazugane Gothic | 14px | 500 | 24px | repeated text samples only |
| Observed h2 | Graphik Web | 36px | 700 | 54px | six loaded, computed h2 uses only |
| Japanese spacing support | YakuHanJP | 14px | 400 | 21px | loaded visible Japanese text/list samples |

Do not substitute a system font for these loaded families, or render the declared Branding faces as though they were observed UI typography.

## 4. Component Stylings

### Public corporate navigation

**Primary Navigation Item**
- Text: `#2d3133`
- Border: 0px `#e5e7eb`
- Radius: 0px
- Padding: 0px
- Font: 14px / 400 / 21px / Tazugane Gothic
- Use: Static `li` observation with class `i-nav-lvl1-item`, selector `surface-2::li`, repeated 16 times across productivity and about-RSS surfaces.

### Observed-state boundary

The supplied evidence records `interactionCount: 0`. Its one observed state is a disabled carousel previous control: transparent background, `#007aff` text, 0px radius, 0px padding, and either `#e5e7eb` or `#007aff` as route-local border samples. It is medium confidence and is retained as raw proof only—not generalized into a canonical button token. No hover, focus, pressed, active, selected, error, dialog, toast, tab, or expanded-menu value is claimed.

### Scope boundary

The selector-backed static primary navigation item is the only canonical component. Cards and additional buttons in the packet are lower-confidence, route-local, or lack an observed state required for interactive token publication; their measured observations remain in `.verification.md`.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.recruit.co.jp/ ; https://www.recruit.co.jp/sustainability/improve-productivity/ ; https://www.recruit.co.jp/about_rss/ ; https://recruit-holdings.com/en/about/ ; https://recruit-holdings.com/en/about/history/ ; https://recruit-holdings.com/ja/about/vision-mission-values/ ; https://www.monotype.com/fonts/tazugane
**Tier 2 sources:** https://getdesign.md/recruit (attempted; no Recruit record returned by the available search result); https://styles.refero.design/?q=recruit (attempted; no Recruit record returned by the available search result)
**Conflicts unresolved:** none

## 5. Layout Principles

The packet supports a corporate information-layout pattern rather than a reusable product grid. Repeated observed spacing clusters include 10px, 22px, 24px, 28px, and 32px. The strongest selector-backed navigation sample has 0px padding; a separate primary navigation button carries 22px 0px 28px padding. Preserve those local boundaries rather than treating the clusters as a complete universal spacing scale. No mobile viewport, product workflow, authenticated dashboard, or breakpoint transition was captured.

## 6. Depth & Elevation

The three supplied surfaces are predominantly flat: the canonical navigation item has transparent background, a 0px border, and no shadow. A route-local side-menu switch has `rgba(0, 0, 0, 0.1) -1px 1px 2px 0px`, `#f5f7fb` background, and a 4px left-side radius; it is too specific to establish a shadow token or elevation system.

## 7. Do's and Don'ts

### Do

- Use the observed charcoal `#2d3133` foreground and `#e5e7eb` hairline for the captured corporate-navigation context.
- Keep the primary-navigation-item square and typographically quiet: Tazugane Gothic at 14px / 400 / 21px.
- Treat `#0065bd` and the 4px side-control geometry as local side-menu evidence, not a universal primary-action treatment.
- Preserve Tazugane Gothic, YakuHanJP, and Graphik Web according to their distinct loaded-use boundaries.

### Don't

- Don't infer Recruit consumer-product UI, mobile-app layouts, forms, or authenticated-workflow components from these corporate surfaces.
- Don't invent hover, focus, pressed, selected, error, toast, menu, or dialog values from an interaction count of zero.
- Don't promote declared-only Branding faces or swiper-icons as live UI typography.
- Don't use the side-menu switch shadow as a general elevation scale.

## 8. Responsive Behavior

Only a 1440×900 desktop viewport was supplied. The packet contains no captured breakpoint, collapsed-navigation, mobile spacing, or touch-target transition, so those fields are omitted.

## 9. Agent Prompt Guide

For a Recruit corporate-information surface, use a white `#ffffff` canvas, `#2d3133` primary text, `#e5e7eb` hairlines, and Tazugane Gothic-led Japanese typography. Keep primary navigation flat and square at the observed 14px / 400 / 21px treatment. A restrained `#0065bd` accent may appear only in a side-control context. Do not present this as a consumer product, product dashboard, or a comprehensive Recruit component library, and do not create interaction states absent from the supplied evidence.

## 10. Voice & Tone

Recruit Holdings’ official values describe creating new value, betting on individual passion, and prioritizing social value. For corporate information, that supports a practical, optimistic, and people-respecting register: explain a societal or operational purpose in plain language, then identify the relevant action or service. This characterization is based on official values and public corporate content, not on a measured product-copy corpus.

| Context | Supported direction |
|---|---|
| Corporate purpose | Connect a stated social or business outcome to the opportunity being enabled. |
| Service explanation | Name the matching or productivity problem before describing the mechanism. |
| Employee/culture material | Recognize individual curiosity and initiative without inventing a testimonial. |

Illustrative, not source copy:

- “Make the next choice easier to find.”
- “Connect people and businesses around a clearer opportunity.”
- “Start with the individual need, then remove the work around it.”

## 11. Brand Narrative

Recruit Group began in 1960 with a job-hunting magazine intended to make recruitment information broadly available to university students. Its official history describes a later shift from advertising-led media to technology-driven two-sided marketplaces, alongside matching platforms and SaaS tools that help businesses work more productively.

The current group-level mission is “Opportunities for Life,” described in the official values material as making new encounters faster, simpler, and closer. This reference does not assert that the three captured Recruit corporate pages are a visual expression of every group product; it records the public corporate evidence alongside that documented business evolution.

Official context attributes this direction to Recruit Holdings rather than an invented individual spokesperson. The official CEO message says the group seeks products and services that make life easier and more convenient; no additional quotation is created here.

## 12. Principles

1. **Make choices more findable.** Recruit’s origin and current matching-platform model both center on connecting people to relevant opportunities.
   *UI implication:* Let information hierarchy clarify options before adding decorative emphasis.
2. **Make operations simpler for businesses.** Official business materials describe cloud-based SaaS that supports productivity and profitability.
   *UI implication:* Prefer sparse corporate navigation and direct labels over dense, unexplained control systems.
3. **Bet on individual passion.** Recruit’s official values present curiosity and individual differences as sources of new value.
   *UI implication:* Use content that gives people and teams room to state their purpose; do not claim an unobserved personalisation pattern.
4. **Prioritize social value.** The group frames contribution to society as a value alongside new value creation.
   *UI implication:* Explain impact and stakeholder relevance clearly, without manufacturing impact metrics.

## 13. Personas

The official materials identify stakeholder groups, not research-backed individual personas. The following are therefore bounded stakeholder archetypes, not fictional users or behavioural claims.

- **Individuals seeking opportunities:** people using Recruit group services to compare or find options across life and work contexts. The corporate source establishes the individual-side audience, not a task flow for the captured pages.
- **Business clients:** organizations seeking better matching with customers, candidates, or operational support through platforms and SaaS. No interface preference or product workflow is inferred.
- **Recruit group employees and collaborators:** people whose curiosity, passion, and individual differences are recognized in the group’s published values. This is culture context, not a persona for an uninspected employee system.

## 14. States

The only state evidence in the supplied packet is a disabled carousel previous control. It is recorded in §4 and `.verification.md` with its measured geometry. Empty, loading, error, success, skeleton, focus, pressed, and validation states were not observed; no visual treatment is published for them.

## 15. Motion & Easing

No interaction expansion, duration, easing curve, or transition computed value was supplied. The three static desktop captures cannot establish a Recruit motion system, so no timing or easing token is published.
