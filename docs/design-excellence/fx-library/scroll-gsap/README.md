# scroll-gsap — GSAP core + ScrollTrigger 스크롤 안무 레시피 (2026-09-04)

출처: `docs/design-excellence/scroll-choreography.md`(결정표·계측·규칙 R-A~R-F). 라이브러리: GSAP 3.15.0 core + ScrollTrigger (114.7KB minified, 인라인).
라이선스: gsap.com/standard-license — 상업 이용 포함 무료, 금지 사용은 "Webflow 비주얼 애니메이션 빌더와 경쟁하는 도구"뿐이며 FAQ 가 AI 생성 코드를 허용 사용으로 명시. **제품이 노코드 편집기로 진화하면 재검토.** 각 산출물 trace 에 이 문장을 남긴다.
검증: 9개 레시피 전부 `file://` 단독 HTML 에서 콘솔 에러 0, computed-style 델타로 변형 확인, `prefers-reduced-motion: reduce` 에서 에러 0·ScrollTrigger 0개 생성.
규칙: 핀 구간 ≤ 4/페이지(전부 넣으면 2000vh 초과). 이미지 id 는 각 레시피 첫 줄 `const IDS=[...]` 하나 — 업종 무관.
