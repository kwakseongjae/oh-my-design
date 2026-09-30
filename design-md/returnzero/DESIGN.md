---
id: returnzero
name: Return Zero
display_name_kr: 리턴제로
country: KR
category: ai
homepage: "https://www.rtzr.ai"
primary_color: "#222222"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=rtzr.ai&sz=128"
verified: "2026-09-30"
added: "2026-06-26"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.rtzr.ai/", inspected: "2026-09-30" }
    - { id: surface-2, kind: marketing, url: "https://www.rtzr.ai/stt", inspected: "2026-09-30" }
    - { id: surface-3, kind: marketing, url: "https://www.rtzr.ai/pricing", inspected: "2026-09-30" }
    - { id: surface-4, kind: product, url: "https://developers.rtzr.ai/", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://www.rtzr.ai/", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://www.rtzr.ai/stt", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://www.rtzr.ai/pricing", captured: "2026-09-30" }
    - { id: surface-surface-4, kind: product-surface, url: "https://developers.rtzr.ai/", captured: "2026-09-30" }
    - { id: returnzero-probe-home, kind: product-surface, url: "https://www.rtzr.ai/", captured: "2026-09-30" }
    - { id: returnzero-probe-stt, kind: product-surface, url: "https://www.rtzr.ai/stt", captured: "2026-09-30" }
    - { id: returnzero-probe-pricing, kind: product-surface, url: "https://www.rtzr.ai/pricing", captured: "2026-09-30" }
    - { id: returnzero-probe-developers, kind: product-surface, url: "https://developers.rtzr.ai/", captured: "2026-09-30" }
    - { id: rtzr-company, kind: official-doc, url: "https://www.rtzr.ai/company", captured: "2026-09-30" }
    - { id: rtzr-blog, kind: official-doc, url: "https://blog.rtzr.ai/", captured: "2026-09-30" }
    - { id: pretendard-license, kind: license, url: "https://raw.githubusercontent.com/orioncactus/pretendard/main/LICENSE", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &headercta { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"5\"]", captured: "2026-09-30" }
    "tokens.colors.on-primary": *headercta
    "tokens.colors.ink": &h1 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h1", captured: "2026-09-30" }
    "tokens.colors.text": &body { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::body", captured: "2026-09-30" }
    "tokens.colors.white": &trynow { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"17\"]", captured: "2026-09-30" }
    "tokens.colors.hairline": &cardstate { surface_id: home, source_id: returnzero-probe-home, method: live-state-probe, selector: "button 더 알아보기 and 읽어보기 (98 x 42, rest bg rgb(34, 34, 34), fg rgb(255, 255, 255), radius 4px, padding 10px, 14px/600): the buttons show no change; their card ancestor up2 (bg rgb(255, 255, 255), border 1px solid rgb(238, 238, 238)) changes border to 1px solid rgb(204, 204, 204) on hover and pressed; focus (Tabs #20, #24) moves only a carousel slide transform", captured: "2026-09-30" }
    "tokens.colors.hairline-hover": *cardstate
    "tokens.colors.slate": &demoh4 { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::h4", captured: "2026-09-30" }
    "tokens.colors.muted": &tabupload { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::[data-omd-capture=\"7\"]", captured: "2026-09-30" }
    "tokens.colors.accent": &record { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::[data-omd-capture=\"9\"]", captured: "2026-09-30" }
    "tokens.colors.accent-hover": &recordstate { surface_id: surface-4, source_id: returnzero-probe-developers, method: live-state-probe, selector: "button 녹음시작 (167.3 x 58): hover and pressed bg rgb(58, 137, 255) -> rgb(49, 116, 217); focus (Tab #10) no change across self, 3 descendants incl. 1 svg and 3 ancestor levels; transition all 0s", captured: "2026-09-30" }
    "tokens.typography.family.sans": *body
    "tokens.typography.display.size": *h1
    "tokens.typography.display.weight": *h1
    "tokens.typography.display.lineHeight": *h1
    "tokens.typography.display.use": *h1
    "tokens.typography.dev-hero.size": &devh1 { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::h1", captured: "2026-09-30" }
    "tokens.typography.dev-hero.weight": *devh1
    "tokens.typography.dev-hero.lineHeight": *devh1
    "tokens.typography.dev-hero.tracking": *devh1
    "tokens.typography.dev-hero.use": *devh1
    "tokens.typography.plan-title.size": &planh4 { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h4", captured: "2026-09-30" }
    "tokens.typography.plan-title.weight": *planh4
    "tokens.typography.plan-title.use": *planh4
    "tokens.typography.plan-lead.size": &planp { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::p", captured: "2026-09-30" }
    "tokens.typography.plan-lead.weight": *planp
    "tokens.typography.plan-lead.lineHeight": *planp
    "tokens.typography.plan-lead.use": *planp
    "tokens.typography.button-lg.size": &herocta { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"17\"]", captured: "2026-09-30" }
    "tokens.typography.button-lg.weight": *herocta
    "tokens.typography.button-lg.use": *herocta
    "tokens.typography.button.size": *headercta
    "tokens.typography.button.weight": *headercta
    "tokens.typography.button.lineHeight": *headercta
    "tokens.typography.button.use": *headercta
    "tokens.typography.nav.size": &nav { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-09-30" }
    "tokens.typography.nav.weight": *nav
    "tokens.typography.nav.use": *nav
    "tokens.typography.menu.size": &menu { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"7\"]", captured: "2026-09-30" }
    "tokens.typography.menu.weight": *menu
    "tokens.typography.menu.use": *menu
    "tokens.typography.body.size": *body
    "tokens.typography.body.weight": *body
    "tokens.typography.body.lineHeight": *body
    "tokens.typography.body.use": *body
    "tokens.typography.demo-title.size": *demoh4
    "tokens.typography.demo-title.weight": *demoh4
    "tokens.typography.demo-title.lineHeight": *demoh4
    "tokens.typography.demo-title.use": *demoh4
    "tokens.typography.demo-body.size": &demop { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::p", captured: "2026-09-30" }
    "tokens.typography.demo-body.weight": *demop
    "tokens.typography.demo-body.lineHeight": *demop
    "tokens.typography.demo-body.tracking": *demop
    "tokens.typography.demo-body.use": *demop
    "tokens.typography.pill.size": &pill { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::[data-omd-capture=\"2\"]", captured: "2026-09-30" }
    "tokens.typography.pill.weight": *pill
    "tokens.typography.pill.lineHeight": *pill
    "tokens.typography.pill.use": *pill
    "tokens.spacing.button-pad": *headercta
    "tokens.spacing.cta-y": *herocta
    "tokens.spacing.cta-x": *herocta
    "tokens.spacing.dev-cta-y": &devwhite { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::[data-omd-capture=\"5\"]", captured: "2026-09-30" }
    "tokens.spacing.record-y": *record
    "tokens.spacing.pill-y": *pill
    "tokens.spacing.pill-x": *pill
    "tokens.rounded.action": *headercta
    "tokens.rounded.nav-pill": &devnav { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::li", captured: "2026-09-30" }
    "tokens.rounded.pill": *pill
    "tokens.rounded.record": *record
    "tokens.components.header-cta.type": *headercta
    "tokens.components.header-cta.bg": *headercta
    "tokens.components.header-cta.fg": *headercta
    "tokens.components.header-cta.radius": *headercta
    "tokens.components.header-cta.padding": *headercta
    "tokens.components.header-cta.height": *headercta
    "tokens.components.header-cta.font": *headercta
    "tokens.components.header-cta.states": &headerstate { surface_id: home, source_id: returnzero-probe-home, method: live-state-probe, selector: "button 문의하기 (98 x 42, header): hover, pressed and focus (Tab #6) no change across self and 3 ancestor levels; transition all 0s", captured: "2026-09-30" }
    "tokens.components.header-cta.use": *headercta
    "tokens.components.primary-cta.type": *herocta
    "tokens.components.primary-cta.bg": *herocta
    "tokens.components.primary-cta.fg": *herocta
    "tokens.components.primary-cta.radius": *herocta
    "tokens.components.primary-cta.padding": *herocta
    "tokens.components.primary-cta.height": *herocta
    "tokens.components.primary-cta.font": *herocta
    "tokens.components.primary-cta.states": &herostate { surface_id: home, source_id: returnzero-probe-home, method: live-state-probe, selector: "button 리턴제로 STT 알아보기 (247 x 69): hover, pressed and focus (Tab #18) no change; same on /stt 서비스 도입문의 (Tab #25) and /pricing 맞춤 요금제 문의 (Tab #23); transition all 0s", captured: "2026-09-30" }
    "tokens.components.primary-cta.use": *herocta
    "tokens.components.card-button.type": *cardstate
    "tokens.components.card-button.bg": *cardstate
    "tokens.components.card-button.fg": *cardstate
    "tokens.components.card-button.radius": *cardstate
    "tokens.components.card-button.padding": *cardstate
    "tokens.components.card-button.height": *cardstate
    "tokens.components.card-button.font": *cardstate
    "tokens.components.card-button.states": *cardstate
    "tokens.components.card-button.use": *cardstate
    "tokens.components.feature-card.type": *cardstate
    "tokens.components.feature-card.bg": *cardstate
    "tokens.components.feature-card.border": *cardstate
    "tokens.components.feature-card.use": *cardstate
    "tokens.components.secondary-cta.type": *trynow
    "tokens.components.secondary-cta.bg": *trynow
    "tokens.components.secondary-cta.fg": *trynow
    "tokens.components.secondary-cta.radius": *trynow
    "tokens.components.secondary-cta.padding": *trynow
    "tokens.components.secondary-cta.height": *trynow
    "tokens.components.secondary-cta.font": *trynow
    "tokens.components.secondary-cta.states": &whitestate { surface_id: surface-2, source_id: returnzero-probe-stt, method: live-state-probe, selector: "button 바로 체험 (146.5 x 69, rest bg rgb(255, 255, 255), fg rgb(34, 34, 34)): hover, pressed and focus (Tab #18) no change; /pricing 상담신청 the same (Tab #24); /pricing plan buttons 바로 무료 체험 and 클라우드 도입 문의: hover and pressed unmeasured, focus (Tabs #19, #21) no change", captured: "2026-09-30" }
    "tokens.components.secondary-cta.use": *trynow
    "tokens.components.outline-cta.type": &outline { surface_id: surface-2, source_id: returnzero-probe-stt, method: live-state-probe, selector: "button 요금제 보기 and 정확도 비교 (164.1 x 71, rest bg rgba(0, 0, 0, 0), fg rgb(255, 255, 255), border 1px solid rgb(255, 255, 255), radius 4px, padding 24px 40px, 18px/600): hover, pressed and focus (Tabs #20, #22) no change; transition opacity 0.5s ease", captured: "2026-09-30" }
    "tokens.components.outline-cta.fg": *outline
    "tokens.components.outline-cta.border": *outline
    "tokens.components.outline-cta.radius": *outline
    "tokens.components.outline-cta.padding": *outline
    "tokens.components.outline-cta.height": *outline
    "tokens.components.outline-cta.font": *outline
    "tokens.components.outline-cta.states": *outline
    "tokens.components.outline-cta.use": *outline
    "tokens.components.record-button.type": *record
    "tokens.components.record-button.bg": *record
    "tokens.components.record-button.fg": *record
    "tokens.components.record-button.radius": *record
    "tokens.components.record-button.padding": *record
    "tokens.components.record-button.height": *record
    "tokens.components.record-button.font": *record
    "tokens.components.record-button.hover": *recordstate
    "tokens.components.record-button.pressed": *recordstate
    "tokens.components.record-button.states": *recordstate
    "tokens.components.record-button.use": *record
    "tokens.components.demo-tab.type": *tabupload
    "tokens.components.demo-tab.fg": *tabupload
    "tokens.components.demo-tab.font": *tabupload
    "tokens.components.demo-tab.selected": { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::#realtime", captured: "2026-09-30" }
    "tokens.components.demo-tab.states": &tabstate { surface_id: surface-4, source_id: returnzero-probe-developers, method: live-state-probe, selector: "button 파일 업로드 (73 x 22, rest fg rgb(153, 153, 153)): hover, pressed and focus (Tab #8) no change across self, 2 descendants and 3 ancestor levels", captured: "2026-09-30" }
    "tokens.components.demo-tab.use": *tabupload
    "tokens.components.account-pill.type": *pill
    "tokens.components.account-pill.fg": *pill
    "tokens.components.account-pill.border": *pill
    "tokens.components.account-pill.radius": *pill
    "tokens.components.account-pill.padding": *pill
    "tokens.components.account-pill.height": *pill
    "tokens.components.account-pill.font": *pill
    "tokens.components.account-pill.hover": &pillstate { surface_id: surface-4, source_id: returnzero-probe-developers, method: live-state-probe, selector: "button 회원가입 (91.5 x 34, header): hover and pressed bg rgba(0, 0, 0, 0) -> rgba(0, 0, 0, 0.05), fg rgb(85, 85, 85) -> rgb(34, 34, 34), border 1px solid rgb(85, 85, 85) -> 1px solid rgb(34, 34, 34), read with the header in its scrolled state; focus (Tab #3) no change", captured: "2026-09-30" }
    "tokens.components.account-pill.pressed": *pillstate
    "tokens.components.account-pill.states": *pillstate
    "tokens.components.account-pill.use": *pill
    "tokens.components.dev-outline-cta.type": &devoutline { surface_id: surface-4, source_id: surface-surface-4, method: computed-style, selector: "surface-4::[data-omd-capture=\"4\"]", captured: "2026-09-30" }
    "tokens.components.dev-outline-cta.fg": *devoutline
    "tokens.components.dev-outline-cta.border": *devoutline
    "tokens.components.dev-outline-cta.radius": *devoutline
    "tokens.components.dev-outline-cta.padding": *devoutline
    "tokens.components.dev-outline-cta.height": *devoutline
    "tokens.components.dev-outline-cta.font": *devoutline
    "tokens.components.dev-outline-cta.states": { surface_id: surface-4, source_id: returnzero-probe-developers, method: live-state-probe, selector: "button 사용문의 (144.2 x 67) and 무료로 체험하기 (193.2 x 67): hover, pressed and focus (Tabs #5, #6) no change; transition all 0s", captured: "2026-09-30" }
    "tokens.components.dev-outline-cta.use": *devoutline
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#222222"
    on-primary: "#ffffff"
    ink: "#222222"
    text: "#000000"
    white: "#ffffff"
    hairline: "#eeeeee"
    hairline-hover: "#cccccc"
    slate: "#555555"
    muted: "#999999"
    accent: "#3a89ff"
    accent-hover: "#3174d9"
  typography:
    family: { sans: "Pretendard" }
    display: { size: 42, weight: 300, lineHeight: 1.29, use: "Home hero headline, Pretendard Light, 54px line, in #222222" }
    dev-hero: { size: 36, weight: 600, lineHeight: 1.33, tracking: -1.5, use: "developers.rtzr.ai hero headline, 48px line, letter-spacing -1.5px, in white over the hero image" }
    plan-title: { size: 32, weight: 700, use: "White headings in the /pricing plan-card row; normal line height" }
    plan-lead: { size: 20, weight: 600, lineHeight: 1.6, use: "Subline in the /pricing hero, 32px line, in white" }
    button-lg: { size: 18, weight: 600, use: "Large action labels (리턴제로 STT 알아보기, 바로 체험, 서비스 도입문의); normal line height" }
    button: { size: 14, weight: 600, lineHeight: 1.4, use: "Compact action labels (문의하기 in the header, 더 알아보기, 읽어보기), 19.6px line" }
    nav: { size: 16, weight: 500, use: "Header navigation (COMPANY, RTZR STT, CALLABO, VITO), in #222222; normal line height" }
    menu: { size: 16, weight: 600, use: "Header menu links (News, Career, Blog, CI, 공고, Pricing, Developers), in #222222; normal line height" }
    body: { size: 16, weight: 400, lineHeight: 1.5, use: "Document default, 24px line, in #000000" }
    demo-title: { size: 18, weight: 700, lineHeight: 1.17, use: "Heading inside the developers.rtzr.ai STT demo, 21px line, in #555555" }
    demo-body: { size: 14, weight: 400, lineHeight: 1.57, tracking: -0.5, use: "Copy inside the developers.rtzr.ai STT demo, 21.98px line, letter-spacing -0.5px, in #555555" }
    pill: { size: 12, weight: 500, lineHeight: 1.17, use: "회원가입 / 로그인 account pills on developers.rtzr.ai, 14px line" }
  spacing: { button-pad: 10, cta-y: 24, cta-x: 40, dev-cta-y: 22, record-y: 20, pill-y: 9, pill-x: 24 }
  rounded: { action: 4, nav-pill: 20, pill: 30, record: 60 }
  components:
    header-cta: { type: button, bg: "#222222", fg: "#ffffff", radius: "4px", padding: "10px", height: "42px", font: "14px / 600 / 19.6px Pretendard", states: "probe on home: hover, pressed and focus (Tab #6) show no change; transition all 0s", use: "문의하기 in the header of every rtzr.ai page at home::[data-omd-capture=\"5\"], 98 x 42" }
    primary-cta: { type: button, bg: "#222222", fg: "#ffffff", radius: "4px", padding: "24px 40px", height: "69px", font: "18px / 600 Pretendard", states: "probe on home, /stt and /pricing: hover, pressed and focus show no change; transition all 0s", use: "Large filled actions: 리턴제로 STT 알아보기 in the home hero at home::[data-omd-capture=\"17\"] (247 x 69), 서비스 도입문의 on /stt and 맞춤 요금제 문의 on /pricing" }
    card-button: { type: button, bg: "#222222", fg: "#ffffff", radius: "4px", padding: "10px", height: "42px", font: "14px / 600 / 21px Pretendard", states: "probe on home: the button itself does not change on hover, pressed or focus; hover and pressed darken its card's border from #eeeeee to #cccccc", use: "더 알아보기 (product cards) and 읽어보기 (customer-story cards linking to blog.rtzr.ai) inside white cards on home, 98 x 42" }
    feature-card: { type: card, bg: "#ffffff", border: "1px solid #eeeeee", use: "White product and customer-story cards in the home carousels that hold 더 알아보기 and 읽어보기; the border turns #cccccc while the pointer is over the card's button" }
    secondary-cta: { type: button, bg: "#ffffff", fg: "#222222", radius: "4px", padding: "24px 40px", height: "69px", font: "18px / 600 Pretendard", states: "probe: hover, pressed and focus show no change on 바로 체험 and 상담신청; on the pricing plan buttons hover and pressed are unmeasured and focus shows no change", use: "White actions on dark grounds: 바로 체험 in the /stt hero at surface-2::[data-omd-capture=\"17\"] (146.5 x 69), 상담신청 on a #222222 band and 바로 무료 체험 / 클라우드 도입 문의 at the foot of the /pricing plan cards" }
    outline-cta: { type: button, fg: "#ffffff", border: "1px solid #ffffff", radius: "4px", padding: "24px 40px", height: "71px", font: "18px / 600 Pretendard", states: "probe on /stt: hover, pressed and focus show no change; transition opacity 0.5s ease", use: "요금제 보기 and 정확도 비교 beside 바로 체험 in the /stt hero, transparent over the hero image, 164 x 71" }
    record-button: { type: button, bg: "#3a89ff", fg: "#ffffff", radius: "60px", padding: "20px 40px", height: "58px", font: "18px / 400 Pretendard; label 16px / 700", hover: "bg #3174d9", pressed: "bg #3174d9", states: "probe: hover and pressed settle on #3174d9 (transition all 0s; the bundle's state frames agree); focus (Tab #10) shows no change", use: "녹음시작 in the developers.rtzr.ai STT demo at surface-4::[data-omd-capture=\"9\"], 167 x 58; developer portal only" }
    demo-tab: { type: tab, fg: "#999999", font: "16px / 500 Pretendard", selected: "fg #3a89ff, weight 700, 2px bottom border #3a89ff (실시간 녹음 at surface-4::#realtime)", states: "probe on 파일 업로드: hover, pressed and focus (Tab #8) show no change", use: "실시간 녹음 / 파일 업로드 / 샘플파일 demo mode tabs on developers.rtzr.ai at surface-4::[data-omd-capture=\"7\"]; developer portal only" }
    account-pill: { type: button, fg: "#ffffff", border: "1px solid #eeeeee", radius: "30px", padding: "9px 24px", height: "34px", font: "12px / 500 / 14px Pretendard", hover: "bg rgba(0, 0, 0, 0.05), fg #222222, border 1px solid #222222 (read with the header in its scrolled state, where the pill rests at #555555)", pressed: "bg rgba(0, 0, 0, 0.05), fg #222222, border 1px solid #222222", states: "probe: hover and pressed as above; focus (Tab #3) shows no change", use: "회원가입 and 로그인 in the developers.rtzr.ai header, white over the dark hero at rest, 91.5 x 34; developer portal only" }
    dev-outline-cta: { type: button, fg: "#ffffff", border: "1px solid rgba(255, 255, 255, 0.5)", radius: "4px", padding: "22px 40px", height: "67px", font: "18px / 600 Pretendard", states: "probe: hover, pressed and focus show no change on 사용문의 and on its white partner 무료로 체험하기 (#ffffff fill, #222222 label, 193 x 67)", use: "사용문의 in the developers.rtzr.ai hero at surface-4::[data-omd-capture=\"4\"], 144 x 67; developer portal only" }
  components_harvested: true
---

# Design System Inspiration of Return Zero

## 1. Visual Theme & Atmosphere

Return Zero (리턴제로) describes itself as a practical-AI startup: "We bring practical AI to the world — 리턴제로는 실용주의 AI 스타트업입니다. 최신 AI 기술을 실험실에서 세상으로 가져옵니다." Its company page gives 2018 as the founding year and counts more than 15 million hours of speech converted to text (about 1,712 years) and more than a million service users. It was started by former Kakao people — co-CEO 이참솔, who earlier co-founded 로티플 (acquired by Kakao), and co-CEO and CTO 정주영, previously on the KakaoTalk PC and messaging teams — and it sells speech recognition three ways: the RTZR STT API for businesses (with a public developer portal and demo), and two products, CALLABO and VITO, which the company page presents under the lines "No.1 AI 회의록" and "눈으로 보는 통화". Its blog is titled "기업을 위한 음성 AI", and the home page's customer stories link there, such as an AICC project with Shinhan Bank.

The marketing site (rtzr.ai) looks like infrastructure, not a consumer app. Within everything captured it is monochrome: white grounds, charcoal `#222222` for navigation, headlines and every filled action, pure `#000000` as the document's default text. The home hero sets its headline in Pretendard Light — 42px at weight 300 — above one charcoal action, 리턴제로 STT 알아보기. Every action is a 4px-cornered rectangle: charcoal with white labels on light grounds, white with charcoal labels on dark grounds, and a white outline over photography. None of the buttons animates — they compute `transition: all 0s` and show no hover change of their own. The only hover feedback on the home page is the white card around a button darkening its `#eeeeee` border to `#cccccc`.

Colour arrives only in the developer portal (developers.rtzr.ai), where the STT demo uses a clear blue `#3a89ff`: the pill-shaped 녹음시작 record button (hover `#3174d9`) and the underline and label of the selected demo tab. Secondary demo copy sits in `#555555`, unselected tabs in `#999999`.

**Key Characteristics:**
- Monochrome marketing: `#222222` fills every primary action and colours navigation and headlines; `#000000` is the default text
- Pretendard throughout, from a 300-weight 42px hero to 700-weight plan names
- 4px corners on every marketing action; pills (20px, 30px, 60px) appear only on the developer portal
- White `#ffffff` actions with charcoal labels on dark bands; white outlines over hero photography
- No button animation (`all 0s`); hover feedback is a card border shifting `#eeeeee` → `#cccccc`
- Developer-portal accent `#3a89ff` for the record action and the selected demo tab
- No captured element carries a shadow

## Primary tasks

- Learn what RTZR STT does and contact sales (문의하기, 서비스 도입문의)
- Try speech recognition in the browser demo before writing code
- Switch the demo between live recording, an uploaded file and a sample
- Compare cloud and on-premise plans and ask for a custom plan

## 2. Color Palette & Roles

### Primary
- **Charcoal** (`#222222`): The primary. rtzr.ai is monochrome within the captured scope, so the primary is the measured primary action fill: 문의하기 in the header of all three marketing pages, 리턴제로 STT 알아보기 in the home hero, 더 알아보기 and 읽어보기 in the home cards, 서비스 도입문의 on /stt and 맞춤 요금제 문의 on /pricing all fill `#222222` with a white label. The same charcoal colours the navigation and the hero headline (`ink`).
- **On Primary / White** (`#ffffff`): Labels on charcoal; the fill of white actions (바로 체험, 상담신청, the plan-card buttons) and of the home cards.

### Neutrals
- **Text** (`#000000`): The document's default text colour.
- **Hairline** (`#eeeeee`): The 1px border of the home cards and of the developer-portal account pills; **Hairline Hover** (`#cccccc`) is the card border while the pointer is over its button.
- **Slate** (`#555555`): Heading and copy inside the developer-portal demo; the resting colour of the account pills once the portal header turns solid.
- **Muted** (`#999999`): Unselected demo tabs and footer copy on the developer portal.

### Developer portal accent (developers.rtzr.ai only)
- **Accent** (`#3a89ff`): Fill of the 녹음시작 record button; label and 2px underline of the selected demo tab. **Accent Hover** (`#3174d9`) is the record button on hover and press.

### Not observed
- The mint, brand blue and highlight yellow in the earlier record did not appear on any captured page and are not tokens.

## 3. Typography Rules

### Font Family
- **Sans**: `Pretendard` — every captured element on rtzr.ai and developers.rtzr.ai.
- **Live surface use:** loaded, 114 observed uses (body, buttons, headings, list items, the demo notice), served from jsDelivr (`cdn.jsdelivr.net/gh/orioncactus/pretendard/…/web/static/…`).
- **Official distributed asset:** Pretendard's own repository (orioncactus/pretendard); its LICENSE file was opened and names Kil Hyung-jin (2021) and Adobe (2014–2021) as copyright holders. The licence clause itself is not quoted here.
- **Official product use:** no Return Zero page opened this session names its typeface; not claimed beyond the live use.
- **Declared only:** `swiper-icons` (carousel icon font, 0 uses).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display | Pretendard | 42px | 300 | 1.29 (54px) | Home hero, `#222222` |
| Dev Hero | Pretendard | 36px | 600 | 1.33 (48px) | developers.rtzr.ai hero, white, -1.5px |
| Plan Title | Pretendard | 32px | 700 | normal | /pricing plan-card row headings, white |
| Plan Lead | Pretendard | 20px | 600 | 1.6 (32px) | /pricing hero subline, white |
| Button Large | Pretendard | 18px | 600 | normal | Large action labels |
| Nav | Pretendard | 16px | 500 | normal | COMPANY, RTZR STT, CALLABO, VITO |
| Menu | Pretendard | 16px | 600 | normal | News, Career, Blog, CI, 공고, Pricing, Developers |
| Body | Pretendard | 16px | 400 | 1.5 (24px) | Document default, `#000000` |
| Demo Title | Pretendard | 18px | 700 | 1.17 (21px) | Demo heading, `#555555` |
| Button | Pretendard | 14px | 600 | 1.4 (19.6px) | 문의하기, 더 알아보기 |
| Demo Body | Pretendard | 14px | 400 | 1.57 (21.98px) | Demo copy, `#555555`, -0.5px |
| Pill | Pretendard | 12px | 500 | 1.17 (14px) | 회원가입 / 로그인 |

### Principles
- **One family, weight for hierarchy.** Pretendard from 300 to 700; the lightest weight is reserved for the largest headline.
- **Light hero, firm actions.** The 42px hero is weight 300 while every action label is 600.
- **Normal tracking on marketing.** Only the developer-portal hero (-1.5px) and demo copy (-0.5px) tighten.

## 4. Component Stylings

### Buttons

**Header Action (Primary)**
- `#222222` fill, `#ffffff` label, 4px radius, 10px padding, 98 × 42, 14px / 600
- Hover, pressed, focus: no change (probe); `transition: all 0s`
- Use: 문의하기 on every rtzr.ai page

**Primary Action (Large)**
- `#222222` fill, `#ffffff` label, 4px radius, 24px 40px padding, 69px tall, 18px / 600
- Hover, pressed, focus: no change (probe)
- Use: 리턴제로 STT 알아보기, 서비스 도입문의, 맞춤 요금제 문의

**Card Button**
- `#222222` fill, 4px radius, 10px padding, 98 × 42, 14px / 600
- The button does not change; its white card's border goes `#eeeeee` → `#cccccc` on hover and press (probe)
- Use: 더 알아보기, 읽어보기

**Secondary Action (White)**
- `#ffffff` fill, `#222222` label, 4px radius, 24px 40px padding, 69px tall, 18px / 600
- Hover, pressed, focus: no change on 바로 체험 and 상담신청; the plan-card buttons' hover and pressed were unmeasured
- Use: on dark grounds — the /stt hero, the `#222222` band and plan cards on /pricing

**Outline Action**
- Transparent, `#ffffff` label, 1px solid `#ffffff`, 4px radius, 24px 40px padding, 164 × 71
- Hover, pressed, focus: no change; `transition: opacity 0.5s ease`
- Use: 요금제 보기, 정확도 비교 over the /stt hero

**Record Button (developers.rtzr.ai)**
- `#3a89ff` fill, white label, 60px radius, 20px 40px padding, 167 × 58
- Hover and pressed: `#3174d9` (probe); focus: no change
- Use: 녹음시작 in the STT demo

**Account Pill (developers.rtzr.ai)**
- Transparent, white label, 1px solid `#eeeeee`, 30px radius, 9px 24px padding, 34px tall, 12px / 500
- Hover and pressed: faint dark tint, label and border `#222222` (read with the header solid, where the pill rests at `#555555`)
- Use: 회원가입, 로그인

**Portal Hero Actions (developers.rtzr.ai)**
- 사용문의: transparent, white label, 1px half-white border, 4px radius, 22px 40px padding, 144 × 67
- 무료로 체험하기: `#ffffff` fill, `#222222` label, same geometry
- Hover, pressed, focus: no change (probe)

### Tabs

**Demo Mode Tabs (developers.rtzr.ai)**
- Unselected `#999999`, 16px / 500; selected `#3a89ff`, 700, with a 2px `#3a89ff` underline
- Hover, pressed, focus: no change on 파일 업로드 (probe)
- Use: 실시간 녹음 / 파일 업로드 / 샘플파일

### Cards

**Feature Card**
- `#ffffff` with 1px solid `#eeeeee`; border `#cccccc` while its button is hovered
- Use: product and customer-story cards in the home carousels

---

**Verified:** 2026-09-30 (deterministic collector capture of rtzr.ai home, /stt and /pricing and developers.rtzr.ai, logged out, plus fixed keyboard-probe state reads on all four pages and first-party context)
**Tier 1 sources:** https://www.rtzr.ai/ ; https://www.rtzr.ai/stt ; https://www.rtzr.ai/pricing ; https://www.rtzr.ai/company ; https://developers.rtzr.ai/ ; https://blog.rtzr.ai/
**Tier 2 sources:** getdesign.md/returnzero (HTTP 200, "0 design.md files") and styles.refero.design/?q=returnzero (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Compact actions: 10px padding all round
- Large actions: 24px 40px on rtzr.ai; 22px 40px on the portal hero; 20px 40px on the record button
- Account pills: 9px 24px; portal navigation pills: 7px 10px

### Grid & Container
- A fixed white header across rtzr.ai with navigation groups and menu columns (News, Career, Blog, CI, 공고 / Pricing, Developers)
- Hero bands with a single headline and an action group, followed by horizontal card carousels on home
- /pricing: a dark hero, a row of plan cards, a charcoal consultation band

### Whitespace Philosophy
- **Restraint.** A light headline and one charcoal action carry the hero; colour is withheld from marketing entirely.
- **Carousels for breadth.** Products and customer stories scroll horizontally in white bordered cards.

### Border Radius Scale
- 4px — every rtzr.ai action and the portal hero actions
- 20px — portal navigation pills
- 30px — portal account pills
- 60px — record button

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | `box-shadow: none` | Every captured element |
| Hairline | 1px `#eeeeee` → `#cccccc` | Home cards (hover), account pills |
| Ground change | `#222222` bands and dark heroes | Consultation band, /pricing and portal heroes |

**Shadow Philosophy**: none of the recorded elements computes a shadow. Separation comes from hairlines and from switching the ground between white and charcoal.

## 7. Do's and Don'ts

### Do
- Fill primary actions with `#222222` and white labels at 4px corners
- Flip to `#ffffff` actions with `#222222` labels on dark grounds
- Use Pretendard only; weight 300 for the large hero, 600 for actions
- Keep `#3a89ff` to the developer-portal demo (record action, selected tab)
- Give cards a `#eeeeee` hairline that darkens to `#cccccc`

### Don't
- Introduce accent colours into marketing pages; none was observed
- Round marketing actions into pills
- Add shadows or button hover animations the site does not have
- Carry the portal blue into rtzr.ai marketing

## 8. Responsive Behavior

### Breakpoints
Only the 1440px desktop layout was captured; breakpoints were not measured and are not specified here.

### Touch Targets
- Large actions 67–71px tall; compact actions 42px; record button 58px; account pills 34px

### Collapsing Strategy
Not captured.

### Image Behavior
Hero photography sits behind white text and outline actions on /stt and the developer portal; nothing else about image behaviour was measured.

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action / nav / headline: `#222222`, label `#ffffff`
- Default text: `#000000`
- Card hairline: `#eeeeee` (hover `#cccccc`)
- Portal demo: `#3a89ff` (hover `#3174d9`), copy `#555555`, unselected `#999999`

### Example Component Prompts
- "Hero on white: a 42px Pretendard Light (300) headline in #222222 on a 54px line, then one #222222 button with a white 18px/600 label, 4px radius, 24px 40px padding, 69px tall. No shadow, no hover animation."
- "Dark band with a white action: #ffffff fill, #222222 18px/600 label, 4px radius, 24px 40px padding."
- "STT demo record button: #3a89ff fill, white label, 60px radius, 20px 40px padding, hover #3174d9; tabs in #999999 16px/500 with the selected one #3a89ff, 700, 2px underline."

### Iteration Guide
1. Charcoal `#222222` is the action colour; marketing stays monochrome
2. Pretendard only; light hero, semibold actions
3. 4px corners on marketing, pills only in the portal
4. No shadows, no button transitions
5. Blue belongs to the developer demo

---

## 10. Voice & Tone

Return Zero writes like an engineering company talking to businesses: short, factual, and number-led.

| Context | Tone |
|---|---|
| Company | Mission in one line — "We bring practical AI to the world" — then proof in numbers (창업연도 2018, 1,500만 시간+, 100만명+) |
| Actions | Direct verbs: 문의하기, 바로 체험, 요금제 보기, 정확도 비교, 서비스 도입문의 |
| Pricing | Deployment-first choices: 클라우드 도입 문의, 설치형 도입 문의, 맞춤 요금제 문의 |
| Developer portal | Try-first: 무료로 체험하기, 녹음시작 |

**Voice samples (verbatim, opened 2026-09-30):**
- "리턴제로는 실용주의 AI 스타트업 입니다" — rtzr.ai/company
- "최신 AI 기술을 실험실에서 세상으로 가져옵니다" — rtzr.ai/company
- "기업을 위한 음성 AI - 리턴제로 blog" — blog.rtzr.ai title
- "음성인식 API (STT API) - RTZR STT" — developers.rtzr.ai title

**Forbidden register**: hype without numbers, playful consumer tone on business pages, colour-driven urgency.

## 11. Brand Narrative

Return Zero's company page frames its purpose as bringing research-grade AI out of the lab: "최신 AI 기술을 실험실에서 세상으로 가져옵니다. AI가 바꾸는 미래를 앞당깁니다." Founded in 2018, it reports 15 million-plus hours of speech transcribed and a million-plus users across its services. Its leadership comes from Kakao and 로티플: co-CEO 이참솔 (Kakao AD, co-founder of 로티플, acquired by Kakao), co-CEO and CTO 정주영 (KakaoTalk PC and messaging teams, 로티플 CTO) and CPO 이현종 (KakaoTalk and Kakao taxi teams). The business spans the RTZR STT API, sold through rtzr.ai with cloud and on-premise plans and opened to developers through a free browser demo, and two products, CALLABO and VITO. Customer stories on the home page — finance among them — link to the company blog.

*(The reading that ties the monochrome site to this engineering-first positioning is editorial interpretation, not a Return Zero statement.)*

## 12. Principles

1. **Practical over flashy.** The company calls itself a practical-AI startup. *UI implication:* monochrome actions, no decorative colour or motion.
2. **Numbers carry the claim.** The company page leads with hours transcribed and users served. *UI implication:* let figures and plain headlines do the persuading.
3. **Try before you talk.** The developer portal puts a working demo on its front page. *UI implication:* keep the record action obvious — the one coloured control.
4. **One family.** Pretendard everywhere. *UI implication:* hierarchy by size and weight only.

## 13. Personas

*Fictional archetypes informed by Return Zero's public audiences (enterprise buyers, developers, product users), not real people.*

**김도윤, 41, 서울.** Contact-centre lead at a financial company evaluating speech recognition for an AICC rollout; reads customer stories, compares cloud and on-premise plans, then asks for a consultation.

**박서연, 29, 판교.** Backend developer who opens the developer portal, records a sentence in the demo and switches to file upload before signing up.

**이준호, 35, 서울.** Team manager looking for an AI meeting-notes product; arrives through the product navigation and wants a plain answer about price and accuracy.

## 14. States

Only these states were observed; nothing else is specified here.

| State | Observation |
|---|---|
| **No change** | 문의하기, 리턴제로 STT 알아보기, 서비스 도입문의, 맞춤 요금제 문의, 바로 체험, 상담신청, 요금제 보기, 정확도 비교, 사용문의, 무료로 체험하기 and the 파일 업로드 tab show no hover, pressed or focus change (probe). |
| **Card hover** | The white card around 더 알아보기 / 읽어보기: border `#eeeeee` → `#cccccc`. |
| **Record hover / pressed** | `#3a89ff` → `#3174d9`. |
| **Account pill hover / pressed** | Faint dark tint; label and border to `#222222`. |
| **Selected** | Demo tab 실시간 녹음: `#3a89ff`, weight 700, 2px underline. |
| **Unmeasured** | Hover and pressed on the /pricing plan-card buttons (바로 무료 체험, 클라우드 도입 문의). |

No authored focus style was observed on any probed control. Error, empty, loading and success states were not captured.

## 15. Motion & Easing

Every probed filled button computes `transition: all 0s` — state changes, where they exist, are instant. The /stt outline pair (요금제 보기, 정확도 비교) computes `transition: opacity 0.5s ease`. Carousel and scroll motion were not measured; treat them as unspecified and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/returnzero.json (capturedAt 2026-09-30T09:57:39Z), deterministic collector, 1440x900, logged out: rtzr.ai, /stt, /pricing, developers.rtzr.ai. States: fixed keyboard probe raws docs/research/2026-09-29-growth/raw/returnzero-states-{home,stt,pricing,developers}.json (configs returnzero-cfg-*.json).
- §1, §10, §11 context: rtzr.ai/company, blog.rtzr.ai, developers.rtzr.ai, opened 2026-09-30.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->
