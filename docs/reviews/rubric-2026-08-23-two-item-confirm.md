# 최종 확인 심사 — C-TRANSCRIBER 5조건 · C2 잔여 3항

대상: `TRANSCRIPTION.md` §5·§7.1, `run-config.json` transcriber, `test-v2/tools/transcribe-verify.mjs`; `RUBRIC.md` §3.2
대조: `docs/reviews/rubric-2026-08-23-c-transcriber-resubmit.md`, `docs/reviews/rubric-2026-08-23-c2-refine.md`
일시: 2026-08-23 · 승인권자 grok-4.6

---

## 1. C-TRANSCRIBER — **REVISE**

문서 조건 5항은 본문에 있다. 검증기가 §2.1·§7.1을 깨므로 경로는 아직 안 연다.

**받은 것**

- §5: 전사자 `opus5` / `anthropic`, 계열 독립 면책, 평가자 2종 BLOCK.
- §5.1 격리 6항. §5.2 `WAIVED`. §5.3 리포트 문장 = 재심 원문과 공백 정규화 후 동일 (`run-config.json`도 동일).
- §7.1 경로 `test-v2/tools/transcribe-verify.mjs`, SHA `8abfdb85628f577b2627331a7132b8ca900bb03a2f05391f0919b8e81bd90e67` (파일과 일치). 실행자 ≠ 전사자. 판정 3종. 「선언된 삭제가 정당했는지는 판정하지 않는다」.
- `run-config.json` transcriber 블록. `--selftest` 3/3.

**남은 것**

1. 허용 변환 `Heading: <내용어>`가 7.1.9 발명 단어로 BLOCKED. 제목 번호 삭제(`## 3. Typography`의 `3`)는 §2.1이 시키는데 7.1.5가 내용 손실로 차단. 정상 전사가 통과 못 한다. 실측: 그 입력이 `TRANSCRIPTION_BLOCKED`.
2. 7.1.5·6이 「순서대로」가 아니라 가방 비교. `#111`/`#222` 재배열이 `PASS`.
3. 7.1.7이 선언 span 포함을 안 본다. 삭제 선언이 하나면 다른 토큰 손실(`8px`)을 `REVIEW_DECLARED_DELETIONS`로 보내고 CLI exit 0. §5.2가 의미 검증을 WAIVED라 이 판정의 담당이 없다.
4. §7.2가 사람 의미 검증을 현행 절차로 남겨 §5.2와 충돌한다.

자체 테스트 3건은 표지 삭제·arm/수치 잔존·봉인 부재만 본다. `Heading:` 변환과 순서 비교를 안 넣었다.

모델 전사를 실행하지 않는다.

---

## 2. C2 잔여 3항 — **CONFIRM**

`RUBRIC.md` §3.2에 세 항이 있다.

- 레인 B 행: 「공선 — 처치 대비이지 자기선호 테스트가 아니다」. 위 칸 표와 같은 이유. 값은 부록, `SELF_PREFERENCE`로 읽지 않음. 시각 축 섞인 총점 단독 우승 폐쇄는 CI와 무관.
- 조인 절차 4보: `{호스트, 이미지}` → 채점 입력 불가 성분 제외 → 세 arm 상수 제외 → own/other, `|own| ∈ {0,3}` → N/A. 상수 제외의 직접 이유 = 분류기 항등참 (소거 아님).
- 이미지 계열은 생성 이미지가 채점 입력인 축만: 모델 식별력, 근거 추종 의미 30%, 첫 렌더 `HERO`만. 내비 잘림·겹침은 이미지 생성기 결함이 아님. 문서 축 N/A·측정 불가. 3평가자 표 grok N/A / own=omd 공선 / N/A, sol·sonnet5 전칸 N/A.

선행 6항 중 gpt-image-2 삭제와 C1 호스트 `grok-4.6` 봉인도 본문에 있다.

---

## `RUBRIC_FROZEN_SHA`

쓰지 않는다. T3-3을 열지 않는다.

이 심사 때문에: C-TRANSCRIBER 검증기 4항.

이 심사 밖이지만 채점 입력이라 SHA 전에 같이 막히는 것: §4.3 천장 표가 아직 「9개 중 2개」(C-CEILING REVISE 미본문화), §4.1 naver 인용이 아직 `imagery.sampled = 0` (C-NAVER-H1 인용 정정 미본문화).
