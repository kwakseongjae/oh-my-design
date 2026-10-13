---
name: トヨタ
colors:
  primary: '#034f6d'
  foreground: '#212121'
  canvas: '#ffffff'
  on-dark: '#ffffff'
typography:
  display:
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.3
    use: Observed H1 on the production-sales route.
  section-heading:
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.5
    use: Observed H2 on company-profile and Toyota Production System routes.
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    use: Observed body text across the three supplied public Toyota Global routes.
  nav:
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.6
    use: Observed global navigation list-row text.
rounded:
  none: 0px
spacing:
  space-8: 8
  space-15: 15
  space-16: 16
  space-24: 24
  space-25: 25
components:
  global-nav-list-item:
    type: listItem
    textColor: '#212121'
    padding: 25px 15px
    rounded: 0px
    height: 80px
    states: Default snapshot only; interaction count 0 and no interactive state was observed.
    use: Observed global navigation list row at home::li.nav_text.header_accordion_sp.header_mega_menu_pc_trigger.
fonts:
  roles:
    ui: toyotatext_rg
---

# Design System Inspiration of トヨタ

## Overview

### Visual Theme & Atmosphere

Toyota is an automotive and mobility company whose public Global site brings corporate history, production knowledge, vehicle stories, and current mobility work into one information-dense editorial surface. The captured pages are distinguished less by a promotional color field than by calm white space, dark charcoal reading text, deep blue links, and a compact, bold navigation rhythm set in ToyotaText. That practical restraint accords with Toyota’s long-running manufacturing language: making ever-better products by eliminating waste and improving work for people. Its current corporate direction also frames Toyota as shifting toward a mobility company while continuing to make cars. The result is a public-facing expression that is documentary and serviceable rather than a claim about an in-vehicle, authenticated, regional-dealer, or consumer-transaction interface.

**Key characteristics:**

- Dark `#212121` prose and heading foreground across the supplied routes
- Deep `#034f6d` link treatment on the public Global home and company pages
- Loaded `toyotatext_rg` on visible Toyota Global content
- 0px-radius, 80px high desktop global-navigation list rows
- No promoted consent-banner, hover, focus, pressed, disabled, error, motion, or responsive system

### Primary tasks

- Trace the company's history back to its 1933 origins
- Learn how the production system aims to eliminate waste
- Find how the company frames its shift toward mobility
- Read vehicle stories published on the global site

### Brand Narrative

Toyota’s official history traces its automotive work to the Toyoda Automatic Loom Works Automotive Division in 1933 and records the establishment of Toyota Motor Co., Ltd. in 1937. The company’s public identity therefore joins an automotive business with a longer Toyoda manufacturing lineage rather than presenting mobility as a recent visual rebrand. [Toyota history](https://global.toyota/en/company/trajectory-of-toyota/history/%26gt)

That lineage is expressed through the Toyota Production System: Toyota describes it as a way of making that aims to eliminate waste, shorten lead times, and make work easier for people. Jidoka and Just-in-Time are its two stated pillars; Toyota links their continuing practice to daily incremental kaizen and ever-better cars. [Toyota Production System](https://global.toyota/en/company/vision-and-philosophy/production-system/?padid=ag478_from_header_menu)

Toyota’s current public evolution is framed as a shift toward a mobility company while retaining a commitment to beloved cars and future mobility society. This is corporate and product-direction context, not proof of a new UI system or an in-vehicle interaction model. [Toyota mobility](https://global.toyota/en/mobility/?padid=ag478_from_header_menu)

### Principles

1. **Contribute to the overall good through disciplined work.** *UI implication:* make the task, outcome, and relevant evidence legible before adding decorative complexity. Source: Toyota Philosophy and the Toyoda Principles.
2. **Improve continuously with the people doing the work.** *UI implication:* expose a clear next action and preserve room for correction; do not hide a constraint behind optimistic marketing language. Source: Toyota Production System’s daily kaizen framing.
3. **Provide what is needed, when it is needed.** *UI implication:* favour timely, context-specific information over generic dashboard density. Source: TPS Just-in-Time principle.
4. **Create mobility for people and society.** *UI implication:* describe a public mobility benefit in concrete terms while avoiding claims about unverified vehicle or account flows. Source: Toyota Philosophy and Mobility pages.

### Personas

The following are source-backed stakeholder groups, not fictional customers or demographic personas.

- **Public Toyota Global information reader:** uses the captured company, production, and philosophy routes to understand Toyota’s corporate information and stated practices.
- **Toyota customer or prospective customer:** Toyota’s Global Vision identifies customers as a group whose expectations and mobility needs the company aims to address; this does not specify an account or purchase flow.
- **Front-line Toyota worker:** TPS explicitly frames work as something to make easier and less burdensome, and connects daily improvement to people who put the system into practice.
- **Business partner or community stakeholder:** Toyota’s public company overview says it seeks to earn stakeholder trust and contribute to a prosperous society; this is a stakeholder context, not a UI persona specification.

## Colors

### Observed Toyota Global public-surface values

- **Deep blue link** (`#034f6d`): observed repeatedly on Global-home and company-page link content, including `.grid_title` links.
- **Foreground** (`#212121`): observed on the page body, company headings, body text, and global-navigation rows.
- **Canvas** (`#ffffff`): observed on a Global-home content surface; this is a measured surface value, not a complete neutral scale.
- **On-dark content** (`#ffffff`): observed on Global-home dark-area headings and footer list rows.

No Toyota-red token, semantic success/error/warning token, hover treatment, focus ring, disabled color, or universal brand palette is claimed. Those values are absent because this packet does not establish their product-surface roles.

## Typography

### Evidence classes

- **Official product-use:** no separate first-party product announcement in this pass establishes a font application beyond the supplied public-web surfaces.
- **Live computed surface-use:** `toyotatext_rg` is loaded with high confidence and appears on 248 captured elements across body, headings, cards, list rows, text, and navigation roles on all three Toyota Global routes.
- **Official distributed brand asset:** the loaded family is backed by Toyota-hosted `toyotatext` EOT, WOFF2, WOFF, and TTF resources, including regular, bold, italic, and bold-italic files. This corroborates browser use; it does not itself grant downstream reuse.
- **Declared-only:** the packet reports no declared-only Toyota family with zero visible uses.
- **Unresolved:** no first-party font licence or permission for downstream project use was located in this pass. Do not replace `toyotatext_rg` with a system font while labelling it ToyotaText.

### Observed hierarchy

| Role | Size | Weight | Line height | Surface boundary |
|---|---:|---:|---:|---|
| Display heading | 36px | 700 | 46.8px | Production-sales route H1 |
| Section heading | 22px | 700 | 33px | Company-profile and TPS H2 |
| Body copy | 16px | 400 | 25.6px | All supplied public routes |
| Global navigation | 14px | 700 | 22.4px | Home global-navigation list rows |

## Layout

### Observed spacing

The packet recurrently records 8px, 15px, 16px, 24px, and 25px values. They are exposed as observations rather than a declared Toyota spacing scale: 25px is the vertical inset of the accepted 80px global-navigation row, 15px its horizontal inset, 16px is the visible body size and recurring page value, and 24px is present in content and consent-layout records. No container, grid, breakpoint, or mobile rule is established.

### Shape boundary

The accepted Toyota global-navigation list row has a measured 0px radius. This does not establish a square-corner rule for all Toyota surfaces.

### Responsive Behavior

The supplied capture is 1440×900 only. It does not establish breakpoints, navigation collapse, touch targets, or mobile spacing; those rules are intentionally absent.

## Elevation & Depth

No reusable Toyota Global card, panel, or modal elevation token is established. The accepted navigation row has `box-shadow: none`; cookie-consent dialog shadows are third-party chrome and are excluded.

## Motion & Easing

No Toyota Global duration, easing, animation, or reduced-motion rule was captured or located in the official sources reviewed for this reference. Motion tokens are intentionally omitted.

## Components

### Global navigation list items

**Desktop global-nav row — observed default**
- Text: #212121
- Radius: 0px
- Padding: 25px 15px
- Font: 14px / 700 / toyotatext_rg
- Use: `home::li.nav_text.header_accordion_sp.header_mega_menu_pc_trigger`; 80px rendered height. This is a list row, not a button token. Default snapshot only; the packet reports zero interaction snapshots.

Cookiebot dialog, button, slider, and toggle records are third-party consent chrome and are excluded. A `picks_tile_link` card record has no measured card container geometry, and the low-confidence company-page button has a 0px font-size capture; neither is promoted. Inputs, badges, tabs, toast, dialog, avatar, and interactive component states are absent at their individual unresolved boundaries.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://global.toyota/en/ · https://global.toyota/en/company/profile/production-sales-figures/?padid=ag478_from_header_menu · https://global.toyota/en/company/vision-and-philosophy/production-system/?padid=ag478_from_header_menu
**Tier 2 sources:** https://getdesign.md/toyota (required attempt returned an internal error; no usable record) · https://styles.refero.design/?q=toyota (required query attempt returned an internal error; no usable record)
**Conflicts unresolved:** none

### States

No Toyota product state treatment is asserted. The supplied collector reports zero observed states, zero interaction kinds, and zero interaction snapshots. Empty, loading, error, success, skeleton, and disabled treatments require a future selector-level Toyota public-surface capture.

## Do's and Don'ts

### Do

- Use `#034f6d` only for the observed public Global link role, rather than treating it as a complete corporate palette.
- Preserve the documented 80px, 0px-radius global-navigation list-row geometry where the same public-navigation pattern is intended.
- Keep `toyotatext_rg` metadata attached to Toyota Global web evidence and use it only when it is lawfully available and loadable.
- Keep company-information typography distinct from unverified vehicle, dealer, account, and in-car interfaces.

### Don't

- Don't infer Toyota-red, a semantic color system, or a brand-wide canvas from logo knowledge or adjacent marketing surfaces.
- Don't reclassify Cookiebot consent controls as Toyota product components.
- Don't claim hover, focus, pressed, disabled, menu-open, error, or responsive behavior from a packet with zero interaction observations.
- Don't label a fallback system font as `toyotatext_rg`.

## Voice & Tone

Toyota’s first-party public language is purposeful, practical, and human-centred: it connects mobility with customer benefit, describes improvement as continuous work, and frames technical systems in terms of people and outcomes. Use clear, serviceable language that explains what happens next without borrowing unobserved in-product error or transactional patterns.

| Context | Source-backed direction |
|---------|-------------------------|
| Product and mobility | Make the customer benefit and the next concrete action clear; Toyota’s Global Vision centres mobility, quality, innovation, and responsibility. |
| Operational explanation | Explain the purpose before the mechanism; TPS describes quality and waste reduction in terms of work made easier for people. |
| Future-facing information | Treat mobility-company transformation as an ongoing direction, not as permission to invent a new product voice. |

Illustrative, source-backed-style samples—not verbatim Toyota copy:

- “See how this work supports safer, more useful mobility.”
- “Make the next step clear, then improve it with the people doing the work.”
- “Explain the benefit, the constraint, and the action without theatrical language.”

## Agent Prompt Guide

Use this reference as constrained inspiration for Toyota Global public-information pages, not as a vehicle HMI, a dealer experience, an authenticated owner account, or a manufacturing-system specification.

- “Create a Toyota Global-style company-information heading: `toyotatext_rg` where licensed and loadable, 36px/700/1.3 on the observed profile route, with `#212121` foreground.”
- “Create a source-scoped global navigation list row: `#212121`, 14px/700 `toyotatext_rg`, 25px 15px padding, 0px radius, and 80px observed height.”
- “Use deep-blue `#034f6d` for observed informational links; do not invent a red primary action or interaction states.”
