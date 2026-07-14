---
id: sanity
name: Sanity
country: US
category: backend-devops
homepage: "https://www.sanity.io"
primary_color: "#ff5500"
logo:
  type: simpleicons
  slug: sanity
verified: "2026-07-13"
omd: "0.1"
ds:
  name: Sanity UI
  url: "https://www.sanity.io/ui"
  type: system
  description: Sanity's accessible React toolkit for building apps with design tokens.
  og_image: "https://cdn.sanity.io/images/mos42crl/production/f378d0067c1406f4e3d3ed6874cd715c72f52d2c-1920x1080.png"
tokens:
  source: reconciled
  extracted: "2026-07-13"
  colors:
    brand-srgb-approx: "#ff5500"
    canvas: "#ffffff"
    foreground: "#0b0b0b"
    surface: "#212121"
    surface-subtle: "#ededed"
    on-dark: "#ffffff"
    muted: "#b9b9b9"
    divider: "#d6d6d6"
    focus-blue: "#0052ef"
  typography:
    family: { sans: "Waldenburg-75357948a2b6a39b", mono: "IBM Plex Mono-eea356736565d76d" }
    display-hero: { size: 112, weight: 400, lineHeight: 112, tracking: -4.48, use: "Home H1" }
    section: { size: 48, weight: 400, lineHeight: 51.84, tracking: -1.68, use: "Home section heading" }
    body: { size: 15, weight: 400, lineHeight: 22.5, tracking: -0.15, use: "Repeated body and input text" }
    control: { size: 13, weight: 400, lineHeight: 16.9, use: "Compact action labels" }
  spacing: { xs: 4, sm: 8, md: 12, lg: 24, xl: 32 }
  rounded: { input: 3, control: 99999 }
  components:
    button-brand: { type: button, fg: "#0b0b0b", radius: 99999, padding: "4px 12px", font: "13px/400 IBM Plex Mono-eea356736565d76d", hover: "near-black fill with P3-orange text", use: "P3 orange pill; home + pricing surfaces" }
    button-inverse: { type: button, bg: "#0b0b0b", fg: "#ffffff", radius: 99999, padding: "4px 12px", font: "13px/400 IBM Plex Mono-eea356736565d76d", hover: "near-black fill with white text", use: "Compact inverse pill" }
    button-light: { type: button, bg: "#ededed", fg: "#0b0b0b", radius: 99999, padding: "4px 12px", font: "13px/400 IBM Plex Mono-eea356736565d76d", hover: "light-gray fill with near-black text", pressed: "light-gray fill with near-black text", use: "Compact light pill" }
    input-text: { type: input, bg: "#0b0b0b", fg: "#b9b9b9", radius: 3, padding: "8px 12px", font: "15px/400 Waldenburg-75357948a2b6a39b", focus: "P3-orange border, #212121 fill, white text", use: "Home textarea" }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, url: "https://www.sanity.io/", inspected: "2026-07-13" }
    - { id: surface-2, url: "https://www.sanity.io/pricing", inspected: "2026-07-13" }
    - { id: surface-3, url: "https://www.sanity.io/pricing?ref=navbar", inspected: "2026-07-13" }
  sources:
    - { id: home, url: "https://www.sanity.io/", kind: product-surface, captured: "2026-07-13" }
    - { id: pricing, url: "https://www.sanity.io/pricing", kind: product-surface, captured: "2026-07-13" }
    - { id: pricing-navbar, url: "https://www.sanity.io/pricing?ref=navbar", kind: product-surface, captured: "2026-07-13" }
  claims:
    "tokens.colors.brand-srgb-approx": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.colors.canvas": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.colors.foreground": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.colors.surface": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.colors.surface-subtle": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.colors.on-dark": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.colors.muted": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.colors.divider": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.colors.focus-blue": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.typography.family.sans": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.typography.family.mono": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.typography.display-hero.size": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.typography.display-hero.weight": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.typography.display-hero.lineHeight": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.typography.display-hero.tracking": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.typography.display-hero.use": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.typography.section.size": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.typography.section.weight": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.typography.section.lineHeight": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.typography.section.tracking": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.typography.section.use": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.typography.body.size": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.typography.body.weight": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.typography.body.lineHeight": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.typography.body.tracking": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.typography.body.use": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.typography.control.size": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.typography.control.weight": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.typography.control.lineHeight": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.typography.control.use": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.rounded.input": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.rounded.control": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.spacing.xs": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.spacing.sm": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.spacing.md": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.spacing.lg": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.spacing.xl": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.button-brand.type": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.button-brand.fg": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.button-brand.radius": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.button-brand.padding": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.button-brand.font": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.button-brand.hover": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.button-brand.use": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.button-inverse.type": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.button-inverse.bg": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.button-inverse.fg": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.button-inverse.radius": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.button-inverse.padding": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.button-inverse.font": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.button-inverse.hover": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.button-inverse.use": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.button-light.type": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.button-light.bg": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.button-light.fg": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.button-light.radius": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.button-light.padding": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.button-light.font": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.button-light.hover": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.button-light.pressed": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.button-light.use": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.input-text.type": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.input-text.bg": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.input-text.fg": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.input-text.radius": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.input-text.padding": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.input-text.font": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.input-text.focus": { surface_id: home, source_id: home, captured: "2026-07-13" }
    "tokens.components.input-text.use": { surface_id: home, source_id: home, captured: "2026-07-13" }
  conflicts: []
---

# Design System Inspiration of Sanity

## 1. Visual Theme & Atmosphere

Sanity is a configurable backend and content platform for teams building content-driven websites, apps, and AI experiences. Its current positioning is the Content Operating System: structured content, an extensible Studio, and APIs/automation that let organizations shape the content workflow around their own business. The public site makes that engineering posture tangible with a deliberately spare mix of editorial-sized Waldenburg type, compact IBM Plex Mono controls, and hard-edged light/dark panels rather than a decorative CMS aesthetic.

The observed marketing surface uses a white base (`#ffffff`) and near-black foreground (`#0b0b0b`), with the P3 orange `color(display-p3 1 0.3333 0)` as the conspicuous action color. That P3 value is the primary live value; `#ff5500` is included below only as an sRGB approximation for consumers that require hex. Pills recur in compact navigation/pricing actions, while the home hero has a larger 24px Waldenburg action. Sanity’s 2025 launch framed this product direction as a move from CMS category language toward a Content Operating System, with AI and workflow automation as part of the platform rather than a separate visual theme.

**Key Characteristics:**
- White and near-black base surfaces with a P3-orange action signal
- Loaded Waldenburg for editorial content and loaded IBM Plex Mono for compact controls
- Strongly rounded action pills (99999px in the observed product-marketing controls)
- Small, exact spacing increments: 4px/8px/12px recur in controls; 24px/32px appear in hero actions
- Light/dark inversion is an observed hover treatment for the P3-orange action, not a general rule for every control

## 2. Color Palette & Roles

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

## 3. Typography Rules

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

## 4. Component Stylings

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

## 5. Layout Principles

The retained spacing observations are 4px, 8px, 12px, 24px, and 32px. They occur in the selector-bound controls documented in §4; they do not establish a global scale, grid, content width, gutter, or card layout. The retained radii are 3px for the home textarea and 99999px for the observed compact and hero action pills. No other radius scale is canonical.

## 6. Depth & Elevation

The only retained elevation observation is the pricing dialog: `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px` and `rgba(0, 0, 0, 0.1) 0px 4px 6px -4px`, alongside its `#ffffff` surface and `#d6d6d6` border. No general shadow scale, overlay, focus ring, card elevation, or depth philosophy is promoted from this packet.

## 7. Do's and Don'ts

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

## 8. Responsive Behavior

This packet contains desktop `1440×900` captures only. No breakpoint, collapse, mobile type, gutter, touch-target, or responsive component claim is retained. A future responsive capture must establish those values independently.

## 9. Agent Prompt Guide

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

## 10. Voice & Tone

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

## 11. Brand Narrative

Sanity describes the current platform as a Content Operating System rather than a conventional CMS: a structured content foundation with a configurable Studio, APIs/SDKs, automation, and AI-oriented tools. The first-party 2025 platform launch describes Content Lake, Studio, custom content applications, automation, an AI agent, Media Library, Canvas, and Dashboard as parts of that connected direction. This narrative describes product scope and evolution; it does not turn the marketing-site controls in §4 into Studio application components.

## 12. Principles

1. **Structured content, configurable workflow.** *UI implication:* public messaging emphasizes adapting content systems to how an organization works.
2. **Developer affordances remain visible.** *UI implication:* retain the editorial/technical typography contrast when reproducing observed marketing controls.
3. **Accessibility and composability in Sanity UI.** *UI implication:* Sanity UI is an official React toolkit, but its documentation chrome is not a source for the marketing component measurements here.
4. **Evidence-domain discipline.** *UI implication:* reuse only listed P3, inverse, light-pill, textarea, and dialog variants; leave other components absent.

## 13. Personas

No fictional personas are asserted. First-party public navigation identifies developers, content editors, product owners, and business leaders as relevant audiences; this reference does not infer demographics, locations, jobs, or workflows beyond those published groups.

## 14. States

| State | Treatment |
|---|---|
| Product empty/loading/error/success states | Not captured on an authenticated Sanity product surface; no state recipe is claimed. |
| Marketing interaction states | Only the §4 hover, pressed, focus, and dialog-open observations are retained. |

## 15. Motion & Easing

| Token | Value | Use |
|---|---|---|
| Motion tokens | Not measured in the supplied capture |

No duration, easing, or reduced-motion rule is promoted without a measured source.

---

**Verified:** 2026-07-13
**Tier 1 sources:** https://www.sanity.io/ · https://www.sanity.io/pricing · https://www.sanity.io/ui · https://www.sanity.io/blog/why-the-age-of-cms-is-over
**Tier 2 sources:** https://getdesign.md/sanity/design-md · https://styles.refero.design/?q=Sanity (direct built-in access unavailable; no indexed result observed)
**Conflicts unresolved:** none
