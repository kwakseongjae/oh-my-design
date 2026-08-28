# kakaobank 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/kakaobank/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/kakaobank/DESIGN.md`
검증 sibling: `web/references/kakaobank/.verification.md` — `find web/references/kakaobank -type f`와 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). 대괄호 카피는 `grep -oF`. `grep -c` 미사용.
날짜: 2026-08-28

`ds.type: brand` — 발행 1차 UI 사양 아님. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not KakaoBank-authored or a separately published UI specification`을 요구한다. 기존 24건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 24 / 원장 24. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Primary tasks `:21`은 선정만 이름하고 fictional-biography 분류를 빠뜨렸고, Audience `:31`은 그룹 읽기만 이름하고 개인 페르소나 거부를 빠뜨렸고, Distinctive `:35`는 groupings만 이름하고 restatement 분류를 빠뜨렸고, Semantic `:77`은 pairing/`#007AFF`만 이름하고 role-names-from-labels와 YAML-anchor 표면 귀속을 빠뜨렸고, Type roles `:149`는 keep-both만 이름하고 unitless-ratio와 claim-anchor를 빠뜨렸고, Capture `:178`은 절차·평결만 이름하고 catalog-graph-not-adopted와 not-complete-coverage를 빠뜨렸고, Named gaps `:343`은 domain-inventory만 이름하고 unnamed-values-not-permissions를 빠뜨렸다. Type roles `:160` · Service-tab `:218` · Black action `:243` · Download `:268` · Spec row `:292`의 `is not` 키경로 판단에는 인접 완전형이 없었다.

## 수정 목록 (36건)

### B2a — 인접 한정 (본문 12건, 발생 수 +5)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:21` — Primary tasks | "They are not fictional biographies"는 세 번째 부류. 기존 한정은 과제 선정만 가리킨다. | 기존 완전형에 classifying them as first-party task contexts rather than fictional biographies를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:31` — Audience | "No individual personas are promoted"는 세 번째 부류. 기존 한정은 그룹을 audience로 읽는 것만 가리킨다. | 기존 완전형에 refusing to promote individual personas를 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:35` — Distinctive traits | "The list restates the source's Key Characteristics"는 세 번째 부류. 기존 한정은 groupings만 가리킨다. | 기존 완전형에 classifying the list as that restatement를 접어 넣음. 발생 수 +0. |
| 4 | `DESIGN.md:77` — Semantic color | "Role names below are the source's own labels"와 "Surface attachments follow the YAML claim anchors, not the role name"은 세 번째 부류. 기존 한정은 pairing / `#FFE300` beside `#ffe300` / `#007AFF` off만 가리킨다. | 기존 완전형에 taking those role names from the source's own labels와 attaching surfaces from the YAML claim anchors rather than from the role name를 접어 넣음. 발생 수 +0. |
| 5 | `DESIGN.md:149` — Type roles | "YAML unitless line heights stay ratios"와 "Surface attachments follow the YAML claim anchors"는 세 번째 부류. 기존 한정은 YAML/§3 keep-both만 가리킨다. | 기존 완전형에 keeping YAML line heights as unitless ratios와 attaching surfaces from the YAML claim anchors를 접어 넣음. 발생 수 +0. |
| 6 | `DESIGN.md:160` — Type roles sizes | 90px / 42px / 16px / 14px를 역할에 묶고 42px-tall action·spacing.md와 가르는 판단. 표 뒤 단락에 인접 한정 없음. | 완전형 신설. 발생 수 +1. |
| 7 | `DESIGN.md:178` — Capture record | `:172` catalog-graph-not-adopted와 `:178` "This is not a complete state-coverage claim"은 세 번째 부류. 기존 한정은 절차·kind·applicability 평결만 가리킨다. | 기존 완전형에 preserving the source state contract here rather than delegating it to an unadopted catalog graph와 the refusal to treat this as a complete state-coverage claim를 접어 넣음. 발생 수 +0. |
| 8 | `DESIGN.md:218` — Service-category tab | 62px ≠ nav 62px, `16px 0` ≠ `tokens.spacing.md: 16`. 인접 한정 없음. | 완전형 신설. 발생 수 +1. |
| 9 | `DESIGN.md:243` — Corporate black action | 42px ≠ service-page title. 인접 한정 없음. | 완전형 신설. 발생 수 +1. |
| 10 | `DESIGN.md:268` — Brand-resource download | 43px / padding ≠ `tokens.spacing.md: 16`. 인접 한정 없음. | 완전형 신설. 발생 수 +1. |
| 11 | `DESIGN.md:292` — Brand specification row | `24px` ≠ `tokens.spacing.lg: 24`. 인접 한정 없음. | 완전형 신설. 발생 수 +1. |
| 12 | `DESIGN.md:343` — Named gaps | "These decisions are unnamed values, not permissions to invent"는 세 번째 부류. 기존 한정은 named gaps rather than a domain inventory만 가리킨다. | 기존 완전형에 treating the items as unnamed values rather than permissions to invent를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 29, `not KakaoBank-authored` 29, `separately published UI specification` 29. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 15, 21, 31, 35, 46, 55, 64, 77, 101, 113, 117, 121, 139, 145, 149, 160, 165, 178, 218, 243, 268, 292, 298, 302, 307, 343.

### E1 — provenance derived 범위 (12건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 13 | Primary tasks 행 | 과제 선정만. 본문 `:21`이 이제 not-fictional-biographies도 이름한다. | classifying them as first-party task contexts rather than fictional biographies를 행에 추가. |
| 14 | Audience 행 | 그룹 읽기만. 본문 `:31`이 이제 refusing individual personas도 이름한다. | 그 판단을 행에 추가. |
| 15 | Distinctive traits 행 | groupings만. 본문 `:35`가 이제 restatement 분류도 이름한다. | classifying the list as a restatement of the source Key Characteristics를 행에 추가. |
| 16 | Semantic 행 | pairing / `#007AFF`만. 본문 `:77`이 이제 role-names-from-labels와 YAML-anchor 표면 귀속도 이름한다. | 두 판단을 행에 추가. |
| 17 | Type roles 행 | keep-both만. 본문 `:149`가 이제 unitless-ratio와 claim-anchor도 이름한다. | 두 판단을 행에 추가. |
| 18 | Type roles sizes 행 | 없음. 본문 `:160` 신설. | 행 19 신설. |
| 19 | Capture 행 | 절차·평결만. 본문 `:178`이 이제 catalog-graph-not-adopted와 not-complete-coverage도 이름한다. | 두 판단을 행에 추가. |
| 20 | Service-category tab 행 | 없음. 본문 `:218` 신설. | 행 22 신설. |
| 21 | Corporate black action 행 | 없음. 본문 `:243` 신설. | 행 23 신설. |
| 22 | Brand-resource download 행 | 없음. 본문 `:268` 신설. | 행 24 신설. |
| 23 | Brand specification row 행 | 없음. 본문 `:292` 신설. | 행 25 신설. |
| 24 | Named gaps 행 | domain-inventory만. 본문 `:343`이 이제 unnamed-values-not-permissions도 이름한다. | 그 판단을 행에 추가. |

헤더 / 데이터 행 **24 → 29** (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (12건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 25 | YAML identity 행 | `#ffe300` DESIGN 79 + P 14/27. slug P 16만. | `#ffe300` DESIGN dest **2** at 77/79 · P dest **5** at 14/27/90/115/203. slug P dest **3** at 16/29/212. |
| 26 | YAML metadata 행 | 블록 18–21. `components_harvested` P dest 2 at 21/221. | **17–21** (`omd` 17). `tokens.source \| reconciled` 19; exact `tokens.source: reconciled` dest **0**. `components_harvested` P dest **3** at 21/151/226. |
| 27 | YAML `ds.type` 행 | `ds.type: brand` at 24/31. 24는 표 `ds.type \| brand`. | 표 24 · exact dest **1** at 31. native-banking 문장 DESIGN dest 1 / P dest 2. |
| 28 | YAML `tokens.note` 행 | 전사 73–75. 73–74는 Tier 2. | **76–80**. |
| 29 | YAML family 행 | 645 at 13/134 (줄만). | dest **3** at 13×2/134. |
| 30 | YAML spacing 행 | `tokens.spacing.md` DESIGN dest 6 / P dest 2. `tokens.spacing.lg` dest 미기재. | md DESIGN dest **8** at 97/101/113/160/218×2/268×2 · P dest **4**. lg DESIGN dest **4** at 98/101/292×2 · P dest **3**. sm dest 1/2 유지. |
| 31 | §11 행 | narrative-not-token P 226 (공백; 파일 `wc -l` 225였다). closing dest 미기재. | P **230**. `Those product layers require their own evidence` DESIGN dest **1** at 15. |
| 32 | §12 행 | inventory 185–208 (24). 185는 claim ledger 마지막 행. | **187–221** (데이터 193–221, 29행). |
| 33 | Sibling 절 | 전사 87–108 · sibling-only 110–118. 87은 공백, 102부터 sibling-only 머리, 104–111이 목록. | 전사 **88–100**. sibling-only **104–111**. |
| 34 | Deviations | B2a 24=24 · `wc -w` 4,297 · worker SHA만. | 29=29. `wc -w` **4,562**. auditor SHA `76f7efa134f5f3b3807631a0628718a95dde90ce84b1d59623fd829451443152`. worker-close `85cacaac…` 유지. |
| 35 | F1 | 24항목 = 24. | 29항목 = 29. 확장 7 + 신설 5를 목록에 반영. |
| 36 | F2 | 24=24. dual dest를 착수 숫자로 적음. | 29=29. `#ffe300` / slug / note 76–80 / spacing dest를 실측으로 갱신. |

Destination SHA `85cacaac…` → `76f7efa134f5f3b3807631a0628718a95dde90ce84b1d59623fd829451443152` (한정 신설·확장 후). 줄 수 DESIGN `wc -l` **353** 불변. provenance 225→**230**.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 네 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(`ds.type: brand`, 발행 1차 UI 사양 없음, v12 전제 주석).
- Audience — 원본 §13 네 과제 컨텍스트 원문. 이름·나이·도시·동기·소속 분류를 재구성하지 않음.
- Semantic 역할 행의 원본 use 문장 — `:77` 포괄절이 슬롯팅을 덮음. "Earlier … are not retained"는 원본 §2 문장.
- Motion `:123` B3 다섯 종류+게이트 — 본문 전문 실재 (E2c 유지).
- Type roles 표 px 철자 — 원본 §3. `:149`가 unitless keep-both를 덮음.
- Layout `:300` — 원본 §8 문장. `:298`/`:302`가 계약·측정 읽기를 덮음.
- B3 준수 주장 — `DESIGN.md` 123이 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트를 전문으로 담음.
- 2차 목적지 전수: inspected `https://www.kakaobank.com/` DESIGN dest 4(접두 포함) · YAML no-slash homepage는 P 13/27 · `#ffe300` DESIGN dest 2 · `kakaotalk` DESIGN dest 1 · `does not substitute for native banking-product UI evidence` DESIGN dest 1 · `native banking-product controls are not inferred` DESIGN dest 1 · `Those product layers require their own evidence` DESIGN dest 1 · `tokens.rounded.full: 9999` DESIGN dest 1 · `not in the token set` DESIGN dest 0 · `loading \| not-applicable` dest 2 · `loading \| applicable` dest 2 — fitpet형 0회 2차 목적지 없음.
- A1 키 경로: 원본 `tokens.components` 5레코드의 type/bg/fg/radius/padding/height/font/states/use/border가 각 블록에 행으로 있음. icook형 필드 소실 없음. 값 복원 없음.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/kakaobank/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — KakaoBank / 카카오뱅크, KakaoBank Yellow `#FFE300`, Brand Resource / V2.0 identity guide, KakaoBank mini, Pretendard Variable, 원본 §12 원칙 · §7 Do/Don't · §10 보이스 · §11 결론 `Those product layers require their own evidence`, YAML `use` 바이트.
- **관측 기술** — hex · unitless `1.3`/`1.24`/`1.36`/`1.44`/`1.5` · 90/42/32/24/16/14 type · 62/43/42 height · `0 20px` / `16px 0` / `9.5px 18px` / `10px 16px 10px 20px` · 645 · `swiper-icons` · `Primitive type`.
- **편집적 해석·인과 판단** — 세 표면을 계약 표면으로 읽기, 값의 표면 귀속, Brand Resource≠native UI, 절제·yellow-as-identity, 서사≠토큰, 과제 선정·not-biography, 청중 그룹·개인 페르소나 거부, 특성 묶기, 원칙·Do/Don't, role names-from-labels, spacing/shape 키 분리, 역할 크기 ≠ 공유 숫자, elevation 경계, motion 게이트, 폰트 증거 class, fallback 금지, type-role keep-both, Simple Icons pointer, applicability·not-complete-coverage, 보이스 레지스터, named-values-not-permissions.

세 번째 부류 중 24곳은 착수 시 인접 완전형이 있었고, 그중 7곳은 같은 단락의 다른 판단을 이름하지 않아 범위를 닫았고, 5곳은 한정이 없어 신설했다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

`find`로 5파일 확인 후 `grep -o <패턴> <파일> | wc -l` 파일별. 카피는 `grep -oF`.

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 29 | 1 | 3 |
| `not KakaoBank-authored` | 29 | 2 | 4 |
| `separately published UI specification` | 29 | 2 | 3 |
| inventory 데이터 행 | — | 29 | — |
| `Primitive type: \`button\`` | 3 | 0 | 0 |
| `Primitive type: \`tab\`` | 1 | 0 | 0 |
| `Primitive type: \`listItem\`` | 1 | 0 | 0 |
| `not in the token set` | 0 | 0 | 1 |
| `#ffe300` | 2 | 5 | 6 |
| `kakaotalk` | 1 | 3 | 1 |
| `tokens.spacing.md` | 8 | 4 | 3 |
| `tokens.spacing.lg` | 4 | 3 | 3 |
| `tokens.rounded.full: 9999` | 1 | 0 | 3 |
| `Those product layers require their own evidence` | 1 | 0 | 1 |
| `loading \| applicable` | 2 | 0 | 2 |
| `loading \| not-applicable` | 2 | 0 | 1 |
| `components_harvested` | 0 | 3 | 2 |
| `77/100` | 0 | 3 | 2 |
| `#1e1e1e` | 0 | 3 | 2 |
| `SF Mono` | 0 | 3 | 2 |
| B3 다섯 종류+게이트 (`DESIGN.md` 123) | 1 | 0 | 1 |

provenance·migration-log의 같은 문자열은 mention이지 본문 use가 아니다.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared **1** / candidates **151**. `verdict: PASS`는 대조한 바늘 중 손실 없음이지 카피 보존이 아님. 손 대조 발행 라벨 10/0/0 (KakaoBank / 카카오뱅크 / KakaoBank Yellow / KakaoBank mini / Pretendard Variable / KakaoBank Brand Resource / `#FFE300` / `#FEE500` / `#FAE100` / Kakao Friends). `latin-copy-audit` 1 lost = `", captured:"`(YAML 메타; 발행 카피 0). 발행 라틴 손실은 안 보임.
- **B1.** sibling 전용 `77/100` / `#1e1e1e` / `SF Mono` / `whisper` / `four collected` / `24 color` / `20 component` / `12/16px` / `artifacts/reference-evidence` DESIGN dest **0**. sibling `h3`/`H3` dest 0 (sibling에도 0). 값·구조 관측 침투 없음. `coverage` DESIGN dest 1은 `:178` "state-coverage claim" 부분문자열이지 sibling 점수 승격이 아님.
- **D2a.** 삭제 처분 행은 무식별(원본 §13이 이름·나이·도시를 만들지 않음; 네 과제 컨텍스트만 Primary tasks+Audience에 원문). 이름·나이·도시 dest **0**. `income` / `risk tolerance`는 원본 §13의 unspecified 필드 목록이지 페르소나 전기가 아님. 동기·소속 분류 발명 0. hubspot형 새 그룹명 없음.
- **E2d.** 부재 단언 행이 자기 분모에 그 문자열을 넣고 「세 파일 어디에도 없다」고 단언한 형태 없음. sibling-only 절은 mention-not-use를 적고 부재를 단언하지 않음. 「Measured DESIGN.md 0」은 DESIGN을 분모로 하고 로그 자신을 분모에 넣지 않음.
- **A1.** 원본 YAML 컴포넌트 5레코드의 type/bg/fg/radius/padding/height/font/states/use와 service-tab·brand-spec-row `border`가 각 블록에 행으로 있음. `brand-spec-row`는 YAML에 height/states 없음 — 산출도 Height/Observed 없이 C4 omit. 필드 소실 없음.

원본 `web/references/kakaobank/**` 미수정. 카탈로그 채택 아님.

AUDIT_DONE fixes=36
