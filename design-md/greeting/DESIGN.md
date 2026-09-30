---
id: greeting
name: Greeting
display_name_kr: 그리팅
country: KR
category: saas
homepage: "https://www.greetinghr.com"
primary_color: "#1890ff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=greetinghr.com&sz=128"
verified: "2026-09-30"
added: "2026-06-11"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.greetinghr.com/", inspected: "2026-09-30" }
    - { id: surface-2, kind: marketing, url: "https://www.greetinghr.com/pricing", inspected: "2026-09-30" }
    - { id: surface-3, kind: marketing, url: "https://www.greetinghr.com/why-greeting", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://www.greetinghr.com/", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://www.greetinghr.com/pricing", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://www.greetinghr.com/why-greeting", captured: "2026-09-30" }
    - { id: greeting-probe-home, kind: product-surface, url: "https://www.greetinghr.com/", captured: "2026-09-30" }
    - { id: greeting-probe-pricing, kind: product-surface, url: "https://www.greetinghr.com/pricing", captured: "2026-09-30" }
    - { id: doodlin-about, kind: official-doc, url: "https://www.doodlin.co.kr/ko/about", captured: "2026-09-30" }
    - { id: greeting-blog, kind: official-doc, url: "https://blog.greetinghr.com/", captured: "2026-09-30" }
    - { id: pretendard-license, kind: license, url: "https://raw.githubusercontent.com/orioncactus/pretendard/main/LICENSE", captured: "2026-09-30" }
    - { id: poppins-license, kind: license, url: "https://raw.githubusercontent.com/google/fonts/main/ofl/poppins/OFL.txt", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &cta { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-09-30" }
    "tokens.colors.on-primary": *cta
    "tokens.colors.action-dark": &dark { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"23\"]", captured: "2026-09-30" }
    "tokens.colors.heading": &hero { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.ink-soft": &section { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.secondary": &eyebrow { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h1", captured: "2026-09-30" }
    "tokens.colors.muted": &subline { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.faint": &featdesc { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.plan-ink": &plantext { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::p", captured: "2026-09-30" }
    "tokens.colors.link": &link { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"22\"]", captured: "2026-09-30" }
    "tokens.colors.white": &body { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::body", captured: "2026-09-30" }
    "tokens.colors.surface-soft": &soft { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"0\"]", captured: "2026-09-30" }
    "tokens.colors.surface": &navstate { surface_id: home, source_id: greeting-probe-home, method: live-state-probe, selector: "a 가격 in the header nav (51.7 x 36): hover and pressed bg rgba(252, 252, 252, 0) -> rgb(244, 244, 245); transition all 0s; focus (Tab #8) browser default ring rgb(0, 95, 204) auto 1px only", captured: "2026-09-30" }
    "tokens.colors.hairline": &quotestate { surface_id: surface-2, source_id: greeting-probe-pricing, method: live-state-probe, selector: "a 견적 문의하기 (218.7 x 50, rest bg rgb(15, 15, 15)): hover and pressed bg -> rgb(63, 63, 70) and ::after painted with border 1px solid rgb(228, 228, 231); transition all 0s; focus (Tab #4) browser default ring only", captured: "2026-09-30" }
    "tokens.typography.family.display": *hero
    "tokens.typography.family.text": &bodytext { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::p", captured: "2026-09-30" }
    "tokens.typography.family.body": *subline
    "tokens.typography.family.numeral": &numeral { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.display-hero.size": *hero
    "tokens.typography.display-hero.weight": *hero
    "tokens.typography.display-hero.lineHeight": *hero
    "tokens.typography.display-hero.tracking": *hero
    "tokens.typography.display-hero.use": *hero
    "tokens.typography.section.size": *section
    "tokens.typography.section.weight": *section
    "tokens.typography.section.lineHeight": *section
    "tokens.typography.section.tracking": *section
    "tokens.typography.section.use": *section
    "tokens.typography.band.size": &band { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.band.weight": *band
    "tokens.typography.band.lineHeight": *band
    "tokens.typography.band.tracking": *band
    "tokens.typography.band.use": *band
    "tokens.typography.statement.size": &statement { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.statement.weight": *statement
    "tokens.typography.statement.lineHeight": *statement
    "tokens.typography.statement.tracking": *statement
    "tokens.typography.statement.use": *statement
    "tokens.typography.feature.size": &feat { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-09-30" }
    "tokens.typography.feature.weight": *feat
    "tokens.typography.feature.lineHeight": *feat
    "tokens.typography.feature.tracking": *feat
    "tokens.typography.feature.use": *feat
    "tokens.typography.quote.size": &quote { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.quote.weight": *quote
    "tokens.typography.quote.lineHeight": *quote
    "tokens.typography.quote.tracking": *quote
    "tokens.typography.quote.use": *quote
    "tokens.typography.card-title.size": &cardtitle { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-09-30" }
    "tokens.typography.card-title.weight": *cardtitle
    "tokens.typography.card-title.lineHeight": *cardtitle
    "tokens.typography.card-title.tracking": *cardtitle
    "tokens.typography.card-title.use": *cardtitle
    "tokens.typography.subline.size": *subline
    "tokens.typography.subline.weight": *subline
    "tokens.typography.subline.lineHeight": *subline
    "tokens.typography.subline.use": *subline
    "tokens.typography.stat.size": &stat { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.stat.weight": *stat
    "tokens.typography.stat.lineHeight": *stat
    "tokens.typography.stat.use": *stat
    "tokens.typography.numeral.size": *numeral
    "tokens.typography.numeral.weight": *numeral
    "tokens.typography.numeral.lineHeight": *numeral
    "tokens.typography.numeral.tracking": *numeral
    "tokens.typography.numeral.use": *numeral
    "tokens.typography.eyebrow.size": *eyebrow
    "tokens.typography.eyebrow.weight": *eyebrow
    "tokens.typography.eyebrow.lineHeight": *eyebrow
    "tokens.typography.eyebrow.tracking": *eyebrow
    "tokens.typography.eyebrow.use": *eyebrow
    "tokens.typography.button.size": &btnlabel { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.button.weight": *btnlabel
    "tokens.typography.button.lineHeight": *btnlabel
    "tokens.typography.button.tracking": *btnlabel
    "tokens.typography.button.use": *btnlabel
    "tokens.typography.nav.size": &navlabel { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.nav.weight": *navlabel
    "tokens.typography.nav.lineHeight": *navlabel
    "tokens.typography.nav.use": *navlabel
    "tokens.typography.plan-body.size": *plantext
    "tokens.typography.plan-body.weight": *plantext
    "tokens.typography.plan-body.lineHeight": *plantext
    "tokens.typography.plan-body.use": *plantext
    "tokens.typography.body.size": *bodytext
    "tokens.typography.body.weight": *bodytext
    "tokens.typography.body.lineHeight": *bodytext
    "tokens.typography.body.use": *bodytext
    "tokens.typography.caption.size": &caption { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::p", captured: "2026-09-30" }
    "tokens.typography.caption.weight": *caption
    "tokens.typography.caption.lineHeight": *caption
    "tokens.typography.caption.use": *caption
    "tokens.typography.fine.size": &fine { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.fine.weight": *fine
    "tokens.typography.fine.lineHeight": *fine
    "tokens.typography.fine.use": *fine
    "tokens.spacing.cta-y": *dark
    "tokens.spacing.cta-x": *dark
    "tokens.spacing.nav-y": &nav { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"3\"]", captured: "2026-09-30" }
    "tokens.spacing.nav-x": *nav
    "tokens.spacing.pill-y": &pill { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"21\"]", captured: "2026-09-30" }
    "tokens.spacing.pill-x": *pill
    "tokens.spacing.bar-y": &bar { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"0\"]", captured: "2026-09-30" }
    "tokens.spacing.bar-x": *bar
    "tokens.rounded.button": *cta
    "tokens.rounded.dialog-button": &promo { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"87\"]", captured: "2026-09-30" }
    "tokens.rounded.card": &featcard { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"29\"]", captured: "2026-09-30" }
    "tokens.rounded.pill": *pill
    "tokens.rounded.switch": &billing { surface_id: surface-2, source_id: greeting-probe-pricing, method: live-state-probe, selector: "div 월간연간 (-10%) billing switch (175.4 x 49): rest bg rgb(244, 244, 245), radius 100px, padding 6px 8px; hover and pressed no change across self, 7 descendants and 3 ancestor levels; focus (Tab #1) browser default ring only", captured: "2026-09-30" }
    "tokens.components.header-demo-button.type": *cta
    "tokens.components.header-demo-button.bg": *cta
    "tokens.components.header-demo-button.fg": *cta
    "tokens.components.header-demo-button.radius": *cta
    "tokens.components.header-demo-button.padding": *cta
    "tokens.components.header-demo-button.height": *cta
    "tokens.components.header-demo-button.font": &ctalabel { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.components.header-demo-button.hover": &ctastate { surface_id: home, source_id: greeting-probe-home, method: live-state-probe, selector: "a 도입 문의 in the header (97.1 x 36, rest bg rgb(24, 144, 255)): hover and pressed bg -> rgba(44, 147, 242, 0.8); transition all 0s; focus (Tab #11) browser default ring rgb(0, 95, 204) auto 1px only", captured: "2026-09-30" }
    "tokens.components.header-demo-button.pressed": *ctastate
    "tokens.components.header-demo-button.states": *ctastate
    "tokens.components.header-demo-button.use": *cta
    "tokens.components.dark-button.type": *dark
    "tokens.components.dark-button.bg": *dark
    "tokens.components.dark-button.fg": *dark
    "tokens.components.dark-button.radius": *dark
    "tokens.components.dark-button.padding": *dark
    "tokens.components.dark-button.height": *dark
    "tokens.components.dark-button.font": *btnlabel
    "tokens.components.dark-button.hover": *quotestate
    "tokens.components.dark-button.pressed": *quotestate
    "tokens.components.dark-button.states": *quotestate
    "tokens.components.dark-button.use": *dark
    "tokens.components.light-button.type": &light { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"4\"]", captured: "2026-09-30" }
    "tokens.components.light-button.bg": *light
    "tokens.components.light-button.fg": *light
    "tokens.components.light-button.radius": *light
    "tokens.components.light-button.padding": *light
    "tokens.components.light-button.height": *light
    "tokens.components.light-button.font": *btnlabel
    "tokens.components.light-button.hover": &lightstate { surface_id: surface-2, source_id: greeting-probe-pricing, method: live-state-probe, selector: "a 도입 혜택 문의하기 (181 x 50, rest bg rgb(255, 255, 255)): hover and pressed bg -> rgb(244, 244, 245), label and arrow rgb(23, 23, 23) -> rgb(15, 15, 15); transition all 0s; focus (Tab #6) browser default ring only", captured: "2026-09-30" }
    "tokens.components.light-button.pressed": *lightstate
    "tokens.components.light-button.states": *lightstate
    "tokens.components.light-button.use": *light
    "tokens.components.soft-button.type": *soft
    "tokens.components.soft-button.bg": *soft
    "tokens.components.soft-button.fg": *soft
    "tokens.components.soft-button.radius": *soft
    "tokens.components.soft-button.padding": *soft
    "tokens.components.soft-button.height": *soft
    "tokens.components.soft-button.hover": &softstate { surface_id: surface-2, source_id: greeting-probe-pricing, method: live-state-probe, selector: "a 무료 체험 시작 (230.7 x 50, rest bg rgb(252, 252, 252)): hover and pressed bg -> rgb(244, 244, 245), label rgb(23, 23, 23) -> rgb(15, 15, 15); transition all 0s; focus (Tab #2) browser default ring only", captured: "2026-09-30" }
    "tokens.components.soft-button.pressed": *softstate
    "tokens.components.soft-button.states": *softstate
    "tokens.components.soft-button.use": *soft
    "tokens.components.nav-item.type": *nav
    "tokens.components.nav-item.fg": *nav
    "tokens.components.nav-item.radius": *nav
    "tokens.components.nav-item.padding": *nav
    "tokens.components.nav-item.height": *nav
    "tokens.components.nav-item.font": *navlabel
    "tokens.components.nav-item.hover": *navstate
    "tokens.components.nav-item.pressed": *navstate
    "tokens.components.nav-item.states": *navstate
    "tokens.components.nav-item.use": *nav
    "tokens.components.eyebrow-pill.type": *pill
    "tokens.components.eyebrow-pill.bg": *pill
    "tokens.components.eyebrow-pill.fg": *eyebrow
    "tokens.components.eyebrow-pill.radius": *pill
    "tokens.components.eyebrow-pill.padding": *pill
    "tokens.components.eyebrow-pill.height": *pill
    "tokens.components.eyebrow-pill.states": &pillstate { surface_id: home, source_id: greeting-probe-home, method: live-state-probe, selector: "a 국내 1위 채용 관리 솔루션 (198.4 x 32): hover and pressed UNMEASURED, pointer covered by the fixed promotion dialog div.framer-wbFZi (1440 x 1000); focus UNMEASURED, not reached within 99 Tab presses", captured: "2026-09-30" }
    "tokens.components.eyebrow-pill.use": *pill
    "tokens.components.dark-pill.type": &darkpill { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"21\"]", captured: "2026-09-30" }
    "tokens.components.dark-pill.bg": *darkpill
    "tokens.components.dark-pill.fg": &darkpilllabel { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h1", captured: "2026-09-30" }
    "tokens.components.dark-pill.radius": *darkpill
    "tokens.components.dark-pill.padding": *darkpill
    "tokens.components.dark-pill.use": *darkpill
    "tokens.components.billing-switch.type": *billing
    "tokens.components.billing-switch.bg": *billing
    "tokens.components.billing-switch.radius": *billing
    "tokens.components.billing-switch.padding": *billing
    "tokens.components.billing-switch.height": *billing
    "tokens.components.billing-switch.states": *billing
    "tokens.components.billing-switch.use": *billing
    "tokens.components.promo-dialog-button.type": *promo
    "tokens.components.promo-dialog-button.bg": *promo
    "tokens.components.promo-dialog-button.fg": *promo
    "tokens.components.promo-dialog-button.radius": *promo
    "tokens.components.promo-dialog-button.padding": *promo
    "tokens.components.promo-dialog-button.height": *promo
    "tokens.components.promo-dialog-button.font": &promolabel { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.components.promo-dialog-button.states": *promo
    "tokens.components.promo-dialog-button.use": *promo
    "tokens.components.feature-card.type": *featcard
    "tokens.components.feature-card.radius": *featcard
    "tokens.components.feature-card.padding": *featcard
    "tokens.components.feature-card.size": *featcard
    "tokens.components.feature-card.use": *featcard
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#1890ff"
    on-primary: "#ffffff"
    action-dark: "#0f0f0f"
    heading: "#27272a"
    ink-soft: "#171717"
    secondary: "#3f3f46"
    muted: "#71717a"
    faint: "#a1a1aa"
    plan-ink: "#09090b"
    link: "#0a58a1"
    white: "#ffffff"
    surface-soft: "#fcfcfc"
    surface: "#f4f4f5"
    hairline: "#e4e4e7"
  typography:
    family: { display: "Pretendard SemiBold", text: "Pretendard Medium", body: "Pretendard Regular", numeral: "Poppins" }
    display-hero: { size: 60, weight: 400, lineHeight: 1.2, tracking: -0.6, use: "Home hero headline (채용 관리를 넘어 채용 성공으로), Pretendard SemiBold face at computed weight 400, 72px line, in #27272a; the closing band repeats it in #ffffff" }
    section: { size: 48, weight: 400, lineHeight: 1.3, tracking: -0.48, use: "Section headlines on home and /pricing, Pretendard SemiBold face, 62.4px line, in #171717" }
    band: { size: 36, weight: 400, lineHeight: 1.2, tracking: -0.36, use: "Band headlines on home and plan prices on /pricing, Pretendard SemiBold face, 43.2px line, in #27272a" }
    statement: { size: 32, weight: 400, lineHeight: 1.4, tracking: -0.32, use: "Wide statement paragraph on home, Pretendard SemiBold face, 44.8px line, in #27272a" }
    feature: { size: 28, weight: 400, lineHeight: 1.4, tracking: -0.56, use: "Feature panel headings on home and /pricing, Pretendard SemiBold face, 39.2px line, in #27272a" }
    quote: { size: 24, weight: 400, lineHeight: 1.5, tracking: -0.24, use: "Customer quotes on home, Pretendard SemiBold face, 36px line, in #27272a" }
    card-title: { size: 20, weight: 400, lineHeight: 1.5, tracking: -0.4, use: "Feature list titles on home and plan names on /pricing, Pretendard SemiBold face, 30px line, in #27272a" }
    subline: { size: 20, weight: 400, lineHeight: 1.6, use: "Home hero subline, Pretendard Regular face, 32px line, in #71717a" }
    stat: { size: 96, weight: 400, lineHeight: 1, use: "White statistic figures in the proof band on home, Pretendard Medium face, 96px line" }
    numeral: { size: 174.851, weight: 400, lineHeight: 1, tracking: -8.74, use: "Oversized white Poppins numeral in the proof band on home, 174.851px line, letter-spacing -8.74254px; a 137.235px #0f0f0f instance sits further down" }
    eyebrow: { size: 16, weight: 400, lineHeight: 1, tracking: -0.16, use: "Eyebrow labels set as h1 and h2 (국내 1위 채용 관리 솔루션 in #3f3f46, section labels in #171717), Pretendard SemiBold face, 16px line" }
    button: { size: 16, weight: 400, lineHeight: 1, tracking: -0.32, use: "Labels of the 50px buttons (무료 체험하기, 도입 문의하기, 서비스 소개서 다운로드), Pretendard SemiBold face, 16px line" }
    nav: { size: 16, weight: 400, lineHeight: 1.5, use: "Header navigation labels, Pretendard SemiBold face, 24px line, in #171717" }
    plan-body: { size: 16, weight: 400, lineHeight: 1.8, use: "Plan feature lines on /pricing, Pretendard Regular face, 28.8px line, in #09090b" }
    body: { size: 14, weight: 400, lineHeight: 1.5, use: "Descriptions on /pricing and in the home footer, Pretendard Medium face, 21px line, in #71717a" }
    caption: { size: 12, weight: 400, lineHeight: 1.2, use: "Plan labels and feature notes on /pricing, Pretendard SemiBold face, 14.4px line, in #71717a" }
    fine: { size: 11, weight: 400, lineHeight: 1.4, use: "Footer legal line on home, Pretendard Regular face, 15.4px line, in #71717a" }
  spacing: { cta-y: 14, cta-x: 25, nav-y: 18, nav-x: 12, pill-y: 8, pill-x: 20, bar-y: 10, bar-x: 15 }
  rounded: { button: 4, dialog-button: 6, card: 16, pill: 50, switch: 100 }
  components:
    header-demo-button: { type: button, bg: "#1890ff", fg: "#ffffff", radius: "4px", padding: "5px 8px 5px 12px", height: "36px", font: "16px / 400 / 28.8px Pretendard SemiBold", hover: "bg rgba(44, 147, 242, 0.8)", pressed: "bg rgba(44, 147, 242, 0.8)", states: "probe on home: hover and pressed settle on rgba(44, 147, 242, 0.8) with transition all 0s; focus (Tab #11) draws only the browser default ring, so no brand focus style is declared", use: "도입 문의 at the right end of the header on all three captured pages (home::[data-omd-capture=\"10\"], 97 x 36)" }
    dark-button: { type: button, bg: "#0f0f0f", fg: "#ffffff", radius: "4px", padding: "14px 20px 14px 25px", height: "50px", font: "16px / 400 / 16px Pretendard SemiBold, letter-spacing -0.32px", hover: "bg #3f3f46 plus a 1px solid #e4e4e7 ::after border", pressed: "bg #3f3f46 plus a 1px solid #e4e4e7 ::after border", states: "measured on the /pricing instance 견적 문의하기 (transition all 0s); the home hero instance was covered by the promotion dialog, so its hover and pressed are unmeasured; focus draws only the browser default ring", use: "도입 문의하기 in the home hero (151 x 50) and 견적 문의하기 on the /pricing plan cards (219 x 50); a #171717 fill variant appears on the lower /pricing card" }
    light-button: { type: button, bg: "#ffffff", fg: "#171717", radius: "4px", padding: "14px 20px 14px 25px", height: "50px", font: "16px / 400 / 16px Pretendard SemiBold, letter-spacing -0.32px", hover: "bg #f4f4f5, label #0f0f0f", pressed: "bg #f4f4f5, label #0f0f0f", states: "measured on 도입 혜택 문의하기 (transition all 0s); focus draws only the browser default ring", use: "도입 혜택 문의하기 on /pricing (181 x 50); the same white button carries a #0f0f0f label on 서비스 소개서 다운로드 and 1:1 맞춤 상담받기 and a #3f3f46 label on the hero 무료 체험하기, whose states were not reached" }
    soft-button: { type: button, bg: "#fcfcfc", fg: "#171717", radius: "4px", padding: "14px 25px", height: "50px", hover: "bg #f4f4f5, label #0f0f0f", pressed: "bg #f4f4f5, label #0f0f0f", states: "measured on the first 무료 체험 시작 (transition all 0s); focus draws only the browser default ring", use: "무료 체험 시작 on the /pricing plan cards (231 x 50 and 244 x 50)" }
    nav-item: { type: tab, fg: "#171717", radius: "4px", padding: "18px 12px", height: "36px", font: "16px / 400 / 24px Pretendard SemiBold", hover: "bg #f4f4f5", pressed: "bg #f4f4f5", states: "probe on 가격: the transparent item fills #f4f4f5 on hover and pressed; focus (Tab #8) draws only the browser default ring; no selected variant was observed", use: "Header items 왜 그리팅인가, 제품, 솔루션, 고객 사례, 가격, 유용한 자료 and 로그인 on all three pages" }
    eyebrow-pill: { type: badge, bg: "#ffffff", fg: "#3f3f46", radius: "50px", padding: "8px 20px", height: "32px", states: "unmeasured: the promotion dialog covered the pill and the Tab walk did not reach it", use: "국내 1위 채용 관리 솔루션 above the home hero headline (198 x 32); its label is the page's h1, 16px Pretendard SemiBold face" }
    dark-pill: { type: badge, bg: "#0f0f0f", fg: "#ffffff", radius: "50px", padding: "8px 20px", use: "왜 그리팅인가 label above the /why-greeting hero, the dark counterpart of the home eyebrow pill" }
    billing-switch: { type: tab, bg: "#f4f4f5", radius: "100px", padding: "6px 8px", height: "49px", states: "probe: no change on hover or pressed; focus (Tab #1) draws only the browser default ring", use: "월간 / 연간 (-10%) billing switch above the /pricing plan cards, 175 x 49" }
    promo-dialog-button: { type: button, bg: "rgba(255, 255, 255, 0.12)", fg: "#ffffff", radius: "6px", padding: "12px 16px", height: "39px", font: "15px / 600 / 15px Pretendard SemiBold, letter-spacing -0.15px", states: "rest only: the dialog button was not probed, so no hover, pressed or focus value is declared", use: "그리팅 AX 보기 in the AI promotion dialog that was open over home at capture (123 x 39)" }
    feature-card: { type: card, radius: "16px", padding: "16px", size: "702px x 694px", use: "Feature panel beside the 채용 홈페이지 빌더 list on home (home::[data-omd-capture=\"29\"]); transparent at rest, with a #a1a1aa description line" }
  components_harvested: true
---

# Design System Inspiration of Greeting

## 1. Visual Theme & Atmosphere

Greeting (그리팅) is the recruiting platform of 두들린 (Doodlin), a Seoul company at 테헤란로 427 whose own site states its mission as "우리는 채용의 문제를 해결하는 것이 모든 문제 해결의 시작임을 믿습니다" — solving hiring problems is where every other problem gets solved. Doodlin describes Greeting as an ATS plus TRM (talent relationship management) that helps companies "더 빠르게 채용" with a better process, and the company page counts its growth in the product's own units: 6,129 customer companies, 1.37 million applicants, 4,272 career sites and 1.05 million written evaluations as of December 2023. The marketing site now claims "10,000+ 기업이 그리팅과 함께합니다" (January 2026 customers) and frames itself as "국내 1위 채용 관리 솔루션". Its current evolution is visible in the header: an AI promotion ("그리팅 AI는 다릅니다 — 내장 AI & 외부 AI 연동 모두 가능한") opens over the home page, and the navigation groups the product into 모집 (채용 홈페이지, 인재풀 구축, 다이렉트 소싱), 관리 (공고, 지원자, 평가) and 운영 (면접 일정 조율, 지원자 연락, 채용 데이터 분석).

On greetinghr.com the brand speaks in a calm, zinc-grey Korean register. Headlines are set large in the Pretendard SemiBold face with tracking tightened to 1% of the size (-0.6px at 60px, -0.48px at 48px), in `#27272a` and `#171717`; supporting copy steps down through `#71717a` and `#a1a1aa`. One saturated colour does the pointing: azure `#1890ff` fills the 도입 문의 button at the end of the header on every captured page and colours the EVENT and New labels in the announcement bar above it. The heavy persuasion buttons in the page are near-black `#0f0f0f` or white, all 4px-radius rectangles 50px tall. The site is flat — none of the 871 recorded elements computes a box-shadow — and it switches to a dark proof band where white statistics and an oversized Poppins numeral carry the "10,000+" claim.

**Key Characteristics:**
- One azure action: `#1890ff` fills the header 도입 문의 on all three pages; hover settles on `rgba(44, 147, 242, 0.8)`
- Near-black `#0f0f0f` and white `#ffffff` 50px buttons with 4px radius for in-page calls to action
- Pretendard faces loaded as separate families (SemiBold, Medium, Regular), headlines tracked at -1% of their size
- A zinc text ladder: `#27272a` headings, `#171717` section headlines and navigation, `#3f3f46`, `#71717a`, `#a1a1aa`
- Hover is a grey fill: navigation items and light buttons turn `#f4f4f5`; the dark button turns `#3f3f46`
- No shadows on any captured element; a white 50px-radius eyebrow pill and a 100px-radius billing switch are the only round shapes

## Primary tasks

- Track applicants in one place instead of spreadsheets
- Reach out to candidates before they apply (다이렉트 소싱)
- Build a career site for open roles
- Compare the plans on /pricing before bringing the tool in
- Request a demo, a quote or a one-to-one consultation

## 2. Color Palette & Roles

Every token below was read on 2026-09-30 from greetinghr.com, /pricing and /why-greeting by the deterministic collector, and state values by the fixed keyboard probe. The tokens describe Greeting's public website; the Greeting app (app.greetinghr.com) sits behind a login and was not captured.

### Primary
- **Greeting Azure** (`#1890ff`): The fill of 도입 문의, the action at the right end of the header on all three captured pages (97 × 36, `#ffffff` label; capture #10 on each page). It is the primary because it is the one coloured action the site repeats on every page, and the only saturated colour in a primary role: the announcement bar's EVENT and New labels use the same azure. The probe read its hover and pressed fill as `rgba(44, 147, 242, 0.8)`.
- **On Primary** (`#ffffff`): The label of 도입 문의 and of the dark buttons.

### Action neutrals
- **Action Dark** (`#0f0f0f`): The fill of 도입 문의하기 in the home hero and 견적 문의하기 on /pricing; the /why-greeting eyebrow pill uses it too. Hover and pressed settle on `#3f3f46` with a 1px `#e4e4e7` border drawn by `::after`.
- **Surface Soft** (`#fcfcfc`): The fill of 무료 체험 시작 on the /pricing plan cards.
- **Surface** (`#f4f4f5`): The hover fill of navigation items and of the light and soft buttons, and the rest fill of the billing switch.
- **Hairline** (`#e4e4e7`): The 1px border the dark button paints on hover.

### Text
- **Heading** (`#27272a`): The hero headline, band headlines, feature and card titles, quotes.
- **Ink Soft** (`#171717`): Section headlines, eyebrow section labels and navigation labels.
- **Secondary** (`#3f3f46`): The home h1 eyebrow and the hero 무료 체험하기 label; plan headings on /pricing.
- **Muted** (`#71717a`): The hero subline, descriptions and the footer.
- **Faint** (`#a1a1aa`): Feature descriptions, statistic captions and footer link labels.
- **Plan Ink** (`#09090b`): Plan feature lines on /pricing.
- **Link** (`#0a58a1`): Solution links on /why-greeting (아웃바운드 채용, 인바운드 채용, 수시 채용, 대규모 채용 and others).
- **White** (`#ffffff`): The page canvas (the body computes `#ffffff`) and text on dark and azure.

### Observed but not tokens
- A second azure, `#2c93f2`, colours four small labels (신규 업데이트 in the header menu, one /pricing label); an orange `#e07400` marks one /pricing plan label. Each is a single label, not a role.
- The proof band behind the white statistics was not recorded by the collector, so its colour is not claimed.
- The Greeting logo was not measured; no logo colour is claimed.

## 3. Typography Rules

### Font Family
- **Live surface use**: Framer serves Pretendard as one family per weight — `Pretendard SemiBold` (212 observed uses), `Pretendard Medium` (205), `Pretendard Regular` (119), `Pretendard Bold` (7) and `Pretendard ExtraBold` (6), all `loaded / high` — so every Pretendard element computes `font-weight: 400` and the weight lives in the family name. Headlines, navigation and button labels use the SemiBold face; descriptions and statistics the Medium face; sublines and plan lines the Regular face. `Poppins` (2 uses) sets the two oversized numerals; `Inter` (4) appears in four /pricing glyphs.
- **Official distributed font assets**: Pretendard is by Kil Hyung-jin (orioncactus), and its LICENSE states the SIL Open Font License 1.1. Poppins is published by the Poppins Project Authors (Indian Type Foundry) under the SIL Open Font License 1.1. Both licence files were opened on 2026-09-30. The identification rests on the family names; the served files' name tables were not inspected.
- **Official product use**: no Greeting or Doodlin page opened this session names its typefaces, so no statement of official product use is made.
- **Declared only (no visible use)**: Framer project fonts with 0 observed uses — Geist, General Sans, Google Sans, Hanken Grotesk, Instrument Sans, Inter Tight, Koulen, Outfit, PP Neue Montreal Medium, Pragati Narrow, Work Sans, Fragment Mono, Pretendard Black and Pretendard Light — and the `Placeholder` fallbacks.
- **Unresolved**: none of the observed families is unidentified.

### Hierarchy

| Role | Face | Size | Computed weight | Line Height | Tracking | Observed on |
|------|------|------|-----------------|-------------|----------|-------------|
| Numeral | Poppins | 174.851px | 400 | 174.851px (1.0) | -8.74px | Proof band on home, white |
| Stat | Pretendard Medium | 96px | 400 | 96px (1.0) | normal | Proof band statistics, white |
| Display Hero | Pretendard SemiBold | 60px | 400 | 72px (1.2) | -0.6px | Home hero, `#27272a` |
| Section | Pretendard SemiBold | 48px | 400 | 62.4px (1.3) | -0.48px | Section headlines, `#171717` |
| Band | Pretendard SemiBold | 36px | 400 | 43.2px (1.2) | -0.36px | Band headlines, plan prices |
| Statement | Pretendard SemiBold | 32px | 400 | 44.8px (1.4) | -0.32px | Wide statement on home |
| Feature | Pretendard SemiBold | 28px | 400 | 39.2px (1.4) | -0.56px | Feature panel headings |
| Quote | Pretendard SemiBold | 24px | 400 | 36px (1.5) | -0.24px | Customer quotes |
| Card Title | Pretendard SemiBold | 20px | 400 | 30px (1.5) | -0.4px | Feature list titles, plan names |
| Subline | Pretendard Regular | 20px | 400 | 32px (1.6) | normal | Hero subline, `#71717a` |
| Eyebrow | Pretendard SemiBold | 16px | 400 | 16px (1.0) | -0.16px | h1 / h2 labels |
| Button | Pretendard SemiBold | 16px | 400 | 16px (1.0) | -0.32px | 50px button labels |
| Nav | Pretendard SemiBold | 16px | 400 | 24px (1.5) | normal | Header navigation |
| Plan Body | Pretendard Regular | 16px | 400 | 28.8px (1.8) | normal | Plan feature lines, `#09090b` |
| Body | Pretendard Medium | 14px | 400 | 21px (1.5) | normal | Descriptions, footer |
| Caption | Pretendard SemiBold | 12px | 400 | 14.4px (1.2) | normal | Plan labels |
| Fine | Pretendard Regular | 11px | 400 | 15.4px (1.4) | normal | Footer legal line |

### Principles
- **Weight lives in the face**: to reproduce the site, load the named Pretendard face (SemiBold for headlines, Medium for descriptions, Regular for sublines) rather than a `font-weight` value; with a single variable Pretendard the equivalents are 600, 500 and 400.
- **Tracking at -1%**: from 20px up, SemiBold headlines are tracked at about -1% of their size (-2% at 20px and 28px).
- **Latin numerals get Poppins**: the two proof numerals switch to Poppins while every Korean line stays Pretendard.

## 4. Component Stylings

### Buttons

**Header demo button (primary)**
- Background: `#1890ff`
- Text: `#ffffff`
- Radius: 4px
- Padding: 5px 8px 5px 12px
- Height: 36px
- Font: 16px / 28.8px Pretendard SemiBold face
- Hover: background `rgba(44, 147, 242, 0.8)`
- Pressed: background `rgba(44, 147, 242, 0.8)`
- States: focus draws only the browser default ring
- Use: 도입 문의 in the header of all three pages

**Dark button**
- Background: `#0f0f0f`
- Text: `#ffffff`
- Radius: 4px
- Padding: 14px 20px 14px 25px
- Height: 50px
- Font: 16px / 16px Pretendard SemiBold face, letter-spacing -0.32px
- Hover: background `#3f3f46` and a 1px solid `#e4e4e7` border drawn by `::after`
- Pressed: the same as hover
- States: measured on 견적 문의하기; the home hero instance was covered by the promotion dialog
- Use: 도입 문의하기 (home hero), 견적 문의하기 (/pricing); a `#171717` variant sits on the lower plan card

**Light button**
- Background: `#ffffff`
- Text: `#171717` (`#0f0f0f` on 서비스 소개서 다운로드 and 1:1 맞춤 상담받기, `#3f3f46` on the hero 무료 체험하기)
- Radius: 4px
- Padding: 14px 20px 14px 25px (14px 25px without an arrow)
- Height: 50px
- Hover: background `#f4f4f5`, label `#0f0f0f`
- Pressed: the same as hover
- Use: 도입 혜택 문의하기 on /pricing and the white buttons on home; no border is drawn at rest

**Soft button**
- Background: `#fcfcfc`
- Text: `#171717`
- Radius: 4px
- Padding: 14px 25px
- Height: 50px
- Hover: background `#f4f4f5`, label `#0f0f0f`
- Use: 무료 체험 시작 on the /pricing plan cards

**Promotion dialog button**
- Background: `rgba(255, 255, 255, 0.12)`
- Text: `#ffffff`
- Radius: 6px
- Padding: 12px 16px
- Height: 39px
- Font: 15px / 600 / 15px Pretendard SemiBold, letter-spacing -0.15px
- Use: 그리팅 AX 보기 in the AI promotion dialog over home

### Badges

**Eyebrow pill**
- Background: `#ffffff`
- Text: `#3f3f46` (the page's h1, 16px SemiBold face)
- Radius: 50px
- Padding: 8px 20px
- Height: 32px
- Use: 국내 1위 채용 관리 솔루션 above the home hero; states unmeasured

**Dark pill**
- Background: `#0f0f0f`
- Text: `#ffffff`
- Radius: 50px
- Padding: 8px 20px
- Use: 왜 그리팅인가 above the /why-greeting hero

### Navigation & Controls

**Header navigation item**
- Text: `#171717`
- Radius: 4px
- Padding: 18px 12px
- Height: 36px
- Font: 16px / 24px Pretendard SemiBold face
- Hover: background `#f4f4f5`
- Pressed: background `#f4f4f5`
- Use: 왜 그리팅인가, 제품, 솔루션, 고객 사례, 가격, 유용한 자료, 로그인

**Billing switch**
- Background: `#f4f4f5`
- Radius: 100px
- Padding: 6px 8px
- Height: 49px
- States: no change on hover or pressed
- Use: 월간 / 연간 (-10%) on /pricing

**Announcement bar**: a 1200 × 47 link row above the header on home and /why-greeting, 10px 15px padding, white 15px SemiBold text with EVENT and New labels in `#1890ff` 12px; its background was not recorded.

### Cards

**Feature panel**
- Radius: 16px
- Padding: 16px
- Use: the 702 × 694 panel beside the 채용 홈페이지 빌더 list on home, transparent at rest

---

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out pages of greetinghr.com plus fixed keyboard-probe state reads and first-party context)
**Tier 1 sources:** https://www.greetinghr.com/ ; https://www.greetinghr.com/pricing ; https://www.greetinghr.com/why-greeting ; https://www.doodlin.co.kr/ko/about ; https://blog.greetinghr.com/
**Tier 2 sources:** not attempted in this pass; no Tier 2 value used
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- 50px buttons: 14px vertical, 25px horizontal padding (20px on the right when an arrow icon follows)
- Header items: 18px 12px padding in 36px cells; the header demo button 5px 8px 5px 12px
- Eyebrow pills: 8px 20px
- Announcement bar: 10px 15px
- Frequent spacing values in the capture: 4, 5, 12, 10, 14, 18 and 25px

### Grid & Container
- Content sits in a 1200px column (the announcement bar and header rows are 1200px wide; headline blocks 1170–1200px).
- Home runs a centred hero (eyebrow pill, 60px headline, subline, white and dark buttons), a sticky feature list beside a 702px panel, a dark proof band with statistics, quotes, and a closing band that repeats the 60px headline in white.
- /pricing sets plan cards side by side under a billing switch, then a feature comparison and an FAQ.

### Whitespace Philosophy
- **Large type, quiet colour**: size and tracking create hierarchy; colour stays on the zinc ladder except for the one azure action.
- **Flat segmentation**: sections are separated by space and by the dark band, not by shadows.

### Border Radius Scale
- 0px: the default (748 of the recorded radii)
- 4px: buttons and navigation items
- 6px: the promotion dialog button
- 16px: the feature panel
- 50px: eyebrow pills
- 100px: the billing switch

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Every captured element |
| Grey | `#f4f4f5` fill | Hover on navigation and light buttons; the billing switch |
| Soft | `#fcfcfc` fill | 무료 체험 시작 |
| Dark | `#0f0f0f` fill | In-page primary buttons, the /why-greeting pill |
| Overlay | Fixed promotion dialog | Open over home at capture |

**Shadow Philosophy**: all 871 elements the collector recorded compute `box-shadow: none`. The only edge that appears is the 1px `#e4e4e7` border the dark button draws on hover.

## 7. Do's and Don'ts

### Do
- Keep `#1890ff` for the one header action (도입 문의); hover it to `rgba(44, 147, 242, 0.8)`
- Use `#0f0f0f` and `#ffffff` 50px buttons with 4px radius for in-page calls to action
- Hover grey: `#f4f4f5` for navigation and light buttons, `#3f3f46` for the dark button
- Set headlines in the Pretendard SemiBold face with tracking near -1% of the size
- Keep text on the zinc ladder: `#27272a`, `#171717`, `#3f3f46`, `#71717a`, `#a1a1aa`
- Use Poppins only for oversized Latin numerals

### Don't
- Don't add drop shadows; none of the 871 captured elements has one
- Don't spread azure across buttons; the in-page buttons are black and white
- Don't round buttons into pills; pills are reserved for the eyebrow labels and the billing switch
- Don't draw a border on the light buttons at rest; none was observed
- Don't invent focus styles; every probed control shows only the browser default ring
- Don't substitute another face for Pretendard or Poppins

## 8. Responsive Behavior

### Breakpoints
Only the 1440 × 900 desktop viewport was captured. No breakpoint value was measured.

### Touch Targets
- In-page buttons: 50px
- Billing switch: 49px
- Promotion dialog button: 39px
- Header demo button and navigation items: 36px
- Eyebrow pill: 32px

### Collapsing Strategy
- How the pages collapse was not captured.

### Image Behavior
- Product screenshots sit flat, without shadows.

## 9. Agent Prompt Guide

### Quick Color Reference
- Header action: `#1890ff` with `#ffffff` text; hover `rgba(44, 147, 242, 0.8)`
- In-page actions: `#0f0f0f` (hover `#3f3f46` + 1px `#e4e4e7` border), `#ffffff` and `#fcfcfc` (hover `#f4f4f5`)
- Text: `#27272a` headings, `#171717` section heads and nav, `#3f3f46`, `#71717a`, `#a1a1aa`; plan lines `#09090b`; links `#0a58a1`
- Canvas: `#ffffff`

### Example Component Prompts
- "Create a header demo button: `#1890ff` background, `#ffffff` 16px Pretendard SemiBold label, 4px radius, 5px 8px 5px 12px padding, 36px tall; hover and pressed `rgba(44, 147, 242, 0.8)`; no shadow."
- "Create a CTA pair: a white button (`#ffffff`, `#3f3f46` label) and a dark button (`#0f0f0f`, `#ffffff` label), both 50px tall, 4px radius, 14px 25px padding, 16px Pretendard SemiBold labels with -0.32px tracking. Dark hover `#3f3f46` with a 1px `#e4e4e7` inner border; white hover `#f4f4f5`."
- "Set a hero: white eyebrow pill (50px radius, 8px 20px padding, 16px `#3f3f46` label), then a 60px Pretendard SemiBold headline with -0.6px tracking in `#27272a`, then a 20px Pretendard Regular subline in `#71717a`."

### Iteration Guide
1. One azure action in the header; everything else in black, white and zinc
2. Pretendard SemiBold face for headlines, tracked at -1%
3. 4px rectangles for buttons; pills only for labels and the billing switch
4. Grey `#f4f4f5` hover everywhere except the dark button
5. No shadows

---

## 10. Voice & Tone

Greeting's voice is **confident and outcome-framed**: it sells 채용 성공 (hiring success) rather than administration, and backs the claim with customer counts and quotes.

| Context | Tone |
|---|---|
| Hero | Outcome over tooling. "채용 관리를 넘어 채용 성공으로." |
| Proof | Quietly quantified. "10,000+ 기업이 그리팅과 함께합니다." |
| Product labels | Plain nouns. "채용 홈페이지", "인재풀 구축", "다이렉트 소싱", "면접 일정 조율". |
| Actions | Direct and low-pressure. "도입 문의", "무료 체험하기", "서비스 소개서 다운로드", "1:1 맞춤 상담받기". |
| Company voice (Doodlin) | Mission-first. "우리는 채용의 문제를 해결하는 것이 모든 문제 해결의 시작임을 믿습니다." |

**Voice samples (verbatim, opened 2026-09-30):**
- "그리팅 | 채용 성공을 위한, 국내 1위 채용 관리 솔루션" — greetinghr.com page title.
- "채용 관리를 넘어 채용 성공으로" — home headline.
- "10,000+ 기업이 그리팅과 함께합니다" — home proof line, footnoted "*2026년 1월 그리팅 이용 고객사".
- "채용 성공을 원한다면 그리팅이어야 하는 이유" — /why-greeting title.
- "그리팅 블로그 | 채용 관리를 넘어, 채용 성공으로" — blog.greetinghr.com title.

**Forbidden register**: aggressive urgency, stacked exclamation marks, unexplained HR jargon, a cute consumer tone.

## 11. Brand Narrative

Doodlin's company page begins with a definition: hiring is how a company fulfils its mission, and solving hiring problems lays the ground for every company to achieve its own — "우린 이 순환 고리의 가장 중요한 시작점이 채용 문제의 해결이라 믿습니다." It cites 공자's 人事萬事 to argue that the problem is old and still unsolved, and admits that the team does not yet know the single innovation that solves it.

Greeting is the product that carries that mission: an ATS and TRM for "더 빠르게 채용". The company page counts growth in product units — 6,129 customers, 1.37 million applicants, 4,272 career sites, 45,000 job posts, 1.05 million evaluations and 140,000 interviews as of December 2023 — and the marketing site now claims more than 10,000 customer companies (January 2026). Doodlin's own careers site at doodlin.co.kr is itself built on Greeting ("made with Greeting").

The current site shows where the product is heading: a header menu organised around 모집, 관리 and 운영, an AI promotion over the home page, and a sales motion built on 도입 문의, demos and consultations. The design mirrors the pitch — a single azure action, black-and-white buttons and large calm type that reads as dependable business software.

## 12. Principles

1. **Hiring is the first problem.** Doodlin's stated mission. *UI implication:* lead with outcomes (채용 성공) and proof, keep feature lists secondary.
2. **Proof over hype.** *UI implication:* give figures scale — 96px statistics and an oversized Poppins numeral — and keep the copy calm.
3. **One coloured action.** *UI implication:* azure `#1890ff` only on 도입 문의; in-page actions stay black and white. (An editorial reading of the captured pages.)
4. **Name the workflow.** *UI implication:* label every stage plainly (모집, 관리, 운영; 공고 관리, 평가 관리, 면접 일정 조율).
5. **Flat and legible.** *UI implication:* no shadows; grey hover fills; zinc text. (Editorial.)

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Greeting user segments (Korean HR and talent-acquisition teams), not individual people.*

**박지현, 34, 서울.** An in-house recruiter at a mid-size company running rolling and large-scale hiring. Wants one system of record from job post to offer instead of email and spreadsheets.

**김도윤, 29, 경기.** A talent-acquisition lead who sources proactively. Uses 인재풀 구축 and 다이렉트 소싱 to reach candidates before they apply.

**이서연, 41, 서울.** A people-operations lead comparing ATS vendors on /pricing. Wants proof and a clear plan table she can take to leadership.

## 14. States

Only these states were observed on the three captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Hover / pressed (header demo button)** | `#1890ff` → `rgba(44, 147, 242, 0.8)`, settled. |
| **Hover / pressed (dark button)** | `#0f0f0f` → `#3f3f46` with a 1px `#e4e4e7` `::after` border (견적 문의하기). |
| **Hover / pressed (light and soft buttons)** | `#ffffff` / `#fcfcfc` → `#f4f4f5`; label `#171717` → `#0f0f0f`. |
| **Hover / pressed (navigation)** | Transparent → `#f4f4f5`. |
| **No change** | The billing switch shows no hover or pressed change. |
| **Unmeasured** | The home hero buttons, 서비스 소개서 다운로드 and the eyebrow pill were covered by the promotion dialog; their hover and pressed states are unmeasured, not absent. |
| **Focus** | Every probed control draws only the browser default ring (`rgb(0, 95, 204) auto 1px`); no authored focus style. |
| **Dialog open** | An AI promotion dialog (fixed, 960 × 520 over a full-viewport layer) covered home at capture. |

Error, empty, loading and success states were not captured and are not described.

## 15. Motion & Easing

Every probed control computes `transition: all 0s ease 0s`, and the probe read settled values after 900ms. The collector's immediate hover and focus frames caught intermediate fills (`#1d91fc` at 0.96 alpha on the header button, `#1d1d20` on the dark button), which shows that Framer animates these changes in script; no duration or easing was measured, so none is declared.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/greeting.json (capturedAt 2026-09-30T11:07:19Z), deterministic collector, 1440x900, logged out: greetinghr.com, /pricing, /why-greeting. States: fixed keyboard probe raws docs/research/2026-09-29-growth/raw/greeting-states-{home,pricing}.json (configs greeting-cfg-*.json; labels from greeting-survey-{home,pricing,why}.json).
- §1, §10, §11 context: greetinghr.com home, /pricing and /why-greeting copy; doodlin.co.kr/ko/about (mission, growth figures, address); blog.greetinghr.com title; opened 2026-09-30.
- §3 licences: the Pretendard LICENSE and the Poppins OFL.txt on GitHub, opened 2026-09-30.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->
