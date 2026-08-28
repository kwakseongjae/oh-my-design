# grip F3 audit — B2a · E2

대상: `docs/design-md-weight/migrated/grip/{DESIGN.md,provenance.md,migration-log.md}`
원본: `web/references/grip/DESIGN.md`
sibling: `web/references/grip/.verification.md` (`find`로 존재 확인 후 전문 판독)
규칙: B2 · B2a · E1 · E2 · E2a–c (추가 조건 D2a · E2d · B1 보고 · A5a 보고)
계수: 파일별 `grep -o <pat> <file> | wc -l`. `grep -c` 미사용.
워커 보고는 입력으로 쓰지 않음. 토큰 값 · 컴포넌트 표 · applicability · 구조 · 원본 무변경.

Grip은 발행 1차 디자인 시스템이 없다. toss형 닫힘(`not Grip-authored or a separately published UI specification`)을 형태만으로 FAIL하지 않았다. 한정이 인접하고 class를 끝까지 닫는지만 봤다.

## 문장 분류 (B2a)

portable `DESIGN.md` 전 문장을 세 부류로 읽었다.

- **브랜드 발행 사실** — og:title·라이브 카피·Gripper 호칭, 원본 §11이 공공 사실로 닫은 창업·지분·다운로드·Grip Cloud 서사, §7 Do/Don't 본문, §10 톤 표.
- **관측 기술** — hex·치수·unitless 비율·primitive type·YAML `use`/`font` 바이트, 표면 귀속, 캡처 부재.
- **편집적 해석·인과 판단** — 분위기 읽기, 범위 거부, 과제/청중 명명, 원칙·적용·회피 근거, 키 경로 분리, 치환 금지, 역할/applicability 판정, 파비콘·서체 증거 분류, 420px 충실 제약.

세 번째 부류인데 인접 완전형 한정(`derived editorial implementation inference` + `not Grip-authored` + `separately published UI specification`)이 없던 자리만 고쳤다.

감사 전 본문 완전형: 세 조각 각 **20**. provenance 원장 데이터행 **20**.
감사 후: 본문 **22** / 원장 **22** (1:1). 원장이 본문과 숫자는 맞았으나 Spacing·Family 편집 문장이 원장 밖이었다 (좁은 쪽).

## 수정 목록

1. `DESIGN.md` Scope ¶3 (`:13`) — 「Those sentences are narrative context」를 기존 한정의 주어에 `Classing that narrative as not a token source, and that refusal`로 편입. 새 인스턴스 없음.
2. `DESIGN.md` Spacing (`:125`) — `section: 56` / 56px 헤더 / 4·8·16·24 경로 분리 뒤에 인접 완전형 한정 신설.
3. `DESIGN.md` Shape (`:138`) — 기존 한정에 rounded 스텝을 같은 숫자 spacing 키와 분리하는 읽기를 포함. 새 인스턴스 없음.
4. `DESIGN.md` Family (`:198`) — Pretendard 시스템 폰트 치환 금지 뒤에 인접 완전형 한정 신설.
5. `DESIGN.md` Type rules (`:223`) — 기존 한정에 11–12px 범위·56px 헤더를 badge-size / spacing.section과 분리하는 읽기를 포함. 새 인스턴스 없음.
6. `DESIGN.md` Layout (`:424`) — 기존 한정에 `section: 56` ≠ 56px 헤더를 포함. 새 인스턴스 없음.
7. `provenance.md` Portable derived-editorial scope — **20행 → 22행**. Spacing · Family 2행 추가, Scope ¶3·Shape·Type rules·Layout 주어를 본문과 맞춤. 본문 22 = 원장 22 (E1 1:1).
8. `migration-log.md` YAML identity — Identity 표 `7–21` → **7–20** (21은 빈 줄). `https://www.grip.show` provenance `13/44/49` → **13/42/47** (44는 빈 줄, 49는 `webapp-resource.grip.show` 부분문자열 — `https://www.grip.show` 0).
9. `migration-log.md` YAML metadata — `17–21, 30–33, 135` → **17–20, 30–32, 139** (21·33·135는 빈 줄). **Verified:** `35` → **34**.
10. `migration-log.md` Footer — Freshness `28–35` → **28–34**; Tier 1 `49–54` → **47–52**; Tier 2 `57–58` → **56–57**; `https://gripcorp.co` `45/53` → **43/51** (45는 절 표제, 53은 빈 줄); Conflicts `37` → **36**.
11. `migration-log.md` §9 — 삭제 점검 `provenance.md` 117 → **118**.
12. `migration-log.md` §13 — 처분 행 `112` → **115** (112는 표 머리).
13. `migration-log.md` §15 Standard — omission 행 `111` → **114**.
14. `migration-log.md` sibling 전사 — `67–80` → **65–79** (67은 raw sample 중간).
15. `migration-log.md` sibling-only 목록 — `84–96` → **83–94** (96은 og:title 보강, sibling-only가 아님).
16. `migration-log.md` A5a 표 — `GripCompany Co., Ltd.` `95` → **94**; Tier 2 제목 `99` → **98**.
17. `migration-log.md` F1·F2·Deviations·SHA — 워커 20 / `f93494be…` / `5,422`를 superseded로 두고 사후 22 / SHA `05ee758b…` / `wc -w` 5,518 / 원장 `150–171`을 적음.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 22 | 1 | 2 |
| `not Grip-authored` | 22 | 2 | 2 |
| `separately published UI specification` | 22 | 2 | 2 |
| inventory 데이터 행 | — | 22 | — |
| `Minjung` / `Soyeon` / `Junho` / `Hyeji` / `Busan` / `Daejeon` | 0 | 0 | 0 |
| `#df005d` / `210px` / `136px` / `영상으로 만나는` / `business.grip.show` | 0 | 2 / 2 / 2 / 2 / 2 | 1 / 1 / 1 / 1 / 1 |
| `https://www.grip.show` | 2 | 4 | 1 |
| `https://gripcorp.co` | 1 | 3 | 2 |
| B3 다섯 종류+게이트 전문 (`DESIGN.md` 175) | 1 | 0 | 1 |

한정 줄: 9, 11, 13, 19, 28, 32, 46, 56, 67, 82, 125, 138, 144, 185, 190, 198, 223, 227, 235, 256, 424, 449.
DESIGN.md 488행 불변. SHA-256 `05ee758bbeb26790574a7aa44f7a0bb35c956e9458bd84473a1da3eb6ca27f2d`.

## 범위 밖 관찰

- **A5a.** 로그 기재 `coverage` compared **8** / candidates **152**. `verdict: PASS`는 대조한 8개 바늘에 손실 없음. 발행 한글 `1,000만이 선택한 영상 쇼핑, 그립.` / `지금 라이브 중!` / `담긴 상품이 없어요` / `품절` / `사용 완료` / `지금 바로` / `한정 특가` / `지금 방송 중` / `주식회사 그립컴퍼니`는 DESIGN에 생존. 발행 라틴 `Korea's first live commerce platform` 1 · `personal media commerce` 1 · `Jam Live` 1 · `anyone with a smartphone` 1 · `Grippers` 2 · `Grip Cloud` 6. 라틴 발행 카피 손실은 눈에 띄지 않음. 고치지 않음.
- **B1.** sibling 전용 값(`#df005d` / `#8314c8` / `#1254b1` / `210px` / `136px` / `133.59deg` / `239-87-01063` / `영상으로 만나는` / `business.grip.show` / `primary-100`)과 구조 관측(`h3` / `section heading`)은 DESIGN.md **0**. 고치지 않음.
- **D2a.** 삭제 처분 행은 필드 종류만 적고 이름·나이·도시를 재열거하지 않음. 세 파일 식별자 0. Primary tasks는 라이브/결제/쿠폰 모듈이지 페르소나 동기(`HOT ranking` / `OBS` / `kitchen studio`) 승격이 아님.
- **E2d.** `focus-visible` 부재 단언은 원본 파일에 대해 닫혀 있고 원본 실측 0. sibling-only 목록은 「source body does not」로 분모를 닫고 처분 지목으로 나열함. 자기분모 거짓 없음.
- **E2c.** B3 준수 주장은 `DESIGN.md` 175에 transition properties · animation name · duration · easing · reduced-motion + per-component 게이트 전문이 있어 유지.

AUDIT_DONE fixes=17
