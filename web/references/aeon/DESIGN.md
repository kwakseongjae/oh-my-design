---
name: AEON
colors:
  foreground: '#000000'
  surface: '#ffffff'
  paragraph-muted: '#808080'
  brand: '#b60081'
typography:
  card-base:
    fontSize: 16px
    fontWeight: 400
    use: news-card wrapper; not the category label
  nav:
    fontSize: 14px
    fontWeight: 700
    use: header navigation links
  news-link:
    fontSize: 18px
    fontWeight: 400
    use: news-list links; notice font family remains unresolved
  label:
    fontSize: 14px
    fontWeight: 500
    use: news-card category label and footer links
  action:
    fontSize: 16px
    fontWeight: 700
    use: concept and topics CTA labels
  sustainability-link:
    fontSize: 16px
    fontWeight: 500
    use: materiality links
  tab:
    fontSize: 24px
    fontWeight: 700
    use: news / IR tab buttons
  search-icon:
    fontSize: 24px
    fontWeight: 400
    use: Material Symbols Outlined search glyph, not body text
rounded:
  control-outer: 0px
  news-card: 32px
  carousel-arrow: 50px
components:
  concept-cta:
    type: button
    textColor: '#000000'
    rounded: 0px
    height: 57.4px
    padding: 17.5px 52px 17.5px 24px
    typography: 16px / 700
    hover: 'fg: rgb(0, 0, 0) -> rgb(255, 255, 255) (self, label, 2 descendants); ::before color: rgb(182, 0, 129) -> rgb(255, 255, 255); ::after bg: rgb(255, 255, 255) -> rgb(182, 0, 129)'
    pressed: 'fg: rgb(0, 0, 0) -> rgb(255, 255, 255) (self, label, 2 descendants); ::before color: rgb(182, 0, 129) -> rgb(255, 255, 255); ::after bg: rgb(255, 255, 255) -> rgb(182, 0, 129)'
    focus: 'fg: rgb(0, 0, 0) -> rgb(255, 255, 255) (self, label, 2 descendants); ::before color: rgb(182, 0, 129) -> rgb(255, 255, 255); ::after bg: rgb(255, 255, 255) -> rgb(182, 0, 129)'
    use: イオンの基本理念 — link to /company/concept/ on the photographic homepage. Transparent outer link; white ::after with a magenta border paints the action. Outer radius 0 is not the visible pseudo-element corner. Focus includes scroll-entry animation; recheck its geometry independently.
  topics-cta:
    type: button
    textColor: '#000000'
    rounded: 0px
    height: 57.4px
    padding: 17.5px 52px 17.5px 24px
    typography: 16px / 700
    hover: 'fg: rgb(0, 0, 0) -> rgb(255, 255, 255) (self, label, 2 descendants); ::before color: rgb(182, 0, 129) -> rgb(255, 255, 255); ::after bg: rgb(255, 255, 255) -> rgb(182, 0, 129)'
    pressed: 'fg: rgb(0, 0, 0) -> rgb(255, 255, 255) (self, label, 2 descendants); ::before color: rgb(182, 0, 129) -> rgb(255, 255, 255); ::after bg: rgb(255, 255, 255) -> rgb(182, 0, 129)'
    focus: 'fg: rgb(0, 0, 0) -> rgb(255, 255, 255) (self, label, 2 descendants); ::before color: rgb(182, 0, 129) -> rgb(255, 255, 255); ::after bg: rgb(255, 255, 255) -> rgb(182, 0, 129)'
    use: グループトピックス一覧 — link to /group_topics/ below the news carousel. Transparent outer link on the photographic homepage; white ::after and magenta border. Focus includes scroll-entry animation; recheck its geometry independently.
  news-nav:
    type: button
    textColor: '#000000'
    rounded: 0px
    height: 19.6px
    padding: 0px
    typography: 14px / 700
    hover: 'fg #b60081'
    pressed: 'fg #b60081'
    focus: 'fg #b60081'
    use: ニュースリリース — link to /news/ on the white header. Transparent background; magenta interaction ink. Browser auto outline is excluded.
  search-open:
    type: button
    textColor: '#b60081'
    rounded: 0px
    height: 27.2px
    padding: 0px
    typography: 24px / 400
    hover: 'self opacity: 1 -> 0.75'
    pressed: 'self opacity: 1 -> 0.75'
    focus: 'self opacity: 1 -> 0.75'
    use: 検索ボックスを開く — button on the white header. Transparent background; the visible search icon is magenta, 24px/400 Material Symbols Outlined; its wrapper is black, 20px/700. This is the opener, not an input.
  news-card:
    type: card
    backgroundColor: '#ffffff'
    textColor: '#b60081'
    rounded: 32px
    width: 432px
    height: 451.8px
    padding: 0px
    typography: 14px / 500
    hover: 'descendant h3@1.1.fg: rgb(0, 0, 0) -> rgb(182, 0, 129); descendant img@0.0.0.1.tf: none -> matrix(1.03, 0, 0, 1.03, 0, 0)'
    pressed: 'descendant h3@1.1.fg: rgb(0, 0, 0) -> rgb(182, 0, 129); descendant img@0.0.0.1.tf: none -> matrix(1.03, 0, 0, 1.03, 0, 0)'
    use: Link to the 2026.11.06 Asian Games appreciation PDF; not activated. White card; the compiled foreground and font describe the category label (14px/500 magenta), while the card wrapper is black 16px/400. Hover/press recolour the heading and scale the image. Keyboard focus was unmeasured.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Zen Kaku Gothic New
    latin: Poppins
---

# Design System Inspiration of AEON

## Overview

### Visual Theme & Atmosphere

AEON is a Japanese retail group whose holding company manages businesses in retail, property development, finance and services. Its company profile dates incorporation to September 1926; its history traces predecessor Okadaya to 1758. The group adopted the AEON name in 1989, the company changed from JUSCO to AEON in 2001, and it moved to a pure holding-company structure in 2008. These are separate milestones, not competing founding dates. [Company](https://www.aeon.info/company/overview/), [history](https://www.aeon.info/company/history/).

The current vision, formulated in 2022 according to the history page, is to create future living in which each person's smile blooms. The vision page places individual happiness beside social development and describes building connections between people and society. This is an evolution of the customer-centred philosophy of peace, respect for people and contribution to communities. [Vision](https://www.aeon.info/company/code_of_conduct/), [philosophy](https://www.aeon.info/company/concept/).

The measured Japanese corporate homepage (`aeon.info/`, HTML `lang="ja"`) expresses this through large photographs, a floating white rounded header, magenta accents and rounded news cards. The visible first viewport places a store building and trees beneath a blue sky. This is a reference to that corporate surface, not a measurement of AEON's shopping sites or apps. The category ecommerce reflects the retail business; this page itself is an information portal.

### Brand Narrative

The history page explains AEON as a name meaning eternity, adopted for the group in 1989 with an enduring commitment to customers. Its 2022 vision explains smiles as flowers of different colours. These are the company's own explanations of the name and metaphor; they do not establish colour values or logo construction rules. [History](https://www.aeon.info/company/history/).

### Principles

The company states a commitment to peace, respect for people and local communities. For implementation on this measured surface, retain the observed hierarchy of photographs, white panels, readable Japanese labels and magenta interaction feedback; this implementation advice is derived from the capture. [Company philosophy](https://www.aeon.info/company/concept/).

### Personas

No personas were verified; no demographic or behavioural profile is inferred from this page.

## Colors

### Seen on the measured homepage

| Token | Value | Observed role |
|---|---|---|
| `foreground` | `#000000` | Paragraph ink (26 paragraphs), navigation and CTA labels; --color-type. |
| `surface` | `#ffffff` | News-card background and the CTA ::after background; hover label colour. |
| `paragraph-muted` | `#808080` | Most frequent paragraph ink in this survey (36 paragraphs); not a universal body colour. |
| `brand` | `#b60081` | CTA ::after hover/pressed fill, nav interaction ink, card heading interaction ink and category label; --color-main / --color-link. |

The paragraph census also contains 18 magenta paragraphs. Do not turn the most frequent ink into a rule for all copy. Transparent control backgrounds remain transparent; the header or CTA pseudo-element supplies the visible white ground. A translucent `rgba(235, 235, 235, 0.6)` background was counted three times but is not an opaque colour token.

### Declared in the site's CSS, not seen painted in this capture

These colours are listed for reference and are not exported as tokens: nothing in this capture was painted with them.

These are first-party stylesheet declarations from `common.css`, not proof of live usage. Preserve their CSS names and do not promote the unused blue or ochre steps to the primary visual accent.

| Name | Value | CSS property |
|---|---|---|
| `color-border` | `#ebebeb` | `--color-border`, `--color-gray`, `--color-gray-20` |
| `color-border-dark` | `#4d4d4d` | `--color-border-dark`, `--color-gray-70` |
| `color-border-light` | `#f2f2f2` | `--color-border-light`, `--color-gray-30` |
| `color-error` | `#ff0000` | `--color-error` |
| `color-gray-10` | `#f5f5f5` | `--color-gray-10` |
| `color-gray-60` | `#666666` | `--color-gray-60`, `--color-input-border` |
| `color-gray-80` | `#333333` | `--color-gray-80`, `--color-input-border-hover` |
| `color-gray-90` | `#1a1a1a` | `--color-gray-90` |
| `color-main-20` | `#deecf9` | `--color-main-20` |
| `color-main-30` | `#c7e0f4` | `--color-main-30` |
| `color-main-40` | `#2b88d8` | `--color-main-40` |
| `color-main-50` | `#0078d4` | `--color-main-50` |
| `color-main-60` | `#106ebe` | `--color-main-60` |
| `color-main-70` | `#005a9e` | `--color-main-70` |
| `color-main-80` | `#004578` | `--color-main-80` |
| `color-main-90` | `#003055` | `--color-main-90` |
| `color-sub` | `#d48c00` | `--color-sub`, `--color-sub-50` |
| `color-sub-10` | `#fdf4e3` | `--color-sub-10` |
| `color-sub-20` | `#f6e7c7` | `--color-sub-20` |
| `color-sub-30` | `#f0d396` | `--color-sub-30` |
| `color-sub-40` | `#e39f1a` | `--color-sub-40` |
| `color-sub-60` | `#c28000` | `--color-sub-60` |
| `color-sub-70` | `#aa7000` | `--color-sub-70` |
| `color-sub-80` | `#845700` | `--color-sub-80` |
| `color-sub-90` | `#533800` | `--color-sub-90` |

## Typography

- **Official product-use documentation:** none verified; no official type guideline was found in the opened company pages.
- **Live-loaded:** Zen Kaku Gothic New 400/500/700 and Poppins 400/500. Both have same-origin WOFF2 sources under `/cf-fonts/s/` in the font-face census. Zen Kaku Gothic New is declared on measured text controls; `--font-en` names Poppins. Material Symbols Outlined is also loaded (100–700 range), for icons rather than prose.
- **Official distributed assets:** no downloadable font package or licence was verified. A webfont request is not evidence of redistribution rights.
- **Declared-only:** Poppins 600/700 font faces are declared but absent from the loaded list. `--font-serif` names 游明朝体, Yu Mincho/yumincho, ヒラギノ明朝 Pro and Hiragino Mincho Pro; none is a loaded face in this capture. No specimen is supplied for them.
- **Unresolved:** the body element computes to Times, there is no h1 family reading, and the prominent notice link declares Noto Serif JP in its survey row without that face appearing in the loaded census. These are not promoted to font-family tokens. Substitute: none chosen.

Measured scale: header navigation 14px/700 (19.6px line height); CTA labels 16px/700 (22.4px); news-card wrapper 16px/400 (25.6px), category label 14px/500; news-list links 18px/400 (28.8px); sustainability links 16px/500; news/IR tab buttons 24px/700 (38.4px). Search is a 24px/400 icon inside a 20px/700 wrapper. Neither is a heading size. Poppins is loaded, but no universal assignment of Latin content to it is inferred.

## Layout

At 1440 × 1000, the first viewport has an inset horizontal header over full-width photography. The survey places the logo at x=72 and the news link at x=658. News cards are 432px wide with 24px between successive visible card positions (48, 504, 960). Keep media, category, heading and date distinct, as in the inspected card crop. These are desktop observations, not a tested responsive specification.

The CSS spacing scale includes `--space-1: 4px`, `--space-2: 8px`, `--space-4: 16px`, `--space-6: 24px`, `--space-8: 30px` and `--space-28: 114px`. Preserve the actual values; the names do not imply a uniform arithmetic scale.

### Responsive Behavior

Only the 1440 × 1000 desktop viewport was measured; no mobile layout is verified.

## Elevation & Depth

Photography supplies depth in the first viewport; white header and card surfaces sit above it. No reusable shadow token is established from this capture.

## Motion & Easing

The CTA's raw computed transition is `color 0.3s ease 0s`; the search opener's is `opacity 0.3s ease 0s`. The news nav reports `color, background 0.15s, 0.15s ease, ease 0s, 0s`. The card wrapper reports `all 0s ease 0s` despite a measured descendant image transform, so do not infer that the image itself has zero duration. No site-wide easing prescription is inferred from these values.

---

First-party narrative: [company](https://www.aeon.info/company/overview/), [history](https://www.aeon.info/company/history/), [vision](https://www.aeon.info/company/code_of_conduct/), [philosophy](https://www.aeon.info/company/concept/), [terms](https://www.aeon.info/terms/). Measurement source: [homepage](https://www.aeon.info/), 2026-11-12; declaration source: [site CSS](https://www.aeon.info/wp-content/themes/aeon_corp/_assets/ver-r8/common/css/common.css).

## Components

- **Concept CTA:** `イオンの基本理念`, link, 240 × 57.4px; outer radius 0; padding 17.5px 52px 17.5px 24px; 16px/700. Outer background is transparent, label black. The white `::after` has a magenta border; hover and pressed make it magenta and the label/arrow white. The visible rounded silhouette belongs to the pseudo-element, not the outer zero-radius box.
- **Topics CTA:** `グループトピックス一覧`, link, 252 × 57.4px; same padding, font and interaction colours.
- **News navigation:** `ニュースリリース`, link, 112 × 19.6px; radius 0, padding 0, transparent on the white header, 14px/700 black. Hover, pressed and focus turn label ink magenta.
- **Search opener:** `検索ボックスを開く`, button, 40 × 27.2px; radius 0, padding 0, transparent on white. Wrapper ink is black; visible icon is magenta, 24px/400. Hover, pressed and keyboard focus reduce opacity from 1 to 0.75.
- **News card:** link to the appreciation notice dated 2026.11.06, 432 × 451.8px, radius 32px, padding 0, white ground. Wrapper ink is black; the category label is magenta 14px/500. The compiler's label fields refer to this tag, not the black headline. Hover and pressed turn the heading magenta and scale the image by 1.03. The linked file was not opened or downloaded.

The survey also records 48px carousel arrow buttons with 50px radii. Percentage radii (50%) belong in prose, not numeric radius tokens. No disabled variant was measured.

### States

The two CTA links share white-to-magenta pseudo-background and black-to-white label changes on hover/pressed. Keyboard focus shows the same colour changes. The arrow's fade-in and the pseudo-background's expansion recorded during the focus pass were still there after blur: they belong to the scroll-entry animation, not to focus, and are not part of the focus recipe. The news nav changes ink in all three measured states. The search opener changes opacity in all three. The card has measured hover/pressed changes; keyboard focus is **UNMEASURED**, not unchanged.

Where present, the raw ring is `rgb(182, 0, 129) auto 3px off 3px`. Because its style is `auto`, it is excluded from brand focus tokens. The component focus strings retain only the compiler's other measured changes.

## Do's and Don'ts

- Use the observed magenta for interaction ink and CTA fill, with white labels on the filled CTA.
- Keep the card's category label separate from its heading when applying typography or ink.
- Preserve rounded visible surfaces; an outer CTA radius of zero does not describe its pseudo-element silhouette.
- Do not use the declared blue/ochre ramp as proof of a coloured homepage theme.
- Keep unavailable faces absent from specimens. Substitute: none chosen.

## Voice & Tone

The official philosophy speaks from the customer's starting point and pairs peace, respect for people and contribution to local communities. The vision frames future living through individual smiles and connection. Treat these as documented themes, not a verified copywriting style guide. [Philosophy](https://www.aeon.info/company/concept/), [vision](https://www.aeon.info/company/code_of_conduct/).

## Agent Prompt Guide

Build an AEON corporate news card with a white ground, 32px corners and a 432px desktop width. Keep the magenta 14px/500 category tag separate from the heading. On hover/press, change the heading from black to magenta and transform the image to `matrix(1.03, 0, 0, 1.03, 0, 0)`. Use the loaded Japanese interface face Zen Kaku Gothic New. Leave keyboard-focus styling unspecified for this card because it was not reached by the probe.
