---
id: coinone
name: "Coinone"
country: KR
category: fintech
homepage: "https://coinone.co.kr"
primary_color: "#006BD6"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=coinone.co.kr&sz=256"
verified: "2026-07-13"
omd: "0.1"
ds:
  name: "Coinone Brand Guideline"
  url: "https://www.coinonecorp.com/company/brand"
  type: brand
  description: "Official BI/brand guideline for the Coinone Blue palette, signature, and clear space."
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: exchange-home, kind: product-home, url: "https://coinone.co.kr/", inspected: "2026-07-13" }
    - { id: exchange-trading, kind: product-trading, url: "https://coinone.co.kr/exchange/trade/btc/krw", inspected: "2026-07-13" }
    - { id: brand-guideline, kind: official-brand-guideline, url: "https://coinonecorp.com/company/brand", inspected: "2026-07-13" }
  sources:
    - { id: home-capture, kind: product-surface, url: "https://coinone.co.kr/", captured: "2026-07-13" }
    - { id: trading-capture, kind: product-surface, url: "https://coinone.co.kr/exchange/trade/btc/krw", captured: "2026-07-13" }
    - { id: brand-capture, kind: official-doc, url: "https://coinonecorp.com/company/brand", captured: "2026-07-13" }
    - { id: brand-guideline-pdf, kind: official-doc, url: "https://image-public.coinone.co.kr/download/corphome/coinone_guide_4.0.pdf", captured: "2026-07-13" }
    - { id: mission-context, kind: official-doc, url: "https://www.coinonecorp.com/company/mission", captured: "2026-07-13" }
    - { id: history-context, kind: official-doc, url: "https://www.coinonecorp.com/company/history", captured: "2026-07-13" }
    - { id: business-context, kind: official-doc, url: "https://www.coinonecorp.com/business/", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.brand": &brand { surface_id: brand-guideline, source_id: brand-capture, method: official-guideline, captured: "2026-07-13" }
    "tokens.colors.point": *brand
    "tokens.colors.brand-deep": *brand
    "tokens.colors.brand-navy": *brand
    "tokens.colors.canvas": &home { surface_id: exchange-home, source_id: home-capture, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.foreground": *home
    "tokens.colors.product-primary": *home
    "tokens.colors.control-border": *home
    "tokens.colors.login-text": *home
    "tokens.typography.family.home": *home
    "tokens.typography.home-control.size": *home
    "tokens.typography.home-control.weight": *home
    "tokens.typography.home-control.lineHeight": *home
    "tokens.typography.home-control.use": *home
    "tokens.typography.family.trading": &trading { surface_id: exchange-trading, source_id: trading-capture, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.trading-tab.size": *trading
    "tokens.typography.trading-tab.weight": *trading
    "tokens.typography.trading-tab.use": *trading
    "tokens.spacing.xs": *home
    "tokens.spacing.sm": *home
    "tokens.spacing.md": *home
    "tokens.spacing.lg": *trading
    "tokens.rounded.login": *home
    "tokens.rounded.control": *home
    "tokens.rounded.badge": *home
    "tokens.components.sign-in-outline.type": *home
    "tokens.components.sign-in-outline.fg": *home
    "tokens.components.sign-in-outline.border": *home
    "tokens.components.sign-in-outline.radius": *home
    "tokens.components.sign-in-outline.padding": *home
    "tokens.components.sign-in-outline.height": *home
    "tokens.components.sign-in-outline.font": *home
    "tokens.components.sign-in-outline.states": *home
    "tokens.components.sign-in-outline.use": *home
    "tokens.components.home-compact-control.type": *home
    "tokens.components.home-compact-control.bg": *home
    "tokens.components.home-compact-control.fg": *home
    "tokens.components.home-compact-control.border": *home
    "tokens.components.home-compact-control.radius": *home
    "tokens.components.home-compact-control.padding": *home
    "tokens.components.home-compact-control.height": *home
    "tokens.components.home-compact-control.font": *home
    "tokens.components.home-compact-control.states": *home
    "tokens.components.home-compact-control.use": *home
    "tokens.components.trading-chart-tab.type": *trading
    "tokens.components.trading-chart-tab.fg": *trading
    "tokens.components.trading-chart-tab.padding": *trading
    "tokens.components.trading-chart-tab.height": *trading
    "tokens.components.trading-chart-tab.font": *trading
    "tokens.components.trading-chart-tab.states": *trading
    "tokens.components.trading-chart-tab.use": *trading
    "tokens.components.trading-side-tab.type": *trading
    "tokens.components.trading-side-tab.fg": *trading
    "tokens.components.trading-side-tab.height": *trading
    "tokens.components.trading-side-tab.font": *trading
    "tokens.components.trading-side-tab.states": *trading
    "tokens.components.trading-side-tab.use": *trading
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Selector-backed product values are separated between the current exchange home and the public trading route. The corporate guideline is brand evidence, not product UI evidence."
  colors:
    brand: "#006BD6"
    point: "#0090FF"
    brand-deep: "#194386"
    brand-navy: "#062554"
    canvas: "#FFFFFF"
    foreground: "#17181B"
    product-primary: "#0B59D5"
    control-border: "#DDE4EB"
    login-text: "#79818F"
  typography:
    family: { home: "pretendardCoinone", trading: "Spoqa Han Sans" }
    home-control: { size: 13, weight: 500, lineHeight: 1.38, use: "Home compact control, selector home::[data-omd-capture=59]" }
    trading-tab: { size: 13, weight: 400, use: "Trading chart tab, selector surface-2::[data-omd-capture=49]" }
  spacing: { xs: 4, sm: 8, md: 12, lg: 16 }
  rounded: { login: 3, control: 6, badge: 26 }
  components_harvested: true
  components:
    sign-in-outline: { type: button, fg: "#79818F", border: "1px solid #AEB3BB", radius: "3px", padding: "0px 8px", height: "24px", font: "12px / 400 pretendardCoinone", states: "default only; static pseudo-state samples are not promoted", use: "Home sign-in control, selector home::[data-omd-capture=14]" }
    home-compact-control: { type: button, bg: "#FFFFFF", fg: "#040505", border: "1px solid #DDE4EB", radius: "6px", padding: "6px 12px", height: "32px", font: "13px / 500 pretendardCoinone", states: "default only; no interaction record", use: "Home compact product control, selector home::[data-omd-capture=59]" }
    trading-chart-tab: { type: tab, fg: "#18191C", padding: "0px 16px", height: "37px", font: "13px / 400 Spoqa Han Sans", states: "default only; no interaction record", use: "Trading chart tab, selector surface-2::[data-omd-capture=49]" }
    trading-side-tab: { type: tab, fg: "#9E9E9E", height: "40px", font: "14px / 400 Spoqa Han Sans", states: "default only; no interaction record", use: "Trading side tab, selector surface-2::[data-omd-capture=156]" }
---

# Coinone

## 1. Visual Theme & Atmosphere

Coinone is a Korean virtual-asset exchange whose public company materials frame the business around bringing blockchain into the world and creating an environment grounded in trust, innovation, and expertise. Founded in 2014, the exchange presents a formal blue identity in its corporate guideline, then uses a more utilitarian product language in the public routes captured here. The current exchange home is white, compact, and set in the loaded `pretendardCoinone` webfont; its public trading route is denser and uses the separately loaded `Spoqa Han Sans`. The corporate brand page is a third, distinct source domain: it defines the signature, clear space, and Coinone Blue palette, but its Roboto-led documentation chrome is not a product font rule. This reference preserves those boundaries rather than forcing them into one inferred UI system.

## 2. Layout & Grid

- The public home and public BTC/KRW trading route are both product surfaces, but their captured controls use different loaded families and density. They are recorded as separate product sub-surfaces.
- The home capture contains compact 24px and 32px controls; the trading route contains a 37px chart tab and a 40px side tab.
- The supplied capture does not establish a reusable page grid, breakpoint, logged-in balance view, order-entry flow, or mobile navigation behavior.
- The corporate brand guideline provides identity rules and its own documentation chrome. It is not used to populate exchange layout tokens.

## 3. Color & Typography

### Color tokens

- `#006BD6` — official Coinone Blue main color.
- `#0090FF` — official point color.
- `#194386` and `#062554` — official supporting blue and navy colors.
- `#FFFFFF` — observed public product canvas and compact-control background.
- `#17181B` — observed product foreground across the home and trading route.
- `#0B59D5` — observed current-home primary blue. It is distinct from, but compatible with, the official `#006BD6` identity swatch; the two values are recorded by source domain rather than collapsed.
- `#DDE4EB` — observed home compact-control border.

### Typography evidence classes

- **Live home computed use:** `pretendardCoinone` is loaded/high confidence with 408 observed uses across home body, controls, cards, headings, inputs, and badges. Three Coinone CDN WOFF2 source URLs corroborate the computed family. It is the home UI family in the machine tokens.
- **Live trading computed use:** `Spoqa Han Sans` is loaded/high confidence with 314 observed uses across the BTC/KRW public trading route, including controls, rows, tabs, and text. Its loaded source list includes Coinone-hosted font assets. It is a separate trading-route family, not a fallback for the home.
- **Documentation chrome:** Roboto and Arial occur on the corporate brand page; the bundle classifies them as system families. They are not product UI tokens.
- **Loaded icon asset:** `coinone_glyph_ui` is loaded for one observed icon-font use. It is an interface asset, not a text family token.
- **Declared-only assets:** `coinone_glyph_coin`, Glyphicons Halflings, Noto Sans KR, `pretendardCoinone Fallback`, and slick have zero visible uses in the supplied capture. They remain declared-only and are not substituted or promoted.
- **Licence boundary:** no first-party public font-licence statement was found for `pretendardCoinone` or the Coinone-hosted Spoqa files in the requested searches. The capture proves live loading and use; it does not establish redistribution terms.

## 4. Components

### Home sign-in control

**Default**
- Text: `#79818F`
- Border: `1px solid #AEB3BB`
- Radius: `3px`
- Padding: `0px 8px`
- Height: `24px`
- Font: `12px / 400 pretendardCoinone`
- Use: Public-home sign-in control; `home::[data-omd-capture="14"]`.

### Home compact control

**Default**
- Background: `#FFFFFF`
- Text: `#040505`
- Border: `1px solid #DDE4EB`
- Radius: `6px`
- Padding: `6px 12px`
- Height: `32px`
- Font: `13px / 500 pretendardCoinone`
- Use: Public-home compact product control; `home::[data-omd-capture="59"]`.

### Trading chart tab

**Default**
- Text: `#18191C`
- Padding: `0px 16px`
- Height: `37px`
- Font: `13px / 400 Spoqa Han Sans`
- Use: Public BTC/KRW trading chart tab; `surface-2::[data-omd-capture="49"]`.

### Trading side tab

**Default**
- Text: `#9E9E9E`
- Height: `40px`
- Font: `14px / 400 Spoqa Han Sans`
- Use: Public BTC/KRW trading side tab; `surface-2::[data-omd-capture="156"]`.

The supplied bundle reports `interactionCount: 0` and no interaction records. Its static hover, focus, and pressed selector snapshots are not promoted as reusable states. No disabled, menu, dialog, validation, toast, responsive, or logged-in variants are claimed.

---
**Verified:** 2026-07-13
**Tier 1 sources:** `https://coinone.co.kr/` (public exchange home), `https://coinone.co.kr/exchange/trade/btc/krw` (public trading surface), `https://www.coinonecorp.com/company/brand` (official brand guideline), and `https://image-public.coinone.co.kr/download/corphome/coinone_guide_4.0.pdf` (official brand-guideline PDF).
**Tier 2 sources:** `https://getdesign.md/coinone` and `https://styles.refero.design/?q=coinone` were both attempted; built-in web open returned safe-open failures and subsequent web searches returned no Coinone record. No Tier 2 values were used.
**Conflicts unresolved:** none

Legacy generic CTA, filter-chip, store-button, icon-button, trading-state, system-font, shadow, motion, and fallback-family claims were removed or narrowed where the 2026 supplied capture does not provide selector-backed product evidence.

## 5. Elevation

The selector-backed home and trading controls above have `box-shadow: none`. The capture does not substantiate a reusable shadow or elevation ladder.

## 6. Spacing & Shape

Observed component spacing is intentionally kept small and local: 4px and 8px occur in home controls, 12px in the compact-control horizontal padding, and 16px in the chart-tab horizontal padding. The recorded radii are 3px for the sign-in control, 6px for the compact control, and 26px for a home badge. These are observations, not a universal radius scale.

## 7. Iconography & Imagery

The public exchange home has a loaded `coinone_glyph_ui` asset for one observed icon-font use. The supplied bundle does not establish a named icon set, image treatment, illustration style, or media-card specification.

### Do

- Keep the official Coinone Blue palette and current product-blue observation distinct in implementation notes.
- Preserve the home/trading typography boundary when recreating one of the captured routes.
- Treat the corporate brand guideline as identity evidence, not as a source of exchange-control CSS.

### Don't

- Substitute a declared-only or system family for `pretendardCoinone` or `Spoqa Han Sans` while presenting it as the observed family.
- Invent hover, error, empty, modal, responsive, or logged-in component variants from static capture samples.
- Generalize the corporate guideline's Roboto documentation chrome into exchange UI typography.

## 8. Accessibility

- The home compact control records `#040505` text on white with a `#DDE4EB` border; the sign-in control records `#79818F` text with a `#AEB3BB` border.
- The capture includes static focus/pressed snapshots but no interaction record, so it does not establish a reusable keyboard focus-visible treatment.
- No accessibility conformance score, screen-reader behavior, validation behavior, or mobile target rule is claimed from these public captures.

## 9. Content & Voice

Coinone's official mission emphasizes blockchain-enabled connection and names trust, innovation, and expertise as values. Its product and support materials pair task-specific guidance with customer-verification and investor-protection information. Use concrete service language and make compliance or risk boundaries explicit; do not invent promotional trading promises or unobserved product microcopy.

## 10. Voice & Tone

**Voice adjectives:** clear · trust-oriented · technically grounded

| Do | Don't |
|---|---|
| Explain the task, requirement, or protection boundary directly. | Add urgency or return promises not supported by official material. |
| Separate exchange action copy from compliance/support information. | Turn the company mission into a UI slogan without route-specific evidence. |
| Use precise, calm Korean financial-service language. | Treat illustrative copy as a captured product string. |

## 11. Brand Narrative

Coinone's official history records the company's establishment in 2014 and the launch of its Bitcoin exchange that October. Its mission page describes the company as believing in the possibilities created by free connection and movement of value through blockchain, under the slogan “Bringing Blockchain into the World.” The company names trust, innovation, and expertise as its values.

The official business page describes Coinone Exchange as a Korean professional virtual-asset exchange and presents asset safety, anti-money-laundering systems, transparent listing policy, and a user-centered trading environment as core operating themes. The public brand guideline gives that service context a consistent visual identity: a horizontal signature as the default, protected clear space, and blue as the main color representing the future.

## 12. Principles

1. **Make trust legible.** *UI implication:* keep verification, safety, and status language explicit instead of implying a guarantee.
2. **Separate identity from surface evidence.** *UI implication:* use the official palette as brand context while retaining the captured home and trading controls as route-local facts.
3. **Support expert use without inventing density rules.** *UI implication:* preserve observed trading-tab typography, but do not infer an entire order-entry system from a public route.
4. **Keep product and support boundaries clear.** *UI implication:* do not turn support documentation or corporate copy into an observed exchange state.

## 13. Personas

The first-party sources identify stakeholder groups rather than publishing user-research personas. The following are source-grounded service audiences, not synthetic behavioral profiles:

- **Exchange members** — people using Coinone's exchange and asset-management services.
- **Prospective or returning users completing customer verification** — the official support flow identifies customer verification and real-name account checks as service requirements.
- **Customers seeking security or investor-protection guidance** — the support center publishes phishing, fraud, account-protection, and investor-protection information.

## 14. States

No empty, loading, success, validation-error, network-error, skeleton, disabled, toast, or responsive state was captured with interaction provenance. These states are intentionally not specified for Coinone in this reference.

## 15. Motion & Easing

The supplied evidence does not measure durations, easing curves, animated price changes, or transition behavior. No motion token or recommendation is claimed.
