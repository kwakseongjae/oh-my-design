---
name: 42Maru
colors:
  foreground: '#212529'
  link: '#3d9be9'
  on-primary: '#ffffff'
  footer-blog-fg: '#d9f5f0'
  footer-ink: '#fafafa'
  primary: '#1675c3'
  hero-ink: '#f8f9fa'
  blog-accent: '#394099'
  header-bg: '#1d214f'
  language-button-bg: '#323886'
  language-button-border: '#2b3074'
  muted: '#6c757d'
  primary-pressed: '#0062cc'
  language-button-pressed: '#545b62'
  demo-cta-focus: '#0069d9'
  language-button-hover: '#5a6268'
  footer-blog-hover: '#b0ebe1'
  demo-cta-pressed-border: '#005cbf'
  primary-hover: '#268fe6'
  language-button-pressed-border: '#4e555b'
typography:
  body:
    fontSize: 16px
    fontWeight: 300
    use: Paragraphs; 926 paragraph characters; line height 24px.
  card-title:
    fontSize: 16px
    fontWeight: 900
    use: Case title links and h3 headings; 277 heading characters; line height 19.2px.
  button:
    fontSize: 12.8px
    fontWeight: 600
    use: Demo, English and Technology controls; line height 19.2px.
  body-sm:
    fontSize: 12.8px
    fontWeight: 300
    use: Small paragraphs; 252 paragraph characters; line height 19.2px.
  nav:
    fontSize: 12.8px
    fontWeight: 500
    use: Footer navigation links; line height 19.2px.
  button-lg:
    fontSize: 20px
    fontWeight: 400
    use: Menu label; line height 20px; 400 is requested but not a separately loaded face.
  nav-lg:
    fontSize: 20px
    fontWeight: 300
    use: Logo anchor CSS font box, not visible logo lettering; line height 30px.
  button-sm:
    fontSize: 10.24px
    fontWeight: 600
    use: Footer Contact Us link; line height 15.36px.
  caption:
    fontSize: 12.8px
    fontWeight: 400
    use: Small paragraphs; 149 paragraph characters; line height 19.2px; requested weight 400.
  heading:
    fontSize: 20px
    fontWeight: 900
    use: Section h2 headings; 80 heading characters; line height 24px.
  display:
    fontSize: 48px
    fontWeight: 900
    use: Hero h3; 11 heading characters; line height 57.6px.
rounded:
  none: 0px
  button: 12.8px
  button-menu: 4px
  button-footer: 10.24px
components:
  demo-cta:
    type: button
    backgroundColor: '#1675c3'
    textColor: '#ffffff'
    border: '#3d9be9'
    rounded: 12.8px
    height: 33.2px
    padding: 6px 25.6px
    typography: 12.8px / 600
    hover: '#268fe6'
    pressed: 'self bg: rgb(22, 117, 195) -> rgb(0, 98, 204); self border: 1px solid rgb(61, 155, 233) -> 1px solid rgb(0, 92, 191); self shadow: none -> rgba(38, 143, 255, 0.5) 0px 0px 0px 3.2px'
    focus: 'self bg: rgb(22, 117, 195) -> rgb(0, 105, 217); self border: 1px solid rgb(61, 155, 233) -> 1px solid rgb(0, 98, 204); self shadow: none -> rgba(38, 143, 255, 0.5) 0px 0px 0px 3.2px'
    use: 'Ask for Demo: a link to /en/contact/ on the dark header.'
  language-button:
    type: button
    backgroundColor: '#323886'
    textColor: '#ffffff'
    border: '#2b3074'
    rounded: 12.8px
    height: 29.2px
    padding: 4px 25.6px
    typography: 12.8px / 600
    hover: 'self bg: rgb(50, 56, 134) -> rgb(90, 98, 104); self border: 1px solid rgb(43, 48, 116) -> 1px solid rgb(84, 91, 98)'
    pressed: 'self bg: rgb(50, 56, 134) -> rgb(84, 91, 98); self border: 1px solid rgb(43, 48, 116) -> 1px solid rgb(78, 85, 91); self shadow: none -> rgba(130, 138, 145, 0.5) 0px 0px 0px 3.2px'
    focus: 'self bg: rgb(50, 56, 134) -> rgb(90, 98, 104); self border: 1px solid rgb(43, 48, 116) -> 1px solid rgb(84, 91, 98); self shadow: none -> rgba(130, 138, 145, 0.5) 0px 0px 0px 3.2px'
    use: English language dropdown button on the dark header; measured without opening the dropdown.
  technology-link:
    type: button
    backgroundColor: '#1675c3'
    textColor: '#ffffff'
    border: '#3d9be9'
    rounded: 12.8px
    height: 33.2px
    padding: 6px 25.6px
    typography: 12.8px / 600
    focus: 'self bg: rgb(22, 117, 195) -> rgb(0, 105, 217); self border: 1px solid rgb(61, 155, 233) -> 1px solid rgb(0, 98, 204); self shadow: none -> rgba(38, 143, 255, 0.5) 0px 0px 0px 3.2px; self size: 0x0 -> 139.9x33.2'
    use: 'Technology: a hero link to /en/technology/. Hover and press unmeasured despite hideOverlays. Focus colour and shadow measured; compiled size change is carousel visibility contamination, not a reusable focus recipe.'
  case-card:
    type: card
    textColor: '#3d9be9'
    rounded: 0px
    width: 188.3px
    height: 41.2px
    padding: 0px
    typography: 16px / 900
    hover: 'fg #1675c3'
    pressed: 'fg #1675c3'
    use: 'AI Document Search and Comparison: a transparent stretched title link on a white case card. Geometry belongs to the title anchor, not the enclosing card. Browser auto focus ring omitted.'
  footer-blog:
    type: button
    textColor: '#d9f5f0'
    rounded: 0px
    height: 35.2px
    padding: 8px 16px
    typography: 12.8px / 500
    hover: 'fg #b0ebe1'
    pressed: 'fg #b0ebe1'
    use: 'Blog: a transparent footer navigation link on the dark footer. Browser auto focus ring omitted.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Nunito Sans
---

# Design System Inspiration of 42Maru

## Overview

### Visual Theme & Atmosphere

42Maru develops a deep semantic TA/QA platform that interprets a user's question and extracts a single answer from unstructured data. Its own history records establishment in Seoul in October 2015. The About page traces the name's inspiration to the answer “42” in Douglas Adams's The Hitchhiker's Guide to the Galaxy. Today's live homepage leads with “ANSWERING AI” and “SINGLE SPECIFIC ANSWER”, then presents enterprise search, conversational interfaces and smart-device applications.

The measured homepage is the English edition (`www.42maru.ai/en/`), reached from the root URL with a Korean browser locale; its HTML language is `en`. The separately opened Korean homepage writes the brand as **포티투마루**.

Its visual expression pairs a star-field hero with a dark navy header and solution band, compact blue actions, white case-study cards and dense partner-logo displays. Uppercase, heavy headings contrast with light paragraph text. These are observations of the current marketing site, not claims of a documented corporate design philosophy. No dated rebrand was verified.

### Brand Narrative

The About page's literary “42” inspiration connects the company name to an answer. The live site translates that association into its single-answer positioning and presents applications across enterprise search, chatbots and smart devices. A rebrand chronology was not verified.

### Principles

Observed implementation patterns: contrast a dark introduction with light evidence sections; make actions blue; distinguish strong headings from light body copy; use customer and partner imagery as substantial page content. These are design-reference observations, not attributed company values.

### Personas

No user-persona research was verified.

## Colors

These values come from the compiled live capture. Names describe observed roles; they are not a published 42Maru token vocabulary.

| Token | Value | Observed role |
|---|---|---|
| `foreground` | `#212529` | Paragraph ink: 25 paragraphs in the census; 30 text elements. |
| `link` | `#3d9be9` | Case-card title ink and the 1px borders of demo-cta and technology-link. |
| `on-primary` | `#ffffff` | Demo and language-button label ink; also the white background behind case-card. |
| `footer-blog-fg` | `#d9f5f0` | Footer Blog link ink at rest. |
| `footer-ink` | `#fafafa` | Footer text and solution navigation text; site CSS footer .text-light and .slider_menu.bg-dark a. |
| `primary` | `#1675c3` | Demo CTA and Technology link backgrounds; case-card hover and pressed ink. |
| `hero-ink` | `#f8f9fa` | Bootstrap .text-light applied to the hero and solution band; 8 text elements and 3 paragraphs. |
| `blog-accent` | `#394099` | Four blog tag badge backgrounds; also the footer top border, per site CSS. |
| `header-bg` | `#1d214f` | Background behind Menu and Footer Blog; site CSS .bg-dark and footer. |
| `language-button-bg` | `#323886` | English language-button background at rest. |
| `language-button-border` | `#2b3074` | English language-button border at rest. |
| `muted` | `#6c757d` | Copyright paragraph with class text-muted in home HTML; Bootstrap text-muted colour. |
| `primary-pressed` | `#0062cc` | Demo pressed background, also demo and Technology focus border. |
| `language-button-pressed` | `#545b62` | English button pressed background; also its hover and focus border. |
| `demo-cta-focus` | `#0069d9` | Demo and Technology keyboard-focus backgrounds. |
| `language-button-hover` | `#5a6268` | English button hover and keyboard-focus backgrounds. |
| `footer-blog-hover` | `#b0ebe1` | Footer Blog hover and pressed ink. |
| `demo-cta-pressed-border` | `#005cbf` | Demo pressed border. |
| `primary-hover` | `#268fe6` | Demo hover background. |
| `language-button-pressed-border` | `#4e555b` | English button pressed border. |

White is both button ink and the light content ground. The dark header/footer ground is `#1d214f`; pale mint footer links become `#b0ebe1` on hover. Preserve the language button's observed purple-to-grey state change rather than assuming it remains purple.

All 28 custom properties in the survey match Bootstrap 4.4.1 defaults. They are excluded as a company-owned token namespace. No company-owned declared-only custom-property colours were found. Framework colours that were only declared are not exported. Shared framework values above are retained only where the live page actually painted them and their role could be identified.

Translucent observations remain prose: Menu ink `rgba(255, 255, 255, 0.5)`, its border `rgba(250, 250, 250, 0.7)`, card borders `rgba(0, 0, 0, 0.125)` and the awards-band tint `rgba(61, 155, 233, 0.2)`. The last role is tied to the homepage's `.bg-mid` awards section and the site's CSS rule.

## Typography

**Official product use:** no company statement documenting a product typeface was verified.

**Live-loaded:** the English homepage loaded **Nunito Sans**, normal 300, 600 and 900, in `document.fonts`. Body and button CSS declare `"Nunito Sans", "Noto Sans KR", sans-serif`. The HTML requests Nunito Sans through Google Fonts with weights 300, 600 and 900. Those cross-origin sheets were unreadable to the CSS-rule census, so individual font-file URLs and subsets remain unresolved.

**Official distributed assets:** no company-distributed font package or font licence was verified.

**Declared-only:** Noto Sans KR is named by the site CSS and requested through a Google Fonts stylesheet, but it was not in the loaded-face list on this English capture. It has no specimen and is absent from the exported family list. The Korean page was opened for text evidence, not font measurement.

**Unresolved:** no separate 400 or 500 face was reported loaded, although controls request those weights. Actual glyph face selection at those weights was not measured. Substitute: none chosen.

| Token | Size / requested weight | Role |
|---|---|---|
| `body` | 16px / 300 | Paragraphs; 926 paragraph characters; line height 24px. |
| `card-title` | 16px / 900 | Case title links and h3 headings; 277 heading characters; line height 19.2px. |
| `button` | 12.8px / 600 | Demo, English and Technology controls; line height 19.2px. |
| `body-sm` | 12.8px / 300 | Small paragraphs; 252 paragraph characters; line height 19.2px. |
| `nav` | 12.8px / 500 | Footer navigation links; line height 19.2px. |
| `button-lg` | 20px / 400 | Menu label; line height 20px; 400 is requested but not a separately loaded face. |
| `nav-lg` | 20px / 300 | Logo anchor CSS font box, not visible logo lettering; line height 30px. |
| `button-sm` | 10.24px / 600 | Footer Contact Us link; line height 15.36px. |
| `caption` | 12.8px / 400 | Small paragraphs; 149 paragraph characters; line height 19.2px; requested weight 400. |
| `heading` | 20px / 900 | Section h2 headings; 80 heading characters; line height 24px. |
| `display` | 48px / 900 | Hero h3; 11 heading characters; line height 57.6px. |

The body size follows the largest paragraph-character count, not the most common navigation size. Heading sizes follow the heading-character census. The 20px/300 logo-anchor declaration describes its CSS box; the logo itself is an image, not a font specimen.

## Layout

At 1440×1000, a 66px sticky header places Menu on the left, the logo centrally and demo/language controls on the right. A full-width carousel precedes three solution columns. Below it, the success-story area combines a two-column card grid with an introductory column. Customer logos, an awards band, a partner-logo collection and a blog grid lead into a multi-column navy footer. These arrangements are visible in `full.png`; no layout grid token is inferred.

### Responsive Behavior

Only desktop rendering was measured. The opened site CSS declares heading changes at max-width 768px and min-width 768px, 992px and 1200px; these declarations do not establish tested mobile behaviour.

## Elevation & Depth

The measured demo and language controls have no rest shadow. Keyboard focus adds a 3.2px spread shadow: `rgba(38, 143, 255, 0.5)` for Demo and Technology; `rgba(130, 138, 145, 0.5)` for English. Case cards use fine translucent borders on a white ground. No global elevation scale was verified.

## Motion & Easing

Raw computed transition strings: Demo and English `background-color, color 0.3s, 0.2s linear, ease 0s, 0s`; Technology `box-shadow 0.5s ease 0s`; Menu, case title and Footer Blog `all 0s ease 0s`. These exact strings are retained in the verification proof. No additional motion timing or easing token is inferred.

## Components

- **Demo CTA:** Ask for Demo is a link, 133.1×33.2px, radius 12.8px, padding 6px 25.6px, 12.8px/600. Rest background `#1675c3`, ink `#ffffff`, 1px border `#3d9be9`, no rest shadow.
- **Language button:** English is 108.9×29.2px, radius 12.8px, padding 4px 25.6px, 12.8px/600. Rest background `#323886`, ink `#ffffff`, 1px border `#2b3074`, no rest shadow.
- **Technology action:** a hero link, 139.9×33.2px, radius 12.8px, padding 6px 25.6px, 12.8px/600. Rest background `#1675c3`, white ink and 1px `#3d9be9` border. Only its keyboard-focus state was measured successfully.
- **Case card title:** AI Document Search and Comparison is a stretched link inside a white card. Its anchor is 188.3×41.2px, radius 0, padding 0, 16px/900, transparent background, ink `#3d9be9`, no border or rest shadow. These dimensions do not describe the enclosing card.
- **Footer navigation:** Blog is a transparent link over `#1d214f`, 255×35.2px, radius 0, padding 8px 16px, 12.8px/500 and mint `#d9f5f0` ink.

**Prose-only Menu control:** 110.8×40px, radius 4px, padding 4px 12px, requested 20px/400; transparent background on navy, half-opacity white ink and a 1px 70%-opacity off-white border. Hover produced no change in the probe's compared scope. Press and focus added only the browser's `auto` outline, so it is not an exported interactive component.

Rounded values are tied to their elements: 12.8px main action corners, 4px Menu corners, 10.24px footer Contact Us corners, 0px case-title and footer-nav anchors. The footer contact link is 25.3px high with 4px 20.48px padding and 10.24px/600 text; its states were not probed.

### States

- **Demo:** hover background `#268fe6`; pressed background `#0062cc` and border `#005cbf`; keyboard focus background `#0069d9` and border `#0062cc`. Press and focus add the blue 3.2px spread shadow stated under Depth & Elevation.
- **English:** hover background `#5a6268` and border `#545b62`; pressed background `#545b62` and border `#4e555b`; focus background `#5a6268` and border `#545b62`. Press and focus add the grey 3.2px spread shadow.
- **Technology:** focus background `#0069d9`, border `#0062cc` and blue focus shadow. Hover and pressed are UNMEASURED: the second pointer attempt still hit a carousel control after overlay hiding. The compiler also preserved a 0×0-to-139.9×33.2 size comparison against after-blur rest; the carousel became hidden after blur, so this is recorded contamination and must not be used as a focus-animation recipe.
- **Case title:** hover and pressed ink change from `#3d9be9` to `#1675c3`. Focus shows only the browser's `auto` ring.
- **Footer Blog:** hover and pressed ink change from `#d9f5f0` to `#b0ebe1`. Focus shows only the browser's `auto` ring.
- **Menu:** no measured hover change; browser `auto` outline on pressed and focus. No brand focus token is assigned.

Disabled states were not measured. The probe compares computed styles, DOM attributes, pseudo-elements, descendants and three ancestor levels; its scope does not establish the absence of pixel-only or out-of-scope effects.

## Do's and Don'ts

- Pair heavy uppercase headings with light 16px/300 body copy.
- Use the measured compact blue action geometry and mint footer-link treatment.
- Keep transparent title and navigation links on their observed surfaces.
- Do not turn the case title's square anchor geometry into a claim about the whole card.
- Do not render declared-only Noto Sans KR as a verified loaded specimen.

## Voice & Tone

The hero's short uppercase phrases—“ANSWERING AI” and “SINGLE SPECIFIC ANSWER”—lead into descriptive application labels. The observed copy is technical and task-oriented; no official voice manual was verified.

## Agent Prompt Guide

Build a desktop enterprise-AI marketing page with a navy `#1d214f` header and solution band, a star-field hero, white case-study panels, Nunito Sans loaded in 300/600/900 and uppercase heavy headings. Use `#212529` paragraph ink, `#3d9be9` case links and compact `#1675c3` action links. For the main action use 33.2px height, 12.8px radius, 6px 25.6px padding and 12.8px/600 text. Implement only the states documented under States; do not extrapolate the unmeasured hero pointer states.
