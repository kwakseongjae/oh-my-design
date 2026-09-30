---
id: tabling
name: Tabling
display_name_kr: 테이블링
country: KR
category: consumer-tech
homepage: "https://www.tabling.co.kr/"
primary_color: "#fc3d0e"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=tabling.co.kr&sz=128"
verified: "2026-09-30"
added: "2026-07-02"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: product, url: "https://www.tabling.co.kr/", inspected: "2026-09-30" }
    - { id: surface-2, kind: product, url: "https://www.tabling.co.kr/top100", inspected: "2026-09-30" }
    - { id: surface-3, kind: product, url: "https://www.tabling.co.kr/restaurant/fz22jjovyhauux30a95qh8", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://www.tabling.co.kr/", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://www.tabling.co.kr/top100", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://www.tabling.co.kr/restaurant/fz22jjovyhauux30a95qh8", captured: "2026-09-30" }
    - { id: tabling-probe-restaurant, kind: product-surface, url: "https://www.tabling.co.kr/restaurant/fz22jjovyhauux30a95qh8", captured: "2026-09-30" }
    - { id: tabling-biz, kind: official-doc, url: "https://b2b.tabling.co.kr/", captured: "2026-09-30" }
    - { id: tabling-ad, kind: official-doc, url: "https://ad.tabling.co.kr/", captured: "2026-09-30" }
    - { id: tabling-notice, kind: official-doc, url: "https://www.tabling.co.kr/notice", captured: "2026-09-30" }
    - { id: tabling-terms, kind: official-doc, url: "https://info.tabling.co.kr/policy/service.html", captured: "2026-09-30" }
    - { id: pretendard-license, kind: license, url: "https://raw.githubusercontent.com/orioncactus/pretendard/main/LICENSE", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &cta { surface_id: surface-3, source_id: tabling-probe-restaurant, method: live-state-probe, selector: "button 테이블링 앱에서 이용하기 (520.3 x 60): rest background-color rgba(0, 0, 0, 0), background-image linear-gradient(90deg, rgb(252, 61, 14), rgb(252, 92, 23)), fg rgb(251, 252, 253), radius 10px, padding 19px 0px 17px, 18px/700; up1 wrapper bg rgb(255, 255, 255); hover and pressed no change across self and 3 ancestor levels (transition all 0s); focus (Tab #14) outline none -> rgb(0, 95, 204) auto 1px", captured: "2026-09-30" }
    "tokens.colors.primary-end": *cta
    "tokens.colors.on-primary": &ctarest { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"11\"]", captured: "2026-09-30" }
    "tokens.colors.ink": &body { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::body", captured: "2026-09-30" }
    "tokens.colors.heading": &hero { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.colors.ink-strong": &name { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h2", captured: "2026-09-30" }
    "tokens.colors.rating": &rating { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::span", captured: "2026-09-30" }
    "tokens.colors.slate": &option { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::div", captured: "2026-09-30" }
    "tokens.colors.muted": &class { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::span", captured: "2026-09-30" }
    "tokens.colors.label-grey": &copy { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"10\"]", captured: "2026-09-30" }
    "tokens.colors.faint": &review { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::span", captured: "2026-09-30" }
    "tokens.colors.inactive": &tabin { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::li", captured: "2026-09-30" }
    "tokens.colors.waiting": &count { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::span", captured: "2026-09-30" }
    "tokens.colors.info": &chart { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"4\"]", captured: "2026-09-30" }
    "tokens.colors.white": *body
    "tokens.colors.surface": &contract { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::div", captured: "2026-09-30" }
    "tokens.colors.region": &region { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"11\"]", captured: "2026-09-30" }
    "tokens.colors.divider": &divider { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::div", captured: "2026-09-30" }
    "tokens.colors.border": &tag { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::li", captured: "2026-09-30" }
    "tokens.typography.family.ui": *body
    "tokens.typography.hero.size": *hero
    "tokens.typography.hero.weight": *hero
    "tokens.typography.hero.lineHeight": *hero
    "tokens.typography.hero.use": *hero
    "tokens.typography.name.size": *name
    "tokens.typography.name.weight": *name
    "tokens.typography.name.use": *name
    "tokens.typography.section.size": &areatitle { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.typography.section.weight": *areatitle
    "tokens.typography.section.lineHeight": *areatitle
    "tokens.typography.section.use": *areatitle
    "tokens.typography.card-title.size": &title18 { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h2", captured: "2026-09-30" }
    "tokens.typography.card-title.weight": *title18
    "tokens.typography.card-title.lineHeight": *title18
    "tokens.typography.card-title.use": *title18
    "tokens.typography.cta.size": *ctarest
    "tokens.typography.cta.weight": *ctarest
    "tokens.typography.cta.lineHeight": *ctarest
    "tokens.typography.cta.use": *ctarest
    "tokens.typography.search.size": &search { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"2\"]", captured: "2026-09-30" }
    "tokens.typography.search.weight": *search
    "tokens.typography.search.lineHeight": *search
    "tokens.typography.search.use": *search
    "tokens.typography.tab.size": &tabact { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::li", captured: "2026-09-30" }
    "tokens.typography.tab.weight": *tabact
    "tokens.typography.tab.use": *tabact
    "tokens.typography.body.size": *body
    "tokens.typography.body.weight": *body
    "tokens.typography.body.use": *body
    "tokens.typography.desc.size": &desc { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::p", captured: "2026-09-30" }
    "tokens.typography.desc.weight": *desc
    "tokens.typography.desc.lineHeight": *desc
    "tokens.typography.desc.tracking": *desc
    "tokens.typography.desc.use": *desc
    "tokens.typography.subtitle.size": &cursub { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.subtitle.weight": *cursub
    "tokens.typography.subtitle.lineHeight": *cursub
    "tokens.typography.subtitle.use": *cursub
    "tokens.typography.footer-link.size": &footer { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"25\"]", captured: "2026-09-30" }
    "tokens.typography.footer-link.weight": *footer
    "tokens.typography.footer-link.lineHeight": *footer
    "tokens.typography.footer-link.use": *footer
    "tokens.typography.meta.size": *class
    "tokens.typography.meta.weight": *class
    "tokens.typography.meta.lineHeight": *class
    "tokens.typography.meta.use": *class
    "tokens.typography.rating.size": *rating
    "tokens.typography.rating.weight": *rating
    "tokens.typography.rating.lineHeight": *rating
    "tokens.typography.rating.use": *rating
    "tokens.typography.option.size": *option
    "tokens.typography.option.weight": *option
    "tokens.typography.option.lineHeight": *option
    "tokens.typography.option.use": *option
    "tokens.typography.badge.size": *count
    "tokens.typography.badge.weight": *count
    "tokens.typography.badge.use": *count
    "tokens.typography.tag.size": *tag
    "tokens.typography.tag.weight": *tag
    "tokens.typography.tag.lineHeight": *tag
    "tokens.typography.tag.use": *tag
    "tokens.typography.label.size": *contract
    "tokens.typography.label.weight": *contract
    "tokens.typography.label.lineHeight": *contract
    "tokens.typography.label.use": *contract
    "tokens.typography.rank.size": &rank { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::div", captured: "2026-09-30" }
    "tokens.typography.rank.weight": *rank
    "tokens.typography.rank.tracking": *rank
    "tokens.typography.rank.use": *rank
    "tokens.spacing.card": &wcard { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::div", captured: "2026-09-30" }
    "tokens.spacing.region-y": *region
    "tokens.spacing.region-x": *region
    "tokens.spacing.tag-y": *tag
    "tokens.spacing.tag-x": *tag
    "tokens.spacing.label-y": *contract
    "tokens.spacing.label-x": *contract
    "tokens.spacing.cta-top": *ctarest
    "tokens.spacing.cta-bottom": *ctarest
    "tokens.spacing.bar-y": &fixedwrap { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::div", captured: "2026-09-30" }
    "tokens.spacing.bar-x": *fixedwrap
    "tokens.rounded.label": *contract
    "tokens.rounded.thumb": &thumb { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::div", captured: "2026-09-30" }
    "tokens.rounded.cta": *ctarest
    "tokens.rounded.slot": &slot { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::li", captured: "2026-09-30" }
    "tokens.rounded.chip": *tag
    "tokens.rounded.region": *region
    "tokens.components.app-cta.type": *ctarest
    "tokens.components.app-cta.bg": *cta
    "tokens.components.app-cta.fg": *ctarest
    "tokens.components.app-cta.radius": *ctarest
    "tokens.components.app-cta.padding": *ctarest
    "tokens.components.app-cta.height": *ctarest
    "tokens.components.app-cta.font": *ctarest
    "tokens.components.app-cta.states": *cta
    "tokens.components.app-cta.use": *ctarest
    "tokens.components.region-button.type": *region
    "tokens.components.region-button.bg": *region
    "tokens.components.region-button.fg": *region
    "tokens.components.region-button.border": *region
    "tokens.components.region-button.radius": *region
    "tokens.components.region-button.padding": *region
    "tokens.components.region-button.size": *region
    "tokens.components.region-button.font": *region
    "tokens.components.region-button.states": *region
    "tokens.components.region-button.use": *region
    "tokens.components.category-button.type": &cat { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"3\"]", captured: "2026-09-30" }
    "tokens.components.category-button.bg": *cat
    "tokens.components.category-button.fg": *cat
    "tokens.components.category-button.size": *cat
    "tokens.components.category-button.font": *cat
    "tokens.components.category-button.states": *cat
    "tokens.components.category-button.use": *cat
    "tokens.components.chart-button.type": *chart
    "tokens.components.chart-button.bg": *chart
    "tokens.components.chart-button.fg": *chart
    "tokens.components.chart-button.border": *chart
    "tokens.components.chart-button.radius": *chart
    "tokens.components.chart-button.height": *chart
    "tokens.components.chart-button.font": *chart
    "tokens.components.chart-button.states": &chartstate { surface_id: surface-3, source_id: tabling-probe-restaurant, method: live-state-probe, selector: "button 앱에서 대기시간 확인하기 (200 x 44, rest bg rgb(255, 255, 255), fg rgb(13, 116, 246), border 1px solid rgb(13, 116, 246), radius 8px, 14px/700): hover and pressed no change (transition all 0s); focus (Tab #5) outline none -> rgb(0, 95, 204) auto 1px", captured: "2026-09-30" }
    "tokens.components.chart-button.use": *chart
    "tokens.components.copy-button.type": *copy
    "tokens.components.copy-button.bg": *copy
    "tokens.components.copy-button.fg": *copy
    "tokens.components.copy-button.radius": *copy
    "tokens.components.copy-button.padding": *copy
    "tokens.components.copy-button.height": *copy
    "tokens.components.copy-button.font": *copy
    "tokens.components.copy-button.states": &copystate { surface_id: surface-3, source_id: tabling-probe-restaurant, method: live-state-probe, selector: "button 주소복사 (78.1 x 34, rest bg rgb(241, 243, 245), fg rgb(82, 89, 101)): hover and pressed no change (transition all 0s); focus (Tab #13) outline none -> rgb(0, 95, 204) auto 1px", captured: "2026-09-30" }
    "tokens.components.copy-button.use": *copy
    "tokens.components.detail-tab.type": *tabin
    "tokens.components.detail-tab.fg": *tabin
    "tokens.components.detail-tab.padding": *tabin
    "tokens.components.detail-tab.height": *tabin
    "tokens.components.detail-tab.font": *tabin
    "tokens.components.detail-tab.selected": *tabact
    "tokens.components.detail-tab.states": &tabstate { surface_id: surface-3, source_id: tabling-probe-restaurant, method: live-state-probe, selector: "li 리뷰 10,364 (200.2 x 46, rest fg rgb(183, 190, 200)): hover and pressed no change across self, 1 descendant and 3 ancestor levels (transition all 0s); focus not reached by Tab (tabIndex -1)", captured: "2026-09-30" }
    "tokens.components.detail-tab.use": *tabin
    "tokens.components.time-slot.type": &slotoff { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::li", captured: "2026-09-30" }
    "tokens.components.time-slot.fg": *slotoff
    "tokens.components.time-slot.padding": *slotoff
    "tokens.components.time-slot.font": *slotoff
    "tokens.components.time-slot.selected": *slot
    "tokens.components.time-slot.states": *slotoff
    "tokens.components.time-slot.use": *slotoff
    "tokens.components.tag-chip.type": *tag
    "tokens.components.tag-chip.fg": *tag
    "tokens.components.tag-chip.border": *tag
    "tokens.components.tag-chip.radius": *tag
    "tokens.components.tag-chip.padding": *tag
    "tokens.components.tag-chip.height": *tag
    "tokens.components.tag-chip.font": *tag
    "tokens.components.tag-chip.use": *tag
    "tokens.components.waiting-badge.type": &waiting { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::div", captured: "2026-09-30" }
    "tokens.components.waiting-badge.bg": *waiting
    "tokens.components.waiting-badge.fg": *waiting
    "tokens.components.waiting-badge.count": *count
    "tokens.components.waiting-badge.radius": *waiting
    "tokens.components.waiting-badge.size": *waiting
    "tokens.components.waiting-badge.font": *waiting
    "tokens.components.waiting-badge.use": *waiting
    "tokens.components.contract-label.type": *contract
    "tokens.components.contract-label.bg": *contract
    "tokens.components.contract-label.fg": *contract
    "tokens.components.contract-label.radius": *contract
    "tokens.components.contract-label.padding": *contract
    "tokens.components.contract-label.height": *contract
    "tokens.components.contract-label.font": *contract
    "tokens.components.contract-label.use": *contract
    "tokens.components.store-card.type": *wcard
    "tokens.components.store-card.bg": *wcard
    "tokens.components.store-card.padding": *wcard
    "tokens.components.store-card.size": *wcard
    "tokens.components.store-card.use": *wcard
    "tokens.components.thumbnail.type": *thumb
    "tokens.components.thumbnail.border": *thumb
    "tokens.components.thumbnail.radius": *thumb
    "tokens.components.thumbnail.size": *thumb
    "tokens.components.thumbnail.use": *thumb
    "tokens.components.map-button.type": &map { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"9\"]", captured: "2026-09-30" }
    "tokens.components.map-button.bg": *map
    "tokens.components.map-button.fg": *map
    "tokens.components.map-button.radius": *map
    "tokens.components.map-button.padding": *map
    "tokens.components.map-button.height": *map
    "tokens.components.map-button.font": *map
    "tokens.components.map-button.states": *map
    "tokens.components.map-button.use": *map
    "tokens.components.search-input.type": *search
    "tokens.components.search-input.fg": *search
    "tokens.components.search-input.font": *search
    "tokens.components.search-input.states": *search
    "tokens.components.search-input.use": *search
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#fc3d0e"
    primary-end: "#fc5c17"
    on-primary: "#fbfcfd"
    ink: "#2e3137"
    heading: "#000000"
    ink-strong: "#11181c"
    rating: "#131517"
    slate: "#505c81"
    muted: "#6d7583"
    label-grey: "#525965"
    faint: "#969fac"
    inactive: "#b7bec8"
    waiting: "#1cfbce"
    info: "#0d74f6"
    white: "#ffffff"
    surface: "#f1f3f5"
    region: "#f0f4ff"
    divider: "#f3f5f8"
    border: "#d7dbdf"
  typography:
    family: { ui: "Pretendard" }
    hero: { size: 24, weight: 700, lineHeight: 1.33, use: "Home hero heading (오늘 뭐 먹지? 맛집 검색은 테이블링), 31.992px line, in #000000" }
    name: { size: 22, weight: 700, use: "Restaurant name on the restaurant page, normal line height, in #11181c" }
    section: { size: 20, weight: 700, lineHeight: 1.3, use: "Home section headings (지역별 인기 웨이팅 맛집 in #000000; curation titles in #11181c), 26px line" }
    card-title: { size: 18, weight: 700, lineHeight: 1.22, use: "Restaurant names on TOP100 cards, 22px line, in #2e3137" }
    cta: { size: 18, weight: 700, lineHeight: 1.33, use: "Label of 테이블링 앱에서 이용하기, 24px line, in #fbfcfd; the button computes Arial, not Pretendard" }
    search: { size: 16, weight: 600, lineHeight: 1.19, use: "Store search input on home, 19.088px line, in #000000" }
    tab: { size: 16, weight: 700, use: "Selected tab of the restaurant page (#11181c); unselected tabs are 600 in #b7bec8" }
    body: { size: 14, weight: 400, use: "Document default on all three routes, normal line height, in #2e3137" }
    desc: { size: 14, weight: 600, lineHeight: 1.5, tracking: -0.1, use: "Restaurant introduction on the restaurant page, 21px line" }
    subtitle: { size: 14, weight: 500, lineHeight: 1.29, use: "Home curation subtitles, 18px line, in #6d7583" }
    footer-link: { size: 14, weight: 600, lineHeight: 1.5, use: "Footer links, 21px line, in #6d7583" }
    meta: { size: 13, weight: 400, lineHeight: 1.38, use: "Cuisine and area line on TOP100 cards, 18px line, in #6d7583" }
    rating: { size: 13, weight: 700, lineHeight: 1.38, use: "Rating value on TOP100 cards, 18px line, in #131517" }
    option: { size: 13, weight: 500, lineHeight: 1.38, use: "Service options on TOP100 cards, 18px line, in #505c81" }
    badge: { size: 12, weight: 700, use: "Live waiting-team count on TOP100 thumbnails, in #1cfbce" }
    tag: { size: 12, weight: 500, lineHeight: 1.33, use: "Tag chips on the restaurant page, 16px line, in #525965" }
    label: { size: 11, weight: 600, lineHeight: 1.27, use: "Grey labels on TOP100 cards, 14px line, in #505c81" }
    rank: { size: 12, weight: 900, tracking: -0.5, use: "Rank numerals over TOP100 thumbnails, in #ffffff" }
  spacing: { card: 16, region-y: 8, region-x: 16, tag-y: 8, tag-x: 12, label-y: 4, label-x: 6, cta-top: 19, cta-bottom: 17, bar-y: 8, bar-x: 14 }
  rounded: { label: 4, thumb: 8, cta: 10, slot: 12, chip: 16, region: 24 }
  components:
    app-cta: { type: button, bg: "linear-gradient(90deg, #fc3d0e, #fc5c17)", fg: "#fbfcfd", radius: "10px", padding: "19px 0px 17px", height: "60px", font: "18px / 700 / 24px; the button computes Arial (the browser default for buttons), so Hangul falls back to the system face", states: "probe: hover and pressed show no change across the button and three ancestor levels (transition all 0s); focus draws only the browser default ring, so no brand focus style is declared", use: "테이블링 앱에서 이용하기, fixed at the bottom of the restaurant page at surface-3::[data-omd-capture=\"11\"], 520.3 x 60, on a white 600 x 76 bar with 8px 14px padding; the gradient is the button's own background-image" }
    region-button: { type: button, bg: "#f0f4ff", fg: "#2e3137", border: "1px solid rgba(0, 0, 0, 0.04)", radius: "24px", padding: "8px 16px", size: "80px x 80px", font: "14px / 400 (computes Arial)", states: "rest only; not probed", use: "Region shortcuts under 지역별 인기 웨이팅 맛집 on home (전국, 서울 남부, 서울 북부, 부산, 경남, 광주, 강원, 대구) at home::[data-omd-capture=\"11\"]" }
    category-button: { type: button, bg: "transparent", fg: "#2e3137", size: "142px x 72px", font: "14px / 400 (computes Arial), 6px gap between icon and label", states: "rest only; not probed", use: "Cuisine shortcuts under the hero search on home (한식, 일식, 양식, 중식, 카페/베이커리, 해산물, 주점, 기타) at home::[data-omd-capture=\"3\"], an icon over a label" }
    chart-button: { type: button, bg: "#ffffff", fg: "#0d74f6", border: "1px solid #0d74f6", radius: "8px", height: "44px", font: "14px / 700 (computes Arial)", states: "probe: hover and pressed show no change (transition all 0s); focus draws only the browser default ring", use: "앱에서 대기시간 확인하기 over the waiting-time chart on the restaurant page at surface-3::[data-omd-capture=\"4\"], 200 x 44" }
    copy-button: { type: button, bg: "#f1f3f5", fg: "#525965", radius: "16px", padding: "10px 12px", height: "34px", font: "11px / 600 / 14px (computes Arial)", states: "probe: hover and pressed show no change (transition all 0s); focus draws only the browser default ring", use: "주소복사 beside the address on the restaurant page at surface-3::[data-omd-capture=\"10\"], 78 x 34" }
    detail-tab: { type: tab, fg: "#b7bec8", padding: "12px 0px", height: "46px", font: "16px / 600 Pretendard", selected: "fg #11181c at weight 700, 45px tall, with a 2px top border computed in #11181c", states: "probe on 리뷰 10,364: hover and pressed show no change; the tab is not in the Tab order (tabIndex -1); selected variant read from rest values", use: "Tabs of the restaurant page (the selected first tab, whose panel components are named Home_*, and 리뷰 10,364), 200px wide each, on a sticky white header over an 8px #f3f5f8 divider" }
    time-slot: { type: toggle, fg: "#6d7583", padding: "3px 12px", font: "12px / 500 / 16px Pretendard", selected: "bg #ffffff, fg #525965 at weight 700, radius 12px, box-shadow rgba(109, 117, 131, 0.04) 0px 4px 12px 0px, rgba(109, 117, 131, 0.04) 0px -4px 24px 0px", states: "selected variant read from rest values; no pointer frame", use: "Time selector of the waiting-time chart on the restaurant page, 75 x 22 cells (7 captured)" }
    tag-chip: { type: badge, fg: "#525965", border: "1px solid #d7dbdf", radius: "16px", padding: "8px 12px", height: "34px", font: "12px / 500 / 16px Pretendard", use: "Tags in the restaurant page's first tab panel (class Home_tag), 102 x 34 (8 captured)" }
    waiting-badge: { type: badge, bg: "rgba(0, 0, 0, 0.8)", fg: "#ffffff", count: "#1cfbce at 12px / 700", radius: "0px 0px 8px 8px", size: "88px x 28px", font: "12px / 700 Pretendard", use: "Live waiting overlay across the foot of each TOP100 thumbnail; the team count inside is set in #1cfbce (13 of 20 captured cards)" }
    contract-label: { type: badge, bg: "#f1f3f5", fg: "#505c81", radius: "4px", padding: "4px 6px", height: "22px", font: "11px / 600 / 14px Pretendard", use: "Small grey labels on TOP100 cards, 50 x 22 (30 captured)" }
    store-card: { type: card, bg: "#ffffff", padding: "16px", size: "600px x 150px", use: "TOP100 ranking card: thumbnail beside the name, rating, review count, cuisine and area, and options (20 captured)" }
    thumbnail: { type: card, border: "1px solid rgba(0, 0, 0, 0.04)", radius: "8px", size: "90px x 102px", use: "Restaurant thumbnail frame on TOP100 cards, with the rank numeral and the waiting overlay on it" }
    map-button: { type: button, bg: "rgba(0, 0, 0, 0.44)", fg: "#ffffff", radius: "4px", padding: "6px 8px", height: "28px", font: "13px / 500 / 16px (computes Arial)", states: "rest only; not probed", use: "Map-view button (class Home_mapViewButton) over the map on the restaurant page at surface-3::[data-omd-capture=\"9\"], 61 x 28" }
    search-input: { type: input, fg: "#000000", font: "16px / 600 / 19.088px Pretendard", states: "rest only; not probed", use: "Store search input under the hero heading on home at home::[data-omd-capture=\"2\"], 524 x 19, beside a 24 x 24 search button" }
  components_harvested: true
---

# Design System Inspiration of Tabling

## 1. Visual Theme & Atmosphere

Tabling (테이블링) is a Korean restaurant waitlist and discovery service run by 테이블링 주식회사 (Tabling Inc.) from Teheran-ro in Gangnam, Seoul, according to the company details in its own footers. Its consumer web page states the premise in its title: "맛집 도착 전 앱으로 미리 줄서기" — join the queue for a popular restaurant from the app before you arrive. Its owner-facing site, 테이블링 Biz, now sells more than the queue: 대기 (waitlist), 예약 (reservations), 빈자리선점 (claiming an open seat) and 테이블오더 (table ordering). It calls itself "검증된 외식 매장 솔루션" — a proven solution for restaurants — and cites, as of November 2025, 4,000+ partner restaurants, 5.7 million+ members and 75 million+ uses. The product keeps evolving in public. On 12 November 2025, with app 4.23.1, 지금자리선점 was renamed 빈자리선점. Tabling now links its waitlist with Naver: the Biz site advertises "네이버 연동 웨이팅 서비스", and an August 2026 notice explains that Tabling usage and table-order history are shared with Naver for members who opt in.

On the web the brand is a white page in warm near-black `#2e3137`, with a pure-black `#000000` hero heading, "오늘 뭐 먹지? 맛집 검색은 테이블링". Colour is rare and every hue has a job. The one filled call to action — 테이블링 앱에서 이용하기, fixed at the foot of each restaurant page — carries an orange gradient from `#fc3d0e` to `#fc5c17`. The live waiting-team count glows in mint `#1cfbce` on a dark 80% black strip over each TOP100 thumbnail. Region shortcuts sit on a pale blue `#f0f4ff`, and a single blue outline button (`#0d74f6`) sends people to the app for waiting times. Everything else is grey type on white in one Pretendard family, in a 600px single column that reads like the mobile app it points to. Only one captured element carries a shadow.

**Key Characteristics:**
- One filled action, in an orange gradient: `#fc3d0e` → `#fc5c17`, 10px radius, 60px tall, `#fbfcfd` label
- Mint `#1cfbce` for the live waiting count only, on a `rgba(0, 0, 0, 0.8)` strip across the thumbnail foot
- Warm ink `#2e3137` for reading, `#000000` for the home hero, `#11181c` for restaurant names and section titles
- A cool grey ladder for data: `#131517` ratings, `#505c81` options, `#6d7583` cuisine and area, `#969fac` review counts
- Pretendard throughout the document (buttons compute the browser's Arial instead)
- Soft geometry: 24px region tiles, 16px chips, 10px action, 8px thumbnails, 4px labels
- Near-flat: of 519 captured elements, only the selected time slot of the waiting chart carries a shadow

## Primary tasks

- Join a restaurant queue from the app before you arrive
- Watch the live waiting-team count move while you travel
- Search by region and cuisine to plan a family dinner
- Compare TOP100 rankings and ratings to avoid a bad pick
- Broaden the region or cuisine when nothing matches

## 2. Color Palette & Roles

Every token below was read on 2026-09-30 by the deterministic collector from www.tabling.co.kr, /top100 and a restaurant page. The fixed keyboard probe on the restaurant page read the action's gradient and the controls' states. The tokens describe Tabling's public web; the Tabling app was not captured.

### Primary
- **Tabling Orange** (`#fc3d0e` → `#fc5c17`): The fill of 테이블링 앱에서 이용하기, the call to action fixed at the bottom of the restaurant page (520 × 60). The button's own `background-image` is `linear-gradient(90deg, rgb(252, 61, 14), rgb(252, 92, 23))` over a transparent `background-color`; its wrapper is white. It is the primary because it is the product's primary action fill: the only filled call to action on the three captured routes, and the step the web product exists to lead to — opening the app to join the queue. `primary` takes the gradient's starting stop `#fc3d0e`, and `primary-end` keeps `#fc5c17` so the gradient can be rebuilt.
- **On Primary** (`#fbfcfd`): The action's label.

### Functional accents
- **Waiting Mint** (`#1cfbce`): The live waiting-team count on TOP100 thumbnails, set at 12px / 700 inside a `rgba(0, 0, 0, 0.8)` strip whose other text is `#ffffff`.
- **Info Blue** (`#0d74f6`): Label and 1px outline of 앱에서 대기시간 확인하기 on the waiting-time chart.
- **Region Tint** (`#f0f4ff`): The fill of the eight region shortcuts on home.

### Text
- **Ink** (`#2e3137`): The document default and most text.
- **Heading** (`#000000`): The home hero and the 지역별 인기 웨이팅 맛집 heading.
- **Ink Strong** (`#11181c`): Restaurant name, curation section titles, the QR prompt and the selected restaurant tab.
- **Rating** (`#131517`): Rating values on TOP100 cards.
- **Slate** (`#505c81`): Service options and grey labels on TOP100 cards.
- **Muted** (`#6d7583`): Cuisine and area lines, home subtitles, footer links, unselected time slots.
- **Label Grey** (`#525965`): The 주소복사 button, tag chips and the selected time slot.
- **Faint** (`#969fac`): Review counts.
- **Inactive** (`#b7bec8`): Unselected restaurant tabs.

### Surface & Border
- **White** (`#ffffff`): Page, TOP100 cards, the chart button, the bottom action bar and the selected time slot.
- **Surface** (`#f1f3f5`): Grey labels on TOP100 cards and the 주소복사 button.
- **Divider** (`#f3f5f8`): The 8px band between the restaurant page's content and its tabs.
- **Border** (`#d7dbdf`): 1px outline of tag chips.
- Thumbnails and region tiles carry a 1px `rgba(0, 0, 0, 0.04)` edge; the map button sits on `rgba(0, 0, 0, 0.44)`.

### Brand assets, not tokens
- The logo (`/images/logo.svg`) was fetched but its colours were not read; no logo colour is claimed. The June record's orange `#ff5100` did not appear in any computed colour on the three routes, nor in the probed action.

## 3. Typography Rules

### Font Family
- **Live surface use**: `Pretendard` (489 observed uses, `loaded / high`), requested from jsDelivr as `orioncactus/pretendard@v1.3.9` (static WOFF2 and WOFF files). The body element computes `pretendard, "pretendard Fallback"` on all three routes, and headings, cards, list items, badges and the search input inherit it.
- **Buttons**: every `<button>` computes `Arial` (30 observed uses, collector status `system / high`) — the browser's default for form controls, because the site does not set a family on buttons. Arial has no Hangul, so the Korean labels of the action, region and category buttons render in the system's fallback face. This is recorded as observed; Arial is not a Tabling brand font.
- **Official distributed font assets**: Pretendard's LICENSE (Kil Hyung-jin) states the SIL Open Font License 1.1; opened on 2026-09-30.
- **Official product use**: no Tabling page opened this session names its typeface; not claimed.
- **Declared only**: `swiper-icons` (an embedded icon font of the carousel library), 0 observed uses.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Observed on |
|------|------|------|--------|-------------|-------------|
| Hero | Pretendard | 24px | 700 | 31.992px (1.33) | Home hero, `#000000` |
| Name | Pretendard | 22px | 700 | normal | Restaurant name, `#11181c` |
| Section | Pretendard | 20px | 700 | 26px (1.3) | Home section headings |
| Card Title | Pretendard | 18px | 700 | 22px (1.22) | TOP100 restaurant names |
| CTA | Arial (button default) | 18px | 700 | 24px (1.33) | 테이블링 앱에서 이용하기 |
| Search | Pretendard | 16px | 600 | 19.088px (1.19) | Home search input |
| Tab | Pretendard | 16px | 700 / 600 | normal | Restaurant tabs |
| Body | Pretendard | 14px | 400 | normal | Document default, `#2e3137` |
| Description | Pretendard | 14px | 600 | 21px (1.5), -0.1px | Restaurant introduction |
| Subtitle | Pretendard | 14px | 500 | 18px (1.29) | Home curation subtitles |
| Footer Link | Pretendard | 14px | 600 | 21px (1.5) | Footer links |
| Meta / Rating / Option | Pretendard | 13px | 400 / 700 / 500 | 18px (1.38) | TOP100 card lines |
| Badge | Pretendard | 12px | 700 | normal | Waiting count, `#1cfbce` |
| Rank | Pretendard | 12px | 900 | normal, -0.5px | Rank numerals |
| Tag | Pretendard | 12px | 500 | 16px (1.33) | Tag chips |
| Label | Pretendard | 11px | 600 | 14px (1.27) | Grey card labels |

### Principles
- **One family, weight-driven**: Pretendard carries every text role; hierarchy comes from 700 headings, 600 and 500 mid-weights and 400 reading text.
- **Numbers as data**: ratings at 700 in `#131517`, the waiting count at 700 in mint, rank numerals at 900.
- **Small and dense on cards**: TOP100 cards stack 18px names over 13px lines with 18px line height.

## 4. Component Stylings

### Buttons

**App call to action (primary)**
- Background: `linear-gradient(90deg, #fc3d0e, #fc5c17)`
- Text: `#fbfcfd`
- Radius: 10px
- Padding: 19px 0px 17px
- Height: 60px (520.3px wide)
- Font: 18px / 700 / 24px (button default family)
- States: the probe found no hover or pressed change; focus shows only the browser's default ring
- Use: 테이블링 앱에서 이용하기, fixed at the bottom of the restaurant page on a white 76px bar

**Region shortcut**
- Background: `#f0f4ff`
- Text: `#2e3137`
- Border: 1px solid `rgba(0, 0, 0, 0.04)`
- Radius: 24px
- Padding: 8px 16px
- Size: 80 × 80
- Use: 전국, 서울 남부, 서울 북부, 부산, 경남, 광주, 강원 and 대구 on home

**Cuisine shortcut**
- Background: transparent
- Text: `#2e3137`
- Size: 142 × 72, icon over label with a 6px gap
- Use: 한식, 일식, 양식, 중식, 카페/베이커리, 해산물, 주점 and 기타 under the hero search

**Chart outline button**
- Background: `#ffffff`
- Text: `#0d74f6`
- Border: 1px solid `#0d74f6`
- Radius: 8px
- Height: 44px (200px wide)
- Font: 14px / 700
- States: no hover or pressed change; browser default focus ring
- Use: 앱에서 대기시간 확인하기 on the waiting-time chart

**Copy address**
- Background: `#f1f3f5`
- Text: `#525965`
- Radius: 16px
- Padding: 10px 12px
- Height: 34px
- Font: 11px / 600 / 14px
- States: no hover or pressed change; browser default focus ring
- Use: 주소복사 beside the address

**Map view**
- Background: `rgba(0, 0, 0, 0.44)`
- Text: `#ffffff`
- Radius: 4px
- Padding: 6px 8px
- Height: 28px
- Use: over the map on the restaurant page

### Tabs & Selectors

**Restaurant tabs**
- Text: `#b7bec8`, 16px / 600
- Padding: 12px 0px
- Height: 46px (200px wide)
- Selected: `#11181c` at weight 700 with a 2px top border
- States: no hover or pressed change on 리뷰 10,364
- Use: the selected first tab (panel classes `Home_*`) and 리뷰 on a sticky white header over an 8px `#f3f5f8` divider

**Waiting-chart time slot**
- Text: `#6d7583`, 12px / 500 / 16px
- Padding: 3px 12px
- Selected: `#ffffff` fill, `#525965` at weight 700, 12px radius, soft two-layer shadow
- Use: time selector of the waiting-time chart (75 × 22 cells)

### Inputs

**Store search**
- Text: `#000000`, 16px / 600 / 19.088px Pretendard
- Use: search input under the home hero, 524px wide, with a 24 × 24 search button

### Badges & Labels

**Waiting overlay**
- Background: `rgba(0, 0, 0, 0.8)`
- Text: `#ffffff`; team count `#1cfbce` at 12px / 700
- Radius: 0px 0px 8px 8px
- Size: 88 × 28
- Use: across the foot of TOP100 thumbnails

**Card label**
- Background: `#f1f3f5`
- Text: `#505c81`
- Radius: 4px
- Padding: 4px 6px
- Height: 22px
- Font: 11px / 600 / 14px

**Tag chip**
- Text: `#525965`
- Border: 1px solid `#d7dbdf`
- Radius: 16px
- Padding: 8px 12px
- Height: 34px
- Font: 12px / 500 / 16px

### Cards

**TOP100 card**
- Background: `#ffffff`
- Padding: 16px
- Size: 600 × 150
- Thumbnail: 90 × 102, 8px radius, 1px `rgba(0, 0, 0, 0.04)` edge, with a 12px / 900 white rank numeral and the waiting overlay on it

---

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out pages of www.tabling.co.kr plus a fixed keyboard-probe state read and first-party context)
**Tier 1 sources:** https://www.tabling.co.kr/ ; https://www.tabling.co.kr/top100 ; https://www.tabling.co.kr/restaurant/fz22jjovyhauux30a95qh8 ; https://b2b.tabling.co.kr/ ; https://ad.tabling.co.kr/ ; https://www.tabling.co.kr/notice
**Tier 2 sources:** getdesign.md/tabling (HTTP 200, the name does not appear in the response) and styles.refero.design/?q=tabling (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Cards: 16px padding
- Region tiles: 8px 16px; tag chips: 8px 12px; card labels: 4px 6px
- Action: 19px top, 17px bottom padding inside a bar with 8px 14px padding
- Frequent spacing values in the capture: 4, 2, 16, 8, 6, 3 and 12px

### Grid & Container
- All three routes lay out a single column about 600px wide, centred on the 1440px viewport: TOP100 cards, the restaurant page's article, its tabs and the fixed action bar all measure 600px.
- Home stacks the hero heading and search, two rows of four cuisine shortcuts (142 × 72), the region row, a brand strip and curation carousels of 144px restaurant cards.
- TOP100 is a vertical list of 150px cards; the restaurant page runs photo, name, waiting panel, waiting-time chart, tabs and map, with the action fixed at the bottom.

### Whitespace Philosophy
- **App-shaped**: the web product keeps the app's single column even on desktop.
- **Flat segmentation**: sections are separated by white space, an 8px `#f3f5f8` band and 1px edges, not by elevation.

### Border Radius Scale
- 0px: the default (468 of the recorded radii)
- 4px: card labels, map button
- 8px: thumbnails, chart button, waiting overlay foot
- 10px: the app action
- 12px: selected time slot
- 16px: tag chips, copy button
- 24px: region tiles

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | 518 of 519 captured elements |
| Edge | 1px `rgba(0, 0, 0, 0.04)` or `#d7dbdf` | Thumbnails, region tiles, tag chips |
| Band | `#f3f5f8` 8px divider | Restaurant page above the tabs |
| Overlay | `rgba(0, 0, 0, 0.8)` / `rgba(0, 0, 0, 0.44)` | Waiting strip, map button |
| Soft lift | `rgba(109, 117, 131, 0.04) 0px 4px 12px 0px, rgba(109, 117, 131, 0.04) 0px -4px 24px 0px` | The selected time slot only |

**Shadow Philosophy**: the page is flat; emphasis comes from the orange gradient, the mint count and weight. The one shadow is a barely visible lift that marks the selected time slot.

## 7. Do's and Don'ts

### Do
- Give the one primary action the `#fc3d0e` → `#fc5c17` gradient with a `#fbfcfd` label, 10px radius and 60px height
- Keep mint `#1cfbce` for the live waiting count, on a dark strip
- Set reading text in `#2e3137` and restaurant names in `#11181c`
- Use the grey data ladder (`#131517`, `#505c81`, `#6d7583`, `#969fac`) for card details
- Keep one Pretendard family, and set it on buttons explicitly when rebuilding
- Keep layouts to a single column about 600px wide

### Don't
- Don't add a second filled action colour; the captured product has one
- Don't use the mint for anything but the waiting count
- Don't add shadows beyond the selected-slot lift
- Don't substitute another face for Pretendard in text roles
- Don't invent hover or focus styles; the probed controls show none of their own

## 8. Responsive Behavior

### Breakpoints
Only the 1440 × 900 desktop viewport was captured, and it already shows the app-width column; no breakpoint was measured.

### Touch Targets
- App action: 60px
- Region tiles: 80 × 80
- Cuisine shortcuts: 142 × 72
- Restaurant tabs: 46px
- Chart button: 44px
- Copy address and tag chips: 34px
- Map button: 28px

### Collapsing Strategy
- Not captured; nothing is claimed about narrower viewports.

### Image Behavior
- Thumbnails sit in 8px frames with a faint edge; photos carry overlays (rank numeral, waiting strip) rather than captions.

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action: gradient `#fc3d0e` → `#fc5c17`, label `#fbfcfd`
- Live waiting count: `#1cfbce` on `rgba(0, 0, 0, 0.8)`
- Info outline: `#0d74f6`; region tint `#f0f4ff`
- Text: `#2e3137`, `#000000` hero, `#11181c` names; data greys `#131517`, `#505c81`, `#6d7583`, `#969fac`; inactive `#b7bec8`
- Surfaces: `#ffffff`, `#f1f3f5`, `#f3f5f8`; border `#d7dbdf`

### Example Component Prompts
- "Create a fixed bottom action bar: white, 600 × 76, 8px 14px padding, holding a 60px button with `linear-gradient(90deg, #fc3d0e, #fc5c17)`, 10px radius, `#fbfcfd` 18px / 700 label '테이블링 앱에서 이용하기', no hover change."
- "Build a TOP100 card: white, 16px padding, 600 × 150; a 90 × 102 thumbnail with 8px radius and a `rgba(0, 0, 0, 0.8)` strip across its foot showing the waiting count in `#1cfbce` 12px / 700; beside it an 18px / 700 Pretendard name in `#2e3137`, a 13px / 700 rating in `#131517`, a `#969fac` review count and a 13px `#6d7583` cuisine line."
- "Make region tiles: 80 × 80, `#f0f4ff`, 24px radius, 8px 16px padding, 1px `rgba(0, 0, 0, 0.04)` edge, `#2e3137` 14px label."

### Iteration Guide
1. One orange-gradient action per screen; everything else grey on white
2. Mint only for the live count
3. Pretendard everywhere, weight for hierarchy
4. 600px single column
5. Flat, with 1px faint edges; one soft shadow for a selected slot
6. Radii: 24 tiles, 16 chips, 10 action, 8 thumbnails, 4 labels

---

## 10. Voice & Tone

Tabling's voice is **friendly, practical and app-first**. The consumer page opens with the everyday question and answers it with the brand; section titles are plain; every prompt points to the app. The owner-facing sites speak to restaurant owners in confident, benefit-led Korean, and notices open with a polite "안녕하세요, 테이블링입니다."

| Context | Tone |
|---|---|
| Hero | Question-led and casual. "오늘 뭐 먹지? 맛집 검색은 테이블링" |
| Section headings | Plain and descriptive. "지역별 인기 웨이팅 맛집", "전국 인기 브랜드관" |
| Calls to action | Direct, pointing to the app. "테이블링 앱에서 이용하기", "앱에서 대기시간 확인하기" |
| Owner site | Reassuring and benefit-led. "매장 운영의 모든 고민, 테이블링 하나면 충분합니다" |
| Notices | Polite and procedural. "안녕하세요, 테이블링입니다." |

**Voice samples (verbatim, opened 2026-09-30):**
- "테이블링 | 맛집 도착 전 앱으로 미리 줄서기" — www.tabling.co.kr page title.
- "오늘 뭐 먹지? 맛집 검색은 테이블링" — home hero heading.
- "테이블링 앱으로 더 자세한 정보 확인하기" — the QR prompt on home.
- "전국 테이블링 순위 TOP 100" — /top100 page title.
- "테이블링 앱에서 이용하기" — the restaurant page's fixed action.
- "검증된 외식 매장 솔루션, 테이블링" — 테이블링 Biz.

**Forbidden register**: fear-based urgency, stacked exclamation marks, discount noise and jargon a hungry diner would not use.

## 11. Brand Narrative

Tabling began from one everyday problem — standing in line outside a popular restaurant — and its consumer page still says so in its title: line up from the app before you arrive. The web product is organised around choosing first: search, eight cuisine shortcuts, eight regions, popular brands, curated lists and a nationwide TOP100 ranked by the queue itself, with a live team count on every entry. Each restaurant page then hands off to the app with one orange action.

Behind the consumer product, Tabling has grown into software for restaurants. 테이블링 Biz lists waitlist, reservations, 빈자리선점 and table ordering and cites 4,000+ partner restaurants, 5.7 million+ members and 75 million+ uses as of November 2025. The advertising site sells placements in the app, in waitlist notifications and on the owner dashboard, and names its core audience as women with strong purchasing power and trend-setting users in their 20s and 30s. Recent notices trace the product's direction: the rename of 지금자리선점 to 빈자리선점 (November 2025), a review-moderation update to the terms (October 2025) and the 2026 Naver Smartplace linkage.

The design follows the job. The page stays white, grey and flat, so the two signals that matter can be seen at once: the mint live count, which makes an unseen wait visible, and the orange action that gets you into the queue.

## 12. Principles

1. **Choose first, then queue.** *UI implication:* lead with search, cuisines and regions; put the queue action on the restaurant page.
2. **Make the wait visible.** *UI implication:* the live team count is the one mint element, on a dark strip over the photo.
3. **One action, one colour.** *UI implication:* the orange gradient appears on a single fixed action; secondary prompts are outlines or grey.
4. **App-shaped web.** *UI implication:* a 600px column and app-like tabs even on desktop.
5. **Flat and fast to scan.** *UI implication:* no shadows except a faint lift on a selected slot; greys for data. (Principles are editorial readings of the captured product and first-party pages, not Tabling statements.)

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Tabling user segments (Korean diners avoiding on-site queues, groups deciding where to eat, restaurant owners), not individual people.*

**김민준, 28, 서울.** Meets friends on weekends and hates arriving to a 40-minute line. Checks the live team count on the way and joins the queue in the app before he gets there.

**이서연, 33, 경기.** Plans family dinners and filters by region and cuisine before deciding. Reads the TOP100 ranking, ratings and review counts to avoid a bad pick.

**박도윤, 41, 부산.** Runs a busy barbecue restaurant and uses Tabling's waitlist and table ordering so customers can wait elsewhere instead of crowding the door.

## 14. States

Only these states were observed on the three captured routes; nothing else is specified here.

| State | Observation |
|---|---|
| **No hover / pressed change** | 테이블링 앱에서 이용하기, 앱에서 대기시간 확인하기, 주소복사 and the 리뷰 tab show no change on hover or press; all compute `transition: all 0s` (probe). |
| **Focus** | The three buttons draw only the browser's default ring (`outline: rgb(0, 95, 204) auto 1px`) on real Tab focus; no brand focus style. The restaurant tabs are not in the Tab order. |
| **Selected** | Restaurant tab `#11181c` at 700 with a 2px top border (unselected `#b7bec8` at 600); waiting-chart slot `#ffffff` with `#525965` 700 text, 12px radius and a soft shadow (unselected `#6d7583` at 500). |
| **Live data** | The waiting count renders in `#1cfbce` on 13 of the 20 captured TOP100 cards. |

The region and cuisine shortcuts, the map button and the search input were not probed; their states are unmeasured, not absent. Error, empty, loading and success states were not captured.

## 15. Motion & Easing

The four probed controls compute `transition: all 0s`, so any change they make is instant. Nothing else about motion (carousels, the waiting chart, page transitions) was measured; treat it as unspecified and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/tabling.json (capturedAt 2026-09-30T08:59:32Z), deterministic collector, 1440x900, logged out: www.tabling.co.kr, /top100, /restaurant/8731 (redirected to /restaurant/fz22jjovyhauux30a95qh8). States and the action's gradient: fixed keyboard probe raw docs/research/2026-09-29-growth/raw/tabling-states-restaurant.json (config tabling-cfg-restaurant.json).
- §1, §10, §11: www.tabling.co.kr (title, hero, footer), b2b.tabling.co.kr, ad.tabling.co.kr, www.tabling.co.kr/notice and info.tabling.co.kr/policy/service.html, opened 2026-09-30.
- Labels of the home shortcuts and headings come from the server-rendered HTML of www.tabling.co.kr fetched the same day.
- §3 licence: the Pretendard LICENSE on GitHub, opened 2026-09-30.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->
