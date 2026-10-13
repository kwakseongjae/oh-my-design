---
name: Blind
colors:
  primary: '#fb5957'
  on-primary: '#ffffff'
  accent: '#007aff'
  accent-tint: '#f2faff'
  ink: '#222222'
  ink-strong: '#18202a'
  nav: '#5f6b7c'
  nav-hover: '#939dac'
  meta: '#94969b'
  footer-ink: '#42424b'
  canvas: '#ffffff'
  input-border: '#d4d4d4'
  card-border: '#e6e8ef'
  chip-surface: '#f2f2f3'
typography:
  company-hero:
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.25
    use: Hero heading of the company-review hub (h1.tit), white over the hero, Pretendard
  company-section:
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.25
    use: Section headings on the company-review hub (h3.ltit), Pretendard
  section:
    fontSize: 18px
    fontWeight: 600
    lineHeight: 2.39
    use: Topic board headings on home (h2.topic, 43px line box, letter-spacing -0.5px), Pretendard
  topic-title:
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.35
    use: Channel title on a topic page (h2.topic_is, letter-spacing -0.5px), Pretendard
  post-title-lg:
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.4
    use: Post titles in the topic-page feed, Pretendard
  company-name:
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
    use: Company names on featured company cards, Pretendard
  hero-input:
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.25
    use: Text in the home hero search field, Pretendard
  nav:
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    use: Global navigation (홈, 채널, 기업 리뷰; letter-spacing -0.5px), Pretendard
  post-title:
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.5
    use: Post titles in the home topic boards (a.tit, letter-spacing -0.5px), Pretendard
  preview:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    use: Post preview text in the topic-page feed, Pretendard
  body:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    use: Descriptive copy on the company-review hub (p.desc), Pretendard
  button:
    fontSize: 14px
    fontWeight: 600
    lineHeight: 2.71
    use: 로그인 label (38px line box inside the 40px button, letter-spacing -0.5px), Pretendard
  chip:
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.35
    use: Channel chips across the top of a topic page (letter-spacing -0.1px), Pretendard
  meta:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.25
    use: View, comment and like counts and category labels, Pretendard
  footer:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.14
    use: Footer links (letter-spacing -0.2px), Pretendard
rounded:
  none: 0px
  button: 4px
  card: 8px
  search: 20px
  hero-search: 30px
spacing:
  post-row-y: 8
  nav-pad: 4
  card-pad: 20
  action-y: 12
  action-x: 16
  badge-x: 12
components:
  login-button:
    type: button
    backgroundColor: '#fb5957'
    textColor: '#ffffff'
    border: '1px solid #fb5957'
    rounded: 4px
    padding: 0px
    height: 40px
    typography: 14px / 600 / 38px Pretendard, letter-spacing -0.5px
    hover: 'bg #ff928b, border #ff928b'
    pressed: 'bg #ff928b, border #ff928b'
    states: 'hover and pressed frames read #ff928b on all three pages (sibling agreement), the value the page stylesheet authors for .btn_signin:hover and :active, so the frames are the settled end state; focus not measured'
    use: 로그인 at the right of the global header on every captured page, 82 x 40 (read, never followed)
  header-search:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#222222'
    border: '1px solid #d4d4d4'
    rounded: 20px
    padding: 2px 12px 0px 36px
    height: 40px
    typography: 14px / 400 / 17.5px Pretendard
    states: 'rest only; the pressed frame moved focus into the field, so its #222222 border is a focus reading and no state is declared'
    use: Pill search field in the global header, 248 x 40
  hero-search:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#222222'
    border: '2px solid #222222'
    rounded: 30px
    padding: 0px 10px 0px 62px
    height: 60px
    typography: 18px / 400 / 22.5px Pretendard
    states: rest only; no pointer or focus frame was recorded for it
    use: Home hero search, 736 x 60, placeholder 관심있는 내용을 검색해보세요!
  gnb-tab:
    type: tab
    backgroundColor: transparent
    textColor: '#5f6b7c'
    padding: 4px
    height: 32px
    typography: 16px / 600 / 24px Pretendard, letter-spacing -0.5px
    selected: 'fg #18202a on the current section (홈 on home, 기업 리뷰 on the company hub)'
    hover: 'fg #939dac'
    pressed: 'fg #939dac'
    states: 'hover and pressed frames read #939dac on every inactive item on all three pages, matching the stylesheet''s #gnb .swiper-slide a:hover rule'
    use: Global navigation 홈, 채널, 기업 리뷰; the fourth slot is an advertising link and is excluded
  more-link:
    type: button
    backgroundColor: transparent
    textColor: '#5f6b7c'
    padding: 0px 20px 0px 8px
    height: 48px
    typography: 12px / 600 / 48px Pretendard, letter-spacing -0.5px
    states: rest on 37 instances; no pointer frame
    use: 더보기 at the right of each home topic board heading, 58 x 48
  post-row:
    type: listItem
    textColor: '#222222'
    padding: 8px 0px
    height: 37px
    typography: 14px / 600 / 21px Pretendard, letter-spacing -0.5px
    use: 'Post title row in the home topic boards; counts beside it in #94969b 12px / 400'
  topic-post:
    type: listItem
    textColor: '#222222'
    typography: 18px / 700 / 25.2px Pretendard
    use: 'Topic-page feed item: 18px bold title, 14px / 400 / 21px preview and 12px #94969b counts, all #222222 except the counts'
  channel-link:
    type: button
    backgroundColor: transparent
    textColor: '#007aff'
    padding: 0px 16px 0px 0px
    height: 46px
    typography: 14px / 600 / 17.99px Pretendard, letter-spacing -0.1px
    states: rest only; no pointer frame
    use: 채널 탐색 link beside the topic title on a topic page
  review-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#222222'
    border: '1px solid #e6e8ef'
    rounded: 8px
    padding: 0px 16px
    height: 40px
    typography: 14px / 600 / 17.5px Pretendard
    states: rest only; no pointer frame
    use: 내 회사 리뷰하기 on the company-review hub, 149 x 40
  category-card:
    type: card
    backgroundColor: '#ffffff'
    textColor: '#222222'
    border: '1px solid #e6e8ef'
    rounded: 8px
    padding: 20px 20px 58px
    size: 173px x 128px
    typography: 14px / 400 / normal Pretendard
    selected: 'bg #f2faff, border 1px solid #007aff'
    use: Selectable cards in the company-review hub (five at rest, one selected); labels not captured
  company-action:
    type: button
    backgroundColor: '#007aff'
    textColor: '#ffffff'
    rounded: 8px
    padding: 12px 16px
    height: 42px
    typography: 14px / 400 / 17.5px Pretendard
    states: rest on three instances; no pointer frame
    use: Filled blue action at the foot of each of the three featured company cards, 313 x 42; label not captured
  company-badge:
    type: badge
    backgroundColor: '#f2faff'
    textColor: '#222222'
    rounded: 4px
    padding: 8px 12px
    height: 31px
    typography: 12px / 600 / 15px Pretendard
    use: Tinted line on the featured company cards, 313 x 31; label not captured
  app-download-button:
    type: button
    backgroundColor: '#f2f2f3'
    rounded: 20px
    size: 40px x 40px
    states: rest only; no pointer frame
    use: Round App Store and Google Play buttons in the footer
fonts:
  roles:
    sans: Pretendard
---

# Design System Inspiration of Blind

## Overview

### Visual Theme & Atmosphere

Blind (블라인드) is the anonymous workplace community run by Teamblind Inc. Its own service page describes it as a company-verified, anonymous community for working people, launched in 2013, and says plainly that it is "100% 익명": Blind keeps no member information in the service, under a security philosophy it states as "잃어버리면 안 되는 것은 가지고 있지 않는다" — don't hold what must never be lost. Teamblind's careers site frames the mission as "구성원 목소리로 만드는 건강한 조직 문화", a healthy organisational culture built from employees' voices, and says Blind now serves more than 13 million professionals at 450,000 companies worldwide from a headquarters in Silicon Valley. Its first stated value is Honesty & Transparency — "표현은 솔직하게, 공유는 투명하게". On the Korean web the product has grown from topic boards into a company-review hub ("15만 개의 기업 중 숨겨진 진짜 나만의 1위 기업"), while company, industry and group channels stay inside the app and logged-out visitors can only read.

The captured Korean pages read as a dense, text-first forum on white. Post titles run in `#222222` at 14px / 600 with tight 8px row padding, counts sit in `#94969b` at 12px, and the global navigation uses a steel-grey `#5f6b7c` that turns `#18202a` on the current section. Colour appears in only two places. A coral `#fb5957` fills the 로그인 button in the header of every page, and the page stylesheet names it `--tb-red-red1000`. A blue `#007aff` (`--tb-blue-blue1000`) marks the company-review hub and topic pages: the 채널 탐색 link, a selected company card on a `#f2faff` tint, and filled actions on featured company cards. The home hero is a single 60px search pill outlined in 2px `#222222`. Nothing casts a shadow.

Every captured element is set in Pretendard, loaded from unpkg as `pretendard@1.3.9`, an open-licence family (OFL-1.1) that Blind uses and does not own.

**Key Characteristics:**
- Text-first density: 14px / 600 `#222222` post titles, 8px row padding, 12px `#94969b` counts
- One coral action, `#fb5957`, on the header 로그인 on every page; hover and pressed go lighter to `#ff928b`
- A contextual blue, `#007aff`, for the company-review hub and channel links, with a `#f2faff` tint for selection
- A grey navigation scale: `#5f6b7c` at rest, `#939dac` on hover, `#18202a` when current
- The home hero is one search pill: 60px tall, 2px `#222222` outline, 30px radius
- Radii of 4px (buttons, badges), 8px (cards and company actions), 20px (header search) and 30px (hero search)
- Flat: every captured element computes `box-shadow: none`
- Pretendard for everything, at weights 400, 600 and 700

### Primary tasks

- Search the community for a topic you care about
- Read the day's best posts in 토픽 베스트 without signing in
- Browse company reviews before a job move
- Review your own company (내 회사 리뷰하기)
- Explore topic channels from 채널 탐색

### Brand Narrative

Blind's service introduction page dates the product to 2013 and defines it as a company-verified anonymous community for working people. The same page answers the question every visitor asks — is it really anonymous? — with "네. 100% 익명입니다.", explains that Blind stores no member information in the service, and states the security philosophy "잃어버리면 안 되는 것은 가지고 있지 않는다." It cites 8 in 10 employees of large Korean companies as users. Teamblind's careers site gives a larger picture: a headquarters in Silicon Valley, more than 13 million professionals at 450,000 companies, over 80% of employees at Meta and Uber in the US, and 9 in 10 employees of large Korean companies. The global Why Blind page adds that Blind holds patents for its authentication, encryption and sign-up process.

The careers site lists five values: Honesty & Transparency (표현은 솔직하게, 공유는 투명하게), Supportive Community, Pioneering ("세상에 없던 플랫폼"), Depth of Understanding, and Global Impact. Its press list includes a launch in India, 12 million users with over 90% sign-up in Korea's ten largest groups, selection among TIME's most influential companies, and Great Place To Work certification.

On the Korean web today, Blind has two faces: topic boards and a company-review hub that promises "1,300만 명의 커리어 데이터로 증명된 진짜 좋은 회사". Company, industry and group channels remain app-only, and the web offers some topic channels to logged-out readers. The interface stays out of the way: white pages, grey navigation, one coral action and a blue that appears where the product points to companies and channels.

### Principles

1. **Anonymity is the architecture.** Blind says it keeps no member information. *UI implication:* nothing on the page identifies a person; posts carry counts, not faces.
2. **Honesty by default.** "표현은 솔직하게, 공유는 투명하게" is the first stated value. *UI implication:* plain labels and visible policy links, no euphemism.
3. **One action in colour.** *UI implication:* the header's coral 로그인 is the only coral on the page; blue is reserved for company and channel paths.
4. **Density serves readers.** *UI implication:* 14px titles, 8px row padding and grey counts put many posts in view. (An editorial reading of the captured pages, not a Teamblind statement.)
5. **Search first.** *UI implication:* the home hero is a single 60px search pill.

### Personas

*Personas below are fictional archetypes informed by publicly observable Blind user segments (verified employees discussing pay, careers and company life), not individual people.*

**박지훈, 32, 판교.** A backend engineer who opens Blind at lunch to skim 토픽 베스트 and the 주식·투자 board, and asks career questions in the app where his company channel lives.

**이서연, 29, 서울.** A marketer weighing a move. Reads company reviews on the web hub, compares featured companies, and then leaves her own review with 내 회사 리뷰하기.

**김민정, 38, 서울.** A team lead who reads Blind to hear what employees really think. She never posts, and appreciates that every post looks the same on the page.

## Colors

Every token below was read by the deterministic collector on 2026-09-30 from www.teamblind.com/kr, the 토픽 베스트 topic page and the company-review hub.

### Primary
- **Blind Coral** (`#fb5957`): The fill and 1px border of the 로그인 button, the one filled action in the global header, on all three captured pages. It is the primary because it is the only saturated action fill that appears on every captured surface, and the page stylesheet declares it as `--tb-red-red1000`, the base of Blind's red scale. Hover and pressed frames read `#ff928b` (`--tb-red-red700`) on all three pages.
- **On Primary** (`#ffffff`): The 로그인 label.

### Accent
- **Blind Blue** (`#007aff`): The 채널 탐색 link on the topic page, the 1px border of the selected company card, and the fill of the three filled actions on featured company cards. It is contextual: it appears only on the topic page and the company-review hub, which is why it is the accent and not the primary. The stylesheet names it `--tb-blue-blue1000`.
- **Blue Tint** (`#f2faff`): The fill of the selected company card and of the tinted line on featured company cards (`--tb-blue-blue200`).

### Text
- **Ink** (`#222222`): Body text, post titles, section headings and input text on every page.
- **Ink Strong** (`#18202a`): The current section in the global navigation (`--tb-gray-gray1000`).
- **Nav Grey** (`#5f6b7c`): Inactive navigation items, 더보기 links and descriptive copy on the company hub (`--tb-gray-gray700`).
- **Nav Hover** (`#939dac`): Navigation items under hover and press (`--tb-gray-gray600`).
- **Meta Grey** (`#94969b`): View, comment and like counts and category labels.
- **Footer Ink** (`#42424b`): Footer links on the company hub.

### Surface & Borders
- **Canvas** (`#ffffff`): Pages set no body fill and render on the browser's white; white is set explicitly on the search fields, the company cards and the 내 회사 리뷰하기 button.
- **Input Border** (`#d4d4d4`): The 1px border of the header search pill.
- **Card Border** (`#e6e8ef`): The 1px border of company cards and the 내 회사 리뷰하기 button (`--tb-gray-gray300`).
- **Chip Surface** (`#f2f2f3`): The round App Store and Google Play buttons in the footer.

### Brand assets, not tokens
- The stylesheet also declares a legacy red, `--tb-legacy-red-da`, and full red, blue, gray, purple, success and warning scales. Only the values listed above were rendered on the captured pages; the rest stay out of the tokens.

## Typography

### Font Family
- **Live surface use**: `Pretendard` — 1,176 observed uses across body, headings, navigation, buttons, inputs, chips and badges on all three pages, `loaded / high`, served from `unpkg.com/pretendard@1.3.9/dist/web/static/` (woff2 and woff, Black through Thin). The declared stack is `Pretendard, AppleSDGothicNeo-Regular, "Malgun Gothic", "맑은 고딕", dotum, 돋움, sans-serif`.
- **Official distributed font asset**: Pretendard is an open-source family; its package manifest (`pretendard@1.3.9/package.json`) gives the licence as OFL-1.1 and the author as Kil Hyung-jin. It is a family Blind uses, not a Blind-owned typeface.
- **Excluded (third-party embeds)**: `Google Sans Text` (fonts.gstatic.com), `Nanum Gothic` (static.criteo.net), `notokr` (img.mobon.net) and `Roboto` are declared by advertising embeds, with 0 observed uses. They are not Blind faces.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Observed on |
|------|------|------|--------|-------------|-------------|
| Company Hero | Pretendard | 36px | 600 | 45px (1.25) | Company-review hub hero |
| Company Section | Pretendard | 24px | 600 | 30px (1.25) | Company hub section headings |
| Section | Pretendard | 18px | 600 | 43px box | Home topic board headings (-0.5px) |
| Topic Title | Pretendard | 18px | 700 | 24.3px (1.35) | Topic page title (-0.5px) |
| Post Title Large | Pretendard | 18px | 700 | 25.2px (1.4) | Topic-page feed titles |
| Company Name | Pretendard | 18px | 600 | 25.2px (1.4) | Featured company cards |
| Hero Input | Pretendard | 18px | 400 | 22.5px (1.25) | Home hero search |
| Nav | Pretendard | 16px | 600 | 24px (1.5) | Global navigation (-0.5px) |
| Post Title | Pretendard | 14px | 600 | 21px (1.5) | Home topic boards (-0.5px) |
| Preview | Pretendard | 14px | 400 | 21px (1.5) | Topic-page post previews |
| Body | Pretendard | 14px | 400 | 21px (1.5) | Company hub descriptions |
| Button | Pretendard | 14px | 600 | 38px box | 로그인 (-0.5px) |
| Footer | Pretendard | 14px | 400 | 16px (1.14) | Footer links (-0.2px) |
| Chip | Pretendard | 12px | 700 | 16.2px (1.35) | Topic-page channel chips (-0.1px) |
| Meta | Pretendard | 12px | 400 | 15px (1.25) | Counts and category labels |

### Principles
- **UI sizes, not display sizes**: the largest text on the community pages is 18px; only the company hub's hero reaches 36px.
- **600 is the working emphasis**: navigation, post titles, section headings and the login label sit at 600; the topic page's titles and chips step up to 700.
- **Slightly tight tracking on UI text**: navigation, post titles, section headings and the login label use `-0.5px`; chips `-0.1px`; footer links `-0.2px`; body and meta text stay at normal.

## Layout

### Spacing System
- Post rows: 8px vertical padding
- Navigation items: 4px padding
- Company cards: 20px padding with 58px at the foot
- Company actions: 12px vertical, 16px horizontal
- Badges: 8px vertical, 12px horizontal

### Grid & Container
- A white global header carries the logo, 홈 / 채널 / 기업 리뷰, a 248px search pill and the coral 로그인 button.
- Home stacks a 736px hero search over two-column topic boards, each headed by an 18px / 600 heading with a 더보기 link.
- The topic page runs a row of 28px channel chips over a single-column feed of 18px titles and previews.
- The company-review hub opens on a hero with a 36px white heading, then a row of 173 × 128 selectable cards, featured company cards with blue actions, and review excerpts.

### Whitespace Philosophy
- **Density first**: 14px titles in 37px rows put many posts in a viewport.
- **Grey carries hierarchy**: ink, nav grey and meta grey do the work that size and colour do elsewhere.

### Border Radius Scale
- 0px: post rows, links and most containers
- 4px: 로그인 and badges
- 8px: company cards, 내 회사 리뷰하기, blue company actions
- 20px: header search and round app buttons
- 30px: hero search

### Responsive Behavior

#### Breakpoints
Only the 1440-pixel desktop viewport was captured; no breakpoint was measured.

#### Touch Targets
- 로그인 and header search: 40px tall
- Hero search: 60px tall
- Navigation items: 32px; 더보기: 48px; 채널 탐색: 46px
- Company actions: 42px; app buttons: 40 × 40

#### Collapsing Strategy
- Not measured.

#### Image Behavior
- Company logos sit in 100 × 100 tiles with an 8px radius on the company-review hub.

## Elevation & Depth

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Every captured element |
| Border | 1px `#d4d4d4` / `#e6e8ef` | Header search, company cards |
| Outline | 2px `#222222` | Hero search |
| Tint | `#f2faff` fill | Selected company card, company badge |

**Shadow Philosophy**: every captured element computes `box-shadow: none`. Separation comes from 1px borders, the 2px hero outline and the blue tint.

## Motion & Easing

The collector reads computed style, not animation, so no duration or easing is measured. Treat motion as unspecified rather than borrowing values, and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/teamblind.json (capturedAt 2026-09-30T07:52:34Z), deterministic collector, 1440 wide, logged out: www.teamblind.com/kr/, the 토픽 베스트 topic page and www.teamblind.com/kr/company.
- Stylesheet names (--tb-red-red1000, --tb-red-red700, --tb-blue-blue1000, --tb-blue-blue200, --tb-gray-*) and the :hover / :active rules were read from the same pages' server HTML (plain HTTP, 2026-09-30); they corroborate captured values and supply none of their own.
- §1, §10, §11: www.teamblind.com/kr/introduce, recruit.teamblind.com and www.teamblind.com/why-blind, opened 2026-09-30. The June body's claims about the founders' previous employer and the 2015 US launch were not on any page opened and were removed.
- Pretendard licence: unpkg.com/pretendard@1.3.9/package.json (license OFL-1.1).
- Personas are fictional archetypes. Interpretive readings are editorial.
-->

## Components

### Buttons

**로그인 (primary)**
- Background: `#fb5957`
- Text: `#ffffff`
- Border: 1px solid `#fb5957`
- Radius: 4px
- Height: 40px (82 × 40)
- Font: 14px / 600 / 38px Pretendard, letter-spacing -0.5px
- Hover: background and border `#ff928b`
- Pressed: background and border `#ff928b`
- Use: the one filled action in the global header on every captured page (read, never followed)

**Company action (blue)**
- Background: `#007aff`
- Text: `#ffffff`
- Radius: 8px
- Padding: 12px 16px
- Height: 42px (313 × 42)
- Font: 14px / 400 / 17.5px Pretendard
- States: rest only
- Use: at the foot of each of three featured company cards on the company-review hub; the label was not captured

**내 회사 리뷰하기**
- Background: `#ffffff`
- Text: `#222222`
- Border: 1px solid `#e6e8ef`
- Radius: 8px
- Padding: 0px 16px
- Height: 40px (149 × 40)
- Font: 14px / 600 / 17.5px Pretendard
- States: rest only
- Use: review prompt on the company-review hub

**더보기**
- Background: transparent
- Text: `#5f6b7c`
- Padding: 0px 20px 0px 8px
- Height: 48px
- Font: 12px / 600 / 48px Pretendard, letter-spacing -0.5px
- Use: at the right of each home topic board heading

**채널 탐색 link**
- Background: transparent
- Text: `#007aff`
- Padding: 0px 16px 0px 0px
- Height: 46px
- Font: 14px / 600 / 17.99px Pretendard, letter-spacing -0.1px
- Use: beside the topic title on a topic page

**App download buttons**
- Background: `#f2f2f3`
- Radius: 20px
- Size: 40 × 40
- Use: App Store and Google Play in the footer

### Inputs

**Hero search**
- Background: `#ffffff`
- Text: `#222222`
- Border: 2px solid `#222222`
- Radius: 30px
- Padding: 0px 10px 0px 62px
- Height: 60px (736 wide)
- Font: 18px / 400 / 22.5px Pretendard
- Use: home hero, placeholder "관심있는 내용을 검색해보세요!"

**Header search**
- Background: `#ffffff`
- Text: `#222222`
- Border: 1px solid `#d4d4d4`
- Radius: 20px
- Padding: 2px 12px 0px 36px
- Height: 40px (248 wide)
- Font: 14px / 400 / 17.5px Pretendard
- States: rest only; no focus treatment is declared

### Navigation

**Global navigation**
- Background: transparent
- Text: `#5f6b7c`
- Padding: 4px
- Height: 32px
- Font: 16px / 600 / 24px Pretendard, letter-spacing -0.5px
- Selected: text `#18202a`
- Hover: text `#939dac`
- Pressed: text `#939dac`
- Use: 홈, 채널, 기업 리뷰. The fourth navigation slot is an advertising link and is not described.

**Topic-page channel chips**
- Text: `#222222`, 12px / 700 / 16.2px Pretendard, letter-spacing -0.1px, 28px tall
- The current chip (토픽 베스트) shows `#ffffff` text; its fill sits on an ancestor the collector did not record, so no chip fill is specified.

### Cards & Lists

**Company card (selectable)**
- Background: `#ffffff`
- Text: `#222222`
- Border: 1px solid `#e6e8ef`
- Radius: 8px
- Padding: 20px 20px 58px
- Size: 173 × 128
- Font: 14px / 400 / normal Pretendard
- Selected: background `#f2faff`, border 1px solid `#007aff`
- Use: the row of selectable cards on the company-review hub; labels were not captured

**Company badge**
- Background: `#f2faff`
- Text: `#222222`
- Radius: 4px
- Padding: 8px 12px
- Height: 31px
- Font: 12px / 600 / 15px Pretendard
- Use: tinted line on featured company cards; the label was not captured

**Home post row**
- Text: `#222222`
- Padding: 8px 0px
- Height: 37px
- Font: 14px / 600 / 21px Pretendard, letter-spacing -0.5px
- Use: post titles in the home topic boards, with counts in `#94969b` at 12px / 400 / 15px

**Topic-page post**
- Text: `#222222`
- Font: 18px / 700 / 25.2px Pretendard title, 14px / 400 / 21px preview
- Use: the 토픽 베스트 feed, with counts in `#94969b`

---

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out pages of www.teamblind.com/kr, plus first-party context)
**Tier 1 sources:** https://www.teamblind.com/kr/ ; https://www.teamblind.com/kr/topics/%ED%86%A0%ED%94%BD-%EB%B2%A0%EC%8A%A4%ED%8A%B8 ; https://www.teamblind.com/kr/company ; https://www.teamblind.com/kr/introduce ; https://recruit.teamblind.com/ ; https://www.teamblind.com/why-blind
**Tier 2 sources:** getdesign.md/teamblind (HTTP 200, "teamblind — 0 DESIGN.md files") and styles.refero.design/?q=blind (HTTP 200, no Blind style entry), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

### States

Only these states were observed on the three captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Hover / pressed (로그인)** | Background and border go from `#fb5957` to `#ff928b` on all three pages. |
| **Hover / pressed (navigation)** | Inactive items go from `#5f6b7c` to `#939dac` on all three pages. |
| **Selected (navigation)** | The current section reads `#18202a`. |
| **Selected (company card)** | `#f2faff` fill with a 1px solid `#007aff` border. |
| **Current chip (topic page)** | `#ffffff` text; the fill was not recorded. |

The header search's pressed frame moved focus into the field, and focus is not declared from collector frames, so no input state is given. Error, empty, loading and success states were not captured and are not described.

## Do's and Don'ts

### Do
- Keep `#fb5957` for the one primary action in the header, with `#ff928b` on hover and press
- Use `#007aff` for channel links and company-review actions, and `#f2faff` with a `#007aff` border for selection
- Set post titles at 14px / 600 in `#222222` with 8px row padding
- Use the grey navigation scale: `#5f6b7c` at rest, `#939dac` on hover, `#18202a` when current
- Make search prominent: a 60px pill with a 2px `#222222` outline on home
- Set everything in Pretendard

### Don't
- Don't spread coral across headings, links or decoration; it appears on one action
- Don't add drop shadows; nothing captured has one
- Don't use display sizes on the community pages; 18px is the ceiling there
- Don't invent focus rings or chip fills; neither was measured
- Don't treat the stylesheet's other declared scales as rendered colours

## Voice & Tone

Blind's voice is direct and peer-level. Korean UI labels are plain and functional ("홈", "채널", "기업 리뷰", "더보기", "내 회사 리뷰하기"), the one exclamation is the search prompt, and the corporate voice makes honesty a value: "표현은 솔직하게, 공유는 투명하게".

| Context | Tone |
|---|---|
| Service UI labels | Plain, functional Korean: "홈", "채널", "기업 리뷰", "더보기". |
| Search prompt | Friendly imperative: "관심있는 내용을 검색해보세요!" |
| Company-review hub | Confident, data-backed: "1,300만 명의 커리어 데이터로 증명된 진짜 좋은 회사". |
| Service and careers pages | Declarative: "블라인드, 모든 변화의 시작". |
| Trust and safety | Sober: 신고가이드, 개인정보 처리방침 and 이용약관 sit plainly in the footer. |

**Voice samples (verbatim, opened 2026-09-30):**
- "블라인드 | 직장인 기업 연봉 & 이직 커리어" — www.teamblind.com/kr page title.
- "관심있는 내용을 검색해보세요!" — home hero search placeholder.
- "15만 개의 기업 중 숨겨진 진짜 나만의 1위 기업" — company-review hub hero.
- "블라인드, 모든 변화의 시작" — service introduction and careers pages.
- "Level up your career in real-time" — the global site's Why Blind page.

**Forbidden register**: HR euphemism, hype superlatives, and anything that suggests the platform curates or sanitises what members say.

## Agent Prompt Guide

### Quick Color Reference
- Primary action: `#fb5957` with `#ffffff` text; hover and press `#ff928b`
- Accent: `#007aff`; selection tint `#f2faff`
- Text: `#222222`; current nav `#18202a`; nav `#5f6b7c`; nav hover `#939dac`; counts `#94969b`; footer `#42424b`
- Borders: `#d4d4d4` (search), `#e6e8ef` (cards); app buttons `#f2f2f3`

### Example Component Prompts
- "Create a Blind header: white bar, 16px / 600 Pretendard navigation in `#5f6b7c` with the current item `#18202a` and hover `#939dac`, a 248 × 40 search pill (white, 1px solid `#d4d4d4`, 20px radius), and a 로그인 button: `#fb5957` fill and border, `#ffffff` 14px / 600 label, 4px radius, 40px tall, hover `#ff928b`."
- "Build a home topic board: 18px / 600 `#222222` heading with a 12px / 600 `#5f6b7c` 더보기 link, then post rows of 14px / 600 `#222222` titles with 8px vertical padding and 12px `#94969b` counts. No cards, no shadows."
- "Make a hero search: 60px-tall pill, white, 2px solid `#222222`, 30px radius, 18px Pretendard, placeholder '관심있는 내용을 검색해보세요!'."
- "Make a company card row: 173 × 128 white cards with 1px solid `#e6e8ef` borders and 8px radius; the selected card `#f2faff` with a 1px solid `#007aff` border."

### Iteration Guide
1. One coral action per screen, in the header
2. Blue only for channel links, company actions and selection
3. Pretendard at UI sizes; 600 for emphasis
4. Grey scale for navigation state
5. Flat: borders and tint, never shadows

---

## Governance

### Known Gaps

- **Contrast, `login-button`.** Text `#ffffff` on `#fb5957` measures 3.15:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `gnb-tab`.** Text `#5f6b7c` on `#00000000` measures 3.88:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `more-link`.** Text `#5f6b7c` on `#00000000` measures 3.88:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `company-action`.** Text `#ffffff` on `#007aff` measures 4.02:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
