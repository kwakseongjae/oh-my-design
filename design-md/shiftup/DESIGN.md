---
id: shiftup
name: Shift Up
display_name_kr: 시프트업
country: KR
category: consumer-tech
homepage: "https://shiftup.co.kr"
primary_color: "#569a43"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=shiftup.co.kr&sz=128"
verified: "2026-09-30"
added: "2026-06-17"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: corporate, url: "https://shiftup.co.kr/", inspected: "2026-09-30" }
    - { id: surface-2, kind: corporate, url: "https://shiftup.co.kr/games/games.php", inspected: "2026-09-30" }
    - { id: surface-3, kind: corporate, url: "https://shiftup.co.kr/recruit/recruit.php?searchkey=&category=0", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://shiftup.co.kr/", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://shiftup.co.kr/games/games.php", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://shiftup.co.kr/recruit/recruit.php?searchkey=&category=0", captured: "2026-09-30" }
    - { id: shiftup-probe-home, kind: product-surface, url: "https://shiftup.co.kr/", captured: "2026-09-30" }
    - { id: shiftup-probe-games, kind: product-surface, url: "https://shiftup.co.kr/games/games.php", captured: "2026-09-30" }
    - { id: shiftup-probe-recruit, kind: product-surface, url: "https://shiftup.co.kr/recruit/recruit.php?searchkey=&category=0", captured: "2026-09-30" }
    - { id: shiftup-about, kind: official-doc, url: "https://shiftup.co.kr/about/about.php", captured: "2026-09-30" }
    - { id: shiftup-culture, kind: official-doc, url: "https://shiftup.co.kr/recruit/culture.php", captured: "2026-09-30" }
    - { id: shiftup-news, kind: official-doc, url: "https://shiftup.co.kr/news/news.php", captured: "2026-09-30" }
    - { id: shiftup-governance, kind: official-doc, url: "https://shiftup.co.kr/ir/governance.php", captured: "2026-09-30" }
    - { id: pretendard-license, kind: license, url: "https://raw.githubusercontent.com/orioncactus/pretendard/main/LICENSE", captured: "2026-09-30" }
    - { id: roboto-condensed-license, kind: license, url: "https://raw.githubusercontent.com/google/fonts/main/ofl/robotocondensed/OFL.txt", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &sel { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"35\"]", captured: "2026-09-30" }
    "tokens.colors.ink": &title { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h4", captured: "2026-09-30" }
    "tokens.colors.white": &body { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::body", captured: "2026-09-30" }
    "tokens.colors.body": *body
    "tokens.colors.surface": &search { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"33\"]", captured: "2026-09-30" }
    "tokens.colors.hairline": &cat { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"36\"]", captured: "2026-09-30" }
    "tokens.typography.family.display": &display { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-09-30" }
    "tokens.typography.family.body": *body
    "tokens.typography.display-xl.size": &banner { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h3", captured: "2026-09-30" }
    "tokens.typography.display-xl.weight": *banner
    "tokens.typography.display-xl.lineHeight": *banner
    "tokens.typography.display-xl.use": *banner
    "tokens.typography.display.size": *display
    "tokens.typography.display.weight": *display
    "tokens.typography.display.lineHeight": *display
    "tokens.typography.display.use": *display
    "tokens.typography.list-head.size": &listhead { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h3", captured: "2026-09-30" }
    "tokens.typography.list-head.weight": *listhead
    "tokens.typography.list-head.lineHeight": *listhead
    "tokens.typography.list-head.tracking": *listhead
    "tokens.typography.list-head.use": *listhead
    "tokens.typography.card-title.size": *title
    "tokens.typography.card-title.weight": *title
    "tokens.typography.card-title.lineHeight": *title
    "tokens.typography.card-title.tracking": *title
    "tokens.typography.card-title.use": *title
    "tokens.typography.game-title.size": &game { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h4", captured: "2026-09-30" }
    "tokens.typography.game-title.weight": *game
    "tokens.typography.game-title.lineHeight": *game
    "tokens.typography.game-title.tracking": *game
    "tokens.typography.game-title.use": *game
    "tokens.typography.news-title.size": &news { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h4", captured: "2026-09-30" }
    "tokens.typography.news-title.weight": *news
    "tokens.typography.news-title.lineHeight": *news
    "tokens.typography.news-title.tracking": *news
    "tokens.typography.news-title.use": *news
    "tokens.typography.lead.size": &lead { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::p", captured: "2026-09-30" }
    "tokens.typography.lead.weight": *lead
    "tokens.typography.lead.lineHeight": *lead
    "tokens.typography.lead.tracking": *lead
    "tokens.typography.lead.use": *lead
    "tokens.typography.nav.size": &nav { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"4\"]", captured: "2026-09-30" }
    "tokens.typography.nav.weight": *nav
    "tokens.typography.nav.lineHeight": *nav
    "tokens.typography.nav.tracking": *nav
    "tokens.typography.nav.use": *nav
    "tokens.typography.tab.size": *cat
    "tokens.typography.tab.weight": *cat
    "tokens.typography.tab.lineHeight": *cat
    "tokens.typography.tab.tracking": *cat
    "tokens.typography.tab.use": *cat
    "tokens.typography.body.size": *body
    "tokens.typography.body.weight": *body
    "tokens.typography.body.lineHeight": *body
    "tokens.typography.body.use": *body
    "tokens.typography.slider-tab.size": &slide { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::#slick-slide00", captured: "2026-09-30" }
    "tokens.typography.slider-tab.weight": *slide
    "tokens.typography.slider-tab.lineHeight": *slide
    "tokens.typography.slider-tab.tracking": *slide
    "tokens.typography.slider-tab.use": *slide
    "tokens.typography.link.size": &legal { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"52\"]", captured: "2026-09-30" }
    "tokens.typography.link.weight": *legal
    "tokens.typography.link.lineHeight": *legal
    "tokens.typography.link.tracking": *legal
    "tokens.typography.link.use": *legal
    "tokens.spacing.nav-y": *nav
    "tokens.spacing.nav-x": *nav
    "tokens.spacing.tab-y": *cat
    "tokens.spacing.tab-x": *cat
    "tokens.spacing.field-x": *search
    "tokens.spacing.field-inset": *search
    "tokens.rounded.none": *search
    "tokens.rounded.arrow": &arrow { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"29\"]", captured: "2026-09-30" }
    "tokens.components.slider-arrow.type": *arrow
    "tokens.components.slider-arrow.bg": *arrow
    "tokens.components.slider-arrow.fg": &arrowstate { surface_id: home, source_id: shiftup-probe-home, method: live-state-probe, selector: "button.slick-prev Previous and button.slick-next Next (90 x 90, rest bg rgb(86, 154, 67), ::after icon colour rgb(255, 255, 255)): hover and pressed bg -> rgb(255, 255, 255) and ::after colour -> rgb(86, 154, 67); focus (Tabs #60 and #62) no change on the control; transition all 0.3s linear", captured: "2026-09-30" }
    "tokens.components.slider-arrow.radius": *arrow
    "tokens.components.slider-arrow.size": *arrow
    "tokens.components.slider-arrow.hover": *arrowstate
    "tokens.components.slider-arrow.pressed": *arrowstate
    "tokens.components.slider-arrow.states": *arrowstate
    "tokens.components.slider-arrow.use": *arrow
    "tokens.components.outline-link.type": &ghost { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"27\"]", captured: "2026-09-30" }
    "tokens.components.outline-link.fg": &ghoststate { surface_id: surface-2, source_id: shiftup-probe-games, method: live-state-probe, selector: "a.more_btn 프로젝트 소개 and 채용 지원 (180 x 60, label in a child em at rgb(255, 255, 255)): hover and pressed ::before grows 0 x 56px -> 352 x 56px and the em label -> rgb(0, 0, 0); focus (Tabs #59 and #60) only the browser ring; transition all 0.4s linear", captured: "2026-09-30" }
    "tokens.components.outline-link.border": *ghost
    "tokens.components.outline-link.radius": *ghost
    "tokens.components.outline-link.height": *ghost
    "tokens.components.outline-link.size": *ghost
    "tokens.components.outline-link.hover": *ghoststate
    "tokens.components.outline-link.pressed": *ghoststate
    "tokens.components.outline-link.states": *ghoststate
    "tokens.components.outline-link.use": *ghost
    "tokens.components.nav-item.type": *nav
    "tokens.components.nav-item.fg": *nav
    "tokens.components.nav-item.font": *nav
    "tokens.components.nav-item.padding": *nav
    "tokens.components.nav-item.height": *nav
    "tokens.components.nav-item.hover": &navstate { surface_id: home, source_id: shiftup-probe-home, method: live-state-probe, selector: "a GAMES in the header (87 x 90.6, rest fg rgb(255, 255, 255)): hover and pressed fg -> rgb(0, 0, 0) and ::after grows 0 x 3px -> 87 x 3px; focus (Tab #5) only the browser ring; on the recruit page the same item rests at rgb(0, 0, 0) and hover grows only the ::after bar; transition all 0.3s linear", captured: "2026-09-30" }
    "tokens.components.nav-item.pressed": *navstate
    "tokens.components.nav-item.states": *navstate
    "tokens.components.nav-item.use": *nav
    "tokens.components.category-tab.type": *cat
    "tokens.components.category-tab.fg": *cat
    "tokens.components.category-tab.border": *cat
    "tokens.components.category-tab.font": *cat
    "tokens.components.category-tab.padding": *cat
    "tokens.components.category-tab.height": *cat
    "tokens.components.category-tab.selected": *sel
    "tokens.components.category-tab.hover": &catstate { surface_id: surface-3, source_id: shiftup-probe-recruit, method: live-state-probe, selector: "a.cat_item 사업 (313 x 56.6, rest fg rgb(119, 119, 119)): hover and pressed fg -> rgb(86, 154, 67), ::before grows 0 x 2px -> 313 x 2px, ::after colour rgba(119, 119, 119, 0.5) -> rgb(86, 154, 67); selected 전체 no change on hover or pressed; focus (Tabs #71 and #77) only the browser ring; transition all 0.3s linear", captured: "2026-09-30" }
    "tokens.components.category-tab.pressed": *catstate
    "tokens.components.category-tab.states": *catstate
    "tokens.components.category-tab.use": *cat
    "tokens.components.sub-nav-tab.type": &subnav { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"30\"]", captured: "2026-09-30" }
    "tokens.components.sub-nav-tab.fg": *subnav
    "tokens.components.sub-nav-tab.font": *subnav
    "tokens.components.sub-nav-tab.height": *subnav
    "tokens.components.sub-nav-tab.selected": { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"31\"]", captured: "2026-09-30" }
    "tokens.components.sub-nav-tab.hover": &substate { surface_id: surface-3, source_id: shiftup-probe-recruit, method: live-state-probe, selector: "a 채용안내 (59.4 x 70, rest fg rgb(255, 255, 255)): hover and pressed fg -> rgb(86, 154, 67); selected 채용공고 (rest rgb(86, 154, 67)) no change; focus (Tabs #62 and #63) only the browser ring; transition all 0.3s linear", captured: "2026-09-30" }
    "tokens.components.sub-nav-tab.pressed": *substate
    "tokens.components.sub-nav-tab.states": *substate
    "tokens.components.sub-nav-tab.use": *subnav
    "tokens.components.search-input.type": *search
    "tokens.components.search-input.bg": *search
    "tokens.components.search-input.fg": *search
    "tokens.components.search-input.radius": *search
    "tokens.components.search-input.padding": *search
    "tokens.components.search-input.height": *search
    "tokens.components.search-input.font": *search
    "tokens.components.search-input.states": { surface_id: surface-3, source_id: shiftup-probe-recruit, method: live-state-probe, selector: "input.search_input placeholder 검색어를 입력해주세요. (375 x 60, rest bg rgb(244, 244, 244), fg rgb(0, 0, 0)): hover, pressed and focus (Tab #69) no change across self and 3 ancestor levels; transition all 0s", captured: "2026-09-30" }
    "tokens.components.search-input.use": *search
    "tokens.components.slider-tab.type": *slide
    "tokens.components.slider-tab.fg": *slide
    "tokens.components.slider-tab.font": *slide
    "tokens.components.slider-tab.padding": *slide
    "tokens.components.slider-tab.selected": *slide
    "tokens.components.slider-tab.states": *slide
    "tokens.components.slider-tab.use": *slide
    "tokens.components.footer-legal-link.type": *legal
    "tokens.components.footer-legal-link.fg": *legal
    "tokens.components.footer-legal-link.font": *legal
    "tokens.components.footer-legal-link.hover": &legalstate { surface_id: home, source_id: shiftup-probe-home, method: live-state-probe, selector: "a.privacy 개인정보처리방침 (107 x 25.6, rest fg rgb(86, 154, 67)): hover and pressed ::before background-position 100% 50% -> 0px 50% (300% x 2px); focus (Tab #79) only the browser ring; transition all 0.7s cubic-bezier(0.215, 0.61, 0.355, 1)", captured: "2026-09-30" }
    "tokens.components.footer-legal-link.pressed": *legalstate
    "tokens.components.footer-legal-link.states": *legalstate
    "tokens.components.footer-legal-link.use": *legal
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#569a43"
    ink: "#000000"
    white: "#ffffff"
    body: "#777777"
    surface: "#f4f4f4"
    hairline: "#dddddd"
  typography:
    family: { display: "Roboto Condensed", body: "Pretendard" }
    display-xl: { size: 80, weight: 700, lineHeight: 1.15, use: "RECRUIT banner heading on the recruit page, Roboto Condensed, 92px line, white over the banner image" }
    display: { size: 50, weight: 700, lineHeight: 1.2, use: "Section headings on home, Roboto Condensed, 60px line, white over key art" }
    list-head: { size: 30, weight: 700, lineHeight: 1.4, tracking: -1.2, use: "Recruit list heading (the current category name), Pretendard, 42px line, #000000" }
    card-title: { size: 24, weight: 600, lineHeight: 1.5, tracking: -0.96, use: "Job posting titles on the recruit list (44 instances), Pretendard, 36px line, #000000" }
    game-title: { size: 24, weight: 500, lineHeight: 1.5, tracking: -0.96, use: "Game names on the games page and home game panels, Pretendard, 36px line, white" }
    news-title: { size: 20, weight: 400, lineHeight: 1.6, tracking: -0.8, use: "News headlines on home, Pretendard, 32px line, white" }
    lead: { size: 18, weight: 400, lineHeight: 1.7, tracking: -0.72, use: "Game descriptions on the games page, Pretendard, 30.6px line, white" }
    nav: { size: 18, weight: 500, lineHeight: 1.2, tracking: 0.36, use: "Header navigation (ABOUT, GAMES, RECRUIT, NEWS, IR, CONTACT), Roboto Condensed, 21.6px line" }
    tab: { size: 18, weight: 400, lineHeight: 1.2, tracking: -0.72, use: "Recruit category list items, Pretendard, 21.6px line; the selected item is weight 600" }
    body: { size: 16, weight: 400, lineHeight: 1.6, use: "Document default, Pretendard, 25.6px line, #777777" }
    slider-tab: { size: 16, weight: 700, lineHeight: 1.5, tracking: 0.32, use: "Selected game tab of the home hero slider, Roboto Condensed, 24px line; unselected tabs weight 400" }
    link: { size: 16, weight: 700, lineHeight: 1.6, tracking: -0.47, use: "Footer legal links (개인정보처리방침, 공익신고자 보호방침), Pretendard, 25.6px line, #569a43" }
  spacing: { nav-y: 35, nav-x: 16, tab-y: 18, tab-x: 30, field-x: 20, field-inset: 60 }
  rounded: { none: 0, arrow: 30 }
  components:
    slider-arrow: { type: button, bg: "#569a43", fg: "#ffffff", radius: "30px 0px 0px (top-left only) on the previous arrow; 0px 30px 0px 0px (top-right only) on the next arrow", size: "90px x 90px", hover: "bg #ffffff, icon #569a43", pressed: "bg #ffffff, icon #569a43", states: "hover and pressed invert the arrow to a white square with a green icon after a 0.3s linear transition; focus shows no change on the control; the icon is drawn by ::after", use: "Previous and next arrows of the games slider on home (button.slick-prev at home::[data-omd-capture=\"29\"], button.slick-next at capture 35)" }
    outline-link: { type: button, fg: "#ffffff", border: "2px solid #ffffff", radius: "0px", height: "60px", size: "180px x 60px", hover: "a fill sweeps across from the ::before layer (0 to 352px wide) and the label turns #000000", pressed: "same as hover", states: "hover and pressed after a 0.4s linear transition; focus draws only the browser's default ring, so no brand focus style is declared", use: "프로젝트 소개 and 채용 지원 on the game panels of the games page (surface-2::[data-omd-capture=\"27\"]) and home; the label is a child em, and its font was not recorded, so no font is declared" }
    nav-item: { type: tab, fg: "#ffffff", font: "18px / 500 / 21.6px Roboto Condensed, letter-spacing 0.36px", padding: "35px 16px 34px", height: "91px", hover: "label #000000 and a 3px ::after bar grows to the item's full width", pressed: "same as hover", states: "hover and pressed after a 0.3s linear transition; on the light recruit header the label rests at #000000 and only the bar grows; the bar's colour is outside the probe's compared values and is not declared; focus draws only the browser ring", use: "Header navigation over the home and games heroes at home::[data-omd-capture=\"4\"]" }
    category-tab: { type: tab, fg: "#777777", border: "0px 0px 1px solid #dddddd", font: "18px / 400 / 21.6px Pretendard, letter-spacing -0.72px", padding: "18px 30px 16px 0px", height: "57px", selected: "fg #569a43, weight 600", hover: "fg #569a43 and a 2px ::before bar grows across the full 313px width", pressed: "same as hover", states: "the selected item shows no change on hover or pressed; the probed unselected item (사업) turns green after a 0.3s linear transition; focus draws only the browser ring", use: "Recruit category list (전체, 스텔라 블레이드 차기작, 승리의 여신: 니케, 프로젝트 스피릿, 사업, 경영지원 and others) at surface-3::[data-omd-capture=\"36\"], 313 x 57" }
    sub-nav-tab: { type: tab, fg: "#ffffff", font: "18px / 400 / 70px Pretendard, letter-spacing -0.72px", height: "70px", selected: "fg #569a43, weight 600", hover: "fg #569a43", pressed: "fg #569a43", states: "the selected tab shows no change; the other turns green on hover and pressed after a 0.3s linear transition; focus draws only the browser ring", use: "채용안내 and 채용공고 over the recruit banner at surface-3::[data-omd-capture=\"30\"]" }
    search-input: { type: input, bg: "#f4f4f4", fg: "#000000", radius: "0px", padding: "0px 60px 0px 20px", height: "60px", font: "16px / 400 Pretendard", states: "probe: hover, pressed and focus show no change; transition all 0s", use: "Recruit search field (placeholder 검색어를 입력해주세요.) at surface-3::[data-omd-capture=\"33\"], 375 x 60, with a 60 x 60 search button inside its right inset" }
    slider-tab: { type: tab, fg: "#ffffff", font: "16px / 700 / 24px Roboto Condensed, letter-spacing 0.32px", padding: "0px 15px", selected: "weight 700 in #ffffff; unselected tabs are weight 400 in white at 50% opacity", states: "selected read from the slider's state at capture; no pointer frame", use: "Game tabs of the home hero slider at home::#slick-slide00" }
    footer-legal-link: { type: button, fg: "#569a43", font: "16px / 700 / 25.6px Pretendard, letter-spacing -0.47px", hover: "a 2px underline sweeps in from the ::before layer", pressed: "same as hover", states: "hover and pressed after a 0.7s transition; focus draws only the browser ring", use: "개인정보처리방침 and 공익신고자 보호방침 in the footer of all three pages at home::[data-omd-capture=\"52\"]" }
  components_harvested: true
---

# Design System Inspiration of Shift Up

## 1. Visual Theme & Atmosphere

Shift Up (시프트업) is a Seoul game developer. Its own press releases describe it as "2013년 설립된 대한민국의 게임 개발사" holding globally successful titles, *승리의 여신: 니케* (NIKKE: Goddess of Victory) and *스텔라 블레이드* (Stellar Blade), and its company page calls it an "올인원 게임 디자인 및 개발 스튜디오" — an all-in-one studio that works from original illustration and solid planning and programming across game production, promotional film and music. The founder, 김형태, chairs the board and is CEO; the governance page lists him as a former art director at NCSoft and a former team lead at Softmax. The games page lists four projects: *스텔라 블레이드*, *승리의 여신: 니케*, *데스티니 차일드* and *프로젝트 스피릿*, a new flagship "EASTERN Fantasy" cross-platform title. The studio now also publishes stock information and quarterly earnings materials, the first dated 14 August 2024, and in September 2026 it announced a 6 November release date for the Nintendo Switch 2 edition of *Stellar Blade*.

The corporate site at shiftup.co.kr is built around the games' own art. Hero and game sections run white type over full-bleed key art; the page itself is white (`#ffffff`) with mid-grey `#777777` as the document text colour, and functional pages such as the recruit list are plain white with black headings. Latin section headings are set in Roboto Condensed Bold — `RECRUIT` at 80px, home section heads at 50px — and the header navigation in Roboto Condensed 500 with open tracking. Everything Korean is Pretendard, with tight negative tracking on titles (-0.96px at 24px, -1.2px at 30px).

One colour carries meaning: studio green `#569a43`. It fills the square arrows of the home games slider, marks the selected recruit category and sub-navigation tab, is the colour an unselected tab turns on hover, and sets the footer's legal links in bold. Controls are square: the search field, outline links and tabs have 0px corners, and the only curve on the site is the single 30px corner cut into each slider arrow. None of the 483 captured elements carries a box-shadow.

**Key Characteristics:**
- White type over full-bleed game key art for hero and game sections; white pages with `#777777` text and `#000000` headings for functional pages
- Roboto Condensed Bold for Latin section heads (80px, 50px) and Roboto Condensed 500 for the header navigation
- Pretendard for every Korean string, tracked tight on titles
- One accent, studio green `#569a43`: slider arrows, selected tabs, hover colour and footer legal links
- Square geometry (0px) with one signature detail: a single 30px corner on each slider arrow
- Flat: no captured element has a shadow; lists are divided by `#dddddd` hairlines

## Primary tasks

- Read the studio's news about a game release
- Browse the studio's games and open a project introduction
- Search the recruit list and filter postings by project or department
- Apply to an open posting from the recruit list
- Check IR materials for governance, financials and announcements

## 2. Color Palette & Roles

Every token below was read on 2026-09-30 from shiftup.co.kr, /games/games.php and /recruit/recruit.php by the deterministic collector, and states by the fixed keyboard probe. The tokens describe the corporate website; the games' own sites (stellar-blade.com, nikke.shiftup.co.kr and others) are separate domains that were not captured.

### Primary
- **Studio Green** (`#569a43`): The label of the selected recruit category (전체, capture `surface-3` #35) and of the selected sub-navigation tab (채용공고, #31); the colour the probed unselected category (사업) and sub-navigation tab (채용안내) turn on hover; the fill of the two 90 × 90 arrows of the home games slider (captures #29 and #35); and the bold footer links 개인정보처리방침 and 공익신고자 보호방침. It is the primary because it is the only chromatic colour the site renders in a primary role, and it renders in all of them: selected state, hover state and the fill of the one filled control on home.

### Neutral & Surface
- **White** (`#ffffff`): The body background on all three pages, the white type over key art, and the hover fill of the slider arrows.
- **Surface** (`#f4f4f4`): The recruit search field.
- **Hairline** (`#dddddd`): The 1px bottom border of each recruit category item.

### Text
- **Ink** (`#000000`): Job posting titles, the recruit list heading, the header navigation on the light recruit header, and the search field's text.
- **Body Grey** (`#777777`): The document default text colour and the unselected recruit categories.
- Over imagery, secondary text sits in translucent white (the copyright line at 50% opacity, unselected slider tabs at 50%, sub-menu labels at 70%); inside the white dropdown menu, links sit in black at 60% opacity. These translucent values are prose, not colour tokens.

### Brand assets, not tokens
- Game key art and character illustration carry the page's colour; they are artwork, not interface colours.
- The Shift Up logo was not measured; no logo colour is claimed.

## 3. Typography Rules

### Font Family
- **Live surface use**: `Pretendard` (442 observed uses) and `Roboto Condensed` (41), both `loaded / high`. Pretendard is self-hosted by Shift Up as WOFF files at `shiftup.co.kr/font/` (Pretendard-Thin through the heavier weights); Roboto Condensed is served from Google Fonts (`fonts.gstatic.com/s/robotocondensed/v31/`). Pretendard is the document default on all three pages and sets every Korean heading, title and body line; Roboto Condensed sets the Latin section heads, the header navigation and the hero slider tabs.
- **Official distributed font assets**: Pretendard is by Kil Hyung-jin (orioncactus); its LICENSE states the SIL Open Font License 1.1. Roboto Condensed's OFL.txt in the Google Fonts repository reads "Copyright 2011 The Roboto Project Authors … licensed under the SIL Open Font License, Version 1.1." Both files were opened on 2026-09-30. The identification rests on the declared family names; the name tables of the served files were not inspected.
- **Official product use**: no Shift Up page opened this session names its typefaces, so no statement of official product use is made.
- **Declared only (no visible use)**: `Noto Sans KR` (self-hosted WOFF2/WOFF/OTF files at `shiftup.co.kr/font/`, the fallback after Pretendard in the stack), `Material Symbols Outlined` (Google Fonts icon font) and `swiper-icons` (a slider library's icon font), each with 0 observed uses.
- **Unresolved**: none of the observed families is unidentified.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Observed on |
|------|------|------|--------|-------------|----------|-------------|
| Display XL | Roboto Condensed | 80px | 700 | 92px (1.15) | normal | RECRUIT banner, white |
| Display | Roboto Condensed | 50px | 700 | 60px (1.2) | normal | Home section heads, white |
| List Head | Pretendard | 30px | 700 | 42px (1.4) | -1.2px | Recruit list heading, `#000000` |
| Card Title | Pretendard | 24px | 600 | 36px (1.5) | -0.96px | Job posting titles, `#000000` |
| Game Title | Pretendard | 24px | 500 | 36px (1.5) | -0.96px | Game names, white |
| News Title | Pretendard | 20px | 400 | 32px (1.6) | -0.8px | Home news headlines, white |
| Lead | Pretendard | 18px | 400 | 30.6px (1.7) | -0.72px | Game descriptions, white |
| Nav | Roboto Condensed | 18px | 500 | 21.6px (1.2) | 0.36px | Header navigation |
| Tab | Pretendard | 18px | 400 (600 selected) | 21.6px (1.2) | -0.72px | Recruit categories |
| Body | Pretendard | 16px | 400 | 25.6px (1.6) | normal | Document default, `#777777` |
| Slider Tab | Roboto Condensed | 16px | 700 (400 unselected) | 24px (1.5) | 0.32px | Home hero game tabs |
| Link | Pretendard | 16px | 700 | 25.6px (1.6) | -0.47px | Footer legal links, `#569a43` |

### Principles
- **Two scripts, two faces**: Roboto Condensed for Latin display, navigation and slider tabs; Pretendard for all Korean.
- **Open Latin, tight Korean**: the condensed Latin navigation tracks open (+0.36px at 18px, +0.32px on slider tabs); Korean titles track tight (-0.96px at 24px, -1.2px at 30px, -0.72px at 18px).
- **Grey default**: the document text colour is `#777777`; headings on white are `#000000`.

## 4. Component Stylings

### Buttons

**Slider Arrow**
- Background: `#569a43`; icon `#ffffff` (drawn by `::after`)
- Size: 90 × 90
- Radius: one 30px corner — top-left on the previous arrow (`30px 0px 0px`), top-right on the next arrow (`0px 30px 0px 0px`)
- Hover / pressed: inverts to a `#ffffff` square with a `#569a43` icon (0.3s linear)
- Focus: no change on the control
- Use: previous and next arrows of the home games slider

**Outline Link**
- Border: 2px solid `#ffffff`; label `#ffffff` in a child `em`
- Radius: 0px
- Size: 180 × 60
- Hover / pressed: a fill sweeps across from the `::before` layer (0 → 352px) and the label turns `#000000` (0.4s linear)
- Focus: browser default ring only
- Use: 프로젝트 소개 and 채용 지원 on the game panels of the games page and home

**Footer Legal Link**
- Text: `#569a43`, 16px Pretendard weight 700, -0.47px
- Hover / pressed: a 2px underline sweeps in from the `::before` layer (0.7s)
- Use: 개인정보처리방침 and 공익신고자 보호방침 in the footer of every page

### Navigation & Tabs

**Header Navigation**
- Text: `#ffffff` over the home and games heroes; `#000000` on the light recruit header
- Font: 18px Roboto Condensed weight 500, 0.36px
- Padding: 35px 16px 34px (91px tall)
- Hover / pressed: over the hero the label turns `#000000`; on every page a 3px `::after` bar grows to the item's full width (0.3s linear)
- Focus: browser default ring only

**Recruit Category**
- Text: `#777777`, 18px Pretendard weight 400, -0.72px
- Border: 1px solid `#dddddd` at the bottom
- Padding: 18px 30px 16px 0px (313 × 57)
- Selected: `#569a43`, weight 600; no change on hover
- Hover / pressed (unselected): `#569a43` and a 2px `::before` bar across the full width (0.3s linear)

**Recruit Sub-navigation**
- Text: `#ffffff`, 18px Pretendard weight 400 on a 70px line, over the recruit banner
- Selected: `#569a43`, weight 600
- Hover / pressed: `#569a43`

**Hero Slider Tabs**
- Selected: `#ffffff`, 16px Roboto Condensed weight 700, 0.32px, padding 0 15px
- Unselected: weight 400, white at 50% opacity

### Inputs

**Search Field**
- Background: `#f4f4f4`; text `#000000`
- Radius: 0px
- Height: 60px; padding 0px 60px 0px 20px (a 60 × 60 search button sits in the right inset)
- Font: 16px Pretendard
- Placeholder: 검색어를 입력해주세요.
- States: none — hover, pressed and focus show no change

---

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out pages of shiftup.co.kr plus fixed keyboard-probe state reads and first-party context)
**Tier 1 sources:** https://shiftup.co.kr/ ; https://shiftup.co.kr/games/games.php ; https://shiftup.co.kr/recruit/recruit.php?searchkey=&category=0 ; https://shiftup.co.kr/about/about.php ; https://shiftup.co.kr/recruit/culture.php ; https://shiftup.co.kr/news/news.php ; https://shiftup.co.kr/ir/governance.php
**Tier 2 sources:** getdesign.md/shiftup (HTTP 200, the name does not appear in the response) and styles.refero.design/?q=shiftup (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Header navigation: 35px top, 34px bottom, 16px sides
- Recruit categories: 18px top, 16px bottom, 30px right
- Search field: 20px left, 60px right inset for the button
- Posting meta items: 36px right spacing between items

### Grid & Container
- Home: a hero game slider under a transparent header, then game panels and a news band, each full-bleed over key art
- Games: one full-width panel per project, each with a title, a description and outline links
- Recruit: a banner with sub-navigation, then a category list of 313px items, a 375px search field and the job list of posting titles

### Whitespace Philosophy
- Let the game art fill the viewport; the interface is type, thin lines and one green
- Functional pages stay white and list-like, separated by hairlines

### Border Radius Scale
- 0px: every captured control and list item
- 30px: one corner of each slider arrow — the only rounded value in the capture

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Every captured element |
| Hairline | 1px solid `#dddddd` | Recruit category dividers |
| Outline | 2px solid `#ffffff` | Outline links over key art |
| Imagery | Full-bleed key art | Hero and game sections |

**Shadow Philosophy**: all 483 elements the collector recorded compute `box-shadow: none`. Depth comes from the game art behind the type, not from elevation.

## 7. Do's and Don'ts

### Do
- Use studio green `#569a43` for selected tabs, hover colour, the slider arrows and footer legal links
- Set Latin section heads in Roboto Condensed Bold and Korean in Pretendard
- Track Korean titles tight (-0.96px at 24px) and condensed Latin navigation open (+0.36px)
- Keep controls square; reserve the single 30px corner for arrow-like controls
- Put white type over key art; keep functional pages white with `#000000` headings and `#777777` text
- Divide lists with 1px `#dddddd` hairlines

### Don't
- Don't introduce a second accent colour; the capture shows only `#569a43`
- Don't add drop shadows; none of the 483 captured elements has one
- Don't round buttons, fields or tabs
- Don't invent focus styles; the captured controls show only the browser's default ring
- Don't render Pretendard or Roboto Condensed with another face in their place
- Don't treat game key-art colours as interface colours

## 8. Responsive Behavior

### Breakpoints
Only the 1440 × 900 desktop viewport was captured. The body carries a `pc` class on the recruit page, a sign of a separate mobile layout; no breakpoint value was measured.

### Touch Targets
- Header navigation: 91px tall
- Slider arrows: 90 × 90
- Recruit sub-navigation: 70px
- Search field and outline links: 60px
- Recruit categories: 57px

### Collapsing Strategy
- Not captured; how the pages collapse below desktop is not described.

### Image Behavior
- Key art sits full-bleed behind white type, without borders or shadows.

## 9. Agent Prompt Guide

### Quick Color Reference
- Accent (selected, hover, arrows, legal links): `#569a43`
- Page: `#ffffff`; search field `#f4f4f4`; hairline `#dddddd`
- Text: `#777777` default, `#000000` headings on white, `#ffffff` over imagery

### Example Component Prompts
- "Create a slider arrow: 90 × 90 square, `#569a43` background, white chevron, one 30px corner (top-left for previous, top-right for next); on hover invert to a white square with a green chevron over 0.3s linear."
- "Create an outline link over key art: 180 × 60, transparent, 2px solid `#ffffff` border, 0px radius, white label; on hover a white fill sweeps across and the label turns black."
- "Build a recruit category list: items 313 × 57 with 18px 30px 16px 0 padding, 18px Pretendard in `#777777` at -0.72px, 1px `#dddddd` bottom border; selected item `#569a43` weight 600; unselected hover turns green with a 2px bar."
- "Build a search field: `#f4f4f4`, 60px tall, 0px radius, 0 60px 0 20px padding, 16px Pretendard, placeholder '검색어를 입력해주세요.', no hover or focus change."

### Iteration Guide
1. One green, `#569a43`, for selection, hover and the few filled controls
2. Roboto Condensed for Latin display and navigation; Pretendard for Korean
3. Square controls; one 30px corner only on arrows
4. White type over art; `#000000` and `#777777` on white
5. No shadows; `#dddddd` hairlines

---

## 10. Voice & Tone

Shift Up's voice is **factual and craft-proud**. Section labels are bare uppercase nouns, game entries carry their own one-line story, and news reads like a press wire. The studio addresses players, applicants and investors in the same restrained register.

| Context | Tone |
|---|---|
| Section labels | Bare uppercase nouns. "ABOUT", "GAMES", "RECRUIT", "NEWS", "IR". |
| Company statement | Descriptive, capability-first. "올인원 게임 디자인 및 개발 스튜디오입니다." |
| Game entries | Story-first, one line of premise. "Reclaim Earth for Humankind." |
| News | Press-wire register with dates and figures. |
| Recruiting | Direct invitation. "지금 시프트업에 지원하세요", "지원하기". |
| IR | Formal. "시프트업은 지속적 이익 창출로 주주가치를 극대화하겠습니다." |

**Voice samples (verbatim, opened 2026-09-30):**
- "시프트업은 독창적인 일러스트레이션과 탄탄한 기획 및 프로그래밍 능력을 기반으로, 게임 제작부터 홍보 영상과 음악 제작까지 다방면의 영역을 넘나드는 올인원 게임 디자인 및 개발 스튜디오입니다." — /about/about.php.
- "시프트업과 미래를 함께 할 인재를 모집합니다." — recruit banner.
- "‘스텔라 블레이드 컴플리트 에디션’ 닌텐도 스위치 2 버전, 11월 6일 출시…베요네타 컬래버 공개" — news headline, 2026-09-10.
- "검색어를 입력해주세요." — recruit search placeholder.

**Forbidden register**: hype superlatives about the studio's own titles, stacked exclamation marks, unexplained gaming jargon in corporate and IR copy.

## 11. Brand Narrative

Shift Up describes itself in every press release as a Korean game developer founded in 2013 whose titles — *승리의 여신: 니케* and *스텔라 블레이드* — have performed strongly in global markets, expanding its position on original IP and a high level of development capability. Its company page puts the same idea in studio terms: original illustration plus planning and programming, carried from game production into promotional film and music. The recruiting page calls it an "ALL IN ONE" studio that builds original IP and value from original artwork and solid development, and lists three ways of working: 덕업일치 (turning what you love into your work), 도전정신 and 문제해결.

The founder, 김형태, is chairman of the board and CEO; the governance page gives his background as art director at NCSoft and team lead at Softmax, and press releases describe how he has kept building the global competitiveness of Korean game IP since founding the studio. The board also includes a non-executive director from Tencent Holdings (CEO of IEG Global). The games page presents *스텔라 블레이드* (an action-adventure RPG about Eve, the last survivor of a special unit sent to reclaim Earth), *승리의 여신: 니케* (a gun-shooting RPG), *데스티니 차일드* (a collectible RPG) and *프로젝트 스피릿*, a new flagship built on the IP-making capability proven by the first two. News in 2026 covers the PC version of *Stellar Blade* passing one million sales in three days and its Nintendo Switch 2 edition, out 6 November 2026.

The website follows the same logic: the art leads, the interface stays square and quiet, and one green marks what is selected.

## 12. Principles

1. **The art is the product.** The studio defines itself by original illustration. *UI implication:* keep the interface to type, thin lines and one accent so the key art fills the screen. (An editorial reading of the site, not a Shift Up statement.)
2. **One accent, one meaning.** *UI implication:* `#569a43` marks selection and hover and fills only the slider arrows; nothing else is coloured.
3. **All in one.** The studio covers game, film and music in-house. *UI implication:* one visual system across games, news, recruiting and IR pages.
4. **Square and precise.** *UI implication:* 0px corners everywhere, with a single cut 30px corner as the signature detail.
5. **Same voice for players and investors.** *UI implication:* IR pages use the same header, type and footer as the game pages.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Shift Up audiences (players, prospective game-industry talent, equity investors), not individual people.*

**박지훈, 27, 서울.** A *NIKKE* and *Stellar Blade* player who visits for news and release dates. Comes for the key art and wants headlines that state facts.

**이서연, 31, 판교.** A game UI designer considering applying. Filters the recruit list by project, searches for 디자인 and reads postings in the plain white layout.

**최민호, 45, 여의도.** An equity analyst following the studio. Goes straight to IR for earnings materials, disclosures and the board.

## 14. States

Only these states were observed on the three captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Hover / pressed (slider arrow)** | `#569a43` fill → `#ffffff`, icon `#ffffff` → `#569a43`. |
| **Hover / pressed (outline link)** | A fill sweeps across the 180 × 60 link; the label turns `#000000`. |
| **Hover / pressed (recruit category)** | `#777777` → `#569a43` with a 2px bar across the item; the selected item does not change. |
| **Hover / pressed (sub-navigation)** | `#ffffff` → `#569a43`; the selected tab does not change. |
| **Hover / pressed (header navigation)** | A 3px bar grows under the item; over the hero the label turns `#000000`. |
| **Hover / pressed (footer legal link)** | A 2px underline sweeps in. |
| **Selected** | Recruit category and sub-navigation in `#569a43` weight 600; hero slider tab in white weight 700. |
| **No change** | The search field shows no hover, pressed or focus change. |
| **Focus** | No captured control draws an authored focus style; links show only the browser's default ring. |

Error, empty, loading, disabled and success states were not captured and are not described.

## 15. Motion & Easing

The probe read the transitions the controls compute. Header navigation, slider arrows, recruit categories and sub-navigation transition `all 0.3s linear`; outline links `all 0.4s linear`; footer legal links `all 0.7s cubic-bezier(0.215, 0.61, 0.355, 1)`; the search field computes `all 0s`. Hover effects on links and tabs are drawn by growing or sweeping `::before`/`::after` layers. The home page also loads an animate-on-scroll stylesheet (`aos.css`), and the probe saw the games slider block move from a 100px offset and opacity 0 into place as the page scrolled; its timing was not measured. Nothing else about motion (slider timing, key-art animation) was measured; treat it as unspecified and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/shiftup.json (capturedAt 2026-09-30T08:54:33Z), deterministic collector, 1440x900, logged out: shiftup.co.kr, /games/games.php, /recruit/recruit.php?searchkey=&category=0. States: fixed keyboard probe raws docs/research/2026-09-29-growth/raw/shiftup-states-{home,games,recruit}.json.
- §1, §10, §11 context: /about/about.php, /recruit/culture.php, /games/games.php, /news/news.php (press releases with the company boilerplate), /ir/ir.php and /ir/governance.php, opened 2026-09-30.
- §3 licences: the Pretendard LICENSE and the Roboto Condensed OFL.txt on GitHub, opened 2026-09-30.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->
