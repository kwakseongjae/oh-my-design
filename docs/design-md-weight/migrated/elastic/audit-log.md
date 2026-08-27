# Elastic UI — F3 감사 로그 (B2a·E2 전담)

감사자: 신선한 세션(이관 워커 아님). 규칙집 `MIGRATION_RULEBOOK.md` **v9**, 범위는 B2·B2a와 E1·E2·E2a–c 두 계열뿐.
원본 `web/references/elastic/DESIGN.md` 미수정 확인 — SHA-256 `4aa67cc6729e652561b0e2c5a72dbfef2adb524190140395d9ba30d90d06b384` (로그 기록치와 동일).
토큰 값·컴포넌트 표·상태 applicability·섹션 구조는 건드리지 않았다. 한정은 하나도 제거하지 않았고 세 곳에서 넓혔다.

## 수정 (9건)

### B2a — 인접·완전 한정 누락 (portable 본문, 3건)

1. **§1 Scope — 증거 도메인 분리 문장이 인접 한정에 이름이 없었다.**
   문단 1의 “Corporate marketing, EUI documentation, and the supplied public component surfaces are separate evidence domains”는
   이 재구성의 증거 분류 판단인데, 문단 2의 한정은 *발행 규격 vs 라이브 관측* 분리와 계약 경계·생태계 포지셔닝만 이름으로 들고 있었다.
   같은 성격의 판단이 Foundations(마크/로고 계열)와 Named gaps(범위 밖 배치)에서는 이미 한정을 달고 있어 기준이 불일치했다.
   → 문단 2 한정에 “treating corporate marketing, EUI documentation, and the captured public component surfaces as separate evidence domains”를 추가.

2. **§1 Audience — 한정이 *needs* 문장만 덮고, 세 집단을 고른 행위는 덮지 않았다.**
   기존 문장은 “The group names themselves stay at stakeholder level…”로 오히려 이름 자체를 무주장(non-claim)으로 규정하고 있었다.
   공급 자료는 자기 오디언스를 세우지 않으므로 세 집단의 **식별 자체**가 파생 편집 추론이다(Primary tasks에서는 워커가 이미 선정 행위를 한정했다 — 같은 처리가 여기엔 없었다).
   → “Identifying these three groups — the supplied material declares no audience of its own — and stating what each one *needs* are a derived editorial…”로 확장. 기존 stakeholder-level 문장은 유지.

3. **§3 Assets — 해석 문장이 한정 *뒤*에 놓여 한정 밖에 있었다.**
   “Elastic’s product logos and functional icons stay in that same brand-asset domain rather than becoming EUI asset tokens here”는
   도메인 분류 판단인데 한정 문장 다음에 와서 인접 한정의 지시 대상이 아니었다(한정은 logo record 판독만 이름으로 들었다).
   → 해당 문장을 한정 앞으로 옮기고, 한정에 “holding Elastic’s product logos and functional icons in the brand-asset domain rather than among this contract’s asset values”를 명시해 두 판단을 모두 덮게 했다. 문장 내용은 그대로.

### E2 / E2a / E2c — 로그가 실제 disposition과 어긋난 자리 (migration-log, 5건)

4. **`tokens.note` 행의 목적지가 틀렸다(E2·E2a).**
   로그는 “Portable Scope carries the same boundary in prose: … and declared-only fonts are separate evidence domains”라고 적었으나,
   grep 결과 Scope에는 `declared-only`가 없다(본문 9·15행). 그 절반은 **Typography & Assets**의 5분류와 `Declared-only` 행에 있다.
   → 목적지를 `Experience Scope + Typography & Assets + provenance`로 고치고 어느 절반이 어디로 갔는지 분리해 기술.

5. **§4 State boundary 행의 “verbatim” 주장이 본문보다 한 단어 강했다(E2c).**
   본문은 `The sidebar row **below**`이고 원본은 `above`다. 나머지는 전부 바이트 동일(문자열 비교로 확인).
   → “One word differs from the source and only one: the deictic `above` → `below` …”를 덧붙였다.

6. **§9 삭제 행의 재배치 근거가 실제와 어긋났다(E2).**
   “the flat 14px/500 sidebar row in Foundations Elevation”은 Elevation이 `14px/500`을 담고 있는 것처럼 읽힌다.
   Elevation은 평탄성만, `14px / 500 / 16px / Inter`는 Components 필드 목록에 있다.
   → 두 목적지를 분리해 기술. (§9이 이름한 나머지 값 `#ffffff`·`#1d2a3e`·`#0b64dd`·`#cad3e2`·Inter·14px·4px는 전부 기재된 목적지에서 grep 확인됨.)

7. **F1 기록의 개수가 자기 목록과 불일치(E2c).** “Twelve interpretive or causal passages”라고 적고 20개를 열거했다. → `Twenty`로 정정.

8. **Migrated DESIGN SHA-256 갱신.** 이번 감사의 본문 수정으로 해시가 바뀌었다.
   → `3b1a2cd8dcf57815ce056d0d0d8a28d9badb545eb4e9685f1211762709de9e8a` (감사 전 `f3f1610b…`도 함께 기록).

### E1 / provenance 범위 정합 (1건)

9. **provenance `Derived scope:` 가 실제보다 좁게 적혀 있었다.**
   본문이 실제로 한정을 달고 있는 항목 중 9종이 목록에서 빠져 있었다 — 발행 규격/라이브 관측 분리, 3개 증거 도메인 분리, 프레임워크 포지셔닝,
   마크·제품로고의 brand-asset 도메인 판독, Inter 2도메인 합치 조건, 소프트웨어 vs 폰트 라이선스 분리, logo record 판독, 컴포넌트 보존·토글 인과,
   세 정적 관측의 토큰 일반화 거부, Named gaps의 범위 밖 배치.
   → 실제 본문 커버리지와 일치하도록 전수 열거로 교체(이번 감사가 추가한 Audience 식별·Assets 도메인 판단 포함).

## 검토했으나 수정하지 않음

- **중심 쟁점(EUI 공개 규격 vs 2026-07-13 3개 라우트 computed 캡처 분리)은 문장 단위로 지켜지고 있었다.** 전수 확인:
  §1 Scope 문단 2가 두 도메인을 명시 분리하고 “neither one is used to fill a value the other did not establish”를 선언;
  §3 증거표는 `Official product-use`(font-settings 문서)와 `Live computed surface-use`(810 uses)를 별행 유지;
  Inter 승격 근거는 “두 도메인이 독립적으로 명명했기 때문”으로만 서술되고(§3), provenance claim ledger의 method `computed-style-and-official-token-doc`와 일치;
  `EUI_THEME_BOREALIS`는 문서 사실로만 남고 토큰 승격이 명시적으로 차단됨(§1);
  Principles 머리 한정이 “stems = Elastic 발행 문서 패러프레이즈 / implications = 이 재구성의 판독”으로 두 층을 분리함;
  fallback stack(`system-ui`/Helvetica/Arial)은 캡처된 computed stack 근거로만 기술되고 규격 문서에서 끌어오지 않음.
  같은 웨이브 dropbox형 결함(한 도메인 관측이 다른 도메인 값을 뒷받침)은 발견되지 않았다.
- **B3 표기(워커 보고 확인 대상).** 본문 Motion은 다섯 증거 종류(transition property·animation name·duration·easing·reduced-motion)와
  「해당 컴포넌트별 computed 관측 후에만」 게이트, 그리고 “공식 문서의 curve/duration 하나로는 충족되지 않는다”는 약화 차단을 모두 담고 있고,
  바로 뒤 한정이 이 게이트를 **이 재구성의 진술**로 규정한다. 원본 §15가 말한 것처럼 읽히는 자리는 없다 — **E2c 아님**. 로그 §15 행의 “이 게이트는 원본에 없다”는 표기도 정확.
- **C4(유일 컴포넌트) 처리.** `docs-sidebar-category`에 interactive-kind 근거가 없어 kind·applicability map을 생략하고 “양방향 어느 쪽으로도 확정하지 않음”으로 남긴 처리는 본문·provenance·로그 세 곳에서 일치. (범위상 검증만 하고 수정 없음.)
- **Distinctive traits 5번째 불릿**(같은 도메인 분리 문장, 원본 §1 verbatim)에는 한정을 달지 않았다. 같은 §1 Experience 안에서 Scope 한정이 이 판독을 이름으로 들게 되었고, 승인 골든 샘플도 traits 불릿에는 한정을 두지 않는다. 구조·불릿 원문 보존을 우선했다.
- **F2의 “Fifteen values … dual-destination”**은 세는 단위가 규정돼 있지 않아(행 기준 12~19) 오류로 판정하지 않았다. 인접 목록이 있는 F1 “Twelve”와 달리 대조 대상이 없다.

## 게이트 / 기계 점검

- `node migrate-reference.mjs --brand elastic --gate-only` → **PASS**, problems `[]` (수정 후 재실행).
- `node test-v2/tools/process-leak-check.mjs` → elastic 미검출(E1 무누출). 110개 중 92개가 누출로 잡히는 스캔에서 clean.
- `inspectDesignMd` → `core-v2` / `portable-core` / `structurally_valid: true` / `portable_core: true` / `reasons: []`, 7개 claim 마커 각 1회.
- **E3 해당 없음.** 게이트 오탐을 만나지 않았고, hex·px·URL·selector·인용 문자열 표기를 게이트 회피 목적으로 변형한 곳은 없다. 이번 수정은 전부 산문이라 tokenBag에 새 값이 들어가지 않는다.

## 범위 밖 발견 (보고만, 수정하지 않음)

- **원본 §12 Principle 4의 출처 미기재.** “EUI’s color guidance asks authors to pair color context with icons or copy”가 인용하는 color-guidance URL이 `verification_v2.sources`에도 `_research.md` 추가 소스에도 없다. 원본 단계의 출처 원장 공백이며 B2a·E2 범위 밖이다.
- **“listed in the verification record”(§3 Licensing) / “the source ledger”(§3 Assets)** — 검증 산출물을 가리키는 표현이 portable 본문에 남아 있다. 앞의 것은 원본 문장 그대로이고 `process-leak-check.mjs`의 어느 패턴에도 걸리지 않지만, E1의 취지(본문은 브랜드만 아는 독자에게 자립)로 보면 경계선이다. 계열 전체 정책 문제라 단건 수정하지 않았다.
- **§4에 원본에 없는 `Role:` 필드가 추가돼 있다**(값은 원본 `use:` 문자열 유래). 컴포넌트 표 수정 금지에 걸려 손대지 않았으며, 값 발명은 아니다.

AUDIT_DONE elastic fixes=9
