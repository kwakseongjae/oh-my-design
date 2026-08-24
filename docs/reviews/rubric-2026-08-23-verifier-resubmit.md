# 재확인 심사 — 검증기 4항 · 채점 입력 2항

대상: `test-v2/tools/transcribe-verify.mjs`, `TRANSCRIPTION.md` §7.1·§7.2, `run-config.json` transcriber.machineVerifier, `RUBRIC.md` §4.1·§4.3
대조: `docs/reviews/rubric-2026-08-23-two-item-confirm.md`, `docs/reviews/rubric-2026-08-23-capture-conflicts.md`
일시: 2026-08-23 · 승인권자 grok-4.6

**판정: REVISE**

파일 SHA-256 `3ef16e32b5bd1877964441a6b540e5c3b7ad31903a05ca027c63eaba5d575651` — `run-config.json`과 `TRANSCRIPTION.md` §7.1과 일치. `--selftest` 5/5.

`RUBRIC_FROZEN_SHA`는 쓰지 않는다. T3-3을 열지 않는다. 모델 전사를 실행하지 않는다.

---

## 받은 것

1. 지정 입력 `## 3. Typography` → `Heading: Typography`는 `PASS`. `TRANSFORM_VOCABULARY`에 `heading`. 비교 전에 `headingNormalise()`를 원문에 적용.
2. `sequenceDiff()` LCS. `#111111`/`#222222` 재배열은 `TRANSCRIPTION_BLOCKED`.
3. 경로에 없는 `8px` 손실은 선언 1건으로 면제되지 않고 `TRANSCRIPTION_BLOCKED`. 코드 판정은 `PASS` / `TRANSCRIPTION_BLOCKED` 둘. CLI는 `PASS`일 때만 exit 0.
4. §7.2 `WAIVED`. 초판 5항목을 기계 갈음 / 미검증으로 나눔. 미검증 2항(부정·조건·범위 등, 대명사·지시어)을 리포트 한계에 적고, 기계 통과를 의미 보존 확인으로 쓰지 않는다고 본문에 있음. `run-config.json` `semanticVerifier`도 같음.
5. §4.3 표: musinsa 16 / karrot 11 / naver 7 / toss 5 / figma 4 = ✅, apple·baemin·coupang·wanted 0 = ❌(사유 있음). `C_b` 4개가 `ceiling/manifest.json` `usedForCb` 및 `built[]` 앞 4개와 같음. `d*`/`m*` 접두, 식별 결과 없이 build 앞 4개, 피그마 펜툴·토스 m3/m5/m7 제외, 제3자 마크 허용, 「브랜드의 성질」은 네 브랜드에만 — 표·그 아래 문단에 있음.
6. §4.1 naver: 서피스 분리, 모바일 10장 전부 `docY ≥ 1512`(증거 min 1512, 첫 캡처 390×844), 두 첫 캡처 H1 없음, 면제 유지, 「문서 표본 수는 첫 렌더의 답이 아니다」.

---

## 남은 것

1. **`TRANSCRIPTION.md` §7.1이 아직 판정 3종.** 263–266행이 `PASS` / `REVIEW_DECLARED_DELETIONS` / `TRANSCRIPTION_BLOCKED`를 현행으로 적는다. 코드와 §7.2는 둘이다. 봉인 절차가 자기와 충돌한다.
2. **7.1.7이 토큰 값이 선언 구간에 한 번이라도 있으면 그 값의 모든 손실을 면제한다.** 실측: 원문 `see /theme/8px.md then gap 8px here.`에서 경로만 `PATH_DELETE`하고 본문 `8px`도 지우면 `PASS`. 자체 테스트 3번은 경로에 `8px`가 없어 이 구멍을 못 본다. §7.1.7의 「해당 span」이 아니다.
3. **`headingNormalise()`가 펜스 안 제목까지 바꾼다.** 실측: 원문·전사본이 둘 다 `` ```md\n## 3. Typography\n``` ``이면 `TRANSCRIPTION_BLOCKED`(7.1.5가 번호 `3`을 전사본 추가로, 7.1.6이 펜스 바이트 불일치로). §7.1.6은 펜스를 바이트 비교하라고 한다. 문서 제목만 정규화해야 한다.
4. **§4.3 506행이 식별력 채점을 여전히 karrot·musinsa만으로 둔다.** 표의 figma·naver·toss ✅를 실행에서 무효화한다. 510–513행 옛 「이 결손은 … 브랜드의 성질이다」 문단이 그 2개 제한을 다시 정당화한다. 501행 제한 문장과 충돌한다.
5. **§4.1 naver 「미디어 83개 중 0」은 증거가 아니다.** `00-evidence/naver/evidence.json` desktop-1440 `found: 71`, `sizeOk: 0`. 83은 musinsa desktop `found`다. 서피스 분할 자체는 맞다.

1–3이 닫히기 전에 모델 전사를 실행하지 않는다. 4–5가 닫히기 전에 SHA를 쓰지 않는다.
