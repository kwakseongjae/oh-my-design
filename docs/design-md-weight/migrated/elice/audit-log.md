# Elice 감사 로그 (F3 — 별도 세션)

대상: `docs/design-md-weight/migrated/elice/{DESIGN.md,provenance.md,migration-log.md}`
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v9** — B2·B2a, E1·E2·E2a–c 만.
원본 `web/references/elice/DESIGN.md`는 읽기만 했다. 토큰 값·컴포넌트 표·상태
applicability·섹션 구조는 건드리지 않았다.
일자: 2026-08-26

## 수정 (9건)

### 계열 B2a — portable 본문

1. **`DESIGN.md` §2 Motion (line 142)** — 한정문의 적용 범위가 easing role 배정을
   빼고 있었다. 본문 순서는 [duration 표] → [easing role→use 배정] → [motion rules]인데
   한정문이 "The durations above and these rules"라고 **열거**해서, 출처 원장이 §15 전체에
   아무 귀속도 주지 않았음에도 role 배정만 무한정 상태로 남았다(B2a: 인접해도 불완전하면
   FAIL). "The duration table above, the easing role assignments that follow it, and these
   rules"로 범위를 닫았다. 한정 문구 자체(derived editorial implementation inference /
   not Elice-authored or a separately published motion specification)는 그대로다.

### 계열 E1 — 이관 내부 개념 노출

2. **`DESIGN.md` §1 Audience (line 28)** — "carried into neither this contract nor **its
   provenance**"가 사이드카 파일을 본문에서 이름으로 불렀다. Elice는 알지만 이 파이프라인은
   모르는 독자에게 의미 없는 지시다. "are not carried into this contract"로 바꿨다. D2
   준수(페르소나 provenance 재수록 금지) 기록은 `provenance.md` 생략 원장과 migration-log
   §13 행에 이미 있으므로 손실 없음.
   `process-leak-check.mjs`는 이 형태를 **잡지 못한다** — `LEDGER_PATTERNS`의
   `/(in|into|to|from|with)\s+provenance/`가 소유격 "its provenance"를 비켜간다. 스크립트
   기준으로는 이관 전후 모두 elice 누출 0이었고, 이 건은 문장 판단으로 잡았다.

### 계열 E2 / E2a / E2c — migration-log 원장 대조

3. **E2c — B2a(F1 pass) 행** — "`generous` padding, `workhorse` radius … both
   characterizations survive, qualified, in §1 Avoid"는 **과장**이었다. 실측: `workhorse`만
   §1 Avoid에 살아 있고(`8px is the default workhorse`), `generous`는 세 파일 어디에도 없다.
   원본 같은 문장에서 함께 삭제된 `compact`(button padding)는 아예 로그에 없었다. 세 개
   전부를 명시하고 생존 주장을 `workhorse` 하나로 축소했다. **값 손실은 아니다** — 32px 카드
   패딩과 8px 16px 버튼 패딩은 §2 Spacing·§5에 그대로 있고, 삭제된 것은 원본 저자의 평가어뿐이다.
4. **E2a — §4 footer 행** — `분리 → provenance`만 적혀 있었으나 실제로는 이중 목적지다.
   Verified 날짜 2026-06-26과 Tier 1 URL 4개가 portable §1 Scope에 증거 경계로 들어가 있고
   `https://github.com/elicer`는 §3 Assets에 한 번 더 있다. 두 목적지를 모두 적었다.
   provenance 전용은 Tier 2 부정 결과와 "Conflicts unresolved: none"뿐임을 함께 명기.
5. **E2a — 이중 목적지 집계 주석** — "four rows above name two destinations each"가 4를
   말했으나 §4 footer(위 4번)와 §11 Brand Narrative까지 6행이다. 6으로 고치고 행을 열거했다.
6. **E2 — §4 Component Stylings 행** — Top Navigation Bar가 "the only carrier of the
   corporate item radius 8px and padding 8px 16px"라고 적혀 있었다. 8px corporate nav
   radius는 §2 Shape(`Medium (8px): buttons, corporate nav items, product inputs`)에도
   있으므로 배타 주장이 틀렸다. 8px 16px 패딩만 유일 보유로 남기고 radius는 §2 Shape 병기로
   정정.
7. **E2 — 원장 재검증 절 계수** — "컴포넌트 선언 9개 + Top Navigation Bar 1개 = §4의
   `###` 10개". 실측 §4의 `###`는 **12개**(Capture record, Product state contract 포함).
   "12개 중 10개"로 정정.
8. **E2 — 원장 재검증 절 계수** — "비라틴 published string 11종 전수 생존". 같은 파일 A5
   행의 목록은 12종(엘리스 포함)이고 엘리스는 본문에 실재한다(§1 Scope). 12종으로 정정하고
   목록에 엘리스를 넣었다.

### 감사 지시 3항 — provenance derived 범위

9. **`provenance.md` — "Derived-editorial scope carried in the portable body" 절 신설.**
   기존 원장은 derived/editorial 범위를 **원본이 스스로 라벨한 것**(§12 해석 2건, §13
   페르소나, §14·§15 귀속 부재)까지만 적고 있었는데, portable 본문은 그보다 훨씬 넓은
   범위(§1 Scope 읽기·Audience 그룹·Distinctive traits 사용 읽기·Principles 5·Avoid 10,
   §2 비호환 규칙·무그림자 읽기·모션 전체, §3 타이포 읽기 4, §4 상태계약 9행, §5 여백·
   반응형/터치타깃, §6 보이스·톤 표·금지 레지스터)에 한정을 붙여 두었다. 좁게 적힌 원장은
   결함이므로 실제 범위를 표로 기록하고, 그중 원본 자신의 라벨이 어디까지인지 구분했다.

## 확인만 하고 수정하지 않은 것 (워커 자체 보고 검증)

- **A1b (F2 적발분) — 사실이다.** §4의 Kind 행 10개 중 컴포넌트 9개가 각각 원본 `type`을
  명기한다: `button`×4, `tab`, `input`, `card`×2, `badge`. `card`/`badge`도 본문에
  `source \`type: card\`` / `source \`type: badge\`` 형태로 실재하므로 로그의 A1b 주장은
  본문보다 강하지 않다(E2c 통과).
- **tokens.colors 18 — 사실이다.** 원본 YAML `colors:` 18개(`web/references/elice/DESIGN.md`
  20–37행) = §2 Semantic color의 distinct hex 18 = provenance 청구원장 15행이 담는 18값.
  수정 워커의 19→18 정정이 맞다.
- **표본 검증한 다른 계수** — 상태계약 9행 ✓, Avoid 10항 ✓, Principles 5항 ✓, 모션
  지속시간 3개 ✓, 타입 역할 5행 ✓, `not-applicable` 3건 전부 Product Nav Item ✓,
  청구원장 색 15행/18값 ✓, 페르소나 이름·나이·도시 세 파일 0회 ✓, 원본 줄번호 포인터
  20–37 ✓. 틀린 것은 위 7·8번 두 건뿐이었다.
- **B3 (로그 51행) — 사실이다.** §2 Motion이 다섯 증거 종류 전부와 per-component 관측
  게이트, 단일 curve 불충분을 모두 문장으로 담고 있다.
- **게이트 수정(authority claim 분리) — 정당하다.** `scripts/design-md-core-conformance.cjs`의
  `GOVERNANCE_COPY.en.authority['evidence-backed-reconstruction']`는 정확히 한 문장이고
  `authorityBody === expectedAuthority` 바이트 일치를 강제한다. 확장 문장은 통과할 수 없다.
  옮겨진 Elice 고유 단서 두 문장(세 표면 라이브 검사 + 브랜드 공개 포지셔닝에서 조립,
  Elice 발행물 아님·발행 권위는 엘리스그룹)은 **같은 `### Authority` 제목 아래**,
  `claim-end` 직후·다음 claim 시작 전에 그대로 있다. 문장 삭제·축약·의역 없음.
  E1이 요구하는 "standalone 해석에 필요한 한정(권위·증거 종류·경계)은 본문에 남긴다"를
  충족한다. 선례 `digital-agency-jp` §7과 동일 형태임을 대조 확인했다.

## E3 — 오탐/판정 보류 보고 (수정하지 않음)

- **`Core §4.4` (§4 Capture record, line 188)** — 스펙 내부 포인터라 E1 후보로 잡았으나,
  승인된 골든 샘플 `musinsa/DESIGN.md:124`가 거의 동일 문장으로 쓰고 있고 이관본 110개 중
  96개가 같다. 하우스 표현으로 판단해 **그대로 뒀다**. 다만 `process-leak-check.mjs`의
  `MIGRATION_TERMS`는 `Core v2`를 누출로 잡으므로 두 표기가 같은 계열인데 판정이 갈린다 —
  코퍼스 차원 결정 필요.
- **`Catalog logo pointer` / "the catalog's logo reference" (§3 Assets)** — 여기서 catalog는
  브랜드의 카탈로그가 아니라 우리 레퍼런스 카탈로그다. 다만 110개 중 2개만 쓰는 표현이고
  값 왜곡 없이 substance(제3자 favicon 프록시, 브랜드 발행 자산 아님)를 전달하므로
  경계선으로 보고만 한다.

## 범위 밖 발견 (보고만)

- **A1/§11 서사 손실** — 원본 §11의 "브라우저에서 실제 코드를 작성·실행, 강사는 대규모로
  수업을 운영한다"는 창업 전제, 국내 기업·공공 대상 보안 태세, "What Elice refuses /
  What it embraces" 문단이 portable 본문에 없다. 로그 §11 행이 그 이전을 주장하지 않으므로
  E2 위반은 아니지만, 레포 하드룰의 "Reference depth is part of correctness" 기준으로는
  서사 근거 손실이다.
- **§2 역할 서술의 평가어 삭제(미기록)** — "A grounded, trustworthy violet-navy",
  "never pure black, for a warm premium read", "a near-black used as the marketing
  'action' color", "the **primary** separation device"가 §2에서 사라졌다. `generous`/
  `compact`와 같은 계열이고 값 손실은 없다. 로그가 생존을 주장하지 않아 E2c는 아니다.
- **§10 영문 병기 삭제** — 원본의 "(hands-on AI education you learn today and apply
  tomorrow)" 글로스가 없다. A5는 원문 보존을 요구하고 글로스는 선택이므로 위반은 아니다.
- **누출 검사기 갭** — `LEDGER_PATTERNS`가 소유격 사이드카 지시("its provenance")를
  놓친다. 같은 형태가 `deliveroo/DESIGN.md:32`, `doordash/DESIGN.md:33`에도 있다(둘 다
  현재 검사기 기준 미검출). 패턴 추가 후보.

## 게이트

```
node migrate-reference.mjs --brand elice --gate-only   → PASS, problems []
inspectDesignMd(...).conformance.portable_core         → true, reasons []
node process-leak-check.mjs                            → elice 누출 0
```

AUDIT_DONE elice fixes=9
