# Core v2 적합성 검사 오탐 — `explicitlyNegatesClaim` 계열

- 일자: 2026-08-26 · 진단 주체: opus5
- 발단: eslite 이관 워커가 자기 작업 중 **다른 브랜드 5건**(dell·dmm·drnow·easywallet·elice)이
  `portable_core`에 실패한다고 보고했다. 자기 소관 밖인데 보고한 것이 이 진단의 출발점이다.

## 무엇이 실패했나

| 브랜드 | 실패 코드 | 트리거 문장 |
|---|---|---|
| dell | `missing-primary-task` | "…reading them out of the recorded components…, **since the source declares no task list of its own**" |
| dmm | `missing-product-surface-scope` | "**It does not treat either surface as a proxy** for the individual service products behind them, for native apps, or for authenticated account areas." |
| drnow | `missing-actionable-foundations-or-known-constraints` | "**The source records no reduced-motion rule** for any of the above." |

세 문장 다 **claim이 자기를 부정하는 것이 아니다.**
- dell의 claim에는 과업 4개가 실제로 불릿으로 실려 있다. 저 문장은 그 넷이 왜 파생인지를
  설명하는 출처 서술이다.
- dmm의 문장은 범위 **경계**다 — 두 표면을 다루되 그 뒤의 개별 서비스·네이티브 앱·인증
  영역까지 대신하지 않는다는 뜻이고, scope claim은 멀쩡히 서 있다.
- drnow의 Foundations claim에는 규칙 불릿이 33개 있다. 저 문장은 그중 하나(모션)에 대해
  원본이 무엇을 기록하지 않았는지 말한다.

## 왜 오늘 넣은 가드가 못 막았나

오전에 같은 계열 오탐을 고치면서 **증거 경계 어휘 목록**(evidence/proof/captured/observed/
outside/beyond/coverage/근거/증거/관측)으로 면제 조건을 만들었다. 세 문장 중 어느 것도
그 목록의 단어를 쓰지 않는다 — dell은 "recorded", dmm은 "proxy", drnow는 "records"다.

**어휘 목록은 이 문제의 틀린 모양이다.** 구분해야 할 것은 단어가 아니라 **부정문의 주체**다:

- 발동해야 하는 것: *이 문서가* 그것을 갖지 않았다 — "This reference names no product surface."
- 발동하면 안 되는 것: *원본이* 그것을 갖지 않았다 / *이 계약이* 거기까지 가지 않는다 —
  "the source declares no task list", "It does not treat either surface as a proxy for…"

## 수정 방향

문장의 주체가 원본·계약·범위일 때(예: `the source`, `the legacy`, `this contract`,
`it does not treat`, `does not extend`) 면제한다. 기존 증거 경계 어휘 면제는 유지한다.
회귀 테스트에 세 문장을 그대로 넣어 못박는다.

## 처분

- dell은 이미 원장에 있다. **산출물 결함이 아니므로 되돌리지 않고**, 검사 수정 후
  재확인할 때까지 원장에 주석을 단다(DONE.txt).
- 수정은 **워커가 조용해진 뒤** 적용한다 — 오늘 세운 두 규칙(게이트 수정 중 검증 금지,
  워커 완료 전 감사 금지)과 같은 이유다. 지금 웨이브 21 검토 5기가 이 검사를 돌고 있다.
- 적용 후 이관본 110건 전량을 정착 빌드에서 재확인한다.

## 이 사건이 말해주는 것

같은 검사를 하루에 세 번 고쳤고 세 번 다 워커 보고가 근거였다. 첫 수정은 어휘 목록이었고
그 목록이 두 번째 오탐을 못 막았다. **차단 검사의 오탐은 워커에게 옳은 문장을 고쳐 쓰게
만든다** — E3가 금지하려는 바로 그것이다. 이번엔 워커들이 규칙을 지켜 고쳐 쓰지 않고
보고했기 때문에 검사 쪽 결함으로 드러났다.


## 추가 확인 — 오탐과 진짜 결함을 갈랐다 (웨이브 22)

웨이브 22 이관 5건을 같은 검사로 돌려 두 계열이 섞여 있음을 확인했다. **실패했다고 전부
오탐이 아니다.**

| 브랜드 | 실패 코드 | 판정 |
|---|---|---|
| easywallet | `missing-product-surface-scope` | **오탐** — "It does not treat either web surface as a proxy for the EasyWallet app itself…"는 범위 경계 진술이다 (dmm과 같은 문형) |
| elice | `missing-governance-authority` | **진짜 결함** — `authority` claim 본문은 정본 문장과 **바이트 일치**여야 하는데 확장해서 썼다 |

elice는 검사를 고쳐도 실패한다. `kind=evidence-backed-reconstruction`의 정본은
"This document is an evidence-backed reconstruction, not authority for an unrelated target
project." 한 문장이고, 검사가 `authorityBody === expectedAuthority`로 강제한다.

처리는 digital-agency-jp가 같은 문제를 겪고 검토자에게 정당하다고 판정받은 방식 그대로다:
claim 블록 **안**은 정본만, 브랜드 고유 단서는 **`claim-end` 직후**에 인접 배치. 단서를
지우는 게 아니라 자리를 옮기는 것이라 의미 유실이 없다.

**이 구분이 중요한 이유**: 검사가 오탐을 낸다는 사실을 알게 되면 모든 실패를 오탐으로
치부하기 쉽다. 그러면 진짜 결함이 오탐 뒤에 숨는다. 다섯 건을 하나씩 트리거 문장까지
내려가 본 것은 그래서다.

## 현재 집계

| 상태 | 브랜드 |
|---|---|
| 오탐으로 진단 (검사 수정 대기) | dell · dmm · drnow · easywallet |
| 진짜 결함 (수정 진행) | elice |
| 정상 | 나머지 105건 |

## 같은 계열 오탐 2건 추가 접수 (웨이브 23)

### `containsUnresolvedSemanticClaim` — 원본의 "rule … unresolved" 인접

expo 이관 워커가 보고했다. 이 검사는 `${주제어}.{0,40}${미해상어}` 창으로 발동하는데,
원본의 정당한 문장이 그 창에 걸린다:

> "…reduced-motion **rule**. Motion tokens are **unresolved**…"

Foundations claim이 측정값으로 가득한데도 "미해상 claim"으로 읽힌다. **부정문 주체 문제와
같은 형태다** — 미해상한 것은 *claim*이 아니라 *원본이 기록하지 않은 모션 토큰*이다.

워커는 회피하지 않고 musinsa 승인 표현("No motion token is promoted, and every motion value
stays absent rather than being filled with a plausible default")으로 재작성한 뒤 보고했다.
승인 선례를 따른 것이라 정당하지만, **오탐 자체는 남아 있다.**

수정 방향: 오전에 `explicitlyNegatesClaim`에 넣은 `ATTRIBUTED` 가드를 이 검사에도 적용한다 —
미해상의 주체가 원본·토큰·값이면 면제하고, *이 claim이* 미해상하다고 말할 때만 발동한다.

### `BARE_PLACEHOLDER` — 표 셀의 `Unresolved` (재발)

expo에서도 발생했다. eslite 때 "검사를 고치지 않고 규칙을 분명히 한다"로 판정한 그 건이다.
expo 워커는 §3 증거 등급을 **원본 자신의 불릿 형태**로 옮겨 표를 없애는 방식으로 풀었고,
"내 표보다 원본에 더 가까워졌으므로 단어 변경 0"이라 보고했다. 판정은 유지하되(v10에
"증거등급 라벨은 한정형" 명시), **두 번째 발생이므로 v10 우선순위를 올린다.**

**적용 시점**: 웨이브 23의 esunbank 워커가 아직 이 검사로 검증 중이다. 완료 보고 후 적용하고
정착 빌드에서 전량 재검증한다.

### 대기 항목 — `ATTRIBUTED` 화이트리스트에 경계 관용어 추가

firstory 이관 워커가 보고했다: scope 경계 문장 "It does not **stand in for** the rest of
the product…"가 자기부정으로 오인돼 `missing-product-surface-scope`가 났다. 워커는 값을
왜곡하지 않고 승인된 관용("does not **treat** … **as a proxy for**" — 출처 실측: **notion 1회 · musinsa 1회로 둘 다 담는다.** firstory F3 감사자가
  "musinsa가 아니라 notion"이라며 오케스트레이터의 귀속을 정정했는데, 재측정하니 **그 정정도
  부분적**이었다 — 내 원래 귀속이 틀린 게 아니라 불완전했다. 이 관용은 승인본과 시정본 양쪽에
  선례가 있다)으로 바꾼 뒤
보고했다 — E3 준수이고 산문도 더 명확해졌다.

그러나 **"stand in for"는 "treat as a proxy for"의 자연스러운 동의어**다. 지금 가드는
`does not treat|extend|reach|cover|speak`만 알아서, 같은 뜻의 다른 동사를 쓰면 걸린다.

제안: `stand in for` · `substitute for` · `speak for` 를 경계 관용어에 추가한다. 다만
어휘 목록을 늘리는 방식은 오늘 이미 두 번 실패했으므로(어휘가 아니라 주체가 기준이다),
넣을 때 **음성 픽스처를 함께** 늘려 "이 문서에는 X가 없다"류 자기부정은 여전히 걸리는지
확인한다.

워커 3기가 이 검사로 검증 중이라 지금 적용하지 않는다.
