---
name: Shinhan Bank
colors:
  brand-primary: '#0046ff'
  group-live-blue: '#005df9'
  group-ink: '#24272d'
  group-surface: '#f3f6fb'
  canvas: '#ffffff'
  on-dark: '#ffffff'
  banking-text: '#666666'
typography:
  banking-body:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 17.5px
    letterSpacing: '-0.28px'
    use: Observed on the public internet-banking surface only.
  group-action:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 46px
    letterSpacing: '-0.5px'
    use: Observed on group corporate action links only.
  brand-hero:
    fontSize: 46px
    fontWeight: 700
    use: Observed group-corporate hero only.
rounded:
  group-action: 30px
  group-selector: 24px
spacing:
  group-action-inline: 24
  group-action-leading: 56
  group-selector-inline: 20
components:
  group-outline-action:
    type: button
    backgroundColor: rgba(0, 93, 249, 0.3)
    textColor: '#ffffff'
    border: '1px #ffffff'
    rounded: 30px
    padding: 0px 56px 0px 24px
    height: 48px
    typography: 16px / 400 / Pretendard
    states: default captured on five links (captures 13-17); the bundle holds no state frame for any element
    use: Group corporate marketing action link (a.roundbt.ico.link.type2) at surface-2::[data-omd-capture="13"]; line height 46px, tracking -0.5px. Corporate-marketing control only, not SOL Bank or transaction UI
  group-download-action:
    type: button
    backgroundColor: rgba(255, 255, 255, 0.2)
    textColor: '#ffffff'
    border: '1px #ffffff'
    rounded: 30px
    padding: 0px 48px 0px 24px
    height: 48px
    typography: 16px / 500 / Pretendard
    states: default captured on two links (captures 26 and 27); no state frame
    use: Group corporate download link (a.roundbt.ico.down.type2) at surface-2::[data-omd-capture="26"]; corporate-marketing control only
  family-site-selector:
    type: button
    backgroundColor: '#f3f6fb'
    textColor: '#24272d'
    rounded: 24px
    padding: 0px 20px
    height: 48px
    typography: 16px / 400 / Pretendard
    states: default captured; no expanded-menu record and no state frame
    use: Group Family Site selector (button.btn_selct) at surface-2::[data-omd-capture="40"], 205 px wide, line height 48px
  group-gnb-link:
    type: tab
    backgroundColor: transparent
    textColor: '#ffffff'
    rounded: 0px
    padding: 0px 36px
    height: 92px
    typography: 18px / 700 / OneShinhan
    states: default captured on six top-level links; no state frame
    use: 'Group corporate top-level navigation link (a.depth1) at surface-2::[data-omd-capture="1"], white over the hero slider at capture time. Its li.gnb_li container computes #24272d / 16px / 500, which is not the link style'
  group-header-selector:
    type: button
    backgroundColor: transparent
    textColor: '#ffffff'
    rounded: 0px
    padding: 1px 6px 1px 8px
    height: 36px
    typography: 18px / 700 / OneShinhan
    states: default captured; no state frame
    use: Two-character header selector (button.btn_selct) at surface-2::[data-omd-capture="7"]; it shares its class with the Family Site selector but computes a transparent, white-text treatment
  group-round-link:
    type: button
    backgroundColor: rgba(255, 255, 255, 0.2)
    rounded: 50%
    padding: 0px
    size: 40px x 40px
    states: default captured on ten links; no state frame
    use: Circular icon link (a.golink) at surface-2::[data-omd-capture="11"]; its text is visually hidden (1px font, transparent colour), so no label style is declared
  banking-text-link:
    type: button
    backgroundColor: transparent
    textColor: '#2d71c4'
    height: 20px
    typography: 16px / 700 / Spoqa
    states: default captured; no state frame
    use: Public internet-banking text link (a.w2anchor2.btnLink) at home::[data-omd-capture="20"]; line height 20px, tracking -0.32px
  banking-more-link:
    type: button
    backgroundColor: transparent
    textColor: '#666666'
    padding: 0px 15px 0px 0px
    height: 18px
    typography: 14px / 400 / Spoqa
    states: default captured; no state frame
    use: Public internet-banking more link (a.w2anchor2.btnMoreTxt, class bul01) at home::[data-omd-capture="29"]; line height 17.5px
  banking-page-top:
    type: button
    backgroundColor: '#4f4d4c'
    rounded: 2px
    padding: 0px
    size: 32px x 32px
    states: default captured on internet banking and on www.shinhan.com (surface-3 capture 95); no state frame
    use: 'Page-top control (a.w2anchor2.btnPageTop) at home::[data-omd-capture="55"]; its computed #666666 / 14px / 400 equal the page inherited body text, so no label style is declared'
  banking-menu-cell:
    type: listItem
    backgroundColor: transparent
    border: '1px #dcdcdc'
    size: 154px x 56px
    states: default captured on six cells; no state frame
    use: 'Public internet-banking menu grid cell (li.w2group) at home::#wq_uuid_1101; the border is drawn on the top and left edges only (1px 0px 0px 1px). Its #666666 / 14px / 400 are container values'
  recommendation-card:
    type: card
    backgroundColor: '#aadaff'
    padding: 30px 0px 25px
    size: 232px x 257px
    states: 'default captured; the second card (surface-3::#grp_prod2) fills #7ae6e9 with the same geometry; no state frame'
    use: 'www.shinhan.com product recommendation card (li.w2group.recom1) at surface-3::#grp_prod1, on the public-marketing page, not internet banking. Its #666666 / 14px / 400 are container values'
fonts:
  roles:
    banking: Spoqa
    group: Pretendard
    brand: OneShinhan
---

# Design System Inspiration of Shinhan Bank

## Overview

### Visual Theme & Atmosphere

Shinhan Bank is the banking subsidiary in Shinhan Financial Group’s network. The group traces Shinhan Bank’s start to 1982 and describes its current vision as making finance easier, more comfortable, and newer. The supplied public evidence shows that this idea is expressed through separate registers rather than one interchangeable UI system: the public internet-banking surface is compact, Spoqa-led, and largely neutral in its sampled text; the group corporate site is more editorial, with OneShinhan display type, Pretendard controls, white-on-image action links, and a pale-blue Family Site selector. The document deliberately keeps those surface domains apart. [Official history](https://shinhangroup.com/kr/about/group/history1) · [Group vision](https://shinhangroup.com/kr/about/group/mission)

The durable brand layer is clearer than any one website implementation. Shinhan’s official CI specifies Shinhan Blue `#0046ff`, alongside white and a defined blue secondary range. The corporate site’s observed `#005df9` is recorded separately as a live surface value, not silently substituted for the CI color. The group’s own typeface page names OneShinhan as a dedicated face for consistent brand identity and describes Bold, Medium, and Light weights optimized for digital environments. [Official CI](https://shinhangroup.com/kr/about/identity/ci) · [Official typeface page](https://shinhangroup.com/kr/about/identity/typeface)

**Key Characteristics:**

- Official identity blue `#0046ff`; separately observed corporate-site blue `#005df9`
- Loaded OneShinhan, Pretendard, and Spoqa with distinct live-surface provenance
- Corporate actions use 24–30px rounded outlines; the captured internet-banking text sample is denser and square-cornered
- No authenticated mobile-banking, transfer, account, or checkout UI is represented by this packet

### Primary tasks

- Read public product and service information on the bank site
- Navigate the public banking site by its compact functional labels

### Brand Narrative

Shinhan Financial Group’s history identifies Shinhan Bank’s 1982 founding as the start of the group story, describing origins in the aspirations of Korean residents in Japan and an early contribution to electronic finance and global expansion. The group introduction places the 2001 formation of a financial holding company after that bank origin. [Official history](https://shinhangroup.com/kr/about/group/history1) · [Group introduction](https://shinhangroup.com/kr/about/group/intro)

Today’s official narrative is customer-centered and future-facing: the group says its mission is to benefit the world through finance and defines “warm finance” as pursuing ways suited to new environments so customer, Shinhan, and society can grow together. The corporate site’s dedicated OneShinhan typeface and CI system are the most direct public brand-expression evidence in this packet; the supplied routes do not justify claims about the private visual system of every banking channel. [Mission and vision](https://shinhangroup.com/kr/about/group/mission) · [Typeface](https://shinhangroup.com/kr/about/identity/typeface)

### Principles

1. **Customer-centered finance.** The group calls customer-centeredness its highest value. *UI implication:* not derived here — this requires a documented product interaction rule.
2. **Easier, more comfortable, newer finance.** This is the published group vision. *UI implication:* not derived here — this requires a product-surface component or journey source.
3. **Right, fast, different.** These are published organizational core values. *UI implication:* not derived here — this requires first-party design guidance before conversion into UI rules.

### Personas

Shinhan Bank has not provided the specific user-segment facts needed to create reference personas. Do not invent customer names, ages, tasks, or motivations.

## Colors

### Official identity

- **Shinhan Blue** (`#0046ff`): official CI primary color. It is brand guidance, not a measured public banking CTA in this packet.
- **White** (`#ffffff`): official CI white and an observed corporate/internet-banking surface value.

### Observed group corporate surface

- **Live corporate blue** (`#005df9`): observed in the group-corporate capture; retained separately from the official CI primary.
- **Group ink** (`#24272d`): observed group-corporate text.
- **Group surface** (`#f3f6fb`): observed Family Site selector background.
- **On-dark** (`#ffffff`): observed corporate action-link text and border.

### Observed public internet banking

- **Banking text** (`#666666`): most frequent sampled text color on `bank.shinhan.com` and `www.shinhan.com` public routes.
- **Banking link blue** (`#2d71c4`): observed on the internet-banking text link (§4).
- **Page-top fill** (`#4f4d4c`) and **menu-grid rule** (`#dcdcdc`): observed on the internet-banking page-top control and menu-grid cells (§4).

### Observed www.shinhan.com public page

- **Recommendation fills** (`#aadaff`, `#7ae6e9`): observed on two product recommendation cards on the public-marketing page (§4); they are not internet-banking colors.

No semantic success, error, warning, hover, pressed, or disabled color is promoted: the bundle holds no state frame for any element (checked 2026-09-29) and no interaction record. Corrected 2026-09-29: the July text grounded this on the zero interaction count alone, which covers dialog, tab, menu, and form records only.

## Typography

### Evidence classes

- **Live computed product-surface use:** **Spoqa** is loaded/high-confidence, with 311 visible uses and two matching `image.shinhan.com` FontFace sources on the captured public internet-banking routes. Its observed base body sample is 14px / 400 / 17.5px with -0.28px tracking.
- **Live computed corporate-surface use:** **Pretendard** is loaded/high-confidence, with 95 visible uses and four group-hosted FontFace sources. Its selector-backed action links are 16px with 46px line-height; this is corporate-site evidence, not an authenticated bank-app specification.
- **Official distributed brand asset plus live use:** **OneShinhan** is the group’s dedicated typeface; the official typeface page describes Bold, Medium, and Light weights and digital optimization. The artifact also records 15 loaded/high-confidence visible uses from three group-hosted FontFace sources, including a 46px / 700 corporate hero. No public redistribution or end-user license terms were located in the reviewed official source, so no license is inferred. [Official typeface page](https://shinhangroup.com/kr/about/identity/typeface)
- **Declared-only:** `swiper-icons` and `w2ui-font` each have an `@font-face` declaration but zero visible use. They remain implementation assets, not UI families.
- **System/fallback:** Verdana, 돋움, Dotum, Apple SD Gothic Neo, Apple Gothic, and generic sans-serif occur as fallback declarations only; they are not substitutes for the loaded first families.

### Observed hierarchy

| Role | Family | Size | Weight | Line height | Surface boundary |
|------|--------|------|--------|-------------|------------------|
| Public banking body | Spoqa | 14px | 400 | 17.5px | Internet banking public routes |
| Corporate action link | Pretendard | 16px | 400 | 46px | Group corporate marketing page |
| Corporate brand hero | OneShinhan | 46px | 700 | normal | Group corporate hero |

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `typography.brand-hero.lineHeight`: `normal`

## Layout

The captured internet-banking routes use a compact public-information register, while the group corporate page uses a 92px navigation context and 48px corporate actions. This pass did not capture a responsive product layout, grid contract, or authenticated task flow; no global container, breakpoint, or card-grid rule is asserted.

### Responsive Behavior

Not established in the supplied artifact. The retained measurements are desktop-route observations; no responsive contract is inferred.

## Elevation & Depth

The retained selector-backed corporate controls have `box-shadow: none`. No reusable elevation scale is established by the supplied artifact.

## Motion & Easing

No first-party motion tokens, transitions, or reduced-motion rules were observed in the supplied artifact or located in the reviewed official sources.

## Components

### Group corporate marketing page

**Outline action — observed default**
- Background: `rgba(0, 93, 249, 0.3)`
- Text: `#ffffff`
- Border: 1px solid `#ffffff`
- Radius: 30px
- Height: 48px
- Padding: 0px 56px 0px 24px
- Font: 16px / 400 Pretendard
- Use: `surface-2::[data-omd-capture="13"]`, `.roundbt.ico.link.type2`; corporate marketing action link.

**Download action — observed default**
- Background: `rgba(255, 255, 255, 0.2)`
- Text: `#ffffff`
- Border: 1px solid `#ffffff`
- Radius: 30px
- Height: 48px
- Padding: 0px 48px 0px 24px
- Font: 16px / 500 Pretendard
- Use: `surface-2::[data-omd-capture="26"]`, `.roundbt.ico.down.type2`; corporate marketing download link.

**Family Site selector — observed default**
- Background: `#f3f6fb`
- Text: `#24272d`
- Radius: 24px
- Height: 48px
- Padding: 0px 20px
- Font: 16px / 400 Pretendard
- Use: `surface-2::[data-omd-capture="40"]`, `.btn_selct`; group header selector, with no observed expanded-menu state.

The three components above are corporate-marketing controls only; they must not be restyled or relabeled as SOL Bank or transaction UI.

The components below were transcribed on 2026-09-29 from the same 2026-07-13 bundle; nothing was re-measured. The bundle holds no state frame for any element, so every component here is a default-only record.

**Top-level navigation link — observed default**
- Background: transparent
- Text: `#ffffff`
- Padding: 0px 36px
- Height: 92px
- Font: 18px / 700 OneShinhan
- Use: `surface-2::[data-omd-capture="1"]`, `a.depth1`, six per page; white over the hero slider at capture time. Its `li.gnb_li` container computes `#24272d` / 16px / 500, which is not the link style.

**Header selector — observed default**
- Background: transparent
- Text: `#ffffff`
- Padding: 1px 6px 1px 8px
- Height: 36px
- Font: 18px / 700 OneShinhan
- Use: `surface-2::[data-omd-capture="7"]`, a two-character `button.btn_selct` in the header; it shares its class with the Family Site selector but computes a transparent, white-text treatment.

**Circular icon link — observed default**
- Background: `rgba(255, 255, 255, 0.2)`
- Radius: 50%
- Size: 40px × 40px
- Use: `surface-2::[data-omd-capture="11"]`, `a.golink`, ten per page; its text is visually hidden (1px font, transparent colour), so no label style is declared.

### Public internet banking (bank.shinhan.com)

**Text link — observed default**
- Text: `#2d71c4`
- Font: 16px / 700 Spoqa, line height 20px, tracking -0.32px
- Use: `home::[data-omd-capture="20"]`, `a.w2anchor2.btnLink`.

**More link — observed default**
- Text: `#666666`
- Font: 14px / 400 Spoqa, line height 17.5px
- Padding: 0px 15px 0px 0px (class `bul01`)
- Use: `home::[data-omd-capture="29"]`, `a.w2anchor2.btnMoreTxt`.

**Page-top control — observed default**
- Background: `#4f4d4c`
- Radius: 2px
- Size: 32px × 32px
- Use: `home::[data-omd-capture="55"]`, `a.w2anchor2.btnPageTop`; the same control appears on `www.shinhan.com` (`surface-3::[data-omd-capture="95"]`). Its computed `#666666` / 14px / 400 equal the page's inherited body text, so no label style is declared.

**Menu grid cell — observed default**
- Border: 1px `#dcdcdc` on the top and left edges only (`1px 0px 0px 1px`)
- Size: 154px × 56px
- Use: `home::#wq_uuid_1101`, `li.w2group`, six cells. Its `#666666` / 14px / 400 are container values, so no text style is declared.

### Public shinhan.com page

**Product recommendation card — observed default**
- Background: `#aadaff`; the second card fills `#7ae6e9`
- Padding: 30px 0px 25px
- Size: 232px × 257px
- Use: `surface-3::#grp_prod1` (`li.w2group.recom1`) and `surface-3::#grp_prod2` (`recom2`) on the public-marketing page, not internet banking. Their `#666666` / 14px / 400 are container values, so no text style is declared.

Corrected 2026-09-29: the July text said no selector-backed internet-banking button, card, or similar component was retained for this pass; the bundle holds the text link, more link, page-top control, and menu-grid cells above. The July §4 components were documented in prose only; all eleven components are now frontmatter components with claims.

---
**Verified:** 2026-07-13
**Tier 1 sources:** supplied `artifacts/reference-evidence/shinhanbank.json`; https://bank.shinhan.com/index.jsp#010800000000; https://www.shinhangroup.com/kr/main; https://www.shinhan.com/index.jsp; https://shinhangroup.com/kr/about/identity/ci; https://shinhangroup.com/kr/about/identity/typeface
**Tier 2 sources:** https://getdesign.md/shinhanbank (attempted; no usable record); https://styles.refero.design/?q=shinhan (attempted; no usable record)
**Conflicts unresolved:** none

Official CI and live corporate blue are retained as different evidence domains.

### States

The supplied artifact reports `interactionCount: 0`, and its `surfaces[].elements[]` hold no `::state-hover`, `::state-pressed`, or `::state-focus` frame (checked 2026-09-29), so no pointer state is declared for any component. Corrected 2026-09-29: the July text leaned on the zero interaction count, which covers dialog, tab, menu, and form records only; the absence of state frames is the actual basis. Empty, loading, error, success, validation, disabled, and reduced-motion treatments require a first-party product-surface capture or official documentation.

## Do's and Don'ts

### Do

- Treat official CI `#0046ff` and observed group-site `#005df9` as separately sourced values.
- Use OneShinhan only where the corporate-brand context and loaded typeface evidence apply.
- Keep corporate action links and the Family Site selector within the group-corporate context documented above.

### Don't

- Substitute a system font for Spoqa, Pretendard, or OneShinhan while labeling it as the verified family.
- Turn the corporate marketing controls into banking-product, transfer, or SOL app components.
- Invent hover, pressed, focus, disabled, validation, or transaction states from default-only observations.

## Voice & Tone

The group’s stated mission is “금융으로 세상을 이롭게” and its vision is “더 쉽고 편안한, 더 새로운 금융.” Its official description connects that mission to a mutually growing relationship among customer, Shinhan, and society; the group’s stated core values are “바르게, 빠르게, 다르게.” These are official organizational statements, not evidence for unobserved transactional microcopy. [Mission and vision](https://shinhangroup.com/kr/about/group/mission)

| Context | Supported direction |
|---------|---------------------|
| Corporate brand narrative | Mission- and customer-oriented language grounded in the group’s published vision |
| Public banking navigation | Compact functional labels only where a product-surface sample is available |
| Security, validation, and transaction copy | Not established — requires first-party product copy or a captured state |

**Official voice samples:**
- “금융으로 세상을 이롭게 한다” — group mission.
- “더 쉽고 편안한, 더 새로운 금융” — group vision.
- “바르게, 빠르게, 다르게” — group core values.

## Agent Prompt Guide

Use the reference only with the documented boundary: “Create a Shinhan Financial Group corporate marketing action using the observed 48px, 30px-radius outline link, `rgba(0, 93, 249, 0.3)` background, white border/text, and Pretendard. Do not present it as an online-banking transaction control.” For brand identity, cite the official CI primary `#0046ff`; do not convert it into an unobserved product token.

## Governance

### Known Gaps

- **Contrast, `group-download-action`.** Text `#ffffff` on `#ffffff33` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `banking-text-link`.** Text `#2d71c4` on `#00000000` measures 4.27:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `banking-more-link`.** Text `#666666` on `#00000000` measures 3.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
