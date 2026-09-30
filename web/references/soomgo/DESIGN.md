---
id: soomgo
name: Soomgo
display_name_kr: 숨고
country: KR
category: consumer-tech
homepage: "https://soomgo.com"
primary_color: "#693bf2"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=soomgo.com&sz=128"
verified: "2026-09-30"
added: "2026-06-09"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: product, url: "https://soomgo.com/", inspected: "2026-09-30" }
    - { id: surface-2, kind: product, url: "https://soomgo.com/search/pro/review_count", inspected: "2026-09-30" }
    - { id: surface-3, kind: marketing, url: "https://soomgo.com/pro", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://soomgo.com/", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://soomgo.com/search/pro/review_count", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://soomgo.com/pro", captured: "2026-09-30" }
    - { id: soomgo-probe-home, kind: product-surface, url: "https://soomgo.com/", captured: "2026-09-30" }
    - { id: soomgo-probe-home-region, kind: product-surface, url: "https://soomgo.com/", captured: "2026-09-30" }
    - { id: soomgo-probe-search, kind: product-surface, url: "https://soomgo.com/search/pro", captured: "2026-09-30" }
    - { id: soomgo-probe-pro, kind: product-surface, url: "https://soomgo.com/pro", captured: "2026-09-30" }
    - { id: soomgo-probe-search-input, kind: product-surface, url: "https://soomgo.com/search/pro", captured: "2026-09-30" }
    - { id: soomgo-team, kind: official-doc, url: "https://soomgo.team/", captured: "2026-09-30" }
    - { id: soomgo-rebrand, kind: official-doc, url: "https://soomgo.team/blog/posts/67c9270011c820757515755e", captured: "2026-09-30" }
    - { id: soomgo-culture, kind: official-doc, url: "https://soomgo.team/culture", captured: "2026-09-30" }
    - { id: soomgo-about, kind: official-doc, url: "https://soomgo.com/about", captured: "2026-09-30" }
    - { id: pretendard-license, kind: license, url: "https://raw.githubusercontent.com/orioncactus/pretendard/main/LICENSE", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &cta { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"6\"]", captured: "2026-09-30" }
    "tokens.colors.on-primary": *cta
    "tokens.colors.primary-hover": &bigctastate { surface_id: surface-3, source_id: soomgo-probe-pro, method: live-state-probe, selector: "button 고수 가입하기 (224 x 52, rest bg rgb(105, 59, 242), label 16px/600 rgb(255, 255, 255)): hover bg -> rgb(99, 2, 251); pressed bg -> rgb(84, 0, 215); focus (Tab #20) outline none -> rgb(0, 95, 204) auto 1px, the browser default ring", captured: "2026-09-30" }
    "tokens.colors.primary-pressed": *bigctastate
    "tokens.colors.ink": &body { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::body", captured: "2026-09-30" }
    "tokens.colors.heading": &h2 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.colors.slate": &caption { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.muted": &tablabel { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.white": &searchbody { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::body", captured: "2026-09-30" }
    "tokens.colors.surface": &ai { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"9\"]", captured: "2026-09-30" }
    "tokens.colors.surface-gray": &more { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"85\"]", captured: "2026-09-30" }
    "tokens.colors.hairline": &filter { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"8\"]", captured: "2026-09-30" }
    "tokens.colors.purple-tint": &pay { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::span", captured: "2026-09-30" }
    "tokens.typography.family.sans": *searchbody
    "tokens.typography.display-hero.size": &proh1 { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h1", captured: "2026-09-30" }
    "tokens.typography.display-hero.weight": *proh1
    "tokens.typography.display-hero.lineHeight": *proh1
    "tokens.typography.display-hero.use": *proh1
    "tokens.typography.section-xl.size": &proh2 { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h2", captured: "2026-09-30" }
    "tokens.typography.section-xl.weight": *proh2
    "tokens.typography.section-xl.lineHeight": *proh2
    "tokens.typography.section-xl.use": *proh2
    "tokens.typography.search-title.size": &searchh1 { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h1", captured: "2026-09-30" }
    "tokens.typography.search-title.weight": *searchh1
    "tokens.typography.search-title.tracking": *searchh1
    "tokens.typography.search-title.use": *searchh1
    "tokens.typography.section-lg.size": &proh3 { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h3", captured: "2026-09-30" }
    "tokens.typography.section-lg.weight": *proh3
    "tokens.typography.section-lg.lineHeight": *proh3
    "tokens.typography.section-lg.use": *proh3
    "tokens.typography.title-lg.size": &h2lg { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.typography.title-lg.weight": *h2lg
    "tokens.typography.title-lg.lineHeight": *h2lg
    "tokens.typography.title-lg.use": *h2lg
    "tokens.typography.title.size": *h2
    "tokens.typography.title.weight": *h2
    "tokens.typography.title.lineHeight": *h2
    "tokens.typography.title.use": *h2
    "tokens.typography.lead.size": &prop { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::p", captured: "2026-09-30" }
    "tokens.typography.lead.weight": *prop
    "tokens.typography.lead.lineHeight": *prop
    "tokens.typography.lead.use": *prop
    "tokens.typography.body-strong.size": &strong { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.body-strong.weight": *strong
    "tokens.typography.body-strong.lineHeight": *strong
    "tokens.typography.body-strong.use": *strong
    "tokens.typography.body.size": *body
    "tokens.typography.body.weight": *body
    "tokens.typography.body.lineHeight": *body
    "tokens.typography.body.use": *body
    "tokens.typography.label.size": &label { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.label.weight": *label
    "tokens.typography.label.lineHeight": *label
    "tokens.typography.label.use": *label
    "tokens.typography.caption.size": *caption
    "tokens.typography.caption.weight": *caption
    "tokens.typography.caption.lineHeight": *caption
    "tokens.typography.caption.use": *caption
    "tokens.typography.button-sm.size": *cta
    "tokens.typography.button-sm.weight": *cta
    "tokens.typography.button-sm.lineHeight": *cta
    "tokens.typography.button-sm.use": *cta
    "tokens.typography.badge.size": &probadge { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::span", captured: "2026-09-30" }
    "tokens.typography.badge.weight": *probadge
    "tokens.typography.badge.lineHeight": *probadge
    "tokens.typography.badge.use": *probadge
    "tokens.typography.fine.size": &fine { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::p", captured: "2026-09-30" }
    "tokens.typography.fine.weight": *fine
    "tokens.typography.fine.lineHeight": *fine
    "tokens.typography.fine.use": *fine
    "tokens.spacing.chip-y": &chip { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"28\"]", captured: "2026-09-30" }
    "tokens.spacing.chip-x": *chip
    "tokens.spacing.cta-y": *cta
    "tokens.spacing.cta-x": *cta
    "tokens.spacing.card-y": &adcard { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"15\"]", captured: "2026-09-30" }
    "tokens.spacing.card-x": *adcard
    "tokens.spacing.button-x": &bigcta { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"152\"]", captured: "2026-09-30" }
    "tokens.rounded.xs": *probadge
    "tokens.rounded.cta": *cta
    "tokens.rounded.ghost": &ghost { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"12\"]", captured: "2026-09-30" }
    "tokens.rounded.button": *bigcta
    "tokens.rounded.ai": *ai
    "tokens.rounded.chip": *chip
    "tokens.rounded.card": *adcard
    "tokens.rounded.app": &app { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"156\"]", captured: "2026-09-30" }
    "tokens.rounded.saved": &bucket { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"41\"]", captured: "2026-09-30" }
    "tokens.rounded.filter": *filter
    "tokens.rounded.region": &region { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"136\"]", captured: "2026-09-30" }
    "tokens.components.header-signup-button.type": *cta
    "tokens.components.header-signup-button.bg": *cta
    "tokens.components.header-signup-button.fg": *cta
    "tokens.components.header-signup-button.border": *cta
    "tokens.components.header-signup-button.radius": *cta
    "tokens.components.header-signup-button.padding": *cta
    "tokens.components.header-signup-button.height": *cta
    "tokens.components.header-signup-button.font": *cta
    "tokens.components.header-signup-button.hover": &ctastate { surface_id: home, source_id: soomgo-probe-home, method: live-state-probe, selector: "a 고수가입 in the home header (78.4 x 36): hover and pressed bg rgb(105, 59, 242) -> rgb(84, 0, 215) after a 0.15s colour transition; focus (Tab #7) outline none -> rgb(0, 95, 204) auto 1px, the browser default ring", captured: "2026-09-30" }
    "tokens.components.header-signup-button.pressed": *ctastate
    "tokens.components.header-signup-button.states": *ctastate
    "tokens.components.header-signup-button.use": *cta
    "tokens.components.search-header-signup-button.type": &legacy { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"6\"]", captured: "2026-09-30" }
    "tokens.components.search-header-signup-button.bg": *legacy
    "tokens.components.search-header-signup-button.fg": *legacy
    "tokens.components.search-header-signup-button.border": *legacy
    "tokens.components.search-header-signup-button.radius": *legacy
    "tokens.components.search-header-signup-button.padding": *legacy
    "tokens.components.search-header-signup-button.height": *legacy
    "tokens.components.search-header-signup-button.font": *legacy
    "tokens.components.search-header-signup-button.hover": &legacystate { surface_id: surface-2, source_id: soomgo-probe-search, method: live-state-probe, selector: "button 고수가입 in the /search/pro header (80 x 36): hover bg rgb(105, 59, 242) -> rgb(78, 23, 240), border -> rgb(71, 16, 234); pressed and focus (Tab #7) bg and border -> rgb(84, 0, 215); the bundle frames ::state-hover and ::state-pressed agree", captured: "2026-09-30" }
    "tokens.components.search-header-signup-button.pressed": *legacystate
    "tokens.components.search-header-signup-button.focus": *legacystate
    "tokens.components.search-header-signup-button.states": *legacystate
    "tokens.components.search-header-signup-button.use": *legacy
    "tokens.components.primary-cta.type": *bigcta
    "tokens.components.primary-cta.bg": *bigcta
    "tokens.components.primary-cta.fg": *bigctastate
    "tokens.components.primary-cta.radius": *bigcta
    "tokens.components.primary-cta.padding": *bigcta
    "tokens.components.primary-cta.height": *bigcta
    "tokens.components.primary-cta.font": *bigctastate
    "tokens.components.primary-cta.hover": *bigctastate
    "tokens.components.primary-cta.pressed": *bigctastate
    "tokens.components.primary-cta.states": *bigctastate
    "tokens.components.primary-cta.use": *bigcta
    "tokens.components.text-cta.type": *ghost
    "tokens.components.text-cta.bg": *ghost
    "tokens.components.text-cta.fg": *ghost
    "tokens.components.text-cta.radius": *ghost
    "tokens.components.text-cta.padding": *ghost
    "tokens.components.text-cta.height": *ghost
    "tokens.components.text-cta.font": &ghoststate { surface_id: surface-3, source_id: soomgo-probe-pro, method: live-state-probe, selector: "button 지금 가입하고 혜택 받기 (175 x 38, label 14px/600 rgb(105, 59, 242)): hover bg transparent -> rgb(246, 247, 249); pressed -> rgb(239, 241, 245); focus (Tab #24) browser default ring", captured: "2026-09-30" }
    "tokens.components.text-cta.hover": *ghoststate
    "tokens.components.text-cta.pressed": *ghoststate
    "tokens.components.text-cta.states": *ghoststate
    "tokens.components.text-cta.use": *ghost
    "tokens.components.app-download-button.type": *app
    "tokens.components.app-download-button.bg": *app
    "tokens.components.app-download-button.fg": *app
    "tokens.components.app-download-button.radius": *app
    "tokens.components.app-download-button.padding": *app
    "tokens.components.app-download-button.height": *app
    "tokens.components.app-download-button.font": *app
    "tokens.components.app-download-button.states": { surface_id: surface-2, source_id: soomgo-probe-search, method: live-state-probe, selector: "button APP STORE (136 x 36): hover and pressed UNMEASURED because :hover did not match under the pointer; focus (Tab #303) browser default ring", captured: "2026-09-30" }
    "tokens.components.app-download-button.use": *app
    "tokens.components.ai-quote-button.type": *ai
    "tokens.components.ai-quote-button.bg": *ai
    "tokens.components.ai-quote-button.fg": &aistate { surface_id: home, source_id: soomgo-probe-home, method: live-state-probe, selector: "button AI 견적 요청 (108.4 x 46, rest bg rgb(246, 247, 249), label span 14px/600 rgb(28, 36, 47)): hover and pressed change only animated SVG transforms inside it and the rotating conic-gradient of its wrapper div.css-u9u5qg, which starts at rgb(105, 59, 242); focus (Tab #21) browser default ring", captured: "2026-09-30" }
    "tokens.components.ai-quote-button.radius": *ai
    "tokens.components.ai-quote-button.padding": *ai
    "tokens.components.ai-quote-button.height": *ai
    "tokens.components.ai-quote-button.font": *aistate
    "tokens.components.ai-quote-button.states": *aistate
    "tokens.components.ai-quote-button.use": *ai
    "tokens.components.category-chip.type": *chip
    "tokens.components.category-chip.bg": *chip
    "tokens.components.category-chip.fg": &chipstate { surface_id: home, source_id: soomgo-probe-home, method: live-state-probe, selector: "buttons 이사/입주 청소업체 (selected, 129 x 32, bg rgb(41, 51, 65), label span rgb(255, 255, 255) 14px/400) and 헤어/메이크업 (101.3 x 32, inset ring rgb(224, 229, 235), label span rgb(28, 36, 47) 14px/400): hover and pressed NO CHANGE across self, 1 descendant and 3 ancestor levels; focus (Tabs #38 and #39) browser default ring", captured: "2026-09-30" }
    "tokens.components.category-chip.border": *chip
    "tokens.components.category-chip.radius": *chip
    "tokens.components.category-chip.padding": *chip
    "tokens.components.category-chip.height": *chip
    "tokens.components.category-chip.font": *chipstate
    "tokens.components.category-chip.selected": { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"27\"]", captured: "2026-09-30" }
    "tokens.components.category-chip.states": *chipstate
    "tokens.components.category-chip.use": *chip
    "tokens.components.region-chip.type": *region
    "tokens.components.region-chip.bg": *region
    "tokens.components.region-chip.fg": &regionstate { surface_id: home, source_id: soomgo-probe-home-region, method: live-state-probe, selector: "a 서울 (58 x 36, bg rgb(246, 247, 249), radius 36px): label span rgb(105, 59, 242) 14px/400; hover and pressed NO CHANGE across self, 1 descendant and 3 ancestor levels; focus not measured (--no-focus)", captured: "2026-09-30" }
    "tokens.components.region-chip.radius": *region
    "tokens.components.region-chip.height": *region
    "tokens.components.region-chip.font": *regionstate
    "tokens.components.region-chip.states": *regionstate
    "tokens.components.region-chip.use": *region
    "tokens.components.load-more-button.type": *more
    "tokens.components.load-more-button.bg": *more
    "tokens.components.load-more-button.fg": *more
    "tokens.components.load-more-button.radius": *more
    "tokens.components.load-more-button.padding": *more
    "tokens.components.load-more-button.height": *more
    "tokens.components.load-more-button.font": &morestate { surface_id: home, source_id: soomgo-probe-home, method: live-state-probe, selector: "button 이 고수의 작업 사례 더보기 (300 x 44, label span 14px/600 rgb(28, 36, 47)): hover bg rgb(239, 241, 245) -> rgb(224, 229, 235); pressed -> rgb(199, 206, 214); focus (Tab #97) browser default ring", captured: "2026-09-30" }
    "tokens.components.load-more-button.hover": *morestate
    "tokens.components.load-more-button.pressed": *morestate
    "tokens.components.load-more-button.states": *morestate
    "tokens.components.load-more-button.use": *more
    "tokens.components.hero-tab.type": &tab { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-09-30" }
    "tokens.components.hero-tab.fg": *tablabel
    "tokens.components.hero-tab.height": *tab
    "tokens.components.hero-tab.padding": *tab
    "tokens.components.hero-tab.font": *tablabel
    "tokens.components.hero-tab.selected": *tab
    "tokens.components.hero-tab.states": *tab
    "tokens.components.hero-tab.use": *tab
    "tokens.components.search-input.type": &input { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"12\"]", captured: "2026-09-30" }
    "tokens.components.search-input.bg": *input
    "tokens.components.search-input.fg": *input
    "tokens.components.search-input.radius": *input
    "tokens.components.search-input.padding": *input
    "tokens.components.search-input.height": *input
    "tokens.components.search-input.font": *input
    "tokens.components.search-input.states": { surface_id: surface-2, source_id: soomgo-probe-search-input, method: live-state-probe, selector: "input 어떤 서비스가 필요하세요? (497 x 44, rest bg rgb(239, 241, 245), transition border-color, box-shadow 0.15s ease-in-out): hover, pressed and focus (Tab #13) NO CHANGE across self, 0 descendants and 3 ancestor levels", captured: "2026-09-30" }
    "tokens.components.search-input.use": *input
    "tokens.components.filter-button.type": *filter
    "tokens.components.filter-button.bg": *filter
    "tokens.components.filter-button.fg": *filter
    "tokens.components.filter-button.border": *filter
    "tokens.components.filter-button.radius": *filter
    "tokens.components.filter-button.padding": *filter
    "tokens.components.filter-button.height": *filter
    "tokens.components.filter-button.font": *filter
    "tokens.components.filter-button.states": { surface_id: surface-2, source_id: soomgo-probe-search, method: live-state-probe, selector: "button 서비스 (99.5 x 40, label span rgb(106, 118, 133) 16px/400): hover, pressed and focus (Tab #9) NO CHANGE across self, 7 descendants and 3 ancestor levels", captured: "2026-09-30" }
    "tokens.components.filter-button.use": *filter
    "tokens.components.saved-pros-button.type": *bucket
    "tokens.components.saved-pros-button.bg": *bucket
    "tokens.components.saved-pros-button.fg": &bucketstate { surface_id: surface-2, source_id: soomgo-probe-search, method: live-state-probe, selector: "button 찜한 고수 (119.2 x 45, label span rgb(255, 255, 255) 16px/500): hover border rgb(224, 229, 235) -> rgb(193, 203, 215); pressed bg rgb(41, 51, 65) -> rgb(193, 203, 215), fg -> rgb(41, 51, 65), border -> rgb(185, 197, 210); focus (Tab #302) border -> rgb(193, 203, 215)", captured: "2026-09-30" }
    "tokens.components.saved-pros-button.border": *bucket
    "tokens.components.saved-pros-button.radius": *bucket
    "tokens.components.saved-pros-button.padding": *bucket
    "tokens.components.saved-pros-button.height": *bucket
    "tokens.components.saved-pros-button.font": *bucket
    "tokens.components.saved-pros-button.hover": *bucketstate
    "tokens.components.saved-pros-button.pressed": *bucketstate
    "tokens.components.saved-pros-button.focus": *bucketstate
    "tokens.components.saved-pros-button.states": *bucketstate
    "tokens.components.saved-pros-button.use": *bucket
    "tokens.components.ad-pro-card.type": *adcard
    "tokens.components.ad-pro-card.bg": *adcard
    "tokens.components.ad-pro-card.radius": *adcard
    "tokens.components.ad-pro-card.padding": *adcard
    "tokens.components.ad-pro-card.shadow": *adcard
    "tokens.components.ad-pro-card.size": *adcard
    "tokens.components.ad-pro-card.use": *adcard
    "tokens.components.pro-card.type": &procard { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"56\"]", captured: "2026-09-30" }
    "tokens.components.pro-card.border": *procard
    "tokens.components.pro-card.radius": *procard
    "tokens.components.pro-card.size": *procard
    "tokens.components.pro-card.use": *procard
    "tokens.components.pro-badge.type": *probadge
    "tokens.components.pro-badge.bg": *probadge
    "tokens.components.pro-badge.fg": *probadge
    "tokens.components.pro-badge.radius": *probadge
    "tokens.components.pro-badge.padding": *probadge
    "tokens.components.pro-badge.font": *probadge
    "tokens.components.pro-badge.use": *probadge
    "tokens.components.pay-chip.type": *pay
    "tokens.components.pay-chip.bg": *pay
    "tokens.components.pay-chip.radius": *pay
    "tokens.components.pay-chip.padding": *pay
    "tokens.components.pay-chip.use": *pay
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#693bf2"
    on-primary: "#ffffff"
    primary-hover: "#6302fb"
    primary-pressed: "#5400d7"
    ink: "#293341"
    heading: "#1c242f"
    slate: "#6a7685"
    muted: "#aab4bf"
    white: "#ffffff"
    surface: "#f6f7f9"
    surface-gray: "#eff1f5"
    hairline: "#e0e5eb"
    purple-tint: "#f1eeff"
  typography:
    family: { sans: "Pretendard" }
    display-hero: { size: 52, weight: 700, lineHeight: 1.38, use: "Hero headline on /pro, 72px line, in #ffffff" }
    section-xl: { size: 36, weight: 700, lineHeight: 1.28, use: "Section headings on /pro (four instances), 46px line, in #1c242f" }
    search-title: { size: 34, weight: 500, tracking: -0.5, use: "Page title on /search/pro (Vite template), line-height normal, in #293341" }
    section-lg: { size: 28, weight: 700, lineHeight: 1.36, use: "Feature headings on /pro, 38px line, in #1c242f" }
    title-lg: { size: 24, weight: 700, lineHeight: 1.33, use: "The large closing heading on home (#293341) and card headings on /pro (#ffffff), 32px line" }
    title: { size: 20, weight: 700, lineHeight: 1.4, use: "Section headings on home (h2 and h4), 28px line, in #1c242f" }
    lead: { size: 18, weight: 400, lineHeight: 1.44, use: "Descriptions on /pro, 26px line, in #6a7685" }
    body-strong: { size: 16, weight: 600, lineHeight: 1.5, use: "List titles and hero tab labels on home, 24px line, in #1c242f or #293341" }
    body: { size: 16, weight: 400, lineHeight: 1.5, use: "Document default on all three pages, 24px line, in #293341" }
    label: { size: 14, weight: 600, lineHeight: 1.57, use: "Short labels on home (prices, counts, card titles), 22px line, in #1c242f" }
    caption: { size: 14, weight: 400, lineHeight: 1.57, use: "Meta and secondary text on home, 22px line, in #6a7685" }
    button-sm: { size: 14, weight: 500, lineHeight: 1.43, use: "Header 고수가입 label on home, 20px line" }
    badge: { size: 12, weight: 500, lineHeight: 1.5, use: "Pro badge on /search/pro, 18px line, in #103580" }
    fine: { size: 12, weight: 400, lineHeight: 1.5, use: "List meta on /search/pro, 18px line, in #6a7685" }
  spacing: { chip-y: 8, chip-x: 12, cta-y: 7, cta-x: 14, card-y: 20, card-x: 24, button-x: 16 }
  rounded: { xs: 4, cta: 6, ghost: 10, button: 12, ai: 15, chip: 16, card: 16, app: 20.5, saved: 22, filter: 28, region: 36 }
  components:
    header-signup-button: { type: button, bg: "#693bf2", fg: "#ffffff", border: "1px solid #693bf2", radius: "6px", padding: "7px 14px", height: "36px", font: "14px / 500 / 20px Pretendard (served as the anonymised family font)", hover: "bg #5400d7", pressed: "bg #5400d7", states: "hover and pressed settle on #5400d7 after a 0.15s colour, border and background transition; focus (Tab #7) draws only the browser default ring", use: "고수가입 in the home header at home::[data-omd-capture=\"6\"], 78 x 36" }
    search-header-signup-button: { type: button, bg: "#693bf2", fg: "#ffffff", border: "1px solid #693bf2", radius: "6px", padding: "6.5px 0px", height: "36px", font: "14px / 500 / 21px Pretendard", hover: "bg #4e17f0, border #4710ea", pressed: "bg #5400d7, border #5400d7", focus: "bg #5400d7, border #5400d7", states: "the older /search/pro template: hover, pressed and focus read by the probe on a real Tab; the button transitions opacity 0.2s", use: "고수가입 in the /search/pro header at surface-2::[data-omd-capture=\"6\"], a fixed 80 x 36 button" }
    primary-cta: { type: button, bg: "#693bf2", fg: "#ffffff", radius: "12px", padding: "0px 16px", height: "52px", font: "16px / 600 label (Pretendard, served as font)", hover: "bg #6302fb", pressed: "bg #5400d7", states: "hover and pressed settle after a 0.2s background-color transition; focus draws only the browser default ring", use: "Large purple actions: 고수가입 near the foot of home (155 x 52, home::[data-omd-capture=\"152\"]) and 고수 가입하기 in the /pro hero (224 x 52); 필요한 정보 보러 가기 on /pro repeats it at 143 x 44 with 0px 12px padding and a 14px / 600 label" }
    text-cta: { type: button, bg: "transparent", fg: "#693bf2", radius: "10px", padding: "0px 12px", height: "38px", font: "14px / 600 label", hover: "bg #f6f7f9", pressed: "bg #eff1f5", states: "hover and pressed settle after a 0.2s background-color transition; focus (Tab #24) draws only the browser default ring", use: "지금 가입하고 혜택 받기 on /pro at surface-3::[data-omd-capture=\"12\"], 175 x 38" }
    app-download-button: { type: button, bg: "#693bf2", fg: "#ffffff", radius: "20.5px", padding: "0px 16px", height: "36px", font: "12px / 500 / 36px", states: "hover and pressed unmeasured (the pointer did not match :hover); focus draws only the browser default ring", use: "APP STORE and PLAY STORE in the footer of all three pages at home::[data-omd-capture=\"156\"], 136 x 36 (padding 1px 16px on /search/pro)" }
    ai-quote-button: { type: button, bg: "#f6f7f9", fg: "#1c242f", radius: "15px", padding: "12px", height: "46px", font: "14px / 600 label", states: "the button's own fill never changes; its icon animates and a wrapper paints a rotating conic-gradient that starts at #693bf2, so no settled hover or pressed value is declared; focus (Tab #21) draws only the browser default ring", use: "AI 견적 요청 beside the home search field at home::[data-omd-capture=\"9\"], 108 x 46" }
    category-chip: { type: button, bg: "transparent", fg: "#1c242f", border: "1px inset ring #e0e5eb (box-shadow 0 0 0 1px inset)", radius: "16px", padding: "8px 12px", height: "32px", font: "14px / 400 / 16px label", selected: "bg #293341, label #ffffff, no ring", states: "hover and pressed show no change on either variant; focus draws only the browser default ring", use: "Service category chips on home (헤어/메이크업, 영어 과외 …) at home::[data-omd-capture=\"28\"]; the selected chip (이사/입주 청소업체, 과외) at home::[data-omd-capture=\"27\"]" }
    region-chip: { type: button, bg: "#f6f7f9", fg: "#693bf2", radius: "36px", height: "36px", font: "14px / 400 label", states: "hover and pressed show no change within the probe's scope; focus not measured", use: "Region links (서울, 경기, 부산 … 16 regions) on home at home::[data-omd-capture=\"136\"], 58 x 36 with a 36px line box" }
    load-more-button: { type: button, bg: "#eff1f5", fg: "#1c242f", radius: "12px", padding: "0px 12px", height: "44px", font: "14px / 600 label", hover: "bg #e0e5eb", pressed: "bg #c7ced6", states: "hover and pressed settle after a 0.2s background-color transition; focus (Tab #97) draws only the browser default ring", use: "이 고수의 작업 사례 더보기 under a pro's portfolio on home at home::[data-omd-capture=\"85\"], 300 x 44" }
    hero-tab: { type: tab, fg: "#1c242f", height: "48px", padding: "8px 4px", font: "16px / 600 / 24px label", selected: "aria-selected tab label #1c242f; the unselected label is #aab4bf", states: "selected and unselected read from rest values; the collector's tab interaction recorded the selected state", use: "견적비교 and 바로예약 tabs under the home search at home::[data-omd-capture=\"10\"], 192 x 48" }
    search-input: { type: input, bg: "#eff1f5", fg: "#293341", radius: "4px 0px 0px 4px", padding: "10px 16px 10px 40px", height: "44px", font: "16px / 400 / 24px Pretendard", states: "hover, pressed and focus (Tab #13) show no change within the probe's scope (self and 3 ancestor levels), although the field declares a 0.15s border-color and box-shadow transition", use: "어떤 서비스가 필요하세요? search field on /search/pro at surface-2::[data-omd-capture=\"12\"], 497 x 44, joined to a #eff1f5 지도 button on its right" }
    filter-button: { type: button, bg: "transparent", fg: "#6a7685", border: "1px solid #e0e5eb", radius: "28px", padding: "7px 16px 9px", height: "40px", font: "16px / 400 / 24px Pretendard", states: "hover, pressed and focus (Tab #9) show no change within the probe's scope", use: "서비스 and 지역 filter buttons on /search/pro at surface-2::[data-omd-capture=\"8\"], 99 x 40" }
    saved-pros-button: { type: button, bg: "#293341", fg: "#ffffff", border: "1px solid #e0e5eb", radius: "22px", padding: "9px 16px 10px", height: "45px", font: "16px / 500 / 24px Pretendard", hover: "border #c1cbd7", pressed: "bg #c1cbd7, label #293341, border #b9c5d2", focus: "border #c1cbd7", states: "read by the probe on /search/pro, including a real Tab", use: "찜한 고수 on /search/pro at surface-2::[data-omd-capture=\"41\"], 119 x 45" }
    ad-pro-card: { type: card, bg: "#ffffff", radius: "16px", padding: "20px 24px", shadow: "rgba(41, 51, 65, 0.08) 0px 4px 12px 0px, rgba(41, 51, 65, 0.06) 0px 0px 2px 0px", size: "630px x 148px", use: "Sponsored pro cards at the top of the /search/pro list at surface-2::[data-omd-capture=\"15\"]" }
    pro-card: { type: card, border: "1px solid #eff1f5", radius: "16px", size: "354px x 208px", use: "Recommended-pro cards in a carousel on home (five captured), at home::[data-omd-capture=\"56\"]" }
    pro-badge: { type: badge, bg: "#e7f4ff", fg: "#103580", radius: "4px", padding: "2px 4px", font: "12px / 500 / 18px Pretendard", use: "Pro badges in the /search/pro list (18 instances), 69 x 22" }
    pay-chip: { type: badge, bg: "#f1eeff", radius: "4px", padding: "3px 5px", use: "숨고페이 chips in the /search/pro list (23 instances); the chip's label child was not recorded, so no label colour is declared" }
  components_harvested: true
---

# Design System Inspiration of Soomgo

## 1. Visual Theme & Atmosphere

Soomgo (숨고, from 숨은 고수, "hidden experts") is a Korean marketplace that connects customers with independent professionals — movers, cleaners, tutors, designers, lawyers, repair crews. It is run by Brave Mobile Inc. ((주)브레이브모바일), founded in December 2014 and based on Teheran-ro in Gangnam, Seoul; the Soomgo service launched in September 2015 and the company joined Y Combinator in April 2017. A customer describes the job in a request (요청서), pros reply with quotes, and the customer compares and chooses; the company counts one customer request every three seconds, 16 million+ customer sign-ups and 2.5 million+ pro sign-ups as of July 2026. In March 2025 Soomgo rebranded as a 종합 라이프스킬 플랫폼 (all-round life-skills platform) under the definition "더 나은 일상을 위한 생활의 기술" — the skills of living for a better everyday life — with a new Hangul logo and three values, Brave, Improve and Connect. The home page now greets visitors with the line of its new campaign, "집으로 사람 부를 땐, 숨고" (when you call someone to your home, Soomgo).

The logged-out web product reads as a quiet, dense marketplace. Text sits in a blue-grey ink (`#293341`, headings `#1c242f`) on white, secondary copy in slate `#6a7685`, and soft grey fills (`#f6f7f9`, `#eff1f5`) carry search fields, secondary actions and region links. One saturated violet, `#693bf2`, does the brand's action work: every 고수가입 (sign up as a pro) button, the large calls to action on home and /pro, and the app-download buttons in every footer, with its text actions and region labels in the same colour. Category chips are outlined by a 1px `#e0e5eb` inset ring and turn charcoal `#293341` with white text when selected. Almost nothing casts a shadow; only the sponsored pro cards on /search/pro lift off the page.

Two front-end generations sit side by side. Home and /pro are a newer Next.js build whose type is Pretendard served under an anonymised family name; /search/pro is an older Vite/Bootstrap page that names Pretendard directly and adds slight negative tracking to its title. Their header 고수가입 buttons share a colour but not their geometry or hover.

**Key Characteristics:**
- One violet, `#693bf2`, for primary actions; hover deepens it to `#6302fb` or `#5400d7`, and pressed is `#5400d7` on every probed control
- Blue-grey ink (`#293341` body, `#1c242f` headings) instead of black; slate `#6a7685` for meta
- Soft grey fills `#f6f7f9` and `#eff1f5`; a `#e0e5eb` hairline for chip rings and filter borders
- Pretendard throughout, weights 400 to 700; headings on home and /pro are 700, action labels 600
- Rounded everywhere: 6px header buttons, 12px large actions and load-more buttons, 16px chips and cards, 36px region pills
- Flat pages; one soft two-layer shadow on sponsored cards

## Primary tasks

- Request a quote by describing the job you need done
- Compare the pros who replied, their reviews and their prices
- Find a pro by service and region with 고수찾기
- Book a service directly with 바로예약
- Sign up as a pro to receive customer requests

## 2. Color Palette & Roles

Every token below was read on 2026-09-30 from soomgo.com, /search/pro and /pro by the deterministic collector, and hover and pressed values by the fixed keyboard probe. They describe Soomgo's logged-out web product; the apps were not captured and none of their values is claimed.

### Primary
- **Soomgo Violet** (`#693bf2`): The fill of 고수가입 in the header of home and /search/pro, of the large 고수가입 / 고수 가입하기 actions on home and /pro, of 필요한 정보 보러 가기 on /pro and of the APP STORE and PLAY STORE buttons in all three footers — 11 recorded fills across all three pages. The same violet colours the /pro text actions (지금 가입하고 혜택 받기, 필수 인증 서비스 확인하러 가기 →) and the labels of the region links on home. It is the primary because it is the product's action fill wherever an action is offered, and no other saturated fill appears on the captured pages.
- **On Primary** (`#ffffff`): Labels on every violet fill.
- **Violet Hover** (`#6302fb`): Hover fill of the large actions (고수 가입하기, 필요한 정보 보러 가기, the 52px 고수가입 on home), settled after a 0.2s transition.
- **Violet Pressed** (`#5400d7`): Pressed fill of every violet-filled control whose pressed state was measured, and also the hover fill of the home header 고수가입. The older /search/pro header button hovers to `#4e17f0` with a `#4710ea` border instead.
- **Violet Tint** (`#f1eeff`): The 숨고페이 chips in the /search/pro list.

### Text
- **Ink** (`#293341`): The document default text colour on all three pages, and the charcoal fill of a selected category chip and of 찜한 고수.
- **Heading** (`#1c242f`): Section headings on home and /pro, list titles, chip and button labels.
- **Slate** (`#6a7685`): Meta, descriptions and captions; the label colour of the /search/pro filter buttons.
- **Muted** (`#aab4bf`): The unselected hero tab label (바로예약) and short 14px captions on home.

### Neutral & Surface
- **White** (`#ffffff`): The /search/pro page background (home and /pro compute a transparent body over the browser canvas), the sponsored pro cards and the 쿠폰 chip.
- **Surface** (`#f6f7f9`): The AI 견적 요청 button and the region links on home; the hover fill of the violet text action on /pro.
- **Surface Gray** (`#eff1f5`): The search fields on home and /search/pro, 이 고수의 작업 사례 더보기, the 지도 button and the 1px border of the home pro cards.
- **Hairline** (`#e0e5eb`): The 1px inset ring of unselected category chips, the border of the /search/pro filter buttons and 찜한 고수, and the round footer badges.

### State fills observed on controls, not tokens
- 이 고수의 작업 사례 더보기 hovers to `#e0e5eb` and presses to `#c7ced6`.
- 찜한 고수 hovers its border to `#c1cbd7`, and pressed turns it light: fill `#c1cbd7`, label `#293341`, border `#b9c5d2`.
- Pro badges pair `#e7f4ff` with `#103580` text.

### Brand assets, not tokens
- The AI 견적 요청 button sits inside a wrapper that paints a rotating conic-gradient starting at `#693bf2`; it is animation, not a colour token.
- A single `#0087ff` line (16px / 500) appears on /pro; one occurrence is not a system colour.
- The Soomgo logo and app icon were not measured; no logo colour is claimed.

## 3. Typography Rules

### Font Family
- **Live surface use**: `font` (629 observed uses) on home and /pro, and `Pretendard` (255) on /search/pro, both `loaded / high`. `font` is the anonymised family name a Next.js build gives a self-hosted face, served from `assets.cdn.soomgo.com/next/917a2ba/_next/static/media/`; Pretendard is served from `assets.cdn.soomgo.com/vite/b68ef5f/assets/`. The `font` file `9031250013752d4b-s.p.woff2` and the Pretendard file `DOS411FT.woff2` are byte-identical (the same SHA-256, 804,864 bytes each), so both templates render the same binary. The identification as Pretendard rests on the name the Vite template declares; the files' name tables were not read.
- **Official distributed font assets**: Pretendard is by Kil Hyung-jin (orioncactus); its LICENSE, opened on 2026-09-30, states the SIL Open Font License 1.1.
- **Official product use**: no Soomgo page opened this session names its typeface, so no statement of official product use is made.
- **Declared only (no visible use)**: `font Fallback` (the metric-matched fallback), `FontAwesome` (v4.7.0 from use.fontawesome.com), `lg` and `slick` (carousel icon fonts), each with 0 observed uses.
- **Unresolved**: none of the observed families is unidentified.

### Hierarchy

| Role | Size | Weight | Line Height | Tracking | Observed on |
|------|------|--------|-------------|----------|-------------|
| Display Hero | 52px | 700 | 72px (1.38) | normal | /pro hero headline, `#ffffff` |
| Section XL | 36px | 700 | 46px (1.28) | normal | /pro section headings, `#1c242f` |
| Search Title | 34px | 500 | normal | -0.5px | /search/pro page title, `#293341` |
| Section Large | 28px | 700 | 38px (1.36) | normal | /pro feature headings |
| Title Large | 24px | 700 | 32px (1.33) | normal | Closing heading on home, /pro card headings |
| Title | 20px | 700 | 28px (1.4) | normal | Home section headings, `#1c242f` |
| Lead | 18px | 400 | 26px (1.44) | normal | /pro descriptions, `#6a7685` |
| Body Strong | 16px | 600 | 24px (1.5) | normal | List titles, hero tab labels |
| Body | 16px | 400 | 24px (1.5) | normal | Document default, `#293341` |
| Label | 14px | 600 | 22px (1.57) | normal | Prices, counts, short labels |
| Caption | 14px | 400 | 22px (1.57) | normal | Meta, `#6a7685` |
| Button Small | 14px | 500 | 20px (1.43) | normal | Header 고수가입 |
| Badge | 12px | 500 | 18px (1.5) | normal | Pro badge, `#103580` |
| Fine | 12px | 400 | 18px (1.5) | normal | /search/pro list meta |

### Principles
- **Bold headings, semibold labels**: every captured heading on home and /pro is 700; button and chip labels are 600 (large actions) or 400 to 500 (chips, header).
- **Normal tracking on the Next pages**: home and /pro keep `letter-spacing: normal` everywhere; only the older /search/pro page tightens its title (-0.5px) and one description (-0.3px).
- **Generous Hangul line height**: body at 16/24 and labels at 14/22.

## 4. Component Stylings

### Buttons

**Header sign-up (home)**
- Background: `#693bf2`
- Text: `#ffffff`
- Border: 1px solid `#693bf2`
- Radius: 6px
- Padding: 7px 14px
- Height: 36px
- Font: 14px / 500 / 20px
- Hover: background `#5400d7`
- Pressed: background `#5400d7`
- States: 0.15s colour transition; focus draws only the browser default ring
- Use: 고수가입 in the home header

**Header sign-up (/search/pro)**
- Background: `#693bf2`
- Text: `#ffffff`
- Border: 1px solid `#693bf2`
- Radius: 6px
- Padding: 6.5px 0px (fixed 80px wide)
- Height: 36px
- Font: 14px / 500 / 21px Pretendard
- Hover: background `#4e17f0`, border `#4710ea`
- Pressed: background and border `#5400d7`
- Focus: background and border `#5400d7` (real Tab)
- Use: 고수가입 in the /search/pro header

**Large primary action**
- Background: `#693bf2`
- Text: `#ffffff` (16px / 600 label)
- Radius: 12px
- Padding: 0px 16px
- Height: 52px
- Hover: background `#6302fb`
- Pressed: background `#5400d7`
- States: 0.2s background transition; focus draws only the browser default ring
- Use: 고수가입 near the foot of home (155 × 52); 고수 가입하기 in the /pro hero (224 × 52); 필요한 정보 보러 가기 on /pro at 143 × 44 with a 14px / 600 label

**Violet text action**
- Background: transparent
- Text: `#693bf2` (14px / 600 label)
- Radius: 10px
- Padding: 0px 12px
- Height: 38px
- Hover: background `#f6f7f9`
- Pressed: background `#eff1f5`
- Use: 지금 가입하고 혜택 받기 on /pro

**App download**
- Background: `#693bf2`
- Text: `#ffffff`
- Radius: 20.5px
- Padding: 0px 16px
- Height: 36px
- Font: 12px / 500 / 36px
- States: hover and pressed unmeasured; focus draws only the browser default ring
- Use: APP STORE and PLAY STORE in every footer

**AI quote**
- Background: `#f6f7f9`
- Text: `#1c242f` (14px / 600 label)
- Radius: 15px
- Padding: 12px
- Height: 46px
- States: the fill never changes; the icon animates and a wrapper paints a rotating conic-gradient from `#693bf2`
- Use: AI 견적 요청 beside the home search field

**Load more**
- Background: `#eff1f5`
- Text: `#1c242f` (14px / 600 label)
- Radius: 12px
- Padding: 0px 12px
- Height: 44px
- Hover: background `#e0e5eb`
- Pressed: background `#c7ced6`
- Use: 이 고수의 작업 사례 더보기 on home

**Saved pros**
- Background: `#293341`
- Text: `#ffffff` (16px / 500 label)
- Border: 1px solid `#e0e5eb`
- Radius: 22px
- Padding: 9px 16px 10px
- Height: 45px
- Hover: border `#c1cbd7`
- Pressed: background `#c1cbd7`, label `#293341`, border `#b9c5d2`
- Focus: border `#c1cbd7`
- Use: 찜한 고수 on /search/pro

**Filter button**
- Background: transparent
- Text: `#6a7685`
- Border: 1px solid `#e0e5eb`
- Radius: 28px
- Padding: 7px 16px 9px
- Height: 40px
- Font: 16px / 400 / 24px Pretendard
- States: no change on hover, pressed or focus
- Use: 서비스 and 지역 on /search/pro

### Chips & Tabs

**Category chip**
- Background: transparent, with a 1px inset ring `#e0e5eb`
- Text: `#1c242f` (14px / 400 / 16px label)
- Radius: 16px
- Padding: 8px 12px
- Height: 32px
- Selected: background `#293341`, label `#ffffff`, no ring
- States: no change on hover or pressed on either variant
- Use: service categories on home (헤어/메이크업, 영어 과외, 원룸/소형 이사 …). The 쿠폰 chip on /search/pro repeats the geometry on a `#ffffff` fill.

**Region link**
- Background: `#f6f7f9`
- Text: `#693bf2` (14px / 400 label)
- Radius: 36px
- Height: 36px
- States: no change on hover or pressed
- Use: 서울, 경기, 부산 and the other regions on home

**Hero tab**
- Text: `#1c242f` selected, `#aab4bf` unselected (16px / 600 / 24px labels)
- Height: 48px
- Padding: 8px 4px
- Use: 견적비교 and 바로예약 under the home search

### Inputs

**Search field (/search/pro)**
- Background: `#eff1f5`
- Text: `#293341`
- Radius: 4px 0px 0px 4px (joined to the `#eff1f5` 지도 button)
- Padding: 10px 16px 10px 40px
- Height: 44px
- Font: 16px / 400 / 24px Pretendard
- States: no change on hover, pressed or focus
- Use: 어떤 서비스가 필요하세요?. The home search field (집으로 사람부를 땐 숨고) is also `#eff1f5`, 468 × 42.

### Cards & Badges

**Sponsored pro card**
- Background: `#ffffff`
- Radius: 16px
- Padding: 20px 24px
- Shadow: `rgba(41, 51, 65, 0.08) 0px 4px 12px 0px, rgba(41, 51, 65, 0.06) 0px 0px 2px 0px`
- Use: 630 × 148 cards at the top of the /search/pro list

**Pro card (home)**
- Border: 1px solid `#eff1f5`
- Radius: 16px
- Use: 354 × 208 recommended-pro cards in a carousel on home

**Pro badge**
- Background: `#e7f4ff`
- Text: `#103580`
- Radius: 4px
- Padding: 2px 4px
- Font: 12px / 500 / 18px Pretendard

**Pay chip**
- Background: `#f1eeff`
- Radius: 4px
- Padding: 3px 5px
- Use: 숨고페이 chips in the /search/pro list

---

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out Soomgo pages plus fixed keyboard-probe state reads and first-party context)
**Tier 1 sources:** https://soomgo.com/ ; https://soomgo.com/search/pro ; https://soomgo.com/pro ; https://soomgo.com/about ; https://soomgo.team/ ; https://soomgo.team/blog/posts/67c9270011c820757515755e ; https://soomgo.team/culture
**Tier 2 sources:** not attempted this session; no Tier 2 value used
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Category chips: 8px 12px padding at 32px height
- Header sign-up (home): 7px 14px padding at 36px height
- Large actions: 0px 16px padding at 52px height (0px 12px at 44px)
- Sponsored cards: 20px 24px padding
- Frequent spacing values in the capture: 4, 8, 5, 3, 16 and 12px

### Grid & Container
- Home stacks a search field with the AI 견적 요청 button and two hero tabs, a row of category chips, carousels of recommended pros, a pro portfolio block, community stories, a 16-region link grid and a closing sign-up call.
- /search/pro is a list page: filters and a search field above a 630px list of sponsored and regular pro rows.
- /pro is a pro-acquisition landing with a hero call to action, 36px section headings and a FAQ.

### Whitespace Philosophy
- **Dense, scannable lists**: pro rows, chips and counts are packed for comparison.
- **Grey instead of rules**: `#f6f7f9` and `#eff1f5` fills separate controls; hairlines are reserved for chip rings, filters and cards.

### Border Radius Scale
- 0px: the default (744 of the recorded radii)
- 4px: badges, pay chips, the search field's left corners
- 6px: header sign-up buttons
- 10px: violet text action
- 12px: large actions, load more
- 15px: AI quote button
- 16px: category chips, sponsored and home pro cards
- 20.5px: app download buttons
- 22px: saved pros
- 28px: filter buttons
- 36px: region links

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Almost every captured element |
| Ring | `rgb(224, 229, 235) 0 0 0 1px inset` | Unselected category chips, the 쿠폰 chip |
| Card | `rgba(41, 51, 65, 0.08) 0 4px 12px, rgba(41, 51, 65, 0.06) 0 0 2px` | Sponsored pro cards on /search/pro |
| Float | `rgba(28, 36, 47, 0.3) 0 4px 16px` | One 104 × 44 charcoal pill on home, unlabelled in the capture |

**Shadow Philosophy**: 21 of the recorded elements carry a box-shadow, and most of those are the 1px inset ring that outlines a chip. Real elevation is kept for the sponsored cards that sit above the organic list.

## 7. Do's and Don'ts

### Do
- Use `#693bf2` for primary actions, with `#ffffff` labels; hover to `#6302fb` (large actions) and press to `#5400d7`
- Set text in `#293341` and headings in `#1c242f`; meta in `#6a7685`
- Use `#f6f7f9` and `#eff1f5` fills for secondary actions, search fields and region links
- Outline unselected chips with a 1px `#e0e5eb` ring and fill the selected one `#293341` with white text
- Keep pages flat; lift only sponsored cards
- Round generously: 12px for large actions, 16px for chips and cards, 36px for region pills

### Don't
- Don't use black for text; `#000000` appears only as the inherited colour of buttons and the home search field, never on a captured label or paragraph
- Don't add a second saturated action colour; the one `#0087ff` line on /pro is not a system colour
- Don't invent focus styles on the newer pages; their controls draw only the browser default ring
- Don't render Pretendard with another face in its place
- Don't stack heavy shadows; the deepest captured shadow is 12px of 8% ink
- Don't tighten tracking on the newer pages; only the older /search/pro title does

## 8. Responsive Behavior

### Breakpoints
Only the 1440 × 900 desktop viewport was captured; no breakpoint value was measured.

### Touch Targets
- Large actions: 52px (44px for the medium variant)
- Filter buttons: 40px; saved pros: 45px
- Search fields: 42px (home) and 44px (/search/pro)
- Header sign-up and app download buttons: 36px
- Region links: 36px
- Category chips: 32px

### Collapsing Strategy
Not captured; the pages were read at desktop width only.

### Image Behavior
Pro avatars and portfolio images sit flat inside cards; no image treatment was measured.

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action: `#693bf2` with `#ffffff` labels; hover `#6302fb`; pressed `#5400d7`
- Text: `#293341` default, `#1c242f` headings, `#6a7685` meta, `#aab4bf` inactive
- Surfaces: `#ffffff`, `#f6f7f9`, `#eff1f5`; hairline `#e0e5eb`
- Selected chip: `#293341` with white text; violet tint `#f1eeff` for pay chips

### Example Component Prompts
- "Create a large primary action: `#693bf2` background, white 16px label at weight 600, 12px radius, 0px 16px padding, 52px tall; hover `#6302fb`, pressed `#5400d7`, 0.2s background transition."
- "Build category chips: transparent background with a 1px inset ring `#e0e5eb`, `#1c242f` 14px labels, 16px radius, 8px 12px padding, 32px tall; the selected chip is `#293341` with white text and no ring."
- "Create a load-more button: `#eff1f5` background, `#1c242f` 14px / 600 label, 12px radius, 44px tall; hover `#e0e5eb`, pressed `#c7ced6`."
- "Create a sponsored pro card: white, 16px radius, 20px 24px padding, shadow `rgba(41, 51, 65, 0.08) 0 4px 12px, rgba(41, 51, 65, 0.06) 0 0 2px`."

### Iteration Guide
1. One violet (`#693bf2`) for actions; everything else neutral
2. Blue-grey ink, never black
3. Grey fills before borders; the `#e0e5eb` ring only on chips, filters and cards
4. Pretendard, 700 headings, 600 labels
5. 12px and 16px radii for most controls; 36px pills for region links
6. Flat, except the sponsored cards

---

## 10. Voice & Tone

Soomgo's voice is **plain, practical and reassuring** — the tone of a service that wants you to get the job done. Navigation is short verbs and nouns; promises are concrete (a pro within 48 hours, free requests); pro-facing copy speaks to growth and new customers.

| Context | Tone |
|---|---|
| Campaign line | Conversational, everyday. "집으로 사람 부를 땐, 숨고" |
| Navigation | Short and direct. "견적요청", "고수찾기", "둘러보기", "인터넷가입" |
| Customer promise | Concrete and free. "숨고는 여러분들이 도움을 필요로 하는 일을 도와줄 고수를 무료로 빠르게 찾아드려요" |
| Pro recruiting | Growth-framed. "숨고 : 숨은고수 - 가장 빨리 새로운 고객 만나는 방법" |
| Actions | Imperative, low-pressure. "고수 가입하기", "지금 가입하고 혜택 받기", "필요한 정보 보러 가기" |

**Voice samples (verbatim, opened 2026-09-30):**
- "집으로 사람 부를 땐, 숨고" — soomgo.com page title.
- "내 주변 고수찾기, 현재 10,000명 활동중 - 숨고, 숨은고수" — /search/pro page title.
- "필요한 사람을 찾는 일에 시간과 에너지를 낭비하지 마세요. 최대 48시간 안에 여러분이 찾는 사항에 딱! 맞는 고수를 찾아드립니다." — soomgo.com/about.
- "모두의 더 나은 삶을 위해" — soomgo.team.

**Forbidden register**: pressure selling, fake urgency, unexplained jargon, stacked exclamation marks.

## 11. Brand Narrative

Soomgo's company page tells its story as a change in how people find help: ten years ago, finding a mover, an interior crew or a tutor meant legwork and flyers; now Soomgo connects experts and passes on life know-how in one place. Brave Mobile Inc. was founded in December 2014 and launched Soomgo in September 2015. It joined Y Combinator in Silicon Valley in April 2017, raised a 12.5 billion won Series B in June 2019 and a 32 billion won Series C in July 2021, aired its first TV commercial in January 2022, reached break-even in February 2023 and 10 million sign-ups the following month, passed 100 million cumulative quotes in December 2023, and was named one of Forbes Korea's 50 fast-growing startups in June 2024.

In February 2025 it reached 14 million sign-ups, and in March it rebranded. The company's newsroom post describes the change: after ten years of widening its categories to more than 1,000 life services — 14 million sign-ups, more than 3 million monthly active users, 62.4 billion won in revenue and 13.7 billion won in operating profit in 2024 — Soomgo redefined itself on 6 March 2025 as a 종합 라이프스킬 플랫폼 under the brand definition "더 나은 일상을 위한 생활의 기술". Its new purpose is to raise everyone's life skills for a better life, its mission to connect people, information and services so that anyone can take on a better life, and its values Brave, Improve and Connect; the new logo carries the brand essence Life Progress. In November 2025 Kim Kang-se (김강세), formerly chief global officer of NOL Universe, became chief executive.

The team's culture page groups its principles under two headings: 최선으로 최고를 만듭니다 (every start is with customers and pros; tenacity for results; fast decisions, faster execution; bold thinking, brave action) and 하나가 되어 일합니다 (one team, one goal; transparent sharing; open communication; fierce debate, complete trust).

## 12. Principles

1. **Start from customers and pros.** "모든 시작은 고객과 고수로부터" is the first of the team's principles. *UI implication:* the home page leads with a search field, a request action and real pros' cards.
2. **Connect people, information and services.** The 2025 mission. *UI implication:* categories, regions, community stories and pro portfolios sit on one scrolling home.
3. **One action colour.** *UI implication:* `#693bf2` marks where to act — sign up, get the app, see more — and nothing else is saturated. (An editorial reading of the captured pages.)
4. **Fast decisions, faster execution.** *UI implication:* short labels and direct actions ("견적요청", "고수찾기").
5. **Flat and legible.** *UI implication:* blue-grey ink on white, grey fills for grouping, shadows only where a card is sponsored. (An editorial reading, not a Soomgo statement.)

## 13. Personas

*Fictional archetypes informed by Soomgo's publicly observable user segments (customers hiring local services, and independent pros), not real individuals.*

**Jiyeong, 34, Seoul.** Just signed a new lease and needs move-in cleaning by the weekend. Opens Soomgo, picks 이사/입주 청소업체, describes the flat and compares the quotes that come back by price and reviews.

**Minho, 45, Busan.** An independent cleaning pro. Uses Soomgo to receive customer requests and grow his client base; cares that his profile, reviews and response speed are clear, because that wins jobs.

**Seoyeon, 29, Seongnam.** Planning a small wedding and sourcing a photographer and a make-up artist. Lines up several pros side by side, reads recent reviews and messages before committing.

## 14. States

Only these states were observed on the three captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Hover / pressed (large violet actions)** | `#693bf2` → `#6302fb` on hover, `#5400d7` pressed, after a 0.2s transition. |
| **Hover / pressed (home header 고수가입)** | `#693bf2` → `#5400d7` for both, after a 0.15s transition. |
| **Hover / pressed / focus (/search/pro header 고수가입)** | Hover `#4e17f0` with a `#4710ea` border; pressed and focus `#5400d7`. |
| **Hover / pressed (violet text action)** | Transparent → `#f6f7f9` hover, `#eff1f5` pressed. |
| **Hover / pressed (load more)** | `#eff1f5` → `#e0e5eb` hover, `#c7ced6` pressed. |
| **Hover / pressed / focus (saved pros)** | Border `#c1cbd7` on hover and focus; pressed fill `#c1cbd7` with a `#293341` label. |
| **No change** | Category chips (both variants), region links, filter buttons, the 지도 button and the /search/pro search field show no hover or pressed change within the probe's compared scope; the search field and filter buttons also show none on focus. |
| **Selected** | Category chip `#293341` with white text; hero tab label `#1c242f` against `#aab4bf`. |
| **Disabled** | A 50 × 50 arrow button on /pro is `disabled` at capture and computes `rgba(16, 16, 16, 0.3)`, beside its enabled partner. |
| **Focus** | Apart from the /search/pro header button and 찜한 고수, every probed control draws only the browser default ring (`outline-style: auto`) or, like the /search/pro filter buttons, nothing; no authored focus style was found on home or /pro. |

Error, empty, loading and success states were not captured and are not described. The app download buttons' hover and pressed states are unmeasured, not absent.

## 15. Motion & Easing

The probe read the transitions the controls compute. The large violet actions, the violet text action and 이 고수의 작업 사례 더보기 transition `background-color 0.2s ease-in-out`; the home header 고수가입 transitions `color, border-color, background-color 0.15s ease-in-out`. On /search/pro the header button and filters transition `opacity 0.2s ease-in-out`, the 쿠폰 chip `background-color, box-shadow 0.3s ease-in-out` and the search field `border-color, box-shadow 0.15s ease-in-out`. Category chips, region links and the app download buttons compute `transition: all 0s`. The AI 견적 요청 wrapper rotates a conic-gradient continuously and its icon animates; carousels were not measured. Honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/soomgo.json (capturedAt 2026-09-30T11:08:59Z), deterministic collector, 1440x900, logged out: soomgo.com, /search/pro (recorded as /search/pro/review_count), /pro. States: fixed keyboard probe raws docs/research/2026-09-29-growth/raw/soomgo-states-{home,home-region,search,pro}.json.
- §1, §10, §11, §12 context: soomgo.team (company page and timeline), soomgo.team/culture, the soomgo.team newsroom posts on the 2025 rebrand and the new chief executive, soomgo.com/about and the page footers, opened 2026-09-30.
- §3: the served font files (SHA-256 comparison) and the Pretendard LICENSE on GitHub, opened 2026-09-30.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->
