---
name: Finnair
colors:
  foreground: '#0c0243'
  bg-primary: '#f6f5f3'
  bg-landing: '#ffffff'
  surface-primary-hover: '#f0f4fd'
  surface-secondary: '#e1eafa'
  surface-tertiary: '#edebe6'
  surface-contrast-hover: '#0a1e60'
  surface-accent: '#3772de'
  surface-accent-hover: '#2f62c0'
  surface-accent-active: '#5f8ee5'
  text-icon-secondary: '#6b688c'
  border-primary: '#e2ded6'
  border-secondary: '#9ebbef'
  border-formfields: '#84808c'
  text-icon-disabled-text: '#9c99a3'
  surface-disabled-foreground: '#b5b3ba'
  surface-disabled-bg: '#e6e6e8'
  signal-success-tag-bg: '#0a6e40'
  signal-warning-tag-bg: '#f1cd73'
  signal-error-tag-bg: '#c92526'
typography:
  button:
    fontSize: 16px
    fontWeight: 500
    use: visible labels of Varaa nyt, Valitse päivät and Käytä vain välttämättömiä; live-loaded FinnairText
  navigation:
    fontSize: 16px
    fontWeight: 500
    use: Varaukseni header link; 24px line height
  card-title:
    fontSize: 20px
    fontWeight: 700
    use: Tukholma h3 inside the measured destination card link; family not separately sampled on this child
rounded:
  none: 0px
  card: 8px
  button: 40px
components:
  book-now:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#0c0243'
    border: '2px solid #0c0243'
    rounded: 40px
    height: 40px
    padding: 6px 12px
    typography: 16px / 500
    hover: 'Background turns from #ffffff to #f0f4fd (the declared --surface-primary-hover).'
    pressed: 'Same as hover: background #f0f4fd.'
    focus: 'outline 2px solid #0c0243; outline-offset: 3px'
    use: Varaa nyt — a link to the Melbourne destination page. Visible label is 16px/500; anchor box computes 20px/400.
  date-select:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#0c0243'
    border: '2px solid #0c0243'
    rounded: 40px
    height: 40px
    padding: 6px 12px
    typography: 16px / 500
    hover: 'Background turns from #ffffff to #f0f4fd.'
    pressed: 'Background #f0f4fd; the surrounding offer panel also fills with #f6f5f3.'
    focus: 'outline 2px solid #0c0243; outline-offset: 3px'
    use: Valitse päivät — the first destination date button, in the Stockholm offer. Visible label is 16px/500; button box computes 20px/400.
  nav-manage:
    type: button
    textColor: '#0c0243'
    rounded: 0px
    height: 24px
    padding: 0px
    typography: 16px / 500
    hover: 'The immediate div.menu-item parent fills with #f0f4fd.'
    pressed: 'Same as hover: parent background #f0f4fd.'
    focus: 'immediate parent outline 2px solid #0c0243; outline-offset: 3px'
    use: Varaukseni — a transparent navigation link on the white header. Hover, press and keyboard focus all style its immediate div.menu-item parent.
  destination:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#0c0243'
    height: 72px
    padding: 12px 12px 12px 32px
    typography: 16px / 400
    hover: 'The 1px solid #84808c outline thickens to 2px, offset 0.'
    focus: 'outline 2px solid #84808c; outline-offset: 0px'
    use: 'Mihin Lisää kohde — a destination selector button, with 0px 8px 8px 0px corners and a 1px #84808c rest outline. Mihin is 16px/400; Lisää kohde is #9c99a3. Pressing returns the outline to the 1px rest width.'
  offer-card:
    type: card
    rounded: 8px
    hover: The surrounding offer section's layered shadow deepens from color(srgb 0 0 0 / 0.03) 0px 2px 4px 3px, 0px 1px 2px 0px, 0px 1px 1px 0px to 0px 8px 16px 12px, 0px 4px 8px 0px, 0px 2px 4px 0px (each layer 3% black).
    pressed: 'The parent offer section fills #f6f5f3; the hover shadow stays.'
    use: Tukholma, a destination offer card link (238.9 × 108px link inside an 8px-radius section). Its focus reading and the link's own pressed colour and auto outline are browser defaults and are not stated.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: FinnairText
    display: FinnairHeadlinePro
---

# Design System Inspiration of Finnair

## Overview

### Visual Theme & Atmosphere

Finnair is a Finnish network airline connecting Europe, North America, the Middle East and Asia through Finland. It began as Aero on 1 November 1923; the Finnair name became official in 1968. Its own company page places Finnish identity at the centre of the brand. [Company](https://company.finnair.com/en/about), [history](https://company.finnair.com/en/about/history).

That identity is undergoing a current renewal. In February 2026, Finnair described a brand strategy centred on Finnishness, with a gradual rollout across digital channels and flights. Lauri Porra's Matkantekijä music extends that direction into aircraft, lounges, marketing and customer service. This is evidence of the brand's evolution, without assigning a release date to the website's individual design tokens. [Finnair's announcement](https://news.cision.com/fi/finnair/r/uusi-musiikki--tutut-siivet---lauri-porran-finnairille-saveltama-musiikki-kulkee-asiakkaan-mukana-ma,c4314168).

The measured Finnish homepage combines deep blue ink, white surfaces, pale blue panels, photographic travel imagery and rounded actions. **FinnairText** supplies the loaded interface face; **FinnairHeadlinePro** is loaded and declared on the first h1. A useful construction detail is the contrast between **40px action buttons** with **40px corner radii** and **72px route selectors** with **8px outer corners**. These are observations from the live product, separate from the corporate narrative.

### Brand Narrative

Finnair's history connects the Aero name of 1923 with the official Finnair name and logo change of 1968. The current company page describes an essentially Finnish flag carrier. Its 2026 announcement carries that positioning into sound and a gradual brand rollout. Together these sources support a reference grounded in Finnish identity and travel, alongside the live page's measured blue, white and rounded interface. [History](https://company.finnair.com/en/about/history), [company](https://company.finnair.com/en/about), [2026 announcement](https://news.cision.com/fi/finnair/r/uusi-musiikki--tutut-siivet---lauri-porran-finnairille-saveltama-musiikki-kulkee-asiakkaan-mukana-ma,c4314168).

### Principles

The practical guidance derived from this surface is to keep travel tasks explicit, use the measured label hierarchy, and distinguish surface roles from actual component-state behaviour. These are reference-author recommendations based on the capture, not quoted Finnair design principles. The first-party narrative supports Finnish identity and better journeys. [Company](https://company.finnair.com/en/about).

### Personas

No first-party persona definitions were verified.

## Colors

The survey found 66 computed root properties. The linked first-party stylesheet confirms the semantic palette under `.light-theme`. The table distinguishes a declared role from an interaction actually observed; a token ending in `hover` or `active` does not establish that state on every component.

| Role / original property | Value | Evidence and use |
|---|---|---|
| Foreground — `--text-icon-primary`; also `--surface-contrast` | `#0c0243` | Paragraph ink in 13 sampled p elements; visible control labels and authored focus outlines |
| `--bg-landing`; also `--surface-primary` | `#ffffff` | White surfaces; measured action-button backgrounds |
| `--bg-primary` | `#f6f5f3` | Declared primary background role |
| `--surface-primary-hover` | `#f0f4fd` | Observed on the consent-reject button during hover and press |
| `--surface-secondary`; also `--surface-primary-active` | `#e1eafa` | Secondary surface role; destination-card outer sections in the survey |
| `--surface-tertiary` | `#edebe6` | Tertiary surface role |
| `--surface-contrast-hover` | `#0a1e60` | Declared contrast-surface hover role |
| `--surface-accent` | `#3772de` | Accent-surface role |
| `--surface-accent-hover` | `#2f62c0` | Declared accent-hover role; also `--text-icon-accent` |
| `--surface-accent-active` | `#5f8ee5` | Declared accent-active role |
| `--text-icon-secondary` | `#6b688c` | Secondary ink role |
| `--border-primary` | `#e2ded6` | Primary border role |
| `--border-secondary` | `#9ebbef` | Secondary border role |
| `--border-formfields` | `#84808c` | Destination trigger's rest and focused outline colour |
| `--text-icon-disabled-text` | `#9c99a3` | Also observed on the empty destination prompt, “Lisää kohde”; that button is enabled |
| `--surface-disabled-foreground` | `#b5b3ba` | Declared disabled foreground role |
| `--surface-disabled-bg` | `#e6e6e8` | Declared disabled background role |
| `--signal-success-tag-bg` | `#0a6e40` | Declared success-tag role |
| `--signal-warning-tag-bg` | `#f1cd73` | Declared warning-tag role |
| `--signal-error-tag-bg` | `#c92526` | Declared error-tag role |

These signal and disabled roles were read as properties; error, success, warning and disabled component states were not triggered. The census also contains the browser-default link colour `#0000ee`. In the Stockholm card, the visible h3 and price descendants are `#0c0243`, so that default anchor colour is not used as a brand token.

## Typography

**Official product-use documentation.** No current brand-manual statement about the product fonts was verified. The tested public brand-guide URLs redirect to the country/language selector. The website's own stylesheet supplies implementation evidence, not a verified type-design history.

**Live-loaded.** `document.fonts` reports **FinnairText 400, 500 and 700 normal**, and **FinnairHeadlinePro 300–900 normal**. The computed body and first button declare `finnairtext`; the first h1 declares `finnairheadlinepro`. Only these two loaded families are placed in the typography family tokens.

**Official asset declarations.** The [stylesheet linked by the product](https://cdn.finnair.com/finnair-com-ux/lambda/prod/browser/styles-QRNNJXFG.css) maps FinnairText Regular, Medium and Bold to first-party CDN font URLs. It maps FinnairHeadlinePro to `FinnairHeadlinePro-Regular-Variable` and declares a 200%–800% stretch range. WOFF2, WOFF and TTF sources are listed. These are stylesheet declarations; individual font-file responses and reuse rights were not inspected.

**Declared-only.** The same stylesheet declares **FinnairSans** at 200/400/500/700/900, normal and italic, plus italic FinnairText at 400/500/700. None appears in the survey's loaded-face list. These declarations receive no specimen and no family token. The system fallback names in CSS are likewise not promoted as brand faces.

**Measured type metrics.** The visible labels of “Varaa nyt”, “Valitse päivät” and “Käytä vain välttämättömiä” are **16px/500**, even though their containing elements compute 20px/400 for the first two and 16px/400 for the third. “Varaukseni” is **16px/500** with **24px line height**. “Mihin” is **16px/400**. The Stockholm card h3 is **20px/700**; its own family was not separately sampled. Footer links in the survey are **14px/400**, **20px line height**.

**Unresolved.** Typeface authorship, licensing, exact font-file network selection and non-Latin coverage were not verified. **Substitute: none chosen.**

## Layout

At 1440×1000, a full-width sticky header occupies 144px in the survey. It holds the wordmark and account/locale actions above a second navigation row. Route-selection controls occupy the lower hero area. Five travel-service shortcuts, two promotional cards and a destination-offer collection follow below. The survey places the promotional cards at 414px high and the destination-card sections at approximately 394.6px high; these are captured content dimensions, not responsive sizing rules.

Build the action hierarchy around compact pill buttons, taller route selectors and rectangular content panels. Keep the inner link geometry separate from the surrounding card geometry. The consent overlay obscures part of the page, so this capture does not establish unobstructed hero composition.

### Responsive Behavior

Only the 1440×1000 desktop viewport was rendered; mobile behaviour and breakpoints were not measured.

## Elevation & Depth

All six target controls have `box-shadow: none` at rest. Offer cards sit in sections with a faint three-layer shadow that deepens on hover (see Components). The root property `--surface-modal-overlay` is `rgba(0, 0, 0, .5)`, and the screenshot shows the consent backdrop dimming the page. No general shadow scale was measured.

## Motion & Easing

All six target elements report the raw computed transition `all 0s ease 0s`. Some focus-settling records include longer transitions elsewhere in the comparison scope, but their complete computed transition strings were not captured as target identities. No nonzero motion duration or easing curve is promoted to a design token.

---

**Live evidence:** [Finnish homepage](https://www.finnair.com/fi-fi), survey and states captured 2026-10-29; [linked product stylesheet](https://cdn.finnair.com/finnair-com-ux/lambda/prod/browser/styles-QRNNJXFG.css). Legal identity: “Finnair Plc”, “Address: Tietotie 9, 01530 VANTAA, FINLAND” in the [privacy notice](https://www.finnair.com/en/info/finnair-privacy-notice); the [company contact page](https://company.finnair.com/en/company-contacts) gives the same street and country. Detailed raw values, collection limits, control identities and source quotes are in verification.md and report.md.

## Components

Measurements are from the Finnish desktop homepage. Keyboard focus comes from the worker's capture, a real Tab walk with the consent dialog open; hover and press come from a re-measure with the dialog rejected (see States).

| Control | Identity and rest appearance | Measured authored state |
|---|---|---|
| **Varaa nyt** — Melbourne action link | 96.5×40px; radius 40px; padding 6px 12px; white background, deep blue label and 2px deep blue border | Hover and press: background `#f0f4fd`; focus: 2px solid deep blue outline, offset 3px |
| **Valitse päivät** — first date button, Stockholm offer | 238.9×40px; radius 40px; padding 6px 12px; white background, deep blue label and 2px deep blue border | Hover: `#f0f4fd`; press also fills the offer panel `#f6f5f3`; same focus outline |
| **Varaukseni** — header navigation link | 81.8×24px; radius 0px; padding 0px; transparent over a white header; deep blue 16px/500 text | Hover and press: immediate parent fills `#f0f4fd`; focus: that parent gets the 2px solid deep blue outline, offset 3px |
| **Mihin Lisää kohde** — destination selector button | 254.8×72px; corners 0px 8px 8px 0px; padding 12px 12px 12px 32px; white background; deep blue label and muted empty prompt; 1px form-colour rest outline | Hover and focus: outline thickens to 2px, offset 0px |

For the destination selector, the rest and focus outline colour is `#84808c`; the empty prompt is `#9c99a3`. Its asymmetric radius is preserved in prose rather than reduced to a single numeric component radius.

The **Stockholm card text link** is 238.9×108px, radius 0px, padding 0px and transparent over a measured white content area. The surrounding card section was radius 8px in the survey. Its visible title is deep blue, 20px/700. On hover the surrounding offer section's layered shadow deepens: each of its three 3% black layers grows, from `0px 2px 4px 3px, 0px 1px 2px 0px, 0px 1px 1px 0px` to `0px 8px 16px 12px, 0px 4px 8px 0px, 0px 2px 4px 0px`. On press the link's parent offer section fills `#f6f5f3` while the hover shadow stays. The link's own pressed colour and its focus `auto` ring are browser defaults and are not stated.

The first-party consent dialog's reject button, **Käytä vain välttämättömiä** (720×40px, the same outlined pill), turned `#f0f4fd` on hover and press in the worker's capture; it stays an observation, not a component.

### States

Two captures, both in a fresh-profile browser at 1440 × 1000:

- **Keyboard focus** (worker's capture, consent dialog open, a real Tab walk of 105 presses): Varaa nyt and Valitse päivät get a 2px solid `#0c0243` outline at offset 3px; the header link's immediate parent gets the same outline; the destination button's `#84808c` outline thickens from 1px to 2px at offset 0. Every ring disappeared after blur. The Stockholm card link's focus was the browser's 5px `auto` ring and contributes no token.
- **Hover and press** (re-measure, consent rejected through “Käytä vain välttämättömiä”): Varaa nyt and Valitse päivät turn from `#ffffff` to `#f0f4fd` on hover and stay there while pressed; pressing Valitse päivät also fills its offer panel with `#f6f5f3`. The header link's parent fills with `#f0f4fd`. The destination button's outline thickens to 2px on hover, with no further change on press. The Stockholm offer section's shadow deepens on hover. In this second capture the Tab walk stopped in a focus loop after 10 presses, so focus was not re-read there.

No disabled interaction state was measured. Each comparison covers the target and its pseudo-elements, descendants and their pseudo-elements, plus three ancestor levels; it establishes changes within that computed-style scope, not pixel-level absence of every possible effect.

## Do's and Don'ts

- Use the measured deep blue for visible interface ink and white for the outlined action surfaces.
- Preserve the 40px action height, 40px radius and 16px/500 visible button labels where reproducing these controls.
- Give the paired destination selector its asymmetric corners and the observed 1px-to-2px focus outline.
- Reproduce the navigation ring on its parent wrapper when copying that component.
- Keep FinnairSans as a declared-only face in this capture; use no unverified substitute.
- Fill outlined actions and the navigation item with `#f0f4fd` on hover and keep that fill while pressed; a distinct active-surface token exists but was not observed on these controls.

## Voice & Tone

The Finnish product labels are direct task language: “Varaukseni”, “Valitse päivät” and “Lisää kohde”. The corporate message connects better journeys to Finland. Treat the resulting combination of practical instructions and Finnish identity as an interpretation of these examples; no complete tone-of-voice guide was verified. [Company](https://company.finnair.com/en/about).

## Agent Prompt Guide

“Build a Finnair-inspired travel surface with `#0c0243` ink, white action surfaces, pale blue `#e1eafa` panels and the verified loaded FinnairText/FinnairHeadlinePro families when available. Use a 40px-high outlined action with 40px corners, 6px 12px padding and a 16px/500 visible label. Its measured keyboard focus is a 2px solid `#0c0243` outline, offset 3px. Use the measured destination trigger's 72px height and asymmetric outer corners for route selection. Keep unavailable fonts absent.”

On hover and press, fill the outlined action with `#f0f4fd`. Lift offer cards on hover by deepening their faint layered shadow.
