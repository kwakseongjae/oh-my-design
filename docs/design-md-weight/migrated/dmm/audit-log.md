# DMM.com (Turtle) 감사 로그 — B2a·E2 전담

감사자: 이관 세션과 분리된 신선한 세션(F3).
대상: `docs/design-md-weight/migrated/dmm/{DESIGN.md,provenance.md,migration-log.md}`
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v9** — B2·B2a, E1·E2·E2a–c 만.
원본 `web/references/dmm/DESIGN.md`는 읽기만 했다(수정 0).
일자: 2026-08-26

절차: (1) DESIGN.md 481행 전 문장을 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로
분류, (2) migration-log 72행 전부를 세 파일 grep으로 대조, (3) provenance derived 범위를 본문
실제 한정 지점과 대조, (4) portable 본문의 이관 내부 개념 스캔.
DESIGN.md 행수는 481행 그대로 유지했다 — migration-log가 인용하는 행 번호가 전부 유효하다.

## 수정 (12건)

### B2a — 한정 불완전 (3건, DESIGN.md)

권위 한정이 "not DMM-authored"에서 끊겨 공식 doctrine과의 구분이 끝나지 않은 자리.
B2a(apple §1.2: 인접해도 불완전하면 FAIL)에 따라 evidence class를 끝까지 닫았다.
**한정을 제거한 자리는 없다 — 세 건 모두 추가 방향이다.**

1. **235행** (컴포넌트별 state applicability 역할 판정) — `… and is not DMM-authored.`
   → `… and is not DMM-authored or a separately published state-applicability specification.`
2. **393행** (소비자 디렉토리 밀도를 "built for breadth"로 읽는 문장) — `… it is not DMM-authored.`
   → `… it is not DMM-authored or a separately published layout specification.`
3. **441행** (발행 문자열을 "forbidden register"로 프레이밍) — `… and is not DMM-authored.`
   → `… and is not DMM-authored or a separately published voice guideline.`

나머지 15개 한정(17·36·56·66·79·151·167·182·205·211·218·400·416·431·443행)은 완전형이며
인접 위치도 맞아 그대로 두었다. 원본 저자의 평가·해석 문장(§1 "defining"·"restrained",
§6 shadow philosophy, §7 Do/Don't 판단어, §12 UI implication 등)도 전부 한정 아래에 있음을
확인했다.

### E1 — portable 본문에 노출된 이관 내부 개념 (3건, DESIGN.md)

독자가 알 수 없는 우리 쪽 개념이 본문에 있었다. 사실과 값은 그대로 두고 문장만 다시 썼다.

4. **163행** — `The legacy document carried one cubic-bezier per role …, and one of the three is
   the value the legacy spec template ships as a non-brand implementation default.`
   → `The source record carries one cubic-bezier per role with no observation behind any of them,
   and one of the three is byte-identical to a generic non-brand implementation default rather
   than to a measured DMM value.`
   B3 승격 게이트 전문(다섯 증거 종류 + 컴포넌트별 computed 조건 + 약화 문구 거부)은 손대지 않았다.
5. **218행** — `preserved from the source while the catalog graph is not adopted`
   → `carried over in full from the source record`. (`catalog graph`는 이관 내부 상태다.)
6. **481행** (Governance Named gaps) — `- the catalog's Google favicon proxy entry as a first-party DMM mark`
   → `- a first-party DMM mark file — the logo on record is a third-party Google favicon proxy
   rather than a DMM-published mark`. (`the catalog`은 이관 내부 개념. 미해상 대상은 그대로 유지.)

### 3 — provenance derived 범위가 실제보다 좁음 (1건, provenance.md)

7. **provenance.md 104행 「Derived editorial interpretation」** — 한정 지점을 8개(Scope 두-register,
   ABCDE, elevation, motion, typography rules, state contract, responsive bands, voice)만 열거했으나
   본문 실제 한정은 18개소다. 누락돼 있던 Distinctive traits 명명, Application rules 처방,
   Avoid 판단어, 폰트 pragmatism 읽기, 에셋 shadowless 일관성 읽기, state applicability 역할 판정,
   Grid의 소비자 디렉토리 밀도 읽기, Density 해석분, β·「(準備中)」 gloss + tone 표,
   forbidden register 프레이밍을 포함해 18개소 전부로 넓혔고, 원본이 지목한 3개 해석보다
   한정 집합이 더 넓다는 사실을 명시했다. 창업사 증거 등급 한정도 함께 적었다.

### E2·E2a — 로그 목적지 불일치·이중 목적지 누락 (5건, migration-log.md)

grep 대조 결과 실제 disposition과 다른 자리만 **로그를** 고쳤다(본문 무수정).

8. **19행** `YAML tokens.typography.family.*` 목적지 `Typography & Assets Font evidence·Family`
    → `Font evidence`. §3에 `Family` 하위 절은 존재하지 않는다(§3 = Font evidence / Type roles /
    Type rules / Assets). 존재하지 않는 목적지를 적은 E2 불일치.
9. **29행** `§3 Font Family` 같은 오기 수정 + 세 번째 불릿("자체 서체 없음")이 Font evidence 표
    `Brand-owned typeface` 행으로 가고 거기 붙은 "do more with less" 실용주의 읽기가 182행 한정으로
    간 경로, 그리고 모토 문자열이 Content & Locales에도 있는 이중 목적지를 기재.
10. **56행** `§11 Turtle 구성` — 목적지가 `Experience Scope` 하나로만 적혀 있었으나 Figma community
    library·Storybook·Turtle MCP는 Assets 209·210행에도 존재. 이중 목적지로 정정(E2a).
11. **67행** `HTML 주석 Tier 1 live inspect` — resources 페이지 줄(Figma library, GitHub/Storybook,
    `(準備中)` 라벨)이 원장뿐 아니라 portable Assets 209행에도 실렸는데 목적지에 없었다. 이중
    목적지로 정정(E2a).
12. **F2 대조 문단** — 위 두 이중 목적지를 F2 목록에 추가.

## 확인했으나 수정하지 않은 것

- **E2c 준수 주장**: 로그가 주장하는 유일한 준수 주장은 B3다. DESIGN.md 163행에 다섯 증거 종류
  전문 + 컴포넌트별 computed 관측 조건 + "단일 커브 확인은 게이트를 만족하지 않는다"가 실재한다.
  Named gaps 479행 요약도 실재. 주장이 본문보다 강하지 않다.
- **로그 삭제 행의 사유**: §9 Quick Color Reference 9줄(9개 값 전부 Foundations에 동일 역할로 실재),
  §9 Iteration Guide 7단계, §9 프롬프트 5개(단 pill의 `transparent on dark`는 267행에 실재),
  §13 페르소나 4명(본문·provenance 어디에도 인구통계 재수록 없음), §15 cubic-bezier 3개
  (`spec/omd-v0.1.md:267`의 `ease-exit` 기본값과 바이트 동일 확인) — 전부 grep으로 사유와 실제
  disposition 일치 확인.
- **값 대조**: frontmatter 20개 hex + `#0000ee`, 일본어 라벨 20종(`トップ`·`エラー`·`必須`·
  `業界最高`·`(準備中)` 포함), rem 병기 9개, unitless line-height 3개 전부 본문 실재.
  `hangul-adjacent`·`workhorse` 삭제도 확인. 토큰 값·컴포넌트 표·상태 applicability·섹션 구조는
  건드리지 않았다.
- **`Core §4.4` 참조(233·235행)**: Core v2 스펙 절 번호이지 이관 규칙집 조항 번호가 아니라
  E1 위반으로 보지 않았다(이관본 106건 중 93건 공통 표기). 웨이브 번호·규칙집 조항 번호는
  본문에 0건.
  - *개정 세션 정정 (2026-08-26, 웨이브 21).* 위 "233·235행"은 실측과 다르다 — 개정 시점
    `grep -n "Core §4.4" DESIGN.md`는 **233행 1곳뿐**이다(235행은 `Core §4.4`를 담고 있지 않다).
    감사 기록이므로 원문 표기는 고쳐 쓰지 않고 실제 상태만 덧붙인다. 판정 자체(E1 위반 아님)는
    행 수와 무관하므로 그대로 유지된다.
- **게이트 오탐 없음**: `--gate-only` → `PASS`, `problems: []`. E3에 해당하는 표기 왜곡 회피 시도는
  발견되지 않았다(provenance 원장 hex도 전부 정상 `#` 표기).

## 범위 밖 발견 (수정하지 않음, 보고만)

- `legacy spec template`(17건 이상), `catalog graph`(78건), `the source`(90건)는 dmm만이 아니라
  이관본 전반의 관용 표기다. dmm에서는 감사 지시에 따라 고쳤으나, 같은 표현이 다른 브랜드
  portable 본문에도 남아 있어 E1 기준으로는 코퍼스 수준 결정이 필요하다. `the catalog's`만은
  코퍼스 전체에서 dmm 1건뿐이었다.
- 원본 §2 `Raised Surface` 항의 "The surface-step that replaces shadows." 문장이 이관본
  Semantic color에서 빠져 있다(같은 취지는 Elevation 절에 존재). A-계열이라 이번 범위 밖.

AUDIT_DONE dmm fixes=12
