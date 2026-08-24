# T2-1 웨이브 1 개정본 재확인 — sol 집중 재심

- 대상: `docs/design-md-weight/migrated/{toss,bilibili,apple,baemin,linear.app}/`
- 선행 판정: `t2-1-wave1-2026-08-23-sol-sample.md`의 Toss·Bilibili 재제출 조건, `t2-1-wave1-2026-08-23-sol-full.md`의 Apple·Baemin·Linear.app 재제출 조건
- 일시: 2026-08-23
- 범위: 선행 판정의 건별 재제출 조건만 재확인했다. Toss·Bilibili에는 당시 없던 v4 A1a·A1b·A1c·B2a 완전성의 위반 여부만 추가했다. 새 기준은 추가하지 않았다.
- 전제: ratio-loss·primitive-type-loss를 포함한 기계 게이트 5/5 PASS는 그대로 받았다.

## 판정 요약

| 대상 | 판정 | 남은 재제출 차단점 |
|---|---|---|
| Toss | **FAIL** | v4 A1b, B2a 완전성 |
| Bilibili | **PASS** | 없음 |
| Apple | **PASS** | 없음 |
| Baemin | **FAIL** | 기존 §13 재제출 조건 3의 first-party source mapping |
| Linear.app | **PASS** | 없음 |

## 1. Toss — FAIL

선행 재제출 조건 4항 자체는 **PASS 4/4**다.

- Foundations Motion은 다섯 증거 종류와 컴포넌트별 computed 관측 게이트를 모두 명시한다(`DESIGN.md` 103–105행).
- §15 로그는 실제 B3 본문과 일치한다(`migration-log.md` 34, 42–43행).
- favicon은 portable Assets에서 제거되고 identity-only provenance로 남았다(`DESIGN.md` 141–144행; `provenance.md` 15행; `migration-log.md` 13, 44행).
- 기계 게이트 PASS는 전제대로 수용했다.

그러나 Toss에 새로 적용되는 v4 조항에서 **2항이 남았다**.

- **A1a PASS:** 원본 line-height는 고정 px 문자열이며 unitless 비율 손실 대상이 없다(원본 133–138행; 이관본 132–139행).
- **A1b FAIL:** 원본은 여섯 컴포넌트의 `button / input / badge / toggle / button / button` type을 컴포넌트별로 검증한다(원본 143–148행). 이관본에서 명시적으로 남은 `Type`은 Badge의 `Type: badge`뿐이다(`DESIGN.md` 216–220행). 특히 두 marketing CTA는 `Kind: interactive`와 label anatomy만 남아 button/link 구분이 사라졌다(244–248, 269–273행). 따라서 검증된 primitive type의 컴포넌트별 보존이 완전하지 않다.
- **A1c PASS:** `ds.name/url/type/description`과 favicon metadata가 provenance에 보존됐다(`provenance.md` 15, 17–20행).
- **B2a 완전성 FAIL:** Principles 인접 한정은 아직 “derived from the verified surfaces, not quoted corporate doctrine”에 그친다(`DESIGN.md` 35–43행). 편집적 구현 해석이며 Toss-authored 또는 별도 발행 UI specification이 아니라는 evidence-class 경계를 끝까지 적지 않았다. v4가 명시한 바로 그 불완전 형태다(`MIGRATION_RULEBOOK.md` 44–48행).

**Toss 판정: FAIL.** 선행 v3 재제출 조건은 고쳤지만, 새로 적용된 v4 A1b와 B2a 완전성이 남았다.

## 2. Bilibili — PASS

선행 재제출 조건은 **PASS 4/4**다.

- 세 UI implication 바로 앞에 공식 Bilibili doctrine/별도 product-system specification이 아니며 공식 서사와 관측 표면에서 파생한 편집적 구현 해석이라는 한정이 있다(`DESIGN.md` 39–45행).
- §12 로그가 그 인접 한정을 실제 disposition으로 기록한다(`migration-log.md` 33, 45–46행).
- §8·§14·§15 로그는 `실질 제약 → portable / 원문 placeholder wrapper → provenance omission ledger` 분기를 모두 기록하고, 여섯 wrapper의 값을 채우지 않았다(`migration-log.md` 28, 35–36, 47행; `provenance.md` 123–132행).
- 기계 게이트 PASS는 전제대로 수용했다.

추가 적용된 v4 조항도 **PASS 4/4**다.

- **A1a:** 원본의 64px/22px/17px 역할값을 같은 형태로 보존했다(원본 165–169행; 이관본 121–127행).
- **A1b:** 검증된 `card / badge / card`를 각 컴포넌트의 `Type`으로 보존했다(`DESIGN.md` 155–181행).
- **A1c:** identity와 schema/freshness metadata를 provenance에 보존했다(`provenance.md` 5–24, 26–36, 113–117행).
- **B2a 완전성:** 위 인접 한정이 editorial interpretation과 비공식/비별도발행 evidence class를 끝까지 구분한다.

**Bilibili 판정: PASS.** 요청 범위 안의 잔여 차단점이 없다.

## 3. Apple — PASS

재제출 조건은 **PASS 6/6**다.

- `ds.type: system`을 provenance에 복원했다(`provenance.md` 17–20, 26행).
- 세 marketing component 모두 `Type: button`을 컴포넌트별로 보존했다(`DESIGN.md` 151–155, 177–181, 204–208행).
- Principles 인접 본문이 derived editorial inference이며 Apple-authored/별도 발행 UI specification이 아니라고 완결한다(35–43행).
- Motion은 다섯 증거 종류와 per-component computed-only 게이트를 전문으로 적고 Named gaps도 일치한다(97–100, 320–328행).
- §11 로그는 Experience + Typography & Assets + Content & Locales + provenance의 실제 분기를 모두 기록하고, §15 로그도 실제 B3 본문과 일치한다(`migration-log.md` 31, 35행). 재제출 규칙집은 v4로 기록됐다(37–47행).
- 기계 게이트 PASS와 같은 sol 의미 레인 재제출은 전제와 이번 재심으로 충족한다.

**Apple 판정: PASS.** 요청 범위 안의 잔여 차단점이 없다.

## 4. Baemin — FAIL

재제출 조건 1·2·4·5는 PASS다.

- 일곱 컴포넌트 모두 `Type: button`을 보존했다(`DESIGN.md` 185–189, 210–214, 233–237, 258–262, 284–288, 312–316, 335–339행).
- Motion은 다섯 증거 종류와 per-component computed-only 게이트를 전문으로 적었다(108–110행). §15 로그와 Named gaps도 일치한다(`migration-log.md` 35, 45행; `DESIGN.md` 411–417행).
- 재제출 규칙집은 v4로 기록됐고 기계 게이트 PASS는 전제대로 수용했다(`migration-log.md` 37–39행).

그러나 **기존 재제출 조건 3은 아직 FAIL**이다.

- `Primary tasks + Audience` 이중 목적지와 “Audience only” 제거는 반영됐다(`DESIGN.md` 16–28행; `migration-log.md` 33, 46행; `provenance.md` 132행).
- 남은 문제는 task의 정확한 first-party source mapping이다. provenance는 세 task를 “source §13이 인용하는 같은 Woowa Brothers reporting source”에 연결한다고 쓰지만(`provenance.md` 132행), 원본 §13은 source ID나 URL을 인용하지 않는다(원본 400–406행). 구체적으로 적힌 `baemin-app-rebrand` URL은 customer mission 언어에만 연결되어 있고, restaurant-owner와 rider task에는 식별 가능한 first-party source mapping이 없다.

이는 새 기준이 아니라 선행 판정이 task 유지 조건으로 요구한 “독립 검증 근거의 정확한 source mapping”과 재제출 조건 3의 미충족이다(`t2-1-wave1-2026-08-23-sol-full.md` 89–93, 103–108행).

**Baemin 판정: FAIL.** Restaurant-owner·rider task의 정확한 first-party source mapping을 남기거나, §13 파생 task 승격을 제거하고 independently verified task만 남겨야 한다.

## 5. Linear.app — PASS

재제출 조건은 **PASS 6/6**다.

- 다섯 unitless line-height `1 / 1.33 / 1.6 / 1.5 / 1.71`을 역할별 비율로 복원하고, 48px/31.92px/24px/19.5px/24px 관측과 합치지 않았다(`DESIGN.md` 117–127행).
- Primary·Secondary·Navigation trigger 모두 `Type: button`을 보존했다(146–150, 171–175, 195–199행).
- Principles 인접 본문이 derived editorial inference이며 Linear-authored/별도 발행 UI specification이 아니라고 완결한다(36–43행).
- Motion은 다섯 증거 종류와 per-component computed-only 게이트를 전문으로 적고 Named gaps도 일치한다(91–93, 300–314행).
- 로그는 unitless 값과 button type, homepage·home/Method/customers/pricing/brand의 Experience + provenance 이중 목적지를 모두 기록한다(`migration-log.md` 13–15, 19, 34–35, 43–47행). 재제출 규칙집은 v4다(37–39행).
- 기계 게이트 PASS와 같은 sol 의미 레인 재제출은 전제와 이번 재심으로 충족한다.

**Linear.app 판정: PASS.** 요청 범위 안의 잔여 차단점이 없다.

**전체 판정: FAIL — Toss FAIL / Bilibili PASS / Apple PASS / Baemin FAIL / Linear.app PASS (PASS 3/5, FAIL 2/5).**
