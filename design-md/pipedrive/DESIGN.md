---
name: Pipedrive
colors:
  brand-green: '#017737'
  hero-surface: '#d7f9d3'
  primary: '#6861f2'
  purple-strong: '#413d99'
  secondary: '#e1e1ff'
  secondary-hover: '#c4c2ff'
  nav-hover: '#ededff'
  background: '#ffffff'
  foreground: '#192435'
  muted: '#656e7a'
  surface-muted: '#f4f5f6'
  surface-lavender: '#f7f7fe'
  divider: '#e4e6e9'
  nova-yellow: '#ffde00'
  nova-hover: '#edab0a'
typography:
  heading:
    fontSize: 52px
    fontWeight: 700
    lineHeight: 62px
    use: Website desktop h1 custom properties; h1 declares Haffer and Haffer 700 is live-loaded. This is the website, not the authenticated CRM.
  body:
    fontSize: 18px
    fontWeight: 400
    lineHeight: 30px
    use: '--pd-puco-font-website-body-* root tokens; body family declares Inter, live-loaded at 400, 600 and 700.'
  button:
    fontSize: 22px
    fontWeight: 700
    lineHeight: 32px
    use: Measured hero and Nova actions in Inter.
  navigation:
    fontSize: 16px
    fontWeight: 600
    lineHeight: 25px
    use: Measured header Hinnad link in Inter.
rounded:
  button: 4px
  card: 24px
spacing:
  xs: 5
  sm: 10
  md: 20
  lg: 40
  xl: 80
components:
  button-primary:
    type: button
    backgroundColor: '#6861f2'
    textColor: '#ffffff'
    rounded: 4px
    height: 56px
    padding: 12px 20px
    typography: 22px / 700
    hover: '#413d99'
    pressed: '#413d99'
    use: Hero Proovi tasuta button, first matching main-landmark button at x48 y787, width181.9px. Keyboard focus also darkens the fill; its auto outline is browser-provided and is not a focus token.
  button-secondary:
    type: button
    backgroundColor: '#e1e1ff'
    textColor: '#413d99'
    rounded: 4px
    height: 42px
    padding: 9px 20px
    typography: 18px / 700
    hover: '#c4c2ff'
    pressed: '#c4c2ff'
    use: Vaata kõiki funktsioone link to /et/products/sales, width246.1px. Keyboard focus also changes the fill; no browser auto-ring token is declared.
  nav-pricing:
    type: button
    textColor: '#192435'
    rounded: 0px
    height: 25px
    padding: 0px
    typography: 16px / 600
    hover: 'third ancestor background becomes #ededff; the link itself stays transparent'
    pressed: 'third ancestor background becomes #ededff; the link itself stays transparent'
    use: Header Hinnad link to /et/pricing, width54.9px, transparent on white. The changing surface is div.puco-header__navigation-item__block, not the 25px-tall anchor. Focus changes only the browser auto ring.
  resource-card:
    type: card
    textColor: '#192435'
    rounded: 24px
    height: 450.2px
    padding: 0px
    typography: 16px / 400
    hover: 'title underline solid #192435; image transform matrix(1.05, 0, 0, 1.05, 0, 0)'
    pressed: 'title underline solid #192435; image transform matrix(1.05, 0, 0, 1.05, 0, 0)'
    use: 'CRMide hindamine: kuidas valida ideaalne süsteem resource link, width416.3px, transparent on white. fg is the visible title and paragraph ink; font is the wrapper measurement, while the title is 22px/700. Image-size changes during focus persisted after blur and are excluded.'
  nova-cta:
    type: button
    backgroundColor: '#ffde00'
    textColor: '#192435'
    rounded: 40px
    height: 56px
    padding: 12px 20px
    typography: 22px / 700
    hover: '#edab0a'
    use: Nova-section Proovi tasuta link to app.pipedrive.com/nova-paywall, width181.9px. Keyboard focus changes the fill to the hover colour; the auto ring is browser-provided. Pressed is unmeasured because :active did not match. The destination was not opened.
fonts:
  roles:
    sans: Inter
    display: Haffer
---

# Design System Inspiration of Pipedrive

## Overview

### Visual Theme & Atmosphere

Pipedrive is a sales CRM for small and medium-sized businesses. It began with salespeople in Estonia in 2010 and centres its product on visualising a sales process, managing leads and automating sales work. Its own company page identifies New York as its headquarters. [Company](https://www.pipedrive.com/en/about)

The identity developed with Studio Dumbar in 2022 brought green back as the main brand colour, paired it with purple and yellow, simplified the logo, and added natural workplace photography to the illustration language. The captured homepage makes that combination concrete: a pale green hero, dark green headline, purple actions, product-interface imagery and illustrated resource cards. [2022 brand announcement](https://www.pipedrive.com/en/newsroom/pipedrive-unveils-its-new-evolved-brand-reflecting-the-companys-commitment-to-driving-the-growth-of-smbs)

The current product direction combines continued investment in the core CRM with an AI-native sales system, beginning with Nova, according to the CEO's October 29, 2026 message. [Company update](https://www.pipedrive.com/en/newsroom/a-message-from-pipedrive-ceo-paulo-cunha)

The measured homepage is the Estonian edition (`pipedrive.com/et`, HTML `lang="et"`), rendered at 1440×1000; these measurements describe the public website.

### Brand Narrative

The brand announcement connects growth to real customers, workplace photography and upward-moving shapes. This supports an implementation that puts human imagery beside product demonstrations. The current Nova section sits within that public website, while the 2026 company update describes a renewed focus on salespeople and sales teams. [Brand announcement](https://www.pipedrive.com/en/newsroom/pipedrive-unveils-its-new-evolved-brand-reflecting-the-companys-commitment-to-driving-the-growth-of-smbs), [company update](https://www.pipedrive.com/en/newsroom/a-message-from-pipedrive-ceo-paulo-cunha)

### Principles

Implementation principles drawn from the capture: use colour to distinguish brand setting from action hierarchy; retain strong type contrast between the display headline and action labels; and make linked resources respond through both text decoration and imagery. These are reference-building conclusions, not a published list of Pipedrive design principles.

### Personas

No persona research was verified; the company's stated product audience is small and medium-sized businesses. [Company](https://www.pipedrive.com/en/about)

## Colors

The census contains 1,177 computed root properties, all under `--pd-*`; 223 have the website-specific `--pd-puco-*` prefix. One separately captured `--ot-*` declaration belongs to OneTrust and is excluded. Six cross-origin stylesheet walks were unreadable, so the declaration inventory is incomplete.

| Reference role | Measured value | Evidence and use |
|---|---|---|
| Brand green | `#017737` | `--pd-puco-global-color-green-500` and `--pd-puco-color-visuals-growth-green`; the exact hex is live CSS evidence, not a hex published in the 2022 announcement |
| Hero surface | `#d7f9d3` | `--pd-puco-color-surface-light-background`; rendered background census ×3 and visible hero |
| Primary action | `#6861f2` | Hero CTA rest background |
| Strong purple | `#413d99` | Hero CTA hover/press/focus background; secondary-action text |
| Secondary action | `#e1e1ff` | Secondary link rest background |
| Secondary hover | `#c4c2ff` | Secondary link hover/pressed/focus background |
| Navigation hover | `#ededff` | Header pricing link's third ancestor background on hover/press |
| Background | `#ffffff` | Rendered backgrounds ×27; white behind the navigation link and resource card |
| Foreground | `#192435` | Every sampled paragraph ink: 61 occurrences; visible card title and paragraph ink |
| Muted | `#656e7a` | `--pd-puco-color-text-link-medium`; rendered text census ×5 |
| Muted surface | `#f4f5f6` | Search input rest background; rendered backgrounds ×12 |
| Lavender surface | `#f7f7fe` | `--pd-puco-color-surface-secondary-background`; rendered backgrounds ×6 |
| Divider | `#e4e6e9` | `--pd-puco-color-divider-primary`; rendered borders ×4 |
| Nova yellow | `#ffde00` | Nova trial link rest background |
| Nova hover | `#edab0a` | Nova trial link hover/focus background |

Use green for the broad brand setting and purple for the measured primary action. The Nova section supplies a separate yellow action treatment.

## Typography

| Evidence class | Verified finding |
|---|---|
| Official product use | No opened company document names an authenticated-CRM typeface. Website observations do not establish one. |
| Live-loaded on the website | `document.fonts` reports **Inter** 400, 600 and 700 normal, and **Haffer** 700 normal. Body and button stacks declare Inter; the h1 stack declares Haffer. These are the two families in the machine tokens. |
| Official distributed assets | No font distribution package or font licence was opened or verified. The press kit's logo offering is not a font licence. |
| Declared-only | The shared `--pd-font-monospace-font-family` names `"Menlo",consolas,courier,monospace`; those names do not appear in the loaded-face list. No specimen is supplied for this declaration. |
| Unresolved | The CSSOM font-face inventory is empty; six external stylesheets were unreadable. The loaded list also contains the site's named fallback faces, `Inter fallback` at 400/600/700 and `Haffer Fallback` at 700; they are recorded as raw census facts, not additional brand-family tokens or chosen substitutes. |

The Estonian homepage HTML preloads WOFF2 files named `Inter-Regular`, `Inter-SemiBold`, `Inter-Bold` and `Haffer-Bold` from Pipedrive's `cdn.syd-1.pipedriveassets.com/www-main-renderer/_next/static/media/` path. This corroborates the serving location; no font binary was downloaded. Substitute: none chosen.

| Role | Size / weight / line height | Measurement class |
|---|---|---|
| Desktop h1 | 52px / 700 / 62px | `--pd-puco-font-website-h1-desktop-*` root values; h1 family from the census |
| Website body | 18px / 400 / 30px | `--pd-puco-font-website-body-*` root values |
| Large action | 22px / 700 / 32px | Hero and Nova control identity |
| Medium action | 18px / 700 / 24px | Secondary control identity |
| Header navigation | 16px / 600 / 25px | Hinnad control identity |
| Search | 14px / 400 / 25px | Search input identity |
| Resource title | 22px / 700 | Visible title snapshot; its line height and family were not separately captured |

## Layout

The desktop capture uses an 88px sticky header. The hero places text and a trial button beside a product-interface composition. The first hero action begins at x48; resource cards also begin at x48. The three resource links have widths of 416.3px and x positions 48, 504 and 961 in the survey.

The website spacing variables are 0, 5, 10, 20, 40 and 80px (`--pd-puco-spacing-none/xs/s/m/l/xl`). The root max-container-width token is 1600px; the 1440px capture does not demonstrate its behaviour at that maximum. Alternating media/text sections, testimonials, integrations, resource cards and FAQs are visible in the full-page capture.

### Responsive Behavior

No mobile viewport was measured. Root website tokens declare mobile h1 32px/700 with 42px line height, h2 30px/38px and h3 28px/36px; these are declared values, not observed breakpoint behaviour. Header tokens distinguish desktop 88px and mobile 72px. The captured card sources name media conditions `(max-width: 415px)`, `(max-width: 712px)` and `(max-width: 1103px)`; these establish image-source conditions only.

## Elevation & Depth

The measured action controls, navigation anchor, search input and card wrapper have `box-shadow: none` at rest. Product screenshots and photography supply visual layering in the page composition.

The root website variable `--pd-puco-elevation-raised-hover` is `0px 3px 5px rgba(0,0,0,.08),0px 0px 4px rgba(0,0,0,.12)`. It was not observed on the selected controls and is not assigned to them.

## Motion & Easing

The primary, secondary and Nova actions share the raw computed transition `background-color 0.18s ease-in-out 0s`. The search declares `all 0.32s ease 0s`, although this pass observed no authored hover or focus transition there. The navigation anchor and card wrapper report `all 0s ease 0s`; that does not describe transitions on their ancestors or descendants. No image-transition duration or brand-wide easing curve is inferred from the probe's longest-transition timing.

## Components

All six selected controls were found. The state pass closed the consent banner through its “Sulge” button; no overlay-hiding option was used. Pointer measurements count only matched states; focus used a real Tab walk. All six controls had no drawn border and no box shadow at rest.

| Control | Rest identity | Measured interaction |
|---|---|---|
| Hero “Proovi tasuta” | Button; 181.9×56px; 4px radius; 12px 20px padding; Inter 22px/700, line height 32px; `#6861f2` / `#ffffff` | Hover and pressed fill `#413d99`; keyboard focus also changes fill to `#413d99` |
| “Vaata kõiki funktsioone” | Link to `/et/products/sales`; 246.1×42px; 4px radius; 9px 20px padding; Inter 18px/700, line height 24px; `#e1e1ff` / `#413d99` | Hover, pressed and keyboard-focus fill `#c4c2ff` |
| Header “Hinnad” | Link to `/et/pricing`; 54.9×25px; 0px radius and padding; Inter 16px/600, line height 25px; transparent on white, ink `#192435` | Hover and pressed change the third ancestor's background to `#ededff`; the anchor's own fill and ink do not change |
| Resource card “CRMide hindamine: kuidas valida ideaalne süsteem” | Link; 416.3×450.2px; 24px radius; 0px wrapper padding; wrapper Inter 16px/400; transparent on white | Hover and pressed underline the visible title in `#192435` and scale the image to `matrix(1.05, 0, 0, 1.05, 0, 0)` |
| Nova “Proovi tasuta” | Link to `app.pipedrive.com/nova-paywall`; 181.9×56px; 40px radius; 12px 20px padding; Inter 22px/700, line height 32px; `#ffde00` / `#192435` | Hover and keyboard-focus fill `#edab0a`; pressed **UNMEASURED**, because `:active` did not match |

The card anchor's own computed foreground is `#000000`, while its visible title and paragraph are `#192435`; the component token uses the visible ink. The 24px wrapper radius does not establish every descendant's radius.

The search input, labelled “Otsi Pipedrive'ist”, is 44×44px at rest with a computed 100px radius, padding `0px 0px 0px 44px`, and `#f4f5f6` / `#192435`. Hover produced no change in the compared scope; pressed was **UNMEASURED** and keyboard focus added only the browser's auto outline. It is retained here without a component token.

### States

Keyboard focus changes the primary, secondary and Nova fills to their respective measured hover colours, with `:hover` false during the Tab readings; each fill returns after blur. Every selected control also displays an `outline-style: auto` browser ring. No authored outline token is claimed, and no focus token is emitted for that ring.

For the resource card, image and picture dimensions changed from `0x0` to `416x234` during the focus walk and remained changed after blur. Those changes are excluded from focus styling. The remaining card focus indication is the browser ring. Navigation likewise has only a browser focus ring. Search hover has no change within self, pseudos and three ancestor levels; its unmeasured press is not “no change”.

The compared scope includes self and `::before`/`::after`, descendants and their pseudos, and three ancestor levels with their pseudos. The card comparison includes 12 descendants, three empty nodes and four image/source nodes; action links each include one text descendant. Canvas/video internals, sibling changes and cross-origin frame contents are outside this evidence.

## Do's and Don'ts

- Pair a pale green brand surface with the measured purple primary action.
- Keep the 4px general CTA radius separate from the Nova link's measured 40px pill treatment.
- Use `#192435` for paragraph ink and the resource card's visible text.
- Reproduce the navigation highlight on its containing item, where it was measured.
- Keep the card's underline and image-scale feedback together.
- Preserve the logo on solid-colour surfaces with clear space; the official press kit prohibits cropping, stretching and pinching. [Logo guidance](https://www.pipedrive.com/en/newsroom/press-kit)
- Do not turn the browser's auto focus ring into a brand token or infer a pressed state from hover.

## Voice & Tone

The measured Estonian actions use direct task labels: “Proovi tasuta”, “Vaata kõiki funktsioone” and “Hinnad”. As an implementation pattern, keep action copy short and name the destination or task. No broader editorial voice specification was verified.

## Agent Prompt Guide

“Build a Pipedrive website-style hero with a `#d7f9d3` surface, a green display heading using the live-loaded Haffer family, and Inter for body copy and actions. Use the declared desktop h1 metrics of 52px/700/62px. Make the primary action 56px high with a 4px radius, 12px 20px padding and white 22px/700 text; change its `#6861f2` fill to `#413d99` on hover and press.”

“For a resource link, use the captured 24px wrapper radius and a 22px/700 title in `#192435`. Underline the title and scale its image to 1.05 on hover and press. Keep the transparent wrapper on a white page.”

These prompts translate the captured website into implementation guidance; they do not describe an authenticated CRM screen.
