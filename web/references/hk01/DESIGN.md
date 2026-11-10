---
name: HK01
colors:
  primary: '#0033e8'
  light-p1: '#f5f7fe'
  light-p2: '#7a95f3'
  light-p3: '#3d64ee'
  light-p5: '#002bc3'
  light-p6: '#00239e'
  light-p7: '#001b79'
  canvas: '#ffffff'
  light-n2: '#f5f6fa'
  light-n3: '#ebecf0'
  light-n4: '#e1e2e6'
  icon-ink: '#2f3030'
  light-n8: '#666666'
  headline-ink: '#000000'
typography:
  navigation:
    fontSize: 16px
    fontWeight: 400
  tab:
    fontSize: 16px
    fontWeight: 400
  card-headline:
    fontSize: 18px
    fontWeight: 500
rounded:
  square: 0px
  icon: 4px
spacing:
  news-column-gap: 16
  tab-block: 10
  tab-inline: 24
  share-inset: 4
components:
  nav-hk:
    type: button
    rounded: 0px
    height: 32px
    padding: 0px
    typography: 16px / 400
    hover: 'fg #0033e8'
    pressed: 'fg #0033e8'
    use: 港聞 is a navigation link, 32px wide, transparent on a white header. Rest colour rgba(0, 0, 0, 0.78). Keyboard focus adds only the browser auto outline.
  search-link:
    type: button
    rounded: 0px
    height: 24px
    padding: 0px
    typography: 16px / 400
    hover: 'fg #0033e8'
    pressed: 'fg #0033e8'
    use: The 24px-wide search icon is a link to /search, transparent on a white header. Rest colour rgba(0, 0, 0, 0.78). Keyboard focus adds only the browser auto outline.
  story-card:
    type: card
    textColor: '#000000'
    rounded: 0px
    height: 50px
    padding: 0px
    typography: 18px / 500
    hover: 'fg #0033e8'
    pressed: 'fg #0033e8'
    use: Article 60408894 headline link only, 378.2px wide, transparent on white. The 50px height belongs to this two-line headline, not its entire card. Keyboard focus adds only the browser auto outline.
  share-button:
    type: button
    textColor: '#2f3030'
    rounded: 4px
    height: 28px
    padding: 4px
    typography: 16px / 400
    hover: bg rgba(47, 48, 48, 0.04)
    pressed: bg rgba(47, 48, 48, 0.08)
    use: The 28px-wide share icon button within article 60408894 is transparent on white at rest. Hover adds a 4% neutral fill; press adds an 8% neutral fill. Keyboard focus adds only the browser auto outline.
---

# Design System Inspiration of HK01

## Overview

### Visual Theme & Atmosphere

HK01 (香港01) combines news with consumer internet services in Hong Kong. Its company introduction describes a “媒体+” platform spanning more than 60 news and lifestyle channels, personalised information and services that connect online and offline life. The introduction opens with a zero-to-one motif: “由零到一，从无到有”. [Company introduction](https://global.hk01.com/about)

The live homepage gives that breadth a concrete form: a blue brand mark, a long category navigation, a large photographic lead story, a stack of smaller stories, service shortcuts and successive news sections. White content areas meet a cool pale field; photographs supply much of the colour, while a saturated blue marks the selected tab and interactive links. This is a dense editorial composition with compact utility controls and largely square text links. These visual descriptions are observations of the captured homepage.

In its September 2026 tenth-anniversary article, HK01 describes expanding across food, entertainment, health and technology, using data and AI, and connecting online and offline events. It calls the result a full “媒體 +” information platform and closes with “不止於此！”. This is documented platform evolution; the opened sources do not establish a recent visual rebrand. [Anniversary article](https://www.hk01.com/article/60390093)

### Brand Narrative

HK01's own account connects advocacy journalism with a wider role in everyday life. The company introduction links constructive public participation, news, personalised services and community activities. Its 2026 anniversary statement adds data, AI and a broader “媒體 +” platform. The homepage's combination of news categories and service shortcuts makes that breadth visible. [Company introduction](https://global.hk01.com/about), [anniversary article](https://www.hk01.com/article/60390093)

### Principles

The company introduction names collaboration and inclusion, innovative thinking, technology thinking, and empowerment/autonomy as its “01基因”. These are stated corporate-culture ideas; the sources do not present them as interface-design rules. [Company introduction](https://global.hk01.com/about)

### Personas

No persona research was verified.

## Colors

The homepage exposes a light/dark palette and a second set of RGB-channel variables. The primary interaction blue is **`#0033e8`**: both `--color-light-p4` and `--color-blue-500` resolve to it, and it is measured on the selected “最Hit” tab and hovered navigation/headline links.

| Raw light p-series | Value | Evidence/use |
|---|---|---|
| `--color-light-p1` | `#f5f7fe` | Declared and root-computed blue-series value |
| `--color-light-p2` | `#7a95f3` | Declared and root-computed |
| `--color-light-p3` | `#3d64ee` | Declared and root-computed |
| `--color-light-p4` | `#0033e8` | Selected tab, link hover and link press |
| `--color-light-p5` | `#002bc3` | Declared and root-computed; no state role assigned |
| `--color-light-p6` | `#00239e` | Declared and root-computed; no state role assigned |
| `--color-light-p7` | `#001b79` | Declared and root-computed; no state role assigned |

| Neutral | Value | Evidence/use |
|---|---|---|
| `--color-light-n1`, `--color-white` | `#ffffff` | White background behind the six measured controls |
| `--color-light-n2`, `--color-snowy-2` | `#f5f6fa` | Most frequent census background; also used by loading placeholders |
| `--color-light-n3` | `#ebecf0` | Declared and root-computed |
| `--color-light-n4` | `#e1e2e6` | Declared and root-computed |
| `--color-light-n7` | `#2f3030` | Measured share-button foreground |
| `--color-light-n8` | `#666666` | Declared as `#666`; also present in the text census |
| `--color-black` | `#000000` | Measured article-headline foreground |

Navigation and search rest at `rgba(0, 0, 0, 0.78)`; the section link rests at `rgba(0, 0, 0, 0.85)`. The share button uses `rgba(47, 48, 48, 0.04)` on hover and `rgba(47, 48, 48, 0.08)` while pressed. Preserve those alpha values rather than converting them to opaque neutral swatches.

The homepage census contains no `<p>` ink sample. A body-text `foreground` token is therefore absent. Dark palette declarations are recorded in the research report; a switched dark theme was not measured.

## Typography

**Official product use:** no product-font statement was verified in the opened first-party sources.

**Live-loaded:** the survey's `document.fonts` loaded-face list is empty. No family is exported and no font specimen is supplied.

**Official distributed assets:** no font asset or font licence was opened or verified.

**Declared-only:** controls name PingFang HK. The button stack is `"PingFang HK", PingFang-HK, PingFangHK, "PingFang TC", Custom-MS-JhengHei, -apple-system, "system-ui", system-ui, sans-serif`. The two `Custom-MS-JhengHei` face rules use local Microsoft JhengHei names, for weights `100 400` and `500 900`; neither appears in the loaded list. The body element has a separate generic UI stack. These are CSS declarations, not proof of the face that rendered each script.

**Unresolved:** the actual rendered Latin and Han faces. **Substitute: none chosen.**

The measured metrics remain useful independently of that gap: navigation is 16px/400 with 32px line height; tabs are 16px/400 with 24px line height; the sampled article headline is 18px/500 with computed line height `normal`. The lead-story headline in the survey is 22px/700 and smaller lead-story titles are 14px/700, both with `normal` line height.

## Layout

At 1440×1000, the top composition combines a 691×388.7px lead-story image link, 227×127.7px smaller image links and a 300px service/promotion rail. Below it are promotion tiles and a tabbed news section.

The first news row has three 400×225px image links at x=97, 513 and 929. Their measured horizontal gaps are 16px: `513 − (97 + 400)`. Headline text begins 8px inside the image's left edge in the sampled card. The tab's explicit 10px 24px padding is a separate measured spacing example, not a complete spacing scale.

Root declarations also provide `--navbar-height-desktop: 4.25rem`, `--navbar-height-mobile: 2.75rem`, `--secondary-navbar-height: 42px` and `--submenu-height-desktop: 8.125rem`.

### Responsive Behavior

Only the 1440×1000 desktop viewport was measured; mobile-height CSS declarations do not establish mobile layout behaviour.

## Elevation & Depth

The six sampled controls have `box-shadow: none` at rest. Lead-story captions sit over shaded photographs in the viewport capture; no gradient-stop or elevation scale is specified from that observation.

## Motion & Easing

The raw transition string for navigation, search and the section link is `all 0.2s ease-in-out 0s`. The headline reports `color, background-color, border-color, box-shadow, -webkit-box-shadow 0.2s ease-in-out 0s`. The selected tab and the corrected share button report `all 0s ease 0s`. These strings are copied in the verification Proof block; no additional curve, carousel timing or reduced-motion behaviour is specified.

---

**First-party sources:** [Live homepage](https://www.hk01.com/) (survey and two state passes, 2026-11-10); [company introduction](https://global.hk01.com/about) (narrative only; Simplified Chinese edition); [2026 anniversary article](https://www.hk01.com/article/60390093); [website terms](https://www.hk01.com/terms) and its [public content endpoint](https://01web-strapi.hk01.com/api/page-term?populate=*); [01 Space terms](https://space.hk01.com/terms) (registered address); [contact page](https://www.hk01.com/contact). The legal entity is “香港01有限公司”; the registered-address wording and source chain are retained in verification.md.

## Components

All dimensions describe the matched element itself. Transparent backgrounds sit on measured white ancestors.

| Control | Identity at rest | Measured interaction |
|---|---|---|
| “港聞” nav link | 32×32px; radius 0; padding 0; 16px/400; ink `rgba(0, 0, 0, 0.78)` | Hover and press change ink to `#0033e8` |
| Search icon link to `/search` | 24×24px; radius 0; padding 0; 16px/400 | Same ink and colour changes as navigation |
| Article 60408894 headline link | 378.2×50px; radius 0; padding 0; 18px/500; `#000000` | Hover and press change ink to `#0033e8`; this is the headline link, not the full card |
| Share button in article 60408894 | 28×28px; radius 4px; padding 4px; 16px/400; `#2f3030` | Transparent → `rgba(47, 48, 48, 0.04)` hover → `rgba(47, 48, 48, 0.08)` pressed |

The selected “最Hit” tab is 85.3×46px, radius 0, padding 10px 24px, with blue text and a 2px blue bottom border. Its measured hover, press and keyboard-focus styles are unchanged. The 125.3×24px “更多「最Hit」” link has no measured hover/press change and receives only the browser's default focus ring. These two controls remain descriptive examples rather than harvested interactive components.

### States

Navigation, search and the sampled headline turn blue on both hover and press. The share button changes background opacity from zero to 0.04 on hover and 0.08 while pressed, with no measured foreground change. Hover was counted only with `:hover` matching; the pressed samples also matched `:active`.

Keyboard focus on navigation, search, the section link, the headline and share button adds only an `outline-style: auto` browser ring. No brand focus token is exported. The selected tab has no computed-style change under keyboard focus. The “no change” observations cover each control and its pseudo-elements, zero or two descendants as applicable, and three ancestor levels with pseudo-elements; they do not prove absence of pixel-only or out-of-scope changes.

## Do's and Don'ts

For a composition based on this measured homepage:

- Use the measured blue for active selection and link feedback, alongside white and cool neutral surfaces.
- Keep navigation and headline links square; use the measured 4px radius on the compact share control.
- Give the share button distinct 4% hover and 8% pressed fills.
- Preserve the photographed story hierarchy, category labels and compact service shortcuts.
- Keep typography metrics while leaving the family unresolved; no substitute has been selected.
- Keep OneSignal prompt colours and Toastify/Swiper defaults outside the product palette.

## Voice & Tone

The introduction's zero-to-one phrase and the anniversary close “不止於此！” give two concrete examples of aspirational company copy. The captured homepage uses short functional labels such as “港聞”, “最Hit” and “查看更多”. This is a reading of those examples, not a verified editorial style guide.

## Agent Prompt Guide

“Build an HK01-inspired desktop news composition using a photographic lead story, a stack of smaller stories, service shortcuts and a three-column news row with measured 16px gaps. Use `#0033e8` for selected tabs and link hover, white behind controls, square headline links and 18px/500 card headlines. Font family unresolved; substitute: none chosen.”

“Create a 28×28px share icon button with 4px radius and 4px padding. Its foreground is `#2f3030`; its rest background is transparent on white. Hover applies `rgba(47, 48, 48, 0.04)` and press applies `rgba(47, 48, 48, 0.08)`.”
