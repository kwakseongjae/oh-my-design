# krds 채택 — 손실 2건 중 1건 해소, 1건은 오너가 수용

2026-09-19. 오너가 C(krds 채택)를 승인했고, 체인 1단계(prepare)까지 실행한 뒤
**채택 후 페이지가 실제로 무엇을 받는지 재고 멈췄다.** toss 때와 같은 이유이고,
같은 방식으로 멈췄다 — 영수증을 발급하기 **전에** 쟀다.

## 뚫은 것

| | 상태 |
|---|---|
| 폰트 패밀리 승격 | ✅ `body-large`에 `Pretendard GOV` 부착 (`dbfb248c`) |
| provenance 번역 | ✅ 스크립트화 — `build-core-compiler-provenance.cjs` |
| coverage 번역 | ✅ 같은 스크립트 |
| prepare | ✅ `.omd/execution/2026-09-19/krds-core-review-r1` |
| **오너 영수증** | ⏸ **아래 2건 때문에 발급 안 함** |

**마이그레이터와 컴파일러는 `provenance.json`·`coverage.json`이라는 같은 이름의 **다른 문서**를
쓴다.** toss는 이 번역을 손으로 세 번(r2 거부 → r3 재포장 → r4 재생성) 했고 이유를 별도
WHY_R3.md에 적어야 했다. 440번 손으로 할 일이 아니라 스크립트로 굳혔다.

## 멈춘 이유 — 실측 2건

legacy 투영과 그래프가 제공하는 것을 비교했다.

| 필드 | 현행 legacy | 채택 후 | |
|---|---|---|---|
| primary | `#256ef4` | `#256ef4` | ✅ |
| background | `#ffffff` | `#ffffff` | ✅ |
| foreground | `#1e2124` | `#1e2124` | ✅ |
| radius | `6px` | `6px` | ✅ |
| **fontFamily** | `Pretendard GOV` | `Pretendard GOV` | ✅ **오늘 고친 것** |
| **headingWeight** | `700` | `700` | ✅ **해소** |
| **accent** | `#D63D4A` | **없음** | ⚠️ **오너가 손실 수용** |

### ① headingWeight — 폰트 패밀리와 **같은 결함**, 다른 역할

어댑터는 `headingRoleIds = ["heading","display","title","h1","h2","ui","ui-sans","body"]`를
**정확 일치**로 찾는다. krds의 역할 id는 `heading-xlarge`·`display-large`처럼 수식어가 붙어
하나도 안 걸린다. 그래프에는 `weight: 700`이 일곱 역할에 **들어 있다** — 읽지 못할 뿐이다.

오늘 패밀리에 넣은 "선언된 패밀리가 하나면 그걸 쓴다" 폴백은 weight엔 못 쓴다. weight는
역할마다 다르고(700 일곱 / 400 넷) 유일하지 않다. **heading 쪽 폴백은 별도 판단이 필요하다.**

### ① 해소 — heading 역할도 모양으로 찾는다

패밀리에 쓴 "선언된 게 하나면 그걸 쓴다" 폴백은 weight엔 못 쓴다(11개 역할에 700 일곱·400 넷).
대신 **우선순위 목록 자체**를 재사용한다: 각 id에 대해 정확 일치 우선, 없으면 그 모양의
**가장 짧은** id, 동률은 알파벳순. 가장 짧은 것이 가장 덜 수식된 것 —
`heading` > `heading-large` > `heading-xlarge` — 이고 동률 처리로 문서 순서에 안 흔들린다.
krds는 `heading-large`(weight 700)로 해소됐다. legacy와 같은 값이다.

### ② accent — 매핑하지 않기로 했다 (오너 결정, 2026-09-19)

**측정 결과 매핑이 비싼 게 아니라 정의가 안 된다.**

- 프론트매터에 `accent` 색 키가 **있는 레퍼런스: 32건**
- 없는데 산문에서 accent가 추출되는 레퍼런스: **302건**
- 그 302건이 쓰는 대체 이름: `signal`·`accent-signal`·`points`·`attention-emphasis`·
  `on-emphasis`·`emphasis`·`highlight`·`point`·`point-orange`·`point-red`·`point-green`·
  `point-magenta`·`point-lavender`·`point-gold`·`highlight-cream`·`surface-highlight`·
  `highlight-yellow`·`highlight-teal` — **18가지**

`point → accent` 같은 일반 규칙이 성립하지 않는다. 그리고 현행 accent 값 자체가 타입 필드가
아니라 `detail-projection.ts:94`의 **산문 정규식**이 긁는 것이다. 색 이름을 추측해 슬롯에
넣는 것은 AGENTS.md가 막는 치환이므로, **채택 시 accent를 잃는 것을 받아들이고 기록한다.**

원래 이 문단이 남긴 판단 근거:

krds는 이 색을 `point: "#d63d4a"`라고 부른다. `accent`가 아니다. 그래프에는
`color.point`로 정확히 들어갔고, 어댑터는 `color.accent`를 찾는다.

legacy가 `#D63D4A`를 내주는 경로는 **산문 정규식**이다 —
`detail-projection.ts:94`가 §2의 *"Government Red (Point) … Restricted accent"* 문장에서
긁는다. 즉 현행 값도 타입 필드가 아니라 산문에서 온다.

**`point`를 `accent`로 매핑할지는 마이그레이터가 임의로 정할 일이 아니다.** krds 자신의
설명은 "제한된 강조 — 강조 배지·치명적 경고 전용"이고, 이것이 카탈로그의 `accent` 슬롯과
같은 의미인지는 레퍼런스마다 다르다. 색 이름을 추측해 슬롯에 넣는 것은 AGENTS.md가 막는
바로 그 치환이다.

## 다음에 필요한 것

1. **heading weight 해소** — 어댑터의 heading 역할 해석을 수식어 붙은 id까지 넓히거나,
   마이그레이터가 대표 heading 역할을 표시한다. 유일성 폴백은 못 쓴다.
2. **accent 결정** — `point` → `accent` 매핑은 오너 판단. 아니면 accent를 잃는 것을
   받아들이고 기록한다(현행 값이 산문 추출이라는 점을 감안).
3. 그다음 영수증 → compile → 채택 체크포인트 → 채택 → 리더 확인.

## 확보한 것

- `.omd/execution/2026-09-19/krds-core-review-r1/` — 정확한 미리보기 + 리뷰 요청
- `scripts/build-core-compiler-provenance.cjs` — 번역을 손이 아니라 코드로
- 투영 손실 2건이 **채택 전에** 드러났다. 이것이 파리티 검사를 만든 이유다.
