# Astra · Sol 90분 스프린트 인수 결과

사용자가 지정한 작업 시간은 2026-09-08 08:07:51–09:37:51 KST다. Astra가 구현·장면 설계·독립 인수를 맡고 Sol이 Core·벤치 기반·패키지·검증을 맡았다. 최대4슬롯을 사용했고 공유 Chrome 조작은 root가 직렬로 수행했다. 기존 Grok/Opus 예정 작업도 이번에는 GPT가 처리했다.

[실제 화면·영상 검토실](../.omd/execution/2026-09-08/sprint90/REVIEW.md) · [다음 실행 로드맵](OMD_NEXT_ROADMAP_2026-09-08.md)

## 전달한 결과

| 영역 | 이번 결과 | 남은 판단 |
|---|---|---|
| ODDLY / Aphrodite | fluffy 캐릭터, 종이 펼침, 세계 진입, 노트 저장을 갖춘 실제 Three.js 한 페이지. 데스크톱·모바일 actual-wheel MP4와5환경 검사 | 캐릭터·전환 방향의 사용자 채택, 디테일 수정, 다른 업종에서 재현 |
| DESIGN.md Core | claim 영역·수식어 보존, catalog adoption 대상 분리, 근거 없는 서체 추론 방지, Governance 중복 제거.4기업 격리 이관·복구·재채택 및 Builder46검사 | 기업 정본 변경 검토. 현재 정본에 적용하지 않음 |
| 실행·스킬 | controller/broker 복구·종료 회귀, epoch task 격리, 오류/스타일/검토대기 구분. 새RC 설치4채널 통과. 랜딩 지침과 Autopilot intake 수정 | 6칸 생성 품질을 새RC 기준으로 완결해야 출시 가능 |
| 콘텐츠 | 배민 해석/Core 이관 글 ko/en4초안, 공식 출처, 원본 창작 예제와 실행 가능한 입력. 실제 블로그 화면10개 검증 | 게시 검토와 측정 배포, 이후14개 완료일 관찰 |

## 제품 코드에서 고친 핵심

- `scripts/design-md-core.cjs`, `scripts/adopt-design-md-core.cjs`, CLI와 schema: 문서의 task/qualifier/scope를 잘못 옮기거나 reference reconstruction을 자동으로 Proven System으로 승격시키던 경계를 수정했다. 4canary의 실제 격리 adopt → 외부 snapshot rollback → readopt를 검증했다. rollback이 새 내장 명령이라고 주장하지 않는다.
- `web/src/lib/references/`, `web/src/lib/builder/design-md-core-export.ts`: 확인된 형제 값과 서사는 보존하고 미확인 UI서체만 제외한다. 알려진 Noto Serif를 generic serif로 오인해 지우던 문제, Governance 중복, typed token 변환을 수정했다.
- `web/src/app/api/references/[id]/`: Next Route에 노출하면 안 되는 helper export를 별도 모듈로 분리해 실제 production build를 통과시켰다.
- `web/src/components/blog/post-view.tsx`:390px에서 긴 본문·도표가 가로로 넘치던 폭을 수정했다.
- `scripts/design-council-prime.cjs`: task에 명시된 대상 사용자와 완료 범위를 인식하지 못하고 다시 인터뷰하던 문제를 수정했다. 미작성/TBD는 여전히 질문 대상으로 남는다.
- `skills/omd-landing/SKILL.md`, `agents/omd-art-director.md`: 반복 SVG로 에셋 수를 채우는 방식, 컨테이너 면적을 주제 면적으로 간주하는 방식, 일부 검사만 하고 완료로 판정하는 모순을 수정했다.44px 목표를 보편적인 접근성 법칙으로 표현하지 않았다.
- `skills/omd-kr-writer/SKILL.md`, `agents/omd-kr-writer.md`:12개 문체 프리셋과 실제 게시 스키마를 맞췄다. 가상의 저자·의무 CTA·placeholder 개수 채우기를 제거했다.
- 벤치 controller와 `test-v2/tools/quality-gate.mjs`: 실제 프로세스 종료/복구, 저널 실패, 격리 경계를 보강하고 checker 실행 오류·기능 실패·스타일 실패·receipt 불일치를 구분했다. 기존123개 task inventory를 건드리지 않는 epoch 경로와 v0.2 config를 만들고 v0.1 기록을 보존했다.

이는 이번 인수 범위의 요약이다. 이미 존재하던 working-tree 변경 전체를 이번 작업의 신규 성과로 집계하지 않는다.

## 검증 근거

| 검사 | 결과 | 증거 |
|---|---|---|
| CLI 전체 Vitest |1476 PASS /180 skipped,120파일 PASS /20파일 skipped | `sprint90/release/root-vitest-final.log` |
| 웹 전체 Vitest |931 PASS /64파일 | `sprint90/release/web-vitest-final.log` |
| 마지막 API helper 분리 |15 canary PASS, 웹 typecheck PASS, 실제4API PASS | `sprint90/core/production-build-fix/` |
| 격리 Next production build | 컴파일·TypeScript·페이지 수집·정적 생성 PASS | `sprint90/release/production-build-result.json` |
| 실제 RC 설치 | npm 설치 및4채널 강제 재설치 bytes 일치 | `sprint90/release/next-rc/acceptance/` |
| Builder |4기업,46/46검사,24다운로드,Core8개 validate PASS | `sprint90/core/builder-qa/` |
| ODDLY |5환경 PASS,실제 wheel 영상2개,외부 요청/overflow/error0 | `aphrodite/oddly-prototype/qa/final-r6/` 및 `qa/motion-r5/` |
| 콘텐츠 |한·영 글8화면+예제2폭 PASS | `sprint90/content/qa/report.json` |
| Autopilot R3 |8환경/렌더/대비/미션 audit PASS,독립BLOCK0/WARN3 | `sprint90/f4/autopilot-karrot/attempt-r3/` |

표의 경로는 `.omd/execution/2026-09-08/` 아래다. 전체 웹 검사 뒤 API helper만 분리했고, 해당15테스트·typecheck·실제 API와 production build로 추가 확인했다. 격리 Next build는 embeddings 생성 등을 포함하는 전체 npm prebuild 파이프라인이나 배포 검증을 뜻하지 않는다.180개 skipped 검사를 통과로 세지 않았다.

ODDLY 대표 장면의 triangle 수는408,574→24,274로 줄였다. 동일 조건의 해당 장면 pixel 차이는0이었다. JS 제출 시간은 GPU 시간이나 FPS가 아니므로 별도 성능 우월 주장으로 사용하지 않는다. Blender 파일은 만들지 않았고 실제 장면은 Three.js로 구현했다.

## 출시를 막는 것

품질표는 **FAIL3 / UNVERIFIED2 / REVIEW_PENDING1**이다. 이전5칸의 실제 검사와 새로운 Autopilot R3의 실제 검사를 합쳐6칸을 유지했다. 한 번에 동시에 재실행한 결과라고 표시하지 않는다. [행별 증거](../.omd/execution/2026-09-08/sprint90/release/quality-matrix-final.json)에 출처가 있다.

새 Karrot 랜딩은 기능 검사에 통과했지만 raw9FAIL, 독립BLOCK2다. 이를 숨기거나 새 스킬의 성공 사례로 바꾸지 않았다. Autopilot R3는 기술적으로 완성했지만 canonical reuse와 범용 스타일 지침의 충돌, 사용자 시각 채택이 pending이다. completed 되돌리기·저장 버튼 위치는 UX 개선 권고다. 날짜 입력의 미국식 표시는 isolated Chromium 환경의 관찰이고, root의 한국어 Chrome에서는 한국어 placeholder를 확인했다.

범용 지침이 확인된 흰색·단일 서체·기존 token 모델을 강제로 바꾸는 Autopilot 충돌은 [두 파일의 수정 제안과 근거](../.omd/execution/2026-09-08/sprint90/autopilot-source-priority-review/README.md)까지 준비했다. 제안은 apply-check를 통과했으며 소스에는 아직 적용하지 않았다. 다음 RC 단위에서 미러 동기화·새 생성·source-bound 검증을 함께 수행한다. 현재 R3의 오래된 계약을 소급해서 면제하지 않는다.

RC2 SHA는 `0dd7f0945c97b68957ebfd6cbab1ec3d4a8aeec22c633be4cb38e7ddcaac3e93`다. 이후 README의 Cursor 개수27 수정과 생성 llms 문서는 이 tarball에 포함되지 않는다. README 생성 도구의 지원하지 않는 `--help` 호출이 쓰기를 실행한 사실도 acceptance에 기록했다. root가 실제 diff를 검토한 뒤 정당한 파생 문서 갱신으로 유지했다. 기존 변경을 HEAD로 되돌리지 않았다.

## 벤치 모델 준비 상태

Sol CLI 로그인과 실제 파일 작업은1회 성공했다. 요청은 `gpt-5.6-sol`이지만 반환 이벤트에 모델 식별자가 없으므로 실제 반환 모델 귀속은 UNVERIFIED다. 전역 사용자 스킬 접근 흔적과 CLI/catalog schema 불일치도 남아 순정 arm은 BLOCKED다. Native 협업 에이전트가 상속한 컨텍스트를 순정 모델 조건으로 사용하지 않았다.

Grok/Opus 새 호출0회, 정식4조건 비교 셀0개다. 로그인된 브라우저와 local broker 회귀만으로 실제 이미지/영상 생성·다운로드·셀별 인계가 검증되었다고 주장하지 않는다. 다음 admission은 같은 모델4조건, 조건별 자유 에셋 생성, 동등한 도구 접근, 공유 Chrome만 직렬이라는 계약을 유지한다.

## 다음 작업의 순서

1. 사용자에게 ODDLY 실제 영상과 블로그·작업 화면을 보여 시각 방향을 판단받는다. 루틴 실행 승인을 다시 묻지 않는다.
2. Sol은 정확한 다음RC와6칸의 새 생성 기록을 고정하고, Astra/Sol이 서로 다른 칸을 제작·독립 검토한다. 지표를 바꾸어 실패를 지우지 않는다.
3. Core4기업은 정본 변경 diff·정확한 source hash·복구 패키지까지 준비하여 채택 안건으로 전달한다. 그 뒤 다음10개로 확대한다.
4. 순정 CLI admission과 실제 미디어 broker 흐름을 해결한 뒤 calibration4셀 → 평가 기준 동결 → 첫36셀 → 후속12셀을 수행한다.
5. 게시 검토가 끝난4글만 지정 경로로 옮기고, 측정 배포 다음 날부터14개 완료일을 관찰한다.

각 단위의 모델·병렬 관계·예산·완료 조건은 [후속 로드맵](OMD_NEXT_ROADMAP_2026-09-08.md)에 있다. 공개 발행·배포·git commit·기업 정본 채택은 이번 스프린트에서 수행하지 않았다.
