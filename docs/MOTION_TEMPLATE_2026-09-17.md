# 모션 값 254건이 관측이 아니라 템플릿이다 (2026-09-17)

포맷 리팩토링 측정 중에 발견. 바이트 문제를 재다가 나왔고, 바이트보다 크다.

## 사실

- 캡쳐 하네스는 **모션 속성을 하나도 수집하지 않는다.** 번들 `elements[].style`의 키는
  `backgroundColor borderColor borderRadius borderWidth boxShadow color fontFamily
  fontSize fontWeight gap letterSpacing lineHeight margin padding` — `transition`도
  `animation`도 없다.
- 그런데 `## Motion & Easing` 섹션을 가진 437개 중 **289개가 구체적인 ms / cubic-bezier
  값을 적고 있다.**
- 그중 **254개가 `motion-instant / fast / standard / slow / page` 템플릿을 사실로 제시**한다.
  격리 표기된 것은 **2개**뿐이다.

## 템플릿인 증거

같은 (토큰, 값) 쌍이 서로 무관한 브랜드에 반복된다:

| 토큰 · 값 | 레퍼런스 수 |
|---|---:|
| `motion-fast` 120ms | **147** |
| `motion-standard` 200ms | 114 |
| `motion-instant` 0ms | 108 |
| `motion-slow` 320ms | 90 |
| `motion-fast` 150ms | 73 |

147개 브랜드가 독립적으로 120ms를 고르지 않는다. 관측이 아니라 생성이다.

## 프로젝트는 이미 한 번 잡았다

`banksalad`가 올바른 처리의 본보기다 — 실제 관측 1건만 본문에 두고:

> One current public accordion panel exposed a `350ms` height/opacity transition using
> `cubic-bezier(0.25, 0.1, 0.25, 1)`. No broader duration scale, spring policy, chart
> animation, score count-up, or reduced-motion implementation was verified in this capture.

나머지 표는 `<details>` 안에 **"Superseded synthetic motion proposals — not verified
product facts"**로 격리했다. `toss`는 아예 값을 싣지 않고 부재를 명시한다.

즉 판단 기준은 이미 있고, 254개에 적용되지 않았을 뿐이다.

## 왜 게이트가 못 잡았나

품질 평가기는 `tokens.*`의 leaf를 검사한다. 모션 값은 **본문 산문/표에만 있고 토큰 블록에
없다.** 클레임 경로가 없으니 `claim_evidence_missing`도, 파생값 린트도 걸리지 않는다.
증거 없는 값이 토큰 층 밖에 있으면 현재 어떤 검사도 통과한다.

`web/public/design.md`(자사 문서)와 `spec/`의 "unknown means absent"는 층위를 구분하지
않는다 — 산문에 적힌 `120ms`도 브랜드 사실 주장이다.

## 탐지기 — 구현 완료 (2026-09-17)

두 층으로 나눴다. 템플릿 판정은 말뭉치 전체를 봐야 하고, 평가기는 레퍼런스 한 건만 본다.

- **`web/scripts/detect-unsourced-prose-values.mjs`** (`npm run prose-values`) — 말뭉치
  차원. 값 서명이 다른 레퍼런스와 겹치는지로 template을 가른다. elevation도 함께 본다.
- **평가기 advisory `motion_value_unsourced`** — 레퍼런스 한 건 안에서 토큰에도
  `.verification.md`에도 근거가 없는 모션 값. 현재 **286건**. 차단하지 않는다.

두 가지 보정을 넣었다.

1. **표준 이징 곡선은 공유돼도 증거가 아니다.** `cubic-bezier(0.25, 0.1, 0.25, 1)`은 CSS
   `ease`의 정의 그 자체이고 `(0.4, 0, 1, 1)` 등은 Material 표준이다. 공유 신호에서 뺐다.
   빼고도 결론은 그대로다 — **표준이 아닌** `cubic-bezier(0.2, 0.6, 0.25, 1)`이 167개
   브랜드에 동일하다.
2. **스스로 격리한 섹션은 제외.** `banksalad` 방식에 벌을 주면 advisory가 작업 목록으로서
   쓸모를 잃는다.

한 번 놓쳤던 것도 기록해 둔다: 첫 매처가 `\Z`를 썼는데 JS에는 그런 게 없어(문자 Z로 읽힌다)
Motion이 마지막 섹션인 레퍼런스가 통째로 빠졌고 288 대신 37로 읽혔다. 회귀 테스트를 걸었다.

## 분류 결과

| 등급 | 건수 | 크기 |
|---|---:|---:|
| **template** (값 서명이 10개 이상 레퍼런스와 겹침) | **273** | 805 KB |
| 값 없음 | 87 | 22 KB |
| **부재 명시** (올바른 상태) | 61 | 47 KB |
| grounded (토큰 또는 검증 파일이 근거를 댐) | 8 | 23 KB |
| unsourced (값은 고유하나 근거 없음) | 5 | 9 KB |
| **자체 격리** (banksalad 방식) | 3 | 12 KB |

elevation은 훨씬 건강하다 — grounded 163, unsourced 33. 모션이 예외적이다.

### template 273건의 두 축

**출처 가용성**

| | 건수 | 의미 |
|---|---:|---|
| 공식 디자인시스템(`ds`) URL 있음 | **18** | Tier-1 대조로 진짜 값이 나올 수 있다 (Spectrum, Lightning, GOV.UK, Seed, DADS, Canvas …) |
| `ds` 없음 | **255** | 대조할 1차 출처 자체가 없다 |

**저자의 인지**

| | 건수 |
|---|---:|
| 본문에 "설명용/미검증" 단서를 달았음 | **187** |
| 단서 없이 사실로 제시 | **86** |

`adobe`가 전형이다. 표는 검증된 토큰과 똑같은 형식인데 그 아래 문단에 이렇게 적혀 있다 —
*"Token names and curves above are illustrative defaults consistent with observed
behavior; Spectrum's internal motion token values are not publicly documented on the
inspected pages."* **저자는 알고 있었고, 단서는 표보다 아래에 있다.** 표를 읽는 소비자에게는
브랜드 사실로 보인다. 같은 섹션의 "Reduce motion 토글(observed live)"은 진짜 관측이라,
한 섹션 안에 관측과 생성이 섞여 있다.

## 제안 (미착수 — 오너 판단 필요)

1. **255개(ds 없음)** — 대조할 1차 출처가 없으므로 값을 실을 근거가 없다. `toss` 방식의
   부재 명시 또는 `banksalad` 방식의 격리. 관측된 정성 서술(자동재생, reduced-motion 토글
   등)은 **남긴다** — 그건 실제로 본 것이다.
2. **18개(ds 있음)** — Tier-1 대조. Spectrum·Lightning·GOV.UK·Seed·DADS는 모션 토큰을
   실제로 발행한다. 진짜 값으로 교체할 수 있는 유일한 묶음이다.
3. **일괄 삭제하지 않는다.** 섹션마다 관측과 생성이 섞여 있어서 통째로 지우면 관측까지
   잃는다. 7월 배치가 그렇게 실패했다.

규모: 파일당 약 2,192 B × 273 ≈ **805 KB**. 카탈로그에서 가장 큰 단일 미검증 표면이다.

---

## A2 — Tier-1 대조 결과 (2026-09-17)

공식 디자인시스템 URL을 가진 18개를 확인했다. 먼저 6개는 디자인시스템이 아니라
상표·폰트·브랜드에셋 페이지라 모션 토큰이 있을 수 없다
(`airtable` 상표 가이드, `gmarket` 폰트, `opencode.ai`·`posthog`·`raycast`·`superhuman` 브랜드 에셋).

남은 12개 중 확인한 것:

| 레퍼런스 | 출처 | 결과 |
|---|---|---|
| `adobe` | `adobe/spectrum-design-data` 공식 저장소 | **구체 값 없음.** 애니메이션을 정성적으로만 기술 — *"A tooltip fades in and out … The animation attributes (duration, easing, offset) are the same whether it's showing or hiding."* |
| `govuk` | design-system.service.gov.uk/styles | 발행 값 없음 |
| `digital-agency-jp` | design.digital.go.jp/dads | 발행 값 없음 |
| `socar` | design.socar.kr | 발행 값 없음 (브랜드 센터) |
| `smarthr` | `kufu/smarthr-ui` 소스 | **토큰 체계 없음.** 컴포넌트별 Tailwind 기본값 — `Switch`가 `shr-duration-150 shr-ease-out` |
| `skyscanner` `salesforce` `karrot` | 저장소 검색 | 결정적이지 않음 (모션 토큰 파일 못 찾음) |
| `hubspot` `money-forward` `sendbird` `ubie` | — | **확인 못 함** |

**결론: 5단 스케일을 발행하는 곳을 하나도 찾지 못했다.** 가장 성숙한 후보인 Spectrum이
명시적으로 안 한다. 실제 값이 있는 경우는 `smarthr` `Switch`처럼 컴포넌트 하나짜리
일회성이고, 우리 파일이 주장하는 5단 스케일과는 모양이 다르다.

4개를 확인하지 못했지만 결론은 바뀌지 않는다 — **입증 책임은 검사자가 아니라 주장에 있다.**
출처 없는 값이 사실로 실려서는 안 된다는 규칙은 확인 여부와 무관하다.

## A1 — 처리 결과 (2026-09-17)

`web/scripts/retire-template-motion.mjs` (`npm run retire-motion`). 근거 없는 **값 표만**
걷어내고 표 밖 산문은 전부 남긴다. 근거 있는 행(토큰이나 `.verification.md`에 값이 있는
경우)은 행 단위로 보존한다.

**130개 처리, 19 KB 제거.** 사실 보존 검사 통과 — 130개 전수에서 hex·rgba·px·url·font·
weight 손실 **0건**(모션 ms/cubic-bezier만 사라졌다). `motion_value_unsourced`
286 → **164**. 티어 불변(141/183/116).

들어간 자리 예(`42dot`):

```
- **Durations**:  | `motion-fast` | 120ms | Hover, tag press, focus |  …
- **Easings**:    | `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | …
+ **No motion duration or easing token is promoted.** The capture bundle for this
+ reference records no transition or animation property, and no official source
+ consulted publishes a motion scale. The behaviour described below was observed; …
```

### 136개는 일부러 남겼다

표를 지우면 산문에 남은 **토큰 이름**이 정의를 잃는다 — `17live`의
*"a gift graphic enters with `ease-spring` over `motion-reaction`"* 같은 문장이다.
이름도 값과 똑같이 생성된 것이라 남겨둘 수 없지만, 문장 한가운데를 기계적으로 들어내면
문장이 망가진다. **그 레퍼런스들은 산문 자체가 생성된 체계의 일부라 잘라내기가 아니라
다시 쓰기가 필요하다** — 7월 배치가 "정리하다가" 실패한 자리가 정확히 여기다.

도구가 기본값으로 거부하게 만들었다(`would-orphan-token-names`). `--force`로 강행할 수는
있지만 기본은 보류다. 남은 164건이 다음 작업이고, 회귀 테스트가 그 숫자를 고정한다 —
검사를 느슨하게 해서가 아니라 다시 써서만 내려가야 한다.
