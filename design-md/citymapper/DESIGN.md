---
name: Citymapper
colors:
  primary: '#37ab2f'
  primary-hover: '#2e9127'
  green-light: '#53cb4b'
  green-dark: '#24711f'
  bright-green: '#2dc922'
  foreground: '#383838'
  text-secondary: '#4a4a4a'
  grey-70: '#666666'
  grey-50: '#8b8b8b'
  grey-20: '#cbcbcb'
  grey-10: '#e8e8e8'
  surface: '#f6f6f6'
  canvas: '#ffffff'
  night: '#090512'
  shade: '#001122'
  blue: '#417193'
  blue-deep: '#002f50'
  bright-blue: '#1e8aff'
  bright-blue-light: '#e9f3ff'
  orange: '#fe9001'
  yellow: '#f5c402'
  red: '#d22020'
  purple: '#895a93'
typography:
  label:
    fontSize: 14px
    use: the Get Me Somewhere button, 700
  body:
    fontSize: 16px
    use: body text, the search field and the city switcher
  store:
    fontSize: 20px
    use: the app-store buttons, 700
  action:
    fontSize: 24px
    use: the Go button, 700
rounded:
  sm: 4px
  md: 8px
  lg: 20px
  pill: 96px
components:
  button-cta:
    type: button
    backgroundColor: '#000000'
    textColor: '#ffffff'
    rounded: 4px
    height: 38px
    padding: 4px 8px
    typography: 14px / 700
    hover: '#333333'
    pressed: '#333333, opacity 0.7'
    focus: 'outline 2px solid #000000, bg #333333'
    use: 'Get Me Somewhere in the header — the right half of a joined pair, rounded 0 4px 4px 0. Hover lifts to #333333; press also fades to 0.7; focus draws a solid black ring.'
  button-go:
    type: button
    backgroundColor: '#37ab2e'
    textColor: '#ffffff'
    rounded: 96px
    height: 52px
    padding: 14px 30px
    typography: 24px / 700
    hover: '#2e9127'
    pressed: '#2e9127'
    focus: 'outline 2px solid #000000'
    use: Go, beside the journey fields — the key green as a pill, darkening on hover. Rendered one channel off the --color-key and --color-green-60 tokens.
  button-store:
    type: button
    backgroundColor: '#090512'
    textColor: '#ffffff'
    rounded: 80px
    height: 48px
    padding: 12px
    typography: 20px / 700
    shadow: rgba(0,17,34,0) 0 0 0 0
    hover: scale 1.04, shadow rgba(0,17,34,0.2) 0 12px 28px
    pressed: scale 1.04, shadow rgba(0,17,34,0.2) 0 12px 28px
    focus: outline 3px solid rgba(30,138,255,0.6)
    use: iPhone and Android on the hero, one shared style. Hover lifts the button — it scales to 1.04 and gains a long shadow tinted with --color-shade. The only controls whose focus ring uses --color-focus.
  pill-city:
    type: button
    backgroundColor: rgba(255,255,255,0.1)
    textColor: '#ffffff'
    rounded: 64px
    height: 35px
    padding: 9px 20px 8px
    typography: 16px / 700
    hover: rgba(255,255,255,0.2)
    pressed: rgba(255,255,255,0.2)
    focus: outline 3px solid rgba(255,255,255,0.5)
    use: Switch City on the dark header — a translucent white pill that doubles its fill on hover, with a translucent white focus ring.
  input-search:
    type: input
    backgroundColor: transparent
    textColor: '#4a4a4a'
    rounded: 5px
    height: 38px
    padding: 8px 0 8px 8px
    typography: 16px / 400
    hover: transparent
    focus: transparent
    use: The start-location field (labelled only by aria-label). Nothing visible changes on hover or keyboard focus — its outline colour changes but its outline style stays none, so no ring is drawn.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Proxima Soft
---

# Design System Inspiration of Citymapper

## Overview

### Visual Theme & Atmosphere

Citymapper is the London-born journey planner whose company page opens with its mission,
"Making Cities Usable". It was started by Azmat Yusuf, a former Google engineer, in London — press accounts put the
founding in 2010 or 2011 — and grew city by city into an app its company page credits with "50m+ downloads" and
"multiple Apps of the Year from Apple and Google". In March 2023 it joined
Via, the New York transit-technology company; Citymapper's own announcement says the apps keep
running and the team joins "with the same roadmap and mission".

Its identity took its present shape in late 2013, when — as Fonts In Use records — Citymapper
"switched to a comprehensive identity using Proxima Nova Soft", the rounded-terminal sans that
still sets the site. Its design lead at the time, Gilbert Wedam, described the aim to It's Nice
That in 2015 as building a product that makes you feel something, not only one that does something
well, and named London's own transit graphics — the roundel, the buses, the Tube map — as the
inspiration.

The web home reads that way: a **key green `#37ab2f`** that is the brand, a soft charcoal ink
**`#383838`**, a near-black **`#090512`** with a faint violet cast, pale grey surfaces, rounded
type, and very round buttons. It is friendly rather than technical.

What makes it worth reading:

- **The green has a name for its job:** `--color-key`.
- **Borders are shadows.** Dividers are a 0.5px box-shadow hairline in `--color-shade` `#001122`
  at 6%; the page has almost no borders at all.
- **Focus is authored four ways** — black, blue, white, and none — depending on the control.

#### Primary tasks
- Plan a journey from the home page; open the web app.
- Get the iPhone or Android app; switch city.

### Brand Narrative

Citymapper set out to make a transit tool people would like, not just use — its 2015 design lead
said as much — and took its visual cues from the transport systems it maps. The 2013 identity gave
it a rounded typeface; the web still speaks in that voice, with one green that means Citymapper,
round buttons, soft charcoal text and a black that is not quite black.

The token layer is small and practical: a named key colour, a grey ramp exposed under two names, and
a focus colour that exists as a token but is used by only two buttons — a system that has drifted a
little from its own intent, and records it.

### Principles

- **One key colour.** Green is the brand; everything else supports it.
- **Soft over sharp.** Rounded type, round buttons, off-black ink.
- **Lift, don't flash.** Primary destinations rise under the pointer.

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured with `getComputedStyle` on `citymapper.com`: **68 custom properties**, 66 colours and two
font stacks, all flat names with no framework prefix. Read two ways — enumerating the root's
computed style and walking every stylesheet rule — and the two lists agree exactly.

### Green — the key

- **Primary** (`#37ab2f`) — `--color-key`, `--color-green` and `--color-green-50`. Rendered as
  **`#37ab2e`** on the Go button, one channel off.
- **Primary Hover** (`#2e9127`) — the Go button's hover fill, one channel off `--color-green-60`
  `#2f9027`.
- **Green Light** (`#53cb4b`) — `green-40` · **Green Dark** (`#24711f`) — `green-70`, also
  `--color-key-70` · **Bright Green** (`#2dc922`) — `--color-bright-green`, a one-off outside the
  ramp.

### Greys — one ramp, two names

`--color-grey-*` and `--color-contrast-*` are the same ramp value for value: `1` `#fdfdfd` · `5`
**`#f6f6f6`** · `10` **`#e8e8e8`** · `20` **`#cbcbcb`** · `30` `#bababa` · `40` `#a8a8a8` · `50`
**`#8b8b8b`** · `60` `#747474` · `70` **`#666666`** · `80` **`#4a4a4a`** · `90` `#383838` · `95`
`#1f1f1f`.

- **Foreground** (`#383838`) — `--color-text`, `grey-90`. The computed colour of 422 visible elements, and of most `<p>`.
- **Text Secondary** (`#4a4a4a`) — `grey-80`, 78 elements; the search field's text.
- **Surface** (`#f6f6f6`) — `grey-5`, the most-painted background (14).
- **Canvas** (`#ffffff`) — `--color-root` / `--color-white`, written as the keyword `white`.

### Near-black and shade

- **Night** (`#090512`) — `--color-black` and `--color-contrast`, written `rgb(9, 5, 18)`. Not pure
  black; it carries a little blue and violet. The app-store buttons use it. The header's Get Me
  Somewhere button is pure `#000000`.
- **Shade** (`#001122`) — `--color-shade`, used only inside shadows — the hairline dividers and the
  app-store buttons' hover lift.

### Blues — two families

- **Blue** (`#417193`) — `--color-blue`, a muted steel ramp (`blue-10` `#cfdce4` to **`blue-90`
  `#002f50`**).
- **Bright Blue** (`#1e8aff`) — `--color-bright-blue`, with **`#e9f3ff`** as its tint. It feeds
  `--color-focus`, written `rgba(30, 138, 255, 0.6)`, and `--color-focus-alpha-0` (the same at 0),
  which every control carries as its resting outline colour.

### Accents

**Orange** `#fe9001` · **Yellow** `#f5c402` · **Red** `#d22020` · **Purple** `#895a93`, each with a
short ramp (red has a single step).

## Typography

### Font family

**Proxima Soft** — the rounded Proxima — is the rendered face, served by Adobe Fonts (Typekit kit
`wrk4ssz`, weights 400 and 700, both loaded in `document.fonts`). Every element computes
`proxima-soft, BloggerSans, sans-serif`.

**BloggerSans** also loads, regular and bold, self-hosted from `citymapper.com/static/fonts/` — it
sits second in the stack and renders what the Typekit face does not cover. It is recorded as found,
not as a brand face.

The custom properties disagree with the live cascade: `--font-base` and `--font-body` both declare
`"Proxima Nova Soft", proxima, -apple-system, BlinkMacSystemFont`, but no element uses them. The
rendered family is the `proxima-soft` stack above.

### Scale

Controls set 14px (the header button), 16px (body, the search field, the city switcher), 20px (the
app-store buttons) and 24px (Go), bold at 700 except body and the field at 400. Headings use the
same family; weight separates them.

## Layout

- Separators are box-shadows: `rgba(0,17,34,0.06) 0 -0.5px 0 0.5px` appears 12 times, and the
  border census is effectively empty.
- Component padding sits on a 4px base — 4, 8, 16, 20px — with 64px / 72px for large panels.

### Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## Elevation & Depth

At rest the page is flat apart from the hairlines. Elevation appears on interaction: the app-store
buttons rise on hover with `rgba(0,17,34,0.2) 0 12px 28px, rgba(0,17,34,0.06) 0 0 0 0.5px`. Several
elements carry a zero-size shadow in the shade colour at rest, ready to transition.

## Motion & Easing

The app-store buttons animate their scale and shadow on hover; the resting zero-size shadows exist
so that the transition has something to animate from. Durations were not recorded, and no motion
token is published.

---

**Tier 1 sources:** https://citymapper.com/ (live web home — 68 custom properties read two ways via `getComputedStyle` and a recursive rule walk; five controls measured at rest, hover, pressed and focus; Proxima Soft confirmed loaded via Adobe Fonts, captured 2026-09-23); https://citymapper.com/zz-this-does-not-exist (nonsense-path control — the host answers HTTP 200 for every path, and this renders the same client-side "Not Found" as other unknown paths, so a catch-all 200 is not taken as a page, captured 2026-09-23); https://citymapper.com/i/2582/citymapper-joins-via (Citymapper's own announcement of joining Via — apps continue, team joins "with the same roadmap and mission", read 2026-09-23)

**Regional sources:** https://techcrunch.com/2023/03/16/via-acquires-trip-planning-app-citymapper-to-boost-transit-tech/ (TechCrunch, 2023-03-16 — Via confirms the acquisition); https://www.cityam.com/citymapper-appoints-advisers-amid-takeover-interest/ (City A.M., 2020 — Citymapper, founded in 2010 by former Google employee Azmat Yusuf, appoints advisers); https://fontsinuse.com/uses/11754/citymapper-identity-2013 (Fonts In Use — the late-2013 identity in Proxima Nova Soft); https://www.itsnicethat.com/articles/citymapper-gilbert-wedam-1 (It's Nice That, 2015 — interview with design lead Gilbert Wedam)

## Components

Five controls, every state on its own page load, focus read before the mouse moved.

- **Get Me Somewhere** — `#000000`, white 14px/700, 38px, `4px 8px`, rounded `0 4px 4px 0` as the
  right half of a joined pair. Hover **`#333333`**; press adds opacity 0.7.
- **Go** — `#37ab2e`, white 24px/700, a 96px-radius pill, 52px, `14px 30px`. Hover **`#2e9127`**.
- **App-store buttons** — `#090512`, white 20px/700, 48px, 80px radius. Hover **lifts**: the button
  scales to 1.04 and gains `rgba(0,17,34,0.2) 0 12px 28px`, a long shadow in the shade colour.
- **Switch City** — `rgba(255,255,255,0.1)` on the dark header, white 16px/700, 64px radius. Hover
  doubles the fill to `rgba(255,255,255,0.2)`.
- **Start-location field** — transparent, `#4a4a4a` 16px, 5px radius, 38px. **Nothing visible
  changes on hover or focus.**

### Focus — four treatments

| control | focus |
|---|---|
| Get Me Somewhere, Go | `outline: 2px solid #000000` (Get Me Somewhere also turns `#333333`) |
| App-store buttons | `outline: 3px solid rgba(30,138,255,0.6)` — `--color-focus` |
| Switch City | `outline: 3px solid rgba(255,255,255,0.5)` |
| Start-location field | **none** — the outline colour changes, but its style stays `none`, so nothing draws |

Every control rests with `--color-focus-alpha-0` as its outline colour; only the app-store buttons
arrive at `--color-focus` itself. The primary search field — the first thing most visitors use —
has no visible keyboard focus.

### Radius

Rendered: **20px** ×17 (cards) · **8px** ×7 · 5px ×2 · 80px ×2 · 45px ×2 · 96px · 64px · 24px ·
4px. Round is the default; the largest radii are pills.

### States

Five components, every state measured. Hover: the dark button lifts to `#333333`, Go darkens to
`#2e9127`, the app-store buttons scale and cast a shadow, the city pill doubles its fill, the search
field does not change. Focus: black, blue, white or none, as tabled above. No disabled state was
observed.

## Do's and Don'ts

### Do
- Use `#37ab2f` as the one brand colour and `#383838` for text.
- Draw dividers as a hairline shade shadow, not a border.
- Round everything; make buttons pills.
- Let hover lift a button (scale plus shadow) rather than recolour it, where it is a primary
  destination.

### Don't
- Don't use pure black for the brand black — it is `#090512`.
- Don't read `--font-base` as the rendered family.
- Don't copy the search field's missing focus indicator.
- Don't count BloggerSans as the brand face.

## Voice & Tone

Not assessed as authored voice. The web home carries only 262 characters of text; the company
page writes in short, emoji-punctuated lines.

## Agent Prompt Guide

### Quick Color Reference
`#37ab2f` key green · `#2e9127` green hover · `#383838` ink · `#4a4a4a` secondary ·
`#f6f6f6` surface · `#ffffff` canvas · `#090512` near-black · `#001122` shade (shadows only) ·
`#1e8aff` bright blue (focus) · `#417193` steel blue · `#fe9001` orange · `#d22020` red

### Example Component Prompts
- "A 52px pill button: `#37ab2f`, white 24px/700 Proxima Soft; hover `#2e9127`; focus
  `2px solid #000`."
- "A dark 48px app-store pill: `#090512`, white 20px/700; hover scales to 1.04 with
  `rgba(0,17,34,0.2) 0 12px 28px`."

## Governance

### Known Gaps

- **Contrast, `button-go`.** Text `#ffffff` on `#37ab2e` measures 2.99:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `pill-city`.** Text `#ffffff` on `#ffffff1a` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `input-search`.** Text `#4a4a4a` on `#00000000` measures 2.37:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
