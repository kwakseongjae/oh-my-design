---
id: kmong
name: Kmong
country: KR
category: consumer-tech
homepage: "https://kmong.com"
primary_color: "#92fa72"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=kmong.com&sz=128"
verified: "2026-07-13"
added: "2026-06-09"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: marketplace-home, kind: public-marketplace, url: "https://kmong.com/", inspected: "2026-07-13" }
    - { id: marketplace-category, kind: public-marketplace, url: "https://kmong.com/category/1", inspected: "2026-07-13" }
  sources:
    - { id: home-capture, kind: product-surface, url: "https://kmong.com/", captured: "2026-07-13" }
    - { id: category-capture, kind: product-surface, url: "https://kmong.com/category/1", captured: "2026-07-13" }
    - { id: company-context, kind: official-doc, url: "https://company.kmong.com/", captured: "2026-07-13" }
    - { id: font-design, kind: official-doc, url: "https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md", captured: "2026-07-13" }
    - { id: font-license, kind: license, url: "https://github.com/orioncactus/pretendard/blob/main/LICENSE", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.canvas": &home { surface_id: marketplace-home, source_id: home-capture, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.ink": *home
    "tokens.colors.heading": *home
    "tokens.colors.muted": *home
    "tokens.colors.hairline": *home
    "tokens.colors.control-border": *home
    "tokens.colors.primary": *home
    "tokens.colors.on-primary": *home
    "tokens.colors.header-action": *home
    "tokens.colors.on-header-action": *home
    "tokens.colors.category-surface": &category { surface_id: marketplace-category, source_id: category-capture, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.category-border": *category
    "tokens.typography.family.ui": *home
    "tokens.typography.marketplace-body.size": *home
    "tokens.typography.marketplace-body.weight": *home
    "tokens.typography.marketplace-body.lineHeight": *home
    "tokens.typography.marketplace-body.use": *home
    "tokens.typography.header-action.size": *home
    "tokens.typography.header-action.weight": *home
    "tokens.typography.header-action.lineHeight": *home
    "tokens.typography.header-action.use": *home
    "tokens.typography.hero.size": *home
    "tokens.typography.hero.weight": *home
    "tokens.typography.hero.lineHeight": *home
    "tokens.typography.hero.use": *home
    "tokens.typography.search.size": *home
    "tokens.typography.search.weight": *home
    "tokens.typography.search.lineHeight": *home
    "tokens.typography.search.use": *home
    "tokens.typography.category-heading.size": *category
    "tokens.typography.category-heading.weight": *category
    "tokens.typography.category-heading.lineHeight": *category
    "tokens.typography.category-heading.use": *category
    "tokens.spacing.xxs": *home
    "tokens.spacing.sm": *home
    "tokens.spacing.md": *home
    "tokens.spacing.base": *home
    "tokens.spacing.lg": *home
    "tokens.spacing.xl": *home
    "tokens.spacing.xxl": *category
    "tokens.rounded.square": *home
    "tokens.rounded.primary-cta": *home
    "tokens.rounded.control": *home
    "tokens.rounded.category-panel": *category
    "tokens.rounded.home-search": *home
    "tokens.rounded.category-search": *category
    "tokens.shadow.home-search": *home
    "tokens.shadow.category-search": *category
    "tokens.components.home-primary-cta.type": *home
    "tokens.components.home-primary-cta.bg": *home
    "tokens.components.home-primary-cta.fg": *home
    "tokens.components.home-primary-cta.radius": *home
    "tokens.components.home-primary-cta.padding": *home
    "tokens.components.home-primary-cta.height": *home
    "tokens.components.home-primary-cta.font": *home
    "tokens.components.home-primary-cta.states": *home
    "tokens.components.home-primary-cta.use": *home
    "tokens.components.header-action.type": *home
    "tokens.components.header-action.bg": *home
    "tokens.components.header-action.fg": *home
    "tokens.components.header-action.radius": *home
    "tokens.components.header-action.height": *home
    "tokens.components.header-action.font": *home
    "tokens.components.header-action.states": *home
    "tokens.components.header-action.use": *home
    "tokens.components.home-search.type": *home
    "tokens.components.home-search.bg": *home
    "tokens.components.home-search.fg": *home
    "tokens.components.home-search.border": *home
    "tokens.components.home-search.radius": *home
    "tokens.components.home-search.padding": *home
    "tokens.components.home-search.height": *home
    "tokens.components.home-search.font": *home
    "tokens.components.home-search.states": *home
    "tokens.components.home-search.use": *home
    "tokens.components.home-outline-cta.type": *home
    "tokens.components.home-outline-cta.bg": *home
    "tokens.components.home-outline-cta.fg": *home
    "tokens.components.home-outline-cta.border": *home
    "tokens.components.home-outline-cta.radius": *home
    "tokens.components.home-outline-cta.padding": *home
    "tokens.components.home-outline-cta.height": *home
    "tokens.components.home-outline-cta.font": *home
    "tokens.components.home-outline-cta.states": *home
    "tokens.components.home-outline-cta.use": *home
    "tokens.components.category-filter-control.type": *category
    "tokens.components.category-filter-control.bg": *category
    "tokens.components.category-filter-control.fg": *category
    "tokens.components.category-filter-control.border": *category
    "tokens.components.category-filter-control.radius": *category
    "tokens.components.category-filter-control.padding": *category
    "tokens.components.category-filter-control.height": *category
    "tokens.components.category-filter-control.font": *category
    "tokens.components.category-filter-control.states": *category
    "tokens.components.category-filter-control.use": *category
    "tokens.components.category-panel.type": *category
    "tokens.components.category-panel.bg": *category
    "tokens.components.category-panel.radius": *category
    "tokens.components.category-panel.padding": *category
    "tokens.components.category-panel.font": *category
    "tokens.components.category-panel.use": *category
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Only selector-backed values from the supplied public marketplace capture are tokens. Home and category observations remain route-local; no logged-in, checkout, support-doc, or interaction state is inferred."
  colors:
    canvas: "#ffffff"
    ink: "#000000"
    heading: "#212224"
    muted: "#555969"
    hairline: "#f2f3f7"
    control-border: "#c8cad2"
    primary: "#92fa72"
    on-primary: "#212224"
    header-action: "#212224"
    on-header-action: "#ffffff"
    category-surface: "#fafafc"
    category-border: "#e4e5ed"
  typography:
    family: { ui: "Pretendard" }
    marketplace-body: { size: 16, weight: 400, lineHeight: 1.50, use: "Repeated public marketplace body, card, and list sample" }
    header-action: { size: 14, weight: 500, lineHeight: 1.43, use: "Public home/category header action" }
    hero: { size: 40, weight: 700, lineHeight: 1.30, use: "Public home headline" }
    search: { size: 20, weight: 400, lineHeight: 1.40, use: "Public home search input" }
    category-heading: { size: 36, weight: 700, lineHeight: 1.22, use: "Public category-page heading sample" }
  spacing: { xxs: 2, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 32 }
  rounded: { square: 0, primary-cta: 4, control: 8, category-panel: 12, home-search: 36, category-search: 24 }
  shadow:
    home-search: "rgba(0,0,0,0.1) 0px 0px 20px 0px"
    category-search: "rgba(0,0,0,0.06) 0px 0px 8px 0px"
  components:
    home-primary-cta: { type: button, bg: "#92fa72", fg: "#212224", radius: "4px", padding: "0px 24px", height: "52px", font: "16px / 500 Pretendard", states: "default only; no interaction state captured", use: "Public home CTA, selector home::[data-omd-capture=143]" }
    header-action: { type: button, bg: "#212224", fg: "#ffffff", radius: "8px", height: "36px", font: "14px / 500 Pretendard", states: "default only; no interaction state captured", use: "Public marketplace header action, selector home::[data-omd-capture=6]" }
    home-search: { type: input, bg: "#ffffff", fg: "#212224", border: "1px solid #c8cad2", radius: "36px", padding: "0px 32px", height: "64px", font: "20px / 400 Pretendard", states: "default only; no interaction state captured", use: "Public home search shell/input, selectors home::form and home::[data-omd-capture=7]" }
    home-outline-cta: { type: button, bg: "#ffffff", fg: "#212224", border: "1px solid #c8cad2", radius: "8px", padding: "0px 24px", height: "52px", font: "16px / 500 Pretendard", states: "default only; no interaction state captured", use: "Public home outlined CTA, selector home::[data-omd-capture=145]" }
    category-filter-control: { type: button, bg: "#ffffff", fg: "#212224", border: "1px solid #e4e5ed", radius: "8px", padding: "0px 12px", height: "36px", font: "14px / 400 Pretendard", states: "default only; no interaction state captured", use: "Public category filter control, selector surface-3::[data-omd-capture=93]" }
    category-panel: { type: card, bg: "#fafafc", radius: "12px", padding: "32px 24px", font: "16px / 400 Pretendard", use: "Public category-page panel, selector surface-3::article" }
  components_harvested: true
---

# Design System Inspiration of Kmong (크몽)

## 1. Visual Theme & Atmosphere

Kmong is a Korean expert-services marketplace: its public home lets people find and commission specialists, while the official company site describes an escrow-protected transaction model and company-oriented services such as corporate-card payment and tax-invoice issuance. The public marketplace surface is deliberately direct: white space, dark `#212224` headings, a large searchable entry point, and a lime `#92FA72` action that stands apart from a compact dark header action. Kmong’s company site also records a 2025 logo-rebrand story, so the current expression should be treated as a living marketplace identity rather than an inherited generic green UI. This reference separates the public marketplace evidence from company/corporate context; neither is treated as a substitute for a signed-in workflow or documentation chrome.

## 2. Color & Surface Evidence

- `#FFFFFF` — observed public home/category canvas, search shell, and outlined controls.
- `#000000` — frequent body and card text in the supplied public capture.
- `#212224` — heading, search-input, and dark header-action colour.
- `#555969` — observed muted public-marketplace text.
- `#F2F3F7` — repeatedly observed hairline/border colour.
- `#C8CAD2` — home search and outlined-CTA border.
- `#E4E5ED` — category filter-control border.
- `#92FA72` — observed home primary-CTA background; it is not assumed to be every primary action on every route.
- `#FAFAFC` — observed category-page panel surface only.

## 3. Typography Rules

### Evidence classes

- **Live product computed use:** `Pretendard` has 1,444 visible uses across the supplied home and category capture, with a high-confidence loaded FontFace match and 18 Kmong CloudFront font-source URLs. It is the sole `tokens.typography.family.ui` family.
- **Official font asset and licence:** the upstream Pretendard project documents distribution and its SIL Open Font License 1.1. This establishes the upstream licence boundary; it does not independently establish Kmong product use.
- **Declared-only:** `slick` has four Kmong-hosted declared source files but zero visible uses in the bundle. It is not a UI-family token and must not be substituted.
- **Unresolved:** no separate official Kmong typeface or additional browser-loaded family was established from the supplied public routes.

### Observed public-marketplace hierarchy

| Role | Family | Size | Weight | Line height | Surface boundary |
|---|---|---:|---:|---:|---|
| Home headline | Pretendard | 40px | 700 | 52px | Home only |
| Home search input | Pretendard | 20px | 400 | 28px | Home only |
| Category heading sample | Pretendard | 36px | 700 | 44px | Category route only |
| Repeated body/card/list sample | Pretendard | 16px | 400 | 24px | Home and category routes |
| Header action | Pretendard | 14px | 500 | 20px | Public marketplace header |

## 4. Components

### Home primary CTA

**Default**
- Background: `#92FA72`
- Text: `#212224`
- Radius: `4px`
- Padding: `0px 24px`
- Height: `52px`
- Font: `16px / 500 Pretendard`
- Use: Public home CTA; `home::[data-omd-capture="143"]`.

### Header action

**Default**
- Background: `#212224`
- Text: `#FFFFFF`
- Radius: `8px`
- Height: `36px`
- Font: `14px / 500 Pretendard`
- Use: Public marketplace header action; `home::[data-omd-capture="6"]`.

### Home search

**Default**
- Background: `#FFFFFF`
- Text: `#212224`
- Border: `1px solid #C8CAD2`
- Radius: `36px`
- Padding: `0px 32px`
- Height: `64px`
- Font: `20px / 400 Pretendard`
- Use: Public home search shell/input; `home::form` and `home::[data-omd-capture="7"]`.

### Home outlined CTA

**Default**
- Background: `#FFFFFF`
- Text: `#212224`
- Border: `1px solid #C8CAD2`
- Radius: `8px`
- Padding: `0px 24px`
- Height: `52px`
- Font: `16px / 500 Pretendard`
- Use: Public home outlined CTA; `home::[data-omd-capture="145"]`.

### Category filter control

**Default**
- Background: `#FFFFFF`
- Text: `#212224`
- Border: `1px solid #E4E5ED`
- Radius: `8px`
- Padding: `0px 12px`
- Height: `36px`
- Font: `14px / 400 Pretendard`
- Use: Public category filter control; `surface-3::[data-omd-capture="93"]`.

### Category panel

**Default**
- Background: `#FAFAFC`
- Radius: `12px`
- Padding: `32px 24px`
- Font: `16px / 400 Pretendard`
- Use: Public category-page panel; `surface-3::article`.

The supplied bundle reports zero interaction records. No hover, pressed, focus, disabled, menu, dialog, validation, or responsive variants are claimed from class names or static samples.

---

**Verified:** 2026-07-13
**Tier 1 sources:** `https://kmong.com/` (public marketplace home), `https://kmong.com/category/1` (public category marketplace), `https://company.kmong.com/` (official company context), `https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md` (upstream font distribution), and `https://github.com/orioncactus/pretendard/blob/main/LICENSE` (upstream font licence)
**Tier 2 sources:** `https://getdesign.md/kmong` (attempted; built-in web open returned an internal safe-open failure/no usable record), `https://styles.refero.design/?q=kmong` (attempted; built-in web open returned an internal safe-open failure/no usable record)
**Conflicts unresolved:** none

The older universal 4px input/card rule, 76px header, card-shadow system, Biz/Best/promo badge variants, generic gig-card treatment, and all reusable interaction/state/motion assertions were rolled back: they are not established by the supplied 2026 multi-surface capture.

## 5. Layout & Responsive Evidence

- The supplied capture covers public 1440×900 home and category routes. It establishes a 628px × 64px home-search shell and a 500px × 50px category-search shell, not a breakpoint system.
- The public category page includes a 1,168px × 184px `#FAFAFC` panel with `32px 24px` padding. It is a route-local observation, not a universal card layout.
- No mobile, signed-in, checkout, seller, help-centre, or documentation-chrome route was supplied as product evidence. Their layout contracts are intentionally absent.

## 6. Depth & Elevation

- Home search shell: `rgba(0,0,0,0.1) 0px 0px 20px 0px`.
- Category search shell: `rgba(0,0,0,0.06) 0px 0px 8px 0px`.

No general card, popover, modal, or hover-elevation ladder is claimed.

## 7. Do's and Don'ts

### Do

- Keep the observed home primary CTA distinct: `#92FA72` with `#212224` text.
- Use Pretendard only when reproducing the verified public-marketplace specimen.
- Preserve the route distinction between the 36px home search and 24px category search.
- Treat the dark 36px header action and lime 52px home CTA as separate observed variants.

### Don't

- Do not turn the lime home CTA into an unsupported universal action token.
- Do not reuse `slick` or substitute it for Pretendard; its visible product use was not observed.
- Do not infer hover, focus, disabled, error, modal, or responsive styles from utility class names.
- Do not apply the category panel or filters to marketing, support, or signed-in flows without evidence.

## 8. Responsive Behavior

Only desktop-sized public capture evidence was supplied. No breakpoint, touch-target, mobile navigation, or image-ratio rule is recorded.

## 9. Agent Prompt Guide

- Recreate the **public home CTA** as a 52px-tall, 4px-radius button with `#92FA72` background, `#212224` label, `0px 24px` padding, and 16px/500 Pretendard.
- Recreate the **public home search** as a 64px white shell with a `#C8CAD2` 1px border, 36px radius, `0px 32px` shell padding, and a 20px/400 Pretendard input.
- Recreate the **public category filter** as a 36px white control with `#E4E5ED` border, 8px radius, `0px 12px` padding, and 14px/400 Pretendard.
- Do not generate an interaction or state variant unless new selector-and-interaction evidence establishes it.

## 10. Voice & Tone

The official homepage frames the service around finding capable experts and protecting a transaction until work is received; the company site presents the same marketplace as a place where individuals and companies can commission work with practical payment and document support. The observable public tone is therefore direct, reassuring, and task-oriented. This is source-grounded service framing, not a claim that every internal or support message uses one fixed voice.

## 11. Brand Narrative

Kmong’s official company site presents the service as an expert platform where a request can be made by chat and protected through escrow payment, with distinct support for company transactions such as corporate cards and tax invoices. Its public home exposes the marketplace side of that proposition: specialist listings, reviews, and a search-led path into discovery. The company site also publishes a 2025 logo-rebrand item, indicating an actively maintained visual identity. These facts establish the product and its current public expression; no unobserved seller, contract, or post-purchase experience is inferred here.

## 12. Principles

1. **Start with expert discovery.** The large public search field is the most explicit route into the marketplace. *UI implication:* keep a verified search treatment route-local rather than inventing a global command surface.
2. **Make the next action legible.** The public home’s lime CTA contrasts with the dark header action. *UI implication:* preserve their separate size, colour, and radius values.
3. **Keep transaction trust concrete.** Escrow protection and company-payment support come from official company context. *UI implication:* do not fabricate trust badges, validation states, or checkout affordances from that narrative alone.

## 13. Stakeholder Groups

*Source-grounded groups, not fictional personas.*

- **Clients commissioning expert work:** the public marketplace exposes specialist listings, reviews, and search-led discovery for this group.
- **Experts offering services:** Kmong’s marketplace model depends on expert service listings; no seller-console UI is claimed from this public capture.
- **Companies commissioning external work:** the official company site identifies corporate transaction support, including corporate-card payment and tax-invoice issuance; this is business context, not a captured enterprise product UI.

## 14. States

No reusable empty, loading, error, success, disabled, validation, or skeleton treatment is recorded. The bundle has zero interaction records, so state design is intentionally omitted rather than synthesized.

## 15. Motion & Easing

No reusable duration, easing, or motion rule is recorded. Public utility class names and static elements do not establish a motion contract without interaction provenance.
