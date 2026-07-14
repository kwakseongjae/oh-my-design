---
id: clickhouse
name: ClickHouse
country: US
category: backend-devops
homepage: "https://clickhouse.com"
primary_color: "#faff69"
logo:
  type: simpleicons
  slug: clickhouse
verified: "2026-07-13"
omd: "0.1"
ds:
  name: ClickHouse Design
  url: "https://clickhouse.design"
  type: system
  description: Official brand foundations plus the separate Click UI design system and component library.
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: marketing, url: "https://clickhouse.com/", inspected: "2026-07-13" }
    - { id: pricing, kind: public-calculator, url: "https://clickhouse.com/pricing", inspected: "2026-07-13" }
    - { id: story, kind: editorial, url: "https://clickhouse.com/blog/corsearch-replaces-mysql-with-clickhouse-for-content-and-brand-protection", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://clickhouse.com/", captured: "2026-07-13" }
    - { id: pricing-live, kind: product-surface, url: "https://clickhouse.com/pricing", captured: "2026-07-13" }
    - { id: story-live, kind: product-surface, url: "https://clickhouse.com/blog/corsearch-replaces-mysql-with-clickhouse-for-content-and-brand-protection", captured: "2026-07-13" }
    - { id: brand-guide, kind: official-doc, url: "https://clickhouse.design/brand", captured: "2026-07-13" }
    - { id: click-ui, kind: official-doc, url: "https://clickhouse.design/click-ui", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &home { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.canvas": *home
    "tokens.colors.overlay": *home
    "tokens.colors.on-primary": *home
    "tokens.colors.surface": &pricing { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.foreground": *pricing
    "tokens.colors.foreground-strong": *pricing
    "tokens.colors.hairline": *pricing
    "tokens.colors.accent-border": *pricing
    "tokens.typography.family.ui": *home
    "tokens.typography.family.display": &story { surface_id: story, source_id: story-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.typography.family.mono": *story
    "tokens.typography.display.size": *story
    "tokens.typography.display.weight": *story
    "tokens.typography.display.lineHeight": *story
    "tokens.typography.display.use": *story
    "tokens.typography.heading.size": *story
    "tokens.typography.heading.weight": *story
    "tokens.typography.heading.lineHeight": *story
    "tokens.typography.heading.use": *story
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.use": *home
    "tokens.typography.control.size": *home
    "tokens.typography.control.weight": *home
    "tokens.typography.control.lineHeight": *home
    "tokens.typography.control.use": *home
    "tokens.typography.code.size": *story
    "tokens.typography.code.weight": *story
    "tokens.typography.code.lineHeight": *story
    "tokens.typography.code.use": *story
    "tokens.spacing.xs": *pricing
    "tokens.spacing.sm": *pricing
    "tokens.spacing.md": *pricing
    "tokens.spacing.control": *pricing
    "tokens.spacing.lg": *pricing
    "tokens.spacing.xl": *pricing
    "tokens.spacing.xxl": *pricing
    "tokens.spacing.section": *pricing
    "tokens.rounded.sm": *home
    "tokens.rounded.md": *pricing
    "tokens.rounded.lg": *home
    "tokens.rounded.dialog": *home
    "tokens.rounded.full": *pricing
    "tokens.components.public-list-item.type": *home
    "tokens.components.public-list-item.fg": *home
    "tokens.components.public-list-item.radius": *home
    "tokens.components.public-list-item.padding": *home
    "tokens.components.public-list-item.font": *home
    "tokens.components.public-list-item.use": *home
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Public marketing, pricing-calculator, editorial, Click UI documentation, and declared font assets remain separate evidence domains. Values below are selector-backed public-surface observations only."
  colors:
    primary: "#faff69"
    canvas: "#131312"
    surface: "#282828"
    overlay: "#141414"
    foreground: "#dfdfdf"
    foreground-strong: "#ffffff"
    hairline: "#414141"
    accent-border: "#4f5101"
    on-primary: "#151515"
  typography:
    family: { ui: "Inter", display: "Basier", mono: "Inconsolata" }
    display: { size: 36, weight: 600, lineHeight: 1.25, use: "Basier h2 observed on public routes" }
    heading: { size: 20, weight: 600, lineHeight: 1.25, use: "Basier h3 observed on public routes" }
    body: { size: 16, weight: 400, lineHeight: 1.50, use: "Inter public-route body and list items" }
    control: { size: 14, weight: 500, lineHeight: 1.43, use: "Inter primary-action controls" }
    code: { size: 18, weight: 400, lineHeight: 1.50, use: "Single observed Inconsolata body sample; not a general code-scale claim" }
  spacing: { xs: 4, sm: 6, md: 8, control: 10, lg: 12, xl: 16, xxl: 24, section: 32 }
  rounded: { sm: 4, md: 6, lg: 8, dialog: 10, full: 9999 }
  components:
    public-list-item: { type: listItem, fg: "#dfdfdf", radius: 0, padding: "0px", font: "16px/400 Inter", use: "Repeated public-route list item; 155 observed occurrences" }
  components_harvested: true
---

# Design System Inspiration of ClickHouse

## 1. Visual Theme & Atmosphere

ClickHouse is a column-oriented analytics database built for real-time SQL reporting, and its public expression treats speed as something users should see as well as measure. The official brand guidelines describe a direct, technically confident character: yellow leads the brand while dark neutrals, hard rules, and compact controls keep the message legible. The supplied public surfaces—marketing home, pricing calculator, and an editorial customer story—pair the live `#faff69` action yellow with a near-black field of `#131312`/`#282828`, Inter for the repeated UI rhythm, and Basier for larger headings. That high-contrast treatment belongs to public communication and the calculator, not proof of an authenticated product console. ClickHouse’s separate Click UI documentation confirms a themeable product system whose yellow is intentionally used more selectively in product UI.

**Key characteristics:**
- Yellow-led public action treatment: `#faff69` on `#151515`.
- Dark public surfaces: `#131312` canvas and `#282828` calculator/menu surfaces.
- Compact Inter controls; Basier headings on the captured public routes.
- 4px, 6px, 8px, and 10px radii each have selector-backed uses; none is universal.
- Product, marketing, editorial, privacy-dialog, and Click UI documentation evidence are separate.

## 2. Color Palette & Roles

### Selector-backed public surfaces
- **Action Yellow** (`#faff69`): primary public action background and selected/expanded border on the home and pricing calculator.
- **Canvas** (`#131312`): observed public page background; do not generalize it to every ClickHouse product surface.
- **Control Surface** (`#282828`): public pricing input and expanded select-menu background.
- **Overlay Surface** (`#141414`): observed cookie-dialog surface only; not promoted as a general product surface token.
- **Primary Public Text** (`#dfdfdf`): computed neutral text on repeated public controls and lists.
- **Strong/Modal Text** (`#ffffff`): observed in public secondary actions and the cookie dialog.
- **Hairline** (`#414141`): pricing number-field border.
- **Accent Border** (`#4f5101`): public secondary-action border.
- **On Action Yellow** (`#151515`): primary-action text.

### Official brand and product boundary

The official brand guidelines say yellow is primary in brand work and a more selective accent in product work; they name neutral dark-theme chrome and slate light-theme chrome, but this packet does not turn undocumented scale steps into hex tokens. Cookie-consent green (`#166534`) and its hover value were observed in a privacy dialog, so they are intentionally excluded from the ClickHouse action palette.

## 3. Typography Rules

### Evidence classes

| Evidence class | Family and boundary |
|---|---|
| Official product-use | ClickHouse Design says **Inter** can serve as both title and body copy in the product. |
| Live computed surface-use | **Inter** is loaded/high with 1,215 observed uses across the three public routes; **Basier** is loaded/high with 66 uses, including 36px/600 h2 and 20px/600 h3 samples; **Inconsolata** is loaded/medium with one 18px/400 sample. Each has a FontFaceSet/source-URL match in the supplied artifact. |
| Official distributed brand asset | ClickHouse names **Söhne** as its display voice for marketing and calls it marketing-only; the Klim Type Foundry source identifies WOFF2 web formats and commercial availability. This is brand/font context, not a product-UI token. |
| Declared-only | `fontSohne`, `fontSohneBreit`, their fallback faces, and `basier Fallback` are declared in captured CSS but had no visible computed use in this packet. |
| System / unresolved | `ui-sans-serif` is an operating-system stack, not a ClickHouse-family substitute. `ui-monospace` had one unresolved computed occurrence and is not promoted. |

### Captured hierarchy

| Role | Family | Size | Weight | Line Height | Evidence boundary |
|---|---|---:|---:|---:|---|
| Public h1 | Basier | 48px (also one 96px sample) | 600 | 60px (96px sample: 96px) | public routes; not a complete display scale |
| Public h2 | Basier | 36px | 600 | 45px | 18 observed samples |
| Public h3 | Basier | 20px | 600 | 25px | 20 observed samples |
| Body / list | Inter | 16px | 400 | 24px | repeated public-route body/list samples |
| Control | Inter | 14px | 500 | 20px or 17.5px | action/control samples; preserve route value |
| Code-adjacent body | Inconsolata | 18px | 400 | 27px | one observed sample only |

Do not render a system fallback as Söhne, Basier, or Inconsolata. Söhne remains useful official marketing-font context but is excluded from `tokens.typography.family` because the packet records no visible computed Söhne use.

## 4. Component Stylings

### Public Actions

**Primary Action — home and pricing calculator**
- Background: `#faff69`
- Text: `#151515`
- Border: 1px solid `#faff69`
- Radius: 4px
- Padding: 10px 16px on `home::[data-omd-capture="55"]`; 12px 24px on pricing `surface-2::[data-omd-capture="102"]`
- Font: 14px / 500 / Inter
- Use: Public action controls captured on the home and pricing calculator.

**Secondary Action — pricing calculator**
- Background: `oklab(0.1957 -0.0000019595 0.00000458956 / 0.00999999)`
- Text: `#ffffff`
- Border: 1px solid `#4f5101`
- Radius: 4px
- Padding: 12px 24px
- Font: 14px / 500 / Inter
- Use: `surface-2::[data-omd-capture="103"]`; route-local secondary action.

**Navigation Item — public home**
- Radius: 8px
- Padding: 10px 12px
- Font: 14px / 500 / Inter
- Hover: collector recorded a public home focus/hover/pressed state; raw state styling is retained in the verification record rather than promoted as a global rule.
- Use: `home::[data-omd-capture="1"]`; public navigation/menu item.

### Pricing Calculator Form Chrome

**Number Field**
- Background: `#282828`
- Text: `#dfdfdf`
- Border: 1px solid `#414141`
- Radius: 4px
- Padding: 0px 12px
- Font: 14px / 400 / Inter
- Use: `surface-2::[data-omd-capture="93"]`; public pricing-calculator number input.

**Select Trigger — expanded**
- Background: `#282828`
- Text: `#dfdfdf`
- Border: 1px solid `#414141`
- Radius: 4px
- Padding: 0px 28px 0px 12px
- Font: 14px / 400 / Inter
- Use: `surface-2::[data-omd-capture="63"]`; trigger for an observed open pricing select.

**Select Menu — expanded**
- Background: `#282828`
- Text: `#dfdfdf`
- Border: 0px 1px 1px solid `#faff69`
- Radius: 0px 0px 6px 6px
- Padding: 4px 0px
- Font: 14px / 400 / Inter
- Use: `surface-2::[data-omd-interaction-capture="menu-0-0"]`; three pricing menus exposed the same expanded/menu-open treatment.

**Radio-like Toggle**
- Background: `#1f1f1c`
- Border: 1px solid `#414141`
- Radius: 9999px
- Use: `surface-2::[data-omd-capture="96"]`; checked and unchecked states were recorded, but no different checked value is asserted.

### Separate Public Privacy Dialog

**Cookie Dialog**
- Background: `#141414`
- Text: `#ffffff`
- Border: 1px solid `#393939`
- Radius: 10px
- Use: `home::[data-omd-interaction-capture="dialog-0-0"]`; consent chrome, excluded from product/calculator components.

Click UI documents broader Button, IconButton, SplitButton, Text Field, and Select APIs separately. Its documented variants are not copied here unless the supplied public capture exposed their visual values.

---
**Verified:** 2026-07-13
**Tier 1 sources:** [ClickHouse home](https://clickhouse.com/), [public pricing calculator](https://clickhouse.com/pricing?service=clickhouse&pg.plan=scale&pg.provider=aws&pg.profile=memory&pg.architecture=arm&pg.standby=0&pg.region=us-east-1&plan=scale&provider=aws&region=us-east-1&hours=8&storageCompressed=false), [public customer story](https://clickhouse.com/blog/corsearch-replaces-mysql-with-clickhouse-for-content-and-brand-protection?loc=carousel), [official Click UI](https://clickhouse.design/click-ui), [official brand guidelines](https://clickhouse.design/brand)
**Tier 2 sources:** [getdesign ClickHouse directory](https://getdesign.md/clickhouse/design-md); Refero query attempted at `https://styles.refero.design/?q=ClickHouse`, but returned an internal error and is not treated as a positive or negative result.
**Resolution note:** Earlier claims of universal forest-green conversion CTAs, 4px/8px card rules, and a universal neon-on-black product system were rolled back. The fresh packet ties green to cookie consent, gives each component a route/selector boundary, and keeps official Click UI documentation separate from public-surface measurements.
**Conflicts unresolved:** none

## 5. Layout Principles

The supplied 1440×900 captures repeat 4, 6, 8, 10, 12, 16, 20, 24, and 32px spacing values. They support a compact public-control rhythm, but do not establish a complete grid or responsive layout specification. The public home body measures a dark `#131312` canvas; the calculator puts fields and menus on `#282828`; editorial content keeps its own article layout. Do not infer authenticated-console density, dashboard grids, or mobile collapse behavior from these routes.

## 6. Depth & Elevation

Most observed public controls report `box-shadow: none`; hierarchy comes from dark-surface changes, thin rules, and the yellow action/border. The expanded pricing select is the recorded exception: it includes `rgba(0,0,0,0.1) 0px 10px 15px -3px` and `rgba(0,0,0,0.1) 0px 4px 6px -4px`. The cookie dialog and public menus are not evidence for a universal application-overlay scale.

## 7. Do's and Don'ts

### Do
- Use yellow as a decisive public action or attention signal, while keeping it selective on product-oriented UI.
- Write direct, technically specific labels and support performance claims with a number, benchmark, or concrete example.
- Preserve the captured selector/surface boundary when using primary actions, calculator fields, or expanded menus.
- Use Inter for the observed public UI patterns; reserve Söhne for its official marketing-only role.
- Treat Click UI’s system documentation as component-intent guidance, not a substitute for unmeasured public CSS values.

### Don't
- Do not promote cookie-consent green, its hover state, or privacy-dialog layout into the ClickHouse product palette.
- Do not present Söhne, `fontSohneBreit`, a fallback face, or a system stack as a verified live product family.
- Do not convert the yellow public marketing treatment into a claim that all product UI is neon-on-black.
- Do not invent calculator error, loading, disabled, success, mobile, or authenticated-console states.
- Do not copy Click UI API variants as if they were observed on the three supplied public routes.

## 8. Responsive Behavior

No viewport comparison is available in this packet. All three supplied surfaces were captured at 1440×900. Preserve accessibility and responsive implementation requirements, but do not claim ClickHouse-specific mobile menu behavior, breakpoints, touch targets, or grid columns without another direct observation.

## 9. Agent Prompt Guide

### Quick reference
- Public primary action: `#faff69` / `#151515`, 1px yellow border, 4px radius; 10px 16px on the home sample or 12px 24px on the pricing sample.
- Pricing number field: `#282828`, `#dfdfdf`, 1px `#414141`, 4px radius, 0px 12px padding.
- Pricing select menu when expanded: `#282828`, `#dfdfdf`, lower 6px corners, 0px/1px/1px yellow border, 4px 0px padding.
- Public body/list: Inter 16px / 400 / 24px; observed Basier headings include 36px / 600 / 45px.

### Boundary-aware prompt

“Create a public pricing-calculator action using only the captured ClickHouse pattern: `#faff69` background, `#151515` text, 1px matching border, 4px radius, 12px 24px padding, and Inter 14px/500. Pair it only with the selector-backed `#282828` number field; do not invent product-console status, error, or mobile behavior.”

## 10. Voice & Tone

ClickHouse’s official guidance calls the voice raw, confident, exacting, technical, and direct. Its stated aim is to empower developers and data teams with speed, performance, and control; the writing guidance asks teams to get to the point, avoid generic marketing language, and prove claims with numbers, benchmarks, or examples. Use active, short sentences and practical error language. [Brand guidelines](https://clickhouse.design/brand) · [Voice and tone](https://clickhouse.design/brand/guidelines/voice-and-tone)

| Context | Treatment |
|---|---|
| Action | Use a direct verb and name the outcome. |
| Performance claim | State the measured result, then link the benchmark or example. |
| Technical explanation | Lead with the practical consequence before implementation detail. |
| Error or warning | State what happened and what to try next; do not blame the user or use cutesy copy. |

## 11. Brand Narrative

ClickHouse began in 2009 as an experiment to generate analytical reports in real time from non-aggregated data. The company’s official history records a 2012 production launch, the 2016 Apache 2 release, and the 2021 incorporation of ClickHouse, Inc.; its current story also frames ClickHouse as a distributed company serving data work that must stay fast as it grows. [Our story](https://clickhouse.com/company/our-story)

That engineering origin gives the present brand its useful tension: a public identity that is intentionally bold and yellow-led, paired with a product system that uses yellow more selectively. The official brand guidelines call this “direct minimalism”—clarity and purpose before decoration—and describe the company as built for engineers and trusted by leaders. [Official brand guidelines](https://clickhouse.design/brand) The 2026 open-source history reinforces the operating principle behind the tone: modular, well-documented work and an open contribution culture rather than performance theater. [Ten years of ClickHouse in open source](https://clickhouse.com/blog/open-source-10)

## 12. Principles

1. **Prove speed rather than decorate it.** The official voice guidance asks for numbers, benchmarks, and examples. *UI implication:* pair a performance claim with a concrete result or source.
2. **Function over frills.** ClickHouse’s brand values favor what works over what trends. *UI implication:* keep controls compact and purposeful; avoid decorative component states not established by the surface.
3. **Be technical, not generic.** The guidelines ask teams to speak to builders with precise language. *UI implication:* use direct action labels and explain technical consequences plainly.
4. **Keep brand and product roles distinct.** Official color guidance says yellow is primary for brand and selective for product. *UI implication:* do not blanket an application in yellow just because a public campaign uses it prominently.
5. **Design for an open engineering community.** The official open-source history emphasizes code, documentation, review, and contributors. *UI implication:* expose meaningful technical context and avoid claims the interface cannot substantiate.

## 13. Personas

The reviewed first-party material identifies developers and data teams as the intended audience, but it does not provide validated demographic or task-research personas suitable for named archetypes. Do not invent them.

- **[FILL IN: validated developer workflow audience]** — add only with a first-party product-research or workflow source.
- **[FILL IN: validated data-team decision audience]** — add only with a first-party product-research or workflow source.

## 14. States

| State | Evidence boundary |
|---|---|
| Public primary action — default | Home/pricing actions: `#faff69`, `#151515`, 4px radius; exact padding varies by selector. |
| Public navigation item — focus/hover/pressed | Home `data-omd-capture="4"` recorded all three states; the raw style is retained in verification notes because no one global state color was established. |
| Pricing select — expanded/menu-open | Three captured menus: `#282828`, `#dfdfdf`, lower 6px corners, yellow lower/side border. |
| Pricing menu option — selected | Collector recorded selected targets within the expanded menu; no unobserved selected fill is claimed. |
| Pricing toggle — checked/unchecked | Both state labels were captured on one radio-like control; no different checked visual value is asserted. |
| Cookie dialog — open | Separate consent dialog: `#141414`, `#ffffff`, 1px `#393939`, 10px radius. |
| Loading, error, empty, disabled, success, skeleton | Not captured on these public routes; intentionally unspecified. |

## 15. Motion & Easing

The supplied evidence records interaction outcomes (public navigation focus/hover/pressed, pricing-menu expansion, toggle state labels, and dialogs) but no duration, easing, transition-property, or reduced-motion measurement. Do not infer a ClickHouse motion scale from static public states or Click UI documentation. **[FILL IN: motion tokens only after direct surface or official token evidence.]**
