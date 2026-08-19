# 프리셋 — primitives/overlay (shadcn·Radix 대응)


## P-PR-20 다이얼로그 (모달)
**언제** — 뒤 화면을 인어트로 두고 한 과업(짧은 폼, 설정, 편집)을
끝낸 뒤에만 본문으로 돌아갈 때.
**언제 아닌가** — 파괴적 확인만이면 P-PR-21. 가장자리 보조 패널이면
P-PR-22. 트리거 옆 리치 콘텐츠면 P-PR-23. 한 줄 힌트면 P-PR-24.
전역 검색·점프면 P-PR-26.
**Base** — shadcn `Dialog` (`DialogTrigger`, `DialogPortal`,
`DialogOverlay`, `DialogContent`, `DialogHeader`, `DialogTitle`,
`DialogDescription`, `DialogFooter`, `DialogClose`). Radix `Dialog`
(`radix-ui` 통합 패키지, 구 `@radix-ui/react-dialog`). `modal` 기본
`true`.
**해부** — 트리거 → 포털(스크림 오버레이 + 콘텐츠). 콘텐츠 순서 고정:
타이틀 → 디스크립션 → 본문 → 푸터(취소 ghost · 확인 primary 1개) →
닫기(X, 히트 ≥44). 스크림이 본문을 가리고, 콘텐츠가 스크롤을 가짐.
본문이 넘치면 헤더/푸터는 고정, 본문만 스크롤. 본문은 콘텐츠 웰
안(C31, C7). 열림 시 body 스크롤 락 — 스크롤바 폭 보정치
(`padding-right` 또는 `scrollbar-gutter`)를 빼면 레이아웃이 가로로
뛴다. 고정 헤더·페인도 같은 보정을 받는다.
**상태** — 트리거 default/hover/focus-visible/`data-state=open`.
오버레이·콘텐츠 open/closed. 비동기 제출이면 확인 버튼 loading,
더블 서브밋 불가(C4). 포커스 링은 `:focus-visible` 즉시(G15, G19).
**접근성** — APG **Dialog (Modal)**. `role="dialog"` +
`aria-modal="true"` + `aria-labelledby`(보이는 타이틀). 설명이 한
덩어리일 때만 `aria-describedby`(목록·다문단이면 생략하고 타이틀에
`tabindex="-1"`로 첫 포커스). 열림: 포커스를 내부로. Tab/Shift+Tab은
내부 순환, 밖으로 새지 않음. Escape=닫고 트리거로 반환(트리거가
사라졌으면 논리 다음). 오버레이 클릭=닫기. 중첩 시 Escape는 최상단만.
닫기 버튼은 탭 시퀀스에 반드시 포함.
**토큰 슬롯** — `--color-scrim`(어두운 딤, 예: 흑 40% — 흰 반투명
금지 C44), `--color-surface-overlay`, `--radius-dialog`,
`--space-dialog-pad`, `--size-dialog-max`(예: 32rem),
`--elevation-overlay`, `--duration-overlay`/`--easing-overlay`
(opacity·transform만, 예: 200ms), `--z-overlay`. 스크롤 락 보정 폭.
**게이트** — C3 C4 C7 C8 C31 C44 C45 · G10 G12 G14 G15 G19 G24 G26
G27 G40 G41
**검증** — 미검증 — 리서치 유도

## P-PR-21 알럿 다이얼로그 (파괴적 확인)
**언제** — 되돌리기 어려운 행동(삭제, 권한 회수, 결제 확정) 직전에
한 번 더 의사를 받을 때. 메시지+응답 두 개(취소/실행)가 전부인
짧은 모달.
**언제 아닌가** — 부가 필드가 필요하면 P-PR-20. 결과가 이미 화면에
반영됐으면 확인 모달을 겹치지 않음. 토스트로 대체 금지(차단이
목적인 과업).
**Base** — shadcn `AlertDialog` (`AlertDialogTrigger`,
`AlertDialogPortal`, `AlertDialogOverlay`, `AlertDialogContent`,
`AlertDialogHeader`, `AlertDialogTitle`, `AlertDialogDescription`,
`AlertDialogFooter`, `AlertDialogCancel`, `AlertDialogAction`).
Radix `AlertDialog` (`radix-ui`, 구 `@radix-ui/react-alert-dialog`).
`Content`에 `onPointerDownOutside`/`onInteractOutside`가 없다 —
오버레이 클릭으로 닫히지 않는 것이 계약.
**해부** — 스크림 + 짧은 콘텐츠. 타이틀(동사, 대상 명시: "이 글을
삭제할까요") → 결과 한 줄(복구 불가면 그 사실을 문장으로) → 푸터:
**취소가 왼쪽(최소 파괴)** · **실행이 오른쪽(destructive 토큰 면)**.
닫기 X는 두지 않는다 — 취소 버튼이 닫기다. 실행 면은 악센트 필이
아니다(C3). primary와 destructive를 한 뷰에 동시에 두지 않음.
실행 라벨은 일반 "확인"이 아니라 동사("삭제", "연결 끊기").
**상태** — 트리거 default/hover/focus-visible. 실행 버튼
default/hover/pressed/focus-visible/disabled/loading. 로딩 중 실행
재진입 불가(C4). 취소는 로딩 중에도 가능하거나, 전역 규칙을 하나로.
**접근성** — APG **Alert and Message Dialogs**(키보드는 **Dialog
(Modal)**). `role="alertdialog"` + `aria-modal="true"` +
`aria-labelledby` + **`aria-describedby`는 필수**(메시지 노드).
열림 포커스는 **최소 파괴 액션(취소)** — APG가 되돌리기 어려운
최종 스텝에 권하는 배치. Tab은 취소↔실행만 순환. Escape=취소와
동일(닫고 트리거 반환). 오버레이 클릭으로는 닫지 않는다. 첫
포커스가 취소이므로 Enter는 취소를 활성화한다 — 실행을
`type="submit"` 기본 버튼으로 두지 말 것.
**토큰 슬롯** — `--color-scrim`, `--color-surface-overlay`,
`--color-destructive`/`--color-on-destructive`(악센트 재사용 금지),
`--color-destructive-hover`, `--radius-dialog`, `--space-dialog-pad`,
`--size-alert-max`(다이얼로그보다 좁게, 예: 24rem), `--duration-overlay`.
**게이트** — C1 C3 C4 C5 C8 C44 · G15 G19 G26 G27 G40 G41
**검증** — 미검증 — 리서치 유도

## P-PR-22 시트 / 드로어
**언제** — 본문을 완전히 대체하지 않는 보조 패널. 필터(C30 접힘),
상세, 설정, 모바일에서 가려진 2패인(C35 compact). 와이드는 가장자리
슬라이드, 협폭·제스처 해제는 바텀시트.
**언제 아닌가** — 화면 중앙의 짧은 과업은 P-PR-20. 파괴적 확인은
P-PR-21. 앱 상시 크로마(사이드바)를 시트로 흉내 내지 않음.
**Base** — shadcn `Sheet` (`SheetTrigger`, `SheetPortal`,
`SheetOverlay`, `SheetContent`, `SheetHeader`, `SheetTitle`,
`SheetDescription`, `SheetFooter`, `SheetClose`). Radix `Dialog`를
가장자리 슬라이드로 확장(`SheetContent` `side`: `top` \| `right` \|
`bottom` \| `left`, 기본 `right`). 모바일 바텀시트는 shadcn `Drawer`
(`DrawerTrigger`, `DrawerContent`, `DrawerHandle`, `DrawerTitle` …)
— **Vaul**(내부적으로 Radix `Dialog`). 반응형은 와이드
`Dialog`/`Sheet` + 협폭 `Drawer`(shadcn 문서).
**해부** — 스크림 + 에지 앵커 패널. 순서: 핸들(Drawer만, 장식 아님
— 스와이프 히트) → 타이틀/닫기 → 본문(내부 스크롤) → 푸터 액션.
패널이 뷰포트를 100% 덮지 않게 남겨 뒤 화면이 "가려진 본문"으로
읽히게. 푸터 버튼은 패널 웰 안(C7). `side=bottom`에서 풀폭 pill을
화면 끝에 붙이지 않음. body 스크롤 락 + 스크롤바 보정은 P-PR-20과
동일. 제스처로 닫을 때도 포커스 반환은 같아야 한다.
**상태** — 트리거 expanded. 패널 `data-state` open/closed,
`data-side`. 스냅(Drawer)은 중간/펼침을 토큰 높이로. 드래그 중
pressed. 모션은 transform(축 하나) + opacity.
`prefers-reduced-motion`이면 슬라이드 없이 즉시(G27). layout 속성
애니 금지(G14), bounce 금지(G12).
**접근성** — 시트·드로어 모두 APG **Dialog (Modal)** — Radix
`Dialog`/`aria-modal`. 타이틀 필수(`SheetTitle`/`DrawerTitle`, 시각
숨김 가능). 열림 포커스 내부, Tab 순환, Escape=닫고 트리거 반환,
닫기 버튼 탭 시퀀스 포함. Drawer 핸들은 `aria-hidden`이거나 이름이
있는 닫기 제스처로 — 핸들만 있고 닫기 버튼이 없으면 APG 권고 위반.
스크림은 어두운 딤(C44).
**토큰 슬롯** — `--color-scrim`, `--color-surface-overlay`,
`--size-sheet-width`(예: 28rem) / `--size-drawer-snap`(예: 50%/92%),
`--radius-sheet`(열린 변만), `--space-sheet-pad`, `--duration-sheet`,
`--easing-sheet`, `--size-handle`, `--z-overlay`.
**게이트** — C2 C7 C30 C35 C44 · G12 G14 G27 G34 G56
**검증** — 미검증 — 리서치 유도

## P-PR-23 팝오버
**언제** — 트리거에 앵커된 리치 콘텐츠(작은 폼, 날짜 조각, 추가
필드). 스크림 없이, 뒤 화면은 대개 살아 있다.
**언제 아닌가** — 행동 목록이면 P-PR-25. 모달이 필요하면 P-PR-20.
포커스 불가한 한 줄 설명이면 P-PR-24. 옵션 선택만이면 P-FN-01.
**Base** — shadcn `Popover` (`PopoverTrigger`, `PopoverAnchor`,
`PopoverPortal`, `PopoverContent`, `PopoverClose`). Radix `Popover`
(`radix-ui`, 구 `@radix-ui/react-popover`). `modal` 기본 `false`.
`side` 기본 `"bottom"`, `align` 기본 `"center"`.
**해부** — 트리거(또는 별도 `Anchor`) → 포털 콘텐츠. 스크림 없음.
화살표는 선택 — 시스템이 쓰기로 했으면 모든 팝오버에, 없으면 전무.
콘텐츠 폭은 `--radix-popover-trigger-width`에 묶거나 토큰 max.
내부 패딩 4면(P-FN-07). 내부에 링크+버튼을 한 카드처럼 섞어 전체
클릭과 내부 CTA를 동시에 두지 않음(C25).
**상태** — 트리거 default/hover/focus-visible/`data-state=open`.
콘텐츠 `data-side`/`data-align`(충돌 시 런타임 변경 — 모션도 이
값에 맞출 것). 내부 컨트롤은 각 프리미티브 상태 매트릭스를 따름.
**접근성** — Radix가 인용하는 APG **Dialog (Modal)**의 **비모달**
운용. 열림 시 포커스는 콘텐츠로(`onOpenAutoFocus`). Escape=닫고
`Popover.Trigger`로 반환. Space/Enter는 트리거에서 토글. Tab은
페이지 시퀀스로 빠져나갈 수 있음 — 포커스 아웃 시 닫을지는 시스템
한 줄로 선언(Radix `onFocusOutside`, 권장: 닫기). `modal=true`로
올리면 포커스 트랩·바깥 인터랙트 차단이 생기고, 그때는 스크림을
같이 켜 시각도 모달과 일치시킬 것(C44: `aria-modal`은 실제
모달일 때만).
**토큰 슬롯** — `--color-surface-overlay`, `--radius-popover`,
`--space-popover-pad`, `--size-popover-max`, `--elevation-popover`,
`--size-popover-offset`(예: 4px), `--duration-overlay`,
`--z-popover`(다이얼로그보다 아래, 툴팁보다 위).
**게이트** — C8 C25 C44 · G10 G14 G15 G19 G26 G27
**검증** — 미검증 — 리서치 유도

## P-PR-24 툴팁
**언제** — 이미 이름이 있는 컨트롤의 **부가** 설명, 아이콘의 짧은
레이블 보강, 단축키 힌트. 호버·키보드 포커스에서만.
**언제 아닌가** — 필수 정보·에러·형식 규칙은 툴팁에 두지 않는다.
포커스 가능한 콘텐츠(링크, 버튼, 입력)가 필요하면 P-PR-23. 터치
(`pointer: coarse`)에서 도달 불가하므로 툴팁이 유일한 이름/설명이면
실패 — 보이는 라벨 또는 `aria-label`이 본명.
**Base** — shadcn `Tooltip` (`TooltipProvider`, `Tooltip`,
`TooltipTrigger`, `TooltipContent`, `TooltipArrow`). Radix `Tooltip`
(`radix-ui`, 구 `@radix-ui/react-tooltip`). `TooltipProvider`
`delayDuration` 기본 700ms, `skipDelayDuration` 기본 300ms.
**해부** — 트리거는 기존 컨트롤(`asChild`). 콘텐츠는 포털, 한 줄~
두 줄, 화살표는 시스템 전역 on/off. 트리거를 가리지 않게 `side`
기본 `"top"`. 스크림 없음. 히트 타깃은 트리거 쪽 ≥44(C2) — 툴팁
자체는 포커스를 받지 않는다.
**상태** — 트리거 `data-state`: `closed` / `delayed-open` /
`instant-open`. 연속 호버는 skip-delay로 즉시. 트리거 activate
(클릭/Space/Enter) 또는 Escape 또는 blur/pointer-out이면 즉시 닫힘.
모션 opacity만, 링 fade-in 금지(G15).
**접근성** — APG **Tooltip**(초안, 태스크포스 합의 전 — 계약은 이
패턴을 따름). 콘텐츠 `role="tooltip"`. 트리거는 `aria-describedby`로
툴팁을 가리킨다(이름 대체 아님 — 본명은 보이는 텍스트/`aria-label`).
포커스는 트리거에 남음. Escape=즉시 닫기. 키보드 포커스로 연
툴팁은 blur 시 닫힘. 포인터로 연 툴팁은 트리거·콘텐츠 위에 커서가
있는 동안 유지(호버 브릿지). `title` 속성으로 대체 금지(이중 팝업).
**토큰 슬롯** — `--color-surface-inverse`/`--color-on-inverse`(또는
overlay 쌍), `--radius-tooltip`, `--space-tooltip-pad`,
`--size-tooltip-max`, `--duration-tooltip-delay`(예: 700ms) /
`--duration-tooltip-skip`(예: 300ms), `--duration-tooltip-motion`
(reduced-motion이면 0), `--z-tooltip`.
**게이트** — C2 C8 C12 · G15 G19 G27 G30
**검증** — 미검증 — 리서치 유도

## P-PR-25 드롭다운 메뉴
**언제** — 트리거 버튼에 매달린 **행동 목록**(편집/복제/삭제, 보기
전환). 항목은 명령이고, 현재 값을 보여주는 셀렉트가 아니다.
**언제 아닌가** — 정렬·필터 값 선택은 P-FN-01(커스텀 리스트박스).
리치 콘텐츠는 P-PR-23. 검색이 필요하면 P-PR-26. 네이티브 `<select>`
팝업은 G28.
**Base** — shadcn `DropdownMenu` (`DropdownMenuTrigger`,
`DropdownMenuContent`, `DropdownMenuItem`, `DropdownMenuGroup`,
`DropdownMenuLabel`, `DropdownMenuSeparator`,
`DropdownMenuCheckboxItem`, `DropdownMenuRadioGroup`,
`DropdownMenuRadioItem`, `DropdownMenuItemIndicator`,
`DropdownMenuSub`/`SubTrigger`/`SubContent`, `DropdownMenuShortcut`).
Radix `DropdownMenu` (`radix-ui`, 구 `@radix-ui/react-dropdown-menu`).
`modal` 기본 `true`.
**해부** — 트리거(현재 맥락 + 캐럿) → 포털 메뉴. 라벨(비포커스) →
항목들 → 구분자 → 서브. 파괴 항목은 목록 **맨 아래**, destructive
토큰 텍스트(악센트 필 금지 C3). 단축키는 우측
`DropdownMenuShortcut`, 장식 아이콘은 `aria-hidden`. 항목 안에
링크/버튼을 중첩하지 않음(C20 동형). 항목 높이·패딩은 밀도
스케일과 페어(C9), 히트 ≥44(C2). 긴 목록은 마지막 항목 반노출(C21).
**상태** — 트리거 `data-state` open/closed, `data-disabled`. 항목
`data-highlighted`(호버와 키보드 동일 면), `data-disabled`.
체크/라디오 `data-state` checked/unchecked/indeterminate. 하이라이트
면은 메뉴 전용 토큰 하나. disabled는 opacity만이 아니라 대비를
제품이 정함(C42, G39).
**접근성** — APG **Menu Button** + **Menu and Menubar**. 트리거
`aria-haspopup="menu"` + `aria-expanded`. 콘텐츠 `role="menu"`,
항목 `menuitem` / `menuitemcheckbox` / `menuitemradio`. 포커스는
로빙 tabindex(Radix). 트리거에서 Enter/Space/ArrowDown=열고 첫
항목, ArrowUp=마지막(옵션). 열린 뒤 ArrowUp/Down 이동(랩은 시스템
선언), Home/End, typeahead, Escape=닫고 트리거. 서브는 읽기 방향
ArrowRight 열림·ArrowLeft 닫힘. Tab/Shift+Tab=메뉴를 닫고 페이지
다음/이전 탭스톱. 체크/라디오 Space는 상태만 바꾸고 메뉴를 닫지
않을 수 있음(APG 옵션 — 닫힘 여부는 시스템 한 줄). disabled 항목은
포커스 가능, 활성화 불가. separator는 포커스 불가.
**토큰 슬롯** — `--color-surface-overlay`, `--color-menu-highlight`,
`--color-destructive`, `--radius-menu`, `--space-menu-pad`,
`--size-menu-item-height`(예: 40), `--size-menu-min-width`,
`--elevation-menu`, `--duration-overlay`, `--z-menu`.
**게이트** — C2 C3 C9 C20 C21 C42 · G19 G26 G27 G28 G39
**검증** — 미검증 — 리서치 유도

## P-PR-26 커맨드 팔레트 (⌘K)
**언제** — 전역 점프·명령 실행. 항목이 많아 검색이 전제. 키보드가
주 입력.
**언제 아닌가** — 옵션 ≤10이고 검색이 없으면 P-FN-01. 트리거 옆
행동 몇 개면 P-PR-25. 페이지 필터 칩 대체용이 아님(필터는 P-FN-04,
폭주는 P-PR-22).
**Base** — shadcn `Command` (`CommandDialog`, `CommandInput`,
`CommandList`, `CommandEmpty`, `CommandGroup`, `CommandItem`,
`CommandSeparator`, `CommandShortcut`). 검색 리스트는 **cmdk**(Dip).
`CommandDialog`는 cmdk `Command.Dialog` = **Radix `Dialog` 래퍼**
(포커스 트랩·스크롤 락·`aria-modal`). 인라인만 쓸 때도 `Command`
`label`은 필수.
**해부** — ⌘K/Ctrl+K 리스너(브라우저 검색과 충돌 시
preventDefault) → 모달 스크림 → 입력(상단 고정) → 리스트(그룹
헤딩 + 항목 + 우측 단축키) → 빈 결과. 빈 결과는 정직한 한 문장 +
입력 지우기(P-FN-05, 일러스트 금지). 항목 리딩 아이콘은 목적만
(C15), 이모지 금지(G30). 최근/즐겨찾기는 데이터에서 온 그룹이지
가짜 이름이 아님(G18).
**상태** — 다이얼로그 open/closed. 입력 enabled/focus. 항목
`aria-selected` = 활성(호버와 키보드 동기). disabled. loading
(원격 검색이면 리스트 스켈레톤, 입력 포커스 유지 C4). empty.
스크롤 힌트(C21).
**접근성** — 외곽 APG **Dialog (Modal)** + 내부 APG **Combobox**
(cmdk: 입력 `role="combobox"` + `aria-autocomplete="list"` +
`aria-expanded` + `aria-controls` + `aria-activedescendant`, 리스트
`role="listbox"`, 항목 `role="option"`). DOM 포커스는 입력에 고정,
옵션은 activedescendant. ArrowUp/Down, Home/End, Enter=선택 실행 후
닫기, Escape=값 유지 취소(다이얼로그 닫고 호출 전 포커스 반환).
입력 중 화살표가 캐럿 이동으로 새지 않게. Tab은 다이얼로그 트랩
안. 트리거 없는 전역 팔레트는 닫힌 뒤 열기 전 포커스로.
**토큰 슬롯** — `--color-scrim`, `--color-surface-overlay`,
`--radius-command`, `--space-command-pad`, `--size-command-max`
(예: 36rem), `--size-command-input-height`(인풋/버튼 페어 C9),
`--color-item-active`, `--duration-overlay`.
**게이트** — C4 C9 C15 C18 C19 C21 C44 · G18 G27 G28 G30
**검증** — 미검증 — 리서치 유도

## P-PR-27 토스트 / 알림
**언제** — 결과가 **화면에 아직 없는** 짧은 피드백. 뷰포트 밖
저장, 백그라운드 실패, 방금 떠난 목록에서의 실행 취소.
**언제 아닌가** — 결과가 이미 보이는 행동에 축하 토스트 금지
(G16: 카운트·행 삭제가 그 자리에서 반영되면 토스트를 겹치지
않음). 차단 확인은 P-PR-21. 필드 에러는 인라인 3채널(C16). 필수
성공을 자동 소멸 토스트에만 담지 않음.
**Base** — shadcn **`Sonner`** (`<Toaster />` + `toast()`) —
**sonner**, Radix 프리미티브 아님. 레거시 shadcn `Toast`/`useToast`는
`radix-ui` `Toast`(구 `@radix-ui/react-toast`). 2026 Base UI 경로는
shadcn `Toast`(Base UI Toast). Radix 스택의 기본점은 Sonner. 토스트
포털은 다이얼로그 DismissableLayer **밖** — 토스트 클릭이 모달을
닫으면 실패(Radix+Sonner 알려진 결함).
**해부** — 스택은 가장자리 인셋(하단 또는 상단, 시스템 하나).
항목: (아이콘) → 메시지 한 줄 → 선택 액션("실행 취소") → 닫기.
액션은 primary가 아님. 한 화면 스택 상한(예: 3)을 토큰으로.
스와이프 해제는 포인터 전용, 키보드에는 닫기 버튼. 본문 4.5:1
(C45). 다크/유색 위는 반전 쌍(C39).
**상태** — 종류: success / info / warning / error / loading(약속).
loading→success 교체는 같은 슬롯에서. 자동 소멸 타이머는
hover·포커스 시 일시정지(G17 동형). `prefers-reduced-motion`이면
슬라이드 없이 즉시(G27).
**접근성** — APG **Alert**(urgent/error) 또는 WAI-ARIA
`role="status"`(정중한 상태, `aria-live="polite"` 동등). 포커스를
빼앗지 않음 — APG Alert는 키보드 상호작용 해당 없음. 성공/정보는
`status`·polite, 실패는 `alert`. 자동 소멸은 APG가 경고하는 패턴
(WCAG 2.2.1)이므로: (1) 에러는 수동 닫기까지 유지, (2) 정보에
타이머를 쓰면 일시정지·닫기를 제공하고 지속 시간은 토큰(예:
4–6s). 액션이 있으면 타이머를 멈추거나 액션이 탭으로 닿게.
WCAG 4.1.3 상태 메시지는 포커스 이동 없이 라이브 영역으로 전달.
**토큰 슬롯** — `--color-toast-surface`, `--color-toast-success`/
`warning`/`error`(악센트 남용 금지 G23), `--radius-toast`,
`--space-toast-pad`, `--size-toast-max`, `--space-toast-inset`,
`--duration-toast`(예: 5s), `--duration-toast-motion`,
`--z-toast`(오버레이 위).
**게이트** — C3 C16 C39 C45 · G16 G17 G23 G27 G40 G41
**검증** — 미검증 — 리서치 유도
