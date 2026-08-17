시각 품질 격차 분석
대상: OmD (*--omd-autopilot-v2) vs ProMax (*--ui-ux-pro-max) vs Hallmark (*--hallmark)
과제: plan-picker-react, trail-gear-gallery
제외: (1) 개발자용 Sample catalog 라디오를 제품 UI로 노출, (2) 순정 시스템 폼 컨트롤.
범위 주석: plan-picker-react--ui-ux-pro-max 폴더에는 index.html만 있고 그것이 가리키는 ./src/styles.css·./src/main.js는 없다. ProMax 비교는 완전한 산출물인 trail-gear-gallery--ui-ux-pro-max와, 두 과제 모두 완전한 Hallmark로 한다.


GAP-1: 디스플레이 타입 스케일이 붕괴되어 제목이 본문과 한 단계밖에 차이나지 않는다.
증거: OmD plan-picker styles.css `.page-title { font-size: clamp(1.5rem, 2vw + 1rem, 2.25rem); font-weight: 650; letter-spacing: -0.03em }` + theme.js type 토큰은 `familySans` 하나뿐. OmD trail-gear styles.css `:root { --size-display: 2rem; --size-title: 1.25rem; --size-body: 1rem; --size-caption: 0.875rem }` / `h1 { font-size: clamp(1.5rem, 4vw, var(--size-display)); font-weight: 650 }` / `.item-name { font-weight: 650 }` (크기 없음, 1rem 상속). vs Hallmark plan-picker tokens.css `--text-display: clamp(2.75rem, 5vw + 1rem, 5.25rem); --text-display-s: clamp(2rem, 4vw + 0.5rem, 3.25rem); --font-display-weight: 800; --font-tracking-display: -0.045em; --lh-display: 1.02` / styles.css `.hero h1 { font-size: var(--text-display); max-width: 12ch }`. vs ProMax trail-gear styles.css `.intro { max-width: 22ch }` / `.intro h1 { font-family: var(--font-heading); font-size: var(--font-size-display); font-weight: var(--weight-black); letter-spacing: var(--tracking-display); line-height: var(--leading-tight) }` / `.card__title { font-size: var(--font-size-xl); font-weight: var(--weight-black); letter-spacing: -0.03em }`.
흡수 규범: 페이지에는 본문과 최소 2배수 차이나는 디스플레이 스텝(클램프 디스플레이 + 트래킹 + 타이트 행간 + 디스플레이 웨이트)을 두고, 카드 제목도 본문과 같은 크기·웨이트로 두지 마라.


GAP-2: 라벨/아이브로/숫자/아웃라이어 역할이 없어 위계가 굵기만으로 버틴다.
증거: OmD plan-picker styles.css `.plan-id, .sample-amount { font-size: 0.875rem; font-weight: 500; color: var(--color-ink-muted) }` — 금액·ID·동사가 같은 캡션 더미. OmD trail-gear `.brand-kicker, .item-id, .item-meta, .section-copy, .detail-kicker, .detail-note, .site-footer p, .availability { font-size: var(--size-caption); color: var(--color-ink-muted) }` — 킥커·ID·메타·푸터·재고 문장이 한 셀렉터. vs Hallmark plan-picker styles.css `.label { font-size: var(--text-label); font-weight: var(--font-label-weight); letter-spacing: var(--font-label-tracking); text-transform: uppercase; color: var(--color-muted) }` + tokens.css `--text-numeral: clamp(7.5rem, 22vw, 20rem)` / `.summary__numeral` 거대 고스트 숫자. vs ProMax trail-gear `.eyebrow { font-size: var(--font-size-xs); font-weight: var(--weight-semibold); letter-spacing: var(--tracking-label); text-transform: uppercase }` / `.badge` 동일 라벨 문법 / `.card__cat` 동일 트래킹. vs Hallmark trail-gear tokens.css `--font-outlier: ui-monospace…` 를 마스트 이슈 라인과 콜로폰에만 씀.
흡수 규범: 본문 외에 최소 라벨(대문자+와이드 트래킹+muted)과 디스플레이를 분리하고, 숫자·콜로폰 같은 제3 역할이 필요하면 별도 페이스/스케일로 고정하라.


GAP-3: 여백 스케일이 컨트롤 패딩에서 끝나 섹션 공기가 없다.
증거: OmD plan-picker theme.js `space: { xs: "8px", sm: "12px", md: "16px", lg: "24px", xl: "32px" }` / `.page { padding: var(--space-lg) var(--space-md) var(--space-xl) }` (24/16/32). OmD trail-gear `:root` space-1..6 = 0.25–2.5rem, `.hero, .gallery-section, .about { padding-block: var(--space-5) }` (1.5rem). vs Hallmark plan-picker tokens.css `--space-xl: 2.5rem; --space-2xl: 4rem; --space-3xl: 6rem; --space-4xl: 9rem; --space-page: clamp(1rem, 4vw, 2.5rem)` / `.plate { margin-block-start: var(--space-3xl) }` / `.summary { padding-block: var(--space-2xl) var(--space-3xl); min-height: var(--space-4xl) }` / `.head-hang { padding-block: var(--space-2xl) var(--space-lg) }`. vs ProMax trail-gear `.intro { padding: var(--space-3xl) 0 var(--space-2xl) }` / `.policy { margin-top: var(--space-3xl); padding-top: var(--space-2xl) }`.
흡수 규범: 스페이스 스케일은 컨트롤용 8–32px에서 멈추지 말고, 섹션 전환용 2.5–6rem(필요하면 9rem)과 뷰포트 거터 클램프를 같은 토큰 세트에 포함하라.


GAP-4: 모든 표면이 같은 라운드 보더 카드라 조형이 장르가 아니라 컴포넌트 키트가 된다.
증거: OmD plan-picker theme.js `radius: { control: "12px", card: "20px" }` / `.plan-option { border: 2px solid var(--color-border); border-radius: var(--radius-card); background: var(--color-surface) }` / `.summary`도 같은 20px+1px 보더 / `.honesty`·`.status-banner`·`.nav-panel`도 12–20px. OmD trail-gear `--radius-sm: 0.5rem; --radius-md: 1rem` / `.card-hit { border: 1px solid var(--color-border); border-radius: var(--radius-md) }` / `.detail-panel` 동일. 그림자 토큰 없음. vs Hallmark plan-picker tokens.css `--radius-none: 0; --radius-card: 0` / `.plans { border-block: var(--rule-hairline) solid var(--color-ink) }` — 카드가 아니라 가로 룰 밴드 / `.plate { background: var(--color-ink); color: var(--color-paper) }` 전폭 반전. vs Hallmark trail-gear `.card { border: 0; background: transparent; box-shadow: var(--shadow-none) }` / `.card__media { border: var(--rule-hair) solid var(--color-rule) }`만 프레임. vs ProMax trail-gear `.card { box-shadow: var(--card-shadow); border-radius: var(--card-radius) }` / hover `var(--card-shadow-hover)` / selected `0 0 0 2px var(--color-ring)` — 휴지·호버·선택 그림자가 토큰으로 갈라짐.
흡수 규범: 페이지의 주 표면은 한 장르의 조형(룰 밴드, 무라운드 플레이트, 또는 그림자 있는 타일)을 고르고, 컨트롤·배너·카드·다이얼로그에 같은 radius+1px border를 반복하지 마라.


GAP-5: 제공 아트워크가 히어로로 구성되지 않고 헤더 위 크롭 배너로  consum된다.
증거: OmD plan-picker styles.css `.artwork-frame { max-height: 220px }` / `img { height: 220px; object-fit: cover }` / `@media (min-width: 720px) { height: 280px }` — 그 아래 `.header-bar { padding: var(--space-sm) var(--space-md) }` 얇은 바. app.js는 이미지를 header 안에 aria-hidden으로만 넣음. vs Hallmark plan-picker styles.css `.hero { display: grid; gap: var(--space-xl); padding-block: var(--space-lg) var(--space-2xl) }` / `@media (min-width: 60rem) { .hero { grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); align-items: end; padding-block: var(--space-xl) var(--space-3xl) } }` / `.hero__figure { border-block: var(--rule-hairline) solid var(--color-rule) }` + figcaption 라벨. app.js는 카피와 figure를 같은 diptych에 둔다. ProMax trail-gear는 사진 히어로 대신 22ch 스테이트먼트 헤드로 첫 화면을 구성한다 (`<h1>Six kits.<br>No stock ticker.</h1>`).
흡수 규범: 제공된 이미지가 있으면 크롭 스트립으로  squashed하지 말고, 카피와 그리드로 맞대거나, 이미지가 없으면 짧은 디스플레이 문장으로 첫 화면의 스케일을 세워라.


GAP-6: 악센트가 선택·고지·CTA를 전부 칠해서 신호가 아니라 면적이 된다.
증거: OmD plan-picker `.plan-option::after { background: var(--color-accent-soft); opacity: 0 }` / `[aria-checked="true"]::after { opacity: 1 }` — 카드 전체 워시. `.honesty { background: var(--color-accent-soft) }` / `.confirm { width: 100%; background: var(--color-accent); border: 0; border-radius: 12px }`. OmD trail-gear `.filter:has(input:checked) { background: var(--color-accent); color: var(--color-on-accent) }` / `.btn-primary { background: var(--color-accent) }` / `.local-verb { color: var(--color-accent) }`. vs Hallmark plan-picker `--color-accent: oklch(45% 0.19 264)` 는 `.plan__mark` 0.52em 점, 선택 시 `box-shadow: inset 0 0 0 2px accent`, 포함 항목 `border-inline-start: 3px`, CTA는 `.cta { border: 1px solid paper; background: transparent }` 아웃라인(호버에만 반전). vs ProMax trail-gear 선택은 `border-color: var(--color-ring)` + 2px 링이지 카드 필이 아니고, 필터만 `chip-selected-bg`로 반전. vs Hallmark trail-gear `.detail__avail { border-block-start: 2px solid var(--color-accent) }` — 악센트는 재고 블록의 2px 룰.
흡수 규범: 악센트는 점·룰·링·한 개의 반전 칩처럼 면적을 작게 쓰고, 선택 카드 전체 워시와 페이지 CTA 필을 동시에 쓰지 마라.


GAP-7: 호버/선택/포커스가 이동·스케일뿐이라 상태가 형태를 바꾸지 않는다.
증거: OmD plan-picker `.plan-option:hover:not(:disabled) { transform: translateY(-2px) }` / `:active { transform: scale(0.98) }` / `transition-property: transform, opacity` — 배경·보더 전환 없음. 선택은 보더 색+워시뿐, 선택 마크·이름 이동 없음. OmD trail-gear `.card-hit:hover { transform: perspective(56rem) rotateX(4deg) rotateY(-3deg) translateY(-0.35rem) }` 가 `(hover: hover) and (pointer: fine)`로 가드되지 않음. 선택 시각은 `::after` 그림자 opacity뿐. vs Hallmark plan-picker: hover 시 `background: paper-2` + `.plan__name { transform: translateX(var(--space-xs)) }`, 선택 시 inset 2px accent + `.plan__mark { opacity: 1 }` + 리스트 바 색 변경, disabled/loading/error/success 분기. vs ProMax trail-gear: hover `box-shadow: var(--card-shadow-hover)` + `translateY(var(--motion-lift))` + pointermove로 `--tilt-x/y` (`--motion-tilt-max`), 선택 `0 0 0 2px var(--color-ring)`, 필터는 hover 보더 / active scale / aria-checked 필이 분리. vs Hallmark trail-gear: 틸트는 fine-pointer 미디어쿼트 안에서만, 선택은 `.card__media` inset accent.
흡수 규범: 호버는 배경·보더·그림자를 바꾸고, 선택은 호버와 다른 영구 표식(링·마크·룰)을 주며, 3D 틸트는 정밀 포인터에만 한정하라.


GAP-8: 레이아웃이 앱 셸(햄버거+사이드바)이라 섹션이 전환되지 않는다.
증거: OmD plan-picker `.layout` @720px `minmax(0, 2fr) minmax(16rem, 1fr)` — 비교 그리드 옆에 같은 톤의 summary 카드. `.nav-toggle`는 880px까지 햄버거, `.nav-panel`은 18rem 드롭다운. 푸터 없음. OmD trail-gear `.site-header` flex+햄버거, 히어로는 h1+lede+필 버튼 세로 스택. vs Hallmark plan-picker: N9 에지 워드마크+텍스트 CTA, 12컬럼 `.rails` repeating-linear-gradient, hanging `.head-hang`, 그다음 잉크 `.plate`가 페이지를 반전시켜 요약으로 넘어감. 햄버거 없음. vs ProMax trail-gear: sticky 헤더 `backdrop-filter: blur(10px)`, `.intro` @1024px `minmax(16rem, 1fr) minmax(18rem, 28rem)` 카피/리드 스플릿, `.catalog__bar` 제목+필터 end 정렬, 1→2@768→3@1024 명시 그리드, 마지막 `.policy` 섹션. vs Hallmark trail-gear: 센터 마스트헤드+더블 헤어라인 `.mast-rule`, 보드→노트→콜로폰.
흡수 규범: 내비게이션·히어로·목록·결절(반전 플레이트/정책/콜로폰)을 서로 다른 레이아웃 장치로 끊고, 기본 크롬을 햄버거+사이드바 대시보드로 두지 마라.


GAP-9: 서체가 시스템 산세리프 한 줄이라 장르 신호가 없다.
증거: OmD 양쪽 모두 `system-ui, "Segoe UI", sans-serif` (plan theme.js `familySans`, trail `--font-sans`). `-webkit-font-smoothing` / `text-rendering` 없음. vs Hallmark plan-picker `--font-display/--font-body: "Avenir Next", "Futura", "Gill Sans", "Trebuchet MS"` + display weight 800, 헤딩 `text-transform: lowercase`. vs Hallmark trail-gear 2+1: display `"Iowan Old Style", Palatino…` serif / body Avenir Next / outlier SF Mono — 마스트 이슈 라인과 콜로폰만 모노. vs ProMax trail-gear `font-family: var(--font-heading)` vs `var(--font-body)`, `font-weight: var(--weight-black)`, body에 `-webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility`.
흡수 규범: 로컬 스택으로라도 디스플레이와 본문을 가르고(필요하면 제3 아웃라이어), 웨브를 받지 않더라도 장르가 읽히는 페이스 페어를 토큰에 고정하라.


GAP-10: 갤러리 그리드가 auto-fit 타일이라 마지막 줄이 늘어나고 리듬이 뷰포트에 맡겨진다.
증거: OmD trail-gear `.gallery-grid { grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr)); gap: var(--space-5) }` — 6장이 3+3 또는 2+2+1로 깨지며 한 장이 한 행을 채움. vs Hallmark trail-gear `.gallery` 1열 → `@40rem` 2열 → `@60rem` 3열, gap `var(--space-xl) var(--space-lg)`. vs ProMax trail-gear `.gallery` 1열 → `@768px` 2열 → `@1024px` 3열, `@1440px` body `max-width: 90rem`. (plan-picker에서 OmD는 @720px 3열을 쓰지만, Hallmark는 모바일 1열 룰 밴드 → 48rem에서 세로 룰로 3열 전환이라 ‘카드 3장’이 아니라 ‘카탈로그 한 줄’이다.)
흡수 규범: 고정 개수 카탈로그는 auto-fit을 쓰지 말고 1/2/3 작성 브레이크포인트를 두고, 마지막 행이 한 칸으로 늘어나지 않게 하라.


GAP-11: 카드·빈 상태·디테일의 마이크로카피가 같은 캡션 더미로 쌓여 스캔 포인트가 없다.
증거: OmD trail-gear 카드 본문: `.item-id` + `.item-name`(1rem/650) + `.item-meta` + 동일 문장 “Rental stock counts are not published.” + `.local-verb` “Open detail”. 이름도 “Compact two-person hiking tent”처럼 스펙 문장. 빈 상태 `#catalog-empty`는 스타일 없이 `[data-state="empty"] { margin-bottom }`만. 디테일은 커스텀 `.detail-dialog { background: color-mix(inverse 55%) }` + `.detail-panel` 보더리스 라운드 패널, 그림자·backdrop-filter·아이콘 없음. OmD plan-picker summary empty는 같은 카드 안 muted `<p>`. vs ProMax trail-gear: 사진 위가 아니라 바디에 `.badge`+`.card__cat`, 제목은 “Ridge Two” / “Ember 45”, 빈 상태 `.empty { padding: var(--space-xl); border: 1px dashed; border-radius }`, native `<dialog>` + `::backdrop { backdrop-filter: blur(4px) }` + SVG close. vs Hallmark trail-gear: 사진 위 `.card__badge`, 짧은 사물명 “Olive dome tent”, `.card__action` “Open notes →” 언더라인, 선택은 미디어 링, 디테일 `.detail__avail`은 accent 상단 룰. vs Hallmark plan-picker summary는 항상 잉크 플레이트+거대 인덱스+라벨 “currently held”.
흡수 규범: 카드는 배지/짧은 고유명/라벨/액션 동선을 분리하고, 빈 상태와 디테일 패널은 본문 문단이 아니라 독자 표면(대시 보더, 네이티브 dialog, 악센트 룰)으로 설계하라.


GAP-12: 페이지 시작·끝이 크롬 없이 위젯만 있어 제품이 아니라 폼처럼 보인다.
증거: OmD plan-picker wordmark는 `.wordmark { font-weight: 650; letter-spacing: -0.02em }` 텍스트 “Membership”, 푸터·콜로폰·::selection 없음. OmD trail-gear 워드는 “Trail gear gallery”, 푸터는 `.site-footer p` 한 줄 muted 캡션. vs Hallmark plan-picker `.wordmark` display 1.25rem / weight 800 / tracking -0.045em / lowercase “halden”, `.nav-cta` uppercase “Roster →”, `.foot__colophon` + `.register` 원형 십자, `::selection { background: accent }`. vs Hallmark trail-gear `.mast-name` display clamp 2.25–3.75rem “Ridge Desk”, `.mast-line` 모노 이슈 라인, `.foot-dense` paper-2 배경에 페이스·날짜·에셋 출처. vs ProMax trail-gear `.site-header__mark` heading/black “Trail locker”, eyebrow “Ridge Loan”, 헤더 샘플 배너, 푸터 두 줄 브랜드+재고 고지.
흡수 규범: 워드마크·이슈/샘플 라인·콜로폰을 본문과 다른 타입 역할로 페이지 양끝에 두고, 본문이 폼 위젯에서 시작해 폼 위젯에서 끝나게 두지 마라.


결론
OmD는 접근성 뼈대(스킵 링크, 로빙 탭, live region, reduced-motion)는 갖추지만, 시각 시스템은 ‘토큰 몇 개 + 라운드 카드 + 악센트 필’로 두 과제를 같은 SaaS 셸에 넣고 있다. ProMax는 디스플레이 스케일·아이브로·그림자 상태·작성된 그리드·브랜드 문장으로 밀도 있는 미니멀을 만들고, Hallmark는 무라운드 룰·반전 플레이트·타입 역할·섹션 공기로 편집 장르를 만든다. 격차의 원인은 개별 색값이 아니라, 타입 스케일·여백 상단·표면 장르·악센트 면적·상태 분화·페이지 거시구조가 토큰에 없는 것이다. 스킬 지시는 위 12개 규범을 과제 무관 제약으로 넣어야 한다.
