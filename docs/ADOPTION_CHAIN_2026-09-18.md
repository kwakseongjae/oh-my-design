# 채택 체인 실행 기록 — 오너 승인 이후

2026-09-18. 오너: *"5개 모두 승인할게."* 결정 01(toss 채택)을 실행하다 **9-08부터 잠복해 있던
구조적 구멍**을 만났고, 뚫었다. 채택 직전까지 왔다.

## 진행한 곳까지

| 단계 | 상태 |
|---|---|
| 1. 오너 승인 영수증 | ✅ r2 발급 → **무효화** → r3 재발급 |
| 2. 컴파일 | ✅ **카탈로그 최초로 성공.** 6산출물 패키지 + 채택 영수증 |
| 3. 채택 체크포인트 요청 | ⏸ 다음 |
| 4. 채택 | ⏸ 테스트 9건 수정 후 |
| 5. 리더 소비 확인 | ✅ **실물 패키지로 선행 검증 완료** (아래) |

## 막혔던 곳 — 마이그레이션 provenance로는 컴파일이 안 된다

r2 영수증을 발급하고 컴파일을 돌리자 거부당했다:

> refusing to adopt a non-conformant Core package: provenance schema
> additionalProperties at /authority_status, /segments, /source, /unresolved

r1·r2의 `provenance.json`은 **마이그레이션 형태**다. 컴파일러 스키마
(`spec/schema/design-system-provenance-v2.schema.json`)가 허용하는 건 넷뿐이다 —
`schema_version` · `design_md_sha256` · `graph_sha256` · `decisions`.

**이건 새 결함이 아니라 잠복 결함이다.** 2026-09-08 설계 문서가 이미 적었다:
*"the current review gate then failed closed because migration-only provenance has no
compiler-grade decisions."* 그날 리허설은 `experience.summary` 하나만 묶고 끝냈다.
전체 레퍼런스로 컴파일을 끝까지 돌려본 적이 없어 오늘 처음 드러났다.

### 뚫은 방법 — r3

`decisions` 37건은 이미 컴파일러 형태였다(`path`/`source_class`/`evidence`). 문제는 포장뿐.

- 버린 키 4개: 전부 마이그레이션 전용
- 더한 키 2개: `design_md_sha256`·`graph_sha256` — **all-zero 자리표시자**.
  `prepare`가 그렇게 요구한다: *"the compiler owns final bindings."*

**`r2/DESIGN.md`와 `r3/DESIGN.md`는 바이트 동일하다.** 오너가 검토한 내용이 바뀌지 않았기에
승인을 r3에 적용했다. 판단 근거는 `.omd/execution/2026-09-18/toss-core-review-r3/WHY_R3.md`에
남겼다 — 영수증은 "무엇이 같았는지"를 기록하지 않기 때문이다. r2 영수증은 폐기하지 않고 남긴다.

## 리더 소비 — 세 상태를 실측했다

같은 프로브를 세 번 돌렸다(매번 정본 바이트 동일 복원 확인).

| 상태 | `coreTransport` | primary | background | 판정 |
|---|---|---|---|---|
| A. 현행 legacy | `null` | `#3182f6` | `#ffffff` | 정상 |
| B. Core, 사이드카 없음 | `{status, missing}` | `#3182f6` | `#ffffff` | **렌더는 되나 패키지를 소비하지 않음** |
| C′. Core + 실물 컴파일 패키지 | `{status, contract}` | `#3182f6` | `#ffffff` | **계약 수용. 제대로 동작** |

**게이트가 요구한 "every catalog reader accepts its package"의 답이 C′다.**
`repository.server.ts:81`은 Core 정본에 `ast: null`을 주므로 데이터는 전적으로
`coreTransport`에 달려 있는데, 실물 패키지에서는 정상 수용된다.

### 내가 낸 오경보 하나 — 기록해 둔다

중간에 **마이그레이션 스테이징** 사이드카로 시험하고 "채택하면 OG 이미지가 500난다"고
판단했다. 틀렸다. 스테이징 사이드카는 해시 결속도 채택 영수증도 없어 검증기가 거부하고,
거부되면 토큰이 빈 문자열이 되어 `background: ""`로 터진 것이다. **실물 패키지에서는
그 실패가 없다.** 다만 남는 사실 하나 — *검증기가 패키지를 거부하면 토큰이 빈 문자열이
되고 OG 라우트(`route.tsx:91`, `background: color`)가 그대로 터진다.* 부재를 걸러야 한다.
오늘 채택 경로에는 영향이 없어 별건으로 둔다.

## `.omd/` 가 gitignore돼 있었다 — 고쳤다

`.gitignore:32`의 `.omd/`는 하네스 실행 산출물용인데 **채택 사이드카까지 삼켰다.**
그대로 뒀다면 커밋도 배포도 안 되어 **Vercel은 영원히 상태 B**였을 것이다 —
렌더는 되지만 아무것도 패키지를 소비하지 않는, 증명이 성립하지 않는 상태.

`!web/references/*/.omd/` + `!web/references/*/.omd/**` 를 추가했다.
루트 `.omd/`는 계속 무시되는 것을 회귀 확인했다.

## 남은 것 — 채택 전에 반드시

**테스트 9건.** 실물 패키지 기준 실패 목록이며 성격이 둘로 갈린다.

*계약 갭 3건 — 가드가 Core v2를 모른다*
- `catalog-integrity › toss` — `md.startsWith("---\n")` 요구(`:138`). Core v2엔 frontmatter가 없다
- `evidence-integrity › expiry date` — frontmatter 기반 집계라 toss 소스가 빠진다
- `reference-ast-fleet › no ID, claim, or component loss`

*픽스처 가정 6건 — toss를 legacy 예시로 하드코딩. 리더 결함 아님*
- `api/references/[id]/route.test.ts` × 4
- `extract-components.test.ts` — "six verified structured components"
- `reference-ast.test.ts` — "keeps Toss brand color separate from its canonical UI primary"

픽스처를 옮길 대상은 **의미가 보존되는 legacy 레퍼런스**여야 한다(브랜드색과 UI primary가
분리돼 있고 검증 컴포넌트 ≥6). 곧 채택할 krds는 피한다.

그다음: 채택 → 미러 2곳 재동기화 → `next build` → `/design-systems/toss`·`/builder?ref=toss`·
`/toss/design.md` 실제 확인 → 별도 커밋.

---

# 멈춘 이유 — 채택하면 검증된 폰트 패밀리가 빈 문자열이 된다

테스트 9건을 고치기 전에 **채택 후 페이지가 실제로 무엇을 받는지** 먼저 쟀다. 거기서 멈췄다.

## 실측

실물 컴파일 패키지를 정본 자리에 놓고 `projectActiveReference`가 내주는 값을 비교했다.

| 필드 | 현행 legacy | 채택 후 |
|---|---|---|
| `coreStatus` | `null` | **`verified`** ✅ |
| `model` | `ast-v1` | `core-v2` ✅ |
| `primary` / `background` / `foreground` | 정상 | 정상 ✅ |
| **`fontFamily`** | **`"Toss Product Sans"`** | **`""`** ❌ |
| `mono` / `brandFont` / `accent` | `null` | `null`(키 자체 없음) — 손실 아님 |

`mono`·`brandFont`·`accent`가 사라진 줄 알았으나 **원래 null**이었다. 허위 경보였고 바로 확인해 접었다.
남은 건 하나, `fontFamily`다. 그리고 그건 진짜다.

## 원인 — 마이그레이션이 타이포를 산문으로만 옮긴다

컴파일된 그래프:

```
typography_assets:  roles 0 · assets 0 · rules 1
foundations:        rules + tokens      ← 색이 살아남은 이유
```

`typography_assets.rules[0]`에는 이 문장이 그대로 들어 있다:

> **Canonical visible UI family**: `Toss Product Sans`. The collector found 810 visible
> first-family uses backed by loaded FontFace resources.

810회 관측으로 검증된 값이 **산문 안에는 있고 타입 필드에는 없다.**
그리고 스키마에는 자리가 **있다** — `spec/schema/design-system-graph-v2.schema.json`의
`typographyAssets`는 `roles` · `assets` · `rules` 셋을 정의한다.
**Core v2의 한계가 아니라 마이그레이션의 갭이다.** 색은 `foundations.tokens`로 승격되는데
타이포는 승격되지 않는다.

## 왜 손실 게이트가 못 잡았나

`dropped_segments: 0` · `projection_roundtrip_equal: true` · `source_reconstruction_equal: true`
— 셋 다 **참이고, 셋 다 불충분하다.** 그것들은 **마크다운 왕복**을 잰다. 산문이 보존되므로
전부 통과한다. 아무도 **투영된 필드의 동등성**을 재지 않았다.

> 마이그레이션은 **텍스트로는 무손실이고 데이터로는 유손실이다.**

## 그래서 채택하지 않았다

AGENTS.md 하드 룰:

> Never enforce absence by deleting or replacing the canonical reference body…
> A missing font family removes that family/specimen, not verified typography metrics.

채택은 **검증된** 폰트 패밀리를 빈 문자열로 만든다. 부재로 두는 것도 아니고 `""`다.
프로젝트가 명시적으로 금지하는 일이며, 오너 승인은 이 사실이 알려지기 전에 나왔다.
승인의 범위는 "5단계를 돌려라"이지 "검증된 값을 지워라"가 아니다.

**toss만의 문제도 아니다.** 표본 60개 중 13개가 frontmatter에 UI 폰트 패밀리를 갖고 있고,
`roles`/`assets`를 채우지 않는 것은 마이그레이터의 일반 동작이다.

## 채택 전에 필요한 것

1. **마이그레이터가 타이포를 승격해야 한다** — `typography_assets.roles`/`assets`를
   frontmatter `tokens.typography`에서 채운다. 색이 `foundations.tokens`로 가는 것과 같은 방식.
2. **손실 게이트에 투영 동등성 검사를 추가한다** — 채택 전후로 `projectActiveReference`의
   필드를 비교해 하나라도 값이 사라지면 실패. 마크다운 왕복만으로는 못 잡는다.
3. 그다음 테스트 9건 → 채택 → 미러 → 빌드/라우트 확인.

## 지금 확보된 것 (버리지 않는다)

- `.omd/execution/2026-09-18/toss-core-review-r3/` — 컴파일러 등급 provenance + 오너 영수증
- `.omd/execution/2026-09-18/toss-core-compiled/` — **카탈로그 최초 컴파일 완료 패키지**
- `coreStatus: verified` 실측 — 리더가 실물 패키지를 실제로 수용한다는 증거
- `.gitignore` 수정 — 채택 사이드카가 배포될 수 있게 됨
