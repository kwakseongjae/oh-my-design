# Devsisters migration log

Source: `web/references/devsisters/DESIGN.md`
Destination: `docs/design-md-weight/migrated/devsisters/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/devsisters/provenance.md`
Date: 2026-08-26
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v8**
Portable Core: `scripts/design-md-core.cjs` reports `level: portable-core`, `structurally_valid: true`, `portable_core: true`, `reasons: []`, all thirteen checks pass. Two earlier SHA-256 records are withdrawn — the migrating session's `12d243ed399afc522434887ac6acd387945da9208b2ccdebc5bb67578d734876` (the F3 audit edited limiter sentences) and the post-audit `c1e4f46fe6c3ab4795af882ece8bbaaa52f37f5ed752d99c1e0ce6206075beaf` (the wave-20 semantic revision edited limiter and boundary sentences). Current DESIGN.md SHA-256 is `644578ef01e8bf5693afe0e699260453ed3a5f80e797ca5a0fc4f40b3db3c5b6`.
Gate: `node migrate-reference.mjs --brand devsisters --gate-only` → `PASS`, `problems: []`, re-run on the post-revision bytes.
F3: F1 and F2 below were performed by the migrating session. A separate-session audit (B2·B2a and E1·E2·E2a–c only, rulebook v9) was run afterwards and is recorded in `audit-log.md`; the rows and the F1/F2 paragraphs below carry that audit's corrections **except** its fix 4 (§15 character notes), which a later semantic review reversed. `audit-log.md` is left as that session's own sealed record; what this ledger and the body now hold is stated in 「개정 (웨이브 20 의미 검토 반영)」 at the end of this file.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance Identity; `homepage` 옮김 → Experience Scope; `primary_color` 옮김 → Foundations Semantic color; `logo` slug 옮김 → Typography & Assets | Portable file has no frontmatter. Name kept as H1 `Devsisters Design System`. Homepage `https://www.devsisters.com` is dual-destination: Experience Scope + provenance Identity (E2a). `#FF5F00` is dual-destination: provenance Identity + Foundations Brand Orange (named there as catalog `primary_color`); grep places the same hex at twelve points in DESIGN.md: the Scope atmosphere paragraph, Distinctive traits, Capture-bound application, Foundations Semantic color, the §14 capture record (network-failure retry text; form-success accent and checkmark — two hits on one row), Orange Primary Background, Top Nav Background, Mobile Nav Drawer Background, the Tag Badge active fill, and Layout full-bleed chrome (E2a). The `logo` favicon slug `https://www.google.com/s2/favicons?domain=devsisters.com&sz=256` is dual-destination: provenance Identity + portable Assets, where it is recorded as a third-party favicon proxy URL held as catalog identity metadata rather than a first-party distributed brand asset. |
| YAML `omd`, `verified`, `tokens.source`, `tokens.extracted`, `components_harvested` | 분리 → provenance Identity/Freshness; `verified`·`tokens.source`·`tokens.extracted`·`components_harvested` 옮김 → Experience Scope | 출처 원장·freshness (E1). `prose-derived` (A1c), `tokens.extracted` 2026-06-09, and catalog `verified` 2026-06-03 are dual-destination: provenance + Scope, where the portable body states that the values are source-stated readings rather than a published Devsisters UI specification. `components_harvested: true` is named in Scope as the source's own flag, not a per-value capture record. |
| YAML `tokens.colors` (8 hexes) | 옮김 → Foundations Semantic color | 여덟 색 전부 역할과 함께 보존. `#FF8200` (nav hover/active tint), `#F8E8DA` (accordion/expanded nav), `#DCDCDC`, `#666666` are DESIGN.md-only destinations; grep shows no provenance copy of those four. Role, pairing-reason, and application readings sit under one adjacent complete B2a (B2/B2a). |
| YAML `tokens.typography` (`family.sans` / `family.mono`, `h1` / `h2` / `h3` / `body` / `label`) | 옮김 → Typography & Assets font-evidence table, Family, Type roles; 충돌 분리 → provenance Freshness | Sizes carried unitless as the source records them (32 / 24 / 18 / 16 / 14) with §3's prose figures (`32 px`, `24 px`, `18 px`, `14 px`, `16 px`) quoted alongside. Unitless `lineHeight: 1.5` preserved as the ratio `1.5` in the Type roles table (A1a). `family.sans: Pretendard` + `family.mono: Pretendard` vs §3's `azo-sans-web` display face: both figures kept, not merged, in the font-evidence table and in provenance Freshness conflicts (A4, E2a). |
| YAML `tokens.spacing` (`sm` 5.5, `md` 12, `base` 16, `lg` 20, `xl` 24) | 옮김 → Foundations Spacing | Unitless scale kept as recorded, with the body's `5.5px 12px`, `12px 24px`, `0px 20px`, `52px 80px` occurrences named in the same paragraph. |
| YAML `tokens.rounded` (`sm` 8, `md` 20, `lg` 36, `full` 9999) | 옮김 → Foundations Shape | Unitless scale kept as recorded (`9999` is written without a unit because the source records it unitless). Standard card `radius: 8` vs feature card `radius: 20` kept on both sides and also logged in provenance Freshness conflicts (A4, E2a). |
| YAML `tokens.components` (`button-primary`, `button-secondary`, `nav`, `card`, `feature-card`, `badge`) | 옮김 → Components & States | 검증된 primitive type 보존 (A1b): `Type: button` ×2, `Type: tab` ×1 (Top Nav), `Type: card` ×2, `Type: badge` ×1. `Kind: interactive`로 뭉개지 않음. |
| H1 `# Devsisters` + tagline | 옮김 → H1 + Experience Scope | H1 is `Devsisters Design System`; the tagline sentence ("building joyful, globally loved play experiences since 2007") is quoted in Scope. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience Scope (atmosphere 문단), Distinctive traits | 전문 보존. 20 px / 36 px, `azo-sans-web` 800–900, `Pretendard` 500–700 유지. 해석 문단(“confident entertainer”, “playful softness”, “reads as global without feeling generic”)에는 인접 완전 B2a를 붙였다 (B2/B2a). |
| §2 Color Palette & Roles | 옮김 → Foundations Semantic color | 여덟 항목의 hex·역할·용례 보존. 역할/대비 이유/적용 독해에 인접 완전 B2a (B2/B2a). |
| §3 Typography Rules | 옮김 → Typography & Assets (font evidence, Family, Type roles) | `azo-sans-web` + `Dotum,돋움,굴림,arial` fallback, `Pretendard` 500/600/700, nine-step `@font-face`, base 16 px / label 14 px, heading scale, `text-transform: uppercase`, `0.01em`, `letter-spacing: -0.56px`, no-italic 기록 전부 보존. `Dotum,돋움,굴림,arial` is dual-destination: portable Family/font-evidence + provenance claim ledger and Proof notes, byte-for-byte (E2a). Fallback을 브랜드 페이스로 표시하지 않음. |
| §4 Component Stylings (Primary CTA Button, Navigation Bar, Content Card, Tag Badge) | 옮김 → Components & States; CSS 클래스 포인터 분리 → provenance Capture selectors | 7개 변형 전부 보존: Orange Primary, Black Secondary, Top Nav, Mobile Nav Drawer, Standard Card, News/Feature Card, Accent Tag + Active State Tag. `css-1d80czy` / `css-w3127n` / `css-15afoiw` / `css-1wp6ena` / `css-136jai7` / `css-1v6f5oy` / `css-1vxk175` are provenance-only destinations (grep: 0 hits in DESIGN.md). |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance Freshness·Sources; Tier 1 URL 옮김 → Experience Scope | freshness·원장 (E1). 네 Tier 1 URL은 dual-destination: provenance Sources + Scope의 대상 표면 집합; `/resource`는 Assets에도 (E2a). Tier 2 두 항목(getdesign.md 0 files NOT LISTED, refero no result)은 provenance만. Conflicts unresolved: none. |
| §5 Layout Principles | 옮김 → Layout & Platforms; overlay gradient 옮김 → Foundations Elevation | Full-bleed chrome 48 px, card grid 20px + gradient, max-width centred + `52px 80px`, section rhythm `~11–22 vw`, sticky nav `z-index: 2` 보존. Overlay gradient `rgba(0,0,0,0.6)→rgba(0,0,0,0)` appears in Layout and in full form (`0%` / `60%` stops, `opacity: 0.5`) in Foundations Elevation and on the News/Feature Card. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation; hover lift 옮김 → Standard Card; drawer translate 옮김 → Mobile Nav Drawer | `transition: transform 0.3s ease-out, box-shadow 0.3s ease-out`, `linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 60%)` at `opacity: 0.5`, `translate(100%, 0)` → `translate(0, 0)` 보존. “depth conveyed through colour contrast and border radius rather than shadows” 독해에 인접 완전 B2a (B2/B2a). |
| §7 Do's | 옮김 → Experience Principles (Capture-bound application) | 여섯 항목 보존. Governance 통제 문구에 넣지 않음. 목록 머리에 인접 완전 B2a (B2/B2a). |
| §7 Don'ts | 옮김 → Experience Avoid | 여섯 항목 보존. 목록 머리에 인접 완전 B2a (B2/B2a). |
| §8 Responsive Behavior | 옮김 → Layout & Platforms breakpoint 표 | `< 720 px` / `≥ 720 px` / `≥ 1024 px` / `≥ 1280 px`, `3.6vw` / `3.3vw`, `w=3840` srcset, 48 px button height at all breakpoints 보존. 측정치를 보편 규격으로 읽지 않는다는 한정에 인접 완전 B2a (B2/B2a). |
| §9 Agent Prompt Guide | mixed: 도구용 프롬프트 골격 삭제; 고유 값 옮김 → Foundations Motion / Experience Avoid | “When generating Devsisters-style UI:” 포장과 도구용 지시 형식은 삭제 — 색·버튼·배지·카드·폰트 수치는 이미 Foundations/Typography/Components에 있다. 이 절에만 있던 고유 값은 옮겼다 (A3): `color 0.2s linear, background 0.2s linear` on interactive elements → Foundations Motion easing 표의 `linear` 행 및 두 버튼의 hover 사유; “Avoid gradients, shadows, or pastel tones — keep the palette disciplined to the five core swatches” → Experience Avoid. `0.8s cubic-bezier(0.075, 0.82, 0.165, 1)` content reveal은 §15·§12·§14와 같은 값이라 Foundations Motion에서 만난다. 슬롯 없는 위임 없음. |
| §10 Voice & Tone | 옮김 → Content & Locales | Register(energetic, global, warm-direct), 세 형용사(Joyful · Brave · Essential), Do/Don't 4행 표, `*Illustrative:*` 표시가 붙은 세 샘플 문장 전부 보존. 한국어 문자열 `"세상을 즐겁게"`와 `"세상을 즐겁게. 더 넓은 곳에서, 더 많은 사람들에게, 더 오랜 시간 동안."`은 바이트 그대로; 앞의 것은 dual-destination(Content Do 열 + provenance Proof notes), 뒤의 것도 dual (E2a). 샘플에는 원본의 `Illustrative` 표시를 유지하고 관측된 제품 카피가 아니라는 문장을 인접에 두었다. 표를 이 표면들의 voice 계약으로 읽는 판단에는 인접 완전 B2a (B2/B2a). |
| §11 Brand Narrative | 옮김 → Experience Scope (history 문단) + Principles (세 pillar) + Content & Locales (mission line); 서사 원장 분리 → provenance Narrative | Dual destination for every listed value (E2a): 2007 Seoul, Cookie Run: OvenBreak, Cookie Run: Kingdom, Apple App Store top-10 US, 300 million cumulative users, four global offices, three development studios, Devsisters Ventures, animation/licensing/PC/console/VR, mission line, “Brave Journey”, three pillars. mission line은 삼중 목적지 — Scope history 문단 + Content & Locales + provenance Narrative (E2a). 증거 class는 F3 감사에서 문단 안에서 갈랐다: 연도·수량·인용 mission·"Brave Journey" 명칭은 브랜드 발행 about-page 자료로 한정 없이 두고, 평가적 서술(“one of Korea's most recognised game IP creators”, “breakout moment”, “a series of courageous bets”)에는 인접 완전 B2a를 붙였다 (B2/B2a). 마지막 문장(“These pillars surface visibly in UI decisions …”)은 파생 해석이므로 Principles의 파생 한정 아래로 옮겼다 (B2/B2a). |
| §12 Principles | 옮김 → Experience Principles | 다섯 항목 이름과 각 *UI implication* 보존. 1–3의 한 줄 설명은 §12 문구(“strip away convention …”, “act with courage and intensity …”, “create experiences that resonate emotionally …”)가 아니라 같은 뜻을 담은 §11 괄호 문구로 실려 있다 — 중복 글로스 중 하나만 남긴 것이며, §12 쪽 문구는 산출물에 없다 (grep 0). 4–5는 §12 문구 그대로. 원본 §11이 회사 pillar로 기록한 1–3(Focus on Core / Run Brave / Touch Hearts)은 브랜드 발행으로 표기하고, §11에 없는 4–5(Global by Default / Earned Simplicity)와 모든 *UI implication*, 그리고 pillar가 UI에 드러난다는 독해는 인접 완전 B2a 아래에 두었다 (B2/B2a). Principle 4의 이중언어 조판·한국어 문자열 확장 지시는 Content & Locales locale behavior에도 있다 (E2a). |
| §13 Personas | mixed: 배제 경계 옮김 → Experience Audience; archetype 이름·연령대·biography·Needs 삭제; sidecar 재수록 없음 | 원본이 각 항목을 `*Illustrative persona — not based on proprietary user research:*`로 표시. portable Audience는 그 배제 경계와 §11의 그룹 수치(300 million cumulative users)만 남기고, 네 archetype 라벨·연령대·직업·Needs는 삭제했다. provenance에도 demographic을 재수록하지 않았다 (D2). Primary tasks 3건은 §13이 아니라 Tier 1 표면 집합과 §5 card grid에서 나온다. |
| §14 States | 옮김 → Components & States capture record + per-component applicability | 일곱 행 전부 본문 보존 (Empty, Loading, Error — network failure, Error — 404/Not Found, Success, Skeleton loading, Disabled) — `#DCDCDC` 테두리, `#666666` 라벨, `opacity 0.8s cubic-bezier(0.075, 0.82, 0.165, 1)`, Next.js blur placeholder, `#FF5F00` retry 텍스트, `#F3F3F3` skeleton, `opacity: 0.4` + `cursor: not-allowed` 포함 (A2). `#F3F3F3`는 DESIGN.md 단일 목적지(grep: provenance 0). `not captured`/`not named`를 `not-applicable` 사유로 쓰지 않았고 (C1), state coverage 완료를 주장하지 않았다 (C3). graph 위임 없음. capture record 머리 문장에서 「catalog graph 미채택」이라는 이관 조건 표현은 뺐다 — standalone 독자가 알 수 없는 우리 개념이라 E1이 본문에 남기라는 권위·증거 종류·경계 한정에 해당하지 않는다; 보존 사유는 이 행과 provenance Proof notes에 있다. |
| §14 → 컴포넌트별 applicability | 신규 표 (Core §4.4) | Orange Primary / Black Secondary / Top Nav 세 컴포넌트만 map을 선언한다. 각각 default·hover·focus-visible applicable, Orange/Black은 disabled applicable(§14의 버튼 disabled 기록). loading·error·success는 페이지 수준 상태(network failure / 404 / form success)에 묶지 않고 필드 경계에서 생략 (C2). Top Nav는 상호작용 단위가 bar인지 link인지 원본이 확정하지 않아 disabled까지 생략. Mobile Nav Drawer / Standard Card / News/Feature Card / Tag Badge는 interactive-kind 근거가 없어 `Kind`와 map을 생략 (C4). 원본에 `focus-visible`이 없으므로 그 행에는 어떤 treatment 값도 넣지 않았다 (B1). |
| §15 Motion & Easing | 옮김 → Foundations Motion; 유지 근거 분리 → provenance | Duration 6단(`0.2s` / `0.3s` / `0.4–0.5s` / `0.6s` / `0.8s` / `1.0–1.2s`), easing 6종(`linear`, `ease-out`, 네 개의 `cubic-bezier`), 세 rule, reduced-motion 지시 전부 보존. 네 `cubic-bezier` 값은 삭제하지 않았다. 그 유지 근거(legacy spec 템플릿 커브 계열이 아니라는 판정, 승인된 삭제 범위)는 이관 사정이므로 provenance 「Motion curves — retained, with the evidence boundary」에만 두고 본문에서는 뺐다 — standalone 독자가 알 수 없는 개념이라 E1이 본문 잔류를 허용하는 권위·증거 종류·경계 한정이 아니다. 본문에는 증거 class(`prose-derived`)와 Tier 1 귀속만 남는다. 네 값은 dual-destination — Foundations Motion + provenance (E2a). 커브 성격 주석(`easeOutCirc feel; overshoots slightly, settles softly` 등)은 §15 원문 괄호이며 본문이 그렇게 귀속하지만, B2a의 기준은 발행 주체이지 집필 세션이 아니다 — Devsisters가 커브의 feel을 발행한 적이 없으므로 인접 완전 B2a 아래에 둔다. F3 감사가 이 한정을 떼고 성격 주석을 CSS 관측 커브 값과 같은 증거 class로 올린 절은 개정에서 철회했다 (B2/B2a). §15 세 rule 중 첫 rule(layout-affecting 속성 금지 + linear는 기계적이라는 독해)도 처방·평가 문장이라 같은 한정 아래 두었다; 나머지 둘(entrance trigger, reduced-motion 지시)은 한정 없이 남는다. Foundations Motion 말미의 promotion gate는 다섯 증거 종류(transition properties · animation name · duration · easing · reduced-motion behavior)와 「컴포넌트별 computed 관측 후에만」 게이트를 전문으로 담고 있으며, 단일 커브/duration 확인이 그 게이트가 아니라고 명시한다 (B3); 그 게이트의 존재는 Named gaps에도 있다 (E2a). |

## F1 / F2 (v8 mandatory final passes)

**F1 — B2a 스캔 (DESIGN.md 전문 재독; F3 감사 + 웨이브 20 개정 반영).** 인접 완전 한정(`derived editorial implementation inference from the verified surfaces` / `not Devsisters-authored or a separately published UI specification`)을 붙인 자리: Scope atmosphere 문단; Scope §11 평가적 서술(most-recognised-IP-creator / “breakout moment” / courageous-bets); Audience restriction 독해와 corporate-site-readers 독해; Distinctive traits 목록; Principles 4–5 + 모든 *UI implication* + pillar-surface-in-UI 독해; Capture-bound application 목록; Avoid 목록; Semantic color 역할/대비/적용 독해; Shape radius-vocabulary 독해; Elevation no-shadow 독해; Font evidence-class 적용 독해; Family font-use boundary; Assets catalog-logo boundary 독해; Motion easing character 주석; Motion 첫 rule(layout-animation 처방); Components applicability 주석·kind 생략 문단·세 state map; Layout source-measurements 독해; Content copy-pattern-table 독해; Content locale-behavior 지시. (본문 grep 기준 이 한정 문구는 19회 등장하고, 위 자리도 19곳이다 — DESIGN.md 13·15·28·32·49·61·72·88·107·115·130·141·155·169·188·211·342·356·364행.)

한정 없이 남긴 문장과 그 근거 class(재구성 경계 면제가 아니다): Tier 1 표면 집합과 `prose-derived`·`verified` 경계(카탈로그 메타데이터·원본 진술); §11의 연도·수량 사실, 인용 mission line, "Brave Journey" 명칭, 세 pillar(브랜드 발행 about-page 자료로 라벨링); Primary tasks(Tier 1 표면 집합과 §5 card grid에서 바로 읽히는 표면 관측 결과 — 승인된 골든 샘플과 같은 처리); hex·spacing·radius·type·component·breakpoint·§14 수치(원본 진술); §15 duration 표·easing 토큰 이름/용도(원본 진술); §15 entrance trigger·reduced-motion rule(원본 진술); B3 promotion gate·C1/C2/C3/C4 생략 문장·B1 주석(규격 절차); Governance 통제 문구; Named gaps 목록. 이 F1은 한정 없는 문장이 하나도 남지 않았다고 주장하지 않는다.

**F2 — E2 대조 (grep, 기억 아님; F3 감사에서 재실행, 웨이브 20 개정에서 전수 재실측).** `#FF5F00` → DESIGN.md 12회(Scope atmosphere, Distinctive, Capture-bound application, Foundations Brand Orange with `primary_color` 명기, §14 retry 1회 + §14 form-success 2회, Orange Primary Background, Top Nav Background, Mobile Nav Drawer Background, Tag Badge active, Layout full-bleed chrome) + provenance 2회(Identity, dual-destination 항목). 이관본이 적었던 11회와 Avoid 문맥 귀속은 F3 감사에서 정정했다 — Avoid 목록에는 이 hex가 없다. `#FF8200` → DESIGN.md 3회(Semantic color, Top Nav hover 행, observed active 문장), provenance 0 — 단일 목적지로 기록. `#FFCE00` → DESIGN.md 5회, provenance 0. `#F8E8DA` / `#DCDCDC` / `#666666` / `#F3F3F3` → DESIGN.md만. `cubic-bezier(0.075, 0.82, 0.165, 1)` → DESIGN.md 3회(Principles UI implication, Motion 표, §14 Loading 행) + provenance 1회. 나머지 세 커브 → DESIGN.md 1회 + provenance 1회씩. `0.56px` → DESIGN.md Type roles 1회 + provenance Proof notes 1회. `Dotum,돋움,굴림,arial` → DESIGN.md 4회 + provenance 2회. `세상을 즐겁게` → DESIGN.md 2회(351행 Do 열의 짧은 문자열, 362행 Illustrative 샘플의 긴 문장) + provenance 2회(137행 한 줄에 짧은 문자열·긴 문장 각 1회) — 부분문자열 grep이라 두 파일 모두 2회로 잡힌다. `Brave Journey` → DESIGN.md 3회(15행 증거-class 리드인, 15행 서사 본문, 22행 Primary tasks) + provenance 3회(77·89·140행). 이관본이 적었던 2회는 F3 감사 fix 2가 리드인에 명칭을 추가하며 밀린 값이라 이번 개정에서 실측으로 정정했다. `300 million` → DESIGN.md 3회(15행 리드인, 15행 서사 본문, 28행 Audience) + provenance 2회(73·111행) — 같은 사유로 2회에서 정정. `css-1d80czy` / `css-1vxk175` → provenance 1회, DESIGN.md 0회. `w=3840` / `3.6vw` / `9999` / `prefers-reduced-motion` → DESIGN.md만. `Devsisters Ventures` → DESIGN.md 1회 + provenance 1회. `We Create a Joyful World` → DESIGN.md 2회(Scope history, Content & Locales) + provenance 1회(Narrative) — 삼중 목적지 (E2a). `2026-06-03` → DESIGN.md 1회(Scope) + provenance 2회(Identity 표 아래 dual 항목, Freshness 표) — 이중 목적지 (E2a). §12의 1–3 글로스(`strip away convention` / `act with courage and intensity` / `resonate emotionally`) → DESIGN.md 0회, provenance 0회: 같은 뜻의 §11 괄호 문구가 그 자리를 차지한다.

준수 주장 확인: 「B3 유지」는 Foundations Motion의 promotion gate 문단이 다섯 증거 종류를 이름으로 전부 열거하고 「until a later pass has recorded computed evidence of all five kinds per component」와 「Official documentation of a single curve or a single duration is not that gate」를 실제로 담고 있어서 적었다 (E2c). 「C1 준수」는 본문에 `not captured`/`not named`가 `not-applicable` 사유로 등장하지 않음을 grep으로 확인한 뒤 적었다. 「C4 적용」은 네 컴포넌트가 실제로 `Kind: omitted` 문장을 담고 있음을 확인한 뒤 적었다. 이 F2는 위 grep 범위를 넘어 준수가 본문과 일치한다고 주장하지 않는다.

## 규칙집 버전 기록 (2026-08-26, 오케스트레이터)

이 이관은 **v8** 규칙집으로 수행됐다(위 기록 그대로가 사실이다). 작업 중 규칙집이
**v9**로 올라가며 A5(브랜드 발행 문자열 바이트 보존)와 게이트 `copy-loss` 검사가
신설됐다. 소급 재검증 결과 이 산출물은 A5 위반 **0건**이며, 정착 빌드
(`migrate-reference.mjs` SHA `3170bb7e…`, 자체테스트 10/10)에서 게이트 PASS다.
v8 표기를 v9로 고쳐 쓰지 않는다 — 어느 규칙집으로 만들었는지와 어느 규칙집으로
검증했는지는 다른 사실이고, 원장은 둘 다 보여야 한다.

## 개정 (웨이브 20 의미 검토 반영, 2026-08-26)

의미 검토가 확정 FAIL 2건을 냈고, 그중 1건은 **F3 감사자의 수정이 틀렸다**는 판정이었다.
값·컴포넌트 표·상태 applicability·섹션 구조·원본은 건드리지 않았다. 처리:

1. **B2/B2a — F3 감사 fix 4를 철회했다** (`DESIGN.md` Foundations Motion).
   감사자는 「§15 원문 괄호이므로 파생이 아니다」라고 보고 인접 B2a 한정을 떼고
   「share the evidence class of the curve values they annotate」를 붙였다. B2a의 기준은
   **집필 세션이 아니라 발행 주체**다 — 이 카탈로그의 레퍼런스는 전부 근거 기반
   재구성이므로 §1 atmosphere·§2 역할 독해·§7 Do/Don't 도 전부 원본 문장이면서 한정을
   받는다. Devsisters는 커브의 feel(`easeOutCirc feel; overshoots slightly, settles softly`
   등)을 발행한 적이 없다. 같은 감사가 fix 2에서 §11의 평가적 서술에는 B2a를 **추가**한
   것과도 모순이다. 마지막 절은 feel 주석을 CSS 관측 커브 값과 같은 증거 class로
   **승격**시켜 이관본보다 나쁜 상태였다. → 표 3열 값과 「§15 원문 괄호」 출처 귀속은
   유지, 승격 절은 삭제, 인접 완전 B2a 복원. `provenance.md`의 대응 항목(claim ledger
   파생 행, 파생 인벤토리, 「Not derived」 항목, 무한정 목록)과 `migration-log.md`
   §15 행·F1 두 문단도 함께 되돌렸다.
2. **B2a 동일 계열 1건 추가** — `DESIGN.md` Foundations Motion 첫 motion rule
   (`Never animate layout-affecting properties … linear layout animation reads as
   mechanical`). §7 Don'ts와 같은 처방·평가 문장인데 무한정이었다. 리드인을
   「Source-stated motion rules.」 + 첫 rule 지목 인접 완전 B2a로 바꿨다. 나머지 두
   rule(entrance trigger, reduced-motion 지시)은 무한정으로 남는다.
3. **E1 — 이관 사정 본문 노출 제거** (`DESIGN.md` Foundations Motion).
   「none of them is one of the four curves carried by the legacy spec template」는
   「왜 커브를 지우지 않았는가」라는 이관 판단 근거이고, standalone 독자는 legacy spec
   template이 무엇인지 알 수 없다 — E1이 본문에 남기라는 권위·증거 종류·경계 한정
   어느 것도 아니다. 해당 절만 삭제하고 앞뒤(증거 class `prose-derived` + Tier 1 귀속)는
   유지했다. 전문은 `provenance.md` 「Motion curves — retained, with the evidence
   boundary」에 그대로 있다.
4. **E1 동일 계열 1건 추가** — `DESIGN.md` Components & States capture record 머리
   문장의 「preserved here while the catalog graph is not adopted」. A2의 이관 조건이
   본문에 노출된 자리라 절만 들어내지 않고 「The source state contract, preserved here
   in full:」으로 다시 썼다. 보존 사유는 §14 행과 provenance Proof notes에 있다.
5. **D1a는 손대지 않았다.** 검토자가 감사자의 지적(`Named gaps`의 `focus-visible`)을
   오탐으로 판정했다 — `focus-visible`은 B1·C1이 의미로 세우도록 요구하는 canonical
   state이고 본문에 applicable 행으로 이미 서 있다(값만 미해상).
6. **원장 포인터 전수 재검증(실측 grep).** 밀린 값 3건을 정정했다:
   `Brave Journey` DESIGN.md 2회 → **3회**(15행 리드인·15행 서사·22행 Primary tasks),
   `300 million` 2회 → **3회**(15행 리드인·15행 서사·28행 Audience) — 둘 다 F3 감사
   fix 2가 리드인에 명칭을 추가하며 밀렸다. `세상을 즐겁게` provenance 1회 → **2회**
   (137행 한 줄에 짧은 문자열·긴 문장 각 1회, 부분문자열 grep 기준). `provenance.md`의
   `spec/omd-v0.1.md` 커브 위치 포인터 `259–268` → **`266–269`**(실측). 나머지 포인터
   (`#FF5F00` 12/2, `#FF8200` 3/0, `#FFCE00` 5/0, `#F8E8DA`·`#DCDCDC`·`#666666`·`#F3F3F3`
   DESIGN.md 단일, 네 `cubic-bezier` 3/1·1/1·1/1·1/1, `0.56px` 1/1,
   `Dotum,돋움,굴림,arial` 4/2, `We Create a Joyful World` 2/1, `2026-06-03` 1/2,
   `Devsisters Ventures` 1/1, `css-*` 7종 provenance 1·DESIGN.md 0, §12 글로스 0/0)는
   실측과 일치했다. B2a 한정 문구는 17회/17곳 → **19회/19곳**(2·4번 추가분)으로
   DESIGN.md 13·15·28·32·49·61·72·88·107·115·130·141·155·169·188·211·342·356·364행이다.
7. **`audit-log.md`는 고치지 않았다.** 그 세션이 무엇을 했는지의 기록이므로 봉인해 두고,
   철회된 fix 4와 「E1 boundary left in place」·「D1a risk」 항목의 실제 귀결은 헤더 F3
   줄과 이 절이 가리킨다. v8 표기를 v9로 고쳐 쓰지 않는 것과 같은 이유다.

검증: `node migrate-reference.mjs --brand devsisters --gate-only` → `PASS`, `problems: []`
(오탐 없음, E3 회피 없음). `scripts/design-md-core.cjs` → `level: portable-core`,
`structurally_valid: true`, `portable_core: true`, `reasons: []`, 13/13 checks pass.
