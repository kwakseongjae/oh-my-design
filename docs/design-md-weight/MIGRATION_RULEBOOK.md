# 마이그레이션 규칙집 — legacy → Core v2

> **v10 · 2026-08-26.** 이 파일이 워커에게 주어지는 하드 룰의 정본이다.
> `migrate-reference.mjs`가 이 파일을 읽어 워커 프롬프트에 넣고, 각 migration-log가
> 사용한 규칙집 버전을 기록한다.
>
> **규칙은 결함에서 나온다.** 아래 각 조항은 실제 FAIL에서 태어났고 출처 판정문을
> 단다. 새 결함 계층이 발견되면 이 파일이 먼저 자라고, 그 다음 개정이 돈다.
> 기계화 가능한 조항은 게이트(`migrate-reference.mjs`)에도 복제되어 있다 — 게이트가
> 잡는 것은 워커가 어겨도 차단되지만, 게이트가 못 잡는 조항일수록 워커가 지켜야 한다.

## A. 값 보존 (기계 게이트 있음)

- **A1.** 검증된 값 손실 0, 발명 0. `[FILL IN]` 신규 작성 금지 — 미해상은 최소
  필드/그룹 경계에서 생략한다.
  - **A1a. 값의 형태도 값이다.** unitless line-height(`1.71`)를 고정 px(`24px`)로
    바꾸면 스케일 의미가 죽는다 — 검증된 비율은 비율로 보존한다. *(linear.app —
    `t2-1-wave1-2026-08-23-sol-full.md` §3.1; 게이트 기계화: legacy의 unitless
    lineHeight 값이 산출물에 남아야 함)*
  - **A1b. 검증된 primitive type은 손실이다.** `type: button`을 `Kind: interactive`로
    뭉개면 button/link/tab 구분이 죽는다. 검증된 type은 컴포넌트별로 보존한다.
    *(apple·baemin·linear.app 공통 — 같은 판정 §1.1·§2.1·§3.1)*
  - **A1c. 검증 메타데이터도 값이다.** `ds.type: system` 같은 원장 필드를 provenance
    분리 시 누락하지 않는다. *(apple §1.1)*
- **A2.** §14 States 본문 보존 (graph 0/440 동안). §9 도구 명령·프롬프트는 삭제하되
  **보편 규칙만** Governance로.
- **A3.** §9류 요약 표를 삭제할 때, 그 표에만 있는 고유 근거값은 삭제 대상이 아니다.
  받을 Components/Foundations 슬롯이 있으면 반드시 옮긴다. *(notion: Help search의
  transparent field가 §9에만 있었는데 "이미 다른 데 있다"는 틀린 사유로 삭제됨 —
  `t1-4-notion-2026-08-23-sol-spotcheck.md` §2)*
- **A4.** 검증된 필드 결합을 다른 역할로 합치지 않는다. `help-search.fg: #000000`은
  그 컴포넌트의 renderable field이지 일반 Ink가 아니다. *(같은 판정 §2)*

- **A5.** 브랜드가 발행한 문자열은 **바이트 그대로** 옮긴다. 라벨·CTA·포럼명·
  마이크로카피·사명은 값이지 서술이 아니다 — 번역·의역·대소문자 정규화·영문
  대체는 전부 손실이다. 원문이 비라틴 문자면 그 문자로 남기고, 독자를 위한 영문
  설명이 필요하면 원문 **옆에 병기**하되 원문을 대체하지 않는다. 검증 sibling이
  측정 대상으로 명기한 문자열도 같은 급으로 취급한다.
  *(datadog §4·§10 — `SEE THE PLATFORM`이 "inspect the platform"으로 재작성되고
  검증 카피 6종이 소실; dcard §10 — 번체 포럼명 9종(`女孩`·`男生`·`心情` 등)이
  영문 의역으로 대체되고 레지스터 대비 `你`/`您`가 소실. 원문 자신이 "Never
  bilingual labels; the forum name IS the space"라고 못박은 자리였다)*

## B. 증거 종류와 승격 (게이트 부분 기계화)

- **B1.** 관측의 증거 종류를 승격하지 않는다. 일반 `Focus` 캡처는 `focus-visible`
  treatment의 증거가 아니다 — `focus-visible` applicability는 의미로 유지하되
  treatment는 미해상으로 두고, 원 관측은 별도 observed state로 보존한다.
  *(notion §1 — 게이트: 원본에 focus-visible이 없는데 이관본 focus-visible 행에
  색값이 있으면 차단)*
- **B2.** 파생/편집적 해석은 그 한정("derived editorial interpretation, SEED 계약
  밖")을 **portable 본문에** 함께 적는다. 권위 한정을 provenance로만 밀지 않는다.
  *(karrot spring — `t1-3-golden-2026-08-23-sol-review.md` §2A)*
  - **B2a-예문 (승인본 toss에서 그대로).** Principles 머리에 이 형태를 쓴다:
    > "These N items are a derived editorial implementation inference from the
    > verified surfaces; they are not <Brand>-authored or a separately published
    > UI specification."
    이 카탈로그의 레퍼런스는 전부 근거 기반 재구성이므로 Principles에는 이 한정이
    있어야 하고, Scope 등 다른 절의 인과·편집적 해석 문장에도 같은 원칙이 적용된다.
    **게이트 기계화 없음 — sol 레인 전담.** 섹션 존재 휴리스틱으로 기계화를 시도했다가
    승인본을 차단하고 실제 위반(섹션 밖 해석 문장)을 놓쳐 철회했다. 위반은 문장
    단위 판단이라 기계로 잡히지 않는다.
  - **B2a.** 한정은 해당 원칙 **인접**에 있어야 하고, **evidence class를 끝까지
    구분**해야 한다: "derived editorial implementation inference / not <브랜드>-authored
    or separately published UI specification". "verified surfaces에서 derived"까지만
    적으면 공식 doctrine과의 구분이 안 끝난 것이다. Governance 일반 문구는 대체물이
    아니다. *(bilibili §2.1; apple §1.2 — 인접해도 불완전하면 FAIL)*
- **B3.** 미해상 motion의 승격 조건은 Foundations 본문에 남기되, **다섯 증거 종류를
  전부 명시**해야 한다: transition properties · animation name · duration · easing ·
  reduced-motion behavior, 그리고 「컴포넌트별 computed 관측 후에만」이라는 게이트.
  "공식 출처로 검증될 때까지" 같은 약화 문구는 curve 하나 확인으로 충족될 수 있어
  동치가 아니다. *(29cm §3B; toss —
  `t2-1-wave1-2026-08-23-sol-sample.md` §1.1)*

## C. State applicability (게이트 부분 기계화)

- **C1.** `not captured` / `not named`는 `not-applicable`의 사유가 될 수 없다.
  applicability는 컴포넌트 의미로 판정하고, 미해상 시각 treatment는 값만 생략한다.
  *(3건 공통 — 게이트 기계화됨)*
- **C2.** 반대 방향 발명도 금지다. loading/error/success를 primitive 종류만으로 **역할 판단
  없이 일괄** `applicable`로 만들지 않는다. `"Interactive control"`·`"Button control"`은 그
  일괄 행위의 **진단 표지이지 금지 문자열이 아니다.** 역할상 그 상태가 의미 있으면
  `applicable`을 유지하고 미해상 treatment만 생략한다(C1). tab·arrow·dialog trigger·toggle·
  destination link처럼 **커밋하는 연산이 없는 역할**이면 `not-applicable`로 두고, 관측 부재가
  아닌 의미상 이유를 적는다. *(notion §3 — 조문 개정 2026-08-26, grok-4.6 판정. 근거·실측은
  `docs/reviews/t2-1-c2-ruling-2026-08-26-grok.md`)*
- **C3.** state coverage 완료를 주장하지 않는다. *(게이트 기계화됨 — 부정문 허용)*
- **C4.** interactive-kind 근거가 없는 컴포넌트는 kind와 applicability map 자체를
  생략한다. 확정하지 않는다. *(29cm Product Grid Item — 승인된 처리)*

## D. 범위와 부정 claim

- **D1.** 원본에 없는 도메인의 coverage 문구를 새 부정 claim으로 만들지 않는다.
  표본 범위가 marketing/Help면 storefront 문장은 존재할 수 없다 — 미해상의 최소
  경계 생략은 "안 적는 것"이지 "안 됐다고 적는 것"이 아니다. *(notion §4 — 게이트:
  부정 claim 문장의 내용어가 원본에 없으면 차단)*
  **D1a.** D1은 문장만이 아니라 **명사구 목록**에도 걸린다. `Named gaps: A, B, C`
  형태로 도메인을 열거하는 것은 "그 도메인이 존재하되 미해상"이라는 주장이고,
  원본이 그 도메인의 존재 자체를 세우지 않았다면 D1 위반이다. 게이트의 D1 검사는
  부정 **문장**(`not captured` / `were not` / `않았다` …)만 트리거하므로 명사구
  목록은 통과한다 — 이 조항은 워커와 검토자가 지켜야 한다.
  *(databricks·datadog §Named gaps — 원본에 0회인 `native-client`·`parity`·
  `authenticated`를 미해상 도메인으로 열거. 두 건 모두 게이트 PASS 상태로
  의미 검토에서 잡혔다)*
- **D2.** 가상 페르소나는 승격도 provenance 재수록도 금지. 독립 검증된 task만
  claim한다. **게이트 기계화 없음 — sol 레인 전담.** *(karrot §13 —
  `t1-3-golden-2026-08-23-sol-review.md` §2B; grok 조건 2, `t2-1-open-2026-08-23-grok.md`)*

## E. 분리 원칙

- **E1.** 출처 원장·freshness·Proof·claim ledger는 `provenance.md`로 분리한다.
  단, standalone 해석에 필요한 한정(권위·증거 종류·경계)은 본문에 남긴다.
- **E2.** migration-log는 legacy 섹션별 [옮김→어디 / 분리→provenance / 삭제+사유]
  표이며, **사유는 실제 disposition과 일치해야 한다.** 삭제라고 적고 실제로는
  합쳤거나, "이미 있다"고 적었는데 없는 경우가 실제로 났다. *(notion §2)*
  - **E2a.** 한 값이 두 곳으로 가면(예: favicon이 provenance와 portable Assets 양쪽)
    로그는 **두 목적지를 모두** 적는다. *(toss — `t2-1-wave1…` §1.2)*
  - **E2b.** placeholder wrapper를 provenance 생략 원장에 보관하면 그 보관도 로그의
    disposition이다 — "값 생략"만 적으면 불일치다. *(bilibili — 같은 판정 §2.2)*
  - **E2c.** 준수 주장은 실제 본문보다 강하게 적지 않는다. 로그가 "B3 유지"라고
    적으려면 본문이 실제로 B3 전문을 담고 있어야 한다. *(toss §1.1)*

## F. 의무 최종 패스 (절차 — 하네스가 워커 프롬프트에 강제)

- **F1. B2a 스캔.** 본문 완성 후 전체를 재독하며 인과·해석·판단 문장마다 근거 class를
  확인하고, 편집 해석이면 인접 한정을 붙인다. *(wave1–3 sol 판정)*
- **F2. E2 대조.** 로그 각 행은 실제 파일을 grep으로 확인한 뒤 쓴다. 이중 목적지는
  둘 다, 준수 주장은 본문 실재 시에만. *(wave1–3 sol 판정)*
- **F3. 별도 세션 감사 (v7 — F1·F2의 자기 수행 실패에 대한 구조 대응).** 웨이브 4에서
  워커가 F1·F2 수행을 **기록하고도** B2a·E2c를 놓쳤다 — 같은 저자는 자기 문장의
  해석성을 판단하지 못한다. 하네스가 이관 직후 **신선한 세션의 감사 워커**를 자동
  실행한다: B2a·E2 두 계열만, 목록 없이 탐지+수정, `audit-log.md` 기록. 값·표·구조
  수정은 금지. *(wave4 — `t2-1-wave4-2026-08-23-sol-{sample,full}.md`)*

- **E3. 게이트 회피 금지.** 게이트가 오탐하면 **표기를 왜곡해 피하지 말고 그대로 두고
  오탐을 보고하라.** 웨이브 15에서 워커가 provenance의 자매 소스 인용 hex를 게이트
  invention 오탐을 피하려 `# faf9f5`처럼 변형했다 — 값 표기의 왜곡은 원장의 존재
  이유(바이트 수준 검증)를 부순다. 해당 오탐은 게이트 쪽을 고쳤다(invention은 portable
  본문만 검사). *(wave15 — 게이트 회피 발견; wave16에서 codeit·coinbase가 B1 오탐을 문장 분할로
  회피해 E3 첫 적발 — B1 게이트를 표 행 형태로 한정해 오탐 원인 제거)*

## 개정 이력

| 버전 | 일자 | 추가 조항 | 출처 |
|---|---|---|---|
| v1 | 2026-08-23 | A1·A2·B2·B3·C1·C3·C4·D2·E1 | 골든 샘플 3건 FAIL (`t1-3-golden-2026-08-23-sol-review.md`) |
| v2 | 2026-08-23 | A3·A4·B1·C2·D1·E2 | notion 라이브 시험 FAIL (`t1-4-notion-2026-08-23-sol-spotcheck.md`) |
| v3 | 2026-08-23 | B2a·B3 명문화·E2a–c | T2-1 웨이브 1 표본 FAIL 2/2 — 신규 계층 없음, 기존 조항 정밀화 (`t2-1-wave1-2026-08-23-sol-sample.md`) |
| v4 | 2026-08-23 | A1a–c(값 형태·primitive type·메타데이터)·B2a 완전성 | 웨이브 1 전수 FAIL 3/3 (`t2-1-wave1-2026-08-23-sol-full.md`) |
| v5 | 2026-08-23 | B2a 예문 고정 (기계화 시도 후 철회 — 승인본 오차단·실위반 미검출) | 웨이브 2 표본 FAIL 2/2 — A1a·B3는 즉시 통과, B2a·E2만 재발 (`t2-1-wave2-2026-08-23-sol-sample.md`) |
| v6 | 2026-08-23 | F1·F2 의무 최종 패스 (규칙→절차 전환) | 웨이브 3도 같은 두 계열만 재발 — 규칙 지식이 아니라 스캔 절차 부재가 원인 (`t2-1-wave3-2026-08-23-sol-sample.md`) |
| v7 | 2026-08-23 | F3 별도 세션 감사 워커 (절차→구조 전환) | 웨이브 4: F1·F2 수행 기록에도 재발 — 동일 저자 맹점. 목록 받은 개정 세션은 4웨이브 연속 100% 수렴 → 신선한 세션에 탐지 임무 부여 (`t2-1-wave4-…`) |
| v8 | 2026-08-25 | E3 게이트 회피 금지 + 게이트 invention 범위를 portable 본문으로 축소 | 웨이브 15: 워커가 오탐 회피를 위해 hex 표기 왜곡 (`# faf9f5`) — cafe24·claude·classting 원장에서 발견·원복 |
| v9 | 2026-08-26 | **A5**(브랜드 발행 문자열 바이트 보존) · **D1a**(D1이 명사구 gap 목록에도 적용) | 웨이브 19: datadog이 검증 카피 6종을 의역·소실(`SEE THE PLATFORM`→"inspect the platform"), dcard가 번체 포럼명 9종을 영문 의역으로 대체 — 한 웨이브 두 건이 같은 계열. D1a는 databricks·datadog이 원본에 0회인 `native-client`를 미해상 도메인으로 열거해 게이트 PASS 상태로 통과 (`t2-1-wave19-20-2026-08-26-opus5.md`, `t2-1-a5-copy-loss-2026-08-26-opus5.md`) |
| v10 | 2026-08-26 | **C2 조문 개정** — 금지 대상을 문자열에서 **행위**(역할 판단 없는 일괄 개방)로 명확화 | 조문이 `"Interactive control"`·`"Button control"`을 금지 형태로 지목했으나 **승인 골든 샘플 3건이 그 형태를 사용**(musinsa 18·29cm 11·karrot 5)하고 이관본 96건 546회가 동형 — 조문과 승인 기준이 충돌. 최종 승인권자 판정: 골든 샘플은 v1(C1) 산출이라 C2 이후 미보수 상태이고, C2 출처인 notion 시정본은 Hero CTA를 그 형태로 남긴 채 지목된 네 자리만 역할 사유로 닫았다(실측: primitive 형태 21회와 역할 사유 12행 공존) (`t2-1-c2-ruling-2026-08-26-grok.md`) |
