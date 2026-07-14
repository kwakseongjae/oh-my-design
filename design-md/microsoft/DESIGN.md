---
id: microsoft
name: Microsoft
country: US
category: consumer-tech
homepage: "https://www.microsoft.com"
primary_color: "#0078d4"
logo:
  type: github
  slug: microsoft
verified: "2026-07-13"
added: "2026-06-11"
omd: "0.1"
ds:
  name: Fluent 2
  url: "https://fluent2.microsoft.design"
  type: system
  description: "Microsoft's cross-platform design system, with platform-aware typography, tokens, component guidance, and accessibility guidance."
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: public-marketing, url: "https://www.microsoft.com/ko-kr", inspected: "2026-07-13" }
    - { id: fluent-docs, kind: documentation-chrome, url: "https://fluent2.microsoft.design/", inspected: "2026-07-13" }
    - { id: microsoft-365, kind: public-marketing, url: "https://www.microsoft.com/en-us/microsoft-365", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.microsoft.com/ko-kr", captured: "2026-07-13" }
    - { id: fluent-docs-live, kind: official-doc, url: "https://fluent2.microsoft.design/", captured: "2026-07-13" }
    - { id: microsoft-365-live, kind: product-surface, url: "https://www.microsoft.com/en-us/microsoft-365", captured: "2026-07-13" }
    - { id: fluent-typography, kind: official-doc, url: "https://fluent2.microsoft.design/typography", captured: "2026-07-13" }
    - { id: segoue-font, kind: official-doc, url: "https://learn.microsoft.com/en-us/typography/font-list/segoe-ui", captured: "2026-07-13" }
    - { id: segoue-license, kind: license, url: "https://learn.microsoft.com/en-us/typography/fonts/font-faq", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &home { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.ink": *home
    "tokens.colors.body": *home
    "tokens.colors.nav-ink": *home
    "tokens.colors.muted": *home
    "tokens.colors.link": *home
    "tokens.colors.canvas": *home
    "tokens.colors.footer": *home
    "tokens.colors.primary-dark": &m365 { surface_id: microsoft-365, source_id: microsoft-365-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.card": *m365
    "tokens.typography.family.ui": *home
    "tokens.typography.family.display": *home
    "tokens.typography.family.chrome": *home
    "tokens.typography.display.size": *home
    "tokens.typography.display.weight": *home
    "tokens.typography.display.lineHeight": *home
    "tokens.typography.display.tracking": *home
    "tokens.typography.display.use": *home
    "tokens.typography.section.size": *home
    "tokens.typography.section.weight": *home
    "tokens.typography.section.lineHeight": *home
    "tokens.typography.section.tracking": *home
    "tokens.typography.section.use": *home
    "tokens.typography.card-title.size": *home
    "tokens.typography.card-title.weight": *home
    "tokens.typography.card-title.lineHeight": *home
    "tokens.typography.card-title.tracking": *home
    "tokens.typography.card-title.use": *home
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.tracking": *home
    "tokens.typography.body.use": *home
    "tokens.typography.cta.size": *home
    "tokens.typography.cta.weight": *home
    "tokens.typography.cta.lineHeight": *home
    "tokens.typography.cta.tracking": *home
    "tokens.typography.cta.use": *home
    "tokens.typography.nav.size": *home
    "tokens.typography.nav.weight": *home
    "tokens.typography.nav.use": *home
    "tokens.spacing.xs": *home
    "tokens.spacing.sm": *home
    "tokens.spacing.md": *home
    "tokens.spacing.base": *home
    "tokens.spacing.lg": *home
    "tokens.spacing.xl": *home
    "tokens.spacing.xxl": *home
    "tokens.rounded.sm": *home
    "tokens.rounded.md": *home
    "tokens.rounded.lg": *home
    "tokens.rounded.xl": *home
    "tokens.rounded.pill": *m365
    "tokens.components.m365-tab-active.type": *m365
    "tokens.components.m365-tab-active.bg": *m365
    "tokens.components.m365-tab-active.fg": *m365
    "tokens.components.m365-tab-active.radius": *m365
    "tokens.components.m365-tab-active.padding": *m365
    "tokens.components.m365-tab-active.height": *m365
    "tokens.components.m365-tab-active.font": *m365
    "tokens.components.m365-tab-active.active": *m365
    "tokens.components.m365-tab-active.use": *m365
tokens:
  source: reconciled
  extracted: "2026-07-13"
  components_harvested: true
  note: "Marketing tokens below are observed only on microsoft.com home and Microsoft 365 public marketing. Fluent documentation is a separate source domain; its product-system tokens are not inferred from marketing."
  colors:
    primary: "#0078d4"
    primary-dark: "#091f2c"
    ink: "#0e1726"
    body: "#17253d"
    nav-ink: "#262626"
    muted: "#616161"
    link: "#0067b8"
    canvas: "#ffffff"
    card: "#fefefe"
    footer: "#f2f2f2"
  typography:
    family: { ui: "Segoe UI Variable Text", display: "Segoe UI Variable Display", chrome: "Segoe UI" }
    display: { size: 48, weight: 500, lineHeight: 1.17, tracking: -1.2, use: "Observed home and Microsoft 365 public-marketing headings" }
    section: { size: 32, weight: 500, lineHeight: 1.25, tracking: -0.8, use: "Observed marketing section headings" }
    card-title: { size: 20, weight: 600, lineHeight: 1.4, tracking: -0.5, use: "Observed home card headings" }
    body: { size: 16, weight: 400, lineHeight: 1.5, tracking: -0.48, use: "Observed marketing body copy" }
    cta: { size: 15, weight: 600, lineHeight: 1.47, tracking: -0.3, use: "Observed marketing action labels" }
    nav: { size: 13, weight: 400, use: "Observed home global navigation" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48 }
  rounded: { sm: 2, md: 4, lg: 8, xl: 24, pill: 200 }
  components:
    m365-tab-active: { type: tab, bg: "#06161f", fg: "#ffffff", radius: "200px", padding: "8px 24px", height: "40px", font: "16px / 600 Segoe UI Variable Text", active: true, use: "Observed active Microsoft 365 pill tab" }
---

# Design System Inspiration of Microsoft

## 1. Visual Theme & Atmosphere

Microsoft makes public experiences for people, teams, and organizations across consumer software, cloud services, devices, and developer tools. Its current public marketing uses generous white space, product imagery, blue calls to action, and a familiar Segoe typographic voice to make that breadth feel coherent rather than experimental. The July 2026 capture distinguishes two public marketing surfaces—Microsoft home and Microsoft 365—from Fluent 2 documentation chrome: the first two load the Microsoft-hosted Segoe variable webfonts and use Communication Blue (`#0078d4`) for home actions, while the documentation site is evidence for the Fluent design system rather than a proxy for every Microsoft product UI. Microsoft’s official mission is to empower every person and every organization on the planet to achieve more; its visual system supports that broad, practical framing with clear hierarchy and deliberately familiar controls.

On the captured marketing surfaces, headings use a display instance of Segoe, text uses the Text instance, and the global header/footer retain Segoe UI. Home combines dark blue-black headings (`#0e1726`), body copy (`#17253d`), white canvas (`#ffffff`), and 8px blue action controls. Microsoft 365 introduces its own observed dark action treatment (`#091f2c`) and 200px active pill tabs. These are public-web observations, not a claim that any authenticated product, Windows app, or documentation surface uses the same values.

**Key Characteristics:**
- A white (`#ffffff`) public-marketing canvas with near-white (`#fefefe`) cards and a quiet footer (`#f2f2f2`)
- Home primary CTAs in Communication Blue (`#0078d4`) with 8px corners
- Microsoft 365 marketing CTAs in dark navy (`#091f2c`) with the same 8px corner treatment
- Segoe UI Variable Text for body/actions and Segoe UI Variable Display for observed large headings
- Segoe UI in global navigation/footer chrome, with `#262626` navigation and `#616161` footer links
- Fluent 2 is a separate official system domain; its component guidance is not used to fill missing marketing variants

## 2. Color Palette & Roles

### Observed public marketing
- **Communication Blue** (`#0078d4`): home primary CTA background.
- **Dark Microsoft 365 action** (`#091f2c`): observed Microsoft 365 CTA background.
- **Active pill dark** (`#06161f`): observed active Microsoft 365 pill-tab background.
- **Heading ink** (`#0e1726`): observed home and Microsoft 365 headings.
- **Body ink** (`#17253d`): observed marketing body text.
- **Navigation ink** (`#262626`): observed global-header text.
- **Link blue** (`#0067b8`): observed text-link treatment.
- **Muted gray** (`#616161`): observed footer text.
- **Canvas white** (`#ffffff`): observed marketing and action foreground.
- **Card white** (`#fefefe`): observed Microsoft 365 card/background treatment.
- **Footer gray** (`#f2f2f2`): observed global-footer surface.

### Fluent 2 boundary
Fluent’s official color guidance describes global values and semantic alias tokens, including theme-aware state values. Those design-system values are useful for Fluent implementations, but they are not assigned to the marketing token set above unless they occur in the supplied marketing capture.

## 3. Typography Rules

### Evidence classes
- **Live computed and loaded:** `Segoe UI Variable Text` is high-confidence loaded (797 visible uses) in body, buttons, cards, dialogs, menus, tabs, and text. Its Microsoft-hosted WOFF2/TTF sources were recorded by the collector.
- **Live computed and loaded:** `SegoeUI` is high-confidence loaded (242 visible uses) in navigation, footer, inputs, and other public-web chrome, with Microsoft-hosted Segoe UI sources recorded.
- **Live computed and loaded:** `Segoe UI Variable Display` is high-confidence loaded (58 visible uses) for captured headings. `Segoe UI Variable Small` is loaded but has only two captured text uses, so it is not a general UI-family token.
- **Official product-use / design-system context:** Fluent identifies Segoe UI as its primary typeface and uses Segoe UI Variable in its Windows type ramp; it also defaults to native platform fonts where appropriate. This is design-system guidance, not evidence that every Microsoft product or platform uses the web stack.
- **Official distributed asset and licence boundary:** Microsoft’s font FAQ says Windows fonts cannot be self-hosted from a Windows installation; Segoe UI may be licensed through Monotype, while Segoe UI Variable is not available for licensing or use outside Microsoft products or non-Windows platforms. Captured Microsoft-hosted files therefore establish use on the observed pages, not reusable project assets.
- **Declared-only:** `Cascadia Code` is declared by the Fluent documentation site with zero visible captured use. `FabricMDL2Icons`, `MWF-FLUENT-ICONS`, `Leelawadee UI Web`, localized Segoe Web faces, and `SegoeUI Fallback` also have zero visible captured use. They are not typography-family tokens.

### Observed hierarchy

| Role | Family | Size / line-height | Weight | Tracking | Surface |
|---|---|---|---|---|---|
| Marketing display | Segoe UI Variable Text / Display | 48px / 56px | 500 | -1.2px | home and Microsoft 365 |
| Marketing section | Segoe UI Variable Display | 32px / 40px | 500 | -0.8px | home and Microsoft 365 |
| Card title | Segoe UI Variable Display | 20px / 28px | 600 | -0.5px | home |
| Body | Segoe UI Variable Text | 16px / 24px | 400 | -0.48px | marketing |
| CTA | Segoe UI Variable Text | 15px / 22px | 600 | -0.3px | marketing |
| Global nav | Segoe UI | 13px / normal | 400 | normal | home chrome |
| Footer link | Segoe UI | 11px / 16px | 400 | -0.48px | home chrome |

### Fluent typography context
Fluent’s web ramp starts at 10px/14px captions and documents a 68px/92px display role, with Segoe UI as the default web face. Treat that as official Fluent system guidance, separate from the values captured above.

## 4. Component Stylings

All values below retain their public-surface and selector provenance. State rows are only included where the collector recorded an active selection; no hover, disabled, validation, or menu variant is inferred from a class name or general Fluent guidance.

### Home marketing actions

**Standard CTA — home · `[data-omd-capture="17"]`–`"25"`**
- Background: `#0078d4`
- Text: `#ffffff`
- Radius: 8px
- Padding: 8px 16px
- Height: 40px
- Font: 15px / 600 / Segoe UI Variable Text
- Use: Home marketing card action; `home` surface.

**Hero CTA — home · `[data-omd-capture="14"]` / `"16"`**
- Background: `#0078d4`
- Text: `#ffffff`
- Radius: 8px
- Padding: 12px 17px
- Height: 48px
- Font: 15px / 600 / Segoe UI Variable Text
- Use: Home hero action; `home` surface.

### Microsoft 365 marketing

**Dark CTA — Microsoft 365 · `[data-omd-interaction-capture="tab-2-10"]`**
- Background: `#091f2c`
- Text: `#ffffff`
- Radius: 8px
- Padding: 12px 16px
- Height: 52px
- Font: 15px / 600 / Segoe UI Variable Text
- Border: 2px solid transparent
- Use: Captured Microsoft 365 marketing action; `surface-3`.

**Compact dark CTA — Microsoft 365 · `[data-omd-interaction-capture="tab-2-25"]`**
- Background: `#091f2c`
- Text: `#ffffff`
- Radius: 8px
- Padding: 4px 12px
- Height: 36px
- Font: 15px / 600 / Segoe UI Variable Text
- Border: 2px solid transparent
- Use: Captured compact Microsoft 365 marketing action; `surface-3`.

**Outline CTA — Microsoft 365 · `[data-omd-interaction-capture="tab-2-53"]`**
- Text: `#051118`
- Border: 2px solid `#091f2c`
- Radius: 8px
- Padding: 4px 12px
- Height: 36px
- Font: 15px / 600 / Segoe UI Variable Text
- Use: Captured compact secondary action; `surface-3`.

**Active pill tab — Microsoft 365 · `[data-omd-interaction-capture="tab-2-0"]`**
- Background: `#06161f`
- Text: `#ffffff`
- Border: 0px solid transparent
- Radius: 200px
- Padding: 8px 24px
- Height: 40px
- Font: 16px / 600 / Segoe UI Variable Text
- Use: Active tab value captured after the collector’s tab interaction; `surface-3`. No inactive-state rule is asserted.

### Global chrome

**Header link — home · `.uhf-nav-item.uhf-nav-link`**
- Text: `#262626`
- Radius: 0px
- Padding: 0px 8px
- Height: 54px
- Font: 13px / 400 / Segoe UI
- Use: Home global-navigation link; `home` surface.

**Footer link — home · `.uhf-footer-link`**
- Text: `#616161`
- Radius: 0px
- Font: 11px / 400 / Segoe UI
- Use: Home global-footer link; `home` surface.

---
**Verified:** 2026-07-13
**Tier 1 sources:** supplied collector evidence for https://www.microsoft.com/ko-kr and https://www.microsoft.com/en-us/microsoft-365; https://fluent2.microsoft.design/typography; https://fluent2.microsoft.design/shapes; https://fluent2.microsoft.design/design-tokens; https://learn.microsoft.com/en-us/typography/font-list/segoe-ui; https://learn.microsoft.com/en-us/typography/fonts/font-faq; https://www.microsoft.com/en-us/about
**Tier 2 sources:** https://getdesign.md/microsoft (attempted; safe-open error and no search record); https://styles.refero.design/?q=microsoft (attempted; safe-open error); https://styles.refero.design/style/5f39e778-d204-42a9-8b8b-a1519dbd3971; https://styles.refero.design/style/c70a9990-bc4b-4a64-a69b-aeb7b344fb74
**Conflicts unresolved:** none

## 5. Layout Principles

- Home marketing uses large image-led bands and 40px or 48px actions; Microsoft 365 has its own dense product-marketing modules.
- The supplied capture records a public-web spacing cluster of 4px, 8px, 12px, 16px, 24px, 32px, and 48px. It does not establish a universal layout scale for authenticated apps.
- Do not use Fluent documentation geometry to fill gaps in the two captured marketing surfaces.

## 6. Depth & Elevation

The current bundle records mostly flat public-marketing actions and containers. It does not provide a stable, cross-surface shadow recipe for Microsoft marketing, so no shadow token is exported. Fluent elevation guidance belongs to the Fluent design-system domain and must be consulted there for a Fluent product implementation.

## 7. Do's and Don'ts

### Do
- Scope `#0078d4` 8px CTAs to the captured home-marketing surface.
- Use the loaded Segoe family evidence only for the observed public-web roles.
- Preserve the 13px Segoe UI global chrome and 11px footer treatment when reproducing that chrome.
- Use Fluent’s official semantic tokens when building a Fluent product rather than copying public-marketing values.

### Don't
- Treat the home or Microsoft 365 capture as a token source for Windows, authenticated apps, or documentation chrome.
- Substitute a system font and label it Segoe UI Variable.
- Promote Cascadia Code or icon fonts from zero-use declarations into UI typography.
- Invent inactive, disabled, hover, error, or responsive variants not recorded by the collector.

## 8. Responsive Behavior

The supplied evidence is desktop-only (1440×900). It demonstrates 40px, 48px, and 52px public-marketing actions, but it does not establish mobile breakpoints, navigation collapse behavior, or touch-target rules. Follow the relevant Fluent platform guidance when implementing a responsive product surface.

## 9. Agent Prompt Guide

### Quick Color Reference
- Home primary CTA: `#0078d4` on `#ffffff`, 8px radius
- Microsoft 365 captured dark CTA: `#091f2c` on `#ffffff`, 8px radius
- Microsoft 365 captured active pill: `#06161f` on `#ffffff`, 200px radius
- Marketing heading/body: `#0e1726` / `#17253d`
- Global chrome/footer: `#262626` / `#616161` on `#ffffff` / `#f2f2f2`

### Example Component Prompts
- "Reproduce the observed Microsoft home CTA: #0078d4 background, white text, 8px radius, 8px 16px padding, 40px high, 15px/600 Segoe UI Variable Text."
- "Reproduce the observed Microsoft 365 active pill tab: #06161f background, white text, 200px radius, 8px 24px padding, 40px high, 16px/600 Segoe UI Variable Text."
- "Use Fluent 2 documentation for product-system values; do not infer missing Fluent variants from the Microsoft home page."

## 10. Voice & Tone

Microsoft’s official corporate voice is empowering, inclusive, and practical. Its About page frames the mission as helping every person and organization achieve more, while the public Copilot copy uses companion language rather than technical showmanship. Use concise benefit-led labels and sentence case; this is a narrative and content boundary, not an observed rule for every product team.

| Context | Direction |
|---|---|
| Mission framing | Empower the person or organization using the product. |
| Product copy | Describe the task or outcome plainly. |
| AI framing | Use assistive/companion language grounded in the product’s capability. |
| UI labels | Use sentence case, per Fluent typography guidance. |

**Source-grounded samples:**
- "We empower the world" — Microsoft About.
- "Your everyday AI companion" — Microsoft About’s Copilot section.
- "What will you do with Copilot?" — Microsoft About’s Copilot section.

## 11. Brand Narrative

Microsoft describes its mission as empowering every person and every organization on the planet to achieve more. Its current About material connects that mission to expanding opportunity, earning trust, protecting fundamental rights, and advancing sustainability. That purpose provides useful narrative context for a broad product family, but it is not itself a visual-token source.

Fluent 2 supplies the cross-platform design-system context: official documentation describes global and alias tokens for color, type, spacing, elevation, and theming. The public marketing capture and Fluent documentation are therefore complementary—not interchangeable—evidence domains.

## 12. Principles

1. **Empower people and organizations.** Microsoft’s stated mission centers the user’s outcome. *UI implication:* state the user’s task and next action plainly.
2. **Earn trust.** Microsoft names a safe, secure, and responsible digital world as an enduring commitment. *UI implication:* make consequential states and explanations clear rather than decorative.
3. **Respect platform context.** Fluent uses native platform defaults where appropriate. *UI implication:* use the relevant platform/Fluent guidance instead of forcing marketing chrome into a product UI.
4. **Use semantic systems.** Fluent documents global and alias token layers. *UI implication:* choose role-based tokens in a Fluent implementation rather than hard-coding a marketing hex.

## 13. Personas

Microsoft’s official mission names people and organizations globally, but this capture does not provide validated research defining product-specific personas. **[FILL IN: add personas only from approved, product-specific research.]**

## 14. States

The collector recorded a Fluent documentation form-error interaction and Microsoft 365 dialog/tab interactions, but does not provide reusable error, success, loading, empty, disabled, or responsive state specifications. **[FILL IN: add state treatments only from the target product’s observed surface or official component guidance.]**

## 15. Motion & Easing

Fluent’s official design-token documentation establishes that motion can be tokenized, but the supplied capture does not provide a source-backed Microsoft-wide duration or easing table. **[FILL IN: use the relevant official Fluent platform token source when a target product and platform are known.]**
