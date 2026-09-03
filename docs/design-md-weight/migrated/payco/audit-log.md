# PAYCO 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/payco/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/payco/DESIGN.md`
검증 sibling: `web/references/payco/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not PAYCO-authored or a separately published UI specification`을 요구한다. 기존 23건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 23 / 원장 23. 숫자는 맞았으나 양쪽이 함께 좁았다. Semantic 표 뒤 `:97` 네비 `#191919`·고스트 `#191a1c` 비병합, Type roles 표 뒤 `:181` 크기 키 경로 비병합, Capture `:192` §14 보존(카탈로그 그래프 부재)은 세 번째 부류인데 인접 완전형이 없거나 그 읽기를 이름하지 않았다. `:78`·`:168`·`:203`은 표/목록 앞의 다른 읽기만 이름한다.

## 수정 목록 (18건)

### B2a — 인접 한정 (본문 3건, 발생 수 +3)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:97` — Semantic color 표 뒤 | 네비 `#191919`는 YAML color 키가 아니고, 고스트 §4 `#191a1c`는 YAML `button-ghost.fg` `#2d2d2d`와 다른 표기라는 비병합은 세 번째 부류. `:78`은 canvas/on-primary·primary/legacy·heading/body·`#666`/`#999`·`#f4f4f4`만 이름하고 표 뒤와는 인접하지 않다. | 같은 줄에 완전형 신설. 발생 수 +1. |
| 2 | `DESIGN.md:181` — Type roles 표 뒤 | `hero` 52 / `button-lg` 18 ≠ spacing, `section-sub` 32 ≠ `tokens.spacing.base`, `nav` 24 ≠ `subtext` 24, `button-md` 13 ≠ error body 13px, `input` 12 ≠ inline-error 12px는 세 번째 부류. `:168`은 비율·YAML use·§3 병기·body 16만 이름하고 표 앞이라 인접하지 않다. | 같은 줄에 완전형 신설. 발생 수 +1. |
| 3 | `DESIGN.md:192` — Capture record | 카탈로그 그래프가 없어 §14 본문을 보존하기는 세 번째 부류. `:203`은 kind/applicability/recipe이고 목록 뒤라 인접하지 않다. | 같은 줄에 완전형 신설. 발생 수 +1. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 26, `not PAYCO-authored` 26, `separately published UI specification` 26. 완전형 26. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 43, 53, 64, 78, 97, 113, 126, 130, 140, 155, 164, 168, 181, 185, 192, 203, 328, 345, 364, 398.

### E1 — provenance derived 범위 (4건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 4 | 헤더 / 행 수 | 23 complete / 23 data rows. | **26** / **26**. |
| 5 | Semantic `:97` 행 | 없음. 본문 `:97` 신설. | 행 신설. |
| 6 | Type roles `:181` 행 | 없음. 본문 `:181` 신설. | 행 신설. |
| 7 | Capture record `:192` 행 | 없음. 본문 `:192` 신설. | 행 신설. |

헤더 / 데이터 행 **23 → 26** at 141–166 (E1 1:1).

### E2 / E2a — 로그 목적지 (11건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다. 2차 목적지 문자열은 DESIGN dest를 `grep -o | wc -l`로 확인했다. 본문 한정 추가 뒤 dest 표를 재실측했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 8 | YAML homepage `https://www.payco.com` | DESIGN dest **2** at 9/21. 실측 dest **3** (9 occ 2 — CSS bundle URL이 접두를 공유 + 21). | dest **3**. |
| 9 | `#FF2233` | DESIGN dest **12** / provenance dest **4**. 실측 DESIGN dest **14** (78 occ 3) / provenance dest **5** (40 occ 2). | dest **14** / **5**. |
| 10 | `prose-derived` | DESIGN dest **1** at 9. 실측 dest **2** (같은 줄 occ 2). | dest **2**. |
| 11 | `tokens.rounded.full: 9999` / Shape 범위 | dest **2** at 123/126. 실측 그 문자열 dest **1** at 126. 123은 `lg: 100`. Shape 데이터는 121–124. | `tokens.rounded.full` dest **2** at 124/126; exact `tokens.rounded.full: 9999` dest **1** at 126. Shape 121–124. |
| 12 | `1.27` | dest **1** at 177. 실측 dest **2** (같은 행 occ 2). | dest **2**. |
| 13 | YAML `use` Token-set use 줄 | 218/238/256/278/305/322. 실측 **217/240/260/282/306/325**. | 실측 줄. |
| 14 | loading/error/success 구간 + `error \| applicable` | Primary 226–228 / 244–246 / 261–263 / 285–287; Input 314–316; `error \| applicable` at 315. 실측 227–229 / 248–250 / 268–270 / 291–293; Input 315–317; dest **1** at **316**. | 실측 줄. |
| 15 | §9 `198×48px` | at 22/57. 실측 dest **3** at 22/59/219. | dest **3** at 22/59/219. |
| 16 | provenance 처분 줄 | §13 Disposition at 171; §9 check at 174. 원장에 inventory 3행을 넣은 뒤 실측 **176** / **177**. | 176 / 177. |
| 17 | F1 / inventory / `wc -w` | 23 complete · 23 data rows · 5,509 words. | **26** · inventory **141–166** · **5,650**. |
| 18 | `#191919` / `#191a1c` | 로그가 본문 병기만 적고 이중 목적지를 안 적음. 한정·원장 행 추가 후 DESIGN dest **3** / **3**, provenance dest **1** at 151 / dest **2** at 135/151. | 둘 다 적음 (E2a). |

A1 키 경로: 원본 YAML `tokens.components` 6레코드의 type/bg/fg/padding/font/radius/use가 대응 블록에 **행으로** 있다. 값만 다른 블록에 있는 icook형은 없음. 복원 없음.

E2c: B3 전문 `DESIGN.md` 142 (`computed transition properties, animation name, duration, easing, and reduced-motion behavior` dest 1). Principles 형태 `:43` dest 1. 준수 주장 유지.

E2d: 부재 단언 행 전수 검사. 삭제 처분 행이 드롭 문자열을 재수록한 채 「세 파일에 없다」고 단언하지 않음. Omission ledger는 mention(처분)과 use(재수록)를 문장에 갈라 적는다. sibling 전용 값의 DESIGN dest 0은 DESIGN을 분모로 적었고, 그 문자열이 있는 로그/원장을 「세 파일 0」으로 읽지 않음.

D2a 삭제 처분 행: 이름·나이·도시를 Item에 옮기지 않음(필드 종류만). 본문에서 식별자·동기(`under two taps` / `mid-range Android` / `neighbourhood bakery` / `contacted by an insurer`)·소속 분류(`Office Worker` / `University Student` / `Self-Employed Merchant` / `Document-Conscious Parent`) DESIGN dest 0 / sidecar 0.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — OG “실속있는 포인트, 편리한 결제, 간편한 금융, 안전한 전자문서함”, “일상의 빈틈을 채우다”, “결제가 필요한 모든 순간, PAYCO 하세요.”, 페이코 라이프 / PAYCO Life, Fill the gaps in your daily life, YAML `use` 14문자열, `--brand-color`, 2015 / NHN / Hangame / NAVER 전기 서술, §7 Do/Don't, §12 다섯 원칙 문장과 UI implication.
- **관측 기술** — `#FF2233` / `#ff1414` / `#2a303a` / `#ffffff` 등 hex, 1026px `.wrap`, `.bn_big` 198×48px, input 32px / `0 0 0 20px`, `transition: width 0.5s`, NotoSans / `'Pretendard Variable'` / Apple SD Gothic Neo 스택, YAML spacing·rounded 스텝, Primitive type, §14 Empty/Loading/Error/Disabled 캡처.
- **편집적 해석·인과 판단** — 두 파일을 토큰 표면으로 읽기, 분위(urgency/confidence/energetic rhythm), 서사를 토큰 소스가 아닌 맥락으로 분류, 과제 선정, 페르소나 비승격, 특성 묶기, 원칙·Do/Don't, 역할 페어링·비병합(`:78`·`:97`), spacing/shape/type-role 비병합, elevation 비사다리, motion 게이트, 폰트 class·fallback 거부, favicon 카탈로그 포인터, §14 보존, applicability·recipe, 레이아웃≠보편 그리드, register≠완전 마이크로카피, Named gaps 범위.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 hex·치수, 컴포넌트 상태 applicability 표, 절 구조. 원본·sibling 미수정.
- 기존 23개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- `:78`이 이미 이름한 `#f4f4f4` §9 표기, `:155`가 이미 이름한 Pretendard≠`family.sans`, `:203`이 이미 이름한 컨트롤 geometry≠spacing rewrite는 같은 읽기의 재진술로 보았다.
- `#ffffff` canvas vs on-primary vs 버튼 라벨은 `:78`과 Proof notes에 역할 분리가 적혀 있다(krafton형 원장 누락 아님).
- 원본 §15 `0.5s` / `width`는 본문에 값과 역할이 함께 있다(T2 관례). 되살리지 않음.
- `FILL IN` DESIGN dest 0. `live-extract` 해당 없음.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared **5** / candidates **128** (`verdict: PASS`는 대조한 바늘만). 손 스윕 발행 라벨 9종·YAML use 14·셀렉터 12는 산출 `DESIGN.md`에 생존. 라틴 발행 카피(`Fill the gaps in your daily life` / `Every moment you need to pay, PAYCO it.` / `Practical points, convenient payment, simple finance.` / `PAYCO Life`) dest ≥ 1. 라틴 손실로 복원하지 않음.
- **D2a / copy-loss 경계.** 처분 행이 원형 라벨(`Illustrative Office Worker` / `University Student` / `Self-Employed Merchant` / `Document-Conscious Parent`)을 이름하지 않는다. 식별자 재수록은 아니다. 게이트가 라벨 명명을 요구하면 로그 쪽 기록 공백이다 — 라벨을 처분 행에 넣지 않음(D2a 식별자 예시 금지와 충돌하지 않게). `식권` SRC 1 / DES 0, `캠퍼스` SRC 1 / DES 0 — 페르소나 전기 안의 한글이며, 독립 서사 `office meal vouchers` / `campus IDs`는 Scope에 남아 있다. 복원하지 않음.
- **B1 sibling 승격.** sibling 전용 값(`19,911`, `398,170`, `'나눔고딕'`, `'돋움'`, GNB wrap `110px`, `.inp` `line-height: 32px`, `.bottom_area .btn_link`, `payco-cdn.cdn.toastoven.net`, `Pretendard-Bold.eot`, `12,568`) DESIGN dest 0. `portal H2` dest 0. `product-surface`는 산출 HTML claim 마커이며 sibling에 없다.
- **A1 열/귀속.** 14 color 키·7 spacing·4 rounded가 Token-set path 열로 남아 있다. krds형 토큰명 열 삭제 없음. `#FF2233` vs `#ff1414`, YAML ghost fg vs §4 `#191a1c`, unitless vs px line-height는 문서 전체에서 keep-both로 같다(자리마다 다른 충돌 처리 없음).
- **A1 키 경로.** `button-primary.padding` `0 0`, `button-cta-modern.radius` `8px`, `input-standard.padding` `0 0 0 20px`가 대응 블록에 행으로 있다. 같은 hex가 다른 블록에만 있는 icook형은 없음.

AUDIT_DONE fixes=18
