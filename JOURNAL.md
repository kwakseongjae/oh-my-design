# JOURNAL

## 2026-09-19

- **한 일**: 후보 A(인덱스 전수 프로브) 완료. **대상 모집단이 429가 아니라 50이었다** — 353개는 `homepage`만 있고 `ds:` 86개 중 37개가 `type: brand`(트레이드마크·폰트·보도자료)라 컴포넌트 로스터를 주장하지 않는다. `type`은 프론트매터에 있었고 안 읽고 계획했다. 50개 중 27개 로스터 확인, 7개 경로 모양 보류, 16개 SPA(에이전트 몫). **이름 단위 결론: 발행 1,111개 중 레퍼런스가 부르는 것 308개(27.7%, 상한).** pega 42/45·yeogiotte 4/6로 검증됨. 스크립트 2개(`probe-design-system-index.mjs`, `compare-component-names.mjs`) 커밋(`7cebaacf`, `c6731b95`).
- **열린 것**: adobe(`/page/` 114개)·likelion(Storybook 쿼리스트링)은 진짜 로스터인데 자동 판정 보류 — 한 호스트씩이라 규칙 안 넓힘. 인덱스 없는 16개는 렌더된 내비 읽기 필요. 데이터 품질 2건: `zigzag`는 `type: system`인데 URL이 블로그 글, `banksalad`는 `type: brand`인데 GitHub 조직. B(`contains-prescriptive-placeholder` 39·`missing-product-surface-scope` 22)·C(krds 채택, B 뒤)·만료 벽(141건 전부 2027-01-10) 그대로.
- **한 일(2)**: A 보수 1차 — wise 55·alipay 72·channeltalk 60·patternfly 72·vercel 72·zendesk 55 = **386개 이름** 기록(`7c2496c6`, `0d0040d4`). 게이트 전부 통과, 티어·portable_core 불변, 원장 899→905. wise가 인용하던 `docs.wise.design`가 죽어 있었다(302→404, 리다이렉트 후 200이라 상태코드 검사는 통과).
- **한 일(3)**: A 보수 2차 — skyscanner 91+10·smarthr 61·uswds 47·ibm 39·govuk 37 = 285개, 누적 **11건 671개**(`ac211f6b`). 에이전트 5명이 55분간 못 써서 직접 마무리. skyscanner는 2KB 셸이라 브라우저 렌더 필요 — 이 카탈로그에서 프로브를 무력화하는 유일한 호스트. ibm만 1개를 클래스 결합으로 진짜 측정(`cds--accordion__heading`), uswds는 자기 소스에 인덱스를 2개월간 들고도 안 읽었다.
- **다음**: 남은 로스터 12개 호스트(skyscanner·smarthr·govuk·uswds·hashicorp·ibm·sanity…) · `ds:` 오표기 3건(velog·banksalad·zigzag) 처리 · adobe는 Spectrum 1/2 세대 구분 필요.


## 2026-09-17 (저녁)

- **한 일**: 토스 TDS 인덱스 발견 — 올바른 호스트를 처음부터 인용했으나 목록을 안 읽어 11개 중 2개만 측정. 출처 4건·로스터·§15 "출처 있는 부재" 반영, 검토 패키지 r2 재생성. 라우트 실측 — 죽은 건 `/design-systems`가 아니라 `/reference`(61줄·noindex·canonical 양도)였고, AGENTS.md가 그 죽은 쪽을 "카탈로그 상세"로 지목해 반복 실수를 유발하던 것을 교정.
- **열린 것**: 오너 승인 5건 → `docs/OWNER_DECISIONS_2026-09-17.md`. 01 채택 위험은 시험으로 해소(Core v2 정본 투입 시 951중 942 통과, 깨지는 9건 = 계약 갭 3 + toss를 legacy 픽스처로 쓴 6). **write gate 거리가 처음 측정됨: 9건/6파일.** 02는 애널리틱스가 죽어(GA4 GCP 프로젝트 삭제·Mixpanel 402) 수치 없이 결정해야 함. 03 advisory 390 vs 198. `inspected`/`captured` 관례 미확정.
- **다음**: 인덱스 발행 호스트 4곳(kakao 316·krds 81·yeogiotte 40·pega) 로스터 대조, 나머지 430개 호스트 인덱스 일괄 프로브, `omd:add-reference` Phase 2에 Step 0(인덱스 우선) 추가.

## 2026-09-19

- **한 일**: 인덱스 우선 리서치 — 호스트 4곳 조사 후 pega(42개 발행/0개 인용)·krds(55/21) 로스터 기록(`f8d8e03a`·`08e9d85e`). Step 0을 6단계로 정정: `llms.txt`가 Yoast SEO 스텁일 수 있고(pega — 내용 검사를 통과하는데 컴포넌트 0개), 316 URL 사이트맵이 컴포넌트 0개일 수 있으며(kakao), 사이트맵이 닿는 수와 호스트가 발행하는 수가 다를 수 있다(krds 44 vs 55).
- **열린 것**: pega의 3개 측정값이 `tokens.components`에 `type: button`으로 있어 builder가 브랜드 버튼으로 렌더한다. 빼면 증거 클레임 24건이 고아 — §4에 오너 결정으로 남김. 05(GA4 GCP 재생성) 오너 콘솔 작업 대기. krds 채택 미실행.
- **다음**: 나머지 430개 호스트 인덱스 일괄 프로브, krds 채택, 1000개 확충.

## 2026-09-18 (오후)

- **한 일**: **438개 Primary tasks 완료(`b7299cee`)** — 1,907 과업, `missing-primary-task` 438→0, `portable_core` 1→383. 에이전트 72배치가 초안을 쓰고 `verify-primary-tasks.mjs`가 인용·표면·동사를 기계 검증, 통과분만 적용. 실제 결함 거부 0건(거부 3건은 전부 내 검증기 오탐, 둘 다 좁힘). 3개 바닥을 2개로 내림 — hyundaicard가 맞았고 강제했으면 없는 과업을 만들게 했을 것.
- **열린 것**: 남은 사유 `[FILL IN]` 39 · 표면 범위 22. 승인 02~05 미착수(advisory 390 vs 198 · 미커밋 스프린트 · 애널리틱스 복구 · `/design-systems`). krds 채택 미실행.
- **다음**: krds 채택(primary tasks·portable core 준비됨), 인덱스 우선 리서치(kakao 316·krds 81·yeogiotte 40·pega), 1000개 확충.

## 2026-09-18

- **한 일**: **toss 채택 완료(`482fceca`)** — 카탈로그 최초로 Core 패키지에서 서비스된다. 라우트 4개 200, builder 프리뷰가 패키지에서 렌더, 게이트 전체 통과. 가는 길에 컴파일러 provenance 구멍(9-08부터 잠복), 타이포·radius 타입 승격 누락(240·316개 레퍼런스 복구), 파이프라인 리더 4개 + 원장 침묵 실패를 고쳤다. 투영 동등성 검사(`core-projection-parity`)가 내가 손으로 못 본 2건을 잡았다.
- **열린 것**: 승인 02~05 미착수(advisory 390 vs 198 · 미커밋 51건 · 애널리틱스 복구 · `/design-systems` 유지). `inspected`/`captured` 스키마 관례 미확정. `build-web-core-verifier.cjs`가 미추적이라 생성물 재현이 깨끗한 체크아웃에서 불가능하다.
- **다음**: primary_tasks 438건(도구 준비됨), krds 채택, 인덱스 우선 리서치.

