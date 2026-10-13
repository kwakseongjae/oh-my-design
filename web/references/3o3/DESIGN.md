---
name: 3o3
colors:
  primary: '#fbbd41'
  on-primary: '#000000'
  action-hover: '#237af2'
  action-blue: '#3e79ff'
  slate: '#2f3943'
  canvas: '#ffffff'
  ink: '#000000'
  blog-ink: '#15171a'
  heading: '#2b2f34'
  body-sub: '#606a76'
  muted: '#788391'
  faint: '#a4acb4'
  tag-grey: '#979797'
  selected: '#141618'
  surface: '#f5f6f8'
  tint-blue: '#f3f8ff'
  outline: '#dadee3'
  placeholder: '#f1f1f1'
typography:
  featured-title:
    fontSize: 33px
    fontWeight: 700
    lineHeight: 1.5
    use: White post titles over the blog's lead slider (h2.post-card-title, 792px slides); declared Noto Sans KR stack
  card-title:
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.4
    use: 'Post titles on the blog''s 380px cards, #2b2f34'
  card-title-sm:
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.4
    use: 'Post titles on the blog''s 240px cards, #2b2f34'
  cta:
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.22
    use: Call-to-action labels on the homepage, Noto Sans KR
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    use: 'Blog body text, #15171a'
  excerpt:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: 'Post excerpts on blog cards (div.post-card-excerpt), #788391'
  nav:
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
    use: 'Blog header links (테크, 컬처, 뉴스룸, 라이브러리), #606a76; the computed stack is Poppins, sans-serif, but the labels are Korean, which Poppins does not cover, so they render in the fallback face'
  disclosure:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    use: 'Paragraph copy and the disclosure block on the homepage, Noto Sans KR, #000000'
  tag:
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.5
    use: Topic-filter button labels on the blog (button.btn-tag)
  chip:
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: '-0.07px'
    use: Category chip labels on blog cards (span.post-card-primary-tag)
  tag-list:
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: '-0.07px'
    use: 'Tag line above blog post titles (div.post-card-tags), #979797'
rounded:
  cta: 7px
  image-sm: 16px
  image: 24px
  tag: 24px
  chip: 36px
  pill: 100px
spacing:
  tag-y: 11
  tag-x: 20
  chip-y: 5
  chip-x: 10
  more-y: 16
  more-x: 32
components:
  refund-cta:
    type: button
    backgroundColor: '#fbbd41'
    textColor: '#000000'
    rounded: 7px
    height: 61px
    width: 361px
    typography: 18px / 500 / 22px Noto Sans KR
    hover: 'bg #237af2, fg #ffffff'
    pressed: 'bg #e29929, fg #000000'
    states: 'hover and pressed read from settled frames: the hover frame of every homepage action reads the same #237af2 fill with white text (sibling agreement across captures 0-4) and equals the page''s own #lp-pom-button :hover rules; the pressed frames equal its :active rules; focus is not declared, because the collector''s focus frames only repeat the pressed values'
    use: Primary refund action, three of the five homepage calls-to-action (내 환급금 조회하기 at home::[data-omd-capture="1"], 지금 찾으러 가기, 지금 환급 신청하기), 361 x 61, each linking to app.3o3.co.kr
  eligibility-cta:
    type: button
    backgroundColor: '#2f3943'
    textColor: '#ffffff'
    rounded: 7px
    height: 61px
    width: 361px
    typography: 18px / 500 / 22px Noto Sans KR
    hover: 'bg #237af2, fg #ffffff'
    pressed: 'bg #1e2c3c, fg #ffffff'
    states: hover and pressed from settled frames that equal the page's own :hover and :active rules; focus not declared
    use: 대상자 여부 확인하기 on the homepage at home::[data-omd-capture="2"], 361 x 61
  secure-cta:
    type: button
    backgroundColor: '#3e79ff'
    textColor: '#ffffff'
    rounded: 7px
    height: 61px
    width: 361px
    typography: 18px / 500 / 22px Noto Sans KR
    hover: 'bg #237af2, fg #ffffff'
    pressed: 'bg #2756e6, fg #ffffff'
    states: hover and pressed from settled frames that equal the page's own :hover and :active rules; focus not declared
    use: 안전하게 환급 신청하기 on the homepage at home::[data-omd-capture="4"], 361 x 61
  topic-filter:
    type: tab
    backgroundColor: '#ffffff'
    textColor: '#606a76'
    border: '1px solid #dadee3'
    rounded: 24px
    padding: 11px 20px
    height: 45px
    typography: 14px / 700 / 21px
    selected: 'bg #141618, fg #ffffff, border 1px solid #dadee3 (button.btn-tag.active, capture 29)'
    states: selected variant read from rest values (capture 29 against capture 30 and its seven siblings); no pointer frame was recorded
    use: Topic filter buttons above the blog's post list (button.btn-tag) at surface-3::[data-omd-capture="30"], 66 x 45
  category-chip:
    type: badge
    backgroundColor: '#f3f8ff'
    textColor: '#2f3943'
    rounded: 36px
    padding: 5px 10px
    height: 24px
    typography: 14px / 700 / 14px, letter-spacing -0.07px
    use: Primary-tag chip on the blog's 380px post cards (span.post-card-primary-tag), 56 x 24
  category-chip-grey:
    type: badge
    backgroundColor: '#f5f6f8'
    textColor: '#2f3943'
    rounded: 77px
    padding: 4px 12px
    height: 22px
    typography: 14px / 700 / 14px, letter-spacing -0.07px
    use: Primary-tag chip on the blog's 240px cards, 84 x 22; the featured slider uses the same fill at 13px / 700 with 3px 9px padding, 30px tall, 49px radius
  post-card:
    type: card
    backgroundColor: transparent
    textColor: '#2b2f34'
    rounded: 24px
    use: 'Blog post card: image (img.post-card-image) on a #f1f1f1 placeholder fill with a 24px radius at 380px and 792px wide and 16px at 240px wide, then tag line #979797, title #2b2f34, excerpt #788391 and meta #a4acb4; no border or shadow'
  load-more:
    type: button
    backgroundColor: '#f5f6f8'
    textColor: '#15171a'
    rounded: 100px
    padding: 16px 32px
    height: 56px
    typography: 16px / 400 / 25.6px
    states: rest only; no state frame was recorded
    use: Pill button below the blog's post list at surface-3::[data-omd-capture="62"], 256 x 56; its label sits in a child that was not captured
fonts:
  roles:
    funnel: Noto Sans KR
---

# Design System Inspiration of 3o3 (삼쩜삼)

## Overview

### Visual Theme & Atmosphere

삼쩜삼 (3o3) is the tax-refund service of 자비스앤빌런즈 (Jobis & Villains), a company founded in August 2015 whose first product, launched that December, was 자비스 (Jarvis), an AI bookkeeping service. 삼쩜삼 followed in May 2020 as a service that calculates and files 종합소득세 refunds. The company's own timeline then records a mobile app (December 2021), 삼쩜삼 마이비즈 for sole proprietors (May 2022), VAT filing (January 2023), selection as a pre-unicorn (예비유니콘) by the Ministry of SMEs and Startups (June 2023) and, in July 2025, 24 million cumulative members and more than 2 trillion won in cumulative filed refunds. The name reads "three point three" in Korean, and the domain spells it 3o3. The brand is widening its promise: the operator's site says the service is growing "Tax 기반 서비스를 넘어" into a platform that finds customers' hidden rights and money — everyday refunds such as hospital bills and insurance, and a platform for partner tax accountants — and the homepage title now calls it a "생활 밀착 환급·혜택 플랫폼".

Brand expression is governed from an official brand resource centre (삼쩜삼 브랜드리소스) that names SZS Blue as the colour that represents 삼쩜삼, fixes Poppins for English and Pretendard for Korean, and publishes the logotype, symbol and combined logo with clear-space, colour-usage and "Do Nots" rules. The captured public surfaces speak in a more direct register. The homepage (www.3o3.co.kr) is a long landing page built on Unbounce whose five 361 × 61 calls-to-action all lead into the app: three are warm yellow `#fbbd41` with black labels (내 환급금 조회하기, 지금 찾으러 가기, 지금 환급 신청하기), one is slate `#2f3943` (대상자 여부 확인하기) and one bright blue `#3e79ff` (안전하게 환급 신청하기). Every one of them turns the same blue `#237af2` with white text on hover, and each darkens on press. The official blog (blog.3o3.co.kr) is calmer: white cards with 16px and 24px image radii on a `#f1f1f1` placeholder, near-black `#15171a` text, `#2b2f34` titles, pill chips on `#f5f6f8` and `#f3f8ff`, and a row of outlined 24px-radius topic filters whose selected member fills with `#141618`.

No captured element on either page carries a shadow. Radius follows the component: 7px on the landing actions, 24px on blog filters and large images, full pills on chips and on the blog's load-more button.

**Key Characteristics:**
- Warm yellow `#fbbd41` as the repeated primary action, with black `#000000` labels
- One shared hover colour, `#237af2` with white text, across every homepage action
- A three-action vocabulary on the landing: yellow for the refund, slate `#2f3943` for eligibility, blue `#3e79ff` for the "safe" application
- Tall 61px actions at a tight 7px radius
- Noto Sans KR on the landing, delivered by its page builder
- A calm grey text ladder on the blog: `#15171a`, `#2b2f34`, `#606a76`, `#788391`, `#a4acb4`
- Pill chips and a 24px-radius filter row; selection shown by a `#141618` fill
- Flat surfaces throughout — no box-shadow on any captured element

### Primary tasks

- Look up how much refund you may be owed (내 환급금 조회하기)
- Check whether you are eligible before applying (대상자 여부 확인하기)
- Apply for a refund through the app (지금 환급 신청하기)
- See how the estimated refund is calculated (예상 환급액을 계산하는 기준)
- Read tax and money articles on the official blog

### Brand Narrative

삼쩜삼 is operated by (주)자비스앤빌런즈, founded in August 2015. Its first act was 자비스, an AI bookkeeping service launched in December 2015 that passed 5,000 business members in May 2018. Its second act, launched in May 2020, was 삼쩜삼, a service that calculates and files 종합소득세 refunds; the company records reaching break-even the following month. From there the timeline on jobisnvillains.com reads as steady expansion: a mobile app in December 2021, the acquisition of the part-time scheduling and pay app 하우머치 in August 2022, 삼쩜삼 마이비즈 for sole proprietors in May 2022, VAT filing in January 2023, ISMS certification in March 2023 and a pre-unicorn selection in June 2023. By July 2025 the platform counted 24 million cumulative members and more than 2 trillion won in cumulative filed refunds. The app entry names the chief executive, 김범섭, in its statutory footer.

The mission is written as three wishes — that everyone may enjoy more wealth, save more time and find more of their rights ("더 많은 부", "더 많은 시간", "더 많은 권리") — and the current direction is to move beyond tax into a platform that finds customers' hidden rights and money quickly and in full. The brand centre governs how that looks: one representative colour, SZS Blue; Poppins for English and Pretendard for Korean; and logo rules that forbid changes to size, shape, colour or effects.

### Principles

These are editorial readings of what the captured surfaces and first-party pages show.

1. **Lead with the outcome.** Every homepage action names a result (조회하기, 찾으러 가기, 신청하기). *UI implication:* put the refund look-up behind one tall, repeated action rather than opening with a form.
2. **Every figure carries its basis.** The app entry states the cohort (7,208,747 filers, 2020.05.01–2026.04.01) and the conditions behind its average of 288,635원. *UI implication:* a refund number and its basis line are one unit.
3. **Reassurance at the point of action.** "안전하게" sits inside a button label. *UI implication:* trust copy belongs on the action, not on a separate page.
4. **One governed identity colour, practical action colours.** The brand centre mandates SZS Blue for identity; the landing uses yellow, slate and blue for its actions. *UI implication:* keep the logo's blue untouched and let action colours serve the task.
5. **Flat surfaces.** No shadow appears on either captured page. *UI implication:* separate with fills, not elevation.

### Personas

*The personas below are fictional archetypes drawn from the audiences the brand names (freelancers, sole proprietors and everyday refund seekers); they are not real people.*

**박지훈, 27, 서울.** A delivery rider and part-time editor with several small income sources. He has never used an accountant; he taps 내 환급금 조회하기 after seeing a friend's result and reads the basis line before believing the number.

**이서연, 34, 성남.** A freelance designer who files 종합소득세 every May. She values that the service states its scope plainly — tax help and reports, not a tax agent's representation.

**최민수, 45, 대구.** A small academy owner who came in through the sole-proprietor services. The statutory footer — business registration number, named chief executive, exact cohort figures — is what persuades him.

## Colors

Every token below was read by the deterministic collector on 2026-09-30 from the homepage (www.3o3.co.kr) and the official blog (blog.3o3.co.kr). The two are separate surfaces, and each value names the one it came from.

### Primary
- **Refund Yellow** (`#fbbd41`): The fill of the homepage's primary refund action. It is the primary because the homepage renders it in the primary-action role: three of the five visible calls-to-action (captures 0, 1 and 3; 361 × 61, 7px radius) compute `background-color: rgb(251, 189, 65)`, including the first action on the page, 내 환급금 조회하기, and the page source sets the same fill in its button rules. The slate and blue actions appear once each.
- **On Primary** (`#000000`): The label colour on the yellow actions.
- **Action Hover Blue** (`#237af2`): The hover fill of all five homepage actions, with white `#ffffff` labels. Pressed fills differ by action: `#e29929` on yellow, `#1e2c3c` on slate and `#2756e6` on blue.

### Secondary actions
- **Secure Blue** (`#3e79ff`): The fill of 안전하게 환급 신청하기.
- **Slate** (`#2f3943`): The fill of 대상자 여부 확인하기, and on the blog the label colour of category chips.

### Neutral & Surface
- **Canvas** (`#ffffff`): The page background of both surfaces and the rest fill of the blog's topic filters.
- **Surface** (`#f5f6f8`): Grey category chips and the load-more pill on the blog.
- **Tint Blue** (`#f3f8ff`): Category chips on the blog's 380px cards.
- **Placeholder** (`#f1f1f1`): The fill behind blog card images.
- **Outline** (`#dadee3`): The 1px border of the blog's topic filters.

### Text
- **Ink** (`#000000`): Paragraph copy and the disclosure block on the homepage.
- **Blog Ink** (`#15171a`): Blog body text and the load-more label.
- **Heading** (`#2b2f34`): Post titles on blog cards.
- **Body Sub** (`#606a76`): Topic-filter labels and header navigation on the blog.
- **Muted** (`#788391`): Post excerpts.
- **Faint** (`#a4acb4`): Card meta lines.
- **Tag Grey** (`#979797`): The tag line above post titles.
- **Selected** (`#141618`): The fill of the selected topic filter.

### Brand assets, not tokens
- **SZS Blue**: The brand centre's colour page reads "SZS Blue는 삼쩜삼을 대표하는 색상입니다. 일관된 표현을 위해 브랜드 색상은 반드시 준수하여 사용합니다." and shows the palette as swatch images. The June 2026 record pixel-sampled those images as `#0c64e6` (SZS Blue), `#023266` (deep navy), `#fea800` (amber) and `#f3f9ff` (sky tint); they were not re-sampled this session. No captured element on the homepage or the blog renders SZS Blue as an action fill, a selected state or an accent, so under the catalogue rule of 2026-09-30 it stays here as the brand's identity colour and is not a machine token. The blog's featured-slider wrapper computes `color: rgb(12, 101, 229)` (`#0c65e5`), one step from the swatch value, but none of its captured visible children (tag line `#979797`, chip label `#2f3943`, title `#ffffff`) uses it.
- The logotype, symbol and combined logo are published for download on the brand centre's logo page; the artwork was not measured.

## Typography

### Font Family
- **Live surface use**: `Noto Sans KR` on the homepage — body, paragraphs and every action label — loaded as woff2 subsets from `fonts.ub-assets.com`, the font host of the Unbounce page builder. `Arial` appears only on the close control of an Unbounce overlay and is not a brand face.
- **Loaded, not the rendering face of what was observed**: the blog requests `Poppins` 600 and 700 from Google Fonts (`fonts.googleapis.com/css2?family=Poppins:wght@600;700`). Its header links compute `Poppins, sans-serif` at 15px / 400, but their labels are Korean (테크, 컬처, 뉴스룸, 라이브러리) and Poppins has no Hangul, so they render in the fallback face. No Poppins token is created from them.
- **Official product use**: The brand centre states "Poppins와 Pretendard는 삼쩜삼을 대표하는 타입페이스입니다. 영문 사용 시 Poppins, 국문 사용 시 Pretendard를 사용합니다." In a same-day headless read, Pretendard 400 / 500 / 700 load on the app's logged-out entry (app.3o3.co.kr, which redirects to its sign-in page), Pretendard 400–800 on the operator's site jobisnvillains.com, and Poppins 400 / 600 / 700 with Pretendard 500 on the brand centre itself. None of those pages is a captured surface, so Pretendard is recorded here as the official Korean face without a token or a specimen.
- **Licences**: Pretendard is distributed under the SIL Open Font License 1.1 (LICENSE in `github.com/orioncactus/pretendard`, Reserved Font Name 'Pretendard'); Poppins and Noto Sans KR are both under the SIL Open Font License 1.1 (`google/fonts` `ofl/poppins/OFL.txt` and `ofl/notosanskr/OFL.txt`).
- **Declared only (no visible use)**: `GmarketSans` on the homepage; the `FontAwesome` and `slick` icon fonts on the blog.
- **Unresolved**: The blog declares `"Noto Sans KR", -apple-system, …` for its Korean text, but no Noto Sans KR webfont was loaded on the blog in the same-day read (only Poppins was), so the blog's Korean face depends on what the viewer has installed. Its sizes and weights below are measured; its face is not claimed.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Observed on |
|------|------|------|--------|-------------|-------------|
| Featured Title | declared Noto Sans KR stack | 33px | 700 | 49.5px (1.5) | White titles on the blog's lead slider |
| Card Title | declared Noto Sans KR stack | 24px | 700 | 33.6px (1.4) | Blog 380px cards, `#2b2f34` |
| Card Title Small | declared Noto Sans KR stack | 20px | 700 | 28px (1.4) | Blog 240px cards, `#2b2f34` |
| CTA | Noto Sans KR | 18px | 500 | 22px (1.22) | Homepage action labels |
| Body | declared Noto Sans KR stack | 16px | 400 | 25.6px (1.6) | Blog body, `#15171a` |
| Excerpt | declared Noto Sans KR stack | 16px | 400 | 24px (1.5) | Blog excerpts, `#788391` |
| Nav | Poppins stack (Korean labels fall back) | 15px | 400 | 22.5px (1.5) | Blog header links, `#606a76` |
| Disclosure | Noto Sans KR | 14px | 400 | 20px (1.43) | Homepage paragraphs and disclosure block |
| Tag | declared Noto Sans KR stack | 14px | 700 | 21px (1.5) | Blog topic filters |
| Chip | declared Noto Sans KR stack | 14px | 700 | 14px (1.0), -0.07px | Blog category chips |
| Tag List | declared Noto Sans KR stack | 14px | 600 | 14px (1.0), -0.07px | Tag line above blog titles, `#979797` |

### Principles
- **Bold for titles, medium for actions**: blog titles sit at 700; the landing's action labels at 500.
- **Normal tracking, except the small labels**: headings and body compute `letter-spacing: normal`; only the blog's chips and tag lines tighten to -0.07px.
- **Two type contexts, two sources**: the landing ships Noto Sans KR through its page builder; the brand's own faces, Poppins and Pretendard, live on the brand centre, the app entry and the operator's site.

## Layout

### Spacing System
- Observed values: 11px / 20px inside topic filters, 5px / 10px inside chips, 16px / 32px inside the load-more pill
- The landing positions its blocks absolutely (the Unbounce model), so its spacing is set by coordinates rather than a padding scale; the actions carry 0px padding and centre their labels

### Grid & Container
- Homepage: one centred column of image and text bands, with each action 361px wide
- Blog: a 792px lead slider, then post cards at 380px and 240px wide

### Whitespace Philosophy
- **Pitch, then act**: on the landing each persuasion band ends in a full-width action, and the action repeats down the page.
- **Quiet reading on the blog**: white canvas, grey text ladder, and colour held to chips and the selected filter.

### Border Radius Scale
- 7px: landing actions
- 16px: small blog images
- 24px: large blog images and topic filters
- Full pill (36px, 49px, 77px, 100px): chips and the load-more button

### Responsive Behavior

#### Breakpoints
Only the 1440 × 900 desktop layout was captured. The homepage's page source carries a second set of positions and sizes for every action (150px-wide variants), which Unbounce uses for its mobile layout; they were not rendered in this capture.

#### Touch Targets
- Landing actions: 361 × 61
- Blog topic filters: 45px tall
- Blog load-more pill: 256 × 56
- Blog slider arrows: 20 × 20, below a comfortable touch size

#### Collapsing Strategy
Not captured below desktop width; no collapse behaviour is claimed.

#### Image Behavior
Blog images sit in rounded frames (16px or 24px) over a `#f1f1f1` placeholder.

## Elevation & Depth

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | `box-shadow: none` | Every captured action, chip, filter, card and image on both surfaces |
| Tint | `#f5f6f8`, `#f3f8ff`, `#f1f1f1` fills | Chips, the load-more pill and image placeholders |

**Shadow Philosophy**: the captured surfaces use no shadows. Separation comes from fills and from the colour of the actions themselves.

## Motion & Easing

Motion was not measured. The collector records computed styles and settled state frames, not durations or easing curves. The June record's duration and easing table (three durations and two cubic-bezier curves) had no source and was removed; its one measured value, a transition on the brand centre's menu, belongs to the brand-resource site, was not re-measured and is not carried forward.

## Components

### Buttons

**Refund action (primary)**
- Background: `#fbbd41`
- Text: `#000000`
- Radius: 7px
- Size: 361px × 61px
- Font: 18px / 500 / 22px Noto Sans KR
- Hover: `#237af2` fill with `#ffffff` text
- Pressed: `#e29929` fill with `#000000` text
- Use: 내 환급금 조회하기, 지금 찾으러 가기 and 지금 환급 신청하기 on the homepage; every action links to app.3o3.co.kr

**Eligibility action**
- Background: `#2f3943`
- Text: `#ffffff`
- Radius: 7px
- Size: 361px × 61px
- Font: 18px / 500 / 22px Noto Sans KR
- Hover: `#237af2` fill with `#ffffff` text
- Pressed: `#1e2c3c` fill
- Use: 대상자 여부 확인하기

**Secure application action**
- Background: `#3e79ff`
- Text: `#ffffff`
- Radius: 7px
- Size: 361px × 61px
- Font: 18px / 500 / 22px Noto Sans KR
- Hover: `#237af2` fill with `#ffffff` text
- Pressed: `#2756e6` fill
- Use: 안전하게 환급 신청하기

State note: hover and pressed come from settled collector frames that agree across all five actions and match the page's own `:hover` and `:active` rules. Focus is not declared: the collector's focus frames only repeat the pressed values.

**Blog load-more pill**
- Background: `#f5f6f8`
- Text: `#15171a`
- Radius: 100px
- Padding: 16px 32px
- Size: 256px × 56px
- Font: 16px / 400 / 25.6px
- States: rest only
- Use: below the blog's post list; its label sits in a child that was not captured

### Navigation & Tabs

**Blog topic filter**
- Background: `#ffffff`
- Text: `#606a76`
- Border: 1px solid `#dadee3`
- Radius: 24px
- Padding: 11px 20px
- Height: 45px
- Font: 14px / 700 / 21px
- Selected: `#141618` fill with `#ffffff` text, same border
- Use: the row of topic buttons above the blog's post list (eight at rest, one selected)

**Blog header navigation**
- Text: `#606a76`
- Font: 15px / 400 / 22.5px; the stack names Poppins, but the Korean labels render in the fallback face
- Use: the header links of blog.3o3.co.kr (테크, 컬처, 뉴스룸, 라이브러리)

### Badges

**Category chip (blue tint)**
- Background: `#f3f8ff`
- Text: `#2f3943`
- Radius: 36px (a full pill at 24px tall)
- Padding: 5px 10px
- Font: 14px / 700 / 14px, letter-spacing -0.07px
- Use: primary tag on the blog's 380px cards

**Category chip (grey)**
- Background: `#f5f6f8`
- Text: `#2f3943`
- Radius: 77px on 240px cards and 49px on the featured slider (full pills)
- Padding: 4px 12px; 3px 9px on the slider
- Font: 14px / 700 / 14px; 13px / 700 / 13px on the slider
- Use: primary tag on 240px cards and featured slides

### Cards & Containers

**Blog post card**
- Background: transparent, with the image on a `#f1f1f1` placeholder fill
- Image radius: 24px at 380px and 792px wide; 16px at 240px wide
- Title: `#2b2f34`, 24px / 700 (380px cards) or 20px / 700 (240px cards)
- Tag line: `#979797`, 14px / 600
- Excerpt: `#788391`, 16px / 400 / 24px
- Meta: `#a4acb4`
- Use: every post tile on the blog; no border and no shadow

---
**Verified:** 2026-09-30 (deterministic collector capture of the homepage and the official blog, logged out, plus first-party brand, corporate and app-entry context)
**Tier 1 sources:** https://www.3o3.co.kr/ ; https://blog.3o3.co.kr/ ; https://brand.3o3.co.kr/color-typeface ; https://brand.3o3.co.kr/brand-logo ; https://jobisnvillains.com/ ; https://app.3o3.co.kr/
**Tier 2 sources:** not attempted on 2026-09-30 (the June 2026 record found no getdesign.md or refero entry); no Tier 2 value used
**Conflicts unresolved:** none

### States

| State | Observed treatment |
|---|---|
| **Hover (homepage actions)** | All five actions fill `#237af2` with `#ffffff` text. |
| **Pressed (homepage actions)** | Yellow `#e29929` with black text; slate `#1e2c3c`; blue `#2756e6`. |
| **Selected (blog topic filter)** | `#141618` fill, `#ffffff` text, 1px `#dadee3` border. |
| **Disabled (blog slider arrow)** | The first arrow of the lead slider carries `slick-disabled` at rest. |

Focus was not measured (the collector's focus frames repeat the pressed values), and no empty, loading, error or success screen was captured, so none is described.

## Do's and Don'ts

### Do
- Use yellow `#fbbd41` with black text for the main refund action
- Give every action the same hover, `#237af2` with white text, and a darker pressed fill
- Keep actions tall (61px) with a 7px radius
- Reserve slate `#2f3943` for eligibility and blue `#3e79ff` for the reassurance-framed application
- Keep surfaces flat
- Use pill chips and a 24px-radius filter row on editorial pages, with `#141618` for the selected filter
- Treat SZS Blue as the logo's and identity's colour, as the brand centre directs

### Don't
- Don't make SZS Blue the action colour of a product screen on the strength of the swatch alone — the captured product surfaces do not use it that way
- Don't add drop shadows
- Don't recolour, reshape or add effects to the logo — the brand centre's Do Nots forbid it
- Don't mix English and Korean faces against the brand rule (Poppins for English, Pretendard for Korean)
- Don't show a refund figure without its basis; the app entry prints the cohort and conditions next to its average

## Voice & Tone

삼쩜삼's voice is friendly, money-minded and reassuring. It frames a tax chore as finding money that is already yours, keeps its calls-to-action short and immediate, and prints the conditions behind every figure.

| Context | Tone |
|---|---|
| Homepage actions | Outcome-first imperatives: "내 환급금 조회하기", "지금 찾으러 가기", "지금 환급 신청하기". |
| Trust-sensitive action | Reassurance inside the label: "안전하게 환급 신청하기". |
| Eligibility | Plain check before commitment: "대상자 여부 확인하기". |
| App entry | Calm and procedural: "카카오 계정으로 계속하기", "다른 방법으로 로그인하기", "예상 환급액을 계산하는 기준". |
| Disclosures | Precise and unminimised: the service scope, the fee, and the cohort behind the average refund. |
| Corporate | Wordplay on the name: "쩜 쉬운 세금 관리의 시작". |

**Voice samples (verbatim, read 2026-09-30):**
- "삼쩜삼 - 생활 밀착 환급·혜택 플랫폼" — homepage title
- "세금 환급은 물론, 모든 숨은돈 삼쩜삼에서 찾기" — homepage meta description
- "본 서비스는 삼쩜삼에서 제공하는 종합소득세 신고 환급서비스로, 환급금 무료 조회가 가능한 유료 서비스입니다." — app entry disclosure
- "2020.05.01~2026.04.01 기간의 누적 신고 고객 7,208,747명의 평균 신청 환급액은 288,635원이며, 개인별 조건(인적사항, 공제항목 대상 및 적용 등)에 따라 발생 여부 및 예상 환급액이 상이함." — app entry disclosure
- "쩜 쉬운 세금 관리의 시작" — jobisnvillains.com
- "SZS Blue는 삼쩜삼을 대표하는 색상입니다." — brand centre

**Forbidden register**: fear-based penalty scaremongering; refund figures without their basis; officialese in user-facing flows; hiding the service's scope or fee.

## Agent Prompt Guide

### Quick Color Reference
- Primary action: `#fbbd41` with `#000000` text
- Hover on any action: `#237af2` with `#ffffff` text
- Pressed: `#e29929` (yellow), `#1e2c3c` (slate), `#2756e6` (blue)
- Secondary actions: `#2f3943`, `#3e79ff`
- Blog text: `#15171a`, `#2b2f34`, `#606a76`, `#788391`, `#a4acb4`, `#979797`
- Blog fills: `#f5f6f8`, `#f3f8ff`, `#f1f1f1`; selected filter `#141618`; filter border `#dadee3`
- Identity colour, not a UI fill: SZS Blue (June 2026 swatch sample `#0c64e6`)

### Example Component Prompts
- "Create a refund landing band: white background, headline and supporting copy, then a 361 × 61 action with a `#fbbd41` fill, `#000000` label '내 환급금 조회하기', 18px / 500 Noto Sans KR, 7px radius, no shadow; on hover the fill becomes `#237af2` with white text, on press `#e29929`."
- "Add an eligibility action below it: `#2f3943` fill, white label '대상자 여부 확인하기', same size and radius; hover `#237af2`, pressed `#1e2c3c`."
- "Build a blog index: a row of topic filters (white, `#606a76` 14px / 700 labels, 1px `#dadee3` border, 24px radius, 11px 20px padding; the selected one `#141618` with white text), then post cards with 24px-radius images on `#f1f1f1`, a pill chip in `#f3f8ff` with `#2f3943` text, a `#2b2f34` 24px / 700 title and a `#788391` excerpt."

### Iteration Guide
1. Decide the surface first: conversion landing (yellow, slate, blue actions) or editorial blog (grey ladder, chips, filters)
2. The primary action is yellow; every action shares the `#237af2` hover
3. Keep everything flat
4. Actions are 61px tall with a 7px radius; blog controls are pills or 24px
5. Pair every refund figure with its basis line

## Governance

### Known Gaps

- **Contrast, `secure-cta`.** Text `#ffffff` on `#3e79ff` measures 3.90:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `post-card`.** Text `#2b2f34` on `#00000000` measures 1.56:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
