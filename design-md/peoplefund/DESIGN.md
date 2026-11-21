---
name: PeopleFund
colors:
  primary: '#ffc32d'
  canvas: '#ffffff'
  ink-secondary: '#2e2e2e'
  color-gray-200: '#c0c0c0'
  color-gray-300: '#979797'
  border: '#d2d2d2'
  success: '#37c94d'
  section-bg: '#f8f8f8'
  charcoal: '#2e303b'
  contact-bg: '#212121'
  error: '#ff4d4f'
  surface: '#f6f6f6'
  color-gray-800: '#444444'
  color-gray-700: '#5a5a5a'
typography:
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Base control wrappers and h1; retained published name, not the largest paragraph group.
  button:
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.2
    use: Product CTA; header download uses a 22px line height.
  nav-sm:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4285714285714286
    use: Community link wrapper; visible child label is 17px/500.
  body-sm:
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.2
    use: Largest paragraph group, 234 characters; this is the current paragraph body size. Legal links use 22px.
  label:
    fontSize: 17px
    fontWeight: 600
    lineHeight: 1.411764705882353
    use: Footer corporate navigation links.
  nav-lg:
    fontSize: 17px
    fontWeight: 500
    lineHeight: 1.411764705882353
    use: Visible community and login labels; product-summary paragraphs also use 17px/500 at 20px.
  caption:
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.3846153846153846
    use: Product status label; 66 paragraph characters.
  display:
    fontSize: 41px
    fontWeight: 600
    lineHeight: 1.3658536585365855
    use: Hero product title paragraphs, 144 characters.
  section:
    fontSize: 29px
    fontWeight: 600
    lineHeight: 1.3103448275862069
    use: Section headings, 37 heading characters; h3 elements in text census.
  subsection:
    fontSize: 23px
    fontWeight: 600
    lineHeight: 1.391304347826087
    use: Contact heading, 25 heading characters.
  caption-sm:
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.3846153846153846
    use: Footnote paragraph, 9 characters.
  card-head:
    fontSize: 19px
    fontWeight: 600
    lineHeight: 1.368421052631579
    use: 'h4 feature/recognition titles: text-census.json roles.other, 8 elements / 67 characters; outside compiler candidate list.'
rounded:
  none: 0px
  button: 8px
  sm: 10px
  pill: 30px
components:
  button-cta:
    type: button
    backgroundColor: '#ffffff'
    rounded: 0px
    height: 46px
    padding: 0px
    typography: 15px / 600
    focus: 'ancestor up3.tf: none -> matrix(1, 0, 0, 1, 0, 0); ancestor up3.op: 0 -> 1'
    use: Product-view button on the image-backed hero; white square surface. Pointer states were not measured; ancestor focus capture may reflect entrance animation.
  button-login:
    type: button
    backgroundColor: '#ffffff'
    border: '#d2d2d2'
    rounded: 10px
    height: 52px
    padding: 13px 20px
    typography: 17px / 500
    hover: '#f6f6f6'
    pressed: '#f6f6f6'
    focus: no brand change
    use: Login button in the white header; visible label is 17px / 500, wrapper is 16px / 400. No form opened or submitted.
  button-download:
    type: button
    backgroundColor: '#2e2e2e'
    textColor: '#ffffff'
    rounded: 10px
    height: 50px
    padding: 15px 20px
    typography: 15px / 600
    hover: '#5a5a5a'
    pressed: '#444444'
    focus: no brand change
    use: App-download button in the white header; dark fill with a white label. Measured by pointer down without completing an activation.
  nav-link:
    type: button
    rounded: 8px
    height: 80px
    padding: 8px 16px
    typography: 17px / 500
    hover: no brand change
    pressed: no brand change
    use: Community navigation link in the white header; transparent wrapper. Visible child label is 17px / 500; keyboard focus was not reached.
  button-faq:
    type: button
    textColor: '#ffffff'
    rounded: 30px
    height: 58px
    padding: 17px 32.24px
    typography: 15px / 600
    hover: no brand change
    pressed: no brand change
    focus: no brand change
    use: FAQ link on the dark contact section; translucent black background, translucent white border and white visible child label.
  product-tab:
    type: button
    textColor: '#2e2e2e'
    rounded: 0px
    height: 106px
    padding: 20px 10px
    typography: 13px / 500
    focus: 'ancestor up1.tf: matrix(1, 0, 0, 1, -190, 0) -> matrix(1, 0, 0, 1, 0, 0)'
    use: Product-selector button beneath the hero on white. Hover did not settle while the carousel was moving and is unmeasured; focus includes carousel translation, not a proven focus design.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
---

# Design System Inspiration of PeopleFund

## Overview

### Visual Theme & Atmosphere

PeopleFund (피플펀드) is the earlier service name of 크플, PFCT's online investment-linked finance platform. The official September 2024 notice announces the service-name change and the move to cple.co.kr. Its FAQ says the change concerns the web address and brand logo, with existing loans and financial services continuing. The measured homepage is the Korean surface at `www.cple.co.kr/` (`lang="ko"`).

The live page mixes a large property-image carousel with white navigation, amber NEW badges (`#ffc32d`), neutral statistics panels and a dark contact band. It is more varied than a purely monochrome investment board: the logo has a green accent, the hero uses architectural imagery, and the three benefit illustrations use green, pink and blue. The square white product CTA and rounded dark app-download button are distinct action styles.

The company's evolution has two separate layers. A March 2024 official story dates its start as 피플펀드 to 27 February 2015 and explains its new corporate name, PFC Technologies. The later service notice expands 크플's intended scope beyond existing investment-linked products to diverse financial content. The corporate story names Hyper Green for PFCT; that does not make it a measured token of this product surface.

#### Earlier record, not re-confirmed on 2026-11-21

This is the earlier wording, retained for continuity. It does not supply current tokens; where it conflicts with measurements above, the current values and Changes since prior take precedence.

PeopleFund (피플펀드), now rebranded as 크플 (Cple), is Korea's online P2P real-estate lending and investment platform, and its design system reads as a confident, minimal financial product with a single bold accent: the brand amber `#ffc32d`.
The canvas is pure white (`#ffffff`) with a soft cool-grey body background (`#f6f6f6`) segmenting content into breathable zones.
Text is set in near-pure black (`#000000`) — not a warmed navy or charcoal — projecting directness and legibility over refinement.
The amber appears almost exclusively on status badges (NOTICE, HOT, NEW, 마감임박) where it punches through the monochromatic field to signal urgency and brand identity simultaneously.

Headings compress tightly: H2 at 29px with -0.4px letter-spacing, H3 at 23px with -0.3px — a controlled but not extreme scale.

What defines PeopleFund's visual character is its flatness and restraint.
There are essentially no drop shadows; the invest-page background (`#f5f5f5`) and the homepage grey (`#f6f6f6`) do separation work by tint alone.
The product cards are white on grey — clean and scannable.
The amber status label is a surgical accent: one color, maximum signal, deployed only where real urgency exists (a product 95% funded, a NOTICE, a HOT ranking).
This is a fintech brand that trusts data density over decoration.

**Key Characteristics:**
- Single brand amber (`#ffc32d`) reserved for status and urgency signals
- Flat depth: no shadows; separation via `#f6f6f6` surface tint
- White cards on grey body — data-board aesthetic for an investment platform
- Tight negative tracking on headings (-0.4px at 29px, -0.3px at 23px and 19px)
- Primary CTA "상품 보러가기": white button, black text, zero radius — deliberately un-styled

### Primary tasks

The homepage offers investment-product viewing, a second-market menu, loans, community, corporate investing information, login, app download and FAQ. Product summaries show a location/product number, annual rate, term and recruitment percentage. No investment or borrowing flow was completed.

Re-confirmed earlier measurements (same values; live control identity evidence):

- Open an investment product from the hero carousel

#### Earlier record, not re-confirmed on 2026-11-21

This is the earlier wording, retained for continuity. It does not supply current tokens; where it conflicts with measurements above, the current values and Changes since prior take precedence.

- Compare listings by return rate and collateral before investing
- Act on a near-closing product before it fills up
- Place an investment and move on to the portfolio
- Borrow short-term bridge financing against a commercial property

### Brand Narrative

The official corporate rebranding story dates the original 피플펀드 launch to 27 February 2015. It says the existing P2P image did not express the company's expanded work in credit management, loan comparison and AI risk management. The 2024 service notice separately changes the 온투금융플랫폼 name to 크플. The story writes the app name as “크레딧플래닛(크플)”; the earlier expansion “크라우드펀딩 플랫폼” is unsupported by that source and is corrected here.

The homepage legal notice identifies “피에프씨테크놀로지스(주)”, with “대표: 이수환”. PFCT is the named operating legal entity, rather than an independently verified parent company. The homepage displays recognition labels including “2019 국무총리 표창”, “블룸버그”, “CNBC” and “IFLR APAC AWARDS”; this is evidence of the site's social-proof presentation, not independent verification of each award.

#### Earlier record, not re-confirmed on 2026-11-21

This is the earlier wording, retained for continuity. It does not supply current tokens; where it conflicts with measurements above, the current values and Changes since prior take precedence.

PeopleFund (피플펀드) was founded in **2015** by **김대윤 (Kim Dae-yoon, CEO)** as a marketplace lending platform connecting individual investors with property-secured borrowers — a model Korea permitted under its P2P lending regulatory framework.
The founding thesis addressed a Korean market inefficiency: retail investors had almost no access to mid-yield instruments between bank deposits (1-2%) and equity risk, while qualified borrowers were underserved by banks with rigid scoring.
PeopleFund proposed a middle path: real-estate-collateralized loans, transparently listed, directly matchable online.

PeopleFund has received recognition including a **2019 국무총리 표창** (Prime Minister's Commendation), coverage from **Bloomberg** and **CNBC**, awards at the **IFLR APAC Awards**, and investment from international firms including **CLSA Capital Partners**.
This institutional recognition is surfaced prominently on the homepage as social proof — appropriate for a platform asking retail investors to commit capital to property loans.

What PeopleFund refuses, visible in its design: the glossy over-promise of neo-bank apps, the lifestyle marketing of mainstream consumer fintech, and the heavy regulatory-compliance aesthetic of old banking.
What it embraces: a data-dense, scannable product board, a single amber urgency signal, and the confidence to let the numbers speak.

### Principles

The official rebranding story keeps the purpose “보통 사람을 위한 보통이 아닌 금융”. For this desktop reference, useful implementation observations are the differentiated action shapes, explicit product metrics and a separate contact band. These are editorial design readings, not a published corporate principles system.

#### Earlier record, not re-confirmed on 2026-11-21

This is the earlier wording, retained for continuity. It does not supply current tokens; where it conflicts with measurements above, the current values and Changes since prior take precedence.

1. **Returns over rhetoric.** The product listings lead with funded percentages and product codes, not marketing copy. *UI implication:* investment card layout prioritizes data fields — funding %, status badge, product ID — before descriptive text.
2. **Single accent, maximum signal.** Amber `#ffc32d` appears only on status labels. *UI implication:* do not add a second accent color; the amber's power comes from its singularity.
Every new use dilutes the urgency signal.
3. **Flat and fast.** No shadows, no depth tricks. *UI implication:* separate content zones with tint (`#f6f6f6`) and hairlines (`#d0d8dc`); avoid elevation layers that add visual noise without adding meaning.
5. **Credibility through specificity.** Awards, partner logos, return rates, and product percentages anchor trust. *UI implication:* always prefer a specific number ("95.1% 마감임박") over a generic quality claim.

### Personas

No user interviews or persona research were opened. Earlier fictional archetypes are retained below as unconfirmed prior content; their demographic and behavioural details are not company facts.

#### Earlier record, not re-confirmed on 2026-11-21

This is the earlier wording, retained for continuity. It does not supply current tokens; where it conflicts with measurements above, the current values and Changes since prior take precedence.

*Personas below are fictional archetypes informed by publicly observable PeopleFund user segments (Korean retail investors, property-secured borrowers), not individual people.*

**박준혁, 38, 서울 강남.** A salaried professional with 2,000만원 in savings looking for yield beyond 2% bank deposits. Compares PeopleFund listings by annual return rate and collateral-to-loan ratio before committing. The amber "마감임박" badge triggers action — he doesn't want to miss a 10%+ product. Trusts the platform because of the Prime Minister's Commendation badge on the homepage; distrusts anything that looks too slick.

**이민정, 44, 인천.** A small business owner who borrowed through PeopleFund for short-term bridge financing on a commercial property. Values the faster approval relative to banks and appreciates seeing her own product listed transparently on the platform — she knows exactly who is funding her loan.

**최동현, 29, 부산.** A first-time P2P investor who downloaded the app after seeing the Bloomberg mention. Starts with 100만원 on a 6-month product. The clean, data-board UI made him trust the platform more than a more "designed" competitor that felt more like a lifestyle brand. He wants a spreadsheet, not a mood board.

## Colors

### Primary

Amber `#ffc32d` paints the twelve NEW labels. White `#ffffff` paints the product CTA and header. This measurement does not support the old assertion that amber is the company's only saturated colour.

### Neutral & Surface

The section background is `#f8f8f8`; the contact band is `#212121`. The statistics panel uses `#2e303b`. The footer and app-download button use `#2e2e2e`. Login has a `#d2d2d2` border and changes from white to `#f6f6f6` on hover and press.

### Text Hierarchy

Paragraph ink has three measured groups: white `#ffffff` ×63, `#2e2e2e` ×22, and `lab(2.51107 0.242703 -0.886115)` ×15. Do not round the Lab ink to black. White is especially common in the repeated hero content. Secondary statistics labels use `#c0c0c0`; muted legal text uses `#979797`.

### Semantic & Dark

The published token name `success` remains attached to `#37c94d`, currently seen as carousel selection/status ink; no transaction-success state was opened. The red and blue numeric deltas are observations of statistics, not proof of error or information semantics.

### Exported colour roles

| token | value | live role |
|---|---|---|
| primary | `#ffc32d` | NEW status badge backgrounds: 12 instances; HTML class bg-[#FFC32D]. It is the retained catalog accent, not a claim that the corporate PFCT brand is amber. |
| canvas | `#ffffff` | White header and CTA background, download/FAQ label ink and the largest paragraph-ink group (63 paragraphs). |
| ink-secondary | `#2e2e2e` | Download button background, product-selector label ink; footer bg-gray-900 also uses this value. |
| color-gray-200 | `#c0c0c0` | Secondary statistics labels; --color-gray-200; text census count 5. |
| color-gray-300 | `#979797` | Muted footer legal text; --color-gray-300; text census count 4. |
| border | `#d2d2d2` | Login border, 1px solid; one surveyed border. |
| success | `#37c94d` | Retained published name; currently also painted on the selected carousel product label. This capture does not establish a transaction-success state. |
| section-bg | `#f8f8f8` | Statistics and investor sections; HTML bg-[#f8f8f8]; two backgrounds in the survey census. |
| charcoal | `#2e303b` | Statistics panel background, HTML bg-[#2e303b]. The former nav-text role is not retained. |
| contact-bg | `#212121` | Contact section background, HTML section bg-[#212121]. |
| error | `#ff4d4f` | Retained published name; currently paints upward numeric deltas via text-[#ff4d4f], not a measured validation error. |
| surface | `#f6f6f6` | Login hover and pressed background; not the current general section background. |
| color-gray-800 | `#444444` | App-download pressed background, --color-gray-800. |
| color-gray-700 | `#5a5a5a` | App-download hover background, --color-gray-700. |

### Declared in the site's CSS, not seen painted

These first-party colour variables are computed on :root, but no surveyed element or measured control painted them. This list is not exported as tokens. The site overrides these scales with its own hex values, rather than using Tailwind’s stock colour values.

| CSS property | value |

|---|---|

| `--color-blue-100` | `#bbe2ff` |

| `--color-blue-200` | `#8dd0ff` |

| `--color-blue-25` | `#f1f9ff` |

| `--color-blue-300` | `#48afff` |

| `--color-blue-400` | `#007dff` |

| `--color-blue-5` | `#f9fcff` |

| `--color-blue-50` | `#e3f4ff` |

| `--color-blue-500` | `#1269ec` |

| `--color-blue-600` | `#0c5cd3` |

| `--color-blue-700` | `#114bbd` |

| `--color-blue-800` | `#073ca4` |

| `--color-blue-900` | `#00308d` |

| `--color-dark-gray` | `#262626` |

| `--color-deep-dark-gray` | `#1b1b1b` |

| `--color-gray-400` | `#828282` |

| `--color-gray-5` | `#fbfbfb` |

| `--color-gray-500` | `#6f6f6f` |

| `--color-gray-600` | `#656565` |

| `--color-green-100` | `#a7ebbe` |

| `--color-green-200` | `#57db84` |

| `--color-green-25` | `#f0fff6` |

| `--color-green-300` | `#1fcc5a` |

| `--color-green-400` | `#19b14d` |

| `--color-green-5` | `#f8fffa` |

| `--color-green-50` | `#dcf9e8` |

| `--color-green-500` | `#159340` |

| `--color-green-600` | `#117533` |

| `--color-green-700` | `#0d5826` |

| `--color-green-800` | `#0a4920` |

| `--color-green-900` | `#083a19` |

| `--color-indigo-100` | `#c0c4ff` |

| `--color-indigo-200` | `#8d99ff` |

| `--color-indigo-25` | `#f2f2ff` |

| `--color-indigo-300` | `#606fff` |

| `--color-indigo-400` | `#3f52ff` |

| `--color-indigo-5` | `#fafaff` |

| `--color-indigo-50` | `#ececff` |

| `--color-indigo-500` | `#3948ec` |

| `--color-indigo-600` | `#2d3cdc` |

| `--color-indigo-700` | `#2835be` |

| `--color-indigo-800` | `#202ba4` |

| `--color-indigo-900` | `#162191` |

| `--color-lime-100` | `#bff4c1` |

| `--color-lime-200` | `#7eee87` |

| `--color-lime-25` | `#f3fdf3` |

| `--color-lime-300` | `#60df6a` |

| `--color-lime-5` | `#f9fef9` |

| `--color-lime-50` | `#e7fce8` |

| `--color-lime-500` | `#16b234` |

| `--color-lime-600` | `#139d2d` |

| `--color-lime-700` | `#0d8323` |

| `--color-lime-800` | `#0e6c1f` |

| `--color-lime-900` | `#045613` |

| `--color-mint-100` | `#b4f6ee` |

| `--color-mint-200` | `#76ebe6` |

| `--color-mint-25` | `#ecfcfb` |

| `--color-mint-300` | `#3de2da` |

| `--color-mint-400` | `#02d1c8` |

| `--color-mint-5` | `#f4fefd` |

| `--color-mint-50` | `#e0f8f7` |

| `--color-mint-500` | `#02b8ae` |

| `--color-mint-600` | `#029f94` |

| `--color-mint-700` | `#02867a` |

| `--color-mint-800` | `#026d60` |

| `--color-mint-900` | `#015447` |

| `--color-orange-100` | `#ffccad` |

| `--color-orange-200` | `#ffa168` |

| `--color-orange-25` | `#fff5ef` |

| `--color-orange-300` | `#ff8b44` |

| `--color-orange-400` | `#ff7b2b` |

| `--color-orange-5` | `#fffaf7` |

| `--color-orange-50` | `#fff0e5` |

| `--color-orange-500` | `#ff6b10` |

| `--color-orange-600` | `#f55d00` |

| `--color-orange-700` | `#d85200` |

| `--color-orange-800` | `#ba4700` |

| `--color-orange-900` | `#983a00` |

| `--color-pink-100` | `#ffc6e3` |

| `--color-pink-200` | `#fe99ce` |

| `--color-pink-25` | `#fff4fa` |

| `--color-pink-300` | `#fe67b5` |

| `--color-pink-400` | `#fe2c99` |

| `--color-pink-5` | `#fffafd` |

| `--color-pink-50` | `#ffeaf5` |

| `--color-pink-500` | `#eb1584` |

| `--color-pink-600` | `#de0475` |

| `--color-pink-700` | `#ca036a` |

| `--color-pink-800` | `#b2005c` |

| `--color-pink-900` | `#970051` |

| `--color-purple-100` | `#d4befb` |

| `--color-purple-200` | `#b48ef8` |

| `--color-purple-25` | `#f9f4ff` |

| `--color-purple-300` | `#955dff` |

| `--color-purple-400` | `#732ff1` |

| `--color-purple-5` | `#fcfbff` |

| `--color-purple-50` | `#f4eefe` |

| `--color-purple-500` | `#602fe4` |

| `--color-purple-600` | `#521ddf` |

| `--color-purple-700` | `#491ac6` |

| `--color-purple-800` | `#3e16a8` |

| `--color-purple-900` | `#33128a` |

| `--color-red-100` | `#ffb7c4` |

| `--color-red-200` | `#ff738c` |

| `--color-red-25` | `#fff6f9` |

| `--color-red-300` | `#ff5170` |

| `--color-red-5` | `#fffbfc` |

| `--color-red-50` | `#ffeff2` |

| `--color-red-500` | `#ff0d38` |

| `--color-red-600` | `#ea002a` |

| `--color-red-700` | `#c80024` |

| `--color-red-800` | `#a6001e` |

| `--color-red-900` | `#840018` |

| `--color-skyblue-100` | `#cbefff` |

| `--color-skyblue-200` | `#9de1ff` |

| `--color-skyblue-25` | `#ebfcff` |

| `--color-skyblue-300` | `#70d3ff` |

| `--color-skyblue-400` | `#2ebfff` |

| `--color-skyblue-5` | `#f5feff` |

| `--color-skyblue-50` | `#e6fbff` |

| `--color-skyblue-500` | `#02b2ff` |

| `--color-skyblue-600` | `#00a5ed` |

| `--color-skyblue-700` | `#0092d3` |

| `--color-skyblue-800` | `#007cb2` |

| `--color-skyblue-900` | `#005f89` |

| `--color-yellow-100` | `#ffe59c` |

| `--color-yellow-200` | `#ffd55e` |

| `--color-yellow-25` | `#fffbe6` |

| `--color-yellow-300` | `#ffcd4b` |

| `--color-yellow-400` | `#ffb712` |

| `--color-yellow-5` | `#fffdf4` |

| `--color-yellow-50` | `#fff7e0` |

| `--color-yellow-500` | `#efa600` |

| `--color-yellow-600` | `#cd8e00` |

| `--color-yellow-700` | `#ab7700` |

| `--color-yellow-800` | `#895f00` |

| `--color-yellow-900` | `#745000` |

### Earlier record, not re-confirmed on 2026-11-21

This is the earlier wording, retained for continuity. It does not supply current tokens; where it conflicts with measurements above, the current values and Changes since prior take precedence.

**Earlier subsection: Primary**
- **Brand Amber** (`#ffc32d`): The single saturated brand accent. Deployed exclusively on status badges (NOTICE, HOT, NEW, 마감임박) to signal urgency on investment listings. Confirmed in Tailwind source class `bg-[#FFC32D]`.
- **Pure White** (`#ffffff`): Canvas, card surfaces, nav background, and button backgrounds.

**Earlier subsection: Neutral & Surface**
- **Surface Grey** (`#f6f6f6`): Body background on the new homepage. Provides gentle section separation without harsh borders.
- **Surface Alt** (`#f5f5f5`): Body background on the invest product listing page — a nearly identical grey variant.

**Earlier subsection: Text Hierarchy**
- **Ink Secondary** (`#2e2e2e`): Slightly softened dark for body text in legacy areas.
- **Muted Grey** (`#6a6a6a`): Secondary body text on the invest listing page — the workhorse muted color for descriptions, metadata, footer text.
- **Muted Light** (`#90a4af`): Light muted for lowest-emphasis elements, placeholders.

**Earlier subsection: Semantic & Dark**
- **Error Red** (`#ff4d4f`): Error and warning states. Measured intensity — not alarming but clearly negative.
- **Success Green** (`#37c94d`): Success / completion states on transaction-level feedback.
- **Progress Blue** (`#2054ae`): Accent for funded-percentage progress bars on investment cards. A secondary accent outside the amber primary.

colors.surface-alt: #f5f5f5

colors.ink: #000000

colors.muted: #6a6a6a

colors.muted-light: #90a4af

colors.hairline: #d0d8dc

colors.footer-bg: #263238

colors.accent-blue: #2054ae

## Typography

### Font Family

Official product use: no opened first-party text explicitly identifies a product typeface. Live-loaded: the survey reports an empty loaded-face list and no @font-face sources. Declared-only: body, h1 and button each declare `Pretendard, sans-serif`; `--font-pretendard` declares `"Pretendard", sans-serif`. Official distributed assets: none verified. Unresolved: whether this environment renders a locally available face or a fallback, and the earlier Lato / Noto Sans KR stack. No family token or specimen is exported. Substitute: none chosen.

### Hierarchy

These are computed size/weight metrics, independent of resolving the rendered family. The largest paragraph character count is 15px/500, not the earlier 16px/400 body assertion. Product-title paragraphs are 41px/600, so the earlier claim of a 29px maximum is contradicted.

| retained or new token | size | weight | measured line height | role |
|---|---|---|---|---|
| body | 16px | 400 | 24px | Base control wrappers and h1; retained published name, not the largest paragraph group. |
| button | 15px | 600 | 18px | Product CTA; header download uses a 22px line height. |
| nav-sm | 14px | 500 | 20px | Community link wrapper; visible child label is 17px/500. |
| body-sm | 15px | 500 | 18px | Largest paragraph group, 234 characters; this is the current paragraph body size. Legal links use 22px. |
| label | 17px | 600 | 24px | Footer corporate navigation links. |
| nav-lg | 17px | 500 | 24px | Visible community and login labels; product-summary paragraphs also use 17px/500 at 20px. |
| caption | 13px | 500 | 18px | Product status label; 66 paragraph characters. |
| display | 41px | 600 | 56px | Hero product title paragraphs, 144 characters. |
| section | 29px | 600 | 38px | Section headings, 37 heading characters; h3 elements in text census. |
| subsection | 23px | 600 | 32px | Contact heading, 25 heading characters. |
| caption-sm | 13px | 400 | 18px | Footnote paragraph, 9 characters. |
| card-head | 19px | 600 | 26px | h4 feature/recognition titles: text-census.json roles.other, 8 elements / 67 characters; outside compiler candidate list. |

### Principles

Use measured size and weight to establish hierarchy; preserve the distinction between wrapper typography and the visible child label. The visible login/community labels are 17px/500 although their wrappers report 16px/400 and 14px/500 respectively. Pretendard remains a declaration, without a loaded-font claim.

### Earlier record, not re-confirmed on 2026-11-21

This is the earlier wording, retained for continuity. It does not supply current tokens; where it conflicts with measurements above, the current values and Changes since prior take precedence.

**Earlier subsection: Font Family**

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Section Heading (H2) | Pretendard | 29px (1.81rem) | 600 | 1.31 (38px) | -0.4px | Homepage section titles |
| Sub-section (H3) | Pretendard | 23px (1.44rem) | 600 | 1.39 (32px) | -0.3px | Feature sub-heads, dark section callouts |
| Card Heading (H4) | Pretendard | 19px (1.19rem) | 600 | 1.37 (26px) | -0.3px | Investment card titles, feature bullets |
| Body | Pretendard | 16px (1.00rem) | 400 | 1.50 (24px) | normal | Standard reading text |
| Nav Link | Pretendard | 16px (1.00rem) | 500 | 1.00 | normal | Top navigation labels |
| Button (CTA) | Pretendard | 15px (0.94rem) | 600 | 1.00 | normal | "상품 보러가기" CTA label |
| Button (Nav action) | Pretendard | 16px (1.00rem) | 400 | 1.00 | normal | Signup/login outline buttons |

**Earlier subsection: Principles**
- **Weight 600 as the heading anchor**: All headings use SemiBold. There is no ExtraBold (800) headline, unlike more expressive KR fintechs like Finda or Toss.
- **Tight tracking at display sizes**: -0.4px at 29px, -0.3px at 23px and 19px. Headlines compress but not dramatically — a measured, professional cadence.
- **400 for body and nav action buttons**: The split between 600 (heading/CTA) and 400 (body/nav-action) is the system's primary hierarchy signal.

typography.family.sans: Pretendard

typography.family.fallback: Lato, "Noto Sans KR", sans-serif

typography.section.tracking: -0.4

typography.section.use: Section headings H2, Pretendard SemiBold

typography.subsection.tracking: -0.3

typography.subsection.use: Sub-section headings H3

typography.card-head.tracking: -0.3

typography.card-head.use: Card headings H4

typography.body.use: Standard body copy

typography.nav.size: 16

typography.nav.weight: 500

typography.nav.lineHeight: 1

typography.nav.use: Nav link labels

typography.button.use: Primary CTA button label

typography.button-nav.size: 16

typography.button-nav.weight: 400

typography.button-nav.lineHeight: 1

typography.button-nav.use: Nav action buttons (signup/login)

## Layout

### Spacing System

Measured control padding is 0 for the product CTA, 13px 20px for login, 15px 20px for app download, 8px 16px for community, 17px 32.24px for FAQ, and 20px 10px for the product selector. This capture does not establish a site-wide spacing scale.

### Grid & Container

At 1440px width the header is horizontal; the architectural hero spans the viewport, a product-selection row follows, and the benefit section has three columns. Company-recognition and investor-logo sections precede the footer. CSS declares `--container-pc-layout-max: 67.5rem`; no mobile layout was measured.

### Whitespace Philosophy

The page combines a large image-led hero with compact numeric statistics and spaced benefit/recognition sections. This is an observation of the desktop layout, not an official density principle.

### Border Radius Scale

0px on the product CTA/selector; 8px on the community link wrapper; 10px on login and app download; 30px on the FAQ link. These values support the exported `none`, `button`, `sm` and `pill` names respectively.

### Earlier record, not re-confirmed on 2026-11-21

This is the earlier wording, retained for continuity. It does not supply current tokens; where it conflicts with measurements above, the current values and Changes since prior take precedence.

**Earlier subsection: Spacing System**
- Base unit: ~4px
- Scale: 3px, 6px, 12px, 20px, 32px, 48px, 64px
- Notable: Card horizontal padding 20px; section vertical gap 48–64px; tight body padding reflecting dense investment-data presentation

**Earlier subsection: Grid & Container**
- Centered single-column hero with investment product carousel as the anchor
- Product listing section: horizontal scrolling card row (visible on homepage)
- Feature sections: 3-up grid (three attraction points)
- Full-width dark sections (`#000000` bg) for "Contact us" callouts with white text H3 headings
- White sections alternate with `#f6f6f6` tinted sections for separation

**Earlier subsection: Whitespace Philosophy**
- **Data density over breathing room**: the product serves investors who want to scan multiple investment options; the layout is relatively dense with information
- **Flat separation**: `#f6f6f6` vs `#ffffff` bands do all separation work, no shadow elevation
- **Single accent per screen**: the amber `#ffc32d` on status badges is the only saturated color; everything else is white, grey, black, and charcoal — so the amber always reads immediately

**Earlier subsection: Border Radius Scale**
- Zero (0px): Primary CTA buttons — deliberately raw and un-styled
- Small (10px): Nav outline action buttons, form inputs
- Medium (8px): Cards and containers — the workhorse
- Pill (30px): Contact/phone/FAQ pill buttons in the dark hero section

spacing.xs: 3

spacing.sm: 6

spacing.md: 12

spacing.base: 20

spacing.lg: 32

spacing.xl: 48

spacing.section: 64

rounded.md: 16

rounded.full: 9999

### Responsive Behavior

#### Breakpoints

Only 1440×1000 was measured. CSS declares `--breakpoint-pc: 1200px` and `--breakpoint-pc-base: 1200`; this is a declaration, not a mobile behaviour measurement.

#### Touch Targets

Desktop heights are 46px product CTA, 52px login, 50px app download, 58px FAQ and 80px community wrapper. Touch behaviour was not tested.

#### Collapsing Strategy

No narrow-screen capture was taken.

#### Image Behavior

Desktop architectural hero imagery and benefit illustrations were observed; responsive image changes were not measured.

Re-confirmed earlier measurements (same values; live control identity evidence):

- Product "상품 보러가기" buttons: 46px height — comfortable for tap

#### Earlier record, not re-confirmed on 2026-11-21

This is the earlier wording, retained for continuity. It does not supply current tokens; where it conflicts with measurements above, the current values and Changes since prior take precedence.

**Earlier subsection: Breakpoints**
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, product carousel becomes single-item; reduced section padding |
| Tablet | 768-1024px | 2-up investment card rows; moderate padding |
| Desktop | 1024px+ | Full layout; horizontal product carousel; 3-up feature grid |

**Earlier subsection: Touch Targets**
- Nav action buttons: 50px height with 20px horizontal padding — generously tappable
- Contact pill buttons: 58px height — large hit area for phone number tap

**Earlier subsection: Collapsing Strategy**
- Hero investment carousel: multi-card horizontal scroll → single centered card on mobile
- H2 headings maintain 29px on mobile (size scale is conservative enough to not compress further)
- Feature 3-up grid → stacked single column on mobile
- Footer: multi-column links collapse to stacked single column

**Earlier subsection: Image Behavior**
- Investment product images carry no shadow at any size — consistent with flat system
- Cards maintain 8px radius across breakpoints

## Elevation & Depth

All six measured controls report `shadow: none` at rest. The login border is 1px `#d2d2d2`; FAQ has a translucent white border. CSS declares `--shadow-card-floating: 0 4px 20px 0 #0003`, which prevents a claim that the whole system has no shadow styles. A declared shadow is not proof that a particular card paints it.

### Earlier record, not re-confirmed on 2026-11-21

This is the earlier wording, retained for continuity. It does not supply current tokens; where it conflicts with measurements above, the current values and Changes since prior take precedence.

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, no border | Most surfaces — pure flat system |
| Tint (Level 1) | `#f6f6f6` background shift | Card/section separation without elevation |

**Shadow Philosophy**: PeopleFund is a flat, near-shadowless system. Live DOM inspection found `box-shadow: none` across all visible elements. Depth and grouping come from tinted background bands (`#f6f6f6`) and thin `#d0d8dc` hairline borders. This is a deliberate choice for a P2P investment platform: flat UIs load faster on mobile and avoid the "bank software" heaviness that can reduce trust perception in the crowdfunding-adjacent segment. The amber badge does the hierarchy work that shadows would otherwise do.

shadow.none: none

## Motion & Easing

The community wrapper's raw transition is `color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to 0.15s cubic-bezier(0.4, 0, 0.2, 1) 0s`. The other five measured controls report `all 0s ease 0s` on the control itself. Ancestor carousel movement appears in the capture, so zero on the control is not zero motion across the page. No reduced-motion setting was tested.

### Earlier record, not re-confirmed on 2026-11-21

This is the earlier wording, retained for continuity. It does not supply current tokens; where it conflicts with measurements above, the current values and Changes since prior take precedence.

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 100ms | Hover, button press |
| `motion-standard` | 200ms | Card reveal, dropdown, tooltip |
| `motion-slow` | 300ms | Page-level section transition |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, dropdowns, panels |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and minimal — appropriate for a P2P investment platform where the user is making financial decisions, not consuming entertainment. Product cards fade into view at `motion-standard / ease-enter` as the list loads. The amber status badge does not animate — static signals are trusted signals; a pulsing badge would feel like manipulation on a financial platform. No spring or bounce anywhere. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the platform remains fully usable and data-accessible.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on https://peoplefund.co.kr/ → https://www.cple.co.kr/ and https://www.cple.co.kr/product/invest:
- Section headings: "폭풍성장 크플", "세 가지 매력 포인트", "대한민국을 대표하는 크플", "크플과 함께하는"
- Status badges (Tailwind class bg-[#FFC32D]): NOTICE, 마감임박, HOT, NEW
- Products listed: "서울시 양천구 21548호" 94.7% 마감임박, "평택시 독곡동 21577호" 95.1% 마감임박
- H2 29px/600/-0.4px, H3 23px/600/-0.3px, H4 19px/600/-0.3px: all confirmed live
- footer: "회사소개", "뉴스룸", "투자사 소개" nav links
- Recognition on homepage: "2019 국무총리 표창", "CLSA Capital Partners", "블룸버그", "CNBC", "IFLR APAC AWARDS"

blog.pfct.co.kr metadata (2026-07-02): Organization name "피에프씨테크놀로지스(PFC Technologies)" / "피플펀드 PeopleFund"; blog title "PFCT 공식블로그 '피플로그'"; description "보통 사람을 위한 보통이 아닌 금융, 피플펀드 공식 블로그 '피플로그' 입니다." These are brand-owned first-party sources.

Brand narrative: PeopleFund founded 2015 as Korean P2P lending platform; CEO 김대윤. Rebrand to 크플 (Cple) / PFCT (PFC Technologies) publicly visible on sites. These are documented public facts about the company.

Personas are fictional archetypes informed by publicly observable PeopleFund user segments (Korean retail P2P investors, property-secured borrowers). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "single accent maximum signal", "flat and fast as a rejection of banking software heaviness") are editorial readings connecting PeopleFund's observed design to its positioning, not directly sourced PeopleFund statements.
-->

## Components

### Buttons

Product CTA: 180×46px, radius 0, padding 0, 15px/600, white `#ffffff`; its raw ink is `lab(2.51107 0.242703 -0.886115)`. Hover and pressed are UNMEASURED because the carousel moved outside the pointer viewport. The compiler records an ancestor opacity/transform change during keyboard focus; this is not enough to identify an authored focus effect.

Login: 85.2×52px, radius 10px, padding 13px 20px; white with a 1px `#d2d2d2` border. Wrapper 16px/400, visible label 17px/500, raw Lab ink. Hover and pressed fill `#f6f6f6`; focus is `no brand change` after excluding the browser auto outline.

App download: 107.2×50px, radius 10px, padding 15px 20px, 15px/600, white `#ffffff` text on `#2e2e2e`. Hover `#5a5a5a`, pressed `#444444`, focus `no brand change`.

FAQ is a link: 121.3×58px, radius 30px, padding 17px 32.24px. It sits on the dark contact section with `oklab(0 0 0 / 0.2)` fill and a 1px `oklab(0.999994 0.0000455678 0.0000200868 / 0.2)` border. Wrapper 16px/400, visible white label 15px/600. Hover, pressed and focus read `no brand change` after removing the browser auto ring.

### Inputs

No input was present in the homepage survey; signup/login form fields were not opened.

### Cards & Containers

The hero is a carousel of property images with product data and a circular funding graphic. A row of product-selector buttons sits beneath it. The sampled selector is 190×106px with 20px 10px padding and square corners; its visible status label is 13px/500 `#2e2e2e`. Its focus capture includes ancestor translation from -190px to 0. Its hover is UNMEASURED: the probe reported NO SETTLED CHANGE because the carousel was still moving between its reads.

### Badges & Tags

Twelve amber `#ffc32d` NEW labels were counted. Their NEW text has the explicit `text-white` class in the opened homepage HTML; the old black on-amber claim is corrected to white `#ffffff` in prose. No progress-badge or disabled-badge component is exported from this capture.

### Navigation

The header is 80px high. The community link has an 89.6×80px transparent wrapper, 8px radius, 8px 16px padding and a visible 17px/500 label with raw Lab ink. Hover and pressed: `no brand change`; focus: UNMEASURED. It is retained as a link component of type button.

Re-confirmed earlier measurements (same values; live control identity evidence):

- Background: `#ffffff`
- Radius: 0px
- Height: 46px
- Use: "상품 보러가기" (View Products) CTA on each investment card in the hero carousel
- Background: `#ffffff`
- Radius: 10px
- Radius: 30px
- Height: 58px

### Earlier record, not re-confirmed on 2026-11-21

This is the earlier wording, retained for continuity. It does not supply current tokens; where it conflicts with measurements above, the current values and Changes since prior take precedence.

**Primary CTA (View Products)**
- Font: 15px Pretendard weight 600

**Nav Action Outline**
- Border: 1px solid `#d0d8dc`
- Padding: 0px 20px
- Height: 50px
- Font: 16px Pretendard weight 400
- Use: Header signup (투자회원가입) and login (로그인) actions

**Dark Pill (Contact)**
- Background: `rgba(0, 0, 0, 0.2)`
- Border: 1px solid `rgba(255, 255, 255, 0.2)`
- Padding: 17px 32px
- Font: 16px Pretendard weight 400
- Use: Phone number (1600-9613) and FAQ pill buttons on the dark hero section

**Default**
- Background: `#ffffff`
- Border: 1px solid `#d0d8dc`
- Radius: 10px
- Font: 16px Pretendard weight 400
- Use: Standard form inputs for signup, login, and investment flow

**Product Card**
- Background: `#ffffff`
- Radius: 8px
- Use: Investment listing cards on the product board — white on `#f6f6f6` grey background, no shadow

**Feature Card**
- Background: `#f6f6f6`
- Radius: 8px
- Use: Homepage feature highlight sections (three attraction points)

**Status Badge (Amber)**
- Background: `#ffc32d`
- Radius: 0px
- Padding: 3px 6px
- Font: 12px Pretendard weight 600
- Use: Investment product status labels — NOTICE, HOT, NEW, 마감임박 (Near-close)

**Progress Badge (Blue)**
- Background: `#2054ae`
- Text: `#ffffff`
- Radius: 4px
- Font: 12px Pretendard weight 400
- Use: Funded-percentage status on investment card listings

- Background: `#ffffff`
- Height: 80px header
- Active: text `#000000` bold on active nav item
- Right actions: outline signup and login buttons
- Use: Top horizontal sticky nav

**Verified:** 2026-07-02
**Tier 1 sources:** https://peoplefund.co.kr/ (redirects to https://www.cple.co.kr/ — homepage live computed style), https://tech.peoplefund.co.kr/ (PeopleFund engineering tech blog)
**Tier 2 sources:** getdesign.md/peoplefund — not found; styles.refero.design/?q=peoplefund — not found (KR brand, typical Tier-2 gap)
**Conflicts unresolved:** none

components.button-cta.font: 15px / 600 Pretendard

components.button-cta.use: Primary 'View Products' CTA on hero sections

components.button-nav-outline.font: 16px / 400 Pretendard

components.button-nav-outline.use: Nav action buttons — 투자회원가입, 로그인

components.button-dark-pill.bg: rgba(0,0,0,0.2)

components.button-dark-pill.border: 1px solid rgba(255,255,255,0.2)

components.button-dark-pill.font: 16px / 400 Pretendard

components.button-dark-pill.use: Phone/FAQ contact pill buttons on dark hero section

components.badge-status.type: badge

components.badge-status.bg: #ffc32d

components.badge-status.fg: #000000

components.badge-status.radius: 0px

components.badge-status.padding: 3px 6px

components.badge-status.font: 12px / 600 Pretendard

components.badge-status.use: Investment status labels — NOTICE, HOT, NEW, 마감임박

components.badge-progress.type: badge

components.badge-progress.bg: #2054ae

components.badge-progress.fg: #ffffff

components.badge-progress.radius: 4px

components.badge-progress.font: 12px / 400 Pretendard

components.badge-progress.use: Progress / percent-funded status on invest cards

components.card-product.type: card

components.card-product.bg: #ffffff

components.card-product.fg: #000000

components.card-product.radius: 8px

components.card-product.use: Investment product cards on product listing page

components.card-feature.type: card

components.card-feature.bg: #f6f6f6

components.card-feature.fg: #000000

components.card-feature.radius: 8px

components.card-feature.use: Feature highlight cards on homepage sections

components.nav-link.font: 16px / 500 Pretendard

components.nav-link.use: Top nav items — 투자, 대출, 이용안내

components.nav-link.active: text #000000 bold on active

components.input-default.type: input

components.input-default.bg: #ffffff

components.input-default.fg: #000000

components.input-default.border: 1px solid #d0d8dc

components.input-default.radius: 10px

components.input-default.font: 16px / 400 Pretendard

components.input-default.use: Standard form input fields

### States

App download: hover changes `#2e2e2e` to `#5a5a5a`; pressed changes it to `#444444`; focus `no brand change`. Login: hover and pressed `#f6f6f6`; focus `no brand change`. Community: hover and pressed `no brand change`; focus UNMEASURED. FAQ: hover, pressed and focus `no brand change`. Product CTA pointer states are UNMEASURED. The selector's hover did not settle while the carousel was moving and is UNMEASURED. No disabled, empty, validation, loading or transaction-success state was opened.

#### Earlier record, not re-confirmed on 2026-11-21

This is the earlier wording, retained for continuity. It does not supply current tokens; where it conflicts with measurements above, the current values and Changes since prior take precedence.

| State | Treatment |
|---|---|
| **Empty (no invest products matching filter)** | White canvas. Charcoal (`#2e303b`) single line at body size explaining no matching products. No illustration. One plain CTA to reset filter. |
| **Empty (portfolio, no investments yet)** | Muted grey (`#6a6a6a`) text: first-investment prompt with link to product list. Direct, no celebratory onboarding art. |
| **Loading (product list fetch)** | Skeleton white cards on `#f6f6f6` background at product card dimensions, 8px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (portfolio calculation)** | Inline data refreshes with previous values staying visible; spinner next to the yield figure. |
| **Error (investment failed)** | Inline error message with Error Red (`#ff4d4f`) accent. Plain Korean: states what failed and what to do next. No generic "오류가 발생했습니다" alone. |
| **Error (form validation)** | Field-level message below the input. Describes the specific violation and the valid format. |
| **Error (product sold out / 모집완료)** | Status badge changes to "모집완료" (closed). Product card dims. No amber badge — the urgency color retires when the window closes. |
| **Success (investment placed)** | Brief inline confirmation in calm tone. Success Green (`#37c94d`) accent. Next step (view portfolio) linked immediately below. No celebratory animation. |
| **Skeleton** | `#f6f6f6` blocks at final card dimensions, 8px radius, flat pulse consistent with shadowless system. |
| **Disabled** | Muted grey (`#6a6a6a`) text and reduced-opacity surface; amber status signals disappear on disabled products. |

## Do's and Don'ts

### Do

Reproduce the measured action distinctions: square white product CTA, 10px rounded dark download button, outlined login and pill-shaped FAQ link. Keep the download hover and pressed greys distinct. Use the computed typography metrics without claiming an unresolved font loaded.

### Don't

Do not extend the NEW badge's amber into an asserted universal corporate palette. Do not convert the browser auto outline into a brand focus token. Do not generalise homepage observations into transaction success, error or loading states.

### Earlier record, not re-confirmed on 2026-11-21

This is the earlier wording, retained for continuity. It does not supply current tokens; where it conflicts with measurements above, the current values and Changes since prior take precedence.

**Earlier subsection: Do**
- Reserve amber (`#ffc32d`) for urgency and status signals — NOTICE, HOT, NEW, 마감임박
- Separate sections with flat tinted surfaces (`#f6f6f6`) and `#d0d8dc` hairlines, not shadows
- Apply tight negative letter-spacing to headings (-0.4px at 29px, -0.3px at 23px)
- Use 0px radius on the primary product CTA button — its un-styled nature signals content confidence

**Earlier subsection: Don't**
- Spread amber across decorative elements — dilutes the urgency signal
- Use drop shadows for elevation — PeopleFund is a flat system
- Use a second accent color outside `#ffc32d` and `#2054ae` — palette discipline is the system's restraint
- Apply large pill radius to product cards or standard buttons — only contact/phone pill buttons use 30px
- Use light font weights (300 or below) for headings — SemiBold (600) is the minimum heading weight
- Use warm-tinted greys for text — `#000000` and `#2e303b` are the text colors; keep them cool and direct

## Voice & Tone

The live copy is specific and action-oriented: “상품 보러가기”, “손쉬운 투자”, “높은 수익률”, “다채로운 상품”. Support copy says “고민하지 말고 물어보세요” and “빠르고 친절하게 설명해 드릴게요”. The current title reads “크플 - 대한민국 1위 온투금융(투자, 대출)”. This supports an editorial reading of concise benefits and approachable support; it does not establish an official forbidden register.

### Earlier record, not re-confirmed on 2026-11-21

This is the earlier wording, retained for continuity. It does not supply current tokens; where it conflicts with measurements above, the current values and Changes since prior take precedence.

PeopleFund's voice is **direct, data-forward, and quietly ambitious** — a platform that speaks to investors as rational adults who want yields and returns, not lifestyle aspirations.
The section headline "폭풍성장 크플" ("Storm-growth Cple") reads as bold shorthand for performance, not hype.
Copy is dense and numeric — funding percentages (95.1%), product codes (21548호), annualized return rates — because the user is here to decide whether to commit capital.

| Context | Tone |
|---|---|
| Hero / section headings | Bold and declarative. "폭풍성장", "세 가지 매력 포인트." Confident without adjective-stacking. |
| Investment product labels | Data-first: percentage funded, product ID, status (마감임박 / 모집중). |
| Status badges | Single-word urgency. NOTICE · HOT · NEW · 마감임박. Amber background does the emphasis work. |
| CTAs | Plain imperatives. "상품 보러가기" (View Products). No exclamation marks. |
| Feature descriptions | Benefit-summarized: "손쉬운 투자", "높은 수익률", "다채로운 상품" — three-word benefit anchors. |
| Contact / support | Direct. "고민하지 말고 물어보세요" (Don't hesitate, just ask) — approachable but not casual. |

**Voice samples (verbatim from live homepage):**
- "폭풍성장 크플" — section heading (performance claim, colloquial strength). *(verified live 2026-07-02)*
- "세 가지 매력 포인트" — feature section heading (structured promise). *(verified live 2026-07-02)*

**Forbidden register**: vague lifestyle marketing ("unlock your financial future"), undifferentiated safety claims without numbers, exclamation-mark-driven urgency, cute mascot language. The amber badge handles urgency — copy stays numeric and factual.

## Agent Prompt Guide

### Quick Color Reference

Amber NEW `#ffc32d`; white `#ffffff`; download/footer `#2e2e2e`; hover `#5a5a5a`; pressed `#444444`; login border `#d2d2d2`; login hover `#f6f6f6`; pale section `#f8f8f8`; contact `#212121`.

### Example Component Prompts

“Build the measured app-download button: 50px high, 10px radius, 15px/600 white label, `#2e2e2e` fill, 15px 20px padding; hover `#5a5a5a`, pressed `#444444`. Leave the font face unresolved.”

“Build an outlined login action: 52px high, 10px radius, 1px `#d2d2d2` border, 13px 20px padding, white fill changing to `#f6f6f6` on hover and press, visible 17px/500 label.”

### Iteration Guide

Match the control's visible label, geometry and measured states before extending the pattern. Use the current measurements above; the earlier prompts below are archived instructions, not verified implementation advice.

### Earlier record, not re-confirmed on 2026-11-21

This is the earlier wording, retained for continuity. It does not supply current tokens; where it conflicts with measurements above, the current values and Changes since prior take precedence.

**Earlier subsection: Quick Color Reference**
- Brand accent / status: PeopleFund Amber (`#ffc32d`)
- Background: Pure White (`#ffffff`)
- Tinted surface: Surface Grey (`#f6f6f6`)
- Muted text: Muted Grey (`#6a6a6a`)
- Error: `#ff4d4f`
- Success: `#37c94d`
- Progress/accent: Blue (`#2054ae`)

**Earlier subsection: Example Component Prompts**
- "Create a hero section on white background. Section heading 29px Pretendard SemiBold (600), letter-spacing -0.4px, color #000000. Below it, a product card row: white #ffffff cards on #f6f6f6 surface, 8px radius. Amber status badge #ffc32d, black text, 0px radius, 3px 6px padding, 12px 600. CTA button: white bg, black text, 0px radius, 15px 600, 46px height — 'View Products'."
- "Design a product card: white #ffffff background, 8px radius, no shadow. Title 19px Pretendard weight 600 -0.3px tracking, black. Metadata 16px weight 400 #6a6a6a. Amber badge top-left #ffc32d for status. Progress indicator in blue #2054ae."
- "Create a dark hero callout section: #000000 background, white text. H3 heading 23px Pretendard 600 -0.3px, white. Two pill contact buttons: rgba(0,0,0,0.2) bg, black text, 1px solid rgba(255,255,255,0.2) border, 30px radius, 58px height, 16px weight 400."

**Earlier subsection: Iteration Guide**
1.
2.
Amber (`#ffc32d`) is for urgency signals only — NOTICE, HOT, NEW, 마감임박
3.
No shadows — separate with `#f6f6f6` tint and `#d0d8dc` hairlines
4.
CTA button is 0px radius — un-styled white on dark bg sections
5.
6.
Negative tracking on headings: -0.4px at 29px, -0.3px at 23px and 19px
7.
