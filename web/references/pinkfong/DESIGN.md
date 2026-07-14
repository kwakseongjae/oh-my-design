---
id: pinkfong
name: The Pinkfong Company
display_name_kr: 더핑크퐁컴퍼니
country: KR
category: consumer-tech
homepage: "https://www.thepinkfongcompany.com"
primary_color: "#ff66af"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=pinkfong.com&sz=128"
verified: "2026-07-13"
added: "2026-06-17"
omd: "0.1"
ds:
  name: The Pinkfong Company Identity
  url: "https://www.thepinkfongcompany.com/company"
  type: brand
  description: Official corporate identity page with company and franchise BI downloads; not a public product-component specification.
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: corporate-home, kind: marketing, url: "https://www.thepinkfongcompany.com/", inspected: "2026-07-13" }
    - { id: corporate-company, kind: marketing, url: "https://www.thepinkfongcompany.com/company", inspected: "2026-07-13" }
    - { id: corporate-business, kind: marketing, url: "https://www.thepinkfongcompany.com/business", inspected: "2026-07-13" }
    - { id: font-release, kind: brand-assets, url: "https://www.thepinkfongcompany.com/news/pr/207", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.thepinkfongcompany.com/", captured: "2026-07-13" }
    - { id: company-live, kind: product-surface, url: "https://www.thepinkfongcompany.com/company", captured: "2026-07-13" }
    - { id: business-live, kind: product-surface, url: "https://www.thepinkfongcompany.com/business", captured: "2026-07-13" }
    - { id: identity-official, kind: brand-asset, url: "https://www.thepinkfongcompany.com/company", captured: "2026-07-13" }
    - { id: font-release-official, kind: official-doc, url: "https://www.thepinkfongcompany.com/news/pr/207", captured: "2026-07-13" }
    - { id: spoqa-license, kind: license, url: "https://github.com/spoqa/spoqa-han-sans", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &home { surface_id: corporate-home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.canvas": *home
    "tokens.colors.foreground": *home
    "tokens.colors.muted": *home
    "tokens.typography.family.corporate-ui": *home
    "tokens.typography.family.brand-display": &font { surface_id: font-release, source_id: font-release-official, method: official-doc, captured: "2026-07-13" }
    "tokens.typography.corporate-body.size": *home
    "tokens.typography.corporate-body.weight": *home
    "tokens.typography.corporate-body.lineHeight": *home
    "tokens.typography.corporate-body.use": *home
    "tokens.typography.corporate-heading.size": &company { surface_id: corporate-company, source_id: company-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.typography.corporate-heading.weight": *company
    "tokens.typography.corporate-heading.lineHeight": *company
    "tokens.typography.corporate-heading.use": *company
    "tokens.typography.brand-display.size": &business { surface_id: corporate-business, source_id: business-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.typography.brand-display.weight": *business
    "tokens.typography.brand-display.lineHeight": *business
    "tokens.typography.brand-display.use": *business
    "tokens.spacing.xs": *home
    "tokens.spacing.control": *home
    "tokens.spacing.action": *home
    "tokens.rounded.none": *home
    "tokens.rounded.compact": *home
    "tokens.rounded.pill": *home
    "tokens.rounded.emphasis": *business
    "tokens.shadow.none": *home
    "tokens.shadow.pink-lift": *home
    "tokens.components.corporate-primary-action.type": *home
    "tokens.components.corporate-primary-action.bg": *home
    "tokens.components.corporate-primary-action.fg": *home
    "tokens.components.corporate-primary-action.radius": *home
    "tokens.components.corporate-primary-action.padding": *home
    "tokens.components.corporate-primary-action.font": *home
    "tokens.components.corporate-primary-action.states": *home
    "tokens.components.corporate-primary-action.use": *home
    "tokens.components.family-site-pill.type": *home
    "tokens.components.family-site-pill.bg": *home
    "tokens.components.family-site-pill.fg": *home
    "tokens.components.family-site-pill.radius": *home
    "tokens.components.family-site-pill.padding": *home
    "tokens.components.family-site-pill.font": *home
    "tokens.components.family-site-pill.states": *home
    "tokens.components.family-site-pill.use": *home
    "tokens.components.business-outline-action.type": *company
    "tokens.components.business-outline-action.bg": *company
    "tokens.components.business-outline-action.fg": *company
    "tokens.components.business-outline-action.radius": *company
    "tokens.components.business-outline-action.padding": *company
    "tokens.components.business-outline-action.font": *company
    "tokens.components.business-outline-action.states": *company
    "tokens.components.business-outline-action.use": *company
    "tokens.components.mobile-menu-dialog.type": *home
    "tokens.components.mobile-menu-dialog.bg": *home
    "tokens.components.mobile-menu-dialog.fg": *home
    "tokens.components.mobile-menu-dialog.padding": *home
    "tokens.components.mobile-menu-dialog.font": *home
    "tokens.components.mobile-menu-dialog.use": *home
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Only the supplied corporate-site capture is token authority. Consumer Pinkfong pages, authenticated apps, and a general brand component kit were not captured. Spoqa Han Sans Neo is loaded on the corporate capture; BabyShark is a separately confirmed official distributed display asset and a single loaded h1 use."
  colors:
    primary: "#ff66af"
    canvas: "#ffffff"
    foreground: "#000000"
    muted: "#5a5a5a"
  typography:
    family: { corporate-ui: "Spoqa Han Sans Neo", brand-display: "Pinkfong Baby Shark Font" }
    corporate-body: { size: 16, weight: 400, lineHeight: 1.5715, use: "Observed corporate body text on the supplied public routes." }
    corporate-heading: { size: 38, weight: 700, lineHeight: 1.5715, use: "Observed corporate-company h1 scale; its computed family is the system stack, not a Pinkfong font token." }
    brand-display: { size: 48, weight: 700, lineHeight: 1, use: "One corporate-business h1 uses loaded BabyShark; official release calls the distributed family Pinkfong Baby Shark Font." }
  spacing: { xs: 8, control: 20, action: 32 }
  rounded: { none: 0, compact: 8, pill: 32, emphasis: 40 }
  shadow:
    none: "none"
    pink-lift: "rgba(255, 5, 88, 0.06) 0px 2px 0px 0px"
  components_harvested: true
  components:
    corporate-primary-action: { type: button, bg: "#ff66af", fg: "#ffffff", radius: 32, padding: "32px 15px", font: "24px / 400 / system stack", states: "Observed default only; interactionCount is 0.", use: "corporate-home `home::[data-omd-capture=\"26\"]`; one public corporate CTA, 64px rendered height." }
    family-site-pill: { type: button, bg: "#ffffff", fg: "#8c8c8c", radius: 32, padding: "4px 20px", font: "14px / 400 / system stack", states: "Observed default only; interactionCount is 0.", use: "`home::[data-omd-capture=\"31\"]`, repeated across the three corporate routes; 35px rendered height." }
    business-outline-action: { type: button, bg: "#ffffff", fg: "#08c7ff", radius: 32, padding: "30px 15px", font: "18px / 400 / system stack", states: "Collector labels focus, hover, and pressed on `surface-2::[data-omd-capture=\"23\"]`; interactionCount is 0, so no state value is specified.", use: "corporate-company `surface-2::[data-omd-capture=\"23\"]`; one public business-page action, 60px rendered height." }
    mobile-menu-dialog: { type: dialog, bg: "#ffffff", fg: "#000000", padding: "30px", font: "14px / 400 / system stack", use: "`home::div.DefaultMenu_mobile-menu-modal__SEaJA`; hidden mobile-menu dialog structure captured on all three corporate routes." }
---

# Design System Inspiration of The Pinkfong Company

## 1. Visual Theme & Atmosphere

The Pinkfong Company is a global family-entertainment company whose official corporate pages describe a portfolio led by Pinkfong, Baby Shark, and Bebefinn. Its public materials pair memorable music, stories, technology, character worlds, and experiences for children and families; the company page explicitly frames the work as content that connects people through joy. The current reference is intentionally narrower than that portfolio: its supplied collector evidence covers only the public corporate home, company, and business pages. Those pages use a mostly white, black, and gray corporate shell with Pinkfong pink (`#ff66af`) for a prominent action, rather than proving a universal consumer-product interface. [Company](https://www.thepinkfongcompany.com/en/company) · [Business](https://www.thepinkfongcompany.com/en/business)

The company’s identity page supplies CI and BI downloads for The Pinkfong Company, Pinkfong, Baby Shark, and Bebefinn. It also links to an official Pinkfong Baby Shark Font release. That official asset expresses the character side of the brand, while the captured corporate shell uses a loaded Spoqa Han Sans Neo body family plus system-stack controls. The distinction is important: identity assets and one loaded display heading are not a general app type scale or a license to substitute a system font for the named family.

**Key Characteristics:**

- Public corporate pages use white `#ffffff`, black `#000000`, muted gray `#5a5a5a`, and a measured Pinkfong-pink `#ff66af` action.
- `#ff66af` is a selector-backed corporate-action value, not a blanket claim for consumer, app, or franchise controls.
- Spoqa Han Sans Neo is loaded on the corporate capture; the generic system stack is separately observed on many public controls.
- Pinkfong Baby Shark Font is an official distributed brand asset and one loaded corporate-business display use; it is not promoted to the corporate UI family.
- Only corporate-page defaults and their exact selector/surface provenance are documented. Product flows, consumer-site UI, and generic family-site components are omitted.

## 2. Color Palette & Roles

### Observed corporate surfaces

- **Pink action** (`#ff66af`): observed on the public corporate-home primary CTA and on a business-page primary action.
- **Canvas** (`#ffffff`): observed on the family-site pill, business-page outlined action, and mobile-menu dialog.
- **Corporate foreground** (`#000000`): recurrent public corporate text value and the mobile-menu dialog foreground.
- **Muted corporate text** (`#5a5a5a`): recurrent public corporate text value.

### Boundary

The capture does not include Pinkfong consumer pages, an authenticated product, or an official color-specification document that maps these values to semantic states. `#08c7ff` occurs only as the selector-backed corporate-company outline-action foreground; it is retained inside that component record, not elevated to a global color token. The identity-page BI downloads establish asset availability, not a UI palette.

## 3. Typography Rules

### Evidence classes

- **Live computed surface-use:** the supplied artifact records **Spoqa Han Sans Neo** as `loaded` with high confidence on three corporate-route text elements and corroborates it with 15 Spoqa CDN source URLs. It is the verified corporate-public text family only.
- **Live computed display use:** one corporate-business h1 computes to `BabyShark`, 48px/700/48px, with a loaded `pbs-light.otf` source on the company domain. The official release calls the distributed family **Pinkfong Baby Shark Font**; the naming difference is retained as a source boundary rather than silently normalized.
- **Official distributed asset:** the company announced Pinkfong Baby Shark Font in 2025, describes its fin-inspired triangular form and rhythmic character, and says it is freely downloadable from the company identity page for documents, fan art, and card-news-style work. This is a font-asset and stated-use fact, not a source for uncaptured UI metrics or components. [Official release](https://www.thepinkfongcompany.com/news/pr/207)
- **License boundary:** the current official release describes free download and the listed creative uses but does not establish a broader webfont license in this reference. Separately, the loaded corporate Spoqa Han Sans Neo is distributed by Spoqa under the SIL Open Font License. [Spoqa source and license](https://github.com/spoqa/spoqa-han-sans)
- **Declared/system families:** `-apple-system`, `system-ui`, Segoe UI, Roboto, Helvetica Neue, Noto Sans, emoji families, and Arial appear in computed stacks. They remain system context; do not label a substituted system font as Spoqa Han Sans Neo or Pinkfong Baby Shark Font.

### Observed hierarchy

| Role | Size | Weight | Line height | Source boundary |
|------|------|--------|-------------|-----------------|
| Corporate body | 16px | 400 | 25.144px | Loaded Spoqa Han Sans Neo text on supplied corporate routes |
| Corporate heading | 38px | 700 | 59.717px | Corporate-company h1; computed system stack, not a brand-font token |
| Brand display | 48px | 700 | 48px | One corporate-business h1 computes to loaded `BabyShark`; official distribution is Pinkfong Baby Shark Font |

## 4. Component Stylings

### Public corporate home

**Corporate primary action — observed default**
- Background: #ff66af
- Text: #ffffff
- Radius: 32px
- Padding: 32px 15px
- Font: 24px / 400 / system stack
- Shadow: rgba(255, 5, 88, 0.06) 0px 2px 0px 0px
- States: Observed default only; interactionCount is 0.
- Use: `corporate-home` / `home::[data-omd-capture="26"]`; one public corporate CTA with 64px rendered height.

**Family-site pill — observed default**
- Background: #ffffff
- Text: #8c8c8c
- Radius: 32px
- Padding: 4px 20px
- Font: 14px / 400 / system stack
- Shadow: rgba(0, 0, 0, 0.02) 0px 2px 0px 0px
- States: Observed default only; interactionCount is 0.
- Use: `home::[data-omd-capture="31"]`, repeated on corporate-home, corporate-company, and corporate-business; 35px rendered height.

### Public corporate-company page

**Business outline action — observed default**
- Background: #ffffff
- Text: #08c7ff
- Radius: 32px
- Padding: 30px 15px
- Font: 18px / 400 / system stack
- States: Collector labels focus, hover, and pressed on `corporate-company` / `surface-2::[data-omd-capture="23"]`; interactionCount is 0, so no state value is specified.
- Use: One public corporate-company action with 60px rendered height.

### Shared corporate mobile structure

**Mobile menu dialog — captured structure**
- Background: #ffffff
- Text: #000000
- Padding: 30px
- Font: 14px / 400 / system stack
- Use: `home::div.DefaultMenu_mobile-menu-modal__SEaJA`, a hidden dialog structure captured on all three corporate routes; no opened dialog interaction was captured.

No public consumer-product button, form, card, badge, navigation state, toast, authenticated flow, or general component variant had the required selector plus surface provenance in this update.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.thepinkfongcompany.com/; https://www.thepinkfongcompany.com/company; https://www.thepinkfongcompany.com/business; https://www.thepinkfongcompany.com/en/company; https://www.thepinkfongcompany.com/en/business; https://www.thepinkfongcompany.com/news/pr/207; https://github.com/spoqa/spoqa-han-sans
**Tier 2 sources:** https://getdesign.md/pinkfong (attempted through built-in web search; no usable Pinkfong record returned); https://styles.refero.design/?q=pinkfong (attempted through built-in web search; no usable Pinkfong style record returned)
**Conflicts unresolved:** none

The prior reference mixed a historical consumer capture into this corporate-only artifact. This update preserves official brand and font context but retains machine tokens and components only where the 2026-07-13 supplied evidence provides a current selector and surface.

## 5. Layout Principles

The supplied evidence is a single desktop corporate capture. It records spacing clusters at 8px, 20px, and 32px, but does not establish a reusable product grid, consumer-content layout, or mobile breakpoint system. The measured controls above preserve their own padding; no generic card or page-spacing rule is inferred.

## 6. Depth & Elevation

Most representative corporate controls and the dialog have `box-shadow: none`. Two observed button treatments carry small shadows: the Pinkfong action uses `rgba(255, 5, 88, 0.06) 0px 2px 0px 0px`, while the family-site pill uses `rgba(0, 0, 0, 0.02) 0px 2px 0px 0px`. These are component-local observations, not an elevation scale.

## 7. Do's and Don'ts

### Do

- Preserve the corporate/public source boundary when using the documented controls.
- Use `#ff66af` only where a Pinkfong corporate-action treatment is intended and evidenced.
- Load Spoqa Han Sans Neo before naming a corporate public-text treatment after it.
- Treat Pinkfong Baby Shark Font as a distinct display asset with its own official release and stated-use boundary.
- Keep the recorded selector and route with every component reuse claim.

### Don't

- Do not turn the public corporate CTA into a general consumer-product, checkout, or authenticated-app button.
- Do not infer interaction styling from collector state labels while `interactionCount` is zero.
- Do not call a system-stack heading a Pinkfong font.
- Do not promote the company’s BI downloads or font release into a public component library.
- Do not invent mobile, error, success, loading, or responsive variants from this desktop artifact.

## 8. Responsive Behavior

Only a 1440×900 collector viewport was supplied. The artifact includes a hidden mobile-menu dialog structure, but no open-dialog or mobile viewport observation. Breakpoints, touch-target rules, safe-area behavior, and responsive layout changes are intentionally absent.

## 9. Agent Prompt Guide

For a public corporate Pinkfong concept, start from the evidence boundary: white `#ffffff`, black `#000000`, muted `#5a5a5a`, and a selector-backed Pinkfong-pink `#ff66af` action. Use the specific corporate CTA, family-site pill, or business outline action only with its recorded route and default-state limitation. Load Spoqa Han Sans Neo only when the verified source can be loaded; use Pinkfong Baby Shark Font as an official display asset only within its stated distribution boundary. Do not generate a Pinkfong consumer site, child-facing app, purchase flow, status system, or generic character-card library from this reference.

## 10. Voice & Tone

The official company description ties vivid characters, memorable music, and easy-to-follow movement to family-entertainment content IP. Its English company page says the mission is to connect people through joyful content and entertaining experiences, while the business page presents content, partnership, merchandise, live events, and mobile apps as separate offerings. This supports an optimistic, clear corporate voice that speaks about family enjoyment and content capability without treating all corporate copy as child-facing UI guidance. [Company](https://www.thepinkfongcompany.com/en/company) · [Business](https://www.thepinkfongcompany.com/en/business)

## 11. Brand Narrative

The Pinkfong Company describes itself as a global family-entertainment company working across music, stories, technology, video and audio content, live events, mobile apps, partnerships, and merchandise. Its official identity page groups the company CI with Pinkfong, Baby Shark, and Bebefinn BI assets, showing a portfolio structure rather than a single product surface. [Company](https://www.thepinkfongcompany.com/en/company) · [Business](https://www.thepinkfongcompany.com/en/business)

In 2025, the company released Pinkfong Baby Shark Font for Baby Shark’s tenth anniversary. The release describes a 9-language family with 13,200 characters, fin-inspired triangular details, and a rhythmic visual idea based on the song; it offers the font through the identity page for everyday documents, fan art, and card news. That is an official asset and brand-expression evolution, not evidence that every corporate or consumer control uses the font. [Official font release](https://www.thepinkfongcompany.com/news/pr/207)

## 12. Principles

1. **Connect through joyful content.** The official mission explicitly centers joyful content and entertaining experiences. *UI implication:* corporate public copy should state the content or experience clearly before adding promotional flourish.
2. **Keep portfolio identities distinct.** The company page distributes separate CI/BI assets for the company, Pinkfong, Baby Shark, and Bebefinn. *UI implication:* do not collapse corporate identity assets into a single universal franchise UI palette.
3. **Treat type as an asset with a boundary.** The official font release gives purpose and permitted creative examples, while the corporate capture separately proves a loaded body family. *UI implication:* use a named font only with the evidence class and load/distribution condition that supports it.

## 13. Personas

Official public materials identify **kids and families worldwide** as the audience for joyful content, and enumerate business contexts including content, partnerships, merchandise, live events, and mobile apps. These are public audience and stakeholder cues, not validated individual personas. No fictional personas are added. [Company](https://www.thepinkfongcompany.com/en/company) · [Business](https://www.thepinkfongcompany.com/en/business)

## 14. States

The supplied artifact contains default corporate controls, a hidden mobile-menu dialog structure, one disabled menu-label sample, and collector-labelled focus/hover/pressed entries with `interactionCount: 0`. It does not provide opened-dialog, empty, loading, error, success, toast, form-validation, or product-state evidence. Those specifications are intentionally absent.

## 15. Motion & Easing

No duration, easing curve, reduced-motion rule, or captured animated state is available in the supplied artifact. Motion tokens are intentionally absent.
