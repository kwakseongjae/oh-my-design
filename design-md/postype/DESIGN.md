---
id: "postype"
name: "POSTYPE"
display_name_kr: "포스타입"
country: "KR"
category: "consumer-tech"
homepage: "https://www.postype.com"
primary_color: "#2c2c2f"
logo:
  type: "favicon"
  slug: "https://www.google.com/s2/favicons?domain=postype.com&sz=128"
verified: "2026-09-30"
added: "2026-06-11"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: "home", kind: "product", url: "https://www.postype.com/", inspected: "2026-09-30" }
    - { id: "surface-2", kind: "corporate", url: "https://about.postype.com/", inspected: "2026-09-30" }
    - { id: "surface-3", kind: "product", url: "https://www.postype.com/@team", inspected: "2026-09-30" }
  sources:
    - { id: "surface-home", kind: "product-surface", url: "https://www.postype.com/", captured: "2026-09-30" }
    - { id: "surface-surface-2", kind: "product-surface", url: "https://about.postype.com/", captured: "2026-09-30" }
    - { id: "surface-surface-3", kind: "product-surface", url: "https://www.postype.com/@team", captured: "2026-09-30" }
    - { id: "postype-probe-home", kind: "product-surface", url: "https://www.postype.com/", captured: "2026-09-30" }
    - { id: "postype-about", kind: "official-doc", url: "https://about.postype.com/", captured: "2026-09-30" }
    - { id: "postype-team", kind: "official-doc", url: "https://www.postype.com/@team", captured: "2026-09-30" }
    - { id: "pretendard-license", kind: "license", url: "https://raw.githubusercontent.com/orioncactus/pretendard/main/LICENSE", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &signup { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::[data-omd-capture=\"5\"]", captured: "2026-09-30" }
    "tokens.colors.primary-hover": &signuphover { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::[data-omd-capture=\"5\"]::state-hover", captured: "2026-09-30" }
    "tokens.colors.primary-pressed": &signuppressed { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::[data-omd-capture=\"5\"]::state-pressed", captured: "2026-09-30" }
    "tokens.colors.on-primary": *signup
    "tokens.colors.ink": &body { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::body", captured: "2026-09-30" }
    "tokens.colors.body": &ptext { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.muted": &meta { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.disabled": &icondis { surface_id: "surface-3", source_id: "surface-surface-3", method: "computed-style", selector: "surface-3::[data-omd-capture=\"188\"]", captured: "2026-09-30" }
    "tokens.colors.link": &link { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::[data-omd-capture=\"32\"]", captured: "2026-09-30" }
    "tokens.colors.info": &alert { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::div", captured: "2026-09-30" }
    "tokens.colors.info-surface": &filtersel { surface_id: "surface-3", source_id: "surface-surface-3", method: "computed-style", selector: "surface-3::[data-omd-capture=\"35\"]", captured: "2026-09-30" }
    "tokens.colors.info-border": *filtersel
    "tokens.colors.alert-red": &menualert { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::[data-omd-interaction-capture=\"menu-0-4\"]", captured: "2026-09-30" }
    "tokens.colors.surface": &iconhover { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::[data-omd-capture=\"2\"]::state-hover", captured: "2026-09-30" }
    "tokens.colors.surface-pressed": &iconpressed { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::[data-omd-capture=\"2\"]::state-pressed", captured: "2026-09-30" }
    "tokens.colors.hairline": &login { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::[data-omd-capture=\"4\"]", captured: "2026-09-30" }
    "tokens.colors.white": &card { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::section", captured: "2026-09-30" }
    "tokens.colors.focus-ring": &signupprobe { surface_id: "home", source_id: "postype-probe-home", method: "live-state-probe", selector: "a 회원 가입 (87.4 x 40, rest bg #2c2c2f, fg #ffffff, transition all 0s): hover bg rgb(44, 44, 47) -> rgb(0, 0, 0); pressed bg -> rgb(62, 62, 67); focus outline none -> rgb(52, 120, 255) solid 2px off 2px", captured: "2026-09-30" }
    "tokens.typography.family.sans": *body
    "tokens.typography.heading.size": &h1 { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::h1", captured: "2026-09-30" }
    "tokens.typography.heading.weight": *h1
    "tokens.typography.heading.lineHeight": *h1
    "tokens.typography.heading.use": *h1
    "tokens.typography.section.size": &h2 { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::h2", captured: "2026-09-30" }
    "tokens.typography.section.weight": *h2
    "tokens.typography.section.lineHeight": *h2
    "tokens.typography.section.tracking": *h2
    "tokens.typography.section.use": *h2
    "tokens.typography.item-title.size": &h3 { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::h3", captured: "2026-09-30" }
    "tokens.typography.item-title.weight": *h3
    "tokens.typography.item-title.lineHeight": *h3
    "tokens.typography.item-title.use": *h3
    "tokens.typography.card-title.size": &ctitle { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.card-title.weight": *ctitle
    "tokens.typography.card-title.lineHeight": *ctitle
    "tokens.typography.card-title.use": *ctitle
    "tokens.typography.body.size": *body
    "tokens.typography.body.weight": *body
    "tokens.typography.body.lineHeight": *body
    "tokens.typography.body.use": *body
    "tokens.typography.body-secondary.size": *ptext
    "tokens.typography.body-secondary.weight": *ptext
    "tokens.typography.body-secondary.lineHeight": *ptext
    "tokens.typography.body-secondary.use": *ptext
    "tokens.typography.button.size": *signup
    "tokens.typography.button.weight": *signup
    "tokens.typography.button.lineHeight": *signup
    "tokens.typography.button.use": *signup
    "tokens.typography.button-sm.size": &tonal { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::[data-omd-capture=\"33\"]", captured: "2026-09-30" }
    "tokens.typography.button-sm.weight": *tonal
    "tokens.typography.button-sm.lineHeight": *tonal
    "tokens.typography.button-sm.use": *tonal
    "tokens.typography.menu.size": &menuitem { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::[data-omd-interaction-capture=\"menu-0-1\"]", captured: "2026-09-30" }
    "tokens.typography.menu.weight": *menuitem
    "tokens.typography.menu.lineHeight": *menuitem
    "tokens.typography.menu.use": *menuitem
    "tokens.typography.caption.size": &cap { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::li", captured: "2026-09-30" }
    "tokens.typography.caption.weight": *cap
    "tokens.typography.caption.lineHeight": *cap
    "tokens.typography.caption.use": *cap
    "tokens.typography.meta.size": *meta
    "tokens.typography.meta.weight": *meta
    "tokens.typography.meta.lineHeight": *meta
    "tokens.typography.meta.use": *meta
    "tokens.typography.chip.size": &chiplabel { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::#_r_1e_", captured: "2026-09-30" }
    "tokens.typography.chip.weight": *chiplabel
    "tokens.typography.chip.lineHeight": *chiplabel
    "tokens.typography.chip.use": *chiplabel
    "tokens.spacing.button-y": *signup
    "tokens.spacing.button-x": *signup
    "tokens.spacing.button-sm-y": *tonal
    "tokens.spacing.button-sm-x": *tonal
    "tokens.spacing.list-y": &listbtn { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::[data-omd-capture=\"7\"]", captured: "2026-09-30" }
    "tokens.spacing.list-x": *listbtn
    "tokens.spacing.menu": &menu { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::[data-omd-interaction-capture=\"menu-0-0\"]", captured: "2026-09-30" }
    "tokens.spacing.card": *card
    "tokens.spacing.feed-y": &feed { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::article", captured: "2026-09-30" }
    "tokens.spacing.chip-x": *chiplabel
    "tokens.rounded.small": &alertbtn { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::[data-omd-capture=\"242\"]", captured: "2026-09-30" }
    "tokens.rounded.button": *signup
    "tokens.rounded.card": *card
    "tokens.rounded.chip": &chip { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::[data-omd-capture=\"36\"]", captured: "2026-09-30" }
    "tokens.components.signup-button.type": *signup
    "tokens.components.signup-button.bg": *signup
    "tokens.components.signup-button.fg": *signup
    "tokens.components.signup-button.radius": *signup
    "tokens.components.signup-button.padding": *signup
    "tokens.components.signup-button.height": *signup
    "tokens.components.signup-button.font": *signup
    "tokens.components.signup-button.hover": *signupprobe
    "tokens.components.signup-button.pressed": *signupprobe
    "tokens.components.signup-button.focus": *signupprobe
    "tokens.components.signup-button.states": *signupprobe
    "tokens.components.signup-button.use": *signup
    "tokens.components.login-button.type": *login
    "tokens.components.login-button.bg": *login
    "tokens.components.login-button.fg": *login
    "tokens.components.login-button.border": *login
    "tokens.components.login-button.radius": *login
    "tokens.components.login-button.padding": *login
    "tokens.components.login-button.height": *login
    "tokens.components.login-button.font": *login
    "tokens.components.login-button.hover": &loginprobe { surface_id: "home", source_id: "postype-probe-home", method: "live-state-probe", selector: "a 로그인 (72.9 x 40, rest transparent, fg #2c2c2f, transition all 0s): hover bg -> rgb(242, 242, 243); pressed bg -> rgb(234, 234, 235); focus outline none -> rgb(52, 120, 255) solid 2px off 2px", captured: "2026-09-30" }
    "tokens.components.login-button.pressed": *loginprobe
    "tokens.components.login-button.focus": *loginprobe
    "tokens.components.login-button.states": *loginprobe
    "tokens.components.login-button.use": *login
    "tokens.components.subscribe-button.type": &subscribe { surface_id: "surface-3", source_id: "surface-surface-3", method: "computed-style", selector: "surface-3::[data-omd-capture=\"26\"]", captured: "2026-09-30" }
    "tokens.components.subscribe-button.bg": *subscribe
    "tokens.components.subscribe-button.fg": *subscribe
    "tokens.components.subscribe-button.radius": *subscribe
    "tokens.components.subscribe-button.padding": *subscribe
    "tokens.components.subscribe-button.height": *subscribe
    "tokens.components.subscribe-button.font": *subscribe
    "tokens.components.subscribe-button.states": *subscribe
    "tokens.components.subscribe-button.use": *subscribe
    "tokens.components.tonal-button.type": *tonal
    "tokens.components.tonal-button.bg": *tonal
    "tokens.components.tonal-button.fg": *tonal
    "tokens.components.tonal-button.radius": *tonal
    "tokens.components.tonal-button.padding": *tonal
    "tokens.components.tonal-button.height": *tonal
    "tokens.components.tonal-button.font": *tonal
    "tokens.components.tonal-button.states": *tonal
    "tokens.components.tonal-button.use": *tonal
    "tokens.components.outline-button-sm.type": &outlinesm { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::[data-omd-capture=\"85\"]", captured: "2026-09-30" }
    "tokens.components.outline-button-sm.bg": *outlinesm
    "tokens.components.outline-button-sm.fg": *outlinesm
    "tokens.components.outline-button-sm.border": *outlinesm
    "tokens.components.outline-button-sm.radius": *outlinesm
    "tokens.components.outline-button-sm.padding": *outlinesm
    "tokens.components.outline-button-sm.height": *outlinesm
    "tokens.components.outline-button-sm.font": *outlinesm
    "tokens.components.outline-button-sm.states": *outlinesm
    "tokens.components.outline-button-sm.use": *outlinesm
    "tokens.components.sidebar-item.type": *listbtn
    "tokens.components.sidebar-item.bg": *listbtn
    "tokens.components.sidebar-item.fg": *listbtn
    "tokens.components.sidebar-item.radius": *listbtn
    "tokens.components.sidebar-item.padding": *listbtn
    "tokens.components.sidebar-item.height": *listbtn
    "tokens.components.sidebar-item.font": *listbtn
    "tokens.components.sidebar-item.selected": &listcur { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::[data-omd-capture=\"6\"]", captured: "2026-09-30" }
    "tokens.components.sidebar-item.hover": &listhover { surface_id: "surface-3", source_id: "surface-surface-3", method: "computed-style", selector: "surface-3::[data-omd-capture=\"18\"]::state-hover", captured: "2026-09-30" }
    "tokens.components.sidebar-item.pressed": &listpressed { surface_id: "surface-3", source_id: "surface-surface-3", method: "computed-style", selector: "surface-3::[data-omd-capture=\"6\"]::state-pressed", captured: "2026-09-30" }
    "tokens.components.sidebar-item.states": *listbtn
    "tokens.components.sidebar-item.use": *listbtn
    "tokens.components.icon-button.type": &icon { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::[data-omd-capture=\"2\"]", captured: "2026-09-30" }
    "tokens.components.icon-button.bg": *icon
    "tokens.components.icon-button.fg": *icon
    "tokens.components.icon-button.radius": *icon
    "tokens.components.icon-button.padding": *icon
    "tokens.components.icon-button.size": *icon
    "tokens.components.icon-button.hover": *iconhover
    "tokens.components.icon-button.pressed": *iconpressed
    "tokens.components.icon-button.disabled": *icondis
    "tokens.components.icon-button.states": *icon
    "tokens.components.icon-button.use": *icon
    "tokens.components.tag-chip.type": *chip
    "tokens.components.tag-chip.bg": *chip
    "tokens.components.tag-chip.fg": *chiplabel
    "tokens.components.tag-chip.radius": *chip
    "tokens.components.tag-chip.padding": *chip
    "tokens.components.tag-chip.height": *chip
    "tokens.components.tag-chip.font": *chip
    "tokens.components.tag-chip.use": *chip
    "tokens.components.filter-chip.type": &filter { surface_id: "surface-3", source_id: "surface-surface-3", method: "computed-style", selector: "surface-3::[data-omd-capture=\"36\"]", captured: "2026-09-30" }
    "tokens.components.filter-chip.bg": *filter
    "tokens.components.filter-chip.fg": *filter
    "tokens.components.filter-chip.border": *filter
    "tokens.components.filter-chip.radius": *filter
    "tokens.components.filter-chip.padding": *filter
    "tokens.components.filter-chip.height": *filter
    "tokens.components.filter-chip.font": *filter
    "tokens.components.filter-chip.selected": *filtersel
    "tokens.components.filter-chip.states": *filter
    "tokens.components.filter-chip.use": *filter
    "tokens.components.menu-popup.type": *menu
    "tokens.components.menu-popup.bg": *menu
    "tokens.components.menu-popup.radius": *menu
    "tokens.components.menu-popup.padding": *menu
    "tokens.components.menu-popup.shadow": *menu
    "tokens.components.menu-popup.use": *menu
    "tokens.components.menu-item.type": *menuitem
    "tokens.components.menu-item.fg": *menuitem
    "tokens.components.menu-item.radius": *menuitem
    "tokens.components.menu-item.padding": *menuitem
    "tokens.components.menu-item.height": *menuitem
    "tokens.components.menu-item.font": *menuitem
    "tokens.components.menu-item.alert": *menualert
    "tokens.components.menu-item.use": *menuitem
    "tokens.components.recommend-card.type": *card
    "tokens.components.recommend-card.bg": *card
    "tokens.components.recommend-card.border": *card
    "tokens.components.recommend-card.radius": *card
    "tokens.components.recommend-card.padding": *card
    "tokens.components.recommend-card.size": *card
    "tokens.components.recommend-card.use": *card
    "tokens.components.notice-alert.type": *alert
    "tokens.components.notice-alert.bg": *alert
    "tokens.components.notice-alert.fg": *alert
    "tokens.components.notice-alert.border": *alert
    "tokens.components.notice-alert.radius": *alert
    "tokens.components.notice-alert.padding": *alert
    "tokens.components.notice-alert.shadow": *alert
    "tokens.components.notice-alert.size": *alert
    "tokens.components.notice-alert.use": *alert
    "tokens.components.alert-button.type": *alertbtn
    "tokens.components.alert-button.bg": *alertbtn
    "tokens.components.alert-button.fg": *alertbtn
    "tokens.components.alert-button.radius": *alertbtn
    "tokens.components.alert-button.padding": *alertbtn
    "tokens.components.alert-button.height": *alertbtn
    "tokens.components.alert-button.font": *alertbtn
    "tokens.components.alert-button.states": *alertbtn
    "tokens.components.alert-button.use": *alertbtn
    "tokens.components.search-input.type": &input { surface_id: "surface-3", source_id: "surface-surface-3", method: "computed-style", selector: "surface-3::div", captured: "2026-09-30" }
    "tokens.components.search-input.bg": *input
    "tokens.components.search-input.fg": *input
    "tokens.components.search-input.border": *input
    "tokens.components.search-input.radius": *input
    "tokens.components.search-input.padding": *input
    "tokens.components.search-input.height": *input
    "tokens.components.search-input.font": *input
    "tokens.components.search-input.states": *input
    "tokens.components.search-input.use": *input
    "tokens.components.feed-post.type": *feed
    "tokens.components.feed-post.border": *feed
    "tokens.components.feed-post.padding": *feed
    "tokens.components.feed-post.size": *feed
    "tokens.components.feed-post.use": *feed
    "tokens.components.avatar.type": &avatar { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::span", captured: "2026-09-30" }
    "tokens.components.avatar.radius": *avatar
    "tokens.components.avatar.size": *avatar
    "tokens.components.avatar.use": *avatar
    "tokens.components.promo-tile.type": &promo { surface_id: "home", source_id: "surface-home", method: "computed-style", selector: "home::[data-omd-capture=\"10\"]", captured: "2026-09-30" }
    "tokens.components.promo-tile.bg": *promo
    "tokens.components.promo-tile.radius": *promo
    "tokens.components.promo-tile.size": *promo
    "tokens.components.promo-tile.use": *promo
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#2c2c2f"
    primary-hover: "#000000"
    primary-pressed: "#3e3e43"
    on-primary: "#ffffff"
    ink: "#141415"
    body: "#62626a"
    muted: "#76767f"
    disabled: "#a4a4a8"
    link: "#3478ff"
    info: "#1a66ff"
    info-surface: "#ebf2ff"
    info-border: "#dbe7fe"
    alert-red: "#f33d4d"
    surface: "#f2f2f3"
    surface-pressed: "#eaeaeb"
    hairline: "#eaeaeb"
    white: "#ffffff"
    focus-ring: "#3478ff"
  typography:
    family: { sans: "Postype Sans-serif KR" }
    heading: { size: 32, weight: 700, lineHeight: 1.5, use: "Page h1 on home, 48px line, #141415" }
    section: { size: 20, weight: 600, lineHeight: 1.33, tracking: -0.5, use: "Feed and shelf headings on home (h2), 26.67px line, -0.5px tracking, #141415" }
    item-title: { size: 16, weight: 500, lineHeight: 1.5, use: "Post titles in the home feed (h3), 24px line, #141415" }
    card-title: { size: 15, weight: 600, lineHeight: 1.5, use: "Titles inside home cards, 22.5px line, #141415" }
    body: { size: 16, weight: 400, lineHeight: 1.5, use: "Document default on home and @team, 24px line, #141415" }
    body-secondary: { size: 16, weight: 400, lineHeight: 1.5, use: "Post excerpts in the home feed, 24px line, #62626a" }
    button: { size: 15, weight: 600, lineHeight: 1.33, use: "Header 회원 가입 and 로그인 labels, 20px line" }
    button-sm: { size: 13, weight: 600, lineHeight: 1.33, use: "Compact button labels on home, 17.33px line" }
    menu: { size: 15, weight: 400, lineHeight: 1.5, use: "Overflow-menu items, 22.5px line" }
    caption: { size: 14, weight: 400, lineHeight: 1.5, use: "Secondary sidebar list items, 21px line, #2c2c2f" }
    meta: { size: 12, weight: 400, lineHeight: 1.5, use: "Dates and counts under posts, 18px line, #76767f" }
    chip: { size: 11, weight: 400, lineHeight: 1.5, use: "Tag chips under posts, 16.5px line" }
  spacing: { button-y: 6, button-x: 16, button-sm-y: 4, button-sm-x: 12, list-y: 4, list-x: 12, menu: 8, card: 16, feed-y: 20, chip-x: 6 }
  rounded: { small: 6, button: 8, card: 12, chip: 24 }
  components:
    signup-button: { type: "button", bg: "#2c2c2f", fg: "#ffffff", radius: "8px", padding: "6px 16px", height: "40px", font: "15px / 600 / 20px", hover: "bg #000000", pressed: "bg #3e3e43", focus: "outline 2px solid #3478ff, offset 2px", states: "bundle frames and the probe agree on hover #000000 and pressed #3e3e43; transition all 0s; keyboard focus draws a 2px #3478ff ring offset 2px", use: "회원 가입 in the header of home and @team at home::[data-omd-capture=\"5\"], 87 x 40, linking to /signup" }
    login-button: { type: "button", bg: "transparent", fg: "#2c2c2f", border: "1px solid #eaeaeb", radius: "8px", padding: "6px 16px", height: "40px", font: "15px / 600 / 20px", hover: "bg #f2f2f3", pressed: "bg #eaeaeb", focus: "outline 2px solid #3478ff, offset 2px", states: "bundle frames and the probe agree; transition all 0s", use: "로그인 beside 회원 가입 in the header, 73 x 40" }
    subscribe-button: { type: "button", bg: "#2c2c2f", fg: "#ffffff", radius: "8px", padding: "6px 16px", height: "40px", font: "15px / 600 / 20px", states: "rest only on this instance", use: "구독 on the @team channel header at surface-3::[data-omd-capture=\"26\"], 96 x 40; logged out it links to /login" }
    tonal-button: { type: "button", bg: "#f2f2f3", fg: "#2c2c2f", radius: "8px", padding: "4px 12px", height: "32px", font: "13px / 600 / 17.33px", states: "rest only", use: "Compact grey buttons in the home right column (eight instances), e.g. home::[data-omd-capture=\"33\"], 46 x 32" }
    outline-button-sm: { type: "button", bg: "transparent", fg: "#2c2c2f", border: "1px solid #eaeaeb", radius: "8px", padding: "4px 12px", height: "32px", font: "13px / 600 / 17.33px", states: "rest only", use: "Compact outlined buttons in the home feed (24 instances), e.g. home::[data-omd-capture=\"85\"], 188 x 32" }
    sidebar-item: { type: "button", bg: "transparent", fg: "#2c2c2f", radius: "8px", padding: "4px 12px", height: "40px", font: "16px / 400 / 24px", selected: "bg #f2f2f3 on the current page item", hover: "bg #f2f2f3", pressed: "bg #eaeaeb", states: "hover and pressed from settled bundle frames", use: "Left navigation items (홈, 캐릭터톡, 리퀘스트, 보관함) on home and @team, 240 x 40" }
    icon-button: { type: "button", bg: "transparent", fg: "#2c2c2f", radius: "8px", padding: "0px 4px", size: "40px x 40px", hover: "bg #f2f2f3", pressed: "bg #eaeaeb", disabled: "fg #a4a4a8", states: "hover and pressed from settled bundle frames; disabled from the attribute on a 32 x 32 pager arrow on @team", use: "Header icon buttons at home::[data-omd-capture=\"2\"]" }
    tag-chip: { type: "badge", bg: "#f2f2f3", fg: "#62626a", radius: "24px", padding: "0px 6px", height: "20px", font: "11px / 400 / 16.5px", use: "Tag chips under posts on home and @team (81 instances); the fill sits on the absolutely positioned a.pt-Chip-action" }
    filter-chip: { type: "tab", bg: "#ffffff", fg: "#2c2c2f", border: "1px solid #eaeaeb", radius: "24px", padding: "0px 14px", height: "32px", font: "13px / 400 / 19.5px", selected: "bg #ebf2ff, fg #3478ff, border #dbe7fe", states: "selected read from rest values; no pointer frame", use: "Filter chips beside the search field on @team" }
    menu-popup: { type: "card", bg: "#ffffff", radius: "12px", padding: "8px", shadow: "rgba(21, 21, 21, 0.08) 0px 2px 8px -2px, rgba(21, 21, 21, 0.08) 0px 6px 12px -2px", use: "Overflow menus opened by the collector on post cards (four on home, four on @team)" }
    menu-item: { type: "listItem", fg: "#2c2c2f", radius: "6px", padding: "6px 12px", height: "40px", font: "15px / 400 / 22.5px", alert: "fg #f33d4d on one item of each post menu (item 5 on home, item 4 on @team)", use: "Items in the overflow menus" }
    recommend-card: { type: "card", bg: "#ffffff", border: "1px solid #eaeaeb", radius: "12px", padding: "16px", size: "352px x 172px", use: "Bordered card in the home right column (pt-Card-root)" }
    notice-alert: { type: "toast", bg: "#ebf2ff", fg: "#1a66ff", border: "1px solid #dbe7fe", radius: "12px", padding: "12px 12px 12px 18px", shadow: "rgba(21, 21, 21, 0.08) 0px 2px 8px -2px, rgba(21, 21, 21, 0.08) 0px 6px 12px -2px", size: "320px x 130px", use: "Blue notice (pt-Alert-root) in the home right column" }
    alert-button: { type: "button", bg: "#3478ff", fg: "#ffffff", radius: "6px", padding: "4px 12px", height: "32px", font: "13px / 600 / 17.33px", states: "rest only", use: "The action inside the blue notice at home::[data-omd-capture=\"242\"], 262 x 32; the only solid blue fill captured" }
    search-input: { type: "input", bg: "#ffffff", fg: "#2c2c2f", border: "1px solid #eaeaeb", radius: "8px", padding: "0px 8px", height: "32px", font: "14px / 400 / 21px", states: "rest only", use: "Search field above the @team post list, 308 x 32" }
    feed-post: { type: "card", border: "0 0 1px rgba(118, 118, 127, 0.15)", padding: "20px 0px", size: "640px wide", use: "Posts in the home feed, divided by a translucent bottom rule, no fill" }
    avatar: { type: "avatar", radius: "50%", size: "40px x 40px", use: "Creator avatars in the feed; 24px and 20px sizes also occur" }
    promo-tile: { type: "card", bg: "#1e1b3a", radius: "8px", size: "240px x 57px", use: "Dark promotional image tile in the home sidebar; the colour is the tile fill behind its artwork" }
  components_harvested: true
---

# Design System Inspiration of POSTYPE

## 1. Visual Theme & Atmosphere

POSTYPE (포스타입) is a Korean creator-publishing community operated by 주식회사 포스타입 in Seoul. Its product title is "취향의 가치를 만드는 창작 커뮤니티", a creative community that makes value out of taste. The company's own timeline starts with the official launch of the service in July 2015. Cumulative transactions passed ₩10 billion in March 2020, and the Android/iOS app launched in May 2020. A Series A followed in July 2020 and a ₩10 billion Series B in December 2022. By June 2023 the platform had 5 million members and 100 million transactions, and by May 2025 7 million members and ₩160 billion in transactions. The product has grown in layers. It started with paid posts and fan-community features, then added 리퀘스트 (commissions). In January 2026 it added 캐릭터톡, an AI character-chat service built on its creator network. In June 2026 came 오픈채널, and cumulative transactions passed ₩200 billion. The company frames the whole as "Everything you create has value": a service where creators and fans grow together, working towards "모든 취향이 고유의 가치를 인정받을 수 있는 세상".

The logged-out product is a quiet reading room. There is a white canvas, a 240px left navigation with rounded 8px list items, and a 640px feed of posts divided only by a translucent hairline. A right column holds bordered cards and a blue notice. Everything is set in one face, served under the alias `Postype Sans-serif KR`, which is Pretendard by file. Text is near-black `#141415` for content, `#2c2c2f` for interface labels, `#62626a` for excerpts and `#76767f` for meta. Blue `#3478ff` marks links, the selected filter chip and the keyboard focus ring. The action colour is charcoal: 회원 가입 in the header and 구독 on a channel are `#2c2c2f` with white labels. Hover deepens it to `#000000` and press lifts it to `#3e3e43`. Controls respond with grey fills, `#f2f2f3` on hover and `#eaeaeb` on press. Only popovers and the notice carry a shadow.

**Key Characteristics:**
- The action colour is charcoal `#2c2c2f`: hover `#000000`, pressed `#3e3e43`, white labels, 8px radius, 40px tall.
- Blue `#3478ff` does three jobs: link text, the selected chip and a 2px focus ring offset 2px. A notice uses a deeper blue, `#1a66ff` on `#ebf2ff`.
- The whole UI uses one family, the alias `Postype Sans-serif KR`, which loads Pretendard files. Weights run 400 to 700 and only the h2 is tracked, at -0.5px.
- Grey interaction states: `#f2f2f3` on hover or when current, `#eaeaeb` on press. The same `#eaeaeb` is the hairline.
- Radii are 6px (menu items, small buttons), 8px (buttons, list items, inputs), 12px (cards, menus, notice) and 24px (chips).
- Everything is flat except the menu popups and the notice, which carry a two-layer `rgba(21, 21, 21, 0.08)` shadow.

## Primary tasks

- Browse posts, series and creators on the public feed.
- Open a creator's channel and read its posts.
- Subscribe to a channel (logged out, 구독 leads to the login page).
- Sign up or log in from the header.
- Filter or search a channel's posts.

## 2. Color Palette & Roles

### Primary action
- **Charcoal** (`#2c2c2f`): the primary colour. It fills 회원 가입 in the header of both product pages and 구독 on the @team channel. No other colour fills a rest-state action on the product pages, so it is the primary. The only solid blue fill is one button inside a notice.
- **Charcoal Hover** (`#000000`) and **Charcoal Pressed** (`#3e3e43`): settled hover and pressed fills of 회원 가입. The bundle frames and the probe agree.
- **On Primary** (`#ffffff`).

### Link, selection and focus
- **Link Blue** (`#3478ff`): link text (about 100 instances), the selected filter chip's label and the keyboard focus ring on the header buttons.
- **Info Blue** (`#1a66ff`), **Info Surface** (`#ebf2ff`), **Info Border** (`#dbe7fe`): the notice alert and the selected filter chip's fill and border.

### Text
- **Ink** (`#141415`): document default, headings and post titles.
- **Label** (`#2c2c2f`): interface labels (buttons, list items, menus). This is the same value as the action fill.
- **Body** (`#62626a`): post excerpts and chip labels.
- **Muted** (`#76767f`): dates, counts and icon glyphs.
- **Disabled** (`#a4a4a8`): the disabled pager arrow.

### Surface and signal
- **White** (`#ffffff`): canvas, cards, menus, inputs.
- **Surface** (`#f2f2f3`): hover and current fills, tag chips and compact grey buttons.
- **Surface Pressed / Hairline** (`#eaeaeb`): pressed fills and 1px borders on outlined buttons, cards and inputs. Feed dividers are the translucent `rgba(118, 118, 127, 0.15)`.
- **Alert Red** (`#f33d4d`): one red item in each post overflow menu. It is a signal colour in a menu, not an action.

The June record made `#f33d4d` the primary as the brand red. On the captured product it appears only as that menu-item text. It fills no action and marks no selection, so it left `primary`. It is not claimed as a logo colour because no logo was measured.

## 3. Typography Rules

### Font Family
- **Live surface name:** every product element computes `"Postype Sans-serif KR"` (1,051 observed uses).
- **What it is:** the @font-face sources for that name are Pretendard files (`cdn.jsdelivr.net/gh/orioncactus/pretendard/.../Pretendard-*.woff2`). A Japanese alias, `Postype Sans-serif JP`, points at Pretendard JP. `Postype Serif KR` is declared against Nanum Myeongjo but was not observed in use. Postype names its UI face after itself but ships Pretendard, which is distributed under the SIL Open Font License 1.1.
- **Declared only:** the many other faces the bundle lists (BMHANNAPro, Gmarket Sans, Kakao Big/Small Sans, NanumSquare and others) are served from `cdn.ninehire.com`. They belong to the recruiting-site host behind about.postype.com, not to the Postype product.

### Hierarchy

| Role | Size / weight / line | Colour | Where |
|---|---|---|---|
| Heading | 32px / 700 / 48px | `#141415` | Page h1 on home |
| Section | 20px / 600 / 26.67px, -0.5px | `#141415` | Feed and shelf headings |
| Item title | 16px / 500 / 24px | `#141415` | Post titles |
| Card title | 15px / 600 / 22.5px | `#141415` | Titles in home cards |
| Body | 16px / 400 / 24px | `#141415` | Document default |
| Body secondary | 16px / 400 / 24px | `#62626a` | Post excerpts |
| Button | 15px / 600 / 20px | white / `#2c2c2f` | Header buttons |
| Button small | 13px / 600 / 17.33px | `#2c2c2f` | Compact buttons |
| Menu | 15px / 400 / 22.5px | `#2c2c2f` | Overflow menu items |
| Caption | 14px / 400 / 21px | `#2c2c2f` | Secondary list items |
| Meta | 12px / 400 / 18px | `#76767f` | Dates and counts |
| Chip | 11px / 400 / 16.5px | `#62626a` | Tag chips |

### Principles
- **Small, steady scale:** the largest product text is 32px. The feed runs at 15–16px.
- **Weight over size:** 600 marks buttons and card titles, 500 post titles, 400 reading and meta.
- **Tracking only on section heads:** h2 at -0.5px. Everything else is `normal`.

## 4. Component Stylings

### Buttons
- **Sign-up** (`signup-button`): `#2c2c2f`, white 15px/600 label, 8px radius, `6px 16px`, 40px tall. Hover `#000000`, pressed `#3e3e43`, focus a 2px `#3478ff` ring offset 2px. `transition: all 0s`.
- **Log-in** (`login-button`): transparent, `#2c2c2f` label, 1px `#eaeaeb` border, same geometry. Hover `#f2f2f3`, pressed `#eaeaeb`, same focus ring.
- **Subscribe** (`subscribe-button`): the charcoal button on the @team channel header, 96 × 40.
- **Tonal** (`tonal-button`): `#f2f2f3`, `#2c2c2f` 13px/600, 8px, `4px 12px`, 32px tall.
- **Outline small** (`outline-button-sm`): transparent with a 1px `#eaeaeb` border, 13px/600, 32px tall.
- **Icon button** (`icon-button`): 40 × 40, 8px radius. Hover `#f2f2f3`, pressed `#eaeaeb`, disabled glyph `#a4a4a8`.
- **Notice action** (`alert-button`): `#3478ff`, white 13px/600, 6px radius, `4px 12px`, 32px tall, inside the notice only.

### Navigation and chips
- **Sidebar item** (`sidebar-item`): 240 × 40, 8px radius, `4px 12px`, 16px/400 `#2c2c2f`. The current page rests on `#f2f2f3`. Hover `#f2f2f3`, pressed `#eaeaeb`.
- **Tag chip** (`tag-chip`): `#f2f2f3` fill, `#62626a` 11px label, 24px radius, 20px tall.
- **Filter chip** (`filter-chip`): white, 1px `#eaeaeb`, 24px radius, 32px tall, 13px. Selected: `#ebf2ff` fill, `#3478ff` label, `#dbe7fe` border.

### Menus, cards and inputs
- **Menu popup** (`menu-popup`): white, 12px radius, 8px padding, shadow `rgba(21, 21, 21, 0.08) 0px 2px 8px -2px, rgba(21, 21, 21, 0.08) 0px 6px 12px -2px`.
- **Menu item** (`menu-item`): 40px tall, 6px radius, `6px 12px`, 15px/400. One red `#f33d4d` item per post menu.
- **Card** (`recommend-card`): white, 1px `#eaeaeb`, 12px radius, 16px padding.
- **Notice** (`notice-alert`): `#ebf2ff` fill, `#1a66ff` text, 1px `#dbe7fe`, 12px radius, `12px 12px 12px 18px`, with the popup shadow.
- **Search input** (`search-input`): white, 1px `#eaeaeb`, 8px radius, `0 8px`, 32px tall, 14px.
- **Feed post** (`feed-post`): no fill, `20px 0` padding, a bottom rule in `rgba(118, 118, 127, 0.15)`.
- **Avatar**: round (50%) at 40, 24 and 20px.
- **Promo tile** (`promo-tile`): dark `#1e1b3a` 240 × 57 tile with 8px corners behind promotional artwork.

**Verified:** 2026-09-30 (deterministic collector capture of two public, logged-out Postype product pages and the company page, a fixed keyboard-probe state read on the home header, and first-party company pages)
**Tier 1 sources:** https://www.postype.com/ ; https://www.postype.com/@team ; https://about.postype.com/
**Tier 2 sources:** getdesign.md and styles.refero.design were not re-queried in this pass; no Tier 2 value used

## 5. Layout Principles

### Spacing observed
- Buttons `6px 16px`, compact buttons `4px 12px`, sidebar items `4px 12px` (secondary `3px 8px`).
- Menus 8px, cards 16px, feed posts `20px 0`, chips `0 6px` (filter chips `0 14px`).

### Grid and container
- Captured at 1440 × 900: a 240px left navigation, a 640px feed column and a 352px right column on home. The @team channel keeps the navigation and sets a 700px post list.

### Border radius scale
- 6px menu items and the notice action; 8px buttons, list items, icon buttons, inputs and the promo tile; 11px card covers; 12px cards, menus and the notice; 24px chips; 50% avatars.

## 6. Depth & Elevation

Most of the page is flat. Buttons, list items, cards, chips and inputs compute `box-shadow: none`. Popovers are raised: every overflow menu and the notice carry the same two-layer shadow, `rgba(21, 21, 21, 0.08) 0px 2px 8px -2px` plus `rgba(21, 21, 21, 0.08) 0px 6px 12px -2px`. Separation elsewhere comes from `#f2f2f3` fills, `#eaeaeb` borders and translucent feed dividers.

## 7. Do's and Don'ts

### Do
- Fill the primary action in `#2c2c2f` with a white 15px/600 label. Deepen it to `#000000` on hover and lift it to `#3e3e43` on press.
- Use `#f2f2f3` for hover and current states and `#eaeaeb` for pressed and hairlines.
- Use `#3478ff` for links, selected chips and a 2px focus ring offset 2px.
- Keep the page in one sans family (Pretendard, named `Postype Sans-serif KR`).
- Raise only popovers and notices.

### Don't
- Don't fill actions in red. `#f33d4d` appears only as a menu item's text.
- Don't use blue for primary actions. The one blue button lives inside a notice.
- Don't add shadows to cards or feed posts.
- Don't track body text. Only the 20px section heads use -0.5px.

## 8. Responsive Behavior

Only the 1440 × 900 desktop viewport was captured. Breakpoints and collapse behaviour were not measured and are not declared. On desktop, header buttons are 40px tall and sidebar items 40px.

## 9. Agent Prompt Guide

### Quick colour reference
- Primary action: `#2c2c2f` (hover `#000000`, pressed `#3e3e43`, white label)
- Link / selected / focus: `#3478ff`; notice `#1a66ff` on `#ebf2ff`, border `#dbe7fe`
- Text: `#141415`, `#2c2c2f`, `#62626a`, `#76767f`
- Surface: `#ffffff`, `#f2f2f3`; pressed and hairline `#eaeaeb`

### Example component prompts
- "A header with a transparent 로그인 button (1px `#eaeaeb` border) and a `#2c2c2f` 회원 가입 button, both 40px tall with 8px corners and 15px/600 labels."
- "A 240px left navigation of 40px list items with 8px corners. The current item rests on `#f2f2f3` and pressed items turn `#eaeaeb`."
- "A 640px feed of posts: 16px/500 `#141415` titles, 16px `#62626a` excerpts, 12px `#76767f` meta and `#f2f2f3` 11px tag chips with 24px corners, divided by a translucent hairline."
- "An overflow menu: white, 12px corners, 8px padding, a soft two-layer shadow, 40px items and one red `#f33d4d` item."

### Iteration guide
- If an action looks blue or red, return it to charcoal.
- If a card has a shadow, remove it unless it is a popover.
- If focus is invisible, add the 2px `#3478ff` ring with a 2px offset.

## 10. Voice & Tone

POSTYPE speaks in a taste-affirming, plain register. It treats every personal taste (취향) as worth making and paying for, and it keeps interface labels short.

| Context | Sample (verbatim, 2026-09-30) |
|---|---|
| Product title | "포스타입 - 취향의 가치를 만드는 창작 커뮤니티" |
| Company copy | "Everything you create has value" |
| Mission | "포스타입은 크리에이터와 팬, 사람들과 관심사를 연결해 더 큰 가치를 만들어내며 바람직한 창작 문화가 발전할 수 있도록 노력합니다." |
| Vision | "'모든 취향이 고유의 가치를 인정받을 수 있는 세상'을 만들어 나갑니다." |
| Navigation | "홈", "캐릭터톡", "리퀘스트", "보관함" |
| CTAs | "회원 가입", "로그인", "구독" |
| Team channel | "더 나은 창작 생태계를 만들어나가는 포스타입 팀의 이야기" |
| Not-found page | "앗, 존재하지 않는 길이에요. 죄송하지만 주소가 바뀌거나 사라진 것 같아요." |

The June record's slogans "포스트, 창작의 가치를 수익으로" and "30초면 끝" were not found on the pages opened this session and are no longer quoted.

## 11. Brand Narrative

The company page tells the story as eleven years of widening the same idea. It began with content sales in 2015. Fan-community activity, commissions (리퀘스트) and, in 2026, character chat (캐릭터톡) and open channels followed. All of it is offered in one app, so that people who share a taste can keep creating and talking. The milestones it publishes are commercial: ₩10 billion in cumulative transactions by 2020, ₩100 billion by October 2023, ₩200 billion by June 2026, and 7 million members by May 2025. The @team channel, published on the product itself, carries the company's own posts: core values, a joining bonus policy, press coverage and team interviews. One interview introduces 캐릭터톡 as built on "포스타입이 쌓아온 강력한 크리에이터 네트워크, 창작 생태계". The interface stays out of the way of that content: one face, grey states, a charcoal action and blue only where the reader is pointed somewhere.

## 12. Principles

1. **Every taste has value.** *UI implication:* give creators' posts the room, and keep the chrome neutral.
2. **One quiet action colour.** *UI implication:* charcoal `#2c2c2f` for the step you want taken; grey for everything that merely responds.
3. **Blue means "go there" or "you are here".** *UI implication:* links, the selected chip and the focus ring share `#3478ff`.
4. **Flat until it floats.** *UI implication:* only menus and notices get a shadow.

## 13. Personas

*Personas are fictional archetypes informed by the audiences Postype describes (creators and fans across webtoon, web-novel, illustration and character fandoms). They are not real people.*

**한서윤, 27, 서울.** An illustrator who sells commissions through 리퀘스트 and posts paid series. She wants her work, not the platform, to be what readers notice.

**정민재, 22, 대전.** A web-novel reader who subscribes to a handful of channels and scans the feed daily. He relies on tag chips and filters to find new work in his niche.

**오지현, 31, 부산.** A fan who has started using 캐릭터톡 with characters from the series she follows, and expects it to feel like part of the same reading space.

## 14. States

Only states read from the capture and the probe are listed.

| Component | State | Treatment | Evidence |
|---|---|---|---|
| Sign-up button | hover / pressed / focus | `#000000` / `#3e3e43` / 2px `#3478ff` ring, offset 2px | bundle frames + probe |
| Log-in button | hover / pressed / focus | `#f2f2f3` / `#eaeaeb` / same ring | bundle frames + probe |
| Sidebar item | current / hover / pressed | `#f2f2f3` / `#f2f2f3` / `#eaeaeb` | bundle |
| Icon button | hover / pressed / disabled | `#f2f2f3` / `#eaeaeb` / glyph `#a4a4a8` | bundle |
| Filter chip | selected | `#ebf2ff`, `#3478ff`, border `#dbe7fe` | bundle |
| Overflow menu | open | white popup, 12px, two-layer shadow | collector menu interaction |

Empty, loading, error and success states were not observed and are not declared.

## 15. Motion & Easing

The probe read `transition: all 0s ease 0s` on both header buttons, so their colour changes are instant. No other duration or easing was measured, and none is declared.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/postype.json (capturedAt 2026-09-30T11:47:59Z), deterministic collector, 1440x900, logged out: www.postype.com, about.postype.com, www.postype.com/@team. Header states: fixed keyboard probe raw docs/research/2026-09-29-growth/raw/postype-states-home.json (2026-09-30T13:17Z).
- §1, §10, §11 context: about.postype.com (history, mission, vision), the @team channel and the home footer, opened 2026-09-30. about.postype.com is hosted on a recruiting-site builder (ninehire); it supplies narrative only, no token.
- §3 licence: the Pretendard LICENSE file on GitHub, opened 2026-09-30.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->
