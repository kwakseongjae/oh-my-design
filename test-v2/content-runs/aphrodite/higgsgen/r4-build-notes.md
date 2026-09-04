# r4 빌드 노트 — 리뷰 r3 회귀 목록 + 구현 지침

## 리뷰 r3 에서 닫아야 할 것 (WARN 14 중 r4 에 해당)
1. **반경 토큰 밖 43건** — fx-library 스니펫 기본값(12px×36) → DESIGN 반경 토큰으로 치환 후 인라인.
2. **간격 비토큰 14종** → 4·8·12·16·24·32·48·64·96·128 만. 섹션 간격 값 ≤3종(LC-55).
3. **S3 캡션 판독 불가 6/8** — 스크램블 삭제, 토큰 즉시 스왑 + 밑줄 이동만.
4. **선언 K ≠ 구현 K** — 구현 후 `node test-v2/tools/scrub-timing-probe.mjs render-r4.html` 값으로 storyboard-r4 C7 을 덮어쓴다.
5. **drift-collage 0.65px/3s** — 삭제(층 자체 제거).
6. **진입 커튼이 H1 을 0.9~1.8s 덮음** — 삭제. 진입 애니 ≤1.2s, H1·CTA 를 덮지 않는다(LC-54).
7. **11px 텍스트 @390** — 최소 12px, 라벨 13px.
8. 홀드 구간 텍스트 0 → 홀드마다 읽을 것 1개(LC-56).

## 구현 지침
- **핀 엔진 하나**: `fx-library/fullbleed-scale-reveal/snippet.js` 의 스티키+진행률(`--e`) 패턴을 S1·S3·S6 공용으로. `end = travel × k`, `bottom bottom` 금지. GSAP 인라인하지 않는다.
- **스니펫 출처**: `wide-drum`·`persistent-expand`·`fullbleed-scale-reveal`·`mask-wipe-reveal` — README 의 금기를 지키고, 반경·간격·duration 을 토큰으로 치환. 출처·라이선스(MIT 자작)를 trace-r4.md 에.
- **이미지 크기**: 풀블리드는 `object-fit: cover` 100vw×100vh(16:9 원본은 1440×900 에서 상하 크롭 ≈ 5%). 3:2 원본 cover 시 좌우 크롭 ≈ 6%. 포커스 포인트는 `object-position` 으로 피사체 보존.
- **모바일 390**: 핀 해제 → S1 풀블리드 100svh + 켄번즈 · S3 IntersectionObserver 진입 시 프레임 자동 재생(8×450ms) 후 마지막 프레임 고정 · S6 처음부터 풀블리드 · 드럼 타일 44vh · persistent-expand 는 세로 스택(README 720px 이하 규칙).
- **폴드 의미 단위 5**: nav(1)·h1·서브·CTA·미디어. 그 외 아무것도 첫 뷰포트에 두지 않는다(라이브 수치·점멸·태그 금지).
- **호버**: 전 요소 2% 리프트/밝기 또는 정지뿐. `@media (hover: none)` 에서 호버 스타일 전부 무효.
- **빌드 중 자기 비평**: 섹션마다 1440·390 스크린샷을 찍어 확인하고 trace-r4.md 에 한 줄씩(고친 것·버린 시도).
- 검증: render-integrity · text-contrast · landing-integrity(LI-1~40, 신규 34~40 포함) · scrub-timing-probe. 통과 못 하면 산출을 고친다(기준을 낮추지 않는다).
