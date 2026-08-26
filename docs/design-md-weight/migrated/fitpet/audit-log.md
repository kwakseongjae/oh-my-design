# Fitpet (핏펫) — B2a·E2 별도 세션 감사 (F3)

- 감사 범위: `MIGRATION_RULEBOOK.md` **v10** 의 **B2·B2a** 와 **E1·E2·E2a–c** 만. 그 밖의 조항은 고치지 않고 아래 `범위 밖 발견`에만 적었다.
- 대상: `docs/design-md-weight/migrated/fitpet/{DESIGN.md,provenance.md,migration-log.md}`
- 원본: `web/references/fitpet/DESIGN.md` (수정 없음), 자매: `web/references/fitpet/.verification.md` (수정 없음)
- 계수는 전부 `grep -o … | wc -l` (줄 수 아님). 게이트 PASS는 적합성 증거로 인용하지 않는다.

---

## A. 이관 워커가 검토에 올린 항목 — 실측 결과

| 주장 | 실측 | 판정 |
|---|---|---|
| sibling 채택 + 비승격 목록 명시 | provenance `Sibling verification file (E2)` 문단과 `Omission ledger` 마지막 행에 실재 | **실재** (단, 표현이 부정확 → C-2·C-3에서 정정) |
| 비승격 값이 본문 0회 | `#666666` 0 · `rgb(102, 102, 102)` 0 · `rgb(20, 128, 255)` 0 · `94px` 0 · `25px` 0 · `19.2px` 0 | **참** |
| 〃 (`48px`·`12px`) | `48px` 본문 **2회**, `12px` 본문 **3회** | **문자열 단위로는 거짓**. 둘 다 legacy 근거(버튼 높이 `button-primary.height`·터치타깃 / caption 역할·ghost pill·discount badge 폰트 크기)이고 자매 사실(hero H1 높이 · 몰 base font-size)은 아니다 → 사실 단위로는 참. 기재를 사실 단위로 정정했다. |
| §15 커브 3종 삭제 + 역할·duration·reduced-motion 보존 | `cubic-bezier` legacy 3 / DESIGN.md **0** / provenance 4. 역할 3행(`ease-enter`/`ease-exit`/`ease-standard`)·duration 3행(120/200/320ms)·`prefers-reduced-motion: reduce` 문장 모두 본문 실재 | **참** |
| B3 다섯 증거 게이트 전문 | 본문 172행 + 474행 두 자리에 `computed transition properties, animation name, duration, easing, and reduced-motion behavior` + 「that component's own」 게이트 | **참** (E2c 충족) |
| `cubic-bezier(0.4, 0.0, 1, 1)` 이 `spec/omd-v0.1.md:262` 와 바이트 동일 | 값은 **바이트 동일**하나 위치는 **267행**. 262행은 T1-3 재주입 차단 경고문이고 `cubic-bezier` 를 담지 않는다 | **행 번호 거짓** → provenance·migration-log 양쪽 정정 |
| C2(v10) `not-applicable` 6행 전부 역할 사유 | `| not-applicable |` = **6**. ghost-pill CTA 2행·filter chip 2행·corporate nav link 2행. 사유는 각각 "목적지 선택" / "쿼리 토글" / "목적지 선택". `not captured`·`not named` 0회 | **참** (C1·C2 위반 없음) |
| `product-card`/`promo-strip` 이 kind·map 둘 다 생략 + 비상호작용 판정 아님 명시 | 두 레코드에 `Kind:` 없음, applicability 표 없음. "Treat that as an open question, not as a finding that the card is inert." + "Kind and applicability are left open for the same reason as the product card." | **참** (C4) |
| A3 — `transparent` 가 §9 전용(2회, 둘 다 프롬프트 가이드) | legacy 2회 = 324·325행, §9 범위(304–336행) 안. DESIGN.md 2회 = Corporate Ghost Pill CTA · Mall Filter Chip. §9 전용 hex/px/ms/% 토큰은 `transparent` 외 **0개** | **참** |

> 지시서가 참고로 준 오판 형태(“the source carries no X” 의 주어가 sibling이 아니라 원본이다)는 이 파일에서 재현하지 않았다. 위 판정 중 문자열 부재를 다룬 두 건(`48px`·`12px`, `cubic-bezier` 행 번호)은 **주어를 먼저 확인한 뒤** 판정했고, 실제로 하나는 사실 단위로 참, 하나는 행 번호만 거짓이었다.

---

## B. 본문 수정 (B2a 계열) — 4건

1. **Experience → Distinctive traits.** 머리 한정이 `Selecting these seven as the distinctive traits is …` 로 **선택 행위만** 한정하고 있었다. 불릿이 담은 읽기("doing the segmentation work that shadows do elsewhere", "Pill-forward geometry", "Accents used semantically only")는 값이 아니라 편집적 판단인데 한정 밖이었다. 승인 예문 형태(`These N items are …`)로 바꾸고 주어에 항목 안의 읽기를 포함시켰다. **값·불릿·수치 변경 없음.**
2. **Foundations → Spacing.** `for a spacious 100px header` / `for a wide tap target` / `for dense browsing` 는 측정이 아니라 의도 추정인데 한정이 없었고 `the source calls out` 라는 귀속만 있었다(B2a: 귀속만으로는 evidence class 구분이 안 끝난다). 수치를 관측으로 분리(`Those measurements are observed.`)하고 목적 읽기에 완전형 한정을 **인접** 배치했다. 목적 어휘(`tall`·`spacious`·`wide tap target`·`dense browsing`)는 하나도 삭제하지 않고 한정 문장 안으로 옮겼다.
3. **Layout & Platforms.** `**Pill rhythm:** … create a soft, consistent horizontal cadence.` 는 인과·미적 판단인데, 바로 다음 불릿의 한정이 주어를 "editorially calm / dense grid 성격 규정"으로만 좁혀 잡아 이 읽기를 덮지 않았다. 한정 주어에 pill rhythm 읽기를 포함시켰다(불릿 본문은 그대로, 인접성 유지).
4. **Experience → Avoid.** Do 리스트에는 귀속 문장(`Application rules the source states as its Do list, kept as written:`)이 있는데 Avoid에는 없어, 항목 안의 사유절("it dilutes the single-action signal" 등)이 원본 규칙인지 이관자의 발명인지 독자가 구분할 수 없었다. 짝이 되는 귀속 문장 한 줄을 붙였다. **항목 8개·문구 변경 없음.**

수정 후 실측: B2a 완전형 needle 쌍 **13/13** (이관 시점 12 → Spacing 1건 추가). 토큰 손실 0 · 발명 0 (legacy hex/px/ms 55종 대조; `128px`·`28.8px`·`4.8px`·`9.6px` 4종은 이전과 동일하게 provenance 전용).

---

## C. provenance 수정 (E1·E2 계열) — 6건

1. `spec/omd-v0.1.md` **262 → 267**. 커브 값 자체는 바이트 동일하므로 생략 사유는 유지. (E2)
2. `Sibling verification file (E2)` 문단 — "None of those entered …" 를 **사실 단위**로 다시 썼고, 겹치는 숫자(`48px`·`12px`·`24px`)가 본문에 어떤 legacy 근거로 실려 있는지 명시했다. 자매 전용 읽기 5종의 본문 0회도 함께 적었다. (E2)
3. `Omission ledger` 의 sibling-only 행 — 같은 정정. `element heights 94px / 25px / 48px` 처럼 나열하면 문자열 부재 주장으로 읽히므로 각 높이가 어느 요소인지 붙였다. (E2)
4. `Derived editorial inventory` — Distinctive traits 항목을 "the seven-item selection" 에서 항목 안의 읽기까지로 넓혔다. (지시 3: 좁게 적힌 derived 범위도 결함)
5. 〃 — **Foundations → Spacing** 항목 신규 추가(본문 신규 한정 자리와 일치).
6. 〃 — Layout & Platforms 항목에 pill rhythm cadence 읽기를 추가.

---

## D. migration-log 수정 (E2·E2a–c 계열) — 11건

**정정(감사가 찾은 결함):**

7. `spec/omd-v0.1.md` **262 → 267** (§15 Easings 행). (E2)
8. **§4 footer 행 — E2c 위반 정정.** 로그가 Tier 2 두 건의 원문 문구를 "둘 다 그대로" 옮겼다고 적었으나, provenance에 `generic results only` 는 **0회**다. provenance는 legacy 푸터 대신 자매 파일의 더 긴 원문을 싣는다. 실제 disposition대로 다시 썼다.
9. **§15 Motion rules 행 — 미기재 삭제 기록.** 원본 `No bounce or spring — a pet-health brand signals steadiness and care, not playfulness.` 에서 뒤 절이 본문에 없는데 로그가 "전부" 옮겼다고 적고 삭제를 기록하지 않았다. disposition을 `옮김 · 일부 삭제` 로 고치고 사유(값 없는 파생 편집 해석, §11 인과 해석 행과 동일 처분)와 대체 근거 자리를 적었다. (E2)
10. **§12 행 — 계수 방법 정정.** `grep -c '^[0-9]\. \*\*'` 는 줄 수다. `grep -o … | wc -l` 로 바꾸고 무엇을 셌는지 병기했다(결과 5는 동일).
11. **자매 파일 행 — 사실 단위로 정정** + 감사 실측치(0회 5종 / `48px` 2회 · `12px` 3회의 legacy 근거) 기재.
12. **§7 Don't 행** — 감사가 붙인 Avoid 귀속 문장을 disposition에 기록.

**F2 재대조 갱신(본문 수정으로 낡은 기재 — 지시 5):**

13. §1 Key Characteristics 행 — 한정 범위 확대 기록.
14. §5 Spacing System 행 — 신규 한정 자리 기록.
15. §5 Grid & Container 행 — 한정 범위 확대 기록.
16. F1 문단 — 한정 자리 **12 → 13**, 목록에 `Foundations Spacing` 추가, Distinctive traits·Layout 설명 갱신.
17. F2 문단 — B2a 완전형 **12 → 13**.
18–21. F2 문단 A5 needle 4건 실측 정정: `회사 소개` 2/1/1 → **2/2/1**, `팀 문화` 2/1/0 → **2/2/0**, `TECH BLOG` 1/1/0 → **1/2/0**, `FAQ` 1/1/0 → **1/2/0**. 네 건 모두 Corporate Nav Link `Role` 줄과 Content & Locales 첫 문단 두 자리에 실재하며, **손실이 아니라 과소 계수**였다. 갱신 후 26개 needle 전수 재대조 일치.

---

## E. 범위 밖 발견 (고치지 않음, 보고만)

- **A 계열 — 원본 서술어 3종이 세 파일 어디에도 없다.** `violet-blue`(§4 Navigation의 `#1482ff` active 서술, legacy 1 / D 0 / P 0), `de-facto Korean product font`(§1 Pretendard 서술), `Korea's`(§1 첫 문장 → 이관본은 `a Korean`). 값(hex·폰트명)은 전부 보존돼 있고 `Korea's → a Korean` 은 근거 없는 정관사 주장을 약화시킨 쪽이라 개선으로 보이지만, 세 건 모두 migration-log에 disposition이 없다. B2a·E2 범위 밖이라 손대지 않았다.
- **E1 확인** — `node test-v2/tools/process-leak-check.mjs`: fitpet은 leaking 목록에 없음(이관 내부 어휘 0). 감사 수정 후에도 동일.
- **게이트** — `--gate-only` 는 감사 전후 모두 PASS이며, 위 21건 중 게이트가 잡은 것은 **0건**이다. 적합성 증거로 인용하지 않는다(E3 취지). 게이트 오탐도 없었으므로 표기를 왜곡한 자리도 없다.
- **D1a** — `Named gaps` 명사구 목록은 이관본에 없고 migration-log가 그 부작성을 별도 절로 기록하고 있다. 별도 조치 불필요.

AUDIT_DONE fitpet fixes=21
