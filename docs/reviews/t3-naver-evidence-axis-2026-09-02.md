# T3-3 판정 요청 — naver 근거 추종 축(§4.2)의 스냅샷 결손 처리 · 2026-09-02

- 요청: 오케스트레이터(Fable 5.1) · 판정자: grok-4.6 (grok build, 읽기 전용) · 관례: 판정 → 집행 → 핀

## 사실

1. naver 첫 캡처(desktop-1440·mobile-390)에는 대표 이미지가 없다 — `RUBRIC.md` §4.1 잠금표 naver `H1 없음`, 정본 판정
   `docs/reviews/rubric-2026-08-23-capture-conflicts.md` C-NAVER-H1 REVISE ("`H1` 관련 결함은 이 브랜드에 적용하지 않는다").
2. 그 결과 `test-v2/tools/verify.mjs`(§4.2 수치부)는 naver 스냅샷에서 **eligible 수치 필드 0개**를 낸다
   (`captures/lane-a/naver/*/rep-*/verify.json`: `usable:false`, `eligibleCount:0`, baselines/naver.json `n:0`).
3. §4.2 원문: "eligible 수치 필드가 2개 미만이면 그 스냅샷은 비교 입력 불충분으로 보고 세 arm의 해당 block을 실행 전에 교체한다."
   그러나 naver block 12칸은 이미 생산·캡처됐고(브랜드 순서상 실행 전 교체 판단이 누락됨), 교체할 "다른 naver 스냅샷"도 없다 —
   대표 이미지 부재는 캡처 한계가 아니라 브랜드의 성질이라는 것이 C-NAVER-H1의 결론이다.
4. §4.5 재정규화는 현재 식별력 `N/A-ceiling`만 정의한다. §7 결측: "대표 이미지가 없으면 근거 추종·식별력은 0점"은 **arm 산출물**이
   이미지를 안 냈을 때의 규칙이지 스냅샷 결손 규칙이 아니다.
5. 집계기(`aggregate-lane-a.mjs`)는 판정 전까지 naver 근거 축을 미채점(total null)으로 둔다 — 0점으로 세면 스냅샷 결손을 세 arm에
   전가하는 것이라 판단.

## 질문

- **Q1.** naver의 근거 추종 축을 (a) `N/A-evidence`로 두고 §4.5식 재정규화(A_b = 결함·식별력·문서 세 축, 가중 20/25/15) 적용,
  (b) 수치부 70%만 N/A로 두고 모델 의미 판정 30%를 100%로 승격(§4.2 후반의 "비수치 관계는 모델 평정이 승자"에 기대어),
  (c) 세 arm 모두 0점, 중 어느 것이 §1·§4·§7의 정신과 일치하는가? 각 안의 부작용을 한 줄씩.
- **Q2.** 선택한 안이 §4.5의 PASS 입력(`M_{a,근거}` 분모 |B_k|)에 naver를 넣는가 빼는가?
- **Q3.** 이 처리는 청크 3 채점 **전**에 봉인돼야 하는가(평가자 프롬프트에 영향), 아니면 집계 규칙만 바뀌므로 채점과 무관한가?
  (평가자는 §4.2 의미 판정 30%를 스냅샷 대조로 내며, naver 스냅샷 자체는 존재한다.)
- **Q4.** RUBRIC 본문에 넣을 한 문단(§4.5 또는 §7 결측 절)을 제안하라 — 동결 본문 개정이므로 판정에서 문안을 확정한다.

답은 Q1–Q4 각각 근거와 함께, 마지막 줄에 `VERDICT_DONE q1=<a|b|c> q2=<in|out> q3=<before|independent> q4=<text-ok>`.
실물 인용만: `test-v2/90-comparison/RUBRIC.md` §4.2·§4.5·§7, `docs/reviews/rubric-2026-08-23-capture-conflicts.md`, `captures/lane-a/naver/omd/rep-1/verify.json`, `test-v2/tools/aggregate-lane-a.mjs`. 파일을 수정하지 마라.

---

## 판정 (grok-4.6)

(아래에 판정 원문을 붙인다)
