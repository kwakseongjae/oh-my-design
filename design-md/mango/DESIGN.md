---
name: Mango
colors:
  primary: '#131313'
  foreground: '#121212'
  canvas: '#ffffff'
  inverse: '#fdfdfd'
  brand-hover: '#434343'
  brand-active: '#2a2a2a'
  content-medium: '#424242'
  content-soft: '#737373'
  background-muted: '#ececec'
  border-soft: '#c7c7c7'
  disabled: '#dadada'
  background-subtle: '#f5f1eb'
  background-highlight: '#e0d4c2'
  alert: '#ba0000'
  promotions-hover: '#d33030'
  success: '#008905'
  warning: '#b25d2e'
typography:
  body:
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
    use: E-mail label in the survey; semantic body-m computes to .8125rem / 1.25rem / 400
  action:
    fontSize: 12px
    fontWeight: 600
    lineHeight: 16px
    use: Solo cookies necesarias; declared HeadingsFontES is unresolved, so this records metrics only
  text-action:
    fontSize: 13px
    fontWeight: 600
    lineHeight: 20px
    use: Configurar cookies; DefaultFontES is live-loaded
rounded:
  none: 0px
spacing:
  horizontal-none: 0
  horizontal-xsm: 8
  horizontal-sm: 16
  horizontal-md: 32
components:
  hero-mujer:
    type: button
    textColor: '#fdfdfd'
    rounded: 0px
    height: 48px
    padding: 0px 20px
    typography: 12px / 600
    hover: 'Text turns #f4f4f4 and gains a solid #f4f4f4 underline.'
    focus: 'Text turns #434343; a 2px solid #ffffff border sits inside a 2px solid #121212 outline at offset 0, and a 4px #ffffff box-shadow spread shows as a white halo outside the outline (the link widens from 82.8px to 86.8px).'
    use: Mujer, an uppercase collection link over the hero photograph.
  nav-mujer:
    type: button
    textColor: '#131313'
    rounded: 0px
    height: 16px
    padding: 0px
    typography: 12px / 600
    focus: 'Text turns #434343 and a 2px solid #121212 outline appears at offset 1px.'
    use: Mujer, the first uppercase collection link in the sticky header. Its hover opens the menu and did not register in the probe.
  search-link:
    type: button
    textColor: '#131313'
    rounded: 0px
    height: 24px
    padding: 0px
    typography: 12px / 600
    focus: 'Text and icon turn #434343; 2px solid #121212 outline at offset 2px.'
    use: Buscar, the header search link with an icon.
  footer-ayuda:
    type: button
    textColor: '#131313'
    rounded: 0px
    height: 38px
    padding: 7px 0px
    typography: 12px / 600
    focus: 'Text turns #434343; 2px solid #121212 outline at offset 2px.'
    use: Ayuda, a footer link.
fonts:
  roles:
    sans: DefaultFontES
    display: InspirationalFontES
---

# Design System Inspiration of Mango

## Overview

### Visual Theme & Atmosphere

Mango is a fashion retailer founded in Barcelona in 1984. Its collections span Woman, Man, Kids, Teen and Home; its own description of womenswear places contemporary fashion in a Mediterranean context. Mango says it aims to inspire each woman to develop her own style. [Company origin](https://mangofashiongroup.com/en/w/mango-strengthens-its-presence-in-paris-with-the-reopening-of-its-les-halles-store), [Our lines](https://mangofashiongroup.com/en/our-lines)

That direction extends through **Craft Your Own Story**. Mango's October 2025 campaign release describes an invitation to explore personal style and choose how to present oneself. Its more recent evolution also has a physical expression: the October 2026 Les Halles reopening uses the **New Med** store concept, with natural textures, warm tones and a welcoming Mediterranean-home idea, within the 4E 2024–2026 plan. These are brand and store-design contexts; their materials are not website colour tokens. [Campaign](https://mangofashiongroup.com/en/w/mango-y-kaia-gerber-deslumbran-con-su-lado-m%C3%A1s-nocturno-y-festivo-en-la-nueva-colecci%C3%B3n-party-), [New Med, October 2026](https://mangofashiongroup.com/en/w/mango-strengthens-its-presence-in-paris-with-the-reopening-of-its-les-halles-store)

The captured Spanish shop expresses that identity through a full-width fashion photograph, a large serif campaign line and compact uppercase navigation. The interface uses near-black **#131313**, a white **#ffffff** canvas and square controls; the photograph supplies the prominent colour. A centred wordmark sits between collection navigation and shopping tools. These are observations of the desktop entry page, not a published brand manual. [Live shop](https://shop.mango.com/es/es)

The entry page offers the five collection links and a search link. The worker's capture left the consent panel open; the link states below were re-measured with it rejected.

### Brand Narrative

Barcelona is a continuing part of Mango's story: the corporate history starts with its first shop on Paseo de Gracia and later describes El Hangar as the design centre where its collections are created. It also records the launch of Mango's own e-commerce. The corporate home describes an integrated distribution business combining stores, franchises, wholesale and its own online shop. [History](https://mangofashiongroup.com/en/our-history), [Company](https://mangofashiongroup.com/en/home)

For this reference, the connection between that story and the live visual treatment is an interpretation: the large photographic surface and serif campaign line carry the fashion expression, while small neutral controls support browsing. The store concept and the website share brand context; no store-material palette has been imported into the UI tokens.

### Principles

These are implementation lessons from this capture, rather than claims of official design principles:

- Give the image more visual weight than the navigation.
- Preserve separate semantic content, background and border roles even where their colour values match.
- Express feedback through the measured neutral steps (**#434343** hover, **#2a2a2a** active); keep keyboard focus distinguishable with the separate outline.

### Personas

Personas were not researched.

## Colors

The live census contains **215 computed root custom properties**, including 86 `--sem-color-*` entries. The following roles retain the site's semantic names. Repeated values across content, background and border roles are intentional.

| Role | Value | Raw source |
|---|---|---|
| Primary / brand default | **#131313** | `--sem-color-content-brand-default`, `--sem-color-background-brand-default`, `--sem-color-border-brand-default` |
| Foreground / core | **#121212** | `--sem-color-content-core`; also the authored focus-outline colour |
| Canvas / surface | **#ffffff** | `--sem-color-background-main`, `--sem-color-background-surface` |
| Brand inverse | **#fdfdfd** | `--sem-color-content-brand-inverse-default`; hero-link rest ink |
| Brand hover | **#434343** | `--sem-color-content-brand-hover`, `--sem-color-border-brand-hover`; measured on consent buttons |
| Brand active | **#2a2a2a** | `--sem-color-content-brand-active`, `--sem-color-border-brand-active`; measured while pressed |
| Medium content | **#424242** | `--sem-color-content-medium` |
| Soft content | **#737373** | `--sem-color-content-soft` |
| Muted background | **#ececec** | `--sem-color-background-muted` |
| Soft border | **#c7c7c7** | `--sem-color-border-soft` |
| Disabled background / border | **#dadada** | `--sem-color-background-disabled`, `--sem-color-border-disabled`; token evidence only |
| Subtle background | **#f5f1eb** | `--sem-color-background-subtle` |
| Highlight background | **#e0d4c2** | `--sem-color-background-highlight` |
| Alert / promotion default | **#ba0000** | `--sem-color-content-alert`, `--sem-color-content-promotions-default` |
| Promotion hover | **#d33030** | `--sem-color-content-promotions-hover` |
| Success | **#008905** | `--sem-color-content-success` |
| Warning | **#b25d2e** | `--sem-color-content-warning` |

The paragraph census has a tie: three white paragraphs and three **#121212** paragraphs. `foreground` therefore follows the explicit core-content token, rather than treating the most frequent overall text colour as body ink. Overall text counts favour **#131313** (43), then **#121212** (8).

## Typography

### Evidence classes

| Class | Verified evidence |
|---|---|
| Official product use, stated by Mango | No opened company typography guideline names a product typeface. No such claim is made. |
| Live-loaded | `document.fonts` reports **DefaultFontES 400 normal**, **DefaultFontES 600 normal** and **InspirationalFontES 400 normal**. Only these families enter the family tokens. |
| Official distributed assets | The shop's `@font-face` rules reference same-origin Spanish-subset WOFF2 files, listed below. No separate downloadable font kit or font licence was verified. |
| Declared-only | **HeadingsFontES** is the computed family on navigation, the hero links and the bordered consent button, but is absent from both the loaded-face list and the captured `@font-face` list. **PromotionalFontES** 900, **DefaultFont** 400/600, **mangoNewMedium** 500, **mangoHeritageHeadlineRegular** 400 and **mangoNewCondensedExtraBold** 800 also have no loaded entry in this capture. They receive no specimen. |
| Unresolved | The actual rendered face behind the `HeadingsFontES` declaration, any mapping of that alias to a named Mango face, and reuse rights. |

The loaded aliases are linked to these source paths by the captured `@font-face` declarations:

- `DefaultFontES` 400 → `/fonts/MangoNew-Regular/subsets/MangoNew-Regular-es.woff2`.
- `DefaultFontES` 600 → `/fonts/MangoNew-SemiBold/subsets/MangoNew-SemiBold-es.woff2`.
- `InspirationalFontES` 400 → `/fonts/MangoHeritageHeadline-Regular/subsets/MangoHeritageHeadline-Regular-es.woff2`.

Body and h1 declare `DefaultFontES, sans-serif`. The census's generic button sample does not establish a loaded product action face; the individual control records supply their own declarations and metrics. The loaded-face evidence and the per-control declarations remain separate. **Substitute: none chosen.** [Live font census](https://shop.mango.com/es/es)

### Metrics

The semantic weight labels are distinctive: `--sem-font-weight-light` is **400**, `--sem-font-weight-regular` is **600**, and `--sem-font-weight-black` is **900**. Preserve those actual values when interpreting the names.

| Context | Size / line height / weight | Evidence |
|---|---|---|
| Body M | `.8125rem / 1.25rem / 400` | Computed `--sem-font-body-m-*`; the E-mail label measures 13px / 20px / 400 |
| Action M | `.75rem / 1rem / 600` | Computed `--sem-font-action-m-*`; bordered consent button measures 12px / 16px / 600 |
| Text action | `13px / 20px / 600` | Configurar cookies, declared and loaded `DefaultFontES` |
| Heading L | `1rem / 1.5rem / 600` | Computed `--sem-font-heading-l-*`; a CSS role, not a measured heading specimen |
| Display XL | `4.25rem / 4.5rem / 600` | Computed `--sem-font-display-xl-*` at this viewport |
| Inspirational title XXXL | `6rem / 6rem / 400` | Computed `--sem-font-inspirational-title-xxxl-*`; not assigned to a particular heading by this capture |

## Layout

At **1440 × 1000**, the sticky header measures **56px** high. Collection links start at x=32px; the 118 × 18px logo link is centred at x=661px. The hero photograph fills the width beneath it. The full-page capture then shows a centred newsletter area, region/language control, social links and a four-column footer.

Footer column starts are x=32, 384, 736 and 1088px in this desktop capture. This is an observed arrangement, not a verified general grid specification. Computed horizontal-padding tokens are `none: 0`, `xsm: 8px`, `sm: 16px` and `md: 32px`. Component padding supplies the more specific 10px 24px action inset and 20px hero-link inset.

### Responsive Behavior

Only desktop **1440 × 1000** was rendered. Computed breakpoint declarations are `--breakpoint-m: 600px`, `--breakpoint-l: 1024px`, `--breakpoint-xl: 1920px` and `--breakpoint-height: 400px`; behaviour at those breakpoints was not tested.

## Elevation & Depth

All six inspected controls have `box-shadow: none`. The consent panel's inspected ancestor is white with a 1px **#c7c7c7** border and no shadow. The root also declares `--sem-color-background-scrim: #42424240` and `--sem-color-background-surface-onimage: #fafafae5`; these alpha colours remain prose evidence. No elevation scale was verified.

## Motion & Easing

The two measured consent controls have computed transitions listing `color`, `background-color` and `border-color`, each at **0.3s** with **`cubic-bezier(0.3, 0.85, 0.5, 1)`** and zero delay. The probe waited **900ms** per measured state, past the **300ms** longest transition. Exact raw transition strings are preserved in the verification Proof block.

The hero link's rest transition is `color 0.5s cubic-bezier(0.3, 0.85, 0.5, 1) 0s`; the header Mujer, Buscar and footer Ayuda rest transitions are `color 0.3s cubic-bezier(0.3, 0.85, 0.5, 1) 0s`. The hero link's hover and every link's focus were measured on these transitions; the probe waited 900ms, past the longest **500ms**. Reduced-motion behaviour was not tested.

## Components

The worker measured two buttons on Mango's own white consent panel while it was open. They are kept here as observations of the semantic hover and active steps, not as components: both have transparent backgrounds, `box-shadow: none` and **0px radius**.

| Control | Geometry | Rest styling |
|---|---|---|
| **Solo cookies necesarias** | 224 × 44px; padding 10px 24px; 12px/600, line height 16px | Text **#131313**, 1px solid **#131313** border; declared `HeadingsFontES` remains unresolved |
| **Configurar cookies** | 153 × 44px; padding 0px; 13px/600, line height 20px | Text and underline **#131313**, no border; `DefaultFontES` is live-loaded |

The product links were re-measured with the consent panel rejected and the country dialog closed. The hero Mujer link is 82.8 × 48px with 0px 20px padding and **#fdfdfd** ink; the header Mujer link is 42.8 × 16px; Buscar is 51.7 × 24px; footer Ayuda is 41.5 × 38px with 7px 0px padding. The last three use **#131313** ink. All four are transparent links with 0px radius, no border, no shadow and 12px/600 type with a 16px line height; their declared family is `HeadingsFontES` (unresolved; see Typography).

**States.** Keyboard focus on every link shifts the text to **#434343**, the semantic brand-hover step, and draws a **2px solid #121212** outline: offset 1px on the header Mujer link, 2px on Buscar and Ayuda. Over the photograph the hero link adds a 2px solid white **#ffffff** border inside the outline (offset 0) and a 4px white box-shadow spread that shows as a white halo outside it: white, dark, white from the inside out. On hover the hero link's text turns **#f4f4f4** and gains a solid **#f4f4f4** underline.

### States

Re-measured in a fresh-profile browser at 1440 × 1000 with the consent panel rejected (“Solo cookies necesarias”) and the “¿En qué país quieres comprar?” country dialog closed by its own “Cerrar” button (no country was chosen):

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| Hero Mujer | Text → **#f4f4f4**, solid **#f4f4f4** underline | UNMEASURED (`:active` did not match) | Text → **#434343**; 2px solid white border inside a **2px solid #121212** outline at offset 0, 4px white halo outside it |
| Header Mujer | UNMEASURED (opens the menu; `:hover` did not match) | UNMEASURED | Text → **#434343**; **2px solid #121212**, offset 1px |
| Buscar | UNMEASURED (covered by the open menu backdrop) | UNMEASURED | Text and icon → **#434343**; **2px solid #121212**, offset 2px |
| Footer Ayuda | UNMEASURED (outside the viewport) | UNMEASURED | Text → **#434343**; **2px solid #121212**, offset 2px |

Every focus outline is `solid`, and none persisted after blur.

The worker's capture, taken with the consent panel open, measured its two buttons:

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| Solo cookies necesarias | Text, visible label and border → **#434343** | Text, visible label and border → **#2a2a2a** | Text/label/border → **#434343**; **2px solid #121212**, offset **2px** |
| Configurar cookies | Text and underline → **#434343** | Text and underline → **#2a2a2a** | Text/underline → **#434343**; same authored outline |

No disabled state was measured.

## Do's and Don'ts

### Do

- Let fashion photography carry the strong colour; use the measured semantic neutrals for interface roles.
- Keep the measured consent actions square and 44px high, with distinct hover and pressed colours.
- Draw keyboard focus as a 2px solid **#121212** outline with the text shifted to **#434343**; over photography, put a white 2px border inside it and a 4px white box-shadow halo outside it.
- Keep font aliases, loading evidence and type metrics explicit.

### Don't

- Assume header links underline on hover: only the hero link's underline was measured; the header link's hover opens the menu.
- Convert the photograph's garment colours into interface tokens.
- Render an unloaded alias as a verified type specimen, or assign a replacement font by eye.

## Voice & Tone

The captured Spanish UI uses short commerce labels such as **Mujer**, **Buscar** and **Ayuda**, rendered uppercase in the screenshots. The hero's accessible collection-link labels append the Barcelona/1984 origin line. Mango's **Craft Your Own Story** campaign supplies a more expressive register centred on personal style and self-expression. This is a reading of the opened material, not a formal voice guideline. [Campaign source](https://mangofashiongroup.com/en/w/mango-y-kaia-gerber-deslumbran-con-su-lado-m%C3%A1s-nocturno-y-festivo-en-la-nueva-colecci%C3%B3n-party-)

## Agent Prompt Guide

“Build a Mango-style desktop fashion entry with a centred wordmark, compact uppercase collection navigation and a full-width fashion photograph. Use **#ffffff** surfaces and **#131313** interface ink. Preserve the separation between the loaded UI alias `DefaultFontES` and the loaded inspirational alias `InspirationalFontES`.”

“Set the collection links as uppercase 12px/600 text with no box: **#131313** in the header, **#fdfdfd** over the hero photograph with 0px 20px padding. On hover the hero link turns **#f4f4f4** and underlines. On keyboard focus every link shifts to **#434343** and gets a 2px solid **#121212** outline; over the photograph put a 2px white border inside it and a 4px white box-shadow halo outside it. Their declared `HeadingsFontES` face is unresolved; choose no substitute.”
