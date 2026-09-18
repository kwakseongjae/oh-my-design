# JOURNAL

## 2026-09-17 (저녁)

- **한 일**: 토스 TDS 인덱스 발견 — 올바른 호스트를 처음부터 인용했으나 목록을 안 읽어 11개 중 2개만 측정. 출처 4건·로스터·§15 "출처 있는 부재" 반영, 검토 패키지 r2 재생성. 라우트 실측 — 죽은 건 `/design-systems`가 아니라 `/reference`(61줄·noindex·canonical 양도)였고, AGENTS.md가 그 죽은 쪽을 "카탈로그 상세"로 지목해 반복 실수를 유발하던 것을 교정.
- **열린 것**: 오너 승인 5건 → `docs/OWNER_DECISIONS_2026-09-17.md`. 01 채택 위험은 시험으로 해소(Core v2 정본 투입 시 951중 942 통과, 깨지는 9건 = 계약 갭 3 + toss를 legacy 픽스처로 쓴 6). **write gate 거리가 처음 측정됨: 9건/6파일.** 02는 애널리틱스가 죽어(GA4 GCP 프로젝트 삭제·Mixpanel 402) 수치 없이 결정해야 함. 03 advisory 390 vs 198. `inspected`/`captured` 관례 미확정.
- **다음**: 인덱스 발행 호스트 4곳(kakao 316·krds 81·yeogiotte 40·pega) 로스터 대조, 나머지 430개 호스트 인덱스 일괄 프로브, `omd:add-reference` Phase 2에 Step 0(인덱스 우선) 추가.

