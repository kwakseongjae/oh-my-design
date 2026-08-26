# Dr.Now (닥터나우) migration log

- Source: `web/references/drnow/DESIGN.md` (legacy, omd 0.1) — 수정하지 않음
- Destination: `docs/design-md-weight/migrated/drnow/DESIGN.md`
- Provenance: `docs/design-md-weight/migrated/drnow/provenance.md`
- 규칙집: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v9**
- 대응표: `docs/design-md-weight/2026-08-22-essence-verdict.md` / 제약: `docs/reviews/t1-2-essence-2026-08-23-rereview.md` 27–33행 / 의미 조건: `docs/reviews/t1-3-golden-2026-08-23-sol-review.md` §5
- 형태 모범: `docs/design-md-weight/golden-samples/musinsa/`
- 도메인: healthcare — 브랜드 서사·수치와 스타일시트 관측 사실을 본문에서 분리해 배치했다.

`provenance.md`의 `Claim ledger`는 모든 값의 원본 위치와 portable 목적지를 색인한다. 아래 표의 각 행은 **portable 목적지**와, 색인을 넘어 provenance가 값 자체를 보관하는 경우의 **추가 목적지**를 적는다(E2a).

## legacy 섹션별 처리

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance | Portable 파일에 frontmatter 없음. `name`은 H1 `# Dr.Now (닥터나우) Design System`으로 남는다(이중 목적지: provenance Identity 표 + DESIGN.md H1). `primary_color` `#FF8D00`은 provenance Identity 표와 DESIGN.md Foundations 양쪽에 있다. |
| YAML `logo.type: favicon` / `logo.slug` (google s2 favicons URL) | 분리 → provenance | 3rd-party favicon 서비스 URL이라 브랜드 자산으로 승격하지 않음. provenance Identity 표에 원문 URL 보관, DESIGN.md Assets에는 "카탈로그 logo 기록은 favicon-service URL이라 원장에 둔다"는 경계만. |
| YAML `verified`, `omd`, `tokens.source: prose-derived`, `tokens.extracted`, `components_harvested` | 분리 → provenance | freshness·증거 등급 원장. `prose-derived`라는 추출 성격은 DESIGN.md Scope와 Typography 증거 표에도 문장으로 남겼다(이중 목적지) — standalone 해석에 필요한 evidence class라서 sidecar 전용으로 밀지 않았다. |
| YAML `tokens.colors` (21색) | 옮김 → Foundations `Semantic color` | orange/neutral/accent 3표. `--P*` / `--G*` 라벨과 declared use 문자열 보존. |
| YAML `tokens.typography.family` (sans + mono 모두 Pretendard Variable) | 옮김 → Typography & Assets | mono 슬롯도 같은 패밀리임을 명시 — 별도 monospace 패밀리를 승격하지 않는다. |
| YAML `tokens.typography.h-32 … caption` (size/weight/**unitless** lineHeight/use) | 옮김 → Typography & Assets `Type roles` | A1a: 1.31 / 1.36 / 1.33 / 1.4 / 1.41 / 1.5 / 1.47을 비율 그대로 보존. §3의 px line-height와 **양쪽 다** 실었다(이중 형태). |
| YAML `tokens.spacing` / `rounded` / `shadow` | 옮김 → Foundations `Spacing` / `Shape` / `Elevation` | 값·이름 그대로. `full: 9999`는 "9999 (rendered as 99px)"로 두 표기 보존. |
| YAML `tokens.components` (`type: button` ×3, `badge` ×2, `card` ×2, `tab` ×1) | 옮김 → Components & States | A1b: primitive type을 컴포넌트마다 `Primitive type: button/badge/card/tab`으로 보존. `Kind: interactive` 하나로 뭉개지 않았다. |
| H1 태그라인 "Korea's #1 telemedicine platform — …" | 옮김 → Experience `Scope` | 출처 URL이 없는 카탈로그 서술이라는 증거 등급을 붙여 보존. 시장 지위 사실로 단정하지 않는다. |
| §1 Visual Theme & Atmosphere — 제품/표면 범위, 색·폰트·카드 기술 | 옮김 → Experience `Scope` + `Distinctive traits` | 두 표면(웹앱 Tailwind 번들 / 브랜드 CSS 랜딩·컴퍼니)을 분리해 명시. |
| §1 인과 해석 문장("clinical blue 대신 orange를 택했다", "sympathetic neighbor", "motion is purposefully gentle") | 삭제 | 값이 없는 파생 편집 해석. 같은 취지의 근거 있는 규칙이 이미 이관돼 있다: blue 제한은 Experience `Avoid`(§7 Don't 원문), warm-urgency는 Experience `Principles` 4번(§12-4, B2a 한정 부착), gentle motion은 Foundations `Motion`의 실제 duration·easing 값과 Principles 5번. |
| §1 "아플 땐 닥터나우" | 옮김 → Experience `Scope` + Content & Locales Do 열 | A5: 한국어 원문 그대로, 영문 설명은 옆에 병기. 두 목적지 모두. |
| §2 Color Palette & Roles (`--P100`–`--P900`, `--G10`–`--G900`, Accent & System) | 옮김 → Foundations `Semantic color` | role/value/declared-use 3열 유지. `#228BE6`은 informational 한정을 함께 보존. |
| §3 Typography Rules 본문(두 CSS 번들에 정의, `Pretendard Variable, Pretendard` + 한국어 fallback chain) | 옮김 → Typography & Assets `Font evidence` | 증거 등급 표로 재배치: official distributed asset / declared product-use / family string / fallback / type scale / live surface-use. |
| §3 Type Scale 표 (`-32b/sb` … `-12sb`, 32px/42px … 12px/18px) | 옮김 → Typography & Assets `Type scale` | 클래스 suffix와 weights available 열까지 보존. |
| §3 Rules (17/600 버튼, 15–16 body, 22–32 heading, 12–14 meta, antialiased, no italic) | 옮김 → Typography & Assets `Typography rules` | 그대로. |
| §4 Component Stylings (Brand Gradient CTA / Primary Solid / Primary Outline / Ghost·Disabled / Primary Tag / Gray Tag / Content Card / Section Background Card / Active·Default Nav Link) | 옮김 → Components & States | 원본 §4의 굵은 선언 10개를 포터블 컴포넌트 레코드 9개로. Active/Default Nav Link 두 선언은 원본 YAML과 같이 한 `nav-item`의 두 variant(`Navigation Item`)로 합쳐 유지. |
| §4 footer **Verified** / Tier 1 sources / Tier 2 sources | 분리 → provenance | freshness·출처 원장. Tier 2 두 건(getdesign.md NOT LISTED, refero no result)도 원문 문구대로. |
| §4 footer **Conflicts unresolved** (`#FF7501` vs `#FF8D00`, `.btn-now` gradient vs 웹앱 flat `#FD7E14`) | 옮김 → Governance `Recorded conflicts` + Foundations · 분리 → provenance `Conflicts` | 이중 목적지. 원본이 "two surface contexts maintained separately"로 해소한 방식까지 본문에 남겼다 — sidecar 전용으로 밀면 standalone 해석이 깨진다. |
| §5 Layout Principles (92% / 1050px / 1064px / 96–128px / 768px / 8px base / 2–3열 / 64px bar) | 옮김 → Layout & Platforms | 그대로. |
| §6 Depth & Elevation (Level 0–5 + inset) | 옮김 → Foundations `Elevation` | border 기반 분리라는 규칙과 6단계 값 모두. |
| §7 Do's | 옮김 → Experience `Capture-bound application` | 7개 규칙. Governance 통제 문구에는 넣지 않았다(T1-3 제약 3). |
| §7 Don'ts | 옮김 → Experience `Avoid` | 원본 Don't 6개 전부(6번째가 radius 스케일 4/6/8/12/16/32/99px 제약). Pretendard 대체 금지 1줄을 §3 근거와 합쳐 추가 → 본문 `Avoid`는 7줄. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms `Responsive behavior` | 768px/1064px, 96–128→48–64, 32–56px 축소, 8px vs 12px gap, 1050/1064 max-width. 데스크탑 캡처 규격이 아니라 원본이 선언한 breakpoint 값이라 그대로 둔다. |
| §9 Agent Prompt Guide — 복붙용 프롬프트 블록, 도구 지시문 | 삭제 | essence-verdict §3: 받을 슬롯 없는 도구별 명령·프롬프트·workflow는 위임이 아니라 삭제. |
| §9 한국어 fallback chain "Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic" | 옮김 → Typography & Assets `Font evidence` | A3: 원본에서 276행(§9)에만 있는 고유 값. grep 확인함(`Apple SD Gothic Neo` 1회, §9). 받을 슬롯이 있으므로 삭제 대상이 아니다. |
| §9 나머지(`#FF8D00`, `#FD7E14` 12px, surface 계층, `#1C1D1F`/`#71767A`/`#8D9297`, 200–300ms, 32/12/99px radius, 15–16/17/22–32 타입, `#228BE6` 제약) | 삭제 | 전부 §2·§3·§4·§6·§7·§15의 재진술. 각 값은 Foundations / Typography / Components에 이미 실려 있고 이 표의 해당 행이 목적지를 적는다. |
| §10 Voice & Tone — fingerprint(Warm, Accessible, Trustworthy), Do/Don't 5차원 표 | 옮김 → Content & Locales | "당신이 아픈 순간", "언제든지", "아플 땐 닥터나우" 한국어 원문 그대로(A5). |
| §10 voice 해석 문장("empathetic without being overly clinical", "plain Korean … at any hour") | 옮김 → Content & Locales, 한정 부착 | B2a 완전형을 인접에 붙였다: "That characterization, and the Do/Don't dimensions below, are a derived editorial implementation inference from the verified surfaces; they are not Dr.Now-authored or a separately published UI specification." — 아래 Do/Don't 표까지 한정 범위에 넣었다. |
| §10 Voice samples 3종 (`"늦은 밤에도, 주말에도 — 당신 곁에 있습니다."`, `"약 처방부터 배송까지, 집에서 끝내세요."`, `"병원까지의 거리가 걱정되지 않게."`) | 옮김 → Content & Locales `Illustrative samples` | A5로 바이트 그대로 + 원본 영문 괄호 병기 유지. B1: 원본이 붙인 "Illustrative, modeled on …" 라벨을 각 줄에 그대로 유지해 증거 등급을 승격하지 않는다. |
| §11 Brand Narrative — 2019 서울 창업, 의약품 배송 → 텔레메디신, 4M consultations / 5,500+ institutions / 8M+ downloads, 3-pillar mission | 옮김 → Experience `Scope` (서사 구획) · 분리 → provenance `Notes on evidence separation` | 이중 목적지. 원본에 URL이 없는 수치라 "source-recorded narrative, 출처 URL 없음"으로 울타리를 치고 스타일시트 관측 사실과 문단을 분리했다(healthcare 증거 등급). |
| §11 "늦은 밤에도, 주말에도" / "의료를 더욱 가깝게, 닥터나우" | 옮김 → Experience `Scope` | A5: 한국어 원문 유지, 원본의 영문 gloss를 옆에 병기. |
| §11 orange 선택 해석("not accidental", "refuses the clinical associations", "trusted friend") | 삭제 | 값이 없는 파생 편집 해석. 같은 취지의 근거 있는 규칙이 Experience `Avoid`(§7 Don't의 blue 금지)와 `Principles` 4번(§12-4 warm urgency, 한정 부착)에 남아 값 손실이 없다. |
| §12 Principles 5개 + UI implication | 옮김 → Experience `Principles` | B2a: 머리에 "These five items are a derived editorial implementation inference from the verified surfaces; they are not Dr.Now-authored or a separately published UI specification." 를 인접 배치. 3번의 `#3D4551`(G700), 4번의 `#D9480F` → `#F3463B` / `#FD7E14`, 5번의 skeleton shimmer 등 값도 함께 보존. |
| §13 Personas — 원본 스스로 "Illustrative — not derived from published Dr.Now research"라고 표시한 4인(이름·나이·직업·거주지·서사) | 삭제 | D2. 가상 페르소나는 승격도 provenance 재수록도 금지(T1-3 제약 5). provenance에 demographics를 남기지 않았다. |
| §13 안의 가상 CTA·기능 문자열 "마지막 처방 반복하기" | 삭제 | D2. 가상 페르소나의 *Design implication*에서 상정한 CTA이고, Tier 1(스타일시트·HTML) 어디에도 독립 근거가 없다. 이 행이 유일한 원장 기록이다. |
| §13 안의 "최저가 약국 찾기" | 삭제 | D2. 같은 illustrative 프레임 안에 있어 독립 검증된 기능명으로 승격할 근거가 없다. 이 행이 유일한 원장 기록이다. |
| §13 안의 specialty 예시 "소아과" | 삭제 | D2. 가상 페르소나 서사의 예시. 원본이 세운 것은 "browse by specialty"(§14 Empty)라는 일반 개념뿐이고 그건 Primary tasks에 남겼다. |
| §14 States 8개 (Empty / Loading×2 / Error×2 / Success / Skeleton / Disabled) | 옮김 → Components & States `State record` | A2: graph 0/440 동안 본문 보존. 한국어 UI 카피 4종("검색 결과가 없어요", "의사를 연결 중이에요", "연결이 끊겼어요. 다시 시도해 주세요", "진료가 완료되었어요") 바이트 그대로 + 영문 병기(A5). `#FA5252`, `#FD7E14`, `#FFF4E6`, `#F76707`, `#DFE1E2`, `#A9AEB1`, 1.5s/0.8s/300ms, 96px/16px 값 모두 보존. |
| §14 "green checkmark" | 옮김 → Components & States `State record` + Governance `unresolved` · 분리 → provenance `Omission ledger` | 초록 값이 원본 색 스케일에 없어 색만 미해상으로 남기고 인접 값으로 채우지 않았다(unknown = 최소 경계 생략). |
| §14 → 컴포넌트별 applicability | 옮김 → Components & States 각 컴포넌트 표 | C1: `not captured`/`not named`를 `not-applicable` 사유로 쓰지 않았다. C2: primitive 종류가 아니라 역할로 판정 — 액션 버튼 4종은 7상태 전부 applicable(§14가 이 버튼 계열에 loading·error·success·disabled를 실제로 배정한다), nav-item(`tab`)은 error/success만 의미상 not-applicable(목적지 선택이지 연산 결과 보고가 아님). C4: badge·card는 interactive 근거가 없어 `kind: non-interactive` + 사유만 두고 applicability map 자체를 생략했다. C3: 완료 주장 없음. |
| §15 Motion & Easing — duration 6단(100/200/300/500/1500/15000ms), easing 5종, motion rules 6종 | 옮김 → Foundations `Motion` | 값 전부 보존. 무출처 커브 삭제 대상 없음: 규격 예시 표(`spec/omd-v0.1.md` 259–268)의 `cubic-bezier(0.4, 0.0, 1, 1)`·spring은 원본에 등장하지 않고, 남은 두 커브는 각각 선언된 기본 enter easing과 named animation `screen-slide-in`에 붙어 있다. |
| §15 커브의 selector 귀속 | 옮김 → Foundations `Motion` 머리 문장 · 분리 → provenance `Omission ledger` | 원본이 커브별 selector를 적지 않았으므로 "컴포넌트별 computed transition properties · animation name · duration · easing · reduced-motion behavior를 관측한 뒤에만 per-component treatment를 승격한다"는 조건을 본문에 적었다. 원본에 B3형 승격 조건 원문이 따로 있는 것은 아니므로 "B3 원문 유지"라고 주장하지 않는다(E2c). |
| §15 reduced-motion | 옮김 → Foundations `Motion` 끝 + Governance `unresolved` · 분리 → provenance `Omission ledger` | 원본에 규칙이 없다. Core v2 §4.2가 motion 존재 시 요구하는 항목이라 값 없이 미해상으로만 명명했다. 이중 목적지. |

## Named gaps 미작성 (D1a)

원본이 존재를 세우지 않은 도메인(minimum supported width, 200% reflow, touch target, reading order, overflow policy, 다크 서피스, 인증 화면, 네이티브 앱 등)을 명사구 목록으로 열거하지 않았다. Governance의 `Recorded conflicts and unresolved decisions` 4항은 전부 원본이 스스로 세운 것이다 — 두 건은 §4 footer의 `Conflicts unresolved` 원문, 나머지 둘은 원본이 도메인을 세운 채(§15 motion / §14 checkmark) 값만 비운 자리다.

## 의무 최종 패스

- **F1 (B2a 스캔).** 본문 전체를 문장 단위로 재독하고 [브랜드 발행 사실 / 관측 기술 / 편집적 해석]으로 분류했다.
  - **완전한 B2a 한정("derived editorial implementation inference … not Dr.Now-authored or a separately published UI specification")을 인접에 붙인 자리 9곳** — grep으로 확인(DESIGN.md 11, 21, 30, 34, 44, 142, 232, 239, 420행): Scope의 "declared stylesheet values" 읽기, `Primary tasks` 머리(태스크 선정), `Audience`의 그룹 재진술, `Distinctive traits` 머리(다섯 항목 선정 + radius를 역할 배정으로 읽는 것), `Principles` 머리(승인 예문 형태), Foundations `Motion` 머리(시스템 레벨 선언 읽기 + 승격 조건), `Assets`의 catalog logo 처분, Components `How to read this section`(interactive-kind 판정 + applicability 판정과 사유 전부), Content & Locales의 voice 특성 규정 + Do/Don't 표. 이 목록은 provenance `Derived editorial inventory`와 같은 자리를 가리킨다.
  - **증거 등급 경계 문장 3곳**(B2a 한정과는 다른 종류라 따로 적는다): Scope의 서사 문단 앞(출처 URL 없는 카탈로그 서술이며 검증된 시장 지위·임상 사실이 아님, 13행), Content & Locales의 `Illustrative samples` 머리(원본이 붙인 illustrative 라벨을 그대로 들고 다님, 430행), Content & Locales 끝의 healthcare 경계(voice 계약은 register·tone까지이고 의학·효능·용량·안전 카피를 여기서 파생하지 않는다, 438행).
  - 1차 스캔에서 잡아 고친 것: `Distinctive traits`의 "Two radii in tension" 등 해석형 표현을 관측 기술로 되돌림, Assets의 부정 열거를 긍정 기술로 교체, nav-item `disabled` 사유가 §14 chip 근거를 잘못 빌려온 것을 역할 근거로 교체, Content 첫 문장의 "the type stack is chosen for it"(인과 주장) 제거.
  - 한정을 붙이지 않은 자리: 색표·타입 스케일·컴포넌트 값·§14 상태 값·레이아웃 수치 — 스타일시트 선언 사실의 기술이다.
- **F2 (E2 대조).** 위 각 행을 쓰기 전에 `web/references/drnow/DESIGN.md`와 산출 3파일을 grep으로 확인했다. 확인 사례: `Apple SD Gothic Neo`는 원본 276행(§9)에만 존재 → A3 이동으로 기록. `마지막 처방 반복하기`는 345행(§13)에만 존재 → 삭제로 기록(이 로그가 유일 기록). `#FF7501`은 218행(§4 footer)에만 존재 → Foundations·Governance·provenance 세 곳으로 갔음을 기록. 이중 목적지 행(identity/name, primary_color, prose-derived, conflicts, 서사, reduced-motion, 커브 귀속)은 목적지를 둘 다 적었다. 준수 주장은 본문에 실재하는 것만 적었고, B3는 원본에 해당 원문이 없어 "유지"라고 쓰지 않았다.

### E2/F2 정정 (2026-08-26, 오케스트레이터)

의미 검토가 §2 행의 `tokens.colors (23색)` 계수를 실측 불일치로 지적했다. 원본
`web/references/drnow/DESIGN.md`의 `colors:` 블록을 들여쓰기 기준으로 직접 세면
**21키**다(primary 7 + surface 3 + border/placeholder/meta/body/body-root/strong/heading/
canvas/info/yellow/error 11 = 21). `(23색)` → `(21색)`으로 교정했다.

F2 기록 보완: 이 행의 **괄호 계수만** 실측 grep을 거치지 않은 자리였다. 목적지와
disposition은 정확했고 값 손실은 없다 — 같은 감사에서 §4의 "9→10" 계수 오기가
교정됐는데 이 행이 같은 계열로 남아 있었다.
