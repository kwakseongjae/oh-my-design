---
name: HTC
colors:
  primary: '#4bd6b8'
  accent-dark: '#30b397'
  accent-light: '#a0d4c8'
  foreground: '#f8f9fa'
  content-ink: '#4a4a4a'
  muted: '#9b9b9b'
  canvas: '#ffffff'
  surface: '#f4f4f4'
typography:
  action:
    fontSize: 14px
    fontWeight: 400
    use: Carousel CTA links; live-loaded font stack documented in section 3.
  navigation:
    fontSize: 14px
    fontWeight: 400
    use: Header product link; 14px line height.
  card-heading:
    fontSize: 16px
    fontWeight: 500
    use: Visible HTC 65W GaN card headline; anchor itself is 16px/400.
  card-category:
    fontSize: 24px
    fontWeight: 400
    use: Visible VIVE category label on the VIVELAND card.
rounded:
  square: 0px
  action: 30px
components:
  card-charger:
    type: card
    textColor: '#4a4a4a'
    rounded: 0px
    height: 280.6px
    padding: 0px
    typography: 16px / 400
    hover: 'Child image transform: matrix(1.1, 0, 0, 1.1, 0, 0). Visible headline colour remains unchanged.'
    pressed: Child image keeps matrix(1.1, 0, 0, 1.1, 0, 0). Visible headline colour remains unchanged.
    use: 'Link to the HTC 65W GaN charger, 370px wide, transparent on #ffffff. fg describes the visible 16px/500 headline; anchor font is 16px/400. Its computed anchor colour changes #4bd6b8 to #30b397 on hover and #a0d4c8 while pressed; the headline stays #4a4a4a and description #9b9b9b.'
  card-viveland:
    type: card
    textColor: '#4a4a4a'
    rounded: 0px
    height: 441px
    padding: 0px
    typography: 16px / 400
    hover: 'Child image transform: matrix(1.1, 0, 0, 1.1, 0, 0); label colours unchanged.'
    pressed: Child image keeps matrix(1.1, 0, 0, 1.1, 0, 0); no additional change from hover.
    use: 'Link to VIVELAND, 265.3px wide, transparent on its parent''s #f4f4f4 panel. The 240px square image enlarges within the image block. Content ink is #4a4a4a; the category label is #9b9b9b at 24px/400.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Montserrat
    companion: Noto Sans TC
---

# Design System Inspiration of HTC

## Overview

### Visual Theme & Atmosphere

HTC makes mobile and immersive technology products and platforms. Established on 15 May 1997, it describes an evolution from handheld computing and smartphones toward connected devices, virtual reality and VIVERSE. Its company philosophy, “Dare to Dream,” connects that evolution to human needs, technology and imagination. These are HTC's own statements on its [company page](https://investors.htc.com/en/about-htc/).

The live homepage expresses this through large product imagery and compact actions. The captured VIVE Eagle slide places close-up AI glasses against vivid vertical colour panels, then sets a white title and a small mint-bordered action on a black image area. Below it, white space, restrained grey captions and square product panels let the hardware and experiences carry the visual identity. VIVERSE creation, VR headsets, accessories and VIVELAND appear alongside the AI glasses in the homepage content. This is an observation of the [live marketing page](https://www.htc.com/tw/), rather than an asserted company design principle.

The measured homepage is the Taiwan edition (`htc.com/tw/`), with HTML `lang="zh-TW"`; it retained that path in the capture browser.

### Brand Narrative

HTC's company page traces its immersive-technology direction from the VIVE Reality concept in 2018 to VIVERSE. The captured homepage gives that direction a concrete product setting through AI glasses, VR hardware and immersive experiences. [Company](https://investors.htc.com/en/about-htc/), [homepage](https://www.htc.com/tw/).

### Principles

HTC names Humanity, Technology and Imagination as its corporate pillars. For this measured surface, practical design patterns are large product imagery, restrained captions and image-level interaction. The latter are observations of the page, rather than additional official principles. [Company](https://investors.htc.com/en/about-htc/).

### Personas

No personas or user-research findings were verified.

## Colors

These names describe measured roles, not a published HTC variable taxonomy. The site's 28 custom properties are Bootstrap defaults; the HTC styling is supplied by ordinary CSS rules in its [first-party stylesheet](https://www.htc.com/static/app/htc_dist/styles.css?v=202610190135).

| Role | Value | Measured use |
|---|---|---|
| Primary / accent | `#4bd6b8` | Eagle CTA border and label; filled carousel action backgrounds |
| Accent dark | `#30b397` | Charger anchor's computed hover colour; filled CTA's offscreen keyboard-focus background and border |
| Accent light | `#a0d4c8` | Charger anchor's computed pressed colour; its visible headline does not inherit this change |
| Foreground | `#f8f9fa` | Dominant sampled paragraph ink, eight `<p>` elements; this is the light text context, not the lower cards' dark ink |
| Content ink | `#4a4a4a` | Charger headline and VIVELAND content |
| Muted | `#9b9b9b` | Charger description, VIVELAND category label and footer links |
| Canvas | `#ffffff` | Ground behind the charger card and Eagle CTA fill |
| Surface | `#f4f4f4` | Ground behind the VIVELAND card; 13 non-transparent backgrounds in the census |

Paragraph ink is contextual: the census also found one `<p>` in `#9b9b9b`. The `foreground` value therefore must not be applied to the white lower-page canvas indiscriminately. The stylesheet's body rule separately declares dark `#4a4a4a`.

## Typography

- **Official product use:** no opened HTC typography document names a company-wide product face.
- **Live-loaded:** Montserrat and Noto Sans TC each loaded at 300, 400 and 500, normal style. Body, the first `h1`, and a button declare `Montserrat, "Noto Sans TC", sans-serif`. The homepage requests both families through Google Fonts CSS. These are the two families in the machine-readable typography roles.
- **Official distributed assets:** the first-party stylesheet declares FontAwesome, fontello and icomoon files under `public/fonts/`; all three icon families loaded. They are icon assets and are excluded from text-family roles. No separately documented HTC text-font distribution was verified.
- **Declared-only:** Bootstrap's root sans and monospace stacks remain in CSS. Their presence supplies no evidence of HTC brand-face selection and they are excluded from the typography tokens.
- **Unresolved:** exact per-glyph font selection and redistribution licences were not measured or opened. Substitute: none chosen.

Use the measured scale locally: CTA and navigation anchors are 14px/400; the charger anchor is 16px/400 with a **16px/500 visible headline**; the VIVELAND category label is **24px/400**. CTA tracking is 0.8px and navigation/card-anchor tracking is 0.5px. CTA line heights differ: 12px on Eagle and 14px on the filled carousel link; card-anchor line height is 24px.

## Layout

At the measured 1440 × 1000px viewport, a sticky 54px header overlays the hero. The page then presents a three-column strip of service/accessory links, a second three-column set of experience and phone panels, and a multi-column footer. The charger link is 370px wide; the smaller VIVELAND anchor is inset into its grey panel. These are desktop observations from the survey screenshot and element geometry, rather than a responsive grid specification.

### Responsive Behavior

Only desktop 1440 × 1000px was captured; mobile layouts and breakpoint behaviour were not measured.

## Elevation & Depth

The measured product links have `box-shadow: none`; visual separation comes from imagery, white space and the grey panel background. The header has two observed backdrop contexts, `rgba(0, 0, 0, 0.4)` and `rgba(255, 255, 255, 0.95)`. These alpha values are observations, not opaque colour tokens.

## Motion & Easing

The measured card endpoint is a child-image scale of 1.1×. Each card anchor's raw computed transition is `all 0s ease 0s`; that does not describe the image descendant's timing. The first-party stylesheet declares `transition:all .3s` on the lower panel images. This is declared CSS evidence, not a separately captured computed easing curve for the image. No image easing token is supplied.

Both carousel CTA identities report this raw computed transition verbatim:

```text
color, background-color, border-color, box-shadow 0.15s, 0.15s, 0.15s, 0.15s ease-in-out, ease-in-out, ease-in-out, ease-in-out 0s, 0s, 0s, 0s
```

Its presence describes the CTA declaration; it does not supply the unmeasured pointer-state endpoints.

## Components

**Charger card link — HTC 65W GaN 三孔快充頭.** The anchor is 370 × 280.6px, radius 0, padding 0 and no border or shadow. It is transparent on `#ffffff`. The visible headline is `#4a4a4a` and its description `#9b9b9b`. On hover and while pressed, its image changes from `none` to `matrix(1.1, 0, 0, 1.1, 0, 0)`. The anchor's own colour changes from `#4bd6b8` to `#30b397`, then to `#a0d4c8` while pressed; the visible caption colours remain unchanged.

**VIVELAND card link.** The anchor is 265.3 × 441px, radius 0, padding 0, with no border or shadow. It is transparent on its parent's `#f4f4f4` panel. A 240 × 240px image sits between a `#9b9b9b` category label and `#4a4a4a` content. Hover and press produce the same 1.1× image transform, without changing the label colours.

**Carousel action geometry.** Eagle's “了解更多” link is 130 × 32px, radius 30px, padding 9px 30px, white fill, mint label and a 1px mint border. The filled VIVELAND slide link is 130 × 34px, the same radius and padding, mint fill and white label. These rest measurements are useful reference material; pointer states were not captured because the slides were outside the viewport at that stage. Their offscreen focus readings are retained in the verification notes, without published CTA component tokens.

**Navigation geometry.** The header “產品” link is 29 × 53px, radius 0, padding 19px 0px 17px. Its sampled text is white over the top-of-page header and dark grey in the pale header context. The state run crossed those contexts, so it does not establish an isolated hover colour rule.

No visible search input was present in the survey's interactive-element list; no input component is specified.

### States

Both card images zoom on verified hover (`:hover=true`) and press (`:active=true`). VIVELAND has no additional pressed difference from hover. Charger additionally changes its anchor's computed colour on press, while its visible caption remains fixed. Keyboard focus was reached by real Tab presses and produced no compared visual-property change on either card; no focus token is declared.

That “no change” is limited to each anchor, its label, six charger or nine VIVELAND descendants and their pseudo-elements, plus three ancestor levels. It is not a claim about cross-origin frames, canvas pixels or sibling UI. CTA hover/press remain UNMEASURED; their focus samples were offscreen. Disabled states were not tested.

## Do's and Don'ts

- Preserve the combination of square content panels and small, strongly rounded CTA links.
- Keep image zoom on the child image; the measured card anchors themselves do not scale.
- Preserve the caption's own dark and muted colours when changing an anchor's inherited colour.
- Keep HTC marks intact. Its [trademark guidelines](https://www.htc.com/us/about/htc-trademark-usage-guidelines/) require supplied marks to retain their visual design; the page is a licensing policy, not a public token manual.
- Exclude the default blue Bootstrap palette and icon fonts from HTC text and colour roles.

## Voice & Tone

The homepage pairs short benefit statements with brief actions: creation and exploration for VIVERSE, charging three devices for the charger, and “了解更多” for exploration. This is observed page copy, not a verified editorial style guide. [Homepage](https://www.htc.com/tw/).

## Agent Prompt Guide

“Build a desktop HTC-style product card link on white: a square 370 × 280.6px anchor with zero padding and no shadow, a dark 16px/500 headline, a muted description and an image that reaches `matrix(1.1, 0, 0, 1.1, 0, 0)` on hover and press. Use the live-loaded Montserrat/Noto Sans TC stack; preserve the caption colours independently of the anchor.”

“Build an experience panel with a `#f4f4f4` ground, a square 240px image, a 24px/400 muted category label and dark content. Give the inner link the measured VIVELAND geometry, 265.3 × 441px at this desktop width.”
