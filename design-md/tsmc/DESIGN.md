---
name: TSMC
colors:
  primary: '#b32a2a'
  foreground: '#999999'
  canvas: '#ffffff'
  navigation: '#666666'
  navigation-hover: '#333333'
  muted: '#808080'
  light-ink: '#f2f2f2'
  supporting-ink: '#d9d9d9'
typography:
  navigation:
    fontSize: 15px
    fontWeight: 500
    use: Measured header link; live-loaded Roboto for Latin, Han glyph face unresolved
  action:
    fontSize: 16px
    fontWeight: 500
    use: Event LEARN MORE link; live-loaded Roboto
  tile-title:
    fontSize: 20px
    fontWeight: 400
    use: Document-center title computed size and weight; Han glyph face unresolved
rounded:
  none: 0px
  search: 5px
components:
  nav-about:
    type: button
    textColor: '#666666'
    rounded: 0px
    height: 80px
    padding: 8px 12px
    typography: 15px / 500
    hover: 'fg #333333; adds an 82px by 6px underline layer filled #b32a2a'
    pressed: 'fg #333333; the same 82px by 6px underline layer filled #b32a2a'
    focus: box-shadow rgba(60, 72, 84, 0.25) 0px 0px 0px 4px
    use: '關於台積公司 is a transparent header link on #ffffff. Measured width 114px. Hover and press insert span.underScore; keyboard focus adds the shadow and it clears after blur.'
  event-more:
    type: button
    textColor: '#b32a2a'
    rounded: 0px
    height: 23.2px
    padding: 0px
    typography: 16px / 500
    hover: 'text-decoration: underline solid rgb(179, 42, 42)'
    pressed: 'text-decoration: underline solid rgb(179, 42, 42)'
    use: 'LEARN MORE is a transparent action link on the white #ffffff event-card surface, href https://www.tsmc.com/chinese/event/CSD_37. Width 115.8px. Hover and press underline the label without changing its colour. Focus is the browser auto outline, with no focus token.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Roboto
---

# Design System Inspiration of TSMC

## Overview

### Visual Theme & Atmosphere

TSMC manufactures chips designed by its customers. Founded by Morris Chang in 1987, it pioneered the pure-play foundry model, according to its [company profile](https://www.tsmc.com/english/aboutTSMC/company_profile). Its published [values](https://www.tsmc.com/english/aboutTSMC/values) put integrity, commitment, innovation and customer trust at the centre of that service relationship.

The live site expresses this through a white corporate header, the red **tsmc** wordmark over a circular grid, technical hero imagery, a dark news band and flat image cards. The muted action red **`#b32a2a`** appears in links, the career search button and a thick navigation underline. The hero combines a scientific image with a light outlined pill; navigation and card actions have square corners. These are observations of the site, not a published visual-identity specification.

The measured homepage is the Traditional Chinese edition (`www.tsmc.com/chinese`, HTML `lang="zh-hant"`); it did not redirect. Its current hero promotes **TSMC A14 with NanoFlex™ Pro** and AI, while recruitment, sustainability and corporate information occupy the sections below. This describes the current presentation; no redesign date is established.

### Brand Narrative

TSMC's first-party account begins with the 1987 foundry model: manufacture the customer's designs. Its mission emphasises a continuing role as a trusted provider of technology and capacity. The current homepage connects that business to AI-oriented technology, recruitment and sustainability through separate visual sections. No claim about a recent logo or identity redesign is established by these sources.

### Principles

The published corporate values are **Integrity, Commitment, Innovation and Customer Trust**. They are corporate principles; no separate UI design-principles document was verified.

### Personas

No first-party persona model was verified.

## Colors

The following are live rendered values, not an official named palette. The census found no independently named TSMC custom-property namespace.

| Role | Value | Measured use |
|---|---|---|
| Primary action | `#b32a2a` | Event action text, career search background and the navigation hover underline |
| Foreground | `#999999` | Most frequent paragraph ink: 7 sampled paragraph text entries |
| Canvas | `#ffffff` | White surface behind navigation and the event action; white document-center title |
| Navigation | `#666666` | Rest label of the measured header link |
| Navigation hover | `#333333` | Header label on hover and press |
| Muted | `#808080` | Surface behind the document-center tile; overall text census leader |
| Light ink | `#f2f2f2` | Hero action label and its 1px border |
| Supporting ink | `#d9d9d9` | Document-center subtitle |

The paragraph census also contains white text (6) and black text (2). `foreground` records the leading paragraph sample, not a universal ink for every surface. A 25% slate focus shadow and the recruitment panel's 60% white background remain alpha values in prose.

## Typography

| Evidence class | Finding |
|---|---|
| Official product use | No opened official page specifies a product or corporate UI font. |
| Live-loaded | `Roboto 400 normal` and `Roboto 500 normal` appear in the loaded FontFaceSet. Roboto is the measured control family. Its use here is evidence from the public corporate site. |
| Official distributed assets | No official font distribution or font licence was verified. |
| Declared-only | The body and button stack names `Arial`, `微軟正黑體` and `Microsoft Jhenghei` after Roboto; these faces do not appear in the loaded-face census and receive no specimen. |
| Unresolved | The actual Han glyph face is unresolved. The census has no h1 family sample. A Google Fonts stylesheet is unreadable through CSSOM, so the exact binary source of the loaded Roboto 500 face is unresolved. |

The readable Roboto 400 face rule lists local Roboto names and a `fonts.gstatic.com` WOFF2 URL. This establishes the declared serving options, not which option supplied the bytes. The Google Fonts request also names Roboto Condensed, Mono and Slab; a requested stylesheet family is not evidence that a face loaded.

Font Awesome 5 Brands 400 and Font Awesome 5 Free 400/900 are loaded icon fonts and do not enter the text-family token. Swiper and VideoJS icon faces are declared but absent from the loaded list. **Substitute: none chosen.**

Measured type metrics: header navigation **15px / 500**, line height **21.75px**; hero and event actions **16px / 500**, line height **23.2px**; career search button **16px / 400**; document-center title **20px / 400**. The last title's metrics do not identify its Han font. No unmeasured headline scale is supplied.

## Layout

At **1440×1000**, the fixed header is **80px** tall. A full-width hero leads into three news columns, a recruitment image with a translucent filter strip, a horizontal image-card collection, a three-part portal strip and a multi-column footer. This order is visible in the full-page capture.

The surveyed image cards are **430px** wide. Their first two x positions are **38px** and **498px**, giving a measured **30px** gap (`498 − 38 − 430`). The recruitment selects are **200×38px**, with the first two x positions **397px** and **613px**, giving a **16px** gap. These local measurements do not establish a global spacing scale.

### Responsive Behavior

Only the **1440×1000** desktop viewport was measured; responsive layouts and breakpoint behaviour remain unverified.

## Elevation & Depth

Both structured links have `box-shadow: none` at rest. The measured navigation focus shadow supplies a **4px** outer indication using `rgba(60, 72, 84, 0.25)`. The recruitment filter panel uses `rgba(255, 255, 255, 0.6)` over its image. The observed surfaces use flat bands and separators; no elevation scale was verified.

## Motion & Easing

The event action's reported transition is **`all 0.2s ease 0s`**. Navigation reports **`color, background-color, border-color 0.15s, 0.15s, 0.15s ease-in-out, ease-in-out, ease-in-out 0s, 0s, 0s`**. These are the exact transition strings in the state records. No verified cubic-bezier curve or general motion scale is supplied.

---

**First-party sources:** [Measured homepage](https://www.tsmc.com/chinese), [company profile](https://www.tsmc.com/english/aboutTSMC/company_profile), [Chinese company profile](https://www.tsmc.com/chinese/aboutTSMC/company_profile), [values](https://www.tsmc.com/english/aboutTSMC/values), [vision and mission](https://www.tsmc.com/english/aboutTSMC/mission), [legal notice](https://www.tsmc.com/english/legal_and_trademark), [privacy policy](https://www.tsmc.com/english/privacy), [trademark list](https://www.tsmc.com/english/node/226). Captured or opened 2026-11-03. The curl [nonsense-path control](https://www.tsmc.com/zz-this-does-not-exist) remained blocked, so its missing-path semantics are unresolved.

## Components

The two structured components are links with measured authored states:

- **Header navigation — 關於台積公司.** A transparent **114×80px** link on white, **0px** radius, **8px 12px** padding, **15px / 500** text. Rest `#666666`; hover and press change the label to `#333333` and insert a red **82×6px** `span.underScore` filled `#b32a2a`. That width belongs to this measured label. Keyboard focus adds `rgba(60, 72, 84, 0.25) 0px 0px 0px 4px`, which clears after blur.
- **Event action — LEARN MORE.** The link to `/chinese/event/CSD_37` is **115.8×23.2px**, square, unpadded and transparent over white, with `#b32a2a` **16px / 500** text. Hover and press add `underline solid rgb(179, 42, 42)`; the text colour stays fixed. Its browser `auto` focus outline is not a brand token.

Additional measured geometry remains useful without promoting incomplete or visually unchanged states into components:

- **A14 hero action — 深入了解.** **122×45.2px**, **100px** CSS radius forming a pill, **10px 28px** padding, transparent over hero imagery, `#f2f2f2` label and **1px** border. Pointer states were unmeasured because the target was outside the viewport. Focus computed a browser ring, but the focus crop could not be captured.
- **Career search.** **80×39.2px**, **5px** radius, **8px 12px** padding, `#b32a2a` background and `#ffffff` foreground. At this desktop width it displays a search icon; the DOM text `搜尋職缺` is hidden. Hover and press produced no change within the probe's comparison scope; focus was browser-only.
- **Event image link.** **430×260px**, **0px** radius and padding. It is an image-bearing anchor, not a text action; its own computed `#0079c0` does not describe visible lettering. Its hover and press were unmeasured because `:hover` did not match.
- **Document-center tile.** A **432×84px** transparent link on `#808080`, square and unpadded. The visible title stays `#ffffff`, with a `#d9d9d9` subtitle. Hover and press change the anchor and wrapper inheritance from `#0079c0` to `#005283`; the title, subtitle and image source remain unchanged. This raw inherited-colour change is not offered as a visible tile response.

The numeric corner samples are **0px** for the links and image card, and **5px** for the search button. The hero pill is documented separately.

### States

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| `nav-about` | Label `#666666` → `#333333`; adds 82×6px red underline child | Same as hover; no additional difference | 4px 25% slate box shadow; clears after blur |
| `event-more` | Same red text, solid underline | Same as hover; no additional difference | Browser `auto` outline only |
| `hero-cta` | UNMEASURED: outside viewport | UNMEASURED: outside viewport | Browser `auto` outline; crop unavailable |
| `career-search` | No change in measured scope | No change in measured scope | Browser `auto` outline only |
| `event-card` | UNMEASURED: `:hover` did not match | UNMEASURED | Browser `auto` outline only |
| `document-card` | Anchor/wrapper inheritance changes; visible label unchanged | Same as hover | Browser `auto` outline only |

“No change” covers computed styles and DOM attributes on the control, descendants, pseudo-elements and three ancestor levels; the career button comparison includes two descendants, one empty. It does not prove pixel-level absence of effects. Disabled states were not measured. The probe left the custom cookie panel open; successful pointer observations are recorded with that collection limit.

## Do's and Don'ts

- Use the measured action red for the event text link and navigation underline.
- Preserve the difference between the outlined hero pill and square navigation/action links.
- Keep the 20px tile title's white and the subtitle's lighter grey distinct from inherited anchor colour.
- Do not turn Bootstrap, Swiper or animation defaults into a corporate palette or scale.
- Do not supply a Han font or interaction value where the evidence is unresolved.

## Voice & Tone

The current hero uses precise technology names, including A14 and NanoFlex™ Pro; actions pair concise Traditional Chinese labels with English `LEARN MORE`. The values page explicitly associates integrity with truthful communication and modest claims. A factual, service-focused writing direction is an interpretation of those sources, not an official copy-style guide.

## Agent Prompt Guide

“Create a TSMC-inspired white corporate header with 80px-high, square navigation links. Use the measured 15px / 500 metrics, Roboto for the evidenced Latin text, and 8px 12px padding. The 關於台積公司 sample changes from `#666666` to `#333333` on hover, adding an 82×6px `#b32a2a` underline layer. Keyboard focus uses `rgba(60, 72, 84, 0.25) 0px 0px 0px 4px`.”

“Place an unpadded, square LEARN MORE action on a white image-card surface. Use `#b32a2a`, 16px / 500, a 23.2px line height and the measured 115.8px sample width. Hover and press underline the text in the same colour.”
