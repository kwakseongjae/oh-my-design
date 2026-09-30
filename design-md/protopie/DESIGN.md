---
id: protopie
name: ProtoPie
display_name_kr: 프로토파이
country: KR
category: design-tools
homepage: "https://www.protopie.io/"
primary_color: "#8169ff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=protopie.io&sz=128"
verified: "2026-09-30"
added: "2026-07-02"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.protopie.io/", inspected: "2026-09-30" }
    - { id: surface-2, kind: marketing, url: "https://www.protopie.io/discover", inspected: "2026-09-30" }
    - { id: surface-3, kind: marketing, url: "https://www.protopie.io/plans", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://www.protopie.io/", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://www.protopie.io/discover", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://www.protopie.io/plans", captured: "2026-09-30" }
    - { id: protopie-probe-home, kind: product-surface, url: "https://www.protopie.io/", captured: "2026-09-30" }
    - { id: protopie-probe-plans, kind: product-surface, url: "https://www.protopie.io/plans", captured: "2026-09-30" }
    - { id: protopie-ko, kind: official-doc, url: "https://www.protopie.io/ko/", captured: "2026-09-30" }
    - { id: protopie-legal, kind: official-doc, url: "https://www.protopie.io/legal", captured: "2026-09-30" }
    - { id: figtree-license, kind: license, url: "https://raw.githubusercontent.com/google/fonts/main/ofl/figtree/OFL.txt", captured: "2026-09-30" }
    - { id: inter-license, kind: license, url: "https://raw.githubusercontent.com/rsms/inter/master/LICENSE.txt", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &cta { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"8\"]", captured: "2026-09-30" }
    "tokens.colors.on-primary": *cta
    "tokens.colors.primary-hover": &ctastate { surface_id: home, source_id: protopie-probe-home, method: live-state-probe, selector: "a Get started for free (198 x 53.2, rest bg rgb(129, 105, 255)): hover and pressed bg -> rgb(91, 62, 224); transition all 0s; focus (Tab #6) browser default ring rgb(0, 95, 204) auto 1px only", captured: "2026-09-30" }
    "tokens.colors.annotation": &note { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.ink": &hero { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h1", captured: "2026-09-30" }
    "tokens.colors.body": &discoverlead { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::p", captured: "2026-09-30" }
    "tokens.colors.muted": &carddesc { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.faint": &faint { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.surface": &protocard { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"10\"]", captured: "2026-09-30" }
    "tokens.colors.white": &body { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::body", captured: "2026-09-30" }
    "tokens.typography.family.display": *hero
    "tokens.typography.family.body": &lead { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.family.annotation": *note
    "tokens.typography.display-hero.size": *hero
    "tokens.typography.display-hero.weight": *hero
    "tokens.typography.display-hero.lineHeight": *hero
    "tokens.typography.display-hero.use": *hero
    "tokens.typography.section.size": &h2 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.typography.section.weight": *h2
    "tokens.typography.section.lineHeight": *h2
    "tokens.typography.section.use": *h2
    "tokens.typography.subsection.size": &h3 { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h3", captured: "2026-09-30" }
    "tokens.typography.subsection.weight": *h3
    "tokens.typography.subsection.lineHeight": *h3
    "tokens.typography.subsection.use": *h3
    "tokens.typography.card-title.size": &h4 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h4", captured: "2026-09-30" }
    "tokens.typography.card-title.weight": *h4
    "tokens.typography.card-title.lineHeight": *h4
    "tokens.typography.card-title.use": *h4
    "tokens.typography.plan-title.size": &plantitle { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::p", captured: "2026-09-30" }
    "tokens.typography.plan-title.weight": *plantitle
    "tokens.typography.plan-title.lineHeight": *plantitle
    "tokens.typography.plan-title.use": *plantitle
    "tokens.typography.lead.size": *lead
    "tokens.typography.lead.weight": *lead
    "tokens.typography.lead.lineHeight": *lead
    "tokens.typography.lead.use": *lead
    "tokens.typography.nav.size": &navlabel { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.nav.weight": *navlabel
    "tokens.typography.nav.lineHeight": *navlabel
    "tokens.typography.nav.use": *navlabel
    "tokens.typography.button-lg.size": &btnlg { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.button-lg.weight": *btnlg
    "tokens.typography.button-lg.lineHeight": *btnlg
    "tokens.typography.button-lg.use": *btnlg
    "tokens.typography.button.size": &btn { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.button.weight": *btn
    "tokens.typography.button.lineHeight": *btn
    "tokens.typography.button.use": *btn
    "tokens.typography.button-sm.size": &btnsm { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.button-sm.weight": *btnsm
    "tokens.typography.button-sm.lineHeight": *btnsm
    "tokens.typography.button-sm.use": *btnsm
    "tokens.typography.body.size": *carddesc
    "tokens.typography.body.weight": *carddesc
    "tokens.typography.body.lineHeight": *carddesc
    "tokens.typography.body.use": *carddesc
    "tokens.typography.body-sm.size": &small { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.body-sm.weight": *small
    "tokens.typography.body-sm.lineHeight": *small
    "tokens.typography.body-sm.use": *small
    "tokens.typography.caption.size": &tag { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::p", captured: "2026-09-30" }
    "tokens.typography.caption.weight": *tag
    "tokens.typography.caption.lineHeight": *tag
    "tokens.typography.caption.use": *tag
    "tokens.typography.eyebrow.size": &eyebrow { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.eyebrow.weight": *eyebrow
    "tokens.typography.eyebrow.lineHeight": *eyebrow
    "tokens.typography.eyebrow.tracking": *eyebrow
    "tokens.typography.eyebrow.use": *eyebrow
    "tokens.typography.annotation.size": *note
    "tokens.typography.annotation.weight": *note
    "tokens.typography.annotation.lineHeight": *note
    "tokens.typography.annotation.tracking": *note
    "tokens.typography.annotation.use": *note
    "tokens.spacing.cta-y": *cta
    "tokens.spacing.cta-x": *cta
    "tokens.spacing.header-cta-y": &header { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"7\"]", captured: "2026-09-30" }
    "tokens.spacing.sm-y": &smallbtn { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"13\"]", captured: "2026-09-30" }
    "tokens.spacing.nav-y": &nav { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"4\"]", captured: "2026-09-30" }
    "tokens.spacing.nav-x": *nav
    "tokens.spacing.card-y": *protocard
    "tokens.spacing.card-x": *protocard
    "tokens.rounded.button": *cta
    "tokens.rounded.card": &rescard { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"23\"]", captured: "2026-09-30" }
    "tokens.rounded.panel": *protocard
    "tokens.rounded.chip": &chipstate { surface_id: surface-3, source_id: protopie-probe-plans, method: live-state-probe, selector: "div All feature filter (68.6 x 44, selected): rest bg rgb(129, 105, 255), radius 100px, padding 10px 24px, ::after border 1px solid rgb(129, 105, 255); hover and pressed no change. div Essentials (127.9 x 44): rest bg rgb(255, 255, 255); hover and pressed opacity 1 -> 0.8; focus browser default ring only on both", captured: "2026-09-30" }
    "tokens.components.primary-button.type": *cta
    "tokens.components.primary-button.bg": *cta
    "tokens.components.primary-button.fg": *cta
    "tokens.components.primary-button.radius": *cta
    "tokens.components.primary-button.padding": *cta
    "tokens.components.primary-button.height": *cta
    "tokens.components.primary-button.font": *btnlg
    "tokens.components.primary-button.hover": *ctastate
    "tokens.components.primary-button.pressed": *ctastate
    "tokens.components.primary-button.states": *ctastate
    "tokens.components.primary-button.use": *cta
    "tokens.components.header-button.type": *header
    "tokens.components.header-button.bg": *header
    "tokens.components.header-button.fg": *header
    "tokens.components.header-button.radius": *header
    "tokens.components.header-button.padding": *header
    "tokens.components.header-button.height": *header
    "tokens.components.header-button.font": *btn
    "tokens.components.header-button.hover": &demostate { surface_id: home, source_id: protopie-probe-home, method: live-state-probe, selector: "a Book a Demo in the header (133.6 x 40, rest bg rgb(129, 105, 255)): hover and pressed bg -> rgb(91, 62, 224); transition all 0s; focus (Tab #5) browser default ring only", captured: "2026-09-30" }
    "tokens.components.header-button.pressed": *demostate
    "tokens.components.header-button.states": *demostate
    "tokens.components.header-button.use": *header
    "tokens.components.small-button.type": *smallbtn
    "tokens.components.small-button.bg": *smallbtn
    "tokens.components.small-button.fg": *smallbtn
    "tokens.components.small-button.radius": *smallbtn
    "tokens.components.small-button.padding": *smallbtn
    "tokens.components.small-button.height": *smallbtn
    "tokens.components.small-button.font": *btnsm
    "tokens.components.small-button.states": *smallbtn
    "tokens.components.small-button.use": *smallbtn
    "tokens.components.text-button.type": &startfree { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"6\"]", captured: "2026-09-30" }
    "tokens.components.text-button.bg": *startfree
    "tokens.components.text-button.fg": *startfree
    "tokens.components.text-button.radius": *startfree
    "tokens.components.text-button.height": *startfree
    "tokens.components.text-button.font": *btn
    "tokens.components.text-button.hover": &startstate { surface_id: home, source_id: protopie-probe-home, method: live-state-probe, selector: "a Start for Free in the header (101.6 x 40, transparent): hover and pressed label rgb(129, 105, 255) -> rgb(91, 62, 224); transition all 0s; focus (Tab #4) browser default ring only", captured: "2026-09-30" }
    "tokens.components.text-button.pressed": *startstate
    "tokens.components.text-button.states": *startstate
    "tokens.components.text-button.use": *startfree
    "tokens.components.ghost-button.type": &ghost { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"19\"]", captured: "2026-09-30" }
    "tokens.components.ghost-button.bg": *ghost
    "tokens.components.ghost-button.fg": *ghost
    "tokens.components.ghost-button.radius": *ghost
    "tokens.components.ghost-button.padding": *ghost
    "tokens.components.ghost-button.height": *ghost
    "tokens.components.ghost-button.font": &ghostlabel { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::p", captured: "2026-09-30" }
    "tokens.components.ghost-button.hover": &ghoststate { surface_id: surface-3, source_id: protopie-probe-plans, method: live-state-probe, selector: "a Get Started on the Free plan card (268 x 53.2, rest bg rgba(123, 99, 255, 0)): hover and pressed bg -> rgb(129, 105, 255), label rgb(129, 105, 255) -> rgb(255, 255, 255); transition all 0s; focus browser default ring only", captured: "2026-09-30" }
    "tokens.components.ghost-button.pressed": *ghoststate
    "tokens.components.ghost-button.states": *ghoststate
    "tokens.components.ghost-button.use": *ghost
    "tokens.components.white-button.type": &whitebtn { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"10\"]", captured: "2026-09-30" }
    "tokens.components.white-button.bg": *whitebtn
    "tokens.components.white-button.fg": *whitebtn
    "tokens.components.white-button.radius": *whitebtn
    "tokens.components.white-button.padding": *whitebtn
    "tokens.components.white-button.height": *whitebtn
    "tokens.components.white-button.hover": &whitestate { surface_id: surface-3, source_id: protopie-probe-plans, method: live-state-probe, selector: "a Learn More on a plan card (268 x 53.2, rest bg rgb(255, 255, 255)): hover and pressed label rgb(129, 105, 255) -> rgb(91, 62, 224); transition all 0s; focus browser default ring only", captured: "2026-09-30" }
    "tokens.components.white-button.pressed": *whitestate
    "tokens.components.white-button.states": *whitestate
    "tokens.components.white-button.use": *whitebtn
    "tokens.components.nav-item.type": *nav
    "tokens.components.nav-item.fg": *navlabel
    "tokens.components.nav-item.padding": *nav
    "tokens.components.nav-item.height": *nav
    "tokens.components.nav-item.font": *navlabel
    "tokens.components.nav-item.hover": &navstate { surface_id: home, source_id: protopie-probe-home, method: live-state-probe, selector: "a Pricing in the header nav (101.5 x 60): hover and pressed label rgb(24, 24, 24) -> rgb(91, 62, 224); transition all 0s; focus (Tab #2) browser default ring only", captured: "2026-09-30" }
    "tokens.components.nav-item.pressed": *navstate
    "tokens.components.nav-item.states": *navstate
    "tokens.components.nav-item.use": *nav
    "tokens.components.industry-tab.type": &tabstate { surface_id: home, source_id: protopie-probe-home, method: live-state-probe, selector: "div Automotive industry tab (106 x 81, selected): rest bg rgb(129, 105, 255), hover and pressed no change. div Website (106 x 81): rest bg rgba(122, 100, 255, 0.35), hover and pressed -> rgba(122, 100, 255, 0.5); transition all 0s; focus (Tabs #11, #12) browser default ring only", captured: "2026-09-30" }
    "tokens.components.industry-tab.bg": *tabstate
    "tokens.components.industry-tab.radius": *tabstate
    "tokens.components.industry-tab.size": *tabstate
    "tokens.components.industry-tab.selected": *tabstate
    "tokens.components.industry-tab.hover": *tabstate
    "tokens.components.industry-tab.pressed": *tabstate
    "tokens.components.industry-tab.states": *tabstate
    "tokens.components.industry-tab.use": *tabstate
    "tokens.components.filter-chip.type": *chipstate
    "tokens.components.filter-chip.bg": *chipstate
    "tokens.components.filter-chip.radius": *chipstate
    "tokens.components.filter-chip.padding": *chipstate
    "tokens.components.filter-chip.height": *chipstate
    "tokens.components.filter-chip.selected": *chipstate
    "tokens.components.filter-chip.hover": *chipstate
    "tokens.components.filter-chip.pressed": *chipstate
    "tokens.components.filter-chip.states": *chipstate
    "tokens.components.filter-chip.use": *chipstate
    "tokens.components.resource-card.type": *rescard
    "tokens.components.resource-card.bg": *rescard
    "tokens.components.resource-card.fg": *rescard
    "tokens.components.resource-card.radius": *rescard
    "tokens.components.resource-card.shadow": *rescard
    "tokens.components.resource-card.size": *rescard
    "tokens.components.resource-card.hover": &resstate { surface_id: home, source_id: protopie-probe-home, method: live-state-probe, selector: "a ProtoPie School resource card (384 x 385.8): hover shadow rgba(0, 0, 0, 0.08) 0px 3px 12px 0px, rgba(0, 0, 0, 0.2) 0px 0px 2px 0px -> rgba(0, 0, 0, 0.08) 0px 3px 12px 0px, rgba(0, 0, 0, 0.08) 0px 0px 6px 3px; transition all 0s", captured: "2026-09-30" }
    "tokens.components.resource-card.use": *rescard
    "tokens.components.prototype-card.type": *protocard
    "tokens.components.prototype-card.bg": *protocard
    "tokens.components.prototype-card.radius": *protocard
    "tokens.components.prototype-card.padding": *protocard
    "tokens.components.prototype-card.size": *protocard
    "tokens.components.prototype-card.use": *protocard
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#8169ff"
    on-primary: "#ffffff"
    primary-hover: "#5b3ee0"
    annotation: "#6d4ff0"
    ink: "#181818"
    body: "#373737"
    muted: "#474747"
    faint: "#999999"
    surface: "#fafafa"
    white: "#ffffff"
  typography:
    family: { display: "Figtree", body: "Inter", annotation: "Palmer Lake Print Regular" }
    display-hero: { size: 62, weight: 700, lineHeight: 1.29, use: "Hero headline on home and /discover, Figtree, 80px line, in #181818" }
    section: { size: 48, weight: 700, lineHeight: 1.3, use: "Section headlines on home and /discover, Figtree, 62.4px line, in #181818" }
    subsection: { size: 36, weight: 700, lineHeight: 1.4, use: "Plan names and comparison headings on /plans, Figtree, 50.4px line, in #181818" }
    card-title: { size: 28, weight: 700, lineHeight: 1.4, use: "Resource card and feature headings, Figtree, 39.2px line, in #181818 (white on the dark band)" }
    plan-title: { size: 24, weight: 700, lineHeight: 1.4, use: "Violet plan headers (#8169ff) and ink comparison-row titles on /plans, Figtree, 33.6px line" }
    lead: { size: 24, weight: 400, lineHeight: 1.4, use: "Hero lead on home (#181818) and /discover (#373737), Inter, 33.6px line" }
    nav: { size: 16, weight: 700, lineHeight: 1.4, use: "Header navigation labels (Solutions, Resources, Features, Pricing, Download), Figtree, 22.4px line, in #181818" }
    button-lg: { size: 18, weight: 600, lineHeight: 1.4, use: "Labels of the 53px buttons (Get started for free, Read Comparison), Inter, 25.2px line" }
    button: { size: 16, weight: 600, lineHeight: 1.4, use: "Header button labels (Book a Demo, Start for Free) and inline links, Inter, 22.4px line" }
    button-sm: { size: 14, weight: 600, lineHeight: 1.4, use: "Labels of the 32px buttons (Learn More, Request Demo), Inter, 19.6px line" }
    body: { size: 16, weight: 400, lineHeight: 1.5, use: "Resource card descriptions and feature copy, Inter, 24px line, in #474747" }
    body-sm: { size: 14, weight: 400, lineHeight: 1.4, use: "Footer text, Inter, 19.6px line, in #373737" }
    caption: { size: 12, weight: 600, lineHeight: 1.4, use: "Prototype tags on /discover, Inter, 16.8px line, in #474747" }
    eyebrow: { size: 11, weight: 700, lineHeight: 1.2, tracking: -0.11, use: "Industry tab labels on the dark band, Figtree, 13.2px line, in #ffffff" }
    annotation: { size: 48, weight: 400, lineHeight: 0.79, tracking: 0.48, use: "Handwritten annotations beside the feature rows on home, Palmer Lake Print Regular, 38px line, in #6d4ff0" }
  spacing: { cta-y: 14, cta-x: 16, header-cta-y: 12, sm-y: 6, nav-y: 4, nav-x: 20, card-y: 25, card-x: 30 }
  rounded: { button: 4, card: 12, panel: 16, chip: 100 }
  components:
    primary-button: { type: button, bg: "#8169ff", fg: "#ffffff", radius: "4px", padding: "14px 16px", height: "53px", font: "18px / 600 / 25.2px Inter", hover: "bg #5b3ee0", pressed: "bg #5b3ee0", states: "probe: hover and pressed settle on #5b3ee0 (transition all 0s) on Get started for free and Subscribe Now; focus draws only the browser default ring", use: "Get started for free in the home hero (198 x 53), Read Comparison, Explore Gallery, Get Started for Free on /discover and Subscribe Now on /plans" }
    header-button: { type: button, bg: "#8169ff", fg: "#ffffff", radius: "4px", padding: "12px 16px", height: "40px", font: "16px / 600 / 22.4px Inter", hover: "bg #5b3ee0", pressed: "bg #5b3ee0", states: "probe: hover and pressed settle on #5b3ee0; focus (Tab #5) draws only the browser default ring", use: "Book a Demo at the right end of the header on all three pages (134 x 40); View All Features and Get Started (46px) share the 12px 16px padding" }
    small-button: { type: button, bg: "#8169ff", fg: "#ffffff", radius: "4px", padding: "6px 16px", height: "32px", font: "14px / 600 / 19.6px Inter", states: "rest only: this size was not probed, and its bundle frames (#7f66fd, #8068fe) are Framer transition frames, so no hover or pressed value is declared", use: "Request Demo on the dark industry band of home; Get Started, Subscribe and Chat with Us under the /plans comparison" }
    text-button: { type: button, bg: "transparent", fg: "#8169ff", radius: "4px", height: "40px", font: "16px / 600 / 22.4px Inter", hover: "label #5b3ee0", pressed: "label #5b3ee0", states: "probe: the label settles on #5b3ee0; focus (Tab #4) draws only the browser default ring", use: "Start for Free beside Book a Demo in the header (102 x 40)" }
    ghost-button: { type: button, bg: "transparent", fg: "#8169ff", radius: "4px", padding: "14px 16px", height: "53px", font: "18px / 600 / 25.2px Inter", hover: "bg #8169ff, label #ffffff", pressed: "bg #8169ff, label #ffffff", states: "probe on /plans: the button fills violet on hover and pressed; focus draws only the browser default ring", use: "View All Prototypes and Learn More on /discover (202 x 53, 131 x 53) and Get Started on the /plans Free card (268 x 53); no border is drawn at rest" }
    white-button: { type: button, bg: "#ffffff", fg: "#8169ff", radius: "4px", padding: "14px 16px", height: "53px", hover: "label #5b3ee0", pressed: "label #5b3ee0", states: "probe on /plans: the label settles on #5b3ee0; focus draws only the browser default ring", use: "Learn More on a /plans card (268 x 53)" }
    nav-item: { type: tab, fg: "#181818", padding: "4px 20px", height: "60px", font: "16px / 700 / 22.4px Figtree", hover: "label #5b3ee0", pressed: "label #5b3ee0", states: "probe on Pricing: the label turns #5b3ee0 on hover and pressed; focus (Tab #2) draws only the browser default ring; no selected variant was observed", use: "Solutions, Resources, Features, Pricing and Download in the sticky 60px header" }
    industry-tab: { type: tab, bg: "rgba(122, 100, 255, 0.35)", radius: "4px", size: "106px x 81px", selected: "bg #8169ff", hover: "bg rgba(122, 100, 255, 0.5)", pressed: "bg rgba(122, 100, 255, 0.5)", states: "probe: unselected tabs deepen to 0.5 alpha on hover and pressed; the selected tab shows no change; focus draws only the browser default ring", use: "Automotive, Website, Mobile & Tablet, TV & Productions, Smartwatches and Game tabs on the dark industry band of home" }
    filter-chip: { type: tab, bg: "#ffffff", radius: "100px", padding: "10px 24px", height: "44px", selected: "bg #8169ff with a 1px solid #8169ff ::after border", hover: "opacity 0.8", pressed: "opacity 0.8", states: "probe on /plans: unselected chips fade to opacity 0.8 on hover and pressed; the selected chip shows no change; focus draws only the browser default ring", use: "Feature filters (All, Essentials, Collaboration, Security, Support, Add-ons) above the /plans comparison" }
    resource-card: { type: card, bg: "rgba(255, 255, 255, 0.2)", fg: "#181818", radius: "12px", shadow: "rgba(0, 0, 0, 0.08) 0px 3px 12px 0px, rgba(0, 0, 0, 0.2) 0px 0px 2px 0px", size: "384px x 386px", hover: "shadow rgba(0, 0, 0, 0.08) 0px 3px 12px 0px, rgba(0, 0, 0, 0.08) 0px 0px 6px 3px", use: "ProtoPie School, Community and Blog cards on home (captures 23 to 25)" }
    prototype-card: { type: card, bg: "#fafafa", radius: "16px", padding: "25px 30px 33px", size: "373px x 371px", use: "Featured prototype cards on /discover" }
  components_harvested: true
---

# Design System Inspiration of ProtoPie

## 1. Visual Theme & Atmosphere

ProtoPie (프로토파이) is the interaction prototyping tool made by Studio XID; its terms of service are issued by Studio XID Korea Inc. and Studio XID, Inc., and the site footer reads "© 2026 Studio XID". The product lets designers build prototypes that behave like the finished thing — multi-device prototyping, interaction logic, hardware and system integration, developer handoff — and sells into automotive, aviation, finance, gaming, MedTech, IoT and digital products. Its current evolution is the AI turn: the site's title changed from "ProtoPie: Interactive Prototyping Tool" (July 2026) to "ProtoPie: AI-driven Prototyping Platform", the hero now claims "#1 AI-driven advanced prototyping platform", and the feature menu adds ProtoPie AI (New) and ProtoPie MCP alongside hardware integration (Beta). The Korean site at /ko still calls it "인터랙티브 프로토타이핑 툴". Around the product sit ProtoPie School, the ProtoPioneers community and a prototype gallery.

The website is a Framer build with one violet doing the work. `#8169ff` fills every primary action — Book a Demo in the header of every page, the 53px hero and section buttons, Subscribe Now — and marks the selected industry tab and filter chip; hover darkens it to `#5b3ee0`. Headlines are set in Figtree Bold (700) in near-black `#181818`, and body copy in Inter, stepping down through `#373737`, `#474747` and `#999999`. A handwritten face, Palmer Lake Print, adds violet `#6d4ff0` annotations beside the feature rows. Geometry is tight — 4px buttons, 12px and 16px cards — and depth is kept to one soft two-layer shadow on the resource cards.

**Key Characteristics:**
- One violet: `#8169ff` for every primary action, the selected industry tab and the selected filter chip; hover `#5b3ee0`
- Figtree Bold 700 for all headlines (62px hero, 48px sections), Inter for reading copy and button labels
- Handwritten Palmer Lake Print annotations in `#6d4ff0` at 48px
- 4px-radius buttons in four forms: filled, text, ghost that fills on hover, and white with a violet label
- Near-black ink `#181818` rather than pure black; greys `#373737`, `#474747`, `#999999`
- Flat pages except the resource cards, which carry a soft two-layer shadow that spreads on hover

## Primary tasks

- Turn an interaction idea into a working prototype without writing production code
- Prototype across devices and connect real hardware and system inputs
- Generate interactions with AI and hand clean specs to developers
- Compare the plans before subscribing or booking a demo
- Learn prototyping through ProtoPie School and the community

## 2. Color Palette & Roles

Every token below was read on 2026-09-30 from protopie.io, /discover and /plans by the deterministic collector, and state values by the fixed keyboard probe. The tokens describe ProtoPie's public website; the ProtoPie Studio and Cloud apps were not captured.

### Primary
- **ProtoPie Violet** (`#8169ff`): The fill of Book a Demo in the header of all three captured pages (the same 134 × 40 fill recorded 3 times across the three surfaces), of the hero's Get started for free and of every 53px section button, and the fill of the selected industry tab and the selected /plans filter chip. It is the primary because it is the only saturated colour the product surfaces use in primary roles: primary action fill, selected state and link label.
- **Violet Hover** (`#5b3ee0`): The settled hover and pressed fill of the violet buttons and the hover label of the text, white and navigation items (probe, `transition: all 0s`).
- **On Primary** (`#ffffff`): Labels on violet.

### Accent
- **Annotation Violet** (`#6d4ff0`): The handwritten Palmer Lake Print notes beside the feature rows on home. It is decoration, not an action colour.

### Neutral & Surface
- **White** (`#ffffff`): The page canvas (the body computes `#ffffff`) and the white plan button.
- **Surface** (`#fafafa`): The featured prototype cards on /discover.

### Text
- **Ink** (`#181818`): Headlines, navigation labels and the home hero lead.
- **Body** (`#373737`): The /discover lead and the footer.
- **Muted** (`#474747`): Resource card descriptions and prototype tags.
- **Faint** (`#999999`): The design-tool survey line on home and footer notes.
- Footer links also render in `#636363`; it is kept out of the tokens because its captured element was not pinned.

### Brand assets, not tokens
- The ProtoPie logo was not measured; no logo colour is claimed.
- Plan-specific text colours on /plans (a green `#156534`, a brown `#613f00`, a red `#fa5650`) each label a single plan detail and are not roles.

## 3. Typography Rules

### Font Family
- **Live surface use**: `Inter` (685 observed uses, `loaded / high`) for body copy, lists and button labels; `Figtree` (83, `loaded / high`) for h1–h4, navigation labels and plan headers; `Palmer Lake Print Regular` (20, `loaded / high`) for the handwritten annotations. The bundle records no source URLs for them, so how each is served was not established. The body element computes a 12px sans-serif default.
- **Official distributed font assets**: Figtree is published by the Figtree Project Authors (github.com/erikdkennedy/figtree) under the SIL Open Font License 1.1, and Inter by the Inter Project Authors (github.com/rsms/inter) under the same licence; both licence files were opened on 2026-09-30. No licence for Palmer Lake Print was opened, so its licence is not stated. Identification rests on the family names.
- **Official product use**: no ProtoPie page opened this session names its typefaces, so no statement of official product use is made.
- **Declared only (no visible use)**: `Gilroy Bold`, `Gilroy ExtraBold` and `Gilroy SemiBold` (the June record's display face), `General Sans`, `Inter Variable`, `Atkinson Hyperlegible Mono`, `Fragment Mono`, `Edu QLD Hand`, `Noto Sans`, `Noto Sans KR` and `Noto Sans SC` (Google Fonts URLs declared), with 0 observed uses, plus the `Placeholder` fallbacks.
- **Unresolved**: none of the observed families is unidentified.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Observed on |
|------|------|------|--------|-------------|----------|-------------|
| Display Hero | Figtree | 62px | 700 | 80px (1.29) | normal | Home and /discover hero, `#181818` |
| Section | Figtree | 48px | 700 | 62.4px (1.3) | normal | Section headlines |
| Annotation | Palmer Lake Print Regular | 48px | 400 | 38px (0.79) | 0.48px | Feature-row notes, `#6d4ff0` |
| Subsection | Figtree | 36px | 700 | 50.4px (1.4) | normal | /plans plan names and headings |
| Card Title | Figtree | 28px | 700 | 39.2px (1.4) | normal | Resource card and feature headings |
| Plan Title | Figtree | 24px | 700 | 33.6px (1.4) | normal | /plans headers, `#8169ff` or `#181818` |
| Lead | Inter | 24px | 400 | 33.6px (1.4) | normal | Hero leads |
| Button Large | Inter | 18px | 600 | 25.2px (1.4) | normal | 53px button labels |
| Nav | Figtree | 16px | 700 | 22.4px (1.4) | normal | Header navigation |
| Button | Inter | 16px | 600 | 22.4px (1.4) | normal | Header button labels, inline links |
| Body | Inter | 16px | 400 | 24px (1.5) | normal | Card descriptions, `#474747` |
| Button Small | Inter | 14px | 600 | 19.6px (1.4) | normal | 32px button labels |
| Body Small | Inter | 14px | 400 | 19.6px (1.4) | normal | Footer, `#373737` |
| Caption | Inter | 12px | 600 | 16.8px (1.4) | normal | Prototype tags |
| Eyebrow | Figtree | 11px | 700 | 13.2px (1.2) | -0.11px | Industry tab labels |

### Principles
- **Figtree for voice, Inter for information**: every heading and the navigation are Figtree 700; reading copy and all button labels are Inter.
- **A 1.4 rhythm**: most roles from 14px to 36px sit on a 1.4 line height; the hero opens up to 1.29 at 62px.
- **Handwriting as annotation**: Palmer Lake Print appears only as violet notes, never as a heading.

## 4. Component Stylings

### Buttons

**Primary button**
- Background: `#8169ff`
- Text: `#ffffff`
- Radius: 4px
- Padding: 14px 16px
- Height: 53px
- Font: 18px / 600 / 25.2px Inter
- Hover: background `#5b3ee0`
- Pressed: background `#5b3ee0`
- States: focus draws only the browser default ring
- Use: Get started for free, Read Comparison, Explore Gallery, Subscribe Now

**Header button**
- Background: `#8169ff`
- Text: `#ffffff`
- Radius: 4px
- Padding: 12px 16px
- Height: 40px
- Font: 16px / 600 / 22.4px Inter
- Hover: background `#5b3ee0`
- Pressed: background `#5b3ee0`
- Use: Book a Demo in the header of every page

**Small button**
- Background: `#8169ff`
- Text: `#ffffff`
- Radius: 4px
- Padding: 6px 16px
- Height: 32px
- Font: 14px / 600 / 19.6px Inter
- States: rest only; not probed at this size
- Use: Request Demo on the dark band; Get Started, Subscribe and Chat with Us on /plans

**Text button**
- Background: transparent
- Text: `#8169ff`
- Radius: 4px
- Height: 40px
- Font: 16px / 600 / 22.4px Inter
- Hover: label `#5b3ee0`
- Pressed: label `#5b3ee0`
- Use: Start for Free in the header

**Ghost button**
- Background: transparent
- Text: `#8169ff`
- Radius: 4px
- Padding: 14px 16px
- Height: 53px
- Hover: background `#8169ff`, label `#ffffff`
- Pressed: the same as hover
- Use: View All Prototypes and Learn More on /discover, Get Started on the /plans Free card

**White button**
- Background: `#ffffff`
- Text: `#8169ff`
- Radius: 4px
- Padding: 14px 16px
- Height: 53px
- Hover: label `#5b3ee0`
- Pressed: label `#5b3ee0`
- Use: Learn More on a /plans card

### Tabs & Navigation

**Header navigation item**
- Text: `#181818`
- Padding: 4px 20px
- Height: 60px
- Font: 16px / 700 / 22.4px Figtree
- Hover: label `#5b3ee0`
- Pressed: label `#5b3ee0`
- Use: Solutions, Resources, Features, Pricing, Download

**Industry tab**
- Background: `rgba(122, 100, 255, 0.35)`
- Radius: 4px
- Size: 106 × 81
- Selected: background `#8169ff`
- Hover: background `rgba(122, 100, 255, 0.5)`
- Pressed: the same as hover
- States: the selected tab does not change
- Use: industry switcher on the dark band of home

**Filter chip**
- Background: `#ffffff`
- Radius: 100px
- Padding: 10px 24px
- Height: 44px
- Selected: background `#8169ff` with a 1px `#8169ff` border
- Hover: opacity 0.8
- Pressed: opacity 0.8
- Use: All, Essentials, Collaboration, Security, Support, Add-ons on /plans

### Cards

**Resource card**
- Background: `rgba(255, 255, 255, 0.2)`
- Text: `#181818`
- Radius: 12px
- Shadow: `rgba(0, 0, 0, 0.08) 0px 3px 12px 0px, rgba(0, 0, 0, 0.2) 0px 0px 2px 0px`
- Hover: shadow `rgba(0, 0, 0, 0.08) 0px 3px 12px 0px, rgba(0, 0, 0, 0.08) 0px 0px 6px 3px`
- Use: ProtoPie School, Community and Blog on home (384 × 386)

**Prototype card**
- Background: `#fafafa`
- Radius: 16px
- Padding: 25px 30px 33px
- Use: featured prototypes on /discover (373 × 371)

---

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out pages of protopie.io plus fixed keyboard-probe state reads and first-party context)
**Tier 1 sources:** https://www.protopie.io/ ; https://www.protopie.io/discover ; https://www.protopie.io/plans ; https://www.protopie.io/ko/ ; https://www.protopie.io/legal
**Tier 2 sources:** not attempted in this pass; no Tier 2 value used
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- 53px buttons: 14px 16px padding; 40px and 46px buttons: 12px 16px; 32px buttons: 6px 16px
- Header items: 4px 20px padding in a 60px sticky header
- Prototype cards: 25px 30px 33px
- Frequent spacing values in the capture: 16, 20, 4, 10 and 14px

### Grid & Container
- Content sits in a 1200px column under a sticky 1200 × 60 header.
- Home runs a centred hero (62px headline, 24px lead, one violet button), tool-integration icons, a dark industry band with tabs, feature rows annotated by hand, a testimonial row, three resource cards, the gallery and a closing call to action.
- /plans sets plan cards side by side under a billing toggle, then a filtered feature comparison; /discover alternates featured prototype cards with maker stories.

### Whitespace Philosophy
- **Colour as emphasis**: sections stay white and ink; the violet appears only on actions and selection.
- **Mostly flat**: only the resource cards lift off the page.

### Border Radius Scale
- 0px: the default (874 of the recorded radii)
- 4px: buttons and industry tabs
- 12px: resource cards
- 16px: prototype cards
- 100px: filter chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Headlines, buttons, tabs, prototype cards |
| Surface | `#fafafa` fill | Prototype cards |
| Card | `rgba(0, 0, 0, 0.08) 0px 3px 12px 0px, rgba(0, 0, 0, 0.2) 0px 0px 2px 0px` | Resource cards |
| Card hover | `rgba(0, 0, 0, 0.08) 0px 3px 12px 0px, rgba(0, 0, 0, 0.08) 0px 0px 6px 3px` | Resource cards on hover |

**Shadow Philosophy**: of the 953 recorded elements, only the three resource cards carry a visible shadow (the integration icons compute fully transparent shadow layers). Emphasis otherwise comes from the violet.

## 7. Do's and Don'ts

### Do
- Use `#8169ff` for every primary action and for selection; darken to `#5b3ee0` on hover
- Set headlines and navigation in Figtree 700; set reading copy and button labels in Inter
- Keep buttons at 4px radius; round only the filter chips (100px)
- Let a ghost button fill violet on hover
- Use `#181818` for headlines and step greys through `#373737`, `#474747` and `#999999`
- Keep shadows for the resource cards only

### Don't
- Don't set headlines in Gilroy; it is declared but no element renders it
- Don't add a second saturated action colour; the annotation violet `#6d4ff0` is decoration only
- Don't use pure black for text
- Don't invent focus styles; every probed control shows only the browser default ring
- Don't substitute another face for Figtree, Inter or Palmer Lake Print
- Don't give buttons pill radii

## 8. Responsive Behavior

### Breakpoints
Only the 1440 × 900 desktop viewport was captured. No breakpoint value was measured.

### Touch Targets
- Section buttons: 53px
- Filter chips: 44px
- Header buttons: 40px
- Small buttons: 32px
- Header items: 60px cells
- Industry tabs: 106 × 81

### Collapsing Strategy
- How the pages collapse was not captured.

### Image Behavior
- Product shots and prototype videos sit flat inside the page; only the resource cards carry a shadow.

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action and selection: `#8169ff` with `#ffffff` labels; hover `#5b3ee0`
- Annotation: `#6d4ff0`
- Text: `#181818` headlines and nav, `#373737`, `#474747`, `#999999`
- Surfaces: `#ffffff` canvas, `#fafafa` prototype cards

### Example Component Prompts
- "Create a primary button: `#8169ff` background, `#ffffff` 18px Inter label at weight 600, 4px radius, 14px 16px padding, 53px tall; hover and pressed `#5b3ee0`; no shadow."
- "Create a ghost button: transparent background, `#8169ff` 18px Inter 600 label, 4px radius, 53px tall, no border; on hover fill `#8169ff` and turn the label `#ffffff`."
- "Build a header: sticky, 60px, Figtree 700 16px nav labels in `#181818` that turn `#5b3ee0` on hover, a violet text button Start for Free and a `#8169ff` Book a Demo button (12px 16px padding, 40px tall)."
- "Build filter chips: white, 100px radius, 10px 24px padding, 44px tall; the selected chip is `#8169ff` with a 1px `#8169ff` border; unselected chips fade to 0.8 opacity on hover."

### Iteration Guide
1. One violet (`#8169ff`) for actions and selection; `#5b3ee0` on hover
2. Figtree 700 headlines, Inter copy and labels
3. 4px buttons, 12px and 16px cards, 100px chips
4. `#181818` ink, never pure black
5. Shadows only on the resource cards

---

## 10. Voice & Tone

ProtoPie's voice is **confident and capability-first**: it claims leadership, names concrete capabilities and speaks to designers as makers.

| Context | Tone |
|---|---|
| Hero | Leadership claim. "#1 AI-driven advanced prototyping platform." |
| AI positioning | Control over automation. "Don't let AI guess your intent." |
| Hardware | Empowering. "Don't limit hardware interaction, Empower your designs." |
| Actions | Direct, low-friction. "Get started for free", "Book a Demo", "Explore Gallery", "Read Comparison". |
| Community | Belonging. "Join the ProtoPioneers community." |

**Voice samples (verbatim, opened 2026-09-30):**
- "ProtoPie: AI-driven Prototyping Platform" — protopie.io page title.
- "#1 AI-driven advanced prototyping platform" — home headline.
- "Don't let AI guess your intent. Use AI to generate interactions, perfect them credit-free, and hand off clean specs." — home lead.
- "Trusted by world's top design teams" — home.
- "ProtoPie: 인터랙티브 프로토타이핑 툴" — protopie.io/ko page title.

**Forbidden register**: talking down to designers, vague capability claims, fear-based urgency, stacked exclamation marks.

## 11. Brand Narrative

ProtoPie's pitch has always been fidelity: prototypes that respond to real sensors, devices and logic instead of click-through mockups. The site's feature menu names that craft directly — Interaction Logic, Multi-Device Prototyping, Hardware & System Integration, Developer Handoff — and its industry menu shows where fidelity matters most: automotive, aviation, finance, gaming, MedTech and IoT.

In 2026 the story turned to AI. Between the July record and this capture the site title changed to "AI-driven Prototyping Platform" and the hero to "#1 AI-driven advanced prototyping platform", with ProtoPie AI marked New and a ProtoPie MCP entry. The lead frames the stance: AI should generate interactions but not guess the designer's intent, and the output should be clean specs a developer can build. The Korean site keeps the original description, 인터랙티브 프로토타이핑 툴.

Around the tool, Studio XID invests in teaching and community — ProtoPie School, the ProtoPioneers community, a prototype gallery and a /discover page of featured makers. The website's design follows the product's discipline: one violet for every action, Figtree headlines, handwritten notes where a designer would scribble them, and very little chrome.

## 12. Principles

1. **Fidelity is the point.** *UI implication:* let prototypes, videos and product shots carry the page; keep chrome flat.
2. **One action colour.** *UI implication:* `#8169ff` for actions and selection only; hover darkens to `#5b3ee0`. (An editorial reading of the captured pages.)
3. **AI serves intent.** "Don't let AI guess your intent." *UI implication:* present AI as a tool the designer steers, with clear controls.
4. **Speak to makers.** *UI implication:* name capabilities concretely (hardware, logic, handoff).
5. **Annotate like a designer.** *UI implication:* handwritten violet notes explain features in place. (Editorial.)

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable ProtoPie user segments (product and interaction designers, automotive HMI teams, design students), not individual people.*

**박서연, 30, 서울.** A product designer who prototypes micro-interactions before handoff and wants stakeholders to feel the real behaviour.

**Marcus Lindqvist, 38, Gothenburg.** An automotive HMI designer who needs prototypes that respond to real hardware inputs.

**Priya Nair, 27, Bangalore.** A design student learning high-fidelity prototyping through ProtoPie School and the community.

## 14. States

Only these states were observed on the three captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Hover / pressed (violet buttons)** | `#8169ff` → `#5b3ee0`, settled (Book a Demo, Get started for free, Subscribe Now). |
| **Hover / pressed (text, white and nav items)** | Label → `#5b3ee0`. |
| **Hover / pressed (ghost button)** | Transparent → `#8169ff` fill, label `#ffffff`. |
| **Hover / pressed (industry tab)** | `rgba(122, 100, 255, 0.35)` → `rgba(122, 100, 255, 0.5)`; the selected `#8169ff` tab does not change. |
| **Hover / pressed (filter chip)** | Opacity 1 → 0.8; the selected chip does not change. |
| **Hover (resource card)** | The second shadow layer spreads to `0px 0px 6px 3px`. |
| **Selected** | `#8169ff` fill on the current industry tab and filter chip. |
| **Focus** | Every probed control draws only the browser default ring (`rgb(0, 95, 204) auto 1px`); no authored focus style. |

Error, empty, loading and success states were not captured and are not described.

## 15. Motion & Easing

Every probed control computes `transition: all 0s ease 0s`, and the probe read settled values after 900ms. The collector's immediate focus and pressed frames caught intermediate violets (`#7f67fd`, `#7e66fc`, `#7a62f9`, `#8068fe`) between `#8169ff` and `#5b3ee0`, which shows that Framer animates these changes in script; no duration or easing was measured, so none is declared.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/protopie.json (capturedAt 2026-09-30T11:07:22Z), deterministic collector, 1440x900, logged out: protopie.io, /discover, /plans. States: fixed keyboard probe raws docs/research/2026-09-29-growth/raw/protopie-states-{home,plans}.json (configs protopie-cfg-*.json; labels from protopie-survey-{home,discover,plans}.json).
- §1, §10, §11 context: protopie.io home copy and footer, /ko title, /legal (Studio XID entities), /discover and /plans titles; opened 2026-09-30. The July 2026 title and hero are from the previous record.
- §3 licences: Figtree OFL.txt (google/fonts) and Inter LICENSE.txt (rsms/inter), opened 2026-09-30.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->
