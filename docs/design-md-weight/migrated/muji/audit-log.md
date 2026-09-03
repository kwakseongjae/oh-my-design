# muji 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/muji/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/muji/DESIGN.md`
검증 sibling: `web/references/muji/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not MUJI-authored or a separately published UI specification`을 요구한다. 기존 26건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 26 / 원장 26. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Scope `:9` 한정은 chrome/primary/`prose-derived`/값 부착만 이름하고, 같은 문단의 regional-site footer band 읽기는 원장이 이미 적었는데 본문 한정이 빠뜨렸다. Semantic `:88`은 canvas/on-primary/footer text·brand/error 비병합만 이름하고 Ink/Info Ink/Footer Ground·Sale Red 쓰기는 본문 불릿에만 있었다. Assets `:227`은 favicon·사진 읽기만 이름하고 뒤 문장의 장식 대체 금지를 빠뜨렸다. Scope `:13` 원장은 last-sentence-as-unit을 본문 한정이 이름하는데도 행에서 뺐다.

문장 분류: 브랜드 발행 사실(표시명·슬로건·CTA·YAML 값·§표 수치) / 관측 기술(live chrome hex/px, sibling 샘플) / 편집적 해석·인과 판단(키 비병합, footer band 비승격, 사진 대체 금지, 페르소나 삭제 읽기). 세 번째 부류만 수정 대상.

## 수정 목록 (14건)

### B2a — 인접 한정 (본문 3건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:9` — Scope ¶1 | regional-site footer band를 두 번째 catalog homepage가 아니라고 읽는 것은 세 번째 부류. 기존 한정은 chrome 표면·primary 비병합·`prose-derived`·값 부착만. 원장 `:9`는 이미 footer band를 이름함. | 기존 완전형에 regional-site footer band off a second catalog homepage를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:88` — Semantic color | Ink / Info Ink / Footer Ground 비병합과 Sale Red 쓰기를 brand-token 쓰기와 붙이지 않는 것은 세 번째 부류. 기존 한정은 canvas/on-primary/footer text·brand/error·primary-hover만. | 기존 완전형에 그 두 비병합을 접어 넣음. hex 리터럴은 추가하지 않음(dest 불변). 발생 수 +0. |
| 3 | `DESIGN.md:227` — Assets | 상품 사진을 발명 브랜드색 장식으로 바꾸지 말라는 금지는 세 번째 부류. 기존 한정은 favicon 메타·사진 as catalog content만. | 기존 완전형에 not replacing product photography with invented brand-color decoration을 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 28, `not MUJI-authored` 26, `separately published UI specification` 26. 완전형 26(단수 11 + 복수 `inferences` 15; `:145`·`:726`의 내부 반복 2는 같은 완전형 안의 중첩). `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다(`not MUJI-authored` provenance 1 / log 1 = mention).

한정 줄: 9, 11, 13, 19, 28, 32, 45, 58, 71, 88, 126, 130, 141, 145, 187, 195, 199, 217, 227, 234, 290, 417, 675, 726, 738, 774.

### E1 — provenance derived 범위 (3건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 4 | Scope ¶3 행 `:13` | 서사·*mu* 형식만. 본문 `:13`은 last-sentence-as-unit도 이름한다. | 그 판단을 행에 추가. |
| 5 | Semantic 행 `:88` | canvas/on-primary/footer text·brand/error만. 본문 `:88`이 이제 Ink/Info Ink/Footer Ground·Sale Red 쓰기도 이름한다. | 그 판단을 행에 추가. |
| 6 | Assets 행 `:227` | favicon·사진 as catalog content만. 본문 `:227`이 이제 장식 대체 금지도 이름한다. | 그 판단을 행에 추가. |

헤더 / 데이터 행 **26 / 26** 유지 at 162–187 (E1 1:1). `node scripts/check-limiter-ledger.mjs muji` → 본문 26 / 원장 26 1:1 OK.

### E2 / E2a / D2a — 로그 목적지와 삭제 행 (8건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다. 2차 목적지 문자열은 DESIGN dest를 `grep -o | wc -l`로 확인했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 7 | YAML `tokens.colors` 행 | surface `#f7f7f7` DESIGN dest **15**. Named gaps `:778`에 hover pairing이 있어 dest **16**. | dest **16**. |
| 8 | YAML `tokens.colors` 행 | primary-hover `#000000` dest **7**. Named gaps `:778` + Distinctive traits에 있어 dest **8**. | dest **8**. |
| 9 | YAML `tokens.colors` 행 | brand-hover `#6b0015` dest **5**. Named gaps `:778`에 있어 dest **6**. | dest **6**. |
| 10 | YAML `tokens.rounded` 행 | body `0px` dest **26**. `grep -o '0px'` DESIGN dest **27** (substring `10px`/`20px`/`1180px` 포함 — 로그 자체 계수 관례). | dest **27**. |
| 11 | §13 삭제 행 | 처분 행이 식별자를 열거한 채 dest **0**을 단언(D2a + E2d 형태). | 식별자·전기 문구를 빼고 무식별 처분만 남김. 원형 세그먼트 라벨 3종은 Audience 바늘이라 유지. |
| 12 | A5a 보조 도구 문장 | 가상 전기 안의 인용 구를 처분 설명에 재수록. | 구를 빼고 「삭제된 가상 전기 안의 인용」으로만 적음. |
| 13 | A5a 분모 문장 | 같은 인용 구를 분모 주석에 재수록. | 구를 뺌. |
| 14 | 제출 전 자가 대조 | 같은 인용 구를 복원-거부 사유에 재수록. | 구를 뺌. |

수정 후 실측 (`grep -o | wc -l`): `#f7f7f7` DESIGN 16 · `#000000` DESIGN 8 · `#6b0015` DESIGN 6 · `0px` DESIGN 27. 식별자 문자열 DESIGN 0 / provenance 0 / log 0.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 26개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- E2c: B3 전문 `DESIGN.md` 171 (`transition properties, animation name, duration, easing, and reduced-motion behavior` DESIGN dest 1 / provenance dest 0 / log dest 1=mention). Principles 형태 `:45` dest 1. 준수 주장 유지.
- E2d: 커브 3개 행은 「DESIGN.md 0회 · provenance dest 2」이지 「세 파일 어디에도 없다」가 아니다. 분모는 DESIGN.md. 원장 Omission ledger가 값을 보관한다(E2b).
- A1 키 경로: 원본 YAML `tokens.components` 18키의 각 필드가 대응 블록에 행으로 있음. icook형 타 블록 hex만 있는 소실 0. 복원 0.
- 원본에 없는 모션 규칙을 합성하지 않음. 무출처 커브는 역할만 본문에 남김(T2 관례).

## 범위 밖 관찰

- **A5a.** 게이트 `coverage copy-loss compared 21 / candidates 226` (9.3%). `verdict: PASS`는 대조한 바늘 중 손실 없음이지 카피 전수 보존이 아니다. 손 대조 발행 바늘 36/36 생존. 라틴 발행 카피 손실은 보이지 않았다. 빠진 영문은 레퍼런스 저자 서술(`argument against visual identity`)과 삭제된 H1 `Design System Inspiration of MUJI (無印良品)`뿐 — `無印良品` 자체는 Scope에 dest 3.
- **B1.** sibling 전용: `#4d4d4d` DESIGN dest 0 / provenance dest 1 · `Roboto` DESIGN dest 0 / provenance dest 2 · `heading/nav` DESIGN dest 0 / provenance dest 1 · `muji.us` DESIGN dest 0 / provenance dest 7. 구조 분류가 본문에 사실로 승격되지 않음.
- **Hex 귀속 분리.** `#ffffff`는 canvas / on-primary / footer text / 컨트롤 fill에 서로 다른 역할. `#333333`는 Ink / Info Ink / Footer Ground / primary fill. 이번 E1 `:88` 확장으로 원장이 그 분리를 이름한다. 값 중복은 정상(krafton).
- **충돌 처리.** toast `0.12` ≠ YAML `subtle` `0.08`, section weight YAML `400` ≠ §9 prompt `300`, notice YAML `border` ≠ §4 `Border-left` — 세 자리 모두 keep-both. krds형 자리마다 다른 정책 없음.
- **D2a 본문 잔존.** 식별자·동기(`isn't selling` 류)·소속 분류(`UX designer` / `Architect` / `Graduate student`) DESIGN dest 0 / provenance dest 0. Audience 세그먼트 라벨 3종은 원본 §13 머리글 원문(원형 라벨, 게이트 바늘).

AUDIT_DONE fixes=14

## 개정 — 의미 검토 FAIL 2 (2026-09-02)

대상: `docs/design-md-weight/migrated/muji/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정. 한정 수 불변 (26=26). 새 완전형 없음 — Layout `:675` 기존 한정에 §9 섹션 로컬 레시피 비병합만 접어 넣음.

### 결함 1 — A3 · §9 `64px vertical padding` 미착지

원본 `:471` Example Component Prompt `64px vertical padding`을 Layout `### Section (local recipe)` `:689`에 복원. Foundations/Layout의 `64px–96px between major bands`와 unitless `64` 스케일과 비병합. 스케일 표기 자리에는 넣지 않음.

### 결함 2 — A3 · §9 `body 14px line-height 1.7 `#666666``를 “이미 있다”로 삭제

같은 `:471` 조합 문장을 같은 로컬 레시피에 원문 표기로 복원. Type-role Body 잉크 `#333333`·muted 캡션과 비병합. provenance Omission ledger의 `already in type + muted` 처분을 삭제하고 로컬 레시피 착지로 고침.

`node scripts/check-limiter-ledger.mjs muji` → 본문 **26** / 원장 **26** (162–187) 1:1 OK.
`node scripts/check-yaml-use-landing.mjs muji` → use 27/27 미착지 0.
`node test-v2/tools/migrate-reference.mjs --brand muji --gate-only` → PASS, `problems: []`.

실측 (`grep -oF -e` | `wc -l`, 파일별; `grep -c` 미사용):

| 문자열 | SRC | SIB | DST | PROV | LOG |
|---|---:|---:|---:|---:|---:|
| `64px vertical padding` | 1 | 0 | **1** | **1** | 2 |
| `14px line-height 1.7` | 1 | 0 | **1** | **1** | 3 |
| `already in type + muted` | 0 | 0 | **0** | **0** | 0 |
| `body 14px line-height 1.7` | 1 | 0 | **1** | **1** | 1 |
| `centered content ~1180px` | 1 | 0 | **1** | 0 | 1 |
| `#f7f7f7` | 18 | 0 | **17** | 5 | 3 |
| `#666666` | 11 | 0 | **6** | 4 | 3 |
| `~1180px` | 3 | 0 | **4** | 1 | 2 |
| `1.7` | 8 | 0 | **6** | 1 | 5 |
| `64px` | 3 | 0 | **4** | 2 | 4 |
| `Helvetica Neue` | 37 | 0 | **37** | 9 | 2 |
| `#333333` | 55 | 0 | **42** | 18 | 5 |

### 갱신한 dest 행 (migration-log)

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| YAML `tokens.colors` | `#f7f7f7` | DESIGN **16** | DESIGN **17** |
| YAML `tokens.colors` | `#666666` | DESIGN **5** | DESIGN **6** |
| YAML `tokens.typography` | `1.7` | DESIGN **5** | DESIGN **6** |
| §5 Layout | `~1180px` | DESIGN **3** | DESIGN **4** |
| §9 Agent Prompt Guide | `64px vertical padding` | 없음 0/0 | DESIGN **1** / P **1** |
| §9 Agent Prompt Guide | `64px` | 없음 | DESIGN **4** / P **2** |
| §9 Agent Prompt Guide | `14px line-height 1.7` | 없음 0/0 | DESIGN **1** / P **1** |
| §9 Agent Prompt Guide | `centered content ~1180px` | 없음 0/0 | DESIGN **1** |

§10 B2a 줄 번호 `726`→`730`. provenance Layout `:675` 한정 범위 확장. Content/Forbidden/Named gaps 줄 `:726`/`:738`/`:774` → `:730`/`:742`/`:778`. A3 규칙 행에 두 고유값 추가.

FIX_DONE muji fixed=2 logdest=8
