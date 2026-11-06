---
name: U-NEXT
colors:
  background: '#000a17'
  navigation-inset: '#0a1421'
  surface: '#141e2b'
  poster-base: '#0f1926'
  action: '#0080de'
  action-hover: '#2ca5ff'
  foreground: '#ffffff'
typography:
  button:
    fontSize: 14px
    fontWeight: 600
    use: Sidebar trial face and login button; font family unresolved
  heading:
    fontSize: 16px
    fontWeight: 600
    use: Title-card h3 overlay; no global heading scale inferred
rounded:
  none: 0px
  md: 8px
spacing:
  shelf-gap: 16
  content-inset: 56
components:
  trial-main:
    type: button
    backgroundColor: '#0080de'
    textColor: '#ffffff'
    rounded: 8px
    height: 48px
    padding: 0px 32px
    typography: 16px / 600
    hover: '#2ca5ff'
    pressed: '#2ca5ff'
    use: 'Link: 今すぐ31日間 無料トライアル to video-static.unext.jp/welcome. Paint and geometry describe its 360px-wide visible child; the outer anchor is 360x88px. Keyboard focus on the anchor is browser-only.'
  trial-side:
    type: button
    backgroundColor: '#0080de'
    textColor: '#ffffff'
    rounded: 8px
    height: 40px
    padding: 0px 30px
    typography: 14px / 600
    hover: '#2ca5ff'
    pressed: '#2ca5ff'
    use: 'Link: 無料でお試し in the sidebar. Paint and geometry describe its 208px-wide visible child inside a transparent anchor on #0a1421.'
  login-side:
    type: button
    backgroundColor: rgba(255, 255, 255, 0.05)
    textColor: rgba(255, 255, 255, 0.75)
    border: rgba(255, 255, 255, 0.75)
    rounded: 8px
    height: 40px
    padding: 0px 30px
    typography: 14px / 600
    hover: 'bg rgba(255, 255, 255, 0.15); fg #ffffff; border #ffffff'
    pressed: 'bg rgba(255, 255, 255, 0.15); fg #ffffff; border #ffffff'
    use: 'ログイン sidebar button, 208px wide, with a 1px solid border, over the #0a1421 inset. Focus adds only a browser auto outline.'
  nav-feature:
    type: button
    textColor: rgba(255, 255, 255, 0.75)
    rounded: 8px
    height: 38px
    padding: 6px 0px
    typography: 15px / 300
    hover: bg rgba(255, 255, 255, 0.05)
    pressed: bg rgba(255, 255, 255, 0.05)
    use: 'Link: U-NEXTの特長 in the upper sidebar, 220px wide; transparent at rest on #0a1421.'
  title-card:
    type: card
    textColor: '#ffffff'
    rounded: 0px
    height: 144px
    padding: 0px
    typography: 16px / 300
    hover: inner translateY(-32px); title and details opacity 1
    pressed: inner translateY(-32px); title and details opacity 1
    focus: separate inner wrapper scale(1.1), 110%
    use: 'Link: first VIVANT(2026) card to /title/SID0310775. Root geometry is 256x144px, transparent on #000a17; the title overlay is 16px / 600. Transform states apply to descendants.'
---

# Design System Inspiration of U-NEXT

## Overview

### Visual Theme & Atmosphere

U-NEXT brings video and reading into one entertainment service. Its history starts with GyaO NEXT in 2007 and the U-NEXT name in 2009. The homepage expresses that combination directly: “観るのも読むのも、これひとつ。” A large programme image and a white U-NEXT mark lead into a dark catalogue of films, television and live events. [Company history](https://www.unext.co.jp/ja/company/about-us) · [Live product](https://video.unext.jp/).

The brand's flexibility is deliberate. In April 2020, U-NEXT announced that black would replace blue as the logo's main colour so the identity could work with different titles. Its UI designers subsequently explained that content should remain the protagonist and that covering the entire background with the brand's geometric patterns would be too dominant. For a builder, the useful direction is a restrained interface around expressive artwork. The measured product uses blue for trial actions; the logo announcement does not establish a monochrome interface palette. [Brand announcement](https://www.unext.co.jp/ja/press-room/corporate-mission-visual-identity-renewal-2020-04-15) · [Official UI interview](https://note.com/unext_co/n/n9265c532c689).

The catalogue has broadened since that rebrand: Paravi's service integration began on 30 June 2023, while the official history's 2024 entries record Max inside U-NEXT and a Premier League partnership with a soccer pack. The measured homepage groups live entertainment, sports, partner brands and title collections in horizontal shelves. [Integration announcement](https://www.unext.co.jp/ja/press-room/unext-paravi-2023-06-30) · [Company history](https://www.unext.co.jp/ja/company/about-us).

### Brand Narrative

U-NEXT's stated mission is “ひとりひとりに、最高の時間を配信する。” Its 2020 identity announcement describes colour and shape changing with works and uses. The live catalogue gives that flexibility a practical setting: artwork varies across titles while the surrounding navigation and action treatments remain recognisable. The latter is an interpretation of the measured homepage. [Mission and identity announcement](https://www.unext.co.jp/ja/press-room/corporate-mission-visual-identity-renewal-2020-04-15).

### Principles

- **Content leads:** the official UI designers describe content as the protagonist and limit dominant brand patterning.
- **Adapt the brand to the platform:** the same interview describes balancing brand commonality with each platform's conventions; its Android TV example is historical context, rather than evidence for today's web behaviour.
- **Distinguish interaction layers:** on the measured web card, keyboard focus and pointer interaction transform different descendants.

The first two principles come from the [official UI interview](https://note.com/unext_co/n/n9265c532c689); the third is a measured implementation observation.

### Personas

No user personas were researched or verified.

## Colors

These role names describe measured values; the census found zero computed or declared CSS custom properties. They are extraction aliases, rather than a published U-NEXT token namespace.

| Role | Value | Measured location |
|---|---|---|
| Background | `#000a17` | Background behind the hero trial link and title card |
| Navigation inset | `#0a1421` | Background behind the sidebar trial and features links |
| Surface | `#141e2b` | Title-card poster frame and details panel; 200 background occurrences in the census |
| Poster base | `#0f1926` | Inner poster container; 117 background occurrences |
| Action | `#0080de` | Visible faces of both trial links at rest |
| Action hover | `#2ca5ff` | Both trial faces during matched hover and press |
| Foreground | `#ffffff` | White text; the most frequent paragraph ink, 9 paragraphs |

Use alpha as alpha. Secondary paragraph ink is `rgba(255, 255, 255, 0.75)`, observed on one paragraph. The login button uses that same text and border alpha, over `rgba(255, 255, 255, 0.05)`; hover raises its background to `rgba(255, 255, 255, 0.15)` and its text and border to opaque white. The features link adds a 0.05 white background on interaction. These values sit on dark surfaces and should retain their compositing context.

## Typography

| Evidence class | Finding |
|---|---|
| Official product use | No product font family was identified in the opened official writing. |
| Live-loaded | The census's loaded FontFace list is empty. No family qualifies for a live font specimen. |
| Official distributed assets | No font asset or font licence was verified. |
| Declared-only | Body, h1 and button declare the same stack shown below. |
| Unresolved | The capture does not identify the installed face that actually supplied the glyphs. |

Declared-only stack: `"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", "Noto Sans CJK JP", "BIZ UDPGothic", Meiryo, -apple-system, "system-ui", sans-serif`.

Naming the first family in this stack does not prove it rendered. No family token or specimen is supplied. Substitute: none chosen.

Measured typography metrics remain useful:

| Element | Size / weight | Line height |
|---|---|---|
| Hero trial face | 16px / 600 | 22.4px |
| Sidebar trial face | 14px / 600 | 19.6px |
| Sidebar login button | 14px / 600 | `normal` |
| Sidebar features link | 15px / 300 | 32px |
| Search label | 16px / 300 | Outer link: 22.4px |
| Title-card title, in its overlay | 16px / 600 | Not separately captured for the title |
| Outer trial and title-card links | 16px / 300 | 22.4px |

## Layout

At the measured 1440×1000 viewport, a fixed 256px sidebar holds the mark, account actions and navigation. The main catalogue's first cards begin at x=312px, a 56px inset from the sidebar edge. Adjacent 256px cards begin at x=312px and x=584px, giving a measured 16px gap. Their 256×144px image area is 16:9.

The spacing aliases `content-inset: 56` and `shelf-gap: 16` apply to this measured catalogue layout.

The hero centres its mark, proposition and trial action. Category links appear beneath the hero, followed by horizontal shelves. These are desktop observations; no breakpoint scale is inferred.

### Responsive Behavior

Only desktop at 1440×1000 was measured; mobile layouts and breakpoints are unverified.

## Elevation & Depth

The measured interactive roots have `box-shadow: none`. Depth comes from navy surfaces, translucent white fills, imagery and the card's transforms. The title card's hidden title layer carries `linear-gradient(-180deg, rgba(0, 10, 23, 0) 0%, rgba(0, 10, 23, 0.8) 100%)`. Its details panel uses `#141e2b` and a 1px `rgba(255, 255, 255, 0.1)` border.

## Motion & Easing

Both trial faces and the sidebar login button report `all 0.15s ease-in 0s`, a 150ms transition. The features link reports `color, background-color 0.15s, 0.15s ease-in, ease-in 0s, 0s`. The card's lift-frame rest identity reports `transform 0.2s ease-in 0s` (200ms); its movement was measured through the card link in the first pass. The second pass captured that frame's rest identity before it vanished from the DOM, so its direct pointer states are UNMEASURED. The outer trial links and title-card anchor report `all 0s ease 0s`; that value belongs to the outer link. No general motion scale or spring model is inferred.

---

Measured product evidence: [Japanese homepage](https://video.unext.jp/), 2026-11-06; final URL unchanged, HTML `lang="ja"`. Full census and state JSON paths, raw comparisons, controls and source quotes are recorded in `verification.md` and `report.md`.

## Components

Treat the interactive link and its painted child as separate layers. The hero trial anchor measures 360×88px with 0px radius and padding; its blue child is 360×48px, with an 8px radius, `0px 32px` padding and 16px/600 type. The sidebar trial anchor is 208×40px, also with 0px radius and padding; its painted child has an 8px radius, `0px 30px` padding and 14px/600 type. Component tokens describe these painted faces, with link semantics noted in their use. Both faces change from `#0080de` to `#2ca5ff` on hover and press. Keyboard focus was measured on the anchors; their outlines belong to the browser. Direct keyboard focus on the non-tabbable painted children is UNMEASURED.

The sidebar login button (“ログイン”) measures 208×40px, with an 8px radius, `0px 30px` padding, 14px/600 type and no box shadow. Its rest background is 0.05 white; its label and 1px border are 0.75 white. Hover and press raise the background to 0.15 white and make label and border opaque white.

The sidebar features link (“U-NEXTの特長”) is 220×38px, with an 8px radius, `6px 0px` padding and 15px/300 type. It starts transparent over `#0a1421`, with 0.75 white text. Hover and press add a 0.05 white fill.

The search affordance (“作品名、人名で検索”) is an anchor to `/search/top`. Its outer geometry is 324×44px, 100px radius and `0px 10px` padding, with a 1px 0.75-white border and `rgba(0, 10, 23, 0.6)` background. The anchor colour is white; the visible label is 0.75 white. No computed hover or pressed difference was detected within the recorded comparison scope; keyboard focus adds only a browser outline. It is documented here and omitted from component tokens.

The measured VIVANT(2026) title card is the first link to `/title/SID0310775`. Its anchor is 256×144px, with 0px radius and padding, a transparent background over `#000a17`, and no shadow. Hover and press move an inner panel upward by 32px and reveal its title overlay and details panel. Keyboard focus enlarges a different inner wrapper to 1.1 scale. The anchor itself does not acquire that transform.

### States

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| Hero trial link | Inner fill `#0080de` → `#2ca5ff` | Same fill as hover | Browser `auto` outline only |
| Sidebar trial link | Inner fill `#0080de` → `#2ca5ff` | Same fill as hover | Browser `auto` outline only |
| Sidebar login | White fill alpha 0.05 → 0.15; text and border 0.75 → 1 | Same as hover | Browser `auto` outline only |
| Features link | Transparent → 0.05 white fill | Same as hover | Browser `auto` outline only |
| Search link | No change in compared scope | No change in compared scope | Browser `auto` outline only |
| VIVANT(2026) title card | Inner lift −32px; two layers' opacity 0 → 1 | Same as hover | Separate wrapper scales to 1.1; clears after blur |

Every first-pass hover matched `:hover`, every press matched `:active`, and every keyboard sample matched `:focus-visible`. No recorded focus change persisted after blur. Search's comparison included the root and its pseudo-elements, four descendants and their pseudo-elements, and three ancestor levels and their pseudo-elements. The probe compares styles and DOM attributes; it cannot establish the absence of pixel-only or out-of-scope changes. Disabled and validation states were not measured.

## Do's and Don'ts

- Keep programme artwork prominent and place the interface on the measured navy surfaces.
- Preserve the trial action's brighter blue interaction state and the login button's alpha changes.
- Keep card focus enlargement separate from its pointer-driven lift and detail reveal.
- Avoid covering the whole product background in geometric brand patterns; the official UI interview explicitly describes this as too dominant.
- Keep CSS font declarations separate from verified font use. Do not turn the stack into a font specimen.

## Voice & Tone

The homepage pairs the compact combined-service proposition “観るのも読むのも、これひとつ。” with explicit action labels: “無料でお試し”, “ログイン” and “作品名、人名で検索”. Preserve that direct task wording when reproducing the measured surface. A broader editorial voice guide was not verified. [Live product](https://video.unext.jp/).

## Agent Prompt Guide

“Build a dark entertainment catalogue on `#000a17`, with inset navigation panels in `#0a1421`, poster bases in `#0f1926` and card surfaces in `#141e2b`. Use `#ffffff` for principal ink and preserve secondary white alpha. Trial actions brighten from `#0080de` to `#2ca5ff` on hover and press. A title card lifts its inner panel by 32px for pointer interaction and scales a separate inner wrapper to 1.1 for keyboard focus. Apply the measured type sizes and weights; the font family remains unresolved.”

## Governance

### Known Gaps

- **Contrast, `trial-main`.** Text `#ffffff` on `#0080de` measures 4.08:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `trial-side`.** Text `#ffffff` on `#0080de` measures 4.08:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `login-side`.** Text `#ffffffbf` on `#ffffff0d` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
