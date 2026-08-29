# lemonbase 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/lemonbase/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/lemonbase/DESIGN.md`
검증 sibling: `web/references/lemonbase/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음. 파일 존재.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-29

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Lemonbase-authored or a separately published UI specification`을 요구한다. 기존 26건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 26 / 원장 26. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Spacing `:122` keep-apart, Elevation `:149` keep-both, Motion `:165` 커브 생략, Declared-only `:193`, Outside-captures `:195`, Type roles unitless `:217`, Assets logo `:231`, State-record close `:437`, Desktop declared-width `:468`은 한정이 없었다. Primary tasks `:26`은 선정만 이름하고 persona-off를 빠뜨렸다. Audience `:31`은 청중 읽기만 이름하고 인물 drop을 빠뜨렸다. Semantic `:88`은 역할 명명만 이름하고 canvas/on-primary `#ffffff` 키 분리와 surface `#f1f5f9` off Neutral/Tinted fills를 빠뜨렸다. Shape `:137`은 workhorse/carousel만 이름하고 radius `sm: 8` off spacing을 빠뜨렸다. How-to-read `:238`은 kind/applicability만 이름하고 C4 withhold · destination/arrow 닫힘 · chip non-interactive를 빠뜨렸다.

문장 분류: 브랜드 발행 사실(레몬베이스 · 도입 문의 · 상담 문의 · 소개서 신청 · 고성과를 위한 변화, 필요한 솔루션을 한번에 · YAML hex/size) / 관측 기술(live computed hex · Pretendard Bold/Regular · `box-shadow: none` · 40px height) / 편집적 해석·인과 판단(계약 범위, 분위기 읽기, 과제 선정, 청중 묶기, 원칙·Do/Don't, hex 키 귀속, sm:8 비병합, 커브 생략, 폰트 evidence class, unitless 유지, applicability, 선언 폭). 세 번째 부류만 수정 대상.

## 수정 목록 (43건)

### B2a — 인접 한정 (본문 14건, 발생 수 +9)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:26` — Primary tasks | 네 과제를 고른 것은 세 번째 부류. 기존 한정은 선정만. persona 절에서 오지 않는다는 문장이 한정 뒤에 따로 있었다. | 기존 완전형에 persona-off를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:31` — Audience | 인물을 승격하지 않고 그룹만 청중으로 읽는 것은 세 번째 부류. 기존 한정은 그룹 읽기만. | 기존 완전형에 drop을 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:88` — Semantic color | canvas `#ffffff` ≠ on-primary `#ffffff`, surface `#f1f5f9` ≠ Neutral Button fill ≠ Tinted Container fill은 세 번째 부류. 기존 한정은 역할 명명 / single-action 등만. | 기존 완전형에 같은-hex 키 분리를 접어 넣음. 발생 수 +0. |
| 4 | `DESIGN.md:122` — Spacing keep-apart | `tokens.spacing.sm: 8` off `tokens.rounded.sm: 8`은 세 번째 부류. `:124`는 breathing-room만. | 완전형 신설. 발생 수 +1. |
| 5 | `DESIGN.md:137` — Shape | radius `sm: 8` off spacing `sm: 8`은 세 번째 부류. 기존 한정은 workhorse/carousel만이고 keep-apart 문장이 한정 뒤에 있었다. | 기존 완전형에 radius/spacing 비병합을 접어 넣음. 발생 수 +0. |
| 6 | `DESIGN.md:149` — Elevation keep-both | 짧은 `rgba(0,0,0,0.08) 0px 8px 36px`와 trailing-`0px` 형을 둘 다 두는 것은 세 번째 부류. `:151`은 near-flat만. | 완전형 신설. 발생 수 +1. |
| 7 | `DESIGN.md:165` — Motion easing | 커브 값을 추적 불가로 생략하고 역할만 남기는 것은 세 번째 부류. `:155`는 절 전체 무출처. 값을 되살리지 않음(웨이브 39 T2 관례). | 완전형 신설. 발생 수 +1. |
| 8 | `DESIGN.md:193` — Font evidence Declared-only | fallback cuts ≠ Lemonbase UI-family token은 세 번째 부류. 한정이 없었다. | 완전형 신설(셀 안). 발생 수 +1. |
| 9 | `DESIGN.md:195` — Font evidence Outside | 블로그 CMS·두 토큰 페이지 밖을 계약 밖으로 자르는 것은 세 번째 부류. 한정이 없었다. | 완전형 신설(셀 안). 발생 수 +1. |
| 10 | `DESIGN.md:217` — Type roles | unitless line-height를 px로 바꾸지 않는 것은 세 번째 부류. 한정이 없었다. | 완전형 신설. 발생 수 +1. |
| 11 | `DESIGN.md:231` — Assets logo | 카탈로그 로고 항목을 Lemonbase 브랜드 에셋으로 제시하지 않는 것은 세 번째 부류. `:230`은 일러스트. | 완전형 신설. 발생 수 +1. |
| 12 | `DESIGN.md:238` — How to read | C4 withhold, destination/arrow loading/error/success 닫힘, chip non-interactive는 세 번째 부류. 기존 한정은 kind/applicability 총칭만. | 기존 완전형에 그 세 판단을 접어 넣음. 발생 수 +0. |
| 13 | `DESIGN.md:437` — State record close | 아홉 행을 마케팅 destination 컨트롤의 시각 treatment로 붙이지 않는 것은 세 번째 부류. `:423`은 무출처 시스템 행. | 완전형 신설. 발생 수 +1. |
| 14 | `DESIGN.md:468` — Layout image-behavior | Desktop `1024-1440px`를 측정 viewport가 아니라 선언 폭으로 두는 것은 세 번째 부류. `:451`은 반응형 문단. | 완전형 신설. 발생 수 +1. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 35, `not Lemonbase-authored` 35, `separately published UI specification` 35. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention 3 / 5 / 5는 use가 아니다.

한정 줄: 9, 11, 13, 15, 26, 31, 44, 48, 59, 72, 88, 122, 124, 137, 149, 151, 155, 165, 190, 193, 194, 195, 203, 217, 221, 230, 231, 238, 423, 437, 449, 451, 468, 473, 505.

### E1 — provenance derived 범위 (16건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 15 | 헤더 / 행 수 | 26 complete / 26 data rows. | **35** / **35**. |
| 16 | Primary tasks 행 5 | 선정만. 본문 `:26`이 이제 persona-off도 이름한다. | 그 판단을 행에 추가. |
| 17 | Audience 행 6 | 그룹 읽기만. 본문 `:31`이 이제 drop도 이름한다. | 그 판단을 행에 추가. |
| 18 | Semantic 행 11 | 역할 명명만. 본문 `:88`이 이제 canvas/on-primary · surface off fills도 이름한다. | 그 판단을 행에 추가. |
| 19 | Spacing keep-apart 행 | 없음. 본문 `:122` 신설. | 행 신설. |
| 20 | Shape 행 14 | workhorse/carousel만. 본문 `:137`이 이제 radius `sm: 8` off spacing도 이름한다. | 그 판단을 행에 추가. |
| 21 | Elevation keep-both 행 | 없음. 본문 `:149` 신설. | 행 신설. |
| 22 | Motion curve 행 | 없음. 본문 `:165` 신설. | 행 신설. |
| 23 | Declared-only 행 | 없음. 본문 `:193` 신설. | 행 신설. |
| 24 | Outside-captures 행 | 없음. 본문 `:195` 신설. | 행 신설. |
| 25 | Type roles 행 | 없음. 본문 `:217` 신설. | 행 신설. |
| 26 | Assets logo 행 | 없음. 본문 `:231` 신설. | 행 신설. |
| 27 | How-to-read 행 28 | kind/applicability만. 본문 `:238`이 이제 C4 · destination/arrow 닫힘 · chip도 이름한다. | 그 판단을 행에 추가. |
| 28 | State-record close 행 | 없음. 본문 `:437` 신설. | 행 신설. |
| 29 | Desktop declared-width 행 | 없음. 본문 `:468` 신설. | 행 신설. |
| 30 | Evidence-class boundary 표 | keep-apart / keep-both / 커브 생략 / logo / state close / declared width를 B2a가 아니라고 적음. | 그 행을 인벤토리로 옮기고, 표에는 B3·A3·A5 경계만 남김. |

헤더 / 데이터 행 **26 → 35** at 181–215 (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (13건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 2차 목적지 문자열은 DESIGN dest를 `grep -oF | wc -l`로 확인했다. 본문을 고친 뒤 dest 표를 재실측함(웨이브 40 lablup).

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 31 | 머리 SHA | Worker-close `e89c4f15…`만. F3 후 본문 SHA가 바뀜. | Auditor SHA `c2c81156744154dc336e44dafd660d243892ad3398ded432af3d6de66884583f`. |
| 32 | YAML colors 행 | `#ffffff` dest 11, `#f1f5f9` dest 11 (착수). 한정 확장 후 각 12. P dest를 적지 않음. | `#ffffff` dest **12** at 11×2/88/105×2/245/270/315/337/393/414/444 / P dest **4**. `#f1f5f9` dest **12** at 11/39/66/88/106/144/151/291/405/429/434/444 / P dest **3**. |
| 33 | YAML type-roles 행 | unitless 유지 한정이 로그에 없음. 표 범위 205–217. | 217 완전형을 dest로 적음. `1.30` dest 1 · `1.40` dest 2 · `1.44` dest 1 · `1.50` dest 3 유지. |
| 34 | YAML spacing/rounded 행 | `sm: 8` dest 6. P dest 없음. 122/137 한정을 적지 않음. | dest **6** 유지. P dest **3**. 122/137 완전형을 dest로 적음. |
| 35 | YAML shadow 행 | keep-both를 149에 이름만 함. 한정이 로그에 없음. | 149 완전형을 dest로 적음. ambient dest 3 / P 2, 짧은 형 dest 6 / P 3 유지. |
| 36 | §3 Typography 행 | Official product-use와 License만 한정 dest. Declared-only·Outside dest 0으로 읽힘. | 네 행 모두 완전형 dest (190/193/194/195). |
| 37 | §8 Responsive 행 | `1024-1440px` dest 2를 선언 폭이라고만 함. `as declared width` dest를 적지 않음. | `as declared width` dest **1** at 468. `measures 1440px` dest **0** / P dest **0**. |
| 38 | §14 States 행 | 아홉 행 421–436. close `:437` 한정이 로그에 없음. | 437 완전형을 dest로 적음. `오류가 발생했습니다` dest 1 · `필수` dest 1 유지. |
| 39 | YAML identity 행 | Assets가 로고를 브랜드 에셋이 아니라고 한다고만 함. 231 한정 dest 없음. | 231 완전형. `s2/favicons` dest **0** / P dest **1** (2차 목적지 아님 — fitpet형 아님). |
| 40 | Deviations 단어 수 | `wc -w` / Python `split`을 6,644로 동치. 착수 `wc -w` 6,679 ≠ split 6,644. | Python `split` **6,928** · `wc -w` **6,963**. 두 계수는 같지 않다고 적음. |
| 41 | Deviations B2a | `str.count` **26**. | `grep -oF \| wc -l` dest **35**. |
| 42 | F1 | Count **26** = inventory **26**. | **35** = **35**. 신설 9 + 확장 5를 목록에 반영. |
| 43 | F2 | "B2a 26=26". B3 줄 173은 맞으나 F3 후 재실측이 로그에 없음. | **35=35**. B3: `transition properties` dest **2** · `animation name` dest **2** · `reduced-motion behavior` dest **2** · `partial confirmation` dest **1** at 173. |

Destination SHA `e89c4f156404b85bf73a0c50bf2db6273e9ae1488e307384bf4f513a8de04366` → `c2c81156744154dc336e44dafd660d243892ad3398ded432af3d6de66884583f` (한정 확장 후). 줄 수 DESIGN `wc -l` **548** 불변. provenance 280→**283**. `wc -w` DESIGN **6963**.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 26개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다. 커브 생략의 Governance 재서술은 Foundations `:165` 한정의 반복이다.
- E2c: B3 전문 `DESIGN.md` 173 (`transition properties, animation name, duration, easing, and reduced-motion behavior` dest 2). Principles 형태 `:48` dest 1. 준수 주장 유지.
- E2d: sibling-only 머리(`provenance.md:70`)는 원장에 남기고 portable fact가 아니라고 적는다. 분모는 portable body. 「세 파일 어디에도 없다」고 단언하지 않는다. `:84` 목록의 dest 0은 DESIGN을 분모로 둔다. 로그 dest 0 측정도 같은 방식.
- D2a 처분 행(`provenance.md` Omission · 로그 §13)은 절·인원·빠진 필드 종류만. 이름·나이·도시·전기를 열거하지 않는다. 식별자 DESIGN/P/L dest 0.
- `omd` DESIGN dest 0 / `YAML` DESIGN dest 0 / `loading | applicable` dest 0 / `loading | not-applicable` dest 6 은 정정 후 로그와 맞다.
- 원본 §15 커브는 본문에 값으로 되살리지 않음. 역할·duration은 `:<n>`에 인용된 채 남음(웨이브 39 T2 관례).
- 원본에 없는 모션을 합성하지 않음. 생략 자기 진술은 위반이 아니라 모범(웨이브 39 kmong).
- YAML `use` 7종과 §3 Notes는 본문에 인용된 채 역할이 남는다. T2 관례 — 값 소실로 읽지 않음.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared 26 / candidates 185. `verdict: PASS`는 대조한 것 중 잃은 게 없다는 뜻이지 카피 보존이 아니다. 손 대조 발행 카피: 레몬베이스 dest 2 / 도입 문의 dest 9 / 상담 문의 dest 8 / 소개서 신청 dest 5 / 고성과를 위한 변화, 필요한 솔루션을 한번에 dest 5 / Contact sales dest 1 / the next step. dest 1 / Change for high performance — every solution you need, in one place dest 1 / evaluation employees can trust dest 1 / trusted experts dest 1 / AI TRENDS dest 3. 발행 라틴 손실은 안 보인다. 고치지 않음.
- **B1.** sibling 전용 `129px` / `rgba(50,138,246,0.12)` / `guide.lemonbase.com` / `818 bytes` / `simpleicons` / `rgb(0, 0, 0)` / `blog/캠프` / `h3 section` DESIGN dest 0 / P에만. sibling h3·섹션 표제 분류 침투 없음. `document.title` DESIGN dest 0.
- **D2a.** 원본 §13 3인. 식별자 `한지영`/`이도현`/`최수민`/`서울`/`부산`/`경기` DESIGN/P/L dest 0. 동기 `spreadsheet`/`manufacturing`/`300-person` dest 0. 소속 신조어(`Solutions Partner`) dest 0. Audience는 원본 이탤릭 그룹 `Korean HR leaders, people-team managers, team leads running evaluations` dest 1. Primary tasks는 표면·공식 라벨. gitlab형 동기 잔존·hubspot형 소속 신조어 없음. DESIGN `38` dest 2는 `#2c2c38` 접미, 나이 필드가 아님.
- **E2d.** 「세 파일 어디에도 없다」 자기부정 행 없음. 로그 dest 0은 DESIGN을 분모로 두고 로그 자신을 넣지 않는다. provenance `:84`는 portable body를 분모로 두고 그 문자열을 원장에 적는다.
- **A1 키 경로.** YAML `tokens.components` 7레코드 필드가 대응 블록에 행으로 있다: button-primary/consult/neutral `type`·`bg`·`fg`·`radius`·`padding`·`font`·`use` (+ height where YAML has it); nav-link `type`·`fg`·`font`·`active`·`use`; card-elevated `type`·`bg`·`radius`·`shadow`·`use`; card-tint `type`·`bg`·`radius`·`use`; badge-accent `type`·`bg`·`fg`·`radius`·`padding`·`font`·`use`. colors 16키 Semantic 역할행. spacing 8키 / rounded 6키 슬롯 분리 (`sm: 8` 두 경로). icook형 소실 없음. 복원 없음. 토큰명 열·단계 귀속 삭제 없음(웨이브 40 krds형 아님). 충돌 처리: 커브 3개 모두 생략으로 일관.
- **hex 귀속 분리 (웨이브 39 krafton, E1로 원장 맞춤).** `#ffffff` = canvas / on-primary / Primary·Consult 라벨 / Outline·Nav·Card·Panel 배경 / 밴드. `#f1f5f9` = surface / Neutral fill / Tinted fill / skeleton. 본문 한정 `:88`과 원장 행 11이 YAML 색 키 분리를 이름한다. 값을 합치지 않음.

AUDIT_DONE fixes=43
