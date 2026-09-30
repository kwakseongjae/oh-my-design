---
id: airbridge
name: Airbridge
display_name_kr: "에어브릿지"
country: KR
category: marketing
homepage: "https://www.airbridge.io"
primary_color: "#155dfc"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=airbridge.io&sz=128"
verified: "2026-09-30"
added: "2026-06-26"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.airbridge.io/ko", inspected: "2026-09-30" }
    - { id: surface-2, kind: marketing, url: "https://www.airbridge.io/ko/pricing", inspected: "2026-09-30" }
    - { id: surface-3, kind: marketing, url: "https://www.airbridge.io/ko/product/deep-linking", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://www.airbridge.io/ko", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://www.airbridge.io/ko/pricing", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://www.airbridge.io/ko/product/deep-linking", captured: "2026-09-30" }
    - { id: airbridge-probe-home, kind: product-surface, url: "https://www.airbridge.io/ko", captured: "2026-09-30" }
    - { id: airbridge-probe-pricing, kind: product-surface, url: "https://www.airbridge.io/ko/pricing", captured: "2026-09-30" }
    - { id: ab180-about, kind: official-doc, url: "https://www.ab180.co/about-us", captured: "2026-09-30" }
    - { id: ab180-recruit, kind: official-doc, url: "https://recruit.ab180.co/", captured: "2026-09-30" }
    - { id: ab180-engineering, kind: official-doc, url: "https://engineering.ab180.co/", captured: "2026-09-30" }
    - { id: pretendard-license, kind: license, url: "https://raw.githubusercontent.com/orioncactus/pretendard/main/LICENSE", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &hero { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"11\"]", captured: "2026-09-30" }
    "tokens.colors.on-primary": *hero
    "tokens.colors.link": &link { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"21\"]", captured: "2026-09-30" }
    "tokens.colors.canvas": &body { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::body", captured: "2026-09-30" }
    "tokens.colors.ink": *body
    "tokens.colors.white": &nav { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-09-30" }
    "tokens.colors.muted": &lead { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.surface": &case { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"32\"]", captured: "2026-09-30" }
    "tokens.colors.surface-raised": &track { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"12\"]", captured: "2026-09-30" }
    "tokens.colors.ink-light": &lighth2 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.colors.body-light": &lightp { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.surface-light": &lightcard { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::div", captured: "2026-09-30" }
    "tokens.colors.input-ink": &input { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"52\"]", captured: "2026-09-30" }
    "tokens.typography.family.sans": &h1 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h1", captured: "2026-09-30" }
    "tokens.typography.display-hero.size": *h1
    "tokens.typography.display-hero.weight": *h1
    "tokens.typography.display-hero.lineHeight": *h1
    "tokens.typography.display-hero.tracking": *h1
    "tokens.typography.display-hero.use": *h1
    "tokens.typography.section.size": &h2 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.typography.section.weight": *h2
    "tokens.typography.section.lineHeight": *h2
    "tokens.typography.section.tracking": *h2
    "tokens.typography.section.use": *h2
    "tokens.typography.subsection.size": &dlh3 { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h3", captured: "2026-09-30" }
    "tokens.typography.subsection.weight": *dlh3
    "tokens.typography.subsection.lineHeight": *dlh3
    "tokens.typography.subsection.tracking": *dlh3
    "tokens.typography.subsection.use": *dlh3
    "tokens.typography.feature.size": &h3 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-09-30" }
    "tokens.typography.feature.weight": *h3
    "tokens.typography.feature.lineHeight": *h3
    "tokens.typography.feature.tracking": *h3
    "tokens.typography.feature.use": *h3
    "tokens.typography.case-title.size": &caseh3 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-09-30" }
    "tokens.typography.case-title.weight": *caseh3
    "tokens.typography.case-title.lineHeight": *caseh3
    "tokens.typography.case-title.tracking": *caseh3
    "tokens.typography.case-title.use": *caseh3
    "tokens.typography.lead.size": *lead
    "tokens.typography.lead.weight": *lead
    "tokens.typography.lead.lineHeight": *lead
    "tokens.typography.lead.use": *lead
    "tokens.typography.card-title.size": &cardh3 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-09-30" }
    "tokens.typography.card-title.weight": *cardh3
    "tokens.typography.card-title.lineHeight": *cardh3
    "tokens.typography.card-title.tracking": *cardh3
    "tokens.typography.card-title.use": *cardh3
    "tokens.typography.body-lg.size": &bodylg { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.body-lg.weight": *bodylg
    "tokens.typography.body-lg.lineHeight": *bodylg
    "tokens.typography.body-lg.use": *bodylg
    "tokens.typography.faq.size": &faq { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"36\"]", captured: "2026-09-30" }
    "tokens.typography.faq.weight": *faq
    "tokens.typography.faq.lineHeight": *faq
    "tokens.typography.faq.tracking": *faq
    "tokens.typography.faq.use": *faq
    "tokens.typography.body.size": &para { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.body.weight": *para
    "tokens.typography.body.lineHeight": *para
    "tokens.typography.body.use": *para
    "tokens.typography.cta.size": *hero
    "tokens.typography.cta.weight": *hero
    "tokens.typography.cta.lineHeight": *hero
    "tokens.typography.cta.use": *hero
    "tokens.typography.nav.size": *nav
    "tokens.typography.nav.weight": *nav
    "tokens.typography.nav.lineHeight": *nav
    "tokens.typography.nav.use": *nav
    "tokens.typography.eyebrow.size": &eyebrow { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.typography.eyebrow.weight": *eyebrow
    "tokens.typography.eyebrow.lineHeight": *eyebrow
    "tokens.typography.eyebrow.use": *eyebrow
    "tokens.typography.overline.size": &overline { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h4", captured: "2026-09-30" }
    "tokens.typography.overline.weight": *overline
    "tokens.typography.overline.lineHeight": *overline
    "tokens.typography.overline.tracking": *overline
    "tokens.typography.overline.use": *overline
    "tokens.typography.caption.size": &caption { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::p", captured: "2026-09-30" }
    "tokens.typography.caption.weight": *caption
    "tokens.typography.caption.lineHeight": *caption
    "tokens.typography.caption.use": *caption
    "tokens.spacing.cta-x": *hero
    "tokens.spacing.cta-wide-x": &closing { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"42\"]", captured: "2026-09-30" }
    "tokens.spacing.nav-y": *nav
    "tokens.spacing.nav-x": *nav
    "tokens.spacing.card-pad": &detailcard { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::div", captured: "2026-09-30" }
    "tokens.spacing.faq-y": *faq
    "tokens.spacing.band-y": &band { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::div", captured: "2026-09-30" }
    "tokens.spacing.band-x": *band
    "tokens.rounded.cta": *hero
    "tokens.rounded.nav": *nav
    "tokens.rounded.segment": *track
    "tokens.rounded.panel": &plancard { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::div", captured: "2026-09-30" }
    "tokens.rounded.card": *case
    "tokens.rounded.band": *band
    "tokens.components.primary-cta.type": *hero
    "tokens.components.primary-cta.bg": *hero
    "tokens.components.primary-cta.fg": *hero
    "tokens.components.primary-cta.radius": *hero
    "tokens.components.primary-cta.padding": *hero
    "tokens.components.primary-cta.height": *hero
    "tokens.components.primary-cta.font": *hero
    "tokens.components.primary-cta.shadow": *hero
    "tokens.components.primary-cta.hover": &heroprobe { surface_id: home, source_id: airbridge-probe-home, method: live-state-probe, selector: "a 데모 신청하기 (hero, 138.5 x 48): hover and pressed bg lab(44.0605 29.0279 -86.0352) -> oklab(0.545987 -0.0303796 -0.243091 / 0.9); pressed size 138.5x48 -> 135.7x47; focus (Tab #20) no change across self, 3 descendants and 3 ancestor levels", captured: "2026-09-30" }
    "tokens.components.primary-cta.pressed": *heroprobe
    "tokens.components.primary-cta.states": *heroprobe
    "tokens.components.primary-cta.use": *hero
    "tokens.components.header-cta.type": &hdr { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"9\"]", captured: "2026-09-30" }
    "tokens.components.header-cta.bg": *hdr
    "tokens.components.header-cta.fg": *hdr
    "tokens.components.header-cta.radius": *hdr
    "tokens.components.header-cta.padding": *hdr
    "tokens.components.header-cta.height": *hdr
    "tokens.components.header-cta.font": *hdr
    "tokens.components.header-cta.hover": &hdrprobe { surface_id: home, source_id: airbridge-probe-home, method: live-state-probe, selector: "a 데모 신청하기 (header, 100 x 32): hover and pressed bg lab(44.0605 29.0279 -86.0352) -> oklab(0.545987 -0.0303796 -0.243091 / 0.9); pressed size 100x32 -> 98x31.4; focus (Tab #18) box-shadow none -> oklab(0.545987 -0.0303796 -0.243091 / 0.5) 0px 0px 0px 3px", captured: "2026-09-30" }
    "tokens.components.header-cta.pressed": *hdrprobe
    "tokens.components.header-cta.focus": *hdrprobe
    "tokens.components.header-cta.states": *hdrprobe
    "tokens.components.header-cta.use": *hdr
    "tokens.components.plan-cta.type": &plancta { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"16\"]", captured: "2026-09-30" }
    "tokens.components.plan-cta.bg": *plancta
    "tokens.components.plan-cta.fg": *plancta
    "tokens.components.plan-cta.radius": *plancta
    "tokens.components.plan-cta.padding": *plancta
    "tokens.components.plan-cta.height": *plancta
    "tokens.components.plan-cta.font": *plancta
    "tokens.components.plan-cta.states": *plancta
    "tokens.components.plan-cta.use": *plancta
    "tokens.components.ghost-cta.type": &ghost { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"12\"]", captured: "2026-09-30" }
    "tokens.components.ghost-cta.bg": *ghost
    "tokens.components.ghost-cta.fg": *ghost
    "tokens.components.ghost-cta.border": *ghost
    "tokens.components.ghost-cta.radius": *ghost
    "tokens.components.ghost-cta.padding": *ghost
    "tokens.components.ghost-cta.height": *ghost
    "tokens.components.ghost-cta.font": *ghost
    "tokens.components.ghost-cta.hover": &ghostprobe { surface_id: home, source_id: airbridge-probe-home, method: live-state-probe, selector: "a 요금 확인하기 (139.5 x 48): hover and pressed bg oklab(0.999998 -0.00000980496 0.0000234246 / 0.036) -> / 0.06; pressed size 139.5x48 -> 136.7x47; focus (Tab #21) box-shadow adds oklab(0.545987 -0.0303796 -0.243091 / 0.5) 0px 0px 0px 3px", captured: "2026-09-30" }
    "tokens.components.ghost-cta.pressed": *ghostprobe
    "tokens.components.ghost-cta.focus": *ghostprobe
    "tokens.components.ghost-cta.states": *ghostprobe
    "tokens.components.ghost-cta.use": *ghost
    "tokens.components.light-outline-button.type": &lightbtn { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"27\"]", captured: "2026-09-30" }
    "tokens.components.light-outline-button.bg": *lightbtn
    "tokens.components.light-outline-button.fg": *lightbtn
    "tokens.components.light-outline-button.border": *lightbtn
    "tokens.components.light-outline-button.radius": *lightbtn
    "tokens.components.light-outline-button.padding": *lightbtn
    "tokens.components.light-outline-button.height": *lightbtn
    "tokens.components.light-outline-button.font": *lightbtn
    "tokens.components.light-outline-button.states": *lightbtn
    "tokens.components.light-outline-button.use": *lightbtn
    "tokens.components.text-link.type": *link
    "tokens.components.text-link.fg": *link
    "tokens.components.text-link.padding": *link
    "tokens.components.text-link.font": *link
    "tokens.components.text-link.hover": &linkprobe { surface_id: home, source_id: airbridge-probe-home, method: live-state-probe, selector: "a 자세히 보기 (326 x 36): hover and pressed fg lab(49.1195 18.4398 -79.7433) -> oklab(0.582989 -0.0409436 -0.225292 / 0.8) on self, label span and svg paths; focus (Tab #30) outline none -> oklab(0.930993 0.0000424981 0.0000185966 / 0.5) auto 1px", captured: "2026-09-30" }
    "tokens.components.text-link.pressed": *linkprobe
    "tokens.components.text-link.states": *linkprobe
    "tokens.components.text-link.use": *link
    "tokens.components.nav-item.type": *nav
    "tokens.components.nav-item.fg": *nav
    "tokens.components.nav-item.radius": *nav
    "tokens.components.nav-item.padding": *nav
    "tokens.components.nav-item.height": *nav
    "tokens.components.nav-item.font": *nav
    "tokens.components.nav-item.hover": &navprobe { surface_id: home, source_id: airbridge-probe-home, method: live-state-probe, selector: "button 기능 소개 (93.8 x 36): hover and pressed bg rgba(0, 0, 0, 0) -> oklab(0 0 0 / 0.06); focus (Tab #10) outline none -> oklab(0.545987 -0.0303796 -0.243091 / 0.5) auto 1px", captured: "2026-09-30" }
    "tokens.components.nav-item.pressed": *navprobe
    "tokens.components.nav-item.states": *navprobe
    "tokens.components.nav-item.use": *nav
    "tokens.components.plan-toggle.type": &taboff { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"14\"]", captured: "2026-09-30" }
    "tokens.components.plan-toggle.bg": *taboff
    "tokens.components.plan-toggle.fg": *taboff
    "tokens.components.plan-toggle.border": *taboff
    "tokens.components.plan-toggle.radius": *taboff
    "tokens.components.plan-toggle.padding": *taboff
    "tokens.components.plan-toggle.height": *taboff
    "tokens.components.plan-toggle.font": *taboff
    "tokens.components.plan-toggle.selected": { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"13\"]", captured: "2026-09-30" }
    "tokens.components.plan-toggle.hover": &tabprobe { surface_id: surface-2, source_id: airbridge-probe-pricing, method: live-state-probe, selector: "button[role=tab] 딥링크 플랜 (113.9 x 29): hover and pressed fg lab(63.1401 1.0041 -3.62693) -> lab(98.26 0 0), bg -> oklab(0.999998 -0.00000980496 0.0000234246 / 0.036), border 1px solid rgba(0, 0, 0, 0) -> lab(100 0 0 / 0.12); MMP 플랜 (selected): hover and pressed no change; focus (Tab #21) outline lab(44.0605 29.0279 -86.0352) solid 1px plus box-shadow oklab(0.545987 -0.0303796 -0.243091 / 0.5) 0px 0px 0px 3px", captured: "2026-09-30" }
    "tokens.components.plan-toggle.pressed": *tabprobe
    "tokens.components.plan-toggle.focus": *tabprobe
    "tokens.components.plan-toggle.states": *tabprobe
    "tokens.components.plan-toggle.use": *taboff
    "tokens.components.faq-item.type": *faq
    "tokens.components.faq-item.fg": *faq
    "tokens.components.faq-item.radius": *faq
    "tokens.components.faq-item.padding": *faq
    "tokens.components.faq-item.height": *faq
    "tokens.components.faq-item.font": *faq
    "tokens.components.faq-item.hover": &faqprobe { surface_id: surface-2, source_id: airbridge-probe-pricing, method: live-state-probe, selector: "button MAU(월간 활성 유저)란 무엇인가요? (702 x 76): hover and pressed fg lab(98.26 0 0) -> lab(44.0605 29.0279 -86.0352); ancestor up2 bg rgba(0, 0, 0, 0) -> oklab(0.545987 -0.0303796 -0.243091 / 0.02); focus (Tab #25) box-shadow adds oklab(0.545987 -0.0303796 -0.243091 / 0.5) 0px 0px 0px 3px", captured: "2026-09-30" }
    "tokens.components.faq-item.pressed": *faqprobe
    "tokens.components.faq-item.focus": *faqprobe
    "tokens.components.faq-item.states": *faqprobe
    "tokens.components.faq-item.use": *faq
    "tokens.components.email-input.type": *input
    "tokens.components.email-input.bg": *input
    "tokens.components.email-input.fg": *input
    "tokens.components.email-input.border": *input
    "tokens.components.email-input.radius": *input
    "tokens.components.email-input.padding": *input
    "tokens.components.email-input.height": *input
    "tokens.components.email-input.font": *input
    "tokens.components.email-input.states": { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-interaction-capture=\"form-error-0-0\"]", captured: "2026-09-30" }
    "tokens.components.email-input.use": *input
    "tokens.components.subscribe-button.type": &sub { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"53\"]", captured: "2026-09-30" }
    "tokens.components.subscribe-button.bg": *sub
    "tokens.components.subscribe-button.fg": *sub
    "tokens.components.subscribe-button.radius": *sub
    "tokens.components.subscribe-button.padding": *sub
    "tokens.components.subscribe-button.height": *sub
    "tokens.components.subscribe-button.font": *sub
    "tokens.components.subscribe-button.hover": &subprobe { surface_id: home, source_id: airbridge-probe-home, method: live-state-probe, selector: "button 구독하기 (80.4 x 36): hover and pressed bg lab(44.0605 29.0279 -86.0352) -> oklab(0.545987 -0.0303796 -0.243091 / 0.9); pressed size 80.4x36 -> 78.8x35.3; focus (Tab #61) outline none -> oklab(0.545987 -0.0303796 -0.243091 / 0.5) auto 1px", captured: "2026-09-30" }
    "tokens.components.subscribe-button.pressed": *subprobe
    "tokens.components.subscribe-button.states": *subprobe
    "tokens.components.subscribe-button.use": *sub
    "tokens.components.suggestion-chip.type": &chip { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"98\"]", captured: "2026-09-30" }
    "tokens.components.suggestion-chip.bg": *chip
    "tokens.components.suggestion-chip.fg": *chip
    "tokens.components.suggestion-chip.border": *chip
    "tokens.components.suggestion-chip.radius": *chip
    "tokens.components.suggestion-chip.padding": *chip
    "tokens.components.suggestion-chip.height": *chip
    "tokens.components.suggestion-chip.font": *chip
    "tokens.components.suggestion-chip.states": *chip
    "tokens.components.suggestion-chip.use": *chip
    "tokens.components.chat-launcher.type": &launcher { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"104\"]", captured: "2026-09-30" }
    "tokens.components.chat-launcher.bg": *launcher
    "tokens.components.chat-launcher.fg": *launcher
    "tokens.components.chat-launcher.radius": *launcher
    "tokens.components.chat-launcher.size": *launcher
    "tokens.components.chat-launcher.shadow": *launcher
    "tokens.components.chat-launcher.states": *launcher
    "tokens.components.chat-launcher.use": *launcher
    "tokens.components.case-card.type": *case
    "tokens.components.case-card.bg": *case
    "tokens.components.case-card.fg": *case
    "tokens.components.case-card.border": *case
    "tokens.components.case-card.radius": *case
    "tokens.components.case-card.size": *case
    "tokens.components.case-card.use": *case
    "tokens.components.light-card.type": *lightcard
    "tokens.components.light-card.bg": *lightcard
    "tokens.components.light-card.fg": *lightcard
    "tokens.components.light-card.border": *lightcard
    "tokens.components.light-card.radius": *lightcard
    "tokens.components.light-card.size": *lightcard
    "tokens.components.light-card.use": *lightcard
    "tokens.components.plan-card.type": *plancard
    "tokens.components.plan-card.bg": *plancard
    "tokens.components.plan-card.fg": *plancard
    "tokens.components.plan-card.border": *plancard
    "tokens.components.plan-card.radius": *plancard
    "tokens.components.plan-card.padding": *plancard
    "tokens.components.plan-card.size": *plancard
    "tokens.components.plan-card.use": *plancard
    "tokens.components.closing-band.type": *band
    "tokens.components.closing-band.bg": *band
    "tokens.components.closing-band.radius": *band
    "tokens.components.closing-band.padding": *band
    "tokens.components.closing-band.size": *band
    "tokens.components.closing-band.shadow": *band
    "tokens.components.closing-band.use": *band
    "tokens.components.ai-panel.type": &panel { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::div", captured: "2026-09-30" }
    "tokens.components.ai-panel.bg": *panel
    "tokens.components.ai-panel.size": *panel
    "tokens.components.ai-panel.use": *panel
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#155dfc"
    on-primary: "#fafafa"
    link: "#0970ff"
    canvas: "#0a0a0c"
    ink: "#fafafa"
    white: "#ffffff"
    muted: "#98989f"
    surface: "#18181b"
    surface-raised: "#262629"
    ink-light: "#020202"
    body-light: "#171716"
    surface-light: "#efefef"
    input-ink: "#101828"
  typography:
    family: { sans: "Pretendard Variable" }
    display-hero: { size: 72, weight: 600, lineHeight: 1.0, tracking: -1.08, use: "Hero headline on every page (광고 성과 측정, AI로 완성하세요 on home), 72px line; its colour computes transparent because the fill is a clipped background gradient" }
    section: { size: 48, weight: 700, lineHeight: 1.33, tracking: -0.72, use: "Section headings, 63.84px line; #fafafa on the dark canvas, #020202 in the light sections" }
    subsection: { size: 36, weight: 700, lineHeight: 1.33, tracking: -0.54, use: "Explainer headings on the deep-linking page (딥링크란?, 클릭에서 앱 화면까지), 47.88px line" }
    feature: { size: 26, weight: 700, lineHeight: 1.56, tracking: -0.39, use: "Feature tab headings on home (통합 성과측정, 정밀한 분석), 40.44px line; the active item in #fafafa, the others in #98989f" }
    case-title: { size: 22, weight: 700, lineHeight: 1.5, tracking: -0.33, use: "Case-study card titles on home, 33px line" }
    lead: { size: 20, weight: 400, lineHeight: 1.4, use: "Hero subline under the headline, 28px line, in #98989f" }
    card-title: { size: 18, weight: 700, lineHeight: 1.5, tracking: -0.27, use: "Card and plan titles (더 정확한 어트리뷰션, vs. AppsFlyer), 27px line" }
    body-lg: { size: 18, weight: 400, lineHeight: 1.63, use: "Section intros and testimonial quotes, 29.25px line" }
    faq: { size: 18, weight: 500, lineHeight: 1.56, tracking: -0.18, use: "FAQ question rows, 28px line" }
    body: { size: 16, weight: 400, lineHeight: 1.63, use: "Card and feature descriptions, 26px line, #98989f on dark and #171716 on light" }
    cta: { size: 15, weight: 500, lineHeight: 1.5, use: "48px call-to-action labels (데모 신청하기, 요금 확인하기), 22.5px line" }
    nav: { size: 14, weight: 500, lineHeight: 1.43, use: "Header menu buttons, the header CTA, inline links and plan toggles, 20px line" }
    eyebrow: { size: 14, weight: 700, lineHeight: 1.43, use: "Section eyebrow (글로벌 스탠다드에 부합하는 MMP), 20px line, in #98989f" }
    overline: { size: 12, weight: 600, lineHeight: 1.33, tracking: 0.6, use: "Feature-group labels on the pricing page, 16px line, in #98989f" }
    caption: { size: 12, weight: 400, lineHeight: 1.33, use: "Footer company and copyright lines, 16px line, in #98989f" }
  spacing: { cta-x: 16, cta-wide-x: 28, nav-y: 8, nav-x: 12, card-pad: 20, faq-y: 24, band-y: 96, band-x: 32 }
  rounded: { cta: 8, nav: 10, segment: 12, panel: 14, card: 18, band: 26 }
  components:
    primary-cta: { type: button, bg: "#155dfc", fg: "#fafafa", radius: "8px", padding: "0px 16px", height: "48px", font: "15px / 500 / 22.5px Pretendard Variable", shadow: "0 0 0 1px rgba(21, 93, 252, 0.15), 0 2px 4px rgba(21, 93, 252, 0.1), 0 8px 24px rgba(21, 93, 252, 0.1)", hover: "bg #155dfc at 90% opacity", pressed: "bg #155dfc at 90% opacity and the button scales to about 98% (138.5 x 48 -> 135.7 x 47)", states: "probe on home: hover and pressed settle at 90% fill opacity after a 0.15s transition; focus (Tab #20) shows no change within the compared scope", use: "데모 신청하기 hero call-to-action on all three pages at home::[data-omd-capture=\"11\"], 138 x 48; the closing band repeats it at 158 x 48 with 8px 28px padding" }
    header-cta: { type: button, bg: "#155dfc", fg: "#fafafa", radius: "8px", padding: "0px 12px", height: "32px", font: "14px / 500 / 20px Pretendard Variable", hover: "bg #155dfc at 90% opacity", pressed: "bg #155dfc at 90% opacity and the button scales to about 98%", focus: "3px ring of #155dfc at 50% opacity (box-shadow 0 0 0 3px)", states: "probe on home: hover and pressed settle at 90% fill opacity; real-Tab focus (Tab #18) adds the 3px ring", use: "데모 신청하기 in the fixed header of every page at home::[data-omd-capture=\"9\"], 100 x 32" }
    plan-cta: { type: button, bg: "#155dfc", fg: "#fafafa", radius: "8px", padding: "8px 16px", height: "36px", font: "14px / 500 / 20px Pretendard Variable", states: "rest only: the pricing page's pseudo-state pass hit the collector's 90s step budget and the probe did not reach this link, so its states are unmeasured, not absent", use: "데모 신청하기 inside the two pricing-model cards on /ko/pricing at surface-2::[data-omd-capture=\"16\"], full card width 386 x 36" }
    ghost-cta: { type: button, bg: "rgba(255, 255, 255, 0.036)", fg: "#fafafa", border: "1px solid rgba(255, 255, 255, 0.12)", radius: "8px", padding: "0px 28px", height: "48px", font: "15px / 500 / 22.5px Pretendard Variable", hover: "bg rgba(255, 255, 255, 0.06)", pressed: "bg rgba(255, 255, 255, 0.06) and the button scales to about 98%", focus: "3px ring of #155dfc at 50% opacity (box-shadow 0 0 0 3px)", states: "probe on home and /ko/pricing: hover and pressed settle on the 6% white wash; real-Tab focus adds the 3px ring", use: "요금 확인하기 beside the hero call-to-action at home::[data-omd-capture=\"12\"] (139 x 48); 영업팀 문의하기 on /ko/pricing; a 40px version reads 더 많은 성공 사례 보기" }
    light-outline-button: { type: button, bg: "#ffffff", fg: "#020202", border: "1px solid #020202", radius: "8px", padding: "0px 16px", height: "40px", font: "14px / 500 / 20px Pretendard Variable", states: "rest only; the collector recorded no state frame for it and it was not probed", use: "자세히 보기 button in the light comparison section of home at home::[data-omd-capture=\"27\"], 130 x 40" }
    text-link: { type: button, fg: "#0970ff", padding: "16px 0px 0px", font: "14px / 500 / 20px Pretendard Variable", hover: "label and arrow #0970ff at 80% opacity", pressed: "label and arrow #0970ff at 80% opacity", states: "probe on home: hover and pressed settle at 80% after a 0.15s colour transition; focus (Tab #30) draws only the browser's auto-style outline, so no brand focus style is declared", use: "자세히 보기 links at the foot of the light-section cards on home at home::[data-omd-capture=\"21\"]" }
    nav-item: { type: tab, fg: "#ffffff", radius: "10px", padding: "8px 12px", height: "36px", font: "14px / 500 / 20px Pretendard Variable", hover: "bg rgba(0, 0, 0, 0.06)", pressed: "bg rgba(0, 0, 0, 0.06)", states: "probe on home: hover and pressed settle on a 6% black wash after a 0.3s transition; focus (Tab #10) draws the browser's auto-style outline tinted #155dfc at 50%, not an authored ring", use: "기능 소개, 솔루션 and 인사이트 menu buttons in the fixed header at home::[data-omd-capture=\"1\"]" }
    plan-toggle: { type: tab, bg: "transparent", fg: "#98989f", border: "1px solid transparent", radius: "10px", padding: "4px 24px", height: "29px", font: "14px / 500 / 20px Pretendard Variable", selected: "bg rgba(255, 255, 255, 0.036), fg #fafafa, border 1px solid rgba(255, 255, 255, 0.12), shadow 0 1px 3px rgba(0, 0, 0, 0.1)", hover: "the unselected toggle takes the selected look: fg #fafafa, bg rgba(255, 255, 255, 0.036), border rgba(255, 255, 255, 0.12)", pressed: "same as hover", focus: "1px solid #155dfc outline plus a 3px ring of #155dfc at 50% opacity", states: "probe on /ko/pricing: the selected toggle shows no hover or pressed change; focus on the selected toggle (Tab #21) draws the outline and ring; the unselected toggle was not reached by Tab, so its focus is unmeasured", use: "MMP 플랜 / 딥링크 플랜 switch on /ko/pricing, inside a #262629 track with 12px radius and 3px padding; unselected at surface-2::[data-omd-capture=\"14\"]" }
    faq-item: { type: button, fg: "#fafafa", radius: "10px", padding: "24px 0px", height: "76px", font: "18px / 500 / 28px Pretendard Variable, letter-spacing -0.18px", hover: "question turns #155dfc and the row behind it tints #155dfc at 2% opacity", pressed: "same as hover", focus: "3px ring of #155dfc at 50% opacity (box-shadow 0 0 0 3px)", states: "probe on /ko/pricing: hover and pressed settle after a 0.3s colour transition; real-Tab focus (Tab #25) adds the 3px ring", use: "FAQ rows on home and /ko/pricing (MAU(월간 활성 유저)란 무엇인가요?), 702 x 76" }
    email-input: { type: input, bg: "#ffffff", fg: "#101828", border: "1px solid #ffffff", radius: "10px 0px 0px 10px", padding: "0px 12px", height: "36px", font: "14px / 400 / 20px Pretendard Variable", states: "the collector's form-error pass on home and /ko/product/deep-linking recorded the same values as rest, so no error style is declared; focus is not declared from bundles", use: "회사 이메일 주소를 입력하세요. newsletter field in the footer of every page at home::[data-omd-capture=\"52\"], 304 x 36, joined to 구독하기" }
    subscribe-button: { type: button, bg: "#155dfc", fg: "#fafafa", radius: "0px 10px 10px 0px", padding: "0px 16px", height: "36px", font: "14px / 500 / 20px Pretendard Variable", hover: "bg #155dfc at 90% opacity", pressed: "bg #155dfc at 90% opacity and the button scales to about 98%", states: "probe on home: hover and pressed settle at 90% after a 0.15s transition; focus (Tab #61) draws the browser's auto-style outline tinted #155dfc at 50%, not an authored ring", use: "구독하기, joined to the right edge of the footer email field at home::[data-omd-capture=\"53\"], 80 x 36" }
    suggestion-chip: { type: button, bg: "rgba(21, 93, 252, 0.05)", fg: "#155dfc", border: "1px solid rgba(21, 93, 252, 0.2)", radius: "9999px (rounded-full, computes 3.35544e+07px)", padding: "6px 12px", height: "30px", font: "12px / 500 / 16px Pretendard Variable", states: "rest only; no state frame was recorded and the chips were not probed", use: "Prompt chips in the Airbridge AI panel (어떤 플랜이 맞을까요?, Airbridge 주요 기능이 뭐예요?) at home::[data-omd-capture=\"98\"]" }
    chat-launcher: { type: button, bg: "#155dfc", fg: "#fafafa", radius: "9999px (rounded-full, computes 3.35544e+07px)", size: "56px x 56px", shadow: "0 0 0 2px #0a0a0c, 0 0 0 4px rgba(21, 93, 252, 0.2), 0 10px 15px -3px rgba(21, 93, 252, 0.25), 0 4px 6px -4px rgba(21, 93, 252, 0.25)", states: "rest only; no state frame was recorded and it was not probed", use: "채팅 열기, fixed at the bottom right of every page at home::[data-omd-capture=\"104\"]" }
    case-card: { type: card, bg: "#18181b", fg: "#fafafa", border: "1px solid rgba(255, 255, 255, 0.08)", radius: "18px", size: "392px x 476px", use: "Case-study cards on home (후야호, 삼쩜삼, 퍼스트 디센던트) at home::[data-omd-capture=\"32\"]" }
    light-card: { type: card, bg: "#efefef", fg: "#020202", border: "1px solid rgba(232, 232, 232, 0.4)", radius: "18px", size: "392px x 191px", use: "Feature cards in the light comparison sections of home (더 정확한 어트리뷰션, 디퍼드 딥링킹), each ending in a 자세히 보기 link" }
    plan-card: { type: card, bg: "#18181b", fg: "#fafafa", border: "1px solid rgba(255, 255, 255, 0.08)", radius: "14px", padding: "24px 0px", size: "436px x 714px", use: "Pricing-model cards on /ko/pricing (월간 활성 유저(MAU) 기반, 어트리뷰티드 인스톨 기반), each with a full-width 데모 신청하기" }
    closing-band: { type: card, bg: "#18181b", radius: "26px", padding: "96px 32px", size: "1216px x 393px", shadow: "inset 0 0 60px oklch(0.65 0.1 236.24 / 0.5)", use: "Closing call-to-action band above the footer on all three pages, with the 158 x 48 데모 신청하기 and its ghost partner" }
    ai-panel: { type: dialog, bg: "rgba(10, 10, 12, 0.98)", size: "480px x 900px (fixed to the right edge)", use: "Airbridge AI side panel (role=dialog, Airbridge에 대해 무엇이든 물어보세요) with its prompt chips, a #18181b message field and a 32px send button" }
  components_harvested: true
---

# Design System Inspiration of Airbridge

## 1. Visual Theme & Atmosphere

Airbridge (에어브릿지) is the mobile measurement partner (MMP) built by AB180 (에이비일팔공), a Seoul martech and adtech company whose own name is its brand idea: "A에서 B까지. 가장 빠른 180도의 직선." — the straightest line from point A, struggling with user acquisition, to point B, sustainable growth. Airbridge measures which marketing drove installs and revenue across platforms, links users into the right app screen (deep linking) and guards against ad fraud. AB180's recruiting site calls the company "국내 1위 MMP" and Airbridge "전세계 유일의 Asia Based MMP" (2025).

The product site reads like an instrument panel. Every captured page opens on a near-black canvas (`#0a0a0c`) with off-white text (`#fafafa`) and a muted grey (`#98989f`) for sublines, eyebrows and inactive items. One saturated blue, `#155dfc`, carries every decisive action — 데모 신청하기 in the header, the hero and the closing band, 구독하기 in the footer, and the round 채팅 열기 launcher — and it is the colour of every authored focus ring. Mid-page, home switches to light comparison sections: headings in `#020202`, body copy in `#171716`, cards in `#efefef`, and 자세히 보기 links in a brighter link blue (`#0970ff`). The dark hero asserts seriousness; the light bands carry the commercial detail.

The current evolution is AI. The hero now reads "광고 성과 측정, AI로 완성하세요", an Airbridge AI side panel with prompt chips sits on every page, and AB180 describes itself as building "the AI stack for full-funnel growth" — with Airflux, an AI monetization agent for games, beside Airbridge and its DeepLink plan.

Type is **Pretendard Variable** throughout, with no display/body split: a 72px / 600 hero with -1.08px tracking and a clipped gradient fill, 48px / 700 section headings, 26px / 700 feature tabs, and 16px / 400 body copy on a 26px line. Geometry is soft-square: 8px on calls-to-action, 10px on menu buttons, toggles and FAQ rows, 14px on pricing cards and 18px on content cards.

**Key Characteristics:**
- Dark canvas `#0a0a0c` with `#fafafa` text and `#98989f` secondary text
- One action blue, `#155dfc`, for every primary call-to-action and every authored focus ring
- Light comparison bands inside home: `#020202` headings, `#171716` copy, `#efefef` cards, `#0970ff` links
- Pretendard Variable for every role; hierarchy by size and weight
- Hero headline filled from a clipped gradient; its computed colour is transparent
- Translucent white washes for secondary actions and selected toggles, not solid greys
- A soft blue glow on the hero call-to-action; otherwise mostly flat surfaces
- An AI side panel and launcher on every page, in the same blue

## Primary tasks

- Measure which marketing actually drove installs and revenue
- Compare Airbridge against other measurement partners before choosing one
- Choose between the MAU-based and attributed-install pricing models
- Look up what a pricing term like MAU means
- Ask the Airbridge AI panel a product question before booking a demo

## 2. Color Palette & Roles

### Primary
- **Airbridge Blue** (`#155dfc`): the primary. The site's own stylesheet names it: `.dark { --primary: #155dfc }`. It fills 20 captured backgrounds across all three pages — the header 데모 신청하기 (100 × 32), the hero 데모 신청하기 (138 × 48), the closing-band 데모 신청하기 (158 × 48), the plan-card 데모 신청하기 (386 × 36), 구독하기, 채팅 열기 and the AI panel's send button. It also turns the FAQ question label on hover and tints every authored focus ring (a 3px ring at 50% opacity). It is the primary because it is the one colour the product renders in its primary action role on every page; hover and pressed only lower its opacity to 90%.
- **On Primary** (`#fafafa`): the label colour on every blue action.
- **Link Blue** (`#0970ff`): the light theme's `--primary` (`:root { --primary: #0970ff }`), rendered only on 자세히 보기 links inside the light comparison sections. On hover it drops to 80% opacity.

### Dark surfaces
- **Canvas** (`#0a0a0c`): page background of all three pages (`.dark --background`).
- **Surface** (`#18181b`): case-study cards, pricing-model cards, the closing band and the AI panel's message field (`.dark --card`).
- **Surface Raised** (`#262629`): the track behind the MMP 플랜 / 딥링크 플랜 toggle (`.dark --secondary`).

### Text on dark
- **Ink** (`#fafafa`): headings, body and button labels (`.dark --foreground`).
- **White** (`#ffffff`): header menu labels.
- **Muted** (`#98989f`): hero sublines, eyebrows, inactive feature tabs, the unselected toggle and footer lines (`.dark --muted-foreground`).

### Light sections
- **Ink Light** (`#020202`): headings and outlined-button labels in the light comparison sections.
- **Body Light** (`#171716`): copy in those sections.
- **Surface Light** (`#efefef`): the light feature cards.
- **Input Ink** (`#101828`): the text colour of the white footer email field.

### Translucent layers (prose only, not tokens)
- Secondary actions and the selected toggle: `rgba(255, 255, 255, 0.036)` fill with a `rgba(255, 255, 255, 0.12)` border; hover 6%.
- Menu hover: `rgba(0, 0, 0, 0.06)`.
- Default hairline on dark: `rgba(255, 255, 255, 0.08)`; light cards: `rgba(232, 232, 232, 0.4)`.
- Prompt chips: `#155dfc` at 5% fill and 20% border.

### Declared but not rendered
The stylesheet also declares chart colours (`--chart-1` to `--chart-5`, among them a mint `#7eedb8`) and light-theme `--secondary`, `--muted` and `--accent` blues. None of them rendered on the captured pages, so none is a token here.

## 3. Typography Rules

### Font Family
- **All text**: `Pretendard Variable` (fallback `Pretendard`, then the system stack). 814 observed uses across headings, body, buttons, inputs, tabs and the dialog.

### Font evidence
- **Live surface use:** Pretendard Variable — loaded, served as dynamic-subset WOFF2 from `cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/web/variable/woff2-dynamic-subset/`.
- **Official distributed font assets:** Pretendard is distributed by Kil Hyung-jin under the SIL Open Font License 1.1 (the project's LICENSE file). Airbridge serves the public jsDelivr build; it does not ship its own face.
- **Official product use:** no Airbridge or AB180 page opened names its typeface; not claimed.
- **Declared only:** Geist, Inclusive Sans and Inter (each with a Fallback face) are declared in the stylesheet with 0 observed uses. Do not use them as Airbridge fonts.

### Hierarchy

| Role | Size | Weight | Line height | Tracking | Use |
|------|------|--------|-------------|----------|-----|
| Display hero | 72px | 600 | 72px (1.0) | -1.08px | Page heroes; gradient fill |
| Section | 48px | 700 | 63.84px (1.33) | -0.72px | Section headings, dark and light |
| Subsection | 36px | 700 | 47.88px (1.33) | -0.54px | Deep-linking explainers |
| Feature | 26px | 700 | 40.44px (1.56) | -0.39px | Feature tabs on home |
| Case title | 22px | 700 | 33px (1.5) | -0.33px | Case-study cards |
| Lead | 20px | 400 | 28px (1.4) | normal | Hero sublines, `#98989f` |
| Card title | 18px | 700 | 27px (1.5) | -0.27px | Card and plan titles |
| Body large | 18px | 400 | 29.25px (1.63) | normal | Section intros, quotes |
| FAQ | 18px | 500 | 28px (1.56) | -0.18px | FAQ questions |
| Body | 16px | 400 | 26px (1.63) | normal | Descriptions |
| CTA | 15px | 500 | 22.5px (1.5) | normal | 48px action labels |
| Nav | 14px | 500 | 20px (1.43) | normal | Menu, header CTA, links, toggles |
| Eyebrow | 14px | 700 | 20px (1.43) | normal | Section eyebrows, `#98989f` |
| Overline | 12px | 600 | 16px (1.33) | 0.6px | Pricing feature-group labels |
| Caption | 12px | 400 | 16px (1.33) | normal | Footer lines |

### Principles
- **One family, weight-driven hierarchy.** Headings step from 700 (sections) to 600 (the hero) and 500 (actions); copy is 400.
- **Tracking tightens with size.** About -1.5% of the size on headings (-1.08px at 72px, -0.72px at 48px, -0.39px at 26px); body and action text stay at normal tracking. Only the small overline tracks out (+0.6px).
- **Generous reading lines.** Body copy sits on a 26px line at 16px and 29.25px at 18px.

## 4. Component Stylings

### Buttons

**Primary call-to-action**
- Background: `#155dfc`
- Text: `#fafafa`
- Radius: 8px
- Padding: 0px 16px
- Height: 48px
- Font: 15px / 500 / 22.5px Pretendard Variable
- Shadow: `0 0 0 1px rgba(21, 93, 252, 0.15), 0 2px 4px rgba(21, 93, 252, 0.1), 0 8px 24px rgba(21, 93, 252, 0.1)`
- Hover: fill at 90% opacity
- Pressed: fill at 90% opacity, scaled to about 98%
- Focus: no change on the hero button (probe, Tab #20)
- Use: 데모 신청하기 in the hero of every page; the closing band repeats it at 158 × 48 with 8px 28px padding

**Header call-to-action**
- Background: `#155dfc`
- Text: `#fafafa`
- Radius: 8px
- Padding: 0px 12px
- Height: 32px
- Font: 14px / 500 / 20px
- Hover / pressed: fill at 90% opacity; pressed also scales to about 98%
- Focus: a 3px ring of `#155dfc` at 50% opacity
- Use: 데모 신청하기 in the fixed header

**Plan-card call-to-action**
- Background: `#155dfc`
- Text: `#fafafa`
- Radius: 8px
- Padding: 8px 16px
- Height: 36px (full card width, 386px)
- Font: 14px / 500 / 20px
- States: unmeasured (the pricing pseudo-state pass timed out and the probe did not reach it)

**Ghost call-to-action (on dark)**
- Background: `rgba(255, 255, 255, 0.036)`
- Text: `#fafafa`
- Border: 1px solid `rgba(255, 255, 255, 0.12)`
- Radius: 8px
- Padding: 0px 28px
- Height: 48px
- Font: 15px / 500 / 22.5px
- Hover / pressed: fill `rgba(255, 255, 255, 0.06)`; pressed scales to about 98%
- Focus: a 3px ring of `#155dfc` at 50% opacity
- Use: 요금 확인하기, 영업팀 문의하기; a 40px version reads 더 많은 성공 사례 보기

**Outlined button (light sections)**
- Background: `#ffffff`
- Text: `#020202`
- Border: 1px solid `#020202`
- Radius: 8px
- Padding: 0px 16px
- Height: 40px
- Font: 14px / 500 / 20px
- States: rest only
- Use: 자세히 보기 in the light comparison section of home

**Subscribe button**
- Background: `#155dfc`
- Text: `#fafafa`
- Radius: 0px 10px 10px 0px (joined to the email field)
- Padding: 0px 16px
- Height: 36px
- Font: 14px / 500 / 20px
- Hover / pressed: fill at 90% opacity; pressed scales to about 98%
- Focus: browser auto-style outline tinted `#155dfc`; no authored ring
- Use: 구독하기 in the footer of every page

**Chat launcher**
- Background: `#155dfc`
- Icon: `#fafafa`
- Shape: 56 × 56 circle
- Shadow: a 2px `#0a0a0c` gap, a 4px ring of `#155dfc` at 20%, and soft `#155dfc` drop shadows at 25%
- States: rest only
- Use: 채팅 열기 (open chat), fixed at the bottom right of every page

**Prompt chip**
- Background: `rgba(21, 93, 252, 0.05)`
- Text: `#155dfc`
- Border: 1px solid `rgba(21, 93, 252, 0.2)`
- Radius: fully rounded
- Padding: 6px 12px
- Height: 30px
- Font: 12px / 500 / 16px
- Use: suggested questions in the AI panel (어떤 플랜이 맞을까요?, 이 기능이 정확히 뭐예요?)

### Links

**Inline link (light sections)**
- Text: `#0970ff`
- Font: 14px / 500 / 20px
- Padding: 16px 0px 0px (spaced from the card copy)
- Hover / pressed: label and arrow at 80% opacity
- Focus: browser auto-style outline only
- Use: 자세히 보기 at the foot of each light feature card

### Navigation & Tabs

**Header menu button**
- Text: `#ffffff`
- Radius: 10px
- Padding: 8px 12px
- Height: 36px
- Font: 14px / 500 / 20px
- Hover / pressed: `rgba(0, 0, 0, 0.06)` wash
- Focus: browser auto-style outline tinted `#155dfc`; no authored ring
- Use: 기능 소개, 솔루션, 인사이트

**Plan toggle**
- Track: `#262629`, 12px radius, 3px padding
- Unselected: transparent, `#98989f` label
- Selected: `rgba(255, 255, 255, 0.036)` fill, `#fafafa` label, 1px `rgba(255, 255, 255, 0.12)` border, a faint `0 1px 3px rgba(0, 0, 0, 0.1)` shadow
- Radius: 10px
- Padding: 4px 24px
- Height: 29px
- Font: 14px / 500 / 20px
- Hover / pressed: the unselected toggle takes the selected look; the selected one does not change
- Focus: 1px solid `#155dfc` outline plus a 3px ring of `#155dfc` at 50% opacity
- Use: MMP 플랜 / 딥링크 플랜 on /ko/pricing

### FAQ

**FAQ row**
- Text: `#fafafa`
- Radius: 10px
- Padding: 24px 0px
- Height: 76px
- Font: 18px / 500 / 28px, letter-spacing -0.18px
- Hover / pressed: question turns `#155dfc`; the row behind it tints `#155dfc` at 2%
- Focus: a 3px ring of `#155dfc` at 50% opacity
- Use: FAQ on home and /ko/pricing

### Inputs

**Footer email field**
- Background: `#ffffff`
- Text: `#101828`
- Border: 1px solid `#ffffff`
- Radius: 10px 0px 0px 10px
- Padding: 0px 12px
- Height: 36px (304px wide)
- Font: 14px / 400 / 20px
- Placeholder: 회사 이메일 주소를 입력하세요.
- States: a form-error pass recorded no change; no error style is declared

### Cards & Containers

**Case-study card**
- Background: `#18181b`
- Text: `#fafafa`
- Border: 1px solid `rgba(255, 255, 255, 0.08)`
- Radius: 18px
- Size: 392 × 476
- Use: 후야호, 삼쩜삼 and 퍼스트 디센던트 stories on home

**Light feature card**
- Background: `#efefef`
- Text: `#020202`
- Border: 1px solid `rgba(232, 232, 232, 0.4)`
- Radius: 18px
- Use: light comparison sections of home

**Pricing-model card**
- Background: `#18181b`
- Text: `#fafafa`
- Border: 1px solid `rgba(255, 255, 255, 0.08)`
- Radius: 14px
- Padding: 24px 0px
- Size: 436 × 714
- Use: 월간 활성 유저(MAU) 기반 and 어트리뷰티드 인스톨 기반 on /ko/pricing

**Closing band**
- Background: `#18181b`
- Radius: 26px
- Padding: 96px 32px
- Size: 1216 × 393
- Shadow: `inset 0 0 60px oklch(0.65 0.1 236.24 / 0.5)` — a soft blue inner glow
- Use: the last call-to-action block on every page

### Dialog

**Airbridge AI panel**
- Background: `rgba(10, 10, 12, 0.98)`
- Size: 480 × 900, fixed to the right edge (`role=dialog`)
- Contents: "Airbridge에 대해 무엇이든 물어보세요", prompt chips, a `#18181b` message field (14px radius, 8px padding) and a 32 × 32 `#155dfc` send button (12px radius, `disabled` at rest)

---

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out pages of airbridge.io plus fixed keyboard-probe state reads on home and /ko/pricing, reconciled against AB180's company, recruiting and engineering pages)
**Tier 1 sources:** https://www.airbridge.io/ko ; https://www.airbridge.io/ko/pricing ; https://www.airbridge.io/ko/product/deep-linking ; https://www.ab180.co/about-us ; https://recruit.ab180.co/ ; https://engineering.ab180.co/
**Tier 2 sources:** getdesign.md/airbridge (HTTP 200, the name does not appear in the response) and styles.refero.design/?q=airbridge (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Calls-to-action: 16px horizontal padding at 48px (hero), 28px at 158px wide (closing band), 12px at 32px (header)
- Menu buttons: 8px 12px; plan toggles: 4px 24px inside a 3px track
- FAQ rows: 24px vertical padding
- Detail cards on pricing: 20px padding
- Closing band: 96px vertical, 32px horizontal
- Most frequent spacing values in the capture: 8, 4, 12, 16 and 6px

### Grid & Container
- Content sits in a 1216px column at the 1440px viewport (the closing band spans it).
- Home: centred hero with a primary/ghost pair, a feature section with tab headings on the left (576px) and a visual on the right, light comparison sections with three 392px cards per row, case-study cards in threes, an FAQ block (702px rows inside a 768px panel), the closing band and the footer.
- /ko/pricing: a toggle, two 436px pricing-model cards side by side, feature groups in 596px detail cards and the FAQ.
- A fixed header (menu buttons plus the header call-to-action), a fixed 채팅 열기 launcher and the AI panel sit over every page.

### Whitespace Philosophy
- **Dark authority, light detail**: dark bands for claims and product, light bands for comparisons and plan logic.
- **Tone before lines**: surfaces separate by fill (`#0a0a0c` → `#18181b` → `#262629`) and faint white hairlines rather than heavy borders.

### Border Radius Scale
- 0px: the default (641 of the recorded radii)
- 8px: calls-to-action and the outlined button
- 10px: menu buttons, plan toggles, FAQ rows, the email field and subscribe button (joined)
- 12px: the toggle track and the AI send button
- 14px: pricing-model and detail cards, the AI message field
- 18px: case-study and feature cards
- 26px: the closing band
- Fully rounded: prompt chips and the chat launcher

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Headings, copy, menu, most cards |
| Tone | `#18181b` or `#262629` on `#0a0a0c` | Cards, band, toggle track |
| Wash | `rgba(255, 255, 255, 0.036)` fill + `rgba(255, 255, 255, 0.12)` border | Ghost actions, the selected toggle |
| Glow | Three blue layers from `rgba(21, 93, 252, 0.15)` 1px to 24px at 0.1 | The primary call-to-action |
| Ring | 3px `#155dfc` at 50% | Authored focus |
| Inner glow | `inset 0 0 60px` blue | The closing band |
| Overlay | `rgba(10, 10, 12, 0.98)` | The AI panel |

**Shadow Philosophy**: the pages are mostly flat. The one decorative shadow is the blue glow under the primary call-to-action, which makes the action colour spill slightly onto the canvas; the chat launcher gets a blue ring and drop shadow for the same reason, and the closing band an inner blue glow. Everything else separates by tone.

## 7. Do's and Don'ts

### Do
- Use `#155dfc` for the primary action on every page, with `#fafafa` labels
- Drop the blue to 90% opacity for hover and pressed, and scale pressed buttons to about 98%
- Use a 3px `#155dfc` ring at 50% for focus, adding a 1px solid `#155dfc` outline on toggles
- Use `#0970ff` only for inline links on light sections
- Put secondary actions on a translucent white wash (`rgba(255, 255, 255, 0.036)`) with a 12% white border
- Set everything in Pretendard Variable and tighten heading tracking to about -1.5% of the size
- Keep soft-square radii: 8px actions, 10px controls, 14px pricing cards, 18px content cards

### Don't
- Don't add a second saturated accent; the stylesheet's chart colours never render on the pages
- Don't use `#0970ff` for filled buttons; every filled action is `#155dfc`
- Don't render another font as Pretendard, and don't use the declared-only Geist, Inclusive Sans or Inter
- Don't use pure black for text in the light sections; use `#020202` and `#171716`
- Don't invent focus styles for menu buttons and inline links; they show only the browser's outline
- Don't make actions pill-shaped; only prompt chips and the launcher are fully rounded

## 8. Responsive Behavior

### Breakpoints
Only the 1440 × 900 desktop viewport was captured. Class names such as `sm:w-[480px]` and `sm:px-8` show that the pages restyle at Tailwind breakpoints; no breakpoint value was measured.

### Touch Targets
- Primary and ghost calls-to-action: 48px
- Chat launcher: 56 × 56
- FAQ rows: 76px
- Header menu buttons: 36px; subscribe button and email field: 36px; plan-card call-to-action: 36px
- Header call-to-action: 32px
- Plan toggles: 29px

### Collapsing Strategy
Not captured. The AI panel is `w-full` below the `sm` breakpoint and 480px above it, according to its classes.

### Image Behavior
Product visuals sit inside `#18181b` cards and the feature section without borders or shadows.

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action: `#155dfc`, label `#fafafa`; hover and pressed at 90% opacity
- Canvas `#0a0a0c`; cards `#18181b`; toggle track `#262629`
- Text on dark: `#fafafa`; menu `#ffffff`; secondary `#98989f`
- Light sections: headings `#020202`, copy `#171716`, cards `#efefef`, links `#0970ff`
- Footer email field text: `#101828`

### Example Component Prompts
- "Create a dark hero on `#0a0a0c`: a 72px Pretendard Variable headline at weight 600 with -1.08px tracking and a gradient fill, a 20px `#98989f` subline, then a 48px call-to-action (`#155dfc`, `#fafafa` 15px / 500 label, 8px radius, 0 16px padding, blue glow shadow; hover at 90% opacity) beside a ghost button (`rgba(255, 255, 255, 0.036)` fill, 1px `rgba(255, 255, 255, 0.12)` border, 0 28px padding)."
- "Build a pricing toggle: a `#262629` track with 12px radius and 3px padding holding two 29px tabs (10px radius, 4px 24px padding, 14px / 500). Selected: `rgba(255, 255, 255, 0.036)` fill, `#fafafa` label, 12% white border. Unselected: `#98989f` label. Focus: 1px solid `#155dfc` outline plus a 3px `#155dfc` ring at 50%."
- "Design a light feature card: `#efefef`, 18px radius, 1px `rgba(232, 232, 232, 0.4)` border; an 18px / 700 `#020202` title with -0.27px tracking, 16px `#171716` copy on a 26px line, and a 자세히 보기 link in `#0970ff` 14px / 500."
- "Create an FAQ row: 702px wide, 76px tall, 24px vertical padding, an 18px / 500 `#fafafa` question; on hover the question turns `#155dfc` and the row tints `#155dfc` at 2%."

### Iteration Guide
1. One blue (`#155dfc`) for every filled action and every authored focus ring
2. Dark canvas first; light bands only for comparisons and plan detail
3. Pretendard Variable everywhere; tight tracking on headings only
4. Translucent white washes for secondary actions, never a second colour
5. 8px actions, 10px controls, 18px cards
6. The only glow belongs to the primary call-to-action

---

## 10. Voice & Tone

Airbridge's voice is **declarative and evidence-led**: short imperatives that promise measurement, plain technical feature names, and claims tied to scope ("글로벌 스탠다드", "한국 데이터 서버"). It speaks to marketers as analysts and leans on its Korean home market.

| Context | Tone |
|---|---|
| Hero headlines | Imperative, outcome-framed. "광고 성과 측정, AI로 완성하세요." |
| Section headings | Plain promises. "사각지대 없는 데이터로 성과를 측정하세요." |
| Feature labels | Technical nouns. "통합 성과측정", "웹투앱 어트리뷰션", "유저 생애 가치 예측". |
| Actions | Direct, low-pressure. "데모 신청하기", "요금 확인하기", "자세히 보기". |
| Pricing and FAQ | Explanatory; decodes jargon. "MAU(월간 활성 유저)란 무엇인가요?" |
| Local positioning | Home-market confidence. "한국 마케팅 시장을 가장 잘 아는 MMP예요." |

**Voice samples (verbatim, opened 2026-09-30):**
- "크로스 플랫폼 성과 측정도 AI로 완성하세요 | Airbridge" — airbridge.io/ko page title.
- "광고 성과 측정, AI로 완성하세요" — home hero headline.
- "감이 아닌 데이터를 근거로 의사결정하세요" — home section heading.
- "한국 마케팅 시장을 가장 잘 아는 MMP예요" — home section heading.
- "클릭 한 번으로 원하는 앱 페이지로 유저를 연결하세요" — deep-linking page hero.
- "A에서 B까지. 가장 빠른 180도의 직선." — AB180 company page.

**Forbidden register**: hype superlatives without a figure, fear-based urgency, unexplained martech jargon, stacked exclamation marks.

## 11. Brand Narrative

AB180 (주식회사 에이비일팔공) describes itself as a martech and adtech company that provides full-stack AI solutions for data-driven business success — from deep linking and attribution to product analytics, customer engagement and intelligent monetization. Its name is the pitch: the fastest, straightest line from A, where user acquisition is hard, to B, sustainable growth. The company is headquartered at 테헤란로 419 in Seoul's Gangnam district, and Airbridge's own home page sells "한국 데이터 서버" and "한국 본사 전문가".

The company is led by co-CEOs 남성필 (Roi Nam) and 정헌재 (Hunjae Jung). Both were named among Korea's top software engineers in the 2015 Software Maestro programme; 남성필 has consulted on more than 1,000 apps and was named to Forbes Asia's 30 Under 30 (media, marketing and advertising) in 2020, and 정헌재 was previously AB180's CTO and CPO. The English company page says AB180 turns "10+ years of MarTech, AdTech, and AI/MLops mastery" into AI solutions for "600+ apps and games worldwide". The newsroom lists a ₩12 billion Series B led by Storm Ventures (2023), the MGS 2024 marketing conference, a G-STAR 2024 appearance and Airflux's AI game monetization results (2025).

The recruiting site tells the arc in its own words: seven years to become an official global MMP, then three to become Korea's number one — "글로벌 공식 MMP까지 7년, 그리고 3년만에 대한민국 1위 MMP". Its 2025 figures: over 600 clients at home and abroad, 31 countries, 160 million mobile devices tracked daily and 3.6 billion real-time events a day. The engineering blog opens with the scale it builds for: "10억 개 이상의 이벤트 데이터, 1억 대 이상의 디바이스, 100만 이상의 RPM". Culture, as the recruiting site states it, is about systems rather than blame: when something goes wrong, the team fixes the process instead of treating it as one person's mistake.

The design follows the positioning. A dark, instrument-like canvas frames measurement as a serious tool; one blue marks the next step; the light bands spell out comparisons against other MMPs and the plan logic; and the AI panel and launcher on every page show where the company says it is heading.

## 12. Principles

1. **Evidence over gut feel.** "감이 아닌 데이터를 근거로 의사결정하세요." *UI implication:* lead with the measurement claim and its scope; keep the chrome dark and quiet so figures and product views read first.
2. **One decisive action.** *UI implication:* `#155dfc` fills only the action that moves a buyer forward (a demo, a subscription, a question to the AI); everything secondary is a translucent wash.
3. **A to B, straight.** AB180's name promises the shortest path. *UI implication:* each page ends in the same closing band with the same call-to-action; there is one route to a demo.
4. **Explain the model.** *UI implication:* pricing gets a toggle, two cards and a FAQ that decodes terms like MAU — plain explanation over sales copy.
5. **Local strength, global standard.** *UI implication:* Korean copy and Korean-market claims sit beside "글로벌 스탠다드에 부합하는 MMP"; the system itself stays neutral. (An editorial reading of the captured pages, not an Airbridge statement.)

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Airbridge user segments (Korean app marketers, game and commerce growth teams, regional UA managers comparing MMPs), not individual people.*

**박지훈, 33, 서울.** Performance marketing lead at a mobile game studio. Needs cross-platform numbers across iOS and Android, and PC and console since the studio's latest launch; wants one measurement view instead of stitched spreadsheets.

**이서연, 29, 판교.** Growth analyst at a commerce app. Uses funnel and lifetime-value predictions to defend budget allocation; values that pricing and features are explained plainly.

**Marcus Lee, 38, Singapore.** Regional UA manager evaluating MMPs. Reads the vs. AppsFlyer, vs. Adjust and vs. Singular comparisons before booking a demo.

## 14. States

Only these states were observed on the captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Hover / pressed (blue actions)** | `#155dfc` → 90% opacity; pressed also scales to about 98% (probe on the header, hero and subscribe buttons). |
| **Hover / pressed (ghost actions)** | `rgba(255, 255, 255, 0.036)` → `rgba(255, 255, 255, 0.06)`; pressed scales to about 98%. |
| **Hover / pressed (menu buttons)** | Transparent → `rgba(0, 0, 0, 0.06)`. |
| **Hover / pressed (inline links)** | `#0970ff` → 80% opacity on the label and arrow. |
| **Hover / pressed (FAQ)** | Question `#fafafa` → `#155dfc`; the row tints `#155dfc` at 2%. |
| **Hover / pressed (plan toggle)** | The unselected toggle takes the selected look; the selected one does not change. |
| **Selected** | Plan toggle: `rgba(255, 255, 255, 0.036)` fill, `#fafafa` label, 12% white border. Feature tabs on home: the active heading in `#fafafa`, the others in `#98989f`. |
| **Focus (authored)** | A 3px `#155dfc` ring at 50% on the header call-to-action, ghost actions and FAQ rows; the selected toggle adds a 1px solid `#155dfc` outline. |
| **Focus (browser)** | Menu buttons, inline links and the subscribe button show only the browser's auto-style outline. The hero call-to-action showed no focus change. |
| **Disabled** | The AI panel's send button is `disabled` at rest with the same blue fill. |
| **Error** | A form-error pass on the footer email field recorded no visible change. |

Pricing-page bundle frames are missing because the collector's pseudo-state pass stalled there; the states above for /ko/pricing come from the probe. Loading, empty and success states were not captured and are not described.

## 15. Motion & Easing

The probe read the transitions the controls compute. Blue and ghost calls-to-action transition `all 0.15s cubic-bezier(0, 0, 0.2, 1)`; inline links and the subscribe button transition colour, background, border and SVG fill and stroke over 0.15s with `cubic-bezier(0.4, 0, 0.2, 1)`; plan toggles use `all 0.15s cubic-bezier(0.4, 0, 0.2, 1)`; header menu buttons `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`; FAQ rows colour and background over 0.3s with the same curve. Pressed buttons shrink to about 98%. Light-section cards reveal on scroll: when the probe's Tab brought one into view, its wrapper moved from `translateY(20px)`, opacity 0 and `blur(4px)` to no transform, opacity 1 and `blur(0px)`. Nothing else about motion was measured; honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/airbridge.json (capturedAt 2026-09-30T08:54:39Z), deterministic collector, 1440x900, logged out: airbridge.io/ko, /ko/pricing, /ko/product/deep-linking. The site emits lab()/oklab() colours; hex values are CIE Lab (D50) and OKLab conversions of the recorded values (the Lab conversion reproduces the June canvas readings #155dfc, #fafafa, #0a0a0c). States: fixed keyboard probe raws docs/research/2026-09-29-growth/raw/airbridge-states-{home,pricing}.json.
- §1, §10, §11 context: airbridge.io page copy; ab180.co/about-us and /en/about-us (positioning, name, leadership, newsroom, address); recruit.ab180.co (history line, 2025 figures, culture); engineering.ab180.co (scale line), opened 2026-09-30.
- §2 stylesheet variable names and §3 declared faces: a same-day headless read of the three pages (not used for tokens).
- §3 licence: the Pretendard LICENSE file on GitHub, opened 2026-09-30.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->
