# 프리셋 — genres/auth

## P-AU-01 로그인
**언제** — 기존 계정으로 이메일/아이디+비밀번호 세션을 열 때. 소셜이 있으면 P-AU-03을 이 화면에 조립.
**언제 아닌가** — 회원가입(P-AU-02). 세션 만료 재인증만(P-AU-06). 매직 링크만의 메일 입력은 P-AU-04 계열.
**Base** — shadcn `Card` (`Card`, `CardHeader`, `CardTitle`,
`CardDescription`, `CardContent`, `CardFooter`) + Field 패밀리(P-PR-08)
+ `Input`(P-PR-02) + `InputGroup`/`InputGroupInput`/`InputGroupAddon`/
`InputGroupButton` + `Button`/`Spinner`(P-PR-01). 검증 P-PR-09.
**해부** — 락업(P-FN-08) → 제목 → 소셜(P-AU-03) → `FieldSeparator`("또는")
→ 식별자 → 비밀번호(트레일링 표시 토글) → 폼 에러 슬롯 → primary "로그인"
→ 링크(P-AU-04, P-AU-02). 협폭 중앙 웰, 와이드 가치|폼 2열(GS5, C32).
풀폭 pill을 화면 끝에 붙이지 않음(C7). 토글: `type` password↔text, 아이콘
`aria-hidden`, 이름 "비밀번호 표시"/"숨기기", `aria-pressed`, 히트 ≥44(C15).
자동완성: 식별자 `username`|`email`, 비밀번호 `current-password`.
**상태** — 필드 enabled/hover/focus-visible/error/disabled. 토글 pressed.
제출 idle/submitting(`aria-busy`, C4)/invalid. **필드 에러**(형식, C16
3채널)와 **폼 에러**(자격 불일치, `FieldError` `role="alert"` 또는 `Alert`
`variant="destructive"`) 분리 — 자격 오류는 필드를 쪼개지 않는다. blur
검증(C13). helper collapse 금지(G39).
**접근성** — 네이티브 `<form>`. 라벨 `FieldLabel`/`htmlFor`(C12). 토글은
APG Button(`aria-pressed`), 입력 이름은 유지. 실패 포커스는 폼 에러 또는
첫 무효 필드 중 시스템 하나. `:focus-visible`(G19). `h1`+P-FN-02.
**토큰 슬롯** — `--size-auth-well`, 카드 면/보더/`--radius-card`, 컨트롤
높이(C9), 에러 3종, 토글 아이콘, 링크, primary 면(소셜 필과 동시 금지 C3).
**게이트** — C1–C5 C9 C11–C16 C42 C45 · G16 G18 G19 G26 G39 G40 G49 · GS4 GS5 GS8
**검증** — 미검증 — 리서치 유도

## P-AU-02 회원가입
**언제** — 새 계정(식별자+새 비밀번호[+필수 동의])을 만들 때. 한
화면 한 질문이 원칙이되 이메일·비밀번호는 한 과업으로 묶을 수 있다.
**언제 아닌가** — 로그인(P-AU-01). 프로필·동네는 가입 후 P-OB-02.
약관 전문을 이 폼 안에 스크롤로 넣는 화면.
**Base** — P-AU-01과 같은 Card+Field. 동의는 P-PR-04
`Checkbox`+`FieldLabel`. 비밀번호 규칙은 `FieldDescription`(툴팁 금지,
P-PR-24). 소셜은 P-AU-03.
**해부** — 제목 → 소셜 또는 이메일(`autocomplete="email"`) → 새
비밀번호(`autocomplete="new-password"`, 표시 토글은 P-AU-01과 동일)
→ 확인 필드를 쓸 때만 같은 `new-password`+불일치 필드 에러 → 필수
동의(약관은 라벨 안 텍스트 링크, 체크와 별 포커스) → 폼 에러 →
primary "가입하기" → 로그인 링크. 부가 프로필은 P-OB-02. 규칙은
blur·제출에서(C13). 성공은 다음 화면(P-AU-05 또는 온보딩)이 피드백(G16).
**상태** — P-AU-01 필드 매트릭스 + 체크 unchecked/checked/error.
submitting 잠금(C4). "이미 가입됨"은 폼 에러+로그인 링크, 필드 형식이 아님.
**접근성** — P-PR-08/09. 동의는 `FieldSet`+`FieldLegend` 또는 체크+라벨.
약관 링크는 별도 탭 스톱. 토글 `aria-pressed`. `id`/`name`/`autocomplete`
안정(비밀번호 매니저). 실패 포커스 정책은 P-AU-01과 동일하게 고정.
**토큰 슬롯** — P-AU-01 슬롯 + 동의 라벨 갭, 규칙 설명 muted(4.5:1 G40),
링크는 시스템 정식 마크(G8).
**게이트** — C3 C4 C11–C16 C27 C45 · G16 G18 G19 G28 G39 G40 · GS4 GS8
**검증** — 미검증 — 리서치 유도

## P-AU-03 소셜 로그인 버튼 그룹
**언제** — Google·Apple·카카오 등 외부 IdP로 세션을 열 때.
로그인·가입 화면에 붙는 그룹.
**언제 아닌가** — IdP가 하나뿐이고 이메일이 없으면 그 버튼이
페이지 primary(P-PR-01). 공유·팔로우 아이콘 행.
**Base** — shadcn `Button` `variant="outline"` + 세로
`ButtonGroup`(`orientation="vertical"`, `aria-label`). 구분선
`FieldSeparator`. 마크는 인라인 SVG(G31), 이모지 금지(G30).
**해부** — 이메일 폼이 주 경로면 소셜은 outline 스택, 제품 primary
필을 소셜에 쓰지 않음(C3). 소셜이 주 경로면 소셜이 위. 라벨은
"Google로 계속하기" — 아이콘-온리 금지. 브랜드 가이드가 색·락업을
강제하면(Google 4색 G+흰 면, Apple 흑/백, 카카오 브랜드 면) **그
제공자만** 적용하고 제품 악센트로 재색하지 않음. 기본은 세로 스택,
웰 안(C7) — 아이콘 한 줄로 최소 폭을 깨지 않음. 로딩은 누른 버튼만
Spinner, 형제는 disabled(C4).
**상태** — 각 버튼 default/hover/pressed/focus-visible/disabled/loading.
에러는 그룹 아래 폼 에러(P-AU-01 슬롯) — 버튼 색만으로 실패를 그리지
않음(C16).
**접근성** — 그룹 `role="group"` + `aria-label`("소셜 로그인"). 보이는
라벨이 이름, 마크 `aria-hidden`. 리다이렉트여도 이름에 "팝업"을 넣지
않음. Tab으로 각 제공자. 포커스 링 즉시(G15, G19).
**토큰 슬롯** — 제공자별 면/글자/보더(브랜드 락, D-ID로 분리),
아이콘 갭(C6), 버튼 높이(C9), 그룹 갭, Separator 룰.
**게이트** — C1–C6 C9 C16 C42 · G15 G19 G23 G30 G31 G49 · GS1 GS8
**검증** — 미검증 — 리서치 유도

## P-AU-04 비밀번호 재설정
**언제** — 로그인에서 비밀번호를 잊었을 때. 요청(식별자) → 안내
→ (메일 링크 후) 새 비밀번호.
**언제 아닌가** — 로그인된 사용자의 비밀번호 변경. OTP 로그인
(P-AU-05). 가입.
**Base** — P-AU-01과 같은 Card+Field+P-PR-09. 완료 안내는 같은
웰 본문(결과가 보이면 토스트 금지 G16). 새 비밀번호 토글은
P-AU-01.
**해부** — **요청**: 제목 → 한 줄 이유 → 이메일
(`autocomplete="email"`) → primary "재설정 메일 보내기" →
로그인으로. 제출 후 **열거 금지** — 가입 여부와 무관한 같은
확인 카피. **설정**(토큰 유효): 새 비밀번호
`autocomplete="new-password"` + 표시 토글 → primary "비밀번호
바꾸기". 토큰 만료는 폼 에러+요청 링크. 요청과 설정을 한 폼에
두지 않음.
**상태** — 요청 idle/submitting/sent. 설정 idle/submitting/
invalid/expired. 재전송 쿨다운은 버튼 라벨에("다시 보내기,
30초") — 스피너만으로 죽이지 않음(C5, C4).
**접근성** — P-PR-09. sent는 `h1` 교체+P-FN-02. 만료 에러
`role="alert"`. 토큰 쿼리를 화면에 노출하지 않음(GS4).
**토큰 슬롯** — P-AU-01 슬롯, 쿨다운 숫자 타이포, 확인 본문
measure.
**게이트** — C3 C4 C5 C12 C13 C16 · G16 G18 · GS4 GS8
**검증** — 미검증 — 리서치 유도

## P-AU-05 이메일/코드 인증 (OTP)
**언제** — 가입·로그인·민감 동작 확인을 위해 메일/SMS 짧은 코드를
받을 때.
**언제 아닌가** — 상시 비밀번호(P-AU-01). 복구 메일 링크만의 재설정
(P-AU-04). 백업 코드 관리 화면.
**Base** — shadcn `Input OTP` (`InputOTP`, `InputOTPGroup`,
`InputOTPSlot`, `InputOTPSeparator`) — **input-otp**.
`pattern={REGEXP_ONLY_DIGITS}`, 길이 토큰(6 기본). 래퍼 P-PR-08/09.
재전송 `Button` `variant="ghost"`.
**해부** — 제목 → 가린 목적지(가짜 주소 금지 G18) → OTP → 필드/폼
에러 분리 → primary "확인"(자동 제출이어도 버튼 유지) → 재전송 ·
다른 방법. 슬롯은 한 필드 — 숨은 입력이 값, `autocomplete="one-time-code"`, `inputMode="numeric"`. 붙여넣기 한 번에 채움.
`InputOTPSeparator`는 `aria-hidden`. 재전송 쿨다운은 P-AU-04와 같다.
**상태** — 슬롯 empty/filled/caret/`aria-invalid`. 폼 idle/submitting/
invalid/expired. 자동 제출 시 완료 순간 잠금(C4), 실패면 슬롯 유지+
에러·첫 슬롯 포커스. disabled는 opacity만이 아님(G39).
**접근성** — 보이는 라벨이 OTP를 지배. 에러 3채널(C16) — 슬롯
`aria-invalid`+텍스트+색. 자리마다 숫자 위젯으로 읽히지 않게 한 필드.
오입력=필드 에러, 만료·횟수 초과=폼 에러. 활성 슬롯 `:focus-visible`
(G19). 재전송 Button, 쿨다운 중 disabled+남은 시간 이름.
**토큰 슬롯** — 슬롯 크기 vs 히트, `--radius-control`, 면/보더, caret,
에러 3종, `--size-otp-gap`, 높이 페어(C9).
**게이트** — C2 C4 C9 C11 C12 C14 C16 · G15 G18 G19 G39 G40 · GS4 GS8
**검증** — 미검증 — 리서치 유도

## P-AU-06 세션 만료 처리
**언제** — 보호 화면에서 세션이 끊겼을 때(401·만료 타이머). 하던 일을
잃지 않고 다시 열 때.
**언제 아닌가** — 로그인 페이지의 자격 오류(P-AU-01). 403(만료
아님). 결과가 이미 보이는 저장에 토스트(G16).
**Base** — shadcn `Dialog`(P-PR-20: `Dialog`, `DialogContent`,
`DialogHeader`, `DialogTitle`, `DialogDescription`, `DialogFooter`) 안에
P-AU-01 짧은 폼 또는 P-AU-03. P-PR-21이 아님 — 오버레이 클릭으로
본문 조작을 열지 않음. 만료를 Sonner만으로 알리지 않음(P-PR-27).
**해부** — 스크림+다이얼로그: 제목("다시 로그인해 주세요") → 한 줄
이유 → 식별자(가능하면 read-only 이메일 C11) + 비밀번호/소셜 → 확인
primary → 다른 계정은 링크(초안 폐기 가능성을 문장으로). 본문 초안은
로컬 보관, 성공 후 같은 라우트·같은 필드로 복귀(P-FN-02). 전체
리다이렉트만 하고 초안을 버리면 실패. 예고 배너가 있으면 연장 액션 1개,
배너≠토스트.
**상태** — ok / expiring / expired(차단). 다이얼로그 open, 폼은 P-AU-01
상태. 재인증 loading 중 뒤 화면 조작 불가. 실패는 다이얼로그 안 폼 에러.
**접근성** — APG Dialog (Modal). `aria-modal` + `aria-labelledby`. 열림
포커스=비밀번호 또는 소셜 첫 버튼. Tab 트랩. Escape 기본: 닫아도
본문은 인어트(로그인 페이지로 나가기는 시스템 한 줄). 성공 후 포커스
복귀. 예고 배너는 `status`.
**토큰 슬롯** — P-PR-20 스크림/오버레이 + P-AU-01 필드.
`--size-dialog-max`를 로그인 웰과 맞출지는 결정 표.
**게이트** — C3 C4 C11 C16 C44 · G16 G19 G26 G27 · GS4 GS8
**검증** — 미검증 — 리서치 유도
