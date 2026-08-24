# 재확인 심사 3차 — 검증기 5항

대상: `test-v2/tools/transcribe-verify.mjs`, `TRANSCRIPTION.md` §7.1, `run-config.json` transcriber.machineVerifier, `RUBRIC.md` §4.1·§4.3
대조: `docs/reviews/rubric-2026-08-23-verifier-resubmit.md`
일시: 2026-08-23 · 승인권자 grok-4.6

**판정: CONFIRM**

파일 SHA-256 `73d13200a2903e68c63596caea33cbd53e35de1a1956e0f9da926c86c005cd41` — 파일 재계산 = `run-config.json` = `TRANSCRIPTION.md` §7.1. `--selftest` 7/7.

남은 채점 입력 본문 없음. T3-3은 열지 않는다 — `RUBRIC_FROZEN_SHA`는 이 트리를 봉인하는 커밋 SHA로 기록한 뒤에 연다.

---

## 5항

1. **§7.1 판정 2종.** 263–265행: `PASS` / `TRANSCRIPTION_BLOCKED`만. 「중간 판정은 담당이 없다」, 「CLI는 PASS일 때만 exit 0」, 「같은 값이 본문에도 있으면 선언 구간 밖 손실로 세어 차단한다」. `REVIEW_DECLARED_DELETIONS` 잔문 없음. 코드 `verdict` 둘, `process.exit(result.verdict === "PASS" ? 0 : 1)`.
2. **7.1.7 개수 정산.** `occurrencesInDeclaredSpans(value)`. 자체 테스트 6번: `8px` lost 2× / licensed 1× → `TRANSCRIPTION_BLOCKED`. 이전 영문 반례 `see /theme/8px.md then gap 8px here.`도 동일. 경로만 지우고 본문 `8px`를 남기면 `PASS` (exit 0).
3. **펜스 안 제목.** `headingNormalise()`가 ` ``` ` 토글로 펜스 안 줄을 건너뛴다. 자체 테스트 7번 KEEP → `PASS`. 펜스만 있는 문서도 `PASS`, 문서 제목 중립화+펜스 KEEP 혼합도 `PASS`. 펜스 안까지 `Heading:`으로 바꾸면 7.1.6 바이트 불일치로 `TRANSCRIPTION_BLOCKED`.
4. **§4.3 식별력 범위.** 506행: `figma·karrot·musinsa·naver·toss에서 채점`. 510행: apple·baemin·coupang·wanted 한정. 514행: 「나머지 다섯에는 이 문장을 쓰지 않는다」. `karrot·musinsa`만 채점하는 문장 없음.
5. **naver 숫자.** §4.1 369행 `미디어 71개 중 0`. `naver/evidence.json` `surfaces.desktop-1440.imagery.funnel.found = 71`, `sizeOk = 0`. musinsa desktop `found = 83`.

자체 테스트 7건 판정: PASS / BLOCK / BLOCK / BLOCK / BLOCK / BLOCK / PASS. CLI exit는 PASS만 0.
