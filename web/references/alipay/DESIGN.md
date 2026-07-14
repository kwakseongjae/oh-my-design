---
id: alipay
name: Alipay
country: CN
category: fintech
homepage: "https://www.alipay.com"
primary_color: "#1890FF"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=alipay.com&sz=128"
verified: "2026-07-13"
omd: "0.1"
ds:
  name: Ant Design
  url: "https://ant.design/docs/spec/introduce/"
  type: system
  description: Ant Group's open enterprise design language; it is design context, not a substitute for the observed Alipay Open Platform surface.
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: developer-platform, url: "https://open.alipay.com/?mobile=2", inspected: "2026-07-13" }
    - { id: web-app, kind: developer-platform-product, url: "https://open.alipay.com/module/webApp", inspected: "2026-07-13" }
    - { id: tools, kind: developer-platform-tools, url: "https://open.alipay.com/tool", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://open.alipay.com/?mobile=2", captured: "2026-07-13" }
    - { id: web-app-live, kind: product-surface, url: "https://open.alipay.com/module/webApp", captured: "2026-07-13" }
    - { id: tools-live, kind: product-surface, url: "https://open.alipay.com/tool", captured: "2026-07-13" }
    - { id: ant-context, kind: official-doc, url: "https://ant.design/docs/spec/introduce/", captured: "2026-07-13" }
    - { id: ant-font, kind: official-doc, url: "https://ant.design/docs/spec/font-cn/", captured: "2026-07-13" }
    - { id: ant-values, kind: official-doc, url: "https://ant.design/docs/spec/values/", captured: "2026-07-13" }
    - { id: ant-license, kind: license, url: "https://github.com/ant-design/ant-design/blob/master/LICENSE", captured: "2026-07-13" }
    - { id: antgroup-context, kind: official-doc, url: "https://www.antgroup.com/en/home", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &webapp { surface_id: web-app, source_id: web-app-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.canvas": &home { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.surface": *webapp
    "tokens.colors.foreground": *home
    "tokens.colors.nav": *home
    "tokens.colors.muted": *home
    "tokens.colors.input-border": *webapp
    "tokens.typography.family.sans": *home
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.use": *home
    "tokens.typography.nav-active.size": *home
    "tokens.typography.nav-active.weight": *home
    "tokens.typography.nav-active.lineHeight": *home
    "tokens.typography.nav-active.use": *home
    "tokens.typography.cta.size": *webapp
    "tokens.typography.cta.weight": *webapp
    "tokens.typography.cta.lineHeight": *webapp
    "tokens.typography.cta.use": *webapp
    "tokens.rounded.card": &tools { surface_id: tools, source_id: tools-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.rounded.input": *webapp
    "tokens.shadow.cta": *webapp
    "tokens.components.tool-card.type": *tools
    "tokens.components.tool-card.bg": *tools
    "tokens.components.tool-card.radius": *tools
    "tokens.components.tool-card.padding": *tools
    "tokens.components.tool-card.font": *tools
    "tokens.components.tool-card.use": *tools
tokens:
  source: live-extract
  extracted: "2026-07-13"
  note: "Only supplied deterministic capture values for Alipay Open Platform are tokens. Ant Design defaults remain separately documented official design-system context."
  colors:
    primary: "#1890FF"
    canvas: "#F5F5F5"
    surface: "#FFFFFF"
    foreground: "#000000"
    nav: "#333333"
    muted: "#8997AD"
    input-border: "#999999"
  typography:
    family: { sans: "-apple-system, system-ui, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif" }
    body: { size: 14, weight: 400, lineHeight: 1.5715, use: "Observed Open Platform body and footer text; a system stack, not a branded webfont." }
    nav-active: { size: 18, weight: 500, lineHeight: 3.3333, use: "Observed active home navigation link." }
    cta: { size: 16, weight: 400, lineHeight: 2.5, use: "Observed web-app banner action." }
  rounded: { input: 2, card: 8 }
  shadow: { cta: "0 2px 0 rgba(0,0,0,0.043)" }
  components_harvested: true
  components:
    tool-card: { type: card, bg: "#FFFFFF", radius: 8, padding: "22px 10px", font: "14px/400 system", use: "Observed developer-tools content card only." }
---

# Design System Inspiration of Alipay

## 1. Visual Theme & Atmosphere

Alipay began in 2004 as a way to create trust between online buyers and sellers, and Ant Group now describes it as a one-stop digital daily-life platform that works with partners across payments, public services, and local life. The three supplied public captures are narrower: they are the Alipay Open Platform's developer-facing home, web/mobile-app integration page, and developer-tools page. Their shared expression is practical rather than promotional—light gray page ground, white content planes, compact Chinese-language navigation, a blue call-to-action, and a system-font stack chosen by the browser. That is an observable developer-platform surface, not evidence for the native consumer wallet or for a universal Alipay app theme.

Ant Design is important historical and design context: its official introduction says Ant User-Experience Design Team built it for complex enterprise products, with the values Natural, Certain, Meaningful, and Growing. The public Open Platform capture visibly contains Ant-class names, but that does not authorize promotion of every current Ant default into Alipay product evidence. Its captured `#1890FF` banner action, 2px control radius, and 8px tools card are retained as surface-specific facts; Ant Design's current `#1677FF` defaults are documented as a separately configurable open-source system.

**Key Characteristics:**

- Developer-platform pages with a `#F5F5F5` page ground and white content cards
- `#1890FF` on the captured web/mobile-app banner action; `#1677FF` is Ant Design documentation context, not a live Open Platform token in this run
- Compact 14px system-font body text, with larger active navigation and banner-action text
- Small 2px search/action geometry alongside an 8px developer-tool card
- No observed hover, pressed, disabled, menu, dialog, toast, or mobile state in the supplied capture

## 2. Color Palette & Roles

### Observed Alipay Open Platform

- **Developer action** (`#1890FF`): observed on `surface-2::[data-omd-capture="10"]`, the web/mobile-app banner action.
- **Page canvas** (`#F5F5F5`): observed on the `home` body.
- **Card surface** (`#FFFFFF`): observed on the developer-tools `contentCard___nkyvg` card and banner action text.
- **Default foreground** (`#000000` at 85% in the raw capture): body, footer, and card copy.
- **Navigation ink** (`#333333`): observed in the home menu.
- **Muted utility ink** (`#8997AD`): observed on compact home footer utility items.
- **Search border/text** (`#999999`): observed on the Open Platform search input.

### Official Ant Design context, not an Alipay Open Platform token

Ant Design currently documents `#1677FF` as its default `colorPrimary`, plus configurable color, radius, and component tokens. Its theming documentation explicitly supports overrides. The value is useful when discussing Ant Design itself, but it is not substituted for the captured Open Platform `#1890FF` action.

## 3. Typography Rules

### Evidence classes

- **Live computed surface-use:** all observed Open Platform specimens resolve to `-apple-system, system-ui, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif`. This is a high-confidence system stack; no loaded named FontFaceSet match was supplied, so it is not promoted as an Alipay-owned webfont.
- **Official design-system guidance:** Ant Design's font documentation also prioritizes the operating system's interface family and offers screen-readable fallbacks. This supports the system-first rationale for Ant Design documentation, not a claim that a proprietary Alipay family is in use on the captured pages.
- **Declared-only assets:** the collector found `AlipayNumber`, `AlipayNumber-Medium`, `osite-menu`, and KaTeX families with `@font-face` sources but zero visible use. They remain declared-only. In particular, a declaration without computed use plus FontFaceSet/source corroboration is not a UI-family claim.
- **Official distributed font or font license:** none was located in the official material collected here. Ant Design's repository is MIT-licensed software; that license applies to the library code, not to a newly inferred Alipay font license.

| Role | Size | Weight | Line height | Provenance |
|---|---:|---:|---:|---|
| Default body/footer | 14px | 400 | 22px | `home::body` and footer list items |
| Active top navigation | 18px | 500 | 60px | `home::[data-omd-capture="1"]` |
| Banner action | 16px | 400 | 40px | `surface-2::[data-omd-capture="10"]` |
| Search input | 14px | 400 | 22px | `surface-2::[data-omd-capture="7"]` |

Do not render Inter, an Ant Design default stack, or a declared AlipayNumber face as though it were an observed proprietary Alipay product font.

## 4. Component Stylings

### Developer action

**Web/mobile-app banner action — observed default**
- Background: #1890FF
- Text: #FFFFFF
- Border: none
- Radius: 2px
- Padding: 0.01px 15px 4px
- Font: 16px / 400 / system stack
- Use: `surface-2::[data-omd-capture="10"]`, class `ant-btn ant-btn-primary bannerBtn___ON0Mn`; 110px × 40px in the supplied desktop capture. No hover, pressed, or disabled state was captured.

### Search input

**Open Platform search — observed specimen**
- Text: #999999
- Radius: 2px
- Padding: 4px 8px 4px 11px
- Font: 14px / 400 / system stack
- Focus: Collector classifies this specimen as focus; its raw captured values remain transparent background, 0px border width, and no shadow. There is no interaction snapshot, so no focus-ring token is inferred.
- Use: `surface-2::[data-omd-capture="7"]`, class `ant-input alipay-open-search-header-input`; 199px × 30px in the supplied desktop capture.

### Developer tool card

**Tool content card — observed default**
- Background: #FFFFFF
- Radius: 8px
- Padding: 22px 10px
- Font: 14px / 400 / system stack
- Use: `surface-3::div`, class `contentCard___nkyvg`; six occurrences, 308px × 225px in the supplied desktop capture.

### Navigation and footer text

**Top navigation item — observed default**
- Text: #333333
- Font: 14px / 400 / system stack
- Use: `home::li`, class `menuItem currentMenu`; 61px rendered height. It is a list item, not evidence of a tab component.

**Footer link row — observed default**
- Text: #000000
- Padding: 14px 0px 0px
- Font: 14px / 400 / system stack
- Use: `home::li`, class `alipay-open-footer-li`; observed across all three surfaces.

No modal, table, payment form, merchant dashboard, consumer-wallet control, status badge, dropdown, toast, hover, pressed, disabled, error, or responsive variant is specified: the supplied developer-platform capture has no selector/state provenance for one.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://open.alipay.com/?mobile=2; https://open.alipay.com/module/webApp; https://open.alipay.com/tool; https://www.antgroup.com/en/home; https://ant.design/docs/spec/introduce/; https://ant.design/docs/spec/values/; https://ant.design/docs/spec/font-cn/; https://github.com/ant-design/ant-design/blob/master/LICENSE
**Tier 2 sources:** https://getdesign.md/alipay (attempted via built-in web; no indexed Alipay record returned); https://styles.refero.design/?q=alipay (attempted via built-in web; no Alipay style record returned)
**Conflicts unresolved:** none

The observed Alipay Open Platform action is `#1890FF`; the prior reference's Ant Design v5 defaults, generic payments components, and unobserved state variants have not been carried forward as live Alipay product claims. Measured button and input defaults remain in §4 as raw surface evidence, but are absent from machine components because no interaction state was captured.

## 5. Layout Principles

The supplied capture is desktop-only at 1440×900. Its verified layout evidence is limited to the 60px top navigation line, a 199px × 30px search input, the 110px × 40px banner action, and 308px-wide developer-tool cards. It does not establish consumer-wallet breakpoints, a merchant-console sider, table grids, payment-dialog layout, or a mobile bottom action bar.

## 6. Depth & Elevation

The observed banner action has `0 2px 0 rgba(0,0,0,0.043)` shadow. The observed tool card has no shadow. No overlay, popover, menu, modal, drawer, or elevation scale was captured, so none is inferred.

## 7. Do's and Don'ts

### Do

- Use `#1890FF` only for the recorded Open Platform banner-action specimen.
- Retain the system-stack classification unless a visible computed family and loaded/source evidence establish something more specific.
- Keep the 2px search/action and 8px tool-card geometries tied to their recorded developer-platform surfaces.
- Use Ant Design's principles and license as design-system context, not as a blanket Alipay consumer-product specification.

### Don't

- Substitute Ant Design's current `#1677FF` for the observed Open Platform action.
- Promote AlipayNumber, KaTeX, or icon-font declarations into a visible UI family.
- Recreate payment flows, tables, status tags, dialogs, or interaction variants from generic Ant Design defaults.
- Treat marketing/corporate history or documentation chrome as a live consumer-wallet token source.

## 8. Responsive Behavior

No responsive capture was supplied. The 1440px desktop observations above must not be generalized to mobile, native-app, or merchant-console behavior.

## 9. Agent Prompt Guide

Use this reference narrowly: “Create an Alipay Open Platform developer banner action observed at 110×40px: `#1890FF`, white 16px system text, 2px radius, padding `0.01px 15px 4px`; do not invent hover or pressed states.” For the developer tools page, use a white 8px-radius content card with `22px 10px` padding and 14px system text. Do not use this capture to generate a consumer payment confirmation, wallet dashboard, status badge, or Ant Design's generic component catalog.

## 10. Voice & Tone

The supplied Open Platform pages are developer-oriented: their official web/mobile-app description emphasizes payment, marketing, data, APIs, SDKs, configuration, review, and release. This supports a direct, task-oriented tone for developer documentation; it does not establish transactional consumer copy. Ant Design's official value of certainty supports clear outcomes and restrained wording in its own system guidance.

| Context | Supported direction |
|---|---|
| Developer setup | Name the capability, prerequisite, and next task plainly. |
| API/tool documentation | Use precise terms and preserve technical labels. |
| Consumer payment copy | Unresolved in this capture; do not manufacture a house voice. |

## 11. Brand Narrative

Ant Group says Alipay was officially established in 2004 after an escrow service was introduced on Taobao, with the purpose of creating trust between online sellers and buyers. It now describes Alipay as having developed from a payment tool into a one-stop digital daily-life platform and describes the group's work with consumers, small businesses, merchants, and global partners. The Open Platform is one of the public developer-facing expressions of that ecosystem, offering payment and marketing capabilities through APIs and tools.

Ant Design is related but distinct context. Its official introduction identifies Ant User-Experience Design Team and its enterprise-product focus; its values describe how a reusable system should reduce coordination cost and support work. Those public documents explain the lineage of the developer-platform chrome without proving that every Alipay surface uses an unmodified Ant Design theme.

## 12. Principles

1. **Trust through explicit capability boundaries.** Alipay's origin story is escrow trust; in this reference, that means do not overstate what an observed developer page proves. *UI implication:* keep native-wallet and payment-flow claims out until their own surface is observed.
2. **Certain, reusable work patterns.** Ant Design's published “Certain” value links components and patterns to lower coordination entropy. *UI implication:* use documented, surface-proven values consistently rather than inventing variants.
3. **System-font readability.** Both the observed Open Platform pages and Ant Design's font guidance favor a broad system stack. *UI implication:* preserve the actual stack classification; do not substitute a lookalike webfont.
4. **Semantic separation of domains.** Developer-platform UI, corporate context, and open-source design-system material each answer different questions. *UI implication:* a first-party narrative or license source cannot fill a missing computed component value.

## 13. Personas

These are stakeholder groups named or implied by first-party sources, not fictional user profiles.

**Developers integrating web or mobile applications.** The Open Platform's web/mobile-app page addresses developers using SDKs, tools, APIs, keys, gateways, review, and release steps. Their evidence is the developer-platform surface, not the consumer wallet.

**Businesses and service providers.** Ant Group describes its partner ecosystem as supporting consumers and small businesses, while the platform offers payment, marketing, and data capabilities. No individual workflow or screen preference is inferred beyond that public role.

**Consumers.** Ant Group describes Alipay as a digital daily-life platform for consumers. No consumer UI component, typography, or microcopy has been captured in this update.

## 14. States

Only one state label is present in the collector output: the Open Platform search specimen is marked `focus`, with the raw values recorded in §4. There are no interaction snapshots and no observed hover, pressed, disabled, error, loading, success, toast, dialog, or payment-processing states. Those states remain unresolved rather than being imported from Ant Design examples.

## 15. Motion & Easing

No motion, duration, easing curve, or reduced-motion behavior was present in the supplied raw evidence. Ant Design's published motion configuration is a design-system resource, not evidence for this Open Platform surface, so no Alipay motion token is specified.
