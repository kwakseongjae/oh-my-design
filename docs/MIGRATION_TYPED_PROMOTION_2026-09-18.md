# 1·2번 완료 — 타입 승격과 투영 동등성 검사

2026-09-18. 오너: *"1,2번 먼저 만들자."* 둘 다 만들었고, 만드는 과정에서
**처음 보고한 것보다 결함이 더 많았다.**

## 2번을 먼저 말해야 한다 — 검사가 제가 놓친 것을 잡았다

`web/__tests__/core-projection-parity.test.ts`. 수정 **전**에 만든 패키지에 대고 돌리자:

```
fontFamily:   "Toss Product Sans" → ""
headingWeight: "600" → ""
radius:        "6px" → ""
```

**제가 어제 보고한 건 `fontFamily` 하나였다.** 손으로 프로브를 짜서 봤을 때
`mono`/`brandFont`/`accent`만 같이 확인했고 `headingWeight`와 `radius`는 보지 않았다.
검사를 먼저 만들지 않았으면 폰트만 고치고 나머지 둘은 그대로 채택했을 것이다.

### 설계

- **읽기 전용이다.** `loadCoreConsumerContract(packageRoot, …)`가 패키지 루트를 받으므로
  컴파일된 패키지를 **있는 자리에서** 투영한다. `web/references/` 아래를 바꾸지 않는다.
  (내가 손으로 하던 비교는 파일을 바꿔치기했다. 중간에 죽으면 카탈로그에 Core 정본이 남는다.)
- **필드 정의를 새로 만들지 않았다.** `detail-projection.ts`의 `ReferenceDetailParityField`를
  재사용한다 — 이 코드베이스가 legacy↔AST 패리티용으로 이미 정한 5개다.
  `headingWeight`·`mood`는 거기서 의도적으로 빠져 있고 여기서도 뺐다. 단언하지 않고 기록한다.
- **거부된 패키지는 이유를 말한다.** 거부는 토큰을 전부 비우므로, 사유를 안 찍으면
  원인 하나가 결함 100개처럼 보인다.
- **폐기 패키지는 `SUPERSEDED.md`로 표시하고 지나간다.** 런 디렉터리는 지우지 않는다 —
  구 패키지는 회귀의 물증이고 검사가 실제로 무는지 확인할 red 케이스다.

## 1번 — 마이그레이터가 무엇을 승격하게 됐나

색은 `extractColorTokens`로 `foundations.tokens`에 승격되고 있었다. 나머지는 아니었다.

**타이포** (`extractTypographyRoles`) — `tokens.typography`를 `typography_assets.roles`로.
`family`는 `ui`→`sans`→`body` 순으로 고르고, 어댑터가 UI 역할로 읽는 역할
(`ui`/`ui-sans`/`body`) **하나에만** 붙인다. 제목 역할은 스스로 패밀리를 선언하지 않았으므로
계속 선언하지 않는다. `usage`는 선언된 id를 다시 적은 것이지 용도를 지어낸 게 아니다.

**radius** (`extractRadiusTokens`) — `rounded:`를 `foundations.tokens`로. `md`가 legacy가
늘 기본으로 써온 값이라 `radius.default`도 함께 만든다.

둘 다 `extractColorTokens`의 거부 규칙을 물려받는다 — **`source: prose-derived`면 승격하지 않는다.**
산문에서 읽어낸 값은 측정이 아니다.

### 실측 영향

| | |
|---|---|
| 타입 역할이 생기는 레퍼런스 | **326 / 440** (역할 1,925개) |
| UI 폰트 패밀리가 복구되는 레퍼런스 | **234** |
| 전 카탈로그 회귀 | 440 pass · dropped 0 · roundtrip 불일치 0 |

어제 표본 60개로 "13개 정도"라 했던 추정은 **크게 낮았다.** 실제로는 234개다.

## 만드는 중에 나온 결함 3건

1. **치수 토큰이 날 JSON으로 렌더됐다.** `- **radius.default**: `{"unit":"px","value":6}``.
   사람과 에이전트가 radius를 찾아보는 바로 그 자리다. `tokenValueText`로 `6px`이 되게 했다.
2. **웹 검증기는 생성물이다.** `web/src/generated/core-verifier/`는
   `scripts/design-md-core.cjs`에서 만들어진다. 렌더러를 고치고 재생성하지 않으면
   패키지가 *"DESIGN.md is not the exact canonical rendering of the adopted graph"*로 **거부된다.**
   `node scripts/build-web-core-verifier.cjs`를 반드시 같이 돌려야 한다.
3. **`mood`가 브랜드 설명 대신 `"### Visual Theme & Atmosphere"`를 내보냈다.**
   마이그레이션된 레퍼런스는 원래 섹션 제목을 클레임 본문 안에 그대로 갖고 있어서,
   `### Scope`의 첫 블록이 산문이 아니라 제목이다. 제목 블록을 건너뛰고 실제로 말이 되는
   첫 블록을 쓰도록 고쳤다. 패리티 5개 필드에는 안 걸리는 결함이라 값 비교를 따로 하지
   않았으면 못 봤다.

## 지금 상태

`toss-core-compiled-r4` 기준 값 비교:

```
  = primary       #3182f6            = radius        6px
  = background    #ffffff            ≠ headingWeight 600 → 700
  = foreground    #191f28            ≠ mood          (같은 문장, Core가 400자로 자름)
  = fontFamily    Toss Product Sans
```

패리티 5개 전부 일치. `headingWeight` 600→700은 **선언된 `h1` 무게**에서 오게 된 결과다
(legacy의 600은 산문 파생값이었다). 어댑터의 `headingRoleIds`에 `h1`/`h2`를 넣어
숫자 타입 스케일만 선언한 레퍼런스도 body로 흘러내리지 않게 했다. 값이 바뀌는 변화이므로
단언하지 않고 여기 적는다 — **오너 판단 사항이다.**

웹 스위트 **953/953 통과**.

## ⚠️ 채택 전에 오너가 다시 보셔야 한다

r2·r3의 미리보기는 바이트 동일이라 승인을 이어 쓸 수 있었다. **r4는 아니다.**
두 수정이 투영 문서를 바꿨다 — `radius.*` 토큰 7개와 `### Type roles` 표 6행이 새로 보인다.

`r4/owner-review-receipt.json`은 **검증 목적**으로 발급했다(패리티 red→green 확인).
**그 영수증으로 채택하지 않았다.** 채택은 별도 게이트를 다시 지나며, 그 전에
`.omd/execution/2026-09-18/toss-core-review-r4/DESIGN.md`를 보셔야 한다.
자세한 사정은 같은 디렉터리의 `PREVIEW_CHANGED.md`.

## 남은 것

테스트 9건 수정 → 채택 → 미러 2곳 → `next build` → 라우트 확인. 그다음 승인 02~05.

---

# 테스트 9건 → 0건

채택 상태로 전체 스위트를 돌려 실패를 실측하며 고쳤다. **두 상태 모두 955/955.**

## 픽스처 6건 — 한 곳으로 모았다

여섯 테스트가 `toss`를 legacy 예시로 하드코딩하고 있어서, 채택 한 번에 여섯이 같이 깨졌다.
게다가 실패 메시지가 `expected 'core-v2' to be 'legacy'`라 **리더 버그처럼 읽혔다.**
실제로는 픽스처가 legacy이기를 그만둔 것이다.

`web/src/lib/references/legacy-fixtures.ts`로 모으고, 그것들이 아직 legacy인지 확인하는
가드 테스트를 붙였다. 다음 채택은 여섯 군데가 아니라 **한 군데에서, 무엇을 해야 하는지와 함께**
실패한다.

**픽스처는 둘이다.** 남은 legacy 중 "브랜드색 ≠ UI primary"와 "구조화 컴포넌트 6개 이상"을
동시에 만족하는 레퍼런스가 없다 — `toss`가 유일했고, 그래서 둘 다에 쓰이고 있었다.

- `apple` — brand `#000000` ≠ primary `#0071e3`. 교체 전보다 오히려 대비가 크다
- `line` — 구조화 컴포넌트 8개, 5개 타입

둘 다 채택 대기열 앞쪽이 아니다(`krds`는 primary tasks가 이미 있어 곧 채택되고,
영문 SEO 5개가 뒤따른다).

## 계약 갭 3건 — 가드에 Core 계약을 가르쳤다

| 테스트 | 실제 원인 | 고친 방식 |
|---|---|---|
| `catalog-integrity › toss` | `md.startsWith("---\n")` 요구 | Core 분기 추가. **섹션엔 닫는 마커가 없고 claim만 쌍**이라는 걸 실측으로 알고 단언을 바로잡았다(처음엔 7 open/0 closed로 틀렸다). 사이드카 존재와 미러 바이트 일치도 함께 요구한다 |
| `reference-ast-fleet › no loss` | `normalizeReference`가 frontmatter 없다고 throw | 채택 레퍼런스는 건너뛰되 **그냥 넘기지 않는다** — legacy AST를 대체한 패키지가 실재하는지 요구한다 |
| `evidence-integrity › expiry date` | `catch { continue; }`가 Core 문서를 조용히 삼켜 140→139 | 채택분을 **명시적으로 세어** `count + adopted >= 140`. 채택이 이 숫자를 조용히 깎지 않고 눈에 보이게 된다 |

## 해상 규칙을 지어내지 않고 기존 정의에 맞췄다

처음엔 `md` 하나만 `radius.default`로 승격했는데, **`rounded`를 가진 429개 중 127개에 `md`가 없다.**
family 우선순위도 내가 임의로 정하고 있었다.

`normalize.ts`에 이미 답이 있었다 — `selectUiFont`의
`["ui","sans","text","body","default","base"]`와 `selectDefaultRadius`의
`["base","md","sm","lg","card","button"]` + 첫 비-pill 키. **둘 다 그대로 따랐다.**
리더와 마이그레이터가 다른 규칙을 쓰면 같은 레퍼런스가 채택 전후로 다른 폰트를 갖게 된다.

결과: UI 폰트 복구 **234 → 240**, `radius.default` 복구 **316**.

## 부수 정리

`data/reference-quality.json`이 stale이었다(어제 toss 출처 4건 추가 여파).
`npm run query:references:data`로 재생성했다. 루트 스위트는 이제 1건만 실패하는데
그건 단독 실행 시 통과하는 부하 민감 벤치 테스트다(전체 실행 16초 / 단독 4.4초).

## 남은 것

**채택 자체.** 기술적 장애물은 없다 — 채택 상태에서 955/955다.
남은 건 하나, **오너가 r4 미리보기를 보는 것.** r2·r3와 달리 r4는 내용이 바뀌었다
(`radius.*` 7개, `### Type roles` 6행). `toss-core-review-r4/PREVIEW_CHANGED.md` 참조.
