# T2-1 웨이브 7 최종 확인 — sol

- 대상: `docs/design-md-weight/migrated/{591,91app,accupass,acer}/`
- 선행 재확인: `docs/reviews/t2-1-wave7-2026-08-24-sol-recheck.md`의 잔여 조건 13건
- 판정 경계: 위 기존 잔여 조건의 반영 여부만 대조했다. 새 기준을 추가하지 않았고 새 F3를 요구하지 않았다. 91app의 최초 F3는 기존 잔여 조건 2건의 이행으로만 판정했으며, acer의 최초 F3도 같은 선행 목록에 있던 조건으로만 판정했다.
- 확인일: 2026-08-24 · 검증자: sol

## 건별 판정

### 591 — PASS (1/1)

1. **PASS — Named-gaps 목적지와 기존 C2 F2 동기화.** YAML identity row는 Google favicon의 현재 목적지를 provenance Identity + portable Assets로 한정하고, Named gaps의 first-party-mark 목적지 주장을 명시적으로 supersede했다(`migration-log.md:13`). 기존 F2도 Search CTA / Secondary / search-input의 loading·error·success를 단일 `not-applicable` 집합으로 기록한 문장을 supersede했으며(`migration-log.md:38`), 후발 요약·F2의 대체 주장도 정리됐다(`migration-log.md:49–50,57`). 현재 ledger-sync 원장과 제한된 F2는 Named gaps 부재 및 역할별 C2 disposition을 본문과 일치시킨다(`migration-log.md:59–80`; `DESIGN.md:258–287,311,335–388,626–642`).

**591 최종 판정: PASS.**

### 91app — PASS (2/2)

1. **PASS — 선행 조건의 최초 F3 1회 완료.** 새 `audit-log.md`는 fresh-session non-worker 감사와 적용 범위를 기록하고(`audit-log.md:1–7`), 발견·수정 내역 뒤 `AUDIT_DONE fixes=20`으로 닫힌다(`audit-log.md:50–82`). 기존 F3-pending 기록은 supersede됐고 현재 원장이 완료 상태를 기록한다(`migration-log.md:54–65`).
2. **PASS — F3 후 검사·SHA 충족.** 현재 파일에서 `--gate-only`는 exit 0 / PASS / problems `[]`, Core `--check --require-portable-core`는 exit 0 / `portable_core: true`다. SHA-256 `12ed83ffce7c88e02cb8e7706088edabc5921a046a3b21bedcb24456b02ffe25`는 audit와 현재 원장에 기록된 post-F3 값과 일치한다(`audit-log.md:80`; `migration-log.md:55,63–65`).

**91app 최종 판정: PASS.**

### accupass — PASS (4/4)

1. **PASS — Footer Link F2 동기화.** `#f5faff` / 14px tuple과 Type-scale unmerged reading이 본문에 유지되고(`DESIGN.md:195,201`), 기존 목적지 집합과 ledger-sync F2가 Type roles Footer Link를 포함하도록 교정됐다(`migration-log.md:62,106,119`).
2. **PASS — Distinctive B2a audit/F1 동기화.** 본문 list-head qualifier와 provenance/current F1은 여섯 reading 전체를 같은 범위로 기록한다(`DESIGN.md:32`; `provenance.md:146`; `migration-log.md:42,107,115`). audit의 종전 좁은 분류는 명시적으로 supersede되고 현재 여섯 reading으로 교체됐다(`audit-log.md:63,69,96–100`).
3. **PASS — restored kind의 provenance/audit 동기화.** Event Card·Keyword Chip·Inline Action Link·Organizer Link는 interactive, Category Tag Blue/Pink는 non-interactive로 본문·provenance·audit가 일치한다(`DESIGN.md:394,409,425,452,470,480`; `provenance.md:131,146`; `audit-log.md:96–102`; `migration-log.md:108,122–123`). 종전 omit-kind 기록은 current가 아님을 명시했다.
4. **PASS — §2·favicon·F2 source-row 동기화.** §2 row는 Distinctive·Components·Footer Link 목적지를 포함하고 존재하지 않는 Named-gaps 목적지를 제거했다(`migration-log.md:18,109–121`). favicon literal은 provenance identity에만, URL-free boundary는 portable Assets에만 남으며 Named gaps에는 first-party-mark 문장이 없다(`provenance.md:15,23,137`; `DESIGN.md:203–207,566–578`). 현재 `--gate-only`와 Core 검사도 각각 PASS/problems `[]`, exit 0/`portable_core: true`다.

**accupass 최종 판정: PASS.**

### acer — FAIL (4/6)

1. **PASS — §11 관계의 F2 목적지 동기화.** 관계/B2a는 Scope와 provenance derived inventory에 남고(`DESIGN.md:11`; `provenance.md:144`), 현재 F2는 두 목적지를 함께 기록하면서 종전 Narrative-only mapping을 supersede했다(`migration-log.md:70,104,116`).
2. **PASS — stale invented-evidence 원장 제거.** 현재 Assets에는 favicon boundary와 `acer-icons`만 남고, Content는 illustrative/not-product-microcopy/no-additional-synthetic-voice 경계로 정리됐다(`DESIGN.md:156–160,313`). provenance의 stale imagery·microcopy-guide inventory는 supersede됐으며(`provenance.md:172`), F1/sidecar correction도 같은 삭제를 기록한다(`migration-log.md:43,105,112,118`).
3. **PASS — 네 B2a 위치의 F1/derived inventory 동기화.** Audience·Shape·native-select·Layout의 현재 본문과 derived inventory가 대응하고(`DESIGN.md:30,102,192,293`; `provenance.md:146–149`), 기존 F1 line map은 supersede됐다(`migration-log.md:43,106,112`).
4. **PASS — green hex 포함 목적지 동기화.** `#80c343`와 `#40810c`의 provenance derived-inventory 목적지가 현재 F2에 포함되고 종전 누락 집합은 supersede됐다(`provenance.md:145`; `migration-log.md:47,56,70,107,117`).
5. **FAIL — 선행 조건의 최초 F3 1회가 여전히 미실행.** `audit-log.md`가 없고 ledger-sync 원장은 이 개정이 F3를 실행하지 않았으며 fresh separate session의 F3가 pending이라고 명시한다(`migration-log.md:100,120`).
6. **FAIL — F3 후 검사·SHA 조건 미충족.** 현재 `--gate-only`는 PASS/problems `[]`, Core는 exit 0/`portable_core: true`, SHA-256은 `7ebdf2c88555d5723f74288fcb338f2a72d350e3042d9fe1475a65a0bdfa1f17`이지만, F3가 아직 없으므로 이 결과는 선행 조건이 요구한 post-F3 검사·SHA가 아니다(`migration-log.md:100,120`).

**acer 최종 판정: FAIL.**

## 전체

**전체: FAIL — 591 PASS / 91app PASS / accupass PASS / acer FAIL (남은 재제출 조건 11/13).**
