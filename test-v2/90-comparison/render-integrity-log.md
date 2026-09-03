# 봉인 칸 렌더 무결성 기록 (레인 A) — 수정하지 않는다, 채점 입력이다

`render-integrity.mjs`(결정론, 루브릭 밖)가 브랜드 완주마다 잡은 것. 03-runs는 봉인이라 고치지 않고,
Phase 6 검수·성장 루프(omd:issue)의 입력으로 쓴다. 축 1 채점은 이 기록과 무관하게 캡처만 본다.

| 일자 | 칸 | 검사 | 실측 |
|---|---|---|---|
| 2026-09-02 | baemin/hallmark/rep-1 | escape | marquee형 `<span>` 뷰포트 이탈 |
| 2026-09-02 | baemin/uiuxpromax/rep-2 | escape | marquee형 `<img>` 뷰포트 이탈 |
| 2026-09-02 | figma/hallmark/rep-1 | escape | `<path>` right=1455 (clientWidth 1440) — SVG 15px 이탈 |
| 2026-09-02 | karrot/hallmark/rep-3 | escape | marquee형 `<span>` 뷰포트 이탈 right=1503 (clientWidth 1440) |
| 2026-09-02 | toss/hallmark/rep-2 | ua-default | figure UA 마진 미리셋 (기존 9/1 감사 기록 재확인) |
| 2026-09-02 | toss/hallmark/rep-3 | ua-default | figure UA 마진 미리셋 |
| 2026-09-02 | toss/hallmark/rep-4 | escape·ua-default | 뷰포트 이탈 + figure UA 마진 |
| 2026-09-02 | apple/uiuxpromax/rep-4 | ua-default | `<figure.visual>` margin 40px/40px |
