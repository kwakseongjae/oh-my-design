---
name: Malt
colors:
  primary: '#fc5757'
  primary-hover: '#d4524f'
  primary-90: '#a63633'
  primary-10: '#fff4f4'
  secondary: '#0f6378'
  secondary-strong: '#035266'
  secondary-deep: '#014554'
  foreground: '#4b4b4b'
  heading: '#333330'
  text-support: '#737370'
  border: '#e0ded9'
  surface: '#f7f7f5'
  canvas: '#ffffff'
  brand-pink: '#ff91f0'
  brand-blue: '#0529fc'
  ai-purple: '#9035a2'
  tertiary: '#00c0db'
  quaternary: '#ffc200'
  error: '#e02d2d'
  success: '#81b928'
typography:
  button:
    fontSize: 14px
    fontWeight: 400
    use: header button
  nav:
    fontSize: 14px
    fontWeight: 400
    use: header menu
rounded:
  md: 12px
  lg: 24px
  pill: 30px
components:
  button-primary:
    type: button
    backgroundColor: '#fc5757'
    textColor: '#ffffff'
    border: '#fc5757'
    rounded: 30px
    height: 42px
    typography: 14px / 400
    hover: '#d4524f'
    pressed: '#d4524f'
    use: 'Créer mon compte in the header — coral --joy-color-primary-50, deepening to --joy-color-primary-70 #d4524f on hover and press. Keyboard focus draws nothing.'
  link-login:
    type: button
    backgroundColor: transparent
    textColor: '#0f6378'
    rounded: 0px
    height: 26px
    typography: 14px / 700
    hover: 'fg #035266'
    pressed: 'fg #035266'
    use: Me connecter — teal --joy-color-secondary-30 that deepens to --joy-color-secondary-50 on hover and press.
  nav-menu:
    type: button
    backgroundColor: transparent
    textColor: '#333330'
    rounded: 0px
    height: 28px
    typography: 14px / 400
    hover: 'fg #0f6378'
    pressed: 'fg #0f6378'
    use: Platforme, Entreprises, Freelances, Ressources — dark text that turns teal (--joy-color-state-hover) on hover and press.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    display: Agrandir Tight
    sans: Moderat
---

# Design System Inspiration of Malt

## Overview

### Visual Theme & Atmosphere

Malt is a marketplace that connects companies with freelancers. Its careers site says it was founded
in 2013 by Vincent Huguet and Hugo Lassiège, counts 700,000 freelancers in the Malt community, and
lists offices from Paris and Lyon to Berlin, Munich, Madrid, Amsterdam, Brussels, London and Zurich.
Among the company's stated values: "Joy is our secret sauce" — and Joy is also the name of its
design system.

The French site is warm and upbeat: white and warm off-white **`#f7f7f5`** surfaces, grey text
**`#4b4b4b`**, a coral **`#fc5757`** for the main action and a deep teal **`#0f6378`** for links and
interaction states, with pink, cyan and yellow accents. Headings are set in **Agrandir Tight**, body
in **Moderat**.

What makes it worth reading:

- **A named system with public docs.** Joy is documented on zeroheight at joy.malt.com, and its
  tokens ship as `--joy-*` on the live site.
- **Two scales for two jobs.** Coral (`--joy-color-primary-*`) for the call to action; teal
  (`--joy-color-secondary-*`) for links, hover, focus and selected states.
- **A colour for AI.** `--joy-color-ai-*` adds a purple scale and purple-to-coral gradients for AI
  features.

#### Primary tasks
- Find a freelancer by skill and location; sign up.
- Freelancers: create a profile; sign in.

### Brand Narrative

Malt was founded in 2013 to connect freelancers and companies, and it names "joy" among its values
and as its design system. The interface matches: warm neutrals, a friendly coral for the step that
matters, teal for everything interactive, and a display face with character.

### Principles

- **Coral to act.** One warm colour for the call to action.
- **Teal to interact.** Links, hover, focus and selection share one scale.
- **Joy.** A named, documented system.

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured with `getComputedStyle` on `malt.fr`: 720 root custom properties — `--p-*` 542 (component
properties), `--joy-*` 158, and 12 `--mui-*` (MUI, excluded).

### Coral

- **Primary** (`#fc5757`) — `--joy-color-primary-50`; the sign-up button.
- **Primary hover** (`#d4524f`) — `--joy-color-primary-70`.
- `--joy-color-primary-90` **`#a63633`** · `-10` **`#fff4f4`**.

### Teal (interaction)

- **Secondary** (`#0f6378`) — `--joy-color-secondary-30`, `--joy-color-state-hover`,
  `--joy-color-border-hover`.
- **Secondary strong** (`#035266`) — `--joy-color-state-focus`, `--joy-color-border-focus`.
- **Secondary deep** (`#014554`) — `--joy-color-border-selected`.

### Text and neutrals

- **Foreground** (`#4b4b4b`) — `--joy-color-text-body`; 129 `<p>` elements.
- **Heading** (`#333330`) — `--joy-color-text-heading`.
- **Text support** (`#737370`) · **Border** (`#e0ded9`) · **Surface** (`#f7f7f5`) · **Canvas**
  (`#ffffff`).

### Brand accents and status

**Brand pink** `#ff91f0` · **Brand blue** `#0529fc` · **AI purple** `#9035a2` · **Tertiary**
`#00c0db` · **Quaternary** `#ffc200` · **Error** `#e02d2d` · **Success** `#81b928`.

## Typography

### Font family

**Agrandir Tight** (500, 700) for headings and **Moderat** (400, 700) for body — `Moderat, Arial,
Helvetica, sans-serif` — both loaded (`document.fonts`), with an icon font, `joy-icons`. Source Sans 3
also loads, from an embedded widget.

### Scale

Header controls are 14px; the login link 14px/700.

## Layout

- A search-led hero (skill and location) on white; warm off-white panels.

### Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## Elevation & Depth

`--joy-color-shadow-base` `rgba(24,24,24,.16)`; overlays `--joy-color-overlay` `rgba(51,51,48,.4)`.

## Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.malt.fr/ (live homepage — 720 root custom properties read via `getComputedStyle`; Agrandir Tight and Moderat loaded; three components measured at rest, hover, pressed and focus, captured 2026-09-26); https://joy.malt.com/ (Joy design system on zeroheight, team "Malt" — nonsense path returns 404, read 2026-09-26); https://careers.malt.com/ (Malt careers — founded 2013 by Vincent Huguet and Hugo Lassiège, 700,000 freelancers, offices, "Joy is our secret sauce", read 2026-09-26)

## Components

Measured on the home page, focus read under a real Tab key, and a hover counted only when `:hover`
matched; background-image, text-decoration and pseudo-elements were compared too.

- **Primary** — Créer mon compte: **`#fc5757`**, white 14px, a 30px radius, 42px. Hover and press
  **`#d4524f`**. Keyboard focus draws no indicator.
- **Login link** — Me connecter: teal **`#0f6378`**, 14px/700; hover and press **`#035266`**.
- **Header menu** — Platforme, Entreprises, Freelances, Ressources: `#333330`, turning **`#0f6378`** on
  hover and press.

### Radius

Pill-like 30px on the header button, 24px on the search field, 12px on the language switch.

### States

Hover and press: the primary to `#d4524f`, links and menu items to teal. Focus: nothing drawn on the
measured header controls, although Joy defines focus colours (`--joy-color-state-focus` `#035266`).

## Do's and Don'ts

### Do
- Use coral `#fc5757` for the main action; deepen to `#d4524f`.
- Use teal `#0f6378` for links and interaction states.
- Set headings in Agrandir Tight and body in Moderat.

### Don't
- Don't use coral for links; links are teal.
- Don't leave controls without a visible focus state — the live header lacks one.
- Don't count `--mui-*` as Joy tokens.

## Voice & Tone

Not assessed as authored voice.

## Agent Prompt Guide

### Quick Color Reference
`#fc5757` coral · `#d4524f` coral hover · `#0f6378` teal · `#035266` teal strong · `#4b4b4b` body ·
`#333330` heading · `#f7f7f5` surface · `#e0ded9` border · `#ff91f0` pink

### Example Component Prompts
- "A 42px coral `#fc5757` pill, white 14px Moderat label; hover `#d4524f`."
- "A teal `#0f6378` bold link that deepens to `#035266` on hover."

## Governance

### Known Gaps

- **Contrast, `button-primary`.** Text `#ffffff` on `#fc5757` measures 3.16:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `link-login`.** Text `#0f6378` on `#00000000` measures 3.08:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `nav-menu`.** Text `#333330` on `#00000000` measures 1.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
