# T2-1 웨이브 5 재확인 — sol 집중 재심

- 대상: `docs/design-md-weight/migrated/{duolingo,ably,pinterest,airtable,abema}/`
- 선행 판정: Duolingo·Ably는 `docs/reviews/t2-1-wave5-2026-08-23-sol-sample.md`, Pinterest·Airtable·ABEMA는 `docs/reviews/t2-1-wave5-2026-08-23-sol-full.md`
- 개정 식별자: migration log의 `Revision 2026-08-23 (wave5 sol resubmit)` / `Revision 2026-08-23 (wave5 full resubmit)`
- 일시: 2026-08-23
- 범위: 두 선행 sol 판정의 건별 재제출 조건만 확인했다. 새 기준은 추가하지 않았다.
- 기계 재검증: `migrate-reference.mjs --gate-only`를 직접 재실행해 다섯 건 모두 `PASS`, problems 0을 확인했다. 선행 full 판정이 요구한 Core checker도 Pinterest·Airtable·ABEMA 모두 exit 0, `portable_core: true`였다.
- F3 실행 증거 경계: 선행 sol 판정은 별도 신선 감사의 실행 증거를 `auditor-log.txt`와 `audit-log.md`의 결합으로 명시했다(`sol-sample.md` 8행, `sol-full.md` 9행). 따라서 각 마지막 재제출 조건의 “새 신선 세션 F3 실행”은 두 기록이 같은 새 감사를 가리키는지로만 확인했다.

## 판정 요약

| 대상 | 판정 | 재제출 조건 |
|---|---|---:|
| Duolingo | **PASS** | 7/7 PASS |
| Ably | **PASS** | 6/6 PASS |
| Pinterest | **PASS** | 6/6 PASS |
| Airtable | **FAIL** | 7/8 PASS |
| ABEMA | **FAIL** | 6/7 PASS |

## 1. Duolingo — PASS

| # | 선행 재제출 조건 | 판정 | 개정본 확인 |
|---:|---|---|---|
| 1 | per-surface date·claim-token mapping 제거, Font `Official product-use` 철회, owl-curve 맥락 복원 | **PASS** | provenance가 source에 `verification_v2`·per-surface date·claim map이 없음을 명시하고 표를 제거했다(`provenance.md` 37–51, 70–72행). Font evidence는 Official product-use를 `Not established`로 내리고 owl/Duo curve를 source-stated body + Tier-2 narrative로 복원했다(`DESIGN.md` 200–208행; `migration-log.md` 46–47행). |
| 2 | Layout 포함 전편 F1 재스캔, one-focal-action·rapid-tapping 해석 제거 또는 인접 완전 B2a | **PASS** | 두 판단 각각에 완전 한정이 인접한다(`DESIGN.md` 574, 584행). 최종 derived range와 F1 목록도 두 site를 포함한다(`provenance.md` 99행; `migration-log.md` 56행). |
| 3 | identity/color URL과 `primary_color`의 모든 목적지를 source-row 단위로 기록 | **PASS** | identity/color URL은 Scope + Foundations + provenance, `primary_color`는 identity + Distinctive + Foundations의 triple로 맞췄다(`provenance.md` 23, 51, 95, 97행; `migration-log.md` 49, 57행). |
| 4 | §9-only correct-feedback CTA 우측 배치 복원 및 disposition 교정 | **PASS** | Correct Feedback Bar에 green `CONTINUE` **on the right**가 복원됐고 §9 disposition도 이를 고유값으로 기록한다(`DESIGN.md` 517–524행; `migration-log.md` 27, 50행). |
| 5 | Accent/Destructive exact role 재확인 후 분리 또는 세 applicability field 최소 생략 | **PASS** | 두 mixed-role control 모두 loading/error/success를 닫지 않고 최소 field 경계에서 생략했다(`DESIGN.md` 302–347행; `migration-log.md` 51행). |
| 6 | Daniel의 `ads` Audience 승격 제거 및 D2/F2 기록 정합 | **PASS** | Audience는 독립 근거가 있는 Super/Plus·hearts만 유지하고 `ads`를 제거했다(`DESIGN.md` 28–30행). provenance와 log도 Daniel biography/`ads` 비승격을 실제 body와 맞췄다(`provenance.md` 101행; `migration-log.md` 31, 52, 57행). |
| 7 | 새 신선 세션 F3, gate-only 재통과, 동일 sol 재제출 | **PASS** | structured/raw 기록이 모두 같은 fresh audit와 `AUDIT_DONE fixes=14`를 가리킨다(`audit-log.md` 1–7, 66행; `auditor-log.txt` 1, 15행). 직접 재실행한 gate도 `PASS`, problems 0이다. |

**Duolingo 판정: PASS — 선행 재제출 조건 7/7이 충족됐다.**

## 2. Ably — PASS

| # | 선행 재제출 조건 | 판정 | 개정본 확인 |
|---:|---|---|---|
| 1 | Scope synthesis·yellow canonicality 제거 또는 인접 완전 B2a, 전편 F1/provenance 동기화 | **PASS** | 두 판단에 각각 완전 한정이 인접하고 derived inventory/F1이 이를 포함한다(`DESIGN.md` 11, 94행; `provenance.md` 80–98행; `migration-log.md` 62행). |
| 2 | Team soft/editorial pill 및 Team primary/Seller entry 역할 재검사, unsupported behavior 제거 | **PASS** | Team primary·soft·editorial pill·Seller entry 모두 loading/error/success를 생략했고 `navigates Team content`를 제거했다(`DESIGN.md` 219, 243, 268, 306행; `migration-log.md` 39, 54, 63행). |
| 3 | 새 negative copy-domain claim 삭제 또는 독립 evidence 추가 | **PASS** | `copy rules are unobserved` 부정 claim은 portable body에서 삭제됐고, log도 §14 absence를 세 surface copy-domain 부재로 확장하지 않는다고 기록한다(`DESIGN.md` 315–320행; `migration-log.md` 35, 55, 63행). |
| 4 | `verification_v2.surfaces` dual 기록, `components_harvested: true` disposition 명시 | **PASS** | 세 surface URL은 Scope + provenance dual이고, `components_harvested`는 provenance Proof notes-only로 닫혔다(`provenance.md` 42–66, 151–153행; `migration-log.md` 19–20, 56–57행). |
| 5 | §14 full-body와 Named-gaps list 목적지 분리, F2/E2c 문구 정합 | **PASS** | full baseline-only 본문은 Capture record에만, absent-treatment 목록은 Named gaps에만 남고 log가 둘을 구분한다(`DESIGN.md` 165–169, 352–360행; `migration-log.md` 39, 45, 58, 63행). |
| 6 | 새 신선 세션 F3, gate-only 재통과, 동일 sol 재제출 | **PASS** | structured/raw 기록이 같은 fresh audit와 `AUDIT_DONE fixes=7`을 가리킨다(`audit-log.md` 1–5, 35행; `auditor-log.txt` 1, 9행). 직접 재실행한 gate도 `PASS`, problems 0이다. |

**Ably 판정: PASS — 선행 재제출 조건 6/6이 충족됐다.**

## 3. Pinterest — PASS

| # | 선행 재제출 조건 | 판정 | 개정본 확인 |
|---:|---|---|---|
| 1 | 두 Business action의 exact behavior 확보 또는 세 applicability field 생략 | **PASS** | filled/outline action 모두 exact label/behavior unresolved를 명시하고 loading/error/success를 생략했다(`DESIGN.md` 250–294행; `provenance.md` 139행). |
| 2 | 2px shadow selector evidence 추가 또는 filled-action local 결합 철회 | **PASS** | shadow는 selector 미확인 Elevation sample로만 남고 local field 결합이 명시적으로 철회됐다(`DESIGN.md` 104–106, 262행; `provenance.md` 145행; `migration-log.md` 26, 51행). |
| 3 | Scope/Avoid/Elevation 포함 전편 F1, 인접 완전 B2a, derived range 동기화 | **PASS** | Scope 각 application/causal 판단, non-first-party Avoid 묶음, Elevation 판단에 완전 한정이 인접한다(`DESIGN.md` 9–17, 55–68, 104–106행). provenance derived inventory와 최종 F1이 동일 site를 열거한다(`provenance.md` 148행; `migration-log.md` 64행). |
| 4 | §9 agent-prompt wrapper/imperative 삭제, 고유 사실 보존, mixed disposition 정합 | **PASS** | live prompt는 제거되고 source-domain 값은 Distinctive·Foundations·Type roles에 남았다. portable의 prompt 문구는 삭제 사실을 밝히는 메타 인용일 뿐 실행형 imperative가 아니다(`DESIGN.md` 33–36, 50–53, 80–100, 132–146행). log는 mixed delete/keep로 기록한다(`migration-log.md` 32, 53행). |
| 5 | Font URLs와 §7/§8/§14/§15 Named-gaps 등 모든 실제 목적지 기록 | **PASS** | 두 font asset URL은 Typography & Assets + provenance dual이고(`DESIGN.md` 125행; `provenance.md` 62–63, 144행), §7·§8·§14·§15 목적지는 실제 Named gaps 367–374행과 source-row log 28, 31, 37, 38행이 일치한다. 최종 F2는 이 목적지를 field/role 문맥으로 닫는다(`migration-log.md` 65행). |
| 6 | 새 신선 세션 F3와 두 기계 검사 재통과, 동일 sol 재제출 | **PASS** | structured/raw 기록이 같은 fresh audit와 `AUDIT_DONE fixes=24`를 가리킨다(`audit-log.md` 3, 80행; `auditor-log.txt` 1, 11행). 직접 재실행 결과 Core exit 0, `portable_core: true`, SHA-256 `e1e94d…665f080`; gate `PASS`, problems 0으로 `migration-log.md` 9행과 일치한다. |

**Pinterest 판정: PASS — 선행 재제출 조건 6/6이 충족됐다.**

## 4. Airtable — FAIL

| # | 선행 재제출 조건 | 판정 | 개정본 확인 |
|---:|---|---|---|
| 1 | typography `use` 10개와 Sub-heading `normal` 복원 | **PASS** | Type roles에 `Use` 열 10개와 Sub-heading tracking `normal`이 정확한 role 결합으로 복원됐다(`DESIGN.md` 168–179행; `migration-log.md` 16, 19, 45행). |
| 2 | `airtable-live` per-claim mapping 제거 또는 exact evidence 결합, marketing/product domain 분리 | **PASS** | claim ledger가 live DOM을 marketing homepage의 세 named observation으로만 제한하고 prose-derived token/component reconstruction과 분리했다(`provenance.md` 43–48, 85–97행; `migration-log.md` 46행). |
| 3 | Input/Badge inference마다 인접 완전 B2a 및 derived inventory 정합 | **PASS** | 공통 경계와 두 component-local evidence class에 완전 한정이 있고 provenance inventory가 두 항목을 포함한다(`DESIGN.md` 214, 296–301, 350–354행; `provenance.md` 93–94, 142, 147행). |
| 4 | Primary/White/Input exact behavior 재확인 후 분리 또는 세 field 생략 | **PASS** | 세 control 모두 loading/error/success를 최소 field 경계에서 생략했다(`DESIGN.md` 242, 267, 320행; `migration-log.md` 20, 31, 48행). |
| 5 | docs/native/unpublished negative와 Trademark no-token 결론 제거 또는 독립 evidence 추가 | **PASS** | portable에는 route/typography negative가 없고, Trademark는 brand-usage guidance로만 남으며 interface-token evidence를 unresolved로 처리한다(`DESIGN.md` 9–15, 147–156행; `migration-log.md` 15, 17, 49행). |
| 6 | narrative 값/관계 복원, `sophisticated simplicity` disposition 기록 | **PASS** | Duke·Etacts/YC/Gmail·Ofstad/Android/Maps·Nicholas/Stack Overflow·hybrid thesis·Bebo/Gusto가 Scope와 provenance에 복원됐고, `sophisticated simplicity`도 인접 B2a 아래 유지되며 §1 row가 retention을 기록한다(`DESIGN.md` 17–19행; `provenance.md` 69–81행; `migration-log.md` 17, 28, 50행). |
| 7 | ds·`primary_color`·shadow·`#e5e7eb`·homepage hero 포함 source-row별 모든 목적지 기록 | **PASS** | ds는 Scope + Font evidence + provenance, `primary_color`는 identity + Foundations + Scope/Avoid/capture-bound, soft/standard shadow는 서로 다른 목적지, `#e5e7eb`은 Semantic + Capture record, hero는 Scope + Primary tasks + Content + provenance로 기록됐다(`provenance.md` 28, 136–141행; `migration-log.md` 13, 15, 18, 27–28, 31, 51, 56행). |
| 8 | 새 신선 세션 F3와 두 기계 검사 재통과, 동일 sol 재제출 | **FAIL** | 기계 검사는 현재 파일에서 Core exit 0, `portable_core: true`, SHA-256 `c306d0…35fe7a`, gate `PASS`, problems 0으로 재현됐다. 그러나 새 structured audit는 fresh session / `fixes=17`을 주장하는 반면(`audit-log.md` 3, 65행), 별도 raw 실행 기록은 이전 감사의 “portable에 `sophisticated simplicity` 없음”과 `fixes=25`를 그대로 기록한다(`auditor-log.txt` 9, 13행). 두 F3 증거가 같은 새 감사를 가리키지 않아 “새 신선 세션 F3 실행”이 입증되지 않았다. |

**Airtable 판정: FAIL — 내용 조건 7개와 두 기계 검사는 통과했으나 새 F3 실행 증거가 불일치해 재제출 조건 7/8만 충족했다.**

## 5. ABEMA — FAIL

| # | 선행 재제출 조건 | 판정 | 개정본 확인 |
|---:|---|---|---|
| 1 | claim ledger를 exact surface로 분리하고 hover/accent의 unsupported `abema-live` 제거 | **PASS** | `primary-hover`, `accent`, `accent-hover`는 `abema-css` only이고 live에는 outage-day canvas/chrome/yellow links/4px/CopyRight만 결합된다(`provenance.md` 79–101행; `migration-log.md` 15, 47행). |
| 2 | 전편 F1, 남은 derived 판단 제거 또는 인접 완전 B2a, provenance 동기화 | **PASS** | Pure White, Assets thumbnail, thumbnail veil을 포함한 대상 판단에 완전 한정이 인접하고 실제 derived inventory가 이를 열거한다(`DESIGN.md` 126, 230, 560행; `provenance.md` 124행; `migration-log.md` 48, 58행). |
| 3 | mixed/generic controls 분리 또는 세 applicability field 최소 생략 | **PASS** | Primary·Secondary·Dark·Primary Dark·Danger·Text Field·Checkbox가 모두 loading/error/success를 생략했다(`DESIGN.md` 279, 303, 325, 347, 369, 393, 511행; `migration-log.md` 33, 49행). |
| 4 | native-app/TIMES negative 제거 또는 evidence 추가, 유지 destination 기록 | **PASS** | native-app/TIMES absence claim을 제거하고 TIMES dark-canvas inspect만 Scope + Typography & Assets + provenance에 남겼다(`DESIGN.md` 9, 192–202행; `provenance.md` 47–51, 116행; `migration-log.md` 16, 18, 22, 50행). |
| 5 | fallback 원천과 §5/§8/§11 task 목적지를 source-row 단위로 정합 | **PASS** | Hiragino/system fallback을 source Don’t가 아닌 migration/runtime boundary로 고쳤고, §5 home rails·§8 VOD·§11 free-linear의 Primary tasks 목적지를 각각 기록했다(`DESIGN.md` 80, 200–206행; `migration-log.md` 23, 26–27, 30, 51행; `provenance.md` 125–126행). |
| 6 | 완전 B2a를 약화하지 않고 Core checker exit 0, gate 결과 기록 | **PASS** | Foundations wording은 완전 limiter를 유지하면서 negation pattern을 피한다(`DESIGN.md` 101–103행). 직접 재실행 결과 Core exit 0, `portable_core: true`, SHA-256 `b8d958…dc9d`, gate `PASS`, problems 0으로 `migration-log.md` 9, 17, 52행과 일치한다. |
| 7 | 새 신선 세션 F3 실행 후 동일 sol 재제출 | **FAIL** | 새 structured audit는 fresh session / `fixes=15`를 주장한다(`audit-log.md` 3, 77행). 그러나 별도 raw 실행 기록은 이전 감사의 TIMES Named-gaps 목적지 주장과 `fixes=14`를 그대로 기록한다(`auditor-log.txt` 5, 9행). 두 F3 증거가 같은 새 감사를 가리키지 않아 새 신선 세션 F3 실행이 입증되지 않았다. |

**ABEMA 판정: FAIL — 내용 조건 6개와 두 기계 검사는 통과했으나 새 F3 실행 증거가 불일치해 재제출 조건 6/7만 충족했다.**

**전체 판정: FAIL — Duolingo PASS / Ably PASS / Pinterest PASS / Airtable FAIL / ABEMA FAIL (3/5, 재제출 조건 32/34 충족).**
