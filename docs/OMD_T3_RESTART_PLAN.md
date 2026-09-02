# T3-3 재개 계획 시드 — 재편 실행 모델 (2026-09-01)

> 사용자 지시로 우로보로스 계획 결정화를 시도했으나 SDK 초기화 버퍼 초과(1MB, 기지 이슈)로
> 2회 실패 — 인터뷰→시드 규율을 수동 적용해 작성한 A급 시드다. 실행은 이 문서 승인 상태에서
> 다음 작업 세션에 시작한다. 작성: opus5 오케스트레이터.

## Goal

레인 A 9개 브랜드 × 3 arm × 4 rep = **108칸 전체**를 재편 실행 모델로 완주하고, 2인 패널
채점 → Fable 최종 검수 → **omd 미흡점·타 스킬 강점의 이슈화(성장 루프)** → 공개 승인
게이트까지 닿는다. 산출은 (a) 봉인된 채점 데이터와 레인 A 리포트, (b) skill-feedback 이슈
묶음, (c) X 포스팅용 소재 1건(사용자 선별).

## 재편 실행 모델 (사용자 확정 2026-09-01)

| 역할 | 실행자 | 쿼터 풀 |
|---|---|---|
| arm 실행(84칸 생산)·오케스트레이션 | opus5 지휘, 워커는 grok-4.6(grok build) | grok |
| 문서축 중립 전사 | **opus5** (기존 봉인 유지) | Claude |
| 채점 패널 | **grok-4.6(grok build CLI) + sonnet5(Claude)** — 2인, cursor-agent 폐기, composer-2.5 제외 | grok + Claude |
| 최종 검수·미흡점/강점 도출 | **Fable 5** | Claude |

**하드 가드**: Claude OAuth 주간 사용량 80% 도달 신호(하네스 경고 또는 사용자 `/usage` 확인)
시 Claude 풀 작업 즉시 중지·체크포인트 기록. RAM은 `scripts/agent-budget.sh`가 전 풀 공통
(스왑 여유 <1GB면 동시 2기). grok 풀은 T2 웨이브 45+와 슬롯 교차.

## Phase 0 — 재봉인 (선행 필수, ~1시간)

평가자 명부 변경은 재봉인 사안이다. 2026-08-26·08-29 관례(내용 커밋 → grok 판정 → 핀 커밋,
SHA 자기참조 금지)를 따른다.

1. `run-config.json` evaluators → `[{grok-4.6, via grok-build-cli}, {sonnet5, via claude-agent}]`,
   composer-2.5 제거 사유 기재(사용자 결정 2026-09-01).
2. `scoring-order.json` **재생성** — 명부가 표시순서 salt 입력(8/26 실측). 재생성 불변식
   확인: arm-order 무변경, 시드 20260823 유지.
3. RUBRIC §3.2 재작성(동결 본문 이동이므로 판정 필수):
   - 패널이 2계열(xai·anthropic)로 축소 — §3.2a 독립성 경고 갱신.
   - arm 호스트(xai) = 평가자 grok 계열: **자기계열 집합이 세 arm 전부라 bias_j는 여전히
     arm 간 식별 불가**(상수항은 평가자 절편으로 흡수, 순위에 영향 없음) — 이 논리를 2인
     패널 문안으로 다시 쓴다. sonnet5는 |자기계열|=0으로 N/A.
   - 전사자 opus5·검수자 Fable이 평가자 sonnet5와 동계열(anthropic)인 한계를 §3.2a에 확장 기재.
   - **α(평가자 간 일치)를 2-rater 정의로 재동결** — 기존 3-rater 임계 0.67/0.80/0.67의
     2-rater 대응값을 판정에서 확정.
4. grok 판정(Q: 명부 교체가 레인 A 비교 타당성을 흔드는가 / 파생 자리 전수 / 24칸 재사용
   가부) → 집행 → 핀 커밋, 새 `RUBRIC_FROZEN_SHA`.

**완료 증거**: 핀 커밋 SHA + 판정문 docs/reviews/. 게이트: scoring-order 재생성 불변식.

## Phase 1 — 데이터셋 결정 (판정에 위임, 기본안 명시)

**기본안: 기존 apple·toss 24칸 재사용 + 잔여 84칸 생산.** 근거: 런 계약(arm 호스트
grok-build·브리프 SHA·이미지 채널 Grok Imagine·rep 변형표)은 재봉인에서 **불변**이고, 런
산출물은 평가자와 무관한 아티팩트다. Phase 0 판정이 런 계약 드리프트를 발견하면 108칸 전량
재생산으로 전환(추가 ~$26).

## Phase 2 — 생산 84칸 (grok 풀, 웨이브와 교차, ~2일 벽시계)

- 브랜드 순서: baemin → coupang → karrot → musinsa → naver → wanted → figma
  (figma는 브리프 verify 기반 확인 후).
- 기존 run 프롬프트 템플릿 재사용(브랜드·스냅샷 handle 치환), `run.json`에 model·via 기입.
- 브랜드 완주마다: `lanes.mjs --check` + **`render-integrity.mjs`**(9/1 신설 — figure UA
  마진류 재발 차단) + 스크린샷 아카이브.
- 예산: 84 × ~$1.08 ≈ **$91**. 슬롯은 agent-budget 산정 내에서 웨이브와 교차.
- 체크포인트: 브랜드 단위. 중단 시 `find 03-runs -name render.html` 계수가 재개 지점.

**완료 증거**: 108/108 render.html + run.json via 기입 + render-integrity 전수 PASS.

## Phase 3 — 문서축 중립 전사 (Claude 풀·opus5, ~반나절)

- TRANSCRIPTION.md 봉인 절차: 허용 변환 3종·fail-close·전수 기계 검증(selftest 7/7 하네스).
- 108개 system.md → 전사본. 배치 20칸 단위, 배치 사이 Claude 80% 게이트 확인.

**완료 증거**: 전사 매니페스트(칸별 SHA) + 기계 검증 PASS 로그.

## Phase 4 — 채점 (2패널, ~1일)

- 재생성된 scoring-order의 봉인 순서·표시순서, 온도 0, 시드 20260823.
- 세션 구조는 "(평가자, 레인, 청크)당 1세션"으로 **치환**한다(판정 Q4 — 유지가 아니라 치환이 정확한 기술). **사전 선언된 청킹**(예: 브랜드 3개씩 4청크, 청크 경계는 scoring-order에 기록)을 Phase 0 판정에 포함
  — 실행 중 임의 분할 금지.
- grok-4.6: `grok -p` 헤드리스, 청크당 산출 JSON. sonnet5: Claude Agent(모델 sonnet) 서브
  에이전트, 동일 프롬프트·동일 표시순서. 시각 축은 스크린샷 첨부, 문서 축은 **전사본만**.
- 청크 사이 Claude 80% 게이트.

**완료 증거**: 평가자×칸 채점 JSON 전수 + `verify.json`(§4.2 식·결측 규칙 재현) PASS.

## Phase 5 — 집계·리포트 (기계 + opus5, ~2시간)

- 레인 A 안에서만 순위·통과 판정. 교차 레인·종합 총점 산출 금지(§1).
- 리포트 첫 절에 조건부 명시: grok-4.6 · grok-build 서빙 경로 · 2계열 패널 한계 · 레인 B 부재
  사유(차단 문서 링크).

## Phase 6 — Fable 최종 검수 + 성장 루프 (Claude 풀, ~반나절)

1. Fable이 채점 결과·산출물 표본을 교차 검수: 채점 근거가 산출물 실물과 일치하는가,
   verify.json 결측 처리가 규칙대로인가.
2. **arm별 소견서**: omd의 미흡점(칸·근거 인용), hallmark/uiuxpromax가 잘한 것(차용 후보).
3. 소견서 항목을 `omd:issue`로 등록(skill-feedback + dogfood, 미흡점은 bug/enhancement,
   차용 후보는 enhancement) — 이슈가 성장 루프의 입력이 된다. 처리 자체는 별도
   `omd:issue process` 회차.

**완료 증거**: 소견서 + 등록된 이슈 번호 목록.

## Phase 7 — 공개 승인 게이트 (사람 창구)

- 사용자가 잘 나온 결과 1건 선별 → X 포스팅(Vercel 아티클 연계, omd cli 소개 + "벤치로
  개선점을 잡는다" 서사). 캠페인 문서 `docs/handover/x-vercel-designmd-campaign.md` 연장.
- 봉인 수치 공개 범위는 이 게이트에서 사용자가 확정. 하드 룰 유지: 비공식 명시·레퍼런스
  기업 태그 금지·통계 우위 주장 금지.

## 결정 지점 요약

| 결정 | 기본안 | 대안 트리거 |
|---|---|---|
| 24칸 재사용 | 재사용 | Phase 0 판정이 런 계약 드리프트 발견 시 전량 재생산 |
| 채점 청킹 | 브랜드 3개 × 4청크, 사전 선언 | 판정이 다른 분할 지시 |
| 2-rater α | 판정에서 임계 확정 | — |
| figma 브리프 | verify 기반 그대로 | 스냅샷 결손 발견 시 재캡처 후 진행 |

## 비용·시간 총괄 (추정 표기)

- grok 풀: 생산 $91 + 채점 grok 몫(청크 12 × ~$1~2 추정) ≈ **$100~115**
- Claude 풀: 전사(경량) + sonnet5 채점 12청크 + Fable 검수 — **80% 가드 내 배치 운영**,
  세션당 소모는 첫 청크 실측 후 재추정
- 벽시계: Phase 0 1시간 → 2 ~2일(웨이브 교차) → 3~6 ~2일 → 합 **4~5일**, 전부 체크포인트
  재개 가능
