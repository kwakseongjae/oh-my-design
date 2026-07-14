---
id: sony
name: ソニー
country: JP
category: consumer-tech
homepage: "https://www.sony.com/"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=sony.com&sz=128"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: public-corporate-home, url: "https://www.sony.com/en/", inspected: "2026-07-13" }
    - { id: products, kind: public-products-catalog, url: "https://www.sony.com/en/SonyInfo/products/", inspected: "2026-07-13" }
    - { id: electronics, kind: public-products-catalog, url: "https://www.sony.com/en/SonyInfo/products/#electronics", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.sony.com/en/", captured: "2026-07-13" }
    - { id: products-live, kind: product-surface, url: "https://www.sony.com/en/SonyInfo/products/", captured: "2026-07-13" }
    - { id: electronics-live, kind: product-surface, url: "https://www.sony.com/en/SonyInfo/products/#electronics", captured: "2026-07-13" }
    - { id: sst-type-project, kind: official-doc, url: "https://www.sony.com/en/SonyInfo/design/stories/sst-font/", captured: "2026-07-13" }
    - { id: purpose-values, kind: official-doc, url: "https://www.sony.com/en/SonyInfo/CorporateInfo/purpose_and_values/", captured: "2026-07-13" }
    - { id: corporate-history, kind: official-doc, url: "https://www.sony.com/en/SonyInfo/CorporateInfo/History/", captured: "2026-07-13" }
    - { id: corporate-blog, kind: official-doc, url: "https://www.sony.com/en/SonyInfo/blog/2021/04/08/", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": { surface_id: home, source_id: home-live, method: live-inspect, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.colors.canvas": { surface_id: products, source_id: products-live, method: live-inspect, selector: "surface-2::h1", captured: "2026-07-13" }
    "tokens.colors.muted": { surface_id: products, source_id: products-live, method: live-inspect, selector: "surface-2::p.m-text-lead", captured: "2026-07-13" }
    "tokens.typography.family.ui": { surface_id: home, source_id: home-live, method: fontfaceset-and-computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.typography.family.display": { surface_id: products, source_id: products-live, method: fontfaceset-and-computed-style, selector: "surface-2::h1.m-h1", captured: "2026-07-13" }
    "tokens.typography.display.size": { surface_id: products, source_id: products-live, method: live-inspect, selector: "surface-2::h1.m-h1", captured: "2026-07-13" }
    "tokens.typography.display.weight": { surface_id: products, source_id: products-live, method: live-inspect, selector: "surface-2::h1.m-h1", captured: "2026-07-13" }
    "tokens.typography.display.lineHeight": { surface_id: products, source_id: products-live, method: live-inspect, selector: "surface-2::h1.m-h1", captured: "2026-07-13" }
    "tokens.typography.display.use": { surface_id: products, source_id: products-live, method: live-inspect, selector: "surface-2::h1.m-h1", captured: "2026-07-13" }
    "tokens.typography.body.size": { surface_id: products, source_id: products-live, method: live-inspect, selector: "surface-2::p.m-text-lead", captured: "2026-07-13" }
    "tokens.typography.body.weight": { surface_id: products, source_id: products-live, method: live-inspect, selector: "surface-2::p.m-text-lead", captured: "2026-07-13" }
    "tokens.typography.body.lineHeight": { surface_id: products, source_id: products-live, method: live-inspect, selector: "surface-2::p.m-text-lead", captured: "2026-07-13" }
    "tokens.typography.body.use": { surface_id: products, source_id: products-live, method: live-inspect, selector: "surface-2::p.m-text-lead", captured: "2026-07-13" }
    "tokens.spacing.header-block": { surface_id: home, source_id: home-live, method: live-inspect, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.spacing.header-inline": { surface_id: home, source_id: home-live, method: live-inspect, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.rounded.sharp": { surface_id: home, source_id: home-live, method: live-inspect, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.header-navigation-link.type": { surface_id: home, source_id: home-live, method: live-inspect, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.header-navigation-link.bg": { surface_id: home, source_id: home-live, method: live-inspect, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.header-navigation-link.fg": { surface_id: home, source_id: home-live, method: live-inspect, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.header-navigation-link.radius": { surface_id: home, source_id: home-live, method: live-inspect, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.header-navigation-link.padding": { surface_id: home, source_id: home-live, method: live-inspect, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.header-navigation-link.font": { surface_id: home, source_id: home-live, method: fontfaceset-and-computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.header-navigation-link.use": { surface_id: home, source_id: home-live, method: live-inspect, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
tokens:
  source: live-extract
  extracted: "2026-07-13"
  colors:
    primary: "#000000"
    canvas: "#ffffff"
    muted: "#656565"
  typography:
    family: { ui: "SST W20 Roman", display: "SST W20 Bold" }
    display: { size: 30, weight: 700, lineHeight: 42, use: "Public products-catalog page title" }
    body: { size: 16, weight: 400, lineHeight: 32, use: "Public products-catalog lead copy" }
  spacing: { header-block: 20, header-inline: 13 }
  rounded: { sharp: 0 }
  components:
    header-navigation-link: { type: listItem, bg: "#000000", fg: "#ffffff", radius: 0, padding: "20px 13px", font: "14px/400 SST W20 Roman", use: "Public corporate-home header navigation link; selector home::[data-omd-capture=\"1\"]" }
  components_harvested: true
---

# Design System Inspiration of ソニー

## 1. Visual Theme & Atmosphere

Sony Group is a Japanese creative-entertainment and technology company whose businesses span games and network services, music, pictures, electronics, imaging and sensing. Its public English corporate portal lets that breadth sit behind a notably restrained frame: black header bands, white content planes, quiet gray editorial copy, and the compact, sharp-cornered SST navigation treatment captured here. The identity has roots in a 1946 company founded to marry technological work with cultural contribution; Sony’s current Purpose is to fill the world with emotion through creativity and technology. The Group’s 2021 management transition sharpened the distinction between Sony Group Corporation and the Sony Corporation electronics business, while retaining a people-centered creative-entertainment identity. This reference documents the measured public portal and products-catalog grammar, not an authenticated consumer-device, PlayStation, entertainment-service, or commerce application. [History](https://www.sony.com/en/SonyInfo/CorporateInfo/History/) · [Purpose & Values](https://www.sony.com/en/SonyInfo/CorporateInfo/purpose_and_values/) · [Corporate blog](https://www.sony.com/en/SonyInfo/blog/2021/04/08/)

The supplied 2026-07-13 evidence covers the English corporate home and two public products-catalog URLs at 1440×900. All three carry the same header-link geometry; the products pages additionally provide the measured title and lead-copy hierarchy. They are public corporate/product-catalog domains, not evidence for logged-in product workflows or native-device UI.

**Key characteristics:**
- Black `#000000` header navigation links with white `#ffffff` labels and sharp corners.
- White `#ffffff` page planes with repeated `#656565` editorial text on the public products catalog.
- Loaded SST W20 Roman UI text and SST W20 Bold headings, both limited to the recorded public surfaces.
- 20px vertical and 13px horizontal padding on the observed header navigation link.

## 2. Color Palette & Roles

### Observed public portal and catalog colors

- **Header black** (`#000000`): observed as the `tmpl-headerNavItem_label` fill on all three captured public surfaces.
- **Canvas white** (`#ffffff`): observed behind the products-catalog title and lead content.
- **Editorial gray** (`#656565`): observed on the products-catalog lead and card text; retain as a local public-catalog text value rather than a universal semantic gray.

The collector also recorded blue `#0000ee` default-link rendering and isolated dialog/control colors. They are not promoted as Sony brand, action, or status tokens because the packet does not establish those roles on a matching Sony-owned component.

## 3. Typography Rules

### Evidence classes

**Official product-use and type context.** Sony Design describes SST as an original corporate typeface developed for consistent, distinctive, and legible experiences across products, services, advertising, stores, online, manuals, and product packaging. It says SST was planned for many languages and uses a mix of sharp geometry and readability; it also describes planned use in Xperia, BRAVIA, and PlayStation touchpoints. This is first-party product/use context, not a license to redistribute or substitute the font. [SST Type Project](https://www.sony.com/en/SonyInfo/design/stories/sst-font/)

**Live computed surface-use.** The supplied capture records `SST W20 Roman` as loaded/high with 725 visible uses across badge, body, button, card, dialog, heading, and list-item roles. `SST W20 Bold` is loaded/high with 56 visible uses. On the public products catalog, `m-h1` is 30px/700/42px SST W20 Bold and `m-text-lead` is 16px/400/32px SST W20 Roman. The public home’s repeated header label is 14px/400/14px SST W20 Roman.

**Official distributed brand asset / license boundary.** Sony’s SST project identifies SST as a Monotype trademark and explains its design and multilingual development. The reviewed first-party source does not grant a public transferable webfont or redistribution license. Keep that design history separate from runtime availability and do not render a substitute as SST.

**Declared-only.** FontAwesome, SST W20 Bold Italic, SST W20 Condensed, SST W20 Heavy, SST W20 Italic, SST W20 Light, SST W20 Medium, SST W20 Ultra Light, and the SST W55 faces appear only as declared font-face assets with zero visible uses in this packet. They are not typography tokens.

**System and unresolved.** `Arial` and `sans-serif` are fallback/system occurrences; `Times` and SST W20 Regular are unresolved computed families. None is a Sony substitute or a tokenized brand fact.

## 4. Component Stylings

### Public header navigation

**Dark header navigation link**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 0px
- Padding: 20px 13px
- Font: 14px / 400 / SST W20 Roman
- Use: Public corporate-home `a.tmpl-headerNavItem_label`; representative selector `home::[data-omd-capture="1"]`, repeated across all three captured surfaces.

### Public products catalog

**Catalog title typography**
- Background: `#ffffff`
- Text: `#333333`
- Radius: 0px
- Font: 30px / 700 / SST W20 Bold
- Use: Public products-catalog `h1.m-h1`; representative selector `surface-2::h1`.

**Catalog lead copy**
- Background: `#ffffff`
- Text: `#656565`
- Radius: 0px
- Font: 16px / 400 / SST W20 Roman
- Use: Public products-catalog `p.m-text-lead`; representative selector `surface-2::p`.

### Observed interaction boundary

The packet records one `dialog-open` interaction on the corporate home. Its target geometry and controls are not promoted into a Sony dialog token because the capture does not establish a selector-backed, Sony-owned default dialog treatment. No generic hover, focus, pressed, disabled, error, toast, tab, toggle, or input state is asserted.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.sony.com/en/, https://www.sony.com/en/SonyInfo/products/, https://www.sony.com/en/SonyInfo/products/#electronics, https://www.sony.com/en/SonyInfo/design/stories/sst-font/
**Tier 2 sources:** https://getdesign.md/sony and https://styles.refero.design/?q=sony were both attempted through built-in web retrieval; both returned an internal error, so neither supplied a value or an absence determination.
**Conflicts unresolved:** none

## 5. Layout Principles

The three supplied surfaces were captured at 1440×900. The repeated header label has 20px vertical and 13px horizontal padding, while the measured products title and lead establish a 30px/42px then 16px/32px public-catalog reading hierarchy. The packet does not establish a universal content grid, mobile breakpoint, checkout layout, or authenticated-product navigation model.

## 6. Depth & Elevation

The representative header link, catalog title, and lead-copy samples report `box-shadow: none`. The observed hierarchy comes from black/white contrast, image/content blocks, and typographic scale. No Sony-wide card, menu, modal, tooltip, or floating elevation scale is claimed.

## 7. Do's and Don'ts

### Do

- Keep the public-header link’s measured black/white polarity, sharp corners, and 20px × 13px padding together.
- Use SST W20 Roman and Bold only when the authorized family is available and only for the public-surface roles documented here.
- Preserve the observed public products-catalog hierarchy of 30px/700 title and 16px/400 lead copy where that same surface pattern is intended.
- Keep corporate portal, catalog, device, entertainment-service, and authenticated-product claims in their own evidence domains.

### Don't

- Do not render Arial, sans-serif, Times, or an unresolved SST W20 Regular result as though it were Sony SST.
- Do not turn the browser-default blue link or isolated dialog color into a Sony action token.
- Do not infer a responsive grid, generic card treatment, form control, or consumer-product UI from this public portal capture.
- Do not promote declared-only SST variants or FontAwesome as visible Sony UI typography.

## 8. Responsive Behavior

No alternate viewport was supplied. This reference has no Sony-specific mobile navigation, breakpoint, grid-collapse, or touch-target claim.

## 9. Agent Prompt Guide

### Quick reference

- Public header navigation link: `#000000` background, `#ffffff` text, 0px radius, 20px 13px padding, SST W20 Roman 14px/400.
- Public products-catalog title: SST W20 Bold 30px/700/42px on white.
- Public products-catalog lead: SST W20 Roman 16px/400/32px with `#656565` text on white.

### Boundary-aware prompt

"Apply Sony’s captured English public-portal header link only where that exact public-navigation context is wanted: black fill, white 14px SST W20 Roman label, square corners, and 20px 13px padding. Keep products-catalog headings at the separately observed SST W20 Bold 30px/700/42px hierarchy. Do not invent a Sony form, card, app, or system-font substitute."

## 10. Voice & Tone

Sony’s first-party corporate language is purpose-led, imaginative, and precise: it pairs creativity and technology with emotional outcomes, while its SST story explains usability through concrete, legibility-focused reasoning.

| Do | Don't |
|---|---|
| Lead with the human or creative outcome, then name the technology. | Present technology as an end in itself. |
| Use direct, calm language for product and corporate information. | Inflate ordinary catalog information with unverified superlatives. |
| Make inclusiveness and legibility concrete when describing experience. | Treat corporate values as proof of a specific UI token. |

- Purpose sample — “Fill the world with emotion” is Sony’s official Purpose wording. [Purpose & Values](https://www.sony.com/en/SonyInfo/CorporateInfo/purpose_and_values/)
- Product sample — describe SST as sharp, readable, and designed for many languages only in the scope Sony Design gives it. [SST Type Project](https://www.sony.com/en/SonyInfo/design/stories/sst-font/)
- Corporate sample — use the current identity of a creative entertainment company with a technology foundation when describing the Group, not as an interface specification. [Corporate blog](https://www.sony.com/en/SonyInfo/blog/2021/04/08/)

## 11. Brand Narrative

Sony began in 1946 as Tokyo Tsushin Kogyo, with a founding prospectus that linked a free and open-minded technical workplace to contribution to Japanese culture. The Sony name arrived in 1958; the official history positions a willingness to do what had not been done before as a continuing part of the Group story. [History](https://www.sony.com/en/SonyInfo/CorporateInfo/History/)

Its current Purpose is to fill the world with emotion through creativity and technology. Sony’s stated values—Dreams & Curiosity, Diversity, Integrity & Sincerity, and Sustainability—give that broad portfolio a common direction without collapsing its different businesses into one product surface. [Purpose & Values](https://www.sony.com/en/SonyInfo/CorporateInfo/purpose_and_values/)

At the 2021 Group-management transition, Sony described its identity as a creative-entertainment company with a solid foundation of technology and its corporate direction as getting closer to people. Kenichiro Yoshida’s attributed direction, “Pioneer the future with dreams and curiosity,” is an official leadership message, not a component rule. [Corporate blog](https://www.sony.com/en/SonyInfo/blog/2021/04/08/) · [Careers message](https://www.sony.com/en/SonyInfo/Careers/message/index.html)

## 12. Principles

1. **Connect creativity with technical clarity.** Sony frames both as necessary to create emotion. *UI implication:* explain what a feature enables before detailing its mechanism.
2. **Design for legibility across touchpoints.** The SST project emphasizes readability, small-size recognition, and multilingual consistency. *UI implication:* keep the documented SST roles distinct; never mask a fallback as SST.
3. **Get closer to people without collapsing evidence domains.** Sony’s corporate direction is people-centered across diverse businesses. *UI implication:* do not use a corporate portal’s header geometry as proof of a native device or service pattern.
4. **Leave unmeasured patterns absent.** The packet supports a narrow set of public portal facts. *UI implication:* avoid filling in cards, form states, and responsive rules from generic conventions.

## 13. Personas

These are evidence-bounded stakeholder roles, not demographic or behavioral research personas.

- **Creators and creative partners** — Sony’s corporate narrative describes creators as central to its creative-entertainment identity. Their needs and workflows are not measured by this public portal packet.
- **People experiencing Sony content and products** — Sony’s Purpose is directed at emotional experiences for people; this does not establish a specific consumer journey or device interface.
- **Corporate and product-information visitors** — the captured users of the public portal/catalog can read company and product information through the observed header and editorial hierarchy; no further intent is inferred.

## 14. States

| State | Evidence boundary |
|---|---|
| Dialog open | One corporate-home interaction records `dialog-open`; no selector-backed Sony dialog geometry or component token is asserted. |

No empty, loading, error, success, skeleton, disabled, hover, focus, pressed, selected, or validation state values are present in the canonical tokens because the supplied packet does not establish them for a matching Sony-owned component.

## 15. Motion & Easing

The packet contains no measured duration, easing, transition, or animation property suitable for a Sony motion token. Leave motion values absent rather than deriving them from the public portal or a generic system.
