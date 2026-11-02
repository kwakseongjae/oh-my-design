---
name: Duolingo
colors:
  primary: '#58cc02'
  primary-lip: '#58a700'
  mask: '#89e219'
  accent: '#1cb0f6'
  whale: '#1899d6'
  canvas: '#ffffff'
  foreground: '#777777'
  eel: '#4b4b4b'
  on-primary: '#ffffff'
  cardinal: '#ff4b4b'
  bee: '#ffc800'
  fox: '#ff9600'
  beetle: '#ce82ff'
  fire-ant: '#ea2b2b'
  polar: '#f7f7f7'
  swan: '#e5e5e5'
  hare: '#afafaf'
  iguana: '#ddf4ff'
  sea-sponge: '#d7ffb8'
  turtle: '#a5ed6e'
  walking-fish: '#ffdfe0'
  deep-martin: '#100f3e'
  eclipse: '#000437'
  black-text: '#3c3c3c'
typography:
  button:
    fontSize: 15px
    fontWeight: 700
    letterSpacing: 0.8px
    use: Four measured homepage CTAs; uppercase labels; computed line-height normal
  research-link:
    fontSize: 17px
    fontWeight: 700
    use: Inline research link; measured line-height 24px
  course-label:
    fontSize: 15px
    fontWeight: 700
    use: Visible English label inside a 17px/400 anchor
  language-link:
    fontSize: 13px
    fontWeight: 700
    use: Footer site-language links; measured line-height 16px
rounded:
  button: 12px
  web-ui-root-default: 16px
spacing:
  button-inline: 16
  hero-cta-gap: 12
components:
  button-primary:
    type: button
    textColor: '#ffffff'
    rounded: 12px
    padding: 0px 16px
    height: 50px
    typography: 15px / 700
    hover: 'filter brightness(1.1); computed ::before fill remains #58cc02 and lip #58a700'
    pressed: 'transform: matrix(1, 0, 0, 1, 0, 4); ::before box-shadow: none; hover filter brightness(1.1) retained'
    use: 'Get started is a link to /register in the hero, 330px wide. The anchor is transparent over the white homepage; ::before paints #58cc02 with a 4px #58a700 lip.'
  button-outline:
    type: button
    textColor: '#1cb0f6'
    rounded: 12px
    padding: 0px 16px
    height: 50px
    typography: 15px / 700
    hover: 'filter brightness(0.9); computed ::before fill remains #ffffff and label #1cb0f6'
    pressed: 'transform: matrix(1, 0, 0, 1, 0, 2); ::before box-shadow: none; hover filter brightness(0.9) retained'
    use: 'I ALREADY HAVE AN ACCOUNT is a 330px-wide button. Its transparent element sits on white; ::before paints white with a 2px #e5e5e5 border and 2px lip.'
  button-super-trial:
    type: button
    textColor: '#000437'
    rounded: 12px
    padding: 0px 16px
    height: 50px
    typography: 15px / 700
    hover: 'filter brightness(1.1); computed ::before fill remains #ffffff and label #000437'
    pressed: 'transform: matrix(1, 0, 0, 1, 0, 4); ::before box-shadow: none; hover filter brightness(1.1) retained'
    use: 'Try 1 week free is a 154px-wide button on the #100f3e Super section. Its transparent element has a white ::before face and a 4px rgba(255, 255, 255, 0.5) lip.'
  button-certify:
    type: button
    textColor: '#1cb0f6'
    rounded: 12px
    padding: 0px 16px
    height: 50px
    typography: 15px / 700
    hover: 'filter brightness(0.9); computed ::before fill remains #ffffff and label #1cb0f6'
    pressed: 'transform: matrix(1, 0, 0, 1, 0, 2); ::before box-shadow: none; hover filter brightness(0.9) retained'
    use: 'Certify your English is a 330px-wide link to the Duolingo English Test. Its transparent element sits on white; ::before paints white with a 2px #e5e5e5 border and 2px lip.'
fonts:
  roles:
    sans: duolingo-sans
    display: feather
---

# Design System Inspiration of Duolingo

## Overview

### Visual Theme & Atmosphere

Duolingo makes education accessible through a learning experience built around practice and play. In his [2020 account of the company's origins](https://blog.duolingo.com/duolingos-values-a-letter-from-the-ceo/), Luis von Ahn connects the idea he developed with Severin Hacker in 2011 to removing the cost barrier to language education. He identifies making learning fun as a way to help learners keep going. The [current company page](https://about.duolingo.com/?imprint#contact) calls Duolingo the world's most popular language-learning app and presents it alongside English testing, Math, Music and Chess.

The homepage expresses this through bright green, rounded lettering, character artwork and substantial buttons with solid bottom lips. The measured primary action has a `#58cc02` face over a `#58a700` lip; white space gives the illustration and the two hero actions room. The secondary action has a white face, blue lettering and a grey outline. A dark `#100f3e` Super section provides a second setting for the same button construction. These are observations of the public website, whose measured edition is English at `www.duolingo.com/` (`lang="en"`).

There is an evolution behind the playful surface. Duolingo's [February 2026 account of its core-tab refresh](https://blog.duolingo.com/core-tabs-redesign/) describes inconsistent headers, typography and spacing, followed by a framework with tiered headers, fewer type styles and more intentional whitespace. It explicitly balances consistency with purpose and simplicity with clarity. That article concerns the app; the numerical measurements below concern the signed-out homepage.

#### Primary tasks

- Start learning or return to an existing account through the two hero actions.
- Choose a language course, Chess or Math in the course strip.
- Follow the research link, explore Super, or visit the English Test through the corresponding homepage actions.
- Maintain a practice habit: the [official widget article](https://blog.duolingo.com/widget-feature/) explains how the widget shows daily lesson status and streak length to encourage another lesson.

### Brand Narrative

In the founder's 2020 retrospective, the idea for Duolingo emerges in 2011 while Luis von Ahn is a computer-science professor at Carnegie Mellon; he names Severin Hacker as his cofounder. The account describes an initially free website combining language learning with a game and says the app launched in 2012. Free access and motivation are connected in that account, rather than treated as separate brand themes.

The custom display typography has a similarly concrete origin. Monotype's creator account describes refining Johnson Banks' logotype concept and extending forms inspired by Duo into the Feather Bold display face. It places that work within a wider refresh with Duolingo's design and marketing team. This is documented brand history, distinct from the current CSS-family measurements.

The 2026 core-tabs article adds a present-day design direction: reconcile a growing set of tabs through clearer hierarchy, purposeful spacing and a consistent framework while allowing each tab to retain its purpose. Its stated rollout was live on iOS and forthcoming on Android at publication; no later rollout status is inferred here.

### Principles

- **Learners first.** The founder's letter names this operating principle and describes testing assumptions with data.
- **Make practice inviting.** The same letter connects fun and gamification with persistence; the widget article gives an example focused on daily practice and streak status.
- **Consistency with purpose.** The core-tabs article explains why artwork or a repeated layout should still communicate something useful.
- **Simplicity with clarity.** That article treats removal of elements as a decision about what learners need to understand.
- **Visible construction.** In the measured homepage actions, a solid face, distinct bottom lip and whole-control hover filter provide the reference's concrete button treatment. This is an observed implementation pattern.

### Personas

No first-party persona study was verified; the prior fictional profiles are not treated as research.

## Colors

The homepage exposes 362 computed root custom properties, including 301 `--color-*` entries. The following values come from those properties; actual uses are specified only where the capture identifies them. The names are the live CSS names, rather than a reconstructed official palette.

| Role or live name | Value | Evidence and use |
|---|---|---|
| Primary / owl | `#58cc02` | `--color-owl`; Get started `::before` face |
| Primary lip / tree-frog | `#58a700` | `--color-tree-frog`; primary face's solid bottom shadow |
| Mask green | `#89e219` | `--color-mask-green`; root palette value |
| Accent / macaw | `#1cb0f6` | `--color-macaw`; outlined action labels and research link |
| Whale | `#1899d6` | `--color-whale`; root palette value |
| Canvas / snow | `#ffffff` | `--color-snow`; homepage surface and white button faces |
| Foreground / wolf | `#777777` | `--color-wolf`; dominant paragraph ink, five `<p>` observations |
| Eel | `#4b4b4b` | `--color-eel`; also present in the text census |
| On-primary | `#ffffff` | Primary action's visible label |
| Cardinal | `#ff4b4b` | `--color-cardinal`; root palette value |
| Bee | `#ffc800` | `--color-bee`; root palette value |
| Fox | `#ff9600` | `--color-fox`; root palette value |
| Beetle | `#ce82ff` | `--color-beetle`; root palette value |
| Fire-ant | `#ea2b2b` | `--color-fire-ant`; root palette value |
| Polar | `#f7f7f7` | `--color-polar`; root palette value |
| Swan | `#e5e5e5` | `--color-swan`; outlined action faces' border and lip |
| Hare | `#afafaf` | `--color-hare`; site-language button text in the survey |
| Iguana | `#ddf4ff` | `--color-iguana`; root palette value |
| Sea-sponge | `#d7ffb8` | `--color-sea-sponge`; root palette value |
| Turtle | `#a5ed6e` | `--color-turtle`; footer link ink |
| Walking-fish | `#ffdfe0` | `--color-walking-fish`; root palette value |
| Deep-martin | `#100f3e` | `--color-deep-martin`; background behind the Super action |
| Eclipse | `#000437` | `--color-eclipse`; Super action label |
| Black-text | `#3c3c3c` | `--color-black-text`; survey's site-language wrapper ink |

The paragraph census separates reading text from navigation: paragraphs are `#777777` ×5 and link blue `#1cb0f6` ×1. The most frequent text colour overall is footer green `#a5ed6e` ×67. It should not become the body foreground just because it leads that count.

The logo anchor's own raw colour is `#0000ee` in the survey. Its visible content is a graphic; that default link colour is not used as the brand's visible link token.

Cardinal, Bee, Fox, Beetle and the lighter palette values above are confirmed CSS values. Their precise assignment to lesson errors, XP, hearts, streaks or selected answers was not measured here.

## Typography

### Evidence classes

| Evidence class | Finding |
|---|---|
| Official product use | The former Duolingo typography-guidelines URL redirects to the design blog. Its old product-use instructions were not recovered as a live document. |
| Live-loaded | `document.fonts` lists `duolingo-sans 100 900 normal`, `duolingo-sans 100 900 italic` and `feather 700 normal` on the homepage. These exact CSS family names populate the family tokens. |
| Creator-documented brand history | [Monotype's project account](https://www.monotype.com/studio/portfolio/duolingo) names Feather Bold as a custom display face developed with Johnson Banks from Duo's forms and used in the brand refresh. This documents its origin and communications role; it does not identify the font of every current product control. |
| Official distributed assets | No downloadable font package or font licence was opened. No font file was downloaded. |
| Declared-only | The census reports `sans-serif` on the body and `duolingo-sans, sans-serif` on the first h1 and button. The generic declaration is not a brand family token. |
| Unresolved | The census's `fontFaces` list is empty and eight first-party CDN stylesheets were unreadable to its stylesheet walk. Text inspection of those stylesheets found no `@font-face` rule. The actual font-file URLs and the commercial identity behind `duolingo-sans` remain unresolved. Substitute: none chosen. |

Only the live-loaded families are eligible for a live specimen. The documented Feather Bold history remains useful independently of identifying the census alias `feather`; the alias alone is not proof of a particular font file or licence.

### Measured interface metrics

| Element | Family | Size / weight | Line height | Tracking |
|---|---|---|---|---|
| Four measured CTA labels | `duolingo-sans` | 15px / 700 | `normal` | 0.8px |
| English course anchor | `duolingo-sans` | 17px / 400 | 20px | `normal` |
| Visible English label inside that anchor | `duolingo-sans` | 15px / 700 | Not separately captured | Not separately captured |
| Inline research link | `duolingo-sans` | 17px / 700 | 24px | `normal` |
| Footer site-language links | `duolingo-sans` | 13px / 700 | 16px | Not captured by survey |

The CTA labels appear uppercase in the viewport and control crops. Their measured family is `duolingo-sans`.

The root also exposes a type vocabulary: page-title large `2.5rem / 2.75rem`, page-title small `2rem / 2.25rem`; heading large `1.75rem / 2rem`, medium `1.5rem / 2rem`, small `1.25rem / 1.5rem`, xsmall `1rem / 1.25rem`. Those title and heading weights are 700. Body size is `1.25rem`, line height `1.75rem`, with spacious line height `2rem` and weights 400/700. Caption is `1rem / 1.5rem`, weights 400/700. Label medium is `1rem / 1rem`, large `1.5rem / 1.5rem`, both 700, uppercase, with `0.04em` tracking. These are computed custom-property values, not measurements of the hero or a complete app type scale; no root rem-to-pixel conversion is assumed.

## Layout

At 1440×1000, the hero places the character illustration on the left and its headline and actions on the right. The primary action begins at x=802, y=503; the secondary at x=802, y=565. Their 330px widths align, and the gap between their 50px boxes is 12px. The logo link begins at x=219, y=12. A horizontal course strip sits at the bottom of the first viewport.

The full-page capture alternates illustration-and-copy sections, then opens into a device illustration, a dark Super panel, an English Test section and a green closing/footer area. White space separates the major content groups. These observations do not establish shared web and app spacing tokens.

Use the measured 16px horizontal action padding and 12px hero action gap for this layout. The actual measured action radius is 12px, while the root property `--web-ui_button-border-radius` reads `16px`. The root default is recorded separately from the control geometry. No global spacing unit or card-radius scale was established.

### Responsive Behavior

Only the 1440×1000 desktop homepage was measured; mobile breakpoints, stacking, side-rail collapse and touch-target rules remain unverified.

## Elevation & Depth

The solid lip survives re-measurement as a specific layered treatment:

| Measured face | Shadow on `::before` | Surface behind it |
|---|---|---|
| Green hero primary | `rgb(88, 167, 0) 0px 4px 0px 0px` | White homepage |
| White outlined account and certification actions | `rgb(229, 229, 229) 0px 2px 0px 0px` | White homepage |
| White Super action | `rgba(255, 255, 255, 0.5) 0px 4px 0px 0px` | Deep-martin `#100f3e` |

All three treatments have zero blur and spread. The Super lip is translucent white, so a rule that every lip must be a darker shade of its face would misdescribe this measured variant. No card elevation ladder, modal scrim or backdrop blur was established.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.button-3d`: `0 4px 0 0 #58a700`
- `shadow.button-outline-lip`: `0 2px 0 0 #e5e5e5`

## Motion & Easing

All six controls report the raw computed self transition `all 0s ease 0s`. The second four-action follow-up repeats that string and records `matrix(1, 0, 0, 1, 0, 0)` at rest, hover and keyboard focus. On press, Get started and Super change to `matrix(1, 0, 0, 1, 0, 4)`, while the account and certification actions change to `matrix(1, 0, 0, 1, 0, 2)`. Each `::before` box-shadow changes to `none`, removing the resting lip as the control moves through its depth. The hovered press retains `brightness(1.1)` on Get started and Super, and `brightness(0.9)` on the outlined actions. These are measured 3D press states; the captures do not establish a named duration scale, additional animation curves, release spring, celebration timing or reduced-motion behaviour.

---

Measured 2026-11-02. Live tokens and controls: [homepage](https://www.duolingo.com/). Narrative: [founder letter](https://blog.duolingo.com/duolingos-values-a-letter-from-the-ceo/), [app-design refresh](https://blog.duolingo.com/core-tabs-redesign/), [widget design](https://blog.duolingo.com/widget-feature/), [company and imprint](https://about.duolingo.com/?imprint#contact). Typeface creation: [Monotype's account](https://www.monotype.com/studio/portfolio/duolingo).

## Components

### Shared action construction

The four measured CTAs are 50px high with 12px corner radii, `0px 16px` element padding and 15px/700 labels with 0.8px tracking. Their own backgrounds are `rgba(0, 0, 0, 0)` and their own box shadows are `none`. The visible faces and lips are on `::before`. Keep that distinction when implementing the layered construction; the component entries omit the transparent element's `bg`.

| Control | Width | Label | Visible `::before` face and depth | Hover change | Measured pressed change |
|---|---|---|---|---|---|
| Get started, hero link to `/register` | 330px | `#ffffff` | `#58cc02`, 330×46px; `#58a700` shadow `0px 4px 0px 0px` | Element filter `none` → `brightness(1.1)` | Transform `matrix(1, 0, 0, 1, 0, 4)`; `::before` box-shadow `none` |
| I ALREADY HAVE AN ACCOUNT, button | 330px | `#1cb0f6` | `#ffffff`, 330×48px; 2px solid `#e5e5e5` border and `0px 2px 0px 0px` shadow | `none` → `brightness(0.9)` | Transform `matrix(1, 0, 0, 1, 0, 2)`; `::before` box-shadow `none` |
| Try 1 week free, Super button | 154px | `#000437` | `#ffffff`, 153.984×46px; `rgba(255, 255, 255, 0.5)` shadow `0px 4px 0px 0px` over `#100f3e` | `none` → `brightness(1.1)` | Transform `matrix(1, 0, 0, 1, 0, 4)`; `::before` box-shadow `none` |
| Certify your English, English Test link | 330px | `#1cb0f6` | `#ffffff`, 330×48px; same 2px `#e5e5e5` border and 2px lip as the account action | `none` → `brightness(0.9)` | Transform `matrix(1, 0, 0, 1, 0, 2)`; `::before` box-shadow `none` |

The computed face and text colour values remain unchanged during hover; the filter acts on their rendered composite. These are filter states, not separately measured hover hex colours.

For the measured 3D press, move the complete control down by its resting lip depth and remove the `::before` shadow: 4px for Get started and Super, 2px for the account and certification actions. All four start at `matrix(1, 0, 0, 1, 0, 0)`. Their pressed snapshots match both `:active` and `:hover`, retaining the respective hover brightness filter; face fill, label colour, border and dimensions do not change in the compared styles.

### Text links

The English course anchor is 106.8×27.8px, square, unpadded, transparent over white, with `#777777` visible label ink. The inline research link is 210.1×20px, square, unpadded, transparent over white, with `#1cb0f6` ink and no border or shadow. Neither acquired a style change on hover or keyboard focus within the measured scope. They remain prose examples rather than interactive component tokens.

No search input, interactive card, lesson answer tile, badge, progress bar, feedback bar, dialog or toggle was measured on this surface.

### States

| Control | Rest | Hover | Pressed | Keyboard focus |
|---|---|---|---|---|
| `get-started` | Green pseudo face, white label, 4px green lip | Filter `brightness(1.1)` | `matrix(1, 0, 0, 1, 0, 4)`; pseudo shadow `none`; hover filter retained | Tab #4; no style change in scope |
| `existing-account` | White pseudo face, blue label, grey 2px border/lip | Filter `brightness(0.9)` | `matrix(1, 0, 0, 1, 0, 2)`; pseudo shadow `none`; hover filter retained | Tab #5; no style change in scope |
| `course-english` | Transparent over white, grey visible label | No style change in scope | UNMEASURED | Tab #6; no style change in scope |
| `research-link` | Transparent over white, blue text | No style change in scope | UNMEASURED | Tab #48; no style change in scope |
| `super-trial` | White pseudo face, dark-blue label, translucent 4px lip | Filter `brightness(1.1)` | `matrix(1, 0, 0, 1, 0, 4)`; pseudo shadow `none`; hover filter retained | Tab #51; no style change in scope |
| `certify-english` | White pseudo face, blue label, grey 2px border/lip | Filter `brightness(0.9)` | `matrix(1, 0, 0, 1, 0, 2)`; pseudo shadow `none`; hover filter retained | Tab #52; no style change in scope |

Every hover snapshot matched `:hover`; a second capture reproduced the two hero controls' geometry, rest layers and hover filters. The second four-action follow-up reproduced all four identities, rest layers, hover filters and focus results, and measured the pressed changes above with `:active=true`. The earlier failed press attempts are superseded for these four actions; the two text links remain UNMEASURED. Hover and active then stopped matching during their respective crops, so the computed snapshots establish these states while the resulting crops do not establish their visual appearance.

“No style change” is limited to the probe's computed-style and DOM-attribute comparison: the element and its pseudos, descendants and their pseudos, and three ancestor levels and their pseudos. The action controls have one descendant each; English has two including an image; research has none. The comparison includes colour, backgrounds, borders, drawn outlines, shadows, filters, transforms, opacity, size, decoration, image/source attributes, masks and SVG internals. It does not prove absence of changes in siblings, external sprite internals, canvas, video or other out-of-scope rendering. No focus indicator or browser `auto` ring was observed in this scope. Disabled, loading, lesson success, lesson error and empty states were not measured.

## Do's and Don'ts

The following implementation guidance is derived from the measured homepage:

- Keep the primary's green face and solid 4px lip together; keep the outlined action's 2px border and 2px lip together.
- Set these action labels in the loaded `duolingo-sans`, 15px/700, with 0.8px tracking and uppercase presentation.
- Apply hover brightness to the complete layered control so face, lip and label participate together.
- Use `#777777` for the measured paragraph foreground and `#1cb0f6` for the measured research link.
- Retain the measured 50px action height and the aligned 330px hero pair.
- Preserve the white Super action on its dark panel when reproducing that section.

Do not infer lesson-state colours from the existence of similarly named root tokens. Do not replace the measured fonts with an unlabelled substitute, assign a new hover hex by multiplying RGB channels, or add an unmeasured press animation.

## Voice & Tone

The homepage combines short action labels with benefit-led, friendly section language. Starting, returning to an account, trying Super and certifying English each get a direct instruction. The character artwork carries much of the playful expression.

The official widget article supplies a concrete example of personality serving a task: Duo's illustrated mood changes with the time of day and whether the learner has practised, becoming increasingly desperate as midnight approaches. That supports expressive reminders. It does not establish a universal rule for error messages or a prohibition on particular words inside lessons.

## Agent Prompt Guide

### Quick reference

Hero primary: `#58cc02` face, `#58a700` lip, `#ffffff` label. Outline: white face, `#e5e5e5` border/lip, `#1cb0f6` label. Reading ink: `#777777`. Super: `#100f3e` panel, white face, `#000437` label, translucent white lip.

### Component prompts

- “Build the measured hero Get started link: a transparent 330×50px anchor on white, 12px radius, `0px 16px` padding, and a `::before` face in `#58cc02` with a solid `#58a700` 4px bottom shadow. Use loaded `duolingo-sans` 15px/700 uppercase text, 0.8px tracking. Hover changes the element filter to `brightness(1.1)`.”
- “Pair it with the measured account button: the same outer geometry, a white `::before` face with 2px `#e5e5e5` border and a 2px lip, and `#1cb0f6` label. Hover applies `brightness(0.9)` to the complete control.”
- “For the Super section, use the measured 154×50px white-faced action over `#100f3e`, label `#000437`, and a 4px bottom lip in `rgba(255, 255, 255, 0.5)`.”
