# T2-1 웨이브 10 재확인 — sol 집중 재심

- 대상: `docs/design-md-weight/migrated/{autopedia,aws-cloudscape,bahamut,banksalad,barogo}/`
- 선행 판정: `docs/reviews/t2-1-wave10-2026-08-24-sol-full.md`의 건별 「재제출 조건」
- 판정 경계: 선행 목록만 대조했다. 새 기준을 추가하지 않았고 새 F3를 실행하거나 요구하지 않았다.
- 재확인일: 2026-08-24 · 검증자: sol

## 건별 판정

### autopedia — FAIL

1. **PASS — Hero의 §9-only Background.** Hero CTA에만 `Background: transparent`가 복원됐고 일반 Canvas/color token으로 승격되지 않았다(`DESIGN.md:291,294`).
2. **PASS — 네 사업선 역할과 관계.** Dr.Cha, Quantum Mobility, Parts Distribution, AI platform의 역할과 aftermarket ecosystem 관계가 Scope에 복원됐으며 편집 관계에 인접 완전 B2a가 있다(`DESIGN.md:17`).
3. **PASS — Hero CTA L/E/S.** exact submit 근거가 없는 loading/error/success 세 field가 Hero CTA에서 생략됐고 inquiry-submitted는 capture-record로 분리됐다(`DESIGN.md:303`; capture-record `:219`).
4. **FAIL — unsupported negative 삭제 미완결.** portable 본문은 수정됐지만 active 원장이 success/error/warning/disabled absence와 universal/exclusive type token, FontFace/license, outside-three-URLs 부재를 계속 현행 claim으로 기록한다(`migration-log.md:20-21`; `provenance.md:180`). 이는 이번 삭제를 기록한 revision(`migration-log.md:60`)과 충돌하므로 선행 조건 4를 닫지 못한다.
5. **FAIL — 원장/F2 동기화 미완결.** 새 SHA와 두 기계 검사는 맞지만 active 이전 F2와 revision F2가 함께 남아 목적지가 충돌한다(`provenance.md:31`; `migration-log.md:15,49,67-77`). 예컨대 revision의 `#E5E7EB` 목적지 목록은 현재 `DESIGN.md:58`을 누락하고, 이전 `#7A00FF` 목적지들도 현재 행과 어긋난다.

**autopedia 판정: FAIL.**

### aws-cloudscape — FAIL

1. **PASS — positive Scope와 portable Core.** 세 public Cloudscape route의 positive scope와 `Times`의 `Captured but uncorroborated` 경계가 보존됐고 Core는 `portable_core: true`다(`DESIGN.md:11,136`).
2. **PASS — evidence-bounded 역할 작업.** designer의 wireframe→prototype/accessibility·consistency 작업과 React developer의 API/testing/responsiveness/accessibility 작업이 Audience에 복원됐다(`DESIGN.md:36-37`).
3. **FAIL — `direct, instructional` F1 포인터.** 실제 characterization과 인접 완전 B2a는 `DESIGN.md:220`에 있으나 active F1 원장과 revision은 이를 `219`로 가리킨다(`provenance.md:149`; `migration-log.md:58,65`). first-party 문장도 revision의 `217`이 아니라 실제 `218`이므로 선행 조건 3의 F1 inventory가 동기화되지 않았다.
4. **FAIL — broad first-party-mark gap 원장 잔존.** portable Named gap은 삭제됐지만 active YAML-identity disposition은 여전히 `DESIGN.md:268`에 first-party-mark absence가 있다고 기록한다(`migration-log.md:15`). 현재 268행은 그 gap이 아니며 deletion revision(`migration-log.md:59,77`)과 모순된다.
5. **PASS — palette literal별 목적지 분리.** `#0f141a`, `#ffffff`, `#8c8c94`, `#424650`이 서로 다른 실제 목적지로 분리됐다(`migration-log.md:72-75`).
6. **FAIL — §9 disposition 및 전체 ledger 동기화 미완결.** §9 row 자체는 §7 constraint 보존 + prompt 삭제로 정정됐지만(`migration-log.md:29,61`), 조건 3·4의 active F1/source-row 모순이 남아 provenance/migration/audit/F2 전체 동기화 조건을 충족하지 못한다. 두 기계 검사는 통과했다.

**aws-cloudscape 판정: FAIL.**

### bahamut — FAIL

1. **FAIL — §9 disposition 원장 미정정.** portable Avoid에서는 두 construction command가 삭제되고 renderable Content Card/nav 값은 유지됐지만(`DESIGN.md:78-85,297,368`), active provenance는 두 command가 아직 Avoid 87–88에 있다고 기록한다(`provenance.md:127-129`). 이는 resubmit 기록(`migration-log.md:55,67`)과 충돌한다.
2. **FAIL — font negative 원장 잔존.** 본문 Font evidence는 live system stack/no-custom-font로 좁혀졌지만 active provenance는 universal current token, exclusive distributed family, brand-asset 부재를 계속 current inventory로 둔다(`provenance.md:181`). deletion 기록(`migration-log.md:56`)과 맞지 않는다.
3. **PASS — imagery authority와 B2a.** invented product-photography/community-imagery first-party 분류가 제거됐고 loading-thumbnail/game-entry reconstruction limit만 정확히 남았다(`DESIGN.md:201`).
4. **PASS — §11 고유 관계.** nascent Taiwanese internet, organic growth, 動畫瘋의 Taiwan-largest-legal-anime 관계가 Scope에 복원됐다(`DESIGN.md:23`).
5. **FAIL — 전체 ledger/F1/F2 동기화 미완결.** persona-segmentation gap 삭제와 기계 검사/SHA는 맞지만, active §9/font inventories와 line map이 과거 상태를 유지한다(`provenance.md:129,169-170,181,186`; `migration-log.md:63,72`). 특히 nav `#ffffff`/44px 목적지는 현재 관계가 모인 `DESIGN.md:297`과 맞지 않는다.

**bahamut 판정: FAIL.**

### banksalad — FAIL

1. **PASS — Core sentinel.** native-app typography 경계를 유지한 채 bare `Unresolved`가 제거됐고 Core는 `portable_core: true`다(`DESIGN.md:145`).
2. **PASS — Principles authority/B2a.** 다섯 stem과 implication 전체가 인접 완전 B2a에 들어가고 exact quote만 first-party로 분리됐다(`DESIGN.md:51,55`; `provenance.md:196-197`).
3. **PASS — job/label 분리.** interest-rate-reduction job과 `/contents`의 관측 label이 별도 claim으로 분리됐다(`DESIGN.md:28,331`).
4. **PASS — unsupported negative 삭제.** `sale`, broad `mobile navigation`, animation-name absence가 현행 본문에서 제거됐고 disclosure accordion의 bounded 상태만 남았다(`DESIGN.md:125`).
5. **FAIL — 나머지 §5 값·역할 복원 불완전.** spacing/grid/grouping/breakpoint/image 관계는 복원됐지만(`DESIGN.md:287-320`), canonical current §5의 density-as-brand, `#ffffff`/`#fbfbfb` section rhythm, 그리고 footer가 취소하지 않은 4px/8px/10–12px/30–41px/50% radius 역할이 빠졌다(`web/references/banksalad/DESIGN.md:494-507`). footer `:478`이 취소한 최소 field보다 넓게 누락된 상태다.
6. **FAIL — provenance/migration/audit/F1/F2 동기화 미완결.** active provenance가 여전히 §5–§9 전체를 superseded snapshot으로 분류하고 current `#fbfbfb`, §5 measurements, 50%를 demote한다(`provenance.md:158-166`). source-row와 revision 포인터도 현재 Content/Layout 행과 어긋난다(`provenance.md:196`; `migration-log.md:14,44,46,58`). 새 SHA와 두 기계 검사는 맞다.

**banksalad 판정: FAIL.**

### barogo — FAIL

1. **PASS — §9-only tuple.** Feature Card title/body tuple과 white Hero의 42px/700/#000 H1 + primary/outline pair가 component/layout 문맥에 복원됐다(`DESIGN.md:292-293,406`).
2. **PASS — parent surface fill 분리.** Header `#ffffff`와 Footer `#1a1a1a`가 parent band Background로 이동했고 Top Nav/Footer Link에는 Background field가 없다(`DESIGN.md:331-340,366-375`).
3. **PASS — §11 관계와 B2a.** structural gap, shared logistics rails, software coordination 관계가 인접 완전 B2a 아래 복원됐다(`DESIGN.md:21`).
4. **PASS — 바로레터 authority.** `바로레터 구독하기`는 harvested Observed에서 제거되고 derived table에만 유지됐다(`DESIGN.md:433-441,455`).
5. **FAIL — unsupported product/font negative의 package-level 삭제 미완결.** portable 본문에서는 해당 negatives가 제거되고 live Pretendard/Termina만 남지만(`DESIGN.md:163-170`), active provenance inventory가 `live-surface-labels-not-captured-product-UI`와 `no-additional-family-promoted`를 여전히 current claim으로 기록한다(`provenance.md:135`). 같은 잔존은 조건 7의 ledger 불일치이기도 하며 새 기준이 아니다.
6. **PASS — fictional persona literal 0 hit.** `김상현|이도윤|박지은`은 대상 디렉터리 전체에서 0 hit이고 generic deletion disposition만 남았다(`provenance.md:134`; `migration-log.md:76,91`).
7. **FAIL — source-row/F1/F2/SHA 원장 재-grep 미완결.** 새 SHA와 두 기계 검사는 맞지만 active destination이 대량으로 stale하다. `provenance.md:135`의 Top Nav/Footer/Layout/Content 목적지, `provenance.md:28,123`과 `migration-log.md:49`의 `#fa5014` 목적지, `migration-log.md:24,31`의 component/voice 목적지가 현재 행과 맞지 않는다. 따라서 `migration-log.md:77`의 source-row grep 완료 주장은 성립하지 않는다.

**barogo 판정: FAIL.**

## 현재 파일 기계 재검증

| 대상 | `--gate-only` | Core `--check --require-portable-core` | DESIGN SHA-256 |
|---|---|---|---|
| autopedia | PASS, problems `[]` | exit 0, `portable_core: true` | `a5119fef183accdfac1c6bac4e25a39905fcd9229dde8a2a83a97f9fb111e808` |
| aws-cloudscape | PASS, problems `[]` | exit 0, `portable_core: true` | `1ea6c61dacbd938828b6875823d64f1669803903fdf785b4b18f152758cb2e51` |
| bahamut | PASS, problems `[]` | exit 0, `portable_core: true` | `4143c052a73be9f2c728909c4864080d7202772efd2c24e1db20478569a5c088` |
| banksalad | PASS, problems `[]` | exit 0, `portable_core: true` | `4757acf459472b55051bd5be80551613f1643be9bd74d63d25dcce1f70e2df76` |
| barogo | PASS, problems `[]` | exit 0, `portable_core: true` | `2ed442e9653a78c2cb695abbc0fec1c140eaf4c46d562fe073831b54e3dc82ae` |

## 남은 재제출 조건

- **autopedia:** active color/font negative inventory를 삭제 또는 명시적으로 supersede하고, `#E5E7EB`·`#7A00FF` 등 value-level F2 목적지를 current file에 맞춰 다시 grep한다.
- **aws-cloudscape:** `direct, instructional`의 F1/first-party 포인터를 실제 행에 맞추고, active YAML-identity row의 broad first-party-mark gap을 삭제 또는 supersede한다.
- **bahamut:** active §9 prompt/font-negative inventory를 current disposition으로 바꾸고 §9/Nav 및 관련 F1/F2 목적지를 다시 맞춘다.
- **banksalad:** footer가 취소하지 않은 §5 density/section-rhythm/radius 역할을 복원하고, wholesale-superseded provenance와 모든 current source-row/F1/F2 포인터를 다시 맞춘다.
- **barogo:** active provenance의 삭제된 product/font negative 명칭을 없애거나 명시적으로 supersede하고, component/Content/`#fa5014` 목적지를 current file에 맞춰 전부 다시 grep한다.

위 항목은 모두 선행 판정의 기존 재제출 조건 안에 있다. 새 기준이나 새 F3는 요구하지 않는다. 5/5 PASS 전 웨이브 완료 및 카탈로그 채택이 아니다.

**전체: FAIL — autopedia FAIL / aws-cloudscape FAIL / bahamut FAIL / banksalad FAIL / barogo FAIL (새 기준·새 F3 없음).**
