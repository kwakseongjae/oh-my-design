---
name: Sanity
colors:
  brand-srgb-approx: '#ff5500'
  canvas: '#ffffff'
  foreground: '#0b0b0b'
  surface: '#212121'
  surface-subtle: '#ededed'
  on-dark: '#ffffff'
  muted: '#b9b9b9'
  divider: '#d6d6d6'
  focus-blue: '#0052ef'
typography:
  display-hero:
    fontSize: 112px
    fontWeight: 400
    lineHeight: 112
    letterSpacing: '-4.48px'
    use: Home H1
  section:
    fontSize: 48px
    fontWeight: 400
    lineHeight: 51.84
    letterSpacing: '-1.68px'
    use: Home section heading
  body:
    fontSize: 15px
    fontWeight: 400
    lineHeight: 22.5
    letterSpacing: '-0.15px'
    use: Repeated body and input text
  control:
    fontSize: 13px
    fontWeight: 400
    lineHeight: 16.9
    use: Compact action labels
rounded:
  input: 3px
  control: 99999px
spacing:
  xs: 4
  sm: 8
  md: 12
  lg: 24
  xl: 32
components:
  button-brand:
    type: button
    textColor: '#0b0b0b'
    rounded: 99999px
    padding: 4px 12px
    typography: 13px/400 IBM Plex Mono-eea356736565d76d
    hover: near-black fill with P3-orange text
    use: P3 orange pill; home + pricing surfaces
    pressed: '#b9b9b9'
  button-inverse:
    type: button
    backgroundColor: '#0b0b0b'
    textColor: '#ffffff'
    rounded: 99999px
    padding: 4px 12px
    typography: 13px/400 IBM Plex Mono-eea356736565d76d
    hover: near-black fill with white text
    use: Compact inverse pill
    pressed: '#ededed'
  button-light:
    type: button
    backgroundColor: '#ededed'
    textColor: '#0b0b0b'
    rounded: 99999px
    padding: 4px 12px
    typography: 13px/400 IBM Plex Mono-eea356736565d76d
    hover: light-gray fill with near-black text
    pressed: light-gray fill with near-black text
    use: Compact light pill
  input-text:
    type: input
    backgroundColor: '#0b0b0b'
    textColor: '#b9b9b9'
    rounded: 3px
    padding: 8px 12px
    typography: 15px/400 Waldenburg-75357948a2b6a39b
    focus: 'P3-orange border, #212121 fill, white text'
    use: Home textarea
fonts:
  roles:
    sans: Waldenburg-75357948a2b6a39b
    mono: IBM Plex Mono-eea356736565d76d
---

# Design System Inspiration of Sanity

## Overview

### Visual Theme & Atmosphere

Sanity is a configurable backend and content platform for teams building content-driven websites, apps, and AI experiences. Its current positioning is the Content Operating System: structured content, an extensible Studio, and APIs/automation that let organizations shape the content workflow around their own business. The public site makes that engineering posture tangible with a deliberately spare mix of editorial-sized Waldenburg type, compact IBM Plex Mono controls, and hard-edged light/dark panels rather than a decorative CMS aesthetic.

The observed marketing surface uses a white base (`#ffffff`) and near-black foreground (`#0b0b0b`), with the P3 orange `color(display-p3 1 0.3333 0)` as the conspicuous action color. That P3 value is the primary live value; `#ff5500` is included below only as an sRGB approximation for consumers that require hex. Pills recur in compact navigation/pricing actions, while the home hero has a larger 24px Waldenburg action. Sanity’s 2025 launch framed this product direction as a move from CMS category language toward a Content Operating System, with AI and workflow automation as part of the platform rather than a separate visual theme.

**Key Characteristics:**
- White and near-black base surfaces with a P3-orange action signal
- Loaded Waldenburg for editorial content and loaded IBM Plex Mono for compact controls
- Strongly rounded action pills (99999px in the observed product-marketing controls)
- Small, exact spacing increments: 4px/8px/12px recur in controls; 24px/32px appear in hero actions
- Light/dark inversion is an observed hover treatment for the P3-orange action, not a general rule for every control

### Primary tasks

- Build a content-driven website or app on a configurable backend
- Shape the content workflow around how your own business runs
- Open the pricing page from the home navigation to compare plans

### Brand Narrative

Sanity describes the current platform as a Content Operating System rather than a conventional CMS: a structured content foundation with a configurable Studio, APIs/SDKs, automation, and AI-oriented tools. The first-party 2025 platform launch describes Content Lake, Studio, custom content applications, automation, an AI agent, Media Library, Canvas, and Dashboard as parts of that connected direction. This narrative describes product scope and evolution; it does not turn the marketing-site controls in §4 into Studio application components.

### Principles

1. **Structured content, configurable workflow.** *UI implication:* public messaging emphasizes adapting content systems to how an organization works.
2. **Developer affordances remain visible.** *UI implication:* retain the editorial/technical typography contrast when reproducing observed marketing controls.
3. **Accessibility and composability in Sanity UI.** *UI implication:* Sanity UI is an official React toolkit, but its documentation chrome is not a source for the marketing component measurements here.
4. **Evidence-domain discipline.** *UI implication:* reuse only listed P3, inverse, light-pill, textarea, and dialog variants; leave other components absent.

### Personas

No fictional personas are asserted. First-party public navigation identifies developers, content editors, product owners, and business leaders as relevant audiences; this reference does not infer demographics, locations, jobs, or workflows beyond those published groups.

## Colors

### Brand Action
- **Sanity Orange (live P3)** (`color(display-p3 1 0.3333 0)`): Observed as background and border on home and pricing action pills. The hex `#ff5500` is an sRGB approximation retained for token consumers; it is not a replacement for the P3 source value.
- **Near Black** (`#0b0b0b`): Primary foreground, dark button fill, and the hover inversion partner for the orange action.

### Surfaces & Text
- **White** (`#ffffff`): Observed base background and text on inverse controls.
- **Dark Gray** (`#212121`): Observed textarea background and a dark secondary surface.
- **Light Gray** (`#ededed`): Compact light-pill fill across home and pricing.
- **Silver** (`#b9b9b9`): Muted text and the observed hover fill of one pricing control.
- **Divider Gray** (`#d6d6d6`): Observed dialog border.

### State-specific Evidence
- **Blue** (`#0052ef`): Observed as a border/background in the captured surfaces; its exact component assignment is not generalized here.
- The focused home textarea uses the P3-orange border. No error/success palette is promoted because this capture did not observe those states.

## Typography

### Font Family
- **Live product/marketing sans:** `Waldenburg-75357948a2b6a39b` is both computed and loaded (832 observed uses across body, headings, buttons, inputs, and dialogs). The current evidence exposes no browser-loadable source URL, so the family is preserved by its delivered family name only; no substitute is authorized.
- **Live product/marketing mono:** `IBM Plex Mono-eea356736565d76d` is both computed and loaded (568 observed uses across controls, labels, and content). The upstream IBM Plex family is distributed under the SIL Open Font License 1.1 by IBM; that license source does not establish a separate Sanity font asset.
- **Declared only:** Inter/Inter var appear in third-party `assets.qualified.com` declarations with zero visible uses; they are excluded from the UI family tokens.
- **System/embedded chrome:** Helvetica is present only in the cookie-consent dialog (three uses); it is system/embedded chrome, not a Sanity product or marketing type token.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display / Hero | Waldenburg | 112px | 400 | 112px | -4.48px | One home H1 observation |
| Hero / CTA | Waldenburg | 24px | 400 | 26.4px | -0.24px | Home action pill |
| Section heading | Waldenburg | 48px | 400 | 51.84px | -1.68px | Home heading observation |
| Body compact | Waldenburg | 15px | 400 | 22.5px | -0.15px | Repeated body/input observation |
| Body | Waldenburg | 16px | 400 | 24px | normal | Repeated content observation |
| Control label | IBM Plex Mono | 13px | 400 | 16.9px | normal | Repeated compact action and label observation |

### Principles
- **Two delivered registers**: Waldenburg handles the editorial scale; IBM Plex Mono is the dense utility/control register.
- **Tracking is evidence-bound**: The capture shows increasingly negative tracking at the observed 24px, 48px, 72px, and 112px sizes. It does not establish a global OpenType-feature policy.
- **No fallback substitution**: a loaded but source-less Waldenburg delivery is still a live family fact; external implementations must label it unavailable rather than silently render Inter or a system font as Waldenburg.

## Layout

The retained spacing observations are 4px, 8px, 12px, 24px, and 32px. They occur in the selector-bound controls documented in §4; they do not establish a global scale, grid, content width, gutter, or card layout. The retained radii are 3px for the home textarea and 99999px for the observed compact and hero action pills. No other radius scale is canonical.

### Responsive Behavior

This packet contains desktop `1440×900` captures only. No breakpoint, collapse, mobile type, gutter, touch-target, or responsive component claim is retained. A future responsive capture must establish those values independently.

## Elevation & Depth

The only retained elevation observation is the pricing dialog: `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px` and `rgba(0, 0, 0, 0.1) 0px 4px 6px -4px`, alongside its `#ffffff` surface and `#d6d6d6` border. No general shadow scale, overlay, focus ring, card elevation, or depth philosophy is promoted from this packet.

## Motion & Easing

| Token | Value | Use |
|---|---|---|
| Motion tokens | Not measured in the supplied capture |

No duration, easing, or reduced-motion rule is promoted without a measured source.

---

**Verified:** 2026-07-13
**Tier 1 sources:** https://www.sanity.io/ · https://www.sanity.io/pricing · https://www.sanity.io/ui · https://www.sanity.io/blog/why-the-age-of-cms-is-over
**Tier 2 sources:** https://getdesign.md/sanity/design-md · https://styles.refero.design/?q=Sanity (direct built-in access unavailable; no indexed result observed)
**Conflicts unresolved:** none

## Components

### Actions

**Brand compact pill**
- Background: `color(display-p3 1 0.3333 0)`
- Text: `#0b0b0b`
- Border: 1px solid `color(display-p3 1 0.3333 0)`
- Radius: 99999px
- Padding: 4px 12px
- Font: 13px / 400 / IBM Plex Mono-eea356736565d76d
- Hover: Background `#0b0b0b`; Text `color(display-p3 1 0.3333 0)`
- Use: Home and pricing action links; `home::[data-omd-capture="14"]`, `surface-2::[data-omd-capture="10"]`, and `surface-3::[data-omd-capture="10"]`.

**Brand hero pill**
- Background: `color(display-p3 1 0.3333 0)`
- Text: `#0b0b0b`
- Border: 1px solid `color(display-p3 1 0.3333 0)`
- Radius: 99999px
- Padding: 8px 32px
- Font: 24px / 400 / Waldenburg-75357948a2b6a39b
- Hover: Background `#0b0b0b`; Text `color(display-p3 1 0.3333 0)`
- Pressed: Background `#0b0b0b`; Text `#0b0b0b`
- Use: Home hero action only; `home::[data-omd-capture="15"]`.

**Inverse compact pill**
- Background: `#0b0b0b`
- Text: `#ffffff`
- Border: 1px solid `#0b0b0b`
- Radius: 99999px
- Padding: 4px 12px
- Font: 13px / 400 / IBM Plex Mono-eea356736565d76d
- Hover: Background `#0b0b0b`; Text `#ffffff`
- Use: Home and pricing compact inverse actions; `home::[data-omd-capture="13"]` and matching pricing surfaces.

**Light compact pill**
- Background: `#ededed`
- Text: `#0b0b0b`
- Radius: 99999px
- Padding: 4px 12px
- Font: 13px / 400 / IBM Plex Mono-eea356736565d76d
- Hover: Background `#ededed`; Text `#0b0b0b`
- Pressed: Background `#ededed`; Text `#0b0b0b`
- Use: Repeated home/pricing compact control; `home::[data-omd-capture="6"]` and matching pricing surfaces.

### Form field

**Home textarea**
- Background: `#0b0b0b`
- Text: `#b9b9b9`
- Border: 1px solid `#212121`
- Radius: 3px
- Padding: 8px 12px
- Font: 15px / 400 / Waldenburg-75357948a2b6a39b
- Focus: Border `color(display-p3 1 0.3333 0)`; Background `#212121`; Text `#ffffff`
- Use: Home form only; `home::[data-omd-capture="22"]` and `::state-focus`.

### Dialog

**Pricing dialog**
- Background: `#ffffff`
- Text: `#0b0b0b`
- Border: 1px solid `#d6d6d6`
- Padding: 16px
- Font: 14px / 400 / Waldenburg-75357948a2b6a39b
- Use: Observed open after pricing controls; `surface-2::[data-omd-interaction-capture="dialog-0-0"]` and repeated on the query-ref pricing capture.

### Published component roster (36 published, none measured here)

Sanity UI publishes **36 documented exports**, read from its own docs navigation at
`https://www.sanity.io/ui/docs` on 2026-09-19. The three groupings are the host's own — its URLs
are `/ui/docs/primitive/…`, `/ui/docs/component/…` and `/ui/docs/util/…` — and are kept rather
than flattened, because the distinction is Sanity's.

- **Primitives (26)** — Avatar, AvatarCounter, AvatarStack, Badge, Box, Button, Card, Checkbox, Code, Container, Flex, Grid, Heading, Inline, KBD, Label, Popover, Radio, Select, Spinner, Stack, Switch, Text, TextArea, TextInput, Tooltip
- **Components (7)** — Autocomplete, Dialog, Hotkeys, Menu, MenuButton, Tab, Toast
- **Utils (3)** — ElementQuery, Layer, Portal

### What this reference measured

The four stylings in §4 came from `sanity.io` marketing surfaces — the first reads "P3 orange
pill; home + pricing surfaces". That is the company's website, a separate evidence domain from
the Sanity UI documentation, and no capture carries a `@sanity/ui` class. None of the 36 above
carries a measured value here.

### States

| State | Treatment |
|---|---|
| Product empty/loading/error/success states | Not captured on an authenticated Sanity product surface; no state recipe is claimed. |
| Marketing interaction states | Only the §4 hover, pressed, focus, and dialog-open observations are retained. |

## Do's and Don'ts

### Do
- Preserve `color(display-p3 1 0.3333 0)` as the source value for the observed orange actions; use `#ff5500` only where an sRGB hex is technically required.
- Keep the observed compact action geometry together: 99999px radius, 4px 12px padding, and 13px / 400 IBM Plex Mono.
- Keep the observed hero action separate from compact controls: 8px 32px padding and 24px / 400 Waldenburg.
- Use the captured light/dark inversion only for the listed P3-orange action variants.
- Preserve the home textarea's 3px radius and captured P3-orange focus border when reproducing that field.

### Don't
- Don't replace loaded Waldenburg with Inter, a system stack, or another plausible substitute.
- Don't promote the cookie dialog's Helvetica or declared-only Inter assets into Sanity UI typography.
- Don't treat the pricing dialog or marketing controls as Sanity Studio application components.
- Don't generalize `#0052ef`, cards, responsive breakpoints, or unobserved error/success states from this capture.

## Voice & Tone

Sanity's voice is **content-platform-confident and developer-warm.** "The Content Operating System for the AI era" — confident enterprise positioning with developer-friendly chrome. Mixed type system + flat-no-shadow signals "premium content tooling."

| Context | Tone |
|---|---|
| CTA | Verb. "Get started", "Talk to sales", "Start free" |
| Marketing | Capability-list. Studio + Dataset + Content Lake naming |
| Documentation | Deep, code-block-heavy, GROQ-aware |
| Error | Specific. "Schema validation failed at field X." |

**Voice samples**
- Tagline: *"The Content Operating System for the AI era"* <!-- verified: sanity.io homepage 2026-05 -->

**Forbidden phrases.** "Revolutionary CMS". Aggressive WordPress-comparison framing.

## Agent Prompt Guide

### Quick Color Reference
```
Base:            #ffffff (observed home background)
Foreground:      #0b0b0b
Dark surface:    #212121 (observed textarea focus fill)
Light pill:      #ededed
Muted text:      #b9b9b9
Orange action:   color(display-p3 1 0.3333 0) (source value)
Orange fallback: #ff5500 (sRGB approximation only)
Blue:            #0052ef (observed, role not generalized)
```

### Example Prompts

**Landing page section:**
"Create a public marketing action using the captured P3-orange source value, #0b0b0b text, 99999px radius, 4px 12px padding, and 13px/400 IBM Plex Mono. On hover, invert it to #0b0b0b with P3-orange text."

**Card grid:**
"Do not generate a canonical Sanity card grid from this reference. The supplied evidence did not establish a reusable marketing card variant."

**Form section:**
"Reproduce the observed home textarea only: #0b0b0b fill, 1px #212121 border, 3px radius, 8px 12px padding, 15px/400 Waldenburg, and a P3-orange focus border with #212121 focus fill."

**Navigation bar:**
"Keep navigation claims to the captured compact pill controls; sticky behavior, backdrop blur, and a universal link-hover rule were not retained as canonical evidence."

### Iteration Guide
1. Start from an observed family and selector, not a broad visual impression.
2. Keep the P3 orange in P3-capable output; disclose the hex approximation when using it.
3. Keep Waldenburg and IBM Plex Mono distinct and do not substitute a system or declared-only family.
4. Add only a listed interaction state to its matching component variant.
