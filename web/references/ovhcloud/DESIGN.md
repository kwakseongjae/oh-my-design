---
name: OVHcloud
colors:
  primary: '#0050d7'
  primary-hover: '#000e9c'
  heading: '#00185e'
  foreground: '#4d5693'
  input-foreground: '#4d5592'
  canvas: '#ffffff'
  cyan-light: '#bef1ff'
  cyan-border: '#85d9fd'
typography:
  button:
    fontSize: 16px
    fontWeight: 600
    use: visible label spans of the filled CTA, white hero link and secondary text action; their outer elements compute to 14px/600
  navigation:
    fontSize: 16px
    fontWeight: 600
    use: Webmail header link
  input:
    fontSize: 20px
    fontWeight: 400
    use: main domain-search input
  card-heading:
    fontSize: 20px
    fontWeight: 700
    use: Public Cloud label in the promotional card
rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 8px
  lg: 16px
components:
  primary-cta:
    type: button
    backgroundColor: '#0050d7'
    textColor: '#ffffff'
    rounded: 8px
    height: 52px
    padding: 0px 16px
    typography: 16px / 600
    hover: '#000e9c'
    use: En profiter button nested in the Public Cloud card link; 109.2px wide. Font describes the visible span; outer button is 14px/600.
  hero-secondary:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#0050d7'
    rounded: 8px
    height: 52px
    padding: 0px 16px
    typography: 16px / 600
    hover: '#bef1ff'
    use: Trouvez votre nom de domaine en .si is a link in the blue hero, 287.4px wide. Font describes its visible span; outer link is 14px/600.
  secondary-action:
    type: button
    textColor: '#0050d7'
    rounded: 0px
    height: 20px
    padding: 0px
    typography: 16px / 600
    hover: 'fg #000e9c; label background underline expands from 0px to 100% width at 2px height'
    use: En savoir plus button nested in the Data Platform card link; transparent on a white tile, 118.3px wide. Outer button is 14px/600; visible span is 16px/600.
  nav-webmail:
    type: button
    textColor: '#bef1ff'
    rounded: 0px
    height: 46px
    padding: 0px
    typography: 16px / 600
    hover: 'fg #85d9fd; label gains a solid underline'
    use: 'Webmail is a header link, transparent on the #000e9c top bar, 60.2px wide.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Source Sans Pro
---

# Design System Inspiration of OVHcloud

## Overview

### Visual Theme & Atmosphere

OVHcloud provides public and private cloud, shared hosting and dedicated servers, alongside domain names and communications services. Its history begins in 1999, when Octave Klaba founded OVH while studying at ICAM in Lille to meet a community need for internet hosting. The company describes its mission through openness, trust and customers' freedom to build. [Company](https://www.ovhcloud.com/fr/about-us/), [history](https://corporate.ovhcloud.com/fr/company/history/).

The 2019 adoption of the OVHcloud name made the company's cloud focus explicit. Its announcement connects the identity change to international growth and an open, reversible cloud. Today's measured homepage puts domain registration and hosting beside Public Cloud, managed Kubernetes, databases, data pipelines and AI projects. This is an infrastructure catalogue with both introductory offers and technical product language. [Rebrand announcement](https://corporate.ovhcloud.com/fr/newsroom/news/its-20th-anniversary-ovh-takes-and-becomes-ovhcloud/), [homepage](https://www.ovhcloud.com/fr/).

The visual signature is a deep blue utility bar and hero, cyan accents, white content areas and compact semibold actions. Filled blue buttons darken on hover; the white hero action turns pale cyan. The captured hero combines an illustrated robot with a domain offer. These are observations of the live marketing surface, rather than claims about the intent behind every brand asset.

The measured homepage is the French edition (`ovhcloud.com/fr/`, HTML `lang="fr"`). OVHcloud also publishes ODS as assets, guidelines and components for consistent experiences across its products; this reference's values come from the homepage capture, without importing unmeasured console components. [Official ODS repository](https://github.com/ovh/design-system).

### Brand Narrative

The company's own history connects community hosting in 1999 to the OVHcloud name in 2019. The name announcement frames cloud infrastructure as open and reversible, while the current catalogue brings domains, servers and data/AI services together. For a builder, the useful visual continuity is the blue/cyan palette, semibold actions and clear product hierarchy visible on this homepage. [History](https://corporate.ovhcloud.com/fr/company/history/), [name announcement](https://corporate.ovhcloud.com/fr/newsroom/news/its-20th-anniversary-ovh-takes-and-becomes-ovhcloud/), [homepage](https://www.ovhcloud.com/fr/).

### Principles

The company explicitly describes its SMART cloud through simplicity, multiple locations, accessibility, reversibility and transparency. These are company principles, rather than inferred component rules. [Company](https://www.ovhcloud.com/fr/about-us/).

For this measured surface, practical design guidance is to separate the primary action from text actions, preserve visible label typography, and distinguish a transparent interaction wrapper from its painted child.

### Personas

No persona research was verified.

## Colors

| Role | Value | Live evidence |
|---|---|---|
| Primary action | `#0050d7` | Filled CTA background; secondary action label; `--ods-color-information-500` |
| Dark action / top bar | `#000e9c` | Filled CTA hover, top-bar ancestor background; `--ods-color-information-700` |
| Heading | `#00185e` | Public Cloud offer heading descendant; `--ods-color-heading` |
| Foreground | `#4d5693` | Public Cloud prose paragraphs and card wrapper; paragraph census ×20 |
| Input foreground | `#4d5592` | Main domain input; separate root token `--ods-color-text` |
| Canvas | `#ffffff` | Card tile, input, hero action at rest; `--ods-color-neutral-000` |
| Light cyan | `#bef1ff` | White hero action hover; Webmail rest label; `--ods-color-information-100` |
| Cyan border | `#85d9fd` | Input and tile border; Webmail hover label; `--ods-color-information-200` |

Preserve the two ink values: the measured card paragraphs use `#4d5693`, while the input and `--ods-color-text` use `#4d5592`. The paragraph census contains primary blue ×25, prose ink ×20 and white ×10; the most frequent paragraph colour alone does not identify a universal body colour.

The census contains 1,314 computed root properties, including 1,308 `--ods-*` entries, and 1,528 declared names, including 1,512 `--ods-*` entries. These counts include aliases and state declarations, rather than that many independent visual decisions. The complete lists and ownership decisions are in the research report.

## Typography

**Live-loaded:** the census names **Source Sans Pro** at 400, 600 and 700 normal, plus additional faces recorded as `normal normal` and `normal italic`. The typography family token uses this live-loaded CSS family. Heading and button declarations also begin with that family.

**Official product-use statement:** no opened typography document independently establishes a font for every OVHcloud product. The ODS repository describes its cross-product scope, without supplying such a statement in the page inspected.

**Official distributed assets:** no separate official font kit or font licence was opened. As live delivery evidence, the stylesheets expose first-party `@font-face` sources: relative WOFF2 paths under `ovh_theme_patternlab/dist/fonts/source-sans-pro/`, and `/_next-menu/_next/static/media/source-sans3-variable-custom.b05291b0.woff2` with an italic companion. The latter filename is recorded under the CSS family Source Sans Pro; it does not justify renaming the measured family. The census does not resolve whether a `local(...)` source or a URL supplied each face.

**Declared-only:** Source Code Pro has normal and italic `@font-face` rules but no loaded face. Source Sans Pro 300 normal and the separate fixed 400 italic rule are also absent from the loaded-face list. They receive no specimen or family token. The raw body declaration is a system fallback stack; it is not evidence that a system face is the brand face.

**Unresolved:** font licensing, exact downloaded resource selection and typography on the signed-in console. Substitute: none chosen. Loaded `icons` and `ODS Icon` are icon fonts and are excluded from text-family tokens.

| Measured text | Size / weight | Detail |
|---|---|---|
| Filled CTA, white hero action, secondary action | 16px / 600 | Visible label span; outer element is 14px / 600 |
| Webmail navigation | 16px / 600 | 16px line height |
| Domain-search input | 20px / 400 | 24px line height |
| Public Cloud card label | 20px / 700 | Measured label descendant |

## Layout

At 1440×1000, the header occupies two horizontal bands: a 46px utility row and a 55px product-navigation row. The computed `--ovh-header-height` is 101px. The homepage then presents a promotional hero, a horizontal offer-card strip, domain search, product-category links and explanatory cards. These relationships are visible in the capture; they are not a measured mobile layout.

The Public Cloud offer link measures 428px wide. The main domain input measures 669.9px wide. Treat these as desktop instances, rather than universal fixed widths. Keep the measured 16px horizontal action padding and 8px/16px input padding when reproducing those controls.

### Responsive Behavior

Only the 1440×1000 desktop layout was measured; mobile, touch and breakpoint transitions remain unverified.

## Elevation & Depth

The sampled product controls are flat: all six outer elements have no box shadow. White card tiles use thin cyan borders. First-party root declarations provide radii of 2px, 4px, 8px and 16px (`--ods-border-radius-xs/sm/md/lg`); the filled action, white action and input actually measure 8px. The card anchor and text/navigation actions measure 0px.

## Motion & Easing

The filled CTA and white hero link compute to `transition: all 0.1s ease-in-out 0s`. The secondary action, Webmail link, input and card anchor compute to `all 0s ease 0s`. These are element-level strings, not a global animation specification; the secondary label's underline changes despite its outer button's zero-duration transition. The carousel ancestor transform observed during card hover is excluded from an interaction-motion prescription.

## Components

Six product controls were inspected with pointer hover and a real Tab walk. Both covering dialogs were dismissed with their reject/close controls. Hover snapshots matched `:hover` when read; later crop validation lost that match, so the screenshots do not independently prove the hover appearance. Pressed states were unmeasured for every control.

| Control | Geometry | Rest | Measured hover |
|---|---|---|---|
| `primary-cta` — Public Cloud “En profiter” | 109.2×52px; radius 8px; padding 0px 16px | `#0050d7` / `#ffffff` | Background `#000e9c` |
| `hero-secondary` — “Trouvez votre nom de domaine en .si” link | 287.4×52px; radius 8px; padding 0px 16px | `#ffffff` / `#0050d7` | Background `#bef1ff`; label unchanged |
| `secondary-action` — Data Platform “En savoir plus” | 118.3×20px; radius 0px; padding 0px | Transparent on white; label `#0050d7` | Label `#000e9c`; background underline expands |
| `nav-webmail` — Webmail link | 60.2×46px; radius 0px; padding 0px | Transparent on `#000e9c`; label `#bef1ff` | Label `#85d9fd` and solid underline |
| `domain-search` — “Rechercher mon domaine” input | 669.9×52px; radius 8px; padding 8px 16px | `#ffffff` / `#4d5592`; 1px solid `#85d9fd` border | No change within the probe scope |
| `cloud-card` — Public Cloud offer link | Outer anchor 428×377px; radius 0px; padding 0px | Transparent wrapper, ink `#4d5693`; white child tile with 1px solid `#85d9fd` border | Child tile background `#bef1ff`; separate carousel movement also recorded |

The filled and white actions have a 2px transparent border and no shadow. All six outer controls report `box-shadow: none`. The card's visible rounded tile is a child of its square anchor; its radius was not independently measured, so the anchor's zero radius must not be used as a tile-radius prescription.

The four action/navigation components are harvested. The input stays in prose because its only focus change is the browser ring. The card stays in prose because the hover pass also captured carousel movement and its blur comparison contains later focus on the nested button.

### States

The primary action darkens on hover and keyboard focus. The white hero link becomes pale cyan on hover and keyboard focus. Webmail changes from pale cyan to lighter blue with an underline on hover, and to white on keyboard focus. The secondary text action darkens and expands its underline on hover; keyboard focus produced no computed change within the compared scope.

The domain input has no computed hover change and only a browser `auto` focus ring. The card has a raw child-background hover change, a browser ring and a blur comparison affected by subsequent nested-button focus. No authored focus-ring token was established. The background/text focus observations remain here in prose; no focus token encodes the browser ring.

All pressed observations are **UNMEASURED** because `:active` did not match while the pointer was held down. No disabled state was measured. The probe compares each control, its descendants and pseudo-elements, and three ancestor levels; it cannot establish the absence of changes outside that scope.

## Do's and Don'ts

- Use `#0050d7` for filled actions and `#000e9c` for their measured hover treatment.
- Place the white hero action on the blue hero and use pale cyan for its measured hover.
- Set visible action labels to Source Sans Pro 16px/600; preserve the distinction from the outer element's 14px/600 declaration.
- Keep cyan rules and the two observed prose/input ink values distinct.
- Treat transparent link wrappers and their painted children separately.
- Keep unmeasured pressed states, browser `auto` rings and carousel transforms out of brand state tokens.

## Voice & Tone

The French surface uses direct task verbs: “Rechercher”, “En profiter” and “En savoir plus”. Its company page pairs technical service descriptions with openness, sustainability and freedom. Reproduce this combination of concrete tasks and explicit service benefits; no broader editorial style guide was verified. [Company](https://www.ovhcloud.com/fr/about-us/), [homepage](https://www.ovhcloud.com/fr/).

## Agent Prompt Guide

“Build an OVHcloud-style infrastructure offer with a white surface, `#00185e` headings and `#4d5693` prose. Use a 52px-high `#0050d7` action with white Source Sans Pro 16px/600 label, 8px radius and 16px horizontal padding. Its measured hover background is `#000e9c`. For an action on the blue hero, use white at rest and `#bef1ff` on hover, keeping the label `#0050d7`.”

For a secondary text action, use a transparent background on white and a blue label. Its measured hover darkens the label and reveals a 2px underline made from a background gradient, expanding from zero to full width.
