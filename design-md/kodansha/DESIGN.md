---
name: Kodansha
colors:
  primary: '#001a70'
  foreground: '#000000'
  background: '#ffffff'
  action-hover: '#e1e4f7'
  muted: '#666666'
  ink-secondary: '#333333'
  section-background: '#f2f4f5'
  line: '#cccccc'
  filter-highlight: '#3ec8e0'
  new-label: '#e00e0e'
  metadata: '#111111'
  divider: '#9f9f9f'
  carousel-arrow: '#ff9f36'
typography:
  navigation:
    fontSize: 16px
    fontWeight: 400
    use: Header recruitment link; 24px line height and 1.6px letter spacing; loaded TazuganeGothicForKodanshaMd family
  action:
    fontSize: 16px
    fontWeight: 400
    use: Measured list and detail links; 24px line height; declared body stack, glyph face unresolved
  search:
    fontSize: 14px
    fontWeight: 400
    use: Header search input; 20px line height; declared body stack, glyph face unresolved
  pagination:
    fontSize: 16px
    fontWeight: 400
    use: Hero carousel numbered controls; 16px line height; loaded Maax family
rounded:
  none: 0px
  action: 4px
components:
  list-action:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#001a70'
    border: '1px solid #001a70'
    rounded: 4px
    height: 46px
    padding: 0px 36px
    typography: 16px / 400
    hover: '#e1e4f7'
    pressed: '#e1e4f7'
    use: Link labelled 一覧を見る to /notices, 256px wide. White fill changes to pale blue on hover and held press; navy text, border and arrow remain. Focus-only styling was not established.
  detail-action:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#001a70'
    border: '1px solid #001a70'
    rounded: 4px
    height: 36px
    padding: 0px 4px 0px 8px
    typography: 16px / 400
    hover: '#e1e4f7'
    pressed: '#e1e4f7'
    use: Link labelled 作品詳細 to /titles/1000037336, 170px wide. Same measured fill change as list-action. Focus-only styling was not established.
  pickup-card:
    type: card
    textColor: '#000000'
    rounded: 0px
    height: 436px
    padding: 0px
    typography: 16px / 400
    hover: '::before black overlay opacity 0 to 0.3'
    pressed: '::before black overlay opacity 0.3, same as hover'
    use: Editorial link to https://news.kodansha.co.jp/books/20152080; 272px wide, transparent anchor on a white wrapper. Headline ink is black; the NEW badge and category chips have white labels. The black pseudo-element covers the whole card.
  comic-tab:
    type: tab
    textColor: '#666666'
    rounded: 0px
    height: 28px
    padding: 0px
    typography: 16px / 400
    hover: 'fg #3ec8e0; 1px bottom border #3ec8e0'
    pressed: 'fg #3ec8e0; 1px bottom border #3ec8e0'
    use: Button labelled コミック in the awards filter, 120px wide. Transparent on white, with a 1px bottom border matching the label. Press was held without releasing or selecting a filter; selected behavior was not measured.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: TazuganeGothicForKodanshaMd
    display: TazuganeGothicForKodanshaHv
    latin: Maax
    latin-display: Maax-Black
---

# Design System Inspiration of Kodansha

## Overview

### Visual Theme & Atmosphere

Kodansha is a Japanese publisher founded in 1909. Its history records 野間清治 establishing 大日本雄弁会, followed by Kodansha and the magazine 講談倶楽部 in 1911. Its purpose, **Inspire Impossible Stories**, expresses the meeting of interesting and beneficial storytelling. The square K symbol represents intersections: readers with creators, and Japan with overseas. These are the company's own explanations of its identity. [History](https://www.kodansha.com/jp/history/) · [Purpose and logo](https://www.kodansha.com/jp/aboutus/)

The measured reader homepage brings that identity into a publication directory: an angular black logo panel, a white header, colourful editorial artwork and restrained navy action links. A large carousel leads into notices, editorial recommendations and publication listings. Japanese navigation uses a loaded Kodansha-named Tazugane face; numbered carousel controls use loaded Maax. These observations describe `www.kodansha.co.jp/`, the Japanese homepage (`lang="ja"`), which remained at `/` without a regional redirect. [Live surface](https://www.kodansha.co.jp/)

The identity continues beyond its 2021 purpose announcement. In an official interview, Kodansha connects the ten corporate colours established with its logo to diversity and describes a HERALBONY collaboration begun in 2024, including artwork inside the K symbol and on business cards. Separately, the measured site's renewal notice is dated 27 March 2025 and promises more useful information about its publications. The ten corporate colours are brand context; their complete colour values were not established here. [Official interview](https://www.kodansha.com/jp/interview/with_heralbony.html) · [Renewal notice](https://www.kodansha.co.jp/notices/635)

### Brand Narrative

The official history connects a publisher established in 1909 with a purpose announced in 2021. The square K gives that publisher a shared symbol while the reader site presents many distinct works. Its recent HERALBONY collaboration extends the symbol through artists' work. The site can therefore pair a restrained navigation structure with varied publication imagery without imposing one artwork style on every title. The last sentence is a design interpretation of the measured surface and the documented logo collaboration. [History](https://www.kodansha.com/jp/history/) · [Collaboration](https://www.kodansha.com/jp/interview/with_heralbony.html)

### Principles

- **Interesting and beneficial storytelling:** the official explanation of the purpose.
- **Intersection:** the official explanation of the square K, connecting readers and creators and Japan and overseas.
- **Compact interface, varied artwork:** a design reading of the measured homepage's small action links and large publication images.

The first two are documented brand ideas; the third is an observation. [Brand explanation](https://www.kodansha.com/jp/aboutus/) · [Homepage](https://www.kodansha.co.jp/)

### Personas

No verified persona research was found in the opened sources.

## Colors

Use these measured homepage colours as surface roles. The role names below are reference aliases, not a published Kodansha token vocabulary. The census found layout custom properties, but no first-party colour custom-property palette.

| Role | Value | Observed use |
|---|---|---|
| Primary action ink | `#001a70` | List/detail labels, borders and arrow SVGs; editorial category chips |
| Foreground | `#000000` | Most frequent paragraph ink, editorial headlines and header navigation |
| Background | `#ffffff` | Header, action fills and editorial-card wrapper |
| Action hover | `#e1e4f7` | List/detail fill on hover and held press |
| Muted ink | `#666666` | Unselected comics-filter label and bottom border; paragraph census |
| Secondary ink | `#333333` | Important-notice links; search wrapper border |
| Section background | `#f2f4f5` | Pale section ground; background census |
| Line | `#cccccc` | Header navigation's bottom rule; border census |
| Filter highlight | `#3ec8e0` | Comics-filter label and bottom border on hover and held press |
| NEW label | `#e00e0e` | Editorial NEW badge background |
| Metadata | `#111111` | Editorial date, book title and author lines |
| Divider | `#9f9f9f` | Editorial-card horizontal rule; footer secondary links |
| Carousel arrow | `#ff9f36` | Hero previous/next button backgrounds |

Black paragraph ink occurs 52 times in the census, compared with 28 occurrences of `#333333` and 24 of `#666666`. Navy is the measured action colour, not a claim that Kodansha has only one corporate colour. Transparent anchors sit on their measured white backing; transparency is not a black background. [Homepage measurements](https://www.kodansha.co.jp/)

## Typography

| Evidence class | Finding |
|---|---|
| Official product use | No opened company or brand page names an interface font. |
| Live-loaded | `document.fonts` reports **Maax 400 normal**, **Maax-Black 900 normal**, **TazuganeGothicForKodanshaMd 500 normal**, and **TazuganeGothicForKodanshaHv 700 normal**. |
| Official distributed assets | No public font distribution package or reuse licence was established. Same-origin WOFF2/WOFF URLs in the homepage stylesheet establish web serving only. |
| Declared-only | **Maax-Medium 500**, **Maax-Bold 700**, and **TazuganeGothicForKodanshaLt 300** have `@font-face` declarations but are absent from the loaded list. No specimen is provided for them. |
| Unresolved | Body, h1 and generic button CSS name `"Hiragino Kaku Gothic ProN", "Hiragino Sans", "Noto Sans JP", Meiryo, sans-serif`. The census does not establish which face supplies their rendered glyphs. These names are declared stack evidence only, with no specimen or family token. |

All four live-loaded faces are served through `/build/assets/` URLs, with WOFF2 and WOFF alternatives declared. The family tokens preserve those four loaded families; they do not replace the body's unresolved stack. **Substitute: none chosen.**

Measured metrics:

- Header recruitment link: 16px, computed weight 400, line height 24px, letter spacing 1.6px, family `TazuganeGothicForKodanshaMd`. Its loaded font-face record has weight 500; computed element weight and face metadata are separate observations.
- List/detail action links: 16px/400, line height 24px; generic declared stack, rendered glyph face unresolved.
- Search input: 14px/400, line height 20px; same unresolved stack.
- Numbered hero pagination: 16px/400 Maax, line height 16px.

These are local metrics, not a reconstructed site-wide type scale. [Live font census and controls](https://www.kodansha.co.jp/)

## Layout

At the 1440×1000 capture, the sticky header occupies 120px: an 80px primary row and a 40px secondary row. The computed layout variables include a 280px brand-link region, a secondary width of `calc(100% - 280px)`, a 40px header bottom margin and a 1236px maximum layout container. These are distinct layout settings, not a claim that every content row is 1236px wide.

The visible hero slide is 720×405px, flanked by portions of neighbouring slides. The survey locates four editorial cards at x=133, 429, 725 and 1021, each 272px wide: their edge-to-edge gap is 24px. Keep the artwork prominent and action links compact. [Survey geometry](https://www.kodansha.co.jp/)

### Responsive Behavior

Only the 1440×1000 desktop viewport was rendered; first-declared root values differ from the computed desktop layout values, but mobile rendering and breakpoints were not measured.

## Elevation & Depth

The editorial-card wrapper has the computed shadow `rgba(0, 0, 0, 0.15) 0px 3px 10px 0px`, preceded by two transparent zero-sized shadow entries. The measured action links, search input, filter button and recruitment link each have `box-shadow: none`. The card's hover darkening comes from its pseudo-element, separately from that wrapper shadow. [State snapshots](https://www.kodansha.co.jp/)

## Motion & Easing

The list link, detail link and comics filter each compute `transition: all 0.3s ease 0s`. Their measured pointer changes were sampled after settling.

The recruitment link declares `color, background-color, border-color, text-decoration-color, fill, stroke 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0s`; its measured states did not change. The search input and editorial anchor each compute `all 0s ease 0s` on the element itself. The card's pseudo-element opacity change is verified separately; no pseudo-element transition string was exposed in the saved snapshots, so its easing is left unresolved.

The focus walk also observed ancestor reveals from opacity 0 to 1 with 20px translations resolving to none. Those changes survived blur and describe scroll/reveal behaviour, not keyboard focus feedback. Reduced-motion behaviour was not measured. [Computed transitions and state snapshots](https://www.kodansha.co.jp/)

## Components

**List action — 一覧を見る, linking to `/notices`.** A 256×46px link with 4px corners, `0px 36px` padding, a 1px navy border and navy text on white. Its small right arrow follows the same navy. Hover and held press change only the fill to pale blue. No shadow was measured on the link.

**Detail action — 作品詳細, linking to `/titles/1000037336`.** A compact 170×36px version, also with 4px corners, 1px navy border and 16px/400 text. Padding is `0px 4px 0px 8px`. Hover and held press produce the same pale-blue fill.

**Editorial card — link to `news.kodansha.co.jp/books/20152080`.** The anchor is 272×436px, square, with zero padding and a transparent background over a white wrapper. The headline is black; the NEW badge and navy category chips have white labels. A black `::before` layer spans the full 272×436px anchor and changes opacity from 0 to 0.3 on hover. Held press has the same overlay. The anchor itself has no shadow; its wrapper supplies the shadow described under Depth & Elevation.

**Awards filter — コミック.** A 120×28px button with square corners and zero padding. Its 16px/400 label and 1px bottom border change from muted grey to cyan on hover and held press. The button is transparent over white. Selection after release was not exercised.

**Header search and recruitment link.** The search input is 279×40px, square, with `0px 10px` padding and black ink; its own background is transparent over white. A parent supplies the visible border. The recruitment link is 70.4×38px, square, padded `0px 0px 8px`, with black ink over white. Their measured states show no style change, so they remain prose observations rather than harvested interactive components. [Measured controls](https://www.kodansha.co.jp/)

### States

| Control | Hover | Held press | Keyboard focus |
|---|---|---|---|
| List action | Background white → pale blue | Same as hover; no additional change | Ancestor reveal changes persist after blur; no focus token |
| Detail action | Background white → pale blue | Same as hover; no additional change | Ancestor reveal changes persist after blur; no focus token |
| Editorial card | Black `::before` opacity 0 → 0.3 | Same as hover; no additional change | Ancestor reveal changes persist after blur; no focus token |
| Comics filter | Label and 1px bottom border grey → cyan | Same as hover; no additional change | Ancestor reveal changes persist after blur; no focus token |
| Recruitment nav | No style change in compared scope | No style change in compared scope | No style change in compared scope |
| Search input | No style change in compared scope | No style change in compared scope | No style change in compared scope |

All hover snapshots matched `:hover`; all pressed snapshots matched `:active`. The pointer pass occurred after scrolling the controls into view. Four below-fold controls initially had `pointer-events:none`, but the probe rechecked them at the Tab landing and reported no disabled condition there. Their initial status is not a disabled-state design.

For the unchanged nav and search controls, the scope is self, its `::before`/`::after`, zero descendants, and three ancestor levels with their pseudo-elements. The property comparison covers colour, background, border, drawn outline, shadow, opacity, transform, filters, visibility, size, decoration, image/mask data and SVG/image attributes where present. It does not prove the absence of sibling, canvas, video or cross-origin-frame effects. No authored focus token or browser `auto` ring was measured on any of the six controls. [Full state evidence](https://www.kodansha.co.jp/)

## Do's and Don'ts

- Use white action surfaces, navy borders and labels, and the measured pale-blue hover fill.
- Preserve the editorial card's full-surface dark overlay and its square outline.
- Keep the cyan filter feedback separate from the navy action-link treatment.
- Keep loaded font evidence separate from a declared generic font stack.
- Do not treat Tailwind's ring colour or animation-helper defaults as Kodansha brand tokens.

These are implementation directions derived from the measured homepage, not published corporate guidelines.

## Voice & Tone

The purpose line is **Inspire Impossible Stories**. Homepage labels are task-oriented: “一覧を見る” opens a list, “作品詳細” opens work details, and the search placeholder specifies titles and authors. Use these as observed examples of concise navigation copy; a wider editorial voice guide was not established. [Purpose](https://www.kodansha.com/jp/aboutus/) · [Homepage](https://www.kodansha.co.jp/)

## Agent Prompt Guide

“Build a Japanese publication-discovery page with a white header, black angular brand panel and prominent editorial artwork. Use the measured 46px list link with 4px corners, 1px navy border and navy text; hover changes its white fill to pale blue. Editorial cards are 272px wide with square edges, a white wrapper, a subtle measured shadow and a full black overlay that reaches opacity 0.3 on hover. Use the four verified loaded families only in their evidenced roles; leave unresolved body-font selection unspecified.”

This prompt describes the measured desktop surface. It does not supply a substitute font or additional component states.
