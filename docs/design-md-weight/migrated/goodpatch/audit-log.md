# Goodpatch F3 audit — B2a · E2

대상: `docs/design-md-weight/migrated/goodpatch/{DESIGN.md,provenance.md,migration-log.md}`
원본: `web/references/goodpatch/DESIGN.md`
sibling: `web/references/goodpatch/.verification.md` (`find`로 존재 확인 후 전문 판독)
규칙: B2 · B2a · E1 · E2 · E2a–c (추가 조건 D2a · E2d · B1 보고 · A5a 보고)
계수: 파일별 `grep -oF <pat> <file> | wc -l`. `grep -c` 미사용.
워커 보고는 입력으로 쓰지 않음. 토큰 값 · 컴포넌트 표 · applicability · 구조 · 원본 무변경.

## 문장 분류 (B2a)

portable `DESIGN.md` 전 문장을 세 부류로 읽었다.

- **브랜드 발행 사실** — 라이브 표면 카피(`Design to empower`, `デザインの力を証明する`, `一緒にデザインの力を証明しませんか？`, CTA·nav·footer 라벨), profile 회사 사실(주식회사명, 2011年9月, 土屋尚史, 사업 범위, Prott, ReDesigner, TSE IPO 2020).
- **관측 기술** — 라이브 computed hex·px·family·radius·`box-shadow: none`, 표·레코드 선언 필드, Scope 2문단의 표면 기술(값과 등장 위치), Font evidence 증거 종류 표, 범위 경계.
- **편집적 해석·인과 판단** — 프록시 거부, gallery-wall/type-as-instrument/blue-means-act 읽기, 상장 성격 규정, Primary tasks 선정, Audience 그룹 읽기, Distinctive/Principles/Do/Don't, 역할 명명, bimodal·editorial-flat 읽기, 무출처 Motion·State 절, Geometric humanist sans, Typography rules, Assets 이미지 역할, kind/applicability 판정, Layout·responsive 읽기, voice·Forbidden register 성격.

세 번째 부류 22곳은 이미 인접 완전형 한정(`derived editorial implementation inference` + `not Goodpatch-authored` + `separately published UI specification`)을 갖고 있다. 발행 1차 DS가 없으므로 toss형 예문의 「발행 사양 부재」 전제가 성립하고, 예문을 `Goodpatch-authored`로 닫은 형태는 완전형이다. 본문에 한정을 더하지 않았다.

착수 실측 본문 완전형: 세 조각 각 **22**. provenance `Derived editorial inventory` 데이터 행 **22**. 1:1 (E1, 좁지도 넓지도 않음).

## 수정 목록

1. `migration-log.md` YAML identity 행 — `グッドパッチ` 2차 목적지를 `provenance Identity/raw samples`에서 실측으로 교정. DESIGN.md `Scope` **2** · provenance **5**(sibling-only titles 2 · raw samples titles 2 · Evidence class `株式会社グッドパッチ` 1). Identity 표 `name` 칸은 `Goodpatch`만 (`グッドパッチ` **0**).
2. `migration-log.md` YAML `tokens.shadow.none` 행 — Contact 패널 목적지는 값 `none`(`Shadow: none`)이지 정확 문자열 `box-shadow: none`이 아님을 갈랐다. `box-shadow: none`은 DESIGN **3**(Scope · Distinctive · Elevation) · provenance **0**.
3. `migration-log.md` F2 `グッドパッチ` — `provenance(Identity·raw samples·title)` → Identity 표 **0** / 실제 5위치.
4. `migration-log.md` F2 `box-shadow: none` — `provenance raw samples / conflict matrix` 2차 목적지 철회. provenance 정확 문자열 **0**(fitpet형). raw samples는 `box-shadow: \`none\`` · conflict matrix는 `none` (shadowless).

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 22 | 2 | 1 |
| `not Goodpatch-authored` | 22 | 1 | 1 |
| `separately published UI specification` | 22 | 1 | 2 |
| inventory 데이터 행 | — | 22 | — |
| `box-shadow: none` | 3 | 0 | 4 |
| `グッドパッチ` | 2 | 5 | 5 |
| `佐藤健太` / `山田美咲` / `陳偉倫` / `大阪` / `台北` | 0 | 0 | 0 |
| B3 `transition properties` + `partial confirmation` | 2 / 1 | 0 / 0 | 1 / 1 |

DESIGN.md SHA-256 `b9ef7611c7809ba219f73e8bb7e6d6a04d49d971722489f68465fd1b911e900b` (474 lines, 본문 불변). Source SHA `a776a89994100754f47b3f4c43aec27b83db8295eba19c71e502d2cbfa60f879` 불변.

## 범위 밖 관찰

- **A5a.** 로그 기재 `copy-loss` compared **15** / candidates **207**. `verdict: PASS`는 대조한 바늘 중 손실 없음이지 카피 전량 보존이 아님. 발행 카피 손 대조: `Design to empower` DESIGN 6 · `View services` 4 · `View selected works` 4 · `View career info` 3 · `Why design` 3 · `同意する` 1 · `デザインの力を証明する` 4 · `一緒にデザインの力を証明しませんか？` 4. 라틴 발행 카피 손실은 눈에 띄지 않음. 고치지 않음.
- **B1.** sibling 전용 값(`14.55px` / `53.33px` / `17.78px` / `210px` / `1440×900` / `スズキ` / `ソフトウェア開発` / `17億7,456万円` / `鶯谷町` / `rgb(150,160,166)`) DESIGN.md 각 **0**. sibling 구조 관측(`H3` / `h3` / `H2` / `section heading`) DESIGN.md 각 **0**. 값·분류 침투 없음. 고치지 않음.
- **D2a.** §13 삭제 행·Omission ledger는 인원·필드 종류만. 이름·나이·도시 세 파일 0. Primary tasks는 CTA·Company 표면 과제이지 페르소나 동기 승격이 아님(`screen polish` / `not a recruit` / `practices what it sells` DESIGN 0).
- **E2d.** 부재 단언은 분모를 `DESIGN.md` 또는 portable body로 닫고 있어 자기분모 거짓이 아님. `live-extract` / favicon slug / sibling 전용 값 / `cubic-bezier`의 DESIGN **0** 단언은 실측과 일치.
- **E2c.** "B3 유지" 없음. 본문은 다섯 종류+게이트 2 · 부분확인 배제 1.

AUDIT_DONE fixes=4
