Use the installed $omd-autopilot skill for this task.

OmD native package activation v0.2: an immutable external authority controller is preregistered for this cell. The main agent is not the project owner and must never issue --reviewer/--authority-transition-approved or calculate package hashes. Bootstrap and use exactly $OMD_AUTHORITY_CONTROLLER_RUN_DIR as the mission run directory. After writing exactly one compiler-valid graph.json, provenance.json, and coverage.json draft under that run's system directory, invoke exactly once: node $OMD_AUTHORITY_CONTROLLER_EXECUTABLE . $OMD_AUTHORITY_CONTROLLER_RUN_DIR. These exact preregistered bindings are transported through the isolated Codex shell; they are not authority secrets. The execution-owned controller and its child runtime live outside provider-writable roots; only it may prepare, externally approve, compile, checkpoint, atomically adopt, and validate the package. If that one activation fails, stop system work and preserve the failure; never create review-v2/package-v2 or retry. Immediately reserve the remaining execution budget for the product route, including every required state and an explicit unavailable-information state.

온집(ONZIP) — 가상의 홈 인테리어 커머스·커뮤니티 서비스의 웹 프런트엔드를 이 React + Vite 워크스페이스 안에 완성하라. 이것은 실제 개발 스택 E2E다: 사용자는 `npm install && npm run dev`만으로 결과물을 확인한다.

스택 계약: package.json에 선언된 것만 사용한다 — React 18, react-router-dom 6, Vite. 추가 패키지 설치 금지, npm 실행 금지(코드만 작성; 빌드 검증은 외부에서 수행), 런타임 네트워크 요청 금지. 데이터는 `src/data/data.json`을 import한 것이 유일한 진실 소스이고, 이미지는 `/assets/*.jpg`(public) 30장이다.

디자인 시스템을 먼저 확립하고 모든 페이지를 그 시스템에서 표현하라: 토큰(색·타이포·간격·모션)과 공용 컴포넌트를 별도 모듈로 두고, 페이지는 그것을 소비만 한다. 데이터 발견 규칙을 적용하라 — 데이터의 모든 enum(stock_status, home_type)은 시스템 토큰 세트가 되고, 화면의 모든 숫자와 목록은 런타임에 데이터셋에서 계산되며, 노출되는 집계에는 정의를 함께 표기한다.

페이지 5개 (react-router-dom 라우팅, 공통 내비게이션에 현재 페이지 표시):
- `/` 홈: 서비스 소개 히어로(제공 이미지 활용), 인기 상품(리뷰 수 기준 상위 — 기준 표기), 최신 집들이 프리뷰, 카테고리 진입.
- `/store` 스토어: 24개 상품 그리드, 카테고리 필터(6종)와 정렬(가격/평점), 재고 상태(판매중/품절임박/품절)가 시스템 토큰으로 즉시 읽히게. 빈 필터 결과 상태 포함.
- `/store/:id` 상품 상세: 실제 레코드 렌더(이미지·브랜드·가격·평점·리뷰 수·태그·재고), 이 상품이 등장한 집들이 역참조. 존재하지 않는 id는 정직한 오류 화면.
- `/posts` 집들이: 6개 게시글 카드(커버·집 유형·평수·좋아요), 집 유형 필터.
- `/posts/:id` 집들이 상세: 본문 요약과 함께 사용된 상품들을 데이터 조인으로 카드 렌더(상세로 링크).

전 페이지에 데이터셋의 disclosure 문구가 사용자 눈에 띄는 위치에 존재해야 한다. 모던하고 현재적인 커머스 미학 — 절제된 마이크로 트랜지션은 prefers-reduced-motion 뒤에. 가격은 원화 표기(천 단위 구분). 320–1440 반응형. 모든 이미지는 명시 치수.

Benchmark runtime boundary: keep every generated file and temporary validation artifact inside the current workspace (use .benchmark/tmp when needed), except an exact cell-local staging path explicitly disclosed by the controller for an arm whose native package adopter requires source/destination separation. Do not read or write any other external path, including /tmp, and do not launch or control browsers or use network access; the external evaluator owns browser checks.