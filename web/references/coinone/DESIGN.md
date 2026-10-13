---
name: Coinone
colors:
  brand: '#006BD6'
  point: '#0090FF'
  brand-deep: '#194386'
  brand-navy: '#062554'
  canvas: '#FFFFFF'
  foreground: '#17181B'
  product-primary: '#0B59D5'
  control-border: '#DDE4EB'
  login-text: '#79818F'
typography:
  home-control:
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.38
    use: Home compact control, selector home::[data-omd-capture=59]
  trading-tab:
    fontSize: 13px
    fontWeight: 400
    use: Trading chart tab, selector surface-2::[data-omd-capture=49]
rounded:
  login: 3px
  control: 6px
  badge: 26px
spacing:
  xs: 4
  sm: 8
  md: 12
  lg: 16
components:
  sign-in-outline:
    type: button
    textColor: '#79818F'
    border: '1px solid #AEB3BB'
    rounded: 3px
    padding: 0px 8px
    height: 24px
    typography: 12px / 400 pretendardCoinone
    hover: rgba(121, 129, 143, 0.05)
    states: default measured in the 2026-07-13 bundle; the hover value comes from a 2026-09-16 live CSS inspection (claim method live-css-inspect) and is not in the bundle, which holds no state frame for this element
    use: Home sign-in control, selector home::[data-omd-capture=14]
  home-compact-control:
    type: button
    backgroundColor: '#FFFFFF'
    textColor: '#040505'
    border: '1px solid #DDE4EB'
    rounded: 6px
    padding: 6px 12px
    height: 32px
    typography: 13px / 500 pretendardCoinone
    hover: rgba(61, 80, 137, 0.1)
    pressed: rgba(61, 80, 137, 0.1)
    states: 'default measured in the 2026-07-13 bundle; the hover and pressed values come from a 2026-09-16 live CSS inspection (claim method live-css-inspect) and are not in the bundle, which holds no state frame for this element; a sibling in the same row (capture 58) records border 1px #040505 and 13px / 700 with no aria-selected, so it is described, not declared'
    use: Home compact product control, selector home::[data-omd-capture=59]
  trading-chart-tab:
    type: tab
    textColor: '#18191C'
    padding: 0px 16px
    height: 37px
    typography: 13px / 400 Spoqa Han Sans
    selected: 'bg #ffffff, border 1px #e0e0e0 on top and sides, 13px / 700 (class is-active, capture 48)'
    states: rest captured on capture 49; the tab with class is-active (capture 48) is recorded as selected; no state frame on either
    use: Trading chart tab, selector surface-2::[data-omd-capture=49]
  trading-side-tab:
    type: tab
    textColor: '#9E9E9E'
    height: 40px
    typography: 14px / 400 Spoqa Han Sans
    states: default captured; no state frame for this element
    use: Trading side tab, selector surface-2::[data-omd-capture=156]
  home-gnb-link:
    type: tab
    backgroundColor: transparent
    textColor: '#18191c'
    rounded: 6px
    padding: 6px 10px
    height: 36px
    typography: 16px / 700 / 24px pretendardCoinone
    hover: bg rgba(23, 114, 248, 0.05)
    pressed: bg rgba(23, 114, 248, 0.05)
    states: rest on seven links (capture 3-9); hover and pressed sampled on all seven, all fourteen frames recording the same value; focus not declared
    use: 'Exchange-home global navigation link (a.gnb-link, letter-spacing 1px) at home::[data-omd-capture="3"]; the tint hue rgb(23, 114, 248) is #1772f8, the rest fill of the trading sign-in button'
  trading-nav-icon-button:
    type: button
    backgroundColor: transparent
    rounded: 4px
    padding: 0px
    size: 24px x 24px
    hover: 'bg #f5f7f9'
    pressed: 'bg #f5f7f9'
    states: 'single element: hover and pressed frames agree exactly, opaque #f5f7f9 over a transparent rest; no focus frame'
    use: Trading-route navigation icon button (button.navigation-icon-wrapper) at surface-2::[data-omd-capture="13"]; it has no text node, so no label colour is claimed; bundle variant 47 uses its hover frame as the representative, which is not a rest value
  home-signup-outline:
    type: button
    backgroundColor: transparent
    textColor: '#1772f8'
    border: '1px #2076f4'
    rounded: 3px
    padding: 0px 8px
    height: 24px
    typography: 12px / 700 pretendardCoinone
    states: default captured; no state frame on this element
    use: Exchange-home sign-up control (button.btn-signup) beside the sign-in control at home::[data-omd-capture="13"], 59 x 24
  home-primary-cta:
    type: button
    backgroundColor: '#0b59d5'
    textColor: '#ffffff'
    border: '1px #0b59d5'
    rounded: 8px
    padding: 14px 18px
    height: 49px
    typography: 15px / 700 / 19px pretendardCoinone
    states: default captured; no state frame on this element
    use: Exchange-home primary call to action at home::[data-omd-capture="15"], 90 x 49; capture 104 records the same fill, radius, padding and type with a 0px border at 186 x 47
  home-secondary-cta:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#040505'
    border: '1px #dde4eb'
    rounded: 8px
    padding: 14px 18px
    height: 49px
    typography: 15px / 500 / 19px pretendardCoinone
    states: default captured; no state frame on this element
    use: Exchange-home secondary call to action beside the primary one at home::[data-omd-capture="16"], 103 x 49
  home-app-download-button:
    type: button
    backgroundColor: '#ebf0f5'
    textColor: '#040505'
    rounded: 10px
    padding: 13px
    height: 48px
    typography: 13px / 700 / 18px pretendardCoinone
    states: default captured on both buttons; no state frame
    use: 'Exchange-home app-download button inside the AppDownloadContainer article at home::[data-omd-capture="106"], 194 x 48; its sibling (capture 107) records the dark variant, bg #040505 with fg #ffffff, same geometry and type'
  home-card:
    type: card
    backgroundColor: '#f4f7f9'
    rounded: 12px
    padding: 20px
    size: 250px x 186px
    states: default captured on fifteen cards; no state frame
    use: Exchange-home card (div, generated class ending -Card) at home::[data-omd-capture="77"]; a container, so its inherited 16px / 400 type is not claimed as a label style
  trading-sign-in-button:
    type: button
    backgroundColor: '#1772f8'
    textColor: '#ffffff'
    rounded: 6px
    padding: 6px 0px
    height: 32px
    typography: 14px / 400 Spoqa Han Sans
    states: default captured; no state frame on this element
    use: Trading-route sign-in button (a.sign-in-button) at surface-2::[data-omd-capture="44"], 120 x 32
  trading-order-button:
    type: button
    backgroundColor: '#e12343'
    textColor: '#ffffff'
    rounded: 4px
    padding: 0px
    height: 36px
    typography: 14px / 700 / 16.8px Spoqa Han Sans
    states: default captured; no state frame on this element
    use: Trading-route order button (button.btn-order) at surface-2::[data-omd-capture="160"], 306 x 36
  trading-ticker-tag:
    type: button
    backgroundColor: '#f8f8f9'
    textColor: '#9e9e9e'
    border: 1px transparent
    rounded: 5px
    padding: 5px 8px
    height: 30px
    typography: 12px / 400 Spoqa Han Sans
    states: 'default captured on nine tags (capture 16-24); the first tag (capture 15, extra class trd-tickers-btn-tag) records bg #f5f8ff, fg #1772f8 and border 1px #1772f8, but no aria-selected or active class marks it, so it is described, not declared selected; no state frame'
    use: Trading-route ticker filter tag (button.btn-tag) at surface-2::[data-omd-capture="16"], 40 x 30
  trading-ticker-search:
    type: input
    backgroundColor: transparent
    textColor: '#424242'
    rounded: 0px
    padding: 7px 24px 7px 0px
    size: 299px x 30px
    typography: 14px / 400 Spoqa Han Sans
    states: default captured (classes ng-untouched ng-pristine ng-valid); no focus or error sample
    use: Trading-route ticker search input at surface-2::[data-omd-capture="14"]; its border width is 0px, so no field frame is claimed
  brand-page-lnb-link:
    type: tab
    backgroundColor: transparent
    textColor: '#868e96'
    rounded: 0px
    padding: 0px
    height: 21px
    typography: 15px / 400
    hover: 'fg #495057'
    pressed: 'fg #495057'
    states: rest on nine links (capture 9-12, 14-16, 18, 19); hover and pressed sampled on all nine, all eighteen frames recording the same value; no focus frame
    use: Corporate brand-guideline page link (a.lnb-link) near the page foot at surface-3::[data-omd-capture="9"] (coinonecorp.com); documentation chrome, not an exchange product control; its stack leads with Roboto, which the bundle classes as a system family, so no family is claimed
  brand-page-ghost-button:
    type: button
    backgroundColor: transparent
    textColor: '#868e96'
    border: '1px #ced4da'
    rounded: 5px
    padding: 0px 16px
    height: 40px
    typography: 15px / 400
    states: 'default captured; the hover and pressed frames record different partial values (bg alpha 0.027 and 0.137, border #cfd5db and #d3d8de), transition frames, so neither is declared; no focus frame'
    use: Corporate brand-guideline ghost action (a.btn-coinone-ghost2) at surface-3::[data-omd-capture="7"], 153 x 40; documentation chrome, not an exchange product control; its stack leads with Roboto (system family), so no family is claimed
fonts:
  roles:
    home: pretendardCoinone
    trading: Spoqa Han Sans
---

# Coinone

## Overview

### Visual Theme & Atmosphere

Coinone is a Korean virtual-asset exchange whose public company materials frame the business around bringing blockchain into the world and creating an environment grounded in trust, innovation, and expertise. Founded in 2014, the exchange presents a formal blue identity in its corporate guideline, then uses a more utilitarian product language in the public routes captured here. The current exchange home is white, compact, and set in the loaded `pretendardCoinone` webfont; its public trading route is denser and uses the separately loaded `Spoqa Han Sans`. The corporate brand page is a third, distinct source domain: it defines the signature, clear space, and Coinone Blue palette, but its Roboto-led documentation chrome is not a product font rule. This reference preserves those boundaries rather than forcing them into one inferred UI system.

### Primary tasks

- Check how Bitcoin is trading against the Korean won
- Sign in to the exchange from its public home page
- Complete customer verification before using the exchange
- Look up how to protect an account from phishing and fraud

### Iconography & Imagery

The public exchange home has a loaded `coinone_glyph_ui` asset for one observed icon-font use. The supplied bundle does not establish a named icon set, image treatment, illustration style, or media-card specification.

#### Do

- Keep the official Coinone Blue palette and current product-blue observation distinct in implementation notes.
- Preserve the home/trading typography boundary when recreating one of the captured routes.
- Treat the corporate brand guideline as identity evidence, not as a source of exchange-control CSS.

#### Don't

- Substitute a declared-only or system family for `pretendardCoinone` or `Spoqa Han Sans` while presenting it as the observed family.
- Invent hover, error, empty, modal, responsive, or logged-in component variants beyond the frames declared in §4; transition frames and focus frames in the capture are not state values.
- Generalize the corporate guideline's Roboto documentation chrome into exchange UI typography.

### Brand Narrative

Coinone's official history records the company's establishment in 2014 and the launch of its Bitcoin exchange that October. Its mission page describes the company as believing in the possibilities created by free connection and movement of value through blockchain, under the slogan “Bringing Blockchain into the World.” The company names trust, innovation, and expertise as its values.

The official business page describes Coinone Exchange as a Korean professional virtual-asset exchange and presents asset safety, anti-money-laundering systems, transparent listing policy, and a user-centered trading environment as core operating themes. The public brand guideline gives that service context a consistent visual identity: a horizontal signature as the default, protected clear space, and blue as the main color representing the future.

### Principles

1. **Make trust legible.** *UI implication:* keep verification, safety, and status language explicit instead of implying a guarantee.
2. **Separate identity from surface evidence.** *UI implication:* use the official palette as brand context while retaining the captured home and trading controls as route-local facts.
3. **Support expert use without inventing density rules.** *UI implication:* preserve observed trading-tab typography, but do not infer an entire order-entry system from a public route.
4. **Keep product and support boundaries clear.** *UI implication:* do not turn support documentation or corporate copy into an observed exchange state.

### Personas

The first-party sources identify stakeholder groups rather than publishing user-research personas. The following are source-grounded service audiences, not synthetic behavioral profiles:

- **Exchange members** — people using Coinone's exchange and asset-management services.
- **Prospective or returning users completing customer verification** — the official support flow identifies customer verification and real-name account checks as service requirements.
- **Customers seeking security or investor-protection guidance** — the support center publishes phishing, fraud, account-protection, and investor-protection information.

## Colors

### Color & Typography

#### Color tokens

- `#006BD6` — official Coinone Blue main color.
- `#0090FF` — official point color.
- `#194386` and `#062554` — official supporting blue and navy colors.
- `#FFFFFF` — observed public product canvas and compact-control background.
- `#17181B` — observed product foreground across the home and trading route.
- `#0B59D5` — observed current-home primary blue. It is distinct from, but compatible with, the official `#006BD6` identity swatch; the two values are recorded by source domain rather than collapsed.
- `#DDE4EB` — observed home compact-control border.
- Component-local product colours recorded in §4, not promoted to palette roles: `#1772F8` (trading sign-in fill and home sign-up text; a 5% tint of it is the home navigation hover), `#2076F4` (home sign-up border), `#E12343` (trading order button), `#EBF0F5` and `#F4F7F9` (home app-download button and card fills), `#F8F8F9` (trading ticker tags), and `#424242` (trading ticker search text).

#### Typography evidence classes

- **Live home computed use:** `pretendardCoinone` is loaded/high confidence with 408 observed uses across home body, controls, cards, headings, inputs, and badges. Three Coinone CDN WOFF2 source URLs corroborate the computed family. It is the home UI family in the machine tokens.
- **Live trading computed use:** `Spoqa Han Sans` is loaded/high confidence with 314 observed uses across the BTC/KRW public trading route, including controls, rows, tabs, and text. Its loaded source list includes Coinone-hosted font assets. It is a separate trading-route family, not a fallback for the home.
- **Documentation chrome:** Roboto and Arial occur on the corporate brand page; the bundle classifies them as system families. They are not product UI tokens.
- **Loaded icon asset:** `coinone_glyph_ui` is loaded for one observed icon-font use. It is an interface asset, not a text family token.
- **Declared-only assets:** `coinone_glyph_coin`, Glyphicons Halflings, Noto Sans KR, `pretendardCoinone Fallback`, and slick have zero visible uses in the supplied capture. They remain declared-only and are not substituted or promoted.
- **Licence boundary:** no first-party public font-licence statement was found for `pretendardCoinone` or the Coinone-hosted Spoqa files in the requested searches. The capture proves live loading and use; it does not establish redistribution terms.

## Layout

### Layout & Grid

- The public home and public BTC/KRW trading route are both product surfaces, but their captured controls use different loaded families and density. They are recorded as separate product sub-surfaces.
- The home capture contains compact 24px and 32px controls; the trading route contains a 37px chart tab and a 40px side tab.
- The supplied capture does not establish a reusable page grid, breakpoint, logged-in balance view, order-entry flow, or mobile navigation behavior.
- The corporate brand guideline provides identity rules and its own documentation chrome. It is not used to populate exchange layout tokens.

## Elevation & Depth

### Elevation

The selector-backed home and trading controls above have `box-shadow: none`. The capture does not substantiate a reusable shadow or elevation ladder.

## Shapes

### Spacing & Shape

Observed component spacing is intentionally kept small and local: 4px and 8px occur in home controls, 12px in the compact-control horizontal padding, and 16px in the chart-tab horizontal padding. The recorded radii are 3px for the sign-in control, 6px for the compact control, and 26px for a home badge. These are observations, not a universal radius scale.

## Motion & Easing

The supplied evidence does not measure durations, easing curves, animated price changes, or transition behavior. No motion token or recommendation is claimed.

## Components

### Home sign-in control

**Default**
- Text: `#79818F`
- Border: `1px solid #AEB3BB`
- Radius: `3px`
- Padding: `0px 8px`
- Height: `24px`
- Font: `12px / 400 pretendardCoinone`
- Hover: `rgba(121, 129, 143, 0.05)`, from a 2026-09-16 live CSS inspection (claim method `live-css-inspect`). The 2026-07-13 bundle holds no state frame for this element and the value appears nowhere in it. The trading route's sign-in and sign-up buttons share this geometry and hue and record only transition frames (`rgba(121, 129, 143, 0.008)` on focus, alpha 0 on press), so the bundle neither confirms nor contradicts the value.
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
- Hover and pressed: `rgba(61, 80, 137, 0.1)`, from the same 2026-09-16 live CSS inspection; the bundle holds no state frame for this element and the value appears nowhere in it.
- Row sibling: `home::[data-omd-capture="58"]`, in the same row, records a 1px `#040505` border and 13px / 700 at 112px × 32px. No `aria-selected` marks it, so it is described, not declared as a selected state.
- Use: Public-home compact product control; `home::[data-omd-capture="59"]`.

### Trading chart tab

**Default**
- Text: `#18191C`
- Padding: `0px 16px`
- Height: `37px`
- Font: `13px / 400 Spoqa Han Sans`
- Selected: the tab with class `is-active` (`surface-2::[data-omd-capture="48"]`) records background `#FFFFFF`, a 1px `#E0E0E0` border on top and sides, and 13px / 700.
- Use: Public BTC/KRW trading chart tab; `surface-2::[data-omd-capture="49"]`.

### Trading side tab

**Default**
- Text: `#9E9E9E`
- Height: `40px`
- Font: `14px / 400 Spoqa Han Sans`
- Use: Public BTC/KRW trading side tab; `surface-2::[data-omd-capture="156"]`.

### Exchange-home navigation link

**Default** (`home-gnb-link`)
- Background: transparent
- Text: `#18191C`
- Radius: `6px`
- Padding: `6px 10px`
- Height: `36px`
- Font: `16px / 700 / 24px pretendardCoinone`, letter-spacing 1px
- Hover: background `rgba(23, 114, 248, 0.05)`
- Pressed: background `rgba(23, 114, 248, 0.05)`
- Use: `home::[data-omd-capture="3"]` (`a.gnb-link`). Seven links (capture 3–9) record the same rest values, and all fourteen of their hover and pressed frames record the same tint. Its hue, `rgb(23, 114, 248)`, is `#1772F8`, the rest fill of the trading sign-in button.

### Exchange-home actions

**Sign-up control** (`home-signup-outline`): transparent, text `#1772F8`, border 1px `#2076F4`, `3px` radius, `0px 8px`, `24px` high, `12px / 700 pretendardCoinone`; `home::[data-omd-capture="13"]`, beside the sign-in control.

**Primary call to action** (`home-primary-cta`): background `#0B59D5`, text `#FFFFFF`, border 1px `#0B59D5`, `8px` radius, `14px 18px`, `49px` high, `15px / 700 / 19px pretendardCoinone`; `home::[data-omd-capture="15"]`. Capture 104 records the same fill, radius, padding and type with a 0px border at 186px × 47px.

**Secondary call to action** (`home-secondary-cta`): background `#FFFFFF`, text `#040505`, border 1px `#DDE4EB`, `8px` radius, `14px 18px`, `49px` high, `15px / 500 / 19px pretendardCoinone`; `home::[data-omd-capture="16"]`, beside the primary one.

**App-download button** (`home-app-download-button`): background `#EBF0F5`, text `#040505`, `10px` radius, `13px` padding, `48px` high, `13px / 700 / 18px pretendardCoinone`; `home::[data-omd-capture="106"]`, inside the app-download article. Its sibling, capture 107, is the dark variant: background `#040505`, text `#FFFFFF`, same geometry and type.

**Card** (`home-card`): background `#F4F7F9`, `12px` radius, `20px` padding, 250px × 186px; `home::[data-omd-capture="77"]`, fifteen occurrences. It is a container, so no label style is claimed.

### Trading navigation icon button

**Default** (`trading-nav-icon-button`)
- Background: transparent
- Radius: `4px`
- Size: `24px × 24px`
- Hover: background `#F5F7F9`
- Pressed: background `#F5F7F9`
- Use: `surface-2::[data-omd-capture="13"]` (`button.navigation-icon-wrapper`). Single element: its hover and pressed frames agree exactly, an opaque fill over a transparent rest. It has no text node, so no label colour is claimed. The bundle's variant 47 uses the hover frame as its representative; that is not a rest value.

### Trading-route controls

**Sign-in button** (`trading-sign-in-button`): background `#1772F8`, text `#FFFFFF`, `6px` radius, `6px 0px`, `32px` high, `14px / 400 Spoqa Han Sans`; `surface-2::[data-omd-capture="44"]`.

**Order button** (`trading-order-button`): background `#E12343`, text `#FFFFFF`, `4px` radius, `36px` high, 306px wide, `14px / 700 / 16.8px Spoqa Han Sans`; `surface-2::[data-omd-capture="160"]`.

**Ticker filter tag** (`trading-ticker-tag`): background `#F8F8F9`, text `#9E9E9E`, border 1px transparent, `5px` radius, `5px 8px`, `30px` high, `12px / 400 Spoqa Han Sans`; `surface-2::[data-omd-capture="16"]` through `"24"`. The first tag (capture 15, extra class `trd-tickers-btn-tag`) records background `#F5F8FF`, text `#1772F8` and border 1px `#1772F8`; no `aria-selected` or active class marks it, so it is described, not declared as selected.

**Ticker search input** (`trading-ticker-search`): transparent, text `#424242`, `7px 24px 7px 0px`, 299px × 30px, `14px / 400 Spoqa Han Sans`, 0px border; `surface-2::[data-omd-capture="14"]`. No focus or error sample.

### Corporate brand-page chrome (separate domain)

Measured on `https://coinonecorp.com/company/brand` (bundle `surface-3`). These are documentation chrome, recorded as corporate components; they do not populate exchange product tokens. Their computed stacks lead with Roboto, which the bundle classes as a system family, so no family is claimed.

**Link list** (`brand-page-lnb-link`): transparent, text `#868E96`, `15px / 400`, `21px` high; hover and pressed text `#495057`. `surface-3::[data-omd-capture="9"]` (`a.lnb-link`) near the page foot; nine links (capture 9–12, 14–16, 18, 19) record the same rest values, and all eighteen of their hover and pressed frames record `#495057`.

**Ghost action** (`brand-page-ghost-button`): transparent, text `#868E96`, border 1px `#CED4DA`, `5px` radius, `0px 16px`, `40px` high, `15px / 400`; `surface-3::[data-omd-capture="7"]` (`a.btn-coinone-ghost2`). Its hover and pressed frames record different partial values (background alpha 0.027 and 0.137; border `#CFD5DB` and `#D3D8DE`). Those are transition frames, so neither is declared.

### How states were read

A state frame is the computed style the collector recorded with the pointer over an element (hover) or pressed on it; `interactionCount: 0` counts dialog, tab, and menu expansions and says nothing about these frames. Three settled pointer states are declared above: the exchange-home navigation links, the trading navigation icon button, and the corporate link list. Frames that disagree with each other or move by a few channel units are transition frames; they are listed, not declared, in `.verification.md`. Focus is never declared from this bundle (§8). No disabled, menu, dialog, validation, toast, responsive, or logged-in variant is claimed. Corrected 2026-09-29: the July text said the static hover, focus, and pressed snapshots were not promoted because the bundle had no interaction record.

---
**Verified:** 2026-07-13
**Tier 1 sources:** `https://coinone.co.kr/` (public exchange home), `https://coinone.co.kr/exchange/trade/btc/krw` (public trading surface), `https://www.coinonecorp.com/company/brand` (official brand guideline), and `https://image-public.coinone.co.kr/download/corphome/coinone_guide_4.0.pdf` (official brand-guideline PDF).
**Tier 2 sources:** `https://getdesign.md/coinone` and `https://styles.refero.design/?q=coinone` were both attempted; built-in web open returned safe-open failures and subsequent web searches returned no Coinone record. No Tier 2 values were used.
**Conflicts unresolved:** none

Legacy generic CTA, filter-chip, store-button, icon-button, trading-state, system-font, shadow, motion, and fallback-family claims were removed or narrowed where the 2026 supplied capture does not provide selector-backed product evidence.

### States

Pointer states measured in the 2026-07-13 bundle (§4): the exchange-home navigation links take background `rgba(23, 114, 248, 0.05)` on hover and press (seven links agree); the trading navigation icon button takes background `#F5F7F9` on hover and press (single element); the corporate brand-page link list turns from `#868E96` to `#495057` (nine links agree). The home sign-in and compact controls carry hover values from a 2026-09-16 live CSS inspection that the bundle cannot confirm (§4). Selected: the trading chart tab with class `is-active`. Focus is not declared (§8).

No empty, loading, success, validation-error, network-error, skeleton, disabled, toast, or responsive state was captured. These states are intentionally not specified for Coinone in this reference.

## Voice & Tone

### Content & Voice

Coinone's official mission emphasizes blockchain-enabled connection and names trust, innovation, and expertise as values. Its product and support materials pair task-specific guidance with customer-verification and investor-protection information. Use concrete service language and make compliance or risk boundaries explicit; do not invent promotional trading promises or unobserved product microcopy.

**Voice adjectives:** clear · trust-oriented · technically grounded

| Do | Don't |
|---|---|
| Explain the task, requirement, or protection boundary directly. | Add urgency or return promises not supported by official material. |
| Separate exchange action copy from compliance/support information. | Turn the company mission into a UI slogan without route-specific evidence. |
| Use precise, calm Korean financial-service language. | Treat illustrative copy as a captured product string. |

## Governance

### Accessibility

- The home compact control records `#040505` text on white with a `#DDE4EB` border; the sign-in control records `#79818F` text with a `#AEB3BB` border.
- The capture holds three focus frames (home capture 12, trading captures 3 and 4), but the collector pressed the mouse before focusing each element, which leaves `:focus-visible` false, so none is a keyboard focus measurement and no focus-visible treatment is declared. Corrected 2026-09-29: the July text gave the missing interaction record as the reason.
- No accessibility conformance score, screen-reader behavior, validation behavior, or mobile target rule is claimed from these public captures.

### Known Gaps

- **Contrast, `home-gnb-link`.** Text `#18191c` on `#00000000` measures 1.19:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `trading-sign-in-button`.** Text `#ffffff` on `#1772f8` measures 4.38:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `trading-ticker-tag`.** Text `#9e9e9e` on `#f8f8f9` measures 2.52:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `trading-ticker-search`.** Text `#424242` on `#00000000` measures 2.09:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
