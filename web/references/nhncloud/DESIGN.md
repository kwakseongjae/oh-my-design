---
id: "nhncloud"
name: "NHN Cloud"
country: KR
category: backend-devops
homepage: "https://www.nhncloud.com"
primary_color: "#125de6"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=nhncloud.com&sz=128"
verified: "2026-07-13"
omd: "0.1"
ds:
  name: TOAST UI
  url: "https://ui.toast.com"
  type: system
  description: NHN Cloud's official, continuously maintained open-source JavaScript UI catalog; it is a distinct developer/documentation surface, not a published token sheet for the NHN Cloud marketing site.
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: corporate-marketing, kind: marketing, url: "https://www.nhncloud.com/kr", inspected: "2026-07-13" }
    - { id: toast-catalog, kind: documentation-catalog, url: "https://ui.toast.com/", inspected: "2026-07-13" }
    - { id: cloud-docs, kind: documentation-chrome, url: "https://docs.nhncloud.com/ko/nhncloud/ko/overview/", inspected: "2026-07-13" }
  sources:
    - { id: corporate-marketing-live, kind: product-surface, url: "https://www.nhncloud.com/kr", captured: "2026-07-13" }
    - { id: toast-catalog-live, kind: product-surface, url: "https://ui.toast.com/", captured: "2026-07-13" }
    - { id: cloud-docs-live, kind: product-surface, url: "https://docs.nhncloud.com/ko/nhncloud/ko/overview/", captured: "2026-07-13" }
    - { id: company-about, kind: official-doc, url: "https://company.nhncloud.com/about?lang=en", captured: "2026-07-13" }
    - { id: toast-ui-official, kind: official-doc, url: "https://ui.toast.com/", captured: "2026-07-13" }
    - { id: toast-ui-license, kind: official-doc, url: "https://github.com/nhn/toast-ui.doc", captured: "2026-07-13" }
    - { id: pretendard-license, kind: license, url: "https://github.com/orioncactus/pretendard/blob/main/LICENSE", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &corporate { surface_id: corporate-marketing, source_id: corporate-marketing-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.on-primary": *corporate
    "tokens.colors.dark": *corporate
    "tokens.colors.muted": *corporate
    "tokens.colors.border": *corporate
    "tokens.typography.family.ui": *corporate
    "tokens.typography.body.size": *corporate
    "tokens.typography.body.weight": *corporate
    "tokens.typography.body.use": *corporate
    "tokens.typography.cta.size": *corporate
    "tokens.typography.cta.weight": *corporate
    "tokens.typography.cta.use": *corporate
    "tokens.typography.cta-lg.size": *corporate
    "tokens.typography.cta-lg.weight": *corporate
    "tokens.typography.cta-lg.use": *corporate
    "tokens.spacing.cta-sm-y": *corporate
    "tokens.spacing.cta-sm-x": *corporate
    "tokens.spacing.cta-lg-y": *corporate
    "tokens.spacing.cta-lg-x": *corporate
    "tokens.spacing.menu-y": *corporate
    "tokens.spacing.menu-x": *corporate
    "tokens.rounded.cta": *corporate
    "tokens.rounded.control": *corporate
    "tokens.rounded.menu": *corporate
    "tokens.shadow.menu-overlay": *corporate
    "tokens.components.corporate-header-cta.type": *corporate
    "tokens.components.corporate-header-cta.bg": *corporate
    "tokens.components.corporate-header-cta.fg": *corporate
    "tokens.components.corporate-header-cta.border": *corporate
    "tokens.components.corporate-header-cta.radius": *corporate
    "tokens.components.corporate-header-cta.padding": *corporate
    "tokens.components.corporate-header-cta.height": *corporate
    "tokens.components.corporate-header-cta.font": *corporate
    "tokens.components.corporate-header-cta.states": *corporate
    "tokens.components.corporate-header-cta.use": *corporate
    "tokens.components.corporate-section-cta.type": *corporate
    "tokens.components.corporate-section-cta.bg": *corporate
    "tokens.components.corporate-section-cta.fg": *corporate
    "tokens.components.corporate-section-cta.border": *corporate
    "tokens.components.corporate-section-cta.radius": *corporate
    "tokens.components.corporate-section-cta.padding": *corporate
    "tokens.components.corporate-section-cta.height": *corporate
    "tokens.components.corporate-section-cta.font": *corporate
    "tokens.components.corporate-section-cta.states": *corporate
    "tokens.components.corporate-section-cta.use": *corporate
    "tokens.components.resource-menu-trigger.type": *corporate
    "tokens.components.resource-menu-trigger.fg": *corporate
    "tokens.components.resource-menu-trigger.border": *corporate
    "tokens.components.resource-menu-trigger.radius": *corporate
    "tokens.components.resource-menu-trigger.padding": *corporate
    "tokens.components.resource-menu-trigger.height": *corporate
    "tokens.components.resource-menu-trigger.font": *corporate
    "tokens.components.resource-menu-trigger.states": *corporate
    "tokens.components.resource-menu-trigger.use": *corporate
tokens:
  source: live-extract
  extracted: "2026-07-13"
  components_harvested: true
  note: "Machine tokens are limited to selector-backed values from the NHN Cloud public corporate marketing route. TOAST UI and NHN Cloud documentation are recorded as separate source domains."
  colors:
    primary: "#125de6"
    on-primary: "#ffffff"
    dark: "#111111"
    muted: "#727781"
    border: "#51565f"
  typography:
    family: { ui: "Pretendard Variable" }
    body: { size: 16, weight: 400, use: "Corporate-marketing body sample" }
    cta: { size: 15, weight: 400, use: "40px corporate header CTA" }
    cta-lg: { size: 17, weight: 500, use: "48px corporate section CTA" }
  spacing: { cta-sm-y: 8, cta-sm-x: 19, cta-lg-y: 10, cta-lg-x: 27, menu-y: 8, menu-x: 16 }
  rounded: { cta: 30, control: 6, menu: 8 }
  shadow: { menu-overlay: "0px 4px 8px rgba(0, 0, 0, 0.06)" }
  components:
    corporate-header-cta: { type: button, bg: "#125de6", fg: "#ffffff", border: "1px solid #125de6", radius: "30px", padding: "8px 19px", height: "40px", font: "15px / 400 Pretendard Variable", states: "hover and pressed observed on the same selector; no state value is inferred", use: "Corporate-marketing header CTA, selector home::[data-omd-capture=13]" }
    corporate-section-cta: { type: button, bg: "#125de6", fg: "#ffffff", border: "1px solid #125de6", radius: "30px", padding: "10px 27px", height: "48px", font: "17px / 500 Pretendard Variable", states: "hover and pressed observed on the same selector class; no state value is inferred", use: "Corporate-marketing section CTA, selector home::[data-omd-capture=29]" }
    resource-menu-trigger: { type: button, fg: "#727781", border: "1px solid #51565f", radius: "6px", padding: "10px 16px", height: "42px", font: "16px / 400 Pretendard Variable", states: "expanded and menu-open observed", use: "Corporate-marketing resource/menu trigger, selector home::[data-omd-capture=130]" }
---
# Design System Inspiration of NHN Cloud

## 1. Visual Theme & Atmosphere

NHN Cloud is a cloud and IT-service company whose public platform describes a broad set of infrastructure and platform services for business operations and service development. Its corporate history traces the cloud service to a 2014 OpenStack launch and records NHN Cloud Corp.'s 2022 establishment, while the current company site frames the role as enabling customers' next technical challenge. On the captured corporate marketing route, that promise is expressed with a narrow, high-contrast action system: a bright `#125DE6` blue on fully rounded CTAs, white labels, dark resource menus, and the loaded `Pretendard Variable` face. The company’s official symbol describes three dots as both cloud and connection; the visual interface does not literalize that story with a broad decorative palette. It instead uses blue as a deliberate conversion signal. [NHN Cloud Company](https://company.nhncloud.com/about?lang=en) and the public [cloud platform](https://www.nhncloud.com/kr) are distinct from the developer-facing TOAST UI catalog and from the documentation chrome captured below.

## 2. Color Palette & Roles

**Corporate marketing route — selector-backed machine tokens**

- Primary action: `#125DE6` — observed as the filled CTA background and border.
- On primary: `#FFFFFF` — observed CTA label color.
- Dark menu surface: `#111111` — observed expanded menu background.
- Muted control text: `#727781` — observed resource-menu trigger text and menu border.
- Control border: `#51565F` — observed resource-menu trigger border.

The capture also records `#E9F1FF` in documentation chrome. It is not promoted as a corporate marketing or TOAST UI token: the page is a separate documentation shell.

## 3. Typography Rules

- **Live corporate computed use:** `Pretendard Variable` is the only general corporate UI family promoted here. It has 480 visible uses across the corporate marketing capture and a loaded FontFace/source match at `https://www.nhncloud.com/fonts/PretendardVariable.woff2`.
- **Live documentation-chrome use:** `Noto Sans KR` is loaded/high confidence with 203 visible uses on `docs.nhncloud.com`, from Google Fonts sources. It is documentation chrome evidence, not a replacement for the corporate token family.
- **Unresolved catalog use:** the TOAST UI catalog computes `Noto Sans CJK KR` on 122 visible samples, but the collector found no matching loaded FontFace or source. It remains unresolved.
- **Declared-only assets:** `common`, `Noto Sans`, `Noto Sans JP`, `swiper-icons`, and `tui-calendar-font-icon` have declaration/source evidence but zero visible observed use. They are not promoted or substituted.
- **Font licence boundary:** Pretendard’s upstream project distributes the family under SIL Open Font License 1.1. The licence describes the family; the corporate FontFaceSet/source evidence above is what establishes current NHN Cloud web use.

## 4. Component Stylings

### Corporate Header CTA

**40px primary action**
- Background: #125DE6
- Text: #FFFFFF
- Border: 1px solid #125DE6
- Radius: 30px
- Padding: 8px 19px
- Height: 40px
- Font: 15px / 400 / Pretendard Variable
- Use: Corporate-marketing header CTA; `home::[data-omd-capture="13"]`.

### Corporate Section CTA

**48px primary action**
- Background: #125DE6
- Text: #FFFFFF
- Border: 1px solid #125DE6
- Radius: 30px
- Padding: 10px 27px
- Height: 48px
- Font: 17px / 500 / Pretendard Variable
- Use: Corporate-marketing section CTA; `home::[data-omd-capture="29"]`.

### Resource Menu Trigger

**Expanded trigger**
- Text: #727781
- Border: 1px solid #51565F
- Radius: 6px
- Padding: 10px 16px
- Height: 42px
- Font: 16px / 400 / Pretendard Variable
- Use: Corporate-marketing resource/menu trigger; `home::[data-omd-capture="130"]`; expanded/menu-open was observed.

### Resource Menu

**Expanded panel**
- Background: #111111
- Text: #FFFFFF
- Border: 1px solid #727781
- Radius: 8px
- Padding: 8px 0px
- Shadow: 0px 4px 8px rgba(0, 0, 0, 0.06)
- Font: 16px / 400 / Pretendard Variable
- Use: Expanded corporate-marketing menu panel; `home::[data-omd-interaction-capture="menu-0-0"]`.

No TOAST widget, input, grid, editor, hover color, error treatment, or responsive variant is specified here without a captured selector/value pair on an actual relevant surface.

## 5. Layout Principles

The corporate marketing capture pairs a 40px header action with 48px section actions, keeping the bright blue lane intentionally limited. The 30px CTA radius belongs to this marketing surface; the observed 6px trigger and 8px menu panel are a separate resource-control cluster. The source artifact does not establish a universal grid, app-shell spacing scale, or layout rule for the cloud console, TOAST UI applications, or documentation pages.

## 6. Depth & Elevation

The captured corporate CTA samples have no shadow. The expanded resource menu alone records an overlay shadow of `0px 4px 8px rgba(0, 0, 0, 0.06)` behind a `#111111` panel and `#727781` hairline. Do not turn that one menu observation into a general card-elevation system.

## 7. Do's and Don'ts

### Do

- Use `#125DE6` and a 30px radius only for the captured corporate marketing CTA pattern.
- Use loaded `Pretendard Variable` for corporate-marketing reproductions.
- Keep the 6px trigger and 8px expanded-menu geometry tied to their observed resource control.
- Treat TOAST UI and NHN Cloud docs as separately evidenced developer/documentation surfaces.

### Don't

- Do not merge TOAST UI catalog chrome or documentation-chrome colors into the corporate marketing token set.
- Do not substitute `Noto Sans KR`, `Noto Sans CJK KR`, or a system font for the verified corporate `Pretendard Variable` role.
- Do not invent grid, editor, calendar, error, hover, disabled, or responsive variants from TOAST UI’s product list.
- Do not generalize the menu overlay shadow into a broad elevation ladder.

## 8. Responsive Behavior

The supplied capture is 1440×900 only. It establishes 40px and 48px CTA examples and a 42px resource trigger at that viewport, but it does not establish a mobile breakpoint, responsive menu geometry, or touch-target policy. Preserve the observed values only where the same surface is being recreated; validate any responsive implementation separately.

## 9. Agent Prompt Guide

For a corporate NHN Cloud marketing treatment, use `Pretendard Variable`, a white-on-`#125DE6` 30px pill CTA, and choose either the 40px / `8px 19px` / 15px-400 header sample or the 48px / `10px 27px` / 17px-500 section sample. For the captured resource menu, use a transparent `#727781` / `#51565F` 6px trigger and an expanded `#111111` panel with an 8px radius and the observed light overlay shadow. Do not use this small marketing sample to synthesize a cloud-console UI or TOAST UI widget library.

## 10. Voice & Tone

The official company statement is business-enabling and practical: it positions NHN Cloud as technology support for customers' new journeys. Keep corporate copy direct, capability-led, and concrete about the operational outcome. The TOAST UI catalog has a different, developer-oriented voice: it presents applications, components, tools, and front-end guidance. That public catalog voice is useful context for developers, but it does not turn documentation labels into corporate-marketing microcopy. [Company statement](https://company.nhncloud.com/about?lang=en) · [TOAST UI](https://ui.toast.com/)

## 11. Brand Narrative

NHN Cloud's official history records an OpenStack public-cloud launch in 2014, a cloud-center build in Pangyo in 2015, and the launch of NHN Cloud in April 2022. The company now describes itself as a cloud and IT-service business, with current growth efforts spanning data/AI services, private and global markets, and regional data centers. Its official logo explanation centres connection and boundless possibility; the three-dot symbol is described as a cloud and as a prompt for easy, flexible collaboration.

The developer-facing counterpart is TOAST UI: its own site calls it a JavaScript UI library and free open-source project constantly managed by NHN Cloud, listing applications such as Grid, Editor, Calendar, Chart, and Image Editor alongside smaller components and front-end guides. The catalog is informative evidence of the developer ecosystem, not proof that its catalog-page typography or any unobserved component value is the NHN Cloud corporate design system.

## 12. Principles

1. **Enable a customer’s technical journey.**
   *UI implication:* Prefer a clear capability and an unambiguous next action over decorative language.

2. **Connection is a brand idea, not a license to invent a token system.**
   *UI implication:* Keep the action lane focused; do not turn the corporate logo story into unsupported visual rules.

3. **Corporate marketing and developer catalog are distinct public domains.**
   *UI implication:* Attribute each token and component to its captured route before reuse.

4. **Open-source developer tools need precise boundaries.**
   *UI implication:* Describe TOAST UI's documented applications and components without claiming unseen states or styles.

## 13. Personas

- **Enterprise technical evaluator:** visits the public cloud marketing route to understand services and a next step; the verified CTA values belong to this route.
- **Developer evaluating a UI utility:** visits TOAST UI’s catalog for applications, components, and guides; this is a developer/documentation journey, not the NHN Cloud console.
- **Cloud documentation reader:** uses `docs.nhncloud.com` for reference material; its loaded Noto Sans KR documentation chrome remains surface-local.

## 14. States

- Corporate header and section CTA selectors carry collector markers for hover and pressed, but no separate computed state values are promoted.
- The corporate resource trigger was observed expanded/menu-open with the 42px, 6px-radius trigger values above.
- The expanded corporate menu panel was observed at `#111111`, with a 1px `#727781` border, 8px radius, and the recorded overlay shadow.
- A documentation-chrome CTA was observed separately at `surface-3::[data-omd-capture="3"]`: `#125DE6`, white text, 30px radius, `9px 20px` padding, and Noto Sans KR 15px/300. It is not promoted as the corporate CTA token.
- No focus, disabled, error, success, loading, empty, toast, dialog, or form-validation state is asserted.

## 15. Motion & Easing

No computed duration, easing curve, or motion sequence was supplied as a reliable token. The menu-open capture establishes the resulting expanded panel only. Treat motion values as unresolved until a relevant public surface is captured with explicit computed transition evidence.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.nhncloud.com/kr (corporate marketing computed styles and loaded Pretendard Variable), https://ui.toast.com/ (official TOAST UI catalog), https://docs.nhncloud.com/ko/nhncloud/ko/overview/ (separate documentation chrome), https://company.nhncloud.com/about?lang=en (official company history and brand context)
**Tier 2 sources:** https://getdesign.md/nhncloud — attempted; built-in web open returned a non-retryable error and search returned no record. https://styles.refero.design/?q=nhncloud — attempted; built-in web open returned a non-retryable error and search returned no record.
**Conflicts unresolved:** none
**Proof:** see .verification.md (## Proof — Tier 1 live inspect)
