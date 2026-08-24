# T2-1 웨이브 1 최종 확인 — sol

- 대상: `docs/design-md-weight/migrated/{toss,baemin}/`
- 선행 판정: `docs/reviews/t2-1-wave1-2026-08-23-sol-recheck.md`
- 일시: 2026-08-23
- 범위: 선행 판정의 두 잔여 차단점이 3차 개정에 반영됐는지만 확인했다. 새 기준은 추가하지 않았다.

## 판정 요약

| 대상 | 판정 | 확인 결과 |
|---|---|---|
| Toss | **PASS** | v4 A1b PASS · B2a 완전성 PASS |
| Baemin | **PASS** | restaurant-owner·rider task 승격 제거 PASS |

## 1. Toss — PASS

- **v4 A1b PASS:** 원본의 여섯 primitive type `button / input / badge / toggle / button / button`(`web/references/toss/DESIGN.md` 143–148행)을 이관본 각 컴포넌트에 그대로 보존했다. TDS Button `button`, Text Field `input`, Badge `badge`, Agreement `toggle`, Marketing Primary `button`, Marketing Dark `button`이 각각 명시되어 있다(`DESIGN.md` 163–167, 194–198, 218–222, 226–230, 247–251, 273–277행). `Kind`가 primitive type을 대신하지 않는다.
- **B2a 완전성 PASS:** Principles 바로 앞의 인접 한정이 다섯 항목을 `derived editorial implementation inference`로 규정하고, `not Toss-authored or a separately published UI specification`이라고 evidence class를 끝까지 구분한다(`DESIGN.md` 35–43행).
- `migration-log.md` 20, 31행과 3차 개정 기록도 실제 본문 disposition과 일치하며, provenance에 이를 뒤집는 권위 승격은 없다.

**Toss 판정: PASS.** v4 A1b와 B2a 완전성이 모두 3차 개정에 반영됐다.

## 2. Baemin — PASS

- 선행 판정이 허용한 교정은 restaurant-owner·rider task에 정확한 first-party source mapping을 남기거나 그 task 승격을 제거하는 것이었다.
- 이관본은 `primary-tasks count=1`로 줄이고, 유일한 Primary task로 independently verified Baemin 2.0 customer mission만 남겼다(`DESIGN.md` 16–20행).
- Restaurant-owner operational-tools와 rider-safety 필요는 세 stakeholder의 Audience 문맥에만 남고, source §13에 source id/URL이 없어 별도 Primary task로 승격하지 않았다고 명시한다(`DESIGN.md` 22–24행).
- 같은 철회와 남은 mission 1건의 source mapping은 `provenance.md` 132행과 `migration-log.md` 33, 46, 48–54행에 동일하게 기록되어 있다. 46행의 과거 이중 목적지 기록은 3차 개정으로 superseded됐다고 명시하므로 현행 모순이 아니다.

**Baemin 판정: PASS.** Restaurant-owner·rider task 승격이 제거되어 잔여 §13 차단점이 해소됐다.

**전체 판정: PASS — Toss PASS / Baemin PASS (PASS 2/2); 선행 재확인의 두 잔여 차단점이 모두 3차 개정에 반영됐다.**
