# kakaogames 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/kakaogames/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/kakaogames/DESIGN.md`
검증 sibling: `web/references/kakaogames/.verification.md` — `find web/references/kakaogames/.verification.md`와 `test -f`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Kakao Games-authored or a separately published UI specification`을 요구한다. 기존 22건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 22 / 원장 22. 숫자는 맞았으나 Motion `:109`의 생략·비승격·다섯 종류 게이트는 세 번째 부류이고 인접 한정이 없다. Audience·Shape·Type roles·Assets·Layout의 기존 한정은 같은 절의 다른 읽기를 이름하지 않는다. 22는 과소였다(fastcampus형 좁은 쪽).

## 수정 목록 (17건)

### B2a — 인접 한정 (본문 6건, 발생 수 +1)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:109` — Motion | "so its motion behavior is omitted. No motion token is promoted"와 `:111` 다섯 종류 게이트는 세 번째 부류. Elevation `:105`는 flat-only만 이름한다. | 같은 행에 완전형 신설. 발생 수 +1. 줄 수 불변. |
| 2 | `DESIGN.md:27` — Audience | 전기 삭제는 세 번째 부류. 기존 한정은 그룹을 audience로 읽는 것만 이름한다. | 기존 한정에 biography-drop을 이름함. |
| 3 | `DESIGN.md:101` — Shape | "not promoted into a news-item component"는 세 번째 부류. 기존 한정은 local-not-scale만 이름한다. | 기존 한정에 news-item 비승격을 이름함. |
| 4 | `DESIGN.md:136` — Type roles | A1a unitless-ratio-not-px는 세 번째 부류. 기존 한정은 역할 비병합만 이름한다. | 기존 한정에 unitless-ratio keep을 이름함. |
| 5 | `DESIGN.md:148` — Assets | "Font-asset license, not a Kakao Games brand asset"는 세 번째 부류. 기존 한정은 first bullet favicon만 이름한다. | 기존 한정을 favicon + SUIT-license-not-brand-asset으로 확장. |
| 6 | `DESIGN.md:210` — Layout | `:208` "rather than an application shell"은 세 번째 부류. 기존 한정은 1440px capture-width만 이름한다. | 기존 한정에 application-shell 읽기를 이름함. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 23, `not Kakao Games-authored` 23, `separately published UI specification` 23. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 27, 31, 42, 51, 60, 74, 90, 101, 105, 109, 119, 132, 136, 148, 164, 210, 215, 223, 257.

### E1 — provenance derived 범위 (2건)

좁은 쪽 FAIL(fastcampus형). 본문 신설을 행으로 안 세면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 7 | `provenance.md` 헤더 | `22` complete / `22` data rows. | `23` / `23`. |
| 8 | inventory | 본문 `:109` Motion 한정이 원장에 없음. Audience·Shape·Type roles·Assets·Layout 행은 본문보다 좁았다. | 행 23 Motion 신설. 다섯 행의 Qualified material을 본문 한정에 맞춤. |

헤더 `22` → `23` / 데이터 행 **23** at 181–203 (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (9건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 줄은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 9 | YAML identity 행 | `#000000` DESIGN 34/76/186 (dest 4 including Scope ¶2). Scope ¶2 `:11`에 hex 없음. dest **4** at 34/74/76/186. | 34/74/76/186. |
| 10 | §3 Typography 행 | `224` dest **1** at 36/123. `grep -oF` dest **2**. | dest 2. |
| 11 | §7 Don'ts 행 | 62–65, four items. 본문 불릿은 62–66(Don't 4 + §9 고유 제약 1). | 62–66. |
| 12 | §5 Layout 행 | 208만. application-shell 읽기의 한정 210이 없음. | 210 병기. |
| 13 | §15 Motion 행 | 109–111 값만. 신설 109 한정이 없음. | 109 한정 병기. |
| 14 | Deviations | B2a 22=22. `wc -w` 3584. | 23=23. `wc -w` **3707**. |
| 15 | F1 | inventory 22. Layout 208을 미한정 원본 사실로 남김. | 23. 208은 210이 이름함. |
| 16 | F2 | `#000000` 줄 누락. D2a·E2d 준수를 본문보다 강하게 적음. | 34/74/76/186 · `224` dest 2. 그 준수 문장 삭제(E2c). |
| 17 | SHA | worker-close `307d8d54…`만. | auditor-close `03f763da814067444e08c69ce8385dc37560fc0b2e0538446c7d2a42a185ecbd`. |

Destination SHA `307d8d54…` → `03f763da814067444e08c69ce8385dc37560fc0b2e0538446c7d2a42a185ecbd` (한정 신설 후). 줄 수 DESIGN `wc -l` **265** 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 네 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(발행 1차 UI 사양 없음, v12 전제 주석).
- Audience — 원본 §11이 독립 기록한 그룹(`global users` / `publishing, development studios, and partnerships`). 페르소나 이름·동기·소속 분류를 재구성하지 않음. 한정 유지·확장.
- Semantic `:80` `#0000ee` 비승격 — 원본 §2 문장. `:74`가 그 거부를 이름함.
- Capture `:160`·`:162` — 원본 §14·§4 본문. `:164`가 applicability·state map·kind-omission을 이름함.
- B3 준수 주장 — `DESIGN.md` 111이 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트를 전문으로 담음 (E2c 유지).
- 2차 목적지 전수: inspected homepage DESIGN dest 2 at 9/21 · About dest 2 at 9/22 · SUIT license dest 2 at 9/151 · favicon slug dest 1 at 150 · `#000000` dest 4 · `#ffffff` dest 3 · `#898989` dest 3 · `Uniting the World Through Games` dest 2 at 13/215 · closing sentence dest 1 at 13 · `248px × 437px` dest 5 · `60px × 60px` dest 3 · `in-game navigation` dest 1 at 66 · `combat HUDs` dest 1 at 66 — 각 DESIGN dest ≥ 1 (fitpet형 0회 없음). `https://www.kakaogames.com/` DESIGN dest 0은 로그가 provenance-only로 밝힘.
- A1 키 경로: 원본 `tokens.components` 2레코드의 type/radius/padding/use와 type/fg/radius/padding/height/states/use가 대응 블록에 행으로 있음. `home-game-card` YAML에 fg 없음(Text 행 불필요). icook형 필드 소실 없음. 값 복원 없음.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/kakaogames/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — 카카오게임즈, 2016 Korea founding, Europe / Japan offices, publishing·development studios·partnerships, “Uniting the World Through Games”, Challenge through new experiences / Connection across players and regions / Expansion across genres and platforms / Joyful creation, SUIT SIL OFL 1.1, YAML use 바이트, §7 Do/Don't, §12 네 원칙의 회사 귀속 문장.
- **관측 기술** — `#000000` / `#ffffff` / `#898989` / `#0000ee` · SUIT Variable 224 · unitless `1.2`/`1`/`1.4` · `50`/`34`/`14` · `tokens.spacing.card-bottom: 40` · `tokens.rounded.none: 0` / `news-item: 4` · `box-shadow: none` · `248px × 437px` · `60px × 60px` · `Primitive type` card/button · token-set keys · 19 variants / zero interaction snapshots.
- **편집적 해석·인과 판단** — 세 검사 경로를 계약 토큰 표면으로 읽기, SUIT license≠토큰, 값의 표면 귀속, 웹셸≠인게임, high-contrast editorial shell, 서사≠토큰, 과제 선정, 청중 그룹 읽기·전기 삭제, 특성 묶기, 원칙·Do/Don't, 역할 이름·`#0000ee` 거부, spacing/shape 키 분리·news-item 비승격, elevation observed-only, motion 생략·비승격·다섯 종류 게이트, 폰트 증거 class, no-substitution, type-role 비병합·unitless keep, favicon/SUIT-license 경계, applicability, layout application-shell·capture-width, voice/illustrative-sample, Named-gaps 프레이밍.

세 번째 부류 중 22곳은 착수 시 인접 완전형이 있었고, 1곳(Motion)은 한정이 없어 신설했으며, 5곳은 기존 한정이 같은 절의 읽기를 다 이름하지 않아 확장했다. Scope·Content·Principles 안팎을 같이 보았다.

## 범위 밖 관찰

- **A5a.** gate `copy-loss` `compared` 0 / `candidates` 75. 이관본 130개 전수 평균 4.4%보다 낮고, `verdict: PASS`는 대조한 바늘 중 손실 없음이지 카피 보존이 아니다. 손 대조: 발행 한국어 카카오게임즈 / 맑은 고딕 / 돋움 DESIGN dest ≥ 1; 발행 영문 미션·원칙명·illustrative 3행 DESIGN dest ≥ 1. 라틴 발행 카피 손실은 눈에 띄지 않음. 고치지 않음.
- **B1.** sibling 전용 `2026-07-13T15:02:24.705Z` / `650px × 230px` / `rgba(255, 255, 255, 0.05)` / `30px 0px 0px` / `0px 0px 28px` / `SUIT-Variable.woff2` / `2024-kakaogames-esg` / `playwright_cli` / `customer-support` / `developer-console` / `news/list` DESIGN dest 0. `h1.section__title` / `H3` / `h3` DESIGN dest 0 (원본도 0). 값·분류 침투 없음. 고치지 않음.
- **D2a.** 식별 `Global player` / `Studio or publishing partner` / `Portfolio visitor` DESIGN dest 0 / provenance dest 0. 동기 `seeks games` / `product-specific needs` / `partner portal` / `browses public information` DESIGN dest 0 / provenance dest 0. Audience는 원본 그룹만. 로그 §13 삭제 행은 식별자 세 이름을 dest 0 증명으로 다시 적음(재수록 형태). 원장 Omission ledger는 무식별. 고치지 않음.
- **E2d.** 부재 단언 행 전수: 로그 §13은 dest 0 / provenance 0이지 「세 파일 어디에도 없다」가 아니다. provenance sibling-only는 mention≠use를 문장에 적음. furiosaai형 자기부정 단언 없음. 고치지 않음.
- **A1 키 경로.** `tokens.components.home-game-card` type/radius/padding/use와 `home-hero-arrow` type/fg/radius/padding/height/states/use가 각 블록에 행으로 있음. icook형 필드 소실 0.

AUDIT_DONE fixes=17
