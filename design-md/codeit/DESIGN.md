---
id: codeit
name: Codeit
display_name_kr: 코드잇
country: KR
category: education
homepage: "https://www.codeit.kr"
primary_color: "#9933ff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=codeit.kr&sz=128"
verified: "2026-09-30"
added: "2026-06-26"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.codeit.kr/", inspected: "2026-09-30" }
    - { id: surface-2, kind: product, url: "https://www.codeit.kr/explore", inspected: "2026-09-30" }
    - { id: surface-3, kind: marketing, url: "https://www.codeit.kr/subscription", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://www.codeit.kr/", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://www.codeit.kr/explore", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://www.codeit.kr/subscription", captured: "2026-09-30" }
    - { id: codeit-probe-home, kind: product-surface, url: "https://www.codeit.kr/", captured: "2026-09-30" }
    - { id: codeit-probe-sub, kind: product-surface, url: "https://www.codeit.kr/subscription", captured: "2026-09-30" }
    - { id: codeit-careers, kind: official-doc, url: "https://careers.codeit.com/", captured: "2026-09-30" }
    - { id: codeit-teams, kind: official-doc, url: "https://www.codeit.kr/teams", captured: "2026-09-30" }
    - { id: codeit-sprint, kind: official-doc, url: "https://sprint.codeit.kr/", captured: "2026-09-30" }
    - { id: spoqa-han-sans-license, kind: license, url: "https://raw.githubusercontent.com/spoqa/spoqa-han-sans/master/LICENSE", captured: "2026-09-30" }
    - { id: pretendard-license, kind: license, url: "https://raw.githubusercontent.com/orioncactus/pretendard/main/LICENSE", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &cta { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"45\"]", captured: "2026-09-30" }
    "tokens.colors.on-primary": *cta
    "tokens.colors.ink": &body { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::body", captured: "2026-09-30" }
    "tokens.colors.muted": &legend { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.violet-deep": &benefit { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::p", captured: "2026-09-30" }
    "tokens.colors.lavender": &year { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::div", captured: "2026-09-30" }
    "tokens.colors.lilac": &label { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::div", captured: "2026-09-30" }
    "tokens.colors.violet-mid": *label
    "tokens.colors.label-ink": *label
    "tokens.colors.white": *body
    "tokens.colors.surface": &cat { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::div", captured: "2026-09-30" }
    "tokens.colors.hairline": &topic { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::div", captured: "2026-09-30" }
    "tokens.colors.border": &search { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"72\"]", captured: "2026-09-30" }
    "tokens.colors.plum": &kdt { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"43\"]", captured: "2026-09-30" }
    "tokens.colors.butter": &kdc { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"42\"]", captured: "2026-09-30" }
    "tokens.typography.family.display": &hero { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h1", captured: "2026-09-30" }
    "tokens.typography.family.body": *body
    "tokens.typography.hero.size": *hero
    "tokens.typography.hero.weight": *hero
    "tokens.typography.hero.lineHeight": *hero
    "tokens.typography.hero.tracking": *hero
    "tokens.typography.hero.use": *hero
    "tokens.typography.membership-title.size": &mtitle { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h1", captured: "2026-09-30" }
    "tokens.typography.membership-title.weight": *mtitle
    "tokens.typography.membership-title.lineHeight": *mtitle
    "tokens.typography.membership-title.tracking": *mtitle
    "tokens.typography.membership-title.use": *mtitle
    "tokens.typography.section-lg.size": &h2lg { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.typography.section-lg.weight": *h2lg
    "tokens.typography.section-lg.lineHeight": *h2lg
    "tokens.typography.section-lg.tracking": *h2lg
    "tokens.typography.section-lg.use": *h2lg
    "tokens.typography.section.size": &h2 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.typography.section.weight": *h2
    "tokens.typography.section.lineHeight": *h2
    "tokens.typography.section.tracking": *h2
    "tokens.typography.section.use": *h2
    "tokens.typography.title.size": &h3 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-09-30" }
    "tokens.typography.title.weight": *h3
    "tokens.typography.title.lineHeight": *h3
    "tokens.typography.title.tracking": *h3
    "tokens.typography.title.use": *h3
    "tokens.typography.card-title.size": &caseh3 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-09-30" }
    "tokens.typography.card-title.weight": *caseh3
    "tokens.typography.card-title.lineHeight": *caseh3
    "tokens.typography.card-title.tracking": *caseh3
    "tokens.typography.card-title.use": *caseh3
    "tokens.typography.button-lg.size": *cta
    "tokens.typography.button-lg.weight": *cta
    "tokens.typography.button-lg.lineHeight": *cta
    "tokens.typography.button-lg.tracking": *cta
    "tokens.typography.button-lg.use": *cta
    "tokens.typography.button.size": &plan { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"24\"]", captured: "2026-09-30" }
    "tokens.typography.button.weight": *plan
    "tokens.typography.button.lineHeight": *plan
    "tokens.typography.button.tracking": *plan
    "tokens.typography.button.use": *plan
    "tokens.typography.feature.size": &feat { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h3", captured: "2026-09-30" }
    "tokens.typography.feature.weight": *feat
    "tokens.typography.feature.lineHeight": *feat
    "tokens.typography.feature.tracking": *feat
    "tokens.typography.feature.use": *feat
    "tokens.typography.body.size": *body
    "tokens.typography.body.weight": *body
    "tokens.typography.body.tracking": *body
    "tokens.typography.body.use": *body
    "tokens.typography.nav.size": &drop { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"7\"]", captured: "2026-09-30" }
    "tokens.typography.nav.weight": *drop
    "tokens.typography.nav.lineHeight": *drop
    "tokens.typography.nav.tracking": *drop
    "tokens.typography.nav.use": *drop
    "tokens.typography.label.size": *label
    "tokens.typography.label.weight": *label
    "tokens.typography.label.lineHeight": *label
    "tokens.typography.label.tracking": *label
    "tokens.typography.label.use": *label
    "tokens.typography.caption.size": *legend
    "tokens.typography.caption.weight": *legend
    "tokens.typography.caption.lineHeight": *legend
    "tokens.typography.caption.tracking": *legend
    "tokens.typography.caption.use": *legend
    "tokens.typography.button-sm.size": &navcta { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"16\"]", captured: "2026-09-30" }
    "tokens.typography.button-sm.weight": *navcta
    "tokens.typography.button-sm.lineHeight": *navcta
    "tokens.typography.button-sm.tracking": *navcta
    "tokens.typography.button-sm.use": *navcta
    "tokens.spacing.cta-y": *cta
    "tokens.spacing.cta-x": *cta
    "tokens.spacing.button-y": *plan
    "tokens.spacing.button-x": *plan
    "tokens.spacing.tab-y": &tab { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"33\"]", captured: "2026-09-30" }
    "tokens.spacing.tab-x": *tab
    "tokens.spacing.card": *topic
    "tokens.spacing.plan-y": &subcard { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::div", captured: "2026-09-30" }
    "tokens.spacing.plan-x": *subcard
    "tokens.rounded.sm": *navcta
    "tokens.rounded.md": *plan
    "tokens.rounded.cta": *cta
    "tokens.rounded.card": *topic
    "tokens.rounded.lg": &review { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::div", captured: "2026-09-30" }
    "tokens.rounded.tab": *tab
    "tokens.rounded.plan": *subcard
    "tokens.rounded.tile": *cat
    "tokens.rounded.label": *label
    "tokens.rounded.round": &icon { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"35\"]", captured: "2026-09-30" }
    "tokens.components.hero-cta.type": *cta
    "tokens.components.hero-cta.bg": *cta
    "tokens.components.hero-cta.fg": *cta
    "tokens.components.hero-cta.radius": *cta
    "tokens.components.hero-cta.padding": *cta
    "tokens.components.hero-cta.height": *cta
    "tokens.components.hero-cta.font": *cta
    "tokens.components.hero-cta.shadow": *cta
    "tokens.components.hero-cta.states": &ctastate { surface_id: home, source_id: codeit-probe-home, method: live-state-probe, selector: "a 무료 체험 시작하기 (400 x 48) wrapping button.Button-primary: hover and pressed change only the button's ::before opacity 1 -> 0 and ::after opacity 0 -> 1 (longest transition 300ms); focus (Tab #46) outline none -> rgb(0, 95, 204) auto 1px on the link and the button", captured: "2026-09-30" }
    "tokens.components.hero-cta.use": *cta
    "tokens.components.header-membership-button.type": *navcta
    "tokens.components.header-membership-button.bg": *navcta
    "tokens.components.header-membership-button.fg": *navcta
    "tokens.components.header-membership-button.radius": *navcta
    "tokens.components.header-membership-button.padding": *navcta
    "tokens.components.header-membership-button.height": *navcta
    "tokens.components.header-membership-button.font": *navcta
    "tokens.components.header-membership-button.states": *navcta
    "tokens.components.header-membership-button.use": *navcta
    "tokens.components.plan-cta.type": *plan
    "tokens.components.plan-cta.bg": *plan
    "tokens.components.plan-cta.fg": *plan
    "tokens.components.plan-cta.radius": *plan
    "tokens.components.plan-cta.padding": *plan
    "tokens.components.plan-cta.height": *plan
    "tokens.components.plan-cta.font": *plan
    "tokens.components.plan-cta.states": { surface_id: surface-3, source_id: codeit-probe-sub, method: live-state-probe, selector: "a wrapping the 6-month plan card (431.6 x 528), the probe match for 멤버십 시작하기: hover and pressed move the inner card to matrix(1, 0, 0, 1, 0, -8); the button inside was not read separately", captured: "2026-09-30" }
    "tokens.components.plan-cta.use": *plan
    "tokens.components.secondary-button.type": &sec { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"31\"]", captured: "2026-09-30" }
    "tokens.components.secondary-button.bg": *sec
    "tokens.components.secondary-button.fg": *sec
    "tokens.components.secondary-button.border": *sec
    "tokens.components.secondary-button.radius": *sec
    "tokens.components.secondary-button.padding": *sec
    "tokens.components.secondary-button.height": *sec
    "tokens.components.secondary-button.font": *sec
    "tokens.components.secondary-button.hover": &secstate { surface_id: home, source_id: codeit-probe-home, method: live-state-probe, selector: "a 모든 IT 강의 보러가기 (189.3 x 45): hover and pressed button bg rgba(255, 255, 255, 0.4) -> rgba(51, 50, 54, 0.05), label rgba(51, 50, 54, 0.8) -> rgb(51, 50, 54) (longest transition 300ms); focus (Tab #31) outline none -> rgb(0, 95, 204) auto 1px", captured: "2026-09-30" }
    "tokens.components.secondary-button.pressed": *secstate
    "tokens.components.secondary-button.states": *secstate
    "tokens.components.secondary-button.use": *sec
    "tokens.components.category-dropdown.type": *drop
    "tokens.components.category-dropdown.fg": *drop
    "tokens.components.category-dropdown.radius": *drop
    "tokens.components.category-dropdown.padding": *drop
    "tokens.components.category-dropdown.height": *drop
    "tokens.components.category-dropdown.font": *drop
    "tokens.components.category-dropdown.states": *drop
    "tokens.components.category-dropdown.use": *drop
    "tokens.components.playground-tab.type": *tab
    "tokens.components.playground-tab.fg": *tab
    "tokens.components.playground-tab.radius": *tab
    "tokens.components.playground-tab.padding": *tab
    "tokens.components.playground-tab.height": *tab
    "tokens.components.playground-tab.font": *tab
    "tokens.components.playground-tab.selected": { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"32\"]", captured: "2026-09-30" }
    "tokens.components.playground-tab.states": { surface_id: home, source_id: codeit-probe-home, method: live-state-probe, selector: "button 수강 환경 (93 x 43, rest fg rgba(51, 50, 54, 0.6)) and selected button 지원 기기 (93 x 43, rest bg #9933ff, fg #ffffff): hover, pressed and focus (Tabs #35 and #34) no change across self and 3 ancestor levels; transition all 0s", captured: "2026-09-30" }
    "tokens.components.playground-tab.use": *tab
    "tokens.components.icon-button.type": *icon
    "tokens.components.icon-button.bg": *icon
    "tokens.components.icon-button.radius": *icon
    "tokens.components.icon-button.padding": *icon
    "tokens.components.icon-button.size": *icon
    "tokens.components.icon-button.shadow": *icon
    "tokens.components.icon-button.states": *icon
    "tokens.components.icon-button.use": *icon
    "tokens.components.search-input.type": *search
    "tokens.components.search-input.bg": *search
    "tokens.components.search-input.border": *search
    "tokens.components.search-input.radius": *search
    "tokens.components.search-input.padding": *search
    "tokens.components.search-input.height": *search
    "tokens.components.search-input.font": *search
    "tokens.components.search-input.states": *search
    "tokens.components.search-input.use": *search
    "tokens.components.topic-card.type": *topic
    "tokens.components.topic-card.bg": *topic
    "tokens.components.topic-card.border": *topic
    "tokens.components.topic-card.radius": *topic
    "tokens.components.topic-card.padding": *topic
    "tokens.components.topic-card.size": *topic
    "tokens.components.topic-card.use": *topic
    "tokens.components.case-card.type": &case { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"37\"]", captured: "2026-09-30" }
    "tokens.components.case-card.bg": *case
    "tokens.components.case-card.radius": *case
    "tokens.components.case-card.size": *case
    "tokens.components.case-card.use": *case
    "tokens.components.review-card.type": *review
    "tokens.components.review-card.bg": *review
    "tokens.components.review-card.radius": *review
    "tokens.components.review-card.padding": *review
    "tokens.components.review-card.size": *review
    "tokens.components.review-card.use": *review
    "tokens.components.category-card.type": *cat
    "tokens.components.category-card.bg": *cat
    "tokens.components.category-card.radius": *cat
    "tokens.components.category-card.size": *cat
    "tokens.components.category-card.shadow": *cat
    "tokens.components.category-card.use": *cat
    "tokens.components.subscription-card.type": *subcard
    "tokens.components.subscription-card.bg": *subcard
    "tokens.components.subscription-card.border": *subcard
    "tokens.components.subscription-card.radius": *subcard
    "tokens.components.subscription-card.padding": *subcard
    "tokens.components.subscription-card.size": *subcard
    "tokens.components.subscription-card.shadow": *subcard
    "tokens.components.subscription-card.hover": &substate { surface_id: surface-3, source_id: codeit-probe-sub, method: live-state-probe, selector: "a wrapping the 6-month plan card (431.6 x 528): hover and pressed move the inner SubscriptionCard container from transform none to matrix(1, 0, 0, 1, 0, -8) (longest transition 300ms); focus (Tab #22) outline none -> rgb(0, 95, 204) auto 1px", captured: "2026-09-30" }
    "tokens.components.subscription-card.pressed": *substate
    "tokens.components.subscription-card.states": *substate
    "tokens.components.subscription-card.use": *subcard
    "tokens.components.recommended-plan-frame.type": *year
    "tokens.components.recommended-plan-frame.bg": *year
    "tokens.components.recommended-plan-frame.border": *year
    "tokens.components.recommended-plan-frame.radius": *year
    "tokens.components.recommended-plan-frame.size": *year
    "tokens.components.recommended-plan-frame.shadow": *year
    "tokens.components.recommended-plan-frame.use": *year
    "tokens.components.feature-label.type": *label
    "tokens.components.feature-label.bg": *label
    "tokens.components.feature-label.fg": *label
    "tokens.components.feature-label.radius": *label
    "tokens.components.feature-label.padding": *label
    "tokens.components.feature-label.height": *label
    "tokens.components.feature-label.font": *label
    "tokens.components.feature-label.use": *label
    "tokens.components.upselling-card.type": *kdc
    "tokens.components.upselling-card.radius": *kdc
    "tokens.components.upselling-card.padding": *kdc
    "tokens.components.upselling-card.size": *kdc
    "tokens.components.upselling-card.use": *kdc
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#9933ff"
    on-primary: "#ffffff"
    ink: "#333236"
    muted: "#888893"
    violet-deep: "#760dde"
    lavender: "#b363fd"
    lilac: "#c47cfd"
    violet-mid: "#a64eff"
    label-ink: "#fbf5ff"
    white: "#ffffff"
    surface: "#f6f6f8"
    hairline: "#e5e5ea"
    border: "#dddee4"
    plum: "#3d1457"
    butter: "#fff3bc"
  typography:
    family: { display: "Pretendard", body: "SpoqaHanSansNeo" }
    hero: { size: 68, weight: 800, lineHeight: 1.21, tracking: -1.5, use: "Home hero headline (5분마다 인생이 바뀐다), Pretendard ExtraBold, 82px line, in #333236; the only Pretendard text on the captured pages" }
    membership-title: { size: 68, weight: 700, lineHeight: 1.24, tracking: -1.5, use: "Membership page headline (코드잇 멤버십 구독), SpoqaHanSansNeo Bold, 84px line" }
    section-lg: { size: 48, weight: 700, lineHeight: 1.29, tracking: -1, use: "Large section headings on home (value, AI GURU, goal and up-selling sections), 62px line" }
    section: { size: 32, weight: 700, lineHeight: 1.38, tracking: -0.3, use: "The five-minute cycle heading on home, white over its dark band, 44px line" }
    title: { size: 28, weight: 700, lineHeight: 1.43, tracking: -0.3, use: "Feature and card headings on home, the hero subtitle above the headline, and the topic list title on /explore, 40px line" }
    card-title: { size: 18, weight: 700, lineHeight: 1.67, tracking: -0.3, use: "Learner story card titles on home, 30px line" }
    button-lg: { size: 18, weight: 700, lineHeight: 1.56, tracking: -0.3, use: "Hero 무료 체험 시작하기 label, 28px line" }
    button: { size: 16, weight: 500, lineHeight: 1.69, tracking: -0.3, use: "Plan and secondary action labels (멤버십 시작하기, 모든 IT 강의 보러가기), 27px line" }
    feature: { size: 16, weight: 500, lineHeight: 1.69, tracking: -0.3, use: "Feature rows in the membership comparison on /subscription, 27px line" }
    body: { size: 16, weight: 400, tracking: -0.3, use: "Document default on all three pages, SpoqaHanSansNeo in #333236; line height computes normal" }
    nav: { size: 15, weight: 500, lineHeight: 1.67, tracking: -0.3, use: "Header 모든 강의 category menu, 25px line, label at 80% ink" }
    label: { size: 15, weight: 700, lineHeight: 1.67, tracking: -0.3, use: "Rounded feature labels on home, 25px line" }
    caption: { size: 14, weight: 500, lineHeight: 1.71, tracking: -0.3, use: "Legend lines of the five-minute cycle chart on home, 24px line" }
    button-sm: { size: 13, weight: 500, lineHeight: 1.62, tracking: -0.3, use: "Header 멤버십 안내 label, 21px line (weight 700 on /subscription)" }
  spacing: { cta-y: 10, cta-x: 32, button-y: 8, button-x: 24, tab-y: 8, tab-x: 16, card: 20, plan-y: 32, plan-x: 40 }
  rounded: { sm: 6, md: 8, cta: 10, card: 16, lg: 20, tab: 22, plan: 24, tile: 28, label: 32, round: 9990 }
  components:
    hero-cta: { type: button, bg: "#9933ff", fg: "#ffffff", radius: "10px", padding: "10px 32px", height: "48px", font: "18px / 700 / 28px SpoqaHanSansNeo, letter-spacing -0.3px", shadow: "rgba(0, 0, 0, 0.12) 0px 2px 18px 0px", states: "probe on home: hover and pressed change only the opacity of two pseudo-element layers (::before 1 -> 0, ::after 0 -> 1) over a 300ms transition; the layers' colours were not recorded, so no hover colour is declared; focus (Tab #46) draws only the browser's default ring", use: "무료 체험 시작하기 under the home hero at home::[data-omd-capture=\"45\"], a 400 x 48 button inside its link" }
    header-membership-button: { type: button, bg: "#9933ff", fg: "#ffffff", radius: "6px", padding: "6px 12px 5px", height: "32px", font: "13px / 500 / 21px SpoqaHanSansNeo (700 on /subscription)", states: "not declared: the bundle's hover, pressed and focus frames read #982eff on /explore but #9933ff on /subscription, so they are not settled; the probe did not find the control on two loads", use: "멤버십 안내 in the header of all three pages at home::[data-omd-capture=\"16\"], 85 x 32" }
    plan-cta: { type: button, bg: "#9933ff", fg: "#ffffff", radius: "8px", padding: "8px 24px", height: "45px", font: "16px / 500 / 27px SpoqaHanSansNeo", states: "not measured on the button itself: the probe matched the surrounding plan-card link for 멤버십 시작하기, and that card lifts 8px on hover and pressed; no hover colour is declared for the button", use: "멤버십 시작하기 inside the 6-month plan card on /subscription at surface-3::[data-omd-capture=\"24\"], 352 x 45" }
    secondary-button: { type: button, bg: "rgba(255, 255, 255, 0.4)", fg: "rgba(51, 50, 54, 0.8)", border: "1px solid rgba(51, 50, 54, 0.2)", radius: "8px", padding: "8px 24px", height: "45px", font: "16px / 500 / 27px SpoqaHanSansNeo", hover: "bg rgba(51, 50, 54, 0.05), label #333236", pressed: "bg rgba(51, 50, 54, 0.05), label #333236", states: "probe on home: hover and pressed settle on a 5% ink wash and full-strength ink after a 300ms transition; focus (Tab #31) draws only the browser's default ring", use: "모든 IT 강의 보러가기 under the category tiles on home at home::[data-omd-capture=\"31\"], 189 x 45" }
    category-dropdown: { type: button, fg: "rgba(51, 50, 54, 0.8)", radius: "8px", padding: "4px 8px", height: "33px", font: "15px / 500 / 25px SpoqaHanSansNeo", states: "rest only: the bundle hover and pressed frames differ from rest only between two fully transparent fills, and the control was not probed; no state value is declared", use: "모든 강의 category menu in the header at home::[data-omd-capture=\"7\"], 97 x 33, transparent fill" }
    playground-tab: { type: tab, fg: "rgba(51, 50, 54, 0.6)", radius: "22px", padding: "8px 16px", height: "43px", font: "16px / 500 / 27px SpoqaHanSansNeo", selected: "bg #9933ff, fg #ffffff", states: "probe on home: neither the selected nor the unselected tab changes on hover, pressed or focus (Tabs #34 and #35); transition all 0s", use: "Playground section tabs on home (수강 환경, 지원 기기) at home::[data-omd-capture=\"33\"], 93 x 43, on a white 30px-radius track" }
    icon-button: { type: button, bg: "#ffffff", radius: "9990px", padding: "8px", size: "44px x 44px", shadow: "rgba(51, 50, 54, 0.15) 0px 0px 0px 1px inset", states: "rest only: no state frame was recorded and the control was not probed", use: "Round previous and next buttons of the playground section on home at home::[data-omd-capture=\"35\"]" }
    search-input: { type: input, bg: "#f6f6f8", border: "1px solid #dddee4", radius: "20px", padding: "8px 16px 6px 45px", height: "40px", font: "14px / 400 SpoqaHanSansNeo", states: "rest only: no state frame was recorded and the field was not probed or focused", use: "Search field above the topic list on /explore at surface-2::[data-omd-capture=\"72\"], 206 x 40" }
    topic-card: { type: card, bg: "#ffffff", border: "1px solid #e5e5ea", radius: "16px", padding: "20px", size: "320px x 146px", use: "Course topic cards in the curated rows of /explore (28 instances)" }
    case-card: { type: card, bg: "#ffffff", radius: "16px", size: "362px x 304px", use: "Learner story cards on home (for example 개발도 게임처럼! 구글 개발자가 됐어요) at home::[data-omd-capture=\"37\"]" }
    review-card: { type: card, bg: "#ffffff", radius: "20px", padding: "32px", size: "356px x 360px", use: "Learner review cards on /subscription (32 instances)" }
    category-card: { type: card, bg: "#f6f6f8", radius: "28px", size: "116px x 144px", shadow: "rgba(51, 50, 54, 0.05) 0px 0px 0px 1px inset", use: "Category tiles under the home hero (코딩 기초 and the other tracks)" }
    subscription-card: { type: card, bg: "#ffffff", border: "2px solid rgba(51, 50, 54, 0.1)", radius: "24px", padding: "32px 40px", size: "432px x 528px", shadow: "rgba(0, 0, 0, 0.08) 0px 2px 14px 0px", hover: "translateY(-8px)", pressed: "translateY(-8px)", states: "probe on /subscription: hover and pressed lift the card 8px after a 300ms transition; focus (Tab #22) draws only the browser's default ring", use: "6-month plan card on /subscription" }
    recommended-plan-frame: { type: card, bg: "#b363fd", border: "2px solid #b363fd", radius: "24px", size: "440px x 572px", shadow: "rgba(0, 0, 0, 0.2) 0px 4px 24px 0px", use: "Lavender frame around the annual plan card on /subscription; the white card inside it keeps 24px top corners" }
    feature-label: { type: badge, bg: "#9933ff", fg: "#fbf5ff", radius: "32px", padding: "0px 12px", height: "32px", font: "15px / 700 / 25px SpoqaHanSansNeo", use: "Rounded labels on the feature cards on home; the three labels fill #c47cfd, #a64eff and #9933ff" }
    upselling-card: { type: card, radius: "20px", padding: "24px 32px", size: "400px x 406px", use: "Up-selling cards at the foot of home, filled #fff3bc and #3d1457, at home::[data-omd-capture=\"42\"] and [data-omd-capture=\"43\"]" }
  components_harvested: true
---

# Design System Inspiration of Codeit

## 1. Visual Theme & Atmosphere

Codeit (코드잇, legal name 주식회사 코드잇, based at 청계천로 100 in Seoul's Jung-gu) is a Korean education company whose core product is an online IT-learning platform built on courses it produces itself. Its recruiting site states the vision as "배움의 기쁨을 세상 모두에게" (the joy of learning, for everyone) and describes a company that grew into a leading Korean edtech brand on its own content and platform, and is now repositioning itself as an AI "talent infrastructure" company that connects learning to hiring. Around the 코드잇 멤버십 learning platform, the same page lists 코드잇 스프린트 (a job-focused bootcamp), 코드잇 어센트 (AI mock interviews that link bootcamp graduates to employers), 코드잇 팀즈 (training for companies) and 케이드 (an AI interview and applicant-tracking service). It counts 700,000 learners, about 20 large corporations and 2,000 smaller companies as customers. The same page's press list tracks recent moves: the GPT-4-based GURU AI learning assistant, a Pre-IPO round, a KOSDAQ preliminary filing and the acquisition of the HR-software company 왓타임.

On codeit.kr the brand reads as a friendly consumer product rather than a course portal. The home hero states "5분마다 인생이 바뀐다" (your life changes every five minutes) in Pretendard ExtraBold at 68px with -1.5px tracking, the only Pretendard text on the three captured pages. Everything else is SpoqaHanSansNeo, with -0.3px tracking on every text element: 48px and 28px bold headings, 16px body, and labels at 13–18px. Text is a warm near-black `#333236`, never pure black, and quieter labels are the same ink at 80% or 60% opacity. One saturated purple, `#9933ff`, marks the action on every page: the header's 멤버십 안내, the hero's 무료 체험 시작하기, the selected playground tab and the plan card's 멤버십 시작하기. Around it the pages use lavender and lilac (`#b363fd`, `#c47cfd`, `#a64eff`) in labels and the recommended plan frame, grey `#f6f6f8` tiles, and rounded geometry from 6px buttons to 28px tiles.

**Key Characteristics:**
- One action colour: `#9933ff` fills the header, hero, tab and plan calls to action, with `#ffffff` labels
- A two-face split: Pretendard ExtraBold 800 only for the home hero; SpoqaHanSansNeo for everything else, including the 68px membership headline in Bold 700
- Warm ink `#333236` for text and headings, stepped down by opacity (80%, 60%) rather than by extra greys
- A violet family around the primary: `#760dde` emphasis text, `#b363fd` recommended-plan frame, `#c47cfd` and `#a64eff` label fills
- Rounded, soft geometry: 6 / 8 / 10px buttons, 16 / 20 / 24px cards, 22px tabs, 28px tiles, 32px labels
- Mostly flat, with a few soft lifts: a faint shadow under the hero call to action and the plan cards, and 1px inset rings instead of borders on tiles and round buttons

## Primary tasks

- Search the explore catalog for a course to take
- Work through a five-minute lesson, practice, and quiz
- Start the free trial in one tap, without a sales call
- Ask the GURU AI learning assistant when a lesson gets confusing
- Compare membership plans and pick the recommended one

## 2. Color Palette & Roles

Every token below was read on 2026-09-30 from codeit.kr, /explore and /subscription by the deterministic collector; state values come from the fixed keyboard probe. The tokens describe Codeit's public website. The classroom behind sign-in was not captured, and none of its values is claimed.

### Primary
- **Codeit Purple** (`#9933ff`): The fill of every primary action on the captured pages: 멤버십 안내 in the header of all three pages (85 × 32), 무료 체험 시작하기 under the home hero (400 × 48), the selected playground tab 지원 기기, and 멤버십 시작하기 in the plan card on /subscription (352 × 45). It is the primary because it is the colour the product uses for the action it asks for (start the trial, start the membership) and for the selected state; no other colour fills an action. One of the three feature labels on home also uses it.
- **On Primary** (`#ffffff`): Labels on the purple actions.

### Violet family
- **Deep Violet** (`#760dde`): An emphasis line in the benefit section of /subscription (18px bold text).
- **Lavender** (`#b363fd`): The 2px frame and fill around the recommended annual plan on /subscription.
- **Lilac** (`#c47cfd`) and **Mid Violet** (`#a64eff`): Fills of two of the three feature labels on home. Lilac is also the colour of one legend line in the five-minute cycle chart.
- **Label Ink** (`#fbf5ff`): Text on the feature labels.

### Neutral & Surface
- **White** (`#ffffff`): The page background (the body computes `#ffffff` on all three pages), cards and round icon buttons.
- **Surface** (`#f6f6f8`): Category tiles on home and the search field on /explore.
- **Hairline** (`#e5e5ea`): The 1px border of the topic cards on /explore.
- **Border** (`#dddee4`): The 1px border of the search field and the round play buttons on /explore.

### Text
- **Ink** (`#333236`): The document text colour on all three pages and every heading. Secondary labels use the same ink at reduced opacity (`rgba(51, 50, 54, 0.8)` in the header menu and secondary button, `rgba(51, 50, 54, 0.6)` on unselected tabs).
- **Muted** (`#888893`): Legend text of the five-minute cycle chart on home and the numbered labels on /subscription.

### Feature fills
- **Butter** (`#fff3bc`) and **Plum** (`#3d1457`): The two up-selling cards at the foot of home, each 400 × 406 with a 20px radius. Headings on the plum card are white.

### Brand assets, not tokens
- The Codeit logo was not measured; no logo colour is claimed.
- Codeit's recruiting site (careers.codeit.com) declares its own violet primary variable. That site is a separate evidence domain, and none of its values is used here.

## 3. Typography Rules

### Font Family
- **Live surface use**: `SpoqaHanSansNeo` (1,233 observed uses; body, headings, buttons, inputs, cards) and `Pretendard` (the home hero only), both `loaded / high`. Codeit serves both itself from `codeit-static.codeit.com/font/` (for example `SpoqaHanSansNeo-Regular.woff2` and `Pretendard-Regular.woff2`). The body computes `SpoqaHanSansNeo, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif` on all three pages.
- **Official distributed font assets**: Spoqa Han Sans Neo is Spoqa's open-source Korean typeface. Its LICENSE reads "Copyright (c) 2020-11-30 Spoqa (spoqa.com), with Reserved Font Name Spoqa Han Sans Neo. This Font Software is licensed under the SIL Open Font License, Version 1.1." Pretendard is by Kil Hyung-jin (orioncactus) and is also under the SIL Open Font License 1.1. Both licence files were opened on 2026-09-30. The identification rests on the declared family names; the name tables of Codeit's served files were not inspected.
- **Official product use**: no Codeit page opened this session names its typefaces, so no statement of official product use is made.
- **Declared only (no visible use)**: `Cafe24Danjunghae` and `paybooc` (loaded from the noonfonts CDN), `Menlo` and `Rec Mono Linear` (code faces from `codeit-static.codeit.com`), and the `KaTeX_*` math faces. All are declared with 0 observed uses on these pages.
- **Unresolved**: none of the observed families is unidentified.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Observed on |
|------|------|------|--------|-------------|----------|-------------|
| Hero | Pretendard | 68px | 800 | 82px (1.21) | -1.5px | Home hero headline |
| Membership Title | SpoqaHanSansNeo | 68px | 700 | 84px (1.24) | -1.5px | /subscription headline |
| Section Large | SpoqaHanSansNeo | 48px | 700 | 62px (1.29) | -1px | Home section headings |
| Section | SpoqaHanSansNeo | 32px | 700 | 44px (1.38) | -0.3px | Five-minute cycle heading |
| Title | SpoqaHanSansNeo | 28px | 700 | 40px (1.43) | -0.3px | Feature headings, /explore list title |
| Card Title | SpoqaHanSansNeo | 18px | 700 | 30px (1.67) | -0.3px | Learner story cards |
| Button Large | SpoqaHanSansNeo | 18px | 700 | 28px (1.56) | -0.3px | Hero call to action |
| Button | SpoqaHanSansNeo | 16px | 500 | 27px (1.69) | -0.3px | Plan and secondary actions |
| Feature | SpoqaHanSansNeo | 16px | 500 | 27px (1.69) | -0.3px | Membership comparison rows |
| Body | SpoqaHanSansNeo | 16px | 400 | normal | -0.3px | Document default |
| Nav | SpoqaHanSansNeo | 15px | 500 | 25px (1.67) | -0.3px | Header category menu |
| Label | SpoqaHanSansNeo | 15px | 700 | 25px (1.67) | -0.3px | Feature labels |
| Caption | SpoqaHanSansNeo | 14px | 500 | 24px (1.71) | -0.3px | Chart legend on home |
| Button Small | SpoqaHanSansNeo | 13px | 500 | 21px (1.62) | -0.3px | Header 멤버십 안내 |

### Principles
- **One display moment**: Pretendard ExtraBold appears once, on the home promise; the membership headline at the same 68px size stays in SpoqaHanSansNeo Bold.
- **Uniform tracking**: every SpoqaHanSansNeo element computes -0.3px letter-spacing; only the 48px and 68px headings tighten further (-1px, -1.5px).
- **Weight 500 for interface text**: buttons, menus, feature rows and captions sit at 500; headings at 700; body at 400.

## 4. Component Stylings

### Buttons

**Hero call to action (primary)**
- Background: `#9933ff`; text `#ffffff`
- Radius: 10px; padding 10px 32px; height 48px
- Font: 18px / 700 / 28px SpoqaHanSansNeo
- Shadow: `rgba(0, 0, 0, 0.12) 0px 2px 18px 0px`
- States: on hover and pressed the probe saw only two pseudo-element layers swap opacity (`::before` 1 → 0, `::after` 0 → 1) over 300ms. Their colours were not recorded, so no hover colour is given. Focus draws only the browser's default ring.
- Use: 무료 체험 시작하기 under the home hero

**Header membership button**
- Background: `#9933ff`; text `#ffffff`
- Radius: 6px; padding 6px 12px 5px; height 32px
- Font: 13px / 500 / 21px (700 on /subscription)
- States: not declared. The bundle's hover, pressed and focus frames disagree between pages, and the probe did not find the control.
- Use: 멤버십 안내 in the header of every page

**Plan call to action**
- Background: `#9933ff`; text `#ffffff`
- Radius: 8px; padding 8px 24px; height 45px
- Font: 16px / 500 / 27px
- States: the probe matched the whole plan card around it, which lifts 8px on hover and pressed; the button's own colour change was not read
- Use: 멤버십 시작하기 inside the 6-month plan card on /subscription

**Secondary button**
- Background: `rgba(255, 255, 255, 0.4)`; text `rgba(51, 50, 54, 0.8)`; border 1px `rgba(51, 50, 54, 0.2)`
- Radius: 8px; padding 8px 24px; height 45px; font 16px / 500 / 27px
- Hover and pressed: a 5% ink wash `rgba(51, 50, 54, 0.05)` and a full-strength `#333236` label, after a 300ms transition (probe). Focus draws only the browser's default ring.
- Use: 모든 IT 강의 보러가기 on home

**Round icon button**
- Background: `#ffffff`; 44 × 44; radius 9990px (fully round); padding 8px
- Edge: `rgba(51, 50, 54, 0.15) 0px 0px 0px 1px inset` instead of a border
- Use: previous and next in the playground section on home

### Tabs & Navigation

**Playground tabs**
- Unselected: transparent, text `rgba(51, 50, 54, 0.6)`; selected: `#9933ff` fill, `#ffffff` text
- Radius: 22px; padding 8px 16px; height 43px; font 16px / 500 / 27px
- States: no change on hover, pressed or focus for either tab (probe; `transition: all 0s`)

**Header category menu**
- Transparent; text `rgba(51, 50, 54, 0.8)`; radius 8px; padding 4px 8px; height 33px; font 15px / 500 / 25px
- Use: 모든 강의 in the header

### Inputs

**Explore search field**
- Background `#f6f6f8`; border 1px `#dddee4`; radius 20px; padding 8px 16px 6px 45px; height 40px; font 14px / 400

### Cards

**Topic card** — `#ffffff`, 1px `#e5e5ea` border, 16px radius, 20px padding, 320 × 146; course rows on /explore.

**Learner story card** — `#ffffff`, 16px radius, 362 × 304; home.

**Review card** — `#ffffff`, 20px radius, 32px padding, 356 × 360; /subscription.

**Category tile** — `#f6f6f8`, 28px radius, 116 × 144, 1px inset ring `rgba(51, 50, 54, 0.05)`; home.

**Plan card** — `#ffffff`, 2px `rgba(51, 50, 54, 0.1)` border, 24px radius, padding 32px 40px, 432 × 528, shadow `rgba(0, 0, 0, 0.08) 0px 2px 14px 0px`. Hover and pressed lift it 8px (`translateY(-8px)`) after a 300ms transition (probe).

**Recommended plan frame** — `#b363fd` fill and 2px border, 24px radius, 440 × 572, shadow `rgba(0, 0, 0, 0.2) 0px 4px 24px 0px`, around the annual plan card.

**Up-selling cards** — 20px radius, padding 24px 32px, 400 × 406, filled `#fff3bc` and `#3d1457`; foot of home.

### Badges

**Feature label** — 32px radius, padding 0 12px, height 32px, 15px / 700 / 25px, text `#fbf5ff`, fills `#c47cfd`, `#a64eff` and `#9933ff`, 1px inset ring `rgba(51, 50, 54, 0.05)`.

---

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out pages of codeit.kr plus fixed keyboard-probe state reads and first-party context)
**Tier 1 sources:** https://www.codeit.kr/ ; https://www.codeit.kr/explore ; https://www.codeit.kr/subscription ; https://careers.codeit.com/ ; https://www.codeit.kr/teams
**Tier 2 sources:** getdesign.md/codeit (HTTP 200, the name does not appear in the response) and styles.refero.design/?q=codeit (HTTP 200, not inspected beyond a name count), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Action padding: 10px 32px (hero), 8px 24px (plan and secondary), 8px 16px (tabs), 6px 12px 5px (header), 4px 8px (menu)
- Card padding: 20px (topic cards), 32px (review cards), 32px 40px (plan card), 24px 32px (up-selling cards)
- Small steps of 4, 8 and 12px are the most frequent spacing values in the capture

### Grid & Container
- Home is a long single-column story (about 10,976px tall at 1440px wide) that alternates white sections with dark and tinted bands, such as the five-minute cycle band with its white heading
- /explore is a catalog: a category rail, curated rows of 320 × 146 topic cards, then a searchable topic list
- /subscription centres two plan cards side by side, the annual one inside a lavender frame, then a feature comparison and review cards

### Whitespace Philosophy
- Generous vertical rhythm between story sections on home; dense, evenly gapped rows in the catalog.

### Border Radius Scale
- 6px header button · 8px plan, secondary and menu · 10px hero action · 16px topic and story cards · 20px review cards, search field and up-selling cards · 22px tabs · 24px plan cards · 28px category tiles · 32px labels · 9990px round icon buttons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | none | Most elements |
| Ring | `rgba(51, 50, 54, 0.05–0.15) 0px 0px 0px 1px inset` | Category tiles, labels, round icon buttons, the tab track |
| Soft lift | `rgba(0, 0, 0, 0.08) 0px 2px 14px 0px` | Plan card, explore carousel buttons |
| Action glow | `rgba(0, 0, 0, 0.12) 0px 2px 18px 0px` | Hero call to action |
| Emphasis | `rgba(0, 0, 0, 0.2) 0px 4px 24px 0px` | Recommended plan frame |

Codeit draws edges with faint inset rings more often than with borders, and keeps drop shadows for the few things that should look lifted: the hero action, the plan cards and the carousel buttons. The underline on the selected category in the /explore rail is also an inset shadow (`#333236 0px -2px 0px 0px inset`).

## 7. Do's and Don'ts

### Do
- Use `#9933ff` with `#ffffff` labels for the one action each view asks for, and for the selected tab
- Set interface text in SpoqaHanSansNeo with -0.3px tracking; reserve Pretendard ExtraBold for a single display line
- Write text in `#333236` and step it down with opacity (80%, 60%)
- Use rounded shapes: 8–10px buttons, 16–24px cards, 22px tabs, 32px labels
- Draw edges with 1px inset rings; lift only the hero action and plan cards

### Don't
- Use pure black text or introduce new greys for hierarchy
- Spread purple onto secondary actions; the secondary button is a translucent white with an ink label
- Add heavy shadows to catalog cards; topic cards use a `#e5e5ea` hairline
- Mix a second display face into section headings

## 8. Responsive Behavior

### Breakpoints
Only the 1440px desktop viewport was captured, so no breakpoint values are given. Codeit's class names carry `pc-`, `tb-` and `mo-` size variants (for example `pc-large tb-large mo-medium` on the secondary button), which shows desktop, tablet and mobile sizes exist; their values were not measured.

### Touch Targets
- Hero action 48px tall; plan and secondary actions 45px; tabs 43px; round icon buttons 44px; the header membership button is 32px

### Collapsing Strategy
Not measured.

### Image Behavior
Not measured.

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action: `#9933ff` on `#ffffff` labels
- Text: `#333236` (80% and 60% opacity for secondary labels); muted `#888893`
- Violets: `#760dde` emphasis, `#b363fd` recommended frame, `#c47cfd` and `#a64eff` labels on `#fbf5ff` text
- Surfaces: `#ffffff` page, `#f6f6f8` tiles and search, `#e5e5ea` card hairline, `#dddee4` input border

### Example Component Prompts
- "Hero on white: headline 68px Pretendard 800, -1.5px tracking, #333236. Below it a 400 × 48 button, #9933ff fill, #ffffff 18px/700 SpoqaHanSansNeo label, 10px radius, padding 10px 32px, shadow rgba(0, 0, 0, 0.12) 0 2px 18px."
- "Course card: #ffffff, 1px solid #e5e5ea, 16px radius, 20px padding, 320 × 146; title 16px/700 SpoqaHanSansNeo, #333236."
- "Pricing: two plan cards, #ffffff, 2px solid rgba(51, 50, 54, 0.1), 24px radius, padding 32px 40px, shadow rgba(0, 0, 0, 0.08) 0 2px 14px; wrap the recommended plan in a #b363fd frame with a 2px #b363fd border and shadow rgba(0, 0, 0, 0.2) 0 4px 24px. Plan action #9933ff, 8px radius, 45px tall. On hover, lift the card 8px."

### Iteration Guide
1. One purple action per view; everything else in ink
2. SpoqaHanSansNeo at -0.3px everywhere; Pretendard only for the hero promise
3. Inset rings before borders; shadows only on the hero action and plan cards
4. Radii from the scale: 6, 8, 10, 16, 20, 22, 24, 28, 32

---

## 10. Voice & Tone

Codeit's voice is warm, motivating and plain-spoken: an encouraging coach that turns learning to code into small, repeatable steps. The hero promise "5분마다 인생이 바뀐다" sets the register, aspirational but concrete. Calls to action are low-pressure invitations to start.

| Context | Tone |
|---|---|
| Hero | Aspirational, concrete: "5분마다 인생이 바뀐다" |
| Method | Micro-learning framed as a cycle: "5분 학습 사이클" |
| Stories | Playful and personal: "개발도 게임처럼! 구글 개발자가 됐어요" |
| Calls to action | Low-pressure: "무료 체험 시작하기", "멤버십 시작하기", "모든 IT 강의 보러가기", "멤버십 안내" |
| Company | Mission-framed: "배움의 기쁨을 세상 모두에게" (recruiting site) |

**Voice samples (verbatim, checked on 2026-09-30):**
- "5분마다 인생이 바뀐다" — home page title and hero headline.
- "5분 학습 사이클" — home.
- "개발도 게임처럼! 구글 개발자가 됐어요" — learner story card on home.
- "코드잇 멤버십 구독" — /subscription headline.
- "배움의 기쁨을 세상 모두에게" — vision on careers.codeit.com.

**Forbidden register**: fear-based "you're falling behind" urgency, unexplained jargon, hype-heavy superlatives, and any tone that makes a beginner feel judged.

## 11. Brand Narrative

Codeit (코드잇) runs its business from Seoul (주식회사 코드잇, co-CEOs 강영훈 and 이윤수, per the site footer). Its thesis is that learning sticks in short, repeatable cycles rather than long video sessions. The home page promises that "5분마다 인생이 바뀐다" and frames study as a "5분 학습 사이클" of short lessons, practice and quizzes. The recruiting site describes Codeit as a company that grew into a leading Korean edtech brand on self-produced content and its own learning platform, and uses its learning data and AI to give individuals personalised learning and give companies hiring and HR tools, "교육부터 채용까지" (from education to hiring).

The brand now spans several businesses. 코드잇 멤버십 is the self-paced platform with its own courses in programming, AI engineering and design. 코드잇 스프린트 is a job-focused bootcamp. 코드잇 어센트 offers AI mock interviews and links graduates to employers. 코드잇 팀즈 trains companies' staff (codeit.kr/teams, "코드잇 기업교육"). 케이드 is an HR-tech service that grew from AI interviews into applicant tracking and sourcing. The press items Codeit lists on its own recruiting page include the launch of the GPT-4-based GURU AI assistant, a new premium course brand called 텐엑스, the 어센트 launch, the acquisition of 왓타임 (maker of 라운드HR), a Pre-IPO round of 9.8 billion won and a KOSDAQ preliminary filing, and third place overall in JobPlanet's 2024 best workplaces.

The design choices follow from that consumer-learning stance. The site uses one purple for "start now", warm ink instead of black, rounded tiles and cards, and a single bold Pretendard promise over quieter SpoqaHanSansNeo text. It reads more like an approachable app than a learning-management portal.

## 12. Principles

1. **Small steps, real progress.** The five-minute cycle is the product thesis. *UI implication:* keep units short and make "start now" the easiest action, with one purple call to action.
2. **One action, one colour.** `#9933ff` means "do this" and marks the selected tab. *UI implication:* secondary actions stay translucent white with ink labels.
3. **Motivate, don't intimidate.** *UI implication:* warm `#333236` ink, rounded shapes and encouraging copy; no fear-based urgency.
4. **Bold where it persuades, calm where it teaches.** *UI implication:* Pretendard ExtraBold for the one hero promise; SpoqaHanSansNeo 400–500 for lesson, catalog and plan content.
5. **Flat and friendly.** *UI implication:* faint inset rings and tinted tiles carry grouping; only the hero action and plan cards are lifted.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Codeit user segments (career changers, students, professionals upskilling), not individual people.*

**정민재, 26, 서울.** A non-CS graduate preparing for a developer career change. Likes that lessons are five minutes each, so he can study on the subway. Chose Codeit because the free trial let him start in one tap.

**한소연, 31, 경기.** A marketer learning data analysis to move into a PM role. Uses the explore catalog to pick a data track and asks the AI assistant when she gets stuck. Values that the tone never makes her feel behind.

**오준혁, 23, 부산.** A university student on the membership who uses its challenges and progress features to stay consistent. Compared the 6-month and annual plans on the subscription page before choosing.

## 14. States

| Component | State | Observed treatment | Evidence |
|---|---|---|---|
| Secondary button | Hover, pressed | Fill `rgba(255, 255, 255, 0.4)` → `rgba(51, 50, 54, 0.05)`; label 80% ink → `#333236`; 300ms | Probe, home |
| Plan card | Hover, pressed | Lifts 8px (`translateY(-8px)`); 300ms | Probe, /subscription |
| Hero call to action | Hover, pressed | `::before` and `::after` layers swap opacity; colours not recorded | Probe, home |
| Playground tab | Selected | `#9933ff` fill, `#ffffff` label | Collector, home |
| Playground tab | Hover, pressed, focus | No change | Probe, home |
| Links and buttons | Focus | Browser default ring (`outline: auto`), not a brand style | Probe, home and /subscription |

Empty, loading, error and success states were not observed on the public pages and are not described.

## 15. Motion & Easing

The probe read these transitions on 2026-09-30:

| Element | Transition |
|---|---|
| Hero call to action, secondary button | Longest transition 300ms (pseudo-layer opacity; fill and label colour) |
| Plan card | Longest transition 300ms (8px lift) |
| Playground tabs | `all 0s` (no animation) |

No easing curve was recorded, so none is given. The earlier duration and easing tables had no source and were removed.
