# 프리셋 — primitives/form (shadcn·Radix 대응)


폼 컨트롤 어휘. Base는 shadcn/ui Radix 경로의 현재 컴포넌트명과
`radix-ui` 프리미티브. 렌더 검증 전.

## P-PR-01 버튼
**언제** — 제출·취소·파괴적 확정·아이콘 명령. 한 뷰 primary 1개(C3). /
**언제 아닌가** — 이동은 Link(APG Button vs Link). 필터 칩·토글·전체클릭
카드 안의 CTA 병존(C25)은 이 프리셋이 아니다.
**Base** — shadcn Button (`Button`, `buttonVariants`). `variant`: default |
outline | ghost | destructive | secondary | link. `size`: default | xs | sm |
lg | icon | icon-xs | icon-sm | icon-lg. 네이티브 `<button>`. Radix Button
프리미티브는 없다. `asChild`일 때만 Radix Slot (`Slot.Root`, `radix-ui`).
비동기는 자식 shadcn Spinner (`data-icon="inline-start"` | `inline-end`).
**해부** — 라벨(동사)이 접근 이름. 아이콘은 장식이면 `aria-hidden`,
아이콘-온리는 `aria-label`. 갭은 시스템 값, 광학 중심(C6). 시각과 히트는
분리 — 시각 32여도 히트 ≥44×44(C2). 밀도는 인풋과 공유 스케일(C9, 예
32/40/48). 풀폭 pill을 화면 가장자리에 붙이지 않는다(C7). 320–1920에서
라벨 2줄 랩 실패(G49).
**상태** — 8상태를 서로 다른 화면으로: default, hover, active(pressed),
focus-visible, disabled, loading, error(제출 실패·`aria-invalid`),
empty(해당 없음 — 빈 라벨 금지). 로딩은 스피너+라벨 유지, 더블 서브밋
불가, 포커스 유지형/disable형 중 하나를 전역으로(C4). destructive는
accent fill 금지(C3). color/background/shadow만 전환 — `transition: all`
금지(G10), 보더 두께로 상태 구분 금지(G39). shadcn 기본
`disabled:opacity-50`·`transition-all`은 덮어쓴다.
**접근성** — APG Button Pattern. Space·Enter 활성화. 토글이면
`aria-pressed`, 라벨은 상태가 바뀌어도 유지. 사용 불가면 native
`disabled`. 로딩 `aria-busy="true"`, 이름을 스피너로 대체하지 않음.
포커스 링은 `:focus-visible` 전용(G19), 즉시(G15), 대비 ≥3:1(C8).
**토큰 슬롯** — primary 면/글자, destructive 면/글자(악센트 재사용 금지),
--radius-control, --size-control-{sm,md,lg}(인풋과 페어), --space-icon-gap,
--focus-ring-width·색, --motion-duration-control, disabled 면·글자·보더
(opacity 단독 금지).
**게이트** — C1–C10 C42 · G10–G15 G19 G26 G27 G39 G40 G49 · GS1 GS7 GS8
**검증** — 미검증 — 리서치 유도

## P-PR-02 인풋
**언제** — 한 줄 텍스트·숫자·이메일·암호·검색. / **언제 아닌가** — 여러 줄은
텍스트에어리어. 배타 선택은 라디오/리스트박스(P-FN-01). 라벨을
placeholder로 대체하는 검색창도 실패(C12).
**Base** — shadcn Input (`Input`). 네이티브 `<input>`. Radix 인풋
프리미티브는 없다. 리딩/트레일링 애드온은 shadcn Input Group
(`InputGroup`, `InputGroupInput`, `InputGroupAddon`, `InputGroupButton`,
`InputGroupText`). 라벨·설명·에러 조립은 P-PR-08 Field.
**해부** — 보이는 라벨이 컨트롤을 지배한다(`htmlFor`/`id`). placeholder는
예시일 뿐, 입력 후에도 라벨이 남는다(C12). 리딩 아이콘=목적, 트레일링=
클리어/부가 — 아이콘 히트 ≥44(C15). 높이는 같은 밀도 버튼과 페어(C9).
helper/에러 슬롯은 예약되어 collapse하지 않는다(G39). 보더 두께는 상태에서
고정, 포커스 강조는 링(C14의 두꺼워짐은 링으로 — 보더-width 변경 아님
G39).
**상태** — enabled, hover, focus-visible, error, disabled, read-only.
read-only는 포커스·복사 가능, disabled는 포커스 불가(C11). empty는 라벨이
있는 빈 값이지 placeholder-only가 아니다. 에러는 색+supporting text+
`aria-invalid` 3채널(C16).
**접근성** — 네이티브 텍스트 필드(APG는 위젯 대신 native input을 권장).
Tab 진입·이탈. 이름은 shadcn Label → Radix Label (`Label.Root`) 또는
`aria-labelledby`. 설명·에러는 `aria-describedby`. 실패 시
`aria-invalid="true"`. 클리어 버튼은 독립 포커스+이름. 포커스 링은
`:focus-visible` 전용(G19).
**토큰 슬롯** — --size-control-{sm,md,lg}(버튼과 공유), --radius-control,
면/보더/placeholder 색, error 보더·링·텍스트, --focus-ring-width·색,
--space-control-pad, disabled 면·글자·보더(opacity 단독 금지), 애드온 갭.
**게이트** — C9 C11 C12 C14 C15 C16 C42 · G15 G19 G26 G28 G39 G40 · GS1 GS7
GS8
**검증** — 미검증 — 리서치 유도

## P-PR-03 텍스트에어리어
**언제** — 후기·문의·주소처럼 여러 줄·불확정 길이 텍스트. / **언제 아닌가**
— 한 줄 값(이름·메일)은 인풋. 채팅 입력도 콘텐츠 웰 안에서(C37), 화면
양 끝으로 찢지 않는다.
**Base** — shadcn Textarea (`Textarea`). 네이티브 `<textarea>`. Radix
프리미티브 없음. 카운터·전송을 붙이면 Input Group (`InputGroupTextarea` +
`InputGroupAddon align="block-end"`). 라벨 조립은 P-PR-08.
**해부** — 라벨 → 컨트롤 → 설명 → 에러. 라벨을 placeholder로 대체
금지(C12). 최소 높이 토큰, 가로 리사이즈는 레이아웃을 깨므로 기본 금지.
카운터는 에러 슬롯과 자리를 다투지 않게 애드온 또는 설명 줄에 고정.
helper 슬롯 collapse 금지(G39). 본문 measure 상한을 웰로(C31).
**상태** — enabled / hover / focus-visible / error / disabled / read-only.
empty는 라벨이 있는 빈 값. loading은 제출 버튼(P-PR-01) 쪽 — 영역
opacity로 죽이지 않는다. 에러 3채널(C16). 포커스 링은 보더 두께 변경이
아니라 링(G39/C14).
**접근성** — 네이티브 multiline textbox. Tab 진입·이탈, Enter는 줄바꿈이지
폼 제출이 아님(제출은 명시 버튼). 이름=`<label for>`, 설명·에러=
`aria-describedby`, 실패 시 `aria-invalid="true"`. 포커스는
`:focus-visible`(G19). 카운터를 매 키마다 라이브 발표하지 않는다.
**토큰 슬롯** — --size-textarea-min-h, --radius-control, 면/보더/placeholder,
error 3종, --focus-ring-width·색, --space-control-pad, --measure-prose
(CJK ~40자 안내), disabled 면·글자(opacity 단독 금지).
**게이트** — C11 C12 C13 C14 C16 C31 C37 C42 · G15 G19 G25 G26 G39 G40 ·
GS1 GS7 GS8
**검증** — 미검증 — 리서치 유도

## P-PR-04 체크박스
**언제** — 약관 동의·복수 선택처럼 항목마다 독립 on/off. / **언제 아닌가**
— 하나만 고르면 라디오. 즉시 적용 설정 on/off는 스위치(APG: checked가
아니라 on/off가 맞을 때). 정적 배지에 onClick을 얹지 않는다(C27).
**Base** — shadcn Checkbox (`Checkbox`). Radix Checkbox (`Checkbox.Root` +
`Checkbox.Indicator`, `radix-ui`). 라벨은 shadcn Label / FieldLabel
(Radix Label `Label.Root`). 그룹은 FieldSet + FieldLegend 또는 FieldGroup.
**해부** — 컨트롤(히트 ≥44, 시각 박스는 작아도 됨 C2) + 보이는 라벨.
라벨 클릭이 토글한다. 그룹이면 범례가 집합을 지배하고 각 행은
체크+라벨(+설명). 네이티브 체크 노출 금지 — 토큰 스타일(G28).
인디케이터(체크 글리프)는 `aria-hidden`, 이름은 라벨에서 온다.
**상태** — unchecked / checked / indeterminate(`checked="indeterminate"`) /
hover / focus-visible / disabled / error. loading·empty는 해당 없음. 혼합
상태는 그룹 헤더 체크에만. disabled는 포커스 불가, opacity만으로
사라지지 않는다(G39/C42). 에러는 색+텍스트+`aria-invalid`(C16).
**접근성** — APG Checkbox Pattern(dual-state 또는 tri-state). 역할
`checkbox`. Space가 토글(Enter에 의존하지 않음). `aria-checked` true |
false | mixed. 그룹은 `role="group"` 또는 `fieldset`+`legend`. 각 체크는
독립 탭 스톱 — 라디오처럼 화살표로 묶지 않는다. 포커스 링
`:focus-visible`(G19).
**토큰 슬롯** — 박스 시각 크기 vs 히트(≥44), --radius-checkbox, 보더/면/
체크 글리프, checked 면, mixed 인디케이터, error 보더·텍스트, --focus-ring,
disabled 면·글자, 라벨 갭.
**게이트** — C2 C11 C16 C27 C42 · G19 G26 G28 G39 G40 · GS1 GS7 GS8
**검증** — 미검증 — 리서치 유도

## P-PR-05 라디오 그룹
**언제** — 배송 방법·정렬처럼 보이는 선택지가 적고 하나만 고를 때. /
**언제 아닌가** — 복수는 체크. 옵션이 많거나 리치면 리스트박스(P-FN-01,
C17). on/off 하나면 스위치. 네이티브 `<select>` 팝업은 G28.
**Base** — shadcn Radio Group (`RadioGroup`, `RadioGroupItem`). Radix Radio
Group (`RadioGroup.Root` / `Item` / `Indicator`, `radix-ui`). 항목 라벨은
Label/FieldLabel. 그룹 범례는 FieldSet + FieldLegend. 초이스 카드는
FieldLabel이 Field 전체를 감싼다.
**해부** — 범례 → (설명) → 항목들(컨트롤+라벨[+설명]). 항목 히트 ≥44(C2).
선택 표시는 인디케이터 또는 카드 악센트 보더 중 시스템이 하나 — 장식
스쿼글로 상태를 대체하지 않는다(G8). 같은 그룹에서 카드형과 플레인
라디오를 섞지 않는다.
**상태** — 그룹 idle / focus-within. 항목 unchecked / checked / hover /
focus-visible / disabled / error(그룹 `data-invalid` + 항목
`aria-invalid`). 화살표로 옮기면 새로 포커스된 항목이 즉시 체크(툴바 안이
아닌 기본 패턴). empty는 “아직 선택 없음”을 허용할 때만 — 제출 검증이
잡는다.
**접근성** — APG Radio Group Pattern(툴바 밖). 컨테이너 `radiogroup`, 항목
`radio`. Tab/Shift+Tab은 그룹 진입·이탈 — 진입 시 체크된 항목, 없으면 첫
항목. Right/Down 다음을 체크, Left/Up 이전을 체크, 끝에서 순환. Space는
미체크 포커스 항목을 체크. roving tabindex(Radix). 그룹에 보이는 이름
(`aria-labelledby` 또는 `aria-label`) 필수.
**토큰 슬롯** — 라디오 시각 크기 vs 히트, 인디케이터 색, 항목 갭, 초이스
카드 면/보더/선택 악센트, error 3종, --focus-ring, disabled 면·글자,
--radius-control.
**게이트** — C2 C3 C16 C17 C42 · G8 G19 G26 G28 G39 G40 · GS1 GS7 GS8
**검증** — 미검증 — 리서치 유도. 온집 v2 상품 갤러리 썸네일 행이
radiogroup으로 조립된 적은 있다(P-CM-02) — 폼 컨트롤 G2는 아니다.

## P-PR-06 스위치
**언제** — 알림·비행기 모드처럼 즉시 적용되는 설정 on/off. / **언제 아닌가**
— 제출 전 동의·복수는 체크박스. 배타 목록은 라디오. 라벨이 “켜기/끄기”로
바뀌는 컨트롤은 APG Button(`aria-pressed`)이지 스위치가 아니다.
**Base** — shadcn Switch (`Switch`, `size`: sm | default). Radix Switch
(`Switch.Root` + `Switch.Thumb`, `radix-ui`). 폼 제출용 숨은 input은 Root가
렌더. 라벨은 Label/FieldLabel. 가로 필드는 Field `orientation="horizontal"`.
**해부** — 보이는 라벨이 이름을 지배하고, 트랙+썸이 상태만 그린다. 라벨
텍스트는 on/off와 함께 바뀌지 않는다(APG 강제). 시각이 작아도 히트
≥44(C2). 썸 이동은 transform만(G14). `prefers-reduced-motion`이면 점프(G27).
**상태** — unchecked(off) / checked(on) / hover / focus-visible / disabled /
error(`aria-invalid` + Field `data-invalid`). loading은 라벨 옆 메타이지
트랙 opacity가 아님. empty 없음. disabled는 포커스 불가, 다크에서 녹아
사라지지 않는다(C42).
**접근성** — APG Switch Pattern. 역할 `switch`. Space 토글, Enter는 선택
(Radix는 둘 다). on이면 `aria-checked="true"`, off면 false. 이름은 보이는
라벨 — 상태 문자열을 이름에 넣지 않는다. 그룹이면 `group`/`fieldset`+범례.
설명은 `aria-describedby`. 포커스 링 `:focus-visible`(G19).
**토큰 슬롯** — 트랙 크기(sm/default) vs 히트, on 면/off 면(서로 다른 색,
opacity만 금지), 썸 색·크기, --motion-duration-switch, --focus-ring, error
보더·텍스트, disabled 트랙·썸·라벨, 라벨 갭.
**게이트** — C1 C2 C11 C16 C42 · G10 G14 G15 G19 G26 G27 G39 G40 · GS1 GS7
GS8
**검증** — 미검증 — 리서치 유도

## P-PR-07 슬라이더
**언제** — 가격 범위·볼륨처럼 연속/스텝 숫자 구간. / **언제 아닌가** — 이산
선택(S/M/L)은 라디오 또는 리스트박스. 진행률만이면 Progress. 터치 AT에서
제스처가 키 이벤트를 못 만들 수 있으니(APG 경고) 핵심 과업이면 숫자
인풋을 병기한다.
**Base** — shadcn Slider (`Slider`). Radix Slider (`Slider.Root` / `Track` /
`Range` / `Thumb`, `radix-ui`). `value`는 number[]. 두 값이면 레인지.
`orientation="vertical"` 지원. 숨은 input이 썸마다 폼 값을 낸다.
**해부** — 라벨(+현재값 텍스트) → 트랙(Range가 채움) → 썸. 썸 시각이
작아도 히트 ≥44(C2). 현재값은 트랙 밖 텍스트로도 보여 색각에 의존하지
않는다. 멀티 썸 통과를 막을 때 `minStepsBetweenThumbs`. 값 커밋은
`onValueCommit`(드래그 중 매 스텝 검증 금지 — C13과 같은 정신).
**상태** — default / hover(썸) / active(드래그) / focus-visible(썸) /
disabled. error는 필드 래퍼 3채널(C16). loading·empty 해당 없음. disabled는
트랙·썸·값 텍스트가 남는다(G39/C42). 보더 두께로 포커스를 그리지 않는다.
**접근성** — 단일: APG Slider Pattern. 멀티: APG Slider (Multi-Thumb)
Pattern. 포커스는 썸(`role="slider"`). `aria-valuemin`/`max`/`now`, 단위가
숫자만으로 안 읽히면 `aria-valuetext`. 세로면 `aria-orientation="vertical"`.
키: Right/Up +1 step, Left/Down −1, Home min, End max, PageUp/PageDown(및
Radix Shift+Arrow) 큰 스텝. 멀티 썸은 각각 탭 스톱, 탭 순서는 값과 무관하게
고정. 포커스 `:focus-visible`(G19).
**토큰 슬롯** — 트랙 두께·면, Range 채움, 썸 크기 vs 히트, --focus-ring(썸),
--motion-duration(reduced-motion 점프), 값 텍스트 타이포, disabled
트랙/썸/텍스트, error 색.
**게이트** — C2 C13 C16 C42 · G14 G15 G19 G26 G27 G39 G40 · GS1 GS7 GS8
**검증** — 미검증 — 리서치 유도

## P-PR-08 폼 필드
**언제** — 라벨·컨트롤·설명·에러를 한 단위로 조립할 때. / **언제 아닌가** —
라벨 없는 장식 컨트롤. placeholder를 라벨 자리에 쓰는 검색창. 에러를
토스트로만 알리는 필드(G16).
**Base** — shadcn Field 패밀리: `Field`(`role="group"`, `orientation`
vertical|horizontal|responsive, `data-invalid`), `FieldLabel`,
`FieldDescription`, `FieldError`, `FieldContent`, `FieldTitle`, `FieldGroup`,
`FieldSet`, `FieldLegend`, `FieldSeparator`. FieldLabel은 shadcn Label →
Radix Label (`Label.Root`). Field 자체는 Radix Form이 아니다(Radix Form은
Preview, shadcn 기본 경로는 Field 조립).
**해부** — 순서 고정: FieldLabel → 컨트롤 → FieldDescription → FieldError.
가로형은 컨트롤과 라벨을 나란히, 설명은 FieldContent로 묶는다. 관련 필드는
FieldGroup, 의미 묶음은 FieldSet+FieldLegend(`<fieldset>`/`<legend>`).
설명과 에러는 별 슬롯 — 에러가 설명을 밀어 없애지 않고, 빈 에러 슬롯이
레이아웃을 collapse하지 않는다(G39). 라벨은 입력 후에도 보인다(C12).
**상태** — default / hover(컨트롤) / focus-visible / disabled(`data-disabled`
on Field) / error(`data-invalid` on Field + 컨트롤 `aria-invalid`) /
empty(값 없음, 라벨은 유지). loading은 제출 상태(P-PR-09)에 맡긴다.
**접근성** — 네이티브 label/for + group. FieldSet/FieldLegend가 라디오·체크
집합을 묶는다. FieldError는 `role="alert"` — APG Alert Pattern, 포커스를
빼앗지 않고 발표. 컨트롤은 `aria-invalid`, 설명·에러 id를
`aria-describedby`로 연결. 키보드 계약은 자식 컨트롤의 APG를 따른다.
포커스 링은 컨트롤의 `:focus-visible`(G19).
**토큰 슬롯** — 라벨 타이포·색, 설명 muted(에러·라벨은 본문 4.5:1 C45/G40),
error 텍스트 색, 필드 갭(스케일, 17px 금지 G24), 가로형 간격, 에러 슬롯
최소 높이, disabled 라벨 색(opacity 단독 금지).
**게이트** — C11 C12 C16 C42 C45 · G16 G18 G19 G24 G26 G39 G40 · GS1 GS4 GS7
GS8
**검증** — 미검증 — 리서치 유도

## P-PR-09 폼 검증·제출 상태
**언제** — 필드 단위 검증과 폼 제출(대기·성공·실패)을 한 계약으로 묶을 때. /
**언제 아닌가** — 키 입력마다 에러를 띄우는 라이브 밸리데이션을 기본으로
쓰는 경우(C13). 이미 필드 옆에 있는 에러를 토스트로 반복(G16). Jane Doe류
가짜 값(G18).
**Base** — shadcn Forms 가이드: Field 조립 + React Hook Form(`useForm`,
`Controller`) 또는 TanStack Form 또는 Formisch. 스키마는 Zod 등 Standard
Schema — `FieldError`의 `errors`/`issues`. 제출 버튼은 P-PR-01 Button +
Spinner. Radix Form(`Form.Root`/`Field`/`Control`/`Message`/`Submit`,
Preview)은 shadcn 기본 경로가 아니며, 쓰더라도 같은 블러·3채널 계약을
지킨다.
**해부** — `<form>` → FieldGroup → 제출 행(primary 1, 보조는 ghost/outline).
검증 순서: 블러에서 해당 필드 → 제출에서 전체. 첫 실패 필드로 포커스
이동, 그 필드의 FieldError가 발표(`role="alert"`). 서버 에러는 같은 슬롯에
합치거나 상단 요약+각 필드 링크. 성공은 문맥이 바뀌면 그 화면이
피드백이다.
**상태** — idle / submitting(버튼 loading, 더블 서브밋 잠금, `aria-busy`) /
invalid(필드 error 3채널) / server-error / success. 필드 내부 타이핑 중에는
새 에러를 만들지 않는다. 한 번 invalid가 된 필드는 수정 중 해제 가능.
disabled 제출은 opacity만이 아님(G39/C42).
**접근성** — 필드 에러: APG Alert Pattern(`role="alert"`) + 컨트롤
`aria-invalid="true"` + 에러 텍스트 + 색(C16). 제출 실패 요약도 alert,
포커스는 요약 또는 첫 무효 컨트롤 — 둘 중 하나를 시스템이 고정. 열린
리스트박스에서 Enter가 바깥 폼을 제출하지 않는다(C23, P-FN-01). 검증 기본은
blur(C13) — RHF라면 `mode: "onBlur"`(재검증만 `onChange` 허용).
**토큰 슬롯** — error 색·텍스트, 성공 피드백 면(토스트를 쓸 때 G16 해당
여부 먼저), 제출 버튼 loading 스피너 색, --motion-duration, 폼 필드 수직
리듬(--space-field-gap), 서버 에러 요약 보더(두께 변경으로 상태 만들지
않음).
**게이트** — C4 C12 C13 C16 C23 C42 · G16 G18 G19 G26 G39 G40 · GS1 GS4 GS7
GS8
**검증** — 미검증 — 리서치 유도
