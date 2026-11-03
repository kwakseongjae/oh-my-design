---
name: Fubon
colors:
  primary: '#0093c1'
  canvas: '#ffffff'
  foreground: '#0c0e1f'
  secondary: '#494a57'
  surface: '#f5f5f5'
  surface-subtle: '#f3fbfe'
  rate-surface: '#eef0ef'
  label-surface: '#7d7f87'
  card-border: '#d7d7da'
  on-primary: '#ffffff'
typography:
  nav:
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.389
    use: Credit-card product navigation; computed line height 25.002px
  cta-link:
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.5
    use: Learn-more and more-announcements links
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Announcement links; not a universal paragraph size
  service-label:
    fontSize: 16px
    fontWeight: 400
    use: Visible child label of the online-application service tile
  label:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    use: Article category label and footer legal links
rounded:
  none: 0px
  md: 12px
components:
  apply-link:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#0c0e1f'
    rounded: 12px
    height: 140px
    padding: 40px 12px
    typography: 16px / 400 Roboto
    hover: 'child label fg #0093c1'
    pressed: 'child label fg #0093c1'
    use: 線上申辦 — an action link in the hot-services grid. The visible label is 16px/400; the anchor inherits 25px/400. White background stays unchanged. Pointer snapshots were measured with overlays hidden.
  nav-link:
    type: button
    textColor: '#0c0e1f'
    rounded: 0px
    height: 25px
    padding: 0px
    typography: 18px / 400 Roboto
    hover: 'fg #0093c1; parent menu bg #f5f5f5'
    pressed: 'fg #0093c1; parent menu bg #f5f5f5'
    use: 信用卡 — a transparent product-navigation link on the white header. The grey hover background belongs to the parent menu, not the anchor. Pointer snapshots were measured with overlays hidden; focus colour persisted after blur and is not a focus token.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Roboto
    tc: Noto Sans TC
---

# Design System Inspiration of Fubon

## Overview

### Visual Theme & Atmosphere

Taipei Fubon Bank (台北富邦銀行) provides personal banking, corporate banking, wealth management, credit cards, treasury, trust and public-treasury services. Its company introduction identifies it as a wholly owned subsidiary of Fubon Financial Holding. The bank combines the January 2005 merger of Taipei Bank and Fubon Bank with a continuing investment in digital services. [Company introduction](https://www.fubon.com/banking/about/intro_FBB/index.htm)

The brand combines a white canvas (`#ffffff`), blue actions (`#0093c1`) and deep navy text (`#0c0e1f`). On the personal-banking homepage, a photographic banner sits beside eight white service tiles, followed by exchange rates, protection services, financial education, announcements and contact options. The visible balance is practical: compact financial information alongside larger photographs and rounded shortcuts. This description comes from the captured homepage, rather than an asserted company design principle.

Fubon's official identity explanation connects the mark's curved lines to friendly service and its square lines to stable, honest operation. It describes blue and green together. The group's 2021 brand announcement introduced “正向力量 成就可能,” with the English wording “Be positive All possible.” These sources support a reading of dependable service with an optimistic expression. [Corporate identity](https://www.fubon.com/financialholdings/story/identity.html), [brand announcement](https://www.fubon.com/financialholdings/news/news_1210419_819256.htm)

The digital evolution has a concrete product expression: the official November 2024 Fubon+ announcement describes a fresh visual design, simple and intuitive operation, and integrated financial services. The bank's current service page describes a customer-centred CPC model spanning customer, product and channel. These are product and service directions; this reference measures the public banking website. [Fubon+ announcement](https://www.fubon.com/financialholdings/news/news_1241101_460675.htm), [service strategy](https://www.fubon.com/banking/ESG/FinancialService.html)

The measured homepage is the Taiwan Traditional Chinese personal-banking edition (`www.fubon.com/banking/personal/`, HTML `lang="zh-Hant-TW"`), reached from `/banking/`.

#### Primary tasks

- Compare the displayed foreign-exchange buying and selling rates and open the full rates page.
- Use the online-application, banking-login and consultation shortcuts.
- Find branches, ATMs and accessible facilities through 查詢據點.
- Read announcements, financial education and protection information.

### Brand Narrative

The group dates its origins to Taiwan's first private property-insurance company in **1961**. Taipei Fubon Bank's own history identifies the **January 1, 2005** merger of Taipei Bank and Fubon Bank, followed by the **April 1, 2023** merger with Jih Sun Bank. Its company page currently lists **171 domestic branches**, seven overseas branches and two representative offices. [Brand principles](https://www.fubon.com/financialholdings/story/future.html), [bank history](https://www.fubon.com/banking/about/EN/intro_FBB/index.htm)

The **April 19, 2021** brand announcement introduced the current positive-possibility wording and Run for Green initiative. The **November 1, 2024** Fubon+ announcement supplies a later digital milestone. Together with the live homepage's financial shortcuts, education and protection sections, these sources support a reference that balances an established banking institution with ongoing digital-service development. They do not establish that the app and public website share identical tokens.

### Principles

- **Honesty, friendliness, professionalism and innovation:** the group's explicitly stated values.
- **Customer-centred service:** the bank describes its CPC approach across customer, product and channel.
- **A positive future:** the group's stated mission and 2021 brand wording.
- **Clear task access:** as an observed homepage pattern, a repeated eight-tile service grid puts common banking tasks beside the hero.

The first three are company statements; the fourth is a design reading of the measured page. No unmeasured accessibility-compliance or contrast guarantee is implied.

### Personas

No researched persona evidence was obtained; the prior named fictional customers are not retained as company facts.

## Colors

The live census covers 1,809 elements. There are no first-party custom properties in the census: its variables belong to Swiper and Air Datepicker. The following roles come from rendered colours and the measured controls.

| Role | Value | Evidence and use |
|---|---|---|
| Primary action | `#0093c1` | Blue more-links; hover/pressed label on 線上申辦; hover/pressed credit-card navigation |
| Canvas / service tile | `#ffffff` | White page and measured service tile/card backgrounds; white article-category lettering |
| Foreground | `#0c0e1f` | Most frequent paragraph ink: 45 paragraphs; resting service label and product nav |
| Secondary | `#494a57` | 16 paragraphs; article description and footer legal links |
| Navigation surface | `#f5f5f5` | Credit-card menu wrapper on hover and press |
| Contact surface | `#f3fbfe` | One census background; `.contact-wrap` in the homepage stylesheet |
| Rate surface | `#eef0ef` | Five census backgrounds; the rate-card gradient starts at this colour |
| Article-category surface | `#7d7f87` | Measured grey category label with white text |
| Card border | `#d7d7da` | Measured 1px solid article-card border |

The rate-card CSS declares `linear-gradient(to bottom, #eef0ef, rgba(223, 229, 229, 0.28))`. It is a gradient treatment, so a flat neutral swatch does not fully describe it.

The shared first-party CSS also declares `#006e91` for `.btn.main-btn:hover`, `.art-more-btn:hover` and `.ann-more-btn:hover`; `#00a59b` for `.wrapper .green` and the progress bar; and `#d7d6db` for header dividers and several shared borders. These are stylesheet declarations, separate from measured interactive states. The lower more-links' hover and pressed states were unmeasured in this capture.

## Typography

### Font evidence classes

- **Official product-use statement:** no opened company page specifies the product typeface by name.
- **Live-loaded:** `document.fonts` reports **Roboto** normal weights 300, 400, 500 and 700, and **Noto Sans TC** normal variable weight range 100–900. The body's declared stack starts with `Roboto, "Noto Sans TC", sans-serif`. These loaded faces are the two typography-family entries in the tokens.
- **Serving evidence:** both first-party stylesheets import Google Fonts for these families. The imported CSS was opened and returns font-face sources at `fonts.gstatic.com`. No binary font file was downloaded.
- **Official distributed assets:** no separate Fubon font package or font licence was found in the opened sources.
- **Declared-only:** Arial, Helvetica, 微軟正黑體, Microsoft JhengHei, Apple LiGothic and 蘋果儷中黑 appear later in the body stack but are absent from the loaded-face census. Century Gothic, CenturyGothic and AppleGothic also occur in shared CSS. None receives a specimen or a family token. `swiper-icons` is a declared library icon font, not a product text face.
- **Unresolved:** a per-glyph Latin/Han font attribution was not performed. The census proves loaded faces, not equal optical weight or complete Unicode coverage. **Substitute: none chosen.**

### Measured hierarchy

| Element | Size / weight | Line height | Use |
|---|---|---|---|
| Credit-card product nav | 18px / 400 | 25.002px | Resting product-navigation link |
| More-links | 18px / 500 | 27px | 了解更多 and 更多最新公告 |
| Service-tile child label | 16px / 400 | Not individually captured | 線上申辦; its anchor inherits 25px / 400 |
| Announcement links | 16px / 400 | 24px | Survey announcement rows |
| Article-category label | 14px / 400 | 21px in CSS | 理財文章; measured label box is 90×27px including padding |
| Footer legal links | 14px / 400 | 21px | Footer survey rows |

The shared `.title-primary` declaration is `1.2rem`, bold (700), line-height `1.3334`; the hot-services heading overrides the size to `1rem` and retains bold weight and the inherited line height. At the desktop rem scale evidenced by the 18px/0.9rem links, those sizes correspond to 24px and 20px. These heading metrics are CSS evidence, not separate computed heading probes. The page H1 is hidden by the shared `h1 { opacity: 0; position: absolute; top: 0; left: 0; }` rule.

All six measured control identities report normal letter-spacing. This is a local observation, not a rule forbidding tracking elsewhere.

## Layout

At 1440px viewport width, the content visible in the survey is centred between x=130 and x=1310: a 1,180px content span. The hero is a contained photographic panel beside **two rows of four** quick-service tiles. The background band extends across the viewport; the photographic panel itself does not.

The application tile's measured padding is 40px vertically and 12px horizontally. Rate-card survey padding is 14px 16px 20px. More-links reserve 18px at the right for the arrow. The first academy card's text block declares 0.8rem padding in the homepage CSS. These are element-specific spacings; no universal 4px base or complete spacing scale was verified.

The main content places “全方位守護” and the academy cards side by side, followed by dated announcement rows. Contact and branch options occupy a pale blue band above the footer. The collapsed footer exposes legal/service links at 14px; the expanded sitemap's interactive behavior was not measured.

Measured radius values are **0px** on nav and more-links and **12px** on service tiles and academy cards. Shared CSS also declares 4px on `.list-label-box .label`, 0.8rem (16px at the desktop rem scale) on `.arch-wrap .arch-accordion .group`, and 50% on the floating digital-service button; these are separate declared treatments.

### Responsive Behavior

Only desktop 1440×1000 was captured; mobile layout, breakpoint transitions and touch behavior remain unverified.

## Elevation & Depth

The measured service tile and academy card have `box-shadow: none`. The academy card uses a fine border, while the navigation menu uses a flat grey wrapper on hover. The contact band uses `#f3fbfe`.

The shared `.digital-btn` CSS retains the declaration `5px 5px 30px 0 rgba(0, 0, 0, 0.11)` and 50% radius. Here 30px is the **blur radius**, with zero spread. It is evidence for that floating control's declared styling, not a generic content-card shadow. The shared popup CSS declares `rgba(12, 14, 31, 0.56)` behind a `backdrop-filter: blur(8.9px)`; the prior black 25% scrim does not match this declaration.

## Motion & Easing

The measured service link, product-nav link and academy-card anchor report `transition: all 0s ease 0s`. The two more-links and search trigger report `transition: all 0.4s ease 0s`. The academy focus probe reports a longest descendant transition of 400ms; the homepage CSS assigns a 0.4s transition and scale(1.2) to the card image on hover, but that pointer state was unmeasured.

The comparison waits were 900ms, beyond the reported 400ms transitions. No computed cubic-bezier curve, reduced-motion response, spring, or mobile touch feedback was verified.

## Components

### Online-application service link

“線上申辦” links to `/banking/onlineapply.htm`. Its white `#ffffff` tile measures **88×140px**, with **12px radius**, **40px 12px padding**, no border and no shadow. The visible paragraph label is **16px / 400 Roboto** in `#0c0e1f`; the parent anchor's inherited font is 25px / 400.

On hover and while pressed, only the paragraph label changes to `#0093c1` in the compared snapshot. The tile stays white. There is no additional pressed change relative to hover. Keyboard focus adds the browser's automatic outline, with no authored focus token. The pointer observations used overlay hiding.

### Product-navigation link

“信用卡” (`a#lv2_a_1347.nav-link-p`, href `/banking/personal/credit_card/index.htm`) measures **54×25px**, **0px radius**, **0px padding**, **18px / 400 Roboto**, and 25.002px line height. Its background is transparent over the white header, its resting foreground is `#0c0e1f`, and it has no border or shadow.

Hover and press change the link to `#0093c1` and its immediate menu wrapper to `#f5f5f5`. No underline change was recorded. The focus pass also saw blue text and the grey wrapper, but both persisted after blur into the menu's descendants; they are not promoted as focus-specific tokens. The focus-only outline is browser `auto`.

### More-links and article card

The two more-links retain useful measured geometry even though their pointer states were unmeasured. Both are transparent on white, `#0093c1`, **18px / 500**, **27px high**, **0px radius**, and **0px 18px 0px 0px padding**, with no border or shadow. The academy link spans 578px and the announcement link spans 1,180px; their text aligns at the right of those boxes.

The first academy card is an actual link to the bank's learning site. It measures **280×282px**, **12px radius**, **0px outer padding**, white background, **1px solid `#d7d7da`**, and **no shadow**. Its anchor inherits `#000000` and 25px / 400, but the visible title is `#0c0e1f`, description `#494a57`, category label white on `#7d7f87`, and “前往了解” is `#0093c1`. The shared card CSS declares title 0.9rem / 500 and description 0.7rem. Pointer states are unmeasured; keyboard focus showed only the browser's automatic ring. Keep this as a measured rest treatment rather than a stateful component token.

### Search and shared dialog declarations

The search trigger (`button.search-open`, title “網站搜尋”) is **32×32px**, square, with no padding, border or shadow, transparent on white. Its inherited foreground is `#000000` and inherited font 25px / 400; the visible search image is 18×18px. Hover and pressed snapshots showed no changes within the tool's comparison scope. Keyboard focus is browser `auto`. A visible search-input field was not present in the survey.

Shared CSS declares the popup confirmation fill `#0093c1` with white text and cancellation fill/border `#eef0f0` with `#0c0e1f` text. The paired buttons use one rounded lower outer corner each: first `0 0 0 0.6rem`, last `0 0 0.6rem 0`; their font is 0.8rem bold with line-height 1.5, equivalent to 16px / 700 at the evidenced desktop rem scale. These are declarations for popup buttons, not measured product components. The visible cookie “同意” button is separately measured by the survey as 200×48px, 12px radius, 16px / 500; it is not a catalog component.

The stylesheet's `.btn.disabled-btn` declares background/border `#d7d8da`, foreground `#aeafb4` and `pointer-events: none`. No disabled product control was sampled.

### States

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| 線上申辦 service link | Child label `#0c0e1f` → `#0093c1` | Same as hover | Browser automatic ring only |
| 信用卡 nav link | Text `#0093c1`; parent menu `#f5f5f5` | Same as hover | Browser ring; colour/menu change persists after blur and is not focus-specific |
| 了解更多 | Unmeasured: outside pointer viewport | Unmeasured | Browser automatic ring only |
| 更多最新公告 | Unmeasured: outside pointer viewport | Unmeasured | Browser automatic ring only |
| Search trigger | No change within compared scope | No change within compared scope | Browser automatic ring only |
| First academy card | Unmeasured: outside pointer viewport | Unmeasured | Browser automatic ring only |

The comparison includes the element, its pseudo-elements, descendants and their pseudo-elements, and three ancestor levels. The search trigger has one image descendant; the probe compares its source string but not the internals of the external SVG. Pointer snapshots explicitly matched `:hover` or `:active`, although the later crops failed their state checks. Cookie/rating/floating overlays were hidden for those pointer reads. No empty-result, submission-success, validation-error or skeleton state was measured.

## Do's and Don'ts

### Do

- Use blue `#0093c1` for the measured navigation and service-label interaction.
- Keep the service tiles white and 12px rounded, with a 16px regular label.
- Use `#0c0e1f` for the visible primary labels and `#494a57` for article descriptions.
- Give academy cards a 12px radius and fine `#d7d7da` border.
- Preserve the distinction between the anchor's inherited font/colour and its visible child labels.

### Don't

- Apply the floating control's shadow to the measured academy card, which has none.
- Turn the transparent navigation link into a permanently grey button; the measured grey belongs to its menu wrapper on hover and press.
- Present browser `auto` focus outlines as an authored Fubon ring.
- Treat an unmeasured lower-page hover as unchanged, or infer success/error colours from the company's green logo.

## Voice & Tone

The homepage combines short functional labels—“線上申辦,” “預約諮詢,” “了解更多”—with protective language such as “全方位守護.” Its accessible-service entry reads “361度全方位服務 溫暖多1度.” These observable examples pair direct task naming with a warmer service message. The dated announcement list presents notices as concise titles rather than conversational copy.

The official group brand statement names honesty, friendliness, professionalism and innovation as its values. Its mission describes reliable financial services supporting a positive future and a better life. These are documented brand values; no separate editorial rules or forbidden-word list was found. [Brand principles](https://www.fubon.com/financialholdings/story/future.html)

## Agent Prompt Guide

“Build a Fubon personal-banking service tile: white `#ffffff`, 88×140px, 12px radius, 40px 12px padding, no shadow, an icon above a 16px / 400 Roboto label in `#0c0e1f`. Hover and press change the child label to `#0093c1`.”

“Build a credit-card navigation link on white: 18px / 400 Roboto, 25.002px line height, square corners, no padding, `#0c0e1f` at rest. Hover and press turn the link blue `#0093c1` and the containing menu grey `#f5f5f5`.”

“Build the academy card's measured rest treatment: white, 280×282px, 12px radius, 1px `#d7d7da` border, no shadow. Use `#0c0e1f` for the title, `#494a57` for its description, and a white-on-`#7d7f87` corner category label.”

These prompts reproduce measured desktop treatments. Use the loaded font families described in §3; no substitute has been chosen.
