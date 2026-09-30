---
id: mildang
name: Milddang (I Hate Flying Bugs)
display_name_kr: 밀당 (아이헤이트플라잉버그스)
country: KR
category: education
homepage: "https://www.ihateflyingbugs.com/"
primary_color: "#32d7b4"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=ihateflyingbugs.com&sz=128"
verified: "2026-09-30"
added: "2026-07-02"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: corporate, url: "https://www.ihateflyingbugs.com/", inspected: "2026-09-30" }
    - { id: surface-2, kind: marketing, url: "https://www.mildang.kr/", inspected: "2026-09-30" }
    - { id: surface-3, kind: marketing, url: "https://www.mildang.kr/service/", inspected: "2026-09-30" }
    - { id: surface-4, kind: corporate, url: "https://www.ihateflyingbugs.com/mildang-pt/", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://www.ihateflyingbugs.com/", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://www.mildang.kr/", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://www.mildang.kr/service/", captured: "2026-09-30" }
    - { id: surface-surface-4, kind: product-surface, url: "https://www.ihateflyingbugs.com/mildang-pt/", captured: "2026-09-30" }
    - { id: mildang-probe-home, kind: product-surface, url: "https://www.mildang.kr/", captured: "2026-09-30" }
    - { id: mildang-probe-service, kind: product-surface, url: "https://www.mildang.kr/service/", captured: "2026-09-30" }
    - { id: mildang-blog, kind: official-doc, url: "https://blog.naver.com/mildangpt", captured: "2026-09-30" }
    - { id: pretendard-license, kind: license, url: "https://raw.githubusercontent.com/orioncactus/pretendard/main/LICENSE", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &cta { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"5\"]", captured: "2026-09-30" }
    "tokens.colors.on-primary": *cta
    "tokens.colors.action": &lead { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"6\"]", captured: "2026-09-30" }
    "tokens.colors.action-hover": &leadstate { surface_id: surface-3, source_id: mildang-probe-service, method: live-state-probe, selector: "a 무료 상담 신청하기 (260 x 60, rest bg rgb(32, 201, 167), fg rgb(255, 255, 255)): hover and pressed bg -> rgb(58, 215, 184) with transform translateY(-2px) after a 0.25s background and transform transition; focus (Tab #7) outline none -> rgb(0, 95, 204) auto 1px (browser default)", captured: "2026-09-30" }
    "tokens.colors.submit": &submit { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"9\"]", captured: "2026-09-30" }
    "tokens.colors.panel": &homesubmitstate { surface_id: surface-2, source_id: mildang-probe-home, method: live-state-probe, selector: "button 무료 상담 신청( CLICK ) (240 x 48, rest bg transparent, fg rgb(255, 255, 255)): ancestors up1 div.md-form-body and up2 form#md_form_info transparent, up3 div#md_form_inner bg rgb(35, 41, 82) with shadow rgba(0, 0, 0, 0.5) 0px 4px 16px 0px; hover: descendant span#submit_glow opacity 0.124781 -> 0.134975; pressed NO SETTLED CHANGE; focus (Tab #9) browser default ring", captured: "2026-09-30" }
    "tokens.colors.corporate-accent": &navhover { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"1\"]::state-hover", captured: "2026-09-30" }
    "tokens.colors.ink": &corpbody { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::#page-top", captured: "2026-09-30" }
    "tokens.colors.ink-product": &prodbody { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::body", captured: "2026-09-30" }
    "tokens.colors.heading-product": &h2svc { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h2", captured: "2026-09-30" }
    "tokens.colors.ink-black": &h2prod { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h2", captured: "2026-09-30" }
    "tokens.colors.slate": &leadmpt { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::p", captured: "2026-09-30" }
    "tokens.colors.nav-muted": &prodnav { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"1\"]", captured: "2026-09-30" }
    "tokens.colors.footer-muted": &footlink { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"12\"]", captured: "2026-09-30" }
    "tokens.colors.white": &herolink { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"5\"]", captured: "2026-09-30" }
    "tokens.colors.band": &band { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::p", captured: "2026-09-30" }
    "tokens.colors.hairline": &select { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"4\"]", captured: "2026-09-30" }
    "tokens.colors.field-border": &field { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"7\"]", captured: "2026-09-30" }
    "tokens.colors.accent-text": &eyebrowsvc { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::p", captured: "2026-09-30" }
    "tokens.typography.family.sans": *prodbody
    "tokens.typography.display.size": &h1corp { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::#hero-title", captured: "2026-09-30" }
    "tokens.typography.display.weight": *h1corp
    "tokens.typography.display.lineHeight": *h1corp
    "tokens.typography.display.tracking": *h1corp
    "tokens.typography.display.use": *h1corp
    "tokens.typography.display-service.size": &h1svc { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h1", captured: "2026-09-30" }
    "tokens.typography.display-service.weight": *h1svc
    "tokens.typography.display-service.lineHeight": *h1svc
    "tokens.typography.display-service.tracking": *h1svc
    "tokens.typography.display-service.use": *h1svc
    "tokens.typography.section.size": *h2svc
    "tokens.typography.section.weight": *h2svc
    "tokens.typography.section.lineHeight": *h2svc
    "tokens.typography.section.tracking": *h2svc
    "tokens.typography.section.use": *h2svc
    "tokens.typography.page-title.size": &h1mpt { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::h1", captured: "2026-09-30" }
    "tokens.typography.page-title.weight": *h1mpt
    "tokens.typography.page-title.lineHeight": *h1mpt
    "tokens.typography.page-title.tracking": *h1mpt
    "tokens.typography.page-title.use": *h1mpt
    "tokens.typography.review-title.size": *h2prod
    "tokens.typography.review-title.weight": *h2prod
    "tokens.typography.review-title.lineHeight": *h2prod
    "tokens.typography.review-title.tracking": *h2prod
    "tokens.typography.review-title.use": *h2prod
    "tokens.typography.hero-product.size": &h1prod { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h1", captured: "2026-09-30" }
    "tokens.typography.hero-product.weight": *h1prod
    "tokens.typography.hero-product.lineHeight": *h1prod
    "tokens.typography.hero-product.tracking": *h1prod
    "tokens.typography.hero-product.use": *h1prod
    "tokens.typography.card-title.size": &h3svc { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h3", captured: "2026-09-30" }
    "tokens.typography.card-title.weight": *h3svc
    "tokens.typography.card-title.tracking": *h3svc
    "tokens.typography.card-title.use": *h3svc
    "tokens.typography.hero-lead.size": &herodesc { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.hero-lead.weight": *herodesc
    "tokens.typography.hero-lead.lineHeight": *herodesc
    "tokens.typography.hero-lead.tracking": *herodesc
    "tokens.typography.hero-lead.use": *herodesc
    "tokens.typography.lead.size": &leadsvc { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::p", captured: "2026-09-30" }
    "tokens.typography.lead.weight": *leadsvc
    "tokens.typography.lead.lineHeight": *leadsvc
    "tokens.typography.lead.tracking": *leadsvc
    "tokens.typography.lead.use": *leadsvc
    "tokens.typography.lead-corporate.size": *leadmpt
    "tokens.typography.lead-corporate.weight": *leadmpt
    "tokens.typography.lead-corporate.lineHeight": *leadmpt
    "tokens.typography.lead-corporate.use": *leadmpt
    "tokens.typography.body.size": &bodysvc { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::p", captured: "2026-09-30" }
    "tokens.typography.body.weight": *bodysvc
    "tokens.typography.body.lineHeight": *bodysvc
    "tokens.typography.body.tracking": *bodysvc
    "tokens.typography.body.use": *bodysvc
    "tokens.typography.nav.size": &nav { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-09-30" }
    "tokens.typography.nav.weight": *nav
    "tokens.typography.nav.use": *nav
    "tokens.typography.nav-product.size": *prodnav
    "tokens.typography.nav-product.weight": *prodnav
    "tokens.typography.nav-product.use": *prodnav
    "tokens.typography.button.size": *cta
    "tokens.typography.button.weight": *cta
    "tokens.typography.button.use": *cta
    "tokens.typography.button-lg.size": *lead
    "tokens.typography.button-lg.weight": *lead
    "tokens.typography.button-lg.tracking": *lead
    "tokens.typography.button-lg.use": *lead
    "tokens.typography.eyebrow.size": &eyebrow { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.eyebrow.weight": *eyebrow
    "tokens.typography.eyebrow.lineHeight": *eyebrow
    "tokens.typography.eyebrow.tracking": *eyebrow
    "tokens.typography.eyebrow.use": *eyebrow
    "tokens.typography.eyebrow-service.size": *eyebrowsvc
    "tokens.typography.eyebrow-service.weight": *eyebrowsvc
    "tokens.typography.eyebrow-service.tracking": *eyebrowsvc
    "tokens.typography.eyebrow-service.use": *eyebrowsvc
    "tokens.typography.caption.size": &copyright { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.caption.weight": *copyright
    "tokens.typography.caption.lineHeight": *copyright
    "tokens.typography.caption.use": *copyright
    "tokens.spacing.cta-x": *cta
    "tokens.spacing.cta-lg-y": *lead
    "tokens.spacing.cta-lg-x": *lead
    "tokens.spacing.field-x": *field
    "tokens.spacing.card-y": &history { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::article", captured: "2026-09-30" }
    "tokens.spacing.card-inset": *history
    "tokens.rounded.link": *herolink
    "tokens.rounded.select": *select
    "tokens.rounded.field": *field
    "tokens.rounded.cta": *cta
    "tokens.rounded.card": &review { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::article", captured: "2026-09-30" }
    "tokens.components.header-cta.type": *cta
    "tokens.components.header-cta.bg": *cta
    "tokens.components.header-cta.fg": *cta
    "tokens.components.header-cta.radius": *cta
    "tokens.components.header-cta.padding": *cta
    "tokens.components.header-cta.height": *cta
    "tokens.components.header-cta.font": *cta
    "tokens.components.header-cta.shadow": *cta
    "tokens.components.header-cta.hover": &ctastate { surface_id: surface-2, source_id: mildang-probe-home, method: live-state-probe, selector: "a PT 신청하기 → (144.2 x 42, rest bg rgb(50, 215, 180), fg rgb(7, 17, 31)): hover and pressed fg rgb(7, 17, 31) -> rgb(255, 255, 255) on the link, its label and the arrow span, fill unchanged, after a color 0.18s transition; focus (Tab #6) outline none -> rgb(0, 95, 204) auto 1px (browser default); same result on /service/", captured: "2026-09-30" }
    "tokens.components.header-cta.pressed": *ctastate
    "tokens.components.header-cta.states": *ctastate
    "tokens.components.header-cta.use": *cta
    "tokens.components.lead-cta.type": *lead
    "tokens.components.lead-cta.bg": *lead
    "tokens.components.lead-cta.fg": *lead
    "tokens.components.lead-cta.radius": *lead
    "tokens.components.lead-cta.padding": *lead
    "tokens.components.lead-cta.height": *lead
    "tokens.components.lead-cta.font": *lead
    "tokens.components.lead-cta.hover": *leadstate
    "tokens.components.lead-cta.pressed": *leadstate
    "tokens.components.lead-cta.states": *leadstate
    "tokens.components.lead-cta.use": *lead
    "tokens.components.form-submit.type": *submit
    "tokens.components.form-submit.bg": *submit
    "tokens.components.form-submit.fg": *submit
    "tokens.components.form-submit.radius": *submit
    "tokens.components.form-submit.padding": *submit
    "tokens.components.form-submit.height": *submit
    "tokens.components.form-submit.font": *submit
    "tokens.components.form-submit.states": { surface_id: surface-3, source_id: mildang-probe-service, method: live-state-probe, selector: "button 무료 상담 신청( CLICK ) (200 x 54, rest bg rgb(22, 190, 168), fg rgb(255, 255, 255), transition all 0s): hover and pressed NO SETTLED CHANGE (unmeasured); focus (Tab #10) outline none -> rgb(0, 95, 204) auto 1px (browser default)", captured: "2026-09-30" }
    "tokens.components.form-submit.use": *submit
    "tokens.components.home-form-submit.type": &homesubmit { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"8\"]", captured: "2026-09-30" }
    "tokens.components.home-form-submit.bg": *homesubmit
    "tokens.components.home-form-submit.fg": *homesubmit
    "tokens.components.home-form-submit.radius": *homesubmit
    "tokens.components.home-form-submit.padding": *homesubmit
    "tokens.components.home-form-submit.height": *homesubmit
    "tokens.components.home-form-submit.font": *homesubmit
    "tokens.components.home-form-submit.hover": *homesubmitstate
    "tokens.components.home-form-submit.states": *homesubmitstate
    "tokens.components.home-form-submit.use": *homesubmit
    "tokens.components.lead-form-panel.type": *homesubmitstate
    "tokens.components.lead-form-panel.bg": *homesubmitstate
    "tokens.components.lead-form-panel.shadow": *homesubmitstate
    "tokens.components.lead-form-panel.use": *homesubmitstate
    "tokens.components.form-field.type": *field
    "tokens.components.form-field.bg": *field
    "tokens.components.form-field.fg": *field
    "tokens.components.form-field.border": *field
    "tokens.components.form-field.radius": *field
    "tokens.components.form-field.padding": *field
    "tokens.components.form-field.height": *field
    "tokens.components.form-field.font": *field
    "tokens.components.form-field.states": { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-interaction-capture=\"form-error-0-0\"]", captured: "2026-09-30" }
    "tokens.components.form-field.use": *field
    "tokens.components.home-form-field.type": &homefield { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"7\"]", captured: "2026-09-30" }
    "tokens.components.home-form-field.bg": *homefield
    "tokens.components.home-form-field.fg": *homefield
    "tokens.components.home-form-field.border": *homefield
    "tokens.components.home-form-field.radius": *homefield
    "tokens.components.home-form-field.padding": *homefield
    "tokens.components.home-form-field.height": *homefield
    "tokens.components.home-form-field.font": *homefield
    "tokens.components.home-form-field.states": { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-interaction-capture=\"form-error-0-1\"]", captured: "2026-09-30" }
    "tokens.components.home-form-field.use": *homefield
    "tokens.components.corporate-nav.type": *nav
    "tokens.components.corporate-nav.fg": *nav
    "tokens.components.corporate-nav.padding": *nav
    "tokens.components.corporate-nav.height": *nav
    "tokens.components.corporate-nav.font": *nav
    "tokens.components.corporate-nav.hover": *navhover
    "tokens.components.corporate-nav.pressed": { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"1\"]::state-pressed", captured: "2026-09-30" }
    "tokens.components.corporate-nav.states": *navhover
    "tokens.components.corporate-nav.use": *nav
    "tokens.components.language-select.type": *select
    "tokens.components.language-select.bg": *select
    "tokens.components.language-select.fg": *select
    "tokens.components.language-select.border": *select
    "tokens.components.language-select.radius": *select
    "tokens.components.language-select.padding": *select
    "tokens.components.language-select.height": *select
    "tokens.components.language-select.font": *select
    "tokens.components.language-select.hover": &selecthover { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"4\"]::state-hover", captured: "2026-09-30" }
    "tokens.components.language-select.pressed": { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"4\"]::state-pressed", captured: "2026-09-30" }
    "tokens.components.language-select.states": *selecthover
    "tokens.components.language-select.use": *select
    "tokens.components.hero-link.type": *herolink
    "tokens.components.hero-link.bg": *herolink
    "tokens.components.hero-link.fg": *herolink
    "tokens.components.hero-link.radius": *herolink
    "tokens.components.hero-link.padding": *herolink
    "tokens.components.hero-link.height": *herolink
    "tokens.components.hero-link.font": *herolink
    "tokens.components.hero-link.states": { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"5\"]::state-hover", captured: "2026-09-30" }
    "tokens.components.hero-link.use": *herolink
    "tokens.components.text-link.type": &textlink { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::[data-omd-capture=\"8\"]", captured: "2026-09-30" }
    "tokens.components.text-link.fg": *textlink
    "tokens.components.text-link.border": *textlink
    "tokens.components.text-link.padding": *textlink
    "tokens.components.text-link.height": *textlink
    "tokens.components.text-link.font": *textlink
    "tokens.components.text-link.hover": &textlinkhover { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::[data-omd-capture=\"8\"]::state-hover", captured: "2026-09-30" }
    "tokens.components.text-link.pressed": { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::[data-omd-capture=\"8\"]::state-pressed", captured: "2026-09-30" }
    "tokens.components.text-link.states": *textlinkhover
    "tokens.components.text-link.use": *textlink
    "tokens.components.service-subnav.type": &subnav { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::[data-omd-capture=\"5\"]", captured: "2026-09-30" }
    "tokens.components.service-subnav.fg": *subnav
    "tokens.components.service-subnav.height": *subnav
    "tokens.components.service-subnav.font": *subnav
    "tokens.components.service-subnav.selected": &subnavsel { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::[data-omd-capture=\"6\"]", captured: "2026-09-30" }
    "tokens.components.service-subnav.states": *subnavsel
    "tokens.components.service-subnav.use": *subnav
    "tokens.components.review-card.type": *review
    "tokens.components.review-card.bg": *review
    "tokens.components.review-card.radius": *review
    "tokens.components.review-card.shadow": *review
    "tokens.components.review-card.size": *review
    "tokens.components.review-card.use": *review
    "tokens.components.history-row.type": *history
    "tokens.components.history-row.fg": *history
    "tokens.components.history-row.border": *history
    "tokens.components.history-row.padding": *history
    "tokens.components.history-row.size": *history
    "tokens.components.history-row.use": *history
    "tokens.components.disclaimer-band.type": *band
    "tokens.components.disclaimer-band.bg": *band
    "tokens.components.disclaimer-band.fg": *band
    "tokens.components.disclaimer-band.padding": *band
    "tokens.components.disclaimer-band.font": *band
    "tokens.components.disclaimer-band.use": *band
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#32d7b4"
    on-primary: "#07111f"
    action: "#20c9a7"
    action-hover: "#3ad7b8"
    submit: "#16bea8"
    panel: "#232952"
    corporate-accent: "#0064ff"
    ink: "#15171c"
    ink-product: "#222222"
    heading-product: "#10212b"
    ink-black: "#000000"
    slate: "#666b76"
    nav-muted: "#aeb9c8"
    footer-muted: "#aeb2bd"
    white: "#ffffff"
    band: "#151520"
    hairline: "#e0e3e8"
    field-border: "#c6d5d8"
    accent-text: "#12a78a"
  typography:
    family: { sans: "Pretendard" }
    display: { size: 74, weight: 700, lineHeight: 1.22, tracking: -3.108, use: "Corporate hero on ihateflyingbugs.com (질 높은 교육, 모두의 기회로.), 90.28px line, in #ffffff over the hero backdrop" }
    display-service: { size: 51.84, weight: 900, lineHeight: 1.3, tracking: -1.296, use: "Hero of mildang.kr/service/ (좋은 교육의 기회가 환경에 좌우되지 않도록.), 67.392px line, in #ffffff" }
    section: { size: 51.84, weight: 700, lineHeight: 1.3, tracking: -1.296, use: "Section headings of mildang.kr/service/, 67.392px line, in #10212b on light bands and #ffffff on dark ones" }
    page-title: { size: 40, weight: 700, lineHeight: 1.35, tracking: -1.4, use: "Corporate 밀당PT page title (AI가 설계하고, 사람이 끝까지 함께합니다.), 54px line, in #15171c" }
    review-title: { size: 27, weight: 700, lineHeight: 1.41, tracking: -1.08, use: "Review card headlines on mildang.kr (사교육 하나 갈아탄 후 두 자매 모두 의대 합격!), 38px line, in #000000" }
    hero-product: { size: 22, weight: 800, lineHeight: 1.4, tracking: -0.44, use: "mildang.kr hero headline (중고등 공부, 뭘 시켜도 성적은 그대로?), 30.8px line, in #ffffff" }
    card-title: { size: 21, weight: 700, tracking: -0.525, use: "Card headings on mildang.kr/service/, normal line height, in #10212b" }
    hero-lead: { size: 18, weight: 400, lineHeight: 1.65, tracking: -0.18, use: "Corporate hero description, 29.7px line, white at 86% opacity" }
    lead: { size: 17, weight: 400, lineHeight: 1.8, tracking: -0.4, use: "Section leads on mildang.kr/service/, 30.6px line" }
    lead-corporate: { size: 17, weight: 400, lineHeight: 1.85, use: "Lead paragraph on the corporate 밀당PT page, 31.45px line, in #666b76" }
    body: { size: 15, weight: 400, lineHeight: 1.6, tracking: -0.4, use: "Card and feature copy on mildang.kr/service/, 24px line" }
    nav: { size: 15, weight: 700, use: "Corporate header navigation (회사소개, 사업소개, 뉴스룸), in #15171c" }
    nav-product: { size: 14, weight: 750, use: "mildang.kr header navigation (서비스, 커리큘럼, 학습후기, FAQ), in #aeb9c8 over the hero" }
    button: { size: 14, weight: 900, use: "Header PT 신청하기 → label" }
    button-lg: { size: 18, weight: 900, tracking: -0.4, use: "무료 상담 신청하기 label on mildang.kr/service/" }
    eyebrow: { size: 12, weight: 700, lineHeight: 1.5, tracking: 1.7, use: "Uppercase eyebrows on ihateflyingbugs.com (EDUCATION, FOR EVERYONE.), 18px line" }
    eyebrow-service: { size: 12, weight: 900, tracking: 1.8, use: "Uppercase eyebrows on mildang.kr/service/, in #12a78a on light bands" }
    caption: { size: 12, weight: 400, lineHeight: 1.9, use: "Corporate footer copyright, 22.8px line, in #8e929d" }
  spacing: { cta-x: 18, cta-lg-y: 18, cta-lg-x: 24, field-x: 12, card-y: 32, card-inset: 48 }
  rounded: { link: 3, select: 4, field: 7, cta: 9, card: 16 }
  components:
    header-cta: { type: button, bg: "#32d7b4", fg: "#07111f", radius: "9px", padding: "0px 18px", height: "42px", font: "14px / 900 Pretendard", shadow: "rgba(37, 216, 178, 0.15) 0px 8px 24px 0px", hover: "label #ffffff, fill stays #32d7b4", pressed: "label #ffffff, fill stays #32d7b4", states: "probe on both mildang.kr pages: hover and pressed turn the label white after a color 0.18s transition; focus draws only the browser default ring, so no brand focus style is declared", use: "PT 신청하기 → in the header of mildang.kr and /service/ at surface-2::[data-omd-capture=\"5\"], 144 x 42, linking to /shop/" }
    lead-cta: { type: button, bg: "#20c9a7", fg: "#ffffff", radius: "0px", padding: "18px 24px", height: "60px", font: "18px / 900 Pretendard, letter-spacing -0.4px", hover: "bg #3ad7b8, translateY(-2px)", pressed: "bg #3ad7b8, translateY(-2px)", states: "probe: hover and pressed settle on #3ad7b8 and lift 2px after a 0.25s background and transform transition; focus draws only the browser default ring", use: "무료 상담 신청하기 near the foot of mildang.kr/service/ at surface-3::[data-omd-capture=\"6\"], 260 x 60, jumping to the lead form" }
    form-submit: { type: button, bg: "#16bea8", fg: "#ffffff", radius: "7px", padding: "8px", height: "54px", font: "18px / 700 / 20.7px Pretendard", states: "probe: hover and pressed gave no settled reading, so they are unmeasured; focus draws only the browser default ring", use: "무료 상담 신청( CLICK ) submit of the lead form on mildang.kr/service/ at surface-3::[data-omd-capture=\"9\"], 200 x 54; never pressed or submitted" }
    home-form-submit: { type: button, bg: "transparent", fg: "#ffffff", radius: "3px", padding: "8px 16px", height: "48px", font: "20px / 700 Pretendard", hover: "glow layer span#submit_glow opacity 0.125 -> 0.135", states: "probe: hover raises the glow layer's opacity; pressed gave no settled reading (unmeasured); focus draws only the browser default ring", use: "무료 상담 신청( CLICK ) on the mildang.kr home lead form at surface-2::[data-omd-capture=\"8\"], 240 x 48; its own fill is transparent and it sits on the #232952 form panel" }
    lead-form-panel: { type: card, bg: "#232952", shadow: "rgba(0, 0, 0, 0.5) 0px 4px 16px 0px", use: "Navy panel (div#md_form_inner) that holds the mildang.kr home lead form, read as the third ancestor of its submit button by the probe" }
    form-field: { type: input, bg: "#ffffff", fg: "#092532", border: "1px solid #c6d5d8", radius: "7px", padding: "0px 12px", height: "54px", font: "14px / 400 Pretendard", states: "the collector's form-error pass re-read these fields with the same values as rest, so no field-level error style is declared", use: "Grade select and phone input of the lead form on mildang.kr/service/, 375 x 54" }
    home-form-field: { type: input, bg: "#ffffff", fg: "#000000", border: "1px solid #777777", radius: "3px", padding: "8px 12px", height: "48px", font: "16px / 400 Pretendard", states: "the collector's form-error pass re-read these fields with the same values as rest, so no field-level error style is declared", use: "Grade select and phone input of the lead form on the mildang.kr home, 418 x 48" }
    corporate-nav: { type: tab, fg: "#15171c", padding: "12px 0px", height: "42px", font: "15px / 700 Pretendard", hover: "fg #0064ff", pressed: "fg #0064ff", states: "bundle hover and pressed frames; focus not declared", use: "회사소개, 사업소개, 뉴스룸 in the ihateflyingbugs.com header at home::[data-omd-capture=\"1\"]" }
    language-select: { type: input, bg: "#ffffff", fg: "#15171c", border: "1px solid #e0e3e8", radius: "4px", padding: "0px 28px 0px 14px", height: "44px", font: "14px / 700 Pretendard", hover: "border #0064ff", pressed: "border #0064ff", states: "bundle hover and pressed frames; focus not declared", use: "언어 선택 (한국어, English, Español) in the corporate header, 116 x 44" }
    hero-link: { type: button, bg: "#ffffff", fg: "#111111", radius: "3px", padding: "15px 19px 15px 22px", height: "54px", font: "14px / 700 Pretendard", states: "the bundle's hover and pressed frames equal rest; the collector's focus frame is not used", use: "아이헤이트플라잉버그스 소개 ↗ on the corporate hero at home::[data-omd-capture=\"5\"], 246 x 54" }
    text-link: { type: button, fg: "#15171c", border: "0 0 1px solid #15171c", padding: "10px 0px", height: "43px", font: "14px / 700 / 22.4px Pretendard", hover: "fg and underline #0064ff", pressed: "fg and underline #0064ff", states: "bundle hover and pressed frames; focus not declared", use: "밀당PT 만나보기 ↗ on the corporate 밀당PT page, 138 x 43, opening mildang.kr in a new tab" }
    service-subnav: { type: tab, fg: "#666b76", height: "65px", font: "15px / 400 Pretendard", selected: "fg #0064ff at weight 700 (밀당PT on /mildang-pt/)", states: "selected variant read from rest values; no pointer frame", use: "스쿨PT, 밀당PT, AI 디지털교과서 sub-navigation on the corporate business pages" }
    review-card: { type: card, bg: "#ffffff", radius: "16px", shadow: "rgba(0, 0, 0, 0.12) 0px 5px 32px 0px", size: "316px x 426px", use: "Review carousel cards on the mildang.kr home (12 instances)" }
    history-row: { type: card, fg: "#10212b", border: "0 0 1px solid #10212b", padding: "32px 0px 32px 48px", size: "702px x 142px", use: "Ruled rows in the company-history section of mildang.kr/service/" }
    disclaimer-band: { type: card, bg: "#151520", fg: "#aaaaaa", padding: "16px 24px 32px", font: "12px / 400 Pretendard", use: "Full-width source disclaimer at the foot of the mildang.kr home" }
  components_harvested: true
---

# Design System Inspiration of Milddang (I Hate Flying Bugs)

## 1. Visual Theme & Atmosphere

밀당PT (Mildang PT) is the online one-to-one tutoring service for middle- and high-school students run by 아이헤이트플라잉버그스 (I Hate Flying Bugs Inc., IHFB), a Seoul education company. Its own history page tells the arc: in 2012 a small office in 연지동 began building technology to analyse education data; the team then ran online learning services, including one for civil-service exam candidates, learning how to keep students studying to the end online; and in 2019 it launched 밀당PT, which pairs AI with a teacher's management as one-to-one "온택트" learning. Today the company sits in 여의도 파크원 and describes the service as AI diagnosis, a personal study plan and four one-to-one management sessions a week, led by 퍼스널티처 it says it selects at a final pass rate of 3%. The team explains its name in one line: a team that dreamed of bug-free services became a team that solves education problems. The corporate site states the mission as "사람의 가능성에 기술을 더해 질 높은 교육 기회의 평등을 만들어갑니다" and lists three businesses: 스쿨PT, 밀당PT and AI 디지털교과서.

The brand now speaks in two visual registers on two sites. The corporate site, ihateflyingbugs.com, is sober and editorial: a 74px Pretendard Bold hero set in white over the hero backdrop, charcoal `#15171c` navigation that turns blue `#0064ff` on hover, ruled link rows, and a white hero link with a 3px corner. The product site, mildang.kr, is a long, high-energy sales page: a hero with a white headline and pale `#aeb9c8` navigation, a mint-teal `#32d7b4` 신청 pill in the header with its own teal glow, white review cards on a 16px radius with a soft shadow, and a navy `#232952` lead-form panel. Its company page, /service/, mixes dark and light bands with 51.84px headlines at weights 700 and 900, deep teal-grey `#10212b` text and teal eyebrows.

**Key Characteristics:**
- Mint teal as the product action colour: `#32d7b4` on the header 신청 pill, `#20c9a7` on the in-page 상담 action (hover `#3ad7b8`) and `#16bea8` on the form submit
- A corporate blue `#0064ff` that appears only on interaction and selection on ihateflyingbugs.com
- Pretendard everywhere, from 400 body to 900 headlines; large display sizes carry tight negative tracking (-3.108px at 74px, -1.296px at 51.84px)
- A product hero with pale navigation and white type; light bands in `#10212b` and teal-grey text on the company page
- Soft depth on the product site (review cards, the teal glow under the header pill, the navy form panel) and flat, ruled layouts on the corporate site

## Primary tasks

- Book a free consultation for a middle- or high-school student through the lead form.
- Start 밀당PT from the header 신청 button.
- Read student outcomes and reviews before deciding.
- Understand how AI diagnosis, a personal roadmap and 1:1 management fit together.
- Learn who runs the service and how long the company has worked on it.

## 2. Color Palette & Roles

Every token below was read on 2026-09-30 from four public, logged-out pages: ihateflyingbugs.com and its 밀당PT page (corporate), mildang.kr and mildang.kr/service/ (product marketing). Hover values come from the collector's frames or from the fixed keyboard probe. The two sites are separate evidence domains; each role says which one it comes from. The student app (student.mildang.kr) was not captured and no app value is claimed.

### Primary
- **Mildang Mint** (`#32d7b4`): The fill of PT 신청하기 →, the one action in the header of both mildang.kr pages (144 × 42, 9px radius, a teal glow `rgba(37, 216, 178, 0.15) 0px 8px 24px`). It is the primary because it is the product site's persistent primary action: starting 밀당PT is what every page asks for, in this colour, from the same place. On hover and press the label turns white and the fill stays.
- **On Primary** (`#07111f`): The navy-black label on the mint pill.

### Action family (product site)
- **Action Teal** (`#20c9a7`): Fill of 무료 상담 신청하기 near the foot of /service/ (260 × 60, square corners, white label).
- **Action Teal Hover** (`#3ad7b8`): Its settled hover and pressed fill, with a 2px lift.
- **Submit Teal** (`#16bea8`): Fill of the 무료 상담 신청( CLICK ) submit in the /service/ lead form (200 × 54, 7px radius).
- **Form Panel** (`#232952`): The navy panel that holds the home lead form. The home submit button has a transparent fill of its own and white text; the colour behind it is this panel.
- **Accent Text** (`#12a78a`): Uppercase eyebrows on the light bands of /service/.

### Corporate accent
- **IHFB Blue** (`#0064ff`): Hover and pressed colour of the corporate navigation, the ruled text links and the language select's border, and the selected item (밀당PT) of the business sub-navigation at weight 700. It is never a fill.

### Text
- **Ink** (`#15171c`): Corporate body, navigation and page titles.
- **Product Ink** (`#222222`): Default text of mildang.kr.
- **Heading Teal-Grey** (`#10212b`): Headlines, cards and rules on the light bands of /service/.
- **Black** (`#000000`): Review card headlines on mildang.kr.
- **Slate** (`#666b76`): The corporate 밀당PT lead paragraph and unselected sub-navigation.
- **Nav Muted** (`#aeb9c8`): mildang.kr header navigation over the hero.
- **Footer Muted** (`#aeb2bd`): Corporate footer links; the copyright line is `#8e929d`.

### Neutral & Surface
- **White** (`#ffffff`): The corporate hero link, review cards, form fields and white type on dark bands.
- **Band** (`#151520`): The full-width disclaimer band at the foot of the mildang.kr home (text `#aaaaaa`).
- **Hairline** (`#e0e3e8`): Border of the corporate language select.
- **Field Border** (`#c6d5d8`): Border of the /service/ lead-form fields (text `#092532`). The home form uses `#777777` borders with `#000000` text.

### Brand assets, not tokens
- Photography, illustrations and the logo were not measured, and no logo colour is claimed. The Partial record's product colours (`#00b29d` for Mildang PT, `#555dfa` for School PT, magenta `#cc3366`) no longer render on any captured page.

## 3. Typography Rules

### Font Family
- **Live surface use**: `Pretendard` (380 observed uses, `loaded / high`) on all four pages. ihateflyingbugs.com self-hosts it from `/assets/Pretendard-Regular.woff2` and `/assets/Pretendard-Bold.woff2`; mildang.kr self-hosts its own copies under `/assets/uploads/2022/06/` (Regular, Medium, Bold, ExtraBold and more). The corporate stack falls back to "Apple SD Gothic Neo", "Malgun Gothic"; the product stack to -apple-system, system-ui, "Apple SD Gothic Neo".
- **Official distributed font assets**: Pretendard is by Kil Hyung-jin (orioncactus). Its LICENSE, opened on 2026-09-30, reads "This Font Software is licensed under the SIL Open Font License, Version 1.1." The identification rests on the declared family name; the served files' name tables were not inspected.
- **Official product use**: no page opened this session names the company's typeface, so no statement of official use is made.
- **Declared only (no visible use)**: `DS-DIGI`, a digital-display face declared by @font-face on mildang.kr (`/assets/uploads/2024/05/DS-DIGI.woff2`) with 0 observed uses.
- **Unresolved**: none.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Observed on |
|------|------|------|--------|-------------|----------|-------------|
| Display | Pretendard | 74px | 700 | 90.28px (1.22) | -3.108px | Corporate hero, white |
| Display Service | Pretendard | 51.84px | 900 | 67.392px (1.3) | -1.296px | /service/ hero |
| Section | Pretendard | 51.84px | 700 | 67.392px (1.3) | -1.296px | /service/ section headings |
| Page Title | Pretendard | 40px | 700 | 54px (1.35) | -1.4px | Corporate 밀당PT page |
| Review Title | Pretendard | 27px | 700 | 38px (1.41) | -1.08px | mildang.kr review cards, `#000000` |
| Hero Product | Pretendard | 22px | 800 | 30.8px (1.4) | -0.44px | mildang.kr hero headline |
| Card Title | Pretendard | 21px | 700 | normal | -0.525px | /service/ cards, `#10212b` |
| Hero Lead | Pretendard | 18px | 400 | 29.7px (1.65) | -0.18px | Corporate hero description |
| Lead | Pretendard | 17px | 400 | 30.6px (1.8) | -0.4px | /service/ section leads |
| Lead Corporate | Pretendard | 17px | 400 | 31.45px (1.85) | normal | Corporate 밀당PT lead, `#666b76` |
| Body | Pretendard | 15px | 400 | 24px (1.6) | -0.4px | /service/ card copy |
| Nav | Pretendard | 15px | 700 | normal | normal | Corporate navigation |
| Nav Product | Pretendard | 14px | 750 | normal | normal | mildang.kr navigation |
| Button | Pretendard | 14px | 900 | normal | normal | Header PT 신청하기 → |
| Button Large | Pretendard | 18px | 900 | normal | -0.4px | 무료 상담 신청하기 |
| Eyebrow | Pretendard | 12px | 700 | 18px (1.5) | 1.7px | Corporate eyebrows |
| Eyebrow Service | Pretendard | 12px | 900 | normal | 1.8px | /service/ eyebrows, `#12a78a` |
| Caption | Pretendard | 12px | 400 | 22.8px (1.9) | normal | Corporate copyright |

### Principles
- **One family, a wide weight range**: Pretendard carries every role; the product site pushes to 750, 800 and 900 while the corporate site stays at 400 and 700.
- **Tight tracking at display sizes**: about -4% at 74px, -2.5% at 51.84px and -3.5% at 40px; body text on /service/ keeps a small -0.4px.
- **Spaced uppercase eyebrows**: 12px labels with +1.7px or +1.8px tracking introduce sections on both sites.

## 4. Component Stylings

### Buttons

**Header 신청 pill (primary)**
- Background: `#32d7b4`
- Text: `#07111f`
- Radius: 9px
- Padding: 0px 18px
- Height: 42px
- Font: 14px / 900 Pretendard
- Shadow: `rgba(37, 216, 178, 0.15) 0px 8px 24px 0px`
- Hover: label `#ffffff`, fill unchanged (color 0.18s)
- Pressed: label `#ffffff`, fill unchanged
- Focus: the browser's default ring only
- Use: PT 신청하기 → in the header of mildang.kr and /service/

**In-page consultation action**
- Background: `#20c9a7`
- Text: `#ffffff`
- Radius: 0px
- Padding: 18px 24px
- Height: 60px
- Font: 18px / 900 Pretendard, letter-spacing -0.4px
- Hover: background `#3ad7b8`, lifted 2px (0.25s background and transform)
- Pressed: background `#3ad7b8`, lifted 2px
- Focus: the browser's default ring only
- Use: 무료 상담 신청하기 near the foot of /service/

**Lead form submit (/service/)**
- Background: `#16bea8`
- Text: `#ffffff`
- Radius: 7px
- Padding: 8px
- Height: 54px
- Font: 18px / 700 / 20.7px Pretendard
- State: hover and pressed gave no settled probe reading; focus shows the browser's default ring
- Use: 무료 상담 신청( CLICK ) in the /service/ lead form

**Lead form submit (home)**
- Background: transparent, on the `#232952` form panel
- Text: `#ffffff`
- Radius: 3px
- Padding: 8px 16px
- Height: 48px
- Font: 20px / 700 Pretendard
- Hover: an inner glow layer brightens (opacity 0.125 to 0.135)
- Use: 무료 상담 신청( CLICK ) in the home lead form

**Corporate hero link**
- Background: `#ffffff`
- Text: `#111111`
- Radius: 3px
- Padding: 15px 19px 15px 22px
- Height: 54px
- Font: 14px / 700 Pretendard
- Use: 아이헤이트플라잉버그스 소개 ↗ on the corporate hero

**Ruled text link**
- Text: `#15171c`
- Border: 1px bottom rule in `#15171c`
- Padding: 10px 0px
- Height: 43px
- Font: 14px / 700 / 22.4px Pretendard
- Hover: text and rule `#0064ff`
- Use: 밀당PT 만나보기 ↗ on the corporate 밀당PT page

### Inputs & Forms

**Lead form field (/service/)**
- Background: `#ffffff`
- Text: `#092532`
- Border: 1px solid `#c6d5d8`
- Radius: 7px
- Padding: 0px 12px
- Height: 54px
- Font: 14px / 400 Pretendard
- Use: grade select and phone number field

**Lead form field (home)**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#777777`
- Radius: 3px
- Padding: 8px 12px
- Height: 48px
- Font: 16px / 400 Pretendard
- Use: grade select and phone number field

**Lead form panel (home)**
- Background: `#232952`
- Shadow: `rgba(0, 0, 0, 0.5) 0px 4px 16px 0px`
- Use: the navy panel around the home lead form

**Language select (corporate)**
- Background: `#ffffff`
- Text: `#15171c`
- Border: 1px solid `#e0e3e8`
- Radius: 4px
- Padding: 0px 28px 0px 14px
- Height: 44px
- Font: 14px / 700 Pretendard
- Hover: border `#0064ff`
- Use: 언어 선택 in the corporate header

### Navigation

**Corporate navigation**
- Text: `#15171c`
- Padding: 12px 0px
- Height: 42px
- Font: 15px / 700 Pretendard
- Hover: text `#0064ff`
- Use: 회사소개, 사업소개, 뉴스룸

**Business sub-navigation (corporate)**
- Text: `#666b76`
- Height: 65px
- Font: 15px / 400 Pretendard
- Selected: text `#0064ff` at weight 700
- Use: 스쿨PT, 밀당PT, AI 디지털교과서

### Cards

**Review card**
- Background: `#ffffff`
- Radius: 16px
- Shadow: `rgba(0, 0, 0, 0.12) 0px 5px 32px 0px`
- Size: 316 × 426
- Use: review carousel on the mildang.kr home

**History row**
- Text: `#10212b`
- Border: 1px bottom rule in `#10212b`
- Padding: 32px 0px 32px 48px
- Size: 702 × 142
- Use: company-history rows on /service/

**Disclaimer band**
- Background: `#151520`
- Text: `#aaaaaa`
- Padding: 16px 24px 32px
- Font: 12px / 400 Pretendard
- Use: data-source disclaimer at the foot of the mildang.kr home

---

**Verified:** 2026-09-30 (deterministic collector capture of four public, logged-out pages on ihateflyingbugs.com and mildang.kr plus fixed keyboard-probe state reads and first-party context)
**Tier 1 sources:** https://www.mildang.kr/ ; https://www.mildang.kr/service/ ; https://www.ihateflyingbugs.com/ ; https://www.ihateflyingbugs.com/mildang-pt/ ; https://blog.naver.com/mildangpt
**Tier 2 sources:** getdesign.md/mildang (HTTP 200, 30,807 bytes; the name does not appear in the response) and styles.refero.design/?q=mildang (HTTP 200; the string occurs 4 times, not inspected further), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Observed paddings rather than a declared scale: header pill 0 18px, in-page action 18px 24px, field inset 12px, history rows 32px vertical with a 48px left inset, corporate hero link 15px 19px 15px 22px.

### Grid & Container
- Corporate pages use a 1216px content column (eyebrows, hero and the 밀당PT panel all measure 1216px wide) and three 384px link rows on the home.
- mildang.kr/service/ uses a 900px heading column and an 1180px content width; the review carousel on the home shows 316px cards.

### Whitespace Philosophy
- The corporate site is short and airy: a hero, three ruled links and a footer.
- The product site is long (about 10,900px on the home and 10,200px on /service/) and alternates dark and light bands.

### Border Radius Scale
- 3px: corporate hero link and home form fields
- 4px: corporate language select
- 7px: /service/ form fields and submit
- 9px: header 신청 pill
- 16px: review cards
- 0px: the in-page consultation action and ruled rows

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Corporate pages, ruled rows, navigation |
| Card | `rgba(0, 0, 0, 0.12) 0px 5px 32px 0px` | Review cards on mildang.kr |
| Glow | `rgba(37, 216, 178, 0.15) 0px 8px 24px 0px` | Header 신청 pill |
| Panel | `rgba(0, 0, 0, 0.5) 0px 4px 16px 0px` on `#232952` | Home lead form panel |

The corporate site is flat. The product site uses shadow sparingly and on purpose: a soft lift for review cards, a mint glow that makes the header pill read as lit, and a heavy shadow under the navy form panel.

## 7. Do's and Don'ts

### Do
- Use `#32d7b4` for the one primary action per view and set its label in `#07111f`
- Keep the teal family for actions: `#20c9a7` and `#16bea8` for consultation actions, `#3ad7b8` for hover
- Keep `#0064ff` for corporate interaction and selection states
- Set everything in Pretendard and tighten tracking on large headlines
- Label eyebrows in 12px uppercase with wide tracking

### Don't
- Don't use the corporate blue as a fill; it appears only as text and border colour
- Don't bring back `#00b29d`, `#555dfa` or `#cc3366`; none of them renders on the current sites
- Don't add a brand focus ring; the captured controls show only the browser default
- Don't mix the two sites' registers on one screen: the corporate pages are flat and ruled, the product pages dark and lit

## 8. Responsive Behavior

### Breakpoints
All four pages were captured at 1440px wide only; no breakpoint was measured.

### Touch Targets
- Header 신청 pill 42px tall, consultation action 60px, form fields 48px and 54px, corporate hero link 54px

### Collapsing Strategy
The mildang.kr header has a menu toggle button (`aria-controls="home-site-navigation"`), which suggests a collapsed navigation at narrow widths; it was not measured.

### Image Behavior
Not measured.

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action: `#32d7b4` with `#07111f` label
- Consultation action: `#20c9a7` (hover `#3ad7b8`); form submit `#16bea8`
- Lead form panel: `#232952`
- Corporate accent: `#0064ff`
- Ink: `#15171c` (corporate), `#222222` (product), `#10212b` (light bands)
- Muted: `#666b76`, `#aeb9c8`, `#aeb2bd`

### Example Component Prompts
- "Header CTA: #32d7b4 fill, #07111f label 'PT 신청하기 →' in Pretendard 14px weight 900, 42px tall, 9px radius, 0 18px padding, glow rgba(37, 216, 178, 0.15) 0 8px 24px; on hover the label turns #ffffff."
- "Consultation button: #20c9a7, white 18px/900 label with -0.4px tracking, 60px tall, square corners, 18px 24px padding; hover #3ad7b8 and lift 2px."
- "Corporate nav: Pretendard 15px/700 in #15171c, hover #0064ff; a white select with a 1px #e0e3e8 border and 4px radius."

### Iteration Guide
1. Mint `#32d7b4` is the single primary action
2. Teals are for actions only
3. Blue `#0064ff` marks interaction on the corporate site
4. Pretendard only; weight and tracking make the hierarchy
5. Review cards: white, 16px radius, soft 32px-blur shadow

## 10. Voice & Tone

The corporate voice is mission-first and plain; the product voice is direct and outcome-led, speaking to parents about grades and admissions.

| Context | Tone |
|---|---|
| Corporate mission | Short, declarative, bilingual. "EDUCATION, FOR EVERYONE." / "질 높은 교육, 모두의 기회로." |
| Product hero | A question aimed at a parent's worry. "중고등 공부, 뭘 시켜도 성적은 그대로?" |
| Outcomes | Concrete results as headlines. "내신 4등급에서 1등급 역전 + SKY 합격!" |
| Service explanation | Calm and structural. "AI가 방향을 찾으면, 사람이 변화를 완성합니다." |
| CTAs | Verb-noun. "PT 신청하기 →", "무료 상담 신청하기" |

**Voice samples (verbatim from pages opened on 2026-09-30):**
- "사람의 가능성에 기술을 더해 질 높은 교육 기회의 평등을 만들어갑니다." — ihateflyingbugs.com hero
- "AI가 설계하고, 사람이 끝까지 함께합니다." — corporate 밀당PT page
- "좋은 교육의 기회가 환경에 좌우되지 않도록." — mildang.kr/service/ hero
- "버그 없는 서비스를 꿈꾸던 팀은, 교육 문제를 해결하는 팀이 되었습니다." — mildang.kr/service/ history

## 11. Brand Narrative

아이헤이트플라잉버그스 began in 2012 in a small office in 연지동, developing technology to analyse education data. It went on to run online learning services, including one for civil-service exam candidates, and in 2019 launched 밀당PT, joining AI with a teacher's management as one-to-one 온택트 learning (mildang.kr/service/). The company now works from 여의도 파크원, and the product site's footer names it as 아이헤이트플라잉버그스 ㈜ (업체명 밀당PT, 대표자 박찬용, 서울 영등포).

The company frames 밀당PT with numbers on its own page: a completion rate that rose from 13% at the start of the service to 96% three years later, a 3% final pass rate for its 퍼스널티처, and four one-to-one management sessions a week. The corporate 밀당PT page describes AI-based personalised curricula plus real-time questions and management from an online teacher, across English, maths and Korean content. Beside 밀당PT the company runs 스쿨PT for schools and an AI 디지털교과서 business.

Its stated purpose is equal access to good education: "교육 환경의 차이를, 기술과 1:1 관리로 줄입니다" and "사는 곳과 소득이 배움의 한계가 되지 않는 세상". The name I Hate Flying Bugs comes from the team's origins in building bug-free software.

## 12. Principles

1. **Equal opportunity is the brief.** Both sites lead with it. *UI implication:* keep explanations plain and address parents and students directly.
2. **AI finds the direction, people complete the change.** The service pairs AI diagnosis with a human teacher. *UI implication:* show the system as steps (진단, 설계, 관리, 피드백) rather than as a black box.
3. **One primary action, in mint.** *UI implication:* the header 신청 pill is the only `#32d7b4` element; other actions use the neighbouring teals.
4. **Two registers.** *UI implication:* corporate pages stay flat and ruled with blue interaction; product pages use dark bands, teal actions and soft lift.

## 13. Personas

*Personas below are fictional archetypes informed by the audiences the pages address (parents of middle- and high-school students, students, teachers), not individual people.*

**이준호, 45, 인천.** A parent comparing tutoring options for a high-school student whose grades have stalled. Responds to concrete outcomes and wants a free consultation before paying.

**김서연, 16, 대구.** A student who studies better with a plan that adapts to her mistakes and a teacher who checks in several times a week.

**박지은, 33, 서울.** A 퍼스널티처 who manages students online and cares that the system hands her clear diagnostic data.

## 14. States

| State | Treatment |
|---|---|
| **Hover (header pill)** | Label turns `#ffffff`; fill stays `#32d7b4` (color 0.18s) |
| **Hover (consultation action)** | Fill `#3ad7b8` and a 2px lift (0.25s) |
| **Hover (corporate links, select)** | Text or border `#0064ff` |
| **Selected (business sub-navigation)** | Text `#0064ff` at weight 700 |
| **Focus** | Only the browser's default ring was observed; no brand focus style is declared |
| **Form error** | The collector's error pass found no change on the fields themselves; no error style is declared |

## 15. Motion & Easing

Only transitions read from the live pages are recorded:

- Header 신청 pill: `color 0.18s ease` on hover and press.
- Consultation action: `background, transform 0.25s ease` with a 2px lift on hover and press.
- Both lead form submits: `transition: all 0s`.

No durations or easing curves beyond these were measured, and none are declared.
