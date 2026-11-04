---
name: Classting
colors:
  primary: '#00c896'
  brand: '#00c896'
  ct-green-700: '#17a27e'
  green-050: '#effffb'
  canvas: '#fafafb'
  foreground: '#424242'
  muted: '#757575'
  on-primary: '#ffffff'
  surface: '#ffffff'
  surface-mint: '#edf9f6'
  surface-lavender: '#faf5ff'
  accent-purple: '#9f7aea'
  accent-orange: '#ed8936'
  accent-blue: '#4299e1'
  outline-label: '#ed872d'
  outline-border: '#ed872c'
  footer: '#f9f9fa'
  legal-ink: '#9e9e9e'
  feature-surface: '#f8f8f8'
  dark-section: '#100f10'
  palette-black: '#000000'
  hero-gradient-from: '#a640ff'
  hero-gradient-to: '#4671ff'
typography:
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: 'Marketing .txt-body CSS declaration: 24px line-height'
  label:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1
    use: Measured header navigation and filled button; .txt-subbutton declaration
  display-md:
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.5
    use: 'Marketing .display-md CSS declaration: 42px line-height'
  display-lg:
    fontSize: 42px
    fontWeight: 700
    lineHeight: 1.2857142857142858
    use: 'Marketing .display-lg CSS declaration: 54px line-height; ratio derived as 54/42'
  display-x-lg:
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.2142857142857142
    use: 'Marketing section display .display-x-lg CSS declaration: 68px line-height; ratio derived as 68/56'
  hero:
    fontSize: 100px
    fontWeight: 700
    lineHeight: 1.26
    use: 'Marketing hero .display-xx-lg CSS declaration: 126px line-height'
rounded:
  sm: 6px
  md: 8px
  lg: 16px
  banner: 24px
spacing:
  xs: 4
  sm: 8
  md: 16
  base: 16
  lg: 24
  xl: 32
  xxl: 48
  section: 64
omitted:
  - section: components
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Noto Sans KR
---

# Design System Inspiration of Classting

## Overview

### Visual Theme & Atmosphere

Classting connects teachers, students and parents through everyday school communication and AI-assisted learning. CT's company history dates the service to 2012, founded by 조현구, 유재상 and 윤요한 as a classroom social network. Its March 2025 announcement explains that the company changed its name to CT, while Classting remained a service name. The October 2026 [Classting brand guide](https://www.ctcorp.ai/brand-guidelines/classting/ko/) now brings everyday communication and Classting AI into one product family: green identifies actions, purple identifies AI-produced material, and a green-to-indigo signature connects the two.

The live homepage has a white header with a green wordmark, a large white headline over purple and blue glass-like imagery, and a purple-to-blue primary link. Below it, large headings introduce diagnosis, recommended learning, student motivation and teacher feedback. Pale feature panels and white rounded blog cards soften the page. The measured homepage is the Korean-language root edition (`www.classting.com/`, HTML `lang="ko"`); it did not redirect to a regional path.

Two generations are visible in the evidence. The live marketing surface uses Noto Sans KR, 6px header buttons, 8px hero links, and a lavender-purple trial link. The October product guide specifies Pretendard and Inter, 14px product buttons, green action labels and a deeper purple for AI. Use the measured values below to reproduce this public marketing page; use the explicitly labelled guide rules when designing the documented product identity. Neither surface establishes the appearance of a signed-in classroom dashboard.

#### Primary tasks

The opened homepage and feature pages describe diagnosing knowledge gaps, recommending questions through FastTrack, checking individual and class reports, revisiting wrong answers, and following learning rankings. The public page offers introduction enquiries, entry to Classting, a trial link and case-study articles. The personalized-learning page describes teachers distributing AI assessments and using the resulting learning data; the self-directed-learning page describes student learning labels, rankings and a journey map.

### Brand Narrative

The company's own history starts in 2012 with a classroom social network, records an AI personalized-learning service in 2016, and describes a broader AI education platform and later international expansion. Its 2025 company-name announcement explains the Cognitive Technologies name and retention of the Classting service name. The current company history reports passing ten million Classting registrations in 2026 and launching Cognity. These are the company's dated claims, not independently audited user totals.

The live product page promotes CLST-based knowledge tracing and a maximum 91.5% correct-answer prediction rate. The personalized-learning page describes diagnosis followed by remedial learning, adapting questions to a student's responses and using learning history to recommend subsequent questions. The opened sources do not establish the earlier reference's ELO combination or its claim of a weekly prediction of which pupils will fall behind.

The current identity makes the relationship between communication and AI explicit. The October guide says the existing C symbol and wordmark shapes are retained while colour changes; everyday actions stay green and AI output gets a distinct purple signal. Its English mission remains “We Accelerate Human Learning with Technology”. The design direction therefore joins familiar school communication with identifiable AI assistance, without changing the corporate site's typography into a product token.

### Principles

These principles are grounded in the opened product guide and feature descriptions:

1. **Keep action and AI attribution legible.** Green tells users what to do; purple identifies AI-produced material so it can be reviewed separately.
2. **Keep the two products recognizably related.** The guide describes everyday communication and AI tools sharing the teacher's day and a login; its identity signature connects them.
3. **Make diagnosis usable.** The personalized-learning page describes identifying weak learning elements and selecting remedial study. This supports explaining results and next steps, not an unverified rule about every onboarding path.
4. **Explain the boundary of a number.** The guide asks copy to state what was counted and what was excluded.
5. **Use the signature sparingly.** The guide limits gradient identity to specific placements so it reads as a signature instead of becoming the default work-surface treatment.
6. **Broaden access to learning.** The company vision imagines children learning at the same pace regardless of birthplace. This is a stated ambition; it does not establish free-tier entitlements or measured equality of outcomes.
7. **Use accumulated learning evidence.** The personalized-learning FAQ says recommendations draw on the problems a student has studied, and become more precise for a unit as the student studies it further. This does not establish a rule that every interface interaction produces a new insight or a trend chart.

### Personas

No research personas were verified; the official guide identifies teachers, parents and students as everyday users, but supplies no evidence for the earlier fictional profiles' ages, class sizes, locations, routines or purchasing behaviour.

## Colors

The survey found 291 computed root custom properties and 297 declared names. The product theme accounts for 285 root properties; six further root properties belong to the site's Webflow layer. The declaration-only Stitches marker and five React Loading Skeleton properties are excluded from brand tokens. The full variable list and ownership decisions are in the report.

### Live marketing palette

| Value | Evidence and role |
|---|---|
| `#00c896` | `--colors-ct-green-500` and `--ct-green-500`; the header's filled button and the green brand identity. The hero link also has this underlying background, covered by its gradient. |
| `#17a27e` | `--colors-ct-green-700`; the bundle's `.txt-body.ct-green-700` accent. It was **not** observed as a hover colour on the tested controls. |
| `#effffb` | Exact conversion of `--colors-ct-green-050: rgb(239, 255, 251)`. This declared theme value is different from the Webflow mint surface. |
| `#424242` | Foreground in `.txt-body` and display CSS; measured blog-card heading and navigation text. |
| `#757575` | Supporting card copy and its “자세히 보기” label; the most frequent text colour in the census. |
| `#9e9e9e` | Actual `<p>` ink in the census, two paragraphs in the legal/footer area. Most marketing copy uses other elements, so this is not a general body-copy recommendation. |
| `#ffffff` | White card surface and visible CTA labels. |
| `#fafafb` | Neutral section background in Webflow CSS and a background in the rendered census. Cards themselves are white. |
| `#f8f8f8` | `.flow-section-box` fill; 13 backgrounds in the census. |
| `#f9f9fa` | Footer wrapper's `--colors-gray-050: hsl(240,11%,98%)`, corroborated by the census. |
| `#edf9f6` | `.tag-service` mint fill; a stop in declared feature-section washes. |
| `#faf5ff` | Lavender section fill, also present in the rendered background census. |
| `#9f7aea` | Measured “무료 체험하기” fill; older marketing purple and gradient-text stop. |
| `#ed8936` | Webflow `--orange-500` and orange fill/heading variants; CSS evidence, not a measured orange button. |
| `#4299e1` | Webflow `--blue-500` and blue fill/heading variants; also a declared data-heading gradient endpoint. |
| `#ed872d` / `#ed872c` | Declared pricing-outline label / 1px border respectively. Neither variant was state-probed. |
| `#100f10` | Dark section background recorded in the census. |
| `#000000` | Declared `--colors-black`, not the measured footer background. |
| `#a640ff` → `#4671ff` | Visible primary hero gradient, measured as `linear-gradient(135deg, rgb(166, 64, 255), rgb(70, 113, 255))`. |

The census counted 502 rendered elements. Backgrounds were led by `#f8f8f8` ×13 and white ×12; text by `#757575` ×41 and `#424242` ×40. These are element counts, not screen-area percentages.

The bundle retains heading gradients: `.gradient-green` runs `#00c896` → `#9f7aea`; `.gradient-self` reverses that order; `.gradient-ai` runs `#9f7aea` → `#f56565`; `.gradient-data` runs green → `#4299e1`. Those are CSS definitions, not evidence that the current hero uses gradient text. The current hero headline is white.

### Documented October 2026 product palette

The product guide keeps brand green `#00c896`, with dark `#053a2a` primary-button text, hover fill `#00b386`, focus `#00a077` and green text/icon ink `#00785a`. It assigns AI material purple `#6941d7`, darker ink `#5b36c4`, chip fill `#edeaff`, paragraph wash `#f7f5fe` and line `#dcd7fe`. These are official product specifications; they were not observed on the measured marketing controls.

Its neutral roles are page `#fbfbfc`, card/sheet/input `#ffffff`, filled chips and disabled fields `#f2f1f4`, separators `#e6e4e9`, placeholders `#ababab`, secondary text `#6a6873`, and main text `#26242b`. Documented dark-mode surfaces are `#141317` and `#1d1c21`; no live dark-mode page was measured. Status fills are `#319751` positive, `#eb881f` caution and `#cc272e` danger, with darker text counterparts `#00672d`, `#7e4503` and `#94020d`.

The documented signature has five stops: `#00c896` at 0%, `#02cfc8` at 20%, `#12b6e8` at 45%, `#5f8be7` at 72%, `#5b4bd6` at 100%. Symbol and app icon use 135°; the wordmark shares one horizontal gradient across its letters. The guide reserves this signature for identity, splash/key visuals and narrowly specified arrival markers for AI results. It explicitly excludes gradients from ordinary buttons, backgrounds and charts. That rule differs from the live marketing hero's purple-to-blue button.

## Typography

### Evidence classes

- **Official product use:** the October Classting guide specifies Pretendard for Korean screens and Inter for English screens, each at 400, 600, 700 and 800. It separates these from the corporate guide's heading faces. This is documentation evidence for the product, not proof that the marketing page has adopted every weight.
- **Live-loaded:** the homepage census lists `Noto Sans KR 400 normal`, `Noto Sans KR 500 normal`, `Noto Sans KR 700 normal`, and `Pretendard 700 normal`. Body, first `h1` and first button declare Noto Sans KR. Noto is requested through Google Fonts; Pretendard 700 is served as a first-party Webflow-project WOFF2 subset on `cdn.prod.website-files.com`. The loaded-face list does not map every glyph to its rendered face.
- **Official distributed assets:** the guide identifies the wordmark's origin as Frankfurter Com Medium, with modified outlined paths. It distributes outline SVGs, including the AI letters, and explicitly withholds font files because web licensing is unresolved and the held file has Preview & Print embedding status. Frankfurter is logo metadata, not an interface family; no font specimen is provided here. No asset files were downloaded.
- **Declared-only or request-only on the measured homepage:** Pretendard 400, 500 and 800 have `@font-face` subset declarations but were not loaded. `--fonts-roboto: Roboto` is a theme declaration without a loaded face. Noto Sans HK is requested in the Google Fonts stylesheet URL but absent from the loaded list; a Traditional Chinese edition was not opened. Inter is officially specified but neither loaded nor declared as a homepage face in this census. None receives a live specimen here.
- **Unresolved:** there is no verified monospaced role, no verified Noto Sans HK deployment on another locale, and no confirmed webfont licence for Frankfurter. The Google Fonts sheet was CSSOM-unreadable, so its individual font-file URLs were not captured. Substitute: none chosen.

The Webflow bundle also declares `webflow-icons`, and a local stylesheet declares `slick`. These are framework icon faces, not product typography; neither appears in the loaded list.

### Marketing scale

These are current served CSS declarations; the label and card-title measurements independently corroborate the corresponding rows.

| Role / selector | Size | Weight | Line-height |
|---|---:|---:|---:|
| Hero `.display-xx-lg` | 100px | 700 | 126px |
| Large section `.display-x-lg` | 56px | 700 | 68px |
| Feature `.display-lg` | 42px | 700 | 54px |
| Section `.display-md` | 28px | 700 | 42px |
| Card title `.display-sm` | 20px | 500 | 28px |
| Body `.txt-body` | 16px | 400 | 24px |
| Visible hero/trial label `.txt-button` | 16px | 500 | 16px |
| Header / `.txt-subbutton` | 14px | 500 | 14px |

The Stitches font-size tokens `size-60`, `size-80`, `size-100`, `size-120`, `size-140`, `size-150` resolve to 0.75rem, 0.875rem, 1rem, 1.125rem, 1.25rem and 1.5rem: 12, 14, 16, 18, 20 and 24px at the 16px base. Theme regular/medium/bold weights remain 400/500/700. The frontmatter's 54/42 and 68/56 line-height ratios are calculated from the Webflow declarations; they do not replace the differently named theme line-height tokens.

### Documented product scale

The October guide specifies page title 30px/800/1.3; headline 24px/700/1.4; section title 16px/600/1.5; body and controls 15px/400/21px; secondary body 14px/400/1.5; label 12px/600/1.4; and numeric badge 10px/700/1. It avoids English-style uppercase labels and wide tracking in the Korean interface. These documented metrics remain useful without rendering an unloaded English face as a specimen.

## Layout

The served Webflow `.container` declares width 100%, max-width 1280px and 16px side padding. The `.consult` banner has its own 1248px maximum, and `.pricing-tab-pane` declares 1280px. A 1248px inner width follows from a 1280px border-box container with two 16px paddings; that arithmetic is not a second independently measured container.

Layout uses flex rows and columns, explicit gaps and `space-between` in definitions such as `.container.hori`, `.consult` and `.flow-section-box.hori`. The hero's two links have a declared 12px gap, corroborated by x=507/719 and 200px widths in the state capture. Blog cards are presented in a three-column row at the captured desktop width. The current feature boxes declare a pale fill and 24px radius.

The retained spacing values are 4, 8, 16, 24, 32, 48 and 64px. The theme's complete ordinary sequence `--space-01` through `--space-07` is 0.25, 0.5, 0.75, 1, 1.25, 1.5 and 2rem. Its layout sequence `--space-layout-01` through `-09` is 1.5, 2.25, 3, 3.5, 4, 4.5, 5.5, 6 and 7.5rem. At the 16px base those are 24, 36, 48, 56, 64, 72, 88, 96 and 120px. Several major sections use 120px margins or padding; this is not a claim that every section does.

The October product guide separately specifies a 4px spacing unit. No grid for a signed-in product screen was measured.

### Responsive Behavior

Only a 1440×1000 desktop viewport was captured. The following are **served CSS rules**, not mobile screenshots:

- At `max-width: 767px`, `.display-x-lg` becomes 36px/44px, `.display-lg` becomes 28px/36px, and `.display-md` becomes 24px/32px. The current `.display-xx-lg` hero becomes 40px/50px.
- `.consult` changes from padding 64px 106px to 36px 20px in that range, with modifier-specific overrides.
- `.flow-section-box.hori` stacks at `max-width: 991px`; `.flow-inner-hori` stacks and 50%/43%/61% box variants become 100% at `max-width: 767px`. These marketing rules are different from the Stitches header breakpoint.
- The Stitches `.c-iVvIjq` nav is hidden by default and displayed as flex at `min-width: 720px`. The body background changes from the gray-200 theme value to white at `min-width: 540px` in that inline stylesheet.
- Fill-button definitions include width 100%; `.button.main-btn` declares 200px. The source does not support a universal rule that every CTA becomes full-width only on mobile.

No responsive state, shipping selector, mobile navigation interaction or dark-mode transition was measured.

## Elevation & Depth

The blog-card wrapper has a diffuse 12px shadow at 5% black. The root theme also exposes `--shadows-sm-centered: 0px 2px 12px rgba(0,0,0,0.08)`. The older green accent shadow remains a CSS declaration on `.img-tab`: `0 5px 25px #00c89614`; that selector is a tab image, not an observed focus ring or CTA card.

The theme has additional shadows with 4px and 8px blurs: `--shadows-sm` is `0px 2px 4px rgba(0,0,0,0.08)`, `--shadows-md` is `0px 2px 4px rgba(0,0,0,0.16)`, and `--shadows-lg` / `--shadows-xl` use 8px blur at 0.24 / 0.36 opacity. They contradict a blanket rule excluding 4px/8px shadows. They are declared theme values, not proof of a visible elevation ladder in the signed-in product.

The declared mobile backdrop is `hsla(0, 0%, 0%, 0.45)` and popup overlay `hsla(0,0%,0%,0.6)`. Neither overlay was visible in the viewport. The measured controls themselves have no shadow; `.tag-service` has no shadow declaration.

For the documented product, the guide gives shadow geometry `0 16px 40px -18px`, tinted from body colour `#26242b`; it does not supply an alpha in the explanatory text, so none is inferred here. The identity key visual uses angled translucent glass tiles, kept outside ordinary work screens.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.subtle`: `rgba(0, 0, 0, 0.05) 0px 0px 12px 0px`
- `shadow.raised`: `0px 2px 12px rgba(0,0,0,0.08)`
- `shadow.accent`: `0 5px 25px #00c89614`

## Motion & Easing

Every measured control reports the exact computed transition `all 0s ease 0s`. Samples settled for 900ms, and the probe found no longer transition; the settling delay is a measurement procedure, not a brand motion duration. No authored transition curve was observed on these controls.

The follow-up controls `header-login`, `nav-audiences`, `nav-features`, `nav-resources`, `intro-action` and `ebook-card` each also returned `all 0s ease 0s`. Their hover and pressed comparisons included background images, opacity, shadows and transforms; none supplied an authored motion token. A separate menu panel's motion remains unmeasured.

The source's shorter timings belong to specifically identified declarations: Webflow's framework `.w-slider-dot` has `transition: background-color .1s, color .1s`, and `.w-lightbox-control` has `transition: all .3s`. Those rules do not establish a product-wide micro-interaction or panel token. The testimonial slider markup has `data-duration="500"` and `data-easing="ease"` (500ms metadata); it is not navigation timing, and its running animation was not measured.

The first-party placeholder declaration has `animation:pulse 1.5s ease-in-out infinite`; this is not evidence of the earlier claimed shimmer appearance. The October guide limits product movement to state changes and caps it at 0.5 seconds. Reduced-motion behaviour was not verified.

---

**Inspected:** 2026-11-03. Live measurement: https://www.classting.com/. First-party narrative and typography direction: [CT company](https://www.ctcorp.ai/ko/), [2025 name-change announcement](https://blog.classting.com/classting-to-ct/), [Classting brand guide](https://www.ctcorp.ai/brand-guidelines/classting/ko/), [personalized learning](https://www.classting.com/features/personalized-learning), [self-directed learning](https://www.classting.com/features/self-directed-learning). Current marketing definitions: [served Webflow CSS](https://cdn.prod.website-files.com/642a57a169d01c4b3830b2b5/css/classting-aac463.webflow.shared.26cb0c416.css). Country/operator: [terms](https://policies.classting.com/ko/terms) and the homepage's legal footer. The report and verification notes retain the raw measurements, source distinctions and prior-content dispositions.

## Components

### Measured public controls

Every row is a distinct element from the survey. Fonts below describe the visible label; the hero/trial anchors themselves inherit 16px/400 and `#333333`, while their child labels supply the displayed white 16px/500 text. All six controls have no self box-shadow.

| Key and identity | Width × height | Radius / padding | Visible type | Rest appearance |
|---|---|---|---|---|
| `hero-consult` — link “도입 문의하기”, `/consult` | 200 × 60px | 8px / 20px 24px | Noto Sans KR 16px/500, line 16px | 135° `#a640ff` → `#4671ff` over `#00c896`; white label; no border |
| `hero-start` — link “시작하기”, `/home` | 200 × 60px | 8px / 20px 24px | Noto Sans KR 16px/500, line 16px | Transparent over the hero image; white label; 2px white border |
| `nav-stories` — nav link “활용사례” | 85.5 × 44px | 6px / 0px 16px | Noto Sans KR 14px/500, line 14px | Transparent on the white header; `#424242`; 1px transparent border |
| `trial-cta` — link “무료 체험하기” | 140.8 × 56px | 8px / 20px 24px | Noto Sans KR 16px/500, line 16px | `#9f7aea` / white; no border |
| `learning-card` — article link “AI 코스웨어의 성능을 평가하는 가장 좋은 방법” | 423.9 × 401px | Anchor 0px / 0px | Heading Noto Sans KR 20px/500; parent line 16px | Transparent anchor over a white card wrapper; heading `#424242`, copy `#757575` |
| `header-signup` — button “회원가입” | 85.5 × 44px | 6px / 1px 16px | Noto Sans KR 14px/500, line 14px | `#00c896` / white; 1px green border |

The card's **wrapper**, `.card-blog`, has the 16px radius and the measured `rgba(0, 0, 0, 0.05) 0px 0px 12px 0px` shadow. Its `.card-bottom` child declares padding 24px 20px. Do not assign those wrapper measurements to the zero-radius anchor itself.

No interactive entry is emitted in `tokens.components`: every measured hover/press was unchanged, every focus-only indication was the browser's `auto` ring, and the card's additional image-source change persisted after blur. These controls remain reproducible from the observations above.

### Follow-up: six different public controls

The second survey supplied six additional elements, without repeating the initial hero, trial, signup, navigation-link or article-card controls. The outlined login button, three menu buttons, white introduction action and another article card have the following identities:

| Key and identity | Width × height | Radius / padding | Visible type | Rest appearance |
|---|---|---|---|---|
| `header-login` — button “로그인” | 72.6 × 44px | 6px / 1px 16px | Noto Sans KR 14px/500, line 14px | White `#ffffff`; green `#00c896` label and 1px solid border |
| `nav-audiences` — menu button “적용대상” | 85.5 × 44px | 6px / 1px 16px | Noto Sans KR 14px/500, line 14px | Transparent on the white header; `#424242`; 1px transparent border |
| `nav-features` — menu button “주요 기능” | 89.4 × 44px | 6px / 1px 16px | Noto Sans KR 14px/500, line 14px | Transparent on the white header; `#424242`; 1px transparent border |
| `nav-resources` — menu button “유용한 자료” | 102.3 × 44px | 6px / 1px 16px | Noto Sans KR 14px/500, line 14px | Transparent on the white header; `#424242`; 1px transparent border |
| `intro-action` — link “소개서 다운로드”, `#` | 155.5 × 56px | 8px / 16px 24px | Noto Sans KR 16px/500, line 16px | White `#ffffff`; child label `#9f7aea`; anchor inherits `#333333`; no border |
| `ebook-card` — article link “[E-book] AI 에듀테크를 통한 수학 기초학력 결손 해소” | 423.9 × 401px | Anchor 0px / 0px | Heading Noto Sans KR 20px/500; anchor 16px/400, line 16px | Transparent anchor over white `.card-blog`; heading `#424242`; anchor inherits `#333333` |

All six have self `box-shadow: none`, `background-image: none`, opacity `1` and transform `none`. Their measured hover and pressed snapshots produced no change within the compared scope. Keyboard focus added `rgb(0, 95, 204) auto 1px`, offset 0px on the four buttons and 1px on the two links. The ebook image-source change remained after blur and is excluded as a focus state. None qualifies for an additional interactive token.

The menu hover crops show a white panel edge below the buttons. Panel properties outside the buttons, their descendants and the sampled ancestor styles were not measured; the unchanged readings do not establish absence of a menu response. The introduction link was measured without activation, form submission or a file download.

### Other definitions retained from the served bundle

These are **CSS definitions**, not newly measured interactive components:

- `.button-md-container-fill` declares green `#00c896`, 8px corners, padding 15px 16px and width 100%. Its `.black` variant declares `#424242`; `.bg-orange-500` declares `#ed8936`. The separate `.txt-subbutton` class is 14px/500/14px. The current hero uses the different 60px geometry above.
- `.button-md-container-fill-pricing.bg-purple-500-copy` declares a transparent background, `#ed872d` text and a 1px `#ed872c` border with padding 20px 24px. Its base pricing class declares 8px corners. Its visible label and state behaviour were not measured.
- `.consult` declares green `#00c896`, radius 24px, padding 64px 106px, margin-top 120px and max-width 1248px. Modifier classes can change this fill and padding; the base declaration is not a universal banner measurement.
- `.tag-service` declares mint `#edf9f6`, radius 6px, padding 8px and a 4px gap. `.bg-orange-100` changes its fill to `#fffaf0`. A typography association for a rendered tag was not established.

### Documented product geometry

The October guide specifies card radius 16px, button 14px, small box 12px and pill-shaped chips. It specifies a thin card border by default, with shadows reserved for hover/active cards. Its main action example uses dark `#053a2a` text on green; it explicitly rejects white text on that fill. The measured header still uses white text, so the guide example is not represented as a live state of that button.

### States

All six measured controls matched `:hover` during the hover sample and `:active` during the pressed sample; no computed-style/attribute changes were found in those passes. Keyboard focus reached all six through real Tab presses. Each gained a browser-default outline `rgb(0, 95, 204) auto 1px`; its offset was 1px on links and 0px on the header button. This is browser behaviour, not a brand focus token.

For `hero-consult`, `hero-start` and `trial-cta`, comparison covered self, one descendant, their pseudo-elements and three ancestor levels. For `nav-stories` and `header-signup`, it covered self, zero descendants, pseudo-elements and three ancestors. For `learning-card`, it covered eight descendants, including two image elements, their pseudo-elements and three ancestors. The property set includes colours, backgrounds and images/positions, borders, drawn outlines, shadows, opacity, transforms, filters, decoration, size, masks, image sources and SVG attributes. It cannot prove the absence of pixel-only video/canvas changes or changes outside this DOM scope.

On the card, an image current-source change appeared during focus and remained after blur. It is excluded as focus evidence; only the browser ring was focus-specific. The two states files contain no observed disabled or error state. An input/search control was absent from the homepage survey.

For reference, the root theme declares gray-300 `hsl(0,0%,88%)`, input-active border `hsl(165,100%,39%)`, disabled input fill `hsl(0,0%,96%)`, disabled input border `hsl(0,0%,74%)`, and red-600 `hsl(0,76%,57%)`. These are declarations, not measurements of a skeleton or an input's focus, disabled or validation behaviour. The served button CSS declares disabled opacity 0.5 and `pointer-events: none`; no disabled button was tested.

A first-party placeholder rule declares width 5rem, height 2.5rem, gray-100 fill, 6px radius and a pulse animation. It was not observed as a diagnostic or dashboard loading screen. No class-feed empty screen, assignment-success toast, network-error flow or live skeleton was opened.

## Do's and Don'ts

For a reconstruction of the public homepage, match the measured hero gradient, white child labels, 8px hero-link corners, 6px header controls and layered card geometry. Keep the lighter mint and lavender values attached to their actual CSS roles; the green-050 theme value is a different colour.

For a new screen following the October product guide:

- Use green for the primary action and everyday navigation; use purple to identify AI-produced output. The guide calls for one main action per screen, including on AI screens.
- Use dark green text on the green primary button, green ink for text/icons, and the darker specified focus colour.
- Keep the five-stop signature on its documented identity/key-visual placements and initial AI-result marker. Do not put it on ordinary buttons or charts.
- Preserve logo proportions and its shared wordmark gradient; do not restart the gradient on each letter or recolour the symbol arbitrarily.
- Place a white logo over the key visual. Keep long body text off that image; the guide reserves it for large headings and identity.
- Use documented Pretendard/Inter product typography, rather than treating the public page's Noto Sans KR as a rule for every product screen. No substitute is chosen.

The older bundle's mint-to-lavender school wash and heading gradients remain useful when reproducing those declared marketing styles. They are not permission to apply those gradients throughout the newly documented product.

## Voice & Tone

The October guide asks for short, polite Korean 해요체, an explanation of what a count includes or excludes, and human wording for an empty screen. Its example “이번 주에는 아직 없어요” places the absence in a time period rather than issuing an impersonal data-status message. Treat that as documented copy guidance, not an observed empty state.

The public homepage explains a diagnosis → recommendation → successful learning → goal-achievement sequence. It pairs its maximum 91.5% prediction claim with a description of cold-start estimation, and its personalized-learning page explains how assessment can save a teacher distribution and grading effort. These are concrete examples of the site's product explanation; they do not establish an exhaustive voice policy or validate its performance claims independently.

## Agent Prompt Guide

Use a concrete surface in the prompt so that the older public page and the newer documented product do not become a hybrid.

- **Public hero:** “Build the captured Classting marketing hero with white Noto Sans KR heading text. Use a 200×60px primary link, radius 8px, padding 20px 24px, a 135° gradient from `#a640ff` to `#4671ff`, and a white 16px/500 label. Its transparent secondary sibling has the same dimensions and a 2px white border.” The 100px/126px hero heading is a CSS declaration; 56px/68px belongs to `.display-x-lg` section display.
- **Public blog card:** “Use a white 16px-radius wrapper, a 5% black 12px shadow, and a zero-radius inner article link. Put 24px 20px padding on the text region; use a 20px/500 heading and `#757575` supporting text.”
- **Retained marketing wash:** `.section.school-main` declares `linear-gradient(120deg, #edf9f6, #faf5ff)`. The mint tag definition uses a 6px radius and 8px padding. These are specific CSS recipes, not measurements of a signed-in classroom screen.
- **October product direction:** specify green actions, purple AI attribution, the documented 14px button geometry and the font evidence in §3. Follow the guide's restricted gradient placements. No unmeasured hover, error, disabled or loading appearance should be filled in.
