# 프리셋 — primitives/navigation (shadcn·Radix 대응)


P-PR-40부터. 렌더 검증 전 — 각 항목 검증 줄은 리서치 유도.

## P-PR-40 탭
**언제** — 한 뷰에서 동등한 패널 여러 장을 전환할 때. 패널은 같은 과업의 다른 면이고 동시에 하나만 보인다.
**언제 아닌가** — 계층 이동(브레드크럼·사이드바), 다단계 진행(스테퍼), 필터 칩(P-FN-04), 인페이지 목차, 라우트 전환. 탭으로 URL 페이지를 바꾸면 실패.
**Base** — shadcn `Tabs` (`TabsList` · `TabsTrigger` · `TabsContent`) · Radix `Tabs` (`Root`/`List`/`Trigger`/`Content`; 패키지 `radix-ui`, 구 `@radix-ui/react-tabs`). `orientation` 기본 `"horizontal"`, `activationMode` 기본 `"automatic"`.
**해부** — `tablist`가 패널 한 변(대개 위)을 지배 → 트리거들 → 활성 `tabpanel` 하나. 리스트에 보이는 제목이 있으면 `aria-labelledby`, 없으면 `aria-label`. 활성 표시는 시스템 정식 마크(직선 룰·면 전환·웨이트). 장식 언더라인·스쿼글은 상태 표시가 아니다(G8).
**상태** — default / hover / `data-state=active` / `:focus-visible` / disabled. 로딩은 패널 안 스켈레톤이지 트리거 교체가 아니다. 선택되지 않은 탭은 포커스 가능, disabled만 포커스 불가.
**접근성** — APG **Tabs**. Tab=리스트 진입 시 활성 탭에 포커스, 다시 Tab=활성 패널(패널에 포커스 가능 자손이 없으면 패널에 `tabindex="0"`). 수평: Left/Right가 이전/다음(끝에서 루프), Up/Down은 브라우저 스크롤에 맡긴다. 수직(`aria-orientation="vertical"`): Up/Down이 Left/Right를 대체. Home/End=첫/끝(권장). **자동 활성**(Radix `activationMode="automatic"`): 포커스 이동이 곧 선택 — 패널이 지연 없이 열릴 때만(내용 프리로드). **수동 활성**(`"manual"`): 화살표는 포커스만 옮기고 Space/Enter가 선택 — 패널 로드에 지연이 있으면 필수(APG Note 1). 활성 탭만 `aria-selected="true"`, 각 탭 `aria-controls` ↔ 패널 `aria-labelledby`.
**토큰 슬롯** — 트리거 높이(밀도 페어 C9, 예 36/40/48), 히트 ≥44, 리스트 면·라운드, 활성 마크(룰 두께·악센트), 갭, 포커스 링, 전환 시간(color/opacity만).
**게이트** — G8 · G10 · G15 · G19 · G26 · G27 · G39 · C2 · C8 · C9
**검증** — 미검증 — 리서치 유도

## P-PR-41 브레드크럼
**언제** — 사이트가 계층이고, 현재 페이지의 부모 경로를 한 줄로 보여 위치를 되짚을 때. 상세·카테고리·문서 트리처럼 깊이가 2단 이상일 때.
**언제 아닌가** — 평면 IA, 필터 경로, 검색 쿼리 나열, 탭, 스테퍼. 형제 페이지를 가로로 나열하는 용도가 아니다.
**Base** — shadcn `Breadcrumb` (`BreadcrumbList` · `BreadcrumbItem` · `BreadcrumbLink` · `BreadcrumbPage` · `BreadcrumbSeparator` · `BreadcrumbEllipsis`). Radix Breadcrumb 프리미티브는 없다. `BreadcrumbLink asChild`는 Radix `Slot`. 접힌 중간 항목은 shadcn `DropdownMenu`(Radix `DropdownMenu`)로 합성.
**해부** — `nav` → 순서 있는 목록(`ol`) → 부모 링크들 → 구분자 → 현재 페이지. 구분자는 장식(`aria-hidden`). 현재는 링크가 아닌 텍스트(`BreadcrumbPage`). shadcn 기본의 `role="link"`+`aria-disabled`는 APG와 어긋나므로 붙이지 않는다. 활성/현재 표시는 웨이트·색 토큰(G8) — 스쿼글 금지. 폭주 시 중간을 `BreadcrumbEllipsis`로 접고, 첫·끝은 남긴다.
**상태** — 링크 default/hover/`focus-visible`. 현재는 hover·클릭 없음. 접힌 생략은 presentation. 드롭다운이 열리면 트리거 `aria-expanded`.
**접근성** — APG **Breadcrumb**. 랜드마크 `nav`에 이름(`aria-label="breadcrumb"` 또는 페이지 언어로 "위치"). 페이지에 nav가 여러 개면 이름이 서로 달라야 한다(APG Landmark Regions). 현재 페이지에 `aria-current="page"`. 키보드 계약 없음 — 링크는 문서 탭 순서. 구분자는 읽히지 않는다.
**토큰 슬롯** — 항목 갭·타이포(현재 웨이트 vs 조상 muted), 구분자 글리프(한 세트, G30), 히트 높이 ≥44, 현재 색, 포커스 링, 줄바꿈 간격.
**게이트** — G8 · G19 · G26 · G30 · G42 · C2 · C8
**검증** — 미검증 — 리서치 유도

## P-PR-42 페이지네이션
**언제** — 목록·검색 결과가 URL로 나뉘는 페이지 집합을 오갈 때. 주소가 페이지를 가리킨다.
**언제 아닌가** — 캐러셀(C34), 무한 스크롤, 탭, 스테퍼. 클라이언트 테이블만 자르고 URL이 안 바뀌면 버튼 툴바이지 이 프리셋의 링크형이 아니다.
**Base** — shadcn `Pagination` (`PaginationContent` · `PaginationItem` · `PaginationLink` · `PaginationPrevious` · `PaginationNext` · `PaginationEllipsis`). Radix Pagination 프리미티브는 없다. `PaginationLink`는 `<a>` + `buttonVariants`(`isActive`면 outline).
**해부** — `nav` → `ul` → 이전 · 페이지 번호(필요 시 생략) · 다음. 현재/전체는 **사용자 언어 문장**으로 목록 정의와 맞춘다(P-FN-06): "30건 중 11–20 · 3/12쪽". 숫자 버튼만 두고 "Page 3 of 12"를 제품 언어와 다르게 박지 않는다. 현재 페이지는 링크 유지 + `aria-current="page"` + 정식 마크(G8). 생략은 `PaginationEllipsis`(`aria-hidden`, sr-only "More pages"는 제품 언어로).
**상태** — default / hover / `data-active` / `:focus-visible` / 끝 페이지에서 이전·다음 disabled. disabled는 opacity만이 아니다(G39) — `aria-disabled`+탭 제외+면/보더 토큰. 로딩은 목록이지 페이지 숫자 깜빡임이 아니다.
**접근성** — APG **Navigation Landmark**(페이지네이션 전용 패턴은 없음). `nav` 이름은 "pagination" 영문 기본값 대신 제품 언어("검색 결과"). 같은 컨트롤이 위·아래에 반복되면 두 랜드마크 이름을 같게(APG Landmark Regions 예외). 현재만 `aria-current="page"`. 키보드=링크 탭 순서. 페이지 점프용 네이티브 `<select>` 금지(G28) — 필요하면 P-FN-01 리스트박스.
**토큰 슬롯** — 항목 크기(아이콘형도 히트 ≥44), 활성 면/보더, 갭, 라운드, 포커스 링, disabled 면 대비(C42), 정의 라인 타이포.
**게이트** — G8 · G19 · G26 · G28 · G39 · G40 · C2 · C8 · C42
**검증** — 미검증 — 리서치 유도. 결과 수 사용자 언어 문장은 P-FN-06이 온집 store·이웃장터·스타일몰에서 고정.

## P-PR-43 사이드바 내비
**언제** — 앱 셸·대시보드처럼 구역이 고정이고, 섹션 링크가 세로 레일로 남는 경우. compact는 아이콘 레일, expanded만 라벨이 산다(C35).
**언제 아닌가** — 마케팅 마스트헤드(P-FN-08), 드롭다운형 사이트 내비(P-PR-44), 필터 레일. AI 기본 wordmark+인라인 링크+버튼(G42)을 세로로 세운 것이 아니다.
**Base** — shadcn `Sidebar` (`SidebarProvider` · `Sidebar` · `SidebarHeader`/`Footer`/`Content` · `SidebarGroup` · `SidebarMenu`/`SidebarMenuItem`/`SidebarMenuButton` · `SidebarTrigger` · `SidebarInset` · `SidebarRail`). 모바일은 내장 `Sheet`(Radix `Dialog`). 아이콘 접힘 라벨은 `Tooltip`(Radix `Tooltip`). `asChild`는 Radix `Slot`. 그룹 접기는 shadcn `Collapsible`(Radix `Collapsible`)로 합성. `collapsible`: `offcanvas` | `icon` | `none`. `variant`: `sidebar` | `floating` | `inset`.
**해부** — Provider가 열림 상태를 지배(쿠키 `sidebar_state`) → 레일(헤더 고정 · 스크롤 본문 · 푸터 고정) → `SidebarInset`이 `main`. 그룹 라벨 → 메뉴 버튼(아이콘+텍스트). 현재 항목은 `aria-current="page"` + 정식 마크(G8). 접힘(`data-state=collapsed`, `icon`)은 라벨을 시각에서 제거하고 툴팁으로 이름을 되살린다. **히트 타깃 ≥44** — shadcn `SidebarTrigger` 기본 `size-7`(28px)와 아이콘 레일 `SIDEBAR_WIDTH_ICON=3rem`을 그대로 쓰면 C2 실패. sticky 헤더/푸터와 페이지 마스트헤드가 겹치면 `--sticky-offset` 한 값으로만 민다(G56). 너비·모션은 width 트랜지션이 레이아웃 애니(G14)이므로 접힘만 허용하고 항목 hover-slide는 금지.
**상태** — expanded/collapsed, 모바일 시트 open/closed, 항목 default/hover/active/current/`focus-visible`/disabled. 접힘에서 그룹 라벨은 숨김. 모바일 시트는 라우트 전환 시 닫고 P-FN-02와 페어.
**접근성** — APG **Navigation Landmark** + 모바일은 **Dialog**(Sheet). 페이지 nav가 둘 이상이면 고유 이름("앱" 등 — 역할명 "navigation"을 라벨에 반복하지 않음). 데스크톱 항목은 링크 탭 순서, 트리 위젯이 아니면 APG Tree View를 쓰지 않는다. 그룹 접기=APG **Disclosure**: 버튼 `aria-expanded`, Enter/Space. 모바일 Sheet: 포커스 트랩, Esc=닫기, 닫힌 뒤 트리거로 복귀. 단축키는 shadcn 기본 ⌘/Ctrl+B — 제품이 채택할 때만, 충돌 키 금지. 현재 페이지 이동 후 헤딩 포커스는 P-FN-02(시각 링 억제).
**토큰 슬롯** — `--sidebar-width` / `--sidebar-width-icon`(아이콘 모드도 히트 ≥44), 면·보더·악센트(사이드바 전용 쌍, G41), 항목 높이·패딩 4면(P-FN-07), 라운드, 포커스 링, 접힘 duration(reduced-motion 0), sticky offset.
**게이트** — G8 · G10 · G14 · G19 · G26 · G27 · G39 · G42 · G56 · C2 · C8 · C35 · C42
**검증** — 미검증 — 리서치 유도

## P-PR-44 내비게이션 메뉴 (드롭다운형)
**언제** — 사이트 전역 가로 내비에서 섹션 트리거가 링크 패널을 펼칠 때. 마케팅·문서 헤더의 메가/드롭다운.
**언제 아닌가** — 앱 사이드바(P-PR-43), 액션 메뉴(그건 `DropdownMenu`/APG Menu), 탭, 운영체제형 메뉴바. **Menubar 역할을 사이트 내비에 쓰지 않는다.**
**Base** — shadcn `NavigationMenu` (`NavigationMenuList` · `Item` · `Trigger` · `Content` · `Link` · `Indicator` · `Viewport`, `navigationMenuTriggerStyle()`) · Radix `NavigationMenu` (`Root`/`Sub`/`List`/`Item`/`Trigger`/`Content`/`Link`/`Indicator`/`Viewport`; 패키지 `radix-ui`, 구 `@radix-ui/react-navigation-menu`). `delayDuration` 기본 200, `skipDelayDuration` 기본 300, `orientation` 기본 `"horizontal"`.
**해부** — `Root`가 가로 리스트를 지배 → 항목은 링크이거나 Trigger+Content. Content는 Viewport로 한 자리에 렌더(탭 포커스 유지). 현재 링크는 `NavigationMenu.Link`의 `active`(→ `aria-current`) + 정식 마크(G8). 인디케이터는 선택 장식이지 현재 페이지 마크를 대체하지 않는다. 하위는 `Sub`+`defaultValue`(항상 하나 활성, Tabs와 같음).
**상태** — 트리거 default/hover/`data-state=open`/`focus-visible`/disabled. 뷰포트 open/closed. 링크 `data-active`. 호버 열림은 지연 토큰, 포커스 열림은 즉시.
**접근성** — APG **Disclosure Navigation Menu**(Radix가 명시: `menu`/`menubar` 역할 사용 안 함). 랩퍼는 navigation 랜드마크. Enter/Space=Trigger에서 패널 열기. Tab=다음 포커스 가능. 수평: 열린 Trigger에서 ArrowDown=Content로, ArrowRight/Left=옆 Trigger/Link. Home/End=첫/끝. Esc=패널 닫고 Trigger로. 링크는 모두 `NavigationMenu.Link`(서드파티 라우터는 `asChild`). 열린 패널은 포커스가 내비 밖으로 나가면 닫힌다(WCAG 1.4.13).
**토큰 슬롯** — 트리거 높이·히트 ≥44, 패널 면/보더/라운드/elevation, `delayDuration`/`skipDelayDuration`, 뷰포트 크기 전환(width/height는 Radix CSS 변수 — reduced-motion이면 0), 포커스 링, 캐럿 회전 시간(G12 bounce 금지).
**게이트** — G8 · G10 · G12 · G14 · G19 · G26 · G27 · C2 · C8
**검증** — 미검증 — 리서치 유도

## P-PR-45 스테퍼 (다단계 진행)
**언제** — 순서가 있는 과업(가입·체크아웃·신청)에서 지금이 몇 번째인지, 앞으로/뒤로가 가능한지를 보여줄 때.
**언제 아닌가** — 동등 패널 전환(탭), 계층 위치(브레드크럼), 업로드 퍼센트. 이름 있는 단계를 막대 하나만으로 대체하지 않는다.
**Base** — hand-rolled. shadcn에 Stepper는 없다. shadcn `Progress`(Radix `Progress`)는 연속 값 막대일 뿐 단계 이름·현재 단계를 대표하지 못한다 — 보조 트랙으로만.
**해부** — 단계 목록(`ol`)이 폼을 지배한다: 완료 → **현재** → 예정. 각 단계는 인덱스+짧은 이름. 현재/전체는 사용자 언어("5단계 중 2 · 배송"). 현재 마크는 면·웨이트·룰(G8). 완료를 체크 아이콘만으로 전달하지 않는다. 선형 잠금이면 예정 단계는 링크가 아니다. 되돌아가기가 허용된 완료 단계만 링크.
**상태** — complete / current / upcoming / error / disabled. 에러는 색+텍스트+`aria-invalid` 3채널(C16) — 단계 점만 빨개지면 실패. 제출 로딩 중 다음 버튼은 C4.
**접근성** — APG에 Stepper 패턴은 없다. 단계가 링크면 **Navigation Landmark**+목록, 현재에 `aria-current="step"`(ARIA 1.2). 링크가 아니면 `ol`/`list` + 현재 `aria-current="step"`, 시각 위계를 대체하는 문장("3단계 중 2, 배송")을 스크린리더가 듣게. 탭 위젯으로 마법사를 구현하지 않는다(Tabs는 동등 패널). 키보드=노출된 링크·폼 컨트롤의 탭 순서. 단계 점만 포커스 가능한 가짜 탭리스트 금지.
**토큰 슬롯** — 점/커넥터 크기·두께, 현재/완료/에러 색(본문 4.5:1), 이름 타이포, 갭, 히트 ≥44(링크형), 포커스 링, 커넥터는 레이아웃 애니가 아니라 color.
**게이트** — G8 · G19 · G26 · G39 · G40 · C2 · C3 · C4 · C8 · C16
**검증** — 미검증 — 리서치 유도

## P-PR-46 스킵 링크
**언제** — 여러 페이지에 반복되는 크롬(마스트헤드·사이드바·유틸)이 본문보다 앞에 있을 때. 키보드 사용자가 매 페이지마다 그 블록을 통과하지 않게.
**언제 아닌가** — 랜드마크가 있다고 생략하는 변명. 스크린리더는 랜드마크로 건너뛰지만, 키보드만 쓰는 사용자는 스킵 링크가 필요하다. 페이지 유일의 짧은 폼에는 약하지만, 셸이 있는 제품이면 기본.
**Base** — hand-rolled. shadcn 스킵 링크 컴포넌트 없음.
**해부** — 문서에서 **첫 포커스 가능 요소**가 "본문으로" 링크. 대상은 `main`(또는 본문 선두 헤딩)의 `id`. 항상 보이거나, 포커스 시에만 보이되 화면 안에서 읽힌다(오프스크린 영구 클립 금지). 대상은 `tabindex="-1"`이라 활성화 후 포커스가 실제로 본문에 내려간다(WCAG G1).
**상태** — 대기(시각 숨김 허용) / `:focus-visible`에서 즉시 노출+링(G15 fade-in 금지). 대상 헤딩/`main`의 프로그램 포커스 링은 억제한다 — P-FN-02와 같은 계약(G19).
**접근성** — WCAG **2.4.1 Bypass Blocks**, 기법 **G1**. 보조로 APG **Landmarks**(`main` 하나, 반복 크롬은 `banner`/`navigation`). Enter=활성화, 다음 Tab=본문 안 첫 컨트롤. 라우트 전환 시 스킵 링크가 포커스를 가로채지 않게: 전환 포커스는 P-FN-02가 h1에, 스킵은 사용자가 누를 때만.

```html
<a class="skip-link" href="#main">본문으로</a>
<main id="main" tabindex="-1">…</main>
```
```css
#main:focus, #main:focus-visible { outline: none; } /* G19 · P-FN-02 */
```

**토큰 슬롯** — 포커스 시 면·보더·링, 오프셋(뷰포트 모서리에서 떨어짐 C7), 타이포, z-index(크롬 위).
**게이트** — G15 · G19 · G26 · C7 · C8
**검증** — 미검증 — 리서치 유도. 대상 포커스 링 억제는 P-FN-02가 온집·이웃장터·스타일몰 3연속 재발로 고정.

## P-PR-47 앵커/목차 내비
**언제** — 한 문서가 길어 헤딩 구조가 있고, 같은 페이지 안 구간으로 점프할 때. 에디토리얼·가이드·약관·긴 상세.
**언제 아닌가** — 페이지 전환(사이드바·브레드크럼), 동등 패널(탭), 스크롤 스파이만 있고 헤딩 id가 없는 장식 점. 헤딩 트리를 반영하지 않은 목차는 실패.
**Base** — hand-rolled. shadcn TOC 컴포넌트 없음. 링크는 문서 `h2`–`h3`의 `id`로만.
**해부** — `nav`(고유 이름, 예 "이 페이지") → 헤딩 트리를 그대로 옮긴 `ol`(중첩은 하위 헤딩). 각 항목은 `#fragment`. sticky로 붙이면 본문 헤딩은 `scroll-margin-top`이 마스트헤드·목차 높이와 **한 오프셋**으로 맞는다(G56). 현재 구간 표시는 정식 마크(G8) + `aria-current="location"`(인페이지 위치. `page`는 페이지 집합용).
**상태** — default / hover / current / `:focus-visible`. 스크롤 추적은 스크롤의 결과이지 hover 상태가 아니다. 빈 문서(헤딩 없음)면 목차 자체를 그리지 않는다.
**접근성** — APG **Navigation Landmark** + **Link**. 페이지에 nav가 이미 있으면 라벨이 달라야 한다. 키보드=링크 탭 순서. 클릭/Enter 후 해당 헤딩으로 포커스를 옮긴다(`tabindex="-1"`, 시각 링 억제 — P-FN-02와 페어). 스무스 스크롤은 `prefers-reduced-motion`에서 끈다(G27). 레이아웃 속성 애니로 스파이 인디케이터를 밀지 않는다(G14).
**토큰 슬롯** — sticky top/offset, 항목 패딩·히트 ≥44, 현재 마크, 중첩 인셋, 포커스 링, 스크롤 마진, 모션 시간.
**게이트** — G8 · G14 · G19 · G27 · G56 · C2 · C8 · C31
**검증** — 미검증 — 리서치 유도
