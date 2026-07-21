---
name: omd-slop-audit
description: "실제 제품 route의 UI·UX copy를 검사해 제품 맥락 없이 반복된 생성형 기본 패턴, 브랜드 근거 없는 장식, 카드·그라데이션·아이콘 타일 남용, 번역투와 추상 카피를 rule ID와 line ref로 진단한다. 'AI slop 잡아줘', '템플릿 같아', '왜 AI가 만든 화면 같지?', 'anti-slop audit' 요청에 사용한다. 접근성 오류와 취향 차이를 별도 등급으로 구분한다."
---

# omd:slop-audit

OmD에서 **AI slop**은 “AI가 만든 화면”이라는 출처 판정이 아니다. **제품의 목적·콘텐츠·브랜드 근거 대신, 생성 도구가 자주 꺼내는 구조와 문구가 반복되어 서로 다른 제품이 같은 화면처럼 수렴한 상태**를 뜻한다.

보라색, 카드, 둥근 모서리, 그라데이션은 죄가 없다. DESIGN.md와 콘텐츠가 요구하면 그대로 둔다. 문제는 이유 없이 여러 기본 패턴이 한 화면에 겹치고, 그 결과 위계·신뢰·사용성이 약해질 때다.

## 모드

- `AUDIT` — 코드와 실제 route를 읽고 근거가 있는 finding만 작성
- `APPLY` — 사용자가 수정까지 요청한 경우 `omd:apply` 계약으로 BLOCK/WARN을 고친 뒤 같은 route에서 재검증
- `COMPARE` — 같은 콘텐츠의 before/after specimen과 rule 설명을 만든다. 제품 기능을 새로 꾸미지 않는다.

## 시작 전에 읽을 것

1. 프로젝트 `DESIGN.md` 전체와 `.omd/preferences.md`
2. 실제 사용자 journey와 대상 route
3. [`references/pattern-catalog.md`](./references/pattern-catalog.md)
4. 출처·라이선스 경계가 필요하면 [`references/sources.md`](./references/sources.md)

판정 우선순위는 `사용자 의도 > DESIGN.md > 실제 제품 정보 구조 > 접근성·플랫폼 요구 > slop taxonomy`다.

## 세 가지 판정 축

### 1. Slop cluster

제품 맥락 없는 기본 패턴이 같은 화면에서 둘 이상 겹치고, 정보 위계나 브랜드 구별성을 약하게 만든다. `SLOP` 배지를 쓴다.

### 2. General quality

대비, overflow, focus, heading 순서, target size, 성능처럼 출처와 무관한 결함이다. `QUALITY`로 분리한다. 접근성 오류를 “AI 느낌”이라고 부르지 않는다.

### 3. Preference

브랜드 또는 사용자가 합리적으로 선택할 수 있는 미감 차이다. `FYI`만 허용한다. 취향을 결함으로 승격하지 않는다.

## 열 가지 review lens

감사 범위가 일부 유행 요소에만 갇히지 않도록 다음 순서로 훑는다.

1. **Hierarchy** — 첫 시선과 핵심 행동이 제품 우선순위와 일치하는가
2. **Containers** — 각 card·panel이 실제 entity·action·selection·layer 경계인가
3. **Typography** — scan·read·compare·operate 중 화면 과업에 맞는 measure·scale·pace인가
4. **Color and depth** — accent·status·selection·elevation 역할이 분리되는가
5. **Evidence** — 실제 workflow·asset·data·state가 generic decoration보다 앞서는가
6. **Density** — group 안과 group 사이의 간격이 다르고 과업에 맞는가
7. **States** — empty·loading·error·permission·long content·success가 포함되는가
8. **Responsive composition** — desktop을 축소하는 대신 viewport별 우선순위를 다시 구성하는가
9. **Motion** — feedback·origin·continuity·space를 설명하며 중단·reduced motion을 지원하는가
10. **Interaction contract** — control의 label·appearance·state·result가 같은 약속을 지키는가

이 목록은 미니멀리즘을 강요하지 않는다. expressive editorial, dense product tool, focused service flow 모두 brief와 실행 근거가 있으면 유효하다.

## 실행 절차

1. **Design read** — 화면 종류, 독자, 핵심 행동, 보존할 동작, 브랜드 근거를 2–4문장으로 정리한다.
2. **정적 검사** — DOM/CSS/JSX에서 결정론적으로 확인 가능한 selector, token, 중첩, 반복, line ref를 수집한다.
3. **실제 route 검사** — 데스크톱과 모바일에서 정보 순서, 상태, overflow, 상호작용, console, 접근성을 본다.
4. **문맥 판정** — 단일 패턴을 금지하지 말고 반복 빈도, 이웃 패턴, DESIGN.md 근거, 콘텐츠 역할을 함께 본다.
5. **최소 처방** — 전체를 새 테마로 바꾸지 않는다. 가장 큰 cluster를 깨는 1–3개 수정부터 제안한다.
6. **재검증** — 수정 전과 같은 route·viewport·행동에서 비교한다. 새로운 generic UI를 추가해 기존 slop을 가리지 않는다.

## finding 형식

```markdown
### [WARN · SLOP] UI-LAYOUT-03 · 모든 내용을 같은 카드로 분절
- 위치: `components/Overview.tsx:84`
- 화면 근거: `/docs/ko` desktop에서 11개 섹션 중 9개가 같은 radius·padding·border 카드
- 문맥: 문서의 읽기 순서보다 컨테이너 반복이 먼저 보임
- 예외 확인: DESIGN.md는 card-heavy dashboard를 요구하지 않음
- 수정: 절차는 열린 목록, 결과 예시는 비교 surface로 바꾸고 실제 독립 개체만 카드 유지
- 검증: heading 순서, 모바일 overflow, 기존 링크 동작을 같은 route에서 재확인
```

severity는 다음처럼 쓴다.

- **BLOCK · QUALITY** — 접근성·동작·overflow·사실성·DESIGN.md 위반
- **WARN · SLOP** — 근거 없는 패턴 cluster가 위계·신뢰·구별성을 약화
- **FYI · PREFERENCE** — 대안은 있으나 제품 요구 안에서 유효한 선택

합산 “taste score”, AI 확률, 근거 없는 100점 만점은 만들지 않는다. finding 수와 해결 여부가 정본이다.

## APPLY 가드레일

- 사용자-facing creation funnel이면 Home → `/builder` → 선택 → preview에서 검증한다.
- `/reference/[id]`만 보고 builder 작업을 완료하지 않는다.
- 기존 route, 데이터 흐름, 필드명, 카피, 상태를 보존하라는 요청을 최우선으로 둔다.
- 새 token은 DESIGN.md 확장 승인 없이 만들지 않는다.
- 이미지·아이콘·motion은 제품 목적이 있을 때만 추가하고 reduced-motion·alt·fallback을 함께 다룬다.
- 수정이 끝나면 `omd:designer-review`, `omd:feel`, 접근성 검사와 역할이 겹치는 finding을 중복 보고하지 않는다.

## 다른 OmD 역할과의 관계

- `omd:designer-review`: 브랜드 토큰과 시각 일관성
- `omd:feel`: motion·target·contrast·CLS 같은 측정 가능한 interface detail
- `omd:humanize`: locale별 문장과 UX copy 후편집
- `omd:slop-audit`: 제품 맥락 없는 **패턴 수렴과 cluster**

## 금지

- 특정 색·폰트·radius·카드 하나만으로 slop 판정
- “AI가 썼다”거나 작성자를 추정하는 표현
- 모든 화면을 비대칭·Awwwards·dark-tech 스타일로 교체
- line ref, route evidence, DESIGN.md 예외 확인 없는 finding
- 디자인 문제와 접근성 오류를 하나의 취향 점수로 합치기
- 실제 제품 상태를 보지 않고 정적 스크린샷만으로 완료하기
