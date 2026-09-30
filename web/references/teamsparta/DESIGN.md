---
id: teamsparta
name: Team Sparta
display_name_kr: 팀스파르타 (스파르타코딩클럽)
country: KR
category: education
homepage: "https://spartaclub.kr/"
primary_color: "#fa0030"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=spartaclub.kr&sz=128"
verified: "2026-09-30"
added: "2026-07-02"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: marketing, url: "https://spartaclub.kr/", inspected: "2026-09-30" }
    - { id: surface-2, kind: marketing, url: "https://spartaclub.kr/catalog/scc", inspected: "2026-09-30" }
    - { id: surface-3, kind: product, url: "https://spartaclub.kr/product/9", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://spartaclub.kr/", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://spartaclub.kr/catalog/scc", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://spartaclub.kr/product/9", captured: "2026-09-30" }
    - { id: teamsparta-probe-course, kind: product-surface, url: "https://spartaclub.kr/product/9", captured: "2026-09-30" }
    - { id: teamsparta-probe-home, kind: product-surface, url: "https://spartaclub.kr/", captured: "2026-09-30" }
    - { id: teamsparta-career, kind: official-doc, url: "https://career.spartaclub.kr/ko/home", captured: "2026-09-30" }
    - { id: teamsparta-design-blog, kind: official-doc, url: "https://blog.career.spartaclub.kr/designer", captured: "2026-09-30" }
    - { id: pretendard-license, kind: license, url: "https://raw.githubusercontent.com/orioncactus/pretendard/main/LICENSE", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &cta { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"1\"]", captured: "2026-09-30" }
    "tokens.colors.on-primary": *cta
    "tokens.colors.ink": &h1 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h1", captured: "2026-09-30" }
    "tokens.colors.slate": &reviewmeta { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.muted": &h4 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h4", captured: "2026-09-30" }
    "tokens.colors.faint": &footer { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.coral": *reviewmeta
    "tokens.colors.hero-aqua": &aqua { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-09-30" }
    "tokens.colors.on-dark-soft": &soft { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h4", captured: "2026-09-30" }
    "tokens.colors.category-red": &camp { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"15\"]", captured: "2026-09-30" }
    "tokens.colors.category-teal": &ent { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"19\"]", captured: "2026-09-30" }
    "tokens.colors.category-purple": &purple { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"17\"]", captured: "2026-09-30" }
    "tokens.colors.charcoal": &darkcta { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"23\"]", captured: "2026-09-30" }
    "tokens.colors.surface": &more { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"11\"]", captured: "2026-09-30" }
    "tokens.colors.surface-alt": &faq { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"16\"]", captured: "2026-09-30" }
    "tokens.colors.hover-tint": &navstate { surface_id: home, source_id: teamsparta-probe-home, method: live-state-probe, selector: "a 전체 강의 (79 x 40): hover bg rgba(0, 0, 0, 0) -> rgb(249, 249, 251), radius 0px -> 6px; pressed the same plus the Chromium default link colour rgb(0, 0, 238) -> rgb(255, 0, 0); focus (Tab #6) outline none -> rgb(0, 95, 204) auto 1px", captured: "2026-09-30" }
    "tokens.colors.canvas": &body { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::body", captured: "2026-09-30" }
    "tokens.typography.family.display": *h1
    "tokens.typography.family.body": &coursebody { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::body", captured: "2026-09-30" }
    "tokens.typography.family.accent": &stat { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.hero.size": &hero { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.hero.weight": *hero
    "tokens.typography.hero.lineHeight": *hero
    "tokens.typography.hero.tracking": *hero
    "tokens.typography.hero.use": *hero
    "tokens.typography.stat.size": *stat
    "tokens.typography.stat.weight": *stat
    "tokens.typography.stat.lineHeight": *stat
    "tokens.typography.stat.use": *stat
    "tokens.typography.display-band.size": &bandh { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h1", captured: "2026-09-30" }
    "tokens.typography.display-band.weight": *bandh
    "tokens.typography.display-band.lineHeight": *bandh
    "tokens.typography.display-band.use": *bandh
    "tokens.typography.step-number.size": &step { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h1", captured: "2026-09-30" }
    "tokens.typography.step-number.weight": *step
    "tokens.typography.step-number.lineHeight": *step
    "tokens.typography.step-number.use": *step
    "tokens.typography.section.size": *h1
    "tokens.typography.section.weight": *h1
    "tokens.typography.section.lineHeight": *h1
    "tokens.typography.section.use": *h1
    "tokens.typography.section-sm.size": &h2 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.typography.section-sm.weight": *h2
    "tokens.typography.section-sm.lineHeight": *h2
    "tokens.typography.section-sm.use": *h2
    "tokens.typography.hero-sub.size": *aqua
    "tokens.typography.hero-sub.weight": *aqua
    "tokens.typography.hero-sub.lineHeight": *aqua
    "tokens.typography.hero-sub.use": *aqua
    "tokens.typography.course-title.size": &ctitle { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h1", captured: "2026-09-30" }
    "tokens.typography.course-title.weight": *ctitle
    "tokens.typography.course-title.lineHeight": *ctitle
    "tokens.typography.course-title.use": *ctitle
    "tokens.typography.card-title.size": &h3 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-09-30" }
    "tokens.typography.card-title.weight": *h3
    "tokens.typography.card-title.lineHeight": *h3
    "tokens.typography.card-title.use": *h3
    "tokens.typography.eyebrow.size": &eyebrow { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h4", captured: "2026-09-30" }
    "tokens.typography.eyebrow.weight": *eyebrow
    "tokens.typography.eyebrow.lineHeight": *eyebrow
    "tokens.typography.eyebrow.tracking": *eyebrow
    "tokens.typography.eyebrow.use": *eyebrow
    "tokens.typography.label.size": *h4
    "tokens.typography.label.weight": *h4
    "tokens.typography.label.lineHeight": *h4
    "tokens.typography.label.use": *h4
    "tokens.typography.button.size": *cta
    "tokens.typography.button.weight": *cta
    "tokens.typography.button.lineHeight": *cta
    "tokens.typography.button.use": *cta
    "tokens.typography.footer.size": *footer
    "tokens.typography.footer.weight": *footer
    "tokens.typography.footer.lineHeight": *footer
    "tokens.typography.footer.use": *footer
    "tokens.typography.caption.size": &caption { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::p", captured: "2026-09-30" }
    "tokens.typography.caption.weight": *caption
    "tokens.typography.caption.lineHeight": *caption
    "tokens.typography.caption.use": *caption
    "tokens.spacing.cta-y": *cta
    "tokens.spacing.cta-x": *cta
    "tokens.spacing.button-y": &reviewbtn { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"24\"]", captured: "2026-09-30" }
    "tokens.spacing.button-x": *reviewbtn
    "tokens.spacing.card-y": &catcard { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"10\"]", captured: "2026-09-30" }
    "tokens.spacing.card-x": *catcard
    "tokens.spacing.course-card": *camp
    "tokens.spacing.band-top": &band { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"29\"]", captured: "2026-09-30" }
    "tokens.rounded.chip": &chip { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"11\"]", captured: "2026-09-30" }
    "tokens.rounded.button": *reviewbtn
    "tokens.rounded.card": *catcard
    "tokens.rounded.course-card": *camp
    "tokens.rounded.cta": *cta
    "tokens.components.enroll-cta.type": *cta
    "tokens.components.enroll-cta.bg": *cta
    "tokens.components.enroll-cta.fg": *cta
    "tokens.components.enroll-cta.radius": *cta
    "tokens.components.enroll-cta.padding": *cta
    "tokens.components.enroll-cta.height": *cta
    "tokens.components.enroll-cta.font": *cta
    "tokens.components.enroll-cta.states": &ctastate { surface_id: surface-3, source_id: teamsparta-probe-course, method: live-state-probe, selector: "button 수강신청하기 (320 x 56, rest bg #fa0030, fg #ffffff, transition width 0.2s ease-in-out): hover and pressed no change across self and 3 ancestor levels; focus (Tab #2) outline none -> rgb(0, 95, 204) auto 1px, the browser default ring", captured: "2026-09-30" }
    "tokens.components.enroll-cta.use": *cta
    "tokens.components.course-tab.type": &tab { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"4\"]", captured: "2026-09-30" }
    "tokens.components.course-tab.fg": *tab
    "tokens.components.course-tab.border": *tab
    "tokens.components.course-tab.padding": *tab
    "tokens.components.course-tab.height": *tab
    "tokens.components.course-tab.font": *tab
    "tokens.components.course-tab.selected": { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"3\"]", captured: "2026-09-30" }
    "tokens.components.course-tab.states": { surface_id: surface-3, source_id: teamsparta-probe-course, method: live-state-probe, selector: "button 강의소개 (selected, fg #fa0030) and 커리큘럼 (fg #858893), 51.9 x 53: hover and pressed UNMEASURED, the pointer target was covered by the fixed 1440 x 36 utility bar; focus (Tabs #4 and #5) outline none -> rgb(0, 95, 204) auto 1px only", captured: "2026-09-30" }
    "tokens.components.course-tab.use": *tab
    "tokens.components.review-button.type": *reviewbtn
    "tokens.components.review-button.bg": *reviewbtn
    "tokens.components.review-button.radius": *reviewbtn
    "tokens.components.review-button.padding": *reviewbtn
    "tokens.components.review-button.height": *reviewbtn
    "tokens.components.review-button.states": { surface_id: home, source_id: teamsparta-probe-home, method: live-state-probe, selector: "span[role=link] 후기 자세히 보기 (108.8 x 36, rest bg #0c0e13): hover and pressed UNMEASURED, :hover did not match (elementFromPoint is the h5 label); focus (Tab #28) outline none -> rgb(0, 95, 204) auto 1px only", captured: "2026-09-30" }
    "tokens.components.review-button.use": *reviewbtn
    "tokens.components.enterprise-button.type": *ent
    "tokens.components.enterprise-button.bg": *ent
    "tokens.components.enterprise-button.fg": *ent
    "tokens.components.enterprise-button.radius": *ent
    "tokens.components.enterprise-button.padding": *ent
    "tokens.components.enterprise-button.height": *ent
    "tokens.components.enterprise-button.states": { surface_id: home, source_id: teamsparta-probe-home, method: live-state-probe, selector: "a 기업교육 알아보기 (125 x 40, rest bg #0b495c): hover no change across self, 3 descendants and 3 ancestor levels; pressed changes only the Chromium default link colour rgb(0, 0, 238) -> rgb(255, 0, 0) on the anchor and two label wrappers; focus (Tab #23) outline none -> rgb(0, 95, 204) auto 1px", captured: "2026-09-30" }
    "tokens.components.enterprise-button.use": *ent
    "tokens.components.nav-item.type": &nav { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"5\"]", captured: "2026-09-30" }
    "tokens.components.nav-item.fg": *nav
    "tokens.components.nav-item.radius": *nav
    "tokens.components.nav-item.padding": *nav
    "tokens.components.nav-item.height": *nav
    "tokens.components.nav-item.hover": *navstate
    "tokens.components.nav-item.states": *navstate
    "tokens.components.nav-item.use": *nav
    "tokens.components.category-card.type": *camp
    "tokens.components.category-card.bg": *camp
    "tokens.components.category-card.fg": *camp
    "tokens.components.category-card.radius": *camp
    "tokens.components.category-card.padding": *camp
    "tokens.components.category-card.size": *camp
    "tokens.components.category-card.variants": *purple
    "tokens.components.category-card.use": *camp
    "tokens.components.conversion-band.type": *band
    "tokens.components.conversion-band.bg": *band
    "tokens.components.conversion-band.fg": *band
    "tokens.components.conversion-band.padding": *band
    "tokens.components.conversion-band.size": *band
    "tokens.components.conversion-band.use": *band
    "tokens.components.catalog-card.type": *catcard
    "tokens.components.catalog-card.bg": *catcard
    "tokens.components.catalog-card.fg": *catcard
    "tokens.components.catalog-card.radius": *catcard
    "tokens.components.catalog-card.padding": *catcard
    "tokens.components.catalog-card.size": *catcard
    "tokens.components.catalog-card.use": *catcard
    "tokens.components.more-button.type": *more
    "tokens.components.more-button.bg": *more
    "tokens.components.more-button.radius": *more
    "tokens.components.more-button.padding": *more
    "tokens.components.more-button.height": *more
    "tokens.components.more-button.states": *more
    "tokens.components.more-button.use": *more
    "tokens.components.dark-cta.type": *darkcta
    "tokens.components.dark-cta.bg": *darkcta
    "tokens.components.dark-cta.fg": *darkcta
    "tokens.components.dark-cta.radius": *darkcta
    "tokens.components.dark-cta.padding": *darkcta
    "tokens.components.dark-cta.height": *darkcta
    "tokens.components.dark-cta.states": *darkcta
    "tokens.components.dark-cta.use": *darkcta
    "tokens.components.faq-button.type": *faq
    "tokens.components.faq-button.bg": *faq
    "tokens.components.faq-button.fg": &faqstate { surface_id: surface-3, source_id: teamsparta-probe-course, method: live-state-probe, selector: "button 더 많은 질문 보기 (237 x 48, rest bg #f1f1f3, fg #000000, transition all 0s): hover and pressed no change across self and 3 ancestor levels; focus (Tab #17) outline none -> rgb(0, 95, 204) auto 1px", captured: "2026-09-30" }
    "tokens.components.faq-button.radius": *faq
    "tokens.components.faq-button.height": *faq
    "tokens.components.faq-button.font": *faq
    "tokens.components.faq-button.states": *faqstate
    "tokens.components.faq-button.use": *faq
    "tokens.components.learn-more-chip.type": *chip
    "tokens.components.learn-more-chip.bg": *chip
    "tokens.components.learn-more-chip.fg": &chipstate { surface_id: surface-3, source_id: teamsparta-probe-course, method: live-state-probe, selector: "button 더 알아보기 (83.8 x 30, rest bg #ffffff, fg #000000, transition all 0s): hover and pressed no change across self and 3 ancestor levels; focus (Tab #12) outline none -> rgb(0, 95, 204) auto 1px", captured: "2026-09-30" }
    "tokens.components.learn-more-chip.radius": *chip
    "tokens.components.learn-more-chip.padding": *chip
    "tokens.components.learn-more-chip.height": *chip
    "tokens.components.learn-more-chip.states": *chipstate
    "tokens.components.learn-more-chip.use": *chip
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#fa0030"
    on-primary: "#ffffff"
    ink: "#0c0e13"
    slate: "#41414b"
    muted: "#858793"
    faint: "#a4a7b0"
    coral: "#ff4660"
    hero-aqua: "#93e6f5"
    on-dark-soft: "#e0e1e5"
    category-red: "#d90b32"
    category-teal: "#0b495c"
    category-purple: "#8723ba"
    charcoal: "#1d1e22"
    surface: "#f5f6f7"
    surface-alt: "#f1f1f3"
    hover-tint: "#f9f9fb"
    canvas: "#ffffff"
  typography:
    family: { display: "Pretendard", body: "Pretendard", accent: "Gmarket Sans" }
    hero: { size: 50, weight: 700, lineHeight: 1.32, tracking: -1, use: "Home hero headline (AI 시대, / 미래를 돌파하는 힘 / 스파르타클럽), Framer's Pretendard Bold face, 66px line, in #ffffff over the hero media" }
    stat: { size: 48, weight: 700, lineHeight: 1.08, use: "Four statistic figures on home, Gmarket Sans TTF Bold, 52px line, in #0c0e13" }
    display-band: { size: 40, weight: 700, lineHeight: 1.35, use: "Headline of the red conversion band on home (지금 스파르타클럽에서 / 잠재력을 깨우세요.), 54px line, in #ffffff" }
    step-number: { size: 40, weight: 700, lineHeight: 1.3, use: "Red step numerals of the Total Career Solution section on home, 52px line, in #fa0030" }
    section: { size: 32, weight: 700, lineHeight: 1.375, use: "Section headings on home, Pretendard Bold face, 44px line, in #0c0e13 (#ffffff on dark bands); the course page's h2 computes the same metrics in #0d0e11" }
    section-sm: { size: 28, weight: 700, lineHeight: 1.36, use: "Smaller section heading on home, 38px line, in #0c0e13" }
    hero-sub: { size: 22, weight: 700, lineHeight: 1.45, use: "Hero line above the headline (도전하는 누구나 잠재력을 깨울 수 있도록), 32px line, in #93e6f5" }
    course-title: { size: 22, weight: 700, lineHeight: 1.36, use: "Course title on the course page (오늘 배워 내일 바로 써먹는 ChatGPT 활용법), Pretendard, 30px line, in #000000" }
    card-title: { size: 18, weight: 700, lineHeight: 1.44, use: "Copy on the home category cards and step descriptions, 26px line, #ffffff on the cards and #0c0e13 in the step section" }
    eyebrow: { size: 15, weight: 700, lineHeight: 1.47, tracking: -0.2, use: "Red eyebrow label on home (Total Career Solution), 22px line, -0.2px tracking, in #fa0030" }
    label: { size: 15, weight: 500, lineHeight: 1.47, use: "Supporting lines under home section headings, Pretendard Medium face, 22px line, in #858793 (#e0e1e5 on the dark band)" }
    button: { size: 15, weight: 700, lineHeight: 1.47, use: "수강신청하기 and 더 많은 질문 보기 labels and the course tabs on the course page, Pretendard, 22px line" }
    footer: { size: 13, weight: 400, lineHeight: 1.54, use: "Footer company and legal lines on home and the catalog, 20px line, in #a4a7b0" }
    caption: { size: 12, weight: 500, lineHeight: 1.5, use: "Footer company lines on the course page, Pretendard, 18px line, in #a4a7b0" }
  spacing: { cta-y: 16, cta-x: 20, button-y: 8, button-x: 12, card-y: 24, card-x: 18, course-card: 32, band-top: 80 }
  rounded: { chip: 4, button: 6, card: 8, course-card: 16, cta: 38 }
  components:
    enroll-cta: { type: button, bg: "#fa0030", fg: "#ffffff", radius: "38px", padding: "16px 20px", height: "56px", font: "15px / 700 / 22px Pretendard", states: "probe on the course page: hover and pressed show no change across the button and three ancestor levels; focus (Tab #2) draws only the browser's default ring, so no brand focus style is declared; it computes transition width 0.2s ease-in-out", use: "수강신청하기, the enrolment action of the course page at surface-3::[data-omd-capture=\"1\"], 320 x 56" }
    course-tab: { type: tab, fg: "#858893", border: "0px 0px 2px, bottom edge transparent at rest", padding: "3px 0px 0px", height: "53px", font: "15px / 700 / 22px Pretendard", selected: "fg #fa0030 with a 2px #fa0030 bottom border (강의소개 at capture 3)", states: "selected variant read from rest values; hover and pressed are unmeasured because the fixed utility bar covered the pointer target; focus (Tabs #4 and #5) draws only the browser's default ring", use: "Section tabs of the course page (강의소개, 커리큘럼 and three more) at surface-3::[data-omd-capture=\"4\"]; product surface" }
    review-button: { type: button, bg: "#0c0e13", radius: "6px", padding: "8px 12px", height: "36px", states: "hover and pressed unmeasured (the probe's pointer landed on the h5 label and :hover did not match); focus (Tab #28) draws only the browser's default ring", use: "후기 자세히 보기 under the review cards on home at home::[data-omd-capture=\"24\"], 109 x 36 (five instances); the label sits in a Framer h5 whose colour the collector did not record, so no fg is declared" }
    enterprise-button: { type: button, bg: "#0b495c", fg: "#ffffff", radius: "6px", padding: "10px 12px", height: "40px", states: "probe on home: hover shows no change; pressed changes only the Chromium default link colour of the anchor and its label wrappers, which is not a brand state; focus (Tab #23) draws only the browser's default ring", use: "기업교육 알아보기 on home at home::[data-omd-capture=\"19\"], 125 x 40; the white label is the collector's recorded label colour" }
    nav-item: { type: tab, fg: "#0c0e13", radius: "0px (6px on hover)", padding: "8px 10px", height: "40px", hover: "bg #f9f9fb, radius 6px", states: "hover settles on a #f9f9fb fill with a 6px radius (probe and bundle frame agree on the radius); pressed adds only the Chromium default link colour; focus (Tab #6) draws only the browser's default ring", use: "Header navigation (전체 강의, 취업 캠프, 재직자 캠프, 커뮤니티, 수강후기, 이벤트) on home and the catalog at home::[data-omd-capture=\"5\"]; the label colour is the collector's recorded label colour" }
    category-card: { type: card, bg: "#d90b32", fg: "#ffffff", radius: "16px", padding: "32px 32px 48px", size: "373px x 460px", variants: "#0b495c (AI 입문), #8723ba (직장인 스킬업)", use: "Three linked course-category cards at the top of home (AI 시대 취업 캠프 in #d90b32 at capture 15, AI 입문 in #0b495c at 16, 직장인 스킬업 in #8723ba at 17); the bundle's hover frames record a transform change whose value was not recorded" }
    conversion-band: { type: card, bg: "#fa0030", fg: "#ffffff", padding: "80px 0px 40px", size: "1440px x 547px", use: "Full-bleed red band near the foot of home at home::[data-omd-capture=\"29\"]; the whole band is one link carrying 지금 스파르타클럽에서 잠재력을 깨우세요." }
    catalog-card: { type: card, bg: "#ffffff", fg: "#0c0e13", radius: "8px", padding: "24px 18px", size: "371px x 399px", use: "Course cards under 이번 달 가장 많이 신청한 강의 on the catalog at surface-2::[data-omd-capture=\"10\"] (three instances)" }
    more-button: { type: button, bg: "#f5f6f7", radius: "8px", padding: "12px 0px", height: "48px", states: "rest on three captured instances; no state frame and no probe, so no state is declared", use: "더보기 inside each catalog course card at surface-2::[data-omd-capture=\"11\"], 335 x 48; the label colour was not recorded" }
    dark-cta: { type: button, bg: "#1d1e22", fg: "#ffffff", radius: "8px", padding: "14px 12px", height: "52px", states: "rest on two captured instances; no state frame and no probe", use: "발급 가이드 확인하기 and 문의하기 on the catalog at surface-2::[data-omd-capture=\"23\"], 260 x 52" }
    faq-button: { type: button, bg: "#f1f1f3", fg: "#000000", radius: "8px", height: "48px", font: "15px / 700 / 22px Pretendard", states: "probe on the course page: hover and pressed show no change; focus (Tab #17) draws only the browser's default ring", use: "더 많은 질문 보기 under the FAQ of the course page at surface-3::[data-omd-capture=\"16\"], 237 x 48" }
    learn-more-chip: { type: button, bg: "#ffffff", fg: "#000000", radius: "4px", padding: "8px 12px", height: "30px", states: "probe on the course page: hover and pressed show no change; focus (Tab #12) draws only the browser's default ring", use: "더 알아보기 on the dark promotion panel of the course page (더 많은 활용법을 알고 싶다면?) at surface-3::[data-omd-capture=\"11\"], 84 x 30; it computes the browser's default button face, so no font is declared" }
  components_harvested: true
---

# Design System Inspiration of Team Sparta

## 1. Visual Theme & Atmosphere

Team Sparta (팀스파르타) is the Seoul company behind 스파르타클럽, the online AI and IT course brand its own design team still called 스파르타코딩클럽 (Spartacodingclub) in its team introduction. Its careers site states the belief the brand is built on: "팀스파르타는 누구나 잠재력을 깨워 큰일을 낼 수 있다고 믿습니다" — it started with IT education, and says it wakes the potential of 200,000 people a year and supplies some 4,000 trained people to the job market; the same page lists selection as a 2025 예비 유니콘 (pre-unicorn) company. The current evolution is visible in the product itself: spartacodingclub.kr now redirects to spartaclub.kr, the site is titled "스파르타클럽 | AI시대, 미래를 돌파하는 힘", and the course list now centres on AI skills — ChatGPT, Claude Code, AI PPT and work automation — alongside government-funded bootcamps (내일배움캠프), camps for working people and corporate training. The footer names the operator: 팀스파르타(주), 대표자 이범규, with a 평생교육시설 (lifelong-education facility) registration, 제 661호.

The site reads like a campaign. Home opens on a 50px white Pretendard Bold headline over hero media, with the line above it in aqua `#93e6f5`; below sit three large, saturated course-category cards — deep red `#d90b32`, dark teal `#0b495c` and purple `#8723ba` — each a 16px-radius link. Section headings are 32px Pretendard Bold in near-black ink `#0c0e13`. The signature red `#fa0030` is spent on action and emphasis: the enrolment button of the course page, the selected course tab, a full-bleed red conversion band near the foot of home, the step numerals and the Total Career Solution eyebrow. Every one of the 429 captured element records computes `box-shadow: none`; separation comes from colour blocks and pale grey fills.

**Key Characteristics:**
- Signature red `#fa0030` for the primary action (수강신청하기), the selected tab, the conversion band, step numerals and eyebrows
- Pretendard throughout — Framer's named Pretendard Bold, Medium and SemiBold faces on home and the catalog, a self-hosted Pretendard on the course page — with Gmarket Sans for four statistic figures
- Near-black ink `#0c0e13` for headings and dark buttons; `#858793`, `#a4a7b0` and `#41414b` for supporting text
- Category colour blocks — `#d90b32`, `#0b495c`, `#8723ba` — on the home course cards; `#0b495c` also fills 기업교육 알아보기
- Compact radii for controls (4px, 6px, 8px), 16px for the category cards and a 38px pill for the enrolment button
- Flat: no shadow anywhere; grey fills `#f5f6f7` and `#f1f1f3` for secondary buttons

## Primary tasks

- Browse the course catalog to find a class
- Check which courses are government-funded before enrolling
- Enroll in a course from its course page
- Read course reviews before you commit
- Add AI tools to your workflow after work hours
- Evaluate corporate training for your company's employees

## 2. Color Palette & Roles

Every token below was read on 2026-09-30 from spartaclub.kr, /catalog/scc and the course page /product/9 by the deterministic collector, with states from the fixed keyboard probe. Home and the catalog are built in Framer; the course page is a separate build on the same host with the same header links. Components are labelled with the page they came from.

### Primary
- **Sparta Red** (`#fa0030`): The fill of 수강신청하기, the enrolment button of the course page (320 × 56, `#ffffff` label; surface-3 capture 1). It is the primary because it is the product's primary action fill; the same red marks the selected course tab (강의소개: `#fa0030` label and 2px bottom border), fills the full-bleed conversion band on home, which is itself a link, and colours the red step numerals and the Total Career Solution eyebrow. The probe found no hover or pressed change on 수강신청하기.
- **On Primary** (`#ffffff`): The enrolment label, the conversion band copy and text on the category cards.

### Category colours
- **Category Red** (`#d90b32`): The AI 시대 취업 캠프 card on home.
- **Category Teal** (`#0b495c`): The AI 입문 card on home and the fill of 기업교육 알아보기.
- **Category Purple** (`#8723ba`): The 직장인 스킬업 card on home.
- Headings in the numbered step section take a dark tint of the same families (`#470024`, `#512369`, `#0d3440`); they are prose here, not tokens.

### Neutral & Surface
- **Canvas** (`#ffffff`): The home body background, catalog course cards and the 더 알아보기 chip.
- **Surface** (`#f5f6f7`): 더보기 buttons inside catalog cards.
- **Surface Alt** (`#f1f1f3`): 더 많은 질문 보기 on the course page.
- **Hover Tint** (`#f9f9fb`): The hover fill of header navigation items.
- **Charcoal** (`#1d1e22`): Dark call-to-action buttons on the catalog (발급 가이드 확인하기, 문의하기).

### Text
- **Ink** (`#0c0e13`): Section headings, header navigation labels, catalog card text and the fill of 후기 자세히 보기. The course page's large h2 computes a near-identical `#0d0e11`.
- **Slate** (`#41414b`): Meta lines in the home review cards (and `#40414b` for bold copy on the course page).
- **Muted** (`#858793`): Supporting lines under home section headings; idle course tabs compute `#858893`.
- **Faint** (`#a4a7b0`): Footer lines, statistic labels and the top utility links (항해, 기업교육, 블로그, 고객센터).
- **Coral** (`#ff4660`): A short label at the top of each home review card.
- **Hero Aqua** (`#93e6f5`): The line above the home headline.
- **On-dark Soft** (`#e0e1e5`): Supporting lines on the dark band of home.

### Not tokens
- Anchors on the Framer pages compute Chromium's default link colours (`#0000ee`, and `#ff0000` while pressed) on the anchor element while the visible labels sit in child text elements. Those defaults are neither brand colours nor states.
- The favicon was not measured; no logo colour is claimed.

## 3. Typography Rules

### Font Family
- **Live surface use**: Pretendard, in two forms. The Framer pages (home and the catalog) set text in separately named faces — `Pretendard Bold` (111 observed uses), `Pretendard Medium` (109) and `Pretendard SemiBold` (13) — each `loaded / high`; the weight lives in the face, so a Medium line can compute `font-weight: 400`. The course page sets `Pretendard, -apple-system, …` from files Team Sparta serves itself (`static.spartacodingclub.kr/static/fonts/Pretendard/Pretendard-Regular.subset.woff2` and siblings; 32 uses). `Gmarket Sans TTF Bold` (4 uses, `loaded`) sets the four 48px statistic figures on home.
- **Official distributed font assets**: Pretendard is Kil Hyung-jin's open-source family; its LICENSE (opened 2026-09-30) reads "This Font Software is licensed under the SIL Open Font License, Version 1.1." Gmarket Sans is Gmarket's own typeface; Gmarket's font page (corp.gmarket.com/fonts) returned a page titled "G마켓 - 쇼핑을 바꾸는 쇼핑" with no licence text in its served HTML, so no licence is stated here.
- **Official product use**: no Team Sparta page opened this session names its typefaces; not claimed.
- **Declared only (no visible use)**: Cafe24Ohsquare, Cafe24Surround, Dokrip, DsDigital, DungGeunMo, EBSHunminjeongeumSBA, GmarketSans, Jeju Hallasan, NanumHandWritingDaughter, Inter, Noto Sans, Pretendard Black, Pretendard ExtraBold and FontAwesome are declared by the pages with 0 observed uses.
- **Not brand faces**: 150 elements compute the browser default `sans-serif` (Framer anchors and list wrappers whose visible text is a child) and 10 course-page buttons compute `Arial` (the browser's default button face).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Observed on |
|------|------|------|--------|-------------|----------|-------------|
| Hero | Pretendard Bold | 50px | 700 | 66px (1.32) | -1px | Home headline, `#ffffff` |
| Stat | Gmarket Sans TTF Bold | 48px | 700 | 52px (1.08) | normal | Four figures on home, `#0c0e13` |
| Band | Pretendard Bold | 40px | 700 | 54px (1.35) | normal | Conversion band headline, `#ffffff` |
| Step Number | Pretendard Bold | 40px | 700 | 52px (1.3) | normal | Step numerals, `#fa0030` |
| Section | Pretendard Bold | 32px | 700 | 44px (1.375) | normal | Home section headings, `#0c0e13` |
| Section Small | Pretendard Bold | 28px | 700 | 38px (1.36) | normal | Home section heading |
| Hero Sub | Pretendard Bold | 22px | 700 | 32px (1.45) | normal | Line above the hero, `#93e6f5` |
| Course Title | Pretendard | 22px | 700 | 30px (1.36) | normal | Course page title, `#000000` |
| Card Title | Pretendard Bold | 18px | 700 | 26px (1.44) | normal | Category cards and step copy |
| Eyebrow | Pretendard Bold | 15px | 700 | 22px (1.47) | -0.2px | Total Career Solution, `#fa0030` |
| Label | Pretendard Medium | 15px | 500 | 22px (1.47) | normal | Supporting lines, `#858793` |
| Button | Pretendard | 15px | 700 | 22px (1.47) | normal | Course page buttons and tabs |
| Footer | Pretendard Medium | 13px | 400 | 20px (1.54) | normal | Footer lines, `#a4a7b0` |
| Caption | Pretendard | 12px | 500 | 18px (1.5) | normal | Course page footer, `#a4a7b0` |

### Principles
- **Bold is the voice**: every heading from 18px to 50px is weight 700; only the hero tightens its tracking (-1px), and the eyebrow takes -0.2px.
- **Weight carried by the face**: on the Framer pages the named face (Bold, Medium, SemiBold) decides the visible weight, not the computed `font-weight`.
- **One accent face**: Gmarket Sans appears only on the statistic figures.

## 4. Component Stylings

### Buttons

**Enrolment button (primary)**
- Background: `#fa0030`
- Text: `#ffffff`
- Radius: 38px
- Padding: 16px 20px
- Height: 56px
- Font: 15px / 700 / 22px Pretendard
- States: the probe found no hover or pressed change; focus shows only the browser's default ring
- Use: 수강신청하기 on the course page (320 × 56)

**Enterprise button**
- Background: `#0b495c`
- Text: `#ffffff`
- Radius: 6px
- Padding: 10px 12px
- Height: 40px
- States: no hover change; pressed changes only Chromium's default link colour; focus shows only the default ring
- Use: 기업교육 알아보기 on home

**Review button**
- Background: `#0c0e13`
- Radius: 6px
- Padding: 8px 12px
- Height: 36px
- States: hover and pressed unmeasured; focus shows only the default ring
- Use: 후기 자세히 보기 under the home review cards; the label colour was not recorded

**Catalog dark button**
- Background: `#1d1e22`
- Text: `#ffffff`
- Radius: 8px
- Padding: 14px 12px
- Height: 52px
- Use: 발급 가이드 확인하기 and 문의하기 on the catalog; states not measured

**Grey buttons**
- 더보기 in catalog cards: `#f5f6f7`, 8px radius, 12px 0px padding, 48px tall; states not measured
- 더 많은 질문 보기 on the course page: `#f1f1f3`, `#000000` label, 8px radius, 48px tall, 15px / 700 Pretendard; no hover or pressed change

**Learn-more chip**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 4px
- Padding: 8px 12px
- Height: 30px
- Use: 더 알아보기 on the course page's dark promotion panel; no hover or pressed change

### Tabs & Navigation

**Course tab**
- Text: `#858893`
- Border: 2px bottom edge, transparent at rest
- Padding: 3px 0px 0px
- Height: 53px
- Font: 15px / 700 / 22px Pretendard
- Selected: `#fa0030` label with a 2px `#fa0030` bottom border
- States: hover and pressed unmeasured (a fixed bar covered them); focus shows only the default ring
- Use: 강의소개, 커리큘럼 and the other section tabs of the course page

**Header navigation**
- Text: `#0c0e13`
- Padding: 8px 10px
- Height: 40px
- Hover: `#f9f9fb` fill with a 6px radius
- Use: 전체 강의, 취업 캠프, 재직자 캠프, 커뮤니티, 수강후기 and 이벤트

### Cards

**Category card**
- Background: `#d90b32` (also `#0b495c` and `#8723ba`)
- Text: `#ffffff`
- Radius: 16px
- Padding: 32px 32px 48px
- Use: 373 × 460 course-category links at the top of home

**Conversion band**
- Background: `#fa0030`
- Text: `#ffffff`
- Padding: 80px 0px 40px
- Use: the full-bleed 1440 × 547 red band near the foot of home, one link

**Catalog card**
- Background: `#ffffff`
- Text: `#0c0e13`
- Radius: 8px
- Padding: 24px 18px
- Use: 371 × 399 course cards on the catalog

---

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out pages of spartaclub.kr plus fixed keyboard-probe state reads and first-party context)
**Tier 1 sources:** https://spartaclub.kr/ ; https://spartaclub.kr/catalog/scc ; https://spartaclub.kr/product/9 ; https://career.spartaclub.kr/ko/home ; https://blog.career.spartaclub.kr/designer
**Tier 2 sources:** getdesign.md/teamsparta (HTTP 200, the name does not appear in the response) and styles.refero.design/?q=teamsparta (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Enrolment button: 16px vertical, 20px horizontal padding at 56px height
- Small dark buttons: 8px 12px (36px) and 10px 12px (40px)
- Catalog cards: 24px 18px padding; category cards: 32px 32px 48px with a 40px gap
- Conversion band: 80px top and 40px bottom padding

### Grid & Container
- Home runs a full-width hero, a row of three category cards, a numbered three-step section, statistics, review cards in a row of four, and the red band before the footer.
- The catalog lists course cards in rows of three under a monthly ranking heading.
- The course page places a tab bar (강의소개, 커리큘럼, …) and the enrolment button above long-form course content and an FAQ.

### Whitespace Philosophy
- **Loud blocks, quiet chrome**: colour carries the sections; buttons and tabs stay small and flat.
- **Flat segmentation**: pale greys (`#f5f6f7`, `#f1f1f3`) and colour blocks separate content; nothing floats.

### Border Radius Scale
- 0px: the default and the course tabs
- 4px: learn-more chip
- 6px: dark home buttons and hovered navigation items
- 8px: catalog cards, grey and charcoal buttons
- 16px: home category cards
- 38px: the enrolment button

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Every captured element |
| Grey fill | `#f5f6f7` / `#f1f1f3` | Secondary buttons |
| Colour block | `#d90b32`, `#0b495c`, `#8723ba`, `#fa0030` | Category cards and the conversion band |
| Dark | `#0c0e13` / `#1d1e22` | Dark buttons |

**Shadow Philosophy**: all 429 element records compute `box-shadow: none`. Emphasis comes from saturated fills and bold type.

## 7. Do's and Don'ts

### Do
- Use `#fa0030` for the primary action, the selected tab and the one red band
- Set headings in Pretendard at weight 700; keep supporting lines in `#858793`
- Use the category colours `#d90b32`, `#0b495c` and `#8723ba` for course categories
- Keep controls small and flat: 4px, 6px and 8px radii; a 38px pill only for enrolment
- Use Gmarket Sans only for statistic figures

### Don't
- Don't add shadows; none of the 429 captured elements has one
- Don't invent hover or focus styles; the captured buttons show none of their own (the header navigation's `#f9f9fb` hover is the one measured exception)
- Don't render Pretendard or Gmarket Sans with another face in their place
- Don't treat Chromium's default link colours on Framer anchors as brand colours
- Don't spread the red across secondary buttons; those are ink, charcoal or grey

## 8. Responsive Behavior

### Breakpoints
Only the 1440 × 900 desktop viewport was captured. The Framer stylesheet served with home declares its text presets at three ranges — 1200px and up, 820–1199px and 0–819px (for example the 32px section heading steps to 30px and then 26px); those values were read from the served CSS, not from a narrow-viewport capture.

### Touch Targets
- Enrolment button: 56px
- Course tabs: 53px
- Catalog dark buttons: 52px; grey buttons: 48px
- Enterprise button and header navigation: 40px
- Review button: 36px; learn-more chip: 30px

### Collapsing Strategy
- How the pages collapse was not captured.

### Image Behavior
- Hero media and course imagery sit flat, without borders or shadows.

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action, selected tab, band: `#fa0030` with `#ffffff`
- Ink: `#0c0e13`; supporting text `#858793`, `#41414b`; footer `#a4a7b0`
- Categories: `#d90b32`, `#0b495c`, `#8723ba`
- Greys: `#f5f6f7`, `#f1f1f3`, hover `#f9f9fb`; charcoal `#1d1e22`

### Example Component Prompts
- "Create an enrolment button: `#fa0030` background, `#ffffff` 15px Pretendard label at weight 700 with a 22px line, 38px radius, 16px 20px padding, 56px tall, no shadow."
- "Build course section tabs: 15px Pretendard at weight 700 in `#858893`, 53px tall, a 2px transparent bottom border; the selected tab turns `#fa0030` with a 2px `#fa0030` bottom border."
- "Create a category card: `#d90b32` background (or `#0b495c`, `#8723ba`), white 18px bold copy, 16px radius, 32px 32px 48px padding, 373 × 460."
- "Create a small dark button: `#0c0e13` background, 6px radius, 8px 12px padding, 36px tall."

### Iteration Guide
1. One red, `#fa0030`, for the primary action and selection
2. Pretendard 700 for every heading; Gmarket Sans only for statistics
3. Category colours for course families, never for buttons in general
4. Small radii on controls; 16px on category cards; the 38px pill is for enrolment
5. Flat everywhere

---

## 10. Voice & Tone

Team Sparta's voice is **energetic, encouraging and plain-spoken**. The positioning line "AI 시대, 미래를 돌파하는 힘" (the power to break through the future in the AI era) and the careers-site belief that anyone can wake their potential and do something big set the register: inclusive, forward-leaning, never elitist.

| Context | Tone |
|---|---|
| Hero headlines | Aspirational and momentum-driven. "AI 시대, 미래를 돌파하는 힘." |
| Course and section labels | Plain and outcome-first. "AI 시대 취업 캠프", "직장인 스킬업", "AI 입문". |
| Proof lines | Concrete claims. "누적 수강생, 취업생 수 1위!" |
| Actions | Direct, low-friction. "수강신청하기", "기업교육 알아보기", "후기 자세히 보기", "더 많은 질문 보기". |
| Course titles | Benefit-first. "오늘 배워 내일 바로 써먹는 ChatGPT 활용법". |

**Voice samples (verbatim, opened 2026-09-30):**
- "스파르타클럽 | AI시대, 미래를 돌파하는 힘" — spartaclub.kr page title.
- "도전하는 누구나 잠재력을 깨울 수 있도록" — the line above the home headline.
- "지금 스파르타클럽에서 / 잠재력을 깨우세요." — the red conversion band.
- "스파르타클럽 AI 강의 | 맞춤형 교육으로 AI 시대 돌파!" — catalog page title.
- "더 많은 활용법을 알고 싶다면?" — course page promotion panel.

**Forbidden register**: fear-based "you'll fall behind" pressure, credential gatekeeping, unexplained jargon, hype without a concrete outcome.

## 11. Brand Narrative

Team Sparta describes itself on its careers site as a company that believes anyone can wake their potential and do something big ("누구나 잠재력을 깨워 큰일을 낼 수 있다고 믿습니다"). It started with IT education; the same page says it now wakes the potential of 200,000 people a year and supplies some 4,000 trained people to the market, reports its 2024 operating profit and its 2025 selection as a 예비 유니콘 company, and states the aim that anyone can gain and use AI skills ("누구나 AI 역량을 갖추고 활용할 수 있도록").

The team blog's introduction of the design team — "“1명 같은 5명이 되자.” 팀스파르타 디자인팀을 소개합니다!" — describes a design team "누구나 큰일 내는 세상을 만드는 팀스파르타의" and an online part working on 스파르타코딩클럽, where government funding lets learners take courses free once they hold a 내일배움카드. It names the company's core values as 빠우성 — 빠르게, 와우하게, 진정성있게 (fast, wow, with sincerity) — says sincerity matters most to the design team, and that the team always tries to be the user's advocate ("디자인팀은 언제나 사용자의 대변인이 되려고 해요").

The product has since broadened its name and its catalog. spartacodingclub.kr redirects to spartaclub.kr; the brand on the page is 스파르타클럽; and the courses on the captured pages are AI courses — ChatGPT, Claude Code, AI PPT and automation — next to the funded 내일배움캠프, camps for working people, the 항해 programme and corporate training. The design reads the same way: loud category colour and bold Pretendard for momentum, one red for the next step, and small, flat controls around it.

## 12. Principles

1. **Anyone can break through.** The stated belief of the company. *UI implication:* keep entry copy plain and outcome-first; never gate the value proposition behind jargon.
2. **One action, one red.** *UI implication:* `#fa0030` fills the enrolment button, marks the selected tab and paints the one conversion band; secondary actions are ink, charcoal or grey.
3. **Momentum by colour, not decoration.** *UI implication:* course families get saturated blocks (`#d90b32`, `#0b495c`, `#8723ba`); nothing gets a shadow.
4. **Fast, wow, sincere (빠우성).** The company's stated values. *UI implication:* flat pages, earned moments of delight and proof lines backed by numbers.
5. **The design team is the user's advocate.** The design team's own description. *UI implication:* dense catalogs stay scannable with consistent card geometry.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Team Sparta user segments (career-changers, working professionals up-skilling, government-funded bootcamp students, corporate training buyers), not individual people.*

**김도현, 27, 서울.** A non-CS graduate preparing for a career change. Browses the funded 내일배움캠프 options and the AI 시대 취업 캠프 card; values copy that never assumes prior coding knowledge.

**이서연, 34, 판교.** A marketer adding AI tools to her work after hours through 직장인 스킬업 courses such as the ChatGPT course; likes that each course page states what she can use tomorrow.

**박준호, 41, 기업 인사팀.** An L&D manager evaluating 기업교육 for his company; reaches it from the teal 기업교육 알아보기 button and wants proof before committing.

## 14. States

Only these states were observed on the three captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Hover (header navigation)** | Transparent → `#f9f9fb` fill with a 6px radius (probe; the bundle frame records the radius change). |
| **No change** | 수강신청하기, 더 많은 질문 보기 and 더 알아보기 show no hover or pressed change; 기업교육 알아보기 shows no hover change and only Chromium's default link colour while pressed. |
| **Selected (course tab)** | `#fa0030` label and 2px `#fa0030` bottom border; idle tabs `#858893`. |
| **Hover (category cards)** | The bundle's hover and focus frames record a transform change; its value was not recorded, so it is unmeasured. |
| **Focus** | Every probed control shows only the browser's default ring (`outline-style: auto`); no authored focus style. |
| **Unmeasured** | Hover and pressed on the course tabs (covered by a fixed bar) and on 후기 자세히 보기 (:hover did not match). |

Error, empty, loading and success states were not captured and are not described.

## 15. Motion & Easing

The probe read the transitions the controls compute. 수강신청하기 transitions `width 0.2s ease-in-out`; the course tabs carry a transition of up to 300ms whose property the probe did not name; 더 많은 질문 보기, 더 알아보기, 기업교육 알아보기, 후기 자세히 보기 and the header navigation compute `transition: all 0s`. The Framer category cards change transform on hover, but the value and timing were not recorded. Nothing else about motion (hero media, scroll reveals) was measured; treat it as unspecified and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/teamsparta.json (capturedAt 2026-09-30T11:09:02Z), deterministic collector, 1440x900, logged out: spartaclub.kr (spartacodingclub.kr redirects here), /catalog/scc, /product/9. States: fixed keyboard probe raws docs/research/2026-09-29-growth/raw/teamsparta-states-course.json and teamsparta-states-home.json.
- §1, §10, §11 context: spartaclub.kr home, catalog and course page copy and footer; career.spartaclub.kr/ko/home; blog.career.spartaclub.kr/designer, opened 2026-09-30.
- §3 licence: the Pretendard LICENSE on GitHub, opened 2026-09-30.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->
