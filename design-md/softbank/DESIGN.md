---
id: softbank
name: ソフトバンク
country: JP
category: consumer-tech
homepage: "https://www.softbank.jp/"
primary_color: "#333333"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=softbank.jp&sz=128"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: consumer-marketing, url: "https://www.softbank.jp/", inspected: "2026-07-13" }
    - { id: enterprise-ai, kind: enterprise-marketing, url: "https://www.softbank.jp/biz/about/ai/", inspected: "2026-07-13" }
    - { id: corporate-security, kind: corporate-governance, url: "https://www.softbank.jp/corp/aboutus/governance/security/", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.softbank.jp/", captured: "2026-07-13" }
    - { id: enterprise-ai-live, kind: product-surface, url: "https://www.softbank.jp/biz/about/ai/", captured: "2026-07-13" }
    - { id: corporate-security-live, kind: product-surface, url: "https://www.softbank.jp/corp/aboutus/governance/security/", captured: "2026-07-13" }
    - { id: company-history, kind: official-doc, url: "https://www.softbank.jp/en/corp/aboutus/profile/history/", captured: "2026-07-13" }
    - { id: group-identity, kind: official-doc, url: "https://group.softbank/en/philosophy/identity", captured: "2026-07-13" }
    - { id: management-strategy, kind: official-doc, url: "https://www.softbank.jp/en/corp/ir/policy/strategy/", captured: "2026-07-13" }
    - { id: trademark-policy, kind: official-doc, url: "https://www.softbank.jp/corp/aboutus/governance/intellectual-property/trademark/", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.foreground": &all-surfaces { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.heading": &enterprise { surface_id: enterprise-ai, source_id: enterprise-ai-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.canvas": *all-surfaces
    "tokens.colors.hairline": &corporate { surface_id: corporate-security, source_id: corporate-security-live, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.body.size": *corporate
    "tokens.typography.body.weight": *corporate
    "tokens.typography.body.lineHeight": *corporate
    "tokens.typography.body.use": *corporate
    "tokens.typography.heading.size": *enterprise
    "tokens.typography.heading.weight": *enterprise
    "tokens.typography.heading.lineHeight": *enterprise
    "tokens.typography.heading.use": *enterprise
    "tokens.spacing.xs": *corporate
    "tokens.spacing.sm": *all-surfaces
    "tokens.spacing.md": *all-surfaces
    "tokens.spacing.lg": *corporate
    "tokens.rounded.none": *all-surfaces
    "tokens.rounded.control": *enterprise
    "tokens.rounded.badge": *all-surfaces
    "tokens.rounded.pill": *all-surfaces
    "tokens.components.global-navigation-item.type": *enterprise
    "tokens.components.global-navigation-item.fg": *enterprise
    "tokens.components.global-navigation-item.border": *enterprise
    "tokens.components.global-navigation-item.radius": *enterprise
    "tokens.components.global-navigation-item.padding": *enterprise
    "tokens.components.global-navigation-item.font": *enterprise
    "tokens.components.global-navigation-item.use": *enterprise
tokens:
  source: live-extract
  extracted: "2026-07-13"
  note: "Only selector- and surface-backed values from the supplied SoftBank public surfaces are canonical. Consumer marketing, enterprise marketing, corporate governance, Group identity, trademark policy, and declared-only fonts remain separate evidence domains."
  colors:
    foreground: "#333333"
    heading: "#323232"
    canvas: "#ffffff"
    hairline: "#c1c1c2"
  typography:
    body: { size: 16, weight: 400, lineHeight: 1.5, use: "Corporate-security body samples; no named UI family is established" }
    heading: { size: 32, weight: 700, lineHeight: 1.35, use: "Enterprise-AI h2 samples only; no named UI family is established" }
  spacing: { xs: 8, sm: 10, md: 16, lg: 20 }
  rounded: { none: 0, control: 6, badge: 10, pill: 50 }
  components:
    global-navigation-item: { type: listItem, fg: "#333333", border: "0px #333333", radius: 0, padding: "0px", font: "14px/400/14px", use: "Static global-navigation li, selector surface-2::li, class sb-appshell-v1-header-nav_globalnav-item; 12 occurrences across enterprise and corporate surfaces" }
  components_harvested: true
---

# Design System Inspiration of ソフトバンク

## 1. Visual Theme & Atmosphere

SoftBank Corp. is the operating telecommunications company established in 1986, providing mobile communications, devices, fixed-line services, and internet access. Its official history traces a route through Japan Telecom, J-Phone, Vodafone K.K., and the 2006 change to the SoftBank brand; the 2015 merger of the mobile, broadband, telecom, and Y!mobile businesses produced the current SoftBank Corp. The current strategy describes a telecom foundation extended through “Activate AI for Society,” while the Group’s wider identity frames the Information Revolution as a route to happiness. On the three supplied public surfaces, that evolution resolves into a reserved information system: white fields, repeated charcoal text, thin neutral boundaries, and highly legible Japanese information hierarchy. This is evidence for public consumer, enterprise, and corporate pages—not a substitute for an authenticated SoftBank product UI.

**Key characteristics:**

- `#333333` is the repeated public foreground; `#ffffff` is the repeated public canvas.
- `#323232` appears on the enterprise AI route’s headings; `#c1c1c2` is a measured corporate utility-control border rather than a universal divider.
- The capture’s named Meiryo stack is unresolved; its computed sizes and weights are retained without pretending that a fallback is a SoftBank font.
- Square navigation list items dominate the high-confidence shared shell; 6px, 10px, and fully rounded geometry occur in local public components.
- Consumer marketing, enterprise marketing, corporate governance, Group identity, trademark policy, and declared-only font evidence are intentionally separate domains.

## 2. Color Palette & Roles

### Selector-backed public values

- **Foreground** (`#333333`): repeated text and border color across home, enterprise AI, and corporate security captures.
- **Enterprise heading** (`#323232`): observed enterprise-AI h2 color only; it is not a universal display-color claim.
- **Canvas** (`#ffffff`): repeated public background and on-dark text value across the supplied routes; this token refers only to the measured canvas role.
- **Utility hairline** (`#c1c1c2`): observed 1px border on the corporate English utility button; not promoted as the page-wide divider.

The packet includes route-local blue, red, and pale-red observations, but it does not establish them as a cross-surface SoftBank action, error, or status palette. No hover, focus, pressed, disabled, success, error, or inverse token is published.

## 3. Typography Rules

### Evidence classes

| Evidence class | Family and boundary |
|---|---|
| Official product-use | No first-party source located in this run assigns a named typeface to a SoftBank consumer or enterprise product UI. |
| Live computed surface-use | `Meiryo, "Hiragino Kaku Gothic ProN", "Hiragino Sans", system-ui, sans-serif` is repeatedly computed on the supplied public pages, but Meiryo has no matching loaded FontFace and is marked unresolved in the evidence packet. |
| Official brand asset | SoftBank Group’s identity page says the brand-name mark uses a Japanese Mincho typeface to convey timelessness. That is logo/identity context, not evidence that this public UI uses a named Mincho webfont. |
| License context | No official font licence or distributed webfont asset was established in this run. |
| Declared-only | `swiper-icons` is declared with no visible use. It is not a UI typography token. |

### Captured hierarchy

| Role | Size | Weight | Line height | Evidence boundary |
|---|---:|---:|---:|---|
| Corporate body | 16px | 400 | 24px | repeated corporate-security body samples; family unresolved |
| Enterprise h2 | 32px | 700 | 43.2px | enterprise-AI h2 samples only; family unresolved |
| Home h2 | 40px | 700 | 50px | raw home observation only; not promoted into the narrow canonical scale |
| Corporate hero h1 | 50px | 700 | 75px | raw corporate-security observation only; not promoted into the narrow canonical scale |

Do not render Meiryo, the Mincho logotype context, or `swiper-icons` as if it were a verified SoftBank UI family. The numeric hierarchy is useful computed evidence; the font-family claim remains unresolved and is omitted at that field boundary.

## 4. Component Stylings

### Shared public shell

**Global Navigation Item**
- Text: `#333333`
- Border: 0px `#333333`
- Radius: 0px
- Padding: 0px
- Font: 14px / 400 / 14px
- Use: Static `li` observation with class `sb-appshell-v1-header-nav_globalnav-item`, selector `surface-2::li`, 12 occurrences across enterprise-AI and corporate-security surfaces.

### Observed-state boundary

The supplied artifact reports `interactionCount: 0` and `observedStates: 0`. Although it contains measured anchors and buttons, it captures no hover, focus, pressed, disabled, selected, error, menu, dialog, or toast state. The canonical component is therefore a static `listItem`, not a button or an inferred interactive control.

### Scope boundary

The static global navigation item is the sole canonical component because it is selector-backed, high confidence, repeated across surfaces, and has a permitted component type. Carousel arrows, tag links, enterprise buttons, the corporate language control, and the search field remain raw component evidence only; no state-free interactive component is promoted.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.softbank.jp/ ; https://www.softbank.jp/biz/about/ai/ ; https://www.softbank.jp/corp/aboutus/governance/security/ ; https://www.softbank.jp/en/corp/aboutus/profile/history/ ; https://group.softbank/en/philosophy/identity ; https://www.softbank.jp/en/corp/ir/policy/strategy/ ; https://www.softbank.jp/corp/aboutus/governance/intellectual-property/trademark/
**Tier 2 sources:** https://getdesign.md/softbank (attempted; no SoftBank-specific record returned by available search); https://styles.refero.design/?q=softbank (attempted; no SoftBank-specific record returned by available search)
**Conflicts unresolved:** none

## 5. Layout Principles

The supplied routes support an information-shell pattern, not a complete product-grid claim. Repeated measured spacing values include 8px, 10px, 16px, and 20px; they are kept as a compact observed set, not presented as an exhaustive system scale. The shared navigation list item itself has 0px padding, while a distinct enterprise button has 13px 44px 11px 20px padding. Preserve such route-level differences rather than normalizing them into unobserved responsive rules.

## 6. Depth & Elevation

The canonical navigation item is flat: transparent background, 0px border, 0px radius, and no shadow. The packet does not establish a repeated shadow value or an elevation ladder, so no shadow token is published. Rounded local controls exist, but their geometric values do not imply depth.

## 7. Do's and Don'ts

### Do

- Use `#333333` text on the measured white public canvas when recreating the captured information-shell context.
- Keep the canonical navigation list item square, unfilled, and typographically modest at its observed 14px / 400 / 14px values.
- Preserve the distinction between the enterprise-AI heading treatment and the corporate-security body treatment.
- Treat the Group’s double-line mark and Mincho logotype statement as brand-identity context, not an interface font token.

### Don't

- Don't infer SoftBank mobile-app, account, checkout, device-management, or authenticated enterprise UI from the supplied public surfaces.
- Don't turn route-local blue, red, or status-panel observations into a general action or semantic palette.
- Don't substitute system-ui for the unresolved Meiryo family and label it as SoftBank typography.
- Don't invent hover, focus, pressed, disabled, selected, validation, dialog, toast, menu, or motion values from zero captured interactions.

## 8. Responsive Behavior

Only 1440×900 desktop captures were supplied. The packet provides no mobile viewport, breakpoint, collapsed navigation, touch target, or responsive reflow evidence, so those behaviours are omitted.

## 9. Agent Prompt Guide

For a SoftBank public information surface, use a white `#ffffff` canvas, `#333333` foreground, sparse `#323232` enterprise headings where that route is the reference, and a flat square global-navigation list item. Keep public consumer, enterprise, and corporate material scoped to the captured route; do not fabricate an account or product console. Use the official identity narrative for tone and logo interpretation only, keep the UI family unspecified, and do not add interaction or responsive states that the packet did not observe.

## 10. Voice & Tone

SoftBank’s official strategy combines a long-running Information Revolution philosophy with a current aim to activate AI across society. For public corporate and enterprise information, that supports a clear, future-oriented, and accountable register: state the infrastructure or social outcome, name the technology or service, then identify the practical consequence. This is narrative direction drawn from official strategy, not a measured interface-copy corpus.

| Context | Supported direction |
|---|---|
| Corporate progress | Pair a long-term ambition with a precise current initiative. |
| Enterprise technology | Name the operational or societal problem before the AI or network mechanism. |
| Public trust | Use straightforward explanations of responsibility, access, and governance. |

Illustrative, not source copy:

- “Connect the next step to the infrastructure behind it.”
- “Make the technology’s role clear before asking for action.”
- “Show how a network, service, or policy changes the everyday outcome.”

## 11. Brand Narrative

SoftBank Corp. began in 1986 as Railway Telecommunication Co., Ltd. Its official company history records the later succession of Japan Telecom, J-Phone, Vodafone K.K., and the October 2006 change to SoftBank Mobile and the SoftBank brand. In 2015, SoftBank Mobile, SoftBank BB, SoftBank Telecom, and Y!mobile were combined, and the company took the current SoftBank Corp. name.

That operating history sits inside a broader Group identity: the double-line logo is derived from the Kaientai flag and is described as an equals sign, answer, communication, and possibility. The identity source says the brand-name mark uses a Japanese Mincho typeface and silver as brand colour. Those facts describe the logo and corporate identity; they are not silently converted into public UI tokens.

The company’s current strategy says “Activate AI for Society” and frames the work as expanding technology’s social implementation alongside telecommunications. The official strategy states that the Group is guided by “Information Revolution — Happiness for everyone” and seeks to use technology to solve social issues. No invented executive quotation is used here.

## 12. Principles

1. **Make infrastructure legible.** SoftBank’s name and Group identity are rooted in a role as information-society infrastructure.
   *UI implication:* Explain the service and its operational role before adding product-style promotional complexity.
2. **Connect future ambition to a present use.** The current strategy emphasizes activating AI across society, while the captured surfaces remain information-led.
   *UI implication:* Pair aspirational headings with concise, factual supporting content.
3. **Keep the shared shell quiet.** Repeated public captures show neutral text, white space, and square navigation lists rather than a dense action system.
   *UI implication:* Let hierarchy, spacing, and crisp borders organize long-form public information.
4. **Respect distinct brand domains.** The Group’s logo and corporate identity, SoftBank Corp. public web surfaces, and uninspected product applications have different evidence.
   *UI implication:* Do not reuse a logo-font claim or a route-local color as a comprehensive product design token.

## 13. Personas

The official materials identify broad stakeholder groups, not research-backed user personas. These are bounded stakeholder archetypes, not fictional behavioural claims.

- **Consumer communications customer:** someone encountering SoftBank’s public consumer information for mobile, device, fixed-line, or internet services. The source establishes service scope, not a purchase journey.
- **Enterprise or public-sector technology decision-maker:** someone reading AI and network material to understand possible operational applications. No uninspected dashboard task or workflow is inferred.
- **Corporate stakeholder:** an investor, partner, regulator, or member of the public seeking company, strategy, governance, or security information. The supplied corporate route supports this informational context only.

## 14. States

The supplied evidence contains no captured interaction states. Empty, loading, error, success, skeleton, disabled, focus, pressed, selected, and validation treatments are therefore not published. This absence removes only unobserved states; it does not remove the measured default geometry of the canonical static navigation item.

## 15. Motion & Easing

No interaction expansion, animation duration, easing curve, or transition computed value was supplied. The three static desktop captures cannot establish a SoftBank motion system, so no timing or easing token is published.
