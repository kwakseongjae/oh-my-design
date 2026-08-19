# 프리셋 — primitives/display (shadcn·Radix 대응)


표시용 프리미티브(P-PR-60~69). 해부·상태·접근성 계약은 유지하고 토큰 슬롯만
철학이 채운다.

## P-PR-60 카드 (변형 체계)
**언제** — 한 단위의 관련 콘텐츠(상품·글·요약)를 표면으로 묶어 그리드/목록에
놓을 때. 페이지(또는 선언된 섹션)당 변형은 한 장르만. / **언제 아닌가** —
행 리스트·이미 칠해진 패널 안의 중첩 래퍼·마스터-디테일의 패인.
아이콘-위-헤드라인 타일(G3)을 카드로 포장하는 자리.
**Base** — shadcn/ui `Card` + `CardHeader`/`CardTitle`/`CardDescription`/
`CardAction`/`CardContent`/`CardFooter`. Radix 카드 프리미티브 없음
(hand-rolled `div`, `size` `"default"|"sm"`, 간격 `--card-spacing`).
미디어 종횡비는 shadcn `AspectRatio` — `radix-ui` `AspectRatio.Root`
(`ratio` 기본 1).
**해부** — 변형 3택1을 페이지에 고정: outlined(보더/링) · filled(면만) ·
elevated(면+엘리베이션). 한 페이지에서 의미 없이 섞지 않는다(C24).
순서: 미디어(있으면) → Header(Title → Description → Action) → Content →
Footer. 미디어는 고정 종횡비이고 본문 패딩과 폭이 정렬(C26). 풀블리드는
명시적 결정, 아니면 미디어에도 4면 패딩(P-FN-07). 전체 클릭 카드와 내부
CTA는 하나만(C25). 카드 안의 카드 금지(G4). 한쪽 컬러 사이드 스트라이프·
좌측 보더 강조 금지(G5).
**상태** — default. hover는 스펙에 선언된 면/보더 전환만. 스펙 없는
hover-lift(`translateY`·그림자 점프) 금지(C24). 카드 전체가 링크/버튼일
때만 `:focus-visible` 링(즉시, C8/G19). Footer 비동기 액션은 로딩 중
더블 서브밋 불가(C4).
**접근성** — 카드는 APG 위젯이 아니다. 정적 카드는 `article`(반복 항목)
또는 `section` + 제목. 전체 클릭이면 단일 링크가 접근 이름을 가져가고
내부에 버튼/링크를 두지 않는다. 키보드 계약은 호스트의 기본: 링크 Enter,
버튼 Enter/Space. 장식 미디어 `alt=""` 또는 `aria-hidden`.
**토큰 슬롯** — `--radius-card`, `--space-card-pad`(`--card-spacing` 대응,
예: default 16 / sm 12), 면, 보더(`--color-rule`), 엘리베이션(다크는
한 단계 밝은 서피스 C40 — 그림자 가산 아님), 미디어 종횡비, 타이틀
웨이트, hover 전이 속성·시간(G10 `transition: all` 금지).
**게이트** — C24 C25 C26 C8 C4 C40 G3 G4 G5 G10 G11 G13 G14 G19 G24 G40 GS1
**검증** — 미검증 — 리서치 유도. 온집 P-CM-01 상품 카드에서 변형 단일·
전체클릭/CTA 분리·고정 종횡비, 온집·스타일몰 P-FN-03에서 커버-본문
정렬이 실화면 확인됨.

## P-PR-61 배지
**언제** — 상태·분류·수량을 짧은 라벨로 붙일 때(재고, 결제 상태, 카운트).
역할은 정적 배지 하나. / **언제 아닌가** — 필터·입력·제거형 칩(P-FN-04 /
C27, 다른 컴포넌트). 본문 문장을 대체하는 장식 필.
**Base** — shadcn/ui `Badge`. Radix 배지 프리미티브 없음(hand-rolled).
`variant`: `"default"|"secondary"|"destructive"|"outline"|"ghost"|"link"`.
아이콘은 `data-icon="inline-start"|"inline-end"`. 링크 배지는 Radix 경로에서
`asChild`로 호스트를 교체.
**해부** — 텍스트가 이름이다. 아이콘은 목적만(장식이면 `aria-hidden`).
한 뷰에서 variant를 상태 enum에 1:1로 묶고, 같은 의미가 페이지마다 다른
색을 쓰지 않는다(GS2). destructive는 파괴적 상태에만 — accent fill로
경고를 꾸미지 않음(C3). 카운트 배지는 숫자+단위(또는 접근 이름)를 같이
둔다. 색만으로 상태를 구분하지 않는다.
**상태** — default. 정적 배지에 hover/onClick 금지(C27). 링크/버튼으로
승격된 배지만 hover·`:focus-visible`·disabled. 비동기 라벨은 `Spinner`를
아이콘 슬롯에 넣고 이름에 진행을 반영한다.
**접근성** — APG 전용 배지 패턴 없음. 정적은 `span`. 라이브 상태 변화만
`role="status"`. 링크 배지는 APG **Link Pattern**: Enter로 활성화.
버튼이면 Enter/Space. 아이콘만 있는 배지는 접근 이름 필수. 대비 본문
4.5:1·UI 3:1(G40/C45) — 유색 필 위 작은 글자를 실측.
**토큰 슬롯** — 면/보더/텍스트 쌍(variant별, 다크는 on-color C39),
`--radius-badge`, 높이·패딩(시각 32px급이어도 인터랙티브면 히트 ≥44
C28), 아이콘 갭, 타입 크기·웨이트.
**게이트** — C27 C28 C3 C8 C39 C45 G8 G19 G22 G40 G48 GS2
**검증** — 미검증 — 리서치 유도. 온집 P-CM-01 재고 enum→토큰(판매중/
품절임박/품절)이 배지 역할의 실화면 사례.

## P-PR-62 아바타
**언제** — 사람·계정·브랜드를 식별하는 얼굴/이니셜. 목록 행·헤더·코멘트
메타. / **언제 아닌가** — 히어로 이미지·상품 컷·아이콘 버튼의 글리프
대체. 장식 더미 얼굴.
**Base** — shadcn/ui `Avatar`/`AvatarImage`/`AvatarFallback` + `AvatarBadge`/
`AvatarGroup`/`AvatarGroupCount`. 기반 `radix-ui` `Avatar.Root`/
`Avatar.Image`/`Avatar.Fallback`(`delayMs`로 폴백 플래시 억제,
`onLoadingStatusChange`). `size`: `"sm"|"default"|"lg"`.
**해부** — Image(로드된 때만 렌더) → Fallback(이니셜 또는 단색 마크).
Badge는 우하단 상태 점. Group은 겹침 스택 + 초과 수(`AvatarGroupCount`).
행 안에 두면 칠해지는 표면의 4면 패딩을 아바타가 뚫지 않는다(P-FN-07).
클릭 가능하면 히트 ≥44(C2) — 시각 크기와 별개.
**상태** — default(이미지) / fallback(미로드·에러) / loading(이미지 대기,
Fallback `delayMs`). 인터랙티브(드롭다운 트리거)일 때 hover·
`:focus-visible`·disabled. Badge 점의 on/off는 색만으로 끝내지 않고
이름에 상태를 넣는다.
**접근성** — APG 전용 아바타 패턴 없음. `AvatarImage`에 실명 `alt`
(장식이면 빈 alt + 인접 텍스트가 이름). Fallback 이니셜은 이미지가 없을
때의 이름이지 장식이 아니다. 장식 Badge는 `aria-hidden`; 상태 Badge는
접근 이름("온라인"). Group 초과 `+N`도 이름("그 외 N명"). 트리거면
APG **Button Pattern** 또는 조합된 **Menu Button Pattern**: Enter/Space
열기. G18 플레이스홀더 이름 금지.
**토큰 슬롯** — 크기 스케일(sm/default/lg, 예: 24/32/40), `--radius-avatar`
(원/스쿼클은 철학), Fallback 면·글자색, Group 겹침 오프셋·링(배경과
분리되는 스트로크), Badge 지름·위치·상태색 쌍.
**게이트** — C2 C8 C9 C39 G18 G19 G30 G31 G40 GS1
**검증** — 미검증 — 리서치 유도.

## P-PR-63 데이터 테이블 (정렬·선택·빈 상태)
**언제** — 행·열이 의미 있는 표 데이터에 정렬·행 선택·0건 상태가 필요할
때(결제 목록, 재고, 관리 로그). / **언제 아닌가** — 키-값 스펙(P-CM-03)
· 카드 그리드 · 셀 편집/방향키 탐색이 필요한 스프레드시트(그건 APG
**Grid Pattern**으로 갈아탄다).
**Base** — shadcn/ui `Table`/`TableHeader`/`TableBody`/`TableRow`/`TableHead`/
`TableCell`/`TableCaption`/`TableFooter` + Data Table 가이드(자체 컴포넌트
없음). 상태 엔진 `@tanstack/react-table` v9(`rowSortingFeature`/
`rowSelectionFeature`, `column.toggleSorting`,
`table.getFilteredSelectedRowModel()`). 선택 열은 shadcn `Checkbox` —
`radix-ui` `Checkbox.Root`/`Checkbox.Indicator`(`checked="indeterminate"`).
0건은 테이블 셀 또는 shadcn `Empty`(`EmptyTitle`/`EmptyDescription`/
`EmptyContent`). Radix 테이블 프리미티브 없음 — 네이티브 `<table>`.
**해부** — Caption(표의 정의 + 정렬 설명) → thead(`th scope="col"`) →
tbody. 정렬 가능 열의 헤더 텍스트는 `button`이 `th`를 채운다(히트
최대화). 선택 열은 헤더 삼상태 체크 + 행 체크. 선택된 행
`data-state="selected"`. 숫자 열 우측 정렬. 빈 상태: 정직한 문장 +
액션 1개(P-FN-05). 로딩은 같은 열 폭의 스켈레톤 행(P-PR-65) — 시프트
금지. 칠해지는 행 hover는 4면 패딩(P-FN-07).
**상태** — default / hover(행 면, 선언된 경우) / selected /
`:focus-visible`(정렬 버튼·체크박스) / disabled / loading / empty.
정렬 아이콘: 비가열·오름·내림이 색/크기만으로 다르지 않게(도형 자체
구분).
**접근성** — APG **Table Pattern** + **Sortable Table Example** +
**Checkbox Pattern**(삼상태). 셀 위젯은 각각 탭 스톱 — `role="grid"`를
함부로 올리지 않는다. `th scope="col"`(행 헤더가 있으면 `scope="row"`).
현재 정렬 열에만 `aria-sort="ascending"|"descending"`, 다른 열에서 제거.
정렬 아이콘 `aria-hidden`. Caption에 정렬 기능의 오프스크린 설명(버튼마다
반복 금지). 헤더 체크는 `aria-checked="true"|"false"|"mixed"`, Space로
토글. 정렬 버튼은 APG **Button Pattern**(Enter/Space). 빈 상태 액션은
버튼 1개.
**토큰 슬롯** — 행 최소 높이(밀도 페어 C9), 셀 패딩, 헤더 웨이트·면,
selected/hover 면, `--color-rule`(디바이더, 다크 3:1 C41), 정렬 아이콘
크기, 체크 시각 크기 vs 히트 ≥44, 숫자 tabular-nums.
**게이트** — C9 C8 C2 C27 C41 G19 G24 G26 G28 G39 G40 G50 GS4 GS8
**검증** — 미검증 — 리서치 유도. 빈 문장 계약은 온집·이웃장터·스타일몰
P-FN-05, 키-값 표는 온집 P-CM-03(본 프리셋의 정렬·선택과는 별개).

## P-PR-64 아코디언
**언제** — 같은 위계의 섹션을 헤딩 스택으로 접어 스크롤을 줄일 때(FAQ,
설정 그룹, 폼 섹션). / **언제 아닌가** — 단일 접기(그건 `Collapsible`) ·
탭처럼 하나가 항상 보이는 전환(Tabs) · 네비게이션 · 카드 그리드를 접는
장식.
**Base** — shadcn/ui `Accordion`/`AccordionItem`/`AccordionTrigger`/
`AccordionContent`. 기반 `radix-ui` `Accordion.Root`/`Item`/`Header`/
`Trigger`/`Content`. Radix API: `type="single"|"multiple"`, single이면
`collapsible`, `orientation` 기본 `"vertical"`, `dir`, 아이템 `disabled`.
높이 애니메이션은 `--radix-accordion-content-height`.
**해부** — Root → Item{ Header 안의 Trigger(제목 + 셰브론 `aria-hidden`)
→ Content }. Trigger 밖 Header에 다른 컨트롤을 넣지 않는다(APG: heading
안의 유일한 요소는 button). 한 패널만 vs 여러 패널은 `type`으로 선언하고
페이지에서 섞지 않는다. 동시에 열리는 패널이 많으면 region 랜드마크
폭주를 점검한다. 아코디언을 Card로 감쌀 수는 있으나 아이템을 다시 카드로
싸지 않는다(G4).
**상태** — Trigger default/hover/`data-state=open|closed`/`disabled`.
Content `data-state=open|closed`. `:focus-visible`은 Trigger에 즉시 링
(G15 fade-in 금지). 높이 애니메는 CSS 변수만, `transition: all`·layout
속성 남용 금지(G10/G14). `prefers-reduced-motion`이면 높이 애니 0(G27).
**접근성** — APG **Accordion Pattern (Sections With Show/Hide
Functionality)**. 각 헤더는 `heading`(또는 `h2`~`h6`) + `button`,
`aria-expanded`, `aria-controls`=패널 id. 항상 하나 열려 접기 불가면
열린 헤더 `aria-disabled="true"`. 패널은 선택적으로 `role="region"`+
`aria-labelledby` — 동시 개방이 ~6을 넘으면 region 생략. 키보드:
Enter/Space=접기/펼치기(single이고 다른 패널이 열려 있으면 그것을 접음).
Tab / Shift+Tab=다음/이전 포커스 가능 요소(패널 안 컨트롤 포함, 페이지
탭 시퀀스에 남음). Radix 추가(APG 최소 위): 수직 ArrowDown/ArrowUp=
다음/이전 Trigger, Home/End=첫/마지막 Trigger.
**토큰 슬롯** — 헤더 높이·패딩, 제목 웨이트(열림/닫힘 차이는 웨이트 또는
정식 마크 — 장식 언더라인 금지 G8), 셰브론 크기·회전 시간, Content
패딩, 아이템 보더(`--color-rule`), 모션 시간·이징(bounce 금지 G12).
**게이트** — C8 C1 G8 G10 G12 G14 G15 G19 G26 G27 G40 G4 GS8
**검증** — 미검증 — 리서치 유도.

## P-PR-65 스켈레톤/로딩
**언제** — 최초 페인트 전에 이미 자리 잡은 레이아웃을 유지한 채 데이터가
올 때. 짧은 불확정 대기는 `Spinner`. / **언제 아닌가** — 버튼 한 개의
펜딩(버튼 로딩 C4) · 업로드 완료율(P-PR-67) · 빈 데이터(P-PR-63 empty /
P-FN-05).
**Base** — shadcn/ui `Skeleton`(hand-rolled `div`, Radix 없음) + `Spinner`.
자리 보존용으로 대상과 같은 `Card`/`Table`/`Avatar` 골격을 재사용한다.
영역 대기는 컨테이너 `aria-busy`.
**해부** — 스켈레톤은 실제 레이아웃의 치수 복제본이다: 아바타 지름, 제목
한 줄 높이, 본문 줄 수, 테이블 열 폭·행 높이, 카드 종횡비가 로드 후와
같아야 한다. 시프트 금지. 펄스/쉬머는 면 토큰 위의 광학 효과일 뿐
레이아웃 속성을 애니메이트하지 않는다(G14). 완료 시 스켈레톤을 통째로
교체 — 빈 칸을 남기지 않는다. 하드코드 `h-[20px]`류는 G24.
**상태** — loading(스켈레톤 또는 Spinner) → default(콘텐츠). 에러는
스켈레톤을 붙잡지 않고 에러 카피+재시도. `prefers-reduced-motion`이면
펄스/쉬머 정지(G27).
**접근성** — APG 스켈레톤 패턴 없음. 교체 영역에 `aria-busy="true"`,
필요하면 `aria-live="polite"`로 완료를 한 번 알린다. 막대·원은 장식
`aria-hidden` — 스크린리더에 회색 박스를 읽히지 않는다. 불확정 대기
카피는 `role="status"`. `role="progressbar"`는 값이 있는 진행에만
(P-PR-67). 키보드 계약 없음(포커스 가능한 스켈레톤 금지).
**토큰 슬롯** — 스켈레톤 면(다크에서 녹아 사라지지 않을 대비 C42),
라운드(대상 컴포넌트와 동일 `--radius-*`), 펄스 시간, 행/카드/아바타의
실제 높이 토큰, Spinner 지름·스트로크.
**게이트** — C4 C9 C42 G10 G14 G16 G24 G27 G39 G40 GS1
**검증** — 미검증 — 리서치 유도.

## P-PR-66 세퍼레이터
**언제** — 같은 표면 안에서 그룹을 시각·의미로 나눌 때(리스트 항목,
헤더/본문, 툴바 그룹). / **언제 아닌가** — 섹션 사이 리듬(그건 스택
간격) · 카드 외곽선 · 좌측 컬러 스트라이프(G5) · 리사이즈 핸들
(focusable separator는 다른 패턴).
**Base** — shadcn/ui `Separator`. 기반 `radix-ui` `Separator.Root`:
`orientation="horizontal"|"vertical"`(기본 horizontal), `decorative`
(장식이면 시맨틱 제거).
**해부** — 선은 subtle 토큰 한 줄. 행 리스트에서는 박스 전폭이 아니라
콘텐츠 폭에 인셋(P-FN-07, `inset-inline` = 행 패딩). 칠해진 hover
위에서는 선을 죽인다. 수직은 인접 텍스트 높이에 맞고, 혼자 전고로
서지 않는다. 두께는 스케일 안(1px급) — 두꺼운 악센트 바는 세퍼레이터가
아니다.
**상태** — default만. hover/focus를 선에 두지 않는다. 다크에서 3:1
실측(C41).
**접근성** — WAI-ARIA **separator** 롤 요구(Radix가 준수). `decorative`이면
접근성 트리에서 빠진다 — 장식 선은 반드시 decorative. 의미 분리일 때만
`role="separator"`(수직이면 `aria-orientation="vertical"`). 키보드 계약
없음(포커스 금지). APG 위젯 패턴 없음.
**토큰 슬롯** — `--color-rule`(라이트/다크 쌍), 두께, 수직 높이, 인셋
(행 패딩과 페어), 리스트 간격과 선의 리듬.
**게이트** — C41 C39 G5 G7 G22 G24 G40 G45
**검증** — 미검증 — 리서치 유도. 이웃장터 P-FN-07에서 디바이더 콘텐츠 폭
인셋·hover 시 선 제거가 실화면 확인됨.

## P-PR-67 프로그레스
**언제** — 작업의 완료율(업로드, 단계, 처리)을 트랙으로 보여줄 때. 값이
있거나 불확정(indeterminate)이다. / **언제 아닌가** — 범위 안의 게이지
(배터리·점수 분포의 최대값 정규화 바 — APG **Meter Pattern**, 진행이
아님) · 레이아웃 자리 표시(P-PR-65) · 정적 통계(P-PR-68).
**Base** — shadcn/ui `Progress`. 기반 `radix-ui` `Progress.Root`/
`Progress.Indicator`. Root: `value`(`number|null`, `undefined`/`null`=
indeterminate), `max`, `getValueLabel`. `data-state`: `"loading"`|
`"complete"`|`"indeterminate"`. 가시 라벨은 shadcn `Field`/`FieldLabel`.
**해부** — 라벨(무엇을 재는가) → 트랙 → 인디케이터 → 값 텍스트(필요 시).
트랙 폭은 소속 컬럼 기준이지 전폭 장식이 아니다(P-CM-04와 같은 절제).
인디케이터는 `transform`으로만 움직인다(width/left 애니 금지 G14).
완료(`value=max`)와 불확정을 같은 애니메이션으로 뭉개지 않는다.
**상태** — loading(확정 값) / indeterminate / complete. 에러 시 바를
멈추고 에러 카피 — 바색만 빨개지는 패턴 금지. 모션은
`prefers-reduced-motion`에서 정지(G27).
**접근성** — `role="progressbar"`(WAI-ARIA). **Meter Pattern을 진행에
쓰지 않는다**(APG Meter 명시). `aria-valuemin`(기본 0) / `aria-valuemax`
/ 확정일 때 `aria-valuenow`. 퍼센트만으로 의미가 깨지면 `aria-valuetext`
또는 `getValueLabel`. 라벨은 `aria-labelledby` 또는 `aria-label`.
불확정이면 `aria-valuenow` 생략. 키보드 계약 없음(읽기 전용).
**토큰 슬롯** — 트랙 높이·라운드·면, 인디케이터 색(위 텍스트와 분리 —
텍스트는 4.5:1), 완료/에러 색 쌍, 전이 시간(transform only), 라벨 타입.
**게이트** — C4 C39 C40 G10 G14 G16 G27 G40 G46 GS1
**검증** — 미검증 — 리서치 유도. 온집·스타일몰 P-CM-04 평점 바는 분모
정규화 트랙(미터에 가깝고 본 진행 바와 역할이 다름).

## P-PR-68 통계 (수치 강조) 블록
**언제** — KPI·건수·평균처럼 숫자가 읽기의 앵커인 요약. 대시보드 스트립,
섹션 lede 옆 집계. / **언제 아닌가** — 진행률 바(P-PR-67) · 사용자가
주지 않은 수치("10× faster"류, G46) · G3 아이콘-위-헤드라인 타일 3열.
**Base** — hand-rolled. shadcn 통계 프리미티브 없음. 표면이 필요하면
`Card` 한 장 안의 그리드이지, 숫자마다 카드가 아니다(G4). 범위+최대가
의미 있을 때만 APG **Meter Pattern**(`role="meter"`, `aria-valuemin`/
`max`/`now`, 퍼센트가 부적절하면 `aria-valuetext`).
**해부** — 정의(무엇이 분모인가, 사용자 언어) → **수치(블록 안 최대
웨이트)** → 단위·비교·시점. 정의 없는 큰 숫자는 실패. 예: "이 화면에
실린 글은 N편입니다. 평균 M점"(P-CM-04), "모든 동네 · 전체 카테고리
매물 30건"(P-FN-06). 여러 수치는 한 표면의 컬럼이지 카드 스택이 아니다.
아이콘은 목적 있을 때만, 위-헤드라인 타일 금지(G3). 트랙을 곁들이면
소속 컬럼 폭만.
**상태** — default. 로딩은 숫자 슬롯만 같은 폭의 스켈레톤(P-PR-65) —
정의 라벨은 유지해 시프트를 막는다. 에러는 수치 자리에 카피.
hover-lift 금지.
**접근성** — 기본은 `dl`/`div` + 텍스트(위젯 롤 남용 금지). 수치가
라이브로 바뀌면 `role="status"`. Meter를 쓸 때만 APG **Meter Pattern**,
키보드 없음. 숫자만 읽고 정의가 떨어지지 않게 라벨을 DOM 순서로 병기한다.
`aria-label`로 정의를 숨기지 말 것.
**토큰 슬롯** — 디스플레이 숫자 크기·웨이트·`font-variant-numeric`
(tabular-nums), 정의 라벨 색(muted여도 4.5:1 C45), 단위 크기, 항목 갭,
표면 패딩(카드와 공유할 때만 `--space-card-pad`).
**게이트** — C24 C45 G3 G4 G11 G18 G40 G46 GS5 GS7
**검증** — 미검증 — 리서치 유도. 온집 P-CM-04 평점 분포 정의 라인·분모
정직, P-FN-06 결과 수 정의가 실화면 확인됨.

## P-PR-69 태그 목록
**언제** — 항목에 붙은 정적 분류(카테고리, 해시태그, 속성)를 한 줄/여러
줄로 나열할 때. / **언제 아닌가** — 필터 칩(P-FN-04, 선택 토글) · 입력
칩 · 제거형 칩(C29 dismiss는 별도 포커스) · 상태 배지 하나(P-PR-61).
역할을 한 컴포넌트에 섞지 않는다(C27).
**Base** — shadcn/ui `Badge`를 `ul`/`li`로 반복. 태그 전용 Radix 프리미티브
없음. 링크 태그면 `Badge`+`asChild` 링크. 제거형은 `Badge` + 독립 close
버튼이지 배지 onClick이 아니다.
**해부** — 목록 라벨(있으면) → `ul` → `li`당 태그 하나. 줄바꿈 허용,
폭주하면 접거나 시트로(C30) — 가로 스크롤로 도망가지 않음(G34). 카드
안에서 본문 패딩과 같은 인셋. 태그를 다시 카드/칩 타일로 키우지 않는다.
**상태** — 정적: default만, hover 스케일 금지(G11). 링크 태그: hover·
`:focus-visible`. 제거형: close default/hover/`:focus-visible`/disabled,
히트 ≥44(C28/C29). 필터 활성(면 반전)을 여기 쓰지 않는다 — 그건
P-FN-04.
**접근성** — APG 전용 태그 패턴 없음. 목록은 `ul`. 정적 태그는 텍스트.
링크는 APG **Link Pattern**(Enter). 제거 버튼은 APG **Button Pattern**
(Enter/Space), 이름 "태그명 제거". 그룹 라벨은 `aria-labelledby`.
장식 `#` 아이콘 `aria-hidden`.
**토큰 슬롯** — 배지와 공유하되 태그 면은 secondary/outline 쪽으로 고정
(상태 default와 충돌 금지), `--radius-badge`, 갭, 행 높이, 접기
브레이크, close 아이콘 크기.
**게이트** — C27 C28 C29 C30 C8 G11 G19 G30 G34 G40 GS8
**검증** — 미검증 — 리서치 유도. 온집·이웃장터·스타일몰 P-FN-04는 필터
칩(본 프리셋과 역할이 다름).
