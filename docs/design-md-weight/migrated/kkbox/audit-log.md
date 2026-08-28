# kkbox 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/kkbox/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/kkbox/DESIGN.md`
검증 sibling: `web/references/kkbox/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not KKBOX-authored or a separately published UI specification`을 요구한다. 기존 26건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 26 / 원장 26. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Motion B3 `:116` 다섯 종류 게이트는 `:112`가 이름하지만 `:114`가 사이에 있어 인접하지 않다. Audience `:27`은 biography-drop만 이름하고 name/motivation/affiliation 거절을 빠뜨렸다. Elevation `:108`은 tonal-vs-Z만 이름하고 keep-cues-as-rule을 빠뜨렸다. Font `:124`는 Official distributed asset 칸을 빠뜨렸다. Download Button `:191`은 기하만 이름하고 표 적용 사유를 빠뜨렸다. Layout `:210`은 측정·§8만 이름하고 §5 단락을 이 계약의 layout으로 읽는 판단을 빠뜨렸다.

## 수정 목록 (27건)

### B2a — 인접 한정 (본문 6건, 발생 수 +1)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:116` — Motion B3 | 다섯 증거 종류 게이트와 부분 확인 불충분은 세 번째 부류. `:112` 한정은 unnamed-set / qualitative / holding-the-gate를 이름하나 `:114`가 사이에 있어 `:116`에 인접하지 않다. | 완전형 신설. 발생 수 +1. |
| 2 | `DESIGN.md:27` — Audience | 이름·동기·소속 분류 거절은 세 번째 부류. 기존 한정은 identity-as-scope / biography-drop만. | 기존 완전형에 no name·motivation·affiliation을 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:108` — Elevation | keep-elevation-cues 문장을 이 계약의 elevation rule로 읽는 것은 세 번째 부류. 기존 한정은 tonal-vs-Z만. | 기존 완전형에 keep-cues-as-rule을 접어 넣음. 발생 수 +0. |
| 4 | `DESIGN.md:124` — Font evidence | 표 Official distributed asset 칸(`No KKBOX-exclusive distributed type family was verified`)은 세 번째 부류. 기존 한정은 official-use / live / declared-only / license만. | 기존 완전형에 official-distributed-asset를 접어 넣음. 발생 수 +0. |
| 5 | `DESIGN.md:191` — Download Button | 표 hover/disabled applicable · loading/error/success destination-close는 세 번째 부류. `:174`는 Capture record에 있고 `:191` 기존 한정은 기하만. | 기존 완전형에 destination-close / hover-disabled-applicable을 접어 넣음. 발생 수 +0. |
| 6 | `DESIGN.md:210` — Layout | 원본 §5 dark-canvas-as-negative-space 단락을 이 계약의 layout으로 읽는 것은 세 번째 부류. 기존 한정은 측정-not-grid / §8 qualitative / unnamed breakpoints만. | 기존 완전형에 §5-as-layout-contract를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 27, `not KKBOX-authored` 27, `separately published UI specification` 27. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention 1 / 1 / 1은 use가 아니다.

한정 줄: 9, 11, 13, 19, 27, 31, 42, 51, 60, 73, 80, 91, 104, 108, 112, 116, 124, 139, 143, 153, 155, 163, 174, 191, 210, 215, 251.

### E1 — provenance derived 범위 (8건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 7 | 헤더 | 26 complete / 26 data rows. | **27** / **27**. 데이터 135–161. |
| 8 | Audience 행 5 | identity / biography-drop만. 본문 `:27`이 이제 no name·motivation·affiliation도 이름한다. | 그 판단을 행에 추가. |
| 9 | Elevation 행 14 | tonal-vs-Z만. 본문 `:108`이 이제 keep-cues-as-rule도 이름한다. | 그 판단을 행에 추가. |
| 10 | Motion 행 15 | unnamed-set과 B3 게이트를 한 행에 묶음. 본문은 `:112`와 `:116`으로 갈라졌다. | 게이트를 행 27로 분리. |
| 11 | Font 행 16 | official-use / live / declared-only / license만. 본문 `:124`이 이제 official-distributed-asset도 이름한다. | 그 판단을 행에 추가. |
| 12 | Download Button 행 23 | 기하만. 본문 `:191`이 이제 destination-close도 이름한다. | 그 판단을 행에 추가. |
| 13 | Layout 행 24 | 측정 / §8 / unnamed breakpoints만. 본문 `:210`이 이제 §5-as-layout-contract도 이름한다. | 그 판단을 행에 추가. |
| 14 | Motion B3 행 | 없음. 본문 `:116` 신설. | 행 27 신설. |

헤더 / 데이터 행 **26 → 27** (E1 1:1). 데이터 135–161.

### E2 / E2a / E2c — 로그 목적지 (13건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 15 | YAML identity 행 | homepage 줄 목록만. `grep -o 'https://www.kkbox.com'` DESIGN dest **19** (9에 3회). P dest **7** at 13/23/43/49/71/135/144. `#00B6E1` DESIGN dest **9** / P dest **5**. kkcompany/github DESIGN dest **3** at 9×2/161. | dest 수를 실측으로 기입. |
| 16 | YAML metadata 행 | `components_harvested` P dest 3 at 21/62/165. 109를 빠뜨림. 원장 삽입 후 165→166. `prose-derived` P 줄을 164로 적음 → **165**. `ds.type` 166→**167**. | P dest **4** at 21/62/109/166. `prose-derived` P dest **4** at 19/62/109/165. |
| 17 | YAML family 행 | `tokens.typography.family.sans`를 136만. dest **2** at 124/136. `family.mono`를 137만. dest **3** at 124/131/137. | dest 수 기입. |
| 18 | YAML type roles 행 | `Download CTA label` dest 1 at 149. 같은 줄 Role+Token-set use. | dest **2** at 149. |
| 19 | §1/footer URL 행 | kkcompany/github를 9/161 줄만. | DESIGN dest **3** / homepage DESIGN dest **19** / P dest **7**. |
| 20 | §11 행 | 닫는 문장 dest 1 at 13 + Dual with Proof notes. Exact `music as the main event` P dest **0**. Proof notes는 `music-as-the-main-event` mention. `Taiwan's pioneering…` dest 4. `KKCompany` dest 5 at 9/13×3/217. | 2차 목적지를 정확 문자열 기준으로 고침(fitpet). |
| 21 | §10 행 | Content 본문·한정 213, issued names 215. | **215** / **217**. |
| 22 | §15 행 | 게이트 한정을 112만. `reduced-motion` dest 미기재. | 112 unnamed-set · 116 게이트. `reduced-motion` dest **2** at 112/116. |
| 23 | A5a 표 | 15개 문자열을 13 distinct로 적음. | **15** distinct. 분모 13→15. |
| 24 | Deviations | B2a 26=26 · `wc -w` 4009 · worker SHA만. | 27=27. `wc -w` **4131**. auditor SHA `ec5cb0244f1e52dca35d372397115cf4dbde976fce5d38935d5dd3c244a06fff`. |
| 25 | 헤더 SHA | Worker-close만. | Auditor-close SHA를 병기. |
| 26 | F1 | 26 = 26. 신설·확장을 착수 목록으로 적음. | 27 = 27. 신설 1 + 확장 5를 목록에 반영. |
| 27 | F2 | 26=26. dual dest를 착수 숫자로 적음. §11를 정확 문자열 P dest 0으로 정정하지 않음. | 27=27. homepage 19/7 · `#00B6E1` 9/5 · harvested 4 · `music as the main event` P dest 0. |

Destination SHA `577bbea78c411a47edcaf378faa2eea3ba40e67fbcbd0c3798c69d6b1aae78d6` → `ec5cb0244f1e52dca35d372397115cf4dbde976fce5d38935d5dd3c244a06fff` (한정 신설·확장 후). 줄 수 DESIGN `wc -l` **255** 불변. provenance 168→**169**.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 26개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- E2d: sibling-only 머리(`provenance.md:82`)는 원장에 남기고 portable fact가 아니라고 적는다. 「이 파일에 없다」고 단언하지 않는다. 로그의 `DESIGN.md` dest 0 측정은 다른 파일을 분모로 둔다.
- D2a 처분 행(`provenance.md:105`)은 절·인원·필드 종류만. 이름·나이·도시·전기를 열거하지 않는다.
- `prose-derived` DESIGN dest 1 / `components_harvested` DESIGN dest 0 / `tokens.source: prose-derived` DESIGN dest 0 은 정정 후 로그와 맞다.
- A1 키 경로: YAML `tokens.components.button-primary`의 type/bg/fg/radius/padding/height/font/use가 Download Button 블록 `:178–187`에 각 행으로 있다. 같은 hex의 타 블록 존재로 보존을 읽지 않음(icook형 아님).

## 범위 밖 관찰

- **A5a.** gate `copy-loss` compared **0** / candidates **37**. 발행 라틴 손실은 안 보인다. 손 대조 발행 라벨·use·principle·face 15 / 0 / 0. `verdict: PASS`는 대조한 바늘 중 손실 없음이지 카피 전수 보존이 아니다.
- **B1.** sibling 전용 `playwright getComputedStyle` / `rgb(17,17,17)` / `rgb(242,242,242)` / `rgb(0,182,225)` / `brand-owned regional sources` DESIGN dest 0. h3·섹션 표제 분류 침투 없음. 원본 0 / sibling 1 / 산출 0.
- **D2a.** 식별자 `Headphone Listener` / `Returning Subscriber` / `Design-Conscious` DESIGN dest 0 / P dest 0. 동기 `distraction-free` / `immersive` DESIGN dest 0 / P dest 0 / L dest 0. 소속 분류 재구성 없음(원본 0 / sibling 0 / 산출 0). 로그 §13 삭제 행이 식별자 3개를 dest 0 측정용으로 재열거한다 — 처분 행의 재수록. 본문은 고치지 않음.
- **E2d.** 「세 파일 어디에도 없다」 자기부정 행 없음. dest 0 주장은 DESIGN/P를 분모로 둔다.
- **A1.** 컴포넌트 1레코드 8필드가 해당 블록에 행으로 보존. 복원 없음.

AUDIT_DONE fixes=27
