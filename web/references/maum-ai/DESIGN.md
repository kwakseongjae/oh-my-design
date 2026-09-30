---
id: maum-ai
name: maum.ai (ex-MindsLab)
display_name_kr: 마음AI (구 마인즈랩)
country: KR
category: ai
homepage: "https://maum.ai/"
primary_color: "#4262ff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=maum.ai&sz=128"
verified: "2026-09-30"
added: "2026-07-02"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: marketing, url: "https://maum.ai/", inspected: "2026-09-30" }
    - { id: surface-2, kind: marketing, url: "https://maum.ai/physical-ai-service", inspected: "2026-09-30" }
    - { id: surface-3, kind: product, url: "https://maum.ai/maum-gpt", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://maum.ai/", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://maum.ai/physical-ai-service", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://maum.ai/maum-gpt", captured: "2026-09-30" }
    - { id: maum-ai-probe-home, kind: product-surface, url: "https://maum.ai/", captured: "2026-09-30" }
    - { id: maum-ai-probe-physical, kind: product-surface, url: "https://maum.ai/physical-ai-service", captured: "2026-09-30" }
    - { id: maum-ai-probe-gpt, kind: product-surface, url: "https://maum.ai/maum-gpt", captured: "2026-09-30" }
    - { id: maum-company, kind: official-doc, url: "https://maum.ai/company", captured: "2026-09-30" }
    - { id: maum-brain-blog, kind: official-doc, url: "https://maum-ai.github.io/", captured: "2026-09-30" }
    - { id: maum-github, kind: official-doc, url: "https://github.com/maum-ai", captured: "2026-09-30" }
    - { id: pretendard-license, kind: license, url: "https://raw.githubusercontent.com/orioncactus/pretendard/main/LICENSE", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &newchat { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"9\"]", captured: "2026-09-30" }
    "tokens.colors.on-primary": *newchat
    "tokens.colors.dark": &contact { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-09-30" }
    "tokens.colors.nav-selected": &sidesel { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"9\"]", captured: "2026-09-30" }
    "tokens.colors.secondary": &retrieval { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"14\"]", captured: "2026-09-30" }
    "tokens.colors.ink": &body { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::body", captured: "2026-09-30" }
    "tokens.colors.lead-grey": &lead { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.nav-muted": &gnb { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"5\"]", captured: "2026-09-30" }
    "tokens.colors.muted": &caption { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::p", captured: "2026-09-30" }
    "tokens.colors.white": &top { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"26\"]", captured: "2026-09-30" }
    "tokens.colors.selected-tint": &chatsel { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"10\"]", captured: "2026-09-30" }
    "tokens.colors.hover-surface": &sidestate { surface_id: surface-2, source_id: maum-ai-probe-physical, method: live-state-probe, selector: "a AI Integration Module (176 x 64): hover and pressed bg rgba(0, 0, 0, 0) -> rgb(242, 243, 247), shadow none -> rgb(210, 220, 234) 0px 1px 0px 0px; selected a HOME (176 x 52, rest bg rgb(41, 45, 51)): hover and pressed opacity 1 -> 0.9; transition 0.15s cubic-bezier(0.4, 0, 0.2, 1); focus (Tabs #10, #11) outline rgb(0, 95, 204) auto 1px (browser default)", captured: "2026-09-30" }
    "tokens.colors.hairline": &card { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::li", captured: "2026-09-30" }
    "tokens.colors.underline": *chatsel
    "tokens.typography.family.display": &hero { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.family.body": *body
    "tokens.typography.display-hero.size": *hero
    "tokens.typography.display-hero.weight": *hero
    "tokens.typography.display-hero.lineHeight": *hero
    "tokens.typography.display-hero.use": *hero
    "tokens.typography.section-title.size": &h2 { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h2", captured: "2026-09-30" }
    "tokens.typography.section-title.weight": *h2
    "tokens.typography.section-title.lineHeight": *h2
    "tokens.typography.section-title.use": *h2
    "tokens.typography.product-name.size": &pname { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::div", captured: "2026-09-30" }
    "tokens.typography.product-name.weight": *pname
    "tokens.typography.product-name.lineHeight": *pname
    "tokens.typography.product-name.use": *pname
    "tokens.typography.prompt-title.size": &h2gpt { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h2", captured: "2026-09-30" }
    "tokens.typography.prompt-title.weight": *h2gpt
    "tokens.typography.prompt-title.lineHeight": *h2gpt
    "tokens.typography.prompt-title.use": *h2gpt
    "tokens.typography.section-label.size": &plabel { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::p", captured: "2026-09-30" }
    "tokens.typography.section-label.weight": *plabel
    "tokens.typography.section-label.lineHeight": *plabel
    "tokens.typography.section-label.use": *plabel
    "tokens.typography.lead.size": *lead
    "tokens.typography.lead.weight": *lead
    "tokens.typography.lead.lineHeight": *lead
    "tokens.typography.lead.use": *lead
    "tokens.typography.description.size": &desc { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::p", captured: "2026-09-30" }
    "tokens.typography.description.weight": *desc
    "tokens.typography.description.lineHeight": *desc
    "tokens.typography.description.use": *desc
    "tokens.typography.button-lg.size": *contact
    "tokens.typography.button-lg.weight": *contact
    "tokens.typography.button-lg.lineHeight": *contact
    "tokens.typography.button-lg.use": *contact
    "tokens.typography.nav.size": *gnb
    "tokens.typography.nav.weight": *gnb
    "tokens.typography.nav.lineHeight": *gnb
    "tokens.typography.nav.use": *gnb
    "tokens.typography.button.size": *newchat
    "tokens.typography.button.weight": *newchat
    "tokens.typography.button.lineHeight": *newchat
    "tokens.typography.button.use": *newchat
    "tokens.typography.body.size": *body
    "tokens.typography.body.weight": *body
    "tokens.typography.body.lineHeight": *body
    "tokens.typography.body.use": *body
    "tokens.typography.caption.size": *caption
    "tokens.typography.caption.weight": *caption
    "tokens.typography.caption.lineHeight": *caption
    "tokens.typography.caption.use": *caption
    "tokens.spacing.cta-y": *contact
    "tokens.spacing.cta-x": *contact
    "tokens.spacing.side-y": &side { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"10\"]", captured: "2026-09-30" }
    "tokens.spacing.side-x": *side
    "tokens.spacing.list-y": *chatsel
    "tokens.spacing.list-x": *chatsel
    "tokens.spacing.icon-inset": *newchat
    "tokens.rounded.menu": &lang { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"7\"]", captured: "2026-09-30" }
    "tokens.rounded.card": *card
    "tokens.rounded.action": *newchat
    "tokens.rounded.pill": *contact
    "tokens.shadow.top-button": *top
    "tokens.shadow.card-line": *card
    "tokens.components.contact-cta.type": *contact
    "tokens.components.contact-cta.bg": *contact
    "tokens.components.contact-cta.fg": *contact
    "tokens.components.contact-cta.radius": *contact
    "tokens.components.contact-cta.padding": *contact
    "tokens.components.contact-cta.height": *contact
    "tokens.components.contact-cta.font": *contact
    "tokens.components.contact-cta.hover": &contactstate { surface_id: home, source_id: maum-ai-probe-home, method: live-state-probe, selector: "button Contact Us (192 x 65, rest bg rgb(52, 52, 52), fg rgb(255, 255, 255)): hover and pressed bg -> rgba(0, 0, 0, 0), bg-image none -> linear-gradient(93deg, rgb(107, 157, 205) 0%, rgb(113, 166, 47) 170.68%); transition all 0s; focus (Tab #11) outline rgb(0, 95, 204) auto 1px (browser default)", captured: "2026-09-30" }
    "tokens.components.contact-cta.pressed": *contactstate
    "tokens.components.contact-cta.states": *contactstate
    "tokens.components.contact-cta.use": *contact
    "tokens.components.gnb-link.type": *gnb
    "tokens.components.gnb-link.fg": *gnb
    "tokens.components.gnb-link.font": *gnb
    "tokens.components.gnb-link.hover": &gnbstate { surface_id: home, source_id: maum-ai-probe-home, method: live-state-probe, selector: "a Physical AI (82.5 x 19): hover and pressed fg rgb(142, 142, 142) -> rgb(17, 17, 17); transition color, background-color, border-color, text-decoration-color, fill, stroke 0.2s cubic-bezier(0.4, 0, 0.2, 1); focus (Tab #6) outline rgb(0, 95, 204) auto 1px (browser default)", captured: "2026-09-30" }
    "tokens.components.gnb-link.pressed": *gnbstate
    "tokens.components.gnb-link.states": *gnbstate
    "tokens.components.gnb-link.use": *gnb
    "tokens.components.top-button.type": *top
    "tokens.components.top-button.bg": *top
    "tokens.components.top-button.radius": *top
    "tokens.components.top-button.size": *top
    "tokens.components.top-button.shadow": *top
    "tokens.components.top-button.states": &topstate { surface_id: home, source_id: maum-ai-probe-home, method: live-state-probe, selector: "button back to top (48 x 48, rest bg rgb(255, 255, 255)): hover and pressed NO CHANGE across self, 1 descendant (img) and 3 ancestor levels; focus (Tab #58) outline rgb(0, 95, 204) auto 1px (browser default)", captured: "2026-09-30" }
    "tokens.components.top-button.use": *top
    "tokens.components.new-chat-button.type": *newchat
    "tokens.components.new-chat-button.bg": *newchat
    "tokens.components.new-chat-button.fg": *newchat
    "tokens.components.new-chat-button.radius": *newchat
    "tokens.components.new-chat-button.padding": *newchat
    "tokens.components.new-chat-button.height": *newchat
    "tokens.components.new-chat-button.font": *newchat
    "tokens.components.new-chat-button.states": &newchatstate { surface_id: surface-3, source_id: maum-ai-probe-gpt, method: live-state-probe, selector: "button 새로운 대화 (208 x 56, rest bg rgb(66, 98, 255), fg rgb(255, 255, 255)): hover and pressed NO CHANGE across self and 3 ancestor levels; transition all 0s; focus (Tab #10) outline rgb(0, 95, 204) auto 1px (browser default)", captured: "2026-09-30" }
    "tokens.components.new-chat-button.use": *newchat
    "tokens.components.retrieval-button.type": *retrieval
    "tokens.components.retrieval-button.bg": *retrieval
    "tokens.components.retrieval-button.fg": *retrieval
    "tokens.components.retrieval-button.radius": *retrieval
    "tokens.components.retrieval-button.padding": *retrieval
    "tokens.components.retrieval-button.height": *retrieval
    "tokens.components.retrieval-button.font": *retrieval
    "tokens.components.retrieval-button.states": &retrievalstate { surface_id: surface-3, source_id: maum-ai-probe-gpt, method: live-state-probe, selector: "button Retrieval 모델 설정 (208 x 56, rest bg rgb(91, 99, 109)): hover and pressed NO CHANGE across self and 3 ancestor levels; focus (Tab #15) outline rgb(0, 95, 204) auto 1px (browser default)", captured: "2026-09-30" }
    "tokens.components.retrieval-button.use": *retrieval
    "tokens.components.chat-list-item.type": &chat { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"11\"]", captured: "2026-09-30" }
    "tokens.components.chat-list-item.bg": *chat
    "tokens.components.chat-list-item.fg": *chat
    "tokens.components.chat-list-item.radius": *chat
    "tokens.components.chat-list-item.padding": *chat
    "tokens.components.chat-list-item.height": *chat
    "tokens.components.chat-list-item.font": *chat
    "tokens.components.chat-list-item.selected": *chatsel
    "tokens.components.chat-list-item.hover": &chatstate { surface_id: surface-3, source_id: maum-ai-probe-gpt, method: live-state-probe, selector: "a MAAL (208 x 48): hover and pressed bg rgba(0, 0, 0, 0) -> rgb(242, 243, 247), shadow none -> rgb(210, 220, 234) 0px 1px 0px 0px; selected a 외부 GPT (rest bg rgb(226, 237, 252)): hover and pressed shadow only; transition 0.15s cubic-bezier(0.4, 0, 0.2, 1); focus (Tabs #11, #12) outline rgb(0, 95, 204) auto 1px (browser default)", captured: "2026-09-30" }
    "tokens.components.chat-list-item.pressed": *chatstate
    "tokens.components.chat-list-item.states": *chatstate
    "tokens.components.chat-list-item.use": *chat
    "tokens.components.side-menu-item.type": *side
    "tokens.components.side-menu-item.fg": *side
    "tokens.components.side-menu-item.radius": *side
    "tokens.components.side-menu-item.padding": *side
    "tokens.components.side-menu-item.height": *side
    "tokens.components.side-menu-item.font": *side
    "tokens.components.side-menu-item.selected": *sidesel
    "tokens.components.side-menu-item.hover": *sidestate
    "tokens.components.side-menu-item.pressed": *sidestate
    "tokens.components.side-menu-item.states": *sidestate
    "tokens.components.side-menu-item.use": *side
    "tokens.components.language-dropdown.type": *lang
    "tokens.components.language-dropdown.fg": *lang
    "tokens.components.language-dropdown.radius": *lang
    "tokens.components.language-dropdown.size": *lang
    "tokens.components.language-dropdown.font": *lang
    "tokens.components.language-dropdown.hover": &langstate { surface_id: surface-2, source_id: maum-ai-probe-physical, method: live-state-probe, selector: "button KOR (80 x 40): hover and pressed bg rgba(0, 0, 0, 0) -> rgb(242, 243, 247); transition 0.15s cubic-bezier(0.4, 0, 0.2, 1); focus (Tab #8) outline rgb(0, 95, 204) auto 1px (browser default)", captured: "2026-09-30" }
    "tokens.components.language-dropdown.pressed": *langstate
    "tokens.components.language-dropdown.states": *langstate
    "tokens.components.language-dropdown.use": *lang
    "tokens.components.product-card.type": *card
    "tokens.components.product-card.bg": *card
    "tokens.components.product-card.border": *card
    "tokens.components.product-card.radius": *card
    "tokens.components.product-card.size": *card
    "tokens.components.product-card.shadow": *card
    "tokens.components.product-card.use": *card
    "tokens.components.chat-input.type": &input { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"16\"]", captured: "2026-09-30" }
    "tokens.components.chat-input.fg": *input
    "tokens.components.chat-input.padding": *input
    "tokens.components.chat-input.height": *input
    "tokens.components.chat-input.font": *input
    "tokens.components.chat-input.disabled": *input
    "tokens.components.chat-input.use": *input
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#4262ff"
    on-primary: "#ffffff"
    dark: "#343434"
    nav-selected: "#292d33"
    secondary: "#5b636d"
    ink: "#111111"
    lead-grey: "#595959"
    nav-muted: "#8e8e8e"
    muted: "#949ca5"
    white: "#ffffff"
    selected-tint: "#e2edfc"
    hover-surface: "#f2f3f7"
    hairline: "#dee4eb"
    underline: "#d2dcea"
  typography:
    family: { display: "Jamsil", body: "Pretendard" }
    display-hero: { size: 72, weight: 700, lineHeight: 1.02, use: "Home headline (Physical AI 로봇을 구독하세요.), Jamsil, 73.6px line, in #111111" }
    section-title: { size: 48, weight: 700, lineHeight: 1, use: "Page headings on /physical-ai-service (Physical AI Product) and /maum-gpt (maumChatbot), Pretendard, 48px line" }
    product-name: { size: 32, weight: 600, lineHeight: 1.13, use: "Product names on the /physical-ai-service cards, 36px line" }
    prompt-title: { size: 24, weight: 700, lineHeight: 1.33, use: "Chat prompt heading on /maum-gpt (지금 MAAL과 대화해 보세요.), 32px line; chatbot product surface" }
    section-label: { size: 24, weight: 600, lineHeight: 1.33, use: "Section label above the product cards on /physical-ai-service, 32px line" }
    lead: { size: 20, weight: 500, lineHeight: 1.3, use: "Product descriptions in the home carousel, 26px line, in #595959" }
    description: { size: 20, weight: 400, lineHeight: 1.45, use: "Page introductions on /physical-ai-service and /maum-gpt, 29px line" }
    button-lg: { size: 20, weight: 600, lineHeight: 1.25, use: "Contact Us label on home, 25px line" }
    nav: { size: 16, weight: 700, lineHeight: 1.25, use: "Home navigation links (Physical AI, Defense, MAIED, 회사소개), 20px line, in #8e8e8e" }
    button: { size: 16, weight: 700, lineHeight: 1.25, use: "새로운 대화 and Retrieval 모델 설정 labels on /maum-gpt, 20px line" }
    body: { size: 16, weight: 500, lineHeight: 1.25, use: "Document default on all three pages, 20px line, in #111111" }
    caption: { size: 14, weight: 500, lineHeight: 1.14, use: "Small grey meta text on /physical-ai-service, 16px line, in #949ca5" }
  spacing: { cta-y: 20, cta-x: 32, side-y: 32, side-x: 16, list-y: 16, list-x: 20, icon-inset: 48 }
  rounded: { menu: 8, card: 10, action: 12, pill: 9999 }
  shadow:
    top-button: "rgba(18, 44, 72, 0.2) 0px 2px 8px 0px"
    card-line: "rgb(222, 228, 235) 0px 1px 0px 0px"
  components:
    contact-cta: { type: button, bg: "#343434", fg: "#ffffff", radius: "9999px", padding: "20px 32px", height: "65px", font: "20px / 600 / 25px Pretendard", hover: "background-color becomes transparent and a linear-gradient(93deg, rgb(107, 157, 205) 0%, rgb(113, 166, 47) 170.68%) fills the pill", pressed: "the same gradient", states: "settles at once (transition all 0s); focus draws only the browser's default ring, so no brand focus style is declared", use: "Contact Us under the home headline, 192 x 65; marketing page" }
    gnb-link: { type: tab, fg: "#8e8e8e", font: "16px / 700 / 20px Pretendard", hover: "fg #111111", pressed: "fg #111111", states: "0.2s colour transition on cubic-bezier(0.4, 0, 0.2, 1); focus draws only the browser default ring", use: "Home navigation (Physical AI, Defense, MAIED, 회사소개)" }
    top-button: { type: button, bg: "#ffffff", radius: "9999px", size: "48px x 48px", shadow: "rgba(18, 44, 72, 0.2) 0px 2px 8px 0px", states: "hover and pressed show no change", use: "Back-to-top circle on home, the one lifted control captured" }
    new-chat-button: { type: button, bg: "#4262ff", fg: "#ffffff", radius: "12px", padding: "0px 0px 0px 48px", height: "56px", font: "16px / 700 / 20px Pretendard", states: "hover and pressed show no change (transition all 0s); focus draws only the browser default ring", use: "새로운 대화, the primary action of the maumChatbot page, 208 x 56 with an icon inset at the left; chatbot product surface" }
    retrieval-button: { type: button, bg: "#5b636d", fg: "#ffffff", radius: "12px", padding: "0px 0px 0px 48px", height: "56px", font: "16px / 700 / 20px Pretendard", states: "hover and pressed show no change", use: "Retrieval 모델 설정 at the foot of the chatbot sidebar, 208 x 56; chatbot product surface" }
    chat-list-item: { type: tab, bg: "transparent", fg: "#111111", radius: "12px", padding: "16px 20px", height: "48px", font: "16px / 700 / 20px Pretendard", selected: "bg #e2edfc with a 1px #d2dcea bottom border and 12px 12px 0 0 corners", hover: "bg #f2f3f7 with a 1px #d2dcea bottom shadow line", pressed: "bg #f2f3f7 with the same line", states: "0.15s transition on cubic-bezier(0.4, 0, 0.2, 1); the selected item gains only the line on hover", use: "Chatbot list in the /maum-gpt sidebar (외부 GPT selected, MAAL and others); chatbot product surface" }
    side-menu-item: { type: tab, fg: "#111111", radius: "12px", padding: "32px 16px", height: "64px", font: "16px / 700 / 20px Pretendard", selected: "bg #292d33, fg #ffffff, 16px / 600, 16px padding, 52px tall", hover: "bg #f2f3f7 with a 1px #d2dcea bottom shadow line", pressed: "bg #f2f3f7 with the same line", states: "the selected item fades to opacity 0.9 on hover and press; 0.15s transition on cubic-bezier(0.4, 0, 0.2, 1)", use: "Left menu of /physical-ai-service (HOME selected, AI Integration Module and others), 176px wide" }
    language-dropdown: { type: button, fg: "#111111", radius: "8px", size: "80px x 40px", font: "16px / 500 / 20px Pretendard", hover: "bg #f2f3f7", pressed: "bg #f2f3f7", states: "0.15s transition", use: "KOR language toggle in the header of /physical-ai-service and /maum-gpt" }
    product-card: { type: card, bg: "transparent", border: "1px solid #dee4eb", radius: "10px", size: "355px x 487px", shadow: "rgb(222, 228, 235) 0px 1px 0px 0px", use: "Product cards on /physical-ai-service (4 instances)" }
    chat-input: { type: input, fg: "#111111", padding: "8px 40px", height: "40px", font: "16px / 500 / 24px Pretendard", disabled: "the textarea is disabled for logged-out visitors", use: "Message field of the maumChatbot page, 517 x 40; never typed into; chatbot product surface" }
  components_harvested: true
---

# Design System Inspiration of maum.ai

## 1. Visual Theme & Atmosphere

maum.ai (마음AI) is a Korean artificial-intelligence company that now calls itself "The Physical AI Company" and describes its work as "Building Robot Brains". Its company page says it was founded in 2014 (회사설립년도 2014년 1월) as an AI specialist able to take technology from development to industrial deployment, and that it is moving beyond AI that processes documents and data toward AI embedded in robots and machines that judge and act for themselves. The company overview on the same page lists (주)마음에이아이, CEO 유태준, a head office in Pangyo, Seongnam, and 130 staff. The site still carries traces of its former name, MindsLab (마인즈랩): a "2022 마인즈랩 사업보고서" disclosure label and an engine-owner value `MindsLab` that the interface labels 마음AI.

The product story is built on four foundation models — MAAL (an edge agent LLM), SUDA (speech-to-text, LLM and text-to-speech combined on-device for zero-latency voice conversation), BODA (a vision-language model) and WoRV (a vision-based robotics model) — and on MAIED (Maum AI Edge Device), an edge module that runs them without the cloud. The home page puts robots first: JINDO BOT, a domestically built four-legged robot; AIden, a conversational, self-driving service robot; an unmanned pesticide sprayer; a barrier-free kiosk with an AI human; and Woochi Bot, a performance humanoid for events. Its headline asks visitors to subscribe to Physical AI robots.

The website is quiet and near-monochrome. Pages are white with `#111111` text set in Pretendard at weight 500. The home headline is the one expressive type moment: Jamsil at 72px, weight 700. The home call to action is a charcoal `#343434` pill that turns into a blue-to-green gradient on hover. Product pages add a left menu whose selected item is a dark `#292d33` tile and whose hover is a pale `#f2f3f7` fill with a thin `#d2dcea` line. Colour appears in the chatbot product: its primary action, 새로운 대화, is filled in indigo `#4262ff`, and its selected list item sits on a pale blue `#e2edfc`. Depth is almost absent; 131 of the 150 recorded elements compute `box-shadow: none`, and the rest are transparent rings, a hairline under the cards and one lifted back-to-top button.

**Key Characteristics:**
- Near-monochrome marketing pages: white, `#111111` text, `#595959` and `#949ca5` greys, `#8e8e8e` navigation
- Jamsil 72px / 700 for the home headline; Pretendard 500 for body and 700 for navigation and actions
- A charcoal `#343434` pill call to action whose hover is a blue-to-green gradient
- Indigo `#4262ff` as the filled primary action of the chatbot product, with a pale blue `#e2edfc` selection
- 12px corners on menu and action tiles, 10px on cards, pills for the marketing call to action
- Pale `#f2f3f7` hover fills with a 1px `#d2dcea` line under menu and list items
- Flat surfaces; only the back-to-top button is lifted

## Primary tasks

- Browse the robot and Physical AI product lineup
- Read what the foundation models and the MAIED edge module do
- Try the maumChatbot and see which models it offers
- Find a contact path to the company

## 2. Color Palette & Roles

Every token below was read on 2026-09-30 by the deterministic collector from the logged-out home (maum.ai), the product showcase (/physical-ai-service) and the chatbot page (/maum-gpt), and hover values by the fixed keyboard probe. The home and /physical-ai-service are marketing pages; /maum-gpt is a separate evidence domain, the maumChatbot product, and components from it are labelled "chatbot product surface". No value is taken from the app behind the login.

### Primary
- **maum Indigo** (`#4262ff`): The fill of 새로운 대화, the primary action of the maumChatbot page (208 × 56, 12px radius, `#ffffff` label). It is the primary because it is the only chromatic colour that fills a primary action on the captured surfaces; the marketing home's call to action is charcoal, and nothing else carries a saturated hue. The evidence is one control on one page, and the probe found no hover or pressed change on it.
- **On Primary** (`#ffffff`): Labels on the indigo, charcoal, slate and dark-tile fills.

### Actions
- **Charcoal** (`#343434`): The Contact Us pill on the home page, the marketing site's call to action. On hover and press its fill gives way to `linear-gradient(93deg, rgb(107, 157, 205) 0%, rgb(113, 166, 47) 170.68%)`.
- **Slate** (`#5b636d`): Retrieval 모델 설정, the secondary action at the foot of the chatbot sidebar.
- **Dark Tile** (`#292d33`): The selected item (HOME) of the /physical-ai-service left menu.

### Text
- **Ink** (`#111111`): The document default on every page, headings and menu labels.
- **Lead Grey** (`#595959`): Product descriptions in the home carousel.
- **Nav Muted** (`#8e8e8e`): Home navigation links at rest; they turn `#111111` on hover.
- **Muted** (`#949ca5`): Small meta text and header utility links on the product pages.

### Surface & Borders
- **White** (`#ffffff`): The back-to-top button; the page canvas is the browser's white (the body computes a transparent background).
- **Selected Tint** (`#e2edfc`): The selected chatbot in the /maum-gpt list.
- **Hover Surface** (`#f2f3f7`): Hover fill of menu items, list items and the KOR toggle.
- **Hairline** (`#dee4eb`): The 1px border and bottom line of the product cards.
- **Underline** (`#d2dcea`): The 1px bottom border of the selected chatbot and the hover line under menu and list items.

### Brand assets, not tokens
- The Contact Us hover gradient (`rgb(107, 157, 205)` to `rgb(113, 166, 47)`) is a state fill, not a colour token.
- The left icon rail of the product pages sets its labels in `rgba(255, 255, 255, 0.3)` on a dark rail whose fill the collector did not record.
- The maum.ai logo was not measured; no logo colour is claimed.

## 3. Typography Rules

### Font Family
- **Live surface use**: `Pretendard` (118 observed uses) and `Jamsil` (2), both `loaded / high`, self-hosted by maum.ai: Pretendard as OTF files (`maum.ai/assets/Pretendard-Regular-….otf` and other weights) and Jamsil as `maum.ai/assets/The-Jamsil-1-Thin-….ttf` through `The-Jamsil-4-Medium-….ttf` and further weights. Pretendard carries body, navigation, headings and buttons on all three pages; Jamsil sets the home headline and its container.
- **Official distributed font assets**: Pretendard is an open-source Korean typeface by Kil Hyung-jin (orioncactus); its LICENSE, opened on 2026-09-30, states the SIL Open Font License 1.1. Jamsil's served files are named "The-Jamsil", which matches the typeface The Jamsil (더잠실); no distributor or licence page was opened this session, so its origin and licence are not stated.
- **Official product use**: no maum.ai page opened this session names its typefaces, so no statement of official product use is made.
- **Declared only (no visible use)**: `Orbitron` (Regular to Bold, self-hosted at `maum.ai/assets/Orbitron-….ttf`, 0 observed uses), `Pretendard Variable` (from jsDelivr, pretendard@1.3.9, 0 uses) and `swiper-icons` (the carousel library's icon font). No Orbitron text was observed, so no Orbitron specimen or size is given.
- **Unresolved**: Jamsil's distributor and licence.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Observed on |
|------|------|------|--------|-------------|-------------|
| Display Hero | Jamsil | 72px | 700 | 73.6px (1.02) | Home headline, `#111111` |
| Section Title | Pretendard | 48px | 700 | 48px (1.0) | Page headings on the product and chatbot pages |
| Product Name | Pretendard | 32px | 600 | 36px (1.13) | Product cards |
| Prompt Title | Pretendard | 24px | 700 | 32px (1.33) | Chatbot prompt heading |
| Section Label | Pretendard | 24px | 600 | 32px (1.33) | Label above the product cards |
| Lead | Pretendard | 20px | 500 | 26px (1.3) | Home carousel descriptions, `#595959` |
| Description | Pretendard | 20px | 400 | 29px (1.45) | Page introductions |
| Button Large | Pretendard | 20px | 600 | 25px (1.25) | Contact Us |
| Nav | Pretendard | 16px | 700 | 20px (1.25) | Home navigation, `#8e8e8e` |
| Button | Pretendard | 16px | 700 | 20px (1.25) | Chatbot actions |
| Body | Pretendard | 16px | 500 | 20px (1.25) | Document default |
| Caption | Pretendard | 14px | 500 | 16px (1.14) | Product-page meta, `#949ca5` |

### Principles
- **One display moment**: Jamsil appears only in the home headline; everything else is Pretendard.
- **Medium by default**: the body weight is 500, not 400; navigation and actions step up to 700.
- **Tight lines**: headings run near 1.0 line height, and body text sits at 20px on 16px.

## 4. Component Stylings

### Buttons

**Contact call to action (marketing)**
- Background: `#343434`
- Text: `#ffffff`
- Radius: 9999px
- Padding: 20px 32px
- Height: 65px (192px wide)
- Font: 20px / 600 / 25px Pretendard
- Hover / pressed: the fill becomes `linear-gradient(93deg, rgb(107, 157, 205) 0%, rgb(113, 166, 47) 170.68%)`
- Focus: browser default ring only

**New chat (chatbot primary)**
- Background: `#4262ff`
- Text: `#ffffff`
- Radius: 12px
- Padding: 0 0 0 48px (icon inset at the left)
- Height: 56px (208px wide)
- Font: 16px / 700 / 20px Pretendard
- States: no hover or pressed change

**Retrieval settings (chatbot secondary)**
- Background: `#5b636d`
- Text: `#ffffff`
- Radius: 12px
- Padding: 0 0 0 48px
- Height: 56px
- Font: 16px / 700 / 20px Pretendard
- States: no hover or pressed change

**Back to top**
- Background: `#ffffff`
- Radius: 9999px (48 × 48)
- Shadow: `rgba(18, 44, 72, 0.2) 0px 2px 8px 0px`
- States: no hover or pressed change

**Language toggle (KOR)**
- Text: `#111111`
- Radius: 8px
- Size: 80 × 40px
- Font: 16px / 500 / 20px Pretendard
- Hover / pressed: background `#f2f3f7`

### Navigation

**Home navigation link**
- Text: `#8e8e8e`
- Font: 16px / 700 / 20px Pretendard
- Hover / pressed: `#111111` after a 0.2s colour transition

**Side menu item (product pages)**
- Text: `#111111`
- Radius: 12px
- Padding: 32px 16px
- Height: 64px (176px wide)
- Font: 16px / 700 / 20px Pretendard
- Selected: background `#292d33`, text `#ffffff`, 16px / 600, 52px tall
- Hover / pressed: background `#f2f3f7` with a 1px `#d2dcea` line; the selected item fades to opacity 0.9

**Chatbot list item**
- Background: transparent
- Text: `#111111`
- Radius: 12px
- Padding: 16px 20px
- Height: 48px (208px wide)
- Font: 16px / 700 / 20px Pretendard
- Selected: background `#e2edfc` with a 1px `#d2dcea` bottom border
- Hover / pressed: background `#f2f3f7` with a 1px `#d2dcea` line

### Cards & Inputs

**Product card**
- Background: transparent
- Border: 1px solid `#dee4eb`
- Radius: 10px
- Size: 355 × 487px
- Shadow: `rgb(222, 228, 235) 0px 1px 0px 0px`

**Chat input**
- Text: `#111111`
- Padding: 8px 40px
- Height: 40px (517px wide)
- Font: 16px / 500 / 24px Pretendard
- Disabled: disabled for logged-out visitors

---

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out maum.ai pages plus fixed keyboard-probe state reads and first-party context)
**Tier 1 sources:** https://maum.ai/ ; https://maum.ai/physical-ai-service ; https://maum.ai/maum-gpt ; https://maum.ai/company ; https://maum-ai.github.io/ ; https://github.com/maum-ai
**Tier 2 sources:** getdesign.md/maum-ai (HTTP 200, the name does not appear in the response) and styles.refero.design/?q=maum (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Contact Us: 20px 32px padding at 65px height
- Side menu items: 32px 16px padding (16px on the selected tile)
- Chatbot list items: 16px 20px padding at 48px height
- Chatbot actions: a 48px left inset for the icon
- Frequent spacing values in the capture: 16, 20, 32, 4 and 56px

### Grid & Container
- Home: a fixed header with navigation, the Jamsil headline and Contact Us, a horizontal product carousel of 340 × 464 tiles, a MAIED section, foundation-model blocks and a contact form (not captured or used).
- /physical-ai-service: a dark icon rail, a 176px left menu and a grid of 355 × 487 product cards under a 48px heading.
- /maum-gpt: a 208px sidebar with 새로운 대화, the chatbot list and Retrieval 모델 설정, beside the chat area and its disabled input.

### Whitespace Philosophy
- **Quiet marketing**: large white space around a few headings and one call to action.
- **Soft segmentation**: hover fills and a 1px line mark the active row; cards use a hairline, not a shadow.

### Border Radius Scale
- 0px: the default (122 of the recorded radii)
- 8px: the language toggle
- 10px: product cards
- 12px: side menu items, chatbot list items and chatbot actions
- 9999px: the Contact Us pill and the back-to-top circle

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | 131 of 150 recorded elements |
| Hairline | 1px solid `#dee4eb` plus a `rgb(222, 228, 235) 0px 1px 0px 0px` line | Product cards |
| Row line | `rgb(210, 220, 234) 0px 1px 0px 0px` | Hovered menu and list items |
| Lift | `rgba(18, 44, 72, 0.2) 0px 2px 8px 0px` | Back-to-top button |

**Shadow Philosophy**: maum.ai is flat. Its only real shadow lifts the back-to-top button; cards and active rows are marked with 1px lines.

## 7. Do's and Don'ts

### Do
- Keep marketing pages white and near-monochrome, with `#111111` text
- Set one headline in Jamsil 700 and everything else in Pretendard, 500 for body and 700 for actions
- Fill the product's primary action in `#4262ff` with a white label and 12px corners
- Use a charcoal `#343434` pill for the marketing call to action
- Mark hovered rows with `#f2f3f7` and a 1px `#d2dcea` line; mark the selected tile `#292d33` or `#e2edfc`
- Keep cards flat with a `#dee4eb` hairline

### Don't
- Don't spread `#4262ff` across marketing pages; it appears only on the chatbot's primary action
- Don't add drop shadows to cards
- Don't set body copy in Jamsil
- Don't use Orbitron; it is declared but was never observed in use
- Don't invent focus styles; every probed control shows only the browser's default ring
- Don't render Pretendard or Jamsil with another face in their place

## 8. Responsive Behavior

### Breakpoints
Only the 1440 × 900 desktop viewport was captured. Class names such as `laptop-sm:order-4`, `laptop:inline` and `tablet:text-base` show named tablet and laptop breakpoints; no breakpoint value was measured.

### Touch Targets
- Contact Us: 65px tall
- Side menu items: 64px (selected 52px)
- Chatbot actions: 56px
- Chatbot list items: 48px; back-to-top 48 × 48
- Language toggle: 40px

### Collapsing Strategy
Not captured.

### Image Behavior
- Product and robot imagery sits flat in carousel tiles and 10px-radius cards.

## 9. Agent Prompt Guide

### Quick Color Reference
- Product primary action: `#4262ff` with `#ffffff`
- Marketing call to action: `#343434` pill; hover gradient rgb(107, 157, 205) to rgb(113, 166, 47)
- Secondary action: `#5b636d`; selected tile `#292d33`
- Text: `#111111`, `#595959`, `#8e8e8e` (navigation), `#949ca5` (meta)
- Surfaces: `#ffffff`, `#e2edfc` (selected), `#f2f3f7` (hover)
- Lines: `#dee4eb` (cards), `#d2dcea` (rows)

### Example Component Prompts
- "Create a marketing call to action: `#343434` pill, white 20px Pretendard label at weight 600, 20px 32px padding, 65px tall; on hover replace the fill with linear-gradient(93deg, rgb(107, 157, 205) 0%, rgb(113, 166, 47) 170.68%)."
- "Create a chatbot sidebar: a `#4262ff` 새로운 대화 button (white 16px / 700 label, 12px radius, 208 × 56, icon inset 48px), a list of 48px items with 12px radius and 16px 20px padding (selected `#e2edfc` with a 1px `#d2dcea` bottom border, hover `#f2f3f7`), and a `#5b636d` settings button at the foot."
- "Build a product card: transparent background, 1px solid `#dee4eb` border, 10px radius, a 32px / 600 product name in `#111111` and 14px / 500 meta text in `#949ca5`; no shadow."

### Iteration Guide
1. White and near-monochrome; `#111111` text
2. Jamsil for one headline only; Pretendard 500 / 700 elsewhere
3. `#4262ff` only for the product's primary action
4. Charcoal pill for the marketing call to action
5. 12px tiles, 10px cards, pills for the call to action
6. Flat; 1px lines instead of shadows

---

## 10. Voice & Tone

maum.ai's voice is **confident, technical and matter-of-fact**: short statements about what its models and robots do, product names that read like engineering designations, and direct calls to action.

| Context | Tone |
|---|---|
| Positioning | Declarative. "로봇에 두뇌를 탑재하다", "The Physical AI Company" |
| Headline | A direct offer. "Physical AI 로봇을 구독하세요." |
| Product names | Terse, engineered. "JINDO BOT", "AIden", "MAIED", "MAAL", "SUDA", "BODA", "WoRV" |
| Capability copy | Concrete. "Full Autonomy 기반 국내 생산 4족 보행 로봇" |
| Chatbot | Inviting, one line. "지금 MAAL과 대화해 보세요." |
| Actions | Plain. "Contact Us", "문의하기", "새로운 대화" |

**Voice samples (verbatim, opened 2026-09-30):**
- "로봇에 두뇌를 탑재하다" — the page heading on maum.ai.
- "Physical AI 로봇을 구독하세요." — home headline.
- "The Physical AI Company — Building Robot Brains" — /company.
- "마음AI는 2014년 설립된 인공지능 전문 기업으로, AI 기술 개발부터 실제 산업 현장 적용까지 가능한 역량을 보유하고 있습니다." — /company.
- "지금 MAAL과 대화해 보세요." — /maum-gpt.
- "AI for the Physical World" — the maum.ai BRAIN Team site.

**Forbidden register**: consumer-app cuteness, exclamation-heavy hype, vague superlatives, jargon left unexplained for an enterprise reader.

## 11. Brand Narrative

maum.ai's company page tells its story in two moves. First, what it is: an AI specialist founded in 2014 that can take technology from research to the field. Second, where it is going: from AI that handles documents and data to "Physical AI", AI that sits inside robots and machines and decides and acts on its own. It claims to be the only Korean company to have taken Physical AI all the way to commercial use, and lists deployments across defence (perimeter and patrol robots), construction (site-safety inspection), agriculture (autonomous tractors), manufacturing (assembly), logistics (autonomous yard tractors), shipbuilding (welding), smart homes, public services (care robots, the maum-TOUCH barrier-free kiosk), service (AIden) and promotion (WOOCHI BOT). A "Physical AI Data Factory" runs from simulation through field trials and commercial operation to monitoring.

The rebrand from MindsLab to maum.ai shows in that reframing, and in what the site still carries: a label for the "2022 마인즈랩 사업보고서" and an engine owner recorded as `MindsLab` but shown as 마음AI. The company's research arm, the maum.ai BRAIN Team, publishes at maum-ai.github.io under the line "AI for the Physical World". It works on Embodied AI, Agentic LLM, Audio Intelligence, Robotics and Physical World Modeling, with recent papers at EMNLP Findings, INTERSPEECH and ICASSP, and keeps its code in the public GitHub organisation github.com/maum-ai.

The website reflects the same engineering posture: little colour, one strong headline, square-edged structure, and saturated indigo kept for the moment a visitor actually uses the product.

## 12. Principles

1. **Robots first.** The home leads with robots to subscribe to. *UI implication:* products appear as a large visual carousel before any explanation.
2. **Models as named parts.** MAAL, SUDA, BODA and WoRV are presented as components of a robot brain. *UI implication:* terse names with one concrete line each.
3. **Quiet until it matters.** *UI implication:* monochrome marketing pages; indigo `#4262ff` only on the product's primary action. (An editorial reading of the captured pages, not a maum.ai statement.)
4. **From research to the field.** The company page stresses deployment. *UI implication:* concrete capability copy rather than slogans.
5. **Flat and engineered.** *UI implication:* 1px lines and pale fills mark state; no card shadows.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable maum.ai audiences (industrial and public-sector buyers of robots, ML engineers), not individual people.*

**정민석, 41, 서울.** Head of AI transformation at a manufacturer evaluating robots for the factory floor. Wants concrete capability claims and integration paths, not slogans.

**Grace Lim, 33, 판교.** An ML engineer assessing maum.ai's models. Reads the BRAIN Team site and the GitHub organisation before booking a call, and tries the maumChatbot first.

**한도윤, 47, 대전.** A public-sector procurement lead reviewing AI and defence solutions. Needs a formal, credible surface and a clear contact path.

## 14. States

Only these states were observed on the three captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Hover / pressed (Contact Us)** | Charcoal fill → the blue-to-green gradient, at once (transition all 0s). |
| **Hover / pressed (home navigation)** | `#8e8e8e` → `#111111` over 0.2s. |
| **Hover / pressed (menu and list items)** | Transparent → `#f2f3f7` with a 1px `#d2dcea` line, over 0.15s. |
| **Hover / pressed (selected menu tile)** | Opacity 1 → 0.9. |
| **Hover / pressed (KOR toggle)** | Transparent → `#f2f3f7`. |
| **No change** | 새로운 대화, Retrieval 모델 설정, the header 문의하기 icon button and the back-to-top button. |
| **Selected** | Side menu tile `#292d33` with white text; chatbot list item `#e2edfc`. |
| **Disabled** | The chat input is disabled for logged-out visitors. |
| **Focus** | Every probed control shows only the browser's default ring (`rgb(0, 95, 204)` auto); no brand focus style is declared. |

Error, empty, loading and success states were not captured and are not described.

## 15. Motion & Easing

The probe read the transitions the controls compute. Home navigation links transition colour, background, border, text-decoration colour, fill and stroke over 0.2s with `cubic-bezier(0.4, 0, 0.2, 1)`. The side menu items, chatbot list items and the KOR toggle transition colour, background, opacity, box-shadow, transform and filters over 0.15s with the same curve. Contact Us, 새로운 대화, Retrieval 모델 설정 and the back-to-top button compute `transition: all 0s`, so their changes are instant. No other duration or easing is specified.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/maum-ai.json (capturedAt 2026-09-30T10:01:20Z), deterministic collector, 1440x900, logged out: maum.ai, /physical-ai-service, /maum-gpt. States: fixed keyboard probe raws docs/research/2026-09-29-growth/raw/maum-ai-states-{home,physical,gpt}.json.
- §1, §10, §11 context: maum.ai/company (company overview), the maum.ai home copy and application bundle strings, maum-ai.github.io and github.com/maum-ai, opened 2026-09-30.
- §3 licence: the Pretendard LICENSE on GitHub, opened 2026-09-30.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->
