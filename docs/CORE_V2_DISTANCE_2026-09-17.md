# Core v2까지의 실제 거리 — 440개가 무손실로 변환되고, 막는 건 필드 하나다 (2026-09-17)

오너 우선순위 5번(CJK 1000개 확충)은 `omd:add-reference`의
`CORE_V2_CATALOG_WRITE_BLOCKED` 게이트에 막혀 있다. 게이트는 해제 조건을
*"every catalog reader accepts its package — not met"*라고 적고 네 리더를 지목한다.

**그 진술이 두 군데 틀렸다.** 실측했다.

## 1. 리더는 병목이 아니다

- 게이트가 지목한 `generate-css.ts`는 **파일이 없다.**
- `consumer-adapter.ts`는 이미 `model: "core-v2"`와
  `coreStatus: verified|unavailable|rejected`로 분기한다.
- `extract-tokens.ts`에 `extractCoreConsumerTokens`,
  `coreTokenString(contract: CoreConsumerContract, …)`가 있다.
- `font-registry.ts`·`logos.ts`는 문자열과 id를 받는 **포맷 무관 유틸**이다.

다만 **`design-md:section` 마커를 가진 레퍼런스는 0 / 440**이다. 코드 경로는 있고
테스트도 있지만 **실제 카탈로그 데이터로 한 번도 돈 적이 없다.** 그래서 "리더가 받아들인다"는
증명되지 않았고, 게이트가 닫혀 있는 것 자체는 옳다 — 다만 이유가 다르다.

## 2. 변환은 이미 무손실이다

`node scripts/migrate-design-md-core.cjs --catalog web/references --check --json`
(읽기 전용 드라이런):

| | |
|---|---:|
| 통과 / 실패 | **440 / 0** |
| 손실 세그먼트 | **0** |
| `projection_roundtrip_equal` | 440/440 |
| `source_reconstruction_equal` | 440/440 |
| `opaque_extension_preserved` | 440/440 |
| **`authoritative_adoption_ready`** | **0/440** |
| `portable_core` | 0/440 |

적합성 수준은 440개 전부 `structural-core`다. 즉 **기계적으로는 전부 변환되는데
Portable Core 인증에 못 미친다.**

## 3. 막는 것은 균일하다

| 사유 조합 | 건수 |
|---|---:|
| `missing-primary-task` **만** | **383** (87%) |
| + `contains-prescriptive-placeholder` | 35 |
| + `missing-product-surface-scope` | 18 |
| 셋 다 | 4 |

`primary-tasks`는 Portable Core 필수 클레임이다 —
`<!-- design-md:claim primary-tasks kind=user-outcomes count=<n> lang=en -->`,
적합성 검사의 말로는 *"Experience needs a Primary tasks claim with at least one list
item"*. **사람이 그 제품에서 무엇을 하는가**의 목록이다. 토스라면 송금·잔액 확인,
배민이라면 주문·추적.

## 그래서 거리가 다시 계산된다

게이트 텍스트를 읽으면 "리더 네 개를 Core v2로 다시 써야 한다"로 읽힌다 — 큰 엔지니어링.
실측은 다르다: **383개가 필드 하나만 채우면 되고, 57개가 추가 정리를 더 필요로 한다.**

그 필드는 측정이 아니라 **저술**이다. 색·상태값과 달리 브라우저가 필요 없고 레퍼런스당
몇 줄이다. 오늘 잰 단가 중 가장 싼 축이다.

## 하지 않은 것

- **게이트를 열지 않았다.** 아키텍처 결정이고 내가 혼자 판단할 일이 아니다.
- **어떤 레퍼런스도 채택하지 않았다.** `adopt-design-md-core.cjs`는 receipt-gated이고
  `--reviewer <id>`가 *"must identify the approving project owner"*다. 오너가 실제로 보지
  않은 패키지를 검토했다고 적는 영수증을 만들 수는 없다. 2026-09-08 카나리 리허설 기록도
  `canonical_references_modified: false`, `company_owner_review_claimed: false`로
  같은 선을 지켰다.
- **신규 레퍼런스를 만들지 않았다.** 게이트가 명시적으로 거부한다.

## 제안

1. **`primary-tasks`를 383개에 채운다.** 이것만으로 대부분이 Portable Core에 도달한다.
   저술이지만 가장 싼 저술이고, 오늘 만든 도구가 필요 없다.
2. 57개의 placeholder·scope를 정리한다.
3. **한 건을 `prepare-design-md-core-review.cjs`로 검토 요청물까지 만들어** 오너가
   실제 패키지를 보고 승인한다. 그게 게이트가 요구하는 증명이다.
4. 그 다음에 확충이 열린다.

**확충의 병목은 후보 발굴이 아니었다.** 오늘 CJK 조사에 쓴 노력은 병목이 아닌 곳이었고,
진짜 병목은 440개에 빠진 한 줄짜리 클레임이다.
