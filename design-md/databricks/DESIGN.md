---
name: Databricks
colors:
  primary: '#ff3621'
  primary-alt: '#eb1600'
  primary-hover: '#bd2b26'
  primary-pressed: '#ff5f46'
  navy: '#0b2026'
  teal: '#1b3139'
  teal-mid: '#1b5162'
  foreground: '#1b3139'
  link: '#016bc1'
  muted: '#90a5b1'
  muted-light: '#edf2f8'
  on-primary: '#ffffff'
  canvas: '#ffffff'
  surface: '#eeede9'
  surface-light: '#f9f7f4'
  secondary-interaction: '#618794'
typography:
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Inherited font on the featured-card link root and FAQ controls; live-loaded DM Sans
  button:
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    use: Both measured hero CTA links; live-loaded DM Sans
  nav:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1
    use: Main navigation menu buttons in the desktop survey
  caption:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.428571
    use: Footer links in the desktop survey
  utility:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1
    use: Measured Contact Us navigation link
rounded:
  none: 0px
  sm: 2px
  lg: 20px
spacing:
  sm: 8
  md: 12
  base: 16
  lg: 24
  xl: 32
components:
  button-primary:
    type: button
    backgroundColor: '#eb1600'
    textColor: '#ffffff'
    rounded: 0px
    height: 40px
    padding: 8px 24px
    typography: 16px / 500 DM Sans
    hover: 'bg #bd2b26'
    pressed: 'bg #ff5f46'
    use: Explore the product is a link in the homepage hero. Line height 24px; normal tracking; no shadow. Keyboard focus uses the browser auto outline.
  button-secondary:
    type: button
    backgroundColor: '#1b3139'
    textColor: '#ffffff'
    rounded: 0px
    height: 40px
    padding: 8px 24px
    typography: 16px / 500 DM Sans
    hover: 'bg #618794'
    pressed: 'bg #618794'
    use: See demo is a link beside the primary hero CTA. Line height 24px; normal tracking; no shadow.
  nav-contact:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#1b3139'
    rounded: 0px
    height: 40px
    padding: 0px 0px 0px 16px
    typography: 14px / 400 DM Sans
    hover: 'fg #ff3621'
    pressed: 'fg #ff3621'
    use: Contact Us is a link in Main Navigation, with 14px line height and no shadow.
  site-search:
    type: button
    textColor: '#1b5162'
    rounded: 0px
    height: 24px
    padding: 2px
    typography: 16px / 400 DM Sans
    hover: 'SVG icon stroke #ff3621'
    pressed: 'SVG icon stroke #ff3621'
    use: 'Site search is a div with role=button on the white header. The visible icon is #1b5162; the transparent root inherits #1b3139. No search input was present in the survey.'
  card-featured:
    type: card
    backgroundColor: rgba(237, 242, 248, 0.05)
    textColor: '#ffffff'
    rounded: 0px
    height: 173px
    padding: 24px
    typography: 16px / 400 DM Sans
    hover: 'bg rgba(237, 242, 248, 0.1); bottom border 1px solid #ff5f46; arrow stroke #ff3621'
    pressed: 'bg rgba(237, 242, 248, 0.1); bottom border 1px solid #ff5f46; arrow stroke #ff3621'
    use: 'Lakebase featured-product card is a 319px-wide link on the navy section. fg describes its white title; its paragraph and resting arrow use #90a5b1. The anchor root inherits #016bc1, which is not the visible title color. No shadow.'
  nav-tab-inactive:
    type: tab
    backgroundColor: rgba(237, 242, 248, 0.1)
    textColor: '#ffffff'
    rounded: 20px
    height: 40px
    padding: 12px 16px
    typography: 16px / 500 DM Sans
    hover: bg rgba(237, 242, 248, 0.2)
    pressed: bg rgba(237, 242, 248, 0.2)
    use: Database is the inactive product tab in the homepage navy section, 103.8px wide with 16px line height. Keyboard focus was not reached; no focus token is declared.
fonts:
  roles:
    sans: DM Sans
    mono: DM Mono
---

# Design System Inspiration of Databricks

## Overview

### Visual Theme & Atmosphere

Databricks brings data engineering, analytics and AI into a unified platform built on an open lakehouse foundation. Its [company history](https://www.databricks.com/company/about-us) dates the founding to 2013; the [press kit](https://www.databricks.com/company/newsroom/press-kit) identifies seven researchers at UC Berkeley’s AMP Lab and connects their work to Apache Spark, Delta Lake, MLflow and Unity Catalog.

The public website pairs a white canvas (`#ffffff`) with deep teal ink (`#1b3139`), large navy sections (`#0b2026`) and warm pale surfaces. The hero places a large, partly red headline beside a product demonstration, followed by two square CTA links. Rounded product tabs create a different silhouette within the dark section. This combination of broad color fields, product imagery, DM Sans and compact rectangular actions is the distinctive visual expression visible in the capture.

The current homepage leads with Lakebase, a serverless Postgres offering for applications and agents. The current [platform page](https://www.databricks.com/product/platform) emphasizes enterprise context, governance and choice across clouds, data and models, and presents Genie, Agent Bricks, Databricks Apps and other capabilities together. Read together, these pages show an expansion of the lakehouse story into operational databases and agent development. The design reference below follows that public marketing surface.

#### Primary tasks

- Build batch and streaming ETL pipelines with Lakeflow; query data with SQL for analytics and business intelligence. These capabilities are described on the homepage.
- Track machine-learning experiments and manage registered models with MLflow, as described in [MLflow on Databricks](https://docs.databricks.com/aws/en/mlflow/).
- Govern data access and AI assets through the platform's single governance model across clouds. Its cloud-provider navigation names AWS, Azure and GCP.
- Review public product pricing and the DBU definition on the [pricing page](https://www.databricks.com/product/pricing).

### Brand Narrative

The company traces its origins to academia and open source: seven researchers at UC Berkeley's AMP Lab founded Databricks in 2013. Its [founders page](https://www.databricks.com/company/founders) names Ali Ghodsi, Ion Stoica, Matei Zaharia, Patrick Wendell, Reynold Xin, Andy Konwinski and Arsalan Tavakoli-Shiraji. The press kit credits the founding group with the lakehouse architecture and the named open source projects. The current platform still joins data engineering, analytics, governance and AI, while the homepage gives operational Postgres and agents a leading role.

The platform FAQ explains a lakehouse as combining a data lake's flexibility with a data warehouse's reliability. It identifies Delta Lake's data-quality rules, ACID transactions and time travel as supporting capabilities. This gives the unified-platform narrative a concrete architectural basis.

The [August 2026 company announcement](https://www.databricks.com/kr/company/newsroom/press-releases/databricks-grows-80-yoy-surpasses-7b-revenue-run-rate-scales) reports a $190 billion valuation following a $5 billion strategic investment. The current press kit reports more than 20,000 organizations and a San Francisco headquarters. These are dated company statements, rather than visual-system claims.

Databricks also publishes [dashboard design guidance](https://www.databricks.com/blog/design-beautiful-dashboards-aibi), dated June 17, 2026, covering audience, hierarchy, readability and reusable workspace themes. Its example is explicitly a fictional customer's brand. That writing supports the product's customer-theming capability, not a default Databricks palette or a new corporate rebrand.

### Principles

- **Unify related work.** The platform page presents data, analytics, AI and governance together. Reflect that relationship in the product-section information hierarchy.
- **Keep choices visible.** The platform describes choice across cloud, data and models; the homepage provides separate product explanations and a public pricing route.
- **Build hierarchy for the audience.** The company's dashboard-design article advises varying layout density for technical and executive readers and emphasizing the most important information. This is published dashboard guidance.
- **Make interaction changes specific.** In this measured public-site set, use background changes for CTA links and tabs, a text/stroke accent for utility controls, and a border plus arrow accent for the featured card. This is an implementation guide derived from observations.

### Personas

The platform FAQ identifies business and technical users across data and AI teams: natural-language insights and workflows for business users, and code, apps and engineering operations for technical users. Individual research-backed personas were not established.

## Colors

These are homepage observations, with the control-specific roles distinguished from the broader rendered census.

| Role | Value | Observed use |
|---|---|---|
| Primary accent | `#ff3621` | Hero emphasis; Contact Us text and search-icon stroke on hover/press |
| Primary action rest | `#eb1600` | Explore the product and the header Try Databricks link |
| Primary action hover | `#bd2b26` | Settled hero-primary background |
| Primary action pressed | `#ff5f46` | Hero-primary pressed background; featured-card interaction border |
| Navy | `#0b2026` | Full-width product and other dark sections |
| Teal / foreground | `#1b3139` | Light-surface paragraph ink, navigation labels and secondary CTA rest |
| Mid teal | `#1b5162` | Search-icon rest stroke, language control and paragraph ink |
| Link blue | `#016bc1` | For example, the See more customer stories link |
| Muted | `#90a5b1` | Featured-card description and rest arrow; footer links |
| Cloud base | `#edf2f8` | RGB base of translucent tabs and featured cards |
| White canvas / on-primary | `#ffffff` | Page canvas, CTA labels and dark-section text |
| Warm surface | `#eeede9` | Product panels and customer-logo controls |
| Light warm surface | `#f9f7f4` | One rendered background in the census |
| Secondary interaction | `#618794` | See demo hover and pressed background |

Keep the cloud alpha with its context: the inactive Database tab uses `rgba(237, 242, 248, 0.1)` at rest and `rgba(237, 242, 248, 0.2)` on hover/press. The Lakebase featured card uses `rgba(237, 242, 248, 0.05)` at rest and `rgba(237, 242, 248, 0.1)` during interaction, over the navy section.

The paragraph census is mixed: white occurs 14 times, mid teal 7 times and teal 5 times. `foreground` names the verified teal ink on light surfaces; it does not describe every paragraph on the page. Colors are not restricted to buttons: the hero, navigation text, search icon and featured-card arrow also carry the primary accent.

## Typography

### Font evidence classes

- **Official product use:** no product-wide font prescription was established from a usable official guideline page. The homepage observations do not establish the authenticated application's font.
- **Live-loaded:** DM Sans 400, 500, 600 and 700, and DM Mono 400. Body, H1 and button family declarations are `"DM Sans", sans-serif`. The live-loaded interface specimens supported here are from the public homepage.
- **Official distributed assets observed in CSS:** DM Sans is served from same-origin `/en-website-assets/static/sans_400_ext.woff2`, `sans_500_ext.woff2`, `sans_600_ext.woff2` and `sans_700_ext.woff2`. DM Mono 400 is embedded as a WOFF2 data URL in the website stylesheet. These are observed delivery methods; a font license was not opened.
- **Declared-only:** Merriweather 500 and Hubot Sans 100–900 have same-origin `@font-face` declarations but were absent from the loaded-face list. They receive no specimen or family token here.
- **Excluded loaded faces:** Inter 400/600 comes from Qualified's chat embed; icomoon is an icon face. Neither is an authored body-text family in this reference. The declared swiper-icons face belongs to the carousel library.
- **Unresolved:** the legacy commissioning story, the claim that DM Sans covers every product/documentation surface, and the exclusive code/data role asserted for DM Mono. DM Mono's family is retained as live-loaded, without assigning an unobserved text role. Substitute: none chosen.

### Measured control typography

| Element | Size / weight | Line height | Tracking |
|---|---|---|---|
| Hero CTA links | 16px / 500 DM Sans | 24px | normal |
| Contact Us utility link | 14px / 400 DM Sans | 14px | normal |
| Main navigation menu buttons | 16px / 400 DM Sans | 16px | Not captured in survey |
| Platform tab, selected | 16px / 700 DM Sans | 16px | Not captured in survey |
| Database tab, inactive | 16px / 500 DM Sans | 16px | normal |
| Featured-card link root | 16px / 400 DM Sans | 24px | normal |
| Footer links | 14px / 400 DM Sans | 20px | Not captured in survey |

### Declared hierarchy in the opened homepage HTML/CSS

The hero H1 explicitly binds responsive utilities: 44px/52px by default, 48px/60px from 1280px, 56px/68px from 1366px and 60px/72px from 1536px. Its weight utility declares 500. These are source declarations, not additional viewport measurements.

The stylesheet's generic H1 rule is 40px/48px, 48px/56px from 768px and 56px/64px from 1280px. Generic H2 is 28px/36px and 40px/48px from 768px; generic H3 is 24px/32px and 28px/36px from 768px. The featured-card title binds H4 and semibold utilities, declaring 20px/28px at weight 600. These source rules keep the broader hierarchy separate from the measured control metrics.

Both the product-section and customer-story H2 elements bind weight-500 `font-medium` and `lg:tracking-t-1`; the tracking rule declares `letter-spacing:-.01em` from 1280px. Normal tracking measured on the controls is therefore not a rule for every heading.

The opened pricing page retains the labels Databricks pricing, How does Databricks pricing work?, and Pay as you go. Their computed typography was not remeasured; the generic source hierarchy above remains a separate evidence class.

## Layout

At 1440 × 1000, the page starts with a fixed white navigation bar and a two-column hero: copy/actions on the left, product imagery on the right. Broad navy product sections alternate with white and warm customer-story areas. Product pills precede a large product demonstration; four featured-product cards form a desktop row. Customer stories, awards, editorial/event cards, a closing CTA and FAQ, and a multi-column footer follow.

Five first-party root variables declare content widths: `--content-width-sm: 520px`, `--content-width-md: 1136px`, `--content-width-lg: 1144px`, `--content-width-xl: 1312px` and `--content-width-xxl: 1456px`. A customer-story link measures 1312px wide at x=57 in the survey, providing a concrete desktop container reference.

Use the observed spacing values in context: 8px vertical and 24px horizontal padding on hero CTA links; 12px padding on the header CTA; 16px horizontal padding on product tabs; 24px on featured cards. The hero pair's coordinates show an approximately 32px gap; its HTML binds `lg:gap-4`, and that CSS rule declares 32px. These observations do not establish a universal spacing scale.

### Responsive Behavior

The captured viewport is desktop 1440 × 1000. The opened homepage source declares a stacked hero that switches to a row from 768px. Its featured-card grid binds one column by default, two from 768px and four from 1280px. The H1's declared size changes at 1280px, 1366px and 1536px, as detailed in §3. These are CSS declarations; narrow-viewport rendering, touch behavior and tab scrolling were not measured.

## Elevation & Depth

All six measured controls report `box-shadow: none` at rest. Color-field changes, the featured card's bottom border and its arrow provide interaction depth without a measured shadow change. The customer-story panel visibly casts a soft shadow in the full-page capture; its numerical shadow was not measured. The earlier card/dropdown shadow formulas are not established by these controls.

## Motion & Easing

The two hero links declare a **200ms** transition with `cubic-bezier(0.4, 0, 0.2, 1)` across the listed visual properties. The inactive Database tab declares **150ms** with the same curve for color, background, border, decoration, fill and stroke. The Lakebase featured card declares `all` at **300ms** with `cubic-bezier(0.4, 0, 1, 1)`.

The survey also exposes a button labelled Pause decorative banner animation. Its presence is verified; reduced-motion behavior and the effect of activating that control were not measured. The computed transition strings and state-settling evidence are copied into the verification notes.

---

**Sources and measurement:** Homepage survey and one states capture, 2026-11-02, worker browser, 1440 × 1000, en-US; [company](https://www.databricks.com/company/about-us), [press kit](https://www.databricks.com/company/newsroom/press-kit), [platform](https://www.databricks.com/product/platform), [pricing](https://www.databricks.com/product/pricing), [MLflow documentation](https://docs.databricks.com/aws/en/mlflow/), [dashboard design writing](https://www.databricks.com/blog/design-beautiful-dashboards-aibi), and the [dated company announcement](https://www.databricks.com/kr/company/newsroom/press-releases/databricks-grows-80-yoy-surpasses-7b-revenue-run-rate-scales). The [privacy notice](https://www.databricks.com/legal/privacynotice) names the legal controller and San Francisco address. The brand-host catch-all is not used to establish named palette or font-policy claims.

## Components

### Primary and secondary action links

**Explore the product** is 198.1 × 40px, radius 0px, padding 8px 24px, DM Sans 16px/500 with 24px line height, white text and no border or shadow. Its background is `#eb1600` at rest, `#bd2b26` on settled hover and `#ff5f46` while pressed.

**See demo** is 123.6 × 40px with the same geometry and typography. Its background is `#1b3139` at rest and `#618794` on hover and press; its label remains white. These measurements apply to the hero pair. The header's Try Databricks link is also 40px high but has 12px padding in the survey.

### Navigation link and search trigger

**Contact Us** is a navigation link: 88.7 × 40px, white background, teal text, radius 0px, left padding 16px and DM Sans 14px/400 with 14px line height. Hover and press change the text to `#ff3621`.

**Site search** is a 24 × 24px `div` with `role=button`, radius 0px and 2px padding on the white header. Its transparent root inherits `#1b3139`, while the visible SVG stroke is `#1b5162`; hover and press change that stroke to `#ff3621`. No first-party search input was present in the survey.

### Featured card

The **Lakebase** card is a 319 × 173px link with radius 0px, 24px padding and no shadow. Its root font is 16px/400 with 24px line height. The visible title is white; the description and resting arrow are `#90a5b1`. The root's blue link color, `#016bc1`, is not the title color.

The card's cloud background brightens from 5% to 10% alpha on hover and press. A resting, transparent 1px bottom border becomes solid `#ff5f46`, and the arrow stroke changes from muted to `#ff3621`. The rest crop was outside the initial viewport; the hover, pressed and focus crops show the intended Lakebase card.

### Product tabs

The surveyed row lists Platform, Database, AI, Business intelligence, Governance, Data warehousing and Data engineering.

The surveyed selected **Platform** tab is white with teal text, 40px high, radius 20px, padding 12px 16px and DM Sans 16px/700 with 16px line height. This selected appearance is retained as a rest observation, rather than a separately harvested interactive component.

The measured inactive **Database** tab is 103.8 × 40px, radius 20px, padding 12px 16px and DM Sans 16px/500 with 16px line height. Its white text stays fixed as the cloud background changes from 10% to 20% alpha on hover and press. Keyboard focus was not reached for this `tabIndex=-1` control.

### Radius

The observed set is 0px for the measured CTA links, navigation link, search trigger and featured card; 20px for product tabs; and 2px on the surveyed customer-logo controls. Success badges and form-input styling were not established.

### States

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| Explore the product | Background `#bd2b26` | Background `#ff5f46` | Browser `auto` outline, 1px, offset 5px |
| See demo | Background `#618794` | Background `#618794` | Browser `auto` outline, 1px, offset 5px |
| Contact Us | Text `#ff3621` | Text `#ff3621` | Browser `auto` outline, 1px, offset 1px |
| Site search | SVG stroke `#ff3621` | SVG stroke `#ff3621` | Browser `auto` outline, 1px, offset 0px |
| Lakebase featured card | Cloud 10%; bottom border `#ff5f46`; arrow `#ff3621` | Same measured changes | Browser `auto` outline, 1px, offset 1px |
| Database tab | Cloud 20% | Cloud 20% | Unmeasured; not reached by Tab |

Each hover reading matched `:hover`, and each pressed reading matched `:active`. The measured focus changes cleared after blur; all five reached controls used the browser's own ring. Disabled, loading, validation, notebook and cluster-result states were not exercised.

## Do's and Don'ts

- Build the hero actions as square 40px links with the measured 16px/500 labels and 8px 24px padding.
- Keep the action's resting `#eb1600`, hover `#bd2b26` and pressed `#ff5f46` distinct.
- Use the deep navy field to support white text and translucent cloud tabs/cards.
- Give the inactive tab a 20px radius and its measured alpha change; keep the selected tab's surveyed weight 700.
- Use the card's visible white title and muted description rather than its inherited anchor color.
- Keep the measured icon and text accent changes in navigation; the primary accent also appears outside filled CTAs.
- Preserve the distinction between public-site typography and product-wide font policy, and between declared CSS and measured states.
- Use native keyboard focus behavior where observed; no brand focus-ring token was measured.

## Voice & Tone

The current homepage pairs a short database proposition with concrete product nouns: Postgres, apps and agents. The main actions are direct imperatives such as Explore the product and See demo. The header uses Try Databricks; the pricing page uses Start free trial and Request a pricing quote. Product sections describe tasks and capabilities; the Lakeflow passage describes ingesting, transforming and orchestrating data. The public pricing page explains pay-as-you-go billing and defines DBUs. These are observed copy patterns, rather than a documented corporate tone policy.

The current hero reads “One database for AI, apps and agents”. The earlier product-section wording, “Build and run apps, agents and AI on your data”, remains in the opened homepage. No authored error-message tone or forbidden-word list was established.

## Agent Prompt Guide

“Build a Databricks-style public marketing hero on `#ffffff`, using live-loaded DM Sans. Place the copy beside a large product demonstration. Use a 40px square primary action link with white 16px/500 text, 24px line height and 8px 24px padding. Set its rest background to `#eb1600`, hover to `#bd2b26` and pressed to `#ff5f46`. Pair it with a matching secondary link using `#1b3139`, changing to `#618794` on hover and press.”

“Create a navy product section with 40px-high, 20px-radius tabs. The selected rest appearance is white with teal 16px/700 text; the inactive appearance is cloud at 10% alpha with white 16px/500 text, increasing to 20% alpha on hover and press. Under it, use a square featured-card link with a white title, muted description, 24px padding, a 5% cloud background and the measured border/arrow interaction.”

Use the evidence classes and declared type rules in §3 when expanding the layout. Substitute: none chosen.

## Governance

### Known Gaps

- **Contrast, `card-featured`.** Text `#ffffff` on `#edf2f80d` measures 1.13:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `nav-tab-inactive`.** Text `#ffffff` on `#edf2f81a` measures 1.13:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
