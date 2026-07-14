---
id: toss-securities
name: Toss Securities
display_name_kr: Toss Securities (토스증권)
country: KR
category: fintech
homepage: "https://tossinvest.com"
primary_color: "#3182f6"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=tossinvest.com&sz=256"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: public-wts, kind: public-web-trading, url: "https://www.tossinvest.com/?focusedProductCode=A000660", inspected: "2026-07-13" }
    - { id: corporate-info, kind: corporate-marketing, url: "https://home.tossinvest.com/en/corporate-info", inspected: "2026-07-13" }
    - { id: investment-marketing, kind: product-marketing, url: "https://home.tossinvest.com/en/investment-products", inspected: "2026-07-13" }
  sources:
    - { id: wts-live, kind: product-surface, url: "https://www.tossinvest.com/?focusedProductCode=A000660", captured: "2026-07-13" }
    - { id: corporate-live, kind: official-doc, url: "https://home.tossinvest.com/en/corporate-info", captured: "2026-07-13" }
    - { id: investment-live, kind: official-doc, url: "https://home.tossinvest.com/en/investment-products", captured: "2026-07-13" }
    - { id: tps-design, kind: brand-asset, url: "https://toss.im/simplicity-21/sessions/3-3", captured: "2026-07-13" }
    - { id: tossface-repo, kind: brand-asset, url: "https://github.com/toss/tossface", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &wts { surface_id: public-wts, source_id: wts-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.canvas": *wts
    "tokens.colors.foreground": *wts
    "tokens.colors.body": *wts
    "tokens.colors.on-primary": *wts
    "tokens.colors.dialog-canvas": *wts
    "tokens.typography.family.sans": &font { surface_id: public-wts, source_id: wts-live, method: computed-style-and-fontfaceset-source, captured: "2026-07-13" }
    "tokens.typography.compact.size": *wts
    "tokens.typography.compact.weight": *wts
    "tokens.typography.compact.lineHeight": *wts
    "tokens.typography.compact.use": *wts
    "tokens.typography.body.size": *wts
    "tokens.typography.body.weight": *wts
    "tokens.typography.body.lineHeight": *wts
    "tokens.typography.body.use": *wts
    "tokens.typography.marketing-heading.size": &marketing { surface_id: investment-marketing, source_id: investment-live, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.marketing-heading.weight": *marketing
    "tokens.typography.marketing-heading.lineHeight": *marketing
    "tokens.typography.marketing-heading.use": *marketing
    "tokens.spacing.xs": *wts
    "tokens.spacing.sm": *wts
    "tokens.spacing.md": *wts
    "tokens.spacing.lg": *marketing
    "tokens.spacing.xl": *wts
    "tokens.rounded.compact-control": *wts
    "tokens.rounded.primary": *wts
    "tokens.rounded.menu": *wts
    "tokens.rounded.dialog": *wts
    "tokens.rounded.marketing-pill": *marketing
    "tokens.shadow.menu": *wts
    "tokens.shadow.dialog": *wts
    "tokens.components.wts-primary-entry.type": *wts
    "tokens.components.wts-primary-entry.bg": *wts
    "tokens.components.wts-primary-entry.fg": *wts
    "tokens.components.wts-primary-entry.radius": *wts
    "tokens.components.wts-primary-entry.padding": *wts
    "tokens.components.wts-primary-entry.height": *wts
    "tokens.components.wts-primary-entry.font": *wts
    "tokens.components.wts-primary-entry.states": *wts
    "tokens.components.wts-primary-entry.use": *wts
    "tokens.components.investment-primary.type": *marketing
    "tokens.components.investment-primary.bg": *marketing
    "tokens.components.investment-primary.fg": *marketing
    "tokens.components.investment-primary.radius": *marketing
    "tokens.components.investment-primary.padding": *marketing
    "tokens.components.investment-primary.height": *marketing
    "tokens.components.investment-primary.font": *marketing
    "tokens.components.investment-primary.states": *marketing
    "tokens.components.investment-primary.use": *marketing
    "tokens.components.wts-selection-dialog.type": *wts
    "tokens.components.wts-selection-dialog.bg": *wts
    "tokens.components.wts-selection-dialog.fg": *wts
    "tokens.components.wts-selection-dialog.radius": *wts
    "tokens.components.wts-selection-dialog.size": *wts
    "tokens.components.wts-selection-dialog.font": *wts
    "tokens.components.wts-selection-dialog.states": *wts
    "tokens.components.wts-selection-dialog.use": *wts
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Only the supplied public WTS and corporate/marketing capture is canonical here. Authenticated or native trading UI, documentation chrome, and declared-only fonts are separate or unresolved evidence domains."
  colors:
    primary: "#3182f6"
    canvas: "#ffffff"
    foreground: "#1a1f29"
    body: "#4e5968"
    on-primary: "#ffffff"
    dialog-canvas: "#fbfcfd"
  typography:
    family: { sans: "Toss Product Sans" }
    compact: { size: 13, weight: 600, lineHeight: "20px", use: "Public WTS compact menu-trigger text" }
    body: { size: 16, weight: 400, lineHeight: "23.2px", use: "Public WTS body, tab, menu, and dialog copy" }
    marketing-heading: { size: 18, weight: 700, lineHeight: "28.8px", use: "Investment-product marketing H1" }
  spacing: { xs: 4, sm: 8, md: 12, lg: 14, xl: 16 }
  rounded: { compact-control: 7, primary: 8, menu: 12, dialog: 16, marketing-pill: 100 }
  shadow:
    menu: "0 16px 24px -2px rgba(0,0,0,0.06), 0 8px 56px rgba(0,0,0,0.1)"
    dialog: "0 12px 28px -4px rgba(0,0,0,0.12), 0 8px 56px -4px rgba(0,0,0,0.1)"
  components_harvested: true
  components:
    wts-primary-entry: { type: button, bg: "#3182f6", fg: "#ffffff", radius: "8px", padding: "6px 12px", height: "32px", font: "14px / 600 / 16px", states: "default, focus, and pressed observed; colors and geometry remained the same in the retained samples", use: "Public WTS compact primary link-action" }
    investment-primary: { type: button, bg: "#3182f6", fg: "#ffffff", radius: "100px", padding: "11px 14px", height: "40px", font: "15px / 600 / 18px", states: "default, focus, hover, and pressed observed; no distinct color change retained", use: "Investment-products marketing primary action" }
    wts-selection-dialog: { type: dialog, bg: "#fbfcfd", fg: "#4e5968", radius: "16px", size: "640px x 600px", font: "16px / 400 / 23.2px", states: "dialog-open observed", use: "Public WTS selection dialog container" }
---

# Design System Inspiration of Toss Securities (토스증권)

## 1. Visual Theme & Atmosphere

Toss Securities positions itself as an investment platform for both beginners and experienced investors: the company says its mission is to empower everyone with investing, combining access to global markets, investment information, social participation, and expanding channels such as WTS. Its public web language turns that broad promise into a familiar Toss hierarchy—white canvas, dense dark-neutral reading text, a precise blue action color, and a single Korean-first product face—rather than turning the marketing site into a simulation of a trading terminal. The result is an inviting, information-led public entry point for a regulated investment product.

The supplied 2026-07-13 capture establishes three separate public domains. `www.tossinvest.com` is a public WTS surface with controls, tabs, a menu, and a dialog; `home.tossinvest.com/en/corporate-info` is corporate context; and `home.tossinvest.com/en/investment-products` is a marketing explanation of stocks, ETFs, options, and bonds. They share `#3182f6`, `#ffffff`, `#1a1f29`, `#4e5968`, and Toss Product Sans, but their component geometry is not automatically interchangeable. The compact 32px WTS action and the 40px marketing pill are recorded separately.

No authenticated account, native app, order-entry flow, or documentation UI was captured in this packet. The former dark-canvas, red/blue market-semantic, token-tree, and two-radius claims are therefore removed rather than carried forward from a legacy snapshot.

**Key Characteristics:**

- Light public-web canvas: `#ffffff`, `#1a1f29`, and `#4e5968`
- Shared Toss blue `#3182f6` for observed primary actions and links
- Loaded Toss Product Sans on the public WTS and investment-marketing surfaces
- Compact WTS controls at 7–8px corners; expanded menu and dialog containers at 12px and 16px
- A 100px-radius marketing pill is a marketing-specific component, not a universal product radius
- Public WTS menu and dialog were interaction-expanded; focus, hover, and pressed states are preserved only where observed

## 2. Color Palette & Roles

- **Primary action** (`#3182f6`): observed on the public WTS compact primary action and the investment-products marketing CTA.
- **Canvas** (`#ffffff`): observed public WTS and marketing page canvas.
- **Foreground** (`#1a1f29`): observed compact WTS foreground.
- **Supporting text** (`#4e5968`): observed WTS menu, dialog, and cross-surface supporting text.
- **On primary** (`#ffffff`): observed text on `#3182f6` actions.
- **Dialog canvas** (`#fbfcfd`): observed public WTS dialog container.

The packet does not establish a public positive/negative market-color system, dark trading canvas, error color, success color, or hover palette. Those values are intentionally absent rather than inferred from the Toss parent brand or a previous snapshot.

## 3. Typography Rules

### Font evidence boundary

| Evidence class | Resolution |
|---|---|
| Official product-use | Toss’s first-party design conference describes Toss Product Sans as a typeface developed for financial numbers and symbols across mobile, desktop, and offline contexts. |
| Live computed surface-use | `Toss Product Sans` is the computed first family on the supplied public WTS and investment-marketing capture: loaded/high, 419 visible uses, backed by matching FontFaceSet records and dated `static.toss.im/tps/20260223/` sources. It is the canonical public-web UI family. |
| Official distributed brand asset | Tossface is a separate Toss-designed emoji font distributed through the official `toss/tossface` repository in TTF, OTF, WOFF, and WOFF2 formats. |
| Declared-only | Tossface has `@font-face` sources in this capture but zero visible first-family uses. It remains contextual asset information, not `tokens.typography.family.sans`. |
| System / unresolved | The computed fallback stack includes platform and Korean system faces. No fallback is promoted as a Toss Securities type token, and native-app typography was not inspected. |

### Observed hierarchy

| Role | Size | Weight | Line height | Surface |
|---|---:|---:|---:|---|
| Compact menu trigger | 13px | 600 | 20px | Public WTS |
| Body, tab, menu, dialog | 16px | 400 | 23.2px | Public WTS |
| Investment-products H1 | 18px | 700 | 28.8px | Marketing |
| Marketing primary action | 15px | 600 | 18px | Marketing |

## 4. Components

### Public WTS compact primary entry

**Default / focus / pressed**
- Background: `#3182f6`
- Text: `#ffffff`
- Radius: `8px`
- Padding: `6px 12px`
- Height: `32px`
- Font: `14px / 600 / 16px Toss Product Sans`
- Focus: observed; retained color and geometry remained unchanged
- Pressed: observed; retained color and geometry remained unchanged
- Use: public WTS compact link-action at `home::[data-omd-capture="6"]`

### Investment-products marketing primary

**Default / focus / hover / pressed**
- Background: `#3182f6`
- Text: `#ffffff`
- Radius: `100px`
- Padding: `11px 14px`
- Height: `40px`
- Font: `15px / 600 / 18px Toss Product Sans`
- Focus: observed; no distinct color change retained
- Hover: observed; no distinct color change retained
- Pressed: observed; no distinct color change retained
- Use: investment-products marketing action at `surface-3::[data-omd-capture="11"]`

### Public WTS expanded menu

**Menu-open**
- Background: `#ffffff`
- Text: `#4e5968`
- Radius: `12px`
- Size: `160px x 204px`
- Shadow: `0 16px 24px -2px rgba(0,0,0,0.06), 0 8px 56px rgba(0,0,0,0.1)`
- Font: `16px / 400 / 23.2px Toss Product Sans`
- States: expanded and menu-open observed
- Use: public WTS menu container at `home::[data-omd-interaction-capture="menu-0-0"]`

### Public WTS selection dialog

**Dialog-open**
- Background: `#fbfcfd`
- Text: `#4e5968`
- Radius: `16px`
- Size: `640px x 600px`
- Shadow: `0 12px 28px -4px rgba(0,0,0,0.12), 0 8px 56px -4px rgba(0,0,0,0.1)`
- Font: `16px / 400 / 23.2px Toss Product Sans`
- States: dialog-open observed
- Use: public WTS dialog container at `home::[data-omd-interaction-capture="dialog-1-0"]`

Only selectors, surfaces, and states present in the supplied raw collector evidence are described here. The capture did not establish native-order, card, toast, error, disabled, or checkout variants.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.tossinvest.com/?focusedProductCode=A000660 · https://home.tossinvest.com/en/corporate-info · https://home.tossinvest.com/en/investment-products · https://toss.im/simplicity-21/sessions/3-3 · https://github.com/toss/tossface
**Tier 2 sources:** https://getdesign.md/toss-securities (direct detail attempt; no importable record returned) · https://styles.refero.design/?q=Toss%20Securities (query attempt; no importable record returned)
**Conflicts unresolved:** none

## 5. Layout & Spacing

The observed public WTS uses compact 4px, 8px, 12px, and 16px spacing clusters; the investment-marketing CTA contributes a 14px horizontal inset. Treat this as a small observed set, not as a complete spacing scale. WTS has square-edged tabs, 7–8px compact controls, a 12px menu, and a 16px dialog; the marketing pill’s 100px radius belongs only to that action.

## 6. Iconography & Imagery

The public WTS capture shows compact control and text-led UI; the expanded menu and dialog establish interaction containers but not a reusable icon family. The investment-products page uses product imagery and explanatory marketing content. No proprietary chart, illustration, or native-app icon system is promoted from this evidence.

## 7. Usage Guidelines

### Do

- Keep public WTS compact actions distinct from the 40px marketing pill.
- Use `#3182f6` with `#ffffff` for the observed primary action pairing.
- Preserve the recorded WTS container progression: 12px menu, 16px dialog.
- Use Toss Product Sans where the verified public web family is available; label unavailable specimens rather than substituting a system face as if it were Toss Product Sans.
- Limit interaction claims to the observed WTS focus, pressed, expanded/menu-open, and dialog-open states.

### Don't

- Reintroduce an unverified dark trading canvas or red/blue market semantics from the legacy snapshot.
- Treat the corporate or investment-marketing page as proof of authenticated or native trading UI.
- Generalize the 100px marketing pill to WTS controls.
- Promote Tossface to the UI family merely because it is declared in the stack.
- Invent disabled, error, loading, toast, card, or checkout variants not seen in the capture.

## 8. Accessibility & Density

The public WTS samples use `#1a1f29` and `#4e5968` on light surfaces, while primary actions use `#ffffff` on `#3182f6`. The packet establishes visible selected and unselected tab/radio controls plus menu and dialog expansion, but it does not provide a full keyboard, screen-reader, contrast, disabled, error, or responsive audit. Retain the observed state distinction and perform a product-specific accessibility audit before extending it to account or order entry.

## 9. Voice

The official corporate language is direct, inclusive, and opportunity-oriented: it frames the service around better investment experiences, access to global markets, and technology that makes investing easier. The samples below are original tone guidance, not verbatim Toss Securities copy.

- “See the choice clearly, then decide.”
- “투자를 더 쉽게, 다음 기회를 더 가깝게.”
- “One account, more ways to invest.”

## 10. Voice & Tone

| Attribute | Do | Don't |
|---|---|---|
| Inclusive | Explain options for a broad investor range. | Assume expertise or exclude beginners. |
| Direct | Name the product, market, and next action plainly. | Make a regulated choice sound effortless or guaranteed. |
| Useful | Pair a feature with the decision it supports. | Use market drama as decoration. |

The examples in §9 are illustrative paraphrases only; no tagline or customer promise is reproduced as official copy.

## 11. Brand Narrative

Toss Securities is a Korean securities company building an investment platform around the mission “To Empower Everyone with Investing.” Its official company page describes an aim to offer better investing experiences and access to opportunities in global capital markets.

The current public company narrative expands that scope from stock trading toward an inclusive platform for beginners and experts, with investment content, a social community, broader investment products, and WTS access. Its investment-products page makes the portfolio breadth concrete through domestic and overseas stocks, ETFs, U.S. stock options, and overseas bonds.

The company page also records current international expansion milestones, including a U.S. broker-dealer license in 2025. This is company context, not a claim about any uninspected product interface.

## 12. Principles

1. **Opportunity should be broadly reachable.** The stated mission is to empower everyone with investing.
   *UI implication:* explain product choices and next actions without presuming expert knowledge.
2. **Global-market access should feel connected.** The company describes global products and WTS as access channels.
   *UI implication:* make market, product, and account context explicit rather than relying on implicit navigation.
3. **Technology should make investing easier.** The official narrative connects technology and AI with better decisions.
   *UI implication:* present information as decision support, not as a promise of outcomes.

## 13. Personas

*These are official audience-scope archetypes, not user-research findings or synthetic satisfaction scores.*

- **Beginning investor:** the company explicitly names beginners among the people its inclusive platform should serve. Use plain explanations and visible product context.
- **Experienced investor:** the same platform is intended to include experts. Keep high-information paths available without representing unobserved native or authenticated UI as canonical.
- **Cross-market investor:** the official product range includes domestic and overseas investments. Make product and market boundaries explicit.

## 14. States

| State | Evidence boundary |
|---|---|
| Focus | Public WTS compact primary and marketing primary focus samples were captured; retained colors and geometry did not change. |
| Hover | Public WTS tabs and marketing primary were captured in hover; only the retained computed values are documented. |
| Pressed | Public WTS compact primary, tabs, and marketing primary were captured pressed; no new palette is inferred. |
| Expanded / menu-open | One public WTS menu interaction was expanded and recorded. |
| Dialog-open | One public WTS dialog interaction was opened and recorded. |
| Selected / unchecked | Public WTS tab and radio-like controls exposed selected and unchecked states. |
| Disabled | Not observed; no disabled token or variant is claimed. |
| Error | Not observed; no error token or variant is claimed. |
| Loading / skeleton | Not observed; no loading or skeleton token is claimed. |
| Empty / success | Not observed; no empty or success treatment is claimed. |

## 15. Motion & Easing

No duration, easing, or transition token was measured in the supplied evidence. The captured hover, focus, pressed, menu, and dialog snapshots establish state presence only; they do not authorize a motion scale. Keep any future motion specification separate until first-party computed transition evidence is available.

## 16. Reference URLs

- Public WTS surface: https://www.tossinvest.com/?focusedProductCode=A000660
- Corporate context: https://home.tossinvest.com/en/corporate-info
- Investment-products marketing: https://home.tossinvest.com/en/investment-products
- Toss Product Sans context: https://toss.im/simplicity-21/sessions/3-3
- Tossface official repository: https://github.com/toss/tossface
