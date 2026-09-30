---
id: genie
name: Genie Music
display_name_kr: 지니
country: KR
category: consumer-tech
homepage: "https://www.genie.co.kr"
primary_color: "#0096ff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=genie.co.kr&sz=128"
verified: "2026-09-30"
added: "2026-06-09"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: product-home, url: "https://www.genie.co.kr/", inspected: "2026-09-30" }
    - { id: surface-2, kind: product-catalog, url: "https://www.genie.co.kr/chart/top200", inspected: "2026-09-30" }
    - { id: surface-3, kind: product-catalog, url: "https://www.genie.co.kr/newest/song", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://www.genie.co.kr/", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://www.genie.co.kr/chart/top200", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://www.genie.co.kr/newest/song", captured: "2026-09-30" }
    - { id: genie-probe-home, kind: product-surface, url: "https://www.genie.co.kr/", captured: "2026-09-30" }
    - { id: geniemusic-overview, kind: official-doc, url: "https://www.geniemusic.co.kr/music/overview.do", captured: "2026-09-30" }
    - { id: geniemusic-service, kind: official-doc, url: "https://www.geniemusic.co.kr/love/GENIE.do", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &tabsel { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"22\"]", captured: "2026-09-30" }
    "tokens.colors.heading": &gnb { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"9\"]", captured: "2026-09-30" }
    "tokens.colors.body": &body { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::body", captured: "2026-09-30" }
    "tokens.colors.secondary": &page { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"406\"]", captured: "2026-09-30" }
    "tokens.colors.muted": &tab { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"23\"]", captured: "2026-09-30" }
    "tokens.colors.muted-alt": &dj { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"114\"]", captured: "2026-09-30" }
    "tokens.colors.outline": &listen { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"97\"]", captured: "2026-09-30" }
    "tokens.colors.border": &count { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"26\"]", captured: "2026-09-30" }
    "tokens.colors.surface": &charttab { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"18\"]", captured: "2026-09-30" }
    "tokens.colors.white": *listen
    "tokens.typography.gnb.size": *gnb
    "tokens.typography.gnb.weight": *gnb
    "tokens.typography.gnb.lineHeight": *gnb
    "tokens.typography.gnb.use": *gnb
    "tokens.typography.section-title.size": &h2 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.typography.section-title.weight": *h2
    "tokens.typography.section-title.use": *h2
    "tokens.typography.menu.size": &login { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"16\"]", captured: "2026-09-30" }
    "tokens.typography.menu.weight": *login
    "tokens.typography.menu.lineHeight": *login
    "tokens.typography.menu.use": *login
    "tokens.typography.body.size": *body
    "tokens.typography.body.weight": *body
    "tokens.typography.body.lineHeight": *body
    "tokens.typography.body.use": *body
    "tokens.typography.row.size": &row { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"48\"]", captured: "2026-09-30" }
    "tokens.typography.row.weight": *row
    "tokens.typography.row.lineHeight": *row
    "tokens.typography.row.use": *row
    "tokens.typography.tab.size": *tabsel
    "tokens.typography.tab.weight": *tabsel
    "tokens.typography.tab.use": *tabsel
    "tokens.typography.caption.size": *dj
    "tokens.typography.caption.weight": *dj
    "tokens.typography.caption.lineHeight": *dj
    "tokens.typography.caption.use": *dj
    "tokens.typography.category.size": &category { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.category.weight": *category
    "tokens.typography.category.lineHeight": *category
    "tokens.typography.category.use": *category
    "tokens.typography.button-sm.size": *listen
    "tokens.typography.button-sm.weight": *listen
    "tokens.typography.button-sm.lineHeight": *listen
    "tokens.typography.button-sm.use": *listen
    "tokens.spacing.tab-x": *tabsel
    "tokens.spacing.gnb-gap": *gnb
    "tokens.spacing.chart-tab-top": *charttab
    "tokens.spacing.chart-tab-x": *charttab
    "tokens.spacing.row-button-x": *listen
    "tokens.spacing.row-button-icon": *listen
    "tokens.spacing.filter-x": &genreli { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::li", captured: "2026-09-30" }
    "tokens.rounded.square": *charttab
    "tokens.rounded.toggle": *count
    "tokens.rounded.control": *listen
    "tokens.components.gnb-menu.type": *gnb
    "tokens.components.gnb-menu.fg": *gnb
    "tokens.components.gnb-menu.padding": *gnb
    "tokens.components.gnb-menu.height": *gnb
    "tokens.components.gnb-menu.font": *gnb
    "tokens.components.gnb-menu.hover": &gnbstate { surface_id: home, source_id: genie-probe-home, method: live-state-probe, selector: "a 지니차트 (89.3 x 38): hover and pressed fg rgb(39, 40, 45) -> rgb(0, 150, 255); focus (Tab #27) fg rgb(0, 150, 255) plus outline rgb(0, 150, 255) dotted 1px; transition background-color, position, color 0.25s, 0.25s, 0.15s ease", captured: "2026-09-30" }
    "tokens.components.gnb-menu.pressed": *gnbstate
    "tokens.components.gnb-menu.focus": *gnbstate
    "tokens.components.gnb-menu.states": *gnbstate
    "tokens.components.gnb-menu.use": *gnb
    "tokens.components.chart-scope-tab.type": *tab
    "tokens.components.chart-scope-tab.fg": *tab
    "tokens.components.chart-scope-tab.padding": *tab
    "tokens.components.chart-scope-tab.height": *tab
    "tokens.components.chart-scope-tab.font": *tab
    "tokens.components.chart-scope-tab.selected": *tabsel
    "tokens.components.chart-scope-tab.focus": &tabstate { surface_id: home, source_id: genie-probe-home, method: live-state-probe, selector: "button 종합 (36.8 x 15, selected, fg rgb(0, 150, 255)) and button 국내 (36.8 x 15, fg rgb(139, 139, 139)): hover no change across self and 3 ancestor levels; pressed and focus (Tabs #69 and #70) outline dotted 1px in the label colour; transition all 0s", captured: "2026-09-30" }
    "tokens.components.chart-scope-tab.states": *tabstate
    "tokens.components.chart-scope-tab.use": *tab
    "tokens.components.web-player-link.type": &webplayer { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"3\"]", captured: "2026-09-30" }
    "tokens.components.web-player-link.fg": *webplayer
    "tokens.components.web-player-link.height": *webplayer
    "tokens.components.web-player-link.font": *webplayer
    "tokens.components.web-player-link.hover": &wpstate { surface_id: home, source_id: genie-probe-home, method: live-state-probe, selector: "a 웹플레이어 (59.9 x 18, rest fg rgb(0, 150, 255)): hover and pressed text-decoration none -> underline solid rgb(0, 150, 255); focus (Tab #7) outline rgb(0, 150, 255) dotted 1px", captured: "2026-09-30" }
    "tokens.components.web-player-link.pressed": *wpstate
    "tokens.components.web-player-link.focus": *wpstate
    "tokens.components.web-player-link.states": *wpstate
    "tokens.components.web-player-link.use": *webplayer
    "tokens.components.purchase-link.type": &buy { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"0\"]", captured: "2026-09-30" }
    "tokens.components.purchase-link.fg": *buy
    "tokens.components.purchase-link.padding": *buy
    "tokens.components.purchase-link.height": *buy
    "tokens.components.purchase-link.font": *buy
    "tokens.components.purchase-link.hover": &buystate { surface_id: home, source_id: genie-probe-home, method: live-state-probe, selector: "a 이용권 구매 (85.2 x 18, rest fg rgb(68, 68, 68)): hover and pressed text-decoration none -> underline solid rgb(68, 68, 68); focus (Tab #4) outline rgb(68, 68, 68) dotted 1px", captured: "2026-09-30" }
    "tokens.components.purchase-link.pressed": *buystate
    "tokens.components.purchase-link.focus": *buystate
    "tokens.components.purchase-link.states": *buystate
    "tokens.components.purchase-link.use": *buy
    "tokens.components.outlined-row-button.type": *listen
    "tokens.components.outlined-row-button.bg": *listen
    "tokens.components.outlined-row-button.fg": *listen
    "tokens.components.outlined-row-button.border": *listen
    "tokens.components.outlined-row-button.radius": *listen
    "tokens.components.outlined-row-button.padding": *listen
    "tokens.components.outlined-row-button.height": *listen
    "tokens.components.outlined-row-button.font": *listen
    "tokens.components.outlined-row-button.hover": &listenstate { surface_id: home, source_id: genie-probe-home, method: live-state-probe, selector: "a 전체듣기 (72.1 x 24, rest bg rgb(255, 255, 255), fg rgb(39, 40, 45)): hover and pressed border 1px solid rgb(166, 175, 182) -> 1px solid rgb(39, 40, 45); focus (Tab #144) outline rgb(39, 40, 45) dotted 1px", captured: "2026-09-30" }
    "tokens.components.outlined-row-button.pressed": *listenstate
    "tokens.components.outlined-row-button.focus": *listenstate
    "tokens.components.outlined-row-button.states": *listenstate
    "tokens.components.outlined-row-button.use": *listen
    "tokens.components.more-button.type": &more { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"144\"]", captured: "2026-09-30" }
    "tokens.components.more-button.bg": *more
    "tokens.components.more-button.fg": *more
    "tokens.components.more-button.border": *more
    "tokens.components.more-button.radius": *more
    "tokens.components.more-button.padding": *more
    "tokens.components.more-button.height": *more
    "tokens.components.more-button.font": *more
    "tokens.components.more-button.states": *more
    "tokens.components.more-button.use": *more
    "tokens.components.chart-type-tab.type": *charttab
    "tokens.components.chart-type-tab.bg": *charttab
    "tokens.components.chart-type-tab.fg": *charttab
    "tokens.components.chart-type-tab.padding": *charttab
    "tokens.components.chart-type-tab.height": *charttab
    "tokens.components.chart-type-tab.font": *charttab
    "tokens.components.chart-type-tab.selected": { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"17\"]", captured: "2026-09-30" }
    "tokens.components.chart-type-tab.states": *charttab
    "tokens.components.chart-type-tab.use": *charttab
    "tokens.components.period-toggle.type": &period { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"22\"]", captured: "2026-09-30" }
    "tokens.components.period-toggle.bg": *period
    "tokens.components.period-toggle.fg": *period
    "tokens.components.period-toggle.border": *period
    "tokens.components.period-toggle.radius": *period
    "tokens.components.period-toggle.height": *period
    "tokens.components.period-toggle.font": *period
    "tokens.components.period-toggle.selected": &periodsel { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"21\"]", captured: "2026-09-30" }
    "tokens.components.period-toggle.states": *periodsel
    "tokens.components.period-toggle.use": *period
    "tokens.components.count-button.type": *count
    "tokens.components.count-button.bg": *count
    "tokens.components.count-button.fg": *count
    "tokens.components.count-button.border": *count
    "tokens.components.count-button.radius": *count
    "tokens.components.count-button.height": *count
    "tokens.components.count-button.font": *count
    "tokens.components.count-button.states": *count
    "tokens.components.count-button.use": *count
    "tokens.components.rank-toggle.type": &rank { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"29\"]", captured: "2026-09-30" }
    "tokens.components.rank-toggle.fg": *rank
    "tokens.components.rank-toggle.padding": *rank
    "tokens.components.rank-toggle.height": *rank
    "tokens.components.rank-toggle.font": *rank
    "tokens.components.rank-toggle.selected": &ranksel { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"28\"]", captured: "2026-09-30" }
    "tokens.components.rank-toggle.states": *ranksel
    "tokens.components.rank-toggle.use": *rank
    "tokens.components.genre-filter.type": &genre { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"20\"]", captured: "2026-09-30" }
    "tokens.components.genre-filter.fg": *genre
    "tokens.components.genre-filter.padding": *genreli
    "tokens.components.genre-filter.height": *genreli
    "tokens.components.genre-filter.font": *genre
    "tokens.components.genre-filter.selected": &genresel { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"19\"]", captured: "2026-09-30" }
    "tokens.components.genre-filter.states": *genresel
    "tokens.components.genre-filter.use": *genre
    "tokens.components.pagination.type": *page
    "tokens.components.pagination.bg": *page
    "tokens.components.pagination.fg": *page
    "tokens.components.pagination.border": *page
    "tokens.components.pagination.radius": *page
    "tokens.components.pagination.size": *page
    "tokens.components.pagination.font": *page
    "tokens.components.pagination.selected": &pagesel { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"405\"]", captured: "2026-09-30" }
    "tokens.components.pagination.states": *pagesel
    "tokens.components.pagination.use": *page
    "tokens.components.search-input.type": &search { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"7\"]", captured: "2026-09-30" }
    "tokens.components.search-input.bg": *search
    "tokens.components.search-input.fg": *search
    "tokens.components.search-input.padding": *search
    "tokens.components.search-input.height": *search
    "tokens.components.search-input.font": *search
    "tokens.components.search-input.states": *search
    "tokens.components.search-input.use": *search
    "tokens.components.login-button.type": *login
    "tokens.components.login-button.fg": *login
    "tokens.components.login-button.padding": *login
    "tokens.components.login-button.height": *login
    "tokens.components.login-button.font": *login
    "tokens.components.login-button.states": *login
    "tokens.components.login-button.use": *login
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#0096ff"
    heading: "#27282d"
    body: "#444444"
    secondary: "#666666"
    muted: "#8b8b8b"
    muted-alt: "#969697"
    outline: "#a6afb6"
    border: "#cccccc"
    surface: "#f6f6f6"
    white: "#ffffff"
  typography:
    gnb: { size: 18, weight: 700, lineHeight: 1.5, use: "Global navigation items (지니차트, 최신음악, 장르음악 and the rest), 27px line, in #27282d; declared family Malgun Gothic, unresolved in the capture environment" }
    section-title: { size: 18, weight: 700, use: "Home section titles (h2.sub-title), line-height normal, in #27282d; declared family Malgun Gothic, unresolved in the capture environment" }
    menu: { size: 14, weight: 400, lineHeight: 1.71, use: "로그인/회원가입 in the header, 24px line, in #444444" }
    body: { size: 12, weight: 400, lineHeight: 1.5, use: "Document default on all three pages, 18px line, in #444444; declared family dotum, unresolved in the capture environment" }
    row: { size: 12, weight: 400, lineHeight: 1.83, use: "Chart and list rows (artist names), 22px line" }
    tab: { size: 12, weight: 700, use: "Selected chart scope tab (종합) and the 웹플레이어 link, line-height normal" }
    caption: { size: 11, weight: 400, lineHeight: 1.5, use: "DJ names on home, 16.5px line, in #969697" }
    category: { size: 11, weight: 700, lineHeight: 2, use: "NEW ALBUM category labels on home, 22px line, in #0096ff" }
    button-sm: { size: 11, weight: 400, lineHeight: 2.09, use: "Outlined row-button labels (전체듣기 and its partners), 23px line" }
  spacing: { tab-x: 8, gnb-gap: 27, chart-tab-top: 11, chart-tab-x: 14, row-button-x: 6, row-button-icon: 26, filter-x: 8 }
  rounded: { square: 0, toggle: 3, control: 4 }
  components:
    gnb-menu: { type: tab, fg: "#27282d", padding: "0px 27px 14px 0px", height: "38px", font: "18px / 700 / 27px; declared family Malgun Gothic, unresolved in the capture environment", hover: "fg #0096ff", pressed: "fg #0096ff", focus: "fg #0096ff plus a 1px dotted #0096ff outline", states: "probe on 지니차트 (home; the other seven items share the gnb-menu class): hover and pressed settle on #0096ff after a 0.15s colour transition; focus (Tab #27) turns the label #0096ff and draws a 1px dotted outline in that colour", use: "Global navigation (지니차트, 최신음악, 장르음악, 뮤직비디오, 영상, 추천, 매거진, 뮤직허그) on all three pages at home::[data-omd-capture=\"9\"], 58-89 x 38" }
    chart-scope-tab: { type: tab, fg: "#8b8b8b", padding: "0px 8px", height: "15px", font: "12px / 400", selected: "fg #0096ff, 12px / 700", focus: "1px dotted outline in the label colour (#0096ff selected, #8b8b8b unselected)", states: "probe on home: hover shows no change on the selected or an unselected tab; pressed and focus (Tabs #69 and #70) draw only the dotted outline; transition all 0s", use: "Chart scope tabs on home (종합 selected, 국내 and a third tab) and the tab pair under a lower section heading (추천 selected), 37 x 15" }
    web-player-link: { type: button, fg: "#0096ff", height: "18px", font: "12px / 700", hover: "underline in #0096ff", pressed: "underline in #0096ff", focus: "1px dotted #0096ff outline", states: "probe on home: hover and pressed add a solid #0096ff underline; focus (Tab #7) draws a 1px dotted #0096ff outline", use: "웹플레이어 in the header utility row of all three pages, 60 x 18" }
    purchase-link: { type: button, fg: "#444444", padding: "0px 4px 0px 26px", height: "18px", font: "12px / 700 / 18px", hover: "underline in #444444", pressed: "underline in #444444", focus: "1px dotted #444444 outline", states: "probe on home: hover and pressed add a solid underline; focus (Tab #4) draws a 1px dotted outline in the label colour", use: "이용권 구매 in the header utility row of all three pages, 85 x 18; the 26px left padding holds an icon the collector does not read" }
    outlined-row-button: { type: button, bg: "#ffffff", fg: "#27282d", border: "1px solid #a6afb6", radius: "4px", padding: "0px 6px 0px 26px", height: "24px", font: "11px / 400 / 23px", hover: "border #27282d", pressed: "border #27282d", focus: "1px dotted #27282d outline", states: "probe on 전체듣기 (home): hover and pressed darken the border from #a6afb6 to #27282d; focus (Tab #144) draws a 1px dotted #27282d outline", use: "전체듣기, 담기, 앨범 and 다운 buttons above chart lists: 72 x 24 on home at home::[data-omd-capture=\"97\"], 53-97 x 24 on /chart/top200; the icon sits in the 26px left padding" }
    more-button: { type: button, bg: "#f7f8f9", fg: "#27282d", border: "1px solid #f7f8f9", radius: "4px", padding: "0px 22px 2px 0px", height: "40px", font: "14px / 400; declared family Malgun Gothic, unresolved in the capture environment", states: "rest only; not probed, no state frame", use: "컨텐츠 더보기 under the editor section on home, 168 x 40" }
    chart-type-tab: { type: tab, bg: "#f6f6f6", fg: "#444444", padding: "11px 14px 0px", height: "37px", font: "12px / 400 / 18px", selected: "bg #ffffff on the current tab (109 x 38)", states: "selected variant read from rest values; not probed", use: "Chart-type tabs across the top of /chart/top200 and /newest/song, 110-120 x 37, set in a 710px #f6f6f6 strip" }
    period-toggle: { type: tab, bg: "#fafafa", fg: "#656565", border: "1px solid #cccccc on top and bottom; the last segment also closes its right side", radius: "0px; 3px on the two outer corners", height: "22px", font: "11px / 400 / 22px", selected: "bg #a5a5a5, fg #ffffff, border 1px #9c9c9c, 11px / 700, inset shadow rgba(0, 0, 0, 0.05) 1px 1px 0px 0px", states: "selected variant read from rest values; not probed", use: "Segmented period control 실시간 / 일간 / 주간 / 월간 / 누적 on /chart/top200; segments 47 x 22, the selected 실시간 59 x 22" }
    count-button: { type: button, bg: "#ffffff", fg: "#656565", border: "1px solid #cccccc", radius: "3px", height: "22px", font: "11px / 400 / 21px", states: "rest only; not probed; it opens a layer and was not clicked", use: "집계기준 beside the period control on /chart/top200, 66 x 22" }
    rank-toggle: { type: tab, fg: "#8b8b8b", padding: "0px 0px 0px 13px", height: "15px", font: "12px / 400", selected: "fg #d62952, 12px / 700", states: "selected variant read from rest values; not probed", use: "1위 / 2위 toggle beside 실시간 차트 점유율 그래프 on /chart/top200, 40 x 15" }
    genre-filter: { type: tab, fg: "#444444", padding: "1px 8px", height: "20px", font: "12px / 400 / 18px", selected: "fg #f68074, 12px / 700 (HOT)", states: "selected variant read from rest values; not probed", use: "앨범 종류 filter on /newest/song (HOT, 전체, 가요, POP, OST, 트롯, JAZZ, CLASSIC, EDM, 동요/태교, JPOP, 뉴에이지, CCM, 그 외 장르)" }
    pagination: { type: tab, bg: "#ffffff", fg: "#666666", border: "1px solid #cccccc", radius: "4px", size: "28px x 28px", font: "12px / 400 / 26px; declared family Tahoma, unresolved in the capture environment", selected: "fg #0096ff, border 1px solid #0096ff, 12px / 700", states: "selected variant read from rest values; not probed", use: "Page numbers under the /newest/song list" }
    search-input: { type: input, bg: "#ffffff", fg: "#444444", padding: "1px 2px", height: "38px", font: "14px / 400; declared family Malgun Gothic, unresolved in the capture environment", states: "rest only; not probed; nothing was typed", use: "Header search field on all three pages, 322 x 38; the input computes no border and no radius, so the visible frame belongs to an element the collector did not record and is not declared" }
    login-button: { type: button, fg: "#444444", padding: "0px 18px 0px 5px", height: "22px", font: "14px / 400 / 24px", states: "rest only; not probed; it opens a menu and was not clicked", use: "로그인/회원가입 toggle in the header of all three pages, 112 x 22" }
  components_harvested: true
---

# Design System Inspiration of Genie Music

## 1. Visual Theme & Atmosphere

Genie (지니) is the music-streaming service of 케이티지니뮤직 (KT Genie Music), a KT-affiliated company in Seoul whose own history starts in 2000 with the personal music-broadcast site Muzcast.com. The company ran KTF's mobile music portal 도시락 from 2005, became kt music in 2009, launched the "New genie" service in 2013 and took over the genie business in 2014, the year it says it offered the world's first lossless (FLAC) streaming. It renamed itself 지니뮤직 in 2017, absorbed CJ디지털뮤직 in 2018, merged genie and Mnet.com into one platform in 2019, and in 2025 renamed itself again to 케이티지니뮤직 and released a conversational "AI DJ" with genie App 6.0. The company describes itself as "음악을 사랑하는 사람들을 행복하게 하는 기업" and presents genie as an AI platform built on big data, with realtime and daily charts, personalised quick picks, playlists and Dolby Atmos. The service's own title line is "음악, 그리고 설레임".

On www.genie.co.kr that product reads as a dense, working catalogue. Every captured page is a white canvas carrying charts, rows and filters at a 12px base in grey `#444444`, with headings and navigation in near-black `#27282d`. The one interactive colour is a clear blue `#0096ff`: it marks the selected chart scope, the current page number, the NEW ALBUM labels and the 웹플레이어 link, and the navigation turns to it on hover (probed on 지니차트; all eight items share the `gnb-menu` class). Controls are small and square: 24px outlined row buttons with 4px corners and a `#a6afb6` edge, 22px segmented toggles with 3px outer corners, 15px text tabs. Play, add and download marks are sprite images on transparent buttons, so the page's colour comes from text, not fills. Of 1,307 recorded elements, one carries a shadow.

**Key Characteristics:**
- One interactive blue, `#0096ff`, for selection, navigation hover and the web-player link; no filled primary action on the captured pages
- A 12px base with near-black `#27282d` headings, `#444444` body text and a grey staircase (`#666666`, `#8b8b8b`, `#969697`)
- Small square controls: 0px radius by default, 3px on toggles, 4px on outlined buttons and page numbers
- Outlined `#ffffff` row buttons with a `#a6afb6` edge that darkens to `#27282d` on hover
- Local selected colours on the chart pages: a grey `#a5a5a5` period segment, a red `#d62952` rank toggle, a salmon `#f68074` HOT filter
- Flat surfaces separated by `#f6f6f6` tab strips and `#cccccc` hairlines

## Primary tasks

- Check the realtime chart and switch it between 실시간, 일간, 주간, 월간 and 누적.
- Switch the home chart between scopes such as 종합 and 국내.
- Play or collect a whole list with 전체듣기 and 담기.
- Browse new releases by album type with the 앨범 종류 filter.
- Search for music from the header search field.

## 2. Color Palette & Roles

Every token below was read on 2026-09-30 from www.genie.co.kr, /chart/top200 and /newest/song by the deterministic collector, and the hover, pressed and focus values by the fixed keyboard probe on the home page. The tokens describe the logged-out genie website; the genie app was not captured and none of its values is claimed.

### Primary
- **Genie Blue** (`#0096ff`): The fill-free primary of the captured product. It is the text colour of the selected chart scope tab (종합, 12px / 700, and 추천 in a second tab pair), the colour the navigation turns on hover, press and focus (probe on 지니차트, `#27282d` → `#0096ff`; all eight items share the `gnb-menu` class), the 웹플레이어 link in the header of all three pages, the NEW ALBUM category labels on home, and the label and 1px border of the current page number on /newest/song. It is the primary because it is the only non-neutral colour the product renders in selected, navigation-hover and accent roles on every page. No captured control has a coloured fill: play, add and download controls are sprite icons on transparent buttons or white outlined buttons, so there is no filled action to measure instead.

### Local selected colours
- **Rank Red** (`#d62952`): The selected 1위 label of the 1위 / 2위 toggle beside the chart-share graph on /chart/top200 (12px / 700); 2위 is `#8b8b8b`. One element.
- **HOT Salmon** (`#f68074`): The selected HOT item of the 앨범 종류 filter on /newest/song (12px / 700); the other items are `#444444`. One element.
- **Period Grey** (`#a5a5a5`): The fill of the selected 실시간 segment of the period control, with `#ffffff` text and a `#9c9c9c` border. Unselected segments are `#fafafa` with `#656565` text and a `#cccccc` edge.

### Text
- **Heading** (`#27282d`): Navigation items, home section titles, and the labels of the outlined row buttons and 컨텐츠 더보기.
- **Body** (`#444444`): The document default on all three pages, chart-type tabs, filter items and the header 이용권 구매 and 로그인/회원가입 labels.
- **Secondary** (`#666666`): Page numbers on /newest/song. It is also the computed colour of the per-row 더보기 icon buttons (140 records), whose visible mark is a sprite.
- **Muted** (`#8b8b8b`): Unselected chart scope tabs, artist names in chart rows, dates and the unselected 2위.
- **Muted Alt** (`#969697`): DJ names (`a.dj`) and the labels of the toggle boxes beside them on home.
- **Toggle Grey** (`#656565`): Unselected period segments and 집계기준 on /chart/top200.

### Surface & Borders
- **White** (`#ffffff`): Outlined row buttons, the search field, page numbers, 집계기준 and the current chart-type tab. The body computes a transparent background, so the page white is the browser canvas.
- **Surface** (`#f6f6f6`): The chart-type tab strip and its unselected tabs on /chart/top200 and /newest/song.
- **Soft Surface** (`#f7f8f9`): The 컨텐츠 더보기 button on home (fill and border).
- **Outline** (`#a6afb6`): The 1px edge of the outlined row buttons at rest.
- **Border** (`#cccccc`): Page numbers, 집계기준, the period segments and the list arrows on home.

### Brand assets, not tokens
- The genie logo and the play, add and download marks are images. The collector does not read image or sprite colours, so no logo or icon colour is claimed.
- The June record's pink primary was not rendered by any of the 1,307 recorded elements or by the probe and is not part of this palette. `#d62952`, the June record's primary hover, renders only as the selected 1위 label; no hover to it was observed.

## 3. Typography Rules

### Font Family
- **Live surface use**: none resolved. The body and almost every element compute `dotum, 돋움, sans-serif, "Segoe UI Symbol"` (1,239 observed uses). Navigation items, home section titles, the search field and 컨텐츠 더보기 compute `"Malgun Gothic", "맑은 고딕", dotum` first (56 uses). Page numbers and the chart-page date heading compute `Tahoma, Helvetica, sans-serif` (7 uses). None of these is served as a web font; all three are operating-system faces that the capture machine did not have, so the collector reports dotum and Tahoma as unresolved and Malgun Gothic only as an OS stack. They are recorded as declared families, never substituted, and none is a typography token.
- **Official distributed font assets**: the site's stylesheet declares `@font-face` rules for NanumSquare (`/resources/commons/font/NanumSquareR.eot` and `.woff` on www.genie.co.kr) and Spoqa Han Sans (`/resources/commons/font/SpoqaHanSansBold.woff2`, `.woff`, `.ttf`). Neither face is used by any recorded element on these three pages. No licence file was opened, so no licence is stated.
- **Official product use**: no genie or KT Genie Music page opened this session names the service's typefaces; not claimed.
- **Declared only (no visible use)**: NanumSquare and Spoqa Han Sans, 0 observed uses each.
- **Unresolved**: dotum, Malgun Gothic and Tahoma in the capture environment, as above. `Times` (3 uses, the root default) and `a` (2 uses on page-arrow anchors) are browser defaults and parsing leftovers, not brand faces.

### Hierarchy

| Role | Declared family | Size | Weight | Line Height | Observed on |
|------|-----------------|------|--------|-------------|-------------|
| GNB | Malgun Gothic (unresolved) | 18px | 700 | 27px (1.5) | Navigation items, `#27282d` |
| Section Title | Malgun Gothic (unresolved) | 18px | 700 | normal | Home section titles, `#27282d` |
| Menu | dotum (unresolved) | 14px | 400 | 24px (1.71) | 로그인/회원가입 |
| Body | dotum (unresolved) | 12px | 400 | 18px (1.5) | Document default, `#444444` |
| Row | dotum (unresolved) | 12px | 400 | 22px (1.83) | Chart and list rows |
| Tab | dotum (unresolved) | 12px | 700 | normal | Selected scope tab, 웹플레이어 |
| Caption | dotum (unresolved) | 11px | 400 | 16.5px (1.5) | DJ names on home, `#969697` |
| Category | dotum (unresolved) | 11px | 700 | 22px (2) | NEW ALBUM labels, `#0096ff` |
| Button Small | dotum (unresolved) | 11px | 400 | 23px (2.09) | Outlined row-button labels |

### Principles
- **12px carries the catalogue**: rows, tabs, filters and the document default all sit at 12px; 11px carries buttons and captions, and 18px appears only in navigation and section titles.
- **Weight marks selection**: selected tabs, the selected rank and HOT filter, the selected period segment and the current page number all step from 400 to 700 as well as changing colour.
- **Normal tracking**: no recorded element sets letter-spacing except one 11px button at -1px.

## 4. Component Stylings

### Buttons

**Outlined row button**
- Background: `#ffffff`
- Text: `#27282d`
- Border: 1px solid `#a6afb6`
- Radius: 4px
- Padding: 0px 6px 0px 26px (the icon sits in the left padding)
- Height: 24px
- Font: 11px / 400 / 23px
- Hover: border `#27282d`
- Pressed: border `#27282d`
- Focus: 1px dotted `#27282d` outline
- Use: 전체듣기, 담기, 앨범 and 다운 above chart lists (72 × 24 on home; 53–97 × 24 on /chart/top200)

**Content more button**
- Background: `#f7f8f9`
- Text: `#27282d`
- Border: 1px solid `#f7f8f9`
- Radius: 4px
- Padding: 0px 22px 2px 0px
- Height: 40px
- Font: 14px / 400 (declared Malgun Gothic)
- States: rest only; not probed
- Use: 컨텐츠 더보기 under the editor section on home, 168 × 40

**Count button**
- Background: `#ffffff`
- Text: `#656565`
- Border: 1px solid `#cccccc`
- Radius: 3px
- Height: 22px
- Font: 11px / 400 / 21px
- States: rest only; it opens a layer and was not clicked
- Use: 집계기준 beside the period control on /chart/top200, 66 × 22

**Header links**
- 웹플레이어: text `#0096ff`, 12px / 700, 60 × 18; hover and pressed add a solid `#0096ff` underline; focus draws a 1px dotted `#0096ff` outline
- 이용권 구매: text `#444444`, 12px / 700 / 18px, padding 0px 4px 0px 26px (leading icon), 85 × 18; hover and pressed add a solid underline; focus draws a 1px dotted outline
- 로그인/회원가입: text `#444444`, 14px / 400 / 24px, padding 0px 18px 0px 5px, 112 × 22; rest only (it opens a menu and was not clicked)

### Tabs & Navigation

**Global navigation (GNB)**
- Text: `#27282d`, 18px / 700 / 27px (declared Malgun Gothic)
- Padding: 0px 27px 14px 0px; items 58–89 × 38
- Hover: text `#0096ff` (0.15s colour transition; probed on 지니차트, and the other items share its class)
- Pressed: text `#0096ff`
- Focus: text `#0096ff` plus a 1px dotted `#0096ff` outline
- Use: 지니차트, 최신음악, 장르음악, 뮤직비디오, 영상, 추천, 매거진, 뮤직허그 on every page

**Chart scope tabs**
- Unselected: text `#8b8b8b`, 12px / 400, padding 0px 8px, 37 × 15
- Selected: text `#0096ff`, 12px / 700
- States: hover shows no change; pressed and focus draw a 1px dotted outline in the label colour; transition all 0s
- Use: 종합 / 국내 and a third scope tab above the home chart; 추천 and its partner under a lower section heading

**Chart-type tabs**
- Background: `#f6f6f6`; selected `#ffffff`
- Text: `#444444`, 12px / 400 / 18px
- Padding: 11px 14px 0px; 110–120 × 37 (selected 109 × 38)
- Use: the tab strip across the top of /chart/top200 and /newest/song (710px wide)

**Period control**
- Unselected segments: background `#fafafa`, text `#656565`, 1px `#cccccc` top and bottom edges, 47 × 22, 11px / 400 / 22px
- Selected (실시간): background `#a5a5a5`, text `#ffffff`, border 1px `#9c9c9c`, 11px / 700, inset shadow rgba(0, 0, 0, 0.05) 1px 1px 0px 0px, 59 × 22
- Corners: 3px on the two outer corners only
- Use: 실시간 / 일간 / 주간 / 월간 / 누적 on /chart/top200

**Rank toggle**
- Unselected: text `#8b8b8b`, 12px / 400, padding 0px 0px 0px 13px, 40 × 15
- Selected: text `#d62952`, 12px / 700
- Use: 1위 / 2위 beside 실시간 차트 점유율 그래프 on /chart/top200

**Album-type filter**
- Items: text `#444444`, 12px / 400 / 18px, item padding 1px 8px, 20px tall
- Selected (HOT): text `#f68074`, 12px / 700
- Use: 앨범 종류 on /newest/song

**Pagination**
- Numbers: background `#ffffff`, text `#666666`, border 1px solid `#cccccc`, radius 4px, 28 × 28, 12px / 400 / 26px (declared Tahoma)
- Current: text `#0096ff`, border 1px solid `#0096ff`, 12px / 700
- Use: under the /newest/song list

### Inputs

**Header search field**
- Background: `#ffffff`
- Text: `#444444`
- Padding: 1px 2px
- Height: 38px (322px wide)
- Font: 14px / 400 (declared Malgun Gothic)
- Frame: the input itself computes no border and no radius; the visible frame belongs to an element the collector did not record, so none is declared
- States: rest only; nothing was typed

---

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out pages of www.genie.co.kr plus a fixed keyboard-probe state read of the home page and first-party company context)
**Tier 1 sources:** https://www.genie.co.kr/ ; https://www.genie.co.kr/chart/top200 ; https://www.genie.co.kr/newest/song ; https://www.geniemusic.co.kr/music/overview.do ; https://www.geniemusic.co.kr/love/GENIE.do
**Tier 2 sources:** getdesign.md/genie (HTTP 200, the name does not appear in the response) and styles.refero.design/?q=genie (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Measured paddings, not a declared scale: 0px 8px on text tabs; 27px between navigation items (right padding) with 14px below; 11px 14px 0px on chart-type tabs; 0px 6px 0px 26px on outlined row buttons, whose icon takes the 26px; 1px 8px on filter items; 26px of icon space before 이용권 구매.
- The most frequent recorded spacing values are 1px, 6px, 16px, 14px and 27px.

### Grid & Container
- Captured at a 1440 × 900 desktop viewport only. Content sits in fixed-width blocks rather than a fluid grid: the chart-type strip is 710px wide, the header search field 322px.
- Header: logo, search field and a utility row (이용권 구매, 웹플레이어, 로그인/회원가입), then the navigation bar. Main: charts, lists and filters. The chart and newest pages share the same header and chart-type strip.

### Whitespace Philosophy
- **Rows over air**: chart rows run at 22px lines and list controls at 24px; separation comes from `#f6f6f6` strips and `#cccccc` hairlines rather than large gaps.
- **Colour as wayfinding**: the only non-grey text on a page is the selected state, so `#0096ff` (and the local reds and salmon) doubles as a "you are here" marker.

### Border Radius Scale
- 0px: the default — 1,268 recorded elements, including navigation, tabs, rows and the search field
- 3px: toggle-sized controls (집계기준, the 75 × 22 toggle boxes beside the DJ names on home, the period control's outer corners) — 13 elements
- 4px: outlined row buttons, 컨텐츠 더보기 and page numbers — 24 elements
- 5px: 8 recorded elements the capture did not identify; not a token

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | `box-shadow: none` | Every recorded element but one |
| Inset | rgba(0, 0, 0, 0.05) 1px 1px 0px 0px inset | The selected 실시간 period segment on /chart/top200 |

**Shadow Philosophy:** the captured pages are flat. Of 1,307 recorded elements, only the selected period segment carries a shadow, a faint inset that makes it read as pressed in. Hierarchy comes from `#f6f6f6` strips, `#cccccc` and `#a6afb6` edges and the grey text staircase. The menus behind 로그인/회원가입 and 집계기준 were not opened, so no overlay elevation is declared.

## 7. Do's and Don'ts

### Do
- Use `#0096ff` for selection and navigation hover: the selected tab, the current page, the hovered navigation item
- Keep the catalogue at 12px and step selected items to weight 700
- Use white outlined row buttons with a 1px `#a6afb6` edge that darkens to `#27282d` on hover
- Keep controls square or nearly square: 0px by default, 3px on toggles, 4px on buttons and page numbers
- Separate sections with `#f6f6f6` strips and `#cccccc` hairlines
- Draw keyboard focus as a 1px dotted outline in the label colour, as the site does

### Don't
- Don't add coloured fills to actions; no captured control has one
- Don't use a pink as genie's primary; the June record's pink rendered nowhere on the captured pages
- Don't add shadows beyond the one inset on a selected segment
- Don't round controls into pills or cards into large radii
- Don't present Inter, a system UI face or any other font as dotum or Malgun Gothic
- Don't enlarge body text past 12px for list and chart content

## 8. Responsive Behavior

### Breakpoints
No breakpoint was measured. The pages were captured at 1440 × 900 only, and no mobile layout is declared.

### Touch Targets
Measured control sizes are desktop-sized and below 44px: outlined row buttons 24px tall, period segments and 집계기준 22px, text tabs 15px, page numbers 28 × 28, navigation items 38px, the search field 38px.

### Collapsing Strategy
Not measured.

### Image Behavior
Album covers in chart rows are 48 × 48 links on home; square 151 × 151 list tiles sit near the top of home. Nothing else about image scaling was measured.

## 9. Agent Prompt Guide

### Quick Color Reference
- Selection, navigation hover, web-player link: `#0096ff`
- Headings and navigation: `#27282d`
- Body text: `#444444`
- Page numbers: `#666666`
- Muted labels and artist names: `#8b8b8b`
- DJ names: `#969697`
- Outlined button edge: `#a6afb6`
- Hairline: `#cccccc`
- Tab strip: `#f6f6f6`
- Canvas and outlined fills: `#ffffff`

### Example Component Prompts
- "Build a chart toolbar: white outlined buttons 24px tall with a 1px #a6afb6 border and 4px radius, label 11px / 400 in #27282d, 26px of left padding for an icon; on hover the border turns #27282d."
- "Create chart scope tabs: 12px text with 0 8px padding, unselected #8b8b8b at 400, selected #0096ff at 700, no hover change, a 1px dotted outline in the label colour on focus."
- "Create a segmented period control: 22px segments in #fafafa with #656565 11px labels and #cccccc top and bottom edges; the selected segment #a5a5a5 with white 700 text, a #9c9c9c border and a faint inset shadow; 3px on the outer corners only."
- "Create the navigation bar: 18px / 700 items in #27282d with 27px between them, turning #0096ff on hover and press."

### Iteration Guide
1. Keep list and chart content at 12px; use 700 for selected items
2. Reserve `#0096ff` for selection, navigation hover and the web-player link
3. Keep radii at 0, 3 or 4px
4. Use outlines and grey strips, not shadows or fills
5. Focus is a 1px dotted outline in the label colour
6. Leave the font family to the site's declared dotum and Malgun Gothic; never present another face as them

---

## 10. Voice & Tone

genie's copy is short, plain Korean. The service title line "음악, 그리고 설레임" (the `<title>` of every captured page) carries the emotional note; the working interface uses bare nouns and verbs.

| Context | Observed copy |
|---|---|
| Navigation | 지니차트, 최신음악, 장르음악, 뮤직비디오, 영상, 추천, 매거진, 뮤직허그 |
| List actions | 전체듣기, 재생목록에 추가, 더보기, 컨텐츠 더보기 |
| Chart controls | 실시간, 일간, 주간, 월간, 누적; 집계기준; 실시간 차트 점유율 그래프; 1위, 2위 |
| Filters | 앨범 종류: HOT, 전체, 가요, POP, OST, 트롯, JAZZ, CLASSIC, EDM, 동요/태교, JPOP, 뉴에이지, CCM, 그 외 장르 |
| Header | 이용권 구매, 웹플레이어, 로그인/회원가입 |
| Explanations | "1시간마다 스트리밍 + 다운로드 합산 방식으로 집계됩니다. (단, 매일 1시 ~ 7시 차트 운영 안함)" (the 집계기준 layer text in the chart page source) |
| Service page | "빠른 선곡 — 좋아할만한 노래들을 알아서 빠르게!", "인기 음악 트렌드는 지니차트에서 만나요." |
| Company | "음악을 사랑하는 사람들을 행복하게 하는 기업 케이티지니뮤직입니다." |

Controls speak in nouns (전체듣기, 집계기준); explanations are complete, polite sentences; the service page adds exclamation-led benefit lines. The working catalogue carries no slogans.

## 11. Brand Narrative

케이티지니뮤직 runs genie, one of Korea's music-streaming services, from 한석타워 in 역삼동, 강남구, Seoul, with 서인욱 as chief executive (company footer). Its company page lists a long lineage: Muzcast.com (2000), paid streaming from July 2003 alongside music services run for portals and game sites such as 엠파스, Nate.com and 넷마블, KTF's 도시락 music portal (2005), KTF affiliation (2007) and the name KTF뮤직 (2008), kt music (2009), the ollehmusic portal (2011), the KMP홀딩스 merger (2013), the genie business (2014), 지니뮤직 (2017), the CJ디지털뮤직 merger (2018), the genie–Mnet.com integration (2019), genie 5.0 under the line "새로운 즐거움의 시작" (2020), the purchase of the e-book service 밀리의 서재 (2021), a concert division and the AI-music startup 주스 (2022), and in 2025 the name 케이티지니뮤직 with "AI DJ" and genie App 6.0.

The service page frames genie since the 2013 "New genie" launch as a service that "음악 서비스 시장을 선도하며 끊임없이 진화" and that uses AI and big data to fit each listener's taste. It names six features: 빠른 선곡 (personalised quick picks), 지니 차트 (realtime and daily charts), 추천 플레이리스트, 돌비애트모스, 위젯 and 오디오. The corporate site shows the wider business around the service: 공연 (the StayG stage), 투자/유통 and album and music production.

The web product keeps the chart at its centre: the home page opens on chart scope tabs and ranked rows, and the chart page adds period, rank-share and chart-type controls.

## 12. Principles

The first principle is the company's own statement; the rest describe what the captured pages do.

1. **Happiness for people who love music.** "음악을 사랑하는 사람들을 행복하게 하는 기업" is the company's stated purpose (company page).
2. **The chart comes first.** Home opens on the chart with scope tabs; /chart/top200 adds period, share and chart-type controls.
3. **Selection is the only colour.** Grey text everywhere, and `#0096ff` (or a local red, salmon or grey) only on the selected or hovered item.
4. **Weight before size.** Selected items move from 400 to 700 at the same 12px.
5. **Flat and outlined.** Edges and strips, not shadows or fills, separate the catalogue.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Korean music-streaming users, not individual people or company research.*

**Seo-yeon, 24, Seoul.** Opens genie every morning to check the 실시간 chart. Measures the site by how quickly she can see the top of the chart and press 전체듣기.

**Min-jae, 31, Busan.** Got genie with his mobile plan. Uses the chart and a few saved lists; cares that play and download controls are where he left them.

**Hyun-woo, 38, Daegu.** Follows specific artists and switches between 실시간, 일간 and 주간 during a comeback week. The period control and the rank toggle are his working tools.

**Ji-woo, 19, Incheon.** Browses new releases by album type with the 앨범 종류 filter, starting from HOT.

## 14. States

| State | Treatment | Evidence |
|---|---|---|
| **Hover (navigation)** | Label `#27282d` → `#0096ff` after a 0.15s colour transition | Probe, 지니차트 |
| **Focus (navigation)** | Label `#0096ff` plus a 1px dotted `#0096ff` outline | Probe, Tab #27 |
| **Hover (outlined row button)** | Border `#a6afb6` → `#27282d` | Probe, 전체듣기 |
| **Hover (header links)** | Solid underline in the label colour | Probe, 웹플레이어 and 이용권 구매 |
| **Hover (scope tabs)** | No change | Probe, 종합 and 국내 |
| **Focus (all probed controls)** | 1px dotted outline in the label colour | Probe |
| **Selected (scope tab, page number)** | `#0096ff`, weight 700; the page number also gets a `#0096ff` border | Rest values, home and /newest/song |
| **Selected (period segment)** | `#a5a5a5` fill, `#ffffff` 700 text, `#9c9c9c` border, faint inset | Rest values, /chart/top200 |
| **Selected (rank toggle, HOT filter)** | `#d62952` and `#f68074` text at 700 | Rest values, /chart/top200 and /newest/song |
| **Selected (chart-type tab)** | `#ffffff` fill against the `#f6f6f6` strip | Rest values, /chart/top200 |

Empty, loading, error and disabled states were not observed and are not declared. The collector recorded no interaction events (`interactionCount` 0); that does not mean the site has no other states.

## 15. Motion & Easing

Only the transitions the probe read are stated:

- 지니차트, 웹플레이어, 이용권 구매 and 전체듣기 (the probed navigation item, header links and outlined row button): `transition: background-color 0.25s ease, position 0.25s ease, color 0.15s ease`.
- Chart scope tabs: `transition: all 0s` (no animation).

No other duration or easing was measured. The duration and easing tables of the earlier record were not grounded in any observation and were removed.

## 16. Do's and Don'ts (Brand Philosophy)

### Do
- Keep the chart as the entry point, with its scope, period and filter controls close to the list
- Let grey text and 12px rows carry the catalogue, with colour only on the selected item
- Keep the warmth of "음악, 그리고 설레임" in titles and service copy, and the controls terse

### Don't
- Don't turn the chart into large editorial cards
- Don't spread `#0096ff` into backgrounds or decoration
- Don't carry exclamation-led benefit copy into the working controls
