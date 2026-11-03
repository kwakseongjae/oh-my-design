---
name: Mercedes-Benz
colors:
  primary: '#0078d6'
  primary-hover: '#006abc'
  primary-active: '#0060ab'
  foreground: '#333333'
  background: '#ffffff'
  contrast: '#000000'
  muted-foreground: '#696969'
  nav-foreground: '#e8e8e8'
  card: '#f8f8f8'
  border: '#9f9f9f'
  surface-hover: '#ebebeb'
  surface-active: '#e0e0e0'
typography:
  button:
    fontSize: 16px
    fontWeight: 700
  model-card-title:
    fontSize: 34px
    fontWeight: 400
  activity-card-title:
    fontSize: 18px
    fontWeight: 700
rounded:
  sharp: 0px
  softer: 1px
  subtle: 4px
  main: 12px
  soft: 24px
components:
  models-secondary:
    type: button
    textColor: '#333333'
    border: '1px solid #9f9f9f'
    rounded: 9999px
    height: 45px
    padding: 11px 23px
    typography: 16px / 700
    hover: 'bg #ebebeb; border 1px solid #a9a9a9'
    pressed: 'bg #e0e0e0; border 1px solid #b2b2b2; shadow #5c5c5c 0px 0px 0px 1px inset'
    use: 'Alle Modelle entdecken — a link styled as a secondary action, transparent over #ffffff at rest. MBCorpo Text label; keyboard focus unmeasured.'
  nav-services:
    type: button
    textColor: '#e8e8e8'
    rounded: 12px
    height: 29px
    padding: 4px 12px
    typography: 16px / 400
    hover: bg rgba(255, 255, 255, 0.1); shadow rgba(0, 0, 0, 0.1) 0px 0px 2px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px
    pressed: 'bg rgba(255, 255, 255, 0.2); fg #cccccc; outline #0078d6 solid 1px offset 0px; same shadow as hover'
    use: 'Services — a navigation link, transparent over the #000000 header at rest. The pressed snapshot also has pointer focus; keyboard focus unmeasured.'
  search-trigger:
    type: button
    textColor: '#e8e8e8'
    rounded: 12px
    height: 32px
    padding: 4px
    typography: 16px / 400
    hover: bg rgba(255, 255, 255, 0.1); shadow rgba(0, 0, 0, 0.1) 0px 0px 2px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px
    pressed: 'bg rgba(255, 255, 255, 0.2); fg #cccccc; outline #0078d6 solid 1px offset 0px; same shadow as hover'
    use: 'Suchen — an icon action link, transparent over the #000000 header at rest. Its 24px icon changes paint with the pressed foreground. Pointer focus is present in that snapshot; keyboard focus unmeasured.'
  store-card:
    type: card
    backgroundColor: '#f8f8f8'
    textColor: '#333333'
    rounded: 12px
    height: 162px
    padding: 0px
    typography: 18px / 700
    shadow: rgba(0, 0, 0, 0.1) 0px 0px 2px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px
    hover: 'bg #e4e4e4'
    pressed: 'bg #dadada; ::after background #0060ab (from #006abc), with its off-card transform unchanged'
    use: Mercedes-Benz Store — a card link. Font describes the visible title; its anchor wrapper is 16px/400. Keyboard focus unmeasured.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: MBCorpo Text
    display: MBCorpo Title
---

# Design System Inspiration of Mercedes-Benz

## Overview

### Visual Theme & Atmosphere

Mercedes-Benz offers premium and luxury passenger cars and vans. Its German sales site connects model discovery, configuration, vehicle offers and service. The company's design page describes clear forms and sensual surfaces that stage technology while evoking emotion; it connects the 300 SL's heritage with the S-Class and EQS. The official history page frames that continuity as “The future of mobility since 1886.” [Company](https://group.mercedes-benz.com/company/), [design philosophy](https://www.mercedes-benz.de/passengercars/technology/design-and-concept-cars.html), [history](https://www.mercedes-benz.com/en/innovation/milestones/corporate-history/).

On the measured German homepage (`mercedes-benz.de/`, HTML `lang="de-DE"`), a black header and photographic hero lead into white sections, condensed serif headings, pale activity cards and blue pill-shaped actions. The first-party Workbench variables connect these visual choices to named colour, typography, shape and layout roles. An official job posting dated 16 October 2026 identifies Workbench as the design system behind customer-facing sales websites and reports that its latest Digital Design version launched globally that September. This is a reference to the live sales surface; the posting supplies context for its current evolution. [Workbench posting](https://jobs.mercedes-benz.com/intern-product-management-customer-facing-sales-design-system-mandatory-internship-242766-mer00048pl).

The action hierarchy is concrete: the blue “Mehr erfahren” hero link is 53px high with a 9999px radius, #0078d6 fill and #ffffff text. The outlined “Alle Modelle entdecken” link is 45px high; its transparent background becomes #ebebeb on hover and #e0e0e0 on press. Both labels are 16px/700 MBCorpo Text. Mercedes-Benz AG's imprint gives its address as Mercedesstraße 120, 70372 Stuttgart. [Imprint](https://www.mercedes-benz.de/passengercars/content-pool/tool-pages/legal/copyright.html).

### Brand Narrative

The first-party design page connects established icons with modern vehicles, using clear form and sensual surfaces to express luxury. The live site pairs that story with large imagery and condensed serif display type, then offers concrete model, configuration and service actions. The October 2026 Workbench posting adds a current digital chapter: a global Digital Design release and ongoing work on adoption and documentation. [Design philosophy](https://www.mercedes-benz.de/passengercars/technology/design-and-concept-cars.html), [Workbench](https://jobs.mercedes-benz.com/intern-product-management-customer-facing-sales-design-system-mandatory-internship-242766-mer00048pl).

### Principles

The company's stated design ambition joins technology and emotion. For this captured sales interface, the repeatable patterns are a strong image-and-type hierarchy, a blue primary action, an outlined secondary action and distinct card treatments. These implementation patterns are observations of this page. [Stated design ambition](https://www.mercedes-benz.de/passengercars/technology/design-and-concept-cars.html).

### Personas

No persona research was verified.

## Colors

The census found 4,005 computed root custom properties: 4,000 `--wb-*`, four `--wbx-*` grid aliases and one `--aemf-*` implementation variable. The palette below uses first-party Workbench values and computed product-control colours. The primary-button hover and active entries are root declarations; the hero link's corresponding states remain unmeasured. The secondary link's surface hover and active colours were measured directly.

| Role | Value | Direct evidence |
|---|---|---|
| Primary action | `#0078d6` | `--wb-button-primary-background-color-default`; hero link rest background and border |
| Primary hover token | `#006abc` | `--wb-button-primary-background-color-hover` |
| Primary active token | `#0060ab` | `--wb-button-primary-background-color-active` |
| Foreground | `#333333` | Most frequent paragraph ink: 31 `<p>` elements; secondary action and card labels |
| Background | `#ffffff` | `--wb-color-surface-main-default`; white page behind the secondary action |
| Contrast ground | `#000000` | `--wb-color-text-strongest-default`; computed ground behind header links |
| Muted foreground | `#696969` | `--wb-color-text-weakest-default`; four paragraphs |
| Header foreground | `#e8e8e8` | Services label and Suchen icon at rest |
| Activity card | `#f8f8f8` | `--wb-color-shape-weaker-default`; Mercedes-Benz Store link background |
| Secondary border | `#9f9f9f` | `--wb-button-secondary-border-main-color-default`; measured 1px border |
| Surface hover | `#ebebeb` | `--wb-color-surface-main-hover`; secondary action hover background |
| Surface active | `#e0e0e0` | `--wb-color-surface-main-active`; secondary action pressed background |

The secondary action's own background is `rgba(255, 255, 255, 0)` over white. Header links use `rgba(0, 0, 0, 0)` over black. Preserve that relationship when using the rest appearances.

Consent `--cmm-*` variables and assistant-specific `--ft-*`, `--reveal-order` and chat background aliases are excluded from the reference palette. The census also includes those layers, so its frequency ranking is not a clean product-only palette.

## Typography

**Live-loaded:** `document.fonts` reports **MBCorpo Title 400 normal**, **MBCorpo Text 400 normal** and **MBCorpo Text 700 normal**. These are the two families in the typography tokens. The sampled H1 declares MBCorpo Title first; both measured CTA links declare MBCorpo Text and use 16px/700, normal line-height and 0.2px letter spacing.

**Official product-use documentation:** no public font guideline was verified that independently names these exact CSS families for the German sales site. Their use here is supported by the live-loaded census, CSS declarations and control identities.

**Official distributed assets:** the census records `@font-face` sources on `assets.oneweb.mercedes-benz.com/plugin/workbench/fonts/2.5.0/`. The loaded faces correspond to `WOFF2/MBCorpoATitleCond-Regular-Web.woff2`, `WOFF2/MBCorpoSText-Regular-Web.woff2` and `WOFF2/MBCorpoSText-Bold-Web.woff2`. These are observed source references; no font file was downloaded separately and no reuse licence was verified.

**Declared-only:** the same census lists MBCorpo S Title at 400/700/800, MB Corpo A Screen1 Cond WEB and MB Corpo A Screen2 Cond WEB at declared weight 700, DaimlerCAC-Regular, DaimlerCS-Regular, DaimlerCACArab-Regular, DaimlerCSArab-Regular, Hanyi and Hanyi-Ext. None appears in the loaded-face list. They receive no specimen or family token. The body declaration reports Apple SD Gothic Neo and the first sampled button reports Arial; those environmental declarations also do not establish a product face.

**Unresolved:** font reuse rights and coverage beyond the captured German page. **Substitute: none chosen.**

Additional measured label metrics are 34px/400 for the Limousinen model-range card and 18px/700 for the Mercedes-Benz Store card title. Their anchor wrappers report 16px/400; use the child label's measurement for the visible title. The hero heading's size was not measured.

## Layout

Build the desktop composition around the captured sequence: centred star in a black header, photographic hero with copy and action aligned left, promotional tiles, model-range discovery, a three-column activity-card grid, service/editorial sections and a black footer. The header's declared height is 84px.

The root grid declares 12 columns, `--wb-grid-content-width: 86%`, `--wb-grid-width: min(86%, 105rem)` and `--wb-grid-gutter-width: 2.5rem`. The measured hero and first card begin at x=100px in the 1440 × 1000 capture. These are desktop observations.

Static spacing declarations include `.25rem` tiniest, `.5rem` tiny, `.75rem` smallest, `1rem` smaller, `1.5rem` small, `2rem` medium, `2.5rem` large, `3rem` larger, `4rem` largest, `4.5rem` huge, `5rem` huger, `5.5rem` hugest and `6rem` jumbo. Preserve the measured CTA paddings separately from this named spacing scale.

### Responsive Behavior

Mobile layouts and breakpoint behaviour were not measured; the capture was desktop 1440 × 1000 only.

## Elevation & Depth

The Mercedes-Benz Store activity card has this computed rest shadow:

```css
box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 2px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px;
```

Both action links, both header links and the Limousinen anchor report `box-shadow: none` at rest. The photographed hero and the pale activity-card surface carry much of the visible separation.

## Motion & Easing

The hero and secondary actions declare colour/background transitions of `0.2s` with `cubic-bezier(0, 0, 0.3, 1)`. Header Services and Suchen links declare padding, colour, background and shadow transitions of `0.2s` using `ease-in-out`. The Store card declares a `0.3s` background transition with `cubic-bezier(0, 0, 0.3, 1)`. The Limousinen anchor itself declares `all 0s ease 0s`.

These are raw computed transition declarations from the control identities. The valid secondary and header samples settled after 900ms, beyond their 200ms longest reported transition; the Store samples settled after 900ms, beyond 300ms. The Limousinen sample reported a 400ms longest transition, but no descendant transition string or isolated interaction animation was verified. Reduced-motion behaviour was not measured.

## Components

Use the measured rest appearances below with the pointer states in §14. Four controls have direct hover and pressed styling measurements. The capture temporarily hid fixed overlays for the pointer pass; consent remained open and trapped keyboard focus. No keyboard-focus or disabled token is supplied.

| Control | Rest geometry and type | Rest paint |
|---|---|---|
| Hero “Mehr erfahren” link | 170.3 × 53px; radius 9999px; padding 15px 31px; 16px/700 MBCorpo Text | `#0078d6` fill and 1px border; `#ffffff` label; no shadow |
| “Alle Modelle entdecken” link | 222.9 × 45px; radius 9999px; padding 11px 23px; 16px/700 MBCorpo Text | Transparent over `#ffffff`; `#333333` label; 1px `#9f9f9f` border; no shadow |
| Header “Services” link | 84.7 × 29px; radius 12px; padding 4px 12px; label 16px/400 | Transparent over `#000000`; `#e8e8e8` label; no border or shadow |
| Header “Suchen” link | 32 × 32px; radius 12px; padding 4px; 24 × 24px icon | Transparent over `#000000`; icon paint `#e8e8e8`; no border or shadow |
| “Mercedes-Benz Store” card link | 381.8 × 162px; radius 12px; anchor padding 0px; title 18px/700 | `#f8f8f8` fill; `#333333` title; two-layer shadow described below |
| “Limousinen” model-range card link | 381.8 × 154px; anchor radius 0px and padding 0px; title 34px/400 | Transparent anchor over white; `#333333` title; background artwork and vehicle image are descendants |

There was no product search input in the survey. Suchen is an action link; the only enumerated input belongs to the assistant widget and is excluded.

Workbench's radius variables are `sharp: 0px`, `softer: 1px`, `subtle: 4px`, `main: 12px`, `soft: 24px`, and `round: 9999px`. The latter produces the measured CTA pills. The square Limousinen anchor does not establish the radius of its child artwork.

### States

The resumed capture measured pointer states with `hideOverlays: true`, hiding fixed layers inside open shadow roots. The necessary-only consent button reads “Nur technisch notwendige”; consent was not rejected. All six keyboard-focus states are **UNMEASURED**: the Tab walk stopped after 13 presses in the consent dialog. Pressed snapshots below have both `:active` and pointer focus, with `:focus-visible` false; they do not establish keyboard-focus behaviour.

| Control | Hover | Pressed |
|---|---|---|
| “Alle Modelle entdecken” | Background `#ebebeb`; 1px border changes to `#a9a9a9` | Background `#e0e0e0`; 1px border `#b2b2b2`; inset shadow `#5c5c5c 0px 0px 0px 1px inset` |
| Header “Services” | Background `rgba(255, 255, 255, 0.1)` and the two-layer shadow from §6 | Background `rgba(255, 255, 255, 0.2)`; label changes to `#cccccc`; same shadow; `#0078d6 solid 1px` outline at 0px offset |
| Header “Suchen” | Background `rgba(255, 255, 255, 0.1)` and the two-layer shadow from §6 | Background `rgba(255, 255, 255, 0.2)`; foreground and icon paint change to `#cccccc`; same shadow; `#0078d6 solid 1px` outline at 0px offset |
| “Mercedes-Benz Store” | Background `#e4e4e4` | Background `#dadada`; `::after` background changes from `#006abc` to `#0060ab` |

The Store card's `::after` stays at `matrix(1, 0, 0, 1, -383.828, 0)` in these snapshots. Its colour change alone does not establish a visible stripe moving into the card. The hero's hover and press remain **UNMEASURED** because `:hover` did not match even though the hit test named the intended link; its primary hover/active variables remain declaration evidence only.

The Limousinen anchor's own paint did not change in the compared snapshots, but its image subtree grew from five to ten descendants and the original image became hidden. Press added no delta over hover. This capture does not isolate interaction styling from image loading, so the card remains a prose observation without a component token. No post-blur pointer snapshot is present to resolve that question. Disabled and validation states were not measured.

## Do's and Don'ts

- Use the loaded MBCorpo Title and MBCorpo Text evidence for typography; keep unavailable faces without specimens.
- Pair the blue primary pill with a transparent, outlined secondary pill on white.
- Give activity cards the measured 12px corners and subtle two-layer shadow; retain the separate model-range card structure.
- Use child label measurements when they differ from an anchor wrapper.
- Use the secondary action's measured grey hover and pressed fills, with its border and inset-shadow changes.
- Keep the hero's named hover/active declarations separate from measured interactions; its pointer states remain unmeasured.

## Voice & Tone

The German surface addresses visitors with formal “Sie” and direct action labels such as “Mehr erfahren” and “Alle Modelle entdecken.” Its design page uses aspirational language around luxury, technology and emotional appeal. These are observations of the opened copy, rather than a verified editorial style guide. [Design page](https://www.mercedes-benz.de/passengercars/technology/design-and-concept-cars.html).

## Agent Prompt Guide

“Create a Mercedes-Benz-inspired desktop automotive sales page with a black header, photographic hero, loaded MBCorpo Title display type and MBCorpo Text copy. Use white content sections and pale #f8f8f8 activity cards with 12px corners. Match the measured hero action's rest appearance: #0078d6 fill and border, #ffffff 16px/700 label, 15px 31px padding and a 9999px radius. Use the transparent outlined secondary action on white, with #ebebeb hover and #e0e0e0 pressed fill. Follow the measured border, shadow and card states in this reference.”
