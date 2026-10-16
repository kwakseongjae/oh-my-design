---
name: Inflearn
colors:
  canvas: '#ffffff'
  ink: '#212529'
  text: '#495057'
  neutral: '#f8f9fa'
  subtle: '#f1f3f5'
  hairline: '#dee2e6'
  primary: '#00c471'
  primary-hover: '#00a760'
  info-surface: '#e7f5ff'
  info: '#228be6'
  cyan-tag-surface: '#e3fafc'
  cyan-tag: '#1098ad'
typography:
  product-body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Repeated product-home and course-catalog text/card sample
  product-control:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1
    use: Product GNB and control sample
  course-badge:
    fontSize: 11px
    fontWeight: 700
    lineHeight: 1.64
    use: Course badge wrapper on product home and catalog
rounded:
  badge: 4px
  input: 8px
  pill: 32px
  full: 999px
spacing:
  xs: 4
  sm: 8
  md: 10
  lg: 16
components:
  product-search-submit:
    type: button
    backgroundColor: '#00c471'
    textColor: '#ffffff'
    rounded: 999px
    hover: 'bg #00a760'
    pressed: 'bg #00a760'
    focus: '#212529'
    disabled: '#f1f3f5'
    states: 'rest on the GNB search submit on both routes (capture 8); hover and pressed sampled on both, all four frames recording bg #00a760; the focus and disabled values come from a 2026-09-16 live CSS inspection (claim method live-css-inspect) that does not name the property, and the bundle holds no focus or disabled frame on this element, so it cannot confirm them'
    use: 'Product GNB search submit; home::[data-omd-capture=8]; icon-only (no text node), so fg is the computed colour its glyph can inherit. Corrected 2026-09-30: the July font leaf (16px / 400 Pretendard) was the inherited page type on an element without text and was removed'
    height: 42px
    padding: 0px
    typography: 16px / 400
  product-nav-action:
    type: button
    backgroundColor: '#f8f9fa'
    textColor: '#495057'
    rounded: 32px
    padding: 0px 22px
    typography: 16px / 600 Pretendard
    hover: bg rgba(241, 243, 245, 0.65)
    pressed: bg rgba(241, 243, 245, 0.65)
    disabled: '#f1f3f5'
    states: rest on the GNB button on both routes (capture 12); hover and pressed sampled on it and on the two icon buttons beside it (capture 10, 11), all twelve frames recording bg rgba(241, 243, 245, 0.65); the disabled value comes from the 2026-09-16 live CSS inspection, and the bundle holds no disabled frame on this element; focus not declared
    use: Product GNB navigation action; home::[data-omd-capture=12]
  product-course-card:
    type: card
    rounded: 8px
    states: default only; no card interaction state captured
    use: 'Product course article shell; home::article (article.mantine-Card-root, 262 x 307 on home). Corrected 2026-09-30: the July font leaf (16px / 400 Pretendard) was the inherited page type on a container and was removed'
  product-content-tab:
    type: tab
    backgroundColor: transparent
    textColor: '#212529'
    rounded: 9999px
    padding: 10px 16px
    typography: 14px / 400 / 14px system sans-serif
    selected: 'bg #25262b, fg #ffffff, 14px / 700'
    hover: 'bg #f8f9fa'
    pressed: 'bg #f8f9fa'
    states: 'rest on the tabs with aria-selected "false" (capture 20-24); the tab with aria-selected "true" (capture 19, interaction capture tab-3-0) is recorded as selected; hover and pressed sampled on four rest tabs (capture 20-23), all eight frames recording bg #f8f9fa; focus not declared. Corrected 2026-09-30: the July record stored the selected fill as the rest value'
    use: Product-home content tab (button, role tab) at home::[data-omd-capture=20]
  product-dialog-overlay:
    type: dialog
    backgroundColor: rgba(0,0,0,0.6)
    states: dialog-open observed
    use: 'Product dialog backdrop; home::[data-omd-interaction-capture=dialog-2-8], 1440 x 900 behind the panel listed as product-modal. Corrected 2026-09-30: the July font leaf (16px / 400 Pretendard) was the inherited page type on an element with no text and was removed'
  gnb-service-link:
    type: tab
    backgroundColor: transparent
    rounded: 0px
    padding: 6px 10px
    height: 44px
    hover: 'bg #f8f9fa, radius 50px'
    pressed: 'bg #f8f9fa, radius 50px'
    states: 'rest on five links on both routes (capture 1-5); hover and pressed sampled on all ten, all twenty frames recording bg #f8f9fa with a 50px radius; focus not declared'
    use: 'GNB service link (a, Mantine Anchor) at home::[data-omd-capture="1"], 84 x 44; the link element''s own colour is #00a760 and its type equals the page text, and its label sits in a child the capture did not sample, so no label style is claimed'
  gnb-menu-trigger:
    type: button
    backgroundColor: transparent
    border: 1px transparent
    rounded: 32px
    size: 61px x 42px
    hover: 'bg #f8f9fa'
    pressed: 'bg #f8f9fa'
    states: 'rest on both routes (capture 6); hover and pressed sampled on both, all four frames recording bg #f8f9fa; activating it opened the menu listed as gnb-menu (menu-open, expanded); focus not declared'
    use: GNB menu button (aria-haspopup menu) at home::[data-omd-capture="6"]; icon-only, so no label colour is claimed
  gnb-text-button:
    type: button
    backgroundColor: transparent
    textColor: '#495057'
    border: 1px transparent
    rounded: 32px
    padding: 0px 12px
    height: 42px
    typography: 16px / 600 / 16px Pretendard
    hover: 'bg #f8f9fa'
    pressed: 'bg #f8f9fa'
    states: 'rest on both routes (capture 9); hover and pressed sampled on both, all four frames recording bg #f8f9fa; focus not declared'
    use: GNB text button (a, Mantine Button) at home::[data-omd-capture="9"], 81 x 42
  gnb-icon-trigger:
    type: button
    backgroundColor: '#f8f9fa'
    border: 1px transparent
    rounded: 32px
    size: 42px x 42px
    hover: bg rgba(241, 243, 245, 0.65)
    pressed: bg rgba(241, 243, 245, 0.65)
    states: rest on two icon buttons per route (capture 10, 11); hover and pressed sampled on all four, all eight frames recording bg rgba(241, 243, 245, 0.65), the value the GNB navigation action takes; each opened a popover or modal (dialog-open); focus not declared
    use: GNB icon button (aria-haspopup dialog) at home::[data-omd-capture="10"]; icon-only, so no label colour is claimed
  gnb-search-input:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#000000'
    rounded: 8px
    size: 377px x 36px
    typography: 16px / 400 / 34px Pretendard
    states: default captured on both routes; its pressed and focus frames change only the colour of a 0px border, and the values drift between routes, so no state is declared
    use: GNB search input at home::[data-omd-capture="7"]; border width 0px, so no field border is claimed
  gnb-menu:
    type: card
    backgroundColor: '#ffffff'
    border: '1px #e9ecef'
    rounded: 8px
    padding: 4px
    size: 110px x 256px
    shadow: rgba(0, 0, 0, 0.05) 0px 1px 3px 0px, rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px
    states: captured open after the GNB menu button was activated on both routes (menu-open, expanded)
    use: 'GNB menu dropdown (div, role menu) at home::[data-omd-interaction-capture="menu-0-0"]; its #212529 16px / 400 is the inherited page text on a container, so no label style is claimed'
  gnb-menu-item:
    type: button
    backgroundColor: transparent
    textColor: '#000000'
    rounded: 8px
    padding: 10px 12px
    height: 41px
    typography: 14px / 400 / 16.1px Pretendard
    states: six items captured in the open menu; no state frame
    use: GNB menu item (button, role menuitem) at home::[data-omd-interaction-capture="menu-0-1"], 100 x 41
  gnb-popover:
    type: dialog
    backgroundColor: '#ffffff'
    border: '1px #e9ecef'
    rounded: 16px
    padding: 12px 10px
    size: 253px x 248px
    shadow: rgba(0, 0, 0, 0.05) 0px 1px 3px 0px, rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px
    states: captured open (dialog-open) after a GNB icon button was activated
    use: GNB popover (div, role dialog) at home::[data-omd-interaction-capture="dialog-1-0"]
  product-modal:
    type: dialog
    backgroundColor: '#ffffff'
    rounded: 16px
    size: 320px x 263px
    shadow: rgba(0, 0, 0, 0.05) 0px 1px 3px 0px, rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px
    states: 'captured open (dialog-open) over the overlay listed as product-dialog-overlay; it holds a close button (dialog-2-2, 31 x 31, 8px radius) and a radio group whose first radio records a #00c471 fill and border against #ffffff with 1px #ced4da on the others; no aria-checked is recorded, so no checked state is declared'
    use: 'Modal panel (section, role dialog) at home::[data-omd-interaction-capture="dialog-2-0"]; its #495057 14px / 400 / 21px is content colour set on the panel, not a label style'
  hero-carousel-icon-button:
    type: button
    backgroundColor: rgba(248, 249, 250, 0.2)
    border: 1px transparent
    rounded: 32px
    size: 30px x 30px
    hover: bg rgba(248, 249, 250, 0.4)
    pressed: bg rgba(248, 249, 250, 0.4)
    states: rest on two buttons (capture 15, 16); hover and pressed sampled on both, all four frames recording the same value; focus not declared
    use: Icon button over the home hero banner at home::[data-omd-capture="15"]; icon-only, so no label colour is claimed
  home-carousel-arrow:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#212529'
    border: '1px #ced4da'
    rounded: 32px
    size: 30px x 30px
    hover: 'bg #f8f9fa, fg #000000'
    pressed: 'bg #f8f9fa, fg #000000'
    states: 'hover and pressed frames agree exactly and both colours are rest colours elsewhere on the page; its sibling (capture 17) is disabled and records bg #f1f3f5, fg #adb5bd, border 1px #dee2e6; focus not declared'
    use: Home carousel arrow (button) at home::[data-omd-capture="18"]; icon-only, so fg is the computed colour its glyph can inherit
  home-article-card:
    type: card
    backgroundColor: '#ffffff'
    border: '1px #e9ecef'
    rounded: 8px
    size: 246px x 139px
    states: default on fifteen cards (capture 46-60); no state frame
    use: Home link card (a, role article) at home::[data-omd-capture="46"]; a container whose own colour is the browser default link blue, so no label style is claimed
  course-tag-badge:
    type: badge
    backgroundColor: '#e7f5ff'
    textColor: '#228be6'
    border: 1px transparent
    rounded: 4px
    padding: 0px 4px
    height: 20px
    typography: 11px / 700 / 18px Pretendard, letter-spacing 0.25px
    states: 'default on the blue pair (ten on home); the same geometry and type carry #e3fafc / #1098ad, #00a760 / #ffffff and, on the catalog, #228be6 / #ffffff; no state frame'
    use: Course badge (div.mantine-Badge-root) on home and catalog, 51 x 20; bare selector home::div
  course-filter-chip:
    type: button
    backgroundColor: rgba(73, 80, 87, 0.1)
    textColor: '#495057'
    border: 1px transparent
    rounded: 32px
    padding: 0px 18px
    height: 36px
    typography: 14px / 600 / 14px system sans-serif
    hover: bg rgba(73, 80, 87, 0.12)
    pressed: bg rgba(73, 80, 87, 0.12)
    states: rest on nine chips (capture 14-22); hover and pressed sampled on all nine, all eighteen frames recording the same value; focus not declared
    use: Course-catalog filter chip (button) at surface-2::[data-omd-capture="14"], 106 x 36
  course-pagination:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#000000'
    border: '1px #ced4da'
    rounded: 8px
    padding: 9.5px
    size: 38px x 38px
    typography: 18px / 400 / 18px system sans-serif
    states: 'rest on five page buttons (capture 71-75); capture 70 records bg #00c471, fg #ffffff and border 1px #00c471, but only generated classes separate it, so no selected state is declared; the previous-page button (capture 69) is disabled; no state frame'
    use: Course-catalog pagination button at surface-2::[data-omd-capture="71"]
fonts:
  roles:
    ui: Pretendard
---

# Design System Inspiration of Inflearn (인프런)

## Overview

### Visual Theme & Atmosphere

Inflearn is Inflab’s career-learning platform: its official company introduction describes a space where people can learn and share knowledge without economic or time constraints, while its public product routes organize that promise as a dense course catalogue. The supplied home and course-list captures use a white field, dark neutral text, a precise green action color, compact rounded navigation controls, and image-led course articles. The expression is practical rather than decorative: the emphasis is on finding, comparing, and entering learning content.

The current product shell should not be confused with every Inflearn-owned page. The supplied third route is an Inflab engineering article with separate documentation chrome; it is recorded as first-party context only. Inflab’s own engineering writing says the service has accumulated multiple systems and that its newer shared GNB serves courses, challenges, mentoring, clips, and community across multiple front-end environments. That is useful evidence for the header’s product importance, not authorization to turn documentation styles into product tokens.

### Primary tasks

- Find and compare courses before entering one
- Judge a course by its learner counts and evaluations
- Move between courses, challenges, mentoring, clips and community
- Share professional expertise with learners as an expert

### Iconography & Imagery

The product surfaces include course articles and standard controls, but the supplied evidence does not identify a named icon library, SVG stroke rule, image aspect-ratio contract, or universal thumbnail treatment. Course imagery and any inline icon implementation remain route content rather than promoted system tokens.

### Brand Narrative

Inflab’s own introduction describes Inflearn as a career-learning platform for people who pursue work and dreams. It says the service aims to let people learn and share knowledge without being prevented by economic or time constraints, and it presents knowledge sharers with substantial professional experience as a source of expertise. The company also frames transparent course information and a long-term growth ecosystem as part of its purpose.

Its engineering writing gives that public product a current operational context. A 2024 design-system retrospective says historical systems coexisted, while the 2026 GNB account explains how a new shared header made the core services—courses, challenges, mentoring, clips, and community—more legible across multiple front-end environments. This is an evolution in product infrastructure and navigation, not evidence that every public surface shares a single stylesheet or component library.

The reference therefore keeps the official service and evolution story, but does not invent founder history, customer metrics, a uniform visual system, or a quantified design outcome beyond what those sources state.

### Principles

1. **Career learning and knowledge sharing.** The company describes a platform for people to learn and share expertise. *UI implication:* do not replace that service context with unsupported commerce or credential claims.
2. **Transparent information.** The company says it publishes learner counts and course evaluations without selection or manipulation. *UI implication:* where such data is presented, distinguish actual product evidence from marketing interpretation.
3. **Opportunity through accessibility.** The company describes reducing economic and time barriers to learning. *UI implication:* do not turn that narrative into unobserved pricing, promotion, or eligibility UI.

### Stakeholder Groups

The official company page identifies learners seeking career development and experts who share knowledge. The product’s current GNB article additionally names courses, challenges, mentoring, clips, and community as core services. These are stakeholder/service facts, not synthetic personas; no age, task frequency, conversion behavior, or preference is inferred.

## Colors

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
- Component-local colours recorded in §4, not promoted to palette roles: `#CED4DA` (home carousel arrow and catalog pagination borders; unchecked radio border), `#E9ECEF` (menu, popover and home link-card borders), `#25262B` (selected content-tab fill), `#000000` (menu item, pagination, search-input and hovered carousel-arrow text), and the translucent fills `rgba(73, 80, 87, 0.1)` (catalog filter chips) and `rgba(248, 249, 250, 0.2)` (hero icon buttons).

These values are product-route observations, not a claim that every public Inflab site has the same palette.

## Typography

### Typography & Layout Evidence

#### Typography evidence classes

- **Live product computed use:** `Pretendard` is the sole promoted UI family. It has 1,278 visible computed uses across the home and course catalog, and the supplied collector reports a loaded FontFaceSet match with high confidence. The artifact supplies no font-file URL for that loaded face, so the web-source location remains unresolved rather than invented.
- **System fallbacks:** `sans-serif` is a high-confidence system resolution in 153 observed product elements; `Arial` and `Roboto` each occur once in the full bundle. They remain system evidence, not Inflearn brand families.
- **Declared-only assets:** Fira Code, Font Awesome 6 Pro, KaTeX faces, and Source Serif 4 have zero visible use in this capture. Fira Code, Font Awesome, and Source Serif 4 include declared source URLs; the KaTeX declarations do not. None are promoted to UI tokens or rendered as substitutes.
- **Official distribution and licence boundary:** Pretendard’s upstream README documents static and variable webfont distribution, while its upstream project publishes the font software under SIL Open Font License 1.1. These identify the asset and licence only; the product-use claim comes from computed use plus the loaded FontFaceSet observation.

- The captured product surfaces expose repeated 4px, 8px, 10px, and 16px spacing values. They form the conservative observed spacing set in frontmatter.
- The product home and catalog both include course `article` shells at 8px radius with zero padding and no shadow. The capture does not establish a universal course-grid column count, image ratio, responsive breakpoint, course-detail layout, or checkout layout.
- Product navigation actions are route-level controls, not evidence for a universal page container or an application-wide 65px header rule.

## Elevation & Depth

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.flat`: `none`

## Shapes

### Shape & Elevation

- Product evidence includes 4px badge wrappers, 8px course-card/input shells, 32px GNB actions, and `999px`/`9999px` pill controls. These are distinct observed shapes, not a mandate to round unrelated interfaces.
- The selector-backed GNB controls, search submit, course article, and dialog backdrop have `box-shadow: none`. A separate course-catalog control has a local shadow observation, but the bundle does not establish a reusable elevation scale. The open menu, popover, and modal panels carry the layered shadows recorded in §4; they are component values, not an elevation scale.

## Motion & Easing

No duration, easing curve, card-scale, skeleton animation, page transition, or reduced-motion rule was captured in the supplied product evidence. The first-party GNB article discusses a shift from reflow-based scroll motion to composite-based scroll motion for the shared header, but it does not supply reusable animation tokens. No motion token is therefore promoted.

## Components

### Product GNB search submit

**Default**
- Background: `#00C471`
- Text: `#FFFFFF`
- Radius: `999px`
- Hover and pressed: background `#00A760` (four frames on the two routes agree)
- Focus and disabled: the frontmatter keeps `#212529` and `#F1F3F5` from a 2026-09-16 live CSS inspection that does not name the property. The 2026-07-13 bundle holds no focus or disabled frame on this element and cannot confirm them: its only `#212529` focus value is the search input's colour on a 0px border, and its only `#F1F3F5` disabled fill is the home carousel arrow (capture 17), a different element.
- Corrected 2026-09-30: the July `16px / 400 Pretendard` font line was the inherited page type on an icon-only button, not a label style.
- Use: Product GNB search-submit; `home::[data-omd-capture="8"]`. Hover provenance is `home::[data-omd-capture="8"]::state-hover` and is also present on the catalog surface.

### Product GNB navigation action

**Default**
- Background: `#F8F9FA`
- Text: `#495057`
- Radius: `32px`
- Padding: `0px 22px`
- Font: `16px / 600 Pretendard`
- Hover and pressed: background `rgba(241, 243, 245, 0.65)`; the two icon buttons beside it take the same value (twelve frames agree)
- Use: Product GNB navigation action; `home::[data-omd-capture="12"]`. The observed hover selector is `home::[data-omd-capture="12"]::state-hover`.

### Product course card

**Default**
- Radius: `8px`
- Padding: `0px`
- Shadow: none
- Corrected 2026-09-30: the July `16px / 400 Pretendard` font line was the article container's inherited page type, not a label style.
- Use: Product course article shell on home and course catalog; `home::article` and `surface-2::article`.

### Product content tab

**Default** (`aria-selected="false"`)
- Background: transparent
- Text: `#212529`
- Radius: `9999px`
- Padding: `10px 16px`
- Font: `14px / 400 / 14px system sans-serif`
- Hover and pressed: background `#F8F9FA` (four rest tabs, eight frames agree)
- Use: `home::[data-omd-capture="20"]` through `"24"`.

**Selected** (`aria-selected="true"`)
- Background: `#25262B`
- Text: `#FFFFFF`
- Font: `14px / 700 / 14px system sans-serif`
- Use: `home::[data-omd-capture="19"]`, also `home::[data-omd-interaction-capture="tab-3-0"]` after the tab interaction. Corrected 2026-09-30: the July record stored these selected values as the tab's rest values and cited `tab-3-3`, a tab in a lower group (99px × 36px, with a 1px `#25262B` border).

### Product dialog overlay

**Open**
- Background: `rgba(0, 0, 0, 0.6)`
- Use: Dialog backdrop expanded by the collector on home and catalog; `home::[data-omd-interaction-capture="dialog-2-8"]`. Corrected 2026-09-30: the July `16px / 400 Pretendard` font line was the inherited page type on an element without text.

### GNB controls

**Service link** (`gnb-service-link`): transparent, square corners at rest, `6px 10px` padding, `44px` high; `home::[data-omd-capture="1"]` through `"5"` on both routes. Hover and pressed: background `#F8F9FA` with a `50px` radius (twenty frames agree). The link element's own colour is `#00A760` and its type equals the page text; its label sits in a child the capture did not sample, so no label style is claimed.

**Menu button** (`gnb-menu-trigger`): transparent, border 1px transparent, `32px` radius, 61px × 42px, icon-only; `home::[data-omd-capture="6"]`. Hover and pressed: background `#F8F9FA` (four frames agree). Activating it opened the menu below.

**Text button** (`gnb-text-button`): transparent, text `#495057`, border 1px transparent, `32px` radius, `0px 12px`, `42px` high, `16px / 600 / 16px Pretendard`; `home::[data-omd-capture="9"]`. Hover and pressed: background `#F8F9FA` (four frames agree).

**Icon buttons** (`gnb-icon-trigger`): background `#F8F9FA`, border 1px transparent, `32px` radius, 42px × 42px, icon-only; `home::[data-omd-capture="10"]` and `"11"` (`aria-haspopup="dialog"`). Hover and pressed: background `rgba(241, 243, 245, 0.65)`, the value the navigation action takes (eight frames agree). Each opened a popover or modal.

**Search input** (`gnb-search-input`): background `#FFFFFF`, text `#000000`, `8px` radius, 377px × 36px, `16px / 400 / 34px Pretendard`, border width 0px; `home::[data-omd-capture="7"]`.

**Menu** (`gnb-menu`): background `#FFFFFF`, border 1px `#E9ECEF`, `8px` radius, `4px` padding, 110px × 256px, shadow `rgba(0, 0, 0, 0.05) 0px 1px 3px 0px, rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px`; `home::[data-omd-interaction-capture="menu-0-0"]`, captured open (menu-open, expanded) on both routes. Its items (`gnb-menu-item`): transparent, text `#000000`, `8px` radius, `10px 12px`, `41px` high, `14px / 400 / 16.1px Pretendard`; `home::[data-omd-interaction-capture="menu-0-1"]`, six items.

**Popover** (`gnb-popover`): background `#FFFFFF`, border 1px `#E9ECEF`, `16px` radius, `12px 10px` padding, 253px × 248px, shadow `rgba(0, 0, 0, 0.05) 0px 1px 3px 0px, rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px`; `home::[data-omd-interaction-capture="dialog-1-0"]`, captured open (dialog-open).

### Modal

**Panel** (`product-modal`): background `#FFFFFF`, `16px` radius, 320px × 263px, shadow `rgba(0, 0, 0, 0.05) 0px 1px 3px 0px, rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px`; `home::[data-omd-interaction-capture="dialog-2-0"]`, over the overlay above. The panel sets `#495057` at `14px / 400 / 21px` for its content; that is content colour on a container, not a label style. It holds a close button (`dialog-2-2`, 31px × 31px, 8px radius) and a radio group whose first radio records a `#00C471` fill and border against `#FFFFFF` with 1px `#CED4DA` on the other three; no `aria-checked` is recorded, so no checked state is declared.

### Home carousel and cards

**Hero icon buttons** (`hero-carousel-icon-button`): background `rgba(248, 249, 250, 0.2)`, border 1px transparent, `32px` radius, 30px × 30px, icon-only; `home::[data-omd-capture="15"]` and `"16"`. Hover and pressed: background `rgba(248, 249, 250, 0.4)` (four frames agree).

**Carousel arrow** (`home-carousel-arrow`): background `#FFFFFF`, text `#212529`, border 1px `#CED4DA`, `32px` radius, 30px × 30px, icon-only; `home::[data-omd-capture="18"]`. Hover and pressed: background `#F8F9FA`, text `#000000`; both frames agree and both colours are rest colours elsewhere on the page. Its sibling (capture 17) is disabled and records background `#F1F3F5`, text `#ADB5BD`, border 1px `#DEE2E6`.

**Link card** (`home-article-card`): background `#FFFFFF`, border 1px `#E9ECEF`, `8px` radius, 246px × 139px; `home::[data-omd-capture="46"]` through `"60"`. A link container whose own colour is the browser's default link blue, so no label style is claimed.

**Course badge** (`course-tag-badge`): background `#E7F5FF`, text `#228BE6`, border 1px transparent, `4px` radius, `0px 4px`, `20px` high, `11px / 700 / 18px Pretendard`, letter-spacing 0.25px; bare selector `home::div` (`div.mantine-Badge-root`). The same geometry carries `#E3FAFC` / `#1098AD`, `#00A760` / `#FFFFFF`, and on the catalog `#228BE6` / `#FFFFFF`.

### Course-catalog controls

**Filter chip** (`course-filter-chip`): background `rgba(73, 80, 87, 0.1)`, text `#495057`, border 1px transparent, `32px` radius, `0px 18px`, `36px` high, `14px / 600 / 14px system sans-serif`; `surface-2::[data-omd-capture="14"]` through `"22"`. Hover and pressed: background `rgba(73, 80, 87, 0.12)` (nine chips, eighteen frames agree).

**Pagination** (`course-pagination`): background `#FFFFFF`, text `#000000`, border 1px `#CED4DA`, `8px` radius, `9.5px` padding, 38px × 38px, `18px / 400 / 18px system sans-serif`; `surface-2::[data-omd-capture="71"]` through `"75"`. Capture 70 records background `#00C471`, text `#FFFFFF` and border 1px `#00C471`; only generated classes separate it, so it is described, not declared as selected. The previous-page button (capture 69) is disabled.

### How states were read

A state frame is the computed style the collector recorded with the pointer over an element (hover) or pressed on it. Settled frames are declared above, on sibling agreement or a match with a colour the page uses at rest. The collector's timing varies (the search input's pressed frame reads `rgb(24, 26, 29)` on home and `rgb(2, 3, 3)` on the catalog), so one exact value across nine chips or ten links is a settled value, not one moment of a transition. The search input's pressed and focus frames change only the colour of a 0px border, the hero banner link turns its own colour to `#00C471` (a container, not a label), and the third-party chat launcher's pressed frame is the browser's default active-link red; none is declared. No focus value is declared: the bundle's two focus frames are both on the search input, and the collector presses the mouse before focusing, which leaves `:focus-visible` false. No checkout, payment, error, toast, skeleton, course-card-hover, or responsive variant is inferred.

---

**Verified:** 2026-07-13
**Tier 1 sources:** `https://www.inflearn.com/` (product home), `https://www.inflearn.com/courses` (product catalog), `https://tech.inflab.com/20260305-new-header/` (first-party engineering documentation/context), `https://tech.inflab.com/20240224-design-system/` (first-party design-system context), `https://story.inflab.com/main/%ED%9A%8C%EC%82%AC%EC%86%8C%EA%B0%9C/` (first-party company context), `https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md` (upstream font distribution), and `https://github.com/orioncactus/pretendard/blob/main/LICENSE` (upstream font licence boundary)
**Tier 2 sources:** `https://getdesign.md/inflearn` (attempted; built-in web open returned an internal safe-open failure), `https://styles.refero.design/?q=inflearn` (attempted; built-in web open returned an internal safe-open failure); no usable Inflearn record was returned by the required cross-check attempts.
**Conflicts unresolved:** none

Legacy claims about a universal Mantine token sheet, a named 65px sticky GNB contract, course-detail/cart/payment CTAs, input outlines, footer geometry, card motion, empty/error/success states, and unmeasured course-grid rules were removed because the supplied 2026 evidence does not establish them.

### Observed Interaction States

| State | Selector-backed observation | Boundary |
|---|---|---|
| Hover and pressed | GNB search submit `#00A760`; GNB navigation action and icon buttons `rgba(241, 243, 245, 0.65)`; GNB service links, menu button, text button and content tabs `#F8F9FA` (the links also take a 50px radius); carousel arrow `#F8F9FA` with `#000000` text; hero icon buttons `rgba(248, 249, 250, 0.4)`; catalog chips `rgba(73, 80, 87, 0.12)`. | Hover and pressed frames agree on every declared element. |
| Selected | Product content tab with `aria-selected="true"`: `#25262B` background, white 14px/700 text; the rest tabs (`aria-selected="false"`) are transparent with `#212529` text. | Product-home tab only. |
| Menu open | Collector expanded the GNB menu (`gnb-menu`: white, 1px `#E9ECEF`, 8px radius, layered shadow); its items are 14px Pretendard at 8px radius and `10px 12px` padding (`gnb-menu-item`). | GNB menu only. |
| Dialog open | Collector recorded a `rgba(0,0,0,0.6)` backdrop under a white 16px-radius modal panel, and a GNB popover (white, 1px `#E9ECEF`, 16px radius). | No validation or checkout state is inferred. |
| Disabled | Home selector records a neutral 32px button; catalog selector records a different 8px control. | Keep them selector-local; do not create a universal token. |
| Focus | The frontmatter keeps `#212529` on the GNB search submit from the 2026-09-16 live CSS inspection, which does not name the property. The 2026-07-13 bundle cannot confirm it: its two focus frames are the search input's colour on a 0px border. | Not a bundle measurement; no other focus value is declared. |

## Voice & Tone

### Content & Voice

Inflab’s official company page frames the service around career learning, knowledge sharing, fair access to growth opportunities, transparent course/review information, and content rather than inflated marketing. Treat this as brand context: it supports clear, learner-respecting copy but does not establish fictional UI slogans, exact CTA wording, or a product-wide Korean grammatical style guide.

#### Do

- Keep learner and knowledge-sharing context tied to the official company narrative.
- Preserve source-domain boundaries when referring to product, documentation, or company-story content.

#### Don't

- Turn a company mission statement into an unobserved product microcopy template.
- Present declared-only or system fonts as loaded Inflearn UI fonts.

The first-party company introduction addresses people who build careers and dreams, describes expert knowledge sharing, and frames Inflearn as a career-learning platform. It also explicitly values transparent course information, opportunities to learn despite cost or time constraints, and good content over inflated marketing. Together those statements support a grounded, learner-respecting brand voice: clarity about what is being learned and who is sharing the knowledge is more defensible than pressure or spectacle.

They are not a published UI copy manual. The product capture confirms controls and course content but does not prove an exact CTA vocabulary, a required Korean sentence ending, a particular error-message formulation, or a campaign-copy rule. Preserve the company’s stated commitments as context and leave specific product strings unclaimed unless a product surface directly supplies them.

## Governance

### Accessibility & States

- The captured search-submit is white text on `#00C471`; the source records its observed hover background as `#00A760`.
- The captured dialog backdrop is `rgba(0, 0, 0, 0.6)`. The bundle confirms that a dialog-open state exists but does not provide a general dialog-panel accessibility specification.
- The home capture includes one disabled button with `#F1F3F5` background, `#ADB5BD` text, a `#DEE2E6` border, and 32px radius. It is a selector-specific observation, not a universal disabled-state token because the catalog’s disabled sample differs.
- No accessibility conformance, focus-visible outline, keyboard order, error message, loading, empty, success, or responsive behavior is claimed beyond the recorded interaction states.

### Source Boundaries

The product home and course catalog are the only sources of product tokens and component claims in this reference. The Inflab engineering article is documentation chrome and describes the 2025 GNB redesign, its MFE/App Shell context, and the product’s core service navigation; it must not populate product CSS tokens. The company introduction supplies factual narrative about career learning and knowledge sharing. No separate public marketing surface was captured, and no login, course-detail, cart, payment, or learning-room flow was treated as observed.

### Known Gaps

- **Contrast, `product-search-submit`.** Text `#ffffff` on `#00c471` measures 2.30:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `product-content-tab`.** Text `#212529` on `#00000000` measures 1.36:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `gnb-text-button`.** Text `#495057` on `#00000000` measures 2.57:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `gnb-menu-item`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `course-tag-badge`.** Text `#228be6` on `#e7f5ff` measures 3.20:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `course-filter-chip`.** Text `#495057` on `#4950571a` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
