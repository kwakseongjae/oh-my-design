# 438개 Primary tasks — 어떻게 썼고 무엇을 거절했나

2026-09-18. `missing-primary-task`는 440개 전부를 막던 유일하게 균일한 사유였다.
이제 **0**이고 `portable_core`는 **1 → 383**이다.

| | |
|---|---|
| 레퍼런스 | 438 (toss·krds는 이전에 완료) |
| 과업 | **1,907** · 평균 4.4 |
| 분포 | 2개:11 · 3개:63 · 4개:136 · 5개:216 · 6개:12 |
| 카탈로그 | 440 pass · dropped 0 |
| `portable_core` | **383 / 440** |
| 남은 사유 | `contains-prescriptive-placeholder` 39 · `missing-product-surface-scope` 22 |

## 문장은 유도하지 않았다

`apply-primary-tasks.mjs`가 처음부터 적어둔 대로다 — Personas에서 기계적으로 뽑으려다
그만뒀고, 휴리스틱을 쓰면 `"Jobseekers."`가 primary task가 된다. 그래서 **사람(에이전트)이
문서를 읽고 쓰고**, 스크립트는 넣기만 한다.

에이전트 72배치(배치당 6개, 동시 5~7개)가 각자 레퍼런스의 DESIGN.md를 읽고 초안을 썼다.
프롬프트는 고정이었고 id와 출력 경로만 달랐다. 초안은 배치별 JSON으로
`.omd/execution/2026-09-18/primary-tasks/`에 남아 있다 — 무슨 문장을 무슨 인용에서 뽑았는지
추적 가능한 기록이다.

## 검증기 — `verify-primary-tasks.mjs`

과거에 실제로 난 결함 두 가지를 기계적으로 막는다.

1. **표면 혼동** — baemin의 두 과업이 진짜 컴포넌트를 인용하면서 `woowahan.com`의 심부름
   (폰트 다운로드, 앱 설치 카드)을 기술했다. 인용 검사만으로는 통과한다. 인용이 진짜였으니까.
2. **인용됐지만 행위가 아님** — `"Jobseekers."`는 실재하는 줄이지만 *누구*지 *하는 일*이 아니다.

검사: 인용이 파일에 **정확 부분문자열**로 존재(8단어 이상) · 마케팅 전용 섹션에서 오지 않음 ·
동사로 시작 · 5단어 이상 · 중복 없음 · 2~6개. **검증을 통과한 것만 적용 형식으로 나간다** —
미검증 문장이 레퍼런스 파일에 닿을 경로가 없다.

### 검증기를 두 번 고쳤다 — 둘 다 내 오탐이었다

- `-ance`를 명사화로 보고 **"Refinance a high-rate loan into a lower-rate one"**을 죽였다.
  같은 휴리스틱이 `-ment`(Implement, Document), `-ion`(Question, Mention), `-ness`(Witness)도
  죽인다. 관측된 결함은 동명사 하나뿐이라 `-ing`만 남기고 예외 목록을 붙였다.
- 마케팅 표면 id를 인용 안에서 부분문자열로 찾았는데 **그 id가 `home`이었다.**
  "Move between the home, partner solutions, and pricing"이 걸렸다. 흔한 명사의 부분문자열은
  인용이 아니다. 검사를 지웠다.

**가설을 잡으려고 진짜 작업을 버리는 검사는 검사가 없는 것보다 나쁘다.** 1,907개 과업 중
실제 결함으로 거부된 것은 **0건**이고, 거부 3건은 전부 이 오탐이었다.

## 3개 바닥을 2개로 내렸다

`hyundaicard`가 2개로 왔다. 확인해보니 그 레퍼런스는 제품 홈 하나와 기업정보 두 라우트만
다루고, §1이 *"the cultural and marketing surfaces … were not used to fill product tokens in
this reference"*라고 적어둔다. 드래프터는 "로그인" 과업을 썼다가 버렸다 — 근거가 비밀번호
필드의 서체를 분류한 문장 하나뿐이었다.

**3개는 내가 임의로 정한 숫자였고, 강제했다면 없는 과업을 만들게 했을 것이다.**
바닥을 2로 내리고, 2개인 경우는 거부가 아니라 **이유와 함께 출력**되게 했다.
누군가 반박할 수 있는 주장으로 남는다.

## 11개가 2개다 — 전부 레퍼런스 자신의 거절을 인용한다

`hyundaicard` `pinterest` `samsung` `shinhanbank` `stripe` `thsr` `tving` `typed` `uber`
`wooribank` `yanolja`

- **samsung** — §13 *"Do not invent demographic personas"*, §14 *"No current capture evidence
  supports universal loading, empty, form-error, success, skeleton, or modal-state rules"*,
  그리고 *"It does not cover checkout, sign-in, native Galaxy apps"*. 관측된 검색·캐러셀도
  일반 컴포넌트로 승격되지 않아 구매 과업을 쓰지 않았다.
- **stripe** — 캡쳐가 Docs 3개 라우트뿐이고 §1이 *"not the marketing home, Dashboard, or
  checkout"*이라 못박는다. 결제 회사인데 "결제하기"가 없다.
- **yanolja** — 숙박 예약 서비스인데 예약·결제 과업이 없다. §5·§7·§14가 숙소 카드·예약 CTA·
  상태를 지어내는 것을 명시적으로 금지하고 §13은 journey가 아니라 이해관계자 집단만 담는다.
- **uber** — §13이 *"does not establish distinct interface needs, journeys, or success criteria"*
  라고 하고 §4에 요청 폼·지도 컨트롤·체크아웃이 하나도 없다.
- **typed** — 제품 표면이 이제 서비스 종료 안내다. 남은 저널리는 종료 공지 읽기와 Google Drive로
  이전 가이드 따라가기 둘뿐. 모회사 사이트는 심부름이라 배제했다.
- **shinhanbank** — *"Corporate-host errands (the brand-asset download action, the group Family
  Site selector, CI and typeface pages) were excluded because they belong to the group marketing
  site, not the banking product"* — baemin에서 났던 **폰트 다운로드 결함을 시키지 않은
  레퍼런스에서 스스로 배제**했다.
- **tving** — 세 번째 과업을 썼다가 버렸다: *"the file records the selector, its states, and its
  geometry, but never says what the menu selects or filters, so any purpose attached to it would
  be invented."*

## 경합 하나를 발견했다

배치 45의 알림이 두 번 왔고 과업 수가 26/29로 달랐다. 에이전트가 내 첫 읽기 **이후에** 파일을
갱신한 것이다. 멱등 적용이 1건만 갱신하며 잡아냈고, 이후 프롬프트에 "여섯 개를 다 쓴 뒤 한 번에
저장하라"를 넣었다. 마지막에 **전 배치를 다시 검증·적용**해 남은 경합을 쓸어냈다
(결과: 438/438 clean, 적용 0건 — 전부 이미 동일).

## 부수 — baemin 롤백 카나리

`consumer-adapter.canary.test.ts`가 baemin의 legacy 바이트를 핀으로 고정한다. 과업을 넣어
바이트가 바뀌었다. 처음에 짝인 staged 파일도 현재 원본에서 다시 만들었는데 **잘못이었다** —
그 staged는 현재 원본에서 나온 것이 아니라 별도로 동결된 카나리 픽스처다(구 파일에는 현재
baemin에 없는 `### Font evidence`·`### Family`·`### Assets`가 있다). 되돌렸고 바뀐 것은
legacy 바이트 핀 하나뿐이다.

## 남은 것

`contains-prescriptive-placeholder` 39 · `missing-product-surface-scope` 22.
둘 다 primary tasks와 무관한 별개 사유다.
