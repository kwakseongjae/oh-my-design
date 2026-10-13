---
name: Weverse
colors:
  primary: '#00cbd5'
  primary-text: '#00b8c1'
  ink: '#000000'
  canvas: '#ffffff'
  shop-ink: '#202429'
  shop-heading: '#111111'
  shop-body: '#484848'
  muted: '#8e8e8e'
  hairline: '#ebedf2'
typography:
  banner-title:
    fontSize: 28px
    fontWeight: 800
    lineHeight: 1.29
    use: Headline on the Weverse Shop home's banner slides, white over imagery or black on light slides
  artist-name:
    fontSize: 24px
    fontWeight: 800
    lineHeight: 1.29
    use: Artist names over artist cards on the Weverse Shop home, white
  section:
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.28
    use: Section headings on the Weverse Shop home
  list-title:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.38
    use: Titles of the recommended DM and featured-community lists on weverse.io
  shop-body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1
    use: Body text on Weverse Shop (line height computes 16px)
  tab:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.29
    use: Category tabs on Weverse Shop and DM chips on weverse.io
  button:
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.29
    use: 로그인 label on weverse.io and the full-width outlined pill on Weverse Shop
  prompt:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.29
    use: Sign-in prompt in the global menu on weverse.io, grey
  meta:
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.31
    use: Product meta lines under Weverse Shop products
  body:
    fontSize: 13px
    fontWeight: 400
    use: Body text on weverse.io (line height computes normal)
  badge:
    fontSize: 11px
    fontWeight: 700
    lineHeight: 1.27
    use: Artist-name badge on weverse.io banner slides
rounded:
  control: 8px
  card: 16px
  float: 18px
  pill: 100px
spacing:
  control-x: 16
  menu-y: 12
  menu-x: 16
  card: 16
components:
  login-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#00b8c1'
    border: '1px solid #00cbd5'
    rounded: 8px
    padding: 0px 16px
    height: 36px
    typography: 14px / 700 / 18px Pretendard
    states: rest only; not probed, because a press opens sign-in; the collector recorded no state frame for it
    use: '로그인 in the global menu''s sign-in block under the prompt 로그인하고 나만의 아티스트를 만나보세요! at home::[data-omd-capture="3"], 70 x 36; the label span also computes #00b8c1; its own class is button-_--secondary1; the only teal on a product action across the three captured pages (the artist shop''s cookie bar renders a separate teal, #08ccca, on its 전체 동의 label)'
  global-menu-item:
    type: button
    backgroundColor: transparent
    textColor: '#000000'
    rounded: 8px
    padding: 12px 16px
    height: 48px
    typography: 13px / 400 Pretendard
    hover: 'bg #ffffff'
    pressed: 'bg #ffffff'
    states: 'hover and pressed both read bg #ffffff on all seven sibling items (captures 4-10), a full step from transparent to a clean value, so both are declared; focus is not declared'
    use: Items of the global menu on weverse.io at home::[data-omd-capture="4"], 225 x 48; labels were not read
  shop-tab:
    type: tab
    backgroundColor: '#ffffff'
    textColor: '#000000'
    border: '1px solid #ebedf2'
    rounded: 100px
    padding: 0px 16px
    height: 36px
    typography: 14px / 500 / 18px Pretendard
    selected: 'bg #000000, fg #ffffff, border 1px solid #000000 (capture 170, aria-selected true)'
    states: selected read from rest values; the collector's interaction pass activated three tabs (captures 171-173) and each became selected; no pointer frame
    use: Category tabs on Weverse Shop at surface-2::[data-omd-capture="171"]; on the BTS artist shop they read NEW, Merch, Tour Merch, BT21, Album and Global Membership
  shop-carousel-arrow:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#202429'
    border: 1px solid rgba(0, 0, 0, 0.1)
    rounded: 100px
    height: 36px
    disabled: the collector recorded a disabled state in this group of 18 instances; no separate disabled colour was isolated
    states: rest and disabled at capture; no pointer frame
    use: Previous and next arrows of the carousels on the Weverse Shop home at surface-2::[data-omd-capture="49"], 36 x 36
  banner-arrow:
    type: button
    backgroundColor: rgba(0, 0, 0, 0.2)
    textColor: '#ffffff'
    border: 1px solid rgba(0, 0, 0, 0.04)
    rounded: 100px
    height: 36px
    states: rest only; the collector recorded no state frame for it
    use: Round controls of the weverse.io banner carousel at home::[data-omd-capture="22"], 36 x 36
  community-badge:
    type: badge
    backgroundColor: rgba(255, 255, 255, 0.04)
    textColor: '#ffffff'
    border: 1px solid rgba(255, 255, 255, 0.2)
    rounded: 100px
    padding: 0px 8px
    height: 24px
    typography: 11px / 700 / 14px Pretendard
    use: 'Artist-name badge on dark weverse.io banner slides (home::div, 81 x 24); a second variant reads rgba(0, 0, 0, 0.04) fill, #000000 text and a rgba(0, 0, 0, 0.2) border'
  dm-chip:
    type: badge
    backgroundColor: transparent
    textColor: '#000000'
    rounded: 100px
    padding: 0px 20px 0px 6px
    height: 44px
    typography: 14px / 500 / 18px Pretendard
    shadow: rgb(235, 237, 242) 0px 0px 0px 1px inset
    use: Recommended Weverse DM chips on weverse.io (home::span, chips-_-wrapper), 133 x 44, a 32px round avatar followed by the artist name
  community-row:
    type: listItem
    textColor: '#000000'
    height: 76px
    use: Featured-community rows on weverse.io at home::[data-omd-capture="35"], 516 x 76, each led by a 72 x 72 avatar
  shop-card:
    type: card
    backgroundColor: '#ffffff'
    textColor: '#202429'
    rounded: 16px
    padding: 16px
    shadow: rgba(0, 0, 0, 0.12) 0px 4px 28px 0px
    use: Raised white panel on the Weverse Shop home (surface-2::article, 1080 x 202) and the artist shop's side panels (713 and 347 wide)
  shop-outline-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#000000'
    border: 1px solid rgba(0, 0, 0, 0.2)
    rounded: 100px
    padding: 0px 16px
    height: 36px
    typography: 14px / 700 / 18px Pretendard
    states: rest only; no state frame
    use: Full-width outlined pill on the Weverse Shop home at surface-2::[data-omd-capture="37"], 1048 x 36; its label was not read
fonts:
  roles:
    sans: Pretendard
---

# Design System Inspiration of Weverse

## Overview

### Visual Theme & Atmosphere

Weverse (위버스) is the fan platform that calls itself a "Global Fandom Platform". It is run by Weverse Company Inc. ((주)위버스컴퍼니), whose footer on weverse.io gives a Pangyo address in Seongnam and names two affiliates, Weverse Japan Inc. and Weverse America Inc. HYBE's business page lists WEVERSE COMPANY under a promise to reinvent fandom culture with IT: "모든 팬이 즐겁고 행복할 수 있는 공간, 팬과 아티스트가 더 가깝게 연결되는 세상을 만듭니다." — a space where every fan can be happy, and a world where fans and artists are more closely connected. HYBE describes itself as a global entertainment lifestyle platform company based on music and technology.

Logged out, weverse.io is a front door rather than a feed. A banner carousel carries artist news (SEVENTEEN, &TEAM, BTS, ENHYPEN, TOMORROW X TOGETHER, CORTIS and others), with 추천 커뮤니티, recommended Weverse DM and "서비스 바로가기" links to Shop and Jelly Shop. The communities themselves are for members: a logged-out visit to an artist's feed shows "커뮤니티 멤버만 이용 가능합니다." Weverse Shop, the service linked from that home, calls itself "전 세계 모든 팬들을 위한 No.1 Official Merch Store!", selling everything from global official fan-club memberships to Shop-exclusive goods. Weverse Magazine runs at magazine.weverse.io. The product is still growing: the home was promoting a web subscription offer for Weverse DM when it was captured, and the footer states that Weverse Shop includes items from independent sellers.

The captured pages read as a white stage for artist imagery. weverse.io is white `#ffffff` with pure black `#000000` text, set entirely in Pretendard. The one colour the product adds is a teal: the 로그인 call-to-action in the global menu is a white 8px button with a 1px `#00cbd5` outline and a `#00b8c1` label. Communities appear as rows of round-square 72px avatars, and recommended DMs as 44px pill chips drawn with a 1px `#ebedf2` inset ring. Weverse Shop keeps the same family but warms the ink to `#202429`, heads sections in 18px/700, sets banner headlines in 28px ExtraBold (800), and marks the selected category tab with a black `#000000` pill. Shop panels are the only raised surfaces: white 16px cards with a soft `rgba(0, 0, 0, 0.12) 0px 4px 28px` shadow.

**Key Characteristics:**
- Pretendard everywhere; weight carries the hierarchy (800 banner and artist names, 700 headings and actions, 500 tabs, 400 body)
- One accent, the teal `#00cbd5` outline with a `#00b8c1` label, on the 로그인 call-to-action
- White canvas with pure black text on weverse.io; warmer ink `#202429` on Weverse Shop
- Pill geometry for tabs, chips, badges and carousel controls (100px); 8px for the login button and menu items; 16px for Shop cards
- Selection on Shop by a black `#000000` pill with white text
- Flat home; raised white cards and round floating controls on Shop
- Artist photography carries the colour of the banners

### Primary tasks

- Find an artist community and sign in to join it
- Subscribe to an artist's Weverse DM
- Buy official albums, merch and memberships on Weverse Shop
- Browse an artist's shop by category (NEW, Merch, Tour Merch, Album, Global Membership)

### Brand Narrative

Weverse belongs to HYBE's technology business. HYBE's business page places WEVERSE COMPANY under a statement of purpose: HYBE uses IT to innovate fandom culture and extend the customer experience, making "모든 팬이 즐겁고 행복할 수 있는 공간" and a world where "팬과 아티스트가 더 가깝게 연결되는" — fans and artists more closely connected. HYBE's own mission is "DISCOVER A NEW UNIVERSE, UNLOCK AN IMMERSIVE JOURNEY", and its vision a "음악과 기술에 기반한 글로벌 엔터테인먼트 라이프스타일 플랫폼 기업".

The platform has grown into a family of services under one company. weverse.io hosts artist communities and Weverse DM, and links from its home to Weverse Shop and Jelly Shop. Weverse Shop sells official merchandise and global fan-club memberships and also lists products from independent sellers, and Weverse Magazine publishes at magazine.weverse.io. The company operates from Pangyo with Japanese and American affiliates, which fits the platform's global audience.

The interface follows that purpose: the home is organised around communities, DM and artist news rather than products, and the single teal is spent on the invitation to sign in. (This reading of the design is editorial, not a Weverse statement.)

### Principles

1. **Fans and artists, closer.** HYBE's stated purpose for the platform. *UI implication:* lead with communities, DMs and artist news; keep chrome quiet.
2. **One invitation.** *UI implication:* spend the teal on the sign-in action and nowhere else. (Editorial, from the captured pages.)
3. **Artists carry the colour.** *UI implication:* black, white and grey chrome; colour comes from banners and avatars.
4. **For fans everywhere.** Shop addresses "전 세계 모든 팬들" and the company runs Japanese and American affiliates. *UI implication:* short, plain copy that travels; currency and language selectors on Shop (KO, KRW, KR in the header).
5. **Choices as pills.** *UI implication:* tabs, chips and carousel controls share the 100px pill; selection turns the pill black.

### Personas

*Personas below are fictional archetypes informed by publicly observable Weverse user segments (global K-pop fans, community members, merchandise buyers), not individual people.*

**Mina, 19, Seoul.** A daily community user. Signs in from the home, follows her group's posts and subscribes to a member's Weverse DM.

**Sofia, 24, São Paulo.** A global fan who buys albums and a fan-club membership on Weverse Shop because they are official and ship abroad.

**Jae, 28, Los Angeles.** Reads Weverse Magazine and checks an artist's shop for new tour merch under the Tour Merch tab.

## Colors

Every token below was read by the deterministic collector on 2026-09-30 from weverse.io, the Weverse Shop home and the BTS artist shop.

### Primary
- **Weverse Teal** (`#00cbd5`): The 1px outline of the 로그인 call-to-action in the global menu's sign-in block (`home::[data-omd-capture="3"]`, `border: 1px rgb(0, 203, 213)`, 70 × 36). It is the primary because it is the one chromatic colour the product renders on an action, and that action is the one a logged-out visitor is asked to take, under the prompt "로그인하고 나만의 아티스트를 만나보세요!". Every other captured action is neutral, and the two Weverse Shop pages captured today render no teal: Shop marks selection with black. The button's own class is `button-_--secondary1`, so Weverse's component library calls this outlined style a secondary variant; no filled teal button appeared on these pages, and none is specified.
- **Teal Text** (`#00b8c1`): The label of the same button (the button and its label span both compute `rgb(0, 184, 193)`).

### Ink & Neutral
- **Ink** (`#000000`): Body text on weverse.io, menu items, chips and community rows; also the fill of the selected Shop tab.
- **Shop Ink** (`#202429`): Body text on Weverse Shop.
- **Shop Heading** (`#111111`): Section headings on the Weverse Shop home.
- **Shop Body** (`#484848`): Product meta lines on Weverse Shop.
- **Muted** (`#8e8e8e`): The sign-in prompt in the global menu.
- **Hairline** (`#ebedf2`): The 1px border of unselected Shop tabs and the inset ring of DM chips.

### Surface
- **Canvas** (`#ffffff`): Page background on weverse.io, Shop tabs and cards.

### Brand assets, not tokens
- The Weverse logo and wordmark were not measured, and no logo colour is a token here. A blue `#5989fe` marks "예약판매" (pre-order) labels on Shop products, but only two captured elements carry it, so it stays out of the tokens.
- Weverse's cookie bar, which appeared on the artist shop, renders its 전체 동의 label in teal `#08ccca` on `#3a3a3a`. It is consent chrome, not a product action, and supplies no token.

## Typography

### Font Family
- **Live surface use**: `Pretendard` (1,221 observed uses across all three pages), self-hosted by Weverse as v1.3.9 subsets from `cdn-v2pstatic.weverse.io/wev_web_fe/assets/fonts/pretendard/v1.3.9/` (woff2 with woff companions).
- **Licence**: Pretendard is an open typeface by Kil Hyung-jin, distributed under the SIL Open Font License 1.1 (the LICENSE file in github.com/orioncactus/pretendard, read 2026-09-30). It is not a Weverse-owned face.
- **Declared only (no visible use)**: `Circular` (Circular XX web files on the same Weverse CDN), `Noto Sans JP` (same CDN) and `Open Sans` (fonts.gstatic.com) — 0 observed uses. No licence is claimed for Circular XX.
- **Third-party**: `swiper-icons`, the carousel library's icon font, is excluded.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Observed on |
|------|------|------|--------|-------------|-------------|
| Banner title | Pretendard | 28px | 800 | 36px (1.29) | Weverse Shop home banners |
| Artist name | Pretendard | 24px | 800 | 31px (1.29) | Shop artist cards, white |
| Section | Pretendard | 18px | 700 | 23px (1.28) | Shop section headings |
| List title | Pretendard | 16px | 700 | 22px (1.38) | weverse.io list titles |
| Shop body | Pretendard | 16px | 400 | 16px (1.0) | Weverse Shop body |
| Tab | Pretendard | 14px | 500 | 18px (1.29) | Shop tabs, DM chips |
| Button | Pretendard | 14px | 700 | 18px (1.29) | 로그인, Shop outlined pill |
| Prompt | Pretendard | 14px | 500 | 18px (1.29) | Sign-in prompt, grey |
| Meta | Pretendard | 13px | 400 | 17px (1.31) | Shop product meta |
| Body | Pretendard | 13px | 400 | normal | weverse.io body |
| Badge | Pretendard | 11px | 700 | 14px (1.27) | Banner artist badges |

### Principles
- **One family, weight-led hierarchy**: every captured text is Pretendard; 800 names artists and banners, 700 heads sections and labels actions, 500 sets tabs, 400 reads.
- **Small, dense base**: weverse.io body text is 13px; Shop reading text is 16px.
- **Normal tracking**: no captured product text sets letter-spacing.

## Layout

### Spacing System
- Controls: 16px horizontal padding (login button, Shop tabs, Shop pill)
- Menu items: 12px 16px
- Shop cards: 16px
- DM chips: 6px before the avatar, 20px after the name
- The collector's spacing census is led by 12px (123 uses), then 6px (72), 16px (64) and 8px (62)

### Grid & Container
- weverse.io: a left global menu (sign-in block, then 48px items) beside a banner carousel, a row of recommended DM chips and a two-column list of featured communities.
- Weverse Shop home: full-width banner slides with 28px headlines, artist cards with white 24px names, product rails in 253px columns, and 16px cards.
- Artist shop: a row of category tabs above the product grid, with raised side panels.

### Whitespace Philosophy
- **Artist first**: banners and avatars carry the colour; the chrome stays black, white and grey.
- **Pills for choices**: tabs, chips and carousel controls share the 100px pill.

### Border Radius Scale
- 0px: most elements (983 captured)
- 8px: login button and menu items
- 16px: Shop cards
- 18px: 32px round Shop controls
- 100px: tabs, chips, badges, carousel controls
- 50%: avatars

### Responsive Behavior

#### Breakpoints
Only the 1440 × 900 desktop viewport was captured. Class names such as `featured-community-list-view-on-non-mobile` and `home-banner-on-desktop-view` show separate mobile layouts; no breakpoint was measured.

#### Touch Targets
- Global menu items: 48px
- DM chips: 44px
- Login button, tabs, carousel controls, outlined pill: 36px
- Round Shop controls: 32px

#### Collapsing Strategy
- Not measured.

#### Image Behavior
- Artist imagery fills the banner slides and cards; avatars are round (DM chips) or round-square (community rows).

## Elevation & Depth

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | weverse.io page, menu, rows, login button |
| Ring | `rgb(235, 237, 242) 0px 0px 0px 1px inset` | DM chips |
| Hairline | 1px `#ebedf2` / rgba(0, 0, 0, 0.1–0.2) | Tabs, arrows, outlined pill |
| Float | `rgba(0, 0, 0, 0.08) 0px 2px 12px 0px` | 32px round Shop controls |
| Card | `rgba(0, 0, 0, 0.12) 0px 4px 28px 0px` | Shop cards |

**Shadow Philosophy**: weverse.io is flat; its chips use an inset ring instead of a border. Weverse Shop lifts its panels with one soft, wide shadow and gives its small round controls a lighter one.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.card`: `rgba(0, 0, 0, 0.12) 0px 4px 28px 0px`
- `shadow.float`: `rgba(0, 0, 0, 0.08) 0px 2px 12px 0px`
- `shadow.chip-ring`: `rgb(235, 237, 242) 0px 0px 0px 1px inset`

## Motion & Easing

The collector reads computed style, not animation, so no duration or easing is measured. The home banner and the Shop rails are carousels, which shows motion exists without timing it. Treat motion as unspecified rather than borrowing values, and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/weverse.json (capturedAt 2026-09-30T07:57:22Z), deterministic collector, 1440x900, logged out: weverse.io (the frontmatter homepage), shop.weverse.io/ko/home (shop.weverse.io redirects there; linked from the weverse.io home under 서비스 바로가기 and named in the weverse.io footer), shop.weverse.io/ko/shop/KRW/artists/2.
- §1, §10, §11 context: the weverse.io footer and home, Weverse Shop home, logged-out community pages (weverse.io/bts/feed and others), hybecorp.com company and business pages, magazine.weverse.io (title only), all opened 2026-09-30. Pretendard licence: github.com/orioncactus/pretendard LICENSE.
- Personas are fictional archetypes. Interpretive readings are marked as editorial.
-->

## Components

### Buttons

**Sign-in call-to-action**
- Background: `#ffffff`
- Text: `#00b8c1`
- Border: 1px solid `#00cbd5`
- Radius: 8px
- Padding: 0px 16px
- Height: 36px
- Font: 14px / 700 / 18px Pretendard
- States: rest only; not probed, because a press opens sign-in
- Use: 로그인 in the global menu, under the grey prompt "로그인하고 나만의 아티스트를 만나보세요!"

**Global menu item**
- Background: transparent
- Text: `#000000`
- Radius: 8px
- Padding: 12px 16px
- Height: 48px (225px wide)
- Font: 13px / 400 Pretendard
- Hover and pressed: background `#ffffff` (all seven items agree)
- Use: items of the global menu on weverse.io

**Shop outlined pill**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid rgba(0, 0, 0, 0.2)
- Radius: 100px
- Padding: 0px 16px
- Height: 36px (full width, 1048px)
- Font: 14px / 700 / 18px Pretendard
- States: rest only
- Use: a full-width action on the Weverse Shop home

**Carousel controls**
- Shop arrows: `#ffffff`, computed colour `#202429`, 1px rgba(0, 0, 0, 0.1) border, radius 100px, 36 × 36; a disabled state was recorded in the group
- weverse.io banner controls: rgba(0, 0, 0, 0.2) fill, `#ffffff` computed colour, 1px rgba(0, 0, 0, 0.04) border, radius 100px, 36 × 36

### Tabs

**Shop category tab**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#ebedf2`
- Radius: 100px
- Padding: 0px 16px
- Height: 36px
- Font: 14px / 500 / 18px Pretendard
- Selected: background `#000000`, text `#ffffff`, border 1px solid `#000000`
- Use: NEW, Merch, Tour Merch, BT21, Album, Global Membership on an artist shop, and the category tabs on the Shop home

### Chips & Badges

**DM chip**
- Background: transparent, with a 1px inset ring `rgb(235, 237, 242) 0px 0px 0px 1px inset`
- Text: `#000000`
- Radius: 100px
- Padding: 0px 20px 0px 6px
- Height: 44px
- Font: 14px / 500 / 18px Pretendard
- Use: recommended Weverse DM on weverse.io, a 32px round avatar and the artist's name

**Banner artist badge**
- Background: rgba(255, 255, 255, 0.04)
- Text: `#ffffff`
- Border: 1px solid rgba(255, 255, 255, 0.2)
- Radius: 100px
- Padding: 0px 8px
- Height: 24px
- Font: 11px / 700 / 14px Pretendard
- Second variant: rgba(0, 0, 0, 0.04) fill, `#000000` text, rgba(0, 0, 0, 0.2) border

### Cards & Lists

**Shop card**
- Background: `#ffffff`
- Text: `#202429`
- Radius: 16px
- Padding: 16px
- Shadow: rgba(0, 0, 0, 0.12) 0px 4px 28px 0px
- Use: raised panels on the Shop home and the artist shop's side panels

**Community row**
- Text: `#000000`
- Height: 76px (516px wide), led by a 72 × 72 avatar
- Use: featured communities on weverse.io

---

**Verified:** 2026-09-30 (deterministic collector capture of weverse.io and two Weverse Shop pages, logged out, plus first-party company context)
**Tier 1 sources:** https://weverse.io/ ; https://shop.weverse.io/ko/home ; https://shop.weverse.io/ko/shop/KRW/artists/2 ; https://hybecorp.com/ko/company/business/ ; https://hybecorp.com/ko/company/info/
**Tier 2 sources:** getdesign.md/weverse ("weverse — 0 DESIGN.md files") and styles.refero.design/?q=weverse (the query appears only in the search box), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

### States

Only these states were observed on the three captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Selected (Shop tab)** | Black `#000000` pill with `#ffffff` text and a black border; unselected tabs are white with a 1px `#ebedf2` border. The collector activated three tabs and each became selected. |
| **Hover / pressed (global menu item)** | Background turns `#ffffff` from transparent on all seven items. |
| **Disabled (Shop carousel arrow)** | The collector recorded a disabled state in the arrow group; no separate colour was isolated. |
| **Members only** | Logged out, community pages show "커뮤니티 멤버만 이용 가능합니다." with a 로그인 후 계속 action. |

A hover frame on a Shop header control read `rgba(0, 0, 0, 0.004)`, a mid-transition value, so it is not declared; no focus value is declared from the bundle. The login button was not probed. Error, empty, loading and success states were not captured and are not described.

## Do's and Don'ts

### Do
- Set everything in Pretendard and carry hierarchy with weight (800 / 700 / 500 / 400)
- Keep the teal for the one call-to-action: 1px `#00cbd5` outline, `#00b8c1` label, 8px radius
- Use black `#000000` pills with white text for the selected Shop tab, and white pills with a 1px `#ebedf2` border for the rest
- Use 100px pills for chips, badges and carousel controls
- Raise Shop panels with `rgba(0, 0, 0, 0.12) 0px 4px 28px 0px` on 16px cards
- Let artist photography colour the banners

### Don't
- Don't spread the teal across the page; it appears on one action
- Don't invent a filled teal button; none was observed
- Don't mix in a second typeface
- Don't use the cookie banner's dark bar and teal label as product components
- Don't use grey for body text; use `#000000` on weverse.io and `#202429` on Shop
- Don't treat the two `#5989fe` pre-order labels as a brand colour

## Voice & Tone

Weverse speaks to fans plainly and warmly, in Korean first with English product names. It invites rather than sells: the home asks visitors to sign in and meet their artist, and Shop frames itself as the store for fans everywhere.

| Context | Tone |
|---|---|
| Platform | Short and global. "Global Fandom Platform". |
| Sign-in | An invitation. "로그인하고 나만의 아티스트를 만나보세요!" |
| Community access | Clear and polite. "커뮤니티 멤버만 이용 가능합니다." |
| Shop | Celebratory and inclusive. "전 세계 모든 팬들을 위한 No.1 Official Merch Store!" |
| Banners | Artist first, then the offer. "위버스샵에서 예약 판매 중!" |

**Voice samples (verbatim, opened 2026-09-30):**
- "Global Fandom Platform - Weverse" — weverse.io page title.
- "로그인하고 나만의 아티스트를 만나보세요!" — sign-in prompt in the global menu.
- "Weverse Shop - All Things for Fans!" — Weverse Shop page title.
- "전 세계 모든 팬들을 위한 No.1 Official Merch Store!" — Weverse Shop home.
- "커뮤니티 멤버만 이용 가능합니다." — a community page, logged out.

**Forbidden register**: gatekeeping language, hard-sell urgency, hype that overshadows the artist, copy that treats fans as buyers only.

## Agent Prompt Guide

### Quick Color Reference
- Call-to-action: outline `#00cbd5`, label `#00b8c1`, fill `#ffffff`
- weverse.io text `#000000` on `#ffffff`; sign-in prompt `#8e8e8e`
- Shop ink `#202429`; headings `#111111`; meta `#484848`
- Hairline `#ebedf2`; selected tab `#000000` with `#ffffff` text

### Example Component Prompts
- "Create a Weverse sign-in button: `#ffffff` background, 1px solid `#00cbd5` border, `#00b8c1` 14px Pretendard label at weight 700 (line height 18px), 8px radius, 0 16px padding, 36px tall."
- "Build Shop category tabs: 36px pills (100px radius), 0 16px padding, 14px / 500 Pretendard; unselected `#ffffff` with `#000000` text and a 1px `#ebedf2` border; selected `#000000` with `#ffffff` text."
- "Make a recommended-DM chip: 44px pill, 0 20px 0 6px padding, a 32px round avatar, 14px / 500 `#000000` name, and a 1px inset ring `rgb(235, 237, 242)`."
- "Create a Shop panel: `#ffffff` card, 16px radius, 16px padding, shadow `rgba(0, 0, 0, 0.12) 0px 4px 28px 0px`, `#202429` text."

### Iteration Guide
1. Pretendard only; weight is the hierarchy
2. Teal on one action; black for selection
3. 100px pills for choices, 8px for the login button and menu items, 16px for cards
4. Flat home, raised Shop panels
5. Artist imagery carries colour

---

## Governance

### Known Gaps

- **Contrast, `login-button`.** Text `#00b8c1` on `#ffffff` measures 2.43:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `global-menu-item`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `community-badge`.** Text `#ffffff` on `#ffffff0a` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `dm-chip`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
