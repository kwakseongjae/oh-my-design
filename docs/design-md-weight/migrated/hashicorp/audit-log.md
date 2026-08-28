# HashiCorp 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/hashicorp/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/hashicorp/DESIGN.md`
검증 sibling: `web/references/hashicorp/.verification.md` — `find web/references/hashicorp -type f`와 `test -f web/references/hashicorp/.verification.md`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 DS 있음(Helios, `https://helios.hashicorp.design`). B2a는 toss 예문을 그대로 요구하지 않음. 완전형은 `derived editorial implementation inference` / `not HashiCorp-authored` / `taken from a separately published UI specification, including the published Helios documentation`.

착수 실측: 본문 완전형 13 / 원장 13. 좁은 쪽은 아니었으나 본문에 인접 한정이 없는 편집 문장이 있어 13이 과소였다.

## 수정 목록 (18건)

### B2a — 인접 한정 신설·범위 확장 (본문 4건)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:9` — Experience / Scope | "This contract covers three public-facing domains…"와 "so this reference does not promote those domains"는 계약 범위에 대한 **편집적 인과**. 같은 단락의 기존 한정은 Helios-not-substitute만 가리킨다. 세 경로 라벨과 Helios 발행 사실은 원본·브랜드 사실. | 기존 완전형에 세 경로를 계약 도메인으로 읽는 것과 미캡처 developer-docs/authenticated-product 비승격을 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:117` — Foundations / Shape | "The only captured 8px radius is not promoted as the card standard"는 승격 거부 **판단**. Spacing `:105` 한정은 리듬이 보편 그리드가 아니라는 읽기만 가리키고 Shape 칸이 아님. | 같은 줄에 완전형 한정 신설. 새 줄 아님. |
| 3 | `DESIGN.md:146` — Typography / Evidence classes | Metro Sans "is not evidence" · "therefore represented as display, not UI" · declared-only DejaVu · Brand Studio/terms 비허가 읽기는 세 번째 부류. Family `:151` 한정은 그 칸의 canonical 읽기만 가리킨다. | 표 직후(원 빈 줄)에 완전형 한정 신설. 줄 수 447 불변. |
| 4 | `DESIGN.md:393` — Layout & Platforms | 리듬·모서리·8px-not-card-standard 재서술은 Spacing/Shape와 같은 재료이나 Layout 칸이라 `:105`·`:117`이 인접이 아님. | 같은 단락 끝에 완전형 한정 신설. 새 줄 아님. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 16, `not HashiCorp-authored` 16, `including the published Helios documentation` 16. `provenance.md`의 같은 절 인용 1회는 색인이지 한정이 아니다.

### E1 — provenance derived 범위 (1건)

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 5 | `provenance.md` Derived-editorial inventory | 착수 원장 13행 = 본문 13. 본문에 한정 3건을 신설하면 원장이 좁아진다(fastcampus형). 행 1은 Scope 비승격을 적지 않음. | 원장 13→**16**. 행 신설 3(Shape `:117` · Evidence classes `:146` · Layout `:393`). 행 1 서술 확장. 헤더 `16 = 16`. |

### E2 / E2a — 로그 목적지·줄 포인터 (13건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 줄은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 6 | YAML identity 행 | `https://www.hashicorp.com` 목적지 `DESIGN.md` 9 — 9행에 그 문자열 없음(Helios URL만). DESIGN 출현 1회는 169 webfont 접두사. fitpet형 허위 2차 목적지. Identity 표 `7–24` — 24는 빈 줄, 마지막 데이터 23. | Bare homepage는 provenance Identity **13**만. DESIGN 9 dest 0. DESIGN 169는 webfont 접두사로 병기. 표 7–23. |
| 7 | YAML `ds` 행 + §1/footer URL 행 | `https://helios.hashicorp.design` provenance `21/83` — 83은 `## Sources` 다음 빈 줄. 실제 21/89/100/181. | 21/89/100/181. DESIGN 9/170 유지. |
| 8 | YAML metadata 행 | 콜론형 `tokens.source: live-extract`를 17/219로 적음 — 17은 표 칸, 정확 문자열은 Proof만. inventory +3 후 Proof 219→**222**, harvested 220→**223**, `ds.type: system` 221→**224**. | 표 17/19/22 · 콜론형 222/223/224. DESIGN 0 유지. |
| 9 | §1/§11 연혁 행 | narrative-not-token `provenance.md` 69/224 — 224는 inventory 삽입 후 Official-history 행이 **227**. 69는 유지. | 69/227. |
| 10 | §1/footer Narrative 행 | Narrative list `177–184` — 177은 목록 중간(Sans announcement), 184는 Omission 다음 빈 줄. 목록은 **175–181**. | 175–181. |
| 11 | §9 행 | Disposition `provenance.md` 188 — 188은 표 구분선. §9 삭제 행은 **190**. | 190. 무식별 표기는 유지. |
| 12 | §13 행 | Disposition `provenance.md` 187 — 187은 표 머리. §13 행은 **189**. | 189. 무식별 표기는 유지. |
| 13 | Footer 행 | Freshness `31–38` — 38은 빈 줄, Conflicts unresolved는 **39**. Tier 1/2 `90–108` — 90은 Sources font-announcement, 108은 Tier 2 제목만. Conflict `160–174` — 160은 빈 줄, 174는 Narrative 제목 다음 빈 줄. | Freshness 31–39 · Tier 1 95–106 · Tier 2 108–111 · Conflict 161–171. |
| 14 | Sibling 절 | Full record `41–57` — 57은 capture pointer 총알, 24px·E2d 닫힘은 58/60. | 41–60. |
| 15 | Deviations / F1 / F2 | 로그가 B2a 13=13, F1 열세 개, inventory 13을 현재 상태로 적음. 본문·원장 16. | F1 16줄(117·146·393 추가, :9 접기) · inventory 16 · F2 `B2a 16=16`. worker-close 13은 이관 시점 측정으로 남기고 auditor 16을 병기. |

Destination SHA `1db2a856…` → `d14ebf0651e3dec8f1fa9cf09340ddc8dd87142770a15c6cdbe3596c6cc0e841` (한정 확장 후). 줄 수 DESIGN 447 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Scope ¶3 2008 / November 2012 / 2013 / April 2024 / February 2025 / IBM — 원본 §11 발행 사실. 같은 단락의 "should not be read as a claim about the captured public UI’s runtime tokens"는 원본 문장.
- Application rules / Avoid — 원본 §7 Do/Don't 귀속. "source's own" 문장은 출처 표시.
- Elevation "They are not merged" / Type roles "two forms are not converted" — A1 값 보존, 브랜드 해석 아님.
- Motion `:131` — B3 다섯 종류(transition properties · animation name · duration · easing · reduced-motion behavior)와 per-component 게이트가 같은 줄에 전문. E2c 유지.
- Principles 네 항목의 About/origin/font-announcement 귀속 — 발행 객체 사실. toss 예문 비적용(v12 전제 주석). Helios 닫힘은 이미 있음.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/hashicorp/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다. 세 번째 부류 중 13곳은 착수 시 인접 완전형이 있었고, Shape 8px·Evidence-class 해상·Layout 재서술은 한정이 없어 그 자리에 붙였고, Scope 계약-도메인/비승격은 기존 한정이 이름을 안 붙여 범위를 닫았다. Scope·Content·Principles 안팎을 같이 보았다.

## 범위 밖 관찰

- **A5a.** 로그가 적는 게이트 `copy-loss` = compared 0 / candidates 155 (0%). `verdict: PASS`는 대조한 바늘이 없어서 잃은 것이 없다는 뜻이지 카피 보존의 증거가 아니다. 발행 카피 손 대조(`Get started`, `Contact us`, `The Infrastructure Cloud`, `beauty works better`, `Workflows, not technologies`, `Multi-cloud and hybrid operations`, `Open source at the core`, `Pragmatic beauty`, HashiCorp Sans, Metro Sans Book, Helios, YAML `use` 6종): DESIGN.md에서 생존. 눈에 띄는 라틴 발행 카피 손실은 없다.
- **B1.** sibling 전용 `Official design-system context only` / `2026-07-13T11:18:27.319Z` / `Infrastructure automation` / `Enterprise-clean` / `834ce97f-61f2-4b12-bf5c-e9fad2544456` / `data-omd-capture="10"` / `rgb(16, 96, 255)` / pricing-tab `24px`: DESIGN 0 / provenance mention. 본문에 sibling 구조 분류("h3다", "섹션 표제다")를 사실로 넣은 문장 없음. 원본 `focus-visible` 0; 이관본 Focus 관측은 `focus-visible` 행에 값을 붙이지 않음.
- **D2a.** 삭제 처분 행(로그 §13 · provenance Omission ledger)은 인원·이름·나이·도시 없이 무식별. 원본 §13도 이름 페르소나가 없다. Primary tasks는 캡처 경로 CTA 일. §13 전기·동기 승격 없음. Omission ledger가 `Vault` / `Waypoint` / `Vagrant`를 생략된 이전 product-color 주장으로 적음 — 페르소나 식별자가 아니라 D2a 대상이 아님.
- **E2d.** provenance `:60`·`:185`는 자기 부재를 단언하지 않고 mention/use를 닫음. 로그 "DESIGN.md 0 for those ledger keys / sibling-only strings"는 DESIGN만 분모로 하고 DESIGN 실측 0(로그 mention은 use가 아님). "세 파일 어디에도 없다"면서 그 행이 항목을 나열하는 단언은 없음.

AUDIT_DONE fixes=18
