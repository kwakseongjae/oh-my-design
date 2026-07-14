---
id: shinhanbank
name: Shinhan Bank
display_name_kr: 신한은행
country: KR
category: fintech
homepage: "https://bank.shinhan.com"
primary_color: "#0046ff"
logo:
  type: github
  slug: Shinhan-Bank
verified: "2026-07-13"
added: "2026-06-22"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: internet-banking, kind: product-surface, url: "https://bank.shinhan.com/index.jsp#010800000000", inspected: "2026-07-13" }
    - { id: group-corporate, kind: corporate-marketing, url: "https://www.shinhangroup.com/kr/main", inspected: "2026-07-13" }
    - { id: shinhan-public, kind: public-marketing, url: "https://www.shinhan.com/index.jsp", inspected: "2026-07-13" }
    - { id: group-ci, kind: brand-guideline, url: "https://shinhangroup.com/kr/about/identity/ci", inspected: "2026-07-13" }
    - { id: group-typeface, kind: brand-asset, url: "https://shinhangroup.com/kr/about/identity/typeface", inspected: "2026-07-13" }
  sources:
    - { id: banking-live, kind: product-surface, url: "https://bank.shinhan.com/index.jsp#010800000000", captured: "2026-07-13" }
    - { id: group-live, kind: product-surface, url: "https://www.shinhangroup.com/kr/main", captured: "2026-07-13" }
    - { id: shinhan-live, kind: product-surface, url: "https://www.shinhan.com/index.jsp", captured: "2026-07-13" }
    - { id: official-ci, kind: brand-asset, url: "https://shinhangroup.com/kr/about/identity/ci", captured: "2026-07-13" }
    - { id: official-typeface, kind: brand-asset, url: "https://shinhangroup.com/kr/about/identity/typeface", captured: "2026-07-13" }
    - { id: official-history, kind: official-doc, url: "https://shinhangroup.com/kr/about/group/history1", captured: "2026-07-13" }
    - { id: official-mission, kind: official-doc, url: "https://shinhangroup.com/kr/about/group/mission", captured: "2026-07-13" }
  claims:
    "tokens.colors.brand-primary": &ci { surface_id: group-ci, source_id: official-ci, method: official-brand-guideline, captured: "2026-07-13" }
    "tokens.colors.group-live-blue": &group_live { surface_id: group-corporate, source_id: group-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.group-ink": *group_live
    "tokens.colors.group-surface": *group_live
    "tokens.colors.canvas": *group_live
    "tokens.colors.on-dark": *group_live
    "tokens.colors.banking-text": &bank_live { surface_id: internet-banking, source_id: banking-live, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.family.banking": *bank_live
    "tokens.typography.banking-body.size": *bank_live
    "tokens.typography.banking-body.weight": *bank_live
    "tokens.typography.banking-body.lineHeight": *bank_live
    "tokens.typography.banking-body.tracking": *bank_live
    "tokens.typography.banking-body.use": *bank_live
    "tokens.typography.family.group": *group_live
    "tokens.typography.group-action.size": *group_live
    "tokens.typography.group-action.weight": *group_live
    "tokens.typography.group-action.lineHeight": *group_live
    "tokens.typography.group-action.tracking": *group_live
    "tokens.typography.group-action.use": *group_live
    "tokens.typography.family.brand": &typeface { surface_id: group-typeface, source_id: official-typeface, method: computed-style-and-official-brand-asset, captured: "2026-07-13" }
    "tokens.typography.brand-hero.size": *group_live
    "tokens.typography.brand-hero.weight": *group_live
    "tokens.typography.brand-hero.lineHeight": *group_live
    "tokens.typography.brand-hero.use": *group_live
    "tokens.spacing.group-action-inline": *group_live
    "tokens.spacing.group-action-leading": *group_live
    "tokens.spacing.group-selector-inline": *group_live
    "tokens.rounded.group-action": *group_live
    "tokens.rounded.group-selector": *group_live
  conflicts: []
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Official CI, corporate-marketing, and internet-banking observations remain separate; the packet contains no authenticated SOL banking surface or interaction snapshots."
  colors:
    brand-primary: "#0046ff"
    group-live-blue: "#005df9"
    group-ink: "#24272d"
    group-surface: "#f3f6fb"
    canvas: "#ffffff"
    on-dark: "#ffffff"
    banking-text: "#666666"
  typography:
    family: { banking: "Spoqa", group: "Pretendard", brand: "OneShinhan" }
    banking-body: { size: 14, weight: 400, lineHeight: "17.5px", tracking: "-0.28px", use: "Observed on the public internet-banking surface only." }
    group-action: { size: 16, weight: 400, lineHeight: "46px", tracking: "-0.5px", use: "Observed on group corporate action links only." }
    brand-hero: { size: 46, weight: 700, lineHeight: "normal", use: "Observed group-corporate hero only." }
  spacing: { group-action-inline: 24, group-action-leading: 56, group-selector-inline: 20 }
  rounded: { group-action: 30, group-selector: 24 }
  components_harvested: true
  components: {}
---

# Design System Inspiration of Shinhan Bank

## 1. Visual Theme & Atmosphere

Shinhan Bank is the banking subsidiary in Shinhan Financial Group’s network. The group traces Shinhan Bank’s start to 1982 and describes its current vision as making finance easier, more comfortable, and newer. The supplied public evidence shows that this idea is expressed through separate registers rather than one interchangeable UI system: the public internet-banking surface is compact, Spoqa-led, and largely neutral in its sampled text; the group corporate site is more editorial, with OneShinhan display type, Pretendard controls, white-on-image action links, and a pale-blue Family Site selector. The document deliberately keeps those surface domains apart. [Official history](https://shinhangroup.com/kr/about/group/history1) · [Group vision](https://shinhangroup.com/kr/about/group/mission)

The durable brand layer is clearer than any one website implementation. Shinhan’s official CI specifies Shinhan Blue `#0046ff`, alongside white and a defined blue secondary range. The corporate site’s observed `#005df9` is recorded separately as a live surface value, not silently substituted for the CI color. The group’s own typeface page names OneShinhan as a dedicated face for consistent brand identity and describes Bold, Medium, and Light weights optimized for digital environments. [Official CI](https://shinhangroup.com/kr/about/identity/ci) · [Official typeface page](https://shinhangroup.com/kr/about/identity/typeface)

**Key Characteristics:**

- Official identity blue `#0046ff`; separately observed corporate-site blue `#005df9`
- Loaded OneShinhan, Pretendard, and Spoqa with distinct live-surface provenance
- Corporate actions use 24–30px rounded outlines; the captured internet-banking text sample is denser and square-cornered
- No authenticated mobile-banking, transfer, account, or checkout UI is represented by this packet

## 2. Color Palette & Roles

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

No semantic success, error, warning, hover, pressed, or disabled color is promoted: the artifact reports zero interaction snapshots.

## 3. Typography Rules

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

## 4. Component Stylings

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

The packet has no selector-backed internet-banking button, field, card, tab, badge, dialog, or error component retained for this pass. The three components above are corporate-marketing controls only; they must not be restyled or relabeled as SOL Bank or transaction UI.

---
**Verified:** 2026-07-13
**Tier 1 sources:** supplied `artifacts/reference-evidence/shinhanbank.json`; https://bank.shinhan.com/index.jsp#010800000000; https://www.shinhangroup.com/kr/main; https://www.shinhan.com/index.jsp; https://shinhangroup.com/kr/about/identity/ci; https://shinhangroup.com/kr/about/identity/typeface
**Tier 2 sources:** https://getdesign.md/shinhanbank (attempted; no usable record); https://styles.refero.design/?q=shinhan (attempted; no usable record)
**Conflicts unresolved:** none

Official CI and live corporate blue are retained as different evidence domains.

## 5. Layout Principles

The captured internet-banking routes use a compact public-information register, while the group corporate page uses a 92px navigation context and 48px corporate actions. This pass did not capture a responsive product layout, grid contract, or authenticated task flow; no global container, breakpoint, or card-grid rule is asserted.

## 6. Depth & Elevation

The retained selector-backed corporate controls have `box-shadow: none`. No reusable elevation scale is established by the supplied artifact.

## 7. Do's and Don'ts

### Do

- Treat official CI `#0046ff` and observed group-site `#005df9` as separately sourced values.
- Use OneShinhan only where the corporate-brand context and loaded typeface evidence apply.
- Keep corporate action links and the Family Site selector within the group-corporate context documented above.

### Don't

- Substitute a system font for Spoqa, Pretendard, or OneShinhan while labeling it as the verified family.
- Turn the corporate marketing controls into banking-product, transfer, or SOL app components.
- Invent hover, pressed, focus, disabled, validation, or transaction states from default-only observations.

## 8. Responsive Behavior

Not established in the supplied artifact. The retained measurements are desktop-route observations; no responsive contract is inferred.

## 9. Agent Prompt Guide

Use the reference only with the documented boundary: “Create a Shinhan Financial Group corporate marketing action using the observed 48px, 30px-radius outline link, `rgba(0, 93, 249, 0.3)` background, white border/text, and Pretendard. Do not present it as an online-banking transaction control.” For brand identity, cite the official CI primary `#0046ff`; do not convert it into an unobserved product token.

## 10. Voice & Tone

The group’s stated mission is “금융으로 세상을 이롭게” and its vision is “더 쉽고 편안한, 더 새로운 금융.” Its official description connects that mission to a mutually growing relationship among customer, Shinhan, and society; the group’s stated core values are “바르게, 빠르게, 다르게.” These are official organizational statements, not evidence for unobserved transactional microcopy. [Mission and vision](https://shinhangroup.com/kr/about/group/mission)

| Context | Supported direction |
|---------|---------------------|
| Corporate brand narrative | Mission- and customer-oriented language grounded in the group’s published vision |
| Public banking navigation | Compact functional labels only where a product-surface sample is available |
| Security, validation, and transaction copy | [FILL IN: requires first-party product copy or a captured state] |

**Official voice samples:**
- “금융으로 세상을 이롭게 한다” — group mission.
- “더 쉽고 편안한, 더 새로운 금융” — group vision.
- “바르게, 빠르게, 다르게” — group core values.

## 11. Brand Narrative

Shinhan Financial Group’s history identifies Shinhan Bank’s 1982 founding as the start of the group story, describing origins in the aspirations of Korean residents in Japan and an early contribution to electronic finance and global expansion. The group introduction places the 2001 formation of a financial holding company after that bank origin. [Official history](https://shinhangroup.com/kr/about/group/history1) · [Group introduction](https://shinhangroup.com/kr/about/group/intro)

Today’s official narrative is customer-centered and future-facing: the group says its mission is to benefit the world through finance and defines “warm finance” as pursuing ways suited to new environments so customer, Shinhan, and society can grow together. The corporate site’s dedicated OneShinhan typeface and CI system are the most direct public brand-expression evidence in this packet; the supplied routes do not justify claims about the private visual system of every banking channel. [Mission and vision](https://shinhangroup.com/kr/about/group/mission) · [Typeface](https://shinhangroup.com/kr/about/identity/typeface)

## 12. Principles

1. **Customer-centered finance.** The group calls customer-centeredness its highest value. *UI implication:* [FILL IN: requires a documented product interaction rule.]
2. **Easier, more comfortable, newer finance.** This is the published group vision. *UI implication:* [FILL IN: requires a product-surface component or journey source.]
3. **Right, fast, different.** These are published organizational core values. *UI implication:* [FILL IN: requires first-party design guidance before conversion into UI rules.]

## 13. Personas

[FILL IN: Shinhan Bank has not provided the specific user-segment facts needed to create reference personas. Do not invent customer names, ages, tasks, or motivations.]

## 14. States

[FILL IN: The supplied artifact reports `interactionCount: 0` and no observed state snapshots. Empty, loading, error, success, validation, disabled, and reduced-motion treatments require a first-party product-surface capture or official documentation.]

## 15. Motion & Easing

[FILL IN: No first-party motion tokens, transitions, or reduced-motion rules were observed in the supplied artifact or located in the reviewed official sources.]
